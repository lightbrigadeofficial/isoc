/* =========================================================
   KSOL UNIFORMS — FORCE / PATTERN CATALOGUE
   Edit the uniformDirectory data below to maintain the page.
========================================================= */

const COMPONENT_NAMES = [
    "HEADGEAR", "EARWEAR", "EYEWEAR", "FACEWEAR",
    "SHIRT / TOP", "VEST", "BELT", "PANTS / BOTTOM",
    "HANDWEAR", "FOOTWEAR", "BACKPACK", "WRISTWEAR"
];

/*
  Colour references below are coordinated appearance guidance for the
  fictional BRM5/KSOL catalogue. They are not claims about exact game item names.
  SEALS may combine components across all four listed pattern families.
*/
const patternComponents = {
    MTP: {
        "HEADGEAR": [ ["Colour / Camo", "MTP / Multi-Terrain Pattern"], ["Base colour", "MTP; olive drab accessories" ] ],
        "EARWEAR": [["System colour", "Olive drab / ranger green"], ["Camo", "Solid green or MTP"]],
        "EYEWEAR": [["Frame", "Black / dark tan"], ["Lens", "Clear, smoke or amber"]],
        "FACEWEAR": [["Primary", "MTP / olive drab"], ["Alternative", "Ranger green / coyote brown"]],
        "SHIRT / TOP": [["Uniform pattern", "MTP"], ["Base colour", "Multi-terrain camouflage"]],
        "VEST": [["Primary colour", "MTP / ranger green"], ["Alternative", "Coyote brown / olive drab"]],
        "BELT": [["Colour", "Olive drab / coyote brown / black"]],
        "PANTS / BOTTOM": [["Uniform pattern", "MTP"], ["Base colour", "Multi-terrain camouflage"]],
        "HANDWEAR": [["Colour", "Olive drab / coyote brown / black"]],
        "FOOTWEAR": [["Colour", "Coyote brown / tan / brown"]],
        "BACKPACK": [["Colour / Camo", "MTP / olive drab / coyote brown"]],
        "WRISTWEAR": [["Colour", "Black / olive drab"]]
    },
    VARICAM: {
        "HEADGEAR": [["Colour / Camo", "Varicam"], ["Base colour", "Variable camouflage pattern"]],
        "EARWEAR": [["System colour", "Black / ranger green"], ["Camo", "Varicam or solid neutral"]],
        "EYEWEAR": [["Frame", "Black / dark grey"], ["Lens", "Clear, smoke or amber"]],
        "FACEWEAR": [["Primary", "Varicam"], ["Alternative", "Black / ranger green"]],
        "SHIRT / TOP": [["Uniform pattern", "Varicam"], ["Base colour", "Variable camouflage pattern"]],
        "VEST": [["Primary colour", "Ranger green / black"], ["Alternative", "Varicam"]],
        "BELT": [["Colour", "Black / ranger green"]],
        "PANTS / BOTTOM": [["Uniform pattern", "Varicam"], ["Base colour", "Variable camouflage pattern"]],
        "HANDWEAR": [["Colour", "Black / ranger green"]],
        "FOOTWEAR": [["Colour", "Black / dark tan"]],
        "BACKPACK": [["Colour / Camo", "Varicam / ranger green / black"]],
        "WRISTWEAR": [["Colour", "Black / dark grey"]]
    },
    BDU: {
        "HEADGEAR": [["Colour / Camo", "Olive drab / woodland BDU"], ["Base colour", "Olive drab green"]],
        "EARWEAR": [["System colour", "Olive drab / black"], ["Camo", "Solid green"]],
        "EYEWEAR": [["Frame", "Black / dark green"], ["Lens", "Clear, smoke or amber"]],
        "FACEWEAR": [["Primary", "Olive drab / woodland"], ["Alternative", "Ranger green"]],
        "SHIRT / TOP": [["Uniform pattern", "BDU woodland"], ["Base colour", "Olive drab / woodland green"]],
        "VEST": [["Primary colour", "Olive drab / ranger green"], ["Alternative", "Black / coyote brown"]],
        "BELT": [["Colour", "Olive drab / black / coyote brown"]],
        "PANTS / BOTTOM": [["Uniform pattern", "BDU woodland"], ["Base colour", "Olive drab / woodland green"]],
        "HANDWEAR": [["Colour", "Olive drab / black"]],
        "FOOTWEAR": [["Colour", "Black / olive drab"]],
        "BACKPACK": [["Colour / Camo", "Woodland / olive drab / ranger green"]],
        "WRISTWEAR": [["Colour", "Black / olive drab"]]
    },
    DCU: {
        "HEADGEAR": [["Colour / Camo", "Desert Camouflage Uniform (DCU)"], ["Base colour", "Tan / sand / brown"]],
        "EARWEAR": [["System colour", "Tan / coyote brown"], ["Camo", "Solid desert neutral"]],
        "EYEWEAR": [["Frame", "Black / tan"], ["Lens", "Clear, smoke or amber"]],
        "FACEWEAR": [["Primary", "Tan / coyote brown / DCU"], ["Alternative", "Sand"]],
        "SHIRT / TOP": [["Uniform pattern", "DCU tri-colour desert"], ["Base colour", "Tan / sand / brown"]],
        "VEST": [["Primary colour", "Coyote brown / tan"], ["Alternative", "DCU / ranger green"]],
        "BELT": [["Colour", "Coyote brown / tan / black"]],
        "PANTS / BOTTOM": [["Uniform pattern", "DCU tri-colour desert"], ["Base colour", "Tan / sand / brown"]],
        "HANDWEAR": [["Colour", "Tan / coyote brown / black"]],
        "FOOTWEAR": [["Colour", "Tan / coyote brown"]],
        "BACKPACK": [["Colour / Camo", "DCU / coyote brown / tan"]],
        "WRISTWEAR": [["Colour", "Black / tan"]]
    },
    AOR1: {
        "HEADGEAR": [["Colour / Camo", "AOR1 desert digital"], ["Base colour", "Desert digital camouflage"]],
        "EARWEAR": [["System colour", "Tan / coyote brown"], ["Camo", "Solid desert neutral"]],
        "EYEWEAR": [["Frame", "Black / tan"], ["Lens", "Clear, smoke or amber"]],
        "FACEWEAR": [["Primary", "AOR1 / tan / coyote brown"], ["Alternative", "Sand"]],
        "SHIRT / TOP": [["Uniform pattern", "AOR1"], ["Base colour", "Desert digital camouflage"]],
        "VEST": [["Primary colour", "Coyote brown / tan"], ["Alternative", "AOR1"]],
        "BELT": [["Colour", "Coyote brown / tan / black"]],
        "PANTS / BOTTOM": [["Uniform pattern", "AOR1"], ["Base colour", "Desert digital camouflage"]],
        "HANDWEAR": [["Colour", "Tan / coyote brown / black"]],
        "FOOTWEAR": [["Colour", "Tan / coyote brown"]],
        "BACKPACK": [["Colour / Camo", "AOR1 / coyote brown / tan"]],
        "WRISTWEAR": [["Colour", "Black / tan"]]
    },
    AOR2: {
        "HEADGEAR": [["Colour / Camo", "AOR2 woodland digital"], ["Base colour", "Woodland digital camouflage"]],
        "EARWEAR": [["System colour", "Ranger green / olive drab"], ["Camo", "Solid green neutral"]],
        "EYEWEAR": [["Frame", "Black / dark green"], ["Lens", "Clear, smoke or amber"]],
        "FACEWEAR": [["Primary", "AOR2 / ranger green"], ["Alternative", "Olive drab"]],
        "SHIRT / TOP": [["Uniform pattern", "AOR2"], ["Base colour", "Woodland digital camouflage"]],
        "VEST": [["Primary colour", "Ranger green / olive drab"], ["Alternative", "AOR2"]],
        "BELT": [["Colour", "Ranger green / olive drab / black"]],
        "PANTS / BOTTOM": [["Uniform pattern", "AOR2"], ["Base colour", "Woodland digital camouflage"]],
        "HANDWEAR": [["Colour", "Ranger green / olive drab / black"]],
        "FOOTWEAR": [["Colour", "Black / olive drab"]],
        "BACKPACK": [["Colour / Camo", "AOR2 / ranger green / olive drab"]],
        "WRISTWEAR": [["Colour", "Black / olive drab"]]
    }
};

