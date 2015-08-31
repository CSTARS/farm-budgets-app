(function(f){if(typeof exports==="object"&&typeof module!=="undefined"){module.exports=f()}else if(typeof define==="function"&&define.amd){define([],f)}else{var g;if(typeof window!=="undefined"){g=window}else if(typeof global!=="undefined"){g=global}else if(typeof self!=="undefined"){g=self}else{g=this}g.FB = f()}})(function(){var define,module,exports;return (function e(t,n,r){function s(o,u){if(!n[o]){if(!t[o]){var a=typeof require=="function"&&require;if(!u&&a)return a(o,!0);if(i)return i(o,!0);var f=new Error("Cannot find module '"+o+"'");throw f.code="MODULE_NOT_FOUND",f}var l=n[o]={exports:{}};t[o][0].call(l.exports,function(e){var n=t[o][1][e];return s(n?n:e)},l,l.exports,e,t,n,r)}return n[o].exports}var i=typeof require=="function"&&require;for(var o=0;o<r.length;o++)s(r[o]);return s})({"/Users/jrmerz/dev/cstars/AHB/farm-budgets-app/lib/shared/config/app/alfalfa.json":[function(require,module,exports){
module.exports={
  "classes": {
    "fertilizer": [
      "2,4-D"
    ],
    "equipment": [
      "Challenger Tractor",
      "Cooler/van",
      "FR 6080 FH",
      "Large Tractor",
      "Mid-size Tractor",
      "Semi-Tractor trailer",
      "Small Tractor",
      "Support Truck",
      "Tandem Axle Truck",
      "Tractor and sprayer"
    ],
    "pesticide": [
      "Glyphosate",
      "Goal 2XL",
      "Trifluralin"
    ],
    "herbicide": [
      "herbicide - manual"
    ],
    "labor": [
      "hoeing",
      "Laborer"
    ],
    "seed": [
      "Poplar Cutting"
    ]
  },
  "materials": [
    {
      "name": "Estimate",
      "price": 1,
      "units": "us$",
      "fixed": true,
      "description": "Provide fixed cost for complex material",
      "type": "simple"
    },
    {
      "name": "Taxes",
      "price": 1,
      "units": "us$",
      "fixed": true,
      "description": "Provide fixed cost for complex material",
      "type": "simple"
    },
    {
      "name": "Insurance",
      "price": 1,
      "units": "us$",
      "fixed": true,
      "description": "Provide fixed cost for complex material",
      "type": "simple"
    },
    {
      "name": "Capitol Cost Recover",
      "price": 1,
      "units": "us$",
      "fixed": true,
      "description": "Provide fixed cost for complex material",
      "type": "simple"
    },
    {
      "class": "fertilizer",
      "name": "2,4-D",
      "units": "us$/[qt_us]",
      "price": 5,
      "type": "simple"
    },
    {
      "class": "pesticide",
      "name": "Glyphosate",
      "units": "us$/[qt_us]",
      "price": 4,
      "type": "simple",
      "description": "foo"
    },
    {
      "class": "pesticide",
      "name": "Goal 2XL",
      "units": "us$/[qt_us]",
      "price": 30,
      "type": "simple"
    },
    {
      "class": "labor",
      "name": "Laborer",
      "units": "us$/h",
      "price": 17,
      "type": "simple"
    },
    {
      "description": "Poplar cutting for planting",
      "class": "seed",
      "name": "Poplar Cutting",
      "units": "us$/1",
      "price": 0.08,
      "type": "simple"
    },
    {
      "class": "pesticide",
      "name": "Trifluralin",
      "units": "us$/[qt_us]",
      "price": 7.5,
      "type": "simple"
    },
    {
      "name": "Challenger Tractor--Capitol Cost",
      "price": 90,
      "units": "us$/h",
      "type": "simple"
    },
    {
      "name": "Semi-Tractor trailer--Capitol Cost",
      "price": 90,
      "units": "us$/h",
      "type": "simple"
    },
    {
      "name": "FR 6080 FH--Capitol Cost",
      "price": 90,
      "units": "us$/h",
      "type": "simple"
    },
    {
      "name": "Tandem Axle Truck--Capitol Cost",
      "price": 90,
      "units": "us$/h",
      "type": "simple"
    },
    {
      "name": "Cooler/van--Capitol Cost",
      "price": 15,
      "units": "us$/h",
      "type": "simple"
    },
    {
      "name": "Challenger Tractor--Labor",
      "price": 35,
      "units": "us$/h",
      "type": "simple"
    },
    {
      "name": "FR 6080 FH--Labor",
      "price": 35,
      "units": "us$/h",
      "type": "simple"
    },
    {
      "name": "Tandem Axle Truck--Labor",
      "price": 35,
      "units": "us$/h",
      "type": "simple"
    },
    {
      "name": "Semi-Tractor trailer--Labor",
      "price": 35,
      "units": "us$/h",
      "type": "simple"
    },
    {
      "name": "Cooler/van--Labor",
      "price": 10,
      "units": "us$/h",
      "type": "simple"
    },
    {
      "name": "Equipment Fuel",
      "price": 2.81,
      "units": "us$/[gal_us]",
      "type": "simple"
    },
    {
      "name": "Support Truck--Capitol Cost",
      "price": 25,
      "units": "us$/h",
      "type": "simple"
    },
    {
      "name": "Support Truck--Labor",
      "price": 30,
      "units": "us$/h",
      "type": "simple"
    },
    {
      "type": "simple",
      "name": "11-52-0",
      "units": "us$/[lb_av]",
      "description": "",
      "price": 0.37,
      "class": "fertilizer"
    },
    {
      "type": "simple",
      "name": "Ground Application",
      "units": "us$/[acr_us]",
      "description": "",
      "price": 10.5,
      "class": "other"
    },
    {
      "type": "simple",
      "name": "Roundup PowerMax",
      "units": "us$/[pt_us]",
      "description": "",
      "price": 2.75,
      "class": "herbicide"
    },
    {
      "type": "simple",
      "name": "Velpar L",
      "units": "us$/[pt_us]",
      "description": "",
      "price": 14.41,
      "class": "herbicide"
    },
    {
      "type": "simple",
      "name": "Warrior II",
      "units": "us$/[foz_us]",
      "description": "",
      "price": 5.25,
      "class": "pesticide"
    },
    {
      "type": "simple",
      "name": "Coragen",
      "units": "us$/[foz_us]",
      "description": "",
      "price": 10.25,
      "class": "pesticide"
    },
    {
      "type": "simple",
      "name": "Belt SC",
      "units": "us$/[foz_us]",
      "description": "",
      "price": 9.4,
      "class": "pesticide"
    },
    {
      "type": "simple",
      "name": "Water-Alfalfa-Pumped",
      "units": "us$/[acr_us].[in_us]",
      "description": "",
      "price": 7.5,
      "class": "water"
    },
    {
      "type": "simple",
      "name": "Gas",
      "units": "us$/[gal_us]",
      "description": "",
      "price": 3.79,
      "class": "equipment"
    },
    {
      "class": "other",
      "name": "ATV--Capital Recovery",
      "units": "us$/h",
      "price": 1.89,
      "type": "simple"
    },
    {
      "class": "insurance",
      "name": "ATV--insurance",
      "units": "us$/h",
      "price": 0.01,
      "type": "simple"
    },
    {
      "class": "other",
      "name": "ATV--Taxes",
      "units": "us$/h",
      "price": 0.09,
      "type": "simple"
    },
    {
      "class": "other",
      "name": "ATV--Lube & Repairs",
      "units": "us$/h",
      "price": 1.2,
      "type": "simple"
    },
    {
      "class": "equipment",
      "name": "Challenger Tractor",
      "units": "h",
      "type": "complex",
      "materials": {
        "Equipment Fuel": {
          "amount": 19.36,
          "originalAmount": 19.36,
          "units": "[gal_us]",
          "error": null,
          "price": 54.4016
        },
        "Challenger Tractor--Capitol Cost": {
          "amount": 1,
          "originalAmount": 1,
          "units": "h",
          "error": null,
          "price": 90
        },
        "Challenger Tractor--Labor": {
          "amount": 1,
          "originalAmount": 1,
          "units": "h",
          "error": null,
          "price": 35
        }
      },
      "price": 179.4016
    },
    {
      "class": "equipment",
      "name": "Cooler/van",
      "units": "h",
      "type": "complex",
      "materials": {
        "Cooler/van--Labor": {
          "amount": 1,
          "originalAmount": 1,
          "units": "h",
          "error": null,
          "price": 10
        },
        "Cooler/van--Capitol Cost": {
          "amount": 1,
          "originalAmount": 1,
          "units": "h",
          "error": null,
          "price": 15
        },
        "Equipment Fuel": {
          "amount": 0.96,
          "originalAmount": 0.96,
          "units": "[gal_us]",
          "error": null,
          "price": 2.6976
        },
        "Estimate": {
          "units": "us$",
          "amount": 1.2,
          "error": null,
          "price": 1.2
        }
      },
      "price": 28.8976
    },
    {
      "class": "equipment",
      "name": "FR 6080 FH",
      "units": "h",
      "type": "complex",
      "materials": {
        "Equipment Fuel": {
          "amount": 13.2,
          "originalAmount": 13.2,
          "units": "[gal_us]",
          "error": null,
          "price": 37.092
        },
        "FR 6080 FH--Labor": {
          "amount": 1,
          "originalAmount": 1,
          "units": "h",
          "error": null,
          "price": 35
        },
        "FR 6080 FH--Capitol Cost": {
          "amount": 1,
          "originalAmount": 1,
          "units": "h",
          "error": null,
          "price": 90
        },
        "Estimate": {
          "units": "us$",
          "amount": 30,
          "error": null,
          "price": 30
        }
      },
      "price": 192.09199999999998
    },
    {
      "description": "Manual Application of herbicide",
      "class": "herbicide",
      "name": "herbicide - manual",
      "units": "100.[acr_us]",
      "type": "complex",
      "materials": {
        "Glyphosate": {
          "amount": 200,
          "originalAmount": 200,
          "units": "[qt_us]",
          "error": null,
          "price": 800
        },
        "Laborer": {
          "amount": 96,
          "originalAmount": 96,
          "units": "h",
          "error": null,
          "price": 1632
        }
      },
      "price": 2432
    },
    {
      "class": "labor",
      "name": "hoeing",
      "units": "100.[acr_us]",
      "type": "complex",
      "materials": {
        "Laborer": {
          "amount": 192,
          "originalAmount": 192,
          "units": "h",
          "error": null,
          "price": 3264
        }
      },
      "price": 3264
    },
    {
      "class": "equipment",
      "name": "Large Tractor",
      "units": "h",
      "type": "complex",
      "materials": {
        "Equipment Fuel": {
          "amount": 13.2,
          "originalAmount": 13.2,
          "units": "[gal_us]",
          "error": null,
          "price": 37.092
        },
        "Large Tractor--Capitol Cost": {
          "amount": 1,
          "originalAmount": 1,
          "units": "h",
          "error": true
        },
        "Large Tractor--Labor": {
          "amount": 1,
          "originalAmount": 1,
          "units": "h",
          "error": true
        }
      },
      "price": 37.092
    },
    {
      "class": "equipment",
      "name": "Mid-size Tractor",
      "units": "h",
      "type": "complex",
      "materials": {
        "Mid-size Tractor--Capitol Cost": {
          "amount": 1,
          "originalAmount": 1,
          "units": "h",
          "error": true
        },
        "Mid-size Tractor--Labor": {
          "amount": 1,
          "originalAmount": 1,
          "units": "h",
          "error": true
        },
        "Equipment Fuel": {
          "amount": 3.96,
          "originalAmount": 3.96,
          "units": "[gal_us]",
          "error": null,
          "price": 11.1276
        }
      },
      "price": 11.1276
    },
    {
      "class": "equipment",
      "name": "Semi-Tractor trailer",
      "units": "h",
      "type": "complex",
      "materials": {
        "Semi-Tractor trailer--Capitol Cost": {
          "amount": 1,
          "originalAmount": 1,
          "units": "h",
          "error": null,
          "price": 90
        },
        "Equipment Fuel": {
          "amount": 6.5,
          "originalAmount": 6.5,
          "units": "[gal_us]",
          "error": null,
          "price": 18.265
        },
        "Semi-Tractor trailer--Labor": {
          "amount": 1,
          "originalAmount": 1,
          "units": "h",
          "error": null,
          "price": 35
        }
      },
      "price": 143.265
    },
    {
      "class": "equipment",
      "name": "Small Tractor",
      "units": "h",
      "type": "complex",
      "materials": {
        "Equipment Fuel": {
          "amount": 1.98,
          "originalAmount": 1.98,
          "units": "[gal_us]",
          "error": null,
          "price": 5.5638
        },
        "Small Tractor--Labor": {
          "amount": 1,
          "originalAmount": 1,
          "units": "h",
          "error": true
        },
        "Small Tractor--Capitol Cost": {
          "amount": 1,
          "originalAmount": 1,
          "units": "h",
          "error": true
        }
      },
      "price": 5.5638
    },
    {
      "class": "equipment",
      "name": "Support Truck",
      "units": "h",
      "type": "complex",
      "materials": {
        "Support Truck--Capitol Cost": {
          "amount": 1,
          "originalAmount": 1,
          "units": "h",
          "error": null,
          "price": 25
        },
        "Support Truck--Labor": {
          "amount": 1,
          "originalAmount": 1,
          "units": "h",
          "error": null,
          "price": 30
        },
        "Equipment Fuel": {
          "amount": 1.76,
          "originalAmount": 1.76,
          "units": "[gal_us]",
          "error": null,
          "price": 4.9456
        }
      },
      "price": 59.9456
    },
    {
      "class": "equipment",
      "name": "Tandem Axle Truck",
      "units": "h",
      "type": "complex",
      "materials": {
        "Tandem Axle Truck--Capitol Cost": {
          "amount": 1,
          "originalAmount": 1,
          "units": "h",
          "error": null,
          "price": 90
        },
        "Equipment Fuel": {
          "amount": 13.2,
          "originalAmount": 13.2,
          "units": "[gal_us]",
          "error": null,
          "price": 37.092
        },
        "Tandem Axle Truck--Labor": {
          "amount": 1,
          "originalAmount": 1,
          "units": "h",
          "error": null,
          "price": 35
        }
      },
      "price": 162.09199999999998
    },
    {
      "class": "equipment",
      "name": "Tractor and sprayer",
      "units": "h",
      "type": "complex",
      "materials": {
        "Equipment Fuel": {
          "amount": 3.96,
          "originalAmount": 3.96,
          "units": "[gal_us]",
          "error": null,
          "price": 11.1276
        },
        "Tractor and sprayer--Labor": {
          "amount": 1,
          "originalAmount": 1,
          "units": "h",
          "error": true
        },
        "Estimate": {
          "units": "us$",
          "amount": 50,
          "error": null,
          "price": 50
        }
      },
      "price": 61.1276
    },
    {
      "type": "complex",
      "name": "ATV",
      "units": "us$/h",
      "description": "",
      "price": 6.9799999999999995,
      "materials": {
        "Gas": {
          "name": "Gas",
          "amount": 1,
          "units": "[gal_us]",
          "error": null,
          "price": 3.79
        },
        "ATV--Capital Recovery": {
          "name": "ATV--Capital Recovery",
          "amount": 1,
          "units": "h",
          "error": null,
          "price": 1.89
        },
        "ATV--insurance": {
          "name": "ATV--insurance",
          "amount": 1,
          "units": "h",
          "error": null,
          "price": 0.01
        },
        "ATV--Taxes": {
          "name": "ATV--Taxes",
          "amount": 1,
          "units": "h",
          "error": null,
          "price": 0.09
        },
        "ATV--Lube & Repairs": {
          "name": "ATV--Lube & Repairs",
          "amount": 1,
          "units": "h",
          "error": null,
          "price": 1.2
        }
      }
    }
  ],
  "operations": [
    {
      "name": "Weeds-Roundup PowerMax",
      "materials": [
        {
          "name": "ATV",
          "amount": 0,
          "units": "us$/h",
          "id": "c2b6880a-a297-4cb8-8ab8-8d3223a66d79",
          "error": null,
          "price": 0,
          "originalAmount": 0
        },
        {
          "name": "Roundup PowerMax",
          "amount": 2,
          "units": "[pt_us]",
          "id": "743cbe08-4c69-4cd7-8612-8fb11c1a9ba0",
          "error": null,
          "price": 5.5,
          "originalAmount": 2
        }
      ],
      "schedule": [
        {
          "length": 1,
          "units": "month",
          "date": "2015-12-1"
        }
      ],
      "units": "[acr_us]",
      "subtotal": 5.5,
      "total": 5.5
    }
  ],
  "farm": {
    "unit": "[acr_us]",
    "size": "100",
    "commodity": "POPLAR",
    "location": "06113",
    "farm": "clarksburg"
  }
}

},{}],"/Users/jrmerz/dev/cstars/AHB/farm-budgets-app/lib/shared/config/app/poplar.json":[function(require,module,exports){
module.exports={
  "classes": {
    "fertilizer": [
      "0-0-60",
      "10-34-00",
      "11-52-0",
      "13-0-45",
      "16-16-16",
      "16-20-0-14",
      "18-0-5-4",
      "2,4-D",
      "32-0-0",
      "33-0-0-12",
      "40-0-0-6",
      "46-0-0",
      "80-0-0",
      "80-00-00",
      "Dry Nitrogen",
      "Dry Nitrogen - Preplant",
      "Dry P2O5",
      "Dry Phosphate",
      "Dry Potash",
      "Dry Sulfur",
      "K20",
      "K2O",
      "Liquid Nitrogen",
      "Liquid P2O5",
      "Micronutrients",
      "Mulch",
      "Nitrogen",
      "Nitrogen (dry)",
      "Phosphorous",
      "Phosphorous (dry)",
      "Sulfur",
      "Sulfur (dry)",
      "Sulfuric Acid",
      "Surfactant-Induce",
      "UN32",
      "Zinc",
      "2,4-D"
    ],
    "pesticide": [
      "Achieve SC",
      "Admire",
      "Admire Pro",
      "Air Application",
      "Alcala",
      "Ammonium Sulfate",
      "AMS",
      "Apogee",
      "Assail 70WP",
      "Assesment",
      "Assure II",
      "Axiom LB",
      "Axiom OZ",
      "Bale",
      "Baling",
      "Banvel",
      "Bee Hives",
      "Bravo",
      "Broadcast Fertilizer",
      "Brox M",
      "Carbine 50WG",
      "Clarity",
      "Counter 15G L-N-L",
      "Dacthal",
      "Defol 5",
      "Devrinol 50DF",
      "Dimethoate",
      "Diomethate",
      "Discover",
      "Disyston",
      "Di-Syston",
      "Dithane F45 Rainshield",
      "Diuron",
      "Endura (2x)",
      "Eptam 7EC",
      "Excel 90",
      "Far-GO",
      "Finish 6 Pro",
      "Gen 25WG",
      "Ginstar",
      "Glyphosate GAL1",
      "Goal",
      "Goal Tender",
      "Harmony Extra",
      "Headline",
      "Karmex",
      "Karmex DF",
      "Kerb",
      "Lannate 90 SP",
      "Leverage",
      "Leverage 2.7",
      "LI 700",
      "Lorsban 15G",
      "Lorsban 4E",
      "M90",
      "Malathion",
      "Maverick",
      "MCPA Amine",
      "Mepex Gin Our",
      "Metam Sodium",
      "Micro-Tech",
      "Mustang 1.5 EW",
      "Oberon 25C",
      "Orthene",
      "Osprey",
      "Outlook 6EC",
      "Pristine",
      "Prowl",
      "Prowl 3.3EC",
      "Prowl H20",
      "Puma 1EC",
      "Pursuit",
      "Quadris",
      "Quilt",
      "Rally 40 WSP",
      "Reglone",
      "Ridomil Gold EC",
      "Roundup",
      "Roundup Original Max",
      "Roundup Ultra Max",
      "Select Max",
      "Sencor",
      "Sencor 4L",
      "Sencor 75DF",
      "Sevin XLR Plus",
      "Shark EW",
      "Slug Bait",
      "Sonalan HFP",
      "Spot Spray Roundup",
      "Staple",
      "Starane+Salvo",
      "Starane+Sword",
      "Stratego",
      "Success",
      "Surflan AS",
      "Synapse WG",
      "Telone II",
      "Treflan 4HFP",
      "Treflan FP",
      "Treflan TR 10",
      "Triflurex HFP",
      "Velpar L",
      "Coragen",
      "Dimilin",
      "Fusilade",
      "Glyphosate",
      "Goal 2XL",
      "Imidacloprid5",
      "Oust",
      "Sureguard",
      "Transline",
      "Trifluralin"
    ],
    "seed": [
      "Barley Seed",
      "Canola Seed",
      "Corn Seed",
      "Lentil Seed",
      "Potato Seed",
      "Sorghum Seed",
      "Susan Seed",
      "Wheat Seed",
      "Poplar Cutting"
    ],
    "processing": [
      "Capture",
      "Clean Seed Orchdgr",
      "Commision Assess",
      "Commission Assess",
      "Consultant",
      "Cotton Assesment",
      "Custom Aerial Spray",
      "Custom Air Spray",
      "Custom Air Spray - 5G",
      "Custom Combining",
      "Custom Fertilize",
      "Custom Fumigate - Deep",
      "Custom Sidedress",
      "Cut/Windrow",
      "Fees Assesment",
      "Fumigation",
      "Ground Application",
      "Harvest",
      "Harvest Combine Grain",
      "Harvest for Grain",
      "Harvest: Haul Grain",
      "Haul and Stack",
      "Haul Local",
      "Injection-Sidedress",
      "Injection-Sidedress NH3",
      "Insecticide",
      "Management",
      "Pest Control Consultant",
      "Poncho Beta Seed Treatment",
      "Rental Fertilizer Applicator",
      "Rental Ripper Shooter",
      "Rental Sprayer",
      "Repair",
      "Riper Shooter",
      "Roadside Bales",
      "Roadside Hay",
      "Seed Clean and Bag",
      "Seed Cleand and Bag",
      "Seed Test",
      "Storage Operating Costs",
      "Storage Repairs",
      "Sugarbeet",
      "Swath",
      "Swathing",
      "Tarping",
      "Tissue Analysis",
      "Transport",
      "Transport to PDX",
      "Water Assesment",
      "Wheat Assesment"
    ],
    "labor": [
      "Combine",
      "Combine Wheat",
      "Cool and Pack",
      "Gopher Control",
      "Labor (Irrigation)",
      "Labor (Machine)",
      "Labor (non-machine)",
      "Labor (other)",
      "Maintenance",
      "Maintenance and Repair",
      "oes452091",
      "oes452092",
      "oes533032",
      "Pick Berries",
      "Plant",
      "Planting",
      "Postharvest and packaging",
      "Rodent Control",
      "Sprayer",
      "Stuble Shredder",
      "Swath Rake",
      "Weed Control",
      "Labor--3-Wheel ag sprayer",
      "Labor--Challenger tractor",
      "Labor--Cooler/van",
      "Labor--FR 6080 FH",
      "Laborer",
      "Labor--Large tractor",
      "Labor--Mid-size tractor",
      "Labor--Semi-tractor trailer",
      "Labor--Small tractor",
      "Labor--Supervisor",
      "Labor--Support Truck",
      "Labor--Tandem axle truck",
      "Labor--Tractor and Sprayer",
      "hoeing",
      "herbicide - manual"
    ],
    "insurance": [
      "Crop Insurance"
    ],
    "any": [
      "estimate"
    ],
    "material": [
      "Fuel",
      "Fuel - Diesel",
      "Fuel - Gas",
      "Lime",
      "Lube",
      "Lubricants",
      "Packing",
      "Purity and Germ",
      "Rake",
      "Sawdust",
      "Yukon",
      "Zephyr"
    ],
    "water": [
      "Irrigation",
      "Water",
      "Irrigation"
    ],
    "rent": [
      "land-rent-irrigated",
      "land-rent-nonirrigated",
      "land-rent-pasture"
    ],
    "equipment": [
      "3-Wheel Ag Sprayer",
      "Challenger tractor",
      "Cooler/van",
      "Eliminator",
      "FR 6080 FH",
      "Large tractor",
      "Mid-size tractor",
      "Semi-tractor trailer",
      "Small tractor",
      "Support Truck",
      "Tandem axle truck",
      "Tractor and sprayer"
    ],
    "fuel": [
      "Equipment Fuel"
    ],
    "[qt_us]": [
      "Rozol"
    ]
  },
  "materials": [
    {
      "class": "fertilizer",
      "name": "0-0-60",
      "type": "simple"
    },
    {
      "class": "fertilizer",
      "name": "10-34-00",
      "type": "simple"
    },
    {
      "class": "fertilizer",
      "name": "11-52-0",
      "type": "simple"
    },
    {
      "class": "fertilizer",
      "name": "13-0-45",
      "type": "simple"
    },
    {
      "class": "fertilizer",
      "name": "16-16-16",
      "type": "simple"
    },
    {
      "class": "fertilizer",
      "name": "16-20-0-14",
      "type": "simple"
    },
    {
      "class": "fertilizer",
      "name": "18-0-5-4",
      "type": "simple"
    },
    {
      "class": "fertilizer",
      "name": "2,4-D",
      "units": "us$/[qt_us]",
      "price": 5,
      "type": "simple"
    },
    {
      "class": "fertilizer",
      "name": "32-0-0",
      "type": "simple"
    },
    {
      "class": "fertilizer",
      "name": "33-0-0-12",
      "type": "simple"
    },
    {
      "class": "fertilizer",
      "name": "40-0-0-6",
      "type": "simple"
    },
    {
      "class": "fertilizer",
      "name": "46-0-0",
      "type": "simple"
    },
    {
      "class": "fertilizer",
      "name": "80-0-0",
      "type": "simple"
    },
    {
      "class": "fertilizer",
      "name": "80-00-00",
      "type": "simple"
    },
    {
      "class": "pesticide",
      "name": "Achieve SC",
      "type": "simple"
    },
    {
      "class": "pesticide",
      "name": "Admire",
      "type": "simple"
    },
    {
      "class": "pesticide",
      "name": "Admire Pro",
      "type": "simple"
    },
    {
      "class": "pesticide",
      "name": "Air Application",
      "type": "simple"
    },
    {
      "class": "pesticide",
      "name": "Alcala",
      "type": "simple"
    },
    {
      "class": "pesticide",
      "name": "Ammonium Sulfate",
      "type": "simple"
    },
    {
      "class": "pesticide",
      "name": "AMS",
      "type": "simple"
    },
    {
      "class": "pesticide",
      "name": "Apogee",
      "type": "simple"
    },
    {
      "class": "pesticide",
      "name": "Assail 70WP",
      "type": "simple"
    },
    {
      "class": "pesticide",
      "name": "Assesment",
      "type": "simple"
    },
    {
      "class": "pesticide",
      "name": "Assure II",
      "type": "simple"
    },
    {
      "class": "pesticide",
      "name": "Axiom LB",
      "type": "simple"
    },
    {
      "class": "pesticide",
      "name": "Axiom OZ",
      "type": "simple"
    },
    {
      "class": "pesticide",
      "name": "Bale",
      "type": "simple"
    },
    {
      "class": "pesticide",
      "name": "Baling",
      "type": "simple"
    },
    {
      "class": "pesticide",
      "name": "Banvel",
      "type": "simple"
    },
    {
      "class": "seed",
      "name": "Barley Seed",
      "type": "simple"
    },
    {
      "class": "pesticide",
      "name": "Bee Hives",
      "type": "simple"
    },
    {
      "class": "pesticide",
      "name": "Bravo",
      "type": "simple"
    },
    {
      "class": "pesticide",
      "name": "Broadcast Fertilizer",
      "type": "simple"
    },
    {
      "class": "pesticide",
      "name": "Brox M",
      "type": "simple"
    },
    {
      "class": "seed",
      "name": "Canola Seed",
      "type": "simple"
    },
    {
      "class": "processing",
      "name": "Capture",
      "type": "simple"
    },
    {
      "class": "pesticide",
      "name": "Carbine 50WG",
      "type": "simple"
    },
    {
      "class": "pesticide",
      "name": "Clarity",
      "type": "simple"
    },
    {
      "class": "processing",
      "name": "Clean Seed Orchdgr",
      "type": "simple"
    },
    {
      "class": "labor",
      "name": "Combine",
      "type": "simple"
    },
    {
      "class": "labor",
      "name": "Combine Wheat",
      "type": "simple"
    },
    {
      "class": "processing",
      "name": "Commision Assess",
      "type": "simple"
    },
    {
      "class": "processing",
      "name": "Commission Assess",
      "type": "simple"
    },
    {
      "class": "processing",
      "name": "Consultant",
      "type": "simple"
    },
    {
      "class": "labor",
      "name": "Cool and Pack",
      "type": "simple"
    },
    {
      "class": "seed",
      "name": "Corn Seed",
      "type": "simple"
    },
    {
      "class": "processing",
      "name": "Cotton Assesment",
      "type": "simple"
    },
    {
      "class": "pesticide",
      "name": "Counter 15G L-N-L",
      "type": "simple"
    },
    {
      "class": "insurance",
      "name": "Crop Insurance",
      "type": "simple"
    },
    {
      "class": "processing",
      "name": "Custom Aerial Spray",
      "type": "simple"
    },
    {
      "class": "processing",
      "name": "Custom Air Spray",
      "type": "simple"
    },
    {
      "class": "processing",
      "name": "Custom Air Spray - 5G",
      "type": "simple"
    },
    {
      "class": "processing",
      "name": "Custom Combining",
      "type": "simple"
    },
    {
      "class": "processing",
      "name": "Custom Fertilize",
      "type": "simple"
    },
    {
      "class": "processing",
      "name": "Custom Fumigate - Deep",
      "type": "simple"
    },
    {
      "class": "processing",
      "name": "Custom Sidedress",
      "type": "simple"
    },
    {
      "class": "processing",
      "name": "Cut/Windrow",
      "type": "simple"
    },
    {
      "class": "pesticide",
      "name": "Dacthal",
      "type": "simple"
    },
    {
      "class": "pesticide",
      "name": "Defol 5",
      "type": "simple"
    },
    {
      "class": "pesticide",
      "name": "Devrinol 50DF",
      "type": "simple"
    },
    {
      "class": "pesticide",
      "name": "Dimethoate",
      "type": "simple"
    },
    {
      "class": "pesticide",
      "name": "Diomethate",
      "type": "simple"
    },
    {
      "class": "pesticide",
      "name": "Discover",
      "type": "simple"
    },
    {
      "class": "pesticide",
      "name": "Disyston",
      "type": "simple"
    },
    {
      "class": "pesticide",
      "name": "Di-Syston",
      "type": "simple"
    },
    {
      "class": "pesticide",
      "name": "Dithane F45 Rainshield",
      "type": "simple"
    },
    {
      "class": "pesticide",
      "name": "Diuron",
      "type": "simple"
    },
    {
      "class": "fertilizer",
      "name": "Dry Nitrogen",
      "type": "simple"
    },
    {
      "class": "fertilizer",
      "name": "Dry Nitrogen - Preplant",
      "type": "simple"
    },
    {
      "class": "fertilizer",
      "name": "Dry P2O5",
      "type": "simple"
    },
    {
      "class": "fertilizer",
      "name": "Dry Phosphate",
      "type": "simple"
    },
    {
      "class": "fertilizer",
      "name": "Dry Potash",
      "type": "simple"
    },
    {
      "class": "fertilizer",
      "name": "Dry Sulfur",
      "type": "simple"
    },
    {
      "class": "pesticide",
      "name": "Endura (2x)",
      "type": "simple"
    },
    {
      "class": "pesticide",
      "name": "Eptam 7EC",
      "type": "simple"
    },
    {
      "description": "Cost Estimate",
      "class": "any",
      "name": "estimate",
      "type": "simple"
    },
    {
      "class": "pesticide",
      "name": "Excel 90",
      "type": "simple"
    },
    {
      "class": "pesticide",
      "name": "Far-GO",
      "type": "simple"
    },
    {
      "class": "processing",
      "name": "Fees Assesment",
      "type": "simple"
    },
    {
      "class": "pesticide",
      "name": "Finish 6 Pro",
      "type": "simple"
    },
    {
      "class": "material",
      "name": "Fuel",
      "type": "simple"
    },
    {
      "class": "material",
      "name": "Fuel - Diesel",
      "type": "simple"
    },
    {
      "class": "material",
      "name": "Fuel - Gas",
      "type": "simple"
    },
    {
      "class": "processing",
      "name": "Fumigation",
      "type": "simple"
    },
    {
      "class": "pesticide",
      "name": "Gen 25WG",
      "type": "simple"
    },
    {
      "class": "pesticide",
      "name": "Ginstar",
      "type": "simple"
    },
    {
      "class": "pesticide",
      "name": "Glyphosate GAL1",
      "type": "simple"
    },
    {
      "class": "pesticide",
      "name": "Goal",
      "type": "simple"
    },
    {
      "class": "pesticide",
      "name": "Goal Tender",
      "type": "simple"
    },
    {
      "class": "labor",
      "name": "Gopher Control",
      "type": "simple"
    },
    {
      "class": "processing",
      "name": "Ground Application",
      "type": "simple"
    },
    {
      "class": "pesticide",
      "name": "Harmony Extra",
      "type": "simple"
    },
    {
      "class": "processing",
      "name": "Harvest",
      "type": "simple"
    },
    {
      "class": "processing",
      "name": "Harvest Combine Grain",
      "type": "simple"
    },
    {
      "class": "processing",
      "name": "Harvest for Grain",
      "type": "simple"
    },
    {
      "class": "processing",
      "name": "Harvest: Haul Grain",
      "type": "simple"
    },
    {
      "class": "processing",
      "name": "Haul and Stack",
      "type": "simple"
    },
    {
      "class": "processing",
      "name": "Haul Local",
      "type": "simple"
    },
    {
      "class": "pesticide",
      "name": "Headline",
      "type": "simple"
    },
    {
      "class": "processing",
      "name": "Injection-Sidedress",
      "type": "simple"
    },
    {
      "class": "processing",
      "name": "Injection-Sidedress NH3",
      "type": "simple"
    },
    {
      "class": "processing",
      "name": "Insecticide",
      "type": "simple"
    },
    {
      "class": "water",
      "name": "Irrigation",
      "type": "simple"
    },
    {
      "class": "fertilizer",
      "name": "K20",
      "type": "simple"
    },
    {
      "class": "fertilizer",
      "name": "K2O",
      "type": "simple"
    },
    {
      "class": "pesticide",
      "name": "Karmex",
      "type": "simple"
    },
    {
      "class": "pesticide",
      "name": "Karmex DF",
      "type": "simple"
    },
    {
      "class": "pesticide",
      "name": "Kerb",
      "type": "simple"
    },
    {
      "class": "labor",
      "name": "Labor (Irrigation)",
      "type": "simple"
    },
    {
      "class": "labor",
      "name": "Labor (Machine)",
      "type": "simple"
    },
    {
      "class": "labor",
      "name": "Labor (non-machine)",
      "type": "simple"
    },
    {
      "class": "labor",
      "name": "Labor (other)",
      "type": "simple"
    },
    {
      "description": "Irrigated Land Rent",
      "class": "rent",
      "name": "land-rent-irrigated",
      "type": "simple"
    },
    {
      "description": "Non irrigated Land Rent",
      "class": "rent",
      "name": "land-rent-nonirrigated",
      "type": "simple"
    },
    {
      "description": "Pasture irrigated Land Rent",
      "class": "rent",
      "name": "land-rent-pasture",
      "type": "simple"
    },
    {
      "class": "pesticide",
      "name": "Lannate 90 SP",
      "type": "simple"
    },
    {
      "class": "seed",
      "name": "Lentil Seed",
      "type": "simple"
    },
    {
      "class": "pesticide",
      "name": "Leverage",
      "type": "simple"
    },
    {
      "class": "pesticide",
      "name": "Leverage 2.7",
      "type": "simple"
    },
    {
      "class": "pesticide",
      "name": "LI 700",
      "type": "simple"
    },
    {
      "class": "material",
      "name": "Lime",
      "type": "simple"
    },
    {
      "class": "fertilizer",
      "name": "Liquid Nitrogen",
      "type": "simple"
    },
    {
      "class": "fertilizer",
      "name": "Liquid P2O5",
      "type": "simple"
    },
    {
      "class": "pesticide",
      "name": "Lorsban 15G",
      "type": "simple"
    },
    {
      "class": "pesticide",
      "name": "Lorsban 4E",
      "type": "simple"
    },
    {
      "class": "material",
      "name": "Lube",
      "type": "simple"
    },
    {
      "class": "material",
      "name": "Lubricants",
      "type": "simple"
    },
    {
      "class": "pesticide",
      "name": "M90",
      "type": "simple"
    },
    {
      "class": "labor",
      "name": "Maintenance",
      "type": "simple"
    },
    {
      "class": "labor",
      "name": "Maintenance and Repair",
      "type": "simple"
    },
    {
      "class": "pesticide",
      "name": "Malathion",
      "type": "simple"
    },
    {
      "class": "processing",
      "name": "Management",
      "type": "simple"
    },
    {
      "class": "pesticide",
      "name": "Maverick",
      "type": "simple"
    },
    {
      "class": "pesticide",
      "name": "MCPA Amine",
      "type": "simple"
    },
    {
      "class": "pesticide",
      "name": "Mepex Gin Our",
      "type": "simple"
    },
    {
      "class": "pesticide",
      "name": "Metam Sodium",
      "type": "simple"
    },
    {
      "class": "fertilizer",
      "name": "Micronutrients",
      "type": "simple"
    },
    {
      "class": "pesticide",
      "name": "Micro-Tech",
      "type": "simple"
    },
    {
      "class": "fertilizer",
      "name": "Mulch",
      "type": "simple"
    },
    {
      "class": "pesticide",
      "name": "Mustang 1.5 EW",
      "type": "simple"
    },
    {
      "class": "fertilizer",
      "name": "Nitrogen",
      "type": "simple"
    },
    {
      "class": "fertilizer",
      "name": "Nitrogen (dry)",
      "type": "simple"
    },
    {
      "class": "pesticide",
      "name": "Oberon 25C",
      "type": "simple"
    },
    {
      "description": "[45-2091 Agricultural Equipment Operators](http://www.bls.gov/oes/current/oes452091.htm)",
      "class": "labor",
      "name": "oes452091",
      "type": "simple"
    },
    {
      "description": "[45-2092 Farmworkers and Laborers, Crop, Nursery, and Greenhouse](http://www.bls.gov/oes/current/oes452092.htm)",
      "class": "labor",
      "name": "oes452092",
      "type": "simple"
    },
    {
      "description": "[53-3032 Heavy and Tractor-Trailer Truck Drivers](http://www.bls.gov/oes/current/oes533032.htm)",
      "class": "labor",
      "name": "oes533032",
      "type": "simple"
    },
    {
      "class": "pesticide",
      "name": "Orthene",
      "type": "simple"
    },
    {
      "class": "pesticide",
      "name": "Osprey",
      "type": "simple"
    },
    {
      "class": "pesticide",
      "name": "Outlook 6EC",
      "type": "simple"
    },
    {
      "class": "material",
      "name": "Packing",
      "type": "simple"
    },
    {
      "class": "processing",
      "name": "Pest Control Consultant",
      "type": "simple"
    },
    {
      "class": "fertilizer",
      "name": "Phosphorous",
      "type": "simple"
    },
    {
      "class": "fertilizer",
      "name": "Phosphorous (dry)",
      "type": "simple"
    },
    {
      "class": "labor",
      "name": "Pick Berries",
      "type": "simple"
    },
    {
      "class": "labor",
      "name": "Plant",
      "type": "simple"
    },
    {
      "class": "labor",
      "name": "Planting",
      "type": "simple"
    },
    {
      "class": "processing",
      "name": "Poncho Beta Seed Treatment",
      "type": "simple"
    },
    {
      "class": "labor",
      "name": "Postharvest and packaging",
      "type": "simple"
    },
    {
      "class": "seed",
      "name": "Potato Seed",
      "type": "simple"
    },
    {
      "class": "pesticide",
      "name": "Pristine",
      "type": "simple"
    },
    {
      "class": "pesticide",
      "name": "Prowl",
      "type": "simple"
    },
    {
      "class": "pesticide",
      "name": "Prowl 3.3EC",
      "type": "simple"
    },
    {
      "class": "pesticide",
      "name": "Prowl H20",
      "type": "simple"
    },
    {
      "class": "pesticide",
      "name": "Puma 1EC",
      "type": "simple"
    },
    {
      "class": "material",
      "name": "Purity and Germ",
      "type": "simple"
    },
    {
      "class": "pesticide",
      "name": "Pursuit",
      "type": "simple"
    },
    {
      "class": "pesticide",
      "name": "Quadris",
      "type": "simple"
    },
    {
      "class": "pesticide",
      "name": "Quilt",
      "type": "simple"
    },
    {
      "class": "material",
      "name": "Rake",
      "type": "simple"
    },
    {
      "class": "pesticide",
      "name": "Rally 40 WSP",
      "type": "simple"
    },
    {
      "class": "pesticide",
      "name": "Reglone",
      "type": "simple"
    },
    {
      "class": "processing",
      "name": "Rental Fertilizer Applicator",
      "type": "simple"
    },
    {
      "class": "processing",
      "name": "Rental Ripper Shooter",
      "type": "simple"
    },
    {
      "class": "processing",
      "name": "Rental Sprayer",
      "type": "simple"
    },
    {
      "class": "processing",
      "name": "Repair",
      "type": "simple"
    },
    {
      "class": "pesticide",
      "name": "Ridomil Gold EC",
      "type": "simple"
    },
    {
      "class": "processing",
      "name": "Riper Shooter",
      "type": "simple"
    },
    {
      "class": "processing",
      "name": "Roadside Bales",
      "type": "simple"
    },
    {
      "class": "processing",
      "name": "Roadside Hay",
      "type": "simple"
    },
    {
      "class": "labor",
      "name": "Rodent Control",
      "type": "simple"
    },
    {
      "class": "pesticide",
      "name": "Roundup",
      "type": "simple"
    },
    {
      "class": "pesticide",
      "name": "Roundup Original Max",
      "type": "simple"
    },
    {
      "class": "pesticide",
      "name": "Roundup Ultra Max",
      "type": "simple"
    },
    {
      "class": "material",
      "name": "Sawdust",
      "type": "simple"
    },
    {
      "class": "processing",
      "name": "Seed Clean and Bag",
      "type": "simple"
    },
    {
      "class": "processing",
      "name": "Seed Cleand and Bag",
      "type": "simple"
    },
    {
      "class": "processing",
      "name": "Seed Test",
      "type": "simple"
    },
    {
      "class": "pesticide",
      "name": "Select Max",
      "type": "simple"
    },
    {
      "class": "pesticide",
      "name": "Sencor",
      "type": "simple"
    },
    {
      "class": "pesticide",
      "name": "Sencor 4L",
      "type": "simple"
    },
    {
      "class": "pesticide",
      "name": "Sencor 75DF",
      "type": "simple"
    },
    {
      "class": "pesticide",
      "name": "Sevin XLR Plus",
      "type": "simple"
    },
    {
      "class": "pesticide",
      "name": "Shark EW",
      "type": "simple"
    },
    {
      "class": "pesticide",
      "name": "Slug Bait",
      "type": "simple"
    },
    {
      "class": "pesticide",
      "name": "Sonalan HFP",
      "type": "simple"
    },
    {
      "class": "seed",
      "name": "Sorghum Seed",
      "type": "simple"
    },
    {
      "class": "pesticide",
      "name": "Spot Spray Roundup",
      "type": "simple"
    },
    {
      "class": "labor",
      "name": "Sprayer",
      "type": "simple"
    },
    {
      "class": "pesticide",
      "name": "Staple",
      "type": "simple"
    },
    {
      "class": "pesticide",
      "name": "Starane+Salvo",
      "type": "simple"
    },
    {
      "class": "pesticide",
      "name": "Starane+Sword",
      "type": "simple"
    },
    {
      "class": "processing",
      "name": "Storage Operating Costs",
      "type": "simple"
    },
    {
      "class": "processing",
      "name": "Storage Repairs",
      "type": "simple"
    },
    {
      "class": "pesticide",
      "name": "Stratego",
      "type": "simple"
    },
    {
      "class": "labor",
      "name": "Stuble Shredder",
      "type": "simple"
    },
    {
      "class": "pesticide",
      "name": "Success",
      "type": "simple"
    },
    {
      "class": "processing",
      "name": "Sugarbeet",
      "type": "simple"
    },
    {
      "class": "fertilizer",
      "name": "Sulfur",
      "type": "simple"
    },
    {
      "class": "fertilizer",
      "name": "Sulfur (dry)",
      "type": "simple"
    },
    {
      "class": "fertilizer",
      "name": "Sulfuric Acid",
      "type": "simple"
    },
    {
      "class": "fertilizer",
      "name": "Surfactant-Induce",
      "type": "simple"
    },
    {
      "class": "pesticide",
      "name": "Surflan AS",
      "type": "simple"
    },
    {
      "class": "seed",
      "name": "Susan Seed",
      "type": "simple"
    },
    {
      "class": "processing",
      "name": "Swath",
      "type": "simple"
    },
    {
      "class": "processing",
      "name": "Swathing",
      "type": "simple"
    },
    {
      "class": "labor",
      "name": "Swath Rake",
      "type": "simple"
    },
    {
      "class": "pesticide",
      "name": "Synapse WG",
      "type": "simple"
    },
    {
      "class": "processing",
      "name": "Tarping",
      "type": "simple"
    },
    {
      "class": "pesticide",
      "name": "Telone II",
      "type": "simple"
    },
    {
      "class": "processing",
      "name": "Tissue Analysis",
      "type": "simple"
    },
    {
      "class": "processing",
      "name": "Transport",
      "type": "simple"
    },
    {
      "class": "processing",
      "name": "Transport to PDX",
      "type": "simple"
    },
    {
      "class": "pesticide",
      "name": "Treflan 4HFP",
      "type": "simple"
    },
    {
      "class": "pesticide",
      "name": "Treflan FP",
      "type": "simple"
    },
    {
      "class": "pesticide",
      "name": "Treflan TR 10",
      "type": "simple"
    },
    {
      "class": "pesticide",
      "name": "Triflurex HFP",
      "type": "simple"
    },
    {
      "class": "fertilizer",
      "name": "UN32",
      "type": "simple"
    },
    {
      "class": "pesticide",
      "name": "Velpar L",
      "type": "simple"
    },
    {
      "class": "water",
      "name": "Water",
      "type": "simple"
    },
    {
      "class": "processing",
      "name": "Water Assesment",
      "type": "simple"
    },
    {
      "class": "labor",
      "name": "Weed Control",
      "type": "simple"
    },
    {
      "class": "processing",
      "name": "Wheat Assesment",
      "type": "simple"
    },
    {
      "class": "seed",
      "name": "Wheat Seed",
      "type": "simple"
    },
    {
      "class": "material",
      "name": "Yukon",
      "type": "simple"
    },
    {
      "class": "material",
      "name": "Zephyr",
      "type": "simple"
    },
    {
      "class": "fertilizer",
      "name": "Zinc",
      "type": "simple"
    },
    {
      "class": "labor",
      "name": "Labor--3-Wheel ag sprayer",
      "units": "h",
      "type": "simple"
    },
    {
      "name": "Labor--Challenger tractor",
      "price": 5,
      "class": "labor",
      "units": "us$/h",
      "type": "simple"
    },
    {
      "name": "Labor--Cooler/van",
      "price": 5,
      "class": "labor",
      "units": "$/h",
      "type": "simple"
    },
    {
      "name": "Labor--FR 6080 FH",
      "price": 6,
      "class": "labor",
      "units": "$/h",
      "type": "simple"
    },
    {
      "name": "Laborer",
      "price": 20,
      "class": "labor",
      "units": "us$/h",
      "type": "simple"
    },
    {
      "class": "labor",
      "name": "Labor--Large tractor",
      "units": "us$/h",
      "price": 35,
      "type": "simple"
    },
    {
      "class": "labor",
      "name": "Labor--Mid-size tractor",
      "units": "us$/h",
      "price": 22,
      "type": "simple"
    },
    {
      "class": "labor",
      "name": "Labor--Semi-tractor trailer",
      "units": "us$/h",
      "price": 28,
      "type": "simple"
    },
    {
      "class": "labor",
      "name": "Labor--Small tractor",
      "units": "us$/h",
      "price": 22,
      "type": "simple"
    },
    {
      "class": "labor",
      "name": "Labor--Supervisor",
      "units": "us$/h",
      "price": 26,
      "type": "simple"
    },
    {
      "class": "labor",
      "name": "Labor--Support Truck",
      "units": "us$/h",
      "price": 30,
      "type": "simple"
    },
    {
      "class": "labor",
      "name": "Labor--Tandem axle truck",
      "units": "us$/h",
      "price": 26,
      "type": "simple"
    },
    {
      "class": "labor",
      "name": "Labor--Tractor and Sprayer",
      "units": "us$/h",
      "price": 30,
      "type": "simple"
    },
    {
      "description": "Off Road Diesel",
      "class": "fuel",
      "name": "Equipment Fuel",
      "units": "us$/[gal_us]",
      "price": 2.81,
      "type": "simple"
    },
    {
      "class": "pesticide",
      "name": "Coragen",
      "units": "us$/[qt_us]",
      "price": 210,
      "type": "simple"
    },
    {
      "class": "pesticide",
      "name": "Dimilin",
      "units": "[qt_us]",
      "type": "simple"
    },
    {
      "class": "pesticide",
      "name": "Fusilade",
      "units": "us$/[qt_us]",
      "price": 30,
      "type": "simple"
    },
    {
      "class": "pesticide",
      "name": "Glyphosate",
      "units": "us$/[qt_us]",
      "price": 4,
      "type": "simple"
    },
    {
      "class": "pesticide",
      "name": "Goal 2XL",
      "units": "us$/[qt_us]",
      "price": 30,
      "type": "simple"
    },
    {
      "class": "pesticide",
      "name": "Imidacloprid5",
      "units": "[qt_us]",
      "type": "simple"
    },
    {
      "class": "pesticide",
      "name": "Oust",
      "units": "us$/[lb_av]",
      "price": 64,
      "type": "simple"
    },
    {
      "description": "rodenticide",
      "class": "[qt_us]",
      "name": "Rozol",
      "units": "us$/[lb_av]",
      "price": 1.85,
      "type": "simple"
    },
    {
      "class": "pesticide",
      "name": "Sureguard",
      "units": "us$/[lb_av]",
      "price": 130,
      "type": "simple"
    },
    {
      "class": "pesticide",
      "name": "Transline",
      "units": "us$/[gal_us]",
      "price": 215,
      "type": "simple"
    },
    {
      "class": "pesticide",
      "name": "Trifluralin",
      "units": "us$/[qt_us]",
      "price": 7.5,
      "type": "simple"
    },
    {
      "description": "Poplar cutting for planting",
      "class": "seed",
      "name": "Poplar Cutting",
      "units": "us$/1",
      "price": 0.08,
      "type": "simple"
    },
    {
      "name": "3-Wheel ag sprayer",
      "price": 30,
      "units": "us$/h",
      "type": "simple"
    },
    {
      "name": "Imidacloprid",
      "price": 56,
      "units": "us$/[qt_us]",
      "type": "simple"
    },
    {
      "name": "Irrigation Cost",
      "price": 6,
      "units": "us$/[acr_us].[in_us]",
      "type": "simple"
    },
    {
      "class": "equipment",
      "name": "3-Wheel Ag Sprayer",
      "units": "us$/h",
      "type": "complex",
      "materials": {
        "Equipment Fuel": {
          "amount": 3.96,
          "originalAmount": 3.96,
          "units": "[gal_us]/h",
          "error": null,
          "price": 8.58611111111111e-7
        },
        "Labor--3-Wheel Ag Sprayer": {
          "amount": 1,
          "originalAmount": 1,
          "units": "h/h",
          "error": true
        }
      },
      "price": 0
    },
    {
      "class": "equipment",
      "name": "Challenger tractor",
      "units": "h",
      "type": "complex",
      "materials": {
        "Equipment Fuel": {
          "amount": 19,
          "originalAmount": 19,
          "units": "[gal_us]/h",
          "error": null,
          "price": 53.39
        },
        "Labor--Challenger tractor": {
          "amount": 1,
          "originalAmount": 1,
          "units": "h/h",
          "error": null,
          "price": 5
        }
      },
      "price": 58.39
    },
    {
      "class": "equipment",
      "name": "Cooler/van",
      "units": "h",
      "type": "complex",
      "materials": {
        "Equipment Fuel": {
          "amount": 0.96,
          "originalAmount": 0.96,
          "units": "[gal_us]/h",
          "error": null,
          "price": 2.6976
        },
        "Labor--Cooler/van": {
          "amount": 2,
          "originalAmount": 2,
          "units": "1/h",
          "error": null,
          "price": 0.002777777777777778
        }
      },
      "price": 2.7003777777777778
    },
    {
      "class": "equipment",
      "name": "Eliminator",
      "units": "us$/h",
      "type": "complex",
      "materials": {
        "Equipment Fuel": {
          "amount": 19.36,
          "originalAmount": 19.36,
          "units": "[gal_us]/h",
          "error": null,
          "price": 0.000004197654320987655
        },
        "Labor--Eliminator": {
          "amount": 1,
          "originalAmount": 1,
          "units": "h/h",
          "error": true
        }
      },
      "price": 0
    },
    {
      "class": "equipment",
      "name": "FR 6080 FH",
      "units": "h",
      "type": "complex",
      "materials": {
        "Equipment Fuel": {
          "amount": 13.2,
          "originalAmount": 13.2,
          "units": "[gal_us]/h",
          "error": null,
          "price": 37.092
        },
        "Labor--FR 6080 FH": {
          "amount": 1,
          "originalAmount": 1,
          "units": "h/h",
          "error": null,
          "price": 6
        }
      },
      "price": 43.092
    },
    {
      "class": "equipment",
      "name": "Large tractor",
      "units": "h",
      "type": "complex",
      "materials": {
        "Equipment Fuel": {
          "amount": 13.2,
          "originalAmount": 13.2,
          "units": "[gal_us]/h",
          "error": null,
          "price": 37.092
        },
        "Labor--Large tractor": {
          "amount": 1,
          "originalAmount": 1,
          "units": "h/h",
          "error": null,
          "price": 35
        }
      },
      "price": 72.092
    },
    {
      "class": "equipment",
      "name": "Mid-size tractor",
      "units": "h",
      "type": "complex",
      "materials": {
        "Equipment Fuel": {
          "amount": 3.96,
          "originalAmount": 3.96,
          "units": "[gal_us]/h",
          "error": null,
          "price": 11.1276
        },
        "Labor--Mid-size tractor": {
          "amount": 1,
          "originalAmount": 1,
          "units": "h/h",
          "error": null,
          "price": 22
        }
      },
      "price": 33.1276
    },
    {
      "class": "equipment",
      "name": "Semi-tractor trailer",
      "units": "h",
      "type": "complex",
      "materials": {
        "Equipment Fuel": {
          "amount": 6.5,
          "originalAmount": 6.5,
          "units": "[gal_us]/h",
          "error": null,
          "price": 18.265
        },
        "Labor--Semi-tractor trailer": {
          "amount": 1,
          "originalAmount": 1,
          "units": "h/h",
          "error": null,
          "price": 28
        }
      },
      "price": 46.265
    },
    {
      "class": "equipment",
      "name": "Small tractor",
      "units": "us$/h",
      "type": "complex",
      "materials": {
        "Equipment Fuel": {
          "amount": 1.98,
          "originalAmount": 1.98,
          "units": "[gal_us]/h",
          "error": null,
          "price": 4.293055555555555e-7
        },
        "Labor--Small tractor": {
          "amount": 1,
          "originalAmount": 1,
          "units": "h/h",
          "error": null,
          "price": 0.0000016975308641975308
        }
      },
      "price": 0.000002126836419753086
    },
    {
      "class": "equipment",
      "name": "Support Truck",
      "units": "h",
      "type": "complex",
      "materials": {
        "Equipment Fuel": {
          "amount": 1.76,
          "originalAmount": 1.76,
          "units": "[gal_us]/h",
          "error": null,
          "price": 4.9456
        },
        "Labor--Support Truck": {
          "amount": 1,
          "originalAmount": 1,
          "units": "h/h",
          "error": null,
          "price": 30
        }
      },
      "price": 34.9456
    },
    {
      "class": "equipment",
      "name": "Tandem axle truck",
      "units": "h",
      "type": "complex",
      "materials": {
        "Equipment Fuel": {
          "amount": 13.2,
          "originalAmount": 13.2,
          "units": "[gal_us]/h",
          "error": null,
          "price": 37.092
        },
        "Labor--Tandem axle truck": {
          "amount": 1,
          "originalAmount": 1,
          "units": "h/h",
          "error": null,
          "price": 26
        }
      },
      "price": 63.092
    },
    {
      "class": "equipment",
      "name": "Tractor and sprayer",
      "units": "h",
      "type": "complex",
      "materials": {
        "Equipment Fuel": {
          "amount": 3.96,
          "originalAmount": 3.96,
          "units": "[gal_us]/h",
          "error": null,
          "price": 11.1276
        },
        "Labor--Tractor and sprayer": {
          "amount": 1,
          "originalAmount": 1,
          "units": "h/h",
          "error": true
        }
      },
      "price": 0
    },
    {
      "class": "labor",
      "name": "hoeing",
      "units": "100.[acr_us]",
      "type": "complex",
      "materials": {
        "Laborer": {
          "amount": 192,
          "originalAmount": 192,
          "units": "h/(100.[acr_us])",
          "error": null,
          "price": 3840
        }
      },
      "price": 3840
    },
    {
      "class": "labor",
      "name": "herbicide - manual",
      "units": "100.[acr_us]",
      "type": "complex",
      "materials": {
        "Glyphosate": {
          "amount": 200,
          "originalAmount": 200,
          "units": "[qt_us]/(100.[acr_us])",
          "error": null,
          "price": 800
        },
        "Laborer": {
          "amount": 96,
          "originalAmount": 96,
          "units": "h/(100.[acr_us])",
          "error": null,
          "price": 1920
        }
      },
      "price": 2720
    }
  ],
  "operations": [
    {
      "name": "crop care - established",
      "materials": {
        "hoeing": {
          "amount": 150,
          "material": "hoeing",
          "units": "[acr_us]",
          "error": null,
          "price": 5760
        },
        "herbicide - manual": {
          "amount": 100,
          "material": "herbicide - manual",
          "units": "[acr_us]",
          "error": null,
          "price": 2720
        }
      },
      "units": "[acr_us]",
      "schedule": [
        {
          "date": "2018-11-01",
          "length": "1",
          "units": "year"
        },
        {
          "date": "2019-11-01",
          "length": "1",
          "units": "year"
        },
        {
          "date": "2022-11-01",
          "length": "1",
          "units": "year"
        },
        {
          "date": "2023-11-01",
          "length": "1",
          "units": "year"
        },
        {
          "date": "2026-11-01",
          "length": "1",
          "units": "year"
        },
        {
          "date": "2027-11-01",
          "length": "1",
          "units": "year"
        },
        {
          "date": "2030-11-01",
          "length": "1",
          "units": "year"
        },
        {
          "date": "2031-11-01",
          "length": "1",
          "units": "year"
        }
      ],
      "id": "016b589b-91e1-4adf-9550-08f49b76ef48",
      "subtotal": 8480,
      "total": 67840
    },
    {
      "name": "planting",
      "materials": {
        "Semi-tractor trailer": {
          "note": "Transport Nursery to field",
          "amount": 20,
          "material": "Semi-tractor trailer",
          "units": "h",
          "error": null,
          "price": 925.3
        },
        "Poplar Cutting": {
          "amount": 145000,
          "material": "Poplar Cutting",
          "units": "1",
          "error": null,
          "price": 11600
        },
        "Cooler/van": {
          "amount": 1081,
          "material": "Cooler/van",
          "units": "h",
          "error": null,
          "price": 2919.1083777777776,
          "originalAmount": 1081
        },
        "Laborer": {
          "amount": 480,
          "material": "Laborer",
          "units": "h",
          "error": null,
          "price": 9600
        }
      },
      "units": "[acr_us]",
      "schedule": [
        {
          "date": "2015-10-01",
          "length": "1",
          "units": "month"
        }
      ],
      "id": "2c03d5f3-f44f-4617-9e0c-896928545bd5",
      "subtotal": 25044.408377777778,
      "total": 25044.408377777778
    },
    {
      "name": "crop care - yr0",
      "materials": {
        "herbicide - manual": {
          "amount": 25,
          "material": "herbicide - manual",
          "units": "[acr_us]",
          "error": null,
          "price": 680
        },
        "hoeing": {
          "note": "2 times over 70 acres each.",
          "amount": 140,
          "material": "hoeing",
          "units": "[acr_us]",
          "error": null,
          "price": 5376
        }
      },
      "units": "[acr_us]",
      "schedule": [
        {
          "date": "2015-11-01",
          "length": "1",
          "units": "year"
        }
      ],
      "id": "aa0b22ac-3398-4e7d-bf23-df5af2544b28",
      "subtotal": 6056,
      "total": 6056
    },
    {
      "name": "harvest - established",
      "materials": {
        "FR 6080 FH": {
          "amount": 35,
          "material": "FR 6080 FH",
          "units": "h",
          "error": null,
          "price": 1508.22,
          "originalAmount": 35
        },
        "Tandem axle truck": {
          "amount": 175,
          "material": "Tandem axle truck",
          "units": "h",
          "error": null,
          "price": 11041.1
        },
        "Support Truck": {
          "amount": 35,
          "material": "Support Truck",
          "units": "h",
          "error": null,
          "price": 1223.096
        }
      },
      "units": "[acr_us]",
      "schedule": [
        {
          "date": "2020-10-01",
          "length": "1",
          "units": "month"
        },
        {
          "date": "2023-10-01",
          "length": "1",
          "units": "month"
        },
        {
          "date": "2028-10-01",
          "length": "1",
          "units": "month"
        },
        {
          "date": "2032-10-01",
          "length": "1",
          "units": "month"
        }
      ],
      "id": "480b3aeb-7350-41fa-88b5-24f329223f96",
      "subtotal": 13772.416,
      "total": 55089.664
    },
    {
      "name": "crop care - yr1",
      "materials": {
        "Small Tractor": {
          "note": "Tillage",
          "amount": 48,
          "material": "Small Tractor",
          "units": "h",
          "error": {
            "name": "Small Tractor",
            "error": true,
            "message": "Small Tractor is not in the material list"
          }
        },
        "hoeing": {
          "note": "5 times",
          "amount": 500,
          "material": "hoeing",
          "units": "[acr_us]",
          "error": null,
          "price": 19200
        },
        "herbicide - manual": {
          "note": "3 times, 1/2 field",
          "amount": 150,
          "material": "herbicide - manual",
          "units": "[acr_us]",
          "error": null,
          "price": 4080,
          "originalAmount": 150
        },
        "Laborer": {
          "note": "Interplanting",
          "amount": 96,
          "material": "Laborer",
          "units": "h",
          "error": null,
          "price": 1920
        }
      },
      "units": "[acr_us]",
      "schedule": [
        {
          "date": "2016-11-01",
          "length": "1",
          "units": "year"
        }
      ],
      "id": "3879f60b-3d4b-4a91-a670-961147a45bba",
      "subtotal": 25200,
      "total": 25200
    },
    {
      "name": "restoration",
      "materials": {
        "Large tractor": {
          "note": "disking",
          "amount": 12,
          "material": "Large tractor",
          "units": "h",
          "error": null,
          "price": 865.104
        },
        "Tractor and sprayer": {
          "note": "herbicide",
          "amount": 20,
          "material": "Tractor and sprayer",
          "units": "h",
          "error": null,
          "price": 0
        },
        "Glyphosate": {
          "note": "herbicide",
          "amount": 200,
          "material": "Glyphosate",
          "units": "[qt_us]",
          "error": null,
          "price": 800
        },
        "2,4-D": {
          "note": "herbicide",
          "amount": 200,
          "material": "2,4-D",
          "units": "[qt_us]",
          "error": null,
          "price": 1000
        }
      },
      "units": "[acr_us]",
      "schedule": [
        {
          "date": "2032-11-01",
          "length": "3",
          "units": "month"
        }
      ],
      "id": "8690f0f9-a103-4438-905e-bbd71ccbdde3",
      "subtotal": 2665.1040000000003,
      "total": 2665.1040000000003
    },
    {
      "name": "crop care - post harvest",
      "materials": {
        "Mid-size tractor": {
          "note": "Post harvest clean up",
          "amount": 30,
          "material": "Mid-size tractor",
          "units": "h",
          "error": null,
          "price": 993.828
        },
        "Tractor and sprayer": {
          "note": "Dormant Herbicide",
          "amount": 8,
          "material": "Tractor and sprayer",
          "units": "h",
          "error": null,
          "price": 0
        },
        "Glyphosate": {
          "note": "Dormant Herbicide",
          "amount": 200,
          "material": "Glyphosate",
          "units": "[qt_us]",
          "error": null,
          "price": 800
        },
        "Trifluralin": {
          "note": "Dormant Herbicide",
          "amount": 200,
          "material": "Trifluralin",
          "units": "[qt_us]",
          "error": null,
          "price": 1500
        },
        "herbicide - manual": {
          "note": "post emergent",
          "amount": 100,
          "material": "herbicide - manual",
          "units": "[acr_us]",
          "error": null,
          "price": 2720
        }
      },
      "units": "[acr_us]",
      "schedule": [
        {
          "date": "2017-11-01",
          "length": "1",
          "units": "year"
        },
        {
          "date": "2021-11-01",
          "length": "1",
          "units": "year"
        },
        {
          "date": "2025-11-01",
          "length": "1",
          "units": "year"
        },
        {
          "date": "2029-11-01",
          "length": "1",
          "units": "year"
        }
      ],
      "id": "d3434f92-1ef4-42b6-9026-dcedc55ac68e",
      "subtotal": 6013.8279999999995,
      "total": 24055.311999999998
    },
    {
      "name": "harvest - yr1",
      "materials": {
        "FR 6080 FH": {
          "note": "",
          "amount": 26,
          "material": "FR 6080 FH",
          "units": "h",
          "error": null,
          "price": 1120.392
        },
        "Tandom axle truck": {
          "amount": 104,
          "material": "Tandom axle truck",
          "units": "h",
          "error": {
            "name": "Tandom axle truck",
            "error": true,
            "message": "Tandom axle truck is not in the material list"
          }
        },
        "Support truck": {
          "amount": 26,
          "material": "Support truck",
          "units": "h",
          "error": {
            "name": "Support truck",
            "error": true,
            "message": "Support truck is not in the material list"
          }
        }
      },
      "units": "[acr_us]",
      "schedule": [
        {
          "length": 1,
          "units": "month",
          "date": "2017-11-22"
        }
      ],
      "id": "8e2084be-726d-4f1b-9f16-fcf574c0fba1",
      "subtotal": 1120.392,
      "total": 1120.392
    },
    {
      "name": "site prep",
      "materials": {
        "Tractor and sprayer": {
          "note": "Initial Spraying",
          "amount": 3,
          "material": "Tractor and sprayer",
          "units": "h",
          "error": null,
          "price": 0
        },
        "Glyphosate": {
          "note": "Initial Spraying",
          "amount": 100,
          "material": "Glyphosate",
          "units": "[qt_us]",
          "error": null,
          "price": 400
        },
        "Goal 2XL": {
          "note": "Initial Spraying",
          "amount": 125,
          "material": "Goal 2XL",
          "units": "[qt_us]",
          "error": null,
          "price": 3750
        },
        "Large tractor": {
          "note": "Row Marking",
          "amount": 25,
          "material": "Large tractor",
          "units": "h",
          "error": null,
          "price": 1802.3
        },
        "Challenger tractor": {
          "note": "herbicide - preemergent",
          "amount": 24,
          "material": "Challenger tractor",
          "units": "h",
          "error": null,
          "price": 1401.3600000000001,
          "originalAmount": 24
        },
        "Trifluralin": {
          "note": "herbicide - preemergent",
          "amount": 50,
          "material": "Trifluralin",
          "units": "[qt_us]",
          "error": null,
          "price": 375
        }
      },
      "units": "[acr_us]",
      "schedule": [
        {
          "date": "2015-06-01",
          "length": "3",
          "units": "month"
        }
      ],
      "id": "0e3c867f-4eee-449c-9ebf-8d127b188bb1",
      "subtotal": 7728.66,
      "total": 7728.66
    }
  ],
  "farm": {
    "unit": "[acr_us]",
    "size": "100",
    "commodity": "POPLAR",
    "location": "06113",
    "farm": "clarksburg"
  }
}

},{}],"/Users/jrmerz/dev/cstars/AHB/farm-budgets-app/lib/shared/config/ca_alfalfa_swap.json":[function(require,module,exports){
module.exports={
  "prices": [
    {
      "unit": "us$/us$",
      "price": 1,
      "material": "custom"
    },
    {
      "unit": "us$/us$",
      "price": 1,
      "material": "fertilizer"
    },
    {
      "unit": "us$/[gal_us]",
      "price": 2.68,
      "material": "fuel"
    },
    {
      "unit": "us$/([in_us].[acr_us])",
      "price": 112.86,
      "material": "irrigation"
    },
    {
      "unit": "us$/h",
      "price": 9.42,
      "material": "Labor-machine"
    },
    {
      "unit": "us$/h",
      "price": 7.25,
      "material": "Labor-manual"
    },
    {
      "unit": "us$/us$",
      "price": 1,
      "material": "other"
    },
    {
      "unit": "us$/us$",
      "price": 1,
      "material": "pesticides"
    },
    {
      "unit": "us$/us$",
      "price": 1,
      "material": "repair&lube"
    }
  ],
  "materials": [
    {
      "description": "'Manual Labor (minimum wage)'",
      "class": "labor",
      "unit": "h",
      "material": "Labor-machine"
    },
    {
      "description": "'Machine Labor (%130 of minimum)'",
      "class": "labor",
      "unit": "h",
      "material": "Labor-manual"
    },
    {
      "description": "'Dollar estimate of repairs'",
      "class": "custom",
      "unit": "us$",
      "material": "repair&lube"
    },
    {
      "description": "'Dollar estimate of pesticide use'",
      "class": "custom",
      "unit": "us$",
      "material": "pesticides"
    },
    {
      "description": "'Dollar estimate of fertilizer'",
      "class": "custom",
      "unit": "us$",
      "material": "fertilizer"
    },
    {
      "description": "'Dollar estimate of other costs'",
      "class": "custom",
      "unit": "us$",
      "material": "other"
    },
    {
      "description": "'Dollar estimate of consulting'",
      "class": "custom",
      "unit": "us$",
      "material": "custom"
    },
    {
      "description": "'Dollar fuel cost estimates'",
      "class": "custom",
      "unit": "us$",
      "material": "fuel"
    },
    {
      "description": "'Irrigation in AcIn per Ac'",
      "class": "custom",
      "unit": "[in_us].[acr_us]",
      "material": "irrigation"
    }
  ],
  "farm": [
    {
      "schedule": [
        {
          "operation": "Annual Estimate",
          "duration": "1 year",
          "start": "2015-01-01"
        }
      ],
      "operations": [
        {
          "materials": [
            {
              "note": "",
              "unit": "us$",
              "amount": 32.75,
              "material": "fertilizer"
            },
            {
              "note": "",
              "unit": "us$",
              "amount": 97.09,
              "material": "pesticides"
            },
            {
              "note": "",
              "unit": "us$",
              "amount": 1,
              "material": "repair&lube"
            },
            {
              "note": "",
              "unit": "us$",
              "amount": 380.54,
              "material": "custom"
            },
            {
              "note": "",
              "unit": "us$",
              "amount": 133,
              "material": "other"
            },
            {
              "note": "",
              "unit": "h",
              "amount": 0.58,
              "material": "Labor-machine"
            },
            {
              "note": "",
              "unit": "h",
              "amount": 1.82,
              "material": "Labor-manual"
            },
            {
              "note": "",
              "unit": "[in_us].[acr_us]",
              "amount": 4.5,
              "material": "irrigation"
            },
            {
              "note": "",
              "unit": "[gal_us]",
              "amount": 1.15,
              "material": "fuel"
            }
          ],
          "operation": "Annual Estimate"
        }
      ],
      "unit": "[acr_us]",
      "size": "1",
      "commodity": "ALFALFA",
      "location": "06",
      "farm": "06/ALFALFA"
    }
  ]
}

},{}],"/Users/jrmerz/dev/cstars/AHB/farm-budgets-app/lib/shared/config/ca_alfalfa_swap_estimate.json":[function(require,module,exports){
module.exports={
  "prices": [
    {
      "unit": "us$/us$",
      "price": 1,
      "material": "estimate"
    },
    {
      "unit": "us$/[gal_us]",
      "price": 2.68,
      "material": "fuel"
    },
    {
      "unit": "us$/([in_us].[acr_us])",
      "price": 112.86,
      "material": "irrigation"
    },
    {
      "unit": "us$/h",
      "price": 9.42,
      "material": "Labor-machine"
    },
    {
      "unit": "us$/h",
      "price": 7.25,
      "material": "Labor-manual"
    }
  ],
  "materials": [
    {
      "description": "Manual Labor (minimum wage)",
      "class": "labor",
      "unit": "h",
      "material": "Labor-machine"
    },
    {
      "description": "Machine Labor (%130 of minimum)",
      "class": "labor",
      "unit": "h",
      "material": "Labor-manual"
    },
    {
      "description": "Dollar estimate",
      "class": "custom",
      "unit": "us$",
      "material": "estimate"
    },
    {
      "description": "Irrigation in AcIn per Ac",
      "class": "custom",
      "unit": "[in_us].[acr_us]",
      "material": "irrigation"
    },
    {
      "description": "Fuel for Equipment",
      "class": "fuel",
      "unit": "[gal_us]",
      "material": "fuel"
    }
  ],
  "farm": [
    {
      "schedule": [
        {
          "operation": "Annual Estimate",
          "duration": "1 year",
          "start": "2015-01-01"
        }
      ],
      "operations": [
        {
          "materials": [
            {
              "note": "repair&lube",
              "unit": "us$",
              "amount": 1,
              "material": "estimate"
            },
            {
              "note": "fertilizer",
              "unit": "us$",
              "amount": 32.75,
              "material": "estimate"
            },
            {
              "note": "pesticides",
              "unit": "us$",
              "amount": 97.09,
              "material": "estimate"
            },
            {
              "note": "other",
              "unit": "us$",
              "amount": 133,
              "material": "estimate"
            },
            {
              "note": "custom",
              "unit": "us$",
              "amount": 380.54,
              "material": "estimate"
            },
            {
              "note": "",
              "unit": "[gal_us]",
              "amount": 1.15,
              "material": "fuel"
            },
            {
              "note": "",
              "unit": "[in_us].[acr_us]",
              "amount": 4.5,
              "material": "irrigation"
            },
            {
              "note": "",
              "unit": "h",
              "amount": 0.58,
              "material": "Labor-machine"
            },
            {
              "note": "",
              "unit": "h",
              "amount": 1.82,
              "material": "Labor-manual"
            }
          ],
          "operation": "Annual Estimate"
        }
      ],
      "unit": "[acr_us]",
      "size": "1",
      "commodity": "ALFALFA",
      "location": "06",
      "farm": "06/ALFALFA"
    }
  ]
}

},{}],"/Users/jrmerz/dev/cstars/AHB/farm-budgets-app/lib/shared/config/default.json":[function(require,module,exports){
module.exports={
    "application":"farm-budgets"
}

},{}],"/Users/jrmerz/dev/cstars/AHB/farm-budgets-app/lib/shared/config/poplar-example.json":[function(require,module,exports){
module.exports={
  "prices": [
    {
      "unit": "us$/[qt_us]",
      "price": 5,
      "material": "2,4-D"
    },
    {
      "unit": "us$/h",
      "price": 90,
      "material": "Challenger Tractor--Capitol Cost"
    },
    {
      "unit": "us$/h",
      "price": 90,
      "material": "Semi-Tractor trailer--Capitol Cost"
    },
    {
      "unit": "us$/h",
      "price": 90,
      "material": "FR 6080 FH--Capitol Cost"
    },
    {
      "unit": "us$/h",
      "price": 90,
      "material": "Tandem Axle Truck--Capitol Cost"
    },
    {
      "unit": "us$/h",
      "price": 15,
      "material": "Cooler/van--Capitol Cost"
    },
    {
      "unit": "us$/h",
      "price": 35,
      "material": "Challenger Tractor--Labor"
    },
    {
      "unit": "us$/h",
      "price": 35,
      "material": "FR 6080 FH--Labor"
    },
    {
      "unit": "us$/h",
      "price": 35,
      "material": "Tandem Axle Truck--Labor"
    },
    {
      "unit": "us$/h",
      "price": 35,
      "material": "Semi-Tractor trailer--Labor"
    },
    {
      "unit": "us$/h",
      "price": 10,
      "material": "Cooler/van--Labor"
    },
    {
      "unit": "us$/h",
      "price": 1.2,
      "material": "Cooler/van"
    },
    {
      "unit": "us$/[gal_us]",
      "price": 2.81,
      "material": "Equipment Fuel"
    },
    {
      "unit": "us$/h",
      "price": 30,
      "material": "FR 6080 FH"
    },
    {
      "unit": "us$/[qt_us]",
      "price": 4,
      "material": "Glyphosate"
    },
    {
      "unit": "us$/[qt_us]",
      "price": 30,
      "material": "Goal 2XL"
    },
    {
      "unit": "us$/h",
      "price": 17,
      "material": "Laborer"
    },
    {
      "unit": "us$/1",
      "price": 0.08,
      "material": "Poplar Cutting"
    },
    {
      "unit": "us$/h",
      "price": 25,
      "material": "Support Truck--Capitol Cost"
    },
    {
      "unit": "us$/h",
      "price": 30,
      "material": "Support Truck--Labor"
    },
    {
      "unit": "us$/h",
      "price": 50,
      "material": "Tractor and sprayer"
    },
    {
      "unit": "us$/[qt_us]",
      "price": 7.5,
      "material": "Trifluralin"
    }
  ],
  "materials": [
    {
      "class": "fertilizer",
      "unit": "[qt_us]",
      "material": "2,4-D"
    },
    {
      "requires": [
        {
          "unit": "[gal_us]",
          "amount": 19.36,
          "material": "Equipment Fuel"
        },
        {
          "unit": "h",
          "amount": 1,
          "material": "Challenger Tractor--Capitol Cost"
        },
        {
          "unit": "h",
          "amount": 1,
          "material": "Challenger Tractor--Labor"
        }
      ],
      "class": "equipment",
      "unit": "h",
      "material": "Challenger Tractor"
    },
    {
      "requires": [
        {
          "unit": "h",
          "amount": 1,
          "material": "Cooler/van--Labor"
        },
        {
          "unit": "h",
          "amount": 1,
          "material": "Cooler/van--Capitol Cost"
        },
        {
          "unit": "[gal_us]",
          "amount": 0.96,
          "material": "Equipment Fuel"
        }
      ],
      "class": "equipment",
      "unit": "h",
      "material": "Cooler/van"
    },
    {
      "requires": [
        {
          "unit": "[gal_us]",
          "amount": 13.2,
          "material": "Equipment Fuel"
        },
        {
          "unit": "h",
          "amount": 1,
          "material": "FR 6080 FH--Labor"
        },
        {
          "unit": "h",
          "amount": 1,
          "material": "FR 6080 FH--Capitol Cost"
        }
      ],
      "class": "equipment",
      "unit": "h",
      "material": "FR 6080 FH"
    },
    {
      "class": "pesticide",
      "unit": "[qt_us]",
      "material": "Glyphosate"
    },
    {
      "class": "pesticide",
      "unit": "[qt_us]",
      "material": "Goal 2XL"
    },
    {
      "requires": [
        {
          "unit": "[qt_us]",
          "amount": 200,
          "material": "Glyphosate"
        },
        {
          "unit": "h",
          "amount": 96,
          "material": "Laborer"
        }
      ],
      "description": "Manual Application of herbicide",
      "class": "herbicide",
      "unit": "100.[acr_us]",
      "material": "herbicide - manual"
    },
    {
      "requires": [
        {
          "unit": "h",
          "amount": 192,
          "material": "Laborer"
        }
      ],
      "class": "labor",
      "unit": "100.[acr_us]",
      "material": "hoeing"
    },
    {
      "class": "labor",
      "unit": "h",
      "material": "Laborer"
    },
    {
      "requires": [
        {
          "unit": "[gal_us]",
          "amount": 13.2,
          "material": "Equipment Fuel"
        },
        {
          "unit": "h",
          "amount": 1,
          "material": "Large Tractor--Capitol Cost"
        },
        {
          "unit": "h",
          "amount": 1,
          "material": "Large Tractor--Labor"
        }
      ],
      "class": "equipment",
      "unit": "h",
      "material": "Large Tractor"
    },
    {
      "requires": [
        {
          "unit": "h",
          "amount": 1,
          "material": "Mid-size Tractor--Capitol Cost"
        },
        {
          "unit": "h",
          "amount": 1,
          "material": "Mid-size Tractor--Labor"
        },
        {
          "unit": "[gal_us]",
          "amount": 3.96,
          "material": "Equipment Fuel"
        }
      ],
      "class": "equipment",
      "unit": "h",
      "material": "Mid-size Tractor"
    },
    {
      "description": "Poplar cutting for planting",
      "class": "seed",
      "unit": "1",
      "material": "Poplar Cutting"
    },
    {
      "requires": [
        {
          "unit": "h",
          "amount": 1,
          "material": "Semi-Tractor trailer--Capitol Cost"
        },
        {
          "unit": "[gal_us]",
          "amount": 6.5,
          "material": "Equipment Fuel"
        },
        {
          "unit": "h",
          "amount": 1,
          "material": "Semi-Tractor trailer--Labor"
        }
      ],
      "class": "equipment",
      "unit": "h",
      "material": "Semi-Tractor trailer"
    },
    {
      "requires": [
        {
          "unit": "[gal_us]",
          "amount": 1.98,
          "material": "Equipment Fuel"
        },
        {
          "unit": "h",
          "amount": 1,
          "material": "Small Tractor--Labor"
        },
        {
          "unit": "h",
          "amount": 1,
          "material": "Small Tractor--Capitol Cost"
        }
      ],
      "class": "equipment",
      "unit": "h",
      "material": "Small Tractor"
    },
    {
      "requires": [
        {
          "unit": "h",
          "amount": 1,
          "material": "Support Truck--Capitol Cost"
        },
        {
          "unit": "h",
          "amount": 1,
          "material": "Support Truck--Labor"
        },
        {
          "unit": "[gal_us]",
          "amount": 1.76,
          "material": "Equipment Fuel"
        }
      ],
      "class": "equipment",
      "unit": "h",
      "material": "Support Truck"
    },
    {
      "requires": [
        {
          "unit": "h",
          "amount": 1,
          "material": "Tandem Axle Truck--Capitol Cost"
        },
        {
          "unit": "[gal_us]",
          "amount": 13.2,
          "material": "Equipment Fuel"
        },
        {
          "unit": "h",
          "amount": 1,
          "material": "Tandem Axle Truck--Labor"
        }
      ],
      "class": "equipment",
      "unit": "h",
      "material": "Tandem Axle Truck"
    },
    {
      "requires": [
        {
          "unit": "[gal_us]",
          "amount": 3.96,
          "material": "Equipment Fuel"
        },
        {
          "unit": "h",
          "amount": 1,
          "material": "Tractor and sprayer--Labor"
        }
      ],
      "class": "equipment",
      "unit": "h",
      "material": "Tractor and sprayer"
    },
    {
      "class": "pesticide",
      "unit": "[qt_us]",
      "material": "Trifluralin"
    }
  ],
  "farm": [
    {
      "schedule": [
        {
          "operation": "site prep",
          "duration": "3 mons",
          "start": "2015-06-01"
        },
        {
          "operation": "planting",
          "duration": "1 mon",
          "start": "2015-10-01"
        },
        {
          "operation": "crop care - yr0",
          "duration": "1 year",
          "start": "2015-11-01"
        },
        {
          "operation": "crop care - yr1",
          "duration": "1 year",
          "start": "2016-11-01"
        },
        {
          "unit": "[ston_us]/[acr_us]",
          "yield": 9,
          "operation": "harvest - yr2",
          "duration": "1 mon",
          "start": "2017-10-01"
        },
        {
          "operation": "crop care - post harvest",
          "duration": "1 year",
          "start": "2017-11-01"
        },
        {
          "operation": "crop care - established",
          "duration": "1 year",
          "start": "2018-11-01"
        },
        {
          "operation": "crop care - established",
          "duration": "1 year",
          "start": "2019-11-01"
        },
        {
          "unit": "[ston_us]/[acr_us]",
          "yield": 27.5,
          "operation": "harvest - established",
          "duration": "1 mon",
          "start": "2020-10-01"
        },
        {
          "operation": "crop care - post harvest",
          "duration": "1 year",
          "start": "2021-11-01"
        },
        {
          "operation": "crop care - established",
          "duration": "1 year",
          "start": "2022-11-01"
        },
        {
          "operation": "crop care - established",
          "duration": "1 year",
          "start": "2023-11-01"
        },
        {
          "unit": "[ston_us]/[acr_us]",
          "yield": 27.5,
          "operation": "harvest - established",
          "duration": "1 mon",
          "start": "2023-10-01"
        },
        {
          "operation": "crop care - post harvest",
          "duration": "1 year",
          "start": "2025-11-01"
        },
        {
          "operation": "crop care - established",
          "duration": "1 year",
          "start": "2026-11-01"
        },
        {
          "operation": "crop care - established",
          "duration": "1 year",
          "start": "2027-11-01"
        },
        {
          "unit": "[ston_us]/[acr_us]",
          "yield": 27.5,
          "operation": "harvest - established",
          "duration": "1 mon",
          "start": "2028-10-01"
        },
        {
          "operation": "crop care - post harvest",
          "duration": "1 year",
          "start": "2029-11-01"
        },
        {
          "operation": "crop care - established",
          "duration": "1 year",
          "start": "2030-11-01"
        },
        {
          "operation": "crop care - established",
          "duration": "1 year",
          "start": "2031-11-01"
        },
        {
          "unit": "[ston_us]/[acr_us]",
          "yield": 27.5,
          "operation": "harvest - established",
          "duration": "1 mon",
          "start": "2032-10-01"
        },
        {
          "operation": "restoration",
          "duration": "3 mons",
          "start": "2032-11-01"
        }
      ],
      "operations": [
        {
          "materials": [
            {
              "unit": "[acr_us]",
              "amount": 150,
              "material": "hoeing"
            },
            {
              "unit": "[acr_us]",
              "amount": 100,
              "material": "herbicide - manual"
            }
          ],
          "operation": "crop care - established"
        },
        {
          "materials": [
            {
              "note": "Transport Nursery to field",
              "unit": "h",
              "amount": 20,
              "material": "Semi-Tractor trailer"
            },
            {
              "unit": "1",
              "amount": 145000,
              "material": "Poplar Cutting"
            },
            {
              "unit": "h",
              "amount": 1080,
              "material": "Cooler/van"
            },
            {
              "unit": "h",
              "amount": 480,
              "material": "Laborer"
            }
          ],
          "operation": "planting"
        },
        {
          "materials": [
            {
              "unit": "[acr_us]",
              "amount": 25,
              "material": "herbicide - manual"
            },
            {
              "note": "2 times over 70 acres each.",
              "unit": "[acr_us]",
              "amount": 140,
              "material": "hoeing"
            }
          ],
          "operation": "crop care - yr0"
        },
        {
          "materials": [
            {
              "unit": "h",
              "amount": 35,
              "material": "FR 6080 FH"
            },
            {
              "unit": "h",
              "amount": 175,
              "material": "Tandem Axle Truck"
            },
            {
              "unit": "h",
              "amount": 35,
              "material": "Support Truck"
            }
          ],
          "operation": "harvest - established"
        },
        {
          "materials": [
            {
              "note": "Tillage",
              "unit": "h",
              "amount": 48,
              "material": "Small Tractor"
            },
            {
              "note": "5 times",
              "unit": "[acr_us]",
              "amount": 500,
              "material": "hoeing"
            },
            {
              "note": "3 times, 1/2 field",
              "unit": "[acr_us]",
              "amount": 150,
              "material": "herbicide - manual"
            },
            {
              "note": "Interplanting",
              "unit": "h",
              "amount": 96,
              "material": "Laborer"
            }
          ],
          "operation": "crop care - yr1"
        },
        {
          "materials": [
            {
              "note": "disking",
              "unit": "h",
              "amount": 12,
              "material": "Large Tractor"
            },
            {
              "note": "herbicide",
              "unit": "h",
              "amount": 20,
              "material": "Tractor and sprayer"
            },
            {
              "note": "herbicide",
              "unit": "[qt_us]",
              "amount": 200,
              "material": "Glyphosate"
            },
            {
              "note": "herbicide",
              "unit": "[qt_us]",
              "amount": 200,
              "material": "2,4-D"
            }
          ],
          "operation": "restoration"
        },
        {
          "materials": [
            {
              "note": "Post harvest clean up",
              "unit": "h",
              "amount": 30,
              "material": "Mid-size Tractor"
            },
            {
              "note": "Dormant Herbicide",
              "unit": "h",
              "amount": 8,
              "material": "Tractor and sprayer"
            },
            {
              "note": "Dormant Herbicide",
              "unit": "[qt_us]",
              "amount": 200,
              "material": "Glyphosate"
            },
            {
              "note": "Dormant Herbicide",
              "unit": "[qt_us]",
              "amount": 200,
              "material": "Trifluralin"
            },
            {
              "note": "post emergent",
              "unit": "[acr_us]",
              "amount": 100,
              "material": "herbicide - manual"
            }
          ],
          "operation": "crop care - post harvest"
        },
        {
          "materials": [
            {
              "note": "",
              "unit": "h",
              "amount": 26,
              "material": "FR 6080 FH"
            },
            {
              "unit": "h",
              "amount": 104,
              "material": "Tandem Axle Truck"
            },
            {
              "unit": "h",
              "amount": 26,
              "material": "Support Truck"
            }
          ],
          "operation": "harvest - yr1"
        },
        {
          "materials": [
            {
              "note": "Initial Spraying",
              "unit": "h",
              "amount": 3,
              "material": "Tractor and sprayer"
            },
            {
              "note": "Initial Spraying",
              "unit": "[qt_us]",
              "amount": 100,
              "material": "Glyphosate"
            },
            {
              "note": "Initial Spraying",
              "unit": "[qt_us]",
              "amount": 125,
              "material": "Goal 2XL"
            },
            {
              "note": "Initial Tillage",
              "unit": "h",
              "amount": 20,
              "material": "Large Tractor"
            },
            {
              "note": "Ripping",
              "unit": "h",
              "amount": 10,
              "material": "Large Tractor"
            },
            {
              "note": "Row Marking",
              "unit": "h",
              "amount": 25,
              "material": "Large Tractor"
            },
            {
              "note": "herbicide - preemergent",
              "unit": "h",
              "amount": 25,
              "material": "Challenger Tractor"
            },
            {
              "note": "herbicide - preemergent",
              "unit": "[qt_us]",
              "amount": 50,
              "material": "Trifluralin"
            }
          ],
          "operation": "site prep"
        }
      ],
      "unit": "[acr_us]",
      "size": "100",
      "commodity": "POPLAR",
      "location": "06113",
      "farm": "clarksburg"
    }
  ]
}

},{}],"/Users/jrmerz/dev/cstars/AHB/farm-budgets-app/lib/shared/index.js":[function(require,module,exports){
'use strict';

/**
 *  Namespace module
 *  Exposes other modules
 **/

var materialController = require('./materialController');
var operationController = require('./operationController');
operationController.init(materialController);
materialController.init(operationController);

var examples = {
  // database formatted
  db : {
    'default' : require('./config/default'),
    'alfalfa (CA)': require('./config/ca_alfalfa_swap'),
    'alfalfa Estimates' : require('./config/ca_alfalfa_swap_estimate'),
    'poplar bad' : require('./config/poplar-example')
  },
  // application formatted, probably from the 'json dump'
  app : {
    'poplar good' : require('./config/app/poplar'),
    'alfalfa - jm' : require('./config/app/alfalfa')
  }
};

// tmp for now
var fixed = ['Estimate', 'Taxes','Insurance','Capitol Cost Recover'];
for( var i = 0; i < fixed.length; i++ ) {
  materialController.add({
    name : fixed[i],
    price : 1,
    units : 'us$',
    fixed : true,
    description : 'Provide fixed cost for complex material'
  },{
    noEvent : true
  });
}

module.exports = {
  utils : require('./utils')(operationController, materialController),
  operationController : operationController,
  materialController : materialController,
  transform : require('./transform'),
  examples : examples,
  ucum : require('ucum.js'),
  units : require('./units')
};

},{"./config/app/alfalfa":"/Users/jrmerz/dev/cstars/AHB/farm-budgets-app/lib/shared/config/app/alfalfa.json","./config/app/poplar":"/Users/jrmerz/dev/cstars/AHB/farm-budgets-app/lib/shared/config/app/poplar.json","./config/ca_alfalfa_swap":"/Users/jrmerz/dev/cstars/AHB/farm-budgets-app/lib/shared/config/ca_alfalfa_swap.json","./config/ca_alfalfa_swap_estimate":"/Users/jrmerz/dev/cstars/AHB/farm-budgets-app/lib/shared/config/ca_alfalfa_swap_estimate.json","./config/default":"/Users/jrmerz/dev/cstars/AHB/farm-budgets-app/lib/shared/config/default.json","./config/poplar-example":"/Users/jrmerz/dev/cstars/AHB/farm-budgets-app/lib/shared/config/poplar-example.json","./materialController":"/Users/jrmerz/dev/cstars/AHB/farm-budgets-app/lib/shared/materialController/index.js","./operationController":"/Users/jrmerz/dev/cstars/AHB/farm-budgets-app/lib/shared/operationController/index.js","./transform":"/Users/jrmerz/dev/cstars/AHB/farm-budgets-app/lib/shared/transform/index.js","./units":"/Users/jrmerz/dev/cstars/AHB/farm-budgets-app/lib/shared/units/index.js","./utils":"/Users/jrmerz/dev/cstars/AHB/farm-budgets-app/lib/shared/utils/index.js","ucum.js":"/Users/jrmerz/dev/cstars/AHB/farm-budgets-app/node_modules/ucum.js/ucum.js"}],"/Users/jrmerz/dev/cstars/AHB/farm-budgets-app/lib/shared/materialController/index.js":[function(require,module,exports){
'use strict';
/**
 * keeps track of materials, prices and complex materials.  mostly for client app.
 **/

 var events = require('events').EventEmitter;
 var units = require('../units');
 events = new events();
 events.setMaxListeners(1000);

var data = {
 materials : {},
 complex : {}
};
var operationController;

function init(controller) {
  operationController = controller;
}

function remove(name) {
  if( data.materials[name] ) {
    delete data.materials[name];
    events.emit('material-removed', {
      material : name
    });
    return success();
  } else if( data.complex[name] ) {
    delete data.complex[name];
    events.emit('material-removed', {
      material : name
    });
    return success();
  }

  return setError('material '+name+' does not exist');
}

// bulk add/update items with only one recalc
function bulkAdd(materials, options) {
  var addOptions = {}, i;
  for( var key in options ) {
    addOptions[key] = options;
  }

  addOptions.noRecalc = true;
  addOptions.noEvent = true;

  var responses = {};
  for( i = 0; i < materials.length; i++ ) {
    responses[materials[i].name] = add(materials[i], addOptions);
  }

  // now just recalc once
  recalc();
  operationController.recalc();

  for( i = 0; i < materials.length; i++ ) {
    if( responses[materials[i].name].error ) {
      continue;
    }
    responses[materials[i].name].bluk = true;
    events.emit('material-update', responses[materials[i].name]);
  }

  return responses;
}

function add(material, options) {
  if( !options ) {
    options = {};
  }

  if( data.materials[material.name] && !options.replace ) {
    return setError(material.name, 'material already exists');
  } else if( data.complex[material.name] && !options.replace ) {
    return setError(material.name, 'material already exists');
  }

  var isNew = false;
  if( !data.materials[material.name] && !data.complex[material.name] ) {
    isNew = true;
  }

  if( material.type === 'complex' ) {
    data.complex[material.name] = material;
  } else {
    material.type = 'simple';
    data.materials[material.name] = material;
  }

  if( options.rename ) {
    remove(options.rename);
  }

  if( !options.noRecalc ) {
    recalc();
  }

  var response = {
    material : material,
    isNew : isNew,
    replaced : options.rename,
    flag : options.flag, // let the caller pass it's own flags
    success : true
  };

  if( !options.noEvent ) {
    events.emit('material-update', response);
  }

  return response;
}

function get(name) {
  if( !name ) {
    return data;
  }

  if( data.materials[name] ) {
    return data.materials[name];
  } else if( data.complex[name] ) {
    return data.complex[name];
  }

  return setError(name, name+' is not in the material list');
}

function find(txt, ignore) {
  var re = new RegExp('.*'+txt+'.*', 'i');
  var results = [], key;

  for( key in data.materials ) {
    if( key.match(re) && key !== ignore ) {
      results.push(data.materials[key]);
    }
  }
  for( key in data.complex ) {
    if( key.match(re) && key !== ignore  ) {
      results.push(data.complex[key]);
    }
  }

  for( var i = 0; i < results.length; i++ ) {
    if( results[i].name === txt ) {
      var m = results.splice(i, 1)[0];
      results.splice(0,0,m);
      break;
    }
  }

  return results;
}

// recalc all complex material costs
function recalc() {
  var t = new Date().getTime();

  var material;

  for( material in data.complex ) {
    data.complex[material].price = null;
  }

  for( material in data.complex ) {
    var m = data.complex[material];

    if( m.price !== null ) {
        continue;
    }
    m.price = _recalc(m, [m.name]);
  }

  console.log('Material Recalc: '+(new Date().getTime() - t)+'ms');
}

function _recalc(material, materialChain){
  var price = 0;

  for( var key in material.materials ) {
    var m = get(key);

    if( m.error ) {
      material.materials[key].error = m.error;
      continue;
    }
    material.materials[key].error = null;

    if( m.price === null && m.type === 'complex' ) {
      // make sure no recursion
      // TODO: should probably add error to stack if issue.
      if( materialChain.indexOf(m.name) === -1 ) {
        m.price = _recalc(m, extendChain(materialChain, m.name));
      } else {
        // BADNESS
        console.log('Recusive materials found, ignoring: '+materialChain.join('i')+' && '+m.name);
      }
    }

    var value = units.calculateComplexPrice(m, material.materials[m.name], material);

    if( value.error ) {
      material.materials[m.name].price = 0;
      material.materials[m.name].error = value;
    } else {
      material.materials[m.name].price = value.value;
    }

    price += material.materials[m.name].price;

  }
  return price;
}

function extendChain(chain, m) {
  var newChain = chain.slice();
  newChain.push(m);
  return chain;
}

function materialRecalc(material) {
  if( typeof material !== 'object' ) {
    return;
  } else if( material.type !== 'complex' ) {
    return;
  }
  material.price = _recalc(material);
}

function getErrors() {
  var errors = [];

  for( var m in data.materials ) {
    if( data.materials[m].error ) {
      errors.push(data.materials[m]);
    }
  }

  for( var i in data.complex ) {
    if( data.complex[i].error ) {
      errors.push(data.complex[i]);
    } else {
      for( m in data.complex[i].materials ) {
        if( data.complex[i].materials[m].error ) {
          errors.push(data.complex[i]);
          break;
        }
      }
    }


    for( m in data.complex[i].materials ) {
      var material = get(m);
      if( material.error ) {
        material.from = data.complex[i];
        errors.push(material);
      }
    }
  }

  return errors;
}


function success() {
  return {success: true};
}

function setError(name, msg) {
  return {
    name : name,
    error : true,
    message : msg
  };
}


module.exports = {
  init : init,
  add : add,
  get : get,
  remove : remove,
  find : find,
  getErrors : getErrors,
  bulkAdd : bulkAdd,
  on : function(event, listener){
    events.on(event, listener);
  },
  recalc : recalc,
  materialRecalc : materialRecalc
};

},{"../units":"/Users/jrmerz/dev/cstars/AHB/farm-budgets-app/lib/shared/units/index.js","events":"/Users/jrmerz/dev/cstars/AHB/farm-budgets-app/node_modules/grunt-browserify/node_modules/browserify/node_modules/events/events.js"}],"/Users/jrmerz/dev/cstars/AHB/farm-budgets-app/lib/shared/model/unit_math/index.js":[function(require,module,exports){
"use strict";
var ucum=require('ucum.js');

// These throw errs, and need to be in try catch
function multiply(a,b,a_names,b_names) {
  var an={value:"value",unit:"unit"}
  , bn={value:"value",unit:"unit"}
  , parsed
    , unit
    , pre=[]
    , mult={}
    ;

    if (a_names) {
      if (a_names.unit) an.unit=a_names.unit;
      if (a_names.value) an.value=a_names.value;
    }
    if (b_names) {
      if (b_names.unit) bn.unit=b_names.unit;
      if (b_names.value) bn.value=b_names.value;
    }

  parsed = ucum.parse('('+[a[an.unit]+').('+b[bn.unit]]+')');
  mult.value=((a[an.value])?a[an.value]:1)*((b[bn.value])?b[bn.value]:1)*parsed.value;

  // Convert unit back
  for (unit in parsed.units) {
    pre.push(unit+parsed.units[unit]);
  }
  mult.unit=pre.join('.');
  return mult;
}

function multiply_to_unitless(a,b,an,bn) {
  var mult=unit_mulitply(a,b,an,bn);
  if (mult.unit !== {}) {
    throw m+" is not unitless";
  }
  return mult;
}

function sum(list,names) {
  var n={value:"value",unit:"unit"}
  , sum
  , i
  , i_unit
  ;

  if (names) {
    if (names.unit) n.unit=names.unit;
    if (names.value) n.value=names.value;
  }
  sum =(list.length > 0)?{value:list[0][n.value],unit:list[0][n.unit]}:{value:0,unit:{}};
  for (i=1;i<list.length;i++) {
    i_unit= ucum.convert(list[i][n.value],list[i][n.unit],sum.unit);
    sum.value+=i_unit.value;
  }
  return {'value':sum.value,'unit':sum.unit};
}


function cleanDollars(units) {
  if( units === undefined ) {
    return '1';
  }
  return units.replace(/(us)?\$/g, '1');
}


module.exports = {
   sum : sum,
   multiply : multiply,
   multiply_to_unitless : multiply_to_unitless,
   cleanDollars : cleanDollars
 };

},{"ucum.js":"/Users/jrmerz/dev/cstars/AHB/farm-budgets-app/node_modules/ucum.js/ucum.js"}],"/Users/jrmerz/dev/cstars/AHB/farm-budgets-app/lib/shared/operationController/index.js":[function(require,module,exports){
'use strict';
/**
 * keeps track of materials, prices and complex materials.  mostly for client app.
 **/
var uuid = require('node-uuid');
var units = require('../units');
var utils = require('./utils');
var events = require('events').EventEmitter;
events = new events();
events.setMaxListeners(1000);

var total = 0;
var data = [], materialController, lastRecalcMsg;

function init(controller) {
  materialController = controller;
  materialController.on('material-update', handleMaterialUpdates);
  utils.init(this);
}

function remove(name) {
  var op;

  if( typeof name === 'object' && data.indexOf(name) > -1 ) {
    op = data.splice(data.indexOf(name), 1)[0];
    events.emit('operation-removed', {operation: op});

    return success();
  } else {
    for( var i = 0; i < data.length; i++ ) {
      if( data[i].name === name  ) {
        op = data.splice(i, 1)[0];
        events.emit('operation-removed', {operation: op});
        return success();
      }
    }
  }

  return setError('operation '+(typeof name === 'object' ? name.name : name)+' does not exist');
}

function add(operation, options) {
  if( !options ) {
    options = {};
  }

  var op = get(operation.name);
  if( !op.error && !options.replace ) {
    return setError(operation.name, 'operation already exists');
  }

  if( !operation.materials ) {
    operation.materials = [];
  }
  for( var i = 0; i < operation.materials.length; i++ ) {
    operation.materials[i].id = uuid.v4();
  }

  var isNew = false;
  if( op.error ) {
    isNew = true;
    data.push(operation);
  } else {
    data[data.indexOf(op)] = operation;
  }



  if( options.rename ) {
    remove(options.rename);
  }

  if( !options.noRecalc ) {
    recalc();
  }

  var response = {
    operation : operation,
    isNew : isNew,
    replaced : options.rename,
    flag : options.flag, // let the caller pass it's own flags
    success : true
  };

  if( !options.noEvent ) {
    events.emit('operation-update', response);
  }

  return response;
}

// bulk add/update items with only one recalc
function bulkAdd(operations, options) {
  var addOptions = {}, i;
  for( var key in options ) {
    addOptions[key] = options;
  }

  addOptions.noRecalc = true;
  addOptions.noEvent = true;

  var responses = {};
  for( i = 0; i < operations.length; i++ ) {
    responses[operations[i].name] = add(operations[i], addOptions);
  }

  // now just recalc once
  recalc();

  for( i = 0; i < operations.length; i++ ) {
    if( responses[operations[i].name].error ) {
      continue;
    }
    responses[operations[i].name].bluk = true;
    events.emit('operation-update', responses[operations[i].name]);
  }

  return responses;
}

function get(name) {
  if( !name ) {
    return data;
  }

  for( var i = 0; i < data.length; i++ ) {
    if( data[i].name === name ) {
      return data[i];
    }
  }

  return setError(name+' is not in the material list');
}

function find(txt, ignore) {
  var re = new RegExp('.*'+txt+'.*', 'i');
  var results = [], key;

  for( var i = 0; i < data.length; i++ ) {
    if( data[i].name.match(re) && data[i].name !== ignore ) {
      results.push(data[i]);
    }
  }

  return results;
}

// recalc all complex material costs
function recalc() {
  var t = new Date().getTime();

  var operation, messages = [];
  total = 0;
  var range = {
    start : null,
    stop : null,
    all : []
  };

  for( var i = 0; i < data.length; i++ ) {
    operation = data[i];
    var newMessages = operationRecalc(operation);
    for( var j = 0; j < newMessages.length; j++ ) {
      messages.push(newMessages[j]);
    }

    var scheduled = operation.schedule ? operation.schedule.length : 0;

    if( !operation.schedule ) {
      messages.push({
        index : i,
        operation : operation.name,
        warning : warn('No schedule set')
      });
    } else {
      updateScheduleRange(operation.schedule, range, operation.name);
    }

    operation.total = scheduled * operation.subtotal;
    total += operation.total;
  }


  var spendingByMonth = utils.calculatePerMonth(range);

  console.log('Operation Recalc: '+(new Date().getTime() - t)+'ms');

  events.emit('total-update', {
    total : total,
    range : range,
    spendingByMonth : spendingByMonth
  });

  lastRecalcMsg = messages;
  return messages;
}

function operationRecalc(operation) {
  var materialDef, materialImpl, opTotal = 0;
  var messages = [];

  for( var i = 0; i < operation.materials.length; i++ ) {
    materialImpl = operation.materials[i];
    materialImpl.error = null;

    materialDef = materialController.get(materialImpl.name);

    // was a specified material not found?
    if( materialDef.error ) {
      materialImpl.error = materialDef; // this is actually the error response object
      messages.push({
        id : materialImpl.id,
        material : materialImpl.name,
        operation : operation.name,
        error : materialDef
      });
      continue;
    }

    // was a material amount not specified?
    if( typeof materialDef.price !== 'number' || isNaN(materialDef.price) ) {
      materialImpl.error = setError(materialDef.name+' found but price is not a number.');
      messages.push({
        id : materialImpl.id,
        material : materialImpl.name,
        operation : operation.name,
        warning : materialImpl.error
      });
      continue;
    }

    // was a material amount not specified?
    if( materialImpl.amount === undefined ) {
      materialImpl.warning = warn('No amount set.  Setting to 1.');
      messages.push({
        id : materialImpl.id,
        material : materialImpl.name,
        operation : operation.name,
        warning : materialImpl.warning
      });
      materialImpl.amount = 1;
    }

    var value = units.calculateOpMaterialPrice(materialDef, materialImpl);
    if( value.error ) {
      materialImpl.price = 0;
      materialImpl.error = value;
    } else {
      materialImpl.price = value.value;
    }

    // did something bad happen in price calculation?
    if( isNaN(materialImpl.price) ) {
      materialImpl.error = setError('Price calculated to NaN.  Material not included in total.');
      messages.push({
        operation : operation.name,
        material : materialImpl.name,
        id : materialImpl.id,
        error : materialImpl.error
      });
      continue;
    }

    opTotal += materialImpl.price;
  }

  operation.subtotal = opTotal;

  return messages;
}


function updateScheduleRange(schedule, range, name) {
  var parts, date;
  schedule.forEach(function(d){
    parts = d.date.split('-');
    date = new Date(parseInt(parts[0]), parseInt(parts[1])-1, parseInt(parts[2]));

    range.all.push({
      date : date,
      length : d.length,
      units : d.units,
      name : name
    });

    if( range.start === null ) {
      range.start = date;
    } else if( range.start.getTime() > date.getTime() ) {
      range.start = date;
    }

    if( range.stop === null ) {
      range.stop = date;
    } else if( range.stop.getTime() < date.getTime() ) {
      range.stop = date;
    }
  });
}

function handleMaterialUpdates(e) {
  if( e.bluk ) {
    return; // ignore event from bluk updates
    // bluk updater will manually poke recalc();
  }

  var material = e.material;
  var replaced = e.replaced;

  recalc();

  for( var i = 0; i < data.length; i++ ) {
    var operation = data[i];
    var fireChange = false;

    for( var j = 0; j < operation.materials.length; j++ ) {
      var materialImpl = operation.materials[j];

      // update any renames
      if( materialImpl.name === replaced ) {
        materialImpl.name = material.name;
        fireChange = true;

      // look to see if this operation has the updated material
    } else if( materialImpl.name === material.name ) {
        fireChange = true;
      }
    }

    if( fireChange ) {
      events.emit('operation-update', {
        operation: operation
      });
    }
  }
}

function getLastRecalcMsg() {
  return lastRecalcMsg;
}

function success() {
  return {success: true};
}

function setError(msg) {
  return {
    error : true,
    message : msg
  };
}

function warn(msg) {
  return {
    warning : true,
    message : msg
  };
}


module.exports = {
  add : add,
  get : get,
  remove : remove,
  bulkAdd : bulkAdd,
  find : find,
  on : function(event, listener){
    events.on(event, listener);
  },
  recalc : recalc,
  init : init,
  getLastRecalcMsg : getLastRecalcMsg,
  addUpdateMaterial : utils.addUpdateMaterial
};

},{"../units":"/Users/jrmerz/dev/cstars/AHB/farm-budgets-app/lib/shared/units/index.js","./utils":"/Users/jrmerz/dev/cstars/AHB/farm-budgets-app/lib/shared/operationController/utils.js","events":"/Users/jrmerz/dev/cstars/AHB/farm-budgets-app/node_modules/grunt-browserify/node_modules/browserify/node_modules/events/events.js","node-uuid":"/Users/jrmerz/dev/cstars/AHB/farm-budgets-app/node_modules/node-uuid/uuid.js"}],"/Users/jrmerz/dev/cstars/AHB/farm-budgets-app/lib/shared/operationController/utils.js":[function(require,module,exports){
'use strict';

var uuid = require('node-uuid');
var operationController;
var msPerDay = 86400000;

function init(controller) {
  operationController = controller;
}

function addUpdateMaterial(operation, materialImpl) {
  if( !materialImpl.id ) {
    materialImpl.id = uuid.v4();
    operation.materials.push(materialImpl);
    return {success:true, message: 'added'};
  }

  for( var i = 0; i < operation.materials.length; i++ ) {
    if( operation.materials[i].id === materialImpl.id ) {
      operation.materials[i] = materialImpl;
      return {success:true, message: 'updated'};
    }
  }

  operation.materials.push(materialImpl);
  return {success:true, message: 'added'};
}

function calculatePerMonth(range) {

  var numMonths = getNumMonths(range);

  var months = [];
  var last = range.start;
  months.push({
    month : toMonthString(last),
    total : 0
  });

  for( var i = 1; i < numMonths; i++ ) {
    last = nextMonth(last);

    months.push({
      month : toMonthString(last),
      total : 0
    });
  }

  var operations = operationController.get();
  for( var z = 0; z < operations.length; z++ ) {
    var operation = operations[z];
    if( !operation.schedule ) {
      continue;
    }

    for( var j = 0; j < operation.schedule.length; j++ ) {
      var date = operation.schedule[j];
      var d = toDate(date.date);
      var index = getMonthIndex(toMonthString(d), months);
      var length = getIntervalTime(date);

      for( i = 0; i < length; i++ ) {
        if( months.length <= i+index ) {
          months.push({
            month : toMonthString(d),
            total : 0
          });
        }

        months[i+index].total += (operation.subtotal / length);
        months[i+index][operation.name] = operation.subtotal / length;
      }
    }
  }

  return months;
}

function getMonthIndex(month, months) {
  var t = new Date().getTime();
  for( var i = 0; i < months.length; i++ ) {
    if( months[i].month === month ) {
      return i;
    }
  }
  return 0;
}

function toDate(dateStr) {
  var parts = dateStr.split('-');
  return new Date(parseInt(parts[0]), parseInt(parts[1]), parseInt(parts[2]));
}

function toMonthString(date) {
  if( !date ) {
    return '1/1900';
  }
  return (date.getMonth()+1)+'/'+(date.getYear()+1900);
}

function nextMonth(date) {
  return new Date(date.getYear()+1900, date.getMonth()+1, date.getDate());
}

function getNumMonths(range) {
  if( !range.stop || !range.start ) {
    return 1;
  }

  var diff = range.stop.getTime() - range.start.getTime();
  if( diff < 86400000 * 30 ) {
    diff = 86400000 * 30;
  }

  var days = diff / 86400000;
  return Math.ceil(days / 30);
}

function getIntervalTime(date) {
  var l = parseInt(date.length);
  if( date.units === 'year' ) {
    return l * 12;
  } else if( date.units === 'month' ) {
    return l;
  } else {
    return 1;
  }
}

module.exports = {
  init : init,
  calculatePerMonth : calculatePerMonth,
  addUpdateMaterial : addUpdateMaterial
};

},{"node-uuid":"/Users/jrmerz/dev/cstars/AHB/farm-budgets-app/node_modules/node-uuid/uuid.js"}],"/Users/jrmerz/dev/cstars/AHB/farm-budgets-app/lib/shared/transform/index.js":[function(require,module,exports){
'use strict';

/**
 * Transform the plv8 object description to app object description.
 * in the end, this shouldn't do much.  just a little app sugar.
 **/

 module.exports = function(config) {
   var app = {
     classes : {},
     materials : [],
     operations : [],
     farm : {}
   };

   if( config.materials ) {
     app.materials = getMaterials(config.materials);
     app.classes = getClasses(app.materials);
   }
   if( config.prices ) {
     joinPrices(app.materials, config.prices);
   }

   if( config.farm ) {
     var farm = config.farm[0];
     app.farm = getFarm(farm);

     if( farm.operations ) {
       app.operations = getOperations(farm.operations);
     }
     if( farm.schedule ) {
       joinSchedule(app.operations, farm.schedule);
     }
   }

   return app;
 };

 function joinSchedule(operations, schedules) {
   for( var i = 0; i < schedules.length; i++ ) {
     var schedule = schedules[i];
     for( var j = 0; j < operations.length; j++ ) {
       if( schedule.operation === operations[j].name ) {
         var parts = schedule.duration.split(' ');

         if( parts[1].match(/mon/) ) {
           parts[1] = 'month';
         } else if ( parts[1].match(/year/) ) {
           parts[1] = 'year';
         } else {
           parts[1] = 'day';
         }

        operations[j].schedule.push({
          date : schedule.start,
          length : parts[0],
          units : parts[1]
        });

        break;
       }
     }
   }
 }

function joinPrices(materials, prices) {
  for( var i = 0; i < prices.length; i++ ) {
    var price = prices[i];
    var found = false;

    for( var j = 0; j < materials.length; j++ ) {
      if( materials[j].name === price.material ) {

        if( materials[j].type === 'complex' ) {
          materials[j].materials.Estimate = {
            units : 'us$',
            amount : price.price
          };
        } else {
          materials[j].price = price.price;
          materials[j].units = price.unit;
        }

        found = true;
        break;

      }
    }

    if( !found ) {
      /*console.log({
        name : price.material,
        price : price.price,
        units : price.unit
      });*/

      materials.push({
        name : price.material,
        price : price.price,
        units : price.unit
      }); // TODO: some materials do not seem to appear in material list
    }

  }
}

function getMaterials(info) {
  var materials = [];

  info.forEach(function(i){
    i.name = i.material;
    delete i.material;

    i.units = i.unit;
    delete i.unit;

    if( !i.requires ) {
      materials.push(i);
      return;
    }

    i.type = 'complex';
    i.materials = {};

    for( var j = 0; j < i.requires.length; j++ ) {
      i.materials[i.requires[j].material] = {
        amount : i.requires[j].amount,
        originalAmount : i.requires[j].amount,
        units : i.requires[j].unit
      };
    }

    delete i.requires;

    materials.push(i);
  });

  return materials;
}

function getOperations(info) {
  var ops = [];

  info.forEach(function(i){
    var op = {
      name : i.operation,
      materials : [],
      units : '[acr_us]',
      schedule : []
    };

    for( var j = 0; j < i.materials.length; j++ ) {
      i.materials[j].units = i.materials[j].unit;
      delete i.materials[j].unit;
      
      i.materials[j].name = i.materials[j].material;
      delete i.materials[j].material;

      op.materials.push(i.materials[j]);
    }

    ops.push(op);
  });

  return ops;
}

function getFarm(info) {
  var farm = {};
  for( var key in info ) {
    if( typeof info[key] === 'string' ) {
      farm[key] = info[key];
    }
  }
  return farm;
}

function getClasses(materials) {
  var classes = {};

  materials.forEach(function(material){
    if( classes[material.class] ) {
      classes[material.class].push(material.name);
    } else {
      classes[material.class] = [material.name];
    }
  });

  return classes;
}

},{}],"/Users/jrmerz/dev/cstars/AHB/farm-budgets-app/lib/shared/units/definitions.js":[function(require,module,exports){
/**
 * helper file for things like UI selectors
 **/

var time = [
  {
    name : 'minute',
    symbol : 'min'
  },
  {
    name : 'hour',
    symbol : 'h'
  },
  {
    name : 'day',
    symbol : 'd'
  },
  {
    name : 'year',
    symbol : 'a'
  }
];

var length = [
  {
    name : 'centimeter',
    symbol : 'cm',
  },
  {
    name : 'inch',
    symbol : '[in_us]',
    accepted : ['in']
  },
  {
    name : 'foot',
    symbol : '[ft_us]',
    accepted : ['ft']
  },
  {
    name : 'meter',
    symbol : 'm',
  },
  {
    name : 'yard',
    symbol : '[yd_us]',
    accepted : ['yd']
  },
  {
    name : 'mile',
    symbol : '[mi_us]',
    accepted : ['mi']
  },
  {
    name : 'kilometer',
    symbol : 'km',
  }
];

var area = [
  {
    name : 'hectare',
    symbol : 'har',
    accept : ['ar']
  },
  {
    name : 'acre',
    symbol : '[acr_us]',
    accepted : ['ac']
  }
];

var weight = [
  {
    name : 'ounce',
    symbol : '[oz_av]',
    accepted : ['oz']
  },
  {
    name : 'pound',
    symbol : '[lb_av]',
    accepted : ['lb']
  }
];

var volume = [
  {
    name : 'cup',
    symbol : '[cup_us]'
  },
  {
    name : 'quart',
    symbol : '[qt_us]',
    accepted : ['qt']
  },
  {
    name : 'pint',
    symbol : '[pt_us]',
    accepted : ['pt']
  },
  {
    name : 'gallon',
    symbol : '[gal_us]',
    accepted : ['gal']
  },
  {
    name : 'fluid ounce',
    symbol : '[foz_us]',
    accepted : ['floz']
  }
];

var price = [
  {
    name : 'dollar',
    symbol : '',
    accepted : ['$', 'us$']
  }
];

module.exports = {
  price : price,
  volume : volume,
  weight : weight,
  time : time,
  length : length,
  area : area
}

},{}],"/Users/jrmerz/dev/cstars/AHB/farm-budgets-app/lib/shared/units/index.js":[function(require,module,exports){
'use strict';

var definitions = require('./definitions');
var math = require('../model/unit_math');
var ucum = require('ucum.js');

var lookup = {};
for( var type in definitions ) {
  var array = definitions[type];

  for( var i = 0; i < array.length; i++ ) {
    array[i].type = type;

    lookup[array[i].name] = array[i];
    if( array[i].symbol ) {
      lookup[array[i].symbol] = array[i];
    }
    if( array[i].accepted ) {
      for( var j = 0; j < array[i].accepted.length; j++ ) {
        lookup[array[i].accepted[j]] = array[i];
      }
    }
  }
}

// get label for name.  mostly for getting us$ as $ or [us_gal] as gallon.
function getLabel(name, short) {
  var parts, label;

  if( name === undefined ) {
    return '';
  }

  if( name.indexOf('/') > -1 ) {
    parts = name.split('/');

    label = [];
    parts.forEach(function(p){
      label.push(getLabel(p, short));
    });

    return label.join('/');
  }

  if( name.indexOf('.') > -1 ) {
    parts = name.split('.');

    label = [];
    parts.forEach(function(p){
      label.push(getLabel(p, short));
    });

    return label.join('*');
  }

  var txt = name.toLowerCase();
  if( lookup[txt] ) {
    if( short ) {
      return lookup[txt].accepted ? lookup[txt].accepted[0] : lookup[txt].symbol;
    }
    return lookup[txt].name;
  }
  return name;
}

// get units of same type
function getLikeUnits(name) {
  var txt = name.toLowerCase();
  if( !lookup[txt] ) {
    return [];
  }

  return definitions[lookup[txt].type];
}

function invert(units) {
  units = math.cleanDollars(units);
  var result;
  try {
    result = ucum.parse('1/('+units+')');
  } catch(e) {
    return units;
  }

  var d = [], n = [];
  for( var key in result.units ) {
    if( result.units[key] === -1 ) {
      d.push(key);
    } else {
      n.push(key);
    }
  }

  if( result.value > 1 ) {
    n.push(result.value);
  } else if ( result.value < 0 ) {
    d.push(1 / result.value);
  }

  units = n.join('.');

  if( units === '' ) {
    units = 'us$';
  }
  if( d.length > 0 ) {
    units += '/'+d.join('.');
  }

  return units;
}

function calculateOpMaterialPrice(materialDef, materialImpl) {
  var convert;

  // TODO: this is strange... mind is tired... is this correct?
  var units = materialDef.units;
  if( materialDef.type === 'complex' ) {
    units = '1/('+units+')';
  }

  convert = convertUnits(materialImpl.units, units);
  convert.debug2 = materialImpl.amount+' * '+materialDef.price+' * '+convert.value;
  convert.value = materialImpl.amount * materialDef.price * convert.value;

  return convert;
}

function calculateComplexPrice(materialDef, materialImpl, complexMaterial) {
  // TODO: this is strange... mind is tired... is this correct?
  var units = materialDef.units;
  if( materialDef.type === 'complex' ) {
    units = '1/('+units+')';
  }
  var convert = convertUnits(materialImpl.units, units);


  if( convert.error ) {
    return convert;
  } else if( Object.keys(convert.units).length > 1 ) {
    return {
      error: true,
      message : 'Units didn\'t cancel',
      math : materialImpl.units+' * '+materialDef.units
    };
  }

  convert.debug2 = materialImpl.amount+' * '+materialDef.price+' * '+convert.value;
  convert.value = materialImpl.amount * materialDef.price * convert.value;

  return convert;
}

function convertUnits(u1, u2) {
  var time = new Date().getTime();
  try {
    var t1 = math.cleanDollars(u1);
    var t2 = math.cleanDollars(u2);

    // try and see if we can fake it
    if( t2 === '1/'+t1 || t2 === '1/('+t1+')' || t1 === '1/'+t2 || t1 === '1/('+t2+')' || (t1 === '' && t2 === '') ) {
      return {
        value : 1,
        units : {},
        simple : true,
        debug : '('+t1+').('+t2+')'
      };
    }

    // we all blank units as dollars
    if( t1 === '' ) {
      t1 = 1;
    }
    if( t2 === '' ) {
      t2 = 1;
    }

    var tmp = '('+t1+').('+t2+')';
    //var t = ucum.canonicalize(tmp);
    var t = ucum.parse(tmp);
    t.debug = tmp;
    return t;
  } catch(e) {
    return {
      error : true,
      message : 'Unable to convert units',
      math : u1+' * '+u2,
      debug : '('+math.cleanDollars(u1)+').('+ math.cleanDollars(u2)+')'
    };
  }
}

/*
function convertUnits(u1, u2, u3) {
  try {
    var t =  ucum.canonicalize('('+math.cleanDollars(u1)+').('+ math.cleanDollars(u2)+').('+math.cleanDollars(u3)+')');
    t.debug = '('+math.cleanDollars(u1)+').('+ math.cleanDollars(u2)+').('+math.cleanDollars(u3)+')';
    return t;
  } catch(e) {
    return {
      error : true,
      message : 'Unable to convert units',
      math : u1+' * '+u2+' * '+u3,
      debug : '('+math.cleanDollars(u1)+').('+ math.cleanDollars(u2)+').('+math.cleanDollars(u3)+')'
    };
  }
}*/


module.exports = {
  invert : invert,
  convertUnits : convertUnits,
  getLabel : getLabel,
  getLikeUnits : getLikeUnits,
  math : math,
  calculateComplexPrice : calculateComplexPrice,
  calculateOpMaterialPrice : calculateOpMaterialPrice,
  lookup : lookup
};

},{"../model/unit_math":"/Users/jrmerz/dev/cstars/AHB/farm-budgets-app/lib/shared/model/unit_math/index.js","./definitions":"/Users/jrmerz/dev/cstars/AHB/farm-budgets-app/lib/shared/units/definitions.js","ucum.js":"/Users/jrmerz/dev/cstars/AHB/farm-budgets-app/node_modules/ucum.js/ucum.js"}],"/Users/jrmerz/dev/cstars/AHB/farm-budgets-app/lib/shared/utils/index.js":[function(require,module,exports){
'use strict';

var materialController, operationController;

module.exports = function(oControl, mControl) {
  operationController = oControl;
  materialController = mControl;

  return {
    getActiveMaterials : getActiveMaterials
  };
};

// get materials currently in use by operations controller
function getActiveMaterials() {
  var materials = [];

  var operations = operationController.get();
  operations.forEach(function(op){
    _getActiveMaterials(op, materials);
  });

  materials.sort();
  return materials;
}

function _getActiveMaterials(obj, list) {
  if( !obj.materials ) {
    return;
  }

  for( var name in obj.materials ) {
    var def = materialController.get(name);

    if( list.indexOf(def.name) === -1 ) {
      list.push(def.name);
    }

    if( def.type === 'complex' ) {
      _getActiveMaterials(def, list);
    }
  }
}

},{}],"/Users/jrmerz/dev/cstars/AHB/farm-budgets-app/node_modules/grunt-browserify/node_modules/browserify/node_modules/events/events.js":[function(require,module,exports){
// Copyright Joyent, Inc. and other Node contributors.
//
// Permission is hereby granted, free of charge, to any person obtaining a
// copy of this software and associated documentation files (the
// "Software"), to deal in the Software without restriction, including
// without limitation the rights to use, copy, modify, merge, publish,
// distribute, sublicense, and/or sell copies of the Software, and to permit
// persons to whom the Software is furnished to do so, subject to the
// following conditions:
//
// The above copyright notice and this permission notice shall be included
// in all copies or substantial portions of the Software.
//
// THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS
// OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF
// MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN
// NO EVENT SHALL THE AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM,
// DAMAGES OR OTHER LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR
// OTHERWISE, ARISING FROM, OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE
// USE OR OTHER DEALINGS IN THE SOFTWARE.

function EventEmitter() {
  this._events = this._events || {};
  this._maxListeners = this._maxListeners || undefined;
}
module.exports = EventEmitter;

// Backwards-compat with node 0.10.x
EventEmitter.EventEmitter = EventEmitter;

EventEmitter.prototype._events = undefined;
EventEmitter.prototype._maxListeners = undefined;

// By default EventEmitters will print a warning if more than 10 listeners are
// added to it. This is a useful default which helps finding memory leaks.
EventEmitter.defaultMaxListeners = 10;

// Obviously not all Emitters should be limited to 10. This function allows
// that to be increased. Set to zero for unlimited.
EventEmitter.prototype.setMaxListeners = function(n) {
  if (!isNumber(n) || n < 0 || isNaN(n))
    throw TypeError('n must be a positive number');
  this._maxListeners = n;
  return this;
};

EventEmitter.prototype.emit = function(type) {
  var er, handler, len, args, i, listeners;

  if (!this._events)
    this._events = {};

  // If there is no 'error' event listener then throw.
  if (type === 'error') {
    if (!this._events.error ||
        (isObject(this._events.error) && !this._events.error.length)) {
      er = arguments[1];
      if (er instanceof Error) {
        throw er; // Unhandled 'error' event
      }
      throw TypeError('Uncaught, unspecified "error" event.');
    }
  }

  handler = this._events[type];

  if (isUndefined(handler))
    return false;

  if (isFunction(handler)) {
    switch (arguments.length) {
      // fast cases
      case 1:
        handler.call(this);
        break;
      case 2:
        handler.call(this, arguments[1]);
        break;
      case 3:
        handler.call(this, arguments[1], arguments[2]);
        break;
      // slower
      default:
        len = arguments.length;
        args = new Array(len - 1);
        for (i = 1; i < len; i++)
          args[i - 1] = arguments[i];
        handler.apply(this, args);
    }
  } else if (isObject(handler)) {
    len = arguments.length;
    args = new Array(len - 1);
    for (i = 1; i < len; i++)
      args[i - 1] = arguments[i];

    listeners = handler.slice();
    len = listeners.length;
    for (i = 0; i < len; i++)
      listeners[i].apply(this, args);
  }

  return true;
};

EventEmitter.prototype.addListener = function(type, listener) {
  var m;

  if (!isFunction(listener))
    throw TypeError('listener must be a function');

  if (!this._events)
    this._events = {};

  // To avoid recursion in the case that type === "newListener"! Before
  // adding it to the listeners, first emit "newListener".
  if (this._events.newListener)
    this.emit('newListener', type,
              isFunction(listener.listener) ?
              listener.listener : listener);

  if (!this._events[type])
    // Optimize the case of one listener. Don't need the extra array object.
    this._events[type] = listener;
  else if (isObject(this._events[type]))
    // If we've already got an array, just append.
    this._events[type].push(listener);
  else
    // Adding the second element, need to change to array.
    this._events[type] = [this._events[type], listener];

  // Check for listener leak
  if (isObject(this._events[type]) && !this._events[type].warned) {
    var m;
    if (!isUndefined(this._maxListeners)) {
      m = this._maxListeners;
    } else {
      m = EventEmitter.defaultMaxListeners;
    }

    if (m && m > 0 && this._events[type].length > m) {
      this._events[type].warned = true;
      console.error('(node) warning: possible EventEmitter memory ' +
                    'leak detected. %d listeners added. ' +
                    'Use emitter.setMaxListeners() to increase limit.',
                    this._events[type].length);
      if (typeof console.trace === 'function') {
        // not supported in IE 10
        console.trace();
      }
    }
  }

  return this;
};

EventEmitter.prototype.on = EventEmitter.prototype.addListener;

EventEmitter.prototype.once = function(type, listener) {
  if (!isFunction(listener))
    throw TypeError('listener must be a function');

  var fired = false;

  function g() {
    this.removeListener(type, g);

    if (!fired) {
      fired = true;
      listener.apply(this, arguments);
    }
  }

  g.listener = listener;
  this.on(type, g);

  return this;
};

// emits a 'removeListener' event iff the listener was removed
EventEmitter.prototype.removeListener = function(type, listener) {
  var list, position, length, i;

  if (!isFunction(listener))
    throw TypeError('listener must be a function');

  if (!this._events || !this._events[type])
    return this;

  list = this._events[type];
  length = list.length;
  position = -1;

  if (list === listener ||
      (isFunction(list.listener) && list.listener === listener)) {
    delete this._events[type];
    if (this._events.removeListener)
      this.emit('removeListener', type, listener);

  } else if (isObject(list)) {
    for (i = length; i-- > 0;) {
      if (list[i] === listener ||
          (list[i].listener && list[i].listener === listener)) {
        position = i;
        break;
      }
    }

    if (position < 0)
      return this;

    if (list.length === 1) {
      list.length = 0;
      delete this._events[type];
    } else {
      list.splice(position, 1);
    }

    if (this._events.removeListener)
      this.emit('removeListener', type, listener);
  }

  return this;
};

EventEmitter.prototype.removeAllListeners = function(type) {
  var key, listeners;

  if (!this._events)
    return this;

  // not listening for removeListener, no need to emit
  if (!this._events.removeListener) {
    if (arguments.length === 0)
      this._events = {};
    else if (this._events[type])
      delete this._events[type];
    return this;
  }

  // emit removeListener for all listeners on all events
  if (arguments.length === 0) {
    for (key in this._events) {
      if (key === 'removeListener') continue;
      this.removeAllListeners(key);
    }
    this.removeAllListeners('removeListener');
    this._events = {};
    return this;
  }

  listeners = this._events[type];

  if (isFunction(listeners)) {
    this.removeListener(type, listeners);
  } else {
    // LIFO order
    while (listeners.length)
      this.removeListener(type, listeners[listeners.length - 1]);
  }
  delete this._events[type];

  return this;
};

EventEmitter.prototype.listeners = function(type) {
  var ret;
  if (!this._events || !this._events[type])
    ret = [];
  else if (isFunction(this._events[type]))
    ret = [this._events[type]];
  else
    ret = this._events[type].slice();
  return ret;
};

EventEmitter.listenerCount = function(emitter, type) {
  var ret;
  if (!emitter._events || !emitter._events[type])
    ret = 0;
  else if (isFunction(emitter._events[type]))
    ret = 1;
  else
    ret = emitter._events[type].length;
  return ret;
};

function isFunction(arg) {
  return typeof arg === 'function';
}

function isNumber(arg) {
  return typeof arg === 'number';
}

function isObject(arg) {
  return typeof arg === 'object' && arg !== null;
}

function isUndefined(arg) {
  return arg === void 0;
}

},{}],"/Users/jrmerz/dev/cstars/AHB/farm-budgets-app/node_modules/node-uuid/uuid.js":[function(require,module,exports){
//     uuid.js
//
//     Copyright (c) 2010-2012 Robert Kieffer
//     MIT License - http://opensource.org/licenses/mit-license.php

(function() {
  var _global = this;

  // Unique ID creation requires a high quality random # generator.  We feature
  // detect to determine the best RNG source, normalizing to a function that
  // returns 128-bits of randomness, since that's what's usually required
  var _rng;

  // Node.js crypto-based RNG - http://nodejs.org/docs/v0.6.2/api/crypto.html
  //
  // Moderately fast, high quality
  if (typeof(_global.require) == 'function') {
    try {
      var _rb = _global.require('crypto').randomBytes;
      _rng = _rb && function() {return _rb(16);};
    } catch(e) {}
  }

  if (!_rng && _global.crypto && crypto.getRandomValues) {
    // WHATWG crypto-based RNG - http://wiki.whatwg.org/wiki/Crypto
    //
    // Moderately fast, high quality
    var _rnds8 = new Uint8Array(16);
    _rng = function whatwgRNG() {
      crypto.getRandomValues(_rnds8);
      return _rnds8;
    };
  }

  if (!_rng) {
    // Math.random()-based (RNG)
    //
    // If all else fails, use Math.random().  It's fast, but is of unspecified
    // quality.
    var  _rnds = new Array(16);
    _rng = function() {
      for (var i = 0, r; i < 16; i++) {
        if ((i & 0x03) === 0) r = Math.random() * 0x100000000;
        _rnds[i] = r >>> ((i & 0x03) << 3) & 0xff;
      }

      return _rnds;
    };
  }

  // Buffer class to use
  var BufferClass = typeof(_global.Buffer) == 'function' ? _global.Buffer : Array;

  // Maps for number <-> hex string conversion
  var _byteToHex = [];
  var _hexToByte = {};
  for (var i = 0; i < 256; i++) {
    _byteToHex[i] = (i + 0x100).toString(16).substr(1);
    _hexToByte[_byteToHex[i]] = i;
  }

  // **`parse()` - Parse a UUID into it's component bytes**
  function parse(s, buf, offset) {
    var i = (buf && offset) || 0, ii = 0;

    buf = buf || [];
    s.toLowerCase().replace(/[0-9a-f]{2}/g, function(oct) {
      if (ii < 16) { // Don't overflow!
        buf[i + ii++] = _hexToByte[oct];
      }
    });

    // Zero out remaining bytes if string was short
    while (ii < 16) {
      buf[i + ii++] = 0;
    }

    return buf;
  }

  // **`unparse()` - Convert UUID byte array (ala parse()) into a string**
  function unparse(buf, offset) {
    var i = offset || 0, bth = _byteToHex;
    return  bth[buf[i++]] + bth[buf[i++]] +
            bth[buf[i++]] + bth[buf[i++]] + '-' +
            bth[buf[i++]] + bth[buf[i++]] + '-' +
            bth[buf[i++]] + bth[buf[i++]] + '-' +
            bth[buf[i++]] + bth[buf[i++]] + '-' +
            bth[buf[i++]] + bth[buf[i++]] +
            bth[buf[i++]] + bth[buf[i++]] +
            bth[buf[i++]] + bth[buf[i++]];
  }

  // **`v1()` - Generate time-based UUID**
  //
  // Inspired by https://github.com/LiosK/UUID.js
  // and http://docs.python.org/library/uuid.html

  // random #'s we need to init node and clockseq
  var _seedBytes = _rng();

  // Per 4.5, create and 48-bit node id, (47 random bits + multicast bit = 1)
  var _nodeId = [
    _seedBytes[0] | 0x01,
    _seedBytes[1], _seedBytes[2], _seedBytes[3], _seedBytes[4], _seedBytes[5]
  ];

  // Per 4.2.2, randomize (14 bit) clockseq
  var _clockseq = (_seedBytes[6] << 8 | _seedBytes[7]) & 0x3fff;

  // Previous uuid creation time
  var _lastMSecs = 0, _lastNSecs = 0;

  // See https://github.com/broofa/node-uuid for API details
  function v1(options, buf, offset) {
    var i = buf && offset || 0;
    var b = buf || [];

    options = options || {};

    var clockseq = options.clockseq != null ? options.clockseq : _clockseq;

    // UUID timestamps are 100 nano-second units since the Gregorian epoch,
    // (1582-10-15 00:00).  JSNumbers aren't precise enough for this, so
    // time is handled internally as 'msecs' (integer milliseconds) and 'nsecs'
    // (100-nanoseconds offset from msecs) since unix epoch, 1970-01-01 00:00.
    var msecs = options.msecs != null ? options.msecs : new Date().getTime();

    // Per 4.2.1.2, use count of uuid's generated during the current clock
    // cycle to simulate higher resolution clock
    var nsecs = options.nsecs != null ? options.nsecs : _lastNSecs + 1;

    // Time since last uuid creation (in msecs)
    var dt = (msecs - _lastMSecs) + (nsecs - _lastNSecs)/10000;

    // Per 4.2.1.2, Bump clockseq on clock regression
    if (dt < 0 && options.clockseq == null) {
      clockseq = clockseq + 1 & 0x3fff;
    }

    // Reset nsecs if clock regresses (new clockseq) or we've moved onto a new
    // time interval
    if ((dt < 0 || msecs > _lastMSecs) && options.nsecs == null) {
      nsecs = 0;
    }

    // Per 4.2.1.2 Throw error if too many uuids are requested
    if (nsecs >= 10000) {
      throw new Error('uuid.v1(): Can\'t create more than 10M uuids/sec');
    }

    _lastMSecs = msecs;
    _lastNSecs = nsecs;
    _clockseq = clockseq;

    // Per 4.1.4 - Convert from unix epoch to Gregorian epoch
    msecs += 12219292800000;

    // `time_low`
    var tl = ((msecs & 0xfffffff) * 10000 + nsecs) % 0x100000000;
    b[i++] = tl >>> 24 & 0xff;
    b[i++] = tl >>> 16 & 0xff;
    b[i++] = tl >>> 8 & 0xff;
    b[i++] = tl & 0xff;

    // `time_mid`
    var tmh = (msecs / 0x100000000 * 10000) & 0xfffffff;
    b[i++] = tmh >>> 8 & 0xff;
    b[i++] = tmh & 0xff;

    // `time_high_and_version`
    b[i++] = tmh >>> 24 & 0xf | 0x10; // include version
    b[i++] = tmh >>> 16 & 0xff;

    // `clock_seq_hi_and_reserved` (Per 4.2.2 - include variant)
    b[i++] = clockseq >>> 8 | 0x80;

    // `clock_seq_low`
    b[i++] = clockseq & 0xff;

    // `node`
    var node = options.node || _nodeId;
    for (var n = 0; n < 6; n++) {
      b[i + n] = node[n];
    }

    return buf ? buf : unparse(b);
  }

  // **`v4()` - Generate random UUID**

  // See https://github.com/broofa/node-uuid for API details
  function v4(options, buf, offset) {
    // Deprecated - 'format' argument, as supported in v1.2
    var i = buf && offset || 0;

    if (typeof(options) == 'string') {
      buf = options == 'binary' ? new BufferClass(16) : null;
      options = null;
    }
    options = options || {};

    var rnds = options.random || (options.rng || _rng)();

    // Per 4.4, set bits for version and `clock_seq_hi_and_reserved`
    rnds[6] = (rnds[6] & 0x0f) | 0x40;
    rnds[8] = (rnds[8] & 0x3f) | 0x80;

    // Copy bytes to buffer, if provided
    if (buf) {
      for (var ii = 0; ii < 16; ii++) {
        buf[i + ii] = rnds[ii];
      }
    }

    return buf || unparse(rnds);
  }

  // Export public API
  var uuid = v4;
  uuid.v1 = v1;
  uuid.v4 = v4;
  uuid.parse = parse;
  uuid.unparse = unparse;
  uuid.BufferClass = BufferClass;

  if (typeof(module) != 'undefined' && module.exports) {
    // Publish as node.js module
    module.exports = uuid;
  } else  if (typeof define === 'function' && define.amd) {
    // Publish as AMD module
    define(function() {return uuid;});
 

  } else {
    // Publish as global (in browsers)
    var _previousRoot = _global.uuid;

    // **`noConflict()` - (browser only) to reset global 'uuid' var**
    uuid.noConflict = function() {
      _global.uuid = _previousRoot;
      return uuid;
    };

    _global.uuid = uuid;
  }
}).call(this);

},{}],"/Users/jrmerz/dev/cstars/AHB/farm-budgets-app/node_modules/ucum.js/generated/equivalents.json":[function(require,module,exports){
module.exports={
  "10*": {
    "value": 10,
    "ucum": "1"
  },
  "10^": {
    "value": 10,
    "ucum": "1"
  },
  "[pi]": {
    "value": 3.141592653589793,
    "ucum": "1"
  },
  "%": {
    "value": 1,
    "ucum": "10*-2"
  },
  "[ppth]": {
    "value": 1,
    "ucum": "10*-3"
  },
  "[ppm]": {
    "value": 1,
    "ucum": "10*-6"
  },
  "[ppb]": {
    "value": 1,
    "ucum": "10*-9"
  },
  "[pptr]": {
    "value": 1,
    "ucum": "10*-12"
  },
  "mol": {
    "value": 6.0221367,
    "ucum": "10*23"
  },
  "sr": {
    "value": 1,
    "ucum": "rad2"
  },
  "Hz": {
    "value": 1,
    "ucum": "s-1"
  },
  "N": {
    "value": 1,
    "ucum": "kg.m/s2"
  },
  "Pa": {
    "value": 1,
    "ucum": "N/m2"
  },
  "J": {
    "value": 1,
    "ucum": "N.m"
  },
  "W": {
    "value": 1,
    "ucum": "J/s"
  },
  "A": {
    "value": 1,
    "ucum": "C/s"
  },
  "V": {
    "value": 1,
    "ucum": "J/C"
  },
  "F": {
    "value": 1,
    "ucum": "C/V"
  },
  "Ohm": {
    "value": 1,
    "ucum": "V/A"
  },
  "S": {
    "value": 1,
    "ucum": "Ohm-1"
  },
  "Wb": {
    "value": 1,
    "ucum": "V.s"
  },
  "Cel": {
    "value": null,
    "ucum": "cel(1 K)"
  },
  "T": {
    "value": 1,
    "ucum": "Wb/m2"
  },
  "H": {
    "value": 1,
    "ucum": "Wb/A"
  },
  "lm": {
    "value": 1,
    "ucum": "cd.sr"
  },
  "lx": {
    "value": 1,
    "ucum": "lm/m2"
  },
  "Bq": {
    "value": 1,
    "ucum": "s-1"
  },
  "Gy": {
    "value": 1,
    "ucum": "J/kg"
  },
  "Sv": {
    "value": 1,
    "ucum": "J/kg"
  },
  "gon": {
    "value": 0.9,
    "ucum": "deg"
  },
  "deg": {
    "value": 2,
    "ucum": "[pi].rad/360"
  },
  "'": {
    "value": 1,
    "ucum": "deg/60"
  },
  "''": {
    "value": 1,
    "ucum": "'/60"
  },
  "l": {
    "value": 1,
    "ucum": "dm3"
  },
  "L": {
    "value": 1,
    "ucum": "l"
  },
  "ar": {
    "value": 100,
    "ucum": "m2"
  },
  "min": {
    "value": 60,
    "ucum": "s"
  },
  "h": {
    "value": 60,
    "ucum": "min"
  },
  "d": {
    "value": 24,
    "ucum": "h"
  },
  "a_t": {
    "value": 365.24219,
    "ucum": "d"
  },
  "a_j": {
    "value": 365.25,
    "ucum": "d"
  },
  "a_g": {
    "value": 365.2425,
    "ucum": "d"
  },
  "a": {
    "value": 1,
    "ucum": "a_j"
  },
  "wk": {
    "value": 7,
    "ucum": "d"
  },
  "mo_s": {
    "value": 29.53059,
    "ucum": "d"
  },
  "mo_j": {
    "value": 1,
    "ucum": "a_j/12"
  },
  "mo_g": {
    "value": 1,
    "ucum": "a_g/12"
  },
  "mo": {
    "value": 1,
    "ucum": "mo_j"
  },
  "t": {
    "value": 1000,
    "ucum": "kg"
  },
  "bar": {
    "value": 100000,
    "ucum": "Pa"
  },
  "u": {
    "value": 1.6605402e-24,
    "ucum": "g"
  },
  "eV": {
    "value": 1,
    "ucum": "[e].V"
  },
  "AU": {
    "value": 149597.870691,
    "ucum": "Mm"
  },
  "pc": {
    "value": 30856780000000000,
    "ucum": "m"
  },
  "[c]": {
    "value": 299792458,
    "ucum": "m/s"
  },
  "[h]": {
    "value": 6.6260755e-24,
    "ucum": "J.s"
  },
  "[k]": {
    "value": 1.380658e-23,
    "ucum": "J/K"
  },
  "[eps_0]": {
    "value": 8.854187817e-12,
    "ucum": "F/m"
  },
  "[mu_0]": {
    "value": 1,
    "ucum": "4.[pi].10*-7.N/A2"
  },
  "[e]": {
    "value": 1.60217733e-19,
    "ucum": "C"
  },
  "[m_e]": {
    "value": 9.1093897e-28,
    "ucum": "g"
  },
  "[m_p]": {
    "value": 1.6726231e-24,
    "ucum": "g"
  },
  "[G]": {
    "value": 6.67259e-11,
    "ucum": "m3.kg-1.s-2"
  },
  "[g]": {
    "value": 9.80665,
    "ucum": "m/s2"
  },
  "atm": {
    "value": 101325,
    "ucum": "Pa"
  },
  "[ly]": {
    "value": 1,
    "ucum": "[c].a_j"
  },
  "gf": {
    "value": 1,
    "ucum": "g.[g]"
  },
  "[lbf_av]": {
    "value": 1,
    "ucum": "[lb_av].[g]"
  },
  "Ky": {
    "value": 1,
    "ucum": "cm-1"
  },
  "Gal": {
    "value": 1,
    "ucum": "cm/s2"
  },
  "dyn": {
    "value": 1,
    "ucum": "g.cm/s2"
  },
  "erg": {
    "value": 1,
    "ucum": "dyn.cm"
  },
  "P": {
    "value": 1,
    "ucum": "dyn.s/cm2"
  },
  "Bi": {
    "value": 10,
    "ucum": "A"
  },
  "St": {
    "value": 1,
    "ucum": "cm2/s"
  },
  "Mx": {
    "value": 1e-8,
    "ucum": "Wb"
  },
  "G": {
    "value": 0.0001,
    "ucum": "T"
  },
  "Oe": {
    "value": 250,
    "ucum": "/[pi].A/m"
  },
  "Gb": {
    "value": 1,
    "ucum": "Oe.cm"
  },
  "sb": {
    "value": 1,
    "ucum": "cd/cm2"
  },
  "Lmb": {
    "value": 1,
    "ucum": "cd/cm2/[pi]"
  },
  "ph": {
    "value": 0.0001,
    "ucum": "lx"
  },
  "Ci": {
    "value": 37000000000,
    "ucum": "Bq"
  },
  "R": {
    "value": 0.000258,
    "ucum": "C/kg"
  },
  "RAD": {
    "value": 100,
    "ucum": "erg/g"
  },
  "REM": {
    "value": 1,
    "ucum": "RAD"
  },
  "[in_i]": {
    "value": 2.54,
    "ucum": "cm"
  },
  "[ft_i]": {
    "value": 12,
    "ucum": "[in_i]"
  },
  "[yd_i]": {
    "value": 3,
    "ucum": "[ft_i]"
  },
  "[mi_i]": {
    "value": 5280,
    "ucum": "[ft_i]"
  },
  "[fth_i]": {
    "value": 6,
    "ucum": "[ft_i]"
  },
  "[nmi_i]": {
    "value": 1852,
    "ucum": "m"
  },
  "[kn_i]": {
    "value": 1,
    "ucum": "[nmi_i]/h"
  },
  "[sin_i]": {
    "value": 1,
    "ucum": "[in_i]2"
  },
  "[sft_i]": {
    "value": 1,
    "ucum": "[ft_i]2"
  },
  "[syd_i]": {
    "value": 1,
    "ucum": "[yd_i]2"
  },
  "[cin_i]": {
    "value": 1,
    "ucum": "[in_i]3"
  },
  "[cft_i]": {
    "value": 1,
    "ucum": "[ft_i]3"
  },
  "[cyd_i]": {
    "value": 1,
    "ucum": "[yd_i]3"
  },
  "[bf_i]": {
    "value": 144,
    "ucum": "[in_i]3"
  },
  "[cr_i]": {
    "value": 128,
    "ucum": "[ft_i]3"
  },
  "[mil_i]": {
    "value": 0.001,
    "ucum": "[in_i]"
  },
  "[cml_i]": {
    "value": 1,
    "ucum": "[pi]/4.[mil_i]2"
  },
  "[hd_i]": {
    "value": 4,
    "ucum": "[in_i]"
  },
  "[ft_us]": {
    "value": 1200,
    "ucum": "m/3937"
  },
  "[yd_us]": {
    "value": 3,
    "ucum": "[ft_us]"
  },
  "[in_us]": {
    "value": 1,
    "ucum": "[ft_us]/12"
  },
  "[rd_us]": {
    "value": 16.5,
    "ucum": "[ft_us]"
  },
  "[ch_us]": {
    "value": 4,
    "ucum": "[rd_us]"
  },
  "[lk_us]": {
    "value": 1,
    "ucum": "[ch_us]/100"
  },
  "[rch_us]": {
    "value": 100,
    "ucum": "[ft_us]"
  },
  "[rlk_us]": {
    "value": 1,
    "ucum": "[rch_us]/100"
  },
  "[fth_us]": {
    "value": 6,
    "ucum": "[ft_us]"
  },
  "[fur_us]": {
    "value": 40,
    "ucum": "[rd_us]"
  },
  "[mi_us]": {
    "value": 8,
    "ucum": "[fur_us]"
  },
  "[acr_us]": {
    "value": 160,
    "ucum": "[rd_us]2"
  },
  "[srd_us]": {
    "value": 1,
    "ucum": "[rd_us]2"
  },
  "[smi_us]": {
    "value": 1,
    "ucum": "[mi_us]2"
  },
  "[sct]": {
    "value": 1,
    "ucum": "[mi_us]2"
  },
  "[twp]": {
    "value": 36,
    "ucum": "[sct]"
  },
  "[mil_us]": {
    "value": 0.001,
    "ucum": "[in_us]"
  },
  "[in_br]": {
    "value": 2.539998,
    "ucum": "cm"
  },
  "[ft_br]": {
    "value": 12,
    "ucum": "[in_br]"
  },
  "[rd_br]": {
    "value": 16.5,
    "ucum": "[ft_br]"
  },
  "[ch_br]": {
    "value": 4,
    "ucum": "[rd_br]"
  },
  "[lk_br]": {
    "value": 1,
    "ucum": "[ch_br]/100"
  },
  "[fth_br]": {
    "value": 6,
    "ucum": "[ft_br]"
  },
  "[pc_br]": {
    "value": 2.5,
    "ucum": "[ft_br]"
  },
  "[yd_br]": {
    "value": 3,
    "ucum": "[ft_br]"
  },
  "[mi_br]": {
    "value": 5280,
    "ucum": "[ft_br]"
  },
  "[nmi_br]": {
    "value": 6080,
    "ucum": "[ft_br]"
  },
  "[kn_br]": {
    "value": 1,
    "ucum": "[nmi_br]/h"
  },
  "[acr_br]": {
    "value": 4840,
    "ucum": "[yd_br]2"
  },
  "[gal_us]": {
    "value": 231,
    "ucum": "[in_i]3"
  },
  "[bbl_us]": {
    "value": 42,
    "ucum": "[gal_us]"
  },
  "[qt_us]": {
    "value": 1,
    "ucum": "[gal_us]/4"
  },
  "[pt_us]": {
    "value": 1,
    "ucum": "[qt_us]/2"
  },
  "[gil_us]": {
    "value": 1,
    "ucum": "[pt_us]/4"
  },
  "[foz_us]": {
    "value": 1,
    "ucum": "[gil_us]/4"
  },
  "[fdr_us]": {
    "value": 1,
    "ucum": "[foz_us]/8"
  },
  "[min_us]": {
    "value": 1,
    "ucum": "[fdr_us]/60"
  },
  "[crd_us]": {
    "value": 128,
    "ucum": "[ft_i]3"
  },
  "[bu_us]": {
    "value": 2150.42,
    "ucum": "[in_i]3"
  },
  "[gal_wi]": {
    "value": 1,
    "ucum": "[bu_us]/8"
  },
  "[pk_us]": {
    "value": 1,
    "ucum": "[bu_us]/4"
  },
  "[dqt_us]": {
    "value": 1,
    "ucum": "[pk_us]/8"
  },
  "[dpt_us]": {
    "value": 1,
    "ucum": "[dqt_us]/2"
  },
  "[tbs_us]": {
    "value": 1,
    "ucum": "[foz_us]/2"
  },
  "[tsp_us]": {
    "value": 1,
    "ucum": "[tbs_us]/3"
  },
  "[cup_us]": {
    "value": 16,
    "ucum": "[tbs_us]"
  },
  "[foz_m]": {
    "value": 30,
    "ucum": "mL"
  },
  "[cup_m]": {
    "value": 240,
    "ucum": "mL"
  },
  "[tsp_m]": {
    "value": 5,
    "ucum": "mL"
  },
  "[tbs_m]": {
    "value": 15,
    "ucum": "mL"
  },
  "[gal_br]": {
    "value": 4.54609,
    "ucum": "l"
  },
  "[pk_br]": {
    "value": 2,
    "ucum": "[gal_br]"
  },
  "[bu_br]": {
    "value": 4,
    "ucum": "[pk_br]"
  },
  "[qt_br]": {
    "value": 1,
    "ucum": "[gal_br]/4"
  },
  "[pt_br]": {
    "value": 1,
    "ucum": "[qt_br]/2"
  },
  "[gil_br]": {
    "value": 1,
    "ucum": "[pt_br]/4"
  },
  "[foz_br]": {
    "value": 1,
    "ucum": "[gil_br]/5"
  },
  "[fdr_br]": {
    "value": 1,
    "ucum": "[foz_br]/8"
  },
  "[min_br]": {
    "value": 1,
    "ucum": "[fdr_br]/60"
  },
  "[gr]": {
    "value": 64.79891,
    "ucum": "mg"
  },
  "[lb_av]": {
    "value": 7000,
    "ucum": "[gr]"
  },
  "[oz_av]": {
    "value": 1,
    "ucum": "[lb_av]/16"
  },
  "[dr_av]": {
    "value": 1,
    "ucum": "[oz_av]/16"
  },
  "[scwt_av]": {
    "value": 100,
    "ucum": "[lb_av]"
  },
  "[lcwt_av]": {
    "value": 112,
    "ucum": "[lb_av]"
  },
  "[ston_av]": {
    "value": 20,
    "ucum": "[scwt_av]"
  },
  "[lton_av]": {
    "value": 20,
    "ucum": "[lcwt_av]"
  },
  "[stone_av]": {
    "value": 14,
    "ucum": "[lb_av]"
  },
  "[pwt_tr]": {
    "value": 24,
    "ucum": "[gr]"
  },
  "[oz_tr]": {
    "value": 20,
    "ucum": "[pwt_tr]"
  },
  "[lb_tr]": {
    "value": 12,
    "ucum": "[oz_tr]"
  },
  "[sc_ap]": {
    "value": 20,
    "ucum": "[gr]"
  },
  "[dr_ap]": {
    "value": 3,
    "ucum": "[sc_ap]"
  },
  "[oz_ap]": {
    "value": 8,
    "ucum": "[dr_ap]"
  },
  "[lb_ap]": {
    "value": 12,
    "ucum": "[oz_ap]"
  },
  "[oz_m]": {
    "value": 28,
    "ucum": "g"
  },
  "[lne]": {
    "value": 1,
    "ucum": "[in_i]/12"
  },
  "[pnt]": {
    "value": 1,
    "ucum": "[lne]/6"
  },
  "[pca]": {
    "value": 12,
    "ucum": "[pnt]"
  },
  "[pnt_pr]": {
    "value": 0.013837,
    "ucum": "[in_i]"
  },
  "[pca_pr]": {
    "value": 12,
    "ucum": "[pnt_pr]"
  },
  "[pied]": {
    "value": 32.48,
    "ucum": "cm"
  },
  "[pouce]": {
    "value": 1,
    "ucum": "[pied]/12"
  },
  "[ligne]": {
    "value": 1,
    "ucum": "[pouce]/12"
  },
  "[didot]": {
    "value": 1,
    "ucum": "[ligne]/6"
  },
  "[cicero]": {
    "value": 12,
    "ucum": "[didot]"
  },
  "[degF]": {
    "value": null,
    "ucum": "degf(5 K/9)"
  },
  "[degR]": {
    "value": 5,
    "ucum": "K/9"
  },
  "cal_[15]": {
    "value": 4.1858,
    "ucum": "J"
  },
  "cal_[20]": {
    "value": 4.1819,
    "ucum": "J"
  },
  "cal_m": {
    "value": 4.19002,
    "ucum": "J"
  },
  "cal_IT": {
    "value": 4.1868,
    "ucum": "J"
  },
  "cal_th": {
    "value": 4.184,
    "ucum": "J"
  },
  "cal": {
    "value": 1,
    "ucum": "cal_th"
  },
  "[Cal]": {
    "value": 1,
    "ucum": "kcal_th"
  },
  "[Btu_39]": {
    "value": 1.05967,
    "ucum": "kJ"
  },
  "[Btu_59]": {
    "value": 1.0548,
    "ucum": "kJ"
  },
  "[Btu_60]": {
    "value": 1.05468,
    "ucum": "kJ"
  },
  "[Btu_m]": {
    "value": 1.05587,
    "ucum": "kJ"
  },
  "[Btu_IT]": {
    "value": 1.05505585262,
    "ucum": "kJ"
  },
  "[Btu_th]": {
    "value": 1.05435,
    "ucum": "kJ"
  },
  "[Btu]": {
    "value": 1,
    "ucum": "[Btu_th]"
  },
  "[HP]": {
    "value": 550,
    "ucum": "[ft_i].[lbf_av]/s"
  },
  "tex": {
    "value": 1,
    "ucum": "g/km"
  },
  "[den]": {
    "value": 1,
    "ucum": "g/9/km"
  },
  "m[H2O]": {
    "value": 9.80665,
    "ucum": "kPa"
  },
  "m[Hg]": {
    "value": 133.322,
    "ucum": "kPa"
  },
  "[in_i'H2O]": {
    "value": 1,
    "ucum": "m[H2O].[in_i]/m"
  },
  "[in_i'Hg]": {
    "value": 1,
    "ucum": "m[Hg].[in_i]/m"
  },
  "[PRU]": {
    "value": 1,
    "ucum": "mm[Hg].s/ml"
  },
  "[wood'U]": {
    "value": 1,
    "ucum": "mm[Hg].min/L"
  },
  "[diop]": {
    "value": 1,
    "ucum": "/m"
  },
  "[p'diop]": {
    "value": null,
    "ucum": "100tan(1 rad)"
  },
  "%[slope]": {
    "value": null,
    "ucum": "100tan(1 rad)"
  },
  "[mesh_i]": {
    "value": 1,
    "ucum": "/[in_i]"
  },
  "[Ch]": {
    "value": 1,
    "ucum": "mm/3"
  },
  "[drp]": {
    "value": 1,
    "ucum": "ml/20"
  },
  "[hnsf'U]": {
    "value": 1,
    "ucum": "1"
  },
  "[MET]": {
    "value": 3.5,
    "ucum": "mL/min/kg"
  },
  "[hp'_X]": {
    "value": null,
    "ucum": "hpX(1 1)"
  },
  "[hp'_C]": {
    "value": null,
    "ucum": "hpC(1 1)"
  },
  "[hp'_M]": {
    "value": null,
    "ucum": "hpM(1 1)"
  },
  "[hp'_Q]": {
    "value": null,
    "ucum": "hpQ(1 1)"
  },
  "[hp_X]": {
    "value": 1,
    "ucum": "1"
  },
  "[hp_C]": {
    "value": 1,
    "ucum": "1"
  },
  "[hp_M]": {
    "value": 1,
    "ucum": "1"
  },
  "[hp_Q]": {
    "value": 1,
    "ucum": "1"
  },
  "[kp_X]": {
    "value": 1,
    "ucum": "1"
  },
  "[kp_C]": {
    "value": 1,
    "ucum": "1"
  },
  "[kp_M]": {
    "value": 1,
    "ucum": "1"
  },
  "[kp_Q]": {
    "value": 1,
    "ucum": "1"
  },
  "eq": {
    "value": 1,
    "ucum": "mol"
  },
  "osm": {
    "value": 1,
    "ucum": "mol"
  },
  "[pH]": {
    "value": null,
    "ucum": "pH(1 mol/l)"
  },
  "g%": {
    "value": 1,
    "ucum": "g/dl"
  },
  "[S]": {
    "value": 1,
    "ucum": "10*-13.s"
  },
  "[HPF]": {
    "value": 1,
    "ucum": "1"
  },
  "[LPF]": {
    "value": 100,
    "ucum": "1"
  },
  "kat": {
    "value": 1,
    "ucum": "mol/s"
  },
  "U": {
    "value": 1,
    "ucum": "umol/min"
  },
  "[iU]": {
    "value": 1,
    "ucum": "1"
  },
  "[IU]": {
    "value": 1,
    "ucum": "[iU]"
  },
  "[arb'U]": {
    "value": 1,
    "ucum": "1"
  },
  "[USP'U]": {
    "value": 1,
    "ucum": "1"
  },
  "[GPL'U]": {
    "value": 1,
    "ucum": "1"
  },
  "[MPL'U]": {
    "value": 1,
    "ucum": "1"
  },
  "[APL'U]": {
    "value": 1,
    "ucum": "1"
  },
  "[beth'U]": {
    "value": 1,
    "ucum": "1"
  },
  "[anti'Xa'U]": {
    "value": 1,
    "ucum": "1"
  },
  "[todd'U]": {
    "value": 1,
    "ucum": "1"
  },
  "[dye'U]": {
    "value": 1,
    "ucum": "1"
  },
  "[smgy'U]": {
    "value": 1,
    "ucum": "1"
  },
  "[bdsk'U]": {
    "value": 1,
    "ucum": "1"
  },
  "[ka'U]": {
    "value": 1,
    "ucum": "1"
  },
  "[knk'U]": {
    "value": 1,
    "ucum": "1"
  },
  "[mclg'U]": {
    "value": 1,
    "ucum": "1"
  },
  "[tb'U]": {
    "value": 1,
    "ucum": "1"
  },
  "[CCID_50]": {
    "value": 1,
    "ucum": "1"
  },
  "[TCID_50]": {
    "value": 1,
    "ucum": "1"
  },
  "[EID_50]": {
    "value": 1,
    "ucum": "1"
  },
  "[PFU]": {
    "value": 1,
    "ucum": "1"
  },
  "[FFU]": {
    "value": 1,
    "ucum": "1"
  },
  "[CFU]": {
    "value": 1,
    "ucum": "1"
  },
  "[BAU]": {
    "value": 1,
    "ucum": "1"
  },
  "[AU]": {
    "value": 1,
    "ucum": "1"
  },
  "[Amb'a'1'U]": {
    "value": 1,
    "ucum": "1"
  },
  "[PNU]": {
    "value": 1,
    "ucum": "1"
  },
  "[Lf]": {
    "value": 1,
    "ucum": "1"
  },
  "[D'ag'U]": {
    "value": 1,
    "ucum": "1"
  },
  "[FEU]": {
    "value": 1,
    "ucum": "1"
  },
  "[ELU]": {
    "value": 1,
    "ucum": "1"
  },
  "[EU]": {
    "value": 1,
    "ucum": "1"
  },
  "Np": {
    "value": null,
    "ucum": "ln(1 1)"
  },
  "B": {
    "value": null,
    "ucum": "lg(1 1)"
  },
  "B[SPL]": {
    "value": null,
    "ucum": "2lg(2 10*-5.Pa)"
  },
  "B[V]": {
    "value": null,
    "ucum": "2lg(1 V)"
  },
  "B[mV]": {
    "value": null,
    "ucum": "2lg(1 mV)"
  },
  "B[uV]": {
    "value": null,
    "ucum": "2lg(1 uV)"
  },
  "B[10.nV]": {
    "value": null,
    "ucum": "2lg(10 nV)"
  },
  "B[W]": {
    "value": null,
    "ucum": "lg(1 W)"
  },
  "B[kW]": {
    "value": null,
    "ucum": "lg(1 kW)"
  },
  "st": {
    "value": 1,
    "ucum": "m3"
  },
  "Ao": {
    "value": 0.1,
    "ucum": "nm"
  },
  "b": {
    "value": 100,
    "ucum": "fm2"
  },
  "att": {
    "value": 1,
    "ucum": "kgf/cm2"
  },
  "mho": {
    "value": 1,
    "ucum": "S"
  },
  "[psi]": {
    "value": 1,
    "ucum": "[lbf_av]/[in_i]2"
  },
  "circ": {
    "value": 2,
    "ucum": "[pi].rad"
  },
  "sph": {
    "value": 4,
    "ucum": "[pi].sr"
  },
  "[car_m]": {
    "value": 0.2,
    "ucum": "g"
  },
  "[car_Au]": {
    "value": 1,
    "ucum": "/24"
  },
  "[smoot]": {
    "value": 67,
    "ucum": "[in_i]"
  },
  "bit_s": {
    "value": null,
    "ucum": "ld(1 1)"
  },
  "bit": {
    "value": 1,
    "ucum": "1"
  },
  "By": {
    "value": 8,
    "ucum": "bit"
  },
  "Bd": {
    "value": 1,
    "ucum": "/s"
  }
}

},{}],"/Users/jrmerz/dev/cstars/AHB/farm-budgets-app/node_modules/ucum.js/generated/metrics.json":[function(require,module,exports){
module.exports={"mol":true,"sr":true,"Hz":true,"N":true,"Pa":true,"J":true,"W":true,"A":true,"V":true,"F":true,"Ohm":true,"S":true,"Wb":true,"Cel":true,"T":true,"H":true,"lm":true,"lx":true,"Bq":true,"Gy":true,"Sv":true,"l":true,"L":true,"ar":true,"t":true,"bar":true,"u":true,"eV":true,"pc":true,"[c]":true,"[h]":true,"[k]":true,"[eps_0]":true,"[mu_0]":true,"[e]":true,"[m_e]":true,"[m_p]":true,"[G]":true,"[g]":true,"[ly]":true,"gf":true,"Ky":true,"Gal":true,"dyn":true,"erg":true,"P":true,"Bi":true,"St":true,"Mx":true,"G":true,"Oe":true,"Gb":true,"sb":true,"Lmb":true,"ph":true,"Ci":true,"R":true,"RAD":true,"REM":true,"cal_[15]":true,"cal_[20]":true,"cal_m":true,"cal_IT":true,"cal_th":true,"cal":true,"tex":true,"m[H2O]":true,"m[Hg]":true,"eq":true,"osm":true,"g%":true,"kat":true,"U":true,"[iU]":true,"[IU]":true,"Np":true,"B":true,"B[SPL]":true,"B[V]":true,"B[mV]":true,"B[uV]":true,"B[10.nV]":true,"B[W]":true,"B[kW]":true,"st":true,"mho":true,"bit":true,"By":true,"Bd":true,"m":true,"s":true,"g":true,"rad":true,"K":true,"C":true,"cd":true}

},{}],"/Users/jrmerz/dev/cstars/AHB/farm-budgets-app/node_modules/ucum.js/generated/prefixes.json":[function(require,module,exports){
module.exports={
  "Y": 1e+24,
  "Z": 1e+21,
  "E": 1000000000000000000,
  "P": 1000000000000000,
  "T": 1000000000000,
  "G": 1000000000,
  "M": 1000000,
  "k": 1000,
  "h": 100,
  "da": 10,
  "d": 0.1,
  "c": 0.01,
  "m": 0.001,
  "u": 0.000001,
  "n": 1e-9,
  "p": 1e-12,
  "f": 1e-15,
  "a": 1e-18,
  "z": 1e-21,
  "y": 1e-24,
  "Ki": 1024,
  "Mi": 1048576,
  "Gi": 1073741824,
  "Ti": 1099511627776
}

},{}],"/Users/jrmerz/dev/cstars/AHB/farm-budgets-app/node_modules/ucum.js/generated/ucum-parser.js":[function(require,module,exports){
module.exports = (function() {
  /*
   * Generated by PEG.js 0.8.0.
   *
   * http://pegjs.majda.cz/
   */

  function peg$subclass(child, parent) {
    function ctor() { this.constructor = child; }
    ctor.prototype = parent.prototype;
    child.prototype = new ctor();
  }

  function SyntaxError(message, expected, found, offset, line, column) {
    this.message  = message;
    this.expected = expected;
    this.found    = found;
    this.offset   = offset;
    this.line     = line;
    this.column   = column;

    this.name     = "SyntaxError";
  }

  peg$subclass(SyntaxError, Error);

  function parse(input) {
    var options = arguments.length > 1 ? arguments[1] : {},

        peg$FAILED = {},

        peg$startRuleIndices = { start: 0 },
        peg$startRuleIndex   = 0,

        peg$consts = [
          function(e) {
            return e ; // cleanup(e);
          },
          peg$FAILED,
          "/",
          { type: "literal", value: "/", description: "\"/\"" },
          function(e) {return multiply({value:1, units:{}}, [["/", e]]);},
          ".",
          { type: "literal", value: ".", description: "\".\"" },
          [],
          function(t, ms) {
            return multiply(t, ms);
          },
          null,
          function(e, exp) {return e.ann && exp;},
          void 0,
          function(e, exp) {
            return topower(e, exp);
          },
          function(d) {
           var ret = {
              value: d,
              units: {}
            };
            return ret;
          },
          function(u) {return u;},
          "(",
          { type: "literal", value: "(", description: "\"(\"" },
          ")",
          { type: "literal", value: ")", description: "\")\"" },
          function(e) {return e;},
          /^[+\-]/,
          { type: "class", value: "[+\\-]", description: "[+\\-]" },
          function(s, d) {return (s=="-") ? (-1*d) : d},
          function(p, a) {return(p && !ismetric(a));},
          function(p, a) {
            var ret = a;
            if (p) ret.value = ret.value * prefixes[p];
            return ret;
          },
          /^[0-9]/,
          { type: "class", value: "[0-9]", description: "[0-9]" },
          "e",
          { type: "literal", value: "e", description: "\"e\"" },
          function(v, epresent, e) {return (!epresent && !!e);},
          function(v, epresent, e) {
            return parseInt(v.join(""))*Math.pow(10, e||0);
          },
          "{",
          { type: "literal", value: "{", description: "\"{\"" },
          /^[^}]/,
          { type: "class", value: "[^}]", description: "[^}]" },
          "}",
          { type: "literal", value: "}", description: "\"}\"" },
          function(m) {return /[^\x00-\x7F]/.test(m);},
          function(m) { return {value: 1, units:{}, ann: m} },
          "[anti'Xa'U]",
          { type: "literal", value: "[anti'Xa'U]", description: "\"[anti'Xa'U]\"" },
          function(u) {return {value: 1, units: {"[anti'Xa'U]": 1}};},
          "[Amb'a'1'U]",
          { type: "literal", value: "[Amb'a'1'U]", description: "\"[Amb'a'1'U]\"" },
          function(u) {return {value: 1, units: {"[Amb'a'1'U]": 1}};},
          "[stone_av]",
          { type: "literal", value: "[stone_av]", description: "\"[stone_av]\"" },
          function(u) {return {value: 1, units: {"[stone_av]": 1}};},
          "[in_i'H2O]",
          { type: "literal", value: "[in_i'H2O]", description: "\"[in_i'H2O]\"" },
          function(u) {return {value: 1, units: {"[in_i'H2O]": 1}};},
          "[ston_av]",
          { type: "literal", value: "[ston_av]", description: "\"[ston_av]\"" },
          function(u) {return {value: 1, units: {"[ston_av]": 1}};},
          "[TCID_50]",
          { type: "literal", value: "[TCID_50]", description: "\"[TCID_50]\"" },
          function(u) {return {value: 1, units: {"[TCID_50]": 1}};},
          "[CCID_50]",
          { type: "literal", value: "[CCID_50]", description: "\"[CCID_50]\"" },
          function(u) {return {value: 1, units: {"[CCID_50]": 1}};},
          "[scwt_av]",
          { type: "literal", value: "[scwt_av]", description: "\"[scwt_av]\"" },
          function(u) {return {value: 1, units: {"[scwt_av]": 1}};},
          "[lcwt_av]",
          { type: "literal", value: "[lcwt_av]", description: "\"[lcwt_av]\"" },
          function(u) {return {value: 1, units: {"[lcwt_av]": 1}};},
          "[lton_av]",
          { type: "literal", value: "[lton_av]", description: "\"[lton_av]\"" },
          function(u) {return {value: 1, units: {"[lton_av]": 1}};},
          "[in_i'Hg]",
          { type: "literal", value: "[in_i'Hg]", description: "\"[in_i'Hg]\"" },
          function(u) {return {value: 1, units: {"[in_i'Hg]": 1}};},
          "[tbs_us]",
          { type: "literal", value: "[tbs_us]", description: "\"[tbs_us]\"" },
          function(u) {return {value: 1, units: {"[tbs_us]": 1}};},
          "[dpt_us]",
          { type: "literal", value: "[dpt_us]", description: "\"[dpt_us]\"" },
          function(u) {return {value: 1, units: {"[dpt_us]": 1}};},
          "[bdsk'U]",
          { type: "literal", value: "[bdsk'U]", description: "\"[bdsk'U]\"" },
          function(u) {return {value: 1, units: {"[bdsk'U]": 1}};},
          "[smgy'U]",
          { type: "literal", value: "[smgy'U]", description: "\"[smgy'U]\"" },
          function(u) {return {value: 1, units: {"[smgy'U]": 1}};},
          "[dqt_us]",
          { type: "literal", value: "[dqt_us]", description: "\"[dqt_us]\"" },
          function(u) {return {value: 1, units: {"[dqt_us]": 1}};},
          "[todd'U]",
          { type: "literal", value: "[todd'U]", description: "\"[todd'U]\"" },
          function(u) {return {value: 1, units: {"[todd'U]": 1}};},
          "[D'ag'U]",
          { type: "literal", value: "[D'ag'U]", description: "\"[D'ag'U]\"" },
          function(u) {return {value: 1, units: {"[D'ag'U]": 1}};},
          "[beth'U]",
          { type: "literal", value: "[beth'U]", description: "\"[beth'U]\"" },
          function(u) {return {value: 1, units: {"[beth'U]": 1}};},
          "[gal_wi]",
          { type: "literal", value: "[gal_wi]", description: "\"[gal_wi]\"" },
          function(u) {return {value: 1, units: {"[gal_wi]": 1}};},
          "[crd_us]",
          { type: "literal", value: "[crd_us]", description: "\"[crd_us]\"" },
          function(u) {return {value: 1, units: {"[crd_us]": 1}};},
          "[min_us]",
          { type: "literal", value: "[min_us]", description: "\"[min_us]\"" },
          function(u) {return {value: 1, units: {"[min_us]": 1}};},
          "[fdr_us]",
          { type: "literal", value: "[fdr_us]", description: "\"[fdr_us]\"" },
          function(u) {return {value: 1, units: {"[fdr_us]": 1}};},
          "[foz_us]",
          { type: "literal", value: "[foz_us]", description: "\"[foz_us]\"" },
          function(u) {return {value: 1, units: {"[foz_us]": 1}};},
          "[gil_us]",
          { type: "literal", value: "[gil_us]", description: "\"[gil_us]\"" },
          function(u) {return {value: 1, units: {"[gil_us]": 1}};},
          "[bbl_us]",
          { type: "literal", value: "[bbl_us]", description: "\"[bbl_us]\"" },
          function(u) {return {value: 1, units: {"[bbl_us]": 1}};},
          "[gal_us]",
          { type: "literal", value: "[gal_us]", description: "\"[gal_us]\"" },
          function(u) {return {value: 1, units: {"[gal_us]": 1}};},
          "[acr_br]",
          { type: "literal", value: "[acr_br]", description: "\"[acr_br]\"" },
          function(u) {return {value: 1, units: {"[acr_br]": 1}};},
          "[nmi_br]",
          { type: "literal", value: "[nmi_br]", description: "\"[nmi_br]\"" },
          function(u) {return {value: 1, units: {"[nmi_br]": 1}};},
          "[fth_br]",
          { type: "literal", value: "[fth_br]", description: "\"[fth_br]\"" },
          function(u) {return {value: 1, units: {"[fth_br]": 1}};},
          "[mil_us]",
          { type: "literal", value: "[mil_us]", description: "\"[mil_us]\"" },
          function(u) {return {value: 1, units: {"[mil_us]": 1}};},
          "[smi_us]",
          { type: "literal", value: "[smi_us]", description: "\"[smi_us]\"" },
          function(u) {return {value: 1, units: {"[smi_us]": 1}};},
          "[acr_us]",
          { type: "literal", value: "[acr_us]", description: "\"[acr_us]\"" },
          function(u) {return {value: 1, units: {"[acr_us]": 1}};},
          "[fur_us]",
          { type: "literal", value: "[fur_us]", description: "\"[fur_us]\"" },
          function(u) {return {value: 1, units: {"[fur_us]": 1}};},
          "[fth_us]",
          { type: "literal", value: "[fth_us]", description: "\"[fth_us]\"" },
          function(u) {return {value: 1, units: {"[fth_us]": 1}};},
          "[rlk_us]",
          { type: "literal", value: "[rlk_us]", description: "\"[rlk_us]\"" },
          function(u) {return {value: 1, units: {"[rlk_us]": 1}};},
          "[rch_us]",
          { type: "literal", value: "[rch_us]", description: "\"[rch_us]\"" },
          function(u) {return {value: 1, units: {"[rch_us]": 1}};},
          "[lbf_av]",
          { type: "literal", value: "[lbf_av]", description: "\"[lbf_av]\"" },
          function(u) {return {value: 1, units: {"[lbf_av]": 1}};},
          "[hnsf'U]",
          { type: "literal", value: "[hnsf'U]", description: "\"[hnsf'U]\"" },
          function(u) {return {value: 1, units: {"[hnsf'U]": 1}};},
          "[mesh_i]",
          { type: "literal", value: "[mesh_i]", description: "\"[mesh_i]\"" },
          function(u) {return {value: 1, units: {"[mesh_i]": 1}};},
          "%[slope]",
          { type: "literal", value: "%[slope]", description: "\"%[slope]\"" },
          function(u) {return {value: 1, units: {"%[slope]": 1}};},
          "[p'diop]",
          { type: "literal", value: "[p'diop]", description: "\"[p'diop]\"" },
          function(u) {return {value: 1, units: {"[p'diop]": 1}};},
          "[gil_br]",
          { type: "literal", value: "[gil_br]", description: "\"[gil_br]\"" },
          function(u) {return {value: 1, units: {"[gil_br]": 1}};},
          "[wood'U]",
          { type: "literal", value: "[wood'U]", description: "\"[wood'U]\"" },
          function(u) {return {value: 1, units: {"[wood'U]": 1}};},
          "cal_[15]",
          { type: "literal", value: "cal_[15]", description: "\"cal_[15]\"" },
          function(u) {return {value: 1, units: {"cal_[15]": 1}};},
          "cal_[20]",
          { type: "literal", value: "cal_[20]", description: "\"cal_[20]\"" },
          function(u) {return {value: 1, units: {"cal_[20]": 1}};},
          "[foz_br]",
          { type: "literal", value: "[foz_br]", description: "\"[foz_br]\"" },
          function(u) {return {value: 1, units: {"[foz_br]": 1}};},
          "[fdr_br]",
          { type: "literal", value: "[fdr_br]", description: "\"[fdr_br]\"" },
          function(u) {return {value: 1, units: {"[fdr_br]": 1}};},
          "[srd_us]",
          { type: "literal", value: "[srd_us]", description: "\"[srd_us]\"" },
          function(u) {return {value: 1, units: {"[srd_us]": 1}};},
          "[min_br]",
          { type: "literal", value: "[min_br]", description: "\"[min_br]\"" },
          function(u) {return {value: 1, units: {"[min_br]": 1}};},
          "[EID_50]",
          { type: "literal", value: "[EID_50]", description: "\"[EID_50]\"" },
          function(u) {return {value: 1, units: {"[EID_50]": 1}};},
          "[Btu_th]",
          { type: "literal", value: "[Btu_th]", description: "\"[Btu_th]\"" },
          function(u) {return {value: 1, units: {"[Btu_th]": 1}};},
          "[Btu_IT]",
          { type: "literal", value: "[Btu_IT]", description: "\"[Btu_IT]\"" },
          function(u) {return {value: 1, units: {"[Btu_IT]": 1}};},
          "[car_Au]",
          { type: "literal", value: "[car_Au]", description: "\"[car_Au]\"" },
          function(u) {return {value: 1, units: {"[car_Au]": 1}};},
          "[Btu_60]",
          { type: "literal", value: "[Btu_60]", description: "\"[Btu_60]\"" },
          function(u) {return {value: 1, units: {"[Btu_60]": 1}};},
          "[Btu_59]",
          { type: "literal", value: "[Btu_59]", description: "\"[Btu_59]\"" },
          function(u) {return {value: 1, units: {"[Btu_59]": 1}};},
          "[Btu_39]",
          { type: "literal", value: "[Btu_39]", description: "\"[Btu_39]\"" },
          function(u) {return {value: 1, units: {"[Btu_39]": 1}};},
          "[cup_us]",
          { type: "literal", value: "[cup_us]", description: "\"[cup_us]\"" },
          function(u) {return {value: 1, units: {"[cup_us]": 1}};},
          "B[10.nV]",
          { type: "literal", value: "B[10.nV]", description: "\"B[10.nV]\"" },
          function(u) {return {value: 1, units: {"B[10.nV]": 1}};},
          "[tsp_us]",
          { type: "literal", value: "[tsp_us]", description: "\"[tsp_us]\"" },
          function(u) {return {value: 1, units: {"[tsp_us]": 1}};},
          "[mclg'U]",
          { type: "literal", value: "[mclg'U]", description: "\"[mclg'U]\"" },
          function(u) {return {value: 1, units: {"[mclg'U]": 1}};},
          "[cicero]",
          { type: "literal", value: "[cicero]", description: "\"[cicero]\"" },
          function(u) {return {value: 1, units: {"[cicero]": 1}};},
          "[pwt_tr]",
          { type: "literal", value: "[pwt_tr]", description: "\"[pwt_tr]\"" },
          function(u) {return {value: 1, units: {"[pwt_tr]": 1}};},
          "[pnt_pr]",
          { type: "literal", value: "[pnt_pr]", description: "\"[pnt_pr]\"" },
          function(u) {return {value: 1, units: {"[pnt_pr]": 1}};},
          "[pca_pr]",
          { type: "literal", value: "[pca_pr]", description: "\"[pca_pr]\"" },
          function(u) {return {value: 1, units: {"[pca_pr]": 1}};},
          "[gal_br]",
          { type: "literal", value: "[gal_br]", description: "\"[gal_br]\"" },
          function(u) {return {value: 1, units: {"[gal_br]": 1}};},
          "[yd_us]",
          { type: "literal", value: "[yd_us]", description: "\"[yd_us]\"" },
          function(u) {return {value: 1, units: {"[yd_us]": 1}};},
          "[ligne]",
          { type: "literal", value: "[ligne]", description: "\"[ligne]\"" },
          function(u) {return {value: 1, units: {"[ligne]": 1}};},
          "[tbs_m]",
          { type: "literal", value: "[tbs_m]", description: "\"[tbs_m]\"" },
          function(u) {return {value: 1, units: {"[tbs_m]": 1}};},
          "[lb_ap]",
          { type: "literal", value: "[lb_ap]", description: "\"[lb_ap]\"" },
          function(u) {return {value: 1, units: {"[lb_ap]": 1}};},
          "[oz_ap]",
          { type: "literal", value: "[oz_ap]", description: "\"[oz_ap]\"" },
          function(u) {return {value: 1, units: {"[oz_ap]": 1}};},
          "[dr_ap]",
          { type: "literal", value: "[dr_ap]", description: "\"[dr_ap]\"" },
          function(u) {return {value: 1, units: {"[dr_ap]": 1}};},
          "[sc_ap]",
          { type: "literal", value: "[sc_ap]", description: "\"[sc_ap]\"" },
          function(u) {return {value: 1, units: {"[sc_ap]": 1}};},
          "[tsp_m]",
          { type: "literal", value: "[tsp_m]", description: "\"[tsp_m]\"" },
          function(u) {return {value: 1, units: {"[tsp_m]": 1}};},
          "[cup_m]",
          { type: "literal", value: "[cup_m]", description: "\"[cup_m]\"" },
          function(u) {return {value: 1, units: {"[cup_m]": 1}};},
          "[lb_tr]",
          { type: "literal", value: "[lb_tr]", description: "\"[lb_tr]\"" },
          function(u) {return {value: 1, units: {"[lb_tr]": 1}};},
          "[oz_tr]",
          { type: "literal", value: "[oz_tr]", description: "\"[oz_tr]\"" },
          function(u) {return {value: 1, units: {"[oz_tr]": 1}};},
          "[didot]",
          { type: "literal", value: "[didot]", description: "\"[didot]\"" },
          function(u) {return {value: 1, units: {"[didot]": 1}};},
          "[foz_m]",
          { type: "literal", value: "[foz_m]", description: "\"[foz_m]\"" },
          function(u) {return {value: 1, units: {"[foz_m]": 1}};},
          "[car_m]",
          { type: "literal", value: "[car_m]", description: "\"[car_m]\"" },
          function(u) {return {value: 1, units: {"[car_m]": 1}};},
          "[smoot]",
          { type: "literal", value: "[smoot]", description: "\"[smoot]\"" },
          function(u) {return {value: 1, units: {"[smoot]": 1}};},
          "[knk'U]",
          { type: "literal", value: "[knk'U]", description: "\"[knk'U]\"" },
          function(u) {return {value: 1, units: {"[knk'U]": 1}};},
          "[Btu_m]",
          { type: "literal", value: "[Btu_m]", description: "\"[Btu_m]\"" },
          function(u) {return {value: 1, units: {"[Btu_m]": 1}};},
          "[dr_av]",
          { type: "literal", value: "[dr_av]", description: "\"[dr_av]\"" },
          function(u) {return {value: 1, units: {"[dr_av]": 1}};},
          "[oz_av]",
          { type: "literal", value: "[oz_av]", description: "\"[oz_av]\"" },
          function(u) {return {value: 1, units: {"[oz_av]": 1}};},
          "[lb_av]",
          { type: "literal", value: "[lb_av]", description: "\"[lb_av]\"" },
          function(u) {return {value: 1, units: {"[lb_av]": 1}};},
          "[dye'U]",
          { type: "literal", value: "[dye'U]", description: "\"[dye'U]\"" },
          function(u) {return {value: 1, units: {"[dye'U]": 1}};},
          "[pk_us]",
          { type: "literal", value: "[pk_us]", description: "\"[pk_us]\"" },
          function(u) {return {value: 1, units: {"[pk_us]": 1}};},
          "[APL'U]",
          { type: "literal", value: "[APL'U]", description: "\"[APL'U]\"" },
          function(u) {return {value: 1, units: {"[APL'U]": 1}};},
          "[bu_us]",
          { type: "literal", value: "[bu_us]", description: "\"[bu_us]\"" },
          function(u) {return {value: 1, units: {"[bu_us]": 1}};},
          "[pt_br]",
          { type: "literal", value: "[pt_br]", description: "\"[pt_br]\"" },
          function(u) {return {value: 1, units: {"[pt_br]": 1}};},
          "[qt_br]",
          { type: "literal", value: "[qt_br]", description: "\"[qt_br]\"" },
          function(u) {return {value: 1, units: {"[qt_br]": 1}};},
          "[bu_br]",
          { type: "literal", value: "[bu_br]", description: "\"[bu_br]\"" },
          function(u) {return {value: 1, units: {"[bu_br]": 1}};},
          "[hp'_X]",
          { type: "literal", value: "[hp'_X]", description: "\"[hp'_X]\"" },
          function(u) {return {value: 1, units: {"[hp'_X]": 1}};},
          "[MPL'U]",
          { type: "literal", value: "[MPL'U]", description: "\"[MPL'U]\"" },
          function(u) {return {value: 1, units: {"[MPL'U]": 1}};},
          "[GPL'U]",
          { type: "literal", value: "[GPL'U]", description: "\"[GPL'U]\"" },
          function(u) {return {value: 1, units: {"[GPL'U]": 1}};},
          "[USP'U]",
          { type: "literal", value: "[USP'U]", description: "\"[USP'U]\"" },
          function(u) {return {value: 1, units: {"[USP'U]": 1}};},
          "[eps_0]",
          { type: "literal", value: "[eps_0]", description: "\"[eps_0]\"" },
          function(u) {return {value: 1, units: {"[eps_0]": 1}};},
          "[fth_i]",
          { type: "literal", value: "[fth_i]", description: "\"[fth_i]\"" },
          function(u) {return {value: 1, units: {"[fth_i]": 1}};},
          "[nmi_i]",
          { type: "literal", value: "[nmi_i]", description: "\"[nmi_i]\"" },
          function(u) {return {value: 1, units: {"[nmi_i]": 1}};},
          "[pt_us]",
          { type: "literal", value: "[pt_us]", description: "\"[pt_us]\"" },
          function(u) {return {value: 1, units: {"[pt_us]": 1}};},
          "[sin_i]",
          { type: "literal", value: "[sin_i]", description: "\"[sin_i]\"" },
          function(u) {return {value: 1, units: {"[sin_i]": 1}};},
          "[sft_i]",
          { type: "literal", value: "[sft_i]", description: "\"[sft_i]\"" },
          function(u) {return {value: 1, units: {"[sft_i]": 1}};},
          "[syd_i]",
          { type: "literal", value: "[syd_i]", description: "\"[syd_i]\"" },
          function(u) {return {value: 1, units: {"[syd_i]": 1}};},
          "[cin_i]",
          { type: "literal", value: "[cin_i]", description: "\"[cin_i]\"" },
          function(u) {return {value: 1, units: {"[cin_i]": 1}};},
          "[cft_i]",
          { type: "literal", value: "[cft_i]", description: "\"[cft_i]\"" },
          function(u) {return {value: 1, units: {"[cft_i]": 1}};},
          "[cyd_i]",
          { type: "literal", value: "[cyd_i]", description: "\"[cyd_i]\"" },
          function(u) {return {value: 1, units: {"[cyd_i]": 1}};},
          "[qt_us]",
          { type: "literal", value: "[qt_us]", description: "\"[qt_us]\"" },
          function(u) {return {value: 1, units: {"[qt_us]": 1}};},
          "[arb'U]",
          { type: "literal", value: "[arb'U]", description: "\"[arb'U]\"" },
          function(u) {return {value: 1, units: {"[arb'U]": 1}};},
          "[mil_i]",
          { type: "literal", value: "[mil_i]", description: "\"[mil_i]\"" },
          function(u) {return {value: 1, units: {"[mil_i]": 1}};},
          "[cml_i]",
          { type: "literal", value: "[cml_i]", description: "\"[cml_i]\"" },
          function(u) {return {value: 1, units: {"[cml_i]": 1}};},
          "[kn_br]",
          { type: "literal", value: "[kn_br]", description: "\"[kn_br]\"" },
          function(u) {return {value: 1, units: {"[kn_br]": 1}};},
          "[ft_us]",
          { type: "literal", value: "[ft_us]", description: "\"[ft_us]\"" },
          function(u) {return {value: 1, units: {"[ft_us]": 1}};},
          "[pouce]",
          { type: "literal", value: "[pouce]", description: "\"[pouce]\"" },
          function(u) {return {value: 1, units: {"[pouce]": 1}};},
          "[in_us]",
          { type: "literal", value: "[in_us]", description: "\"[in_us]\"" },
          function(u) {return {value: 1, units: {"[in_us]": 1}};},
          "[rd_us]",
          { type: "literal", value: "[rd_us]", description: "\"[rd_us]\"" },
          function(u) {return {value: 1, units: {"[rd_us]": 1}};},
          "[ch_us]",
          { type: "literal", value: "[ch_us]", description: "\"[ch_us]\"" },
          function(u) {return {value: 1, units: {"[ch_us]": 1}};},
          "[lk_us]",
          { type: "literal", value: "[lk_us]", description: "\"[lk_us]\"" },
          function(u) {return {value: 1, units: {"[lk_us]": 1}};},
          "[hp'_C]",
          { type: "literal", value: "[hp'_C]", description: "\"[hp'_C]\"" },
          function(u) {return {value: 1, units: {"[hp'_C]": 1}};},
          "[hp'_M]",
          { type: "literal", value: "[hp'_M]", description: "\"[hp'_M]\"" },
          function(u) {return {value: 1, units: {"[hp'_M]": 1}};},
          "[hp'_Q]",
          { type: "literal", value: "[hp'_Q]", description: "\"[hp'_Q]\"" },
          function(u) {return {value: 1, units: {"[hp'_Q]": 1}};},
          "[mi_br]",
          { type: "literal", value: "[mi_br]", description: "\"[mi_br]\"" },
          function(u) {return {value: 1, units: {"[mi_br]": 1}};},
          "[mi_us]",
          { type: "literal", value: "[mi_us]", description: "\"[mi_us]\"" },
          function(u) {return {value: 1, units: {"[mi_us]": 1}};},
          "[yd_br]",
          { type: "literal", value: "[yd_br]", description: "\"[yd_br]\"" },
          function(u) {return {value: 1, units: {"[yd_br]": 1}};},
          "[pk_br]",
          { type: "literal", value: "[pk_br]", description: "\"[pk_br]\"" },
          function(u) {return {value: 1, units: {"[pk_br]": 1}};},
          "[pc_br]",
          { type: "literal", value: "[pc_br]", description: "\"[pc_br]\"" },
          function(u) {return {value: 1, units: {"[pc_br]": 1}};},
          "[lk_br]",
          { type: "literal", value: "[lk_br]", description: "\"[lk_br]\"" },
          function(u) {return {value: 1, units: {"[lk_br]": 1}};},
          "[in_br]",
          { type: "literal", value: "[in_br]", description: "\"[in_br]\"" },
          function(u) {return {value: 1, units: {"[in_br]": 1}};},
          "[ft_br]",
          { type: "literal", value: "[ft_br]", description: "\"[ft_br]\"" },
          function(u) {return {value: 1, units: {"[ft_br]": 1}};},
          "[rd_br]",
          { type: "literal", value: "[rd_br]", description: "\"[rd_br]\"" },
          function(u) {return {value: 1, units: {"[rd_br]": 1}};},
          "[ch_br]",
          { type: "literal", value: "[ch_br]", description: "\"[ch_br]\"" },
          function(u) {return {value: 1, units: {"[ch_br]": 1}};},
          "[ft_i]",
          { type: "literal", value: "[ft_i]", description: "\"[ft_i]\"" },
          function(u) {return {value: 1, units: {"[ft_i]": 1}};},
          "[hp_Q]",
          { type: "literal", value: "[hp_Q]", description: "\"[hp_Q]\"" },
          function(u) {return {value: 1, units: {"[hp_Q]": 1}};},
          "[hp_M]",
          { type: "literal", value: "[hp_M]", description: "\"[hp_M]\"" },
          function(u) {return {value: 1, units: {"[hp_M]": 1}};},
          "[hp_C]",
          { type: "literal", value: "[hp_C]", description: "\"[hp_C]\"" },
          function(u) {return {value: 1, units: {"[hp_C]": 1}};},
          "[hp_X]",
          { type: "literal", value: "[hp_X]", description: "\"[hp_X]\"" },
          function(u) {return {value: 1, units: {"[hp_X]": 1}};},
          "[kp_C]",
          { type: "literal", value: "[kp_C]", description: "\"[kp_C]\"" },
          function(u) {return {value: 1, units: {"[kp_C]": 1}};},
          "[hd_i]",
          { type: "literal", value: "[hd_i]", description: "\"[hd_i]\"" },
          function(u) {return {value: 1, units: {"[hd_i]": 1}};},
          "[kp_M]",
          { type: "literal", value: "[kp_M]", description: "\"[kp_M]\"" },
          function(u) {return {value: 1, units: {"[kp_M]": 1}};},
          "[kp_Q]",
          { type: "literal", value: "[kp_Q]", description: "\"[kp_Q]\"" },
          function(u) {return {value: 1, units: {"[kp_Q]": 1}};},
          "[cr_i]",
          { type: "literal", value: "[cr_i]", description: "\"[cr_i]\"" },
          function(u) {return {value: 1, units: {"[cr_i]": 1}};},
          "[bf_i]",
          { type: "literal", value: "[bf_i]", description: "\"[bf_i]\"" },
          function(u) {return {value: 1, units: {"[bf_i]": 1}};},
          "[kn_i]",
          { type: "literal", value: "[kn_i]", description: "\"[kn_i]\"" },
          function(u) {return {value: 1, units: {"[kn_i]": 1}};},
          "[mu_0]",
          { type: "literal", value: "[mu_0]", description: "\"[mu_0]\"" },
          function(u) {return {value: 1, units: {"[mu_0]": 1}};},
          "[mi_i]",
          { type: "literal", value: "[mi_i]", description: "\"[mi_i]\"" },
          function(u) {return {value: 1, units: {"[mi_i]": 1}};},
          "[yd_i]",
          { type: "literal", value: "[yd_i]", description: "\"[yd_i]\"" },
          function(u) {return {value: 1, units: {"[yd_i]": 1}};},
          "[kp_X]",
          { type: "literal", value: "[kp_X]", description: "\"[kp_X]\"" },
          function(u) {return {value: 1, units: {"[kp_X]": 1}};},
          "[in_i]",
          { type: "literal", value: "[in_i]", description: "\"[in_i]\"" },
          function(u) {return {value: 1, units: {"[in_i]": 1}};},
          "[diop]",
          { type: "literal", value: "[diop]", description: "\"[diop]\"" },
          function(u) {return {value: 1, units: {"[diop]": 1}};},
          "cal_IT",
          { type: "literal", value: "cal_IT", description: "\"cal_IT\"" },
          function(u) {return {value: 1, units: {"cal_IT": 1}};},
          "cal_th",
          { type: "literal", value: "cal_th", description: "\"cal_th\"" },
          function(u) {return {value: 1, units: {"cal_th": 1}};},
          "m[H2O]",
          { type: "literal", value: "m[H2O]", description: "\"m[H2O]\"" },
          function(u) {return {value: 1, units: {"m[H2O]": 1}};},
          "[ka'U]",
          { type: "literal", value: "[ka'U]", description: "\"[ka'U]\"" },
          function(u) {return {value: 1, units: {"[ka'U]": 1}};},
          "B[SPL]",
          { type: "literal", value: "B[SPL]", description: "\"B[SPL]\"" },
          function(u) {return {value: 1, units: {"B[SPL]": 1}};},
          "[tb'U]",
          { type: "literal", value: "[tb'U]", description: "\"[tb'U]\"" },
          function(u) {return {value: 1, units: {"[tb'U]": 1}};},
          "[degR]",
          { type: "literal", value: "[degR]", description: "\"[degR]\"" },
          function(u) {return {value: 1, units: {"[degR]": 1}};},
          "[degF]",
          { type: "literal", value: "[degF]", description: "\"[degF]\"" },
          function(u) {return {value: 1, units: {"[degF]": 1}};},
          "[pptr]",
          { type: "literal", value: "[pptr]", description: "\"[pptr]\"" },
          function(u) {return {value: 1, units: {"[pptr]": 1}};},
          "[ppth]",
          { type: "literal", value: "[ppth]", description: "\"[ppth]\"" },
          function(u) {return {value: 1, units: {"[ppth]": 1}};},
          "[oz_m]",
          { type: "literal", value: "[oz_m]", description: "\"[oz_m]\"" },
          function(u) {return {value: 1, units: {"[oz_m]": 1}};},
          "[pied]",
          { type: "literal", value: "[pied]", description: "\"[pied]\"" },
          function(u) {return {value: 1, units: {"[pied]": 1}};},
          "[ppm]",
          { type: "literal", value: "[ppm]", description: "\"[ppm]\"" },
          function(u) {return {value: 1, units: {"[ppm]": 1}};},
          "[ppb]",
          { type: "literal", value: "[ppb]", description: "\"[ppb]\"" },
          function(u) {return {value: 1, units: {"[ppb]": 1}};},
          "bit_s",
          { type: "literal", value: "bit_s", description: "\"bit_s\"" },
          function(u) {return {value: 1, units: {"bit_s": 1}};},
          "[PNU]",
          { type: "literal", value: "[PNU]", description: "\"[PNU]\"" },
          function(u) {return {value: 1, units: {"[PNU]": 1}};},
          "[psi]",
          { type: "literal", value: "[psi]", description: "\"[psi]\"" },
          function(u) {return {value: 1, units: {"[psi]": 1}};},
          "[BAU]",
          { type: "literal", value: "[BAU]", description: "\"[BAU]\"" },
          function(u) {return {value: 1, units: {"[BAU]": 1}};},
          "[Cal]",
          { type: "literal", value: "[Cal]", description: "\"[Cal]\"" },
          function(u) {return {value: 1, units: {"[Cal]": 1}};},
          "B[mV]",
          { type: "literal", value: "B[mV]", description: "\"B[mV]\"" },
          function(u) {return {value: 1, units: {"B[mV]": 1}};},
          "B[uV]",
          { type: "literal", value: "B[uV]", description: "\"B[uV]\"" },
          function(u) {return {value: 1, units: {"B[uV]": 1}};},
          "[CFU]",
          { type: "literal", value: "[CFU]", description: "\"[CFU]\"" },
          function(u) {return {value: 1, units: {"[CFU]": 1}};},
          "[FFU]",
          { type: "literal", value: "[FFU]", description: "\"[FFU]\"" },
          function(u) {return {value: 1, units: {"[FFU]": 1}};},
          "B[kW]",
          { type: "literal", value: "B[kW]", description: "\"B[kW]\"" },
          function(u) {return {value: 1, units: {"B[kW]": 1}};},
          "[PFU]",
          { type: "literal", value: "[PFU]", description: "\"[PFU]\"" },
          function(u) {return {value: 1, units: {"[PFU]": 1}};},
          "cal_m",
          { type: "literal", value: "cal_m", description: "\"cal_m\"" },
          function(u) {return {value: 1, units: {"cal_m": 1}};},
          "[ELU]",
          { type: "literal", value: "[ELU]", description: "\"[ELU]\"" },
          function(u) {return {value: 1, units: {"[ELU]": 1}};},
          "[FEU]",
          { type: "literal", value: "[FEU]", description: "\"[FEU]\"" },
          function(u) {return {value: 1, units: {"[FEU]": 1}};},
          "[PRU]",
          { type: "literal", value: "[PRU]", description: "\"[PRU]\"" },
          function(u) {return {value: 1, units: {"[PRU]": 1}};},
          "[m_e]",
          { type: "literal", value: "[m_e]", description: "\"[m_e]\"" },
          function(u) {return {value: 1, units: {"[m_e]": 1}};},
          "[m_p]",
          { type: "literal", value: "[m_p]", description: "\"[m_p]\"" },
          function(u) {return {value: 1, units: {"[m_p]": 1}};},
          "m[Hg]",
          { type: "literal", value: "m[Hg]", description: "\"m[Hg]\"" },
          function(u) {return {value: 1, units: {"m[Hg]": 1}};},
          "[pca]",
          { type: "literal", value: "[pca]", description: "\"[pca]\"" },
          function(u) {return {value: 1, units: {"[pca]": 1}};},
          "[pnt]",
          { type: "literal", value: "[pnt]", description: "\"[pnt]\"" },
          function(u) {return {value: 1, units: {"[pnt]": 1}};},
          "[lne]",
          { type: "literal", value: "[lne]", description: "\"[lne]\"" },
          function(u) {return {value: 1, units: {"[lne]": 1}};},
          "[LPF]",
          { type: "literal", value: "[LPF]", description: "\"[LPF]\"" },
          function(u) {return {value: 1, units: {"[LPF]": 1}};},
          "[den]",
          { type: "literal", value: "[den]", description: "\"[den]\"" },
          function(u) {return {value: 1, units: {"[den]": 1}};},
          "[sct]",
          { type: "literal", value: "[sct]", description: "\"[sct]\"" },
          function(u) {return {value: 1, units: {"[sct]": 1}};},
          "[twp]",
          { type: "literal", value: "[twp]", description: "\"[twp]\"" },
          function(u) {return {value: 1, units: {"[twp]": 1}};},
          "[Btu]",
          { type: "literal", value: "[Btu]", description: "\"[Btu]\"" },
          function(u) {return {value: 1, units: {"[Btu]": 1}};},
          "[MET]",
          { type: "literal", value: "[MET]", description: "\"[MET]\"" },
          function(u) {return {value: 1, units: {"[MET]": 1}};},
          "[HPF]",
          { type: "literal", value: "[HPF]", description: "\"[HPF]\"" },
          function(u) {return {value: 1, units: {"[HPF]": 1}};},
          "[drp]",
          { type: "literal", value: "[drp]", description: "\"[drp]\"" },
          function(u) {return {value: 1, units: {"[drp]": 1}};},
          "[AU]",
          { type: "literal", value: "[AU]", description: "\"[AU]\"" },
          function(u) {return {value: 1, units: {"[AU]": 1}};},
          "[IU]",
          { type: "literal", value: "[IU]", description: "\"[IU]\"" },
          function(u) {return {value: 1, units: {"[IU]": 1}};},
          "mo_s",
          { type: "literal", value: "mo_s", description: "\"mo_s\"" },
          function(u) {return {value: 1, units: {"mo_s": 1}};},
          "[gr]",
          { type: "literal", value: "[gr]", description: "\"[gr]\"" },
          function(u) {return {value: 1, units: {"[gr]": 1}};},
          "circ",
          { type: "literal", value: "circ", description: "\"circ\"" },
          function(u) {return {value: 1, units: {"circ": 1}};},
          "[pi]",
          { type: "literal", value: "[pi]", description: "\"[pi]\"" },
          function(u) {return {value: 1, units: {"[pi]": 1}};},
          "[EU]",
          { type: "literal", value: "[EU]", description: "\"[EU]\"" },
          function(u) {return {value: 1, units: {"[EU]": 1}};},
          "[Lf]",
          { type: "literal", value: "[Lf]", description: "\"[Lf]\"" },
          function(u) {return {value: 1, units: {"[Lf]": 1}};},
          "mo_j",
          { type: "literal", value: "mo_j", description: "\"mo_j\"" },
          function(u) {return {value: 1, units: {"mo_j": 1}};},
          "B[W]",
          { type: "literal", value: "B[W]", description: "\"B[W]\"" },
          function(u) {return {value: 1, units: {"B[W]": 1}};},
          "B[V]",
          { type: "literal", value: "B[V]", description: "\"B[V]\"" },
          function(u) {return {value: 1, units: {"B[V]": 1}};},
          "mo_g",
          { type: "literal", value: "mo_g", description: "\"mo_g\"" },
          function(u) {return {value: 1, units: {"mo_g": 1}};},
          "[iU]",
          { type: "literal", value: "[iU]", description: "\"[iU]\"" },
          function(u) {return {value: 1, units: {"[iU]": 1}};},
          "[HP]",
          { type: "literal", value: "[HP]", description: "\"[HP]\"" },
          function(u) {return {value: 1, units: {"[HP]": 1}};},
          "[Ch]",
          { type: "literal", value: "[Ch]", description: "\"[Ch]\"" },
          function(u) {return {value: 1, units: {"[Ch]": 1}};},
          "[ly]",
          { type: "literal", value: "[ly]", description: "\"[ly]\"" },
          function(u) {return {value: 1, units: {"[ly]": 1}};},
          "[pH]",
          { type: "literal", value: "[pH]", description: "\"[pH]\"" },
          function(u) {return {value: 1, units: {"[pH]": 1}};},
          "a_j",
          { type: "literal", value: "a_j", description: "\"a_j\"" },
          function(u) {return {value: 1, units: {"a_j": 1}};},
          "rad",
          { type: "literal", value: "rad", description: "\"rad\"" },
          function(u) {return {value: 1, units: {"rad": 1}};},
          "a_t",
          { type: "literal", value: "a_t", description: "\"a_t\"" },
          function(u) {return {value: 1, units: {"a_t": 1}};},
          "Ohm",
          { type: "literal", value: "Ohm", description: "\"Ohm\"" },
          function(u) {return {value: 1, units: {"Ohm": 1}};},
          "sph",
          { type: "literal", value: "sph", description: "\"sph\"" },
          function(u) {return {value: 1, units: {"sph": 1}};},
          "bit",
          { type: "literal", value: "bit", description: "\"bit\"" },
          function(u) {return {value: 1, units: {"bit": 1}};},
          "mho",
          { type: "literal", value: "mho", description: "\"mho\"" },
          function(u) {return {value: 1, units: {"mho": 1}};},
          "min",
          { type: "literal", value: "min", description: "\"min\"" },
          function(u) {return {value: 1, units: {"min": 1}};},
          "mol",
          { type: "literal", value: "mol", description: "\"mol\"" },
          function(u) {return {value: 1, units: {"mol": 1}};},
          "deg",
          { type: "literal", value: "deg", description: "\"deg\"" },
          function(u) {return {value: 1, units: {"deg": 1}};},
          "gon",
          { type: "literal", value: "gon", description: "\"gon\"" },
          function(u) {return {value: 1, units: {"gon": 1}};},
          "Cel",
          { type: "literal", value: "Cel", description: "\"Cel\"" },
          function(u) {return {value: 1, units: {"Cel": 1}};},
          "kat",
          { type: "literal", value: "kat", description: "\"kat\"" },
          function(u) {return {value: 1, units: {"kat": 1}};},
          "att",
          { type: "literal", value: "att", description: "\"att\"" },
          function(u) {return {value: 1, units: {"att": 1}};},
          "osm",
          { type: "literal", value: "osm", description: "\"osm\"" },
          function(u) {return {value: 1, units: {"osm": 1}};},
          "tex",
          { type: "literal", value: "tex", description: "\"tex\"" },
          function(u) {return {value: 1, units: {"tex": 1}};},
          "cal",
          { type: "literal", value: "cal", description: "\"cal\"" },
          function(u) {return {value: 1, units: {"cal": 1}};},
          "REM",
          { type: "literal", value: "REM", description: "\"REM\"" },
          function(u) {return {value: 1, units: {"REM": 1}};},
          "RAD",
          { type: "literal", value: "RAD", description: "\"RAD\"" },
          function(u) {return {value: 1, units: {"RAD": 1}};},
          "a_g",
          { type: "literal", value: "a_g", description: "\"a_g\"" },
          function(u) {return {value: 1, units: {"a_g": 1}};},
          "Lmb",
          { type: "literal", value: "Lmb", description: "\"Lmb\"" },
          function(u) {return {value: 1, units: {"Lmb": 1}};},
          "atm",
          { type: "literal", value: "atm", description: "\"atm\"" },
          function(u) {return {value: 1, units: {"atm": 1}};},
          "erg",
          { type: "literal", value: "erg", description: "\"erg\"" },
          function(u) {return {value: 1, units: {"erg": 1}};},
          "dyn",
          { type: "literal", value: "dyn", description: "\"dyn\"" },
          function(u) {return {value: 1, units: {"dyn": 1}};},
          "Gal",
          { type: "literal", value: "Gal", description: "\"Gal\"" },
          function(u) {return {value: 1, units: {"Gal": 1}};},
          "10^",
          { type: "literal", value: "10^", description: "\"10^\"" },
          function(u) {return {value: 1, units: {"10^": 1}};},
          "10*",
          { type: "literal", value: "10*", description: "\"10*\"" },
          function(u) {return {value: 1, units: {"10*": 1}};},
          "[S]",
          { type: "literal", value: "[S]", description: "\"[S]\"" },
          function(u) {return {value: 1, units: {"[S]": 1}};},
          "[g]",
          { type: "literal", value: "[g]", description: "\"[g]\"" },
          function(u) {return {value: 1, units: {"[g]": 1}};},
          "[G]",
          { type: "literal", value: "[G]", description: "\"[G]\"" },
          function(u) {return {value: 1, units: {"[G]": 1}};},
          "[e]",
          { type: "literal", value: "[e]", description: "\"[e]\"" },
          function(u) {return {value: 1, units: {"[e]": 1}};},
          "[k]",
          { type: "literal", value: "[k]", description: "\"[k]\"" },
          function(u) {return {value: 1, units: {"[k]": 1}};},
          "[h]",
          { type: "literal", value: "[h]", description: "\"[h]\"" },
          function(u) {return {value: 1, units: {"[h]": 1}};},
          "[c]",
          { type: "literal", value: "[c]", description: "\"[c]\"" },
          function(u) {return {value: 1, units: {"[c]": 1}};},
          "bar",
          { type: "literal", value: "bar", description: "\"bar\"" },
          function(u) {return {value: 1, units: {"bar": 1}};},
          "lm",
          { type: "literal", value: "lm", description: "\"lm\"" },
          function(u) {return {value: 1, units: {"lm": 1}};},
          "Ci",
          { type: "literal", value: "Ci", description: "\"Ci\"" },
          function(u) {return {value: 1, units: {"Ci": 1}};},
          "ph",
          { type: "literal", value: "ph", description: "\"ph\"" },
          function(u) {return {value: 1, units: {"ph": 1}};},
          "cd",
          { type: "literal", value: "cd", description: "\"cd\"" },
          function(u) {return {value: 1, units: {"cd": 1}};},
          "Ao",
          { type: "literal", value: "Ao", description: "\"Ao\"" },
          function(u) {return {value: 1, units: {"Ao": 1}};},
          "Wb",
          { type: "literal", value: "Wb", description: "\"Wb\"" },
          function(u) {return {value: 1, units: {"Wb": 1}};},
          "Gb",
          { type: "literal", value: "Gb", description: "\"Gb\"" },
          function(u) {return {value: 1, units: {"Gb": 1}};},
          "Oe",
          { type: "literal", value: "Oe", description: "\"Oe\"" },
          function(u) {return {value: 1, units: {"Oe": 1}};},
          "lx",
          { type: "literal", value: "lx", description: "\"lx\"" },
          function(u) {return {value: 1, units: {"lx": 1}};},
          "Mx",
          { type: "literal", value: "Mx", description: "\"Mx\"" },
          function(u) {return {value: 1, units: {"Mx": 1}};},
          "St",
          { type: "literal", value: "St", description: "\"St\"" },
          function(u) {return {value: 1, units: {"St": 1}};},
          "Bi",
          { type: "literal", value: "Bi", description: "\"Bi\"" },
          function(u) {return {value: 1, units: {"Bi": 1}};},
          "Bq",
          { type: "literal", value: "Bq", description: "\"Bq\"" },
          function(u) {return {value: 1, units: {"Bq": 1}};},
          "Np",
          { type: "literal", value: "Np", description: "\"Np\"" },
          function(u) {return {value: 1, units: {"Np": 1}};},
          "AU",
          { type: "literal", value: "AU", description: "\"AU\"" },
          function(u) {return {value: 1, units: {"AU": 1}};},
          "mo",
          { type: "literal", value: "mo", description: "\"mo\"" },
          function(u) {return {value: 1, units: {"mo": 1}};},
          "Ky",
          { type: "literal", value: "Ky", description: "\"Ky\"" },
          function(u) {return {value: 1, units: {"Ky": 1}};},
          "gf",
          { type: "literal", value: "gf", description: "\"gf\"" },
          function(u) {return {value: 1, units: {"gf": 1}};},
          "wk",
          { type: "literal", value: "wk", description: "\"wk\"" },
          function(u) {return {value: 1, units: {"wk": 1}};},
          "Pa",
          { type: "literal", value: "Pa", description: "\"Pa\"" },
          function(u) {return {value: 1, units: {"Pa": 1}};},
          "g%",
          { type: "literal", value: "g%", description: "\"g%\"" },
          function(u) {return {value: 1, units: {"g%": 1}};},
          "sr",
          { type: "literal", value: "sr", description: "\"sr\"" },
          function(u) {return {value: 1, units: {"sr": 1}};},
          "Bd",
          { type: "literal", value: "Bd", description: "\"Bd\"" },
          function(u) {return {value: 1, units: {"Bd": 1}};},
          "eq",
          { type: "literal", value: "eq", description: "\"eq\"" },
          function(u) {return {value: 1, units: {"eq": 1}};},
          "By",
          { type: "literal", value: "By", description: "\"By\"" },
          function(u) {return {value: 1, units: {"By": 1}};},
          "Hz",
          { type: "literal", value: "Hz", description: "\"Hz\"" },
          function(u) {return {value: 1, units: {"Hz": 1}};},
          "''",
          { type: "literal", value: "''", description: "\"''\"" },
          function(u) {return {value: 1, units: {"''": 1}};},
          "pc",
          { type: "literal", value: "pc", description: "\"pc\"" },
          function(u) {return {value: 1, units: {"pc": 1}};},
          "eV",
          { type: "literal", value: "eV", description: "\"eV\"" },
          function(u) {return {value: 1, units: {"eV": 1}};},
          "Gy",
          { type: "literal", value: "Gy", description: "\"Gy\"" },
          function(u) {return {value: 1, units: {"Gy": 1}};},
          "st",
          { type: "literal", value: "st", description: "\"st\"" },
          function(u) {return {value: 1, units: {"st": 1}};},
          "Sv",
          { type: "literal", value: "Sv", description: "\"Sv\"" },
          function(u) {return {value: 1, units: {"Sv": 1}};},
          "ar",
          { type: "literal", value: "ar", description: "\"ar\"" },
          function(u) {return {value: 1, units: {"ar": 1}};},
          "sb",
          { type: "literal", value: "sb", description: "\"sb\"" },
          function(u) {return {value: 1, units: {"sb": 1}};},
          "L",
          { type: "literal", value: "L", description: "\"L\"" },
          function(u) {return {value: 1, units: {"L": 1}};},
          "t",
          { type: "literal", value: "t", description: "\"t\"" },
          function(u) {return {value: 1, units: {"t": 1}};},
          "u",
          { type: "literal", value: "u", description: "\"u\"" },
          function(u) {return {value: 1, units: {"u": 1}};},
          "P",
          { type: "literal", value: "P", description: "\"P\"" },
          function(u) {return {value: 1, units: {"P": 1}};},
          "G",
          { type: "literal", value: "G", description: "\"G\"" },
          function(u) {return {value: 1, units: {"G": 1}};},
          "R",
          { type: "literal", value: "R", description: "\"R\"" },
          function(u) {return {value: 1, units: {"R": 1}};},
          "H",
          { type: "literal", value: "H", description: "\"H\"" },
          function(u) {return {value: 1, units: {"H": 1}};},
          "T",
          { type: "literal", value: "T", description: "\"T\"" },
          function(u) {return {value: 1, units: {"T": 1}};},
          "U",
          { type: "literal", value: "U", description: "\"U\"" },
          function(u) {return {value: 1, units: {"U": 1}};},
          "B",
          { type: "literal", value: "B", description: "\"B\"" },
          function(u) {return {value: 1, units: {"B": 1}};},
          "S",
          { type: "literal", value: "S", description: "\"S\"" },
          function(u) {return {value: 1, units: {"S": 1}};},
          "m",
          { type: "literal", value: "m", description: "\"m\"" },
          function(u) {return {value: 1, units: {"m": 1}};},
          "s",
          { type: "literal", value: "s", description: "\"s\"" },
          function(u) {return {value: 1, units: {"s": 1}};},
          "F",
          { type: "literal", value: "F", description: "\"F\"" },
          function(u) {return {value: 1, units: {"F": 1}};},
          "l",
          { type: "literal", value: "l", description: "\"l\"" },
          function(u) {return {value: 1, units: {"l": 1}};},
          "V",
          { type: "literal", value: "V", description: "\"V\"" },
          function(u) {return {value: 1, units: {"V": 1}};},
          "A",
          { type: "literal", value: "A", description: "\"A\"" },
          function(u) {return {value: 1, units: {"A": 1}};},
          "W",
          { type: "literal", value: "W", description: "\"W\"" },
          function(u) {return {value: 1, units: {"W": 1}};},
          "K",
          { type: "literal", value: "K", description: "\"K\"" },
          function(u) {return {value: 1, units: {"K": 1}};},
          "C",
          { type: "literal", value: "C", description: "\"C\"" },
          function(u) {return {value: 1, units: {"C": 1}};},
          "b",
          { type: "literal", value: "b", description: "\"b\"" },
          function(u) {return {value: 1, units: {"b": 1}};},
          "%",
          { type: "literal", value: "%", description: "\"%\"" },
          function(u) {return {value: 1, units: {"%": 1}};},
          "J",
          { type: "literal", value: "J", description: "\"J\"" },
          function(u) {return {value: 1, units: {"J": 1}};},
          "'",
          { type: "literal", value: "'", description: "\"'\"" },
          function(u) {return {value: 1, units: {"'": 1}};},
          "h",
          { type: "literal", value: "h", description: "\"h\"" },
          function(u) {return {value: 1, units: {"h": 1}};},
          "d",
          { type: "literal", value: "d", description: "\"d\"" },
          function(u) {return {value: 1, units: {"d": 1}};},
          "N",
          { type: "literal", value: "N", description: "\"N\"" },
          function(u) {return {value: 1, units: {"N": 1}};},
          "a",
          { type: "literal", value: "a", description: "\"a\"" },
          function(u) {return {value: 1, units: {"a": 1}};},
          "g",
          { type: "literal", value: "g", description: "\"g\"" },
          function(u) {return {value: 1, units: {"g": 1}};},
          "Y",
          { type: "literal", value: "Y", description: "\"Y\"" },
          "Z",
          { type: "literal", value: "Z", description: "\"Z\"" },
          "E",
          { type: "literal", value: "E", description: "\"E\"" },
          "M",
          { type: "literal", value: "M", description: "\"M\"" },
          "k",
          { type: "literal", value: "k", description: "\"k\"" },
          "da",
          { type: "literal", value: "da", description: "\"da\"" },
          "c",
          { type: "literal", value: "c", description: "\"c\"" },
          "n",
          { type: "literal", value: "n", description: "\"n\"" },
          "p",
          { type: "literal", value: "p", description: "\"p\"" },
          "f",
          { type: "literal", value: "f", description: "\"f\"" },
          "z",
          { type: "literal", value: "z", description: "\"z\"" },
          "y",
          { type: "literal", value: "y", description: "\"y\"" },
          "Ki",
          { type: "literal", value: "Ki", description: "\"Ki\"" },
          "Mi",
          { type: "literal", value: "Mi", description: "\"Mi\"" },
          "Gi",
          { type: "literal", value: "Gi", description: "\"Gi\"" },
          "Ti",
          { type: "literal", value: "Ti", description: "\"Ti\"" }
        ],

        peg$bytecode = [
          peg$decode("!7!+' 4!6 !! %"),
          peg$decode("!.\"\"\"2\"3#+2$7#+(%4\"6$\"! %$\"# !\"# !*# \"7#"),
          peg$decode("!.%\"\"2%3&+-$7$+#%'\"%$\"# !\"# !*> \"!.\"\"\"2\"3#+-$7$+#%'\"%$\"# !\"# !"),
          peg$decode("!7$+;$ '7\",#&7\"\"+)%4\"6(\"\"! %$\"# !\"# !"),
          peg$decode("!7%+c$7&*# \" )+S% '7),#&7)\"+A%56* \"\"!)##\" !\" ++)%4$6,$\"#\"%$$# !$## !$\"# !\"# !*E \"!7(+:$ '7),#&7)\"+(%4\"6-\"!!%$\"# !\"# !"),
          peg$decode("!7'+' 4!6.!! %*Y \"!./\"\"2/30+B$7#+8%.1\"\"2132+(%4#63#!!%$## !$\"# !\"# !*# \"7)"),
          peg$decode("!04\"\"1!35*# \" )+3$7(+)%4\"66\"\"! %$\"# !\"# !"),
          peg$decode("!7+*# \" )+K$7*+A%567 \"! )##\" !\" ++)%4#68#\"\"!%$## !$\"# !\"# !*# \"7*"),
          peg$decode("! '09\"\"1!3:+,$,)&09\"\"1!3:\"\"\" !+i$.;\"\"2;3<*# \" )+S%7&*# \" )+C%56= #\"! )##\" !\" ++*%4$6>$##\"!%$$# !$## !$\"# !\"# !"),
          peg$decode("!.?\"\"2?3@+t$ '0A\"\"1!3B+,$,)&0A\"\"1!3B\"\"\" !+O%.C\"\"2C3D+?%56E !!)##\" !\" ++(%4$6F$!\"%$$# !$## !$\"# !\"# !"),
          peg$decode("!.G\"\"2G3H+' 4!6I!! %*\u1CCD \"!.J\"\"2J3K+' 4!6L!! %*\u1CB5 \"!.M\"\"2M3N+' 4!6O!! %*\u1C9D \"!.P\"\"2P3Q+' 4!6R!! %*\u1C85 \"!.S\"\"2S3T+' 4!6U!! %*\u1C6D \"!.V\"\"2V3W+' 4!6X!! %*\u1C55 \"!.Y\"\"2Y3Z+' 4!6[!! %*\u1C3D \"!.\\\"\"2\\3]+' 4!6^!! %*\u1C25 \"!._\"\"2_3`+' 4!6a!! %*\u1C0D \"!.b\"\"2b3c+' 4!6d!! %*\u1BF5 \"!.e\"\"2e3f+' 4!6g!! %*\u1BDD \"!.h\"\"2h3i+' 4!6j!! %*\u1BC5 \"!.k\"\"2k3l+' 4!6m!! %*\u1BAD \"!.n\"\"2n3o+' 4!6p!! %*\u1B95 \"!.q\"\"2q3r+' 4!6s!! %*\u1B7D \"!.t\"\"2t3u+' 4!6v!! %*\u1B65 \"!.w\"\"2w3x+' 4!6y!! %*\u1B4D \"!.z\"\"2z3{+' 4!6|!! %*\u1B35 \"!.}\"\"2}3~+' 4!6!! %*\u1B1D \"!.\x80\"\"2\x803\x81+' 4!6\x82!! %*\u1B05 \"!.\x83\"\"2\x833\x84+' 4!6\x85!! %*\u1AED \"!.\x86\"\"2\x863\x87+' 4!6\x88!! %*\u1AD5 \"!.\x89\"\"2\x893\x8A+' 4!6\x8B!! %*\u1ABD \"!.\x8C\"\"2\x8C3\x8D+' 4!6\x8E!! %*\u1AA5 \"!.\x8F\"\"2\x8F3\x90+' 4!6\x91!! %*\u1A8D \"!.\x92\"\"2\x923\x93+' 4!6\x94!! %*\u1A75 \"!.\x95\"\"2\x953\x96+' 4!6\x97!! %*\u1A5D \"!.\x98\"\"2\x983\x99+' 4!6\x9A!! %*\u1A45 \"!.\x9B\"\"2\x9B3\x9C+' 4!6\x9D!! %*\u1A2D \"!.\x9E\"\"2\x9E3\x9F+' 4!6\xA0!! %*\u1A15 \"!.\xA1\"\"2\xA13\xA2+' 4!6\xA3!! %*\u19FD \"!.\xA4\"\"2\xA43\xA5+' 4!6\xA6!! %*\u19E5 \"!.\xA7\"\"2\xA73\xA8+' 4!6\xA9!! %*\u19CD \"!.\xAA\"\"2\xAA3\xAB+' 4!6\xAC!! %*\u19B5 \"!.\xAD\"\"2\xAD3\xAE+' 4!6\xAF!! %*\u199D \"!.\xB0\"\"2\xB03\xB1+' 4!6\xB2!! %*\u1985 \"!.\xB3\"\"2\xB33\xB4+' 4!6\xB5!! %*\u196D \"!.\xB6\"\"2\xB63\xB7+' 4!6\xB8!! %*\u1955 \"!.\xB9\"\"2\xB93\xBA+' 4!6\xBB!! %*\u193D \"!.\xBC\"\"2\xBC3\xBD+' 4!6\xBE!! %*\u1925 \"!.\xBF\"\"2\xBF3\xC0+' 4!6\xC1!! %*\u190D \"!.\xC2\"\"2\xC23\xC3+' 4!6\xC4!! %*\u18F5 \"!.\xC5\"\"2\xC53\xC6+' 4!6\xC7!! %*\u18DD \"!.\xC8\"\"2\xC83\xC9+' 4!6\xCA!! %*\u18C5 \"!.\xCB\"\"2\xCB3\xCC+' 4!6\xCD!! %*\u18AD \"!.\xCE\"\"2\xCE3\xCF+' 4!6\xD0!! %*\u1895 \"!.\xD1\"\"2\xD13\xD2+' 4!6\xD3!! %*\u187D \"!.\xD4\"\"2\xD43\xD5+' 4!6\xD6!! %*\u1865 \"!.\xD7\"\"2\xD73\xD8+' 4!6\xD9!! %*\u184D \"!.\xDA\"\"2\xDA3\xDB+' 4!6\xDC!! %*\u1835 \"!.\xDD\"\"2\xDD3\xDE+' 4!6\xDF!! %*\u181D \"!.\xE0\"\"2\xE03\xE1+' 4!6\xE2!! %*\u1805 \"!.\xE3\"\"2\xE33\xE4+' 4!6\xE5!! %*\u17ED \"!.\xE6\"\"2\xE63\xE7+' 4!6\xE8!! %*\u17D5 \"!.\xE9\"\"2\xE93\xEA+' 4!6\xEB!! %*\u17BD \"!.\xEC\"\"2\xEC3\xED+' 4!6\xEE!! %*\u17A5 \"!.\xEF\"\"2\xEF3\xF0+' 4!6\xF1!! %*\u178D \"!.\xF2\"\"2\xF23\xF3+' 4!6\xF4!! %*\u1775 \"!.\xF5\"\"2\xF53\xF6+' 4!6\xF7!! %*\u175D \"!.\xF8\"\"2\xF83\xF9+' 4!6\xFA!! %*\u1745 \"!.\xFB\"\"2\xFB3\xFC+' 4!6\xFD!! %*\u172D \"!.\xFE\"\"2\xFE3\xFF+' 4!6\u0100!! %*\u1715 \"!.\u0101\"\"2\u01013\u0102+' 4!6\u0103!! %*\u16FD \"!.\u0104\"\"2\u01043\u0105+' 4!6\u0106!! %*\u16E5 \"!.\u0107\"\"2\u01073\u0108+' 4!6\u0109!! %*\u16CD \"!.\u010A\"\"2\u010A3\u010B+' 4!6\u010C!! %*\u16B5 \"!.\u010D\"\"2\u010D3\u010E+' 4!6\u010F!! %*\u169D \"!.\u0110\"\"2\u01103\u0111+' 4!6\u0112!! %*\u1685 \"!.\u0113\"\"2\u01133\u0114+' 4!6\u0115!! %*\u166D \"!.\u0116\"\"2\u01163\u0117+' 4!6\u0118!! %*\u1655 \"!.\u0119\"\"2\u01193\u011A+' 4!6\u011B!! %*\u163D \"!.\u011C\"\"2\u011C3\u011D+' 4!6\u011E!! %*\u1625 \"!.\u011F\"\"2\u011F3\u0120+' 4!6\u0121!! %*\u160D \"!.\u0122\"\"2\u01223\u0123+' 4!6\u0124!! %*\u15F5 \"!.\u0125\"\"2\u01253\u0126+' 4!6\u0127!! %*\u15DD \"!.\u0128\"\"2\u01283\u0129+' 4!6\u012A!! %*\u15C5 \"!.\u012B\"\"2\u012B3\u012C+' 4!6\u012D!! %*\u15AD \"!.\u012E\"\"2\u012E3\u012F+' 4!6\u0130!! %*\u1595 \"!.\u0131\"\"2\u01313\u0132+' 4!6\u0133!! %*\u157D \"!.\u0134\"\"2\u01343\u0135+' 4!6\u0136!! %*\u1565 \"!.\u0137\"\"2\u01373\u0138+' 4!6\u0139!! %*\u154D \"!.\u013A\"\"2\u013A3\u013B+' 4!6\u013C!! %*\u1535 \"!.\u013D\"\"2\u013D3\u013E+' 4!6\u013F!! %*\u151D \"!.\u0140\"\"2\u01403\u0141+' 4!6\u0142!! %*\u1505 \"!.\u0143\"\"2\u01433\u0144+' 4!6\u0145!! %*\u14ED \"!.\u0146\"\"2\u01463\u0147+' 4!6\u0148!! %*\u14D5 \"!.\u0149\"\"2\u01493\u014A+' 4!6\u014B!! %*\u14BD \"!.\u014C\"\"2\u014C3\u014D+' 4!6\u014E!! %*\u14A5 \"!.\u014F\"\"2\u014F3\u0150+' 4!6\u0151!! %*\u148D \"!.\u0152\"\"2\u01523\u0153+' 4!6\u0154!! %*\u1475 \"!.\u0155\"\"2\u01553\u0156+' 4!6\u0157!! %*\u145D \"!.\u0158\"\"2\u01583\u0159+' 4!6\u015A!! %*\u1445 \"!.\u015B\"\"2\u015B3\u015C+' 4!6\u015D!! %*\u142D \"!.\u015E\"\"2\u015E3\u015F+' 4!6\u0160!! %*\u1415 \"!.\u0161\"\"2\u01613\u0162+' 4!6\u0163!! %*\u13FD \"!.\u0164\"\"2\u01643\u0165+' 4!6\u0166!! %*\u13E5 \"!.\u0167\"\"2\u01673\u0168+' 4!6\u0169!! %*\u13CD \"!.\u016A\"\"2\u016A3\u016B+' 4!6\u016C!! %*\u13B5 \"!.\u016D\"\"2\u016D3\u016E+' 4!6\u016F!! %*\u139D \"!.\u0170\"\"2\u01703\u0171+' 4!6\u0172!! %*\u1385 \"!.\u0173\"\"2\u01733\u0174+' 4!6\u0175!! %*\u136D \"!.\u0176\"\"2\u01763\u0177+' 4!6\u0178!! %*\u1355 \"!.\u0179\"\"2\u01793\u017A+' 4!6\u017B!! %*\u133D \"!.\u017C\"\"2\u017C3\u017D+' 4!6\u017E!! %*\u1325 \"!.\u017F\"\"2\u017F3\u0180+' 4!6\u0181!! %*\u130D \"!.\u0182\"\"2\u01823\u0183+' 4!6\u0184!! %*\u12F5 \"!.\u0185\"\"2\u01853\u0186+' 4!6\u0187!! %*\u12DD \"!.\u0188\"\"2\u01883\u0189+' 4!6\u018A!! %*\u12C5 \"!.\u018B\"\"2\u018B3\u018C+' 4!6\u018D!! %*\u12AD \"!.\u018E\"\"2\u018E3\u018F+' 4!6\u0190!! %*\u1295 \"!.\u0191\"\"2\u01913\u0192+' 4!6\u0193!! %*\u127D \"!.\u0194\"\"2\u01943\u0195+' 4!6\u0196!! %*\u1265 \"!.\u0197\"\"2\u01973\u0198+' 4!6\u0199!! %*\u124D \"!.\u019A\"\"2\u019A3\u019B+' 4!6\u019C!! %*\u1235 \"!.\u019D\"\"2\u019D3\u019E+' 4!6\u019F!! %*\u121D \"!.\u01A0\"\"2\u01A03\u01A1+' 4!6\u01A2!! %*\u1205 \"!.\u01A3\"\"2\u01A33\u01A4+' 4!6\u01A5!! %*\u11ED \"!.\u01A6\"\"2\u01A63\u01A7+' 4!6\u01A8!! %*\u11D5 \"!.\u01A9\"\"2\u01A93\u01AA+' 4!6\u01AB!! %*\u11BD \"!.\u01AC\"\"2\u01AC3\u01AD+' 4!6\u01AE!! %*\u11A5 \"!.\u01AF\"\"2\u01AF3\u01B0+' 4!6\u01B1!! %*\u118D \"!.\u01B2\"\"2\u01B23\u01B3+' 4!6\u01B4!! %*\u1175 \"!.\u01B5\"\"2\u01B53\u01B6+' 4!6\u01B7!! %*\u115D \"!.\u01B8\"\"2\u01B83\u01B9+' 4!6\u01BA!! %*\u1145 \"!.\u01BB\"\"2\u01BB3\u01BC+' 4!6\u01BD!! %*\u112D \"!.\u01BE\"\"2\u01BE3\u01BF+' 4!6\u01C0!! %*\u1115 \"!.\u01C1\"\"2\u01C13\u01C2+' 4!6\u01C3!! %*\u10FD \"!.\u01C4\"\"2\u01C43\u01C5+' 4!6\u01C6!! %*\u10E5 \"!.\u01C7\"\"2\u01C73\u01C8+' 4!6\u01C9!! %*\u10CD \"!.\u01CA\"\"2\u01CA3\u01CB+' 4!6\u01CC!! %*\u10B5 \"!.\u01CD\"\"2\u01CD3\u01CE+' 4!6\u01CF!! %*\u109D \"!.\u01D0\"\"2\u01D03\u01D1+' 4!6\u01D2!! %*\u1085 \"!.\u01D3\"\"2\u01D33\u01D4+' 4!6\u01D5!! %*\u106D \"!.\u01D6\"\"2\u01D63\u01D7+' 4!6\u01D8!! %*\u1055 \"!.\u01D9\"\"2\u01D93\u01DA+' 4!6\u01DB!! %*\u103D \"!.\u01DC\"\"2\u01DC3\u01DD+' 4!6\u01DE!! %*\u1025 \"!.\u01DF\"\"2\u01DF3\u01E0+' 4!6\u01E1!! %*\u100D \"!.\u01E2\"\"2\u01E23\u01E3+' 4!6\u01E4!! %*\u0FF5 \"!.\u01E5\"\"2\u01E53\u01E6+' 4!6\u01E7!! %*\u0FDD \"!.\u01E8\"\"2\u01E83\u01E9+' 4!6\u01EA!! %*\u0FC5 \"!.\u01EB\"\"2\u01EB3\u01EC+' 4!6\u01ED!! %*\u0FAD \"!.\u01EE\"\"2\u01EE3\u01EF+' 4!6\u01F0!! %*\u0F95 \"!.\u01F1\"\"2\u01F13\u01F2+' 4!6\u01F3!! %*\u0F7D \"!.\u01F4\"\"2\u01F43\u01F5+' 4!6\u01F6!! %*\u0F65 \"!.\u01F7\"\"2\u01F73\u01F8+' 4!6\u01F9!! %*\u0F4D \"!.\u01FA\"\"2\u01FA3\u01FB+' 4!6\u01FC!! %*\u0F35 \"!.\u01FD\"\"2\u01FD3\u01FE+' 4!6\u01FF!! %*\u0F1D \"!.\u0200\"\"2\u02003\u0201+' 4!6\u0202!! %*\u0F05 \"!.\u0203\"\"2\u02033\u0204+' 4!6\u0205!! %*\u0EED \"!.\u0206\"\"2\u02063\u0207+' 4!6\u0208!! %*\u0ED5 \"!.\u0209\"\"2\u02093\u020A+' 4!6\u020B!! %*\u0EBD \"!.\u020C\"\"2\u020C3\u020D+' 4!6\u020E!! %*\u0EA5 \"!.\u020F\"\"2\u020F3\u0210+' 4!6\u0211!! %*\u0E8D \"!.\u0212\"\"2\u02123\u0213+' 4!6\u0214!! %*\u0E75 \"!.\u0215\"\"2\u02153\u0216+' 4!6\u0217!! %*\u0E5D \"!.\u0218\"\"2\u02183\u0219+' 4!6\u021A!! %*\u0E45 \"!.\u021B\"\"2\u021B3\u021C+' 4!6\u021D!! %*\u0E2D \"!.\u021E\"\"2\u021E3\u021F+' 4!6\u0220!! %*\u0E15 \"!.\u0221\"\"2\u02213\u0222+' 4!6\u0223!! %*\u0DFD \"!.\u0224\"\"2\u02243\u0225+' 4!6\u0226!! %*\u0DE5 \"!.\u0227\"\"2\u02273\u0228+' 4!6\u0229!! %*\u0DCD \"!.\u022A\"\"2\u022A3\u022B+' 4!6\u022C!! %*\u0DB5 \"!.\u022D\"\"2\u022D3\u022E+' 4!6\u022F!! %*\u0D9D \"!.\u0230\"\"2\u02303\u0231+' 4!6\u0232!! %*\u0D85 \"!.\u0233\"\"2\u02333\u0234+' 4!6\u0235!! %*\u0D6D \"!.\u0236\"\"2\u02363\u0237+' 4!6\u0238!! %*\u0D55 \"!.\u0239\"\"2\u02393\u023A+' 4!6\u023B!! %*\u0D3D \"!.\u023C\"\"2\u023C3\u023D+' 4!6\u023E!! %*\u0D25 \"!.\u023F\"\"2\u023F3\u0240+' 4!6\u0241!! %*\u0D0D \"!.\u0242\"\"2\u02423\u0243+' 4!6\u0244!! %*\u0CF5 \"!.\u0245\"\"2\u02453\u0246+' 4!6\u0247!! %*\u0CDD \"!.\u0248\"\"2\u02483\u0249+' 4!6\u024A!! %*\u0CC5 \"!.\u024B\"\"2\u024B3\u024C+' 4!6\u024D!! %*\u0CAD \"!.\u024E\"\"2\u024E3\u024F+' 4!6\u0250!! %*\u0C95 \"!.\u0251\"\"2\u02513\u0252+' 4!6\u0253!! %*\u0C7D \"!.\u0254\"\"2\u02543\u0255+' 4!6\u0256!! %*\u0C65 \"!.\u0257\"\"2\u02573\u0258+' 4!6\u0259!! %*\u0C4D \"!.\u025A\"\"2\u025A3\u025B+' 4!6\u025C!! %*\u0C35 \"!.\u025D\"\"2\u025D3\u025E+' 4!6\u025F!! %*\u0C1D \"!.\u0260\"\"2\u02603\u0261+' 4!6\u0262!! %*\u0C05 \"!.\u0263\"\"2\u02633\u0264+' 4!6\u0265!! %*\u0BED \"!.\u0266\"\"2\u02663\u0267+' 4!6\u0268!! %*\u0BD5 \"!.\u0269\"\"2\u02693\u026A+' 4!6\u026B!! %*\u0BBD \"!.\u026C\"\"2\u026C3\u026D+' 4!6\u026E!! %*\u0BA5 \"!.\u026F\"\"2\u026F3\u0270+' 4!6\u0271!! %*\u0B8D \"!.\u0272\"\"2\u02723\u0273+' 4!6\u0274!! %*\u0B75 \"!.\u0275\"\"2\u02753\u0276+' 4!6\u0277!! %*\u0B5D \"!.\u0278\"\"2\u02783\u0279+' 4!6\u027A!! %*\u0B45 \"!.\u027B\"\"2\u027B3\u027C+' 4!6\u027D!! %*\u0B2D \"!.\u027E\"\"2\u027E3\u027F+' 4!6\u0280!! %*\u0B15 \"!.\u0281\"\"2\u02813\u0282+' 4!6\u0283!! %*\u0AFD \"!.\u0284\"\"2\u02843\u0285+' 4!6\u0286!! %*\u0AE5 \"!.\u0287\"\"2\u02873\u0288+' 4!6\u0289!! %*\u0ACD \"!.\u028A\"\"2\u028A3\u028B+' 4!6\u028C!! %*\u0AB5 \"!.\u028D\"\"2\u028D3\u028E+' 4!6\u028F!! %*\u0A9D \"!.\u0290\"\"2\u02903\u0291+' 4!6\u0292!! %*\u0A85 \"!.\u0293\"\"2\u02933\u0294+' 4!6\u0295!! %*\u0A6D \"!.\u0296\"\"2\u02963\u0297+' 4!6\u0298!! %*\u0A55 \"!.\u0299\"\"2\u02993\u029A+' 4!6\u029B!! %*\u0A3D \"!.\u029C\"\"2\u029C3\u029D+' 4!6\u029E!! %*\u0A25 \"!.\u029F\"\"2\u029F3\u02A0+' 4!6\u02A1!! %*\u0A0D \"!.\u02A2\"\"2\u02A23\u02A3+' 4!6\u02A4!! %*\u09F5 \"!.\u02A5\"\"2\u02A53\u02A6+' 4!6\u02A7!! %*\u09DD \"!.\u02A8\"\"2\u02A83\u02A9+' 4!6\u02AA!! %*\u09C5 \"!.\u02AB\"\"2\u02AB3\u02AC+' 4!6\u02AD!! %*\u09AD \"!.\u02AE\"\"2\u02AE3\u02AF+' 4!6\u02B0!! %*\u0995 \"!.\u02B1\"\"2\u02B13\u02B2+' 4!6\u02B3!! %*\u097D \"!.\u02B4\"\"2\u02B43\u02B5+' 4!6\u02B6!! %*\u0965 \"!.\u02B7\"\"2\u02B73\u02B8+' 4!6\u02B9!! %*\u094D \"!.\u02BA\"\"2\u02BA3\u02BB+' 4!6\u02BC!! %*\u0935 \"!.\u02BD\"\"2\u02BD3\u02BE+' 4!6\u02BF!! %*\u091D \"!.\u02C0\"\"2\u02C03\u02C1+' 4!6\u02C2!! %*\u0905 \"!.\u02C3\"\"2\u02C33\u02C4+' 4!6\u02C5!! %*\u08ED \"!.\u02C6\"\"2\u02C63\u02C7+' 4!6\u02C8!! %*\u08D5 \"!.\u02C9\"\"2\u02C93\u02CA+' 4!6\u02CB!! %*\u08BD \"!.\u02CC\"\"2\u02CC3\u02CD+' 4!6\u02CE!! %*\u08A5 \"!.\u02CF\"\"2\u02CF3\u02D0+' 4!6\u02D1!! %*\u088D \"!.\u02D2\"\"2\u02D23\u02D3+' 4!6\u02D4!! %*\u0875 \"!.\u02D5\"\"2\u02D53\u02D6+' 4!6\u02D7!! %*\u085D \"!.\u02D8\"\"2\u02D83\u02D9+' 4!6\u02DA!! %*\u0845 \"!.\u02DB\"\"2\u02DB3\u02DC+' 4!6\u02DD!! %*\u082D \"!.\u02DE\"\"2\u02DE3\u02DF+' 4!6\u02E0!! %*\u0815 \"!.\u02E1\"\"2\u02E13\u02E2+' 4!6\u02E3!! %*\u07FD \"!.\u02E4\"\"2\u02E43\u02E5+' 4!6\u02E6!! %*\u07E5 \"!.\u02E7\"\"2\u02E73\u02E8+' 4!6\u02E9!! %*\u07CD \"!.\u02EA\"\"2\u02EA3\u02EB+' 4!6\u02EC!! %*\u07B5 \"!.\u02ED\"\"2\u02ED3\u02EE+' 4!6\u02EF!! %*\u079D \"!.\u02F0\"\"2\u02F03\u02F1+' 4!6\u02F2!! %*\u0785 \"!.\u02F3\"\"2\u02F33\u02F4+' 4!6\u02F5!! %*\u076D \"!.\u02F6\"\"2\u02F63\u02F7+' 4!6\u02F8!! %*\u0755 \"!.\u02F9\"\"2\u02F93\u02FA+' 4!6\u02FB!! %*\u073D \"!.\u02FC\"\"2\u02FC3\u02FD+' 4!6\u02FE!! %*\u0725 \"!.\u02FF\"\"2\u02FF3\u0300+' 4!6\u0301!! %*\u070D \"!.\u0302\"\"2\u03023\u0303+' 4!6\u0304!! %*\u06F5 \"!.\u0305\"\"2\u03053\u0306+' 4!6\u0307!! %*\u06DD \"!.\u0308\"\"2\u03083\u0309+' 4!6\u030A!! %*\u06C5 \"!.\u030B\"\"2\u030B3\u030C+' 4!6\u030D!! %*\u06AD \"!.\u030E\"\"2\u030E3\u030F+' 4!6\u0310!! %*\u0695 \"!.\u0311\"\"2\u03113\u0312+' 4!6\u0313!! %*\u067D \"!.\u0314\"\"2\u03143\u0315+' 4!6\u0316!! %*\u0665 \"!.\u0317\"\"2\u03173\u0318+' 4!6\u0319!! %*\u064D \"!.\u031A\"\"2\u031A3\u031B+' 4!6\u031C!! %*\u0635 \"!.\u031D\"\"2\u031D3\u031E+' 4!6\u031F!! %*\u061D \"!.\u0320\"\"2\u03203\u0321+' 4!6\u0322!! %*\u0605 \"!.\u0323\"\"2\u03233\u0324+' 4!6\u0325!! %*\u05ED \"!.\u0326\"\"2\u03263\u0327+' 4!6\u0328!! %*\u05D5 \"!.\u0329\"\"2\u03293\u032A+' 4!6\u032B!! %*\u05BD \"!.\u032C\"\"2\u032C3\u032D+' 4!6\u032E!! %*\u05A5 \"!.\u032F\"\"2\u032F3\u0330+' 4!6\u0331!! %*\u058D \"!.\u0332\"\"2\u03323\u0333+' 4!6\u0334!! %*\u0575 \"!.\u0335\"\"2\u03353\u0336+' 4!6\u0337!! %*\u055D \"!.\u0338\"\"2\u03383\u0339+' 4!6\u033A!! %*\u0545 \"!.\u033B\"\"2\u033B3\u033C+' 4!6\u033D!! %*\u052D \"!.\u033E\"\"2\u033E3\u033F+' 4!6\u0340!! %*\u0515 \"!.\u0341\"\"2\u03413\u0342+' 4!6\u0343!! %*\u04FD \"!.\u0344\"\"2\u03443\u0345+' 4!6\u0346!! %*\u04E5 \"!.\u0347\"\"2\u03473\u0348+' 4!6\u0349!! %*\u04CD \"!.\u034A\"\"2\u034A3\u034B+' 4!6\u034C!! %*\u04B5 \"!.\u034D\"\"2\u034D3\u034E+' 4!6\u034F!! %*\u049D \"!.\u0350\"\"2\u03503\u0351+' 4!6\u0352!! %*\u0485 \"!.\u0353\"\"2\u03533\u0354+' 4!6\u0355!! %*\u046D \"!.\u0356\"\"2\u03563\u0357+' 4!6\u0358!! %*\u0455 \"!.\u0359\"\"2\u03593\u035A+' 4!6\u035B!! %*\u043D \"!.\u035C\"\"2\u035C3\u035D+' 4!6\u035E!! %*\u0425 \"!.\u035F\"\"2\u035F3\u0360+' 4!6\u0361!! %*\u040D \"!.\u0362\"\"2\u03623\u0363+' 4!6\u0364!! %*\u03F5 \"!.\u0365\"\"2\u03653\u0366+' 4!6\u0367!! %*\u03DD \"!.\u0368\"\"2\u03683\u0369+' 4!6\u036A!! %*\u03C5 \"!.\u036B\"\"2\u036B3\u036C+' 4!6\u036D!! %*\u03AD \"!.\u036E\"\"2\u036E3\u036F+' 4!6\u0370!! %*\u0395 \"!.\u0371\"\"2\u03713\u0372+' 4!6\u0373!! %*\u037D \"!.\u0374\"\"2\u03743\u0375+' 4!6\u0376!! %*\u0365 \"!.\u0377\"\"2\u03773\u0378+' 4!6\u0379!! %*\u034D \"!.\u037A\"\"2\u037A3\u037B+' 4!6\u037C!! %*\u0335 \"!.\u037D\"\"2\u037D3\u037E+' 4!6\u037F!! %*\u031D \"!.\u0380\"\"2\u03803\u0381+' 4!6\u0382!! %*\u0305 \"!.\u0383\"\"2\u03833\u0384+' 4!6\u0385!! %*\u02ED \"!.\u0386\"\"2\u03863\u0387+' 4!6\u0388!! %*\u02D5 \"!.\u0389\"\"2\u03893\u038A+' 4!6\u038B!! %*\u02BD \"!.\u038C\"\"2\u038C3\u038D+' 4!6\u038E!! %*\u02A5 \"!.\u038F\"\"2\u038F3\u0390+' 4!6\u0391!! %*\u028D \"!.\u0392\"\"2\u03923\u0393+' 4!6\u0394!! %*\u0275 \"!.\u0395\"\"2\u03953\u0396+' 4!6\u0397!! %*\u025D \"!.\u0398\"\"2\u03983\u0399+' 4!6\u039A!! %*\u0245 \"!.\u039B\"\"2\u039B3\u039C+' 4!6\u039D!! %*\u022D \"!.\u039E\"\"2\u039E3\u039F+' 4!6\u03A0!! %*\u0215 \"!.\u03A1\"\"2\u03A13\u03A2+' 4!6\u03A3!! %*\u01FD \"!.\u03A4\"\"2\u03A43\u03A5+' 4!6\u03A6!! %*\u01E5 \"!.\u03A7\"\"2\u03A73\u03A8+' 4!6\u03A9!! %*\u01CD \"!.\u03AA\"\"2\u03AA3\u03AB+' 4!6\u03AC!! %*\u01B5 \"!.\u03AD\"\"2\u03AD3\u03AE+' 4!6\u03AF!! %*\u019D \"!.\u03B0\"\"2\u03B03\u03B1+' 4!6\u03B2!! %*\u0185 \"!.\u03B3\"\"2\u03B33\u03B4+' 4!6\u03B5!! %*\u016D \"!.\u03B6\"\"2\u03B63\u03B7+' 4!6\u03B8!! %*\u0155 \"!.\u03B9\"\"2\u03B93\u03BA+' 4!6\u03BB!! %*\u013D \"!.\u03BC\"\"2\u03BC3\u03BD+' 4!6\u03BE!! %*\u0125 \"!.\u03BF\"\"2\u03BF3\u03C0+' 4!6\u03C1!! %*\u010D \"!.\u03C2\"\"2\u03C23\u03C3+' 4!6\u03C4!! %*\xF5 \"!.\u03C5\"\"2\u03C53\u03C6+' 4!6\u03C7!! %*\xDD \"!.\u03C8\"\"2\u03C83\u03C9+' 4!6\u03CA!! %*\xC5 \"!.\u03CB\"\"2\u03CB3\u03CC+' 4!6\u03CD!! %*\xAD \"!.\u03CE\"\"2\u03CE3\u03CF+' 4!6\u03D0!! %*\x95 \"!.\u03D1\"\"2\u03D13\u03D2+' 4!6\u03D3!! %*} \"!.\u03D4\"\"2\u03D43\u03D5+' 4!6\u03D6!! %*e \"!.\u03D7\"\"2\u03D73\u03D8+' 4!6\u03D9!! %*M \"!.\u03DA\"\"2\u03DA3\u03DB+' 4!6\u03DC!! %*5 \"!.\u03DD\"\"2\u03DD3\u03DE+' 4!6\u03DF!! %"),
          peg$decode(".\u03E0\"\"2\u03E03\u03E1*\u0131 \".\u03E2\"\"2\u03E23\u03E3*\u0125 \".\u03E4\"\"2\u03E43\u03E5*\u0119 \".\u0392\"\"2\u03923\u0393*\u010D \".\u039E\"\"2\u039E3\u039F*\u0101 \".\u0395\"\"2\u03953\u0396*\xF5 \".\u03E6\"\"2\u03E63\u03E7*\xE9 \".\u03E8\"\"2\u03E83\u03E9*\xDD \".\u03D1\"\"2\u03D13\u03D2*\xD1 \".\u03EA\"\"2\u03EA3\u03EB*\xC5 \".\u03D4\"\"2\u03D43\u03D5*\xB9 \".\u03EC\"\"2\u03EC3\u03ED*\xAD \".\u03AA\"\"2\u03AA3\u03AB*\xA1 \".\u038F\"\"2\u038F3\u0390*\x95 \".\u03EE\"\"2\u03EE3\u03EF*\x89 \".\u03F0\"\"2\u03F03\u03F1*} \".\u03F2\"\"2\u03F23\u03F3*q \".\u03DA\"\"2\u03DA3\u03DB*e \".\u03F4\"\"2\u03F43\u03F5*Y \".\u03F6\"\"2\u03F63\u03F7*M \".\u03F8\"\"2\u03F83\u03F9*A \".\u03FA\"\"2\u03FA3\u03FB*5 \".\u03FC\"\"2\u03FC3\u03FD*) \".\u03FE\"\"2\u03FE3\u03FF")
        ],

        peg$currPos          = 0,
        peg$reportedPos      = 0,
        peg$cachedPos        = 0,
        peg$cachedPosDetails = { line: 1, column: 1, seenCR: false },
        peg$maxFailPos       = 0,
        peg$maxFailExpected  = [],
        peg$silentFails      = 0,

        peg$result;

    if ("startRule" in options) {
      if (!(options.startRule in peg$startRuleIndices)) {
        throw new Error("Can't start parsing from rule \"" + options.startRule + "\".");
      }

      peg$startRuleIndex = peg$startRuleIndices[options.startRule];
    }

    function text() {
      return input.substring(peg$reportedPos, peg$currPos);
    }

    function offset() {
      return peg$reportedPos;
    }

    function line() {
      return peg$computePosDetails(peg$reportedPos).line;
    }

    function column() {
      return peg$computePosDetails(peg$reportedPos).column;
    }

    function expected(description) {
      throw peg$buildException(
        null,
        [{ type: "other", description: description }],
        peg$reportedPos
      );
    }

    function error(message) {
      throw peg$buildException(message, null, peg$reportedPos);
    }

    function peg$computePosDetails(pos) {
      function advance(details, startPos, endPos) {
        var p, ch;

        for (p = startPos; p < endPos; p++) {
          ch = input.charAt(p);
          if (ch === "\n") {
            if (!details.seenCR) { details.line++; }
            details.column = 1;
            details.seenCR = false;
          } else if (ch === "\r" || ch === "\u2028" || ch === "\u2029") {
            details.line++;
            details.column = 1;
            details.seenCR = true;
          } else {
            details.column++;
            details.seenCR = false;
          }
        }
      }

      if (peg$cachedPos !== pos) {
        if (peg$cachedPos > pos) {
          peg$cachedPos = 0;
          peg$cachedPosDetails = { line: 1, column: 1, seenCR: false };
        }
        advance(peg$cachedPosDetails, peg$cachedPos, pos);
        peg$cachedPos = pos;
      }

      return peg$cachedPosDetails;
    }

    function peg$fail(expected) {
      if (peg$currPos < peg$maxFailPos) { return; }

      if (peg$currPos > peg$maxFailPos) {
        peg$maxFailPos = peg$currPos;
        peg$maxFailExpected = [];
      }

      peg$maxFailExpected.push(expected);
    }

    function peg$buildException(message, expected, pos) {
      function cleanupExpected(expected) {
        var i = 1;

        expected.sort(function(a, b) {
          if (a.description < b.description) {
            return -1;
          } else if (a.description > b.description) {
            return 1;
          } else {
            return 0;
          }
        });

        while (i < expected.length) {
          if (expected[i - 1] === expected[i]) {
            expected.splice(i, 1);
          } else {
            i++;
          }
        }
      }

      function buildMessage(expected, found) {
        function stringEscape(s) {
          function hex(ch) { return ch.charCodeAt(0).toString(16).toUpperCase(); }

          return s
            .replace(/\\/g,   '\\\\')
            .replace(/"/g,    '\\"')
            .replace(/\x08/g, '\\b')
            .replace(/\t/g,   '\\t')
            .replace(/\n/g,   '\\n')
            .replace(/\f/g,   '\\f')
            .replace(/\r/g,   '\\r')
            .replace(/[\x00-\x07\x0B\x0E\x0F]/g, function(ch) { return '\\x0' + hex(ch); })
            .replace(/[\x10-\x1F\x80-\xFF]/g,    function(ch) { return '\\x'  + hex(ch); })
            .replace(/[\u0180-\u0FFF]/g,         function(ch) { return '\\u0' + hex(ch); })
            .replace(/[\u1080-\uFFFF]/g,         function(ch) { return '\\u'  + hex(ch); });
        }

        var expectedDescs = new Array(expected.length),
            expectedDesc, foundDesc, i;

        for (i = 0; i < expected.length; i++) {
          expectedDescs[i] = expected[i].description;
        }

        expectedDesc = expected.length > 1
          ? expectedDescs.slice(0, -1).join(", ")
              + " or "
              + expectedDescs[expected.length - 1]
          : expectedDescs[0];

        foundDesc = found ? "\"" + stringEscape(found) + "\"" : "end of input";

        return "Expected " + expectedDesc + " but " + foundDesc + " found.";
      }

      var posDetails = peg$computePosDetails(pos),
          found      = pos < input.length ? input.charAt(pos) : null;

      if (expected !== null) {
        cleanupExpected(expected);
      }

      return new SyntaxError(
        message !== null ? message : buildMessage(expected, found),
        expected,
        found,
        pos,
        posDetails.line,
        posDetails.column
      );
    }

    function peg$decode(s) {
      var bc = new Array(s.length), i;

      for (i = 0; i < s.length; i++) {
        bc[i] = s.charCodeAt(i) - 32;
      }

      return bc;
    }

    function peg$parseRule(index) {
      var bc    = peg$bytecode[index],
          ip    = 0,
          ips   = [],
          end   = bc.length,
          ends  = [],
          stack = [],
          params, i;

      function protect(object) {
        return Object.prototype.toString.apply(object) === "[object Array]" ? [] : object;
      }

      while (true) {
        while (ip < end) {
          switch (bc[ip]) {
            case 0:
              stack.push(protect(peg$consts[bc[ip + 1]]));
              ip += 2;
              break;

            case 1:
              stack.push(peg$currPos);
              ip++;
              break;

            case 2:
              stack.pop();
              ip++;
              break;

            case 3:
              peg$currPos = stack.pop();
              ip++;
              break;

            case 4:
              stack.length -= bc[ip + 1];
              ip += 2;
              break;

            case 5:
              stack.splice(-2, 1);
              ip++;
              break;

            case 6:
              stack[stack.length - 2].push(stack.pop());
              ip++;
              break;

            case 7:
              stack.push(stack.splice(stack.length - bc[ip + 1], bc[ip + 1]));
              ip += 2;
              break;

            case 8:
              stack.pop();
              stack.push(input.substring(stack[stack.length - 1], peg$currPos));
              ip++;
              break;

            case 9:
              ends.push(end);
              ips.push(ip + 3 + bc[ip + 1] + bc[ip + 2]);

              if (stack[stack.length - 1]) {
                end = ip + 3 + bc[ip + 1];
                ip += 3;
              } else {
                end = ip + 3 + bc[ip + 1] + bc[ip + 2];
                ip += 3 + bc[ip + 1];
              }

              break;

            case 10:
              ends.push(end);
              ips.push(ip + 3 + bc[ip + 1] + bc[ip + 2]);

              if (stack[stack.length - 1] === peg$FAILED) {
                end = ip + 3 + bc[ip + 1];
                ip += 3;
              } else {
                end = ip + 3 + bc[ip + 1] + bc[ip + 2];
                ip += 3 + bc[ip + 1];
              }

              break;

            case 11:
              ends.push(end);
              ips.push(ip + 3 + bc[ip + 1] + bc[ip + 2]);

              if (stack[stack.length - 1] !== peg$FAILED) {
                end = ip + 3 + bc[ip + 1];
                ip += 3;
              } else {
                end = ip + 3 + bc[ip + 1] + bc[ip + 2];
                ip += 3 + bc[ip + 1];
              }

              break;

            case 12:
              if (stack[stack.length - 1] !== peg$FAILED) {
                ends.push(end);
                ips.push(ip);

                end = ip + 2 + bc[ip + 1];
                ip += 2;
              } else {
                ip += 2 + bc[ip + 1];
              }

              break;

            case 13:
              ends.push(end);
              ips.push(ip + 3 + bc[ip + 1] + bc[ip + 2]);

              if (input.length > peg$currPos) {
                end = ip + 3 + bc[ip + 1];
                ip += 3;
              } else {
                end = ip + 3 + bc[ip + 1] + bc[ip + 2];
                ip += 3 + bc[ip + 1];
              }

              break;

            case 14:
              ends.push(end);
              ips.push(ip + 4 + bc[ip + 2] + bc[ip + 3]);

              if (input.substr(peg$currPos, peg$consts[bc[ip + 1]].length) === peg$consts[bc[ip + 1]]) {
                end = ip + 4 + bc[ip + 2];
                ip += 4;
              } else {
                end = ip + 4 + bc[ip + 2] + bc[ip + 3];
                ip += 4 + bc[ip + 2];
              }

              break;

            case 15:
              ends.push(end);
              ips.push(ip + 4 + bc[ip + 2] + bc[ip + 3]);

              if (input.substr(peg$currPos, peg$consts[bc[ip + 1]].length).toLowerCase() === peg$consts[bc[ip + 1]]) {
                end = ip + 4 + bc[ip + 2];
                ip += 4;
              } else {
                end = ip + 4 + bc[ip + 2] + bc[ip + 3];
                ip += 4 + bc[ip + 2];
              }

              break;

            case 16:
              ends.push(end);
              ips.push(ip + 4 + bc[ip + 2] + bc[ip + 3]);

              if (peg$consts[bc[ip + 1]].test(input.charAt(peg$currPos))) {
                end = ip + 4 + bc[ip + 2];
                ip += 4;
              } else {
                end = ip + 4 + bc[ip + 2] + bc[ip + 3];
                ip += 4 + bc[ip + 2];
              }

              break;

            case 17:
              stack.push(input.substr(peg$currPos, bc[ip + 1]));
              peg$currPos += bc[ip + 1];
              ip += 2;
              break;

            case 18:
              stack.push(peg$consts[bc[ip + 1]]);
              peg$currPos += peg$consts[bc[ip + 1]].length;
              ip += 2;
              break;

            case 19:
              stack.push(peg$FAILED);
              if (peg$silentFails === 0) {
                peg$fail(peg$consts[bc[ip + 1]]);
              }
              ip += 2;
              break;

            case 20:
              peg$reportedPos = stack[stack.length - 1 - bc[ip + 1]];
              ip += 2;
              break;

            case 21:
              peg$reportedPos = peg$currPos;
              ip++;
              break;

            case 22:
              params = bc.slice(ip + 4, ip + 4 + bc[ip + 3]);
              for (i = 0; i < bc[ip + 3]; i++) {
                params[i] = stack[stack.length - 1 - params[i]];
              }

              stack.splice(
                stack.length - bc[ip + 2],
                bc[ip + 2],
                peg$consts[bc[ip + 1]].apply(null, params)
              );

              ip += 4 + bc[ip + 3];
              break;

            case 23:
              stack.push(peg$parseRule(bc[ip + 1]));
              ip += 2;
              break;

            case 24:
              peg$silentFails++;
              ip++;
              break;

            case 25:
              peg$silentFails--;
              ip++;
              break;

            default:
              throw new Error("Invalid opcode: " + bc[ip] + ".");
          }
        }

        if (ends.length > 0) {
          end = ends.pop();
          ip = ips.pop();
        } else {
          break;
        }
      }

      return stack[0];
    }


      helpers = require('../lib/helpers');
      prefixes = require('./prefixes.json');
      metrics = require('./metrics.json');
      multiply = helpers.multiply;
      topower = helpers.topower;
      cleanup = helpers.cleanup;
      ismetric = helpers.ismetric(metrics);


    peg$result = peg$parseRule(peg$startRuleIndex);

    if (peg$result !== peg$FAILED && peg$currPos === input.length) {
      return peg$result;
    } else {
      if (peg$result !== peg$FAILED && peg$currPos < input.length) {
        peg$fail({ type: "end", description: "end of input" });
      }

      throw peg$buildException(null, peg$maxFailExpected, peg$maxFailPos);
    }
  }

  return {
    SyntaxError: SyntaxError,
    parse:       parse
  };
})();

},{"../lib/helpers":"/Users/jrmerz/dev/cstars/AHB/farm-budgets-app/node_modules/ucum.js/lib/helpers.js","./metrics.json":"/Users/jrmerz/dev/cstars/AHB/farm-budgets-app/node_modules/ucum.js/generated/metrics.json","./prefixes.json":"/Users/jrmerz/dev/cstars/AHB/farm-budgets-app/node_modules/ucum.js/generated/prefixes.json"}],"/Users/jrmerz/dev/cstars/AHB/farm-budgets-app/node_modules/ucum.js/lib/helpers.js":[function(require,module,exports){
module.exports = {

  multiply: function multiply(t, ms) {
    if (ms.length == 0) return t;

    var ret = t;
    ms.forEach(function(mterm){

      var sign = (mterm[0] == "." ? 1 : -1);
      var b = mterm[1];

      ret.value *= Math.pow(b.value, sign);
      Object.keys(b.units).forEach(function(u){
        ret.units[u] = ret.units[u] || 0;
        ret.units[u] = ret.units[u] + sign*b.units[u];
        if (ret.units[u] == 0){
          delete ret.units[u];
        }
      });

    });
    return ret;
  },

  topower: function topower(e, exp){
    if (!exp) {exp = 1;}
    var ret = e;
    ret.value = Math.pow(ret.value, exp);
    Object.keys(e.units).forEach(function(u){
      ret.units[u] = e.units[u] * exp;
    });

    return ret;
  },

  cleanup: function cleanup(e) {
    ["10^", "10*"].forEach(function(k){
      if (e.units[k]) {
        e.value *= Math.pow(10, e.units[k]);
        delete e.units[k];
      }
    })
    return e;
  },

  ismetric: function(metrics) {
    return function(u) {
      return metrics[Object.keys(u.units)[0]] !== undefined;
    };
  }
}

},{}],"/Users/jrmerz/dev/cstars/AHB/farm-budgets-app/node_modules/ucum.js/ucum.js":[function(require,module,exports){
parser = require('./generated/ucum-parser.js');
equivalents = require('./generated/equivalents.json');
helpers = require('./lib/helpers.js');

module.exports = {
  parse: parse,
  canonicalize: canonicalize,
  convert: convert
};

function parse(value, units){

  if (arguments.length === 1 || units === undefined){
    units = value;
    value = 1
  }

  if (units.match(/^\//)){
    units = '1'+units;
  }

  if (units === '') units = '1';

  var ret = parser.parse(units);
  ret.value *= value;
  return ret;
}

function nonBaseUnit(u){
  return equivalents[u] !== undefined;
}

function remainingNonBaseUnits(value) {
  return Object.keys(value.units).filter(nonBaseUnit)
}

function canonicalize(value, units){

  value = parse(value, units);

  var remaining = remainingNonBaseUnits(value);

  while (remaining.length) {
    if (remaining.length === 0) {
      return false;
    }

    remaining.forEach(function(u){
      var sub = parse(equivalents[u].ucum);
      sub.value *= equivalents[u].value;
      sub = helpers.topower(sub, value.units[u]);
      value = helpers.multiply(value, [['.', sub]]);
      delete value.units[u];
    });

    remaining = remainingNonBaseUnits(value);
  }

  return value;
}

function conformant(a, b){
  var ret = true;
  Object.keys(a.units)
  .concat(Object.keys(b.units))
  .forEach(function(k){
    if (a.units[k] !== b.units[k]) {
      ret = false;
    }
  });
  
  return ret;
}

function convert(fromValue, fromUnits, toUnits){
 fromc = canonicalize(fromValue, fromUnits);
 toc = canonicalize(toUnits);

 if (!conformant(fromc, toc)){
   throw "Non-conformant units; can't convert from " + fromUnits + " to " + toUnits ;
 }

 return fromc.value / toc.value;

}

},{"./generated/equivalents.json":"/Users/jrmerz/dev/cstars/AHB/farm-budgets-app/node_modules/ucum.js/generated/equivalents.json","./generated/ucum-parser.js":"/Users/jrmerz/dev/cstars/AHB/farm-budgets-app/node_modules/ucum.js/generated/ucum-parser.js","./lib/helpers.js":"/Users/jrmerz/dev/cstars/AHB/farm-budgets-app/node_modules/ucum.js/lib/helpers.js"}]},{},["/Users/jrmerz/dev/cstars/AHB/farm-budgets-app/lib/shared/index.js"])("/Users/jrmerz/dev/cstars/AHB/farm-budgets-app/lib/shared/index.js")
});
//# sourceMappingURL=data:application/json;charset:utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIm5vZGVfbW9kdWxlcy9ncnVudC1icm93c2VyaWZ5L25vZGVfbW9kdWxlcy9icm93c2VyaWZ5L25vZGVfbW9kdWxlcy9icm93c2VyLXBhY2svX3ByZWx1ZGUuanMiLCJsaWIvc2hhcmVkL2NvbmZpZy9hcHAvYWxmYWxmYS5qc29uIiwibGliL3NoYXJlZC9jb25maWcvYXBwL3BvcGxhci5qc29uIiwibGliL3NoYXJlZC9jb25maWcvY2FfYWxmYWxmYV9zd2FwLmpzb24iLCJsaWIvc2hhcmVkL2NvbmZpZy9jYV9hbGZhbGZhX3N3YXBfZXN0aW1hdGUuanNvbiIsImxpYi9zaGFyZWQvY29uZmlnL2RlZmF1bHQuanNvbiIsImxpYi9zaGFyZWQvY29uZmlnL3BvcGxhci1leGFtcGxlLmpzb24iLCJsaWIvc2hhcmVkL2luZGV4LmpzIiwibGliL3NoYXJlZC9tYXRlcmlhbENvbnRyb2xsZXIvaW5kZXguanMiLCJsaWIvc2hhcmVkL21vZGVsL3VuaXRfbWF0aC9pbmRleC5qcyIsImxpYi9zaGFyZWQvb3BlcmF0aW9uQ29udHJvbGxlci9pbmRleC5qcyIsImxpYi9zaGFyZWQvb3BlcmF0aW9uQ29udHJvbGxlci91dGlscy5qcyIsImxpYi9zaGFyZWQvdHJhbnNmb3JtL2luZGV4LmpzIiwibGliL3NoYXJlZC91bml0cy9kZWZpbml0aW9ucy5qcyIsImxpYi9zaGFyZWQvdW5pdHMvaW5kZXguanMiLCJsaWIvc2hhcmVkL3V0aWxzL2luZGV4LmpzIiwibm9kZV9tb2R1bGVzL2dydW50LWJyb3dzZXJpZnkvbm9kZV9tb2R1bGVzL2Jyb3dzZXJpZnkvbm9kZV9tb2R1bGVzL2V2ZW50cy9ldmVudHMuanMiLCJub2RlX21vZHVsZXMvbm9kZS11dWlkL3V1aWQuanMiLCJub2RlX21vZHVsZXMvdWN1bS5qcy9nZW5lcmF0ZWQvZXF1aXZhbGVudHMuanNvbiIsIm5vZGVfbW9kdWxlcy91Y3VtLmpzL2dlbmVyYXRlZC9tZXRyaWNzLmpzb24iLCJub2RlX21vZHVsZXMvdWN1bS5qcy9nZW5lcmF0ZWQvcHJlZml4ZXMuanNvbiIsIm5vZGVfbW9kdWxlcy91Y3VtLmpzL2dlbmVyYXRlZC91Y3VtLXBhcnNlci5qcyIsIm5vZGVfbW9kdWxlcy91Y3VtLmpzL2xpYi9oZWxwZXJzLmpzIiwibm9kZV9tb2R1bGVzL3VjdW0uanMvdWN1bS5qcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtBQ0FBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQ2h0QkE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQ3I4RUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQ3RMQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUMxSUE7QUFDQTtBQUNBO0FBQ0E7O0FDSEE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUNqd0JBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUNsREE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FDblNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQzNFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQ3JYQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FDdElBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FDOUxBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FDL0hBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUMxTkE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUMzQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUM3U0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUN2UEE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQ2xyQ0E7QUFDQTs7QUNEQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FDMUJBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQzMrQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FDbkRBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EiLCJmaWxlIjoiZ2VuZXJhdGVkLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXNDb250ZW50IjpbIihmdW5jdGlvbiBlKHQsbixyKXtmdW5jdGlvbiBzKG8sdSl7aWYoIW5bb10pe2lmKCF0W29dKXt2YXIgYT10eXBlb2YgcmVxdWlyZT09XCJmdW5jdGlvblwiJiZyZXF1aXJlO2lmKCF1JiZhKXJldHVybiBhKG8sITApO2lmKGkpcmV0dXJuIGkobywhMCk7dmFyIGY9bmV3IEVycm9yKFwiQ2Fubm90IGZpbmQgbW9kdWxlICdcIitvK1wiJ1wiKTt0aHJvdyBmLmNvZGU9XCJNT0RVTEVfTk9UX0ZPVU5EXCIsZn12YXIgbD1uW29dPXtleHBvcnRzOnt9fTt0W29dWzBdLmNhbGwobC5leHBvcnRzLGZ1bmN0aW9uKGUpe3ZhciBuPXRbb11bMV1bZV07cmV0dXJuIHMobj9uOmUpfSxsLGwuZXhwb3J0cyxlLHQsbixyKX1yZXR1cm4gbltvXS5leHBvcnRzfXZhciBpPXR5cGVvZiByZXF1aXJlPT1cImZ1bmN0aW9uXCImJnJlcXVpcmU7Zm9yKHZhciBvPTA7bzxyLmxlbmd0aDtvKyspcyhyW29dKTtyZXR1cm4gc30pIiwibW9kdWxlLmV4cG9ydHM9e1xuICBcImNsYXNzZXNcIjoge1xuICAgIFwiZmVydGlsaXplclwiOiBbXG4gICAgICBcIjIsNC1EXCJcbiAgICBdLFxuICAgIFwiZXF1aXBtZW50XCI6IFtcbiAgICAgIFwiQ2hhbGxlbmdlciBUcmFjdG9yXCIsXG4gICAgICBcIkNvb2xlci92YW5cIixcbiAgICAgIFwiRlIgNjA4MCBGSFwiLFxuICAgICAgXCJMYXJnZSBUcmFjdG9yXCIsXG4gICAgICBcIk1pZC1zaXplIFRyYWN0b3JcIixcbiAgICAgIFwiU2VtaS1UcmFjdG9yIHRyYWlsZXJcIixcbiAgICAgIFwiU21hbGwgVHJhY3RvclwiLFxuICAgICAgXCJTdXBwb3J0IFRydWNrXCIsXG4gICAgICBcIlRhbmRlbSBBeGxlIFRydWNrXCIsXG4gICAgICBcIlRyYWN0b3IgYW5kIHNwcmF5ZXJcIlxuICAgIF0sXG4gICAgXCJwZXN0aWNpZGVcIjogW1xuICAgICAgXCJHbHlwaG9zYXRlXCIsXG4gICAgICBcIkdvYWwgMlhMXCIsXG4gICAgICBcIlRyaWZsdXJhbGluXCJcbiAgICBdLFxuICAgIFwiaGVyYmljaWRlXCI6IFtcbiAgICAgIFwiaGVyYmljaWRlIC0gbWFudWFsXCJcbiAgICBdLFxuICAgIFwibGFib3JcIjogW1xuICAgICAgXCJob2VpbmdcIixcbiAgICAgIFwiTGFib3JlclwiXG4gICAgXSxcbiAgICBcInNlZWRcIjogW1xuICAgICAgXCJQb3BsYXIgQ3V0dGluZ1wiXG4gICAgXVxuICB9LFxuICBcIm1hdGVyaWFsc1wiOiBbXG4gICAge1xuICAgICAgXCJuYW1lXCI6IFwiRXN0aW1hdGVcIixcbiAgICAgIFwicHJpY2VcIjogMSxcbiAgICAgIFwidW5pdHNcIjogXCJ1cyRcIixcbiAgICAgIFwiZml4ZWRcIjogdHJ1ZSxcbiAgICAgIFwiZGVzY3JpcHRpb25cIjogXCJQcm92aWRlIGZpeGVkIGNvc3QgZm9yIGNvbXBsZXggbWF0ZXJpYWxcIixcbiAgICAgIFwidHlwZVwiOiBcInNpbXBsZVwiXG4gICAgfSxcbiAgICB7XG4gICAgICBcIm5hbWVcIjogXCJUYXhlc1wiLFxuICAgICAgXCJwcmljZVwiOiAxLFxuICAgICAgXCJ1bml0c1wiOiBcInVzJFwiLFxuICAgICAgXCJmaXhlZFwiOiB0cnVlLFxuICAgICAgXCJkZXNjcmlwdGlvblwiOiBcIlByb3ZpZGUgZml4ZWQgY29zdCBmb3IgY29tcGxleCBtYXRlcmlhbFwiLFxuICAgICAgXCJ0eXBlXCI6IFwic2ltcGxlXCJcbiAgICB9LFxuICAgIHtcbiAgICAgIFwibmFtZVwiOiBcIkluc3VyYW5jZVwiLFxuICAgICAgXCJwcmljZVwiOiAxLFxuICAgICAgXCJ1bml0c1wiOiBcInVzJFwiLFxuICAgICAgXCJmaXhlZFwiOiB0cnVlLFxuICAgICAgXCJkZXNjcmlwdGlvblwiOiBcIlByb3ZpZGUgZml4ZWQgY29zdCBmb3IgY29tcGxleCBtYXRlcmlhbFwiLFxuICAgICAgXCJ0eXBlXCI6IFwic2ltcGxlXCJcbiAgICB9LFxuICAgIHtcbiAgICAgIFwibmFtZVwiOiBcIkNhcGl0b2wgQ29zdCBSZWNvdmVyXCIsXG4gICAgICBcInByaWNlXCI6IDEsXG4gICAgICBcInVuaXRzXCI6IFwidXMkXCIsXG4gICAgICBcImZpeGVkXCI6IHRydWUsXG4gICAgICBcImRlc2NyaXB0aW9uXCI6IFwiUHJvdmlkZSBmaXhlZCBjb3N0IGZvciBjb21wbGV4IG1hdGVyaWFsXCIsXG4gICAgICBcInR5cGVcIjogXCJzaW1wbGVcIlxuICAgIH0sXG4gICAge1xuICAgICAgXCJjbGFzc1wiOiBcImZlcnRpbGl6ZXJcIixcbiAgICAgIFwibmFtZVwiOiBcIjIsNC1EXCIsXG4gICAgICBcInVuaXRzXCI6IFwidXMkL1txdF91c11cIixcbiAgICAgIFwicHJpY2VcIjogNSxcbiAgICAgIFwidHlwZVwiOiBcInNpbXBsZVwiXG4gICAgfSxcbiAgICB7XG4gICAgICBcImNsYXNzXCI6IFwicGVzdGljaWRlXCIsXG4gICAgICBcIm5hbWVcIjogXCJHbHlwaG9zYXRlXCIsXG4gICAgICBcInVuaXRzXCI6IFwidXMkL1txdF91c11cIixcbiAgICAgIFwicHJpY2VcIjogNCxcbiAgICAgIFwidHlwZVwiOiBcInNpbXBsZVwiLFxuICAgICAgXCJkZXNjcmlwdGlvblwiOiBcImZvb1wiXG4gICAgfSxcbiAgICB7XG4gICAgICBcImNsYXNzXCI6IFwicGVzdGljaWRlXCIsXG4gICAgICBcIm5hbWVcIjogXCJHb2FsIDJYTFwiLFxuICAgICAgXCJ1bml0c1wiOiBcInVzJC9bcXRfdXNdXCIsXG4gICAgICBcInByaWNlXCI6IDMwLFxuICAgICAgXCJ0eXBlXCI6IFwic2ltcGxlXCJcbiAgICB9LFxuICAgIHtcbiAgICAgIFwiY2xhc3NcIjogXCJsYWJvclwiLFxuICAgICAgXCJuYW1lXCI6IFwiTGFib3JlclwiLFxuICAgICAgXCJ1bml0c1wiOiBcInVzJC9oXCIsXG4gICAgICBcInByaWNlXCI6IDE3LFxuICAgICAgXCJ0eXBlXCI6IFwic2ltcGxlXCJcbiAgICB9LFxuICAgIHtcbiAgICAgIFwiZGVzY3JpcHRpb25cIjogXCJQb3BsYXIgY3V0dGluZyBmb3IgcGxhbnRpbmdcIixcbiAgICAgIFwiY2xhc3NcIjogXCJzZWVkXCIsXG4gICAgICBcIm5hbWVcIjogXCJQb3BsYXIgQ3V0dGluZ1wiLFxuICAgICAgXCJ1bml0c1wiOiBcInVzJC8xXCIsXG4gICAgICBcInByaWNlXCI6IDAuMDgsXG4gICAgICBcInR5cGVcIjogXCJzaW1wbGVcIlxuICAgIH0sXG4gICAge1xuICAgICAgXCJjbGFzc1wiOiBcInBlc3RpY2lkZVwiLFxuICAgICAgXCJuYW1lXCI6IFwiVHJpZmx1cmFsaW5cIixcbiAgICAgIFwidW5pdHNcIjogXCJ1cyQvW3F0X3VzXVwiLFxuICAgICAgXCJwcmljZVwiOiA3LjUsXG4gICAgICBcInR5cGVcIjogXCJzaW1wbGVcIlxuICAgIH0sXG4gICAge1xuICAgICAgXCJuYW1lXCI6IFwiQ2hhbGxlbmdlciBUcmFjdG9yLS1DYXBpdG9sIENvc3RcIixcbiAgICAgIFwicHJpY2VcIjogOTAsXG4gICAgICBcInVuaXRzXCI6IFwidXMkL2hcIixcbiAgICAgIFwidHlwZVwiOiBcInNpbXBsZVwiXG4gICAgfSxcbiAgICB7XG4gICAgICBcIm5hbWVcIjogXCJTZW1pLVRyYWN0b3IgdHJhaWxlci0tQ2FwaXRvbCBDb3N0XCIsXG4gICAgICBcInByaWNlXCI6IDkwLFxuICAgICAgXCJ1bml0c1wiOiBcInVzJC9oXCIsXG4gICAgICBcInR5cGVcIjogXCJzaW1wbGVcIlxuICAgIH0sXG4gICAge1xuICAgICAgXCJuYW1lXCI6IFwiRlIgNjA4MCBGSC0tQ2FwaXRvbCBDb3N0XCIsXG4gICAgICBcInByaWNlXCI6IDkwLFxuICAgICAgXCJ1bml0c1wiOiBcInVzJC9oXCIsXG4gICAgICBcInR5cGVcIjogXCJzaW1wbGVcIlxuICAgIH0sXG4gICAge1xuICAgICAgXCJuYW1lXCI6IFwiVGFuZGVtIEF4bGUgVHJ1Y2stLUNhcGl0b2wgQ29zdFwiLFxuICAgICAgXCJwcmljZVwiOiA5MCxcbiAgICAgIFwidW5pdHNcIjogXCJ1cyQvaFwiLFxuICAgICAgXCJ0eXBlXCI6IFwic2ltcGxlXCJcbiAgICB9LFxuICAgIHtcbiAgICAgIFwibmFtZVwiOiBcIkNvb2xlci92YW4tLUNhcGl0b2wgQ29zdFwiLFxuICAgICAgXCJwcmljZVwiOiAxNSxcbiAgICAgIFwidW5pdHNcIjogXCJ1cyQvaFwiLFxuICAgICAgXCJ0eXBlXCI6IFwic2ltcGxlXCJcbiAgICB9LFxuICAgIHtcbiAgICAgIFwibmFtZVwiOiBcIkNoYWxsZW5nZXIgVHJhY3Rvci0tTGFib3JcIixcbiAgICAgIFwicHJpY2VcIjogMzUsXG4gICAgICBcInVuaXRzXCI6IFwidXMkL2hcIixcbiAgICAgIFwidHlwZVwiOiBcInNpbXBsZVwiXG4gICAgfSxcbiAgICB7XG4gICAgICBcIm5hbWVcIjogXCJGUiA2MDgwIEZILS1MYWJvclwiLFxuICAgICAgXCJwcmljZVwiOiAzNSxcbiAgICAgIFwidW5pdHNcIjogXCJ1cyQvaFwiLFxuICAgICAgXCJ0eXBlXCI6IFwic2ltcGxlXCJcbiAgICB9LFxuICAgIHtcbiAgICAgIFwibmFtZVwiOiBcIlRhbmRlbSBBeGxlIFRydWNrLS1MYWJvclwiLFxuICAgICAgXCJwcmljZVwiOiAzNSxcbiAgICAgIFwidW5pdHNcIjogXCJ1cyQvaFwiLFxuICAgICAgXCJ0eXBlXCI6IFwic2ltcGxlXCJcbiAgICB9LFxuICAgIHtcbiAgICAgIFwibmFtZVwiOiBcIlNlbWktVHJhY3RvciB0cmFpbGVyLS1MYWJvclwiLFxuICAgICAgXCJwcmljZVwiOiAzNSxcbiAgICAgIFwidW5pdHNcIjogXCJ1cyQvaFwiLFxuICAgICAgXCJ0eXBlXCI6IFwic2ltcGxlXCJcbiAgICB9LFxuICAgIHtcbiAgICAgIFwibmFtZVwiOiBcIkNvb2xlci92YW4tLUxhYm9yXCIsXG4gICAgICBcInByaWNlXCI6IDEwLFxuICAgICAgXCJ1bml0c1wiOiBcInVzJC9oXCIsXG4gICAgICBcInR5cGVcIjogXCJzaW1wbGVcIlxuICAgIH0sXG4gICAge1xuICAgICAgXCJuYW1lXCI6IFwiRXF1aXBtZW50IEZ1ZWxcIixcbiAgICAgIFwicHJpY2VcIjogMi44MSxcbiAgICAgIFwidW5pdHNcIjogXCJ1cyQvW2dhbF91c11cIixcbiAgICAgIFwidHlwZVwiOiBcInNpbXBsZVwiXG4gICAgfSxcbiAgICB7XG4gICAgICBcIm5hbWVcIjogXCJTdXBwb3J0IFRydWNrLS1DYXBpdG9sIENvc3RcIixcbiAgICAgIFwicHJpY2VcIjogMjUsXG4gICAgICBcInVuaXRzXCI6IFwidXMkL2hcIixcbiAgICAgIFwidHlwZVwiOiBcInNpbXBsZVwiXG4gICAgfSxcbiAgICB7XG4gICAgICBcIm5hbWVcIjogXCJTdXBwb3J0IFRydWNrLS1MYWJvclwiLFxuICAgICAgXCJwcmljZVwiOiAzMCxcbiAgICAgIFwidW5pdHNcIjogXCJ1cyQvaFwiLFxuICAgICAgXCJ0eXBlXCI6IFwic2ltcGxlXCJcbiAgICB9LFxuICAgIHtcbiAgICAgIFwidHlwZVwiOiBcInNpbXBsZVwiLFxuICAgICAgXCJuYW1lXCI6IFwiMTEtNTItMFwiLFxuICAgICAgXCJ1bml0c1wiOiBcInVzJC9bbGJfYXZdXCIsXG4gICAgICBcImRlc2NyaXB0aW9uXCI6IFwiXCIsXG4gICAgICBcInByaWNlXCI6IDAuMzcsXG4gICAgICBcImNsYXNzXCI6IFwiZmVydGlsaXplclwiXG4gICAgfSxcbiAgICB7XG4gICAgICBcInR5cGVcIjogXCJzaW1wbGVcIixcbiAgICAgIFwibmFtZVwiOiBcIkdyb3VuZCBBcHBsaWNhdGlvblwiLFxuICAgICAgXCJ1bml0c1wiOiBcInVzJC9bYWNyX3VzXVwiLFxuICAgICAgXCJkZXNjcmlwdGlvblwiOiBcIlwiLFxuICAgICAgXCJwcmljZVwiOiAxMC41LFxuICAgICAgXCJjbGFzc1wiOiBcIm90aGVyXCJcbiAgICB9LFxuICAgIHtcbiAgICAgIFwidHlwZVwiOiBcInNpbXBsZVwiLFxuICAgICAgXCJuYW1lXCI6IFwiUm91bmR1cCBQb3dlck1heFwiLFxuICAgICAgXCJ1bml0c1wiOiBcInVzJC9bcHRfdXNdXCIsXG4gICAgICBcImRlc2NyaXB0aW9uXCI6IFwiXCIsXG4gICAgICBcInByaWNlXCI6IDIuNzUsXG4gICAgICBcImNsYXNzXCI6IFwiaGVyYmljaWRlXCJcbiAgICB9LFxuICAgIHtcbiAgICAgIFwidHlwZVwiOiBcInNpbXBsZVwiLFxuICAgICAgXCJuYW1lXCI6IFwiVmVscGFyIExcIixcbiAgICAgIFwidW5pdHNcIjogXCJ1cyQvW3B0X3VzXVwiLFxuICAgICAgXCJkZXNjcmlwdGlvblwiOiBcIlwiLFxuICAgICAgXCJwcmljZVwiOiAxNC40MSxcbiAgICAgIFwiY2xhc3NcIjogXCJoZXJiaWNpZGVcIlxuICAgIH0sXG4gICAge1xuICAgICAgXCJ0eXBlXCI6IFwic2ltcGxlXCIsXG4gICAgICBcIm5hbWVcIjogXCJXYXJyaW9yIElJXCIsXG4gICAgICBcInVuaXRzXCI6IFwidXMkL1tmb3pfdXNdXCIsXG4gICAgICBcImRlc2NyaXB0aW9uXCI6IFwiXCIsXG4gICAgICBcInByaWNlXCI6IDUuMjUsXG4gICAgICBcImNsYXNzXCI6IFwicGVzdGljaWRlXCJcbiAgICB9LFxuICAgIHtcbiAgICAgIFwidHlwZVwiOiBcInNpbXBsZVwiLFxuICAgICAgXCJuYW1lXCI6IFwiQ29yYWdlblwiLFxuICAgICAgXCJ1bml0c1wiOiBcInVzJC9bZm96X3VzXVwiLFxuICAgICAgXCJkZXNjcmlwdGlvblwiOiBcIlwiLFxuICAgICAgXCJwcmljZVwiOiAxMC4yNSxcbiAgICAgIFwiY2xhc3NcIjogXCJwZXN0aWNpZGVcIlxuICAgIH0sXG4gICAge1xuICAgICAgXCJ0eXBlXCI6IFwic2ltcGxlXCIsXG4gICAgICBcIm5hbWVcIjogXCJCZWx0IFNDXCIsXG4gICAgICBcInVuaXRzXCI6IFwidXMkL1tmb3pfdXNdXCIsXG4gICAgICBcImRlc2NyaXB0aW9uXCI6IFwiXCIsXG4gICAgICBcInByaWNlXCI6IDkuNCxcbiAgICAgIFwiY2xhc3NcIjogXCJwZXN0aWNpZGVcIlxuICAgIH0sXG4gICAge1xuICAgICAgXCJ0eXBlXCI6IFwic2ltcGxlXCIsXG4gICAgICBcIm5hbWVcIjogXCJXYXRlci1BbGZhbGZhLVB1bXBlZFwiLFxuICAgICAgXCJ1bml0c1wiOiBcInVzJC9bYWNyX3VzXS5baW5fdXNdXCIsXG4gICAgICBcImRlc2NyaXB0aW9uXCI6IFwiXCIsXG4gICAgICBcInByaWNlXCI6IDcuNSxcbiAgICAgIFwiY2xhc3NcIjogXCJ3YXRlclwiXG4gICAgfSxcbiAgICB7XG4gICAgICBcInR5cGVcIjogXCJzaW1wbGVcIixcbiAgICAgIFwibmFtZVwiOiBcIkdhc1wiLFxuICAgICAgXCJ1bml0c1wiOiBcInVzJC9bZ2FsX3VzXVwiLFxuICAgICAgXCJkZXNjcmlwdGlvblwiOiBcIlwiLFxuICAgICAgXCJwcmljZVwiOiAzLjc5LFxuICAgICAgXCJjbGFzc1wiOiBcImVxdWlwbWVudFwiXG4gICAgfSxcbiAgICB7XG4gICAgICBcImNsYXNzXCI6IFwib3RoZXJcIixcbiAgICAgIFwibmFtZVwiOiBcIkFUVi0tQ2FwaXRhbCBSZWNvdmVyeVwiLFxuICAgICAgXCJ1bml0c1wiOiBcInVzJC9oXCIsXG4gICAgICBcInByaWNlXCI6IDEuODksXG4gICAgICBcInR5cGVcIjogXCJzaW1wbGVcIlxuICAgIH0sXG4gICAge1xuICAgICAgXCJjbGFzc1wiOiBcImluc3VyYW5jZVwiLFxuICAgICAgXCJuYW1lXCI6IFwiQVRWLS1pbnN1cmFuY2VcIixcbiAgICAgIFwidW5pdHNcIjogXCJ1cyQvaFwiLFxuICAgICAgXCJwcmljZVwiOiAwLjAxLFxuICAgICAgXCJ0eXBlXCI6IFwic2ltcGxlXCJcbiAgICB9LFxuICAgIHtcbiAgICAgIFwiY2xhc3NcIjogXCJvdGhlclwiLFxuICAgICAgXCJuYW1lXCI6IFwiQVRWLS1UYXhlc1wiLFxuICAgICAgXCJ1bml0c1wiOiBcInVzJC9oXCIsXG4gICAgICBcInByaWNlXCI6IDAuMDksXG4gICAgICBcInR5cGVcIjogXCJzaW1wbGVcIlxuICAgIH0sXG4gICAge1xuICAgICAgXCJjbGFzc1wiOiBcIm90aGVyXCIsXG4gICAgICBcIm5hbWVcIjogXCJBVFYtLUx1YmUgJiBSZXBhaXJzXCIsXG4gICAgICBcInVuaXRzXCI6IFwidXMkL2hcIixcbiAgICAgIFwicHJpY2VcIjogMS4yLFxuICAgICAgXCJ0eXBlXCI6IFwic2ltcGxlXCJcbiAgICB9LFxuICAgIHtcbiAgICAgIFwiY2xhc3NcIjogXCJlcXVpcG1lbnRcIixcbiAgICAgIFwibmFtZVwiOiBcIkNoYWxsZW5nZXIgVHJhY3RvclwiLFxuICAgICAgXCJ1bml0c1wiOiBcImhcIixcbiAgICAgIFwidHlwZVwiOiBcImNvbXBsZXhcIixcbiAgICAgIFwibWF0ZXJpYWxzXCI6IHtcbiAgICAgICAgXCJFcXVpcG1lbnQgRnVlbFwiOiB7XG4gICAgICAgICAgXCJhbW91bnRcIjogMTkuMzYsXG4gICAgICAgICAgXCJvcmlnaW5hbEFtb3VudFwiOiAxOS4zNixcbiAgICAgICAgICBcInVuaXRzXCI6IFwiW2dhbF91c11cIixcbiAgICAgICAgICBcImVycm9yXCI6IG51bGwsXG4gICAgICAgICAgXCJwcmljZVwiOiA1NC40MDE2XG4gICAgICAgIH0sXG4gICAgICAgIFwiQ2hhbGxlbmdlciBUcmFjdG9yLS1DYXBpdG9sIENvc3RcIjoge1xuICAgICAgICAgIFwiYW1vdW50XCI6IDEsXG4gICAgICAgICAgXCJvcmlnaW5hbEFtb3VudFwiOiAxLFxuICAgICAgICAgIFwidW5pdHNcIjogXCJoXCIsXG4gICAgICAgICAgXCJlcnJvclwiOiBudWxsLFxuICAgICAgICAgIFwicHJpY2VcIjogOTBcbiAgICAgICAgfSxcbiAgICAgICAgXCJDaGFsbGVuZ2VyIFRyYWN0b3ItLUxhYm9yXCI6IHtcbiAgICAgICAgICBcImFtb3VudFwiOiAxLFxuICAgICAgICAgIFwib3JpZ2luYWxBbW91bnRcIjogMSxcbiAgICAgICAgICBcInVuaXRzXCI6IFwiaFwiLFxuICAgICAgICAgIFwiZXJyb3JcIjogbnVsbCxcbiAgICAgICAgICBcInByaWNlXCI6IDM1XG4gICAgICAgIH1cbiAgICAgIH0sXG4gICAgICBcInByaWNlXCI6IDE3OS40MDE2XG4gICAgfSxcbiAgICB7XG4gICAgICBcImNsYXNzXCI6IFwiZXF1aXBtZW50XCIsXG4gICAgICBcIm5hbWVcIjogXCJDb29sZXIvdmFuXCIsXG4gICAgICBcInVuaXRzXCI6IFwiaFwiLFxuICAgICAgXCJ0eXBlXCI6IFwiY29tcGxleFwiLFxuICAgICAgXCJtYXRlcmlhbHNcIjoge1xuICAgICAgICBcIkNvb2xlci92YW4tLUxhYm9yXCI6IHtcbiAgICAgICAgICBcImFtb3VudFwiOiAxLFxuICAgICAgICAgIFwib3JpZ2luYWxBbW91bnRcIjogMSxcbiAgICAgICAgICBcInVuaXRzXCI6IFwiaFwiLFxuICAgICAgICAgIFwiZXJyb3JcIjogbnVsbCxcbiAgICAgICAgICBcInByaWNlXCI6IDEwXG4gICAgICAgIH0sXG4gICAgICAgIFwiQ29vbGVyL3Zhbi0tQ2FwaXRvbCBDb3N0XCI6IHtcbiAgICAgICAgICBcImFtb3VudFwiOiAxLFxuICAgICAgICAgIFwib3JpZ2luYWxBbW91bnRcIjogMSxcbiAgICAgICAgICBcInVuaXRzXCI6IFwiaFwiLFxuICAgICAgICAgIFwiZXJyb3JcIjogbnVsbCxcbiAgICAgICAgICBcInByaWNlXCI6IDE1XG4gICAgICAgIH0sXG4gICAgICAgIFwiRXF1aXBtZW50IEZ1ZWxcIjoge1xuICAgICAgICAgIFwiYW1vdW50XCI6IDAuOTYsXG4gICAgICAgICAgXCJvcmlnaW5hbEFtb3VudFwiOiAwLjk2LFxuICAgICAgICAgIFwidW5pdHNcIjogXCJbZ2FsX3VzXVwiLFxuICAgICAgICAgIFwiZXJyb3JcIjogbnVsbCxcbiAgICAgICAgICBcInByaWNlXCI6IDIuNjk3NlxuICAgICAgICB9LFxuICAgICAgICBcIkVzdGltYXRlXCI6IHtcbiAgICAgICAgICBcInVuaXRzXCI6IFwidXMkXCIsXG4gICAgICAgICAgXCJhbW91bnRcIjogMS4yLFxuICAgICAgICAgIFwiZXJyb3JcIjogbnVsbCxcbiAgICAgICAgICBcInByaWNlXCI6IDEuMlxuICAgICAgICB9XG4gICAgICB9LFxuICAgICAgXCJwcmljZVwiOiAyOC44OTc2XG4gICAgfSxcbiAgICB7XG4gICAgICBcImNsYXNzXCI6IFwiZXF1aXBtZW50XCIsXG4gICAgICBcIm5hbWVcIjogXCJGUiA2MDgwIEZIXCIsXG4gICAgICBcInVuaXRzXCI6IFwiaFwiLFxuICAgICAgXCJ0eXBlXCI6IFwiY29tcGxleFwiLFxuICAgICAgXCJtYXRlcmlhbHNcIjoge1xuICAgICAgICBcIkVxdWlwbWVudCBGdWVsXCI6IHtcbiAgICAgICAgICBcImFtb3VudFwiOiAxMy4yLFxuICAgICAgICAgIFwib3JpZ2luYWxBbW91bnRcIjogMTMuMixcbiAgICAgICAgICBcInVuaXRzXCI6IFwiW2dhbF91c11cIixcbiAgICAgICAgICBcImVycm9yXCI6IG51bGwsXG4gICAgICAgICAgXCJwcmljZVwiOiAzNy4wOTJcbiAgICAgICAgfSxcbiAgICAgICAgXCJGUiA2MDgwIEZILS1MYWJvclwiOiB7XG4gICAgICAgICAgXCJhbW91bnRcIjogMSxcbiAgICAgICAgICBcIm9yaWdpbmFsQW1vdW50XCI6IDEsXG4gICAgICAgICAgXCJ1bml0c1wiOiBcImhcIixcbiAgICAgICAgICBcImVycm9yXCI6IG51bGwsXG4gICAgICAgICAgXCJwcmljZVwiOiAzNVxuICAgICAgICB9LFxuICAgICAgICBcIkZSIDYwODAgRkgtLUNhcGl0b2wgQ29zdFwiOiB7XG4gICAgICAgICAgXCJhbW91bnRcIjogMSxcbiAgICAgICAgICBcIm9yaWdpbmFsQW1vdW50XCI6IDEsXG4gICAgICAgICAgXCJ1bml0c1wiOiBcImhcIixcbiAgICAgICAgICBcImVycm9yXCI6IG51bGwsXG4gICAgICAgICAgXCJwcmljZVwiOiA5MFxuICAgICAgICB9LFxuICAgICAgICBcIkVzdGltYXRlXCI6IHtcbiAgICAgICAgICBcInVuaXRzXCI6IFwidXMkXCIsXG4gICAgICAgICAgXCJhbW91bnRcIjogMzAsXG4gICAgICAgICAgXCJlcnJvclwiOiBudWxsLFxuICAgICAgICAgIFwicHJpY2VcIjogMzBcbiAgICAgICAgfVxuICAgICAgfSxcbiAgICAgIFwicHJpY2VcIjogMTkyLjA5MTk5OTk5OTk5OTk4XG4gICAgfSxcbiAgICB7XG4gICAgICBcImRlc2NyaXB0aW9uXCI6IFwiTWFudWFsIEFwcGxpY2F0aW9uIG9mIGhlcmJpY2lkZVwiLFxuICAgICAgXCJjbGFzc1wiOiBcImhlcmJpY2lkZVwiLFxuICAgICAgXCJuYW1lXCI6IFwiaGVyYmljaWRlIC0gbWFudWFsXCIsXG4gICAgICBcInVuaXRzXCI6IFwiMTAwLlthY3JfdXNdXCIsXG4gICAgICBcInR5cGVcIjogXCJjb21wbGV4XCIsXG4gICAgICBcIm1hdGVyaWFsc1wiOiB7XG4gICAgICAgIFwiR2x5cGhvc2F0ZVwiOiB7XG4gICAgICAgICAgXCJhbW91bnRcIjogMjAwLFxuICAgICAgICAgIFwib3JpZ2luYWxBbW91bnRcIjogMjAwLFxuICAgICAgICAgIFwidW5pdHNcIjogXCJbcXRfdXNdXCIsXG4gICAgICAgICAgXCJlcnJvclwiOiBudWxsLFxuICAgICAgICAgIFwicHJpY2VcIjogODAwXG4gICAgICAgIH0sXG4gICAgICAgIFwiTGFib3JlclwiOiB7XG4gICAgICAgICAgXCJhbW91bnRcIjogOTYsXG4gICAgICAgICAgXCJvcmlnaW5hbEFtb3VudFwiOiA5NixcbiAgICAgICAgICBcInVuaXRzXCI6IFwiaFwiLFxuICAgICAgICAgIFwiZXJyb3JcIjogbnVsbCxcbiAgICAgICAgICBcInByaWNlXCI6IDE2MzJcbiAgICAgICAgfVxuICAgICAgfSxcbiAgICAgIFwicHJpY2VcIjogMjQzMlxuICAgIH0sXG4gICAge1xuICAgICAgXCJjbGFzc1wiOiBcImxhYm9yXCIsXG4gICAgICBcIm5hbWVcIjogXCJob2VpbmdcIixcbiAgICAgIFwidW5pdHNcIjogXCIxMDAuW2Fjcl91c11cIixcbiAgICAgIFwidHlwZVwiOiBcImNvbXBsZXhcIixcbiAgICAgIFwibWF0ZXJpYWxzXCI6IHtcbiAgICAgICAgXCJMYWJvcmVyXCI6IHtcbiAgICAgICAgICBcImFtb3VudFwiOiAxOTIsXG4gICAgICAgICAgXCJvcmlnaW5hbEFtb3VudFwiOiAxOTIsXG4gICAgICAgICAgXCJ1bml0c1wiOiBcImhcIixcbiAgICAgICAgICBcImVycm9yXCI6IG51bGwsXG4gICAgICAgICAgXCJwcmljZVwiOiAzMjY0XG4gICAgICAgIH1cbiAgICAgIH0sXG4gICAgICBcInByaWNlXCI6IDMyNjRcbiAgICB9LFxuICAgIHtcbiAgICAgIFwiY2xhc3NcIjogXCJlcXVpcG1lbnRcIixcbiAgICAgIFwibmFtZVwiOiBcIkxhcmdlIFRyYWN0b3JcIixcbiAgICAgIFwidW5pdHNcIjogXCJoXCIsXG4gICAgICBcInR5cGVcIjogXCJjb21wbGV4XCIsXG4gICAgICBcIm1hdGVyaWFsc1wiOiB7XG4gICAgICAgIFwiRXF1aXBtZW50IEZ1ZWxcIjoge1xuICAgICAgICAgIFwiYW1vdW50XCI6IDEzLjIsXG4gICAgICAgICAgXCJvcmlnaW5hbEFtb3VudFwiOiAxMy4yLFxuICAgICAgICAgIFwidW5pdHNcIjogXCJbZ2FsX3VzXVwiLFxuICAgICAgICAgIFwiZXJyb3JcIjogbnVsbCxcbiAgICAgICAgICBcInByaWNlXCI6IDM3LjA5MlxuICAgICAgICB9LFxuICAgICAgICBcIkxhcmdlIFRyYWN0b3ItLUNhcGl0b2wgQ29zdFwiOiB7XG4gICAgICAgICAgXCJhbW91bnRcIjogMSxcbiAgICAgICAgICBcIm9yaWdpbmFsQW1vdW50XCI6IDEsXG4gICAgICAgICAgXCJ1bml0c1wiOiBcImhcIixcbiAgICAgICAgICBcImVycm9yXCI6IHRydWVcbiAgICAgICAgfSxcbiAgICAgICAgXCJMYXJnZSBUcmFjdG9yLS1MYWJvclwiOiB7XG4gICAgICAgICAgXCJhbW91bnRcIjogMSxcbiAgICAgICAgICBcIm9yaWdpbmFsQW1vdW50XCI6IDEsXG4gICAgICAgICAgXCJ1bml0c1wiOiBcImhcIixcbiAgICAgICAgICBcImVycm9yXCI6IHRydWVcbiAgICAgICAgfVxuICAgICAgfSxcbiAgICAgIFwicHJpY2VcIjogMzcuMDkyXG4gICAgfSxcbiAgICB7XG4gICAgICBcImNsYXNzXCI6IFwiZXF1aXBtZW50XCIsXG4gICAgICBcIm5hbWVcIjogXCJNaWQtc2l6ZSBUcmFjdG9yXCIsXG4gICAgICBcInVuaXRzXCI6IFwiaFwiLFxuICAgICAgXCJ0eXBlXCI6IFwiY29tcGxleFwiLFxuICAgICAgXCJtYXRlcmlhbHNcIjoge1xuICAgICAgICBcIk1pZC1zaXplIFRyYWN0b3ItLUNhcGl0b2wgQ29zdFwiOiB7XG4gICAgICAgICAgXCJhbW91bnRcIjogMSxcbiAgICAgICAgICBcIm9yaWdpbmFsQW1vdW50XCI6IDEsXG4gICAgICAgICAgXCJ1bml0c1wiOiBcImhcIixcbiAgICAgICAgICBcImVycm9yXCI6IHRydWVcbiAgICAgICAgfSxcbiAgICAgICAgXCJNaWQtc2l6ZSBUcmFjdG9yLS1MYWJvclwiOiB7XG4gICAgICAgICAgXCJhbW91bnRcIjogMSxcbiAgICAgICAgICBcIm9yaWdpbmFsQW1vdW50XCI6IDEsXG4gICAgICAgICAgXCJ1bml0c1wiOiBcImhcIixcbiAgICAgICAgICBcImVycm9yXCI6IHRydWVcbiAgICAgICAgfSxcbiAgICAgICAgXCJFcXVpcG1lbnQgRnVlbFwiOiB7XG4gICAgICAgICAgXCJhbW91bnRcIjogMy45NixcbiAgICAgICAgICBcIm9yaWdpbmFsQW1vdW50XCI6IDMuOTYsXG4gICAgICAgICAgXCJ1bml0c1wiOiBcIltnYWxfdXNdXCIsXG4gICAgICAgICAgXCJlcnJvclwiOiBudWxsLFxuICAgICAgICAgIFwicHJpY2VcIjogMTEuMTI3NlxuICAgICAgICB9XG4gICAgICB9LFxuICAgICAgXCJwcmljZVwiOiAxMS4xMjc2XG4gICAgfSxcbiAgICB7XG4gICAgICBcImNsYXNzXCI6IFwiZXF1aXBtZW50XCIsXG4gICAgICBcIm5hbWVcIjogXCJTZW1pLVRyYWN0b3IgdHJhaWxlclwiLFxuICAgICAgXCJ1bml0c1wiOiBcImhcIixcbiAgICAgIFwidHlwZVwiOiBcImNvbXBsZXhcIixcbiAgICAgIFwibWF0ZXJpYWxzXCI6IHtcbiAgICAgICAgXCJTZW1pLVRyYWN0b3IgdHJhaWxlci0tQ2FwaXRvbCBDb3N0XCI6IHtcbiAgICAgICAgICBcImFtb3VudFwiOiAxLFxuICAgICAgICAgIFwib3JpZ2luYWxBbW91bnRcIjogMSxcbiAgICAgICAgICBcInVuaXRzXCI6IFwiaFwiLFxuICAgICAgICAgIFwiZXJyb3JcIjogbnVsbCxcbiAgICAgICAgICBcInByaWNlXCI6IDkwXG4gICAgICAgIH0sXG4gICAgICAgIFwiRXF1aXBtZW50IEZ1ZWxcIjoge1xuICAgICAgICAgIFwiYW1vdW50XCI6IDYuNSxcbiAgICAgICAgICBcIm9yaWdpbmFsQW1vdW50XCI6IDYuNSxcbiAgICAgICAgICBcInVuaXRzXCI6IFwiW2dhbF91c11cIixcbiAgICAgICAgICBcImVycm9yXCI6IG51bGwsXG4gICAgICAgICAgXCJwcmljZVwiOiAxOC4yNjVcbiAgICAgICAgfSxcbiAgICAgICAgXCJTZW1pLVRyYWN0b3IgdHJhaWxlci0tTGFib3JcIjoge1xuICAgICAgICAgIFwiYW1vdW50XCI6IDEsXG4gICAgICAgICAgXCJvcmlnaW5hbEFtb3VudFwiOiAxLFxuICAgICAgICAgIFwidW5pdHNcIjogXCJoXCIsXG4gICAgICAgICAgXCJlcnJvclwiOiBudWxsLFxuICAgICAgICAgIFwicHJpY2VcIjogMzVcbiAgICAgICAgfVxuICAgICAgfSxcbiAgICAgIFwicHJpY2VcIjogMTQzLjI2NVxuICAgIH0sXG4gICAge1xuICAgICAgXCJjbGFzc1wiOiBcImVxdWlwbWVudFwiLFxuICAgICAgXCJuYW1lXCI6IFwiU21hbGwgVHJhY3RvclwiLFxuICAgICAgXCJ1bml0c1wiOiBcImhcIixcbiAgICAgIFwidHlwZVwiOiBcImNvbXBsZXhcIixcbiAgICAgIFwibWF0ZXJpYWxzXCI6IHtcbiAgICAgICAgXCJFcXVpcG1lbnQgRnVlbFwiOiB7XG4gICAgICAgICAgXCJhbW91bnRcIjogMS45OCxcbiAgICAgICAgICBcIm9yaWdpbmFsQW1vdW50XCI6IDEuOTgsXG4gICAgICAgICAgXCJ1bml0c1wiOiBcIltnYWxfdXNdXCIsXG4gICAgICAgICAgXCJlcnJvclwiOiBudWxsLFxuICAgICAgICAgIFwicHJpY2VcIjogNS41NjM4XG4gICAgICAgIH0sXG4gICAgICAgIFwiU21hbGwgVHJhY3Rvci0tTGFib3JcIjoge1xuICAgICAgICAgIFwiYW1vdW50XCI6IDEsXG4gICAgICAgICAgXCJvcmlnaW5hbEFtb3VudFwiOiAxLFxuICAgICAgICAgIFwidW5pdHNcIjogXCJoXCIsXG4gICAgICAgICAgXCJlcnJvclwiOiB0cnVlXG4gICAgICAgIH0sXG4gICAgICAgIFwiU21hbGwgVHJhY3Rvci0tQ2FwaXRvbCBDb3N0XCI6IHtcbiAgICAgICAgICBcImFtb3VudFwiOiAxLFxuICAgICAgICAgIFwib3JpZ2luYWxBbW91bnRcIjogMSxcbiAgICAgICAgICBcInVuaXRzXCI6IFwiaFwiLFxuICAgICAgICAgIFwiZXJyb3JcIjogdHJ1ZVxuICAgICAgICB9XG4gICAgICB9LFxuICAgICAgXCJwcmljZVwiOiA1LjU2MzhcbiAgICB9LFxuICAgIHtcbiAgICAgIFwiY2xhc3NcIjogXCJlcXVpcG1lbnRcIixcbiAgICAgIFwibmFtZVwiOiBcIlN1cHBvcnQgVHJ1Y2tcIixcbiAgICAgIFwidW5pdHNcIjogXCJoXCIsXG4gICAgICBcInR5cGVcIjogXCJjb21wbGV4XCIsXG4gICAgICBcIm1hdGVyaWFsc1wiOiB7XG4gICAgICAgIFwiU3VwcG9ydCBUcnVjay0tQ2FwaXRvbCBDb3N0XCI6IHtcbiAgICAgICAgICBcImFtb3VudFwiOiAxLFxuICAgICAgICAgIFwib3JpZ2luYWxBbW91bnRcIjogMSxcbiAgICAgICAgICBcInVuaXRzXCI6IFwiaFwiLFxuICAgICAgICAgIFwiZXJyb3JcIjogbnVsbCxcbiAgICAgICAgICBcInByaWNlXCI6IDI1XG4gICAgICAgIH0sXG4gICAgICAgIFwiU3VwcG9ydCBUcnVjay0tTGFib3JcIjoge1xuICAgICAgICAgIFwiYW1vdW50XCI6IDEsXG4gICAgICAgICAgXCJvcmlnaW5hbEFtb3VudFwiOiAxLFxuICAgICAgICAgIFwidW5pdHNcIjogXCJoXCIsXG4gICAgICAgICAgXCJlcnJvclwiOiBudWxsLFxuICAgICAgICAgIFwicHJpY2VcIjogMzBcbiAgICAgICAgfSxcbiAgICAgICAgXCJFcXVpcG1lbnQgRnVlbFwiOiB7XG4gICAgICAgICAgXCJhbW91bnRcIjogMS43NixcbiAgICAgICAgICBcIm9yaWdpbmFsQW1vdW50XCI6IDEuNzYsXG4gICAgICAgICAgXCJ1bml0c1wiOiBcIltnYWxfdXNdXCIsXG4gICAgICAgICAgXCJlcnJvclwiOiBudWxsLFxuICAgICAgICAgIFwicHJpY2VcIjogNC45NDU2XG4gICAgICAgIH1cbiAgICAgIH0sXG4gICAgICBcInByaWNlXCI6IDU5Ljk0NTZcbiAgICB9LFxuICAgIHtcbiAgICAgIFwiY2xhc3NcIjogXCJlcXVpcG1lbnRcIixcbiAgICAgIFwibmFtZVwiOiBcIlRhbmRlbSBBeGxlIFRydWNrXCIsXG4gICAgICBcInVuaXRzXCI6IFwiaFwiLFxuICAgICAgXCJ0eXBlXCI6IFwiY29tcGxleFwiLFxuICAgICAgXCJtYXRlcmlhbHNcIjoge1xuICAgICAgICBcIlRhbmRlbSBBeGxlIFRydWNrLS1DYXBpdG9sIENvc3RcIjoge1xuICAgICAgICAgIFwiYW1vdW50XCI6IDEsXG4gICAgICAgICAgXCJvcmlnaW5hbEFtb3VudFwiOiAxLFxuICAgICAgICAgIFwidW5pdHNcIjogXCJoXCIsXG4gICAgICAgICAgXCJlcnJvclwiOiBudWxsLFxuICAgICAgICAgIFwicHJpY2VcIjogOTBcbiAgICAgICAgfSxcbiAgICAgICAgXCJFcXVpcG1lbnQgRnVlbFwiOiB7XG4gICAgICAgICAgXCJhbW91bnRcIjogMTMuMixcbiAgICAgICAgICBcIm9yaWdpbmFsQW1vdW50XCI6IDEzLjIsXG4gICAgICAgICAgXCJ1bml0c1wiOiBcIltnYWxfdXNdXCIsXG4gICAgICAgICAgXCJlcnJvclwiOiBudWxsLFxuICAgICAgICAgIFwicHJpY2VcIjogMzcuMDkyXG4gICAgICAgIH0sXG4gICAgICAgIFwiVGFuZGVtIEF4bGUgVHJ1Y2stLUxhYm9yXCI6IHtcbiAgICAgICAgICBcImFtb3VudFwiOiAxLFxuICAgICAgICAgIFwib3JpZ2luYWxBbW91bnRcIjogMSxcbiAgICAgICAgICBcInVuaXRzXCI6IFwiaFwiLFxuICAgICAgICAgIFwiZXJyb3JcIjogbnVsbCxcbiAgICAgICAgICBcInByaWNlXCI6IDM1XG4gICAgICAgIH1cbiAgICAgIH0sXG4gICAgICBcInByaWNlXCI6IDE2Mi4wOTE5OTk5OTk5OTk5OFxuICAgIH0sXG4gICAge1xuICAgICAgXCJjbGFzc1wiOiBcImVxdWlwbWVudFwiLFxuICAgICAgXCJuYW1lXCI6IFwiVHJhY3RvciBhbmQgc3ByYXllclwiLFxuICAgICAgXCJ1bml0c1wiOiBcImhcIixcbiAgICAgIFwidHlwZVwiOiBcImNvbXBsZXhcIixcbiAgICAgIFwibWF0ZXJpYWxzXCI6IHtcbiAgICAgICAgXCJFcXVpcG1lbnQgRnVlbFwiOiB7XG4gICAgICAgICAgXCJhbW91bnRcIjogMy45NixcbiAgICAgICAgICBcIm9yaWdpbmFsQW1vdW50XCI6IDMuOTYsXG4gICAgICAgICAgXCJ1bml0c1wiOiBcIltnYWxfdXNdXCIsXG4gICAgICAgICAgXCJlcnJvclwiOiBudWxsLFxuICAgICAgICAgIFwicHJpY2VcIjogMTEuMTI3NlxuICAgICAgICB9LFxuICAgICAgICBcIlRyYWN0b3IgYW5kIHNwcmF5ZXItLUxhYm9yXCI6IHtcbiAgICAgICAgICBcImFtb3VudFwiOiAxLFxuICAgICAgICAgIFwib3JpZ2luYWxBbW91bnRcIjogMSxcbiAgICAgICAgICBcInVuaXRzXCI6IFwiaFwiLFxuICAgICAgICAgIFwiZXJyb3JcIjogdHJ1ZVxuICAgICAgICB9LFxuICAgICAgICBcIkVzdGltYXRlXCI6IHtcbiAgICAgICAgICBcInVuaXRzXCI6IFwidXMkXCIsXG4gICAgICAgICAgXCJhbW91bnRcIjogNTAsXG4gICAgICAgICAgXCJlcnJvclwiOiBudWxsLFxuICAgICAgICAgIFwicHJpY2VcIjogNTBcbiAgICAgICAgfVxuICAgICAgfSxcbiAgICAgIFwicHJpY2VcIjogNjEuMTI3NlxuICAgIH0sXG4gICAge1xuICAgICAgXCJ0eXBlXCI6IFwiY29tcGxleFwiLFxuICAgICAgXCJuYW1lXCI6IFwiQVRWXCIsXG4gICAgICBcInVuaXRzXCI6IFwidXMkL2hcIixcbiAgICAgIFwiZGVzY3JpcHRpb25cIjogXCJcIixcbiAgICAgIFwicHJpY2VcIjogNi45Nzk5OTk5OTk5OTk5OTk1LFxuICAgICAgXCJtYXRlcmlhbHNcIjoge1xuICAgICAgICBcIkdhc1wiOiB7XG4gICAgICAgICAgXCJuYW1lXCI6IFwiR2FzXCIsXG4gICAgICAgICAgXCJhbW91bnRcIjogMSxcbiAgICAgICAgICBcInVuaXRzXCI6IFwiW2dhbF91c11cIixcbiAgICAgICAgICBcImVycm9yXCI6IG51bGwsXG4gICAgICAgICAgXCJwcmljZVwiOiAzLjc5XG4gICAgICAgIH0sXG4gICAgICAgIFwiQVRWLS1DYXBpdGFsIFJlY292ZXJ5XCI6IHtcbiAgICAgICAgICBcIm5hbWVcIjogXCJBVFYtLUNhcGl0YWwgUmVjb3ZlcnlcIixcbiAgICAgICAgICBcImFtb3VudFwiOiAxLFxuICAgICAgICAgIFwidW5pdHNcIjogXCJoXCIsXG4gICAgICAgICAgXCJlcnJvclwiOiBudWxsLFxuICAgICAgICAgIFwicHJpY2VcIjogMS44OVxuICAgICAgICB9LFxuICAgICAgICBcIkFUVi0taW5zdXJhbmNlXCI6IHtcbiAgICAgICAgICBcIm5hbWVcIjogXCJBVFYtLWluc3VyYW5jZVwiLFxuICAgICAgICAgIFwiYW1vdW50XCI6IDEsXG4gICAgICAgICAgXCJ1bml0c1wiOiBcImhcIixcbiAgICAgICAgICBcImVycm9yXCI6IG51bGwsXG4gICAgICAgICAgXCJwcmljZVwiOiAwLjAxXG4gICAgICAgIH0sXG4gICAgICAgIFwiQVRWLS1UYXhlc1wiOiB7XG4gICAgICAgICAgXCJuYW1lXCI6IFwiQVRWLS1UYXhlc1wiLFxuICAgICAgICAgIFwiYW1vdW50XCI6IDEsXG4gICAgICAgICAgXCJ1bml0c1wiOiBcImhcIixcbiAgICAgICAgICBcImVycm9yXCI6IG51bGwsXG4gICAgICAgICAgXCJwcmljZVwiOiAwLjA5XG4gICAgICAgIH0sXG4gICAgICAgIFwiQVRWLS1MdWJlICYgUmVwYWlyc1wiOiB7XG4gICAgICAgICAgXCJuYW1lXCI6IFwiQVRWLS1MdWJlICYgUmVwYWlyc1wiLFxuICAgICAgICAgIFwiYW1vdW50XCI6IDEsXG4gICAgICAgICAgXCJ1bml0c1wiOiBcImhcIixcbiAgICAgICAgICBcImVycm9yXCI6IG51bGwsXG4gICAgICAgICAgXCJwcmljZVwiOiAxLjJcbiAgICAgICAgfVxuICAgICAgfVxuICAgIH1cbiAgXSxcbiAgXCJvcGVyYXRpb25zXCI6IFtcbiAgICB7XG4gICAgICBcIm5hbWVcIjogXCJXZWVkcy1Sb3VuZHVwIFBvd2VyTWF4XCIsXG4gICAgICBcIm1hdGVyaWFsc1wiOiBbXG4gICAgICAgIHtcbiAgICAgICAgICBcIm5hbWVcIjogXCJBVFZcIixcbiAgICAgICAgICBcImFtb3VudFwiOiAwLFxuICAgICAgICAgIFwidW5pdHNcIjogXCJ1cyQvaFwiLFxuICAgICAgICAgIFwiaWRcIjogXCJjMmI2ODgwYS1hMjk3LTRjYjgtOGFiOC04ZDMyMjNhNjZkNzlcIixcbiAgICAgICAgICBcImVycm9yXCI6IG51bGwsXG4gICAgICAgICAgXCJwcmljZVwiOiAwLFxuICAgICAgICAgIFwib3JpZ2luYWxBbW91bnRcIjogMFxuICAgICAgICB9LFxuICAgICAgICB7XG4gICAgICAgICAgXCJuYW1lXCI6IFwiUm91bmR1cCBQb3dlck1heFwiLFxuICAgICAgICAgIFwiYW1vdW50XCI6IDIsXG4gICAgICAgICAgXCJ1bml0c1wiOiBcIltwdF91c11cIixcbiAgICAgICAgICBcImlkXCI6IFwiNzQzY2JlMDgtNGM2OS00Y2Q3LTg2MTItOGZiMTFjMWE5YmEwXCIsXG4gICAgICAgICAgXCJlcnJvclwiOiBudWxsLFxuICAgICAgICAgIFwicHJpY2VcIjogNS41LFxuICAgICAgICAgIFwib3JpZ2luYWxBbW91bnRcIjogMlxuICAgICAgICB9XG4gICAgICBdLFxuICAgICAgXCJzY2hlZHVsZVwiOiBbXG4gICAgICAgIHtcbiAgICAgICAgICBcImxlbmd0aFwiOiAxLFxuICAgICAgICAgIFwidW5pdHNcIjogXCJtb250aFwiLFxuICAgICAgICAgIFwiZGF0ZVwiOiBcIjIwMTUtMTItMVwiXG4gICAgICAgIH1cbiAgICAgIF0sXG4gICAgICBcInVuaXRzXCI6IFwiW2Fjcl91c11cIixcbiAgICAgIFwic3VidG90YWxcIjogNS41LFxuICAgICAgXCJ0b3RhbFwiOiA1LjVcbiAgICB9XG4gIF0sXG4gIFwiZmFybVwiOiB7XG4gICAgXCJ1bml0XCI6IFwiW2Fjcl91c11cIixcbiAgICBcInNpemVcIjogXCIxMDBcIixcbiAgICBcImNvbW1vZGl0eVwiOiBcIlBPUExBUlwiLFxuICAgIFwibG9jYXRpb25cIjogXCIwNjExM1wiLFxuICAgIFwiZmFybVwiOiBcImNsYXJrc2J1cmdcIlxuICB9XG59XG4iLCJtb2R1bGUuZXhwb3J0cz17XG4gIFwiY2xhc3Nlc1wiOiB7XG4gICAgXCJmZXJ0aWxpemVyXCI6IFtcbiAgICAgIFwiMC0wLTYwXCIsXG4gICAgICBcIjEwLTM0LTAwXCIsXG4gICAgICBcIjExLTUyLTBcIixcbiAgICAgIFwiMTMtMC00NVwiLFxuICAgICAgXCIxNi0xNi0xNlwiLFxuICAgICAgXCIxNi0yMC0wLTE0XCIsXG4gICAgICBcIjE4LTAtNS00XCIsXG4gICAgICBcIjIsNC1EXCIsXG4gICAgICBcIjMyLTAtMFwiLFxuICAgICAgXCIzMy0wLTAtMTJcIixcbiAgICAgIFwiNDAtMC0wLTZcIixcbiAgICAgIFwiNDYtMC0wXCIsXG4gICAgICBcIjgwLTAtMFwiLFxuICAgICAgXCI4MC0wMC0wMFwiLFxuICAgICAgXCJEcnkgTml0cm9nZW5cIixcbiAgICAgIFwiRHJ5IE5pdHJvZ2VuIC0gUHJlcGxhbnRcIixcbiAgICAgIFwiRHJ5IFAyTzVcIixcbiAgICAgIFwiRHJ5IFBob3NwaGF0ZVwiLFxuICAgICAgXCJEcnkgUG90YXNoXCIsXG4gICAgICBcIkRyeSBTdWxmdXJcIixcbiAgICAgIFwiSzIwXCIsXG4gICAgICBcIksyT1wiLFxuICAgICAgXCJMaXF1aWQgTml0cm9nZW5cIixcbiAgICAgIFwiTGlxdWlkIFAyTzVcIixcbiAgICAgIFwiTWljcm9udXRyaWVudHNcIixcbiAgICAgIFwiTXVsY2hcIixcbiAgICAgIFwiTml0cm9nZW5cIixcbiAgICAgIFwiTml0cm9nZW4gKGRyeSlcIixcbiAgICAgIFwiUGhvc3Bob3JvdXNcIixcbiAgICAgIFwiUGhvc3Bob3JvdXMgKGRyeSlcIixcbiAgICAgIFwiU3VsZnVyXCIsXG4gICAgICBcIlN1bGZ1ciAoZHJ5KVwiLFxuICAgICAgXCJTdWxmdXJpYyBBY2lkXCIsXG4gICAgICBcIlN1cmZhY3RhbnQtSW5kdWNlXCIsXG4gICAgICBcIlVOMzJcIixcbiAgICAgIFwiWmluY1wiLFxuICAgICAgXCIyLDQtRFwiXG4gICAgXSxcbiAgICBcInBlc3RpY2lkZVwiOiBbXG4gICAgICBcIkFjaGlldmUgU0NcIixcbiAgICAgIFwiQWRtaXJlXCIsXG4gICAgICBcIkFkbWlyZSBQcm9cIixcbiAgICAgIFwiQWlyIEFwcGxpY2F0aW9uXCIsXG4gICAgICBcIkFsY2FsYVwiLFxuICAgICAgXCJBbW1vbml1bSBTdWxmYXRlXCIsXG4gICAgICBcIkFNU1wiLFxuICAgICAgXCJBcG9nZWVcIixcbiAgICAgIFwiQXNzYWlsIDcwV1BcIixcbiAgICAgIFwiQXNzZXNtZW50XCIsXG4gICAgICBcIkFzc3VyZSBJSVwiLFxuICAgICAgXCJBeGlvbSBMQlwiLFxuICAgICAgXCJBeGlvbSBPWlwiLFxuICAgICAgXCJCYWxlXCIsXG4gICAgICBcIkJhbGluZ1wiLFxuICAgICAgXCJCYW52ZWxcIixcbiAgICAgIFwiQmVlIEhpdmVzXCIsXG4gICAgICBcIkJyYXZvXCIsXG4gICAgICBcIkJyb2FkY2FzdCBGZXJ0aWxpemVyXCIsXG4gICAgICBcIkJyb3ggTVwiLFxuICAgICAgXCJDYXJiaW5lIDUwV0dcIixcbiAgICAgIFwiQ2xhcml0eVwiLFxuICAgICAgXCJDb3VudGVyIDE1RyBMLU4tTFwiLFxuICAgICAgXCJEYWN0aGFsXCIsXG4gICAgICBcIkRlZm9sIDVcIixcbiAgICAgIFwiRGV2cmlub2wgNTBERlwiLFxuICAgICAgXCJEaW1ldGhvYXRlXCIsXG4gICAgICBcIkRpb21ldGhhdGVcIixcbiAgICAgIFwiRGlzY292ZXJcIixcbiAgICAgIFwiRGlzeXN0b25cIixcbiAgICAgIFwiRGktU3lzdG9uXCIsXG4gICAgICBcIkRpdGhhbmUgRjQ1IFJhaW5zaGllbGRcIixcbiAgICAgIFwiRGl1cm9uXCIsXG4gICAgICBcIkVuZHVyYSAoMngpXCIsXG4gICAgICBcIkVwdGFtIDdFQ1wiLFxuICAgICAgXCJFeGNlbCA5MFwiLFxuICAgICAgXCJGYXItR09cIixcbiAgICAgIFwiRmluaXNoIDYgUHJvXCIsXG4gICAgICBcIkdlbiAyNVdHXCIsXG4gICAgICBcIkdpbnN0YXJcIixcbiAgICAgIFwiR2x5cGhvc2F0ZSBHQUwxXCIsXG4gICAgICBcIkdvYWxcIixcbiAgICAgIFwiR29hbCBUZW5kZXJcIixcbiAgICAgIFwiSGFybW9ueSBFeHRyYVwiLFxuICAgICAgXCJIZWFkbGluZVwiLFxuICAgICAgXCJLYXJtZXhcIixcbiAgICAgIFwiS2FybWV4IERGXCIsXG4gICAgICBcIktlcmJcIixcbiAgICAgIFwiTGFubmF0ZSA5MCBTUFwiLFxuICAgICAgXCJMZXZlcmFnZVwiLFxuICAgICAgXCJMZXZlcmFnZSAyLjdcIixcbiAgICAgIFwiTEkgNzAwXCIsXG4gICAgICBcIkxvcnNiYW4gMTVHXCIsXG4gICAgICBcIkxvcnNiYW4gNEVcIixcbiAgICAgIFwiTTkwXCIsXG4gICAgICBcIk1hbGF0aGlvblwiLFxuICAgICAgXCJNYXZlcmlja1wiLFxuICAgICAgXCJNQ1BBIEFtaW5lXCIsXG4gICAgICBcIk1lcGV4IEdpbiBPdXJcIixcbiAgICAgIFwiTWV0YW0gU29kaXVtXCIsXG4gICAgICBcIk1pY3JvLVRlY2hcIixcbiAgICAgIFwiTXVzdGFuZyAxLjUgRVdcIixcbiAgICAgIFwiT2Jlcm9uIDI1Q1wiLFxuICAgICAgXCJPcnRoZW5lXCIsXG4gICAgICBcIk9zcHJleVwiLFxuICAgICAgXCJPdXRsb29rIDZFQ1wiLFxuICAgICAgXCJQcmlzdGluZVwiLFxuICAgICAgXCJQcm93bFwiLFxuICAgICAgXCJQcm93bCAzLjNFQ1wiLFxuICAgICAgXCJQcm93bCBIMjBcIixcbiAgICAgIFwiUHVtYSAxRUNcIixcbiAgICAgIFwiUHVyc3VpdFwiLFxuICAgICAgXCJRdWFkcmlzXCIsXG4gICAgICBcIlF1aWx0XCIsXG4gICAgICBcIlJhbGx5IDQwIFdTUFwiLFxuICAgICAgXCJSZWdsb25lXCIsXG4gICAgICBcIlJpZG9taWwgR29sZCBFQ1wiLFxuICAgICAgXCJSb3VuZHVwXCIsXG4gICAgICBcIlJvdW5kdXAgT3JpZ2luYWwgTWF4XCIsXG4gICAgICBcIlJvdW5kdXAgVWx0cmEgTWF4XCIsXG4gICAgICBcIlNlbGVjdCBNYXhcIixcbiAgICAgIFwiU2VuY29yXCIsXG4gICAgICBcIlNlbmNvciA0TFwiLFxuICAgICAgXCJTZW5jb3IgNzVERlwiLFxuICAgICAgXCJTZXZpbiBYTFIgUGx1c1wiLFxuICAgICAgXCJTaGFyayBFV1wiLFxuICAgICAgXCJTbHVnIEJhaXRcIixcbiAgICAgIFwiU29uYWxhbiBIRlBcIixcbiAgICAgIFwiU3BvdCBTcHJheSBSb3VuZHVwXCIsXG4gICAgICBcIlN0YXBsZVwiLFxuICAgICAgXCJTdGFyYW5lK1NhbHZvXCIsXG4gICAgICBcIlN0YXJhbmUrU3dvcmRcIixcbiAgICAgIFwiU3RyYXRlZ29cIixcbiAgICAgIFwiU3VjY2Vzc1wiLFxuICAgICAgXCJTdXJmbGFuIEFTXCIsXG4gICAgICBcIlN5bmFwc2UgV0dcIixcbiAgICAgIFwiVGVsb25lIElJXCIsXG4gICAgICBcIlRyZWZsYW4gNEhGUFwiLFxuICAgICAgXCJUcmVmbGFuIEZQXCIsXG4gICAgICBcIlRyZWZsYW4gVFIgMTBcIixcbiAgICAgIFwiVHJpZmx1cmV4IEhGUFwiLFxuICAgICAgXCJWZWxwYXIgTFwiLFxuICAgICAgXCJDb3JhZ2VuXCIsXG4gICAgICBcIkRpbWlsaW5cIixcbiAgICAgIFwiRnVzaWxhZGVcIixcbiAgICAgIFwiR2x5cGhvc2F0ZVwiLFxuICAgICAgXCJHb2FsIDJYTFwiLFxuICAgICAgXCJJbWlkYWNsb3ByaWQ1XCIsXG4gICAgICBcIk91c3RcIixcbiAgICAgIFwiU3VyZWd1YXJkXCIsXG4gICAgICBcIlRyYW5zbGluZVwiLFxuICAgICAgXCJUcmlmbHVyYWxpblwiXG4gICAgXSxcbiAgICBcInNlZWRcIjogW1xuICAgICAgXCJCYXJsZXkgU2VlZFwiLFxuICAgICAgXCJDYW5vbGEgU2VlZFwiLFxuICAgICAgXCJDb3JuIFNlZWRcIixcbiAgICAgIFwiTGVudGlsIFNlZWRcIixcbiAgICAgIFwiUG90YXRvIFNlZWRcIixcbiAgICAgIFwiU29yZ2h1bSBTZWVkXCIsXG4gICAgICBcIlN1c2FuIFNlZWRcIixcbiAgICAgIFwiV2hlYXQgU2VlZFwiLFxuICAgICAgXCJQb3BsYXIgQ3V0dGluZ1wiXG4gICAgXSxcbiAgICBcInByb2Nlc3NpbmdcIjogW1xuICAgICAgXCJDYXB0dXJlXCIsXG4gICAgICBcIkNsZWFuIFNlZWQgT3JjaGRnclwiLFxuICAgICAgXCJDb21taXNpb24gQXNzZXNzXCIsXG4gICAgICBcIkNvbW1pc3Npb24gQXNzZXNzXCIsXG4gICAgICBcIkNvbnN1bHRhbnRcIixcbiAgICAgIFwiQ290dG9uIEFzc2VzbWVudFwiLFxuICAgICAgXCJDdXN0b20gQWVyaWFsIFNwcmF5XCIsXG4gICAgICBcIkN1c3RvbSBBaXIgU3ByYXlcIixcbiAgICAgIFwiQ3VzdG9tIEFpciBTcHJheSAtIDVHXCIsXG4gICAgICBcIkN1c3RvbSBDb21iaW5pbmdcIixcbiAgICAgIFwiQ3VzdG9tIEZlcnRpbGl6ZVwiLFxuICAgICAgXCJDdXN0b20gRnVtaWdhdGUgLSBEZWVwXCIsXG4gICAgICBcIkN1c3RvbSBTaWRlZHJlc3NcIixcbiAgICAgIFwiQ3V0L1dpbmRyb3dcIixcbiAgICAgIFwiRmVlcyBBc3Nlc21lbnRcIixcbiAgICAgIFwiRnVtaWdhdGlvblwiLFxuICAgICAgXCJHcm91bmQgQXBwbGljYXRpb25cIixcbiAgICAgIFwiSGFydmVzdFwiLFxuICAgICAgXCJIYXJ2ZXN0IENvbWJpbmUgR3JhaW5cIixcbiAgICAgIFwiSGFydmVzdCBmb3IgR3JhaW5cIixcbiAgICAgIFwiSGFydmVzdDogSGF1bCBHcmFpblwiLFxuICAgICAgXCJIYXVsIGFuZCBTdGFja1wiLFxuICAgICAgXCJIYXVsIExvY2FsXCIsXG4gICAgICBcIkluamVjdGlvbi1TaWRlZHJlc3NcIixcbiAgICAgIFwiSW5qZWN0aW9uLVNpZGVkcmVzcyBOSDNcIixcbiAgICAgIFwiSW5zZWN0aWNpZGVcIixcbiAgICAgIFwiTWFuYWdlbWVudFwiLFxuICAgICAgXCJQZXN0IENvbnRyb2wgQ29uc3VsdGFudFwiLFxuICAgICAgXCJQb25jaG8gQmV0YSBTZWVkIFRyZWF0bWVudFwiLFxuICAgICAgXCJSZW50YWwgRmVydGlsaXplciBBcHBsaWNhdG9yXCIsXG4gICAgICBcIlJlbnRhbCBSaXBwZXIgU2hvb3RlclwiLFxuICAgICAgXCJSZW50YWwgU3ByYXllclwiLFxuICAgICAgXCJSZXBhaXJcIixcbiAgICAgIFwiUmlwZXIgU2hvb3RlclwiLFxuICAgICAgXCJSb2Fkc2lkZSBCYWxlc1wiLFxuICAgICAgXCJSb2Fkc2lkZSBIYXlcIixcbiAgICAgIFwiU2VlZCBDbGVhbiBhbmQgQmFnXCIsXG4gICAgICBcIlNlZWQgQ2xlYW5kIGFuZCBCYWdcIixcbiAgICAgIFwiU2VlZCBUZXN0XCIsXG4gICAgICBcIlN0b3JhZ2UgT3BlcmF0aW5nIENvc3RzXCIsXG4gICAgICBcIlN0b3JhZ2UgUmVwYWlyc1wiLFxuICAgICAgXCJTdWdhcmJlZXRcIixcbiAgICAgIFwiU3dhdGhcIixcbiAgICAgIFwiU3dhdGhpbmdcIixcbiAgICAgIFwiVGFycGluZ1wiLFxuICAgICAgXCJUaXNzdWUgQW5hbHlzaXNcIixcbiAgICAgIFwiVHJhbnNwb3J0XCIsXG4gICAgICBcIlRyYW5zcG9ydCB0byBQRFhcIixcbiAgICAgIFwiV2F0ZXIgQXNzZXNtZW50XCIsXG4gICAgICBcIldoZWF0IEFzc2VzbWVudFwiXG4gICAgXSxcbiAgICBcImxhYm9yXCI6IFtcbiAgICAgIFwiQ29tYmluZVwiLFxuICAgICAgXCJDb21iaW5lIFdoZWF0XCIsXG4gICAgICBcIkNvb2wgYW5kIFBhY2tcIixcbiAgICAgIFwiR29waGVyIENvbnRyb2xcIixcbiAgICAgIFwiTGFib3IgKElycmlnYXRpb24pXCIsXG4gICAgICBcIkxhYm9yIChNYWNoaW5lKVwiLFxuICAgICAgXCJMYWJvciAobm9uLW1hY2hpbmUpXCIsXG4gICAgICBcIkxhYm9yIChvdGhlcilcIixcbiAgICAgIFwiTWFpbnRlbmFuY2VcIixcbiAgICAgIFwiTWFpbnRlbmFuY2UgYW5kIFJlcGFpclwiLFxuICAgICAgXCJvZXM0NTIwOTFcIixcbiAgICAgIFwib2VzNDUyMDkyXCIsXG4gICAgICBcIm9lczUzMzAzMlwiLFxuICAgICAgXCJQaWNrIEJlcnJpZXNcIixcbiAgICAgIFwiUGxhbnRcIixcbiAgICAgIFwiUGxhbnRpbmdcIixcbiAgICAgIFwiUG9zdGhhcnZlc3QgYW5kIHBhY2thZ2luZ1wiLFxuICAgICAgXCJSb2RlbnQgQ29udHJvbFwiLFxuICAgICAgXCJTcHJheWVyXCIsXG4gICAgICBcIlN0dWJsZSBTaHJlZGRlclwiLFxuICAgICAgXCJTd2F0aCBSYWtlXCIsXG4gICAgICBcIldlZWQgQ29udHJvbFwiLFxuICAgICAgXCJMYWJvci0tMy1XaGVlbCBhZyBzcHJheWVyXCIsXG4gICAgICBcIkxhYm9yLS1DaGFsbGVuZ2VyIHRyYWN0b3JcIixcbiAgICAgIFwiTGFib3ItLUNvb2xlci92YW5cIixcbiAgICAgIFwiTGFib3ItLUZSIDYwODAgRkhcIixcbiAgICAgIFwiTGFib3JlclwiLFxuICAgICAgXCJMYWJvci0tTGFyZ2UgdHJhY3RvclwiLFxuICAgICAgXCJMYWJvci0tTWlkLXNpemUgdHJhY3RvclwiLFxuICAgICAgXCJMYWJvci0tU2VtaS10cmFjdG9yIHRyYWlsZXJcIixcbiAgICAgIFwiTGFib3ItLVNtYWxsIHRyYWN0b3JcIixcbiAgICAgIFwiTGFib3ItLVN1cGVydmlzb3JcIixcbiAgICAgIFwiTGFib3ItLVN1cHBvcnQgVHJ1Y2tcIixcbiAgICAgIFwiTGFib3ItLVRhbmRlbSBheGxlIHRydWNrXCIsXG4gICAgICBcIkxhYm9yLS1UcmFjdG9yIGFuZCBTcHJheWVyXCIsXG4gICAgICBcImhvZWluZ1wiLFxuICAgICAgXCJoZXJiaWNpZGUgLSBtYW51YWxcIlxuICAgIF0sXG4gICAgXCJpbnN1cmFuY2VcIjogW1xuICAgICAgXCJDcm9wIEluc3VyYW5jZVwiXG4gICAgXSxcbiAgICBcImFueVwiOiBbXG4gICAgICBcImVzdGltYXRlXCJcbiAgICBdLFxuICAgIFwibWF0ZXJpYWxcIjogW1xuICAgICAgXCJGdWVsXCIsXG4gICAgICBcIkZ1ZWwgLSBEaWVzZWxcIixcbiAgICAgIFwiRnVlbCAtIEdhc1wiLFxuICAgICAgXCJMaW1lXCIsXG4gICAgICBcIkx1YmVcIixcbiAgICAgIFwiTHVicmljYW50c1wiLFxuICAgICAgXCJQYWNraW5nXCIsXG4gICAgICBcIlB1cml0eSBhbmQgR2VybVwiLFxuICAgICAgXCJSYWtlXCIsXG4gICAgICBcIlNhd2R1c3RcIixcbiAgICAgIFwiWXVrb25cIixcbiAgICAgIFwiWmVwaHlyXCJcbiAgICBdLFxuICAgIFwid2F0ZXJcIjogW1xuICAgICAgXCJJcnJpZ2F0aW9uXCIsXG4gICAgICBcIldhdGVyXCIsXG4gICAgICBcIklycmlnYXRpb25cIlxuICAgIF0sXG4gICAgXCJyZW50XCI6IFtcbiAgICAgIFwibGFuZC1yZW50LWlycmlnYXRlZFwiLFxuICAgICAgXCJsYW5kLXJlbnQtbm9uaXJyaWdhdGVkXCIsXG4gICAgICBcImxhbmQtcmVudC1wYXN0dXJlXCJcbiAgICBdLFxuICAgIFwiZXF1aXBtZW50XCI6IFtcbiAgICAgIFwiMy1XaGVlbCBBZyBTcHJheWVyXCIsXG4gICAgICBcIkNoYWxsZW5nZXIgdHJhY3RvclwiLFxuICAgICAgXCJDb29sZXIvdmFuXCIsXG4gICAgICBcIkVsaW1pbmF0b3JcIixcbiAgICAgIFwiRlIgNjA4MCBGSFwiLFxuICAgICAgXCJMYXJnZSB0cmFjdG9yXCIsXG4gICAgICBcIk1pZC1zaXplIHRyYWN0b3JcIixcbiAgICAgIFwiU2VtaS10cmFjdG9yIHRyYWlsZXJcIixcbiAgICAgIFwiU21hbGwgdHJhY3RvclwiLFxuICAgICAgXCJTdXBwb3J0IFRydWNrXCIsXG4gICAgICBcIlRhbmRlbSBheGxlIHRydWNrXCIsXG4gICAgICBcIlRyYWN0b3IgYW5kIHNwcmF5ZXJcIlxuICAgIF0sXG4gICAgXCJmdWVsXCI6IFtcbiAgICAgIFwiRXF1aXBtZW50IEZ1ZWxcIlxuICAgIF0sXG4gICAgXCJbcXRfdXNdXCI6IFtcbiAgICAgIFwiUm96b2xcIlxuICAgIF1cbiAgfSxcbiAgXCJtYXRlcmlhbHNcIjogW1xuICAgIHtcbiAgICAgIFwiY2xhc3NcIjogXCJmZXJ0aWxpemVyXCIsXG4gICAgICBcIm5hbWVcIjogXCIwLTAtNjBcIixcbiAgICAgIFwidHlwZVwiOiBcInNpbXBsZVwiXG4gICAgfSxcbiAgICB7XG4gICAgICBcImNsYXNzXCI6IFwiZmVydGlsaXplclwiLFxuICAgICAgXCJuYW1lXCI6IFwiMTAtMzQtMDBcIixcbiAgICAgIFwidHlwZVwiOiBcInNpbXBsZVwiXG4gICAgfSxcbiAgICB7XG4gICAgICBcImNsYXNzXCI6IFwiZmVydGlsaXplclwiLFxuICAgICAgXCJuYW1lXCI6IFwiMTEtNTItMFwiLFxuICAgICAgXCJ0eXBlXCI6IFwic2ltcGxlXCJcbiAgICB9LFxuICAgIHtcbiAgICAgIFwiY2xhc3NcIjogXCJmZXJ0aWxpemVyXCIsXG4gICAgICBcIm5hbWVcIjogXCIxMy0wLTQ1XCIsXG4gICAgICBcInR5cGVcIjogXCJzaW1wbGVcIlxuICAgIH0sXG4gICAge1xuICAgICAgXCJjbGFzc1wiOiBcImZlcnRpbGl6ZXJcIixcbiAgICAgIFwibmFtZVwiOiBcIjE2LTE2LTE2XCIsXG4gICAgICBcInR5cGVcIjogXCJzaW1wbGVcIlxuICAgIH0sXG4gICAge1xuICAgICAgXCJjbGFzc1wiOiBcImZlcnRpbGl6ZXJcIixcbiAgICAgIFwibmFtZVwiOiBcIjE2LTIwLTAtMTRcIixcbiAgICAgIFwidHlwZVwiOiBcInNpbXBsZVwiXG4gICAgfSxcbiAgICB7XG4gICAgICBcImNsYXNzXCI6IFwiZmVydGlsaXplclwiLFxuICAgICAgXCJuYW1lXCI6IFwiMTgtMC01LTRcIixcbiAgICAgIFwidHlwZVwiOiBcInNpbXBsZVwiXG4gICAgfSxcbiAgICB7XG4gICAgICBcImNsYXNzXCI6IFwiZmVydGlsaXplclwiLFxuICAgICAgXCJuYW1lXCI6IFwiMiw0LURcIixcbiAgICAgIFwidW5pdHNcIjogXCJ1cyQvW3F0X3VzXVwiLFxuICAgICAgXCJwcmljZVwiOiA1LFxuICAgICAgXCJ0eXBlXCI6IFwic2ltcGxlXCJcbiAgICB9LFxuICAgIHtcbiAgICAgIFwiY2xhc3NcIjogXCJmZXJ0aWxpemVyXCIsXG4gICAgICBcIm5hbWVcIjogXCIzMi0wLTBcIixcbiAgICAgIFwidHlwZVwiOiBcInNpbXBsZVwiXG4gICAgfSxcbiAgICB7XG4gICAgICBcImNsYXNzXCI6IFwiZmVydGlsaXplclwiLFxuICAgICAgXCJuYW1lXCI6IFwiMzMtMC0wLTEyXCIsXG4gICAgICBcInR5cGVcIjogXCJzaW1wbGVcIlxuICAgIH0sXG4gICAge1xuICAgICAgXCJjbGFzc1wiOiBcImZlcnRpbGl6ZXJcIixcbiAgICAgIFwibmFtZVwiOiBcIjQwLTAtMC02XCIsXG4gICAgICBcInR5cGVcIjogXCJzaW1wbGVcIlxuICAgIH0sXG4gICAge1xuICAgICAgXCJjbGFzc1wiOiBcImZlcnRpbGl6ZXJcIixcbiAgICAgIFwibmFtZVwiOiBcIjQ2LTAtMFwiLFxuICAgICAgXCJ0eXBlXCI6IFwic2ltcGxlXCJcbiAgICB9LFxuICAgIHtcbiAgICAgIFwiY2xhc3NcIjogXCJmZXJ0aWxpemVyXCIsXG4gICAgICBcIm5hbWVcIjogXCI4MC0wLTBcIixcbiAgICAgIFwidHlwZVwiOiBcInNpbXBsZVwiXG4gICAgfSxcbiAgICB7XG4gICAgICBcImNsYXNzXCI6IFwiZmVydGlsaXplclwiLFxuICAgICAgXCJuYW1lXCI6IFwiODAtMDAtMDBcIixcbiAgICAgIFwidHlwZVwiOiBcInNpbXBsZVwiXG4gICAgfSxcbiAgICB7XG4gICAgICBcImNsYXNzXCI6IFwicGVzdGljaWRlXCIsXG4gICAgICBcIm5hbWVcIjogXCJBY2hpZXZlIFNDXCIsXG4gICAgICBcInR5cGVcIjogXCJzaW1wbGVcIlxuICAgIH0sXG4gICAge1xuICAgICAgXCJjbGFzc1wiOiBcInBlc3RpY2lkZVwiLFxuICAgICAgXCJuYW1lXCI6IFwiQWRtaXJlXCIsXG4gICAgICBcInR5cGVcIjogXCJzaW1wbGVcIlxuICAgIH0sXG4gICAge1xuICAgICAgXCJjbGFzc1wiOiBcInBlc3RpY2lkZVwiLFxuICAgICAgXCJuYW1lXCI6IFwiQWRtaXJlIFByb1wiLFxuICAgICAgXCJ0eXBlXCI6IFwic2ltcGxlXCJcbiAgICB9LFxuICAgIHtcbiAgICAgIFwiY2xhc3NcIjogXCJwZXN0aWNpZGVcIixcbiAgICAgIFwibmFtZVwiOiBcIkFpciBBcHBsaWNhdGlvblwiLFxuICAgICAgXCJ0eXBlXCI6IFwic2ltcGxlXCJcbiAgICB9LFxuICAgIHtcbiAgICAgIFwiY2xhc3NcIjogXCJwZXN0aWNpZGVcIixcbiAgICAgIFwibmFtZVwiOiBcIkFsY2FsYVwiLFxuICAgICAgXCJ0eXBlXCI6IFwic2ltcGxlXCJcbiAgICB9LFxuICAgIHtcbiAgICAgIFwiY2xhc3NcIjogXCJwZXN0aWNpZGVcIixcbiAgICAgIFwibmFtZVwiOiBcIkFtbW9uaXVtIFN1bGZhdGVcIixcbiAgICAgIFwidHlwZVwiOiBcInNpbXBsZVwiXG4gICAgfSxcbiAgICB7XG4gICAgICBcImNsYXNzXCI6IFwicGVzdGljaWRlXCIsXG4gICAgICBcIm5hbWVcIjogXCJBTVNcIixcbiAgICAgIFwidHlwZVwiOiBcInNpbXBsZVwiXG4gICAgfSxcbiAgICB7XG4gICAgICBcImNsYXNzXCI6IFwicGVzdGljaWRlXCIsXG4gICAgICBcIm5hbWVcIjogXCJBcG9nZWVcIixcbiAgICAgIFwidHlwZVwiOiBcInNpbXBsZVwiXG4gICAgfSxcbiAgICB7XG4gICAgICBcImNsYXNzXCI6IFwicGVzdGljaWRlXCIsXG4gICAgICBcIm5hbWVcIjogXCJBc3NhaWwgNzBXUFwiLFxuICAgICAgXCJ0eXBlXCI6IFwic2ltcGxlXCJcbiAgICB9LFxuICAgIHtcbiAgICAgIFwiY2xhc3NcIjogXCJwZXN0aWNpZGVcIixcbiAgICAgIFwibmFtZVwiOiBcIkFzc2VzbWVudFwiLFxuICAgICAgXCJ0eXBlXCI6IFwic2ltcGxlXCJcbiAgICB9LFxuICAgIHtcbiAgICAgIFwiY2xhc3NcIjogXCJwZXN0aWNpZGVcIixcbiAgICAgIFwibmFtZVwiOiBcIkFzc3VyZSBJSVwiLFxuICAgICAgXCJ0eXBlXCI6IFwic2ltcGxlXCJcbiAgICB9LFxuICAgIHtcbiAgICAgIFwiY2xhc3NcIjogXCJwZXN0aWNpZGVcIixcbiAgICAgIFwibmFtZVwiOiBcIkF4aW9tIExCXCIsXG4gICAgICBcInR5cGVcIjogXCJzaW1wbGVcIlxuICAgIH0sXG4gICAge1xuICAgICAgXCJjbGFzc1wiOiBcInBlc3RpY2lkZVwiLFxuICAgICAgXCJuYW1lXCI6IFwiQXhpb20gT1pcIixcbiAgICAgIFwidHlwZVwiOiBcInNpbXBsZVwiXG4gICAgfSxcbiAgICB7XG4gICAgICBcImNsYXNzXCI6IFwicGVzdGljaWRlXCIsXG4gICAgICBcIm5hbWVcIjogXCJCYWxlXCIsXG4gICAgICBcInR5cGVcIjogXCJzaW1wbGVcIlxuICAgIH0sXG4gICAge1xuICAgICAgXCJjbGFzc1wiOiBcInBlc3RpY2lkZVwiLFxuICAgICAgXCJuYW1lXCI6IFwiQmFsaW5nXCIsXG4gICAgICBcInR5cGVcIjogXCJzaW1wbGVcIlxuICAgIH0sXG4gICAge1xuICAgICAgXCJjbGFzc1wiOiBcInBlc3RpY2lkZVwiLFxuICAgICAgXCJuYW1lXCI6IFwiQmFudmVsXCIsXG4gICAgICBcInR5cGVcIjogXCJzaW1wbGVcIlxuICAgIH0sXG4gICAge1xuICAgICAgXCJjbGFzc1wiOiBcInNlZWRcIixcbiAgICAgIFwibmFtZVwiOiBcIkJhcmxleSBTZWVkXCIsXG4gICAgICBcInR5cGVcIjogXCJzaW1wbGVcIlxuICAgIH0sXG4gICAge1xuICAgICAgXCJjbGFzc1wiOiBcInBlc3RpY2lkZVwiLFxuICAgICAgXCJuYW1lXCI6IFwiQmVlIEhpdmVzXCIsXG4gICAgICBcInR5cGVcIjogXCJzaW1wbGVcIlxuICAgIH0sXG4gICAge1xuICAgICAgXCJjbGFzc1wiOiBcInBlc3RpY2lkZVwiLFxuICAgICAgXCJuYW1lXCI6IFwiQnJhdm9cIixcbiAgICAgIFwidHlwZVwiOiBcInNpbXBsZVwiXG4gICAgfSxcbiAgICB7XG4gICAgICBcImNsYXNzXCI6IFwicGVzdGljaWRlXCIsXG4gICAgICBcIm5hbWVcIjogXCJCcm9hZGNhc3QgRmVydGlsaXplclwiLFxuICAgICAgXCJ0eXBlXCI6IFwic2ltcGxlXCJcbiAgICB9LFxuICAgIHtcbiAgICAgIFwiY2xhc3NcIjogXCJwZXN0aWNpZGVcIixcbiAgICAgIFwibmFtZVwiOiBcIkJyb3ggTVwiLFxuICAgICAgXCJ0eXBlXCI6IFwic2ltcGxlXCJcbiAgICB9LFxuICAgIHtcbiAgICAgIFwiY2xhc3NcIjogXCJzZWVkXCIsXG4gICAgICBcIm5hbWVcIjogXCJDYW5vbGEgU2VlZFwiLFxuICAgICAgXCJ0eXBlXCI6IFwic2ltcGxlXCJcbiAgICB9LFxuICAgIHtcbiAgICAgIFwiY2xhc3NcIjogXCJwcm9jZXNzaW5nXCIsXG4gICAgICBcIm5hbWVcIjogXCJDYXB0dXJlXCIsXG4gICAgICBcInR5cGVcIjogXCJzaW1wbGVcIlxuICAgIH0sXG4gICAge1xuICAgICAgXCJjbGFzc1wiOiBcInBlc3RpY2lkZVwiLFxuICAgICAgXCJuYW1lXCI6IFwiQ2FyYmluZSA1MFdHXCIsXG4gICAgICBcInR5cGVcIjogXCJzaW1wbGVcIlxuICAgIH0sXG4gICAge1xuICAgICAgXCJjbGFzc1wiOiBcInBlc3RpY2lkZVwiLFxuICAgICAgXCJuYW1lXCI6IFwiQ2xhcml0eVwiLFxuICAgICAgXCJ0eXBlXCI6IFwic2ltcGxlXCJcbiAgICB9LFxuICAgIHtcbiAgICAgIFwiY2xhc3NcIjogXCJwcm9jZXNzaW5nXCIsXG4gICAgICBcIm5hbWVcIjogXCJDbGVhbiBTZWVkIE9yY2hkZ3JcIixcbiAgICAgIFwidHlwZVwiOiBcInNpbXBsZVwiXG4gICAgfSxcbiAgICB7XG4gICAgICBcImNsYXNzXCI6IFwibGFib3JcIixcbiAgICAgIFwibmFtZVwiOiBcIkNvbWJpbmVcIixcbiAgICAgIFwidHlwZVwiOiBcInNpbXBsZVwiXG4gICAgfSxcbiAgICB7XG4gICAgICBcImNsYXNzXCI6IFwibGFib3JcIixcbiAgICAgIFwibmFtZVwiOiBcIkNvbWJpbmUgV2hlYXRcIixcbiAgICAgIFwidHlwZVwiOiBcInNpbXBsZVwiXG4gICAgfSxcbiAgICB7XG4gICAgICBcImNsYXNzXCI6IFwicHJvY2Vzc2luZ1wiLFxuICAgICAgXCJuYW1lXCI6IFwiQ29tbWlzaW9uIEFzc2Vzc1wiLFxuICAgICAgXCJ0eXBlXCI6IFwic2ltcGxlXCJcbiAgICB9LFxuICAgIHtcbiAgICAgIFwiY2xhc3NcIjogXCJwcm9jZXNzaW5nXCIsXG4gICAgICBcIm5hbWVcIjogXCJDb21taXNzaW9uIEFzc2Vzc1wiLFxuICAgICAgXCJ0eXBlXCI6IFwic2ltcGxlXCJcbiAgICB9LFxuICAgIHtcbiAgICAgIFwiY2xhc3NcIjogXCJwcm9jZXNzaW5nXCIsXG4gICAgICBcIm5hbWVcIjogXCJDb25zdWx0YW50XCIsXG4gICAgICBcInR5cGVcIjogXCJzaW1wbGVcIlxuICAgIH0sXG4gICAge1xuICAgICAgXCJjbGFzc1wiOiBcImxhYm9yXCIsXG4gICAgICBcIm5hbWVcIjogXCJDb29sIGFuZCBQYWNrXCIsXG4gICAgICBcInR5cGVcIjogXCJzaW1wbGVcIlxuICAgIH0sXG4gICAge1xuICAgICAgXCJjbGFzc1wiOiBcInNlZWRcIixcbiAgICAgIFwibmFtZVwiOiBcIkNvcm4gU2VlZFwiLFxuICAgICAgXCJ0eXBlXCI6IFwic2ltcGxlXCJcbiAgICB9LFxuICAgIHtcbiAgICAgIFwiY2xhc3NcIjogXCJwcm9jZXNzaW5nXCIsXG4gICAgICBcIm5hbWVcIjogXCJDb3R0b24gQXNzZXNtZW50XCIsXG4gICAgICBcInR5cGVcIjogXCJzaW1wbGVcIlxuICAgIH0sXG4gICAge1xuICAgICAgXCJjbGFzc1wiOiBcInBlc3RpY2lkZVwiLFxuICAgICAgXCJuYW1lXCI6IFwiQ291bnRlciAxNUcgTC1OLUxcIixcbiAgICAgIFwidHlwZVwiOiBcInNpbXBsZVwiXG4gICAgfSxcbiAgICB7XG4gICAgICBcImNsYXNzXCI6IFwiaW5zdXJhbmNlXCIsXG4gICAgICBcIm5hbWVcIjogXCJDcm9wIEluc3VyYW5jZVwiLFxuICAgICAgXCJ0eXBlXCI6IFwic2ltcGxlXCJcbiAgICB9LFxuICAgIHtcbiAgICAgIFwiY2xhc3NcIjogXCJwcm9jZXNzaW5nXCIsXG4gICAgICBcIm5hbWVcIjogXCJDdXN0b20gQWVyaWFsIFNwcmF5XCIsXG4gICAgICBcInR5cGVcIjogXCJzaW1wbGVcIlxuICAgIH0sXG4gICAge1xuICAgICAgXCJjbGFzc1wiOiBcInByb2Nlc3NpbmdcIixcbiAgICAgIFwibmFtZVwiOiBcIkN1c3RvbSBBaXIgU3ByYXlcIixcbiAgICAgIFwidHlwZVwiOiBcInNpbXBsZVwiXG4gICAgfSxcbiAgICB7XG4gICAgICBcImNsYXNzXCI6IFwicHJvY2Vzc2luZ1wiLFxuICAgICAgXCJuYW1lXCI6IFwiQ3VzdG9tIEFpciBTcHJheSAtIDVHXCIsXG4gICAgICBcInR5cGVcIjogXCJzaW1wbGVcIlxuICAgIH0sXG4gICAge1xuICAgICAgXCJjbGFzc1wiOiBcInByb2Nlc3NpbmdcIixcbiAgICAgIFwibmFtZVwiOiBcIkN1c3RvbSBDb21iaW5pbmdcIixcbiAgICAgIFwidHlwZVwiOiBcInNpbXBsZVwiXG4gICAgfSxcbiAgICB7XG4gICAgICBcImNsYXNzXCI6IFwicHJvY2Vzc2luZ1wiLFxuICAgICAgXCJuYW1lXCI6IFwiQ3VzdG9tIEZlcnRpbGl6ZVwiLFxuICAgICAgXCJ0eXBlXCI6IFwic2ltcGxlXCJcbiAgICB9LFxuICAgIHtcbiAgICAgIFwiY2xhc3NcIjogXCJwcm9jZXNzaW5nXCIsXG4gICAgICBcIm5hbWVcIjogXCJDdXN0b20gRnVtaWdhdGUgLSBEZWVwXCIsXG4gICAgICBcInR5cGVcIjogXCJzaW1wbGVcIlxuICAgIH0sXG4gICAge1xuICAgICAgXCJjbGFzc1wiOiBcInByb2Nlc3NpbmdcIixcbiAgICAgIFwibmFtZVwiOiBcIkN1c3RvbSBTaWRlZHJlc3NcIixcbiAgICAgIFwidHlwZVwiOiBcInNpbXBsZVwiXG4gICAgfSxcbiAgICB7XG4gICAgICBcImNsYXNzXCI6IFwicHJvY2Vzc2luZ1wiLFxuICAgICAgXCJuYW1lXCI6IFwiQ3V0L1dpbmRyb3dcIixcbiAgICAgIFwidHlwZVwiOiBcInNpbXBsZVwiXG4gICAgfSxcbiAgICB7XG4gICAgICBcImNsYXNzXCI6IFwicGVzdGljaWRlXCIsXG4gICAgICBcIm5hbWVcIjogXCJEYWN0aGFsXCIsXG4gICAgICBcInR5cGVcIjogXCJzaW1wbGVcIlxuICAgIH0sXG4gICAge1xuICAgICAgXCJjbGFzc1wiOiBcInBlc3RpY2lkZVwiLFxuICAgICAgXCJuYW1lXCI6IFwiRGVmb2wgNVwiLFxuICAgICAgXCJ0eXBlXCI6IFwic2ltcGxlXCJcbiAgICB9LFxuICAgIHtcbiAgICAgIFwiY2xhc3NcIjogXCJwZXN0aWNpZGVcIixcbiAgICAgIFwibmFtZVwiOiBcIkRldnJpbm9sIDUwREZcIixcbiAgICAgIFwidHlwZVwiOiBcInNpbXBsZVwiXG4gICAgfSxcbiAgICB7XG4gICAgICBcImNsYXNzXCI6IFwicGVzdGljaWRlXCIsXG4gICAgICBcIm5hbWVcIjogXCJEaW1ldGhvYXRlXCIsXG4gICAgICBcInR5cGVcIjogXCJzaW1wbGVcIlxuICAgIH0sXG4gICAge1xuICAgICAgXCJjbGFzc1wiOiBcInBlc3RpY2lkZVwiLFxuICAgICAgXCJuYW1lXCI6IFwiRGlvbWV0aGF0ZVwiLFxuICAgICAgXCJ0eXBlXCI6IFwic2ltcGxlXCJcbiAgICB9LFxuICAgIHtcbiAgICAgIFwiY2xhc3NcIjogXCJwZXN0aWNpZGVcIixcbiAgICAgIFwibmFtZVwiOiBcIkRpc2NvdmVyXCIsXG4gICAgICBcInR5cGVcIjogXCJzaW1wbGVcIlxuICAgIH0sXG4gICAge1xuICAgICAgXCJjbGFzc1wiOiBcInBlc3RpY2lkZVwiLFxuICAgICAgXCJuYW1lXCI6IFwiRGlzeXN0b25cIixcbiAgICAgIFwidHlwZVwiOiBcInNpbXBsZVwiXG4gICAgfSxcbiAgICB7XG4gICAgICBcImNsYXNzXCI6IFwicGVzdGljaWRlXCIsXG4gICAgICBcIm5hbWVcIjogXCJEaS1TeXN0b25cIixcbiAgICAgIFwidHlwZVwiOiBcInNpbXBsZVwiXG4gICAgfSxcbiAgICB7XG4gICAgICBcImNsYXNzXCI6IFwicGVzdGljaWRlXCIsXG4gICAgICBcIm5hbWVcIjogXCJEaXRoYW5lIEY0NSBSYWluc2hpZWxkXCIsXG4gICAgICBcInR5cGVcIjogXCJzaW1wbGVcIlxuICAgIH0sXG4gICAge1xuICAgICAgXCJjbGFzc1wiOiBcInBlc3RpY2lkZVwiLFxuICAgICAgXCJuYW1lXCI6IFwiRGl1cm9uXCIsXG4gICAgICBcInR5cGVcIjogXCJzaW1wbGVcIlxuICAgIH0sXG4gICAge1xuICAgICAgXCJjbGFzc1wiOiBcImZlcnRpbGl6ZXJcIixcbiAgICAgIFwibmFtZVwiOiBcIkRyeSBOaXRyb2dlblwiLFxuICAgICAgXCJ0eXBlXCI6IFwic2ltcGxlXCJcbiAgICB9LFxuICAgIHtcbiAgICAgIFwiY2xhc3NcIjogXCJmZXJ0aWxpemVyXCIsXG4gICAgICBcIm5hbWVcIjogXCJEcnkgTml0cm9nZW4gLSBQcmVwbGFudFwiLFxuICAgICAgXCJ0eXBlXCI6IFwic2ltcGxlXCJcbiAgICB9LFxuICAgIHtcbiAgICAgIFwiY2xhc3NcIjogXCJmZXJ0aWxpemVyXCIsXG4gICAgICBcIm5hbWVcIjogXCJEcnkgUDJPNVwiLFxuICAgICAgXCJ0eXBlXCI6IFwic2ltcGxlXCJcbiAgICB9LFxuICAgIHtcbiAgICAgIFwiY2xhc3NcIjogXCJmZXJ0aWxpemVyXCIsXG4gICAgICBcIm5hbWVcIjogXCJEcnkgUGhvc3BoYXRlXCIsXG4gICAgICBcInR5cGVcIjogXCJzaW1wbGVcIlxuICAgIH0sXG4gICAge1xuICAgICAgXCJjbGFzc1wiOiBcImZlcnRpbGl6ZXJcIixcbiAgICAgIFwibmFtZVwiOiBcIkRyeSBQb3Rhc2hcIixcbiAgICAgIFwidHlwZVwiOiBcInNpbXBsZVwiXG4gICAgfSxcbiAgICB7XG4gICAgICBcImNsYXNzXCI6IFwiZmVydGlsaXplclwiLFxuICAgICAgXCJuYW1lXCI6IFwiRHJ5IFN1bGZ1clwiLFxuICAgICAgXCJ0eXBlXCI6IFwic2ltcGxlXCJcbiAgICB9LFxuICAgIHtcbiAgICAgIFwiY2xhc3NcIjogXCJwZXN0aWNpZGVcIixcbiAgICAgIFwibmFtZVwiOiBcIkVuZHVyYSAoMngpXCIsXG4gICAgICBcInR5cGVcIjogXCJzaW1wbGVcIlxuICAgIH0sXG4gICAge1xuICAgICAgXCJjbGFzc1wiOiBcInBlc3RpY2lkZVwiLFxuICAgICAgXCJuYW1lXCI6IFwiRXB0YW0gN0VDXCIsXG4gICAgICBcInR5cGVcIjogXCJzaW1wbGVcIlxuICAgIH0sXG4gICAge1xuICAgICAgXCJkZXNjcmlwdGlvblwiOiBcIkNvc3QgRXN0aW1hdGVcIixcbiAgICAgIFwiY2xhc3NcIjogXCJhbnlcIixcbiAgICAgIFwibmFtZVwiOiBcImVzdGltYXRlXCIsXG4gICAgICBcInR5cGVcIjogXCJzaW1wbGVcIlxuICAgIH0sXG4gICAge1xuICAgICAgXCJjbGFzc1wiOiBcInBlc3RpY2lkZVwiLFxuICAgICAgXCJuYW1lXCI6IFwiRXhjZWwgOTBcIixcbiAgICAgIFwidHlwZVwiOiBcInNpbXBsZVwiXG4gICAgfSxcbiAgICB7XG4gICAgICBcImNsYXNzXCI6IFwicGVzdGljaWRlXCIsXG4gICAgICBcIm5hbWVcIjogXCJGYXItR09cIixcbiAgICAgIFwidHlwZVwiOiBcInNpbXBsZVwiXG4gICAgfSxcbiAgICB7XG4gICAgICBcImNsYXNzXCI6IFwicHJvY2Vzc2luZ1wiLFxuICAgICAgXCJuYW1lXCI6IFwiRmVlcyBBc3Nlc21lbnRcIixcbiAgICAgIFwidHlwZVwiOiBcInNpbXBsZVwiXG4gICAgfSxcbiAgICB7XG4gICAgICBcImNsYXNzXCI6IFwicGVzdGljaWRlXCIsXG4gICAgICBcIm5hbWVcIjogXCJGaW5pc2ggNiBQcm9cIixcbiAgICAgIFwidHlwZVwiOiBcInNpbXBsZVwiXG4gICAgfSxcbiAgICB7XG4gICAgICBcImNsYXNzXCI6IFwibWF0ZXJpYWxcIixcbiAgICAgIFwibmFtZVwiOiBcIkZ1ZWxcIixcbiAgICAgIFwidHlwZVwiOiBcInNpbXBsZVwiXG4gICAgfSxcbiAgICB7XG4gICAgICBcImNsYXNzXCI6IFwibWF0ZXJpYWxcIixcbiAgICAgIFwibmFtZVwiOiBcIkZ1ZWwgLSBEaWVzZWxcIixcbiAgICAgIFwidHlwZVwiOiBcInNpbXBsZVwiXG4gICAgfSxcbiAgICB7XG4gICAgICBcImNsYXNzXCI6IFwibWF0ZXJpYWxcIixcbiAgICAgIFwibmFtZVwiOiBcIkZ1ZWwgLSBHYXNcIixcbiAgICAgIFwidHlwZVwiOiBcInNpbXBsZVwiXG4gICAgfSxcbiAgICB7XG4gICAgICBcImNsYXNzXCI6IFwicHJvY2Vzc2luZ1wiLFxuICAgICAgXCJuYW1lXCI6IFwiRnVtaWdhdGlvblwiLFxuICAgICAgXCJ0eXBlXCI6IFwic2ltcGxlXCJcbiAgICB9LFxuICAgIHtcbiAgICAgIFwiY2xhc3NcIjogXCJwZXN0aWNpZGVcIixcbiAgICAgIFwibmFtZVwiOiBcIkdlbiAyNVdHXCIsXG4gICAgICBcInR5cGVcIjogXCJzaW1wbGVcIlxuICAgIH0sXG4gICAge1xuICAgICAgXCJjbGFzc1wiOiBcInBlc3RpY2lkZVwiLFxuICAgICAgXCJuYW1lXCI6IFwiR2luc3RhclwiLFxuICAgICAgXCJ0eXBlXCI6IFwic2ltcGxlXCJcbiAgICB9LFxuICAgIHtcbiAgICAgIFwiY2xhc3NcIjogXCJwZXN0aWNpZGVcIixcbiAgICAgIFwibmFtZVwiOiBcIkdseXBob3NhdGUgR0FMMVwiLFxuICAgICAgXCJ0eXBlXCI6IFwic2ltcGxlXCJcbiAgICB9LFxuICAgIHtcbiAgICAgIFwiY2xhc3NcIjogXCJwZXN0aWNpZGVcIixcbiAgICAgIFwibmFtZVwiOiBcIkdvYWxcIixcbiAgICAgIFwidHlwZVwiOiBcInNpbXBsZVwiXG4gICAgfSxcbiAgICB7XG4gICAgICBcImNsYXNzXCI6IFwicGVzdGljaWRlXCIsXG4gICAgICBcIm5hbWVcIjogXCJHb2FsIFRlbmRlclwiLFxuICAgICAgXCJ0eXBlXCI6IFwic2ltcGxlXCJcbiAgICB9LFxuICAgIHtcbiAgICAgIFwiY2xhc3NcIjogXCJsYWJvclwiLFxuICAgICAgXCJuYW1lXCI6IFwiR29waGVyIENvbnRyb2xcIixcbiAgICAgIFwidHlwZVwiOiBcInNpbXBsZVwiXG4gICAgfSxcbiAgICB7XG4gICAgICBcImNsYXNzXCI6IFwicHJvY2Vzc2luZ1wiLFxuICAgICAgXCJuYW1lXCI6IFwiR3JvdW5kIEFwcGxpY2F0aW9uXCIsXG4gICAgICBcInR5cGVcIjogXCJzaW1wbGVcIlxuICAgIH0sXG4gICAge1xuICAgICAgXCJjbGFzc1wiOiBcInBlc3RpY2lkZVwiLFxuICAgICAgXCJuYW1lXCI6IFwiSGFybW9ueSBFeHRyYVwiLFxuICAgICAgXCJ0eXBlXCI6IFwic2ltcGxlXCJcbiAgICB9LFxuICAgIHtcbiAgICAgIFwiY2xhc3NcIjogXCJwcm9jZXNzaW5nXCIsXG4gICAgICBcIm5hbWVcIjogXCJIYXJ2ZXN0XCIsXG4gICAgICBcInR5cGVcIjogXCJzaW1wbGVcIlxuICAgIH0sXG4gICAge1xuICAgICAgXCJjbGFzc1wiOiBcInByb2Nlc3NpbmdcIixcbiAgICAgIFwibmFtZVwiOiBcIkhhcnZlc3QgQ29tYmluZSBHcmFpblwiLFxuICAgICAgXCJ0eXBlXCI6IFwic2ltcGxlXCJcbiAgICB9LFxuICAgIHtcbiAgICAgIFwiY2xhc3NcIjogXCJwcm9jZXNzaW5nXCIsXG4gICAgICBcIm5hbWVcIjogXCJIYXJ2ZXN0IGZvciBHcmFpblwiLFxuICAgICAgXCJ0eXBlXCI6IFwic2ltcGxlXCJcbiAgICB9LFxuICAgIHtcbiAgICAgIFwiY2xhc3NcIjogXCJwcm9jZXNzaW5nXCIsXG4gICAgICBcIm5hbWVcIjogXCJIYXJ2ZXN0OiBIYXVsIEdyYWluXCIsXG4gICAgICBcInR5cGVcIjogXCJzaW1wbGVcIlxuICAgIH0sXG4gICAge1xuICAgICAgXCJjbGFzc1wiOiBcInByb2Nlc3NpbmdcIixcbiAgICAgIFwibmFtZVwiOiBcIkhhdWwgYW5kIFN0YWNrXCIsXG4gICAgICBcInR5cGVcIjogXCJzaW1wbGVcIlxuICAgIH0sXG4gICAge1xuICAgICAgXCJjbGFzc1wiOiBcInByb2Nlc3NpbmdcIixcbiAgICAgIFwibmFtZVwiOiBcIkhhdWwgTG9jYWxcIixcbiAgICAgIFwidHlwZVwiOiBcInNpbXBsZVwiXG4gICAgfSxcbiAgICB7XG4gICAgICBcImNsYXNzXCI6IFwicGVzdGljaWRlXCIsXG4gICAgICBcIm5hbWVcIjogXCJIZWFkbGluZVwiLFxuICAgICAgXCJ0eXBlXCI6IFwic2ltcGxlXCJcbiAgICB9LFxuICAgIHtcbiAgICAgIFwiY2xhc3NcIjogXCJwcm9jZXNzaW5nXCIsXG4gICAgICBcIm5hbWVcIjogXCJJbmplY3Rpb24tU2lkZWRyZXNzXCIsXG4gICAgICBcInR5cGVcIjogXCJzaW1wbGVcIlxuICAgIH0sXG4gICAge1xuICAgICAgXCJjbGFzc1wiOiBcInByb2Nlc3NpbmdcIixcbiAgICAgIFwibmFtZVwiOiBcIkluamVjdGlvbi1TaWRlZHJlc3MgTkgzXCIsXG4gICAgICBcInR5cGVcIjogXCJzaW1wbGVcIlxuICAgIH0sXG4gICAge1xuICAgICAgXCJjbGFzc1wiOiBcInByb2Nlc3NpbmdcIixcbiAgICAgIFwibmFtZVwiOiBcIkluc2VjdGljaWRlXCIsXG4gICAgICBcInR5cGVcIjogXCJzaW1wbGVcIlxuICAgIH0sXG4gICAge1xuICAgICAgXCJjbGFzc1wiOiBcIndhdGVyXCIsXG4gICAgICBcIm5hbWVcIjogXCJJcnJpZ2F0aW9uXCIsXG4gICAgICBcInR5cGVcIjogXCJzaW1wbGVcIlxuICAgIH0sXG4gICAge1xuICAgICAgXCJjbGFzc1wiOiBcImZlcnRpbGl6ZXJcIixcbiAgICAgIFwibmFtZVwiOiBcIksyMFwiLFxuICAgICAgXCJ0eXBlXCI6IFwic2ltcGxlXCJcbiAgICB9LFxuICAgIHtcbiAgICAgIFwiY2xhc3NcIjogXCJmZXJ0aWxpemVyXCIsXG4gICAgICBcIm5hbWVcIjogXCJLMk9cIixcbiAgICAgIFwidHlwZVwiOiBcInNpbXBsZVwiXG4gICAgfSxcbiAgICB7XG4gICAgICBcImNsYXNzXCI6IFwicGVzdGljaWRlXCIsXG4gICAgICBcIm5hbWVcIjogXCJLYXJtZXhcIixcbiAgICAgIFwidHlwZVwiOiBcInNpbXBsZVwiXG4gICAgfSxcbiAgICB7XG4gICAgICBcImNsYXNzXCI6IFwicGVzdGljaWRlXCIsXG4gICAgICBcIm5hbWVcIjogXCJLYXJtZXggREZcIixcbiAgICAgIFwidHlwZVwiOiBcInNpbXBsZVwiXG4gICAgfSxcbiAgICB7XG4gICAgICBcImNsYXNzXCI6IFwicGVzdGljaWRlXCIsXG4gICAgICBcIm5hbWVcIjogXCJLZXJiXCIsXG4gICAgICBcInR5cGVcIjogXCJzaW1wbGVcIlxuICAgIH0sXG4gICAge1xuICAgICAgXCJjbGFzc1wiOiBcImxhYm9yXCIsXG4gICAgICBcIm5hbWVcIjogXCJMYWJvciAoSXJyaWdhdGlvbilcIixcbiAgICAgIFwidHlwZVwiOiBcInNpbXBsZVwiXG4gICAgfSxcbiAgICB7XG4gICAgICBcImNsYXNzXCI6IFwibGFib3JcIixcbiAgICAgIFwibmFtZVwiOiBcIkxhYm9yIChNYWNoaW5lKVwiLFxuICAgICAgXCJ0eXBlXCI6IFwic2ltcGxlXCJcbiAgICB9LFxuICAgIHtcbiAgICAgIFwiY2xhc3NcIjogXCJsYWJvclwiLFxuICAgICAgXCJuYW1lXCI6IFwiTGFib3IgKG5vbi1tYWNoaW5lKVwiLFxuICAgICAgXCJ0eXBlXCI6IFwic2ltcGxlXCJcbiAgICB9LFxuICAgIHtcbiAgICAgIFwiY2xhc3NcIjogXCJsYWJvclwiLFxuICAgICAgXCJuYW1lXCI6IFwiTGFib3IgKG90aGVyKVwiLFxuICAgICAgXCJ0eXBlXCI6IFwic2ltcGxlXCJcbiAgICB9LFxuICAgIHtcbiAgICAgIFwiZGVzY3JpcHRpb25cIjogXCJJcnJpZ2F0ZWQgTGFuZCBSZW50XCIsXG4gICAgICBcImNsYXNzXCI6IFwicmVudFwiLFxuICAgICAgXCJuYW1lXCI6IFwibGFuZC1yZW50LWlycmlnYXRlZFwiLFxuICAgICAgXCJ0eXBlXCI6IFwic2ltcGxlXCJcbiAgICB9LFxuICAgIHtcbiAgICAgIFwiZGVzY3JpcHRpb25cIjogXCJOb24gaXJyaWdhdGVkIExhbmQgUmVudFwiLFxuICAgICAgXCJjbGFzc1wiOiBcInJlbnRcIixcbiAgICAgIFwibmFtZVwiOiBcImxhbmQtcmVudC1ub25pcnJpZ2F0ZWRcIixcbiAgICAgIFwidHlwZVwiOiBcInNpbXBsZVwiXG4gICAgfSxcbiAgICB7XG4gICAgICBcImRlc2NyaXB0aW9uXCI6IFwiUGFzdHVyZSBpcnJpZ2F0ZWQgTGFuZCBSZW50XCIsXG4gICAgICBcImNsYXNzXCI6IFwicmVudFwiLFxuICAgICAgXCJuYW1lXCI6IFwibGFuZC1yZW50LXBhc3R1cmVcIixcbiAgICAgIFwidHlwZVwiOiBcInNpbXBsZVwiXG4gICAgfSxcbiAgICB7XG4gICAgICBcImNsYXNzXCI6IFwicGVzdGljaWRlXCIsXG4gICAgICBcIm5hbWVcIjogXCJMYW5uYXRlIDkwIFNQXCIsXG4gICAgICBcInR5cGVcIjogXCJzaW1wbGVcIlxuICAgIH0sXG4gICAge1xuICAgICAgXCJjbGFzc1wiOiBcInNlZWRcIixcbiAgICAgIFwibmFtZVwiOiBcIkxlbnRpbCBTZWVkXCIsXG4gICAgICBcInR5cGVcIjogXCJzaW1wbGVcIlxuICAgIH0sXG4gICAge1xuICAgICAgXCJjbGFzc1wiOiBcInBlc3RpY2lkZVwiLFxuICAgICAgXCJuYW1lXCI6IFwiTGV2ZXJhZ2VcIixcbiAgICAgIFwidHlwZVwiOiBcInNpbXBsZVwiXG4gICAgfSxcbiAgICB7XG4gICAgICBcImNsYXNzXCI6IFwicGVzdGljaWRlXCIsXG4gICAgICBcIm5hbWVcIjogXCJMZXZlcmFnZSAyLjdcIixcbiAgICAgIFwidHlwZVwiOiBcInNpbXBsZVwiXG4gICAgfSxcbiAgICB7XG4gICAgICBcImNsYXNzXCI6IFwicGVzdGljaWRlXCIsXG4gICAgICBcIm5hbWVcIjogXCJMSSA3MDBcIixcbiAgICAgIFwidHlwZVwiOiBcInNpbXBsZVwiXG4gICAgfSxcbiAgICB7XG4gICAgICBcImNsYXNzXCI6IFwibWF0ZXJpYWxcIixcbiAgICAgIFwibmFtZVwiOiBcIkxpbWVcIixcbiAgICAgIFwidHlwZVwiOiBcInNpbXBsZVwiXG4gICAgfSxcbiAgICB7XG4gICAgICBcImNsYXNzXCI6IFwiZmVydGlsaXplclwiLFxuICAgICAgXCJuYW1lXCI6IFwiTGlxdWlkIE5pdHJvZ2VuXCIsXG4gICAgICBcInR5cGVcIjogXCJzaW1wbGVcIlxuICAgIH0sXG4gICAge1xuICAgICAgXCJjbGFzc1wiOiBcImZlcnRpbGl6ZXJcIixcbiAgICAgIFwibmFtZVwiOiBcIkxpcXVpZCBQMk81XCIsXG4gICAgICBcInR5cGVcIjogXCJzaW1wbGVcIlxuICAgIH0sXG4gICAge1xuICAgICAgXCJjbGFzc1wiOiBcInBlc3RpY2lkZVwiLFxuICAgICAgXCJuYW1lXCI6IFwiTG9yc2JhbiAxNUdcIixcbiAgICAgIFwidHlwZVwiOiBcInNpbXBsZVwiXG4gICAgfSxcbiAgICB7XG4gICAgICBcImNsYXNzXCI6IFwicGVzdGljaWRlXCIsXG4gICAgICBcIm5hbWVcIjogXCJMb3JzYmFuIDRFXCIsXG4gICAgICBcInR5cGVcIjogXCJzaW1wbGVcIlxuICAgIH0sXG4gICAge1xuICAgICAgXCJjbGFzc1wiOiBcIm1hdGVyaWFsXCIsXG4gICAgICBcIm5hbWVcIjogXCJMdWJlXCIsXG4gICAgICBcInR5cGVcIjogXCJzaW1wbGVcIlxuICAgIH0sXG4gICAge1xuICAgICAgXCJjbGFzc1wiOiBcIm1hdGVyaWFsXCIsXG4gICAgICBcIm5hbWVcIjogXCJMdWJyaWNhbnRzXCIsXG4gICAgICBcInR5cGVcIjogXCJzaW1wbGVcIlxuICAgIH0sXG4gICAge1xuICAgICAgXCJjbGFzc1wiOiBcInBlc3RpY2lkZVwiLFxuICAgICAgXCJuYW1lXCI6IFwiTTkwXCIsXG4gICAgICBcInR5cGVcIjogXCJzaW1wbGVcIlxuICAgIH0sXG4gICAge1xuICAgICAgXCJjbGFzc1wiOiBcImxhYm9yXCIsXG4gICAgICBcIm5hbWVcIjogXCJNYWludGVuYW5jZVwiLFxuICAgICAgXCJ0eXBlXCI6IFwic2ltcGxlXCJcbiAgICB9LFxuICAgIHtcbiAgICAgIFwiY2xhc3NcIjogXCJsYWJvclwiLFxuICAgICAgXCJuYW1lXCI6IFwiTWFpbnRlbmFuY2UgYW5kIFJlcGFpclwiLFxuICAgICAgXCJ0eXBlXCI6IFwic2ltcGxlXCJcbiAgICB9LFxuICAgIHtcbiAgICAgIFwiY2xhc3NcIjogXCJwZXN0aWNpZGVcIixcbiAgICAgIFwibmFtZVwiOiBcIk1hbGF0aGlvblwiLFxuICAgICAgXCJ0eXBlXCI6IFwic2ltcGxlXCJcbiAgICB9LFxuICAgIHtcbiAgICAgIFwiY2xhc3NcIjogXCJwcm9jZXNzaW5nXCIsXG4gICAgICBcIm5hbWVcIjogXCJNYW5hZ2VtZW50XCIsXG4gICAgICBcInR5cGVcIjogXCJzaW1wbGVcIlxuICAgIH0sXG4gICAge1xuICAgICAgXCJjbGFzc1wiOiBcInBlc3RpY2lkZVwiLFxuICAgICAgXCJuYW1lXCI6IFwiTWF2ZXJpY2tcIixcbiAgICAgIFwidHlwZVwiOiBcInNpbXBsZVwiXG4gICAgfSxcbiAgICB7XG4gICAgICBcImNsYXNzXCI6IFwicGVzdGljaWRlXCIsXG4gICAgICBcIm5hbWVcIjogXCJNQ1BBIEFtaW5lXCIsXG4gICAgICBcInR5cGVcIjogXCJzaW1wbGVcIlxuICAgIH0sXG4gICAge1xuICAgICAgXCJjbGFzc1wiOiBcInBlc3RpY2lkZVwiLFxuICAgICAgXCJuYW1lXCI6IFwiTWVwZXggR2luIE91clwiLFxuICAgICAgXCJ0eXBlXCI6IFwic2ltcGxlXCJcbiAgICB9LFxuICAgIHtcbiAgICAgIFwiY2xhc3NcIjogXCJwZXN0aWNpZGVcIixcbiAgICAgIFwibmFtZVwiOiBcIk1ldGFtIFNvZGl1bVwiLFxuICAgICAgXCJ0eXBlXCI6IFwic2ltcGxlXCJcbiAgICB9LFxuICAgIHtcbiAgICAgIFwiY2xhc3NcIjogXCJmZXJ0aWxpemVyXCIsXG4gICAgICBcIm5hbWVcIjogXCJNaWNyb251dHJpZW50c1wiLFxuICAgICAgXCJ0eXBlXCI6IFwic2ltcGxlXCJcbiAgICB9LFxuICAgIHtcbiAgICAgIFwiY2xhc3NcIjogXCJwZXN0aWNpZGVcIixcbiAgICAgIFwibmFtZVwiOiBcIk1pY3JvLVRlY2hcIixcbiAgICAgIFwidHlwZVwiOiBcInNpbXBsZVwiXG4gICAgfSxcbiAgICB7XG4gICAgICBcImNsYXNzXCI6IFwiZmVydGlsaXplclwiLFxuICAgICAgXCJuYW1lXCI6IFwiTXVsY2hcIixcbiAgICAgIFwidHlwZVwiOiBcInNpbXBsZVwiXG4gICAgfSxcbiAgICB7XG4gICAgICBcImNsYXNzXCI6IFwicGVzdGljaWRlXCIsXG4gICAgICBcIm5hbWVcIjogXCJNdXN0YW5nIDEuNSBFV1wiLFxuICAgICAgXCJ0eXBlXCI6IFwic2ltcGxlXCJcbiAgICB9LFxuICAgIHtcbiAgICAgIFwiY2xhc3NcIjogXCJmZXJ0aWxpemVyXCIsXG4gICAgICBcIm5hbWVcIjogXCJOaXRyb2dlblwiLFxuICAgICAgXCJ0eXBlXCI6IFwic2ltcGxlXCJcbiAgICB9LFxuICAgIHtcbiAgICAgIFwiY2xhc3NcIjogXCJmZXJ0aWxpemVyXCIsXG4gICAgICBcIm5hbWVcIjogXCJOaXRyb2dlbiAoZHJ5KVwiLFxuICAgICAgXCJ0eXBlXCI6IFwic2ltcGxlXCJcbiAgICB9LFxuICAgIHtcbiAgICAgIFwiY2xhc3NcIjogXCJwZXN0aWNpZGVcIixcbiAgICAgIFwibmFtZVwiOiBcIk9iZXJvbiAyNUNcIixcbiAgICAgIFwidHlwZVwiOiBcInNpbXBsZVwiXG4gICAgfSxcbiAgICB7XG4gICAgICBcImRlc2NyaXB0aW9uXCI6IFwiWzQ1LTIwOTEgQWdyaWN1bHR1cmFsIEVxdWlwbWVudCBPcGVyYXRvcnNdKGh0dHA6Ly93d3cuYmxzLmdvdi9vZXMvY3VycmVudC9vZXM0NTIwOTEuaHRtKVwiLFxuICAgICAgXCJjbGFzc1wiOiBcImxhYm9yXCIsXG4gICAgICBcIm5hbWVcIjogXCJvZXM0NTIwOTFcIixcbiAgICAgIFwidHlwZVwiOiBcInNpbXBsZVwiXG4gICAgfSxcbiAgICB7XG4gICAgICBcImRlc2NyaXB0aW9uXCI6IFwiWzQ1LTIwOTIgRmFybXdvcmtlcnMgYW5kIExhYm9yZXJzLCBDcm9wLCBOdXJzZXJ5LCBhbmQgR3JlZW5ob3VzZV0oaHR0cDovL3d3dy5ibHMuZ292L29lcy9jdXJyZW50L29lczQ1MjA5Mi5odG0pXCIsXG4gICAgICBcImNsYXNzXCI6IFwibGFib3JcIixcbiAgICAgIFwibmFtZVwiOiBcIm9lczQ1MjA5MlwiLFxuICAgICAgXCJ0eXBlXCI6IFwic2ltcGxlXCJcbiAgICB9LFxuICAgIHtcbiAgICAgIFwiZGVzY3JpcHRpb25cIjogXCJbNTMtMzAzMiBIZWF2eSBhbmQgVHJhY3Rvci1UcmFpbGVyIFRydWNrIERyaXZlcnNdKGh0dHA6Ly93d3cuYmxzLmdvdi9vZXMvY3VycmVudC9vZXM1MzMwMzIuaHRtKVwiLFxuICAgICAgXCJjbGFzc1wiOiBcImxhYm9yXCIsXG4gICAgICBcIm5hbWVcIjogXCJvZXM1MzMwMzJcIixcbiAgICAgIFwidHlwZVwiOiBcInNpbXBsZVwiXG4gICAgfSxcbiAgICB7XG4gICAgICBcImNsYXNzXCI6IFwicGVzdGljaWRlXCIsXG4gICAgICBcIm5hbWVcIjogXCJPcnRoZW5lXCIsXG4gICAgICBcInR5cGVcIjogXCJzaW1wbGVcIlxuICAgIH0sXG4gICAge1xuICAgICAgXCJjbGFzc1wiOiBcInBlc3RpY2lkZVwiLFxuICAgICAgXCJuYW1lXCI6IFwiT3NwcmV5XCIsXG4gICAgICBcInR5cGVcIjogXCJzaW1wbGVcIlxuICAgIH0sXG4gICAge1xuICAgICAgXCJjbGFzc1wiOiBcInBlc3RpY2lkZVwiLFxuICAgICAgXCJuYW1lXCI6IFwiT3V0bG9vayA2RUNcIixcbiAgICAgIFwidHlwZVwiOiBcInNpbXBsZVwiXG4gICAgfSxcbiAgICB7XG4gICAgICBcImNsYXNzXCI6IFwibWF0ZXJpYWxcIixcbiAgICAgIFwibmFtZVwiOiBcIlBhY2tpbmdcIixcbiAgICAgIFwidHlwZVwiOiBcInNpbXBsZVwiXG4gICAgfSxcbiAgICB7XG4gICAgICBcImNsYXNzXCI6IFwicHJvY2Vzc2luZ1wiLFxuICAgICAgXCJuYW1lXCI6IFwiUGVzdCBDb250cm9sIENvbnN1bHRhbnRcIixcbiAgICAgIFwidHlwZVwiOiBcInNpbXBsZVwiXG4gICAgfSxcbiAgICB7XG4gICAgICBcImNsYXNzXCI6IFwiZmVydGlsaXplclwiLFxuICAgICAgXCJuYW1lXCI6IFwiUGhvc3Bob3JvdXNcIixcbiAgICAgIFwidHlwZVwiOiBcInNpbXBsZVwiXG4gICAgfSxcbiAgICB7XG4gICAgICBcImNsYXNzXCI6IFwiZmVydGlsaXplclwiLFxuICAgICAgXCJuYW1lXCI6IFwiUGhvc3Bob3JvdXMgKGRyeSlcIixcbiAgICAgIFwidHlwZVwiOiBcInNpbXBsZVwiXG4gICAgfSxcbiAgICB7XG4gICAgICBcImNsYXNzXCI6IFwibGFib3JcIixcbiAgICAgIFwibmFtZVwiOiBcIlBpY2sgQmVycmllc1wiLFxuICAgICAgXCJ0eXBlXCI6IFwic2ltcGxlXCJcbiAgICB9LFxuICAgIHtcbiAgICAgIFwiY2xhc3NcIjogXCJsYWJvclwiLFxuICAgICAgXCJuYW1lXCI6IFwiUGxhbnRcIixcbiAgICAgIFwidHlwZVwiOiBcInNpbXBsZVwiXG4gICAgfSxcbiAgICB7XG4gICAgICBcImNsYXNzXCI6IFwibGFib3JcIixcbiAgICAgIFwibmFtZVwiOiBcIlBsYW50aW5nXCIsXG4gICAgICBcInR5cGVcIjogXCJzaW1wbGVcIlxuICAgIH0sXG4gICAge1xuICAgICAgXCJjbGFzc1wiOiBcInByb2Nlc3NpbmdcIixcbiAgICAgIFwibmFtZVwiOiBcIlBvbmNobyBCZXRhIFNlZWQgVHJlYXRtZW50XCIsXG4gICAgICBcInR5cGVcIjogXCJzaW1wbGVcIlxuICAgIH0sXG4gICAge1xuICAgICAgXCJjbGFzc1wiOiBcImxhYm9yXCIsXG4gICAgICBcIm5hbWVcIjogXCJQb3N0aGFydmVzdCBhbmQgcGFja2FnaW5nXCIsXG4gICAgICBcInR5cGVcIjogXCJzaW1wbGVcIlxuICAgIH0sXG4gICAge1xuICAgICAgXCJjbGFzc1wiOiBcInNlZWRcIixcbiAgICAgIFwibmFtZVwiOiBcIlBvdGF0byBTZWVkXCIsXG4gICAgICBcInR5cGVcIjogXCJzaW1wbGVcIlxuICAgIH0sXG4gICAge1xuICAgICAgXCJjbGFzc1wiOiBcInBlc3RpY2lkZVwiLFxuICAgICAgXCJuYW1lXCI6IFwiUHJpc3RpbmVcIixcbiAgICAgIFwidHlwZVwiOiBcInNpbXBsZVwiXG4gICAgfSxcbiAgICB7XG4gICAgICBcImNsYXNzXCI6IFwicGVzdGljaWRlXCIsXG4gICAgICBcIm5hbWVcIjogXCJQcm93bFwiLFxuICAgICAgXCJ0eXBlXCI6IFwic2ltcGxlXCJcbiAgICB9LFxuICAgIHtcbiAgICAgIFwiY2xhc3NcIjogXCJwZXN0aWNpZGVcIixcbiAgICAgIFwibmFtZVwiOiBcIlByb3dsIDMuM0VDXCIsXG4gICAgICBcInR5cGVcIjogXCJzaW1wbGVcIlxuICAgIH0sXG4gICAge1xuICAgICAgXCJjbGFzc1wiOiBcInBlc3RpY2lkZVwiLFxuICAgICAgXCJuYW1lXCI6IFwiUHJvd2wgSDIwXCIsXG4gICAgICBcInR5cGVcIjogXCJzaW1wbGVcIlxuICAgIH0sXG4gICAge1xuICAgICAgXCJjbGFzc1wiOiBcInBlc3RpY2lkZVwiLFxuICAgICAgXCJuYW1lXCI6IFwiUHVtYSAxRUNcIixcbiAgICAgIFwidHlwZVwiOiBcInNpbXBsZVwiXG4gICAgfSxcbiAgICB7XG4gICAgICBcImNsYXNzXCI6IFwibWF0ZXJpYWxcIixcbiAgICAgIFwibmFtZVwiOiBcIlB1cml0eSBhbmQgR2VybVwiLFxuICAgICAgXCJ0eXBlXCI6IFwic2ltcGxlXCJcbiAgICB9LFxuICAgIHtcbiAgICAgIFwiY2xhc3NcIjogXCJwZXN0aWNpZGVcIixcbiAgICAgIFwibmFtZVwiOiBcIlB1cnN1aXRcIixcbiAgICAgIFwidHlwZVwiOiBcInNpbXBsZVwiXG4gICAgfSxcbiAgICB7XG4gICAgICBcImNsYXNzXCI6IFwicGVzdGljaWRlXCIsXG4gICAgICBcIm5hbWVcIjogXCJRdWFkcmlzXCIsXG4gICAgICBcInR5cGVcIjogXCJzaW1wbGVcIlxuICAgIH0sXG4gICAge1xuICAgICAgXCJjbGFzc1wiOiBcInBlc3RpY2lkZVwiLFxuICAgICAgXCJuYW1lXCI6IFwiUXVpbHRcIixcbiAgICAgIFwidHlwZVwiOiBcInNpbXBsZVwiXG4gICAgfSxcbiAgICB7XG4gICAgICBcImNsYXNzXCI6IFwibWF0ZXJpYWxcIixcbiAgICAgIFwibmFtZVwiOiBcIlJha2VcIixcbiAgICAgIFwidHlwZVwiOiBcInNpbXBsZVwiXG4gICAgfSxcbiAgICB7XG4gICAgICBcImNsYXNzXCI6IFwicGVzdGljaWRlXCIsXG4gICAgICBcIm5hbWVcIjogXCJSYWxseSA0MCBXU1BcIixcbiAgICAgIFwidHlwZVwiOiBcInNpbXBsZVwiXG4gICAgfSxcbiAgICB7XG4gICAgICBcImNsYXNzXCI6IFwicGVzdGljaWRlXCIsXG4gICAgICBcIm5hbWVcIjogXCJSZWdsb25lXCIsXG4gICAgICBcInR5cGVcIjogXCJzaW1wbGVcIlxuICAgIH0sXG4gICAge1xuICAgICAgXCJjbGFzc1wiOiBcInByb2Nlc3NpbmdcIixcbiAgICAgIFwibmFtZVwiOiBcIlJlbnRhbCBGZXJ0aWxpemVyIEFwcGxpY2F0b3JcIixcbiAgICAgIFwidHlwZVwiOiBcInNpbXBsZVwiXG4gICAgfSxcbiAgICB7XG4gICAgICBcImNsYXNzXCI6IFwicHJvY2Vzc2luZ1wiLFxuICAgICAgXCJuYW1lXCI6IFwiUmVudGFsIFJpcHBlciBTaG9vdGVyXCIsXG4gICAgICBcInR5cGVcIjogXCJzaW1wbGVcIlxuICAgIH0sXG4gICAge1xuICAgICAgXCJjbGFzc1wiOiBcInByb2Nlc3NpbmdcIixcbiAgICAgIFwibmFtZVwiOiBcIlJlbnRhbCBTcHJheWVyXCIsXG4gICAgICBcInR5cGVcIjogXCJzaW1wbGVcIlxuICAgIH0sXG4gICAge1xuICAgICAgXCJjbGFzc1wiOiBcInByb2Nlc3NpbmdcIixcbiAgICAgIFwibmFtZVwiOiBcIlJlcGFpclwiLFxuICAgICAgXCJ0eXBlXCI6IFwic2ltcGxlXCJcbiAgICB9LFxuICAgIHtcbiAgICAgIFwiY2xhc3NcIjogXCJwZXN0aWNpZGVcIixcbiAgICAgIFwibmFtZVwiOiBcIlJpZG9taWwgR29sZCBFQ1wiLFxuICAgICAgXCJ0eXBlXCI6IFwic2ltcGxlXCJcbiAgICB9LFxuICAgIHtcbiAgICAgIFwiY2xhc3NcIjogXCJwcm9jZXNzaW5nXCIsXG4gICAgICBcIm5hbWVcIjogXCJSaXBlciBTaG9vdGVyXCIsXG4gICAgICBcInR5cGVcIjogXCJzaW1wbGVcIlxuICAgIH0sXG4gICAge1xuICAgICAgXCJjbGFzc1wiOiBcInByb2Nlc3NpbmdcIixcbiAgICAgIFwibmFtZVwiOiBcIlJvYWRzaWRlIEJhbGVzXCIsXG4gICAgICBcInR5cGVcIjogXCJzaW1wbGVcIlxuICAgIH0sXG4gICAge1xuICAgICAgXCJjbGFzc1wiOiBcInByb2Nlc3NpbmdcIixcbiAgICAgIFwibmFtZVwiOiBcIlJvYWRzaWRlIEhheVwiLFxuICAgICAgXCJ0eXBlXCI6IFwic2ltcGxlXCJcbiAgICB9LFxuICAgIHtcbiAgICAgIFwiY2xhc3NcIjogXCJsYWJvclwiLFxuICAgICAgXCJuYW1lXCI6IFwiUm9kZW50IENvbnRyb2xcIixcbiAgICAgIFwidHlwZVwiOiBcInNpbXBsZVwiXG4gICAgfSxcbiAgICB7XG4gICAgICBcImNsYXNzXCI6IFwicGVzdGljaWRlXCIsXG4gICAgICBcIm5hbWVcIjogXCJSb3VuZHVwXCIsXG4gICAgICBcInR5cGVcIjogXCJzaW1wbGVcIlxuICAgIH0sXG4gICAge1xuICAgICAgXCJjbGFzc1wiOiBcInBlc3RpY2lkZVwiLFxuICAgICAgXCJuYW1lXCI6IFwiUm91bmR1cCBPcmlnaW5hbCBNYXhcIixcbiAgICAgIFwidHlwZVwiOiBcInNpbXBsZVwiXG4gICAgfSxcbiAgICB7XG4gICAgICBcImNsYXNzXCI6IFwicGVzdGljaWRlXCIsXG4gICAgICBcIm5hbWVcIjogXCJSb3VuZHVwIFVsdHJhIE1heFwiLFxuICAgICAgXCJ0eXBlXCI6IFwic2ltcGxlXCJcbiAgICB9LFxuICAgIHtcbiAgICAgIFwiY2xhc3NcIjogXCJtYXRlcmlhbFwiLFxuICAgICAgXCJuYW1lXCI6IFwiU2F3ZHVzdFwiLFxuICAgICAgXCJ0eXBlXCI6IFwic2ltcGxlXCJcbiAgICB9LFxuICAgIHtcbiAgICAgIFwiY2xhc3NcIjogXCJwcm9jZXNzaW5nXCIsXG4gICAgICBcIm5hbWVcIjogXCJTZWVkIENsZWFuIGFuZCBCYWdcIixcbiAgICAgIFwidHlwZVwiOiBcInNpbXBsZVwiXG4gICAgfSxcbiAgICB7XG4gICAgICBcImNsYXNzXCI6IFwicHJvY2Vzc2luZ1wiLFxuICAgICAgXCJuYW1lXCI6IFwiU2VlZCBDbGVhbmQgYW5kIEJhZ1wiLFxuICAgICAgXCJ0eXBlXCI6IFwic2ltcGxlXCJcbiAgICB9LFxuICAgIHtcbiAgICAgIFwiY2xhc3NcIjogXCJwcm9jZXNzaW5nXCIsXG4gICAgICBcIm5hbWVcIjogXCJTZWVkIFRlc3RcIixcbiAgICAgIFwidHlwZVwiOiBcInNpbXBsZVwiXG4gICAgfSxcbiAgICB7XG4gICAgICBcImNsYXNzXCI6IFwicGVzdGljaWRlXCIsXG4gICAgICBcIm5hbWVcIjogXCJTZWxlY3QgTWF4XCIsXG4gICAgICBcInR5cGVcIjogXCJzaW1wbGVcIlxuICAgIH0sXG4gICAge1xuICAgICAgXCJjbGFzc1wiOiBcInBlc3RpY2lkZVwiLFxuICAgICAgXCJuYW1lXCI6IFwiU2VuY29yXCIsXG4gICAgICBcInR5cGVcIjogXCJzaW1wbGVcIlxuICAgIH0sXG4gICAge1xuICAgICAgXCJjbGFzc1wiOiBcInBlc3RpY2lkZVwiLFxuICAgICAgXCJuYW1lXCI6IFwiU2VuY29yIDRMXCIsXG4gICAgICBcInR5cGVcIjogXCJzaW1wbGVcIlxuICAgIH0sXG4gICAge1xuICAgICAgXCJjbGFzc1wiOiBcInBlc3RpY2lkZVwiLFxuICAgICAgXCJuYW1lXCI6IFwiU2VuY29yIDc1REZcIixcbiAgICAgIFwidHlwZVwiOiBcInNpbXBsZVwiXG4gICAgfSxcbiAgICB7XG4gICAgICBcImNsYXNzXCI6IFwicGVzdGljaWRlXCIsXG4gICAgICBcIm5hbWVcIjogXCJTZXZpbiBYTFIgUGx1c1wiLFxuICAgICAgXCJ0eXBlXCI6IFwic2ltcGxlXCJcbiAgICB9LFxuICAgIHtcbiAgICAgIFwiY2xhc3NcIjogXCJwZXN0aWNpZGVcIixcbiAgICAgIFwibmFtZVwiOiBcIlNoYXJrIEVXXCIsXG4gICAgICBcInR5cGVcIjogXCJzaW1wbGVcIlxuICAgIH0sXG4gICAge1xuICAgICAgXCJjbGFzc1wiOiBcInBlc3RpY2lkZVwiLFxuICAgICAgXCJuYW1lXCI6IFwiU2x1ZyBCYWl0XCIsXG4gICAgICBcInR5cGVcIjogXCJzaW1wbGVcIlxuICAgIH0sXG4gICAge1xuICAgICAgXCJjbGFzc1wiOiBcInBlc3RpY2lkZVwiLFxuICAgICAgXCJuYW1lXCI6IFwiU29uYWxhbiBIRlBcIixcbiAgICAgIFwidHlwZVwiOiBcInNpbXBsZVwiXG4gICAgfSxcbiAgICB7XG4gICAgICBcImNsYXNzXCI6IFwic2VlZFwiLFxuICAgICAgXCJuYW1lXCI6IFwiU29yZ2h1bSBTZWVkXCIsXG4gICAgICBcInR5cGVcIjogXCJzaW1wbGVcIlxuICAgIH0sXG4gICAge1xuICAgICAgXCJjbGFzc1wiOiBcInBlc3RpY2lkZVwiLFxuICAgICAgXCJuYW1lXCI6IFwiU3BvdCBTcHJheSBSb3VuZHVwXCIsXG4gICAgICBcInR5cGVcIjogXCJzaW1wbGVcIlxuICAgIH0sXG4gICAge1xuICAgICAgXCJjbGFzc1wiOiBcImxhYm9yXCIsXG4gICAgICBcIm5hbWVcIjogXCJTcHJheWVyXCIsXG4gICAgICBcInR5cGVcIjogXCJzaW1wbGVcIlxuICAgIH0sXG4gICAge1xuICAgICAgXCJjbGFzc1wiOiBcInBlc3RpY2lkZVwiLFxuICAgICAgXCJuYW1lXCI6IFwiU3RhcGxlXCIsXG4gICAgICBcInR5cGVcIjogXCJzaW1wbGVcIlxuICAgIH0sXG4gICAge1xuICAgICAgXCJjbGFzc1wiOiBcInBlc3RpY2lkZVwiLFxuICAgICAgXCJuYW1lXCI6IFwiU3RhcmFuZStTYWx2b1wiLFxuICAgICAgXCJ0eXBlXCI6IFwic2ltcGxlXCJcbiAgICB9LFxuICAgIHtcbiAgICAgIFwiY2xhc3NcIjogXCJwZXN0aWNpZGVcIixcbiAgICAgIFwibmFtZVwiOiBcIlN0YXJhbmUrU3dvcmRcIixcbiAgICAgIFwidHlwZVwiOiBcInNpbXBsZVwiXG4gICAgfSxcbiAgICB7XG4gICAgICBcImNsYXNzXCI6IFwicHJvY2Vzc2luZ1wiLFxuICAgICAgXCJuYW1lXCI6IFwiU3RvcmFnZSBPcGVyYXRpbmcgQ29zdHNcIixcbiAgICAgIFwidHlwZVwiOiBcInNpbXBsZVwiXG4gICAgfSxcbiAgICB7XG4gICAgICBcImNsYXNzXCI6IFwicHJvY2Vzc2luZ1wiLFxuICAgICAgXCJuYW1lXCI6IFwiU3RvcmFnZSBSZXBhaXJzXCIsXG4gICAgICBcInR5cGVcIjogXCJzaW1wbGVcIlxuICAgIH0sXG4gICAge1xuICAgICAgXCJjbGFzc1wiOiBcInBlc3RpY2lkZVwiLFxuICAgICAgXCJuYW1lXCI6IFwiU3RyYXRlZ29cIixcbiAgICAgIFwidHlwZVwiOiBcInNpbXBsZVwiXG4gICAgfSxcbiAgICB7XG4gICAgICBcImNsYXNzXCI6IFwibGFib3JcIixcbiAgICAgIFwibmFtZVwiOiBcIlN0dWJsZSBTaHJlZGRlclwiLFxuICAgICAgXCJ0eXBlXCI6IFwic2ltcGxlXCJcbiAgICB9LFxuICAgIHtcbiAgICAgIFwiY2xhc3NcIjogXCJwZXN0aWNpZGVcIixcbiAgICAgIFwibmFtZVwiOiBcIlN1Y2Nlc3NcIixcbiAgICAgIFwidHlwZVwiOiBcInNpbXBsZVwiXG4gICAgfSxcbiAgICB7XG4gICAgICBcImNsYXNzXCI6IFwicHJvY2Vzc2luZ1wiLFxuICAgICAgXCJuYW1lXCI6IFwiU3VnYXJiZWV0XCIsXG4gICAgICBcInR5cGVcIjogXCJzaW1wbGVcIlxuICAgIH0sXG4gICAge1xuICAgICAgXCJjbGFzc1wiOiBcImZlcnRpbGl6ZXJcIixcbiAgICAgIFwibmFtZVwiOiBcIlN1bGZ1clwiLFxuICAgICAgXCJ0eXBlXCI6IFwic2ltcGxlXCJcbiAgICB9LFxuICAgIHtcbiAgICAgIFwiY2xhc3NcIjogXCJmZXJ0aWxpemVyXCIsXG4gICAgICBcIm5hbWVcIjogXCJTdWxmdXIgKGRyeSlcIixcbiAgICAgIFwidHlwZVwiOiBcInNpbXBsZVwiXG4gICAgfSxcbiAgICB7XG4gICAgICBcImNsYXNzXCI6IFwiZmVydGlsaXplclwiLFxuICAgICAgXCJuYW1lXCI6IFwiU3VsZnVyaWMgQWNpZFwiLFxuICAgICAgXCJ0eXBlXCI6IFwic2ltcGxlXCJcbiAgICB9LFxuICAgIHtcbiAgICAgIFwiY2xhc3NcIjogXCJmZXJ0aWxpemVyXCIsXG4gICAgICBcIm5hbWVcIjogXCJTdXJmYWN0YW50LUluZHVjZVwiLFxuICAgICAgXCJ0eXBlXCI6IFwic2ltcGxlXCJcbiAgICB9LFxuICAgIHtcbiAgICAgIFwiY2xhc3NcIjogXCJwZXN0aWNpZGVcIixcbiAgICAgIFwibmFtZVwiOiBcIlN1cmZsYW4gQVNcIixcbiAgICAgIFwidHlwZVwiOiBcInNpbXBsZVwiXG4gICAgfSxcbiAgICB7XG4gICAgICBcImNsYXNzXCI6IFwic2VlZFwiLFxuICAgICAgXCJuYW1lXCI6IFwiU3VzYW4gU2VlZFwiLFxuICAgICAgXCJ0eXBlXCI6IFwic2ltcGxlXCJcbiAgICB9LFxuICAgIHtcbiAgICAgIFwiY2xhc3NcIjogXCJwcm9jZXNzaW5nXCIsXG4gICAgICBcIm5hbWVcIjogXCJTd2F0aFwiLFxuICAgICAgXCJ0eXBlXCI6IFwic2ltcGxlXCJcbiAgICB9LFxuICAgIHtcbiAgICAgIFwiY2xhc3NcIjogXCJwcm9jZXNzaW5nXCIsXG4gICAgICBcIm5hbWVcIjogXCJTd2F0aGluZ1wiLFxuICAgICAgXCJ0eXBlXCI6IFwic2ltcGxlXCJcbiAgICB9LFxuICAgIHtcbiAgICAgIFwiY2xhc3NcIjogXCJsYWJvclwiLFxuICAgICAgXCJuYW1lXCI6IFwiU3dhdGggUmFrZVwiLFxuICAgICAgXCJ0eXBlXCI6IFwic2ltcGxlXCJcbiAgICB9LFxuICAgIHtcbiAgICAgIFwiY2xhc3NcIjogXCJwZXN0aWNpZGVcIixcbiAgICAgIFwibmFtZVwiOiBcIlN5bmFwc2UgV0dcIixcbiAgICAgIFwidHlwZVwiOiBcInNpbXBsZVwiXG4gICAgfSxcbiAgICB7XG4gICAgICBcImNsYXNzXCI6IFwicHJvY2Vzc2luZ1wiLFxuICAgICAgXCJuYW1lXCI6IFwiVGFycGluZ1wiLFxuICAgICAgXCJ0eXBlXCI6IFwic2ltcGxlXCJcbiAgICB9LFxuICAgIHtcbiAgICAgIFwiY2xhc3NcIjogXCJwZXN0aWNpZGVcIixcbiAgICAgIFwibmFtZVwiOiBcIlRlbG9uZSBJSVwiLFxuICAgICAgXCJ0eXBlXCI6IFwic2ltcGxlXCJcbiAgICB9LFxuICAgIHtcbiAgICAgIFwiY2xhc3NcIjogXCJwcm9jZXNzaW5nXCIsXG4gICAgICBcIm5hbWVcIjogXCJUaXNzdWUgQW5hbHlzaXNcIixcbiAgICAgIFwidHlwZVwiOiBcInNpbXBsZVwiXG4gICAgfSxcbiAgICB7XG4gICAgICBcImNsYXNzXCI6IFwicHJvY2Vzc2luZ1wiLFxuICAgICAgXCJuYW1lXCI6IFwiVHJhbnNwb3J0XCIsXG4gICAgICBcInR5cGVcIjogXCJzaW1wbGVcIlxuICAgIH0sXG4gICAge1xuICAgICAgXCJjbGFzc1wiOiBcInByb2Nlc3NpbmdcIixcbiAgICAgIFwibmFtZVwiOiBcIlRyYW5zcG9ydCB0byBQRFhcIixcbiAgICAgIFwidHlwZVwiOiBcInNpbXBsZVwiXG4gICAgfSxcbiAgICB7XG4gICAgICBcImNsYXNzXCI6IFwicGVzdGljaWRlXCIsXG4gICAgICBcIm5hbWVcIjogXCJUcmVmbGFuIDRIRlBcIixcbiAgICAgIFwidHlwZVwiOiBcInNpbXBsZVwiXG4gICAgfSxcbiAgICB7XG4gICAgICBcImNsYXNzXCI6IFwicGVzdGljaWRlXCIsXG4gICAgICBcIm5hbWVcIjogXCJUcmVmbGFuIEZQXCIsXG4gICAgICBcInR5cGVcIjogXCJzaW1wbGVcIlxuICAgIH0sXG4gICAge1xuICAgICAgXCJjbGFzc1wiOiBcInBlc3RpY2lkZVwiLFxuICAgICAgXCJuYW1lXCI6IFwiVHJlZmxhbiBUUiAxMFwiLFxuICAgICAgXCJ0eXBlXCI6IFwic2ltcGxlXCJcbiAgICB9LFxuICAgIHtcbiAgICAgIFwiY2xhc3NcIjogXCJwZXN0aWNpZGVcIixcbiAgICAgIFwibmFtZVwiOiBcIlRyaWZsdXJleCBIRlBcIixcbiAgICAgIFwidHlwZVwiOiBcInNpbXBsZVwiXG4gICAgfSxcbiAgICB7XG4gICAgICBcImNsYXNzXCI6IFwiZmVydGlsaXplclwiLFxuICAgICAgXCJuYW1lXCI6IFwiVU4zMlwiLFxuICAgICAgXCJ0eXBlXCI6IFwic2ltcGxlXCJcbiAgICB9LFxuICAgIHtcbiAgICAgIFwiY2xhc3NcIjogXCJwZXN0aWNpZGVcIixcbiAgICAgIFwibmFtZVwiOiBcIlZlbHBhciBMXCIsXG4gICAgICBcInR5cGVcIjogXCJzaW1wbGVcIlxuICAgIH0sXG4gICAge1xuICAgICAgXCJjbGFzc1wiOiBcIndhdGVyXCIsXG4gICAgICBcIm5hbWVcIjogXCJXYXRlclwiLFxuICAgICAgXCJ0eXBlXCI6IFwic2ltcGxlXCJcbiAgICB9LFxuICAgIHtcbiAgICAgIFwiY2xhc3NcIjogXCJwcm9jZXNzaW5nXCIsXG4gICAgICBcIm5hbWVcIjogXCJXYXRlciBBc3Nlc21lbnRcIixcbiAgICAgIFwidHlwZVwiOiBcInNpbXBsZVwiXG4gICAgfSxcbiAgICB7XG4gICAgICBcImNsYXNzXCI6IFwibGFib3JcIixcbiAgICAgIFwibmFtZVwiOiBcIldlZWQgQ29udHJvbFwiLFxuICAgICAgXCJ0eXBlXCI6IFwic2ltcGxlXCJcbiAgICB9LFxuICAgIHtcbiAgICAgIFwiY2xhc3NcIjogXCJwcm9jZXNzaW5nXCIsXG4gICAgICBcIm5hbWVcIjogXCJXaGVhdCBBc3Nlc21lbnRcIixcbiAgICAgIFwidHlwZVwiOiBcInNpbXBsZVwiXG4gICAgfSxcbiAgICB7XG4gICAgICBcImNsYXNzXCI6IFwic2VlZFwiLFxuICAgICAgXCJuYW1lXCI6IFwiV2hlYXQgU2VlZFwiLFxuICAgICAgXCJ0eXBlXCI6IFwic2ltcGxlXCJcbiAgICB9LFxuICAgIHtcbiAgICAgIFwiY2xhc3NcIjogXCJtYXRlcmlhbFwiLFxuICAgICAgXCJuYW1lXCI6IFwiWXVrb25cIixcbiAgICAgIFwidHlwZVwiOiBcInNpbXBsZVwiXG4gICAgfSxcbiAgICB7XG4gICAgICBcImNsYXNzXCI6IFwibWF0ZXJpYWxcIixcbiAgICAgIFwibmFtZVwiOiBcIlplcGh5clwiLFxuICAgICAgXCJ0eXBlXCI6IFwic2ltcGxlXCJcbiAgICB9LFxuICAgIHtcbiAgICAgIFwiY2xhc3NcIjogXCJmZXJ0aWxpemVyXCIsXG4gICAgICBcIm5hbWVcIjogXCJaaW5jXCIsXG4gICAgICBcInR5cGVcIjogXCJzaW1wbGVcIlxuICAgIH0sXG4gICAge1xuICAgICAgXCJjbGFzc1wiOiBcImxhYm9yXCIsXG4gICAgICBcIm5hbWVcIjogXCJMYWJvci0tMy1XaGVlbCBhZyBzcHJheWVyXCIsXG4gICAgICBcInVuaXRzXCI6IFwiaFwiLFxuICAgICAgXCJ0eXBlXCI6IFwic2ltcGxlXCJcbiAgICB9LFxuICAgIHtcbiAgICAgIFwibmFtZVwiOiBcIkxhYm9yLS1DaGFsbGVuZ2VyIHRyYWN0b3JcIixcbiAgICAgIFwicHJpY2VcIjogNSxcbiAgICAgIFwiY2xhc3NcIjogXCJsYWJvclwiLFxuICAgICAgXCJ1bml0c1wiOiBcInVzJC9oXCIsXG4gICAgICBcInR5cGVcIjogXCJzaW1wbGVcIlxuICAgIH0sXG4gICAge1xuICAgICAgXCJuYW1lXCI6IFwiTGFib3ItLUNvb2xlci92YW5cIixcbiAgICAgIFwicHJpY2VcIjogNSxcbiAgICAgIFwiY2xhc3NcIjogXCJsYWJvclwiLFxuICAgICAgXCJ1bml0c1wiOiBcIiQvaFwiLFxuICAgICAgXCJ0eXBlXCI6IFwic2ltcGxlXCJcbiAgICB9LFxuICAgIHtcbiAgICAgIFwibmFtZVwiOiBcIkxhYm9yLS1GUiA2MDgwIEZIXCIsXG4gICAgICBcInByaWNlXCI6IDYsXG4gICAgICBcImNsYXNzXCI6IFwibGFib3JcIixcbiAgICAgIFwidW5pdHNcIjogXCIkL2hcIixcbiAgICAgIFwidHlwZVwiOiBcInNpbXBsZVwiXG4gICAgfSxcbiAgICB7XG4gICAgICBcIm5hbWVcIjogXCJMYWJvcmVyXCIsXG4gICAgICBcInByaWNlXCI6IDIwLFxuICAgICAgXCJjbGFzc1wiOiBcImxhYm9yXCIsXG4gICAgICBcInVuaXRzXCI6IFwidXMkL2hcIixcbiAgICAgIFwidHlwZVwiOiBcInNpbXBsZVwiXG4gICAgfSxcbiAgICB7XG4gICAgICBcImNsYXNzXCI6IFwibGFib3JcIixcbiAgICAgIFwibmFtZVwiOiBcIkxhYm9yLS1MYXJnZSB0cmFjdG9yXCIsXG4gICAgICBcInVuaXRzXCI6IFwidXMkL2hcIixcbiAgICAgIFwicHJpY2VcIjogMzUsXG4gICAgICBcInR5cGVcIjogXCJzaW1wbGVcIlxuICAgIH0sXG4gICAge1xuICAgICAgXCJjbGFzc1wiOiBcImxhYm9yXCIsXG4gICAgICBcIm5hbWVcIjogXCJMYWJvci0tTWlkLXNpemUgdHJhY3RvclwiLFxuICAgICAgXCJ1bml0c1wiOiBcInVzJC9oXCIsXG4gICAgICBcInByaWNlXCI6IDIyLFxuICAgICAgXCJ0eXBlXCI6IFwic2ltcGxlXCJcbiAgICB9LFxuICAgIHtcbiAgICAgIFwiY2xhc3NcIjogXCJsYWJvclwiLFxuICAgICAgXCJuYW1lXCI6IFwiTGFib3ItLVNlbWktdHJhY3RvciB0cmFpbGVyXCIsXG4gICAgICBcInVuaXRzXCI6IFwidXMkL2hcIixcbiAgICAgIFwicHJpY2VcIjogMjgsXG4gICAgICBcInR5cGVcIjogXCJzaW1wbGVcIlxuICAgIH0sXG4gICAge1xuICAgICAgXCJjbGFzc1wiOiBcImxhYm9yXCIsXG4gICAgICBcIm5hbWVcIjogXCJMYWJvci0tU21hbGwgdHJhY3RvclwiLFxuICAgICAgXCJ1bml0c1wiOiBcInVzJC9oXCIsXG4gICAgICBcInByaWNlXCI6IDIyLFxuICAgICAgXCJ0eXBlXCI6IFwic2ltcGxlXCJcbiAgICB9LFxuICAgIHtcbiAgICAgIFwiY2xhc3NcIjogXCJsYWJvclwiLFxuICAgICAgXCJuYW1lXCI6IFwiTGFib3ItLVN1cGVydmlzb3JcIixcbiAgICAgIFwidW5pdHNcIjogXCJ1cyQvaFwiLFxuICAgICAgXCJwcmljZVwiOiAyNixcbiAgICAgIFwidHlwZVwiOiBcInNpbXBsZVwiXG4gICAgfSxcbiAgICB7XG4gICAgICBcImNsYXNzXCI6IFwibGFib3JcIixcbiAgICAgIFwibmFtZVwiOiBcIkxhYm9yLS1TdXBwb3J0IFRydWNrXCIsXG4gICAgICBcInVuaXRzXCI6IFwidXMkL2hcIixcbiAgICAgIFwicHJpY2VcIjogMzAsXG4gICAgICBcInR5cGVcIjogXCJzaW1wbGVcIlxuICAgIH0sXG4gICAge1xuICAgICAgXCJjbGFzc1wiOiBcImxhYm9yXCIsXG4gICAgICBcIm5hbWVcIjogXCJMYWJvci0tVGFuZGVtIGF4bGUgdHJ1Y2tcIixcbiAgICAgIFwidW5pdHNcIjogXCJ1cyQvaFwiLFxuICAgICAgXCJwcmljZVwiOiAyNixcbiAgICAgIFwidHlwZVwiOiBcInNpbXBsZVwiXG4gICAgfSxcbiAgICB7XG4gICAgICBcImNsYXNzXCI6IFwibGFib3JcIixcbiAgICAgIFwibmFtZVwiOiBcIkxhYm9yLS1UcmFjdG9yIGFuZCBTcHJheWVyXCIsXG4gICAgICBcInVuaXRzXCI6IFwidXMkL2hcIixcbiAgICAgIFwicHJpY2VcIjogMzAsXG4gICAgICBcInR5cGVcIjogXCJzaW1wbGVcIlxuICAgIH0sXG4gICAge1xuICAgICAgXCJkZXNjcmlwdGlvblwiOiBcIk9mZiBSb2FkIERpZXNlbFwiLFxuICAgICAgXCJjbGFzc1wiOiBcImZ1ZWxcIixcbiAgICAgIFwibmFtZVwiOiBcIkVxdWlwbWVudCBGdWVsXCIsXG4gICAgICBcInVuaXRzXCI6IFwidXMkL1tnYWxfdXNdXCIsXG4gICAgICBcInByaWNlXCI6IDIuODEsXG4gICAgICBcInR5cGVcIjogXCJzaW1wbGVcIlxuICAgIH0sXG4gICAge1xuICAgICAgXCJjbGFzc1wiOiBcInBlc3RpY2lkZVwiLFxuICAgICAgXCJuYW1lXCI6IFwiQ29yYWdlblwiLFxuICAgICAgXCJ1bml0c1wiOiBcInVzJC9bcXRfdXNdXCIsXG4gICAgICBcInByaWNlXCI6IDIxMCxcbiAgICAgIFwidHlwZVwiOiBcInNpbXBsZVwiXG4gICAgfSxcbiAgICB7XG4gICAgICBcImNsYXNzXCI6IFwicGVzdGljaWRlXCIsXG4gICAgICBcIm5hbWVcIjogXCJEaW1pbGluXCIsXG4gICAgICBcInVuaXRzXCI6IFwiW3F0X3VzXVwiLFxuICAgICAgXCJ0eXBlXCI6IFwic2ltcGxlXCJcbiAgICB9LFxuICAgIHtcbiAgICAgIFwiY2xhc3NcIjogXCJwZXN0aWNpZGVcIixcbiAgICAgIFwibmFtZVwiOiBcIkZ1c2lsYWRlXCIsXG4gICAgICBcInVuaXRzXCI6IFwidXMkL1txdF91c11cIixcbiAgICAgIFwicHJpY2VcIjogMzAsXG4gICAgICBcInR5cGVcIjogXCJzaW1wbGVcIlxuICAgIH0sXG4gICAge1xuICAgICAgXCJjbGFzc1wiOiBcInBlc3RpY2lkZVwiLFxuICAgICAgXCJuYW1lXCI6IFwiR2x5cGhvc2F0ZVwiLFxuICAgICAgXCJ1bml0c1wiOiBcInVzJC9bcXRfdXNdXCIsXG4gICAgICBcInByaWNlXCI6IDQsXG4gICAgICBcInR5cGVcIjogXCJzaW1wbGVcIlxuICAgIH0sXG4gICAge1xuICAgICAgXCJjbGFzc1wiOiBcInBlc3RpY2lkZVwiLFxuICAgICAgXCJuYW1lXCI6IFwiR29hbCAyWExcIixcbiAgICAgIFwidW5pdHNcIjogXCJ1cyQvW3F0X3VzXVwiLFxuICAgICAgXCJwcmljZVwiOiAzMCxcbiAgICAgIFwidHlwZVwiOiBcInNpbXBsZVwiXG4gICAgfSxcbiAgICB7XG4gICAgICBcImNsYXNzXCI6IFwicGVzdGljaWRlXCIsXG4gICAgICBcIm5hbWVcIjogXCJJbWlkYWNsb3ByaWQ1XCIsXG4gICAgICBcInVuaXRzXCI6IFwiW3F0X3VzXVwiLFxuICAgICAgXCJ0eXBlXCI6IFwic2ltcGxlXCJcbiAgICB9LFxuICAgIHtcbiAgICAgIFwiY2xhc3NcIjogXCJwZXN0aWNpZGVcIixcbiAgICAgIFwibmFtZVwiOiBcIk91c3RcIixcbiAgICAgIFwidW5pdHNcIjogXCJ1cyQvW2xiX2F2XVwiLFxuICAgICAgXCJwcmljZVwiOiA2NCxcbiAgICAgIFwidHlwZVwiOiBcInNpbXBsZVwiXG4gICAgfSxcbiAgICB7XG4gICAgICBcImRlc2NyaXB0aW9uXCI6IFwicm9kZW50aWNpZGVcIixcbiAgICAgIFwiY2xhc3NcIjogXCJbcXRfdXNdXCIsXG4gICAgICBcIm5hbWVcIjogXCJSb3pvbFwiLFxuICAgICAgXCJ1bml0c1wiOiBcInVzJC9bbGJfYXZdXCIsXG4gICAgICBcInByaWNlXCI6IDEuODUsXG4gICAgICBcInR5cGVcIjogXCJzaW1wbGVcIlxuICAgIH0sXG4gICAge1xuICAgICAgXCJjbGFzc1wiOiBcInBlc3RpY2lkZVwiLFxuICAgICAgXCJuYW1lXCI6IFwiU3VyZWd1YXJkXCIsXG4gICAgICBcInVuaXRzXCI6IFwidXMkL1tsYl9hdl1cIixcbiAgICAgIFwicHJpY2VcIjogMTMwLFxuICAgICAgXCJ0eXBlXCI6IFwic2ltcGxlXCJcbiAgICB9LFxuICAgIHtcbiAgICAgIFwiY2xhc3NcIjogXCJwZXN0aWNpZGVcIixcbiAgICAgIFwibmFtZVwiOiBcIlRyYW5zbGluZVwiLFxuICAgICAgXCJ1bml0c1wiOiBcInVzJC9bZ2FsX3VzXVwiLFxuICAgICAgXCJwcmljZVwiOiAyMTUsXG4gICAgICBcInR5cGVcIjogXCJzaW1wbGVcIlxuICAgIH0sXG4gICAge1xuICAgICAgXCJjbGFzc1wiOiBcInBlc3RpY2lkZVwiLFxuICAgICAgXCJuYW1lXCI6IFwiVHJpZmx1cmFsaW5cIixcbiAgICAgIFwidW5pdHNcIjogXCJ1cyQvW3F0X3VzXVwiLFxuICAgICAgXCJwcmljZVwiOiA3LjUsXG4gICAgICBcInR5cGVcIjogXCJzaW1wbGVcIlxuICAgIH0sXG4gICAge1xuICAgICAgXCJkZXNjcmlwdGlvblwiOiBcIlBvcGxhciBjdXR0aW5nIGZvciBwbGFudGluZ1wiLFxuICAgICAgXCJjbGFzc1wiOiBcInNlZWRcIixcbiAgICAgIFwibmFtZVwiOiBcIlBvcGxhciBDdXR0aW5nXCIsXG4gICAgICBcInVuaXRzXCI6IFwidXMkLzFcIixcbiAgICAgIFwicHJpY2VcIjogMC4wOCxcbiAgICAgIFwidHlwZVwiOiBcInNpbXBsZVwiXG4gICAgfSxcbiAgICB7XG4gICAgICBcIm5hbWVcIjogXCIzLVdoZWVsIGFnIHNwcmF5ZXJcIixcbiAgICAgIFwicHJpY2VcIjogMzAsXG4gICAgICBcInVuaXRzXCI6IFwidXMkL2hcIixcbiAgICAgIFwidHlwZVwiOiBcInNpbXBsZVwiXG4gICAgfSxcbiAgICB7XG4gICAgICBcIm5hbWVcIjogXCJJbWlkYWNsb3ByaWRcIixcbiAgICAgIFwicHJpY2VcIjogNTYsXG4gICAgICBcInVuaXRzXCI6IFwidXMkL1txdF91c11cIixcbiAgICAgIFwidHlwZVwiOiBcInNpbXBsZVwiXG4gICAgfSxcbiAgICB7XG4gICAgICBcIm5hbWVcIjogXCJJcnJpZ2F0aW9uIENvc3RcIixcbiAgICAgIFwicHJpY2VcIjogNixcbiAgICAgIFwidW5pdHNcIjogXCJ1cyQvW2Fjcl91c10uW2luX3VzXVwiLFxuICAgICAgXCJ0eXBlXCI6IFwic2ltcGxlXCJcbiAgICB9LFxuICAgIHtcbiAgICAgIFwiY2xhc3NcIjogXCJlcXVpcG1lbnRcIixcbiAgICAgIFwibmFtZVwiOiBcIjMtV2hlZWwgQWcgU3ByYXllclwiLFxuICAgICAgXCJ1bml0c1wiOiBcInVzJC9oXCIsXG4gICAgICBcInR5cGVcIjogXCJjb21wbGV4XCIsXG4gICAgICBcIm1hdGVyaWFsc1wiOiB7XG4gICAgICAgIFwiRXF1aXBtZW50IEZ1ZWxcIjoge1xuICAgICAgICAgIFwiYW1vdW50XCI6IDMuOTYsXG4gICAgICAgICAgXCJvcmlnaW5hbEFtb3VudFwiOiAzLjk2LFxuICAgICAgICAgIFwidW5pdHNcIjogXCJbZ2FsX3VzXS9oXCIsXG4gICAgICAgICAgXCJlcnJvclwiOiBudWxsLFxuICAgICAgICAgIFwicHJpY2VcIjogOC41ODYxMTExMTExMTExMWUtN1xuICAgICAgICB9LFxuICAgICAgICBcIkxhYm9yLS0zLVdoZWVsIEFnIFNwcmF5ZXJcIjoge1xuICAgICAgICAgIFwiYW1vdW50XCI6IDEsXG4gICAgICAgICAgXCJvcmlnaW5hbEFtb3VudFwiOiAxLFxuICAgICAgICAgIFwidW5pdHNcIjogXCJoL2hcIixcbiAgICAgICAgICBcImVycm9yXCI6IHRydWVcbiAgICAgICAgfVxuICAgICAgfSxcbiAgICAgIFwicHJpY2VcIjogMFxuICAgIH0sXG4gICAge1xuICAgICAgXCJjbGFzc1wiOiBcImVxdWlwbWVudFwiLFxuICAgICAgXCJuYW1lXCI6IFwiQ2hhbGxlbmdlciB0cmFjdG9yXCIsXG4gICAgICBcInVuaXRzXCI6IFwiaFwiLFxuICAgICAgXCJ0eXBlXCI6IFwiY29tcGxleFwiLFxuICAgICAgXCJtYXRlcmlhbHNcIjoge1xuICAgICAgICBcIkVxdWlwbWVudCBGdWVsXCI6IHtcbiAgICAgICAgICBcImFtb3VudFwiOiAxOSxcbiAgICAgICAgICBcIm9yaWdpbmFsQW1vdW50XCI6IDE5LFxuICAgICAgICAgIFwidW5pdHNcIjogXCJbZ2FsX3VzXS9oXCIsXG4gICAgICAgICAgXCJlcnJvclwiOiBudWxsLFxuICAgICAgICAgIFwicHJpY2VcIjogNTMuMzlcbiAgICAgICAgfSxcbiAgICAgICAgXCJMYWJvci0tQ2hhbGxlbmdlciB0cmFjdG9yXCI6IHtcbiAgICAgICAgICBcImFtb3VudFwiOiAxLFxuICAgICAgICAgIFwib3JpZ2luYWxBbW91bnRcIjogMSxcbiAgICAgICAgICBcInVuaXRzXCI6IFwiaC9oXCIsXG4gICAgICAgICAgXCJlcnJvclwiOiBudWxsLFxuICAgICAgICAgIFwicHJpY2VcIjogNVxuICAgICAgICB9XG4gICAgICB9LFxuICAgICAgXCJwcmljZVwiOiA1OC4zOVxuICAgIH0sXG4gICAge1xuICAgICAgXCJjbGFzc1wiOiBcImVxdWlwbWVudFwiLFxuICAgICAgXCJuYW1lXCI6IFwiQ29vbGVyL3ZhblwiLFxuICAgICAgXCJ1bml0c1wiOiBcImhcIixcbiAgICAgIFwidHlwZVwiOiBcImNvbXBsZXhcIixcbiAgICAgIFwibWF0ZXJpYWxzXCI6IHtcbiAgICAgICAgXCJFcXVpcG1lbnQgRnVlbFwiOiB7XG4gICAgICAgICAgXCJhbW91bnRcIjogMC45NixcbiAgICAgICAgICBcIm9yaWdpbmFsQW1vdW50XCI6IDAuOTYsXG4gICAgICAgICAgXCJ1bml0c1wiOiBcIltnYWxfdXNdL2hcIixcbiAgICAgICAgICBcImVycm9yXCI6IG51bGwsXG4gICAgICAgICAgXCJwcmljZVwiOiAyLjY5NzZcbiAgICAgICAgfSxcbiAgICAgICAgXCJMYWJvci0tQ29vbGVyL3ZhblwiOiB7XG4gICAgICAgICAgXCJhbW91bnRcIjogMixcbiAgICAgICAgICBcIm9yaWdpbmFsQW1vdW50XCI6IDIsXG4gICAgICAgICAgXCJ1bml0c1wiOiBcIjEvaFwiLFxuICAgICAgICAgIFwiZXJyb3JcIjogbnVsbCxcbiAgICAgICAgICBcInByaWNlXCI6IDAuMDAyNzc3Nzc3Nzc3Nzc3Nzc4XG4gICAgICAgIH1cbiAgICAgIH0sXG4gICAgICBcInByaWNlXCI6IDIuNzAwMzc3Nzc3Nzc3Nzc3OFxuICAgIH0sXG4gICAge1xuICAgICAgXCJjbGFzc1wiOiBcImVxdWlwbWVudFwiLFxuICAgICAgXCJuYW1lXCI6IFwiRWxpbWluYXRvclwiLFxuICAgICAgXCJ1bml0c1wiOiBcInVzJC9oXCIsXG4gICAgICBcInR5cGVcIjogXCJjb21wbGV4XCIsXG4gICAgICBcIm1hdGVyaWFsc1wiOiB7XG4gICAgICAgIFwiRXF1aXBtZW50IEZ1ZWxcIjoge1xuICAgICAgICAgIFwiYW1vdW50XCI6IDE5LjM2LFxuICAgICAgICAgIFwib3JpZ2luYWxBbW91bnRcIjogMTkuMzYsXG4gICAgICAgICAgXCJ1bml0c1wiOiBcIltnYWxfdXNdL2hcIixcbiAgICAgICAgICBcImVycm9yXCI6IG51bGwsXG4gICAgICAgICAgXCJwcmljZVwiOiAwLjAwMDAwNDE5NzY1NDMyMDk4NzY1NVxuICAgICAgICB9LFxuICAgICAgICBcIkxhYm9yLS1FbGltaW5hdG9yXCI6IHtcbiAgICAgICAgICBcImFtb3VudFwiOiAxLFxuICAgICAgICAgIFwib3JpZ2luYWxBbW91bnRcIjogMSxcbiAgICAgICAgICBcInVuaXRzXCI6IFwiaC9oXCIsXG4gICAgICAgICAgXCJlcnJvclwiOiB0cnVlXG4gICAgICAgIH1cbiAgICAgIH0sXG4gICAgICBcInByaWNlXCI6IDBcbiAgICB9LFxuICAgIHtcbiAgICAgIFwiY2xhc3NcIjogXCJlcXVpcG1lbnRcIixcbiAgICAgIFwibmFtZVwiOiBcIkZSIDYwODAgRkhcIixcbiAgICAgIFwidW5pdHNcIjogXCJoXCIsXG4gICAgICBcInR5cGVcIjogXCJjb21wbGV4XCIsXG4gICAgICBcIm1hdGVyaWFsc1wiOiB7XG4gICAgICAgIFwiRXF1aXBtZW50IEZ1ZWxcIjoge1xuICAgICAgICAgIFwiYW1vdW50XCI6IDEzLjIsXG4gICAgICAgICAgXCJvcmlnaW5hbEFtb3VudFwiOiAxMy4yLFxuICAgICAgICAgIFwidW5pdHNcIjogXCJbZ2FsX3VzXS9oXCIsXG4gICAgICAgICAgXCJlcnJvclwiOiBudWxsLFxuICAgICAgICAgIFwicHJpY2VcIjogMzcuMDkyXG4gICAgICAgIH0sXG4gICAgICAgIFwiTGFib3ItLUZSIDYwODAgRkhcIjoge1xuICAgICAgICAgIFwiYW1vdW50XCI6IDEsXG4gICAgICAgICAgXCJvcmlnaW5hbEFtb3VudFwiOiAxLFxuICAgICAgICAgIFwidW5pdHNcIjogXCJoL2hcIixcbiAgICAgICAgICBcImVycm9yXCI6IG51bGwsXG4gICAgICAgICAgXCJwcmljZVwiOiA2XG4gICAgICAgIH1cbiAgICAgIH0sXG4gICAgICBcInByaWNlXCI6IDQzLjA5MlxuICAgIH0sXG4gICAge1xuICAgICAgXCJjbGFzc1wiOiBcImVxdWlwbWVudFwiLFxuICAgICAgXCJuYW1lXCI6IFwiTGFyZ2UgdHJhY3RvclwiLFxuICAgICAgXCJ1bml0c1wiOiBcImhcIixcbiAgICAgIFwidHlwZVwiOiBcImNvbXBsZXhcIixcbiAgICAgIFwibWF0ZXJpYWxzXCI6IHtcbiAgICAgICAgXCJFcXVpcG1lbnQgRnVlbFwiOiB7XG4gICAgICAgICAgXCJhbW91bnRcIjogMTMuMixcbiAgICAgICAgICBcIm9yaWdpbmFsQW1vdW50XCI6IDEzLjIsXG4gICAgICAgICAgXCJ1bml0c1wiOiBcIltnYWxfdXNdL2hcIixcbiAgICAgICAgICBcImVycm9yXCI6IG51bGwsXG4gICAgICAgICAgXCJwcmljZVwiOiAzNy4wOTJcbiAgICAgICAgfSxcbiAgICAgICAgXCJMYWJvci0tTGFyZ2UgdHJhY3RvclwiOiB7XG4gICAgICAgICAgXCJhbW91bnRcIjogMSxcbiAgICAgICAgICBcIm9yaWdpbmFsQW1vdW50XCI6IDEsXG4gICAgICAgICAgXCJ1bml0c1wiOiBcImgvaFwiLFxuICAgICAgICAgIFwiZXJyb3JcIjogbnVsbCxcbiAgICAgICAgICBcInByaWNlXCI6IDM1XG4gICAgICAgIH1cbiAgICAgIH0sXG4gICAgICBcInByaWNlXCI6IDcyLjA5MlxuICAgIH0sXG4gICAge1xuICAgICAgXCJjbGFzc1wiOiBcImVxdWlwbWVudFwiLFxuICAgICAgXCJuYW1lXCI6IFwiTWlkLXNpemUgdHJhY3RvclwiLFxuICAgICAgXCJ1bml0c1wiOiBcImhcIixcbiAgICAgIFwidHlwZVwiOiBcImNvbXBsZXhcIixcbiAgICAgIFwibWF0ZXJpYWxzXCI6IHtcbiAgICAgICAgXCJFcXVpcG1lbnQgRnVlbFwiOiB7XG4gICAgICAgICAgXCJhbW91bnRcIjogMy45NixcbiAgICAgICAgICBcIm9yaWdpbmFsQW1vdW50XCI6IDMuOTYsXG4gICAgICAgICAgXCJ1bml0c1wiOiBcIltnYWxfdXNdL2hcIixcbiAgICAgICAgICBcImVycm9yXCI6IG51bGwsXG4gICAgICAgICAgXCJwcmljZVwiOiAxMS4xMjc2XG4gICAgICAgIH0sXG4gICAgICAgIFwiTGFib3ItLU1pZC1zaXplIHRyYWN0b3JcIjoge1xuICAgICAgICAgIFwiYW1vdW50XCI6IDEsXG4gICAgICAgICAgXCJvcmlnaW5hbEFtb3VudFwiOiAxLFxuICAgICAgICAgIFwidW5pdHNcIjogXCJoL2hcIixcbiAgICAgICAgICBcImVycm9yXCI6IG51bGwsXG4gICAgICAgICAgXCJwcmljZVwiOiAyMlxuICAgICAgICB9XG4gICAgICB9LFxuICAgICAgXCJwcmljZVwiOiAzMy4xMjc2XG4gICAgfSxcbiAgICB7XG4gICAgICBcImNsYXNzXCI6IFwiZXF1aXBtZW50XCIsXG4gICAgICBcIm5hbWVcIjogXCJTZW1pLXRyYWN0b3IgdHJhaWxlclwiLFxuICAgICAgXCJ1bml0c1wiOiBcImhcIixcbiAgICAgIFwidHlwZVwiOiBcImNvbXBsZXhcIixcbiAgICAgIFwibWF0ZXJpYWxzXCI6IHtcbiAgICAgICAgXCJFcXVpcG1lbnQgRnVlbFwiOiB7XG4gICAgICAgICAgXCJhbW91bnRcIjogNi41LFxuICAgICAgICAgIFwib3JpZ2luYWxBbW91bnRcIjogNi41LFxuICAgICAgICAgIFwidW5pdHNcIjogXCJbZ2FsX3VzXS9oXCIsXG4gICAgICAgICAgXCJlcnJvclwiOiBudWxsLFxuICAgICAgICAgIFwicHJpY2VcIjogMTguMjY1XG4gICAgICAgIH0sXG4gICAgICAgIFwiTGFib3ItLVNlbWktdHJhY3RvciB0cmFpbGVyXCI6IHtcbiAgICAgICAgICBcImFtb3VudFwiOiAxLFxuICAgICAgICAgIFwib3JpZ2luYWxBbW91bnRcIjogMSxcbiAgICAgICAgICBcInVuaXRzXCI6IFwiaC9oXCIsXG4gICAgICAgICAgXCJlcnJvclwiOiBudWxsLFxuICAgICAgICAgIFwicHJpY2VcIjogMjhcbiAgICAgICAgfVxuICAgICAgfSxcbiAgICAgIFwicHJpY2VcIjogNDYuMjY1XG4gICAgfSxcbiAgICB7XG4gICAgICBcImNsYXNzXCI6IFwiZXF1aXBtZW50XCIsXG4gICAgICBcIm5hbWVcIjogXCJTbWFsbCB0cmFjdG9yXCIsXG4gICAgICBcInVuaXRzXCI6IFwidXMkL2hcIixcbiAgICAgIFwidHlwZVwiOiBcImNvbXBsZXhcIixcbiAgICAgIFwibWF0ZXJpYWxzXCI6IHtcbiAgICAgICAgXCJFcXVpcG1lbnQgRnVlbFwiOiB7XG4gICAgICAgICAgXCJhbW91bnRcIjogMS45OCxcbiAgICAgICAgICBcIm9yaWdpbmFsQW1vdW50XCI6IDEuOTgsXG4gICAgICAgICAgXCJ1bml0c1wiOiBcIltnYWxfdXNdL2hcIixcbiAgICAgICAgICBcImVycm9yXCI6IG51bGwsXG4gICAgICAgICAgXCJwcmljZVwiOiA0LjI5MzA1NTU1NTU1NTU1NWUtN1xuICAgICAgICB9LFxuICAgICAgICBcIkxhYm9yLS1TbWFsbCB0cmFjdG9yXCI6IHtcbiAgICAgICAgICBcImFtb3VudFwiOiAxLFxuICAgICAgICAgIFwib3JpZ2luYWxBbW91bnRcIjogMSxcbiAgICAgICAgICBcInVuaXRzXCI6IFwiaC9oXCIsXG4gICAgICAgICAgXCJlcnJvclwiOiBudWxsLFxuICAgICAgICAgIFwicHJpY2VcIjogMC4wMDAwMDE2OTc1MzA4NjQxOTc1MzA4XG4gICAgICAgIH1cbiAgICAgIH0sXG4gICAgICBcInByaWNlXCI6IDAuMDAwMDAyMTI2ODM2NDE5NzUzMDg2XG4gICAgfSxcbiAgICB7XG4gICAgICBcImNsYXNzXCI6IFwiZXF1aXBtZW50XCIsXG4gICAgICBcIm5hbWVcIjogXCJTdXBwb3J0IFRydWNrXCIsXG4gICAgICBcInVuaXRzXCI6IFwiaFwiLFxuICAgICAgXCJ0eXBlXCI6IFwiY29tcGxleFwiLFxuICAgICAgXCJtYXRlcmlhbHNcIjoge1xuICAgICAgICBcIkVxdWlwbWVudCBGdWVsXCI6IHtcbiAgICAgICAgICBcImFtb3VudFwiOiAxLjc2LFxuICAgICAgICAgIFwib3JpZ2luYWxBbW91bnRcIjogMS43NixcbiAgICAgICAgICBcInVuaXRzXCI6IFwiW2dhbF91c10vaFwiLFxuICAgICAgICAgIFwiZXJyb3JcIjogbnVsbCxcbiAgICAgICAgICBcInByaWNlXCI6IDQuOTQ1NlxuICAgICAgICB9LFxuICAgICAgICBcIkxhYm9yLS1TdXBwb3J0IFRydWNrXCI6IHtcbiAgICAgICAgICBcImFtb3VudFwiOiAxLFxuICAgICAgICAgIFwib3JpZ2luYWxBbW91bnRcIjogMSxcbiAgICAgICAgICBcInVuaXRzXCI6IFwiaC9oXCIsXG4gICAgICAgICAgXCJlcnJvclwiOiBudWxsLFxuICAgICAgICAgIFwicHJpY2VcIjogMzBcbiAgICAgICAgfVxuICAgICAgfSxcbiAgICAgIFwicHJpY2VcIjogMzQuOTQ1NlxuICAgIH0sXG4gICAge1xuICAgICAgXCJjbGFzc1wiOiBcImVxdWlwbWVudFwiLFxuICAgICAgXCJuYW1lXCI6IFwiVGFuZGVtIGF4bGUgdHJ1Y2tcIixcbiAgICAgIFwidW5pdHNcIjogXCJoXCIsXG4gICAgICBcInR5cGVcIjogXCJjb21wbGV4XCIsXG4gICAgICBcIm1hdGVyaWFsc1wiOiB7XG4gICAgICAgIFwiRXF1aXBtZW50IEZ1ZWxcIjoge1xuICAgICAgICAgIFwiYW1vdW50XCI6IDEzLjIsXG4gICAgICAgICAgXCJvcmlnaW5hbEFtb3VudFwiOiAxMy4yLFxuICAgICAgICAgIFwidW5pdHNcIjogXCJbZ2FsX3VzXS9oXCIsXG4gICAgICAgICAgXCJlcnJvclwiOiBudWxsLFxuICAgICAgICAgIFwicHJpY2VcIjogMzcuMDkyXG4gICAgICAgIH0sXG4gICAgICAgIFwiTGFib3ItLVRhbmRlbSBheGxlIHRydWNrXCI6IHtcbiAgICAgICAgICBcImFtb3VudFwiOiAxLFxuICAgICAgICAgIFwib3JpZ2luYWxBbW91bnRcIjogMSxcbiAgICAgICAgICBcInVuaXRzXCI6IFwiaC9oXCIsXG4gICAgICAgICAgXCJlcnJvclwiOiBudWxsLFxuICAgICAgICAgIFwicHJpY2VcIjogMjZcbiAgICAgICAgfVxuICAgICAgfSxcbiAgICAgIFwicHJpY2VcIjogNjMuMDkyXG4gICAgfSxcbiAgICB7XG4gICAgICBcImNsYXNzXCI6IFwiZXF1aXBtZW50XCIsXG4gICAgICBcIm5hbWVcIjogXCJUcmFjdG9yIGFuZCBzcHJheWVyXCIsXG4gICAgICBcInVuaXRzXCI6IFwiaFwiLFxuICAgICAgXCJ0eXBlXCI6IFwiY29tcGxleFwiLFxuICAgICAgXCJtYXRlcmlhbHNcIjoge1xuICAgICAgICBcIkVxdWlwbWVudCBGdWVsXCI6IHtcbiAgICAgICAgICBcImFtb3VudFwiOiAzLjk2LFxuICAgICAgICAgIFwib3JpZ2luYWxBbW91bnRcIjogMy45NixcbiAgICAgICAgICBcInVuaXRzXCI6IFwiW2dhbF91c10vaFwiLFxuICAgICAgICAgIFwiZXJyb3JcIjogbnVsbCxcbiAgICAgICAgICBcInByaWNlXCI6IDExLjEyNzZcbiAgICAgICAgfSxcbiAgICAgICAgXCJMYWJvci0tVHJhY3RvciBhbmQgc3ByYXllclwiOiB7XG4gICAgICAgICAgXCJhbW91bnRcIjogMSxcbiAgICAgICAgICBcIm9yaWdpbmFsQW1vdW50XCI6IDEsXG4gICAgICAgICAgXCJ1bml0c1wiOiBcImgvaFwiLFxuICAgICAgICAgIFwiZXJyb3JcIjogdHJ1ZVxuICAgICAgICB9XG4gICAgICB9LFxuICAgICAgXCJwcmljZVwiOiAwXG4gICAgfSxcbiAgICB7XG4gICAgICBcImNsYXNzXCI6IFwibGFib3JcIixcbiAgICAgIFwibmFtZVwiOiBcImhvZWluZ1wiLFxuICAgICAgXCJ1bml0c1wiOiBcIjEwMC5bYWNyX3VzXVwiLFxuICAgICAgXCJ0eXBlXCI6IFwiY29tcGxleFwiLFxuICAgICAgXCJtYXRlcmlhbHNcIjoge1xuICAgICAgICBcIkxhYm9yZXJcIjoge1xuICAgICAgICAgIFwiYW1vdW50XCI6IDE5MixcbiAgICAgICAgICBcIm9yaWdpbmFsQW1vdW50XCI6IDE5MixcbiAgICAgICAgICBcInVuaXRzXCI6IFwiaC8oMTAwLlthY3JfdXNdKVwiLFxuICAgICAgICAgIFwiZXJyb3JcIjogbnVsbCxcbiAgICAgICAgICBcInByaWNlXCI6IDM4NDBcbiAgICAgICAgfVxuICAgICAgfSxcbiAgICAgIFwicHJpY2VcIjogMzg0MFxuICAgIH0sXG4gICAge1xuICAgICAgXCJjbGFzc1wiOiBcImxhYm9yXCIsXG4gICAgICBcIm5hbWVcIjogXCJoZXJiaWNpZGUgLSBtYW51YWxcIixcbiAgICAgIFwidW5pdHNcIjogXCIxMDAuW2Fjcl91c11cIixcbiAgICAgIFwidHlwZVwiOiBcImNvbXBsZXhcIixcbiAgICAgIFwibWF0ZXJpYWxzXCI6IHtcbiAgICAgICAgXCJHbHlwaG9zYXRlXCI6IHtcbiAgICAgICAgICBcImFtb3VudFwiOiAyMDAsXG4gICAgICAgICAgXCJvcmlnaW5hbEFtb3VudFwiOiAyMDAsXG4gICAgICAgICAgXCJ1bml0c1wiOiBcIltxdF91c10vKDEwMC5bYWNyX3VzXSlcIixcbiAgICAgICAgICBcImVycm9yXCI6IG51bGwsXG4gICAgICAgICAgXCJwcmljZVwiOiA4MDBcbiAgICAgICAgfSxcbiAgICAgICAgXCJMYWJvcmVyXCI6IHtcbiAgICAgICAgICBcImFtb3VudFwiOiA5NixcbiAgICAgICAgICBcIm9yaWdpbmFsQW1vdW50XCI6IDk2LFxuICAgICAgICAgIFwidW5pdHNcIjogXCJoLygxMDAuW2Fjcl91c10pXCIsXG4gICAgICAgICAgXCJlcnJvclwiOiBudWxsLFxuICAgICAgICAgIFwicHJpY2VcIjogMTkyMFxuICAgICAgICB9XG4gICAgICB9LFxuICAgICAgXCJwcmljZVwiOiAyNzIwXG4gICAgfVxuICBdLFxuICBcIm9wZXJhdGlvbnNcIjogW1xuICAgIHtcbiAgICAgIFwibmFtZVwiOiBcImNyb3AgY2FyZSAtIGVzdGFibGlzaGVkXCIsXG4gICAgICBcIm1hdGVyaWFsc1wiOiB7XG4gICAgICAgIFwiaG9laW5nXCI6IHtcbiAgICAgICAgICBcImFtb3VudFwiOiAxNTAsXG4gICAgICAgICAgXCJtYXRlcmlhbFwiOiBcImhvZWluZ1wiLFxuICAgICAgICAgIFwidW5pdHNcIjogXCJbYWNyX3VzXVwiLFxuICAgICAgICAgIFwiZXJyb3JcIjogbnVsbCxcbiAgICAgICAgICBcInByaWNlXCI6IDU3NjBcbiAgICAgICAgfSxcbiAgICAgICAgXCJoZXJiaWNpZGUgLSBtYW51YWxcIjoge1xuICAgICAgICAgIFwiYW1vdW50XCI6IDEwMCxcbiAgICAgICAgICBcIm1hdGVyaWFsXCI6IFwiaGVyYmljaWRlIC0gbWFudWFsXCIsXG4gICAgICAgICAgXCJ1bml0c1wiOiBcIlthY3JfdXNdXCIsXG4gICAgICAgICAgXCJlcnJvclwiOiBudWxsLFxuICAgICAgICAgIFwicHJpY2VcIjogMjcyMFxuICAgICAgICB9XG4gICAgICB9LFxuICAgICAgXCJ1bml0c1wiOiBcIlthY3JfdXNdXCIsXG4gICAgICBcInNjaGVkdWxlXCI6IFtcbiAgICAgICAge1xuICAgICAgICAgIFwiZGF0ZVwiOiBcIjIwMTgtMTEtMDFcIixcbiAgICAgICAgICBcImxlbmd0aFwiOiBcIjFcIixcbiAgICAgICAgICBcInVuaXRzXCI6IFwieWVhclwiXG4gICAgICAgIH0sXG4gICAgICAgIHtcbiAgICAgICAgICBcImRhdGVcIjogXCIyMDE5LTExLTAxXCIsXG4gICAgICAgICAgXCJsZW5ndGhcIjogXCIxXCIsXG4gICAgICAgICAgXCJ1bml0c1wiOiBcInllYXJcIlxuICAgICAgICB9LFxuICAgICAgICB7XG4gICAgICAgICAgXCJkYXRlXCI6IFwiMjAyMi0xMS0wMVwiLFxuICAgICAgICAgIFwibGVuZ3RoXCI6IFwiMVwiLFxuICAgICAgICAgIFwidW5pdHNcIjogXCJ5ZWFyXCJcbiAgICAgICAgfSxcbiAgICAgICAge1xuICAgICAgICAgIFwiZGF0ZVwiOiBcIjIwMjMtMTEtMDFcIixcbiAgICAgICAgICBcImxlbmd0aFwiOiBcIjFcIixcbiAgICAgICAgICBcInVuaXRzXCI6IFwieWVhclwiXG4gICAgICAgIH0sXG4gICAgICAgIHtcbiAgICAgICAgICBcImRhdGVcIjogXCIyMDI2LTExLTAxXCIsXG4gICAgICAgICAgXCJsZW5ndGhcIjogXCIxXCIsXG4gICAgICAgICAgXCJ1bml0c1wiOiBcInllYXJcIlxuICAgICAgICB9LFxuICAgICAgICB7XG4gICAgICAgICAgXCJkYXRlXCI6IFwiMjAyNy0xMS0wMVwiLFxuICAgICAgICAgIFwibGVuZ3RoXCI6IFwiMVwiLFxuICAgICAgICAgIFwidW5pdHNcIjogXCJ5ZWFyXCJcbiAgICAgICAgfSxcbiAgICAgICAge1xuICAgICAgICAgIFwiZGF0ZVwiOiBcIjIwMzAtMTEtMDFcIixcbiAgICAgICAgICBcImxlbmd0aFwiOiBcIjFcIixcbiAgICAgICAgICBcInVuaXRzXCI6IFwieWVhclwiXG4gICAgICAgIH0sXG4gICAgICAgIHtcbiAgICAgICAgICBcImRhdGVcIjogXCIyMDMxLTExLTAxXCIsXG4gICAgICAgICAgXCJsZW5ndGhcIjogXCIxXCIsXG4gICAgICAgICAgXCJ1bml0c1wiOiBcInllYXJcIlxuICAgICAgICB9XG4gICAgICBdLFxuICAgICAgXCJpZFwiOiBcIjAxNmI1ODliLTkxZTEtNGFkZi05NTUwLTA4ZjQ5Yjc2ZWY0OFwiLFxuICAgICAgXCJzdWJ0b3RhbFwiOiA4NDgwLFxuICAgICAgXCJ0b3RhbFwiOiA2Nzg0MFxuICAgIH0sXG4gICAge1xuICAgICAgXCJuYW1lXCI6IFwicGxhbnRpbmdcIixcbiAgICAgIFwibWF0ZXJpYWxzXCI6IHtcbiAgICAgICAgXCJTZW1pLXRyYWN0b3IgdHJhaWxlclwiOiB7XG4gICAgICAgICAgXCJub3RlXCI6IFwiVHJhbnNwb3J0IE51cnNlcnkgdG8gZmllbGRcIixcbiAgICAgICAgICBcImFtb3VudFwiOiAyMCxcbiAgICAgICAgICBcIm1hdGVyaWFsXCI6IFwiU2VtaS10cmFjdG9yIHRyYWlsZXJcIixcbiAgICAgICAgICBcInVuaXRzXCI6IFwiaFwiLFxuICAgICAgICAgIFwiZXJyb3JcIjogbnVsbCxcbiAgICAgICAgICBcInByaWNlXCI6IDkyNS4zXG4gICAgICAgIH0sXG4gICAgICAgIFwiUG9wbGFyIEN1dHRpbmdcIjoge1xuICAgICAgICAgIFwiYW1vdW50XCI6IDE0NTAwMCxcbiAgICAgICAgICBcIm1hdGVyaWFsXCI6IFwiUG9wbGFyIEN1dHRpbmdcIixcbiAgICAgICAgICBcInVuaXRzXCI6IFwiMVwiLFxuICAgICAgICAgIFwiZXJyb3JcIjogbnVsbCxcbiAgICAgICAgICBcInByaWNlXCI6IDExNjAwXG4gICAgICAgIH0sXG4gICAgICAgIFwiQ29vbGVyL3ZhblwiOiB7XG4gICAgICAgICAgXCJhbW91bnRcIjogMTA4MSxcbiAgICAgICAgICBcIm1hdGVyaWFsXCI6IFwiQ29vbGVyL3ZhblwiLFxuICAgICAgICAgIFwidW5pdHNcIjogXCJoXCIsXG4gICAgICAgICAgXCJlcnJvclwiOiBudWxsLFxuICAgICAgICAgIFwicHJpY2VcIjogMjkxOS4xMDgzNzc3Nzc3Nzc2LFxuICAgICAgICAgIFwib3JpZ2luYWxBbW91bnRcIjogMTA4MVxuICAgICAgICB9LFxuICAgICAgICBcIkxhYm9yZXJcIjoge1xuICAgICAgICAgIFwiYW1vdW50XCI6IDQ4MCxcbiAgICAgICAgICBcIm1hdGVyaWFsXCI6IFwiTGFib3JlclwiLFxuICAgICAgICAgIFwidW5pdHNcIjogXCJoXCIsXG4gICAgICAgICAgXCJlcnJvclwiOiBudWxsLFxuICAgICAgICAgIFwicHJpY2VcIjogOTYwMFxuICAgICAgICB9XG4gICAgICB9LFxuICAgICAgXCJ1bml0c1wiOiBcIlthY3JfdXNdXCIsXG4gICAgICBcInNjaGVkdWxlXCI6IFtcbiAgICAgICAge1xuICAgICAgICAgIFwiZGF0ZVwiOiBcIjIwMTUtMTAtMDFcIixcbiAgICAgICAgICBcImxlbmd0aFwiOiBcIjFcIixcbiAgICAgICAgICBcInVuaXRzXCI6IFwibW9udGhcIlxuICAgICAgICB9XG4gICAgICBdLFxuICAgICAgXCJpZFwiOiBcIjJjMDNkNWYzLWY0NGYtNDYxNy05ZTBjLTg5NjkyODU0NWJkNVwiLFxuICAgICAgXCJzdWJ0b3RhbFwiOiAyNTA0NC40MDgzNzc3Nzc3NzgsXG4gICAgICBcInRvdGFsXCI6IDI1MDQ0LjQwODM3Nzc3Nzc3OFxuICAgIH0sXG4gICAge1xuICAgICAgXCJuYW1lXCI6IFwiY3JvcCBjYXJlIC0geXIwXCIsXG4gICAgICBcIm1hdGVyaWFsc1wiOiB7XG4gICAgICAgIFwiaGVyYmljaWRlIC0gbWFudWFsXCI6IHtcbiAgICAgICAgICBcImFtb3VudFwiOiAyNSxcbiAgICAgICAgICBcIm1hdGVyaWFsXCI6IFwiaGVyYmljaWRlIC0gbWFudWFsXCIsXG4gICAgICAgICAgXCJ1bml0c1wiOiBcIlthY3JfdXNdXCIsXG4gICAgICAgICAgXCJlcnJvclwiOiBudWxsLFxuICAgICAgICAgIFwicHJpY2VcIjogNjgwXG4gICAgICAgIH0sXG4gICAgICAgIFwiaG9laW5nXCI6IHtcbiAgICAgICAgICBcIm5vdGVcIjogXCIyIHRpbWVzIG92ZXIgNzAgYWNyZXMgZWFjaC5cIixcbiAgICAgICAgICBcImFtb3VudFwiOiAxNDAsXG4gICAgICAgICAgXCJtYXRlcmlhbFwiOiBcImhvZWluZ1wiLFxuICAgICAgICAgIFwidW5pdHNcIjogXCJbYWNyX3VzXVwiLFxuICAgICAgICAgIFwiZXJyb3JcIjogbnVsbCxcbiAgICAgICAgICBcInByaWNlXCI6IDUzNzZcbiAgICAgICAgfVxuICAgICAgfSxcbiAgICAgIFwidW5pdHNcIjogXCJbYWNyX3VzXVwiLFxuICAgICAgXCJzY2hlZHVsZVwiOiBbXG4gICAgICAgIHtcbiAgICAgICAgICBcImRhdGVcIjogXCIyMDE1LTExLTAxXCIsXG4gICAgICAgICAgXCJsZW5ndGhcIjogXCIxXCIsXG4gICAgICAgICAgXCJ1bml0c1wiOiBcInllYXJcIlxuICAgICAgICB9XG4gICAgICBdLFxuICAgICAgXCJpZFwiOiBcImFhMGIyMmFjLTMzOTgtNGU3ZC1iZjIzLWRmNWFmMjU0NGIyOFwiLFxuICAgICAgXCJzdWJ0b3RhbFwiOiA2MDU2LFxuICAgICAgXCJ0b3RhbFwiOiA2MDU2XG4gICAgfSxcbiAgICB7XG4gICAgICBcIm5hbWVcIjogXCJoYXJ2ZXN0IC0gZXN0YWJsaXNoZWRcIixcbiAgICAgIFwibWF0ZXJpYWxzXCI6IHtcbiAgICAgICAgXCJGUiA2MDgwIEZIXCI6IHtcbiAgICAgICAgICBcImFtb3VudFwiOiAzNSxcbiAgICAgICAgICBcIm1hdGVyaWFsXCI6IFwiRlIgNjA4MCBGSFwiLFxuICAgICAgICAgIFwidW5pdHNcIjogXCJoXCIsXG4gICAgICAgICAgXCJlcnJvclwiOiBudWxsLFxuICAgICAgICAgIFwicHJpY2VcIjogMTUwOC4yMixcbiAgICAgICAgICBcIm9yaWdpbmFsQW1vdW50XCI6IDM1XG4gICAgICAgIH0sXG4gICAgICAgIFwiVGFuZGVtIGF4bGUgdHJ1Y2tcIjoge1xuICAgICAgICAgIFwiYW1vdW50XCI6IDE3NSxcbiAgICAgICAgICBcIm1hdGVyaWFsXCI6IFwiVGFuZGVtIGF4bGUgdHJ1Y2tcIixcbiAgICAgICAgICBcInVuaXRzXCI6IFwiaFwiLFxuICAgICAgICAgIFwiZXJyb3JcIjogbnVsbCxcbiAgICAgICAgICBcInByaWNlXCI6IDExMDQxLjFcbiAgICAgICAgfSxcbiAgICAgICAgXCJTdXBwb3J0IFRydWNrXCI6IHtcbiAgICAgICAgICBcImFtb3VudFwiOiAzNSxcbiAgICAgICAgICBcIm1hdGVyaWFsXCI6IFwiU3VwcG9ydCBUcnVja1wiLFxuICAgICAgICAgIFwidW5pdHNcIjogXCJoXCIsXG4gICAgICAgICAgXCJlcnJvclwiOiBudWxsLFxuICAgICAgICAgIFwicHJpY2VcIjogMTIyMy4wOTZcbiAgICAgICAgfVxuICAgICAgfSxcbiAgICAgIFwidW5pdHNcIjogXCJbYWNyX3VzXVwiLFxuICAgICAgXCJzY2hlZHVsZVwiOiBbXG4gICAgICAgIHtcbiAgICAgICAgICBcImRhdGVcIjogXCIyMDIwLTEwLTAxXCIsXG4gICAgICAgICAgXCJsZW5ndGhcIjogXCIxXCIsXG4gICAgICAgICAgXCJ1bml0c1wiOiBcIm1vbnRoXCJcbiAgICAgICAgfSxcbiAgICAgICAge1xuICAgICAgICAgIFwiZGF0ZVwiOiBcIjIwMjMtMTAtMDFcIixcbiAgICAgICAgICBcImxlbmd0aFwiOiBcIjFcIixcbiAgICAgICAgICBcInVuaXRzXCI6IFwibW9udGhcIlxuICAgICAgICB9LFxuICAgICAgICB7XG4gICAgICAgICAgXCJkYXRlXCI6IFwiMjAyOC0xMC0wMVwiLFxuICAgICAgICAgIFwibGVuZ3RoXCI6IFwiMVwiLFxuICAgICAgICAgIFwidW5pdHNcIjogXCJtb250aFwiXG4gICAgICAgIH0sXG4gICAgICAgIHtcbiAgICAgICAgICBcImRhdGVcIjogXCIyMDMyLTEwLTAxXCIsXG4gICAgICAgICAgXCJsZW5ndGhcIjogXCIxXCIsXG4gICAgICAgICAgXCJ1bml0c1wiOiBcIm1vbnRoXCJcbiAgICAgICAgfVxuICAgICAgXSxcbiAgICAgIFwiaWRcIjogXCI0ODBiM2FlYi03MzUwLTQxZmEtODhiNS0yNGYzMjkyMjNmOTZcIixcbiAgICAgIFwic3VidG90YWxcIjogMTM3NzIuNDE2LFxuICAgICAgXCJ0b3RhbFwiOiA1NTA4OS42NjRcbiAgICB9LFxuICAgIHtcbiAgICAgIFwibmFtZVwiOiBcImNyb3AgY2FyZSAtIHlyMVwiLFxuICAgICAgXCJtYXRlcmlhbHNcIjoge1xuICAgICAgICBcIlNtYWxsIFRyYWN0b3JcIjoge1xuICAgICAgICAgIFwibm90ZVwiOiBcIlRpbGxhZ2VcIixcbiAgICAgICAgICBcImFtb3VudFwiOiA0OCxcbiAgICAgICAgICBcIm1hdGVyaWFsXCI6IFwiU21hbGwgVHJhY3RvclwiLFxuICAgICAgICAgIFwidW5pdHNcIjogXCJoXCIsXG4gICAgICAgICAgXCJlcnJvclwiOiB7XG4gICAgICAgICAgICBcIm5hbWVcIjogXCJTbWFsbCBUcmFjdG9yXCIsXG4gICAgICAgICAgICBcImVycm9yXCI6IHRydWUsXG4gICAgICAgICAgICBcIm1lc3NhZ2VcIjogXCJTbWFsbCBUcmFjdG9yIGlzIG5vdCBpbiB0aGUgbWF0ZXJpYWwgbGlzdFwiXG4gICAgICAgICAgfVxuICAgICAgICB9LFxuICAgICAgICBcImhvZWluZ1wiOiB7XG4gICAgICAgICAgXCJub3RlXCI6IFwiNSB0aW1lc1wiLFxuICAgICAgICAgIFwiYW1vdW50XCI6IDUwMCxcbiAgICAgICAgICBcIm1hdGVyaWFsXCI6IFwiaG9laW5nXCIsXG4gICAgICAgICAgXCJ1bml0c1wiOiBcIlthY3JfdXNdXCIsXG4gICAgICAgICAgXCJlcnJvclwiOiBudWxsLFxuICAgICAgICAgIFwicHJpY2VcIjogMTkyMDBcbiAgICAgICAgfSxcbiAgICAgICAgXCJoZXJiaWNpZGUgLSBtYW51YWxcIjoge1xuICAgICAgICAgIFwibm90ZVwiOiBcIjMgdGltZXMsIDEvMiBmaWVsZFwiLFxuICAgICAgICAgIFwiYW1vdW50XCI6IDE1MCxcbiAgICAgICAgICBcIm1hdGVyaWFsXCI6IFwiaGVyYmljaWRlIC0gbWFudWFsXCIsXG4gICAgICAgICAgXCJ1bml0c1wiOiBcIlthY3JfdXNdXCIsXG4gICAgICAgICAgXCJlcnJvclwiOiBudWxsLFxuICAgICAgICAgIFwicHJpY2VcIjogNDA4MCxcbiAgICAgICAgICBcIm9yaWdpbmFsQW1vdW50XCI6IDE1MFxuICAgICAgICB9LFxuICAgICAgICBcIkxhYm9yZXJcIjoge1xuICAgICAgICAgIFwibm90ZVwiOiBcIkludGVycGxhbnRpbmdcIixcbiAgICAgICAgICBcImFtb3VudFwiOiA5NixcbiAgICAgICAgICBcIm1hdGVyaWFsXCI6IFwiTGFib3JlclwiLFxuICAgICAgICAgIFwidW5pdHNcIjogXCJoXCIsXG4gICAgICAgICAgXCJlcnJvclwiOiBudWxsLFxuICAgICAgICAgIFwicHJpY2VcIjogMTkyMFxuICAgICAgICB9XG4gICAgICB9LFxuICAgICAgXCJ1bml0c1wiOiBcIlthY3JfdXNdXCIsXG4gICAgICBcInNjaGVkdWxlXCI6IFtcbiAgICAgICAge1xuICAgICAgICAgIFwiZGF0ZVwiOiBcIjIwMTYtMTEtMDFcIixcbiAgICAgICAgICBcImxlbmd0aFwiOiBcIjFcIixcbiAgICAgICAgICBcInVuaXRzXCI6IFwieWVhclwiXG4gICAgICAgIH1cbiAgICAgIF0sXG4gICAgICBcImlkXCI6IFwiMzg3OWY2MGItM2Q0Yi00YTkxLWE2NzAtOTYxMTQ3YTQ1YmJhXCIsXG4gICAgICBcInN1YnRvdGFsXCI6IDI1MjAwLFxuICAgICAgXCJ0b3RhbFwiOiAyNTIwMFxuICAgIH0sXG4gICAge1xuICAgICAgXCJuYW1lXCI6IFwicmVzdG9yYXRpb25cIixcbiAgICAgIFwibWF0ZXJpYWxzXCI6IHtcbiAgICAgICAgXCJMYXJnZSB0cmFjdG9yXCI6IHtcbiAgICAgICAgICBcIm5vdGVcIjogXCJkaXNraW5nXCIsXG4gICAgICAgICAgXCJhbW91bnRcIjogMTIsXG4gICAgICAgICAgXCJtYXRlcmlhbFwiOiBcIkxhcmdlIHRyYWN0b3JcIixcbiAgICAgICAgICBcInVuaXRzXCI6IFwiaFwiLFxuICAgICAgICAgIFwiZXJyb3JcIjogbnVsbCxcbiAgICAgICAgICBcInByaWNlXCI6IDg2NS4xMDRcbiAgICAgICAgfSxcbiAgICAgICAgXCJUcmFjdG9yIGFuZCBzcHJheWVyXCI6IHtcbiAgICAgICAgICBcIm5vdGVcIjogXCJoZXJiaWNpZGVcIixcbiAgICAgICAgICBcImFtb3VudFwiOiAyMCxcbiAgICAgICAgICBcIm1hdGVyaWFsXCI6IFwiVHJhY3RvciBhbmQgc3ByYXllclwiLFxuICAgICAgICAgIFwidW5pdHNcIjogXCJoXCIsXG4gICAgICAgICAgXCJlcnJvclwiOiBudWxsLFxuICAgICAgICAgIFwicHJpY2VcIjogMFxuICAgICAgICB9LFxuICAgICAgICBcIkdseXBob3NhdGVcIjoge1xuICAgICAgICAgIFwibm90ZVwiOiBcImhlcmJpY2lkZVwiLFxuICAgICAgICAgIFwiYW1vdW50XCI6IDIwMCxcbiAgICAgICAgICBcIm1hdGVyaWFsXCI6IFwiR2x5cGhvc2F0ZVwiLFxuICAgICAgICAgIFwidW5pdHNcIjogXCJbcXRfdXNdXCIsXG4gICAgICAgICAgXCJlcnJvclwiOiBudWxsLFxuICAgICAgICAgIFwicHJpY2VcIjogODAwXG4gICAgICAgIH0sXG4gICAgICAgIFwiMiw0LURcIjoge1xuICAgICAgICAgIFwibm90ZVwiOiBcImhlcmJpY2lkZVwiLFxuICAgICAgICAgIFwiYW1vdW50XCI6IDIwMCxcbiAgICAgICAgICBcIm1hdGVyaWFsXCI6IFwiMiw0LURcIixcbiAgICAgICAgICBcInVuaXRzXCI6IFwiW3F0X3VzXVwiLFxuICAgICAgICAgIFwiZXJyb3JcIjogbnVsbCxcbiAgICAgICAgICBcInByaWNlXCI6IDEwMDBcbiAgICAgICAgfVxuICAgICAgfSxcbiAgICAgIFwidW5pdHNcIjogXCJbYWNyX3VzXVwiLFxuICAgICAgXCJzY2hlZHVsZVwiOiBbXG4gICAgICAgIHtcbiAgICAgICAgICBcImRhdGVcIjogXCIyMDMyLTExLTAxXCIsXG4gICAgICAgICAgXCJsZW5ndGhcIjogXCIzXCIsXG4gICAgICAgICAgXCJ1bml0c1wiOiBcIm1vbnRoXCJcbiAgICAgICAgfVxuICAgICAgXSxcbiAgICAgIFwiaWRcIjogXCI4NjkwZjBmOS1hMTAzLTQ0MzgtOTA1ZS1iYmQ3MWNjYmRkZTNcIixcbiAgICAgIFwic3VidG90YWxcIjogMjY2NS4xMDQwMDAwMDAwMDAzLFxuICAgICAgXCJ0b3RhbFwiOiAyNjY1LjEwNDAwMDAwMDAwMDNcbiAgICB9LFxuICAgIHtcbiAgICAgIFwibmFtZVwiOiBcImNyb3AgY2FyZSAtIHBvc3QgaGFydmVzdFwiLFxuICAgICAgXCJtYXRlcmlhbHNcIjoge1xuICAgICAgICBcIk1pZC1zaXplIHRyYWN0b3JcIjoge1xuICAgICAgICAgIFwibm90ZVwiOiBcIlBvc3QgaGFydmVzdCBjbGVhbiB1cFwiLFxuICAgICAgICAgIFwiYW1vdW50XCI6IDMwLFxuICAgICAgICAgIFwibWF0ZXJpYWxcIjogXCJNaWQtc2l6ZSB0cmFjdG9yXCIsXG4gICAgICAgICAgXCJ1bml0c1wiOiBcImhcIixcbiAgICAgICAgICBcImVycm9yXCI6IG51bGwsXG4gICAgICAgICAgXCJwcmljZVwiOiA5OTMuODI4XG4gICAgICAgIH0sXG4gICAgICAgIFwiVHJhY3RvciBhbmQgc3ByYXllclwiOiB7XG4gICAgICAgICAgXCJub3RlXCI6IFwiRG9ybWFudCBIZXJiaWNpZGVcIixcbiAgICAgICAgICBcImFtb3VudFwiOiA4LFxuICAgICAgICAgIFwibWF0ZXJpYWxcIjogXCJUcmFjdG9yIGFuZCBzcHJheWVyXCIsXG4gICAgICAgICAgXCJ1bml0c1wiOiBcImhcIixcbiAgICAgICAgICBcImVycm9yXCI6IG51bGwsXG4gICAgICAgICAgXCJwcmljZVwiOiAwXG4gICAgICAgIH0sXG4gICAgICAgIFwiR2x5cGhvc2F0ZVwiOiB7XG4gICAgICAgICAgXCJub3RlXCI6IFwiRG9ybWFudCBIZXJiaWNpZGVcIixcbiAgICAgICAgICBcImFtb3VudFwiOiAyMDAsXG4gICAgICAgICAgXCJtYXRlcmlhbFwiOiBcIkdseXBob3NhdGVcIixcbiAgICAgICAgICBcInVuaXRzXCI6IFwiW3F0X3VzXVwiLFxuICAgICAgICAgIFwiZXJyb3JcIjogbnVsbCxcbiAgICAgICAgICBcInByaWNlXCI6IDgwMFxuICAgICAgICB9LFxuICAgICAgICBcIlRyaWZsdXJhbGluXCI6IHtcbiAgICAgICAgICBcIm5vdGVcIjogXCJEb3JtYW50IEhlcmJpY2lkZVwiLFxuICAgICAgICAgIFwiYW1vdW50XCI6IDIwMCxcbiAgICAgICAgICBcIm1hdGVyaWFsXCI6IFwiVHJpZmx1cmFsaW5cIixcbiAgICAgICAgICBcInVuaXRzXCI6IFwiW3F0X3VzXVwiLFxuICAgICAgICAgIFwiZXJyb3JcIjogbnVsbCxcbiAgICAgICAgICBcInByaWNlXCI6IDE1MDBcbiAgICAgICAgfSxcbiAgICAgICAgXCJoZXJiaWNpZGUgLSBtYW51YWxcIjoge1xuICAgICAgICAgIFwibm90ZVwiOiBcInBvc3QgZW1lcmdlbnRcIixcbiAgICAgICAgICBcImFtb3VudFwiOiAxMDAsXG4gICAgICAgICAgXCJtYXRlcmlhbFwiOiBcImhlcmJpY2lkZSAtIG1hbnVhbFwiLFxuICAgICAgICAgIFwidW5pdHNcIjogXCJbYWNyX3VzXVwiLFxuICAgICAgICAgIFwiZXJyb3JcIjogbnVsbCxcbiAgICAgICAgICBcInByaWNlXCI6IDI3MjBcbiAgICAgICAgfVxuICAgICAgfSxcbiAgICAgIFwidW5pdHNcIjogXCJbYWNyX3VzXVwiLFxuICAgICAgXCJzY2hlZHVsZVwiOiBbXG4gICAgICAgIHtcbiAgICAgICAgICBcImRhdGVcIjogXCIyMDE3LTExLTAxXCIsXG4gICAgICAgICAgXCJsZW5ndGhcIjogXCIxXCIsXG4gICAgICAgICAgXCJ1bml0c1wiOiBcInllYXJcIlxuICAgICAgICB9LFxuICAgICAgICB7XG4gICAgICAgICAgXCJkYXRlXCI6IFwiMjAyMS0xMS0wMVwiLFxuICAgICAgICAgIFwibGVuZ3RoXCI6IFwiMVwiLFxuICAgICAgICAgIFwidW5pdHNcIjogXCJ5ZWFyXCJcbiAgICAgICAgfSxcbiAgICAgICAge1xuICAgICAgICAgIFwiZGF0ZVwiOiBcIjIwMjUtMTEtMDFcIixcbiAgICAgICAgICBcImxlbmd0aFwiOiBcIjFcIixcbiAgICAgICAgICBcInVuaXRzXCI6IFwieWVhclwiXG4gICAgICAgIH0sXG4gICAgICAgIHtcbiAgICAgICAgICBcImRhdGVcIjogXCIyMDI5LTExLTAxXCIsXG4gICAgICAgICAgXCJsZW5ndGhcIjogXCIxXCIsXG4gICAgICAgICAgXCJ1bml0c1wiOiBcInllYXJcIlxuICAgICAgICB9XG4gICAgICBdLFxuICAgICAgXCJpZFwiOiBcImQzNDM0ZjkyLTFlZjQtNDJiNi05MDI2LWRjZWRjNTVhYzY4ZVwiLFxuICAgICAgXCJzdWJ0b3RhbFwiOiA2MDEzLjgyNzk5OTk5OTk5OTUsXG4gICAgICBcInRvdGFsXCI6IDI0MDU1LjMxMTk5OTk5OTk5OFxuICAgIH0sXG4gICAge1xuICAgICAgXCJuYW1lXCI6IFwiaGFydmVzdCAtIHlyMVwiLFxuICAgICAgXCJtYXRlcmlhbHNcIjoge1xuICAgICAgICBcIkZSIDYwODAgRkhcIjoge1xuICAgICAgICAgIFwibm90ZVwiOiBcIlwiLFxuICAgICAgICAgIFwiYW1vdW50XCI6IDI2LFxuICAgICAgICAgIFwibWF0ZXJpYWxcIjogXCJGUiA2MDgwIEZIXCIsXG4gICAgICAgICAgXCJ1bml0c1wiOiBcImhcIixcbiAgICAgICAgICBcImVycm9yXCI6IG51bGwsXG4gICAgICAgICAgXCJwcmljZVwiOiAxMTIwLjM5MlxuICAgICAgICB9LFxuICAgICAgICBcIlRhbmRvbSBheGxlIHRydWNrXCI6IHtcbiAgICAgICAgICBcImFtb3VudFwiOiAxMDQsXG4gICAgICAgICAgXCJtYXRlcmlhbFwiOiBcIlRhbmRvbSBheGxlIHRydWNrXCIsXG4gICAgICAgICAgXCJ1bml0c1wiOiBcImhcIixcbiAgICAgICAgICBcImVycm9yXCI6IHtcbiAgICAgICAgICAgIFwibmFtZVwiOiBcIlRhbmRvbSBheGxlIHRydWNrXCIsXG4gICAgICAgICAgICBcImVycm9yXCI6IHRydWUsXG4gICAgICAgICAgICBcIm1lc3NhZ2VcIjogXCJUYW5kb20gYXhsZSB0cnVjayBpcyBub3QgaW4gdGhlIG1hdGVyaWFsIGxpc3RcIlxuICAgICAgICAgIH1cbiAgICAgICAgfSxcbiAgICAgICAgXCJTdXBwb3J0IHRydWNrXCI6IHtcbiAgICAgICAgICBcImFtb3VudFwiOiAyNixcbiAgICAgICAgICBcIm1hdGVyaWFsXCI6IFwiU3VwcG9ydCB0cnVja1wiLFxuICAgICAgICAgIFwidW5pdHNcIjogXCJoXCIsXG4gICAgICAgICAgXCJlcnJvclwiOiB7XG4gICAgICAgICAgICBcIm5hbWVcIjogXCJTdXBwb3J0IHRydWNrXCIsXG4gICAgICAgICAgICBcImVycm9yXCI6IHRydWUsXG4gICAgICAgICAgICBcIm1lc3NhZ2VcIjogXCJTdXBwb3J0IHRydWNrIGlzIG5vdCBpbiB0aGUgbWF0ZXJpYWwgbGlzdFwiXG4gICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICB9LFxuICAgICAgXCJ1bml0c1wiOiBcIlthY3JfdXNdXCIsXG4gICAgICBcInNjaGVkdWxlXCI6IFtcbiAgICAgICAge1xuICAgICAgICAgIFwibGVuZ3RoXCI6IDEsXG4gICAgICAgICAgXCJ1bml0c1wiOiBcIm1vbnRoXCIsXG4gICAgICAgICAgXCJkYXRlXCI6IFwiMjAxNy0xMS0yMlwiXG4gICAgICAgIH1cbiAgICAgIF0sXG4gICAgICBcImlkXCI6IFwiOGUyMDg0YmUtNzI2ZC00ZjFiLTlmMTYtZmNmNTc0YzBmYmExXCIsXG4gICAgICBcInN1YnRvdGFsXCI6IDExMjAuMzkyLFxuICAgICAgXCJ0b3RhbFwiOiAxMTIwLjM5MlxuICAgIH0sXG4gICAge1xuICAgICAgXCJuYW1lXCI6IFwic2l0ZSBwcmVwXCIsXG4gICAgICBcIm1hdGVyaWFsc1wiOiB7XG4gICAgICAgIFwiVHJhY3RvciBhbmQgc3ByYXllclwiOiB7XG4gICAgICAgICAgXCJub3RlXCI6IFwiSW5pdGlhbCBTcHJheWluZ1wiLFxuICAgICAgICAgIFwiYW1vdW50XCI6IDMsXG4gICAgICAgICAgXCJtYXRlcmlhbFwiOiBcIlRyYWN0b3IgYW5kIHNwcmF5ZXJcIixcbiAgICAgICAgICBcInVuaXRzXCI6IFwiaFwiLFxuICAgICAgICAgIFwiZXJyb3JcIjogbnVsbCxcbiAgICAgICAgICBcInByaWNlXCI6IDBcbiAgICAgICAgfSxcbiAgICAgICAgXCJHbHlwaG9zYXRlXCI6IHtcbiAgICAgICAgICBcIm5vdGVcIjogXCJJbml0aWFsIFNwcmF5aW5nXCIsXG4gICAgICAgICAgXCJhbW91bnRcIjogMTAwLFxuICAgICAgICAgIFwibWF0ZXJpYWxcIjogXCJHbHlwaG9zYXRlXCIsXG4gICAgICAgICAgXCJ1bml0c1wiOiBcIltxdF91c11cIixcbiAgICAgICAgICBcImVycm9yXCI6IG51bGwsXG4gICAgICAgICAgXCJwcmljZVwiOiA0MDBcbiAgICAgICAgfSxcbiAgICAgICAgXCJHb2FsIDJYTFwiOiB7XG4gICAgICAgICAgXCJub3RlXCI6IFwiSW5pdGlhbCBTcHJheWluZ1wiLFxuICAgICAgICAgIFwiYW1vdW50XCI6IDEyNSxcbiAgICAgICAgICBcIm1hdGVyaWFsXCI6IFwiR29hbCAyWExcIixcbiAgICAgICAgICBcInVuaXRzXCI6IFwiW3F0X3VzXVwiLFxuICAgICAgICAgIFwiZXJyb3JcIjogbnVsbCxcbiAgICAgICAgICBcInByaWNlXCI6IDM3NTBcbiAgICAgICAgfSxcbiAgICAgICAgXCJMYXJnZSB0cmFjdG9yXCI6IHtcbiAgICAgICAgICBcIm5vdGVcIjogXCJSb3cgTWFya2luZ1wiLFxuICAgICAgICAgIFwiYW1vdW50XCI6IDI1LFxuICAgICAgICAgIFwibWF0ZXJpYWxcIjogXCJMYXJnZSB0cmFjdG9yXCIsXG4gICAgICAgICAgXCJ1bml0c1wiOiBcImhcIixcbiAgICAgICAgICBcImVycm9yXCI6IG51bGwsXG4gICAgICAgICAgXCJwcmljZVwiOiAxODAyLjNcbiAgICAgICAgfSxcbiAgICAgICAgXCJDaGFsbGVuZ2VyIHRyYWN0b3JcIjoge1xuICAgICAgICAgIFwibm90ZVwiOiBcImhlcmJpY2lkZSAtIHByZWVtZXJnZW50XCIsXG4gICAgICAgICAgXCJhbW91bnRcIjogMjQsXG4gICAgICAgICAgXCJtYXRlcmlhbFwiOiBcIkNoYWxsZW5nZXIgdHJhY3RvclwiLFxuICAgICAgICAgIFwidW5pdHNcIjogXCJoXCIsXG4gICAgICAgICAgXCJlcnJvclwiOiBudWxsLFxuICAgICAgICAgIFwicHJpY2VcIjogMTQwMS4zNjAwMDAwMDAwMDAxLFxuICAgICAgICAgIFwib3JpZ2luYWxBbW91bnRcIjogMjRcbiAgICAgICAgfSxcbiAgICAgICAgXCJUcmlmbHVyYWxpblwiOiB7XG4gICAgICAgICAgXCJub3RlXCI6IFwiaGVyYmljaWRlIC0gcHJlZW1lcmdlbnRcIixcbiAgICAgICAgICBcImFtb3VudFwiOiA1MCxcbiAgICAgICAgICBcIm1hdGVyaWFsXCI6IFwiVHJpZmx1cmFsaW5cIixcbiAgICAgICAgICBcInVuaXRzXCI6IFwiW3F0X3VzXVwiLFxuICAgICAgICAgIFwiZXJyb3JcIjogbnVsbCxcbiAgICAgICAgICBcInByaWNlXCI6IDM3NVxuICAgICAgICB9XG4gICAgICB9LFxuICAgICAgXCJ1bml0c1wiOiBcIlthY3JfdXNdXCIsXG4gICAgICBcInNjaGVkdWxlXCI6IFtcbiAgICAgICAge1xuICAgICAgICAgIFwiZGF0ZVwiOiBcIjIwMTUtMDYtMDFcIixcbiAgICAgICAgICBcImxlbmd0aFwiOiBcIjNcIixcbiAgICAgICAgICBcInVuaXRzXCI6IFwibW9udGhcIlxuICAgICAgICB9XG4gICAgICBdLFxuICAgICAgXCJpZFwiOiBcIjBlM2M4NjdmLTRlZWUtNDQ5Yy05ZWJmLThkMTI3YjE4OGJiMVwiLFxuICAgICAgXCJzdWJ0b3RhbFwiOiA3NzI4LjY2LFxuICAgICAgXCJ0b3RhbFwiOiA3NzI4LjY2XG4gICAgfVxuICBdLFxuICBcImZhcm1cIjoge1xuICAgIFwidW5pdFwiOiBcIlthY3JfdXNdXCIsXG4gICAgXCJzaXplXCI6IFwiMTAwXCIsXG4gICAgXCJjb21tb2RpdHlcIjogXCJQT1BMQVJcIixcbiAgICBcImxvY2F0aW9uXCI6IFwiMDYxMTNcIixcbiAgICBcImZhcm1cIjogXCJjbGFya3NidXJnXCJcbiAgfVxufVxuIiwibW9kdWxlLmV4cG9ydHM9e1xuICBcInByaWNlc1wiOiBbXG4gICAge1xuICAgICAgXCJ1bml0XCI6IFwidXMkL3VzJFwiLFxuICAgICAgXCJwcmljZVwiOiAxLFxuICAgICAgXCJtYXRlcmlhbFwiOiBcImN1c3RvbVwiXG4gICAgfSxcbiAgICB7XG4gICAgICBcInVuaXRcIjogXCJ1cyQvdXMkXCIsXG4gICAgICBcInByaWNlXCI6IDEsXG4gICAgICBcIm1hdGVyaWFsXCI6IFwiZmVydGlsaXplclwiXG4gICAgfSxcbiAgICB7XG4gICAgICBcInVuaXRcIjogXCJ1cyQvW2dhbF91c11cIixcbiAgICAgIFwicHJpY2VcIjogMi42OCxcbiAgICAgIFwibWF0ZXJpYWxcIjogXCJmdWVsXCJcbiAgICB9LFxuICAgIHtcbiAgICAgIFwidW5pdFwiOiBcInVzJC8oW2luX3VzXS5bYWNyX3VzXSlcIixcbiAgICAgIFwicHJpY2VcIjogMTEyLjg2LFxuICAgICAgXCJtYXRlcmlhbFwiOiBcImlycmlnYXRpb25cIlxuICAgIH0sXG4gICAge1xuICAgICAgXCJ1bml0XCI6IFwidXMkL2hcIixcbiAgICAgIFwicHJpY2VcIjogOS40MixcbiAgICAgIFwibWF0ZXJpYWxcIjogXCJMYWJvci1tYWNoaW5lXCJcbiAgICB9LFxuICAgIHtcbiAgICAgIFwidW5pdFwiOiBcInVzJC9oXCIsXG4gICAgICBcInByaWNlXCI6IDcuMjUsXG4gICAgICBcIm1hdGVyaWFsXCI6IFwiTGFib3ItbWFudWFsXCJcbiAgICB9LFxuICAgIHtcbiAgICAgIFwidW5pdFwiOiBcInVzJC91cyRcIixcbiAgICAgIFwicHJpY2VcIjogMSxcbiAgICAgIFwibWF0ZXJpYWxcIjogXCJvdGhlclwiXG4gICAgfSxcbiAgICB7XG4gICAgICBcInVuaXRcIjogXCJ1cyQvdXMkXCIsXG4gICAgICBcInByaWNlXCI6IDEsXG4gICAgICBcIm1hdGVyaWFsXCI6IFwicGVzdGljaWRlc1wiXG4gICAgfSxcbiAgICB7XG4gICAgICBcInVuaXRcIjogXCJ1cyQvdXMkXCIsXG4gICAgICBcInByaWNlXCI6IDEsXG4gICAgICBcIm1hdGVyaWFsXCI6IFwicmVwYWlyJmx1YmVcIlxuICAgIH1cbiAgXSxcbiAgXCJtYXRlcmlhbHNcIjogW1xuICAgIHtcbiAgICAgIFwiZGVzY3JpcHRpb25cIjogXCInTWFudWFsIExhYm9yIChtaW5pbXVtIHdhZ2UpJ1wiLFxuICAgICAgXCJjbGFzc1wiOiBcImxhYm9yXCIsXG4gICAgICBcInVuaXRcIjogXCJoXCIsXG4gICAgICBcIm1hdGVyaWFsXCI6IFwiTGFib3ItbWFjaGluZVwiXG4gICAgfSxcbiAgICB7XG4gICAgICBcImRlc2NyaXB0aW9uXCI6IFwiJ01hY2hpbmUgTGFib3IgKCUxMzAgb2YgbWluaW11bSknXCIsXG4gICAgICBcImNsYXNzXCI6IFwibGFib3JcIixcbiAgICAgIFwidW5pdFwiOiBcImhcIixcbiAgICAgIFwibWF0ZXJpYWxcIjogXCJMYWJvci1tYW51YWxcIlxuICAgIH0sXG4gICAge1xuICAgICAgXCJkZXNjcmlwdGlvblwiOiBcIidEb2xsYXIgZXN0aW1hdGUgb2YgcmVwYWlycydcIixcbiAgICAgIFwiY2xhc3NcIjogXCJjdXN0b21cIixcbiAgICAgIFwidW5pdFwiOiBcInVzJFwiLFxuICAgICAgXCJtYXRlcmlhbFwiOiBcInJlcGFpciZsdWJlXCJcbiAgICB9LFxuICAgIHtcbiAgICAgIFwiZGVzY3JpcHRpb25cIjogXCInRG9sbGFyIGVzdGltYXRlIG9mIHBlc3RpY2lkZSB1c2UnXCIsXG4gICAgICBcImNsYXNzXCI6IFwiY3VzdG9tXCIsXG4gICAgICBcInVuaXRcIjogXCJ1cyRcIixcbiAgICAgIFwibWF0ZXJpYWxcIjogXCJwZXN0aWNpZGVzXCJcbiAgICB9LFxuICAgIHtcbiAgICAgIFwiZGVzY3JpcHRpb25cIjogXCInRG9sbGFyIGVzdGltYXRlIG9mIGZlcnRpbGl6ZXInXCIsXG4gICAgICBcImNsYXNzXCI6IFwiY3VzdG9tXCIsXG4gICAgICBcInVuaXRcIjogXCJ1cyRcIixcbiAgICAgIFwibWF0ZXJpYWxcIjogXCJmZXJ0aWxpemVyXCJcbiAgICB9LFxuICAgIHtcbiAgICAgIFwiZGVzY3JpcHRpb25cIjogXCInRG9sbGFyIGVzdGltYXRlIG9mIG90aGVyIGNvc3RzJ1wiLFxuICAgICAgXCJjbGFzc1wiOiBcImN1c3RvbVwiLFxuICAgICAgXCJ1bml0XCI6IFwidXMkXCIsXG4gICAgICBcIm1hdGVyaWFsXCI6IFwib3RoZXJcIlxuICAgIH0sXG4gICAge1xuICAgICAgXCJkZXNjcmlwdGlvblwiOiBcIidEb2xsYXIgZXN0aW1hdGUgb2YgY29uc3VsdGluZydcIixcbiAgICAgIFwiY2xhc3NcIjogXCJjdXN0b21cIixcbiAgICAgIFwidW5pdFwiOiBcInVzJFwiLFxuICAgICAgXCJtYXRlcmlhbFwiOiBcImN1c3RvbVwiXG4gICAgfSxcbiAgICB7XG4gICAgICBcImRlc2NyaXB0aW9uXCI6IFwiJ0RvbGxhciBmdWVsIGNvc3QgZXN0aW1hdGVzJ1wiLFxuICAgICAgXCJjbGFzc1wiOiBcImN1c3RvbVwiLFxuICAgICAgXCJ1bml0XCI6IFwidXMkXCIsXG4gICAgICBcIm1hdGVyaWFsXCI6IFwiZnVlbFwiXG4gICAgfSxcbiAgICB7XG4gICAgICBcImRlc2NyaXB0aW9uXCI6IFwiJ0lycmlnYXRpb24gaW4gQWNJbiBwZXIgQWMnXCIsXG4gICAgICBcImNsYXNzXCI6IFwiY3VzdG9tXCIsXG4gICAgICBcInVuaXRcIjogXCJbaW5fdXNdLlthY3JfdXNdXCIsXG4gICAgICBcIm1hdGVyaWFsXCI6IFwiaXJyaWdhdGlvblwiXG4gICAgfVxuICBdLFxuICBcImZhcm1cIjogW1xuICAgIHtcbiAgICAgIFwic2NoZWR1bGVcIjogW1xuICAgICAgICB7XG4gICAgICAgICAgXCJvcGVyYXRpb25cIjogXCJBbm51YWwgRXN0aW1hdGVcIixcbiAgICAgICAgICBcImR1cmF0aW9uXCI6IFwiMSB5ZWFyXCIsXG4gICAgICAgICAgXCJzdGFydFwiOiBcIjIwMTUtMDEtMDFcIlxuICAgICAgICB9XG4gICAgICBdLFxuICAgICAgXCJvcGVyYXRpb25zXCI6IFtcbiAgICAgICAge1xuICAgICAgICAgIFwibWF0ZXJpYWxzXCI6IFtcbiAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgXCJub3RlXCI6IFwiXCIsXG4gICAgICAgICAgICAgIFwidW5pdFwiOiBcInVzJFwiLFxuICAgICAgICAgICAgICBcImFtb3VudFwiOiAzMi43NSxcbiAgICAgICAgICAgICAgXCJtYXRlcmlhbFwiOiBcImZlcnRpbGl6ZXJcIlxuICAgICAgICAgICAgfSxcbiAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgXCJub3RlXCI6IFwiXCIsXG4gICAgICAgICAgICAgIFwidW5pdFwiOiBcInVzJFwiLFxuICAgICAgICAgICAgICBcImFtb3VudFwiOiA5Ny4wOSxcbiAgICAgICAgICAgICAgXCJtYXRlcmlhbFwiOiBcInBlc3RpY2lkZXNcIlxuICAgICAgICAgICAgfSxcbiAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgXCJub3RlXCI6IFwiXCIsXG4gICAgICAgICAgICAgIFwidW5pdFwiOiBcInVzJFwiLFxuICAgICAgICAgICAgICBcImFtb3VudFwiOiAxLFxuICAgICAgICAgICAgICBcIm1hdGVyaWFsXCI6IFwicmVwYWlyJmx1YmVcIlxuICAgICAgICAgICAgfSxcbiAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgXCJub3RlXCI6IFwiXCIsXG4gICAgICAgICAgICAgIFwidW5pdFwiOiBcInVzJFwiLFxuICAgICAgICAgICAgICBcImFtb3VudFwiOiAzODAuNTQsXG4gICAgICAgICAgICAgIFwibWF0ZXJpYWxcIjogXCJjdXN0b21cIlxuICAgICAgICAgICAgfSxcbiAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgXCJub3RlXCI6IFwiXCIsXG4gICAgICAgICAgICAgIFwidW5pdFwiOiBcInVzJFwiLFxuICAgICAgICAgICAgICBcImFtb3VudFwiOiAxMzMsXG4gICAgICAgICAgICAgIFwibWF0ZXJpYWxcIjogXCJvdGhlclwiXG4gICAgICAgICAgICB9LFxuICAgICAgICAgICAge1xuICAgICAgICAgICAgICBcIm5vdGVcIjogXCJcIixcbiAgICAgICAgICAgICAgXCJ1bml0XCI6IFwiaFwiLFxuICAgICAgICAgICAgICBcImFtb3VudFwiOiAwLjU4LFxuICAgICAgICAgICAgICBcIm1hdGVyaWFsXCI6IFwiTGFib3ItbWFjaGluZVwiXG4gICAgICAgICAgICB9LFxuICAgICAgICAgICAge1xuICAgICAgICAgICAgICBcIm5vdGVcIjogXCJcIixcbiAgICAgICAgICAgICAgXCJ1bml0XCI6IFwiaFwiLFxuICAgICAgICAgICAgICBcImFtb3VudFwiOiAxLjgyLFxuICAgICAgICAgICAgICBcIm1hdGVyaWFsXCI6IFwiTGFib3ItbWFudWFsXCJcbiAgICAgICAgICAgIH0sXG4gICAgICAgICAgICB7XG4gICAgICAgICAgICAgIFwibm90ZVwiOiBcIlwiLFxuICAgICAgICAgICAgICBcInVuaXRcIjogXCJbaW5fdXNdLlthY3JfdXNdXCIsXG4gICAgICAgICAgICAgIFwiYW1vdW50XCI6IDQuNSxcbiAgICAgICAgICAgICAgXCJtYXRlcmlhbFwiOiBcImlycmlnYXRpb25cIlxuICAgICAgICAgICAgfSxcbiAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgXCJub3RlXCI6IFwiXCIsXG4gICAgICAgICAgICAgIFwidW5pdFwiOiBcIltnYWxfdXNdXCIsXG4gICAgICAgICAgICAgIFwiYW1vdW50XCI6IDEuMTUsXG4gICAgICAgICAgICAgIFwibWF0ZXJpYWxcIjogXCJmdWVsXCJcbiAgICAgICAgICAgIH1cbiAgICAgICAgICBdLFxuICAgICAgICAgIFwib3BlcmF0aW9uXCI6IFwiQW5udWFsIEVzdGltYXRlXCJcbiAgICAgICAgfVxuICAgICAgXSxcbiAgICAgIFwidW5pdFwiOiBcIlthY3JfdXNdXCIsXG4gICAgICBcInNpemVcIjogXCIxXCIsXG4gICAgICBcImNvbW1vZGl0eVwiOiBcIkFMRkFMRkFcIixcbiAgICAgIFwibG9jYXRpb25cIjogXCIwNlwiLFxuICAgICAgXCJmYXJtXCI6IFwiMDYvQUxGQUxGQVwiXG4gICAgfVxuICBdXG59XG4iLCJtb2R1bGUuZXhwb3J0cz17XG4gIFwicHJpY2VzXCI6IFtcbiAgICB7XG4gICAgICBcInVuaXRcIjogXCJ1cyQvdXMkXCIsXG4gICAgICBcInByaWNlXCI6IDEsXG4gICAgICBcIm1hdGVyaWFsXCI6IFwiZXN0aW1hdGVcIlxuICAgIH0sXG4gICAge1xuICAgICAgXCJ1bml0XCI6IFwidXMkL1tnYWxfdXNdXCIsXG4gICAgICBcInByaWNlXCI6IDIuNjgsXG4gICAgICBcIm1hdGVyaWFsXCI6IFwiZnVlbFwiXG4gICAgfSxcbiAgICB7XG4gICAgICBcInVuaXRcIjogXCJ1cyQvKFtpbl91c10uW2Fjcl91c10pXCIsXG4gICAgICBcInByaWNlXCI6IDExMi44NixcbiAgICAgIFwibWF0ZXJpYWxcIjogXCJpcnJpZ2F0aW9uXCJcbiAgICB9LFxuICAgIHtcbiAgICAgIFwidW5pdFwiOiBcInVzJC9oXCIsXG4gICAgICBcInByaWNlXCI6IDkuNDIsXG4gICAgICBcIm1hdGVyaWFsXCI6IFwiTGFib3ItbWFjaGluZVwiXG4gICAgfSxcbiAgICB7XG4gICAgICBcInVuaXRcIjogXCJ1cyQvaFwiLFxuICAgICAgXCJwcmljZVwiOiA3LjI1LFxuICAgICAgXCJtYXRlcmlhbFwiOiBcIkxhYm9yLW1hbnVhbFwiXG4gICAgfVxuICBdLFxuICBcIm1hdGVyaWFsc1wiOiBbXG4gICAge1xuICAgICAgXCJkZXNjcmlwdGlvblwiOiBcIk1hbnVhbCBMYWJvciAobWluaW11bSB3YWdlKVwiLFxuICAgICAgXCJjbGFzc1wiOiBcImxhYm9yXCIsXG4gICAgICBcInVuaXRcIjogXCJoXCIsXG4gICAgICBcIm1hdGVyaWFsXCI6IFwiTGFib3ItbWFjaGluZVwiXG4gICAgfSxcbiAgICB7XG4gICAgICBcImRlc2NyaXB0aW9uXCI6IFwiTWFjaGluZSBMYWJvciAoJTEzMCBvZiBtaW5pbXVtKVwiLFxuICAgICAgXCJjbGFzc1wiOiBcImxhYm9yXCIsXG4gICAgICBcInVuaXRcIjogXCJoXCIsXG4gICAgICBcIm1hdGVyaWFsXCI6IFwiTGFib3ItbWFudWFsXCJcbiAgICB9LFxuICAgIHtcbiAgICAgIFwiZGVzY3JpcHRpb25cIjogXCJEb2xsYXIgZXN0aW1hdGVcIixcbiAgICAgIFwiY2xhc3NcIjogXCJjdXN0b21cIixcbiAgICAgIFwidW5pdFwiOiBcInVzJFwiLFxuICAgICAgXCJtYXRlcmlhbFwiOiBcImVzdGltYXRlXCJcbiAgICB9LFxuICAgIHtcbiAgICAgIFwiZGVzY3JpcHRpb25cIjogXCJJcnJpZ2F0aW9uIGluIEFjSW4gcGVyIEFjXCIsXG4gICAgICBcImNsYXNzXCI6IFwiY3VzdG9tXCIsXG4gICAgICBcInVuaXRcIjogXCJbaW5fdXNdLlthY3JfdXNdXCIsXG4gICAgICBcIm1hdGVyaWFsXCI6IFwiaXJyaWdhdGlvblwiXG4gICAgfSxcbiAgICB7XG4gICAgICBcImRlc2NyaXB0aW9uXCI6IFwiRnVlbCBmb3IgRXF1aXBtZW50XCIsXG4gICAgICBcImNsYXNzXCI6IFwiZnVlbFwiLFxuICAgICAgXCJ1bml0XCI6IFwiW2dhbF91c11cIixcbiAgICAgIFwibWF0ZXJpYWxcIjogXCJmdWVsXCJcbiAgICB9XG4gIF0sXG4gIFwiZmFybVwiOiBbXG4gICAge1xuICAgICAgXCJzY2hlZHVsZVwiOiBbXG4gICAgICAgIHtcbiAgICAgICAgICBcIm9wZXJhdGlvblwiOiBcIkFubnVhbCBFc3RpbWF0ZVwiLFxuICAgICAgICAgIFwiZHVyYXRpb25cIjogXCIxIHllYXJcIixcbiAgICAgICAgICBcInN0YXJ0XCI6IFwiMjAxNS0wMS0wMVwiXG4gICAgICAgIH1cbiAgICAgIF0sXG4gICAgICBcIm9wZXJhdGlvbnNcIjogW1xuICAgICAgICB7XG4gICAgICAgICAgXCJtYXRlcmlhbHNcIjogW1xuICAgICAgICAgICAge1xuICAgICAgICAgICAgICBcIm5vdGVcIjogXCJyZXBhaXImbHViZVwiLFxuICAgICAgICAgICAgICBcInVuaXRcIjogXCJ1cyRcIixcbiAgICAgICAgICAgICAgXCJhbW91bnRcIjogMSxcbiAgICAgICAgICAgICAgXCJtYXRlcmlhbFwiOiBcImVzdGltYXRlXCJcbiAgICAgICAgICAgIH0sXG4gICAgICAgICAgICB7XG4gICAgICAgICAgICAgIFwibm90ZVwiOiBcImZlcnRpbGl6ZXJcIixcbiAgICAgICAgICAgICAgXCJ1bml0XCI6IFwidXMkXCIsXG4gICAgICAgICAgICAgIFwiYW1vdW50XCI6IDMyLjc1LFxuICAgICAgICAgICAgICBcIm1hdGVyaWFsXCI6IFwiZXN0aW1hdGVcIlxuICAgICAgICAgICAgfSxcbiAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgXCJub3RlXCI6IFwicGVzdGljaWRlc1wiLFxuICAgICAgICAgICAgICBcInVuaXRcIjogXCJ1cyRcIixcbiAgICAgICAgICAgICAgXCJhbW91bnRcIjogOTcuMDksXG4gICAgICAgICAgICAgIFwibWF0ZXJpYWxcIjogXCJlc3RpbWF0ZVwiXG4gICAgICAgICAgICB9LFxuICAgICAgICAgICAge1xuICAgICAgICAgICAgICBcIm5vdGVcIjogXCJvdGhlclwiLFxuICAgICAgICAgICAgICBcInVuaXRcIjogXCJ1cyRcIixcbiAgICAgICAgICAgICAgXCJhbW91bnRcIjogMTMzLFxuICAgICAgICAgICAgICBcIm1hdGVyaWFsXCI6IFwiZXN0aW1hdGVcIlxuICAgICAgICAgICAgfSxcbiAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgXCJub3RlXCI6IFwiY3VzdG9tXCIsXG4gICAgICAgICAgICAgIFwidW5pdFwiOiBcInVzJFwiLFxuICAgICAgICAgICAgICBcImFtb3VudFwiOiAzODAuNTQsXG4gICAgICAgICAgICAgIFwibWF0ZXJpYWxcIjogXCJlc3RpbWF0ZVwiXG4gICAgICAgICAgICB9LFxuICAgICAgICAgICAge1xuICAgICAgICAgICAgICBcIm5vdGVcIjogXCJcIixcbiAgICAgICAgICAgICAgXCJ1bml0XCI6IFwiW2dhbF91c11cIixcbiAgICAgICAgICAgICAgXCJhbW91bnRcIjogMS4xNSxcbiAgICAgICAgICAgICAgXCJtYXRlcmlhbFwiOiBcImZ1ZWxcIlxuICAgICAgICAgICAgfSxcbiAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgXCJub3RlXCI6IFwiXCIsXG4gICAgICAgICAgICAgIFwidW5pdFwiOiBcIltpbl91c10uW2Fjcl91c11cIixcbiAgICAgICAgICAgICAgXCJhbW91bnRcIjogNC41LFxuICAgICAgICAgICAgICBcIm1hdGVyaWFsXCI6IFwiaXJyaWdhdGlvblwiXG4gICAgICAgICAgICB9LFxuICAgICAgICAgICAge1xuICAgICAgICAgICAgICBcIm5vdGVcIjogXCJcIixcbiAgICAgICAgICAgICAgXCJ1bml0XCI6IFwiaFwiLFxuICAgICAgICAgICAgICBcImFtb3VudFwiOiAwLjU4LFxuICAgICAgICAgICAgICBcIm1hdGVyaWFsXCI6IFwiTGFib3ItbWFjaGluZVwiXG4gICAgICAgICAgICB9LFxuICAgICAgICAgICAge1xuICAgICAgICAgICAgICBcIm5vdGVcIjogXCJcIixcbiAgICAgICAgICAgICAgXCJ1bml0XCI6IFwiaFwiLFxuICAgICAgICAgICAgICBcImFtb3VudFwiOiAxLjgyLFxuICAgICAgICAgICAgICBcIm1hdGVyaWFsXCI6IFwiTGFib3ItbWFudWFsXCJcbiAgICAgICAgICAgIH1cbiAgICAgICAgICBdLFxuICAgICAgICAgIFwib3BlcmF0aW9uXCI6IFwiQW5udWFsIEVzdGltYXRlXCJcbiAgICAgICAgfVxuICAgICAgXSxcbiAgICAgIFwidW5pdFwiOiBcIlthY3JfdXNdXCIsXG4gICAgICBcInNpemVcIjogXCIxXCIsXG4gICAgICBcImNvbW1vZGl0eVwiOiBcIkFMRkFMRkFcIixcbiAgICAgIFwibG9jYXRpb25cIjogXCIwNlwiLFxuICAgICAgXCJmYXJtXCI6IFwiMDYvQUxGQUxGQVwiXG4gICAgfVxuICBdXG59XG4iLCJtb2R1bGUuZXhwb3J0cz17XG4gICAgXCJhcHBsaWNhdGlvblwiOlwiZmFybS1idWRnZXRzXCJcbn1cbiIsIm1vZHVsZS5leHBvcnRzPXtcbiAgXCJwcmljZXNcIjogW1xuICAgIHtcbiAgICAgIFwidW5pdFwiOiBcInVzJC9bcXRfdXNdXCIsXG4gICAgICBcInByaWNlXCI6IDUsXG4gICAgICBcIm1hdGVyaWFsXCI6IFwiMiw0LURcIlxuICAgIH0sXG4gICAge1xuICAgICAgXCJ1bml0XCI6IFwidXMkL2hcIixcbiAgICAgIFwicHJpY2VcIjogOTAsXG4gICAgICBcIm1hdGVyaWFsXCI6IFwiQ2hhbGxlbmdlciBUcmFjdG9yLS1DYXBpdG9sIENvc3RcIlxuICAgIH0sXG4gICAge1xuICAgICAgXCJ1bml0XCI6IFwidXMkL2hcIixcbiAgICAgIFwicHJpY2VcIjogOTAsXG4gICAgICBcIm1hdGVyaWFsXCI6IFwiU2VtaS1UcmFjdG9yIHRyYWlsZXItLUNhcGl0b2wgQ29zdFwiXG4gICAgfSxcbiAgICB7XG4gICAgICBcInVuaXRcIjogXCJ1cyQvaFwiLFxuICAgICAgXCJwcmljZVwiOiA5MCxcbiAgICAgIFwibWF0ZXJpYWxcIjogXCJGUiA2MDgwIEZILS1DYXBpdG9sIENvc3RcIlxuICAgIH0sXG4gICAge1xuICAgICAgXCJ1bml0XCI6IFwidXMkL2hcIixcbiAgICAgIFwicHJpY2VcIjogOTAsXG4gICAgICBcIm1hdGVyaWFsXCI6IFwiVGFuZGVtIEF4bGUgVHJ1Y2stLUNhcGl0b2wgQ29zdFwiXG4gICAgfSxcbiAgICB7XG4gICAgICBcInVuaXRcIjogXCJ1cyQvaFwiLFxuICAgICAgXCJwcmljZVwiOiAxNSxcbiAgICAgIFwibWF0ZXJpYWxcIjogXCJDb29sZXIvdmFuLS1DYXBpdG9sIENvc3RcIlxuICAgIH0sXG4gICAge1xuICAgICAgXCJ1bml0XCI6IFwidXMkL2hcIixcbiAgICAgIFwicHJpY2VcIjogMzUsXG4gICAgICBcIm1hdGVyaWFsXCI6IFwiQ2hhbGxlbmdlciBUcmFjdG9yLS1MYWJvclwiXG4gICAgfSxcbiAgICB7XG4gICAgICBcInVuaXRcIjogXCJ1cyQvaFwiLFxuICAgICAgXCJwcmljZVwiOiAzNSxcbiAgICAgIFwibWF0ZXJpYWxcIjogXCJGUiA2MDgwIEZILS1MYWJvclwiXG4gICAgfSxcbiAgICB7XG4gICAgICBcInVuaXRcIjogXCJ1cyQvaFwiLFxuICAgICAgXCJwcmljZVwiOiAzNSxcbiAgICAgIFwibWF0ZXJpYWxcIjogXCJUYW5kZW0gQXhsZSBUcnVjay0tTGFib3JcIlxuICAgIH0sXG4gICAge1xuICAgICAgXCJ1bml0XCI6IFwidXMkL2hcIixcbiAgICAgIFwicHJpY2VcIjogMzUsXG4gICAgICBcIm1hdGVyaWFsXCI6IFwiU2VtaS1UcmFjdG9yIHRyYWlsZXItLUxhYm9yXCJcbiAgICB9LFxuICAgIHtcbiAgICAgIFwidW5pdFwiOiBcInVzJC9oXCIsXG4gICAgICBcInByaWNlXCI6IDEwLFxuICAgICAgXCJtYXRlcmlhbFwiOiBcIkNvb2xlci92YW4tLUxhYm9yXCJcbiAgICB9LFxuICAgIHtcbiAgICAgIFwidW5pdFwiOiBcInVzJC9oXCIsXG4gICAgICBcInByaWNlXCI6IDEuMixcbiAgICAgIFwibWF0ZXJpYWxcIjogXCJDb29sZXIvdmFuXCJcbiAgICB9LFxuICAgIHtcbiAgICAgIFwidW5pdFwiOiBcInVzJC9bZ2FsX3VzXVwiLFxuICAgICAgXCJwcmljZVwiOiAyLjgxLFxuICAgICAgXCJtYXRlcmlhbFwiOiBcIkVxdWlwbWVudCBGdWVsXCJcbiAgICB9LFxuICAgIHtcbiAgICAgIFwidW5pdFwiOiBcInVzJC9oXCIsXG4gICAgICBcInByaWNlXCI6IDMwLFxuICAgICAgXCJtYXRlcmlhbFwiOiBcIkZSIDYwODAgRkhcIlxuICAgIH0sXG4gICAge1xuICAgICAgXCJ1bml0XCI6IFwidXMkL1txdF91c11cIixcbiAgICAgIFwicHJpY2VcIjogNCxcbiAgICAgIFwibWF0ZXJpYWxcIjogXCJHbHlwaG9zYXRlXCJcbiAgICB9LFxuICAgIHtcbiAgICAgIFwidW5pdFwiOiBcInVzJC9bcXRfdXNdXCIsXG4gICAgICBcInByaWNlXCI6IDMwLFxuICAgICAgXCJtYXRlcmlhbFwiOiBcIkdvYWwgMlhMXCJcbiAgICB9LFxuICAgIHtcbiAgICAgIFwidW5pdFwiOiBcInVzJC9oXCIsXG4gICAgICBcInByaWNlXCI6IDE3LFxuICAgICAgXCJtYXRlcmlhbFwiOiBcIkxhYm9yZXJcIlxuICAgIH0sXG4gICAge1xuICAgICAgXCJ1bml0XCI6IFwidXMkLzFcIixcbiAgICAgIFwicHJpY2VcIjogMC4wOCxcbiAgICAgIFwibWF0ZXJpYWxcIjogXCJQb3BsYXIgQ3V0dGluZ1wiXG4gICAgfSxcbiAgICB7XG4gICAgICBcInVuaXRcIjogXCJ1cyQvaFwiLFxuICAgICAgXCJwcmljZVwiOiAyNSxcbiAgICAgIFwibWF0ZXJpYWxcIjogXCJTdXBwb3J0IFRydWNrLS1DYXBpdG9sIENvc3RcIlxuICAgIH0sXG4gICAge1xuICAgICAgXCJ1bml0XCI6IFwidXMkL2hcIixcbiAgICAgIFwicHJpY2VcIjogMzAsXG4gICAgICBcIm1hdGVyaWFsXCI6IFwiU3VwcG9ydCBUcnVjay0tTGFib3JcIlxuICAgIH0sXG4gICAge1xuICAgICAgXCJ1bml0XCI6IFwidXMkL2hcIixcbiAgICAgIFwicHJpY2VcIjogNTAsXG4gICAgICBcIm1hdGVyaWFsXCI6IFwiVHJhY3RvciBhbmQgc3ByYXllclwiXG4gICAgfSxcbiAgICB7XG4gICAgICBcInVuaXRcIjogXCJ1cyQvW3F0X3VzXVwiLFxuICAgICAgXCJwcmljZVwiOiA3LjUsXG4gICAgICBcIm1hdGVyaWFsXCI6IFwiVHJpZmx1cmFsaW5cIlxuICAgIH1cbiAgXSxcbiAgXCJtYXRlcmlhbHNcIjogW1xuICAgIHtcbiAgICAgIFwiY2xhc3NcIjogXCJmZXJ0aWxpemVyXCIsXG4gICAgICBcInVuaXRcIjogXCJbcXRfdXNdXCIsXG4gICAgICBcIm1hdGVyaWFsXCI6IFwiMiw0LURcIlxuICAgIH0sXG4gICAge1xuICAgICAgXCJyZXF1aXJlc1wiOiBbXG4gICAgICAgIHtcbiAgICAgICAgICBcInVuaXRcIjogXCJbZ2FsX3VzXVwiLFxuICAgICAgICAgIFwiYW1vdW50XCI6IDE5LjM2LFxuICAgICAgICAgIFwibWF0ZXJpYWxcIjogXCJFcXVpcG1lbnQgRnVlbFwiXG4gICAgICAgIH0sXG4gICAgICAgIHtcbiAgICAgICAgICBcInVuaXRcIjogXCJoXCIsXG4gICAgICAgICAgXCJhbW91bnRcIjogMSxcbiAgICAgICAgICBcIm1hdGVyaWFsXCI6IFwiQ2hhbGxlbmdlciBUcmFjdG9yLS1DYXBpdG9sIENvc3RcIlxuICAgICAgICB9LFxuICAgICAgICB7XG4gICAgICAgICAgXCJ1bml0XCI6IFwiaFwiLFxuICAgICAgICAgIFwiYW1vdW50XCI6IDEsXG4gICAgICAgICAgXCJtYXRlcmlhbFwiOiBcIkNoYWxsZW5nZXIgVHJhY3Rvci0tTGFib3JcIlxuICAgICAgICB9XG4gICAgICBdLFxuICAgICAgXCJjbGFzc1wiOiBcImVxdWlwbWVudFwiLFxuICAgICAgXCJ1bml0XCI6IFwiaFwiLFxuICAgICAgXCJtYXRlcmlhbFwiOiBcIkNoYWxsZW5nZXIgVHJhY3RvclwiXG4gICAgfSxcbiAgICB7XG4gICAgICBcInJlcXVpcmVzXCI6IFtcbiAgICAgICAge1xuICAgICAgICAgIFwidW5pdFwiOiBcImhcIixcbiAgICAgICAgICBcImFtb3VudFwiOiAxLFxuICAgICAgICAgIFwibWF0ZXJpYWxcIjogXCJDb29sZXIvdmFuLS1MYWJvclwiXG4gICAgICAgIH0sXG4gICAgICAgIHtcbiAgICAgICAgICBcInVuaXRcIjogXCJoXCIsXG4gICAgICAgICAgXCJhbW91bnRcIjogMSxcbiAgICAgICAgICBcIm1hdGVyaWFsXCI6IFwiQ29vbGVyL3Zhbi0tQ2FwaXRvbCBDb3N0XCJcbiAgICAgICAgfSxcbiAgICAgICAge1xuICAgICAgICAgIFwidW5pdFwiOiBcIltnYWxfdXNdXCIsXG4gICAgICAgICAgXCJhbW91bnRcIjogMC45NixcbiAgICAgICAgICBcIm1hdGVyaWFsXCI6IFwiRXF1aXBtZW50IEZ1ZWxcIlxuICAgICAgICB9XG4gICAgICBdLFxuICAgICAgXCJjbGFzc1wiOiBcImVxdWlwbWVudFwiLFxuICAgICAgXCJ1bml0XCI6IFwiaFwiLFxuICAgICAgXCJtYXRlcmlhbFwiOiBcIkNvb2xlci92YW5cIlxuICAgIH0sXG4gICAge1xuICAgICAgXCJyZXF1aXJlc1wiOiBbXG4gICAgICAgIHtcbiAgICAgICAgICBcInVuaXRcIjogXCJbZ2FsX3VzXVwiLFxuICAgICAgICAgIFwiYW1vdW50XCI6IDEzLjIsXG4gICAgICAgICAgXCJtYXRlcmlhbFwiOiBcIkVxdWlwbWVudCBGdWVsXCJcbiAgICAgICAgfSxcbiAgICAgICAge1xuICAgICAgICAgIFwidW5pdFwiOiBcImhcIixcbiAgICAgICAgICBcImFtb3VudFwiOiAxLFxuICAgICAgICAgIFwibWF0ZXJpYWxcIjogXCJGUiA2MDgwIEZILS1MYWJvclwiXG4gICAgICAgIH0sXG4gICAgICAgIHtcbiAgICAgICAgICBcInVuaXRcIjogXCJoXCIsXG4gICAgICAgICAgXCJhbW91bnRcIjogMSxcbiAgICAgICAgICBcIm1hdGVyaWFsXCI6IFwiRlIgNjA4MCBGSC0tQ2FwaXRvbCBDb3N0XCJcbiAgICAgICAgfVxuICAgICAgXSxcbiAgICAgIFwiY2xhc3NcIjogXCJlcXVpcG1lbnRcIixcbiAgICAgIFwidW5pdFwiOiBcImhcIixcbiAgICAgIFwibWF0ZXJpYWxcIjogXCJGUiA2MDgwIEZIXCJcbiAgICB9LFxuICAgIHtcbiAgICAgIFwiY2xhc3NcIjogXCJwZXN0aWNpZGVcIixcbiAgICAgIFwidW5pdFwiOiBcIltxdF91c11cIixcbiAgICAgIFwibWF0ZXJpYWxcIjogXCJHbHlwaG9zYXRlXCJcbiAgICB9LFxuICAgIHtcbiAgICAgIFwiY2xhc3NcIjogXCJwZXN0aWNpZGVcIixcbiAgICAgIFwidW5pdFwiOiBcIltxdF91c11cIixcbiAgICAgIFwibWF0ZXJpYWxcIjogXCJHb2FsIDJYTFwiXG4gICAgfSxcbiAgICB7XG4gICAgICBcInJlcXVpcmVzXCI6IFtcbiAgICAgICAge1xuICAgICAgICAgIFwidW5pdFwiOiBcIltxdF91c11cIixcbiAgICAgICAgICBcImFtb3VudFwiOiAyMDAsXG4gICAgICAgICAgXCJtYXRlcmlhbFwiOiBcIkdseXBob3NhdGVcIlxuICAgICAgICB9LFxuICAgICAgICB7XG4gICAgICAgICAgXCJ1bml0XCI6IFwiaFwiLFxuICAgICAgICAgIFwiYW1vdW50XCI6IDk2LFxuICAgICAgICAgIFwibWF0ZXJpYWxcIjogXCJMYWJvcmVyXCJcbiAgICAgICAgfVxuICAgICAgXSxcbiAgICAgIFwiZGVzY3JpcHRpb25cIjogXCJNYW51YWwgQXBwbGljYXRpb24gb2YgaGVyYmljaWRlXCIsXG4gICAgICBcImNsYXNzXCI6IFwiaGVyYmljaWRlXCIsXG4gICAgICBcInVuaXRcIjogXCIxMDAuW2Fjcl91c11cIixcbiAgICAgIFwibWF0ZXJpYWxcIjogXCJoZXJiaWNpZGUgLSBtYW51YWxcIlxuICAgIH0sXG4gICAge1xuICAgICAgXCJyZXF1aXJlc1wiOiBbXG4gICAgICAgIHtcbiAgICAgICAgICBcInVuaXRcIjogXCJoXCIsXG4gICAgICAgICAgXCJhbW91bnRcIjogMTkyLFxuICAgICAgICAgIFwibWF0ZXJpYWxcIjogXCJMYWJvcmVyXCJcbiAgICAgICAgfVxuICAgICAgXSxcbiAgICAgIFwiY2xhc3NcIjogXCJsYWJvclwiLFxuICAgICAgXCJ1bml0XCI6IFwiMTAwLlthY3JfdXNdXCIsXG4gICAgICBcIm1hdGVyaWFsXCI6IFwiaG9laW5nXCJcbiAgICB9LFxuICAgIHtcbiAgICAgIFwiY2xhc3NcIjogXCJsYWJvclwiLFxuICAgICAgXCJ1bml0XCI6IFwiaFwiLFxuICAgICAgXCJtYXRlcmlhbFwiOiBcIkxhYm9yZXJcIlxuICAgIH0sXG4gICAge1xuICAgICAgXCJyZXF1aXJlc1wiOiBbXG4gICAgICAgIHtcbiAgICAgICAgICBcInVuaXRcIjogXCJbZ2FsX3VzXVwiLFxuICAgICAgICAgIFwiYW1vdW50XCI6IDEzLjIsXG4gICAgICAgICAgXCJtYXRlcmlhbFwiOiBcIkVxdWlwbWVudCBGdWVsXCJcbiAgICAgICAgfSxcbiAgICAgICAge1xuICAgICAgICAgIFwidW5pdFwiOiBcImhcIixcbiAgICAgICAgICBcImFtb3VudFwiOiAxLFxuICAgICAgICAgIFwibWF0ZXJpYWxcIjogXCJMYXJnZSBUcmFjdG9yLS1DYXBpdG9sIENvc3RcIlxuICAgICAgICB9LFxuICAgICAgICB7XG4gICAgICAgICAgXCJ1bml0XCI6IFwiaFwiLFxuICAgICAgICAgIFwiYW1vdW50XCI6IDEsXG4gICAgICAgICAgXCJtYXRlcmlhbFwiOiBcIkxhcmdlIFRyYWN0b3ItLUxhYm9yXCJcbiAgICAgICAgfVxuICAgICAgXSxcbiAgICAgIFwiY2xhc3NcIjogXCJlcXVpcG1lbnRcIixcbiAgICAgIFwidW5pdFwiOiBcImhcIixcbiAgICAgIFwibWF0ZXJpYWxcIjogXCJMYXJnZSBUcmFjdG9yXCJcbiAgICB9LFxuICAgIHtcbiAgICAgIFwicmVxdWlyZXNcIjogW1xuICAgICAgICB7XG4gICAgICAgICAgXCJ1bml0XCI6IFwiaFwiLFxuICAgICAgICAgIFwiYW1vdW50XCI6IDEsXG4gICAgICAgICAgXCJtYXRlcmlhbFwiOiBcIk1pZC1zaXplIFRyYWN0b3ItLUNhcGl0b2wgQ29zdFwiXG4gICAgICAgIH0sXG4gICAgICAgIHtcbiAgICAgICAgICBcInVuaXRcIjogXCJoXCIsXG4gICAgICAgICAgXCJhbW91bnRcIjogMSxcbiAgICAgICAgICBcIm1hdGVyaWFsXCI6IFwiTWlkLXNpemUgVHJhY3Rvci0tTGFib3JcIlxuICAgICAgICB9LFxuICAgICAgICB7XG4gICAgICAgICAgXCJ1bml0XCI6IFwiW2dhbF91c11cIixcbiAgICAgICAgICBcImFtb3VudFwiOiAzLjk2LFxuICAgICAgICAgIFwibWF0ZXJpYWxcIjogXCJFcXVpcG1lbnQgRnVlbFwiXG4gICAgICAgIH1cbiAgICAgIF0sXG4gICAgICBcImNsYXNzXCI6IFwiZXF1aXBtZW50XCIsXG4gICAgICBcInVuaXRcIjogXCJoXCIsXG4gICAgICBcIm1hdGVyaWFsXCI6IFwiTWlkLXNpemUgVHJhY3RvclwiXG4gICAgfSxcbiAgICB7XG4gICAgICBcImRlc2NyaXB0aW9uXCI6IFwiUG9wbGFyIGN1dHRpbmcgZm9yIHBsYW50aW5nXCIsXG4gICAgICBcImNsYXNzXCI6IFwic2VlZFwiLFxuICAgICAgXCJ1bml0XCI6IFwiMVwiLFxuICAgICAgXCJtYXRlcmlhbFwiOiBcIlBvcGxhciBDdXR0aW5nXCJcbiAgICB9LFxuICAgIHtcbiAgICAgIFwicmVxdWlyZXNcIjogW1xuICAgICAgICB7XG4gICAgICAgICAgXCJ1bml0XCI6IFwiaFwiLFxuICAgICAgICAgIFwiYW1vdW50XCI6IDEsXG4gICAgICAgICAgXCJtYXRlcmlhbFwiOiBcIlNlbWktVHJhY3RvciB0cmFpbGVyLS1DYXBpdG9sIENvc3RcIlxuICAgICAgICB9LFxuICAgICAgICB7XG4gICAgICAgICAgXCJ1bml0XCI6IFwiW2dhbF91c11cIixcbiAgICAgICAgICBcImFtb3VudFwiOiA2LjUsXG4gICAgICAgICAgXCJtYXRlcmlhbFwiOiBcIkVxdWlwbWVudCBGdWVsXCJcbiAgICAgICAgfSxcbiAgICAgICAge1xuICAgICAgICAgIFwidW5pdFwiOiBcImhcIixcbiAgICAgICAgICBcImFtb3VudFwiOiAxLFxuICAgICAgICAgIFwibWF0ZXJpYWxcIjogXCJTZW1pLVRyYWN0b3IgdHJhaWxlci0tTGFib3JcIlxuICAgICAgICB9XG4gICAgICBdLFxuICAgICAgXCJjbGFzc1wiOiBcImVxdWlwbWVudFwiLFxuICAgICAgXCJ1bml0XCI6IFwiaFwiLFxuICAgICAgXCJtYXRlcmlhbFwiOiBcIlNlbWktVHJhY3RvciB0cmFpbGVyXCJcbiAgICB9LFxuICAgIHtcbiAgICAgIFwicmVxdWlyZXNcIjogW1xuICAgICAgICB7XG4gICAgICAgICAgXCJ1bml0XCI6IFwiW2dhbF91c11cIixcbiAgICAgICAgICBcImFtb3VudFwiOiAxLjk4LFxuICAgICAgICAgIFwibWF0ZXJpYWxcIjogXCJFcXVpcG1lbnQgRnVlbFwiXG4gICAgICAgIH0sXG4gICAgICAgIHtcbiAgICAgICAgICBcInVuaXRcIjogXCJoXCIsXG4gICAgICAgICAgXCJhbW91bnRcIjogMSxcbiAgICAgICAgICBcIm1hdGVyaWFsXCI6IFwiU21hbGwgVHJhY3Rvci0tTGFib3JcIlxuICAgICAgICB9LFxuICAgICAgICB7XG4gICAgICAgICAgXCJ1bml0XCI6IFwiaFwiLFxuICAgICAgICAgIFwiYW1vdW50XCI6IDEsXG4gICAgICAgICAgXCJtYXRlcmlhbFwiOiBcIlNtYWxsIFRyYWN0b3ItLUNhcGl0b2wgQ29zdFwiXG4gICAgICAgIH1cbiAgICAgIF0sXG4gICAgICBcImNsYXNzXCI6IFwiZXF1aXBtZW50XCIsXG4gICAgICBcInVuaXRcIjogXCJoXCIsXG4gICAgICBcIm1hdGVyaWFsXCI6IFwiU21hbGwgVHJhY3RvclwiXG4gICAgfSxcbiAgICB7XG4gICAgICBcInJlcXVpcmVzXCI6IFtcbiAgICAgICAge1xuICAgICAgICAgIFwidW5pdFwiOiBcImhcIixcbiAgICAgICAgICBcImFtb3VudFwiOiAxLFxuICAgICAgICAgIFwibWF0ZXJpYWxcIjogXCJTdXBwb3J0IFRydWNrLS1DYXBpdG9sIENvc3RcIlxuICAgICAgICB9LFxuICAgICAgICB7XG4gICAgICAgICAgXCJ1bml0XCI6IFwiaFwiLFxuICAgICAgICAgIFwiYW1vdW50XCI6IDEsXG4gICAgICAgICAgXCJtYXRlcmlhbFwiOiBcIlN1cHBvcnQgVHJ1Y2stLUxhYm9yXCJcbiAgICAgICAgfSxcbiAgICAgICAge1xuICAgICAgICAgIFwidW5pdFwiOiBcIltnYWxfdXNdXCIsXG4gICAgICAgICAgXCJhbW91bnRcIjogMS43NixcbiAgICAgICAgICBcIm1hdGVyaWFsXCI6IFwiRXF1aXBtZW50IEZ1ZWxcIlxuICAgICAgICB9XG4gICAgICBdLFxuICAgICAgXCJjbGFzc1wiOiBcImVxdWlwbWVudFwiLFxuICAgICAgXCJ1bml0XCI6IFwiaFwiLFxuICAgICAgXCJtYXRlcmlhbFwiOiBcIlN1cHBvcnQgVHJ1Y2tcIlxuICAgIH0sXG4gICAge1xuICAgICAgXCJyZXF1aXJlc1wiOiBbXG4gICAgICAgIHtcbiAgICAgICAgICBcInVuaXRcIjogXCJoXCIsXG4gICAgICAgICAgXCJhbW91bnRcIjogMSxcbiAgICAgICAgICBcIm1hdGVyaWFsXCI6IFwiVGFuZGVtIEF4bGUgVHJ1Y2stLUNhcGl0b2wgQ29zdFwiXG4gICAgICAgIH0sXG4gICAgICAgIHtcbiAgICAgICAgICBcInVuaXRcIjogXCJbZ2FsX3VzXVwiLFxuICAgICAgICAgIFwiYW1vdW50XCI6IDEzLjIsXG4gICAgICAgICAgXCJtYXRlcmlhbFwiOiBcIkVxdWlwbWVudCBGdWVsXCJcbiAgICAgICAgfSxcbiAgICAgICAge1xuICAgICAgICAgIFwidW5pdFwiOiBcImhcIixcbiAgICAgICAgICBcImFtb3VudFwiOiAxLFxuICAgICAgICAgIFwibWF0ZXJpYWxcIjogXCJUYW5kZW0gQXhsZSBUcnVjay0tTGFib3JcIlxuICAgICAgICB9XG4gICAgICBdLFxuICAgICAgXCJjbGFzc1wiOiBcImVxdWlwbWVudFwiLFxuICAgICAgXCJ1bml0XCI6IFwiaFwiLFxuICAgICAgXCJtYXRlcmlhbFwiOiBcIlRhbmRlbSBBeGxlIFRydWNrXCJcbiAgICB9LFxuICAgIHtcbiAgICAgIFwicmVxdWlyZXNcIjogW1xuICAgICAgICB7XG4gICAgICAgICAgXCJ1bml0XCI6IFwiW2dhbF91c11cIixcbiAgICAgICAgICBcImFtb3VudFwiOiAzLjk2LFxuICAgICAgICAgIFwibWF0ZXJpYWxcIjogXCJFcXVpcG1lbnQgRnVlbFwiXG4gICAgICAgIH0sXG4gICAgICAgIHtcbiAgICAgICAgICBcInVuaXRcIjogXCJoXCIsXG4gICAgICAgICAgXCJhbW91bnRcIjogMSxcbiAgICAgICAgICBcIm1hdGVyaWFsXCI6IFwiVHJhY3RvciBhbmQgc3ByYXllci0tTGFib3JcIlxuICAgICAgICB9XG4gICAgICBdLFxuICAgICAgXCJjbGFzc1wiOiBcImVxdWlwbWVudFwiLFxuICAgICAgXCJ1bml0XCI6IFwiaFwiLFxuICAgICAgXCJtYXRlcmlhbFwiOiBcIlRyYWN0b3IgYW5kIHNwcmF5ZXJcIlxuICAgIH0sXG4gICAge1xuICAgICAgXCJjbGFzc1wiOiBcInBlc3RpY2lkZVwiLFxuICAgICAgXCJ1bml0XCI6IFwiW3F0X3VzXVwiLFxuICAgICAgXCJtYXRlcmlhbFwiOiBcIlRyaWZsdXJhbGluXCJcbiAgICB9XG4gIF0sXG4gIFwiZmFybVwiOiBbXG4gICAge1xuICAgICAgXCJzY2hlZHVsZVwiOiBbXG4gICAgICAgIHtcbiAgICAgICAgICBcIm9wZXJhdGlvblwiOiBcInNpdGUgcHJlcFwiLFxuICAgICAgICAgIFwiZHVyYXRpb25cIjogXCIzIG1vbnNcIixcbiAgICAgICAgICBcInN0YXJ0XCI6IFwiMjAxNS0wNi0wMVwiXG4gICAgICAgIH0sXG4gICAgICAgIHtcbiAgICAgICAgICBcIm9wZXJhdGlvblwiOiBcInBsYW50aW5nXCIsXG4gICAgICAgICAgXCJkdXJhdGlvblwiOiBcIjEgbW9uXCIsXG4gICAgICAgICAgXCJzdGFydFwiOiBcIjIwMTUtMTAtMDFcIlxuICAgICAgICB9LFxuICAgICAgICB7XG4gICAgICAgICAgXCJvcGVyYXRpb25cIjogXCJjcm9wIGNhcmUgLSB5cjBcIixcbiAgICAgICAgICBcImR1cmF0aW9uXCI6IFwiMSB5ZWFyXCIsXG4gICAgICAgICAgXCJzdGFydFwiOiBcIjIwMTUtMTEtMDFcIlxuICAgICAgICB9LFxuICAgICAgICB7XG4gICAgICAgICAgXCJvcGVyYXRpb25cIjogXCJjcm9wIGNhcmUgLSB5cjFcIixcbiAgICAgICAgICBcImR1cmF0aW9uXCI6IFwiMSB5ZWFyXCIsXG4gICAgICAgICAgXCJzdGFydFwiOiBcIjIwMTYtMTEtMDFcIlxuICAgICAgICB9LFxuICAgICAgICB7XG4gICAgICAgICAgXCJ1bml0XCI6IFwiW3N0b25fdXNdL1thY3JfdXNdXCIsXG4gICAgICAgICAgXCJ5aWVsZFwiOiA5LFxuICAgICAgICAgIFwib3BlcmF0aW9uXCI6IFwiaGFydmVzdCAtIHlyMlwiLFxuICAgICAgICAgIFwiZHVyYXRpb25cIjogXCIxIG1vblwiLFxuICAgICAgICAgIFwic3RhcnRcIjogXCIyMDE3LTEwLTAxXCJcbiAgICAgICAgfSxcbiAgICAgICAge1xuICAgICAgICAgIFwib3BlcmF0aW9uXCI6IFwiY3JvcCBjYXJlIC0gcG9zdCBoYXJ2ZXN0XCIsXG4gICAgICAgICAgXCJkdXJhdGlvblwiOiBcIjEgeWVhclwiLFxuICAgICAgICAgIFwic3RhcnRcIjogXCIyMDE3LTExLTAxXCJcbiAgICAgICAgfSxcbiAgICAgICAge1xuICAgICAgICAgIFwib3BlcmF0aW9uXCI6IFwiY3JvcCBjYXJlIC0gZXN0YWJsaXNoZWRcIixcbiAgICAgICAgICBcImR1cmF0aW9uXCI6IFwiMSB5ZWFyXCIsXG4gICAgICAgICAgXCJzdGFydFwiOiBcIjIwMTgtMTEtMDFcIlxuICAgICAgICB9LFxuICAgICAgICB7XG4gICAgICAgICAgXCJvcGVyYXRpb25cIjogXCJjcm9wIGNhcmUgLSBlc3RhYmxpc2hlZFwiLFxuICAgICAgICAgIFwiZHVyYXRpb25cIjogXCIxIHllYXJcIixcbiAgICAgICAgICBcInN0YXJ0XCI6IFwiMjAxOS0xMS0wMVwiXG4gICAgICAgIH0sXG4gICAgICAgIHtcbiAgICAgICAgICBcInVuaXRcIjogXCJbc3Rvbl91c10vW2Fjcl91c11cIixcbiAgICAgICAgICBcInlpZWxkXCI6IDI3LjUsXG4gICAgICAgICAgXCJvcGVyYXRpb25cIjogXCJoYXJ2ZXN0IC0gZXN0YWJsaXNoZWRcIixcbiAgICAgICAgICBcImR1cmF0aW9uXCI6IFwiMSBtb25cIixcbiAgICAgICAgICBcInN0YXJ0XCI6IFwiMjAyMC0xMC0wMVwiXG4gICAgICAgIH0sXG4gICAgICAgIHtcbiAgICAgICAgICBcIm9wZXJhdGlvblwiOiBcImNyb3AgY2FyZSAtIHBvc3QgaGFydmVzdFwiLFxuICAgICAgICAgIFwiZHVyYXRpb25cIjogXCIxIHllYXJcIixcbiAgICAgICAgICBcInN0YXJ0XCI6IFwiMjAyMS0xMS0wMVwiXG4gICAgICAgIH0sXG4gICAgICAgIHtcbiAgICAgICAgICBcIm9wZXJhdGlvblwiOiBcImNyb3AgY2FyZSAtIGVzdGFibGlzaGVkXCIsXG4gICAgICAgICAgXCJkdXJhdGlvblwiOiBcIjEgeWVhclwiLFxuICAgICAgICAgIFwic3RhcnRcIjogXCIyMDIyLTExLTAxXCJcbiAgICAgICAgfSxcbiAgICAgICAge1xuICAgICAgICAgIFwib3BlcmF0aW9uXCI6IFwiY3JvcCBjYXJlIC0gZXN0YWJsaXNoZWRcIixcbiAgICAgICAgICBcImR1cmF0aW9uXCI6IFwiMSB5ZWFyXCIsXG4gICAgICAgICAgXCJzdGFydFwiOiBcIjIwMjMtMTEtMDFcIlxuICAgICAgICB9LFxuICAgICAgICB7XG4gICAgICAgICAgXCJ1bml0XCI6IFwiW3N0b25fdXNdL1thY3JfdXNdXCIsXG4gICAgICAgICAgXCJ5aWVsZFwiOiAyNy41LFxuICAgICAgICAgIFwib3BlcmF0aW9uXCI6IFwiaGFydmVzdCAtIGVzdGFibGlzaGVkXCIsXG4gICAgICAgICAgXCJkdXJhdGlvblwiOiBcIjEgbW9uXCIsXG4gICAgICAgICAgXCJzdGFydFwiOiBcIjIwMjMtMTAtMDFcIlxuICAgICAgICB9LFxuICAgICAgICB7XG4gICAgICAgICAgXCJvcGVyYXRpb25cIjogXCJjcm9wIGNhcmUgLSBwb3N0IGhhcnZlc3RcIixcbiAgICAgICAgICBcImR1cmF0aW9uXCI6IFwiMSB5ZWFyXCIsXG4gICAgICAgICAgXCJzdGFydFwiOiBcIjIwMjUtMTEtMDFcIlxuICAgICAgICB9LFxuICAgICAgICB7XG4gICAgICAgICAgXCJvcGVyYXRpb25cIjogXCJjcm9wIGNhcmUgLSBlc3RhYmxpc2hlZFwiLFxuICAgICAgICAgIFwiZHVyYXRpb25cIjogXCIxIHllYXJcIixcbiAgICAgICAgICBcInN0YXJ0XCI6IFwiMjAyNi0xMS0wMVwiXG4gICAgICAgIH0sXG4gICAgICAgIHtcbiAgICAgICAgICBcIm9wZXJhdGlvblwiOiBcImNyb3AgY2FyZSAtIGVzdGFibGlzaGVkXCIsXG4gICAgICAgICAgXCJkdXJhdGlvblwiOiBcIjEgeWVhclwiLFxuICAgICAgICAgIFwic3RhcnRcIjogXCIyMDI3LTExLTAxXCJcbiAgICAgICAgfSxcbiAgICAgICAge1xuICAgICAgICAgIFwidW5pdFwiOiBcIltzdG9uX3VzXS9bYWNyX3VzXVwiLFxuICAgICAgICAgIFwieWllbGRcIjogMjcuNSxcbiAgICAgICAgICBcIm9wZXJhdGlvblwiOiBcImhhcnZlc3QgLSBlc3RhYmxpc2hlZFwiLFxuICAgICAgICAgIFwiZHVyYXRpb25cIjogXCIxIG1vblwiLFxuICAgICAgICAgIFwic3RhcnRcIjogXCIyMDI4LTEwLTAxXCJcbiAgICAgICAgfSxcbiAgICAgICAge1xuICAgICAgICAgIFwib3BlcmF0aW9uXCI6IFwiY3JvcCBjYXJlIC0gcG9zdCBoYXJ2ZXN0XCIsXG4gICAgICAgICAgXCJkdXJhdGlvblwiOiBcIjEgeWVhclwiLFxuICAgICAgICAgIFwic3RhcnRcIjogXCIyMDI5LTExLTAxXCJcbiAgICAgICAgfSxcbiAgICAgICAge1xuICAgICAgICAgIFwib3BlcmF0aW9uXCI6IFwiY3JvcCBjYXJlIC0gZXN0YWJsaXNoZWRcIixcbiAgICAgICAgICBcImR1cmF0aW9uXCI6IFwiMSB5ZWFyXCIsXG4gICAgICAgICAgXCJzdGFydFwiOiBcIjIwMzAtMTEtMDFcIlxuICAgICAgICB9LFxuICAgICAgICB7XG4gICAgICAgICAgXCJvcGVyYXRpb25cIjogXCJjcm9wIGNhcmUgLSBlc3RhYmxpc2hlZFwiLFxuICAgICAgICAgIFwiZHVyYXRpb25cIjogXCIxIHllYXJcIixcbiAgICAgICAgICBcInN0YXJ0XCI6IFwiMjAzMS0xMS0wMVwiXG4gICAgICAgIH0sXG4gICAgICAgIHtcbiAgICAgICAgICBcInVuaXRcIjogXCJbc3Rvbl91c10vW2Fjcl91c11cIixcbiAgICAgICAgICBcInlpZWxkXCI6IDI3LjUsXG4gICAgICAgICAgXCJvcGVyYXRpb25cIjogXCJoYXJ2ZXN0IC0gZXN0YWJsaXNoZWRcIixcbiAgICAgICAgICBcImR1cmF0aW9uXCI6IFwiMSBtb25cIixcbiAgICAgICAgICBcInN0YXJ0XCI6IFwiMjAzMi0xMC0wMVwiXG4gICAgICAgIH0sXG4gICAgICAgIHtcbiAgICAgICAgICBcIm9wZXJhdGlvblwiOiBcInJlc3RvcmF0aW9uXCIsXG4gICAgICAgICAgXCJkdXJhdGlvblwiOiBcIjMgbW9uc1wiLFxuICAgICAgICAgIFwic3RhcnRcIjogXCIyMDMyLTExLTAxXCJcbiAgICAgICAgfVxuICAgICAgXSxcbiAgICAgIFwib3BlcmF0aW9uc1wiOiBbXG4gICAgICAgIHtcbiAgICAgICAgICBcIm1hdGVyaWFsc1wiOiBbXG4gICAgICAgICAgICB7XG4gICAgICAgICAgICAgIFwidW5pdFwiOiBcIlthY3JfdXNdXCIsXG4gICAgICAgICAgICAgIFwiYW1vdW50XCI6IDE1MCxcbiAgICAgICAgICAgICAgXCJtYXRlcmlhbFwiOiBcImhvZWluZ1wiXG4gICAgICAgICAgICB9LFxuICAgICAgICAgICAge1xuICAgICAgICAgICAgICBcInVuaXRcIjogXCJbYWNyX3VzXVwiLFxuICAgICAgICAgICAgICBcImFtb3VudFwiOiAxMDAsXG4gICAgICAgICAgICAgIFwibWF0ZXJpYWxcIjogXCJoZXJiaWNpZGUgLSBtYW51YWxcIlxuICAgICAgICAgICAgfVxuICAgICAgICAgIF0sXG4gICAgICAgICAgXCJvcGVyYXRpb25cIjogXCJjcm9wIGNhcmUgLSBlc3RhYmxpc2hlZFwiXG4gICAgICAgIH0sXG4gICAgICAgIHtcbiAgICAgICAgICBcIm1hdGVyaWFsc1wiOiBbXG4gICAgICAgICAgICB7XG4gICAgICAgICAgICAgIFwibm90ZVwiOiBcIlRyYW5zcG9ydCBOdXJzZXJ5IHRvIGZpZWxkXCIsXG4gICAgICAgICAgICAgIFwidW5pdFwiOiBcImhcIixcbiAgICAgICAgICAgICAgXCJhbW91bnRcIjogMjAsXG4gICAgICAgICAgICAgIFwibWF0ZXJpYWxcIjogXCJTZW1pLVRyYWN0b3IgdHJhaWxlclwiXG4gICAgICAgICAgICB9LFxuICAgICAgICAgICAge1xuICAgICAgICAgICAgICBcInVuaXRcIjogXCIxXCIsXG4gICAgICAgICAgICAgIFwiYW1vdW50XCI6IDE0NTAwMCxcbiAgICAgICAgICAgICAgXCJtYXRlcmlhbFwiOiBcIlBvcGxhciBDdXR0aW5nXCJcbiAgICAgICAgICAgIH0sXG4gICAgICAgICAgICB7XG4gICAgICAgICAgICAgIFwidW5pdFwiOiBcImhcIixcbiAgICAgICAgICAgICAgXCJhbW91bnRcIjogMTA4MCxcbiAgICAgICAgICAgICAgXCJtYXRlcmlhbFwiOiBcIkNvb2xlci92YW5cIlxuICAgICAgICAgICAgfSxcbiAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgXCJ1bml0XCI6IFwiaFwiLFxuICAgICAgICAgICAgICBcImFtb3VudFwiOiA0ODAsXG4gICAgICAgICAgICAgIFwibWF0ZXJpYWxcIjogXCJMYWJvcmVyXCJcbiAgICAgICAgICAgIH1cbiAgICAgICAgICBdLFxuICAgICAgICAgIFwib3BlcmF0aW9uXCI6IFwicGxhbnRpbmdcIlxuICAgICAgICB9LFxuICAgICAgICB7XG4gICAgICAgICAgXCJtYXRlcmlhbHNcIjogW1xuICAgICAgICAgICAge1xuICAgICAgICAgICAgICBcInVuaXRcIjogXCJbYWNyX3VzXVwiLFxuICAgICAgICAgICAgICBcImFtb3VudFwiOiAyNSxcbiAgICAgICAgICAgICAgXCJtYXRlcmlhbFwiOiBcImhlcmJpY2lkZSAtIG1hbnVhbFwiXG4gICAgICAgICAgICB9LFxuICAgICAgICAgICAge1xuICAgICAgICAgICAgICBcIm5vdGVcIjogXCIyIHRpbWVzIG92ZXIgNzAgYWNyZXMgZWFjaC5cIixcbiAgICAgICAgICAgICAgXCJ1bml0XCI6IFwiW2Fjcl91c11cIixcbiAgICAgICAgICAgICAgXCJhbW91bnRcIjogMTQwLFxuICAgICAgICAgICAgICBcIm1hdGVyaWFsXCI6IFwiaG9laW5nXCJcbiAgICAgICAgICAgIH1cbiAgICAgICAgICBdLFxuICAgICAgICAgIFwib3BlcmF0aW9uXCI6IFwiY3JvcCBjYXJlIC0geXIwXCJcbiAgICAgICAgfSxcbiAgICAgICAge1xuICAgICAgICAgIFwibWF0ZXJpYWxzXCI6IFtcbiAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgXCJ1bml0XCI6IFwiaFwiLFxuICAgICAgICAgICAgICBcImFtb3VudFwiOiAzNSxcbiAgICAgICAgICAgICAgXCJtYXRlcmlhbFwiOiBcIkZSIDYwODAgRkhcIlxuICAgICAgICAgICAgfSxcbiAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgXCJ1bml0XCI6IFwiaFwiLFxuICAgICAgICAgICAgICBcImFtb3VudFwiOiAxNzUsXG4gICAgICAgICAgICAgIFwibWF0ZXJpYWxcIjogXCJUYW5kZW0gQXhsZSBUcnVja1wiXG4gICAgICAgICAgICB9LFxuICAgICAgICAgICAge1xuICAgICAgICAgICAgICBcInVuaXRcIjogXCJoXCIsXG4gICAgICAgICAgICAgIFwiYW1vdW50XCI6IDM1LFxuICAgICAgICAgICAgICBcIm1hdGVyaWFsXCI6IFwiU3VwcG9ydCBUcnVja1wiXG4gICAgICAgICAgICB9XG4gICAgICAgICAgXSxcbiAgICAgICAgICBcIm9wZXJhdGlvblwiOiBcImhhcnZlc3QgLSBlc3RhYmxpc2hlZFwiXG4gICAgICAgIH0sXG4gICAgICAgIHtcbiAgICAgICAgICBcIm1hdGVyaWFsc1wiOiBbXG4gICAgICAgICAgICB7XG4gICAgICAgICAgICAgIFwibm90ZVwiOiBcIlRpbGxhZ2VcIixcbiAgICAgICAgICAgICAgXCJ1bml0XCI6IFwiaFwiLFxuICAgICAgICAgICAgICBcImFtb3VudFwiOiA0OCxcbiAgICAgICAgICAgICAgXCJtYXRlcmlhbFwiOiBcIlNtYWxsIFRyYWN0b3JcIlxuICAgICAgICAgICAgfSxcbiAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgXCJub3RlXCI6IFwiNSB0aW1lc1wiLFxuICAgICAgICAgICAgICBcInVuaXRcIjogXCJbYWNyX3VzXVwiLFxuICAgICAgICAgICAgICBcImFtb3VudFwiOiA1MDAsXG4gICAgICAgICAgICAgIFwibWF0ZXJpYWxcIjogXCJob2VpbmdcIlxuICAgICAgICAgICAgfSxcbiAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgXCJub3RlXCI6IFwiMyB0aW1lcywgMS8yIGZpZWxkXCIsXG4gICAgICAgICAgICAgIFwidW5pdFwiOiBcIlthY3JfdXNdXCIsXG4gICAgICAgICAgICAgIFwiYW1vdW50XCI6IDE1MCxcbiAgICAgICAgICAgICAgXCJtYXRlcmlhbFwiOiBcImhlcmJpY2lkZSAtIG1hbnVhbFwiXG4gICAgICAgICAgICB9LFxuICAgICAgICAgICAge1xuICAgICAgICAgICAgICBcIm5vdGVcIjogXCJJbnRlcnBsYW50aW5nXCIsXG4gICAgICAgICAgICAgIFwidW5pdFwiOiBcImhcIixcbiAgICAgICAgICAgICAgXCJhbW91bnRcIjogOTYsXG4gICAgICAgICAgICAgIFwibWF0ZXJpYWxcIjogXCJMYWJvcmVyXCJcbiAgICAgICAgICAgIH1cbiAgICAgICAgICBdLFxuICAgICAgICAgIFwib3BlcmF0aW9uXCI6IFwiY3JvcCBjYXJlIC0geXIxXCJcbiAgICAgICAgfSxcbiAgICAgICAge1xuICAgICAgICAgIFwibWF0ZXJpYWxzXCI6IFtcbiAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgXCJub3RlXCI6IFwiZGlza2luZ1wiLFxuICAgICAgICAgICAgICBcInVuaXRcIjogXCJoXCIsXG4gICAgICAgICAgICAgIFwiYW1vdW50XCI6IDEyLFxuICAgICAgICAgICAgICBcIm1hdGVyaWFsXCI6IFwiTGFyZ2UgVHJhY3RvclwiXG4gICAgICAgICAgICB9LFxuICAgICAgICAgICAge1xuICAgICAgICAgICAgICBcIm5vdGVcIjogXCJoZXJiaWNpZGVcIixcbiAgICAgICAgICAgICAgXCJ1bml0XCI6IFwiaFwiLFxuICAgICAgICAgICAgICBcImFtb3VudFwiOiAyMCxcbiAgICAgICAgICAgICAgXCJtYXRlcmlhbFwiOiBcIlRyYWN0b3IgYW5kIHNwcmF5ZXJcIlxuICAgICAgICAgICAgfSxcbiAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgXCJub3RlXCI6IFwiaGVyYmljaWRlXCIsXG4gICAgICAgICAgICAgIFwidW5pdFwiOiBcIltxdF91c11cIixcbiAgICAgICAgICAgICAgXCJhbW91bnRcIjogMjAwLFxuICAgICAgICAgICAgICBcIm1hdGVyaWFsXCI6IFwiR2x5cGhvc2F0ZVwiXG4gICAgICAgICAgICB9LFxuICAgICAgICAgICAge1xuICAgICAgICAgICAgICBcIm5vdGVcIjogXCJoZXJiaWNpZGVcIixcbiAgICAgICAgICAgICAgXCJ1bml0XCI6IFwiW3F0X3VzXVwiLFxuICAgICAgICAgICAgICBcImFtb3VudFwiOiAyMDAsXG4gICAgICAgICAgICAgIFwibWF0ZXJpYWxcIjogXCIyLDQtRFwiXG4gICAgICAgICAgICB9XG4gICAgICAgICAgXSxcbiAgICAgICAgICBcIm9wZXJhdGlvblwiOiBcInJlc3RvcmF0aW9uXCJcbiAgICAgICAgfSxcbiAgICAgICAge1xuICAgICAgICAgIFwibWF0ZXJpYWxzXCI6IFtcbiAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgXCJub3RlXCI6IFwiUG9zdCBoYXJ2ZXN0IGNsZWFuIHVwXCIsXG4gICAgICAgICAgICAgIFwidW5pdFwiOiBcImhcIixcbiAgICAgICAgICAgICAgXCJhbW91bnRcIjogMzAsXG4gICAgICAgICAgICAgIFwibWF0ZXJpYWxcIjogXCJNaWQtc2l6ZSBUcmFjdG9yXCJcbiAgICAgICAgICAgIH0sXG4gICAgICAgICAgICB7XG4gICAgICAgICAgICAgIFwibm90ZVwiOiBcIkRvcm1hbnQgSGVyYmljaWRlXCIsXG4gICAgICAgICAgICAgIFwidW5pdFwiOiBcImhcIixcbiAgICAgICAgICAgICAgXCJhbW91bnRcIjogOCxcbiAgICAgICAgICAgICAgXCJtYXRlcmlhbFwiOiBcIlRyYWN0b3IgYW5kIHNwcmF5ZXJcIlxuICAgICAgICAgICAgfSxcbiAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgXCJub3RlXCI6IFwiRG9ybWFudCBIZXJiaWNpZGVcIixcbiAgICAgICAgICAgICAgXCJ1bml0XCI6IFwiW3F0X3VzXVwiLFxuICAgICAgICAgICAgICBcImFtb3VudFwiOiAyMDAsXG4gICAgICAgICAgICAgIFwibWF0ZXJpYWxcIjogXCJHbHlwaG9zYXRlXCJcbiAgICAgICAgICAgIH0sXG4gICAgICAgICAgICB7XG4gICAgICAgICAgICAgIFwibm90ZVwiOiBcIkRvcm1hbnQgSGVyYmljaWRlXCIsXG4gICAgICAgICAgICAgIFwidW5pdFwiOiBcIltxdF91c11cIixcbiAgICAgICAgICAgICAgXCJhbW91bnRcIjogMjAwLFxuICAgICAgICAgICAgICBcIm1hdGVyaWFsXCI6IFwiVHJpZmx1cmFsaW5cIlxuICAgICAgICAgICAgfSxcbiAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgXCJub3RlXCI6IFwicG9zdCBlbWVyZ2VudFwiLFxuICAgICAgICAgICAgICBcInVuaXRcIjogXCJbYWNyX3VzXVwiLFxuICAgICAgICAgICAgICBcImFtb3VudFwiOiAxMDAsXG4gICAgICAgICAgICAgIFwibWF0ZXJpYWxcIjogXCJoZXJiaWNpZGUgLSBtYW51YWxcIlxuICAgICAgICAgICAgfVxuICAgICAgICAgIF0sXG4gICAgICAgICAgXCJvcGVyYXRpb25cIjogXCJjcm9wIGNhcmUgLSBwb3N0IGhhcnZlc3RcIlxuICAgICAgICB9LFxuICAgICAgICB7XG4gICAgICAgICAgXCJtYXRlcmlhbHNcIjogW1xuICAgICAgICAgICAge1xuICAgICAgICAgICAgICBcIm5vdGVcIjogXCJcIixcbiAgICAgICAgICAgICAgXCJ1bml0XCI6IFwiaFwiLFxuICAgICAgICAgICAgICBcImFtb3VudFwiOiAyNixcbiAgICAgICAgICAgICAgXCJtYXRlcmlhbFwiOiBcIkZSIDYwODAgRkhcIlxuICAgICAgICAgICAgfSxcbiAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgXCJ1bml0XCI6IFwiaFwiLFxuICAgICAgICAgICAgICBcImFtb3VudFwiOiAxMDQsXG4gICAgICAgICAgICAgIFwibWF0ZXJpYWxcIjogXCJUYW5kZW0gQXhsZSBUcnVja1wiXG4gICAgICAgICAgICB9LFxuICAgICAgICAgICAge1xuICAgICAgICAgICAgICBcInVuaXRcIjogXCJoXCIsXG4gICAgICAgICAgICAgIFwiYW1vdW50XCI6IDI2LFxuICAgICAgICAgICAgICBcIm1hdGVyaWFsXCI6IFwiU3VwcG9ydCBUcnVja1wiXG4gICAgICAgICAgICB9XG4gICAgICAgICAgXSxcbiAgICAgICAgICBcIm9wZXJhdGlvblwiOiBcImhhcnZlc3QgLSB5cjFcIlxuICAgICAgICB9LFxuICAgICAgICB7XG4gICAgICAgICAgXCJtYXRlcmlhbHNcIjogW1xuICAgICAgICAgICAge1xuICAgICAgICAgICAgICBcIm5vdGVcIjogXCJJbml0aWFsIFNwcmF5aW5nXCIsXG4gICAgICAgICAgICAgIFwidW5pdFwiOiBcImhcIixcbiAgICAgICAgICAgICAgXCJhbW91bnRcIjogMyxcbiAgICAgICAgICAgICAgXCJtYXRlcmlhbFwiOiBcIlRyYWN0b3IgYW5kIHNwcmF5ZXJcIlxuICAgICAgICAgICAgfSxcbiAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgXCJub3RlXCI6IFwiSW5pdGlhbCBTcHJheWluZ1wiLFxuICAgICAgICAgICAgICBcInVuaXRcIjogXCJbcXRfdXNdXCIsXG4gICAgICAgICAgICAgIFwiYW1vdW50XCI6IDEwMCxcbiAgICAgICAgICAgICAgXCJtYXRlcmlhbFwiOiBcIkdseXBob3NhdGVcIlxuICAgICAgICAgICAgfSxcbiAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgXCJub3RlXCI6IFwiSW5pdGlhbCBTcHJheWluZ1wiLFxuICAgICAgICAgICAgICBcInVuaXRcIjogXCJbcXRfdXNdXCIsXG4gICAgICAgICAgICAgIFwiYW1vdW50XCI6IDEyNSxcbiAgICAgICAgICAgICAgXCJtYXRlcmlhbFwiOiBcIkdvYWwgMlhMXCJcbiAgICAgICAgICAgIH0sXG4gICAgICAgICAgICB7XG4gICAgICAgICAgICAgIFwibm90ZVwiOiBcIkluaXRpYWwgVGlsbGFnZVwiLFxuICAgICAgICAgICAgICBcInVuaXRcIjogXCJoXCIsXG4gICAgICAgICAgICAgIFwiYW1vdW50XCI6IDIwLFxuICAgICAgICAgICAgICBcIm1hdGVyaWFsXCI6IFwiTGFyZ2UgVHJhY3RvclwiXG4gICAgICAgICAgICB9LFxuICAgICAgICAgICAge1xuICAgICAgICAgICAgICBcIm5vdGVcIjogXCJSaXBwaW5nXCIsXG4gICAgICAgICAgICAgIFwidW5pdFwiOiBcImhcIixcbiAgICAgICAgICAgICAgXCJhbW91bnRcIjogMTAsXG4gICAgICAgICAgICAgIFwibWF0ZXJpYWxcIjogXCJMYXJnZSBUcmFjdG9yXCJcbiAgICAgICAgICAgIH0sXG4gICAgICAgICAgICB7XG4gICAgICAgICAgICAgIFwibm90ZVwiOiBcIlJvdyBNYXJraW5nXCIsXG4gICAgICAgICAgICAgIFwidW5pdFwiOiBcImhcIixcbiAgICAgICAgICAgICAgXCJhbW91bnRcIjogMjUsXG4gICAgICAgICAgICAgIFwibWF0ZXJpYWxcIjogXCJMYXJnZSBUcmFjdG9yXCJcbiAgICAgICAgICAgIH0sXG4gICAgICAgICAgICB7XG4gICAgICAgICAgICAgIFwibm90ZVwiOiBcImhlcmJpY2lkZSAtIHByZWVtZXJnZW50XCIsXG4gICAgICAgICAgICAgIFwidW5pdFwiOiBcImhcIixcbiAgICAgICAgICAgICAgXCJhbW91bnRcIjogMjUsXG4gICAgICAgICAgICAgIFwibWF0ZXJpYWxcIjogXCJDaGFsbGVuZ2VyIFRyYWN0b3JcIlxuICAgICAgICAgICAgfSxcbiAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgXCJub3RlXCI6IFwiaGVyYmljaWRlIC0gcHJlZW1lcmdlbnRcIixcbiAgICAgICAgICAgICAgXCJ1bml0XCI6IFwiW3F0X3VzXVwiLFxuICAgICAgICAgICAgICBcImFtb3VudFwiOiA1MCxcbiAgICAgICAgICAgICAgXCJtYXRlcmlhbFwiOiBcIlRyaWZsdXJhbGluXCJcbiAgICAgICAgICAgIH1cbiAgICAgICAgICBdLFxuICAgICAgICAgIFwib3BlcmF0aW9uXCI6IFwic2l0ZSBwcmVwXCJcbiAgICAgICAgfVxuICAgICAgXSxcbiAgICAgIFwidW5pdFwiOiBcIlthY3JfdXNdXCIsXG4gICAgICBcInNpemVcIjogXCIxMDBcIixcbiAgICAgIFwiY29tbW9kaXR5XCI6IFwiUE9QTEFSXCIsXG4gICAgICBcImxvY2F0aW9uXCI6IFwiMDYxMTNcIixcbiAgICAgIFwiZmFybVwiOiBcImNsYXJrc2J1cmdcIlxuICAgIH1cbiAgXVxufVxuIiwiJ3VzZSBzdHJpY3QnO1xuXG4vKipcbiAqICBOYW1lc3BhY2UgbW9kdWxlXG4gKiAgRXhwb3NlcyBvdGhlciBtb2R1bGVzXG4gKiovXG5cbnZhciBtYXRlcmlhbENvbnRyb2xsZXIgPSByZXF1aXJlKCcuL21hdGVyaWFsQ29udHJvbGxlcicpO1xudmFyIG9wZXJhdGlvbkNvbnRyb2xsZXIgPSByZXF1aXJlKCcuL29wZXJhdGlvbkNvbnRyb2xsZXInKTtcbm9wZXJhdGlvbkNvbnRyb2xsZXIuaW5pdChtYXRlcmlhbENvbnRyb2xsZXIpO1xubWF0ZXJpYWxDb250cm9sbGVyLmluaXQob3BlcmF0aW9uQ29udHJvbGxlcik7XG5cbnZhciBleGFtcGxlcyA9IHtcbiAgLy8gZGF0YWJhc2UgZm9ybWF0dGVkXG4gIGRiIDoge1xuICAgICdkZWZhdWx0JyA6IHJlcXVpcmUoJy4vY29uZmlnL2RlZmF1bHQnKSxcbiAgICAnYWxmYWxmYSAoQ0EpJzogcmVxdWlyZSgnLi9jb25maWcvY2FfYWxmYWxmYV9zd2FwJyksXG4gICAgJ2FsZmFsZmEgRXN0aW1hdGVzJyA6IHJlcXVpcmUoJy4vY29uZmlnL2NhX2FsZmFsZmFfc3dhcF9lc3RpbWF0ZScpLFxuICAgICdwb3BsYXIgYmFkJyA6IHJlcXVpcmUoJy4vY29uZmlnL3BvcGxhci1leGFtcGxlJylcbiAgfSxcbiAgLy8gYXBwbGljYXRpb24gZm9ybWF0dGVkLCBwcm9iYWJseSBmcm9tIHRoZSAnanNvbiBkdW1wJ1xuICBhcHAgOiB7XG4gICAgJ3BvcGxhciBnb29kJyA6IHJlcXVpcmUoJy4vY29uZmlnL2FwcC9wb3BsYXInKSxcbiAgICAnYWxmYWxmYSAtIGptJyA6IHJlcXVpcmUoJy4vY29uZmlnL2FwcC9hbGZhbGZhJylcbiAgfVxufTtcblxuLy8gdG1wIGZvciBub3dcbnZhciBmaXhlZCA9IFsnRXN0aW1hdGUnLCAnVGF4ZXMnLCdJbnN1cmFuY2UnLCdDYXBpdG9sIENvc3QgUmVjb3ZlciddO1xuZm9yKCB2YXIgaSA9IDA7IGkgPCBmaXhlZC5sZW5ndGg7IGkrKyApIHtcbiAgbWF0ZXJpYWxDb250cm9sbGVyLmFkZCh7XG4gICAgbmFtZSA6IGZpeGVkW2ldLFxuICAgIHByaWNlIDogMSxcbiAgICB1bml0cyA6ICd1cyQnLFxuICAgIGZpeGVkIDogdHJ1ZSxcbiAgICBkZXNjcmlwdGlvbiA6ICdQcm92aWRlIGZpeGVkIGNvc3QgZm9yIGNvbXBsZXggbWF0ZXJpYWwnXG4gIH0se1xuICAgIG5vRXZlbnQgOiB0cnVlXG4gIH0pO1xufVxuXG5tb2R1bGUuZXhwb3J0cyA9IHtcbiAgdXRpbHMgOiByZXF1aXJlKCcuL3V0aWxzJykob3BlcmF0aW9uQ29udHJvbGxlciwgbWF0ZXJpYWxDb250cm9sbGVyKSxcbiAgb3BlcmF0aW9uQ29udHJvbGxlciA6IG9wZXJhdGlvbkNvbnRyb2xsZXIsXG4gIG1hdGVyaWFsQ29udHJvbGxlciA6IG1hdGVyaWFsQ29udHJvbGxlcixcbiAgdHJhbnNmb3JtIDogcmVxdWlyZSgnLi90cmFuc2Zvcm0nKSxcbiAgZXhhbXBsZXMgOiBleGFtcGxlcyxcbiAgdWN1bSA6IHJlcXVpcmUoJ3VjdW0uanMnKSxcbiAgdW5pdHMgOiByZXF1aXJlKCcuL3VuaXRzJylcbn07XG4iLCIndXNlIHN0cmljdCc7XG4vKipcbiAqIGtlZXBzIHRyYWNrIG9mIG1hdGVyaWFscywgcHJpY2VzIGFuZCBjb21wbGV4IG1hdGVyaWFscy4gIG1vc3RseSBmb3IgY2xpZW50IGFwcC5cbiAqKi9cblxuIHZhciBldmVudHMgPSByZXF1aXJlKCdldmVudHMnKS5FdmVudEVtaXR0ZXI7XG4gdmFyIHVuaXRzID0gcmVxdWlyZSgnLi4vdW5pdHMnKTtcbiBldmVudHMgPSBuZXcgZXZlbnRzKCk7XG4gZXZlbnRzLnNldE1heExpc3RlbmVycygxMDAwKTtcblxudmFyIGRhdGEgPSB7XG4gbWF0ZXJpYWxzIDoge30sXG4gY29tcGxleCA6IHt9XG59O1xudmFyIG9wZXJhdGlvbkNvbnRyb2xsZXI7XG5cbmZ1bmN0aW9uIGluaXQoY29udHJvbGxlcikge1xuICBvcGVyYXRpb25Db250cm9sbGVyID0gY29udHJvbGxlcjtcbn1cblxuZnVuY3Rpb24gcmVtb3ZlKG5hbWUpIHtcbiAgaWYoIGRhdGEubWF0ZXJpYWxzW25hbWVdICkge1xuICAgIGRlbGV0ZSBkYXRhLm1hdGVyaWFsc1tuYW1lXTtcbiAgICBldmVudHMuZW1pdCgnbWF0ZXJpYWwtcmVtb3ZlZCcsIHtcbiAgICAgIG1hdGVyaWFsIDogbmFtZVxuICAgIH0pO1xuICAgIHJldHVybiBzdWNjZXNzKCk7XG4gIH0gZWxzZSBpZiggZGF0YS5jb21wbGV4W25hbWVdICkge1xuICAgIGRlbGV0ZSBkYXRhLmNvbXBsZXhbbmFtZV07XG4gICAgZXZlbnRzLmVtaXQoJ21hdGVyaWFsLXJlbW92ZWQnLCB7XG4gICAgICBtYXRlcmlhbCA6IG5hbWVcbiAgICB9KTtcbiAgICByZXR1cm4gc3VjY2VzcygpO1xuICB9XG5cbiAgcmV0dXJuIHNldEVycm9yKCdtYXRlcmlhbCAnK25hbWUrJyBkb2VzIG5vdCBleGlzdCcpO1xufVxuXG4vLyBidWxrIGFkZC91cGRhdGUgaXRlbXMgd2l0aCBvbmx5IG9uZSByZWNhbGNcbmZ1bmN0aW9uIGJ1bGtBZGQobWF0ZXJpYWxzLCBvcHRpb25zKSB7XG4gIHZhciBhZGRPcHRpb25zID0ge30sIGk7XG4gIGZvciggdmFyIGtleSBpbiBvcHRpb25zICkge1xuICAgIGFkZE9wdGlvbnNba2V5XSA9IG9wdGlvbnM7XG4gIH1cblxuICBhZGRPcHRpb25zLm5vUmVjYWxjID0gdHJ1ZTtcbiAgYWRkT3B0aW9ucy5ub0V2ZW50ID0gdHJ1ZTtcblxuICB2YXIgcmVzcG9uc2VzID0ge307XG4gIGZvciggaSA9IDA7IGkgPCBtYXRlcmlhbHMubGVuZ3RoOyBpKysgKSB7XG4gICAgcmVzcG9uc2VzW21hdGVyaWFsc1tpXS5uYW1lXSA9IGFkZChtYXRlcmlhbHNbaV0sIGFkZE9wdGlvbnMpO1xuICB9XG5cbiAgLy8gbm93IGp1c3QgcmVjYWxjIG9uY2VcbiAgcmVjYWxjKCk7XG4gIG9wZXJhdGlvbkNvbnRyb2xsZXIucmVjYWxjKCk7XG5cbiAgZm9yKCBpID0gMDsgaSA8IG1hdGVyaWFscy5sZW5ndGg7IGkrKyApIHtcbiAgICBpZiggcmVzcG9uc2VzW21hdGVyaWFsc1tpXS5uYW1lXS5lcnJvciApIHtcbiAgICAgIGNvbnRpbnVlO1xuICAgIH1cbiAgICByZXNwb25zZXNbbWF0ZXJpYWxzW2ldLm5hbWVdLmJsdWsgPSB0cnVlO1xuICAgIGV2ZW50cy5lbWl0KCdtYXRlcmlhbC11cGRhdGUnLCByZXNwb25zZXNbbWF0ZXJpYWxzW2ldLm5hbWVdKTtcbiAgfVxuXG4gIHJldHVybiByZXNwb25zZXM7XG59XG5cbmZ1bmN0aW9uIGFkZChtYXRlcmlhbCwgb3B0aW9ucykge1xuICBpZiggIW9wdGlvbnMgKSB7XG4gICAgb3B0aW9ucyA9IHt9O1xuICB9XG5cbiAgaWYoIGRhdGEubWF0ZXJpYWxzW21hdGVyaWFsLm5hbWVdICYmICFvcHRpb25zLnJlcGxhY2UgKSB7XG4gICAgcmV0dXJuIHNldEVycm9yKG1hdGVyaWFsLm5hbWUsICdtYXRlcmlhbCBhbHJlYWR5IGV4aXN0cycpO1xuICB9IGVsc2UgaWYoIGRhdGEuY29tcGxleFttYXRlcmlhbC5uYW1lXSAmJiAhb3B0aW9ucy5yZXBsYWNlICkge1xuICAgIHJldHVybiBzZXRFcnJvcihtYXRlcmlhbC5uYW1lLCAnbWF0ZXJpYWwgYWxyZWFkeSBleGlzdHMnKTtcbiAgfVxuXG4gIHZhciBpc05ldyA9IGZhbHNlO1xuICBpZiggIWRhdGEubWF0ZXJpYWxzW21hdGVyaWFsLm5hbWVdICYmICFkYXRhLmNvbXBsZXhbbWF0ZXJpYWwubmFtZV0gKSB7XG4gICAgaXNOZXcgPSB0cnVlO1xuICB9XG5cbiAgaWYoIG1hdGVyaWFsLnR5cGUgPT09ICdjb21wbGV4JyApIHtcbiAgICBkYXRhLmNvbXBsZXhbbWF0ZXJpYWwubmFtZV0gPSBtYXRlcmlhbDtcbiAgfSBlbHNlIHtcbiAgICBtYXRlcmlhbC50eXBlID0gJ3NpbXBsZSc7XG4gICAgZGF0YS5tYXRlcmlhbHNbbWF0ZXJpYWwubmFtZV0gPSBtYXRlcmlhbDtcbiAgfVxuXG4gIGlmKCBvcHRpb25zLnJlbmFtZSApIHtcbiAgICByZW1vdmUob3B0aW9ucy5yZW5hbWUpO1xuICB9XG5cbiAgaWYoICFvcHRpb25zLm5vUmVjYWxjICkge1xuICAgIHJlY2FsYygpO1xuICB9XG5cbiAgdmFyIHJlc3BvbnNlID0ge1xuICAgIG1hdGVyaWFsIDogbWF0ZXJpYWwsXG4gICAgaXNOZXcgOiBpc05ldyxcbiAgICByZXBsYWNlZCA6IG9wdGlvbnMucmVuYW1lLFxuICAgIGZsYWcgOiBvcHRpb25zLmZsYWcsIC8vIGxldCB0aGUgY2FsbGVyIHBhc3MgaXQncyBvd24gZmxhZ3NcbiAgICBzdWNjZXNzIDogdHJ1ZVxuICB9O1xuXG4gIGlmKCAhb3B0aW9ucy5ub0V2ZW50ICkge1xuICAgIGV2ZW50cy5lbWl0KCdtYXRlcmlhbC11cGRhdGUnLCByZXNwb25zZSk7XG4gIH1cblxuICByZXR1cm4gcmVzcG9uc2U7XG59XG5cbmZ1bmN0aW9uIGdldChuYW1lKSB7XG4gIGlmKCAhbmFtZSApIHtcbiAgICByZXR1cm4gZGF0YTtcbiAgfVxuXG4gIGlmKCBkYXRhLm1hdGVyaWFsc1tuYW1lXSApIHtcbiAgICByZXR1cm4gZGF0YS5tYXRlcmlhbHNbbmFtZV07XG4gIH0gZWxzZSBpZiggZGF0YS5jb21wbGV4W25hbWVdICkge1xuICAgIHJldHVybiBkYXRhLmNvbXBsZXhbbmFtZV07XG4gIH1cblxuICByZXR1cm4gc2V0RXJyb3IobmFtZSwgbmFtZSsnIGlzIG5vdCBpbiB0aGUgbWF0ZXJpYWwgbGlzdCcpO1xufVxuXG5mdW5jdGlvbiBmaW5kKHR4dCwgaWdub3JlKSB7XG4gIHZhciByZSA9IG5ldyBSZWdFeHAoJy4qJyt0eHQrJy4qJywgJ2knKTtcbiAgdmFyIHJlc3VsdHMgPSBbXSwga2V5O1xuXG4gIGZvcigga2V5IGluIGRhdGEubWF0ZXJpYWxzICkge1xuICAgIGlmKCBrZXkubWF0Y2gocmUpICYmIGtleSAhPT0gaWdub3JlICkge1xuICAgICAgcmVzdWx0cy5wdXNoKGRhdGEubWF0ZXJpYWxzW2tleV0pO1xuICAgIH1cbiAgfVxuICBmb3IoIGtleSBpbiBkYXRhLmNvbXBsZXggKSB7XG4gICAgaWYoIGtleS5tYXRjaChyZSkgJiYga2V5ICE9PSBpZ25vcmUgICkge1xuICAgICAgcmVzdWx0cy5wdXNoKGRhdGEuY29tcGxleFtrZXldKTtcbiAgICB9XG4gIH1cblxuICBmb3IoIHZhciBpID0gMDsgaSA8IHJlc3VsdHMubGVuZ3RoOyBpKysgKSB7XG4gICAgaWYoIHJlc3VsdHNbaV0ubmFtZSA9PT0gdHh0ICkge1xuICAgICAgdmFyIG0gPSByZXN1bHRzLnNwbGljZShpLCAxKVswXTtcbiAgICAgIHJlc3VsdHMuc3BsaWNlKDAsMCxtKTtcbiAgICAgIGJyZWFrO1xuICAgIH1cbiAgfVxuXG4gIHJldHVybiByZXN1bHRzO1xufVxuXG4vLyByZWNhbGMgYWxsIGNvbXBsZXggbWF0ZXJpYWwgY29zdHNcbmZ1bmN0aW9uIHJlY2FsYygpIHtcbiAgdmFyIHQgPSBuZXcgRGF0ZSgpLmdldFRpbWUoKTtcblxuICB2YXIgbWF0ZXJpYWw7XG5cbiAgZm9yKCBtYXRlcmlhbCBpbiBkYXRhLmNvbXBsZXggKSB7XG4gICAgZGF0YS5jb21wbGV4W21hdGVyaWFsXS5wcmljZSA9IG51bGw7XG4gIH1cblxuICBmb3IoIG1hdGVyaWFsIGluIGRhdGEuY29tcGxleCApIHtcbiAgICB2YXIgbSA9IGRhdGEuY29tcGxleFttYXRlcmlhbF07XG5cbiAgICBpZiggbS5wcmljZSAhPT0gbnVsbCApIHtcbiAgICAgICAgY29udGludWU7XG4gICAgfVxuICAgIG0ucHJpY2UgPSBfcmVjYWxjKG0sIFttLm5hbWVdKTtcbiAgfVxuXG4gIGNvbnNvbGUubG9nKCdNYXRlcmlhbCBSZWNhbGM6ICcrKG5ldyBEYXRlKCkuZ2V0VGltZSgpIC0gdCkrJ21zJyk7XG59XG5cbmZ1bmN0aW9uIF9yZWNhbGMobWF0ZXJpYWwsIG1hdGVyaWFsQ2hhaW4pe1xuICB2YXIgcHJpY2UgPSAwO1xuXG4gIGZvciggdmFyIGtleSBpbiBtYXRlcmlhbC5tYXRlcmlhbHMgKSB7XG4gICAgdmFyIG0gPSBnZXQoa2V5KTtcblxuICAgIGlmKCBtLmVycm9yICkge1xuICAgICAgbWF0ZXJpYWwubWF0ZXJpYWxzW2tleV0uZXJyb3IgPSBtLmVycm9yO1xuICAgICAgY29udGludWU7XG4gICAgfVxuICAgIG1hdGVyaWFsLm1hdGVyaWFsc1trZXldLmVycm9yID0gbnVsbDtcblxuICAgIGlmKCBtLnByaWNlID09PSBudWxsICYmIG0udHlwZSA9PT0gJ2NvbXBsZXgnICkge1xuICAgICAgLy8gbWFrZSBzdXJlIG5vIHJlY3Vyc2lvblxuICAgICAgLy8gVE9ETzogc2hvdWxkIHByb2JhYmx5IGFkZCBlcnJvciB0byBzdGFjayBpZiBpc3N1ZS5cbiAgICAgIGlmKCBtYXRlcmlhbENoYWluLmluZGV4T2YobS5uYW1lKSA9PT0gLTEgKSB7XG4gICAgICAgIG0ucHJpY2UgPSBfcmVjYWxjKG0sIGV4dGVuZENoYWluKG1hdGVyaWFsQ2hhaW4sIG0ubmFtZSkpO1xuICAgICAgfSBlbHNlIHtcbiAgICAgICAgLy8gQkFETkVTU1xuICAgICAgICBjb25zb2xlLmxvZygnUmVjdXNpdmUgbWF0ZXJpYWxzIGZvdW5kLCBpZ25vcmluZzogJyttYXRlcmlhbENoYWluLmpvaW4oJ2knKSsnICYmICcrbS5uYW1lKTtcbiAgICAgIH1cbiAgICB9XG5cbiAgICB2YXIgdmFsdWUgPSB1bml0cy5jYWxjdWxhdGVDb21wbGV4UHJpY2UobSwgbWF0ZXJpYWwubWF0ZXJpYWxzW20ubmFtZV0sIG1hdGVyaWFsKTtcblxuICAgIGlmKCB2YWx1ZS5lcnJvciApIHtcbiAgICAgIG1hdGVyaWFsLm1hdGVyaWFsc1ttLm5hbWVdLnByaWNlID0gMDtcbiAgICAgIG1hdGVyaWFsLm1hdGVyaWFsc1ttLm5hbWVdLmVycm9yID0gdmFsdWU7XG4gICAgfSBlbHNlIHtcbiAgICAgIG1hdGVyaWFsLm1hdGVyaWFsc1ttLm5hbWVdLnByaWNlID0gdmFsdWUudmFsdWU7XG4gICAgfVxuXG4gICAgcHJpY2UgKz0gbWF0ZXJpYWwubWF0ZXJpYWxzW20ubmFtZV0ucHJpY2U7XG5cbiAgfVxuICByZXR1cm4gcHJpY2U7XG59XG5cbmZ1bmN0aW9uIGV4dGVuZENoYWluKGNoYWluLCBtKSB7XG4gIHZhciBuZXdDaGFpbiA9IGNoYWluLnNsaWNlKCk7XG4gIG5ld0NoYWluLnB1c2gobSk7XG4gIHJldHVybiBjaGFpbjtcbn1cblxuZnVuY3Rpb24gbWF0ZXJpYWxSZWNhbGMobWF0ZXJpYWwpIHtcbiAgaWYoIHR5cGVvZiBtYXRlcmlhbCAhPT0gJ29iamVjdCcgKSB7XG4gICAgcmV0dXJuO1xuICB9IGVsc2UgaWYoIG1hdGVyaWFsLnR5cGUgIT09ICdjb21wbGV4JyApIHtcbiAgICByZXR1cm47XG4gIH1cbiAgbWF0ZXJpYWwucHJpY2UgPSBfcmVjYWxjKG1hdGVyaWFsKTtcbn1cblxuZnVuY3Rpb24gZ2V0RXJyb3JzKCkge1xuICB2YXIgZXJyb3JzID0gW107XG5cbiAgZm9yKCB2YXIgbSBpbiBkYXRhLm1hdGVyaWFscyApIHtcbiAgICBpZiggZGF0YS5tYXRlcmlhbHNbbV0uZXJyb3IgKSB7XG4gICAgICBlcnJvcnMucHVzaChkYXRhLm1hdGVyaWFsc1ttXSk7XG4gICAgfVxuICB9XG5cbiAgZm9yKCB2YXIgaSBpbiBkYXRhLmNvbXBsZXggKSB7XG4gICAgaWYoIGRhdGEuY29tcGxleFtpXS5lcnJvciApIHtcbiAgICAgIGVycm9ycy5wdXNoKGRhdGEuY29tcGxleFtpXSk7XG4gICAgfSBlbHNlIHtcbiAgICAgIGZvciggbSBpbiBkYXRhLmNvbXBsZXhbaV0ubWF0ZXJpYWxzICkge1xuICAgICAgICBpZiggZGF0YS5jb21wbGV4W2ldLm1hdGVyaWFsc1ttXS5lcnJvciApIHtcbiAgICAgICAgICBlcnJvcnMucHVzaChkYXRhLmNvbXBsZXhbaV0pO1xuICAgICAgICAgIGJyZWFrO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgfVxuXG5cbiAgICBmb3IoIG0gaW4gZGF0YS5jb21wbGV4W2ldLm1hdGVyaWFscyApIHtcbiAgICAgIHZhciBtYXRlcmlhbCA9IGdldChtKTtcbiAgICAgIGlmKCBtYXRlcmlhbC5lcnJvciApIHtcbiAgICAgICAgbWF0ZXJpYWwuZnJvbSA9IGRhdGEuY29tcGxleFtpXTtcbiAgICAgICAgZXJyb3JzLnB1c2gobWF0ZXJpYWwpO1xuICAgICAgfVxuICAgIH1cbiAgfVxuXG4gIHJldHVybiBlcnJvcnM7XG59XG5cblxuZnVuY3Rpb24gc3VjY2VzcygpIHtcbiAgcmV0dXJuIHtzdWNjZXNzOiB0cnVlfTtcbn1cblxuZnVuY3Rpb24gc2V0RXJyb3IobmFtZSwgbXNnKSB7XG4gIHJldHVybiB7XG4gICAgbmFtZSA6IG5hbWUsXG4gICAgZXJyb3IgOiB0cnVlLFxuICAgIG1lc3NhZ2UgOiBtc2dcbiAgfTtcbn1cblxuXG5tb2R1bGUuZXhwb3J0cyA9IHtcbiAgaW5pdCA6IGluaXQsXG4gIGFkZCA6IGFkZCxcbiAgZ2V0IDogZ2V0LFxuICByZW1vdmUgOiByZW1vdmUsXG4gIGZpbmQgOiBmaW5kLFxuICBnZXRFcnJvcnMgOiBnZXRFcnJvcnMsXG4gIGJ1bGtBZGQgOiBidWxrQWRkLFxuICBvbiA6IGZ1bmN0aW9uKGV2ZW50LCBsaXN0ZW5lcil7XG4gICAgZXZlbnRzLm9uKGV2ZW50LCBsaXN0ZW5lcik7XG4gIH0sXG4gIHJlY2FsYyA6IHJlY2FsYyxcbiAgbWF0ZXJpYWxSZWNhbGMgOiBtYXRlcmlhbFJlY2FsY1xufTtcbiIsIlwidXNlIHN0cmljdFwiO1xudmFyIHVjdW09cmVxdWlyZSgndWN1bS5qcycpO1xuXG4vLyBUaGVzZSB0aHJvdyBlcnJzLCBhbmQgbmVlZCB0byBiZSBpbiB0cnkgY2F0Y2hcbmZ1bmN0aW9uIG11bHRpcGx5KGEsYixhX25hbWVzLGJfbmFtZXMpIHtcbiAgdmFyIGFuPXt2YWx1ZTpcInZhbHVlXCIsdW5pdDpcInVuaXRcIn1cbiAgLCBibj17dmFsdWU6XCJ2YWx1ZVwiLHVuaXQ6XCJ1bml0XCJ9XG4gICwgcGFyc2VkXG4gICAgLCB1bml0XG4gICAgLCBwcmU9W11cbiAgICAsIG11bHQ9e31cbiAgICA7XG5cbiAgICBpZiAoYV9uYW1lcykge1xuICAgICAgaWYgKGFfbmFtZXMudW5pdCkgYW4udW5pdD1hX25hbWVzLnVuaXQ7XG4gICAgICBpZiAoYV9uYW1lcy52YWx1ZSkgYW4udmFsdWU9YV9uYW1lcy52YWx1ZTtcbiAgICB9XG4gICAgaWYgKGJfbmFtZXMpIHtcbiAgICAgIGlmIChiX25hbWVzLnVuaXQpIGJuLnVuaXQ9Yl9uYW1lcy51bml0O1xuICAgICAgaWYgKGJfbmFtZXMudmFsdWUpIGJuLnZhbHVlPWJfbmFtZXMudmFsdWU7XG4gICAgfVxuXG4gIHBhcnNlZCA9IHVjdW0ucGFyc2UoJygnK1thW2FuLnVuaXRdKycpLignK2JbYm4udW5pdF1dKycpJyk7XG4gIG11bHQudmFsdWU9KChhW2FuLnZhbHVlXSk/YVthbi52YWx1ZV06MSkqKChiW2JuLnZhbHVlXSk/Yltibi52YWx1ZV06MSkqcGFyc2VkLnZhbHVlO1xuXG4gIC8vIENvbnZlcnQgdW5pdCBiYWNrXG4gIGZvciAodW5pdCBpbiBwYXJzZWQudW5pdHMpIHtcbiAgICBwcmUucHVzaCh1bml0K3BhcnNlZC51bml0c1t1bml0XSk7XG4gIH1cbiAgbXVsdC51bml0PXByZS5qb2luKCcuJyk7XG4gIHJldHVybiBtdWx0O1xufVxuXG5mdW5jdGlvbiBtdWx0aXBseV90b191bml0bGVzcyhhLGIsYW4sYm4pIHtcbiAgdmFyIG11bHQ9dW5pdF9tdWxpdHBseShhLGIsYW4sYm4pO1xuICBpZiAobXVsdC51bml0ICE9PSB7fSkge1xuICAgIHRocm93IG0rXCIgaXMgbm90IHVuaXRsZXNzXCI7XG4gIH1cbiAgcmV0dXJuIG11bHQ7XG59XG5cbmZ1bmN0aW9uIHN1bShsaXN0LG5hbWVzKSB7XG4gIHZhciBuPXt2YWx1ZTpcInZhbHVlXCIsdW5pdDpcInVuaXRcIn1cbiAgLCBzdW1cbiAgLCBpXG4gICwgaV91bml0XG4gIDtcblxuICBpZiAobmFtZXMpIHtcbiAgICBpZiAobmFtZXMudW5pdCkgbi51bml0PW5hbWVzLnVuaXQ7XG4gICAgaWYgKG5hbWVzLnZhbHVlKSBuLnZhbHVlPW5hbWVzLnZhbHVlO1xuICB9XG4gIHN1bSA9KGxpc3QubGVuZ3RoID4gMCk/e3ZhbHVlOmxpc3RbMF1bbi52YWx1ZV0sdW5pdDpsaXN0WzBdW24udW5pdF19Ont2YWx1ZTowLHVuaXQ6e319O1xuICBmb3IgKGk9MTtpPGxpc3QubGVuZ3RoO2krKykge1xuICAgIGlfdW5pdD0gdWN1bS5jb252ZXJ0KGxpc3RbaV1bbi52YWx1ZV0sbGlzdFtpXVtuLnVuaXRdLHN1bS51bml0KTtcbiAgICBzdW0udmFsdWUrPWlfdW5pdC52YWx1ZTtcbiAgfVxuICByZXR1cm4geyd2YWx1ZSc6c3VtLnZhbHVlLCd1bml0JzpzdW0udW5pdH07XG59XG5cblxuZnVuY3Rpb24gY2xlYW5Eb2xsYXJzKHVuaXRzKSB7XG4gIGlmKCB1bml0cyA9PT0gdW5kZWZpbmVkICkge1xuICAgIHJldHVybiAnMSc7XG4gIH1cbiAgcmV0dXJuIHVuaXRzLnJlcGxhY2UoLyh1cyk/XFwkL2csICcxJyk7XG59XG5cblxubW9kdWxlLmV4cG9ydHMgPSB7XG4gICBzdW0gOiBzdW0sXG4gICBtdWx0aXBseSA6IG11bHRpcGx5LFxuICAgbXVsdGlwbHlfdG9fdW5pdGxlc3MgOiBtdWx0aXBseV90b191bml0bGVzcyxcbiAgIGNsZWFuRG9sbGFycyA6IGNsZWFuRG9sbGFyc1xuIH07XG4iLCIndXNlIHN0cmljdCc7XG4vKipcbiAqIGtlZXBzIHRyYWNrIG9mIG1hdGVyaWFscywgcHJpY2VzIGFuZCBjb21wbGV4IG1hdGVyaWFscy4gIG1vc3RseSBmb3IgY2xpZW50IGFwcC5cbiAqKi9cbnZhciB1dWlkID0gcmVxdWlyZSgnbm9kZS11dWlkJyk7XG52YXIgdW5pdHMgPSByZXF1aXJlKCcuLi91bml0cycpO1xudmFyIHV0aWxzID0gcmVxdWlyZSgnLi91dGlscycpO1xudmFyIGV2ZW50cyA9IHJlcXVpcmUoJ2V2ZW50cycpLkV2ZW50RW1pdHRlcjtcbmV2ZW50cyA9IG5ldyBldmVudHMoKTtcbmV2ZW50cy5zZXRNYXhMaXN0ZW5lcnMoMTAwMCk7XG5cbnZhciB0b3RhbCA9IDA7XG52YXIgZGF0YSA9IFtdLCBtYXRlcmlhbENvbnRyb2xsZXIsIGxhc3RSZWNhbGNNc2c7XG5cbmZ1bmN0aW9uIGluaXQoY29udHJvbGxlcikge1xuICBtYXRlcmlhbENvbnRyb2xsZXIgPSBjb250cm9sbGVyO1xuICBtYXRlcmlhbENvbnRyb2xsZXIub24oJ21hdGVyaWFsLXVwZGF0ZScsIGhhbmRsZU1hdGVyaWFsVXBkYXRlcyk7XG4gIHV0aWxzLmluaXQodGhpcyk7XG59XG5cbmZ1bmN0aW9uIHJlbW92ZShuYW1lKSB7XG4gIHZhciBvcDtcblxuICBpZiggdHlwZW9mIG5hbWUgPT09ICdvYmplY3QnICYmIGRhdGEuaW5kZXhPZihuYW1lKSA+IC0xICkge1xuICAgIG9wID0gZGF0YS5zcGxpY2UoZGF0YS5pbmRleE9mKG5hbWUpLCAxKVswXTtcbiAgICBldmVudHMuZW1pdCgnb3BlcmF0aW9uLXJlbW92ZWQnLCB7b3BlcmF0aW9uOiBvcH0pO1xuXG4gICAgcmV0dXJuIHN1Y2Nlc3MoKTtcbiAgfSBlbHNlIHtcbiAgICBmb3IoIHZhciBpID0gMDsgaSA8IGRhdGEubGVuZ3RoOyBpKysgKSB7XG4gICAgICBpZiggZGF0YVtpXS5uYW1lID09PSBuYW1lICApIHtcbiAgICAgICAgb3AgPSBkYXRhLnNwbGljZShpLCAxKVswXTtcbiAgICAgICAgZXZlbnRzLmVtaXQoJ29wZXJhdGlvbi1yZW1vdmVkJywge29wZXJhdGlvbjogb3B9KTtcbiAgICAgICAgcmV0dXJuIHN1Y2Nlc3MoKTtcbiAgICAgIH1cbiAgICB9XG4gIH1cblxuICByZXR1cm4gc2V0RXJyb3IoJ29wZXJhdGlvbiAnKyh0eXBlb2YgbmFtZSA9PT0gJ29iamVjdCcgPyBuYW1lLm5hbWUgOiBuYW1lKSsnIGRvZXMgbm90IGV4aXN0Jyk7XG59XG5cbmZ1bmN0aW9uIGFkZChvcGVyYXRpb24sIG9wdGlvbnMpIHtcbiAgaWYoICFvcHRpb25zICkge1xuICAgIG9wdGlvbnMgPSB7fTtcbiAgfVxuXG4gIHZhciBvcCA9IGdldChvcGVyYXRpb24ubmFtZSk7XG4gIGlmKCAhb3AuZXJyb3IgJiYgIW9wdGlvbnMucmVwbGFjZSApIHtcbiAgICByZXR1cm4gc2V0RXJyb3Iob3BlcmF0aW9uLm5hbWUsICdvcGVyYXRpb24gYWxyZWFkeSBleGlzdHMnKTtcbiAgfVxuXG4gIGlmKCAhb3BlcmF0aW9uLm1hdGVyaWFscyApIHtcbiAgICBvcGVyYXRpb24ubWF0ZXJpYWxzID0gW107XG4gIH1cbiAgZm9yKCB2YXIgaSA9IDA7IGkgPCBvcGVyYXRpb24ubWF0ZXJpYWxzLmxlbmd0aDsgaSsrICkge1xuICAgIG9wZXJhdGlvbi5tYXRlcmlhbHNbaV0uaWQgPSB1dWlkLnY0KCk7XG4gIH1cblxuICB2YXIgaXNOZXcgPSBmYWxzZTtcbiAgaWYoIG9wLmVycm9yICkge1xuICAgIGlzTmV3ID0gdHJ1ZTtcbiAgICBkYXRhLnB1c2gob3BlcmF0aW9uKTtcbiAgfSBlbHNlIHtcbiAgICBkYXRhW2RhdGEuaW5kZXhPZihvcCldID0gb3BlcmF0aW9uO1xuICB9XG5cblxuXG4gIGlmKCBvcHRpb25zLnJlbmFtZSApIHtcbiAgICByZW1vdmUob3B0aW9ucy5yZW5hbWUpO1xuICB9XG5cbiAgaWYoICFvcHRpb25zLm5vUmVjYWxjICkge1xuICAgIHJlY2FsYygpO1xuICB9XG5cbiAgdmFyIHJlc3BvbnNlID0ge1xuICAgIG9wZXJhdGlvbiA6IG9wZXJhdGlvbixcbiAgICBpc05ldyA6IGlzTmV3LFxuICAgIHJlcGxhY2VkIDogb3B0aW9ucy5yZW5hbWUsXG4gICAgZmxhZyA6IG9wdGlvbnMuZmxhZywgLy8gbGV0IHRoZSBjYWxsZXIgcGFzcyBpdCdzIG93biBmbGFnc1xuICAgIHN1Y2Nlc3MgOiB0cnVlXG4gIH07XG5cbiAgaWYoICFvcHRpb25zLm5vRXZlbnQgKSB7XG4gICAgZXZlbnRzLmVtaXQoJ29wZXJhdGlvbi11cGRhdGUnLCByZXNwb25zZSk7XG4gIH1cblxuICByZXR1cm4gcmVzcG9uc2U7XG59XG5cbi8vIGJ1bGsgYWRkL3VwZGF0ZSBpdGVtcyB3aXRoIG9ubHkgb25lIHJlY2FsY1xuZnVuY3Rpb24gYnVsa0FkZChvcGVyYXRpb25zLCBvcHRpb25zKSB7XG4gIHZhciBhZGRPcHRpb25zID0ge30sIGk7XG4gIGZvciggdmFyIGtleSBpbiBvcHRpb25zICkge1xuICAgIGFkZE9wdGlvbnNba2V5XSA9IG9wdGlvbnM7XG4gIH1cblxuICBhZGRPcHRpb25zLm5vUmVjYWxjID0gdHJ1ZTtcbiAgYWRkT3B0aW9ucy5ub0V2ZW50ID0gdHJ1ZTtcblxuICB2YXIgcmVzcG9uc2VzID0ge307XG4gIGZvciggaSA9IDA7IGkgPCBvcGVyYXRpb25zLmxlbmd0aDsgaSsrICkge1xuICAgIHJlc3BvbnNlc1tvcGVyYXRpb25zW2ldLm5hbWVdID0gYWRkKG9wZXJhdGlvbnNbaV0sIGFkZE9wdGlvbnMpO1xuICB9XG5cbiAgLy8gbm93IGp1c3QgcmVjYWxjIG9uY2VcbiAgcmVjYWxjKCk7XG5cbiAgZm9yKCBpID0gMDsgaSA8IG9wZXJhdGlvbnMubGVuZ3RoOyBpKysgKSB7XG4gICAgaWYoIHJlc3BvbnNlc1tvcGVyYXRpb25zW2ldLm5hbWVdLmVycm9yICkge1xuICAgICAgY29udGludWU7XG4gICAgfVxuICAgIHJlc3BvbnNlc1tvcGVyYXRpb25zW2ldLm5hbWVdLmJsdWsgPSB0cnVlO1xuICAgIGV2ZW50cy5lbWl0KCdvcGVyYXRpb24tdXBkYXRlJywgcmVzcG9uc2VzW29wZXJhdGlvbnNbaV0ubmFtZV0pO1xuICB9XG5cbiAgcmV0dXJuIHJlc3BvbnNlcztcbn1cblxuZnVuY3Rpb24gZ2V0KG5hbWUpIHtcbiAgaWYoICFuYW1lICkge1xuICAgIHJldHVybiBkYXRhO1xuICB9XG5cbiAgZm9yKCB2YXIgaSA9IDA7IGkgPCBkYXRhLmxlbmd0aDsgaSsrICkge1xuICAgIGlmKCBkYXRhW2ldLm5hbWUgPT09IG5hbWUgKSB7XG4gICAgICByZXR1cm4gZGF0YVtpXTtcbiAgICB9XG4gIH1cblxuICByZXR1cm4gc2V0RXJyb3IobmFtZSsnIGlzIG5vdCBpbiB0aGUgbWF0ZXJpYWwgbGlzdCcpO1xufVxuXG5mdW5jdGlvbiBmaW5kKHR4dCwgaWdub3JlKSB7XG4gIHZhciByZSA9IG5ldyBSZWdFeHAoJy4qJyt0eHQrJy4qJywgJ2knKTtcbiAgdmFyIHJlc3VsdHMgPSBbXSwga2V5O1xuXG4gIGZvciggdmFyIGkgPSAwOyBpIDwgZGF0YS5sZW5ndGg7IGkrKyApIHtcbiAgICBpZiggZGF0YVtpXS5uYW1lLm1hdGNoKHJlKSAmJiBkYXRhW2ldLm5hbWUgIT09IGlnbm9yZSApIHtcbiAgICAgIHJlc3VsdHMucHVzaChkYXRhW2ldKTtcbiAgICB9XG4gIH1cblxuICByZXR1cm4gcmVzdWx0cztcbn1cblxuLy8gcmVjYWxjIGFsbCBjb21wbGV4IG1hdGVyaWFsIGNvc3RzXG5mdW5jdGlvbiByZWNhbGMoKSB7XG4gIHZhciB0ID0gbmV3IERhdGUoKS5nZXRUaW1lKCk7XG5cbiAgdmFyIG9wZXJhdGlvbiwgbWVzc2FnZXMgPSBbXTtcbiAgdG90YWwgPSAwO1xuICB2YXIgcmFuZ2UgPSB7XG4gICAgc3RhcnQgOiBudWxsLFxuICAgIHN0b3AgOiBudWxsLFxuICAgIGFsbCA6IFtdXG4gIH07XG5cbiAgZm9yKCB2YXIgaSA9IDA7IGkgPCBkYXRhLmxlbmd0aDsgaSsrICkge1xuICAgIG9wZXJhdGlvbiA9IGRhdGFbaV07XG4gICAgdmFyIG5ld01lc3NhZ2VzID0gb3BlcmF0aW9uUmVjYWxjKG9wZXJhdGlvbik7XG4gICAgZm9yKCB2YXIgaiA9IDA7IGogPCBuZXdNZXNzYWdlcy5sZW5ndGg7IGorKyApIHtcbiAgICAgIG1lc3NhZ2VzLnB1c2gobmV3TWVzc2FnZXNbal0pO1xuICAgIH1cblxuICAgIHZhciBzY2hlZHVsZWQgPSBvcGVyYXRpb24uc2NoZWR1bGUgPyBvcGVyYXRpb24uc2NoZWR1bGUubGVuZ3RoIDogMDtcblxuICAgIGlmKCAhb3BlcmF0aW9uLnNjaGVkdWxlICkge1xuICAgICAgbWVzc2FnZXMucHVzaCh7XG4gICAgICAgIGluZGV4IDogaSxcbiAgICAgICAgb3BlcmF0aW9uIDogb3BlcmF0aW9uLm5hbWUsXG4gICAgICAgIHdhcm5pbmcgOiB3YXJuKCdObyBzY2hlZHVsZSBzZXQnKVxuICAgICAgfSk7XG4gICAgfSBlbHNlIHtcbiAgICAgIHVwZGF0ZVNjaGVkdWxlUmFuZ2Uob3BlcmF0aW9uLnNjaGVkdWxlLCByYW5nZSwgb3BlcmF0aW9uLm5hbWUpO1xuICAgIH1cblxuICAgIG9wZXJhdGlvbi50b3RhbCA9IHNjaGVkdWxlZCAqIG9wZXJhdGlvbi5zdWJ0b3RhbDtcbiAgICB0b3RhbCArPSBvcGVyYXRpb24udG90YWw7XG4gIH1cblxuXG4gIHZhciBzcGVuZGluZ0J5TW9udGggPSB1dGlscy5jYWxjdWxhdGVQZXJNb250aChyYW5nZSk7XG5cbiAgY29uc29sZS5sb2coJ09wZXJhdGlvbiBSZWNhbGM6ICcrKG5ldyBEYXRlKCkuZ2V0VGltZSgpIC0gdCkrJ21zJyk7XG5cbiAgZXZlbnRzLmVtaXQoJ3RvdGFsLXVwZGF0ZScsIHtcbiAgICB0b3RhbCA6IHRvdGFsLFxuICAgIHJhbmdlIDogcmFuZ2UsXG4gICAgc3BlbmRpbmdCeU1vbnRoIDogc3BlbmRpbmdCeU1vbnRoXG4gIH0pO1xuXG4gIGxhc3RSZWNhbGNNc2cgPSBtZXNzYWdlcztcbiAgcmV0dXJuIG1lc3NhZ2VzO1xufVxuXG5mdW5jdGlvbiBvcGVyYXRpb25SZWNhbGMob3BlcmF0aW9uKSB7XG4gIHZhciBtYXRlcmlhbERlZiwgbWF0ZXJpYWxJbXBsLCBvcFRvdGFsID0gMDtcbiAgdmFyIG1lc3NhZ2VzID0gW107XG5cbiAgZm9yKCB2YXIgaSA9IDA7IGkgPCBvcGVyYXRpb24ubWF0ZXJpYWxzLmxlbmd0aDsgaSsrICkge1xuICAgIG1hdGVyaWFsSW1wbCA9IG9wZXJhdGlvbi5tYXRlcmlhbHNbaV07XG4gICAgbWF0ZXJpYWxJbXBsLmVycm9yID0gbnVsbDtcblxuICAgIG1hdGVyaWFsRGVmID0gbWF0ZXJpYWxDb250cm9sbGVyLmdldChtYXRlcmlhbEltcGwubmFtZSk7XG5cbiAgICAvLyB3YXMgYSBzcGVjaWZpZWQgbWF0ZXJpYWwgbm90IGZvdW5kP1xuICAgIGlmKCBtYXRlcmlhbERlZi5lcnJvciApIHtcbiAgICAgIG1hdGVyaWFsSW1wbC5lcnJvciA9IG1hdGVyaWFsRGVmOyAvLyB0aGlzIGlzIGFjdHVhbGx5IHRoZSBlcnJvciByZXNwb25zZSBvYmplY3RcbiAgICAgIG1lc3NhZ2VzLnB1c2goe1xuICAgICAgICBpZCA6IG1hdGVyaWFsSW1wbC5pZCxcbiAgICAgICAgbWF0ZXJpYWwgOiBtYXRlcmlhbEltcGwubmFtZSxcbiAgICAgICAgb3BlcmF0aW9uIDogb3BlcmF0aW9uLm5hbWUsXG4gICAgICAgIGVycm9yIDogbWF0ZXJpYWxEZWZcbiAgICAgIH0pO1xuICAgICAgY29udGludWU7XG4gICAgfVxuXG4gICAgLy8gd2FzIGEgbWF0ZXJpYWwgYW1vdW50IG5vdCBzcGVjaWZpZWQ/XG4gICAgaWYoIHR5cGVvZiBtYXRlcmlhbERlZi5wcmljZSAhPT0gJ251bWJlcicgfHwgaXNOYU4obWF0ZXJpYWxEZWYucHJpY2UpICkge1xuICAgICAgbWF0ZXJpYWxJbXBsLmVycm9yID0gc2V0RXJyb3IobWF0ZXJpYWxEZWYubmFtZSsnIGZvdW5kIGJ1dCBwcmljZSBpcyBub3QgYSBudW1iZXIuJyk7XG4gICAgICBtZXNzYWdlcy5wdXNoKHtcbiAgICAgICAgaWQgOiBtYXRlcmlhbEltcGwuaWQsXG4gICAgICAgIG1hdGVyaWFsIDogbWF0ZXJpYWxJbXBsLm5hbWUsXG4gICAgICAgIG9wZXJhdGlvbiA6IG9wZXJhdGlvbi5uYW1lLFxuICAgICAgICB3YXJuaW5nIDogbWF0ZXJpYWxJbXBsLmVycm9yXG4gICAgICB9KTtcbiAgICAgIGNvbnRpbnVlO1xuICAgIH1cblxuICAgIC8vIHdhcyBhIG1hdGVyaWFsIGFtb3VudCBub3Qgc3BlY2lmaWVkP1xuICAgIGlmKCBtYXRlcmlhbEltcGwuYW1vdW50ID09PSB1bmRlZmluZWQgKSB7XG4gICAgICBtYXRlcmlhbEltcGwud2FybmluZyA9IHdhcm4oJ05vIGFtb3VudCBzZXQuICBTZXR0aW5nIHRvIDEuJyk7XG4gICAgICBtZXNzYWdlcy5wdXNoKHtcbiAgICAgICAgaWQgOiBtYXRlcmlhbEltcGwuaWQsXG4gICAgICAgIG1hdGVyaWFsIDogbWF0ZXJpYWxJbXBsLm5hbWUsXG4gICAgICAgIG9wZXJhdGlvbiA6IG9wZXJhdGlvbi5uYW1lLFxuICAgICAgICB3YXJuaW5nIDogbWF0ZXJpYWxJbXBsLndhcm5pbmdcbiAgICAgIH0pO1xuICAgICAgbWF0ZXJpYWxJbXBsLmFtb3VudCA9IDE7XG4gICAgfVxuXG4gICAgdmFyIHZhbHVlID0gdW5pdHMuY2FsY3VsYXRlT3BNYXRlcmlhbFByaWNlKG1hdGVyaWFsRGVmLCBtYXRlcmlhbEltcGwpO1xuICAgIGlmKCB2YWx1ZS5lcnJvciApIHtcbiAgICAgIG1hdGVyaWFsSW1wbC5wcmljZSA9IDA7XG4gICAgICBtYXRlcmlhbEltcGwuZXJyb3IgPSB2YWx1ZTtcbiAgICB9IGVsc2Uge1xuICAgICAgbWF0ZXJpYWxJbXBsLnByaWNlID0gdmFsdWUudmFsdWU7XG4gICAgfVxuXG4gICAgLy8gZGlkIHNvbWV0aGluZyBiYWQgaGFwcGVuIGluIHByaWNlIGNhbGN1bGF0aW9uP1xuICAgIGlmKCBpc05hTihtYXRlcmlhbEltcGwucHJpY2UpICkge1xuICAgICAgbWF0ZXJpYWxJbXBsLmVycm9yID0gc2V0RXJyb3IoJ1ByaWNlIGNhbGN1bGF0ZWQgdG8gTmFOLiAgTWF0ZXJpYWwgbm90IGluY2x1ZGVkIGluIHRvdGFsLicpO1xuICAgICAgbWVzc2FnZXMucHVzaCh7XG4gICAgICAgIG9wZXJhdGlvbiA6IG9wZXJhdGlvbi5uYW1lLFxuICAgICAgICBtYXRlcmlhbCA6IG1hdGVyaWFsSW1wbC5uYW1lLFxuICAgICAgICBpZCA6IG1hdGVyaWFsSW1wbC5pZCxcbiAgICAgICAgZXJyb3IgOiBtYXRlcmlhbEltcGwuZXJyb3JcbiAgICAgIH0pO1xuICAgICAgY29udGludWU7XG4gICAgfVxuXG4gICAgb3BUb3RhbCArPSBtYXRlcmlhbEltcGwucHJpY2U7XG4gIH1cblxuICBvcGVyYXRpb24uc3VidG90YWwgPSBvcFRvdGFsO1xuXG4gIHJldHVybiBtZXNzYWdlcztcbn1cblxuXG5mdW5jdGlvbiB1cGRhdGVTY2hlZHVsZVJhbmdlKHNjaGVkdWxlLCByYW5nZSwgbmFtZSkge1xuICB2YXIgcGFydHMsIGRhdGU7XG4gIHNjaGVkdWxlLmZvckVhY2goZnVuY3Rpb24oZCl7XG4gICAgcGFydHMgPSBkLmRhdGUuc3BsaXQoJy0nKTtcbiAgICBkYXRlID0gbmV3IERhdGUocGFyc2VJbnQocGFydHNbMF0pLCBwYXJzZUludChwYXJ0c1sxXSktMSwgcGFyc2VJbnQocGFydHNbMl0pKTtcblxuICAgIHJhbmdlLmFsbC5wdXNoKHtcbiAgICAgIGRhdGUgOiBkYXRlLFxuICAgICAgbGVuZ3RoIDogZC5sZW5ndGgsXG4gICAgICB1bml0cyA6IGQudW5pdHMsXG4gICAgICBuYW1lIDogbmFtZVxuICAgIH0pO1xuXG4gICAgaWYoIHJhbmdlLnN0YXJ0ID09PSBudWxsICkge1xuICAgICAgcmFuZ2Uuc3RhcnQgPSBkYXRlO1xuICAgIH0gZWxzZSBpZiggcmFuZ2Uuc3RhcnQuZ2V0VGltZSgpID4gZGF0ZS5nZXRUaW1lKCkgKSB7XG4gICAgICByYW5nZS5zdGFydCA9IGRhdGU7XG4gICAgfVxuXG4gICAgaWYoIHJhbmdlLnN0b3AgPT09IG51bGwgKSB7XG4gICAgICByYW5nZS5zdG9wID0gZGF0ZTtcbiAgICB9IGVsc2UgaWYoIHJhbmdlLnN0b3AuZ2V0VGltZSgpIDwgZGF0ZS5nZXRUaW1lKCkgKSB7XG4gICAgICByYW5nZS5zdG9wID0gZGF0ZTtcbiAgICB9XG4gIH0pO1xufVxuXG5mdW5jdGlvbiBoYW5kbGVNYXRlcmlhbFVwZGF0ZXMoZSkge1xuICBpZiggZS5ibHVrICkge1xuICAgIHJldHVybjsgLy8gaWdub3JlIGV2ZW50IGZyb20gYmx1ayB1cGRhdGVzXG4gICAgLy8gYmx1ayB1cGRhdGVyIHdpbGwgbWFudWFsbHkgcG9rZSByZWNhbGMoKTtcbiAgfVxuXG4gIHZhciBtYXRlcmlhbCA9IGUubWF0ZXJpYWw7XG4gIHZhciByZXBsYWNlZCA9IGUucmVwbGFjZWQ7XG5cbiAgcmVjYWxjKCk7XG5cbiAgZm9yKCB2YXIgaSA9IDA7IGkgPCBkYXRhLmxlbmd0aDsgaSsrICkge1xuICAgIHZhciBvcGVyYXRpb24gPSBkYXRhW2ldO1xuICAgIHZhciBmaXJlQ2hhbmdlID0gZmFsc2U7XG5cbiAgICBmb3IoIHZhciBqID0gMDsgaiA8IG9wZXJhdGlvbi5tYXRlcmlhbHMubGVuZ3RoOyBqKysgKSB7XG4gICAgICB2YXIgbWF0ZXJpYWxJbXBsID0gb3BlcmF0aW9uLm1hdGVyaWFsc1tqXTtcblxuICAgICAgLy8gdXBkYXRlIGFueSByZW5hbWVzXG4gICAgICBpZiggbWF0ZXJpYWxJbXBsLm5hbWUgPT09IHJlcGxhY2VkICkge1xuICAgICAgICBtYXRlcmlhbEltcGwubmFtZSA9IG1hdGVyaWFsLm5hbWU7XG4gICAgICAgIGZpcmVDaGFuZ2UgPSB0cnVlO1xuXG4gICAgICAvLyBsb29rIHRvIHNlZSBpZiB0aGlzIG9wZXJhdGlvbiBoYXMgdGhlIHVwZGF0ZWQgbWF0ZXJpYWxcbiAgICB9IGVsc2UgaWYoIG1hdGVyaWFsSW1wbC5uYW1lID09PSBtYXRlcmlhbC5uYW1lICkge1xuICAgICAgICBmaXJlQ2hhbmdlID0gdHJ1ZTtcbiAgICAgIH1cbiAgICB9XG5cbiAgICBpZiggZmlyZUNoYW5nZSApIHtcbiAgICAgIGV2ZW50cy5lbWl0KCdvcGVyYXRpb24tdXBkYXRlJywge1xuICAgICAgICBvcGVyYXRpb246IG9wZXJhdGlvblxuICAgICAgfSk7XG4gICAgfVxuICB9XG59XG5cbmZ1bmN0aW9uIGdldExhc3RSZWNhbGNNc2coKSB7XG4gIHJldHVybiBsYXN0UmVjYWxjTXNnO1xufVxuXG5mdW5jdGlvbiBzdWNjZXNzKCkge1xuICByZXR1cm4ge3N1Y2Nlc3M6IHRydWV9O1xufVxuXG5mdW5jdGlvbiBzZXRFcnJvcihtc2cpIHtcbiAgcmV0dXJuIHtcbiAgICBlcnJvciA6IHRydWUsXG4gICAgbWVzc2FnZSA6IG1zZ1xuICB9O1xufVxuXG5mdW5jdGlvbiB3YXJuKG1zZykge1xuICByZXR1cm4ge1xuICAgIHdhcm5pbmcgOiB0cnVlLFxuICAgIG1lc3NhZ2UgOiBtc2dcbiAgfTtcbn1cblxuXG5tb2R1bGUuZXhwb3J0cyA9IHtcbiAgYWRkIDogYWRkLFxuICBnZXQgOiBnZXQsXG4gIHJlbW92ZSA6IHJlbW92ZSxcbiAgYnVsa0FkZCA6IGJ1bGtBZGQsXG4gIGZpbmQgOiBmaW5kLFxuICBvbiA6IGZ1bmN0aW9uKGV2ZW50LCBsaXN0ZW5lcil7XG4gICAgZXZlbnRzLm9uKGV2ZW50LCBsaXN0ZW5lcik7XG4gIH0sXG4gIHJlY2FsYyA6IHJlY2FsYyxcbiAgaW5pdCA6IGluaXQsXG4gIGdldExhc3RSZWNhbGNNc2cgOiBnZXRMYXN0UmVjYWxjTXNnLFxuICBhZGRVcGRhdGVNYXRlcmlhbCA6IHV0aWxzLmFkZFVwZGF0ZU1hdGVyaWFsXG59O1xuIiwiJ3VzZSBzdHJpY3QnO1xuXG52YXIgdXVpZCA9IHJlcXVpcmUoJ25vZGUtdXVpZCcpO1xudmFyIG9wZXJhdGlvbkNvbnRyb2xsZXI7XG52YXIgbXNQZXJEYXkgPSA4NjQwMDAwMDtcblxuZnVuY3Rpb24gaW5pdChjb250cm9sbGVyKSB7XG4gIG9wZXJhdGlvbkNvbnRyb2xsZXIgPSBjb250cm9sbGVyO1xufVxuXG5mdW5jdGlvbiBhZGRVcGRhdGVNYXRlcmlhbChvcGVyYXRpb24sIG1hdGVyaWFsSW1wbCkge1xuICBpZiggIW1hdGVyaWFsSW1wbC5pZCApIHtcbiAgICBtYXRlcmlhbEltcGwuaWQgPSB1dWlkLnY0KCk7XG4gICAgb3BlcmF0aW9uLm1hdGVyaWFscy5wdXNoKG1hdGVyaWFsSW1wbCk7XG4gICAgcmV0dXJuIHtzdWNjZXNzOnRydWUsIG1lc3NhZ2U6ICdhZGRlZCd9O1xuICB9XG5cbiAgZm9yKCB2YXIgaSA9IDA7IGkgPCBvcGVyYXRpb24ubWF0ZXJpYWxzLmxlbmd0aDsgaSsrICkge1xuICAgIGlmKCBvcGVyYXRpb24ubWF0ZXJpYWxzW2ldLmlkID09PSBtYXRlcmlhbEltcGwuaWQgKSB7XG4gICAgICBvcGVyYXRpb24ubWF0ZXJpYWxzW2ldID0gbWF0ZXJpYWxJbXBsO1xuICAgICAgcmV0dXJuIHtzdWNjZXNzOnRydWUsIG1lc3NhZ2U6ICd1cGRhdGVkJ307XG4gICAgfVxuICB9XG5cbiAgb3BlcmF0aW9uLm1hdGVyaWFscy5wdXNoKG1hdGVyaWFsSW1wbCk7XG4gIHJldHVybiB7c3VjY2Vzczp0cnVlLCBtZXNzYWdlOiAnYWRkZWQnfTtcbn1cblxuZnVuY3Rpb24gY2FsY3VsYXRlUGVyTW9udGgocmFuZ2UpIHtcblxuICB2YXIgbnVtTW9udGhzID0gZ2V0TnVtTW9udGhzKHJhbmdlKTtcblxuICB2YXIgbW9udGhzID0gW107XG4gIHZhciBsYXN0ID0gcmFuZ2Uuc3RhcnQ7XG4gIG1vbnRocy5wdXNoKHtcbiAgICBtb250aCA6IHRvTW9udGhTdHJpbmcobGFzdCksXG4gICAgdG90YWwgOiAwXG4gIH0pO1xuXG4gIGZvciggdmFyIGkgPSAxOyBpIDwgbnVtTW9udGhzOyBpKysgKSB7XG4gICAgbGFzdCA9IG5leHRNb250aChsYXN0KTtcblxuICAgIG1vbnRocy5wdXNoKHtcbiAgICAgIG1vbnRoIDogdG9Nb250aFN0cmluZyhsYXN0KSxcbiAgICAgIHRvdGFsIDogMFxuICAgIH0pO1xuICB9XG5cbiAgdmFyIG9wZXJhdGlvbnMgPSBvcGVyYXRpb25Db250cm9sbGVyLmdldCgpO1xuICBmb3IoIHZhciB6ID0gMDsgeiA8IG9wZXJhdGlvbnMubGVuZ3RoOyB6KysgKSB7XG4gICAgdmFyIG9wZXJhdGlvbiA9IG9wZXJhdGlvbnNbel07XG4gICAgaWYoICFvcGVyYXRpb24uc2NoZWR1bGUgKSB7XG4gICAgICBjb250aW51ZTtcbiAgICB9XG5cbiAgICBmb3IoIHZhciBqID0gMDsgaiA8IG9wZXJhdGlvbi5zY2hlZHVsZS5sZW5ndGg7IGorKyApIHtcbiAgICAgIHZhciBkYXRlID0gb3BlcmF0aW9uLnNjaGVkdWxlW2pdO1xuICAgICAgdmFyIGQgPSB0b0RhdGUoZGF0ZS5kYXRlKTtcbiAgICAgIHZhciBpbmRleCA9IGdldE1vbnRoSW5kZXgodG9Nb250aFN0cmluZyhkKSwgbW9udGhzKTtcbiAgICAgIHZhciBsZW5ndGggPSBnZXRJbnRlcnZhbFRpbWUoZGF0ZSk7XG5cbiAgICAgIGZvciggaSA9IDA7IGkgPCBsZW5ndGg7IGkrKyApIHtcbiAgICAgICAgaWYoIG1vbnRocy5sZW5ndGggPD0gaStpbmRleCApIHtcbiAgICAgICAgICBtb250aHMucHVzaCh7XG4gICAgICAgICAgICBtb250aCA6IHRvTW9udGhTdHJpbmcoZCksXG4gICAgICAgICAgICB0b3RhbCA6IDBcbiAgICAgICAgICB9KTtcbiAgICAgICAgfVxuXG4gICAgICAgIG1vbnRoc1tpK2luZGV4XS50b3RhbCArPSAob3BlcmF0aW9uLnN1YnRvdGFsIC8gbGVuZ3RoKTtcbiAgICAgICAgbW9udGhzW2kraW5kZXhdW29wZXJhdGlvbi5uYW1lXSA9IG9wZXJhdGlvbi5zdWJ0b3RhbCAvIGxlbmd0aDtcbiAgICAgIH1cbiAgICB9XG4gIH1cblxuICByZXR1cm4gbW9udGhzO1xufVxuXG5mdW5jdGlvbiBnZXRNb250aEluZGV4KG1vbnRoLCBtb250aHMpIHtcbiAgdmFyIHQgPSBuZXcgRGF0ZSgpLmdldFRpbWUoKTtcbiAgZm9yKCB2YXIgaSA9IDA7IGkgPCBtb250aHMubGVuZ3RoOyBpKysgKSB7XG4gICAgaWYoIG1vbnRoc1tpXS5tb250aCA9PT0gbW9udGggKSB7XG4gICAgICByZXR1cm4gaTtcbiAgICB9XG4gIH1cbiAgcmV0dXJuIDA7XG59XG5cbmZ1bmN0aW9uIHRvRGF0ZShkYXRlU3RyKSB7XG4gIHZhciBwYXJ0cyA9IGRhdGVTdHIuc3BsaXQoJy0nKTtcbiAgcmV0dXJuIG5ldyBEYXRlKHBhcnNlSW50KHBhcnRzWzBdKSwgcGFyc2VJbnQocGFydHNbMV0pLCBwYXJzZUludChwYXJ0c1syXSkpO1xufVxuXG5mdW5jdGlvbiB0b01vbnRoU3RyaW5nKGRhdGUpIHtcbiAgaWYoICFkYXRlICkge1xuICAgIHJldHVybiAnMS8xOTAwJztcbiAgfVxuICByZXR1cm4gKGRhdGUuZ2V0TW9udGgoKSsxKSsnLycrKGRhdGUuZ2V0WWVhcigpKzE5MDApO1xufVxuXG5mdW5jdGlvbiBuZXh0TW9udGgoZGF0ZSkge1xuICByZXR1cm4gbmV3IERhdGUoZGF0ZS5nZXRZZWFyKCkrMTkwMCwgZGF0ZS5nZXRNb250aCgpKzEsIGRhdGUuZ2V0RGF0ZSgpKTtcbn1cblxuZnVuY3Rpb24gZ2V0TnVtTW9udGhzKHJhbmdlKSB7XG4gIGlmKCAhcmFuZ2Uuc3RvcCB8fCAhcmFuZ2Uuc3RhcnQgKSB7XG4gICAgcmV0dXJuIDE7XG4gIH1cblxuICB2YXIgZGlmZiA9IHJhbmdlLnN0b3AuZ2V0VGltZSgpIC0gcmFuZ2Uuc3RhcnQuZ2V0VGltZSgpO1xuICBpZiggZGlmZiA8IDg2NDAwMDAwICogMzAgKSB7XG4gICAgZGlmZiA9IDg2NDAwMDAwICogMzA7XG4gIH1cblxuICB2YXIgZGF5cyA9IGRpZmYgLyA4NjQwMDAwMDtcbiAgcmV0dXJuIE1hdGguY2VpbChkYXlzIC8gMzApO1xufVxuXG5mdW5jdGlvbiBnZXRJbnRlcnZhbFRpbWUoZGF0ZSkge1xuICB2YXIgbCA9IHBhcnNlSW50KGRhdGUubGVuZ3RoKTtcbiAgaWYoIGRhdGUudW5pdHMgPT09ICd5ZWFyJyApIHtcbiAgICByZXR1cm4gbCAqIDEyO1xuICB9IGVsc2UgaWYoIGRhdGUudW5pdHMgPT09ICdtb250aCcgKSB7XG4gICAgcmV0dXJuIGw7XG4gIH0gZWxzZSB7XG4gICAgcmV0dXJuIDE7XG4gIH1cbn1cblxubW9kdWxlLmV4cG9ydHMgPSB7XG4gIGluaXQgOiBpbml0LFxuICBjYWxjdWxhdGVQZXJNb250aCA6IGNhbGN1bGF0ZVBlck1vbnRoLFxuICBhZGRVcGRhdGVNYXRlcmlhbCA6IGFkZFVwZGF0ZU1hdGVyaWFsXG59O1xuIiwiJ3VzZSBzdHJpY3QnO1xuXG4vKipcbiAqIFRyYW5zZm9ybSB0aGUgcGx2OCBvYmplY3QgZGVzY3JpcHRpb24gdG8gYXBwIG9iamVjdCBkZXNjcmlwdGlvbi5cbiAqIGluIHRoZSBlbmQsIHRoaXMgc2hvdWxkbid0IGRvIG11Y2guICBqdXN0IGEgbGl0dGxlIGFwcCBzdWdhci5cbiAqKi9cblxuIG1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24oY29uZmlnKSB7XG4gICB2YXIgYXBwID0ge1xuICAgICBjbGFzc2VzIDoge30sXG4gICAgIG1hdGVyaWFscyA6IFtdLFxuICAgICBvcGVyYXRpb25zIDogW10sXG4gICAgIGZhcm0gOiB7fVxuICAgfTtcblxuICAgaWYoIGNvbmZpZy5tYXRlcmlhbHMgKSB7XG4gICAgIGFwcC5tYXRlcmlhbHMgPSBnZXRNYXRlcmlhbHMoY29uZmlnLm1hdGVyaWFscyk7XG4gICAgIGFwcC5jbGFzc2VzID0gZ2V0Q2xhc3NlcyhhcHAubWF0ZXJpYWxzKTtcbiAgIH1cbiAgIGlmKCBjb25maWcucHJpY2VzICkge1xuICAgICBqb2luUHJpY2VzKGFwcC5tYXRlcmlhbHMsIGNvbmZpZy5wcmljZXMpO1xuICAgfVxuXG4gICBpZiggY29uZmlnLmZhcm0gKSB7XG4gICAgIHZhciBmYXJtID0gY29uZmlnLmZhcm1bMF07XG4gICAgIGFwcC5mYXJtID0gZ2V0RmFybShmYXJtKTtcblxuICAgICBpZiggZmFybS5vcGVyYXRpb25zICkge1xuICAgICAgIGFwcC5vcGVyYXRpb25zID0gZ2V0T3BlcmF0aW9ucyhmYXJtLm9wZXJhdGlvbnMpO1xuICAgICB9XG4gICAgIGlmKCBmYXJtLnNjaGVkdWxlICkge1xuICAgICAgIGpvaW5TY2hlZHVsZShhcHAub3BlcmF0aW9ucywgZmFybS5zY2hlZHVsZSk7XG4gICAgIH1cbiAgIH1cblxuICAgcmV0dXJuIGFwcDtcbiB9O1xuXG4gZnVuY3Rpb24gam9pblNjaGVkdWxlKG9wZXJhdGlvbnMsIHNjaGVkdWxlcykge1xuICAgZm9yKCB2YXIgaSA9IDA7IGkgPCBzY2hlZHVsZXMubGVuZ3RoOyBpKysgKSB7XG4gICAgIHZhciBzY2hlZHVsZSA9IHNjaGVkdWxlc1tpXTtcbiAgICAgZm9yKCB2YXIgaiA9IDA7IGogPCBvcGVyYXRpb25zLmxlbmd0aDsgaisrICkge1xuICAgICAgIGlmKCBzY2hlZHVsZS5vcGVyYXRpb24gPT09IG9wZXJhdGlvbnNbal0ubmFtZSApIHtcbiAgICAgICAgIHZhciBwYXJ0cyA9IHNjaGVkdWxlLmR1cmF0aW9uLnNwbGl0KCcgJyk7XG5cbiAgICAgICAgIGlmKCBwYXJ0c1sxXS5tYXRjaCgvbW9uLykgKSB7XG4gICAgICAgICAgIHBhcnRzWzFdID0gJ21vbnRoJztcbiAgICAgICAgIH0gZWxzZSBpZiAoIHBhcnRzWzFdLm1hdGNoKC95ZWFyLykgKSB7XG4gICAgICAgICAgIHBhcnRzWzFdID0gJ3llYXInO1xuICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgcGFydHNbMV0gPSAnZGF5JztcbiAgICAgICAgIH1cblxuICAgICAgICBvcGVyYXRpb25zW2pdLnNjaGVkdWxlLnB1c2goe1xuICAgICAgICAgIGRhdGUgOiBzY2hlZHVsZS5zdGFydCxcbiAgICAgICAgICBsZW5ndGggOiBwYXJ0c1swXSxcbiAgICAgICAgICB1bml0cyA6IHBhcnRzWzFdXG4gICAgICAgIH0pO1xuXG4gICAgICAgIGJyZWFrO1xuICAgICAgIH1cbiAgICAgfVxuICAgfVxuIH1cblxuZnVuY3Rpb24gam9pblByaWNlcyhtYXRlcmlhbHMsIHByaWNlcykge1xuICBmb3IoIHZhciBpID0gMDsgaSA8IHByaWNlcy5sZW5ndGg7IGkrKyApIHtcbiAgICB2YXIgcHJpY2UgPSBwcmljZXNbaV07XG4gICAgdmFyIGZvdW5kID0gZmFsc2U7XG5cbiAgICBmb3IoIHZhciBqID0gMDsgaiA8IG1hdGVyaWFscy5sZW5ndGg7IGorKyApIHtcbiAgICAgIGlmKCBtYXRlcmlhbHNbal0ubmFtZSA9PT0gcHJpY2UubWF0ZXJpYWwgKSB7XG5cbiAgICAgICAgaWYoIG1hdGVyaWFsc1tqXS50eXBlID09PSAnY29tcGxleCcgKSB7XG4gICAgICAgICAgbWF0ZXJpYWxzW2pdLm1hdGVyaWFscy5Fc3RpbWF0ZSA9IHtcbiAgICAgICAgICAgIHVuaXRzIDogJ3VzJCcsXG4gICAgICAgICAgICBhbW91bnQgOiBwcmljZS5wcmljZVxuICAgICAgICAgIH07XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgbWF0ZXJpYWxzW2pdLnByaWNlID0gcHJpY2UucHJpY2U7XG4gICAgICAgICAgbWF0ZXJpYWxzW2pdLnVuaXRzID0gcHJpY2UudW5pdDtcbiAgICAgICAgfVxuXG4gICAgICAgIGZvdW5kID0gdHJ1ZTtcbiAgICAgICAgYnJlYWs7XG5cbiAgICAgIH1cbiAgICB9XG5cbiAgICBpZiggIWZvdW5kICkge1xuICAgICAgLypjb25zb2xlLmxvZyh7XG4gICAgICAgIG5hbWUgOiBwcmljZS5tYXRlcmlhbCxcbiAgICAgICAgcHJpY2UgOiBwcmljZS5wcmljZSxcbiAgICAgICAgdW5pdHMgOiBwcmljZS51bml0XG4gICAgICB9KTsqL1xuXG4gICAgICBtYXRlcmlhbHMucHVzaCh7XG4gICAgICAgIG5hbWUgOiBwcmljZS5tYXRlcmlhbCxcbiAgICAgICAgcHJpY2UgOiBwcmljZS5wcmljZSxcbiAgICAgICAgdW5pdHMgOiBwcmljZS51bml0XG4gICAgICB9KTsgLy8gVE9ETzogc29tZSBtYXRlcmlhbHMgZG8gbm90IHNlZW0gdG8gYXBwZWFyIGluIG1hdGVyaWFsIGxpc3RcbiAgICB9XG5cbiAgfVxufVxuXG5mdW5jdGlvbiBnZXRNYXRlcmlhbHMoaW5mbykge1xuICB2YXIgbWF0ZXJpYWxzID0gW107XG5cbiAgaW5mby5mb3JFYWNoKGZ1bmN0aW9uKGkpe1xuICAgIGkubmFtZSA9IGkubWF0ZXJpYWw7XG4gICAgZGVsZXRlIGkubWF0ZXJpYWw7XG5cbiAgICBpLnVuaXRzID0gaS51bml0O1xuICAgIGRlbGV0ZSBpLnVuaXQ7XG5cbiAgICBpZiggIWkucmVxdWlyZXMgKSB7XG4gICAgICBtYXRlcmlhbHMucHVzaChpKTtcbiAgICAgIHJldHVybjtcbiAgICB9XG5cbiAgICBpLnR5cGUgPSAnY29tcGxleCc7XG4gICAgaS5tYXRlcmlhbHMgPSB7fTtcblxuICAgIGZvciggdmFyIGogPSAwOyBqIDwgaS5yZXF1aXJlcy5sZW5ndGg7IGorKyApIHtcbiAgICAgIGkubWF0ZXJpYWxzW2kucmVxdWlyZXNbal0ubWF0ZXJpYWxdID0ge1xuICAgICAgICBhbW91bnQgOiBpLnJlcXVpcmVzW2pdLmFtb3VudCxcbiAgICAgICAgb3JpZ2luYWxBbW91bnQgOiBpLnJlcXVpcmVzW2pdLmFtb3VudCxcbiAgICAgICAgdW5pdHMgOiBpLnJlcXVpcmVzW2pdLnVuaXRcbiAgICAgIH07XG4gICAgfVxuXG4gICAgZGVsZXRlIGkucmVxdWlyZXM7XG5cbiAgICBtYXRlcmlhbHMucHVzaChpKTtcbiAgfSk7XG5cbiAgcmV0dXJuIG1hdGVyaWFscztcbn1cblxuZnVuY3Rpb24gZ2V0T3BlcmF0aW9ucyhpbmZvKSB7XG4gIHZhciBvcHMgPSBbXTtcblxuICBpbmZvLmZvckVhY2goZnVuY3Rpb24oaSl7XG4gICAgdmFyIG9wID0ge1xuICAgICAgbmFtZSA6IGkub3BlcmF0aW9uLFxuICAgICAgbWF0ZXJpYWxzIDogW10sXG4gICAgICB1bml0cyA6ICdbYWNyX3VzXScsXG4gICAgICBzY2hlZHVsZSA6IFtdXG4gICAgfTtcblxuICAgIGZvciggdmFyIGogPSAwOyBqIDwgaS5tYXRlcmlhbHMubGVuZ3RoOyBqKysgKSB7XG4gICAgICBpLm1hdGVyaWFsc1tqXS51bml0cyA9IGkubWF0ZXJpYWxzW2pdLnVuaXQ7XG4gICAgICBkZWxldGUgaS5tYXRlcmlhbHNbal0udW5pdDtcbiAgICAgIFxuICAgICAgaS5tYXRlcmlhbHNbal0ubmFtZSA9IGkubWF0ZXJpYWxzW2pdLm1hdGVyaWFsO1xuICAgICAgZGVsZXRlIGkubWF0ZXJpYWxzW2pdLm1hdGVyaWFsO1xuXG4gICAgICBvcC5tYXRlcmlhbHMucHVzaChpLm1hdGVyaWFsc1tqXSk7XG4gICAgfVxuXG4gICAgb3BzLnB1c2gob3ApO1xuICB9KTtcblxuICByZXR1cm4gb3BzO1xufVxuXG5mdW5jdGlvbiBnZXRGYXJtKGluZm8pIHtcbiAgdmFyIGZhcm0gPSB7fTtcbiAgZm9yKCB2YXIga2V5IGluIGluZm8gKSB7XG4gICAgaWYoIHR5cGVvZiBpbmZvW2tleV0gPT09ICdzdHJpbmcnICkge1xuICAgICAgZmFybVtrZXldID0gaW5mb1trZXldO1xuICAgIH1cbiAgfVxuICByZXR1cm4gZmFybTtcbn1cblxuZnVuY3Rpb24gZ2V0Q2xhc3NlcyhtYXRlcmlhbHMpIHtcbiAgdmFyIGNsYXNzZXMgPSB7fTtcblxuICBtYXRlcmlhbHMuZm9yRWFjaChmdW5jdGlvbihtYXRlcmlhbCl7XG4gICAgaWYoIGNsYXNzZXNbbWF0ZXJpYWwuY2xhc3NdICkge1xuICAgICAgY2xhc3Nlc1ttYXRlcmlhbC5jbGFzc10ucHVzaChtYXRlcmlhbC5uYW1lKTtcbiAgICB9IGVsc2Uge1xuICAgICAgY2xhc3Nlc1ttYXRlcmlhbC5jbGFzc10gPSBbbWF0ZXJpYWwubmFtZV07XG4gICAgfVxuICB9KTtcblxuICByZXR1cm4gY2xhc3Nlcztcbn1cbiIsIi8qKlxuICogaGVscGVyIGZpbGUgZm9yIHRoaW5ncyBsaWtlIFVJIHNlbGVjdG9yc1xuICoqL1xuXG52YXIgdGltZSA9IFtcbiAge1xuICAgIG5hbWUgOiAnbWludXRlJyxcbiAgICBzeW1ib2wgOiAnbWluJ1xuICB9LFxuICB7XG4gICAgbmFtZSA6ICdob3VyJyxcbiAgICBzeW1ib2wgOiAnaCdcbiAgfSxcbiAge1xuICAgIG5hbWUgOiAnZGF5JyxcbiAgICBzeW1ib2wgOiAnZCdcbiAgfSxcbiAge1xuICAgIG5hbWUgOiAneWVhcicsXG4gICAgc3ltYm9sIDogJ2EnXG4gIH1cbl07XG5cbnZhciBsZW5ndGggPSBbXG4gIHtcbiAgICBuYW1lIDogJ2NlbnRpbWV0ZXInLFxuICAgIHN5bWJvbCA6ICdjbScsXG4gIH0sXG4gIHtcbiAgICBuYW1lIDogJ2luY2gnLFxuICAgIHN5bWJvbCA6ICdbaW5fdXNdJyxcbiAgICBhY2NlcHRlZCA6IFsnaW4nXVxuICB9LFxuICB7XG4gICAgbmFtZSA6ICdmb290JyxcbiAgICBzeW1ib2wgOiAnW2Z0X3VzXScsXG4gICAgYWNjZXB0ZWQgOiBbJ2Z0J11cbiAgfSxcbiAge1xuICAgIG5hbWUgOiAnbWV0ZXInLFxuICAgIHN5bWJvbCA6ICdtJyxcbiAgfSxcbiAge1xuICAgIG5hbWUgOiAneWFyZCcsXG4gICAgc3ltYm9sIDogJ1t5ZF91c10nLFxuICAgIGFjY2VwdGVkIDogWyd5ZCddXG4gIH0sXG4gIHtcbiAgICBuYW1lIDogJ21pbGUnLFxuICAgIHN5bWJvbCA6ICdbbWlfdXNdJyxcbiAgICBhY2NlcHRlZCA6IFsnbWknXVxuICB9LFxuICB7XG4gICAgbmFtZSA6ICdraWxvbWV0ZXInLFxuICAgIHN5bWJvbCA6ICdrbScsXG4gIH1cbl07XG5cbnZhciBhcmVhID0gW1xuICB7XG4gICAgbmFtZSA6ICdoZWN0YXJlJyxcbiAgICBzeW1ib2wgOiAnaGFyJyxcbiAgICBhY2NlcHQgOiBbJ2FyJ11cbiAgfSxcbiAge1xuICAgIG5hbWUgOiAnYWNyZScsXG4gICAgc3ltYm9sIDogJ1thY3JfdXNdJyxcbiAgICBhY2NlcHRlZCA6IFsnYWMnXVxuICB9XG5dO1xuXG52YXIgd2VpZ2h0ID0gW1xuICB7XG4gICAgbmFtZSA6ICdvdW5jZScsXG4gICAgc3ltYm9sIDogJ1tvel9hdl0nLFxuICAgIGFjY2VwdGVkIDogWydveiddXG4gIH0sXG4gIHtcbiAgICBuYW1lIDogJ3BvdW5kJyxcbiAgICBzeW1ib2wgOiAnW2xiX2F2XScsXG4gICAgYWNjZXB0ZWQgOiBbJ2xiJ11cbiAgfVxuXTtcblxudmFyIHZvbHVtZSA9IFtcbiAge1xuICAgIG5hbWUgOiAnY3VwJyxcbiAgICBzeW1ib2wgOiAnW2N1cF91c10nXG4gIH0sXG4gIHtcbiAgICBuYW1lIDogJ3F1YXJ0JyxcbiAgICBzeW1ib2wgOiAnW3F0X3VzXScsXG4gICAgYWNjZXB0ZWQgOiBbJ3F0J11cbiAgfSxcbiAge1xuICAgIG5hbWUgOiAncGludCcsXG4gICAgc3ltYm9sIDogJ1twdF91c10nLFxuICAgIGFjY2VwdGVkIDogWydwdCddXG4gIH0sXG4gIHtcbiAgICBuYW1lIDogJ2dhbGxvbicsXG4gICAgc3ltYm9sIDogJ1tnYWxfdXNdJyxcbiAgICBhY2NlcHRlZCA6IFsnZ2FsJ11cbiAgfSxcbiAge1xuICAgIG5hbWUgOiAnZmx1aWQgb3VuY2UnLFxuICAgIHN5bWJvbCA6ICdbZm96X3VzXScsXG4gICAgYWNjZXB0ZWQgOiBbJ2Zsb3onXVxuICB9XG5dO1xuXG52YXIgcHJpY2UgPSBbXG4gIHtcbiAgICBuYW1lIDogJ2RvbGxhcicsXG4gICAgc3ltYm9sIDogJycsXG4gICAgYWNjZXB0ZWQgOiBbJyQnLCAndXMkJ11cbiAgfVxuXTtcblxubW9kdWxlLmV4cG9ydHMgPSB7XG4gIHByaWNlIDogcHJpY2UsXG4gIHZvbHVtZSA6IHZvbHVtZSxcbiAgd2VpZ2h0IDogd2VpZ2h0LFxuICB0aW1lIDogdGltZSxcbiAgbGVuZ3RoIDogbGVuZ3RoLFxuICBhcmVhIDogYXJlYVxufVxuIiwiJ3VzZSBzdHJpY3QnO1xuXG52YXIgZGVmaW5pdGlvbnMgPSByZXF1aXJlKCcuL2RlZmluaXRpb25zJyk7XG52YXIgbWF0aCA9IHJlcXVpcmUoJy4uL21vZGVsL3VuaXRfbWF0aCcpO1xudmFyIHVjdW0gPSByZXF1aXJlKCd1Y3VtLmpzJyk7XG5cbnZhciBsb29rdXAgPSB7fTtcbmZvciggdmFyIHR5cGUgaW4gZGVmaW5pdGlvbnMgKSB7XG4gIHZhciBhcnJheSA9IGRlZmluaXRpb25zW3R5cGVdO1xuXG4gIGZvciggdmFyIGkgPSAwOyBpIDwgYXJyYXkubGVuZ3RoOyBpKysgKSB7XG4gICAgYXJyYXlbaV0udHlwZSA9IHR5cGU7XG5cbiAgICBsb29rdXBbYXJyYXlbaV0ubmFtZV0gPSBhcnJheVtpXTtcbiAgICBpZiggYXJyYXlbaV0uc3ltYm9sICkge1xuICAgICAgbG9va3VwW2FycmF5W2ldLnN5bWJvbF0gPSBhcnJheVtpXTtcbiAgICB9XG4gICAgaWYoIGFycmF5W2ldLmFjY2VwdGVkICkge1xuICAgICAgZm9yKCB2YXIgaiA9IDA7IGogPCBhcnJheVtpXS5hY2NlcHRlZC5sZW5ndGg7IGorKyApIHtcbiAgICAgICAgbG9va3VwW2FycmF5W2ldLmFjY2VwdGVkW2pdXSA9IGFycmF5W2ldO1xuICAgICAgfVxuICAgIH1cbiAgfVxufVxuXG4vLyBnZXQgbGFiZWwgZm9yIG5hbWUuICBtb3N0bHkgZm9yIGdldHRpbmcgdXMkIGFzICQgb3IgW3VzX2dhbF0gYXMgZ2FsbG9uLlxuZnVuY3Rpb24gZ2V0TGFiZWwobmFtZSwgc2hvcnQpIHtcbiAgdmFyIHBhcnRzLCBsYWJlbDtcblxuICBpZiggbmFtZSA9PT0gdW5kZWZpbmVkICkge1xuICAgIHJldHVybiAnJztcbiAgfVxuXG4gIGlmKCBuYW1lLmluZGV4T2YoJy8nKSA+IC0xICkge1xuICAgIHBhcnRzID0gbmFtZS5zcGxpdCgnLycpO1xuXG4gICAgbGFiZWwgPSBbXTtcbiAgICBwYXJ0cy5mb3JFYWNoKGZ1bmN0aW9uKHApe1xuICAgICAgbGFiZWwucHVzaChnZXRMYWJlbChwLCBzaG9ydCkpO1xuICAgIH0pO1xuXG4gICAgcmV0dXJuIGxhYmVsLmpvaW4oJy8nKTtcbiAgfVxuXG4gIGlmKCBuYW1lLmluZGV4T2YoJy4nKSA+IC0xICkge1xuICAgIHBhcnRzID0gbmFtZS5zcGxpdCgnLicpO1xuXG4gICAgbGFiZWwgPSBbXTtcbiAgICBwYXJ0cy5mb3JFYWNoKGZ1bmN0aW9uKHApe1xuICAgICAgbGFiZWwucHVzaChnZXRMYWJlbChwLCBzaG9ydCkpO1xuICAgIH0pO1xuXG4gICAgcmV0dXJuIGxhYmVsLmpvaW4oJyonKTtcbiAgfVxuXG4gIHZhciB0eHQgPSBuYW1lLnRvTG93ZXJDYXNlKCk7XG4gIGlmKCBsb29rdXBbdHh0XSApIHtcbiAgICBpZiggc2hvcnQgKSB7XG4gICAgICByZXR1cm4gbG9va3VwW3R4dF0uYWNjZXB0ZWQgPyBsb29rdXBbdHh0XS5hY2NlcHRlZFswXSA6IGxvb2t1cFt0eHRdLnN5bWJvbDtcbiAgICB9XG4gICAgcmV0dXJuIGxvb2t1cFt0eHRdLm5hbWU7XG4gIH1cbiAgcmV0dXJuIG5hbWU7XG59XG5cbi8vIGdldCB1bml0cyBvZiBzYW1lIHR5cGVcbmZ1bmN0aW9uIGdldExpa2VVbml0cyhuYW1lKSB7XG4gIHZhciB0eHQgPSBuYW1lLnRvTG93ZXJDYXNlKCk7XG4gIGlmKCAhbG9va3VwW3R4dF0gKSB7XG4gICAgcmV0dXJuIFtdO1xuICB9XG5cbiAgcmV0dXJuIGRlZmluaXRpb25zW2xvb2t1cFt0eHRdLnR5cGVdO1xufVxuXG5mdW5jdGlvbiBpbnZlcnQodW5pdHMpIHtcbiAgdW5pdHMgPSBtYXRoLmNsZWFuRG9sbGFycyh1bml0cyk7XG4gIHZhciByZXN1bHQ7XG4gIHRyeSB7XG4gICAgcmVzdWx0ID0gdWN1bS5wYXJzZSgnMS8oJyt1bml0cysnKScpO1xuICB9IGNhdGNoKGUpIHtcbiAgICByZXR1cm4gdW5pdHM7XG4gIH1cblxuICB2YXIgZCA9IFtdLCBuID0gW107XG4gIGZvciggdmFyIGtleSBpbiByZXN1bHQudW5pdHMgKSB7XG4gICAgaWYoIHJlc3VsdC51bml0c1trZXldID09PSAtMSApIHtcbiAgICAgIGQucHVzaChrZXkpO1xuICAgIH0gZWxzZSB7XG4gICAgICBuLnB1c2goa2V5KTtcbiAgICB9XG4gIH1cblxuICBpZiggcmVzdWx0LnZhbHVlID4gMSApIHtcbiAgICBuLnB1c2gocmVzdWx0LnZhbHVlKTtcbiAgfSBlbHNlIGlmICggcmVzdWx0LnZhbHVlIDwgMCApIHtcbiAgICBkLnB1c2goMSAvIHJlc3VsdC52YWx1ZSk7XG4gIH1cblxuICB1bml0cyA9IG4uam9pbignLicpO1xuXG4gIGlmKCB1bml0cyA9PT0gJycgKSB7XG4gICAgdW5pdHMgPSAndXMkJztcbiAgfVxuICBpZiggZC5sZW5ndGggPiAwICkge1xuICAgIHVuaXRzICs9ICcvJytkLmpvaW4oJy4nKTtcbiAgfVxuXG4gIHJldHVybiB1bml0cztcbn1cblxuZnVuY3Rpb24gY2FsY3VsYXRlT3BNYXRlcmlhbFByaWNlKG1hdGVyaWFsRGVmLCBtYXRlcmlhbEltcGwpIHtcbiAgdmFyIGNvbnZlcnQ7XG5cbiAgLy8gVE9ETzogdGhpcyBpcyBzdHJhbmdlLi4uIG1pbmQgaXMgdGlyZWQuLi4gaXMgdGhpcyBjb3JyZWN0P1xuICB2YXIgdW5pdHMgPSBtYXRlcmlhbERlZi51bml0cztcbiAgaWYoIG1hdGVyaWFsRGVmLnR5cGUgPT09ICdjb21wbGV4JyApIHtcbiAgICB1bml0cyA9ICcxLygnK3VuaXRzKycpJztcbiAgfVxuXG4gIGNvbnZlcnQgPSBjb252ZXJ0VW5pdHMobWF0ZXJpYWxJbXBsLnVuaXRzLCB1bml0cyk7XG4gIGNvbnZlcnQuZGVidWcyID0gbWF0ZXJpYWxJbXBsLmFtb3VudCsnICogJyttYXRlcmlhbERlZi5wcmljZSsnICogJytjb252ZXJ0LnZhbHVlO1xuICBjb252ZXJ0LnZhbHVlID0gbWF0ZXJpYWxJbXBsLmFtb3VudCAqIG1hdGVyaWFsRGVmLnByaWNlICogY29udmVydC52YWx1ZTtcblxuICByZXR1cm4gY29udmVydDtcbn1cblxuZnVuY3Rpb24gY2FsY3VsYXRlQ29tcGxleFByaWNlKG1hdGVyaWFsRGVmLCBtYXRlcmlhbEltcGwsIGNvbXBsZXhNYXRlcmlhbCkge1xuICAvLyBUT0RPOiB0aGlzIGlzIHN0cmFuZ2UuLi4gbWluZCBpcyB0aXJlZC4uLiBpcyB0aGlzIGNvcnJlY3Q/XG4gIHZhciB1bml0cyA9IG1hdGVyaWFsRGVmLnVuaXRzO1xuICBpZiggbWF0ZXJpYWxEZWYudHlwZSA9PT0gJ2NvbXBsZXgnICkge1xuICAgIHVuaXRzID0gJzEvKCcrdW5pdHMrJyknO1xuICB9XG4gIHZhciBjb252ZXJ0ID0gY29udmVydFVuaXRzKG1hdGVyaWFsSW1wbC51bml0cywgdW5pdHMpO1xuXG5cbiAgaWYoIGNvbnZlcnQuZXJyb3IgKSB7XG4gICAgcmV0dXJuIGNvbnZlcnQ7XG4gIH0gZWxzZSBpZiggT2JqZWN0LmtleXMoY29udmVydC51bml0cykubGVuZ3RoID4gMSApIHtcbiAgICByZXR1cm4ge1xuICAgICAgZXJyb3I6IHRydWUsXG4gICAgICBtZXNzYWdlIDogJ1VuaXRzIGRpZG5cXCd0IGNhbmNlbCcsXG4gICAgICBtYXRoIDogbWF0ZXJpYWxJbXBsLnVuaXRzKycgKiAnK21hdGVyaWFsRGVmLnVuaXRzXG4gICAgfTtcbiAgfVxuXG4gIGNvbnZlcnQuZGVidWcyID0gbWF0ZXJpYWxJbXBsLmFtb3VudCsnICogJyttYXRlcmlhbERlZi5wcmljZSsnICogJytjb252ZXJ0LnZhbHVlO1xuICBjb252ZXJ0LnZhbHVlID0gbWF0ZXJpYWxJbXBsLmFtb3VudCAqIG1hdGVyaWFsRGVmLnByaWNlICogY29udmVydC52YWx1ZTtcblxuICByZXR1cm4gY29udmVydDtcbn1cblxuZnVuY3Rpb24gY29udmVydFVuaXRzKHUxLCB1Mikge1xuICB2YXIgdGltZSA9IG5ldyBEYXRlKCkuZ2V0VGltZSgpO1xuICB0cnkge1xuICAgIHZhciB0MSA9IG1hdGguY2xlYW5Eb2xsYXJzKHUxKTtcbiAgICB2YXIgdDIgPSBtYXRoLmNsZWFuRG9sbGFycyh1Mik7XG5cbiAgICAvLyB0cnkgYW5kIHNlZSBpZiB3ZSBjYW4gZmFrZSBpdFxuICAgIGlmKCB0MiA9PT0gJzEvJyt0MSB8fCB0MiA9PT0gJzEvKCcrdDErJyknIHx8IHQxID09PSAnMS8nK3QyIHx8IHQxID09PSAnMS8oJyt0MisnKScgfHwgKHQxID09PSAnJyAmJiB0MiA9PT0gJycpICkge1xuICAgICAgcmV0dXJuIHtcbiAgICAgICAgdmFsdWUgOiAxLFxuICAgICAgICB1bml0cyA6IHt9LFxuICAgICAgICBzaW1wbGUgOiB0cnVlLFxuICAgICAgICBkZWJ1ZyA6ICcoJyt0MSsnKS4oJyt0MisnKSdcbiAgICAgIH07XG4gICAgfVxuXG4gICAgLy8gd2UgYWxsIGJsYW5rIHVuaXRzIGFzIGRvbGxhcnNcbiAgICBpZiggdDEgPT09ICcnICkge1xuICAgICAgdDEgPSAxO1xuICAgIH1cbiAgICBpZiggdDIgPT09ICcnICkge1xuICAgICAgdDIgPSAxO1xuICAgIH1cblxuICAgIHZhciB0bXAgPSAnKCcrdDErJykuKCcrdDIrJyknO1xuICAgIC8vdmFyIHQgPSB1Y3VtLmNhbm9uaWNhbGl6ZSh0bXApO1xuICAgIHZhciB0ID0gdWN1bS5wYXJzZSh0bXApO1xuICAgIHQuZGVidWcgPSB0bXA7XG4gICAgcmV0dXJuIHQ7XG4gIH0gY2F0Y2goZSkge1xuICAgIHJldHVybiB7XG4gICAgICBlcnJvciA6IHRydWUsXG4gICAgICBtZXNzYWdlIDogJ1VuYWJsZSB0byBjb252ZXJ0IHVuaXRzJyxcbiAgICAgIG1hdGggOiB1MSsnICogJyt1MixcbiAgICAgIGRlYnVnIDogJygnK21hdGguY2xlYW5Eb2xsYXJzKHUxKSsnKS4oJysgbWF0aC5jbGVhbkRvbGxhcnModTIpKycpJ1xuICAgIH07XG4gIH1cbn1cblxuLypcbmZ1bmN0aW9uIGNvbnZlcnRVbml0cyh1MSwgdTIsIHUzKSB7XG4gIHRyeSB7XG4gICAgdmFyIHQgPSAgdWN1bS5jYW5vbmljYWxpemUoJygnK21hdGguY2xlYW5Eb2xsYXJzKHUxKSsnKS4oJysgbWF0aC5jbGVhbkRvbGxhcnModTIpKycpLignK21hdGguY2xlYW5Eb2xsYXJzKHUzKSsnKScpO1xuICAgIHQuZGVidWcgPSAnKCcrbWF0aC5jbGVhbkRvbGxhcnModTEpKycpLignKyBtYXRoLmNsZWFuRG9sbGFycyh1MikrJykuKCcrbWF0aC5jbGVhbkRvbGxhcnModTMpKycpJztcbiAgICByZXR1cm4gdDtcbiAgfSBjYXRjaChlKSB7XG4gICAgcmV0dXJuIHtcbiAgICAgIGVycm9yIDogdHJ1ZSxcbiAgICAgIG1lc3NhZ2UgOiAnVW5hYmxlIHRvIGNvbnZlcnQgdW5pdHMnLFxuICAgICAgbWF0aCA6IHUxKycgKiAnK3UyKycgKiAnK3UzLFxuICAgICAgZGVidWcgOiAnKCcrbWF0aC5jbGVhbkRvbGxhcnModTEpKycpLignKyBtYXRoLmNsZWFuRG9sbGFycyh1MikrJykuKCcrbWF0aC5jbGVhbkRvbGxhcnModTMpKycpJ1xuICAgIH07XG4gIH1cbn0qL1xuXG5cbm1vZHVsZS5leHBvcnRzID0ge1xuICBpbnZlcnQgOiBpbnZlcnQsXG4gIGNvbnZlcnRVbml0cyA6IGNvbnZlcnRVbml0cyxcbiAgZ2V0TGFiZWwgOiBnZXRMYWJlbCxcbiAgZ2V0TGlrZVVuaXRzIDogZ2V0TGlrZVVuaXRzLFxuICBtYXRoIDogbWF0aCxcbiAgY2FsY3VsYXRlQ29tcGxleFByaWNlIDogY2FsY3VsYXRlQ29tcGxleFByaWNlLFxuICBjYWxjdWxhdGVPcE1hdGVyaWFsUHJpY2UgOiBjYWxjdWxhdGVPcE1hdGVyaWFsUHJpY2UsXG4gIGxvb2t1cCA6IGxvb2t1cFxufTtcbiIsIid1c2Ugc3RyaWN0JztcblxudmFyIG1hdGVyaWFsQ29udHJvbGxlciwgb3BlcmF0aW9uQ29udHJvbGxlcjtcblxubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbihvQ29udHJvbCwgbUNvbnRyb2wpIHtcbiAgb3BlcmF0aW9uQ29udHJvbGxlciA9IG9Db250cm9sO1xuICBtYXRlcmlhbENvbnRyb2xsZXIgPSBtQ29udHJvbDtcblxuICByZXR1cm4ge1xuICAgIGdldEFjdGl2ZU1hdGVyaWFscyA6IGdldEFjdGl2ZU1hdGVyaWFsc1xuICB9O1xufTtcblxuLy8gZ2V0IG1hdGVyaWFscyBjdXJyZW50bHkgaW4gdXNlIGJ5IG9wZXJhdGlvbnMgY29udHJvbGxlclxuZnVuY3Rpb24gZ2V0QWN0aXZlTWF0ZXJpYWxzKCkge1xuICB2YXIgbWF0ZXJpYWxzID0gW107XG5cbiAgdmFyIG9wZXJhdGlvbnMgPSBvcGVyYXRpb25Db250cm9sbGVyLmdldCgpO1xuICBvcGVyYXRpb25zLmZvckVhY2goZnVuY3Rpb24ob3Ape1xuICAgIF9nZXRBY3RpdmVNYXRlcmlhbHMob3AsIG1hdGVyaWFscyk7XG4gIH0pO1xuXG4gIG1hdGVyaWFscy5zb3J0KCk7XG4gIHJldHVybiBtYXRlcmlhbHM7XG59XG5cbmZ1bmN0aW9uIF9nZXRBY3RpdmVNYXRlcmlhbHMob2JqLCBsaXN0KSB7XG4gIGlmKCAhb2JqLm1hdGVyaWFscyApIHtcbiAgICByZXR1cm47XG4gIH1cblxuICBmb3IoIHZhciBuYW1lIGluIG9iai5tYXRlcmlhbHMgKSB7XG4gICAgdmFyIGRlZiA9IG1hdGVyaWFsQ29udHJvbGxlci5nZXQobmFtZSk7XG5cbiAgICBpZiggbGlzdC5pbmRleE9mKGRlZi5uYW1lKSA9PT0gLTEgKSB7XG4gICAgICBsaXN0LnB1c2goZGVmLm5hbWUpO1xuICAgIH1cblxuICAgIGlmKCBkZWYudHlwZSA9PT0gJ2NvbXBsZXgnICkge1xuICAgICAgX2dldEFjdGl2ZU1hdGVyaWFscyhkZWYsIGxpc3QpO1xuICAgIH1cbiAgfVxufVxuIiwiLy8gQ29weXJpZ2h0IEpveWVudCwgSW5jLiBhbmQgb3RoZXIgTm9kZSBjb250cmlidXRvcnMuXG4vL1xuLy8gUGVybWlzc2lvbiBpcyBoZXJlYnkgZ3JhbnRlZCwgZnJlZSBvZiBjaGFyZ2UsIHRvIGFueSBwZXJzb24gb2J0YWluaW5nIGFcbi8vIGNvcHkgb2YgdGhpcyBzb2Z0d2FyZSBhbmQgYXNzb2NpYXRlZCBkb2N1bWVudGF0aW9uIGZpbGVzICh0aGVcbi8vIFwiU29mdHdhcmVcIiksIHRvIGRlYWwgaW4gdGhlIFNvZnR3YXJlIHdpdGhvdXQgcmVzdHJpY3Rpb24sIGluY2x1ZGluZ1xuLy8gd2l0aG91dCBsaW1pdGF0aW9uIHRoZSByaWdodHMgdG8gdXNlLCBjb3B5LCBtb2RpZnksIG1lcmdlLCBwdWJsaXNoLFxuLy8gZGlzdHJpYnV0ZSwgc3VibGljZW5zZSwgYW5kL29yIHNlbGwgY29waWVzIG9mIHRoZSBTb2Z0d2FyZSwgYW5kIHRvIHBlcm1pdFxuLy8gcGVyc29ucyB0byB3aG9tIHRoZSBTb2Z0d2FyZSBpcyBmdXJuaXNoZWQgdG8gZG8gc28sIHN1YmplY3QgdG8gdGhlXG4vLyBmb2xsb3dpbmcgY29uZGl0aW9uczpcbi8vXG4vLyBUaGUgYWJvdmUgY29weXJpZ2h0IG5vdGljZSBhbmQgdGhpcyBwZXJtaXNzaW9uIG5vdGljZSBzaGFsbCBiZSBpbmNsdWRlZFxuLy8gaW4gYWxsIGNvcGllcyBvciBzdWJzdGFudGlhbCBwb3J0aW9ucyBvZiB0aGUgU29mdHdhcmUuXG4vL1xuLy8gVEhFIFNPRlRXQVJFIElTIFBST1ZJREVEIFwiQVMgSVNcIiwgV0lUSE9VVCBXQVJSQU5UWSBPRiBBTlkgS0lORCwgRVhQUkVTU1xuLy8gT1IgSU1QTElFRCwgSU5DTFVESU5HIEJVVCBOT1QgTElNSVRFRCBUTyBUSEUgV0FSUkFOVElFUyBPRlxuLy8gTUVSQ0hBTlRBQklMSVRZLCBGSVRORVNTIEZPUiBBIFBBUlRJQ1VMQVIgUFVSUE9TRSBBTkQgTk9OSU5GUklOR0VNRU5ULiBJTlxuLy8gTk8gRVZFTlQgU0hBTEwgVEhFIEFVVEhPUlMgT1IgQ09QWVJJR0hUIEhPTERFUlMgQkUgTElBQkxFIEZPUiBBTlkgQ0xBSU0sXG4vLyBEQU1BR0VTIE9SIE9USEVSIExJQUJJTElUWSwgV0hFVEhFUiBJTiBBTiBBQ1RJT04gT0YgQ09OVFJBQ1QsIFRPUlQgT1Jcbi8vIE9USEVSV0lTRSwgQVJJU0lORyBGUk9NLCBPVVQgT0YgT1IgSU4gQ09OTkVDVElPTiBXSVRIIFRIRSBTT0ZUV0FSRSBPUiBUSEVcbi8vIFVTRSBPUiBPVEhFUiBERUFMSU5HUyBJTiBUSEUgU09GVFdBUkUuXG5cbmZ1bmN0aW9uIEV2ZW50RW1pdHRlcigpIHtcbiAgdGhpcy5fZXZlbnRzID0gdGhpcy5fZXZlbnRzIHx8IHt9O1xuICB0aGlzLl9tYXhMaXN0ZW5lcnMgPSB0aGlzLl9tYXhMaXN0ZW5lcnMgfHwgdW5kZWZpbmVkO1xufVxubW9kdWxlLmV4cG9ydHMgPSBFdmVudEVtaXR0ZXI7XG5cbi8vIEJhY2t3YXJkcy1jb21wYXQgd2l0aCBub2RlIDAuMTAueFxuRXZlbnRFbWl0dGVyLkV2ZW50RW1pdHRlciA9IEV2ZW50RW1pdHRlcjtcblxuRXZlbnRFbWl0dGVyLnByb3RvdHlwZS5fZXZlbnRzID0gdW5kZWZpbmVkO1xuRXZlbnRFbWl0dGVyLnByb3RvdHlwZS5fbWF4TGlzdGVuZXJzID0gdW5kZWZpbmVkO1xuXG4vLyBCeSBkZWZhdWx0IEV2ZW50RW1pdHRlcnMgd2lsbCBwcmludCBhIHdhcm5pbmcgaWYgbW9yZSB0aGFuIDEwIGxpc3RlbmVycyBhcmVcbi8vIGFkZGVkIHRvIGl0LiBUaGlzIGlzIGEgdXNlZnVsIGRlZmF1bHQgd2hpY2ggaGVscHMgZmluZGluZyBtZW1vcnkgbGVha3MuXG5FdmVudEVtaXR0ZXIuZGVmYXVsdE1heExpc3RlbmVycyA9IDEwO1xuXG4vLyBPYnZpb3VzbHkgbm90IGFsbCBFbWl0dGVycyBzaG91bGQgYmUgbGltaXRlZCB0byAxMC4gVGhpcyBmdW5jdGlvbiBhbGxvd3Ncbi8vIHRoYXQgdG8gYmUgaW5jcmVhc2VkLiBTZXQgdG8gemVybyBmb3IgdW5saW1pdGVkLlxuRXZlbnRFbWl0dGVyLnByb3RvdHlwZS5zZXRNYXhMaXN0ZW5lcnMgPSBmdW5jdGlvbihuKSB7XG4gIGlmICghaXNOdW1iZXIobikgfHwgbiA8IDAgfHwgaXNOYU4obikpXG4gICAgdGhyb3cgVHlwZUVycm9yKCduIG11c3QgYmUgYSBwb3NpdGl2ZSBudW1iZXInKTtcbiAgdGhpcy5fbWF4TGlzdGVuZXJzID0gbjtcbiAgcmV0dXJuIHRoaXM7XG59O1xuXG5FdmVudEVtaXR0ZXIucHJvdG90eXBlLmVtaXQgPSBmdW5jdGlvbih0eXBlKSB7XG4gIHZhciBlciwgaGFuZGxlciwgbGVuLCBhcmdzLCBpLCBsaXN0ZW5lcnM7XG5cbiAgaWYgKCF0aGlzLl9ldmVudHMpXG4gICAgdGhpcy5fZXZlbnRzID0ge307XG5cbiAgLy8gSWYgdGhlcmUgaXMgbm8gJ2Vycm9yJyBldmVudCBsaXN0ZW5lciB0aGVuIHRocm93LlxuICBpZiAodHlwZSA9PT0gJ2Vycm9yJykge1xuICAgIGlmICghdGhpcy5fZXZlbnRzLmVycm9yIHx8XG4gICAgICAgIChpc09iamVjdCh0aGlzLl9ldmVudHMuZXJyb3IpICYmICF0aGlzLl9ldmVudHMuZXJyb3IubGVuZ3RoKSkge1xuICAgICAgZXIgPSBhcmd1bWVudHNbMV07XG4gICAgICBpZiAoZXIgaW5zdGFuY2VvZiBFcnJvcikge1xuICAgICAgICB0aHJvdyBlcjsgLy8gVW5oYW5kbGVkICdlcnJvcicgZXZlbnRcbiAgICAgIH1cbiAgICAgIHRocm93IFR5cGVFcnJvcignVW5jYXVnaHQsIHVuc3BlY2lmaWVkIFwiZXJyb3JcIiBldmVudC4nKTtcbiAgICB9XG4gIH1cblxuICBoYW5kbGVyID0gdGhpcy5fZXZlbnRzW3R5cGVdO1xuXG4gIGlmIChpc1VuZGVmaW5lZChoYW5kbGVyKSlcbiAgICByZXR1cm4gZmFsc2U7XG5cbiAgaWYgKGlzRnVuY3Rpb24oaGFuZGxlcikpIHtcbiAgICBzd2l0Y2ggKGFyZ3VtZW50cy5sZW5ndGgpIHtcbiAgICAgIC8vIGZhc3QgY2FzZXNcbiAgICAgIGNhc2UgMTpcbiAgICAgICAgaGFuZGxlci5jYWxsKHRoaXMpO1xuICAgICAgICBicmVhaztcbiAgICAgIGNhc2UgMjpcbiAgICAgICAgaGFuZGxlci5jYWxsKHRoaXMsIGFyZ3VtZW50c1sxXSk7XG4gICAgICAgIGJyZWFrO1xuICAgICAgY2FzZSAzOlxuICAgICAgICBoYW5kbGVyLmNhbGwodGhpcywgYXJndW1lbnRzWzFdLCBhcmd1bWVudHNbMl0pO1xuICAgICAgICBicmVhaztcbiAgICAgIC8vIHNsb3dlclxuICAgICAgZGVmYXVsdDpcbiAgICAgICAgbGVuID0gYXJndW1lbnRzLmxlbmd0aDtcbiAgICAgICAgYXJncyA9IG5ldyBBcnJheShsZW4gLSAxKTtcbiAgICAgICAgZm9yIChpID0gMTsgaSA8IGxlbjsgaSsrKVxuICAgICAgICAgIGFyZ3NbaSAtIDFdID0gYXJndW1lbnRzW2ldO1xuICAgICAgICBoYW5kbGVyLmFwcGx5KHRoaXMsIGFyZ3MpO1xuICAgIH1cbiAgfSBlbHNlIGlmIChpc09iamVjdChoYW5kbGVyKSkge1xuICAgIGxlbiA9IGFyZ3VtZW50cy5sZW5ndGg7XG4gICAgYXJncyA9IG5ldyBBcnJheShsZW4gLSAxKTtcbiAgICBmb3IgKGkgPSAxOyBpIDwgbGVuOyBpKyspXG4gICAgICBhcmdzW2kgLSAxXSA9IGFyZ3VtZW50c1tpXTtcblxuICAgIGxpc3RlbmVycyA9IGhhbmRsZXIuc2xpY2UoKTtcbiAgICBsZW4gPSBsaXN0ZW5lcnMubGVuZ3RoO1xuICAgIGZvciAoaSA9IDA7IGkgPCBsZW47IGkrKylcbiAgICAgIGxpc3RlbmVyc1tpXS5hcHBseSh0aGlzLCBhcmdzKTtcbiAgfVxuXG4gIHJldHVybiB0cnVlO1xufTtcblxuRXZlbnRFbWl0dGVyLnByb3RvdHlwZS5hZGRMaXN0ZW5lciA9IGZ1bmN0aW9uKHR5cGUsIGxpc3RlbmVyKSB7XG4gIHZhciBtO1xuXG4gIGlmICghaXNGdW5jdGlvbihsaXN0ZW5lcikpXG4gICAgdGhyb3cgVHlwZUVycm9yKCdsaXN0ZW5lciBtdXN0IGJlIGEgZnVuY3Rpb24nKTtcblxuICBpZiAoIXRoaXMuX2V2ZW50cylcbiAgICB0aGlzLl9ldmVudHMgPSB7fTtcblxuICAvLyBUbyBhdm9pZCByZWN1cnNpb24gaW4gdGhlIGNhc2UgdGhhdCB0eXBlID09PSBcIm5ld0xpc3RlbmVyXCIhIEJlZm9yZVxuICAvLyBhZGRpbmcgaXQgdG8gdGhlIGxpc3RlbmVycywgZmlyc3QgZW1pdCBcIm5ld0xpc3RlbmVyXCIuXG4gIGlmICh0aGlzLl9ldmVudHMubmV3TGlzdGVuZXIpXG4gICAgdGhpcy5lbWl0KCduZXdMaXN0ZW5lcicsIHR5cGUsXG4gICAgICAgICAgICAgIGlzRnVuY3Rpb24obGlzdGVuZXIubGlzdGVuZXIpID9cbiAgICAgICAgICAgICAgbGlzdGVuZXIubGlzdGVuZXIgOiBsaXN0ZW5lcik7XG5cbiAgaWYgKCF0aGlzLl9ldmVudHNbdHlwZV0pXG4gICAgLy8gT3B0aW1pemUgdGhlIGNhc2Ugb2Ygb25lIGxpc3RlbmVyLiBEb24ndCBuZWVkIHRoZSBleHRyYSBhcnJheSBvYmplY3QuXG4gICAgdGhpcy5fZXZlbnRzW3R5cGVdID0gbGlzdGVuZXI7XG4gIGVsc2UgaWYgKGlzT2JqZWN0KHRoaXMuX2V2ZW50c1t0eXBlXSkpXG4gICAgLy8gSWYgd2UndmUgYWxyZWFkeSBnb3QgYW4gYXJyYXksIGp1c3QgYXBwZW5kLlxuICAgIHRoaXMuX2V2ZW50c1t0eXBlXS5wdXNoKGxpc3RlbmVyKTtcbiAgZWxzZVxuICAgIC8vIEFkZGluZyB0aGUgc2Vjb25kIGVsZW1lbnQsIG5lZWQgdG8gY2hhbmdlIHRvIGFycmF5LlxuICAgIHRoaXMuX2V2ZW50c1t0eXBlXSA9IFt0aGlzLl9ldmVudHNbdHlwZV0sIGxpc3RlbmVyXTtcblxuICAvLyBDaGVjayBmb3IgbGlzdGVuZXIgbGVha1xuICBpZiAoaXNPYmplY3QodGhpcy5fZXZlbnRzW3R5cGVdKSAmJiAhdGhpcy5fZXZlbnRzW3R5cGVdLndhcm5lZCkge1xuICAgIHZhciBtO1xuICAgIGlmICghaXNVbmRlZmluZWQodGhpcy5fbWF4TGlzdGVuZXJzKSkge1xuICAgICAgbSA9IHRoaXMuX21heExpc3RlbmVycztcbiAgICB9IGVsc2Uge1xuICAgICAgbSA9IEV2ZW50RW1pdHRlci5kZWZhdWx0TWF4TGlzdGVuZXJzO1xuICAgIH1cblxuICAgIGlmIChtICYmIG0gPiAwICYmIHRoaXMuX2V2ZW50c1t0eXBlXS5sZW5ndGggPiBtKSB7XG4gICAgICB0aGlzLl9ldmVudHNbdHlwZV0ud2FybmVkID0gdHJ1ZTtcbiAgICAgIGNvbnNvbGUuZXJyb3IoJyhub2RlKSB3YXJuaW5nOiBwb3NzaWJsZSBFdmVudEVtaXR0ZXIgbWVtb3J5ICcgK1xuICAgICAgICAgICAgICAgICAgICAnbGVhayBkZXRlY3RlZC4gJWQgbGlzdGVuZXJzIGFkZGVkLiAnICtcbiAgICAgICAgICAgICAgICAgICAgJ1VzZSBlbWl0dGVyLnNldE1heExpc3RlbmVycygpIHRvIGluY3JlYXNlIGxpbWl0LicsXG4gICAgICAgICAgICAgICAgICAgIHRoaXMuX2V2ZW50c1t0eXBlXS5sZW5ndGgpO1xuICAgICAgaWYgKHR5cGVvZiBjb25zb2xlLnRyYWNlID09PSAnZnVuY3Rpb24nKSB7XG4gICAgICAgIC8vIG5vdCBzdXBwb3J0ZWQgaW4gSUUgMTBcbiAgICAgICAgY29uc29sZS50cmFjZSgpO1xuICAgICAgfVxuICAgIH1cbiAgfVxuXG4gIHJldHVybiB0aGlzO1xufTtcblxuRXZlbnRFbWl0dGVyLnByb3RvdHlwZS5vbiA9IEV2ZW50RW1pdHRlci5wcm90b3R5cGUuYWRkTGlzdGVuZXI7XG5cbkV2ZW50RW1pdHRlci5wcm90b3R5cGUub25jZSA9IGZ1bmN0aW9uKHR5cGUsIGxpc3RlbmVyKSB7XG4gIGlmICghaXNGdW5jdGlvbihsaXN0ZW5lcikpXG4gICAgdGhyb3cgVHlwZUVycm9yKCdsaXN0ZW5lciBtdXN0IGJlIGEgZnVuY3Rpb24nKTtcblxuICB2YXIgZmlyZWQgPSBmYWxzZTtcblxuICBmdW5jdGlvbiBnKCkge1xuICAgIHRoaXMucmVtb3ZlTGlzdGVuZXIodHlwZSwgZyk7XG5cbiAgICBpZiAoIWZpcmVkKSB7XG4gICAgICBmaXJlZCA9IHRydWU7XG4gICAgICBsaXN0ZW5lci5hcHBseSh0aGlzLCBhcmd1bWVudHMpO1xuICAgIH1cbiAgfVxuXG4gIGcubGlzdGVuZXIgPSBsaXN0ZW5lcjtcbiAgdGhpcy5vbih0eXBlLCBnKTtcblxuICByZXR1cm4gdGhpcztcbn07XG5cbi8vIGVtaXRzIGEgJ3JlbW92ZUxpc3RlbmVyJyBldmVudCBpZmYgdGhlIGxpc3RlbmVyIHdhcyByZW1vdmVkXG5FdmVudEVtaXR0ZXIucHJvdG90eXBlLnJlbW92ZUxpc3RlbmVyID0gZnVuY3Rpb24odHlwZSwgbGlzdGVuZXIpIHtcbiAgdmFyIGxpc3QsIHBvc2l0aW9uLCBsZW5ndGgsIGk7XG5cbiAgaWYgKCFpc0Z1bmN0aW9uKGxpc3RlbmVyKSlcbiAgICB0aHJvdyBUeXBlRXJyb3IoJ2xpc3RlbmVyIG11c3QgYmUgYSBmdW5jdGlvbicpO1xuXG4gIGlmICghdGhpcy5fZXZlbnRzIHx8ICF0aGlzLl9ldmVudHNbdHlwZV0pXG4gICAgcmV0dXJuIHRoaXM7XG5cbiAgbGlzdCA9IHRoaXMuX2V2ZW50c1t0eXBlXTtcbiAgbGVuZ3RoID0gbGlzdC5sZW5ndGg7XG4gIHBvc2l0aW9uID0gLTE7XG5cbiAgaWYgKGxpc3QgPT09IGxpc3RlbmVyIHx8XG4gICAgICAoaXNGdW5jdGlvbihsaXN0Lmxpc3RlbmVyKSAmJiBsaXN0Lmxpc3RlbmVyID09PSBsaXN0ZW5lcikpIHtcbiAgICBkZWxldGUgdGhpcy5fZXZlbnRzW3R5cGVdO1xuICAgIGlmICh0aGlzLl9ldmVudHMucmVtb3ZlTGlzdGVuZXIpXG4gICAgICB0aGlzLmVtaXQoJ3JlbW92ZUxpc3RlbmVyJywgdHlwZSwgbGlzdGVuZXIpO1xuXG4gIH0gZWxzZSBpZiAoaXNPYmplY3QobGlzdCkpIHtcbiAgICBmb3IgKGkgPSBsZW5ndGg7IGktLSA+IDA7KSB7XG4gICAgICBpZiAobGlzdFtpXSA9PT0gbGlzdGVuZXIgfHxcbiAgICAgICAgICAobGlzdFtpXS5saXN0ZW5lciAmJiBsaXN0W2ldLmxpc3RlbmVyID09PSBsaXN0ZW5lcikpIHtcbiAgICAgICAgcG9zaXRpb24gPSBpO1xuICAgICAgICBicmVhaztcbiAgICAgIH1cbiAgICB9XG5cbiAgICBpZiAocG9zaXRpb24gPCAwKVxuICAgICAgcmV0dXJuIHRoaXM7XG5cbiAgICBpZiAobGlzdC5sZW5ndGggPT09IDEpIHtcbiAgICAgIGxpc3QubGVuZ3RoID0gMDtcbiAgICAgIGRlbGV0ZSB0aGlzLl9ldmVudHNbdHlwZV07XG4gICAgfSBlbHNlIHtcbiAgICAgIGxpc3Quc3BsaWNlKHBvc2l0aW9uLCAxKTtcbiAgICB9XG5cbiAgICBpZiAodGhpcy5fZXZlbnRzLnJlbW92ZUxpc3RlbmVyKVxuICAgICAgdGhpcy5lbWl0KCdyZW1vdmVMaXN0ZW5lcicsIHR5cGUsIGxpc3RlbmVyKTtcbiAgfVxuXG4gIHJldHVybiB0aGlzO1xufTtcblxuRXZlbnRFbWl0dGVyLnByb3RvdHlwZS5yZW1vdmVBbGxMaXN0ZW5lcnMgPSBmdW5jdGlvbih0eXBlKSB7XG4gIHZhciBrZXksIGxpc3RlbmVycztcblxuICBpZiAoIXRoaXMuX2V2ZW50cylcbiAgICByZXR1cm4gdGhpcztcblxuICAvLyBub3QgbGlzdGVuaW5nIGZvciByZW1vdmVMaXN0ZW5lciwgbm8gbmVlZCB0byBlbWl0XG4gIGlmICghdGhpcy5fZXZlbnRzLnJlbW92ZUxpc3RlbmVyKSB7XG4gICAgaWYgKGFyZ3VtZW50cy5sZW5ndGggPT09IDApXG4gICAgICB0aGlzLl9ldmVudHMgPSB7fTtcbiAgICBlbHNlIGlmICh0aGlzLl9ldmVudHNbdHlwZV0pXG4gICAgICBkZWxldGUgdGhpcy5fZXZlbnRzW3R5cGVdO1xuICAgIHJldHVybiB0aGlzO1xuICB9XG5cbiAgLy8gZW1pdCByZW1vdmVMaXN0ZW5lciBmb3IgYWxsIGxpc3RlbmVycyBvbiBhbGwgZXZlbnRzXG4gIGlmIChhcmd1bWVudHMubGVuZ3RoID09PSAwKSB7XG4gICAgZm9yIChrZXkgaW4gdGhpcy5fZXZlbnRzKSB7XG4gICAgICBpZiAoa2V5ID09PSAncmVtb3ZlTGlzdGVuZXInKSBjb250aW51ZTtcbiAgICAgIHRoaXMucmVtb3ZlQWxsTGlzdGVuZXJzKGtleSk7XG4gICAgfVxuICAgIHRoaXMucmVtb3ZlQWxsTGlzdGVuZXJzKCdyZW1vdmVMaXN0ZW5lcicpO1xuICAgIHRoaXMuX2V2ZW50cyA9IHt9O1xuICAgIHJldHVybiB0aGlzO1xuICB9XG5cbiAgbGlzdGVuZXJzID0gdGhpcy5fZXZlbnRzW3R5cGVdO1xuXG4gIGlmIChpc0Z1bmN0aW9uKGxpc3RlbmVycykpIHtcbiAgICB0aGlzLnJlbW92ZUxpc3RlbmVyKHR5cGUsIGxpc3RlbmVycyk7XG4gIH0gZWxzZSB7XG4gICAgLy8gTElGTyBvcmRlclxuICAgIHdoaWxlIChsaXN0ZW5lcnMubGVuZ3RoKVxuICAgICAgdGhpcy5yZW1vdmVMaXN0ZW5lcih0eXBlLCBsaXN0ZW5lcnNbbGlzdGVuZXJzLmxlbmd0aCAtIDFdKTtcbiAgfVxuICBkZWxldGUgdGhpcy5fZXZlbnRzW3R5cGVdO1xuXG4gIHJldHVybiB0aGlzO1xufTtcblxuRXZlbnRFbWl0dGVyLnByb3RvdHlwZS5saXN0ZW5lcnMgPSBmdW5jdGlvbih0eXBlKSB7XG4gIHZhciByZXQ7XG4gIGlmICghdGhpcy5fZXZlbnRzIHx8ICF0aGlzLl9ldmVudHNbdHlwZV0pXG4gICAgcmV0ID0gW107XG4gIGVsc2UgaWYgKGlzRnVuY3Rpb24odGhpcy5fZXZlbnRzW3R5cGVdKSlcbiAgICByZXQgPSBbdGhpcy5fZXZlbnRzW3R5cGVdXTtcbiAgZWxzZVxuICAgIHJldCA9IHRoaXMuX2V2ZW50c1t0eXBlXS5zbGljZSgpO1xuICByZXR1cm4gcmV0O1xufTtcblxuRXZlbnRFbWl0dGVyLmxpc3RlbmVyQ291bnQgPSBmdW5jdGlvbihlbWl0dGVyLCB0eXBlKSB7XG4gIHZhciByZXQ7XG4gIGlmICghZW1pdHRlci5fZXZlbnRzIHx8ICFlbWl0dGVyLl9ldmVudHNbdHlwZV0pXG4gICAgcmV0ID0gMDtcbiAgZWxzZSBpZiAoaXNGdW5jdGlvbihlbWl0dGVyLl9ldmVudHNbdHlwZV0pKVxuICAgIHJldCA9IDE7XG4gIGVsc2VcbiAgICByZXQgPSBlbWl0dGVyLl9ldmVudHNbdHlwZV0ubGVuZ3RoO1xuICByZXR1cm4gcmV0O1xufTtcblxuZnVuY3Rpb24gaXNGdW5jdGlvbihhcmcpIHtcbiAgcmV0dXJuIHR5cGVvZiBhcmcgPT09ICdmdW5jdGlvbic7XG59XG5cbmZ1bmN0aW9uIGlzTnVtYmVyKGFyZykge1xuICByZXR1cm4gdHlwZW9mIGFyZyA9PT0gJ251bWJlcic7XG59XG5cbmZ1bmN0aW9uIGlzT2JqZWN0KGFyZykge1xuICByZXR1cm4gdHlwZW9mIGFyZyA9PT0gJ29iamVjdCcgJiYgYXJnICE9PSBudWxsO1xufVxuXG5mdW5jdGlvbiBpc1VuZGVmaW5lZChhcmcpIHtcbiAgcmV0dXJuIGFyZyA9PT0gdm9pZCAwO1xufVxuIiwiLy8gICAgIHV1aWQuanNcbi8vXG4vLyAgICAgQ29weXJpZ2h0IChjKSAyMDEwLTIwMTIgUm9iZXJ0IEtpZWZmZXJcbi8vICAgICBNSVQgTGljZW5zZSAtIGh0dHA6Ly9vcGVuc291cmNlLm9yZy9saWNlbnNlcy9taXQtbGljZW5zZS5waHBcblxuKGZ1bmN0aW9uKCkge1xuICB2YXIgX2dsb2JhbCA9IHRoaXM7XG5cbiAgLy8gVW5pcXVlIElEIGNyZWF0aW9uIHJlcXVpcmVzIGEgaGlnaCBxdWFsaXR5IHJhbmRvbSAjIGdlbmVyYXRvci4gIFdlIGZlYXR1cmVcbiAgLy8gZGV0ZWN0IHRvIGRldGVybWluZSB0aGUgYmVzdCBSTkcgc291cmNlLCBub3JtYWxpemluZyB0byBhIGZ1bmN0aW9uIHRoYXRcbiAgLy8gcmV0dXJucyAxMjgtYml0cyBvZiByYW5kb21uZXNzLCBzaW5jZSB0aGF0J3Mgd2hhdCdzIHVzdWFsbHkgcmVxdWlyZWRcbiAgdmFyIF9ybmc7XG5cbiAgLy8gTm9kZS5qcyBjcnlwdG8tYmFzZWQgUk5HIC0gaHR0cDovL25vZGVqcy5vcmcvZG9jcy92MC42LjIvYXBpL2NyeXB0by5odG1sXG4gIC8vXG4gIC8vIE1vZGVyYXRlbHkgZmFzdCwgaGlnaCBxdWFsaXR5XG4gIGlmICh0eXBlb2YoX2dsb2JhbC5yZXF1aXJlKSA9PSAnZnVuY3Rpb24nKSB7XG4gICAgdHJ5IHtcbiAgICAgIHZhciBfcmIgPSBfZ2xvYmFsLnJlcXVpcmUoJ2NyeXB0bycpLnJhbmRvbUJ5dGVzO1xuICAgICAgX3JuZyA9IF9yYiAmJiBmdW5jdGlvbigpIHtyZXR1cm4gX3JiKDE2KTt9O1xuICAgIH0gY2F0Y2goZSkge31cbiAgfVxuXG4gIGlmICghX3JuZyAmJiBfZ2xvYmFsLmNyeXB0byAmJiBjcnlwdG8uZ2V0UmFuZG9tVmFsdWVzKSB7XG4gICAgLy8gV0hBVFdHIGNyeXB0by1iYXNlZCBSTkcgLSBodHRwOi8vd2lraS53aGF0d2cub3JnL3dpa2kvQ3J5cHRvXG4gICAgLy9cbiAgICAvLyBNb2RlcmF0ZWx5IGZhc3QsIGhpZ2ggcXVhbGl0eVxuICAgIHZhciBfcm5kczggPSBuZXcgVWludDhBcnJheSgxNik7XG4gICAgX3JuZyA9IGZ1bmN0aW9uIHdoYXR3Z1JORygpIHtcbiAgICAgIGNyeXB0by5nZXRSYW5kb21WYWx1ZXMoX3JuZHM4KTtcbiAgICAgIHJldHVybiBfcm5kczg7XG4gICAgfTtcbiAgfVxuXG4gIGlmICghX3JuZykge1xuICAgIC8vIE1hdGgucmFuZG9tKCktYmFzZWQgKFJORylcbiAgICAvL1xuICAgIC8vIElmIGFsbCBlbHNlIGZhaWxzLCB1c2UgTWF0aC5yYW5kb20oKS4gIEl0J3MgZmFzdCwgYnV0IGlzIG9mIHVuc3BlY2lmaWVkXG4gICAgLy8gcXVhbGl0eS5cbiAgICB2YXIgIF9ybmRzID0gbmV3IEFycmF5KDE2KTtcbiAgICBfcm5nID0gZnVuY3Rpb24oKSB7XG4gICAgICBmb3IgKHZhciBpID0gMCwgcjsgaSA8IDE2OyBpKyspIHtcbiAgICAgICAgaWYgKChpICYgMHgwMykgPT09IDApIHIgPSBNYXRoLnJhbmRvbSgpICogMHgxMDAwMDAwMDA7XG4gICAgICAgIF9ybmRzW2ldID0gciA+Pj4gKChpICYgMHgwMykgPDwgMykgJiAweGZmO1xuICAgICAgfVxuXG4gICAgICByZXR1cm4gX3JuZHM7XG4gICAgfTtcbiAgfVxuXG4gIC8vIEJ1ZmZlciBjbGFzcyB0byB1c2VcbiAgdmFyIEJ1ZmZlckNsYXNzID0gdHlwZW9mKF9nbG9iYWwuQnVmZmVyKSA9PSAnZnVuY3Rpb24nID8gX2dsb2JhbC5CdWZmZXIgOiBBcnJheTtcblxuICAvLyBNYXBzIGZvciBudW1iZXIgPC0+IGhleCBzdHJpbmcgY29udmVyc2lvblxuICB2YXIgX2J5dGVUb0hleCA9IFtdO1xuICB2YXIgX2hleFRvQnl0ZSA9IHt9O1xuICBmb3IgKHZhciBpID0gMDsgaSA8IDI1NjsgaSsrKSB7XG4gICAgX2J5dGVUb0hleFtpXSA9IChpICsgMHgxMDApLnRvU3RyaW5nKDE2KS5zdWJzdHIoMSk7XG4gICAgX2hleFRvQnl0ZVtfYnl0ZVRvSGV4W2ldXSA9IGk7XG4gIH1cblxuICAvLyAqKmBwYXJzZSgpYCAtIFBhcnNlIGEgVVVJRCBpbnRvIGl0J3MgY29tcG9uZW50IGJ5dGVzKipcbiAgZnVuY3Rpb24gcGFyc2UocywgYnVmLCBvZmZzZXQpIHtcbiAgICB2YXIgaSA9IChidWYgJiYgb2Zmc2V0KSB8fCAwLCBpaSA9IDA7XG5cbiAgICBidWYgPSBidWYgfHwgW107XG4gICAgcy50b0xvd2VyQ2FzZSgpLnJlcGxhY2UoL1swLTlhLWZdezJ9L2csIGZ1bmN0aW9uKG9jdCkge1xuICAgICAgaWYgKGlpIDwgMTYpIHsgLy8gRG9uJ3Qgb3ZlcmZsb3chXG4gICAgICAgIGJ1ZltpICsgaWkrK10gPSBfaGV4VG9CeXRlW29jdF07XG4gICAgICB9XG4gICAgfSk7XG5cbiAgICAvLyBaZXJvIG91dCByZW1haW5pbmcgYnl0ZXMgaWYgc3RyaW5nIHdhcyBzaG9ydFxuICAgIHdoaWxlIChpaSA8IDE2KSB7XG4gICAgICBidWZbaSArIGlpKytdID0gMDtcbiAgICB9XG5cbiAgICByZXR1cm4gYnVmO1xuICB9XG5cbiAgLy8gKipgdW5wYXJzZSgpYCAtIENvbnZlcnQgVVVJRCBieXRlIGFycmF5IChhbGEgcGFyc2UoKSkgaW50byBhIHN0cmluZyoqXG4gIGZ1bmN0aW9uIHVucGFyc2UoYnVmLCBvZmZzZXQpIHtcbiAgICB2YXIgaSA9IG9mZnNldCB8fCAwLCBidGggPSBfYnl0ZVRvSGV4O1xuICAgIHJldHVybiAgYnRoW2J1ZltpKytdXSArIGJ0aFtidWZbaSsrXV0gK1xuICAgICAgICAgICAgYnRoW2J1ZltpKytdXSArIGJ0aFtidWZbaSsrXV0gKyAnLScgK1xuICAgICAgICAgICAgYnRoW2J1ZltpKytdXSArIGJ0aFtidWZbaSsrXV0gKyAnLScgK1xuICAgICAgICAgICAgYnRoW2J1ZltpKytdXSArIGJ0aFtidWZbaSsrXV0gKyAnLScgK1xuICAgICAgICAgICAgYnRoW2J1ZltpKytdXSArIGJ0aFtidWZbaSsrXV0gKyAnLScgK1xuICAgICAgICAgICAgYnRoW2J1ZltpKytdXSArIGJ0aFtidWZbaSsrXV0gK1xuICAgICAgICAgICAgYnRoW2J1ZltpKytdXSArIGJ0aFtidWZbaSsrXV0gK1xuICAgICAgICAgICAgYnRoW2J1ZltpKytdXSArIGJ0aFtidWZbaSsrXV07XG4gIH1cblxuICAvLyAqKmB2MSgpYCAtIEdlbmVyYXRlIHRpbWUtYmFzZWQgVVVJRCoqXG4gIC8vXG4gIC8vIEluc3BpcmVkIGJ5IGh0dHBzOi8vZ2l0aHViLmNvbS9MaW9zSy9VVUlELmpzXG4gIC8vIGFuZCBodHRwOi8vZG9jcy5weXRob24ub3JnL2xpYnJhcnkvdXVpZC5odG1sXG5cbiAgLy8gcmFuZG9tICMncyB3ZSBuZWVkIHRvIGluaXQgbm9kZSBhbmQgY2xvY2tzZXFcbiAgdmFyIF9zZWVkQnl0ZXMgPSBfcm5nKCk7XG5cbiAgLy8gUGVyIDQuNSwgY3JlYXRlIGFuZCA0OC1iaXQgbm9kZSBpZCwgKDQ3IHJhbmRvbSBiaXRzICsgbXVsdGljYXN0IGJpdCA9IDEpXG4gIHZhciBfbm9kZUlkID0gW1xuICAgIF9zZWVkQnl0ZXNbMF0gfCAweDAxLFxuICAgIF9zZWVkQnl0ZXNbMV0sIF9zZWVkQnl0ZXNbMl0sIF9zZWVkQnl0ZXNbM10sIF9zZWVkQnl0ZXNbNF0sIF9zZWVkQnl0ZXNbNV1cbiAgXTtcblxuICAvLyBQZXIgNC4yLjIsIHJhbmRvbWl6ZSAoMTQgYml0KSBjbG9ja3NlcVxuICB2YXIgX2Nsb2Nrc2VxID0gKF9zZWVkQnl0ZXNbNl0gPDwgOCB8IF9zZWVkQnl0ZXNbN10pICYgMHgzZmZmO1xuXG4gIC8vIFByZXZpb3VzIHV1aWQgY3JlYXRpb24gdGltZVxuICB2YXIgX2xhc3RNU2VjcyA9IDAsIF9sYXN0TlNlY3MgPSAwO1xuXG4gIC8vIFNlZSBodHRwczovL2dpdGh1Yi5jb20vYnJvb2ZhL25vZGUtdXVpZCBmb3IgQVBJIGRldGFpbHNcbiAgZnVuY3Rpb24gdjEob3B0aW9ucywgYnVmLCBvZmZzZXQpIHtcbiAgICB2YXIgaSA9IGJ1ZiAmJiBvZmZzZXQgfHwgMDtcbiAgICB2YXIgYiA9IGJ1ZiB8fCBbXTtcblxuICAgIG9wdGlvbnMgPSBvcHRpb25zIHx8IHt9O1xuXG4gICAgdmFyIGNsb2Nrc2VxID0gb3B0aW9ucy5jbG9ja3NlcSAhPSBudWxsID8gb3B0aW9ucy5jbG9ja3NlcSA6IF9jbG9ja3NlcTtcblxuICAgIC8vIFVVSUQgdGltZXN0YW1wcyBhcmUgMTAwIG5hbm8tc2Vjb25kIHVuaXRzIHNpbmNlIHRoZSBHcmVnb3JpYW4gZXBvY2gsXG4gICAgLy8gKDE1ODItMTAtMTUgMDA6MDApLiAgSlNOdW1iZXJzIGFyZW4ndCBwcmVjaXNlIGVub3VnaCBmb3IgdGhpcywgc29cbiAgICAvLyB0aW1lIGlzIGhhbmRsZWQgaW50ZXJuYWxseSBhcyAnbXNlY3MnIChpbnRlZ2VyIG1pbGxpc2Vjb25kcykgYW5kICduc2VjcydcbiAgICAvLyAoMTAwLW5hbm9zZWNvbmRzIG9mZnNldCBmcm9tIG1zZWNzKSBzaW5jZSB1bml4IGVwb2NoLCAxOTcwLTAxLTAxIDAwOjAwLlxuICAgIHZhciBtc2VjcyA9IG9wdGlvbnMubXNlY3MgIT0gbnVsbCA/IG9wdGlvbnMubXNlY3MgOiBuZXcgRGF0ZSgpLmdldFRpbWUoKTtcblxuICAgIC8vIFBlciA0LjIuMS4yLCB1c2UgY291bnQgb2YgdXVpZCdzIGdlbmVyYXRlZCBkdXJpbmcgdGhlIGN1cnJlbnQgY2xvY2tcbiAgICAvLyBjeWNsZSB0byBzaW11bGF0ZSBoaWdoZXIgcmVzb2x1dGlvbiBjbG9ja1xuICAgIHZhciBuc2VjcyA9IG9wdGlvbnMubnNlY3MgIT0gbnVsbCA/IG9wdGlvbnMubnNlY3MgOiBfbGFzdE5TZWNzICsgMTtcblxuICAgIC8vIFRpbWUgc2luY2UgbGFzdCB1dWlkIGNyZWF0aW9uIChpbiBtc2VjcylcbiAgICB2YXIgZHQgPSAobXNlY3MgLSBfbGFzdE1TZWNzKSArIChuc2VjcyAtIF9sYXN0TlNlY3MpLzEwMDAwO1xuXG4gICAgLy8gUGVyIDQuMi4xLjIsIEJ1bXAgY2xvY2tzZXEgb24gY2xvY2sgcmVncmVzc2lvblxuICAgIGlmIChkdCA8IDAgJiYgb3B0aW9ucy5jbG9ja3NlcSA9PSBudWxsKSB7XG4gICAgICBjbG9ja3NlcSA9IGNsb2Nrc2VxICsgMSAmIDB4M2ZmZjtcbiAgICB9XG5cbiAgICAvLyBSZXNldCBuc2VjcyBpZiBjbG9jayByZWdyZXNzZXMgKG5ldyBjbG9ja3NlcSkgb3Igd2UndmUgbW92ZWQgb250byBhIG5ld1xuICAgIC8vIHRpbWUgaW50ZXJ2YWxcbiAgICBpZiAoKGR0IDwgMCB8fCBtc2VjcyA+IF9sYXN0TVNlY3MpICYmIG9wdGlvbnMubnNlY3MgPT0gbnVsbCkge1xuICAgICAgbnNlY3MgPSAwO1xuICAgIH1cblxuICAgIC8vIFBlciA0LjIuMS4yIFRocm93IGVycm9yIGlmIHRvbyBtYW55IHV1aWRzIGFyZSByZXF1ZXN0ZWRcbiAgICBpZiAobnNlY3MgPj0gMTAwMDApIHtcbiAgICAgIHRocm93IG5ldyBFcnJvcigndXVpZC52MSgpOiBDYW5cXCd0IGNyZWF0ZSBtb3JlIHRoYW4gMTBNIHV1aWRzL3NlYycpO1xuICAgIH1cblxuICAgIF9sYXN0TVNlY3MgPSBtc2VjcztcbiAgICBfbGFzdE5TZWNzID0gbnNlY3M7XG4gICAgX2Nsb2Nrc2VxID0gY2xvY2tzZXE7XG5cbiAgICAvLyBQZXIgNC4xLjQgLSBDb252ZXJ0IGZyb20gdW5peCBlcG9jaCB0byBHcmVnb3JpYW4gZXBvY2hcbiAgICBtc2VjcyArPSAxMjIxOTI5MjgwMDAwMDtcblxuICAgIC8vIGB0aW1lX2xvd2BcbiAgICB2YXIgdGwgPSAoKG1zZWNzICYgMHhmZmZmZmZmKSAqIDEwMDAwICsgbnNlY3MpICUgMHgxMDAwMDAwMDA7XG4gICAgYltpKytdID0gdGwgPj4+IDI0ICYgMHhmZjtcbiAgICBiW2krK10gPSB0bCA+Pj4gMTYgJiAweGZmO1xuICAgIGJbaSsrXSA9IHRsID4+PiA4ICYgMHhmZjtcbiAgICBiW2krK10gPSB0bCAmIDB4ZmY7XG5cbiAgICAvLyBgdGltZV9taWRgXG4gICAgdmFyIHRtaCA9IChtc2VjcyAvIDB4MTAwMDAwMDAwICogMTAwMDApICYgMHhmZmZmZmZmO1xuICAgIGJbaSsrXSA9IHRtaCA+Pj4gOCAmIDB4ZmY7XG4gICAgYltpKytdID0gdG1oICYgMHhmZjtcblxuICAgIC8vIGB0aW1lX2hpZ2hfYW5kX3ZlcnNpb25gXG4gICAgYltpKytdID0gdG1oID4+PiAyNCAmIDB4ZiB8IDB4MTA7IC8vIGluY2x1ZGUgdmVyc2lvblxuICAgIGJbaSsrXSA9IHRtaCA+Pj4gMTYgJiAweGZmO1xuXG4gICAgLy8gYGNsb2NrX3NlcV9oaV9hbmRfcmVzZXJ2ZWRgIChQZXIgNC4yLjIgLSBpbmNsdWRlIHZhcmlhbnQpXG4gICAgYltpKytdID0gY2xvY2tzZXEgPj4+IDggfCAweDgwO1xuXG4gICAgLy8gYGNsb2NrX3NlcV9sb3dgXG4gICAgYltpKytdID0gY2xvY2tzZXEgJiAweGZmO1xuXG4gICAgLy8gYG5vZGVgXG4gICAgdmFyIG5vZGUgPSBvcHRpb25zLm5vZGUgfHwgX25vZGVJZDtcbiAgICBmb3IgKHZhciBuID0gMDsgbiA8IDY7IG4rKykge1xuICAgICAgYltpICsgbl0gPSBub2RlW25dO1xuICAgIH1cblxuICAgIHJldHVybiBidWYgPyBidWYgOiB1bnBhcnNlKGIpO1xuICB9XG5cbiAgLy8gKipgdjQoKWAgLSBHZW5lcmF0ZSByYW5kb20gVVVJRCoqXG5cbiAgLy8gU2VlIGh0dHBzOi8vZ2l0aHViLmNvbS9icm9vZmEvbm9kZS11dWlkIGZvciBBUEkgZGV0YWlsc1xuICBmdW5jdGlvbiB2NChvcHRpb25zLCBidWYsIG9mZnNldCkge1xuICAgIC8vIERlcHJlY2F0ZWQgLSAnZm9ybWF0JyBhcmd1bWVudCwgYXMgc3VwcG9ydGVkIGluIHYxLjJcbiAgICB2YXIgaSA9IGJ1ZiAmJiBvZmZzZXQgfHwgMDtcblxuICAgIGlmICh0eXBlb2Yob3B0aW9ucykgPT0gJ3N0cmluZycpIHtcbiAgICAgIGJ1ZiA9IG9wdGlvbnMgPT0gJ2JpbmFyeScgPyBuZXcgQnVmZmVyQ2xhc3MoMTYpIDogbnVsbDtcbiAgICAgIG9wdGlvbnMgPSBudWxsO1xuICAgIH1cbiAgICBvcHRpb25zID0gb3B0aW9ucyB8fCB7fTtcblxuICAgIHZhciBybmRzID0gb3B0aW9ucy5yYW5kb20gfHwgKG9wdGlvbnMucm5nIHx8IF9ybmcpKCk7XG5cbiAgICAvLyBQZXIgNC40LCBzZXQgYml0cyBmb3IgdmVyc2lvbiBhbmQgYGNsb2NrX3NlcV9oaV9hbmRfcmVzZXJ2ZWRgXG4gICAgcm5kc1s2XSA9IChybmRzWzZdICYgMHgwZikgfCAweDQwO1xuICAgIHJuZHNbOF0gPSAocm5kc1s4XSAmIDB4M2YpIHwgMHg4MDtcblxuICAgIC8vIENvcHkgYnl0ZXMgdG8gYnVmZmVyLCBpZiBwcm92aWRlZFxuICAgIGlmIChidWYpIHtcbiAgICAgIGZvciAodmFyIGlpID0gMDsgaWkgPCAxNjsgaWkrKykge1xuICAgICAgICBidWZbaSArIGlpXSA9IHJuZHNbaWldO1xuICAgICAgfVxuICAgIH1cblxuICAgIHJldHVybiBidWYgfHwgdW5wYXJzZShybmRzKTtcbiAgfVxuXG4gIC8vIEV4cG9ydCBwdWJsaWMgQVBJXG4gIHZhciB1dWlkID0gdjQ7XG4gIHV1aWQudjEgPSB2MTtcbiAgdXVpZC52NCA9IHY0O1xuICB1dWlkLnBhcnNlID0gcGFyc2U7XG4gIHV1aWQudW5wYXJzZSA9IHVucGFyc2U7XG4gIHV1aWQuQnVmZmVyQ2xhc3MgPSBCdWZmZXJDbGFzcztcblxuICBpZiAodHlwZW9mKG1vZHVsZSkgIT0gJ3VuZGVmaW5lZCcgJiYgbW9kdWxlLmV4cG9ydHMpIHtcbiAgICAvLyBQdWJsaXNoIGFzIG5vZGUuanMgbW9kdWxlXG4gICAgbW9kdWxlLmV4cG9ydHMgPSB1dWlkO1xuICB9IGVsc2UgIGlmICh0eXBlb2YgZGVmaW5lID09PSAnZnVuY3Rpb24nICYmIGRlZmluZS5hbWQpIHtcbiAgICAvLyBQdWJsaXNoIGFzIEFNRCBtb2R1bGVcbiAgICBkZWZpbmUoZnVuY3Rpb24oKSB7cmV0dXJuIHV1aWQ7fSk7XG4gXG5cbiAgfSBlbHNlIHtcbiAgICAvLyBQdWJsaXNoIGFzIGdsb2JhbCAoaW4gYnJvd3NlcnMpXG4gICAgdmFyIF9wcmV2aW91c1Jvb3QgPSBfZ2xvYmFsLnV1aWQ7XG5cbiAgICAvLyAqKmBub0NvbmZsaWN0KClgIC0gKGJyb3dzZXIgb25seSkgdG8gcmVzZXQgZ2xvYmFsICd1dWlkJyB2YXIqKlxuICAgIHV1aWQubm9Db25mbGljdCA9IGZ1bmN0aW9uKCkge1xuICAgICAgX2dsb2JhbC51dWlkID0gX3ByZXZpb3VzUm9vdDtcbiAgICAgIHJldHVybiB1dWlkO1xuICAgIH07XG5cbiAgICBfZ2xvYmFsLnV1aWQgPSB1dWlkO1xuICB9XG59KS5jYWxsKHRoaXMpO1xuIiwibW9kdWxlLmV4cG9ydHM9e1xuICBcIjEwKlwiOiB7XG4gICAgXCJ2YWx1ZVwiOiAxMCxcbiAgICBcInVjdW1cIjogXCIxXCJcbiAgfSxcbiAgXCIxMF5cIjoge1xuICAgIFwidmFsdWVcIjogMTAsXG4gICAgXCJ1Y3VtXCI6IFwiMVwiXG4gIH0sXG4gIFwiW3BpXVwiOiB7XG4gICAgXCJ2YWx1ZVwiOiAzLjE0MTU5MjY1MzU4OTc5MyxcbiAgICBcInVjdW1cIjogXCIxXCJcbiAgfSxcbiAgXCIlXCI6IHtcbiAgICBcInZhbHVlXCI6IDEsXG4gICAgXCJ1Y3VtXCI6IFwiMTAqLTJcIlxuICB9LFxuICBcIltwcHRoXVwiOiB7XG4gICAgXCJ2YWx1ZVwiOiAxLFxuICAgIFwidWN1bVwiOiBcIjEwKi0zXCJcbiAgfSxcbiAgXCJbcHBtXVwiOiB7XG4gICAgXCJ2YWx1ZVwiOiAxLFxuICAgIFwidWN1bVwiOiBcIjEwKi02XCJcbiAgfSxcbiAgXCJbcHBiXVwiOiB7XG4gICAgXCJ2YWx1ZVwiOiAxLFxuICAgIFwidWN1bVwiOiBcIjEwKi05XCJcbiAgfSxcbiAgXCJbcHB0cl1cIjoge1xuICAgIFwidmFsdWVcIjogMSxcbiAgICBcInVjdW1cIjogXCIxMCotMTJcIlxuICB9LFxuICBcIm1vbFwiOiB7XG4gICAgXCJ2YWx1ZVwiOiA2LjAyMjEzNjcsXG4gICAgXCJ1Y3VtXCI6IFwiMTAqMjNcIlxuICB9LFxuICBcInNyXCI6IHtcbiAgICBcInZhbHVlXCI6IDEsXG4gICAgXCJ1Y3VtXCI6IFwicmFkMlwiXG4gIH0sXG4gIFwiSHpcIjoge1xuICAgIFwidmFsdWVcIjogMSxcbiAgICBcInVjdW1cIjogXCJzLTFcIlxuICB9LFxuICBcIk5cIjoge1xuICAgIFwidmFsdWVcIjogMSxcbiAgICBcInVjdW1cIjogXCJrZy5tL3MyXCJcbiAgfSxcbiAgXCJQYVwiOiB7XG4gICAgXCJ2YWx1ZVwiOiAxLFxuICAgIFwidWN1bVwiOiBcIk4vbTJcIlxuICB9LFxuICBcIkpcIjoge1xuICAgIFwidmFsdWVcIjogMSxcbiAgICBcInVjdW1cIjogXCJOLm1cIlxuICB9LFxuICBcIldcIjoge1xuICAgIFwidmFsdWVcIjogMSxcbiAgICBcInVjdW1cIjogXCJKL3NcIlxuICB9LFxuICBcIkFcIjoge1xuICAgIFwidmFsdWVcIjogMSxcbiAgICBcInVjdW1cIjogXCJDL3NcIlxuICB9LFxuICBcIlZcIjoge1xuICAgIFwidmFsdWVcIjogMSxcbiAgICBcInVjdW1cIjogXCJKL0NcIlxuICB9LFxuICBcIkZcIjoge1xuICAgIFwidmFsdWVcIjogMSxcbiAgICBcInVjdW1cIjogXCJDL1ZcIlxuICB9LFxuICBcIk9obVwiOiB7XG4gICAgXCJ2YWx1ZVwiOiAxLFxuICAgIFwidWN1bVwiOiBcIlYvQVwiXG4gIH0sXG4gIFwiU1wiOiB7XG4gICAgXCJ2YWx1ZVwiOiAxLFxuICAgIFwidWN1bVwiOiBcIk9obS0xXCJcbiAgfSxcbiAgXCJXYlwiOiB7XG4gICAgXCJ2YWx1ZVwiOiAxLFxuICAgIFwidWN1bVwiOiBcIlYuc1wiXG4gIH0sXG4gIFwiQ2VsXCI6IHtcbiAgICBcInZhbHVlXCI6IG51bGwsXG4gICAgXCJ1Y3VtXCI6IFwiY2VsKDEgSylcIlxuICB9LFxuICBcIlRcIjoge1xuICAgIFwidmFsdWVcIjogMSxcbiAgICBcInVjdW1cIjogXCJXYi9tMlwiXG4gIH0sXG4gIFwiSFwiOiB7XG4gICAgXCJ2YWx1ZVwiOiAxLFxuICAgIFwidWN1bVwiOiBcIldiL0FcIlxuICB9LFxuICBcImxtXCI6IHtcbiAgICBcInZhbHVlXCI6IDEsXG4gICAgXCJ1Y3VtXCI6IFwiY2Quc3JcIlxuICB9LFxuICBcImx4XCI6IHtcbiAgICBcInZhbHVlXCI6IDEsXG4gICAgXCJ1Y3VtXCI6IFwibG0vbTJcIlxuICB9LFxuICBcIkJxXCI6IHtcbiAgICBcInZhbHVlXCI6IDEsXG4gICAgXCJ1Y3VtXCI6IFwicy0xXCJcbiAgfSxcbiAgXCJHeVwiOiB7XG4gICAgXCJ2YWx1ZVwiOiAxLFxuICAgIFwidWN1bVwiOiBcIkova2dcIlxuICB9LFxuICBcIlN2XCI6IHtcbiAgICBcInZhbHVlXCI6IDEsXG4gICAgXCJ1Y3VtXCI6IFwiSi9rZ1wiXG4gIH0sXG4gIFwiZ29uXCI6IHtcbiAgICBcInZhbHVlXCI6IDAuOSxcbiAgICBcInVjdW1cIjogXCJkZWdcIlxuICB9LFxuICBcImRlZ1wiOiB7XG4gICAgXCJ2YWx1ZVwiOiAyLFxuICAgIFwidWN1bVwiOiBcIltwaV0ucmFkLzM2MFwiXG4gIH0sXG4gIFwiJ1wiOiB7XG4gICAgXCJ2YWx1ZVwiOiAxLFxuICAgIFwidWN1bVwiOiBcImRlZy82MFwiXG4gIH0sXG4gIFwiJydcIjoge1xuICAgIFwidmFsdWVcIjogMSxcbiAgICBcInVjdW1cIjogXCInLzYwXCJcbiAgfSxcbiAgXCJsXCI6IHtcbiAgICBcInZhbHVlXCI6IDEsXG4gICAgXCJ1Y3VtXCI6IFwiZG0zXCJcbiAgfSxcbiAgXCJMXCI6IHtcbiAgICBcInZhbHVlXCI6IDEsXG4gICAgXCJ1Y3VtXCI6IFwibFwiXG4gIH0sXG4gIFwiYXJcIjoge1xuICAgIFwidmFsdWVcIjogMTAwLFxuICAgIFwidWN1bVwiOiBcIm0yXCJcbiAgfSxcbiAgXCJtaW5cIjoge1xuICAgIFwidmFsdWVcIjogNjAsXG4gICAgXCJ1Y3VtXCI6IFwic1wiXG4gIH0sXG4gIFwiaFwiOiB7XG4gICAgXCJ2YWx1ZVwiOiA2MCxcbiAgICBcInVjdW1cIjogXCJtaW5cIlxuICB9LFxuICBcImRcIjoge1xuICAgIFwidmFsdWVcIjogMjQsXG4gICAgXCJ1Y3VtXCI6IFwiaFwiXG4gIH0sXG4gIFwiYV90XCI6IHtcbiAgICBcInZhbHVlXCI6IDM2NS4yNDIxOSxcbiAgICBcInVjdW1cIjogXCJkXCJcbiAgfSxcbiAgXCJhX2pcIjoge1xuICAgIFwidmFsdWVcIjogMzY1LjI1LFxuICAgIFwidWN1bVwiOiBcImRcIlxuICB9LFxuICBcImFfZ1wiOiB7XG4gICAgXCJ2YWx1ZVwiOiAzNjUuMjQyNSxcbiAgICBcInVjdW1cIjogXCJkXCJcbiAgfSxcbiAgXCJhXCI6IHtcbiAgICBcInZhbHVlXCI6IDEsXG4gICAgXCJ1Y3VtXCI6IFwiYV9qXCJcbiAgfSxcbiAgXCJ3a1wiOiB7XG4gICAgXCJ2YWx1ZVwiOiA3LFxuICAgIFwidWN1bVwiOiBcImRcIlxuICB9LFxuICBcIm1vX3NcIjoge1xuICAgIFwidmFsdWVcIjogMjkuNTMwNTksXG4gICAgXCJ1Y3VtXCI6IFwiZFwiXG4gIH0sXG4gIFwibW9falwiOiB7XG4gICAgXCJ2YWx1ZVwiOiAxLFxuICAgIFwidWN1bVwiOiBcImFfai8xMlwiXG4gIH0sXG4gIFwibW9fZ1wiOiB7XG4gICAgXCJ2YWx1ZVwiOiAxLFxuICAgIFwidWN1bVwiOiBcImFfZy8xMlwiXG4gIH0sXG4gIFwibW9cIjoge1xuICAgIFwidmFsdWVcIjogMSxcbiAgICBcInVjdW1cIjogXCJtb19qXCJcbiAgfSxcbiAgXCJ0XCI6IHtcbiAgICBcInZhbHVlXCI6IDEwMDAsXG4gICAgXCJ1Y3VtXCI6IFwia2dcIlxuICB9LFxuICBcImJhclwiOiB7XG4gICAgXCJ2YWx1ZVwiOiAxMDAwMDAsXG4gICAgXCJ1Y3VtXCI6IFwiUGFcIlxuICB9LFxuICBcInVcIjoge1xuICAgIFwidmFsdWVcIjogMS42NjA1NDAyZS0yNCxcbiAgICBcInVjdW1cIjogXCJnXCJcbiAgfSxcbiAgXCJlVlwiOiB7XG4gICAgXCJ2YWx1ZVwiOiAxLFxuICAgIFwidWN1bVwiOiBcIltlXS5WXCJcbiAgfSxcbiAgXCJBVVwiOiB7XG4gICAgXCJ2YWx1ZVwiOiAxNDk1OTcuODcwNjkxLFxuICAgIFwidWN1bVwiOiBcIk1tXCJcbiAgfSxcbiAgXCJwY1wiOiB7XG4gICAgXCJ2YWx1ZVwiOiAzMDg1Njc4MDAwMDAwMDAwMCxcbiAgICBcInVjdW1cIjogXCJtXCJcbiAgfSxcbiAgXCJbY11cIjoge1xuICAgIFwidmFsdWVcIjogMjk5NzkyNDU4LFxuICAgIFwidWN1bVwiOiBcIm0vc1wiXG4gIH0sXG4gIFwiW2hdXCI6IHtcbiAgICBcInZhbHVlXCI6IDYuNjI2MDc1NWUtMjQsXG4gICAgXCJ1Y3VtXCI6IFwiSi5zXCJcbiAgfSxcbiAgXCJba11cIjoge1xuICAgIFwidmFsdWVcIjogMS4zODA2NThlLTIzLFxuICAgIFwidWN1bVwiOiBcIkovS1wiXG4gIH0sXG4gIFwiW2Vwc18wXVwiOiB7XG4gICAgXCJ2YWx1ZVwiOiA4Ljg1NDE4NzgxN2UtMTIsXG4gICAgXCJ1Y3VtXCI6IFwiRi9tXCJcbiAgfSxcbiAgXCJbbXVfMF1cIjoge1xuICAgIFwidmFsdWVcIjogMSxcbiAgICBcInVjdW1cIjogXCI0LltwaV0uMTAqLTcuTi9BMlwiXG4gIH0sXG4gIFwiW2VdXCI6IHtcbiAgICBcInZhbHVlXCI6IDEuNjAyMTc3MzNlLTE5LFxuICAgIFwidWN1bVwiOiBcIkNcIlxuICB9LFxuICBcIlttX2VdXCI6IHtcbiAgICBcInZhbHVlXCI6IDkuMTA5Mzg5N2UtMjgsXG4gICAgXCJ1Y3VtXCI6IFwiZ1wiXG4gIH0sXG4gIFwiW21fcF1cIjoge1xuICAgIFwidmFsdWVcIjogMS42NzI2MjMxZS0yNCxcbiAgICBcInVjdW1cIjogXCJnXCJcbiAgfSxcbiAgXCJbR11cIjoge1xuICAgIFwidmFsdWVcIjogNi42NzI1OWUtMTEsXG4gICAgXCJ1Y3VtXCI6IFwibTMua2ctMS5zLTJcIlxuICB9LFxuICBcIltnXVwiOiB7XG4gICAgXCJ2YWx1ZVwiOiA5LjgwNjY1LFxuICAgIFwidWN1bVwiOiBcIm0vczJcIlxuICB9LFxuICBcImF0bVwiOiB7XG4gICAgXCJ2YWx1ZVwiOiAxMDEzMjUsXG4gICAgXCJ1Y3VtXCI6IFwiUGFcIlxuICB9LFxuICBcIltseV1cIjoge1xuICAgIFwidmFsdWVcIjogMSxcbiAgICBcInVjdW1cIjogXCJbY10uYV9qXCJcbiAgfSxcbiAgXCJnZlwiOiB7XG4gICAgXCJ2YWx1ZVwiOiAxLFxuICAgIFwidWN1bVwiOiBcImcuW2ddXCJcbiAgfSxcbiAgXCJbbGJmX2F2XVwiOiB7XG4gICAgXCJ2YWx1ZVwiOiAxLFxuICAgIFwidWN1bVwiOiBcIltsYl9hdl0uW2ddXCJcbiAgfSxcbiAgXCJLeVwiOiB7XG4gICAgXCJ2YWx1ZVwiOiAxLFxuICAgIFwidWN1bVwiOiBcImNtLTFcIlxuICB9LFxuICBcIkdhbFwiOiB7XG4gICAgXCJ2YWx1ZVwiOiAxLFxuICAgIFwidWN1bVwiOiBcImNtL3MyXCJcbiAgfSxcbiAgXCJkeW5cIjoge1xuICAgIFwidmFsdWVcIjogMSxcbiAgICBcInVjdW1cIjogXCJnLmNtL3MyXCJcbiAgfSxcbiAgXCJlcmdcIjoge1xuICAgIFwidmFsdWVcIjogMSxcbiAgICBcInVjdW1cIjogXCJkeW4uY21cIlxuICB9LFxuICBcIlBcIjoge1xuICAgIFwidmFsdWVcIjogMSxcbiAgICBcInVjdW1cIjogXCJkeW4ucy9jbTJcIlxuICB9LFxuICBcIkJpXCI6IHtcbiAgICBcInZhbHVlXCI6IDEwLFxuICAgIFwidWN1bVwiOiBcIkFcIlxuICB9LFxuICBcIlN0XCI6IHtcbiAgICBcInZhbHVlXCI6IDEsXG4gICAgXCJ1Y3VtXCI6IFwiY20yL3NcIlxuICB9LFxuICBcIk14XCI6IHtcbiAgICBcInZhbHVlXCI6IDFlLTgsXG4gICAgXCJ1Y3VtXCI6IFwiV2JcIlxuICB9LFxuICBcIkdcIjoge1xuICAgIFwidmFsdWVcIjogMC4wMDAxLFxuICAgIFwidWN1bVwiOiBcIlRcIlxuICB9LFxuICBcIk9lXCI6IHtcbiAgICBcInZhbHVlXCI6IDI1MCxcbiAgICBcInVjdW1cIjogXCIvW3BpXS5BL21cIlxuICB9LFxuICBcIkdiXCI6IHtcbiAgICBcInZhbHVlXCI6IDEsXG4gICAgXCJ1Y3VtXCI6IFwiT2UuY21cIlxuICB9LFxuICBcInNiXCI6IHtcbiAgICBcInZhbHVlXCI6IDEsXG4gICAgXCJ1Y3VtXCI6IFwiY2QvY20yXCJcbiAgfSxcbiAgXCJMbWJcIjoge1xuICAgIFwidmFsdWVcIjogMSxcbiAgICBcInVjdW1cIjogXCJjZC9jbTIvW3BpXVwiXG4gIH0sXG4gIFwicGhcIjoge1xuICAgIFwidmFsdWVcIjogMC4wMDAxLFxuICAgIFwidWN1bVwiOiBcImx4XCJcbiAgfSxcbiAgXCJDaVwiOiB7XG4gICAgXCJ2YWx1ZVwiOiAzNzAwMDAwMDAwMCxcbiAgICBcInVjdW1cIjogXCJCcVwiXG4gIH0sXG4gIFwiUlwiOiB7XG4gICAgXCJ2YWx1ZVwiOiAwLjAwMDI1OCxcbiAgICBcInVjdW1cIjogXCJDL2tnXCJcbiAgfSxcbiAgXCJSQURcIjoge1xuICAgIFwidmFsdWVcIjogMTAwLFxuICAgIFwidWN1bVwiOiBcImVyZy9nXCJcbiAgfSxcbiAgXCJSRU1cIjoge1xuICAgIFwidmFsdWVcIjogMSxcbiAgICBcInVjdW1cIjogXCJSQURcIlxuICB9LFxuICBcIltpbl9pXVwiOiB7XG4gICAgXCJ2YWx1ZVwiOiAyLjU0LFxuICAgIFwidWN1bVwiOiBcImNtXCJcbiAgfSxcbiAgXCJbZnRfaV1cIjoge1xuICAgIFwidmFsdWVcIjogMTIsXG4gICAgXCJ1Y3VtXCI6IFwiW2luX2ldXCJcbiAgfSxcbiAgXCJbeWRfaV1cIjoge1xuICAgIFwidmFsdWVcIjogMyxcbiAgICBcInVjdW1cIjogXCJbZnRfaV1cIlxuICB9LFxuICBcIlttaV9pXVwiOiB7XG4gICAgXCJ2YWx1ZVwiOiA1MjgwLFxuICAgIFwidWN1bVwiOiBcIltmdF9pXVwiXG4gIH0sXG4gIFwiW2Z0aF9pXVwiOiB7XG4gICAgXCJ2YWx1ZVwiOiA2LFxuICAgIFwidWN1bVwiOiBcIltmdF9pXVwiXG4gIH0sXG4gIFwiW25taV9pXVwiOiB7XG4gICAgXCJ2YWx1ZVwiOiAxODUyLFxuICAgIFwidWN1bVwiOiBcIm1cIlxuICB9LFxuICBcIltrbl9pXVwiOiB7XG4gICAgXCJ2YWx1ZVwiOiAxLFxuICAgIFwidWN1bVwiOiBcIltubWlfaV0vaFwiXG4gIH0sXG4gIFwiW3Npbl9pXVwiOiB7XG4gICAgXCJ2YWx1ZVwiOiAxLFxuICAgIFwidWN1bVwiOiBcIltpbl9pXTJcIlxuICB9LFxuICBcIltzZnRfaV1cIjoge1xuICAgIFwidmFsdWVcIjogMSxcbiAgICBcInVjdW1cIjogXCJbZnRfaV0yXCJcbiAgfSxcbiAgXCJbc3lkX2ldXCI6IHtcbiAgICBcInZhbHVlXCI6IDEsXG4gICAgXCJ1Y3VtXCI6IFwiW3lkX2ldMlwiXG4gIH0sXG4gIFwiW2Npbl9pXVwiOiB7XG4gICAgXCJ2YWx1ZVwiOiAxLFxuICAgIFwidWN1bVwiOiBcIltpbl9pXTNcIlxuICB9LFxuICBcIltjZnRfaV1cIjoge1xuICAgIFwidmFsdWVcIjogMSxcbiAgICBcInVjdW1cIjogXCJbZnRfaV0zXCJcbiAgfSxcbiAgXCJbY3lkX2ldXCI6IHtcbiAgICBcInZhbHVlXCI6IDEsXG4gICAgXCJ1Y3VtXCI6IFwiW3lkX2ldM1wiXG4gIH0sXG4gIFwiW2JmX2ldXCI6IHtcbiAgICBcInZhbHVlXCI6IDE0NCxcbiAgICBcInVjdW1cIjogXCJbaW5faV0zXCJcbiAgfSxcbiAgXCJbY3JfaV1cIjoge1xuICAgIFwidmFsdWVcIjogMTI4LFxuICAgIFwidWN1bVwiOiBcIltmdF9pXTNcIlxuICB9LFxuICBcIlttaWxfaV1cIjoge1xuICAgIFwidmFsdWVcIjogMC4wMDEsXG4gICAgXCJ1Y3VtXCI6IFwiW2luX2ldXCJcbiAgfSxcbiAgXCJbY21sX2ldXCI6IHtcbiAgICBcInZhbHVlXCI6IDEsXG4gICAgXCJ1Y3VtXCI6IFwiW3BpXS80LlttaWxfaV0yXCJcbiAgfSxcbiAgXCJbaGRfaV1cIjoge1xuICAgIFwidmFsdWVcIjogNCxcbiAgICBcInVjdW1cIjogXCJbaW5faV1cIlxuICB9LFxuICBcIltmdF91c11cIjoge1xuICAgIFwidmFsdWVcIjogMTIwMCxcbiAgICBcInVjdW1cIjogXCJtLzM5MzdcIlxuICB9LFxuICBcIlt5ZF91c11cIjoge1xuICAgIFwidmFsdWVcIjogMyxcbiAgICBcInVjdW1cIjogXCJbZnRfdXNdXCJcbiAgfSxcbiAgXCJbaW5fdXNdXCI6IHtcbiAgICBcInZhbHVlXCI6IDEsXG4gICAgXCJ1Y3VtXCI6IFwiW2Z0X3VzXS8xMlwiXG4gIH0sXG4gIFwiW3JkX3VzXVwiOiB7XG4gICAgXCJ2YWx1ZVwiOiAxNi41LFxuICAgIFwidWN1bVwiOiBcIltmdF91c11cIlxuICB9LFxuICBcIltjaF91c11cIjoge1xuICAgIFwidmFsdWVcIjogNCxcbiAgICBcInVjdW1cIjogXCJbcmRfdXNdXCJcbiAgfSxcbiAgXCJbbGtfdXNdXCI6IHtcbiAgICBcInZhbHVlXCI6IDEsXG4gICAgXCJ1Y3VtXCI6IFwiW2NoX3VzXS8xMDBcIlxuICB9LFxuICBcIltyY2hfdXNdXCI6IHtcbiAgICBcInZhbHVlXCI6IDEwMCxcbiAgICBcInVjdW1cIjogXCJbZnRfdXNdXCJcbiAgfSxcbiAgXCJbcmxrX3VzXVwiOiB7XG4gICAgXCJ2YWx1ZVwiOiAxLFxuICAgIFwidWN1bVwiOiBcIltyY2hfdXNdLzEwMFwiXG4gIH0sXG4gIFwiW2Z0aF91c11cIjoge1xuICAgIFwidmFsdWVcIjogNixcbiAgICBcInVjdW1cIjogXCJbZnRfdXNdXCJcbiAgfSxcbiAgXCJbZnVyX3VzXVwiOiB7XG4gICAgXCJ2YWx1ZVwiOiA0MCxcbiAgICBcInVjdW1cIjogXCJbcmRfdXNdXCJcbiAgfSxcbiAgXCJbbWlfdXNdXCI6IHtcbiAgICBcInZhbHVlXCI6IDgsXG4gICAgXCJ1Y3VtXCI6IFwiW2Z1cl91c11cIlxuICB9LFxuICBcIlthY3JfdXNdXCI6IHtcbiAgICBcInZhbHVlXCI6IDE2MCxcbiAgICBcInVjdW1cIjogXCJbcmRfdXNdMlwiXG4gIH0sXG4gIFwiW3NyZF91c11cIjoge1xuICAgIFwidmFsdWVcIjogMSxcbiAgICBcInVjdW1cIjogXCJbcmRfdXNdMlwiXG4gIH0sXG4gIFwiW3NtaV91c11cIjoge1xuICAgIFwidmFsdWVcIjogMSxcbiAgICBcInVjdW1cIjogXCJbbWlfdXNdMlwiXG4gIH0sXG4gIFwiW3NjdF1cIjoge1xuICAgIFwidmFsdWVcIjogMSxcbiAgICBcInVjdW1cIjogXCJbbWlfdXNdMlwiXG4gIH0sXG4gIFwiW3R3cF1cIjoge1xuICAgIFwidmFsdWVcIjogMzYsXG4gICAgXCJ1Y3VtXCI6IFwiW3NjdF1cIlxuICB9LFxuICBcIlttaWxfdXNdXCI6IHtcbiAgICBcInZhbHVlXCI6IDAuMDAxLFxuICAgIFwidWN1bVwiOiBcIltpbl91c11cIlxuICB9LFxuICBcIltpbl9icl1cIjoge1xuICAgIFwidmFsdWVcIjogMi41Mzk5OTgsXG4gICAgXCJ1Y3VtXCI6IFwiY21cIlxuICB9LFxuICBcIltmdF9icl1cIjoge1xuICAgIFwidmFsdWVcIjogMTIsXG4gICAgXCJ1Y3VtXCI6IFwiW2luX2JyXVwiXG4gIH0sXG4gIFwiW3JkX2JyXVwiOiB7XG4gICAgXCJ2YWx1ZVwiOiAxNi41LFxuICAgIFwidWN1bVwiOiBcIltmdF9icl1cIlxuICB9LFxuICBcIltjaF9icl1cIjoge1xuICAgIFwidmFsdWVcIjogNCxcbiAgICBcInVjdW1cIjogXCJbcmRfYnJdXCJcbiAgfSxcbiAgXCJbbGtfYnJdXCI6IHtcbiAgICBcInZhbHVlXCI6IDEsXG4gICAgXCJ1Y3VtXCI6IFwiW2NoX2JyXS8xMDBcIlxuICB9LFxuICBcIltmdGhfYnJdXCI6IHtcbiAgICBcInZhbHVlXCI6IDYsXG4gICAgXCJ1Y3VtXCI6IFwiW2Z0X2JyXVwiXG4gIH0sXG4gIFwiW3BjX2JyXVwiOiB7XG4gICAgXCJ2YWx1ZVwiOiAyLjUsXG4gICAgXCJ1Y3VtXCI6IFwiW2Z0X2JyXVwiXG4gIH0sXG4gIFwiW3lkX2JyXVwiOiB7XG4gICAgXCJ2YWx1ZVwiOiAzLFxuICAgIFwidWN1bVwiOiBcIltmdF9icl1cIlxuICB9LFxuICBcIlttaV9icl1cIjoge1xuICAgIFwidmFsdWVcIjogNTI4MCxcbiAgICBcInVjdW1cIjogXCJbZnRfYnJdXCJcbiAgfSxcbiAgXCJbbm1pX2JyXVwiOiB7XG4gICAgXCJ2YWx1ZVwiOiA2MDgwLFxuICAgIFwidWN1bVwiOiBcIltmdF9icl1cIlxuICB9LFxuICBcIltrbl9icl1cIjoge1xuICAgIFwidmFsdWVcIjogMSxcbiAgICBcInVjdW1cIjogXCJbbm1pX2JyXS9oXCJcbiAgfSxcbiAgXCJbYWNyX2JyXVwiOiB7XG4gICAgXCJ2YWx1ZVwiOiA0ODQwLFxuICAgIFwidWN1bVwiOiBcIlt5ZF9icl0yXCJcbiAgfSxcbiAgXCJbZ2FsX3VzXVwiOiB7XG4gICAgXCJ2YWx1ZVwiOiAyMzEsXG4gICAgXCJ1Y3VtXCI6IFwiW2luX2ldM1wiXG4gIH0sXG4gIFwiW2JibF91c11cIjoge1xuICAgIFwidmFsdWVcIjogNDIsXG4gICAgXCJ1Y3VtXCI6IFwiW2dhbF91c11cIlxuICB9LFxuICBcIltxdF91c11cIjoge1xuICAgIFwidmFsdWVcIjogMSxcbiAgICBcInVjdW1cIjogXCJbZ2FsX3VzXS80XCJcbiAgfSxcbiAgXCJbcHRfdXNdXCI6IHtcbiAgICBcInZhbHVlXCI6IDEsXG4gICAgXCJ1Y3VtXCI6IFwiW3F0X3VzXS8yXCJcbiAgfSxcbiAgXCJbZ2lsX3VzXVwiOiB7XG4gICAgXCJ2YWx1ZVwiOiAxLFxuICAgIFwidWN1bVwiOiBcIltwdF91c10vNFwiXG4gIH0sXG4gIFwiW2Zvel91c11cIjoge1xuICAgIFwidmFsdWVcIjogMSxcbiAgICBcInVjdW1cIjogXCJbZ2lsX3VzXS80XCJcbiAgfSxcbiAgXCJbZmRyX3VzXVwiOiB7XG4gICAgXCJ2YWx1ZVwiOiAxLFxuICAgIFwidWN1bVwiOiBcIltmb3pfdXNdLzhcIlxuICB9LFxuICBcIlttaW5fdXNdXCI6IHtcbiAgICBcInZhbHVlXCI6IDEsXG4gICAgXCJ1Y3VtXCI6IFwiW2Zkcl91c10vNjBcIlxuICB9LFxuICBcIltjcmRfdXNdXCI6IHtcbiAgICBcInZhbHVlXCI6IDEyOCxcbiAgICBcInVjdW1cIjogXCJbZnRfaV0zXCJcbiAgfSxcbiAgXCJbYnVfdXNdXCI6IHtcbiAgICBcInZhbHVlXCI6IDIxNTAuNDIsXG4gICAgXCJ1Y3VtXCI6IFwiW2luX2ldM1wiXG4gIH0sXG4gIFwiW2dhbF93aV1cIjoge1xuICAgIFwidmFsdWVcIjogMSxcbiAgICBcInVjdW1cIjogXCJbYnVfdXNdLzhcIlxuICB9LFxuICBcIltwa191c11cIjoge1xuICAgIFwidmFsdWVcIjogMSxcbiAgICBcInVjdW1cIjogXCJbYnVfdXNdLzRcIlxuICB9LFxuICBcIltkcXRfdXNdXCI6IHtcbiAgICBcInZhbHVlXCI6IDEsXG4gICAgXCJ1Y3VtXCI6IFwiW3BrX3VzXS84XCJcbiAgfSxcbiAgXCJbZHB0X3VzXVwiOiB7XG4gICAgXCJ2YWx1ZVwiOiAxLFxuICAgIFwidWN1bVwiOiBcIltkcXRfdXNdLzJcIlxuICB9LFxuICBcIlt0YnNfdXNdXCI6IHtcbiAgICBcInZhbHVlXCI6IDEsXG4gICAgXCJ1Y3VtXCI6IFwiW2Zvel91c10vMlwiXG4gIH0sXG4gIFwiW3RzcF91c11cIjoge1xuICAgIFwidmFsdWVcIjogMSxcbiAgICBcInVjdW1cIjogXCJbdGJzX3VzXS8zXCJcbiAgfSxcbiAgXCJbY3VwX3VzXVwiOiB7XG4gICAgXCJ2YWx1ZVwiOiAxNixcbiAgICBcInVjdW1cIjogXCJbdGJzX3VzXVwiXG4gIH0sXG4gIFwiW2Zvel9tXVwiOiB7XG4gICAgXCJ2YWx1ZVwiOiAzMCxcbiAgICBcInVjdW1cIjogXCJtTFwiXG4gIH0sXG4gIFwiW2N1cF9tXVwiOiB7XG4gICAgXCJ2YWx1ZVwiOiAyNDAsXG4gICAgXCJ1Y3VtXCI6IFwibUxcIlxuICB9LFxuICBcIlt0c3BfbV1cIjoge1xuICAgIFwidmFsdWVcIjogNSxcbiAgICBcInVjdW1cIjogXCJtTFwiXG4gIH0sXG4gIFwiW3Ric19tXVwiOiB7XG4gICAgXCJ2YWx1ZVwiOiAxNSxcbiAgICBcInVjdW1cIjogXCJtTFwiXG4gIH0sXG4gIFwiW2dhbF9icl1cIjoge1xuICAgIFwidmFsdWVcIjogNC41NDYwOSxcbiAgICBcInVjdW1cIjogXCJsXCJcbiAgfSxcbiAgXCJbcGtfYnJdXCI6IHtcbiAgICBcInZhbHVlXCI6IDIsXG4gICAgXCJ1Y3VtXCI6IFwiW2dhbF9icl1cIlxuICB9LFxuICBcIltidV9icl1cIjoge1xuICAgIFwidmFsdWVcIjogNCxcbiAgICBcInVjdW1cIjogXCJbcGtfYnJdXCJcbiAgfSxcbiAgXCJbcXRfYnJdXCI6IHtcbiAgICBcInZhbHVlXCI6IDEsXG4gICAgXCJ1Y3VtXCI6IFwiW2dhbF9icl0vNFwiXG4gIH0sXG4gIFwiW3B0X2JyXVwiOiB7XG4gICAgXCJ2YWx1ZVwiOiAxLFxuICAgIFwidWN1bVwiOiBcIltxdF9icl0vMlwiXG4gIH0sXG4gIFwiW2dpbF9icl1cIjoge1xuICAgIFwidmFsdWVcIjogMSxcbiAgICBcInVjdW1cIjogXCJbcHRfYnJdLzRcIlxuICB9LFxuICBcIltmb3pfYnJdXCI6IHtcbiAgICBcInZhbHVlXCI6IDEsXG4gICAgXCJ1Y3VtXCI6IFwiW2dpbF9icl0vNVwiXG4gIH0sXG4gIFwiW2Zkcl9icl1cIjoge1xuICAgIFwidmFsdWVcIjogMSxcbiAgICBcInVjdW1cIjogXCJbZm96X2JyXS84XCJcbiAgfSxcbiAgXCJbbWluX2JyXVwiOiB7XG4gICAgXCJ2YWx1ZVwiOiAxLFxuICAgIFwidWN1bVwiOiBcIltmZHJfYnJdLzYwXCJcbiAgfSxcbiAgXCJbZ3JdXCI6IHtcbiAgICBcInZhbHVlXCI6IDY0Ljc5ODkxLFxuICAgIFwidWN1bVwiOiBcIm1nXCJcbiAgfSxcbiAgXCJbbGJfYXZdXCI6IHtcbiAgICBcInZhbHVlXCI6IDcwMDAsXG4gICAgXCJ1Y3VtXCI6IFwiW2dyXVwiXG4gIH0sXG4gIFwiW296X2F2XVwiOiB7XG4gICAgXCJ2YWx1ZVwiOiAxLFxuICAgIFwidWN1bVwiOiBcIltsYl9hdl0vMTZcIlxuICB9LFxuICBcIltkcl9hdl1cIjoge1xuICAgIFwidmFsdWVcIjogMSxcbiAgICBcInVjdW1cIjogXCJbb3pfYXZdLzE2XCJcbiAgfSxcbiAgXCJbc2N3dF9hdl1cIjoge1xuICAgIFwidmFsdWVcIjogMTAwLFxuICAgIFwidWN1bVwiOiBcIltsYl9hdl1cIlxuICB9LFxuICBcIltsY3d0X2F2XVwiOiB7XG4gICAgXCJ2YWx1ZVwiOiAxMTIsXG4gICAgXCJ1Y3VtXCI6IFwiW2xiX2F2XVwiXG4gIH0sXG4gIFwiW3N0b25fYXZdXCI6IHtcbiAgICBcInZhbHVlXCI6IDIwLFxuICAgIFwidWN1bVwiOiBcIltzY3d0X2F2XVwiXG4gIH0sXG4gIFwiW2x0b25fYXZdXCI6IHtcbiAgICBcInZhbHVlXCI6IDIwLFxuICAgIFwidWN1bVwiOiBcIltsY3d0X2F2XVwiXG4gIH0sXG4gIFwiW3N0b25lX2F2XVwiOiB7XG4gICAgXCJ2YWx1ZVwiOiAxNCxcbiAgICBcInVjdW1cIjogXCJbbGJfYXZdXCJcbiAgfSxcbiAgXCJbcHd0X3RyXVwiOiB7XG4gICAgXCJ2YWx1ZVwiOiAyNCxcbiAgICBcInVjdW1cIjogXCJbZ3JdXCJcbiAgfSxcbiAgXCJbb3pfdHJdXCI6IHtcbiAgICBcInZhbHVlXCI6IDIwLFxuICAgIFwidWN1bVwiOiBcIltwd3RfdHJdXCJcbiAgfSxcbiAgXCJbbGJfdHJdXCI6IHtcbiAgICBcInZhbHVlXCI6IDEyLFxuICAgIFwidWN1bVwiOiBcIltvel90cl1cIlxuICB9LFxuICBcIltzY19hcF1cIjoge1xuICAgIFwidmFsdWVcIjogMjAsXG4gICAgXCJ1Y3VtXCI6IFwiW2dyXVwiXG4gIH0sXG4gIFwiW2RyX2FwXVwiOiB7XG4gICAgXCJ2YWx1ZVwiOiAzLFxuICAgIFwidWN1bVwiOiBcIltzY19hcF1cIlxuICB9LFxuICBcIltvel9hcF1cIjoge1xuICAgIFwidmFsdWVcIjogOCxcbiAgICBcInVjdW1cIjogXCJbZHJfYXBdXCJcbiAgfSxcbiAgXCJbbGJfYXBdXCI6IHtcbiAgICBcInZhbHVlXCI6IDEyLFxuICAgIFwidWN1bVwiOiBcIltvel9hcF1cIlxuICB9LFxuICBcIltvel9tXVwiOiB7XG4gICAgXCJ2YWx1ZVwiOiAyOCxcbiAgICBcInVjdW1cIjogXCJnXCJcbiAgfSxcbiAgXCJbbG5lXVwiOiB7XG4gICAgXCJ2YWx1ZVwiOiAxLFxuICAgIFwidWN1bVwiOiBcIltpbl9pXS8xMlwiXG4gIH0sXG4gIFwiW3BudF1cIjoge1xuICAgIFwidmFsdWVcIjogMSxcbiAgICBcInVjdW1cIjogXCJbbG5lXS82XCJcbiAgfSxcbiAgXCJbcGNhXVwiOiB7XG4gICAgXCJ2YWx1ZVwiOiAxMixcbiAgICBcInVjdW1cIjogXCJbcG50XVwiXG4gIH0sXG4gIFwiW3BudF9wcl1cIjoge1xuICAgIFwidmFsdWVcIjogMC4wMTM4MzcsXG4gICAgXCJ1Y3VtXCI6IFwiW2luX2ldXCJcbiAgfSxcbiAgXCJbcGNhX3ByXVwiOiB7XG4gICAgXCJ2YWx1ZVwiOiAxMixcbiAgICBcInVjdW1cIjogXCJbcG50X3ByXVwiXG4gIH0sXG4gIFwiW3BpZWRdXCI6IHtcbiAgICBcInZhbHVlXCI6IDMyLjQ4LFxuICAgIFwidWN1bVwiOiBcImNtXCJcbiAgfSxcbiAgXCJbcG91Y2VdXCI6IHtcbiAgICBcInZhbHVlXCI6IDEsXG4gICAgXCJ1Y3VtXCI6IFwiW3BpZWRdLzEyXCJcbiAgfSxcbiAgXCJbbGlnbmVdXCI6IHtcbiAgICBcInZhbHVlXCI6IDEsXG4gICAgXCJ1Y3VtXCI6IFwiW3BvdWNlXS8xMlwiXG4gIH0sXG4gIFwiW2RpZG90XVwiOiB7XG4gICAgXCJ2YWx1ZVwiOiAxLFxuICAgIFwidWN1bVwiOiBcIltsaWduZV0vNlwiXG4gIH0sXG4gIFwiW2NpY2Vyb11cIjoge1xuICAgIFwidmFsdWVcIjogMTIsXG4gICAgXCJ1Y3VtXCI6IFwiW2RpZG90XVwiXG4gIH0sXG4gIFwiW2RlZ0ZdXCI6IHtcbiAgICBcInZhbHVlXCI6IG51bGwsXG4gICAgXCJ1Y3VtXCI6IFwiZGVnZig1IEsvOSlcIlxuICB9LFxuICBcIltkZWdSXVwiOiB7XG4gICAgXCJ2YWx1ZVwiOiA1LFxuICAgIFwidWN1bVwiOiBcIksvOVwiXG4gIH0sXG4gIFwiY2FsX1sxNV1cIjoge1xuICAgIFwidmFsdWVcIjogNC4xODU4LFxuICAgIFwidWN1bVwiOiBcIkpcIlxuICB9LFxuICBcImNhbF9bMjBdXCI6IHtcbiAgICBcInZhbHVlXCI6IDQuMTgxOSxcbiAgICBcInVjdW1cIjogXCJKXCJcbiAgfSxcbiAgXCJjYWxfbVwiOiB7XG4gICAgXCJ2YWx1ZVwiOiA0LjE5MDAyLFxuICAgIFwidWN1bVwiOiBcIkpcIlxuICB9LFxuICBcImNhbF9JVFwiOiB7XG4gICAgXCJ2YWx1ZVwiOiA0LjE4NjgsXG4gICAgXCJ1Y3VtXCI6IFwiSlwiXG4gIH0sXG4gIFwiY2FsX3RoXCI6IHtcbiAgICBcInZhbHVlXCI6IDQuMTg0LFxuICAgIFwidWN1bVwiOiBcIkpcIlxuICB9LFxuICBcImNhbFwiOiB7XG4gICAgXCJ2YWx1ZVwiOiAxLFxuICAgIFwidWN1bVwiOiBcImNhbF90aFwiXG4gIH0sXG4gIFwiW0NhbF1cIjoge1xuICAgIFwidmFsdWVcIjogMSxcbiAgICBcInVjdW1cIjogXCJrY2FsX3RoXCJcbiAgfSxcbiAgXCJbQnR1XzM5XVwiOiB7XG4gICAgXCJ2YWx1ZVwiOiAxLjA1OTY3LFxuICAgIFwidWN1bVwiOiBcImtKXCJcbiAgfSxcbiAgXCJbQnR1XzU5XVwiOiB7XG4gICAgXCJ2YWx1ZVwiOiAxLjA1NDgsXG4gICAgXCJ1Y3VtXCI6IFwia0pcIlxuICB9LFxuICBcIltCdHVfNjBdXCI6IHtcbiAgICBcInZhbHVlXCI6IDEuMDU0NjgsXG4gICAgXCJ1Y3VtXCI6IFwia0pcIlxuICB9LFxuICBcIltCdHVfbV1cIjoge1xuICAgIFwidmFsdWVcIjogMS4wNTU4NyxcbiAgICBcInVjdW1cIjogXCJrSlwiXG4gIH0sXG4gIFwiW0J0dV9JVF1cIjoge1xuICAgIFwidmFsdWVcIjogMS4wNTUwNTU4NTI2MixcbiAgICBcInVjdW1cIjogXCJrSlwiXG4gIH0sXG4gIFwiW0J0dV90aF1cIjoge1xuICAgIFwidmFsdWVcIjogMS4wNTQzNSxcbiAgICBcInVjdW1cIjogXCJrSlwiXG4gIH0sXG4gIFwiW0J0dV1cIjoge1xuICAgIFwidmFsdWVcIjogMSxcbiAgICBcInVjdW1cIjogXCJbQnR1X3RoXVwiXG4gIH0sXG4gIFwiW0hQXVwiOiB7XG4gICAgXCJ2YWx1ZVwiOiA1NTAsXG4gICAgXCJ1Y3VtXCI6IFwiW2Z0X2ldLltsYmZfYXZdL3NcIlxuICB9LFxuICBcInRleFwiOiB7XG4gICAgXCJ2YWx1ZVwiOiAxLFxuICAgIFwidWN1bVwiOiBcImcva21cIlxuICB9LFxuICBcIltkZW5dXCI6IHtcbiAgICBcInZhbHVlXCI6IDEsXG4gICAgXCJ1Y3VtXCI6IFwiZy85L2ttXCJcbiAgfSxcbiAgXCJtW0gyT11cIjoge1xuICAgIFwidmFsdWVcIjogOS44MDY2NSxcbiAgICBcInVjdW1cIjogXCJrUGFcIlxuICB9LFxuICBcIm1bSGddXCI6IHtcbiAgICBcInZhbHVlXCI6IDEzMy4zMjIsXG4gICAgXCJ1Y3VtXCI6IFwia1BhXCJcbiAgfSxcbiAgXCJbaW5faSdIMk9dXCI6IHtcbiAgICBcInZhbHVlXCI6IDEsXG4gICAgXCJ1Y3VtXCI6IFwibVtIMk9dLltpbl9pXS9tXCJcbiAgfSxcbiAgXCJbaW5faSdIZ11cIjoge1xuICAgIFwidmFsdWVcIjogMSxcbiAgICBcInVjdW1cIjogXCJtW0hnXS5baW5faV0vbVwiXG4gIH0sXG4gIFwiW1BSVV1cIjoge1xuICAgIFwidmFsdWVcIjogMSxcbiAgICBcInVjdW1cIjogXCJtbVtIZ10ucy9tbFwiXG4gIH0sXG4gIFwiW3dvb2QnVV1cIjoge1xuICAgIFwidmFsdWVcIjogMSxcbiAgICBcInVjdW1cIjogXCJtbVtIZ10ubWluL0xcIlxuICB9LFxuICBcIltkaW9wXVwiOiB7XG4gICAgXCJ2YWx1ZVwiOiAxLFxuICAgIFwidWN1bVwiOiBcIi9tXCJcbiAgfSxcbiAgXCJbcCdkaW9wXVwiOiB7XG4gICAgXCJ2YWx1ZVwiOiBudWxsLFxuICAgIFwidWN1bVwiOiBcIjEwMHRhbigxIHJhZClcIlxuICB9LFxuICBcIiVbc2xvcGVdXCI6IHtcbiAgICBcInZhbHVlXCI6IG51bGwsXG4gICAgXCJ1Y3VtXCI6IFwiMTAwdGFuKDEgcmFkKVwiXG4gIH0sXG4gIFwiW21lc2hfaV1cIjoge1xuICAgIFwidmFsdWVcIjogMSxcbiAgICBcInVjdW1cIjogXCIvW2luX2ldXCJcbiAgfSxcbiAgXCJbQ2hdXCI6IHtcbiAgICBcInZhbHVlXCI6IDEsXG4gICAgXCJ1Y3VtXCI6IFwibW0vM1wiXG4gIH0sXG4gIFwiW2RycF1cIjoge1xuICAgIFwidmFsdWVcIjogMSxcbiAgICBcInVjdW1cIjogXCJtbC8yMFwiXG4gIH0sXG4gIFwiW2huc2YnVV1cIjoge1xuICAgIFwidmFsdWVcIjogMSxcbiAgICBcInVjdW1cIjogXCIxXCJcbiAgfSxcbiAgXCJbTUVUXVwiOiB7XG4gICAgXCJ2YWx1ZVwiOiAzLjUsXG4gICAgXCJ1Y3VtXCI6IFwibUwvbWluL2tnXCJcbiAgfSxcbiAgXCJbaHAnX1hdXCI6IHtcbiAgICBcInZhbHVlXCI6IG51bGwsXG4gICAgXCJ1Y3VtXCI6IFwiaHBYKDEgMSlcIlxuICB9LFxuICBcIltocCdfQ11cIjoge1xuICAgIFwidmFsdWVcIjogbnVsbCxcbiAgICBcInVjdW1cIjogXCJocEMoMSAxKVwiXG4gIH0sXG4gIFwiW2hwJ19NXVwiOiB7XG4gICAgXCJ2YWx1ZVwiOiBudWxsLFxuICAgIFwidWN1bVwiOiBcImhwTSgxIDEpXCJcbiAgfSxcbiAgXCJbaHAnX1FdXCI6IHtcbiAgICBcInZhbHVlXCI6IG51bGwsXG4gICAgXCJ1Y3VtXCI6IFwiaHBRKDEgMSlcIlxuICB9LFxuICBcIltocF9YXVwiOiB7XG4gICAgXCJ2YWx1ZVwiOiAxLFxuICAgIFwidWN1bVwiOiBcIjFcIlxuICB9LFxuICBcIltocF9DXVwiOiB7XG4gICAgXCJ2YWx1ZVwiOiAxLFxuICAgIFwidWN1bVwiOiBcIjFcIlxuICB9LFxuICBcIltocF9NXVwiOiB7XG4gICAgXCJ2YWx1ZVwiOiAxLFxuICAgIFwidWN1bVwiOiBcIjFcIlxuICB9LFxuICBcIltocF9RXVwiOiB7XG4gICAgXCJ2YWx1ZVwiOiAxLFxuICAgIFwidWN1bVwiOiBcIjFcIlxuICB9LFxuICBcIltrcF9YXVwiOiB7XG4gICAgXCJ2YWx1ZVwiOiAxLFxuICAgIFwidWN1bVwiOiBcIjFcIlxuICB9LFxuICBcIltrcF9DXVwiOiB7XG4gICAgXCJ2YWx1ZVwiOiAxLFxuICAgIFwidWN1bVwiOiBcIjFcIlxuICB9LFxuICBcIltrcF9NXVwiOiB7XG4gICAgXCJ2YWx1ZVwiOiAxLFxuICAgIFwidWN1bVwiOiBcIjFcIlxuICB9LFxuICBcIltrcF9RXVwiOiB7XG4gICAgXCJ2YWx1ZVwiOiAxLFxuICAgIFwidWN1bVwiOiBcIjFcIlxuICB9LFxuICBcImVxXCI6IHtcbiAgICBcInZhbHVlXCI6IDEsXG4gICAgXCJ1Y3VtXCI6IFwibW9sXCJcbiAgfSxcbiAgXCJvc21cIjoge1xuICAgIFwidmFsdWVcIjogMSxcbiAgICBcInVjdW1cIjogXCJtb2xcIlxuICB9LFxuICBcIltwSF1cIjoge1xuICAgIFwidmFsdWVcIjogbnVsbCxcbiAgICBcInVjdW1cIjogXCJwSCgxIG1vbC9sKVwiXG4gIH0sXG4gIFwiZyVcIjoge1xuICAgIFwidmFsdWVcIjogMSxcbiAgICBcInVjdW1cIjogXCJnL2RsXCJcbiAgfSxcbiAgXCJbU11cIjoge1xuICAgIFwidmFsdWVcIjogMSxcbiAgICBcInVjdW1cIjogXCIxMCotMTMuc1wiXG4gIH0sXG4gIFwiW0hQRl1cIjoge1xuICAgIFwidmFsdWVcIjogMSxcbiAgICBcInVjdW1cIjogXCIxXCJcbiAgfSxcbiAgXCJbTFBGXVwiOiB7XG4gICAgXCJ2YWx1ZVwiOiAxMDAsXG4gICAgXCJ1Y3VtXCI6IFwiMVwiXG4gIH0sXG4gIFwia2F0XCI6IHtcbiAgICBcInZhbHVlXCI6IDEsXG4gICAgXCJ1Y3VtXCI6IFwibW9sL3NcIlxuICB9LFxuICBcIlVcIjoge1xuICAgIFwidmFsdWVcIjogMSxcbiAgICBcInVjdW1cIjogXCJ1bW9sL21pblwiXG4gIH0sXG4gIFwiW2lVXVwiOiB7XG4gICAgXCJ2YWx1ZVwiOiAxLFxuICAgIFwidWN1bVwiOiBcIjFcIlxuICB9LFxuICBcIltJVV1cIjoge1xuICAgIFwidmFsdWVcIjogMSxcbiAgICBcInVjdW1cIjogXCJbaVVdXCJcbiAgfSxcbiAgXCJbYXJiJ1VdXCI6IHtcbiAgICBcInZhbHVlXCI6IDEsXG4gICAgXCJ1Y3VtXCI6IFwiMVwiXG4gIH0sXG4gIFwiW1VTUCdVXVwiOiB7XG4gICAgXCJ2YWx1ZVwiOiAxLFxuICAgIFwidWN1bVwiOiBcIjFcIlxuICB9LFxuICBcIltHUEwnVV1cIjoge1xuICAgIFwidmFsdWVcIjogMSxcbiAgICBcInVjdW1cIjogXCIxXCJcbiAgfSxcbiAgXCJbTVBMJ1VdXCI6IHtcbiAgICBcInZhbHVlXCI6IDEsXG4gICAgXCJ1Y3VtXCI6IFwiMVwiXG4gIH0sXG4gIFwiW0FQTCdVXVwiOiB7XG4gICAgXCJ2YWx1ZVwiOiAxLFxuICAgIFwidWN1bVwiOiBcIjFcIlxuICB9LFxuICBcIltiZXRoJ1VdXCI6IHtcbiAgICBcInZhbHVlXCI6IDEsXG4gICAgXCJ1Y3VtXCI6IFwiMVwiXG4gIH0sXG4gIFwiW2FudGknWGEnVV1cIjoge1xuICAgIFwidmFsdWVcIjogMSxcbiAgICBcInVjdW1cIjogXCIxXCJcbiAgfSxcbiAgXCJbdG9kZCdVXVwiOiB7XG4gICAgXCJ2YWx1ZVwiOiAxLFxuICAgIFwidWN1bVwiOiBcIjFcIlxuICB9LFxuICBcIltkeWUnVV1cIjoge1xuICAgIFwidmFsdWVcIjogMSxcbiAgICBcInVjdW1cIjogXCIxXCJcbiAgfSxcbiAgXCJbc21neSdVXVwiOiB7XG4gICAgXCJ2YWx1ZVwiOiAxLFxuICAgIFwidWN1bVwiOiBcIjFcIlxuICB9LFxuICBcIltiZHNrJ1VdXCI6IHtcbiAgICBcInZhbHVlXCI6IDEsXG4gICAgXCJ1Y3VtXCI6IFwiMVwiXG4gIH0sXG4gIFwiW2thJ1VdXCI6IHtcbiAgICBcInZhbHVlXCI6IDEsXG4gICAgXCJ1Y3VtXCI6IFwiMVwiXG4gIH0sXG4gIFwiW2tuaydVXVwiOiB7XG4gICAgXCJ2YWx1ZVwiOiAxLFxuICAgIFwidWN1bVwiOiBcIjFcIlxuICB9LFxuICBcIlttY2xnJ1VdXCI6IHtcbiAgICBcInZhbHVlXCI6IDEsXG4gICAgXCJ1Y3VtXCI6IFwiMVwiXG4gIH0sXG4gIFwiW3RiJ1VdXCI6IHtcbiAgICBcInZhbHVlXCI6IDEsXG4gICAgXCJ1Y3VtXCI6IFwiMVwiXG4gIH0sXG4gIFwiW0NDSURfNTBdXCI6IHtcbiAgICBcInZhbHVlXCI6IDEsXG4gICAgXCJ1Y3VtXCI6IFwiMVwiXG4gIH0sXG4gIFwiW1RDSURfNTBdXCI6IHtcbiAgICBcInZhbHVlXCI6IDEsXG4gICAgXCJ1Y3VtXCI6IFwiMVwiXG4gIH0sXG4gIFwiW0VJRF81MF1cIjoge1xuICAgIFwidmFsdWVcIjogMSxcbiAgICBcInVjdW1cIjogXCIxXCJcbiAgfSxcbiAgXCJbUEZVXVwiOiB7XG4gICAgXCJ2YWx1ZVwiOiAxLFxuICAgIFwidWN1bVwiOiBcIjFcIlxuICB9LFxuICBcIltGRlVdXCI6IHtcbiAgICBcInZhbHVlXCI6IDEsXG4gICAgXCJ1Y3VtXCI6IFwiMVwiXG4gIH0sXG4gIFwiW0NGVV1cIjoge1xuICAgIFwidmFsdWVcIjogMSxcbiAgICBcInVjdW1cIjogXCIxXCJcbiAgfSxcbiAgXCJbQkFVXVwiOiB7XG4gICAgXCJ2YWx1ZVwiOiAxLFxuICAgIFwidWN1bVwiOiBcIjFcIlxuICB9LFxuICBcIltBVV1cIjoge1xuICAgIFwidmFsdWVcIjogMSxcbiAgICBcInVjdW1cIjogXCIxXCJcbiAgfSxcbiAgXCJbQW1iJ2EnMSdVXVwiOiB7XG4gICAgXCJ2YWx1ZVwiOiAxLFxuICAgIFwidWN1bVwiOiBcIjFcIlxuICB9LFxuICBcIltQTlVdXCI6IHtcbiAgICBcInZhbHVlXCI6IDEsXG4gICAgXCJ1Y3VtXCI6IFwiMVwiXG4gIH0sXG4gIFwiW0xmXVwiOiB7XG4gICAgXCJ2YWx1ZVwiOiAxLFxuICAgIFwidWN1bVwiOiBcIjFcIlxuICB9LFxuICBcIltEJ2FnJ1VdXCI6IHtcbiAgICBcInZhbHVlXCI6IDEsXG4gICAgXCJ1Y3VtXCI6IFwiMVwiXG4gIH0sXG4gIFwiW0ZFVV1cIjoge1xuICAgIFwidmFsdWVcIjogMSxcbiAgICBcInVjdW1cIjogXCIxXCJcbiAgfSxcbiAgXCJbRUxVXVwiOiB7XG4gICAgXCJ2YWx1ZVwiOiAxLFxuICAgIFwidWN1bVwiOiBcIjFcIlxuICB9LFxuICBcIltFVV1cIjoge1xuICAgIFwidmFsdWVcIjogMSxcbiAgICBcInVjdW1cIjogXCIxXCJcbiAgfSxcbiAgXCJOcFwiOiB7XG4gICAgXCJ2YWx1ZVwiOiBudWxsLFxuICAgIFwidWN1bVwiOiBcImxuKDEgMSlcIlxuICB9LFxuICBcIkJcIjoge1xuICAgIFwidmFsdWVcIjogbnVsbCxcbiAgICBcInVjdW1cIjogXCJsZygxIDEpXCJcbiAgfSxcbiAgXCJCW1NQTF1cIjoge1xuICAgIFwidmFsdWVcIjogbnVsbCxcbiAgICBcInVjdW1cIjogXCIybGcoMiAxMCotNS5QYSlcIlxuICB9LFxuICBcIkJbVl1cIjoge1xuICAgIFwidmFsdWVcIjogbnVsbCxcbiAgICBcInVjdW1cIjogXCIybGcoMSBWKVwiXG4gIH0sXG4gIFwiQlttVl1cIjoge1xuICAgIFwidmFsdWVcIjogbnVsbCxcbiAgICBcInVjdW1cIjogXCIybGcoMSBtVilcIlxuICB9LFxuICBcIkJbdVZdXCI6IHtcbiAgICBcInZhbHVlXCI6IG51bGwsXG4gICAgXCJ1Y3VtXCI6IFwiMmxnKDEgdVYpXCJcbiAgfSxcbiAgXCJCWzEwLm5WXVwiOiB7XG4gICAgXCJ2YWx1ZVwiOiBudWxsLFxuICAgIFwidWN1bVwiOiBcIjJsZygxMCBuVilcIlxuICB9LFxuICBcIkJbV11cIjoge1xuICAgIFwidmFsdWVcIjogbnVsbCxcbiAgICBcInVjdW1cIjogXCJsZygxIFcpXCJcbiAgfSxcbiAgXCJCW2tXXVwiOiB7XG4gICAgXCJ2YWx1ZVwiOiBudWxsLFxuICAgIFwidWN1bVwiOiBcImxnKDEga1cpXCJcbiAgfSxcbiAgXCJzdFwiOiB7XG4gICAgXCJ2YWx1ZVwiOiAxLFxuICAgIFwidWN1bVwiOiBcIm0zXCJcbiAgfSxcbiAgXCJBb1wiOiB7XG4gICAgXCJ2YWx1ZVwiOiAwLjEsXG4gICAgXCJ1Y3VtXCI6IFwibm1cIlxuICB9LFxuICBcImJcIjoge1xuICAgIFwidmFsdWVcIjogMTAwLFxuICAgIFwidWN1bVwiOiBcImZtMlwiXG4gIH0sXG4gIFwiYXR0XCI6IHtcbiAgICBcInZhbHVlXCI6IDEsXG4gICAgXCJ1Y3VtXCI6IFwia2dmL2NtMlwiXG4gIH0sXG4gIFwibWhvXCI6IHtcbiAgICBcInZhbHVlXCI6IDEsXG4gICAgXCJ1Y3VtXCI6IFwiU1wiXG4gIH0sXG4gIFwiW3BzaV1cIjoge1xuICAgIFwidmFsdWVcIjogMSxcbiAgICBcInVjdW1cIjogXCJbbGJmX2F2XS9baW5faV0yXCJcbiAgfSxcbiAgXCJjaXJjXCI6IHtcbiAgICBcInZhbHVlXCI6IDIsXG4gICAgXCJ1Y3VtXCI6IFwiW3BpXS5yYWRcIlxuICB9LFxuICBcInNwaFwiOiB7XG4gICAgXCJ2YWx1ZVwiOiA0LFxuICAgIFwidWN1bVwiOiBcIltwaV0uc3JcIlxuICB9LFxuICBcIltjYXJfbV1cIjoge1xuICAgIFwidmFsdWVcIjogMC4yLFxuICAgIFwidWN1bVwiOiBcImdcIlxuICB9LFxuICBcIltjYXJfQXVdXCI6IHtcbiAgICBcInZhbHVlXCI6IDEsXG4gICAgXCJ1Y3VtXCI6IFwiLzI0XCJcbiAgfSxcbiAgXCJbc21vb3RdXCI6IHtcbiAgICBcInZhbHVlXCI6IDY3LFxuICAgIFwidWN1bVwiOiBcIltpbl9pXVwiXG4gIH0sXG4gIFwiYml0X3NcIjoge1xuICAgIFwidmFsdWVcIjogbnVsbCxcbiAgICBcInVjdW1cIjogXCJsZCgxIDEpXCJcbiAgfSxcbiAgXCJiaXRcIjoge1xuICAgIFwidmFsdWVcIjogMSxcbiAgICBcInVjdW1cIjogXCIxXCJcbiAgfSxcbiAgXCJCeVwiOiB7XG4gICAgXCJ2YWx1ZVwiOiA4LFxuICAgIFwidWN1bVwiOiBcImJpdFwiXG4gIH0sXG4gIFwiQmRcIjoge1xuICAgIFwidmFsdWVcIjogMSxcbiAgICBcInVjdW1cIjogXCIvc1wiXG4gIH1cbn1cbiIsIm1vZHVsZS5leHBvcnRzPXtcIm1vbFwiOnRydWUsXCJzclwiOnRydWUsXCJIelwiOnRydWUsXCJOXCI6dHJ1ZSxcIlBhXCI6dHJ1ZSxcIkpcIjp0cnVlLFwiV1wiOnRydWUsXCJBXCI6dHJ1ZSxcIlZcIjp0cnVlLFwiRlwiOnRydWUsXCJPaG1cIjp0cnVlLFwiU1wiOnRydWUsXCJXYlwiOnRydWUsXCJDZWxcIjp0cnVlLFwiVFwiOnRydWUsXCJIXCI6dHJ1ZSxcImxtXCI6dHJ1ZSxcImx4XCI6dHJ1ZSxcIkJxXCI6dHJ1ZSxcIkd5XCI6dHJ1ZSxcIlN2XCI6dHJ1ZSxcImxcIjp0cnVlLFwiTFwiOnRydWUsXCJhclwiOnRydWUsXCJ0XCI6dHJ1ZSxcImJhclwiOnRydWUsXCJ1XCI6dHJ1ZSxcImVWXCI6dHJ1ZSxcInBjXCI6dHJ1ZSxcIltjXVwiOnRydWUsXCJbaF1cIjp0cnVlLFwiW2tdXCI6dHJ1ZSxcIltlcHNfMF1cIjp0cnVlLFwiW211XzBdXCI6dHJ1ZSxcIltlXVwiOnRydWUsXCJbbV9lXVwiOnRydWUsXCJbbV9wXVwiOnRydWUsXCJbR11cIjp0cnVlLFwiW2ddXCI6dHJ1ZSxcIltseV1cIjp0cnVlLFwiZ2ZcIjp0cnVlLFwiS3lcIjp0cnVlLFwiR2FsXCI6dHJ1ZSxcImR5blwiOnRydWUsXCJlcmdcIjp0cnVlLFwiUFwiOnRydWUsXCJCaVwiOnRydWUsXCJTdFwiOnRydWUsXCJNeFwiOnRydWUsXCJHXCI6dHJ1ZSxcIk9lXCI6dHJ1ZSxcIkdiXCI6dHJ1ZSxcInNiXCI6dHJ1ZSxcIkxtYlwiOnRydWUsXCJwaFwiOnRydWUsXCJDaVwiOnRydWUsXCJSXCI6dHJ1ZSxcIlJBRFwiOnRydWUsXCJSRU1cIjp0cnVlLFwiY2FsX1sxNV1cIjp0cnVlLFwiY2FsX1syMF1cIjp0cnVlLFwiY2FsX21cIjp0cnVlLFwiY2FsX0lUXCI6dHJ1ZSxcImNhbF90aFwiOnRydWUsXCJjYWxcIjp0cnVlLFwidGV4XCI6dHJ1ZSxcIm1bSDJPXVwiOnRydWUsXCJtW0hnXVwiOnRydWUsXCJlcVwiOnRydWUsXCJvc21cIjp0cnVlLFwiZyVcIjp0cnVlLFwia2F0XCI6dHJ1ZSxcIlVcIjp0cnVlLFwiW2lVXVwiOnRydWUsXCJbSVVdXCI6dHJ1ZSxcIk5wXCI6dHJ1ZSxcIkJcIjp0cnVlLFwiQltTUExdXCI6dHJ1ZSxcIkJbVl1cIjp0cnVlLFwiQlttVl1cIjp0cnVlLFwiQlt1Vl1cIjp0cnVlLFwiQlsxMC5uVl1cIjp0cnVlLFwiQltXXVwiOnRydWUsXCJCW2tXXVwiOnRydWUsXCJzdFwiOnRydWUsXCJtaG9cIjp0cnVlLFwiYml0XCI6dHJ1ZSxcIkJ5XCI6dHJ1ZSxcIkJkXCI6dHJ1ZSxcIm1cIjp0cnVlLFwic1wiOnRydWUsXCJnXCI6dHJ1ZSxcInJhZFwiOnRydWUsXCJLXCI6dHJ1ZSxcIkNcIjp0cnVlLFwiY2RcIjp0cnVlfVxuIiwibW9kdWxlLmV4cG9ydHM9e1xuICBcIllcIjogMWUrMjQsXG4gIFwiWlwiOiAxZSsyMSxcbiAgXCJFXCI6IDEwMDAwMDAwMDAwMDAwMDAwMDAsXG4gIFwiUFwiOiAxMDAwMDAwMDAwMDAwMDAwLFxuICBcIlRcIjogMTAwMDAwMDAwMDAwMCxcbiAgXCJHXCI6IDEwMDAwMDAwMDAsXG4gIFwiTVwiOiAxMDAwMDAwLFxuICBcImtcIjogMTAwMCxcbiAgXCJoXCI6IDEwMCxcbiAgXCJkYVwiOiAxMCxcbiAgXCJkXCI6IDAuMSxcbiAgXCJjXCI6IDAuMDEsXG4gIFwibVwiOiAwLjAwMSxcbiAgXCJ1XCI6IDAuMDAwMDAxLFxuICBcIm5cIjogMWUtOSxcbiAgXCJwXCI6IDFlLTEyLFxuICBcImZcIjogMWUtMTUsXG4gIFwiYVwiOiAxZS0xOCxcbiAgXCJ6XCI6IDFlLTIxLFxuICBcInlcIjogMWUtMjQsXG4gIFwiS2lcIjogMTAyNCxcbiAgXCJNaVwiOiAxMDQ4NTc2LFxuICBcIkdpXCI6IDEwNzM3NDE4MjQsXG4gIFwiVGlcIjogMTA5OTUxMTYyNzc3NlxufVxuIiwibW9kdWxlLmV4cG9ydHMgPSAoZnVuY3Rpb24oKSB7XG4gIC8qXG4gICAqIEdlbmVyYXRlZCBieSBQRUcuanMgMC44LjAuXG4gICAqXG4gICAqIGh0dHA6Ly9wZWdqcy5tYWpkYS5jei9cbiAgICovXG5cbiAgZnVuY3Rpb24gcGVnJHN1YmNsYXNzKGNoaWxkLCBwYXJlbnQpIHtcbiAgICBmdW5jdGlvbiBjdG9yKCkgeyB0aGlzLmNvbnN0cnVjdG9yID0gY2hpbGQ7IH1cbiAgICBjdG9yLnByb3RvdHlwZSA9IHBhcmVudC5wcm90b3R5cGU7XG4gICAgY2hpbGQucHJvdG90eXBlID0gbmV3IGN0b3IoKTtcbiAgfVxuXG4gIGZ1bmN0aW9uIFN5bnRheEVycm9yKG1lc3NhZ2UsIGV4cGVjdGVkLCBmb3VuZCwgb2Zmc2V0LCBsaW5lLCBjb2x1bW4pIHtcbiAgICB0aGlzLm1lc3NhZ2UgID0gbWVzc2FnZTtcbiAgICB0aGlzLmV4cGVjdGVkID0gZXhwZWN0ZWQ7XG4gICAgdGhpcy5mb3VuZCAgICA9IGZvdW5kO1xuICAgIHRoaXMub2Zmc2V0ICAgPSBvZmZzZXQ7XG4gICAgdGhpcy5saW5lICAgICA9IGxpbmU7XG4gICAgdGhpcy5jb2x1bW4gICA9IGNvbHVtbjtcblxuICAgIHRoaXMubmFtZSAgICAgPSBcIlN5bnRheEVycm9yXCI7XG4gIH1cblxuICBwZWckc3ViY2xhc3MoU3ludGF4RXJyb3IsIEVycm9yKTtcblxuICBmdW5jdGlvbiBwYXJzZShpbnB1dCkge1xuICAgIHZhciBvcHRpb25zID0gYXJndW1lbnRzLmxlbmd0aCA+IDEgPyBhcmd1bWVudHNbMV0gOiB7fSxcblxuICAgICAgICBwZWckRkFJTEVEID0ge30sXG5cbiAgICAgICAgcGVnJHN0YXJ0UnVsZUluZGljZXMgPSB7IHN0YXJ0OiAwIH0sXG4gICAgICAgIHBlZyRzdGFydFJ1bGVJbmRleCAgID0gMCxcblxuICAgICAgICBwZWckY29uc3RzID0gW1xuICAgICAgICAgIGZ1bmN0aW9uKGUpIHtcbiAgICAgICAgICAgIHJldHVybiBlIDsgLy8gY2xlYW51cChlKTtcbiAgICAgICAgICB9LFxuICAgICAgICAgIHBlZyRGQUlMRUQsXG4gICAgICAgICAgXCIvXCIsXG4gICAgICAgICAgeyB0eXBlOiBcImxpdGVyYWxcIiwgdmFsdWU6IFwiL1wiLCBkZXNjcmlwdGlvbjogXCJcXFwiL1xcXCJcIiB9LFxuICAgICAgICAgIGZ1bmN0aW9uKGUpIHtyZXR1cm4gbXVsdGlwbHkoe3ZhbHVlOjEsIHVuaXRzOnt9fSwgW1tcIi9cIiwgZV1dKTt9LFxuICAgICAgICAgIFwiLlwiLFxuICAgICAgICAgIHsgdHlwZTogXCJsaXRlcmFsXCIsIHZhbHVlOiBcIi5cIiwgZGVzY3JpcHRpb246IFwiXFxcIi5cXFwiXCIgfSxcbiAgICAgICAgICBbXSxcbiAgICAgICAgICBmdW5jdGlvbih0LCBtcykge1xuICAgICAgICAgICAgcmV0dXJuIG11bHRpcGx5KHQsIG1zKTtcbiAgICAgICAgICB9LFxuICAgICAgICAgIG51bGwsXG4gICAgICAgICAgZnVuY3Rpb24oZSwgZXhwKSB7cmV0dXJuIGUuYW5uICYmIGV4cDt9LFxuICAgICAgICAgIHZvaWQgMCxcbiAgICAgICAgICBmdW5jdGlvbihlLCBleHApIHtcbiAgICAgICAgICAgIHJldHVybiB0b3Bvd2VyKGUsIGV4cCk7XG4gICAgICAgICAgfSxcbiAgICAgICAgICBmdW5jdGlvbihkKSB7XG4gICAgICAgICAgIHZhciByZXQgPSB7XG4gICAgICAgICAgICAgIHZhbHVlOiBkLFxuICAgICAgICAgICAgICB1bml0czoge31cbiAgICAgICAgICAgIH07XG4gICAgICAgICAgICByZXR1cm4gcmV0O1xuICAgICAgICAgIH0sXG4gICAgICAgICAgZnVuY3Rpb24odSkge3JldHVybiB1O30sXG4gICAgICAgICAgXCIoXCIsXG4gICAgICAgICAgeyB0eXBlOiBcImxpdGVyYWxcIiwgdmFsdWU6IFwiKFwiLCBkZXNjcmlwdGlvbjogXCJcXFwiKFxcXCJcIiB9LFxuICAgICAgICAgIFwiKVwiLFxuICAgICAgICAgIHsgdHlwZTogXCJsaXRlcmFsXCIsIHZhbHVlOiBcIilcIiwgZGVzY3JpcHRpb246IFwiXFxcIilcXFwiXCIgfSxcbiAgICAgICAgICBmdW5jdGlvbihlKSB7cmV0dXJuIGU7fSxcbiAgICAgICAgICAvXlsrXFwtXS8sXG4gICAgICAgICAgeyB0eXBlOiBcImNsYXNzXCIsIHZhbHVlOiBcIlsrXFxcXC1dXCIsIGRlc2NyaXB0aW9uOiBcIlsrXFxcXC1dXCIgfSxcbiAgICAgICAgICBmdW5jdGlvbihzLCBkKSB7cmV0dXJuIChzPT1cIi1cIikgPyAoLTEqZCkgOiBkfSxcbiAgICAgICAgICBmdW5jdGlvbihwLCBhKSB7cmV0dXJuKHAgJiYgIWlzbWV0cmljKGEpKTt9LFxuICAgICAgICAgIGZ1bmN0aW9uKHAsIGEpIHtcbiAgICAgICAgICAgIHZhciByZXQgPSBhO1xuICAgICAgICAgICAgaWYgKHApIHJldC52YWx1ZSA9IHJldC52YWx1ZSAqIHByZWZpeGVzW3BdO1xuICAgICAgICAgICAgcmV0dXJuIHJldDtcbiAgICAgICAgICB9LFxuICAgICAgICAgIC9eWzAtOV0vLFxuICAgICAgICAgIHsgdHlwZTogXCJjbGFzc1wiLCB2YWx1ZTogXCJbMC05XVwiLCBkZXNjcmlwdGlvbjogXCJbMC05XVwiIH0sXG4gICAgICAgICAgXCJlXCIsXG4gICAgICAgICAgeyB0eXBlOiBcImxpdGVyYWxcIiwgdmFsdWU6IFwiZVwiLCBkZXNjcmlwdGlvbjogXCJcXFwiZVxcXCJcIiB9LFxuICAgICAgICAgIGZ1bmN0aW9uKHYsIGVwcmVzZW50LCBlKSB7cmV0dXJuICghZXByZXNlbnQgJiYgISFlKTt9LFxuICAgICAgICAgIGZ1bmN0aW9uKHYsIGVwcmVzZW50LCBlKSB7XG4gICAgICAgICAgICByZXR1cm4gcGFyc2VJbnQodi5qb2luKFwiXCIpKSpNYXRoLnBvdygxMCwgZXx8MCk7XG4gICAgICAgICAgfSxcbiAgICAgICAgICBcIntcIixcbiAgICAgICAgICB7IHR5cGU6IFwibGl0ZXJhbFwiLCB2YWx1ZTogXCJ7XCIsIGRlc2NyaXB0aW9uOiBcIlxcXCJ7XFxcIlwiIH0sXG4gICAgICAgICAgL15bXn1dLyxcbiAgICAgICAgICB7IHR5cGU6IFwiY2xhc3NcIiwgdmFsdWU6IFwiW159XVwiLCBkZXNjcmlwdGlvbjogXCJbXn1dXCIgfSxcbiAgICAgICAgICBcIn1cIixcbiAgICAgICAgICB7IHR5cGU6IFwibGl0ZXJhbFwiLCB2YWx1ZTogXCJ9XCIsIGRlc2NyaXB0aW9uOiBcIlxcXCJ9XFxcIlwiIH0sXG4gICAgICAgICAgZnVuY3Rpb24obSkge3JldHVybiAvW15cXHgwMC1cXHg3Rl0vLnRlc3QobSk7fSxcbiAgICAgICAgICBmdW5jdGlvbihtKSB7IHJldHVybiB7dmFsdWU6IDEsIHVuaXRzOnt9LCBhbm46IG19IH0sXG4gICAgICAgICAgXCJbYW50aSdYYSdVXVwiLFxuICAgICAgICAgIHsgdHlwZTogXCJsaXRlcmFsXCIsIHZhbHVlOiBcIlthbnRpJ1hhJ1VdXCIsIGRlc2NyaXB0aW9uOiBcIlxcXCJbYW50aSdYYSdVXVxcXCJcIiB9LFxuICAgICAgICAgIGZ1bmN0aW9uKHUpIHtyZXR1cm4ge3ZhbHVlOiAxLCB1bml0czoge1wiW2FudGknWGEnVV1cIjogMX19O30sXG4gICAgICAgICAgXCJbQW1iJ2EnMSdVXVwiLFxuICAgICAgICAgIHsgdHlwZTogXCJsaXRlcmFsXCIsIHZhbHVlOiBcIltBbWInYScxJ1VdXCIsIGRlc2NyaXB0aW9uOiBcIlxcXCJbQW1iJ2EnMSdVXVxcXCJcIiB9LFxuICAgICAgICAgIGZ1bmN0aW9uKHUpIHtyZXR1cm4ge3ZhbHVlOiAxLCB1bml0czoge1wiW0FtYidhJzEnVV1cIjogMX19O30sXG4gICAgICAgICAgXCJbc3RvbmVfYXZdXCIsXG4gICAgICAgICAgeyB0eXBlOiBcImxpdGVyYWxcIiwgdmFsdWU6IFwiW3N0b25lX2F2XVwiLCBkZXNjcmlwdGlvbjogXCJcXFwiW3N0b25lX2F2XVxcXCJcIiB9LFxuICAgICAgICAgIGZ1bmN0aW9uKHUpIHtyZXR1cm4ge3ZhbHVlOiAxLCB1bml0czoge1wiW3N0b25lX2F2XVwiOiAxfX07fSxcbiAgICAgICAgICBcIltpbl9pJ0gyT11cIixcbiAgICAgICAgICB7IHR5cGU6IFwibGl0ZXJhbFwiLCB2YWx1ZTogXCJbaW5faSdIMk9dXCIsIGRlc2NyaXB0aW9uOiBcIlxcXCJbaW5faSdIMk9dXFxcIlwiIH0sXG4gICAgICAgICAgZnVuY3Rpb24odSkge3JldHVybiB7dmFsdWU6IDEsIHVuaXRzOiB7XCJbaW5faSdIMk9dXCI6IDF9fTt9LFxuICAgICAgICAgIFwiW3N0b25fYXZdXCIsXG4gICAgICAgICAgeyB0eXBlOiBcImxpdGVyYWxcIiwgdmFsdWU6IFwiW3N0b25fYXZdXCIsIGRlc2NyaXB0aW9uOiBcIlxcXCJbc3Rvbl9hdl1cXFwiXCIgfSxcbiAgICAgICAgICBmdW5jdGlvbih1KSB7cmV0dXJuIHt2YWx1ZTogMSwgdW5pdHM6IHtcIltzdG9uX2F2XVwiOiAxfX07fSxcbiAgICAgICAgICBcIltUQ0lEXzUwXVwiLFxuICAgICAgICAgIHsgdHlwZTogXCJsaXRlcmFsXCIsIHZhbHVlOiBcIltUQ0lEXzUwXVwiLCBkZXNjcmlwdGlvbjogXCJcXFwiW1RDSURfNTBdXFxcIlwiIH0sXG4gICAgICAgICAgZnVuY3Rpb24odSkge3JldHVybiB7dmFsdWU6IDEsIHVuaXRzOiB7XCJbVENJRF81MF1cIjogMX19O30sXG4gICAgICAgICAgXCJbQ0NJRF81MF1cIixcbiAgICAgICAgICB7IHR5cGU6IFwibGl0ZXJhbFwiLCB2YWx1ZTogXCJbQ0NJRF81MF1cIiwgZGVzY3JpcHRpb246IFwiXFxcIltDQ0lEXzUwXVxcXCJcIiB9LFxuICAgICAgICAgIGZ1bmN0aW9uKHUpIHtyZXR1cm4ge3ZhbHVlOiAxLCB1bml0czoge1wiW0NDSURfNTBdXCI6IDF9fTt9LFxuICAgICAgICAgIFwiW3Njd3RfYXZdXCIsXG4gICAgICAgICAgeyB0eXBlOiBcImxpdGVyYWxcIiwgdmFsdWU6IFwiW3Njd3RfYXZdXCIsIGRlc2NyaXB0aW9uOiBcIlxcXCJbc2N3dF9hdl1cXFwiXCIgfSxcbiAgICAgICAgICBmdW5jdGlvbih1KSB7cmV0dXJuIHt2YWx1ZTogMSwgdW5pdHM6IHtcIltzY3d0X2F2XVwiOiAxfX07fSxcbiAgICAgICAgICBcIltsY3d0X2F2XVwiLFxuICAgICAgICAgIHsgdHlwZTogXCJsaXRlcmFsXCIsIHZhbHVlOiBcIltsY3d0X2F2XVwiLCBkZXNjcmlwdGlvbjogXCJcXFwiW2xjd3RfYXZdXFxcIlwiIH0sXG4gICAgICAgICAgZnVuY3Rpb24odSkge3JldHVybiB7dmFsdWU6IDEsIHVuaXRzOiB7XCJbbGN3dF9hdl1cIjogMX19O30sXG4gICAgICAgICAgXCJbbHRvbl9hdl1cIixcbiAgICAgICAgICB7IHR5cGU6IFwibGl0ZXJhbFwiLCB2YWx1ZTogXCJbbHRvbl9hdl1cIiwgZGVzY3JpcHRpb246IFwiXFxcIltsdG9uX2F2XVxcXCJcIiB9LFxuICAgICAgICAgIGZ1bmN0aW9uKHUpIHtyZXR1cm4ge3ZhbHVlOiAxLCB1bml0czoge1wiW2x0b25fYXZdXCI6IDF9fTt9LFxuICAgICAgICAgIFwiW2luX2knSGddXCIsXG4gICAgICAgICAgeyB0eXBlOiBcImxpdGVyYWxcIiwgdmFsdWU6IFwiW2luX2knSGddXCIsIGRlc2NyaXB0aW9uOiBcIlxcXCJbaW5faSdIZ11cXFwiXCIgfSxcbiAgICAgICAgICBmdW5jdGlvbih1KSB7cmV0dXJuIHt2YWx1ZTogMSwgdW5pdHM6IHtcIltpbl9pJ0hnXVwiOiAxfX07fSxcbiAgICAgICAgICBcIlt0YnNfdXNdXCIsXG4gICAgICAgICAgeyB0eXBlOiBcImxpdGVyYWxcIiwgdmFsdWU6IFwiW3Ric191c11cIiwgZGVzY3JpcHRpb246IFwiXFxcIlt0YnNfdXNdXFxcIlwiIH0sXG4gICAgICAgICAgZnVuY3Rpb24odSkge3JldHVybiB7dmFsdWU6IDEsIHVuaXRzOiB7XCJbdGJzX3VzXVwiOiAxfX07fSxcbiAgICAgICAgICBcIltkcHRfdXNdXCIsXG4gICAgICAgICAgeyB0eXBlOiBcImxpdGVyYWxcIiwgdmFsdWU6IFwiW2RwdF91c11cIiwgZGVzY3JpcHRpb246IFwiXFxcIltkcHRfdXNdXFxcIlwiIH0sXG4gICAgICAgICAgZnVuY3Rpb24odSkge3JldHVybiB7dmFsdWU6IDEsIHVuaXRzOiB7XCJbZHB0X3VzXVwiOiAxfX07fSxcbiAgICAgICAgICBcIltiZHNrJ1VdXCIsXG4gICAgICAgICAgeyB0eXBlOiBcImxpdGVyYWxcIiwgdmFsdWU6IFwiW2Jkc2snVV1cIiwgZGVzY3JpcHRpb246IFwiXFxcIltiZHNrJ1VdXFxcIlwiIH0sXG4gICAgICAgICAgZnVuY3Rpb24odSkge3JldHVybiB7dmFsdWU6IDEsIHVuaXRzOiB7XCJbYmRzaydVXVwiOiAxfX07fSxcbiAgICAgICAgICBcIltzbWd5J1VdXCIsXG4gICAgICAgICAgeyB0eXBlOiBcImxpdGVyYWxcIiwgdmFsdWU6IFwiW3NtZ3knVV1cIiwgZGVzY3JpcHRpb246IFwiXFxcIltzbWd5J1VdXFxcIlwiIH0sXG4gICAgICAgICAgZnVuY3Rpb24odSkge3JldHVybiB7dmFsdWU6IDEsIHVuaXRzOiB7XCJbc21neSdVXVwiOiAxfX07fSxcbiAgICAgICAgICBcIltkcXRfdXNdXCIsXG4gICAgICAgICAgeyB0eXBlOiBcImxpdGVyYWxcIiwgdmFsdWU6IFwiW2RxdF91c11cIiwgZGVzY3JpcHRpb246IFwiXFxcIltkcXRfdXNdXFxcIlwiIH0sXG4gICAgICAgICAgZnVuY3Rpb24odSkge3JldHVybiB7dmFsdWU6IDEsIHVuaXRzOiB7XCJbZHF0X3VzXVwiOiAxfX07fSxcbiAgICAgICAgICBcIlt0b2RkJ1VdXCIsXG4gICAgICAgICAgeyB0eXBlOiBcImxpdGVyYWxcIiwgdmFsdWU6IFwiW3RvZGQnVV1cIiwgZGVzY3JpcHRpb246IFwiXFxcIlt0b2RkJ1VdXFxcIlwiIH0sXG4gICAgICAgICAgZnVuY3Rpb24odSkge3JldHVybiB7dmFsdWU6IDEsIHVuaXRzOiB7XCJbdG9kZCdVXVwiOiAxfX07fSxcbiAgICAgICAgICBcIltEJ2FnJ1VdXCIsXG4gICAgICAgICAgeyB0eXBlOiBcImxpdGVyYWxcIiwgdmFsdWU6IFwiW0QnYWcnVV1cIiwgZGVzY3JpcHRpb246IFwiXFxcIltEJ2FnJ1VdXFxcIlwiIH0sXG4gICAgICAgICAgZnVuY3Rpb24odSkge3JldHVybiB7dmFsdWU6IDEsIHVuaXRzOiB7XCJbRCdhZydVXVwiOiAxfX07fSxcbiAgICAgICAgICBcIltiZXRoJ1VdXCIsXG4gICAgICAgICAgeyB0eXBlOiBcImxpdGVyYWxcIiwgdmFsdWU6IFwiW2JldGgnVV1cIiwgZGVzY3JpcHRpb246IFwiXFxcIltiZXRoJ1VdXFxcIlwiIH0sXG4gICAgICAgICAgZnVuY3Rpb24odSkge3JldHVybiB7dmFsdWU6IDEsIHVuaXRzOiB7XCJbYmV0aCdVXVwiOiAxfX07fSxcbiAgICAgICAgICBcIltnYWxfd2ldXCIsXG4gICAgICAgICAgeyB0eXBlOiBcImxpdGVyYWxcIiwgdmFsdWU6IFwiW2dhbF93aV1cIiwgZGVzY3JpcHRpb246IFwiXFxcIltnYWxfd2ldXFxcIlwiIH0sXG4gICAgICAgICAgZnVuY3Rpb24odSkge3JldHVybiB7dmFsdWU6IDEsIHVuaXRzOiB7XCJbZ2FsX3dpXVwiOiAxfX07fSxcbiAgICAgICAgICBcIltjcmRfdXNdXCIsXG4gICAgICAgICAgeyB0eXBlOiBcImxpdGVyYWxcIiwgdmFsdWU6IFwiW2NyZF91c11cIiwgZGVzY3JpcHRpb246IFwiXFxcIltjcmRfdXNdXFxcIlwiIH0sXG4gICAgICAgICAgZnVuY3Rpb24odSkge3JldHVybiB7dmFsdWU6IDEsIHVuaXRzOiB7XCJbY3JkX3VzXVwiOiAxfX07fSxcbiAgICAgICAgICBcIlttaW5fdXNdXCIsXG4gICAgICAgICAgeyB0eXBlOiBcImxpdGVyYWxcIiwgdmFsdWU6IFwiW21pbl91c11cIiwgZGVzY3JpcHRpb246IFwiXFxcIlttaW5fdXNdXFxcIlwiIH0sXG4gICAgICAgICAgZnVuY3Rpb24odSkge3JldHVybiB7dmFsdWU6IDEsIHVuaXRzOiB7XCJbbWluX3VzXVwiOiAxfX07fSxcbiAgICAgICAgICBcIltmZHJfdXNdXCIsXG4gICAgICAgICAgeyB0eXBlOiBcImxpdGVyYWxcIiwgdmFsdWU6IFwiW2Zkcl91c11cIiwgZGVzY3JpcHRpb246IFwiXFxcIltmZHJfdXNdXFxcIlwiIH0sXG4gICAgICAgICAgZnVuY3Rpb24odSkge3JldHVybiB7dmFsdWU6IDEsIHVuaXRzOiB7XCJbZmRyX3VzXVwiOiAxfX07fSxcbiAgICAgICAgICBcIltmb3pfdXNdXCIsXG4gICAgICAgICAgeyB0eXBlOiBcImxpdGVyYWxcIiwgdmFsdWU6IFwiW2Zvel91c11cIiwgZGVzY3JpcHRpb246IFwiXFxcIltmb3pfdXNdXFxcIlwiIH0sXG4gICAgICAgICAgZnVuY3Rpb24odSkge3JldHVybiB7dmFsdWU6IDEsIHVuaXRzOiB7XCJbZm96X3VzXVwiOiAxfX07fSxcbiAgICAgICAgICBcIltnaWxfdXNdXCIsXG4gICAgICAgICAgeyB0eXBlOiBcImxpdGVyYWxcIiwgdmFsdWU6IFwiW2dpbF91c11cIiwgZGVzY3JpcHRpb246IFwiXFxcIltnaWxfdXNdXFxcIlwiIH0sXG4gICAgICAgICAgZnVuY3Rpb24odSkge3JldHVybiB7dmFsdWU6IDEsIHVuaXRzOiB7XCJbZ2lsX3VzXVwiOiAxfX07fSxcbiAgICAgICAgICBcIltiYmxfdXNdXCIsXG4gICAgICAgICAgeyB0eXBlOiBcImxpdGVyYWxcIiwgdmFsdWU6IFwiW2JibF91c11cIiwgZGVzY3JpcHRpb246IFwiXFxcIltiYmxfdXNdXFxcIlwiIH0sXG4gICAgICAgICAgZnVuY3Rpb24odSkge3JldHVybiB7dmFsdWU6IDEsIHVuaXRzOiB7XCJbYmJsX3VzXVwiOiAxfX07fSxcbiAgICAgICAgICBcIltnYWxfdXNdXCIsXG4gICAgICAgICAgeyB0eXBlOiBcImxpdGVyYWxcIiwgdmFsdWU6IFwiW2dhbF91c11cIiwgZGVzY3JpcHRpb246IFwiXFxcIltnYWxfdXNdXFxcIlwiIH0sXG4gICAgICAgICAgZnVuY3Rpb24odSkge3JldHVybiB7dmFsdWU6IDEsIHVuaXRzOiB7XCJbZ2FsX3VzXVwiOiAxfX07fSxcbiAgICAgICAgICBcIlthY3JfYnJdXCIsXG4gICAgICAgICAgeyB0eXBlOiBcImxpdGVyYWxcIiwgdmFsdWU6IFwiW2Fjcl9icl1cIiwgZGVzY3JpcHRpb246IFwiXFxcIlthY3JfYnJdXFxcIlwiIH0sXG4gICAgICAgICAgZnVuY3Rpb24odSkge3JldHVybiB7dmFsdWU6IDEsIHVuaXRzOiB7XCJbYWNyX2JyXVwiOiAxfX07fSxcbiAgICAgICAgICBcIltubWlfYnJdXCIsXG4gICAgICAgICAgeyB0eXBlOiBcImxpdGVyYWxcIiwgdmFsdWU6IFwiW25taV9icl1cIiwgZGVzY3JpcHRpb246IFwiXFxcIltubWlfYnJdXFxcIlwiIH0sXG4gICAgICAgICAgZnVuY3Rpb24odSkge3JldHVybiB7dmFsdWU6IDEsIHVuaXRzOiB7XCJbbm1pX2JyXVwiOiAxfX07fSxcbiAgICAgICAgICBcIltmdGhfYnJdXCIsXG4gICAgICAgICAgeyB0eXBlOiBcImxpdGVyYWxcIiwgdmFsdWU6IFwiW2Z0aF9icl1cIiwgZGVzY3JpcHRpb246IFwiXFxcIltmdGhfYnJdXFxcIlwiIH0sXG4gICAgICAgICAgZnVuY3Rpb24odSkge3JldHVybiB7dmFsdWU6IDEsIHVuaXRzOiB7XCJbZnRoX2JyXVwiOiAxfX07fSxcbiAgICAgICAgICBcIlttaWxfdXNdXCIsXG4gICAgICAgICAgeyB0eXBlOiBcImxpdGVyYWxcIiwgdmFsdWU6IFwiW21pbF91c11cIiwgZGVzY3JpcHRpb246IFwiXFxcIlttaWxfdXNdXFxcIlwiIH0sXG4gICAgICAgICAgZnVuY3Rpb24odSkge3JldHVybiB7dmFsdWU6IDEsIHVuaXRzOiB7XCJbbWlsX3VzXVwiOiAxfX07fSxcbiAgICAgICAgICBcIltzbWlfdXNdXCIsXG4gICAgICAgICAgeyB0eXBlOiBcImxpdGVyYWxcIiwgdmFsdWU6IFwiW3NtaV91c11cIiwgZGVzY3JpcHRpb246IFwiXFxcIltzbWlfdXNdXFxcIlwiIH0sXG4gICAgICAgICAgZnVuY3Rpb24odSkge3JldHVybiB7dmFsdWU6IDEsIHVuaXRzOiB7XCJbc21pX3VzXVwiOiAxfX07fSxcbiAgICAgICAgICBcIlthY3JfdXNdXCIsXG4gICAgICAgICAgeyB0eXBlOiBcImxpdGVyYWxcIiwgdmFsdWU6IFwiW2Fjcl91c11cIiwgZGVzY3JpcHRpb246IFwiXFxcIlthY3JfdXNdXFxcIlwiIH0sXG4gICAgICAgICAgZnVuY3Rpb24odSkge3JldHVybiB7dmFsdWU6IDEsIHVuaXRzOiB7XCJbYWNyX3VzXVwiOiAxfX07fSxcbiAgICAgICAgICBcIltmdXJfdXNdXCIsXG4gICAgICAgICAgeyB0eXBlOiBcImxpdGVyYWxcIiwgdmFsdWU6IFwiW2Z1cl91c11cIiwgZGVzY3JpcHRpb246IFwiXFxcIltmdXJfdXNdXFxcIlwiIH0sXG4gICAgICAgICAgZnVuY3Rpb24odSkge3JldHVybiB7dmFsdWU6IDEsIHVuaXRzOiB7XCJbZnVyX3VzXVwiOiAxfX07fSxcbiAgICAgICAgICBcIltmdGhfdXNdXCIsXG4gICAgICAgICAgeyB0eXBlOiBcImxpdGVyYWxcIiwgdmFsdWU6IFwiW2Z0aF91c11cIiwgZGVzY3JpcHRpb246IFwiXFxcIltmdGhfdXNdXFxcIlwiIH0sXG4gICAgICAgICAgZnVuY3Rpb24odSkge3JldHVybiB7dmFsdWU6IDEsIHVuaXRzOiB7XCJbZnRoX3VzXVwiOiAxfX07fSxcbiAgICAgICAgICBcIltybGtfdXNdXCIsXG4gICAgICAgICAgeyB0eXBlOiBcImxpdGVyYWxcIiwgdmFsdWU6IFwiW3Jsa191c11cIiwgZGVzY3JpcHRpb246IFwiXFxcIltybGtfdXNdXFxcIlwiIH0sXG4gICAgICAgICAgZnVuY3Rpb24odSkge3JldHVybiB7dmFsdWU6IDEsIHVuaXRzOiB7XCJbcmxrX3VzXVwiOiAxfX07fSxcbiAgICAgICAgICBcIltyY2hfdXNdXCIsXG4gICAgICAgICAgeyB0eXBlOiBcImxpdGVyYWxcIiwgdmFsdWU6IFwiW3JjaF91c11cIiwgZGVzY3JpcHRpb246IFwiXFxcIltyY2hfdXNdXFxcIlwiIH0sXG4gICAgICAgICAgZnVuY3Rpb24odSkge3JldHVybiB7dmFsdWU6IDEsIHVuaXRzOiB7XCJbcmNoX3VzXVwiOiAxfX07fSxcbiAgICAgICAgICBcIltsYmZfYXZdXCIsXG4gICAgICAgICAgeyB0eXBlOiBcImxpdGVyYWxcIiwgdmFsdWU6IFwiW2xiZl9hdl1cIiwgZGVzY3JpcHRpb246IFwiXFxcIltsYmZfYXZdXFxcIlwiIH0sXG4gICAgICAgICAgZnVuY3Rpb24odSkge3JldHVybiB7dmFsdWU6IDEsIHVuaXRzOiB7XCJbbGJmX2F2XVwiOiAxfX07fSxcbiAgICAgICAgICBcIltobnNmJ1VdXCIsXG4gICAgICAgICAgeyB0eXBlOiBcImxpdGVyYWxcIiwgdmFsdWU6IFwiW2huc2YnVV1cIiwgZGVzY3JpcHRpb246IFwiXFxcIltobnNmJ1VdXFxcIlwiIH0sXG4gICAgICAgICAgZnVuY3Rpb24odSkge3JldHVybiB7dmFsdWU6IDEsIHVuaXRzOiB7XCJbaG5zZidVXVwiOiAxfX07fSxcbiAgICAgICAgICBcIlttZXNoX2ldXCIsXG4gICAgICAgICAgeyB0eXBlOiBcImxpdGVyYWxcIiwgdmFsdWU6IFwiW21lc2hfaV1cIiwgZGVzY3JpcHRpb246IFwiXFxcIlttZXNoX2ldXFxcIlwiIH0sXG4gICAgICAgICAgZnVuY3Rpb24odSkge3JldHVybiB7dmFsdWU6IDEsIHVuaXRzOiB7XCJbbWVzaF9pXVwiOiAxfX07fSxcbiAgICAgICAgICBcIiVbc2xvcGVdXCIsXG4gICAgICAgICAgeyB0eXBlOiBcImxpdGVyYWxcIiwgdmFsdWU6IFwiJVtzbG9wZV1cIiwgZGVzY3JpcHRpb246IFwiXFxcIiVbc2xvcGVdXFxcIlwiIH0sXG4gICAgICAgICAgZnVuY3Rpb24odSkge3JldHVybiB7dmFsdWU6IDEsIHVuaXRzOiB7XCIlW3Nsb3BlXVwiOiAxfX07fSxcbiAgICAgICAgICBcIltwJ2Rpb3BdXCIsXG4gICAgICAgICAgeyB0eXBlOiBcImxpdGVyYWxcIiwgdmFsdWU6IFwiW3AnZGlvcF1cIiwgZGVzY3JpcHRpb246IFwiXFxcIltwJ2Rpb3BdXFxcIlwiIH0sXG4gICAgICAgICAgZnVuY3Rpb24odSkge3JldHVybiB7dmFsdWU6IDEsIHVuaXRzOiB7XCJbcCdkaW9wXVwiOiAxfX07fSxcbiAgICAgICAgICBcIltnaWxfYnJdXCIsXG4gICAgICAgICAgeyB0eXBlOiBcImxpdGVyYWxcIiwgdmFsdWU6IFwiW2dpbF9icl1cIiwgZGVzY3JpcHRpb246IFwiXFxcIltnaWxfYnJdXFxcIlwiIH0sXG4gICAgICAgICAgZnVuY3Rpb24odSkge3JldHVybiB7dmFsdWU6IDEsIHVuaXRzOiB7XCJbZ2lsX2JyXVwiOiAxfX07fSxcbiAgICAgICAgICBcIlt3b29kJ1VdXCIsXG4gICAgICAgICAgeyB0eXBlOiBcImxpdGVyYWxcIiwgdmFsdWU6IFwiW3dvb2QnVV1cIiwgZGVzY3JpcHRpb246IFwiXFxcIlt3b29kJ1VdXFxcIlwiIH0sXG4gICAgICAgICAgZnVuY3Rpb24odSkge3JldHVybiB7dmFsdWU6IDEsIHVuaXRzOiB7XCJbd29vZCdVXVwiOiAxfX07fSxcbiAgICAgICAgICBcImNhbF9bMTVdXCIsXG4gICAgICAgICAgeyB0eXBlOiBcImxpdGVyYWxcIiwgdmFsdWU6IFwiY2FsX1sxNV1cIiwgZGVzY3JpcHRpb246IFwiXFxcImNhbF9bMTVdXFxcIlwiIH0sXG4gICAgICAgICAgZnVuY3Rpb24odSkge3JldHVybiB7dmFsdWU6IDEsIHVuaXRzOiB7XCJjYWxfWzE1XVwiOiAxfX07fSxcbiAgICAgICAgICBcImNhbF9bMjBdXCIsXG4gICAgICAgICAgeyB0eXBlOiBcImxpdGVyYWxcIiwgdmFsdWU6IFwiY2FsX1syMF1cIiwgZGVzY3JpcHRpb246IFwiXFxcImNhbF9bMjBdXFxcIlwiIH0sXG4gICAgICAgICAgZnVuY3Rpb24odSkge3JldHVybiB7dmFsdWU6IDEsIHVuaXRzOiB7XCJjYWxfWzIwXVwiOiAxfX07fSxcbiAgICAgICAgICBcIltmb3pfYnJdXCIsXG4gICAgICAgICAgeyB0eXBlOiBcImxpdGVyYWxcIiwgdmFsdWU6IFwiW2Zvel9icl1cIiwgZGVzY3JpcHRpb246IFwiXFxcIltmb3pfYnJdXFxcIlwiIH0sXG4gICAgICAgICAgZnVuY3Rpb24odSkge3JldHVybiB7dmFsdWU6IDEsIHVuaXRzOiB7XCJbZm96X2JyXVwiOiAxfX07fSxcbiAgICAgICAgICBcIltmZHJfYnJdXCIsXG4gICAgICAgICAgeyB0eXBlOiBcImxpdGVyYWxcIiwgdmFsdWU6IFwiW2Zkcl9icl1cIiwgZGVzY3JpcHRpb246IFwiXFxcIltmZHJfYnJdXFxcIlwiIH0sXG4gICAgICAgICAgZnVuY3Rpb24odSkge3JldHVybiB7dmFsdWU6IDEsIHVuaXRzOiB7XCJbZmRyX2JyXVwiOiAxfX07fSxcbiAgICAgICAgICBcIltzcmRfdXNdXCIsXG4gICAgICAgICAgeyB0eXBlOiBcImxpdGVyYWxcIiwgdmFsdWU6IFwiW3NyZF91c11cIiwgZGVzY3JpcHRpb246IFwiXFxcIltzcmRfdXNdXFxcIlwiIH0sXG4gICAgICAgICAgZnVuY3Rpb24odSkge3JldHVybiB7dmFsdWU6IDEsIHVuaXRzOiB7XCJbc3JkX3VzXVwiOiAxfX07fSxcbiAgICAgICAgICBcIlttaW5fYnJdXCIsXG4gICAgICAgICAgeyB0eXBlOiBcImxpdGVyYWxcIiwgdmFsdWU6IFwiW21pbl9icl1cIiwgZGVzY3JpcHRpb246IFwiXFxcIlttaW5fYnJdXFxcIlwiIH0sXG4gICAgICAgICAgZnVuY3Rpb24odSkge3JldHVybiB7dmFsdWU6IDEsIHVuaXRzOiB7XCJbbWluX2JyXVwiOiAxfX07fSxcbiAgICAgICAgICBcIltFSURfNTBdXCIsXG4gICAgICAgICAgeyB0eXBlOiBcImxpdGVyYWxcIiwgdmFsdWU6IFwiW0VJRF81MF1cIiwgZGVzY3JpcHRpb246IFwiXFxcIltFSURfNTBdXFxcIlwiIH0sXG4gICAgICAgICAgZnVuY3Rpb24odSkge3JldHVybiB7dmFsdWU6IDEsIHVuaXRzOiB7XCJbRUlEXzUwXVwiOiAxfX07fSxcbiAgICAgICAgICBcIltCdHVfdGhdXCIsXG4gICAgICAgICAgeyB0eXBlOiBcImxpdGVyYWxcIiwgdmFsdWU6IFwiW0J0dV90aF1cIiwgZGVzY3JpcHRpb246IFwiXFxcIltCdHVfdGhdXFxcIlwiIH0sXG4gICAgICAgICAgZnVuY3Rpb24odSkge3JldHVybiB7dmFsdWU6IDEsIHVuaXRzOiB7XCJbQnR1X3RoXVwiOiAxfX07fSxcbiAgICAgICAgICBcIltCdHVfSVRdXCIsXG4gICAgICAgICAgeyB0eXBlOiBcImxpdGVyYWxcIiwgdmFsdWU6IFwiW0J0dV9JVF1cIiwgZGVzY3JpcHRpb246IFwiXFxcIltCdHVfSVRdXFxcIlwiIH0sXG4gICAgICAgICAgZnVuY3Rpb24odSkge3JldHVybiB7dmFsdWU6IDEsIHVuaXRzOiB7XCJbQnR1X0lUXVwiOiAxfX07fSxcbiAgICAgICAgICBcIltjYXJfQXVdXCIsXG4gICAgICAgICAgeyB0eXBlOiBcImxpdGVyYWxcIiwgdmFsdWU6IFwiW2Nhcl9BdV1cIiwgZGVzY3JpcHRpb246IFwiXFxcIltjYXJfQXVdXFxcIlwiIH0sXG4gICAgICAgICAgZnVuY3Rpb24odSkge3JldHVybiB7dmFsdWU6IDEsIHVuaXRzOiB7XCJbY2FyX0F1XVwiOiAxfX07fSxcbiAgICAgICAgICBcIltCdHVfNjBdXCIsXG4gICAgICAgICAgeyB0eXBlOiBcImxpdGVyYWxcIiwgdmFsdWU6IFwiW0J0dV82MF1cIiwgZGVzY3JpcHRpb246IFwiXFxcIltCdHVfNjBdXFxcIlwiIH0sXG4gICAgICAgICAgZnVuY3Rpb24odSkge3JldHVybiB7dmFsdWU6IDEsIHVuaXRzOiB7XCJbQnR1XzYwXVwiOiAxfX07fSxcbiAgICAgICAgICBcIltCdHVfNTldXCIsXG4gICAgICAgICAgeyB0eXBlOiBcImxpdGVyYWxcIiwgdmFsdWU6IFwiW0J0dV81OV1cIiwgZGVzY3JpcHRpb246IFwiXFxcIltCdHVfNTldXFxcIlwiIH0sXG4gICAgICAgICAgZnVuY3Rpb24odSkge3JldHVybiB7dmFsdWU6IDEsIHVuaXRzOiB7XCJbQnR1XzU5XVwiOiAxfX07fSxcbiAgICAgICAgICBcIltCdHVfMzldXCIsXG4gICAgICAgICAgeyB0eXBlOiBcImxpdGVyYWxcIiwgdmFsdWU6IFwiW0J0dV8zOV1cIiwgZGVzY3JpcHRpb246IFwiXFxcIltCdHVfMzldXFxcIlwiIH0sXG4gICAgICAgICAgZnVuY3Rpb24odSkge3JldHVybiB7dmFsdWU6IDEsIHVuaXRzOiB7XCJbQnR1XzM5XVwiOiAxfX07fSxcbiAgICAgICAgICBcIltjdXBfdXNdXCIsXG4gICAgICAgICAgeyB0eXBlOiBcImxpdGVyYWxcIiwgdmFsdWU6IFwiW2N1cF91c11cIiwgZGVzY3JpcHRpb246IFwiXFxcIltjdXBfdXNdXFxcIlwiIH0sXG4gICAgICAgICAgZnVuY3Rpb24odSkge3JldHVybiB7dmFsdWU6IDEsIHVuaXRzOiB7XCJbY3VwX3VzXVwiOiAxfX07fSxcbiAgICAgICAgICBcIkJbMTAublZdXCIsXG4gICAgICAgICAgeyB0eXBlOiBcImxpdGVyYWxcIiwgdmFsdWU6IFwiQlsxMC5uVl1cIiwgZGVzY3JpcHRpb246IFwiXFxcIkJbMTAublZdXFxcIlwiIH0sXG4gICAgICAgICAgZnVuY3Rpb24odSkge3JldHVybiB7dmFsdWU6IDEsIHVuaXRzOiB7XCJCWzEwLm5WXVwiOiAxfX07fSxcbiAgICAgICAgICBcIlt0c3BfdXNdXCIsXG4gICAgICAgICAgeyB0eXBlOiBcImxpdGVyYWxcIiwgdmFsdWU6IFwiW3RzcF91c11cIiwgZGVzY3JpcHRpb246IFwiXFxcIlt0c3BfdXNdXFxcIlwiIH0sXG4gICAgICAgICAgZnVuY3Rpb24odSkge3JldHVybiB7dmFsdWU6IDEsIHVuaXRzOiB7XCJbdHNwX3VzXVwiOiAxfX07fSxcbiAgICAgICAgICBcIlttY2xnJ1VdXCIsXG4gICAgICAgICAgeyB0eXBlOiBcImxpdGVyYWxcIiwgdmFsdWU6IFwiW21jbGcnVV1cIiwgZGVzY3JpcHRpb246IFwiXFxcIlttY2xnJ1VdXFxcIlwiIH0sXG4gICAgICAgICAgZnVuY3Rpb24odSkge3JldHVybiB7dmFsdWU6IDEsIHVuaXRzOiB7XCJbbWNsZydVXVwiOiAxfX07fSxcbiAgICAgICAgICBcIltjaWNlcm9dXCIsXG4gICAgICAgICAgeyB0eXBlOiBcImxpdGVyYWxcIiwgdmFsdWU6IFwiW2NpY2Vyb11cIiwgZGVzY3JpcHRpb246IFwiXFxcIltjaWNlcm9dXFxcIlwiIH0sXG4gICAgICAgICAgZnVuY3Rpb24odSkge3JldHVybiB7dmFsdWU6IDEsIHVuaXRzOiB7XCJbY2ljZXJvXVwiOiAxfX07fSxcbiAgICAgICAgICBcIltwd3RfdHJdXCIsXG4gICAgICAgICAgeyB0eXBlOiBcImxpdGVyYWxcIiwgdmFsdWU6IFwiW3B3dF90cl1cIiwgZGVzY3JpcHRpb246IFwiXFxcIltwd3RfdHJdXFxcIlwiIH0sXG4gICAgICAgICAgZnVuY3Rpb24odSkge3JldHVybiB7dmFsdWU6IDEsIHVuaXRzOiB7XCJbcHd0X3RyXVwiOiAxfX07fSxcbiAgICAgICAgICBcIltwbnRfcHJdXCIsXG4gICAgICAgICAgeyB0eXBlOiBcImxpdGVyYWxcIiwgdmFsdWU6IFwiW3BudF9wcl1cIiwgZGVzY3JpcHRpb246IFwiXFxcIltwbnRfcHJdXFxcIlwiIH0sXG4gICAgICAgICAgZnVuY3Rpb24odSkge3JldHVybiB7dmFsdWU6IDEsIHVuaXRzOiB7XCJbcG50X3ByXVwiOiAxfX07fSxcbiAgICAgICAgICBcIltwY2FfcHJdXCIsXG4gICAgICAgICAgeyB0eXBlOiBcImxpdGVyYWxcIiwgdmFsdWU6IFwiW3BjYV9wcl1cIiwgZGVzY3JpcHRpb246IFwiXFxcIltwY2FfcHJdXFxcIlwiIH0sXG4gICAgICAgICAgZnVuY3Rpb24odSkge3JldHVybiB7dmFsdWU6IDEsIHVuaXRzOiB7XCJbcGNhX3ByXVwiOiAxfX07fSxcbiAgICAgICAgICBcIltnYWxfYnJdXCIsXG4gICAgICAgICAgeyB0eXBlOiBcImxpdGVyYWxcIiwgdmFsdWU6IFwiW2dhbF9icl1cIiwgZGVzY3JpcHRpb246IFwiXFxcIltnYWxfYnJdXFxcIlwiIH0sXG4gICAgICAgICAgZnVuY3Rpb24odSkge3JldHVybiB7dmFsdWU6IDEsIHVuaXRzOiB7XCJbZ2FsX2JyXVwiOiAxfX07fSxcbiAgICAgICAgICBcIlt5ZF91c11cIixcbiAgICAgICAgICB7IHR5cGU6IFwibGl0ZXJhbFwiLCB2YWx1ZTogXCJbeWRfdXNdXCIsIGRlc2NyaXB0aW9uOiBcIlxcXCJbeWRfdXNdXFxcIlwiIH0sXG4gICAgICAgICAgZnVuY3Rpb24odSkge3JldHVybiB7dmFsdWU6IDEsIHVuaXRzOiB7XCJbeWRfdXNdXCI6IDF9fTt9LFxuICAgICAgICAgIFwiW2xpZ25lXVwiLFxuICAgICAgICAgIHsgdHlwZTogXCJsaXRlcmFsXCIsIHZhbHVlOiBcIltsaWduZV1cIiwgZGVzY3JpcHRpb246IFwiXFxcIltsaWduZV1cXFwiXCIgfSxcbiAgICAgICAgICBmdW5jdGlvbih1KSB7cmV0dXJuIHt2YWx1ZTogMSwgdW5pdHM6IHtcIltsaWduZV1cIjogMX19O30sXG4gICAgICAgICAgXCJbdGJzX21dXCIsXG4gICAgICAgICAgeyB0eXBlOiBcImxpdGVyYWxcIiwgdmFsdWU6IFwiW3Ric19tXVwiLCBkZXNjcmlwdGlvbjogXCJcXFwiW3Ric19tXVxcXCJcIiB9LFxuICAgICAgICAgIGZ1bmN0aW9uKHUpIHtyZXR1cm4ge3ZhbHVlOiAxLCB1bml0czoge1wiW3Ric19tXVwiOiAxfX07fSxcbiAgICAgICAgICBcIltsYl9hcF1cIixcbiAgICAgICAgICB7IHR5cGU6IFwibGl0ZXJhbFwiLCB2YWx1ZTogXCJbbGJfYXBdXCIsIGRlc2NyaXB0aW9uOiBcIlxcXCJbbGJfYXBdXFxcIlwiIH0sXG4gICAgICAgICAgZnVuY3Rpb24odSkge3JldHVybiB7dmFsdWU6IDEsIHVuaXRzOiB7XCJbbGJfYXBdXCI6IDF9fTt9LFxuICAgICAgICAgIFwiW296X2FwXVwiLFxuICAgICAgICAgIHsgdHlwZTogXCJsaXRlcmFsXCIsIHZhbHVlOiBcIltvel9hcF1cIiwgZGVzY3JpcHRpb246IFwiXFxcIltvel9hcF1cXFwiXCIgfSxcbiAgICAgICAgICBmdW5jdGlvbih1KSB7cmV0dXJuIHt2YWx1ZTogMSwgdW5pdHM6IHtcIltvel9hcF1cIjogMX19O30sXG4gICAgICAgICAgXCJbZHJfYXBdXCIsXG4gICAgICAgICAgeyB0eXBlOiBcImxpdGVyYWxcIiwgdmFsdWU6IFwiW2RyX2FwXVwiLCBkZXNjcmlwdGlvbjogXCJcXFwiW2RyX2FwXVxcXCJcIiB9LFxuICAgICAgICAgIGZ1bmN0aW9uKHUpIHtyZXR1cm4ge3ZhbHVlOiAxLCB1bml0czoge1wiW2RyX2FwXVwiOiAxfX07fSxcbiAgICAgICAgICBcIltzY19hcF1cIixcbiAgICAgICAgICB7IHR5cGU6IFwibGl0ZXJhbFwiLCB2YWx1ZTogXCJbc2NfYXBdXCIsIGRlc2NyaXB0aW9uOiBcIlxcXCJbc2NfYXBdXFxcIlwiIH0sXG4gICAgICAgICAgZnVuY3Rpb24odSkge3JldHVybiB7dmFsdWU6IDEsIHVuaXRzOiB7XCJbc2NfYXBdXCI6IDF9fTt9LFxuICAgICAgICAgIFwiW3RzcF9tXVwiLFxuICAgICAgICAgIHsgdHlwZTogXCJsaXRlcmFsXCIsIHZhbHVlOiBcIlt0c3BfbV1cIiwgZGVzY3JpcHRpb246IFwiXFxcIlt0c3BfbV1cXFwiXCIgfSxcbiAgICAgICAgICBmdW5jdGlvbih1KSB7cmV0dXJuIHt2YWx1ZTogMSwgdW5pdHM6IHtcIlt0c3BfbV1cIjogMX19O30sXG4gICAgICAgICAgXCJbY3VwX21dXCIsXG4gICAgICAgICAgeyB0eXBlOiBcImxpdGVyYWxcIiwgdmFsdWU6IFwiW2N1cF9tXVwiLCBkZXNjcmlwdGlvbjogXCJcXFwiW2N1cF9tXVxcXCJcIiB9LFxuICAgICAgICAgIGZ1bmN0aW9uKHUpIHtyZXR1cm4ge3ZhbHVlOiAxLCB1bml0czoge1wiW2N1cF9tXVwiOiAxfX07fSxcbiAgICAgICAgICBcIltsYl90cl1cIixcbiAgICAgICAgICB7IHR5cGU6IFwibGl0ZXJhbFwiLCB2YWx1ZTogXCJbbGJfdHJdXCIsIGRlc2NyaXB0aW9uOiBcIlxcXCJbbGJfdHJdXFxcIlwiIH0sXG4gICAgICAgICAgZnVuY3Rpb24odSkge3JldHVybiB7dmFsdWU6IDEsIHVuaXRzOiB7XCJbbGJfdHJdXCI6IDF9fTt9LFxuICAgICAgICAgIFwiW296X3RyXVwiLFxuICAgICAgICAgIHsgdHlwZTogXCJsaXRlcmFsXCIsIHZhbHVlOiBcIltvel90cl1cIiwgZGVzY3JpcHRpb246IFwiXFxcIltvel90cl1cXFwiXCIgfSxcbiAgICAgICAgICBmdW5jdGlvbih1KSB7cmV0dXJuIHt2YWx1ZTogMSwgdW5pdHM6IHtcIltvel90cl1cIjogMX19O30sXG4gICAgICAgICAgXCJbZGlkb3RdXCIsXG4gICAgICAgICAgeyB0eXBlOiBcImxpdGVyYWxcIiwgdmFsdWU6IFwiW2RpZG90XVwiLCBkZXNjcmlwdGlvbjogXCJcXFwiW2RpZG90XVxcXCJcIiB9LFxuICAgICAgICAgIGZ1bmN0aW9uKHUpIHtyZXR1cm4ge3ZhbHVlOiAxLCB1bml0czoge1wiW2RpZG90XVwiOiAxfX07fSxcbiAgICAgICAgICBcIltmb3pfbV1cIixcbiAgICAgICAgICB7IHR5cGU6IFwibGl0ZXJhbFwiLCB2YWx1ZTogXCJbZm96X21dXCIsIGRlc2NyaXB0aW9uOiBcIlxcXCJbZm96X21dXFxcIlwiIH0sXG4gICAgICAgICAgZnVuY3Rpb24odSkge3JldHVybiB7dmFsdWU6IDEsIHVuaXRzOiB7XCJbZm96X21dXCI6IDF9fTt9LFxuICAgICAgICAgIFwiW2Nhcl9tXVwiLFxuICAgICAgICAgIHsgdHlwZTogXCJsaXRlcmFsXCIsIHZhbHVlOiBcIltjYXJfbV1cIiwgZGVzY3JpcHRpb246IFwiXFxcIltjYXJfbV1cXFwiXCIgfSxcbiAgICAgICAgICBmdW5jdGlvbih1KSB7cmV0dXJuIHt2YWx1ZTogMSwgdW5pdHM6IHtcIltjYXJfbV1cIjogMX19O30sXG4gICAgICAgICAgXCJbc21vb3RdXCIsXG4gICAgICAgICAgeyB0eXBlOiBcImxpdGVyYWxcIiwgdmFsdWU6IFwiW3Ntb290XVwiLCBkZXNjcmlwdGlvbjogXCJcXFwiW3Ntb290XVxcXCJcIiB9LFxuICAgICAgICAgIGZ1bmN0aW9uKHUpIHtyZXR1cm4ge3ZhbHVlOiAxLCB1bml0czoge1wiW3Ntb290XVwiOiAxfX07fSxcbiAgICAgICAgICBcIltrbmsnVV1cIixcbiAgICAgICAgICB7IHR5cGU6IFwibGl0ZXJhbFwiLCB2YWx1ZTogXCJba25rJ1VdXCIsIGRlc2NyaXB0aW9uOiBcIlxcXCJba25rJ1VdXFxcIlwiIH0sXG4gICAgICAgICAgZnVuY3Rpb24odSkge3JldHVybiB7dmFsdWU6IDEsIHVuaXRzOiB7XCJba25rJ1VdXCI6IDF9fTt9LFxuICAgICAgICAgIFwiW0J0dV9tXVwiLFxuICAgICAgICAgIHsgdHlwZTogXCJsaXRlcmFsXCIsIHZhbHVlOiBcIltCdHVfbV1cIiwgZGVzY3JpcHRpb246IFwiXFxcIltCdHVfbV1cXFwiXCIgfSxcbiAgICAgICAgICBmdW5jdGlvbih1KSB7cmV0dXJuIHt2YWx1ZTogMSwgdW5pdHM6IHtcIltCdHVfbV1cIjogMX19O30sXG4gICAgICAgICAgXCJbZHJfYXZdXCIsXG4gICAgICAgICAgeyB0eXBlOiBcImxpdGVyYWxcIiwgdmFsdWU6IFwiW2RyX2F2XVwiLCBkZXNjcmlwdGlvbjogXCJcXFwiW2RyX2F2XVxcXCJcIiB9LFxuICAgICAgICAgIGZ1bmN0aW9uKHUpIHtyZXR1cm4ge3ZhbHVlOiAxLCB1bml0czoge1wiW2RyX2F2XVwiOiAxfX07fSxcbiAgICAgICAgICBcIltvel9hdl1cIixcbiAgICAgICAgICB7IHR5cGU6IFwibGl0ZXJhbFwiLCB2YWx1ZTogXCJbb3pfYXZdXCIsIGRlc2NyaXB0aW9uOiBcIlxcXCJbb3pfYXZdXFxcIlwiIH0sXG4gICAgICAgICAgZnVuY3Rpb24odSkge3JldHVybiB7dmFsdWU6IDEsIHVuaXRzOiB7XCJbb3pfYXZdXCI6IDF9fTt9LFxuICAgICAgICAgIFwiW2xiX2F2XVwiLFxuICAgICAgICAgIHsgdHlwZTogXCJsaXRlcmFsXCIsIHZhbHVlOiBcIltsYl9hdl1cIiwgZGVzY3JpcHRpb246IFwiXFxcIltsYl9hdl1cXFwiXCIgfSxcbiAgICAgICAgICBmdW5jdGlvbih1KSB7cmV0dXJuIHt2YWx1ZTogMSwgdW5pdHM6IHtcIltsYl9hdl1cIjogMX19O30sXG4gICAgICAgICAgXCJbZHllJ1VdXCIsXG4gICAgICAgICAgeyB0eXBlOiBcImxpdGVyYWxcIiwgdmFsdWU6IFwiW2R5ZSdVXVwiLCBkZXNjcmlwdGlvbjogXCJcXFwiW2R5ZSdVXVxcXCJcIiB9LFxuICAgICAgICAgIGZ1bmN0aW9uKHUpIHtyZXR1cm4ge3ZhbHVlOiAxLCB1bml0czoge1wiW2R5ZSdVXVwiOiAxfX07fSxcbiAgICAgICAgICBcIltwa191c11cIixcbiAgICAgICAgICB7IHR5cGU6IFwibGl0ZXJhbFwiLCB2YWx1ZTogXCJbcGtfdXNdXCIsIGRlc2NyaXB0aW9uOiBcIlxcXCJbcGtfdXNdXFxcIlwiIH0sXG4gICAgICAgICAgZnVuY3Rpb24odSkge3JldHVybiB7dmFsdWU6IDEsIHVuaXRzOiB7XCJbcGtfdXNdXCI6IDF9fTt9LFxuICAgICAgICAgIFwiW0FQTCdVXVwiLFxuICAgICAgICAgIHsgdHlwZTogXCJsaXRlcmFsXCIsIHZhbHVlOiBcIltBUEwnVV1cIiwgZGVzY3JpcHRpb246IFwiXFxcIltBUEwnVV1cXFwiXCIgfSxcbiAgICAgICAgICBmdW5jdGlvbih1KSB7cmV0dXJuIHt2YWx1ZTogMSwgdW5pdHM6IHtcIltBUEwnVV1cIjogMX19O30sXG4gICAgICAgICAgXCJbYnVfdXNdXCIsXG4gICAgICAgICAgeyB0eXBlOiBcImxpdGVyYWxcIiwgdmFsdWU6IFwiW2J1X3VzXVwiLCBkZXNjcmlwdGlvbjogXCJcXFwiW2J1X3VzXVxcXCJcIiB9LFxuICAgICAgICAgIGZ1bmN0aW9uKHUpIHtyZXR1cm4ge3ZhbHVlOiAxLCB1bml0czoge1wiW2J1X3VzXVwiOiAxfX07fSxcbiAgICAgICAgICBcIltwdF9icl1cIixcbiAgICAgICAgICB7IHR5cGU6IFwibGl0ZXJhbFwiLCB2YWx1ZTogXCJbcHRfYnJdXCIsIGRlc2NyaXB0aW9uOiBcIlxcXCJbcHRfYnJdXFxcIlwiIH0sXG4gICAgICAgICAgZnVuY3Rpb24odSkge3JldHVybiB7dmFsdWU6IDEsIHVuaXRzOiB7XCJbcHRfYnJdXCI6IDF9fTt9LFxuICAgICAgICAgIFwiW3F0X2JyXVwiLFxuICAgICAgICAgIHsgdHlwZTogXCJsaXRlcmFsXCIsIHZhbHVlOiBcIltxdF9icl1cIiwgZGVzY3JpcHRpb246IFwiXFxcIltxdF9icl1cXFwiXCIgfSxcbiAgICAgICAgICBmdW5jdGlvbih1KSB7cmV0dXJuIHt2YWx1ZTogMSwgdW5pdHM6IHtcIltxdF9icl1cIjogMX19O30sXG4gICAgICAgICAgXCJbYnVfYnJdXCIsXG4gICAgICAgICAgeyB0eXBlOiBcImxpdGVyYWxcIiwgdmFsdWU6IFwiW2J1X2JyXVwiLCBkZXNjcmlwdGlvbjogXCJcXFwiW2J1X2JyXVxcXCJcIiB9LFxuICAgICAgICAgIGZ1bmN0aW9uKHUpIHtyZXR1cm4ge3ZhbHVlOiAxLCB1bml0czoge1wiW2J1X2JyXVwiOiAxfX07fSxcbiAgICAgICAgICBcIltocCdfWF1cIixcbiAgICAgICAgICB7IHR5cGU6IFwibGl0ZXJhbFwiLCB2YWx1ZTogXCJbaHAnX1hdXCIsIGRlc2NyaXB0aW9uOiBcIlxcXCJbaHAnX1hdXFxcIlwiIH0sXG4gICAgICAgICAgZnVuY3Rpb24odSkge3JldHVybiB7dmFsdWU6IDEsIHVuaXRzOiB7XCJbaHAnX1hdXCI6IDF9fTt9LFxuICAgICAgICAgIFwiW01QTCdVXVwiLFxuICAgICAgICAgIHsgdHlwZTogXCJsaXRlcmFsXCIsIHZhbHVlOiBcIltNUEwnVV1cIiwgZGVzY3JpcHRpb246IFwiXFxcIltNUEwnVV1cXFwiXCIgfSxcbiAgICAgICAgICBmdW5jdGlvbih1KSB7cmV0dXJuIHt2YWx1ZTogMSwgdW5pdHM6IHtcIltNUEwnVV1cIjogMX19O30sXG4gICAgICAgICAgXCJbR1BMJ1VdXCIsXG4gICAgICAgICAgeyB0eXBlOiBcImxpdGVyYWxcIiwgdmFsdWU6IFwiW0dQTCdVXVwiLCBkZXNjcmlwdGlvbjogXCJcXFwiW0dQTCdVXVxcXCJcIiB9LFxuICAgICAgICAgIGZ1bmN0aW9uKHUpIHtyZXR1cm4ge3ZhbHVlOiAxLCB1bml0czoge1wiW0dQTCdVXVwiOiAxfX07fSxcbiAgICAgICAgICBcIltVU1AnVV1cIixcbiAgICAgICAgICB7IHR5cGU6IFwibGl0ZXJhbFwiLCB2YWx1ZTogXCJbVVNQJ1VdXCIsIGRlc2NyaXB0aW9uOiBcIlxcXCJbVVNQJ1VdXFxcIlwiIH0sXG4gICAgICAgICAgZnVuY3Rpb24odSkge3JldHVybiB7dmFsdWU6IDEsIHVuaXRzOiB7XCJbVVNQJ1VdXCI6IDF9fTt9LFxuICAgICAgICAgIFwiW2Vwc18wXVwiLFxuICAgICAgICAgIHsgdHlwZTogXCJsaXRlcmFsXCIsIHZhbHVlOiBcIltlcHNfMF1cIiwgZGVzY3JpcHRpb246IFwiXFxcIltlcHNfMF1cXFwiXCIgfSxcbiAgICAgICAgICBmdW5jdGlvbih1KSB7cmV0dXJuIHt2YWx1ZTogMSwgdW5pdHM6IHtcIltlcHNfMF1cIjogMX19O30sXG4gICAgICAgICAgXCJbZnRoX2ldXCIsXG4gICAgICAgICAgeyB0eXBlOiBcImxpdGVyYWxcIiwgdmFsdWU6IFwiW2Z0aF9pXVwiLCBkZXNjcmlwdGlvbjogXCJcXFwiW2Z0aF9pXVxcXCJcIiB9LFxuICAgICAgICAgIGZ1bmN0aW9uKHUpIHtyZXR1cm4ge3ZhbHVlOiAxLCB1bml0czoge1wiW2Z0aF9pXVwiOiAxfX07fSxcbiAgICAgICAgICBcIltubWlfaV1cIixcbiAgICAgICAgICB7IHR5cGU6IFwibGl0ZXJhbFwiLCB2YWx1ZTogXCJbbm1pX2ldXCIsIGRlc2NyaXB0aW9uOiBcIlxcXCJbbm1pX2ldXFxcIlwiIH0sXG4gICAgICAgICAgZnVuY3Rpb24odSkge3JldHVybiB7dmFsdWU6IDEsIHVuaXRzOiB7XCJbbm1pX2ldXCI6IDF9fTt9LFxuICAgICAgICAgIFwiW3B0X3VzXVwiLFxuICAgICAgICAgIHsgdHlwZTogXCJsaXRlcmFsXCIsIHZhbHVlOiBcIltwdF91c11cIiwgZGVzY3JpcHRpb246IFwiXFxcIltwdF91c11cXFwiXCIgfSxcbiAgICAgICAgICBmdW5jdGlvbih1KSB7cmV0dXJuIHt2YWx1ZTogMSwgdW5pdHM6IHtcIltwdF91c11cIjogMX19O30sXG4gICAgICAgICAgXCJbc2luX2ldXCIsXG4gICAgICAgICAgeyB0eXBlOiBcImxpdGVyYWxcIiwgdmFsdWU6IFwiW3Npbl9pXVwiLCBkZXNjcmlwdGlvbjogXCJcXFwiW3Npbl9pXVxcXCJcIiB9LFxuICAgICAgICAgIGZ1bmN0aW9uKHUpIHtyZXR1cm4ge3ZhbHVlOiAxLCB1bml0czoge1wiW3Npbl9pXVwiOiAxfX07fSxcbiAgICAgICAgICBcIltzZnRfaV1cIixcbiAgICAgICAgICB7IHR5cGU6IFwibGl0ZXJhbFwiLCB2YWx1ZTogXCJbc2Z0X2ldXCIsIGRlc2NyaXB0aW9uOiBcIlxcXCJbc2Z0X2ldXFxcIlwiIH0sXG4gICAgICAgICAgZnVuY3Rpb24odSkge3JldHVybiB7dmFsdWU6IDEsIHVuaXRzOiB7XCJbc2Z0X2ldXCI6IDF9fTt9LFxuICAgICAgICAgIFwiW3N5ZF9pXVwiLFxuICAgICAgICAgIHsgdHlwZTogXCJsaXRlcmFsXCIsIHZhbHVlOiBcIltzeWRfaV1cIiwgZGVzY3JpcHRpb246IFwiXFxcIltzeWRfaV1cXFwiXCIgfSxcbiAgICAgICAgICBmdW5jdGlvbih1KSB7cmV0dXJuIHt2YWx1ZTogMSwgdW5pdHM6IHtcIltzeWRfaV1cIjogMX19O30sXG4gICAgICAgICAgXCJbY2luX2ldXCIsXG4gICAgICAgICAgeyB0eXBlOiBcImxpdGVyYWxcIiwgdmFsdWU6IFwiW2Npbl9pXVwiLCBkZXNjcmlwdGlvbjogXCJcXFwiW2Npbl9pXVxcXCJcIiB9LFxuICAgICAgICAgIGZ1bmN0aW9uKHUpIHtyZXR1cm4ge3ZhbHVlOiAxLCB1bml0czoge1wiW2Npbl9pXVwiOiAxfX07fSxcbiAgICAgICAgICBcIltjZnRfaV1cIixcbiAgICAgICAgICB7IHR5cGU6IFwibGl0ZXJhbFwiLCB2YWx1ZTogXCJbY2Z0X2ldXCIsIGRlc2NyaXB0aW9uOiBcIlxcXCJbY2Z0X2ldXFxcIlwiIH0sXG4gICAgICAgICAgZnVuY3Rpb24odSkge3JldHVybiB7dmFsdWU6IDEsIHVuaXRzOiB7XCJbY2Z0X2ldXCI6IDF9fTt9LFxuICAgICAgICAgIFwiW2N5ZF9pXVwiLFxuICAgICAgICAgIHsgdHlwZTogXCJsaXRlcmFsXCIsIHZhbHVlOiBcIltjeWRfaV1cIiwgZGVzY3JpcHRpb246IFwiXFxcIltjeWRfaV1cXFwiXCIgfSxcbiAgICAgICAgICBmdW5jdGlvbih1KSB7cmV0dXJuIHt2YWx1ZTogMSwgdW5pdHM6IHtcIltjeWRfaV1cIjogMX19O30sXG4gICAgICAgICAgXCJbcXRfdXNdXCIsXG4gICAgICAgICAgeyB0eXBlOiBcImxpdGVyYWxcIiwgdmFsdWU6IFwiW3F0X3VzXVwiLCBkZXNjcmlwdGlvbjogXCJcXFwiW3F0X3VzXVxcXCJcIiB9LFxuICAgICAgICAgIGZ1bmN0aW9uKHUpIHtyZXR1cm4ge3ZhbHVlOiAxLCB1bml0czoge1wiW3F0X3VzXVwiOiAxfX07fSxcbiAgICAgICAgICBcIlthcmInVV1cIixcbiAgICAgICAgICB7IHR5cGU6IFwibGl0ZXJhbFwiLCB2YWx1ZTogXCJbYXJiJ1VdXCIsIGRlc2NyaXB0aW9uOiBcIlxcXCJbYXJiJ1VdXFxcIlwiIH0sXG4gICAgICAgICAgZnVuY3Rpb24odSkge3JldHVybiB7dmFsdWU6IDEsIHVuaXRzOiB7XCJbYXJiJ1VdXCI6IDF9fTt9LFxuICAgICAgICAgIFwiW21pbF9pXVwiLFxuICAgICAgICAgIHsgdHlwZTogXCJsaXRlcmFsXCIsIHZhbHVlOiBcIlttaWxfaV1cIiwgZGVzY3JpcHRpb246IFwiXFxcIlttaWxfaV1cXFwiXCIgfSxcbiAgICAgICAgICBmdW5jdGlvbih1KSB7cmV0dXJuIHt2YWx1ZTogMSwgdW5pdHM6IHtcIlttaWxfaV1cIjogMX19O30sXG4gICAgICAgICAgXCJbY21sX2ldXCIsXG4gICAgICAgICAgeyB0eXBlOiBcImxpdGVyYWxcIiwgdmFsdWU6IFwiW2NtbF9pXVwiLCBkZXNjcmlwdGlvbjogXCJcXFwiW2NtbF9pXVxcXCJcIiB9LFxuICAgICAgICAgIGZ1bmN0aW9uKHUpIHtyZXR1cm4ge3ZhbHVlOiAxLCB1bml0czoge1wiW2NtbF9pXVwiOiAxfX07fSxcbiAgICAgICAgICBcIltrbl9icl1cIixcbiAgICAgICAgICB7IHR5cGU6IFwibGl0ZXJhbFwiLCB2YWx1ZTogXCJba25fYnJdXCIsIGRlc2NyaXB0aW9uOiBcIlxcXCJba25fYnJdXFxcIlwiIH0sXG4gICAgICAgICAgZnVuY3Rpb24odSkge3JldHVybiB7dmFsdWU6IDEsIHVuaXRzOiB7XCJba25fYnJdXCI6IDF9fTt9LFxuICAgICAgICAgIFwiW2Z0X3VzXVwiLFxuICAgICAgICAgIHsgdHlwZTogXCJsaXRlcmFsXCIsIHZhbHVlOiBcIltmdF91c11cIiwgZGVzY3JpcHRpb246IFwiXFxcIltmdF91c11cXFwiXCIgfSxcbiAgICAgICAgICBmdW5jdGlvbih1KSB7cmV0dXJuIHt2YWx1ZTogMSwgdW5pdHM6IHtcIltmdF91c11cIjogMX19O30sXG4gICAgICAgICAgXCJbcG91Y2VdXCIsXG4gICAgICAgICAgeyB0eXBlOiBcImxpdGVyYWxcIiwgdmFsdWU6IFwiW3BvdWNlXVwiLCBkZXNjcmlwdGlvbjogXCJcXFwiW3BvdWNlXVxcXCJcIiB9LFxuICAgICAgICAgIGZ1bmN0aW9uKHUpIHtyZXR1cm4ge3ZhbHVlOiAxLCB1bml0czoge1wiW3BvdWNlXVwiOiAxfX07fSxcbiAgICAgICAgICBcIltpbl91c11cIixcbiAgICAgICAgICB7IHR5cGU6IFwibGl0ZXJhbFwiLCB2YWx1ZTogXCJbaW5fdXNdXCIsIGRlc2NyaXB0aW9uOiBcIlxcXCJbaW5fdXNdXFxcIlwiIH0sXG4gICAgICAgICAgZnVuY3Rpb24odSkge3JldHVybiB7dmFsdWU6IDEsIHVuaXRzOiB7XCJbaW5fdXNdXCI6IDF9fTt9LFxuICAgICAgICAgIFwiW3JkX3VzXVwiLFxuICAgICAgICAgIHsgdHlwZTogXCJsaXRlcmFsXCIsIHZhbHVlOiBcIltyZF91c11cIiwgZGVzY3JpcHRpb246IFwiXFxcIltyZF91c11cXFwiXCIgfSxcbiAgICAgICAgICBmdW5jdGlvbih1KSB7cmV0dXJuIHt2YWx1ZTogMSwgdW5pdHM6IHtcIltyZF91c11cIjogMX19O30sXG4gICAgICAgICAgXCJbY2hfdXNdXCIsXG4gICAgICAgICAgeyB0eXBlOiBcImxpdGVyYWxcIiwgdmFsdWU6IFwiW2NoX3VzXVwiLCBkZXNjcmlwdGlvbjogXCJcXFwiW2NoX3VzXVxcXCJcIiB9LFxuICAgICAgICAgIGZ1bmN0aW9uKHUpIHtyZXR1cm4ge3ZhbHVlOiAxLCB1bml0czoge1wiW2NoX3VzXVwiOiAxfX07fSxcbiAgICAgICAgICBcIltsa191c11cIixcbiAgICAgICAgICB7IHR5cGU6IFwibGl0ZXJhbFwiLCB2YWx1ZTogXCJbbGtfdXNdXCIsIGRlc2NyaXB0aW9uOiBcIlxcXCJbbGtfdXNdXFxcIlwiIH0sXG4gICAgICAgICAgZnVuY3Rpb24odSkge3JldHVybiB7dmFsdWU6IDEsIHVuaXRzOiB7XCJbbGtfdXNdXCI6IDF9fTt9LFxuICAgICAgICAgIFwiW2hwJ19DXVwiLFxuICAgICAgICAgIHsgdHlwZTogXCJsaXRlcmFsXCIsIHZhbHVlOiBcIltocCdfQ11cIiwgZGVzY3JpcHRpb246IFwiXFxcIltocCdfQ11cXFwiXCIgfSxcbiAgICAgICAgICBmdW5jdGlvbih1KSB7cmV0dXJuIHt2YWx1ZTogMSwgdW5pdHM6IHtcIltocCdfQ11cIjogMX19O30sXG4gICAgICAgICAgXCJbaHAnX01dXCIsXG4gICAgICAgICAgeyB0eXBlOiBcImxpdGVyYWxcIiwgdmFsdWU6IFwiW2hwJ19NXVwiLCBkZXNjcmlwdGlvbjogXCJcXFwiW2hwJ19NXVxcXCJcIiB9LFxuICAgICAgICAgIGZ1bmN0aW9uKHUpIHtyZXR1cm4ge3ZhbHVlOiAxLCB1bml0czoge1wiW2hwJ19NXVwiOiAxfX07fSxcbiAgICAgICAgICBcIltocCdfUV1cIixcbiAgICAgICAgICB7IHR5cGU6IFwibGl0ZXJhbFwiLCB2YWx1ZTogXCJbaHAnX1FdXCIsIGRlc2NyaXB0aW9uOiBcIlxcXCJbaHAnX1FdXFxcIlwiIH0sXG4gICAgICAgICAgZnVuY3Rpb24odSkge3JldHVybiB7dmFsdWU6IDEsIHVuaXRzOiB7XCJbaHAnX1FdXCI6IDF9fTt9LFxuICAgICAgICAgIFwiW21pX2JyXVwiLFxuICAgICAgICAgIHsgdHlwZTogXCJsaXRlcmFsXCIsIHZhbHVlOiBcIlttaV9icl1cIiwgZGVzY3JpcHRpb246IFwiXFxcIlttaV9icl1cXFwiXCIgfSxcbiAgICAgICAgICBmdW5jdGlvbih1KSB7cmV0dXJuIHt2YWx1ZTogMSwgdW5pdHM6IHtcIlttaV9icl1cIjogMX19O30sXG4gICAgICAgICAgXCJbbWlfdXNdXCIsXG4gICAgICAgICAgeyB0eXBlOiBcImxpdGVyYWxcIiwgdmFsdWU6IFwiW21pX3VzXVwiLCBkZXNjcmlwdGlvbjogXCJcXFwiW21pX3VzXVxcXCJcIiB9LFxuICAgICAgICAgIGZ1bmN0aW9uKHUpIHtyZXR1cm4ge3ZhbHVlOiAxLCB1bml0czoge1wiW21pX3VzXVwiOiAxfX07fSxcbiAgICAgICAgICBcIlt5ZF9icl1cIixcbiAgICAgICAgICB7IHR5cGU6IFwibGl0ZXJhbFwiLCB2YWx1ZTogXCJbeWRfYnJdXCIsIGRlc2NyaXB0aW9uOiBcIlxcXCJbeWRfYnJdXFxcIlwiIH0sXG4gICAgICAgICAgZnVuY3Rpb24odSkge3JldHVybiB7dmFsdWU6IDEsIHVuaXRzOiB7XCJbeWRfYnJdXCI6IDF9fTt9LFxuICAgICAgICAgIFwiW3BrX2JyXVwiLFxuICAgICAgICAgIHsgdHlwZTogXCJsaXRlcmFsXCIsIHZhbHVlOiBcIltwa19icl1cIiwgZGVzY3JpcHRpb246IFwiXFxcIltwa19icl1cXFwiXCIgfSxcbiAgICAgICAgICBmdW5jdGlvbih1KSB7cmV0dXJuIHt2YWx1ZTogMSwgdW5pdHM6IHtcIltwa19icl1cIjogMX19O30sXG4gICAgICAgICAgXCJbcGNfYnJdXCIsXG4gICAgICAgICAgeyB0eXBlOiBcImxpdGVyYWxcIiwgdmFsdWU6IFwiW3BjX2JyXVwiLCBkZXNjcmlwdGlvbjogXCJcXFwiW3BjX2JyXVxcXCJcIiB9LFxuICAgICAgICAgIGZ1bmN0aW9uKHUpIHtyZXR1cm4ge3ZhbHVlOiAxLCB1bml0czoge1wiW3BjX2JyXVwiOiAxfX07fSxcbiAgICAgICAgICBcIltsa19icl1cIixcbiAgICAgICAgICB7IHR5cGU6IFwibGl0ZXJhbFwiLCB2YWx1ZTogXCJbbGtfYnJdXCIsIGRlc2NyaXB0aW9uOiBcIlxcXCJbbGtfYnJdXFxcIlwiIH0sXG4gICAgICAgICAgZnVuY3Rpb24odSkge3JldHVybiB7dmFsdWU6IDEsIHVuaXRzOiB7XCJbbGtfYnJdXCI6IDF9fTt9LFxuICAgICAgICAgIFwiW2luX2JyXVwiLFxuICAgICAgICAgIHsgdHlwZTogXCJsaXRlcmFsXCIsIHZhbHVlOiBcIltpbl9icl1cIiwgZGVzY3JpcHRpb246IFwiXFxcIltpbl9icl1cXFwiXCIgfSxcbiAgICAgICAgICBmdW5jdGlvbih1KSB7cmV0dXJuIHt2YWx1ZTogMSwgdW5pdHM6IHtcIltpbl9icl1cIjogMX19O30sXG4gICAgICAgICAgXCJbZnRfYnJdXCIsXG4gICAgICAgICAgeyB0eXBlOiBcImxpdGVyYWxcIiwgdmFsdWU6IFwiW2Z0X2JyXVwiLCBkZXNjcmlwdGlvbjogXCJcXFwiW2Z0X2JyXVxcXCJcIiB9LFxuICAgICAgICAgIGZ1bmN0aW9uKHUpIHtyZXR1cm4ge3ZhbHVlOiAxLCB1bml0czoge1wiW2Z0X2JyXVwiOiAxfX07fSxcbiAgICAgICAgICBcIltyZF9icl1cIixcbiAgICAgICAgICB7IHR5cGU6IFwibGl0ZXJhbFwiLCB2YWx1ZTogXCJbcmRfYnJdXCIsIGRlc2NyaXB0aW9uOiBcIlxcXCJbcmRfYnJdXFxcIlwiIH0sXG4gICAgICAgICAgZnVuY3Rpb24odSkge3JldHVybiB7dmFsdWU6IDEsIHVuaXRzOiB7XCJbcmRfYnJdXCI6IDF9fTt9LFxuICAgICAgICAgIFwiW2NoX2JyXVwiLFxuICAgICAgICAgIHsgdHlwZTogXCJsaXRlcmFsXCIsIHZhbHVlOiBcIltjaF9icl1cIiwgZGVzY3JpcHRpb246IFwiXFxcIltjaF9icl1cXFwiXCIgfSxcbiAgICAgICAgICBmdW5jdGlvbih1KSB7cmV0dXJuIHt2YWx1ZTogMSwgdW5pdHM6IHtcIltjaF9icl1cIjogMX19O30sXG4gICAgICAgICAgXCJbZnRfaV1cIixcbiAgICAgICAgICB7IHR5cGU6IFwibGl0ZXJhbFwiLCB2YWx1ZTogXCJbZnRfaV1cIiwgZGVzY3JpcHRpb246IFwiXFxcIltmdF9pXVxcXCJcIiB9LFxuICAgICAgICAgIGZ1bmN0aW9uKHUpIHtyZXR1cm4ge3ZhbHVlOiAxLCB1bml0czoge1wiW2Z0X2ldXCI6IDF9fTt9LFxuICAgICAgICAgIFwiW2hwX1FdXCIsXG4gICAgICAgICAgeyB0eXBlOiBcImxpdGVyYWxcIiwgdmFsdWU6IFwiW2hwX1FdXCIsIGRlc2NyaXB0aW9uOiBcIlxcXCJbaHBfUV1cXFwiXCIgfSxcbiAgICAgICAgICBmdW5jdGlvbih1KSB7cmV0dXJuIHt2YWx1ZTogMSwgdW5pdHM6IHtcIltocF9RXVwiOiAxfX07fSxcbiAgICAgICAgICBcIltocF9NXVwiLFxuICAgICAgICAgIHsgdHlwZTogXCJsaXRlcmFsXCIsIHZhbHVlOiBcIltocF9NXVwiLCBkZXNjcmlwdGlvbjogXCJcXFwiW2hwX01dXFxcIlwiIH0sXG4gICAgICAgICAgZnVuY3Rpb24odSkge3JldHVybiB7dmFsdWU6IDEsIHVuaXRzOiB7XCJbaHBfTV1cIjogMX19O30sXG4gICAgICAgICAgXCJbaHBfQ11cIixcbiAgICAgICAgICB7IHR5cGU6IFwibGl0ZXJhbFwiLCB2YWx1ZTogXCJbaHBfQ11cIiwgZGVzY3JpcHRpb246IFwiXFxcIltocF9DXVxcXCJcIiB9LFxuICAgICAgICAgIGZ1bmN0aW9uKHUpIHtyZXR1cm4ge3ZhbHVlOiAxLCB1bml0czoge1wiW2hwX0NdXCI6IDF9fTt9LFxuICAgICAgICAgIFwiW2hwX1hdXCIsXG4gICAgICAgICAgeyB0eXBlOiBcImxpdGVyYWxcIiwgdmFsdWU6IFwiW2hwX1hdXCIsIGRlc2NyaXB0aW9uOiBcIlxcXCJbaHBfWF1cXFwiXCIgfSxcbiAgICAgICAgICBmdW5jdGlvbih1KSB7cmV0dXJuIHt2YWx1ZTogMSwgdW5pdHM6IHtcIltocF9YXVwiOiAxfX07fSxcbiAgICAgICAgICBcIltrcF9DXVwiLFxuICAgICAgICAgIHsgdHlwZTogXCJsaXRlcmFsXCIsIHZhbHVlOiBcIltrcF9DXVwiLCBkZXNjcmlwdGlvbjogXCJcXFwiW2twX0NdXFxcIlwiIH0sXG4gICAgICAgICAgZnVuY3Rpb24odSkge3JldHVybiB7dmFsdWU6IDEsIHVuaXRzOiB7XCJba3BfQ11cIjogMX19O30sXG4gICAgICAgICAgXCJbaGRfaV1cIixcbiAgICAgICAgICB7IHR5cGU6IFwibGl0ZXJhbFwiLCB2YWx1ZTogXCJbaGRfaV1cIiwgZGVzY3JpcHRpb246IFwiXFxcIltoZF9pXVxcXCJcIiB9LFxuICAgICAgICAgIGZ1bmN0aW9uKHUpIHtyZXR1cm4ge3ZhbHVlOiAxLCB1bml0czoge1wiW2hkX2ldXCI6IDF9fTt9LFxuICAgICAgICAgIFwiW2twX01dXCIsXG4gICAgICAgICAgeyB0eXBlOiBcImxpdGVyYWxcIiwgdmFsdWU6IFwiW2twX01dXCIsIGRlc2NyaXB0aW9uOiBcIlxcXCJba3BfTV1cXFwiXCIgfSxcbiAgICAgICAgICBmdW5jdGlvbih1KSB7cmV0dXJuIHt2YWx1ZTogMSwgdW5pdHM6IHtcIltrcF9NXVwiOiAxfX07fSxcbiAgICAgICAgICBcIltrcF9RXVwiLFxuICAgICAgICAgIHsgdHlwZTogXCJsaXRlcmFsXCIsIHZhbHVlOiBcIltrcF9RXVwiLCBkZXNjcmlwdGlvbjogXCJcXFwiW2twX1FdXFxcIlwiIH0sXG4gICAgICAgICAgZnVuY3Rpb24odSkge3JldHVybiB7dmFsdWU6IDEsIHVuaXRzOiB7XCJba3BfUV1cIjogMX19O30sXG4gICAgICAgICAgXCJbY3JfaV1cIixcbiAgICAgICAgICB7IHR5cGU6IFwibGl0ZXJhbFwiLCB2YWx1ZTogXCJbY3JfaV1cIiwgZGVzY3JpcHRpb246IFwiXFxcIltjcl9pXVxcXCJcIiB9LFxuICAgICAgICAgIGZ1bmN0aW9uKHUpIHtyZXR1cm4ge3ZhbHVlOiAxLCB1bml0czoge1wiW2NyX2ldXCI6IDF9fTt9LFxuICAgICAgICAgIFwiW2JmX2ldXCIsXG4gICAgICAgICAgeyB0eXBlOiBcImxpdGVyYWxcIiwgdmFsdWU6IFwiW2JmX2ldXCIsIGRlc2NyaXB0aW9uOiBcIlxcXCJbYmZfaV1cXFwiXCIgfSxcbiAgICAgICAgICBmdW5jdGlvbih1KSB7cmV0dXJuIHt2YWx1ZTogMSwgdW5pdHM6IHtcIltiZl9pXVwiOiAxfX07fSxcbiAgICAgICAgICBcIltrbl9pXVwiLFxuICAgICAgICAgIHsgdHlwZTogXCJsaXRlcmFsXCIsIHZhbHVlOiBcIltrbl9pXVwiLCBkZXNjcmlwdGlvbjogXCJcXFwiW2tuX2ldXFxcIlwiIH0sXG4gICAgICAgICAgZnVuY3Rpb24odSkge3JldHVybiB7dmFsdWU6IDEsIHVuaXRzOiB7XCJba25faV1cIjogMX19O30sXG4gICAgICAgICAgXCJbbXVfMF1cIixcbiAgICAgICAgICB7IHR5cGU6IFwibGl0ZXJhbFwiLCB2YWx1ZTogXCJbbXVfMF1cIiwgZGVzY3JpcHRpb246IFwiXFxcIlttdV8wXVxcXCJcIiB9LFxuICAgICAgICAgIGZ1bmN0aW9uKHUpIHtyZXR1cm4ge3ZhbHVlOiAxLCB1bml0czoge1wiW211XzBdXCI6IDF9fTt9LFxuICAgICAgICAgIFwiW21pX2ldXCIsXG4gICAgICAgICAgeyB0eXBlOiBcImxpdGVyYWxcIiwgdmFsdWU6IFwiW21pX2ldXCIsIGRlc2NyaXB0aW9uOiBcIlxcXCJbbWlfaV1cXFwiXCIgfSxcbiAgICAgICAgICBmdW5jdGlvbih1KSB7cmV0dXJuIHt2YWx1ZTogMSwgdW5pdHM6IHtcIlttaV9pXVwiOiAxfX07fSxcbiAgICAgICAgICBcIlt5ZF9pXVwiLFxuICAgICAgICAgIHsgdHlwZTogXCJsaXRlcmFsXCIsIHZhbHVlOiBcIlt5ZF9pXVwiLCBkZXNjcmlwdGlvbjogXCJcXFwiW3lkX2ldXFxcIlwiIH0sXG4gICAgICAgICAgZnVuY3Rpb24odSkge3JldHVybiB7dmFsdWU6IDEsIHVuaXRzOiB7XCJbeWRfaV1cIjogMX19O30sXG4gICAgICAgICAgXCJba3BfWF1cIixcbiAgICAgICAgICB7IHR5cGU6IFwibGl0ZXJhbFwiLCB2YWx1ZTogXCJba3BfWF1cIiwgZGVzY3JpcHRpb246IFwiXFxcIltrcF9YXVxcXCJcIiB9LFxuICAgICAgICAgIGZ1bmN0aW9uKHUpIHtyZXR1cm4ge3ZhbHVlOiAxLCB1bml0czoge1wiW2twX1hdXCI6IDF9fTt9LFxuICAgICAgICAgIFwiW2luX2ldXCIsXG4gICAgICAgICAgeyB0eXBlOiBcImxpdGVyYWxcIiwgdmFsdWU6IFwiW2luX2ldXCIsIGRlc2NyaXB0aW9uOiBcIlxcXCJbaW5faV1cXFwiXCIgfSxcbiAgICAgICAgICBmdW5jdGlvbih1KSB7cmV0dXJuIHt2YWx1ZTogMSwgdW5pdHM6IHtcIltpbl9pXVwiOiAxfX07fSxcbiAgICAgICAgICBcIltkaW9wXVwiLFxuICAgICAgICAgIHsgdHlwZTogXCJsaXRlcmFsXCIsIHZhbHVlOiBcIltkaW9wXVwiLCBkZXNjcmlwdGlvbjogXCJcXFwiW2Rpb3BdXFxcIlwiIH0sXG4gICAgICAgICAgZnVuY3Rpb24odSkge3JldHVybiB7dmFsdWU6IDEsIHVuaXRzOiB7XCJbZGlvcF1cIjogMX19O30sXG4gICAgICAgICAgXCJjYWxfSVRcIixcbiAgICAgICAgICB7IHR5cGU6IFwibGl0ZXJhbFwiLCB2YWx1ZTogXCJjYWxfSVRcIiwgZGVzY3JpcHRpb246IFwiXFxcImNhbF9JVFxcXCJcIiB9LFxuICAgICAgICAgIGZ1bmN0aW9uKHUpIHtyZXR1cm4ge3ZhbHVlOiAxLCB1bml0czoge1wiY2FsX0lUXCI6IDF9fTt9LFxuICAgICAgICAgIFwiY2FsX3RoXCIsXG4gICAgICAgICAgeyB0eXBlOiBcImxpdGVyYWxcIiwgdmFsdWU6IFwiY2FsX3RoXCIsIGRlc2NyaXB0aW9uOiBcIlxcXCJjYWxfdGhcXFwiXCIgfSxcbiAgICAgICAgICBmdW5jdGlvbih1KSB7cmV0dXJuIHt2YWx1ZTogMSwgdW5pdHM6IHtcImNhbF90aFwiOiAxfX07fSxcbiAgICAgICAgICBcIm1bSDJPXVwiLFxuICAgICAgICAgIHsgdHlwZTogXCJsaXRlcmFsXCIsIHZhbHVlOiBcIm1bSDJPXVwiLCBkZXNjcmlwdGlvbjogXCJcXFwibVtIMk9dXFxcIlwiIH0sXG4gICAgICAgICAgZnVuY3Rpb24odSkge3JldHVybiB7dmFsdWU6IDEsIHVuaXRzOiB7XCJtW0gyT11cIjogMX19O30sXG4gICAgICAgICAgXCJba2EnVV1cIixcbiAgICAgICAgICB7IHR5cGU6IFwibGl0ZXJhbFwiLCB2YWx1ZTogXCJba2EnVV1cIiwgZGVzY3JpcHRpb246IFwiXFxcIltrYSdVXVxcXCJcIiB9LFxuICAgICAgICAgIGZ1bmN0aW9uKHUpIHtyZXR1cm4ge3ZhbHVlOiAxLCB1bml0czoge1wiW2thJ1VdXCI6IDF9fTt9LFxuICAgICAgICAgIFwiQltTUExdXCIsXG4gICAgICAgICAgeyB0eXBlOiBcImxpdGVyYWxcIiwgdmFsdWU6IFwiQltTUExdXCIsIGRlc2NyaXB0aW9uOiBcIlxcXCJCW1NQTF1cXFwiXCIgfSxcbiAgICAgICAgICBmdW5jdGlvbih1KSB7cmV0dXJuIHt2YWx1ZTogMSwgdW5pdHM6IHtcIkJbU1BMXVwiOiAxfX07fSxcbiAgICAgICAgICBcIlt0YidVXVwiLFxuICAgICAgICAgIHsgdHlwZTogXCJsaXRlcmFsXCIsIHZhbHVlOiBcIlt0YidVXVwiLCBkZXNjcmlwdGlvbjogXCJcXFwiW3RiJ1VdXFxcIlwiIH0sXG4gICAgICAgICAgZnVuY3Rpb24odSkge3JldHVybiB7dmFsdWU6IDEsIHVuaXRzOiB7XCJbdGInVV1cIjogMX19O30sXG4gICAgICAgICAgXCJbZGVnUl1cIixcbiAgICAgICAgICB7IHR5cGU6IFwibGl0ZXJhbFwiLCB2YWx1ZTogXCJbZGVnUl1cIiwgZGVzY3JpcHRpb246IFwiXFxcIltkZWdSXVxcXCJcIiB9LFxuICAgICAgICAgIGZ1bmN0aW9uKHUpIHtyZXR1cm4ge3ZhbHVlOiAxLCB1bml0czoge1wiW2RlZ1JdXCI6IDF9fTt9LFxuICAgICAgICAgIFwiW2RlZ0ZdXCIsXG4gICAgICAgICAgeyB0eXBlOiBcImxpdGVyYWxcIiwgdmFsdWU6IFwiW2RlZ0ZdXCIsIGRlc2NyaXB0aW9uOiBcIlxcXCJbZGVnRl1cXFwiXCIgfSxcbiAgICAgICAgICBmdW5jdGlvbih1KSB7cmV0dXJuIHt2YWx1ZTogMSwgdW5pdHM6IHtcIltkZWdGXVwiOiAxfX07fSxcbiAgICAgICAgICBcIltwcHRyXVwiLFxuICAgICAgICAgIHsgdHlwZTogXCJsaXRlcmFsXCIsIHZhbHVlOiBcIltwcHRyXVwiLCBkZXNjcmlwdGlvbjogXCJcXFwiW3BwdHJdXFxcIlwiIH0sXG4gICAgICAgICAgZnVuY3Rpb24odSkge3JldHVybiB7dmFsdWU6IDEsIHVuaXRzOiB7XCJbcHB0cl1cIjogMX19O30sXG4gICAgICAgICAgXCJbcHB0aF1cIixcbiAgICAgICAgICB7IHR5cGU6IFwibGl0ZXJhbFwiLCB2YWx1ZTogXCJbcHB0aF1cIiwgZGVzY3JpcHRpb246IFwiXFxcIltwcHRoXVxcXCJcIiB9LFxuICAgICAgICAgIGZ1bmN0aW9uKHUpIHtyZXR1cm4ge3ZhbHVlOiAxLCB1bml0czoge1wiW3BwdGhdXCI6IDF9fTt9LFxuICAgICAgICAgIFwiW296X21dXCIsXG4gICAgICAgICAgeyB0eXBlOiBcImxpdGVyYWxcIiwgdmFsdWU6IFwiW296X21dXCIsIGRlc2NyaXB0aW9uOiBcIlxcXCJbb3pfbV1cXFwiXCIgfSxcbiAgICAgICAgICBmdW5jdGlvbih1KSB7cmV0dXJuIHt2YWx1ZTogMSwgdW5pdHM6IHtcIltvel9tXVwiOiAxfX07fSxcbiAgICAgICAgICBcIltwaWVkXVwiLFxuICAgICAgICAgIHsgdHlwZTogXCJsaXRlcmFsXCIsIHZhbHVlOiBcIltwaWVkXVwiLCBkZXNjcmlwdGlvbjogXCJcXFwiW3BpZWRdXFxcIlwiIH0sXG4gICAgICAgICAgZnVuY3Rpb24odSkge3JldHVybiB7dmFsdWU6IDEsIHVuaXRzOiB7XCJbcGllZF1cIjogMX19O30sXG4gICAgICAgICAgXCJbcHBtXVwiLFxuICAgICAgICAgIHsgdHlwZTogXCJsaXRlcmFsXCIsIHZhbHVlOiBcIltwcG1dXCIsIGRlc2NyaXB0aW9uOiBcIlxcXCJbcHBtXVxcXCJcIiB9LFxuICAgICAgICAgIGZ1bmN0aW9uKHUpIHtyZXR1cm4ge3ZhbHVlOiAxLCB1bml0czoge1wiW3BwbV1cIjogMX19O30sXG4gICAgICAgICAgXCJbcHBiXVwiLFxuICAgICAgICAgIHsgdHlwZTogXCJsaXRlcmFsXCIsIHZhbHVlOiBcIltwcGJdXCIsIGRlc2NyaXB0aW9uOiBcIlxcXCJbcHBiXVxcXCJcIiB9LFxuICAgICAgICAgIGZ1bmN0aW9uKHUpIHtyZXR1cm4ge3ZhbHVlOiAxLCB1bml0czoge1wiW3BwYl1cIjogMX19O30sXG4gICAgICAgICAgXCJiaXRfc1wiLFxuICAgICAgICAgIHsgdHlwZTogXCJsaXRlcmFsXCIsIHZhbHVlOiBcImJpdF9zXCIsIGRlc2NyaXB0aW9uOiBcIlxcXCJiaXRfc1xcXCJcIiB9LFxuICAgICAgICAgIGZ1bmN0aW9uKHUpIHtyZXR1cm4ge3ZhbHVlOiAxLCB1bml0czoge1wiYml0X3NcIjogMX19O30sXG4gICAgICAgICAgXCJbUE5VXVwiLFxuICAgICAgICAgIHsgdHlwZTogXCJsaXRlcmFsXCIsIHZhbHVlOiBcIltQTlVdXCIsIGRlc2NyaXB0aW9uOiBcIlxcXCJbUE5VXVxcXCJcIiB9LFxuICAgICAgICAgIGZ1bmN0aW9uKHUpIHtyZXR1cm4ge3ZhbHVlOiAxLCB1bml0czoge1wiW1BOVV1cIjogMX19O30sXG4gICAgICAgICAgXCJbcHNpXVwiLFxuICAgICAgICAgIHsgdHlwZTogXCJsaXRlcmFsXCIsIHZhbHVlOiBcIltwc2ldXCIsIGRlc2NyaXB0aW9uOiBcIlxcXCJbcHNpXVxcXCJcIiB9LFxuICAgICAgICAgIGZ1bmN0aW9uKHUpIHtyZXR1cm4ge3ZhbHVlOiAxLCB1bml0czoge1wiW3BzaV1cIjogMX19O30sXG4gICAgICAgICAgXCJbQkFVXVwiLFxuICAgICAgICAgIHsgdHlwZTogXCJsaXRlcmFsXCIsIHZhbHVlOiBcIltCQVVdXCIsIGRlc2NyaXB0aW9uOiBcIlxcXCJbQkFVXVxcXCJcIiB9LFxuICAgICAgICAgIGZ1bmN0aW9uKHUpIHtyZXR1cm4ge3ZhbHVlOiAxLCB1bml0czoge1wiW0JBVV1cIjogMX19O30sXG4gICAgICAgICAgXCJbQ2FsXVwiLFxuICAgICAgICAgIHsgdHlwZTogXCJsaXRlcmFsXCIsIHZhbHVlOiBcIltDYWxdXCIsIGRlc2NyaXB0aW9uOiBcIlxcXCJbQ2FsXVxcXCJcIiB9LFxuICAgICAgICAgIGZ1bmN0aW9uKHUpIHtyZXR1cm4ge3ZhbHVlOiAxLCB1bml0czoge1wiW0NhbF1cIjogMX19O30sXG4gICAgICAgICAgXCJCW21WXVwiLFxuICAgICAgICAgIHsgdHlwZTogXCJsaXRlcmFsXCIsIHZhbHVlOiBcIkJbbVZdXCIsIGRlc2NyaXB0aW9uOiBcIlxcXCJCW21WXVxcXCJcIiB9LFxuICAgICAgICAgIGZ1bmN0aW9uKHUpIHtyZXR1cm4ge3ZhbHVlOiAxLCB1bml0czoge1wiQlttVl1cIjogMX19O30sXG4gICAgICAgICAgXCJCW3VWXVwiLFxuICAgICAgICAgIHsgdHlwZTogXCJsaXRlcmFsXCIsIHZhbHVlOiBcIkJbdVZdXCIsIGRlc2NyaXB0aW9uOiBcIlxcXCJCW3VWXVxcXCJcIiB9LFxuICAgICAgICAgIGZ1bmN0aW9uKHUpIHtyZXR1cm4ge3ZhbHVlOiAxLCB1bml0czoge1wiQlt1Vl1cIjogMX19O30sXG4gICAgICAgICAgXCJbQ0ZVXVwiLFxuICAgICAgICAgIHsgdHlwZTogXCJsaXRlcmFsXCIsIHZhbHVlOiBcIltDRlVdXCIsIGRlc2NyaXB0aW9uOiBcIlxcXCJbQ0ZVXVxcXCJcIiB9LFxuICAgICAgICAgIGZ1bmN0aW9uKHUpIHtyZXR1cm4ge3ZhbHVlOiAxLCB1bml0czoge1wiW0NGVV1cIjogMX19O30sXG4gICAgICAgICAgXCJbRkZVXVwiLFxuICAgICAgICAgIHsgdHlwZTogXCJsaXRlcmFsXCIsIHZhbHVlOiBcIltGRlVdXCIsIGRlc2NyaXB0aW9uOiBcIlxcXCJbRkZVXVxcXCJcIiB9LFxuICAgICAgICAgIGZ1bmN0aW9uKHUpIHtyZXR1cm4ge3ZhbHVlOiAxLCB1bml0czoge1wiW0ZGVV1cIjogMX19O30sXG4gICAgICAgICAgXCJCW2tXXVwiLFxuICAgICAgICAgIHsgdHlwZTogXCJsaXRlcmFsXCIsIHZhbHVlOiBcIkJba1ddXCIsIGRlc2NyaXB0aW9uOiBcIlxcXCJCW2tXXVxcXCJcIiB9LFxuICAgICAgICAgIGZ1bmN0aW9uKHUpIHtyZXR1cm4ge3ZhbHVlOiAxLCB1bml0czoge1wiQltrV11cIjogMX19O30sXG4gICAgICAgICAgXCJbUEZVXVwiLFxuICAgICAgICAgIHsgdHlwZTogXCJsaXRlcmFsXCIsIHZhbHVlOiBcIltQRlVdXCIsIGRlc2NyaXB0aW9uOiBcIlxcXCJbUEZVXVxcXCJcIiB9LFxuICAgICAgICAgIGZ1bmN0aW9uKHUpIHtyZXR1cm4ge3ZhbHVlOiAxLCB1bml0czoge1wiW1BGVV1cIjogMX19O30sXG4gICAgICAgICAgXCJjYWxfbVwiLFxuICAgICAgICAgIHsgdHlwZTogXCJsaXRlcmFsXCIsIHZhbHVlOiBcImNhbF9tXCIsIGRlc2NyaXB0aW9uOiBcIlxcXCJjYWxfbVxcXCJcIiB9LFxuICAgICAgICAgIGZ1bmN0aW9uKHUpIHtyZXR1cm4ge3ZhbHVlOiAxLCB1bml0czoge1wiY2FsX21cIjogMX19O30sXG4gICAgICAgICAgXCJbRUxVXVwiLFxuICAgICAgICAgIHsgdHlwZTogXCJsaXRlcmFsXCIsIHZhbHVlOiBcIltFTFVdXCIsIGRlc2NyaXB0aW9uOiBcIlxcXCJbRUxVXVxcXCJcIiB9LFxuICAgICAgICAgIGZ1bmN0aW9uKHUpIHtyZXR1cm4ge3ZhbHVlOiAxLCB1bml0czoge1wiW0VMVV1cIjogMX19O30sXG4gICAgICAgICAgXCJbRkVVXVwiLFxuICAgICAgICAgIHsgdHlwZTogXCJsaXRlcmFsXCIsIHZhbHVlOiBcIltGRVVdXCIsIGRlc2NyaXB0aW9uOiBcIlxcXCJbRkVVXVxcXCJcIiB9LFxuICAgICAgICAgIGZ1bmN0aW9uKHUpIHtyZXR1cm4ge3ZhbHVlOiAxLCB1bml0czoge1wiW0ZFVV1cIjogMX19O30sXG4gICAgICAgICAgXCJbUFJVXVwiLFxuICAgICAgICAgIHsgdHlwZTogXCJsaXRlcmFsXCIsIHZhbHVlOiBcIltQUlVdXCIsIGRlc2NyaXB0aW9uOiBcIlxcXCJbUFJVXVxcXCJcIiB9LFxuICAgICAgICAgIGZ1bmN0aW9uKHUpIHtyZXR1cm4ge3ZhbHVlOiAxLCB1bml0czoge1wiW1BSVV1cIjogMX19O30sXG4gICAgICAgICAgXCJbbV9lXVwiLFxuICAgICAgICAgIHsgdHlwZTogXCJsaXRlcmFsXCIsIHZhbHVlOiBcIlttX2VdXCIsIGRlc2NyaXB0aW9uOiBcIlxcXCJbbV9lXVxcXCJcIiB9LFxuICAgICAgICAgIGZ1bmN0aW9uKHUpIHtyZXR1cm4ge3ZhbHVlOiAxLCB1bml0czoge1wiW21fZV1cIjogMX19O30sXG4gICAgICAgICAgXCJbbV9wXVwiLFxuICAgICAgICAgIHsgdHlwZTogXCJsaXRlcmFsXCIsIHZhbHVlOiBcIlttX3BdXCIsIGRlc2NyaXB0aW9uOiBcIlxcXCJbbV9wXVxcXCJcIiB9LFxuICAgICAgICAgIGZ1bmN0aW9uKHUpIHtyZXR1cm4ge3ZhbHVlOiAxLCB1bml0czoge1wiW21fcF1cIjogMX19O30sXG4gICAgICAgICAgXCJtW0hnXVwiLFxuICAgICAgICAgIHsgdHlwZTogXCJsaXRlcmFsXCIsIHZhbHVlOiBcIm1bSGddXCIsIGRlc2NyaXB0aW9uOiBcIlxcXCJtW0hnXVxcXCJcIiB9LFxuICAgICAgICAgIGZ1bmN0aW9uKHUpIHtyZXR1cm4ge3ZhbHVlOiAxLCB1bml0czoge1wibVtIZ11cIjogMX19O30sXG4gICAgICAgICAgXCJbcGNhXVwiLFxuICAgICAgICAgIHsgdHlwZTogXCJsaXRlcmFsXCIsIHZhbHVlOiBcIltwY2FdXCIsIGRlc2NyaXB0aW9uOiBcIlxcXCJbcGNhXVxcXCJcIiB9LFxuICAgICAgICAgIGZ1bmN0aW9uKHUpIHtyZXR1cm4ge3ZhbHVlOiAxLCB1bml0czoge1wiW3BjYV1cIjogMX19O30sXG4gICAgICAgICAgXCJbcG50XVwiLFxuICAgICAgICAgIHsgdHlwZTogXCJsaXRlcmFsXCIsIHZhbHVlOiBcIltwbnRdXCIsIGRlc2NyaXB0aW9uOiBcIlxcXCJbcG50XVxcXCJcIiB9LFxuICAgICAgICAgIGZ1bmN0aW9uKHUpIHtyZXR1cm4ge3ZhbHVlOiAxLCB1bml0czoge1wiW3BudF1cIjogMX19O30sXG4gICAgICAgICAgXCJbbG5lXVwiLFxuICAgICAgICAgIHsgdHlwZTogXCJsaXRlcmFsXCIsIHZhbHVlOiBcIltsbmVdXCIsIGRlc2NyaXB0aW9uOiBcIlxcXCJbbG5lXVxcXCJcIiB9LFxuICAgICAgICAgIGZ1bmN0aW9uKHUpIHtyZXR1cm4ge3ZhbHVlOiAxLCB1bml0czoge1wiW2xuZV1cIjogMX19O30sXG4gICAgICAgICAgXCJbTFBGXVwiLFxuICAgICAgICAgIHsgdHlwZTogXCJsaXRlcmFsXCIsIHZhbHVlOiBcIltMUEZdXCIsIGRlc2NyaXB0aW9uOiBcIlxcXCJbTFBGXVxcXCJcIiB9LFxuICAgICAgICAgIGZ1bmN0aW9uKHUpIHtyZXR1cm4ge3ZhbHVlOiAxLCB1bml0czoge1wiW0xQRl1cIjogMX19O30sXG4gICAgICAgICAgXCJbZGVuXVwiLFxuICAgICAgICAgIHsgdHlwZTogXCJsaXRlcmFsXCIsIHZhbHVlOiBcIltkZW5dXCIsIGRlc2NyaXB0aW9uOiBcIlxcXCJbZGVuXVxcXCJcIiB9LFxuICAgICAgICAgIGZ1bmN0aW9uKHUpIHtyZXR1cm4ge3ZhbHVlOiAxLCB1bml0czoge1wiW2Rlbl1cIjogMX19O30sXG4gICAgICAgICAgXCJbc2N0XVwiLFxuICAgICAgICAgIHsgdHlwZTogXCJsaXRlcmFsXCIsIHZhbHVlOiBcIltzY3RdXCIsIGRlc2NyaXB0aW9uOiBcIlxcXCJbc2N0XVxcXCJcIiB9LFxuICAgICAgICAgIGZ1bmN0aW9uKHUpIHtyZXR1cm4ge3ZhbHVlOiAxLCB1bml0czoge1wiW3NjdF1cIjogMX19O30sXG4gICAgICAgICAgXCJbdHdwXVwiLFxuICAgICAgICAgIHsgdHlwZTogXCJsaXRlcmFsXCIsIHZhbHVlOiBcIlt0d3BdXCIsIGRlc2NyaXB0aW9uOiBcIlxcXCJbdHdwXVxcXCJcIiB9LFxuICAgICAgICAgIGZ1bmN0aW9uKHUpIHtyZXR1cm4ge3ZhbHVlOiAxLCB1bml0czoge1wiW3R3cF1cIjogMX19O30sXG4gICAgICAgICAgXCJbQnR1XVwiLFxuICAgICAgICAgIHsgdHlwZTogXCJsaXRlcmFsXCIsIHZhbHVlOiBcIltCdHVdXCIsIGRlc2NyaXB0aW9uOiBcIlxcXCJbQnR1XVxcXCJcIiB9LFxuICAgICAgICAgIGZ1bmN0aW9uKHUpIHtyZXR1cm4ge3ZhbHVlOiAxLCB1bml0czoge1wiW0J0dV1cIjogMX19O30sXG4gICAgICAgICAgXCJbTUVUXVwiLFxuICAgICAgICAgIHsgdHlwZTogXCJsaXRlcmFsXCIsIHZhbHVlOiBcIltNRVRdXCIsIGRlc2NyaXB0aW9uOiBcIlxcXCJbTUVUXVxcXCJcIiB9LFxuICAgICAgICAgIGZ1bmN0aW9uKHUpIHtyZXR1cm4ge3ZhbHVlOiAxLCB1bml0czoge1wiW01FVF1cIjogMX19O30sXG4gICAgICAgICAgXCJbSFBGXVwiLFxuICAgICAgICAgIHsgdHlwZTogXCJsaXRlcmFsXCIsIHZhbHVlOiBcIltIUEZdXCIsIGRlc2NyaXB0aW9uOiBcIlxcXCJbSFBGXVxcXCJcIiB9LFxuICAgICAgICAgIGZ1bmN0aW9uKHUpIHtyZXR1cm4ge3ZhbHVlOiAxLCB1bml0czoge1wiW0hQRl1cIjogMX19O30sXG4gICAgICAgICAgXCJbZHJwXVwiLFxuICAgICAgICAgIHsgdHlwZTogXCJsaXRlcmFsXCIsIHZhbHVlOiBcIltkcnBdXCIsIGRlc2NyaXB0aW9uOiBcIlxcXCJbZHJwXVxcXCJcIiB9LFxuICAgICAgICAgIGZ1bmN0aW9uKHUpIHtyZXR1cm4ge3ZhbHVlOiAxLCB1bml0czoge1wiW2RycF1cIjogMX19O30sXG4gICAgICAgICAgXCJbQVVdXCIsXG4gICAgICAgICAgeyB0eXBlOiBcImxpdGVyYWxcIiwgdmFsdWU6IFwiW0FVXVwiLCBkZXNjcmlwdGlvbjogXCJcXFwiW0FVXVxcXCJcIiB9LFxuICAgICAgICAgIGZ1bmN0aW9uKHUpIHtyZXR1cm4ge3ZhbHVlOiAxLCB1bml0czoge1wiW0FVXVwiOiAxfX07fSxcbiAgICAgICAgICBcIltJVV1cIixcbiAgICAgICAgICB7IHR5cGU6IFwibGl0ZXJhbFwiLCB2YWx1ZTogXCJbSVVdXCIsIGRlc2NyaXB0aW9uOiBcIlxcXCJbSVVdXFxcIlwiIH0sXG4gICAgICAgICAgZnVuY3Rpb24odSkge3JldHVybiB7dmFsdWU6IDEsIHVuaXRzOiB7XCJbSVVdXCI6IDF9fTt9LFxuICAgICAgICAgIFwibW9fc1wiLFxuICAgICAgICAgIHsgdHlwZTogXCJsaXRlcmFsXCIsIHZhbHVlOiBcIm1vX3NcIiwgZGVzY3JpcHRpb246IFwiXFxcIm1vX3NcXFwiXCIgfSxcbiAgICAgICAgICBmdW5jdGlvbih1KSB7cmV0dXJuIHt2YWx1ZTogMSwgdW5pdHM6IHtcIm1vX3NcIjogMX19O30sXG4gICAgICAgICAgXCJbZ3JdXCIsXG4gICAgICAgICAgeyB0eXBlOiBcImxpdGVyYWxcIiwgdmFsdWU6IFwiW2dyXVwiLCBkZXNjcmlwdGlvbjogXCJcXFwiW2dyXVxcXCJcIiB9LFxuICAgICAgICAgIGZ1bmN0aW9uKHUpIHtyZXR1cm4ge3ZhbHVlOiAxLCB1bml0czoge1wiW2dyXVwiOiAxfX07fSxcbiAgICAgICAgICBcImNpcmNcIixcbiAgICAgICAgICB7IHR5cGU6IFwibGl0ZXJhbFwiLCB2YWx1ZTogXCJjaXJjXCIsIGRlc2NyaXB0aW9uOiBcIlxcXCJjaXJjXFxcIlwiIH0sXG4gICAgICAgICAgZnVuY3Rpb24odSkge3JldHVybiB7dmFsdWU6IDEsIHVuaXRzOiB7XCJjaXJjXCI6IDF9fTt9LFxuICAgICAgICAgIFwiW3BpXVwiLFxuICAgICAgICAgIHsgdHlwZTogXCJsaXRlcmFsXCIsIHZhbHVlOiBcIltwaV1cIiwgZGVzY3JpcHRpb246IFwiXFxcIltwaV1cXFwiXCIgfSxcbiAgICAgICAgICBmdW5jdGlvbih1KSB7cmV0dXJuIHt2YWx1ZTogMSwgdW5pdHM6IHtcIltwaV1cIjogMX19O30sXG4gICAgICAgICAgXCJbRVVdXCIsXG4gICAgICAgICAgeyB0eXBlOiBcImxpdGVyYWxcIiwgdmFsdWU6IFwiW0VVXVwiLCBkZXNjcmlwdGlvbjogXCJcXFwiW0VVXVxcXCJcIiB9LFxuICAgICAgICAgIGZ1bmN0aW9uKHUpIHtyZXR1cm4ge3ZhbHVlOiAxLCB1bml0czoge1wiW0VVXVwiOiAxfX07fSxcbiAgICAgICAgICBcIltMZl1cIixcbiAgICAgICAgICB7IHR5cGU6IFwibGl0ZXJhbFwiLCB2YWx1ZTogXCJbTGZdXCIsIGRlc2NyaXB0aW9uOiBcIlxcXCJbTGZdXFxcIlwiIH0sXG4gICAgICAgICAgZnVuY3Rpb24odSkge3JldHVybiB7dmFsdWU6IDEsIHVuaXRzOiB7XCJbTGZdXCI6IDF9fTt9LFxuICAgICAgICAgIFwibW9falwiLFxuICAgICAgICAgIHsgdHlwZTogXCJsaXRlcmFsXCIsIHZhbHVlOiBcIm1vX2pcIiwgZGVzY3JpcHRpb246IFwiXFxcIm1vX2pcXFwiXCIgfSxcbiAgICAgICAgICBmdW5jdGlvbih1KSB7cmV0dXJuIHt2YWx1ZTogMSwgdW5pdHM6IHtcIm1vX2pcIjogMX19O30sXG4gICAgICAgICAgXCJCW1ddXCIsXG4gICAgICAgICAgeyB0eXBlOiBcImxpdGVyYWxcIiwgdmFsdWU6IFwiQltXXVwiLCBkZXNjcmlwdGlvbjogXCJcXFwiQltXXVxcXCJcIiB9LFxuICAgICAgICAgIGZ1bmN0aW9uKHUpIHtyZXR1cm4ge3ZhbHVlOiAxLCB1bml0czoge1wiQltXXVwiOiAxfX07fSxcbiAgICAgICAgICBcIkJbVl1cIixcbiAgICAgICAgICB7IHR5cGU6IFwibGl0ZXJhbFwiLCB2YWx1ZTogXCJCW1ZdXCIsIGRlc2NyaXB0aW9uOiBcIlxcXCJCW1ZdXFxcIlwiIH0sXG4gICAgICAgICAgZnVuY3Rpb24odSkge3JldHVybiB7dmFsdWU6IDEsIHVuaXRzOiB7XCJCW1ZdXCI6IDF9fTt9LFxuICAgICAgICAgIFwibW9fZ1wiLFxuICAgICAgICAgIHsgdHlwZTogXCJsaXRlcmFsXCIsIHZhbHVlOiBcIm1vX2dcIiwgZGVzY3JpcHRpb246IFwiXFxcIm1vX2dcXFwiXCIgfSxcbiAgICAgICAgICBmdW5jdGlvbih1KSB7cmV0dXJuIHt2YWx1ZTogMSwgdW5pdHM6IHtcIm1vX2dcIjogMX19O30sXG4gICAgICAgICAgXCJbaVVdXCIsXG4gICAgICAgICAgeyB0eXBlOiBcImxpdGVyYWxcIiwgdmFsdWU6IFwiW2lVXVwiLCBkZXNjcmlwdGlvbjogXCJcXFwiW2lVXVxcXCJcIiB9LFxuICAgICAgICAgIGZ1bmN0aW9uKHUpIHtyZXR1cm4ge3ZhbHVlOiAxLCB1bml0czoge1wiW2lVXVwiOiAxfX07fSxcbiAgICAgICAgICBcIltIUF1cIixcbiAgICAgICAgICB7IHR5cGU6IFwibGl0ZXJhbFwiLCB2YWx1ZTogXCJbSFBdXCIsIGRlc2NyaXB0aW9uOiBcIlxcXCJbSFBdXFxcIlwiIH0sXG4gICAgICAgICAgZnVuY3Rpb24odSkge3JldHVybiB7dmFsdWU6IDEsIHVuaXRzOiB7XCJbSFBdXCI6IDF9fTt9LFxuICAgICAgICAgIFwiW0NoXVwiLFxuICAgICAgICAgIHsgdHlwZTogXCJsaXRlcmFsXCIsIHZhbHVlOiBcIltDaF1cIiwgZGVzY3JpcHRpb246IFwiXFxcIltDaF1cXFwiXCIgfSxcbiAgICAgICAgICBmdW5jdGlvbih1KSB7cmV0dXJuIHt2YWx1ZTogMSwgdW5pdHM6IHtcIltDaF1cIjogMX19O30sXG4gICAgICAgICAgXCJbbHldXCIsXG4gICAgICAgICAgeyB0eXBlOiBcImxpdGVyYWxcIiwgdmFsdWU6IFwiW2x5XVwiLCBkZXNjcmlwdGlvbjogXCJcXFwiW2x5XVxcXCJcIiB9LFxuICAgICAgICAgIGZ1bmN0aW9uKHUpIHtyZXR1cm4ge3ZhbHVlOiAxLCB1bml0czoge1wiW2x5XVwiOiAxfX07fSxcbiAgICAgICAgICBcIltwSF1cIixcbiAgICAgICAgICB7IHR5cGU6IFwibGl0ZXJhbFwiLCB2YWx1ZTogXCJbcEhdXCIsIGRlc2NyaXB0aW9uOiBcIlxcXCJbcEhdXFxcIlwiIH0sXG4gICAgICAgICAgZnVuY3Rpb24odSkge3JldHVybiB7dmFsdWU6IDEsIHVuaXRzOiB7XCJbcEhdXCI6IDF9fTt9LFxuICAgICAgICAgIFwiYV9qXCIsXG4gICAgICAgICAgeyB0eXBlOiBcImxpdGVyYWxcIiwgdmFsdWU6IFwiYV9qXCIsIGRlc2NyaXB0aW9uOiBcIlxcXCJhX2pcXFwiXCIgfSxcbiAgICAgICAgICBmdW5jdGlvbih1KSB7cmV0dXJuIHt2YWx1ZTogMSwgdW5pdHM6IHtcImFfalwiOiAxfX07fSxcbiAgICAgICAgICBcInJhZFwiLFxuICAgICAgICAgIHsgdHlwZTogXCJsaXRlcmFsXCIsIHZhbHVlOiBcInJhZFwiLCBkZXNjcmlwdGlvbjogXCJcXFwicmFkXFxcIlwiIH0sXG4gICAgICAgICAgZnVuY3Rpb24odSkge3JldHVybiB7dmFsdWU6IDEsIHVuaXRzOiB7XCJyYWRcIjogMX19O30sXG4gICAgICAgICAgXCJhX3RcIixcbiAgICAgICAgICB7IHR5cGU6IFwibGl0ZXJhbFwiLCB2YWx1ZTogXCJhX3RcIiwgZGVzY3JpcHRpb246IFwiXFxcImFfdFxcXCJcIiB9LFxuICAgICAgICAgIGZ1bmN0aW9uKHUpIHtyZXR1cm4ge3ZhbHVlOiAxLCB1bml0czoge1wiYV90XCI6IDF9fTt9LFxuICAgICAgICAgIFwiT2htXCIsXG4gICAgICAgICAgeyB0eXBlOiBcImxpdGVyYWxcIiwgdmFsdWU6IFwiT2htXCIsIGRlc2NyaXB0aW9uOiBcIlxcXCJPaG1cXFwiXCIgfSxcbiAgICAgICAgICBmdW5jdGlvbih1KSB7cmV0dXJuIHt2YWx1ZTogMSwgdW5pdHM6IHtcIk9obVwiOiAxfX07fSxcbiAgICAgICAgICBcInNwaFwiLFxuICAgICAgICAgIHsgdHlwZTogXCJsaXRlcmFsXCIsIHZhbHVlOiBcInNwaFwiLCBkZXNjcmlwdGlvbjogXCJcXFwic3BoXFxcIlwiIH0sXG4gICAgICAgICAgZnVuY3Rpb24odSkge3JldHVybiB7dmFsdWU6IDEsIHVuaXRzOiB7XCJzcGhcIjogMX19O30sXG4gICAgICAgICAgXCJiaXRcIixcbiAgICAgICAgICB7IHR5cGU6IFwibGl0ZXJhbFwiLCB2YWx1ZTogXCJiaXRcIiwgZGVzY3JpcHRpb246IFwiXFxcImJpdFxcXCJcIiB9LFxuICAgICAgICAgIGZ1bmN0aW9uKHUpIHtyZXR1cm4ge3ZhbHVlOiAxLCB1bml0czoge1wiYml0XCI6IDF9fTt9LFxuICAgICAgICAgIFwibWhvXCIsXG4gICAgICAgICAgeyB0eXBlOiBcImxpdGVyYWxcIiwgdmFsdWU6IFwibWhvXCIsIGRlc2NyaXB0aW9uOiBcIlxcXCJtaG9cXFwiXCIgfSxcbiAgICAgICAgICBmdW5jdGlvbih1KSB7cmV0dXJuIHt2YWx1ZTogMSwgdW5pdHM6IHtcIm1ob1wiOiAxfX07fSxcbiAgICAgICAgICBcIm1pblwiLFxuICAgICAgICAgIHsgdHlwZTogXCJsaXRlcmFsXCIsIHZhbHVlOiBcIm1pblwiLCBkZXNjcmlwdGlvbjogXCJcXFwibWluXFxcIlwiIH0sXG4gICAgICAgICAgZnVuY3Rpb24odSkge3JldHVybiB7dmFsdWU6IDEsIHVuaXRzOiB7XCJtaW5cIjogMX19O30sXG4gICAgICAgICAgXCJtb2xcIixcbiAgICAgICAgICB7IHR5cGU6IFwibGl0ZXJhbFwiLCB2YWx1ZTogXCJtb2xcIiwgZGVzY3JpcHRpb246IFwiXFxcIm1vbFxcXCJcIiB9LFxuICAgICAgICAgIGZ1bmN0aW9uKHUpIHtyZXR1cm4ge3ZhbHVlOiAxLCB1bml0czoge1wibW9sXCI6IDF9fTt9LFxuICAgICAgICAgIFwiZGVnXCIsXG4gICAgICAgICAgeyB0eXBlOiBcImxpdGVyYWxcIiwgdmFsdWU6IFwiZGVnXCIsIGRlc2NyaXB0aW9uOiBcIlxcXCJkZWdcXFwiXCIgfSxcbiAgICAgICAgICBmdW5jdGlvbih1KSB7cmV0dXJuIHt2YWx1ZTogMSwgdW5pdHM6IHtcImRlZ1wiOiAxfX07fSxcbiAgICAgICAgICBcImdvblwiLFxuICAgICAgICAgIHsgdHlwZTogXCJsaXRlcmFsXCIsIHZhbHVlOiBcImdvblwiLCBkZXNjcmlwdGlvbjogXCJcXFwiZ29uXFxcIlwiIH0sXG4gICAgICAgICAgZnVuY3Rpb24odSkge3JldHVybiB7dmFsdWU6IDEsIHVuaXRzOiB7XCJnb25cIjogMX19O30sXG4gICAgICAgICAgXCJDZWxcIixcbiAgICAgICAgICB7IHR5cGU6IFwibGl0ZXJhbFwiLCB2YWx1ZTogXCJDZWxcIiwgZGVzY3JpcHRpb246IFwiXFxcIkNlbFxcXCJcIiB9LFxuICAgICAgICAgIGZ1bmN0aW9uKHUpIHtyZXR1cm4ge3ZhbHVlOiAxLCB1bml0czoge1wiQ2VsXCI6IDF9fTt9LFxuICAgICAgICAgIFwia2F0XCIsXG4gICAgICAgICAgeyB0eXBlOiBcImxpdGVyYWxcIiwgdmFsdWU6IFwia2F0XCIsIGRlc2NyaXB0aW9uOiBcIlxcXCJrYXRcXFwiXCIgfSxcbiAgICAgICAgICBmdW5jdGlvbih1KSB7cmV0dXJuIHt2YWx1ZTogMSwgdW5pdHM6IHtcImthdFwiOiAxfX07fSxcbiAgICAgICAgICBcImF0dFwiLFxuICAgICAgICAgIHsgdHlwZTogXCJsaXRlcmFsXCIsIHZhbHVlOiBcImF0dFwiLCBkZXNjcmlwdGlvbjogXCJcXFwiYXR0XFxcIlwiIH0sXG4gICAgICAgICAgZnVuY3Rpb24odSkge3JldHVybiB7dmFsdWU6IDEsIHVuaXRzOiB7XCJhdHRcIjogMX19O30sXG4gICAgICAgICAgXCJvc21cIixcbiAgICAgICAgICB7IHR5cGU6IFwibGl0ZXJhbFwiLCB2YWx1ZTogXCJvc21cIiwgZGVzY3JpcHRpb246IFwiXFxcIm9zbVxcXCJcIiB9LFxuICAgICAgICAgIGZ1bmN0aW9uKHUpIHtyZXR1cm4ge3ZhbHVlOiAxLCB1bml0czoge1wib3NtXCI6IDF9fTt9LFxuICAgICAgICAgIFwidGV4XCIsXG4gICAgICAgICAgeyB0eXBlOiBcImxpdGVyYWxcIiwgdmFsdWU6IFwidGV4XCIsIGRlc2NyaXB0aW9uOiBcIlxcXCJ0ZXhcXFwiXCIgfSxcbiAgICAgICAgICBmdW5jdGlvbih1KSB7cmV0dXJuIHt2YWx1ZTogMSwgdW5pdHM6IHtcInRleFwiOiAxfX07fSxcbiAgICAgICAgICBcImNhbFwiLFxuICAgICAgICAgIHsgdHlwZTogXCJsaXRlcmFsXCIsIHZhbHVlOiBcImNhbFwiLCBkZXNjcmlwdGlvbjogXCJcXFwiY2FsXFxcIlwiIH0sXG4gICAgICAgICAgZnVuY3Rpb24odSkge3JldHVybiB7dmFsdWU6IDEsIHVuaXRzOiB7XCJjYWxcIjogMX19O30sXG4gICAgICAgICAgXCJSRU1cIixcbiAgICAgICAgICB7IHR5cGU6IFwibGl0ZXJhbFwiLCB2YWx1ZTogXCJSRU1cIiwgZGVzY3JpcHRpb246IFwiXFxcIlJFTVxcXCJcIiB9LFxuICAgICAgICAgIGZ1bmN0aW9uKHUpIHtyZXR1cm4ge3ZhbHVlOiAxLCB1bml0czoge1wiUkVNXCI6IDF9fTt9LFxuICAgICAgICAgIFwiUkFEXCIsXG4gICAgICAgICAgeyB0eXBlOiBcImxpdGVyYWxcIiwgdmFsdWU6IFwiUkFEXCIsIGRlc2NyaXB0aW9uOiBcIlxcXCJSQURcXFwiXCIgfSxcbiAgICAgICAgICBmdW5jdGlvbih1KSB7cmV0dXJuIHt2YWx1ZTogMSwgdW5pdHM6IHtcIlJBRFwiOiAxfX07fSxcbiAgICAgICAgICBcImFfZ1wiLFxuICAgICAgICAgIHsgdHlwZTogXCJsaXRlcmFsXCIsIHZhbHVlOiBcImFfZ1wiLCBkZXNjcmlwdGlvbjogXCJcXFwiYV9nXFxcIlwiIH0sXG4gICAgICAgICAgZnVuY3Rpb24odSkge3JldHVybiB7dmFsdWU6IDEsIHVuaXRzOiB7XCJhX2dcIjogMX19O30sXG4gICAgICAgICAgXCJMbWJcIixcbiAgICAgICAgICB7IHR5cGU6IFwibGl0ZXJhbFwiLCB2YWx1ZTogXCJMbWJcIiwgZGVzY3JpcHRpb246IFwiXFxcIkxtYlxcXCJcIiB9LFxuICAgICAgICAgIGZ1bmN0aW9uKHUpIHtyZXR1cm4ge3ZhbHVlOiAxLCB1bml0czoge1wiTG1iXCI6IDF9fTt9LFxuICAgICAgICAgIFwiYXRtXCIsXG4gICAgICAgICAgeyB0eXBlOiBcImxpdGVyYWxcIiwgdmFsdWU6IFwiYXRtXCIsIGRlc2NyaXB0aW9uOiBcIlxcXCJhdG1cXFwiXCIgfSxcbiAgICAgICAgICBmdW5jdGlvbih1KSB7cmV0dXJuIHt2YWx1ZTogMSwgdW5pdHM6IHtcImF0bVwiOiAxfX07fSxcbiAgICAgICAgICBcImVyZ1wiLFxuICAgICAgICAgIHsgdHlwZTogXCJsaXRlcmFsXCIsIHZhbHVlOiBcImVyZ1wiLCBkZXNjcmlwdGlvbjogXCJcXFwiZXJnXFxcIlwiIH0sXG4gICAgICAgICAgZnVuY3Rpb24odSkge3JldHVybiB7dmFsdWU6IDEsIHVuaXRzOiB7XCJlcmdcIjogMX19O30sXG4gICAgICAgICAgXCJkeW5cIixcbiAgICAgICAgICB7IHR5cGU6IFwibGl0ZXJhbFwiLCB2YWx1ZTogXCJkeW5cIiwgZGVzY3JpcHRpb246IFwiXFxcImR5blxcXCJcIiB9LFxuICAgICAgICAgIGZ1bmN0aW9uKHUpIHtyZXR1cm4ge3ZhbHVlOiAxLCB1bml0czoge1wiZHluXCI6IDF9fTt9LFxuICAgICAgICAgIFwiR2FsXCIsXG4gICAgICAgICAgeyB0eXBlOiBcImxpdGVyYWxcIiwgdmFsdWU6IFwiR2FsXCIsIGRlc2NyaXB0aW9uOiBcIlxcXCJHYWxcXFwiXCIgfSxcbiAgICAgICAgICBmdW5jdGlvbih1KSB7cmV0dXJuIHt2YWx1ZTogMSwgdW5pdHM6IHtcIkdhbFwiOiAxfX07fSxcbiAgICAgICAgICBcIjEwXlwiLFxuICAgICAgICAgIHsgdHlwZTogXCJsaXRlcmFsXCIsIHZhbHVlOiBcIjEwXlwiLCBkZXNjcmlwdGlvbjogXCJcXFwiMTBeXFxcIlwiIH0sXG4gICAgICAgICAgZnVuY3Rpb24odSkge3JldHVybiB7dmFsdWU6IDEsIHVuaXRzOiB7XCIxMF5cIjogMX19O30sXG4gICAgICAgICAgXCIxMCpcIixcbiAgICAgICAgICB7IHR5cGU6IFwibGl0ZXJhbFwiLCB2YWx1ZTogXCIxMCpcIiwgZGVzY3JpcHRpb246IFwiXFxcIjEwKlxcXCJcIiB9LFxuICAgICAgICAgIGZ1bmN0aW9uKHUpIHtyZXR1cm4ge3ZhbHVlOiAxLCB1bml0czoge1wiMTAqXCI6IDF9fTt9LFxuICAgICAgICAgIFwiW1NdXCIsXG4gICAgICAgICAgeyB0eXBlOiBcImxpdGVyYWxcIiwgdmFsdWU6IFwiW1NdXCIsIGRlc2NyaXB0aW9uOiBcIlxcXCJbU11cXFwiXCIgfSxcbiAgICAgICAgICBmdW5jdGlvbih1KSB7cmV0dXJuIHt2YWx1ZTogMSwgdW5pdHM6IHtcIltTXVwiOiAxfX07fSxcbiAgICAgICAgICBcIltnXVwiLFxuICAgICAgICAgIHsgdHlwZTogXCJsaXRlcmFsXCIsIHZhbHVlOiBcIltnXVwiLCBkZXNjcmlwdGlvbjogXCJcXFwiW2ddXFxcIlwiIH0sXG4gICAgICAgICAgZnVuY3Rpb24odSkge3JldHVybiB7dmFsdWU6IDEsIHVuaXRzOiB7XCJbZ11cIjogMX19O30sXG4gICAgICAgICAgXCJbR11cIixcbiAgICAgICAgICB7IHR5cGU6IFwibGl0ZXJhbFwiLCB2YWx1ZTogXCJbR11cIiwgZGVzY3JpcHRpb246IFwiXFxcIltHXVxcXCJcIiB9LFxuICAgICAgICAgIGZ1bmN0aW9uKHUpIHtyZXR1cm4ge3ZhbHVlOiAxLCB1bml0czoge1wiW0ddXCI6IDF9fTt9LFxuICAgICAgICAgIFwiW2VdXCIsXG4gICAgICAgICAgeyB0eXBlOiBcImxpdGVyYWxcIiwgdmFsdWU6IFwiW2VdXCIsIGRlc2NyaXB0aW9uOiBcIlxcXCJbZV1cXFwiXCIgfSxcbiAgICAgICAgICBmdW5jdGlvbih1KSB7cmV0dXJuIHt2YWx1ZTogMSwgdW5pdHM6IHtcIltlXVwiOiAxfX07fSxcbiAgICAgICAgICBcIltrXVwiLFxuICAgICAgICAgIHsgdHlwZTogXCJsaXRlcmFsXCIsIHZhbHVlOiBcIltrXVwiLCBkZXNjcmlwdGlvbjogXCJcXFwiW2tdXFxcIlwiIH0sXG4gICAgICAgICAgZnVuY3Rpb24odSkge3JldHVybiB7dmFsdWU6IDEsIHVuaXRzOiB7XCJba11cIjogMX19O30sXG4gICAgICAgICAgXCJbaF1cIixcbiAgICAgICAgICB7IHR5cGU6IFwibGl0ZXJhbFwiLCB2YWx1ZTogXCJbaF1cIiwgZGVzY3JpcHRpb246IFwiXFxcIltoXVxcXCJcIiB9LFxuICAgICAgICAgIGZ1bmN0aW9uKHUpIHtyZXR1cm4ge3ZhbHVlOiAxLCB1bml0czoge1wiW2hdXCI6IDF9fTt9LFxuICAgICAgICAgIFwiW2NdXCIsXG4gICAgICAgICAgeyB0eXBlOiBcImxpdGVyYWxcIiwgdmFsdWU6IFwiW2NdXCIsIGRlc2NyaXB0aW9uOiBcIlxcXCJbY11cXFwiXCIgfSxcbiAgICAgICAgICBmdW5jdGlvbih1KSB7cmV0dXJuIHt2YWx1ZTogMSwgdW5pdHM6IHtcIltjXVwiOiAxfX07fSxcbiAgICAgICAgICBcImJhclwiLFxuICAgICAgICAgIHsgdHlwZTogXCJsaXRlcmFsXCIsIHZhbHVlOiBcImJhclwiLCBkZXNjcmlwdGlvbjogXCJcXFwiYmFyXFxcIlwiIH0sXG4gICAgICAgICAgZnVuY3Rpb24odSkge3JldHVybiB7dmFsdWU6IDEsIHVuaXRzOiB7XCJiYXJcIjogMX19O30sXG4gICAgICAgICAgXCJsbVwiLFxuICAgICAgICAgIHsgdHlwZTogXCJsaXRlcmFsXCIsIHZhbHVlOiBcImxtXCIsIGRlc2NyaXB0aW9uOiBcIlxcXCJsbVxcXCJcIiB9LFxuICAgICAgICAgIGZ1bmN0aW9uKHUpIHtyZXR1cm4ge3ZhbHVlOiAxLCB1bml0czoge1wibG1cIjogMX19O30sXG4gICAgICAgICAgXCJDaVwiLFxuICAgICAgICAgIHsgdHlwZTogXCJsaXRlcmFsXCIsIHZhbHVlOiBcIkNpXCIsIGRlc2NyaXB0aW9uOiBcIlxcXCJDaVxcXCJcIiB9LFxuICAgICAgICAgIGZ1bmN0aW9uKHUpIHtyZXR1cm4ge3ZhbHVlOiAxLCB1bml0czoge1wiQ2lcIjogMX19O30sXG4gICAgICAgICAgXCJwaFwiLFxuICAgICAgICAgIHsgdHlwZTogXCJsaXRlcmFsXCIsIHZhbHVlOiBcInBoXCIsIGRlc2NyaXB0aW9uOiBcIlxcXCJwaFxcXCJcIiB9LFxuICAgICAgICAgIGZ1bmN0aW9uKHUpIHtyZXR1cm4ge3ZhbHVlOiAxLCB1bml0czoge1wicGhcIjogMX19O30sXG4gICAgICAgICAgXCJjZFwiLFxuICAgICAgICAgIHsgdHlwZTogXCJsaXRlcmFsXCIsIHZhbHVlOiBcImNkXCIsIGRlc2NyaXB0aW9uOiBcIlxcXCJjZFxcXCJcIiB9LFxuICAgICAgICAgIGZ1bmN0aW9uKHUpIHtyZXR1cm4ge3ZhbHVlOiAxLCB1bml0czoge1wiY2RcIjogMX19O30sXG4gICAgICAgICAgXCJBb1wiLFxuICAgICAgICAgIHsgdHlwZTogXCJsaXRlcmFsXCIsIHZhbHVlOiBcIkFvXCIsIGRlc2NyaXB0aW9uOiBcIlxcXCJBb1xcXCJcIiB9LFxuICAgICAgICAgIGZ1bmN0aW9uKHUpIHtyZXR1cm4ge3ZhbHVlOiAxLCB1bml0czoge1wiQW9cIjogMX19O30sXG4gICAgICAgICAgXCJXYlwiLFxuICAgICAgICAgIHsgdHlwZTogXCJsaXRlcmFsXCIsIHZhbHVlOiBcIldiXCIsIGRlc2NyaXB0aW9uOiBcIlxcXCJXYlxcXCJcIiB9LFxuICAgICAgICAgIGZ1bmN0aW9uKHUpIHtyZXR1cm4ge3ZhbHVlOiAxLCB1bml0czoge1wiV2JcIjogMX19O30sXG4gICAgICAgICAgXCJHYlwiLFxuICAgICAgICAgIHsgdHlwZTogXCJsaXRlcmFsXCIsIHZhbHVlOiBcIkdiXCIsIGRlc2NyaXB0aW9uOiBcIlxcXCJHYlxcXCJcIiB9LFxuICAgICAgICAgIGZ1bmN0aW9uKHUpIHtyZXR1cm4ge3ZhbHVlOiAxLCB1bml0czoge1wiR2JcIjogMX19O30sXG4gICAgICAgICAgXCJPZVwiLFxuICAgICAgICAgIHsgdHlwZTogXCJsaXRlcmFsXCIsIHZhbHVlOiBcIk9lXCIsIGRlc2NyaXB0aW9uOiBcIlxcXCJPZVxcXCJcIiB9LFxuICAgICAgICAgIGZ1bmN0aW9uKHUpIHtyZXR1cm4ge3ZhbHVlOiAxLCB1bml0czoge1wiT2VcIjogMX19O30sXG4gICAgICAgICAgXCJseFwiLFxuICAgICAgICAgIHsgdHlwZTogXCJsaXRlcmFsXCIsIHZhbHVlOiBcImx4XCIsIGRlc2NyaXB0aW9uOiBcIlxcXCJseFxcXCJcIiB9LFxuICAgICAgICAgIGZ1bmN0aW9uKHUpIHtyZXR1cm4ge3ZhbHVlOiAxLCB1bml0czoge1wibHhcIjogMX19O30sXG4gICAgICAgICAgXCJNeFwiLFxuICAgICAgICAgIHsgdHlwZTogXCJsaXRlcmFsXCIsIHZhbHVlOiBcIk14XCIsIGRlc2NyaXB0aW9uOiBcIlxcXCJNeFxcXCJcIiB9LFxuICAgICAgICAgIGZ1bmN0aW9uKHUpIHtyZXR1cm4ge3ZhbHVlOiAxLCB1bml0czoge1wiTXhcIjogMX19O30sXG4gICAgICAgICAgXCJTdFwiLFxuICAgICAgICAgIHsgdHlwZTogXCJsaXRlcmFsXCIsIHZhbHVlOiBcIlN0XCIsIGRlc2NyaXB0aW9uOiBcIlxcXCJTdFxcXCJcIiB9LFxuICAgICAgICAgIGZ1bmN0aW9uKHUpIHtyZXR1cm4ge3ZhbHVlOiAxLCB1bml0czoge1wiU3RcIjogMX19O30sXG4gICAgICAgICAgXCJCaVwiLFxuICAgICAgICAgIHsgdHlwZTogXCJsaXRlcmFsXCIsIHZhbHVlOiBcIkJpXCIsIGRlc2NyaXB0aW9uOiBcIlxcXCJCaVxcXCJcIiB9LFxuICAgICAgICAgIGZ1bmN0aW9uKHUpIHtyZXR1cm4ge3ZhbHVlOiAxLCB1bml0czoge1wiQmlcIjogMX19O30sXG4gICAgICAgICAgXCJCcVwiLFxuICAgICAgICAgIHsgdHlwZTogXCJsaXRlcmFsXCIsIHZhbHVlOiBcIkJxXCIsIGRlc2NyaXB0aW9uOiBcIlxcXCJCcVxcXCJcIiB9LFxuICAgICAgICAgIGZ1bmN0aW9uKHUpIHtyZXR1cm4ge3ZhbHVlOiAxLCB1bml0czoge1wiQnFcIjogMX19O30sXG4gICAgICAgICAgXCJOcFwiLFxuICAgICAgICAgIHsgdHlwZTogXCJsaXRlcmFsXCIsIHZhbHVlOiBcIk5wXCIsIGRlc2NyaXB0aW9uOiBcIlxcXCJOcFxcXCJcIiB9LFxuICAgICAgICAgIGZ1bmN0aW9uKHUpIHtyZXR1cm4ge3ZhbHVlOiAxLCB1bml0czoge1wiTnBcIjogMX19O30sXG4gICAgICAgICAgXCJBVVwiLFxuICAgICAgICAgIHsgdHlwZTogXCJsaXRlcmFsXCIsIHZhbHVlOiBcIkFVXCIsIGRlc2NyaXB0aW9uOiBcIlxcXCJBVVxcXCJcIiB9LFxuICAgICAgICAgIGZ1bmN0aW9uKHUpIHtyZXR1cm4ge3ZhbHVlOiAxLCB1bml0czoge1wiQVVcIjogMX19O30sXG4gICAgICAgICAgXCJtb1wiLFxuICAgICAgICAgIHsgdHlwZTogXCJsaXRlcmFsXCIsIHZhbHVlOiBcIm1vXCIsIGRlc2NyaXB0aW9uOiBcIlxcXCJtb1xcXCJcIiB9LFxuICAgICAgICAgIGZ1bmN0aW9uKHUpIHtyZXR1cm4ge3ZhbHVlOiAxLCB1bml0czoge1wibW9cIjogMX19O30sXG4gICAgICAgICAgXCJLeVwiLFxuICAgICAgICAgIHsgdHlwZTogXCJsaXRlcmFsXCIsIHZhbHVlOiBcIkt5XCIsIGRlc2NyaXB0aW9uOiBcIlxcXCJLeVxcXCJcIiB9LFxuICAgICAgICAgIGZ1bmN0aW9uKHUpIHtyZXR1cm4ge3ZhbHVlOiAxLCB1bml0czoge1wiS3lcIjogMX19O30sXG4gICAgICAgICAgXCJnZlwiLFxuICAgICAgICAgIHsgdHlwZTogXCJsaXRlcmFsXCIsIHZhbHVlOiBcImdmXCIsIGRlc2NyaXB0aW9uOiBcIlxcXCJnZlxcXCJcIiB9LFxuICAgICAgICAgIGZ1bmN0aW9uKHUpIHtyZXR1cm4ge3ZhbHVlOiAxLCB1bml0czoge1wiZ2ZcIjogMX19O30sXG4gICAgICAgICAgXCJ3a1wiLFxuICAgICAgICAgIHsgdHlwZTogXCJsaXRlcmFsXCIsIHZhbHVlOiBcIndrXCIsIGRlc2NyaXB0aW9uOiBcIlxcXCJ3a1xcXCJcIiB9LFxuICAgICAgICAgIGZ1bmN0aW9uKHUpIHtyZXR1cm4ge3ZhbHVlOiAxLCB1bml0czoge1wid2tcIjogMX19O30sXG4gICAgICAgICAgXCJQYVwiLFxuICAgICAgICAgIHsgdHlwZTogXCJsaXRlcmFsXCIsIHZhbHVlOiBcIlBhXCIsIGRlc2NyaXB0aW9uOiBcIlxcXCJQYVxcXCJcIiB9LFxuICAgICAgICAgIGZ1bmN0aW9uKHUpIHtyZXR1cm4ge3ZhbHVlOiAxLCB1bml0czoge1wiUGFcIjogMX19O30sXG4gICAgICAgICAgXCJnJVwiLFxuICAgICAgICAgIHsgdHlwZTogXCJsaXRlcmFsXCIsIHZhbHVlOiBcImclXCIsIGRlc2NyaXB0aW9uOiBcIlxcXCJnJVxcXCJcIiB9LFxuICAgICAgICAgIGZ1bmN0aW9uKHUpIHtyZXR1cm4ge3ZhbHVlOiAxLCB1bml0czoge1wiZyVcIjogMX19O30sXG4gICAgICAgICAgXCJzclwiLFxuICAgICAgICAgIHsgdHlwZTogXCJsaXRlcmFsXCIsIHZhbHVlOiBcInNyXCIsIGRlc2NyaXB0aW9uOiBcIlxcXCJzclxcXCJcIiB9LFxuICAgICAgICAgIGZ1bmN0aW9uKHUpIHtyZXR1cm4ge3ZhbHVlOiAxLCB1bml0czoge1wic3JcIjogMX19O30sXG4gICAgICAgICAgXCJCZFwiLFxuICAgICAgICAgIHsgdHlwZTogXCJsaXRlcmFsXCIsIHZhbHVlOiBcIkJkXCIsIGRlc2NyaXB0aW9uOiBcIlxcXCJCZFxcXCJcIiB9LFxuICAgICAgICAgIGZ1bmN0aW9uKHUpIHtyZXR1cm4ge3ZhbHVlOiAxLCB1bml0czoge1wiQmRcIjogMX19O30sXG4gICAgICAgICAgXCJlcVwiLFxuICAgICAgICAgIHsgdHlwZTogXCJsaXRlcmFsXCIsIHZhbHVlOiBcImVxXCIsIGRlc2NyaXB0aW9uOiBcIlxcXCJlcVxcXCJcIiB9LFxuICAgICAgICAgIGZ1bmN0aW9uKHUpIHtyZXR1cm4ge3ZhbHVlOiAxLCB1bml0czoge1wiZXFcIjogMX19O30sXG4gICAgICAgICAgXCJCeVwiLFxuICAgICAgICAgIHsgdHlwZTogXCJsaXRlcmFsXCIsIHZhbHVlOiBcIkJ5XCIsIGRlc2NyaXB0aW9uOiBcIlxcXCJCeVxcXCJcIiB9LFxuICAgICAgICAgIGZ1bmN0aW9uKHUpIHtyZXR1cm4ge3ZhbHVlOiAxLCB1bml0czoge1wiQnlcIjogMX19O30sXG4gICAgICAgICAgXCJIelwiLFxuICAgICAgICAgIHsgdHlwZTogXCJsaXRlcmFsXCIsIHZhbHVlOiBcIkh6XCIsIGRlc2NyaXB0aW9uOiBcIlxcXCJIelxcXCJcIiB9LFxuICAgICAgICAgIGZ1bmN0aW9uKHUpIHtyZXR1cm4ge3ZhbHVlOiAxLCB1bml0czoge1wiSHpcIjogMX19O30sXG4gICAgICAgICAgXCInJ1wiLFxuICAgICAgICAgIHsgdHlwZTogXCJsaXRlcmFsXCIsIHZhbHVlOiBcIicnXCIsIGRlc2NyaXB0aW9uOiBcIlxcXCInJ1xcXCJcIiB9LFxuICAgICAgICAgIGZ1bmN0aW9uKHUpIHtyZXR1cm4ge3ZhbHVlOiAxLCB1bml0czoge1wiJydcIjogMX19O30sXG4gICAgICAgICAgXCJwY1wiLFxuICAgICAgICAgIHsgdHlwZTogXCJsaXRlcmFsXCIsIHZhbHVlOiBcInBjXCIsIGRlc2NyaXB0aW9uOiBcIlxcXCJwY1xcXCJcIiB9LFxuICAgICAgICAgIGZ1bmN0aW9uKHUpIHtyZXR1cm4ge3ZhbHVlOiAxLCB1bml0czoge1wicGNcIjogMX19O30sXG4gICAgICAgICAgXCJlVlwiLFxuICAgICAgICAgIHsgdHlwZTogXCJsaXRlcmFsXCIsIHZhbHVlOiBcImVWXCIsIGRlc2NyaXB0aW9uOiBcIlxcXCJlVlxcXCJcIiB9LFxuICAgICAgICAgIGZ1bmN0aW9uKHUpIHtyZXR1cm4ge3ZhbHVlOiAxLCB1bml0czoge1wiZVZcIjogMX19O30sXG4gICAgICAgICAgXCJHeVwiLFxuICAgICAgICAgIHsgdHlwZTogXCJsaXRlcmFsXCIsIHZhbHVlOiBcIkd5XCIsIGRlc2NyaXB0aW9uOiBcIlxcXCJHeVxcXCJcIiB9LFxuICAgICAgICAgIGZ1bmN0aW9uKHUpIHtyZXR1cm4ge3ZhbHVlOiAxLCB1bml0czoge1wiR3lcIjogMX19O30sXG4gICAgICAgICAgXCJzdFwiLFxuICAgICAgICAgIHsgdHlwZTogXCJsaXRlcmFsXCIsIHZhbHVlOiBcInN0XCIsIGRlc2NyaXB0aW9uOiBcIlxcXCJzdFxcXCJcIiB9LFxuICAgICAgICAgIGZ1bmN0aW9uKHUpIHtyZXR1cm4ge3ZhbHVlOiAxLCB1bml0czoge1wic3RcIjogMX19O30sXG4gICAgICAgICAgXCJTdlwiLFxuICAgICAgICAgIHsgdHlwZTogXCJsaXRlcmFsXCIsIHZhbHVlOiBcIlN2XCIsIGRlc2NyaXB0aW9uOiBcIlxcXCJTdlxcXCJcIiB9LFxuICAgICAgICAgIGZ1bmN0aW9uKHUpIHtyZXR1cm4ge3ZhbHVlOiAxLCB1bml0czoge1wiU3ZcIjogMX19O30sXG4gICAgICAgICAgXCJhclwiLFxuICAgICAgICAgIHsgdHlwZTogXCJsaXRlcmFsXCIsIHZhbHVlOiBcImFyXCIsIGRlc2NyaXB0aW9uOiBcIlxcXCJhclxcXCJcIiB9LFxuICAgICAgICAgIGZ1bmN0aW9uKHUpIHtyZXR1cm4ge3ZhbHVlOiAxLCB1bml0czoge1wiYXJcIjogMX19O30sXG4gICAgICAgICAgXCJzYlwiLFxuICAgICAgICAgIHsgdHlwZTogXCJsaXRlcmFsXCIsIHZhbHVlOiBcInNiXCIsIGRlc2NyaXB0aW9uOiBcIlxcXCJzYlxcXCJcIiB9LFxuICAgICAgICAgIGZ1bmN0aW9uKHUpIHtyZXR1cm4ge3ZhbHVlOiAxLCB1bml0czoge1wic2JcIjogMX19O30sXG4gICAgICAgICAgXCJMXCIsXG4gICAgICAgICAgeyB0eXBlOiBcImxpdGVyYWxcIiwgdmFsdWU6IFwiTFwiLCBkZXNjcmlwdGlvbjogXCJcXFwiTFxcXCJcIiB9LFxuICAgICAgICAgIGZ1bmN0aW9uKHUpIHtyZXR1cm4ge3ZhbHVlOiAxLCB1bml0czoge1wiTFwiOiAxfX07fSxcbiAgICAgICAgICBcInRcIixcbiAgICAgICAgICB7IHR5cGU6IFwibGl0ZXJhbFwiLCB2YWx1ZTogXCJ0XCIsIGRlc2NyaXB0aW9uOiBcIlxcXCJ0XFxcIlwiIH0sXG4gICAgICAgICAgZnVuY3Rpb24odSkge3JldHVybiB7dmFsdWU6IDEsIHVuaXRzOiB7XCJ0XCI6IDF9fTt9LFxuICAgICAgICAgIFwidVwiLFxuICAgICAgICAgIHsgdHlwZTogXCJsaXRlcmFsXCIsIHZhbHVlOiBcInVcIiwgZGVzY3JpcHRpb246IFwiXFxcInVcXFwiXCIgfSxcbiAgICAgICAgICBmdW5jdGlvbih1KSB7cmV0dXJuIHt2YWx1ZTogMSwgdW5pdHM6IHtcInVcIjogMX19O30sXG4gICAgICAgICAgXCJQXCIsXG4gICAgICAgICAgeyB0eXBlOiBcImxpdGVyYWxcIiwgdmFsdWU6IFwiUFwiLCBkZXNjcmlwdGlvbjogXCJcXFwiUFxcXCJcIiB9LFxuICAgICAgICAgIGZ1bmN0aW9uKHUpIHtyZXR1cm4ge3ZhbHVlOiAxLCB1bml0czoge1wiUFwiOiAxfX07fSxcbiAgICAgICAgICBcIkdcIixcbiAgICAgICAgICB7IHR5cGU6IFwibGl0ZXJhbFwiLCB2YWx1ZTogXCJHXCIsIGRlc2NyaXB0aW9uOiBcIlxcXCJHXFxcIlwiIH0sXG4gICAgICAgICAgZnVuY3Rpb24odSkge3JldHVybiB7dmFsdWU6IDEsIHVuaXRzOiB7XCJHXCI6IDF9fTt9LFxuICAgICAgICAgIFwiUlwiLFxuICAgICAgICAgIHsgdHlwZTogXCJsaXRlcmFsXCIsIHZhbHVlOiBcIlJcIiwgZGVzY3JpcHRpb246IFwiXFxcIlJcXFwiXCIgfSxcbiAgICAgICAgICBmdW5jdGlvbih1KSB7cmV0dXJuIHt2YWx1ZTogMSwgdW5pdHM6IHtcIlJcIjogMX19O30sXG4gICAgICAgICAgXCJIXCIsXG4gICAgICAgICAgeyB0eXBlOiBcImxpdGVyYWxcIiwgdmFsdWU6IFwiSFwiLCBkZXNjcmlwdGlvbjogXCJcXFwiSFxcXCJcIiB9LFxuICAgICAgICAgIGZ1bmN0aW9uKHUpIHtyZXR1cm4ge3ZhbHVlOiAxLCB1bml0czoge1wiSFwiOiAxfX07fSxcbiAgICAgICAgICBcIlRcIixcbiAgICAgICAgICB7IHR5cGU6IFwibGl0ZXJhbFwiLCB2YWx1ZTogXCJUXCIsIGRlc2NyaXB0aW9uOiBcIlxcXCJUXFxcIlwiIH0sXG4gICAgICAgICAgZnVuY3Rpb24odSkge3JldHVybiB7dmFsdWU6IDEsIHVuaXRzOiB7XCJUXCI6IDF9fTt9LFxuICAgICAgICAgIFwiVVwiLFxuICAgICAgICAgIHsgdHlwZTogXCJsaXRlcmFsXCIsIHZhbHVlOiBcIlVcIiwgZGVzY3JpcHRpb246IFwiXFxcIlVcXFwiXCIgfSxcbiAgICAgICAgICBmdW5jdGlvbih1KSB7cmV0dXJuIHt2YWx1ZTogMSwgdW5pdHM6IHtcIlVcIjogMX19O30sXG4gICAgICAgICAgXCJCXCIsXG4gICAgICAgICAgeyB0eXBlOiBcImxpdGVyYWxcIiwgdmFsdWU6IFwiQlwiLCBkZXNjcmlwdGlvbjogXCJcXFwiQlxcXCJcIiB9LFxuICAgICAgICAgIGZ1bmN0aW9uKHUpIHtyZXR1cm4ge3ZhbHVlOiAxLCB1bml0czoge1wiQlwiOiAxfX07fSxcbiAgICAgICAgICBcIlNcIixcbiAgICAgICAgICB7IHR5cGU6IFwibGl0ZXJhbFwiLCB2YWx1ZTogXCJTXCIsIGRlc2NyaXB0aW9uOiBcIlxcXCJTXFxcIlwiIH0sXG4gICAgICAgICAgZnVuY3Rpb24odSkge3JldHVybiB7dmFsdWU6IDEsIHVuaXRzOiB7XCJTXCI6IDF9fTt9LFxuICAgICAgICAgIFwibVwiLFxuICAgICAgICAgIHsgdHlwZTogXCJsaXRlcmFsXCIsIHZhbHVlOiBcIm1cIiwgZGVzY3JpcHRpb246IFwiXFxcIm1cXFwiXCIgfSxcbiAgICAgICAgICBmdW5jdGlvbih1KSB7cmV0dXJuIHt2YWx1ZTogMSwgdW5pdHM6IHtcIm1cIjogMX19O30sXG4gICAgICAgICAgXCJzXCIsXG4gICAgICAgICAgeyB0eXBlOiBcImxpdGVyYWxcIiwgdmFsdWU6IFwic1wiLCBkZXNjcmlwdGlvbjogXCJcXFwic1xcXCJcIiB9LFxuICAgICAgICAgIGZ1bmN0aW9uKHUpIHtyZXR1cm4ge3ZhbHVlOiAxLCB1bml0czoge1wic1wiOiAxfX07fSxcbiAgICAgICAgICBcIkZcIixcbiAgICAgICAgICB7IHR5cGU6IFwibGl0ZXJhbFwiLCB2YWx1ZTogXCJGXCIsIGRlc2NyaXB0aW9uOiBcIlxcXCJGXFxcIlwiIH0sXG4gICAgICAgICAgZnVuY3Rpb24odSkge3JldHVybiB7dmFsdWU6IDEsIHVuaXRzOiB7XCJGXCI6IDF9fTt9LFxuICAgICAgICAgIFwibFwiLFxuICAgICAgICAgIHsgdHlwZTogXCJsaXRlcmFsXCIsIHZhbHVlOiBcImxcIiwgZGVzY3JpcHRpb246IFwiXFxcImxcXFwiXCIgfSxcbiAgICAgICAgICBmdW5jdGlvbih1KSB7cmV0dXJuIHt2YWx1ZTogMSwgdW5pdHM6IHtcImxcIjogMX19O30sXG4gICAgICAgICAgXCJWXCIsXG4gICAgICAgICAgeyB0eXBlOiBcImxpdGVyYWxcIiwgdmFsdWU6IFwiVlwiLCBkZXNjcmlwdGlvbjogXCJcXFwiVlxcXCJcIiB9LFxuICAgICAgICAgIGZ1bmN0aW9uKHUpIHtyZXR1cm4ge3ZhbHVlOiAxLCB1bml0czoge1wiVlwiOiAxfX07fSxcbiAgICAgICAgICBcIkFcIixcbiAgICAgICAgICB7IHR5cGU6IFwibGl0ZXJhbFwiLCB2YWx1ZTogXCJBXCIsIGRlc2NyaXB0aW9uOiBcIlxcXCJBXFxcIlwiIH0sXG4gICAgICAgICAgZnVuY3Rpb24odSkge3JldHVybiB7dmFsdWU6IDEsIHVuaXRzOiB7XCJBXCI6IDF9fTt9LFxuICAgICAgICAgIFwiV1wiLFxuICAgICAgICAgIHsgdHlwZTogXCJsaXRlcmFsXCIsIHZhbHVlOiBcIldcIiwgZGVzY3JpcHRpb246IFwiXFxcIldcXFwiXCIgfSxcbiAgICAgICAgICBmdW5jdGlvbih1KSB7cmV0dXJuIHt2YWx1ZTogMSwgdW5pdHM6IHtcIldcIjogMX19O30sXG4gICAgICAgICAgXCJLXCIsXG4gICAgICAgICAgeyB0eXBlOiBcImxpdGVyYWxcIiwgdmFsdWU6IFwiS1wiLCBkZXNjcmlwdGlvbjogXCJcXFwiS1xcXCJcIiB9LFxuICAgICAgICAgIGZ1bmN0aW9uKHUpIHtyZXR1cm4ge3ZhbHVlOiAxLCB1bml0czoge1wiS1wiOiAxfX07fSxcbiAgICAgICAgICBcIkNcIixcbiAgICAgICAgICB7IHR5cGU6IFwibGl0ZXJhbFwiLCB2YWx1ZTogXCJDXCIsIGRlc2NyaXB0aW9uOiBcIlxcXCJDXFxcIlwiIH0sXG4gICAgICAgICAgZnVuY3Rpb24odSkge3JldHVybiB7dmFsdWU6IDEsIHVuaXRzOiB7XCJDXCI6IDF9fTt9LFxuICAgICAgICAgIFwiYlwiLFxuICAgICAgICAgIHsgdHlwZTogXCJsaXRlcmFsXCIsIHZhbHVlOiBcImJcIiwgZGVzY3JpcHRpb246IFwiXFxcImJcXFwiXCIgfSxcbiAgICAgICAgICBmdW5jdGlvbih1KSB7cmV0dXJuIHt2YWx1ZTogMSwgdW5pdHM6IHtcImJcIjogMX19O30sXG4gICAgICAgICAgXCIlXCIsXG4gICAgICAgICAgeyB0eXBlOiBcImxpdGVyYWxcIiwgdmFsdWU6IFwiJVwiLCBkZXNjcmlwdGlvbjogXCJcXFwiJVxcXCJcIiB9LFxuICAgICAgICAgIGZ1bmN0aW9uKHUpIHtyZXR1cm4ge3ZhbHVlOiAxLCB1bml0czoge1wiJVwiOiAxfX07fSxcbiAgICAgICAgICBcIkpcIixcbiAgICAgICAgICB7IHR5cGU6IFwibGl0ZXJhbFwiLCB2YWx1ZTogXCJKXCIsIGRlc2NyaXB0aW9uOiBcIlxcXCJKXFxcIlwiIH0sXG4gICAgICAgICAgZnVuY3Rpb24odSkge3JldHVybiB7dmFsdWU6IDEsIHVuaXRzOiB7XCJKXCI6IDF9fTt9LFxuICAgICAgICAgIFwiJ1wiLFxuICAgICAgICAgIHsgdHlwZTogXCJsaXRlcmFsXCIsIHZhbHVlOiBcIidcIiwgZGVzY3JpcHRpb246IFwiXFxcIidcXFwiXCIgfSxcbiAgICAgICAgICBmdW5jdGlvbih1KSB7cmV0dXJuIHt2YWx1ZTogMSwgdW5pdHM6IHtcIidcIjogMX19O30sXG4gICAgICAgICAgXCJoXCIsXG4gICAgICAgICAgeyB0eXBlOiBcImxpdGVyYWxcIiwgdmFsdWU6IFwiaFwiLCBkZXNjcmlwdGlvbjogXCJcXFwiaFxcXCJcIiB9LFxuICAgICAgICAgIGZ1bmN0aW9uKHUpIHtyZXR1cm4ge3ZhbHVlOiAxLCB1bml0czoge1wiaFwiOiAxfX07fSxcbiAgICAgICAgICBcImRcIixcbiAgICAgICAgICB7IHR5cGU6IFwibGl0ZXJhbFwiLCB2YWx1ZTogXCJkXCIsIGRlc2NyaXB0aW9uOiBcIlxcXCJkXFxcIlwiIH0sXG4gICAgICAgICAgZnVuY3Rpb24odSkge3JldHVybiB7dmFsdWU6IDEsIHVuaXRzOiB7XCJkXCI6IDF9fTt9LFxuICAgICAgICAgIFwiTlwiLFxuICAgICAgICAgIHsgdHlwZTogXCJsaXRlcmFsXCIsIHZhbHVlOiBcIk5cIiwgZGVzY3JpcHRpb246IFwiXFxcIk5cXFwiXCIgfSxcbiAgICAgICAgICBmdW5jdGlvbih1KSB7cmV0dXJuIHt2YWx1ZTogMSwgdW5pdHM6IHtcIk5cIjogMX19O30sXG4gICAgICAgICAgXCJhXCIsXG4gICAgICAgICAgeyB0eXBlOiBcImxpdGVyYWxcIiwgdmFsdWU6IFwiYVwiLCBkZXNjcmlwdGlvbjogXCJcXFwiYVxcXCJcIiB9LFxuICAgICAgICAgIGZ1bmN0aW9uKHUpIHtyZXR1cm4ge3ZhbHVlOiAxLCB1bml0czoge1wiYVwiOiAxfX07fSxcbiAgICAgICAgICBcImdcIixcbiAgICAgICAgICB7IHR5cGU6IFwibGl0ZXJhbFwiLCB2YWx1ZTogXCJnXCIsIGRlc2NyaXB0aW9uOiBcIlxcXCJnXFxcIlwiIH0sXG4gICAgICAgICAgZnVuY3Rpb24odSkge3JldHVybiB7dmFsdWU6IDEsIHVuaXRzOiB7XCJnXCI6IDF9fTt9LFxuICAgICAgICAgIFwiWVwiLFxuICAgICAgICAgIHsgdHlwZTogXCJsaXRlcmFsXCIsIHZhbHVlOiBcIllcIiwgZGVzY3JpcHRpb246IFwiXFxcIllcXFwiXCIgfSxcbiAgICAgICAgICBcIlpcIixcbiAgICAgICAgICB7IHR5cGU6IFwibGl0ZXJhbFwiLCB2YWx1ZTogXCJaXCIsIGRlc2NyaXB0aW9uOiBcIlxcXCJaXFxcIlwiIH0sXG4gICAgICAgICAgXCJFXCIsXG4gICAgICAgICAgeyB0eXBlOiBcImxpdGVyYWxcIiwgdmFsdWU6IFwiRVwiLCBkZXNjcmlwdGlvbjogXCJcXFwiRVxcXCJcIiB9LFxuICAgICAgICAgIFwiTVwiLFxuICAgICAgICAgIHsgdHlwZTogXCJsaXRlcmFsXCIsIHZhbHVlOiBcIk1cIiwgZGVzY3JpcHRpb246IFwiXFxcIk1cXFwiXCIgfSxcbiAgICAgICAgICBcImtcIixcbiAgICAgICAgICB7IHR5cGU6IFwibGl0ZXJhbFwiLCB2YWx1ZTogXCJrXCIsIGRlc2NyaXB0aW9uOiBcIlxcXCJrXFxcIlwiIH0sXG4gICAgICAgICAgXCJkYVwiLFxuICAgICAgICAgIHsgdHlwZTogXCJsaXRlcmFsXCIsIHZhbHVlOiBcImRhXCIsIGRlc2NyaXB0aW9uOiBcIlxcXCJkYVxcXCJcIiB9LFxuICAgICAgICAgIFwiY1wiLFxuICAgICAgICAgIHsgdHlwZTogXCJsaXRlcmFsXCIsIHZhbHVlOiBcImNcIiwgZGVzY3JpcHRpb246IFwiXFxcImNcXFwiXCIgfSxcbiAgICAgICAgICBcIm5cIixcbiAgICAgICAgICB7IHR5cGU6IFwibGl0ZXJhbFwiLCB2YWx1ZTogXCJuXCIsIGRlc2NyaXB0aW9uOiBcIlxcXCJuXFxcIlwiIH0sXG4gICAgICAgICAgXCJwXCIsXG4gICAgICAgICAgeyB0eXBlOiBcImxpdGVyYWxcIiwgdmFsdWU6IFwicFwiLCBkZXNjcmlwdGlvbjogXCJcXFwicFxcXCJcIiB9LFxuICAgICAgICAgIFwiZlwiLFxuICAgICAgICAgIHsgdHlwZTogXCJsaXRlcmFsXCIsIHZhbHVlOiBcImZcIiwgZGVzY3JpcHRpb246IFwiXFxcImZcXFwiXCIgfSxcbiAgICAgICAgICBcInpcIixcbiAgICAgICAgICB7IHR5cGU6IFwibGl0ZXJhbFwiLCB2YWx1ZTogXCJ6XCIsIGRlc2NyaXB0aW9uOiBcIlxcXCJ6XFxcIlwiIH0sXG4gICAgICAgICAgXCJ5XCIsXG4gICAgICAgICAgeyB0eXBlOiBcImxpdGVyYWxcIiwgdmFsdWU6IFwieVwiLCBkZXNjcmlwdGlvbjogXCJcXFwieVxcXCJcIiB9LFxuICAgICAgICAgIFwiS2lcIixcbiAgICAgICAgICB7IHR5cGU6IFwibGl0ZXJhbFwiLCB2YWx1ZTogXCJLaVwiLCBkZXNjcmlwdGlvbjogXCJcXFwiS2lcXFwiXCIgfSxcbiAgICAgICAgICBcIk1pXCIsXG4gICAgICAgICAgeyB0eXBlOiBcImxpdGVyYWxcIiwgdmFsdWU6IFwiTWlcIiwgZGVzY3JpcHRpb246IFwiXFxcIk1pXFxcIlwiIH0sXG4gICAgICAgICAgXCJHaVwiLFxuICAgICAgICAgIHsgdHlwZTogXCJsaXRlcmFsXCIsIHZhbHVlOiBcIkdpXCIsIGRlc2NyaXB0aW9uOiBcIlxcXCJHaVxcXCJcIiB9LFxuICAgICAgICAgIFwiVGlcIixcbiAgICAgICAgICB7IHR5cGU6IFwibGl0ZXJhbFwiLCB2YWx1ZTogXCJUaVwiLCBkZXNjcmlwdGlvbjogXCJcXFwiVGlcXFwiXCIgfVxuICAgICAgICBdLFxuXG4gICAgICAgIHBlZyRieXRlY29kZSA9IFtcbiAgICAgICAgICBwZWckZGVjb2RlKFwiITchKycgNCE2ICEhICVcIiksXG4gICAgICAgICAgcGVnJGRlY29kZShcIiEuXFxcIlxcXCJcXFwiMlxcXCIzIysyJDcjKyglNFxcXCI2JFxcXCIhICUkXFxcIiMgIVxcXCIjICEqIyBcXFwiNyNcIiksXG4gICAgICAgICAgcGVnJGRlY29kZShcIiEuJVxcXCJcXFwiMiUzJistJDckKyMlJ1xcXCIlJFxcXCIjICFcXFwiIyAhKj4gXFxcIiEuXFxcIlxcXCJcXFwiMlxcXCIzIystJDckKyMlJ1xcXCIlJFxcXCIjICFcXFwiIyAhXCIpLFxuICAgICAgICAgIHBlZyRkZWNvZGUoXCIhNyQrOyQgJzdcXFwiLCMmN1xcXCJcXFwiKyklNFxcXCI2KFxcXCJcXFwiISAlJFxcXCIjICFcXFwiIyAhXCIpLFxuICAgICAgICAgIHBlZyRkZWNvZGUoXCIhNyUrYyQ3JiojIFxcXCIgKStTJSAnNyksIyY3KVxcXCIrQSU1NiogXFxcIlxcXCIhKSMjXFxcIiAhXFxcIiArKyklNCQ2LCRcXFwiI1xcXCIlJCQjICEkIyMgISRcXFwiIyAhXFxcIiMgISpFIFxcXCIhNygrOiQgJzcpLCMmNylcXFwiKyglNFxcXCI2LVxcXCIhISUkXFxcIiMgIVxcXCIjICFcIiksXG4gICAgICAgICAgcGVnJGRlY29kZShcIiE3JysnIDQhNi4hISAlKlkgXFxcIiEuL1xcXCJcXFwiMi8zMCtCJDcjKzglLjFcXFwiXFxcIjIxMzIrKCU0IzYzIyEhJSQjIyAhJFxcXCIjICFcXFwiIyAhKiMgXFxcIjcpXCIpLFxuICAgICAgICAgIHBlZyRkZWNvZGUoXCIhMDRcXFwiXFxcIjEhMzUqIyBcXFwiICkrMyQ3KCspJTRcXFwiNjZcXFwiXFxcIiEgJSRcXFwiIyAhXFxcIiMgIVwiKSxcbiAgICAgICAgICBwZWckZGVjb2RlKFwiITcrKiMgXFxcIiApK0skNyorQSU1NjcgXFxcIiEgKSMjXFxcIiAhXFxcIiArKyklNCM2OCNcXFwiXFxcIiElJCMjICEkXFxcIiMgIVxcXCIjICEqIyBcXFwiNypcIiksXG4gICAgICAgICAgcGVnJGRlY29kZShcIiEgJzA5XFxcIlxcXCIxITM6KywkLCkmMDlcXFwiXFxcIjEhMzpcXFwiXFxcIlxcXCIgIStpJC47XFxcIlxcXCIyOzM8KiMgXFxcIiApK1MlNyYqIyBcXFwiICkrQyU1Nj0gI1xcXCIhICkjI1xcXCIgIVxcXCIgKysqJTQkNj4kIyNcXFwiISUkJCMgISQjIyAhJFxcXCIjICFcXFwiIyAhXCIpLFxuICAgICAgICAgIHBlZyRkZWNvZGUoXCIhLj9cXFwiXFxcIjI/M0ArdCQgJzBBXFxcIlxcXCIxITNCKywkLCkmMEFcXFwiXFxcIjEhM0JcXFwiXFxcIlxcXCIgIStPJS5DXFxcIlxcXCIyQzNEKz8lNTZFICEhKSMjXFxcIiAhXFxcIiArKyglNCQ2RiQhXFxcIiUkJCMgISQjIyAhJFxcXCIjICFcXFwiIyAhXCIpLFxuICAgICAgICAgIHBlZyRkZWNvZGUoXCIhLkdcXFwiXFxcIjJHM0grJyA0ITZJISEgJSpcXHUxQ0NEIFxcXCIhLkpcXFwiXFxcIjJKM0srJyA0ITZMISEgJSpcXHUxQ0I1IFxcXCIhLk1cXFwiXFxcIjJNM04rJyA0ITZPISEgJSpcXHUxQzlEIFxcXCIhLlBcXFwiXFxcIjJQM1ErJyA0ITZSISEgJSpcXHUxQzg1IFxcXCIhLlNcXFwiXFxcIjJTM1QrJyA0ITZVISEgJSpcXHUxQzZEIFxcXCIhLlZcXFwiXFxcIjJWM1crJyA0ITZYISEgJSpcXHUxQzU1IFxcXCIhLllcXFwiXFxcIjJZM1orJyA0ITZbISEgJSpcXHUxQzNEIFxcXCIhLlxcXFxcXFwiXFxcIjJcXFxcM10rJyA0ITZeISEgJSpcXHUxQzI1IFxcXCIhLl9cXFwiXFxcIjJfM2ArJyA0ITZhISEgJSpcXHUxQzBEIFxcXCIhLmJcXFwiXFxcIjJiM2MrJyA0ITZkISEgJSpcXHUxQkY1IFxcXCIhLmVcXFwiXFxcIjJlM2YrJyA0ITZnISEgJSpcXHUxQkREIFxcXCIhLmhcXFwiXFxcIjJoM2krJyA0ITZqISEgJSpcXHUxQkM1IFxcXCIhLmtcXFwiXFxcIjJrM2wrJyA0ITZtISEgJSpcXHUxQkFEIFxcXCIhLm5cXFwiXFxcIjJuM28rJyA0ITZwISEgJSpcXHUxQjk1IFxcXCIhLnFcXFwiXFxcIjJxM3IrJyA0ITZzISEgJSpcXHUxQjdEIFxcXCIhLnRcXFwiXFxcIjJ0M3UrJyA0ITZ2ISEgJSpcXHUxQjY1IFxcXCIhLndcXFwiXFxcIjJ3M3grJyA0ITZ5ISEgJSpcXHUxQjREIFxcXCIhLnpcXFwiXFxcIjJ6M3srJyA0ITZ8ISEgJSpcXHUxQjM1IFxcXCIhLn1cXFwiXFxcIjJ9M34rJyA0ITZ/ISEgJSpcXHUxQjFEIFxcXCIhLlxceDgwXFxcIlxcXCIyXFx4ODAzXFx4ODErJyA0ITZcXHg4MiEhICUqXFx1MUIwNSBcXFwiIS5cXHg4M1xcXCJcXFwiMlxceDgzM1xceDg0KycgNCE2XFx4ODUhISAlKlxcdTFBRUQgXFxcIiEuXFx4ODZcXFwiXFxcIjJcXHg4NjNcXHg4NysnIDQhNlxceDg4ISEgJSpcXHUxQUQ1IFxcXCIhLlxceDg5XFxcIlxcXCIyXFx4ODkzXFx4OEErJyA0ITZcXHg4QiEhICUqXFx1MUFCRCBcXFwiIS5cXHg4Q1xcXCJcXFwiMlxceDhDM1xceDhEKycgNCE2XFx4OEUhISAlKlxcdTFBQTUgXFxcIiEuXFx4OEZcXFwiXFxcIjJcXHg4RjNcXHg5MCsnIDQhNlxceDkxISEgJSpcXHUxQThEIFxcXCIhLlxceDkyXFxcIlxcXCIyXFx4OTIzXFx4OTMrJyA0ITZcXHg5NCEhICUqXFx1MUE3NSBcXFwiIS5cXHg5NVxcXCJcXFwiMlxceDk1M1xceDk2KycgNCE2XFx4OTchISAlKlxcdTFBNUQgXFxcIiEuXFx4OThcXFwiXFxcIjJcXHg5ODNcXHg5OSsnIDQhNlxceDlBISEgJSpcXHUxQTQ1IFxcXCIhLlxceDlCXFxcIlxcXCIyXFx4OUIzXFx4OUMrJyA0ITZcXHg5RCEhICUqXFx1MUEyRCBcXFwiIS5cXHg5RVxcXCJcXFwiMlxceDlFM1xceDlGKycgNCE2XFx4QTAhISAlKlxcdTFBMTUgXFxcIiEuXFx4QTFcXFwiXFxcIjJcXHhBMTNcXHhBMisnIDQhNlxceEEzISEgJSpcXHUxOUZEIFxcXCIhLlxceEE0XFxcIlxcXCIyXFx4QTQzXFx4QTUrJyA0ITZcXHhBNiEhICUqXFx1MTlFNSBcXFwiIS5cXHhBN1xcXCJcXFwiMlxceEE3M1xceEE4KycgNCE2XFx4QTkhISAlKlxcdTE5Q0QgXFxcIiEuXFx4QUFcXFwiXFxcIjJcXHhBQTNcXHhBQisnIDQhNlxceEFDISEgJSpcXHUxOUI1IFxcXCIhLlxceEFEXFxcIlxcXCIyXFx4QUQzXFx4QUUrJyA0ITZcXHhBRiEhICUqXFx1MTk5RCBcXFwiIS5cXHhCMFxcXCJcXFwiMlxceEIwM1xceEIxKycgNCE2XFx4QjIhISAlKlxcdTE5ODUgXFxcIiEuXFx4QjNcXFwiXFxcIjJcXHhCMzNcXHhCNCsnIDQhNlxceEI1ISEgJSpcXHUxOTZEIFxcXCIhLlxceEI2XFxcIlxcXCIyXFx4QjYzXFx4QjcrJyA0ITZcXHhCOCEhICUqXFx1MTk1NSBcXFwiIS5cXHhCOVxcXCJcXFwiMlxceEI5M1xceEJBKycgNCE2XFx4QkIhISAlKlxcdTE5M0QgXFxcIiEuXFx4QkNcXFwiXFxcIjJcXHhCQzNcXHhCRCsnIDQhNlxceEJFISEgJSpcXHUxOTI1IFxcXCIhLlxceEJGXFxcIlxcXCIyXFx4QkYzXFx4QzArJyA0ITZcXHhDMSEhICUqXFx1MTkwRCBcXFwiIS5cXHhDMlxcXCJcXFwiMlxceEMyM1xceEMzKycgNCE2XFx4QzQhISAlKlxcdTE4RjUgXFxcIiEuXFx4QzVcXFwiXFxcIjJcXHhDNTNcXHhDNisnIDQhNlxceEM3ISEgJSpcXHUxOEREIFxcXCIhLlxceEM4XFxcIlxcXCIyXFx4QzgzXFx4QzkrJyA0ITZcXHhDQSEhICUqXFx1MThDNSBcXFwiIS5cXHhDQlxcXCJcXFwiMlxceENCM1xceENDKycgNCE2XFx4Q0QhISAlKlxcdTE4QUQgXFxcIiEuXFx4Q0VcXFwiXFxcIjJcXHhDRTNcXHhDRisnIDQhNlxceEQwISEgJSpcXHUxODk1IFxcXCIhLlxceEQxXFxcIlxcXCIyXFx4RDEzXFx4RDIrJyA0ITZcXHhEMyEhICUqXFx1MTg3RCBcXFwiIS5cXHhENFxcXCJcXFwiMlxceEQ0M1xceEQ1KycgNCE2XFx4RDYhISAlKlxcdTE4NjUgXFxcIiEuXFx4RDdcXFwiXFxcIjJcXHhENzNcXHhEOCsnIDQhNlxceEQ5ISEgJSpcXHUxODREIFxcXCIhLlxceERBXFxcIlxcXCIyXFx4REEzXFx4REIrJyA0ITZcXHhEQyEhICUqXFx1MTgzNSBcXFwiIS5cXHhERFxcXCJcXFwiMlxceEREM1xceERFKycgNCE2XFx4REYhISAlKlxcdTE4MUQgXFxcIiEuXFx4RTBcXFwiXFxcIjJcXHhFMDNcXHhFMSsnIDQhNlxceEUyISEgJSpcXHUxODA1IFxcXCIhLlxceEUzXFxcIlxcXCIyXFx4RTMzXFx4RTQrJyA0ITZcXHhFNSEhICUqXFx1MTdFRCBcXFwiIS5cXHhFNlxcXCJcXFwiMlxceEU2M1xceEU3KycgNCE2XFx4RTghISAlKlxcdTE3RDUgXFxcIiEuXFx4RTlcXFwiXFxcIjJcXHhFOTNcXHhFQSsnIDQhNlxceEVCISEgJSpcXHUxN0JEIFxcXCIhLlxceEVDXFxcIlxcXCIyXFx4RUMzXFx4RUQrJyA0ITZcXHhFRSEhICUqXFx1MTdBNSBcXFwiIS5cXHhFRlxcXCJcXFwiMlxceEVGM1xceEYwKycgNCE2XFx4RjEhISAlKlxcdTE3OEQgXFxcIiEuXFx4RjJcXFwiXFxcIjJcXHhGMjNcXHhGMysnIDQhNlxceEY0ISEgJSpcXHUxNzc1IFxcXCIhLlxceEY1XFxcIlxcXCIyXFx4RjUzXFx4RjYrJyA0ITZcXHhGNyEhICUqXFx1MTc1RCBcXFwiIS5cXHhGOFxcXCJcXFwiMlxceEY4M1xceEY5KycgNCE2XFx4RkEhISAlKlxcdTE3NDUgXFxcIiEuXFx4RkJcXFwiXFxcIjJcXHhGQjNcXHhGQysnIDQhNlxceEZEISEgJSpcXHUxNzJEIFxcXCIhLlxceEZFXFxcIlxcXCIyXFx4RkUzXFx4RkYrJyA0ITZcXHUwMTAwISEgJSpcXHUxNzE1IFxcXCIhLlxcdTAxMDFcXFwiXFxcIjJcXHUwMTAxM1xcdTAxMDIrJyA0ITZcXHUwMTAzISEgJSpcXHUxNkZEIFxcXCIhLlxcdTAxMDRcXFwiXFxcIjJcXHUwMTA0M1xcdTAxMDUrJyA0ITZcXHUwMTA2ISEgJSpcXHUxNkU1IFxcXCIhLlxcdTAxMDdcXFwiXFxcIjJcXHUwMTA3M1xcdTAxMDgrJyA0ITZcXHUwMTA5ISEgJSpcXHUxNkNEIFxcXCIhLlxcdTAxMEFcXFwiXFxcIjJcXHUwMTBBM1xcdTAxMEIrJyA0ITZcXHUwMTBDISEgJSpcXHUxNkI1IFxcXCIhLlxcdTAxMERcXFwiXFxcIjJcXHUwMTBEM1xcdTAxMEUrJyA0ITZcXHUwMTBGISEgJSpcXHUxNjlEIFxcXCIhLlxcdTAxMTBcXFwiXFxcIjJcXHUwMTEwM1xcdTAxMTErJyA0ITZcXHUwMTEyISEgJSpcXHUxNjg1IFxcXCIhLlxcdTAxMTNcXFwiXFxcIjJcXHUwMTEzM1xcdTAxMTQrJyA0ITZcXHUwMTE1ISEgJSpcXHUxNjZEIFxcXCIhLlxcdTAxMTZcXFwiXFxcIjJcXHUwMTE2M1xcdTAxMTcrJyA0ITZcXHUwMTE4ISEgJSpcXHUxNjU1IFxcXCIhLlxcdTAxMTlcXFwiXFxcIjJcXHUwMTE5M1xcdTAxMUErJyA0ITZcXHUwMTFCISEgJSpcXHUxNjNEIFxcXCIhLlxcdTAxMUNcXFwiXFxcIjJcXHUwMTFDM1xcdTAxMUQrJyA0ITZcXHUwMTFFISEgJSpcXHUxNjI1IFxcXCIhLlxcdTAxMUZcXFwiXFxcIjJcXHUwMTFGM1xcdTAxMjArJyA0ITZcXHUwMTIxISEgJSpcXHUxNjBEIFxcXCIhLlxcdTAxMjJcXFwiXFxcIjJcXHUwMTIyM1xcdTAxMjMrJyA0ITZcXHUwMTI0ISEgJSpcXHUxNUY1IFxcXCIhLlxcdTAxMjVcXFwiXFxcIjJcXHUwMTI1M1xcdTAxMjYrJyA0ITZcXHUwMTI3ISEgJSpcXHUxNUREIFxcXCIhLlxcdTAxMjhcXFwiXFxcIjJcXHUwMTI4M1xcdTAxMjkrJyA0ITZcXHUwMTJBISEgJSpcXHUxNUM1IFxcXCIhLlxcdTAxMkJcXFwiXFxcIjJcXHUwMTJCM1xcdTAxMkMrJyA0ITZcXHUwMTJEISEgJSpcXHUxNUFEIFxcXCIhLlxcdTAxMkVcXFwiXFxcIjJcXHUwMTJFM1xcdTAxMkYrJyA0ITZcXHUwMTMwISEgJSpcXHUxNTk1IFxcXCIhLlxcdTAxMzFcXFwiXFxcIjJcXHUwMTMxM1xcdTAxMzIrJyA0ITZcXHUwMTMzISEgJSpcXHUxNTdEIFxcXCIhLlxcdTAxMzRcXFwiXFxcIjJcXHUwMTM0M1xcdTAxMzUrJyA0ITZcXHUwMTM2ISEgJSpcXHUxNTY1IFxcXCIhLlxcdTAxMzdcXFwiXFxcIjJcXHUwMTM3M1xcdTAxMzgrJyA0ITZcXHUwMTM5ISEgJSpcXHUxNTREIFxcXCIhLlxcdTAxM0FcXFwiXFxcIjJcXHUwMTNBM1xcdTAxM0IrJyA0ITZcXHUwMTNDISEgJSpcXHUxNTM1IFxcXCIhLlxcdTAxM0RcXFwiXFxcIjJcXHUwMTNEM1xcdTAxM0UrJyA0ITZcXHUwMTNGISEgJSpcXHUxNTFEIFxcXCIhLlxcdTAxNDBcXFwiXFxcIjJcXHUwMTQwM1xcdTAxNDErJyA0ITZcXHUwMTQyISEgJSpcXHUxNTA1IFxcXCIhLlxcdTAxNDNcXFwiXFxcIjJcXHUwMTQzM1xcdTAxNDQrJyA0ITZcXHUwMTQ1ISEgJSpcXHUxNEVEIFxcXCIhLlxcdTAxNDZcXFwiXFxcIjJcXHUwMTQ2M1xcdTAxNDcrJyA0ITZcXHUwMTQ4ISEgJSpcXHUxNEQ1IFxcXCIhLlxcdTAxNDlcXFwiXFxcIjJcXHUwMTQ5M1xcdTAxNEErJyA0ITZcXHUwMTRCISEgJSpcXHUxNEJEIFxcXCIhLlxcdTAxNENcXFwiXFxcIjJcXHUwMTRDM1xcdTAxNEQrJyA0ITZcXHUwMTRFISEgJSpcXHUxNEE1IFxcXCIhLlxcdTAxNEZcXFwiXFxcIjJcXHUwMTRGM1xcdTAxNTArJyA0ITZcXHUwMTUxISEgJSpcXHUxNDhEIFxcXCIhLlxcdTAxNTJcXFwiXFxcIjJcXHUwMTUyM1xcdTAxNTMrJyA0ITZcXHUwMTU0ISEgJSpcXHUxNDc1IFxcXCIhLlxcdTAxNTVcXFwiXFxcIjJcXHUwMTU1M1xcdTAxNTYrJyA0ITZcXHUwMTU3ISEgJSpcXHUxNDVEIFxcXCIhLlxcdTAxNThcXFwiXFxcIjJcXHUwMTU4M1xcdTAxNTkrJyA0ITZcXHUwMTVBISEgJSpcXHUxNDQ1IFxcXCIhLlxcdTAxNUJcXFwiXFxcIjJcXHUwMTVCM1xcdTAxNUMrJyA0ITZcXHUwMTVEISEgJSpcXHUxNDJEIFxcXCIhLlxcdTAxNUVcXFwiXFxcIjJcXHUwMTVFM1xcdTAxNUYrJyA0ITZcXHUwMTYwISEgJSpcXHUxNDE1IFxcXCIhLlxcdTAxNjFcXFwiXFxcIjJcXHUwMTYxM1xcdTAxNjIrJyA0ITZcXHUwMTYzISEgJSpcXHUxM0ZEIFxcXCIhLlxcdTAxNjRcXFwiXFxcIjJcXHUwMTY0M1xcdTAxNjUrJyA0ITZcXHUwMTY2ISEgJSpcXHUxM0U1IFxcXCIhLlxcdTAxNjdcXFwiXFxcIjJcXHUwMTY3M1xcdTAxNjgrJyA0ITZcXHUwMTY5ISEgJSpcXHUxM0NEIFxcXCIhLlxcdTAxNkFcXFwiXFxcIjJcXHUwMTZBM1xcdTAxNkIrJyA0ITZcXHUwMTZDISEgJSpcXHUxM0I1IFxcXCIhLlxcdTAxNkRcXFwiXFxcIjJcXHUwMTZEM1xcdTAxNkUrJyA0ITZcXHUwMTZGISEgJSpcXHUxMzlEIFxcXCIhLlxcdTAxNzBcXFwiXFxcIjJcXHUwMTcwM1xcdTAxNzErJyA0ITZcXHUwMTcyISEgJSpcXHUxMzg1IFxcXCIhLlxcdTAxNzNcXFwiXFxcIjJcXHUwMTczM1xcdTAxNzQrJyA0ITZcXHUwMTc1ISEgJSpcXHUxMzZEIFxcXCIhLlxcdTAxNzZcXFwiXFxcIjJcXHUwMTc2M1xcdTAxNzcrJyA0ITZcXHUwMTc4ISEgJSpcXHUxMzU1IFxcXCIhLlxcdTAxNzlcXFwiXFxcIjJcXHUwMTc5M1xcdTAxN0ErJyA0ITZcXHUwMTdCISEgJSpcXHUxMzNEIFxcXCIhLlxcdTAxN0NcXFwiXFxcIjJcXHUwMTdDM1xcdTAxN0QrJyA0ITZcXHUwMTdFISEgJSpcXHUxMzI1IFxcXCIhLlxcdTAxN0ZcXFwiXFxcIjJcXHUwMTdGM1xcdTAxODArJyA0ITZcXHUwMTgxISEgJSpcXHUxMzBEIFxcXCIhLlxcdTAxODJcXFwiXFxcIjJcXHUwMTgyM1xcdTAxODMrJyA0ITZcXHUwMTg0ISEgJSpcXHUxMkY1IFxcXCIhLlxcdTAxODVcXFwiXFxcIjJcXHUwMTg1M1xcdTAxODYrJyA0ITZcXHUwMTg3ISEgJSpcXHUxMkREIFxcXCIhLlxcdTAxODhcXFwiXFxcIjJcXHUwMTg4M1xcdTAxODkrJyA0ITZcXHUwMThBISEgJSpcXHUxMkM1IFxcXCIhLlxcdTAxOEJcXFwiXFxcIjJcXHUwMThCM1xcdTAxOEMrJyA0ITZcXHUwMThEISEgJSpcXHUxMkFEIFxcXCIhLlxcdTAxOEVcXFwiXFxcIjJcXHUwMThFM1xcdTAxOEYrJyA0ITZcXHUwMTkwISEgJSpcXHUxMjk1IFxcXCIhLlxcdTAxOTFcXFwiXFxcIjJcXHUwMTkxM1xcdTAxOTIrJyA0ITZcXHUwMTkzISEgJSpcXHUxMjdEIFxcXCIhLlxcdTAxOTRcXFwiXFxcIjJcXHUwMTk0M1xcdTAxOTUrJyA0ITZcXHUwMTk2ISEgJSpcXHUxMjY1IFxcXCIhLlxcdTAxOTdcXFwiXFxcIjJcXHUwMTk3M1xcdTAxOTgrJyA0ITZcXHUwMTk5ISEgJSpcXHUxMjREIFxcXCIhLlxcdTAxOUFcXFwiXFxcIjJcXHUwMTlBM1xcdTAxOUIrJyA0ITZcXHUwMTlDISEgJSpcXHUxMjM1IFxcXCIhLlxcdTAxOURcXFwiXFxcIjJcXHUwMTlEM1xcdTAxOUUrJyA0ITZcXHUwMTlGISEgJSpcXHUxMjFEIFxcXCIhLlxcdTAxQTBcXFwiXFxcIjJcXHUwMUEwM1xcdTAxQTErJyA0ITZcXHUwMUEyISEgJSpcXHUxMjA1IFxcXCIhLlxcdTAxQTNcXFwiXFxcIjJcXHUwMUEzM1xcdTAxQTQrJyA0ITZcXHUwMUE1ISEgJSpcXHUxMUVEIFxcXCIhLlxcdTAxQTZcXFwiXFxcIjJcXHUwMUE2M1xcdTAxQTcrJyA0ITZcXHUwMUE4ISEgJSpcXHUxMUQ1IFxcXCIhLlxcdTAxQTlcXFwiXFxcIjJcXHUwMUE5M1xcdTAxQUErJyA0ITZcXHUwMUFCISEgJSpcXHUxMUJEIFxcXCIhLlxcdTAxQUNcXFwiXFxcIjJcXHUwMUFDM1xcdTAxQUQrJyA0ITZcXHUwMUFFISEgJSpcXHUxMUE1IFxcXCIhLlxcdTAxQUZcXFwiXFxcIjJcXHUwMUFGM1xcdTAxQjArJyA0ITZcXHUwMUIxISEgJSpcXHUxMThEIFxcXCIhLlxcdTAxQjJcXFwiXFxcIjJcXHUwMUIyM1xcdTAxQjMrJyA0ITZcXHUwMUI0ISEgJSpcXHUxMTc1IFxcXCIhLlxcdTAxQjVcXFwiXFxcIjJcXHUwMUI1M1xcdTAxQjYrJyA0ITZcXHUwMUI3ISEgJSpcXHUxMTVEIFxcXCIhLlxcdTAxQjhcXFwiXFxcIjJcXHUwMUI4M1xcdTAxQjkrJyA0ITZcXHUwMUJBISEgJSpcXHUxMTQ1IFxcXCIhLlxcdTAxQkJcXFwiXFxcIjJcXHUwMUJCM1xcdTAxQkMrJyA0ITZcXHUwMUJEISEgJSpcXHUxMTJEIFxcXCIhLlxcdTAxQkVcXFwiXFxcIjJcXHUwMUJFM1xcdTAxQkYrJyA0ITZcXHUwMUMwISEgJSpcXHUxMTE1IFxcXCIhLlxcdTAxQzFcXFwiXFxcIjJcXHUwMUMxM1xcdTAxQzIrJyA0ITZcXHUwMUMzISEgJSpcXHUxMEZEIFxcXCIhLlxcdTAxQzRcXFwiXFxcIjJcXHUwMUM0M1xcdTAxQzUrJyA0ITZcXHUwMUM2ISEgJSpcXHUxMEU1IFxcXCIhLlxcdTAxQzdcXFwiXFxcIjJcXHUwMUM3M1xcdTAxQzgrJyA0ITZcXHUwMUM5ISEgJSpcXHUxMENEIFxcXCIhLlxcdTAxQ0FcXFwiXFxcIjJcXHUwMUNBM1xcdTAxQ0IrJyA0ITZcXHUwMUNDISEgJSpcXHUxMEI1IFxcXCIhLlxcdTAxQ0RcXFwiXFxcIjJcXHUwMUNEM1xcdTAxQ0UrJyA0ITZcXHUwMUNGISEgJSpcXHUxMDlEIFxcXCIhLlxcdTAxRDBcXFwiXFxcIjJcXHUwMUQwM1xcdTAxRDErJyA0ITZcXHUwMUQyISEgJSpcXHUxMDg1IFxcXCIhLlxcdTAxRDNcXFwiXFxcIjJcXHUwMUQzM1xcdTAxRDQrJyA0ITZcXHUwMUQ1ISEgJSpcXHUxMDZEIFxcXCIhLlxcdTAxRDZcXFwiXFxcIjJcXHUwMUQ2M1xcdTAxRDcrJyA0ITZcXHUwMUQ4ISEgJSpcXHUxMDU1IFxcXCIhLlxcdTAxRDlcXFwiXFxcIjJcXHUwMUQ5M1xcdTAxREErJyA0ITZcXHUwMURCISEgJSpcXHUxMDNEIFxcXCIhLlxcdTAxRENcXFwiXFxcIjJcXHUwMURDM1xcdTAxREQrJyA0ITZcXHUwMURFISEgJSpcXHUxMDI1IFxcXCIhLlxcdTAxREZcXFwiXFxcIjJcXHUwMURGM1xcdTAxRTArJyA0ITZcXHUwMUUxISEgJSpcXHUxMDBEIFxcXCIhLlxcdTAxRTJcXFwiXFxcIjJcXHUwMUUyM1xcdTAxRTMrJyA0ITZcXHUwMUU0ISEgJSpcXHUwRkY1IFxcXCIhLlxcdTAxRTVcXFwiXFxcIjJcXHUwMUU1M1xcdTAxRTYrJyA0ITZcXHUwMUU3ISEgJSpcXHUwRkREIFxcXCIhLlxcdTAxRThcXFwiXFxcIjJcXHUwMUU4M1xcdTAxRTkrJyA0ITZcXHUwMUVBISEgJSpcXHUwRkM1IFxcXCIhLlxcdTAxRUJcXFwiXFxcIjJcXHUwMUVCM1xcdTAxRUMrJyA0ITZcXHUwMUVEISEgJSpcXHUwRkFEIFxcXCIhLlxcdTAxRUVcXFwiXFxcIjJcXHUwMUVFM1xcdTAxRUYrJyA0ITZcXHUwMUYwISEgJSpcXHUwRjk1IFxcXCIhLlxcdTAxRjFcXFwiXFxcIjJcXHUwMUYxM1xcdTAxRjIrJyA0ITZcXHUwMUYzISEgJSpcXHUwRjdEIFxcXCIhLlxcdTAxRjRcXFwiXFxcIjJcXHUwMUY0M1xcdTAxRjUrJyA0ITZcXHUwMUY2ISEgJSpcXHUwRjY1IFxcXCIhLlxcdTAxRjdcXFwiXFxcIjJcXHUwMUY3M1xcdTAxRjgrJyA0ITZcXHUwMUY5ISEgJSpcXHUwRjREIFxcXCIhLlxcdTAxRkFcXFwiXFxcIjJcXHUwMUZBM1xcdTAxRkIrJyA0ITZcXHUwMUZDISEgJSpcXHUwRjM1IFxcXCIhLlxcdTAxRkRcXFwiXFxcIjJcXHUwMUZEM1xcdTAxRkUrJyA0ITZcXHUwMUZGISEgJSpcXHUwRjFEIFxcXCIhLlxcdTAyMDBcXFwiXFxcIjJcXHUwMjAwM1xcdTAyMDErJyA0ITZcXHUwMjAyISEgJSpcXHUwRjA1IFxcXCIhLlxcdTAyMDNcXFwiXFxcIjJcXHUwMjAzM1xcdTAyMDQrJyA0ITZcXHUwMjA1ISEgJSpcXHUwRUVEIFxcXCIhLlxcdTAyMDZcXFwiXFxcIjJcXHUwMjA2M1xcdTAyMDcrJyA0ITZcXHUwMjA4ISEgJSpcXHUwRUQ1IFxcXCIhLlxcdTAyMDlcXFwiXFxcIjJcXHUwMjA5M1xcdTAyMEErJyA0ITZcXHUwMjBCISEgJSpcXHUwRUJEIFxcXCIhLlxcdTAyMENcXFwiXFxcIjJcXHUwMjBDM1xcdTAyMEQrJyA0ITZcXHUwMjBFISEgJSpcXHUwRUE1IFxcXCIhLlxcdTAyMEZcXFwiXFxcIjJcXHUwMjBGM1xcdTAyMTArJyA0ITZcXHUwMjExISEgJSpcXHUwRThEIFxcXCIhLlxcdTAyMTJcXFwiXFxcIjJcXHUwMjEyM1xcdTAyMTMrJyA0ITZcXHUwMjE0ISEgJSpcXHUwRTc1IFxcXCIhLlxcdTAyMTVcXFwiXFxcIjJcXHUwMjE1M1xcdTAyMTYrJyA0ITZcXHUwMjE3ISEgJSpcXHUwRTVEIFxcXCIhLlxcdTAyMThcXFwiXFxcIjJcXHUwMjE4M1xcdTAyMTkrJyA0ITZcXHUwMjFBISEgJSpcXHUwRTQ1IFxcXCIhLlxcdTAyMUJcXFwiXFxcIjJcXHUwMjFCM1xcdTAyMUMrJyA0ITZcXHUwMjFEISEgJSpcXHUwRTJEIFxcXCIhLlxcdTAyMUVcXFwiXFxcIjJcXHUwMjFFM1xcdTAyMUYrJyA0ITZcXHUwMjIwISEgJSpcXHUwRTE1IFxcXCIhLlxcdTAyMjFcXFwiXFxcIjJcXHUwMjIxM1xcdTAyMjIrJyA0ITZcXHUwMjIzISEgJSpcXHUwREZEIFxcXCIhLlxcdTAyMjRcXFwiXFxcIjJcXHUwMjI0M1xcdTAyMjUrJyA0ITZcXHUwMjI2ISEgJSpcXHUwREU1IFxcXCIhLlxcdTAyMjdcXFwiXFxcIjJcXHUwMjI3M1xcdTAyMjgrJyA0ITZcXHUwMjI5ISEgJSpcXHUwRENEIFxcXCIhLlxcdTAyMkFcXFwiXFxcIjJcXHUwMjJBM1xcdTAyMkIrJyA0ITZcXHUwMjJDISEgJSpcXHUwREI1IFxcXCIhLlxcdTAyMkRcXFwiXFxcIjJcXHUwMjJEM1xcdTAyMkUrJyA0ITZcXHUwMjJGISEgJSpcXHUwRDlEIFxcXCIhLlxcdTAyMzBcXFwiXFxcIjJcXHUwMjMwM1xcdTAyMzErJyA0ITZcXHUwMjMyISEgJSpcXHUwRDg1IFxcXCIhLlxcdTAyMzNcXFwiXFxcIjJcXHUwMjMzM1xcdTAyMzQrJyA0ITZcXHUwMjM1ISEgJSpcXHUwRDZEIFxcXCIhLlxcdTAyMzZcXFwiXFxcIjJcXHUwMjM2M1xcdTAyMzcrJyA0ITZcXHUwMjM4ISEgJSpcXHUwRDU1IFxcXCIhLlxcdTAyMzlcXFwiXFxcIjJcXHUwMjM5M1xcdTAyM0ErJyA0ITZcXHUwMjNCISEgJSpcXHUwRDNEIFxcXCIhLlxcdTAyM0NcXFwiXFxcIjJcXHUwMjNDM1xcdTAyM0QrJyA0ITZcXHUwMjNFISEgJSpcXHUwRDI1IFxcXCIhLlxcdTAyM0ZcXFwiXFxcIjJcXHUwMjNGM1xcdTAyNDArJyA0ITZcXHUwMjQxISEgJSpcXHUwRDBEIFxcXCIhLlxcdTAyNDJcXFwiXFxcIjJcXHUwMjQyM1xcdTAyNDMrJyA0ITZcXHUwMjQ0ISEgJSpcXHUwQ0Y1IFxcXCIhLlxcdTAyNDVcXFwiXFxcIjJcXHUwMjQ1M1xcdTAyNDYrJyA0ITZcXHUwMjQ3ISEgJSpcXHUwQ0REIFxcXCIhLlxcdTAyNDhcXFwiXFxcIjJcXHUwMjQ4M1xcdTAyNDkrJyA0ITZcXHUwMjRBISEgJSpcXHUwQ0M1IFxcXCIhLlxcdTAyNEJcXFwiXFxcIjJcXHUwMjRCM1xcdTAyNEMrJyA0ITZcXHUwMjREISEgJSpcXHUwQ0FEIFxcXCIhLlxcdTAyNEVcXFwiXFxcIjJcXHUwMjRFM1xcdTAyNEYrJyA0ITZcXHUwMjUwISEgJSpcXHUwQzk1IFxcXCIhLlxcdTAyNTFcXFwiXFxcIjJcXHUwMjUxM1xcdTAyNTIrJyA0ITZcXHUwMjUzISEgJSpcXHUwQzdEIFxcXCIhLlxcdTAyNTRcXFwiXFxcIjJcXHUwMjU0M1xcdTAyNTUrJyA0ITZcXHUwMjU2ISEgJSpcXHUwQzY1IFxcXCIhLlxcdTAyNTdcXFwiXFxcIjJcXHUwMjU3M1xcdTAyNTgrJyA0ITZcXHUwMjU5ISEgJSpcXHUwQzREIFxcXCIhLlxcdTAyNUFcXFwiXFxcIjJcXHUwMjVBM1xcdTAyNUIrJyA0ITZcXHUwMjVDISEgJSpcXHUwQzM1IFxcXCIhLlxcdTAyNURcXFwiXFxcIjJcXHUwMjVEM1xcdTAyNUUrJyA0ITZcXHUwMjVGISEgJSpcXHUwQzFEIFxcXCIhLlxcdTAyNjBcXFwiXFxcIjJcXHUwMjYwM1xcdTAyNjErJyA0ITZcXHUwMjYyISEgJSpcXHUwQzA1IFxcXCIhLlxcdTAyNjNcXFwiXFxcIjJcXHUwMjYzM1xcdTAyNjQrJyA0ITZcXHUwMjY1ISEgJSpcXHUwQkVEIFxcXCIhLlxcdTAyNjZcXFwiXFxcIjJcXHUwMjY2M1xcdTAyNjcrJyA0ITZcXHUwMjY4ISEgJSpcXHUwQkQ1IFxcXCIhLlxcdTAyNjlcXFwiXFxcIjJcXHUwMjY5M1xcdTAyNkErJyA0ITZcXHUwMjZCISEgJSpcXHUwQkJEIFxcXCIhLlxcdTAyNkNcXFwiXFxcIjJcXHUwMjZDM1xcdTAyNkQrJyA0ITZcXHUwMjZFISEgJSpcXHUwQkE1IFxcXCIhLlxcdTAyNkZcXFwiXFxcIjJcXHUwMjZGM1xcdTAyNzArJyA0ITZcXHUwMjcxISEgJSpcXHUwQjhEIFxcXCIhLlxcdTAyNzJcXFwiXFxcIjJcXHUwMjcyM1xcdTAyNzMrJyA0ITZcXHUwMjc0ISEgJSpcXHUwQjc1IFxcXCIhLlxcdTAyNzVcXFwiXFxcIjJcXHUwMjc1M1xcdTAyNzYrJyA0ITZcXHUwMjc3ISEgJSpcXHUwQjVEIFxcXCIhLlxcdTAyNzhcXFwiXFxcIjJcXHUwMjc4M1xcdTAyNzkrJyA0ITZcXHUwMjdBISEgJSpcXHUwQjQ1IFxcXCIhLlxcdTAyN0JcXFwiXFxcIjJcXHUwMjdCM1xcdTAyN0MrJyA0ITZcXHUwMjdEISEgJSpcXHUwQjJEIFxcXCIhLlxcdTAyN0VcXFwiXFxcIjJcXHUwMjdFM1xcdTAyN0YrJyA0ITZcXHUwMjgwISEgJSpcXHUwQjE1IFxcXCIhLlxcdTAyODFcXFwiXFxcIjJcXHUwMjgxM1xcdTAyODIrJyA0ITZcXHUwMjgzISEgJSpcXHUwQUZEIFxcXCIhLlxcdTAyODRcXFwiXFxcIjJcXHUwMjg0M1xcdTAyODUrJyA0ITZcXHUwMjg2ISEgJSpcXHUwQUU1IFxcXCIhLlxcdTAyODdcXFwiXFxcIjJcXHUwMjg3M1xcdTAyODgrJyA0ITZcXHUwMjg5ISEgJSpcXHUwQUNEIFxcXCIhLlxcdTAyOEFcXFwiXFxcIjJcXHUwMjhBM1xcdTAyOEIrJyA0ITZcXHUwMjhDISEgJSpcXHUwQUI1IFxcXCIhLlxcdTAyOERcXFwiXFxcIjJcXHUwMjhEM1xcdTAyOEUrJyA0ITZcXHUwMjhGISEgJSpcXHUwQTlEIFxcXCIhLlxcdTAyOTBcXFwiXFxcIjJcXHUwMjkwM1xcdTAyOTErJyA0ITZcXHUwMjkyISEgJSpcXHUwQTg1IFxcXCIhLlxcdTAyOTNcXFwiXFxcIjJcXHUwMjkzM1xcdTAyOTQrJyA0ITZcXHUwMjk1ISEgJSpcXHUwQTZEIFxcXCIhLlxcdTAyOTZcXFwiXFxcIjJcXHUwMjk2M1xcdTAyOTcrJyA0ITZcXHUwMjk4ISEgJSpcXHUwQTU1IFxcXCIhLlxcdTAyOTlcXFwiXFxcIjJcXHUwMjk5M1xcdTAyOUErJyA0ITZcXHUwMjlCISEgJSpcXHUwQTNEIFxcXCIhLlxcdTAyOUNcXFwiXFxcIjJcXHUwMjlDM1xcdTAyOUQrJyA0ITZcXHUwMjlFISEgJSpcXHUwQTI1IFxcXCIhLlxcdTAyOUZcXFwiXFxcIjJcXHUwMjlGM1xcdTAyQTArJyA0ITZcXHUwMkExISEgJSpcXHUwQTBEIFxcXCIhLlxcdTAyQTJcXFwiXFxcIjJcXHUwMkEyM1xcdTAyQTMrJyA0ITZcXHUwMkE0ISEgJSpcXHUwOUY1IFxcXCIhLlxcdTAyQTVcXFwiXFxcIjJcXHUwMkE1M1xcdTAyQTYrJyA0ITZcXHUwMkE3ISEgJSpcXHUwOUREIFxcXCIhLlxcdTAyQThcXFwiXFxcIjJcXHUwMkE4M1xcdTAyQTkrJyA0ITZcXHUwMkFBISEgJSpcXHUwOUM1IFxcXCIhLlxcdTAyQUJcXFwiXFxcIjJcXHUwMkFCM1xcdTAyQUMrJyA0ITZcXHUwMkFEISEgJSpcXHUwOUFEIFxcXCIhLlxcdTAyQUVcXFwiXFxcIjJcXHUwMkFFM1xcdTAyQUYrJyA0ITZcXHUwMkIwISEgJSpcXHUwOTk1IFxcXCIhLlxcdTAyQjFcXFwiXFxcIjJcXHUwMkIxM1xcdTAyQjIrJyA0ITZcXHUwMkIzISEgJSpcXHUwOTdEIFxcXCIhLlxcdTAyQjRcXFwiXFxcIjJcXHUwMkI0M1xcdTAyQjUrJyA0ITZcXHUwMkI2ISEgJSpcXHUwOTY1IFxcXCIhLlxcdTAyQjdcXFwiXFxcIjJcXHUwMkI3M1xcdTAyQjgrJyA0ITZcXHUwMkI5ISEgJSpcXHUwOTREIFxcXCIhLlxcdTAyQkFcXFwiXFxcIjJcXHUwMkJBM1xcdTAyQkIrJyA0ITZcXHUwMkJDISEgJSpcXHUwOTM1IFxcXCIhLlxcdTAyQkRcXFwiXFxcIjJcXHUwMkJEM1xcdTAyQkUrJyA0ITZcXHUwMkJGISEgJSpcXHUwOTFEIFxcXCIhLlxcdTAyQzBcXFwiXFxcIjJcXHUwMkMwM1xcdTAyQzErJyA0ITZcXHUwMkMyISEgJSpcXHUwOTA1IFxcXCIhLlxcdTAyQzNcXFwiXFxcIjJcXHUwMkMzM1xcdTAyQzQrJyA0ITZcXHUwMkM1ISEgJSpcXHUwOEVEIFxcXCIhLlxcdTAyQzZcXFwiXFxcIjJcXHUwMkM2M1xcdTAyQzcrJyA0ITZcXHUwMkM4ISEgJSpcXHUwOEQ1IFxcXCIhLlxcdTAyQzlcXFwiXFxcIjJcXHUwMkM5M1xcdTAyQ0ErJyA0ITZcXHUwMkNCISEgJSpcXHUwOEJEIFxcXCIhLlxcdTAyQ0NcXFwiXFxcIjJcXHUwMkNDM1xcdTAyQ0QrJyA0ITZcXHUwMkNFISEgJSpcXHUwOEE1IFxcXCIhLlxcdTAyQ0ZcXFwiXFxcIjJcXHUwMkNGM1xcdTAyRDArJyA0ITZcXHUwMkQxISEgJSpcXHUwODhEIFxcXCIhLlxcdTAyRDJcXFwiXFxcIjJcXHUwMkQyM1xcdTAyRDMrJyA0ITZcXHUwMkQ0ISEgJSpcXHUwODc1IFxcXCIhLlxcdTAyRDVcXFwiXFxcIjJcXHUwMkQ1M1xcdTAyRDYrJyA0ITZcXHUwMkQ3ISEgJSpcXHUwODVEIFxcXCIhLlxcdTAyRDhcXFwiXFxcIjJcXHUwMkQ4M1xcdTAyRDkrJyA0ITZcXHUwMkRBISEgJSpcXHUwODQ1IFxcXCIhLlxcdTAyREJcXFwiXFxcIjJcXHUwMkRCM1xcdTAyREMrJyA0ITZcXHUwMkREISEgJSpcXHUwODJEIFxcXCIhLlxcdTAyREVcXFwiXFxcIjJcXHUwMkRFM1xcdTAyREYrJyA0ITZcXHUwMkUwISEgJSpcXHUwODE1IFxcXCIhLlxcdTAyRTFcXFwiXFxcIjJcXHUwMkUxM1xcdTAyRTIrJyA0ITZcXHUwMkUzISEgJSpcXHUwN0ZEIFxcXCIhLlxcdTAyRTRcXFwiXFxcIjJcXHUwMkU0M1xcdTAyRTUrJyA0ITZcXHUwMkU2ISEgJSpcXHUwN0U1IFxcXCIhLlxcdTAyRTdcXFwiXFxcIjJcXHUwMkU3M1xcdTAyRTgrJyA0ITZcXHUwMkU5ISEgJSpcXHUwN0NEIFxcXCIhLlxcdTAyRUFcXFwiXFxcIjJcXHUwMkVBM1xcdTAyRUIrJyA0ITZcXHUwMkVDISEgJSpcXHUwN0I1IFxcXCIhLlxcdTAyRURcXFwiXFxcIjJcXHUwMkVEM1xcdTAyRUUrJyA0ITZcXHUwMkVGISEgJSpcXHUwNzlEIFxcXCIhLlxcdTAyRjBcXFwiXFxcIjJcXHUwMkYwM1xcdTAyRjErJyA0ITZcXHUwMkYyISEgJSpcXHUwNzg1IFxcXCIhLlxcdTAyRjNcXFwiXFxcIjJcXHUwMkYzM1xcdTAyRjQrJyA0ITZcXHUwMkY1ISEgJSpcXHUwNzZEIFxcXCIhLlxcdTAyRjZcXFwiXFxcIjJcXHUwMkY2M1xcdTAyRjcrJyA0ITZcXHUwMkY4ISEgJSpcXHUwNzU1IFxcXCIhLlxcdTAyRjlcXFwiXFxcIjJcXHUwMkY5M1xcdTAyRkErJyA0ITZcXHUwMkZCISEgJSpcXHUwNzNEIFxcXCIhLlxcdTAyRkNcXFwiXFxcIjJcXHUwMkZDM1xcdTAyRkQrJyA0ITZcXHUwMkZFISEgJSpcXHUwNzI1IFxcXCIhLlxcdTAyRkZcXFwiXFxcIjJcXHUwMkZGM1xcdTAzMDArJyA0ITZcXHUwMzAxISEgJSpcXHUwNzBEIFxcXCIhLlxcdTAzMDJcXFwiXFxcIjJcXHUwMzAyM1xcdTAzMDMrJyA0ITZcXHUwMzA0ISEgJSpcXHUwNkY1IFxcXCIhLlxcdTAzMDVcXFwiXFxcIjJcXHUwMzA1M1xcdTAzMDYrJyA0ITZcXHUwMzA3ISEgJSpcXHUwNkREIFxcXCIhLlxcdTAzMDhcXFwiXFxcIjJcXHUwMzA4M1xcdTAzMDkrJyA0ITZcXHUwMzBBISEgJSpcXHUwNkM1IFxcXCIhLlxcdTAzMEJcXFwiXFxcIjJcXHUwMzBCM1xcdTAzMEMrJyA0ITZcXHUwMzBEISEgJSpcXHUwNkFEIFxcXCIhLlxcdTAzMEVcXFwiXFxcIjJcXHUwMzBFM1xcdTAzMEYrJyA0ITZcXHUwMzEwISEgJSpcXHUwNjk1IFxcXCIhLlxcdTAzMTFcXFwiXFxcIjJcXHUwMzExM1xcdTAzMTIrJyA0ITZcXHUwMzEzISEgJSpcXHUwNjdEIFxcXCIhLlxcdTAzMTRcXFwiXFxcIjJcXHUwMzE0M1xcdTAzMTUrJyA0ITZcXHUwMzE2ISEgJSpcXHUwNjY1IFxcXCIhLlxcdTAzMTdcXFwiXFxcIjJcXHUwMzE3M1xcdTAzMTgrJyA0ITZcXHUwMzE5ISEgJSpcXHUwNjREIFxcXCIhLlxcdTAzMUFcXFwiXFxcIjJcXHUwMzFBM1xcdTAzMUIrJyA0ITZcXHUwMzFDISEgJSpcXHUwNjM1IFxcXCIhLlxcdTAzMURcXFwiXFxcIjJcXHUwMzFEM1xcdTAzMUUrJyA0ITZcXHUwMzFGISEgJSpcXHUwNjFEIFxcXCIhLlxcdTAzMjBcXFwiXFxcIjJcXHUwMzIwM1xcdTAzMjErJyA0ITZcXHUwMzIyISEgJSpcXHUwNjA1IFxcXCIhLlxcdTAzMjNcXFwiXFxcIjJcXHUwMzIzM1xcdTAzMjQrJyA0ITZcXHUwMzI1ISEgJSpcXHUwNUVEIFxcXCIhLlxcdTAzMjZcXFwiXFxcIjJcXHUwMzI2M1xcdTAzMjcrJyA0ITZcXHUwMzI4ISEgJSpcXHUwNUQ1IFxcXCIhLlxcdTAzMjlcXFwiXFxcIjJcXHUwMzI5M1xcdTAzMkErJyA0ITZcXHUwMzJCISEgJSpcXHUwNUJEIFxcXCIhLlxcdTAzMkNcXFwiXFxcIjJcXHUwMzJDM1xcdTAzMkQrJyA0ITZcXHUwMzJFISEgJSpcXHUwNUE1IFxcXCIhLlxcdTAzMkZcXFwiXFxcIjJcXHUwMzJGM1xcdTAzMzArJyA0ITZcXHUwMzMxISEgJSpcXHUwNThEIFxcXCIhLlxcdTAzMzJcXFwiXFxcIjJcXHUwMzMyM1xcdTAzMzMrJyA0ITZcXHUwMzM0ISEgJSpcXHUwNTc1IFxcXCIhLlxcdTAzMzVcXFwiXFxcIjJcXHUwMzM1M1xcdTAzMzYrJyA0ITZcXHUwMzM3ISEgJSpcXHUwNTVEIFxcXCIhLlxcdTAzMzhcXFwiXFxcIjJcXHUwMzM4M1xcdTAzMzkrJyA0ITZcXHUwMzNBISEgJSpcXHUwNTQ1IFxcXCIhLlxcdTAzM0JcXFwiXFxcIjJcXHUwMzNCM1xcdTAzM0MrJyA0ITZcXHUwMzNEISEgJSpcXHUwNTJEIFxcXCIhLlxcdTAzM0VcXFwiXFxcIjJcXHUwMzNFM1xcdTAzM0YrJyA0ITZcXHUwMzQwISEgJSpcXHUwNTE1IFxcXCIhLlxcdTAzNDFcXFwiXFxcIjJcXHUwMzQxM1xcdTAzNDIrJyA0ITZcXHUwMzQzISEgJSpcXHUwNEZEIFxcXCIhLlxcdTAzNDRcXFwiXFxcIjJcXHUwMzQ0M1xcdTAzNDUrJyA0ITZcXHUwMzQ2ISEgJSpcXHUwNEU1IFxcXCIhLlxcdTAzNDdcXFwiXFxcIjJcXHUwMzQ3M1xcdTAzNDgrJyA0ITZcXHUwMzQ5ISEgJSpcXHUwNENEIFxcXCIhLlxcdTAzNEFcXFwiXFxcIjJcXHUwMzRBM1xcdTAzNEIrJyA0ITZcXHUwMzRDISEgJSpcXHUwNEI1IFxcXCIhLlxcdTAzNERcXFwiXFxcIjJcXHUwMzREM1xcdTAzNEUrJyA0ITZcXHUwMzRGISEgJSpcXHUwNDlEIFxcXCIhLlxcdTAzNTBcXFwiXFxcIjJcXHUwMzUwM1xcdTAzNTErJyA0ITZcXHUwMzUyISEgJSpcXHUwNDg1IFxcXCIhLlxcdTAzNTNcXFwiXFxcIjJcXHUwMzUzM1xcdTAzNTQrJyA0ITZcXHUwMzU1ISEgJSpcXHUwNDZEIFxcXCIhLlxcdTAzNTZcXFwiXFxcIjJcXHUwMzU2M1xcdTAzNTcrJyA0ITZcXHUwMzU4ISEgJSpcXHUwNDU1IFxcXCIhLlxcdTAzNTlcXFwiXFxcIjJcXHUwMzU5M1xcdTAzNUErJyA0ITZcXHUwMzVCISEgJSpcXHUwNDNEIFxcXCIhLlxcdTAzNUNcXFwiXFxcIjJcXHUwMzVDM1xcdTAzNUQrJyA0ITZcXHUwMzVFISEgJSpcXHUwNDI1IFxcXCIhLlxcdTAzNUZcXFwiXFxcIjJcXHUwMzVGM1xcdTAzNjArJyA0ITZcXHUwMzYxISEgJSpcXHUwNDBEIFxcXCIhLlxcdTAzNjJcXFwiXFxcIjJcXHUwMzYyM1xcdTAzNjMrJyA0ITZcXHUwMzY0ISEgJSpcXHUwM0Y1IFxcXCIhLlxcdTAzNjVcXFwiXFxcIjJcXHUwMzY1M1xcdTAzNjYrJyA0ITZcXHUwMzY3ISEgJSpcXHUwM0REIFxcXCIhLlxcdTAzNjhcXFwiXFxcIjJcXHUwMzY4M1xcdTAzNjkrJyA0ITZcXHUwMzZBISEgJSpcXHUwM0M1IFxcXCIhLlxcdTAzNkJcXFwiXFxcIjJcXHUwMzZCM1xcdTAzNkMrJyA0ITZcXHUwMzZEISEgJSpcXHUwM0FEIFxcXCIhLlxcdTAzNkVcXFwiXFxcIjJcXHUwMzZFM1xcdTAzNkYrJyA0ITZcXHUwMzcwISEgJSpcXHUwMzk1IFxcXCIhLlxcdTAzNzFcXFwiXFxcIjJcXHUwMzcxM1xcdTAzNzIrJyA0ITZcXHUwMzczISEgJSpcXHUwMzdEIFxcXCIhLlxcdTAzNzRcXFwiXFxcIjJcXHUwMzc0M1xcdTAzNzUrJyA0ITZcXHUwMzc2ISEgJSpcXHUwMzY1IFxcXCIhLlxcdTAzNzdcXFwiXFxcIjJcXHUwMzc3M1xcdTAzNzgrJyA0ITZcXHUwMzc5ISEgJSpcXHUwMzREIFxcXCIhLlxcdTAzN0FcXFwiXFxcIjJcXHUwMzdBM1xcdTAzN0IrJyA0ITZcXHUwMzdDISEgJSpcXHUwMzM1IFxcXCIhLlxcdTAzN0RcXFwiXFxcIjJcXHUwMzdEM1xcdTAzN0UrJyA0ITZcXHUwMzdGISEgJSpcXHUwMzFEIFxcXCIhLlxcdTAzODBcXFwiXFxcIjJcXHUwMzgwM1xcdTAzODErJyA0ITZcXHUwMzgyISEgJSpcXHUwMzA1IFxcXCIhLlxcdTAzODNcXFwiXFxcIjJcXHUwMzgzM1xcdTAzODQrJyA0ITZcXHUwMzg1ISEgJSpcXHUwMkVEIFxcXCIhLlxcdTAzODZcXFwiXFxcIjJcXHUwMzg2M1xcdTAzODcrJyA0ITZcXHUwMzg4ISEgJSpcXHUwMkQ1IFxcXCIhLlxcdTAzODlcXFwiXFxcIjJcXHUwMzg5M1xcdTAzOEErJyA0ITZcXHUwMzhCISEgJSpcXHUwMkJEIFxcXCIhLlxcdTAzOENcXFwiXFxcIjJcXHUwMzhDM1xcdTAzOEQrJyA0ITZcXHUwMzhFISEgJSpcXHUwMkE1IFxcXCIhLlxcdTAzOEZcXFwiXFxcIjJcXHUwMzhGM1xcdTAzOTArJyA0ITZcXHUwMzkxISEgJSpcXHUwMjhEIFxcXCIhLlxcdTAzOTJcXFwiXFxcIjJcXHUwMzkyM1xcdTAzOTMrJyA0ITZcXHUwMzk0ISEgJSpcXHUwMjc1IFxcXCIhLlxcdTAzOTVcXFwiXFxcIjJcXHUwMzk1M1xcdTAzOTYrJyA0ITZcXHUwMzk3ISEgJSpcXHUwMjVEIFxcXCIhLlxcdTAzOThcXFwiXFxcIjJcXHUwMzk4M1xcdTAzOTkrJyA0ITZcXHUwMzlBISEgJSpcXHUwMjQ1IFxcXCIhLlxcdTAzOUJcXFwiXFxcIjJcXHUwMzlCM1xcdTAzOUMrJyA0ITZcXHUwMzlEISEgJSpcXHUwMjJEIFxcXCIhLlxcdTAzOUVcXFwiXFxcIjJcXHUwMzlFM1xcdTAzOUYrJyA0ITZcXHUwM0EwISEgJSpcXHUwMjE1IFxcXCIhLlxcdTAzQTFcXFwiXFxcIjJcXHUwM0ExM1xcdTAzQTIrJyA0ITZcXHUwM0EzISEgJSpcXHUwMUZEIFxcXCIhLlxcdTAzQTRcXFwiXFxcIjJcXHUwM0E0M1xcdTAzQTUrJyA0ITZcXHUwM0E2ISEgJSpcXHUwMUU1IFxcXCIhLlxcdTAzQTdcXFwiXFxcIjJcXHUwM0E3M1xcdTAzQTgrJyA0ITZcXHUwM0E5ISEgJSpcXHUwMUNEIFxcXCIhLlxcdTAzQUFcXFwiXFxcIjJcXHUwM0FBM1xcdTAzQUIrJyA0ITZcXHUwM0FDISEgJSpcXHUwMUI1IFxcXCIhLlxcdTAzQURcXFwiXFxcIjJcXHUwM0FEM1xcdTAzQUUrJyA0ITZcXHUwM0FGISEgJSpcXHUwMTlEIFxcXCIhLlxcdTAzQjBcXFwiXFxcIjJcXHUwM0IwM1xcdTAzQjErJyA0ITZcXHUwM0IyISEgJSpcXHUwMTg1IFxcXCIhLlxcdTAzQjNcXFwiXFxcIjJcXHUwM0IzM1xcdTAzQjQrJyA0ITZcXHUwM0I1ISEgJSpcXHUwMTZEIFxcXCIhLlxcdTAzQjZcXFwiXFxcIjJcXHUwM0I2M1xcdTAzQjcrJyA0ITZcXHUwM0I4ISEgJSpcXHUwMTU1IFxcXCIhLlxcdTAzQjlcXFwiXFxcIjJcXHUwM0I5M1xcdTAzQkErJyA0ITZcXHUwM0JCISEgJSpcXHUwMTNEIFxcXCIhLlxcdTAzQkNcXFwiXFxcIjJcXHUwM0JDM1xcdTAzQkQrJyA0ITZcXHUwM0JFISEgJSpcXHUwMTI1IFxcXCIhLlxcdTAzQkZcXFwiXFxcIjJcXHUwM0JGM1xcdTAzQzArJyA0ITZcXHUwM0MxISEgJSpcXHUwMTBEIFxcXCIhLlxcdTAzQzJcXFwiXFxcIjJcXHUwM0MyM1xcdTAzQzMrJyA0ITZcXHUwM0M0ISEgJSpcXHhGNSBcXFwiIS5cXHUwM0M1XFxcIlxcXCIyXFx1MDNDNTNcXHUwM0M2KycgNCE2XFx1MDNDNyEhICUqXFx4REQgXFxcIiEuXFx1MDNDOFxcXCJcXFwiMlxcdTAzQzgzXFx1MDNDOSsnIDQhNlxcdTAzQ0EhISAlKlxceEM1IFxcXCIhLlxcdTAzQ0JcXFwiXFxcIjJcXHUwM0NCM1xcdTAzQ0MrJyA0ITZcXHUwM0NEISEgJSpcXHhBRCBcXFwiIS5cXHUwM0NFXFxcIlxcXCIyXFx1MDNDRTNcXHUwM0NGKycgNCE2XFx1MDNEMCEhICUqXFx4OTUgXFxcIiEuXFx1MDNEMVxcXCJcXFwiMlxcdTAzRDEzXFx1MDNEMisnIDQhNlxcdTAzRDMhISAlKn0gXFxcIiEuXFx1MDNENFxcXCJcXFwiMlxcdTAzRDQzXFx1MDNENSsnIDQhNlxcdTAzRDYhISAlKmUgXFxcIiEuXFx1MDNEN1xcXCJcXFwiMlxcdTAzRDczXFx1MDNEOCsnIDQhNlxcdTAzRDkhISAlKk0gXFxcIiEuXFx1MDNEQVxcXCJcXFwiMlxcdTAzREEzXFx1MDNEQisnIDQhNlxcdTAzREMhISAlKjUgXFxcIiEuXFx1MDNERFxcXCJcXFwiMlxcdTAzREQzXFx1MDNERSsnIDQhNlxcdTAzREYhISAlXCIpLFxuICAgICAgICAgIHBlZyRkZWNvZGUoXCIuXFx1MDNFMFxcXCJcXFwiMlxcdTAzRTAzXFx1MDNFMSpcXHUwMTMxIFxcXCIuXFx1MDNFMlxcXCJcXFwiMlxcdTAzRTIzXFx1MDNFMypcXHUwMTI1IFxcXCIuXFx1MDNFNFxcXCJcXFwiMlxcdTAzRTQzXFx1MDNFNSpcXHUwMTE5IFxcXCIuXFx1MDM5MlxcXCJcXFwiMlxcdTAzOTIzXFx1MDM5MypcXHUwMTBEIFxcXCIuXFx1MDM5RVxcXCJcXFwiMlxcdTAzOUUzXFx1MDM5RipcXHUwMTAxIFxcXCIuXFx1MDM5NVxcXCJcXFwiMlxcdTAzOTUzXFx1MDM5NipcXHhGNSBcXFwiLlxcdTAzRTZcXFwiXFxcIjJcXHUwM0U2M1xcdTAzRTcqXFx4RTkgXFxcIi5cXHUwM0U4XFxcIlxcXCIyXFx1MDNFODNcXHUwM0U5KlxceEREIFxcXCIuXFx1MDNEMVxcXCJcXFwiMlxcdTAzRDEzXFx1MDNEMipcXHhEMSBcXFwiLlxcdTAzRUFcXFwiXFxcIjJcXHUwM0VBM1xcdTAzRUIqXFx4QzUgXFxcIi5cXHUwM0Q0XFxcIlxcXCIyXFx1MDNENDNcXHUwM0Q1KlxceEI5IFxcXCIuXFx1MDNFQ1xcXCJcXFwiMlxcdTAzRUMzXFx1MDNFRCpcXHhBRCBcXFwiLlxcdTAzQUFcXFwiXFxcIjJcXHUwM0FBM1xcdTAzQUIqXFx4QTEgXFxcIi5cXHUwMzhGXFxcIlxcXCIyXFx1MDM4RjNcXHUwMzkwKlxceDk1IFxcXCIuXFx1MDNFRVxcXCJcXFwiMlxcdTAzRUUzXFx1MDNFRipcXHg4OSBcXFwiLlxcdTAzRjBcXFwiXFxcIjJcXHUwM0YwM1xcdTAzRjEqfSBcXFwiLlxcdTAzRjJcXFwiXFxcIjJcXHUwM0YyM1xcdTAzRjMqcSBcXFwiLlxcdTAzREFcXFwiXFxcIjJcXHUwM0RBM1xcdTAzREIqZSBcXFwiLlxcdTAzRjRcXFwiXFxcIjJcXHUwM0Y0M1xcdTAzRjUqWSBcXFwiLlxcdTAzRjZcXFwiXFxcIjJcXHUwM0Y2M1xcdTAzRjcqTSBcXFwiLlxcdTAzRjhcXFwiXFxcIjJcXHUwM0Y4M1xcdTAzRjkqQSBcXFwiLlxcdTAzRkFcXFwiXFxcIjJcXHUwM0ZBM1xcdTAzRkIqNSBcXFwiLlxcdTAzRkNcXFwiXFxcIjJcXHUwM0ZDM1xcdTAzRkQqKSBcXFwiLlxcdTAzRkVcXFwiXFxcIjJcXHUwM0ZFM1xcdTAzRkZcIilcbiAgICAgICAgXSxcblxuICAgICAgICBwZWckY3VyclBvcyAgICAgICAgICA9IDAsXG4gICAgICAgIHBlZyRyZXBvcnRlZFBvcyAgICAgID0gMCxcbiAgICAgICAgcGVnJGNhY2hlZFBvcyAgICAgICAgPSAwLFxuICAgICAgICBwZWckY2FjaGVkUG9zRGV0YWlscyA9IHsgbGluZTogMSwgY29sdW1uOiAxLCBzZWVuQ1I6IGZhbHNlIH0sXG4gICAgICAgIHBlZyRtYXhGYWlsUG9zICAgICAgID0gMCxcbiAgICAgICAgcGVnJG1heEZhaWxFeHBlY3RlZCAgPSBbXSxcbiAgICAgICAgcGVnJHNpbGVudEZhaWxzICAgICAgPSAwLFxuXG4gICAgICAgIHBlZyRyZXN1bHQ7XG5cbiAgICBpZiAoXCJzdGFydFJ1bGVcIiBpbiBvcHRpb25zKSB7XG4gICAgICBpZiAoIShvcHRpb25zLnN0YXJ0UnVsZSBpbiBwZWckc3RhcnRSdWxlSW5kaWNlcykpIHtcbiAgICAgICAgdGhyb3cgbmV3IEVycm9yKFwiQ2FuJ3Qgc3RhcnQgcGFyc2luZyBmcm9tIHJ1bGUgXFxcIlwiICsgb3B0aW9ucy5zdGFydFJ1bGUgKyBcIlxcXCIuXCIpO1xuICAgICAgfVxuXG4gICAgICBwZWckc3RhcnRSdWxlSW5kZXggPSBwZWckc3RhcnRSdWxlSW5kaWNlc1tvcHRpb25zLnN0YXJ0UnVsZV07XG4gICAgfVxuXG4gICAgZnVuY3Rpb24gdGV4dCgpIHtcbiAgICAgIHJldHVybiBpbnB1dC5zdWJzdHJpbmcocGVnJHJlcG9ydGVkUG9zLCBwZWckY3VyclBvcyk7XG4gICAgfVxuXG4gICAgZnVuY3Rpb24gb2Zmc2V0KCkge1xuICAgICAgcmV0dXJuIHBlZyRyZXBvcnRlZFBvcztcbiAgICB9XG5cbiAgICBmdW5jdGlvbiBsaW5lKCkge1xuICAgICAgcmV0dXJuIHBlZyRjb21wdXRlUG9zRGV0YWlscyhwZWckcmVwb3J0ZWRQb3MpLmxpbmU7XG4gICAgfVxuXG4gICAgZnVuY3Rpb24gY29sdW1uKCkge1xuICAgICAgcmV0dXJuIHBlZyRjb21wdXRlUG9zRGV0YWlscyhwZWckcmVwb3J0ZWRQb3MpLmNvbHVtbjtcbiAgICB9XG5cbiAgICBmdW5jdGlvbiBleHBlY3RlZChkZXNjcmlwdGlvbikge1xuICAgICAgdGhyb3cgcGVnJGJ1aWxkRXhjZXB0aW9uKFxuICAgICAgICBudWxsLFxuICAgICAgICBbeyB0eXBlOiBcIm90aGVyXCIsIGRlc2NyaXB0aW9uOiBkZXNjcmlwdGlvbiB9XSxcbiAgICAgICAgcGVnJHJlcG9ydGVkUG9zXG4gICAgICApO1xuICAgIH1cblxuICAgIGZ1bmN0aW9uIGVycm9yKG1lc3NhZ2UpIHtcbiAgICAgIHRocm93IHBlZyRidWlsZEV4Y2VwdGlvbihtZXNzYWdlLCBudWxsLCBwZWckcmVwb3J0ZWRQb3MpO1xuICAgIH1cblxuICAgIGZ1bmN0aW9uIHBlZyRjb21wdXRlUG9zRGV0YWlscyhwb3MpIHtcbiAgICAgIGZ1bmN0aW9uIGFkdmFuY2UoZGV0YWlscywgc3RhcnRQb3MsIGVuZFBvcykge1xuICAgICAgICB2YXIgcCwgY2g7XG5cbiAgICAgICAgZm9yIChwID0gc3RhcnRQb3M7IHAgPCBlbmRQb3M7IHArKykge1xuICAgICAgICAgIGNoID0gaW5wdXQuY2hhckF0KHApO1xuICAgICAgICAgIGlmIChjaCA9PT0gXCJcXG5cIikge1xuICAgICAgICAgICAgaWYgKCFkZXRhaWxzLnNlZW5DUikgeyBkZXRhaWxzLmxpbmUrKzsgfVxuICAgICAgICAgICAgZGV0YWlscy5jb2x1bW4gPSAxO1xuICAgICAgICAgICAgZGV0YWlscy5zZWVuQ1IgPSBmYWxzZTtcbiAgICAgICAgICB9IGVsc2UgaWYgKGNoID09PSBcIlxcclwiIHx8IGNoID09PSBcIlxcdTIwMjhcIiB8fCBjaCA9PT0gXCJcXHUyMDI5XCIpIHtcbiAgICAgICAgICAgIGRldGFpbHMubGluZSsrO1xuICAgICAgICAgICAgZGV0YWlscy5jb2x1bW4gPSAxO1xuICAgICAgICAgICAgZGV0YWlscy5zZWVuQ1IgPSB0cnVlO1xuICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICBkZXRhaWxzLmNvbHVtbisrO1xuICAgICAgICAgICAgZGV0YWlscy5zZWVuQ1IgPSBmYWxzZTtcbiAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgIH1cblxuICAgICAgaWYgKHBlZyRjYWNoZWRQb3MgIT09IHBvcykge1xuICAgICAgICBpZiAocGVnJGNhY2hlZFBvcyA+IHBvcykge1xuICAgICAgICAgIHBlZyRjYWNoZWRQb3MgPSAwO1xuICAgICAgICAgIHBlZyRjYWNoZWRQb3NEZXRhaWxzID0geyBsaW5lOiAxLCBjb2x1bW46IDEsIHNlZW5DUjogZmFsc2UgfTtcbiAgICAgICAgfVxuICAgICAgICBhZHZhbmNlKHBlZyRjYWNoZWRQb3NEZXRhaWxzLCBwZWckY2FjaGVkUG9zLCBwb3MpO1xuICAgICAgICBwZWckY2FjaGVkUG9zID0gcG9zO1xuICAgICAgfVxuXG4gICAgICByZXR1cm4gcGVnJGNhY2hlZFBvc0RldGFpbHM7XG4gICAgfVxuXG4gICAgZnVuY3Rpb24gcGVnJGZhaWwoZXhwZWN0ZWQpIHtcbiAgICAgIGlmIChwZWckY3VyclBvcyA8IHBlZyRtYXhGYWlsUG9zKSB7IHJldHVybjsgfVxuXG4gICAgICBpZiAocGVnJGN1cnJQb3MgPiBwZWckbWF4RmFpbFBvcykge1xuICAgICAgICBwZWckbWF4RmFpbFBvcyA9IHBlZyRjdXJyUG9zO1xuICAgICAgICBwZWckbWF4RmFpbEV4cGVjdGVkID0gW107XG4gICAgICB9XG5cbiAgICAgIHBlZyRtYXhGYWlsRXhwZWN0ZWQucHVzaChleHBlY3RlZCk7XG4gICAgfVxuXG4gICAgZnVuY3Rpb24gcGVnJGJ1aWxkRXhjZXB0aW9uKG1lc3NhZ2UsIGV4cGVjdGVkLCBwb3MpIHtcbiAgICAgIGZ1bmN0aW9uIGNsZWFudXBFeHBlY3RlZChleHBlY3RlZCkge1xuICAgICAgICB2YXIgaSA9IDE7XG5cbiAgICAgICAgZXhwZWN0ZWQuc29ydChmdW5jdGlvbihhLCBiKSB7XG4gICAgICAgICAgaWYgKGEuZGVzY3JpcHRpb24gPCBiLmRlc2NyaXB0aW9uKSB7XG4gICAgICAgICAgICByZXR1cm4gLTE7XG4gICAgICAgICAgfSBlbHNlIGlmIChhLmRlc2NyaXB0aW9uID4gYi5kZXNjcmlwdGlvbikge1xuICAgICAgICAgICAgcmV0dXJuIDE7XG4gICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIHJldHVybiAwO1xuICAgICAgICAgIH1cbiAgICAgICAgfSk7XG5cbiAgICAgICAgd2hpbGUgKGkgPCBleHBlY3RlZC5sZW5ndGgpIHtcbiAgICAgICAgICBpZiAoZXhwZWN0ZWRbaSAtIDFdID09PSBleHBlY3RlZFtpXSkge1xuICAgICAgICAgICAgZXhwZWN0ZWQuc3BsaWNlKGksIDEpO1xuICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICBpKys7XG4gICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICB9XG5cbiAgICAgIGZ1bmN0aW9uIGJ1aWxkTWVzc2FnZShleHBlY3RlZCwgZm91bmQpIHtcbiAgICAgICAgZnVuY3Rpb24gc3RyaW5nRXNjYXBlKHMpIHtcbiAgICAgICAgICBmdW5jdGlvbiBoZXgoY2gpIHsgcmV0dXJuIGNoLmNoYXJDb2RlQXQoMCkudG9TdHJpbmcoMTYpLnRvVXBwZXJDYXNlKCk7IH1cblxuICAgICAgICAgIHJldHVybiBzXG4gICAgICAgICAgICAucmVwbGFjZSgvXFxcXC9nLCAgICdcXFxcXFxcXCcpXG4gICAgICAgICAgICAucmVwbGFjZSgvXCIvZywgICAgJ1xcXFxcIicpXG4gICAgICAgICAgICAucmVwbGFjZSgvXFx4MDgvZywgJ1xcXFxiJylcbiAgICAgICAgICAgIC5yZXBsYWNlKC9cXHQvZywgICAnXFxcXHQnKVxuICAgICAgICAgICAgLnJlcGxhY2UoL1xcbi9nLCAgICdcXFxcbicpXG4gICAgICAgICAgICAucmVwbGFjZSgvXFxmL2csICAgJ1xcXFxmJylcbiAgICAgICAgICAgIC5yZXBsYWNlKC9cXHIvZywgICAnXFxcXHInKVxuICAgICAgICAgICAgLnJlcGxhY2UoL1tcXHgwMC1cXHgwN1xceDBCXFx4MEVcXHgwRl0vZywgZnVuY3Rpb24oY2gpIHsgcmV0dXJuICdcXFxceDAnICsgaGV4KGNoKTsgfSlcbiAgICAgICAgICAgIC5yZXBsYWNlKC9bXFx4MTAtXFx4MUZcXHg4MC1cXHhGRl0vZywgICAgZnVuY3Rpb24oY2gpIHsgcmV0dXJuICdcXFxceCcgICsgaGV4KGNoKTsgfSlcbiAgICAgICAgICAgIC5yZXBsYWNlKC9bXFx1MDE4MC1cXHUwRkZGXS9nLCAgICAgICAgIGZ1bmN0aW9uKGNoKSB7IHJldHVybiAnXFxcXHUwJyArIGhleChjaCk7IH0pXG4gICAgICAgICAgICAucmVwbGFjZSgvW1xcdTEwODAtXFx1RkZGRl0vZywgICAgICAgICBmdW5jdGlvbihjaCkgeyByZXR1cm4gJ1xcXFx1JyAgKyBoZXgoY2gpOyB9KTtcbiAgICAgICAgfVxuXG4gICAgICAgIHZhciBleHBlY3RlZERlc2NzID0gbmV3IEFycmF5KGV4cGVjdGVkLmxlbmd0aCksXG4gICAgICAgICAgICBleHBlY3RlZERlc2MsIGZvdW5kRGVzYywgaTtcblxuICAgICAgICBmb3IgKGkgPSAwOyBpIDwgZXhwZWN0ZWQubGVuZ3RoOyBpKyspIHtcbiAgICAgICAgICBleHBlY3RlZERlc2NzW2ldID0gZXhwZWN0ZWRbaV0uZGVzY3JpcHRpb247XG4gICAgICAgIH1cblxuICAgICAgICBleHBlY3RlZERlc2MgPSBleHBlY3RlZC5sZW5ndGggPiAxXG4gICAgICAgICAgPyBleHBlY3RlZERlc2NzLnNsaWNlKDAsIC0xKS5qb2luKFwiLCBcIilcbiAgICAgICAgICAgICAgKyBcIiBvciBcIlxuICAgICAgICAgICAgICArIGV4cGVjdGVkRGVzY3NbZXhwZWN0ZWQubGVuZ3RoIC0gMV1cbiAgICAgICAgICA6IGV4cGVjdGVkRGVzY3NbMF07XG5cbiAgICAgICAgZm91bmREZXNjID0gZm91bmQgPyBcIlxcXCJcIiArIHN0cmluZ0VzY2FwZShmb3VuZCkgKyBcIlxcXCJcIiA6IFwiZW5kIG9mIGlucHV0XCI7XG5cbiAgICAgICAgcmV0dXJuIFwiRXhwZWN0ZWQgXCIgKyBleHBlY3RlZERlc2MgKyBcIiBidXQgXCIgKyBmb3VuZERlc2MgKyBcIiBmb3VuZC5cIjtcbiAgICAgIH1cblxuICAgICAgdmFyIHBvc0RldGFpbHMgPSBwZWckY29tcHV0ZVBvc0RldGFpbHMocG9zKSxcbiAgICAgICAgICBmb3VuZCAgICAgID0gcG9zIDwgaW5wdXQubGVuZ3RoID8gaW5wdXQuY2hhckF0KHBvcykgOiBudWxsO1xuXG4gICAgICBpZiAoZXhwZWN0ZWQgIT09IG51bGwpIHtcbiAgICAgICAgY2xlYW51cEV4cGVjdGVkKGV4cGVjdGVkKTtcbiAgICAgIH1cblxuICAgICAgcmV0dXJuIG5ldyBTeW50YXhFcnJvcihcbiAgICAgICAgbWVzc2FnZSAhPT0gbnVsbCA/IG1lc3NhZ2UgOiBidWlsZE1lc3NhZ2UoZXhwZWN0ZWQsIGZvdW5kKSxcbiAgICAgICAgZXhwZWN0ZWQsXG4gICAgICAgIGZvdW5kLFxuICAgICAgICBwb3MsXG4gICAgICAgIHBvc0RldGFpbHMubGluZSxcbiAgICAgICAgcG9zRGV0YWlscy5jb2x1bW5cbiAgICAgICk7XG4gICAgfVxuXG4gICAgZnVuY3Rpb24gcGVnJGRlY29kZShzKSB7XG4gICAgICB2YXIgYmMgPSBuZXcgQXJyYXkocy5sZW5ndGgpLCBpO1xuXG4gICAgICBmb3IgKGkgPSAwOyBpIDwgcy5sZW5ndGg7IGkrKykge1xuICAgICAgICBiY1tpXSA9IHMuY2hhckNvZGVBdChpKSAtIDMyO1xuICAgICAgfVxuXG4gICAgICByZXR1cm4gYmM7XG4gICAgfVxuXG4gICAgZnVuY3Rpb24gcGVnJHBhcnNlUnVsZShpbmRleCkge1xuICAgICAgdmFyIGJjICAgID0gcGVnJGJ5dGVjb2RlW2luZGV4XSxcbiAgICAgICAgICBpcCAgICA9IDAsXG4gICAgICAgICAgaXBzICAgPSBbXSxcbiAgICAgICAgICBlbmQgICA9IGJjLmxlbmd0aCxcbiAgICAgICAgICBlbmRzICA9IFtdLFxuICAgICAgICAgIHN0YWNrID0gW10sXG4gICAgICAgICAgcGFyYW1zLCBpO1xuXG4gICAgICBmdW5jdGlvbiBwcm90ZWN0KG9iamVjdCkge1xuICAgICAgICByZXR1cm4gT2JqZWN0LnByb3RvdHlwZS50b1N0cmluZy5hcHBseShvYmplY3QpID09PSBcIltvYmplY3QgQXJyYXldXCIgPyBbXSA6IG9iamVjdDtcbiAgICAgIH1cblxuICAgICAgd2hpbGUgKHRydWUpIHtcbiAgICAgICAgd2hpbGUgKGlwIDwgZW5kKSB7XG4gICAgICAgICAgc3dpdGNoIChiY1tpcF0pIHtcbiAgICAgICAgICAgIGNhc2UgMDpcbiAgICAgICAgICAgICAgc3RhY2sucHVzaChwcm90ZWN0KHBlZyRjb25zdHNbYmNbaXAgKyAxXV0pKTtcbiAgICAgICAgICAgICAgaXAgKz0gMjtcbiAgICAgICAgICAgICAgYnJlYWs7XG5cbiAgICAgICAgICAgIGNhc2UgMTpcbiAgICAgICAgICAgICAgc3RhY2sucHVzaChwZWckY3VyclBvcyk7XG4gICAgICAgICAgICAgIGlwKys7XG4gICAgICAgICAgICAgIGJyZWFrO1xuXG4gICAgICAgICAgICBjYXNlIDI6XG4gICAgICAgICAgICAgIHN0YWNrLnBvcCgpO1xuICAgICAgICAgICAgICBpcCsrO1xuICAgICAgICAgICAgICBicmVhaztcblxuICAgICAgICAgICAgY2FzZSAzOlxuICAgICAgICAgICAgICBwZWckY3VyclBvcyA9IHN0YWNrLnBvcCgpO1xuICAgICAgICAgICAgICBpcCsrO1xuICAgICAgICAgICAgICBicmVhaztcblxuICAgICAgICAgICAgY2FzZSA0OlxuICAgICAgICAgICAgICBzdGFjay5sZW5ndGggLT0gYmNbaXAgKyAxXTtcbiAgICAgICAgICAgICAgaXAgKz0gMjtcbiAgICAgICAgICAgICAgYnJlYWs7XG5cbiAgICAgICAgICAgIGNhc2UgNTpcbiAgICAgICAgICAgICAgc3RhY2suc3BsaWNlKC0yLCAxKTtcbiAgICAgICAgICAgICAgaXArKztcbiAgICAgICAgICAgICAgYnJlYWs7XG5cbiAgICAgICAgICAgIGNhc2UgNjpcbiAgICAgICAgICAgICAgc3RhY2tbc3RhY2subGVuZ3RoIC0gMl0ucHVzaChzdGFjay5wb3AoKSk7XG4gICAgICAgICAgICAgIGlwKys7XG4gICAgICAgICAgICAgIGJyZWFrO1xuXG4gICAgICAgICAgICBjYXNlIDc6XG4gICAgICAgICAgICAgIHN0YWNrLnB1c2goc3RhY2suc3BsaWNlKHN0YWNrLmxlbmd0aCAtIGJjW2lwICsgMV0sIGJjW2lwICsgMV0pKTtcbiAgICAgICAgICAgICAgaXAgKz0gMjtcbiAgICAgICAgICAgICAgYnJlYWs7XG5cbiAgICAgICAgICAgIGNhc2UgODpcbiAgICAgICAgICAgICAgc3RhY2sucG9wKCk7XG4gICAgICAgICAgICAgIHN0YWNrLnB1c2goaW5wdXQuc3Vic3RyaW5nKHN0YWNrW3N0YWNrLmxlbmd0aCAtIDFdLCBwZWckY3VyclBvcykpO1xuICAgICAgICAgICAgICBpcCsrO1xuICAgICAgICAgICAgICBicmVhaztcblxuICAgICAgICAgICAgY2FzZSA5OlxuICAgICAgICAgICAgICBlbmRzLnB1c2goZW5kKTtcbiAgICAgICAgICAgICAgaXBzLnB1c2goaXAgKyAzICsgYmNbaXAgKyAxXSArIGJjW2lwICsgMl0pO1xuXG4gICAgICAgICAgICAgIGlmIChzdGFja1tzdGFjay5sZW5ndGggLSAxXSkge1xuICAgICAgICAgICAgICAgIGVuZCA9IGlwICsgMyArIGJjW2lwICsgMV07XG4gICAgICAgICAgICAgICAgaXAgKz0gMztcbiAgICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgICBlbmQgPSBpcCArIDMgKyBiY1tpcCArIDFdICsgYmNbaXAgKyAyXTtcbiAgICAgICAgICAgICAgICBpcCArPSAzICsgYmNbaXAgKyAxXTtcbiAgICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICAgIGJyZWFrO1xuXG4gICAgICAgICAgICBjYXNlIDEwOlxuICAgICAgICAgICAgICBlbmRzLnB1c2goZW5kKTtcbiAgICAgICAgICAgICAgaXBzLnB1c2goaXAgKyAzICsgYmNbaXAgKyAxXSArIGJjW2lwICsgMl0pO1xuXG4gICAgICAgICAgICAgIGlmIChzdGFja1tzdGFjay5sZW5ndGggLSAxXSA9PT0gcGVnJEZBSUxFRCkge1xuICAgICAgICAgICAgICAgIGVuZCA9IGlwICsgMyArIGJjW2lwICsgMV07XG4gICAgICAgICAgICAgICAgaXAgKz0gMztcbiAgICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgICBlbmQgPSBpcCArIDMgKyBiY1tpcCArIDFdICsgYmNbaXAgKyAyXTtcbiAgICAgICAgICAgICAgICBpcCArPSAzICsgYmNbaXAgKyAxXTtcbiAgICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICAgIGJyZWFrO1xuXG4gICAgICAgICAgICBjYXNlIDExOlxuICAgICAgICAgICAgICBlbmRzLnB1c2goZW5kKTtcbiAgICAgICAgICAgICAgaXBzLnB1c2goaXAgKyAzICsgYmNbaXAgKyAxXSArIGJjW2lwICsgMl0pO1xuXG4gICAgICAgICAgICAgIGlmIChzdGFja1tzdGFjay5sZW5ndGggLSAxXSAhPT0gcGVnJEZBSUxFRCkge1xuICAgICAgICAgICAgICAgIGVuZCA9IGlwICsgMyArIGJjW2lwICsgMV07XG4gICAgICAgICAgICAgICAgaXAgKz0gMztcbiAgICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgICBlbmQgPSBpcCArIDMgKyBiY1tpcCArIDFdICsgYmNbaXAgKyAyXTtcbiAgICAgICAgICAgICAgICBpcCArPSAzICsgYmNbaXAgKyAxXTtcbiAgICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICAgIGJyZWFrO1xuXG4gICAgICAgICAgICBjYXNlIDEyOlxuICAgICAgICAgICAgICBpZiAoc3RhY2tbc3RhY2subGVuZ3RoIC0gMV0gIT09IHBlZyRGQUlMRUQpIHtcbiAgICAgICAgICAgICAgICBlbmRzLnB1c2goZW5kKTtcbiAgICAgICAgICAgICAgICBpcHMucHVzaChpcCk7XG5cbiAgICAgICAgICAgICAgICBlbmQgPSBpcCArIDIgKyBiY1tpcCArIDFdO1xuICAgICAgICAgICAgICAgIGlwICs9IDI7XG4gICAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgICAgaXAgKz0gMiArIGJjW2lwICsgMV07XG4gICAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgICBicmVhaztcblxuICAgICAgICAgICAgY2FzZSAxMzpcbiAgICAgICAgICAgICAgZW5kcy5wdXNoKGVuZCk7XG4gICAgICAgICAgICAgIGlwcy5wdXNoKGlwICsgMyArIGJjW2lwICsgMV0gKyBiY1tpcCArIDJdKTtcblxuICAgICAgICAgICAgICBpZiAoaW5wdXQubGVuZ3RoID4gcGVnJGN1cnJQb3MpIHtcbiAgICAgICAgICAgICAgICBlbmQgPSBpcCArIDMgKyBiY1tpcCArIDFdO1xuICAgICAgICAgICAgICAgIGlwICs9IDM7XG4gICAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgICAgZW5kID0gaXAgKyAzICsgYmNbaXAgKyAxXSArIGJjW2lwICsgMl07XG4gICAgICAgICAgICAgICAgaXAgKz0gMyArIGJjW2lwICsgMV07XG4gICAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgICBicmVhaztcblxuICAgICAgICAgICAgY2FzZSAxNDpcbiAgICAgICAgICAgICAgZW5kcy5wdXNoKGVuZCk7XG4gICAgICAgICAgICAgIGlwcy5wdXNoKGlwICsgNCArIGJjW2lwICsgMl0gKyBiY1tpcCArIDNdKTtcblxuICAgICAgICAgICAgICBpZiAoaW5wdXQuc3Vic3RyKHBlZyRjdXJyUG9zLCBwZWckY29uc3RzW2JjW2lwICsgMV1dLmxlbmd0aCkgPT09IHBlZyRjb25zdHNbYmNbaXAgKyAxXV0pIHtcbiAgICAgICAgICAgICAgICBlbmQgPSBpcCArIDQgKyBiY1tpcCArIDJdO1xuICAgICAgICAgICAgICAgIGlwICs9IDQ7XG4gICAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgICAgZW5kID0gaXAgKyA0ICsgYmNbaXAgKyAyXSArIGJjW2lwICsgM107XG4gICAgICAgICAgICAgICAgaXAgKz0gNCArIGJjW2lwICsgMl07XG4gICAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgICBicmVhaztcblxuICAgICAgICAgICAgY2FzZSAxNTpcbiAgICAgICAgICAgICAgZW5kcy5wdXNoKGVuZCk7XG4gICAgICAgICAgICAgIGlwcy5wdXNoKGlwICsgNCArIGJjW2lwICsgMl0gKyBiY1tpcCArIDNdKTtcblxuICAgICAgICAgICAgICBpZiAoaW5wdXQuc3Vic3RyKHBlZyRjdXJyUG9zLCBwZWckY29uc3RzW2JjW2lwICsgMV1dLmxlbmd0aCkudG9Mb3dlckNhc2UoKSA9PT0gcGVnJGNvbnN0c1tiY1tpcCArIDFdXSkge1xuICAgICAgICAgICAgICAgIGVuZCA9IGlwICsgNCArIGJjW2lwICsgMl07XG4gICAgICAgICAgICAgICAgaXAgKz0gNDtcbiAgICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgICBlbmQgPSBpcCArIDQgKyBiY1tpcCArIDJdICsgYmNbaXAgKyAzXTtcbiAgICAgICAgICAgICAgICBpcCArPSA0ICsgYmNbaXAgKyAyXTtcbiAgICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICAgIGJyZWFrO1xuXG4gICAgICAgICAgICBjYXNlIDE2OlxuICAgICAgICAgICAgICBlbmRzLnB1c2goZW5kKTtcbiAgICAgICAgICAgICAgaXBzLnB1c2goaXAgKyA0ICsgYmNbaXAgKyAyXSArIGJjW2lwICsgM10pO1xuXG4gICAgICAgICAgICAgIGlmIChwZWckY29uc3RzW2JjW2lwICsgMV1dLnRlc3QoaW5wdXQuY2hhckF0KHBlZyRjdXJyUG9zKSkpIHtcbiAgICAgICAgICAgICAgICBlbmQgPSBpcCArIDQgKyBiY1tpcCArIDJdO1xuICAgICAgICAgICAgICAgIGlwICs9IDQ7XG4gICAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgICAgZW5kID0gaXAgKyA0ICsgYmNbaXAgKyAyXSArIGJjW2lwICsgM107XG4gICAgICAgICAgICAgICAgaXAgKz0gNCArIGJjW2lwICsgMl07XG4gICAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgICBicmVhaztcblxuICAgICAgICAgICAgY2FzZSAxNzpcbiAgICAgICAgICAgICAgc3RhY2sucHVzaChpbnB1dC5zdWJzdHIocGVnJGN1cnJQb3MsIGJjW2lwICsgMV0pKTtcbiAgICAgICAgICAgICAgcGVnJGN1cnJQb3MgKz0gYmNbaXAgKyAxXTtcbiAgICAgICAgICAgICAgaXAgKz0gMjtcbiAgICAgICAgICAgICAgYnJlYWs7XG5cbiAgICAgICAgICAgIGNhc2UgMTg6XG4gICAgICAgICAgICAgIHN0YWNrLnB1c2gocGVnJGNvbnN0c1tiY1tpcCArIDFdXSk7XG4gICAgICAgICAgICAgIHBlZyRjdXJyUG9zICs9IHBlZyRjb25zdHNbYmNbaXAgKyAxXV0ubGVuZ3RoO1xuICAgICAgICAgICAgICBpcCArPSAyO1xuICAgICAgICAgICAgICBicmVhaztcblxuICAgICAgICAgICAgY2FzZSAxOTpcbiAgICAgICAgICAgICAgc3RhY2sucHVzaChwZWckRkFJTEVEKTtcbiAgICAgICAgICAgICAgaWYgKHBlZyRzaWxlbnRGYWlscyA9PT0gMCkge1xuICAgICAgICAgICAgICAgIHBlZyRmYWlsKHBlZyRjb25zdHNbYmNbaXAgKyAxXV0pO1xuICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgIGlwICs9IDI7XG4gICAgICAgICAgICAgIGJyZWFrO1xuXG4gICAgICAgICAgICBjYXNlIDIwOlxuICAgICAgICAgICAgICBwZWckcmVwb3J0ZWRQb3MgPSBzdGFja1tzdGFjay5sZW5ndGggLSAxIC0gYmNbaXAgKyAxXV07XG4gICAgICAgICAgICAgIGlwICs9IDI7XG4gICAgICAgICAgICAgIGJyZWFrO1xuXG4gICAgICAgICAgICBjYXNlIDIxOlxuICAgICAgICAgICAgICBwZWckcmVwb3J0ZWRQb3MgPSBwZWckY3VyclBvcztcbiAgICAgICAgICAgICAgaXArKztcbiAgICAgICAgICAgICAgYnJlYWs7XG5cbiAgICAgICAgICAgIGNhc2UgMjI6XG4gICAgICAgICAgICAgIHBhcmFtcyA9IGJjLnNsaWNlKGlwICsgNCwgaXAgKyA0ICsgYmNbaXAgKyAzXSk7XG4gICAgICAgICAgICAgIGZvciAoaSA9IDA7IGkgPCBiY1tpcCArIDNdOyBpKyspIHtcbiAgICAgICAgICAgICAgICBwYXJhbXNbaV0gPSBzdGFja1tzdGFjay5sZW5ndGggLSAxIC0gcGFyYW1zW2ldXTtcbiAgICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICAgIHN0YWNrLnNwbGljZShcbiAgICAgICAgICAgICAgICBzdGFjay5sZW5ndGggLSBiY1tpcCArIDJdLFxuICAgICAgICAgICAgICAgIGJjW2lwICsgMl0sXG4gICAgICAgICAgICAgICAgcGVnJGNvbnN0c1tiY1tpcCArIDFdXS5hcHBseShudWxsLCBwYXJhbXMpXG4gICAgICAgICAgICAgICk7XG5cbiAgICAgICAgICAgICAgaXAgKz0gNCArIGJjW2lwICsgM107XG4gICAgICAgICAgICAgIGJyZWFrO1xuXG4gICAgICAgICAgICBjYXNlIDIzOlxuICAgICAgICAgICAgICBzdGFjay5wdXNoKHBlZyRwYXJzZVJ1bGUoYmNbaXAgKyAxXSkpO1xuICAgICAgICAgICAgICBpcCArPSAyO1xuICAgICAgICAgICAgICBicmVhaztcblxuICAgICAgICAgICAgY2FzZSAyNDpcbiAgICAgICAgICAgICAgcGVnJHNpbGVudEZhaWxzKys7XG4gICAgICAgICAgICAgIGlwKys7XG4gICAgICAgICAgICAgIGJyZWFrO1xuXG4gICAgICAgICAgICBjYXNlIDI1OlxuICAgICAgICAgICAgICBwZWckc2lsZW50RmFpbHMtLTtcbiAgICAgICAgICAgICAgaXArKztcbiAgICAgICAgICAgICAgYnJlYWs7XG5cbiAgICAgICAgICAgIGRlZmF1bHQ6XG4gICAgICAgICAgICAgIHRocm93IG5ldyBFcnJvcihcIkludmFsaWQgb3Bjb2RlOiBcIiArIGJjW2lwXSArIFwiLlwiKTtcbiAgICAgICAgICB9XG4gICAgICAgIH1cblxuICAgICAgICBpZiAoZW5kcy5sZW5ndGggPiAwKSB7XG4gICAgICAgICAgZW5kID0gZW5kcy5wb3AoKTtcbiAgICAgICAgICBpcCA9IGlwcy5wb3AoKTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICBicmVhaztcbiAgICAgICAgfVxuICAgICAgfVxuXG4gICAgICByZXR1cm4gc3RhY2tbMF07XG4gICAgfVxuXG5cbiAgICAgIGhlbHBlcnMgPSByZXF1aXJlKCcuLi9saWIvaGVscGVycycpO1xuICAgICAgcHJlZml4ZXMgPSByZXF1aXJlKCcuL3ByZWZpeGVzLmpzb24nKTtcbiAgICAgIG1ldHJpY3MgPSByZXF1aXJlKCcuL21ldHJpY3MuanNvbicpO1xuICAgICAgbXVsdGlwbHkgPSBoZWxwZXJzLm11bHRpcGx5O1xuICAgICAgdG9wb3dlciA9IGhlbHBlcnMudG9wb3dlcjtcbiAgICAgIGNsZWFudXAgPSBoZWxwZXJzLmNsZWFudXA7XG4gICAgICBpc21ldHJpYyA9IGhlbHBlcnMuaXNtZXRyaWMobWV0cmljcyk7XG5cblxuICAgIHBlZyRyZXN1bHQgPSBwZWckcGFyc2VSdWxlKHBlZyRzdGFydFJ1bGVJbmRleCk7XG5cbiAgICBpZiAocGVnJHJlc3VsdCAhPT0gcGVnJEZBSUxFRCAmJiBwZWckY3VyclBvcyA9PT0gaW5wdXQubGVuZ3RoKSB7XG4gICAgICByZXR1cm4gcGVnJHJlc3VsdDtcbiAgICB9IGVsc2Uge1xuICAgICAgaWYgKHBlZyRyZXN1bHQgIT09IHBlZyRGQUlMRUQgJiYgcGVnJGN1cnJQb3MgPCBpbnB1dC5sZW5ndGgpIHtcbiAgICAgICAgcGVnJGZhaWwoeyB0eXBlOiBcImVuZFwiLCBkZXNjcmlwdGlvbjogXCJlbmQgb2YgaW5wdXRcIiB9KTtcbiAgICAgIH1cblxuICAgICAgdGhyb3cgcGVnJGJ1aWxkRXhjZXB0aW9uKG51bGwsIHBlZyRtYXhGYWlsRXhwZWN0ZWQsIHBlZyRtYXhGYWlsUG9zKTtcbiAgICB9XG4gIH1cblxuICByZXR1cm4ge1xuICAgIFN5bnRheEVycm9yOiBTeW50YXhFcnJvcixcbiAgICBwYXJzZTogICAgICAgcGFyc2VcbiAgfTtcbn0pKCk7XG4iLCJtb2R1bGUuZXhwb3J0cyA9IHtcblxuICBtdWx0aXBseTogZnVuY3Rpb24gbXVsdGlwbHkodCwgbXMpIHtcbiAgICBpZiAobXMubGVuZ3RoID09IDApIHJldHVybiB0O1xuXG4gICAgdmFyIHJldCA9IHQ7XG4gICAgbXMuZm9yRWFjaChmdW5jdGlvbihtdGVybSl7XG5cbiAgICAgIHZhciBzaWduID0gKG10ZXJtWzBdID09IFwiLlwiID8gMSA6IC0xKTtcbiAgICAgIHZhciBiID0gbXRlcm1bMV07XG5cbiAgICAgIHJldC52YWx1ZSAqPSBNYXRoLnBvdyhiLnZhbHVlLCBzaWduKTtcbiAgICAgIE9iamVjdC5rZXlzKGIudW5pdHMpLmZvckVhY2goZnVuY3Rpb24odSl7XG4gICAgICAgIHJldC51bml0c1t1XSA9IHJldC51bml0c1t1XSB8fCAwO1xuICAgICAgICByZXQudW5pdHNbdV0gPSByZXQudW5pdHNbdV0gKyBzaWduKmIudW5pdHNbdV07XG4gICAgICAgIGlmIChyZXQudW5pdHNbdV0gPT0gMCl7XG4gICAgICAgICAgZGVsZXRlIHJldC51bml0c1t1XTtcbiAgICAgICAgfVxuICAgICAgfSk7XG5cbiAgICB9KTtcbiAgICByZXR1cm4gcmV0O1xuICB9LFxuXG4gIHRvcG93ZXI6IGZ1bmN0aW9uIHRvcG93ZXIoZSwgZXhwKXtcbiAgICBpZiAoIWV4cCkge2V4cCA9IDE7fVxuICAgIHZhciByZXQgPSBlO1xuICAgIHJldC52YWx1ZSA9IE1hdGgucG93KHJldC52YWx1ZSwgZXhwKTtcbiAgICBPYmplY3Qua2V5cyhlLnVuaXRzKS5mb3JFYWNoKGZ1bmN0aW9uKHUpe1xuICAgICAgcmV0LnVuaXRzW3VdID0gZS51bml0c1t1XSAqIGV4cDtcbiAgICB9KTtcblxuICAgIHJldHVybiByZXQ7XG4gIH0sXG5cbiAgY2xlYW51cDogZnVuY3Rpb24gY2xlYW51cChlKSB7XG4gICAgW1wiMTBeXCIsIFwiMTAqXCJdLmZvckVhY2goZnVuY3Rpb24oayl7XG4gICAgICBpZiAoZS51bml0c1trXSkge1xuICAgICAgICBlLnZhbHVlICo9IE1hdGgucG93KDEwLCBlLnVuaXRzW2tdKTtcbiAgICAgICAgZGVsZXRlIGUudW5pdHNba107XG4gICAgICB9XG4gICAgfSlcbiAgICByZXR1cm4gZTtcbiAgfSxcblxuICBpc21ldHJpYzogZnVuY3Rpb24obWV0cmljcykge1xuICAgIHJldHVybiBmdW5jdGlvbih1KSB7XG4gICAgICByZXR1cm4gbWV0cmljc1tPYmplY3Qua2V5cyh1LnVuaXRzKVswXV0gIT09IHVuZGVmaW5lZDtcbiAgICB9O1xuICB9XG59XG4iLCJwYXJzZXIgPSByZXF1aXJlKCcuL2dlbmVyYXRlZC91Y3VtLXBhcnNlci5qcycpO1xuZXF1aXZhbGVudHMgPSByZXF1aXJlKCcuL2dlbmVyYXRlZC9lcXVpdmFsZW50cy5qc29uJyk7XG5oZWxwZXJzID0gcmVxdWlyZSgnLi9saWIvaGVscGVycy5qcycpO1xuXG5tb2R1bGUuZXhwb3J0cyA9IHtcbiAgcGFyc2U6IHBhcnNlLFxuICBjYW5vbmljYWxpemU6IGNhbm9uaWNhbGl6ZSxcbiAgY29udmVydDogY29udmVydFxufTtcblxuZnVuY3Rpb24gcGFyc2UodmFsdWUsIHVuaXRzKXtcblxuICBpZiAoYXJndW1lbnRzLmxlbmd0aCA9PT0gMSB8fCB1bml0cyA9PT0gdW5kZWZpbmVkKXtcbiAgICB1bml0cyA9IHZhbHVlO1xuICAgIHZhbHVlID0gMVxuICB9XG5cbiAgaWYgKHVuaXRzLm1hdGNoKC9eXFwvLykpe1xuICAgIHVuaXRzID0gJzEnK3VuaXRzO1xuICB9XG5cbiAgaWYgKHVuaXRzID09PSAnJykgdW5pdHMgPSAnMSc7XG5cbiAgdmFyIHJldCA9IHBhcnNlci5wYXJzZSh1bml0cyk7XG4gIHJldC52YWx1ZSAqPSB2YWx1ZTtcbiAgcmV0dXJuIHJldDtcbn1cblxuZnVuY3Rpb24gbm9uQmFzZVVuaXQodSl7XG4gIHJldHVybiBlcXVpdmFsZW50c1t1XSAhPT0gdW5kZWZpbmVkO1xufVxuXG5mdW5jdGlvbiByZW1haW5pbmdOb25CYXNlVW5pdHModmFsdWUpIHtcbiAgcmV0dXJuIE9iamVjdC5rZXlzKHZhbHVlLnVuaXRzKS5maWx0ZXIobm9uQmFzZVVuaXQpXG59XG5cbmZ1bmN0aW9uIGNhbm9uaWNhbGl6ZSh2YWx1ZSwgdW5pdHMpe1xuXG4gIHZhbHVlID0gcGFyc2UodmFsdWUsIHVuaXRzKTtcblxuICB2YXIgcmVtYWluaW5nID0gcmVtYWluaW5nTm9uQmFzZVVuaXRzKHZhbHVlKTtcblxuICB3aGlsZSAocmVtYWluaW5nLmxlbmd0aCkge1xuICAgIGlmIChyZW1haW5pbmcubGVuZ3RoID09PSAwKSB7XG4gICAgICByZXR1cm4gZmFsc2U7XG4gICAgfVxuXG4gICAgcmVtYWluaW5nLmZvckVhY2goZnVuY3Rpb24odSl7XG4gICAgICB2YXIgc3ViID0gcGFyc2UoZXF1aXZhbGVudHNbdV0udWN1bSk7XG4gICAgICBzdWIudmFsdWUgKj0gZXF1aXZhbGVudHNbdV0udmFsdWU7XG4gICAgICBzdWIgPSBoZWxwZXJzLnRvcG93ZXIoc3ViLCB2YWx1ZS51bml0c1t1XSk7XG4gICAgICB2YWx1ZSA9IGhlbHBlcnMubXVsdGlwbHkodmFsdWUsIFtbJy4nLCBzdWJdXSk7XG4gICAgICBkZWxldGUgdmFsdWUudW5pdHNbdV07XG4gICAgfSk7XG5cbiAgICByZW1haW5pbmcgPSByZW1haW5pbmdOb25CYXNlVW5pdHModmFsdWUpO1xuICB9XG5cbiAgcmV0dXJuIHZhbHVlO1xufVxuXG5mdW5jdGlvbiBjb25mb3JtYW50KGEsIGIpe1xuICB2YXIgcmV0ID0gdHJ1ZTtcbiAgT2JqZWN0LmtleXMoYS51bml0cylcbiAgLmNvbmNhdChPYmplY3Qua2V5cyhiLnVuaXRzKSlcbiAgLmZvckVhY2goZnVuY3Rpb24oayl7XG4gICAgaWYgKGEudW5pdHNba10gIT09IGIudW5pdHNba10pIHtcbiAgICAgIHJldCA9IGZhbHNlO1xuICAgIH1cbiAgfSk7XG4gIFxuICByZXR1cm4gcmV0O1xufVxuXG5mdW5jdGlvbiBjb252ZXJ0KGZyb21WYWx1ZSwgZnJvbVVuaXRzLCB0b1VuaXRzKXtcbiBmcm9tYyA9IGNhbm9uaWNhbGl6ZShmcm9tVmFsdWUsIGZyb21Vbml0cyk7XG4gdG9jID0gY2Fub25pY2FsaXplKHRvVW5pdHMpO1xuXG4gaWYgKCFjb25mb3JtYW50KGZyb21jLCB0b2MpKXtcbiAgIHRocm93IFwiTm9uLWNvbmZvcm1hbnQgdW5pdHM7IGNhbid0IGNvbnZlcnQgZnJvbSBcIiArIGZyb21Vbml0cyArIFwiIHRvIFwiICsgdG9Vbml0cyA7XG4gfVxuXG4gcmV0dXJuIGZyb21jLnZhbHVlIC8gdG9jLnZhbHVlO1xuXG59XG4iXX0=
