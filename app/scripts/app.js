(function(document) {
  'use strict';

  document.addEventListener('polymer-ready', function() {
    // Perform some behaviour
    console.log('Polymer is ready to rock!');
  });

  window.BUDGET_SCHEMA = {
    "Fertilizer": [
        {
            "item": "11-52-0",
            "unit": "lb"
        },
        {
            "item": "10-34-00",
            "unit": "lb"
        },
        {
            "item": "16-16-16",
            "unit": "lb N"
        },
        {
            "item": "80-00-00",
            "unit": "lb N"
        },
        {
            "item": "40-0-0-6",
            "units": "lb"
        },
        {
            "item": "32-0-0",
            "units": "lb"
        },
        {
            "item": "80-0-0",
            "units": ""
        },
        {
            "item": "33-0-0-12",
            "units": ""
        },
        {
            "item": "16-20-0-14",
            "units": "lb"
        },
        {
            "item": "18-0-5-4",
            "units": "lb"
        },
        {
            "item": "46-0-0",
            "alt" : ["Urea 46-0-0"],
            "unit": "lb N"
        },
        {
            "item": "13-0-45",
            "units": ""
        },
        {
            "item": "0-0-60",
            "units": ""
        },
        {
            "item": "Surfactant-Induce",
            "units": "gal"
        },
        {
            "item": "Apogee",
            "units": "lb"
        },
        {
            "item": "Dry P2O5",
            "unit": "lb"
        },
        {
            "item": "Sulfur",
            "unit": "lb"
        },
        {
            "item": "Dry Nitrogen",
            "alt" : ["Nitrogen", "Nitrogen (dry)", "Dry Nitrogen - Preplant"],
            "unit": "lb"
        },
        {
            "item": "Dry Phosphate",
            "alt" : ["Phosphorous","Phosphorous (dry)"],
            "unit": "lb"
        },
        {
            "item": "Dry Potash",
            "unit": "lb"
        },
        {
            "item": "Dry Sulfur",
            "alt" : ["Sulfur (dry)"],
            "unit": "lb"
        },
        {
            "item": "Sulfuric Acid",
            "unit": "lbN"
        },
        {
            "item": "Mulch",
            "unit": "lbN"
        },
        {
            "item": "UN32",
            "unit": "lbN"
        },
        {
            "item": "K20",
            "alt": ["K2O"],
            "unit": "lb"
        },
        {
            "item": "Zinc",
            "unit": "lb"
        },
        {
            "item": "Micronutrients",
            "units": "ac"
        },
        {
            "item": "Liquid Nitrogen",
            "units": "lb"
        },
        {
            "item": "Liquid P2O5",
            "units": "lb"
        } 
    ],
    "Pesticides": [
        {
            "item": "Roundup",
            "alt": ["Roundup Original Max", "Roundup Ultra Max"],
            "unit": "oz"
        },
        {
            "item": "Ridomil Gold EC",
            "units": "oz"
        },
        {
            "item": "Rally 40 WSP",
            "units": "oz"
        },
        {
            "item": "Karmex DF",
            "units": "lb"
        },
        {
            "item": "Di-Syston",
            "units": "pt"
        },
        {
            "item": "Ammonium Sulfate",
            "unit": ""
        },
        {
            "item": "Metam Sodium",
            "units": "gal"
        },
        {
            "item": "Admire Pro",
            "units": "oz"
        },
        {
            "item": "MCPA Amine",
            "units": "gal"
        },
        {
            "item": "Diomethate",
            "units": "gal"
        },
        {
            "item": "Mustang 1.5 EW",
            "units": "gal"
        },
        {
            "item": "2,4-D",
            "units": "oz"
        },
        {
            "item": "Maverick1",
            "units": "oz"
        },
        {
            "item": "Discover",
            "units": "oz"
        },
        {
            "item": "Axiom OZ",
            "units": "oz"
        },
        {
            "item": "Brox M",
            "units": "oz"
        },
        {
            "item": "Puma 1EC",
            "units": "oz"
        },
        {
            "item": "Starane-Salvo",
            "units": "oz"
        },
        {
            "item": "Stratego",
            "units": "oz"
        },
        {
            "item": "Slug Bait",
            "units": "lb"
        },
        {
            "item": "Shark EW",
            "units": "oz"
        },
        {
            "item": "Excel 90",
            "units": "oz"
        },
        {
            "item": "Harmony Extra",
            "units": "oz"
        },
        {
            "item": "Osprey",
            "units": "oz"
        },
        {
            "item": "Lorsban 15G",
            "units": "oz"
        },
        {
            "item": "M90",
            "unit": ""
        },
        {
            "item": "Achieve SC",
            "unit": ""
        },
        {
            "item": "Starane+Sword",
            "unit": ""
        },
        {
            "item": "Pursuit",
            "unit": "oz"
        },
        {
            "item": "Prowl",
            "unit": "oz"
        },
        {
            "item": "Dimethoate",
            "unit": "oz"
        },
        {
            "item": "Far-GO",
            "unit": "pt"
        },
        {
            "item": "Quadris",
            "units": "oz"
        },
        {
            "item": "Outlook 6EC",
            "units": "oz"
        },
        {
            "item": "Sencor 75DF",
            "units": "lb"
        },
        {
            "item": "Prowl 3.3EC",
            "units": "qt"
        },
        {
            "item": "Endura (2x)",
            "units": "oz"
        },
        {
            "item": "Dithane F45 Rainshield",
            "units": "qt"
        },
        {
            "item": "Headline",
            "units": "oz"
        },
        {
            "item": "Leverage 2.7",
            "units": "oz"
        },
        {
            "item": "Reglone",
            "units": "qt"
        },
        {
            "item": "Telone II",
            "units": "gal"
        },
        {
            "item": "Poncho Beta Seed Treatment",
            "units": "unit"
        },
        {
            "item": "AMS",
            "units": "lb"
        },
        {
            "item": "Gen 25WG",
            "units": "oz"
        },
        {
            "item": "Treflan 4HFP",
            "units": "pt"
        },
        {
            "item": "Lorsban 4E",
            "unit": "pint"
        },
        {
            "item": "Lannate 90 SP",
            "unit": "lb"
        },
        {
            "item": "Treflan TR 10",
            "unit": "lb"
        },
        {
            "item": "Select Max",
            "unit": "floz"
        },
        {
            "item": "Velpar L",
            "unit": "pint"
        },
        {
            "item": "Karmex",
            "unit": "lb"
        },
        {
            "item": "Malathion",
            "unit": ""
        },
        {
            "item": "Sencor 4L",
            "unit": ""
        },
        {
            "item": "Rodent Control",
            "unit": ""
        },
        {
            "item": "Insecticide",
            "unit": ""
        },
        {
            "item": "Weed Control",
            "unit": ""
        },
        {
            "item": "Success",
            "unit": "floz"
        },
        {
            "item": "Devrinol 50DF",
            "unit": "lb"
        },
        {
            "item": "Surflan AS",
            "unit": "pint"
        },
        {
            "item": "Pristine",
            "unit": "oz"
        },
        {
            "item": "Yukon",
            "unit": "oz"
        },
        {
            "item": "Prowl H20",
            "unit": "pint"
        },
        {
            "item": "Lorban 15G",
            "unit": "oz"
        },
        {
            "item": "Oberon 25C",
            "unit": "floz"
        },
        {
            "item": "Micro-Tech",
            "unit": "qt"
        },
        {
            "item": "Counter 15G L-N-L",
            "unit": "lb"
        },
        {
            "item": "Assure II",
            "unit": "oz"
        },
        {
            "item": "Capture",
            "unit": "acre"
        },
        {
            "item": "Sonalan HFP",
            "unit": "pt"
        },
        {
            "item": "Eptam 7EC",
            "unit": "pt"
        },
        {
            "item": "Clarity",
            "unit": "pint"
        },
        {
            "item": "Prowl H2O",
            "unit": "pint"
        },
        {
            "item": "Orthene",
            "units": "oz"
        },
        {
            "item": "Zephyr",
            "units": "floz"
        },
        {
            "item": "Carbine 50WG",
            "units": "oz"
        },
        {
            "item": "Leverage",
            "units": "floz"
        },
        {
            "item": "Assail 70WP",
            "units": "oz"
        },
        {
            "item": "Finish 6 Pro",
            "units": "pint"
        },
        {
            "item": "Ginstar",
            "units": "floz"
        },
        {
            "item": "Defol 5",
            "units": "gal"
        },
        {
            "item": "Triflurex HFP",
            "units": ""
        },
        {
            "item": "Staple",
            "units": "floz"
        },
        {
            "item": "Mepex Gin Our",
            "units": "floz"
        },
        {
            "item": "Dacthal",
            "units": "lb"
        },
        {
            "item": "Goal Tender",
            "units": "oz"
        },
        {
            "item": "Admire",
            "units": "oz"
        },
        {
            "item": "Synapse WG",
            "units": "oz"
        },
        {
            "item": "LI 700",
            "units": "oz"
        },
        {
            "item": "Axiom LB",
            "units": "lb"
        },
        {
            "item": "Goal",
            "units": "gal"
        },
        {
            "item": "Diuron",
            "units": "lb"
        },
        {
            "item": "Banvel",
            "units": "gal"
        },
        {
            "item": "Quilt",
            "units": "gal"
        },
        {
            "item": "Kerb",
            "units": "lb"
        },
        {
            "item": "Bravo",
            "units": "gal"
        },
        {
            "item": "Glyphosate GAL1",
            "units": ""
        },
        {
            "item": "Disyston",
            "units": "gal"
        },
        {
            "item": "Sencor",
            "units": "lb"
        },
        {
            "item": "Sevin XLR Plus",
            "units": "gal"
        },
        {
            "item": "Treflan FP",
            "units": "gal"
        },
        {
            "item": "Spot Spray Roundup",
            "units": "gal"
        }
    ],
    "Labor": [
        {
            "item": "Labor (Machine)",
            "unit": "hrs"
        },
        {
            "item": "Labor (non-machine)",
            "unit": "hrs"
        },
        {
            "item": "Labor (Irrigation)",
            "unit": "hr"
        },
        {
            "item": "Labor (Other)",
            "alt" : ["Labor (other)"],
            "unit": "hr"
        }
    ],
    "Fuel": [
        {
            "item": "Gas",
            "alt" : ["Fuel - Gas"],
            "unit": "gal"
        },
        {
            "item": "Diesel",
            "alt" : ["Fuel - Diesel"],
            "unit": "gal"
        },
        {
            "item": "Fuel",
            "unit": "gal"
        }
    ],
    "Repair & Maintenance": [
        {
            "item": "Maintenance",
            "unit": ""
        },
        {
            "item": "Repair",
            "unit": ""
        },
        {
            "item": "Maintenance and Repair",
            "units": ""
        },
        {
            "item": "Lubricants",
            "alt" : ["Lube"],
            "unit": ""
        },
        {
            "item": "Repair",
            "unit": ""
        }
    ],
    "Custom & Consultant": [
        {
            "item": "Air Application",
            "alt" : ["Custom Aerial Spray", "Custom Air Spray", "Aerial Spraying"],
            "unit": "acre"
        },
        {
            "item": "Custom Air Spray - 5G",
            "units": "acre"
        },
        {
            "item": "Custom Sidedress",
            "units": "acre"
        },
        {
            "item": "Consultant",
            "units": "acre"
        },
        {
            "item": "Ground Application",
            "unit": ""
        },
        {
            "item": "Swath Rake",
            "unit": ""
        },
        {
            "item": "Packing",
            "units": "crt"
        },
        {
            "item": "Swathing",
            "unit": "acre"
        },
        {
            "item": "Rake",
            "unit": "acre"
        },
        {
            "item": "Injection-Sidedress NH3",
            "units": ""
        },
        {
            "item": "Harvest Combine Grain",
            "units": ""
        },
        {
            "item": "Harvest: Haul Grain",
            "units": ""
        },
        {
            "item": "Bale",
            "alt" : ["Baling"],
            "unit": ""
        },
        {
            "item": "Haul and Stack",
            "unit": ""
        },
        {
            "item": "Tarping",
            "unit": ""
        },
        {
            "item": "Roadside Hay",
            "unit": ""
        },
        {
            "item": "Tissue Analysis",
            "unit": ""
        },
        {
            "item": "Broadcast Fertilizer",
            "unit": ""
        },
        {
            "item": "Sawdust",
            "unit": ""
        },
        {
            "item": "Pesticide Application",
            "unit": ""
        },
        {
            "item": "Bird Control",
            "unit": ""
        },
        {
            "item": "Harvest",
            "alt" : ["Harvest for Grain"],
            "unit": ""
        },
        {
            "item": "Bee Hives",
            "unit": "hive"
        },
        {
            "item": "Rental Sprayer",
            "unit": "acre"
        },
        {
            "item": "Custom Fertilize",
            "unit": "acre"
        },
        {
            "item": "Custom Combining",
            "unit": "acre"
        },
        {
            "item": "Rental Ripper Shooter",
            "unit": "acre"
        },
        {
            "item": "Plant",
            "unit": "acre"
        },
        {
            "item": "Cut/Windrow",
            "unit": "acre"
        },
        {
            "item": "Combine",
            "unit": "acre"
        },
        {
            "item": "Application",
            "unit": ""
        },
        {
            "item": "Custom Fumigate - Deep",
            "units": ""
        },
        {
            "item": "Fumigation",
            "units": "acre"
        },
        {
            "item": "Rental Fertilizer Applicator",
            "units": ""
        },
        {
            "item": "Combine Wheat",
            "units": ""
        },
        {
            "item": "Pest Control Consultant",
            "units": ""
        },
        {
            "item": "Sprayer",
            "units": "acre"
        },
        {
            "item": "Riper Shooter",
            "units": "acre"
        },
        {
            "item": "Stuble Shredder",
            "units": "acre"
        },
        {
            "item": "Injection-Sidedress",
            "units": "acre"
        },
        {
            "item": "Swath",
            "units": "acre"
        },
        {
            "item": "Roadside Bales",
            "units": "acre"
        },
        {
            "item": "PCA Consultant",
            "units": ""
        },
        {
            "item": "Planting",
            "units": "thou"
        },
        {
            "item": "Certification",
            "units": ""
        },
        {
            "item" : "Fertilize",
            "alt": ["Application of fertilizer", "Fertilizer Application", "Fertilization"],
            "units": ""
        },
        {
            "item": "Postharvest and packaging",
            "units": ""
        },
        {
            "item": "Combining",
            "units": ""
        },
        {
            "item": "Commission Assess",
            "units": ""
        },
        {
            "item": "Purity and Germ",
            "units": "cwt"
        },
        {
            "item": "Seed Cleand and Bag",
            "alt" : ["Seed Clean and Bag", "Clean Seed Orchdgr"],
            "units": "cwt"
        },
        {
            "item": "Lime",
            "units": "ton"
        }
    ],
    "Transport And Assesment": [
        {
            "item": "Assesment",
            "unit": "cwt"
        },
        {
            "item": "Cotton Assesment",
            "units": "bale"
        },
        {
            "item" : "Wheat Assesment",
            "unit": "cwt"
        },
        {
            "item": "Water Assesment",
            "unit": "acre"
        },
        {
            "item": "Haul Local",
            "unit": "cwt"
        },
        {
            "item": "Transport",
            "unit": "cwt"
        },
        {
            "item": "Commision Assess",
            "unit": "cwt"
        },
        {
            "item": "Seed Test",
            "unit": "cwt"
        },
        {
            "item": "Transport to PDX",
            "unit": ""
        },
        {
            "item": "Fees Assesment",
            "units": "cwt"
        },
    ],
    "Others": [
        {
            "item": "Storage Repairs",
            "units": "ac"
        },
        {
            "item": "Additional Cost of harvest",
            "units": "crt"
        },
        {
            "item": "Irrigation",
            "units": "acin"
        },
        {
            "item": "Water",
            "unit": "acin"
        },
        {
            "item": "Overhead",
            "unit": ""
        },
        {
            "item": "Crop Insurance",
            "unit": ""
        },
        {
            "item": "Gopher Control",
            "unit": ""
        },
        {
            "item": "Management",
            "unit": ""
        },
        {
            "item": "Interest on Operative Capital",
            "unit": ""
        },
        {
            "item": "Pick Berries",
            "unit": "hrs"
        },
        {
            "item": "Cool and Pack",
            "unit": "lb"
        },
        {
            "item": "Insurance",
            "unit": ""
        },
        {
            "item": "Overhead",
            "unit": ""
        },
        {
            "item": "Water",
            "unit": "acre"
        },
        {
            "item": "Interest on Operative Capital",
            "unit": ""
        },
        {
            "item":"Storage Operating Costs",
            "units":"cwt"
        }
    ],
    "Seed": [
        {
            "item": "Barley Seed",
            "unit": ""
        },
        {
            "item": "Corn",
            "unit": "bag"
        },
        {
            "item": "Canola",
            "unit": "lb"
        },
        {
            "item": "Been Seed",
            "unit": "lb"
        },
        {
            "item": "Lentil Seed",
            "unit": "lb"
        },
        {
            "item": "Potato Seed",
            "units": "cwt"
        },
        {
            "item": "Sugarbeet",
            "units": "unit"
        },
        {
            "item": "Wheat",
            "units": ""
        },
        {
            "item": "Susan Seed",
            "units": ""
        },
        {
            "item": "Sorghum",
            "units": "lb"
        },
        {
            "item": "Alcala",
            "units": ""
        },
        {
            "item": "Alfalfa",
            "units": "lb"
        }
    ]
}

// wrap document so it plays nice with other libraries
// http://www.polymer-project.org/platform/shadow-dom.html#wrappers
})(wrap(document));