function makeComponents(pattern) {
    return COMPONENT_NAMES.map(name => ({
        name,
        entries: (patternComponents[pattern][name] || []).map(([label, value]) => ({label, value}))
    }));
}

// Add the relative video file paths here. Leave a value empty to use the pattern placeholder.
const UNIFORM_VIDEO_SOURCES = {
    sasMtp: "web_media/mtp.mp4",
    seals: {
        BDU: "web_media/bdu.mp4",
        DCU: "web_media/bdu.mp4",
        AOR1: "web_media/aor1.mp4",
        AOR2: "web_media/aor2.mp4"
    },
    soarVaricam: "web_media/soar.mp4"
};

const uniformDirectory = [
    {
        id: "KSOL-UFM-SAS-001", category: "sas", role: "mtp",
        name: "SAS — MTP FIELD UNIFORM", type: "SAS / FIELD UNIFORM",
        video: UNIFORM_VIDEO_SOURCES.sasMtp, pattern: "MTP",
        description: "The authorized field uniform for SAS personnel. MTP is the sole standard uniform pattern for this force.",
        specs: {designation: "KSOL-UFM-SAS-001", force: "SAS", pattern: "MTP", uniformClass: "FIELD UNIFORM", status: "AUTHORIZED"},
        components: makeComponents("MTP"),
        variants: [{name: "SINGLE STANDARD", description: "MTP is the only standard SAS uniform pattern. No alternate force pattern is listed in this catalogue."}]
    },
    ...["BDU", "DCU", "AOR1", "AOR2"].map((pattern, index) => ({
        id: `KSOL-UFM-SEALS-${String(index + 1).padStart(3, "0")}`,
        category: "seals", role: pattern.toLowerCase(), name: `SEALS — ${pattern} UNIFORM`,
        type: `SEALS / ${pattern} PATTERN`, video: UNIFORM_VIDEO_SOURCES.seals[pattern], pattern,
        description: `Authorized SEALS uniform family using the ${pattern} pattern. SEALS members may combine compatible components from any of the four authorized SEALS pattern families.`,
        specs: {designation: `KSOL-UFM-SEALS-${String(index + 1).padStart(3, "0")}`, force: "SEALS", pattern, uniformClass: "FIELD UNIFORM", status: "AUTHORIZED"},
        components: makeComponents(pattern),
        variants: [{name: "SEALS MIX-AND-MATCH", description: "SEALS personnel may freely combine components from BDU, DCU, AOR1 and AOR2 according to personal preference and the in-game mission or operation."}]
    })),
    {
        id: "KSOL-UFM-SOAR-001", category: "soar", role: "varicam",
        name: "160TH SOAR — VARICAM FIELD UNIFORM", type: "160TH SOAR / FIELD UNIFORM",
        video: UNIFORM_VIDEO_SOURCES.soarVaricam, pattern: "VARICAM",
        description: "The authorized field uniform for 160th SOAR personnel. Varicam is the sole standard uniform pattern for this force.",
        specs: {designation: "KSOL-UFM-SOAR-001", force: "160TH SOAR", pattern: "VARICAM", uniformClass: "FIELD UNIFORM", status: "AUTHORIZED"},
        components: makeComponents("VARICAM"),
        variants: [{name: "SINGLE STANDARD", description: "Varicam is the only standard 160th SOAR uniform pattern. No alternate force pattern is listed in this catalogue."}]
    }
];

