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
        "HEADGEAR": [ ["System", "AGIS MT"], ["Exterior Accessory", "Mesh Helmet Cover, AGIS" ], ["Loop Face Accessory", "Any Customization"], ["Light Strobes", "Any, Minimum 1"], ["Flashlights", "Any, Optional"], ["Night Optic Device", "Any, Monoculars NOT allowed"], ["Night Optic Device Wrap", "Optional, Varicam"], ["Patches/Misc", "Any"]],
        "EARWEAR": [["System", "Commset V"], ["Camo", "Olive Drab Green"]],
        "EYEWEAR": [["System", "Any, Optional"]],
        "FACEWEAR": [["System", "Any, Optional"], ["Camo", "Varicam/Any Green"]],
        "SHIRT / TOP": [["Uniform", "MTCU V.2 Performance Jacket I.A.T"], ["Pattern/Camo", "Modernized Tailored Combat (aka Multi-Terrain Camo)"]],
        "VEST": [["System", "CVS/ Longship SAPI"], ["Pattern/Camo", "Varicam"], ["Loop Face Accessory", "Any, Varicam/Tan"], ["Patches", "Any, MINIMUM 1 WYMWLTVAB Morale Patch (Should be easily visible)"]],
        "BELT": [["System", "Task Force"], ["Pattern/Camo", "Varicam/Tan"]],
        "PANTS / BOTTOM": [["Uniform", "MTCU V.2 Pants I.A.T"], ["Pattern/Camo", "Modernized Tailored Combat (aka Multi-Terrain Camo)"]],
        "HANDWEAR": [["System", "HOG (CTF) Alpha"], ["Pattern/Camo", "Varicam"]],
        "FOOTWEAR": [["Colour", "Coyote brown / tan / brown"]],
        "BACKPACK": [["System", "Any"], ["Pattern/Camo", "Varicam/Coyote/Tan or Close to Tan"]],
        "WRISTWEAR": [["System", "Any, (Easy Blending Colors/Watches recommended)"]]
    },
    VARICAM: {
        "HEADGEAR": [ ["System", "HGU-56/P"], ["Camo", "Any" ], ["Loop Face Accessory", "Any Customization"], ["Accessories", "Optional, Any"]],
        "EARWEAR": [["System", "None"], ["Camo", "N/A"]],
        "EYEWEAR": [["System", "Any, Optional"]],
        "FACEWEAR": [["System", "Any, Optional"], ["Camo", "Any Green/Black"]],
        "SHIRT / TOP": [["Uniform", "G4 NSPA Combat Shirt"], ["Pattern/Camo", "Multi-Terrain Pattern"]],
        "VEST": [["System", "CVS/ MPC 2.0"], ["Pattern/Camo", "Varicam"], ["Loop Face Accessory", "Any, Varicam/Tan"], ["Patches", "Any"]],
        "BELT": [["System", "Task Force"], ["Pattern/Camo", "Varicam/Tan"]],
        "PANTS / BOTTOM": [["Uniform", "G4 NSPA Combat Pant"], ["Pattern/Camo", "Multi-Terrain Pattern"]],
        "HANDWEAR": [["System", "HOG (CTF) Alpha"], ["Pattern/Camo", "Varicam"]],
        "FOOTWEAR": [["Colour", "Coyote brown / tan / brown"]],
        "BACKPACK": [["System", "Light Packs Only"], ["Pattern/Camo", "Varicam/Coyote/Tan or Close to Tan"]],
        "WRISTWEAR": [["System", "Any, (Easy Blending Colors/Watches recommended)"]]
    },
    BDU: {
        "NOTE": [ ["YOU CAN USE THE 4 LISTED PATTERN/CAMO UNIFORMS AND MIX THEM TO YOUR CONCERN"]],
        "HEADGEAR": [ ["System", "AGIS MT"], ["Exterior Accessory", "Maritime Helmet Cover - Solid Stretch, Black/Ranger Green" ], ["Loop Face Accessory", "Any Customization"], ["Light Strobes", "Any, Minimum 1"], ["Flashlights", "Any, Optional"], ["Night Optic Device", "Any, Monoculars NOT allowed"], ["Night Optic Device Wrap", "Optional, Matching with the uniform"], ["Patches/Misc", "Any"]],
        "EARWEAR": [["System", "Commset V"], ["Camo", "Any"]],
        "EYEWEAR": [["System", "Any, Optional"]],
        "FACEWEAR": [["System", "Any, Optional"], ["Camo", "Varicam/Any Green/Matching to uniform"]],
        "SHIRT / TOP": [["Uniform", "BDU, DCU, G2 NC Field Shirt"], ["Pattern/Camo", "US Woodland, Desert Camo Pattern, AOR1 (Desert Pattern), AOR2 (Green Digital Pattern)"]],
        "VEST": [["System", "CVS/ 6094A"], ["Pattern/Camo", "Matching with the uniform"], ["Loop Face Accessory", "Any, Matching with the uniform"], ["Patches", "Any"]],
        "BELT": [["System", "Task Force"], ["Pattern/Camo", "Matching with the uniform"]],
        "PANTS / BOTTOM": [["Uniform", "BDU, DCU, G2 NC Field Pants"], ["Pattern/Camo", "US Woodland, Desert Camo Pattern, AOR1 (Desert Pattern), AOR2 (Green Digital Pattern)"]],
        "HANDWEAR": [["System", "Any"], ["Pattern/Camo", "Any"]],
        "FOOTWEAR": [["Colour", "Matching with the uniform"]],
        "BACKPACK": [["System", "Any"], ["Pattern/Camo", "Matching with the uniform"]],
        "WRISTWEAR": [["System", "Any, (Easy Blending Colors/Watches recommended)"]]
    },
    DCU: {
        "NOTE": [ ["YOU CAN USE THE 4 LISTED PATTERN/CAMO UNIFORMS AND MIX THEM TO YOUR CONCERN"]],
        "HEADGEAR": [ ["System", "AGIS MT"], ["Exterior Accessory", "Maritime Helmet Cover - Solid Stretch, Black/Ranger Green" ], ["Loop Face Accessory", "Any Customization"], ["Light Strobes", "Any, Minimum 1"], ["Flashlights", "Any, Optional"], ["Night Optic Device", "Any, Monoculars NOT allowed"], ["Night Optic Device Wrap", "Optional, Matching with the uniform"], ["Patches/Misc", "Any"]],
        "EARWEAR": [["System", "Commset V"], ["Camo", "Any"]],
        "EYEWEAR": [["System", "Any, Optional"]],
        "FACEWEAR": [["System", "Any, Optional"], ["Camo", "Varicam/Any Green/Matching to uniform"]],
        "SHIRT / TOP": [["Uniform", "BDU, DCU, G2 NC Field Shirt"], ["Pattern/Camo", "US Woodland, Desert Camo Pattern, AOR1 (Desert Pattern), AOR2 (Green Digital Pattern)"]],
        "VEST": [["System", "CVS/ 6094A"], ["Pattern/Camo", "Matching with the uniform"], ["Loop Face Accessory", "Any, Matching with the uniform"], ["Patches", "Any"]],
        "BELT": [["System", "Task Force"], ["Pattern/Camo", "Matching with the uniform"]],
        "PANTS / BOTTOM": [["Uniform", "BDU, DCU, G2 NC Field Pants"], ["Pattern/Camo", "US Woodland, Desert Camo Pattern, AOR1 (Desert Pattern), AOR2 (Green Digital Pattern)"]],
        "HANDWEAR": [["System", "Any"], ["Pattern/Camo", "Any"]],
        "FOOTWEAR": [["Colour", "Matching with the uniform"]],
        "BACKPACK": [["System", "Any"], ["Pattern/Camo", "Matching with the uniform"]],
        "WRISTWEAR": [["System", "Any, (Easy Blending Colors/Watches recommended)"]]
    },
    AOR1: {
        "NOTE": [ ["YOU CAN USE THE 4 LISTED PATTERN/CAMO UNIFORMS AND MIX THEM TO YOUR CONCERN"]],
        "HEADGEAR": [ ["System", "AGIS MT"], ["Exterior Accessory", "Maritime Helmet Cover - Solid Stretch, Black/Ranger Green" ], ["Loop Face Accessory", "Any Customization"], ["Light Strobes", "Any, Minimum 1"], ["Flashlights", "Any, Optional"], ["Night Optic Device", "Any, Monoculars NOT allowed"], ["Night Optic Device Wrap", "Optional, Matching with the uniform"], ["Patches/Misc", "Any"]],
        "EARWEAR": [["System", "Commset V"], ["Camo", "Any"]],
        "EYEWEAR": [["System", "Any, Optional"]],
        "FACEWEAR": [["System", "Any, Optional"], ["Camo", "Varicam/Any Green/Matching to uniform"]],
        "SHIRT / TOP": [["Uniform", "BDU, DCU, G2 NC Field Shirt"], ["Pattern/Camo", "US Woodland, Desert Camo Pattern, AOR1 (Desert Pattern), AOR2 (Green Digital Pattern)"]],
        "VEST": [["System", "CVS/ 6094A"], ["Pattern/Camo", "Matching with the uniform"], ["Loop Face Accessory", "Any, Matching with the uniform"], ["Patches", "Any"]],
        "BELT": [["System", "Task Force"], ["Pattern/Camo", "Matching with the uniform"]],
        "PANTS / BOTTOM": [["Uniform", "BDU, DCU, G2 NC Field Pants"], ["Pattern/Camo", "US Woodland, Desert Camo Pattern, AOR1 (Desert Pattern), AOR2 (Green Digital Pattern)"]],
        "HANDWEAR": [["System", "Any"], ["Pattern/Camo", "Any"]],
        "FOOTWEAR": [["Colour", "Matching with the uniform"]],
        "BACKPACK": [["System", "Any"], ["Pattern/Camo", "Matching with the uniform"]],
        "WRISTWEAR": [["System", "Any, (Easy Blending Colors/Watches recommended)"]]
    },
    AOR2: {
        "NOTE": [ ["YOU CAN USE THE 4 LISTED PATTERN/CAMO UNIFORMS AND MIX THEM TO YOUR CONCERN"]],
        "HEADGEAR": [ ["System", "AGIS MT"], ["Exterior Accessory", "Maritime Helmet Cover - Solid Stretch, Black/Ranger Green" ], ["Loop Face Accessory", "Any Customization"], ["Light Strobes", "Any, Minimum 1"], ["Flashlights", "Any, Optional"], ["Night Optic Device", "Any, Monoculars NOT allowed"], ["Night Optic Device Wrap", "Optional, Matching with the uniform"], ["Patches/Misc", "Any"]],
        "EARWEAR": [["System", "Commset V"], ["Camo", "Any"]],
        "EYEWEAR": [["System", "Any, Optional"]],
        "FACEWEAR": [["System", "Any, Optional"], ["Camo", "Varicam/Any Green/Matching to uniform"]],
        "SHIRT / TOP": [["Uniform", "BDU, DCU, G2 NC Field Shirt"], ["Pattern/Camo", "US Woodland, Desert Camo Pattern, AOR1 (Desert Pattern), AOR2 (Green Digital Pattern)"]],
        "VEST": [["System", "CVS/ 6094A"], ["Pattern/Camo", "Matching with the uniform"], ["Loop Face Accessory", "Any, Matching with the uniform"], ["Patches", "Any"]],
        "BELT": [["System", "Task Force"], ["Pattern/Camo", "Matching with the uniform"]],
        "PANTS / BOTTOM": [["Uniform", "BDU, DCU, G2 NC Field Pants"], ["Pattern/Camo", "US Woodland, Desert Camo Pattern, AOR1 (Desert Pattern), AOR2 (Green Digital Pattern)"]],
        "HANDWEAR": [["System", "Any"], ["Pattern/Camo", "Any"]],
        "FOOTWEAR": [["Colour", "Matching with the uniform"]],
        "BACKPACK": [["System", "Any"], ["Pattern/Camo", "Matching with the uniform"]],
        "WRISTWEAR": [["System", "Any, (Easy Blending Colors/Watches recommended)"]]
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
