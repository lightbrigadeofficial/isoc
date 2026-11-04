/*
 * KSOL ARMOURY — EDITING GUIDE
 * All weapon records, roles, situations and the two recommended builds live in ARMOURY_DATA below.
 * - Add/remove a role or purpose: edit that weapon's `roles` or `situations` array.
 * - Add/remove a recommended build: add/remove an object in `configs` (keep two for the intended layout).
 * - Add/remove a component row: edit that config's `components` array.
 *   Each component uses { slot: "Optic", suggestion: "...", required: true/false }.
 * - `required` only labels the component as core/optional in the display; it does not enforce a game loadout.
 * - `notes` is an editable list of note strings shown under each build.
 * IMPORTANT: component suggestions currently describe build goals/categories. Verify exact attachment names and
 * availability in BRM5 before entering specific in-game item names; this page does not enforce one build.
 */
const ARMOURY_DATA = [
  {
    "id": "ISOC-ARM-001",
    "name": "Colt Model 4 Advanced 1",
    "type": "Assault Rifle",
    "image": "guns/m4a1/1.jpg",
    "description": "The Colt M4A1 Carbine is a lightweight, gas-operated, magazine-fed rifle chambered in 5.56×45mm NATO, manufactured by Colt's Manufacturing Company. Designed for military applications, it features a select-fire capability and a compact platform built around the proven AR-15 architecture. Its modular design and established reliability have made it a widely adopted service rifle among military forces worldwide.",
    "roles": [
      "Rifleman",
      "Team Leader",
      "Squad Leader",
      "Automatic Rifleman"
    ],
    // "frames": [
    //   "frames/hk416/1.jpg",
    //   "frames/hk416/2.jpg",
    //   "frames/hk416/3.jpg",
    //   "frames/hk416/4.jpg",
    //   "frames/hk416/5.jpg",
    //   "frames/hk416/6.jpg"
    // ],
    "situations": [
      "General infantry",
      "Mixed terrain",
      "Flexible response"
    ],
    "info": {
      "designation": "ISOC-ARM-001",
      "caliber": "5.56 × 45mm NATO",
      "effectiveRange": "542.99m",
      "muzzleVelocity": "872.23m/s",
      "weight": "~3.5kg",
      "length": "TBD",
      "fireMode": "AUTO | SEMI | SAFE",
      "magazine": "30-ROUND",
      "systemType": "PRIMARY",
      "status": "ACTIVE"
    },
    "configs": [
      {
        "name": "01 / GENERAL PURPOSE",
        "image": "guns/m4a1/2.jpg",
        "description": "Suggested direction: versatile optic, standard magazine and a balanced handling setup. Select only attachments available on this weapon in BRM5.",
        "components": [
                   {
            "slot": "Optic System",
            "suggestion": "#",
            "required": true
          },
          {
            "slot": "Muzzle",
            "suggestion": "#",
            "required": true
          },
          {
            "slot": "Muzzle Device",
            "suggestion": "#",
            "required": true
          },
          {
            "slot": "Flashlight",
            "suggestion": "#",
            "required": true
          },
          {
            "slot": "Laser Module",
            "suggestion": "#",
            "required": true
          },
          {
            "slot": "Barrel",
            "suggestion": "#",
            "required": true
          },
          {
            "slot": "Foregrip/Underbarrel",
            "suggestion": "#",
            "required": true
          },
          {
            "slot": "Magazine",
            "suggestion": "#",
            "required": true
          },
          {
            "slot": "Grip",
            "suggestion": "#",
            "required": true
          },
          {
            "slot": "Stock",
            "suggestion": "#",
            "required": true
          },
          {
            "slot": "Miscellaneous",
            "suggestion": "#",
            "required": true
          }
        ],
        "notes": [
          "These are recommended component categories and setup goals, not a restriction on personal builds.",
          "Confirm the exact attachment name and compatibility in BRM5 before treating a suggestion as a specific in-game part."
        ]
      },
      {
        "name": "02 / CLOSE QUARTERS",
        "image": "guns/m4a1/3.jpg",
        "description": "Suggested direction: compact sight picture and mobility-focused setup. Prioritize fast handling over long-range specialization.",
        "components": [
          {
            "slot": "Optic System",
            "suggestion": "SU-278A/PVS",
            "required": true
          },
          {
            "slot": "Muzzle",
            "suggestion": "FH556RC",
            "required": true
          },
          {
            "slot": "Muzzle Device",
            "suggestion": "SOCOM556-RC2",
            "required": true
          },
          {
            "slot": "Flashlight",
            "suggestion": "M640U",
            "required": true
          },
          {
            "slot": "Laser Module",
            "suggestion": "AN/PEQ-15",
            "required": true
          },
          {
            "slot": "Barrel",
            "suggestion": "9.3\" UMR Mk16",
            "required": true
          },
          {
            "slot": "Foregrip/Underbarrel",
            "suggestion": "NONE",
            "required": false
          },
          {
            "slot": "Magazine",
            "suggestion": "CMAG 30 AR/M4 Gen C3",
            "required": true
          },
          {
            "slot": "Grip",
            "suggestion": "Original Contour Grip",
            "required": true
          },
          {
            "slot": "Stock",
            "suggestion": "CST + Self",
            "required": true
          },
          {
            "slot": "Miscellaneous",
            "suggestion": "NONE",
            "required": false
          }
        ],
        "notes": [
          "These are recommended component categories and setup goals, not a restriction on personal builds.",
          "Confirm the exact attachment name and compatibility in BRM5 before treating a suggestion as a specific in-game part."
        ]
      }
    ],
    "forces": [
      "SAS",
      "SEAL",
      "160th SOAR"
    ]
  },
  {
    "id": "ISOC-ARM-002",
    "name": "Colt M16A4",
    "type": "Assault Rifle",
    "image": "data:image/svg+xml;charset=UTF-8,%3Csvg%20xmlns%3D%22http%3A//www.w3.org/2000/svg%22%20width%3D%22960%22%20height%3D%22540%22%20viewBox%3D%220%200%20960%20540%22%3E%3Crect%20width%3D%22960%22%20height%3D%22540%22%20fill%3D%22%230b0b0b%22/%3E%3Cpath%20d%3D%22M80%2080H880M80%20460H880%22%20stroke%3D%22%23333%22%20stroke-width%3D%222%22/%3E%3Ctext%20x%3D%2280%22%20y%3D%22230%22%20fill%3D%22%23777%22%20font-family%3D%22monospace%22%20font-size%3D%2222%22%20letter-spacing%3D%225%22%3EISOC%20//%20ARMOURY%3C/text%3E%3Ctext%20x%3D%2280%22%20y%3D%22290%22%20fill%3D%22%23ddd%22%20font-family%3D%22Arial%2Csans-serif%22%20font-size%3D%2234%22%3EColt%20M16A4%3C/text%3E%3Ctext%20x%3D%2280%22%20y%3D%22345%22%20fill%3D%22%23666%22%20font-family%3D%22monospace%22%20font-size%3D%2216%22%20letter-spacing%3D%223%22%3EIMAGE%20PENDING%3C/text%3E%3C/svg%3E",
    "description": "A rifle option listed for the SEAL element and available to 160th SOAR pilots.",
    "roles": [
      "Rifleman",
      "Team Leader",
      "Squad Leader"
    ],
    "forces": [
      "SEAL",
      "160th SOAR"
    ],
    "situations": [
      "General infantry",
      "Mixed terrain"
    ],
    "info": {
      "designation": "IN-GAME LISTING",
      "systemType": "PRIMARY",
      "status": "PROPOSED"
    },
    "configs": [
      {
        "name": "01 / RECOMMENDED BUILD",
        "image": "data:image/svg+xml;charset=UTF-8,%3Csvg%20xmlns%3D%22http%3A//www.w3.org/2000/svg%22%20width%3D%22960%22%20height%3D%22540%22%20viewBox%3D%220%200%20960%20540%22%3E%3Crect%20width%3D%22960%22%20height%3D%22540%22%20fill%3D%22%230b0b0b%22/%3E%3Cpath%20d%3D%22M80%2080H880M80%20460H880%22%20stroke%3D%22%23333%22%20stroke-width%3D%222%22/%3E%3Ctext%20x%3D%2280%22%20y%3D%22230%22%20fill%3D%22%23777%22%20font-family%3D%22monospace%22%20font-size%3D%2222%22%20letter-spacing%3D%225%22%3EISOC%20//%20ARMOURY%3C/text%3E%3Ctext%20x%3D%2280%22%20y%3D%22290%22%20fill%3D%22%23ddd%22%20font-family%3D%22Arial%2Csans-serif%22%20font-size%3D%2234%22%3EColt%20M16A4%3C/text%3E%3Ctext%20x%3D%2280%22%20y%3D%22345%22%20fill%3D%22%23666%22%20font-family%3D%22monospace%22%20font-size%3D%2216%22%20letter-spacing%3D%223%22%3EIMAGE%20PENDING%3C/text%3E%3C/svg%3E",
        "description": "Build recommendation to be completed for the in-game catalogue.",
        "components": [],
        "notes": [
          "This entry is part of the proposed weapon register. Add verified BRM5-compatible components when the build is finalized."
        ]
      },
      {
        "name": "02 / ALTERNATIVE BUILD",
        "image": "data:image/svg+xml;charset=UTF-8,%3Csvg%20xmlns%3D%22http%3A//www.w3.org/2000/svg%22%20width%3D%22960%22%20height%3D%22540%22%20viewBox%3D%220%200%20960%20540%22%3E%3Crect%20width%3D%22960%22%20height%3D%22540%22%20fill%3D%22%230b0b0b%22/%3E%3Cpath%20d%3D%22M80%2080H880M80%20460H880%22%20stroke%3D%22%23333%22%20stroke-width%3D%222%22/%3E%3Ctext%20x%3D%2280%22%20y%3D%22230%22%20fill%3D%22%23777%22%20font-family%3D%22monospace%22%20font-size%3D%2222%22%20letter-spacing%3D%225%22%3EISOC%20//%20ARMOURY%3C/text%3E%3Ctext%20x%3D%2280%22%20y%3D%22290%22%20fill%3D%22%23ddd%22%20font-family%3D%22Arial%2Csans-serif%22%20font-size%3D%2234%22%3EColt%20M16A4%3C/text%3E%3Ctext%20x%3D%2280%22%20y%3D%22345%22%20fill%3D%22%23666%22%20font-family%3D%22monospace%22%20font-size%3D%2216%22%20letter-spacing%3D%223%22%3EIMAGE%20PENDING%3C/text%3E%3C/svg%3E",
        "description": "Alternative build recommendation to be completed for the in-game catalogue.",
        "components": [],
        "notes": [
          "This entry is part of the proposed weapon register. Add verified BRM5-compatible components when the build is finalized."
        ]
      }
    ]
  },
  {
    "id": "ISOC-ARM-003",
    "name": "Steyr Armee-Universal-Gewehr",
    "type": "Assault Rifle",
    "image": "AUG.png",
    "description": "The Steyr AUG platform, listed for SAS and SEAL personnel. Also available to 160th SOAR pilots.",
    "roles": [
      "Rifleman",
      "Reconnaissance"
    ],
    "situations": [
      "General infantry",
      "Mixed terrain",
      "Flexible response"
    ],
    "info": {
      "designation": "AUG",
      "caliber": "5.56 × 45mm NATO",
      "effectiveRange": "583.70m",
      "muzzleVelocity": "904.34m/s",
      "weight": "~5.3kg",
      "length": "TBD",
      "fireMode": "AUTO | SEMI | SAFE",
      "magazine": "30-ROUND",
      "systemType": "SPECIAL OPERATIONS",
      "status": "PROPOSED"
    },
    "configs": [
      {
        "name": "01 / GENERAL PURPOSE",
        "image": "AUG.png",
        "description": "Suggested direction: versatile optic, standard magazine and a balanced handling setup. Select only attachments available on this weapon in BRM5.",
        "components": [
          {
            "slot": "Optic",
            "suggestion": "General-purpose optic with a versatile sight picture",
            "required": true
          },
          {
            "slot": "Magazine",
            "suggestion": "Standard-capacity magazine; prioritize handling and reliability",
            "required": true
          },
          {
            "slot": "Muzzle",
            "suggestion": "Optional suppressor or flash-hiding attachment, if available",
            "required": false
          },
          {
            "slot": "Underbarrel / Grip",
            "suggestion": "Optional compatible grip; omit if unavailable or unnecessary",
            "required": false
          },
          {
            "slot": "Stock",
            "suggestion": "Keep standard stock or choose a compatible handling-focused option",
            "required": false
          }
        ],
        "notes": [
          "These are recommended component categories and setup goals, not a restriction on personal builds.",
          "Confirm the exact attachment name and compatibility in BRM5 before treating a suggestion as a specific in-game part."
        ]
      },
      {
        "name": "02 / CLOSE QUARTERS",
        "image": "AUG.png",
        "description": "Suggested direction: compact sight picture and mobility-focused setup. Prioritize fast handling over long-range specialization.",
        "components": [
          {
            "slot": "Optic",
            "suggestion": "Compact red-dot or holographic-style optic",
            "required": true
          },
          {
            "slot": "Magazine",
            "suggestion": "Standard-capacity magazine; prioritize handling and reliability",
            "required": true
          },
          {
            "slot": "Muzzle",
            "suggestion": "Optional suppressor or flash-hiding attachment, if available",
            "required": false
          },
          {
            "slot": "Underbarrel / Grip",
            "suggestion": "Optional compatible grip; omit if unavailable or unnecessary",
            "required": false
          },
          {
            "slot": "Stock",
            "suggestion": "Keep standard stock or choose a compatible handling-focused option",
            "required": false
          }
        ],
        "notes": [
          "These are recommended component categories and setup goals, not a restriction on personal builds.",
          "Confirm the exact attachment name and compatibility in BRM5 before treating a suggestion as a specific in-game part."
        ]
      }
    ],
    "forces": [
      "SAS",
      "SEAL",
      "160th SOAR"
    ]
  },
  {
    "id": "ISOC-ARM-004",
    "name": "Howa Type 20",
    "type": "Assault Rifle",
    "image": "data:image/svg+xml;charset=UTF-8,%3Csvg%20xmlns%3D%22http%3A//www.w3.org/2000/svg%22%20width%3D%22960%22%20height%3D%22540%22%20viewBox%3D%220%200%20960%20540%22%3E%3Crect%20width%3D%22960%22%20height%3D%22540%22%20fill%3D%22%230b0b0b%22/%3E%3Cpath%20d%3D%22M80%2080H880M80%20460H880%22%20stroke%3D%22%23333%22%20stroke-width%3D%222%22/%3E%3Ctext%20x%3D%2280%22%20y%3D%22230%22%20fill%3D%22%23777%22%20font-family%3D%22monospace%22%20font-size%3D%2222%22%20letter-spacing%3D%225%22%3EISOC%20//%20ARMOURY%3C/text%3E%3Ctext%20x%3D%2280%22%20y%3D%22290%22%20fill%3D%22%23ddd%22%20font-family%3D%22Arial%2Csans-serif%22%20font-size%3D%2234%22%3EHowa%20Type%2020%3C/text%3E%3Ctext%20x%3D%2280%22%20y%3D%22345%22%20fill%3D%22%23666%22%20font-family%3D%22monospace%22%20font-size%3D%2216%22%20letter-spacing%3D%223%22%3EIMAGE%20PENDING%3C/text%3E%3C/svg%3E",
    "description": "A rifle option listed for the SAS element and available to 160th SOAR pilots.",
    "roles": [
      "Rifleman",
      "Team Leader",
      "Squad Leader"
    ],
    "forces": [
      "SAS",
      "160th SOAR"
    ],
    "situations": [
      "General infantry",
      "Mixed terrain"
    ],
    "info": {
      "designation": "IN-GAME LISTING",
      "systemType": "PRIMARY",
      "status": "PROPOSED"
    },
    "configs": [
      {
        "name": "01 / RECOMMENDED BUILD",
        "image": "data:image/svg+xml;charset=UTF-8,%3Csvg%20xmlns%3D%22http%3A//www.w3.org/2000/svg%22%20width%3D%22960%22%20height%3D%22540%22%20viewBox%3D%220%200%20960%20540%22%3E%3Crect%20width%3D%22960%22%20height%3D%22540%22%20fill%3D%22%230b0b0b%22/%3E%3Cpath%20d%3D%22M80%2080H880M80%20460H880%22%20stroke%3D%22%23333%22%20stroke-width%3D%222%22/%3E%3Ctext%20x%3D%2280%22%20y%3D%22230%22%20fill%3D%22%23777%22%20font-family%3D%22monospace%22%20font-size%3D%2222%22%20letter-spacing%3D%225%22%3EISOC%20//%20ARMOURY%3C/text%3E%3Ctext%20x%3D%2280%22%20y%3D%22290%22%20fill%3D%22%23ddd%22%20font-family%3D%22Arial%2Csans-serif%22%20font-size%3D%2234%22%3EHowa%20Type%2020%3C/text%3E%3Ctext%20x%3D%2280%22%20y%3D%22345%22%20fill%3D%22%23666%22%20font-family%3D%22monospace%22%20font-size%3D%2216%22%20letter-spacing%3D%223%22%3EIMAGE%20PENDING%3C/text%3E%3C/svg%3E",
        "description": "Build recommendation to be completed for the in-game catalogue.",
        "components": [],
        "notes": [
          "This entry is part of the proposed weapon register. Add verified BRM5-compatible components when the build is finalized."
        ]
      },
      {
        "name": "02 / ALTERNATIVE BUILD",
        "image": "data:image/svg+xml;charset=UTF-8,%3Csvg%20xmlns%3D%22http%3A//www.w3.org/2000/svg%22%20width%3D%22960%22%20height%3D%22540%22%20viewBox%3D%220%200%20960%20540%22%3E%3Crect%20width%3D%22960%22%20height%3D%22540%22%20fill%3D%22%230b0b0b%22/%3E%3Cpath%20d%3D%22M80%2080H880M80%20460H880%22%20stroke%3D%22%23333%22%20stroke-width%3D%222%22/%3E%3Ctext%20x%3D%2280%22%20y%3D%22230%22%20fill%3D%22%23777%22%20font-family%3D%22monospace%22%20font-size%3D%2222%22%20letter-spacing%3D%225%22%3EISOC%20//%20ARMOURY%3C/text%3E%3Ctext%20x%3D%2280%22%20y%3D%22290%22%20fill%3D%22%23ddd%22%20font-family%3D%22Arial%2Csans-serif%22%20font-size%3D%2234%22%3EHowa%20Type%2020%3C/text%3E%3Ctext%20x%3D%2280%22%20y%3D%22345%22%20fill%3D%22%23666%22%20font-family%3D%22monospace%22%20font-size%3D%2216%22%20letter-spacing%3D%223%22%3EIMAGE%20PENDING%3C/text%3E%3C/svg%3E",
        "description": "Alternative build recommendation to be completed for the in-game catalogue.",
        "components": [],
        "notes": [
          "This entry is part of the proposed weapon register. Add verified BRM5-compatible components when the build is finalized."
        ]
      }
    ]
  },
  {
    "id": "ISOC-ARM-005",
    "name": "Heckler & Koch HK416",
    "type": "Assault Rifle",
    "image": "data:image/svg+xml;charset=UTF-8,%3Csvg%20xmlns%3D%22http%3A//www.w3.org/2000/svg%22%20width%3D%22960%22%20height%3D%22540%22%20viewBox%3D%220%200%20960%20540%22%3E%3Crect%20width%3D%22960%22%20height%3D%22540%22%20fill%3D%22%230b0b0b%22/%3E%3Cpath%20d%3D%22M80%2080H880M80%20460H880%22%20stroke%3D%22%23333%22%20stroke-width%3D%222%22/%3E%3Ctext%20x%3D%2280%22%20y%3D%22230%22%20fill%3D%22%23777%22%20font-family%3D%22monospace%22%20font-size%3D%2222%22%20letter-spacing%3D%225%22%3EISOC%20//%20ARMOURY%3C/text%3E%3Ctext%20x%3D%2280%22%20y%3D%22290%22%20fill%3D%22%23ddd%22%20font-family%3D%22Arial%2Csans-serif%22%20font-size%3D%2234%22%3EHeckler%20%26amp%3B%20Koch%20HK416%3C/text%3E%3Ctext%20x%3D%2280%22%20y%3D%22345%22%20fill%3D%22%23666%22%20font-family%3D%22monospace%22%20font-size%3D%2216%22%20letter-spacing%3D%223%22%3EIMAGE%20PENDING%3C/text%3E%3C/svg%3E",
    "description": "A rifle option listed for SAS and SEAL personnel. Also available to 160th SOAR pilots.",
    "roles": [
      "Rifleman",
      "Team Leader",
      "Squad Leader"
    ],
    "forces": [
      "SAS",
      "SEAL",
      "160th SOAR"
    ],
    "situations": [
      "General infantry",
      "Mixed terrain"
    ],
    "info": {
      "designation": "IN-GAME LISTING",
      "systemType": "PRIMARY",
      "status": "PROPOSED"
    },
    "configs": [
      {
        "name": "01 / RECOMMENDED BUILD",
        "image": "data:image/svg+xml;charset=UTF-8,%3Csvg%20xmlns%3D%22http%3A//www.w3.org/2000/svg%22%20width%3D%22960%22%20height%3D%22540%22%20viewBox%3D%220%200%20960%20540%22%3E%3Crect%20width%3D%22960%22%20height%3D%22540%22%20fill%3D%22%230b0b0b%22/%3E%3Cpath%20d%3D%22M80%2080H880M80%20460H880%22%20stroke%3D%22%23333%22%20stroke-width%3D%222%22/%3E%3Ctext%20x%3D%2280%22%20y%3D%22230%22%20fill%3D%22%23777%22%20font-family%3D%22monospace%22%20font-size%3D%2222%22%20letter-spacing%3D%225%22%3EISOC%20//%20ARMOURY%3C/text%3E%3Ctext%20x%3D%2280%22%20y%3D%22290%22%20fill%3D%22%23ddd%22%20font-family%3D%22Arial%2Csans-serif%22%20font-size%3D%2234%22%3EHeckler%20%26amp%3B%20Koch%20HK416%3C/text%3E%3Ctext%20x%3D%2280%22%20y%3D%22345%22%20fill%3D%22%23666%22%20font-family%3D%22monospace%22%20font-size%3D%2216%22%20letter-spacing%3D%223%22%3EIMAGE%20PENDING%3C/text%3E%3C/svg%3E",
        "description": "Build recommendation to be completed for the in-game catalogue.",
        "components": [],
        "notes": [
          "This entry is part of the proposed weapon register. Add verified BRM5-compatible components when the build is finalized."
        ]
      },
      {
        "name": "02 / ALTERNATIVE BUILD",
        "image": "data:image/svg+xml;charset=UTF-8,%3Csvg%20xmlns%3D%22http%3A//www.w3.org/2000/svg%22%20width%3D%22960%22%20height%3D%22540%22%20viewBox%3D%220%200%20960%20540%22%3E%3Crect%20width%3D%22960%22%20height%3D%22540%22%20fill%3D%22%230b0b0b%22/%3E%3Cpath%20d%3D%22M80%2080H880M80%20460H880%22%20stroke%3D%22%23333%22%20stroke-width%3D%222%22/%3E%3Ctext%20x%3D%2280%22%20y%3D%22230%22%20fill%3D%22%23777%22%20font-family%3D%22monospace%22%20font-size%3D%2222%22%20letter-spacing%3D%225%22%3EISOC%20//%20ARMOURY%3C/text%3E%3Ctext%20x%3D%2280%22%20y%3D%22290%22%20fill%3D%22%23ddd%22%20font-family%3D%22Arial%2Csans-serif%22%20font-size%3D%2234%22%3EHeckler%20%26amp%3B%20Koch%20HK416%3C/text%3E%3Ctext%20x%3D%2280%22%20y%3D%22345%22%20fill%3D%22%23666%22%20font-family%3D%22monospace%22%20font-size%3D%2216%22%20letter-spacing%3D%223%22%3EIMAGE%20PENDING%3C/text%3E%3C/svg%3E",
        "description": "Alternative build recommendation to be completed for the in-game catalogue.",
        "components": [],
        "notes": [
          "This entry is part of the proposed weapon register. Add verified BRM5-compatible components when the build is finalized."
        ]
      }
    ]
  },
  {
    "id": "ISOC-ARM-006",
    "name": "Heckler & Koch MP7",
    "type": "Sub-machine Gun",
    "image": "MP7A2.png",
    "description": "A compact SMG option listed for SAS and SEAL personnel. Also available to 160th SOAR pilots.",
    "roles": [
      "Rifleman",
      "Team Leader"
    ],
    "situations": [
      "Close quarters",
      "Vehicle crew",
      "Close protection"
    ],
    "info": {
      "designation": "KSOL-SOF-003",
      "caliber": "4.6 × 30mm",
      "effectiveRange": "322.38m",
      "muzzleVelocity": "620.84m/s",
      "weight": "~3.6kg",
      "length": "TBD",
      "fireMode": "AUTO | SEMI | SAFE",
      "magazine": "30-ROUND",
      "systemType": "SPECIAL OPERATIONS",
      "status": "PROPOSED"
    },
    "configs": [
      {
        "name": "01 / COMPACT",
        "image": "MP7A2.png",
        "description": "Suggested direction: compact optic and minimal accessories for confined spaces and rapid movement.",
        "components": [
          {
            "slot": "Optic",
            "suggestion": "Compact red-dot or holographic-style optic",
            "required": true
          },
          {
            "slot": "Magazine",
            "suggestion": "Standard-capacity magazine; prioritize handling and reliability",
            "required": true
          },
          {
            "slot": "Muzzle",
            "suggestion": "Optional suppressor or flash-hiding attachment, if available",
            "required": false
          },
          {
            "slot": "Underbarrel / Grip",
            "suggestion": "Optional compatible grip; omit if unavailable or unnecessary",
            "required": false
          },
          {
            "slot": "Stock",
            "suggestion": "Keep standard stock or choose a compatible handling-focused option",
            "required": false
          }
        ],
        "notes": [
          "These are recommended component categories and setup goals, not a restriction on personal builds.",
          "Confirm the exact attachment name and compatibility in BRM5 before treating a suggestion as a specific in-game part."
        ]
      },
      {
        "name": "02 / CREW / PROTECTION",
        "image": "MP7A2.png",
        "description": "Suggested direction: practical sighting and visibility aids for vehicle crews or close-protection gameplay.",
        "components": [
          {
            "slot": "Optic",
            "suggestion": "Compact red-dot or holographic-style optic",
            "required": true
          },
          {
            "slot": "Magazine",
            "suggestion": "Standard-capacity magazine; prioritize handling and reliability",
            "required": true
          },
          {
            "slot": "Muzzle",
            "suggestion": "Optional suppressor or flash-hiding attachment, if available",
            "required": false
          },
          {
            "slot": "Underbarrel / Grip",
            "suggestion": "Optional compatible grip; omit if unavailable or unnecessary",
            "required": false
          },
          {
            "slot": "Stock",
            "suggestion": "Keep standard stock or choose a compatible handling-focused option",
            "required": false
          }
        ],
        "notes": [
          "These are recommended component categories and setup goals, not a restriction on personal builds.",
          "Confirm the exact attachment name and compatibility in BRM5 before treating a suggestion as a specific in-game part."
        ]
      }
    ],
    "forces": [
      "SAS",
      "SEAL",
      "160th SOAR"
    ]
  },
  {
    "id": "ISOC-ARM-007",
    "name": "Heckler & Koch MP5",
    "type": "Sub-machine Gun",
    "image": "data:image/svg+xml;charset=UTF-8,%3Csvg%20xmlns%3D%22http%3A//www.w3.org/2000/svg%22%20width%3D%22960%22%20height%3D%22540%22%20viewBox%3D%220%200%20960%20540%22%3E%3Crect%20width%3D%22960%22%20height%3D%22540%22%20fill%3D%22%230b0b0b%22/%3E%3Cpath%20d%3D%22M80%2080H880M80%20460H880%22%20stroke%3D%22%23333%22%20stroke-width%3D%222%22/%3E%3Ctext%20x%3D%2280%22%20y%3D%22230%22%20fill%3D%22%23777%22%20font-family%3D%22monospace%22%20font-size%3D%2222%22%20letter-spacing%3D%225%22%3EISOC%20//%20ARMOURY%3C/text%3E%3Ctext%20x%3D%2280%22%20y%3D%22290%22%20fill%3D%22%23ddd%22%20font-family%3D%22Arial%2Csans-serif%22%20font-size%3D%2234%22%3EHeckler%20%26amp%3B%20Koch%20MP5%3C/text%3E%3Ctext%20x%3D%2280%22%20y%3D%22345%22%20fill%3D%22%23666%22%20font-family%3D%22monospace%22%20font-size%3D%2216%22%20letter-spacing%3D%223%22%3EIMAGE%20PENDING%3C/text%3E%3C/svg%3E",
    "description": "An SMG option listed for SAS and SEAL personnel. Also available to 160th SOAR pilots.",
    "roles": [
      "Rifleman",
      "Team Leader"
    ],
    "forces": [
      "SAS",
      "SEAL",
      "160th SOAR"
    ],
    "situations": [
      "General infantry",
      "Close-quarters game scenarios"
    ],
    "info": {
      "designation": "IN-GAME LISTING",
      "systemType": "PRIMARY",
      "status": "PROPOSED"
    },
    "configs": [
      {
        "name": "01 / RECOMMENDED BUILD",
        "image": "data:image/svg+xml;charset=UTF-8,%3Csvg%20xmlns%3D%22http%3A//www.w3.org/2000/svg%22%20width%3D%22960%22%20height%3D%22540%22%20viewBox%3D%220%200%20960%20540%22%3E%3Crect%20width%3D%22960%22%20height%3D%22540%22%20fill%3D%22%230b0b0b%22/%3E%3Cpath%20d%3D%22M80%2080H880M80%20460H880%22%20stroke%3D%22%23333%22%20stroke-width%3D%222%22/%3E%3Ctext%20x%3D%2280%22%20y%3D%22230%22%20fill%3D%22%23777%22%20font-family%3D%22monospace%22%20font-size%3D%2222%22%20letter-spacing%3D%225%22%3EISOC%20//%20ARMOURY%3C/text%3E%3Ctext%20x%3D%2280%22%20y%3D%22290%22%20fill%3D%22%23ddd%22%20font-family%3D%22Arial%2Csans-serif%22%20font-size%3D%2234%22%3EHeckler%20%26amp%3B%20Koch%20MP5%3C/text%3E%3Ctext%20x%3D%2280%22%20y%3D%22345%22%20fill%3D%22%23666%22%20font-family%3D%22monospace%22%20font-size%3D%2216%22%20letter-spacing%3D%223%22%3EIMAGE%20PENDING%3C/text%3E%3C/svg%3E",
        "description": "Build recommendation to be completed for the in-game catalogue.",
        "components": [],
        "notes": [
          "This entry is part of the proposed weapon register. Add verified BRM5-compatible components when the build is finalized."
        ]
      },
      {
        "name": "02 / ALTERNATIVE BUILD",
        "image": "data:image/svg+xml;charset=UTF-8,%3Csvg%20xmlns%3D%22http%3A//www.w3.org/2000/svg%22%20width%3D%22960%22%20height%3D%22540%22%20viewBox%3D%220%200%20960%20540%22%3E%3Crect%20width%3D%22960%22%20height%3D%22540%22%20fill%3D%22%230b0b0b%22/%3E%3Cpath%20d%3D%22M80%2080H880M80%20460H880%22%20stroke%3D%22%23333%22%20stroke-width%3D%222%22/%3E%3Ctext%20x%3D%2280%22%20y%3D%22230%22%20fill%3D%22%23777%22%20font-family%3D%22monospace%22%20font-size%3D%2222%22%20letter-spacing%3D%225%22%3EISOC%20//%20ARMOURY%3C/text%3E%3Ctext%20x%3D%2280%22%20y%3D%22290%22%20fill%3D%22%23ddd%22%20font-family%3D%22Arial%2Csans-serif%22%20font-size%3D%2234%22%3EHeckler%20%26amp%3B%20Koch%20MP5%3C/text%3E%3Ctext%20x%3D%2280%22%20y%3D%22345%22%20fill%3D%22%23666%22%20font-family%3D%22monospace%22%20font-size%3D%2216%22%20letter-spacing%3D%223%22%3EIMAGE%20PENDING%3C/text%3E%3C/svg%3E",
        "description": "Alternative build recommendation to be completed for the in-game catalogue.",
        "components": [],
        "notes": [
          "This entry is part of the proposed weapon register. Add verified BRM5-compatible components when the build is finalized."
        ]
      }
    ]
  },
  {
    "id": "ISOC-ARM-008",
    "name": "SIG Sauer MCX-SPEAR LT IR .300 BLK SBR",
    "type": "Sub-machine Gun",
    "image": "data:image/svg+xml;charset=UTF-8,%3Csvg%20xmlns%3D%22http%3A//www.w3.org/2000/svg%22%20width%3D%22960%22%20height%3D%22540%22%20viewBox%3D%220%200%20960%20540%22%3E%3Crect%20width%3D%22960%22%20height%3D%22540%22%20fill%3D%22%230b0b0b%22/%3E%3Cpath%20d%3D%22M80%2080H880M80%20460H880%22%20stroke%3D%22%23333%22%20stroke-width%3D%222%22/%3E%3Ctext%20x%3D%2280%22%20y%3D%22230%22%20fill%3D%22%23777%22%20font-family%3D%22monospace%22%20font-size%3D%2222%22%20letter-spacing%3D%225%22%3EISOC%20//%20ARMOURY%3C/text%3E%3Ctext%20x%3D%2280%22%20y%3D%22290%22%20fill%3D%22%23ddd%22%20font-family%3D%22Arial%2Csans-serif%22%20font-size%3D%2234%22%3ESIG%20Sauer%20MCX-SPEAR%20LT%20IR%20.300%20BLK%20SBR%3C/text%3E%3Ctext%20x%3D%2280%22%20y%3D%22345%22%20fill%3D%22%23666%22%20font-family%3D%22monospace%22%20font-size%3D%2216%22%20letter-spacing%3D%223%22%3EIMAGE%20PENDING%3C/text%3E%3C/svg%3E",
    "description": "An in-game MCX-SPEAR LT IR .300 BLK SBR option listed for SAS and SEAL personnel. Also available to 160th SOAR pilots.",
    "roles": [
      "Rifleman",
      "Team Leader"
    ],
    "forces": [
      "SAS",
      "SEAL",
      "160th SOAR"
    ],
    "situations": [
      "General infantry",
      "Close-quarters game scenarios"
    ],
    "info": {
      "designation": "IN-GAME LISTING",
      "systemType": "PRIMARY",
      "status": "PROPOSED"
    },
    "configs": [
      {
        "name": "01 / RECOMMENDED BUILD",
        "image": "data:image/svg+xml;charset=UTF-8,%3Csvg%20xmlns%3D%22http%3A//www.w3.org/2000/svg%22%20width%3D%22960%22%20height%3D%22540%22%20viewBox%3D%220%200%20960%20540%22%3E%3Crect%20width%3D%22960%22%20height%3D%22540%22%20fill%3D%22%230b0b0b%22/%3E%3Cpath%20d%3D%22M80%2080H880M80%20460H880%22%20stroke%3D%22%23333%22%20stroke-width%3D%222%22/%3E%3Ctext%20x%3D%2280%22%20y%3D%22230%22%20fill%3D%22%23777%22%20font-family%3D%22monospace%22%20font-size%3D%2222%22%20letter-spacing%3D%225%22%3EISOC%20//%20ARMOURY%3C/text%3E%3Ctext%20x%3D%2280%22%20y%3D%22290%22%20fill%3D%22%23ddd%22%20font-family%3D%22Arial%2Csans-serif%22%20font-size%3D%2234%22%3ESIG%20Sauer%20MCX-SPEAR%20LT%20IR%20.300%20BLK%20SBR%3C/text%3E%3Ctext%20x%3D%2280%22%20y%3D%22345%22%20fill%3D%22%23666%22%20font-family%3D%22monospace%22%20font-size%3D%2216%22%20letter-spacing%3D%223%22%3EIMAGE%20PENDING%3C/text%3E%3C/svg%3E",
        "description": "Build recommendation to be completed for the in-game catalogue.",
        "components": [],
        "notes": [
          "This entry is part of the proposed weapon register. Add verified BRM5-compatible components when the build is finalized."
        ]
      },
      {
        "name": "02 / ALTERNATIVE BUILD",
        "image": "data:image/svg+xml;charset=UTF-8,%3Csvg%20xmlns%3D%22http%3A//www.w3.org/2000/svg%22%20width%3D%22960%22%20height%3D%22540%22%20viewBox%3D%220%200%20960%20540%22%3E%3Crect%20width%3D%22960%22%20height%3D%22540%22%20fill%3D%22%230b0b0b%22/%3E%3Cpath%20d%3D%22M80%2080H880M80%20460H880%22%20stroke%3D%22%23333%22%20stroke-width%3D%222%22/%3E%3Ctext%20x%3D%2280%22%20y%3D%22230%22%20fill%3D%22%23777%22%20font-family%3D%22monospace%22%20font-size%3D%2222%22%20letter-spacing%3D%225%22%3EISOC%20//%20ARMOURY%3C/text%3E%3Ctext%20x%3D%2280%22%20y%3D%22290%22%20fill%3D%22%23ddd%22%20font-family%3D%22Arial%2Csans-serif%22%20font-size%3D%2234%22%3ESIG%20Sauer%20MCX-SPEAR%20LT%20IR%20.300%20BLK%20SBR%3C/text%3E%3Ctext%20x%3D%2280%22%20y%3D%22345%22%20fill%3D%22%23666%22%20font-family%3D%22monospace%22%20font-size%3D%2216%22%20letter-spacing%3D%223%22%3EIMAGE%20PENDING%3C/text%3E%3C/svg%3E",
        "description": "Alternative build recommendation to be completed for the in-game catalogue.",
        "components": [],
        "notes": [
          "This entry is part of the proposed weapon register. Add verified BRM5-compatible components when the build is finalized."
        ]
      }
    ]
  },
  {
    "id": "ISOC-ARM-009",
    "name": "SIG Sauer MCX-SPEAR LT IR 5.56 NATO SBR",
    "type": "Sub-machine Gun",
    "image": "data:image/svg+xml;charset=UTF-8,%3Csvg%20xmlns%3D%22http%3A//www.w3.org/2000/svg%22%20width%3D%22960%22%20height%3D%22540%22%20viewBox%3D%220%200%20960%20540%22%3E%3Crect%20width%3D%22960%22%20height%3D%22540%22%20fill%3D%22%230b0b0b%22/%3E%3Cpath%20d%3D%22M80%2080H880M80%20460H880%22%20stroke%3D%22%23333%22%20stroke-width%3D%222%22/%3E%3Ctext%20x%3D%2280%22%20y%3D%22230%22%20fill%3D%22%23777%22%20font-family%3D%22monospace%22%20font-size%3D%2222%22%20letter-spacing%3D%225%22%3EISOC%20//%20ARMOURY%3C/text%3E%3Ctext%20x%3D%2280%22%20y%3D%22290%22%20fill%3D%22%23ddd%22%20font-family%3D%22Arial%2Csans-serif%22%20font-size%3D%2234%22%3ESIG%20Sauer%20MCX-SPEAR%20LT%20IR%205.56%20NATO%20SBR%3C/text%3E%3Ctext%20x%3D%2280%22%20y%3D%22345%22%20fill%3D%22%23666%22%20font-family%3D%22monospace%22%20font-size%3D%2216%22%20letter-spacing%3D%223%22%3EIMAGE%20PENDING%3C/text%3E%3C/svg%3E",
    "description": "An in-game MCX-SPEAR LT IR 5.56 NATO SBR option listed for SAS and SEAL personnel. Also available to 160th SOAR pilots.",
    "roles": [
      "Rifleman",
      "Team Leader"
    ],
    "forces": [
      "SAS",
      "SEAL",
      "160th SOAR"
    ],
    "situations": [
      "General infantry",
      "Close-quarters game scenarios"
    ],
    "info": {
      "designation": "IN-GAME LISTING",
      "systemType": "PRIMARY",
      "status": "PROPOSED"
    },
    "configs": [
      {
        "name": "01 / RECOMMENDED BUILD",
        "image": "data:image/svg+xml;charset=UTF-8,%3Csvg%20xmlns%3D%22http%3A//www.w3.org/2000/svg%22%20width%3D%22960%22%20height%3D%22540%22%20viewBox%3D%220%200%20960%20540%22%3E%3Crect%20width%3D%22960%22%20height%3D%22540%22%20fill%3D%22%230b0b0b%22/%3E%3Cpath%20d%3D%22M80%2080H880M80%20460H880%22%20stroke%3D%22%23333%22%20stroke-width%3D%222%22/%3E%3Ctext%20x%3D%2280%22%20y%3D%22230%22%20fill%3D%22%23777%22%20font-family%3D%22monospace%22%20font-size%3D%2222%22%20letter-spacing%3D%225%22%3EISOC%20//%20ARMOURY%3C/text%3E%3Ctext%20x%3D%2280%22%20y%3D%22290%22%20fill%3D%22%23ddd%22%20font-family%3D%22Arial%2Csans-serif%22%20font-size%3D%2234%22%3ESIG%20Sauer%20MCX-SPEAR%20LT%20IR%205.56%20NATO%20SBR%3C/text%3E%3Ctext%20x%3D%2280%22%20y%3D%22345%22%20fill%3D%22%23666%22%20font-family%3D%22monospace%22%20font-size%3D%2216%22%20letter-spacing%3D%223%22%3EIMAGE%20PENDING%3C/text%3E%3C/svg%3E",
        "description": "Build recommendation to be completed for the in-game catalogue.",
        "components": [],
        "notes": [
          "This entry is part of the proposed weapon register. Add verified BRM5-compatible components when the build is finalized."
        ]
      },
      {
        "name": "02 / ALTERNATIVE BUILD",
        "image": "data:image/svg+xml;charset=UTF-8,%3Csvg%20xmlns%3D%22http%3A//www.w3.org/2000/svg%22%20width%3D%22960%22%20height%3D%22540%22%20viewBox%3D%220%200%20960%20540%22%3E%3Crect%20width%3D%22960%22%20height%3D%22540%22%20fill%3D%22%230b0b0b%22/%3E%3Cpath%20d%3D%22M80%2080H880M80%20460H880%22%20stroke%3D%22%23333%22%20stroke-width%3D%222%22/%3E%3Ctext%20x%3D%2280%22%20y%3D%22230%22%20fill%3D%22%23777%22%20font-family%3D%22monospace%22%20font-size%3D%2222%22%20letter-spacing%3D%225%22%3EISOC%20//%20ARMOURY%3C/text%3E%3Ctext%20x%3D%2280%22%20y%3D%22290%22%20fill%3D%22%23ddd%22%20font-family%3D%22Arial%2Csans-serif%22%20font-size%3D%2234%22%3ESIG%20Sauer%20MCX-SPEAR%20LT%20IR%205.56%20NATO%20SBR%3C/text%3E%3Ctext%20x%3D%2280%22%20y%3D%22345%22%20fill%3D%22%23666%22%20font-family%3D%22monospace%22%20font-size%3D%2216%22%20letter-spacing%3D%223%22%3EIMAGE%20PENDING%3C/text%3E%3C/svg%3E",
        "description": "Alternative build recommendation to be completed for the in-game catalogue.",
        "components": [],
        "notes": [
          "This entry is part of the proposed weapon register. Add verified BRM5-compatible components when the build is finalized."
        ]
      }
    ]
  },
  {
    "id": "ISOC-ARM-010",
    "name": "Benelli M1014",
    "type": "Shotgun",
    "image": "data:image/svg+xml;charset=UTF-8,%3Csvg%20xmlns%3D%22http%3A//www.w3.org/2000/svg%22%20width%3D%22960%22%20height%3D%22540%22%20viewBox%3D%220%200%20960%20540%22%3E%3Crect%20width%3D%22960%22%20height%3D%22540%22%20fill%3D%22%230b0b0b%22/%3E%3Cpath%20d%3D%22M80%2080H880M80%20460H880%22%20stroke%3D%22%23333%22%20stroke-width%3D%222%22/%3E%3Ctext%20x%3D%2280%22%20y%3D%22230%22%20fill%3D%22%23777%22%20font-family%3D%22monospace%22%20font-size%3D%2222%22%20letter-spacing%3D%225%22%3EISOC%20//%20ARMOURY%3C/text%3E%3Ctext%20x%3D%2280%22%20y%3D%22290%22%20fill%3D%22%23ddd%22%20font-family%3D%22Arial%2Csans-serif%22%20font-size%3D%2234%22%3EBenelli%20M1014%3C/text%3E%3Ctext%20x%3D%2280%22%20y%3D%22345%22%20fill%3D%22%23666%22%20font-family%3D%22monospace%22%20font-size%3D%2216%22%20letter-spacing%3D%223%22%3EIMAGE%20PENDING%3C/text%3E%3C/svg%3E",
    "description": "A shotgun option listed for SAS and SEAL personnel.",
    "roles": [
      "Rifleman"
    ],
    "forces": [
      "SAS",
      "SEAL"
    ],
    "situations": [
      "General infantry",
      "Close-quarters game scenarios"
    ],
    "info": {
      "designation": "IN-GAME LISTING",
      "systemType": "PRIMARY",
      "status": "PROPOSED"
    },
    "configs": [
      {
        "name": "01 / RECOMMENDED BUILD",
        "image": "data:image/svg+xml;charset=UTF-8,%3Csvg%20xmlns%3D%22http%3A//www.w3.org/2000/svg%22%20width%3D%22960%22%20height%3D%22540%22%20viewBox%3D%220%200%20960%20540%22%3E%3Crect%20width%3D%22960%22%20height%3D%22540%22%20fill%3D%22%230b0b0b%22/%3E%3Cpath%20d%3D%22M80%2080H880M80%20460H880%22%20stroke%3D%22%23333%22%20stroke-width%3D%222%22/%3E%3Ctext%20x%3D%2280%22%20y%3D%22230%22%20fill%3D%22%23777%22%20font-family%3D%22monospace%22%20font-size%3D%2222%22%20letter-spacing%3D%225%22%3EISOC%20//%20ARMOURY%3C/text%3E%3Ctext%20x%3D%2280%22%20y%3D%22290%22%20fill%3D%22%23ddd%22%20font-family%3D%22Arial%2Csans-serif%22%20font-size%3D%2234%22%3EBenelli%20M1014%3C/text%3E%3Ctext%20x%3D%2280%22%20y%3D%22345%22%20fill%3D%22%23666%22%20font-family%3D%22monospace%22%20font-size%3D%2216%22%20letter-spacing%3D%223%22%3EIMAGE%20PENDING%3C/text%3E%3C/svg%3E",
        "description": "Build recommendation to be completed for the in-game catalogue.",
        "components": [],
        "notes": [
          "This entry is part of the proposed weapon register. Add verified BRM5-compatible components when the build is finalized."
        ]
      },
      {
        "name": "02 / ALTERNATIVE BUILD",
        "image": "data:image/svg+xml;charset=UTF-8,%3Csvg%20xmlns%3D%22http%3A//www.w3.org/2000/svg%22%20width%3D%22960%22%20height%3D%22540%22%20viewBox%3D%220%200%20960%20540%22%3E%3Crect%20width%3D%22960%22%20height%3D%22540%22%20fill%3D%22%230b0b0b%22/%3E%3Cpath%20d%3D%22M80%2080H880M80%20460H880%22%20stroke%3D%22%23333%22%20stroke-width%3D%222%22/%3E%3Ctext%20x%3D%2280%22%20y%3D%22230%22%20fill%3D%22%23777%22%20font-family%3D%22monospace%22%20font-size%3D%2222%22%20letter-spacing%3D%225%22%3EISOC%20//%20ARMOURY%3C/text%3E%3Ctext%20x%3D%2280%22%20y%3D%22290%22%20fill%3D%22%23ddd%22%20font-family%3D%22Arial%2Csans-serif%22%20font-size%3D%2234%22%3EBenelli%20M1014%3C/text%3E%3Ctext%20x%3D%2280%22%20y%3D%22345%22%20fill%3D%22%23666%22%20font-family%3D%22monospace%22%20font-size%3D%2216%22%20letter-spacing%3D%223%22%3EIMAGE%20PENDING%3C/text%3E%3C/svg%3E",
        "description": "Alternative build recommendation to be completed for the in-game catalogue.",
        "components": [],
        "notes": [
          "This entry is part of the proposed weapon register. Add verified BRM5-compatible components when the build is finalized."
        ]
      }
    ]
  },
  {
    "id": "ISOC-ARM-011",
    "name": "Mk 12 Special Purpose Rifle",
    "type": "Designated Marksman Rifle",
    "image": "data:image/svg+xml;charset=UTF-8,%3Csvg%20xmlns%3D%22http%3A//www.w3.org/2000/svg%22%20width%3D%22960%22%20height%3D%22540%22%20viewBox%3D%220%200%20960%20540%22%3E%3Crect%20width%3D%22960%22%20height%3D%22540%22%20fill%3D%22%230b0b0b%22/%3E%3Cpath%20d%3D%22M80%2080H880M80%20460H880%22%20stroke%3D%22%23333%22%20stroke-width%3D%222%22/%3E%3Ctext%20x%3D%2280%22%20y%3D%22230%22%20fill%3D%22%23777%22%20font-family%3D%22monospace%22%20font-size%3D%2222%22%20letter-spacing%3D%225%22%3EISOC%20//%20ARMOURY%3C/text%3E%3Ctext%20x%3D%2280%22%20y%3D%22290%22%20fill%3D%22%23ddd%22%20font-family%3D%22Arial%2Csans-serif%22%20font-size%3D%2234%22%3EMk%2012%20Special%20Purpose%20Rifle%3C/text%3E%3Ctext%20x%3D%2280%22%20y%3D%22345%22%20fill%3D%22%23666%22%20font-family%3D%22monospace%22%20font-size%3D%2216%22%20letter-spacing%3D%223%22%3EIMAGE%20PENDING%3C/text%3E%3C/svg%3E",
    "description": "A designated marksman rifle option listed for SAS and SEAL personnel.",
    "roles": [
      "Marksman"
    ],
    "forces": [
      "SAS",
      "SEAL"
    ],
    "situations": [
      "Overwatch",
      "Precision role"
    ],
    "info": {
      "designation": "IN-GAME LISTING",
      "systemType": "PRIMARY",
      "status": "PROPOSED"
    },
    "configs": [
      {
        "name": "01 / RECOMMENDED BUILD",
        "image": "data:image/svg+xml;charset=UTF-8,%3Csvg%20xmlns%3D%22http%3A//www.w3.org/2000/svg%22%20width%3D%22960%22%20height%3D%22540%22%20viewBox%3D%220%200%20960%20540%22%3E%3Crect%20width%3D%22960%22%20height%3D%22540%22%20fill%3D%22%230b0b0b%22/%3E%3Cpath%20d%3D%22M80%2080H880M80%20460H880%22%20stroke%3D%22%23333%22%20stroke-width%3D%222%22/%3E%3Ctext%20x%3D%2280%22%20y%3D%22230%22%20fill%3D%22%23777%22%20font-family%3D%22monospace%22%20font-size%3D%2222%22%20letter-spacing%3D%225%22%3EISOC%20//%20ARMOURY%3C/text%3E%3Ctext%20x%3D%2280%22%20y%3D%22290%22%20fill%3D%22%23ddd%22%20font-family%3D%22Arial%2Csans-serif%22%20font-size%3D%2234%22%3EMk%2012%20Special%20Purpose%20Rifle%3C/text%3E%3Ctext%20x%3D%2280%22%20y%3D%22345%22%20fill%3D%22%23666%22%20font-family%3D%22monospace%22%20font-size%3D%2216%22%20letter-spacing%3D%223%22%3EIMAGE%20PENDING%3C/text%3E%3C/svg%3E",
        "description": "Build recommendation to be completed for the in-game catalogue.",
        "components": [],
        "notes": [
          "This entry is part of the proposed weapon register. Add verified BRM5-compatible components when the build is finalized."
        ]
      },
      {
        "name": "02 / ALTERNATIVE BUILD",
        "image": "data:image/svg+xml;charset=UTF-8,%3Csvg%20xmlns%3D%22http%3A//www.w3.org/2000/svg%22%20width%3D%22960%22%20height%3D%22540%22%20viewBox%3D%220%200%20960%20540%22%3E%3Crect%20width%3D%22960%22%20height%3D%22540%22%20fill%3D%22%230b0b0b%22/%3E%3Cpath%20d%3D%22M80%2080H880M80%20460H880%22%20stroke%3D%22%23333%22%20stroke-width%3D%222%22/%3E%3Ctext%20x%3D%2280%22%20y%3D%22230%22%20fill%3D%22%23777%22%20font-family%3D%22monospace%22%20font-size%3D%2222%22%20letter-spacing%3D%225%22%3EISOC%20//%20ARMOURY%3C/text%3E%3Ctext%20x%3D%2280%22%20y%3D%22290%22%20fill%3D%22%23ddd%22%20font-family%3D%22Arial%2Csans-serif%22%20font-size%3D%2234%22%3EMk%2012%20Special%20Purpose%20Rifle%3C/text%3E%3Ctext%20x%3D%2280%22%20y%3D%22345%22%20fill%3D%22%23666%22%20font-family%3D%22monospace%22%20font-size%3D%2216%22%20letter-spacing%3D%223%22%3EIMAGE%20PENDING%3C/text%3E%3C/svg%3E",
        "description": "Alternative build recommendation to be completed for the in-game catalogue.",
        "components": [],
        "notes": [
          "This entry is part of the proposed weapon register. Add verified BRM5-compatible components when the build is finalized."
        ]
      }
    ]
  },
  {
    "id": "ISOC-ARM-012",
    "name": "M110 SASS",
    "type": "Designated Marksman Rifle",
    "image": "M110.png",
    "description": "A designated marksman rifle option listed for SAS and SEAL personnel.",
    "roles": [
      "Marksman"
    ],
    "situations": [
      "Overwatch",
      "Long sightlines",
      "Squad support"
    ],
    "info": {
      "designation": "KSOL-SOF-008",
      "caliber": "7.62 × 51mm NATO",
      "effectiveRange": "884.85m",
      "muzzleVelocity": "821.64m/s",
      "weight": "~7.8kg",
      "length": "TBD",
      "fireMode": "SEMI | SAFE",
      "magazine": "20-ROUND",
      "systemType": "SPECIAL OPERATIONS",
      "status": "PROPOSED"
    },
    "configs": [
      {
        "name": "01 / PRECISION",
        "image": "M110.png",
        "description": "Suggested direction: magnified optic and a setup tuned for controlled, deliberate shots. Confirm the optic options available in BRM5.",
        "components": [
          {
            "slot": "Optic",
            "suggestion": "Magnified optic suited to longer sightlines",
            "required": true
          },
          {
            "slot": "Magazine",
            "suggestion": "Standard-capacity magazine; prioritize handling and reliability",
            "required": true
          },
          {
            "slot": "Muzzle",
            "suggestion": "Optional suppressor or flash-hiding attachment, if available",
            "required": false
          },
          {
            "slot": "Underbarrel / Grip",
            "suggestion": "Optional compatible bipod or stability aid, if the game offers one",
            "required": false
          },
          {
            "slot": "Stock",
            "suggestion": "Keep standard stock or choose a compatible handling-focused option",
            "required": false
          }
        ],
        "notes": [
          "These are recommended component categories and setup goals, not a restriction on personal builds.",
          "Confirm the exact attachment name and compatibility in BRM5 before treating a suggestion as a specific in-game part."
        ]
      },
      {
        "name": "02 / MOBILE OVERWATCH",
        "image": "M110.png",
        "description": "Suggested direction: a less cumbersome sighting setup for repositioning with the element; trade maximum magnification for flexibility.",
        "components": [
          {
            "slot": "Optic",
            "suggestion": "Magnified optic suited to longer sightlines",
            "required": true
          },
          {
            "slot": "Magazine",
            "suggestion": "Standard-capacity magazine; prioritize handling and reliability",
            "required": true
          },
          {
            "slot": "Muzzle",
            "suggestion": "Optional suppressor or flash-hiding attachment, if available",
            "required": false
          },
          {
            "slot": "Underbarrel / Grip",
            "suggestion": "Optional compatible bipod or stability aid, if the game offers one",
            "required": false
          },
          {
            "slot": "Stock",
            "suggestion": "Keep standard stock or choose a compatible handling-focused option",
            "required": false
          }
        ],
        "notes": [
          "These are recommended component categories and setup goals, not a restriction on personal builds.",
          "Confirm the exact attachment name and compatibility in BRM5 before treating a suggestion as a specific in-game part."
        ]
      }
    ],
    "forces": [
      "SAS",
      "SEAL"
    ]
  },
  {
    "id": "ISOC-ARM-013",
    "name": "Mk 20 Mod 0 7.62 NATO",
    "type": "Designated Marksman Rifle",
    "image": "data:image/svg+xml;charset=UTF-8,%3Csvg%20xmlns%3D%22http%3A//www.w3.org/2000/svg%22%20width%3D%22960%22%20height%3D%22540%22%20viewBox%3D%220%200%20960%20540%22%3E%3Crect%20width%3D%22960%22%20height%3D%22540%22%20fill%3D%22%230b0b0b%22/%3E%3Cpath%20d%3D%22M80%2080H880M80%20460H880%22%20stroke%3D%22%23333%22%20stroke-width%3D%222%22/%3E%3Ctext%20x%3D%2280%22%20y%3D%22230%22%20fill%3D%22%23777%22%20font-family%3D%22monospace%22%20font-size%3D%2222%22%20letter-spacing%3D%225%22%3EISOC%20//%20ARMOURY%3C/text%3E%3Ctext%20x%3D%2280%22%20y%3D%22290%22%20fill%3D%22%23ddd%22%20font-family%3D%22Arial%2Csans-serif%22%20font-size%3D%2234%22%3EMk%2020%20Mod%200%207.62%20NATO%3C/text%3E%3Ctext%20x%3D%2280%22%20y%3D%22345%22%20fill%3D%22%23666%22%20font-family%3D%22monospace%22%20font-size%3D%2216%22%20letter-spacing%3D%223%22%3EIMAGE%20PENDING%3C/text%3E%3C/svg%3E",
    "description": "A designated marksman rifle option listed for SAS and SEAL personnel.",
    "roles": [
      "Marksman"
    ],
    "forces": [
      "SAS",
      "SEAL"
    ],
    "situations": [
      "Overwatch",
      "Precision role"
    ],
    "info": {
      "designation": "IN-GAME LISTING",
      "systemType": "PRIMARY",
      "status": "PROPOSED"
    },
    "configs": [
      {
        "name": "01 / RECOMMENDED BUILD",
        "image": "data:image/svg+xml;charset=UTF-8,%3Csvg%20xmlns%3D%22http%3A//www.w3.org/2000/svg%22%20width%3D%22960%22%20height%3D%22540%22%20viewBox%3D%220%200%20960%20540%22%3E%3Crect%20width%3D%22960%22%20height%3D%22540%22%20fill%3D%22%230b0b0b%22/%3E%3Cpath%20d%3D%22M80%2080H880M80%20460H880%22%20stroke%3D%22%23333%22%20stroke-width%3D%222%22/%3E%3Ctext%20x%3D%2280%22%20y%3D%22230%22%20fill%3D%22%23777%22%20font-family%3D%22monospace%22%20font-size%3D%2222%22%20letter-spacing%3D%225%22%3EISOC%20//%20ARMOURY%3C/text%3E%3Ctext%20x%3D%2280%22%20y%3D%22290%22%20fill%3D%22%23ddd%22%20font-family%3D%22Arial%2Csans-serif%22%20font-size%3D%2234%22%3EMk%2020%20Mod%200%207.62%20NATO%3C/text%3E%3Ctext%20x%3D%2280%22%20y%3D%22345%22%20fill%3D%22%23666%22%20font-family%3D%22monospace%22%20font-size%3D%2216%22%20letter-spacing%3D%223%22%3EIMAGE%20PENDING%3C/text%3E%3C/svg%3E",
        "description": "Build recommendation to be completed for the in-game catalogue.",
        "components": [],
        "notes": [
          "This entry is part of the proposed weapon register. Add verified BRM5-compatible components when the build is finalized."
        ]
      },
      {
        "name": "02 / ALTERNATIVE BUILD",
        "image": "data:image/svg+xml;charset=UTF-8,%3Csvg%20xmlns%3D%22http%3A//www.w3.org/2000/svg%22%20width%3D%22960%22%20height%3D%22540%22%20viewBox%3D%220%200%20960%20540%22%3E%3Crect%20width%3D%22960%22%20height%3D%22540%22%20fill%3D%22%230b0b0b%22/%3E%3Cpath%20d%3D%22M80%2080H880M80%20460H880%22%20stroke%3D%22%23333%22%20stroke-width%3D%222%22/%3E%3Ctext%20x%3D%2280%22%20y%3D%22230%22%20fill%3D%22%23777%22%20font-family%3D%22monospace%22%20font-size%3D%2222%22%20letter-spacing%3D%225%22%3EISOC%20//%20ARMOURY%3C/text%3E%3Ctext%20x%3D%2280%22%20y%3D%22290%22%20fill%3D%22%23ddd%22%20font-family%3D%22Arial%2Csans-serif%22%20font-size%3D%2234%22%3EMk%2020%20Mod%200%207.62%20NATO%3C/text%3E%3Ctext%20x%3D%2280%22%20y%3D%22345%22%20fill%3D%22%23666%22%20font-family%3D%22monospace%22%20font-size%3D%2216%22%20letter-spacing%3D%223%22%3EIMAGE%20PENDING%3C/text%3E%3C/svg%3E",
        "description": "Alternative build recommendation to be completed for the in-game catalogue.",
        "components": [],
        "notes": [
          "This entry is part of the proposed weapon register. Add verified BRM5-compatible components when the build is finalized."
        ]
      }
    ]
  },
  {
    "id": "ISOC-ARM-014",
    "name": "Accuracy International Arctic Warfare Magnum L115A3",
    "type": "Sniper Rifle",
    "image": "data:image/svg+xml;charset=UTF-8,%3Csvg%20xmlns%3D%22http%3A//www.w3.org/2000/svg%22%20width%3D%22960%22%20height%3D%22540%22%20viewBox%3D%220%200%20960%20540%22%3E%3Crect%20width%3D%22960%22%20height%3D%22540%22%20fill%3D%22%230b0b0b%22/%3E%3Cpath%20d%3D%22M80%2080H880M80%20460H880%22%20stroke%3D%22%23333%22%20stroke-width%3D%222%22/%3E%3Ctext%20x%3D%2280%22%20y%3D%22230%22%20fill%3D%22%23777%22%20font-family%3D%22monospace%22%20font-size%3D%2222%22%20letter-spacing%3D%225%22%3EISOC%20//%20ARMOURY%3C/text%3E%3Ctext%20x%3D%2280%22%20y%3D%22290%22%20fill%3D%22%23ddd%22%20font-family%3D%22Arial%2Csans-serif%22%20font-size%3D%2234%22%3EAccuracy%20International%20Arctic%20Warfare%20Magnum%20L115A3%3C/text%3E%3Ctext%20x%3D%2280%22%20y%3D%22345%22%20fill%3D%22%23666%22%20font-family%3D%22monospace%22%20font-size%3D%2216%22%20letter-spacing%3D%223%22%3EIMAGE%20PENDING%3C/text%3E%3C/svg%3E",
    "description": "A bolt-action sniper rifle option listed for the SAS element.",
    "roles": [
      "Sniper"
    ],
    "forces": [
      "SAS"
    ],
    "situations": [
      "Precision role",
      "Long-range game scenarios"
    ],
    "info": {
      "designation": "IN-GAME LISTING",
      "systemType": "PRIMARY",
      "status": "PROPOSED"
    },
    "configs": [
      {
        "name": "01 / RECOMMENDED BUILD",
        "image": "data:image/svg+xml;charset=UTF-8,%3Csvg%20xmlns%3D%22http%3A//www.w3.org/2000/svg%22%20width%3D%22960%22%20height%3D%22540%22%20viewBox%3D%220%200%20960%20540%22%3E%3Crect%20width%3D%22960%22%20height%3D%22540%22%20fill%3D%22%230b0b0b%22/%3E%3Cpath%20d%3D%22M80%2080H880M80%20460H880%22%20stroke%3D%22%23333%22%20stroke-width%3D%222%22/%3E%3Ctext%20x%3D%2280%22%20y%3D%22230%22%20fill%3D%22%23777%22%20font-family%3D%22monospace%22%20font-size%3D%2222%22%20letter-spacing%3D%225%22%3EISOC%20//%20ARMOURY%3C/text%3E%3Ctext%20x%3D%2280%22%20y%3D%22290%22%20fill%3D%22%23ddd%22%20font-family%3D%22Arial%2Csans-serif%22%20font-size%3D%2234%22%3EAccuracy%20International%20Arctic%20Warfare%20Magnum%20L115A3%3C/text%3E%3Ctext%20x%3D%2280%22%20y%3D%22345%22%20fill%3D%22%23666%22%20font-family%3D%22monospace%22%20font-size%3D%2216%22%20letter-spacing%3D%223%22%3EIMAGE%20PENDING%3C/text%3E%3C/svg%3E",
        "description": "Build recommendation to be completed for the in-game catalogue.",
        "components": [],
        "notes": [
          "This entry is part of the proposed weapon register. Add verified BRM5-compatible components when the build is finalized."
        ]
      },
      {
        "name": "02 / ALTERNATIVE BUILD",
        "image": "data:image/svg+xml;charset=UTF-8,%3Csvg%20xmlns%3D%22http%3A//www.w3.org/2000/svg%22%20width%3D%22960%22%20height%3D%22540%22%20viewBox%3D%220%200%20960%20540%22%3E%3Crect%20width%3D%22960%22%20height%3D%22540%22%20fill%3D%22%230b0b0b%22/%3E%3Cpath%20d%3D%22M80%2080H880M80%20460H880%22%20stroke%3D%22%23333%22%20stroke-width%3D%222%22/%3E%3Ctext%20x%3D%2280%22%20y%3D%22230%22%20fill%3D%22%23777%22%20font-family%3D%22monospace%22%20font-size%3D%2222%22%20letter-spacing%3D%225%22%3EISOC%20//%20ARMOURY%3C/text%3E%3Ctext%20x%3D%2280%22%20y%3D%22290%22%20fill%3D%22%23ddd%22%20font-family%3D%22Arial%2Csans-serif%22%20font-size%3D%2234%22%3EAccuracy%20International%20Arctic%20Warfare%20Magnum%20L115A3%3C/text%3E%3Ctext%20x%3D%2280%22%20y%3D%22345%22%20fill%3D%22%23666%22%20font-family%3D%22monospace%22%20font-size%3D%2216%22%20letter-spacing%3D%223%22%3EIMAGE%20PENDING%3C/text%3E%3C/svg%3E",
        "description": "Alternative build recommendation to be completed for the in-game catalogue.",
        "components": [],
        "notes": [
          "This entry is part of the proposed weapon register. Add verified BRM5-compatible components when the build is finalized."
        ]
      }
    ]
  },
  {
    "id": "ISOC-ARM-015",
    "name": "Remington M24 Sniper Weapon System",
    "type": "Sniper Rifle",
    "image": "M24.png",
    "description": "A bolt-action sniper rifle option listed for SAS and SEAL personnel.",
    "roles": [
      "Sniper"
    ],
    "situations": [
      "Dedicated overwatch",
      "Long-range precision"
    ],
    "info": {
      "designation": "KSOL-SOF-010",
      "caliber": "7.62 × 51mm",
      "effectiveRange": "909.11m",
      "muzzleVelocity": "832.82m/s",
      "weight": "~6.5kg",
      "length": "TBD",
      "fireMode": "N/A",
      "magazine": "CHAMBER FED BOLT-ACTION",
      "systemType": "SPECIAL OPERATIONS",
      "status": "PROPOSED"
    },
    "configs": [
      {
        "name": "01 / PRECISION",
        "image": "M24.png",
        "description": "Suggested direction: magnified optic and a setup tuned for controlled, deliberate shots. Confirm the optic options available in BRM5.",
        "components": [
          {
            "slot": "Optic",
            "suggestion": "Magnified optic suited to longer sightlines",
            "required": true
          },
          {
            "slot": "Magazine",
            "suggestion": "Standard-capacity magazine; prioritize handling and reliability",
            "required": true
          },
          {
            "slot": "Muzzle",
            "suggestion": "Optional suppressor or flash-hiding attachment, if available",
            "required": false
          },
          {
            "slot": "Underbarrel / Grip",
            "suggestion": "Optional compatible bipod or stability aid, if the game offers one",
            "required": false
          },
          {
            "slot": "Stock",
            "suggestion": "Keep standard stock or choose a compatible handling-focused option",
            "required": false
          }
        ],
        "notes": [
          "These are recommended component categories and setup goals, not a restriction on personal builds.",
          "Confirm the exact attachment name and compatibility in BRM5 before treating a suggestion as a specific in-game part."
        ]
      },
      {
        "name": "02 / MOBILE OVERWATCH",
        "image": "M24.png",
        "description": "Suggested direction: a less cumbersome sighting setup for repositioning with the element; trade maximum magnification for flexibility.",
        "components": [
          {
            "slot": "Optic",
            "suggestion": "Magnified optic suited to longer sightlines",
            "required": true
          },
          {
            "slot": "Magazine",
            "suggestion": "Standard-capacity magazine; prioritize handling and reliability",
            "required": true
          },
          {
            "slot": "Muzzle",
            "suggestion": "Optional suppressor or flash-hiding attachment, if available",
            "required": false
          },
          {
            "slot": "Underbarrel / Grip",
            "suggestion": "Optional compatible bipod or stability aid, if the game offers one",
            "required": false
          },
          {
            "slot": "Stock",
            "suggestion": "Keep standard stock or choose a compatible handling-focused option",
            "required": false
          }
        ],
        "notes": [
          "These are recommended component categories and setup goals, not a restriction on personal builds.",
          "Confirm the exact attachment name and compatibility in BRM5 before treating a suggestion as a specific in-game part."
        ]
      }
    ],
    "forces": [
      "SAS",
      "SEAL"
    ]
  },
  {
    "id": "ISOC-ARM-016",
    "name": "Remington M2010 Enhanced Sniper Rifle",
    "type": "Sniper Rifle",
    "image": "M2010.png",
    "description": "A bolt-action sniper rifle option listed for SAS and SEAL personnel.",
    "roles": [
      "Sniper"
    ],
    "situations": [
      "Dedicated overwatch",
      "Long-range precision"
    ],
    "info": {
      "designation": "KSOL-SOF-009",
      "caliber": ".300 Winchester Magnum",
      "effectiveRange": "1006.43m",
      "muzzleVelocity": "876.80m/s",
      "weight": "~7.5kg",
      "length": "TBD",
      "fireMode": "SEMI | SAFE",
      "magazine": "5-ROUND",
      "systemType": "SPECIAL OPERATIONS",
      "status": "PROPOSED"
    },
    "configs": [
      {
        "name": "01 / PRECISION",
        "image": "M2010.png",
        "description": "Suggested direction: magnified optic and a setup tuned for controlled, deliberate shots. Confirm the optic options available in BRM5.",
        "components": [
          {
            "slot": "Optic",
            "suggestion": "Magnified optic suited to longer sightlines",
            "required": true
          },
          {
            "slot": "Magazine",
            "suggestion": "Standard-capacity magazine; prioritize handling and reliability",
            "required": true
          },
          {
            "slot": "Muzzle",
            "suggestion": "Optional suppressor or flash-hiding attachment, if available",
            "required": false
          },
          {
            "slot": "Underbarrel / Grip",
            "suggestion": "Optional compatible bipod or stability aid, if the game offers one",
            "required": false
          },
          {
            "slot": "Stock",
            "suggestion": "Keep standard stock or choose a compatible handling-focused option",
            "required": false
          }
        ],
        "notes": [
          "These are recommended component categories and setup goals, not a restriction on personal builds.",
          "Confirm the exact attachment name and compatibility in BRM5 before treating a suggestion as a specific in-game part."
        ]
      },
      {
        "name": "02 / MOBILE OVERWATCH",
        "image": "M2010.png",
        "description": "Suggested direction: a less cumbersome sighting setup for repositioning with the element; trade maximum magnification for flexibility.",
        "components": [
          {
            "slot": "Optic",
            "suggestion": "Magnified optic suited to longer sightlines",
            "required": true
          },
          {
            "slot": "Magazine",
            "suggestion": "Standard-capacity magazine; prioritize handling and reliability",
            "required": true
          },
          {
            "slot": "Muzzle",
            "suggestion": "Optional suppressor or flash-hiding attachment, if available",
            "required": false
          },
          {
            "slot": "Underbarrel / Grip",
            "suggestion": "Optional compatible bipod or stability aid, if the game offers one",
            "required": false
          },
          {
            "slot": "Stock",
            "suggestion": "Keep standard stock or choose a compatible handling-focused option",
            "required": false
          }
        ],
        "notes": [
          "These are recommended component categories and setup goals, not a restriction on personal builds.",
          "Confirm the exact attachment name and compatibility in BRM5 before treating a suggestion as a specific in-game part."
        ]
      }
    ],
    "forces": [
      "SAS",
      "SEAL"
    ]
  },
  {
    "id": "ISOC-ARM-017",
    "name": "PGM Hécate II",
    "type": "Sniper Rifle",
    "image": "data:image/svg+xml;charset=UTF-8,%3Csvg%20xmlns%3D%22http%3A//www.w3.org/2000/svg%22%20width%3D%22960%22%20height%3D%22540%22%20viewBox%3D%220%200%20960%20540%22%3E%3Crect%20width%3D%22960%22%20height%3D%22540%22%20fill%3D%22%230b0b0b%22/%3E%3Cpath%20d%3D%22M80%2080H880M80%20460H880%22%20stroke%3D%22%23333%22%20stroke-width%3D%222%22/%3E%3Ctext%20x%3D%2280%22%20y%3D%22230%22%20fill%3D%22%23777%22%20font-family%3D%22monospace%22%20font-size%3D%2222%22%20letter-spacing%3D%225%22%3EISOC%20//%20ARMOURY%3C/text%3E%3Ctext%20x%3D%2280%22%20y%3D%22290%22%20fill%3D%22%23ddd%22%20font-family%3D%22Arial%2Csans-serif%22%20font-size%3D%2234%22%3EPGM%20H%C3%A9cate%20II%3C/text%3E%3Ctext%20x%3D%2280%22%20y%3D%22345%22%20fill%3D%22%23666%22%20font-family%3D%22monospace%22%20font-size%3D%2216%22%20letter-spacing%3D%223%22%3EIMAGE%20PENDING%3C/text%3E%3C/svg%3E",
    "description": "A bolt-action sniper rifle option listed for SAS and SEAL personnel.",
    "roles": [
      "Sniper"
    ],
    "forces": [
      "SAS",
      "SEAL"
    ],
    "situations": [
      "Precision role",
      "Long-range game scenarios"
    ],
    "info": {
      "designation": "IN-GAME LISTING",
      "systemType": "PRIMARY",
      "status": "PROPOSED"
    },
    "configs": [
      {
        "name": "01 / RECOMMENDED BUILD",
        "image": "data:image/svg+xml;charset=UTF-8,%3Csvg%20xmlns%3D%22http%3A//www.w3.org/2000/svg%22%20width%3D%22960%22%20height%3D%22540%22%20viewBox%3D%220%200%20960%20540%22%3E%3Crect%20width%3D%22960%22%20height%3D%22540%22%20fill%3D%22%230b0b0b%22/%3E%3Cpath%20d%3D%22M80%2080H880M80%20460H880%22%20stroke%3D%22%23333%22%20stroke-width%3D%222%22/%3E%3Ctext%20x%3D%2280%22%20y%3D%22230%22%20fill%3D%22%23777%22%20font-family%3D%22monospace%22%20font-size%3D%2222%22%20letter-spacing%3D%225%22%3EISOC%20//%20ARMOURY%3C/text%3E%3Ctext%20x%3D%2280%22%20y%3D%22290%22%20fill%3D%22%23ddd%22%20font-family%3D%22Arial%2Csans-serif%22%20font-size%3D%2234%22%3EPGM%20H%C3%A9cate%20II%3C/text%3E%3Ctext%20x%3D%2280%22%20y%3D%22345%22%20fill%3D%22%23666%22%20font-family%3D%22monospace%22%20font-size%3D%2216%22%20letter-spacing%3D%223%22%3EIMAGE%20PENDING%3C/text%3E%3C/svg%3E",
        "description": "Build recommendation to be completed for the in-game catalogue.",
        "components": [],
        "notes": [
          "This entry is part of the proposed weapon register. Add verified BRM5-compatible components when the build is finalized."
        ]
      },
      {
        "name": "02 / ALTERNATIVE BUILD",
        "image": "data:image/svg+xml;charset=UTF-8,%3Csvg%20xmlns%3D%22http%3A//www.w3.org/2000/svg%22%20width%3D%22960%22%20height%3D%22540%22%20viewBox%3D%220%200%20960%20540%22%3E%3Crect%20width%3D%22960%22%20height%3D%22540%22%20fill%3D%22%230b0b0b%22/%3E%3Cpath%20d%3D%22M80%2080H880M80%20460H880%22%20stroke%3D%22%23333%22%20stroke-width%3D%222%22/%3E%3Ctext%20x%3D%2280%22%20y%3D%22230%22%20fill%3D%22%23777%22%20font-family%3D%22monospace%22%20font-size%3D%2222%22%20letter-spacing%3D%225%22%3EISOC%20//%20ARMOURY%3C/text%3E%3Ctext%20x%3D%2280%22%20y%3D%22290%22%20fill%3D%22%23ddd%22%20font-family%3D%22Arial%2Csans-serif%22%20font-size%3D%2234%22%3EPGM%20H%C3%A9cate%20II%3C/text%3E%3Ctext%20x%3D%2280%22%20y%3D%22345%22%20fill%3D%22%23666%22%20font-family%3D%22monospace%22%20font-size%3D%2216%22%20letter-spacing%3D%223%22%3EIMAGE%20PENDING%3C/text%3E%3C/svg%3E",
        "description": "Alternative build recommendation to be completed for the in-game catalogue.",
        "components": [],
        "notes": [
          "This entry is part of the proposed weapon register. Add verified BRM5-compatible components when the build is finalized."
        ]
      }
    ]
  },
  {
    "id": "ISOC-ARM-018",
    "name": "FN Herstal M249 Squad Automatic Rifle / Para",
    "type": "Light Machine Gun",
    "image": "M249.png",
    "description": "A light machine gun option listed for the SAS element.",
    "roles": [
      "Automatic Rifleman"
    ],
    "situations": [
      "Fire support",
      "Area coverage",
      "Team support"
    ],
    "info": {
      "designation": "KSOL-SOF-011",
      "caliber": "5.56 × 45mm",
      "effectiveRange": "523.53m",
      "muzzleVelocity": "856.46m/s",
      "weight": "~9.6kg",
      "length": "TBD",
      "fireMode": "AUTO | SAFE",
      "magazine": "200-ROUND",
      "systemType": "SPECIAL OPERATIONS",
      "status": "PROPOSED"
    },
    "configs": [
      {
        "name": "01 / SUPPORT",
        "image": "M249.png",
        "description": "Suggested direction: sighting setup that supports sustained-fire roles and clear target identification.",
        "components": [
          {
            "slot": "Optic",
            "suggestion": "Magnified optic suited to longer sightlines",
            "required": true
          },
          {
            "slot": "Magazine",
            "suggestion": "Standard-capacity magazine; prioritize handling and reliability",
            "required": true
          },
          {
            "slot": "Muzzle",
            "suggestion": "Optional suppressor or flash-hiding attachment, if available",
            "required": false
          },
          {
            "slot": "Underbarrel / Grip",
            "suggestion": "Optional compatible bipod or stability aid, if the game offers one",
            "required": false
          },
          {
            "slot": "Stock",
            "suggestion": "Keep standard stock or choose a compatible handling-focused option",
            "required": false
          }
        ],
        "notes": [
          "These are recommended component categories and setup goals, not a restriction on personal builds.",
          "Confirm the exact attachment name and compatibility in BRM5 before treating a suggestion as a specific in-game part."
        ]
      },
      {
        "name": "02 / MOBILE SUPPORT",
        "image": "M249.png",
        "description": "Suggested direction: reduce unnecessary accessories to preserve mobility while retaining a useful sight picture.",
        "components": [
          {
            "slot": "Optic",
            "suggestion": "Magnified optic suited to longer sightlines",
            "required": true
          },
          {
            "slot": "Magazine",
            "suggestion": "Standard-capacity magazine; prioritize handling and reliability",
            "required": true
          },
          {
            "slot": "Muzzle",
            "suggestion": "Optional suppressor or flash-hiding attachment, if available",
            "required": false
          },
          {
            "slot": "Underbarrel / Grip",
            "suggestion": "Optional compatible bipod or stability aid, if the game offers one",
            "required": false
          },
          {
            "slot": "Stock",
            "suggestion": "Keep standard stock or choose a compatible handling-focused option",
            "required": false
          }
        ],
        "notes": [
          "These are recommended component categories and setup goals, not a restriction on personal builds.",
          "Confirm the exact attachment name and compatibility in BRM5 before treating a suggestion as a specific in-game part."
        ]
      }
    ],
    "forces": [
      "SAS"
    ]
  },
  {
    "id": "ISOC-ARM-019",
    "name": "FN Herstal Mk 46 Mod 1",
    "type": "Light Machine Gun",
    "image": "data:image/svg+xml;charset=UTF-8,%3Csvg%20xmlns%3D%22http%3A//www.w3.org/2000/svg%22%20width%3D%22960%22%20height%3D%22540%22%20viewBox%3D%220%200%20960%20540%22%3E%3Crect%20width%3D%22960%22%20height%3D%22540%22%20fill%3D%22%230b0b0b%22/%3E%3Cpath%20d%3D%22M80%2080H880M80%20460H880%22%20stroke%3D%22%23333%22%20stroke-width%3D%222%22/%3E%3Ctext%20x%3D%2280%22%20y%3D%22230%22%20fill%3D%22%23777%22%20font-family%3D%22monospace%22%20font-size%3D%2222%22%20letter-spacing%3D%225%22%3EISOC%20//%20ARMOURY%3C/text%3E%3Ctext%20x%3D%2280%22%20y%3D%22290%22%20fill%3D%22%23ddd%22%20font-family%3D%22Arial%2Csans-serif%22%20font-size%3D%2234%22%3EFN%20Herstal%20Mk%2046%20Mod%201%3C/text%3E%3Ctext%20x%3D%2280%22%20y%3D%22345%22%20fill%3D%22%23666%22%20font-family%3D%22monospace%22%20font-size%3D%2216%22%20letter-spacing%3D%223%22%3EIMAGE%20PENDING%3C/text%3E%3C/svg%3E",
    "description": "A light machine gun option listed for SAS and SEAL personnel.",
    "roles": [
      "Automatic Rifleman"
    ],
    "forces": [
      "SAS",
      "SEAL"
    ],
    "situations": [
      "Automatic fire support role"
    ],
    "info": {
      "designation": "IN-GAME LISTING",
      "systemType": "PRIMARY",
      "status": "PROPOSED"
    },
    "configs": [
      {
        "name": "01 / RECOMMENDED BUILD",
        "image": "data:image/svg+xml;charset=UTF-8,%3Csvg%20xmlns%3D%22http%3A//www.w3.org/2000/svg%22%20width%3D%22960%22%20height%3D%22540%22%20viewBox%3D%220%200%20960%20540%22%3E%3Crect%20width%3D%22960%22%20height%3D%22540%22%20fill%3D%22%230b0b0b%22/%3E%3Cpath%20d%3D%22M80%2080H880M80%20460H880%22%20stroke%3D%22%23333%22%20stroke-width%3D%222%22/%3E%3Ctext%20x%3D%2280%22%20y%3D%22230%22%20fill%3D%22%23777%22%20font-family%3D%22monospace%22%20font-size%3D%2222%22%20letter-spacing%3D%225%22%3EISOC%20//%20ARMOURY%3C/text%3E%3Ctext%20x%3D%2280%22%20y%3D%22290%22%20fill%3D%22%23ddd%22%20font-family%3D%22Arial%2Csans-serif%22%20font-size%3D%2234%22%3EFN%20Herstal%20Mk%2046%20Mod%201%3C/text%3E%3Ctext%20x%3D%2280%22%20y%3D%22345%22%20fill%3D%22%23666%22%20font-family%3D%22monospace%22%20font-size%3D%2216%22%20letter-spacing%3D%223%22%3EIMAGE%20PENDING%3C/text%3E%3C/svg%3E",
        "description": "Build recommendation to be completed for the in-game catalogue.",
        "components": [],
        "notes": [
          "This entry is part of the proposed weapon register. Add verified BRM5-compatible components when the build is finalized."
        ]
      },
      {
        "name": "02 / ALTERNATIVE BUILD",
        "image": "data:image/svg+xml;charset=UTF-8,%3Csvg%20xmlns%3D%22http%3A//www.w3.org/2000/svg%22%20width%3D%22960%22%20height%3D%22540%22%20viewBox%3D%220%200%20960%20540%22%3E%3Crect%20width%3D%22960%22%20height%3D%22540%22%20fill%3D%22%230b0b0b%22/%3E%3Cpath%20d%3D%22M80%2080H880M80%20460H880%22%20stroke%3D%22%23333%22%20stroke-width%3D%222%22/%3E%3Ctext%20x%3D%2280%22%20y%3D%22230%22%20fill%3D%22%23777%22%20font-family%3D%22monospace%22%20font-size%3D%2222%22%20letter-spacing%3D%225%22%3EISOC%20//%20ARMOURY%3C/text%3E%3Ctext%20x%3D%2280%22%20y%3D%22290%22%20fill%3D%22%23ddd%22%20font-family%3D%22Arial%2Csans-serif%22%20font-size%3D%2234%22%3EFN%20Herstal%20Mk%2046%20Mod%201%3C/text%3E%3Ctext%20x%3D%2280%22%20y%3D%22345%22%20fill%3D%22%23666%22%20font-family%3D%22monospace%22%20font-size%3D%2216%22%20letter-spacing%3D%223%22%3EIMAGE%20PENDING%3C/text%3E%3C/svg%3E",
        "description": "Alternative build recommendation to be completed for the in-game catalogue.",
        "components": [],
        "notes": [
          "This entry is part of the proposed weapon register. Add verified BRM5-compatible components when the build is finalized."
        ]
      }
    ]
  },
  {
    "id": "ISOC-ARM-020",
    "name": "Springfield Armory 1911 Operator",
    "type": "Sidearm",
    "image": "M1911.png",
    "description": "The Springfield Armory 1911 Operator variant, listed for SAS and SEAL personnel. Also available to 160th SOAR pilots.",
    "roles": [
      "Rifleman",
      "Pilot"
    ],
    "situations": [
      "Backup weapon",
      "Emergency transition"
    ],
    "info": {
      "designation": "KSOL-SOF-006",
      "caliber": ".45 ACP",
      "effectiveRange": "217.67m",
      "muzzleVelocity": "267.24m/s",
      "weight": "~2.01kg",
      "length": "TBD",
      "fireMode": "SEMI | SAFE",
      "magazine": "11-ROUND",
      "systemType": "SPECIAL OPERATIONS",
      "status": "PROPOSED",
      "variant note": "Operator variant is from Springfield Armory, not Colt or Kimber."
    },
    "configs": [
      {
        "name": "01 / DUTY",
        "image": "M1911.png",
        "description": "Suggested direction: simple, unobtrusive setup. Use only compatible BRM5 attachments.",
        "components": [
          {
            "slot": "Optic",
            "suggestion": "Clear, familiar sight picture; optic only if supported",
            "required": false
          },
          {
            "slot": "Magazine",
            "suggestion": "Standard-capacity magazine",
            "required": true
          },
          {
            "slot": "Muzzle",
            "suggestion": "Leave stock, or choose a compatible muzzle attachment",
            "required": false
          }
        ],
        "notes": [
          "These are recommended component categories and setup goals, not a restriction on personal builds.",
          "Confirm the exact attachment name and compatibility in BRM5 before treating a suggestion as a specific in-game part."
        ]
      },
      {
        "name": "02 / LOW PROFILE",
        "image": "M1911.png",
        "description": "Suggested direction: minimal additions and a clean sight picture for a secondary weapon.",
        "components": [
          {
            "slot": "Optic",
            "suggestion": "Keep the sight setup simple and uncluttered",
            "required": false
          },
          {
            "slot": "Magazine",
            "suggestion": "Standard-capacity magazine",
            "required": true
          },
          {
            "slot": "Muzzle",
            "suggestion": "Leave stock, or choose a compatible muzzle attachment",
            "required": false
          }
        ],
        "notes": [
          "These are recommended component categories and setup goals, not a restriction on personal builds.",
          "Confirm the exact attachment name and compatibility in BRM5 before treating a suggestion as a specific in-game part."
        ]
      }
    ],
    "forces": [
      "SAS",
      "SEAL",
      "160th SOAR"
    ]
  },
  {
    "id": "ISOC-ARM-021",
    "name": "Glock 19",
    "type": "Sidearm",
    "image": "data:image/svg+xml;charset=UTF-8,%3Csvg%20xmlns%3D%22http%3A//www.w3.org/2000/svg%22%20width%3D%22960%22%20height%3D%22540%22%20viewBox%3D%220%200%20960%20540%22%3E%3Crect%20width%3D%22960%22%20height%3D%22540%22%20fill%3D%22%230b0b0b%22/%3E%3Cpath%20d%3D%22M80%2080H880M80%20460H880%22%20stroke%3D%22%23333%22%20stroke-width%3D%222%22/%3E%3Ctext%20x%3D%2280%22%20y%3D%22230%22%20fill%3D%22%23777%22%20font-family%3D%22monospace%22%20font-size%3D%2222%22%20letter-spacing%3D%225%22%3EISOC%20//%20ARMOURY%3C/text%3E%3Ctext%20x%3D%2280%22%20y%3D%22290%22%20fill%3D%22%23ddd%22%20font-family%3D%22Arial%2Csans-serif%22%20font-size%3D%2234%22%3EGlock%2019%3C/text%3E%3Ctext%20x%3D%2280%22%20y%3D%22345%22%20fill%3D%22%23666%22%20font-family%3D%22monospace%22%20font-size%3D%2216%22%20letter-spacing%3D%223%22%3EIMAGE%20PENDING%3C/text%3E%3C/svg%3E",
    "description": "A sidearm option listed for the SAS element and available to 160th SOAR pilots.",
    "roles": [
      "Rifleman",
      "Team Leader",
      "Squad Leader",
      "Marksman",
      "Sniper"
    ],
    "forces": [
      "SAS",
      "160th SOAR"
    ],
    "situations": [
      "Backup weapon",
      "Emergency transition"
    ],
    "info": {
      "designation": "IN-GAME LISTING",
      "systemType": "SECONDARY",
      "status": "PROPOSED"
    },
    "configs": [
      {
        "name": "01 / RECOMMENDED BUILD",
        "image": "data:image/svg+xml;charset=UTF-8,%3Csvg%20xmlns%3D%22http%3A//www.w3.org/2000/svg%22%20width%3D%22960%22%20height%3D%22540%22%20viewBox%3D%220%200%20960%20540%22%3E%3Crect%20width%3D%22960%22%20height%3D%22540%22%20fill%3D%22%230b0b0b%22/%3E%3Cpath%20d%3D%22M80%2080H880M80%20460H880%22%20stroke%3D%22%23333%22%20stroke-width%3D%222%22/%3E%3Ctext%20x%3D%2280%22%20y%3D%22230%22%20fill%3D%22%23777%22%20font-family%3D%22monospace%22%20font-size%3D%2222%22%20letter-spacing%3D%225%22%3EISOC%20//%20ARMOURY%3C/text%3E%3Ctext%20x%3D%2280%22%20y%3D%22290%22%20fill%3D%22%23ddd%22%20font-family%3D%22Arial%2Csans-serif%22%20font-size%3D%2234%22%3EGlock%2019%3C/text%3E%3Ctext%20x%3D%2280%22%20y%3D%22345%22%20fill%3D%22%23666%22%20font-family%3D%22monospace%22%20font-size%3D%2216%22%20letter-spacing%3D%223%22%3EIMAGE%20PENDING%3C/text%3E%3C/svg%3E",
        "description": "Build recommendation to be completed for the in-game catalogue.",
        "components": [],
        "notes": [
          "This entry is part of the proposed weapon register. Add verified BRM5-compatible components when the build is finalized."
        ]
      },
      {
        "name": "02 / ALTERNATIVE BUILD",
        "image": "data:image/svg+xml;charset=UTF-8,%3Csvg%20xmlns%3D%22http%3A//www.w3.org/2000/svg%22%20width%3D%22960%22%20height%3D%22540%22%20viewBox%3D%220%200%20960%20540%22%3E%3Crect%20width%3D%22960%22%20height%3D%22540%22%20fill%3D%22%230b0b0b%22/%3E%3Cpath%20d%3D%22M80%2080H880M80%20460H880%22%20stroke%3D%22%23333%22%20stroke-width%3D%222%22/%3E%3Ctext%20x%3D%2280%22%20y%3D%22230%22%20fill%3D%22%23777%22%20font-family%3D%22monospace%22%20font-size%3D%2222%22%20letter-spacing%3D%225%22%3EISOC%20//%20ARMOURY%3C/text%3E%3Ctext%20x%3D%2280%22%20y%3D%22290%22%20fill%3D%22%23ddd%22%20font-family%3D%22Arial%2Csans-serif%22%20font-size%3D%2234%22%3EGlock%2019%3C/text%3E%3Ctext%20x%3D%2280%22%20y%3D%22345%22%20fill%3D%22%23666%22%20font-family%3D%22monospace%22%20font-size%3D%2216%22%20letter-spacing%3D%223%22%3EIMAGE%20PENDING%3C/text%3E%3C/svg%3E",
        "description": "Alternative build recommendation to be completed for the in-game catalogue.",
        "components": [],
        "notes": [
          "This entry is part of the proposed weapon register. Add verified BRM5-compatible components when the build is finalized."
        ]
      }
    ]
  },
  {
    "id": "ISOC-ARM-022",
    "name": "SIG Sauer P226",
    "type": "Sidearm",
    "image": "data:image/svg+xml;charset=UTF-8,%3Csvg%20xmlns%3D%22http%3A//www.w3.org/2000/svg%22%20width%3D%22960%22%20height%3D%22540%22%20viewBox%3D%220%200%20960%20540%22%3E%3Crect%20width%3D%22960%22%20height%3D%22540%22%20fill%3D%22%230b0b0b%22/%3E%3Cpath%20d%3D%22M80%2080H880M80%20460H880%22%20stroke%3D%22%23333%22%20stroke-width%3D%222%22/%3E%3Ctext%20x%3D%2280%22%20y%3D%22230%22%20fill%3D%22%23777%22%20font-family%3D%22monospace%22%20font-size%3D%2222%22%20letter-spacing%3D%225%22%3EISOC%20//%20ARMOURY%3C/text%3E%3Ctext%20x%3D%2280%22%20y%3D%22290%22%20fill%3D%22%23ddd%22%20font-family%3D%22Arial%2Csans-serif%22%20font-size%3D%2234%22%3ESIG%20Sauer%20P226%3C/text%3E%3Ctext%20x%3D%2280%22%20y%3D%22345%22%20fill%3D%22%23666%22%20font-family%3D%22monospace%22%20font-size%3D%2216%22%20letter-spacing%3D%223%22%3EIMAGE%20PENDING%3C/text%3E%3C/svg%3E",
    "description": "A sidearm option listed for the SEAL element and available to 160th SOAR pilots.",
    "roles": [
      "Rifleman",
      "Team Leader",
      "Squad Leader",
      "Marksman",
      "Sniper"
    ],
    "forces": [
      "SEAL",
      "160th SOAR"
    ],
    "situations": [
      "Backup weapon",
      "Emergency transition"
    ],
    "info": {
      "designation": "IN-GAME LISTING",
      "systemType": "SECONDARY",
      "status": "PROPOSED"
    },
    "configs": [
      {
        "name": "01 / RECOMMENDED BUILD",
        "image": "data:image/svg+xml;charset=UTF-8,%3Csvg%20xmlns%3D%22http%3A//www.w3.org/2000/svg%22%20width%3D%22960%22%20height%3D%22540%22%20viewBox%3D%220%200%20960%20540%22%3E%3Crect%20width%3D%22960%22%20height%3D%22540%22%20fill%3D%22%230b0b0b%22/%3E%3Cpath%20d%3D%22M80%2080H880M80%20460H880%22%20stroke%3D%22%23333%22%20stroke-width%3D%222%22/%3E%3Ctext%20x%3D%2280%22%20y%3D%22230%22%20fill%3D%22%23777%22%20font-family%3D%22monospace%22%20font-size%3D%2222%22%20letter-spacing%3D%225%22%3EISOC%20//%20ARMOURY%3C/text%3E%3Ctext%20x%3D%2280%22%20y%3D%22290%22%20fill%3D%22%23ddd%22%20font-family%3D%22Arial%2Csans-serif%22%20font-size%3D%2234%22%3ESIG%20Sauer%20P226%3C/text%3E%3Ctext%20x%3D%2280%22%20y%3D%22345%22%20fill%3D%22%23666%22%20font-family%3D%22monospace%22%20font-size%3D%2216%22%20letter-spacing%3D%223%22%3EIMAGE%20PENDING%3C/text%3E%3C/svg%3E",
        "description": "Build recommendation to be completed for the in-game catalogue.",
        "components": [],
        "notes": [
          "This entry is part of the proposed weapon register. Add verified BRM5-compatible components when the build is finalized."
        ]
      },
      {
        "name": "02 / ALTERNATIVE BUILD",
        "image": "data:image/svg+xml;charset=UTF-8,%3Csvg%20xmlns%3D%22http%3A//www.w3.org/2000/svg%22%20width%3D%22960%22%20height%3D%22540%22%20viewBox%3D%220%200%20960%20540%22%3E%3Crect%20width%3D%22960%22%20height%3D%22540%22%20fill%3D%22%230b0b0b%22/%3E%3Cpath%20d%3D%22M80%2080H880M80%20460H880%22%20stroke%3D%22%23333%22%20stroke-width%3D%222%22/%3E%3Ctext%20x%3D%2280%22%20y%3D%22230%22%20fill%3D%22%23777%22%20font-family%3D%22monospace%22%20font-size%3D%2222%22%20letter-spacing%3D%225%22%3EISOC%20//%20ARMOURY%3C/text%3E%3Ctext%20x%3D%2280%22%20y%3D%22290%22%20fill%3D%22%23ddd%22%20font-family%3D%22Arial%2Csans-serif%22%20font-size%3D%2234%22%3ESIG%20Sauer%20P226%3C/text%3E%3Ctext%20x%3D%2280%22%20y%3D%22345%22%20fill%3D%22%23666%22%20font-family%3D%22monospace%22%20font-size%3D%2216%22%20letter-spacing%3D%223%22%3EIMAGE%20PENDING%3C/text%3E%3C/svg%3E",
        "description": "Alternative build recommendation to be completed for the in-game catalogue.",
        "components": [],
        "notes": [
          "This entry is part of the proposed weapon register. Add verified BRM5-compatible components when the build is finalized."
        ]
      }
    ]
  },
  {
    "id": "ISOC-ARM-023",
    "name": "SIG Sauer P320",
    "type": "Sidearm",
    "image": "P320.png",
    "description": "A sidearm option listed for SAS and SEAL personnel. Also available to 160th SOAR pilots.",
    "roles": [
      "Rifleman",
      "Team Leader",
      "Squad Leader"
    ],
    "situations": [
      "Backup weapon",
      "Emergency transition"
    ],
    "info": {
      "designation": "KSOL-SOF-005",
      "caliber": "9 × 19 Parabellum",
      "effectiveRange": "244.92m",
      "muzzleVelocity": "364.59m/s",
      "weight": "1.4kg",
      "length": "TBD",
      "fireMode": "SEMI",
      "magazine": "21-ROUND",
      "systemType": "SPECIAL OPERATIONS",
      "status": "PROPOSED"
    },
    "configs": [
      {
        "name": "01 / DUTY",
        "image": "P320.png",
        "description": "Suggested direction: simple, unobtrusive setup. Use only compatible BRM5 attachments.",
        "components": [
          {
            "slot": "Optic",
            "suggestion": "Clear, familiar sight picture; optic only if supported",
            "required": false
          },
          {
            "slot": "Magazine",
            "suggestion": "Standard-capacity magazine",
            "required": true
          },
          {
            "slot": "Muzzle",
            "suggestion": "Leave stock, or choose a compatible muzzle attachment",
            "required": false
          }
        ],
        "notes": [
          "These are recommended component categories and setup goals, not a restriction on personal builds.",
          "Confirm the exact attachment name and compatibility in BRM5 before treating a suggestion as a specific in-game part."
        ]
      },
      {
        "name": "02 / LOW PROFILE",
        "image": "P320.png",
        "description": "Suggested direction: minimal additions and a clean sight picture for a secondary weapon.",
        "components": [
          {
            "slot": "Optic",
            "suggestion": "Keep the sight setup simple and uncluttered",
            "required": false
          },
          {
            "slot": "Magazine",
            "suggestion": "Standard-capacity magazine",
            "required": true
          },
          {
            "slot": "Muzzle",
            "suggestion": "Leave stock, or choose a compatible muzzle attachment",
            "required": false
          }
        ],
        "notes": [
          "These are recommended component categories and setup goals, not a restriction on personal builds.",
          "Confirm the exact attachment name and compatibility in BRM5 before treating a suggestion as a specific in-game part."
        ]
      }
    ],
    "forces": [
      "SAS",
      "SEAL",
      "160th SOAR"
    ]
  }
];