const uniformGrid = document.getElementById("uniformGrid");
const uniformSearch = document.getElementById("uniformSearch");
const categoryTabs = document.querySelectorAll(".uniform-category-tab");
const roleTabs = document.querySelectorAll(".uniform-role-tab");
const standardRoles = document.getElementById("standardRoles");
const catalogueTitle = document.getElementById("catalogueTitle");
const catalogueCategory = document.getElementById("catalogueCategory");
const uniformCount = document.getElementById("uniformCount");
const modal = document.getElementById("uniformModal");
const modalClose = document.getElementById("uniformModalClose");
const modalDesignation = document.getElementById("modalDesignation");
const modalVideo = document.getElementById("uniformModalVideo");
const modalCategory = document.getElementById("modalCategory");
const modalTitle = document.getElementById("modalTitle");
const modalDescription = document.getElementById("modalDescription");
const modalStatus = document.getElementById("modalStatus");
const modalSpecs = document.getElementById("modalSpecs");
const modalComponents = document.getElementById("modalComponents");
const modalVariants = document.getElementById("modalVariants");

let activeCategory = "sas";
let activeRole = "bdu";

const categoryNames = {sas: "SAS", seals: "SEALS", soar: "160TH SOAR"};
const roleNames = {bdu: "BDU", dcu: "DCU", aor1: "AOR1", aor2: "AOR2"};

