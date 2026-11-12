/*
 * ISOC COMMAND ROSTER — DATA FILE
 *
 * Add everyone to the people array.
 * Only personnel holding formal appointments need to be referenced
 * inside an appointment's personIds array.
 *
 * IDs must be unique.
 * unitId determines which unit a person belongs to.
 * parentId defines the reporting relationship between appointments.
 *
 * Browser edits are temporary until exported with the Export JS data button.
 */

window.ISOC_ROSTER_DATA = {

    // =====================================================
    // PERSONNEL
    // =====================================================

    people: [

        // ISOC HEADQUARTERS
        { id: "p-obi", name: '"Obi"', rank: "Gen", callsign: "COMMANDER", unitId: "hq", status: "ACTIVE", duties: "" },
        { id: "p-wolf", name: '"Wolf"', rank: "Lt. Gen", callsign: "2I/C", unitId: "hq", status: "ACTIVE", duties: "" },
        { id: "p-border", name: '"Border"', rank: "Col", callsign: "CO, 22 SG", unitId: "hq", status: "ACTIVE", duties: "" },
        { id: "p-fuego", name: '"Fuego"', rank: "Lt", callsign: "", unitId: "hq", status: "ACTIVE", duties: "" },

        // 21 SAS — APPOINTMENT HOLDERS
        //{ id: "p-sas-co", name: '""', rank: "", callsign: "", unitId: "sas", status: "ACTIVE", duties: "" },
        //{ id: "p-sas-pc", name: '""', rank: "", callsign: "", unitId: "sas", status: "ACTIVE", duties: "" },
        { id: "p-sas-squad", name: 'UNFIXED', rank: "", callsign: "", unitId: "sas", status: "ACTIVE", duties: "" },
        { id: "p-sas-team", name: 'UNFIXED', rank: "", callsign: "", unitId: "sas", status: "ACTIVE", duties: "" },

        // 21 SAS — REGULAR PERSONNEL
        { id: "p-sas-01", name: '"Maverick"', rank: "Pvt", callsign: "", unitId: "sas", status: "ACTIVE", duties: "" },
        { id: "p-sas-02", name: '"Sodium"', rank: "Pvt", callsign: "", unitId: "sas", status: "ACTIVE", duties: "" },
        { id: "p-sas-03", name: '"Aika"', rank: "Pvt", callsign: "", unitId: "sas", status: "ACTIVE", duties: "" },

        // NSWDG — APPOINTMENT HOLDERS
        //{ id: "p-nsw-co", name: '"Triton"', rank: "Capt", callsign: "NSW-06", unitId: "nswdg", status: "ACTIVE", duties: "" },
        //{ id: "p-nsw-pc", name: '"Kraken"', rank: "Lt", callsign: "NSW-21", unitId: "nswdg", status: "ACTIVE", duties: "" },
        { id: "p-nsw-squad", name: 'UNFIXED', rank: "", callsign: "", unitId: "sas", status: "ACTIVE", duties: "" },
        { id: "p-nsw-team", name: 'UNFIXED', rank: "", callsign: "", unitId: "sas", status: "ACTIVE", duties: "" },

        // NSWDG — REGULAR PERSONNEL
        { id: "p-nsw-01", name: '"Dark"', rank: "Pvt", callsign: "", unitId: "nswdg", status: "ACTIVE", duties: "" },
        { id: "p-nsw-02", name: '"Adi"', rank: "Pvt", callsign: "", unitId: "nswdg", status: "ACTIVE", duties: "" },
        { id: "p-nsw-03", name: '"Shelby"', rank: "Pvt", callsign: "", unitId: "nswdg", status: "ACTIVE", duties: "" },

        // 160 SOAR — CO
        //{ id: "p-soar-co", name: '"Falcon"', rank: "Col", callsign: "SOAR-06", unitId: "soar", status: "ACTIVE", duties: "" },

        // 160 SOAR — REGULAR PERSONNEL
        { id: "p-soar-01", name: '"Spade"', rank: "Pvt", callsign: "SOAR-04", unitId: "soar", status: "ACTIVE", duties: "" }

    ],

    // =====================================================
    // UNITS
    // =====================================================

    units: [

        { id: "hq", name: "ISOC", short: "HEADQUARTERS", category: "COMMAND", description: "The apex headquarters element of the International Special Operations Command." },

        { id: "sas", name: "21 SAS", short: "AIRBORNE", category: "OPERATIONAL UNIT", description: "Airborne special operations unit." },

        { id: "nswdg", name: "NSWDG", short: "MARITIME", category: "OPERATIONAL UNIT", description: "Maritime special operations unit." },

        { id: "soar", name: "160 SOAR", short: "AVIATION STACK", category: "AVIATION UNIT", description: "Special operations aviation element." },

        { id: "22sg", name: "22 SG", short: "CLANDESTINE", category: "DESIGNATION ONLY", description: "Public designation only. No internal structure, personnel, or further details are published in this directory." }

    ],

    // =====================================================
    // APPOINTMENTS
    // =====================================================

    appointments: [

        // -----------------------------------------------------
        // ISOC HEADQUARTERS
        // -----------------------------------------------------

        {
            id: "hq-commander",
            unitId: "hq",
            parentId: null,
            title: "Commander",
            personIds: ["p-obi"],
            duties: "Overall command authority. Establishes command intent, strategic direction, priorities, and organizational standards.",
            order: 1
        },

        {
            id: "hq-2ic",
            unitId: "hq",
            parentId: "hq-commander",
            title: "2i/c",
            personIds: ["p-wolf"],
            duties: "Deputizes for the Commander and coordinates headquarters activity and command continuity.",
            order: 1
        },

        {
            id: "hq-22sg",
            unitId: "hq",
            parentId: "hq-commander",
            title: "CO, 22 SG",
            personIds: ["p-border"],
            duties: "Commands 22 SG. This directory intentionally publishes no further details about the element.",
            order: 1
        },

        {
            id: "hq-west",
            unitId: "hq",
            parentId: "hq-commander",
            title: "Western Operations Command",
            personIds: ["p-wolf"],
            duties: "Coordinates command activity and operational oversight in the western control area.",
            order: 2
        },

        {
            id: "hq-central",
            unitId: "hq",
            parentId: "hq-commander",
            title: "Central Operations Command",
            personIds: ["p-border", "p-fuego"],
            duties: "Coordinates command activity and operational oversight in the central control area.",
            order: 3
        },

        {
            id: "hq-east",
            unitId: "hq",
            parentId: "hq-commander",
            title: "Eastern Operations Command",
            personIds: ["p-obi"],
            duties: "Coordinates command activity and operational oversight in the eastern control area.",
            order: 4
        },

        // -----------------------------------------------------
        // 21 SAS
        // -----------------------------------------------------

        {
            id: "sas-co",
            unitId: "sas",
            parentId: null,
            title: "CO, 21 SAS",
            personIds: [null],
            duties: "Commands 21 SAS; responsible for unit readiness, standards, personnel, and coordination with ISOC HQ.",
            order: 1
        },

        {
            id: "sas-pc",
            unitId: "sas",
            parentId: "sas-co",
            title: "Platoon Commander",
            personIds: [null],
            duties: "Leads the platoon and is responsible for its organization, personnel, and readiness.",
            order: 2
        },

        {
            id: "sas-squad-leader",
            unitId: "sas",
            parentId: "sas-pc",
            title: "Squad Leader",
            personIds: ["p-sas-squad"],
            duties: "Leads the squad and maintains accountability, coordination, and readiness of assigned personnel.",
            order: 3
        },

        {
            id: "sas-team-leader",
            unitId: "sas",
            parentId: "sas-squad-leader",
            title: "Team Leader",
            personIds: ["p-sas-team"],
            duties: "Leads the team and maintains accountability and coordination of assigned team members.",
            order: 4
        },

        // -----------------------------------------------------
        // NSWDG
        // -----------------------------------------------------

        {
            id: "nswdg-co",
            unitId: "nswdg",
            parentId: null,
            title: "CO, NSWDG",
            personIds: [null],
            duties: "Commands NSWDG; responsible for unit readiness, standards, personnel, and coordination with ISOC HQ.",
            order: 1
        },

        {
            id: "nswdg-pc",
            unitId: "nswdg",
            parentId: "nswdg-co",
            title: "Platoon Commander",
            personIds: [null],
            duties: "Leads the platoon and is responsible for its organization, personnel, and readiness.",
            order: 2
        },

        {
            id: "nswdg-squad-leader",
            unitId: "nswdg",
            parentId: "nswdg-pc",
            title: "Squad Leader",
            personIds: ["p-nsw-squad"],
            duties: "Leads the squad and maintains accountability, coordination, and readiness of assigned personnel.",
            order: 3
        },

        {
            id: "nswdg-team-leader",
            unitId: "nswdg",
            parentId: "nswdg-squad-leader",
            title: "Team Leader",
            personIds: ["p-nsw-team"],
            duties: "Leads the team and maintains accountability and coordination of assigned team members.",
            order: 4
        },

        // -----------------------------------------------------
        // 160 SOAR
        // ONLY THE CO APPOINTMENT IS RETAINED
        // -----------------------------------------------------

        {
            id: "soar-co",
            unitId: "soar",
            parentId: null,
            title: "CO, 160 SOAR",
            personIds: [null],
            duties: "Commands 160 SOAR; responsible for aviation unit readiness, personnel, standards, and coordination with ISOC HQ.",
            order: 1
        }

    ]

};