const $ = (selector, root=document) => root.querySelector(selector);
const $$ = (selector, root=document) => [...root.querySelectorAll(selector)];
const grid = $('#equipmentGrid');
const search = $('#armourySearch');
const count = $('#itemCount');
const categoryLabel = $('#catalogueCategory');
const title = $('#catalogueTitle');
const typeFilters = $('#weaponTypeFilters');
const roleFilter = $('#roleFilter');
const situationFilter = $('#situationFilter');
const modal = $('#equipmentModal');
const modalClose = $('#modalClose');
const modalId = $('#modalId');
const modalImage = $('#modalImage');
const modal360Viewer = $('#modal360Viewer');
const viewerPrev = $('#viewerPrev');
const viewerNext = $('#viewerNext');
const viewerFrameCount = $('#viewerFrameCount');
const viewerFrameStatus = $('#viewerFrameStatus');
const viewerDragHint = $('#viewerDragHint');
let activeViewerFrames = [];
let activeViewerIndex = 0;
let viewerPointerStart = null;
let viewerLastX = null;
let viewerDragDistance = 0;
let viewerItemImage = '';
const modalCategory = $('#modalCategory');
const modalTitle = $('#modalTitle');
const modalDescription = $('#modalDescription');
const modalStatus = $('#modalStatus');
const modalInfo = $('#modalInfo');
const modalConfigs = $('#modalConfigs');
// Put the two recommended builds immediately after the weapon intro, where they are easy to discover.
const configSection = modalConfigs?.closest('.product-configurations');
const introSection = modalConfigs?.closest('.product-modal')?.querySelector('.product-intro');
if (configSection && introSection) introSection.insertAdjacentElement('afterend', configSection);
let activeType = 'ALL';