function formatFieldName(field) {
    return field.replace(/([A-Z])/g, " $1").trim().toUpperCase();
}

function getVisibleUniforms() {
    let result = uniformDirectory.filter(item => item.category === activeCategory);
    if (activeCategory === "seals") result = result.filter(item => item.role === activeRole);
    const query = uniformSearch ? uniformSearch.value.trim().toLowerCase() : "";
    if (query) {
        result = result.filter(item => {
            const componentText = item.components.flatMap(c => c.entries.flatMap(e => [e.label, e.value]));
            const variantText = item.variants.flatMap(v => [v.name, v.description]);
            return [item.id, item.name, item.type, item.description, item.pattern, ...Object.values(item.specs), ...componentText, ...variantText].join(" ").toLowerCase().includes(query);
        });
    }
    return result;
}

function renderUniforms() {
    if (!uniformGrid) return;
    const results = getVisibleUniforms();
    uniformCount.textContent = String(results.length).padStart(2, "0");
    if (!results.length) {
        uniformGrid.innerHTML = `<div class="uniform-empty">NO UNIFORM SYSTEMS MATCH THE CURRENT QUERY.</div>`;
        return;
    }
    uniformGrid.innerHTML = "";
    results.forEach(uniform => {
        const card = document.createElement("article");
        card.className = "uniform-card";
        card.innerHTML = `
            <div class="uniform-card-image pattern-${uniform.pattern.toLowerCase()}">
                ${uniform.video ? `<video class="uniform-card-video" src="${uniform.video}" muted autoplay loop playsinline preload="metadata" aria-label="${uniform.name} video preview"></video>` : `<div class="pattern-preview"><span>${uniform.pattern}</span><small>AUTHORIZED PATTERN</small></div>`}
            </div>
            <div class="uniform-card-content">
                <div class="uniform-card-id">${uniform.id}</div>
                <h3>${uniform.name}</h3>
                <p class="uniform-card-description">${uniform.description}</p>
            </div>
            <div class="uniform-card-footer"><span class="uniform-card-type">${uniform.type}</span><span class="uniform-card-arrow">→</span></div>`;
        card.addEventListener("click", () => openUniform(uniform));
        uniformGrid.appendChild(card);
    });
}

function updateCatalogueHeading() {
    catalogueCategory.textContent = categoryNames[activeCategory];
    catalogueTitle.textContent = activeCategory === "seals" ? roleNames[activeRole] + " UNIFORM" : (activeCategory === "sas" ? "MTP FIELD UNIFORM" : "VARICAM FIELD UNIFORM");
    standardRoles.classList.toggle("hidden", activeCategory !== "seals");
}

