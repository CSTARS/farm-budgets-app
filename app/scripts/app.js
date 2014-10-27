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
            "item": "Dry Nitrogen",
            "unit": "lb"
        },
        {
            "item": "Dry Phosphate",
            "unit": "lb"
        },
        {
            "item": "Dry Potash",
            "unit": "lb"
        },
        {
            "item": "Dry Sulfur",
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
        }
    ],
    "Pesticides": [
        {
            "item": "Roundup",
            "unit": ""
        },
        {
            "item": "Ammonium Sulfate",
            "unit": ""
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
            "item": "Labor (Machine)",
            "unit": "hr"
        },
        {
            "item": "Labor (non-machine)",
            "unit": "hr"
        }
    ],
    "Fuel": [
        {
            "item": "Gas",
            "unit": "gal"
        },
        {
            "item": "Diesel",
            "unit": "gal"
        },
        {
            "item": "Diesel",
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
            "item": "Lubricants",
            "unit": " "
        },
        {
            "item": "Repair",
            "unit": " "
        }
    ],
    "Custom & Consultant": [
        {
            "item": "Air Application",
            "unit": ""
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
            "item": "Bale",
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
            "unit": ""
        },
        {
            "item": "Bee Hives",
            "unit": "hive"
        }
    ],
    "Transport And Assesment": [
        {
            "item": "Wheat Assesment",
            "unit": ""
        },
        {
            "item": "Transport to PDX",
            "unit": ""
        }
    ],
    "Others": [
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
        }
    ],
    "Seed": [
        {
            "item": "Barley Seed",
            "unit": ""
        }
    ]
}

// wrap document so it plays nice with other libraries
// http://www.polymer-project.org/platform/shadow-dom.html#wrappers
})(wrap(document));