const escapeHTML = value => String(value ?? '').replace(/[&<>"']/g, ch => ({'&':'&amp;','<':'&lt;','>':'&gt;','"':'&quot;',"'":'&#39;'}[ch]));
const unique = values => [...new Set(values)].sort((a,b)=>a.localeCompare(b));
const allRoles = unique(ARMOURY_DATA.flatMap(item=>item.roles));
const allSituations = unique(ARMOURY_DATA.flatMap(item=>item.situations));

function populateSelect(select, values, firstLabel) {
  if (!select) return;
  select.innerHTML = `<option value="">${escapeHTML(firstLabel)}</option>` + values.map(v=>`<option value="${escapeHTML(v)}">${escapeHTML(v)}</option>`).join('');
}
populateSelect(roleFilter, allRoles, 'ALL ROLES');
populateSelect(situationFilter, allSituations, 'ALL SITUATIONS');

function renderTypeFilters(){
  if(!typeFilters) return;
  const types=['ALL',...unique(ARMOURY_DATA.map(item=>item.type))];
  typeFilters.innerHTML=types.map(type=>`<button type="button" class="role-tab ${type===activeType?'active':''}" data-type="${escapeHTML(type)}">${escapeHTML(type==='ALL'?'ALL WEAPONS':type.toUpperCase())}</button>`).join('');
  $$('button',typeFilters).forEach(button=>button.addEventListener('click',()=>{activeType=button.dataset.type;renderTypeFilters();renderEquipment();}));
}
function searchableText(item){return [item.id,item.name,item.type,item.description,...item.roles,...(item.forces||[]),...item.situations,...Object.values(item.info||{}),...(item.configs||[]).flatMap(c=>[c.name,c.description,...(c.components||[]).flatMap(part=>[part.slot,part.suggestion]),...(c.notes||[])])].join(' ').toLowerCase();}
function renderEquipment(){
  if(!grid) return;
  const query=(search?.value||'').trim().toLowerCase();
  const role=roleFilter?.value||'';
  const situation=situationFilter?.value||'';
  const results=ARMOURY_DATA.filter(item=>(activeType==='ALL'||item.type===activeType)&&(!role||item.roles.includes(role))&&(!situation||item.situations.includes(situation))&&(!query||searchableText(item).includes(query)));
  if(count) count.textContent=String(results.length).padStart(2,'0');
  if(categoryLabel) categoryLabel.textContent='KSOL / AUTHORIZED WEAPON REGISTER';
  if(title) title.textContent=activeType==='ALL'?'ALL AUTHORIZED WEAPONS':activeType.toUpperCase();
  grid.innerHTML='';
  if(!results.length){grid.innerHTML='<div class="armoury-empty">NO WEAPONS MATCH THE CURRENT FILTERS.</div>';return;}
  results.forEach(item=>{
    const card=document.createElement('article'); card.className='equipment-card'; card.tabIndex=0; card.setAttribute('role','button'); card.setAttribute('aria-label',`View ${item.name}`);
    card.innerHTML=`<div class="equipment-image-wrap"><img src="${escapeHTML(item.image)}" alt="${escapeHTML(item.name)}" class="equipment-image" loading="lazy"></div><div class="equipment-card-content"><div class="equipment-card-id">${escapeHTML(item.id)} · PROPOSED</div><h3>${escapeHTML(item.name)}</h3><p class="equipment-card-description">${escapeHTML(item.description)}</p><div class="weapon-tags">${item.roles.slice(0,3).map(role=>`<span>${escapeHTML(role)}</span>`).join('')}${item.roles.length>3?`<span>+${item.roles.length-3}</span>`:''}</div><div class="force-tags" aria-label="Authorized elements">${(item.forces||[]).map(force=>`<span>${escapeHTML(force)}</span>`).join('')}</div><div class="card-config-callout"><strong>2 RECOMMENDED BUILDS</strong><span>Fully customizable · any compatible mods</span></div></div><div class="equipment-card-footer"><span class="equipment-card-type">${escapeHTML(item.type)}</span><span class="equipment-card-arrow">↗</span></div>`;
    card.querySelector('img').addEventListener('error',e=>{e.currentTarget.style.opacity='.08';});
    card.addEventListener('click',()=>openModal(item)); card.addEventListener('keydown',e=>{if(e.key==='Enter'||e.key===' '){e.preventDefault();openModal(item);}}); grid.appendChild(card);
  });
}
function formatFieldName(field){return field.replace(/([A-Z])/g,' $1').replace(/^./,c=>c.toUpperCase()).trim();}

function renderViewerFrame(){
  if(!modalImage) return;
  if(activeViewerFrames.length){
    modalImage.src = activeViewerFrames[activeViewerIndex];
    viewerFrameCount.textContent = `${String(activeViewerIndex + 1).padStart(2,'0')} / ${String(activeViewerFrames.length).padStart(2,'0')}`;
    viewerFrameStatus.textContent = '360° VIEWER ACTIVE';
    viewerFrameStatus.classList.add('is-active');
    viewerDragHint.textContent = 'DRAG OR USE ARROWS TO ROTATE';
    viewerPrev.disabled = viewerNext.disabled = false;
  } else {
    modalImage.src = viewerItemImage;
    viewerFrameCount.textContent = 'STATIC IMAGE';
    viewerFrameStatus.textContent = '360° FRAME SET NOT ADDED';
    viewerFrameStatus.classList.remove('is-active');
    viewerDragHint.textContent = 'ADD IMAGE FRAMES TO ENABLE ROTATION';
    viewerPrev.disabled = viewerNext.disabled = true;
  }
}
function setViewerFrame(index){
  if(!activeViewerFrames.length) return;
  activeViewerIndex = (index + activeViewerFrames.length) % activeViewerFrames.length;
  renderViewerFrame();
}
function configure360Viewer(item){
  viewerItemImage = item.image || '';
  activeViewerFrames = Array.isArray(item.frames) ? item.frames.filter(Boolean) : [];
  activeViewerIndex = 0;
  // Preload the sequence so rotation remains responsive after the first frame.
  activeViewerFrames.forEach(src => { const preload = new Image(); preload.src = src; });
  renderViewerFrame();
}
viewerPrev?.addEventListener('click',()=>setViewerFrame(activeViewerIndex - 1));
viewerNext?.addEventListener('click',()=>setViewerFrame(activeViewerIndex + 1));
modal360Viewer?.addEventListener('keydown',event=>{
  if(event.key==='ArrowLeft'){event.preventDefault();setViewerFrame(activeViewerIndex - 1);}
  if(event.key==='ArrowRight'){event.preventDefault();setViewerFrame(activeViewerIndex + 1);}
});
modal360Viewer?.addEventListener('pointerdown',event=>{
  if(!activeViewerFrames.length || event.target.closest('.viewer-controls')) return;
  viewerPointerStart = event.clientX;
  viewerLastX = event.clientX;
  viewerDragDistance = 0;
  modal360Viewer.setPointerCapture?.(event.pointerId);
  modal360Viewer.classList.add('is-dragging');
});
modal360Viewer?.addEventListener('pointermove',event=>{
  if(viewerPointerStart===null || !activeViewerFrames.length) return;
  const delta = event.clientX - viewerLastX;
  viewerDragDistance += delta;
  viewerLastX = event.clientX;
  const frameStep = 9;
  while(Math.abs(viewerDragDistance) >= frameStep){
    const direction = viewerDragDistance < 0 ? 1 : -1;
    setViewerFrame(activeViewerIndex + direction);
    viewerDragDistance += viewerDragDistance < 0 ? frameStep : -frameStep;
  }
});
function endViewerDrag(){
  viewerPointerStart = null;
  viewerLastX = null;
  viewerDragDistance = 0;
  modal360Viewer?.classList.remove('is-dragging');
}
modal360Viewer?.addEventListener('pointerup',endViewerDrag);
modal360Viewer?.addEventListener('pointercancel',endViewerDrag);
modal360Viewer?.addEventListener('lostpointercapture',endViewerDrag);

function openModal(item){
  if(!modal) return;
  modalId.textContent=item.id; modalImage.alt=item.name; configure360Viewer(item); modalTitle.textContent=item.name; modalCategory.textContent=item.type.toUpperCase(); modalDescription.textContent=item.description; modalStatus.textContent='';
  const info={...item.info,'Weapon type':item.type,'Compatible roles':item.roles.join(', '),'Authorized elements':(item.forces||[]).join(', '),'Suitable situations':item.situations.join(', '),'Modification policy':'Any compatible in-game modification'};
  modalInfo.innerHTML=Object.entries(info).filter(([,value])=>value!==null&&value!==undefined&&String(value).trim()!=='').map(([key,value])=>`<div class="specification-cell"><span>${escapeHTML(formatFieldName(key))}</span><strong>${escapeHTML(value)}</strong></div>`).join('');
  modalConfigs.innerHTML='';
  item.configs.slice(0,2).forEach((config,index)=>{
    const card=document.createElement('article'); card.className='configuration-card';
    const parts=(config.components||[]).map(part=>`<div class="component-row"><span class="component-slot">${escapeHTML(part.slot)}</span><div class="component-detail"><strong>${escapeHTML(part.suggestion)}</strong><small>${part.required?'CORE COMPONENT':'OPTIONAL / IF AVAILABLE'}</small></div></div>`).join('');
    const notes=(config.notes||[]).map(note=>`<li>${escapeHTML(note)}</li>`).join('');
    const purpose=config.purpose||config.rolePurpose||config.name;
    const detailsId=`config-details-${item.id.replace(/[^a-zA-Z0-9_-]/g,'-')}-${index}`;
    card.innerHTML=`
      <button type="button" class="configuration-preview" aria-expanded="false" aria-controls="${detailsId}">
        <span class="configuration-image-wrap"><img src="${escapeHTML(config.image||item.image)}" alt="${escapeHTML(item.name)} — ${escapeHTML(config.name)} recommended configuration" class="configuration-image" loading="lazy"></span>
        <span class="configuration-preview-copy">
          <span class="config-label-row"><small>RECOMMENDED CONFIGURATION ${String(index+1).padStart(2,'0')}</small><span>OPTIONAL TEMPLATE</span></span>
          <strong class="configuration-preview-title">${escapeHTML(purpose)}</strong>
          <span class="configuration-preview-description">${escapeHTML(config.description)}</span>
          <span class="configuration-open-hint">VIEW COMPONENTS & NOTES <span class="configuration-open-arrow" aria-hidden="true">↓</span></span>
        </span>
      </button>
      <div class="configuration-details" id="${detailsId}" hidden>
        <div class="configuration-detail-heading"><span>BUILD DETAILS</span><small>RECOMMENDATION ONLY · CUSTOMIZE FREELY</small></div>
        <div class="component-list-heading">COMPONENT GUIDE</div>
        <div class="component-list">${parts||'<p>No components listed yet. Add them to this config in ARMOURY_DATA.</p>'}</div>
        ${notes?`<div class="configuration-note"><strong>NOTES</strong><ul>${notes}</ul></div>`:''}
      </div>`;
    const image=card.querySelector('img');
    image.addEventListener('error',e=>{e.currentTarget.src=item.image;});
    const preview=card.querySelector('.configuration-preview');
    const details=card.querySelector('.configuration-details');
    preview.addEventListener('click',()=>{
      const expanded=preview.getAttribute('aria-expanded')==='true';
      preview.setAttribute('aria-expanded',String(!expanded));
      details.hidden=expanded;
      card.classList.toggle('is-expanded',!expanded);
      const hint=preview.querySelector('.configuration-open-hint');
      hint.innerHTML=`${expanded?'VIEW COMPONENTS & NOTES':'HIDE COMPONENTS & NOTES'} <span class="configuration-open-arrow" aria-hidden="true">${expanded?'↓':'↑'}</span>`;
    });
    modalConfigs.appendChild(card);
  });
  modal.classList.add('open');modal.setAttribute('aria-hidden','false');document.body.style.overflow='hidden';modalClose?.focus();
}
function closeModal(){modal?.classList.remove('open');modal?.setAttribute('aria-hidden','true');document.body.style.overflow='';}
modalClose?.addEventListener('click',closeModal);
modal?.addEventListener('click',e=>{if(e.target===modal)closeModal();});
document.addEventListener('keydown',e=>{if(e.key==='Escape')closeModal();if((e.ctrlKey||e.metaKey)&&e.key.toLowerCase()==='k'){e.preventDefault();search?.focus();}});
search?.addEventListener('input',renderEquipment);roleFilter?.addEventListener('change',renderEquipment);situationFilter?.addEventListener('change',renderEquipment);
renderTypeFilters();renderEquipment();