categoryTabs.forEach(button => button.addEventListener("click", () => {
    activeCategory = button.dataset.category;
    categoryTabs.forEach(tab => tab.classList.toggle("active", tab === button));
    updateCatalogueHeading();
    renderUniforms();
}));

roleTabs.forEach(button => button.addEventListener("click", () => {
    activeRole = button.dataset.role;
    roleTabs.forEach(tab => tab.classList.toggle("active", tab === button));
    updateCatalogueHeading();
    renderUniforms();
}));

if (uniformSearch) uniformSearch.addEventListener("input", renderUniforms);
document.addEventListener("keydown", event => {
    if (event.ctrlKey && event.key.toLowerCase() === "k") {
        event.preventDefault();
        uniformSearch?.focus();
    }
    if (event.key === "Escape") closeUniform();
});

function openUniform(uniform) {
    if (!modal) return;
    modalDesignation.textContent = uniform.id;
    modalVideo.pause();
    modalVideo.removeAttribute("src");
    modalVideo.load();
    const imageStage = modalVideo.parentElement;
    imageStage.className = `uniform-image-stage pattern-stage pattern-${uniform.pattern.toLowerCase()}`;
    if (uniform.video) {
        imageStage.classList.add("has-video");
        modalVideo.src = uniform.video;
        modalVideo.style.display = "block";
        modalVideo.load();
        modalVideo.play().catch(() => {});
    } else {
        imageStage.classList.remove("has-video");
        modalVideo.style.display = "none";
    }
    modalCategory.textContent = `${categoryNames[uniform.category]} // ${uniform.pattern}`;
    modalTitle.textContent = uniform.name;
    modalDescription.textContent = uniform.description;
    modalStatus.textContent = uniform.specs.status || "AUTHORIZED";

    modalSpecs.innerHTML = "";
    Object.entries(uniform.specs).forEach(([key, value]) => {
        const spec = document.createElement("div");
        spec.className = "uniform-spec";
        const label = document.createElement("span");
        label.textContent = formatFieldName(key);
        const content = document.createElement("strong");
        content.textContent = value || "TBD";
        spec.append(label, content);
        modalSpecs.appendChild(spec);
    });

    modalComponents.innerHTML = "";
    uniform.components.forEach(component => {
        const card = document.createElement("div");
        card.className = "component-card";
        const header = document.createElement("div");
        header.className = "component-header";
        const title = document.createElement("strong");
        title.textContent = component.name;
        const count = document.createElement("span");
        count.textContent = `${String(component.entries.length).padStart(2, "0")} ITEMS`;
        header.append(title, count);
        const body = document.createElement("div");
        body.className = "component-body";
        component.entries.forEach(entry => {
            const line = document.createElement("div");
            line.className = "component-line";
            const label = document.createElement("span");
            label.className = "component-label";
            label.textContent = entry.label;
            const value = document.createElement("strong");
            value.className = "component-value";
            value.textContent = entry.value;
            line.append(label, value);
            body.appendChild(line);
        });
        card.append(header, body);
        modalComponents.appendChild(card);
    });

    modalVariants.innerHTML = "";
    uniform.variants.forEach(variant => {
        const card = document.createElement("article");
        card.className = "variant-card";
        const content = document.createElement("div");
        content.className = "variant-content";
        const title = document.createElement("strong");
        title.textContent = variant.name;
        const description = document.createElement("span");
        description.textContent = variant.description;
        content.append(title, description);
        card.appendChild(content);
        modalVariants.appendChild(card);
    });
    modal.classList.add("open");
    modal.setAttribute("aria-hidden", "false");
    document.body.style.overflow = "hidden";
}

function closeUniform() {
    if (!modal) return;
    modal.classList.remove("open");
    modal.setAttribute("aria-hidden", "true");
    modalVideo?.pause();
    document.body.style.overflow = "";
}

modalClose?.addEventListener("click", closeUniform);
modal?.addEventListener("click", event => { if (event.target === modal) closeUniform(); });

updateCatalogueHeading();
renderUniforms();
