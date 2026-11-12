/* ISOC Command Roster — interface and in-memory data editor. No localStorage. */
(() => {
  "use strict";

  const source = window.ISOC_ROSTER_DATA;
  if (!source || !Array.isArray(source.people) || !Array.isArray(source.units) || !Array.isArray(source.appointments)) {
    document.body.innerHTML = '<main style="padding:40px;color:#eee;font:16px system-ui">Roster data could not be loaded. Ensure roster-data.js is beside roster.html.</main>';
    throw new Error("ISOC_ROSTER_DATA missing or invalid");
  }

  let data = structuredClone(source);
  // Normalize older single-incumbent records to the multi-incumbent format.
  data.appointments = data.appointments.map(a => ({
    ...a,
    personIds: Array.isArray(a.personIds) ? a.personIds : (a.personId ? [a.personId] : [])
  }));
  data.appointments.forEach(a => { delete a.personId; });
  let selected = null;
  let query = "";
  let collapsed = new Set();
  let activeTab = "people";
  let editingId = null;
  let toastTimer;

  const $ = (selector, root = document) => root.querySelector(selector);
  const $$ = (selector, root = document) => [...root.querySelectorAll(selector)];
  const esc = value => String(value ?? "").replace(/[&<>"']/g, c => ({ "&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;", "'": "&#39;" }[c]));
  const byId = (list, id) => list.find(item => item.id === id) || null;
  const getPerson = id => byId(data.people, id);
  const getUnit = id => byId(data.units, id);
  const getAppointment = id => byId(data.appointments, id);
  const unitAppointments = unitId => data.appointments.filter(a => a.unitId === unitId && !a.parentId).sort(orderSort);
  const children = id => data.appointments.filter(a => a.parentId === id).sort(orderSort);
  const orderSort = (a, b) => (Number(a.order) || 0) - (Number(b.order) || 0);
  const incumbents = appointment => (appointment.personIds || (appointment.personId ? [appointment.personId] : []))
    .map(getPerson).filter(Boolean);
  const displayPerson = p => p ? `${p.rank ? p.rank + " · " : ""}${p.name}` : "VACANT";
  const displayIncumbents = appointment => {
    const people = incumbents(appointment);
    return people.length ? people.map(displayPerson).join(" / ") : "VACANT";
  };
  const norm = value => String(value ?? "").toLocaleLowerCase();
  const isMatch = value => !query || norm(value).includes(query);

  function toast(message) {
    const el = $("#toast");
    el.textContent = message;
    el.classList.add("show");
    clearTimeout(toastTimer);
    toastTimer = setTimeout(() => el.classList.remove("show"), 2300);
  }

  function updateStats() {
    $("#stat-units").textContent = String(data.units.length).padStart(2, "0");
    $("#stat-appointments").textContent = String(data.appointments.length).padStart(2, "0");
    $("#stat-personnel").textContent = String(data.people.length).padStart(2, "0");
    $("#stat-vacant").textContent = String(data.appointments.filter(a => !incumbents(a).length).length).padStart(2, "0");
  }

  function appointmentSearchText(a) {
    const people = incumbents(a);
    const u = getUnit(a.unitId);
    return [a.title, a.duties, ...people.flatMap(p => [p.name, p.rank, p.callsign]), u?.name, u?.short].join(" ");
  }

  function hasMatchingDescendant(a) {
    return children(a.id).some(child => isMatch(appointmentSearchText(child)) || hasMatchingDescendant(child));
  }

  function nodeMarkup(a, depth = 0) {
    const people = incumbents(a);
    const kids = children(a.id);
    const hasKids = kids.length > 0;
    const isCollapsed = collapsed.has(a.id) && !query;
    return `
      <div class="chain-item ${isCollapsed ? "collapsed" : ""}" data-chain="${esc(a.id)}">
        <div class="chain-card">
          <div class="org-node ${selected === a.id ? "selected" : ""}" data-select="${esc(a.id)}" role="button" tabindex="0" aria-label="View ${esc(a.title)}">
            <div class="node-top">
              <span class="node-symbol">${String(depth + 1).padStart(2, "0")}</span>
              <div class="node-copy">
                <div class="node-type">${esc(getUnit(a.unitId)?.short || "ISOC")} / APPOINTMENT</div>
                <div class="node-title">${esc(a.title)}</div>
                <div class="node-incumbent ${people.length ? "" : "vacant"}">${people.length ? people.map(p => esc(displayPerson(p))).join("<br>") : "VACANT"}</div>
              </div>
              ${hasKids ? `<button class="node-toggle" data-toggle="${esc(a.id)}" aria-label="${isCollapsed ? "Expand" : "Collapse"} ${esc(a.title)}">${isCollapsed ? "+" : "−"}</button>` : ""}
            </div>
          </div>
        </div>
        ${hasKids ? `<div class="chain-children">${kids.filter(k => !query || isMatch(appointmentSearchText(k)) || hasMatchingDescendant(k)).map(k => nodeMarkup(k, depth + 1)).join("")}</div>` : ""}
      </div>`;
  }

  function memberCards(unitId) {
    const appointedIds = new Set(data.appointments.flatMap(a => a.personIds || (a.personId ? [a.personId] : [])));
    const members = data.people.filter(p => p.unitId === unitId && !appointedIds.has(p.id));
    if (!members.length) return "";
    const visible = members.filter(p => !query || isMatch([p.name, p.rank, p.callsign, p.status, p.duties].join(" ")));
    if (query && !visible.length) return "";
    return `<div class="unit-members"><div class="unit-members-title">OTHER ASSIGNED PERSONNEL / ${visible.length}</div>${visible.map(p => `
      <div class="member-chip" data-person-select="${esc(p.id)}" role="button" tabindex="0"><span>${esc(p.name)} <small>· ${esc(p.rank || "—")}</small></span><small>${esc(p.callsign || p.status || "MEMBER")}</small></div>`).join("")}</div>`;
  }

  function branchMarkup(unit) {
    const roots = unitAppointments(unit.id);
    const matchesUnit = isMatch([unit.name, unit.short, unit.category, unit.description].join(" "));
    const matchingTree = roots.some(a => isMatch(appointmentSearchText(a)) || hasMatchingDescendant(a));
    const matchingMembers = data.people.some(p => p.unitId === unit.id && isMatch([p.name, p.rank, p.callsign, p.duties].join(" ")));
    if (query && !matchesUnit && !matchingTree && !matchingMembers) return "";

    const isRestricted = unit.id === "22sg" || unit.category === "DESIGNATION ONLY";
    return `
      <section class="branch">
        <div class="branch-stem"></div>
        <div class="org-node unit-node ${selected === unit.id ? "selected" : ""}" data-select-unit="${esc(unit.id)}" role="button" tabindex="0">
          <div class="node-top">
            <span class="node-symbol">${isRestricted ? "◈" : "U"}</span>
            <div class="node-copy">
              <div class="node-type">${esc(unit.short)}</div>
              <div class="node-title">${esc(unit.name)}</div>
              <div class="node-incumbent">${isRestricted ? "PUBLIC DESIGNATION ONLY" : `${roots.length} COMMAND POSTS · ${data.people.filter(p => p.unitId === unit.id).length} PERSONNEL`}</div>
            </div>
          </div>
        </div>
        ${isRestricted ? `<div class="restricted-note">PUBLIC DESIGNATION ONLY<br>NO FURTHER DETAILS PUBLISHED</div>` : `
          <div class="branch-content">
            ${roots.length ? `<div class="connector"></div><div class="chain">${roots.filter(a => !query || isMatch(appointmentSearchText(a)) || hasMatchingDescendant(a)).map(a => nodeMarkup(a)).join("")}</div>` : ""}
            ${memberCards(unit.id)}
          </div>`}
      </section>`;
  }

  function renderMap() {
    const hq = getUnit("hq") || data.units[0];
    const hqRoots = unitAppointments(hq.id);
    const visibleHQ = hqRoots.filter(a => !query || isMatch(appointmentSearchText(a)) || hasMatchingDescendant(a));
    const operational = data.units.filter(u => u.id !== hq.id);
    const visibleUnits = operational.map(branchMarkup).filter(Boolean).join("");
    const rootVisible = !query || isMatch([hq.name, hq.short, hq.description].join(" ")) || visibleHQ.length > 0 || visibleUnits.length > 0;
    $("#org-map").innerHTML = rootVisible ? `
      <div class="org-node root-node ${selected === hq.id ? "selected" : ""}" data-select-unit="${esc(hq.id)}" role="button" tabindex="0">
        <div class="node-top"><span class="node-symbol">HQ</span><div class="node-copy"><div class="node-type">APEX COMMAND ELEMENT</div><div class="node-title">INTERNATIONAL SPECIAL OPERATIONS COMMAND</div><div class="node-incumbent">ISOC HEADQUARTERS</div></div></div>
        <div class="node-count">${data.people.filter(p => p.unitId === hq.id).length} HQ PERSONNEL · ${hqRoots.length} HQ APPOINTMENTS</div>
      </div>
      <div class="connector"></div>
      <div class="branches">
        <section class="branch hq-branch"><div class="branch-stem"></div>
          <div class="org-node unit-node ${selected === "hq-appointments" ? "selected" : ""}" data-select-unit="hq-appointments" role="button" tabindex="0">
            <div class="node-top"><span class="node-symbol">HQ</span><div class="node-copy"><div class="node-type">COMMAND APPOINTMENTS</div><div class="node-title">ISOC HQ ELEMENT</div><div class="node-incumbent">${hqRoots.length} APPOINTMENTS</div></div></div>
          </div>
          <div class="branch-content"><div class="connector"></div><div class="chain">${visibleHQ.map(a => nodeMarkup(a)).join("")}</div>${memberCards(hq.id)}</div>
        </section>
        ${visibleUnits}
      </div>` : `<div class="no-results">NO MATCHING RECORDS FOUND</div>`;
  }

  function detailMarkup() {
    const panel = $("#details");
    if (!selected) {
      panel.innerHTML = `<div class="detail-empty"><span class="detail-seal">ISOC</span><small>COMMAND DIRECTORY</small><h2>Select an<br>organization node</h2><p>Appointment, incumbent, reporting line and duties will be displayed here.</p></div>`;
      return;
    }
    const a = getAppointment(selected);
    const u = getUnit(selected);
    const assignedPeople = a ? incumbents(a) : [];
    if (!a && !u && selected !== "hq-appointments") {
      const member = getPerson(selected);
      if (!member) { selected = null; detailMarkup(); return; }
      panel.innerHTML = `<div class="detail-kicker">PERSONNEL RECORD</div><h2 class="detail-title">${esc(member.name)}</h2><div class="detail-subtitle">${esc(member.rank)} / ${esc(getUnit(member.unitId)?.name || "UNASSIGNED")}</div><div class="detail-rule"></div><div class="detail-label">CALLSIGN</div><div class="detail-value">${esc(member.callsign || "—")}</div><div class="detail-label">STATUS</div><div class="detail-value">${esc(member.status || "ACTIVE")}</div><div class="detail-label">DUTIES / NOTES</div><div class="detail-description">${esc(member.duties || "No additional notes recorded.")}</div><div class="detail-actions"><button data-edit-person="${esc(member.id)}">EDIT PERSONNEL</button></div>`;
      return;
    }
    if (selected === "hq-appointments") {
      panel.innerHTML = `<div class="detail-kicker">HEADQUARTERS ELEMENT</div><h2 class="detail-title">ISOC HQ</h2><div class="detail-subtitle">COMMAND APPOINTMENTS</div><div class="detail-rule"></div><div class="detail-label">APPOINTMENTS</div><div class="detail-value">${hqList()}</div><div class="detail-actions"><button data-edit-tab="appointments">MANAGE APPOINTMENTS</button></div>`;
      return;
    }
    const title = a ? a.title : u.name;
    const type = a ? "COMMAND APPOINTMENT" : (u.id === "hq" ? "HEADQUARTERS" : u.category);
    const parent = a?.parentId ? getAppointment(a.parentId) : null;
    const assigned = u ? data.people.filter(x => x.unitId === u.id) : [];
    const duties = a ? a.duties : u.description;
    const incumbentValue = a ? displayIncumbents(a) : (u.id === "22sg" ? "PUBLIC DESIGNATION ONLY" : `${assigned.length} ASSIGNED PERSONNEL`);
    panel.innerHTML = `
      <div class="detail-kicker">${esc(type)}</div><h2 class="detail-title">${esc(title)}</h2><div class="detail-subtitle">${esc(a ? getUnit(a.unitId)?.name : (u.short || u.name))}</div>
      <div class="detail-rule"></div><div class="detail-label">${a ? (assignedPeople.length > 1 ? "APPOINTMENT HOLDERS" : "CURRENT INCUMBENT") : "ELEMENT"}</div><div class="detail-value ${a && !assignedPeople.length ? "vacant" : ""}">${esc(incumbentValue)}</div>
      ${assignedPeople.length ? `<div class="detail-label">${assignedPeople.length > 1 ? "APPOINTMENT HOLDERS" : "RANK / CALLSIGN"}</div>${assignedPeople.map(person => `<div class="detail-person"><strong>${esc(person.name)}</strong><span>${esc(person.rank || "—")} · ${esc(person.callsign || "—")}</span></div>`).join("")}` : ""}
      ${parent ? `<div class="detail-label">REPORTS TO</div><div class="detail-value">${esc(parent.title)}</div>` : ""}
      ${a && !parent ? `<div class="detail-label">REPORTING LEVEL</div><div class="detail-value">Unit command appointment</div>` : ""}
      <div class="detail-label">DUTIES / REMIT</div><div class="detail-description">${esc(duties || "No duties have been entered.")}</div>
      ${u && u.id !== "22sg" && u.id !== "hq" ? `<div class="detail-label">UNIT PERSONNEL</div>${assigned.map(x => `<div class="detail-person"><strong>${esc(x.name)}</strong><span>${esc(x.rank || "—")} · ${esc(x.callsign || "—")}</span></div>`).join("") || `<div class="detail-description">No personnel assigned.</div>`}` : ""}
      ${a ? `<div class="detail-actions"><button data-edit-appointment="${esc(a.id)}">EDIT APPOINTMENT</button><button data-assign="${esc(a.id)}">MANAGE APPOINTMENT HOLDERS</button></div>` : `<div class="detail-actions"><button data-edit-unit="${esc(u.id)}">EDIT UNIT</button></div>`}`;
  }

  function hqList() {
    return unitAppointments("hq").map(a => `<div style="padding:5px 0;border-bottom:1px solid #30363a">${esc(a.title)} <span style="color:#9aa3a8">— ${esc(displayIncumbents(a))}</span></div>`).join("");
  }

  function renderPersonnelIndex() {
    const units = data.units.filter(u => u.id !== "hq");
    $("#unit-rosters").innerHTML = units.map(u => {
      const appointed = new Set(data.appointments.flatMap(a => a.personIds || (a.personId ? [a.personId] : [])));
      const members = data.people.filter(p => p.unitId === u.id && !appointed.has(p.id));
      const count = data.people.filter(p => p.unitId === u.id).length;
      const restricted = u.id === "22sg" || u.category === "DESIGNATION ONLY";
      return `<article class="roster-card"><div class="roster-card-head"><strong>${esc(u.name)} / ${esc(u.short)}</strong><span>${restricted ? "RESTRICTED" : `${String(count).padStart(2, "0")} PERSONNEL`}</span></div>${restricted ? `<div class="empty-note">Public designation only. No personnel details are published.</div>` : members.length ? members.map(p => `<div class="roster-person"><div><strong>${esc(p.name)}</strong><small>${esc(p.rank || "—")} · ${esc(p.callsign || "—")}</small></div><em>${esc(p.status || "ACTIVE")}</em></div>`).join("") : `<div class="empty-note">No additional personnel assigned.</div>`}</article>`;
    }).join("");
  }

  function render() {
    updateStats();
    renderMap();
    detailMarkup();
    renderPersonnelIndex();
  }

  function openModal(tab = "people") {
    activeTab = tab;
    editingId = null;
    $("#modal").hidden = false;
    $$(".tab").forEach(btn => btn.classList.toggle("active", btn.dataset.tab === tab));
    renderModal();
  }

  function closeModal() {
    $("#modal").hidden = true;
    editingId = null;
  }

  function setTab(tab) {
    activeTab = tab;
    editingId = null;
    $$(".tab").forEach(btn => btn.classList.toggle("active", btn.dataset.tab === tab));
    renderModal();
  }

  function options(items, selectedValue, label, allowBlank = true) {
    return `${allowBlank ? `<option value="">— None / vacant —</option>` : ""}${items.map(item => `<option value="${esc(item.id)}" ${item.id === selectedValue ? "selected" : ""}>${esc(label(item))}</option>`).join("")}`;
  }

  function inputField(label, name, value = "", wide = false, type = "text") {
    return `<label class="${wide ? "wide" : ""}">${label}<input type="${type}" name="${name}" value="${esc(value)}"></label>`;
  }

  function formMarkup() {
    const editing = editingId && editingId !== "__new__";
    const old = editing ? (activeTab === "people" ? getPerson(editingId) : activeTab === "units" ? getUnit(editingId) : getAppointment(editingId)) || {} : {};
    let fields = "";
    if (activeTab === "people") {
      fields = `
        ${inputField("FULL NAME", "name", old.name)}
        ${inputField("RANK", "rank", old.rank)}
        ${inputField("CALLSIGN / POSITION", "callsign", old.callsign)}
        <label>ASSIGNED UNIT<select name="unitId">${options(data.units, old.unitId, u => `${u.name} — ${u.short}`, false)}</select></label>
        <label>STATUS<select name="status">${["ACTIVE", "LOA", "RESERVE", "INACTIVE"].map(s => `<option ${old.status === s ? "selected" : ""}>${s}</option>`).join("")}</select></label>
        ${inputField("SERVICE / MEMBER ID", "serviceNumber", old.serviceNumber)}
        <label class="wide">DUTIES / NOTES<textarea name="duties">${esc(old.duties || "")}</textarea></label>`;
    } else if (activeTab === "units") {
      fields = `
        ${inputField("UNIT NAME", "name", old.name)}
        ${inputField("SHORT LABEL", "short", old.short)}
        ${inputField("CATEGORY", "category", old.category)}
        <label class="wide">DESCRIPTION<textarea name="description">${esc(old.description || "")}</textarea></label>`;
    } else {
      const unitId = old.unitId || "sas";
      const parentOptions = data.appointments.filter(a => a.id !== editingId && a.unitId === unitId);
      fields = `
        <label>UNIT<select name="unitId">${options(data.units.filter(u => u.id !== "22sg"), unitId, u => u.name, false)}</select></label>
        <label>REPORTS TO<select name="parentId">${options(parentOptions, old.parentId, a => a.title, true)}</select></label>
        ${inputField("APPOINTMENT TITLE", "title", old.title)}
        <label class="wide">APPOINTMENT HOLDER(S)
          <select name="personIds" multiple size="5" class="multi-incumbent-select">
            ${data.people.filter(p => p.unitId === unitId || (old.personIds || (old.personId ? [old.personId] : [])).includes(p.id)).map(p => `<option value="${esc(p.id)}" ${(old.personIds || (old.personId ? [old.personId] : [])).includes(p.id) ? "selected" : ""}>${esc(p.rank || "—")} · ${esc(p.name)}</option>`).join("")}
          </select>
          <small class="form-help">Hold Ctrl (Windows/Linux) or Command (Mac) to select multiple people. Select exactly two people for Western, Central and Eastern Operations Command.</small>
        </label>
        ${inputField("DISPLAY ORDER", "order", old.order ?? 1, false, "number")}
        <label class="wide">DUTIES / RESPONSIBILITIES<textarea name="duties">${esc(old.duties || "")}</textarea></label>
        <p class="form-help wide">Reporting lines are defined by “Reports to”. Leave this blank for a unit's top command appointment. Select the unit first, then choose a parent in that same unit.</p>`;
    }
    return `<form id="record-form" class="form-panel"><h3>${editing ? "EDIT RECORD" : "CREATE NEW RECORD"}</h3><div class="form-grid">${fields}</div><div class="form-actions"><button type="button" data-cancel-form>CANCEL</button><button class="save" type="submit">SAVE RECORD</button></div></form>`;
  }

  function renderModal() {
    const content = $("#modal-content");
    if (activeTab === "data") {
      content.innerHTML = `
        <div class="backup-grid">
          <div class="backup-box"><h3>EXPORT UPDATED DATA</h3><p>Download the current in-browser edits as a ready-to-use JavaScript data file. Replace your existing roster-data.js with the downloaded file to make changes permanent in the website source.</p><button class="add-button" data-export-js>EXPORT JS DATA</button></div>
          <div class="backup-box"><h3>EXPORT / IMPORT JSON</h3><p>JSON is useful for a portable backup or moving data between copies of the roster.</p><button class="add-button" data-export-json>DOWNLOAD JSON</button><p><input type="file" id="import-file" accept=".json,application/json"></p></div>
          <div class="backup-box"><h3>IMPORTANT: HOW DATA IS SAVED</h3><p>This version does not use localStorage, cookies, a database or browser persistence. Changes remain in memory while this page is open. Export the JS data file before refreshing or closing the page.</p></div>
          <div class="backup-box"><h3>RESTORE ORIGINAL DATA</h3><p>Discard current unsaved edits and reload the initial roster-data.js file.</p><button class="add-button" data-reset-data>RESTORE DEFAULT DATA</button></div>
        </div>`;
      return;
    }

    const records = activeTab === "people" ? data.people : activeTab === "units" ? data.units : data.appointments;
    const rows = records.map(item => {
      const title = activeTab === "people" ? item.name : activeTab === "units" ? item.name : item.title;
      const subtitle = activeTab === "people" ? `${item.rank || "—"} · ${getUnit(item.unitId)?.name || "No unit"}` : activeTab === "units" ? `${item.short || ""} · ${item.category || ""}` : `${getUnit(item.unitId)?.name || ""} · ${displayIncumbents(item)}`;
      return `<div class="record-row"><div><strong>${esc(title || "Untitled record")}</strong><small>${esc(subtitle)}</small></div><div class="row-actions"><button data-edit-record="${esc(item.id)}">EDIT</button><button class="delete" data-delete-record="${esc(item.id)}">DELETE</button></div></div>`;
    }).join("");
    content.innerHTML = `<div class="list-toolbar"><p>${records.length} ${activeTab.toUpperCase()} RECORDS · EDITS ARE IN MEMORY UNTIL EXPORTED</p><button class="add-button" data-add-record>+ ADD ${activeTab === "people" ? "PERSONNEL" : activeTab === "units" ? "UNIT" : "APPOINTMENT"}</button></div><div class="record-list">${rows || `<div class="empty-note">No records in this category.</div>`}</div>${editingId ? formMarkup() : ""}`;
  }

  function saveRecord(event) {
    event.preventDefault();
    const formData = Object.fromEntries(new FormData(event.currentTarget).entries());
    const isNew = !editingId || editingId === "__new__";
    const id = isNew ? `${activeTab === "people" ? "p" : activeTab === "units" ? "u" : "a"}-${crypto.randomUUID()}` : editingId;

    if (activeTab === "people") {
      const record = { ...formData, id, name: formData.name.trim(), rank: formData.rank.trim(), callsign: formData.callsign.trim(), duties: formData.duties.trim() };
      if (!record.name) return toast("A personnel name is required.");
      upsert(data.people, record);
    } else if (activeTab === "units") {
      const record = { ...formData, id, name: formData.name.trim(), short: formData.short.trim(), category: formData.category.trim(), description: formData.description.trim() };
      if (!record.name) return toast("A unit name is required.");
      upsert(data.units, record);
    } else {
      const holderSelect = event.currentTarget.querySelector('[name="personIds"]');
      const personIds = holderSelect ? [...holderSelect.selectedOptions].map(option => option.value) : [];
      const record = { ...formData, id, parentId: formData.parentId || null, personIds, order: Number(formData.order) || 1, duties: formData.duties.trim() };
      delete record.personId;
      if (!record.title.trim()) return toast("An appointment title is required.");
      if (["hq-west", "hq-central", "hq-east"].includes(id) && personIds.length !== 2) {
        return toast("Assign exactly two people to each regional Operations Command appointment.");
      }
      if (record.parentId === id) return toast("An appointment cannot report to itself.");
      if (wouldCreateCycle(id, record.parentId)) return toast("That reporting line would create a circular hierarchy.");
      upsert(data.appointments, record);
    }
    editingId = null;
    render();
    renderModal();
    toast("Record updated in memory. Export JS data to keep it.");
  }

  function upsert(list, record) {
    const index = list.findIndex(item => item.id === record.id);
    if (index < 0) list.push(record); else list[index] = record;
  }

  function wouldCreateCycle(id, parentId) {
    let current = parentId;
    const seen = new Set([id]);
    while (current) {
      if (seen.has(current)) return true;
      seen.add(current);
      current = getAppointment(current)?.parentId || null;
    }
    return false;
  }

  function deleteRecord(id) {
    if (activeTab === "people") {
      if (!confirm("Delete this personnel record? Any appointment held by this person will become vacant.")) return;
      data.people = data.people.filter(p => p.id !== id);
      data.appointments.forEach(a => { a.personIds = (a.personIds || (a.personId ? [a.personId] : [])).filter(personId => personId !== id); delete a.personId; });
    } else if (activeTab === "units") {
      if (data.appointments.some(a => a.unitId === id) || data.people.some(p => p.unitId === id)) return toast("Reassign or remove this unit's personnel and appointments first.");
      if (!confirm("Delete this unit?")) return;
      data.units = data.units.filter(u => u.id !== id);
    } else {
      const target = getAppointment(id);
      if (!target) return;
      if (!confirm("Delete this appointment and all subordinate appointments beneath it? Incumbents will remain in the personnel register.")) return;
      const remove = new Set();
      const collect = parentId => children(parentId).forEach(child => { remove.add(child.id); collect(child.id); });
      collect(id);
      remove.add(id);
      data.appointments = data.appointments.filter(a => !remove.has(a.id));
    }
    if (selected === id) selected = null;
    render();
    renderModal();
    toast("Record deleted in memory. Export JS data to keep the change.");
  }

  function download(filename, content, type) {
    const blob = new Blob([content], { type });
    const url = URL.createObjectURL(blob);
    const link = document.createElement("a");
    link.href = url;
    link.download = filename;
    document.body.appendChild(link);
    link.click();
    link.remove();
    setTimeout(() => URL.revokeObjectURL(url), 1000);
  }

  function exportJS() {
    const js = `/* ISOC COMMAND ROSTER DATA — replace roster-data.js with this file. */\nwindow.ISOC_ROSTER_DATA = ${JSON.stringify(data, null, 2)};\n`;
    download("roster-data.js", js, "text/javascript;charset=utf-8");
    toast("Updated roster-data.js downloaded.");
  }

  function exportJSON() {
    download("isoc-roster-backup.json", JSON.stringify(data, null, 2), "application/json");
    toast("JSON backup downloaded.");
  }

  async function importJSON(file) {
    try {
      const parsed = JSON.parse(await file.text());
      if (!Array.isArray(parsed.people) || !Array.isArray(parsed.units) || !Array.isArray(parsed.appointments)) throw new Error("Expected people, units and appointments arrays.");
      data = parsed;
      selected = null;
      render();
      renderModal();
      toast("JSON imported into memory. Export JS data to keep it.");
    } catch (error) {
      toast(`Import failed: ${error.message}`);
    }
  }

  function resetData() {
    if (!confirm("Discard all current in-memory edits and reload the original roster-data.js?")) return;
    data = structuredClone(source);
    selected = null;
    collapsed.clear();
    render();
    renderModal();
    toast("Original data restored.");
  }

  function beginEdit(id) {
    editingId = id;
    renderModal();
    setTimeout(() => $("#record-form")?.scrollIntoView({ block: "nearest", behavior: "smooth" }), 0);
  }

  function activateNode(el) {
    const id = el.dataset.select || el.dataset.selectUnit || el.dataset.personSelect;
    if (!id) return;
    selected = id;
    render();
  }

  // Main delegated click handling.
  document.addEventListener("click", event => {
    const toggle = event.target.closest("[data-toggle]");
    if (toggle) {
      event.stopPropagation();
      const id = toggle.dataset.toggle;
      collapsed.has(id) ? collapsed.delete(id) : collapsed.add(id);
      renderMap();
      return;
    }
    const select = event.target.closest("[data-select], [data-select-unit], [data-person-select]");
    if (select) { activateNode(select); return; }

    if (event.target.closest("#manage")) { openModal("people"); return; }
    if (event.target.closest("#close-modal")) { closeModal(); return; }
    if (event.target.id === "modal") { closeModal(); return; }
    const tab = event.target.closest("[data-tab]");
    if (tab) { setTab(tab.dataset.tab); return; }
    if (event.target.closest("[data-add-record]")) { editingId = "__new__"; renderModal(); return; }
    const edit = event.target.closest("[data-edit-record]");
    if (edit) { beginEdit(edit.dataset.editRecord); return; }
    const del = event.target.closest("[data-delete-record]");
    if (del) { deleteRecord(del.dataset.deleteRecord); return; }
    if (event.target.closest("[data-cancel-form]")) { editingId = null; renderModal(); return; }
    const editAppointment = event.target.closest("[data-edit-appointment]");
    if (editAppointment) { openModal("appointments"); beginEdit(editAppointment.dataset.editAppointment); return; }
    const editPerson = event.target.closest("[data-edit-person]");
    if (editPerson) { openModal("people"); beginEdit(editPerson.dataset.editPerson); return; }
    const editUnit = event.target.closest("[data-edit-unit]");
    if (editUnit) { openModal("units"); beginEdit(editUnit.dataset.editUnit); return; }
    const assign = event.target.closest("[data-assign]");
    if (assign) { openModal("appointments"); beginEdit(assign.dataset.assign); return; }
    const editTab = event.target.closest("[data-edit-tab]");
    if (editTab) { openModal(editTab.dataset.editTab); return; }
    if (event.target.closest("[data-export-js]")) { exportJS(); return; }
    if (event.target.closest("[data-export-json]")) { exportJSON(); return; }
    if (event.target.closest("[data-reset-data]")) { resetData(); return; }
    if (event.target.closest("#expand-all")) { collapsed.clear(); renderMap(); return; }
    if (event.target.closest("#collapse-all")) { data.appointments.forEach(a => { if (children(a.id).length) collapsed.add(a.id); }); renderMap(); return; }
    if (event.target.closest("#reset-view")) { query = ""; $("#search").value = ""; collapsed.clear(); selected = null; render(); $("#map-viewport").scrollTo({ left: 0, top: 0, behavior: "smooth" }); return; }
  });

  document.addEventListener("submit", event => {
    if (event.target.id === "record-form") saveRecord(event);
  });

  document.addEventListener("change", event => {
    if (event.target.id === "import-file" && event.target.files?.[0]) importJSON(event.target.files[0]);
    // Update the incumbent dropdown choices when the appointment's unit changes.
    if (event.target.name === "unitId" && activeTab === "appointments") {
      const select = $("#record-form [name=personIds]");
      const currentPeople = select ? [...select.selectedOptions].map(option => option.value) : [];
      const selectedUnit = event.target.value;
      if (select) select.innerHTML = data.people.filter(p => p.unitId === selectedUnit || currentPeople.includes(p.id)).map(p => `<option value="${esc(p.id)}" ${currentPeople.includes(p.id) ? "selected" : ""}>${esc(p.rank || "—")} · ${esc(p.name)}</option>`).join("");
      const parentSelect = $("#record-form [name=parentId]");
      if (parentSelect) {
        const currentParent = parentSelect.value;
        parentSelect.innerHTML = options(data.appointments.filter(a => a.id !== editingId && a.unitId === selectedUnit), currentParent, a => a.title, true);
      }
    }
  });

  $("#search").addEventListener("input", event => {
    query = norm(event.target.value.trim());
    renderMap();
  });

  document.addEventListener("keydown", event => {
    if (event.key === "/" && !["INPUT", "TEXTAREA", "SELECT"].includes(document.activeElement.tagName)) {
      event.preventDefault(); $("#search").focus();
    }
    if (event.key === "Escape") closeModal();
    if ((event.key === "Enter" || event.key === " ") && event.target.matches("[data-select], [data-select-unit], [data-person-select]")) {
      event.preventDefault(); activateNode(event.target);
    }
  });

  render();
})();
