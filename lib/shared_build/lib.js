(function(f){if(typeof exports==="object"&&typeof module!=="undefined"){module.exports=f()}else if(typeof define==="function"&&define.amd){define([],f)}else{var g;if(typeof window!=="undefined"){g=window}else if(typeof global!=="undefined"){g=global}else if(typeof self!=="undefined"){g=self}else{g=this}g.FB = f()}})(function(){var define,module,exports;return (function e(t,n,r){function s(o,u){if(!n[o]){if(!t[o]){var a=typeof require=="function"&&require;if(!u&&a)return a(o,!0);if(i)return i(o,!0);var f=new Error("Cannot find module '"+o+"'");throw f.code="MODULE_NOT_FOUND",f}var l=n[o]={exports:{}};t[o][0].call(l.exports,function(e){var n=t[o][1][e];return s(n?n:e)},l,l.exports,e,t,n,r)}return n[o].exports}var i=typeof require=="function"&&require;for(var o=0;o<r.length;o++)s(r[o]);return s})({"/home/quinn/farm-budgets-app/lib/shared/config/app/alfalfa.json":[function(require,module,exports){
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
      "name": "ATV Sprayer System--Lube & Repairs",
      "units": "us$/h",
      "price": 2.61,
      "type": "simple"
    },
    {
      "class": "equipment",
      "name": "ATV Sprayer System--Taxes",
      "units": "us$/h",
      "price": 0.23,
      "type": "simple"
    },
    {
      "class": "insurance",
      "name": "ATV Sprayer System--insurance",
      "units": "us$/h",
      "price": 0.02,
      "type": "simple"
    },
    {
      "class": "other",
      "name": "ATV Sprayer System--Capital Recovery",
      "units": "us$/h",
      "price": 4.41,
      "type": "simple"
    },
    {
      "type": "simple",
      "name": "Equipment Operator Labor",
      "units": "us$/h",
      "description": "",
      "price": 17,
      "class": "labor"
    },
    {
      "class": "equipment",
      "name": "Ditcher - V--Capital Recovery",
      "units": "us$/h",
      "price": 3.19,
      "type": "simple"
    },
    {
      "class": "other",
      "name": "205HP Crawler--Capital Recovery",
      "units": "us$/h",
      "price": 9.12,
      "type": "simple"
    },
    {
      "class": "insurance",
      "name": "205HP Crawler--insurance",
      "units": "us$/h",
      "price": 0.05,
      "type": "simple"
    },
    {
      "class": "other",
      "name": "205HP Crawler--Taxes",
      "units": "us$/h",
      "price": 0.57,
      "type": "simple"
    },
    {
      "class": "equipment",
      "name": "205HP Crawler--Lube & Repairs",
      "units": "us$/h",
      "price": 13.13,
      "type": "simple"
    },
    {
      "class": "insurance",
      "name": "Ditcher - V--insurance",
      "units": "us$/h",
      "price": 0.01,
      "type": "simple"
    },
    {
      "class": "other",
      "name": "Ditcher - V--Taxes",
      "units": "us$/h",
      "price": 0.18,
      "type": "simple"
    },
    {
      "class": "equipment",
      "name": "Ditcher - V--Lube & Repairs",
      "units": "us$/h",
      "price": 2.4,
      "type": "simple"
    },
    {
      "class": "equipment",
      "name": "150HP4WD Tractor--Capital Recovery",
      "units": "us$/h",
      "price": 6.41,
      "type": "simple"
    },
    {
      "class": "insurance",
      "name": "150HP4WD Tractor--insurance",
      "units": "us$/h",
      "price": 0.03,
      "type": "simple"
    },
    {
      "class": "other",
      "name": "150HP4WD Tractor--Taxes",
      "units": "us$/h",
      "price": 0.4,
      "type": "simple"
    },
    {
      "class": "equipment",
      "name": "150HP4WD Tractor--Lube & Repairs",
      "units": "us$/h",
      "price": 9.43,
      "type": "simple"
    },
    {
      "class": "equipment",
      "name": "Rear Blade - 8'--Capital Recovery",
      "units": "us$/h",
      "price": 2.16,
      "type": "simple"
    },
    {
      "class": "insurance",
      "name": "Rear Blade - 8'--insurance",
      "units": "us$/h",
      "price": 0.01,
      "type": "simple"
    },
    {
      "class": "other",
      "name": "Rear Blade - 8'--Taxes",
      "units": "us$/h",
      "price": 0.13,
      "type": "simple"
    },
    {
      "class": "equipment",
      "name": "Rear Blade - 8'--Lube & Repairs",
      "units": "us$/h",
      "price": 1.21,
      "type": "simple"
    },
    {
      "type": "simple",
      "name": "Irrigation Labor ",
      "units": "us$/h",
      "description": "",
      "price": 27,
      "class": "labor"
    },
    {
      "class": "equipment",
      "name": "Pickup 1/2 Ton--Capital Recovery",
      "units": "us$/h",
      "price": 6.21,
      "type": "simple"
    },
    {
      "class": "insurance",
      "name": "Pickup 1/2 Ton--insurance",
      "units": "us$/h",
      "price": 0.03,
      "type": "simple"
    },
    {
      "class": "other",
      "name": "Pickup 1/2 Ton--Taxes",
      "units": "us$/h",
      "price": 0.3,
      "type": "simple"
    },
    {
      "class": "equipment",
      "name": "Pickup 1/2 Ton--Lube & Repairs",
      "units": "us$/h",
      "price": 4.18,
      "type": "simple"
    },
    {
      "class": "equipment",
      "name": "Swather 16'--Capital Recovery",
      "units": "us$/h",
      "price": 33.66,
      "type": "simple"
    },
    {
      "class": "insurance",
      "name": "Swather 16'--Insurance",
      "units": "us$/h",
      "price": 0.15,
      "type": "simple"
    },
    {
      "class": "insurance",
      "name": "Swather 16'--Taxes",
      "units": "us$/h",
      "price": 1.74,
      "type": "simple"
    },
    {
      "class": "equipment",
      "name": "Swather 16'--Lube & Repairs",
      "units": "us$/h",
      "price": 19.42,
      "type": "simple"
    },
    {
      "class": "equipment",
      "name": "Pickup 3/4 Ton--Capital Recovery",
      "units": "us$/h",
      "price": 7.1,
      "type": "simple"
    },
    {
      "class": "insurance",
      "name": "Pickup 3/4 Ton--insurance",
      "units": "us$/h",
      "price": 0.03,
      "type": "simple"
    },
    {
      "class": "other",
      "name": "Pickup 3/4 Ton--Taxes",
      "units": "us$/h",
      "price": 0.35,
      "type": "simple"
    },
    {
      "class": "equipment",
      "name": "Pickup 3/4 Ton--Lube & Repairs",
      "units": "us$/h",
      "price": 4.09,
      "type": "simple"
    },
    {
      "class": "equipment",
      "name": "Service Truck--Capital Recovery",
      "units": "us$/h",
      "price": 4.17,
      "type": "simple"
    },
    {
      "class": "insurance",
      "name": "Service Truck--insurance",
      "units": "us$/h",
      "price": 0.02,
      "type": "simple"
    },
    {
      "class": "other",
      "name": "Service Truck--Taxes",
      "units": "us$/h",
      "price": 0.2,
      "type": "simple"
    },
    {
      "class": "equipment",
      "name": "Service Truck--Lube & Repairs",
      "units": "us$/h",
      "price": 3.17,
      "type": "simple"
    },
    {
      "class": "equipment",
      "name": "37HP 4WD Tractor--Capital Recovery",
      "units": "us$/h",
      "price": 0.77,
      "type": "simple"
    },
    {
      "class": "other",
      "name": "37HP 4WD Tractor--Taxes",
      "units": "us$/h",
      "price": 0.05,
      "type": "simple"
    },
    {
      "class": "equipment",
      "name": "37HP 4WD Tractor--Lube & Repair",
      "units": "us$/h",
      "price": 1.58,
      "type": "simple"
    },
    {
      "class": "equipment",
      "name": "Rake 20'--Capital Recovery",
      "units": "us$/h",
      "price": 8.87,
      "type": "simple"
    },
    {
      "class": "insurance",
      "name": "Rake 20'--insurance",
      "units": "us$/h",
      "price": 0.04,
      "type": "simple"
    },
    {
      "class": "other",
      "name": "Rake 20'--Taxes",
      "units": "us$/h",
      "price": 0.46,
      "type": "simple"
    },
    {
      "class": "equipment",
      "name": "Rake 20'--Lube & Repairs",
      "units": "us$/h",
      "price": 4.6,
      "type": "simple"
    },
    {
      "class": "equipment",
      "name": "Baler1300# PTO--Capital Recovery",
      "units": "us$/h",
      "price": 32.98,
      "type": "simple"
    },
    {
      "class": "insurance",
      "name": "Baler1300# PTO--insurance",
      "units": "us$/h",
      "price": 0.14,
      "type": "simple"
    },
    {
      "class": "other",
      "name": "Baler1300# PTO--Taxes",
      "units": "us$/h",
      "price": 1.71,
      "type": "simple"
    },
    {
      "class": "equipment",
      "name": "Baler1300# PTO--Lube & Repairs",
      "units": "us$/h",
      "price": 31.85,
      "type": "simple"
    },
    {
      "type": "simple",
      "name": "Bale Twine",
      "units": "us$/[acr_us]",
      "description": "",
      "price": 7,
      "class": "processing"
    },
    {
      "class": "equipment",
      "name": "Bale Wagon 1300# Attm--Capital Recovery",
      "units": "us$/h",
      "price": 46.69,
      "type": "simple"
    },
    {
      "class": "insurance",
      "name": "Bale Wagon 1300# Attm--insurance",
      "units": "us$/h",
      "price": 0.18,
      "type": "simple"
    },
    {
      "class": "other",
      "name": "Bale Wagon 1300# Attm--Taxes",
      "units": "us$/h",
      "price": 2.16,
      "type": "simple"
    },
    {
      "class": "equipment",
      "name": "Bale Wagon 1300# Attm--Lube & Repair",
      "units": "us$/h",
      "price": 38.68,
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
      "units": "h",
      "description": "",
      "price": 6.9799999999999995,
      "materials": {
        "Gas": {
          "name": "Gas",
          "amount": 1,
          "units": "[gal_us]",
          "error": null,
          "price": 3.79,
          "originalAmount": 1
        },
        "ATV--Capital Recovery": {
          "name": "ATV--Capital Recovery",
          "amount": 1,
          "units": "h",
          "error": null,
          "price": 1.89,
          "originalAmount": 1
        },
        "ATV--insurance": {
          "name": "ATV--insurance",
          "amount": 1,
          "units": "h",
          "error": null,
          "price": 0.01,
          "originalAmount": 1
        },
        "ATV--Taxes": {
          "name": "ATV--Taxes",
          "amount": 1,
          "units": "h",
          "error": null,
          "price": 0.09,
          "originalAmount": 1
        },
        "ATV--Lube & Repairs": {
          "name": "ATV--Lube & Repairs",
          "amount": 1,
          "units": "h",
          "error": null,
          "price": 1.2,
          "originalAmount": 1
        }
      }
    },
    {
      "type": "complex",
      "name": "ATV Sprayer System",
      "units": "h",
      "description": "",
      "price": 7.27,
      "materials": {
        "ATV Sprayer System--Lube & Repairs": {
          "name": "ATV Sprayer System--Lube & Repairs",
          "amount": 1,
          "units": "h",
          "error": null,
          "price": 2.61
        },
        "ATV Sprayer System--Taxes": {
          "name": "ATV Sprayer System--Taxes",
          "amount": 1,
          "units": "h",
          "error": null,
          "price": 0.23
        },
        "ATV Sprayer System--insurance": {
          "name": "ATV Sprayer System--insurance",
          "amount": 1,
          "units": "h",
          "error": null,
          "price": 0.02
        },
        "ATV Sprayer System--Capital Recovery": {
          "name": "ATV Sprayer System--Capital Recovery",
          "amount": 1,
          "units": "h",
          "error": null,
          "price": 4.41
        }
      }
    },
    {
      "type": "complex",
      "name": "205HP Crawler",
      "units": "h",
      "description": "",
      "price": 69.0322,
      "materials": {
        "205HP Crawler--Capital Recovery": {
          "name": "205HP Crawler--Capital Recovery",
          "amount": 1,
          "units": "h",
          "error": null,
          "price": 9.12
        },
        "205HP Crawler--insurance": {
          "name": "205HP Crawler--insurance",
          "amount": 1,
          "units": "h",
          "error": null,
          "price": 0.05
        },
        "205HP Crawler--Taxes": {
          "name": "205HP Crawler--Taxes",
          "amount": 1,
          "units": "h",
          "error": null,
          "price": 0.57
        },
        "205HP Crawler--Lube & Repairs": {
          "name": "205HP Crawler--Lube & Repairs",
          "amount": 1,
          "units": "h",
          "error": null,
          "price": 13.13
        },
        "Gas": {
          "name": "Gas",
          "amount": 12.18,
          "units": "[gal_us]",
          "error": null,
          "price": 46.1622,
          "originalAmount": 12.18
        }
      }
    },
    {
      "type": "complex",
      "name": "Ditcher - V",
      "units": "h",
      "description": "",
      "price": 5.779999999999999,
      "materials": {
        "Ditcher - V--Capital Recovery": {
          "name": "Ditcher - V--Capital Recovery",
          "amount": 1,
          "units": "h",
          "error": null,
          "price": 3.19
        },
        "Ditcher - V--insurance": {
          "name": "Ditcher - V--insurance",
          "amount": 1,
          "units": "h",
          "error": null,
          "price": 0.01
        },
        "Ditcher - V--Taxes": {
          "name": "Ditcher - V--Taxes",
          "amount": 1,
          "units": "h",
          "error": null,
          "price": 0.18
        },
        "Ditcher - V--Lube & Repairs": {
          "name": "Ditcher - V--Lube & Repairs",
          "amount": 1,
          "units": "h",
          "error": null,
          "price": 2.4
        }
      }
    },
    {
      "type": "complex",
      "name": "150HP4WD Tractor",
      "units": "h",
      "description": "",
      "price": 50.0389,
      "materials": {
        "150HP4WD Tractor--Capital Recovery": {
          "name": "150HP4WD Tractor--Capital Recovery",
          "amount": 1,
          "units": "h",
          "error": null,
          "price": 6.41
        },
        "150HP4WD Tractor--insurance": {
          "name": "150HP4WD Tractor--insurance",
          "amount": 1,
          "units": "h",
          "error": null,
          "price": 0.03
        },
        "150HP4WD Tractor--Taxes": {
          "name": "150HP4WD Tractor--Taxes",
          "amount": 1,
          "units": "h",
          "error": null,
          "price": 0.4
        },
        "150HP4WD Tractor--Lube & Repairs": {
          "name": "150HP4WD Tractor--Lube & Repairs",
          "amount": 1,
          "units": "h",
          "error": null,
          "price": 9.43
        },
        "Gas": {
          "name": "Gas",
          "amount": 8.91,
          "units": "[gal_us]",
          "error": null,
          "price": 33.7689,
          "originalAmount": 8.91
        }
      }
    },
    {
      "type": "complex",
      "name": "Rear Blade - 8'",
      "units": "h",
      "description": "",
      "price": 3.51,
      "materials": {
        "Rear Blade - 8'--Capital Recovery": {
          "name": "Rear Blade - 8'--Capital Recovery",
          "amount": 1,
          "units": "h",
          "error": null,
          "price": 2.16
        },
        "Rear Blade - 8'--insurance": {
          "name": "Rear Blade - 8'--insurance",
          "amount": 1,
          "units": "h",
          "error": null,
          "price": 0.01
        },
        "Rear Blade - 8'--Taxes": {
          "name": "Rear Blade - 8'--Taxes",
          "amount": 1,
          "units": "h",
          "error": null,
          "price": 0.13
        },
        "Rear Blade - 8'--Lube & Repairs": {
          "name": "Rear Blade - 8'--Lube & Repairs",
          "amount": 1,
          "units": "h",
          "error": null,
          "price": 1.21
        }
      }
    },
    {
      "type": "complex",
      "name": "Pickup 1/2 Ton",
      "units": "h",
      "description": "",
      "price": 20.195,
      "materials": {
        "Pickup 1/2 Ton--Capital Recovery": {
          "name": "Pickup 1/2 Ton--Capital Recovery",
          "amount": 1,
          "units": "h",
          "error": null,
          "price": 6.21,
          "originalAmount": 1
        },
        "Pickup 1/2 Ton--insurance": {
          "name": "Pickup 1/2 Ton--insurance",
          "amount": 1,
          "units": "h",
          "error": null,
          "price": 0.03,
          "originalAmount": 1
        },
        "Pickup 1/2 Ton--Taxes": {
          "name": "Pickup 1/2 Ton--Taxes",
          "amount": 1,
          "units": "h",
          "error": null,
          "price": 0.3,
          "originalAmount": 1
        },
        "Pickup 1/2 Ton--Lube & Repairs": {
          "name": "Pickup 1/2 Ton--Lube & Repairs",
          "amount": 1,
          "units": "h",
          "error": null,
          "price": 4.18,
          "originalAmount": 1
        },
        "Gas": {
          "name": "Gas",
          "amount": 2.5,
          "units": "[gal_us]",
          "error": null,
          "price": 9.475,
          "originalAmount": 2.5
        }
      }
    },
    {
      "type": "complex",
      "name": "Swather 16'",
      "units": "h",
      "description": "",
      "price": 86.0101,
      "materials": {
        "Swather 16'--Capital Recovery": {
          "name": "Swather 16'--Capital Recovery",
          "amount": 1,
          "units": "h",
          "error": null,
          "price": 33.66,
          "originalAmount": 1
        },
        "Swather 16'--Insurance": {
          "name": "Swather 16'--Insurance",
          "amount": 1,
          "units": "h",
          "error": null,
          "price": 0.15,
          "originalAmount": 1
        },
        "Swather 16'--Taxes": {
          "name": "Swather 16'--Taxes",
          "amount": 1,
          "units": "h",
          "error": null,
          "price": 1.74,
          "originalAmount": 1
        },
        "Swather 16'--Lube & Repairs": {
          "name": "Swather 16'--Lube & Repairs",
          "amount": 1,
          "units": "h",
          "error": null,
          "price": 19.42,
          "originalAmount": 1
        },
        "Gas": {
          "name": "Gas",
          "amount": 8.19,
          "units": "[gal_us]",
          "error": null,
          "price": 31.0401,
          "originalAmount": 8.19
        }
      }
    },
    {
      "type": "complex",
      "name": "Pickup 3/4 Ton",
      "units": "h",
      "description": "",
      "price": 22.94,
      "materials": {
        "Pickup 3/4 Ton--Capital Recovery": {
          "name": "Pickup 3/4 Ton--Capital Recovery",
          "amount": 1,
          "units": "h",
          "error": null,
          "price": 7.1
        },
        "Pickup 3/4 Ton--insurance": {
          "name": "Pickup 3/4 Ton--insurance",
          "amount": 1,
          "units": "h",
          "error": null,
          "price": 0.03
        },
        "Pickup 3/4 Ton--Taxes": {
          "name": "Pickup 3/4 Ton--Taxes",
          "amount": 1,
          "units": "h",
          "error": null,
          "price": 0.35
        },
        "Pickup 3/4 Ton--Lube & Repairs": {
          "name": "Pickup 3/4 Ton--Lube & Repairs",
          "amount": 1,
          "units": "h",
          "error": null,
          "price": 4.09
        },
        "Gas": {
          "name": "Gas",
          "amount": 3,
          "units": "[gal_us]",
          "error": null,
          "price": 11.370000000000001,
          "originalAmount": 3
        }
      }
    },
    {
      "type": "complex",
      "name": "Service Truck",
      "units": "h",
      "description": "",
      "price": 19.1953,
      "materials": {
        "Service Truck--Capital Recovery": {
          "name": "Service Truck--Capital Recovery",
          "amount": 1,
          "units": "h",
          "error": null,
          "price": 4.17
        },
        "Service Truck--insurance": {
          "name": "Service Truck--insurance",
          "amount": 1,
          "units": "h",
          "error": null,
          "price": 0.02
        },
        "Service Truck--Taxes": {
          "name": "Service Truck--Taxes",
          "amount": 1,
          "units": "h",
          "error": null,
          "price": 0.2
        },
        "Service Truck--Lube & Repairs": {
          "name": "Service Truck--Lube & Repairs",
          "amount": 1,
          "units": "h",
          "error": null,
          "price": 3.17
        },
        "Gas": {
          "name": "Gas",
          "amount": 3.07,
          "units": "[gal_us]",
          "error": null,
          "price": 11.635299999999999,
          "originalAmount": 3.07
        }
      }
    },
    {
      "type": "complex",
      "name": "37HP 4WD Tractor",
      "units": "h",
      "description": "",
      "price": 9.4494,
      "materials": {
        "37HP 4WD Tractor--Capital Recovery": {
          "name": "37HP 4WD Tractor--Capital Recovery",
          "amount": 1,
          "units": "h",
          "error": null,
          "price": 0.77
        },
        "37HP 4WD Tractor--Taxes": {
          "name": "37HP 4WD Tractor--Taxes",
          "amount": 1,
          "units": "h",
          "error": null,
          "price": 0.05
        },
        "37HP 4WD Tractor--Lube & Repair": {
          "name": "37HP 4WD Tractor--Lube & Repair",
          "amount": 1,
          "units": "h",
          "error": null,
          "price": 1.58
        },
        "Gas": {
          "name": "Gas",
          "amount": 1.86,
          "units": "[gal_us]",
          "error": null,
          "price": 7.0494,
          "originalAmount": 1.86
        }
      }
    },
    {
      "type": "complex",
      "name": "Rake 20'",
      "units": "h",
      "description": "",
      "price": 13.969999999999999,
      "materials": {
        "Rake 20'--Capital Recovery": {
          "name": "Rake 20'--Capital Recovery",
          "amount": 1,
          "units": "h",
          "error": null,
          "price": 8.87
        },
        "Rake 20'--insurance": {
          "name": "Rake 20'--insurance",
          "amount": 1,
          "units": "h",
          "error": null,
          "price": 0.04
        },
        "Rake 20'--Taxes": {
          "name": "Rake 20'--Taxes",
          "amount": 1,
          "units": "h",
          "error": null,
          "price": 0.46
        },
        "Rake 20'--Lube & Repairs": {
          "name": "Rake 20'--Lube & Repairs",
          "amount": 1,
          "units": "h",
          "error": null,
          "price": 4.6
        }
      }
    },
    {
      "type": "complex",
      "name": "Baler1300# PTO",
      "units": "h",
      "description": "",
      "price": 66.68,
      "materials": {
        "Baler1300# PTO--Capital Recovery": {
          "name": "Baler1300# PTO--Capital Recovery",
          "amount": 1,
          "units": "h",
          "error": null,
          "price": 32.98
        },
        "Baler1300# PTO--insurance": {
          "name": "Baler1300# PTO--insurance",
          "amount": 1,
          "units": "h",
          "error": null,
          "price": 0.14
        },
        "Baler1300# PTO--Taxes": {
          "name": "Baler1300# PTO--Taxes",
          "amount": 1,
          "units": "h",
          "error": null,
          "price": 1.71
        },
        "Baler1300# PTO--Lube & Repairs": {
          "name": "Baler1300# PTO--Lube & Repairs",
          "amount": 1,
          "units": "h",
          "error": null,
          "price": 31.85
        }
      }
    },
    {
      "type": "complex",
      "name": "Bale Wagon 1300# Attm",
      "units": "h",
      "description": "",
      "price": 119.92500000000001,
      "materials": {
        "Bale Wagon 1300# Attm--Capital Recovery": {
          "name": "Bale Wagon 1300# Attm--Capital Recovery",
          "amount": 1,
          "units": "h",
          "error": null,
          "price": 46.69
        },
        "Bale Wagon 1300# Attm--insurance": {
          "name": "Bale Wagon 1300# Attm--insurance",
          "amount": 1,
          "units": "h",
          "error": null,
          "price": 0.18
        },
        "Bale Wagon 1300# Attm--Taxes": {
          "name": "Bale Wagon 1300# Attm--Taxes",
          "amount": 1,
          "units": "h",
          "error": null,
          "price": 2.16
        },
        "Bale Wagon 1300# Attm--Lube & Repair": {
          "name": "Bale Wagon 1300# Attm--Lube & Repair",
          "amount": 1,
          "units": "h",
          "error": null,
          "price": 38.68
        },
        "Gas": {
          "name": "Gas",
          "amount": 8.5,
          "units": "[gal_us]",
          "error": null,
          "price": 32.215,
          "originalAmount": 8.5
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
          "amount": 0.06,
          "units": "h",
          "id": "a6d9a791-a012-444c-a71e-6a55c172a6c4",
          "error": null,
          "price": 0.41879999999999995,
          "originalAmount": 0.06
        },
        {
          "name": "Roundup PowerMax",
          "amount": 0.06,
          "units": "[pt_us]",
          "id": "4fb2d3fa-22d3-43ae-871d-cbae79834ecd",
          "error": null,
          "price": 0.16499999999999998,
          "originalAmount": 0.06
        },
        {
          "name": "Equipment Operator Labor",
          "amount": 0.06,
          "units": "h",
          "id": "490d9abb-1bcd-47f0-9157-5e452cee99c4",
          "error": null,
          "price": 1.02,
          "originalAmount": 0.06
        },
        {
          "name": "Velpar L",
          "amount": 2,
          "units": "[pt_us]",
          "id": "71a1d362-b34d-405e-bde9-b0511940b153",
          "error": null,
          "price": 28.82,
          "originalAmount": 2
        },
        {
          "name": "ATV Sprayer System",
          "amount": 2,
          "units": "h",
          "id": "f7dd8772-771e-4837-85ec-f2f43caf1f7b",
          "error": null,
          "price": 14.54,
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
      "subtotal": 44.9638,
      "total": 44.9638,
      "perAcre": false
    },
    {
      "name": "Fertilizer 11-52-0",
      "materials": [
        {
          "name": "11-52-0",
          "amount": 200,
          "units": "[lb_av]",
          "id": "d3a536f8-d434-4a87-bf48-55d4e449b59f",
          "error": null,
          "price": 74,
          "originalAmount": 200
        },
        {
          "name": "Ground Application",
          "amount": 1,
          "units": "[acr_us]",
          "id": "69b73058-bf73-4030-8d50-235660b566a2",
          "error": null,
          "price": 10.5
        }
      ],
      "schedule": [
        {
          "length": 1,
          "units": "month",
          "date": "2016-1-1"
        }
      ],
      "units": "[acr_us]",
      "subtotal": 84.5,
      "total": 84.5,
      "perAcre": false
    },
    {
      "name": "Insects-Aphids/Weevil",
      "materials": [
        {
          "name": "ATV",
          "amount": 0.06,
          "units": "h",
          "id": "5976b82f-9fe4-450b-b977-67f718c6687b",
          "error": null,
          "price": 0.41879999999999995,
          "originalAmount": 0.06
        },
        {
          "name": "Equipment Operator Labor",
          "amount": 0.06,
          "units": "h",
          "id": "8503c0ba-4cb1-43e0-a87a-ca166bfe8c44",
          "error": null,
          "price": 1.02,
          "originalAmount": 0.06
        },
        {
          "name": "Warrior II",
          "amount": 1,
          "units": "[foz_us]",
          "id": "cbce6dc2-c790-416b-86c6-8be161045a09",
          "error": null,
          "price": 5.25,
          "originalAmount": 1
        }
      ],
      "schedule": [
        {
          "length": 1,
          "units": "month",
          "date": "2016-3-1"
        }
      ],
      "units": "[acr_us]",
      "subtotal": 6.6888000000000005,
      "total": 6.6888000000000005,
      "perAcre": false
    },
    {
      "name": "Irrigation-Ditch/Drain Crawler",
      "materials": [
        {
          "name": "Ditcher - V",
          "amount": 0.16,
          "units": "h",
          "id": "d8f1264c-5010-4131-bd39-e10439d33bac",
          "error": null,
          "price": 0.9248,
          "originalAmount": 0.16
        },
        {
          "name": "Equipment Operator Labor",
          "amount": 0.16,
          "units": "h",
          "id": "aad2b124-e07e-4059-b680-38183872abd0",
          "error": null,
          "price": 2.72,
          "originalAmount": 0.16
        },
        {
          "name": "205HP Crawler",
          "amount": 0.16,
          "units": "h",
          "id": "93a12372-b935-42d6-8674-6270c4141b51",
          "error": null,
          "price": 11.045152,
          "originalAmount": 0.16
        }
      ],
      "schedule": [
        {
          "length": 1,
          "units": "month",
          "date": "2016-4-1"
        },
        {
          "length": 1,
          "units": "month",
          "date": "2016-7-1"
        }
      ],
      "units": "[acr_us]",
      "subtotal": 14.689952,
      "total": 29.379904,
      "perAcre": false
    },
    {
      "name": "Irrigation-Ditch/Drain Tractor",
      "materials": [
        {
          "name": "150HP4WD Tractor",
          "amount": 0.2,
          "units": "h",
          "id": "a1219bcd-b291-46d3-baf4-c4bdb96c535c",
          "error": null,
          "price": 10.00778,
          "originalAmount": 0.2
        },
        {
          "name": "Rear Blade - 8'",
          "amount": 0.2,
          "units": "h",
          "id": "1232df91-b7e6-48c1-8dad-317ebae636d4",
          "error": null,
          "price": 0.702,
          "originalAmount": 0.2
        },
        {
          "name": "Equipment Operator Labor",
          "amount": 0.2,
          "units": "h",
          "id": "0ca4eb15-138b-4ce7-9517-8f9751b01879",
          "error": null,
          "price": 3.4000000000000004,
          "originalAmount": 0.2
        }
      ],
      "schedule": [
        {
          "length": 1,
          "units": "month",
          "date": "2016-9-1"
        }
      ],
      "units": "[acr_us]",
      "subtotal": 14.10978,
      "total": 14.10978,
      "perAcre": false
    },
    {
      "name": "Irrigate-Flood",
      "materials": [
        {
          "name": "Water-Alfalfa-Pumped",
          "amount": 6,
          "units": "[acr_us].[in_us]",
          "id": "f8ab489c-4432-4cd9-a63e-c621b148fbe2",
          "error": null,
          "price": 45,
          "originalAmount": 6
        }
      ],
      "schedule": [
        {
          "length": 1,
          "units": "month",
          "date": "2016-4-1"
        },
        {
          "length": 1,
          "units": "month",
          "date": "2016-5-1"
        },
        {
          "length": 1,
          "units": "month",
          "date": "2016-6-1"
        },
        {
          "length": 1,
          "units": "month",
          "date": "2016-7-1"
        },
        {
          "length": 1,
          "units": "month",
          "date": "2016-7-1"
        },
        {
          "length": 1,
          "units": "month",
          "date": "2016-8-1"
        },
        {
          "length": 1,
          "units": "month",
          "date": "2016-9-1"
        }
      ],
      "units": "[acr_us]",
      "subtotal": 45,
      "total": 315,
      "perAcre": false
    },
    {
      "name": "Insects-Worms Coragen",
      "materials": [
        {
          "name": "ATV",
          "amount": 0.06,
          "units": "h",
          "id": "3e4d9ee0-99e2-44bc-932c-03bbde5d1561",
          "error": null,
          "price": 0.41879999999999995,
          "originalAmount": 0.06
        },
        {
          "name": "Equipment Operator Labor",
          "amount": 0.06,
          "units": "h",
          "id": "0f7979a8-1a4c-4394-b41a-43050279b3bd",
          "error": null,
          "price": 1.02,
          "originalAmount": 0.06
        },
        {
          "name": "Coragen",
          "amount": 2,
          "units": "[foz_us]",
          "id": "06d15c76-b85f-4837-a138-a061c8e514c2",
          "error": null,
          "price": 20.5,
          "originalAmount": 2
        },
        {
          "name": "ATV Sprayer System",
          "amount": 0.06,
          "units": "h",
          "id": "d5de73f7-fbb6-4efa-a6ba-975c4e55e257",
          "error": null,
          "price": 0.4362,
          "originalAmount": 0.06
        }
      ],
      "schedule": [
        {
          "length": 1,
          "units": "month",
          "date": "2016-7-1"
        }
      ],
      "units": "[acr_us]",
      "subtotal": 22.375,
      "total": 22.375,
      "perAcre": false
    },
    {
      "name": "Insects-Worms Belt SC",
      "materials": [
        {
          "name": "ATV Sprayer System",
          "amount": 0.06,
          "units": "h",
          "id": "24174b4a-0808-4a81-96d8-bc79cd1f6bda",
          "error": null,
          "price": 0.4362,
          "originalAmount": 0.06
        },
        {
          "name": "ATV",
          "amount": 0.06,
          "units": "h",
          "id": "1ed5773d-3e5b-492f-a6c4-67f18e3b3ff1",
          "error": null,
          "price": 0.41879999999999995,
          "originalAmount": 0.06
        },
        {
          "name": "Equipment Operator Labor",
          "amount": 0.06,
          "units": "h",
          "id": "2cbc7b25-a40f-49ff-aa14-cd4a4d084d78",
          "error": null,
          "price": 1.02,
          "originalAmount": 0.06
        },
        {
          "name": "Belt SC",
          "amount": 3,
          "units": "[foz_us]",
          "id": "19c3aad3-ef19-4490-9581-b3013ed092d4",
          "error": null,
          "price": 28.200000000000003,
          "originalAmount": 3
        }
      ],
      "schedule": [
        {
          "length": 1,
          "units": "month",
          "date": "2016-8-1"
        }
      ],
      "units": "[acr_us]",
      "subtotal": 30.075000000000003,
      "total": 30.075000000000003,
      "perAcre": false
    },
    {
      "name": "Irrigation Labor",
      "materials": [
        {
          "name": "Irrigation Labor ",
          "amount": 0.333,
          "units": "h",
          "id": "d5e0e303-ff34-43c0-abab-7b5bc89cef25",
          "error": null,
          "price": 8.991,
          "originalAmount": 0.333
        }
      ],
      "schedule": [
        {
          "length": 1,
          "units": "month",
          "date": "2016-9-1"
        }
      ],
      "units": "[acr_us]",
      "subtotal": 8.991,
      "total": 8.991,
      "perAcre": false
    },
    {
      "name": "Pickup 1/2 Ton",
      "materials": [
        {
          "name": "Pickup 1/2 Ton",
          "amount": 0.56,
          "units": "h",
          "id": "0f892e1c-beba-4aef-bec5-2c81c52fedca",
          "error": null,
          "price": 11.3092,
          "originalAmount": 0.56
        },
        {
          "name": "Equipment Operator Labor",
          "amount": 0.56,
          "units": "h",
          "id": "11d75f23-ebe0-4664-b4e9-0fadb4992292",
          "error": null,
          "price": 9.520000000000001,
          "originalAmount": 0.56
        }
      ],
      "schedule": [
        {
          "length": 1,
          "units": "month",
          "date": "2016-9-1"
        }
      ],
      "units": "[acr_us]",
      "subtotal": 20.8292,
      "total": 20.8292,
      "perAcre": false
    },
    {
      "name": "Harvest-Swathing",
      "materials": [
        {
          "name": "Swather 16'",
          "amount": 0.13,
          "units": "h",
          "id": "a1808940-bd69-4f5e-94f7-3396d9d2ca95",
          "error": null,
          "price": 11.181313,
          "originalAmount": 0.13
        },
        {
          "name": "Equipment Operator Labor",
          "amount": 0.13,
          "units": "h",
          "id": "61161ec2-ba34-49c6-aa4c-252ab8496670",
          "error": null,
          "price": 2.21,
          "originalAmount": 0.13
        }
      ],
      "schedule": [
        {
          "length": 1,
          "units": "month",
          "date": "2016-4-1"
        },
        {
          "length": 1,
          "units": "month",
          "date": "2016-5-1"
        },
        {
          "length": 1,
          "units": "month",
          "date": "2016-6-1"
        },
        {
          "length": 1,
          "units": "month",
          "date": "2016-7-1"
        },
        {
          "length": 1,
          "units": "month",
          "date": "2016-8-1"
        },
        {
          "length": 1,
          "units": "month",
          "date": "2016-9-1"
        }
      ],
      "units": "[acr_us]",
      "subtotal": 13.391313,
      "total": 80.34787800000001,
      "perAcre": false
    },
    {
      "name": "Pickup 3/4 Ton",
      "materials": [
        {
          "name": "Pickup 3/4 Ton",
          "amount": 0.48,
          "units": "h",
          "id": "72ef715e-4b96-4387-955b-258d25cf32e9",
          "error": null,
          "price": 11.0112,
          "originalAmount": 0.48
        },
        {
          "name": "Equipment Operator Labor",
          "amount": 0.48,
          "units": "h",
          "id": "faf95006-639c-48d6-9e61-2c600642ed95",
          "error": null,
          "price": 8.16,
          "originalAmount": 0.48
        }
      ],
      "schedule": [
        {
          "length": 1,
          "units": "month",
          "date": "2016-9-1"
        }
      ],
      "units": "[acr_us]",
      "subtotal": 19.1712,
      "total": 19.1712,
      "perAcre": false
    },
    {
      "name": "Service Truck",
      "materials": [
        {
          "name": "Service Truck",
          "amount": 0.24,
          "units": "h",
          "id": "27782eeb-f576-48e0-84de-83b6feac027c",
          "error": null,
          "price": 4.606872,
          "originalAmount": 0.24
        },
        {
          "name": "Equipment Operator Labor",
          "amount": 0.24,
          "units": "h",
          "id": "8f511207-3d45-4a17-87e4-9edded9d7374",
          "error": null,
          "price": 4.08,
          "originalAmount": 0.24
        }
      ],
      "schedule": [
        {
          "length": 1,
          "units": "month",
          "date": "2016-9-1"
        }
      ],
      "units": "[acr_us]",
      "subtotal": 8.686872000000001,
      "total": 8.686872000000001,
      "perAcre": false
    },
    {
      "name": "Harvest-Raking",
      "materials": [
        {
          "name": "37HP 4WD Tractor",
          "amount": 0.1,
          "units": "h",
          "id": "52f5a0b4-bb13-4e67-96d2-55822796ed5a",
          "error": null,
          "price": 0.9449400000000001,
          "originalAmount": 0.1
        },
        {
          "name": "Rake 20'",
          "amount": 0.1,
          "units": "h",
          "id": "81fcb103-9c75-4215-ac8b-c0faa4314b44",
          "error": null,
          "price": 1.397,
          "originalAmount": 0.1
        },
        {
          "name": "Equipment Operator Labor",
          "amount": 0.1,
          "units": "h",
          "id": "eaea361f-fa15-4e3f-8e28-bafb245a8617",
          "error": null,
          "price": 1.7000000000000002,
          "originalAmount": 0.1
        }
      ],
      "schedule": [
        {
          "length": 1,
          "units": "month",
          "date": "2016-4-1"
        },
        {
          "length": 1,
          "units": "month",
          "date": "2016-5-1"
        },
        {
          "length": 1,
          "units": "month",
          "date": "2016-6-1"
        },
        {
          "length": 1,
          "units": "month",
          "date": "2016-7-1"
        },
        {
          "length": 1,
          "units": "month",
          "date": "2016-8-1"
        },
        {
          "length": 1,
          "units": "month",
          "date": "2016-9-1"
        }
      ],
      "units": "[acr_us]",
      "subtotal": 4.04194,
      "total": 24.251640000000002,
      "perAcre": false
    },
    {
      "name": "Harvest-Baling",
      "materials": [
        {
          "name": "150HP4WD Tractor",
          "amount": 0.16,
          "units": "h",
          "id": "e150e68a-4104-49ab-897c-141a570ca6db",
          "error": null,
          "price": 8.006224,
          "originalAmount": 0.16
        },
        {
          "name": "Baler1300# PTO",
          "amount": 0.16,
          "units": "h",
          "id": "cb4580cc-39d7-4d1b-bf7d-19cfbf7c49da",
          "error": null,
          "price": 10.668800000000001,
          "originalAmount": 0.16
        },
        {
          "name": "Equipment Operator Labor",
          "amount": 0.16,
          "units": "h",
          "id": "46e157fa-140c-4f97-88b3-91b0580ff7ad",
          "error": null,
          "price": 2.72,
          "originalAmount": 0.16
        },
        {
          "name": "Bale Twine",
          "amount": 0.14,
          "units": "[acr_us]",
          "id": "3a30b57a-7270-4267-b659-5ef55485e63e",
          "error": null,
          "price": 0.9800000000000001,
          "originalAmount": 0.14
        }
      ],
      "schedule": [
        {
          "length": 1,
          "units": "month",
          "date": "2016-4-1"
        },
        {
          "length": 1,
          "units": "month",
          "date": "2016-5-1"
        },
        {
          "length": 1,
          "units": "month",
          "date": "2016-6-1"
        },
        {
          "length": 1,
          "units": "month",
          "date": "2016-7-1"
        },
        {
          "length": 1,
          "units": "month",
          "date": "2016-8-1"
        },
        {
          "length": 1,
          "units": "month",
          "date": "2016-9-1"
        }
      ],
      "units": "[acr_us]",
      "subtotal": 22.375024,
      "total": 134.250144,
      "perAcre": false
    },
    {
      "name": "Harvest-Roadsiding",
      "materials": [
        {
          "name": "Bale Wagon 1300# Attm",
          "amount": 0.16,
          "units": "h",
          "id": "d482d701-27ea-4ea3-8b43-25505982f2ba",
          "error": null,
          "price": 19.188000000000002,
          "originalAmount": 0.16
        },
        {
          "name": "Equipment Operator Labor",
          "amount": 0.16,
          "units": "h",
          "id": "bfac0896-de93-4eda-80e7-aae8e94642b1",
          "error": null,
          "price": 2.72,
          "originalAmount": 0.16
        }
      ],
      "schedule": [
        {
          "length": 1,
          "units": "month",
          "date": "2016-4-1"
        },
        {
          "length": 1,
          "units": "month",
          "date": "2016-5-1"
        },
        {
          "length": 1,
          "units": "month",
          "date": "2016-6-1"
        },
        {
          "length": 1,
          "units": "month",
          "date": "2016-7-1"
        },
        {
          "length": 1,
          "units": "month",
          "date": "2016-8-1"
        },
        {
          "length": 1,
          "units": "month",
          "date": "2016-9-1"
        }
      ],
      "units": "[acr_us]",
      "subtotal": 21.908,
      "total": 131.448,
      "perAcre": false
    }
  ],
  "farm": {
    "unit": "[acr_us]",
    "size": "100",
    "commodity": "Alfalfa",
    "location": "Northern California",
    "farm": "generic"
  }
}

},{}],"/home/quinn/farm-budgets-app/lib/shared/config/app/blank.json":[function(require,module,exports){
module.exports={
  "materials": [],
  "operations": [],
  "farm": {
    "unit": "[acr_us]",
    "size": "100",
    "commodity": "",
    "location": "",
    "farm": "blank test"
  }
}

},{}],"/home/quinn/farm-budgets-app/lib/shared/config/app/poplar.json":[function(require,module,exports){
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

},{}],"/home/quinn/farm-budgets-app/lib/shared/config/app/qjh-alfalfa.json":[function(require,module,exports){
module.exports={
  "classes": {
    "capital": [
      "1/2 Ton Pickup",
      "3/4 Ton Pickup (Farm use)",
      "Bale Wagon 1300# Attm",
      "Service Truck"
    ],
    "undefined": [
      "ATV",
      "Alfalfa Seed RR",
      "Baling",
      "Plant-Roundup Ready Seed",
      "Raking",
      "Roll-Cover Seed",
      "Sprinkler Irrigate 2X",
      "Swather 16'"
    ],
    "fertilizer": [
      "11-52-0"
    ],
    "Insecticide": [
      "Belt SC",
      "Coragen",
      "Warrior II"
    ],
    "cultural": [
      "Chisel/Rip & Roll",
      "Finish Disc & Roll 2X",
      "Pull Border/Checks",
      "Stubble Disc",
      "Tri-Plane 2X"
    ],
    "irrigation": [
      "Irrigation-Ditch/Tail Levee"
    ],
    "Herbicide": [
      "Roundup PowerMax"
    ],
    "Irrigation": [
      "Water-Alfalfa-Pumped"
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
      "name": "11-52-0",
      "units": "us$/[lb_av]",
      "price": 0.37,
      "type": "simple"
    },
    {
      "name": "Alfalfa Seed RR",
      "units": "us$/[lb_av]",
      "price": 5,
      "type": "simple"
    },
    {
      "class": "Insecticide",
      "name": "Belt SC",
      "units": "us$/[foz_us]",
      "price": 9.4,
      "type": "simple"
    },
    {
      "class": "Insecticide",
      "name": "Coragen",
      "units": "us$/[foz_us]",
      "price": 10.25,
      "type": "simple"
    },
    {
      "class": "Herbicide",
      "name": "Roundup PowerMax",
      "units": "us$/[pt_us]",
      "price": 2.75,
      "type": "simple"
    },
    {
      "class": "Insecticide",
      "name": "Warrior II",
      "units": "us$/[foz_us]",
      "price": 5.25,
      "type": "simple"
    },
    {
      "description": "Well supplied Alfalfa",
      "class": "Irrigation",
      "name": "Water-Alfalfa-Pumped",
      "units": "us$/[acr_us].[in_us]",
      "price": 7.5,
      "type": "simple"
    },
    {
      "name": "Bale Twine",
      "price": 7,
      "units": "us$/[acr_us]",
      "type": "simple"
    },
    {
      "name": "Fuel-Diesel",
      "price": 3.88,
      "units": "us$/[gal_us]",
      "type": "simple"
    },
    {
      "name": "Fuel-Gas",
      "price": 3.79,
      "units": "us$/[gal_us]",
      "type": "simple"
    },
    {
      "name": "Lube&Repair",
      "price": 1,
      "units": "us$/us$",
      "type": "simple"
    },
    {
      "name": "Velpar L",
      "price": 14.41,
      "units": "us$/[pt_us]",
      "type": "simple"
    },
    {
      "name": "Labor-Equipment Operator",
      "price": 17,
      "units": "us$/h",
      "type": "simple"
    },
    {
      "name": "Labor-Irrigation",
      "price": 13.6,
      "units": "us$/h",
      "type": "simple"
    },
    {
      "class": "capital",
      "name": "1/2 Ton Pickup",
      "units": "h",
      "type": "complex",
      "materials": {
        "Lube&Repair": {
          "amount": 5.41,
          "originalAmount": 5.41,
          "units": "us$",
          "error": null,
          "price": 5.41
        },
        "Labor-Equipment Operator": {
          "amount": 1.11,
          "originalAmount": 1.11,
          "units": "h",
          "error": null,
          "price": 18.87
        },
        "Fuel-Diesel": {
          "amount": 2.09,
          "originalAmount": 2.09,
          "units": "[gal_us]",
          "error": null,
          "price": 8.1092
        }
      },
      "price": 32.3892
    },
    {
      "name": "ATV",
      "units": "h",
      "type": "complex",
      "materials": {
        "Lube&Repair": {
          "amount": 1.2,
          "originalAmount": 1.2,
          "units": "us$",
          "error": null,
          "price": 1.2
        },
        "Labor-Equipment Operator": {
          "amount": 1,
          "originalAmount": 1,
          "units": "h",
          "error": null,
          "price": 17
        },
        "Fuel-Gas": {
          "amount": 1,
          "originalAmount": 1,
          "units": "[gal_us]",
          "error": null,
          "price": 3.79
        }
      },
      "price": 21.99
    },
    {
      "class": "capital",
      "name": "3/4 Ton Pickup (Farm use)",
      "units": "h",
      "type": "complex",
      "materials": {
        "Lube&Repair": {
          "amount": 5,
          "originalAmount": 5,
          "units": "us$",
          "error": null,
          "price": 5
        },
        "Labor-Equipment Operator": {
          "amount": 1.18,
          "originalAmount": 1.18,
          "units": "h",
          "error": null,
          "price": 20.06
        },
        "Fuel-Diesel": {
          "amount": 3.22,
          "originalAmount": 3.22,
          "units": "[gal_us]",
          "error": null,
          "price": 12.4936
        }
      },
      "price": 37.5536
    },
    {
      "class": "capital",
      "name": "Bale Wagon 1300# Attm",
      "units": "h",
      "type": "complex",
      "materials": {
        "Lube&Repair": {
          "amount": 38.68,
          "originalAmount": 38.68,
          "units": "us$",
          "error": null,
          "price": 38.68
        },
        "Labor-Equipment Operator": {
          "amount": 1.18,
          "originalAmount": 1.18,
          "units": "h",
          "error": null,
          "price": 20.06
        },
        "Fuel-Diesel": {
          "amount": 8.5,
          "originalAmount": 8.5,
          "units": "[gal_us]",
          "error": null,
          "price": 32.98
        }
      },
      "price": 91.72
    },
    {
      "name": "Baling",
      "units": "h",
      "type": "complex",
      "materials": {
        "150HP4WD Tractor": {
          "amount": 1,
          "originalAmount": 1,
          "units": "h",
          "error": null,
          "price": 60.2248
        },
        "Bale Twine": {
          "amount": 1,
          "originalAmount": 1,
          "units": "[acr_us]",
          "error": null,
          "price": 7
        },
        " Baler1300# PTO": {
          "name": " Baler1300# PTO",
          "amount": 1,
          "units": "h",
          "error": null,
          "price": 31.85
        }
      },
      "price": 99.07480000000001
    },
    {
      "description": "Pre Planting Preparation",
      "class": "cultural",
      "name": "Chisel/Rip & Roll",
      "units": "h",
      "type": "complex",
      "materials": {
        "Lube&Repair": {
          "amount": 33.33,
          "originalAmount": 33.33,
          "units": "us$",
          "error": null,
          "price": 33.33
        },
        "Labor-Equipment Operator": {
          "amount": 1.47,
          "originalAmount": 1.47,
          "units": "h",
          "error": null,
          "price": 24.99
        },
        "Fuel-Diesel": {
          "amount": 17.18,
          "originalAmount": 17.18,
          "units": "[gal_us]",
          "error": null,
          "price": 66.6584
        }
      },
      "price": 124.9784
    },
    {
      "description": "Preplanting",
      "class": "cultural",
      "name": "Finish Disc & Roll 2X",
      "units": "h",
      "type": "complex",
      "materials": {
        "Lube&Repair": {
          "amount": 31.58,
          "originalAmount": 31.58,
          "units": "us$",
          "error": null,
          "price": 31.58
        },
        "Labor-Equipment Operator": {
          "amount": 1.24,
          "originalAmount": 1.24,
          "units": "h",
          "error": null,
          "price": 21.08
        },
        "Fuel-Diesel": {
          "amount": 13.56,
          "originalAmount": 13.56,
          "units": "[gal_us]",
          "error": null,
          "price": 52.6128
        }
      },
      "price": 105.27279999999999
    },
    {
      "class": "irrigation",
      "name": "Irrigation-Ditch/Tail Levee",
      "units": "[acr_us]",
      "type": "complex",
      "materials": {
        "150HP4WD Tractor": {
          "amount": 0.2,
          "originalAmount": 0.2,
          "units": "h",
          "error": null,
          "price": 12.044960000000001
        },
        "205HP Crawler": {
          "amount": 0.26,
          "originalAmount": 0.26,
          "units": "h",
          "error": null,
          "price": 19.83852
        }
      },
      "price": 31.88348
    },
    {
      "name": "Plant-Roundup Ready Seed",
      "units": "h",
      "type": "complex",
      "materials": {
        "Lube&Repair": {
          "amount": 9.09,
          "originalAmount": 9.09,
          "units": "us$",
          "error": null,
          "price": 9.09
        },
        "Labor-Equipment Operator": {
          "amount": 1.25,
          "originalAmount": 1.25,
          "units": "h",
          "error": null,
          "price": 21.25
        },
        "Fuel-Diesel": {
          "amount": 5.47,
          "originalAmount": 5.47,
          "units": "[gal_us]",
          "error": null,
          "price": 21.223599999999998
        }
      },
      "price": 51.563599999999994
    },
    {
      "description": "Preplanting",
      "class": "cultural",
      "name": "Pull Border/Checks",
      "units": "h",
      "type": "complex",
      "materials": {
        "Lube&Repair": {
          "amount": 14.29,
          "originalAmount": 14.29,
          "units": "us$",
          "error": null,
          "price": 14.29
        },
        "Labor-Equipment Operator": {
          "amount": 1.26,
          "originalAmount": 1.26,
          "units": "h",
          "error": null,
          "price": 21.42
        },
        "Fuel-Diesel": {
          "amount": 12.89,
          "originalAmount": 12.89,
          "units": "[gal_us]",
          "error": null,
          "price": 50.0132
        }
      },
      "price": 85.72319999999999
    },
    {
      "name": "Raking",
      "units": "h",
      "type": "complex",
      "materials": {
        "Rake 20'": {
          "amount": 1,
          "originalAmount": 1,
          "units": "h",
          "error": null,
          "price": 4.61
        },
        "37HP 4WD Tractor": {
          "amount": 1,
          "originalAmount": 1,
          "units": "h",
          "error": null,
          "price": 25.6416
        }
      },
      "price": 30.2516
    },
    {
      "name": "Roll-Cover Seed",
      "units": "h",
      "type": "complex",
      "materials": {
        "Lube&Repair": {
          "amount": 10,
          "originalAmount": 10,
          "units": "us$",
          "error": null,
          "price": 10
        },
        "Labor-Equipment Operator": {
          "amount": 1.18,
          "originalAmount": 1.18,
          "units": "h",
          "error": null,
          "price": 20.06
        },
        "Fuel-Diesel": {
          "amount": 5.15,
          "originalAmount": 5.15,
          "units": "[gal_us]",
          "error": null,
          "price": 19.982
        }
      },
      "price": 50.042
    },
    {
      "class": "capital",
      "name": "Service Truck",
      "units": "h",
      "type": "complex",
      "materials": {
        "Lube&Repair": {
          "amount": 4,
          "originalAmount": 4,
          "units": "us$",
          "error": null,
          "price": 4
        },
        "Labor-Equipment Operator": {
          "amount": 1.18,
          "originalAmount": 1.18,
          "units": "h",
          "error": null,
          "price": 20.06
        },
        "Fuel-Diesel": {
          "amount": 3.09,
          "originalAmount": 3.09,
          "units": "[gal_us]",
          "error": null,
          "price": 11.989199999999999
        }
      },
      "price": 36.0492
    },
    {
      "name": "Sprinkler Irrigate 2X",
      "units": "h",
      "type": "complex",
      "materials": {
        "Lube&Repair": {
          "amount": 1.5,
          "originalAmount": 1.5,
          "units": "us$",
          "error": null,
          "price": 1.5
        },
        "Labor-Equipment Operator": {
          "amount": 1.21,
          "originalAmount": 1.21,
          "units": "h",
          "error": null,
          "price": 20.57
        },
        "Fuel-Diesel": {
          "amount": 2.19,
          "originalAmount": 2.19,
          "units": "[gal_us]",
          "error": null,
          "price": 8.4972
        },
        "Estimate": {
          "amount": 45,
          "originalAmount": 45,
          "units": "us$/[acr_us]",
          "error": null,
          "price": 45
        }
      },
      "price": 75.5672
    },
    {
      "description": "Pre Planting Discing",
      "class": "cultural",
      "name": "Stubble Disc",
      "units": "h",
      "type": "complex",
      "materials": {
        "Lube&Repair": {
          "amount": 30.77,
          "originalAmount": 30.77,
          "units": "us$",
          "error": null,
          "price": 30.77
        },
        "Labor-Equipment Operator": {
          "amount": 1.36,
          "originalAmount": 1.36,
          "units": "h",
          "error": null,
          "price": 23.12
        },
        "Fuel-Diesel": {
          "amount": 17.84,
          "originalAmount": 17.84,
          "units": "[gal_us]",
          "error": null,
          "price": 69.2192
        }
      },
      "price": 123.1092
    },
    {
      "name": "Swather 16'",
      "units": "h",
      "type": "complex",
      "materials": {
        "Lube&Repair": {
          "amount": 19.42,
          "originalAmount": 19.42,
          "units": "us$",
          "error": null,
          "price": 19.42
        },
        "Labor-Equipment Operator": {
          "amount": 1,
          "originalAmount": 1,
          "units": "h",
          "error": null,
          "price": 17
        },
        "Fuel-Diesel": {
          "amount": 8,
          "originalAmount": 8,
          "units": "[gal_us]",
          "error": null,
          "price": 31.04
        }
      },
      "price": 67.46000000000001
    },
    {
      "description": "Preplanting",
      "class": "cultural",
      "name": "Tri-Plane 2X",
      "units": "h",
      "type": "complex",
      "materials": {
        "Lube&Repair": {
          "amount": 20.83,
          "originalAmount": 20.83,
          "units": "us$",
          "error": null,
          "price": 20.83
        },
        "Labor-Equipment Operator": {
          "amount": 1.23,
          "originalAmount": 1.23,
          "units": "h",
          "error": null,
          "price": 20.91
        },
        "Fuel-Diesel": {
          "amount": 12.89,
          "originalAmount": 12.89,
          "units": "[gal_us]",
          "error": null,
          "price": 50.0132
        }
      },
      "price": 91.75319999999999
    },
    {
      "type": "complex",
      "name": "150HP4WD Tractor",
      "units": "h",
      "description": "Large Tractor",
      "price": 60.2248,
      "materials": {
        "Lube&Repair": {
          "name": "Lube&Repair",
          "amount": 9.43,
          "units": "us$",
          "error": null,
          "price": 9.43,
          "originalAmount": 9.43
        },
        "Fuel-Diesel": {
          "name": "Fuel-Diesel",
          "amount": 8.71,
          "units": "[gal_us]",
          "error": null,
          "price": 33.7948,
          "originalAmount": 8.71
        },
        "Labor-Equipment Operator": {
          "name": "Labor-Equipment Operator",
          "amount": 1,
          "units": "h",
          "error": null,
          "price": 17
        }
      }
    },
    {
      "type": "complex",
      "name": "205HP Crawler",
      "units": "h",
      "description": "",
      "price": 76.30199999999999,
      "materials": {
        "Lube&Repair": {
          "name": "Lube&Repair",
          "amount": 13.13,
          "units": "us$",
          "error": null,
          "price": 13.13,
          "originalAmount": 13.13
        },
        "Fuel-Diesel": {
          "name": "Fuel-Diesel",
          "amount": 11.9,
          "units": "[gal_us]",
          "error": null,
          "price": 46.172,
          "originalAmount": 11.9
        },
        "Labor-Equipment Operator": {
          "name": "Labor-Equipment Operator",
          "amount": 1,
          "units": "h",
          "error": null,
          "price": 17
        }
      }
    },
    {
      "type": "complex",
      "name": "37HP 4WD Tractor",
      "units": "h",
      "description": "Small Tractor",
      "price": 25.6416,
      "materials": {
        "Lube&Repair": {
          "name": "Lube&Repair",
          "amount": 1.58,
          "units": "us$",
          "error": null,
          "price": 1.58,
          "originalAmount": 1.58
        },
        "Fuel-Diesel": {
          "name": "Fuel-Diesel",
          "amount": 1.82,
          "units": "[gal_us]",
          "error": null,
          "price": 7.0616,
          "originalAmount": 1.82
        },
        "Labor-Equipment Operator": {
          "name": "Labor-Equipment Operator",
          "amount": 1,
          "units": "h",
          "error": null,
          "price": 17
        }
      }
    },
    {
      "type": "complex",
      "name": "Rake 20'",
      "units": "h",
      "description": "",
      "price": 4.61,
      "materials": {
        "Lube&Repair": {
          "name": "Lube&Repair",
          "amount": 4.61,
          "units": "us$",
          "error": null,
          "price": 4.61,
          "originalAmount": 4.61
        }
      }
    },
    {
      "type": "complex",
      "name": " Baler1300# PTO",
      "units": "h",
      "description": "",
      "price": 31.85,
      "materials": {
        "Lube&Repair": {
          "name": "Lube&Repair",
          "amount": 31.85,
          "units": "us$",
          "error": null,
          "price": 31.85,
          "originalAmount": 31.85
        }
      }
    }
  ],
  "operations": [
    {
      "name": "planting",
      "materials": [
        {
          "amount": 0.33,
          "units": "h",
          "name": "Plant-Roundup Ready Seed",
          "id": "8a1706d0-e7c2-4e15-86ee-ffe6676e6501",
          "error": null,
          "price": 17.015988
        },
        {
          "amount": 0.1,
          "units": "h",
          "name": "Roll-Cover Seed",
          "id": "84bef376-6ba2-4c8e-9b39-6144f211f70e",
          "error": null,
          "price": 5.004200000000001
        },
        {
          "amount": 2,
          "units": "h",
          "name": "Sprinkler Irrigate 2X",
          "id": "9d9cf20a-8496-4ae4-bc54-2e22c4bb8582",
          "error": null,
          "price": 151.1344
        },
        {
          "amount": 2,
          "units": "h",
          "name": "Labor-Irrigation",
          "id": "0c738d7c-d759-4e36-950a-68004b25aeab",
          "error": null,
          "price": 27.2
        },
        {
          "note": "Roundup",
          "amount": 0.05,
          "units": "h",
          "name": "ATV",
          "id": "7381e058-34dd-4b9f-9943-4d41492cf648",
          "error": null,
          "price": 1.0995
        },
        {
          "amount": 2.2,
          "units": "[pt_us]",
          "name": "Roundup PowerMax",
          "id": "ef5fabaf-02e2-4c51-af08-7c828599b70f",
          "error": null,
          "price": 6.050000000000001
        },
        {
          "amount": 0.25,
          "units": "h",
          "name": "Service Truck",
          "id": "97cc88ee-8830-42b2-b1db-fb1c79920847",
          "error": null,
          "price": 9.0123
        },
        {
          "amount": 0.37,
          "units": "h",
          "name": "1/2 Ton Pickup",
          "id": "469f69bd-5606-482c-9f53-4c544a8bf10c",
          "error": null,
          "price": 11.984004
        },
        {
          "amount": 0.4,
          "units": "h",
          "name": "3/4 Ton Pickup (Farm use)",
          "id": "3df0bf8c-9727-41b7-b4b4-e613e95959a3",
          "error": null,
          "price": 15.021440000000002
        },
        {
          "amount": 40,
          "units": "[lb_av]",
          "name": "Alfalfa Seed RR",
          "id": "5c56b78b-745e-423f-8b2e-2c630b6265b6",
          "error": null,
          "price": 200
        },
        {
          "note": "Irrigation Materials",
          "amount": 45,
          "units": "us$",
          "name": "Estimate",
          "id": "a080ae18-eef8-4260-ac42-c6da7870bf3f",
          "error": null,
          "price": 45
        }
      ],
      "units": "[acr_us]",
      "schedule": [
        {
          "date": "2015-09-01",
          "length": "2",
          "units": "month"
        }
      ],
      "subtotal": 488.521832,
      "total": 488.521832
    },
    {
      "name": "irrigate",
      "materials": [
        {
          "amount": 1,
          "units": "[acr_us]",
          "name": "Irrigation-Ditch/Tail Levee",
          "id": "8cc642da-dd6e-45e5-a538-71a2374acdf1",
          "error": null,
          "price": 31.88348
        },
        {
          "amount": 42,
          "units": "[acr_us].[in_us]",
          "name": "Water-Alfalfa-Pumped",
          "id": "8380c620-988f-4a7b-96ad-3041c6fda144",
          "error": null,
          "price": 315
        },
        {
          "amount": 9,
          "units": "h",
          "name": "Labor-Irrigation",
          "id": "45d81d95-7413-4713-94b4-6842ad5b02fe",
          "error": null,
          "price": 122.39999999999999
        }
      ],
      "units": "[acr_us]",
      "schedule": [
        {
          "date": "2016-04-01",
          "length": "6",
          "units": "month"
        },
        {
          "date": "2017-04-01",
          "length": "6",
          "units": "month"
        },
        {
          "date": "2018-04-01",
          "length": "6",
          "units": "month"
        },
        {
          "date": "2019-04-01",
          "length": "6",
          "units": "month"
        }
      ],
      "subtotal": 469.28348,
      "total": 1877.13392
    },
    {
      "name": "harvest",
      "materials": [
        {
          "amount": 0.75,
          "units": "h",
          "name": "Swather 16'",
          "id": "d24f20c3-d910-41dd-8826-dc76c9228177",
          "error": null,
          "price": 50.595000000000006
        },
        {
          "amount": 0.6,
          "units": "h",
          "name": "Raking",
          "id": "e56921c0-8c52-4eb5-a8d7-dfd4f8eda1a3",
          "error": null,
          "price": 18.150959999999998
        },
        {
          "amount": 0.93,
          "units": "h",
          "name": "Baling",
          "id": "1694be8f-43a3-48e4-84fa-bb57bc274213",
          "error": null,
          "price": 92.13956400000002
        },
        {
          "amount": 0.93,
          "units": "h",
          "name": "Bale Wagon 1300# Attm",
          "id": "25997f6a-97b6-4e81-922a-b09ea2e25a73",
          "error": null,
          "price": 85.2996
        }
      ],
      "units": "[acr_us]",
      "schedule": [
        {
          "date": "2016-04-01",
          "length": "6",
          "units": "month"
        },
        {
          "date": "2017-04-01",
          "length": "6",
          "units": "month"
        },
        {
          "date": "2018-04-01",
          "length": "6",
          "units": "month"
        },
        {
          "date": "2019-04-01",
          "length": "6",
          "units": "month"
        }
      ],
      "subtotal": 246.18512400000003,
      "total": 984.7404960000001
    },
    {
      "name": "pre-plant",
      "materials": [
        {
          "note": "Soil Samples",
          "amount": 4,
          "units": "us$",
          "name": "Estimate",
          "id": "512c5458-113d-440b-b9b4-6525936ca7b2",
          "error": null,
          "price": 4
        },
        {
          "amount": 0.13,
          "units": "h",
          "name": "Stubble Disc",
          "id": "619e0b78-08c3-40c7-9fd7-46433b4e1143",
          "error": null,
          "price": 16.004196
        },
        {
          "amount": 0.12,
          "units": "h",
          "name": "Chisel/Rip & Roll",
          "id": "d5bfd089-7eaa-4329-a439-94d0b15e1923",
          "error": null,
          "price": 14.997407999999998
        },
        {
          "note": "Laser Leveling (est 1/7th) cost",
          "amount": 12,
          "units": "us$",
          "name": "Estimate",
          "id": "41872024-133f-484f-97db-a09803f0986a",
          "error": null,
          "price": 12
        },
        {
          "amount": 0.24,
          "units": "h",
          "name": "Tri-Plane 2X",
          "id": "d19c4d87-1d69-494e-9bc5-578c9e5df42c",
          "error": null,
          "price": 22.020767999999997
        },
        {
          "amount": 264.86,
          "units": "[lb_av]",
          "name": "11-52-0",
          "id": "22b5742f-c19f-4628-967c-421864b96c83",
          "error": null,
          "price": 97.9982
        },
        {
          "note": "extra fertilizer",
          "amount": 21,
          "units": "us$",
          "name": "Estimate",
          "id": "27901407-9378-40a6-9c75-72280041dcba",
          "error": null,
          "price": 21
        },
        {
          "amount": 0.19,
          "units": "h",
          "name": "Finish Disc & Roll 2X",
          "id": "58eba87d-c22b-4821-9497-e221236a5a64",
          "error": null,
          "price": 20.001831999999997
        },
        {
          "amount": 0.14,
          "units": "h",
          "name": "Pull Border/Checks",
          "id": "b88dfec3-57dc-4fc6-a09f-fdd5ebf46357",
          "error": null,
          "price": 12.001248
        }
      ],
      "units": "[acr_us]",
      "schedule": [
        {
          "date": "2015-08-01",
          "length": "5",
          "units": "month"
        }
      ],
      "subtotal": 220.023652,
      "total": 220.023652
    },
    {
      "name": "overhead",
      "materials": [
        {
          "amount": 0.47,
          "units": "h",
          "name": "1/2 Ton Pickup",
          "id": "6efe69d9-46c5-4839-bcd9-00bbe448b969",
          "error": null,
          "price": 15.222924
        },
        {
          "amount": 0.4,
          "units": "h",
          "name": "3/4 Ton Pickup (Farm use)",
          "id": "0fa0f036-453f-4658-971d-51baa036124d",
          "error": null,
          "price": 15.021440000000002
        },
        {
          "amount": 0.2,
          "units": "h",
          "name": "Service Truck",
          "id": "5178fe3c-0908-48be-909f-97ea98763f4b",
          "error": null,
          "price": 7.20984
        },
        {
          "note": "Office Expense",
          "amount": 50,
          "units": "us$",
          "name": "Estimate",
          "id": "5a7e9ccf-d0b5-4bf1-96d9-77391505a37d",
          "error": null,
          "price": 50
        },
        {
          "note": "Supervisor Salary",
          "amount": 43,
          "units": "us$",
          "name": "Estimate",
          "id": "5b60d99d-31b8-4e4b-b352-f11112e969b0",
          "error": null,
          "price": 43
        },
        {
          "note": "Liability Insurance",
          "amount": 1,
          "units": "us$",
          "name": "Estimate",
          "id": "e4e60d88-fd76-4e34-84a0-52bec3249241",
          "error": null,
          "price": 1
        },
        {
          "note": "Miscellaneous Costs",
          "amount": 20,
          "units": "us$",
          "name": "Estimate",
          "id": "3f1e184d-94ec-4ac2-8359-e1336f062606",
          "error": null,
          "price": 20
        },
        {
          "note": "Property Taxes",
          "amount": 81,
          "units": "us$",
          "name": "Estimate",
          "id": "2a469a16-db6a-4dd3-a72b-2d7d86f99f51",
          "error": null,
          "price": 81
        },
        {
          "note": "Property Insurance",
          "amount": 7,
          "units": "us$",
          "name": "Estimate",
          "id": "71d0c2ae-1a9b-4039-bfb3-74e7554cbf3b",
          "error": null,
          "price": 7
        },
        {
          "note": "Investment Repairs",
          "amount": 2,
          "units": "us$",
          "name": "Estimate",
          "id": "fa83bf25-99ec-4282-b365-3eaa62b78b3e",
          "error": null,
          "price": 2
        },
        {
          "note": "Shop Tools",
          "amount": 1,
          "units": "us$",
          "name": "Estimate",
          "id": "48909010-fa14-458f-ae8b-943d7350f514",
          "error": null,
          "price": 1
        },
        {
          "note": "Hay Barn/Pole Barn",
          "amount": 2,
          "units": "us$",
          "name": "Estimate",
          "id": "1afe3710-0b06-4607-9a39-4a16d35dd5d1",
          "error": null,
          "price": 2
        },
        {
          "note": "Land 160 Acres",
          "amount": 380,
          "units": "us$",
          "name": "Estimate",
          "id": "2d4ca76d-62c3-4c01-aa6e-73a9713dd241",
          "error": null,
          "price": 380
        },
        {
          "note": "Sprinkler Pipe",
          "amount": 1,
          "units": "us$",
          "name": "Estimate",
          "id": "7e01dae2-579f-4727-864b-ebbfd8b3ebc3",
          "error": null,
          "price": 1
        },
        {
          "note": "Pipe Main Line 10in 1/2 Mile",
          "amount": 1,
          "units": "us$",
          "name": "Estimate",
          "id": "326ec6a5-f5b7-4a94-a681-078ddbf4feab",
          "error": null,
          "price": 1
        },
        {
          "note": "Shop 8000 sqft",
          "amount": 4,
          "units": "us$",
          "name": "Estimate",
          "id": "f5e6f081-9c14-41a4-85b6-4db2ed9d53d8",
          "error": null,
          "price": 4
        },
        {
          "note": "Establishment Costs 160 Ac",
          "amount": 230,
          "units": "us$",
          "name": "Estimate",
          "id": "067db7d6-8c00-4588-b33f-f8d8faea0430",
          "error": null,
          "price": 230
        },
        {
          "note": "Equipment",
          "amount": 131,
          "units": "us$",
          "name": "Estimate",
          "id": "9c2469f5-8948-4336-98e4-2e4d8285b6cc",
          "error": null,
          "price": 131
        }
      ],
      "units": "[acr_us]",
      "schedule": [
        {
          "date": "2016-01-01",
          "length": "1",
          "units": "year"
        },
        {
          "date": "2017-01-01",
          "length": "1",
          "units": "year"
        },
        {
          "date": "2018-01-01",
          "length": "1",
          "units": "year"
        },
        {
          "date": "2019-01-01",
          "length": "1",
          "units": "year"
        }
      ],
      "subtotal": 991.454204,
      "total": 3965.816816
    },
    {
      "name": "insect control",
      "materials": [
        {
          "amount": 0.05,
          "units": "h",
          "name": "ATV",
          "id": "69636fcf-6121-43b4-9d78-5b6479f5a032",
          "error": null,
          "price": 1.0995
        },
        {
          "amount": 1.5,
          "units": "[foz_us]",
          "name": "Warrior II",
          "id": "ce025c9c-f790-4565-a466-4ac14ac5b565",
          "error": null,
          "price": 7.875
        },
        {
          "amount": 0.05,
          "units": "h",
          "name": "ATV",
          "id": "64c5f366-4ea5-45ca-971c-b8b1efecbee4",
          "error": null,
          "price": 1.0995
        },
        {
          "amount": 2,
          "units": "[foz_us]",
          "name": "Coragen",
          "id": "03ae886e-e294-4eed-9b92-ccd0cfbff5c0",
          "error": null,
          "price": 20.5
        },
        {
          "amount": 0.05,
          "units": "h",
          "name": "ATV",
          "id": "be6eb720-21b8-484d-8154-10be476c4120",
          "error": null,
          "price": 1.0995
        },
        {
          "amount": 3,
          "units": "[foz_us]",
          "name": "Belt SC",
          "id": "828838d6-665a-4f64-97c0-a1f32d3bf2d0",
          "error": null,
          "price": 28.200000000000003
        }
      ],
      "units": "[acr_us]",
      "schedule": [
        {
          "date": "2016-01-01",
          "length": "9",
          "units": "month"
        },
        {
          "date": "2017-01-01",
          "length": "9",
          "units": "month"
        },
        {
          "date": "2018-01-01",
          "length": "9",
          "units": "month"
        },
        {
          "date": "2019-01-01",
          "length": "9",
          "units": "month"
        }
      ],
      "subtotal": 59.8735,
      "total": 239.494
    },
    {
      "name": "weed control",
      "materials": [
        {
          "amount": 0.05,
          "units": "h",
          "name": "ATV",
          "id": "3d020237-675c-4868-82d7-f2f471b8b088",
          "error": null,
          "price": 1.0995
        },
        {
          "amount": 4.4,
          "units": "[pt_us]",
          "name": "Velpar L",
          "id": "eaaf031f-052f-454a-897c-eed47724dea6",
          "error": null,
          "price": 63.404
        }
      ],
      "units": "[acr_us]",
      "schedule": [
        {
          "date": "2016-01-01",
          "length": "9",
          "units": "month"
        },
        {
          "date": "2017-01-01",
          "length": "9",
          "units": "month"
        },
        {
          "date": "2018-01-01",
          "length": "9",
          "units": "month"
        },
        {
          "date": "2019-01-01",
          "length": "9",
          "units": "month"
        }
      ],
      "subtotal": 64.5035,
      "total": 258.014
    },
    {
      "name": "fertilize",
      "materials": [
        {
          "amount": 200,
          "units": "[lb_av]",
          "name": "11-52-0",
          "id": "eb2af8a1-f5de-4896-b25a-1fa4c7d0b728",
          "error": null,
          "price": 74
        },
        {
          "note": "Fertilizer Materials",
          "amount": 21,
          "units": "us$",
          "name": "Estimate",
          "id": "c8c4c9b5-cdab-411d-9636-518cf0eff078",
          "error": null,
          "price": 21
        }
      ],
      "units": "[acr_us]",
      "schedule": [
        {
          "date": "2018-01-01",
          "length": "9",
          "units": "month"
        }
      ],
      "subtotal": 95,
      "total": 95
    }
  ],
  "farm": {
    "unit": "[acr_us]",
    "size": "1",
    "commodity": "ALFALFA",
    "location": "06113",
    "farm": "northern_ca"
  }
}

},{}],"/home/quinn/farm-budgets-app/lib/shared/config/app/qjh-poplar.json":[function(require,module,exports){
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
      "name": "Lube & Repairs",
      "class": "Equipment",
      "price": 1,
      "units": "us$",
      "fixed": true,
      "description": "Additional Equipment Costs",
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
      "name": "Challenger Tractor--Labor",
      "price": 35,
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
      "class": "labor",
      "name": "Tractor and sprayer--labor",
      "units": "us$/h",
      "price": 30,
      "type": "simple"
    },
    {
      "class": "labor",
      "name": "FR 6080 FH--Labor",
      "units": "us$/h",
      "price": 30,
      "type": "simple"
    },
    {
      "class": "labor",
      "name": "Mid-size Tractor--Labor",
      "units": "us$/h",
      "price": 22,
      "type": "simple"
    },
    {
      "class": "labor",
      "name": "Semi-Tractor trailer--Labor",
      "units": "us$/h",
      "price": 28,
      "type": "simple"
    },
    {
      "class": "labor",
      "name": "Small Tractor--Labor",
      "units": "us$/h",
      "price": 22,
      "type": "simple"
    },
    {
      "name": "Support Truck--Labor",
      "price": 30,
      "units": "us$/h",
      "type": "simple"
    },
    {
      "class": "labor",
      "name": "Tandem Axle Truck--Labor",
      "units": "us$/h",
      "price": 26,
      "type": "simple"
    },
    {
      "class": "labor",
      "name": "3-Wheel Ag Sprayer--Labor",
      "units": "us$/h",
      "price": 30,
      "type": "simple"
    },
    {
      "class": "labor",
      "name": "Large Tractor--Labor",
      "units": "us$/h",
      "price": 35,
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
        "Challenger Tractor--Labor": {
          "amount": 1,
          "originalAmount": 1,
          "units": "h",
          "error": null,
          "price": 35
        },
        "Lube & Repairs": {
          "name": "Lube & Repairs",
          "amount": 90,
          "units": "us$",
          "error": null,
          "price": 90,
          "originalAmount": 90
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
        "Equipment Fuel": {
          "amount": 0.96,
          "originalAmount": 0.96,
          "units": "[gal_us]",
          "error": null,
          "price": 2.6976
        },
        "Lube & Repairs": {
          "name": "Lube & Repairs",
          "amount": 1.2,
          "units": "us$",
          "error": null,
          "price": 1.2,
          "originalAmount": 1.2
        },
        "Estimate": {
          "name": "Estimate",
          "amount": 0.71,
          "units": "us$",
          "error": null,
          "price": 0.71,
          "originalAmount": 0.71
        }
      },
      "price": 4.6076
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
          "name": "FR 6080 FH--Labor",
          "amount": 1,
          "units": "h",
          "error": null,
          "price": 30
        },
        "Lube & Repairs": {
          "name": "Lube & Repairs",
          "amount": 180,
          "units": "us$",
          "error": null,
          "price": 180,
          "originalAmount": 180
        }
      },
      "price": 247.09199999999998
    },
    {
      "description": "'Manual Application of herbicide'",
      "class": "herbicide",
      "name": "herbicide - manual",
      "units": "[acr_us]",
      "type": "complex",
      "materials": {
        "Glyphosate": {
          "amount": 2,
          "originalAmount": 2,
          "units": "[qt_us]",
          "error": null,
          "price": 8
        },
        "Laborer": {
          "amount": 0.96,
          "originalAmount": 0.96,
          "units": "h",
          "error": null,
          "price": 16.32
        }
      },
      "price": 24.32
    },
    {
      "class": "labor",
      "name": "hoeing",
      "units": "[acr_us]",
      "type": "complex",
      "materials": {
        "Laborer": {
          "amount": 1.92,
          "originalAmount": 1.92,
          "units": "h",
          "error": null,
          "price": 32.64
        }
      },
      "price": 32.64
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
        "Large Tractor--Labor": {
          "name": "Large Tractor--Labor",
          "amount": 1,
          "units": "h",
          "error": null,
          "price": 35
        },
        "Lube & Repairs": {
          "name": "Lube & Repairs",
          "amount": 70,
          "units": "us$",
          "error": null,
          "price": 70,
          "originalAmount": 70
        }
      },
      "price": 142.09199999999998
    },
    {
      "class": "equipment",
      "name": "Mid-size Tractor",
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
        "Mid-size Tractor--Labor": {
          "name": "Mid-size Tractor--Labor",
          "amount": 1,
          "units": "h",
          "error": null,
          "price": 22
        },
        "Lube & Repairs": {
          "name": "Lube & Repairs",
          "amount": 45,
          "units": "us$",
          "error": null,
          "price": 45,
          "originalAmount": 45
        }
      },
      "price": 78.1276
    },
    {
      "class": "equipment",
      "name": "Semi-Tractor trailer",
      "units": "h",
      "type": "complex",
      "materials": {
        "Equipment Fuel": {
          "amount": 6.5,
          "originalAmount": 6.5,
          "units": "[gal_us]",
          "error": null,
          "price": 18.265
        },
        "Semi-Tractor trailer--Labor": {
          "name": "Semi-Tractor trailer--Labor",
          "amount": 1,
          "units": "h",
          "error": null,
          "price": 28
        },
        "Lube & Repairs": {
          "name": "Lube & Repairs",
          "amount": 55,
          "units": "us$",
          "error": null,
          "price": 55,
          "originalAmount": 55
        }
      },
      "price": 101.265
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
          "name": "Small Tractor--Labor",
          "amount": 1,
          "units": "h",
          "error": null,
          "price": 22
        },
        "Lube & Repairs": {
          "name": "Lube & Repairs",
          "amount": 30,
          "units": "us$",
          "error": null,
          "price": 30,
          "originalAmount": 30
        }
      },
      "price": 57.5638
    },
    {
      "class": "equipment",
      "name": "Support Truck",
      "units": "h",
      "type": "complex",
      "materials": {
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
        },
        "Lube & Repairs": {
          "name": "Lube & Repairs",
          "amount": 25,
          "units": "us$",
          "error": null,
          "price": 25,
          "originalAmount": 25
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
        "Equipment Fuel": {
          "amount": 13.2,
          "originalAmount": 13.2,
          "units": "[gal_us]",
          "error": null,
          "price": 37.092
        },
        "Tandem Axle Truck--Labor": {
          "name": "Tandem Axle Truck--Labor",
          "amount": 4,
          "units": "h",
          "error": null,
          "price": 104,
          "originalAmount": 4
        },
        "Lube & Repairs": {
          "name": "Lube & Repairs",
          "amount": 100,
          "units": "us$",
          "error": null,
          "price": 100,
          "originalAmount": 100
        }
      },
      "price": 241.09199999999998
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
        "Tractor and sprayer--labor": {
          "name": "Tractor and sprayer--labor",
          "amount": 1,
          "units": "h",
          "error": null,
          "price": 30
        },
        "Lube & Repairs": {
          "name": "Lube & Repairs",
          "amount": 50,
          "units": "us$",
          "error": null,
          "price": 50,
          "originalAmount": 50
        }
      },
      "price": 91.1276
    },
    {
      "type": "complex",
      "name": "3-Wheel Ag Sprayer",
      "units": "h",
      "description": "",
      "price": 91.1276,
      "materials": {
        "3-Wheel Ag Sprayer--Labor": {
          "name": "3-Wheel Ag Sprayer--Labor",
          "amount": 1,
          "units": "h",
          "error": null,
          "price": 30
        },
        "Equipment Fuel": {
          "name": "Equipment Fuel",
          "amount": 3.96,
          "units": "[gal_us]",
          "error": null,
          "price": 11.1276,
          "originalAmount": 3.96
        },
        "Lube & Repairs": {
          "name": "Lube & Repairs",
          "amount": 50,
          "units": "us$",
          "error": null,
          "price": 50,
          "originalAmount": 50
        }
      }
    }
  ],
  "operations": [
    {
      "name": "site prep",
      "materials": [
        {
          "note": "Initial Spraying",
          "amount": 3,
          "units": "h",
          "name": "Tractor and sprayer",
          "id": "16712afe-f9fb-46cb-aba8-805d8606fe64",
          "error": null,
          "price": 273.3828
        },
        {
          "note": "Initial Spraying",
          "amount": 100,
          "units": "[qt_us]",
          "name": "Glyphosate",
          "id": "406cddf2-ee69-4ee4-ae8f-74801f0ac628",
          "error": null,
          "price": 400
        },
        {
          "note": "Initial Spraying",
          "amount": 125,
          "units": "[qt_us]",
          "name": "Goal 2XL",
          "id": "c4e76bcc-1955-4123-be79-4bbd2f19e8e1",
          "error": null,
          "price": 3750
        },
        {
          "note": "Initial Tillage",
          "amount": 20,
          "units": "h",
          "name": "Large Tractor",
          "id": "1809c3b5-0d49-40a9-b64b-21d79b7ceea4",
          "error": null,
          "price": 2841.8399999999997
        },
        {
          "note": "Ripping",
          "amount": 10,
          "units": "h",
          "name": "Large Tractor",
          "id": "2476732d-0efb-4a26-a21b-4df3d1e8c1a3",
          "error": null,
          "price": 1420.9199999999998
        },
        {
          "note": "Row Marking",
          "amount": 25,
          "units": "h",
          "name": "Large Tractor",
          "id": "2b1ddd65-f8a9-4360-ac47-502fed50ca4e",
          "error": null,
          "price": 3552.2999999999997
        },
        {
          "note": "herbicide - preemergent",
          "amount": 32,
          "units": "h",
          "name": "Challenger Tractor",
          "id": "5ba9d023-f9d3-4d59-a960-70dbe42c9f02",
          "error": null,
          "price": 5740.8512,
          "originalAmount": 32
        },
        {
          "note": "herbicide - preemergent",
          "amount": 50,
          "units": "[qt_us]",
          "name": "Trifluralin",
          "id": "0be0b1d6-d52d-46a6-bf1a-240832825a85",
          "error": null,
          "price": 375
        }
      ],
      "units": "[acr_us]",
      "schedule": [
        {
          "date": "2015-06-01",
          "length": "3",
          "units": "month"
        }
      ],
      "subtotal": 18354.293999999998,
      "total": 18354.293999999998
    },
    {
      "name": "planting",
      "materials": [
        {
          "note": "Transport Nursery to field",
          "amount": 20,
          "units": "h",
          "name": "Semi-Tractor trailer",
          "id": "9895e9ea-c924-4dca-947a-b672b4b5ff45",
          "error": null,
          "price": 2025.3
        },
        {
          "amount": 145000,
          "units": "1",
          "name": "Poplar Cutting",
          "id": "1d0c21ed-65ae-4ffd-825e-ee80722bfdbf",
          "error": null,
          "price": 11600
        },
        {
          "amount": 1080,
          "units": "h",
          "name": "Cooler/van",
          "id": "ee262ed0-20f0-453c-9593-4cff11ab528b",
          "error": null,
          "price": 4976.208
        },
        {
          "amount": 480,
          "units": "h",
          "name": "Laborer",
          "id": "f10c788f-593f-449b-8e12-707b3aba03d5",
          "error": null,
          "price": 8160
        }
      ],
      "units": "[acr_us]",
      "schedule": [
        {
          "date": "2015-10-01",
          "length": "1",
          "units": "month"
        }
      ],
      "subtotal": 26761.507999999998,
      "total": 26761.507999999998
    },
    {
      "name": "crop care - yr0",
      "materials": [
        {
          "amount": 25,
          "units": "[acr_us]",
          "name": "herbicide - manual",
          "id": "650c3f7b-7a4e-4c69-88d7-d0918cde72a4",
          "error": null,
          "price": 608
        },
        {
          "note": "2 times over 70 acres each.",
          "amount": 140,
          "units": "[acr_us]",
          "name": "hoeing",
          "id": "b88019fd-02c9-4bc3-aeda-7b1d81e8c582",
          "error": null,
          "price": 4569.6
        }
      ],
      "units": "[acr_us]",
      "schedule": [
        {
          "date": "2015-11-01",
          "length": "1",
          "units": "year"
        }
      ],
      "subtotal": 5177.6,
      "total": 5177.6
    },
    {
      "name": "crop care - yr1",
      "materials": [
        {
          "note": "Tillage",
          "amount": 48,
          "units": "h",
          "name": "Small Tractor",
          "id": "2068c216-4838-46f7-85d0-36d10c5c3fed",
          "error": null,
          "price": 2763.0624
        },
        {
          "note": "5 times",
          "amount": 500,
          "units": "[acr_us]",
          "name": "hoeing",
          "id": "68f6a064-94c4-453e-b36b-d51f4f4b96fc",
          "error": null,
          "price": 16320
        },
        {
          "note": "3 times, 1/2 field",
          "amount": 150,
          "units": "[acr_us]",
          "name": "herbicide - manual",
          "id": "28903595-e3ca-43e0-ac38-d6d7bf56a67f",
          "error": null,
          "price": 3648
        },
        {
          "note": "Interplanting",
          "amount": 96,
          "units": "h",
          "name": "Laborer",
          "id": "2b24b578-9236-447e-8996-2dffb9d23e16",
          "error": null,
          "price": 1632
        }
      ],
      "units": "[acr_us]",
      "schedule": [
        {
          "date": "2016-11-01",
          "length": "1",
          "units": "year"
        }
      ],
      "subtotal": 24363.0624,
      "total": 24363.0624
    },
    {
      "name": "harvest - yr1",
      "materials": [
        {
          "note": "",
          "amount": 26,
          "units": "h",
          "name": "FR 6080 FH",
          "id": "a7d2d8c8-5dcd-4e62-b901-85cdfa525dc8",
          "error": null,
          "price": 6424.392
        },
        {
          "amount": 104,
          "units": "h",
          "name": "Tandem Axle Truck",
          "id": "a7a980be-4db4-4f12-88a3-bb773dde5699",
          "error": null,
          "price": 25073.568,
          "originalAmount": 104
        },
        {
          "amount": 26,
          "units": "h",
          "name": "Support Truck",
          "id": "20d3e487-7d15-47e6-9e97-24b4ad01c97e",
          "error": null,
          "price": 1558.5855999999999
        }
      ],
      "units": "[acr_us]",
      "schedule": [
        {
          "length": 1,
          "units": "month",
          "date": "2017-10-2"
        }
      ],
      "subtotal": 33056.5456,
      "total": 33056.5456
    },
    {
      "name": "crop care - post harvest",
      "materials": [
        {
          "note": "Post harvest clean up",
          "amount": 30,
          "units": "h",
          "name": "Mid-size Tractor",
          "id": "5855eda1-0a82-4784-be26-2e3dc9d84702",
          "error": null,
          "price": 2343.828
        },
        {
          "note": "Dormant Herbicide",
          "amount": 8,
          "units": "h",
          "name": "Tractor and sprayer",
          "id": "03105775-85bb-4236-95c2-24e1e40853a4",
          "error": null,
          "price": 729.0208
        },
        {
          "note": "Dormant Herbicide",
          "amount": 200,
          "units": "[qt_us]",
          "name": "Glyphosate",
          "id": "48539a8b-8cad-4145-a61d-167cbcd08a68",
          "error": null,
          "price": 800
        },
        {
          "note": "Dormant Herbicide",
          "amount": 200,
          "units": "[qt_us]",
          "name": "Trifluralin",
          "id": "b16d6fc9-5803-4404-b91c-43d904f403ae",
          "error": null,
          "price": 1500
        },
        {
          "note": "post emergent",
          "amount": 100,
          "units": "[acr_us]",
          "name": "herbicide - manual",
          "id": "fb650fd3-998d-41fa-885d-deee6812419c",
          "error": null,
          "price": 2432
        }
      ],
      "units": "[acr_us]",
      "schedule": [
        {
          "length": "1",
          "units": "year",
          "date": "2017-11-1"
        },
        {
          "length": 1,
          "units": "year",
          "date": "2020-11-1"
        },
        {
          "length": 1,
          "units": "year",
          "date": "2023-11-1"
        },
        {
          "length": 1,
          "units": "year",
          "date": "2026-11-1"
        }
      ],
      "subtotal": 7804.8488,
      "total": 31219.3952
    },
    {
      "name": "crop care - established",
      "materials": [
        {
          "amount": 150,
          "units": "[acr_us]",
          "name": "hoeing",
          "id": "4741a52b-81c0-4309-bba9-8c5d4a3ae07c",
          "error": null,
          "price": 4896
        },
        {
          "amount": 100,
          "units": "[acr_us]",
          "name": "herbicide - manual",
          "id": "19e8fc01-2263-43e4-9f4b-95d063c6ec9c",
          "error": null,
          "price": 2432
        }
      ],
      "units": "[acr_us]",
      "schedule": [
        {
          "length": "1",
          "units": "year",
          "date": "2018-11-1"
        },
        {
          "length": "1",
          "units": "year",
          "date": "2019-11-1"
        },
        {
          "length": 1,
          "units": "year",
          "date": "2021-11-1"
        },
        {
          "length": "1",
          "units": "year",
          "date": "2022-11-1"
        },
        {
          "length": 1,
          "units": "year",
          "date": "2024-11-1"
        },
        {
          "length": 1,
          "units": "year",
          "date": "2025-11-1"
        },
        {
          "length": 1,
          "units": "year",
          "date": "2027-11-1"
        },
        {
          "length": 1,
          "units": "year",
          "date": "2028-11-1"
        }
      ],
      "subtotal": 7328,
      "total": 58624
    },
    {
      "name": "harvest - established",
      "materials": [
        {
          "amount": 35,
          "units": "h",
          "name": "FR 6080 FH",
          "id": "6739ca2e-28eb-4881-8913-6fb518b27373",
          "error": null,
          "price": 8648.22
        },
        {
          "amount": 175,
          "units": "h",
          "name": "Tandem Axle Truck",
          "id": "0197543f-dfe3-4b4d-a53b-866738c7ff34",
          "error": null,
          "price": 42191.1,
          "originalAmount": 175
        },
        {
          "amount": 35,
          "units": "h",
          "name": "Support Truck",
          "id": "9d570d9c-c6af-4aaa-a2a9-fac499163c2e",
          "error": null,
          "price": 2098.096
        }
      ],
      "units": "[acr_us]",
      "schedule": [
        {
          "length": "1",
          "units": "month",
          "date": "2020-10-1"
        },
        {
          "length": "1",
          "units": "month",
          "date": "2023-10-1"
        },
        {
          "length": 1,
          "units": "month",
          "date": "2026-10-1"
        },
        {
          "length": 1,
          "units": "month",
          "date": "2029-10-1"
        }
      ],
      "subtotal": 52937.416,
      "total": 211749.664
    },
    {
      "name": "restoration",
      "materials": [
        {
          "note": "disking",
          "amount": 36,
          "units": "h",
          "name": "Large Tractor",
          "id": "72b4f97b-812f-4667-b371-4f76376d7a8c",
          "error": null,
          "price": 5115.312,
          "originalAmount": 36
        },
        {
          "note": "herbicide",
          "amount": 20,
          "units": "h",
          "name": "Tractor and sprayer",
          "id": "b2fbf8d8-9d99-4531-a0df-77de07f5ab2e",
          "error": null,
          "price": 1822.5520000000001
        },
        {
          "note": "herbicide",
          "amount": 200,
          "units": "[qt_us]",
          "name": "Glyphosate",
          "id": "e0edae0c-181b-4b13-8823-17d291ed4695",
          "error": null,
          "price": 800
        },
        {
          "note": "herbicide",
          "amount": 200,
          "units": "[qt_us]",
          "name": "2,4-D",
          "id": "3b14e081-3602-4137-9053-890e4f4716c4",
          "error": null,
          "price": 1000
        }
      ],
      "units": "[acr_us]",
      "schedule": [
        {
          "length": "3",
          "units": "month",
          "date": "2029-11-1"
        }
      ],
      "subtotal": 8737.864,
      "total": 8737.864
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

},{}],"/home/quinn/farm-budgets-app/lib/shared/config/app/testing.json":[function(require,module,exports){
module.exports={
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
      "class": "equipment",
      "name": "foo--equipment",
      "units": "us$/[acr_us]",
      "price": 23,
      "type": "simple"
    },
    {
      "type": "complex",
      "name": "foo",
      "units": "[acr_us]",
      "description": "",
      "price": 25,
      "materials": {
        "Estimate": {
          "name": "Estimate",
          "amount": 2,
          "units": "us$",
          "error": null,
          "price": 2,
          "originalAmount": 2
        },
        "foo--equipment": {
          "name": "foo--equipment",
          "amount": 1,
          "units": "[acr_us]",
          "error": null,
          "price": 23
        },
        "bar" : {
          "name" : "bar",
          "amout" : 1,
          "units" : "[acr_us]"
        }
      }
    }
  ],
  "operations": [
    {
      "name": "foo",
      "materials": [
        {
          "name": "foo",
          "amount": 1,
          "units": "$/[acr_us]",
          "id": "eb847e89-68de-46a2-a203-4706e81a3d49",
          "error": null,
          "price": 25
        },
        {
          "name" : "baz",
          "amout" : 1,
          "units" : "[acr_us]",
        },
      ],
      "schedule": [
        {
          "length": 1,
          "units": "month",
          "date": "2015-9-7"
        },
        {
          "length": 1,
          "units": "month",
          "date": "2015-9-9"
        },
        {
          "length": 1,
          "units": "month",
          "date": "2015-9-25"
        }
      ],
      "units": "[acr_us]",
      "subtotal": 25,
      "total": 75
    }
  ],
  "farm": {
    "unit": "[acr_us]",
    "size": "100",
    "commodity": "",
    "location": "",
    "farm": "blank test"
  }
}

},{}],"/home/quinn/farm-budgets-app/lib/shared/config/ca_alfalfa_swap.json":[function(require,module,exports){
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

},{}],"/home/quinn/farm-budgets-app/lib/shared/config/ca_alfalfa_swap_estimate.json":[function(require,module,exports){
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

},{}],"/home/quinn/farm-budgets-app/lib/shared/config/default.json":[function(require,module,exports){
module.exports={
    "application":"farm-budgets"
}

},{}],"/home/quinn/farm-budgets-app/lib/shared/config/poplar-example.json":[function(require,module,exports){
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

},{}],"/home/quinn/farm-budgets-app/lib/shared/index.js":[function(require,module,exports){
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
    'alfalfa - jm' : require('./config/app/alfalfa'),
    'blank' : require('./config/app/blank'),
    'testing' : require('./config/app/testing'),
    'qjh/alfalfa': require('./config/app/qjh-alfalfa'),
    'qjh/poplar' : require('./config/app/qjh-poplar')
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

},{"./config/app/alfalfa":"/home/quinn/farm-budgets-app/lib/shared/config/app/alfalfa.json","./config/app/blank":"/home/quinn/farm-budgets-app/lib/shared/config/app/blank.json","./config/app/poplar":"/home/quinn/farm-budgets-app/lib/shared/config/app/poplar.json","./config/app/qjh-alfalfa":"/home/quinn/farm-budgets-app/lib/shared/config/app/qjh-alfalfa.json","./config/app/qjh-poplar":"/home/quinn/farm-budgets-app/lib/shared/config/app/qjh-poplar.json","./config/app/testing":"/home/quinn/farm-budgets-app/lib/shared/config/app/testing.json","./config/ca_alfalfa_swap":"/home/quinn/farm-budgets-app/lib/shared/config/ca_alfalfa_swap.json","./config/ca_alfalfa_swap_estimate":"/home/quinn/farm-budgets-app/lib/shared/config/ca_alfalfa_swap_estimate.json","./config/default":"/home/quinn/farm-budgets-app/lib/shared/config/default.json","./config/poplar-example":"/home/quinn/farm-budgets-app/lib/shared/config/poplar-example.json","./materialController":"/home/quinn/farm-budgets-app/lib/shared/materialController/index.js","./operationController":"/home/quinn/farm-budgets-app/lib/shared/operationController/index.js","./transform":"/home/quinn/farm-budgets-app/lib/shared/transform/index.js","./units":"/home/quinn/farm-budgets-app/lib/shared/units/index.js","./utils":"/home/quinn/farm-budgets-app/lib/shared/utils/index.js","ucum.js":"/home/quinn/farm-budgets-app/node_modules/ucum.js/ucum.js"}],"/home/quinn/farm-budgets-app/lib/shared/materialController/index.js":[function(require,module,exports){
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

  return setError(name, 'material '+name+' does not exist', 1);
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
    return setError(material.name, 'material already exists', 2);
  } else if( data.complex[material.name] && !options.replace ) {
    return setError(material.name, 'material already exists', 2);
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

  return setError(name, name+' is not in the material list', 3);
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

function setError(name, msg, code) {
  return {
    name : name,
    error : true,
    message : msg,
    code : code
  };
}

// does a material contain or have a dependency on a given material name
function contains(material, name, replaced) {
  if( material.name === name || material.name === replaced ) {
    return true;
  }

  if( material.type !== 'complex' || material.materials === undefined ) {
    return false;
  }

  for( var key in material.materials ) {
    if( key === name || key === replaced ) {
      return true;
    }

    var childContains = contains(get(key), name, replaced);
    if( childContains ) {
      return true;
    }
  }

  return false;
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
  materialRecalc : materialRecalc,
  contains : contains
};

},{"../units":"/home/quinn/farm-budgets-app/lib/shared/units/index.js","events":"/home/quinn/farm-budgets-app/node_modules/grunt-browserify/node_modules/browserify/node_modules/events/events.js"}],"/home/quinn/farm-budgets-app/lib/shared/model/unit_math/index.js":[function(require,module,exports){
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

},{"ucum.js":"/home/quinn/farm-budgets-app/node_modules/ucum.js/ucum.js"}],"/home/quinn/farm-budgets-app/lib/shared/operationController/index.js":[function(require,module,exports){
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
var farmSize = 1;
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

  if( operation.perAcre ) {
    operation.subtotal = farmSize * operation.subtotal;
  }

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
      // recursively check complex elements
      } else if( materialController.contains(materialImpl, material.name, replaced) ) {
          fireChange = true;
      }

      if( fireChange ) {
        events.emit('operation-update', {
          operation: operation
        });
      }
    }
  }
}

function setFarmSize(size) {
  farmSize = size;
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
  addUpdateMaterial : utils.addUpdateMaterial,
  setFarmSize : setFarmSize
};

},{"../units":"/home/quinn/farm-budgets-app/lib/shared/units/index.js","./utils":"/home/quinn/farm-budgets-app/lib/shared/operationController/utils.js","events":"/home/quinn/farm-budgets-app/node_modules/grunt-browserify/node_modules/browserify/node_modules/events/events.js","node-uuid":"/home/quinn/farm-budgets-app/node_modules/node-uuid/uuid.js"}],"/home/quinn/farm-budgets-app/lib/shared/operationController/utils.js":[function(require,module,exports){
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

  if( !range.start ) {
    return months;
  }

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
  return new Date(parseInt(parts[0]), parseInt(parts[1])-1, parseInt(parts[2]));
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

},{"node-uuid":"/home/quinn/farm-budgets-app/node_modules/node-uuid/uuid.js"}],"/home/quinn/farm-budgets-app/lib/shared/transform/index.js":[function(require,module,exports){
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

},{}],"/home/quinn/farm-budgets-app/lib/shared/units/definitions.js":[function(require,module,exports){
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

},{}],"/home/quinn/farm-budgets-app/lib/shared/units/index.js":[function(require,module,exports){
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

  if( materialImpl.amount === undefined ) {
    materialImpl.amount = 1;
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

  if( materialImpl.amount === undefined ) {
    materialImpl.amount = 1;
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

},{"../model/unit_math":"/home/quinn/farm-budgets-app/lib/shared/model/unit_math/index.js","./definitions":"/home/quinn/farm-budgets-app/lib/shared/units/definitions.js","ucum.js":"/home/quinn/farm-budgets-app/node_modules/ucum.js/ucum.js"}],"/home/quinn/farm-budgets-app/lib/shared/utils/index.js":[function(require,module,exports){
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

},{}],"/home/quinn/farm-budgets-app/node_modules/grunt-browserify/node_modules/browserify/node_modules/events/events.js":[function(require,module,exports){
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

},{}],"/home/quinn/farm-budgets-app/node_modules/node-uuid/uuid.js":[function(require,module,exports){
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

},{}],"/home/quinn/farm-budgets-app/node_modules/ucum.js/generated/equivalents.json":[function(require,module,exports){
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

},{}],"/home/quinn/farm-budgets-app/node_modules/ucum.js/generated/metrics.json":[function(require,module,exports){
module.exports={"mol":true,"sr":true,"Hz":true,"N":true,"Pa":true,"J":true,"W":true,"A":true,"V":true,"F":true,"Ohm":true,"S":true,"Wb":true,"Cel":true,"T":true,"H":true,"lm":true,"lx":true,"Bq":true,"Gy":true,"Sv":true,"l":true,"L":true,"ar":true,"t":true,"bar":true,"u":true,"eV":true,"pc":true,"[c]":true,"[h]":true,"[k]":true,"[eps_0]":true,"[mu_0]":true,"[e]":true,"[m_e]":true,"[m_p]":true,"[G]":true,"[g]":true,"[ly]":true,"gf":true,"Ky":true,"Gal":true,"dyn":true,"erg":true,"P":true,"Bi":true,"St":true,"Mx":true,"G":true,"Oe":true,"Gb":true,"sb":true,"Lmb":true,"ph":true,"Ci":true,"R":true,"RAD":true,"REM":true,"cal_[15]":true,"cal_[20]":true,"cal_m":true,"cal_IT":true,"cal_th":true,"cal":true,"tex":true,"m[H2O]":true,"m[Hg]":true,"eq":true,"osm":true,"g%":true,"kat":true,"U":true,"[iU]":true,"[IU]":true,"Np":true,"B":true,"B[SPL]":true,"B[V]":true,"B[mV]":true,"B[uV]":true,"B[10.nV]":true,"B[W]":true,"B[kW]":true,"st":true,"mho":true,"bit":true,"By":true,"Bd":true,"m":true,"s":true,"g":true,"rad":true,"K":true,"C":true,"cd":true}

},{}],"/home/quinn/farm-budgets-app/node_modules/ucum.js/generated/prefixes.json":[function(require,module,exports){
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

},{}],"/home/quinn/farm-budgets-app/node_modules/ucum.js/generated/ucum-parser.js":[function(require,module,exports){
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

},{"../lib/helpers":"/home/quinn/farm-budgets-app/node_modules/ucum.js/lib/helpers.js","./metrics.json":"/home/quinn/farm-budgets-app/node_modules/ucum.js/generated/metrics.json","./prefixes.json":"/home/quinn/farm-budgets-app/node_modules/ucum.js/generated/prefixes.json"}],"/home/quinn/farm-budgets-app/node_modules/ucum.js/lib/helpers.js":[function(require,module,exports){
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

},{}],"/home/quinn/farm-budgets-app/node_modules/ucum.js/ucum.js":[function(require,module,exports){
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

},{"./generated/equivalents.json":"/home/quinn/farm-budgets-app/node_modules/ucum.js/generated/equivalents.json","./generated/ucum-parser.js":"/home/quinn/farm-budgets-app/node_modules/ucum.js/generated/ucum-parser.js","./lib/helpers.js":"/home/quinn/farm-budgets-app/node_modules/ucum.js/lib/helpers.js"}]},{},["/home/quinn/farm-budgets-app/lib/shared/index.js"])("/home/quinn/farm-budgets-app/lib/shared/index.js")
});
//# sourceMappingURL=data:application/json;charset:utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIm5vZGVfbW9kdWxlcy9ncnVudC1icm93c2VyaWZ5L25vZGVfbW9kdWxlcy9icm93c2VyaWZ5L25vZGVfbW9kdWxlcy9icm93c2VyLXBhY2svX3ByZWx1ZGUuanMiLCJsaWIvc2hhcmVkL2NvbmZpZy9hcHAvYWxmYWxmYS5qc29uIiwibGliL3NoYXJlZC9jb25maWcvYXBwL2JsYW5rLmpzb24iLCJsaWIvc2hhcmVkL2NvbmZpZy9hcHAvcG9wbGFyLmpzb24iLCJsaWIvc2hhcmVkL2NvbmZpZy9hcHAvcWpoLWFsZmFsZmEuanNvbiIsImxpYi9zaGFyZWQvY29uZmlnL2FwcC9xamgtcG9wbGFyLmpzb24iLCJsaWIvc2hhcmVkL2NvbmZpZy9hcHAvdGVzdGluZy5qc29uIiwibGliL3NoYXJlZC9jb25maWcvY2FfYWxmYWxmYV9zd2FwLmpzb24iLCJsaWIvc2hhcmVkL2NvbmZpZy9jYV9hbGZhbGZhX3N3YXBfZXN0aW1hdGUuanNvbiIsImxpYi9zaGFyZWQvY29uZmlnL2RlZmF1bHQuanNvbiIsImxpYi9zaGFyZWQvY29uZmlnL3BvcGxhci1leGFtcGxlLmpzb24iLCJsaWIvc2hhcmVkL2luZGV4LmpzIiwibGliL3NoYXJlZC9tYXRlcmlhbENvbnRyb2xsZXIvaW5kZXguanMiLCJsaWIvc2hhcmVkL21vZGVsL3VuaXRfbWF0aC9pbmRleC5qcyIsImxpYi9zaGFyZWQvb3BlcmF0aW9uQ29udHJvbGxlci9pbmRleC5qcyIsImxpYi9zaGFyZWQvb3BlcmF0aW9uQ29udHJvbGxlci91dGlscy5qcyIsImxpYi9zaGFyZWQvdHJhbnNmb3JtL2luZGV4LmpzIiwibGliL3NoYXJlZC91bml0cy9kZWZpbml0aW9ucy5qcyIsImxpYi9zaGFyZWQvdW5pdHMvaW5kZXguanMiLCJsaWIvc2hhcmVkL3V0aWxzL2luZGV4LmpzIiwibm9kZV9tb2R1bGVzL2dydW50LWJyb3dzZXJpZnkvbm9kZV9tb2R1bGVzL2Jyb3dzZXJpZnkvbm9kZV9tb2R1bGVzL2V2ZW50cy9ldmVudHMuanMiLCJub2RlX21vZHVsZXMvbm9kZS11dWlkL3V1aWQuanMiLCJub2RlX21vZHVsZXMvdWN1bS5qcy9nZW5lcmF0ZWQvZXF1aXZhbGVudHMuanNvbiIsIm5vZGVfbW9kdWxlcy91Y3VtLmpzL2dlbmVyYXRlZC9tZXRyaWNzLmpzb24iLCJub2RlX21vZHVsZXMvdWN1bS5qcy9nZW5lcmF0ZWQvcHJlZml4ZXMuanNvbiIsIm5vZGVfbW9kdWxlcy91Y3VtLmpzL2dlbmVyYXRlZC91Y3VtLXBhcnNlci5qcyIsIm5vZGVfbW9kdWxlcy91Y3VtLmpzL2xpYi9oZWxwZXJzLmpzIiwibm9kZV9tb2R1bGVzL3VjdW0uanMvdWN1bS5qcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtBQ0FBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUM1MUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUNYQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FDcjhFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQ3o3Q0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FDdmtDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FDdkhBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUN0TEE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FDMUlBO0FBQ0E7QUFDQTtBQUNBOztBQ0hBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FDandCQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUN0REE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQzdUQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUMzRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUNqWUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQzVJQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQzlMQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQy9IQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQ2xPQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQzNDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQzdTQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQ3ZQQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FDbHJDQTtBQUNBOztBQ0RBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUMxQkE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FDMytDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUNuREE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSIsImZpbGUiOiJnZW5lcmF0ZWQuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlc0NvbnRlbnQiOlsiKGZ1bmN0aW9uIGUodCxuLHIpe2Z1bmN0aW9uIHMobyx1KXtpZighbltvXSl7aWYoIXRbb10pe3ZhciBhPXR5cGVvZiByZXF1aXJlPT1cImZ1bmN0aW9uXCImJnJlcXVpcmU7aWYoIXUmJmEpcmV0dXJuIGEobywhMCk7aWYoaSlyZXR1cm4gaShvLCEwKTt2YXIgZj1uZXcgRXJyb3IoXCJDYW5ub3QgZmluZCBtb2R1bGUgJ1wiK28rXCInXCIpO3Rocm93IGYuY29kZT1cIk1PRFVMRV9OT1RfRk9VTkRcIixmfXZhciBsPW5bb109e2V4cG9ydHM6e319O3Rbb11bMF0uY2FsbChsLmV4cG9ydHMsZnVuY3Rpb24oZSl7dmFyIG49dFtvXVsxXVtlXTtyZXR1cm4gcyhuP246ZSl9LGwsbC5leHBvcnRzLGUsdCxuLHIpfXJldHVybiBuW29dLmV4cG9ydHN9dmFyIGk9dHlwZW9mIHJlcXVpcmU9PVwiZnVuY3Rpb25cIiYmcmVxdWlyZTtmb3IodmFyIG89MDtvPHIubGVuZ3RoO28rKylzKHJbb10pO3JldHVybiBzfSkiLCJtb2R1bGUuZXhwb3J0cz17XG4gIFwiY2xhc3Nlc1wiOiB7XG4gICAgXCJmZXJ0aWxpemVyXCI6IFtcbiAgICAgIFwiMiw0LURcIlxuICAgIF0sXG4gICAgXCJlcXVpcG1lbnRcIjogW1xuICAgICAgXCJDaGFsbGVuZ2VyIFRyYWN0b3JcIixcbiAgICAgIFwiQ29vbGVyL3ZhblwiLFxuICAgICAgXCJGUiA2MDgwIEZIXCIsXG4gICAgICBcIkxhcmdlIFRyYWN0b3JcIixcbiAgICAgIFwiTWlkLXNpemUgVHJhY3RvclwiLFxuICAgICAgXCJTZW1pLVRyYWN0b3IgdHJhaWxlclwiLFxuICAgICAgXCJTbWFsbCBUcmFjdG9yXCIsXG4gICAgICBcIlN1cHBvcnQgVHJ1Y2tcIixcbiAgICAgIFwiVGFuZGVtIEF4bGUgVHJ1Y2tcIixcbiAgICAgIFwiVHJhY3RvciBhbmQgc3ByYXllclwiXG4gICAgXSxcbiAgICBcInBlc3RpY2lkZVwiOiBbXG4gICAgICBcIkdseXBob3NhdGVcIixcbiAgICAgIFwiR29hbCAyWExcIixcbiAgICAgIFwiVHJpZmx1cmFsaW5cIlxuICAgIF0sXG4gICAgXCJoZXJiaWNpZGVcIjogW1xuICAgICAgXCJoZXJiaWNpZGUgLSBtYW51YWxcIlxuICAgIF0sXG4gICAgXCJsYWJvclwiOiBbXG4gICAgICBcImhvZWluZ1wiLFxuICAgICAgXCJMYWJvcmVyXCJcbiAgICBdLFxuICAgIFwic2VlZFwiOiBbXG4gICAgICBcIlBvcGxhciBDdXR0aW5nXCJcbiAgICBdXG4gIH0sXG4gIFwibWF0ZXJpYWxzXCI6IFtcbiAgICB7XG4gICAgICBcIm5hbWVcIjogXCJFc3RpbWF0ZVwiLFxuICAgICAgXCJwcmljZVwiOiAxLFxuICAgICAgXCJ1bml0c1wiOiBcInVzJFwiLFxuICAgICAgXCJmaXhlZFwiOiB0cnVlLFxuICAgICAgXCJkZXNjcmlwdGlvblwiOiBcIlByb3ZpZGUgZml4ZWQgY29zdCBmb3IgY29tcGxleCBtYXRlcmlhbFwiLFxuICAgICAgXCJ0eXBlXCI6IFwic2ltcGxlXCJcbiAgICB9LFxuICAgIHtcbiAgICAgIFwibmFtZVwiOiBcIlRheGVzXCIsXG4gICAgICBcInByaWNlXCI6IDEsXG4gICAgICBcInVuaXRzXCI6IFwidXMkXCIsXG4gICAgICBcImZpeGVkXCI6IHRydWUsXG4gICAgICBcImRlc2NyaXB0aW9uXCI6IFwiUHJvdmlkZSBmaXhlZCBjb3N0IGZvciBjb21wbGV4IG1hdGVyaWFsXCIsXG4gICAgICBcInR5cGVcIjogXCJzaW1wbGVcIlxuICAgIH0sXG4gICAge1xuICAgICAgXCJuYW1lXCI6IFwiSW5zdXJhbmNlXCIsXG4gICAgICBcInByaWNlXCI6IDEsXG4gICAgICBcInVuaXRzXCI6IFwidXMkXCIsXG4gICAgICBcImZpeGVkXCI6IHRydWUsXG4gICAgICBcImRlc2NyaXB0aW9uXCI6IFwiUHJvdmlkZSBmaXhlZCBjb3N0IGZvciBjb21wbGV4IG1hdGVyaWFsXCIsXG4gICAgICBcInR5cGVcIjogXCJzaW1wbGVcIlxuICAgIH0sXG4gICAge1xuICAgICAgXCJuYW1lXCI6IFwiQ2FwaXRvbCBDb3N0IFJlY292ZXJcIixcbiAgICAgIFwicHJpY2VcIjogMSxcbiAgICAgIFwidW5pdHNcIjogXCJ1cyRcIixcbiAgICAgIFwiZml4ZWRcIjogdHJ1ZSxcbiAgICAgIFwiZGVzY3JpcHRpb25cIjogXCJQcm92aWRlIGZpeGVkIGNvc3QgZm9yIGNvbXBsZXggbWF0ZXJpYWxcIixcbiAgICAgIFwidHlwZVwiOiBcInNpbXBsZVwiXG4gICAgfSxcbiAgICB7XG4gICAgICBcImNsYXNzXCI6IFwiZmVydGlsaXplclwiLFxuICAgICAgXCJuYW1lXCI6IFwiMiw0LURcIixcbiAgICAgIFwidW5pdHNcIjogXCJ1cyQvW3F0X3VzXVwiLFxuICAgICAgXCJwcmljZVwiOiA1LFxuICAgICAgXCJ0eXBlXCI6IFwic2ltcGxlXCJcbiAgICB9LFxuICAgIHtcbiAgICAgIFwiY2xhc3NcIjogXCJwZXN0aWNpZGVcIixcbiAgICAgIFwibmFtZVwiOiBcIkdseXBob3NhdGVcIixcbiAgICAgIFwidW5pdHNcIjogXCJ1cyQvW3F0X3VzXVwiLFxuICAgICAgXCJwcmljZVwiOiA0LFxuICAgICAgXCJ0eXBlXCI6IFwic2ltcGxlXCIsXG4gICAgICBcImRlc2NyaXB0aW9uXCI6IFwiZm9vXCJcbiAgICB9LFxuICAgIHtcbiAgICAgIFwiY2xhc3NcIjogXCJwZXN0aWNpZGVcIixcbiAgICAgIFwibmFtZVwiOiBcIkdvYWwgMlhMXCIsXG4gICAgICBcInVuaXRzXCI6IFwidXMkL1txdF91c11cIixcbiAgICAgIFwicHJpY2VcIjogMzAsXG4gICAgICBcInR5cGVcIjogXCJzaW1wbGVcIlxuICAgIH0sXG4gICAge1xuICAgICAgXCJjbGFzc1wiOiBcImxhYm9yXCIsXG4gICAgICBcIm5hbWVcIjogXCJMYWJvcmVyXCIsXG4gICAgICBcInVuaXRzXCI6IFwidXMkL2hcIixcbiAgICAgIFwicHJpY2VcIjogMTcsXG4gICAgICBcInR5cGVcIjogXCJzaW1wbGVcIlxuICAgIH0sXG4gICAge1xuICAgICAgXCJkZXNjcmlwdGlvblwiOiBcIlBvcGxhciBjdXR0aW5nIGZvciBwbGFudGluZ1wiLFxuICAgICAgXCJjbGFzc1wiOiBcInNlZWRcIixcbiAgICAgIFwibmFtZVwiOiBcIlBvcGxhciBDdXR0aW5nXCIsXG4gICAgICBcInVuaXRzXCI6IFwidXMkLzFcIixcbiAgICAgIFwicHJpY2VcIjogMC4wOCxcbiAgICAgIFwidHlwZVwiOiBcInNpbXBsZVwiXG4gICAgfSxcbiAgICB7XG4gICAgICBcImNsYXNzXCI6IFwicGVzdGljaWRlXCIsXG4gICAgICBcIm5hbWVcIjogXCJUcmlmbHVyYWxpblwiLFxuICAgICAgXCJ1bml0c1wiOiBcInVzJC9bcXRfdXNdXCIsXG4gICAgICBcInByaWNlXCI6IDcuNSxcbiAgICAgIFwidHlwZVwiOiBcInNpbXBsZVwiXG4gICAgfSxcbiAgICB7XG4gICAgICBcIm5hbWVcIjogXCJDaGFsbGVuZ2VyIFRyYWN0b3ItLUNhcGl0b2wgQ29zdFwiLFxuICAgICAgXCJwcmljZVwiOiA5MCxcbiAgICAgIFwidW5pdHNcIjogXCJ1cyQvaFwiLFxuICAgICAgXCJ0eXBlXCI6IFwic2ltcGxlXCJcbiAgICB9LFxuICAgIHtcbiAgICAgIFwibmFtZVwiOiBcIlNlbWktVHJhY3RvciB0cmFpbGVyLS1DYXBpdG9sIENvc3RcIixcbiAgICAgIFwicHJpY2VcIjogOTAsXG4gICAgICBcInVuaXRzXCI6IFwidXMkL2hcIixcbiAgICAgIFwidHlwZVwiOiBcInNpbXBsZVwiXG4gICAgfSxcbiAgICB7XG4gICAgICBcIm5hbWVcIjogXCJGUiA2MDgwIEZILS1DYXBpdG9sIENvc3RcIixcbiAgICAgIFwicHJpY2VcIjogOTAsXG4gICAgICBcInVuaXRzXCI6IFwidXMkL2hcIixcbiAgICAgIFwidHlwZVwiOiBcInNpbXBsZVwiXG4gICAgfSxcbiAgICB7XG4gICAgICBcIm5hbWVcIjogXCJUYW5kZW0gQXhsZSBUcnVjay0tQ2FwaXRvbCBDb3N0XCIsXG4gICAgICBcInByaWNlXCI6IDkwLFxuICAgICAgXCJ1bml0c1wiOiBcInVzJC9oXCIsXG4gICAgICBcInR5cGVcIjogXCJzaW1wbGVcIlxuICAgIH0sXG4gICAge1xuICAgICAgXCJuYW1lXCI6IFwiQ29vbGVyL3Zhbi0tQ2FwaXRvbCBDb3N0XCIsXG4gICAgICBcInByaWNlXCI6IDE1LFxuICAgICAgXCJ1bml0c1wiOiBcInVzJC9oXCIsXG4gICAgICBcInR5cGVcIjogXCJzaW1wbGVcIlxuICAgIH0sXG4gICAge1xuICAgICAgXCJuYW1lXCI6IFwiQ2hhbGxlbmdlciBUcmFjdG9yLS1MYWJvclwiLFxuICAgICAgXCJwcmljZVwiOiAzNSxcbiAgICAgIFwidW5pdHNcIjogXCJ1cyQvaFwiLFxuICAgICAgXCJ0eXBlXCI6IFwic2ltcGxlXCJcbiAgICB9LFxuICAgIHtcbiAgICAgIFwibmFtZVwiOiBcIkZSIDYwODAgRkgtLUxhYm9yXCIsXG4gICAgICBcInByaWNlXCI6IDM1LFxuICAgICAgXCJ1bml0c1wiOiBcInVzJC9oXCIsXG4gICAgICBcInR5cGVcIjogXCJzaW1wbGVcIlxuICAgIH0sXG4gICAge1xuICAgICAgXCJuYW1lXCI6IFwiVGFuZGVtIEF4bGUgVHJ1Y2stLUxhYm9yXCIsXG4gICAgICBcInByaWNlXCI6IDM1LFxuICAgICAgXCJ1bml0c1wiOiBcInVzJC9oXCIsXG4gICAgICBcInR5cGVcIjogXCJzaW1wbGVcIlxuICAgIH0sXG4gICAge1xuICAgICAgXCJuYW1lXCI6IFwiU2VtaS1UcmFjdG9yIHRyYWlsZXItLUxhYm9yXCIsXG4gICAgICBcInByaWNlXCI6IDM1LFxuICAgICAgXCJ1bml0c1wiOiBcInVzJC9oXCIsXG4gICAgICBcInR5cGVcIjogXCJzaW1wbGVcIlxuICAgIH0sXG4gICAge1xuICAgICAgXCJuYW1lXCI6IFwiQ29vbGVyL3Zhbi0tTGFib3JcIixcbiAgICAgIFwicHJpY2VcIjogMTAsXG4gICAgICBcInVuaXRzXCI6IFwidXMkL2hcIixcbiAgICAgIFwidHlwZVwiOiBcInNpbXBsZVwiXG4gICAgfSxcbiAgICB7XG4gICAgICBcIm5hbWVcIjogXCJFcXVpcG1lbnQgRnVlbFwiLFxuICAgICAgXCJwcmljZVwiOiAyLjgxLFxuICAgICAgXCJ1bml0c1wiOiBcInVzJC9bZ2FsX3VzXVwiLFxuICAgICAgXCJ0eXBlXCI6IFwic2ltcGxlXCJcbiAgICB9LFxuICAgIHtcbiAgICAgIFwibmFtZVwiOiBcIlN1cHBvcnQgVHJ1Y2stLUNhcGl0b2wgQ29zdFwiLFxuICAgICAgXCJwcmljZVwiOiAyNSxcbiAgICAgIFwidW5pdHNcIjogXCJ1cyQvaFwiLFxuICAgICAgXCJ0eXBlXCI6IFwic2ltcGxlXCJcbiAgICB9LFxuICAgIHtcbiAgICAgIFwibmFtZVwiOiBcIlN1cHBvcnQgVHJ1Y2stLUxhYm9yXCIsXG4gICAgICBcInByaWNlXCI6IDMwLFxuICAgICAgXCJ1bml0c1wiOiBcInVzJC9oXCIsXG4gICAgICBcInR5cGVcIjogXCJzaW1wbGVcIlxuICAgIH0sXG4gICAge1xuICAgICAgXCJ0eXBlXCI6IFwic2ltcGxlXCIsXG4gICAgICBcIm5hbWVcIjogXCIxMS01Mi0wXCIsXG4gICAgICBcInVuaXRzXCI6IFwidXMkL1tsYl9hdl1cIixcbiAgICAgIFwiZGVzY3JpcHRpb25cIjogXCJcIixcbiAgICAgIFwicHJpY2VcIjogMC4zNyxcbiAgICAgIFwiY2xhc3NcIjogXCJmZXJ0aWxpemVyXCJcbiAgICB9LFxuICAgIHtcbiAgICAgIFwidHlwZVwiOiBcInNpbXBsZVwiLFxuICAgICAgXCJuYW1lXCI6IFwiR3JvdW5kIEFwcGxpY2F0aW9uXCIsXG4gICAgICBcInVuaXRzXCI6IFwidXMkL1thY3JfdXNdXCIsXG4gICAgICBcImRlc2NyaXB0aW9uXCI6IFwiXCIsXG4gICAgICBcInByaWNlXCI6IDEwLjUsXG4gICAgICBcImNsYXNzXCI6IFwib3RoZXJcIlxuICAgIH0sXG4gICAge1xuICAgICAgXCJ0eXBlXCI6IFwic2ltcGxlXCIsXG4gICAgICBcIm5hbWVcIjogXCJSb3VuZHVwIFBvd2VyTWF4XCIsXG4gICAgICBcInVuaXRzXCI6IFwidXMkL1twdF91c11cIixcbiAgICAgIFwiZGVzY3JpcHRpb25cIjogXCJcIixcbiAgICAgIFwicHJpY2VcIjogMi43NSxcbiAgICAgIFwiY2xhc3NcIjogXCJoZXJiaWNpZGVcIlxuICAgIH0sXG4gICAge1xuICAgICAgXCJ0eXBlXCI6IFwic2ltcGxlXCIsXG4gICAgICBcIm5hbWVcIjogXCJWZWxwYXIgTFwiLFxuICAgICAgXCJ1bml0c1wiOiBcInVzJC9bcHRfdXNdXCIsXG4gICAgICBcImRlc2NyaXB0aW9uXCI6IFwiXCIsXG4gICAgICBcInByaWNlXCI6IDE0LjQxLFxuICAgICAgXCJjbGFzc1wiOiBcImhlcmJpY2lkZVwiXG4gICAgfSxcbiAgICB7XG4gICAgICBcInR5cGVcIjogXCJzaW1wbGVcIixcbiAgICAgIFwibmFtZVwiOiBcIldhcnJpb3IgSUlcIixcbiAgICAgIFwidW5pdHNcIjogXCJ1cyQvW2Zvel91c11cIixcbiAgICAgIFwiZGVzY3JpcHRpb25cIjogXCJcIixcbiAgICAgIFwicHJpY2VcIjogNS4yNSxcbiAgICAgIFwiY2xhc3NcIjogXCJwZXN0aWNpZGVcIlxuICAgIH0sXG4gICAge1xuICAgICAgXCJ0eXBlXCI6IFwic2ltcGxlXCIsXG4gICAgICBcIm5hbWVcIjogXCJDb3JhZ2VuXCIsXG4gICAgICBcInVuaXRzXCI6IFwidXMkL1tmb3pfdXNdXCIsXG4gICAgICBcImRlc2NyaXB0aW9uXCI6IFwiXCIsXG4gICAgICBcInByaWNlXCI6IDEwLjI1LFxuICAgICAgXCJjbGFzc1wiOiBcInBlc3RpY2lkZVwiXG4gICAgfSxcbiAgICB7XG4gICAgICBcInR5cGVcIjogXCJzaW1wbGVcIixcbiAgICAgIFwibmFtZVwiOiBcIkJlbHQgU0NcIixcbiAgICAgIFwidW5pdHNcIjogXCJ1cyQvW2Zvel91c11cIixcbiAgICAgIFwiZGVzY3JpcHRpb25cIjogXCJcIixcbiAgICAgIFwicHJpY2VcIjogOS40LFxuICAgICAgXCJjbGFzc1wiOiBcInBlc3RpY2lkZVwiXG4gICAgfSxcbiAgICB7XG4gICAgICBcInR5cGVcIjogXCJzaW1wbGVcIixcbiAgICAgIFwibmFtZVwiOiBcIldhdGVyLUFsZmFsZmEtUHVtcGVkXCIsXG4gICAgICBcInVuaXRzXCI6IFwidXMkL1thY3JfdXNdLltpbl91c11cIixcbiAgICAgIFwiZGVzY3JpcHRpb25cIjogXCJcIixcbiAgICAgIFwicHJpY2VcIjogNy41LFxuICAgICAgXCJjbGFzc1wiOiBcIndhdGVyXCJcbiAgICB9LFxuICAgIHtcbiAgICAgIFwidHlwZVwiOiBcInNpbXBsZVwiLFxuICAgICAgXCJuYW1lXCI6IFwiR2FzXCIsXG4gICAgICBcInVuaXRzXCI6IFwidXMkL1tnYWxfdXNdXCIsXG4gICAgICBcImRlc2NyaXB0aW9uXCI6IFwiXCIsXG4gICAgICBcInByaWNlXCI6IDMuNzksXG4gICAgICBcImNsYXNzXCI6IFwiZXF1aXBtZW50XCJcbiAgICB9LFxuICAgIHtcbiAgICAgIFwiY2xhc3NcIjogXCJvdGhlclwiLFxuICAgICAgXCJuYW1lXCI6IFwiQVRWLS1DYXBpdGFsIFJlY292ZXJ5XCIsXG4gICAgICBcInVuaXRzXCI6IFwidXMkL2hcIixcbiAgICAgIFwicHJpY2VcIjogMS44OSxcbiAgICAgIFwidHlwZVwiOiBcInNpbXBsZVwiXG4gICAgfSxcbiAgICB7XG4gICAgICBcImNsYXNzXCI6IFwiaW5zdXJhbmNlXCIsXG4gICAgICBcIm5hbWVcIjogXCJBVFYtLWluc3VyYW5jZVwiLFxuICAgICAgXCJ1bml0c1wiOiBcInVzJC9oXCIsXG4gICAgICBcInByaWNlXCI6IDAuMDEsXG4gICAgICBcInR5cGVcIjogXCJzaW1wbGVcIlxuICAgIH0sXG4gICAge1xuICAgICAgXCJjbGFzc1wiOiBcIm90aGVyXCIsXG4gICAgICBcIm5hbWVcIjogXCJBVFYtLVRheGVzXCIsXG4gICAgICBcInVuaXRzXCI6IFwidXMkL2hcIixcbiAgICAgIFwicHJpY2VcIjogMC4wOSxcbiAgICAgIFwidHlwZVwiOiBcInNpbXBsZVwiXG4gICAgfSxcbiAgICB7XG4gICAgICBcImNsYXNzXCI6IFwib3RoZXJcIixcbiAgICAgIFwibmFtZVwiOiBcIkFUVi0tTHViZSAmIFJlcGFpcnNcIixcbiAgICAgIFwidW5pdHNcIjogXCJ1cyQvaFwiLFxuICAgICAgXCJwcmljZVwiOiAxLjIsXG4gICAgICBcInR5cGVcIjogXCJzaW1wbGVcIlxuICAgIH0sXG4gICAge1xuICAgICAgXCJjbGFzc1wiOiBcImVxdWlwbWVudFwiLFxuICAgICAgXCJuYW1lXCI6IFwiQVRWIFNwcmF5ZXIgU3lzdGVtLS1MdWJlICYgUmVwYWlyc1wiLFxuICAgICAgXCJ1bml0c1wiOiBcInVzJC9oXCIsXG4gICAgICBcInByaWNlXCI6IDIuNjEsXG4gICAgICBcInR5cGVcIjogXCJzaW1wbGVcIlxuICAgIH0sXG4gICAge1xuICAgICAgXCJjbGFzc1wiOiBcImVxdWlwbWVudFwiLFxuICAgICAgXCJuYW1lXCI6IFwiQVRWIFNwcmF5ZXIgU3lzdGVtLS1UYXhlc1wiLFxuICAgICAgXCJ1bml0c1wiOiBcInVzJC9oXCIsXG4gICAgICBcInByaWNlXCI6IDAuMjMsXG4gICAgICBcInR5cGVcIjogXCJzaW1wbGVcIlxuICAgIH0sXG4gICAge1xuICAgICAgXCJjbGFzc1wiOiBcImluc3VyYW5jZVwiLFxuICAgICAgXCJuYW1lXCI6IFwiQVRWIFNwcmF5ZXIgU3lzdGVtLS1pbnN1cmFuY2VcIixcbiAgICAgIFwidW5pdHNcIjogXCJ1cyQvaFwiLFxuICAgICAgXCJwcmljZVwiOiAwLjAyLFxuICAgICAgXCJ0eXBlXCI6IFwic2ltcGxlXCJcbiAgICB9LFxuICAgIHtcbiAgICAgIFwiY2xhc3NcIjogXCJvdGhlclwiLFxuICAgICAgXCJuYW1lXCI6IFwiQVRWIFNwcmF5ZXIgU3lzdGVtLS1DYXBpdGFsIFJlY292ZXJ5XCIsXG4gICAgICBcInVuaXRzXCI6IFwidXMkL2hcIixcbiAgICAgIFwicHJpY2VcIjogNC40MSxcbiAgICAgIFwidHlwZVwiOiBcInNpbXBsZVwiXG4gICAgfSxcbiAgICB7XG4gICAgICBcInR5cGVcIjogXCJzaW1wbGVcIixcbiAgICAgIFwibmFtZVwiOiBcIkVxdWlwbWVudCBPcGVyYXRvciBMYWJvclwiLFxuICAgICAgXCJ1bml0c1wiOiBcInVzJC9oXCIsXG4gICAgICBcImRlc2NyaXB0aW9uXCI6IFwiXCIsXG4gICAgICBcInByaWNlXCI6IDE3LFxuICAgICAgXCJjbGFzc1wiOiBcImxhYm9yXCJcbiAgICB9LFxuICAgIHtcbiAgICAgIFwiY2xhc3NcIjogXCJlcXVpcG1lbnRcIixcbiAgICAgIFwibmFtZVwiOiBcIkRpdGNoZXIgLSBWLS1DYXBpdGFsIFJlY292ZXJ5XCIsXG4gICAgICBcInVuaXRzXCI6IFwidXMkL2hcIixcbiAgICAgIFwicHJpY2VcIjogMy4xOSxcbiAgICAgIFwidHlwZVwiOiBcInNpbXBsZVwiXG4gICAgfSxcbiAgICB7XG4gICAgICBcImNsYXNzXCI6IFwib3RoZXJcIixcbiAgICAgIFwibmFtZVwiOiBcIjIwNUhQIENyYXdsZXItLUNhcGl0YWwgUmVjb3ZlcnlcIixcbiAgICAgIFwidW5pdHNcIjogXCJ1cyQvaFwiLFxuICAgICAgXCJwcmljZVwiOiA5LjEyLFxuICAgICAgXCJ0eXBlXCI6IFwic2ltcGxlXCJcbiAgICB9LFxuICAgIHtcbiAgICAgIFwiY2xhc3NcIjogXCJpbnN1cmFuY2VcIixcbiAgICAgIFwibmFtZVwiOiBcIjIwNUhQIENyYXdsZXItLWluc3VyYW5jZVwiLFxuICAgICAgXCJ1bml0c1wiOiBcInVzJC9oXCIsXG4gICAgICBcInByaWNlXCI6IDAuMDUsXG4gICAgICBcInR5cGVcIjogXCJzaW1wbGVcIlxuICAgIH0sXG4gICAge1xuICAgICAgXCJjbGFzc1wiOiBcIm90aGVyXCIsXG4gICAgICBcIm5hbWVcIjogXCIyMDVIUCBDcmF3bGVyLS1UYXhlc1wiLFxuICAgICAgXCJ1bml0c1wiOiBcInVzJC9oXCIsXG4gICAgICBcInByaWNlXCI6IDAuNTcsXG4gICAgICBcInR5cGVcIjogXCJzaW1wbGVcIlxuICAgIH0sXG4gICAge1xuICAgICAgXCJjbGFzc1wiOiBcImVxdWlwbWVudFwiLFxuICAgICAgXCJuYW1lXCI6IFwiMjA1SFAgQ3Jhd2xlci0tTHViZSAmIFJlcGFpcnNcIixcbiAgICAgIFwidW5pdHNcIjogXCJ1cyQvaFwiLFxuICAgICAgXCJwcmljZVwiOiAxMy4xMyxcbiAgICAgIFwidHlwZVwiOiBcInNpbXBsZVwiXG4gICAgfSxcbiAgICB7XG4gICAgICBcImNsYXNzXCI6IFwiaW5zdXJhbmNlXCIsXG4gICAgICBcIm5hbWVcIjogXCJEaXRjaGVyIC0gVi0taW5zdXJhbmNlXCIsXG4gICAgICBcInVuaXRzXCI6IFwidXMkL2hcIixcbiAgICAgIFwicHJpY2VcIjogMC4wMSxcbiAgICAgIFwidHlwZVwiOiBcInNpbXBsZVwiXG4gICAgfSxcbiAgICB7XG4gICAgICBcImNsYXNzXCI6IFwib3RoZXJcIixcbiAgICAgIFwibmFtZVwiOiBcIkRpdGNoZXIgLSBWLS1UYXhlc1wiLFxuICAgICAgXCJ1bml0c1wiOiBcInVzJC9oXCIsXG4gICAgICBcInByaWNlXCI6IDAuMTgsXG4gICAgICBcInR5cGVcIjogXCJzaW1wbGVcIlxuICAgIH0sXG4gICAge1xuICAgICAgXCJjbGFzc1wiOiBcImVxdWlwbWVudFwiLFxuICAgICAgXCJuYW1lXCI6IFwiRGl0Y2hlciAtIFYtLUx1YmUgJiBSZXBhaXJzXCIsXG4gICAgICBcInVuaXRzXCI6IFwidXMkL2hcIixcbiAgICAgIFwicHJpY2VcIjogMi40LFxuICAgICAgXCJ0eXBlXCI6IFwic2ltcGxlXCJcbiAgICB9LFxuICAgIHtcbiAgICAgIFwiY2xhc3NcIjogXCJlcXVpcG1lbnRcIixcbiAgICAgIFwibmFtZVwiOiBcIjE1MEhQNFdEIFRyYWN0b3ItLUNhcGl0YWwgUmVjb3ZlcnlcIixcbiAgICAgIFwidW5pdHNcIjogXCJ1cyQvaFwiLFxuICAgICAgXCJwcmljZVwiOiA2LjQxLFxuICAgICAgXCJ0eXBlXCI6IFwic2ltcGxlXCJcbiAgICB9LFxuICAgIHtcbiAgICAgIFwiY2xhc3NcIjogXCJpbnN1cmFuY2VcIixcbiAgICAgIFwibmFtZVwiOiBcIjE1MEhQNFdEIFRyYWN0b3ItLWluc3VyYW5jZVwiLFxuICAgICAgXCJ1bml0c1wiOiBcInVzJC9oXCIsXG4gICAgICBcInByaWNlXCI6IDAuMDMsXG4gICAgICBcInR5cGVcIjogXCJzaW1wbGVcIlxuICAgIH0sXG4gICAge1xuICAgICAgXCJjbGFzc1wiOiBcIm90aGVyXCIsXG4gICAgICBcIm5hbWVcIjogXCIxNTBIUDRXRCBUcmFjdG9yLS1UYXhlc1wiLFxuICAgICAgXCJ1bml0c1wiOiBcInVzJC9oXCIsXG4gICAgICBcInByaWNlXCI6IDAuNCxcbiAgICAgIFwidHlwZVwiOiBcInNpbXBsZVwiXG4gICAgfSxcbiAgICB7XG4gICAgICBcImNsYXNzXCI6IFwiZXF1aXBtZW50XCIsXG4gICAgICBcIm5hbWVcIjogXCIxNTBIUDRXRCBUcmFjdG9yLS1MdWJlICYgUmVwYWlyc1wiLFxuICAgICAgXCJ1bml0c1wiOiBcInVzJC9oXCIsXG4gICAgICBcInByaWNlXCI6IDkuNDMsXG4gICAgICBcInR5cGVcIjogXCJzaW1wbGVcIlxuICAgIH0sXG4gICAge1xuICAgICAgXCJjbGFzc1wiOiBcImVxdWlwbWVudFwiLFxuICAgICAgXCJuYW1lXCI6IFwiUmVhciBCbGFkZSAtIDgnLS1DYXBpdGFsIFJlY292ZXJ5XCIsXG4gICAgICBcInVuaXRzXCI6IFwidXMkL2hcIixcbiAgICAgIFwicHJpY2VcIjogMi4xNixcbiAgICAgIFwidHlwZVwiOiBcInNpbXBsZVwiXG4gICAgfSxcbiAgICB7XG4gICAgICBcImNsYXNzXCI6IFwiaW5zdXJhbmNlXCIsXG4gICAgICBcIm5hbWVcIjogXCJSZWFyIEJsYWRlIC0gOCctLWluc3VyYW5jZVwiLFxuICAgICAgXCJ1bml0c1wiOiBcInVzJC9oXCIsXG4gICAgICBcInByaWNlXCI6IDAuMDEsXG4gICAgICBcInR5cGVcIjogXCJzaW1wbGVcIlxuICAgIH0sXG4gICAge1xuICAgICAgXCJjbGFzc1wiOiBcIm90aGVyXCIsXG4gICAgICBcIm5hbWVcIjogXCJSZWFyIEJsYWRlIC0gOCctLVRheGVzXCIsXG4gICAgICBcInVuaXRzXCI6IFwidXMkL2hcIixcbiAgICAgIFwicHJpY2VcIjogMC4xMyxcbiAgICAgIFwidHlwZVwiOiBcInNpbXBsZVwiXG4gICAgfSxcbiAgICB7XG4gICAgICBcImNsYXNzXCI6IFwiZXF1aXBtZW50XCIsXG4gICAgICBcIm5hbWVcIjogXCJSZWFyIEJsYWRlIC0gOCctLUx1YmUgJiBSZXBhaXJzXCIsXG4gICAgICBcInVuaXRzXCI6IFwidXMkL2hcIixcbiAgICAgIFwicHJpY2VcIjogMS4yMSxcbiAgICAgIFwidHlwZVwiOiBcInNpbXBsZVwiXG4gICAgfSxcbiAgICB7XG4gICAgICBcInR5cGVcIjogXCJzaW1wbGVcIixcbiAgICAgIFwibmFtZVwiOiBcIklycmlnYXRpb24gTGFib3IgXCIsXG4gICAgICBcInVuaXRzXCI6IFwidXMkL2hcIixcbiAgICAgIFwiZGVzY3JpcHRpb25cIjogXCJcIixcbiAgICAgIFwicHJpY2VcIjogMjcsXG4gICAgICBcImNsYXNzXCI6IFwibGFib3JcIlxuICAgIH0sXG4gICAge1xuICAgICAgXCJjbGFzc1wiOiBcImVxdWlwbWVudFwiLFxuICAgICAgXCJuYW1lXCI6IFwiUGlja3VwIDEvMiBUb24tLUNhcGl0YWwgUmVjb3ZlcnlcIixcbiAgICAgIFwidW5pdHNcIjogXCJ1cyQvaFwiLFxuICAgICAgXCJwcmljZVwiOiA2LjIxLFxuICAgICAgXCJ0eXBlXCI6IFwic2ltcGxlXCJcbiAgICB9LFxuICAgIHtcbiAgICAgIFwiY2xhc3NcIjogXCJpbnN1cmFuY2VcIixcbiAgICAgIFwibmFtZVwiOiBcIlBpY2t1cCAxLzIgVG9uLS1pbnN1cmFuY2VcIixcbiAgICAgIFwidW5pdHNcIjogXCJ1cyQvaFwiLFxuICAgICAgXCJwcmljZVwiOiAwLjAzLFxuICAgICAgXCJ0eXBlXCI6IFwic2ltcGxlXCJcbiAgICB9LFxuICAgIHtcbiAgICAgIFwiY2xhc3NcIjogXCJvdGhlclwiLFxuICAgICAgXCJuYW1lXCI6IFwiUGlja3VwIDEvMiBUb24tLVRheGVzXCIsXG4gICAgICBcInVuaXRzXCI6IFwidXMkL2hcIixcbiAgICAgIFwicHJpY2VcIjogMC4zLFxuICAgICAgXCJ0eXBlXCI6IFwic2ltcGxlXCJcbiAgICB9LFxuICAgIHtcbiAgICAgIFwiY2xhc3NcIjogXCJlcXVpcG1lbnRcIixcbiAgICAgIFwibmFtZVwiOiBcIlBpY2t1cCAxLzIgVG9uLS1MdWJlICYgUmVwYWlyc1wiLFxuICAgICAgXCJ1bml0c1wiOiBcInVzJC9oXCIsXG4gICAgICBcInByaWNlXCI6IDQuMTgsXG4gICAgICBcInR5cGVcIjogXCJzaW1wbGVcIlxuICAgIH0sXG4gICAge1xuICAgICAgXCJjbGFzc1wiOiBcImVxdWlwbWVudFwiLFxuICAgICAgXCJuYW1lXCI6IFwiU3dhdGhlciAxNictLUNhcGl0YWwgUmVjb3ZlcnlcIixcbiAgICAgIFwidW5pdHNcIjogXCJ1cyQvaFwiLFxuICAgICAgXCJwcmljZVwiOiAzMy42NixcbiAgICAgIFwidHlwZVwiOiBcInNpbXBsZVwiXG4gICAgfSxcbiAgICB7XG4gICAgICBcImNsYXNzXCI6IFwiaW5zdXJhbmNlXCIsXG4gICAgICBcIm5hbWVcIjogXCJTd2F0aGVyIDE2Jy0tSW5zdXJhbmNlXCIsXG4gICAgICBcInVuaXRzXCI6IFwidXMkL2hcIixcbiAgICAgIFwicHJpY2VcIjogMC4xNSxcbiAgICAgIFwidHlwZVwiOiBcInNpbXBsZVwiXG4gICAgfSxcbiAgICB7XG4gICAgICBcImNsYXNzXCI6IFwiaW5zdXJhbmNlXCIsXG4gICAgICBcIm5hbWVcIjogXCJTd2F0aGVyIDE2Jy0tVGF4ZXNcIixcbiAgICAgIFwidW5pdHNcIjogXCJ1cyQvaFwiLFxuICAgICAgXCJwcmljZVwiOiAxLjc0LFxuICAgICAgXCJ0eXBlXCI6IFwic2ltcGxlXCJcbiAgICB9LFxuICAgIHtcbiAgICAgIFwiY2xhc3NcIjogXCJlcXVpcG1lbnRcIixcbiAgICAgIFwibmFtZVwiOiBcIlN3YXRoZXIgMTYnLS1MdWJlICYgUmVwYWlyc1wiLFxuICAgICAgXCJ1bml0c1wiOiBcInVzJC9oXCIsXG4gICAgICBcInByaWNlXCI6IDE5LjQyLFxuICAgICAgXCJ0eXBlXCI6IFwic2ltcGxlXCJcbiAgICB9LFxuICAgIHtcbiAgICAgIFwiY2xhc3NcIjogXCJlcXVpcG1lbnRcIixcbiAgICAgIFwibmFtZVwiOiBcIlBpY2t1cCAzLzQgVG9uLS1DYXBpdGFsIFJlY292ZXJ5XCIsXG4gICAgICBcInVuaXRzXCI6IFwidXMkL2hcIixcbiAgICAgIFwicHJpY2VcIjogNy4xLFxuICAgICAgXCJ0eXBlXCI6IFwic2ltcGxlXCJcbiAgICB9LFxuICAgIHtcbiAgICAgIFwiY2xhc3NcIjogXCJpbnN1cmFuY2VcIixcbiAgICAgIFwibmFtZVwiOiBcIlBpY2t1cCAzLzQgVG9uLS1pbnN1cmFuY2VcIixcbiAgICAgIFwidW5pdHNcIjogXCJ1cyQvaFwiLFxuICAgICAgXCJwcmljZVwiOiAwLjAzLFxuICAgICAgXCJ0eXBlXCI6IFwic2ltcGxlXCJcbiAgICB9LFxuICAgIHtcbiAgICAgIFwiY2xhc3NcIjogXCJvdGhlclwiLFxuICAgICAgXCJuYW1lXCI6IFwiUGlja3VwIDMvNCBUb24tLVRheGVzXCIsXG4gICAgICBcInVuaXRzXCI6IFwidXMkL2hcIixcbiAgICAgIFwicHJpY2VcIjogMC4zNSxcbiAgICAgIFwidHlwZVwiOiBcInNpbXBsZVwiXG4gICAgfSxcbiAgICB7XG4gICAgICBcImNsYXNzXCI6IFwiZXF1aXBtZW50XCIsXG4gICAgICBcIm5hbWVcIjogXCJQaWNrdXAgMy80IFRvbi0tTHViZSAmIFJlcGFpcnNcIixcbiAgICAgIFwidW5pdHNcIjogXCJ1cyQvaFwiLFxuICAgICAgXCJwcmljZVwiOiA0LjA5LFxuICAgICAgXCJ0eXBlXCI6IFwic2ltcGxlXCJcbiAgICB9LFxuICAgIHtcbiAgICAgIFwiY2xhc3NcIjogXCJlcXVpcG1lbnRcIixcbiAgICAgIFwibmFtZVwiOiBcIlNlcnZpY2UgVHJ1Y2stLUNhcGl0YWwgUmVjb3ZlcnlcIixcbiAgICAgIFwidW5pdHNcIjogXCJ1cyQvaFwiLFxuICAgICAgXCJwcmljZVwiOiA0LjE3LFxuICAgICAgXCJ0eXBlXCI6IFwic2ltcGxlXCJcbiAgICB9LFxuICAgIHtcbiAgICAgIFwiY2xhc3NcIjogXCJpbnN1cmFuY2VcIixcbiAgICAgIFwibmFtZVwiOiBcIlNlcnZpY2UgVHJ1Y2stLWluc3VyYW5jZVwiLFxuICAgICAgXCJ1bml0c1wiOiBcInVzJC9oXCIsXG4gICAgICBcInByaWNlXCI6IDAuMDIsXG4gICAgICBcInR5cGVcIjogXCJzaW1wbGVcIlxuICAgIH0sXG4gICAge1xuICAgICAgXCJjbGFzc1wiOiBcIm90aGVyXCIsXG4gICAgICBcIm5hbWVcIjogXCJTZXJ2aWNlIFRydWNrLS1UYXhlc1wiLFxuICAgICAgXCJ1bml0c1wiOiBcInVzJC9oXCIsXG4gICAgICBcInByaWNlXCI6IDAuMixcbiAgICAgIFwidHlwZVwiOiBcInNpbXBsZVwiXG4gICAgfSxcbiAgICB7XG4gICAgICBcImNsYXNzXCI6IFwiZXF1aXBtZW50XCIsXG4gICAgICBcIm5hbWVcIjogXCJTZXJ2aWNlIFRydWNrLS1MdWJlICYgUmVwYWlyc1wiLFxuICAgICAgXCJ1bml0c1wiOiBcInVzJC9oXCIsXG4gICAgICBcInByaWNlXCI6IDMuMTcsXG4gICAgICBcInR5cGVcIjogXCJzaW1wbGVcIlxuICAgIH0sXG4gICAge1xuICAgICAgXCJjbGFzc1wiOiBcImVxdWlwbWVudFwiLFxuICAgICAgXCJuYW1lXCI6IFwiMzdIUCA0V0QgVHJhY3Rvci0tQ2FwaXRhbCBSZWNvdmVyeVwiLFxuICAgICAgXCJ1bml0c1wiOiBcInVzJC9oXCIsXG4gICAgICBcInByaWNlXCI6IDAuNzcsXG4gICAgICBcInR5cGVcIjogXCJzaW1wbGVcIlxuICAgIH0sXG4gICAge1xuICAgICAgXCJjbGFzc1wiOiBcIm90aGVyXCIsXG4gICAgICBcIm5hbWVcIjogXCIzN0hQIDRXRCBUcmFjdG9yLS1UYXhlc1wiLFxuICAgICAgXCJ1bml0c1wiOiBcInVzJC9oXCIsXG4gICAgICBcInByaWNlXCI6IDAuMDUsXG4gICAgICBcInR5cGVcIjogXCJzaW1wbGVcIlxuICAgIH0sXG4gICAge1xuICAgICAgXCJjbGFzc1wiOiBcImVxdWlwbWVudFwiLFxuICAgICAgXCJuYW1lXCI6IFwiMzdIUCA0V0QgVHJhY3Rvci0tTHViZSAmIFJlcGFpclwiLFxuICAgICAgXCJ1bml0c1wiOiBcInVzJC9oXCIsXG4gICAgICBcInByaWNlXCI6IDEuNTgsXG4gICAgICBcInR5cGVcIjogXCJzaW1wbGVcIlxuICAgIH0sXG4gICAge1xuICAgICAgXCJjbGFzc1wiOiBcImVxdWlwbWVudFwiLFxuICAgICAgXCJuYW1lXCI6IFwiUmFrZSAyMCctLUNhcGl0YWwgUmVjb3ZlcnlcIixcbiAgICAgIFwidW5pdHNcIjogXCJ1cyQvaFwiLFxuICAgICAgXCJwcmljZVwiOiA4Ljg3LFxuICAgICAgXCJ0eXBlXCI6IFwic2ltcGxlXCJcbiAgICB9LFxuICAgIHtcbiAgICAgIFwiY2xhc3NcIjogXCJpbnN1cmFuY2VcIixcbiAgICAgIFwibmFtZVwiOiBcIlJha2UgMjAnLS1pbnN1cmFuY2VcIixcbiAgICAgIFwidW5pdHNcIjogXCJ1cyQvaFwiLFxuICAgICAgXCJwcmljZVwiOiAwLjA0LFxuICAgICAgXCJ0eXBlXCI6IFwic2ltcGxlXCJcbiAgICB9LFxuICAgIHtcbiAgICAgIFwiY2xhc3NcIjogXCJvdGhlclwiLFxuICAgICAgXCJuYW1lXCI6IFwiUmFrZSAyMCctLVRheGVzXCIsXG4gICAgICBcInVuaXRzXCI6IFwidXMkL2hcIixcbiAgICAgIFwicHJpY2VcIjogMC40NixcbiAgICAgIFwidHlwZVwiOiBcInNpbXBsZVwiXG4gICAgfSxcbiAgICB7XG4gICAgICBcImNsYXNzXCI6IFwiZXF1aXBtZW50XCIsXG4gICAgICBcIm5hbWVcIjogXCJSYWtlIDIwJy0tTHViZSAmIFJlcGFpcnNcIixcbiAgICAgIFwidW5pdHNcIjogXCJ1cyQvaFwiLFxuICAgICAgXCJwcmljZVwiOiA0LjYsXG4gICAgICBcInR5cGVcIjogXCJzaW1wbGVcIlxuICAgIH0sXG4gICAge1xuICAgICAgXCJjbGFzc1wiOiBcImVxdWlwbWVudFwiLFxuICAgICAgXCJuYW1lXCI6IFwiQmFsZXIxMzAwIyBQVE8tLUNhcGl0YWwgUmVjb3ZlcnlcIixcbiAgICAgIFwidW5pdHNcIjogXCJ1cyQvaFwiLFxuICAgICAgXCJwcmljZVwiOiAzMi45OCxcbiAgICAgIFwidHlwZVwiOiBcInNpbXBsZVwiXG4gICAgfSxcbiAgICB7XG4gICAgICBcImNsYXNzXCI6IFwiaW5zdXJhbmNlXCIsXG4gICAgICBcIm5hbWVcIjogXCJCYWxlcjEzMDAjIFBUTy0taW5zdXJhbmNlXCIsXG4gICAgICBcInVuaXRzXCI6IFwidXMkL2hcIixcbiAgICAgIFwicHJpY2VcIjogMC4xNCxcbiAgICAgIFwidHlwZVwiOiBcInNpbXBsZVwiXG4gICAgfSxcbiAgICB7XG4gICAgICBcImNsYXNzXCI6IFwib3RoZXJcIixcbiAgICAgIFwibmFtZVwiOiBcIkJhbGVyMTMwMCMgUFRPLS1UYXhlc1wiLFxuICAgICAgXCJ1bml0c1wiOiBcInVzJC9oXCIsXG4gICAgICBcInByaWNlXCI6IDEuNzEsXG4gICAgICBcInR5cGVcIjogXCJzaW1wbGVcIlxuICAgIH0sXG4gICAge1xuICAgICAgXCJjbGFzc1wiOiBcImVxdWlwbWVudFwiLFxuICAgICAgXCJuYW1lXCI6IFwiQmFsZXIxMzAwIyBQVE8tLUx1YmUgJiBSZXBhaXJzXCIsXG4gICAgICBcInVuaXRzXCI6IFwidXMkL2hcIixcbiAgICAgIFwicHJpY2VcIjogMzEuODUsXG4gICAgICBcInR5cGVcIjogXCJzaW1wbGVcIlxuICAgIH0sXG4gICAge1xuICAgICAgXCJ0eXBlXCI6IFwic2ltcGxlXCIsXG4gICAgICBcIm5hbWVcIjogXCJCYWxlIFR3aW5lXCIsXG4gICAgICBcInVuaXRzXCI6IFwidXMkL1thY3JfdXNdXCIsXG4gICAgICBcImRlc2NyaXB0aW9uXCI6IFwiXCIsXG4gICAgICBcInByaWNlXCI6IDcsXG4gICAgICBcImNsYXNzXCI6IFwicHJvY2Vzc2luZ1wiXG4gICAgfSxcbiAgICB7XG4gICAgICBcImNsYXNzXCI6IFwiZXF1aXBtZW50XCIsXG4gICAgICBcIm5hbWVcIjogXCJCYWxlIFdhZ29uIDEzMDAjIEF0dG0tLUNhcGl0YWwgUmVjb3ZlcnlcIixcbiAgICAgIFwidW5pdHNcIjogXCJ1cyQvaFwiLFxuICAgICAgXCJwcmljZVwiOiA0Ni42OSxcbiAgICAgIFwidHlwZVwiOiBcInNpbXBsZVwiXG4gICAgfSxcbiAgICB7XG4gICAgICBcImNsYXNzXCI6IFwiaW5zdXJhbmNlXCIsXG4gICAgICBcIm5hbWVcIjogXCJCYWxlIFdhZ29uIDEzMDAjIEF0dG0tLWluc3VyYW5jZVwiLFxuICAgICAgXCJ1bml0c1wiOiBcInVzJC9oXCIsXG4gICAgICBcInByaWNlXCI6IDAuMTgsXG4gICAgICBcInR5cGVcIjogXCJzaW1wbGVcIlxuICAgIH0sXG4gICAge1xuICAgICAgXCJjbGFzc1wiOiBcIm90aGVyXCIsXG4gICAgICBcIm5hbWVcIjogXCJCYWxlIFdhZ29uIDEzMDAjIEF0dG0tLVRheGVzXCIsXG4gICAgICBcInVuaXRzXCI6IFwidXMkL2hcIixcbiAgICAgIFwicHJpY2VcIjogMi4xNixcbiAgICAgIFwidHlwZVwiOiBcInNpbXBsZVwiXG4gICAgfSxcbiAgICB7XG4gICAgICBcImNsYXNzXCI6IFwiZXF1aXBtZW50XCIsXG4gICAgICBcIm5hbWVcIjogXCJCYWxlIFdhZ29uIDEzMDAjIEF0dG0tLUx1YmUgJiBSZXBhaXJcIixcbiAgICAgIFwidW5pdHNcIjogXCJ1cyQvaFwiLFxuICAgICAgXCJwcmljZVwiOiAzOC42OCxcbiAgICAgIFwidHlwZVwiOiBcInNpbXBsZVwiXG4gICAgfSxcbiAgICB7XG4gICAgICBcImNsYXNzXCI6IFwiZXF1aXBtZW50XCIsXG4gICAgICBcIm5hbWVcIjogXCJDaGFsbGVuZ2VyIFRyYWN0b3JcIixcbiAgICAgIFwidW5pdHNcIjogXCJoXCIsXG4gICAgICBcInR5cGVcIjogXCJjb21wbGV4XCIsXG4gICAgICBcIm1hdGVyaWFsc1wiOiB7XG4gICAgICAgIFwiRXF1aXBtZW50IEZ1ZWxcIjoge1xuICAgICAgICAgIFwiYW1vdW50XCI6IDE5LjM2LFxuICAgICAgICAgIFwib3JpZ2luYWxBbW91bnRcIjogMTkuMzYsXG4gICAgICAgICAgXCJ1bml0c1wiOiBcIltnYWxfdXNdXCIsXG4gICAgICAgICAgXCJlcnJvclwiOiBudWxsLFxuICAgICAgICAgIFwicHJpY2VcIjogNTQuNDAxNlxuICAgICAgICB9LFxuICAgICAgICBcIkNoYWxsZW5nZXIgVHJhY3Rvci0tQ2FwaXRvbCBDb3N0XCI6IHtcbiAgICAgICAgICBcImFtb3VudFwiOiAxLFxuICAgICAgICAgIFwib3JpZ2luYWxBbW91bnRcIjogMSxcbiAgICAgICAgICBcInVuaXRzXCI6IFwiaFwiLFxuICAgICAgICAgIFwiZXJyb3JcIjogbnVsbCxcbiAgICAgICAgICBcInByaWNlXCI6IDkwXG4gICAgICAgIH0sXG4gICAgICAgIFwiQ2hhbGxlbmdlciBUcmFjdG9yLS1MYWJvclwiOiB7XG4gICAgICAgICAgXCJhbW91bnRcIjogMSxcbiAgICAgICAgICBcIm9yaWdpbmFsQW1vdW50XCI6IDEsXG4gICAgICAgICAgXCJ1bml0c1wiOiBcImhcIixcbiAgICAgICAgICBcImVycm9yXCI6IG51bGwsXG4gICAgICAgICAgXCJwcmljZVwiOiAzNVxuICAgICAgICB9XG4gICAgICB9LFxuICAgICAgXCJwcmljZVwiOiAxNzkuNDAxNlxuICAgIH0sXG4gICAge1xuICAgICAgXCJjbGFzc1wiOiBcImVxdWlwbWVudFwiLFxuICAgICAgXCJuYW1lXCI6IFwiQ29vbGVyL3ZhblwiLFxuICAgICAgXCJ1bml0c1wiOiBcImhcIixcbiAgICAgIFwidHlwZVwiOiBcImNvbXBsZXhcIixcbiAgICAgIFwibWF0ZXJpYWxzXCI6IHtcbiAgICAgICAgXCJDb29sZXIvdmFuLS1MYWJvclwiOiB7XG4gICAgICAgICAgXCJhbW91bnRcIjogMSxcbiAgICAgICAgICBcIm9yaWdpbmFsQW1vdW50XCI6IDEsXG4gICAgICAgICAgXCJ1bml0c1wiOiBcImhcIixcbiAgICAgICAgICBcImVycm9yXCI6IG51bGwsXG4gICAgICAgICAgXCJwcmljZVwiOiAxMFxuICAgICAgICB9LFxuICAgICAgICBcIkNvb2xlci92YW4tLUNhcGl0b2wgQ29zdFwiOiB7XG4gICAgICAgICAgXCJhbW91bnRcIjogMSxcbiAgICAgICAgICBcIm9yaWdpbmFsQW1vdW50XCI6IDEsXG4gICAgICAgICAgXCJ1bml0c1wiOiBcImhcIixcbiAgICAgICAgICBcImVycm9yXCI6IG51bGwsXG4gICAgICAgICAgXCJwcmljZVwiOiAxNVxuICAgICAgICB9LFxuICAgICAgICBcIkVxdWlwbWVudCBGdWVsXCI6IHtcbiAgICAgICAgICBcImFtb3VudFwiOiAwLjk2LFxuICAgICAgICAgIFwib3JpZ2luYWxBbW91bnRcIjogMC45NixcbiAgICAgICAgICBcInVuaXRzXCI6IFwiW2dhbF91c11cIixcbiAgICAgICAgICBcImVycm9yXCI6IG51bGwsXG4gICAgICAgICAgXCJwcmljZVwiOiAyLjY5NzZcbiAgICAgICAgfSxcbiAgICAgICAgXCJFc3RpbWF0ZVwiOiB7XG4gICAgICAgICAgXCJ1bml0c1wiOiBcInVzJFwiLFxuICAgICAgICAgIFwiYW1vdW50XCI6IDEuMixcbiAgICAgICAgICBcImVycm9yXCI6IG51bGwsXG4gICAgICAgICAgXCJwcmljZVwiOiAxLjJcbiAgICAgICAgfVxuICAgICAgfSxcbiAgICAgIFwicHJpY2VcIjogMjguODk3NlxuICAgIH0sXG4gICAge1xuICAgICAgXCJjbGFzc1wiOiBcImVxdWlwbWVudFwiLFxuICAgICAgXCJuYW1lXCI6IFwiRlIgNjA4MCBGSFwiLFxuICAgICAgXCJ1bml0c1wiOiBcImhcIixcbiAgICAgIFwidHlwZVwiOiBcImNvbXBsZXhcIixcbiAgICAgIFwibWF0ZXJpYWxzXCI6IHtcbiAgICAgICAgXCJFcXVpcG1lbnQgRnVlbFwiOiB7XG4gICAgICAgICAgXCJhbW91bnRcIjogMTMuMixcbiAgICAgICAgICBcIm9yaWdpbmFsQW1vdW50XCI6IDEzLjIsXG4gICAgICAgICAgXCJ1bml0c1wiOiBcIltnYWxfdXNdXCIsXG4gICAgICAgICAgXCJlcnJvclwiOiBudWxsLFxuICAgICAgICAgIFwicHJpY2VcIjogMzcuMDkyXG4gICAgICAgIH0sXG4gICAgICAgIFwiRlIgNjA4MCBGSC0tTGFib3JcIjoge1xuICAgICAgICAgIFwiYW1vdW50XCI6IDEsXG4gICAgICAgICAgXCJvcmlnaW5hbEFtb3VudFwiOiAxLFxuICAgICAgICAgIFwidW5pdHNcIjogXCJoXCIsXG4gICAgICAgICAgXCJlcnJvclwiOiBudWxsLFxuICAgICAgICAgIFwicHJpY2VcIjogMzVcbiAgICAgICAgfSxcbiAgICAgICAgXCJGUiA2MDgwIEZILS1DYXBpdG9sIENvc3RcIjoge1xuICAgICAgICAgIFwiYW1vdW50XCI6IDEsXG4gICAgICAgICAgXCJvcmlnaW5hbEFtb3VudFwiOiAxLFxuICAgICAgICAgIFwidW5pdHNcIjogXCJoXCIsXG4gICAgICAgICAgXCJlcnJvclwiOiBudWxsLFxuICAgICAgICAgIFwicHJpY2VcIjogOTBcbiAgICAgICAgfSxcbiAgICAgICAgXCJFc3RpbWF0ZVwiOiB7XG4gICAgICAgICAgXCJ1bml0c1wiOiBcInVzJFwiLFxuICAgICAgICAgIFwiYW1vdW50XCI6IDMwLFxuICAgICAgICAgIFwiZXJyb3JcIjogbnVsbCxcbiAgICAgICAgICBcInByaWNlXCI6IDMwXG4gICAgICAgIH1cbiAgICAgIH0sXG4gICAgICBcInByaWNlXCI6IDE5Mi4wOTE5OTk5OTk5OTk5OFxuICAgIH0sXG4gICAge1xuICAgICAgXCJkZXNjcmlwdGlvblwiOiBcIk1hbnVhbCBBcHBsaWNhdGlvbiBvZiBoZXJiaWNpZGVcIixcbiAgICAgIFwiY2xhc3NcIjogXCJoZXJiaWNpZGVcIixcbiAgICAgIFwibmFtZVwiOiBcImhlcmJpY2lkZSAtIG1hbnVhbFwiLFxuICAgICAgXCJ1bml0c1wiOiBcIjEwMC5bYWNyX3VzXVwiLFxuICAgICAgXCJ0eXBlXCI6IFwiY29tcGxleFwiLFxuICAgICAgXCJtYXRlcmlhbHNcIjoge1xuICAgICAgICBcIkdseXBob3NhdGVcIjoge1xuICAgICAgICAgIFwiYW1vdW50XCI6IDIwMCxcbiAgICAgICAgICBcIm9yaWdpbmFsQW1vdW50XCI6IDIwMCxcbiAgICAgICAgICBcInVuaXRzXCI6IFwiW3F0X3VzXVwiLFxuICAgICAgICAgIFwiZXJyb3JcIjogbnVsbCxcbiAgICAgICAgICBcInByaWNlXCI6IDgwMFxuICAgICAgICB9LFxuICAgICAgICBcIkxhYm9yZXJcIjoge1xuICAgICAgICAgIFwiYW1vdW50XCI6IDk2LFxuICAgICAgICAgIFwib3JpZ2luYWxBbW91bnRcIjogOTYsXG4gICAgICAgICAgXCJ1bml0c1wiOiBcImhcIixcbiAgICAgICAgICBcImVycm9yXCI6IG51bGwsXG4gICAgICAgICAgXCJwcmljZVwiOiAxNjMyXG4gICAgICAgIH1cbiAgICAgIH0sXG4gICAgICBcInByaWNlXCI6IDI0MzJcbiAgICB9LFxuICAgIHtcbiAgICAgIFwiY2xhc3NcIjogXCJsYWJvclwiLFxuICAgICAgXCJuYW1lXCI6IFwiaG9laW5nXCIsXG4gICAgICBcInVuaXRzXCI6IFwiMTAwLlthY3JfdXNdXCIsXG4gICAgICBcInR5cGVcIjogXCJjb21wbGV4XCIsXG4gICAgICBcIm1hdGVyaWFsc1wiOiB7XG4gICAgICAgIFwiTGFib3JlclwiOiB7XG4gICAgICAgICAgXCJhbW91bnRcIjogMTkyLFxuICAgICAgICAgIFwib3JpZ2luYWxBbW91bnRcIjogMTkyLFxuICAgICAgICAgIFwidW5pdHNcIjogXCJoXCIsXG4gICAgICAgICAgXCJlcnJvclwiOiBudWxsLFxuICAgICAgICAgIFwicHJpY2VcIjogMzI2NFxuICAgICAgICB9XG4gICAgICB9LFxuICAgICAgXCJwcmljZVwiOiAzMjY0XG4gICAgfSxcbiAgICB7XG4gICAgICBcImNsYXNzXCI6IFwiZXF1aXBtZW50XCIsXG4gICAgICBcIm5hbWVcIjogXCJMYXJnZSBUcmFjdG9yXCIsXG4gICAgICBcInVuaXRzXCI6IFwiaFwiLFxuICAgICAgXCJ0eXBlXCI6IFwiY29tcGxleFwiLFxuICAgICAgXCJtYXRlcmlhbHNcIjoge1xuICAgICAgICBcIkVxdWlwbWVudCBGdWVsXCI6IHtcbiAgICAgICAgICBcImFtb3VudFwiOiAxMy4yLFxuICAgICAgICAgIFwib3JpZ2luYWxBbW91bnRcIjogMTMuMixcbiAgICAgICAgICBcInVuaXRzXCI6IFwiW2dhbF91c11cIixcbiAgICAgICAgICBcImVycm9yXCI6IG51bGwsXG4gICAgICAgICAgXCJwcmljZVwiOiAzNy4wOTJcbiAgICAgICAgfSxcbiAgICAgICAgXCJMYXJnZSBUcmFjdG9yLS1DYXBpdG9sIENvc3RcIjoge1xuICAgICAgICAgIFwiYW1vdW50XCI6IDEsXG4gICAgICAgICAgXCJvcmlnaW5hbEFtb3VudFwiOiAxLFxuICAgICAgICAgIFwidW5pdHNcIjogXCJoXCIsXG4gICAgICAgICAgXCJlcnJvclwiOiB0cnVlXG4gICAgICAgIH0sXG4gICAgICAgIFwiTGFyZ2UgVHJhY3Rvci0tTGFib3JcIjoge1xuICAgICAgICAgIFwiYW1vdW50XCI6IDEsXG4gICAgICAgICAgXCJvcmlnaW5hbEFtb3VudFwiOiAxLFxuICAgICAgICAgIFwidW5pdHNcIjogXCJoXCIsXG4gICAgICAgICAgXCJlcnJvclwiOiB0cnVlXG4gICAgICAgIH1cbiAgICAgIH0sXG4gICAgICBcInByaWNlXCI6IDM3LjA5MlxuICAgIH0sXG4gICAge1xuICAgICAgXCJjbGFzc1wiOiBcImVxdWlwbWVudFwiLFxuICAgICAgXCJuYW1lXCI6IFwiTWlkLXNpemUgVHJhY3RvclwiLFxuICAgICAgXCJ1bml0c1wiOiBcImhcIixcbiAgICAgIFwidHlwZVwiOiBcImNvbXBsZXhcIixcbiAgICAgIFwibWF0ZXJpYWxzXCI6IHtcbiAgICAgICAgXCJNaWQtc2l6ZSBUcmFjdG9yLS1DYXBpdG9sIENvc3RcIjoge1xuICAgICAgICAgIFwiYW1vdW50XCI6IDEsXG4gICAgICAgICAgXCJvcmlnaW5hbEFtb3VudFwiOiAxLFxuICAgICAgICAgIFwidW5pdHNcIjogXCJoXCIsXG4gICAgICAgICAgXCJlcnJvclwiOiB0cnVlXG4gICAgICAgIH0sXG4gICAgICAgIFwiTWlkLXNpemUgVHJhY3Rvci0tTGFib3JcIjoge1xuICAgICAgICAgIFwiYW1vdW50XCI6IDEsXG4gICAgICAgICAgXCJvcmlnaW5hbEFtb3VudFwiOiAxLFxuICAgICAgICAgIFwidW5pdHNcIjogXCJoXCIsXG4gICAgICAgICAgXCJlcnJvclwiOiB0cnVlXG4gICAgICAgIH0sXG4gICAgICAgIFwiRXF1aXBtZW50IEZ1ZWxcIjoge1xuICAgICAgICAgIFwiYW1vdW50XCI6IDMuOTYsXG4gICAgICAgICAgXCJvcmlnaW5hbEFtb3VudFwiOiAzLjk2LFxuICAgICAgICAgIFwidW5pdHNcIjogXCJbZ2FsX3VzXVwiLFxuICAgICAgICAgIFwiZXJyb3JcIjogbnVsbCxcbiAgICAgICAgICBcInByaWNlXCI6IDExLjEyNzZcbiAgICAgICAgfVxuICAgICAgfSxcbiAgICAgIFwicHJpY2VcIjogMTEuMTI3NlxuICAgIH0sXG4gICAge1xuICAgICAgXCJjbGFzc1wiOiBcImVxdWlwbWVudFwiLFxuICAgICAgXCJuYW1lXCI6IFwiU2VtaS1UcmFjdG9yIHRyYWlsZXJcIixcbiAgICAgIFwidW5pdHNcIjogXCJoXCIsXG4gICAgICBcInR5cGVcIjogXCJjb21wbGV4XCIsXG4gICAgICBcIm1hdGVyaWFsc1wiOiB7XG4gICAgICAgIFwiU2VtaS1UcmFjdG9yIHRyYWlsZXItLUNhcGl0b2wgQ29zdFwiOiB7XG4gICAgICAgICAgXCJhbW91bnRcIjogMSxcbiAgICAgICAgICBcIm9yaWdpbmFsQW1vdW50XCI6IDEsXG4gICAgICAgICAgXCJ1bml0c1wiOiBcImhcIixcbiAgICAgICAgICBcImVycm9yXCI6IG51bGwsXG4gICAgICAgICAgXCJwcmljZVwiOiA5MFxuICAgICAgICB9LFxuICAgICAgICBcIkVxdWlwbWVudCBGdWVsXCI6IHtcbiAgICAgICAgICBcImFtb3VudFwiOiA2LjUsXG4gICAgICAgICAgXCJvcmlnaW5hbEFtb3VudFwiOiA2LjUsXG4gICAgICAgICAgXCJ1bml0c1wiOiBcIltnYWxfdXNdXCIsXG4gICAgICAgICAgXCJlcnJvclwiOiBudWxsLFxuICAgICAgICAgIFwicHJpY2VcIjogMTguMjY1XG4gICAgICAgIH0sXG4gICAgICAgIFwiU2VtaS1UcmFjdG9yIHRyYWlsZXItLUxhYm9yXCI6IHtcbiAgICAgICAgICBcImFtb3VudFwiOiAxLFxuICAgICAgICAgIFwib3JpZ2luYWxBbW91bnRcIjogMSxcbiAgICAgICAgICBcInVuaXRzXCI6IFwiaFwiLFxuICAgICAgICAgIFwiZXJyb3JcIjogbnVsbCxcbiAgICAgICAgICBcInByaWNlXCI6IDM1XG4gICAgICAgIH1cbiAgICAgIH0sXG4gICAgICBcInByaWNlXCI6IDE0My4yNjVcbiAgICB9LFxuICAgIHtcbiAgICAgIFwiY2xhc3NcIjogXCJlcXVpcG1lbnRcIixcbiAgICAgIFwibmFtZVwiOiBcIlNtYWxsIFRyYWN0b3JcIixcbiAgICAgIFwidW5pdHNcIjogXCJoXCIsXG4gICAgICBcInR5cGVcIjogXCJjb21wbGV4XCIsXG4gICAgICBcIm1hdGVyaWFsc1wiOiB7XG4gICAgICAgIFwiRXF1aXBtZW50IEZ1ZWxcIjoge1xuICAgICAgICAgIFwiYW1vdW50XCI6IDEuOTgsXG4gICAgICAgICAgXCJvcmlnaW5hbEFtb3VudFwiOiAxLjk4LFxuICAgICAgICAgIFwidW5pdHNcIjogXCJbZ2FsX3VzXVwiLFxuICAgICAgICAgIFwiZXJyb3JcIjogbnVsbCxcbiAgICAgICAgICBcInByaWNlXCI6IDUuNTYzOFxuICAgICAgICB9LFxuICAgICAgICBcIlNtYWxsIFRyYWN0b3ItLUxhYm9yXCI6IHtcbiAgICAgICAgICBcImFtb3VudFwiOiAxLFxuICAgICAgICAgIFwib3JpZ2luYWxBbW91bnRcIjogMSxcbiAgICAgICAgICBcInVuaXRzXCI6IFwiaFwiLFxuICAgICAgICAgIFwiZXJyb3JcIjogdHJ1ZVxuICAgICAgICB9LFxuICAgICAgICBcIlNtYWxsIFRyYWN0b3ItLUNhcGl0b2wgQ29zdFwiOiB7XG4gICAgICAgICAgXCJhbW91bnRcIjogMSxcbiAgICAgICAgICBcIm9yaWdpbmFsQW1vdW50XCI6IDEsXG4gICAgICAgICAgXCJ1bml0c1wiOiBcImhcIixcbiAgICAgICAgICBcImVycm9yXCI6IHRydWVcbiAgICAgICAgfVxuICAgICAgfSxcbiAgICAgIFwicHJpY2VcIjogNS41NjM4XG4gICAgfSxcbiAgICB7XG4gICAgICBcImNsYXNzXCI6IFwiZXF1aXBtZW50XCIsXG4gICAgICBcIm5hbWVcIjogXCJTdXBwb3J0IFRydWNrXCIsXG4gICAgICBcInVuaXRzXCI6IFwiaFwiLFxuICAgICAgXCJ0eXBlXCI6IFwiY29tcGxleFwiLFxuICAgICAgXCJtYXRlcmlhbHNcIjoge1xuICAgICAgICBcIlN1cHBvcnQgVHJ1Y2stLUNhcGl0b2wgQ29zdFwiOiB7XG4gICAgICAgICAgXCJhbW91bnRcIjogMSxcbiAgICAgICAgICBcIm9yaWdpbmFsQW1vdW50XCI6IDEsXG4gICAgICAgICAgXCJ1bml0c1wiOiBcImhcIixcbiAgICAgICAgICBcImVycm9yXCI6IG51bGwsXG4gICAgICAgICAgXCJwcmljZVwiOiAyNVxuICAgICAgICB9LFxuICAgICAgICBcIlN1cHBvcnQgVHJ1Y2stLUxhYm9yXCI6IHtcbiAgICAgICAgICBcImFtb3VudFwiOiAxLFxuICAgICAgICAgIFwib3JpZ2luYWxBbW91bnRcIjogMSxcbiAgICAgICAgICBcInVuaXRzXCI6IFwiaFwiLFxuICAgICAgICAgIFwiZXJyb3JcIjogbnVsbCxcbiAgICAgICAgICBcInByaWNlXCI6IDMwXG4gICAgICAgIH0sXG4gICAgICAgIFwiRXF1aXBtZW50IEZ1ZWxcIjoge1xuICAgICAgICAgIFwiYW1vdW50XCI6IDEuNzYsXG4gICAgICAgICAgXCJvcmlnaW5hbEFtb3VudFwiOiAxLjc2LFxuICAgICAgICAgIFwidW5pdHNcIjogXCJbZ2FsX3VzXVwiLFxuICAgICAgICAgIFwiZXJyb3JcIjogbnVsbCxcbiAgICAgICAgICBcInByaWNlXCI6IDQuOTQ1NlxuICAgICAgICB9XG4gICAgICB9LFxuICAgICAgXCJwcmljZVwiOiA1OS45NDU2XG4gICAgfSxcbiAgICB7XG4gICAgICBcImNsYXNzXCI6IFwiZXF1aXBtZW50XCIsXG4gICAgICBcIm5hbWVcIjogXCJUYW5kZW0gQXhsZSBUcnVja1wiLFxuICAgICAgXCJ1bml0c1wiOiBcImhcIixcbiAgICAgIFwidHlwZVwiOiBcImNvbXBsZXhcIixcbiAgICAgIFwibWF0ZXJpYWxzXCI6IHtcbiAgICAgICAgXCJUYW5kZW0gQXhsZSBUcnVjay0tQ2FwaXRvbCBDb3N0XCI6IHtcbiAgICAgICAgICBcImFtb3VudFwiOiAxLFxuICAgICAgICAgIFwib3JpZ2luYWxBbW91bnRcIjogMSxcbiAgICAgICAgICBcInVuaXRzXCI6IFwiaFwiLFxuICAgICAgICAgIFwiZXJyb3JcIjogbnVsbCxcbiAgICAgICAgICBcInByaWNlXCI6IDkwXG4gICAgICAgIH0sXG4gICAgICAgIFwiRXF1aXBtZW50IEZ1ZWxcIjoge1xuICAgICAgICAgIFwiYW1vdW50XCI6IDEzLjIsXG4gICAgICAgICAgXCJvcmlnaW5hbEFtb3VudFwiOiAxMy4yLFxuICAgICAgICAgIFwidW5pdHNcIjogXCJbZ2FsX3VzXVwiLFxuICAgICAgICAgIFwiZXJyb3JcIjogbnVsbCxcbiAgICAgICAgICBcInByaWNlXCI6IDM3LjA5MlxuICAgICAgICB9LFxuICAgICAgICBcIlRhbmRlbSBBeGxlIFRydWNrLS1MYWJvclwiOiB7XG4gICAgICAgICAgXCJhbW91bnRcIjogMSxcbiAgICAgICAgICBcIm9yaWdpbmFsQW1vdW50XCI6IDEsXG4gICAgICAgICAgXCJ1bml0c1wiOiBcImhcIixcbiAgICAgICAgICBcImVycm9yXCI6IG51bGwsXG4gICAgICAgICAgXCJwcmljZVwiOiAzNVxuICAgICAgICB9XG4gICAgICB9LFxuICAgICAgXCJwcmljZVwiOiAxNjIuMDkxOTk5OTk5OTk5OThcbiAgICB9LFxuICAgIHtcbiAgICAgIFwiY2xhc3NcIjogXCJlcXVpcG1lbnRcIixcbiAgICAgIFwibmFtZVwiOiBcIlRyYWN0b3IgYW5kIHNwcmF5ZXJcIixcbiAgICAgIFwidW5pdHNcIjogXCJoXCIsXG4gICAgICBcInR5cGVcIjogXCJjb21wbGV4XCIsXG4gICAgICBcIm1hdGVyaWFsc1wiOiB7XG4gICAgICAgIFwiRXF1aXBtZW50IEZ1ZWxcIjoge1xuICAgICAgICAgIFwiYW1vdW50XCI6IDMuOTYsXG4gICAgICAgICAgXCJvcmlnaW5hbEFtb3VudFwiOiAzLjk2LFxuICAgICAgICAgIFwidW5pdHNcIjogXCJbZ2FsX3VzXVwiLFxuICAgICAgICAgIFwiZXJyb3JcIjogbnVsbCxcbiAgICAgICAgICBcInByaWNlXCI6IDExLjEyNzZcbiAgICAgICAgfSxcbiAgICAgICAgXCJUcmFjdG9yIGFuZCBzcHJheWVyLS1MYWJvclwiOiB7XG4gICAgICAgICAgXCJhbW91bnRcIjogMSxcbiAgICAgICAgICBcIm9yaWdpbmFsQW1vdW50XCI6IDEsXG4gICAgICAgICAgXCJ1bml0c1wiOiBcImhcIixcbiAgICAgICAgICBcImVycm9yXCI6IHRydWVcbiAgICAgICAgfSxcbiAgICAgICAgXCJFc3RpbWF0ZVwiOiB7XG4gICAgICAgICAgXCJ1bml0c1wiOiBcInVzJFwiLFxuICAgICAgICAgIFwiYW1vdW50XCI6IDUwLFxuICAgICAgICAgIFwiZXJyb3JcIjogbnVsbCxcbiAgICAgICAgICBcInByaWNlXCI6IDUwXG4gICAgICAgIH1cbiAgICAgIH0sXG4gICAgICBcInByaWNlXCI6IDYxLjEyNzZcbiAgICB9LFxuICAgIHtcbiAgICAgIFwidHlwZVwiOiBcImNvbXBsZXhcIixcbiAgICAgIFwibmFtZVwiOiBcIkFUVlwiLFxuICAgICAgXCJ1bml0c1wiOiBcImhcIixcbiAgICAgIFwiZGVzY3JpcHRpb25cIjogXCJcIixcbiAgICAgIFwicHJpY2VcIjogNi45Nzk5OTk5OTk5OTk5OTk1LFxuICAgICAgXCJtYXRlcmlhbHNcIjoge1xuICAgICAgICBcIkdhc1wiOiB7XG4gICAgICAgICAgXCJuYW1lXCI6IFwiR2FzXCIsXG4gICAgICAgICAgXCJhbW91bnRcIjogMSxcbiAgICAgICAgICBcInVuaXRzXCI6IFwiW2dhbF91c11cIixcbiAgICAgICAgICBcImVycm9yXCI6IG51bGwsXG4gICAgICAgICAgXCJwcmljZVwiOiAzLjc5LFxuICAgICAgICAgIFwib3JpZ2luYWxBbW91bnRcIjogMVxuICAgICAgICB9LFxuICAgICAgICBcIkFUVi0tQ2FwaXRhbCBSZWNvdmVyeVwiOiB7XG4gICAgICAgICAgXCJuYW1lXCI6IFwiQVRWLS1DYXBpdGFsIFJlY292ZXJ5XCIsXG4gICAgICAgICAgXCJhbW91bnRcIjogMSxcbiAgICAgICAgICBcInVuaXRzXCI6IFwiaFwiLFxuICAgICAgICAgIFwiZXJyb3JcIjogbnVsbCxcbiAgICAgICAgICBcInByaWNlXCI6IDEuODksXG4gICAgICAgICAgXCJvcmlnaW5hbEFtb3VudFwiOiAxXG4gICAgICAgIH0sXG4gICAgICAgIFwiQVRWLS1pbnN1cmFuY2VcIjoge1xuICAgICAgICAgIFwibmFtZVwiOiBcIkFUVi0taW5zdXJhbmNlXCIsXG4gICAgICAgICAgXCJhbW91bnRcIjogMSxcbiAgICAgICAgICBcInVuaXRzXCI6IFwiaFwiLFxuICAgICAgICAgIFwiZXJyb3JcIjogbnVsbCxcbiAgICAgICAgICBcInByaWNlXCI6IDAuMDEsXG4gICAgICAgICAgXCJvcmlnaW5hbEFtb3VudFwiOiAxXG4gICAgICAgIH0sXG4gICAgICAgIFwiQVRWLS1UYXhlc1wiOiB7XG4gICAgICAgICAgXCJuYW1lXCI6IFwiQVRWLS1UYXhlc1wiLFxuICAgICAgICAgIFwiYW1vdW50XCI6IDEsXG4gICAgICAgICAgXCJ1bml0c1wiOiBcImhcIixcbiAgICAgICAgICBcImVycm9yXCI6IG51bGwsXG4gICAgICAgICAgXCJwcmljZVwiOiAwLjA5LFxuICAgICAgICAgIFwib3JpZ2luYWxBbW91bnRcIjogMVxuICAgICAgICB9LFxuICAgICAgICBcIkFUVi0tTHViZSAmIFJlcGFpcnNcIjoge1xuICAgICAgICAgIFwibmFtZVwiOiBcIkFUVi0tTHViZSAmIFJlcGFpcnNcIixcbiAgICAgICAgICBcImFtb3VudFwiOiAxLFxuICAgICAgICAgIFwidW5pdHNcIjogXCJoXCIsXG4gICAgICAgICAgXCJlcnJvclwiOiBudWxsLFxuICAgICAgICAgIFwicHJpY2VcIjogMS4yLFxuICAgICAgICAgIFwib3JpZ2luYWxBbW91bnRcIjogMVxuICAgICAgICB9XG4gICAgICB9XG4gICAgfSxcbiAgICB7XG4gICAgICBcInR5cGVcIjogXCJjb21wbGV4XCIsXG4gICAgICBcIm5hbWVcIjogXCJBVFYgU3ByYXllciBTeXN0ZW1cIixcbiAgICAgIFwidW5pdHNcIjogXCJoXCIsXG4gICAgICBcImRlc2NyaXB0aW9uXCI6IFwiXCIsXG4gICAgICBcInByaWNlXCI6IDcuMjcsXG4gICAgICBcIm1hdGVyaWFsc1wiOiB7XG4gICAgICAgIFwiQVRWIFNwcmF5ZXIgU3lzdGVtLS1MdWJlICYgUmVwYWlyc1wiOiB7XG4gICAgICAgICAgXCJuYW1lXCI6IFwiQVRWIFNwcmF5ZXIgU3lzdGVtLS1MdWJlICYgUmVwYWlyc1wiLFxuICAgICAgICAgIFwiYW1vdW50XCI6IDEsXG4gICAgICAgICAgXCJ1bml0c1wiOiBcImhcIixcbiAgICAgICAgICBcImVycm9yXCI6IG51bGwsXG4gICAgICAgICAgXCJwcmljZVwiOiAyLjYxXG4gICAgICAgIH0sXG4gICAgICAgIFwiQVRWIFNwcmF5ZXIgU3lzdGVtLS1UYXhlc1wiOiB7XG4gICAgICAgICAgXCJuYW1lXCI6IFwiQVRWIFNwcmF5ZXIgU3lzdGVtLS1UYXhlc1wiLFxuICAgICAgICAgIFwiYW1vdW50XCI6IDEsXG4gICAgICAgICAgXCJ1bml0c1wiOiBcImhcIixcbiAgICAgICAgICBcImVycm9yXCI6IG51bGwsXG4gICAgICAgICAgXCJwcmljZVwiOiAwLjIzXG4gICAgICAgIH0sXG4gICAgICAgIFwiQVRWIFNwcmF5ZXIgU3lzdGVtLS1pbnN1cmFuY2VcIjoge1xuICAgICAgICAgIFwibmFtZVwiOiBcIkFUViBTcHJheWVyIFN5c3RlbS0taW5zdXJhbmNlXCIsXG4gICAgICAgICAgXCJhbW91bnRcIjogMSxcbiAgICAgICAgICBcInVuaXRzXCI6IFwiaFwiLFxuICAgICAgICAgIFwiZXJyb3JcIjogbnVsbCxcbiAgICAgICAgICBcInByaWNlXCI6IDAuMDJcbiAgICAgICAgfSxcbiAgICAgICAgXCJBVFYgU3ByYXllciBTeXN0ZW0tLUNhcGl0YWwgUmVjb3ZlcnlcIjoge1xuICAgICAgICAgIFwibmFtZVwiOiBcIkFUViBTcHJheWVyIFN5c3RlbS0tQ2FwaXRhbCBSZWNvdmVyeVwiLFxuICAgICAgICAgIFwiYW1vdW50XCI6IDEsXG4gICAgICAgICAgXCJ1bml0c1wiOiBcImhcIixcbiAgICAgICAgICBcImVycm9yXCI6IG51bGwsXG4gICAgICAgICAgXCJwcmljZVwiOiA0LjQxXG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9LFxuICAgIHtcbiAgICAgIFwidHlwZVwiOiBcImNvbXBsZXhcIixcbiAgICAgIFwibmFtZVwiOiBcIjIwNUhQIENyYXdsZXJcIixcbiAgICAgIFwidW5pdHNcIjogXCJoXCIsXG4gICAgICBcImRlc2NyaXB0aW9uXCI6IFwiXCIsXG4gICAgICBcInByaWNlXCI6IDY5LjAzMjIsXG4gICAgICBcIm1hdGVyaWFsc1wiOiB7XG4gICAgICAgIFwiMjA1SFAgQ3Jhd2xlci0tQ2FwaXRhbCBSZWNvdmVyeVwiOiB7XG4gICAgICAgICAgXCJuYW1lXCI6IFwiMjA1SFAgQ3Jhd2xlci0tQ2FwaXRhbCBSZWNvdmVyeVwiLFxuICAgICAgICAgIFwiYW1vdW50XCI6IDEsXG4gICAgICAgICAgXCJ1bml0c1wiOiBcImhcIixcbiAgICAgICAgICBcImVycm9yXCI6IG51bGwsXG4gICAgICAgICAgXCJwcmljZVwiOiA5LjEyXG4gICAgICAgIH0sXG4gICAgICAgIFwiMjA1SFAgQ3Jhd2xlci0taW5zdXJhbmNlXCI6IHtcbiAgICAgICAgICBcIm5hbWVcIjogXCIyMDVIUCBDcmF3bGVyLS1pbnN1cmFuY2VcIixcbiAgICAgICAgICBcImFtb3VudFwiOiAxLFxuICAgICAgICAgIFwidW5pdHNcIjogXCJoXCIsXG4gICAgICAgICAgXCJlcnJvclwiOiBudWxsLFxuICAgICAgICAgIFwicHJpY2VcIjogMC4wNVxuICAgICAgICB9LFxuICAgICAgICBcIjIwNUhQIENyYXdsZXItLVRheGVzXCI6IHtcbiAgICAgICAgICBcIm5hbWVcIjogXCIyMDVIUCBDcmF3bGVyLS1UYXhlc1wiLFxuICAgICAgICAgIFwiYW1vdW50XCI6IDEsXG4gICAgICAgICAgXCJ1bml0c1wiOiBcImhcIixcbiAgICAgICAgICBcImVycm9yXCI6IG51bGwsXG4gICAgICAgICAgXCJwcmljZVwiOiAwLjU3XG4gICAgICAgIH0sXG4gICAgICAgIFwiMjA1SFAgQ3Jhd2xlci0tTHViZSAmIFJlcGFpcnNcIjoge1xuICAgICAgICAgIFwibmFtZVwiOiBcIjIwNUhQIENyYXdsZXItLUx1YmUgJiBSZXBhaXJzXCIsXG4gICAgICAgICAgXCJhbW91bnRcIjogMSxcbiAgICAgICAgICBcInVuaXRzXCI6IFwiaFwiLFxuICAgICAgICAgIFwiZXJyb3JcIjogbnVsbCxcbiAgICAgICAgICBcInByaWNlXCI6IDEzLjEzXG4gICAgICAgIH0sXG4gICAgICAgIFwiR2FzXCI6IHtcbiAgICAgICAgICBcIm5hbWVcIjogXCJHYXNcIixcbiAgICAgICAgICBcImFtb3VudFwiOiAxMi4xOCxcbiAgICAgICAgICBcInVuaXRzXCI6IFwiW2dhbF91c11cIixcbiAgICAgICAgICBcImVycm9yXCI6IG51bGwsXG4gICAgICAgICAgXCJwcmljZVwiOiA0Ni4xNjIyLFxuICAgICAgICAgIFwib3JpZ2luYWxBbW91bnRcIjogMTIuMThcbiAgICAgICAgfVxuICAgICAgfVxuICAgIH0sXG4gICAge1xuICAgICAgXCJ0eXBlXCI6IFwiY29tcGxleFwiLFxuICAgICAgXCJuYW1lXCI6IFwiRGl0Y2hlciAtIFZcIixcbiAgICAgIFwidW5pdHNcIjogXCJoXCIsXG4gICAgICBcImRlc2NyaXB0aW9uXCI6IFwiXCIsXG4gICAgICBcInByaWNlXCI6IDUuNzc5OTk5OTk5OTk5OTk5LFxuICAgICAgXCJtYXRlcmlhbHNcIjoge1xuICAgICAgICBcIkRpdGNoZXIgLSBWLS1DYXBpdGFsIFJlY292ZXJ5XCI6IHtcbiAgICAgICAgICBcIm5hbWVcIjogXCJEaXRjaGVyIC0gVi0tQ2FwaXRhbCBSZWNvdmVyeVwiLFxuICAgICAgICAgIFwiYW1vdW50XCI6IDEsXG4gICAgICAgICAgXCJ1bml0c1wiOiBcImhcIixcbiAgICAgICAgICBcImVycm9yXCI6IG51bGwsXG4gICAgICAgICAgXCJwcmljZVwiOiAzLjE5XG4gICAgICAgIH0sXG4gICAgICAgIFwiRGl0Y2hlciAtIFYtLWluc3VyYW5jZVwiOiB7XG4gICAgICAgICAgXCJuYW1lXCI6IFwiRGl0Y2hlciAtIFYtLWluc3VyYW5jZVwiLFxuICAgICAgICAgIFwiYW1vdW50XCI6IDEsXG4gICAgICAgICAgXCJ1bml0c1wiOiBcImhcIixcbiAgICAgICAgICBcImVycm9yXCI6IG51bGwsXG4gICAgICAgICAgXCJwcmljZVwiOiAwLjAxXG4gICAgICAgIH0sXG4gICAgICAgIFwiRGl0Y2hlciAtIFYtLVRheGVzXCI6IHtcbiAgICAgICAgICBcIm5hbWVcIjogXCJEaXRjaGVyIC0gVi0tVGF4ZXNcIixcbiAgICAgICAgICBcImFtb3VudFwiOiAxLFxuICAgICAgICAgIFwidW5pdHNcIjogXCJoXCIsXG4gICAgICAgICAgXCJlcnJvclwiOiBudWxsLFxuICAgICAgICAgIFwicHJpY2VcIjogMC4xOFxuICAgICAgICB9LFxuICAgICAgICBcIkRpdGNoZXIgLSBWLS1MdWJlICYgUmVwYWlyc1wiOiB7XG4gICAgICAgICAgXCJuYW1lXCI6IFwiRGl0Y2hlciAtIFYtLUx1YmUgJiBSZXBhaXJzXCIsXG4gICAgICAgICAgXCJhbW91bnRcIjogMSxcbiAgICAgICAgICBcInVuaXRzXCI6IFwiaFwiLFxuICAgICAgICAgIFwiZXJyb3JcIjogbnVsbCxcbiAgICAgICAgICBcInByaWNlXCI6IDIuNFxuICAgICAgICB9XG4gICAgICB9XG4gICAgfSxcbiAgICB7XG4gICAgICBcInR5cGVcIjogXCJjb21wbGV4XCIsXG4gICAgICBcIm5hbWVcIjogXCIxNTBIUDRXRCBUcmFjdG9yXCIsXG4gICAgICBcInVuaXRzXCI6IFwiaFwiLFxuICAgICAgXCJkZXNjcmlwdGlvblwiOiBcIlwiLFxuICAgICAgXCJwcmljZVwiOiA1MC4wMzg5LFxuICAgICAgXCJtYXRlcmlhbHNcIjoge1xuICAgICAgICBcIjE1MEhQNFdEIFRyYWN0b3ItLUNhcGl0YWwgUmVjb3ZlcnlcIjoge1xuICAgICAgICAgIFwibmFtZVwiOiBcIjE1MEhQNFdEIFRyYWN0b3ItLUNhcGl0YWwgUmVjb3ZlcnlcIixcbiAgICAgICAgICBcImFtb3VudFwiOiAxLFxuICAgICAgICAgIFwidW5pdHNcIjogXCJoXCIsXG4gICAgICAgICAgXCJlcnJvclwiOiBudWxsLFxuICAgICAgICAgIFwicHJpY2VcIjogNi40MVxuICAgICAgICB9LFxuICAgICAgICBcIjE1MEhQNFdEIFRyYWN0b3ItLWluc3VyYW5jZVwiOiB7XG4gICAgICAgICAgXCJuYW1lXCI6IFwiMTUwSFA0V0QgVHJhY3Rvci0taW5zdXJhbmNlXCIsXG4gICAgICAgICAgXCJhbW91bnRcIjogMSxcbiAgICAgICAgICBcInVuaXRzXCI6IFwiaFwiLFxuICAgICAgICAgIFwiZXJyb3JcIjogbnVsbCxcbiAgICAgICAgICBcInByaWNlXCI6IDAuMDNcbiAgICAgICAgfSxcbiAgICAgICAgXCIxNTBIUDRXRCBUcmFjdG9yLS1UYXhlc1wiOiB7XG4gICAgICAgICAgXCJuYW1lXCI6IFwiMTUwSFA0V0QgVHJhY3Rvci0tVGF4ZXNcIixcbiAgICAgICAgICBcImFtb3VudFwiOiAxLFxuICAgICAgICAgIFwidW5pdHNcIjogXCJoXCIsXG4gICAgICAgICAgXCJlcnJvclwiOiBudWxsLFxuICAgICAgICAgIFwicHJpY2VcIjogMC40XG4gICAgICAgIH0sXG4gICAgICAgIFwiMTUwSFA0V0QgVHJhY3Rvci0tTHViZSAmIFJlcGFpcnNcIjoge1xuICAgICAgICAgIFwibmFtZVwiOiBcIjE1MEhQNFdEIFRyYWN0b3ItLUx1YmUgJiBSZXBhaXJzXCIsXG4gICAgICAgICAgXCJhbW91bnRcIjogMSxcbiAgICAgICAgICBcInVuaXRzXCI6IFwiaFwiLFxuICAgICAgICAgIFwiZXJyb3JcIjogbnVsbCxcbiAgICAgICAgICBcInByaWNlXCI6IDkuNDNcbiAgICAgICAgfSxcbiAgICAgICAgXCJHYXNcIjoge1xuICAgICAgICAgIFwibmFtZVwiOiBcIkdhc1wiLFxuICAgICAgICAgIFwiYW1vdW50XCI6IDguOTEsXG4gICAgICAgICAgXCJ1bml0c1wiOiBcIltnYWxfdXNdXCIsXG4gICAgICAgICAgXCJlcnJvclwiOiBudWxsLFxuICAgICAgICAgIFwicHJpY2VcIjogMzMuNzY4OSxcbiAgICAgICAgICBcIm9yaWdpbmFsQW1vdW50XCI6IDguOTFcbiAgICAgICAgfVxuICAgICAgfVxuICAgIH0sXG4gICAge1xuICAgICAgXCJ0eXBlXCI6IFwiY29tcGxleFwiLFxuICAgICAgXCJuYW1lXCI6IFwiUmVhciBCbGFkZSAtIDgnXCIsXG4gICAgICBcInVuaXRzXCI6IFwiaFwiLFxuICAgICAgXCJkZXNjcmlwdGlvblwiOiBcIlwiLFxuICAgICAgXCJwcmljZVwiOiAzLjUxLFxuICAgICAgXCJtYXRlcmlhbHNcIjoge1xuICAgICAgICBcIlJlYXIgQmxhZGUgLSA4Jy0tQ2FwaXRhbCBSZWNvdmVyeVwiOiB7XG4gICAgICAgICAgXCJuYW1lXCI6IFwiUmVhciBCbGFkZSAtIDgnLS1DYXBpdGFsIFJlY292ZXJ5XCIsXG4gICAgICAgICAgXCJhbW91bnRcIjogMSxcbiAgICAgICAgICBcInVuaXRzXCI6IFwiaFwiLFxuICAgICAgICAgIFwiZXJyb3JcIjogbnVsbCxcbiAgICAgICAgICBcInByaWNlXCI6IDIuMTZcbiAgICAgICAgfSxcbiAgICAgICAgXCJSZWFyIEJsYWRlIC0gOCctLWluc3VyYW5jZVwiOiB7XG4gICAgICAgICAgXCJuYW1lXCI6IFwiUmVhciBCbGFkZSAtIDgnLS1pbnN1cmFuY2VcIixcbiAgICAgICAgICBcImFtb3VudFwiOiAxLFxuICAgICAgICAgIFwidW5pdHNcIjogXCJoXCIsXG4gICAgICAgICAgXCJlcnJvclwiOiBudWxsLFxuICAgICAgICAgIFwicHJpY2VcIjogMC4wMVxuICAgICAgICB9LFxuICAgICAgICBcIlJlYXIgQmxhZGUgLSA4Jy0tVGF4ZXNcIjoge1xuICAgICAgICAgIFwibmFtZVwiOiBcIlJlYXIgQmxhZGUgLSA4Jy0tVGF4ZXNcIixcbiAgICAgICAgICBcImFtb3VudFwiOiAxLFxuICAgICAgICAgIFwidW5pdHNcIjogXCJoXCIsXG4gICAgICAgICAgXCJlcnJvclwiOiBudWxsLFxuICAgICAgICAgIFwicHJpY2VcIjogMC4xM1xuICAgICAgICB9LFxuICAgICAgICBcIlJlYXIgQmxhZGUgLSA4Jy0tTHViZSAmIFJlcGFpcnNcIjoge1xuICAgICAgICAgIFwibmFtZVwiOiBcIlJlYXIgQmxhZGUgLSA4Jy0tTHViZSAmIFJlcGFpcnNcIixcbiAgICAgICAgICBcImFtb3VudFwiOiAxLFxuICAgICAgICAgIFwidW5pdHNcIjogXCJoXCIsXG4gICAgICAgICAgXCJlcnJvclwiOiBudWxsLFxuICAgICAgICAgIFwicHJpY2VcIjogMS4yMVxuICAgICAgICB9XG4gICAgICB9XG4gICAgfSxcbiAgICB7XG4gICAgICBcInR5cGVcIjogXCJjb21wbGV4XCIsXG4gICAgICBcIm5hbWVcIjogXCJQaWNrdXAgMS8yIFRvblwiLFxuICAgICAgXCJ1bml0c1wiOiBcImhcIixcbiAgICAgIFwiZGVzY3JpcHRpb25cIjogXCJcIixcbiAgICAgIFwicHJpY2VcIjogMjAuMTk1LFxuICAgICAgXCJtYXRlcmlhbHNcIjoge1xuICAgICAgICBcIlBpY2t1cCAxLzIgVG9uLS1DYXBpdGFsIFJlY292ZXJ5XCI6IHtcbiAgICAgICAgICBcIm5hbWVcIjogXCJQaWNrdXAgMS8yIFRvbi0tQ2FwaXRhbCBSZWNvdmVyeVwiLFxuICAgICAgICAgIFwiYW1vdW50XCI6IDEsXG4gICAgICAgICAgXCJ1bml0c1wiOiBcImhcIixcbiAgICAgICAgICBcImVycm9yXCI6IG51bGwsXG4gICAgICAgICAgXCJwcmljZVwiOiA2LjIxLFxuICAgICAgICAgIFwib3JpZ2luYWxBbW91bnRcIjogMVxuICAgICAgICB9LFxuICAgICAgICBcIlBpY2t1cCAxLzIgVG9uLS1pbnN1cmFuY2VcIjoge1xuICAgICAgICAgIFwibmFtZVwiOiBcIlBpY2t1cCAxLzIgVG9uLS1pbnN1cmFuY2VcIixcbiAgICAgICAgICBcImFtb3VudFwiOiAxLFxuICAgICAgICAgIFwidW5pdHNcIjogXCJoXCIsXG4gICAgICAgICAgXCJlcnJvclwiOiBudWxsLFxuICAgICAgICAgIFwicHJpY2VcIjogMC4wMyxcbiAgICAgICAgICBcIm9yaWdpbmFsQW1vdW50XCI6IDFcbiAgICAgICAgfSxcbiAgICAgICAgXCJQaWNrdXAgMS8yIFRvbi0tVGF4ZXNcIjoge1xuICAgICAgICAgIFwibmFtZVwiOiBcIlBpY2t1cCAxLzIgVG9uLS1UYXhlc1wiLFxuICAgICAgICAgIFwiYW1vdW50XCI6IDEsXG4gICAgICAgICAgXCJ1bml0c1wiOiBcImhcIixcbiAgICAgICAgICBcImVycm9yXCI6IG51bGwsXG4gICAgICAgICAgXCJwcmljZVwiOiAwLjMsXG4gICAgICAgICAgXCJvcmlnaW5hbEFtb3VudFwiOiAxXG4gICAgICAgIH0sXG4gICAgICAgIFwiUGlja3VwIDEvMiBUb24tLUx1YmUgJiBSZXBhaXJzXCI6IHtcbiAgICAgICAgICBcIm5hbWVcIjogXCJQaWNrdXAgMS8yIFRvbi0tTHViZSAmIFJlcGFpcnNcIixcbiAgICAgICAgICBcImFtb3VudFwiOiAxLFxuICAgICAgICAgIFwidW5pdHNcIjogXCJoXCIsXG4gICAgICAgICAgXCJlcnJvclwiOiBudWxsLFxuICAgICAgICAgIFwicHJpY2VcIjogNC4xOCxcbiAgICAgICAgICBcIm9yaWdpbmFsQW1vdW50XCI6IDFcbiAgICAgICAgfSxcbiAgICAgICAgXCJHYXNcIjoge1xuICAgICAgICAgIFwibmFtZVwiOiBcIkdhc1wiLFxuICAgICAgICAgIFwiYW1vdW50XCI6IDIuNSxcbiAgICAgICAgICBcInVuaXRzXCI6IFwiW2dhbF91c11cIixcbiAgICAgICAgICBcImVycm9yXCI6IG51bGwsXG4gICAgICAgICAgXCJwcmljZVwiOiA5LjQ3NSxcbiAgICAgICAgICBcIm9yaWdpbmFsQW1vdW50XCI6IDIuNVxuICAgICAgICB9XG4gICAgICB9XG4gICAgfSxcbiAgICB7XG4gICAgICBcInR5cGVcIjogXCJjb21wbGV4XCIsXG4gICAgICBcIm5hbWVcIjogXCJTd2F0aGVyIDE2J1wiLFxuICAgICAgXCJ1bml0c1wiOiBcImhcIixcbiAgICAgIFwiZGVzY3JpcHRpb25cIjogXCJcIixcbiAgICAgIFwicHJpY2VcIjogODYuMDEwMSxcbiAgICAgIFwibWF0ZXJpYWxzXCI6IHtcbiAgICAgICAgXCJTd2F0aGVyIDE2Jy0tQ2FwaXRhbCBSZWNvdmVyeVwiOiB7XG4gICAgICAgICAgXCJuYW1lXCI6IFwiU3dhdGhlciAxNictLUNhcGl0YWwgUmVjb3ZlcnlcIixcbiAgICAgICAgICBcImFtb3VudFwiOiAxLFxuICAgICAgICAgIFwidW5pdHNcIjogXCJoXCIsXG4gICAgICAgICAgXCJlcnJvclwiOiBudWxsLFxuICAgICAgICAgIFwicHJpY2VcIjogMzMuNjYsXG4gICAgICAgICAgXCJvcmlnaW5hbEFtb3VudFwiOiAxXG4gICAgICAgIH0sXG4gICAgICAgIFwiU3dhdGhlciAxNictLUluc3VyYW5jZVwiOiB7XG4gICAgICAgICAgXCJuYW1lXCI6IFwiU3dhdGhlciAxNictLUluc3VyYW5jZVwiLFxuICAgICAgICAgIFwiYW1vdW50XCI6IDEsXG4gICAgICAgICAgXCJ1bml0c1wiOiBcImhcIixcbiAgICAgICAgICBcImVycm9yXCI6IG51bGwsXG4gICAgICAgICAgXCJwcmljZVwiOiAwLjE1LFxuICAgICAgICAgIFwib3JpZ2luYWxBbW91bnRcIjogMVxuICAgICAgICB9LFxuICAgICAgICBcIlN3YXRoZXIgMTYnLS1UYXhlc1wiOiB7XG4gICAgICAgICAgXCJuYW1lXCI6IFwiU3dhdGhlciAxNictLVRheGVzXCIsXG4gICAgICAgICAgXCJhbW91bnRcIjogMSxcbiAgICAgICAgICBcInVuaXRzXCI6IFwiaFwiLFxuICAgICAgICAgIFwiZXJyb3JcIjogbnVsbCxcbiAgICAgICAgICBcInByaWNlXCI6IDEuNzQsXG4gICAgICAgICAgXCJvcmlnaW5hbEFtb3VudFwiOiAxXG4gICAgICAgIH0sXG4gICAgICAgIFwiU3dhdGhlciAxNictLUx1YmUgJiBSZXBhaXJzXCI6IHtcbiAgICAgICAgICBcIm5hbWVcIjogXCJTd2F0aGVyIDE2Jy0tTHViZSAmIFJlcGFpcnNcIixcbiAgICAgICAgICBcImFtb3VudFwiOiAxLFxuICAgICAgICAgIFwidW5pdHNcIjogXCJoXCIsXG4gICAgICAgICAgXCJlcnJvclwiOiBudWxsLFxuICAgICAgICAgIFwicHJpY2VcIjogMTkuNDIsXG4gICAgICAgICAgXCJvcmlnaW5hbEFtb3VudFwiOiAxXG4gICAgICAgIH0sXG4gICAgICAgIFwiR2FzXCI6IHtcbiAgICAgICAgICBcIm5hbWVcIjogXCJHYXNcIixcbiAgICAgICAgICBcImFtb3VudFwiOiA4LjE5LFxuICAgICAgICAgIFwidW5pdHNcIjogXCJbZ2FsX3VzXVwiLFxuICAgICAgICAgIFwiZXJyb3JcIjogbnVsbCxcbiAgICAgICAgICBcInByaWNlXCI6IDMxLjA0MDEsXG4gICAgICAgICAgXCJvcmlnaW5hbEFtb3VudFwiOiA4LjE5XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9LFxuICAgIHtcbiAgICAgIFwidHlwZVwiOiBcImNvbXBsZXhcIixcbiAgICAgIFwibmFtZVwiOiBcIlBpY2t1cCAzLzQgVG9uXCIsXG4gICAgICBcInVuaXRzXCI6IFwiaFwiLFxuICAgICAgXCJkZXNjcmlwdGlvblwiOiBcIlwiLFxuICAgICAgXCJwcmljZVwiOiAyMi45NCxcbiAgICAgIFwibWF0ZXJpYWxzXCI6IHtcbiAgICAgICAgXCJQaWNrdXAgMy80IFRvbi0tQ2FwaXRhbCBSZWNvdmVyeVwiOiB7XG4gICAgICAgICAgXCJuYW1lXCI6IFwiUGlja3VwIDMvNCBUb24tLUNhcGl0YWwgUmVjb3ZlcnlcIixcbiAgICAgICAgICBcImFtb3VudFwiOiAxLFxuICAgICAgICAgIFwidW5pdHNcIjogXCJoXCIsXG4gICAgICAgICAgXCJlcnJvclwiOiBudWxsLFxuICAgICAgICAgIFwicHJpY2VcIjogNy4xXG4gICAgICAgIH0sXG4gICAgICAgIFwiUGlja3VwIDMvNCBUb24tLWluc3VyYW5jZVwiOiB7XG4gICAgICAgICAgXCJuYW1lXCI6IFwiUGlja3VwIDMvNCBUb24tLWluc3VyYW5jZVwiLFxuICAgICAgICAgIFwiYW1vdW50XCI6IDEsXG4gICAgICAgICAgXCJ1bml0c1wiOiBcImhcIixcbiAgICAgICAgICBcImVycm9yXCI6IG51bGwsXG4gICAgICAgICAgXCJwcmljZVwiOiAwLjAzXG4gICAgICAgIH0sXG4gICAgICAgIFwiUGlja3VwIDMvNCBUb24tLVRheGVzXCI6IHtcbiAgICAgICAgICBcIm5hbWVcIjogXCJQaWNrdXAgMy80IFRvbi0tVGF4ZXNcIixcbiAgICAgICAgICBcImFtb3VudFwiOiAxLFxuICAgICAgICAgIFwidW5pdHNcIjogXCJoXCIsXG4gICAgICAgICAgXCJlcnJvclwiOiBudWxsLFxuICAgICAgICAgIFwicHJpY2VcIjogMC4zNVxuICAgICAgICB9LFxuICAgICAgICBcIlBpY2t1cCAzLzQgVG9uLS1MdWJlICYgUmVwYWlyc1wiOiB7XG4gICAgICAgICAgXCJuYW1lXCI6IFwiUGlja3VwIDMvNCBUb24tLUx1YmUgJiBSZXBhaXJzXCIsXG4gICAgICAgICAgXCJhbW91bnRcIjogMSxcbiAgICAgICAgICBcInVuaXRzXCI6IFwiaFwiLFxuICAgICAgICAgIFwiZXJyb3JcIjogbnVsbCxcbiAgICAgICAgICBcInByaWNlXCI6IDQuMDlcbiAgICAgICAgfSxcbiAgICAgICAgXCJHYXNcIjoge1xuICAgICAgICAgIFwibmFtZVwiOiBcIkdhc1wiLFxuICAgICAgICAgIFwiYW1vdW50XCI6IDMsXG4gICAgICAgICAgXCJ1bml0c1wiOiBcIltnYWxfdXNdXCIsXG4gICAgICAgICAgXCJlcnJvclwiOiBudWxsLFxuICAgICAgICAgIFwicHJpY2VcIjogMTEuMzcwMDAwMDAwMDAwMDAxLFxuICAgICAgICAgIFwib3JpZ2luYWxBbW91bnRcIjogM1xuICAgICAgICB9XG4gICAgICB9XG4gICAgfSxcbiAgICB7XG4gICAgICBcInR5cGVcIjogXCJjb21wbGV4XCIsXG4gICAgICBcIm5hbWVcIjogXCJTZXJ2aWNlIFRydWNrXCIsXG4gICAgICBcInVuaXRzXCI6IFwiaFwiLFxuICAgICAgXCJkZXNjcmlwdGlvblwiOiBcIlwiLFxuICAgICAgXCJwcmljZVwiOiAxOS4xOTUzLFxuICAgICAgXCJtYXRlcmlhbHNcIjoge1xuICAgICAgICBcIlNlcnZpY2UgVHJ1Y2stLUNhcGl0YWwgUmVjb3ZlcnlcIjoge1xuICAgICAgICAgIFwibmFtZVwiOiBcIlNlcnZpY2UgVHJ1Y2stLUNhcGl0YWwgUmVjb3ZlcnlcIixcbiAgICAgICAgICBcImFtb3VudFwiOiAxLFxuICAgICAgICAgIFwidW5pdHNcIjogXCJoXCIsXG4gICAgICAgICAgXCJlcnJvclwiOiBudWxsLFxuICAgICAgICAgIFwicHJpY2VcIjogNC4xN1xuICAgICAgICB9LFxuICAgICAgICBcIlNlcnZpY2UgVHJ1Y2stLWluc3VyYW5jZVwiOiB7XG4gICAgICAgICAgXCJuYW1lXCI6IFwiU2VydmljZSBUcnVjay0taW5zdXJhbmNlXCIsXG4gICAgICAgICAgXCJhbW91bnRcIjogMSxcbiAgICAgICAgICBcInVuaXRzXCI6IFwiaFwiLFxuICAgICAgICAgIFwiZXJyb3JcIjogbnVsbCxcbiAgICAgICAgICBcInByaWNlXCI6IDAuMDJcbiAgICAgICAgfSxcbiAgICAgICAgXCJTZXJ2aWNlIFRydWNrLS1UYXhlc1wiOiB7XG4gICAgICAgICAgXCJuYW1lXCI6IFwiU2VydmljZSBUcnVjay0tVGF4ZXNcIixcbiAgICAgICAgICBcImFtb3VudFwiOiAxLFxuICAgICAgICAgIFwidW5pdHNcIjogXCJoXCIsXG4gICAgICAgICAgXCJlcnJvclwiOiBudWxsLFxuICAgICAgICAgIFwicHJpY2VcIjogMC4yXG4gICAgICAgIH0sXG4gICAgICAgIFwiU2VydmljZSBUcnVjay0tTHViZSAmIFJlcGFpcnNcIjoge1xuICAgICAgICAgIFwibmFtZVwiOiBcIlNlcnZpY2UgVHJ1Y2stLUx1YmUgJiBSZXBhaXJzXCIsXG4gICAgICAgICAgXCJhbW91bnRcIjogMSxcbiAgICAgICAgICBcInVuaXRzXCI6IFwiaFwiLFxuICAgICAgICAgIFwiZXJyb3JcIjogbnVsbCxcbiAgICAgICAgICBcInByaWNlXCI6IDMuMTdcbiAgICAgICAgfSxcbiAgICAgICAgXCJHYXNcIjoge1xuICAgICAgICAgIFwibmFtZVwiOiBcIkdhc1wiLFxuICAgICAgICAgIFwiYW1vdW50XCI6IDMuMDcsXG4gICAgICAgICAgXCJ1bml0c1wiOiBcIltnYWxfdXNdXCIsXG4gICAgICAgICAgXCJlcnJvclwiOiBudWxsLFxuICAgICAgICAgIFwicHJpY2VcIjogMTEuNjM1Mjk5OTk5OTk5OTk5LFxuICAgICAgICAgIFwib3JpZ2luYWxBbW91bnRcIjogMy4wN1xuICAgICAgICB9XG4gICAgICB9XG4gICAgfSxcbiAgICB7XG4gICAgICBcInR5cGVcIjogXCJjb21wbGV4XCIsXG4gICAgICBcIm5hbWVcIjogXCIzN0hQIDRXRCBUcmFjdG9yXCIsXG4gICAgICBcInVuaXRzXCI6IFwiaFwiLFxuICAgICAgXCJkZXNjcmlwdGlvblwiOiBcIlwiLFxuICAgICAgXCJwcmljZVwiOiA5LjQ0OTQsXG4gICAgICBcIm1hdGVyaWFsc1wiOiB7XG4gICAgICAgIFwiMzdIUCA0V0QgVHJhY3Rvci0tQ2FwaXRhbCBSZWNvdmVyeVwiOiB7XG4gICAgICAgICAgXCJuYW1lXCI6IFwiMzdIUCA0V0QgVHJhY3Rvci0tQ2FwaXRhbCBSZWNvdmVyeVwiLFxuICAgICAgICAgIFwiYW1vdW50XCI6IDEsXG4gICAgICAgICAgXCJ1bml0c1wiOiBcImhcIixcbiAgICAgICAgICBcImVycm9yXCI6IG51bGwsXG4gICAgICAgICAgXCJwcmljZVwiOiAwLjc3XG4gICAgICAgIH0sXG4gICAgICAgIFwiMzdIUCA0V0QgVHJhY3Rvci0tVGF4ZXNcIjoge1xuICAgICAgICAgIFwibmFtZVwiOiBcIjM3SFAgNFdEIFRyYWN0b3ItLVRheGVzXCIsXG4gICAgICAgICAgXCJhbW91bnRcIjogMSxcbiAgICAgICAgICBcInVuaXRzXCI6IFwiaFwiLFxuICAgICAgICAgIFwiZXJyb3JcIjogbnVsbCxcbiAgICAgICAgICBcInByaWNlXCI6IDAuMDVcbiAgICAgICAgfSxcbiAgICAgICAgXCIzN0hQIDRXRCBUcmFjdG9yLS1MdWJlICYgUmVwYWlyXCI6IHtcbiAgICAgICAgICBcIm5hbWVcIjogXCIzN0hQIDRXRCBUcmFjdG9yLS1MdWJlICYgUmVwYWlyXCIsXG4gICAgICAgICAgXCJhbW91bnRcIjogMSxcbiAgICAgICAgICBcInVuaXRzXCI6IFwiaFwiLFxuICAgICAgICAgIFwiZXJyb3JcIjogbnVsbCxcbiAgICAgICAgICBcInByaWNlXCI6IDEuNThcbiAgICAgICAgfSxcbiAgICAgICAgXCJHYXNcIjoge1xuICAgICAgICAgIFwibmFtZVwiOiBcIkdhc1wiLFxuICAgICAgICAgIFwiYW1vdW50XCI6IDEuODYsXG4gICAgICAgICAgXCJ1bml0c1wiOiBcIltnYWxfdXNdXCIsXG4gICAgICAgICAgXCJlcnJvclwiOiBudWxsLFxuICAgICAgICAgIFwicHJpY2VcIjogNy4wNDk0LFxuICAgICAgICAgIFwib3JpZ2luYWxBbW91bnRcIjogMS44NlxuICAgICAgICB9XG4gICAgICB9XG4gICAgfSxcbiAgICB7XG4gICAgICBcInR5cGVcIjogXCJjb21wbGV4XCIsXG4gICAgICBcIm5hbWVcIjogXCJSYWtlIDIwJ1wiLFxuICAgICAgXCJ1bml0c1wiOiBcImhcIixcbiAgICAgIFwiZGVzY3JpcHRpb25cIjogXCJcIixcbiAgICAgIFwicHJpY2VcIjogMTMuOTY5OTk5OTk5OTk5OTk5LFxuICAgICAgXCJtYXRlcmlhbHNcIjoge1xuICAgICAgICBcIlJha2UgMjAnLS1DYXBpdGFsIFJlY292ZXJ5XCI6IHtcbiAgICAgICAgICBcIm5hbWVcIjogXCJSYWtlIDIwJy0tQ2FwaXRhbCBSZWNvdmVyeVwiLFxuICAgICAgICAgIFwiYW1vdW50XCI6IDEsXG4gICAgICAgICAgXCJ1bml0c1wiOiBcImhcIixcbiAgICAgICAgICBcImVycm9yXCI6IG51bGwsXG4gICAgICAgICAgXCJwcmljZVwiOiA4Ljg3XG4gICAgICAgIH0sXG4gICAgICAgIFwiUmFrZSAyMCctLWluc3VyYW5jZVwiOiB7XG4gICAgICAgICAgXCJuYW1lXCI6IFwiUmFrZSAyMCctLWluc3VyYW5jZVwiLFxuICAgICAgICAgIFwiYW1vdW50XCI6IDEsXG4gICAgICAgICAgXCJ1bml0c1wiOiBcImhcIixcbiAgICAgICAgICBcImVycm9yXCI6IG51bGwsXG4gICAgICAgICAgXCJwcmljZVwiOiAwLjA0XG4gICAgICAgIH0sXG4gICAgICAgIFwiUmFrZSAyMCctLVRheGVzXCI6IHtcbiAgICAgICAgICBcIm5hbWVcIjogXCJSYWtlIDIwJy0tVGF4ZXNcIixcbiAgICAgICAgICBcImFtb3VudFwiOiAxLFxuICAgICAgICAgIFwidW5pdHNcIjogXCJoXCIsXG4gICAgICAgICAgXCJlcnJvclwiOiBudWxsLFxuICAgICAgICAgIFwicHJpY2VcIjogMC40NlxuICAgICAgICB9LFxuICAgICAgICBcIlJha2UgMjAnLS1MdWJlICYgUmVwYWlyc1wiOiB7XG4gICAgICAgICAgXCJuYW1lXCI6IFwiUmFrZSAyMCctLUx1YmUgJiBSZXBhaXJzXCIsXG4gICAgICAgICAgXCJhbW91bnRcIjogMSxcbiAgICAgICAgICBcInVuaXRzXCI6IFwiaFwiLFxuICAgICAgICAgIFwiZXJyb3JcIjogbnVsbCxcbiAgICAgICAgICBcInByaWNlXCI6IDQuNlxuICAgICAgICB9XG4gICAgICB9XG4gICAgfSxcbiAgICB7XG4gICAgICBcInR5cGVcIjogXCJjb21wbGV4XCIsXG4gICAgICBcIm5hbWVcIjogXCJCYWxlcjEzMDAjIFBUT1wiLFxuICAgICAgXCJ1bml0c1wiOiBcImhcIixcbiAgICAgIFwiZGVzY3JpcHRpb25cIjogXCJcIixcbiAgICAgIFwicHJpY2VcIjogNjYuNjgsXG4gICAgICBcIm1hdGVyaWFsc1wiOiB7XG4gICAgICAgIFwiQmFsZXIxMzAwIyBQVE8tLUNhcGl0YWwgUmVjb3ZlcnlcIjoge1xuICAgICAgICAgIFwibmFtZVwiOiBcIkJhbGVyMTMwMCMgUFRPLS1DYXBpdGFsIFJlY292ZXJ5XCIsXG4gICAgICAgICAgXCJhbW91bnRcIjogMSxcbiAgICAgICAgICBcInVuaXRzXCI6IFwiaFwiLFxuICAgICAgICAgIFwiZXJyb3JcIjogbnVsbCxcbiAgICAgICAgICBcInByaWNlXCI6IDMyLjk4XG4gICAgICAgIH0sXG4gICAgICAgIFwiQmFsZXIxMzAwIyBQVE8tLWluc3VyYW5jZVwiOiB7XG4gICAgICAgICAgXCJuYW1lXCI6IFwiQmFsZXIxMzAwIyBQVE8tLWluc3VyYW5jZVwiLFxuICAgICAgICAgIFwiYW1vdW50XCI6IDEsXG4gICAgICAgICAgXCJ1bml0c1wiOiBcImhcIixcbiAgICAgICAgICBcImVycm9yXCI6IG51bGwsXG4gICAgICAgICAgXCJwcmljZVwiOiAwLjE0XG4gICAgICAgIH0sXG4gICAgICAgIFwiQmFsZXIxMzAwIyBQVE8tLVRheGVzXCI6IHtcbiAgICAgICAgICBcIm5hbWVcIjogXCJCYWxlcjEzMDAjIFBUTy0tVGF4ZXNcIixcbiAgICAgICAgICBcImFtb3VudFwiOiAxLFxuICAgICAgICAgIFwidW5pdHNcIjogXCJoXCIsXG4gICAgICAgICAgXCJlcnJvclwiOiBudWxsLFxuICAgICAgICAgIFwicHJpY2VcIjogMS43MVxuICAgICAgICB9LFxuICAgICAgICBcIkJhbGVyMTMwMCMgUFRPLS1MdWJlICYgUmVwYWlyc1wiOiB7XG4gICAgICAgICAgXCJuYW1lXCI6IFwiQmFsZXIxMzAwIyBQVE8tLUx1YmUgJiBSZXBhaXJzXCIsXG4gICAgICAgICAgXCJhbW91bnRcIjogMSxcbiAgICAgICAgICBcInVuaXRzXCI6IFwiaFwiLFxuICAgICAgICAgIFwiZXJyb3JcIjogbnVsbCxcbiAgICAgICAgICBcInByaWNlXCI6IDMxLjg1XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9LFxuICAgIHtcbiAgICAgIFwidHlwZVwiOiBcImNvbXBsZXhcIixcbiAgICAgIFwibmFtZVwiOiBcIkJhbGUgV2Fnb24gMTMwMCMgQXR0bVwiLFxuICAgICAgXCJ1bml0c1wiOiBcImhcIixcbiAgICAgIFwiZGVzY3JpcHRpb25cIjogXCJcIixcbiAgICAgIFwicHJpY2VcIjogMTE5LjkyNTAwMDAwMDAwMDAxLFxuICAgICAgXCJtYXRlcmlhbHNcIjoge1xuICAgICAgICBcIkJhbGUgV2Fnb24gMTMwMCMgQXR0bS0tQ2FwaXRhbCBSZWNvdmVyeVwiOiB7XG4gICAgICAgICAgXCJuYW1lXCI6IFwiQmFsZSBXYWdvbiAxMzAwIyBBdHRtLS1DYXBpdGFsIFJlY292ZXJ5XCIsXG4gICAgICAgICAgXCJhbW91bnRcIjogMSxcbiAgICAgICAgICBcInVuaXRzXCI6IFwiaFwiLFxuICAgICAgICAgIFwiZXJyb3JcIjogbnVsbCxcbiAgICAgICAgICBcInByaWNlXCI6IDQ2LjY5XG4gICAgICAgIH0sXG4gICAgICAgIFwiQmFsZSBXYWdvbiAxMzAwIyBBdHRtLS1pbnN1cmFuY2VcIjoge1xuICAgICAgICAgIFwibmFtZVwiOiBcIkJhbGUgV2Fnb24gMTMwMCMgQXR0bS0taW5zdXJhbmNlXCIsXG4gICAgICAgICAgXCJhbW91bnRcIjogMSxcbiAgICAgICAgICBcInVuaXRzXCI6IFwiaFwiLFxuICAgICAgICAgIFwiZXJyb3JcIjogbnVsbCxcbiAgICAgICAgICBcInByaWNlXCI6IDAuMThcbiAgICAgICAgfSxcbiAgICAgICAgXCJCYWxlIFdhZ29uIDEzMDAjIEF0dG0tLVRheGVzXCI6IHtcbiAgICAgICAgICBcIm5hbWVcIjogXCJCYWxlIFdhZ29uIDEzMDAjIEF0dG0tLVRheGVzXCIsXG4gICAgICAgICAgXCJhbW91bnRcIjogMSxcbiAgICAgICAgICBcInVuaXRzXCI6IFwiaFwiLFxuICAgICAgICAgIFwiZXJyb3JcIjogbnVsbCxcbiAgICAgICAgICBcInByaWNlXCI6IDIuMTZcbiAgICAgICAgfSxcbiAgICAgICAgXCJCYWxlIFdhZ29uIDEzMDAjIEF0dG0tLUx1YmUgJiBSZXBhaXJcIjoge1xuICAgICAgICAgIFwibmFtZVwiOiBcIkJhbGUgV2Fnb24gMTMwMCMgQXR0bS0tTHViZSAmIFJlcGFpclwiLFxuICAgICAgICAgIFwiYW1vdW50XCI6IDEsXG4gICAgICAgICAgXCJ1bml0c1wiOiBcImhcIixcbiAgICAgICAgICBcImVycm9yXCI6IG51bGwsXG4gICAgICAgICAgXCJwcmljZVwiOiAzOC42OFxuICAgICAgICB9LFxuICAgICAgICBcIkdhc1wiOiB7XG4gICAgICAgICAgXCJuYW1lXCI6IFwiR2FzXCIsXG4gICAgICAgICAgXCJhbW91bnRcIjogOC41LFxuICAgICAgICAgIFwidW5pdHNcIjogXCJbZ2FsX3VzXVwiLFxuICAgICAgICAgIFwiZXJyb3JcIjogbnVsbCxcbiAgICAgICAgICBcInByaWNlXCI6IDMyLjIxNSxcbiAgICAgICAgICBcIm9yaWdpbmFsQW1vdW50XCI6IDguNVxuICAgICAgICB9XG4gICAgICB9XG4gICAgfVxuICBdLFxuICBcIm9wZXJhdGlvbnNcIjogW1xuICAgIHtcbiAgICAgIFwibmFtZVwiOiBcIldlZWRzLVJvdW5kdXAgUG93ZXJNYXhcIixcbiAgICAgIFwibWF0ZXJpYWxzXCI6IFtcbiAgICAgICAge1xuICAgICAgICAgIFwibmFtZVwiOiBcIkFUVlwiLFxuICAgICAgICAgIFwiYW1vdW50XCI6IDAuMDYsXG4gICAgICAgICAgXCJ1bml0c1wiOiBcImhcIixcbiAgICAgICAgICBcImlkXCI6IFwiYTZkOWE3OTEtYTAxMi00NDRjLWE3MWUtNmE1NWMxNzJhNmM0XCIsXG4gICAgICAgICAgXCJlcnJvclwiOiBudWxsLFxuICAgICAgICAgIFwicHJpY2VcIjogMC40MTg3OTk5OTk5OTk5OTk5NSxcbiAgICAgICAgICBcIm9yaWdpbmFsQW1vdW50XCI6IDAuMDZcbiAgICAgICAgfSxcbiAgICAgICAge1xuICAgICAgICAgIFwibmFtZVwiOiBcIlJvdW5kdXAgUG93ZXJNYXhcIixcbiAgICAgICAgICBcImFtb3VudFwiOiAwLjA2LFxuICAgICAgICAgIFwidW5pdHNcIjogXCJbcHRfdXNdXCIsXG4gICAgICAgICAgXCJpZFwiOiBcIjRmYjJkM2ZhLTIyZDMtNDNhZS04NzFkLWNiYWU3OTgzNGVjZFwiLFxuICAgICAgICAgIFwiZXJyb3JcIjogbnVsbCxcbiAgICAgICAgICBcInByaWNlXCI6IDAuMTY0OTk5OTk5OTk5OTk5OTgsXG4gICAgICAgICAgXCJvcmlnaW5hbEFtb3VudFwiOiAwLjA2XG4gICAgICAgIH0sXG4gICAgICAgIHtcbiAgICAgICAgICBcIm5hbWVcIjogXCJFcXVpcG1lbnQgT3BlcmF0b3IgTGFib3JcIixcbiAgICAgICAgICBcImFtb3VudFwiOiAwLjA2LFxuICAgICAgICAgIFwidW5pdHNcIjogXCJoXCIsXG4gICAgICAgICAgXCJpZFwiOiBcIjQ5MGQ5YWJiLTFiY2QtNDdmMC05MTU3LTVlNDUyY2VlOTljNFwiLFxuICAgICAgICAgIFwiZXJyb3JcIjogbnVsbCxcbiAgICAgICAgICBcInByaWNlXCI6IDEuMDIsXG4gICAgICAgICAgXCJvcmlnaW5hbEFtb3VudFwiOiAwLjA2XG4gICAgICAgIH0sXG4gICAgICAgIHtcbiAgICAgICAgICBcIm5hbWVcIjogXCJWZWxwYXIgTFwiLFxuICAgICAgICAgIFwiYW1vdW50XCI6IDIsXG4gICAgICAgICAgXCJ1bml0c1wiOiBcIltwdF91c11cIixcbiAgICAgICAgICBcImlkXCI6IFwiNzFhMWQzNjItYjM0ZC00MDVlLWJkZTktYjA1MTE5NDBiMTUzXCIsXG4gICAgICAgICAgXCJlcnJvclwiOiBudWxsLFxuICAgICAgICAgIFwicHJpY2VcIjogMjguODIsXG4gICAgICAgICAgXCJvcmlnaW5hbEFtb3VudFwiOiAyXG4gICAgICAgIH0sXG4gICAgICAgIHtcbiAgICAgICAgICBcIm5hbWVcIjogXCJBVFYgU3ByYXllciBTeXN0ZW1cIixcbiAgICAgICAgICBcImFtb3VudFwiOiAyLFxuICAgICAgICAgIFwidW5pdHNcIjogXCJoXCIsXG4gICAgICAgICAgXCJpZFwiOiBcImY3ZGQ4NzcyLTc3MWUtNDgzNy04NWVjLWYyZjQzY2FmMWY3YlwiLFxuICAgICAgICAgIFwiZXJyb3JcIjogbnVsbCxcbiAgICAgICAgICBcInByaWNlXCI6IDE0LjU0LFxuICAgICAgICAgIFwib3JpZ2luYWxBbW91bnRcIjogMlxuICAgICAgICB9XG4gICAgICBdLFxuICAgICAgXCJzY2hlZHVsZVwiOiBbXG4gICAgICAgIHtcbiAgICAgICAgICBcImxlbmd0aFwiOiAxLFxuICAgICAgICAgIFwidW5pdHNcIjogXCJtb250aFwiLFxuICAgICAgICAgIFwiZGF0ZVwiOiBcIjIwMTUtMTItMVwiXG4gICAgICAgIH1cbiAgICAgIF0sXG4gICAgICBcInVuaXRzXCI6IFwiW2Fjcl91c11cIixcbiAgICAgIFwic3VidG90YWxcIjogNDQuOTYzOCxcbiAgICAgIFwidG90YWxcIjogNDQuOTYzOCxcbiAgICAgIFwicGVyQWNyZVwiOiBmYWxzZVxuICAgIH0sXG4gICAge1xuICAgICAgXCJuYW1lXCI6IFwiRmVydGlsaXplciAxMS01Mi0wXCIsXG4gICAgICBcIm1hdGVyaWFsc1wiOiBbXG4gICAgICAgIHtcbiAgICAgICAgICBcIm5hbWVcIjogXCIxMS01Mi0wXCIsXG4gICAgICAgICAgXCJhbW91bnRcIjogMjAwLFxuICAgICAgICAgIFwidW5pdHNcIjogXCJbbGJfYXZdXCIsXG4gICAgICAgICAgXCJpZFwiOiBcImQzYTUzNmY4LWQ0MzQtNGE4Ny1iZjQ4LTU1ZDRlNDQ5YjU5ZlwiLFxuICAgICAgICAgIFwiZXJyb3JcIjogbnVsbCxcbiAgICAgICAgICBcInByaWNlXCI6IDc0LFxuICAgICAgICAgIFwib3JpZ2luYWxBbW91bnRcIjogMjAwXG4gICAgICAgIH0sXG4gICAgICAgIHtcbiAgICAgICAgICBcIm5hbWVcIjogXCJHcm91bmQgQXBwbGljYXRpb25cIixcbiAgICAgICAgICBcImFtb3VudFwiOiAxLFxuICAgICAgICAgIFwidW5pdHNcIjogXCJbYWNyX3VzXVwiLFxuICAgICAgICAgIFwiaWRcIjogXCI2OWI3MzA1OC1iZjczLTQwMzAtOGQ1MC0yMzU2NjBiNTY2YTJcIixcbiAgICAgICAgICBcImVycm9yXCI6IG51bGwsXG4gICAgICAgICAgXCJwcmljZVwiOiAxMC41XG4gICAgICAgIH1cbiAgICAgIF0sXG4gICAgICBcInNjaGVkdWxlXCI6IFtcbiAgICAgICAge1xuICAgICAgICAgIFwibGVuZ3RoXCI6IDEsXG4gICAgICAgICAgXCJ1bml0c1wiOiBcIm1vbnRoXCIsXG4gICAgICAgICAgXCJkYXRlXCI6IFwiMjAxNi0xLTFcIlxuICAgICAgICB9XG4gICAgICBdLFxuICAgICAgXCJ1bml0c1wiOiBcIlthY3JfdXNdXCIsXG4gICAgICBcInN1YnRvdGFsXCI6IDg0LjUsXG4gICAgICBcInRvdGFsXCI6IDg0LjUsXG4gICAgICBcInBlckFjcmVcIjogZmFsc2VcbiAgICB9LFxuICAgIHtcbiAgICAgIFwibmFtZVwiOiBcIkluc2VjdHMtQXBoaWRzL1dlZXZpbFwiLFxuICAgICAgXCJtYXRlcmlhbHNcIjogW1xuICAgICAgICB7XG4gICAgICAgICAgXCJuYW1lXCI6IFwiQVRWXCIsXG4gICAgICAgICAgXCJhbW91bnRcIjogMC4wNixcbiAgICAgICAgICBcInVuaXRzXCI6IFwiaFwiLFxuICAgICAgICAgIFwiaWRcIjogXCI1OTc2YjgyZi05ZmU0LTQ1MGItYjk3Ny02N2Y3MThjNjY4N2JcIixcbiAgICAgICAgICBcImVycm9yXCI6IG51bGwsXG4gICAgICAgICAgXCJwcmljZVwiOiAwLjQxODc5OTk5OTk5OTk5OTk1LFxuICAgICAgICAgIFwib3JpZ2luYWxBbW91bnRcIjogMC4wNlxuICAgICAgICB9LFxuICAgICAgICB7XG4gICAgICAgICAgXCJuYW1lXCI6IFwiRXF1aXBtZW50IE9wZXJhdG9yIExhYm9yXCIsXG4gICAgICAgICAgXCJhbW91bnRcIjogMC4wNixcbiAgICAgICAgICBcInVuaXRzXCI6IFwiaFwiLFxuICAgICAgICAgIFwiaWRcIjogXCI4NTAzYzBiYS00Y2IxLTQzZTAtYTg3YS1jYTE2NmJmZThjNDRcIixcbiAgICAgICAgICBcImVycm9yXCI6IG51bGwsXG4gICAgICAgICAgXCJwcmljZVwiOiAxLjAyLFxuICAgICAgICAgIFwib3JpZ2luYWxBbW91bnRcIjogMC4wNlxuICAgICAgICB9LFxuICAgICAgICB7XG4gICAgICAgICAgXCJuYW1lXCI6IFwiV2FycmlvciBJSVwiLFxuICAgICAgICAgIFwiYW1vdW50XCI6IDEsXG4gICAgICAgICAgXCJ1bml0c1wiOiBcIltmb3pfdXNdXCIsXG4gICAgICAgICAgXCJpZFwiOiBcImNiY2U2ZGMyLWM3OTAtNDE2Yi04NmM2LThiZTE2MTA0NWEwOVwiLFxuICAgICAgICAgIFwiZXJyb3JcIjogbnVsbCxcbiAgICAgICAgICBcInByaWNlXCI6IDUuMjUsXG4gICAgICAgICAgXCJvcmlnaW5hbEFtb3VudFwiOiAxXG4gICAgICAgIH1cbiAgICAgIF0sXG4gICAgICBcInNjaGVkdWxlXCI6IFtcbiAgICAgICAge1xuICAgICAgICAgIFwibGVuZ3RoXCI6IDEsXG4gICAgICAgICAgXCJ1bml0c1wiOiBcIm1vbnRoXCIsXG4gICAgICAgICAgXCJkYXRlXCI6IFwiMjAxNi0zLTFcIlxuICAgICAgICB9XG4gICAgICBdLFxuICAgICAgXCJ1bml0c1wiOiBcIlthY3JfdXNdXCIsXG4gICAgICBcInN1YnRvdGFsXCI6IDYuNjg4ODAwMDAwMDAwMDAwNSxcbiAgICAgIFwidG90YWxcIjogNi42ODg4MDAwMDAwMDAwMDA1LFxuICAgICAgXCJwZXJBY3JlXCI6IGZhbHNlXG4gICAgfSxcbiAgICB7XG4gICAgICBcIm5hbWVcIjogXCJJcnJpZ2F0aW9uLURpdGNoL0RyYWluIENyYXdsZXJcIixcbiAgICAgIFwibWF0ZXJpYWxzXCI6IFtcbiAgICAgICAge1xuICAgICAgICAgIFwibmFtZVwiOiBcIkRpdGNoZXIgLSBWXCIsXG4gICAgICAgICAgXCJhbW91bnRcIjogMC4xNixcbiAgICAgICAgICBcInVuaXRzXCI6IFwiaFwiLFxuICAgICAgICAgIFwiaWRcIjogXCJkOGYxMjY0Yy01MDEwLTQxMzEtYmQzOS1lMTA0MzlkMzNiYWNcIixcbiAgICAgICAgICBcImVycm9yXCI6IG51bGwsXG4gICAgICAgICAgXCJwcmljZVwiOiAwLjkyNDgsXG4gICAgICAgICAgXCJvcmlnaW5hbEFtb3VudFwiOiAwLjE2XG4gICAgICAgIH0sXG4gICAgICAgIHtcbiAgICAgICAgICBcIm5hbWVcIjogXCJFcXVpcG1lbnQgT3BlcmF0b3IgTGFib3JcIixcbiAgICAgICAgICBcImFtb3VudFwiOiAwLjE2LFxuICAgICAgICAgIFwidW5pdHNcIjogXCJoXCIsXG4gICAgICAgICAgXCJpZFwiOiBcImFhZDJiMTI0LWUwN2UtNDA1OS1iNjgwLTM4MTgzODcyYWJkMFwiLFxuICAgICAgICAgIFwiZXJyb3JcIjogbnVsbCxcbiAgICAgICAgICBcInByaWNlXCI6IDIuNzIsXG4gICAgICAgICAgXCJvcmlnaW5hbEFtb3VudFwiOiAwLjE2XG4gICAgICAgIH0sXG4gICAgICAgIHtcbiAgICAgICAgICBcIm5hbWVcIjogXCIyMDVIUCBDcmF3bGVyXCIsXG4gICAgICAgICAgXCJhbW91bnRcIjogMC4xNixcbiAgICAgICAgICBcInVuaXRzXCI6IFwiaFwiLFxuICAgICAgICAgIFwiaWRcIjogXCI5M2ExMjM3Mi1iOTM1LTQyZDYtODY3NC02MjcwYzQxNDFiNTFcIixcbiAgICAgICAgICBcImVycm9yXCI6IG51bGwsXG4gICAgICAgICAgXCJwcmljZVwiOiAxMS4wNDUxNTIsXG4gICAgICAgICAgXCJvcmlnaW5hbEFtb3VudFwiOiAwLjE2XG4gICAgICAgIH1cbiAgICAgIF0sXG4gICAgICBcInNjaGVkdWxlXCI6IFtcbiAgICAgICAge1xuICAgICAgICAgIFwibGVuZ3RoXCI6IDEsXG4gICAgICAgICAgXCJ1bml0c1wiOiBcIm1vbnRoXCIsXG4gICAgICAgICAgXCJkYXRlXCI6IFwiMjAxNi00LTFcIlxuICAgICAgICB9LFxuICAgICAgICB7XG4gICAgICAgICAgXCJsZW5ndGhcIjogMSxcbiAgICAgICAgICBcInVuaXRzXCI6IFwibW9udGhcIixcbiAgICAgICAgICBcImRhdGVcIjogXCIyMDE2LTctMVwiXG4gICAgICAgIH1cbiAgICAgIF0sXG4gICAgICBcInVuaXRzXCI6IFwiW2Fjcl91c11cIixcbiAgICAgIFwic3VidG90YWxcIjogMTQuNjg5OTUyLFxuICAgICAgXCJ0b3RhbFwiOiAyOS4zNzk5MDQsXG4gICAgICBcInBlckFjcmVcIjogZmFsc2VcbiAgICB9LFxuICAgIHtcbiAgICAgIFwibmFtZVwiOiBcIklycmlnYXRpb24tRGl0Y2gvRHJhaW4gVHJhY3RvclwiLFxuICAgICAgXCJtYXRlcmlhbHNcIjogW1xuICAgICAgICB7XG4gICAgICAgICAgXCJuYW1lXCI6IFwiMTUwSFA0V0QgVHJhY3RvclwiLFxuICAgICAgICAgIFwiYW1vdW50XCI6IDAuMixcbiAgICAgICAgICBcInVuaXRzXCI6IFwiaFwiLFxuICAgICAgICAgIFwiaWRcIjogXCJhMTIxOWJjZC1iMjkxLTQ2ZDMtYmFmNC1jNGJkYjk2YzUzNWNcIixcbiAgICAgICAgICBcImVycm9yXCI6IG51bGwsXG4gICAgICAgICAgXCJwcmljZVwiOiAxMC4wMDc3OCxcbiAgICAgICAgICBcIm9yaWdpbmFsQW1vdW50XCI6IDAuMlxuICAgICAgICB9LFxuICAgICAgICB7XG4gICAgICAgICAgXCJuYW1lXCI6IFwiUmVhciBCbGFkZSAtIDgnXCIsXG4gICAgICAgICAgXCJhbW91bnRcIjogMC4yLFxuICAgICAgICAgIFwidW5pdHNcIjogXCJoXCIsXG4gICAgICAgICAgXCJpZFwiOiBcIjEyMzJkZjkxLWI3ZTYtNDhjMS04ZGFkLTMxN2ViYWU2MzZkNFwiLFxuICAgICAgICAgIFwiZXJyb3JcIjogbnVsbCxcbiAgICAgICAgICBcInByaWNlXCI6IDAuNzAyLFxuICAgICAgICAgIFwib3JpZ2luYWxBbW91bnRcIjogMC4yXG4gICAgICAgIH0sXG4gICAgICAgIHtcbiAgICAgICAgICBcIm5hbWVcIjogXCJFcXVpcG1lbnQgT3BlcmF0b3IgTGFib3JcIixcbiAgICAgICAgICBcImFtb3VudFwiOiAwLjIsXG4gICAgICAgICAgXCJ1bml0c1wiOiBcImhcIixcbiAgICAgICAgICBcImlkXCI6IFwiMGNhNGViMTUtMTM4Yi00Y2U3LTk1MTctOGY5NzUxYjAxODc5XCIsXG4gICAgICAgICAgXCJlcnJvclwiOiBudWxsLFxuICAgICAgICAgIFwicHJpY2VcIjogMy40MDAwMDAwMDAwMDAwMDA0LFxuICAgICAgICAgIFwib3JpZ2luYWxBbW91bnRcIjogMC4yXG4gICAgICAgIH1cbiAgICAgIF0sXG4gICAgICBcInNjaGVkdWxlXCI6IFtcbiAgICAgICAge1xuICAgICAgICAgIFwibGVuZ3RoXCI6IDEsXG4gICAgICAgICAgXCJ1bml0c1wiOiBcIm1vbnRoXCIsXG4gICAgICAgICAgXCJkYXRlXCI6IFwiMjAxNi05LTFcIlxuICAgICAgICB9XG4gICAgICBdLFxuICAgICAgXCJ1bml0c1wiOiBcIlthY3JfdXNdXCIsXG4gICAgICBcInN1YnRvdGFsXCI6IDE0LjEwOTc4LFxuICAgICAgXCJ0b3RhbFwiOiAxNC4xMDk3OCxcbiAgICAgIFwicGVyQWNyZVwiOiBmYWxzZVxuICAgIH0sXG4gICAge1xuICAgICAgXCJuYW1lXCI6IFwiSXJyaWdhdGUtRmxvb2RcIixcbiAgICAgIFwibWF0ZXJpYWxzXCI6IFtcbiAgICAgICAge1xuICAgICAgICAgIFwibmFtZVwiOiBcIldhdGVyLUFsZmFsZmEtUHVtcGVkXCIsXG4gICAgICAgICAgXCJhbW91bnRcIjogNixcbiAgICAgICAgICBcInVuaXRzXCI6IFwiW2Fjcl91c10uW2luX3VzXVwiLFxuICAgICAgICAgIFwiaWRcIjogXCJmOGFiNDg5Yy00NDMyLTRjZDktYTYzZS1jNjIxYjE0OGZiZTJcIixcbiAgICAgICAgICBcImVycm9yXCI6IG51bGwsXG4gICAgICAgICAgXCJwcmljZVwiOiA0NSxcbiAgICAgICAgICBcIm9yaWdpbmFsQW1vdW50XCI6IDZcbiAgICAgICAgfVxuICAgICAgXSxcbiAgICAgIFwic2NoZWR1bGVcIjogW1xuICAgICAgICB7XG4gICAgICAgICAgXCJsZW5ndGhcIjogMSxcbiAgICAgICAgICBcInVuaXRzXCI6IFwibW9udGhcIixcbiAgICAgICAgICBcImRhdGVcIjogXCIyMDE2LTQtMVwiXG4gICAgICAgIH0sXG4gICAgICAgIHtcbiAgICAgICAgICBcImxlbmd0aFwiOiAxLFxuICAgICAgICAgIFwidW5pdHNcIjogXCJtb250aFwiLFxuICAgICAgICAgIFwiZGF0ZVwiOiBcIjIwMTYtNS0xXCJcbiAgICAgICAgfSxcbiAgICAgICAge1xuICAgICAgICAgIFwibGVuZ3RoXCI6IDEsXG4gICAgICAgICAgXCJ1bml0c1wiOiBcIm1vbnRoXCIsXG4gICAgICAgICAgXCJkYXRlXCI6IFwiMjAxNi02LTFcIlxuICAgICAgICB9LFxuICAgICAgICB7XG4gICAgICAgICAgXCJsZW5ndGhcIjogMSxcbiAgICAgICAgICBcInVuaXRzXCI6IFwibW9udGhcIixcbiAgICAgICAgICBcImRhdGVcIjogXCIyMDE2LTctMVwiXG4gICAgICAgIH0sXG4gICAgICAgIHtcbiAgICAgICAgICBcImxlbmd0aFwiOiAxLFxuICAgICAgICAgIFwidW5pdHNcIjogXCJtb250aFwiLFxuICAgICAgICAgIFwiZGF0ZVwiOiBcIjIwMTYtNy0xXCJcbiAgICAgICAgfSxcbiAgICAgICAge1xuICAgICAgICAgIFwibGVuZ3RoXCI6IDEsXG4gICAgICAgICAgXCJ1bml0c1wiOiBcIm1vbnRoXCIsXG4gICAgICAgICAgXCJkYXRlXCI6IFwiMjAxNi04LTFcIlxuICAgICAgICB9LFxuICAgICAgICB7XG4gICAgICAgICAgXCJsZW5ndGhcIjogMSxcbiAgICAgICAgICBcInVuaXRzXCI6IFwibW9udGhcIixcbiAgICAgICAgICBcImRhdGVcIjogXCIyMDE2LTktMVwiXG4gICAgICAgIH1cbiAgICAgIF0sXG4gICAgICBcInVuaXRzXCI6IFwiW2Fjcl91c11cIixcbiAgICAgIFwic3VidG90YWxcIjogNDUsXG4gICAgICBcInRvdGFsXCI6IDMxNSxcbiAgICAgIFwicGVyQWNyZVwiOiBmYWxzZVxuICAgIH0sXG4gICAge1xuICAgICAgXCJuYW1lXCI6IFwiSW5zZWN0cy1Xb3JtcyBDb3JhZ2VuXCIsXG4gICAgICBcIm1hdGVyaWFsc1wiOiBbXG4gICAgICAgIHtcbiAgICAgICAgICBcIm5hbWVcIjogXCJBVFZcIixcbiAgICAgICAgICBcImFtb3VudFwiOiAwLjA2LFxuICAgICAgICAgIFwidW5pdHNcIjogXCJoXCIsXG4gICAgICAgICAgXCJpZFwiOiBcIjNlNGQ5ZWUwLTk5ZTItNDRiYy05MzJjLTAzYmJkZTVkMTU2MVwiLFxuICAgICAgICAgIFwiZXJyb3JcIjogbnVsbCxcbiAgICAgICAgICBcInByaWNlXCI6IDAuNDE4Nzk5OTk5OTk5OTk5OTUsXG4gICAgICAgICAgXCJvcmlnaW5hbEFtb3VudFwiOiAwLjA2XG4gICAgICAgIH0sXG4gICAgICAgIHtcbiAgICAgICAgICBcIm5hbWVcIjogXCJFcXVpcG1lbnQgT3BlcmF0b3IgTGFib3JcIixcbiAgICAgICAgICBcImFtb3VudFwiOiAwLjA2LFxuICAgICAgICAgIFwidW5pdHNcIjogXCJoXCIsXG4gICAgICAgICAgXCJpZFwiOiBcIjBmNzk3OWE4LTFhNGMtNDM5NC1iNDFhLTQzMDUwMjc5YjNiZFwiLFxuICAgICAgICAgIFwiZXJyb3JcIjogbnVsbCxcbiAgICAgICAgICBcInByaWNlXCI6IDEuMDIsXG4gICAgICAgICAgXCJvcmlnaW5hbEFtb3VudFwiOiAwLjA2XG4gICAgICAgIH0sXG4gICAgICAgIHtcbiAgICAgICAgICBcIm5hbWVcIjogXCJDb3JhZ2VuXCIsXG4gICAgICAgICAgXCJhbW91bnRcIjogMixcbiAgICAgICAgICBcInVuaXRzXCI6IFwiW2Zvel91c11cIixcbiAgICAgICAgICBcImlkXCI6IFwiMDZkMTVjNzYtYjg1Zi00ODM3LWExMzgtYTA2MWM4ZTUxNGMyXCIsXG4gICAgICAgICAgXCJlcnJvclwiOiBudWxsLFxuICAgICAgICAgIFwicHJpY2VcIjogMjAuNSxcbiAgICAgICAgICBcIm9yaWdpbmFsQW1vdW50XCI6IDJcbiAgICAgICAgfSxcbiAgICAgICAge1xuICAgICAgICAgIFwibmFtZVwiOiBcIkFUViBTcHJheWVyIFN5c3RlbVwiLFxuICAgICAgICAgIFwiYW1vdW50XCI6IDAuMDYsXG4gICAgICAgICAgXCJ1bml0c1wiOiBcImhcIixcbiAgICAgICAgICBcImlkXCI6IFwiZDVkZTczZjctZmJiNi00ZWZhLWE2YmEtOTc1YzRlNTVlMjU3XCIsXG4gICAgICAgICAgXCJlcnJvclwiOiBudWxsLFxuICAgICAgICAgIFwicHJpY2VcIjogMC40MzYyLFxuICAgICAgICAgIFwib3JpZ2luYWxBbW91bnRcIjogMC4wNlxuICAgICAgICB9XG4gICAgICBdLFxuICAgICAgXCJzY2hlZHVsZVwiOiBbXG4gICAgICAgIHtcbiAgICAgICAgICBcImxlbmd0aFwiOiAxLFxuICAgICAgICAgIFwidW5pdHNcIjogXCJtb250aFwiLFxuICAgICAgICAgIFwiZGF0ZVwiOiBcIjIwMTYtNy0xXCJcbiAgICAgICAgfVxuICAgICAgXSxcbiAgICAgIFwidW5pdHNcIjogXCJbYWNyX3VzXVwiLFxuICAgICAgXCJzdWJ0b3RhbFwiOiAyMi4zNzUsXG4gICAgICBcInRvdGFsXCI6IDIyLjM3NSxcbiAgICAgIFwicGVyQWNyZVwiOiBmYWxzZVxuICAgIH0sXG4gICAge1xuICAgICAgXCJuYW1lXCI6IFwiSW5zZWN0cy1Xb3JtcyBCZWx0IFNDXCIsXG4gICAgICBcIm1hdGVyaWFsc1wiOiBbXG4gICAgICAgIHtcbiAgICAgICAgICBcIm5hbWVcIjogXCJBVFYgU3ByYXllciBTeXN0ZW1cIixcbiAgICAgICAgICBcImFtb3VudFwiOiAwLjA2LFxuICAgICAgICAgIFwidW5pdHNcIjogXCJoXCIsXG4gICAgICAgICAgXCJpZFwiOiBcIjI0MTc0YjRhLTA4MDgtNGE4MS05NmQ4LWJjNzljZDFmNmJkYVwiLFxuICAgICAgICAgIFwiZXJyb3JcIjogbnVsbCxcbiAgICAgICAgICBcInByaWNlXCI6IDAuNDM2MixcbiAgICAgICAgICBcIm9yaWdpbmFsQW1vdW50XCI6IDAuMDZcbiAgICAgICAgfSxcbiAgICAgICAge1xuICAgICAgICAgIFwibmFtZVwiOiBcIkFUVlwiLFxuICAgICAgICAgIFwiYW1vdW50XCI6IDAuMDYsXG4gICAgICAgICAgXCJ1bml0c1wiOiBcImhcIixcbiAgICAgICAgICBcImlkXCI6IFwiMWVkNTc3M2QtM2U1Yi00OTJmLWE2YzQtNjdmMThlM2IzZmYxXCIsXG4gICAgICAgICAgXCJlcnJvclwiOiBudWxsLFxuICAgICAgICAgIFwicHJpY2VcIjogMC40MTg3OTk5OTk5OTk5OTk5NSxcbiAgICAgICAgICBcIm9yaWdpbmFsQW1vdW50XCI6IDAuMDZcbiAgICAgICAgfSxcbiAgICAgICAge1xuICAgICAgICAgIFwibmFtZVwiOiBcIkVxdWlwbWVudCBPcGVyYXRvciBMYWJvclwiLFxuICAgICAgICAgIFwiYW1vdW50XCI6IDAuMDYsXG4gICAgICAgICAgXCJ1bml0c1wiOiBcImhcIixcbiAgICAgICAgICBcImlkXCI6IFwiMmNiYzdiMjUtYTQwZi00OWZmLWFhMTQtY2Q0YTRkMDg0ZDc4XCIsXG4gICAgICAgICAgXCJlcnJvclwiOiBudWxsLFxuICAgICAgICAgIFwicHJpY2VcIjogMS4wMixcbiAgICAgICAgICBcIm9yaWdpbmFsQW1vdW50XCI6IDAuMDZcbiAgICAgICAgfSxcbiAgICAgICAge1xuICAgICAgICAgIFwibmFtZVwiOiBcIkJlbHQgU0NcIixcbiAgICAgICAgICBcImFtb3VudFwiOiAzLFxuICAgICAgICAgIFwidW5pdHNcIjogXCJbZm96X3VzXVwiLFxuICAgICAgICAgIFwiaWRcIjogXCIxOWMzYWFkMy1lZjE5LTQ0OTAtOTU4MS1iMzAxM2VkMDkyZDRcIixcbiAgICAgICAgICBcImVycm9yXCI6IG51bGwsXG4gICAgICAgICAgXCJwcmljZVwiOiAyOC4yMDAwMDAwMDAwMDAwMDMsXG4gICAgICAgICAgXCJvcmlnaW5hbEFtb3VudFwiOiAzXG4gICAgICAgIH1cbiAgICAgIF0sXG4gICAgICBcInNjaGVkdWxlXCI6IFtcbiAgICAgICAge1xuICAgICAgICAgIFwibGVuZ3RoXCI6IDEsXG4gICAgICAgICAgXCJ1bml0c1wiOiBcIm1vbnRoXCIsXG4gICAgICAgICAgXCJkYXRlXCI6IFwiMjAxNi04LTFcIlxuICAgICAgICB9XG4gICAgICBdLFxuICAgICAgXCJ1bml0c1wiOiBcIlthY3JfdXNdXCIsXG4gICAgICBcInN1YnRvdGFsXCI6IDMwLjA3NTAwMDAwMDAwMDAwMyxcbiAgICAgIFwidG90YWxcIjogMzAuMDc1MDAwMDAwMDAwMDAzLFxuICAgICAgXCJwZXJBY3JlXCI6IGZhbHNlXG4gICAgfSxcbiAgICB7XG4gICAgICBcIm5hbWVcIjogXCJJcnJpZ2F0aW9uIExhYm9yXCIsXG4gICAgICBcIm1hdGVyaWFsc1wiOiBbXG4gICAgICAgIHtcbiAgICAgICAgICBcIm5hbWVcIjogXCJJcnJpZ2F0aW9uIExhYm9yIFwiLFxuICAgICAgICAgIFwiYW1vdW50XCI6IDAuMzMzLFxuICAgICAgICAgIFwidW5pdHNcIjogXCJoXCIsXG4gICAgICAgICAgXCJpZFwiOiBcImQ1ZTBlMzAzLWZmMzQtNDNjMC1hYmFiLTdiNWJjODljZWYyNVwiLFxuICAgICAgICAgIFwiZXJyb3JcIjogbnVsbCxcbiAgICAgICAgICBcInByaWNlXCI6IDguOTkxLFxuICAgICAgICAgIFwib3JpZ2luYWxBbW91bnRcIjogMC4zMzNcbiAgICAgICAgfVxuICAgICAgXSxcbiAgICAgIFwic2NoZWR1bGVcIjogW1xuICAgICAgICB7XG4gICAgICAgICAgXCJsZW5ndGhcIjogMSxcbiAgICAgICAgICBcInVuaXRzXCI6IFwibW9udGhcIixcbiAgICAgICAgICBcImRhdGVcIjogXCIyMDE2LTktMVwiXG4gICAgICAgIH1cbiAgICAgIF0sXG4gICAgICBcInVuaXRzXCI6IFwiW2Fjcl91c11cIixcbiAgICAgIFwic3VidG90YWxcIjogOC45OTEsXG4gICAgICBcInRvdGFsXCI6IDguOTkxLFxuICAgICAgXCJwZXJBY3JlXCI6IGZhbHNlXG4gICAgfSxcbiAgICB7XG4gICAgICBcIm5hbWVcIjogXCJQaWNrdXAgMS8yIFRvblwiLFxuICAgICAgXCJtYXRlcmlhbHNcIjogW1xuICAgICAgICB7XG4gICAgICAgICAgXCJuYW1lXCI6IFwiUGlja3VwIDEvMiBUb25cIixcbiAgICAgICAgICBcImFtb3VudFwiOiAwLjU2LFxuICAgICAgICAgIFwidW5pdHNcIjogXCJoXCIsXG4gICAgICAgICAgXCJpZFwiOiBcIjBmODkyZTFjLWJlYmEtNGFlZi1iZWM1LTJjODFjNTJmZWRjYVwiLFxuICAgICAgICAgIFwiZXJyb3JcIjogbnVsbCxcbiAgICAgICAgICBcInByaWNlXCI6IDExLjMwOTIsXG4gICAgICAgICAgXCJvcmlnaW5hbEFtb3VudFwiOiAwLjU2XG4gICAgICAgIH0sXG4gICAgICAgIHtcbiAgICAgICAgICBcIm5hbWVcIjogXCJFcXVpcG1lbnQgT3BlcmF0b3IgTGFib3JcIixcbiAgICAgICAgICBcImFtb3VudFwiOiAwLjU2LFxuICAgICAgICAgIFwidW5pdHNcIjogXCJoXCIsXG4gICAgICAgICAgXCJpZFwiOiBcIjExZDc1ZjIzLWViZTAtNDY2NC1iNGU5LTBmYWRiNDk5MjI5MlwiLFxuICAgICAgICAgIFwiZXJyb3JcIjogbnVsbCxcbiAgICAgICAgICBcInByaWNlXCI6IDkuNTIwMDAwMDAwMDAwMDAxLFxuICAgICAgICAgIFwib3JpZ2luYWxBbW91bnRcIjogMC41NlxuICAgICAgICB9XG4gICAgICBdLFxuICAgICAgXCJzY2hlZHVsZVwiOiBbXG4gICAgICAgIHtcbiAgICAgICAgICBcImxlbmd0aFwiOiAxLFxuICAgICAgICAgIFwidW5pdHNcIjogXCJtb250aFwiLFxuICAgICAgICAgIFwiZGF0ZVwiOiBcIjIwMTYtOS0xXCJcbiAgICAgICAgfVxuICAgICAgXSxcbiAgICAgIFwidW5pdHNcIjogXCJbYWNyX3VzXVwiLFxuICAgICAgXCJzdWJ0b3RhbFwiOiAyMC44MjkyLFxuICAgICAgXCJ0b3RhbFwiOiAyMC44MjkyLFxuICAgICAgXCJwZXJBY3JlXCI6IGZhbHNlXG4gICAgfSxcbiAgICB7XG4gICAgICBcIm5hbWVcIjogXCJIYXJ2ZXN0LVN3YXRoaW5nXCIsXG4gICAgICBcIm1hdGVyaWFsc1wiOiBbXG4gICAgICAgIHtcbiAgICAgICAgICBcIm5hbWVcIjogXCJTd2F0aGVyIDE2J1wiLFxuICAgICAgICAgIFwiYW1vdW50XCI6IDAuMTMsXG4gICAgICAgICAgXCJ1bml0c1wiOiBcImhcIixcbiAgICAgICAgICBcImlkXCI6IFwiYTE4MDg5NDAtYmQ2OS00ZjVlLTk0ZjctMzM5NmQ5ZDJjYTk1XCIsXG4gICAgICAgICAgXCJlcnJvclwiOiBudWxsLFxuICAgICAgICAgIFwicHJpY2VcIjogMTEuMTgxMzEzLFxuICAgICAgICAgIFwib3JpZ2luYWxBbW91bnRcIjogMC4xM1xuICAgICAgICB9LFxuICAgICAgICB7XG4gICAgICAgICAgXCJuYW1lXCI6IFwiRXF1aXBtZW50IE9wZXJhdG9yIExhYm9yXCIsXG4gICAgICAgICAgXCJhbW91bnRcIjogMC4xMyxcbiAgICAgICAgICBcInVuaXRzXCI6IFwiaFwiLFxuICAgICAgICAgIFwiaWRcIjogXCI2MTE2MWVjMi1iYTM0LTQ5YzYtYWE0Yy0yNTJhYjg0OTY2NzBcIixcbiAgICAgICAgICBcImVycm9yXCI6IG51bGwsXG4gICAgICAgICAgXCJwcmljZVwiOiAyLjIxLFxuICAgICAgICAgIFwib3JpZ2luYWxBbW91bnRcIjogMC4xM1xuICAgICAgICB9XG4gICAgICBdLFxuICAgICAgXCJzY2hlZHVsZVwiOiBbXG4gICAgICAgIHtcbiAgICAgICAgICBcImxlbmd0aFwiOiAxLFxuICAgICAgICAgIFwidW5pdHNcIjogXCJtb250aFwiLFxuICAgICAgICAgIFwiZGF0ZVwiOiBcIjIwMTYtNC0xXCJcbiAgICAgICAgfSxcbiAgICAgICAge1xuICAgICAgICAgIFwibGVuZ3RoXCI6IDEsXG4gICAgICAgICAgXCJ1bml0c1wiOiBcIm1vbnRoXCIsXG4gICAgICAgICAgXCJkYXRlXCI6IFwiMjAxNi01LTFcIlxuICAgICAgICB9LFxuICAgICAgICB7XG4gICAgICAgICAgXCJsZW5ndGhcIjogMSxcbiAgICAgICAgICBcInVuaXRzXCI6IFwibW9udGhcIixcbiAgICAgICAgICBcImRhdGVcIjogXCIyMDE2LTYtMVwiXG4gICAgICAgIH0sXG4gICAgICAgIHtcbiAgICAgICAgICBcImxlbmd0aFwiOiAxLFxuICAgICAgICAgIFwidW5pdHNcIjogXCJtb250aFwiLFxuICAgICAgICAgIFwiZGF0ZVwiOiBcIjIwMTYtNy0xXCJcbiAgICAgICAgfSxcbiAgICAgICAge1xuICAgICAgICAgIFwibGVuZ3RoXCI6IDEsXG4gICAgICAgICAgXCJ1bml0c1wiOiBcIm1vbnRoXCIsXG4gICAgICAgICAgXCJkYXRlXCI6IFwiMjAxNi04LTFcIlxuICAgICAgICB9LFxuICAgICAgICB7XG4gICAgICAgICAgXCJsZW5ndGhcIjogMSxcbiAgICAgICAgICBcInVuaXRzXCI6IFwibW9udGhcIixcbiAgICAgICAgICBcImRhdGVcIjogXCIyMDE2LTktMVwiXG4gICAgICAgIH1cbiAgICAgIF0sXG4gICAgICBcInVuaXRzXCI6IFwiW2Fjcl91c11cIixcbiAgICAgIFwic3VidG90YWxcIjogMTMuMzkxMzEzLFxuICAgICAgXCJ0b3RhbFwiOiA4MC4zNDc4NzgwMDAwMDAwMSxcbiAgICAgIFwicGVyQWNyZVwiOiBmYWxzZVxuICAgIH0sXG4gICAge1xuICAgICAgXCJuYW1lXCI6IFwiUGlja3VwIDMvNCBUb25cIixcbiAgICAgIFwibWF0ZXJpYWxzXCI6IFtcbiAgICAgICAge1xuICAgICAgICAgIFwibmFtZVwiOiBcIlBpY2t1cCAzLzQgVG9uXCIsXG4gICAgICAgICAgXCJhbW91bnRcIjogMC40OCxcbiAgICAgICAgICBcInVuaXRzXCI6IFwiaFwiLFxuICAgICAgICAgIFwiaWRcIjogXCI3MmVmNzE1ZS00Yjk2LTQzODctOTU1Yi0yNThkMjVjZjMyZTlcIixcbiAgICAgICAgICBcImVycm9yXCI6IG51bGwsXG4gICAgICAgICAgXCJwcmljZVwiOiAxMS4wMTEyLFxuICAgICAgICAgIFwib3JpZ2luYWxBbW91bnRcIjogMC40OFxuICAgICAgICB9LFxuICAgICAgICB7XG4gICAgICAgICAgXCJuYW1lXCI6IFwiRXF1aXBtZW50IE9wZXJhdG9yIExhYm9yXCIsXG4gICAgICAgICAgXCJhbW91bnRcIjogMC40OCxcbiAgICAgICAgICBcInVuaXRzXCI6IFwiaFwiLFxuICAgICAgICAgIFwiaWRcIjogXCJmYWY5NTAwNi02MzljLTQ4ZDYtOWU2MS0yYzYwMDY0MmVkOTVcIixcbiAgICAgICAgICBcImVycm9yXCI6IG51bGwsXG4gICAgICAgICAgXCJwcmljZVwiOiA4LjE2LFxuICAgICAgICAgIFwib3JpZ2luYWxBbW91bnRcIjogMC40OFxuICAgICAgICB9XG4gICAgICBdLFxuICAgICAgXCJzY2hlZHVsZVwiOiBbXG4gICAgICAgIHtcbiAgICAgICAgICBcImxlbmd0aFwiOiAxLFxuICAgICAgICAgIFwidW5pdHNcIjogXCJtb250aFwiLFxuICAgICAgICAgIFwiZGF0ZVwiOiBcIjIwMTYtOS0xXCJcbiAgICAgICAgfVxuICAgICAgXSxcbiAgICAgIFwidW5pdHNcIjogXCJbYWNyX3VzXVwiLFxuICAgICAgXCJzdWJ0b3RhbFwiOiAxOS4xNzEyLFxuICAgICAgXCJ0b3RhbFwiOiAxOS4xNzEyLFxuICAgICAgXCJwZXJBY3JlXCI6IGZhbHNlXG4gICAgfSxcbiAgICB7XG4gICAgICBcIm5hbWVcIjogXCJTZXJ2aWNlIFRydWNrXCIsXG4gICAgICBcIm1hdGVyaWFsc1wiOiBbXG4gICAgICAgIHtcbiAgICAgICAgICBcIm5hbWVcIjogXCJTZXJ2aWNlIFRydWNrXCIsXG4gICAgICAgICAgXCJhbW91bnRcIjogMC4yNCxcbiAgICAgICAgICBcInVuaXRzXCI6IFwiaFwiLFxuICAgICAgICAgIFwiaWRcIjogXCIyNzc4MmVlYi1mNTc2LTQ4ZTAtODRkZS04M2I2ZmVhYzAyN2NcIixcbiAgICAgICAgICBcImVycm9yXCI6IG51bGwsXG4gICAgICAgICAgXCJwcmljZVwiOiA0LjYwNjg3MixcbiAgICAgICAgICBcIm9yaWdpbmFsQW1vdW50XCI6IDAuMjRcbiAgICAgICAgfSxcbiAgICAgICAge1xuICAgICAgICAgIFwibmFtZVwiOiBcIkVxdWlwbWVudCBPcGVyYXRvciBMYWJvclwiLFxuICAgICAgICAgIFwiYW1vdW50XCI6IDAuMjQsXG4gICAgICAgICAgXCJ1bml0c1wiOiBcImhcIixcbiAgICAgICAgICBcImlkXCI6IFwiOGY1MTEyMDctM2Q0NS00YTE3LTg3ZTQtOWVkZGVkOWQ3Mzc0XCIsXG4gICAgICAgICAgXCJlcnJvclwiOiBudWxsLFxuICAgICAgICAgIFwicHJpY2VcIjogNC4wOCxcbiAgICAgICAgICBcIm9yaWdpbmFsQW1vdW50XCI6IDAuMjRcbiAgICAgICAgfVxuICAgICAgXSxcbiAgICAgIFwic2NoZWR1bGVcIjogW1xuICAgICAgICB7XG4gICAgICAgICAgXCJsZW5ndGhcIjogMSxcbiAgICAgICAgICBcInVuaXRzXCI6IFwibW9udGhcIixcbiAgICAgICAgICBcImRhdGVcIjogXCIyMDE2LTktMVwiXG4gICAgICAgIH1cbiAgICAgIF0sXG4gICAgICBcInVuaXRzXCI6IFwiW2Fjcl91c11cIixcbiAgICAgIFwic3VidG90YWxcIjogOC42ODY4NzIwMDAwMDAwMDEsXG4gICAgICBcInRvdGFsXCI6IDguNjg2ODcyMDAwMDAwMDAxLFxuICAgICAgXCJwZXJBY3JlXCI6IGZhbHNlXG4gICAgfSxcbiAgICB7XG4gICAgICBcIm5hbWVcIjogXCJIYXJ2ZXN0LVJha2luZ1wiLFxuICAgICAgXCJtYXRlcmlhbHNcIjogW1xuICAgICAgICB7XG4gICAgICAgICAgXCJuYW1lXCI6IFwiMzdIUCA0V0QgVHJhY3RvclwiLFxuICAgICAgICAgIFwiYW1vdW50XCI6IDAuMSxcbiAgICAgICAgICBcInVuaXRzXCI6IFwiaFwiLFxuICAgICAgICAgIFwiaWRcIjogXCI1MmY1YTBiNC1iYjEzLTRlNjctOTZkMi01NTgyMjc5NmVkNWFcIixcbiAgICAgICAgICBcImVycm9yXCI6IG51bGwsXG4gICAgICAgICAgXCJwcmljZVwiOiAwLjk0NDk0MDAwMDAwMDAwMDEsXG4gICAgICAgICAgXCJvcmlnaW5hbEFtb3VudFwiOiAwLjFcbiAgICAgICAgfSxcbiAgICAgICAge1xuICAgICAgICAgIFwibmFtZVwiOiBcIlJha2UgMjAnXCIsXG4gICAgICAgICAgXCJhbW91bnRcIjogMC4xLFxuICAgICAgICAgIFwidW5pdHNcIjogXCJoXCIsXG4gICAgICAgICAgXCJpZFwiOiBcIjgxZmNiMTAzLTljNzUtNDIxNS1hYzhiLWMwZmFhNDMxNGI0NFwiLFxuICAgICAgICAgIFwiZXJyb3JcIjogbnVsbCxcbiAgICAgICAgICBcInByaWNlXCI6IDEuMzk3LFxuICAgICAgICAgIFwib3JpZ2luYWxBbW91bnRcIjogMC4xXG4gICAgICAgIH0sXG4gICAgICAgIHtcbiAgICAgICAgICBcIm5hbWVcIjogXCJFcXVpcG1lbnQgT3BlcmF0b3IgTGFib3JcIixcbiAgICAgICAgICBcImFtb3VudFwiOiAwLjEsXG4gICAgICAgICAgXCJ1bml0c1wiOiBcImhcIixcbiAgICAgICAgICBcImlkXCI6IFwiZWFlYTM2MWYtZmExNS00ZTNmLThlMjgtYmFmYjI0NWE4NjE3XCIsXG4gICAgICAgICAgXCJlcnJvclwiOiBudWxsLFxuICAgICAgICAgIFwicHJpY2VcIjogMS43MDAwMDAwMDAwMDAwMDAyLFxuICAgICAgICAgIFwib3JpZ2luYWxBbW91bnRcIjogMC4xXG4gICAgICAgIH1cbiAgICAgIF0sXG4gICAgICBcInNjaGVkdWxlXCI6IFtcbiAgICAgICAge1xuICAgICAgICAgIFwibGVuZ3RoXCI6IDEsXG4gICAgICAgICAgXCJ1bml0c1wiOiBcIm1vbnRoXCIsXG4gICAgICAgICAgXCJkYXRlXCI6IFwiMjAxNi00LTFcIlxuICAgICAgICB9LFxuICAgICAgICB7XG4gICAgICAgICAgXCJsZW5ndGhcIjogMSxcbiAgICAgICAgICBcInVuaXRzXCI6IFwibW9udGhcIixcbiAgICAgICAgICBcImRhdGVcIjogXCIyMDE2LTUtMVwiXG4gICAgICAgIH0sXG4gICAgICAgIHtcbiAgICAgICAgICBcImxlbmd0aFwiOiAxLFxuICAgICAgICAgIFwidW5pdHNcIjogXCJtb250aFwiLFxuICAgICAgICAgIFwiZGF0ZVwiOiBcIjIwMTYtNi0xXCJcbiAgICAgICAgfSxcbiAgICAgICAge1xuICAgICAgICAgIFwibGVuZ3RoXCI6IDEsXG4gICAgICAgICAgXCJ1bml0c1wiOiBcIm1vbnRoXCIsXG4gICAgICAgICAgXCJkYXRlXCI6IFwiMjAxNi03LTFcIlxuICAgICAgICB9LFxuICAgICAgICB7XG4gICAgICAgICAgXCJsZW5ndGhcIjogMSxcbiAgICAgICAgICBcInVuaXRzXCI6IFwibW9udGhcIixcbiAgICAgICAgICBcImRhdGVcIjogXCIyMDE2LTgtMVwiXG4gICAgICAgIH0sXG4gICAgICAgIHtcbiAgICAgICAgICBcImxlbmd0aFwiOiAxLFxuICAgICAgICAgIFwidW5pdHNcIjogXCJtb250aFwiLFxuICAgICAgICAgIFwiZGF0ZVwiOiBcIjIwMTYtOS0xXCJcbiAgICAgICAgfVxuICAgICAgXSxcbiAgICAgIFwidW5pdHNcIjogXCJbYWNyX3VzXVwiLFxuICAgICAgXCJzdWJ0b3RhbFwiOiA0LjA0MTk0LFxuICAgICAgXCJ0b3RhbFwiOiAyNC4yNTE2NDAwMDAwMDAwMDIsXG4gICAgICBcInBlckFjcmVcIjogZmFsc2VcbiAgICB9LFxuICAgIHtcbiAgICAgIFwibmFtZVwiOiBcIkhhcnZlc3QtQmFsaW5nXCIsXG4gICAgICBcIm1hdGVyaWFsc1wiOiBbXG4gICAgICAgIHtcbiAgICAgICAgICBcIm5hbWVcIjogXCIxNTBIUDRXRCBUcmFjdG9yXCIsXG4gICAgICAgICAgXCJhbW91bnRcIjogMC4xNixcbiAgICAgICAgICBcInVuaXRzXCI6IFwiaFwiLFxuICAgICAgICAgIFwiaWRcIjogXCJlMTUwZTY4YS00MTA0LTQ5YWItODk3Yy0xNDFhNTcwY2E2ZGJcIixcbiAgICAgICAgICBcImVycm9yXCI6IG51bGwsXG4gICAgICAgICAgXCJwcmljZVwiOiA4LjAwNjIyNCxcbiAgICAgICAgICBcIm9yaWdpbmFsQW1vdW50XCI6IDAuMTZcbiAgICAgICAgfSxcbiAgICAgICAge1xuICAgICAgICAgIFwibmFtZVwiOiBcIkJhbGVyMTMwMCMgUFRPXCIsXG4gICAgICAgICAgXCJhbW91bnRcIjogMC4xNixcbiAgICAgICAgICBcInVuaXRzXCI6IFwiaFwiLFxuICAgICAgICAgIFwiaWRcIjogXCJjYjQ1ODBjYy0zOWQ3LTRkMWItYmY3ZC0xOWNmYmY3YzQ5ZGFcIixcbiAgICAgICAgICBcImVycm9yXCI6IG51bGwsXG4gICAgICAgICAgXCJwcmljZVwiOiAxMC42Njg4MDAwMDAwMDAwMDEsXG4gICAgICAgICAgXCJvcmlnaW5hbEFtb3VudFwiOiAwLjE2XG4gICAgICAgIH0sXG4gICAgICAgIHtcbiAgICAgICAgICBcIm5hbWVcIjogXCJFcXVpcG1lbnQgT3BlcmF0b3IgTGFib3JcIixcbiAgICAgICAgICBcImFtb3VudFwiOiAwLjE2LFxuICAgICAgICAgIFwidW5pdHNcIjogXCJoXCIsXG4gICAgICAgICAgXCJpZFwiOiBcIjQ2ZTE1N2ZhLTE0MGMtNGY5Ny04OGIzLTkxYjA1ODBmZjdhZFwiLFxuICAgICAgICAgIFwiZXJyb3JcIjogbnVsbCxcbiAgICAgICAgICBcInByaWNlXCI6IDIuNzIsXG4gICAgICAgICAgXCJvcmlnaW5hbEFtb3VudFwiOiAwLjE2XG4gICAgICAgIH0sXG4gICAgICAgIHtcbiAgICAgICAgICBcIm5hbWVcIjogXCJCYWxlIFR3aW5lXCIsXG4gICAgICAgICAgXCJhbW91bnRcIjogMC4xNCxcbiAgICAgICAgICBcInVuaXRzXCI6IFwiW2Fjcl91c11cIixcbiAgICAgICAgICBcImlkXCI6IFwiM2EzMGI1N2EtNzI3MC00MjY3LWI2NTktNWVmNTU0ODVlNjNlXCIsXG4gICAgICAgICAgXCJlcnJvclwiOiBudWxsLFxuICAgICAgICAgIFwicHJpY2VcIjogMC45ODAwMDAwMDAwMDAwMDAxLFxuICAgICAgICAgIFwib3JpZ2luYWxBbW91bnRcIjogMC4xNFxuICAgICAgICB9XG4gICAgICBdLFxuICAgICAgXCJzY2hlZHVsZVwiOiBbXG4gICAgICAgIHtcbiAgICAgICAgICBcImxlbmd0aFwiOiAxLFxuICAgICAgICAgIFwidW5pdHNcIjogXCJtb250aFwiLFxuICAgICAgICAgIFwiZGF0ZVwiOiBcIjIwMTYtNC0xXCJcbiAgICAgICAgfSxcbiAgICAgICAge1xuICAgICAgICAgIFwibGVuZ3RoXCI6IDEsXG4gICAgICAgICAgXCJ1bml0c1wiOiBcIm1vbnRoXCIsXG4gICAgICAgICAgXCJkYXRlXCI6IFwiMjAxNi01LTFcIlxuICAgICAgICB9LFxuICAgICAgICB7XG4gICAgICAgICAgXCJsZW5ndGhcIjogMSxcbiAgICAgICAgICBcInVuaXRzXCI6IFwibW9udGhcIixcbiAgICAgICAgICBcImRhdGVcIjogXCIyMDE2LTYtMVwiXG4gICAgICAgIH0sXG4gICAgICAgIHtcbiAgICAgICAgICBcImxlbmd0aFwiOiAxLFxuICAgICAgICAgIFwidW5pdHNcIjogXCJtb250aFwiLFxuICAgICAgICAgIFwiZGF0ZVwiOiBcIjIwMTYtNy0xXCJcbiAgICAgICAgfSxcbiAgICAgICAge1xuICAgICAgICAgIFwibGVuZ3RoXCI6IDEsXG4gICAgICAgICAgXCJ1bml0c1wiOiBcIm1vbnRoXCIsXG4gICAgICAgICAgXCJkYXRlXCI6IFwiMjAxNi04LTFcIlxuICAgICAgICB9LFxuICAgICAgICB7XG4gICAgICAgICAgXCJsZW5ndGhcIjogMSxcbiAgICAgICAgICBcInVuaXRzXCI6IFwibW9udGhcIixcbiAgICAgICAgICBcImRhdGVcIjogXCIyMDE2LTktMVwiXG4gICAgICAgIH1cbiAgICAgIF0sXG4gICAgICBcInVuaXRzXCI6IFwiW2Fjcl91c11cIixcbiAgICAgIFwic3VidG90YWxcIjogMjIuMzc1MDI0LFxuICAgICAgXCJ0b3RhbFwiOiAxMzQuMjUwMTQ0LFxuICAgICAgXCJwZXJBY3JlXCI6IGZhbHNlXG4gICAgfSxcbiAgICB7XG4gICAgICBcIm5hbWVcIjogXCJIYXJ2ZXN0LVJvYWRzaWRpbmdcIixcbiAgICAgIFwibWF0ZXJpYWxzXCI6IFtcbiAgICAgICAge1xuICAgICAgICAgIFwibmFtZVwiOiBcIkJhbGUgV2Fnb24gMTMwMCMgQXR0bVwiLFxuICAgICAgICAgIFwiYW1vdW50XCI6IDAuMTYsXG4gICAgICAgICAgXCJ1bml0c1wiOiBcImhcIixcbiAgICAgICAgICBcImlkXCI6IFwiZDQ4MmQ3MDEtMjdlYS00ZWEzLThiNDMtMjU1MDU5ODJmMmJhXCIsXG4gICAgICAgICAgXCJlcnJvclwiOiBudWxsLFxuICAgICAgICAgIFwicHJpY2VcIjogMTkuMTg4MDAwMDAwMDAwMDAyLFxuICAgICAgICAgIFwib3JpZ2luYWxBbW91bnRcIjogMC4xNlxuICAgICAgICB9LFxuICAgICAgICB7XG4gICAgICAgICAgXCJuYW1lXCI6IFwiRXF1aXBtZW50IE9wZXJhdG9yIExhYm9yXCIsXG4gICAgICAgICAgXCJhbW91bnRcIjogMC4xNixcbiAgICAgICAgICBcInVuaXRzXCI6IFwiaFwiLFxuICAgICAgICAgIFwiaWRcIjogXCJiZmFjMDg5Ni1kZTkzLTRlZGEtODBlNy1hYWU4ZTk0NjQyYjFcIixcbiAgICAgICAgICBcImVycm9yXCI6IG51bGwsXG4gICAgICAgICAgXCJwcmljZVwiOiAyLjcyLFxuICAgICAgICAgIFwib3JpZ2luYWxBbW91bnRcIjogMC4xNlxuICAgICAgICB9XG4gICAgICBdLFxuICAgICAgXCJzY2hlZHVsZVwiOiBbXG4gICAgICAgIHtcbiAgICAgICAgICBcImxlbmd0aFwiOiAxLFxuICAgICAgICAgIFwidW5pdHNcIjogXCJtb250aFwiLFxuICAgICAgICAgIFwiZGF0ZVwiOiBcIjIwMTYtNC0xXCJcbiAgICAgICAgfSxcbiAgICAgICAge1xuICAgICAgICAgIFwibGVuZ3RoXCI6IDEsXG4gICAgICAgICAgXCJ1bml0c1wiOiBcIm1vbnRoXCIsXG4gICAgICAgICAgXCJkYXRlXCI6IFwiMjAxNi01LTFcIlxuICAgICAgICB9LFxuICAgICAgICB7XG4gICAgICAgICAgXCJsZW5ndGhcIjogMSxcbiAgICAgICAgICBcInVuaXRzXCI6IFwibW9udGhcIixcbiAgICAgICAgICBcImRhdGVcIjogXCIyMDE2LTYtMVwiXG4gICAgICAgIH0sXG4gICAgICAgIHtcbiAgICAgICAgICBcImxlbmd0aFwiOiAxLFxuICAgICAgICAgIFwidW5pdHNcIjogXCJtb250aFwiLFxuICAgICAgICAgIFwiZGF0ZVwiOiBcIjIwMTYtNy0xXCJcbiAgICAgICAgfSxcbiAgICAgICAge1xuICAgICAgICAgIFwibGVuZ3RoXCI6IDEsXG4gICAgICAgICAgXCJ1bml0c1wiOiBcIm1vbnRoXCIsXG4gICAgICAgICAgXCJkYXRlXCI6IFwiMjAxNi04LTFcIlxuICAgICAgICB9LFxuICAgICAgICB7XG4gICAgICAgICAgXCJsZW5ndGhcIjogMSxcbiAgICAgICAgICBcInVuaXRzXCI6IFwibW9udGhcIixcbiAgICAgICAgICBcImRhdGVcIjogXCIyMDE2LTktMVwiXG4gICAgICAgIH1cbiAgICAgIF0sXG4gICAgICBcInVuaXRzXCI6IFwiW2Fjcl91c11cIixcbiAgICAgIFwic3VidG90YWxcIjogMjEuOTA4LFxuICAgICAgXCJ0b3RhbFwiOiAxMzEuNDQ4LFxuICAgICAgXCJwZXJBY3JlXCI6IGZhbHNlXG4gICAgfVxuICBdLFxuICBcImZhcm1cIjoge1xuICAgIFwidW5pdFwiOiBcIlthY3JfdXNdXCIsXG4gICAgXCJzaXplXCI6IFwiMTAwXCIsXG4gICAgXCJjb21tb2RpdHlcIjogXCJBbGZhbGZhXCIsXG4gICAgXCJsb2NhdGlvblwiOiBcIk5vcnRoZXJuIENhbGlmb3JuaWFcIixcbiAgICBcImZhcm1cIjogXCJnZW5lcmljXCJcbiAgfVxufVxuIiwibW9kdWxlLmV4cG9ydHM9e1xuICBcIm1hdGVyaWFsc1wiOiBbXSxcbiAgXCJvcGVyYXRpb25zXCI6IFtdLFxuICBcImZhcm1cIjoge1xuICAgIFwidW5pdFwiOiBcIlthY3JfdXNdXCIsXG4gICAgXCJzaXplXCI6IFwiMTAwXCIsXG4gICAgXCJjb21tb2RpdHlcIjogXCJcIixcbiAgICBcImxvY2F0aW9uXCI6IFwiXCIsXG4gICAgXCJmYXJtXCI6IFwiYmxhbmsgdGVzdFwiXG4gIH1cbn1cbiIsIm1vZHVsZS5leHBvcnRzPXtcbiAgXCJjbGFzc2VzXCI6IHtcbiAgICBcImZlcnRpbGl6ZXJcIjogW1xuICAgICAgXCIwLTAtNjBcIixcbiAgICAgIFwiMTAtMzQtMDBcIixcbiAgICAgIFwiMTEtNTItMFwiLFxuICAgICAgXCIxMy0wLTQ1XCIsXG4gICAgICBcIjE2LTE2LTE2XCIsXG4gICAgICBcIjE2LTIwLTAtMTRcIixcbiAgICAgIFwiMTgtMC01LTRcIixcbiAgICAgIFwiMiw0LURcIixcbiAgICAgIFwiMzItMC0wXCIsXG4gICAgICBcIjMzLTAtMC0xMlwiLFxuICAgICAgXCI0MC0wLTAtNlwiLFxuICAgICAgXCI0Ni0wLTBcIixcbiAgICAgIFwiODAtMC0wXCIsXG4gICAgICBcIjgwLTAwLTAwXCIsXG4gICAgICBcIkRyeSBOaXRyb2dlblwiLFxuICAgICAgXCJEcnkgTml0cm9nZW4gLSBQcmVwbGFudFwiLFxuICAgICAgXCJEcnkgUDJPNVwiLFxuICAgICAgXCJEcnkgUGhvc3BoYXRlXCIsXG4gICAgICBcIkRyeSBQb3Rhc2hcIixcbiAgICAgIFwiRHJ5IFN1bGZ1clwiLFxuICAgICAgXCJLMjBcIixcbiAgICAgIFwiSzJPXCIsXG4gICAgICBcIkxpcXVpZCBOaXRyb2dlblwiLFxuICAgICAgXCJMaXF1aWQgUDJPNVwiLFxuICAgICAgXCJNaWNyb251dHJpZW50c1wiLFxuICAgICAgXCJNdWxjaFwiLFxuICAgICAgXCJOaXRyb2dlblwiLFxuICAgICAgXCJOaXRyb2dlbiAoZHJ5KVwiLFxuICAgICAgXCJQaG9zcGhvcm91c1wiLFxuICAgICAgXCJQaG9zcGhvcm91cyAoZHJ5KVwiLFxuICAgICAgXCJTdWxmdXJcIixcbiAgICAgIFwiU3VsZnVyIChkcnkpXCIsXG4gICAgICBcIlN1bGZ1cmljIEFjaWRcIixcbiAgICAgIFwiU3VyZmFjdGFudC1JbmR1Y2VcIixcbiAgICAgIFwiVU4zMlwiLFxuICAgICAgXCJaaW5jXCIsXG4gICAgICBcIjIsNC1EXCJcbiAgICBdLFxuICAgIFwicGVzdGljaWRlXCI6IFtcbiAgICAgIFwiQWNoaWV2ZSBTQ1wiLFxuICAgICAgXCJBZG1pcmVcIixcbiAgICAgIFwiQWRtaXJlIFByb1wiLFxuICAgICAgXCJBaXIgQXBwbGljYXRpb25cIixcbiAgICAgIFwiQWxjYWxhXCIsXG4gICAgICBcIkFtbW9uaXVtIFN1bGZhdGVcIixcbiAgICAgIFwiQU1TXCIsXG4gICAgICBcIkFwb2dlZVwiLFxuICAgICAgXCJBc3NhaWwgNzBXUFwiLFxuICAgICAgXCJBc3Nlc21lbnRcIixcbiAgICAgIFwiQXNzdXJlIElJXCIsXG4gICAgICBcIkF4aW9tIExCXCIsXG4gICAgICBcIkF4aW9tIE9aXCIsXG4gICAgICBcIkJhbGVcIixcbiAgICAgIFwiQmFsaW5nXCIsXG4gICAgICBcIkJhbnZlbFwiLFxuICAgICAgXCJCZWUgSGl2ZXNcIixcbiAgICAgIFwiQnJhdm9cIixcbiAgICAgIFwiQnJvYWRjYXN0IEZlcnRpbGl6ZXJcIixcbiAgICAgIFwiQnJveCBNXCIsXG4gICAgICBcIkNhcmJpbmUgNTBXR1wiLFxuICAgICAgXCJDbGFyaXR5XCIsXG4gICAgICBcIkNvdW50ZXIgMTVHIEwtTi1MXCIsXG4gICAgICBcIkRhY3RoYWxcIixcbiAgICAgIFwiRGVmb2wgNVwiLFxuICAgICAgXCJEZXZyaW5vbCA1MERGXCIsXG4gICAgICBcIkRpbWV0aG9hdGVcIixcbiAgICAgIFwiRGlvbWV0aGF0ZVwiLFxuICAgICAgXCJEaXNjb3ZlclwiLFxuICAgICAgXCJEaXN5c3RvblwiLFxuICAgICAgXCJEaS1TeXN0b25cIixcbiAgICAgIFwiRGl0aGFuZSBGNDUgUmFpbnNoaWVsZFwiLFxuICAgICAgXCJEaXVyb25cIixcbiAgICAgIFwiRW5kdXJhICgyeClcIixcbiAgICAgIFwiRXB0YW0gN0VDXCIsXG4gICAgICBcIkV4Y2VsIDkwXCIsXG4gICAgICBcIkZhci1HT1wiLFxuICAgICAgXCJGaW5pc2ggNiBQcm9cIixcbiAgICAgIFwiR2VuIDI1V0dcIixcbiAgICAgIFwiR2luc3RhclwiLFxuICAgICAgXCJHbHlwaG9zYXRlIEdBTDFcIixcbiAgICAgIFwiR29hbFwiLFxuICAgICAgXCJHb2FsIFRlbmRlclwiLFxuICAgICAgXCJIYXJtb255IEV4dHJhXCIsXG4gICAgICBcIkhlYWRsaW5lXCIsXG4gICAgICBcIkthcm1leFwiLFxuICAgICAgXCJLYXJtZXggREZcIixcbiAgICAgIFwiS2VyYlwiLFxuICAgICAgXCJMYW5uYXRlIDkwIFNQXCIsXG4gICAgICBcIkxldmVyYWdlXCIsXG4gICAgICBcIkxldmVyYWdlIDIuN1wiLFxuICAgICAgXCJMSSA3MDBcIixcbiAgICAgIFwiTG9yc2JhbiAxNUdcIixcbiAgICAgIFwiTG9yc2JhbiA0RVwiLFxuICAgICAgXCJNOTBcIixcbiAgICAgIFwiTWFsYXRoaW9uXCIsXG4gICAgICBcIk1hdmVyaWNrXCIsXG4gICAgICBcIk1DUEEgQW1pbmVcIixcbiAgICAgIFwiTWVwZXggR2luIE91clwiLFxuICAgICAgXCJNZXRhbSBTb2RpdW1cIixcbiAgICAgIFwiTWljcm8tVGVjaFwiLFxuICAgICAgXCJNdXN0YW5nIDEuNSBFV1wiLFxuICAgICAgXCJPYmVyb24gMjVDXCIsXG4gICAgICBcIk9ydGhlbmVcIixcbiAgICAgIFwiT3NwcmV5XCIsXG4gICAgICBcIk91dGxvb2sgNkVDXCIsXG4gICAgICBcIlByaXN0aW5lXCIsXG4gICAgICBcIlByb3dsXCIsXG4gICAgICBcIlByb3dsIDMuM0VDXCIsXG4gICAgICBcIlByb3dsIEgyMFwiLFxuICAgICAgXCJQdW1hIDFFQ1wiLFxuICAgICAgXCJQdXJzdWl0XCIsXG4gICAgICBcIlF1YWRyaXNcIixcbiAgICAgIFwiUXVpbHRcIixcbiAgICAgIFwiUmFsbHkgNDAgV1NQXCIsXG4gICAgICBcIlJlZ2xvbmVcIixcbiAgICAgIFwiUmlkb21pbCBHb2xkIEVDXCIsXG4gICAgICBcIlJvdW5kdXBcIixcbiAgICAgIFwiUm91bmR1cCBPcmlnaW5hbCBNYXhcIixcbiAgICAgIFwiUm91bmR1cCBVbHRyYSBNYXhcIixcbiAgICAgIFwiU2VsZWN0IE1heFwiLFxuICAgICAgXCJTZW5jb3JcIixcbiAgICAgIFwiU2VuY29yIDRMXCIsXG4gICAgICBcIlNlbmNvciA3NURGXCIsXG4gICAgICBcIlNldmluIFhMUiBQbHVzXCIsXG4gICAgICBcIlNoYXJrIEVXXCIsXG4gICAgICBcIlNsdWcgQmFpdFwiLFxuICAgICAgXCJTb25hbGFuIEhGUFwiLFxuICAgICAgXCJTcG90IFNwcmF5IFJvdW5kdXBcIixcbiAgICAgIFwiU3RhcGxlXCIsXG4gICAgICBcIlN0YXJhbmUrU2Fsdm9cIixcbiAgICAgIFwiU3RhcmFuZStTd29yZFwiLFxuICAgICAgXCJTdHJhdGVnb1wiLFxuICAgICAgXCJTdWNjZXNzXCIsXG4gICAgICBcIlN1cmZsYW4gQVNcIixcbiAgICAgIFwiU3luYXBzZSBXR1wiLFxuICAgICAgXCJUZWxvbmUgSUlcIixcbiAgICAgIFwiVHJlZmxhbiA0SEZQXCIsXG4gICAgICBcIlRyZWZsYW4gRlBcIixcbiAgICAgIFwiVHJlZmxhbiBUUiAxMFwiLFxuICAgICAgXCJUcmlmbHVyZXggSEZQXCIsXG4gICAgICBcIlZlbHBhciBMXCIsXG4gICAgICBcIkNvcmFnZW5cIixcbiAgICAgIFwiRGltaWxpblwiLFxuICAgICAgXCJGdXNpbGFkZVwiLFxuICAgICAgXCJHbHlwaG9zYXRlXCIsXG4gICAgICBcIkdvYWwgMlhMXCIsXG4gICAgICBcIkltaWRhY2xvcHJpZDVcIixcbiAgICAgIFwiT3VzdFwiLFxuICAgICAgXCJTdXJlZ3VhcmRcIixcbiAgICAgIFwiVHJhbnNsaW5lXCIsXG4gICAgICBcIlRyaWZsdXJhbGluXCJcbiAgICBdLFxuICAgIFwic2VlZFwiOiBbXG4gICAgICBcIkJhcmxleSBTZWVkXCIsXG4gICAgICBcIkNhbm9sYSBTZWVkXCIsXG4gICAgICBcIkNvcm4gU2VlZFwiLFxuICAgICAgXCJMZW50aWwgU2VlZFwiLFxuICAgICAgXCJQb3RhdG8gU2VlZFwiLFxuICAgICAgXCJTb3JnaHVtIFNlZWRcIixcbiAgICAgIFwiU3VzYW4gU2VlZFwiLFxuICAgICAgXCJXaGVhdCBTZWVkXCIsXG4gICAgICBcIlBvcGxhciBDdXR0aW5nXCJcbiAgICBdLFxuICAgIFwicHJvY2Vzc2luZ1wiOiBbXG4gICAgICBcIkNhcHR1cmVcIixcbiAgICAgIFwiQ2xlYW4gU2VlZCBPcmNoZGdyXCIsXG4gICAgICBcIkNvbW1pc2lvbiBBc3Nlc3NcIixcbiAgICAgIFwiQ29tbWlzc2lvbiBBc3Nlc3NcIixcbiAgICAgIFwiQ29uc3VsdGFudFwiLFxuICAgICAgXCJDb3R0b24gQXNzZXNtZW50XCIsXG4gICAgICBcIkN1c3RvbSBBZXJpYWwgU3ByYXlcIixcbiAgICAgIFwiQ3VzdG9tIEFpciBTcHJheVwiLFxuICAgICAgXCJDdXN0b20gQWlyIFNwcmF5IC0gNUdcIixcbiAgICAgIFwiQ3VzdG9tIENvbWJpbmluZ1wiLFxuICAgICAgXCJDdXN0b20gRmVydGlsaXplXCIsXG4gICAgICBcIkN1c3RvbSBGdW1pZ2F0ZSAtIERlZXBcIixcbiAgICAgIFwiQ3VzdG9tIFNpZGVkcmVzc1wiLFxuICAgICAgXCJDdXQvV2luZHJvd1wiLFxuICAgICAgXCJGZWVzIEFzc2VzbWVudFwiLFxuICAgICAgXCJGdW1pZ2F0aW9uXCIsXG4gICAgICBcIkdyb3VuZCBBcHBsaWNhdGlvblwiLFxuICAgICAgXCJIYXJ2ZXN0XCIsXG4gICAgICBcIkhhcnZlc3QgQ29tYmluZSBHcmFpblwiLFxuICAgICAgXCJIYXJ2ZXN0IGZvciBHcmFpblwiLFxuICAgICAgXCJIYXJ2ZXN0OiBIYXVsIEdyYWluXCIsXG4gICAgICBcIkhhdWwgYW5kIFN0YWNrXCIsXG4gICAgICBcIkhhdWwgTG9jYWxcIixcbiAgICAgIFwiSW5qZWN0aW9uLVNpZGVkcmVzc1wiLFxuICAgICAgXCJJbmplY3Rpb24tU2lkZWRyZXNzIE5IM1wiLFxuICAgICAgXCJJbnNlY3RpY2lkZVwiLFxuICAgICAgXCJNYW5hZ2VtZW50XCIsXG4gICAgICBcIlBlc3QgQ29udHJvbCBDb25zdWx0YW50XCIsXG4gICAgICBcIlBvbmNobyBCZXRhIFNlZWQgVHJlYXRtZW50XCIsXG4gICAgICBcIlJlbnRhbCBGZXJ0aWxpemVyIEFwcGxpY2F0b3JcIixcbiAgICAgIFwiUmVudGFsIFJpcHBlciBTaG9vdGVyXCIsXG4gICAgICBcIlJlbnRhbCBTcHJheWVyXCIsXG4gICAgICBcIlJlcGFpclwiLFxuICAgICAgXCJSaXBlciBTaG9vdGVyXCIsXG4gICAgICBcIlJvYWRzaWRlIEJhbGVzXCIsXG4gICAgICBcIlJvYWRzaWRlIEhheVwiLFxuICAgICAgXCJTZWVkIENsZWFuIGFuZCBCYWdcIixcbiAgICAgIFwiU2VlZCBDbGVhbmQgYW5kIEJhZ1wiLFxuICAgICAgXCJTZWVkIFRlc3RcIixcbiAgICAgIFwiU3RvcmFnZSBPcGVyYXRpbmcgQ29zdHNcIixcbiAgICAgIFwiU3RvcmFnZSBSZXBhaXJzXCIsXG4gICAgICBcIlN1Z2FyYmVldFwiLFxuICAgICAgXCJTd2F0aFwiLFxuICAgICAgXCJTd2F0aGluZ1wiLFxuICAgICAgXCJUYXJwaW5nXCIsXG4gICAgICBcIlRpc3N1ZSBBbmFseXNpc1wiLFxuICAgICAgXCJUcmFuc3BvcnRcIixcbiAgICAgIFwiVHJhbnNwb3J0IHRvIFBEWFwiLFxuICAgICAgXCJXYXRlciBBc3Nlc21lbnRcIixcbiAgICAgIFwiV2hlYXQgQXNzZXNtZW50XCJcbiAgICBdLFxuICAgIFwibGFib3JcIjogW1xuICAgICAgXCJDb21iaW5lXCIsXG4gICAgICBcIkNvbWJpbmUgV2hlYXRcIixcbiAgICAgIFwiQ29vbCBhbmQgUGFja1wiLFxuICAgICAgXCJHb3BoZXIgQ29udHJvbFwiLFxuICAgICAgXCJMYWJvciAoSXJyaWdhdGlvbilcIixcbiAgICAgIFwiTGFib3IgKE1hY2hpbmUpXCIsXG4gICAgICBcIkxhYm9yIChub24tbWFjaGluZSlcIixcbiAgICAgIFwiTGFib3IgKG90aGVyKVwiLFxuICAgICAgXCJNYWludGVuYW5jZVwiLFxuICAgICAgXCJNYWludGVuYW5jZSBhbmQgUmVwYWlyXCIsXG4gICAgICBcIm9lczQ1MjA5MVwiLFxuICAgICAgXCJvZXM0NTIwOTJcIixcbiAgICAgIFwib2VzNTMzMDMyXCIsXG4gICAgICBcIlBpY2sgQmVycmllc1wiLFxuICAgICAgXCJQbGFudFwiLFxuICAgICAgXCJQbGFudGluZ1wiLFxuICAgICAgXCJQb3N0aGFydmVzdCBhbmQgcGFja2FnaW5nXCIsXG4gICAgICBcIlJvZGVudCBDb250cm9sXCIsXG4gICAgICBcIlNwcmF5ZXJcIixcbiAgICAgIFwiU3R1YmxlIFNocmVkZGVyXCIsXG4gICAgICBcIlN3YXRoIFJha2VcIixcbiAgICAgIFwiV2VlZCBDb250cm9sXCIsXG4gICAgICBcIkxhYm9yLS0zLVdoZWVsIGFnIHNwcmF5ZXJcIixcbiAgICAgIFwiTGFib3ItLUNoYWxsZW5nZXIgdHJhY3RvclwiLFxuICAgICAgXCJMYWJvci0tQ29vbGVyL3ZhblwiLFxuICAgICAgXCJMYWJvci0tRlIgNjA4MCBGSFwiLFxuICAgICAgXCJMYWJvcmVyXCIsXG4gICAgICBcIkxhYm9yLS1MYXJnZSB0cmFjdG9yXCIsXG4gICAgICBcIkxhYm9yLS1NaWQtc2l6ZSB0cmFjdG9yXCIsXG4gICAgICBcIkxhYm9yLS1TZW1pLXRyYWN0b3IgdHJhaWxlclwiLFxuICAgICAgXCJMYWJvci0tU21hbGwgdHJhY3RvclwiLFxuICAgICAgXCJMYWJvci0tU3VwZXJ2aXNvclwiLFxuICAgICAgXCJMYWJvci0tU3VwcG9ydCBUcnVja1wiLFxuICAgICAgXCJMYWJvci0tVGFuZGVtIGF4bGUgdHJ1Y2tcIixcbiAgICAgIFwiTGFib3ItLVRyYWN0b3IgYW5kIFNwcmF5ZXJcIixcbiAgICAgIFwiaG9laW5nXCIsXG4gICAgICBcImhlcmJpY2lkZSAtIG1hbnVhbFwiXG4gICAgXSxcbiAgICBcImluc3VyYW5jZVwiOiBbXG4gICAgICBcIkNyb3AgSW5zdXJhbmNlXCJcbiAgICBdLFxuICAgIFwiYW55XCI6IFtcbiAgICAgIFwiZXN0aW1hdGVcIlxuICAgIF0sXG4gICAgXCJtYXRlcmlhbFwiOiBbXG4gICAgICBcIkZ1ZWxcIixcbiAgICAgIFwiRnVlbCAtIERpZXNlbFwiLFxuICAgICAgXCJGdWVsIC0gR2FzXCIsXG4gICAgICBcIkxpbWVcIixcbiAgICAgIFwiTHViZVwiLFxuICAgICAgXCJMdWJyaWNhbnRzXCIsXG4gICAgICBcIlBhY2tpbmdcIixcbiAgICAgIFwiUHVyaXR5IGFuZCBHZXJtXCIsXG4gICAgICBcIlJha2VcIixcbiAgICAgIFwiU2F3ZHVzdFwiLFxuICAgICAgXCJZdWtvblwiLFxuICAgICAgXCJaZXBoeXJcIlxuICAgIF0sXG4gICAgXCJ3YXRlclwiOiBbXG4gICAgICBcIklycmlnYXRpb25cIixcbiAgICAgIFwiV2F0ZXJcIixcbiAgICAgIFwiSXJyaWdhdGlvblwiXG4gICAgXSxcbiAgICBcInJlbnRcIjogW1xuICAgICAgXCJsYW5kLXJlbnQtaXJyaWdhdGVkXCIsXG4gICAgICBcImxhbmQtcmVudC1ub25pcnJpZ2F0ZWRcIixcbiAgICAgIFwibGFuZC1yZW50LXBhc3R1cmVcIlxuICAgIF0sXG4gICAgXCJlcXVpcG1lbnRcIjogW1xuICAgICAgXCIzLVdoZWVsIEFnIFNwcmF5ZXJcIixcbiAgICAgIFwiQ2hhbGxlbmdlciB0cmFjdG9yXCIsXG4gICAgICBcIkNvb2xlci92YW5cIixcbiAgICAgIFwiRWxpbWluYXRvclwiLFxuICAgICAgXCJGUiA2MDgwIEZIXCIsXG4gICAgICBcIkxhcmdlIHRyYWN0b3JcIixcbiAgICAgIFwiTWlkLXNpemUgdHJhY3RvclwiLFxuICAgICAgXCJTZW1pLXRyYWN0b3IgdHJhaWxlclwiLFxuICAgICAgXCJTbWFsbCB0cmFjdG9yXCIsXG4gICAgICBcIlN1cHBvcnQgVHJ1Y2tcIixcbiAgICAgIFwiVGFuZGVtIGF4bGUgdHJ1Y2tcIixcbiAgICAgIFwiVHJhY3RvciBhbmQgc3ByYXllclwiXG4gICAgXSxcbiAgICBcImZ1ZWxcIjogW1xuICAgICAgXCJFcXVpcG1lbnQgRnVlbFwiXG4gICAgXSxcbiAgICBcIltxdF91c11cIjogW1xuICAgICAgXCJSb3pvbFwiXG4gICAgXVxuICB9LFxuICBcIm1hdGVyaWFsc1wiOiBbXG4gICAge1xuICAgICAgXCJjbGFzc1wiOiBcImZlcnRpbGl6ZXJcIixcbiAgICAgIFwibmFtZVwiOiBcIjAtMC02MFwiLFxuICAgICAgXCJ0eXBlXCI6IFwic2ltcGxlXCJcbiAgICB9LFxuICAgIHtcbiAgICAgIFwiY2xhc3NcIjogXCJmZXJ0aWxpemVyXCIsXG4gICAgICBcIm5hbWVcIjogXCIxMC0zNC0wMFwiLFxuICAgICAgXCJ0eXBlXCI6IFwic2ltcGxlXCJcbiAgICB9LFxuICAgIHtcbiAgICAgIFwiY2xhc3NcIjogXCJmZXJ0aWxpemVyXCIsXG4gICAgICBcIm5hbWVcIjogXCIxMS01Mi0wXCIsXG4gICAgICBcInR5cGVcIjogXCJzaW1wbGVcIlxuICAgIH0sXG4gICAge1xuICAgICAgXCJjbGFzc1wiOiBcImZlcnRpbGl6ZXJcIixcbiAgICAgIFwibmFtZVwiOiBcIjEzLTAtNDVcIixcbiAgICAgIFwidHlwZVwiOiBcInNpbXBsZVwiXG4gICAgfSxcbiAgICB7XG4gICAgICBcImNsYXNzXCI6IFwiZmVydGlsaXplclwiLFxuICAgICAgXCJuYW1lXCI6IFwiMTYtMTYtMTZcIixcbiAgICAgIFwidHlwZVwiOiBcInNpbXBsZVwiXG4gICAgfSxcbiAgICB7XG4gICAgICBcImNsYXNzXCI6IFwiZmVydGlsaXplclwiLFxuICAgICAgXCJuYW1lXCI6IFwiMTYtMjAtMC0xNFwiLFxuICAgICAgXCJ0eXBlXCI6IFwic2ltcGxlXCJcbiAgICB9LFxuICAgIHtcbiAgICAgIFwiY2xhc3NcIjogXCJmZXJ0aWxpemVyXCIsXG4gICAgICBcIm5hbWVcIjogXCIxOC0wLTUtNFwiLFxuICAgICAgXCJ0eXBlXCI6IFwic2ltcGxlXCJcbiAgICB9LFxuICAgIHtcbiAgICAgIFwiY2xhc3NcIjogXCJmZXJ0aWxpemVyXCIsXG4gICAgICBcIm5hbWVcIjogXCIyLDQtRFwiLFxuICAgICAgXCJ1bml0c1wiOiBcInVzJC9bcXRfdXNdXCIsXG4gICAgICBcInByaWNlXCI6IDUsXG4gICAgICBcInR5cGVcIjogXCJzaW1wbGVcIlxuICAgIH0sXG4gICAge1xuICAgICAgXCJjbGFzc1wiOiBcImZlcnRpbGl6ZXJcIixcbiAgICAgIFwibmFtZVwiOiBcIjMyLTAtMFwiLFxuICAgICAgXCJ0eXBlXCI6IFwic2ltcGxlXCJcbiAgICB9LFxuICAgIHtcbiAgICAgIFwiY2xhc3NcIjogXCJmZXJ0aWxpemVyXCIsXG4gICAgICBcIm5hbWVcIjogXCIzMy0wLTAtMTJcIixcbiAgICAgIFwidHlwZVwiOiBcInNpbXBsZVwiXG4gICAgfSxcbiAgICB7XG4gICAgICBcImNsYXNzXCI6IFwiZmVydGlsaXplclwiLFxuICAgICAgXCJuYW1lXCI6IFwiNDAtMC0wLTZcIixcbiAgICAgIFwidHlwZVwiOiBcInNpbXBsZVwiXG4gICAgfSxcbiAgICB7XG4gICAgICBcImNsYXNzXCI6IFwiZmVydGlsaXplclwiLFxuICAgICAgXCJuYW1lXCI6IFwiNDYtMC0wXCIsXG4gICAgICBcInR5cGVcIjogXCJzaW1wbGVcIlxuICAgIH0sXG4gICAge1xuICAgICAgXCJjbGFzc1wiOiBcImZlcnRpbGl6ZXJcIixcbiAgICAgIFwibmFtZVwiOiBcIjgwLTAtMFwiLFxuICAgICAgXCJ0eXBlXCI6IFwic2ltcGxlXCJcbiAgICB9LFxuICAgIHtcbiAgICAgIFwiY2xhc3NcIjogXCJmZXJ0aWxpemVyXCIsXG4gICAgICBcIm5hbWVcIjogXCI4MC0wMC0wMFwiLFxuICAgICAgXCJ0eXBlXCI6IFwic2ltcGxlXCJcbiAgICB9LFxuICAgIHtcbiAgICAgIFwiY2xhc3NcIjogXCJwZXN0aWNpZGVcIixcbiAgICAgIFwibmFtZVwiOiBcIkFjaGlldmUgU0NcIixcbiAgICAgIFwidHlwZVwiOiBcInNpbXBsZVwiXG4gICAgfSxcbiAgICB7XG4gICAgICBcImNsYXNzXCI6IFwicGVzdGljaWRlXCIsXG4gICAgICBcIm5hbWVcIjogXCJBZG1pcmVcIixcbiAgICAgIFwidHlwZVwiOiBcInNpbXBsZVwiXG4gICAgfSxcbiAgICB7XG4gICAgICBcImNsYXNzXCI6IFwicGVzdGljaWRlXCIsXG4gICAgICBcIm5hbWVcIjogXCJBZG1pcmUgUHJvXCIsXG4gICAgICBcInR5cGVcIjogXCJzaW1wbGVcIlxuICAgIH0sXG4gICAge1xuICAgICAgXCJjbGFzc1wiOiBcInBlc3RpY2lkZVwiLFxuICAgICAgXCJuYW1lXCI6IFwiQWlyIEFwcGxpY2F0aW9uXCIsXG4gICAgICBcInR5cGVcIjogXCJzaW1wbGVcIlxuICAgIH0sXG4gICAge1xuICAgICAgXCJjbGFzc1wiOiBcInBlc3RpY2lkZVwiLFxuICAgICAgXCJuYW1lXCI6IFwiQWxjYWxhXCIsXG4gICAgICBcInR5cGVcIjogXCJzaW1wbGVcIlxuICAgIH0sXG4gICAge1xuICAgICAgXCJjbGFzc1wiOiBcInBlc3RpY2lkZVwiLFxuICAgICAgXCJuYW1lXCI6IFwiQW1tb25pdW0gU3VsZmF0ZVwiLFxuICAgICAgXCJ0eXBlXCI6IFwic2ltcGxlXCJcbiAgICB9LFxuICAgIHtcbiAgICAgIFwiY2xhc3NcIjogXCJwZXN0aWNpZGVcIixcbiAgICAgIFwibmFtZVwiOiBcIkFNU1wiLFxuICAgICAgXCJ0eXBlXCI6IFwic2ltcGxlXCJcbiAgICB9LFxuICAgIHtcbiAgICAgIFwiY2xhc3NcIjogXCJwZXN0aWNpZGVcIixcbiAgICAgIFwibmFtZVwiOiBcIkFwb2dlZVwiLFxuICAgICAgXCJ0eXBlXCI6IFwic2ltcGxlXCJcbiAgICB9LFxuICAgIHtcbiAgICAgIFwiY2xhc3NcIjogXCJwZXN0aWNpZGVcIixcbiAgICAgIFwibmFtZVwiOiBcIkFzc2FpbCA3MFdQXCIsXG4gICAgICBcInR5cGVcIjogXCJzaW1wbGVcIlxuICAgIH0sXG4gICAge1xuICAgICAgXCJjbGFzc1wiOiBcInBlc3RpY2lkZVwiLFxuICAgICAgXCJuYW1lXCI6IFwiQXNzZXNtZW50XCIsXG4gICAgICBcInR5cGVcIjogXCJzaW1wbGVcIlxuICAgIH0sXG4gICAge1xuICAgICAgXCJjbGFzc1wiOiBcInBlc3RpY2lkZVwiLFxuICAgICAgXCJuYW1lXCI6IFwiQXNzdXJlIElJXCIsXG4gICAgICBcInR5cGVcIjogXCJzaW1wbGVcIlxuICAgIH0sXG4gICAge1xuICAgICAgXCJjbGFzc1wiOiBcInBlc3RpY2lkZVwiLFxuICAgICAgXCJuYW1lXCI6IFwiQXhpb20gTEJcIixcbiAgICAgIFwidHlwZVwiOiBcInNpbXBsZVwiXG4gICAgfSxcbiAgICB7XG4gICAgICBcImNsYXNzXCI6IFwicGVzdGljaWRlXCIsXG4gICAgICBcIm5hbWVcIjogXCJBeGlvbSBPWlwiLFxuICAgICAgXCJ0eXBlXCI6IFwic2ltcGxlXCJcbiAgICB9LFxuICAgIHtcbiAgICAgIFwiY2xhc3NcIjogXCJwZXN0aWNpZGVcIixcbiAgICAgIFwibmFtZVwiOiBcIkJhbGVcIixcbiAgICAgIFwidHlwZVwiOiBcInNpbXBsZVwiXG4gICAgfSxcbiAgICB7XG4gICAgICBcImNsYXNzXCI6IFwicGVzdGljaWRlXCIsXG4gICAgICBcIm5hbWVcIjogXCJCYWxpbmdcIixcbiAgICAgIFwidHlwZVwiOiBcInNpbXBsZVwiXG4gICAgfSxcbiAgICB7XG4gICAgICBcImNsYXNzXCI6IFwicGVzdGljaWRlXCIsXG4gICAgICBcIm5hbWVcIjogXCJCYW52ZWxcIixcbiAgICAgIFwidHlwZVwiOiBcInNpbXBsZVwiXG4gICAgfSxcbiAgICB7XG4gICAgICBcImNsYXNzXCI6IFwic2VlZFwiLFxuICAgICAgXCJuYW1lXCI6IFwiQmFybGV5IFNlZWRcIixcbiAgICAgIFwidHlwZVwiOiBcInNpbXBsZVwiXG4gICAgfSxcbiAgICB7XG4gICAgICBcImNsYXNzXCI6IFwicGVzdGljaWRlXCIsXG4gICAgICBcIm5hbWVcIjogXCJCZWUgSGl2ZXNcIixcbiAgICAgIFwidHlwZVwiOiBcInNpbXBsZVwiXG4gICAgfSxcbiAgICB7XG4gICAgICBcImNsYXNzXCI6IFwicGVzdGljaWRlXCIsXG4gICAgICBcIm5hbWVcIjogXCJCcmF2b1wiLFxuICAgICAgXCJ0eXBlXCI6IFwic2ltcGxlXCJcbiAgICB9LFxuICAgIHtcbiAgICAgIFwiY2xhc3NcIjogXCJwZXN0aWNpZGVcIixcbiAgICAgIFwibmFtZVwiOiBcIkJyb2FkY2FzdCBGZXJ0aWxpemVyXCIsXG4gICAgICBcInR5cGVcIjogXCJzaW1wbGVcIlxuICAgIH0sXG4gICAge1xuICAgICAgXCJjbGFzc1wiOiBcInBlc3RpY2lkZVwiLFxuICAgICAgXCJuYW1lXCI6IFwiQnJveCBNXCIsXG4gICAgICBcInR5cGVcIjogXCJzaW1wbGVcIlxuICAgIH0sXG4gICAge1xuICAgICAgXCJjbGFzc1wiOiBcInNlZWRcIixcbiAgICAgIFwibmFtZVwiOiBcIkNhbm9sYSBTZWVkXCIsXG4gICAgICBcInR5cGVcIjogXCJzaW1wbGVcIlxuICAgIH0sXG4gICAge1xuICAgICAgXCJjbGFzc1wiOiBcInByb2Nlc3NpbmdcIixcbiAgICAgIFwibmFtZVwiOiBcIkNhcHR1cmVcIixcbiAgICAgIFwidHlwZVwiOiBcInNpbXBsZVwiXG4gICAgfSxcbiAgICB7XG4gICAgICBcImNsYXNzXCI6IFwicGVzdGljaWRlXCIsXG4gICAgICBcIm5hbWVcIjogXCJDYXJiaW5lIDUwV0dcIixcbiAgICAgIFwidHlwZVwiOiBcInNpbXBsZVwiXG4gICAgfSxcbiAgICB7XG4gICAgICBcImNsYXNzXCI6IFwicGVzdGljaWRlXCIsXG4gICAgICBcIm5hbWVcIjogXCJDbGFyaXR5XCIsXG4gICAgICBcInR5cGVcIjogXCJzaW1wbGVcIlxuICAgIH0sXG4gICAge1xuICAgICAgXCJjbGFzc1wiOiBcInByb2Nlc3NpbmdcIixcbiAgICAgIFwibmFtZVwiOiBcIkNsZWFuIFNlZWQgT3JjaGRnclwiLFxuICAgICAgXCJ0eXBlXCI6IFwic2ltcGxlXCJcbiAgICB9LFxuICAgIHtcbiAgICAgIFwiY2xhc3NcIjogXCJsYWJvclwiLFxuICAgICAgXCJuYW1lXCI6IFwiQ29tYmluZVwiLFxuICAgICAgXCJ0eXBlXCI6IFwic2ltcGxlXCJcbiAgICB9LFxuICAgIHtcbiAgICAgIFwiY2xhc3NcIjogXCJsYWJvclwiLFxuICAgICAgXCJuYW1lXCI6IFwiQ29tYmluZSBXaGVhdFwiLFxuICAgICAgXCJ0eXBlXCI6IFwic2ltcGxlXCJcbiAgICB9LFxuICAgIHtcbiAgICAgIFwiY2xhc3NcIjogXCJwcm9jZXNzaW5nXCIsXG4gICAgICBcIm5hbWVcIjogXCJDb21taXNpb24gQXNzZXNzXCIsXG4gICAgICBcInR5cGVcIjogXCJzaW1wbGVcIlxuICAgIH0sXG4gICAge1xuICAgICAgXCJjbGFzc1wiOiBcInByb2Nlc3NpbmdcIixcbiAgICAgIFwibmFtZVwiOiBcIkNvbW1pc3Npb24gQXNzZXNzXCIsXG4gICAgICBcInR5cGVcIjogXCJzaW1wbGVcIlxuICAgIH0sXG4gICAge1xuICAgICAgXCJjbGFzc1wiOiBcInByb2Nlc3NpbmdcIixcbiAgICAgIFwibmFtZVwiOiBcIkNvbnN1bHRhbnRcIixcbiAgICAgIFwidHlwZVwiOiBcInNpbXBsZVwiXG4gICAgfSxcbiAgICB7XG4gICAgICBcImNsYXNzXCI6IFwibGFib3JcIixcbiAgICAgIFwibmFtZVwiOiBcIkNvb2wgYW5kIFBhY2tcIixcbiAgICAgIFwidHlwZVwiOiBcInNpbXBsZVwiXG4gICAgfSxcbiAgICB7XG4gICAgICBcImNsYXNzXCI6IFwic2VlZFwiLFxuICAgICAgXCJuYW1lXCI6IFwiQ29ybiBTZWVkXCIsXG4gICAgICBcInR5cGVcIjogXCJzaW1wbGVcIlxuICAgIH0sXG4gICAge1xuICAgICAgXCJjbGFzc1wiOiBcInByb2Nlc3NpbmdcIixcbiAgICAgIFwibmFtZVwiOiBcIkNvdHRvbiBBc3Nlc21lbnRcIixcbiAgICAgIFwidHlwZVwiOiBcInNpbXBsZVwiXG4gICAgfSxcbiAgICB7XG4gICAgICBcImNsYXNzXCI6IFwicGVzdGljaWRlXCIsXG4gICAgICBcIm5hbWVcIjogXCJDb3VudGVyIDE1RyBMLU4tTFwiLFxuICAgICAgXCJ0eXBlXCI6IFwic2ltcGxlXCJcbiAgICB9LFxuICAgIHtcbiAgICAgIFwiY2xhc3NcIjogXCJpbnN1cmFuY2VcIixcbiAgICAgIFwibmFtZVwiOiBcIkNyb3AgSW5zdXJhbmNlXCIsXG4gICAgICBcInR5cGVcIjogXCJzaW1wbGVcIlxuICAgIH0sXG4gICAge1xuICAgICAgXCJjbGFzc1wiOiBcInByb2Nlc3NpbmdcIixcbiAgICAgIFwibmFtZVwiOiBcIkN1c3RvbSBBZXJpYWwgU3ByYXlcIixcbiAgICAgIFwidHlwZVwiOiBcInNpbXBsZVwiXG4gICAgfSxcbiAgICB7XG4gICAgICBcImNsYXNzXCI6IFwicHJvY2Vzc2luZ1wiLFxuICAgICAgXCJuYW1lXCI6IFwiQ3VzdG9tIEFpciBTcHJheVwiLFxuICAgICAgXCJ0eXBlXCI6IFwic2ltcGxlXCJcbiAgICB9LFxuICAgIHtcbiAgICAgIFwiY2xhc3NcIjogXCJwcm9jZXNzaW5nXCIsXG4gICAgICBcIm5hbWVcIjogXCJDdXN0b20gQWlyIFNwcmF5IC0gNUdcIixcbiAgICAgIFwidHlwZVwiOiBcInNpbXBsZVwiXG4gICAgfSxcbiAgICB7XG4gICAgICBcImNsYXNzXCI6IFwicHJvY2Vzc2luZ1wiLFxuICAgICAgXCJuYW1lXCI6IFwiQ3VzdG9tIENvbWJpbmluZ1wiLFxuICAgICAgXCJ0eXBlXCI6IFwic2ltcGxlXCJcbiAgICB9LFxuICAgIHtcbiAgICAgIFwiY2xhc3NcIjogXCJwcm9jZXNzaW5nXCIsXG4gICAgICBcIm5hbWVcIjogXCJDdXN0b20gRmVydGlsaXplXCIsXG4gICAgICBcInR5cGVcIjogXCJzaW1wbGVcIlxuICAgIH0sXG4gICAge1xuICAgICAgXCJjbGFzc1wiOiBcInByb2Nlc3NpbmdcIixcbiAgICAgIFwibmFtZVwiOiBcIkN1c3RvbSBGdW1pZ2F0ZSAtIERlZXBcIixcbiAgICAgIFwidHlwZVwiOiBcInNpbXBsZVwiXG4gICAgfSxcbiAgICB7XG4gICAgICBcImNsYXNzXCI6IFwicHJvY2Vzc2luZ1wiLFxuICAgICAgXCJuYW1lXCI6IFwiQ3VzdG9tIFNpZGVkcmVzc1wiLFxuICAgICAgXCJ0eXBlXCI6IFwic2ltcGxlXCJcbiAgICB9LFxuICAgIHtcbiAgICAgIFwiY2xhc3NcIjogXCJwcm9jZXNzaW5nXCIsXG4gICAgICBcIm5hbWVcIjogXCJDdXQvV2luZHJvd1wiLFxuICAgICAgXCJ0eXBlXCI6IFwic2ltcGxlXCJcbiAgICB9LFxuICAgIHtcbiAgICAgIFwiY2xhc3NcIjogXCJwZXN0aWNpZGVcIixcbiAgICAgIFwibmFtZVwiOiBcIkRhY3RoYWxcIixcbiAgICAgIFwidHlwZVwiOiBcInNpbXBsZVwiXG4gICAgfSxcbiAgICB7XG4gICAgICBcImNsYXNzXCI6IFwicGVzdGljaWRlXCIsXG4gICAgICBcIm5hbWVcIjogXCJEZWZvbCA1XCIsXG4gICAgICBcInR5cGVcIjogXCJzaW1wbGVcIlxuICAgIH0sXG4gICAge1xuICAgICAgXCJjbGFzc1wiOiBcInBlc3RpY2lkZVwiLFxuICAgICAgXCJuYW1lXCI6IFwiRGV2cmlub2wgNTBERlwiLFxuICAgICAgXCJ0eXBlXCI6IFwic2ltcGxlXCJcbiAgICB9LFxuICAgIHtcbiAgICAgIFwiY2xhc3NcIjogXCJwZXN0aWNpZGVcIixcbiAgICAgIFwibmFtZVwiOiBcIkRpbWV0aG9hdGVcIixcbiAgICAgIFwidHlwZVwiOiBcInNpbXBsZVwiXG4gICAgfSxcbiAgICB7XG4gICAgICBcImNsYXNzXCI6IFwicGVzdGljaWRlXCIsXG4gICAgICBcIm5hbWVcIjogXCJEaW9tZXRoYXRlXCIsXG4gICAgICBcInR5cGVcIjogXCJzaW1wbGVcIlxuICAgIH0sXG4gICAge1xuICAgICAgXCJjbGFzc1wiOiBcInBlc3RpY2lkZVwiLFxuICAgICAgXCJuYW1lXCI6IFwiRGlzY292ZXJcIixcbiAgICAgIFwidHlwZVwiOiBcInNpbXBsZVwiXG4gICAgfSxcbiAgICB7XG4gICAgICBcImNsYXNzXCI6IFwicGVzdGljaWRlXCIsXG4gICAgICBcIm5hbWVcIjogXCJEaXN5c3RvblwiLFxuICAgICAgXCJ0eXBlXCI6IFwic2ltcGxlXCJcbiAgICB9LFxuICAgIHtcbiAgICAgIFwiY2xhc3NcIjogXCJwZXN0aWNpZGVcIixcbiAgICAgIFwibmFtZVwiOiBcIkRpLVN5c3RvblwiLFxuICAgICAgXCJ0eXBlXCI6IFwic2ltcGxlXCJcbiAgICB9LFxuICAgIHtcbiAgICAgIFwiY2xhc3NcIjogXCJwZXN0aWNpZGVcIixcbiAgICAgIFwibmFtZVwiOiBcIkRpdGhhbmUgRjQ1IFJhaW5zaGllbGRcIixcbiAgICAgIFwidHlwZVwiOiBcInNpbXBsZVwiXG4gICAgfSxcbiAgICB7XG4gICAgICBcImNsYXNzXCI6IFwicGVzdGljaWRlXCIsXG4gICAgICBcIm5hbWVcIjogXCJEaXVyb25cIixcbiAgICAgIFwidHlwZVwiOiBcInNpbXBsZVwiXG4gICAgfSxcbiAgICB7XG4gICAgICBcImNsYXNzXCI6IFwiZmVydGlsaXplclwiLFxuICAgICAgXCJuYW1lXCI6IFwiRHJ5IE5pdHJvZ2VuXCIsXG4gICAgICBcInR5cGVcIjogXCJzaW1wbGVcIlxuICAgIH0sXG4gICAge1xuICAgICAgXCJjbGFzc1wiOiBcImZlcnRpbGl6ZXJcIixcbiAgICAgIFwibmFtZVwiOiBcIkRyeSBOaXRyb2dlbiAtIFByZXBsYW50XCIsXG4gICAgICBcInR5cGVcIjogXCJzaW1wbGVcIlxuICAgIH0sXG4gICAge1xuICAgICAgXCJjbGFzc1wiOiBcImZlcnRpbGl6ZXJcIixcbiAgICAgIFwibmFtZVwiOiBcIkRyeSBQMk81XCIsXG4gICAgICBcInR5cGVcIjogXCJzaW1wbGVcIlxuICAgIH0sXG4gICAge1xuICAgICAgXCJjbGFzc1wiOiBcImZlcnRpbGl6ZXJcIixcbiAgICAgIFwibmFtZVwiOiBcIkRyeSBQaG9zcGhhdGVcIixcbiAgICAgIFwidHlwZVwiOiBcInNpbXBsZVwiXG4gICAgfSxcbiAgICB7XG4gICAgICBcImNsYXNzXCI6IFwiZmVydGlsaXplclwiLFxuICAgICAgXCJuYW1lXCI6IFwiRHJ5IFBvdGFzaFwiLFxuICAgICAgXCJ0eXBlXCI6IFwic2ltcGxlXCJcbiAgICB9LFxuICAgIHtcbiAgICAgIFwiY2xhc3NcIjogXCJmZXJ0aWxpemVyXCIsXG4gICAgICBcIm5hbWVcIjogXCJEcnkgU3VsZnVyXCIsXG4gICAgICBcInR5cGVcIjogXCJzaW1wbGVcIlxuICAgIH0sXG4gICAge1xuICAgICAgXCJjbGFzc1wiOiBcInBlc3RpY2lkZVwiLFxuICAgICAgXCJuYW1lXCI6IFwiRW5kdXJhICgyeClcIixcbiAgICAgIFwidHlwZVwiOiBcInNpbXBsZVwiXG4gICAgfSxcbiAgICB7XG4gICAgICBcImNsYXNzXCI6IFwicGVzdGljaWRlXCIsXG4gICAgICBcIm5hbWVcIjogXCJFcHRhbSA3RUNcIixcbiAgICAgIFwidHlwZVwiOiBcInNpbXBsZVwiXG4gICAgfSxcbiAgICB7XG4gICAgICBcImRlc2NyaXB0aW9uXCI6IFwiQ29zdCBFc3RpbWF0ZVwiLFxuICAgICAgXCJjbGFzc1wiOiBcImFueVwiLFxuICAgICAgXCJuYW1lXCI6IFwiZXN0aW1hdGVcIixcbiAgICAgIFwidHlwZVwiOiBcInNpbXBsZVwiXG4gICAgfSxcbiAgICB7XG4gICAgICBcImNsYXNzXCI6IFwicGVzdGljaWRlXCIsXG4gICAgICBcIm5hbWVcIjogXCJFeGNlbCA5MFwiLFxuICAgICAgXCJ0eXBlXCI6IFwic2ltcGxlXCJcbiAgICB9LFxuICAgIHtcbiAgICAgIFwiY2xhc3NcIjogXCJwZXN0aWNpZGVcIixcbiAgICAgIFwibmFtZVwiOiBcIkZhci1HT1wiLFxuICAgICAgXCJ0eXBlXCI6IFwic2ltcGxlXCJcbiAgICB9LFxuICAgIHtcbiAgICAgIFwiY2xhc3NcIjogXCJwcm9jZXNzaW5nXCIsXG4gICAgICBcIm5hbWVcIjogXCJGZWVzIEFzc2VzbWVudFwiLFxuICAgICAgXCJ0eXBlXCI6IFwic2ltcGxlXCJcbiAgICB9LFxuICAgIHtcbiAgICAgIFwiY2xhc3NcIjogXCJwZXN0aWNpZGVcIixcbiAgICAgIFwibmFtZVwiOiBcIkZpbmlzaCA2IFByb1wiLFxuICAgICAgXCJ0eXBlXCI6IFwic2ltcGxlXCJcbiAgICB9LFxuICAgIHtcbiAgICAgIFwiY2xhc3NcIjogXCJtYXRlcmlhbFwiLFxuICAgICAgXCJuYW1lXCI6IFwiRnVlbFwiLFxuICAgICAgXCJ0eXBlXCI6IFwic2ltcGxlXCJcbiAgICB9LFxuICAgIHtcbiAgICAgIFwiY2xhc3NcIjogXCJtYXRlcmlhbFwiLFxuICAgICAgXCJuYW1lXCI6IFwiRnVlbCAtIERpZXNlbFwiLFxuICAgICAgXCJ0eXBlXCI6IFwic2ltcGxlXCJcbiAgICB9LFxuICAgIHtcbiAgICAgIFwiY2xhc3NcIjogXCJtYXRlcmlhbFwiLFxuICAgICAgXCJuYW1lXCI6IFwiRnVlbCAtIEdhc1wiLFxuICAgICAgXCJ0eXBlXCI6IFwic2ltcGxlXCJcbiAgICB9LFxuICAgIHtcbiAgICAgIFwiY2xhc3NcIjogXCJwcm9jZXNzaW5nXCIsXG4gICAgICBcIm5hbWVcIjogXCJGdW1pZ2F0aW9uXCIsXG4gICAgICBcInR5cGVcIjogXCJzaW1wbGVcIlxuICAgIH0sXG4gICAge1xuICAgICAgXCJjbGFzc1wiOiBcInBlc3RpY2lkZVwiLFxuICAgICAgXCJuYW1lXCI6IFwiR2VuIDI1V0dcIixcbiAgICAgIFwidHlwZVwiOiBcInNpbXBsZVwiXG4gICAgfSxcbiAgICB7XG4gICAgICBcImNsYXNzXCI6IFwicGVzdGljaWRlXCIsXG4gICAgICBcIm5hbWVcIjogXCJHaW5zdGFyXCIsXG4gICAgICBcInR5cGVcIjogXCJzaW1wbGVcIlxuICAgIH0sXG4gICAge1xuICAgICAgXCJjbGFzc1wiOiBcInBlc3RpY2lkZVwiLFxuICAgICAgXCJuYW1lXCI6IFwiR2x5cGhvc2F0ZSBHQUwxXCIsXG4gICAgICBcInR5cGVcIjogXCJzaW1wbGVcIlxuICAgIH0sXG4gICAge1xuICAgICAgXCJjbGFzc1wiOiBcInBlc3RpY2lkZVwiLFxuICAgICAgXCJuYW1lXCI6IFwiR29hbFwiLFxuICAgICAgXCJ0eXBlXCI6IFwic2ltcGxlXCJcbiAgICB9LFxuICAgIHtcbiAgICAgIFwiY2xhc3NcIjogXCJwZXN0aWNpZGVcIixcbiAgICAgIFwibmFtZVwiOiBcIkdvYWwgVGVuZGVyXCIsXG4gICAgICBcInR5cGVcIjogXCJzaW1wbGVcIlxuICAgIH0sXG4gICAge1xuICAgICAgXCJjbGFzc1wiOiBcImxhYm9yXCIsXG4gICAgICBcIm5hbWVcIjogXCJHb3BoZXIgQ29udHJvbFwiLFxuICAgICAgXCJ0eXBlXCI6IFwic2ltcGxlXCJcbiAgICB9LFxuICAgIHtcbiAgICAgIFwiY2xhc3NcIjogXCJwcm9jZXNzaW5nXCIsXG4gICAgICBcIm5hbWVcIjogXCJHcm91bmQgQXBwbGljYXRpb25cIixcbiAgICAgIFwidHlwZVwiOiBcInNpbXBsZVwiXG4gICAgfSxcbiAgICB7XG4gICAgICBcImNsYXNzXCI6IFwicGVzdGljaWRlXCIsXG4gICAgICBcIm5hbWVcIjogXCJIYXJtb255IEV4dHJhXCIsXG4gICAgICBcInR5cGVcIjogXCJzaW1wbGVcIlxuICAgIH0sXG4gICAge1xuICAgICAgXCJjbGFzc1wiOiBcInByb2Nlc3NpbmdcIixcbiAgICAgIFwibmFtZVwiOiBcIkhhcnZlc3RcIixcbiAgICAgIFwidHlwZVwiOiBcInNpbXBsZVwiXG4gICAgfSxcbiAgICB7XG4gICAgICBcImNsYXNzXCI6IFwicHJvY2Vzc2luZ1wiLFxuICAgICAgXCJuYW1lXCI6IFwiSGFydmVzdCBDb21iaW5lIEdyYWluXCIsXG4gICAgICBcInR5cGVcIjogXCJzaW1wbGVcIlxuICAgIH0sXG4gICAge1xuICAgICAgXCJjbGFzc1wiOiBcInByb2Nlc3NpbmdcIixcbiAgICAgIFwibmFtZVwiOiBcIkhhcnZlc3QgZm9yIEdyYWluXCIsXG4gICAgICBcInR5cGVcIjogXCJzaW1wbGVcIlxuICAgIH0sXG4gICAge1xuICAgICAgXCJjbGFzc1wiOiBcInByb2Nlc3NpbmdcIixcbiAgICAgIFwibmFtZVwiOiBcIkhhcnZlc3Q6IEhhdWwgR3JhaW5cIixcbiAgICAgIFwidHlwZVwiOiBcInNpbXBsZVwiXG4gICAgfSxcbiAgICB7XG4gICAgICBcImNsYXNzXCI6IFwicHJvY2Vzc2luZ1wiLFxuICAgICAgXCJuYW1lXCI6IFwiSGF1bCBhbmQgU3RhY2tcIixcbiAgICAgIFwidHlwZVwiOiBcInNpbXBsZVwiXG4gICAgfSxcbiAgICB7XG4gICAgICBcImNsYXNzXCI6IFwicHJvY2Vzc2luZ1wiLFxuICAgICAgXCJuYW1lXCI6IFwiSGF1bCBMb2NhbFwiLFxuICAgICAgXCJ0eXBlXCI6IFwic2ltcGxlXCJcbiAgICB9LFxuICAgIHtcbiAgICAgIFwiY2xhc3NcIjogXCJwZXN0aWNpZGVcIixcbiAgICAgIFwibmFtZVwiOiBcIkhlYWRsaW5lXCIsXG4gICAgICBcInR5cGVcIjogXCJzaW1wbGVcIlxuICAgIH0sXG4gICAge1xuICAgICAgXCJjbGFzc1wiOiBcInByb2Nlc3NpbmdcIixcbiAgICAgIFwibmFtZVwiOiBcIkluamVjdGlvbi1TaWRlZHJlc3NcIixcbiAgICAgIFwidHlwZVwiOiBcInNpbXBsZVwiXG4gICAgfSxcbiAgICB7XG4gICAgICBcImNsYXNzXCI6IFwicHJvY2Vzc2luZ1wiLFxuICAgICAgXCJuYW1lXCI6IFwiSW5qZWN0aW9uLVNpZGVkcmVzcyBOSDNcIixcbiAgICAgIFwidHlwZVwiOiBcInNpbXBsZVwiXG4gICAgfSxcbiAgICB7XG4gICAgICBcImNsYXNzXCI6IFwicHJvY2Vzc2luZ1wiLFxuICAgICAgXCJuYW1lXCI6IFwiSW5zZWN0aWNpZGVcIixcbiAgICAgIFwidHlwZVwiOiBcInNpbXBsZVwiXG4gICAgfSxcbiAgICB7XG4gICAgICBcImNsYXNzXCI6IFwid2F0ZXJcIixcbiAgICAgIFwibmFtZVwiOiBcIklycmlnYXRpb25cIixcbiAgICAgIFwidHlwZVwiOiBcInNpbXBsZVwiXG4gICAgfSxcbiAgICB7XG4gICAgICBcImNsYXNzXCI6IFwiZmVydGlsaXplclwiLFxuICAgICAgXCJuYW1lXCI6IFwiSzIwXCIsXG4gICAgICBcInR5cGVcIjogXCJzaW1wbGVcIlxuICAgIH0sXG4gICAge1xuICAgICAgXCJjbGFzc1wiOiBcImZlcnRpbGl6ZXJcIixcbiAgICAgIFwibmFtZVwiOiBcIksyT1wiLFxuICAgICAgXCJ0eXBlXCI6IFwic2ltcGxlXCJcbiAgICB9LFxuICAgIHtcbiAgICAgIFwiY2xhc3NcIjogXCJwZXN0aWNpZGVcIixcbiAgICAgIFwibmFtZVwiOiBcIkthcm1leFwiLFxuICAgICAgXCJ0eXBlXCI6IFwic2ltcGxlXCJcbiAgICB9LFxuICAgIHtcbiAgICAgIFwiY2xhc3NcIjogXCJwZXN0aWNpZGVcIixcbiAgICAgIFwibmFtZVwiOiBcIkthcm1leCBERlwiLFxuICAgICAgXCJ0eXBlXCI6IFwic2ltcGxlXCJcbiAgICB9LFxuICAgIHtcbiAgICAgIFwiY2xhc3NcIjogXCJwZXN0aWNpZGVcIixcbiAgICAgIFwibmFtZVwiOiBcIktlcmJcIixcbiAgICAgIFwidHlwZVwiOiBcInNpbXBsZVwiXG4gICAgfSxcbiAgICB7XG4gICAgICBcImNsYXNzXCI6IFwibGFib3JcIixcbiAgICAgIFwibmFtZVwiOiBcIkxhYm9yIChJcnJpZ2F0aW9uKVwiLFxuICAgICAgXCJ0eXBlXCI6IFwic2ltcGxlXCJcbiAgICB9LFxuICAgIHtcbiAgICAgIFwiY2xhc3NcIjogXCJsYWJvclwiLFxuICAgICAgXCJuYW1lXCI6IFwiTGFib3IgKE1hY2hpbmUpXCIsXG4gICAgICBcInR5cGVcIjogXCJzaW1wbGVcIlxuICAgIH0sXG4gICAge1xuICAgICAgXCJjbGFzc1wiOiBcImxhYm9yXCIsXG4gICAgICBcIm5hbWVcIjogXCJMYWJvciAobm9uLW1hY2hpbmUpXCIsXG4gICAgICBcInR5cGVcIjogXCJzaW1wbGVcIlxuICAgIH0sXG4gICAge1xuICAgICAgXCJjbGFzc1wiOiBcImxhYm9yXCIsXG4gICAgICBcIm5hbWVcIjogXCJMYWJvciAob3RoZXIpXCIsXG4gICAgICBcInR5cGVcIjogXCJzaW1wbGVcIlxuICAgIH0sXG4gICAge1xuICAgICAgXCJkZXNjcmlwdGlvblwiOiBcIklycmlnYXRlZCBMYW5kIFJlbnRcIixcbiAgICAgIFwiY2xhc3NcIjogXCJyZW50XCIsXG4gICAgICBcIm5hbWVcIjogXCJsYW5kLXJlbnQtaXJyaWdhdGVkXCIsXG4gICAgICBcInR5cGVcIjogXCJzaW1wbGVcIlxuICAgIH0sXG4gICAge1xuICAgICAgXCJkZXNjcmlwdGlvblwiOiBcIk5vbiBpcnJpZ2F0ZWQgTGFuZCBSZW50XCIsXG4gICAgICBcImNsYXNzXCI6IFwicmVudFwiLFxuICAgICAgXCJuYW1lXCI6IFwibGFuZC1yZW50LW5vbmlycmlnYXRlZFwiLFxuICAgICAgXCJ0eXBlXCI6IFwic2ltcGxlXCJcbiAgICB9LFxuICAgIHtcbiAgICAgIFwiZGVzY3JpcHRpb25cIjogXCJQYXN0dXJlIGlycmlnYXRlZCBMYW5kIFJlbnRcIixcbiAgICAgIFwiY2xhc3NcIjogXCJyZW50XCIsXG4gICAgICBcIm5hbWVcIjogXCJsYW5kLXJlbnQtcGFzdHVyZVwiLFxuICAgICAgXCJ0eXBlXCI6IFwic2ltcGxlXCJcbiAgICB9LFxuICAgIHtcbiAgICAgIFwiY2xhc3NcIjogXCJwZXN0aWNpZGVcIixcbiAgICAgIFwibmFtZVwiOiBcIkxhbm5hdGUgOTAgU1BcIixcbiAgICAgIFwidHlwZVwiOiBcInNpbXBsZVwiXG4gICAgfSxcbiAgICB7XG4gICAgICBcImNsYXNzXCI6IFwic2VlZFwiLFxuICAgICAgXCJuYW1lXCI6IFwiTGVudGlsIFNlZWRcIixcbiAgICAgIFwidHlwZVwiOiBcInNpbXBsZVwiXG4gICAgfSxcbiAgICB7XG4gICAgICBcImNsYXNzXCI6IFwicGVzdGljaWRlXCIsXG4gICAgICBcIm5hbWVcIjogXCJMZXZlcmFnZVwiLFxuICAgICAgXCJ0eXBlXCI6IFwic2ltcGxlXCJcbiAgICB9LFxuICAgIHtcbiAgICAgIFwiY2xhc3NcIjogXCJwZXN0aWNpZGVcIixcbiAgICAgIFwibmFtZVwiOiBcIkxldmVyYWdlIDIuN1wiLFxuICAgICAgXCJ0eXBlXCI6IFwic2ltcGxlXCJcbiAgICB9LFxuICAgIHtcbiAgICAgIFwiY2xhc3NcIjogXCJwZXN0aWNpZGVcIixcbiAgICAgIFwibmFtZVwiOiBcIkxJIDcwMFwiLFxuICAgICAgXCJ0eXBlXCI6IFwic2ltcGxlXCJcbiAgICB9LFxuICAgIHtcbiAgICAgIFwiY2xhc3NcIjogXCJtYXRlcmlhbFwiLFxuICAgICAgXCJuYW1lXCI6IFwiTGltZVwiLFxuICAgICAgXCJ0eXBlXCI6IFwic2ltcGxlXCJcbiAgICB9LFxuICAgIHtcbiAgICAgIFwiY2xhc3NcIjogXCJmZXJ0aWxpemVyXCIsXG4gICAgICBcIm5hbWVcIjogXCJMaXF1aWQgTml0cm9nZW5cIixcbiAgICAgIFwidHlwZVwiOiBcInNpbXBsZVwiXG4gICAgfSxcbiAgICB7XG4gICAgICBcImNsYXNzXCI6IFwiZmVydGlsaXplclwiLFxuICAgICAgXCJuYW1lXCI6IFwiTGlxdWlkIFAyTzVcIixcbiAgICAgIFwidHlwZVwiOiBcInNpbXBsZVwiXG4gICAgfSxcbiAgICB7XG4gICAgICBcImNsYXNzXCI6IFwicGVzdGljaWRlXCIsXG4gICAgICBcIm5hbWVcIjogXCJMb3JzYmFuIDE1R1wiLFxuICAgICAgXCJ0eXBlXCI6IFwic2ltcGxlXCJcbiAgICB9LFxuICAgIHtcbiAgICAgIFwiY2xhc3NcIjogXCJwZXN0aWNpZGVcIixcbiAgICAgIFwibmFtZVwiOiBcIkxvcnNiYW4gNEVcIixcbiAgICAgIFwidHlwZVwiOiBcInNpbXBsZVwiXG4gICAgfSxcbiAgICB7XG4gICAgICBcImNsYXNzXCI6IFwibWF0ZXJpYWxcIixcbiAgICAgIFwibmFtZVwiOiBcIkx1YmVcIixcbiAgICAgIFwidHlwZVwiOiBcInNpbXBsZVwiXG4gICAgfSxcbiAgICB7XG4gICAgICBcImNsYXNzXCI6IFwibWF0ZXJpYWxcIixcbiAgICAgIFwibmFtZVwiOiBcIkx1YnJpY2FudHNcIixcbiAgICAgIFwidHlwZVwiOiBcInNpbXBsZVwiXG4gICAgfSxcbiAgICB7XG4gICAgICBcImNsYXNzXCI6IFwicGVzdGljaWRlXCIsXG4gICAgICBcIm5hbWVcIjogXCJNOTBcIixcbiAgICAgIFwidHlwZVwiOiBcInNpbXBsZVwiXG4gICAgfSxcbiAgICB7XG4gICAgICBcImNsYXNzXCI6IFwibGFib3JcIixcbiAgICAgIFwibmFtZVwiOiBcIk1haW50ZW5hbmNlXCIsXG4gICAgICBcInR5cGVcIjogXCJzaW1wbGVcIlxuICAgIH0sXG4gICAge1xuICAgICAgXCJjbGFzc1wiOiBcImxhYm9yXCIsXG4gICAgICBcIm5hbWVcIjogXCJNYWludGVuYW5jZSBhbmQgUmVwYWlyXCIsXG4gICAgICBcInR5cGVcIjogXCJzaW1wbGVcIlxuICAgIH0sXG4gICAge1xuICAgICAgXCJjbGFzc1wiOiBcInBlc3RpY2lkZVwiLFxuICAgICAgXCJuYW1lXCI6IFwiTWFsYXRoaW9uXCIsXG4gICAgICBcInR5cGVcIjogXCJzaW1wbGVcIlxuICAgIH0sXG4gICAge1xuICAgICAgXCJjbGFzc1wiOiBcInByb2Nlc3NpbmdcIixcbiAgICAgIFwibmFtZVwiOiBcIk1hbmFnZW1lbnRcIixcbiAgICAgIFwidHlwZVwiOiBcInNpbXBsZVwiXG4gICAgfSxcbiAgICB7XG4gICAgICBcImNsYXNzXCI6IFwicGVzdGljaWRlXCIsXG4gICAgICBcIm5hbWVcIjogXCJNYXZlcmlja1wiLFxuICAgICAgXCJ0eXBlXCI6IFwic2ltcGxlXCJcbiAgICB9LFxuICAgIHtcbiAgICAgIFwiY2xhc3NcIjogXCJwZXN0aWNpZGVcIixcbiAgICAgIFwibmFtZVwiOiBcIk1DUEEgQW1pbmVcIixcbiAgICAgIFwidHlwZVwiOiBcInNpbXBsZVwiXG4gICAgfSxcbiAgICB7XG4gICAgICBcImNsYXNzXCI6IFwicGVzdGljaWRlXCIsXG4gICAgICBcIm5hbWVcIjogXCJNZXBleCBHaW4gT3VyXCIsXG4gICAgICBcInR5cGVcIjogXCJzaW1wbGVcIlxuICAgIH0sXG4gICAge1xuICAgICAgXCJjbGFzc1wiOiBcInBlc3RpY2lkZVwiLFxuICAgICAgXCJuYW1lXCI6IFwiTWV0YW0gU29kaXVtXCIsXG4gICAgICBcInR5cGVcIjogXCJzaW1wbGVcIlxuICAgIH0sXG4gICAge1xuICAgICAgXCJjbGFzc1wiOiBcImZlcnRpbGl6ZXJcIixcbiAgICAgIFwibmFtZVwiOiBcIk1pY3JvbnV0cmllbnRzXCIsXG4gICAgICBcInR5cGVcIjogXCJzaW1wbGVcIlxuICAgIH0sXG4gICAge1xuICAgICAgXCJjbGFzc1wiOiBcInBlc3RpY2lkZVwiLFxuICAgICAgXCJuYW1lXCI6IFwiTWljcm8tVGVjaFwiLFxuICAgICAgXCJ0eXBlXCI6IFwic2ltcGxlXCJcbiAgICB9LFxuICAgIHtcbiAgICAgIFwiY2xhc3NcIjogXCJmZXJ0aWxpemVyXCIsXG4gICAgICBcIm5hbWVcIjogXCJNdWxjaFwiLFxuICAgICAgXCJ0eXBlXCI6IFwic2ltcGxlXCJcbiAgICB9LFxuICAgIHtcbiAgICAgIFwiY2xhc3NcIjogXCJwZXN0aWNpZGVcIixcbiAgICAgIFwibmFtZVwiOiBcIk11c3RhbmcgMS41IEVXXCIsXG4gICAgICBcInR5cGVcIjogXCJzaW1wbGVcIlxuICAgIH0sXG4gICAge1xuICAgICAgXCJjbGFzc1wiOiBcImZlcnRpbGl6ZXJcIixcbiAgICAgIFwibmFtZVwiOiBcIk5pdHJvZ2VuXCIsXG4gICAgICBcInR5cGVcIjogXCJzaW1wbGVcIlxuICAgIH0sXG4gICAge1xuICAgICAgXCJjbGFzc1wiOiBcImZlcnRpbGl6ZXJcIixcbiAgICAgIFwibmFtZVwiOiBcIk5pdHJvZ2VuIChkcnkpXCIsXG4gICAgICBcInR5cGVcIjogXCJzaW1wbGVcIlxuICAgIH0sXG4gICAge1xuICAgICAgXCJjbGFzc1wiOiBcInBlc3RpY2lkZVwiLFxuICAgICAgXCJuYW1lXCI6IFwiT2Jlcm9uIDI1Q1wiLFxuICAgICAgXCJ0eXBlXCI6IFwic2ltcGxlXCJcbiAgICB9LFxuICAgIHtcbiAgICAgIFwiZGVzY3JpcHRpb25cIjogXCJbNDUtMjA5MSBBZ3JpY3VsdHVyYWwgRXF1aXBtZW50IE9wZXJhdG9yc10oaHR0cDovL3d3dy5ibHMuZ292L29lcy9jdXJyZW50L29lczQ1MjA5MS5odG0pXCIsXG4gICAgICBcImNsYXNzXCI6IFwibGFib3JcIixcbiAgICAgIFwibmFtZVwiOiBcIm9lczQ1MjA5MVwiLFxuICAgICAgXCJ0eXBlXCI6IFwic2ltcGxlXCJcbiAgICB9LFxuICAgIHtcbiAgICAgIFwiZGVzY3JpcHRpb25cIjogXCJbNDUtMjA5MiBGYXJtd29ya2VycyBhbmQgTGFib3JlcnMsIENyb3AsIE51cnNlcnksIGFuZCBHcmVlbmhvdXNlXShodHRwOi8vd3d3LmJscy5nb3Yvb2VzL2N1cnJlbnQvb2VzNDUyMDkyLmh0bSlcIixcbiAgICAgIFwiY2xhc3NcIjogXCJsYWJvclwiLFxuICAgICAgXCJuYW1lXCI6IFwib2VzNDUyMDkyXCIsXG4gICAgICBcInR5cGVcIjogXCJzaW1wbGVcIlxuICAgIH0sXG4gICAge1xuICAgICAgXCJkZXNjcmlwdGlvblwiOiBcIls1My0zMDMyIEhlYXZ5IGFuZCBUcmFjdG9yLVRyYWlsZXIgVHJ1Y2sgRHJpdmVyc10oaHR0cDovL3d3dy5ibHMuZ292L29lcy9jdXJyZW50L29lczUzMzAzMi5odG0pXCIsXG4gICAgICBcImNsYXNzXCI6IFwibGFib3JcIixcbiAgICAgIFwibmFtZVwiOiBcIm9lczUzMzAzMlwiLFxuICAgICAgXCJ0eXBlXCI6IFwic2ltcGxlXCJcbiAgICB9LFxuICAgIHtcbiAgICAgIFwiY2xhc3NcIjogXCJwZXN0aWNpZGVcIixcbiAgICAgIFwibmFtZVwiOiBcIk9ydGhlbmVcIixcbiAgICAgIFwidHlwZVwiOiBcInNpbXBsZVwiXG4gICAgfSxcbiAgICB7XG4gICAgICBcImNsYXNzXCI6IFwicGVzdGljaWRlXCIsXG4gICAgICBcIm5hbWVcIjogXCJPc3ByZXlcIixcbiAgICAgIFwidHlwZVwiOiBcInNpbXBsZVwiXG4gICAgfSxcbiAgICB7XG4gICAgICBcImNsYXNzXCI6IFwicGVzdGljaWRlXCIsXG4gICAgICBcIm5hbWVcIjogXCJPdXRsb29rIDZFQ1wiLFxuICAgICAgXCJ0eXBlXCI6IFwic2ltcGxlXCJcbiAgICB9LFxuICAgIHtcbiAgICAgIFwiY2xhc3NcIjogXCJtYXRlcmlhbFwiLFxuICAgICAgXCJuYW1lXCI6IFwiUGFja2luZ1wiLFxuICAgICAgXCJ0eXBlXCI6IFwic2ltcGxlXCJcbiAgICB9LFxuICAgIHtcbiAgICAgIFwiY2xhc3NcIjogXCJwcm9jZXNzaW5nXCIsXG4gICAgICBcIm5hbWVcIjogXCJQZXN0IENvbnRyb2wgQ29uc3VsdGFudFwiLFxuICAgICAgXCJ0eXBlXCI6IFwic2ltcGxlXCJcbiAgICB9LFxuICAgIHtcbiAgICAgIFwiY2xhc3NcIjogXCJmZXJ0aWxpemVyXCIsXG4gICAgICBcIm5hbWVcIjogXCJQaG9zcGhvcm91c1wiLFxuICAgICAgXCJ0eXBlXCI6IFwic2ltcGxlXCJcbiAgICB9LFxuICAgIHtcbiAgICAgIFwiY2xhc3NcIjogXCJmZXJ0aWxpemVyXCIsXG4gICAgICBcIm5hbWVcIjogXCJQaG9zcGhvcm91cyAoZHJ5KVwiLFxuICAgICAgXCJ0eXBlXCI6IFwic2ltcGxlXCJcbiAgICB9LFxuICAgIHtcbiAgICAgIFwiY2xhc3NcIjogXCJsYWJvclwiLFxuICAgICAgXCJuYW1lXCI6IFwiUGljayBCZXJyaWVzXCIsXG4gICAgICBcInR5cGVcIjogXCJzaW1wbGVcIlxuICAgIH0sXG4gICAge1xuICAgICAgXCJjbGFzc1wiOiBcImxhYm9yXCIsXG4gICAgICBcIm5hbWVcIjogXCJQbGFudFwiLFxuICAgICAgXCJ0eXBlXCI6IFwic2ltcGxlXCJcbiAgICB9LFxuICAgIHtcbiAgICAgIFwiY2xhc3NcIjogXCJsYWJvclwiLFxuICAgICAgXCJuYW1lXCI6IFwiUGxhbnRpbmdcIixcbiAgICAgIFwidHlwZVwiOiBcInNpbXBsZVwiXG4gICAgfSxcbiAgICB7XG4gICAgICBcImNsYXNzXCI6IFwicHJvY2Vzc2luZ1wiLFxuICAgICAgXCJuYW1lXCI6IFwiUG9uY2hvIEJldGEgU2VlZCBUcmVhdG1lbnRcIixcbiAgICAgIFwidHlwZVwiOiBcInNpbXBsZVwiXG4gICAgfSxcbiAgICB7XG4gICAgICBcImNsYXNzXCI6IFwibGFib3JcIixcbiAgICAgIFwibmFtZVwiOiBcIlBvc3RoYXJ2ZXN0IGFuZCBwYWNrYWdpbmdcIixcbiAgICAgIFwidHlwZVwiOiBcInNpbXBsZVwiXG4gICAgfSxcbiAgICB7XG4gICAgICBcImNsYXNzXCI6IFwic2VlZFwiLFxuICAgICAgXCJuYW1lXCI6IFwiUG90YXRvIFNlZWRcIixcbiAgICAgIFwidHlwZVwiOiBcInNpbXBsZVwiXG4gICAgfSxcbiAgICB7XG4gICAgICBcImNsYXNzXCI6IFwicGVzdGljaWRlXCIsXG4gICAgICBcIm5hbWVcIjogXCJQcmlzdGluZVwiLFxuICAgICAgXCJ0eXBlXCI6IFwic2ltcGxlXCJcbiAgICB9LFxuICAgIHtcbiAgICAgIFwiY2xhc3NcIjogXCJwZXN0aWNpZGVcIixcbiAgICAgIFwibmFtZVwiOiBcIlByb3dsXCIsXG4gICAgICBcInR5cGVcIjogXCJzaW1wbGVcIlxuICAgIH0sXG4gICAge1xuICAgICAgXCJjbGFzc1wiOiBcInBlc3RpY2lkZVwiLFxuICAgICAgXCJuYW1lXCI6IFwiUHJvd2wgMy4zRUNcIixcbiAgICAgIFwidHlwZVwiOiBcInNpbXBsZVwiXG4gICAgfSxcbiAgICB7XG4gICAgICBcImNsYXNzXCI6IFwicGVzdGljaWRlXCIsXG4gICAgICBcIm5hbWVcIjogXCJQcm93bCBIMjBcIixcbiAgICAgIFwidHlwZVwiOiBcInNpbXBsZVwiXG4gICAgfSxcbiAgICB7XG4gICAgICBcImNsYXNzXCI6IFwicGVzdGljaWRlXCIsXG4gICAgICBcIm5hbWVcIjogXCJQdW1hIDFFQ1wiLFxuICAgICAgXCJ0eXBlXCI6IFwic2ltcGxlXCJcbiAgICB9LFxuICAgIHtcbiAgICAgIFwiY2xhc3NcIjogXCJtYXRlcmlhbFwiLFxuICAgICAgXCJuYW1lXCI6IFwiUHVyaXR5IGFuZCBHZXJtXCIsXG4gICAgICBcInR5cGVcIjogXCJzaW1wbGVcIlxuICAgIH0sXG4gICAge1xuICAgICAgXCJjbGFzc1wiOiBcInBlc3RpY2lkZVwiLFxuICAgICAgXCJuYW1lXCI6IFwiUHVyc3VpdFwiLFxuICAgICAgXCJ0eXBlXCI6IFwic2ltcGxlXCJcbiAgICB9LFxuICAgIHtcbiAgICAgIFwiY2xhc3NcIjogXCJwZXN0aWNpZGVcIixcbiAgICAgIFwibmFtZVwiOiBcIlF1YWRyaXNcIixcbiAgICAgIFwidHlwZVwiOiBcInNpbXBsZVwiXG4gICAgfSxcbiAgICB7XG4gICAgICBcImNsYXNzXCI6IFwicGVzdGljaWRlXCIsXG4gICAgICBcIm5hbWVcIjogXCJRdWlsdFwiLFxuICAgICAgXCJ0eXBlXCI6IFwic2ltcGxlXCJcbiAgICB9LFxuICAgIHtcbiAgICAgIFwiY2xhc3NcIjogXCJtYXRlcmlhbFwiLFxuICAgICAgXCJuYW1lXCI6IFwiUmFrZVwiLFxuICAgICAgXCJ0eXBlXCI6IFwic2ltcGxlXCJcbiAgICB9LFxuICAgIHtcbiAgICAgIFwiY2xhc3NcIjogXCJwZXN0aWNpZGVcIixcbiAgICAgIFwibmFtZVwiOiBcIlJhbGx5IDQwIFdTUFwiLFxuICAgICAgXCJ0eXBlXCI6IFwic2ltcGxlXCJcbiAgICB9LFxuICAgIHtcbiAgICAgIFwiY2xhc3NcIjogXCJwZXN0aWNpZGVcIixcbiAgICAgIFwibmFtZVwiOiBcIlJlZ2xvbmVcIixcbiAgICAgIFwidHlwZVwiOiBcInNpbXBsZVwiXG4gICAgfSxcbiAgICB7XG4gICAgICBcImNsYXNzXCI6IFwicHJvY2Vzc2luZ1wiLFxuICAgICAgXCJuYW1lXCI6IFwiUmVudGFsIEZlcnRpbGl6ZXIgQXBwbGljYXRvclwiLFxuICAgICAgXCJ0eXBlXCI6IFwic2ltcGxlXCJcbiAgICB9LFxuICAgIHtcbiAgICAgIFwiY2xhc3NcIjogXCJwcm9jZXNzaW5nXCIsXG4gICAgICBcIm5hbWVcIjogXCJSZW50YWwgUmlwcGVyIFNob290ZXJcIixcbiAgICAgIFwidHlwZVwiOiBcInNpbXBsZVwiXG4gICAgfSxcbiAgICB7XG4gICAgICBcImNsYXNzXCI6IFwicHJvY2Vzc2luZ1wiLFxuICAgICAgXCJuYW1lXCI6IFwiUmVudGFsIFNwcmF5ZXJcIixcbiAgICAgIFwidHlwZVwiOiBcInNpbXBsZVwiXG4gICAgfSxcbiAgICB7XG4gICAgICBcImNsYXNzXCI6IFwicHJvY2Vzc2luZ1wiLFxuICAgICAgXCJuYW1lXCI6IFwiUmVwYWlyXCIsXG4gICAgICBcInR5cGVcIjogXCJzaW1wbGVcIlxuICAgIH0sXG4gICAge1xuICAgICAgXCJjbGFzc1wiOiBcInBlc3RpY2lkZVwiLFxuICAgICAgXCJuYW1lXCI6IFwiUmlkb21pbCBHb2xkIEVDXCIsXG4gICAgICBcInR5cGVcIjogXCJzaW1wbGVcIlxuICAgIH0sXG4gICAge1xuICAgICAgXCJjbGFzc1wiOiBcInByb2Nlc3NpbmdcIixcbiAgICAgIFwibmFtZVwiOiBcIlJpcGVyIFNob290ZXJcIixcbiAgICAgIFwidHlwZVwiOiBcInNpbXBsZVwiXG4gICAgfSxcbiAgICB7XG4gICAgICBcImNsYXNzXCI6IFwicHJvY2Vzc2luZ1wiLFxuICAgICAgXCJuYW1lXCI6IFwiUm9hZHNpZGUgQmFsZXNcIixcbiAgICAgIFwidHlwZVwiOiBcInNpbXBsZVwiXG4gICAgfSxcbiAgICB7XG4gICAgICBcImNsYXNzXCI6IFwicHJvY2Vzc2luZ1wiLFxuICAgICAgXCJuYW1lXCI6IFwiUm9hZHNpZGUgSGF5XCIsXG4gICAgICBcInR5cGVcIjogXCJzaW1wbGVcIlxuICAgIH0sXG4gICAge1xuICAgICAgXCJjbGFzc1wiOiBcImxhYm9yXCIsXG4gICAgICBcIm5hbWVcIjogXCJSb2RlbnQgQ29udHJvbFwiLFxuICAgICAgXCJ0eXBlXCI6IFwic2ltcGxlXCJcbiAgICB9LFxuICAgIHtcbiAgICAgIFwiY2xhc3NcIjogXCJwZXN0aWNpZGVcIixcbiAgICAgIFwibmFtZVwiOiBcIlJvdW5kdXBcIixcbiAgICAgIFwidHlwZVwiOiBcInNpbXBsZVwiXG4gICAgfSxcbiAgICB7XG4gICAgICBcImNsYXNzXCI6IFwicGVzdGljaWRlXCIsXG4gICAgICBcIm5hbWVcIjogXCJSb3VuZHVwIE9yaWdpbmFsIE1heFwiLFxuICAgICAgXCJ0eXBlXCI6IFwic2ltcGxlXCJcbiAgICB9LFxuICAgIHtcbiAgICAgIFwiY2xhc3NcIjogXCJwZXN0aWNpZGVcIixcbiAgICAgIFwibmFtZVwiOiBcIlJvdW5kdXAgVWx0cmEgTWF4XCIsXG4gICAgICBcInR5cGVcIjogXCJzaW1wbGVcIlxuICAgIH0sXG4gICAge1xuICAgICAgXCJjbGFzc1wiOiBcIm1hdGVyaWFsXCIsXG4gICAgICBcIm5hbWVcIjogXCJTYXdkdXN0XCIsXG4gICAgICBcInR5cGVcIjogXCJzaW1wbGVcIlxuICAgIH0sXG4gICAge1xuICAgICAgXCJjbGFzc1wiOiBcInByb2Nlc3NpbmdcIixcbiAgICAgIFwibmFtZVwiOiBcIlNlZWQgQ2xlYW4gYW5kIEJhZ1wiLFxuICAgICAgXCJ0eXBlXCI6IFwic2ltcGxlXCJcbiAgICB9LFxuICAgIHtcbiAgICAgIFwiY2xhc3NcIjogXCJwcm9jZXNzaW5nXCIsXG4gICAgICBcIm5hbWVcIjogXCJTZWVkIENsZWFuZCBhbmQgQmFnXCIsXG4gICAgICBcInR5cGVcIjogXCJzaW1wbGVcIlxuICAgIH0sXG4gICAge1xuICAgICAgXCJjbGFzc1wiOiBcInByb2Nlc3NpbmdcIixcbiAgICAgIFwibmFtZVwiOiBcIlNlZWQgVGVzdFwiLFxuICAgICAgXCJ0eXBlXCI6IFwic2ltcGxlXCJcbiAgICB9LFxuICAgIHtcbiAgICAgIFwiY2xhc3NcIjogXCJwZXN0aWNpZGVcIixcbiAgICAgIFwibmFtZVwiOiBcIlNlbGVjdCBNYXhcIixcbiAgICAgIFwidHlwZVwiOiBcInNpbXBsZVwiXG4gICAgfSxcbiAgICB7XG4gICAgICBcImNsYXNzXCI6IFwicGVzdGljaWRlXCIsXG4gICAgICBcIm5hbWVcIjogXCJTZW5jb3JcIixcbiAgICAgIFwidHlwZVwiOiBcInNpbXBsZVwiXG4gICAgfSxcbiAgICB7XG4gICAgICBcImNsYXNzXCI6IFwicGVzdGljaWRlXCIsXG4gICAgICBcIm5hbWVcIjogXCJTZW5jb3IgNExcIixcbiAgICAgIFwidHlwZVwiOiBcInNpbXBsZVwiXG4gICAgfSxcbiAgICB7XG4gICAgICBcImNsYXNzXCI6IFwicGVzdGljaWRlXCIsXG4gICAgICBcIm5hbWVcIjogXCJTZW5jb3IgNzVERlwiLFxuICAgICAgXCJ0eXBlXCI6IFwic2ltcGxlXCJcbiAgICB9LFxuICAgIHtcbiAgICAgIFwiY2xhc3NcIjogXCJwZXN0aWNpZGVcIixcbiAgICAgIFwibmFtZVwiOiBcIlNldmluIFhMUiBQbHVzXCIsXG4gICAgICBcInR5cGVcIjogXCJzaW1wbGVcIlxuICAgIH0sXG4gICAge1xuICAgICAgXCJjbGFzc1wiOiBcInBlc3RpY2lkZVwiLFxuICAgICAgXCJuYW1lXCI6IFwiU2hhcmsgRVdcIixcbiAgICAgIFwidHlwZVwiOiBcInNpbXBsZVwiXG4gICAgfSxcbiAgICB7XG4gICAgICBcImNsYXNzXCI6IFwicGVzdGljaWRlXCIsXG4gICAgICBcIm5hbWVcIjogXCJTbHVnIEJhaXRcIixcbiAgICAgIFwidHlwZVwiOiBcInNpbXBsZVwiXG4gICAgfSxcbiAgICB7XG4gICAgICBcImNsYXNzXCI6IFwicGVzdGljaWRlXCIsXG4gICAgICBcIm5hbWVcIjogXCJTb25hbGFuIEhGUFwiLFxuICAgICAgXCJ0eXBlXCI6IFwic2ltcGxlXCJcbiAgICB9LFxuICAgIHtcbiAgICAgIFwiY2xhc3NcIjogXCJzZWVkXCIsXG4gICAgICBcIm5hbWVcIjogXCJTb3JnaHVtIFNlZWRcIixcbiAgICAgIFwidHlwZVwiOiBcInNpbXBsZVwiXG4gICAgfSxcbiAgICB7XG4gICAgICBcImNsYXNzXCI6IFwicGVzdGljaWRlXCIsXG4gICAgICBcIm5hbWVcIjogXCJTcG90IFNwcmF5IFJvdW5kdXBcIixcbiAgICAgIFwidHlwZVwiOiBcInNpbXBsZVwiXG4gICAgfSxcbiAgICB7XG4gICAgICBcImNsYXNzXCI6IFwibGFib3JcIixcbiAgICAgIFwibmFtZVwiOiBcIlNwcmF5ZXJcIixcbiAgICAgIFwidHlwZVwiOiBcInNpbXBsZVwiXG4gICAgfSxcbiAgICB7XG4gICAgICBcImNsYXNzXCI6IFwicGVzdGljaWRlXCIsXG4gICAgICBcIm5hbWVcIjogXCJTdGFwbGVcIixcbiAgICAgIFwidHlwZVwiOiBcInNpbXBsZVwiXG4gICAgfSxcbiAgICB7XG4gICAgICBcImNsYXNzXCI6IFwicGVzdGljaWRlXCIsXG4gICAgICBcIm5hbWVcIjogXCJTdGFyYW5lK1NhbHZvXCIsXG4gICAgICBcInR5cGVcIjogXCJzaW1wbGVcIlxuICAgIH0sXG4gICAge1xuICAgICAgXCJjbGFzc1wiOiBcInBlc3RpY2lkZVwiLFxuICAgICAgXCJuYW1lXCI6IFwiU3RhcmFuZStTd29yZFwiLFxuICAgICAgXCJ0eXBlXCI6IFwic2ltcGxlXCJcbiAgICB9LFxuICAgIHtcbiAgICAgIFwiY2xhc3NcIjogXCJwcm9jZXNzaW5nXCIsXG4gICAgICBcIm5hbWVcIjogXCJTdG9yYWdlIE9wZXJhdGluZyBDb3N0c1wiLFxuICAgICAgXCJ0eXBlXCI6IFwic2ltcGxlXCJcbiAgICB9LFxuICAgIHtcbiAgICAgIFwiY2xhc3NcIjogXCJwcm9jZXNzaW5nXCIsXG4gICAgICBcIm5hbWVcIjogXCJTdG9yYWdlIFJlcGFpcnNcIixcbiAgICAgIFwidHlwZVwiOiBcInNpbXBsZVwiXG4gICAgfSxcbiAgICB7XG4gICAgICBcImNsYXNzXCI6IFwicGVzdGljaWRlXCIsXG4gICAgICBcIm5hbWVcIjogXCJTdHJhdGVnb1wiLFxuICAgICAgXCJ0eXBlXCI6IFwic2ltcGxlXCJcbiAgICB9LFxuICAgIHtcbiAgICAgIFwiY2xhc3NcIjogXCJsYWJvclwiLFxuICAgICAgXCJuYW1lXCI6IFwiU3R1YmxlIFNocmVkZGVyXCIsXG4gICAgICBcInR5cGVcIjogXCJzaW1wbGVcIlxuICAgIH0sXG4gICAge1xuICAgICAgXCJjbGFzc1wiOiBcInBlc3RpY2lkZVwiLFxuICAgICAgXCJuYW1lXCI6IFwiU3VjY2Vzc1wiLFxuICAgICAgXCJ0eXBlXCI6IFwic2ltcGxlXCJcbiAgICB9LFxuICAgIHtcbiAgICAgIFwiY2xhc3NcIjogXCJwcm9jZXNzaW5nXCIsXG4gICAgICBcIm5hbWVcIjogXCJTdWdhcmJlZXRcIixcbiAgICAgIFwidHlwZVwiOiBcInNpbXBsZVwiXG4gICAgfSxcbiAgICB7XG4gICAgICBcImNsYXNzXCI6IFwiZmVydGlsaXplclwiLFxuICAgICAgXCJuYW1lXCI6IFwiU3VsZnVyXCIsXG4gICAgICBcInR5cGVcIjogXCJzaW1wbGVcIlxuICAgIH0sXG4gICAge1xuICAgICAgXCJjbGFzc1wiOiBcImZlcnRpbGl6ZXJcIixcbiAgICAgIFwibmFtZVwiOiBcIlN1bGZ1ciAoZHJ5KVwiLFxuICAgICAgXCJ0eXBlXCI6IFwic2ltcGxlXCJcbiAgICB9LFxuICAgIHtcbiAgICAgIFwiY2xhc3NcIjogXCJmZXJ0aWxpemVyXCIsXG4gICAgICBcIm5hbWVcIjogXCJTdWxmdXJpYyBBY2lkXCIsXG4gICAgICBcInR5cGVcIjogXCJzaW1wbGVcIlxuICAgIH0sXG4gICAge1xuICAgICAgXCJjbGFzc1wiOiBcImZlcnRpbGl6ZXJcIixcbiAgICAgIFwibmFtZVwiOiBcIlN1cmZhY3RhbnQtSW5kdWNlXCIsXG4gICAgICBcInR5cGVcIjogXCJzaW1wbGVcIlxuICAgIH0sXG4gICAge1xuICAgICAgXCJjbGFzc1wiOiBcInBlc3RpY2lkZVwiLFxuICAgICAgXCJuYW1lXCI6IFwiU3VyZmxhbiBBU1wiLFxuICAgICAgXCJ0eXBlXCI6IFwic2ltcGxlXCJcbiAgICB9LFxuICAgIHtcbiAgICAgIFwiY2xhc3NcIjogXCJzZWVkXCIsXG4gICAgICBcIm5hbWVcIjogXCJTdXNhbiBTZWVkXCIsXG4gICAgICBcInR5cGVcIjogXCJzaW1wbGVcIlxuICAgIH0sXG4gICAge1xuICAgICAgXCJjbGFzc1wiOiBcInByb2Nlc3NpbmdcIixcbiAgICAgIFwibmFtZVwiOiBcIlN3YXRoXCIsXG4gICAgICBcInR5cGVcIjogXCJzaW1wbGVcIlxuICAgIH0sXG4gICAge1xuICAgICAgXCJjbGFzc1wiOiBcInByb2Nlc3NpbmdcIixcbiAgICAgIFwibmFtZVwiOiBcIlN3YXRoaW5nXCIsXG4gICAgICBcInR5cGVcIjogXCJzaW1wbGVcIlxuICAgIH0sXG4gICAge1xuICAgICAgXCJjbGFzc1wiOiBcImxhYm9yXCIsXG4gICAgICBcIm5hbWVcIjogXCJTd2F0aCBSYWtlXCIsXG4gICAgICBcInR5cGVcIjogXCJzaW1wbGVcIlxuICAgIH0sXG4gICAge1xuICAgICAgXCJjbGFzc1wiOiBcInBlc3RpY2lkZVwiLFxuICAgICAgXCJuYW1lXCI6IFwiU3luYXBzZSBXR1wiLFxuICAgICAgXCJ0eXBlXCI6IFwic2ltcGxlXCJcbiAgICB9LFxuICAgIHtcbiAgICAgIFwiY2xhc3NcIjogXCJwcm9jZXNzaW5nXCIsXG4gICAgICBcIm5hbWVcIjogXCJUYXJwaW5nXCIsXG4gICAgICBcInR5cGVcIjogXCJzaW1wbGVcIlxuICAgIH0sXG4gICAge1xuICAgICAgXCJjbGFzc1wiOiBcInBlc3RpY2lkZVwiLFxuICAgICAgXCJuYW1lXCI6IFwiVGVsb25lIElJXCIsXG4gICAgICBcInR5cGVcIjogXCJzaW1wbGVcIlxuICAgIH0sXG4gICAge1xuICAgICAgXCJjbGFzc1wiOiBcInByb2Nlc3NpbmdcIixcbiAgICAgIFwibmFtZVwiOiBcIlRpc3N1ZSBBbmFseXNpc1wiLFxuICAgICAgXCJ0eXBlXCI6IFwic2ltcGxlXCJcbiAgICB9LFxuICAgIHtcbiAgICAgIFwiY2xhc3NcIjogXCJwcm9jZXNzaW5nXCIsXG4gICAgICBcIm5hbWVcIjogXCJUcmFuc3BvcnRcIixcbiAgICAgIFwidHlwZVwiOiBcInNpbXBsZVwiXG4gICAgfSxcbiAgICB7XG4gICAgICBcImNsYXNzXCI6IFwicHJvY2Vzc2luZ1wiLFxuICAgICAgXCJuYW1lXCI6IFwiVHJhbnNwb3J0IHRvIFBEWFwiLFxuICAgICAgXCJ0eXBlXCI6IFwic2ltcGxlXCJcbiAgICB9LFxuICAgIHtcbiAgICAgIFwiY2xhc3NcIjogXCJwZXN0aWNpZGVcIixcbiAgICAgIFwibmFtZVwiOiBcIlRyZWZsYW4gNEhGUFwiLFxuICAgICAgXCJ0eXBlXCI6IFwic2ltcGxlXCJcbiAgICB9LFxuICAgIHtcbiAgICAgIFwiY2xhc3NcIjogXCJwZXN0aWNpZGVcIixcbiAgICAgIFwibmFtZVwiOiBcIlRyZWZsYW4gRlBcIixcbiAgICAgIFwidHlwZVwiOiBcInNpbXBsZVwiXG4gICAgfSxcbiAgICB7XG4gICAgICBcImNsYXNzXCI6IFwicGVzdGljaWRlXCIsXG4gICAgICBcIm5hbWVcIjogXCJUcmVmbGFuIFRSIDEwXCIsXG4gICAgICBcInR5cGVcIjogXCJzaW1wbGVcIlxuICAgIH0sXG4gICAge1xuICAgICAgXCJjbGFzc1wiOiBcInBlc3RpY2lkZVwiLFxuICAgICAgXCJuYW1lXCI6IFwiVHJpZmx1cmV4IEhGUFwiLFxuICAgICAgXCJ0eXBlXCI6IFwic2ltcGxlXCJcbiAgICB9LFxuICAgIHtcbiAgICAgIFwiY2xhc3NcIjogXCJmZXJ0aWxpemVyXCIsXG4gICAgICBcIm5hbWVcIjogXCJVTjMyXCIsXG4gICAgICBcInR5cGVcIjogXCJzaW1wbGVcIlxuICAgIH0sXG4gICAge1xuICAgICAgXCJjbGFzc1wiOiBcInBlc3RpY2lkZVwiLFxuICAgICAgXCJuYW1lXCI6IFwiVmVscGFyIExcIixcbiAgICAgIFwidHlwZVwiOiBcInNpbXBsZVwiXG4gICAgfSxcbiAgICB7XG4gICAgICBcImNsYXNzXCI6IFwid2F0ZXJcIixcbiAgICAgIFwibmFtZVwiOiBcIldhdGVyXCIsXG4gICAgICBcInR5cGVcIjogXCJzaW1wbGVcIlxuICAgIH0sXG4gICAge1xuICAgICAgXCJjbGFzc1wiOiBcInByb2Nlc3NpbmdcIixcbiAgICAgIFwibmFtZVwiOiBcIldhdGVyIEFzc2VzbWVudFwiLFxuICAgICAgXCJ0eXBlXCI6IFwic2ltcGxlXCJcbiAgICB9LFxuICAgIHtcbiAgICAgIFwiY2xhc3NcIjogXCJsYWJvclwiLFxuICAgICAgXCJuYW1lXCI6IFwiV2VlZCBDb250cm9sXCIsXG4gICAgICBcInR5cGVcIjogXCJzaW1wbGVcIlxuICAgIH0sXG4gICAge1xuICAgICAgXCJjbGFzc1wiOiBcInByb2Nlc3NpbmdcIixcbiAgICAgIFwibmFtZVwiOiBcIldoZWF0IEFzc2VzbWVudFwiLFxuICAgICAgXCJ0eXBlXCI6IFwic2ltcGxlXCJcbiAgICB9LFxuICAgIHtcbiAgICAgIFwiY2xhc3NcIjogXCJzZWVkXCIsXG4gICAgICBcIm5hbWVcIjogXCJXaGVhdCBTZWVkXCIsXG4gICAgICBcInR5cGVcIjogXCJzaW1wbGVcIlxuICAgIH0sXG4gICAge1xuICAgICAgXCJjbGFzc1wiOiBcIm1hdGVyaWFsXCIsXG4gICAgICBcIm5hbWVcIjogXCJZdWtvblwiLFxuICAgICAgXCJ0eXBlXCI6IFwic2ltcGxlXCJcbiAgICB9LFxuICAgIHtcbiAgICAgIFwiY2xhc3NcIjogXCJtYXRlcmlhbFwiLFxuICAgICAgXCJuYW1lXCI6IFwiWmVwaHlyXCIsXG4gICAgICBcInR5cGVcIjogXCJzaW1wbGVcIlxuICAgIH0sXG4gICAge1xuICAgICAgXCJjbGFzc1wiOiBcImZlcnRpbGl6ZXJcIixcbiAgICAgIFwibmFtZVwiOiBcIlppbmNcIixcbiAgICAgIFwidHlwZVwiOiBcInNpbXBsZVwiXG4gICAgfSxcbiAgICB7XG4gICAgICBcImNsYXNzXCI6IFwibGFib3JcIixcbiAgICAgIFwibmFtZVwiOiBcIkxhYm9yLS0zLVdoZWVsIGFnIHNwcmF5ZXJcIixcbiAgICAgIFwidW5pdHNcIjogXCJoXCIsXG4gICAgICBcInR5cGVcIjogXCJzaW1wbGVcIlxuICAgIH0sXG4gICAge1xuICAgICAgXCJuYW1lXCI6IFwiTGFib3ItLUNoYWxsZW5nZXIgdHJhY3RvclwiLFxuICAgICAgXCJwcmljZVwiOiA1LFxuICAgICAgXCJjbGFzc1wiOiBcImxhYm9yXCIsXG4gICAgICBcInVuaXRzXCI6IFwidXMkL2hcIixcbiAgICAgIFwidHlwZVwiOiBcInNpbXBsZVwiXG4gICAgfSxcbiAgICB7XG4gICAgICBcIm5hbWVcIjogXCJMYWJvci0tQ29vbGVyL3ZhblwiLFxuICAgICAgXCJwcmljZVwiOiA1LFxuICAgICAgXCJjbGFzc1wiOiBcImxhYm9yXCIsXG4gICAgICBcInVuaXRzXCI6IFwiJC9oXCIsXG4gICAgICBcInR5cGVcIjogXCJzaW1wbGVcIlxuICAgIH0sXG4gICAge1xuICAgICAgXCJuYW1lXCI6IFwiTGFib3ItLUZSIDYwODAgRkhcIixcbiAgICAgIFwicHJpY2VcIjogNixcbiAgICAgIFwiY2xhc3NcIjogXCJsYWJvclwiLFxuICAgICAgXCJ1bml0c1wiOiBcIiQvaFwiLFxuICAgICAgXCJ0eXBlXCI6IFwic2ltcGxlXCJcbiAgICB9LFxuICAgIHtcbiAgICAgIFwibmFtZVwiOiBcIkxhYm9yZXJcIixcbiAgICAgIFwicHJpY2VcIjogMjAsXG4gICAgICBcImNsYXNzXCI6IFwibGFib3JcIixcbiAgICAgIFwidW5pdHNcIjogXCJ1cyQvaFwiLFxuICAgICAgXCJ0eXBlXCI6IFwic2ltcGxlXCJcbiAgICB9LFxuICAgIHtcbiAgICAgIFwiY2xhc3NcIjogXCJsYWJvclwiLFxuICAgICAgXCJuYW1lXCI6IFwiTGFib3ItLUxhcmdlIHRyYWN0b3JcIixcbiAgICAgIFwidW5pdHNcIjogXCJ1cyQvaFwiLFxuICAgICAgXCJwcmljZVwiOiAzNSxcbiAgICAgIFwidHlwZVwiOiBcInNpbXBsZVwiXG4gICAgfSxcbiAgICB7XG4gICAgICBcImNsYXNzXCI6IFwibGFib3JcIixcbiAgICAgIFwibmFtZVwiOiBcIkxhYm9yLS1NaWQtc2l6ZSB0cmFjdG9yXCIsXG4gICAgICBcInVuaXRzXCI6IFwidXMkL2hcIixcbiAgICAgIFwicHJpY2VcIjogMjIsXG4gICAgICBcInR5cGVcIjogXCJzaW1wbGVcIlxuICAgIH0sXG4gICAge1xuICAgICAgXCJjbGFzc1wiOiBcImxhYm9yXCIsXG4gICAgICBcIm5hbWVcIjogXCJMYWJvci0tU2VtaS10cmFjdG9yIHRyYWlsZXJcIixcbiAgICAgIFwidW5pdHNcIjogXCJ1cyQvaFwiLFxuICAgICAgXCJwcmljZVwiOiAyOCxcbiAgICAgIFwidHlwZVwiOiBcInNpbXBsZVwiXG4gICAgfSxcbiAgICB7XG4gICAgICBcImNsYXNzXCI6IFwibGFib3JcIixcbiAgICAgIFwibmFtZVwiOiBcIkxhYm9yLS1TbWFsbCB0cmFjdG9yXCIsXG4gICAgICBcInVuaXRzXCI6IFwidXMkL2hcIixcbiAgICAgIFwicHJpY2VcIjogMjIsXG4gICAgICBcInR5cGVcIjogXCJzaW1wbGVcIlxuICAgIH0sXG4gICAge1xuICAgICAgXCJjbGFzc1wiOiBcImxhYm9yXCIsXG4gICAgICBcIm5hbWVcIjogXCJMYWJvci0tU3VwZXJ2aXNvclwiLFxuICAgICAgXCJ1bml0c1wiOiBcInVzJC9oXCIsXG4gICAgICBcInByaWNlXCI6IDI2LFxuICAgICAgXCJ0eXBlXCI6IFwic2ltcGxlXCJcbiAgICB9LFxuICAgIHtcbiAgICAgIFwiY2xhc3NcIjogXCJsYWJvclwiLFxuICAgICAgXCJuYW1lXCI6IFwiTGFib3ItLVN1cHBvcnQgVHJ1Y2tcIixcbiAgICAgIFwidW5pdHNcIjogXCJ1cyQvaFwiLFxuICAgICAgXCJwcmljZVwiOiAzMCxcbiAgICAgIFwidHlwZVwiOiBcInNpbXBsZVwiXG4gICAgfSxcbiAgICB7XG4gICAgICBcImNsYXNzXCI6IFwibGFib3JcIixcbiAgICAgIFwibmFtZVwiOiBcIkxhYm9yLS1UYW5kZW0gYXhsZSB0cnVja1wiLFxuICAgICAgXCJ1bml0c1wiOiBcInVzJC9oXCIsXG4gICAgICBcInByaWNlXCI6IDI2LFxuICAgICAgXCJ0eXBlXCI6IFwic2ltcGxlXCJcbiAgICB9LFxuICAgIHtcbiAgICAgIFwiY2xhc3NcIjogXCJsYWJvclwiLFxuICAgICAgXCJuYW1lXCI6IFwiTGFib3ItLVRyYWN0b3IgYW5kIFNwcmF5ZXJcIixcbiAgICAgIFwidW5pdHNcIjogXCJ1cyQvaFwiLFxuICAgICAgXCJwcmljZVwiOiAzMCxcbiAgICAgIFwidHlwZVwiOiBcInNpbXBsZVwiXG4gICAgfSxcbiAgICB7XG4gICAgICBcImRlc2NyaXB0aW9uXCI6IFwiT2ZmIFJvYWQgRGllc2VsXCIsXG4gICAgICBcImNsYXNzXCI6IFwiZnVlbFwiLFxuICAgICAgXCJuYW1lXCI6IFwiRXF1aXBtZW50IEZ1ZWxcIixcbiAgICAgIFwidW5pdHNcIjogXCJ1cyQvW2dhbF91c11cIixcbiAgICAgIFwicHJpY2VcIjogMi44MSxcbiAgICAgIFwidHlwZVwiOiBcInNpbXBsZVwiXG4gICAgfSxcbiAgICB7XG4gICAgICBcImNsYXNzXCI6IFwicGVzdGljaWRlXCIsXG4gICAgICBcIm5hbWVcIjogXCJDb3JhZ2VuXCIsXG4gICAgICBcInVuaXRzXCI6IFwidXMkL1txdF91c11cIixcbiAgICAgIFwicHJpY2VcIjogMjEwLFxuICAgICAgXCJ0eXBlXCI6IFwic2ltcGxlXCJcbiAgICB9LFxuICAgIHtcbiAgICAgIFwiY2xhc3NcIjogXCJwZXN0aWNpZGVcIixcbiAgICAgIFwibmFtZVwiOiBcIkRpbWlsaW5cIixcbiAgICAgIFwidW5pdHNcIjogXCJbcXRfdXNdXCIsXG4gICAgICBcInR5cGVcIjogXCJzaW1wbGVcIlxuICAgIH0sXG4gICAge1xuICAgICAgXCJjbGFzc1wiOiBcInBlc3RpY2lkZVwiLFxuICAgICAgXCJuYW1lXCI6IFwiRnVzaWxhZGVcIixcbiAgICAgIFwidW5pdHNcIjogXCJ1cyQvW3F0X3VzXVwiLFxuICAgICAgXCJwcmljZVwiOiAzMCxcbiAgICAgIFwidHlwZVwiOiBcInNpbXBsZVwiXG4gICAgfSxcbiAgICB7XG4gICAgICBcImNsYXNzXCI6IFwicGVzdGljaWRlXCIsXG4gICAgICBcIm5hbWVcIjogXCJHbHlwaG9zYXRlXCIsXG4gICAgICBcInVuaXRzXCI6IFwidXMkL1txdF91c11cIixcbiAgICAgIFwicHJpY2VcIjogNCxcbiAgICAgIFwidHlwZVwiOiBcInNpbXBsZVwiXG4gICAgfSxcbiAgICB7XG4gICAgICBcImNsYXNzXCI6IFwicGVzdGljaWRlXCIsXG4gICAgICBcIm5hbWVcIjogXCJHb2FsIDJYTFwiLFxuICAgICAgXCJ1bml0c1wiOiBcInVzJC9bcXRfdXNdXCIsXG4gICAgICBcInByaWNlXCI6IDMwLFxuICAgICAgXCJ0eXBlXCI6IFwic2ltcGxlXCJcbiAgICB9LFxuICAgIHtcbiAgICAgIFwiY2xhc3NcIjogXCJwZXN0aWNpZGVcIixcbiAgICAgIFwibmFtZVwiOiBcIkltaWRhY2xvcHJpZDVcIixcbiAgICAgIFwidW5pdHNcIjogXCJbcXRfdXNdXCIsXG4gICAgICBcInR5cGVcIjogXCJzaW1wbGVcIlxuICAgIH0sXG4gICAge1xuICAgICAgXCJjbGFzc1wiOiBcInBlc3RpY2lkZVwiLFxuICAgICAgXCJuYW1lXCI6IFwiT3VzdFwiLFxuICAgICAgXCJ1bml0c1wiOiBcInVzJC9bbGJfYXZdXCIsXG4gICAgICBcInByaWNlXCI6IDY0LFxuICAgICAgXCJ0eXBlXCI6IFwic2ltcGxlXCJcbiAgICB9LFxuICAgIHtcbiAgICAgIFwiZGVzY3JpcHRpb25cIjogXCJyb2RlbnRpY2lkZVwiLFxuICAgICAgXCJjbGFzc1wiOiBcIltxdF91c11cIixcbiAgICAgIFwibmFtZVwiOiBcIlJvem9sXCIsXG4gICAgICBcInVuaXRzXCI6IFwidXMkL1tsYl9hdl1cIixcbiAgICAgIFwicHJpY2VcIjogMS44NSxcbiAgICAgIFwidHlwZVwiOiBcInNpbXBsZVwiXG4gICAgfSxcbiAgICB7XG4gICAgICBcImNsYXNzXCI6IFwicGVzdGljaWRlXCIsXG4gICAgICBcIm5hbWVcIjogXCJTdXJlZ3VhcmRcIixcbiAgICAgIFwidW5pdHNcIjogXCJ1cyQvW2xiX2F2XVwiLFxuICAgICAgXCJwcmljZVwiOiAxMzAsXG4gICAgICBcInR5cGVcIjogXCJzaW1wbGVcIlxuICAgIH0sXG4gICAge1xuICAgICAgXCJjbGFzc1wiOiBcInBlc3RpY2lkZVwiLFxuICAgICAgXCJuYW1lXCI6IFwiVHJhbnNsaW5lXCIsXG4gICAgICBcInVuaXRzXCI6IFwidXMkL1tnYWxfdXNdXCIsXG4gICAgICBcInByaWNlXCI6IDIxNSxcbiAgICAgIFwidHlwZVwiOiBcInNpbXBsZVwiXG4gICAgfSxcbiAgICB7XG4gICAgICBcImNsYXNzXCI6IFwicGVzdGljaWRlXCIsXG4gICAgICBcIm5hbWVcIjogXCJUcmlmbHVyYWxpblwiLFxuICAgICAgXCJ1bml0c1wiOiBcInVzJC9bcXRfdXNdXCIsXG4gICAgICBcInByaWNlXCI6IDcuNSxcbiAgICAgIFwidHlwZVwiOiBcInNpbXBsZVwiXG4gICAgfSxcbiAgICB7XG4gICAgICBcImRlc2NyaXB0aW9uXCI6IFwiUG9wbGFyIGN1dHRpbmcgZm9yIHBsYW50aW5nXCIsXG4gICAgICBcImNsYXNzXCI6IFwic2VlZFwiLFxuICAgICAgXCJuYW1lXCI6IFwiUG9wbGFyIEN1dHRpbmdcIixcbiAgICAgIFwidW5pdHNcIjogXCJ1cyQvMVwiLFxuICAgICAgXCJwcmljZVwiOiAwLjA4LFxuICAgICAgXCJ0eXBlXCI6IFwic2ltcGxlXCJcbiAgICB9LFxuICAgIHtcbiAgICAgIFwibmFtZVwiOiBcIjMtV2hlZWwgYWcgc3ByYXllclwiLFxuICAgICAgXCJwcmljZVwiOiAzMCxcbiAgICAgIFwidW5pdHNcIjogXCJ1cyQvaFwiLFxuICAgICAgXCJ0eXBlXCI6IFwic2ltcGxlXCJcbiAgICB9LFxuICAgIHtcbiAgICAgIFwibmFtZVwiOiBcIkltaWRhY2xvcHJpZFwiLFxuICAgICAgXCJwcmljZVwiOiA1NixcbiAgICAgIFwidW5pdHNcIjogXCJ1cyQvW3F0X3VzXVwiLFxuICAgICAgXCJ0eXBlXCI6IFwic2ltcGxlXCJcbiAgICB9LFxuICAgIHtcbiAgICAgIFwibmFtZVwiOiBcIklycmlnYXRpb24gQ29zdFwiLFxuICAgICAgXCJwcmljZVwiOiA2LFxuICAgICAgXCJ1bml0c1wiOiBcInVzJC9bYWNyX3VzXS5baW5fdXNdXCIsXG4gICAgICBcInR5cGVcIjogXCJzaW1wbGVcIlxuICAgIH0sXG4gICAge1xuICAgICAgXCJjbGFzc1wiOiBcImVxdWlwbWVudFwiLFxuICAgICAgXCJuYW1lXCI6IFwiMy1XaGVlbCBBZyBTcHJheWVyXCIsXG4gICAgICBcInVuaXRzXCI6IFwidXMkL2hcIixcbiAgICAgIFwidHlwZVwiOiBcImNvbXBsZXhcIixcbiAgICAgIFwibWF0ZXJpYWxzXCI6IHtcbiAgICAgICAgXCJFcXVpcG1lbnQgRnVlbFwiOiB7XG4gICAgICAgICAgXCJhbW91bnRcIjogMy45NixcbiAgICAgICAgICBcIm9yaWdpbmFsQW1vdW50XCI6IDMuOTYsXG4gICAgICAgICAgXCJ1bml0c1wiOiBcIltnYWxfdXNdL2hcIixcbiAgICAgICAgICBcImVycm9yXCI6IG51bGwsXG4gICAgICAgICAgXCJwcmljZVwiOiA4LjU4NjExMTExMTExMTExZS03XG4gICAgICAgIH0sXG4gICAgICAgIFwiTGFib3ItLTMtV2hlZWwgQWcgU3ByYXllclwiOiB7XG4gICAgICAgICAgXCJhbW91bnRcIjogMSxcbiAgICAgICAgICBcIm9yaWdpbmFsQW1vdW50XCI6IDEsXG4gICAgICAgICAgXCJ1bml0c1wiOiBcImgvaFwiLFxuICAgICAgICAgIFwiZXJyb3JcIjogdHJ1ZVxuICAgICAgICB9XG4gICAgICB9LFxuICAgICAgXCJwcmljZVwiOiAwXG4gICAgfSxcbiAgICB7XG4gICAgICBcImNsYXNzXCI6IFwiZXF1aXBtZW50XCIsXG4gICAgICBcIm5hbWVcIjogXCJDaGFsbGVuZ2VyIHRyYWN0b3JcIixcbiAgICAgIFwidW5pdHNcIjogXCJoXCIsXG4gICAgICBcInR5cGVcIjogXCJjb21wbGV4XCIsXG4gICAgICBcIm1hdGVyaWFsc1wiOiB7XG4gICAgICAgIFwiRXF1aXBtZW50IEZ1ZWxcIjoge1xuICAgICAgICAgIFwiYW1vdW50XCI6IDE5LFxuICAgICAgICAgIFwib3JpZ2luYWxBbW91bnRcIjogMTksXG4gICAgICAgICAgXCJ1bml0c1wiOiBcIltnYWxfdXNdL2hcIixcbiAgICAgICAgICBcImVycm9yXCI6IG51bGwsXG4gICAgICAgICAgXCJwcmljZVwiOiA1My4zOVxuICAgICAgICB9LFxuICAgICAgICBcIkxhYm9yLS1DaGFsbGVuZ2VyIHRyYWN0b3JcIjoge1xuICAgICAgICAgIFwiYW1vdW50XCI6IDEsXG4gICAgICAgICAgXCJvcmlnaW5hbEFtb3VudFwiOiAxLFxuICAgICAgICAgIFwidW5pdHNcIjogXCJoL2hcIixcbiAgICAgICAgICBcImVycm9yXCI6IG51bGwsXG4gICAgICAgICAgXCJwcmljZVwiOiA1XG4gICAgICAgIH1cbiAgICAgIH0sXG4gICAgICBcInByaWNlXCI6IDU4LjM5XG4gICAgfSxcbiAgICB7XG4gICAgICBcImNsYXNzXCI6IFwiZXF1aXBtZW50XCIsXG4gICAgICBcIm5hbWVcIjogXCJDb29sZXIvdmFuXCIsXG4gICAgICBcInVuaXRzXCI6IFwiaFwiLFxuICAgICAgXCJ0eXBlXCI6IFwiY29tcGxleFwiLFxuICAgICAgXCJtYXRlcmlhbHNcIjoge1xuICAgICAgICBcIkVxdWlwbWVudCBGdWVsXCI6IHtcbiAgICAgICAgICBcImFtb3VudFwiOiAwLjk2LFxuICAgICAgICAgIFwib3JpZ2luYWxBbW91bnRcIjogMC45NixcbiAgICAgICAgICBcInVuaXRzXCI6IFwiW2dhbF91c10vaFwiLFxuICAgICAgICAgIFwiZXJyb3JcIjogbnVsbCxcbiAgICAgICAgICBcInByaWNlXCI6IDIuNjk3NlxuICAgICAgICB9LFxuICAgICAgICBcIkxhYm9yLS1Db29sZXIvdmFuXCI6IHtcbiAgICAgICAgICBcImFtb3VudFwiOiAyLFxuICAgICAgICAgIFwib3JpZ2luYWxBbW91bnRcIjogMixcbiAgICAgICAgICBcInVuaXRzXCI6IFwiMS9oXCIsXG4gICAgICAgICAgXCJlcnJvclwiOiBudWxsLFxuICAgICAgICAgIFwicHJpY2VcIjogMC4wMDI3Nzc3Nzc3Nzc3Nzc3NzhcbiAgICAgICAgfVxuICAgICAgfSxcbiAgICAgIFwicHJpY2VcIjogMi43MDAzNzc3Nzc3Nzc3Nzc4XG4gICAgfSxcbiAgICB7XG4gICAgICBcImNsYXNzXCI6IFwiZXF1aXBtZW50XCIsXG4gICAgICBcIm5hbWVcIjogXCJFbGltaW5hdG9yXCIsXG4gICAgICBcInVuaXRzXCI6IFwidXMkL2hcIixcbiAgICAgIFwidHlwZVwiOiBcImNvbXBsZXhcIixcbiAgICAgIFwibWF0ZXJpYWxzXCI6IHtcbiAgICAgICAgXCJFcXVpcG1lbnQgRnVlbFwiOiB7XG4gICAgICAgICAgXCJhbW91bnRcIjogMTkuMzYsXG4gICAgICAgICAgXCJvcmlnaW5hbEFtb3VudFwiOiAxOS4zNixcbiAgICAgICAgICBcInVuaXRzXCI6IFwiW2dhbF91c10vaFwiLFxuICAgICAgICAgIFwiZXJyb3JcIjogbnVsbCxcbiAgICAgICAgICBcInByaWNlXCI6IDAuMDAwMDA0MTk3NjU0MzIwOTg3NjU1XG4gICAgICAgIH0sXG4gICAgICAgIFwiTGFib3ItLUVsaW1pbmF0b3JcIjoge1xuICAgICAgICAgIFwiYW1vdW50XCI6IDEsXG4gICAgICAgICAgXCJvcmlnaW5hbEFtb3VudFwiOiAxLFxuICAgICAgICAgIFwidW5pdHNcIjogXCJoL2hcIixcbiAgICAgICAgICBcImVycm9yXCI6IHRydWVcbiAgICAgICAgfVxuICAgICAgfSxcbiAgICAgIFwicHJpY2VcIjogMFxuICAgIH0sXG4gICAge1xuICAgICAgXCJjbGFzc1wiOiBcImVxdWlwbWVudFwiLFxuICAgICAgXCJuYW1lXCI6IFwiRlIgNjA4MCBGSFwiLFxuICAgICAgXCJ1bml0c1wiOiBcImhcIixcbiAgICAgIFwidHlwZVwiOiBcImNvbXBsZXhcIixcbiAgICAgIFwibWF0ZXJpYWxzXCI6IHtcbiAgICAgICAgXCJFcXVpcG1lbnQgRnVlbFwiOiB7XG4gICAgICAgICAgXCJhbW91bnRcIjogMTMuMixcbiAgICAgICAgICBcIm9yaWdpbmFsQW1vdW50XCI6IDEzLjIsXG4gICAgICAgICAgXCJ1bml0c1wiOiBcIltnYWxfdXNdL2hcIixcbiAgICAgICAgICBcImVycm9yXCI6IG51bGwsXG4gICAgICAgICAgXCJwcmljZVwiOiAzNy4wOTJcbiAgICAgICAgfSxcbiAgICAgICAgXCJMYWJvci0tRlIgNjA4MCBGSFwiOiB7XG4gICAgICAgICAgXCJhbW91bnRcIjogMSxcbiAgICAgICAgICBcIm9yaWdpbmFsQW1vdW50XCI6IDEsXG4gICAgICAgICAgXCJ1bml0c1wiOiBcImgvaFwiLFxuICAgICAgICAgIFwiZXJyb3JcIjogbnVsbCxcbiAgICAgICAgICBcInByaWNlXCI6IDZcbiAgICAgICAgfVxuICAgICAgfSxcbiAgICAgIFwicHJpY2VcIjogNDMuMDkyXG4gICAgfSxcbiAgICB7XG4gICAgICBcImNsYXNzXCI6IFwiZXF1aXBtZW50XCIsXG4gICAgICBcIm5hbWVcIjogXCJMYXJnZSB0cmFjdG9yXCIsXG4gICAgICBcInVuaXRzXCI6IFwiaFwiLFxuICAgICAgXCJ0eXBlXCI6IFwiY29tcGxleFwiLFxuICAgICAgXCJtYXRlcmlhbHNcIjoge1xuICAgICAgICBcIkVxdWlwbWVudCBGdWVsXCI6IHtcbiAgICAgICAgICBcImFtb3VudFwiOiAxMy4yLFxuICAgICAgICAgIFwib3JpZ2luYWxBbW91bnRcIjogMTMuMixcbiAgICAgICAgICBcInVuaXRzXCI6IFwiW2dhbF91c10vaFwiLFxuICAgICAgICAgIFwiZXJyb3JcIjogbnVsbCxcbiAgICAgICAgICBcInByaWNlXCI6IDM3LjA5MlxuICAgICAgICB9LFxuICAgICAgICBcIkxhYm9yLS1MYXJnZSB0cmFjdG9yXCI6IHtcbiAgICAgICAgICBcImFtb3VudFwiOiAxLFxuICAgICAgICAgIFwib3JpZ2luYWxBbW91bnRcIjogMSxcbiAgICAgICAgICBcInVuaXRzXCI6IFwiaC9oXCIsXG4gICAgICAgICAgXCJlcnJvclwiOiBudWxsLFxuICAgICAgICAgIFwicHJpY2VcIjogMzVcbiAgICAgICAgfVxuICAgICAgfSxcbiAgICAgIFwicHJpY2VcIjogNzIuMDkyXG4gICAgfSxcbiAgICB7XG4gICAgICBcImNsYXNzXCI6IFwiZXF1aXBtZW50XCIsXG4gICAgICBcIm5hbWVcIjogXCJNaWQtc2l6ZSB0cmFjdG9yXCIsXG4gICAgICBcInVuaXRzXCI6IFwiaFwiLFxuICAgICAgXCJ0eXBlXCI6IFwiY29tcGxleFwiLFxuICAgICAgXCJtYXRlcmlhbHNcIjoge1xuICAgICAgICBcIkVxdWlwbWVudCBGdWVsXCI6IHtcbiAgICAgICAgICBcImFtb3VudFwiOiAzLjk2LFxuICAgICAgICAgIFwib3JpZ2luYWxBbW91bnRcIjogMy45NixcbiAgICAgICAgICBcInVuaXRzXCI6IFwiW2dhbF91c10vaFwiLFxuICAgICAgICAgIFwiZXJyb3JcIjogbnVsbCxcbiAgICAgICAgICBcInByaWNlXCI6IDExLjEyNzZcbiAgICAgICAgfSxcbiAgICAgICAgXCJMYWJvci0tTWlkLXNpemUgdHJhY3RvclwiOiB7XG4gICAgICAgICAgXCJhbW91bnRcIjogMSxcbiAgICAgICAgICBcIm9yaWdpbmFsQW1vdW50XCI6IDEsXG4gICAgICAgICAgXCJ1bml0c1wiOiBcImgvaFwiLFxuICAgICAgICAgIFwiZXJyb3JcIjogbnVsbCxcbiAgICAgICAgICBcInByaWNlXCI6IDIyXG4gICAgICAgIH1cbiAgICAgIH0sXG4gICAgICBcInByaWNlXCI6IDMzLjEyNzZcbiAgICB9LFxuICAgIHtcbiAgICAgIFwiY2xhc3NcIjogXCJlcXVpcG1lbnRcIixcbiAgICAgIFwibmFtZVwiOiBcIlNlbWktdHJhY3RvciB0cmFpbGVyXCIsXG4gICAgICBcInVuaXRzXCI6IFwiaFwiLFxuICAgICAgXCJ0eXBlXCI6IFwiY29tcGxleFwiLFxuICAgICAgXCJtYXRlcmlhbHNcIjoge1xuICAgICAgICBcIkVxdWlwbWVudCBGdWVsXCI6IHtcbiAgICAgICAgICBcImFtb3VudFwiOiA2LjUsXG4gICAgICAgICAgXCJvcmlnaW5hbEFtb3VudFwiOiA2LjUsXG4gICAgICAgICAgXCJ1bml0c1wiOiBcIltnYWxfdXNdL2hcIixcbiAgICAgICAgICBcImVycm9yXCI6IG51bGwsXG4gICAgICAgICAgXCJwcmljZVwiOiAxOC4yNjVcbiAgICAgICAgfSxcbiAgICAgICAgXCJMYWJvci0tU2VtaS10cmFjdG9yIHRyYWlsZXJcIjoge1xuICAgICAgICAgIFwiYW1vdW50XCI6IDEsXG4gICAgICAgICAgXCJvcmlnaW5hbEFtb3VudFwiOiAxLFxuICAgICAgICAgIFwidW5pdHNcIjogXCJoL2hcIixcbiAgICAgICAgICBcImVycm9yXCI6IG51bGwsXG4gICAgICAgICAgXCJwcmljZVwiOiAyOFxuICAgICAgICB9XG4gICAgICB9LFxuICAgICAgXCJwcmljZVwiOiA0Ni4yNjVcbiAgICB9LFxuICAgIHtcbiAgICAgIFwiY2xhc3NcIjogXCJlcXVpcG1lbnRcIixcbiAgICAgIFwibmFtZVwiOiBcIlNtYWxsIHRyYWN0b3JcIixcbiAgICAgIFwidW5pdHNcIjogXCJ1cyQvaFwiLFxuICAgICAgXCJ0eXBlXCI6IFwiY29tcGxleFwiLFxuICAgICAgXCJtYXRlcmlhbHNcIjoge1xuICAgICAgICBcIkVxdWlwbWVudCBGdWVsXCI6IHtcbiAgICAgICAgICBcImFtb3VudFwiOiAxLjk4LFxuICAgICAgICAgIFwib3JpZ2luYWxBbW91bnRcIjogMS45OCxcbiAgICAgICAgICBcInVuaXRzXCI6IFwiW2dhbF91c10vaFwiLFxuICAgICAgICAgIFwiZXJyb3JcIjogbnVsbCxcbiAgICAgICAgICBcInByaWNlXCI6IDQuMjkzMDU1NTU1NTU1NTU1ZS03XG4gICAgICAgIH0sXG4gICAgICAgIFwiTGFib3ItLVNtYWxsIHRyYWN0b3JcIjoge1xuICAgICAgICAgIFwiYW1vdW50XCI6IDEsXG4gICAgICAgICAgXCJvcmlnaW5hbEFtb3VudFwiOiAxLFxuICAgICAgICAgIFwidW5pdHNcIjogXCJoL2hcIixcbiAgICAgICAgICBcImVycm9yXCI6IG51bGwsXG4gICAgICAgICAgXCJwcmljZVwiOiAwLjAwMDAwMTY5NzUzMDg2NDE5NzUzMDhcbiAgICAgICAgfVxuICAgICAgfSxcbiAgICAgIFwicHJpY2VcIjogMC4wMDAwMDIxMjY4MzY0MTk3NTMwODZcbiAgICB9LFxuICAgIHtcbiAgICAgIFwiY2xhc3NcIjogXCJlcXVpcG1lbnRcIixcbiAgICAgIFwibmFtZVwiOiBcIlN1cHBvcnQgVHJ1Y2tcIixcbiAgICAgIFwidW5pdHNcIjogXCJoXCIsXG4gICAgICBcInR5cGVcIjogXCJjb21wbGV4XCIsXG4gICAgICBcIm1hdGVyaWFsc1wiOiB7XG4gICAgICAgIFwiRXF1aXBtZW50IEZ1ZWxcIjoge1xuICAgICAgICAgIFwiYW1vdW50XCI6IDEuNzYsXG4gICAgICAgICAgXCJvcmlnaW5hbEFtb3VudFwiOiAxLjc2LFxuICAgICAgICAgIFwidW5pdHNcIjogXCJbZ2FsX3VzXS9oXCIsXG4gICAgICAgICAgXCJlcnJvclwiOiBudWxsLFxuICAgICAgICAgIFwicHJpY2VcIjogNC45NDU2XG4gICAgICAgIH0sXG4gICAgICAgIFwiTGFib3ItLVN1cHBvcnQgVHJ1Y2tcIjoge1xuICAgICAgICAgIFwiYW1vdW50XCI6IDEsXG4gICAgICAgICAgXCJvcmlnaW5hbEFtb3VudFwiOiAxLFxuICAgICAgICAgIFwidW5pdHNcIjogXCJoL2hcIixcbiAgICAgICAgICBcImVycm9yXCI6IG51bGwsXG4gICAgICAgICAgXCJwcmljZVwiOiAzMFxuICAgICAgICB9XG4gICAgICB9LFxuICAgICAgXCJwcmljZVwiOiAzNC45NDU2XG4gICAgfSxcbiAgICB7XG4gICAgICBcImNsYXNzXCI6IFwiZXF1aXBtZW50XCIsXG4gICAgICBcIm5hbWVcIjogXCJUYW5kZW0gYXhsZSB0cnVja1wiLFxuICAgICAgXCJ1bml0c1wiOiBcImhcIixcbiAgICAgIFwidHlwZVwiOiBcImNvbXBsZXhcIixcbiAgICAgIFwibWF0ZXJpYWxzXCI6IHtcbiAgICAgICAgXCJFcXVpcG1lbnQgRnVlbFwiOiB7XG4gICAgICAgICAgXCJhbW91bnRcIjogMTMuMixcbiAgICAgICAgICBcIm9yaWdpbmFsQW1vdW50XCI6IDEzLjIsXG4gICAgICAgICAgXCJ1bml0c1wiOiBcIltnYWxfdXNdL2hcIixcbiAgICAgICAgICBcImVycm9yXCI6IG51bGwsXG4gICAgICAgICAgXCJwcmljZVwiOiAzNy4wOTJcbiAgICAgICAgfSxcbiAgICAgICAgXCJMYWJvci0tVGFuZGVtIGF4bGUgdHJ1Y2tcIjoge1xuICAgICAgICAgIFwiYW1vdW50XCI6IDEsXG4gICAgICAgICAgXCJvcmlnaW5hbEFtb3VudFwiOiAxLFxuICAgICAgICAgIFwidW5pdHNcIjogXCJoL2hcIixcbiAgICAgICAgICBcImVycm9yXCI6IG51bGwsXG4gICAgICAgICAgXCJwcmljZVwiOiAyNlxuICAgICAgICB9XG4gICAgICB9LFxuICAgICAgXCJwcmljZVwiOiA2My4wOTJcbiAgICB9LFxuICAgIHtcbiAgICAgIFwiY2xhc3NcIjogXCJlcXVpcG1lbnRcIixcbiAgICAgIFwibmFtZVwiOiBcIlRyYWN0b3IgYW5kIHNwcmF5ZXJcIixcbiAgICAgIFwidW5pdHNcIjogXCJoXCIsXG4gICAgICBcInR5cGVcIjogXCJjb21wbGV4XCIsXG4gICAgICBcIm1hdGVyaWFsc1wiOiB7XG4gICAgICAgIFwiRXF1aXBtZW50IEZ1ZWxcIjoge1xuICAgICAgICAgIFwiYW1vdW50XCI6IDMuOTYsXG4gICAgICAgICAgXCJvcmlnaW5hbEFtb3VudFwiOiAzLjk2LFxuICAgICAgICAgIFwidW5pdHNcIjogXCJbZ2FsX3VzXS9oXCIsXG4gICAgICAgICAgXCJlcnJvclwiOiBudWxsLFxuICAgICAgICAgIFwicHJpY2VcIjogMTEuMTI3NlxuICAgICAgICB9LFxuICAgICAgICBcIkxhYm9yLS1UcmFjdG9yIGFuZCBzcHJheWVyXCI6IHtcbiAgICAgICAgICBcImFtb3VudFwiOiAxLFxuICAgICAgICAgIFwib3JpZ2luYWxBbW91bnRcIjogMSxcbiAgICAgICAgICBcInVuaXRzXCI6IFwiaC9oXCIsXG4gICAgICAgICAgXCJlcnJvclwiOiB0cnVlXG4gICAgICAgIH1cbiAgICAgIH0sXG4gICAgICBcInByaWNlXCI6IDBcbiAgICB9LFxuICAgIHtcbiAgICAgIFwiY2xhc3NcIjogXCJsYWJvclwiLFxuICAgICAgXCJuYW1lXCI6IFwiaG9laW5nXCIsXG4gICAgICBcInVuaXRzXCI6IFwiMTAwLlthY3JfdXNdXCIsXG4gICAgICBcInR5cGVcIjogXCJjb21wbGV4XCIsXG4gICAgICBcIm1hdGVyaWFsc1wiOiB7XG4gICAgICAgIFwiTGFib3JlclwiOiB7XG4gICAgICAgICAgXCJhbW91bnRcIjogMTkyLFxuICAgICAgICAgIFwib3JpZ2luYWxBbW91bnRcIjogMTkyLFxuICAgICAgICAgIFwidW5pdHNcIjogXCJoLygxMDAuW2Fjcl91c10pXCIsXG4gICAgICAgICAgXCJlcnJvclwiOiBudWxsLFxuICAgICAgICAgIFwicHJpY2VcIjogMzg0MFxuICAgICAgICB9XG4gICAgICB9LFxuICAgICAgXCJwcmljZVwiOiAzODQwXG4gICAgfSxcbiAgICB7XG4gICAgICBcImNsYXNzXCI6IFwibGFib3JcIixcbiAgICAgIFwibmFtZVwiOiBcImhlcmJpY2lkZSAtIG1hbnVhbFwiLFxuICAgICAgXCJ1bml0c1wiOiBcIjEwMC5bYWNyX3VzXVwiLFxuICAgICAgXCJ0eXBlXCI6IFwiY29tcGxleFwiLFxuICAgICAgXCJtYXRlcmlhbHNcIjoge1xuICAgICAgICBcIkdseXBob3NhdGVcIjoge1xuICAgICAgICAgIFwiYW1vdW50XCI6IDIwMCxcbiAgICAgICAgICBcIm9yaWdpbmFsQW1vdW50XCI6IDIwMCxcbiAgICAgICAgICBcInVuaXRzXCI6IFwiW3F0X3VzXS8oMTAwLlthY3JfdXNdKVwiLFxuICAgICAgICAgIFwiZXJyb3JcIjogbnVsbCxcbiAgICAgICAgICBcInByaWNlXCI6IDgwMFxuICAgICAgICB9LFxuICAgICAgICBcIkxhYm9yZXJcIjoge1xuICAgICAgICAgIFwiYW1vdW50XCI6IDk2LFxuICAgICAgICAgIFwib3JpZ2luYWxBbW91bnRcIjogOTYsXG4gICAgICAgICAgXCJ1bml0c1wiOiBcImgvKDEwMC5bYWNyX3VzXSlcIixcbiAgICAgICAgICBcImVycm9yXCI6IG51bGwsXG4gICAgICAgICAgXCJwcmljZVwiOiAxOTIwXG4gICAgICAgIH1cbiAgICAgIH0sXG4gICAgICBcInByaWNlXCI6IDI3MjBcbiAgICB9XG4gIF0sXG4gIFwib3BlcmF0aW9uc1wiOiBbXG4gICAge1xuICAgICAgXCJuYW1lXCI6IFwiY3JvcCBjYXJlIC0gZXN0YWJsaXNoZWRcIixcbiAgICAgIFwibWF0ZXJpYWxzXCI6IHtcbiAgICAgICAgXCJob2VpbmdcIjoge1xuICAgICAgICAgIFwiYW1vdW50XCI6IDE1MCxcbiAgICAgICAgICBcIm1hdGVyaWFsXCI6IFwiaG9laW5nXCIsXG4gICAgICAgICAgXCJ1bml0c1wiOiBcIlthY3JfdXNdXCIsXG4gICAgICAgICAgXCJlcnJvclwiOiBudWxsLFxuICAgICAgICAgIFwicHJpY2VcIjogNTc2MFxuICAgICAgICB9LFxuICAgICAgICBcImhlcmJpY2lkZSAtIG1hbnVhbFwiOiB7XG4gICAgICAgICAgXCJhbW91bnRcIjogMTAwLFxuICAgICAgICAgIFwibWF0ZXJpYWxcIjogXCJoZXJiaWNpZGUgLSBtYW51YWxcIixcbiAgICAgICAgICBcInVuaXRzXCI6IFwiW2Fjcl91c11cIixcbiAgICAgICAgICBcImVycm9yXCI6IG51bGwsXG4gICAgICAgICAgXCJwcmljZVwiOiAyNzIwXG4gICAgICAgIH1cbiAgICAgIH0sXG4gICAgICBcInVuaXRzXCI6IFwiW2Fjcl91c11cIixcbiAgICAgIFwic2NoZWR1bGVcIjogW1xuICAgICAgICB7XG4gICAgICAgICAgXCJkYXRlXCI6IFwiMjAxOC0xMS0wMVwiLFxuICAgICAgICAgIFwibGVuZ3RoXCI6IFwiMVwiLFxuICAgICAgICAgIFwidW5pdHNcIjogXCJ5ZWFyXCJcbiAgICAgICAgfSxcbiAgICAgICAge1xuICAgICAgICAgIFwiZGF0ZVwiOiBcIjIwMTktMTEtMDFcIixcbiAgICAgICAgICBcImxlbmd0aFwiOiBcIjFcIixcbiAgICAgICAgICBcInVuaXRzXCI6IFwieWVhclwiXG4gICAgICAgIH0sXG4gICAgICAgIHtcbiAgICAgICAgICBcImRhdGVcIjogXCIyMDIyLTExLTAxXCIsXG4gICAgICAgICAgXCJsZW5ndGhcIjogXCIxXCIsXG4gICAgICAgICAgXCJ1bml0c1wiOiBcInllYXJcIlxuICAgICAgICB9LFxuICAgICAgICB7XG4gICAgICAgICAgXCJkYXRlXCI6IFwiMjAyMy0xMS0wMVwiLFxuICAgICAgICAgIFwibGVuZ3RoXCI6IFwiMVwiLFxuICAgICAgICAgIFwidW5pdHNcIjogXCJ5ZWFyXCJcbiAgICAgICAgfSxcbiAgICAgICAge1xuICAgICAgICAgIFwiZGF0ZVwiOiBcIjIwMjYtMTEtMDFcIixcbiAgICAgICAgICBcImxlbmd0aFwiOiBcIjFcIixcbiAgICAgICAgICBcInVuaXRzXCI6IFwieWVhclwiXG4gICAgICAgIH0sXG4gICAgICAgIHtcbiAgICAgICAgICBcImRhdGVcIjogXCIyMDI3LTExLTAxXCIsXG4gICAgICAgICAgXCJsZW5ndGhcIjogXCIxXCIsXG4gICAgICAgICAgXCJ1bml0c1wiOiBcInllYXJcIlxuICAgICAgICB9LFxuICAgICAgICB7XG4gICAgICAgICAgXCJkYXRlXCI6IFwiMjAzMC0xMS0wMVwiLFxuICAgICAgICAgIFwibGVuZ3RoXCI6IFwiMVwiLFxuICAgICAgICAgIFwidW5pdHNcIjogXCJ5ZWFyXCJcbiAgICAgICAgfSxcbiAgICAgICAge1xuICAgICAgICAgIFwiZGF0ZVwiOiBcIjIwMzEtMTEtMDFcIixcbiAgICAgICAgICBcImxlbmd0aFwiOiBcIjFcIixcbiAgICAgICAgICBcInVuaXRzXCI6IFwieWVhclwiXG4gICAgICAgIH1cbiAgICAgIF0sXG4gICAgICBcImlkXCI6IFwiMDE2YjU4OWItOTFlMS00YWRmLTk1NTAtMDhmNDliNzZlZjQ4XCIsXG4gICAgICBcInN1YnRvdGFsXCI6IDg0ODAsXG4gICAgICBcInRvdGFsXCI6IDY3ODQwXG4gICAgfSxcbiAgICB7XG4gICAgICBcIm5hbWVcIjogXCJwbGFudGluZ1wiLFxuICAgICAgXCJtYXRlcmlhbHNcIjoge1xuICAgICAgICBcIlNlbWktdHJhY3RvciB0cmFpbGVyXCI6IHtcbiAgICAgICAgICBcIm5vdGVcIjogXCJUcmFuc3BvcnQgTnVyc2VyeSB0byBmaWVsZFwiLFxuICAgICAgICAgIFwiYW1vdW50XCI6IDIwLFxuICAgICAgICAgIFwibWF0ZXJpYWxcIjogXCJTZW1pLXRyYWN0b3IgdHJhaWxlclwiLFxuICAgICAgICAgIFwidW5pdHNcIjogXCJoXCIsXG4gICAgICAgICAgXCJlcnJvclwiOiBudWxsLFxuICAgICAgICAgIFwicHJpY2VcIjogOTI1LjNcbiAgICAgICAgfSxcbiAgICAgICAgXCJQb3BsYXIgQ3V0dGluZ1wiOiB7XG4gICAgICAgICAgXCJhbW91bnRcIjogMTQ1MDAwLFxuICAgICAgICAgIFwibWF0ZXJpYWxcIjogXCJQb3BsYXIgQ3V0dGluZ1wiLFxuICAgICAgICAgIFwidW5pdHNcIjogXCIxXCIsXG4gICAgICAgICAgXCJlcnJvclwiOiBudWxsLFxuICAgICAgICAgIFwicHJpY2VcIjogMTE2MDBcbiAgICAgICAgfSxcbiAgICAgICAgXCJDb29sZXIvdmFuXCI6IHtcbiAgICAgICAgICBcImFtb3VudFwiOiAxMDgxLFxuICAgICAgICAgIFwibWF0ZXJpYWxcIjogXCJDb29sZXIvdmFuXCIsXG4gICAgICAgICAgXCJ1bml0c1wiOiBcImhcIixcbiAgICAgICAgICBcImVycm9yXCI6IG51bGwsXG4gICAgICAgICAgXCJwcmljZVwiOiAyOTE5LjEwODM3Nzc3Nzc3NzYsXG4gICAgICAgICAgXCJvcmlnaW5hbEFtb3VudFwiOiAxMDgxXG4gICAgICAgIH0sXG4gICAgICAgIFwiTGFib3JlclwiOiB7XG4gICAgICAgICAgXCJhbW91bnRcIjogNDgwLFxuICAgICAgICAgIFwibWF0ZXJpYWxcIjogXCJMYWJvcmVyXCIsXG4gICAgICAgICAgXCJ1bml0c1wiOiBcImhcIixcbiAgICAgICAgICBcImVycm9yXCI6IG51bGwsXG4gICAgICAgICAgXCJwcmljZVwiOiA5NjAwXG4gICAgICAgIH1cbiAgICAgIH0sXG4gICAgICBcInVuaXRzXCI6IFwiW2Fjcl91c11cIixcbiAgICAgIFwic2NoZWR1bGVcIjogW1xuICAgICAgICB7XG4gICAgICAgICAgXCJkYXRlXCI6IFwiMjAxNS0xMC0wMVwiLFxuICAgICAgICAgIFwibGVuZ3RoXCI6IFwiMVwiLFxuICAgICAgICAgIFwidW5pdHNcIjogXCJtb250aFwiXG4gICAgICAgIH1cbiAgICAgIF0sXG4gICAgICBcImlkXCI6IFwiMmMwM2Q1ZjMtZjQ0Zi00NjE3LTllMGMtODk2OTI4NTQ1YmQ1XCIsXG4gICAgICBcInN1YnRvdGFsXCI6IDI1MDQ0LjQwODM3Nzc3Nzc3OCxcbiAgICAgIFwidG90YWxcIjogMjUwNDQuNDA4Mzc3Nzc3Nzc4XG4gICAgfSxcbiAgICB7XG4gICAgICBcIm5hbWVcIjogXCJjcm9wIGNhcmUgLSB5cjBcIixcbiAgICAgIFwibWF0ZXJpYWxzXCI6IHtcbiAgICAgICAgXCJoZXJiaWNpZGUgLSBtYW51YWxcIjoge1xuICAgICAgICAgIFwiYW1vdW50XCI6IDI1LFxuICAgICAgICAgIFwibWF0ZXJpYWxcIjogXCJoZXJiaWNpZGUgLSBtYW51YWxcIixcbiAgICAgICAgICBcInVuaXRzXCI6IFwiW2Fjcl91c11cIixcbiAgICAgICAgICBcImVycm9yXCI6IG51bGwsXG4gICAgICAgICAgXCJwcmljZVwiOiA2ODBcbiAgICAgICAgfSxcbiAgICAgICAgXCJob2VpbmdcIjoge1xuICAgICAgICAgIFwibm90ZVwiOiBcIjIgdGltZXMgb3ZlciA3MCBhY3JlcyBlYWNoLlwiLFxuICAgICAgICAgIFwiYW1vdW50XCI6IDE0MCxcbiAgICAgICAgICBcIm1hdGVyaWFsXCI6IFwiaG9laW5nXCIsXG4gICAgICAgICAgXCJ1bml0c1wiOiBcIlthY3JfdXNdXCIsXG4gICAgICAgICAgXCJlcnJvclwiOiBudWxsLFxuICAgICAgICAgIFwicHJpY2VcIjogNTM3NlxuICAgICAgICB9XG4gICAgICB9LFxuICAgICAgXCJ1bml0c1wiOiBcIlthY3JfdXNdXCIsXG4gICAgICBcInNjaGVkdWxlXCI6IFtcbiAgICAgICAge1xuICAgICAgICAgIFwiZGF0ZVwiOiBcIjIwMTUtMTEtMDFcIixcbiAgICAgICAgICBcImxlbmd0aFwiOiBcIjFcIixcbiAgICAgICAgICBcInVuaXRzXCI6IFwieWVhclwiXG4gICAgICAgIH1cbiAgICAgIF0sXG4gICAgICBcImlkXCI6IFwiYWEwYjIyYWMtMzM5OC00ZTdkLWJmMjMtZGY1YWYyNTQ0YjI4XCIsXG4gICAgICBcInN1YnRvdGFsXCI6IDYwNTYsXG4gICAgICBcInRvdGFsXCI6IDYwNTZcbiAgICB9LFxuICAgIHtcbiAgICAgIFwibmFtZVwiOiBcImhhcnZlc3QgLSBlc3RhYmxpc2hlZFwiLFxuICAgICAgXCJtYXRlcmlhbHNcIjoge1xuICAgICAgICBcIkZSIDYwODAgRkhcIjoge1xuICAgICAgICAgIFwiYW1vdW50XCI6IDM1LFxuICAgICAgICAgIFwibWF0ZXJpYWxcIjogXCJGUiA2MDgwIEZIXCIsXG4gICAgICAgICAgXCJ1bml0c1wiOiBcImhcIixcbiAgICAgICAgICBcImVycm9yXCI6IG51bGwsXG4gICAgICAgICAgXCJwcmljZVwiOiAxNTA4LjIyLFxuICAgICAgICAgIFwib3JpZ2luYWxBbW91bnRcIjogMzVcbiAgICAgICAgfSxcbiAgICAgICAgXCJUYW5kZW0gYXhsZSB0cnVja1wiOiB7XG4gICAgICAgICAgXCJhbW91bnRcIjogMTc1LFxuICAgICAgICAgIFwibWF0ZXJpYWxcIjogXCJUYW5kZW0gYXhsZSB0cnVja1wiLFxuICAgICAgICAgIFwidW5pdHNcIjogXCJoXCIsXG4gICAgICAgICAgXCJlcnJvclwiOiBudWxsLFxuICAgICAgICAgIFwicHJpY2VcIjogMTEwNDEuMVxuICAgICAgICB9LFxuICAgICAgICBcIlN1cHBvcnQgVHJ1Y2tcIjoge1xuICAgICAgICAgIFwiYW1vdW50XCI6IDM1LFxuICAgICAgICAgIFwibWF0ZXJpYWxcIjogXCJTdXBwb3J0IFRydWNrXCIsXG4gICAgICAgICAgXCJ1bml0c1wiOiBcImhcIixcbiAgICAgICAgICBcImVycm9yXCI6IG51bGwsXG4gICAgICAgICAgXCJwcmljZVwiOiAxMjIzLjA5NlxuICAgICAgICB9XG4gICAgICB9LFxuICAgICAgXCJ1bml0c1wiOiBcIlthY3JfdXNdXCIsXG4gICAgICBcInNjaGVkdWxlXCI6IFtcbiAgICAgICAge1xuICAgICAgICAgIFwiZGF0ZVwiOiBcIjIwMjAtMTAtMDFcIixcbiAgICAgICAgICBcImxlbmd0aFwiOiBcIjFcIixcbiAgICAgICAgICBcInVuaXRzXCI6IFwibW9udGhcIlxuICAgICAgICB9LFxuICAgICAgICB7XG4gICAgICAgICAgXCJkYXRlXCI6IFwiMjAyMy0xMC0wMVwiLFxuICAgICAgICAgIFwibGVuZ3RoXCI6IFwiMVwiLFxuICAgICAgICAgIFwidW5pdHNcIjogXCJtb250aFwiXG4gICAgICAgIH0sXG4gICAgICAgIHtcbiAgICAgICAgICBcImRhdGVcIjogXCIyMDI4LTEwLTAxXCIsXG4gICAgICAgICAgXCJsZW5ndGhcIjogXCIxXCIsXG4gICAgICAgICAgXCJ1bml0c1wiOiBcIm1vbnRoXCJcbiAgICAgICAgfSxcbiAgICAgICAge1xuICAgICAgICAgIFwiZGF0ZVwiOiBcIjIwMzItMTAtMDFcIixcbiAgICAgICAgICBcImxlbmd0aFwiOiBcIjFcIixcbiAgICAgICAgICBcInVuaXRzXCI6IFwibW9udGhcIlxuICAgICAgICB9XG4gICAgICBdLFxuICAgICAgXCJpZFwiOiBcIjQ4MGIzYWViLTczNTAtNDFmYS04OGI1LTI0ZjMyOTIyM2Y5NlwiLFxuICAgICAgXCJzdWJ0b3RhbFwiOiAxMzc3Mi40MTYsXG4gICAgICBcInRvdGFsXCI6IDU1MDg5LjY2NFxuICAgIH0sXG4gICAge1xuICAgICAgXCJuYW1lXCI6IFwiY3JvcCBjYXJlIC0geXIxXCIsXG4gICAgICBcIm1hdGVyaWFsc1wiOiB7XG4gICAgICAgIFwiU21hbGwgVHJhY3RvclwiOiB7XG4gICAgICAgICAgXCJub3RlXCI6IFwiVGlsbGFnZVwiLFxuICAgICAgICAgIFwiYW1vdW50XCI6IDQ4LFxuICAgICAgICAgIFwibWF0ZXJpYWxcIjogXCJTbWFsbCBUcmFjdG9yXCIsXG4gICAgICAgICAgXCJ1bml0c1wiOiBcImhcIixcbiAgICAgICAgICBcImVycm9yXCI6IHtcbiAgICAgICAgICAgIFwibmFtZVwiOiBcIlNtYWxsIFRyYWN0b3JcIixcbiAgICAgICAgICAgIFwiZXJyb3JcIjogdHJ1ZSxcbiAgICAgICAgICAgIFwibWVzc2FnZVwiOiBcIlNtYWxsIFRyYWN0b3IgaXMgbm90IGluIHRoZSBtYXRlcmlhbCBsaXN0XCJcbiAgICAgICAgICB9XG4gICAgICAgIH0sXG4gICAgICAgIFwiaG9laW5nXCI6IHtcbiAgICAgICAgICBcIm5vdGVcIjogXCI1IHRpbWVzXCIsXG4gICAgICAgICAgXCJhbW91bnRcIjogNTAwLFxuICAgICAgICAgIFwibWF0ZXJpYWxcIjogXCJob2VpbmdcIixcbiAgICAgICAgICBcInVuaXRzXCI6IFwiW2Fjcl91c11cIixcbiAgICAgICAgICBcImVycm9yXCI6IG51bGwsXG4gICAgICAgICAgXCJwcmljZVwiOiAxOTIwMFxuICAgICAgICB9LFxuICAgICAgICBcImhlcmJpY2lkZSAtIG1hbnVhbFwiOiB7XG4gICAgICAgICAgXCJub3RlXCI6IFwiMyB0aW1lcywgMS8yIGZpZWxkXCIsXG4gICAgICAgICAgXCJhbW91bnRcIjogMTUwLFxuICAgICAgICAgIFwibWF0ZXJpYWxcIjogXCJoZXJiaWNpZGUgLSBtYW51YWxcIixcbiAgICAgICAgICBcInVuaXRzXCI6IFwiW2Fjcl91c11cIixcbiAgICAgICAgICBcImVycm9yXCI6IG51bGwsXG4gICAgICAgICAgXCJwcmljZVwiOiA0MDgwLFxuICAgICAgICAgIFwib3JpZ2luYWxBbW91bnRcIjogMTUwXG4gICAgICAgIH0sXG4gICAgICAgIFwiTGFib3JlclwiOiB7XG4gICAgICAgICAgXCJub3RlXCI6IFwiSW50ZXJwbGFudGluZ1wiLFxuICAgICAgICAgIFwiYW1vdW50XCI6IDk2LFxuICAgICAgICAgIFwibWF0ZXJpYWxcIjogXCJMYWJvcmVyXCIsXG4gICAgICAgICAgXCJ1bml0c1wiOiBcImhcIixcbiAgICAgICAgICBcImVycm9yXCI6IG51bGwsXG4gICAgICAgICAgXCJwcmljZVwiOiAxOTIwXG4gICAgICAgIH1cbiAgICAgIH0sXG4gICAgICBcInVuaXRzXCI6IFwiW2Fjcl91c11cIixcbiAgICAgIFwic2NoZWR1bGVcIjogW1xuICAgICAgICB7XG4gICAgICAgICAgXCJkYXRlXCI6IFwiMjAxNi0xMS0wMVwiLFxuICAgICAgICAgIFwibGVuZ3RoXCI6IFwiMVwiLFxuICAgICAgICAgIFwidW5pdHNcIjogXCJ5ZWFyXCJcbiAgICAgICAgfVxuICAgICAgXSxcbiAgICAgIFwiaWRcIjogXCIzODc5ZjYwYi0zZDRiLTRhOTEtYTY3MC05NjExNDdhNDViYmFcIixcbiAgICAgIFwic3VidG90YWxcIjogMjUyMDAsXG4gICAgICBcInRvdGFsXCI6IDI1MjAwXG4gICAgfSxcbiAgICB7XG4gICAgICBcIm5hbWVcIjogXCJyZXN0b3JhdGlvblwiLFxuICAgICAgXCJtYXRlcmlhbHNcIjoge1xuICAgICAgICBcIkxhcmdlIHRyYWN0b3JcIjoge1xuICAgICAgICAgIFwibm90ZVwiOiBcImRpc2tpbmdcIixcbiAgICAgICAgICBcImFtb3VudFwiOiAxMixcbiAgICAgICAgICBcIm1hdGVyaWFsXCI6IFwiTGFyZ2UgdHJhY3RvclwiLFxuICAgICAgICAgIFwidW5pdHNcIjogXCJoXCIsXG4gICAgICAgICAgXCJlcnJvclwiOiBudWxsLFxuICAgICAgICAgIFwicHJpY2VcIjogODY1LjEwNFxuICAgICAgICB9LFxuICAgICAgICBcIlRyYWN0b3IgYW5kIHNwcmF5ZXJcIjoge1xuICAgICAgICAgIFwibm90ZVwiOiBcImhlcmJpY2lkZVwiLFxuICAgICAgICAgIFwiYW1vdW50XCI6IDIwLFxuICAgICAgICAgIFwibWF0ZXJpYWxcIjogXCJUcmFjdG9yIGFuZCBzcHJheWVyXCIsXG4gICAgICAgICAgXCJ1bml0c1wiOiBcImhcIixcbiAgICAgICAgICBcImVycm9yXCI6IG51bGwsXG4gICAgICAgICAgXCJwcmljZVwiOiAwXG4gICAgICAgIH0sXG4gICAgICAgIFwiR2x5cGhvc2F0ZVwiOiB7XG4gICAgICAgICAgXCJub3RlXCI6IFwiaGVyYmljaWRlXCIsXG4gICAgICAgICAgXCJhbW91bnRcIjogMjAwLFxuICAgICAgICAgIFwibWF0ZXJpYWxcIjogXCJHbHlwaG9zYXRlXCIsXG4gICAgICAgICAgXCJ1bml0c1wiOiBcIltxdF91c11cIixcbiAgICAgICAgICBcImVycm9yXCI6IG51bGwsXG4gICAgICAgICAgXCJwcmljZVwiOiA4MDBcbiAgICAgICAgfSxcbiAgICAgICAgXCIyLDQtRFwiOiB7XG4gICAgICAgICAgXCJub3RlXCI6IFwiaGVyYmljaWRlXCIsXG4gICAgICAgICAgXCJhbW91bnRcIjogMjAwLFxuICAgICAgICAgIFwibWF0ZXJpYWxcIjogXCIyLDQtRFwiLFxuICAgICAgICAgIFwidW5pdHNcIjogXCJbcXRfdXNdXCIsXG4gICAgICAgICAgXCJlcnJvclwiOiBudWxsLFxuICAgICAgICAgIFwicHJpY2VcIjogMTAwMFxuICAgICAgICB9XG4gICAgICB9LFxuICAgICAgXCJ1bml0c1wiOiBcIlthY3JfdXNdXCIsXG4gICAgICBcInNjaGVkdWxlXCI6IFtcbiAgICAgICAge1xuICAgICAgICAgIFwiZGF0ZVwiOiBcIjIwMzItMTEtMDFcIixcbiAgICAgICAgICBcImxlbmd0aFwiOiBcIjNcIixcbiAgICAgICAgICBcInVuaXRzXCI6IFwibW9udGhcIlxuICAgICAgICB9XG4gICAgICBdLFxuICAgICAgXCJpZFwiOiBcIjg2OTBmMGY5LWExMDMtNDQzOC05MDVlLWJiZDcxY2NiZGRlM1wiLFxuICAgICAgXCJzdWJ0b3RhbFwiOiAyNjY1LjEwNDAwMDAwMDAwMDMsXG4gICAgICBcInRvdGFsXCI6IDI2NjUuMTA0MDAwMDAwMDAwM1xuICAgIH0sXG4gICAge1xuICAgICAgXCJuYW1lXCI6IFwiY3JvcCBjYXJlIC0gcG9zdCBoYXJ2ZXN0XCIsXG4gICAgICBcIm1hdGVyaWFsc1wiOiB7XG4gICAgICAgIFwiTWlkLXNpemUgdHJhY3RvclwiOiB7XG4gICAgICAgICAgXCJub3RlXCI6IFwiUG9zdCBoYXJ2ZXN0IGNsZWFuIHVwXCIsXG4gICAgICAgICAgXCJhbW91bnRcIjogMzAsXG4gICAgICAgICAgXCJtYXRlcmlhbFwiOiBcIk1pZC1zaXplIHRyYWN0b3JcIixcbiAgICAgICAgICBcInVuaXRzXCI6IFwiaFwiLFxuICAgICAgICAgIFwiZXJyb3JcIjogbnVsbCxcbiAgICAgICAgICBcInByaWNlXCI6IDk5My44MjhcbiAgICAgICAgfSxcbiAgICAgICAgXCJUcmFjdG9yIGFuZCBzcHJheWVyXCI6IHtcbiAgICAgICAgICBcIm5vdGVcIjogXCJEb3JtYW50IEhlcmJpY2lkZVwiLFxuICAgICAgICAgIFwiYW1vdW50XCI6IDgsXG4gICAgICAgICAgXCJtYXRlcmlhbFwiOiBcIlRyYWN0b3IgYW5kIHNwcmF5ZXJcIixcbiAgICAgICAgICBcInVuaXRzXCI6IFwiaFwiLFxuICAgICAgICAgIFwiZXJyb3JcIjogbnVsbCxcbiAgICAgICAgICBcInByaWNlXCI6IDBcbiAgICAgICAgfSxcbiAgICAgICAgXCJHbHlwaG9zYXRlXCI6IHtcbiAgICAgICAgICBcIm5vdGVcIjogXCJEb3JtYW50IEhlcmJpY2lkZVwiLFxuICAgICAgICAgIFwiYW1vdW50XCI6IDIwMCxcbiAgICAgICAgICBcIm1hdGVyaWFsXCI6IFwiR2x5cGhvc2F0ZVwiLFxuICAgICAgICAgIFwidW5pdHNcIjogXCJbcXRfdXNdXCIsXG4gICAgICAgICAgXCJlcnJvclwiOiBudWxsLFxuICAgICAgICAgIFwicHJpY2VcIjogODAwXG4gICAgICAgIH0sXG4gICAgICAgIFwiVHJpZmx1cmFsaW5cIjoge1xuICAgICAgICAgIFwibm90ZVwiOiBcIkRvcm1hbnQgSGVyYmljaWRlXCIsXG4gICAgICAgICAgXCJhbW91bnRcIjogMjAwLFxuICAgICAgICAgIFwibWF0ZXJpYWxcIjogXCJUcmlmbHVyYWxpblwiLFxuICAgICAgICAgIFwidW5pdHNcIjogXCJbcXRfdXNdXCIsXG4gICAgICAgICAgXCJlcnJvclwiOiBudWxsLFxuICAgICAgICAgIFwicHJpY2VcIjogMTUwMFxuICAgICAgICB9LFxuICAgICAgICBcImhlcmJpY2lkZSAtIG1hbnVhbFwiOiB7XG4gICAgICAgICAgXCJub3RlXCI6IFwicG9zdCBlbWVyZ2VudFwiLFxuICAgICAgICAgIFwiYW1vdW50XCI6IDEwMCxcbiAgICAgICAgICBcIm1hdGVyaWFsXCI6IFwiaGVyYmljaWRlIC0gbWFudWFsXCIsXG4gICAgICAgICAgXCJ1bml0c1wiOiBcIlthY3JfdXNdXCIsXG4gICAgICAgICAgXCJlcnJvclwiOiBudWxsLFxuICAgICAgICAgIFwicHJpY2VcIjogMjcyMFxuICAgICAgICB9XG4gICAgICB9LFxuICAgICAgXCJ1bml0c1wiOiBcIlthY3JfdXNdXCIsXG4gICAgICBcInNjaGVkdWxlXCI6IFtcbiAgICAgICAge1xuICAgICAgICAgIFwiZGF0ZVwiOiBcIjIwMTctMTEtMDFcIixcbiAgICAgICAgICBcImxlbmd0aFwiOiBcIjFcIixcbiAgICAgICAgICBcInVuaXRzXCI6IFwieWVhclwiXG4gICAgICAgIH0sXG4gICAgICAgIHtcbiAgICAgICAgICBcImRhdGVcIjogXCIyMDIxLTExLTAxXCIsXG4gICAgICAgICAgXCJsZW5ndGhcIjogXCIxXCIsXG4gICAgICAgICAgXCJ1bml0c1wiOiBcInllYXJcIlxuICAgICAgICB9LFxuICAgICAgICB7XG4gICAgICAgICAgXCJkYXRlXCI6IFwiMjAyNS0xMS0wMVwiLFxuICAgICAgICAgIFwibGVuZ3RoXCI6IFwiMVwiLFxuICAgICAgICAgIFwidW5pdHNcIjogXCJ5ZWFyXCJcbiAgICAgICAgfSxcbiAgICAgICAge1xuICAgICAgICAgIFwiZGF0ZVwiOiBcIjIwMjktMTEtMDFcIixcbiAgICAgICAgICBcImxlbmd0aFwiOiBcIjFcIixcbiAgICAgICAgICBcInVuaXRzXCI6IFwieWVhclwiXG4gICAgICAgIH1cbiAgICAgIF0sXG4gICAgICBcImlkXCI6IFwiZDM0MzRmOTItMWVmNC00MmI2LTkwMjYtZGNlZGM1NWFjNjhlXCIsXG4gICAgICBcInN1YnRvdGFsXCI6IDYwMTMuODI3OTk5OTk5OTk5NSxcbiAgICAgIFwidG90YWxcIjogMjQwNTUuMzExOTk5OTk5OTk4XG4gICAgfSxcbiAgICB7XG4gICAgICBcIm5hbWVcIjogXCJoYXJ2ZXN0IC0geXIxXCIsXG4gICAgICBcIm1hdGVyaWFsc1wiOiB7XG4gICAgICAgIFwiRlIgNjA4MCBGSFwiOiB7XG4gICAgICAgICAgXCJub3RlXCI6IFwiXCIsXG4gICAgICAgICAgXCJhbW91bnRcIjogMjYsXG4gICAgICAgICAgXCJtYXRlcmlhbFwiOiBcIkZSIDYwODAgRkhcIixcbiAgICAgICAgICBcInVuaXRzXCI6IFwiaFwiLFxuICAgICAgICAgIFwiZXJyb3JcIjogbnVsbCxcbiAgICAgICAgICBcInByaWNlXCI6IDExMjAuMzkyXG4gICAgICAgIH0sXG4gICAgICAgIFwiVGFuZG9tIGF4bGUgdHJ1Y2tcIjoge1xuICAgICAgICAgIFwiYW1vdW50XCI6IDEwNCxcbiAgICAgICAgICBcIm1hdGVyaWFsXCI6IFwiVGFuZG9tIGF4bGUgdHJ1Y2tcIixcbiAgICAgICAgICBcInVuaXRzXCI6IFwiaFwiLFxuICAgICAgICAgIFwiZXJyb3JcIjoge1xuICAgICAgICAgICAgXCJuYW1lXCI6IFwiVGFuZG9tIGF4bGUgdHJ1Y2tcIixcbiAgICAgICAgICAgIFwiZXJyb3JcIjogdHJ1ZSxcbiAgICAgICAgICAgIFwibWVzc2FnZVwiOiBcIlRhbmRvbSBheGxlIHRydWNrIGlzIG5vdCBpbiB0aGUgbWF0ZXJpYWwgbGlzdFwiXG4gICAgICAgICAgfVxuICAgICAgICB9LFxuICAgICAgICBcIlN1cHBvcnQgdHJ1Y2tcIjoge1xuICAgICAgICAgIFwiYW1vdW50XCI6IDI2LFxuICAgICAgICAgIFwibWF0ZXJpYWxcIjogXCJTdXBwb3J0IHRydWNrXCIsXG4gICAgICAgICAgXCJ1bml0c1wiOiBcImhcIixcbiAgICAgICAgICBcImVycm9yXCI6IHtcbiAgICAgICAgICAgIFwibmFtZVwiOiBcIlN1cHBvcnQgdHJ1Y2tcIixcbiAgICAgICAgICAgIFwiZXJyb3JcIjogdHJ1ZSxcbiAgICAgICAgICAgIFwibWVzc2FnZVwiOiBcIlN1cHBvcnQgdHJ1Y2sgaXMgbm90IGluIHRoZSBtYXRlcmlhbCBsaXN0XCJcbiAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgIH0sXG4gICAgICBcInVuaXRzXCI6IFwiW2Fjcl91c11cIixcbiAgICAgIFwic2NoZWR1bGVcIjogW1xuICAgICAgICB7XG4gICAgICAgICAgXCJsZW5ndGhcIjogMSxcbiAgICAgICAgICBcInVuaXRzXCI6IFwibW9udGhcIixcbiAgICAgICAgICBcImRhdGVcIjogXCIyMDE3LTExLTIyXCJcbiAgICAgICAgfVxuICAgICAgXSxcbiAgICAgIFwiaWRcIjogXCI4ZTIwODRiZS03MjZkLTRmMWItOWYxNi1mY2Y1NzRjMGZiYTFcIixcbiAgICAgIFwic3VidG90YWxcIjogMTEyMC4zOTIsXG4gICAgICBcInRvdGFsXCI6IDExMjAuMzkyXG4gICAgfSxcbiAgICB7XG4gICAgICBcIm5hbWVcIjogXCJzaXRlIHByZXBcIixcbiAgICAgIFwibWF0ZXJpYWxzXCI6IHtcbiAgICAgICAgXCJUcmFjdG9yIGFuZCBzcHJheWVyXCI6IHtcbiAgICAgICAgICBcIm5vdGVcIjogXCJJbml0aWFsIFNwcmF5aW5nXCIsXG4gICAgICAgICAgXCJhbW91bnRcIjogMyxcbiAgICAgICAgICBcIm1hdGVyaWFsXCI6IFwiVHJhY3RvciBhbmQgc3ByYXllclwiLFxuICAgICAgICAgIFwidW5pdHNcIjogXCJoXCIsXG4gICAgICAgICAgXCJlcnJvclwiOiBudWxsLFxuICAgICAgICAgIFwicHJpY2VcIjogMFxuICAgICAgICB9LFxuICAgICAgICBcIkdseXBob3NhdGVcIjoge1xuICAgICAgICAgIFwibm90ZVwiOiBcIkluaXRpYWwgU3ByYXlpbmdcIixcbiAgICAgICAgICBcImFtb3VudFwiOiAxMDAsXG4gICAgICAgICAgXCJtYXRlcmlhbFwiOiBcIkdseXBob3NhdGVcIixcbiAgICAgICAgICBcInVuaXRzXCI6IFwiW3F0X3VzXVwiLFxuICAgICAgICAgIFwiZXJyb3JcIjogbnVsbCxcbiAgICAgICAgICBcInByaWNlXCI6IDQwMFxuICAgICAgICB9LFxuICAgICAgICBcIkdvYWwgMlhMXCI6IHtcbiAgICAgICAgICBcIm5vdGVcIjogXCJJbml0aWFsIFNwcmF5aW5nXCIsXG4gICAgICAgICAgXCJhbW91bnRcIjogMTI1LFxuICAgICAgICAgIFwibWF0ZXJpYWxcIjogXCJHb2FsIDJYTFwiLFxuICAgICAgICAgIFwidW5pdHNcIjogXCJbcXRfdXNdXCIsXG4gICAgICAgICAgXCJlcnJvclwiOiBudWxsLFxuICAgICAgICAgIFwicHJpY2VcIjogMzc1MFxuICAgICAgICB9LFxuICAgICAgICBcIkxhcmdlIHRyYWN0b3JcIjoge1xuICAgICAgICAgIFwibm90ZVwiOiBcIlJvdyBNYXJraW5nXCIsXG4gICAgICAgICAgXCJhbW91bnRcIjogMjUsXG4gICAgICAgICAgXCJtYXRlcmlhbFwiOiBcIkxhcmdlIHRyYWN0b3JcIixcbiAgICAgICAgICBcInVuaXRzXCI6IFwiaFwiLFxuICAgICAgICAgIFwiZXJyb3JcIjogbnVsbCxcbiAgICAgICAgICBcInByaWNlXCI6IDE4MDIuM1xuICAgICAgICB9LFxuICAgICAgICBcIkNoYWxsZW5nZXIgdHJhY3RvclwiOiB7XG4gICAgICAgICAgXCJub3RlXCI6IFwiaGVyYmljaWRlIC0gcHJlZW1lcmdlbnRcIixcbiAgICAgICAgICBcImFtb3VudFwiOiAyNCxcbiAgICAgICAgICBcIm1hdGVyaWFsXCI6IFwiQ2hhbGxlbmdlciB0cmFjdG9yXCIsXG4gICAgICAgICAgXCJ1bml0c1wiOiBcImhcIixcbiAgICAgICAgICBcImVycm9yXCI6IG51bGwsXG4gICAgICAgICAgXCJwcmljZVwiOiAxNDAxLjM2MDAwMDAwMDAwMDEsXG4gICAgICAgICAgXCJvcmlnaW5hbEFtb3VudFwiOiAyNFxuICAgICAgICB9LFxuICAgICAgICBcIlRyaWZsdXJhbGluXCI6IHtcbiAgICAgICAgICBcIm5vdGVcIjogXCJoZXJiaWNpZGUgLSBwcmVlbWVyZ2VudFwiLFxuICAgICAgICAgIFwiYW1vdW50XCI6IDUwLFxuICAgICAgICAgIFwibWF0ZXJpYWxcIjogXCJUcmlmbHVyYWxpblwiLFxuICAgICAgICAgIFwidW5pdHNcIjogXCJbcXRfdXNdXCIsXG4gICAgICAgICAgXCJlcnJvclwiOiBudWxsLFxuICAgICAgICAgIFwicHJpY2VcIjogMzc1XG4gICAgICAgIH1cbiAgICAgIH0sXG4gICAgICBcInVuaXRzXCI6IFwiW2Fjcl91c11cIixcbiAgICAgIFwic2NoZWR1bGVcIjogW1xuICAgICAgICB7XG4gICAgICAgICAgXCJkYXRlXCI6IFwiMjAxNS0wNi0wMVwiLFxuICAgICAgICAgIFwibGVuZ3RoXCI6IFwiM1wiLFxuICAgICAgICAgIFwidW5pdHNcIjogXCJtb250aFwiXG4gICAgICAgIH1cbiAgICAgIF0sXG4gICAgICBcImlkXCI6IFwiMGUzYzg2N2YtNGVlZS00NDljLTllYmYtOGQxMjdiMTg4YmIxXCIsXG4gICAgICBcInN1YnRvdGFsXCI6IDc3MjguNjYsXG4gICAgICBcInRvdGFsXCI6IDc3MjguNjZcbiAgICB9XG4gIF0sXG4gIFwiZmFybVwiOiB7XG4gICAgXCJ1bml0XCI6IFwiW2Fjcl91c11cIixcbiAgICBcInNpemVcIjogXCIxMDBcIixcbiAgICBcImNvbW1vZGl0eVwiOiBcIlBPUExBUlwiLFxuICAgIFwibG9jYXRpb25cIjogXCIwNjExM1wiLFxuICAgIFwiZmFybVwiOiBcImNsYXJrc2J1cmdcIlxuICB9XG59XG4iLCJtb2R1bGUuZXhwb3J0cz17XG4gIFwiY2xhc3Nlc1wiOiB7XG4gICAgXCJjYXBpdGFsXCI6IFtcbiAgICAgIFwiMS8yIFRvbiBQaWNrdXBcIixcbiAgICAgIFwiMy80IFRvbiBQaWNrdXAgKEZhcm0gdXNlKVwiLFxuICAgICAgXCJCYWxlIFdhZ29uIDEzMDAjIEF0dG1cIixcbiAgICAgIFwiU2VydmljZSBUcnVja1wiXG4gICAgXSxcbiAgICBcInVuZGVmaW5lZFwiOiBbXG4gICAgICBcIkFUVlwiLFxuICAgICAgXCJBbGZhbGZhIFNlZWQgUlJcIixcbiAgICAgIFwiQmFsaW5nXCIsXG4gICAgICBcIlBsYW50LVJvdW5kdXAgUmVhZHkgU2VlZFwiLFxuICAgICAgXCJSYWtpbmdcIixcbiAgICAgIFwiUm9sbC1Db3ZlciBTZWVkXCIsXG4gICAgICBcIlNwcmlua2xlciBJcnJpZ2F0ZSAyWFwiLFxuICAgICAgXCJTd2F0aGVyIDE2J1wiXG4gICAgXSxcbiAgICBcImZlcnRpbGl6ZXJcIjogW1xuICAgICAgXCIxMS01Mi0wXCJcbiAgICBdLFxuICAgIFwiSW5zZWN0aWNpZGVcIjogW1xuICAgICAgXCJCZWx0IFNDXCIsXG4gICAgICBcIkNvcmFnZW5cIixcbiAgICAgIFwiV2FycmlvciBJSVwiXG4gICAgXSxcbiAgICBcImN1bHR1cmFsXCI6IFtcbiAgICAgIFwiQ2hpc2VsL1JpcCAmIFJvbGxcIixcbiAgICAgIFwiRmluaXNoIERpc2MgJiBSb2xsIDJYXCIsXG4gICAgICBcIlB1bGwgQm9yZGVyL0NoZWNrc1wiLFxuICAgICAgXCJTdHViYmxlIERpc2NcIixcbiAgICAgIFwiVHJpLVBsYW5lIDJYXCJcbiAgICBdLFxuICAgIFwiaXJyaWdhdGlvblwiOiBbXG4gICAgICBcIklycmlnYXRpb24tRGl0Y2gvVGFpbCBMZXZlZVwiXG4gICAgXSxcbiAgICBcIkhlcmJpY2lkZVwiOiBbXG4gICAgICBcIlJvdW5kdXAgUG93ZXJNYXhcIlxuICAgIF0sXG4gICAgXCJJcnJpZ2F0aW9uXCI6IFtcbiAgICAgIFwiV2F0ZXItQWxmYWxmYS1QdW1wZWRcIlxuICAgIF1cbiAgfSxcbiAgXCJtYXRlcmlhbHNcIjogW1xuICAgIHtcbiAgICAgIFwibmFtZVwiOiBcIkVzdGltYXRlXCIsXG4gICAgICBcInByaWNlXCI6IDEsXG4gICAgICBcInVuaXRzXCI6IFwidXMkXCIsXG4gICAgICBcImZpeGVkXCI6IHRydWUsXG4gICAgICBcImRlc2NyaXB0aW9uXCI6IFwiUHJvdmlkZSBmaXhlZCBjb3N0IGZvciBjb21wbGV4IG1hdGVyaWFsXCIsXG4gICAgICBcInR5cGVcIjogXCJzaW1wbGVcIlxuICAgIH0sXG4gICAge1xuICAgICAgXCJuYW1lXCI6IFwiVGF4ZXNcIixcbiAgICAgIFwicHJpY2VcIjogMSxcbiAgICAgIFwidW5pdHNcIjogXCJ1cyRcIixcbiAgICAgIFwiZml4ZWRcIjogdHJ1ZSxcbiAgICAgIFwiZGVzY3JpcHRpb25cIjogXCJQcm92aWRlIGZpeGVkIGNvc3QgZm9yIGNvbXBsZXggbWF0ZXJpYWxcIixcbiAgICAgIFwidHlwZVwiOiBcInNpbXBsZVwiXG4gICAgfSxcbiAgICB7XG4gICAgICBcIm5hbWVcIjogXCJJbnN1cmFuY2VcIixcbiAgICAgIFwicHJpY2VcIjogMSxcbiAgICAgIFwidW5pdHNcIjogXCJ1cyRcIixcbiAgICAgIFwiZml4ZWRcIjogdHJ1ZSxcbiAgICAgIFwiZGVzY3JpcHRpb25cIjogXCJQcm92aWRlIGZpeGVkIGNvc3QgZm9yIGNvbXBsZXggbWF0ZXJpYWxcIixcbiAgICAgIFwidHlwZVwiOiBcInNpbXBsZVwiXG4gICAgfSxcbiAgICB7XG4gICAgICBcIm5hbWVcIjogXCJDYXBpdG9sIENvc3QgUmVjb3ZlclwiLFxuICAgICAgXCJwcmljZVwiOiAxLFxuICAgICAgXCJ1bml0c1wiOiBcInVzJFwiLFxuICAgICAgXCJmaXhlZFwiOiB0cnVlLFxuICAgICAgXCJkZXNjcmlwdGlvblwiOiBcIlByb3ZpZGUgZml4ZWQgY29zdCBmb3IgY29tcGxleCBtYXRlcmlhbFwiLFxuICAgICAgXCJ0eXBlXCI6IFwic2ltcGxlXCJcbiAgICB9LFxuICAgIHtcbiAgICAgIFwiY2xhc3NcIjogXCJmZXJ0aWxpemVyXCIsXG4gICAgICBcIm5hbWVcIjogXCIxMS01Mi0wXCIsXG4gICAgICBcInVuaXRzXCI6IFwidXMkL1tsYl9hdl1cIixcbiAgICAgIFwicHJpY2VcIjogMC4zNyxcbiAgICAgIFwidHlwZVwiOiBcInNpbXBsZVwiXG4gICAgfSxcbiAgICB7XG4gICAgICBcIm5hbWVcIjogXCJBbGZhbGZhIFNlZWQgUlJcIixcbiAgICAgIFwidW5pdHNcIjogXCJ1cyQvW2xiX2F2XVwiLFxuICAgICAgXCJwcmljZVwiOiA1LFxuICAgICAgXCJ0eXBlXCI6IFwic2ltcGxlXCJcbiAgICB9LFxuICAgIHtcbiAgICAgIFwiY2xhc3NcIjogXCJJbnNlY3RpY2lkZVwiLFxuICAgICAgXCJuYW1lXCI6IFwiQmVsdCBTQ1wiLFxuICAgICAgXCJ1bml0c1wiOiBcInVzJC9bZm96X3VzXVwiLFxuICAgICAgXCJwcmljZVwiOiA5LjQsXG4gICAgICBcInR5cGVcIjogXCJzaW1wbGVcIlxuICAgIH0sXG4gICAge1xuICAgICAgXCJjbGFzc1wiOiBcIkluc2VjdGljaWRlXCIsXG4gICAgICBcIm5hbWVcIjogXCJDb3JhZ2VuXCIsXG4gICAgICBcInVuaXRzXCI6IFwidXMkL1tmb3pfdXNdXCIsXG4gICAgICBcInByaWNlXCI6IDEwLjI1LFxuICAgICAgXCJ0eXBlXCI6IFwic2ltcGxlXCJcbiAgICB9LFxuICAgIHtcbiAgICAgIFwiY2xhc3NcIjogXCJIZXJiaWNpZGVcIixcbiAgICAgIFwibmFtZVwiOiBcIlJvdW5kdXAgUG93ZXJNYXhcIixcbiAgICAgIFwidW5pdHNcIjogXCJ1cyQvW3B0X3VzXVwiLFxuICAgICAgXCJwcmljZVwiOiAyLjc1LFxuICAgICAgXCJ0eXBlXCI6IFwic2ltcGxlXCJcbiAgICB9LFxuICAgIHtcbiAgICAgIFwiY2xhc3NcIjogXCJJbnNlY3RpY2lkZVwiLFxuICAgICAgXCJuYW1lXCI6IFwiV2FycmlvciBJSVwiLFxuICAgICAgXCJ1bml0c1wiOiBcInVzJC9bZm96X3VzXVwiLFxuICAgICAgXCJwcmljZVwiOiA1LjI1LFxuICAgICAgXCJ0eXBlXCI6IFwic2ltcGxlXCJcbiAgICB9LFxuICAgIHtcbiAgICAgIFwiZGVzY3JpcHRpb25cIjogXCJXZWxsIHN1cHBsaWVkIEFsZmFsZmFcIixcbiAgICAgIFwiY2xhc3NcIjogXCJJcnJpZ2F0aW9uXCIsXG4gICAgICBcIm5hbWVcIjogXCJXYXRlci1BbGZhbGZhLVB1bXBlZFwiLFxuICAgICAgXCJ1bml0c1wiOiBcInVzJC9bYWNyX3VzXS5baW5fdXNdXCIsXG4gICAgICBcInByaWNlXCI6IDcuNSxcbiAgICAgIFwidHlwZVwiOiBcInNpbXBsZVwiXG4gICAgfSxcbiAgICB7XG4gICAgICBcIm5hbWVcIjogXCJCYWxlIFR3aW5lXCIsXG4gICAgICBcInByaWNlXCI6IDcsXG4gICAgICBcInVuaXRzXCI6IFwidXMkL1thY3JfdXNdXCIsXG4gICAgICBcInR5cGVcIjogXCJzaW1wbGVcIlxuICAgIH0sXG4gICAge1xuICAgICAgXCJuYW1lXCI6IFwiRnVlbC1EaWVzZWxcIixcbiAgICAgIFwicHJpY2VcIjogMy44OCxcbiAgICAgIFwidW5pdHNcIjogXCJ1cyQvW2dhbF91c11cIixcbiAgICAgIFwidHlwZVwiOiBcInNpbXBsZVwiXG4gICAgfSxcbiAgICB7XG4gICAgICBcIm5hbWVcIjogXCJGdWVsLUdhc1wiLFxuICAgICAgXCJwcmljZVwiOiAzLjc5LFxuICAgICAgXCJ1bml0c1wiOiBcInVzJC9bZ2FsX3VzXVwiLFxuICAgICAgXCJ0eXBlXCI6IFwic2ltcGxlXCJcbiAgICB9LFxuICAgIHtcbiAgICAgIFwibmFtZVwiOiBcIkx1YmUmUmVwYWlyXCIsXG4gICAgICBcInByaWNlXCI6IDEsXG4gICAgICBcInVuaXRzXCI6IFwidXMkL3VzJFwiLFxuICAgICAgXCJ0eXBlXCI6IFwic2ltcGxlXCJcbiAgICB9LFxuICAgIHtcbiAgICAgIFwibmFtZVwiOiBcIlZlbHBhciBMXCIsXG4gICAgICBcInByaWNlXCI6IDE0LjQxLFxuICAgICAgXCJ1bml0c1wiOiBcInVzJC9bcHRfdXNdXCIsXG4gICAgICBcInR5cGVcIjogXCJzaW1wbGVcIlxuICAgIH0sXG4gICAge1xuICAgICAgXCJuYW1lXCI6IFwiTGFib3ItRXF1aXBtZW50IE9wZXJhdG9yXCIsXG4gICAgICBcInByaWNlXCI6IDE3LFxuICAgICAgXCJ1bml0c1wiOiBcInVzJC9oXCIsXG4gICAgICBcInR5cGVcIjogXCJzaW1wbGVcIlxuICAgIH0sXG4gICAge1xuICAgICAgXCJuYW1lXCI6IFwiTGFib3ItSXJyaWdhdGlvblwiLFxuICAgICAgXCJwcmljZVwiOiAxMy42LFxuICAgICAgXCJ1bml0c1wiOiBcInVzJC9oXCIsXG4gICAgICBcInR5cGVcIjogXCJzaW1wbGVcIlxuICAgIH0sXG4gICAge1xuICAgICAgXCJjbGFzc1wiOiBcImNhcGl0YWxcIixcbiAgICAgIFwibmFtZVwiOiBcIjEvMiBUb24gUGlja3VwXCIsXG4gICAgICBcInVuaXRzXCI6IFwiaFwiLFxuICAgICAgXCJ0eXBlXCI6IFwiY29tcGxleFwiLFxuICAgICAgXCJtYXRlcmlhbHNcIjoge1xuICAgICAgICBcIkx1YmUmUmVwYWlyXCI6IHtcbiAgICAgICAgICBcImFtb3VudFwiOiA1LjQxLFxuICAgICAgICAgIFwib3JpZ2luYWxBbW91bnRcIjogNS40MSxcbiAgICAgICAgICBcInVuaXRzXCI6IFwidXMkXCIsXG4gICAgICAgICAgXCJlcnJvclwiOiBudWxsLFxuICAgICAgICAgIFwicHJpY2VcIjogNS40MVxuICAgICAgICB9LFxuICAgICAgICBcIkxhYm9yLUVxdWlwbWVudCBPcGVyYXRvclwiOiB7XG4gICAgICAgICAgXCJhbW91bnRcIjogMS4xMSxcbiAgICAgICAgICBcIm9yaWdpbmFsQW1vdW50XCI6IDEuMTEsXG4gICAgICAgICAgXCJ1bml0c1wiOiBcImhcIixcbiAgICAgICAgICBcImVycm9yXCI6IG51bGwsXG4gICAgICAgICAgXCJwcmljZVwiOiAxOC44N1xuICAgICAgICB9LFxuICAgICAgICBcIkZ1ZWwtRGllc2VsXCI6IHtcbiAgICAgICAgICBcImFtb3VudFwiOiAyLjA5LFxuICAgICAgICAgIFwib3JpZ2luYWxBbW91bnRcIjogMi4wOSxcbiAgICAgICAgICBcInVuaXRzXCI6IFwiW2dhbF91c11cIixcbiAgICAgICAgICBcImVycm9yXCI6IG51bGwsXG4gICAgICAgICAgXCJwcmljZVwiOiA4LjEwOTJcbiAgICAgICAgfVxuICAgICAgfSxcbiAgICAgIFwicHJpY2VcIjogMzIuMzg5MlxuICAgIH0sXG4gICAge1xuICAgICAgXCJuYW1lXCI6IFwiQVRWXCIsXG4gICAgICBcInVuaXRzXCI6IFwiaFwiLFxuICAgICAgXCJ0eXBlXCI6IFwiY29tcGxleFwiLFxuICAgICAgXCJtYXRlcmlhbHNcIjoge1xuICAgICAgICBcIkx1YmUmUmVwYWlyXCI6IHtcbiAgICAgICAgICBcImFtb3VudFwiOiAxLjIsXG4gICAgICAgICAgXCJvcmlnaW5hbEFtb3VudFwiOiAxLjIsXG4gICAgICAgICAgXCJ1bml0c1wiOiBcInVzJFwiLFxuICAgICAgICAgIFwiZXJyb3JcIjogbnVsbCxcbiAgICAgICAgICBcInByaWNlXCI6IDEuMlxuICAgICAgICB9LFxuICAgICAgICBcIkxhYm9yLUVxdWlwbWVudCBPcGVyYXRvclwiOiB7XG4gICAgICAgICAgXCJhbW91bnRcIjogMSxcbiAgICAgICAgICBcIm9yaWdpbmFsQW1vdW50XCI6IDEsXG4gICAgICAgICAgXCJ1bml0c1wiOiBcImhcIixcbiAgICAgICAgICBcImVycm9yXCI6IG51bGwsXG4gICAgICAgICAgXCJwcmljZVwiOiAxN1xuICAgICAgICB9LFxuICAgICAgICBcIkZ1ZWwtR2FzXCI6IHtcbiAgICAgICAgICBcImFtb3VudFwiOiAxLFxuICAgICAgICAgIFwib3JpZ2luYWxBbW91bnRcIjogMSxcbiAgICAgICAgICBcInVuaXRzXCI6IFwiW2dhbF91c11cIixcbiAgICAgICAgICBcImVycm9yXCI6IG51bGwsXG4gICAgICAgICAgXCJwcmljZVwiOiAzLjc5XG4gICAgICAgIH1cbiAgICAgIH0sXG4gICAgICBcInByaWNlXCI6IDIxLjk5XG4gICAgfSxcbiAgICB7XG4gICAgICBcImNsYXNzXCI6IFwiY2FwaXRhbFwiLFxuICAgICAgXCJuYW1lXCI6IFwiMy80IFRvbiBQaWNrdXAgKEZhcm0gdXNlKVwiLFxuICAgICAgXCJ1bml0c1wiOiBcImhcIixcbiAgICAgIFwidHlwZVwiOiBcImNvbXBsZXhcIixcbiAgICAgIFwibWF0ZXJpYWxzXCI6IHtcbiAgICAgICAgXCJMdWJlJlJlcGFpclwiOiB7XG4gICAgICAgICAgXCJhbW91bnRcIjogNSxcbiAgICAgICAgICBcIm9yaWdpbmFsQW1vdW50XCI6IDUsXG4gICAgICAgICAgXCJ1bml0c1wiOiBcInVzJFwiLFxuICAgICAgICAgIFwiZXJyb3JcIjogbnVsbCxcbiAgICAgICAgICBcInByaWNlXCI6IDVcbiAgICAgICAgfSxcbiAgICAgICAgXCJMYWJvci1FcXVpcG1lbnQgT3BlcmF0b3JcIjoge1xuICAgICAgICAgIFwiYW1vdW50XCI6IDEuMTgsXG4gICAgICAgICAgXCJvcmlnaW5hbEFtb3VudFwiOiAxLjE4LFxuICAgICAgICAgIFwidW5pdHNcIjogXCJoXCIsXG4gICAgICAgICAgXCJlcnJvclwiOiBudWxsLFxuICAgICAgICAgIFwicHJpY2VcIjogMjAuMDZcbiAgICAgICAgfSxcbiAgICAgICAgXCJGdWVsLURpZXNlbFwiOiB7XG4gICAgICAgICAgXCJhbW91bnRcIjogMy4yMixcbiAgICAgICAgICBcIm9yaWdpbmFsQW1vdW50XCI6IDMuMjIsXG4gICAgICAgICAgXCJ1bml0c1wiOiBcIltnYWxfdXNdXCIsXG4gICAgICAgICAgXCJlcnJvclwiOiBudWxsLFxuICAgICAgICAgIFwicHJpY2VcIjogMTIuNDkzNlxuICAgICAgICB9XG4gICAgICB9LFxuICAgICAgXCJwcmljZVwiOiAzNy41NTM2XG4gICAgfSxcbiAgICB7XG4gICAgICBcImNsYXNzXCI6IFwiY2FwaXRhbFwiLFxuICAgICAgXCJuYW1lXCI6IFwiQmFsZSBXYWdvbiAxMzAwIyBBdHRtXCIsXG4gICAgICBcInVuaXRzXCI6IFwiaFwiLFxuICAgICAgXCJ0eXBlXCI6IFwiY29tcGxleFwiLFxuICAgICAgXCJtYXRlcmlhbHNcIjoge1xuICAgICAgICBcIkx1YmUmUmVwYWlyXCI6IHtcbiAgICAgICAgICBcImFtb3VudFwiOiAzOC42OCxcbiAgICAgICAgICBcIm9yaWdpbmFsQW1vdW50XCI6IDM4LjY4LFxuICAgICAgICAgIFwidW5pdHNcIjogXCJ1cyRcIixcbiAgICAgICAgICBcImVycm9yXCI6IG51bGwsXG4gICAgICAgICAgXCJwcmljZVwiOiAzOC42OFxuICAgICAgICB9LFxuICAgICAgICBcIkxhYm9yLUVxdWlwbWVudCBPcGVyYXRvclwiOiB7XG4gICAgICAgICAgXCJhbW91bnRcIjogMS4xOCxcbiAgICAgICAgICBcIm9yaWdpbmFsQW1vdW50XCI6IDEuMTgsXG4gICAgICAgICAgXCJ1bml0c1wiOiBcImhcIixcbiAgICAgICAgICBcImVycm9yXCI6IG51bGwsXG4gICAgICAgICAgXCJwcmljZVwiOiAyMC4wNlxuICAgICAgICB9LFxuICAgICAgICBcIkZ1ZWwtRGllc2VsXCI6IHtcbiAgICAgICAgICBcImFtb3VudFwiOiA4LjUsXG4gICAgICAgICAgXCJvcmlnaW5hbEFtb3VudFwiOiA4LjUsXG4gICAgICAgICAgXCJ1bml0c1wiOiBcIltnYWxfdXNdXCIsXG4gICAgICAgICAgXCJlcnJvclwiOiBudWxsLFxuICAgICAgICAgIFwicHJpY2VcIjogMzIuOThcbiAgICAgICAgfVxuICAgICAgfSxcbiAgICAgIFwicHJpY2VcIjogOTEuNzJcbiAgICB9LFxuICAgIHtcbiAgICAgIFwibmFtZVwiOiBcIkJhbGluZ1wiLFxuICAgICAgXCJ1bml0c1wiOiBcImhcIixcbiAgICAgIFwidHlwZVwiOiBcImNvbXBsZXhcIixcbiAgICAgIFwibWF0ZXJpYWxzXCI6IHtcbiAgICAgICAgXCIxNTBIUDRXRCBUcmFjdG9yXCI6IHtcbiAgICAgICAgICBcImFtb3VudFwiOiAxLFxuICAgICAgICAgIFwib3JpZ2luYWxBbW91bnRcIjogMSxcbiAgICAgICAgICBcInVuaXRzXCI6IFwiaFwiLFxuICAgICAgICAgIFwiZXJyb3JcIjogbnVsbCxcbiAgICAgICAgICBcInByaWNlXCI6IDYwLjIyNDhcbiAgICAgICAgfSxcbiAgICAgICAgXCJCYWxlIFR3aW5lXCI6IHtcbiAgICAgICAgICBcImFtb3VudFwiOiAxLFxuICAgICAgICAgIFwib3JpZ2luYWxBbW91bnRcIjogMSxcbiAgICAgICAgICBcInVuaXRzXCI6IFwiW2Fjcl91c11cIixcbiAgICAgICAgICBcImVycm9yXCI6IG51bGwsXG4gICAgICAgICAgXCJwcmljZVwiOiA3XG4gICAgICAgIH0sXG4gICAgICAgIFwiIEJhbGVyMTMwMCMgUFRPXCI6IHtcbiAgICAgICAgICBcIm5hbWVcIjogXCIgQmFsZXIxMzAwIyBQVE9cIixcbiAgICAgICAgICBcImFtb3VudFwiOiAxLFxuICAgICAgICAgIFwidW5pdHNcIjogXCJoXCIsXG4gICAgICAgICAgXCJlcnJvclwiOiBudWxsLFxuICAgICAgICAgIFwicHJpY2VcIjogMzEuODVcbiAgICAgICAgfVxuICAgICAgfSxcbiAgICAgIFwicHJpY2VcIjogOTkuMDc0ODAwMDAwMDAwMDFcbiAgICB9LFxuICAgIHtcbiAgICAgIFwiZGVzY3JpcHRpb25cIjogXCJQcmUgUGxhbnRpbmcgUHJlcGFyYXRpb25cIixcbiAgICAgIFwiY2xhc3NcIjogXCJjdWx0dXJhbFwiLFxuICAgICAgXCJuYW1lXCI6IFwiQ2hpc2VsL1JpcCAmIFJvbGxcIixcbiAgICAgIFwidW5pdHNcIjogXCJoXCIsXG4gICAgICBcInR5cGVcIjogXCJjb21wbGV4XCIsXG4gICAgICBcIm1hdGVyaWFsc1wiOiB7XG4gICAgICAgIFwiTHViZSZSZXBhaXJcIjoge1xuICAgICAgICAgIFwiYW1vdW50XCI6IDMzLjMzLFxuICAgICAgICAgIFwib3JpZ2luYWxBbW91bnRcIjogMzMuMzMsXG4gICAgICAgICAgXCJ1bml0c1wiOiBcInVzJFwiLFxuICAgICAgICAgIFwiZXJyb3JcIjogbnVsbCxcbiAgICAgICAgICBcInByaWNlXCI6IDMzLjMzXG4gICAgICAgIH0sXG4gICAgICAgIFwiTGFib3ItRXF1aXBtZW50IE9wZXJhdG9yXCI6IHtcbiAgICAgICAgICBcImFtb3VudFwiOiAxLjQ3LFxuICAgICAgICAgIFwib3JpZ2luYWxBbW91bnRcIjogMS40NyxcbiAgICAgICAgICBcInVuaXRzXCI6IFwiaFwiLFxuICAgICAgICAgIFwiZXJyb3JcIjogbnVsbCxcbiAgICAgICAgICBcInByaWNlXCI6IDI0Ljk5XG4gICAgICAgIH0sXG4gICAgICAgIFwiRnVlbC1EaWVzZWxcIjoge1xuICAgICAgICAgIFwiYW1vdW50XCI6IDE3LjE4LFxuICAgICAgICAgIFwib3JpZ2luYWxBbW91bnRcIjogMTcuMTgsXG4gICAgICAgICAgXCJ1bml0c1wiOiBcIltnYWxfdXNdXCIsXG4gICAgICAgICAgXCJlcnJvclwiOiBudWxsLFxuICAgICAgICAgIFwicHJpY2VcIjogNjYuNjU4NFxuICAgICAgICB9XG4gICAgICB9LFxuICAgICAgXCJwcmljZVwiOiAxMjQuOTc4NFxuICAgIH0sXG4gICAge1xuICAgICAgXCJkZXNjcmlwdGlvblwiOiBcIlByZXBsYW50aW5nXCIsXG4gICAgICBcImNsYXNzXCI6IFwiY3VsdHVyYWxcIixcbiAgICAgIFwibmFtZVwiOiBcIkZpbmlzaCBEaXNjICYgUm9sbCAyWFwiLFxuICAgICAgXCJ1bml0c1wiOiBcImhcIixcbiAgICAgIFwidHlwZVwiOiBcImNvbXBsZXhcIixcbiAgICAgIFwibWF0ZXJpYWxzXCI6IHtcbiAgICAgICAgXCJMdWJlJlJlcGFpclwiOiB7XG4gICAgICAgICAgXCJhbW91bnRcIjogMzEuNTgsXG4gICAgICAgICAgXCJvcmlnaW5hbEFtb3VudFwiOiAzMS41OCxcbiAgICAgICAgICBcInVuaXRzXCI6IFwidXMkXCIsXG4gICAgICAgICAgXCJlcnJvclwiOiBudWxsLFxuICAgICAgICAgIFwicHJpY2VcIjogMzEuNThcbiAgICAgICAgfSxcbiAgICAgICAgXCJMYWJvci1FcXVpcG1lbnQgT3BlcmF0b3JcIjoge1xuICAgICAgICAgIFwiYW1vdW50XCI6IDEuMjQsXG4gICAgICAgICAgXCJvcmlnaW5hbEFtb3VudFwiOiAxLjI0LFxuICAgICAgICAgIFwidW5pdHNcIjogXCJoXCIsXG4gICAgICAgICAgXCJlcnJvclwiOiBudWxsLFxuICAgICAgICAgIFwicHJpY2VcIjogMjEuMDhcbiAgICAgICAgfSxcbiAgICAgICAgXCJGdWVsLURpZXNlbFwiOiB7XG4gICAgICAgICAgXCJhbW91bnRcIjogMTMuNTYsXG4gICAgICAgICAgXCJvcmlnaW5hbEFtb3VudFwiOiAxMy41NixcbiAgICAgICAgICBcInVuaXRzXCI6IFwiW2dhbF91c11cIixcbiAgICAgICAgICBcImVycm9yXCI6IG51bGwsXG4gICAgICAgICAgXCJwcmljZVwiOiA1Mi42MTI4XG4gICAgICAgIH1cbiAgICAgIH0sXG4gICAgICBcInByaWNlXCI6IDEwNS4yNzI3OTk5OTk5OTk5OVxuICAgIH0sXG4gICAge1xuICAgICAgXCJjbGFzc1wiOiBcImlycmlnYXRpb25cIixcbiAgICAgIFwibmFtZVwiOiBcIklycmlnYXRpb24tRGl0Y2gvVGFpbCBMZXZlZVwiLFxuICAgICAgXCJ1bml0c1wiOiBcIlthY3JfdXNdXCIsXG4gICAgICBcInR5cGVcIjogXCJjb21wbGV4XCIsXG4gICAgICBcIm1hdGVyaWFsc1wiOiB7XG4gICAgICAgIFwiMTUwSFA0V0QgVHJhY3RvclwiOiB7XG4gICAgICAgICAgXCJhbW91bnRcIjogMC4yLFxuICAgICAgICAgIFwib3JpZ2luYWxBbW91bnRcIjogMC4yLFxuICAgICAgICAgIFwidW5pdHNcIjogXCJoXCIsXG4gICAgICAgICAgXCJlcnJvclwiOiBudWxsLFxuICAgICAgICAgIFwicHJpY2VcIjogMTIuMDQ0OTYwMDAwMDAwMDAxXG4gICAgICAgIH0sXG4gICAgICAgIFwiMjA1SFAgQ3Jhd2xlclwiOiB7XG4gICAgICAgICAgXCJhbW91bnRcIjogMC4yNixcbiAgICAgICAgICBcIm9yaWdpbmFsQW1vdW50XCI6IDAuMjYsXG4gICAgICAgICAgXCJ1bml0c1wiOiBcImhcIixcbiAgICAgICAgICBcImVycm9yXCI6IG51bGwsXG4gICAgICAgICAgXCJwcmljZVwiOiAxOS44Mzg1MlxuICAgICAgICB9XG4gICAgICB9LFxuICAgICAgXCJwcmljZVwiOiAzMS44ODM0OFxuICAgIH0sXG4gICAge1xuICAgICAgXCJuYW1lXCI6IFwiUGxhbnQtUm91bmR1cCBSZWFkeSBTZWVkXCIsXG4gICAgICBcInVuaXRzXCI6IFwiaFwiLFxuICAgICAgXCJ0eXBlXCI6IFwiY29tcGxleFwiLFxuICAgICAgXCJtYXRlcmlhbHNcIjoge1xuICAgICAgICBcIkx1YmUmUmVwYWlyXCI6IHtcbiAgICAgICAgICBcImFtb3VudFwiOiA5LjA5LFxuICAgICAgICAgIFwib3JpZ2luYWxBbW91bnRcIjogOS4wOSxcbiAgICAgICAgICBcInVuaXRzXCI6IFwidXMkXCIsXG4gICAgICAgICAgXCJlcnJvclwiOiBudWxsLFxuICAgICAgICAgIFwicHJpY2VcIjogOS4wOVxuICAgICAgICB9LFxuICAgICAgICBcIkxhYm9yLUVxdWlwbWVudCBPcGVyYXRvclwiOiB7XG4gICAgICAgICAgXCJhbW91bnRcIjogMS4yNSxcbiAgICAgICAgICBcIm9yaWdpbmFsQW1vdW50XCI6IDEuMjUsXG4gICAgICAgICAgXCJ1bml0c1wiOiBcImhcIixcbiAgICAgICAgICBcImVycm9yXCI6IG51bGwsXG4gICAgICAgICAgXCJwcmljZVwiOiAyMS4yNVxuICAgICAgICB9LFxuICAgICAgICBcIkZ1ZWwtRGllc2VsXCI6IHtcbiAgICAgICAgICBcImFtb3VudFwiOiA1LjQ3LFxuICAgICAgICAgIFwib3JpZ2luYWxBbW91bnRcIjogNS40NyxcbiAgICAgICAgICBcInVuaXRzXCI6IFwiW2dhbF91c11cIixcbiAgICAgICAgICBcImVycm9yXCI6IG51bGwsXG4gICAgICAgICAgXCJwcmljZVwiOiAyMS4yMjM1OTk5OTk5OTk5OThcbiAgICAgICAgfVxuICAgICAgfSxcbiAgICAgIFwicHJpY2VcIjogNTEuNTYzNTk5OTk5OTk5OTk0XG4gICAgfSxcbiAgICB7XG4gICAgICBcImRlc2NyaXB0aW9uXCI6IFwiUHJlcGxhbnRpbmdcIixcbiAgICAgIFwiY2xhc3NcIjogXCJjdWx0dXJhbFwiLFxuICAgICAgXCJuYW1lXCI6IFwiUHVsbCBCb3JkZXIvQ2hlY2tzXCIsXG4gICAgICBcInVuaXRzXCI6IFwiaFwiLFxuICAgICAgXCJ0eXBlXCI6IFwiY29tcGxleFwiLFxuICAgICAgXCJtYXRlcmlhbHNcIjoge1xuICAgICAgICBcIkx1YmUmUmVwYWlyXCI6IHtcbiAgICAgICAgICBcImFtb3VudFwiOiAxNC4yOSxcbiAgICAgICAgICBcIm9yaWdpbmFsQW1vdW50XCI6IDE0LjI5LFxuICAgICAgICAgIFwidW5pdHNcIjogXCJ1cyRcIixcbiAgICAgICAgICBcImVycm9yXCI6IG51bGwsXG4gICAgICAgICAgXCJwcmljZVwiOiAxNC4yOVxuICAgICAgICB9LFxuICAgICAgICBcIkxhYm9yLUVxdWlwbWVudCBPcGVyYXRvclwiOiB7XG4gICAgICAgICAgXCJhbW91bnRcIjogMS4yNixcbiAgICAgICAgICBcIm9yaWdpbmFsQW1vdW50XCI6IDEuMjYsXG4gICAgICAgICAgXCJ1bml0c1wiOiBcImhcIixcbiAgICAgICAgICBcImVycm9yXCI6IG51bGwsXG4gICAgICAgICAgXCJwcmljZVwiOiAyMS40MlxuICAgICAgICB9LFxuICAgICAgICBcIkZ1ZWwtRGllc2VsXCI6IHtcbiAgICAgICAgICBcImFtb3VudFwiOiAxMi44OSxcbiAgICAgICAgICBcIm9yaWdpbmFsQW1vdW50XCI6IDEyLjg5LFxuICAgICAgICAgIFwidW5pdHNcIjogXCJbZ2FsX3VzXVwiLFxuICAgICAgICAgIFwiZXJyb3JcIjogbnVsbCxcbiAgICAgICAgICBcInByaWNlXCI6IDUwLjAxMzJcbiAgICAgICAgfVxuICAgICAgfSxcbiAgICAgIFwicHJpY2VcIjogODUuNzIzMTk5OTk5OTk5OTlcbiAgICB9LFxuICAgIHtcbiAgICAgIFwibmFtZVwiOiBcIlJha2luZ1wiLFxuICAgICAgXCJ1bml0c1wiOiBcImhcIixcbiAgICAgIFwidHlwZVwiOiBcImNvbXBsZXhcIixcbiAgICAgIFwibWF0ZXJpYWxzXCI6IHtcbiAgICAgICAgXCJSYWtlIDIwJ1wiOiB7XG4gICAgICAgICAgXCJhbW91bnRcIjogMSxcbiAgICAgICAgICBcIm9yaWdpbmFsQW1vdW50XCI6IDEsXG4gICAgICAgICAgXCJ1bml0c1wiOiBcImhcIixcbiAgICAgICAgICBcImVycm9yXCI6IG51bGwsXG4gICAgICAgICAgXCJwcmljZVwiOiA0LjYxXG4gICAgICAgIH0sXG4gICAgICAgIFwiMzdIUCA0V0QgVHJhY3RvclwiOiB7XG4gICAgICAgICAgXCJhbW91bnRcIjogMSxcbiAgICAgICAgICBcIm9yaWdpbmFsQW1vdW50XCI6IDEsXG4gICAgICAgICAgXCJ1bml0c1wiOiBcImhcIixcbiAgICAgICAgICBcImVycm9yXCI6IG51bGwsXG4gICAgICAgICAgXCJwcmljZVwiOiAyNS42NDE2XG4gICAgICAgIH1cbiAgICAgIH0sXG4gICAgICBcInByaWNlXCI6IDMwLjI1MTZcbiAgICB9LFxuICAgIHtcbiAgICAgIFwibmFtZVwiOiBcIlJvbGwtQ292ZXIgU2VlZFwiLFxuICAgICAgXCJ1bml0c1wiOiBcImhcIixcbiAgICAgIFwidHlwZVwiOiBcImNvbXBsZXhcIixcbiAgICAgIFwibWF0ZXJpYWxzXCI6IHtcbiAgICAgICAgXCJMdWJlJlJlcGFpclwiOiB7XG4gICAgICAgICAgXCJhbW91bnRcIjogMTAsXG4gICAgICAgICAgXCJvcmlnaW5hbEFtb3VudFwiOiAxMCxcbiAgICAgICAgICBcInVuaXRzXCI6IFwidXMkXCIsXG4gICAgICAgICAgXCJlcnJvclwiOiBudWxsLFxuICAgICAgICAgIFwicHJpY2VcIjogMTBcbiAgICAgICAgfSxcbiAgICAgICAgXCJMYWJvci1FcXVpcG1lbnQgT3BlcmF0b3JcIjoge1xuICAgICAgICAgIFwiYW1vdW50XCI6IDEuMTgsXG4gICAgICAgICAgXCJvcmlnaW5hbEFtb3VudFwiOiAxLjE4LFxuICAgICAgICAgIFwidW5pdHNcIjogXCJoXCIsXG4gICAgICAgICAgXCJlcnJvclwiOiBudWxsLFxuICAgICAgICAgIFwicHJpY2VcIjogMjAuMDZcbiAgICAgICAgfSxcbiAgICAgICAgXCJGdWVsLURpZXNlbFwiOiB7XG4gICAgICAgICAgXCJhbW91bnRcIjogNS4xNSxcbiAgICAgICAgICBcIm9yaWdpbmFsQW1vdW50XCI6IDUuMTUsXG4gICAgICAgICAgXCJ1bml0c1wiOiBcIltnYWxfdXNdXCIsXG4gICAgICAgICAgXCJlcnJvclwiOiBudWxsLFxuICAgICAgICAgIFwicHJpY2VcIjogMTkuOTgyXG4gICAgICAgIH1cbiAgICAgIH0sXG4gICAgICBcInByaWNlXCI6IDUwLjA0MlxuICAgIH0sXG4gICAge1xuICAgICAgXCJjbGFzc1wiOiBcImNhcGl0YWxcIixcbiAgICAgIFwibmFtZVwiOiBcIlNlcnZpY2UgVHJ1Y2tcIixcbiAgICAgIFwidW5pdHNcIjogXCJoXCIsXG4gICAgICBcInR5cGVcIjogXCJjb21wbGV4XCIsXG4gICAgICBcIm1hdGVyaWFsc1wiOiB7XG4gICAgICAgIFwiTHViZSZSZXBhaXJcIjoge1xuICAgICAgICAgIFwiYW1vdW50XCI6IDQsXG4gICAgICAgICAgXCJvcmlnaW5hbEFtb3VudFwiOiA0LFxuICAgICAgICAgIFwidW5pdHNcIjogXCJ1cyRcIixcbiAgICAgICAgICBcImVycm9yXCI6IG51bGwsXG4gICAgICAgICAgXCJwcmljZVwiOiA0XG4gICAgICAgIH0sXG4gICAgICAgIFwiTGFib3ItRXF1aXBtZW50IE9wZXJhdG9yXCI6IHtcbiAgICAgICAgICBcImFtb3VudFwiOiAxLjE4LFxuICAgICAgICAgIFwib3JpZ2luYWxBbW91bnRcIjogMS4xOCxcbiAgICAgICAgICBcInVuaXRzXCI6IFwiaFwiLFxuICAgICAgICAgIFwiZXJyb3JcIjogbnVsbCxcbiAgICAgICAgICBcInByaWNlXCI6IDIwLjA2XG4gICAgICAgIH0sXG4gICAgICAgIFwiRnVlbC1EaWVzZWxcIjoge1xuICAgICAgICAgIFwiYW1vdW50XCI6IDMuMDksXG4gICAgICAgICAgXCJvcmlnaW5hbEFtb3VudFwiOiAzLjA5LFxuICAgICAgICAgIFwidW5pdHNcIjogXCJbZ2FsX3VzXVwiLFxuICAgICAgICAgIFwiZXJyb3JcIjogbnVsbCxcbiAgICAgICAgICBcInByaWNlXCI6IDExLjk4OTE5OTk5OTk5OTk5OVxuICAgICAgICB9XG4gICAgICB9LFxuICAgICAgXCJwcmljZVwiOiAzNi4wNDkyXG4gICAgfSxcbiAgICB7XG4gICAgICBcIm5hbWVcIjogXCJTcHJpbmtsZXIgSXJyaWdhdGUgMlhcIixcbiAgICAgIFwidW5pdHNcIjogXCJoXCIsXG4gICAgICBcInR5cGVcIjogXCJjb21wbGV4XCIsXG4gICAgICBcIm1hdGVyaWFsc1wiOiB7XG4gICAgICAgIFwiTHViZSZSZXBhaXJcIjoge1xuICAgICAgICAgIFwiYW1vdW50XCI6IDEuNSxcbiAgICAgICAgICBcIm9yaWdpbmFsQW1vdW50XCI6IDEuNSxcbiAgICAgICAgICBcInVuaXRzXCI6IFwidXMkXCIsXG4gICAgICAgICAgXCJlcnJvclwiOiBudWxsLFxuICAgICAgICAgIFwicHJpY2VcIjogMS41XG4gICAgICAgIH0sXG4gICAgICAgIFwiTGFib3ItRXF1aXBtZW50IE9wZXJhdG9yXCI6IHtcbiAgICAgICAgICBcImFtb3VudFwiOiAxLjIxLFxuICAgICAgICAgIFwib3JpZ2luYWxBbW91bnRcIjogMS4yMSxcbiAgICAgICAgICBcInVuaXRzXCI6IFwiaFwiLFxuICAgICAgICAgIFwiZXJyb3JcIjogbnVsbCxcbiAgICAgICAgICBcInByaWNlXCI6IDIwLjU3XG4gICAgICAgIH0sXG4gICAgICAgIFwiRnVlbC1EaWVzZWxcIjoge1xuICAgICAgICAgIFwiYW1vdW50XCI6IDIuMTksXG4gICAgICAgICAgXCJvcmlnaW5hbEFtb3VudFwiOiAyLjE5LFxuICAgICAgICAgIFwidW5pdHNcIjogXCJbZ2FsX3VzXVwiLFxuICAgICAgICAgIFwiZXJyb3JcIjogbnVsbCxcbiAgICAgICAgICBcInByaWNlXCI6IDguNDk3MlxuICAgICAgICB9LFxuICAgICAgICBcIkVzdGltYXRlXCI6IHtcbiAgICAgICAgICBcImFtb3VudFwiOiA0NSxcbiAgICAgICAgICBcIm9yaWdpbmFsQW1vdW50XCI6IDQ1LFxuICAgICAgICAgIFwidW5pdHNcIjogXCJ1cyQvW2Fjcl91c11cIixcbiAgICAgICAgICBcImVycm9yXCI6IG51bGwsXG4gICAgICAgICAgXCJwcmljZVwiOiA0NVxuICAgICAgICB9XG4gICAgICB9LFxuICAgICAgXCJwcmljZVwiOiA3NS41NjcyXG4gICAgfSxcbiAgICB7XG4gICAgICBcImRlc2NyaXB0aW9uXCI6IFwiUHJlIFBsYW50aW5nIERpc2NpbmdcIixcbiAgICAgIFwiY2xhc3NcIjogXCJjdWx0dXJhbFwiLFxuICAgICAgXCJuYW1lXCI6IFwiU3R1YmJsZSBEaXNjXCIsXG4gICAgICBcInVuaXRzXCI6IFwiaFwiLFxuICAgICAgXCJ0eXBlXCI6IFwiY29tcGxleFwiLFxuICAgICAgXCJtYXRlcmlhbHNcIjoge1xuICAgICAgICBcIkx1YmUmUmVwYWlyXCI6IHtcbiAgICAgICAgICBcImFtb3VudFwiOiAzMC43NyxcbiAgICAgICAgICBcIm9yaWdpbmFsQW1vdW50XCI6IDMwLjc3LFxuICAgICAgICAgIFwidW5pdHNcIjogXCJ1cyRcIixcbiAgICAgICAgICBcImVycm9yXCI6IG51bGwsXG4gICAgICAgICAgXCJwcmljZVwiOiAzMC43N1xuICAgICAgICB9LFxuICAgICAgICBcIkxhYm9yLUVxdWlwbWVudCBPcGVyYXRvclwiOiB7XG4gICAgICAgICAgXCJhbW91bnRcIjogMS4zNixcbiAgICAgICAgICBcIm9yaWdpbmFsQW1vdW50XCI6IDEuMzYsXG4gICAgICAgICAgXCJ1bml0c1wiOiBcImhcIixcbiAgICAgICAgICBcImVycm9yXCI6IG51bGwsXG4gICAgICAgICAgXCJwcmljZVwiOiAyMy4xMlxuICAgICAgICB9LFxuICAgICAgICBcIkZ1ZWwtRGllc2VsXCI6IHtcbiAgICAgICAgICBcImFtb3VudFwiOiAxNy44NCxcbiAgICAgICAgICBcIm9yaWdpbmFsQW1vdW50XCI6IDE3Ljg0LFxuICAgICAgICAgIFwidW5pdHNcIjogXCJbZ2FsX3VzXVwiLFxuICAgICAgICAgIFwiZXJyb3JcIjogbnVsbCxcbiAgICAgICAgICBcInByaWNlXCI6IDY5LjIxOTJcbiAgICAgICAgfVxuICAgICAgfSxcbiAgICAgIFwicHJpY2VcIjogMTIzLjEwOTJcbiAgICB9LFxuICAgIHtcbiAgICAgIFwibmFtZVwiOiBcIlN3YXRoZXIgMTYnXCIsXG4gICAgICBcInVuaXRzXCI6IFwiaFwiLFxuICAgICAgXCJ0eXBlXCI6IFwiY29tcGxleFwiLFxuICAgICAgXCJtYXRlcmlhbHNcIjoge1xuICAgICAgICBcIkx1YmUmUmVwYWlyXCI6IHtcbiAgICAgICAgICBcImFtb3VudFwiOiAxOS40MixcbiAgICAgICAgICBcIm9yaWdpbmFsQW1vdW50XCI6IDE5LjQyLFxuICAgICAgICAgIFwidW5pdHNcIjogXCJ1cyRcIixcbiAgICAgICAgICBcImVycm9yXCI6IG51bGwsXG4gICAgICAgICAgXCJwcmljZVwiOiAxOS40MlxuICAgICAgICB9LFxuICAgICAgICBcIkxhYm9yLUVxdWlwbWVudCBPcGVyYXRvclwiOiB7XG4gICAgICAgICAgXCJhbW91bnRcIjogMSxcbiAgICAgICAgICBcIm9yaWdpbmFsQW1vdW50XCI6IDEsXG4gICAgICAgICAgXCJ1bml0c1wiOiBcImhcIixcbiAgICAgICAgICBcImVycm9yXCI6IG51bGwsXG4gICAgICAgICAgXCJwcmljZVwiOiAxN1xuICAgICAgICB9LFxuICAgICAgICBcIkZ1ZWwtRGllc2VsXCI6IHtcbiAgICAgICAgICBcImFtb3VudFwiOiA4LFxuICAgICAgICAgIFwib3JpZ2luYWxBbW91bnRcIjogOCxcbiAgICAgICAgICBcInVuaXRzXCI6IFwiW2dhbF91c11cIixcbiAgICAgICAgICBcImVycm9yXCI6IG51bGwsXG4gICAgICAgICAgXCJwcmljZVwiOiAzMS4wNFxuICAgICAgICB9XG4gICAgICB9LFxuICAgICAgXCJwcmljZVwiOiA2Ny40NjAwMDAwMDAwMDAwMVxuICAgIH0sXG4gICAge1xuICAgICAgXCJkZXNjcmlwdGlvblwiOiBcIlByZXBsYW50aW5nXCIsXG4gICAgICBcImNsYXNzXCI6IFwiY3VsdHVyYWxcIixcbiAgICAgIFwibmFtZVwiOiBcIlRyaS1QbGFuZSAyWFwiLFxuICAgICAgXCJ1bml0c1wiOiBcImhcIixcbiAgICAgIFwidHlwZVwiOiBcImNvbXBsZXhcIixcbiAgICAgIFwibWF0ZXJpYWxzXCI6IHtcbiAgICAgICAgXCJMdWJlJlJlcGFpclwiOiB7XG4gICAgICAgICAgXCJhbW91bnRcIjogMjAuODMsXG4gICAgICAgICAgXCJvcmlnaW5hbEFtb3VudFwiOiAyMC44MyxcbiAgICAgICAgICBcInVuaXRzXCI6IFwidXMkXCIsXG4gICAgICAgICAgXCJlcnJvclwiOiBudWxsLFxuICAgICAgICAgIFwicHJpY2VcIjogMjAuODNcbiAgICAgICAgfSxcbiAgICAgICAgXCJMYWJvci1FcXVpcG1lbnQgT3BlcmF0b3JcIjoge1xuICAgICAgICAgIFwiYW1vdW50XCI6IDEuMjMsXG4gICAgICAgICAgXCJvcmlnaW5hbEFtb3VudFwiOiAxLjIzLFxuICAgICAgICAgIFwidW5pdHNcIjogXCJoXCIsXG4gICAgICAgICAgXCJlcnJvclwiOiBudWxsLFxuICAgICAgICAgIFwicHJpY2VcIjogMjAuOTFcbiAgICAgICAgfSxcbiAgICAgICAgXCJGdWVsLURpZXNlbFwiOiB7XG4gICAgICAgICAgXCJhbW91bnRcIjogMTIuODksXG4gICAgICAgICAgXCJvcmlnaW5hbEFtb3VudFwiOiAxMi44OSxcbiAgICAgICAgICBcInVuaXRzXCI6IFwiW2dhbF91c11cIixcbiAgICAgICAgICBcImVycm9yXCI6IG51bGwsXG4gICAgICAgICAgXCJwcmljZVwiOiA1MC4wMTMyXG4gICAgICAgIH1cbiAgICAgIH0sXG4gICAgICBcInByaWNlXCI6IDkxLjc1MzE5OTk5OTk5OTk5XG4gICAgfSxcbiAgICB7XG4gICAgICBcInR5cGVcIjogXCJjb21wbGV4XCIsXG4gICAgICBcIm5hbWVcIjogXCIxNTBIUDRXRCBUcmFjdG9yXCIsXG4gICAgICBcInVuaXRzXCI6IFwiaFwiLFxuICAgICAgXCJkZXNjcmlwdGlvblwiOiBcIkxhcmdlIFRyYWN0b3JcIixcbiAgICAgIFwicHJpY2VcIjogNjAuMjI0OCxcbiAgICAgIFwibWF0ZXJpYWxzXCI6IHtcbiAgICAgICAgXCJMdWJlJlJlcGFpclwiOiB7XG4gICAgICAgICAgXCJuYW1lXCI6IFwiTHViZSZSZXBhaXJcIixcbiAgICAgICAgICBcImFtb3VudFwiOiA5LjQzLFxuICAgICAgICAgIFwidW5pdHNcIjogXCJ1cyRcIixcbiAgICAgICAgICBcImVycm9yXCI6IG51bGwsXG4gICAgICAgICAgXCJwcmljZVwiOiA5LjQzLFxuICAgICAgICAgIFwib3JpZ2luYWxBbW91bnRcIjogOS40M1xuICAgICAgICB9LFxuICAgICAgICBcIkZ1ZWwtRGllc2VsXCI6IHtcbiAgICAgICAgICBcIm5hbWVcIjogXCJGdWVsLURpZXNlbFwiLFxuICAgICAgICAgIFwiYW1vdW50XCI6IDguNzEsXG4gICAgICAgICAgXCJ1bml0c1wiOiBcIltnYWxfdXNdXCIsXG4gICAgICAgICAgXCJlcnJvclwiOiBudWxsLFxuICAgICAgICAgIFwicHJpY2VcIjogMzMuNzk0OCxcbiAgICAgICAgICBcIm9yaWdpbmFsQW1vdW50XCI6IDguNzFcbiAgICAgICAgfSxcbiAgICAgICAgXCJMYWJvci1FcXVpcG1lbnQgT3BlcmF0b3JcIjoge1xuICAgICAgICAgIFwibmFtZVwiOiBcIkxhYm9yLUVxdWlwbWVudCBPcGVyYXRvclwiLFxuICAgICAgICAgIFwiYW1vdW50XCI6IDEsXG4gICAgICAgICAgXCJ1bml0c1wiOiBcImhcIixcbiAgICAgICAgICBcImVycm9yXCI6IG51bGwsXG4gICAgICAgICAgXCJwcmljZVwiOiAxN1xuICAgICAgICB9XG4gICAgICB9XG4gICAgfSxcbiAgICB7XG4gICAgICBcInR5cGVcIjogXCJjb21wbGV4XCIsXG4gICAgICBcIm5hbWVcIjogXCIyMDVIUCBDcmF3bGVyXCIsXG4gICAgICBcInVuaXRzXCI6IFwiaFwiLFxuICAgICAgXCJkZXNjcmlwdGlvblwiOiBcIlwiLFxuICAgICAgXCJwcmljZVwiOiA3Ni4zMDE5OTk5OTk5OTk5OSxcbiAgICAgIFwibWF0ZXJpYWxzXCI6IHtcbiAgICAgICAgXCJMdWJlJlJlcGFpclwiOiB7XG4gICAgICAgICAgXCJuYW1lXCI6IFwiTHViZSZSZXBhaXJcIixcbiAgICAgICAgICBcImFtb3VudFwiOiAxMy4xMyxcbiAgICAgICAgICBcInVuaXRzXCI6IFwidXMkXCIsXG4gICAgICAgICAgXCJlcnJvclwiOiBudWxsLFxuICAgICAgICAgIFwicHJpY2VcIjogMTMuMTMsXG4gICAgICAgICAgXCJvcmlnaW5hbEFtb3VudFwiOiAxMy4xM1xuICAgICAgICB9LFxuICAgICAgICBcIkZ1ZWwtRGllc2VsXCI6IHtcbiAgICAgICAgICBcIm5hbWVcIjogXCJGdWVsLURpZXNlbFwiLFxuICAgICAgICAgIFwiYW1vdW50XCI6IDExLjksXG4gICAgICAgICAgXCJ1bml0c1wiOiBcIltnYWxfdXNdXCIsXG4gICAgICAgICAgXCJlcnJvclwiOiBudWxsLFxuICAgICAgICAgIFwicHJpY2VcIjogNDYuMTcyLFxuICAgICAgICAgIFwib3JpZ2luYWxBbW91bnRcIjogMTEuOVxuICAgICAgICB9LFxuICAgICAgICBcIkxhYm9yLUVxdWlwbWVudCBPcGVyYXRvclwiOiB7XG4gICAgICAgICAgXCJuYW1lXCI6IFwiTGFib3ItRXF1aXBtZW50IE9wZXJhdG9yXCIsXG4gICAgICAgICAgXCJhbW91bnRcIjogMSxcbiAgICAgICAgICBcInVuaXRzXCI6IFwiaFwiLFxuICAgICAgICAgIFwiZXJyb3JcIjogbnVsbCxcbiAgICAgICAgICBcInByaWNlXCI6IDE3XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9LFxuICAgIHtcbiAgICAgIFwidHlwZVwiOiBcImNvbXBsZXhcIixcbiAgICAgIFwibmFtZVwiOiBcIjM3SFAgNFdEIFRyYWN0b3JcIixcbiAgICAgIFwidW5pdHNcIjogXCJoXCIsXG4gICAgICBcImRlc2NyaXB0aW9uXCI6IFwiU21hbGwgVHJhY3RvclwiLFxuICAgICAgXCJwcmljZVwiOiAyNS42NDE2LFxuICAgICAgXCJtYXRlcmlhbHNcIjoge1xuICAgICAgICBcIkx1YmUmUmVwYWlyXCI6IHtcbiAgICAgICAgICBcIm5hbWVcIjogXCJMdWJlJlJlcGFpclwiLFxuICAgICAgICAgIFwiYW1vdW50XCI6IDEuNTgsXG4gICAgICAgICAgXCJ1bml0c1wiOiBcInVzJFwiLFxuICAgICAgICAgIFwiZXJyb3JcIjogbnVsbCxcbiAgICAgICAgICBcInByaWNlXCI6IDEuNTgsXG4gICAgICAgICAgXCJvcmlnaW5hbEFtb3VudFwiOiAxLjU4XG4gICAgICAgIH0sXG4gICAgICAgIFwiRnVlbC1EaWVzZWxcIjoge1xuICAgICAgICAgIFwibmFtZVwiOiBcIkZ1ZWwtRGllc2VsXCIsXG4gICAgICAgICAgXCJhbW91bnRcIjogMS44MixcbiAgICAgICAgICBcInVuaXRzXCI6IFwiW2dhbF91c11cIixcbiAgICAgICAgICBcImVycm9yXCI6IG51bGwsXG4gICAgICAgICAgXCJwcmljZVwiOiA3LjA2MTYsXG4gICAgICAgICAgXCJvcmlnaW5hbEFtb3VudFwiOiAxLjgyXG4gICAgICAgIH0sXG4gICAgICAgIFwiTGFib3ItRXF1aXBtZW50IE9wZXJhdG9yXCI6IHtcbiAgICAgICAgICBcIm5hbWVcIjogXCJMYWJvci1FcXVpcG1lbnQgT3BlcmF0b3JcIixcbiAgICAgICAgICBcImFtb3VudFwiOiAxLFxuICAgICAgICAgIFwidW5pdHNcIjogXCJoXCIsXG4gICAgICAgICAgXCJlcnJvclwiOiBudWxsLFxuICAgICAgICAgIFwicHJpY2VcIjogMTdcbiAgICAgICAgfVxuICAgICAgfVxuICAgIH0sXG4gICAge1xuICAgICAgXCJ0eXBlXCI6IFwiY29tcGxleFwiLFxuICAgICAgXCJuYW1lXCI6IFwiUmFrZSAyMCdcIixcbiAgICAgIFwidW5pdHNcIjogXCJoXCIsXG4gICAgICBcImRlc2NyaXB0aW9uXCI6IFwiXCIsXG4gICAgICBcInByaWNlXCI6IDQuNjEsXG4gICAgICBcIm1hdGVyaWFsc1wiOiB7XG4gICAgICAgIFwiTHViZSZSZXBhaXJcIjoge1xuICAgICAgICAgIFwibmFtZVwiOiBcIkx1YmUmUmVwYWlyXCIsXG4gICAgICAgICAgXCJhbW91bnRcIjogNC42MSxcbiAgICAgICAgICBcInVuaXRzXCI6IFwidXMkXCIsXG4gICAgICAgICAgXCJlcnJvclwiOiBudWxsLFxuICAgICAgICAgIFwicHJpY2VcIjogNC42MSxcbiAgICAgICAgICBcIm9yaWdpbmFsQW1vdW50XCI6IDQuNjFcbiAgICAgICAgfVxuICAgICAgfVxuICAgIH0sXG4gICAge1xuICAgICAgXCJ0eXBlXCI6IFwiY29tcGxleFwiLFxuICAgICAgXCJuYW1lXCI6IFwiIEJhbGVyMTMwMCMgUFRPXCIsXG4gICAgICBcInVuaXRzXCI6IFwiaFwiLFxuICAgICAgXCJkZXNjcmlwdGlvblwiOiBcIlwiLFxuICAgICAgXCJwcmljZVwiOiAzMS44NSxcbiAgICAgIFwibWF0ZXJpYWxzXCI6IHtcbiAgICAgICAgXCJMdWJlJlJlcGFpclwiOiB7XG4gICAgICAgICAgXCJuYW1lXCI6IFwiTHViZSZSZXBhaXJcIixcbiAgICAgICAgICBcImFtb3VudFwiOiAzMS44NSxcbiAgICAgICAgICBcInVuaXRzXCI6IFwidXMkXCIsXG4gICAgICAgICAgXCJlcnJvclwiOiBudWxsLFxuICAgICAgICAgIFwicHJpY2VcIjogMzEuODUsXG4gICAgICAgICAgXCJvcmlnaW5hbEFtb3VudFwiOiAzMS44NVxuICAgICAgICB9XG4gICAgICB9XG4gICAgfVxuICBdLFxuICBcIm9wZXJhdGlvbnNcIjogW1xuICAgIHtcbiAgICAgIFwibmFtZVwiOiBcInBsYW50aW5nXCIsXG4gICAgICBcIm1hdGVyaWFsc1wiOiBbXG4gICAgICAgIHtcbiAgICAgICAgICBcImFtb3VudFwiOiAwLjMzLFxuICAgICAgICAgIFwidW5pdHNcIjogXCJoXCIsXG4gICAgICAgICAgXCJuYW1lXCI6IFwiUGxhbnQtUm91bmR1cCBSZWFkeSBTZWVkXCIsXG4gICAgICAgICAgXCJpZFwiOiBcIjhhMTcwNmQwLWU3YzItNGUxNS04NmVlLWZmZTY2NzZlNjUwMVwiLFxuICAgICAgICAgIFwiZXJyb3JcIjogbnVsbCxcbiAgICAgICAgICBcInByaWNlXCI6IDE3LjAxNTk4OFxuICAgICAgICB9LFxuICAgICAgICB7XG4gICAgICAgICAgXCJhbW91bnRcIjogMC4xLFxuICAgICAgICAgIFwidW5pdHNcIjogXCJoXCIsXG4gICAgICAgICAgXCJuYW1lXCI6IFwiUm9sbC1Db3ZlciBTZWVkXCIsXG4gICAgICAgICAgXCJpZFwiOiBcIjg0YmVmMzc2LTZiYTItNGM4ZS05YjM5LTYxNDRmMjExZjcwZVwiLFxuICAgICAgICAgIFwiZXJyb3JcIjogbnVsbCxcbiAgICAgICAgICBcInByaWNlXCI6IDUuMDA0MjAwMDAwMDAwMDAxXG4gICAgICAgIH0sXG4gICAgICAgIHtcbiAgICAgICAgICBcImFtb3VudFwiOiAyLFxuICAgICAgICAgIFwidW5pdHNcIjogXCJoXCIsXG4gICAgICAgICAgXCJuYW1lXCI6IFwiU3ByaW5rbGVyIElycmlnYXRlIDJYXCIsXG4gICAgICAgICAgXCJpZFwiOiBcIjlkOWNmMjBhLTg0OTYtNGFlNC1iYzU0LTJlMjJjNGJiODU4MlwiLFxuICAgICAgICAgIFwiZXJyb3JcIjogbnVsbCxcbiAgICAgICAgICBcInByaWNlXCI6IDE1MS4xMzQ0XG4gICAgICAgIH0sXG4gICAgICAgIHtcbiAgICAgICAgICBcImFtb3VudFwiOiAyLFxuICAgICAgICAgIFwidW5pdHNcIjogXCJoXCIsXG4gICAgICAgICAgXCJuYW1lXCI6IFwiTGFib3ItSXJyaWdhdGlvblwiLFxuICAgICAgICAgIFwiaWRcIjogXCIwYzczOGQ3Yy1kNzU5LTRlMzYtOTUwYS02ODAwNGIyNWFlYWJcIixcbiAgICAgICAgICBcImVycm9yXCI6IG51bGwsXG4gICAgICAgICAgXCJwcmljZVwiOiAyNy4yXG4gICAgICAgIH0sXG4gICAgICAgIHtcbiAgICAgICAgICBcIm5vdGVcIjogXCJSb3VuZHVwXCIsXG4gICAgICAgICAgXCJhbW91bnRcIjogMC4wNSxcbiAgICAgICAgICBcInVuaXRzXCI6IFwiaFwiLFxuICAgICAgICAgIFwibmFtZVwiOiBcIkFUVlwiLFxuICAgICAgICAgIFwiaWRcIjogXCI3MzgxZTA1OC0zNGRkLTRiOWYtOTk0My00ZDQxNDkyY2Y2NDhcIixcbiAgICAgICAgICBcImVycm9yXCI6IG51bGwsXG4gICAgICAgICAgXCJwcmljZVwiOiAxLjA5OTVcbiAgICAgICAgfSxcbiAgICAgICAge1xuICAgICAgICAgIFwiYW1vdW50XCI6IDIuMixcbiAgICAgICAgICBcInVuaXRzXCI6IFwiW3B0X3VzXVwiLFxuICAgICAgICAgIFwibmFtZVwiOiBcIlJvdW5kdXAgUG93ZXJNYXhcIixcbiAgICAgICAgICBcImlkXCI6IFwiZWY1ZmFiYWYtMDJlMi00YzUxLWFmMDgtN2M4Mjg1OTliNzBmXCIsXG4gICAgICAgICAgXCJlcnJvclwiOiBudWxsLFxuICAgICAgICAgIFwicHJpY2VcIjogNi4wNTAwMDAwMDAwMDAwMDFcbiAgICAgICAgfSxcbiAgICAgICAge1xuICAgICAgICAgIFwiYW1vdW50XCI6IDAuMjUsXG4gICAgICAgICAgXCJ1bml0c1wiOiBcImhcIixcbiAgICAgICAgICBcIm5hbWVcIjogXCJTZXJ2aWNlIFRydWNrXCIsXG4gICAgICAgICAgXCJpZFwiOiBcIjk3Y2M4OGVlLTg4MzAtNDJiMi1iMWRiLWZiMWM3OTkyMDg0N1wiLFxuICAgICAgICAgIFwiZXJyb3JcIjogbnVsbCxcbiAgICAgICAgICBcInByaWNlXCI6IDkuMDEyM1xuICAgICAgICB9LFxuICAgICAgICB7XG4gICAgICAgICAgXCJhbW91bnRcIjogMC4zNyxcbiAgICAgICAgICBcInVuaXRzXCI6IFwiaFwiLFxuICAgICAgICAgIFwibmFtZVwiOiBcIjEvMiBUb24gUGlja3VwXCIsXG4gICAgICAgICAgXCJpZFwiOiBcIjQ2OWY2OWJkLTU2MDYtNDgyYy05ZjUzLTRjNTQ0YThiZjEwY1wiLFxuICAgICAgICAgIFwiZXJyb3JcIjogbnVsbCxcbiAgICAgICAgICBcInByaWNlXCI6IDExLjk4NDAwNFxuICAgICAgICB9LFxuICAgICAgICB7XG4gICAgICAgICAgXCJhbW91bnRcIjogMC40LFxuICAgICAgICAgIFwidW5pdHNcIjogXCJoXCIsXG4gICAgICAgICAgXCJuYW1lXCI6IFwiMy80IFRvbiBQaWNrdXAgKEZhcm0gdXNlKVwiLFxuICAgICAgICAgIFwiaWRcIjogXCIzZGYwYmY4Yy05NzI3LTQxYjctYjRiNC1lNjEzZTk1OTU5YTNcIixcbiAgICAgICAgICBcImVycm9yXCI6IG51bGwsXG4gICAgICAgICAgXCJwcmljZVwiOiAxNS4wMjE0NDAwMDAwMDAwMDJcbiAgICAgICAgfSxcbiAgICAgICAge1xuICAgICAgICAgIFwiYW1vdW50XCI6IDQwLFxuICAgICAgICAgIFwidW5pdHNcIjogXCJbbGJfYXZdXCIsXG4gICAgICAgICAgXCJuYW1lXCI6IFwiQWxmYWxmYSBTZWVkIFJSXCIsXG4gICAgICAgICAgXCJpZFwiOiBcIjVjNTZiNzhiLTc0NWUtNDIzZi04YjJlLTJjNjMwYjYyNjViNlwiLFxuICAgICAgICAgIFwiZXJyb3JcIjogbnVsbCxcbiAgICAgICAgICBcInByaWNlXCI6IDIwMFxuICAgICAgICB9LFxuICAgICAgICB7XG4gICAgICAgICAgXCJub3RlXCI6IFwiSXJyaWdhdGlvbiBNYXRlcmlhbHNcIixcbiAgICAgICAgICBcImFtb3VudFwiOiA0NSxcbiAgICAgICAgICBcInVuaXRzXCI6IFwidXMkXCIsXG4gICAgICAgICAgXCJuYW1lXCI6IFwiRXN0aW1hdGVcIixcbiAgICAgICAgICBcImlkXCI6IFwiYTA4MGFlMTgtZWVmOC00MjYwLWFjNDItYzZkYTc4NzBiZjNmXCIsXG4gICAgICAgICAgXCJlcnJvclwiOiBudWxsLFxuICAgICAgICAgIFwicHJpY2VcIjogNDVcbiAgICAgICAgfVxuICAgICAgXSxcbiAgICAgIFwidW5pdHNcIjogXCJbYWNyX3VzXVwiLFxuICAgICAgXCJzY2hlZHVsZVwiOiBbXG4gICAgICAgIHtcbiAgICAgICAgICBcImRhdGVcIjogXCIyMDE1LTA5LTAxXCIsXG4gICAgICAgICAgXCJsZW5ndGhcIjogXCIyXCIsXG4gICAgICAgICAgXCJ1bml0c1wiOiBcIm1vbnRoXCJcbiAgICAgICAgfVxuICAgICAgXSxcbiAgICAgIFwic3VidG90YWxcIjogNDg4LjUyMTgzMixcbiAgICAgIFwidG90YWxcIjogNDg4LjUyMTgzMlxuICAgIH0sXG4gICAge1xuICAgICAgXCJuYW1lXCI6IFwiaXJyaWdhdGVcIixcbiAgICAgIFwibWF0ZXJpYWxzXCI6IFtcbiAgICAgICAge1xuICAgICAgICAgIFwiYW1vdW50XCI6IDEsXG4gICAgICAgICAgXCJ1bml0c1wiOiBcIlthY3JfdXNdXCIsXG4gICAgICAgICAgXCJuYW1lXCI6IFwiSXJyaWdhdGlvbi1EaXRjaC9UYWlsIExldmVlXCIsXG4gICAgICAgICAgXCJpZFwiOiBcIjhjYzY0MmRhLWRkNmUtNDVlNS1hNTM4LTcxYTIzNzRhY2RmMVwiLFxuICAgICAgICAgIFwiZXJyb3JcIjogbnVsbCxcbiAgICAgICAgICBcInByaWNlXCI6IDMxLjg4MzQ4XG4gICAgICAgIH0sXG4gICAgICAgIHtcbiAgICAgICAgICBcImFtb3VudFwiOiA0MixcbiAgICAgICAgICBcInVuaXRzXCI6IFwiW2Fjcl91c10uW2luX3VzXVwiLFxuICAgICAgICAgIFwibmFtZVwiOiBcIldhdGVyLUFsZmFsZmEtUHVtcGVkXCIsXG4gICAgICAgICAgXCJpZFwiOiBcIjgzODBjNjIwLTk4OGYtNGE3Yi05NmFkLTMwNDFjNmZkYTE0NFwiLFxuICAgICAgICAgIFwiZXJyb3JcIjogbnVsbCxcbiAgICAgICAgICBcInByaWNlXCI6IDMxNVxuICAgICAgICB9LFxuICAgICAgICB7XG4gICAgICAgICAgXCJhbW91bnRcIjogOSxcbiAgICAgICAgICBcInVuaXRzXCI6IFwiaFwiLFxuICAgICAgICAgIFwibmFtZVwiOiBcIkxhYm9yLUlycmlnYXRpb25cIixcbiAgICAgICAgICBcImlkXCI6IFwiNDVkODFkOTUtNzQxMy00NzEzLTk0YjQtNjg0MmFkNWIwMmZlXCIsXG4gICAgICAgICAgXCJlcnJvclwiOiBudWxsLFxuICAgICAgICAgIFwicHJpY2VcIjogMTIyLjM5OTk5OTk5OTk5OTk5XG4gICAgICAgIH1cbiAgICAgIF0sXG4gICAgICBcInVuaXRzXCI6IFwiW2Fjcl91c11cIixcbiAgICAgIFwic2NoZWR1bGVcIjogW1xuICAgICAgICB7XG4gICAgICAgICAgXCJkYXRlXCI6IFwiMjAxNi0wNC0wMVwiLFxuICAgICAgICAgIFwibGVuZ3RoXCI6IFwiNlwiLFxuICAgICAgICAgIFwidW5pdHNcIjogXCJtb250aFwiXG4gICAgICAgIH0sXG4gICAgICAgIHtcbiAgICAgICAgICBcImRhdGVcIjogXCIyMDE3LTA0LTAxXCIsXG4gICAgICAgICAgXCJsZW5ndGhcIjogXCI2XCIsXG4gICAgICAgICAgXCJ1bml0c1wiOiBcIm1vbnRoXCJcbiAgICAgICAgfSxcbiAgICAgICAge1xuICAgICAgICAgIFwiZGF0ZVwiOiBcIjIwMTgtMDQtMDFcIixcbiAgICAgICAgICBcImxlbmd0aFwiOiBcIjZcIixcbiAgICAgICAgICBcInVuaXRzXCI6IFwibW9udGhcIlxuICAgICAgICB9LFxuICAgICAgICB7XG4gICAgICAgICAgXCJkYXRlXCI6IFwiMjAxOS0wNC0wMVwiLFxuICAgICAgICAgIFwibGVuZ3RoXCI6IFwiNlwiLFxuICAgICAgICAgIFwidW5pdHNcIjogXCJtb250aFwiXG4gICAgICAgIH1cbiAgICAgIF0sXG4gICAgICBcInN1YnRvdGFsXCI6IDQ2OS4yODM0OCxcbiAgICAgIFwidG90YWxcIjogMTg3Ny4xMzM5MlxuICAgIH0sXG4gICAge1xuICAgICAgXCJuYW1lXCI6IFwiaGFydmVzdFwiLFxuICAgICAgXCJtYXRlcmlhbHNcIjogW1xuICAgICAgICB7XG4gICAgICAgICAgXCJhbW91bnRcIjogMC43NSxcbiAgICAgICAgICBcInVuaXRzXCI6IFwiaFwiLFxuICAgICAgICAgIFwibmFtZVwiOiBcIlN3YXRoZXIgMTYnXCIsXG4gICAgICAgICAgXCJpZFwiOiBcImQyNGYyMGMzLWQ5MTAtNDFkZC04ODI2LWRjNzZjOTIyODE3N1wiLFxuICAgICAgICAgIFwiZXJyb3JcIjogbnVsbCxcbiAgICAgICAgICBcInByaWNlXCI6IDUwLjU5NTAwMDAwMDAwMDAwNlxuICAgICAgICB9LFxuICAgICAgICB7XG4gICAgICAgICAgXCJhbW91bnRcIjogMC42LFxuICAgICAgICAgIFwidW5pdHNcIjogXCJoXCIsXG4gICAgICAgICAgXCJuYW1lXCI6IFwiUmFraW5nXCIsXG4gICAgICAgICAgXCJpZFwiOiBcImU1NjkyMWMwLThjNTItNGViNS1hOGQ3LWRmZDRmOGVkYTFhM1wiLFxuICAgICAgICAgIFwiZXJyb3JcIjogbnVsbCxcbiAgICAgICAgICBcInByaWNlXCI6IDE4LjE1MDk1OTk5OTk5OTk5OFxuICAgICAgICB9LFxuICAgICAgICB7XG4gICAgICAgICAgXCJhbW91bnRcIjogMC45MyxcbiAgICAgICAgICBcInVuaXRzXCI6IFwiaFwiLFxuICAgICAgICAgIFwibmFtZVwiOiBcIkJhbGluZ1wiLFxuICAgICAgICAgIFwiaWRcIjogXCIxNjk0YmU4Zi00M2EzLTQ4ZTQtODRmYS1iYjU3YmMyNzQyMTNcIixcbiAgICAgICAgICBcImVycm9yXCI6IG51bGwsXG4gICAgICAgICAgXCJwcmljZVwiOiA5Mi4xMzk1NjQwMDAwMDAwMlxuICAgICAgICB9LFxuICAgICAgICB7XG4gICAgICAgICAgXCJhbW91bnRcIjogMC45MyxcbiAgICAgICAgICBcInVuaXRzXCI6IFwiaFwiLFxuICAgICAgICAgIFwibmFtZVwiOiBcIkJhbGUgV2Fnb24gMTMwMCMgQXR0bVwiLFxuICAgICAgICAgIFwiaWRcIjogXCIyNTk5N2Y2YS05N2I2LTRlODEtOTIyYS1iMDllYTJlMjVhNzNcIixcbiAgICAgICAgICBcImVycm9yXCI6IG51bGwsXG4gICAgICAgICAgXCJwcmljZVwiOiA4NS4yOTk2XG4gICAgICAgIH1cbiAgICAgIF0sXG4gICAgICBcInVuaXRzXCI6IFwiW2Fjcl91c11cIixcbiAgICAgIFwic2NoZWR1bGVcIjogW1xuICAgICAgICB7XG4gICAgICAgICAgXCJkYXRlXCI6IFwiMjAxNi0wNC0wMVwiLFxuICAgICAgICAgIFwibGVuZ3RoXCI6IFwiNlwiLFxuICAgICAgICAgIFwidW5pdHNcIjogXCJtb250aFwiXG4gICAgICAgIH0sXG4gICAgICAgIHtcbiAgICAgICAgICBcImRhdGVcIjogXCIyMDE3LTA0LTAxXCIsXG4gICAgICAgICAgXCJsZW5ndGhcIjogXCI2XCIsXG4gICAgICAgICAgXCJ1bml0c1wiOiBcIm1vbnRoXCJcbiAgICAgICAgfSxcbiAgICAgICAge1xuICAgICAgICAgIFwiZGF0ZVwiOiBcIjIwMTgtMDQtMDFcIixcbiAgICAgICAgICBcImxlbmd0aFwiOiBcIjZcIixcbiAgICAgICAgICBcInVuaXRzXCI6IFwibW9udGhcIlxuICAgICAgICB9LFxuICAgICAgICB7XG4gICAgICAgICAgXCJkYXRlXCI6IFwiMjAxOS0wNC0wMVwiLFxuICAgICAgICAgIFwibGVuZ3RoXCI6IFwiNlwiLFxuICAgICAgICAgIFwidW5pdHNcIjogXCJtb250aFwiXG4gICAgICAgIH1cbiAgICAgIF0sXG4gICAgICBcInN1YnRvdGFsXCI6IDI0Ni4xODUxMjQwMDAwMDAwMyxcbiAgICAgIFwidG90YWxcIjogOTg0Ljc0MDQ5NjAwMDAwMDFcbiAgICB9LFxuICAgIHtcbiAgICAgIFwibmFtZVwiOiBcInByZS1wbGFudFwiLFxuICAgICAgXCJtYXRlcmlhbHNcIjogW1xuICAgICAgICB7XG4gICAgICAgICAgXCJub3RlXCI6IFwiU29pbCBTYW1wbGVzXCIsXG4gICAgICAgICAgXCJhbW91bnRcIjogNCxcbiAgICAgICAgICBcInVuaXRzXCI6IFwidXMkXCIsXG4gICAgICAgICAgXCJuYW1lXCI6IFwiRXN0aW1hdGVcIixcbiAgICAgICAgICBcImlkXCI6IFwiNTEyYzU0NTgtMTEzZC00NDBiLWI5YjQtNjUyNTkzNmNhN2IyXCIsXG4gICAgICAgICAgXCJlcnJvclwiOiBudWxsLFxuICAgICAgICAgIFwicHJpY2VcIjogNFxuICAgICAgICB9LFxuICAgICAgICB7XG4gICAgICAgICAgXCJhbW91bnRcIjogMC4xMyxcbiAgICAgICAgICBcInVuaXRzXCI6IFwiaFwiLFxuICAgICAgICAgIFwibmFtZVwiOiBcIlN0dWJibGUgRGlzY1wiLFxuICAgICAgICAgIFwiaWRcIjogXCI2MTllMGI3OC0wOGMzLTQwYzctOWZkNy00NjQzM2I0ZTExNDNcIixcbiAgICAgICAgICBcImVycm9yXCI6IG51bGwsXG4gICAgICAgICAgXCJwcmljZVwiOiAxNi4wMDQxOTZcbiAgICAgICAgfSxcbiAgICAgICAge1xuICAgICAgICAgIFwiYW1vdW50XCI6IDAuMTIsXG4gICAgICAgICAgXCJ1bml0c1wiOiBcImhcIixcbiAgICAgICAgICBcIm5hbWVcIjogXCJDaGlzZWwvUmlwICYgUm9sbFwiLFxuICAgICAgICAgIFwiaWRcIjogXCJkNWJmZDA4OS03ZWFhLTQzMjktYTQzOS05NGQwYjE1ZTE5MjNcIixcbiAgICAgICAgICBcImVycm9yXCI6IG51bGwsXG4gICAgICAgICAgXCJwcmljZVwiOiAxNC45OTc0MDc5OTk5OTk5OThcbiAgICAgICAgfSxcbiAgICAgICAge1xuICAgICAgICAgIFwibm90ZVwiOiBcIkxhc2VyIExldmVsaW5nIChlc3QgMS83dGgpIGNvc3RcIixcbiAgICAgICAgICBcImFtb3VudFwiOiAxMixcbiAgICAgICAgICBcInVuaXRzXCI6IFwidXMkXCIsXG4gICAgICAgICAgXCJuYW1lXCI6IFwiRXN0aW1hdGVcIixcbiAgICAgICAgICBcImlkXCI6IFwiNDE4NzIwMjQtMTMzZi00ODRmLTk3ZGItYTA5ODAzZjA5ODZhXCIsXG4gICAgICAgICAgXCJlcnJvclwiOiBudWxsLFxuICAgICAgICAgIFwicHJpY2VcIjogMTJcbiAgICAgICAgfSxcbiAgICAgICAge1xuICAgICAgICAgIFwiYW1vdW50XCI6IDAuMjQsXG4gICAgICAgICAgXCJ1bml0c1wiOiBcImhcIixcbiAgICAgICAgICBcIm5hbWVcIjogXCJUcmktUGxhbmUgMlhcIixcbiAgICAgICAgICBcImlkXCI6IFwiZDE5YzRkODctMWQ2OS00OTRlLTliYzUtNTc4YzllNWRmNDJjXCIsXG4gICAgICAgICAgXCJlcnJvclwiOiBudWxsLFxuICAgICAgICAgIFwicHJpY2VcIjogMjIuMDIwNzY3OTk5OTk5OTk3XG4gICAgICAgIH0sXG4gICAgICAgIHtcbiAgICAgICAgICBcImFtb3VudFwiOiAyNjQuODYsXG4gICAgICAgICAgXCJ1bml0c1wiOiBcIltsYl9hdl1cIixcbiAgICAgICAgICBcIm5hbWVcIjogXCIxMS01Mi0wXCIsXG4gICAgICAgICAgXCJpZFwiOiBcIjIyYjU3NDJmLWMxOWYtNDYyOC05NjdjLTQyMTg2NGI5NmM4M1wiLFxuICAgICAgICAgIFwiZXJyb3JcIjogbnVsbCxcbiAgICAgICAgICBcInByaWNlXCI6IDk3Ljk5ODJcbiAgICAgICAgfSxcbiAgICAgICAge1xuICAgICAgICAgIFwibm90ZVwiOiBcImV4dHJhIGZlcnRpbGl6ZXJcIixcbiAgICAgICAgICBcImFtb3VudFwiOiAyMSxcbiAgICAgICAgICBcInVuaXRzXCI6IFwidXMkXCIsXG4gICAgICAgICAgXCJuYW1lXCI6IFwiRXN0aW1hdGVcIixcbiAgICAgICAgICBcImlkXCI6IFwiMjc5MDE0MDctOTM3OC00MGE2LTljNzUtNzIyODAwNDFkY2JhXCIsXG4gICAgICAgICAgXCJlcnJvclwiOiBudWxsLFxuICAgICAgICAgIFwicHJpY2VcIjogMjFcbiAgICAgICAgfSxcbiAgICAgICAge1xuICAgICAgICAgIFwiYW1vdW50XCI6IDAuMTksXG4gICAgICAgICAgXCJ1bml0c1wiOiBcImhcIixcbiAgICAgICAgICBcIm5hbWVcIjogXCJGaW5pc2ggRGlzYyAmIFJvbGwgMlhcIixcbiAgICAgICAgICBcImlkXCI6IFwiNThlYmE4N2QtYzIyYi00ODIxLTk0OTctZTIyMTIzNmE1YTY0XCIsXG4gICAgICAgICAgXCJlcnJvclwiOiBudWxsLFxuICAgICAgICAgIFwicHJpY2VcIjogMjAuMDAxODMxOTk5OTk5OTk3XG4gICAgICAgIH0sXG4gICAgICAgIHtcbiAgICAgICAgICBcImFtb3VudFwiOiAwLjE0LFxuICAgICAgICAgIFwidW5pdHNcIjogXCJoXCIsXG4gICAgICAgICAgXCJuYW1lXCI6IFwiUHVsbCBCb3JkZXIvQ2hlY2tzXCIsXG4gICAgICAgICAgXCJpZFwiOiBcImI4OGRmZWMzLTU3ZGMtNGZjNi1hMDlmLWZkZDVlYmY0NjM1N1wiLFxuICAgICAgICAgIFwiZXJyb3JcIjogbnVsbCxcbiAgICAgICAgICBcInByaWNlXCI6IDEyLjAwMTI0OFxuICAgICAgICB9XG4gICAgICBdLFxuICAgICAgXCJ1bml0c1wiOiBcIlthY3JfdXNdXCIsXG4gICAgICBcInNjaGVkdWxlXCI6IFtcbiAgICAgICAge1xuICAgICAgICAgIFwiZGF0ZVwiOiBcIjIwMTUtMDgtMDFcIixcbiAgICAgICAgICBcImxlbmd0aFwiOiBcIjVcIixcbiAgICAgICAgICBcInVuaXRzXCI6IFwibW9udGhcIlxuICAgICAgICB9XG4gICAgICBdLFxuICAgICAgXCJzdWJ0b3RhbFwiOiAyMjAuMDIzNjUyLFxuICAgICAgXCJ0b3RhbFwiOiAyMjAuMDIzNjUyXG4gICAgfSxcbiAgICB7XG4gICAgICBcIm5hbWVcIjogXCJvdmVyaGVhZFwiLFxuICAgICAgXCJtYXRlcmlhbHNcIjogW1xuICAgICAgICB7XG4gICAgICAgICAgXCJhbW91bnRcIjogMC40NyxcbiAgICAgICAgICBcInVuaXRzXCI6IFwiaFwiLFxuICAgICAgICAgIFwibmFtZVwiOiBcIjEvMiBUb24gUGlja3VwXCIsXG4gICAgICAgICAgXCJpZFwiOiBcIjZlZmU2OWQ5LTQ2YzUtNDgzOS1iY2Q5LTAwYmJlNDQ4Yjk2OVwiLFxuICAgICAgICAgIFwiZXJyb3JcIjogbnVsbCxcbiAgICAgICAgICBcInByaWNlXCI6IDE1LjIyMjkyNFxuICAgICAgICB9LFxuICAgICAgICB7XG4gICAgICAgICAgXCJhbW91bnRcIjogMC40LFxuICAgICAgICAgIFwidW5pdHNcIjogXCJoXCIsXG4gICAgICAgICAgXCJuYW1lXCI6IFwiMy80IFRvbiBQaWNrdXAgKEZhcm0gdXNlKVwiLFxuICAgICAgICAgIFwiaWRcIjogXCIwZmEwZjAzNi00NTNmLTQ2NTgtOTcxZC01MWJhYTAzNjEyNGRcIixcbiAgICAgICAgICBcImVycm9yXCI6IG51bGwsXG4gICAgICAgICAgXCJwcmljZVwiOiAxNS4wMjE0NDAwMDAwMDAwMDJcbiAgICAgICAgfSxcbiAgICAgICAge1xuICAgICAgICAgIFwiYW1vdW50XCI6IDAuMixcbiAgICAgICAgICBcInVuaXRzXCI6IFwiaFwiLFxuICAgICAgICAgIFwibmFtZVwiOiBcIlNlcnZpY2UgVHJ1Y2tcIixcbiAgICAgICAgICBcImlkXCI6IFwiNTE3OGZlM2MtMDkwOC00OGJlLTkwOWYtOTdlYTk4NzYzZjRiXCIsXG4gICAgICAgICAgXCJlcnJvclwiOiBudWxsLFxuICAgICAgICAgIFwicHJpY2VcIjogNy4yMDk4NFxuICAgICAgICB9LFxuICAgICAgICB7XG4gICAgICAgICAgXCJub3RlXCI6IFwiT2ZmaWNlIEV4cGVuc2VcIixcbiAgICAgICAgICBcImFtb3VudFwiOiA1MCxcbiAgICAgICAgICBcInVuaXRzXCI6IFwidXMkXCIsXG4gICAgICAgICAgXCJuYW1lXCI6IFwiRXN0aW1hdGVcIixcbiAgICAgICAgICBcImlkXCI6IFwiNWE3ZTljY2YtZDBiNS00YmYxLTk2ZDktNzczOTE1MDVhMzdkXCIsXG4gICAgICAgICAgXCJlcnJvclwiOiBudWxsLFxuICAgICAgICAgIFwicHJpY2VcIjogNTBcbiAgICAgICAgfSxcbiAgICAgICAge1xuICAgICAgICAgIFwibm90ZVwiOiBcIlN1cGVydmlzb3IgU2FsYXJ5XCIsXG4gICAgICAgICAgXCJhbW91bnRcIjogNDMsXG4gICAgICAgICAgXCJ1bml0c1wiOiBcInVzJFwiLFxuICAgICAgICAgIFwibmFtZVwiOiBcIkVzdGltYXRlXCIsXG4gICAgICAgICAgXCJpZFwiOiBcIjViNjBkOTlkLTMxYjgtNGU0Yi1iMzUyLWYxMTExMmU5NjliMFwiLFxuICAgICAgICAgIFwiZXJyb3JcIjogbnVsbCxcbiAgICAgICAgICBcInByaWNlXCI6IDQzXG4gICAgICAgIH0sXG4gICAgICAgIHtcbiAgICAgICAgICBcIm5vdGVcIjogXCJMaWFiaWxpdHkgSW5zdXJhbmNlXCIsXG4gICAgICAgICAgXCJhbW91bnRcIjogMSxcbiAgICAgICAgICBcInVuaXRzXCI6IFwidXMkXCIsXG4gICAgICAgICAgXCJuYW1lXCI6IFwiRXN0aW1hdGVcIixcbiAgICAgICAgICBcImlkXCI6IFwiZTRlNjBkODgtZmQ3Ni00ZTM0LTg0YTAtNTJiZWMzMjQ5MjQxXCIsXG4gICAgICAgICAgXCJlcnJvclwiOiBudWxsLFxuICAgICAgICAgIFwicHJpY2VcIjogMVxuICAgICAgICB9LFxuICAgICAgICB7XG4gICAgICAgICAgXCJub3RlXCI6IFwiTWlzY2VsbGFuZW91cyBDb3N0c1wiLFxuICAgICAgICAgIFwiYW1vdW50XCI6IDIwLFxuICAgICAgICAgIFwidW5pdHNcIjogXCJ1cyRcIixcbiAgICAgICAgICBcIm5hbWVcIjogXCJFc3RpbWF0ZVwiLFxuICAgICAgICAgIFwiaWRcIjogXCIzZjFlMTg0ZC05NGVjLTRhYzItODM1OS1lMTMzNmYwNjI2MDZcIixcbiAgICAgICAgICBcImVycm9yXCI6IG51bGwsXG4gICAgICAgICAgXCJwcmljZVwiOiAyMFxuICAgICAgICB9LFxuICAgICAgICB7XG4gICAgICAgICAgXCJub3RlXCI6IFwiUHJvcGVydHkgVGF4ZXNcIixcbiAgICAgICAgICBcImFtb3VudFwiOiA4MSxcbiAgICAgICAgICBcInVuaXRzXCI6IFwidXMkXCIsXG4gICAgICAgICAgXCJuYW1lXCI6IFwiRXN0aW1hdGVcIixcbiAgICAgICAgICBcImlkXCI6IFwiMmE0NjlhMTYtZGI2YS00ZGQzLWE3MmItMmQ3ZDg2Zjk5ZjUxXCIsXG4gICAgICAgICAgXCJlcnJvclwiOiBudWxsLFxuICAgICAgICAgIFwicHJpY2VcIjogODFcbiAgICAgICAgfSxcbiAgICAgICAge1xuICAgICAgICAgIFwibm90ZVwiOiBcIlByb3BlcnR5IEluc3VyYW5jZVwiLFxuICAgICAgICAgIFwiYW1vdW50XCI6IDcsXG4gICAgICAgICAgXCJ1bml0c1wiOiBcInVzJFwiLFxuICAgICAgICAgIFwibmFtZVwiOiBcIkVzdGltYXRlXCIsXG4gICAgICAgICAgXCJpZFwiOiBcIjcxZDBjMmFlLTFhOWItNDAzOS1iZmIzLTc0ZTc1NTRjYmYzYlwiLFxuICAgICAgICAgIFwiZXJyb3JcIjogbnVsbCxcbiAgICAgICAgICBcInByaWNlXCI6IDdcbiAgICAgICAgfSxcbiAgICAgICAge1xuICAgICAgICAgIFwibm90ZVwiOiBcIkludmVzdG1lbnQgUmVwYWlyc1wiLFxuICAgICAgICAgIFwiYW1vdW50XCI6IDIsXG4gICAgICAgICAgXCJ1bml0c1wiOiBcInVzJFwiLFxuICAgICAgICAgIFwibmFtZVwiOiBcIkVzdGltYXRlXCIsXG4gICAgICAgICAgXCJpZFwiOiBcImZhODNiZjI1LTk5ZWMtNDI4Mi1iMzY1LTNlYWE2MmI3OGIzZVwiLFxuICAgICAgICAgIFwiZXJyb3JcIjogbnVsbCxcbiAgICAgICAgICBcInByaWNlXCI6IDJcbiAgICAgICAgfSxcbiAgICAgICAge1xuICAgICAgICAgIFwibm90ZVwiOiBcIlNob3AgVG9vbHNcIixcbiAgICAgICAgICBcImFtb3VudFwiOiAxLFxuICAgICAgICAgIFwidW5pdHNcIjogXCJ1cyRcIixcbiAgICAgICAgICBcIm5hbWVcIjogXCJFc3RpbWF0ZVwiLFxuICAgICAgICAgIFwiaWRcIjogXCI0ODkwOTAxMC1mYTE0LTQ1OGYtYWU4Yi05NDNkNzM1MGY1MTRcIixcbiAgICAgICAgICBcImVycm9yXCI6IG51bGwsXG4gICAgICAgICAgXCJwcmljZVwiOiAxXG4gICAgICAgIH0sXG4gICAgICAgIHtcbiAgICAgICAgICBcIm5vdGVcIjogXCJIYXkgQmFybi9Qb2xlIEJhcm5cIixcbiAgICAgICAgICBcImFtb3VudFwiOiAyLFxuICAgICAgICAgIFwidW5pdHNcIjogXCJ1cyRcIixcbiAgICAgICAgICBcIm5hbWVcIjogXCJFc3RpbWF0ZVwiLFxuICAgICAgICAgIFwiaWRcIjogXCIxYWZlMzcxMC0wYjA2LTQ2MDctOWEzOS00YTE2ZDM1ZGQ1ZDFcIixcbiAgICAgICAgICBcImVycm9yXCI6IG51bGwsXG4gICAgICAgICAgXCJwcmljZVwiOiAyXG4gICAgICAgIH0sXG4gICAgICAgIHtcbiAgICAgICAgICBcIm5vdGVcIjogXCJMYW5kIDE2MCBBY3Jlc1wiLFxuICAgICAgICAgIFwiYW1vdW50XCI6IDM4MCxcbiAgICAgICAgICBcInVuaXRzXCI6IFwidXMkXCIsXG4gICAgICAgICAgXCJuYW1lXCI6IFwiRXN0aW1hdGVcIixcbiAgICAgICAgICBcImlkXCI6IFwiMmQ0Y2E3NmQtNjJjMy00YzAxLWFhNmUtNzNhOTcxM2RkMjQxXCIsXG4gICAgICAgICAgXCJlcnJvclwiOiBudWxsLFxuICAgICAgICAgIFwicHJpY2VcIjogMzgwXG4gICAgICAgIH0sXG4gICAgICAgIHtcbiAgICAgICAgICBcIm5vdGVcIjogXCJTcHJpbmtsZXIgUGlwZVwiLFxuICAgICAgICAgIFwiYW1vdW50XCI6IDEsXG4gICAgICAgICAgXCJ1bml0c1wiOiBcInVzJFwiLFxuICAgICAgICAgIFwibmFtZVwiOiBcIkVzdGltYXRlXCIsXG4gICAgICAgICAgXCJpZFwiOiBcIjdlMDFkYWUyLTU3OWYtNDcyNy04NjRiLWViYmZkOGIzZWJjM1wiLFxuICAgICAgICAgIFwiZXJyb3JcIjogbnVsbCxcbiAgICAgICAgICBcInByaWNlXCI6IDFcbiAgICAgICAgfSxcbiAgICAgICAge1xuICAgICAgICAgIFwibm90ZVwiOiBcIlBpcGUgTWFpbiBMaW5lIDEwaW4gMS8yIE1pbGVcIixcbiAgICAgICAgICBcImFtb3VudFwiOiAxLFxuICAgICAgICAgIFwidW5pdHNcIjogXCJ1cyRcIixcbiAgICAgICAgICBcIm5hbWVcIjogXCJFc3RpbWF0ZVwiLFxuICAgICAgICAgIFwiaWRcIjogXCIzMjZlYzZhNS1mNWI3LTRhOTQtYTY4MS0wNzhkZGJmNGZlYWJcIixcbiAgICAgICAgICBcImVycm9yXCI6IG51bGwsXG4gICAgICAgICAgXCJwcmljZVwiOiAxXG4gICAgICAgIH0sXG4gICAgICAgIHtcbiAgICAgICAgICBcIm5vdGVcIjogXCJTaG9wIDgwMDAgc3FmdFwiLFxuICAgICAgICAgIFwiYW1vdW50XCI6IDQsXG4gICAgICAgICAgXCJ1bml0c1wiOiBcInVzJFwiLFxuICAgICAgICAgIFwibmFtZVwiOiBcIkVzdGltYXRlXCIsXG4gICAgICAgICAgXCJpZFwiOiBcImY1ZTZmMDgxLTljMTQtNDFhNC04NWI2LTRkYjJlZDlkNTNkOFwiLFxuICAgICAgICAgIFwiZXJyb3JcIjogbnVsbCxcbiAgICAgICAgICBcInByaWNlXCI6IDRcbiAgICAgICAgfSxcbiAgICAgICAge1xuICAgICAgICAgIFwibm90ZVwiOiBcIkVzdGFibGlzaG1lbnQgQ29zdHMgMTYwIEFjXCIsXG4gICAgICAgICAgXCJhbW91bnRcIjogMjMwLFxuICAgICAgICAgIFwidW5pdHNcIjogXCJ1cyRcIixcbiAgICAgICAgICBcIm5hbWVcIjogXCJFc3RpbWF0ZVwiLFxuICAgICAgICAgIFwiaWRcIjogXCIwNjdkYjdkNi04YzAwLTQ1ODgtYjMzZi1mOGQ4ZmFlYTA0MzBcIixcbiAgICAgICAgICBcImVycm9yXCI6IG51bGwsXG4gICAgICAgICAgXCJwcmljZVwiOiAyMzBcbiAgICAgICAgfSxcbiAgICAgICAge1xuICAgICAgICAgIFwibm90ZVwiOiBcIkVxdWlwbWVudFwiLFxuICAgICAgICAgIFwiYW1vdW50XCI6IDEzMSxcbiAgICAgICAgICBcInVuaXRzXCI6IFwidXMkXCIsXG4gICAgICAgICAgXCJuYW1lXCI6IFwiRXN0aW1hdGVcIixcbiAgICAgICAgICBcImlkXCI6IFwiOWMyNDY5ZjUtODk0OC00MzM2LTk4ZTQtMmU0ZDgyODViNmNjXCIsXG4gICAgICAgICAgXCJlcnJvclwiOiBudWxsLFxuICAgICAgICAgIFwicHJpY2VcIjogMTMxXG4gICAgICAgIH1cbiAgICAgIF0sXG4gICAgICBcInVuaXRzXCI6IFwiW2Fjcl91c11cIixcbiAgICAgIFwic2NoZWR1bGVcIjogW1xuICAgICAgICB7XG4gICAgICAgICAgXCJkYXRlXCI6IFwiMjAxNi0wMS0wMVwiLFxuICAgICAgICAgIFwibGVuZ3RoXCI6IFwiMVwiLFxuICAgICAgICAgIFwidW5pdHNcIjogXCJ5ZWFyXCJcbiAgICAgICAgfSxcbiAgICAgICAge1xuICAgICAgICAgIFwiZGF0ZVwiOiBcIjIwMTctMDEtMDFcIixcbiAgICAgICAgICBcImxlbmd0aFwiOiBcIjFcIixcbiAgICAgICAgICBcInVuaXRzXCI6IFwieWVhclwiXG4gICAgICAgIH0sXG4gICAgICAgIHtcbiAgICAgICAgICBcImRhdGVcIjogXCIyMDE4LTAxLTAxXCIsXG4gICAgICAgICAgXCJsZW5ndGhcIjogXCIxXCIsXG4gICAgICAgICAgXCJ1bml0c1wiOiBcInllYXJcIlxuICAgICAgICB9LFxuICAgICAgICB7XG4gICAgICAgICAgXCJkYXRlXCI6IFwiMjAxOS0wMS0wMVwiLFxuICAgICAgICAgIFwibGVuZ3RoXCI6IFwiMVwiLFxuICAgICAgICAgIFwidW5pdHNcIjogXCJ5ZWFyXCJcbiAgICAgICAgfVxuICAgICAgXSxcbiAgICAgIFwic3VidG90YWxcIjogOTkxLjQ1NDIwNCxcbiAgICAgIFwidG90YWxcIjogMzk2NS44MTY4MTZcbiAgICB9LFxuICAgIHtcbiAgICAgIFwibmFtZVwiOiBcImluc2VjdCBjb250cm9sXCIsXG4gICAgICBcIm1hdGVyaWFsc1wiOiBbXG4gICAgICAgIHtcbiAgICAgICAgICBcImFtb3VudFwiOiAwLjA1LFxuICAgICAgICAgIFwidW5pdHNcIjogXCJoXCIsXG4gICAgICAgICAgXCJuYW1lXCI6IFwiQVRWXCIsXG4gICAgICAgICAgXCJpZFwiOiBcIjY5NjM2ZmNmLTYxMjEtNDNiNC05ZDc4LTViNjQ3OWY1YTAzMlwiLFxuICAgICAgICAgIFwiZXJyb3JcIjogbnVsbCxcbiAgICAgICAgICBcInByaWNlXCI6IDEuMDk5NVxuICAgICAgICB9LFxuICAgICAgICB7XG4gICAgICAgICAgXCJhbW91bnRcIjogMS41LFxuICAgICAgICAgIFwidW5pdHNcIjogXCJbZm96X3VzXVwiLFxuICAgICAgICAgIFwibmFtZVwiOiBcIldhcnJpb3IgSUlcIixcbiAgICAgICAgICBcImlkXCI6IFwiY2UwMjVjOWMtZjc5MC00NTY1LWE0NjYtNGFjMTRhYzViNTY1XCIsXG4gICAgICAgICAgXCJlcnJvclwiOiBudWxsLFxuICAgICAgICAgIFwicHJpY2VcIjogNy44NzVcbiAgICAgICAgfSxcbiAgICAgICAge1xuICAgICAgICAgIFwiYW1vdW50XCI6IDAuMDUsXG4gICAgICAgICAgXCJ1bml0c1wiOiBcImhcIixcbiAgICAgICAgICBcIm5hbWVcIjogXCJBVFZcIixcbiAgICAgICAgICBcImlkXCI6IFwiNjRjNWYzNjYtNGVhNS00NWNhLTk3MWMtYjhiMWVmZWNiZWU0XCIsXG4gICAgICAgICAgXCJlcnJvclwiOiBudWxsLFxuICAgICAgICAgIFwicHJpY2VcIjogMS4wOTk1XG4gICAgICAgIH0sXG4gICAgICAgIHtcbiAgICAgICAgICBcImFtb3VudFwiOiAyLFxuICAgICAgICAgIFwidW5pdHNcIjogXCJbZm96X3VzXVwiLFxuICAgICAgICAgIFwibmFtZVwiOiBcIkNvcmFnZW5cIixcbiAgICAgICAgICBcImlkXCI6IFwiMDNhZTg4NmUtZTI5NC00ZWVkLTliOTItY2NkMGNmYmZmNWMwXCIsXG4gICAgICAgICAgXCJlcnJvclwiOiBudWxsLFxuICAgICAgICAgIFwicHJpY2VcIjogMjAuNVxuICAgICAgICB9LFxuICAgICAgICB7XG4gICAgICAgICAgXCJhbW91bnRcIjogMC4wNSxcbiAgICAgICAgICBcInVuaXRzXCI6IFwiaFwiLFxuICAgICAgICAgIFwibmFtZVwiOiBcIkFUVlwiLFxuICAgICAgICAgIFwiaWRcIjogXCJiZTZlYjcyMC0yMWI4LTQ4NGQtODE1NC0xMGJlNDc2YzQxMjBcIixcbiAgICAgICAgICBcImVycm9yXCI6IG51bGwsXG4gICAgICAgICAgXCJwcmljZVwiOiAxLjA5OTVcbiAgICAgICAgfSxcbiAgICAgICAge1xuICAgICAgICAgIFwiYW1vdW50XCI6IDMsXG4gICAgICAgICAgXCJ1bml0c1wiOiBcIltmb3pfdXNdXCIsXG4gICAgICAgICAgXCJuYW1lXCI6IFwiQmVsdCBTQ1wiLFxuICAgICAgICAgIFwiaWRcIjogXCI4Mjg4MzhkNi02NjVhLTRmNjQtOTdjMC1hMWYzMmQzYmYyZDBcIixcbiAgICAgICAgICBcImVycm9yXCI6IG51bGwsXG4gICAgICAgICAgXCJwcmljZVwiOiAyOC4yMDAwMDAwMDAwMDAwMDNcbiAgICAgICAgfVxuICAgICAgXSxcbiAgICAgIFwidW5pdHNcIjogXCJbYWNyX3VzXVwiLFxuICAgICAgXCJzY2hlZHVsZVwiOiBbXG4gICAgICAgIHtcbiAgICAgICAgICBcImRhdGVcIjogXCIyMDE2LTAxLTAxXCIsXG4gICAgICAgICAgXCJsZW5ndGhcIjogXCI5XCIsXG4gICAgICAgICAgXCJ1bml0c1wiOiBcIm1vbnRoXCJcbiAgICAgICAgfSxcbiAgICAgICAge1xuICAgICAgICAgIFwiZGF0ZVwiOiBcIjIwMTctMDEtMDFcIixcbiAgICAgICAgICBcImxlbmd0aFwiOiBcIjlcIixcbiAgICAgICAgICBcInVuaXRzXCI6IFwibW9udGhcIlxuICAgICAgICB9LFxuICAgICAgICB7XG4gICAgICAgICAgXCJkYXRlXCI6IFwiMjAxOC0wMS0wMVwiLFxuICAgICAgICAgIFwibGVuZ3RoXCI6IFwiOVwiLFxuICAgICAgICAgIFwidW5pdHNcIjogXCJtb250aFwiXG4gICAgICAgIH0sXG4gICAgICAgIHtcbiAgICAgICAgICBcImRhdGVcIjogXCIyMDE5LTAxLTAxXCIsXG4gICAgICAgICAgXCJsZW5ndGhcIjogXCI5XCIsXG4gICAgICAgICAgXCJ1bml0c1wiOiBcIm1vbnRoXCJcbiAgICAgICAgfVxuICAgICAgXSxcbiAgICAgIFwic3VidG90YWxcIjogNTkuODczNSxcbiAgICAgIFwidG90YWxcIjogMjM5LjQ5NFxuICAgIH0sXG4gICAge1xuICAgICAgXCJuYW1lXCI6IFwid2VlZCBjb250cm9sXCIsXG4gICAgICBcIm1hdGVyaWFsc1wiOiBbXG4gICAgICAgIHtcbiAgICAgICAgICBcImFtb3VudFwiOiAwLjA1LFxuICAgICAgICAgIFwidW5pdHNcIjogXCJoXCIsXG4gICAgICAgICAgXCJuYW1lXCI6IFwiQVRWXCIsXG4gICAgICAgICAgXCJpZFwiOiBcIjNkMDIwMjM3LTY3NWMtNDg2OC04MmQ3LWYyZjQ3MWI4YjA4OFwiLFxuICAgICAgICAgIFwiZXJyb3JcIjogbnVsbCxcbiAgICAgICAgICBcInByaWNlXCI6IDEuMDk5NVxuICAgICAgICB9LFxuICAgICAgICB7XG4gICAgICAgICAgXCJhbW91bnRcIjogNC40LFxuICAgICAgICAgIFwidW5pdHNcIjogXCJbcHRfdXNdXCIsXG4gICAgICAgICAgXCJuYW1lXCI6IFwiVmVscGFyIExcIixcbiAgICAgICAgICBcImlkXCI6IFwiZWFhZjAzMWYtMDUyZi00NTRhLTg5N2MtZWVkNDc3MjRkZWE2XCIsXG4gICAgICAgICAgXCJlcnJvclwiOiBudWxsLFxuICAgICAgICAgIFwicHJpY2VcIjogNjMuNDA0XG4gICAgICAgIH1cbiAgICAgIF0sXG4gICAgICBcInVuaXRzXCI6IFwiW2Fjcl91c11cIixcbiAgICAgIFwic2NoZWR1bGVcIjogW1xuICAgICAgICB7XG4gICAgICAgICAgXCJkYXRlXCI6IFwiMjAxNi0wMS0wMVwiLFxuICAgICAgICAgIFwibGVuZ3RoXCI6IFwiOVwiLFxuICAgICAgICAgIFwidW5pdHNcIjogXCJtb250aFwiXG4gICAgICAgIH0sXG4gICAgICAgIHtcbiAgICAgICAgICBcImRhdGVcIjogXCIyMDE3LTAxLTAxXCIsXG4gICAgICAgICAgXCJsZW5ndGhcIjogXCI5XCIsXG4gICAgICAgICAgXCJ1bml0c1wiOiBcIm1vbnRoXCJcbiAgICAgICAgfSxcbiAgICAgICAge1xuICAgICAgICAgIFwiZGF0ZVwiOiBcIjIwMTgtMDEtMDFcIixcbiAgICAgICAgICBcImxlbmd0aFwiOiBcIjlcIixcbiAgICAgICAgICBcInVuaXRzXCI6IFwibW9udGhcIlxuICAgICAgICB9LFxuICAgICAgICB7XG4gICAgICAgICAgXCJkYXRlXCI6IFwiMjAxOS0wMS0wMVwiLFxuICAgICAgICAgIFwibGVuZ3RoXCI6IFwiOVwiLFxuICAgICAgICAgIFwidW5pdHNcIjogXCJtb250aFwiXG4gICAgICAgIH1cbiAgICAgIF0sXG4gICAgICBcInN1YnRvdGFsXCI6IDY0LjUwMzUsXG4gICAgICBcInRvdGFsXCI6IDI1OC4wMTRcbiAgICB9LFxuICAgIHtcbiAgICAgIFwibmFtZVwiOiBcImZlcnRpbGl6ZVwiLFxuICAgICAgXCJtYXRlcmlhbHNcIjogW1xuICAgICAgICB7XG4gICAgICAgICAgXCJhbW91bnRcIjogMjAwLFxuICAgICAgICAgIFwidW5pdHNcIjogXCJbbGJfYXZdXCIsXG4gICAgICAgICAgXCJuYW1lXCI6IFwiMTEtNTItMFwiLFxuICAgICAgICAgIFwiaWRcIjogXCJlYjJhZjhhMS1mNWRlLTQ4OTYtYjI1YS0xZmE0YzdkMGI3MjhcIixcbiAgICAgICAgICBcImVycm9yXCI6IG51bGwsXG4gICAgICAgICAgXCJwcmljZVwiOiA3NFxuICAgICAgICB9LFxuICAgICAgICB7XG4gICAgICAgICAgXCJub3RlXCI6IFwiRmVydGlsaXplciBNYXRlcmlhbHNcIixcbiAgICAgICAgICBcImFtb3VudFwiOiAyMSxcbiAgICAgICAgICBcInVuaXRzXCI6IFwidXMkXCIsXG4gICAgICAgICAgXCJuYW1lXCI6IFwiRXN0aW1hdGVcIixcbiAgICAgICAgICBcImlkXCI6IFwiYzhjNGM5YjUtY2RhYi00MTFkLTk2MzYtNTE4Y2YwZWZmMDc4XCIsXG4gICAgICAgICAgXCJlcnJvclwiOiBudWxsLFxuICAgICAgICAgIFwicHJpY2VcIjogMjFcbiAgICAgICAgfVxuICAgICAgXSxcbiAgICAgIFwidW5pdHNcIjogXCJbYWNyX3VzXVwiLFxuICAgICAgXCJzY2hlZHVsZVwiOiBbXG4gICAgICAgIHtcbiAgICAgICAgICBcImRhdGVcIjogXCIyMDE4LTAxLTAxXCIsXG4gICAgICAgICAgXCJsZW5ndGhcIjogXCI5XCIsXG4gICAgICAgICAgXCJ1bml0c1wiOiBcIm1vbnRoXCJcbiAgICAgICAgfVxuICAgICAgXSxcbiAgICAgIFwic3VidG90YWxcIjogOTUsXG4gICAgICBcInRvdGFsXCI6IDk1XG4gICAgfVxuICBdLFxuICBcImZhcm1cIjoge1xuICAgIFwidW5pdFwiOiBcIlthY3JfdXNdXCIsXG4gICAgXCJzaXplXCI6IFwiMVwiLFxuICAgIFwiY29tbW9kaXR5XCI6IFwiQUxGQUxGQVwiLFxuICAgIFwibG9jYXRpb25cIjogXCIwNjExM1wiLFxuICAgIFwiZmFybVwiOiBcIm5vcnRoZXJuX2NhXCJcbiAgfVxufVxuIiwibW9kdWxlLmV4cG9ydHM9e1xuICBcImNsYXNzZXNcIjoge1xuICAgIFwiZmVydGlsaXplclwiOiBbXG4gICAgICBcIjIsNC1EXCJcbiAgICBdLFxuICAgIFwiZXF1aXBtZW50XCI6IFtcbiAgICAgIFwiQ2hhbGxlbmdlciBUcmFjdG9yXCIsXG4gICAgICBcIkNvb2xlci92YW5cIixcbiAgICAgIFwiRlIgNjA4MCBGSFwiLFxuICAgICAgXCJMYXJnZSBUcmFjdG9yXCIsXG4gICAgICBcIk1pZC1zaXplIFRyYWN0b3JcIixcbiAgICAgIFwiU2VtaS1UcmFjdG9yIHRyYWlsZXJcIixcbiAgICAgIFwiU21hbGwgVHJhY3RvclwiLFxuICAgICAgXCJTdXBwb3J0IFRydWNrXCIsXG4gICAgICBcIlRhbmRlbSBBeGxlIFRydWNrXCIsXG4gICAgICBcIlRyYWN0b3IgYW5kIHNwcmF5ZXJcIlxuICAgIF0sXG4gICAgXCJwZXN0aWNpZGVcIjogW1xuICAgICAgXCJHbHlwaG9zYXRlXCIsXG4gICAgICBcIkdvYWwgMlhMXCIsXG4gICAgICBcIlRyaWZsdXJhbGluXCJcbiAgICBdLFxuICAgIFwiaGVyYmljaWRlXCI6IFtcbiAgICAgIFwiaGVyYmljaWRlIC0gbWFudWFsXCJcbiAgICBdLFxuICAgIFwibGFib3JcIjogW1xuICAgICAgXCJob2VpbmdcIixcbiAgICAgIFwiTGFib3JlclwiXG4gICAgXSxcbiAgICBcInNlZWRcIjogW1xuICAgICAgXCJQb3BsYXIgQ3V0dGluZ1wiXG4gICAgXVxuICB9LFxuICBcIm1hdGVyaWFsc1wiOiBbXG4gICAge1xuICAgICAgXCJuYW1lXCI6IFwiRXN0aW1hdGVcIixcbiAgICAgIFwicHJpY2VcIjogMSxcbiAgICAgIFwidW5pdHNcIjogXCJ1cyRcIixcbiAgICAgIFwiZml4ZWRcIjogdHJ1ZSxcbiAgICAgIFwiZGVzY3JpcHRpb25cIjogXCJQcm92aWRlIGZpeGVkIGNvc3QgZm9yIGNvbXBsZXggbWF0ZXJpYWxcIixcbiAgICAgIFwidHlwZVwiOiBcInNpbXBsZVwiXG4gICAgfSxcbiAgICB7XG4gICAgICBcIm5hbWVcIjogXCJUYXhlc1wiLFxuICAgICAgXCJwcmljZVwiOiAxLFxuICAgICAgXCJ1bml0c1wiOiBcInVzJFwiLFxuICAgICAgXCJmaXhlZFwiOiB0cnVlLFxuICAgICAgXCJkZXNjcmlwdGlvblwiOiBcIlByb3ZpZGUgZml4ZWQgY29zdCBmb3IgY29tcGxleCBtYXRlcmlhbFwiLFxuICAgICAgXCJ0eXBlXCI6IFwic2ltcGxlXCJcbiAgICB9LFxuICAgIHtcbiAgICAgIFwibmFtZVwiOiBcIkluc3VyYW5jZVwiLFxuICAgICAgXCJwcmljZVwiOiAxLFxuICAgICAgXCJ1bml0c1wiOiBcInVzJFwiLFxuICAgICAgXCJmaXhlZFwiOiB0cnVlLFxuICAgICAgXCJkZXNjcmlwdGlvblwiOiBcIlByb3ZpZGUgZml4ZWQgY29zdCBmb3IgY29tcGxleCBtYXRlcmlhbFwiLFxuICAgICAgXCJ0eXBlXCI6IFwic2ltcGxlXCJcbiAgICB9LFxuICAgIHtcbiAgICAgIFwibmFtZVwiOiBcIkNhcGl0b2wgQ29zdCBSZWNvdmVyXCIsXG4gICAgICBcInByaWNlXCI6IDEsXG4gICAgICBcInVuaXRzXCI6IFwidXMkXCIsXG4gICAgICBcImZpeGVkXCI6IHRydWUsXG4gICAgICBcImRlc2NyaXB0aW9uXCI6IFwiUHJvdmlkZSBmaXhlZCBjb3N0IGZvciBjb21wbGV4IG1hdGVyaWFsXCIsXG4gICAgICBcInR5cGVcIjogXCJzaW1wbGVcIlxuICAgIH0sXG4gICAge1xuICAgICAgXCJuYW1lXCI6IFwiTHViZSAmIFJlcGFpcnNcIixcbiAgICAgIFwiY2xhc3NcIjogXCJFcXVpcG1lbnRcIixcbiAgICAgIFwicHJpY2VcIjogMSxcbiAgICAgIFwidW5pdHNcIjogXCJ1cyRcIixcbiAgICAgIFwiZml4ZWRcIjogdHJ1ZSxcbiAgICAgIFwiZGVzY3JpcHRpb25cIjogXCJBZGRpdGlvbmFsIEVxdWlwbWVudCBDb3N0c1wiLFxuICAgICAgXCJ0eXBlXCI6IFwic2ltcGxlXCJcbiAgICB9LFxuICAgIHtcbiAgICAgIFwiY2xhc3NcIjogXCJmZXJ0aWxpemVyXCIsXG4gICAgICBcIm5hbWVcIjogXCIyLDQtRFwiLFxuICAgICAgXCJ1bml0c1wiOiBcInVzJC9bcXRfdXNdXCIsXG4gICAgICBcInByaWNlXCI6IDUsXG4gICAgICBcInR5cGVcIjogXCJzaW1wbGVcIlxuICAgIH0sXG4gICAge1xuICAgICAgXCJjbGFzc1wiOiBcInBlc3RpY2lkZVwiLFxuICAgICAgXCJuYW1lXCI6IFwiR2x5cGhvc2F0ZVwiLFxuICAgICAgXCJ1bml0c1wiOiBcInVzJC9bcXRfdXNdXCIsXG4gICAgICBcInByaWNlXCI6IDQsXG4gICAgICBcInR5cGVcIjogXCJzaW1wbGVcIlxuICAgIH0sXG4gICAge1xuICAgICAgXCJjbGFzc1wiOiBcInBlc3RpY2lkZVwiLFxuICAgICAgXCJuYW1lXCI6IFwiR29hbCAyWExcIixcbiAgICAgIFwidW5pdHNcIjogXCJ1cyQvW3F0X3VzXVwiLFxuICAgICAgXCJwcmljZVwiOiAzMCxcbiAgICAgIFwidHlwZVwiOiBcInNpbXBsZVwiXG4gICAgfSxcbiAgICB7XG4gICAgICBcImNsYXNzXCI6IFwibGFib3JcIixcbiAgICAgIFwibmFtZVwiOiBcIkxhYm9yZXJcIixcbiAgICAgIFwidW5pdHNcIjogXCJ1cyQvaFwiLFxuICAgICAgXCJwcmljZVwiOiAxNyxcbiAgICAgIFwidHlwZVwiOiBcInNpbXBsZVwiXG4gICAgfSxcbiAgICB7XG4gICAgICBcImRlc2NyaXB0aW9uXCI6IFwiUG9wbGFyIGN1dHRpbmcgZm9yIHBsYW50aW5nXCIsXG4gICAgICBcImNsYXNzXCI6IFwic2VlZFwiLFxuICAgICAgXCJuYW1lXCI6IFwiUG9wbGFyIEN1dHRpbmdcIixcbiAgICAgIFwidW5pdHNcIjogXCJ1cyQvMVwiLFxuICAgICAgXCJwcmljZVwiOiAwLjA4LFxuICAgICAgXCJ0eXBlXCI6IFwic2ltcGxlXCJcbiAgICB9LFxuICAgIHtcbiAgICAgIFwiY2xhc3NcIjogXCJwZXN0aWNpZGVcIixcbiAgICAgIFwibmFtZVwiOiBcIlRyaWZsdXJhbGluXCIsXG4gICAgICBcInVuaXRzXCI6IFwidXMkL1txdF91c11cIixcbiAgICAgIFwicHJpY2VcIjogNy41LFxuICAgICAgXCJ0eXBlXCI6IFwic2ltcGxlXCJcbiAgICB9LFxuICAgIHtcbiAgICAgIFwibmFtZVwiOiBcIkNoYWxsZW5nZXIgVHJhY3Rvci0tTGFib3JcIixcbiAgICAgIFwicHJpY2VcIjogMzUsXG4gICAgICBcInVuaXRzXCI6IFwidXMkL2hcIixcbiAgICAgIFwidHlwZVwiOiBcInNpbXBsZVwiXG4gICAgfSxcbiAgICB7XG4gICAgICBcIm5hbWVcIjogXCJFcXVpcG1lbnQgRnVlbFwiLFxuICAgICAgXCJwcmljZVwiOiAyLjgxLFxuICAgICAgXCJ1bml0c1wiOiBcInVzJC9bZ2FsX3VzXVwiLFxuICAgICAgXCJ0eXBlXCI6IFwic2ltcGxlXCJcbiAgICB9LFxuICAgIHtcbiAgICAgIFwiY2xhc3NcIjogXCJsYWJvclwiLFxuICAgICAgXCJuYW1lXCI6IFwiVHJhY3RvciBhbmQgc3ByYXllci0tbGFib3JcIixcbiAgICAgIFwidW5pdHNcIjogXCJ1cyQvaFwiLFxuICAgICAgXCJwcmljZVwiOiAzMCxcbiAgICAgIFwidHlwZVwiOiBcInNpbXBsZVwiXG4gICAgfSxcbiAgICB7XG4gICAgICBcImNsYXNzXCI6IFwibGFib3JcIixcbiAgICAgIFwibmFtZVwiOiBcIkZSIDYwODAgRkgtLUxhYm9yXCIsXG4gICAgICBcInVuaXRzXCI6IFwidXMkL2hcIixcbiAgICAgIFwicHJpY2VcIjogMzAsXG4gICAgICBcInR5cGVcIjogXCJzaW1wbGVcIlxuICAgIH0sXG4gICAge1xuICAgICAgXCJjbGFzc1wiOiBcImxhYm9yXCIsXG4gICAgICBcIm5hbWVcIjogXCJNaWQtc2l6ZSBUcmFjdG9yLS1MYWJvclwiLFxuICAgICAgXCJ1bml0c1wiOiBcInVzJC9oXCIsXG4gICAgICBcInByaWNlXCI6IDIyLFxuICAgICAgXCJ0eXBlXCI6IFwic2ltcGxlXCJcbiAgICB9LFxuICAgIHtcbiAgICAgIFwiY2xhc3NcIjogXCJsYWJvclwiLFxuICAgICAgXCJuYW1lXCI6IFwiU2VtaS1UcmFjdG9yIHRyYWlsZXItLUxhYm9yXCIsXG4gICAgICBcInVuaXRzXCI6IFwidXMkL2hcIixcbiAgICAgIFwicHJpY2VcIjogMjgsXG4gICAgICBcInR5cGVcIjogXCJzaW1wbGVcIlxuICAgIH0sXG4gICAge1xuICAgICAgXCJjbGFzc1wiOiBcImxhYm9yXCIsXG4gICAgICBcIm5hbWVcIjogXCJTbWFsbCBUcmFjdG9yLS1MYWJvclwiLFxuICAgICAgXCJ1bml0c1wiOiBcInVzJC9oXCIsXG4gICAgICBcInByaWNlXCI6IDIyLFxuICAgICAgXCJ0eXBlXCI6IFwic2ltcGxlXCJcbiAgICB9LFxuICAgIHtcbiAgICAgIFwibmFtZVwiOiBcIlN1cHBvcnQgVHJ1Y2stLUxhYm9yXCIsXG4gICAgICBcInByaWNlXCI6IDMwLFxuICAgICAgXCJ1bml0c1wiOiBcInVzJC9oXCIsXG4gICAgICBcInR5cGVcIjogXCJzaW1wbGVcIlxuICAgIH0sXG4gICAge1xuICAgICAgXCJjbGFzc1wiOiBcImxhYm9yXCIsXG4gICAgICBcIm5hbWVcIjogXCJUYW5kZW0gQXhsZSBUcnVjay0tTGFib3JcIixcbiAgICAgIFwidW5pdHNcIjogXCJ1cyQvaFwiLFxuICAgICAgXCJwcmljZVwiOiAyNixcbiAgICAgIFwidHlwZVwiOiBcInNpbXBsZVwiXG4gICAgfSxcbiAgICB7XG4gICAgICBcImNsYXNzXCI6IFwibGFib3JcIixcbiAgICAgIFwibmFtZVwiOiBcIjMtV2hlZWwgQWcgU3ByYXllci0tTGFib3JcIixcbiAgICAgIFwidW5pdHNcIjogXCJ1cyQvaFwiLFxuICAgICAgXCJwcmljZVwiOiAzMCxcbiAgICAgIFwidHlwZVwiOiBcInNpbXBsZVwiXG4gICAgfSxcbiAgICB7XG4gICAgICBcImNsYXNzXCI6IFwibGFib3JcIixcbiAgICAgIFwibmFtZVwiOiBcIkxhcmdlIFRyYWN0b3ItLUxhYm9yXCIsXG4gICAgICBcInVuaXRzXCI6IFwidXMkL2hcIixcbiAgICAgIFwicHJpY2VcIjogMzUsXG4gICAgICBcInR5cGVcIjogXCJzaW1wbGVcIlxuICAgIH0sXG4gICAge1xuICAgICAgXCJjbGFzc1wiOiBcImVxdWlwbWVudFwiLFxuICAgICAgXCJuYW1lXCI6IFwiQ2hhbGxlbmdlciBUcmFjdG9yXCIsXG4gICAgICBcInVuaXRzXCI6IFwiaFwiLFxuICAgICAgXCJ0eXBlXCI6IFwiY29tcGxleFwiLFxuICAgICAgXCJtYXRlcmlhbHNcIjoge1xuICAgICAgICBcIkVxdWlwbWVudCBGdWVsXCI6IHtcbiAgICAgICAgICBcImFtb3VudFwiOiAxOS4zNixcbiAgICAgICAgICBcIm9yaWdpbmFsQW1vdW50XCI6IDE5LjM2LFxuICAgICAgICAgIFwidW5pdHNcIjogXCJbZ2FsX3VzXVwiLFxuICAgICAgICAgIFwiZXJyb3JcIjogbnVsbCxcbiAgICAgICAgICBcInByaWNlXCI6IDU0LjQwMTZcbiAgICAgICAgfSxcbiAgICAgICAgXCJDaGFsbGVuZ2VyIFRyYWN0b3ItLUxhYm9yXCI6IHtcbiAgICAgICAgICBcImFtb3VudFwiOiAxLFxuICAgICAgICAgIFwib3JpZ2luYWxBbW91bnRcIjogMSxcbiAgICAgICAgICBcInVuaXRzXCI6IFwiaFwiLFxuICAgICAgICAgIFwiZXJyb3JcIjogbnVsbCxcbiAgICAgICAgICBcInByaWNlXCI6IDM1XG4gICAgICAgIH0sXG4gICAgICAgIFwiTHViZSAmIFJlcGFpcnNcIjoge1xuICAgICAgICAgIFwibmFtZVwiOiBcIkx1YmUgJiBSZXBhaXJzXCIsXG4gICAgICAgICAgXCJhbW91bnRcIjogOTAsXG4gICAgICAgICAgXCJ1bml0c1wiOiBcInVzJFwiLFxuICAgICAgICAgIFwiZXJyb3JcIjogbnVsbCxcbiAgICAgICAgICBcInByaWNlXCI6IDkwLFxuICAgICAgICAgIFwib3JpZ2luYWxBbW91bnRcIjogOTBcbiAgICAgICAgfVxuICAgICAgfSxcbiAgICAgIFwicHJpY2VcIjogMTc5LjQwMTZcbiAgICB9LFxuICAgIHtcbiAgICAgIFwiY2xhc3NcIjogXCJlcXVpcG1lbnRcIixcbiAgICAgIFwibmFtZVwiOiBcIkNvb2xlci92YW5cIixcbiAgICAgIFwidW5pdHNcIjogXCJoXCIsXG4gICAgICBcInR5cGVcIjogXCJjb21wbGV4XCIsXG4gICAgICBcIm1hdGVyaWFsc1wiOiB7XG4gICAgICAgIFwiRXF1aXBtZW50IEZ1ZWxcIjoge1xuICAgICAgICAgIFwiYW1vdW50XCI6IDAuOTYsXG4gICAgICAgICAgXCJvcmlnaW5hbEFtb3VudFwiOiAwLjk2LFxuICAgICAgICAgIFwidW5pdHNcIjogXCJbZ2FsX3VzXVwiLFxuICAgICAgICAgIFwiZXJyb3JcIjogbnVsbCxcbiAgICAgICAgICBcInByaWNlXCI6IDIuNjk3NlxuICAgICAgICB9LFxuICAgICAgICBcIkx1YmUgJiBSZXBhaXJzXCI6IHtcbiAgICAgICAgICBcIm5hbWVcIjogXCJMdWJlICYgUmVwYWlyc1wiLFxuICAgICAgICAgIFwiYW1vdW50XCI6IDEuMixcbiAgICAgICAgICBcInVuaXRzXCI6IFwidXMkXCIsXG4gICAgICAgICAgXCJlcnJvclwiOiBudWxsLFxuICAgICAgICAgIFwicHJpY2VcIjogMS4yLFxuICAgICAgICAgIFwib3JpZ2luYWxBbW91bnRcIjogMS4yXG4gICAgICAgIH0sXG4gICAgICAgIFwiRXN0aW1hdGVcIjoge1xuICAgICAgICAgIFwibmFtZVwiOiBcIkVzdGltYXRlXCIsXG4gICAgICAgICAgXCJhbW91bnRcIjogMC43MSxcbiAgICAgICAgICBcInVuaXRzXCI6IFwidXMkXCIsXG4gICAgICAgICAgXCJlcnJvclwiOiBudWxsLFxuICAgICAgICAgIFwicHJpY2VcIjogMC43MSxcbiAgICAgICAgICBcIm9yaWdpbmFsQW1vdW50XCI6IDAuNzFcbiAgICAgICAgfVxuICAgICAgfSxcbiAgICAgIFwicHJpY2VcIjogNC42MDc2XG4gICAgfSxcbiAgICB7XG4gICAgICBcImNsYXNzXCI6IFwiZXF1aXBtZW50XCIsXG4gICAgICBcIm5hbWVcIjogXCJGUiA2MDgwIEZIXCIsXG4gICAgICBcInVuaXRzXCI6IFwiaFwiLFxuICAgICAgXCJ0eXBlXCI6IFwiY29tcGxleFwiLFxuICAgICAgXCJtYXRlcmlhbHNcIjoge1xuICAgICAgICBcIkVxdWlwbWVudCBGdWVsXCI6IHtcbiAgICAgICAgICBcImFtb3VudFwiOiAxMy4yLFxuICAgICAgICAgIFwib3JpZ2luYWxBbW91bnRcIjogMTMuMixcbiAgICAgICAgICBcInVuaXRzXCI6IFwiW2dhbF91c11cIixcbiAgICAgICAgICBcImVycm9yXCI6IG51bGwsXG4gICAgICAgICAgXCJwcmljZVwiOiAzNy4wOTJcbiAgICAgICAgfSxcbiAgICAgICAgXCJGUiA2MDgwIEZILS1MYWJvclwiOiB7XG4gICAgICAgICAgXCJuYW1lXCI6IFwiRlIgNjA4MCBGSC0tTGFib3JcIixcbiAgICAgICAgICBcImFtb3VudFwiOiAxLFxuICAgICAgICAgIFwidW5pdHNcIjogXCJoXCIsXG4gICAgICAgICAgXCJlcnJvclwiOiBudWxsLFxuICAgICAgICAgIFwicHJpY2VcIjogMzBcbiAgICAgICAgfSxcbiAgICAgICAgXCJMdWJlICYgUmVwYWlyc1wiOiB7XG4gICAgICAgICAgXCJuYW1lXCI6IFwiTHViZSAmIFJlcGFpcnNcIixcbiAgICAgICAgICBcImFtb3VudFwiOiAxODAsXG4gICAgICAgICAgXCJ1bml0c1wiOiBcInVzJFwiLFxuICAgICAgICAgIFwiZXJyb3JcIjogbnVsbCxcbiAgICAgICAgICBcInByaWNlXCI6IDE4MCxcbiAgICAgICAgICBcIm9yaWdpbmFsQW1vdW50XCI6IDE4MFxuICAgICAgICB9XG4gICAgICB9LFxuICAgICAgXCJwcmljZVwiOiAyNDcuMDkxOTk5OTk5OTk5OThcbiAgICB9LFxuICAgIHtcbiAgICAgIFwiZGVzY3JpcHRpb25cIjogXCInTWFudWFsIEFwcGxpY2F0aW9uIG9mIGhlcmJpY2lkZSdcIixcbiAgICAgIFwiY2xhc3NcIjogXCJoZXJiaWNpZGVcIixcbiAgICAgIFwibmFtZVwiOiBcImhlcmJpY2lkZSAtIG1hbnVhbFwiLFxuICAgICAgXCJ1bml0c1wiOiBcIlthY3JfdXNdXCIsXG4gICAgICBcInR5cGVcIjogXCJjb21wbGV4XCIsXG4gICAgICBcIm1hdGVyaWFsc1wiOiB7XG4gICAgICAgIFwiR2x5cGhvc2F0ZVwiOiB7XG4gICAgICAgICAgXCJhbW91bnRcIjogMixcbiAgICAgICAgICBcIm9yaWdpbmFsQW1vdW50XCI6IDIsXG4gICAgICAgICAgXCJ1bml0c1wiOiBcIltxdF91c11cIixcbiAgICAgICAgICBcImVycm9yXCI6IG51bGwsXG4gICAgICAgICAgXCJwcmljZVwiOiA4XG4gICAgICAgIH0sXG4gICAgICAgIFwiTGFib3JlclwiOiB7XG4gICAgICAgICAgXCJhbW91bnRcIjogMC45NixcbiAgICAgICAgICBcIm9yaWdpbmFsQW1vdW50XCI6IDAuOTYsXG4gICAgICAgICAgXCJ1bml0c1wiOiBcImhcIixcbiAgICAgICAgICBcImVycm9yXCI6IG51bGwsXG4gICAgICAgICAgXCJwcmljZVwiOiAxNi4zMlxuICAgICAgICB9XG4gICAgICB9LFxuICAgICAgXCJwcmljZVwiOiAyNC4zMlxuICAgIH0sXG4gICAge1xuICAgICAgXCJjbGFzc1wiOiBcImxhYm9yXCIsXG4gICAgICBcIm5hbWVcIjogXCJob2VpbmdcIixcbiAgICAgIFwidW5pdHNcIjogXCJbYWNyX3VzXVwiLFxuICAgICAgXCJ0eXBlXCI6IFwiY29tcGxleFwiLFxuICAgICAgXCJtYXRlcmlhbHNcIjoge1xuICAgICAgICBcIkxhYm9yZXJcIjoge1xuICAgICAgICAgIFwiYW1vdW50XCI6IDEuOTIsXG4gICAgICAgICAgXCJvcmlnaW5hbEFtb3VudFwiOiAxLjkyLFxuICAgICAgICAgIFwidW5pdHNcIjogXCJoXCIsXG4gICAgICAgICAgXCJlcnJvclwiOiBudWxsLFxuICAgICAgICAgIFwicHJpY2VcIjogMzIuNjRcbiAgICAgICAgfVxuICAgICAgfSxcbiAgICAgIFwicHJpY2VcIjogMzIuNjRcbiAgICB9LFxuICAgIHtcbiAgICAgIFwiY2xhc3NcIjogXCJlcXVpcG1lbnRcIixcbiAgICAgIFwibmFtZVwiOiBcIkxhcmdlIFRyYWN0b3JcIixcbiAgICAgIFwidW5pdHNcIjogXCJoXCIsXG4gICAgICBcInR5cGVcIjogXCJjb21wbGV4XCIsXG4gICAgICBcIm1hdGVyaWFsc1wiOiB7XG4gICAgICAgIFwiRXF1aXBtZW50IEZ1ZWxcIjoge1xuICAgICAgICAgIFwiYW1vdW50XCI6IDEzLjIsXG4gICAgICAgICAgXCJvcmlnaW5hbEFtb3VudFwiOiAxMy4yLFxuICAgICAgICAgIFwidW5pdHNcIjogXCJbZ2FsX3VzXVwiLFxuICAgICAgICAgIFwiZXJyb3JcIjogbnVsbCxcbiAgICAgICAgICBcInByaWNlXCI6IDM3LjA5MlxuICAgICAgICB9LFxuICAgICAgICBcIkxhcmdlIFRyYWN0b3ItLUxhYm9yXCI6IHtcbiAgICAgICAgICBcIm5hbWVcIjogXCJMYXJnZSBUcmFjdG9yLS1MYWJvclwiLFxuICAgICAgICAgIFwiYW1vdW50XCI6IDEsXG4gICAgICAgICAgXCJ1bml0c1wiOiBcImhcIixcbiAgICAgICAgICBcImVycm9yXCI6IG51bGwsXG4gICAgICAgICAgXCJwcmljZVwiOiAzNVxuICAgICAgICB9LFxuICAgICAgICBcIkx1YmUgJiBSZXBhaXJzXCI6IHtcbiAgICAgICAgICBcIm5hbWVcIjogXCJMdWJlICYgUmVwYWlyc1wiLFxuICAgICAgICAgIFwiYW1vdW50XCI6IDcwLFxuICAgICAgICAgIFwidW5pdHNcIjogXCJ1cyRcIixcbiAgICAgICAgICBcImVycm9yXCI6IG51bGwsXG4gICAgICAgICAgXCJwcmljZVwiOiA3MCxcbiAgICAgICAgICBcIm9yaWdpbmFsQW1vdW50XCI6IDcwXG4gICAgICAgIH1cbiAgICAgIH0sXG4gICAgICBcInByaWNlXCI6IDE0Mi4wOTE5OTk5OTk5OTk5OFxuICAgIH0sXG4gICAge1xuICAgICAgXCJjbGFzc1wiOiBcImVxdWlwbWVudFwiLFxuICAgICAgXCJuYW1lXCI6IFwiTWlkLXNpemUgVHJhY3RvclwiLFxuICAgICAgXCJ1bml0c1wiOiBcImhcIixcbiAgICAgIFwidHlwZVwiOiBcImNvbXBsZXhcIixcbiAgICAgIFwibWF0ZXJpYWxzXCI6IHtcbiAgICAgICAgXCJFcXVpcG1lbnQgRnVlbFwiOiB7XG4gICAgICAgICAgXCJhbW91bnRcIjogMy45NixcbiAgICAgICAgICBcIm9yaWdpbmFsQW1vdW50XCI6IDMuOTYsXG4gICAgICAgICAgXCJ1bml0c1wiOiBcIltnYWxfdXNdXCIsXG4gICAgICAgICAgXCJlcnJvclwiOiBudWxsLFxuICAgICAgICAgIFwicHJpY2VcIjogMTEuMTI3NlxuICAgICAgICB9LFxuICAgICAgICBcIk1pZC1zaXplIFRyYWN0b3ItLUxhYm9yXCI6IHtcbiAgICAgICAgICBcIm5hbWVcIjogXCJNaWQtc2l6ZSBUcmFjdG9yLS1MYWJvclwiLFxuICAgICAgICAgIFwiYW1vdW50XCI6IDEsXG4gICAgICAgICAgXCJ1bml0c1wiOiBcImhcIixcbiAgICAgICAgICBcImVycm9yXCI6IG51bGwsXG4gICAgICAgICAgXCJwcmljZVwiOiAyMlxuICAgICAgICB9LFxuICAgICAgICBcIkx1YmUgJiBSZXBhaXJzXCI6IHtcbiAgICAgICAgICBcIm5hbWVcIjogXCJMdWJlICYgUmVwYWlyc1wiLFxuICAgICAgICAgIFwiYW1vdW50XCI6IDQ1LFxuICAgICAgICAgIFwidW5pdHNcIjogXCJ1cyRcIixcbiAgICAgICAgICBcImVycm9yXCI6IG51bGwsXG4gICAgICAgICAgXCJwcmljZVwiOiA0NSxcbiAgICAgICAgICBcIm9yaWdpbmFsQW1vdW50XCI6IDQ1XG4gICAgICAgIH1cbiAgICAgIH0sXG4gICAgICBcInByaWNlXCI6IDc4LjEyNzZcbiAgICB9LFxuICAgIHtcbiAgICAgIFwiY2xhc3NcIjogXCJlcXVpcG1lbnRcIixcbiAgICAgIFwibmFtZVwiOiBcIlNlbWktVHJhY3RvciB0cmFpbGVyXCIsXG4gICAgICBcInVuaXRzXCI6IFwiaFwiLFxuICAgICAgXCJ0eXBlXCI6IFwiY29tcGxleFwiLFxuICAgICAgXCJtYXRlcmlhbHNcIjoge1xuICAgICAgICBcIkVxdWlwbWVudCBGdWVsXCI6IHtcbiAgICAgICAgICBcImFtb3VudFwiOiA2LjUsXG4gICAgICAgICAgXCJvcmlnaW5hbEFtb3VudFwiOiA2LjUsXG4gICAgICAgICAgXCJ1bml0c1wiOiBcIltnYWxfdXNdXCIsXG4gICAgICAgICAgXCJlcnJvclwiOiBudWxsLFxuICAgICAgICAgIFwicHJpY2VcIjogMTguMjY1XG4gICAgICAgIH0sXG4gICAgICAgIFwiU2VtaS1UcmFjdG9yIHRyYWlsZXItLUxhYm9yXCI6IHtcbiAgICAgICAgICBcIm5hbWVcIjogXCJTZW1pLVRyYWN0b3IgdHJhaWxlci0tTGFib3JcIixcbiAgICAgICAgICBcImFtb3VudFwiOiAxLFxuICAgICAgICAgIFwidW5pdHNcIjogXCJoXCIsXG4gICAgICAgICAgXCJlcnJvclwiOiBudWxsLFxuICAgICAgICAgIFwicHJpY2VcIjogMjhcbiAgICAgICAgfSxcbiAgICAgICAgXCJMdWJlICYgUmVwYWlyc1wiOiB7XG4gICAgICAgICAgXCJuYW1lXCI6IFwiTHViZSAmIFJlcGFpcnNcIixcbiAgICAgICAgICBcImFtb3VudFwiOiA1NSxcbiAgICAgICAgICBcInVuaXRzXCI6IFwidXMkXCIsXG4gICAgICAgICAgXCJlcnJvclwiOiBudWxsLFxuICAgICAgICAgIFwicHJpY2VcIjogNTUsXG4gICAgICAgICAgXCJvcmlnaW5hbEFtb3VudFwiOiA1NVxuICAgICAgICB9XG4gICAgICB9LFxuICAgICAgXCJwcmljZVwiOiAxMDEuMjY1XG4gICAgfSxcbiAgICB7XG4gICAgICBcImNsYXNzXCI6IFwiZXF1aXBtZW50XCIsXG4gICAgICBcIm5hbWVcIjogXCJTbWFsbCBUcmFjdG9yXCIsXG4gICAgICBcInVuaXRzXCI6IFwiaFwiLFxuICAgICAgXCJ0eXBlXCI6IFwiY29tcGxleFwiLFxuICAgICAgXCJtYXRlcmlhbHNcIjoge1xuICAgICAgICBcIkVxdWlwbWVudCBGdWVsXCI6IHtcbiAgICAgICAgICBcImFtb3VudFwiOiAxLjk4LFxuICAgICAgICAgIFwib3JpZ2luYWxBbW91bnRcIjogMS45OCxcbiAgICAgICAgICBcInVuaXRzXCI6IFwiW2dhbF91c11cIixcbiAgICAgICAgICBcImVycm9yXCI6IG51bGwsXG4gICAgICAgICAgXCJwcmljZVwiOiA1LjU2MzhcbiAgICAgICAgfSxcbiAgICAgICAgXCJTbWFsbCBUcmFjdG9yLS1MYWJvclwiOiB7XG4gICAgICAgICAgXCJuYW1lXCI6IFwiU21hbGwgVHJhY3Rvci0tTGFib3JcIixcbiAgICAgICAgICBcImFtb3VudFwiOiAxLFxuICAgICAgICAgIFwidW5pdHNcIjogXCJoXCIsXG4gICAgICAgICAgXCJlcnJvclwiOiBudWxsLFxuICAgICAgICAgIFwicHJpY2VcIjogMjJcbiAgICAgICAgfSxcbiAgICAgICAgXCJMdWJlICYgUmVwYWlyc1wiOiB7XG4gICAgICAgICAgXCJuYW1lXCI6IFwiTHViZSAmIFJlcGFpcnNcIixcbiAgICAgICAgICBcImFtb3VudFwiOiAzMCxcbiAgICAgICAgICBcInVuaXRzXCI6IFwidXMkXCIsXG4gICAgICAgICAgXCJlcnJvclwiOiBudWxsLFxuICAgICAgICAgIFwicHJpY2VcIjogMzAsXG4gICAgICAgICAgXCJvcmlnaW5hbEFtb3VudFwiOiAzMFxuICAgICAgICB9XG4gICAgICB9LFxuICAgICAgXCJwcmljZVwiOiA1Ny41NjM4XG4gICAgfSxcbiAgICB7XG4gICAgICBcImNsYXNzXCI6IFwiZXF1aXBtZW50XCIsXG4gICAgICBcIm5hbWVcIjogXCJTdXBwb3J0IFRydWNrXCIsXG4gICAgICBcInVuaXRzXCI6IFwiaFwiLFxuICAgICAgXCJ0eXBlXCI6IFwiY29tcGxleFwiLFxuICAgICAgXCJtYXRlcmlhbHNcIjoge1xuICAgICAgICBcIlN1cHBvcnQgVHJ1Y2stLUxhYm9yXCI6IHtcbiAgICAgICAgICBcImFtb3VudFwiOiAxLFxuICAgICAgICAgIFwib3JpZ2luYWxBbW91bnRcIjogMSxcbiAgICAgICAgICBcInVuaXRzXCI6IFwiaFwiLFxuICAgICAgICAgIFwiZXJyb3JcIjogbnVsbCxcbiAgICAgICAgICBcInByaWNlXCI6IDMwXG4gICAgICAgIH0sXG4gICAgICAgIFwiRXF1aXBtZW50IEZ1ZWxcIjoge1xuICAgICAgICAgIFwiYW1vdW50XCI6IDEuNzYsXG4gICAgICAgICAgXCJvcmlnaW5hbEFtb3VudFwiOiAxLjc2LFxuICAgICAgICAgIFwidW5pdHNcIjogXCJbZ2FsX3VzXVwiLFxuICAgICAgICAgIFwiZXJyb3JcIjogbnVsbCxcbiAgICAgICAgICBcInByaWNlXCI6IDQuOTQ1NlxuICAgICAgICB9LFxuICAgICAgICBcIkx1YmUgJiBSZXBhaXJzXCI6IHtcbiAgICAgICAgICBcIm5hbWVcIjogXCJMdWJlICYgUmVwYWlyc1wiLFxuICAgICAgICAgIFwiYW1vdW50XCI6IDI1LFxuICAgICAgICAgIFwidW5pdHNcIjogXCJ1cyRcIixcbiAgICAgICAgICBcImVycm9yXCI6IG51bGwsXG4gICAgICAgICAgXCJwcmljZVwiOiAyNSxcbiAgICAgICAgICBcIm9yaWdpbmFsQW1vdW50XCI6IDI1XG4gICAgICAgIH1cbiAgICAgIH0sXG4gICAgICBcInByaWNlXCI6IDU5Ljk0NTZcbiAgICB9LFxuICAgIHtcbiAgICAgIFwiY2xhc3NcIjogXCJlcXVpcG1lbnRcIixcbiAgICAgIFwibmFtZVwiOiBcIlRhbmRlbSBBeGxlIFRydWNrXCIsXG4gICAgICBcInVuaXRzXCI6IFwiaFwiLFxuICAgICAgXCJ0eXBlXCI6IFwiY29tcGxleFwiLFxuICAgICAgXCJtYXRlcmlhbHNcIjoge1xuICAgICAgICBcIkVxdWlwbWVudCBGdWVsXCI6IHtcbiAgICAgICAgICBcImFtb3VudFwiOiAxMy4yLFxuICAgICAgICAgIFwib3JpZ2luYWxBbW91bnRcIjogMTMuMixcbiAgICAgICAgICBcInVuaXRzXCI6IFwiW2dhbF91c11cIixcbiAgICAgICAgICBcImVycm9yXCI6IG51bGwsXG4gICAgICAgICAgXCJwcmljZVwiOiAzNy4wOTJcbiAgICAgICAgfSxcbiAgICAgICAgXCJUYW5kZW0gQXhsZSBUcnVjay0tTGFib3JcIjoge1xuICAgICAgICAgIFwibmFtZVwiOiBcIlRhbmRlbSBBeGxlIFRydWNrLS1MYWJvclwiLFxuICAgICAgICAgIFwiYW1vdW50XCI6IDQsXG4gICAgICAgICAgXCJ1bml0c1wiOiBcImhcIixcbiAgICAgICAgICBcImVycm9yXCI6IG51bGwsXG4gICAgICAgICAgXCJwcmljZVwiOiAxMDQsXG4gICAgICAgICAgXCJvcmlnaW5hbEFtb3VudFwiOiA0XG4gICAgICAgIH0sXG4gICAgICAgIFwiTHViZSAmIFJlcGFpcnNcIjoge1xuICAgICAgICAgIFwibmFtZVwiOiBcIkx1YmUgJiBSZXBhaXJzXCIsXG4gICAgICAgICAgXCJhbW91bnRcIjogMTAwLFxuICAgICAgICAgIFwidW5pdHNcIjogXCJ1cyRcIixcbiAgICAgICAgICBcImVycm9yXCI6IG51bGwsXG4gICAgICAgICAgXCJwcmljZVwiOiAxMDAsXG4gICAgICAgICAgXCJvcmlnaW5hbEFtb3VudFwiOiAxMDBcbiAgICAgICAgfVxuICAgICAgfSxcbiAgICAgIFwicHJpY2VcIjogMjQxLjA5MTk5OTk5OTk5OTk4XG4gICAgfSxcbiAgICB7XG4gICAgICBcImNsYXNzXCI6IFwiZXF1aXBtZW50XCIsXG4gICAgICBcIm5hbWVcIjogXCJUcmFjdG9yIGFuZCBzcHJheWVyXCIsXG4gICAgICBcInVuaXRzXCI6IFwiaFwiLFxuICAgICAgXCJ0eXBlXCI6IFwiY29tcGxleFwiLFxuICAgICAgXCJtYXRlcmlhbHNcIjoge1xuICAgICAgICBcIkVxdWlwbWVudCBGdWVsXCI6IHtcbiAgICAgICAgICBcImFtb3VudFwiOiAzLjk2LFxuICAgICAgICAgIFwib3JpZ2luYWxBbW91bnRcIjogMy45NixcbiAgICAgICAgICBcInVuaXRzXCI6IFwiW2dhbF91c11cIixcbiAgICAgICAgICBcImVycm9yXCI6IG51bGwsXG4gICAgICAgICAgXCJwcmljZVwiOiAxMS4xMjc2XG4gICAgICAgIH0sXG4gICAgICAgIFwiVHJhY3RvciBhbmQgc3ByYXllci0tbGFib3JcIjoge1xuICAgICAgICAgIFwibmFtZVwiOiBcIlRyYWN0b3IgYW5kIHNwcmF5ZXItLWxhYm9yXCIsXG4gICAgICAgICAgXCJhbW91bnRcIjogMSxcbiAgICAgICAgICBcInVuaXRzXCI6IFwiaFwiLFxuICAgICAgICAgIFwiZXJyb3JcIjogbnVsbCxcbiAgICAgICAgICBcInByaWNlXCI6IDMwXG4gICAgICAgIH0sXG4gICAgICAgIFwiTHViZSAmIFJlcGFpcnNcIjoge1xuICAgICAgICAgIFwibmFtZVwiOiBcIkx1YmUgJiBSZXBhaXJzXCIsXG4gICAgICAgICAgXCJhbW91bnRcIjogNTAsXG4gICAgICAgICAgXCJ1bml0c1wiOiBcInVzJFwiLFxuICAgICAgICAgIFwiZXJyb3JcIjogbnVsbCxcbiAgICAgICAgICBcInByaWNlXCI6IDUwLFxuICAgICAgICAgIFwib3JpZ2luYWxBbW91bnRcIjogNTBcbiAgICAgICAgfVxuICAgICAgfSxcbiAgICAgIFwicHJpY2VcIjogOTEuMTI3NlxuICAgIH0sXG4gICAge1xuICAgICAgXCJ0eXBlXCI6IFwiY29tcGxleFwiLFxuICAgICAgXCJuYW1lXCI6IFwiMy1XaGVlbCBBZyBTcHJheWVyXCIsXG4gICAgICBcInVuaXRzXCI6IFwiaFwiLFxuICAgICAgXCJkZXNjcmlwdGlvblwiOiBcIlwiLFxuICAgICAgXCJwcmljZVwiOiA5MS4xMjc2LFxuICAgICAgXCJtYXRlcmlhbHNcIjoge1xuICAgICAgICBcIjMtV2hlZWwgQWcgU3ByYXllci0tTGFib3JcIjoge1xuICAgICAgICAgIFwibmFtZVwiOiBcIjMtV2hlZWwgQWcgU3ByYXllci0tTGFib3JcIixcbiAgICAgICAgICBcImFtb3VudFwiOiAxLFxuICAgICAgICAgIFwidW5pdHNcIjogXCJoXCIsXG4gICAgICAgICAgXCJlcnJvclwiOiBudWxsLFxuICAgICAgICAgIFwicHJpY2VcIjogMzBcbiAgICAgICAgfSxcbiAgICAgICAgXCJFcXVpcG1lbnQgRnVlbFwiOiB7XG4gICAgICAgICAgXCJuYW1lXCI6IFwiRXF1aXBtZW50IEZ1ZWxcIixcbiAgICAgICAgICBcImFtb3VudFwiOiAzLjk2LFxuICAgICAgICAgIFwidW5pdHNcIjogXCJbZ2FsX3VzXVwiLFxuICAgICAgICAgIFwiZXJyb3JcIjogbnVsbCxcbiAgICAgICAgICBcInByaWNlXCI6IDExLjEyNzYsXG4gICAgICAgICAgXCJvcmlnaW5hbEFtb3VudFwiOiAzLjk2XG4gICAgICAgIH0sXG4gICAgICAgIFwiTHViZSAmIFJlcGFpcnNcIjoge1xuICAgICAgICAgIFwibmFtZVwiOiBcIkx1YmUgJiBSZXBhaXJzXCIsXG4gICAgICAgICAgXCJhbW91bnRcIjogNTAsXG4gICAgICAgICAgXCJ1bml0c1wiOiBcInVzJFwiLFxuICAgICAgICAgIFwiZXJyb3JcIjogbnVsbCxcbiAgICAgICAgICBcInByaWNlXCI6IDUwLFxuICAgICAgICAgIFwib3JpZ2luYWxBbW91bnRcIjogNTBcbiAgICAgICAgfVxuICAgICAgfVxuICAgIH1cbiAgXSxcbiAgXCJvcGVyYXRpb25zXCI6IFtcbiAgICB7XG4gICAgICBcIm5hbWVcIjogXCJzaXRlIHByZXBcIixcbiAgICAgIFwibWF0ZXJpYWxzXCI6IFtcbiAgICAgICAge1xuICAgICAgICAgIFwibm90ZVwiOiBcIkluaXRpYWwgU3ByYXlpbmdcIixcbiAgICAgICAgICBcImFtb3VudFwiOiAzLFxuICAgICAgICAgIFwidW5pdHNcIjogXCJoXCIsXG4gICAgICAgICAgXCJuYW1lXCI6IFwiVHJhY3RvciBhbmQgc3ByYXllclwiLFxuICAgICAgICAgIFwiaWRcIjogXCIxNjcxMmFmZS1mOWZiLTQ2Y2ItYWJhOC04MDVkODYwNmZlNjRcIixcbiAgICAgICAgICBcImVycm9yXCI6IG51bGwsXG4gICAgICAgICAgXCJwcmljZVwiOiAyNzMuMzgyOFxuICAgICAgICB9LFxuICAgICAgICB7XG4gICAgICAgICAgXCJub3RlXCI6IFwiSW5pdGlhbCBTcHJheWluZ1wiLFxuICAgICAgICAgIFwiYW1vdW50XCI6IDEwMCxcbiAgICAgICAgICBcInVuaXRzXCI6IFwiW3F0X3VzXVwiLFxuICAgICAgICAgIFwibmFtZVwiOiBcIkdseXBob3NhdGVcIixcbiAgICAgICAgICBcImlkXCI6IFwiNDA2Y2RkZjItZWU2OS00ZWU0LWFlOGYtNzQ4MDFmMGFjNjI4XCIsXG4gICAgICAgICAgXCJlcnJvclwiOiBudWxsLFxuICAgICAgICAgIFwicHJpY2VcIjogNDAwXG4gICAgICAgIH0sXG4gICAgICAgIHtcbiAgICAgICAgICBcIm5vdGVcIjogXCJJbml0aWFsIFNwcmF5aW5nXCIsXG4gICAgICAgICAgXCJhbW91bnRcIjogMTI1LFxuICAgICAgICAgIFwidW5pdHNcIjogXCJbcXRfdXNdXCIsXG4gICAgICAgICAgXCJuYW1lXCI6IFwiR29hbCAyWExcIixcbiAgICAgICAgICBcImlkXCI6IFwiYzRlNzZiY2MtMTk1NS00MTIzLWJlNzktNGJiZDJmMTllOGUxXCIsXG4gICAgICAgICAgXCJlcnJvclwiOiBudWxsLFxuICAgICAgICAgIFwicHJpY2VcIjogMzc1MFxuICAgICAgICB9LFxuICAgICAgICB7XG4gICAgICAgICAgXCJub3RlXCI6IFwiSW5pdGlhbCBUaWxsYWdlXCIsXG4gICAgICAgICAgXCJhbW91bnRcIjogMjAsXG4gICAgICAgICAgXCJ1bml0c1wiOiBcImhcIixcbiAgICAgICAgICBcIm5hbWVcIjogXCJMYXJnZSBUcmFjdG9yXCIsXG4gICAgICAgICAgXCJpZFwiOiBcIjE4MDljM2I1LTBkNDktNDBhOS1iNjRiLTIxZDc5YjdjZWVhNFwiLFxuICAgICAgICAgIFwiZXJyb3JcIjogbnVsbCxcbiAgICAgICAgICBcInByaWNlXCI6IDI4NDEuODM5OTk5OTk5OTk5N1xuICAgICAgICB9LFxuICAgICAgICB7XG4gICAgICAgICAgXCJub3RlXCI6IFwiUmlwcGluZ1wiLFxuICAgICAgICAgIFwiYW1vdW50XCI6IDEwLFxuICAgICAgICAgIFwidW5pdHNcIjogXCJoXCIsXG4gICAgICAgICAgXCJuYW1lXCI6IFwiTGFyZ2UgVHJhY3RvclwiLFxuICAgICAgICAgIFwiaWRcIjogXCIyNDc2NzMyZC0wZWZiLTRhMjYtYTIxYi00ZGYzZDFlOGMxYTNcIixcbiAgICAgICAgICBcImVycm9yXCI6IG51bGwsXG4gICAgICAgICAgXCJwcmljZVwiOiAxNDIwLjkxOTk5OTk5OTk5OThcbiAgICAgICAgfSxcbiAgICAgICAge1xuICAgICAgICAgIFwibm90ZVwiOiBcIlJvdyBNYXJraW5nXCIsXG4gICAgICAgICAgXCJhbW91bnRcIjogMjUsXG4gICAgICAgICAgXCJ1bml0c1wiOiBcImhcIixcbiAgICAgICAgICBcIm5hbWVcIjogXCJMYXJnZSBUcmFjdG9yXCIsXG4gICAgICAgICAgXCJpZFwiOiBcIjJiMWRkZDY1LWY4YTktNDM2MC1hYzQ3LTUwMmZlZDUwY2E0ZVwiLFxuICAgICAgICAgIFwiZXJyb3JcIjogbnVsbCxcbiAgICAgICAgICBcInByaWNlXCI6IDM1NTIuMjk5OTk5OTk5OTk5N1xuICAgICAgICB9LFxuICAgICAgICB7XG4gICAgICAgICAgXCJub3RlXCI6IFwiaGVyYmljaWRlIC0gcHJlZW1lcmdlbnRcIixcbiAgICAgICAgICBcImFtb3VudFwiOiAzMixcbiAgICAgICAgICBcInVuaXRzXCI6IFwiaFwiLFxuICAgICAgICAgIFwibmFtZVwiOiBcIkNoYWxsZW5nZXIgVHJhY3RvclwiLFxuICAgICAgICAgIFwiaWRcIjogXCI1YmE5ZDAyMy1mOWQzLTRkNTktYTk2MC03MGRiZTQyYzlmMDJcIixcbiAgICAgICAgICBcImVycm9yXCI6IG51bGwsXG4gICAgICAgICAgXCJwcmljZVwiOiA1NzQwLjg1MTIsXG4gICAgICAgICAgXCJvcmlnaW5hbEFtb3VudFwiOiAzMlxuICAgICAgICB9LFxuICAgICAgICB7XG4gICAgICAgICAgXCJub3RlXCI6IFwiaGVyYmljaWRlIC0gcHJlZW1lcmdlbnRcIixcbiAgICAgICAgICBcImFtb3VudFwiOiA1MCxcbiAgICAgICAgICBcInVuaXRzXCI6IFwiW3F0X3VzXVwiLFxuICAgICAgICAgIFwibmFtZVwiOiBcIlRyaWZsdXJhbGluXCIsXG4gICAgICAgICAgXCJpZFwiOiBcIjBiZTBiMWQ2LWQ1MmQtNDZhNi1iZjFhLTI0MDgzMjgyNWE4NVwiLFxuICAgICAgICAgIFwiZXJyb3JcIjogbnVsbCxcbiAgICAgICAgICBcInByaWNlXCI6IDM3NVxuICAgICAgICB9XG4gICAgICBdLFxuICAgICAgXCJ1bml0c1wiOiBcIlthY3JfdXNdXCIsXG4gICAgICBcInNjaGVkdWxlXCI6IFtcbiAgICAgICAge1xuICAgICAgICAgIFwiZGF0ZVwiOiBcIjIwMTUtMDYtMDFcIixcbiAgICAgICAgICBcImxlbmd0aFwiOiBcIjNcIixcbiAgICAgICAgICBcInVuaXRzXCI6IFwibW9udGhcIlxuICAgICAgICB9XG4gICAgICBdLFxuICAgICAgXCJzdWJ0b3RhbFwiOiAxODM1NC4yOTM5OTk5OTk5OTgsXG4gICAgICBcInRvdGFsXCI6IDE4MzU0LjI5Mzk5OTk5OTk5OFxuICAgIH0sXG4gICAge1xuICAgICAgXCJuYW1lXCI6IFwicGxhbnRpbmdcIixcbiAgICAgIFwibWF0ZXJpYWxzXCI6IFtcbiAgICAgICAge1xuICAgICAgICAgIFwibm90ZVwiOiBcIlRyYW5zcG9ydCBOdXJzZXJ5IHRvIGZpZWxkXCIsXG4gICAgICAgICAgXCJhbW91bnRcIjogMjAsXG4gICAgICAgICAgXCJ1bml0c1wiOiBcImhcIixcbiAgICAgICAgICBcIm5hbWVcIjogXCJTZW1pLVRyYWN0b3IgdHJhaWxlclwiLFxuICAgICAgICAgIFwiaWRcIjogXCI5ODk1ZTllYS1jOTI0LTRkY2EtOTQ3YS1iNjcyYjRiNWZmNDVcIixcbiAgICAgICAgICBcImVycm9yXCI6IG51bGwsXG4gICAgICAgICAgXCJwcmljZVwiOiAyMDI1LjNcbiAgICAgICAgfSxcbiAgICAgICAge1xuICAgICAgICAgIFwiYW1vdW50XCI6IDE0NTAwMCxcbiAgICAgICAgICBcInVuaXRzXCI6IFwiMVwiLFxuICAgICAgICAgIFwibmFtZVwiOiBcIlBvcGxhciBDdXR0aW5nXCIsXG4gICAgICAgICAgXCJpZFwiOiBcIjFkMGMyMWVkLTY1YWUtNGZmZC04MjVlLWVlODA3MjJiZmRiZlwiLFxuICAgICAgICAgIFwiZXJyb3JcIjogbnVsbCxcbiAgICAgICAgICBcInByaWNlXCI6IDExNjAwXG4gICAgICAgIH0sXG4gICAgICAgIHtcbiAgICAgICAgICBcImFtb3VudFwiOiAxMDgwLFxuICAgICAgICAgIFwidW5pdHNcIjogXCJoXCIsXG4gICAgICAgICAgXCJuYW1lXCI6IFwiQ29vbGVyL3ZhblwiLFxuICAgICAgICAgIFwiaWRcIjogXCJlZTI2MmVkMC0yMGYwLTQ1M2MtOTU5My00Y2ZmMTFhYjUyOGJcIixcbiAgICAgICAgICBcImVycm9yXCI6IG51bGwsXG4gICAgICAgICAgXCJwcmljZVwiOiA0OTc2LjIwOFxuICAgICAgICB9LFxuICAgICAgICB7XG4gICAgICAgICAgXCJhbW91bnRcIjogNDgwLFxuICAgICAgICAgIFwidW5pdHNcIjogXCJoXCIsXG4gICAgICAgICAgXCJuYW1lXCI6IFwiTGFib3JlclwiLFxuICAgICAgICAgIFwiaWRcIjogXCJmMTBjNzg4Zi01OTNmLTQ0OWItOGUxMi03MDdiM2FiYTAzZDVcIixcbiAgICAgICAgICBcImVycm9yXCI6IG51bGwsXG4gICAgICAgICAgXCJwcmljZVwiOiA4MTYwXG4gICAgICAgIH1cbiAgICAgIF0sXG4gICAgICBcInVuaXRzXCI6IFwiW2Fjcl91c11cIixcbiAgICAgIFwic2NoZWR1bGVcIjogW1xuICAgICAgICB7XG4gICAgICAgICAgXCJkYXRlXCI6IFwiMjAxNS0xMC0wMVwiLFxuICAgICAgICAgIFwibGVuZ3RoXCI6IFwiMVwiLFxuICAgICAgICAgIFwidW5pdHNcIjogXCJtb250aFwiXG4gICAgICAgIH1cbiAgICAgIF0sXG4gICAgICBcInN1YnRvdGFsXCI6IDI2NzYxLjUwNzk5OTk5OTk5OCxcbiAgICAgIFwidG90YWxcIjogMjY3NjEuNTA3OTk5OTk5OTk4XG4gICAgfSxcbiAgICB7XG4gICAgICBcIm5hbWVcIjogXCJjcm9wIGNhcmUgLSB5cjBcIixcbiAgICAgIFwibWF0ZXJpYWxzXCI6IFtcbiAgICAgICAge1xuICAgICAgICAgIFwiYW1vdW50XCI6IDI1LFxuICAgICAgICAgIFwidW5pdHNcIjogXCJbYWNyX3VzXVwiLFxuICAgICAgICAgIFwibmFtZVwiOiBcImhlcmJpY2lkZSAtIG1hbnVhbFwiLFxuICAgICAgICAgIFwiaWRcIjogXCI2NTBjM2Y3Yi03YTRlLTRjNjktODhkNy1kMDkxOGNkZTcyYTRcIixcbiAgICAgICAgICBcImVycm9yXCI6IG51bGwsXG4gICAgICAgICAgXCJwcmljZVwiOiA2MDhcbiAgICAgICAgfSxcbiAgICAgICAge1xuICAgICAgICAgIFwibm90ZVwiOiBcIjIgdGltZXMgb3ZlciA3MCBhY3JlcyBlYWNoLlwiLFxuICAgICAgICAgIFwiYW1vdW50XCI6IDE0MCxcbiAgICAgICAgICBcInVuaXRzXCI6IFwiW2Fjcl91c11cIixcbiAgICAgICAgICBcIm5hbWVcIjogXCJob2VpbmdcIixcbiAgICAgICAgICBcImlkXCI6IFwiYjg4MDE5ZmQtMDJjOS00YmMzLWFlZGEtN2IxZDgxZThjNTgyXCIsXG4gICAgICAgICAgXCJlcnJvclwiOiBudWxsLFxuICAgICAgICAgIFwicHJpY2VcIjogNDU2OS42XG4gICAgICAgIH1cbiAgICAgIF0sXG4gICAgICBcInVuaXRzXCI6IFwiW2Fjcl91c11cIixcbiAgICAgIFwic2NoZWR1bGVcIjogW1xuICAgICAgICB7XG4gICAgICAgICAgXCJkYXRlXCI6IFwiMjAxNS0xMS0wMVwiLFxuICAgICAgICAgIFwibGVuZ3RoXCI6IFwiMVwiLFxuICAgICAgICAgIFwidW5pdHNcIjogXCJ5ZWFyXCJcbiAgICAgICAgfVxuICAgICAgXSxcbiAgICAgIFwic3VidG90YWxcIjogNTE3Ny42LFxuICAgICAgXCJ0b3RhbFwiOiA1MTc3LjZcbiAgICB9LFxuICAgIHtcbiAgICAgIFwibmFtZVwiOiBcImNyb3AgY2FyZSAtIHlyMVwiLFxuICAgICAgXCJtYXRlcmlhbHNcIjogW1xuICAgICAgICB7XG4gICAgICAgICAgXCJub3RlXCI6IFwiVGlsbGFnZVwiLFxuICAgICAgICAgIFwiYW1vdW50XCI6IDQ4LFxuICAgICAgICAgIFwidW5pdHNcIjogXCJoXCIsXG4gICAgICAgICAgXCJuYW1lXCI6IFwiU21hbGwgVHJhY3RvclwiLFxuICAgICAgICAgIFwiaWRcIjogXCIyMDY4YzIxNi00ODM4LTQ2ZjctODVkMC0zNmQxMGM1YzNmZWRcIixcbiAgICAgICAgICBcImVycm9yXCI6IG51bGwsXG4gICAgICAgICAgXCJwcmljZVwiOiAyNzYzLjA2MjRcbiAgICAgICAgfSxcbiAgICAgICAge1xuICAgICAgICAgIFwibm90ZVwiOiBcIjUgdGltZXNcIixcbiAgICAgICAgICBcImFtb3VudFwiOiA1MDAsXG4gICAgICAgICAgXCJ1bml0c1wiOiBcIlthY3JfdXNdXCIsXG4gICAgICAgICAgXCJuYW1lXCI6IFwiaG9laW5nXCIsXG4gICAgICAgICAgXCJpZFwiOiBcIjY4ZjZhMDY0LTk0YzQtNDUzZS1iMzZiLWQ1MWY0ZjRiOTZmY1wiLFxuICAgICAgICAgIFwiZXJyb3JcIjogbnVsbCxcbiAgICAgICAgICBcInByaWNlXCI6IDE2MzIwXG4gICAgICAgIH0sXG4gICAgICAgIHtcbiAgICAgICAgICBcIm5vdGVcIjogXCIzIHRpbWVzLCAxLzIgZmllbGRcIixcbiAgICAgICAgICBcImFtb3VudFwiOiAxNTAsXG4gICAgICAgICAgXCJ1bml0c1wiOiBcIlthY3JfdXNdXCIsXG4gICAgICAgICAgXCJuYW1lXCI6IFwiaGVyYmljaWRlIC0gbWFudWFsXCIsXG4gICAgICAgICAgXCJpZFwiOiBcIjI4OTAzNTk1LWUzY2EtNDNlMC1hYzM4LWQ2ZDdiZjU2YTY3ZlwiLFxuICAgICAgICAgIFwiZXJyb3JcIjogbnVsbCxcbiAgICAgICAgICBcInByaWNlXCI6IDM2NDhcbiAgICAgICAgfSxcbiAgICAgICAge1xuICAgICAgICAgIFwibm90ZVwiOiBcIkludGVycGxhbnRpbmdcIixcbiAgICAgICAgICBcImFtb3VudFwiOiA5NixcbiAgICAgICAgICBcInVuaXRzXCI6IFwiaFwiLFxuICAgICAgICAgIFwibmFtZVwiOiBcIkxhYm9yZXJcIixcbiAgICAgICAgICBcImlkXCI6IFwiMmIyNGI1NzgtOTIzNi00NDdlLTg5OTYtMmRmZmI5ZDIzZTE2XCIsXG4gICAgICAgICAgXCJlcnJvclwiOiBudWxsLFxuICAgICAgICAgIFwicHJpY2VcIjogMTYzMlxuICAgICAgICB9XG4gICAgICBdLFxuICAgICAgXCJ1bml0c1wiOiBcIlthY3JfdXNdXCIsXG4gICAgICBcInNjaGVkdWxlXCI6IFtcbiAgICAgICAge1xuICAgICAgICAgIFwiZGF0ZVwiOiBcIjIwMTYtMTEtMDFcIixcbiAgICAgICAgICBcImxlbmd0aFwiOiBcIjFcIixcbiAgICAgICAgICBcInVuaXRzXCI6IFwieWVhclwiXG4gICAgICAgIH1cbiAgICAgIF0sXG4gICAgICBcInN1YnRvdGFsXCI6IDI0MzYzLjA2MjQsXG4gICAgICBcInRvdGFsXCI6IDI0MzYzLjA2MjRcbiAgICB9LFxuICAgIHtcbiAgICAgIFwibmFtZVwiOiBcImhhcnZlc3QgLSB5cjFcIixcbiAgICAgIFwibWF0ZXJpYWxzXCI6IFtcbiAgICAgICAge1xuICAgICAgICAgIFwibm90ZVwiOiBcIlwiLFxuICAgICAgICAgIFwiYW1vdW50XCI6IDI2LFxuICAgICAgICAgIFwidW5pdHNcIjogXCJoXCIsXG4gICAgICAgICAgXCJuYW1lXCI6IFwiRlIgNjA4MCBGSFwiLFxuICAgICAgICAgIFwiaWRcIjogXCJhN2QyZDhjOC01ZGNkLTRlNjItYjkwMS04NWNkZmE1MjVkYzhcIixcbiAgICAgICAgICBcImVycm9yXCI6IG51bGwsXG4gICAgICAgICAgXCJwcmljZVwiOiA2NDI0LjM5MlxuICAgICAgICB9LFxuICAgICAgICB7XG4gICAgICAgICAgXCJhbW91bnRcIjogMTA0LFxuICAgICAgICAgIFwidW5pdHNcIjogXCJoXCIsXG4gICAgICAgICAgXCJuYW1lXCI6IFwiVGFuZGVtIEF4bGUgVHJ1Y2tcIixcbiAgICAgICAgICBcImlkXCI6IFwiYTdhOTgwYmUtNGRiNC00ZjEyLTg4YTMtYmI3NzNkZGU1Njk5XCIsXG4gICAgICAgICAgXCJlcnJvclwiOiBudWxsLFxuICAgICAgICAgIFwicHJpY2VcIjogMjUwNzMuNTY4LFxuICAgICAgICAgIFwib3JpZ2luYWxBbW91bnRcIjogMTA0XG4gICAgICAgIH0sXG4gICAgICAgIHtcbiAgICAgICAgICBcImFtb3VudFwiOiAyNixcbiAgICAgICAgICBcInVuaXRzXCI6IFwiaFwiLFxuICAgICAgICAgIFwibmFtZVwiOiBcIlN1cHBvcnQgVHJ1Y2tcIixcbiAgICAgICAgICBcImlkXCI6IFwiMjBkM2U0ODctN2QxNS00N2U2LTllOTctMjRiNGFkMDFjOTdlXCIsXG4gICAgICAgICAgXCJlcnJvclwiOiBudWxsLFxuICAgICAgICAgIFwicHJpY2VcIjogMTU1OC41ODU1OTk5OTk5OTk5XG4gICAgICAgIH1cbiAgICAgIF0sXG4gICAgICBcInVuaXRzXCI6IFwiW2Fjcl91c11cIixcbiAgICAgIFwic2NoZWR1bGVcIjogW1xuICAgICAgICB7XG4gICAgICAgICAgXCJsZW5ndGhcIjogMSxcbiAgICAgICAgICBcInVuaXRzXCI6IFwibW9udGhcIixcbiAgICAgICAgICBcImRhdGVcIjogXCIyMDE3LTEwLTJcIlxuICAgICAgICB9XG4gICAgICBdLFxuICAgICAgXCJzdWJ0b3RhbFwiOiAzMzA1Ni41NDU2LFxuICAgICAgXCJ0b3RhbFwiOiAzMzA1Ni41NDU2XG4gICAgfSxcbiAgICB7XG4gICAgICBcIm5hbWVcIjogXCJjcm9wIGNhcmUgLSBwb3N0IGhhcnZlc3RcIixcbiAgICAgIFwibWF0ZXJpYWxzXCI6IFtcbiAgICAgICAge1xuICAgICAgICAgIFwibm90ZVwiOiBcIlBvc3QgaGFydmVzdCBjbGVhbiB1cFwiLFxuICAgICAgICAgIFwiYW1vdW50XCI6IDMwLFxuICAgICAgICAgIFwidW5pdHNcIjogXCJoXCIsXG4gICAgICAgICAgXCJuYW1lXCI6IFwiTWlkLXNpemUgVHJhY3RvclwiLFxuICAgICAgICAgIFwiaWRcIjogXCI1ODU1ZWRhMS0wYTgyLTQ3ODQtYmUyNi0yZTNkYzlkODQ3MDJcIixcbiAgICAgICAgICBcImVycm9yXCI6IG51bGwsXG4gICAgICAgICAgXCJwcmljZVwiOiAyMzQzLjgyOFxuICAgICAgICB9LFxuICAgICAgICB7XG4gICAgICAgICAgXCJub3RlXCI6IFwiRG9ybWFudCBIZXJiaWNpZGVcIixcbiAgICAgICAgICBcImFtb3VudFwiOiA4LFxuICAgICAgICAgIFwidW5pdHNcIjogXCJoXCIsXG4gICAgICAgICAgXCJuYW1lXCI6IFwiVHJhY3RvciBhbmQgc3ByYXllclwiLFxuICAgICAgICAgIFwiaWRcIjogXCIwMzEwNTc3NS04NWJiLTQyMzYtOTVjMi0yNGUxZTQwODUzYTRcIixcbiAgICAgICAgICBcImVycm9yXCI6IG51bGwsXG4gICAgICAgICAgXCJwcmljZVwiOiA3MjkuMDIwOFxuICAgICAgICB9LFxuICAgICAgICB7XG4gICAgICAgICAgXCJub3RlXCI6IFwiRG9ybWFudCBIZXJiaWNpZGVcIixcbiAgICAgICAgICBcImFtb3VudFwiOiAyMDAsXG4gICAgICAgICAgXCJ1bml0c1wiOiBcIltxdF91c11cIixcbiAgICAgICAgICBcIm5hbWVcIjogXCJHbHlwaG9zYXRlXCIsXG4gICAgICAgICAgXCJpZFwiOiBcIjQ4NTM5YThiLThjYWQtNDE0NS1hNjFkLTE2N2NiY2QwOGE2OFwiLFxuICAgICAgICAgIFwiZXJyb3JcIjogbnVsbCxcbiAgICAgICAgICBcInByaWNlXCI6IDgwMFxuICAgICAgICB9LFxuICAgICAgICB7XG4gICAgICAgICAgXCJub3RlXCI6IFwiRG9ybWFudCBIZXJiaWNpZGVcIixcbiAgICAgICAgICBcImFtb3VudFwiOiAyMDAsXG4gICAgICAgICAgXCJ1bml0c1wiOiBcIltxdF91c11cIixcbiAgICAgICAgICBcIm5hbWVcIjogXCJUcmlmbHVyYWxpblwiLFxuICAgICAgICAgIFwiaWRcIjogXCJiMTZkNmZjOS01ODAzLTQ0MDQtYjkxYy00M2Q5MDRmNDAzYWVcIixcbiAgICAgICAgICBcImVycm9yXCI6IG51bGwsXG4gICAgICAgICAgXCJwcmljZVwiOiAxNTAwXG4gICAgICAgIH0sXG4gICAgICAgIHtcbiAgICAgICAgICBcIm5vdGVcIjogXCJwb3N0IGVtZXJnZW50XCIsXG4gICAgICAgICAgXCJhbW91bnRcIjogMTAwLFxuICAgICAgICAgIFwidW5pdHNcIjogXCJbYWNyX3VzXVwiLFxuICAgICAgICAgIFwibmFtZVwiOiBcImhlcmJpY2lkZSAtIG1hbnVhbFwiLFxuICAgICAgICAgIFwiaWRcIjogXCJmYjY1MGZkMy05OThkLTQxZmEtODg1ZC1kZWVlNjgxMjQxOWNcIixcbiAgICAgICAgICBcImVycm9yXCI6IG51bGwsXG4gICAgICAgICAgXCJwcmljZVwiOiAyNDMyXG4gICAgICAgIH1cbiAgICAgIF0sXG4gICAgICBcInVuaXRzXCI6IFwiW2Fjcl91c11cIixcbiAgICAgIFwic2NoZWR1bGVcIjogW1xuICAgICAgICB7XG4gICAgICAgICAgXCJsZW5ndGhcIjogXCIxXCIsXG4gICAgICAgICAgXCJ1bml0c1wiOiBcInllYXJcIixcbiAgICAgICAgICBcImRhdGVcIjogXCIyMDE3LTExLTFcIlxuICAgICAgICB9LFxuICAgICAgICB7XG4gICAgICAgICAgXCJsZW5ndGhcIjogMSxcbiAgICAgICAgICBcInVuaXRzXCI6IFwieWVhclwiLFxuICAgICAgICAgIFwiZGF0ZVwiOiBcIjIwMjAtMTEtMVwiXG4gICAgICAgIH0sXG4gICAgICAgIHtcbiAgICAgICAgICBcImxlbmd0aFwiOiAxLFxuICAgICAgICAgIFwidW5pdHNcIjogXCJ5ZWFyXCIsXG4gICAgICAgICAgXCJkYXRlXCI6IFwiMjAyMy0xMS0xXCJcbiAgICAgICAgfSxcbiAgICAgICAge1xuICAgICAgICAgIFwibGVuZ3RoXCI6IDEsXG4gICAgICAgICAgXCJ1bml0c1wiOiBcInllYXJcIixcbiAgICAgICAgICBcImRhdGVcIjogXCIyMDI2LTExLTFcIlxuICAgICAgICB9XG4gICAgICBdLFxuICAgICAgXCJzdWJ0b3RhbFwiOiA3ODA0Ljg0ODgsXG4gICAgICBcInRvdGFsXCI6IDMxMjE5LjM5NTJcbiAgICB9LFxuICAgIHtcbiAgICAgIFwibmFtZVwiOiBcImNyb3AgY2FyZSAtIGVzdGFibGlzaGVkXCIsXG4gICAgICBcIm1hdGVyaWFsc1wiOiBbXG4gICAgICAgIHtcbiAgICAgICAgICBcImFtb3VudFwiOiAxNTAsXG4gICAgICAgICAgXCJ1bml0c1wiOiBcIlthY3JfdXNdXCIsXG4gICAgICAgICAgXCJuYW1lXCI6IFwiaG9laW5nXCIsXG4gICAgICAgICAgXCJpZFwiOiBcIjQ3NDFhNTJiLTgxYzAtNDMwOS1iYmE5LThjNWQ0YTNhZTA3Y1wiLFxuICAgICAgICAgIFwiZXJyb3JcIjogbnVsbCxcbiAgICAgICAgICBcInByaWNlXCI6IDQ4OTZcbiAgICAgICAgfSxcbiAgICAgICAge1xuICAgICAgICAgIFwiYW1vdW50XCI6IDEwMCxcbiAgICAgICAgICBcInVuaXRzXCI6IFwiW2Fjcl91c11cIixcbiAgICAgICAgICBcIm5hbWVcIjogXCJoZXJiaWNpZGUgLSBtYW51YWxcIixcbiAgICAgICAgICBcImlkXCI6IFwiMTllOGZjMDEtMjI2My00M2U0LTlmNGItOTVkMDYzYzZlYzljXCIsXG4gICAgICAgICAgXCJlcnJvclwiOiBudWxsLFxuICAgICAgICAgIFwicHJpY2VcIjogMjQzMlxuICAgICAgICB9XG4gICAgICBdLFxuICAgICAgXCJ1bml0c1wiOiBcIlthY3JfdXNdXCIsXG4gICAgICBcInNjaGVkdWxlXCI6IFtcbiAgICAgICAge1xuICAgICAgICAgIFwibGVuZ3RoXCI6IFwiMVwiLFxuICAgICAgICAgIFwidW5pdHNcIjogXCJ5ZWFyXCIsXG4gICAgICAgICAgXCJkYXRlXCI6IFwiMjAxOC0xMS0xXCJcbiAgICAgICAgfSxcbiAgICAgICAge1xuICAgICAgICAgIFwibGVuZ3RoXCI6IFwiMVwiLFxuICAgICAgICAgIFwidW5pdHNcIjogXCJ5ZWFyXCIsXG4gICAgICAgICAgXCJkYXRlXCI6IFwiMjAxOS0xMS0xXCJcbiAgICAgICAgfSxcbiAgICAgICAge1xuICAgICAgICAgIFwibGVuZ3RoXCI6IDEsXG4gICAgICAgICAgXCJ1bml0c1wiOiBcInllYXJcIixcbiAgICAgICAgICBcImRhdGVcIjogXCIyMDIxLTExLTFcIlxuICAgICAgICB9LFxuICAgICAgICB7XG4gICAgICAgICAgXCJsZW5ndGhcIjogXCIxXCIsXG4gICAgICAgICAgXCJ1bml0c1wiOiBcInllYXJcIixcbiAgICAgICAgICBcImRhdGVcIjogXCIyMDIyLTExLTFcIlxuICAgICAgICB9LFxuICAgICAgICB7XG4gICAgICAgICAgXCJsZW5ndGhcIjogMSxcbiAgICAgICAgICBcInVuaXRzXCI6IFwieWVhclwiLFxuICAgICAgICAgIFwiZGF0ZVwiOiBcIjIwMjQtMTEtMVwiXG4gICAgICAgIH0sXG4gICAgICAgIHtcbiAgICAgICAgICBcImxlbmd0aFwiOiAxLFxuICAgICAgICAgIFwidW5pdHNcIjogXCJ5ZWFyXCIsXG4gICAgICAgICAgXCJkYXRlXCI6IFwiMjAyNS0xMS0xXCJcbiAgICAgICAgfSxcbiAgICAgICAge1xuICAgICAgICAgIFwibGVuZ3RoXCI6IDEsXG4gICAgICAgICAgXCJ1bml0c1wiOiBcInllYXJcIixcbiAgICAgICAgICBcImRhdGVcIjogXCIyMDI3LTExLTFcIlxuICAgICAgICB9LFxuICAgICAgICB7XG4gICAgICAgICAgXCJsZW5ndGhcIjogMSxcbiAgICAgICAgICBcInVuaXRzXCI6IFwieWVhclwiLFxuICAgICAgICAgIFwiZGF0ZVwiOiBcIjIwMjgtMTEtMVwiXG4gICAgICAgIH1cbiAgICAgIF0sXG4gICAgICBcInN1YnRvdGFsXCI6IDczMjgsXG4gICAgICBcInRvdGFsXCI6IDU4NjI0XG4gICAgfSxcbiAgICB7XG4gICAgICBcIm5hbWVcIjogXCJoYXJ2ZXN0IC0gZXN0YWJsaXNoZWRcIixcbiAgICAgIFwibWF0ZXJpYWxzXCI6IFtcbiAgICAgICAge1xuICAgICAgICAgIFwiYW1vdW50XCI6IDM1LFxuICAgICAgICAgIFwidW5pdHNcIjogXCJoXCIsXG4gICAgICAgICAgXCJuYW1lXCI6IFwiRlIgNjA4MCBGSFwiLFxuICAgICAgICAgIFwiaWRcIjogXCI2NzM5Y2EyZS0yOGViLTQ4ODEtODkxMy02ZmI1MThiMjczNzNcIixcbiAgICAgICAgICBcImVycm9yXCI6IG51bGwsXG4gICAgICAgICAgXCJwcmljZVwiOiA4NjQ4LjIyXG4gICAgICAgIH0sXG4gICAgICAgIHtcbiAgICAgICAgICBcImFtb3VudFwiOiAxNzUsXG4gICAgICAgICAgXCJ1bml0c1wiOiBcImhcIixcbiAgICAgICAgICBcIm5hbWVcIjogXCJUYW5kZW0gQXhsZSBUcnVja1wiLFxuICAgICAgICAgIFwiaWRcIjogXCIwMTk3NTQzZi1kZmUzLTRiNGQtYTUzYi04NjY3MzhjN2ZmMzRcIixcbiAgICAgICAgICBcImVycm9yXCI6IG51bGwsXG4gICAgICAgICAgXCJwcmljZVwiOiA0MjE5MS4xLFxuICAgICAgICAgIFwib3JpZ2luYWxBbW91bnRcIjogMTc1XG4gICAgICAgIH0sXG4gICAgICAgIHtcbiAgICAgICAgICBcImFtb3VudFwiOiAzNSxcbiAgICAgICAgICBcInVuaXRzXCI6IFwiaFwiLFxuICAgICAgICAgIFwibmFtZVwiOiBcIlN1cHBvcnQgVHJ1Y2tcIixcbiAgICAgICAgICBcImlkXCI6IFwiOWQ1NzBkOWMtYzZhZi00YWFhLWEyYTktZmFjNDk5MTYzYzJlXCIsXG4gICAgICAgICAgXCJlcnJvclwiOiBudWxsLFxuICAgICAgICAgIFwicHJpY2VcIjogMjA5OC4wOTZcbiAgICAgICAgfVxuICAgICAgXSxcbiAgICAgIFwidW5pdHNcIjogXCJbYWNyX3VzXVwiLFxuICAgICAgXCJzY2hlZHVsZVwiOiBbXG4gICAgICAgIHtcbiAgICAgICAgICBcImxlbmd0aFwiOiBcIjFcIixcbiAgICAgICAgICBcInVuaXRzXCI6IFwibW9udGhcIixcbiAgICAgICAgICBcImRhdGVcIjogXCIyMDIwLTEwLTFcIlxuICAgICAgICB9LFxuICAgICAgICB7XG4gICAgICAgICAgXCJsZW5ndGhcIjogXCIxXCIsXG4gICAgICAgICAgXCJ1bml0c1wiOiBcIm1vbnRoXCIsXG4gICAgICAgICAgXCJkYXRlXCI6IFwiMjAyMy0xMC0xXCJcbiAgICAgICAgfSxcbiAgICAgICAge1xuICAgICAgICAgIFwibGVuZ3RoXCI6IDEsXG4gICAgICAgICAgXCJ1bml0c1wiOiBcIm1vbnRoXCIsXG4gICAgICAgICAgXCJkYXRlXCI6IFwiMjAyNi0xMC0xXCJcbiAgICAgICAgfSxcbiAgICAgICAge1xuICAgICAgICAgIFwibGVuZ3RoXCI6IDEsXG4gICAgICAgICAgXCJ1bml0c1wiOiBcIm1vbnRoXCIsXG4gICAgICAgICAgXCJkYXRlXCI6IFwiMjAyOS0xMC0xXCJcbiAgICAgICAgfVxuICAgICAgXSxcbiAgICAgIFwic3VidG90YWxcIjogNTI5MzcuNDE2LFxuICAgICAgXCJ0b3RhbFwiOiAyMTE3NDkuNjY0XG4gICAgfSxcbiAgICB7XG4gICAgICBcIm5hbWVcIjogXCJyZXN0b3JhdGlvblwiLFxuICAgICAgXCJtYXRlcmlhbHNcIjogW1xuICAgICAgICB7XG4gICAgICAgICAgXCJub3RlXCI6IFwiZGlza2luZ1wiLFxuICAgICAgICAgIFwiYW1vdW50XCI6IDM2LFxuICAgICAgICAgIFwidW5pdHNcIjogXCJoXCIsXG4gICAgICAgICAgXCJuYW1lXCI6IFwiTGFyZ2UgVHJhY3RvclwiLFxuICAgICAgICAgIFwiaWRcIjogXCI3MmI0Zjk3Yi04MTJmLTQ2NjctYjM3MS00Zjc2Mzc2ZDdhOGNcIixcbiAgICAgICAgICBcImVycm9yXCI6IG51bGwsXG4gICAgICAgICAgXCJwcmljZVwiOiA1MTE1LjMxMixcbiAgICAgICAgICBcIm9yaWdpbmFsQW1vdW50XCI6IDM2XG4gICAgICAgIH0sXG4gICAgICAgIHtcbiAgICAgICAgICBcIm5vdGVcIjogXCJoZXJiaWNpZGVcIixcbiAgICAgICAgICBcImFtb3VudFwiOiAyMCxcbiAgICAgICAgICBcInVuaXRzXCI6IFwiaFwiLFxuICAgICAgICAgIFwibmFtZVwiOiBcIlRyYWN0b3IgYW5kIHNwcmF5ZXJcIixcbiAgICAgICAgICBcImlkXCI6IFwiYjJmYmY4ZDgtOWQ5OS00NTMxLWEwZGYtNzdkZTA3ZjVhYjJlXCIsXG4gICAgICAgICAgXCJlcnJvclwiOiBudWxsLFxuICAgICAgICAgIFwicHJpY2VcIjogMTgyMi41NTIwMDAwMDAwMDAxXG4gICAgICAgIH0sXG4gICAgICAgIHtcbiAgICAgICAgICBcIm5vdGVcIjogXCJoZXJiaWNpZGVcIixcbiAgICAgICAgICBcImFtb3VudFwiOiAyMDAsXG4gICAgICAgICAgXCJ1bml0c1wiOiBcIltxdF91c11cIixcbiAgICAgICAgICBcIm5hbWVcIjogXCJHbHlwaG9zYXRlXCIsXG4gICAgICAgICAgXCJpZFwiOiBcImUwZWRhZTBjLTE4MWItNGIxMy04ODIzLTE3ZDI5MWVkNDY5NVwiLFxuICAgICAgICAgIFwiZXJyb3JcIjogbnVsbCxcbiAgICAgICAgICBcInByaWNlXCI6IDgwMFxuICAgICAgICB9LFxuICAgICAgICB7XG4gICAgICAgICAgXCJub3RlXCI6IFwiaGVyYmljaWRlXCIsXG4gICAgICAgICAgXCJhbW91bnRcIjogMjAwLFxuICAgICAgICAgIFwidW5pdHNcIjogXCJbcXRfdXNdXCIsXG4gICAgICAgICAgXCJuYW1lXCI6IFwiMiw0LURcIixcbiAgICAgICAgICBcImlkXCI6IFwiM2IxNGUwODEtMzYwMi00MTM3LTkwNTMtODkwZTRmNDcxNmM0XCIsXG4gICAgICAgICAgXCJlcnJvclwiOiBudWxsLFxuICAgICAgICAgIFwicHJpY2VcIjogMTAwMFxuICAgICAgICB9XG4gICAgICBdLFxuICAgICAgXCJ1bml0c1wiOiBcIlthY3JfdXNdXCIsXG4gICAgICBcInNjaGVkdWxlXCI6IFtcbiAgICAgICAge1xuICAgICAgICAgIFwibGVuZ3RoXCI6IFwiM1wiLFxuICAgICAgICAgIFwidW5pdHNcIjogXCJtb250aFwiLFxuICAgICAgICAgIFwiZGF0ZVwiOiBcIjIwMjktMTEtMVwiXG4gICAgICAgIH1cbiAgICAgIF0sXG4gICAgICBcInN1YnRvdGFsXCI6IDg3MzcuODY0LFxuICAgICAgXCJ0b3RhbFwiOiA4NzM3Ljg2NFxuICAgIH1cbiAgXSxcbiAgXCJmYXJtXCI6IHtcbiAgICBcInVuaXRcIjogXCJbYWNyX3VzXVwiLFxuICAgIFwic2l6ZVwiOiBcIjEwMFwiLFxuICAgIFwiY29tbW9kaXR5XCI6IFwiUE9QTEFSXCIsXG4gICAgXCJsb2NhdGlvblwiOiBcIjA2MTEzXCIsXG4gICAgXCJmYXJtXCI6IFwiY2xhcmtzYnVyZ1wiXG4gIH1cbn1cbiIsIm1vZHVsZS5leHBvcnRzPXtcbiAgXCJtYXRlcmlhbHNcIjogW1xuICAgIHtcbiAgICAgIFwibmFtZVwiOiBcIkVzdGltYXRlXCIsXG4gICAgICBcInByaWNlXCI6IDEsXG4gICAgICBcInVuaXRzXCI6IFwidXMkXCIsXG4gICAgICBcImZpeGVkXCI6IHRydWUsXG4gICAgICBcImRlc2NyaXB0aW9uXCI6IFwiUHJvdmlkZSBmaXhlZCBjb3N0IGZvciBjb21wbGV4IG1hdGVyaWFsXCIsXG4gICAgICBcInR5cGVcIjogXCJzaW1wbGVcIlxuICAgIH0sXG4gICAge1xuICAgICAgXCJuYW1lXCI6IFwiVGF4ZXNcIixcbiAgICAgIFwicHJpY2VcIjogMSxcbiAgICAgIFwidW5pdHNcIjogXCJ1cyRcIixcbiAgICAgIFwiZml4ZWRcIjogdHJ1ZSxcbiAgICAgIFwiZGVzY3JpcHRpb25cIjogXCJQcm92aWRlIGZpeGVkIGNvc3QgZm9yIGNvbXBsZXggbWF0ZXJpYWxcIixcbiAgICAgIFwidHlwZVwiOiBcInNpbXBsZVwiXG4gICAgfSxcbiAgICB7XG4gICAgICBcIm5hbWVcIjogXCJJbnN1cmFuY2VcIixcbiAgICAgIFwicHJpY2VcIjogMSxcbiAgICAgIFwidW5pdHNcIjogXCJ1cyRcIixcbiAgICAgIFwiZml4ZWRcIjogdHJ1ZSxcbiAgICAgIFwiZGVzY3JpcHRpb25cIjogXCJQcm92aWRlIGZpeGVkIGNvc3QgZm9yIGNvbXBsZXggbWF0ZXJpYWxcIixcbiAgICAgIFwidHlwZVwiOiBcInNpbXBsZVwiXG4gICAgfSxcbiAgICB7XG4gICAgICBcIm5hbWVcIjogXCJDYXBpdG9sIENvc3QgUmVjb3ZlclwiLFxuICAgICAgXCJwcmljZVwiOiAxLFxuICAgICAgXCJ1bml0c1wiOiBcInVzJFwiLFxuICAgICAgXCJmaXhlZFwiOiB0cnVlLFxuICAgICAgXCJkZXNjcmlwdGlvblwiOiBcIlByb3ZpZGUgZml4ZWQgY29zdCBmb3IgY29tcGxleCBtYXRlcmlhbFwiLFxuICAgICAgXCJ0eXBlXCI6IFwic2ltcGxlXCJcbiAgICB9LFxuICAgIHtcbiAgICAgIFwiY2xhc3NcIjogXCJlcXVpcG1lbnRcIixcbiAgICAgIFwibmFtZVwiOiBcImZvby0tZXF1aXBtZW50XCIsXG4gICAgICBcInVuaXRzXCI6IFwidXMkL1thY3JfdXNdXCIsXG4gICAgICBcInByaWNlXCI6IDIzLFxuICAgICAgXCJ0eXBlXCI6IFwic2ltcGxlXCJcbiAgICB9LFxuICAgIHtcbiAgICAgIFwidHlwZVwiOiBcImNvbXBsZXhcIixcbiAgICAgIFwibmFtZVwiOiBcImZvb1wiLFxuICAgICAgXCJ1bml0c1wiOiBcIlthY3JfdXNdXCIsXG4gICAgICBcImRlc2NyaXB0aW9uXCI6IFwiXCIsXG4gICAgICBcInByaWNlXCI6IDI1LFxuICAgICAgXCJtYXRlcmlhbHNcIjoge1xuICAgICAgICBcIkVzdGltYXRlXCI6IHtcbiAgICAgICAgICBcIm5hbWVcIjogXCJFc3RpbWF0ZVwiLFxuICAgICAgICAgIFwiYW1vdW50XCI6IDIsXG4gICAgICAgICAgXCJ1bml0c1wiOiBcInVzJFwiLFxuICAgICAgICAgIFwiZXJyb3JcIjogbnVsbCxcbiAgICAgICAgICBcInByaWNlXCI6IDIsXG4gICAgICAgICAgXCJvcmlnaW5hbEFtb3VudFwiOiAyXG4gICAgICAgIH0sXG4gICAgICAgIFwiZm9vLS1lcXVpcG1lbnRcIjoge1xuICAgICAgICAgIFwibmFtZVwiOiBcImZvby0tZXF1aXBtZW50XCIsXG4gICAgICAgICAgXCJhbW91bnRcIjogMSxcbiAgICAgICAgICBcInVuaXRzXCI6IFwiW2Fjcl91c11cIixcbiAgICAgICAgICBcImVycm9yXCI6IG51bGwsXG4gICAgICAgICAgXCJwcmljZVwiOiAyM1xuICAgICAgICB9LFxuICAgICAgICBcImJhclwiIDoge1xuICAgICAgICAgIFwibmFtZVwiIDogXCJiYXJcIixcbiAgICAgICAgICBcImFtb3V0XCIgOiAxLFxuICAgICAgICAgIFwidW5pdHNcIiA6IFwiW2Fjcl91c11cIlxuICAgICAgICB9XG4gICAgICB9XG4gICAgfVxuICBdLFxuICBcIm9wZXJhdGlvbnNcIjogW1xuICAgIHtcbiAgICAgIFwibmFtZVwiOiBcImZvb1wiLFxuICAgICAgXCJtYXRlcmlhbHNcIjogW1xuICAgICAgICB7XG4gICAgICAgICAgXCJuYW1lXCI6IFwiZm9vXCIsXG4gICAgICAgICAgXCJhbW91bnRcIjogMSxcbiAgICAgICAgICBcInVuaXRzXCI6IFwiJC9bYWNyX3VzXVwiLFxuICAgICAgICAgIFwiaWRcIjogXCJlYjg0N2U4OS02OGRlLTQ2YTItYTIwMy00NzA2ZTgxYTNkNDlcIixcbiAgICAgICAgICBcImVycm9yXCI6IG51bGwsXG4gICAgICAgICAgXCJwcmljZVwiOiAyNVxuICAgICAgICB9LFxuICAgICAgICB7XG4gICAgICAgICAgXCJuYW1lXCIgOiBcImJhelwiLFxuICAgICAgICAgIFwiYW1vdXRcIiA6IDEsXG4gICAgICAgICAgXCJ1bml0c1wiIDogXCJbYWNyX3VzXVwiLFxuICAgICAgICB9LFxuICAgICAgXSxcbiAgICAgIFwic2NoZWR1bGVcIjogW1xuICAgICAgICB7XG4gICAgICAgICAgXCJsZW5ndGhcIjogMSxcbiAgICAgICAgICBcInVuaXRzXCI6IFwibW9udGhcIixcbiAgICAgICAgICBcImRhdGVcIjogXCIyMDE1LTktN1wiXG4gICAgICAgIH0sXG4gICAgICAgIHtcbiAgICAgICAgICBcImxlbmd0aFwiOiAxLFxuICAgICAgICAgIFwidW5pdHNcIjogXCJtb250aFwiLFxuICAgICAgICAgIFwiZGF0ZVwiOiBcIjIwMTUtOS05XCJcbiAgICAgICAgfSxcbiAgICAgICAge1xuICAgICAgICAgIFwibGVuZ3RoXCI6IDEsXG4gICAgICAgICAgXCJ1bml0c1wiOiBcIm1vbnRoXCIsXG4gICAgICAgICAgXCJkYXRlXCI6IFwiMjAxNS05LTI1XCJcbiAgICAgICAgfVxuICAgICAgXSxcbiAgICAgIFwidW5pdHNcIjogXCJbYWNyX3VzXVwiLFxuICAgICAgXCJzdWJ0b3RhbFwiOiAyNSxcbiAgICAgIFwidG90YWxcIjogNzVcbiAgICB9XG4gIF0sXG4gIFwiZmFybVwiOiB7XG4gICAgXCJ1bml0XCI6IFwiW2Fjcl91c11cIixcbiAgICBcInNpemVcIjogXCIxMDBcIixcbiAgICBcImNvbW1vZGl0eVwiOiBcIlwiLFxuICAgIFwibG9jYXRpb25cIjogXCJcIixcbiAgICBcImZhcm1cIjogXCJibGFuayB0ZXN0XCJcbiAgfVxufVxuIiwibW9kdWxlLmV4cG9ydHM9e1xuICBcInByaWNlc1wiOiBbXG4gICAge1xuICAgICAgXCJ1bml0XCI6IFwidXMkL3VzJFwiLFxuICAgICAgXCJwcmljZVwiOiAxLFxuICAgICAgXCJtYXRlcmlhbFwiOiBcImN1c3RvbVwiXG4gICAgfSxcbiAgICB7XG4gICAgICBcInVuaXRcIjogXCJ1cyQvdXMkXCIsXG4gICAgICBcInByaWNlXCI6IDEsXG4gICAgICBcIm1hdGVyaWFsXCI6IFwiZmVydGlsaXplclwiXG4gICAgfSxcbiAgICB7XG4gICAgICBcInVuaXRcIjogXCJ1cyQvW2dhbF91c11cIixcbiAgICAgIFwicHJpY2VcIjogMi42OCxcbiAgICAgIFwibWF0ZXJpYWxcIjogXCJmdWVsXCJcbiAgICB9LFxuICAgIHtcbiAgICAgIFwidW5pdFwiOiBcInVzJC8oW2luX3VzXS5bYWNyX3VzXSlcIixcbiAgICAgIFwicHJpY2VcIjogMTEyLjg2LFxuICAgICAgXCJtYXRlcmlhbFwiOiBcImlycmlnYXRpb25cIlxuICAgIH0sXG4gICAge1xuICAgICAgXCJ1bml0XCI6IFwidXMkL2hcIixcbiAgICAgIFwicHJpY2VcIjogOS40MixcbiAgICAgIFwibWF0ZXJpYWxcIjogXCJMYWJvci1tYWNoaW5lXCJcbiAgICB9LFxuICAgIHtcbiAgICAgIFwidW5pdFwiOiBcInVzJC9oXCIsXG4gICAgICBcInByaWNlXCI6IDcuMjUsXG4gICAgICBcIm1hdGVyaWFsXCI6IFwiTGFib3ItbWFudWFsXCJcbiAgICB9LFxuICAgIHtcbiAgICAgIFwidW5pdFwiOiBcInVzJC91cyRcIixcbiAgICAgIFwicHJpY2VcIjogMSxcbiAgICAgIFwibWF0ZXJpYWxcIjogXCJvdGhlclwiXG4gICAgfSxcbiAgICB7XG4gICAgICBcInVuaXRcIjogXCJ1cyQvdXMkXCIsXG4gICAgICBcInByaWNlXCI6IDEsXG4gICAgICBcIm1hdGVyaWFsXCI6IFwicGVzdGljaWRlc1wiXG4gICAgfSxcbiAgICB7XG4gICAgICBcInVuaXRcIjogXCJ1cyQvdXMkXCIsXG4gICAgICBcInByaWNlXCI6IDEsXG4gICAgICBcIm1hdGVyaWFsXCI6IFwicmVwYWlyJmx1YmVcIlxuICAgIH1cbiAgXSxcbiAgXCJtYXRlcmlhbHNcIjogW1xuICAgIHtcbiAgICAgIFwiZGVzY3JpcHRpb25cIjogXCInTWFudWFsIExhYm9yIChtaW5pbXVtIHdhZ2UpJ1wiLFxuICAgICAgXCJjbGFzc1wiOiBcImxhYm9yXCIsXG4gICAgICBcInVuaXRcIjogXCJoXCIsXG4gICAgICBcIm1hdGVyaWFsXCI6IFwiTGFib3ItbWFjaGluZVwiXG4gICAgfSxcbiAgICB7XG4gICAgICBcImRlc2NyaXB0aW9uXCI6IFwiJ01hY2hpbmUgTGFib3IgKCUxMzAgb2YgbWluaW11bSknXCIsXG4gICAgICBcImNsYXNzXCI6IFwibGFib3JcIixcbiAgICAgIFwidW5pdFwiOiBcImhcIixcbiAgICAgIFwibWF0ZXJpYWxcIjogXCJMYWJvci1tYW51YWxcIlxuICAgIH0sXG4gICAge1xuICAgICAgXCJkZXNjcmlwdGlvblwiOiBcIidEb2xsYXIgZXN0aW1hdGUgb2YgcmVwYWlycydcIixcbiAgICAgIFwiY2xhc3NcIjogXCJjdXN0b21cIixcbiAgICAgIFwidW5pdFwiOiBcInVzJFwiLFxuICAgICAgXCJtYXRlcmlhbFwiOiBcInJlcGFpciZsdWJlXCJcbiAgICB9LFxuICAgIHtcbiAgICAgIFwiZGVzY3JpcHRpb25cIjogXCInRG9sbGFyIGVzdGltYXRlIG9mIHBlc3RpY2lkZSB1c2UnXCIsXG4gICAgICBcImNsYXNzXCI6IFwiY3VzdG9tXCIsXG4gICAgICBcInVuaXRcIjogXCJ1cyRcIixcbiAgICAgIFwibWF0ZXJpYWxcIjogXCJwZXN0aWNpZGVzXCJcbiAgICB9LFxuICAgIHtcbiAgICAgIFwiZGVzY3JpcHRpb25cIjogXCInRG9sbGFyIGVzdGltYXRlIG9mIGZlcnRpbGl6ZXInXCIsXG4gICAgICBcImNsYXNzXCI6IFwiY3VzdG9tXCIsXG4gICAgICBcInVuaXRcIjogXCJ1cyRcIixcbiAgICAgIFwibWF0ZXJpYWxcIjogXCJmZXJ0aWxpemVyXCJcbiAgICB9LFxuICAgIHtcbiAgICAgIFwiZGVzY3JpcHRpb25cIjogXCInRG9sbGFyIGVzdGltYXRlIG9mIG90aGVyIGNvc3RzJ1wiLFxuICAgICAgXCJjbGFzc1wiOiBcImN1c3RvbVwiLFxuICAgICAgXCJ1bml0XCI6IFwidXMkXCIsXG4gICAgICBcIm1hdGVyaWFsXCI6IFwib3RoZXJcIlxuICAgIH0sXG4gICAge1xuICAgICAgXCJkZXNjcmlwdGlvblwiOiBcIidEb2xsYXIgZXN0aW1hdGUgb2YgY29uc3VsdGluZydcIixcbiAgICAgIFwiY2xhc3NcIjogXCJjdXN0b21cIixcbiAgICAgIFwidW5pdFwiOiBcInVzJFwiLFxuICAgICAgXCJtYXRlcmlhbFwiOiBcImN1c3RvbVwiXG4gICAgfSxcbiAgICB7XG4gICAgICBcImRlc2NyaXB0aW9uXCI6IFwiJ0RvbGxhciBmdWVsIGNvc3QgZXN0aW1hdGVzJ1wiLFxuICAgICAgXCJjbGFzc1wiOiBcImN1c3RvbVwiLFxuICAgICAgXCJ1bml0XCI6IFwidXMkXCIsXG4gICAgICBcIm1hdGVyaWFsXCI6IFwiZnVlbFwiXG4gICAgfSxcbiAgICB7XG4gICAgICBcImRlc2NyaXB0aW9uXCI6IFwiJ0lycmlnYXRpb24gaW4gQWNJbiBwZXIgQWMnXCIsXG4gICAgICBcImNsYXNzXCI6IFwiY3VzdG9tXCIsXG4gICAgICBcInVuaXRcIjogXCJbaW5fdXNdLlthY3JfdXNdXCIsXG4gICAgICBcIm1hdGVyaWFsXCI6IFwiaXJyaWdhdGlvblwiXG4gICAgfVxuICBdLFxuICBcImZhcm1cIjogW1xuICAgIHtcbiAgICAgIFwic2NoZWR1bGVcIjogW1xuICAgICAgICB7XG4gICAgICAgICAgXCJvcGVyYXRpb25cIjogXCJBbm51YWwgRXN0aW1hdGVcIixcbiAgICAgICAgICBcImR1cmF0aW9uXCI6IFwiMSB5ZWFyXCIsXG4gICAgICAgICAgXCJzdGFydFwiOiBcIjIwMTUtMDEtMDFcIlxuICAgICAgICB9XG4gICAgICBdLFxuICAgICAgXCJvcGVyYXRpb25zXCI6IFtcbiAgICAgICAge1xuICAgICAgICAgIFwibWF0ZXJpYWxzXCI6IFtcbiAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgXCJub3RlXCI6IFwiXCIsXG4gICAgICAgICAgICAgIFwidW5pdFwiOiBcInVzJFwiLFxuICAgICAgICAgICAgICBcImFtb3VudFwiOiAzMi43NSxcbiAgICAgICAgICAgICAgXCJtYXRlcmlhbFwiOiBcImZlcnRpbGl6ZXJcIlxuICAgICAgICAgICAgfSxcbiAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgXCJub3RlXCI6IFwiXCIsXG4gICAgICAgICAgICAgIFwidW5pdFwiOiBcInVzJFwiLFxuICAgICAgICAgICAgICBcImFtb3VudFwiOiA5Ny4wOSxcbiAgICAgICAgICAgICAgXCJtYXRlcmlhbFwiOiBcInBlc3RpY2lkZXNcIlxuICAgICAgICAgICAgfSxcbiAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgXCJub3RlXCI6IFwiXCIsXG4gICAgICAgICAgICAgIFwidW5pdFwiOiBcInVzJFwiLFxuICAgICAgICAgICAgICBcImFtb3VudFwiOiAxLFxuICAgICAgICAgICAgICBcIm1hdGVyaWFsXCI6IFwicmVwYWlyJmx1YmVcIlxuICAgICAgICAgICAgfSxcbiAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgXCJub3RlXCI6IFwiXCIsXG4gICAgICAgICAgICAgIFwidW5pdFwiOiBcInVzJFwiLFxuICAgICAgICAgICAgICBcImFtb3VudFwiOiAzODAuNTQsXG4gICAgICAgICAgICAgIFwibWF0ZXJpYWxcIjogXCJjdXN0b21cIlxuICAgICAgICAgICAgfSxcbiAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgXCJub3RlXCI6IFwiXCIsXG4gICAgICAgICAgICAgIFwidW5pdFwiOiBcInVzJFwiLFxuICAgICAgICAgICAgICBcImFtb3VudFwiOiAxMzMsXG4gICAgICAgICAgICAgIFwibWF0ZXJpYWxcIjogXCJvdGhlclwiXG4gICAgICAgICAgICB9LFxuICAgICAgICAgICAge1xuICAgICAgICAgICAgICBcIm5vdGVcIjogXCJcIixcbiAgICAgICAgICAgICAgXCJ1bml0XCI6IFwiaFwiLFxuICAgICAgICAgICAgICBcImFtb3VudFwiOiAwLjU4LFxuICAgICAgICAgICAgICBcIm1hdGVyaWFsXCI6IFwiTGFib3ItbWFjaGluZVwiXG4gICAgICAgICAgICB9LFxuICAgICAgICAgICAge1xuICAgICAgICAgICAgICBcIm5vdGVcIjogXCJcIixcbiAgICAgICAgICAgICAgXCJ1bml0XCI6IFwiaFwiLFxuICAgICAgICAgICAgICBcImFtb3VudFwiOiAxLjgyLFxuICAgICAgICAgICAgICBcIm1hdGVyaWFsXCI6IFwiTGFib3ItbWFudWFsXCJcbiAgICAgICAgICAgIH0sXG4gICAgICAgICAgICB7XG4gICAgICAgICAgICAgIFwibm90ZVwiOiBcIlwiLFxuICAgICAgICAgICAgICBcInVuaXRcIjogXCJbaW5fdXNdLlthY3JfdXNdXCIsXG4gICAgICAgICAgICAgIFwiYW1vdW50XCI6IDQuNSxcbiAgICAgICAgICAgICAgXCJtYXRlcmlhbFwiOiBcImlycmlnYXRpb25cIlxuICAgICAgICAgICAgfSxcbiAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgXCJub3RlXCI6IFwiXCIsXG4gICAgICAgICAgICAgIFwidW5pdFwiOiBcIltnYWxfdXNdXCIsXG4gICAgICAgICAgICAgIFwiYW1vdW50XCI6IDEuMTUsXG4gICAgICAgICAgICAgIFwibWF0ZXJpYWxcIjogXCJmdWVsXCJcbiAgICAgICAgICAgIH1cbiAgICAgICAgICBdLFxuICAgICAgICAgIFwib3BlcmF0aW9uXCI6IFwiQW5udWFsIEVzdGltYXRlXCJcbiAgICAgICAgfVxuICAgICAgXSxcbiAgICAgIFwidW5pdFwiOiBcIlthY3JfdXNdXCIsXG4gICAgICBcInNpemVcIjogXCIxXCIsXG4gICAgICBcImNvbW1vZGl0eVwiOiBcIkFMRkFMRkFcIixcbiAgICAgIFwibG9jYXRpb25cIjogXCIwNlwiLFxuICAgICAgXCJmYXJtXCI6IFwiMDYvQUxGQUxGQVwiXG4gICAgfVxuICBdXG59XG4iLCJtb2R1bGUuZXhwb3J0cz17XG4gIFwicHJpY2VzXCI6IFtcbiAgICB7XG4gICAgICBcInVuaXRcIjogXCJ1cyQvdXMkXCIsXG4gICAgICBcInByaWNlXCI6IDEsXG4gICAgICBcIm1hdGVyaWFsXCI6IFwiZXN0aW1hdGVcIlxuICAgIH0sXG4gICAge1xuICAgICAgXCJ1bml0XCI6IFwidXMkL1tnYWxfdXNdXCIsXG4gICAgICBcInByaWNlXCI6IDIuNjgsXG4gICAgICBcIm1hdGVyaWFsXCI6IFwiZnVlbFwiXG4gICAgfSxcbiAgICB7XG4gICAgICBcInVuaXRcIjogXCJ1cyQvKFtpbl91c10uW2Fjcl91c10pXCIsXG4gICAgICBcInByaWNlXCI6IDExMi44NixcbiAgICAgIFwibWF0ZXJpYWxcIjogXCJpcnJpZ2F0aW9uXCJcbiAgICB9LFxuICAgIHtcbiAgICAgIFwidW5pdFwiOiBcInVzJC9oXCIsXG4gICAgICBcInByaWNlXCI6IDkuNDIsXG4gICAgICBcIm1hdGVyaWFsXCI6IFwiTGFib3ItbWFjaGluZVwiXG4gICAgfSxcbiAgICB7XG4gICAgICBcInVuaXRcIjogXCJ1cyQvaFwiLFxuICAgICAgXCJwcmljZVwiOiA3LjI1LFxuICAgICAgXCJtYXRlcmlhbFwiOiBcIkxhYm9yLW1hbnVhbFwiXG4gICAgfVxuICBdLFxuICBcIm1hdGVyaWFsc1wiOiBbXG4gICAge1xuICAgICAgXCJkZXNjcmlwdGlvblwiOiBcIk1hbnVhbCBMYWJvciAobWluaW11bSB3YWdlKVwiLFxuICAgICAgXCJjbGFzc1wiOiBcImxhYm9yXCIsXG4gICAgICBcInVuaXRcIjogXCJoXCIsXG4gICAgICBcIm1hdGVyaWFsXCI6IFwiTGFib3ItbWFjaGluZVwiXG4gICAgfSxcbiAgICB7XG4gICAgICBcImRlc2NyaXB0aW9uXCI6IFwiTWFjaGluZSBMYWJvciAoJTEzMCBvZiBtaW5pbXVtKVwiLFxuICAgICAgXCJjbGFzc1wiOiBcImxhYm9yXCIsXG4gICAgICBcInVuaXRcIjogXCJoXCIsXG4gICAgICBcIm1hdGVyaWFsXCI6IFwiTGFib3ItbWFudWFsXCJcbiAgICB9LFxuICAgIHtcbiAgICAgIFwiZGVzY3JpcHRpb25cIjogXCJEb2xsYXIgZXN0aW1hdGVcIixcbiAgICAgIFwiY2xhc3NcIjogXCJjdXN0b21cIixcbiAgICAgIFwidW5pdFwiOiBcInVzJFwiLFxuICAgICAgXCJtYXRlcmlhbFwiOiBcImVzdGltYXRlXCJcbiAgICB9LFxuICAgIHtcbiAgICAgIFwiZGVzY3JpcHRpb25cIjogXCJJcnJpZ2F0aW9uIGluIEFjSW4gcGVyIEFjXCIsXG4gICAgICBcImNsYXNzXCI6IFwiY3VzdG9tXCIsXG4gICAgICBcInVuaXRcIjogXCJbaW5fdXNdLlthY3JfdXNdXCIsXG4gICAgICBcIm1hdGVyaWFsXCI6IFwiaXJyaWdhdGlvblwiXG4gICAgfSxcbiAgICB7XG4gICAgICBcImRlc2NyaXB0aW9uXCI6IFwiRnVlbCBmb3IgRXF1aXBtZW50XCIsXG4gICAgICBcImNsYXNzXCI6IFwiZnVlbFwiLFxuICAgICAgXCJ1bml0XCI6IFwiW2dhbF91c11cIixcbiAgICAgIFwibWF0ZXJpYWxcIjogXCJmdWVsXCJcbiAgICB9XG4gIF0sXG4gIFwiZmFybVwiOiBbXG4gICAge1xuICAgICAgXCJzY2hlZHVsZVwiOiBbXG4gICAgICAgIHtcbiAgICAgICAgICBcIm9wZXJhdGlvblwiOiBcIkFubnVhbCBFc3RpbWF0ZVwiLFxuICAgICAgICAgIFwiZHVyYXRpb25cIjogXCIxIHllYXJcIixcbiAgICAgICAgICBcInN0YXJ0XCI6IFwiMjAxNS0wMS0wMVwiXG4gICAgICAgIH1cbiAgICAgIF0sXG4gICAgICBcIm9wZXJhdGlvbnNcIjogW1xuICAgICAgICB7XG4gICAgICAgICAgXCJtYXRlcmlhbHNcIjogW1xuICAgICAgICAgICAge1xuICAgICAgICAgICAgICBcIm5vdGVcIjogXCJyZXBhaXImbHViZVwiLFxuICAgICAgICAgICAgICBcInVuaXRcIjogXCJ1cyRcIixcbiAgICAgICAgICAgICAgXCJhbW91bnRcIjogMSxcbiAgICAgICAgICAgICAgXCJtYXRlcmlhbFwiOiBcImVzdGltYXRlXCJcbiAgICAgICAgICAgIH0sXG4gICAgICAgICAgICB7XG4gICAgICAgICAgICAgIFwibm90ZVwiOiBcImZlcnRpbGl6ZXJcIixcbiAgICAgICAgICAgICAgXCJ1bml0XCI6IFwidXMkXCIsXG4gICAgICAgICAgICAgIFwiYW1vdW50XCI6IDMyLjc1LFxuICAgICAgICAgICAgICBcIm1hdGVyaWFsXCI6IFwiZXN0aW1hdGVcIlxuICAgICAgICAgICAgfSxcbiAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgXCJub3RlXCI6IFwicGVzdGljaWRlc1wiLFxuICAgICAgICAgICAgICBcInVuaXRcIjogXCJ1cyRcIixcbiAgICAgICAgICAgICAgXCJhbW91bnRcIjogOTcuMDksXG4gICAgICAgICAgICAgIFwibWF0ZXJpYWxcIjogXCJlc3RpbWF0ZVwiXG4gICAgICAgICAgICB9LFxuICAgICAgICAgICAge1xuICAgICAgICAgICAgICBcIm5vdGVcIjogXCJvdGhlclwiLFxuICAgICAgICAgICAgICBcInVuaXRcIjogXCJ1cyRcIixcbiAgICAgICAgICAgICAgXCJhbW91bnRcIjogMTMzLFxuICAgICAgICAgICAgICBcIm1hdGVyaWFsXCI6IFwiZXN0aW1hdGVcIlxuICAgICAgICAgICAgfSxcbiAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgXCJub3RlXCI6IFwiY3VzdG9tXCIsXG4gICAgICAgICAgICAgIFwidW5pdFwiOiBcInVzJFwiLFxuICAgICAgICAgICAgICBcImFtb3VudFwiOiAzODAuNTQsXG4gICAgICAgICAgICAgIFwibWF0ZXJpYWxcIjogXCJlc3RpbWF0ZVwiXG4gICAgICAgICAgICB9LFxuICAgICAgICAgICAge1xuICAgICAgICAgICAgICBcIm5vdGVcIjogXCJcIixcbiAgICAgICAgICAgICAgXCJ1bml0XCI6IFwiW2dhbF91c11cIixcbiAgICAgICAgICAgICAgXCJhbW91bnRcIjogMS4xNSxcbiAgICAgICAgICAgICAgXCJtYXRlcmlhbFwiOiBcImZ1ZWxcIlxuICAgICAgICAgICAgfSxcbiAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgXCJub3RlXCI6IFwiXCIsXG4gICAgICAgICAgICAgIFwidW5pdFwiOiBcIltpbl91c10uW2Fjcl91c11cIixcbiAgICAgICAgICAgICAgXCJhbW91bnRcIjogNC41LFxuICAgICAgICAgICAgICBcIm1hdGVyaWFsXCI6IFwiaXJyaWdhdGlvblwiXG4gICAgICAgICAgICB9LFxuICAgICAgICAgICAge1xuICAgICAgICAgICAgICBcIm5vdGVcIjogXCJcIixcbiAgICAgICAgICAgICAgXCJ1bml0XCI6IFwiaFwiLFxuICAgICAgICAgICAgICBcImFtb3VudFwiOiAwLjU4LFxuICAgICAgICAgICAgICBcIm1hdGVyaWFsXCI6IFwiTGFib3ItbWFjaGluZVwiXG4gICAgICAgICAgICB9LFxuICAgICAgICAgICAge1xuICAgICAgICAgICAgICBcIm5vdGVcIjogXCJcIixcbiAgICAgICAgICAgICAgXCJ1bml0XCI6IFwiaFwiLFxuICAgICAgICAgICAgICBcImFtb3VudFwiOiAxLjgyLFxuICAgICAgICAgICAgICBcIm1hdGVyaWFsXCI6IFwiTGFib3ItbWFudWFsXCJcbiAgICAgICAgICAgIH1cbiAgICAgICAgICBdLFxuICAgICAgICAgIFwib3BlcmF0aW9uXCI6IFwiQW5udWFsIEVzdGltYXRlXCJcbiAgICAgICAgfVxuICAgICAgXSxcbiAgICAgIFwidW5pdFwiOiBcIlthY3JfdXNdXCIsXG4gICAgICBcInNpemVcIjogXCIxXCIsXG4gICAgICBcImNvbW1vZGl0eVwiOiBcIkFMRkFMRkFcIixcbiAgICAgIFwibG9jYXRpb25cIjogXCIwNlwiLFxuICAgICAgXCJmYXJtXCI6IFwiMDYvQUxGQUxGQVwiXG4gICAgfVxuICBdXG59XG4iLCJtb2R1bGUuZXhwb3J0cz17XG4gICAgXCJhcHBsaWNhdGlvblwiOlwiZmFybS1idWRnZXRzXCJcbn1cbiIsIm1vZHVsZS5leHBvcnRzPXtcbiAgXCJwcmljZXNcIjogW1xuICAgIHtcbiAgICAgIFwidW5pdFwiOiBcInVzJC9bcXRfdXNdXCIsXG4gICAgICBcInByaWNlXCI6IDUsXG4gICAgICBcIm1hdGVyaWFsXCI6IFwiMiw0LURcIlxuICAgIH0sXG4gICAge1xuICAgICAgXCJ1bml0XCI6IFwidXMkL2hcIixcbiAgICAgIFwicHJpY2VcIjogOTAsXG4gICAgICBcIm1hdGVyaWFsXCI6IFwiQ2hhbGxlbmdlciBUcmFjdG9yLS1DYXBpdG9sIENvc3RcIlxuICAgIH0sXG4gICAge1xuICAgICAgXCJ1bml0XCI6IFwidXMkL2hcIixcbiAgICAgIFwicHJpY2VcIjogOTAsXG4gICAgICBcIm1hdGVyaWFsXCI6IFwiU2VtaS1UcmFjdG9yIHRyYWlsZXItLUNhcGl0b2wgQ29zdFwiXG4gICAgfSxcbiAgICB7XG4gICAgICBcInVuaXRcIjogXCJ1cyQvaFwiLFxuICAgICAgXCJwcmljZVwiOiA5MCxcbiAgICAgIFwibWF0ZXJpYWxcIjogXCJGUiA2MDgwIEZILS1DYXBpdG9sIENvc3RcIlxuICAgIH0sXG4gICAge1xuICAgICAgXCJ1bml0XCI6IFwidXMkL2hcIixcbiAgICAgIFwicHJpY2VcIjogOTAsXG4gICAgICBcIm1hdGVyaWFsXCI6IFwiVGFuZGVtIEF4bGUgVHJ1Y2stLUNhcGl0b2wgQ29zdFwiXG4gICAgfSxcbiAgICB7XG4gICAgICBcInVuaXRcIjogXCJ1cyQvaFwiLFxuICAgICAgXCJwcmljZVwiOiAxNSxcbiAgICAgIFwibWF0ZXJpYWxcIjogXCJDb29sZXIvdmFuLS1DYXBpdG9sIENvc3RcIlxuICAgIH0sXG4gICAge1xuICAgICAgXCJ1bml0XCI6IFwidXMkL2hcIixcbiAgICAgIFwicHJpY2VcIjogMzUsXG4gICAgICBcIm1hdGVyaWFsXCI6IFwiQ2hhbGxlbmdlciBUcmFjdG9yLS1MYWJvclwiXG4gICAgfSxcbiAgICB7XG4gICAgICBcInVuaXRcIjogXCJ1cyQvaFwiLFxuICAgICAgXCJwcmljZVwiOiAzNSxcbiAgICAgIFwibWF0ZXJpYWxcIjogXCJGUiA2MDgwIEZILS1MYWJvclwiXG4gICAgfSxcbiAgICB7XG4gICAgICBcInVuaXRcIjogXCJ1cyQvaFwiLFxuICAgICAgXCJwcmljZVwiOiAzNSxcbiAgICAgIFwibWF0ZXJpYWxcIjogXCJUYW5kZW0gQXhsZSBUcnVjay0tTGFib3JcIlxuICAgIH0sXG4gICAge1xuICAgICAgXCJ1bml0XCI6IFwidXMkL2hcIixcbiAgICAgIFwicHJpY2VcIjogMzUsXG4gICAgICBcIm1hdGVyaWFsXCI6IFwiU2VtaS1UcmFjdG9yIHRyYWlsZXItLUxhYm9yXCJcbiAgICB9LFxuICAgIHtcbiAgICAgIFwidW5pdFwiOiBcInVzJC9oXCIsXG4gICAgICBcInByaWNlXCI6IDEwLFxuICAgICAgXCJtYXRlcmlhbFwiOiBcIkNvb2xlci92YW4tLUxhYm9yXCJcbiAgICB9LFxuICAgIHtcbiAgICAgIFwidW5pdFwiOiBcInVzJC9oXCIsXG4gICAgICBcInByaWNlXCI6IDEuMixcbiAgICAgIFwibWF0ZXJpYWxcIjogXCJDb29sZXIvdmFuXCJcbiAgICB9LFxuICAgIHtcbiAgICAgIFwidW5pdFwiOiBcInVzJC9bZ2FsX3VzXVwiLFxuICAgICAgXCJwcmljZVwiOiAyLjgxLFxuICAgICAgXCJtYXRlcmlhbFwiOiBcIkVxdWlwbWVudCBGdWVsXCJcbiAgICB9LFxuICAgIHtcbiAgICAgIFwidW5pdFwiOiBcInVzJC9oXCIsXG4gICAgICBcInByaWNlXCI6IDMwLFxuICAgICAgXCJtYXRlcmlhbFwiOiBcIkZSIDYwODAgRkhcIlxuICAgIH0sXG4gICAge1xuICAgICAgXCJ1bml0XCI6IFwidXMkL1txdF91c11cIixcbiAgICAgIFwicHJpY2VcIjogNCxcbiAgICAgIFwibWF0ZXJpYWxcIjogXCJHbHlwaG9zYXRlXCJcbiAgICB9LFxuICAgIHtcbiAgICAgIFwidW5pdFwiOiBcInVzJC9bcXRfdXNdXCIsXG4gICAgICBcInByaWNlXCI6IDMwLFxuICAgICAgXCJtYXRlcmlhbFwiOiBcIkdvYWwgMlhMXCJcbiAgICB9LFxuICAgIHtcbiAgICAgIFwidW5pdFwiOiBcInVzJC9oXCIsXG4gICAgICBcInByaWNlXCI6IDE3LFxuICAgICAgXCJtYXRlcmlhbFwiOiBcIkxhYm9yZXJcIlxuICAgIH0sXG4gICAge1xuICAgICAgXCJ1bml0XCI6IFwidXMkLzFcIixcbiAgICAgIFwicHJpY2VcIjogMC4wOCxcbiAgICAgIFwibWF0ZXJpYWxcIjogXCJQb3BsYXIgQ3V0dGluZ1wiXG4gICAgfSxcbiAgICB7XG4gICAgICBcInVuaXRcIjogXCJ1cyQvaFwiLFxuICAgICAgXCJwcmljZVwiOiAyNSxcbiAgICAgIFwibWF0ZXJpYWxcIjogXCJTdXBwb3J0IFRydWNrLS1DYXBpdG9sIENvc3RcIlxuICAgIH0sXG4gICAge1xuICAgICAgXCJ1bml0XCI6IFwidXMkL2hcIixcbiAgICAgIFwicHJpY2VcIjogMzAsXG4gICAgICBcIm1hdGVyaWFsXCI6IFwiU3VwcG9ydCBUcnVjay0tTGFib3JcIlxuICAgIH0sXG4gICAge1xuICAgICAgXCJ1bml0XCI6IFwidXMkL2hcIixcbiAgICAgIFwicHJpY2VcIjogNTAsXG4gICAgICBcIm1hdGVyaWFsXCI6IFwiVHJhY3RvciBhbmQgc3ByYXllclwiXG4gICAgfSxcbiAgICB7XG4gICAgICBcInVuaXRcIjogXCJ1cyQvW3F0X3VzXVwiLFxuICAgICAgXCJwcmljZVwiOiA3LjUsXG4gICAgICBcIm1hdGVyaWFsXCI6IFwiVHJpZmx1cmFsaW5cIlxuICAgIH1cbiAgXSxcbiAgXCJtYXRlcmlhbHNcIjogW1xuICAgIHtcbiAgICAgIFwiY2xhc3NcIjogXCJmZXJ0aWxpemVyXCIsXG4gICAgICBcInVuaXRcIjogXCJbcXRfdXNdXCIsXG4gICAgICBcIm1hdGVyaWFsXCI6IFwiMiw0LURcIlxuICAgIH0sXG4gICAge1xuICAgICAgXCJyZXF1aXJlc1wiOiBbXG4gICAgICAgIHtcbiAgICAgICAgICBcInVuaXRcIjogXCJbZ2FsX3VzXVwiLFxuICAgICAgICAgIFwiYW1vdW50XCI6IDE5LjM2LFxuICAgICAgICAgIFwibWF0ZXJpYWxcIjogXCJFcXVpcG1lbnQgRnVlbFwiXG4gICAgICAgIH0sXG4gICAgICAgIHtcbiAgICAgICAgICBcInVuaXRcIjogXCJoXCIsXG4gICAgICAgICAgXCJhbW91bnRcIjogMSxcbiAgICAgICAgICBcIm1hdGVyaWFsXCI6IFwiQ2hhbGxlbmdlciBUcmFjdG9yLS1DYXBpdG9sIENvc3RcIlxuICAgICAgICB9LFxuICAgICAgICB7XG4gICAgICAgICAgXCJ1bml0XCI6IFwiaFwiLFxuICAgICAgICAgIFwiYW1vdW50XCI6IDEsXG4gICAgICAgICAgXCJtYXRlcmlhbFwiOiBcIkNoYWxsZW5nZXIgVHJhY3Rvci0tTGFib3JcIlxuICAgICAgICB9XG4gICAgICBdLFxuICAgICAgXCJjbGFzc1wiOiBcImVxdWlwbWVudFwiLFxuICAgICAgXCJ1bml0XCI6IFwiaFwiLFxuICAgICAgXCJtYXRlcmlhbFwiOiBcIkNoYWxsZW5nZXIgVHJhY3RvclwiXG4gICAgfSxcbiAgICB7XG4gICAgICBcInJlcXVpcmVzXCI6IFtcbiAgICAgICAge1xuICAgICAgICAgIFwidW5pdFwiOiBcImhcIixcbiAgICAgICAgICBcImFtb3VudFwiOiAxLFxuICAgICAgICAgIFwibWF0ZXJpYWxcIjogXCJDb29sZXIvdmFuLS1MYWJvclwiXG4gICAgICAgIH0sXG4gICAgICAgIHtcbiAgICAgICAgICBcInVuaXRcIjogXCJoXCIsXG4gICAgICAgICAgXCJhbW91bnRcIjogMSxcbiAgICAgICAgICBcIm1hdGVyaWFsXCI6IFwiQ29vbGVyL3Zhbi0tQ2FwaXRvbCBDb3N0XCJcbiAgICAgICAgfSxcbiAgICAgICAge1xuICAgICAgICAgIFwidW5pdFwiOiBcIltnYWxfdXNdXCIsXG4gICAgICAgICAgXCJhbW91bnRcIjogMC45NixcbiAgICAgICAgICBcIm1hdGVyaWFsXCI6IFwiRXF1aXBtZW50IEZ1ZWxcIlxuICAgICAgICB9XG4gICAgICBdLFxuICAgICAgXCJjbGFzc1wiOiBcImVxdWlwbWVudFwiLFxuICAgICAgXCJ1bml0XCI6IFwiaFwiLFxuICAgICAgXCJtYXRlcmlhbFwiOiBcIkNvb2xlci92YW5cIlxuICAgIH0sXG4gICAge1xuICAgICAgXCJyZXF1aXJlc1wiOiBbXG4gICAgICAgIHtcbiAgICAgICAgICBcInVuaXRcIjogXCJbZ2FsX3VzXVwiLFxuICAgICAgICAgIFwiYW1vdW50XCI6IDEzLjIsXG4gICAgICAgICAgXCJtYXRlcmlhbFwiOiBcIkVxdWlwbWVudCBGdWVsXCJcbiAgICAgICAgfSxcbiAgICAgICAge1xuICAgICAgICAgIFwidW5pdFwiOiBcImhcIixcbiAgICAgICAgICBcImFtb3VudFwiOiAxLFxuICAgICAgICAgIFwibWF0ZXJpYWxcIjogXCJGUiA2MDgwIEZILS1MYWJvclwiXG4gICAgICAgIH0sXG4gICAgICAgIHtcbiAgICAgICAgICBcInVuaXRcIjogXCJoXCIsXG4gICAgICAgICAgXCJhbW91bnRcIjogMSxcbiAgICAgICAgICBcIm1hdGVyaWFsXCI6IFwiRlIgNjA4MCBGSC0tQ2FwaXRvbCBDb3N0XCJcbiAgICAgICAgfVxuICAgICAgXSxcbiAgICAgIFwiY2xhc3NcIjogXCJlcXVpcG1lbnRcIixcbiAgICAgIFwidW5pdFwiOiBcImhcIixcbiAgICAgIFwibWF0ZXJpYWxcIjogXCJGUiA2MDgwIEZIXCJcbiAgICB9LFxuICAgIHtcbiAgICAgIFwiY2xhc3NcIjogXCJwZXN0aWNpZGVcIixcbiAgICAgIFwidW5pdFwiOiBcIltxdF91c11cIixcbiAgICAgIFwibWF0ZXJpYWxcIjogXCJHbHlwaG9zYXRlXCJcbiAgICB9LFxuICAgIHtcbiAgICAgIFwiY2xhc3NcIjogXCJwZXN0aWNpZGVcIixcbiAgICAgIFwidW5pdFwiOiBcIltxdF91c11cIixcbiAgICAgIFwibWF0ZXJpYWxcIjogXCJHb2FsIDJYTFwiXG4gICAgfSxcbiAgICB7XG4gICAgICBcInJlcXVpcmVzXCI6IFtcbiAgICAgICAge1xuICAgICAgICAgIFwidW5pdFwiOiBcIltxdF91c11cIixcbiAgICAgICAgICBcImFtb3VudFwiOiAyMDAsXG4gICAgICAgICAgXCJtYXRlcmlhbFwiOiBcIkdseXBob3NhdGVcIlxuICAgICAgICB9LFxuICAgICAgICB7XG4gICAgICAgICAgXCJ1bml0XCI6IFwiaFwiLFxuICAgICAgICAgIFwiYW1vdW50XCI6IDk2LFxuICAgICAgICAgIFwibWF0ZXJpYWxcIjogXCJMYWJvcmVyXCJcbiAgICAgICAgfVxuICAgICAgXSxcbiAgICAgIFwiZGVzY3JpcHRpb25cIjogXCJNYW51YWwgQXBwbGljYXRpb24gb2YgaGVyYmljaWRlXCIsXG4gICAgICBcImNsYXNzXCI6IFwiaGVyYmljaWRlXCIsXG4gICAgICBcInVuaXRcIjogXCIxMDAuW2Fjcl91c11cIixcbiAgICAgIFwibWF0ZXJpYWxcIjogXCJoZXJiaWNpZGUgLSBtYW51YWxcIlxuICAgIH0sXG4gICAge1xuICAgICAgXCJyZXF1aXJlc1wiOiBbXG4gICAgICAgIHtcbiAgICAgICAgICBcInVuaXRcIjogXCJoXCIsXG4gICAgICAgICAgXCJhbW91bnRcIjogMTkyLFxuICAgICAgICAgIFwibWF0ZXJpYWxcIjogXCJMYWJvcmVyXCJcbiAgICAgICAgfVxuICAgICAgXSxcbiAgICAgIFwiY2xhc3NcIjogXCJsYWJvclwiLFxuICAgICAgXCJ1bml0XCI6IFwiMTAwLlthY3JfdXNdXCIsXG4gICAgICBcIm1hdGVyaWFsXCI6IFwiaG9laW5nXCJcbiAgICB9LFxuICAgIHtcbiAgICAgIFwiY2xhc3NcIjogXCJsYWJvclwiLFxuICAgICAgXCJ1bml0XCI6IFwiaFwiLFxuICAgICAgXCJtYXRlcmlhbFwiOiBcIkxhYm9yZXJcIlxuICAgIH0sXG4gICAge1xuICAgICAgXCJyZXF1aXJlc1wiOiBbXG4gICAgICAgIHtcbiAgICAgICAgICBcInVuaXRcIjogXCJbZ2FsX3VzXVwiLFxuICAgICAgICAgIFwiYW1vdW50XCI6IDEzLjIsXG4gICAgICAgICAgXCJtYXRlcmlhbFwiOiBcIkVxdWlwbWVudCBGdWVsXCJcbiAgICAgICAgfSxcbiAgICAgICAge1xuICAgICAgICAgIFwidW5pdFwiOiBcImhcIixcbiAgICAgICAgICBcImFtb3VudFwiOiAxLFxuICAgICAgICAgIFwibWF0ZXJpYWxcIjogXCJMYXJnZSBUcmFjdG9yLS1DYXBpdG9sIENvc3RcIlxuICAgICAgICB9LFxuICAgICAgICB7XG4gICAgICAgICAgXCJ1bml0XCI6IFwiaFwiLFxuICAgICAgICAgIFwiYW1vdW50XCI6IDEsXG4gICAgICAgICAgXCJtYXRlcmlhbFwiOiBcIkxhcmdlIFRyYWN0b3ItLUxhYm9yXCJcbiAgICAgICAgfVxuICAgICAgXSxcbiAgICAgIFwiY2xhc3NcIjogXCJlcXVpcG1lbnRcIixcbiAgICAgIFwidW5pdFwiOiBcImhcIixcbiAgICAgIFwibWF0ZXJpYWxcIjogXCJMYXJnZSBUcmFjdG9yXCJcbiAgICB9LFxuICAgIHtcbiAgICAgIFwicmVxdWlyZXNcIjogW1xuICAgICAgICB7XG4gICAgICAgICAgXCJ1bml0XCI6IFwiaFwiLFxuICAgICAgICAgIFwiYW1vdW50XCI6IDEsXG4gICAgICAgICAgXCJtYXRlcmlhbFwiOiBcIk1pZC1zaXplIFRyYWN0b3ItLUNhcGl0b2wgQ29zdFwiXG4gICAgICAgIH0sXG4gICAgICAgIHtcbiAgICAgICAgICBcInVuaXRcIjogXCJoXCIsXG4gICAgICAgICAgXCJhbW91bnRcIjogMSxcbiAgICAgICAgICBcIm1hdGVyaWFsXCI6IFwiTWlkLXNpemUgVHJhY3Rvci0tTGFib3JcIlxuICAgICAgICB9LFxuICAgICAgICB7XG4gICAgICAgICAgXCJ1bml0XCI6IFwiW2dhbF91c11cIixcbiAgICAgICAgICBcImFtb3VudFwiOiAzLjk2LFxuICAgICAgICAgIFwibWF0ZXJpYWxcIjogXCJFcXVpcG1lbnQgRnVlbFwiXG4gICAgICAgIH1cbiAgICAgIF0sXG4gICAgICBcImNsYXNzXCI6IFwiZXF1aXBtZW50XCIsXG4gICAgICBcInVuaXRcIjogXCJoXCIsXG4gICAgICBcIm1hdGVyaWFsXCI6IFwiTWlkLXNpemUgVHJhY3RvclwiXG4gICAgfSxcbiAgICB7XG4gICAgICBcImRlc2NyaXB0aW9uXCI6IFwiUG9wbGFyIGN1dHRpbmcgZm9yIHBsYW50aW5nXCIsXG4gICAgICBcImNsYXNzXCI6IFwic2VlZFwiLFxuICAgICAgXCJ1bml0XCI6IFwiMVwiLFxuICAgICAgXCJtYXRlcmlhbFwiOiBcIlBvcGxhciBDdXR0aW5nXCJcbiAgICB9LFxuICAgIHtcbiAgICAgIFwicmVxdWlyZXNcIjogW1xuICAgICAgICB7XG4gICAgICAgICAgXCJ1bml0XCI6IFwiaFwiLFxuICAgICAgICAgIFwiYW1vdW50XCI6IDEsXG4gICAgICAgICAgXCJtYXRlcmlhbFwiOiBcIlNlbWktVHJhY3RvciB0cmFpbGVyLS1DYXBpdG9sIENvc3RcIlxuICAgICAgICB9LFxuICAgICAgICB7XG4gICAgICAgICAgXCJ1bml0XCI6IFwiW2dhbF91c11cIixcbiAgICAgICAgICBcImFtb3VudFwiOiA2LjUsXG4gICAgICAgICAgXCJtYXRlcmlhbFwiOiBcIkVxdWlwbWVudCBGdWVsXCJcbiAgICAgICAgfSxcbiAgICAgICAge1xuICAgICAgICAgIFwidW5pdFwiOiBcImhcIixcbiAgICAgICAgICBcImFtb3VudFwiOiAxLFxuICAgICAgICAgIFwibWF0ZXJpYWxcIjogXCJTZW1pLVRyYWN0b3IgdHJhaWxlci0tTGFib3JcIlxuICAgICAgICB9XG4gICAgICBdLFxuICAgICAgXCJjbGFzc1wiOiBcImVxdWlwbWVudFwiLFxuICAgICAgXCJ1bml0XCI6IFwiaFwiLFxuICAgICAgXCJtYXRlcmlhbFwiOiBcIlNlbWktVHJhY3RvciB0cmFpbGVyXCJcbiAgICB9LFxuICAgIHtcbiAgICAgIFwicmVxdWlyZXNcIjogW1xuICAgICAgICB7XG4gICAgICAgICAgXCJ1bml0XCI6IFwiW2dhbF91c11cIixcbiAgICAgICAgICBcImFtb3VudFwiOiAxLjk4LFxuICAgICAgICAgIFwibWF0ZXJpYWxcIjogXCJFcXVpcG1lbnQgRnVlbFwiXG4gICAgICAgIH0sXG4gICAgICAgIHtcbiAgICAgICAgICBcInVuaXRcIjogXCJoXCIsXG4gICAgICAgICAgXCJhbW91bnRcIjogMSxcbiAgICAgICAgICBcIm1hdGVyaWFsXCI6IFwiU21hbGwgVHJhY3Rvci0tTGFib3JcIlxuICAgICAgICB9LFxuICAgICAgICB7XG4gICAgICAgICAgXCJ1bml0XCI6IFwiaFwiLFxuICAgICAgICAgIFwiYW1vdW50XCI6IDEsXG4gICAgICAgICAgXCJtYXRlcmlhbFwiOiBcIlNtYWxsIFRyYWN0b3ItLUNhcGl0b2wgQ29zdFwiXG4gICAgICAgIH1cbiAgICAgIF0sXG4gICAgICBcImNsYXNzXCI6IFwiZXF1aXBtZW50XCIsXG4gICAgICBcInVuaXRcIjogXCJoXCIsXG4gICAgICBcIm1hdGVyaWFsXCI6IFwiU21hbGwgVHJhY3RvclwiXG4gICAgfSxcbiAgICB7XG4gICAgICBcInJlcXVpcmVzXCI6IFtcbiAgICAgICAge1xuICAgICAgICAgIFwidW5pdFwiOiBcImhcIixcbiAgICAgICAgICBcImFtb3VudFwiOiAxLFxuICAgICAgICAgIFwibWF0ZXJpYWxcIjogXCJTdXBwb3J0IFRydWNrLS1DYXBpdG9sIENvc3RcIlxuICAgICAgICB9LFxuICAgICAgICB7XG4gICAgICAgICAgXCJ1bml0XCI6IFwiaFwiLFxuICAgICAgICAgIFwiYW1vdW50XCI6IDEsXG4gICAgICAgICAgXCJtYXRlcmlhbFwiOiBcIlN1cHBvcnQgVHJ1Y2stLUxhYm9yXCJcbiAgICAgICAgfSxcbiAgICAgICAge1xuICAgICAgICAgIFwidW5pdFwiOiBcIltnYWxfdXNdXCIsXG4gICAgICAgICAgXCJhbW91bnRcIjogMS43NixcbiAgICAgICAgICBcIm1hdGVyaWFsXCI6IFwiRXF1aXBtZW50IEZ1ZWxcIlxuICAgICAgICB9XG4gICAgICBdLFxuICAgICAgXCJjbGFzc1wiOiBcImVxdWlwbWVudFwiLFxuICAgICAgXCJ1bml0XCI6IFwiaFwiLFxuICAgICAgXCJtYXRlcmlhbFwiOiBcIlN1cHBvcnQgVHJ1Y2tcIlxuICAgIH0sXG4gICAge1xuICAgICAgXCJyZXF1aXJlc1wiOiBbXG4gICAgICAgIHtcbiAgICAgICAgICBcInVuaXRcIjogXCJoXCIsXG4gICAgICAgICAgXCJhbW91bnRcIjogMSxcbiAgICAgICAgICBcIm1hdGVyaWFsXCI6IFwiVGFuZGVtIEF4bGUgVHJ1Y2stLUNhcGl0b2wgQ29zdFwiXG4gICAgICAgIH0sXG4gICAgICAgIHtcbiAgICAgICAgICBcInVuaXRcIjogXCJbZ2FsX3VzXVwiLFxuICAgICAgICAgIFwiYW1vdW50XCI6IDEzLjIsXG4gICAgICAgICAgXCJtYXRlcmlhbFwiOiBcIkVxdWlwbWVudCBGdWVsXCJcbiAgICAgICAgfSxcbiAgICAgICAge1xuICAgICAgICAgIFwidW5pdFwiOiBcImhcIixcbiAgICAgICAgICBcImFtb3VudFwiOiAxLFxuICAgICAgICAgIFwibWF0ZXJpYWxcIjogXCJUYW5kZW0gQXhsZSBUcnVjay0tTGFib3JcIlxuICAgICAgICB9XG4gICAgICBdLFxuICAgICAgXCJjbGFzc1wiOiBcImVxdWlwbWVudFwiLFxuICAgICAgXCJ1bml0XCI6IFwiaFwiLFxuICAgICAgXCJtYXRlcmlhbFwiOiBcIlRhbmRlbSBBeGxlIFRydWNrXCJcbiAgICB9LFxuICAgIHtcbiAgICAgIFwicmVxdWlyZXNcIjogW1xuICAgICAgICB7XG4gICAgICAgICAgXCJ1bml0XCI6IFwiW2dhbF91c11cIixcbiAgICAgICAgICBcImFtb3VudFwiOiAzLjk2LFxuICAgICAgICAgIFwibWF0ZXJpYWxcIjogXCJFcXVpcG1lbnQgRnVlbFwiXG4gICAgICAgIH0sXG4gICAgICAgIHtcbiAgICAgICAgICBcInVuaXRcIjogXCJoXCIsXG4gICAgICAgICAgXCJhbW91bnRcIjogMSxcbiAgICAgICAgICBcIm1hdGVyaWFsXCI6IFwiVHJhY3RvciBhbmQgc3ByYXllci0tTGFib3JcIlxuICAgICAgICB9XG4gICAgICBdLFxuICAgICAgXCJjbGFzc1wiOiBcImVxdWlwbWVudFwiLFxuICAgICAgXCJ1bml0XCI6IFwiaFwiLFxuICAgICAgXCJtYXRlcmlhbFwiOiBcIlRyYWN0b3IgYW5kIHNwcmF5ZXJcIlxuICAgIH0sXG4gICAge1xuICAgICAgXCJjbGFzc1wiOiBcInBlc3RpY2lkZVwiLFxuICAgICAgXCJ1bml0XCI6IFwiW3F0X3VzXVwiLFxuICAgICAgXCJtYXRlcmlhbFwiOiBcIlRyaWZsdXJhbGluXCJcbiAgICB9XG4gIF0sXG4gIFwiZmFybVwiOiBbXG4gICAge1xuICAgICAgXCJzY2hlZHVsZVwiOiBbXG4gICAgICAgIHtcbiAgICAgICAgICBcIm9wZXJhdGlvblwiOiBcInNpdGUgcHJlcFwiLFxuICAgICAgICAgIFwiZHVyYXRpb25cIjogXCIzIG1vbnNcIixcbiAgICAgICAgICBcInN0YXJ0XCI6IFwiMjAxNS0wNi0wMVwiXG4gICAgICAgIH0sXG4gICAgICAgIHtcbiAgICAgICAgICBcIm9wZXJhdGlvblwiOiBcInBsYW50aW5nXCIsXG4gICAgICAgICAgXCJkdXJhdGlvblwiOiBcIjEgbW9uXCIsXG4gICAgICAgICAgXCJzdGFydFwiOiBcIjIwMTUtMTAtMDFcIlxuICAgICAgICB9LFxuICAgICAgICB7XG4gICAgICAgICAgXCJvcGVyYXRpb25cIjogXCJjcm9wIGNhcmUgLSB5cjBcIixcbiAgICAgICAgICBcImR1cmF0aW9uXCI6IFwiMSB5ZWFyXCIsXG4gICAgICAgICAgXCJzdGFydFwiOiBcIjIwMTUtMTEtMDFcIlxuICAgICAgICB9LFxuICAgICAgICB7XG4gICAgICAgICAgXCJvcGVyYXRpb25cIjogXCJjcm9wIGNhcmUgLSB5cjFcIixcbiAgICAgICAgICBcImR1cmF0aW9uXCI6IFwiMSB5ZWFyXCIsXG4gICAgICAgICAgXCJzdGFydFwiOiBcIjIwMTYtMTEtMDFcIlxuICAgICAgICB9LFxuICAgICAgICB7XG4gICAgICAgICAgXCJ1bml0XCI6IFwiW3N0b25fdXNdL1thY3JfdXNdXCIsXG4gICAgICAgICAgXCJ5aWVsZFwiOiA5LFxuICAgICAgICAgIFwib3BlcmF0aW9uXCI6IFwiaGFydmVzdCAtIHlyMlwiLFxuICAgICAgICAgIFwiZHVyYXRpb25cIjogXCIxIG1vblwiLFxuICAgICAgICAgIFwic3RhcnRcIjogXCIyMDE3LTEwLTAxXCJcbiAgICAgICAgfSxcbiAgICAgICAge1xuICAgICAgICAgIFwib3BlcmF0aW9uXCI6IFwiY3JvcCBjYXJlIC0gcG9zdCBoYXJ2ZXN0XCIsXG4gICAgICAgICAgXCJkdXJhdGlvblwiOiBcIjEgeWVhclwiLFxuICAgICAgICAgIFwic3RhcnRcIjogXCIyMDE3LTExLTAxXCJcbiAgICAgICAgfSxcbiAgICAgICAge1xuICAgICAgICAgIFwib3BlcmF0aW9uXCI6IFwiY3JvcCBjYXJlIC0gZXN0YWJsaXNoZWRcIixcbiAgICAgICAgICBcImR1cmF0aW9uXCI6IFwiMSB5ZWFyXCIsXG4gICAgICAgICAgXCJzdGFydFwiOiBcIjIwMTgtMTEtMDFcIlxuICAgICAgICB9LFxuICAgICAgICB7XG4gICAgICAgICAgXCJvcGVyYXRpb25cIjogXCJjcm9wIGNhcmUgLSBlc3RhYmxpc2hlZFwiLFxuICAgICAgICAgIFwiZHVyYXRpb25cIjogXCIxIHllYXJcIixcbiAgICAgICAgICBcInN0YXJ0XCI6IFwiMjAxOS0xMS0wMVwiXG4gICAgICAgIH0sXG4gICAgICAgIHtcbiAgICAgICAgICBcInVuaXRcIjogXCJbc3Rvbl91c10vW2Fjcl91c11cIixcbiAgICAgICAgICBcInlpZWxkXCI6IDI3LjUsXG4gICAgICAgICAgXCJvcGVyYXRpb25cIjogXCJoYXJ2ZXN0IC0gZXN0YWJsaXNoZWRcIixcbiAgICAgICAgICBcImR1cmF0aW9uXCI6IFwiMSBtb25cIixcbiAgICAgICAgICBcInN0YXJ0XCI6IFwiMjAyMC0xMC0wMVwiXG4gICAgICAgIH0sXG4gICAgICAgIHtcbiAgICAgICAgICBcIm9wZXJhdGlvblwiOiBcImNyb3AgY2FyZSAtIHBvc3QgaGFydmVzdFwiLFxuICAgICAgICAgIFwiZHVyYXRpb25cIjogXCIxIHllYXJcIixcbiAgICAgICAgICBcInN0YXJ0XCI6IFwiMjAyMS0xMS0wMVwiXG4gICAgICAgIH0sXG4gICAgICAgIHtcbiAgICAgICAgICBcIm9wZXJhdGlvblwiOiBcImNyb3AgY2FyZSAtIGVzdGFibGlzaGVkXCIsXG4gICAgICAgICAgXCJkdXJhdGlvblwiOiBcIjEgeWVhclwiLFxuICAgICAgICAgIFwic3RhcnRcIjogXCIyMDIyLTExLTAxXCJcbiAgICAgICAgfSxcbiAgICAgICAge1xuICAgICAgICAgIFwib3BlcmF0aW9uXCI6IFwiY3JvcCBjYXJlIC0gZXN0YWJsaXNoZWRcIixcbiAgICAgICAgICBcImR1cmF0aW9uXCI6IFwiMSB5ZWFyXCIsXG4gICAgICAgICAgXCJzdGFydFwiOiBcIjIwMjMtMTEtMDFcIlxuICAgICAgICB9LFxuICAgICAgICB7XG4gICAgICAgICAgXCJ1bml0XCI6IFwiW3N0b25fdXNdL1thY3JfdXNdXCIsXG4gICAgICAgICAgXCJ5aWVsZFwiOiAyNy41LFxuICAgICAgICAgIFwib3BlcmF0aW9uXCI6IFwiaGFydmVzdCAtIGVzdGFibGlzaGVkXCIsXG4gICAgICAgICAgXCJkdXJhdGlvblwiOiBcIjEgbW9uXCIsXG4gICAgICAgICAgXCJzdGFydFwiOiBcIjIwMjMtMTAtMDFcIlxuICAgICAgICB9LFxuICAgICAgICB7XG4gICAgICAgICAgXCJvcGVyYXRpb25cIjogXCJjcm9wIGNhcmUgLSBwb3N0IGhhcnZlc3RcIixcbiAgICAgICAgICBcImR1cmF0aW9uXCI6IFwiMSB5ZWFyXCIsXG4gICAgICAgICAgXCJzdGFydFwiOiBcIjIwMjUtMTEtMDFcIlxuICAgICAgICB9LFxuICAgICAgICB7XG4gICAgICAgICAgXCJvcGVyYXRpb25cIjogXCJjcm9wIGNhcmUgLSBlc3RhYmxpc2hlZFwiLFxuICAgICAgICAgIFwiZHVyYXRpb25cIjogXCIxIHllYXJcIixcbiAgICAgICAgICBcInN0YXJ0XCI6IFwiMjAyNi0xMS0wMVwiXG4gICAgICAgIH0sXG4gICAgICAgIHtcbiAgICAgICAgICBcIm9wZXJhdGlvblwiOiBcImNyb3AgY2FyZSAtIGVzdGFibGlzaGVkXCIsXG4gICAgICAgICAgXCJkdXJhdGlvblwiOiBcIjEgeWVhclwiLFxuICAgICAgICAgIFwic3RhcnRcIjogXCIyMDI3LTExLTAxXCJcbiAgICAgICAgfSxcbiAgICAgICAge1xuICAgICAgICAgIFwidW5pdFwiOiBcIltzdG9uX3VzXS9bYWNyX3VzXVwiLFxuICAgICAgICAgIFwieWllbGRcIjogMjcuNSxcbiAgICAgICAgICBcIm9wZXJhdGlvblwiOiBcImhhcnZlc3QgLSBlc3RhYmxpc2hlZFwiLFxuICAgICAgICAgIFwiZHVyYXRpb25cIjogXCIxIG1vblwiLFxuICAgICAgICAgIFwic3RhcnRcIjogXCIyMDI4LTEwLTAxXCJcbiAgICAgICAgfSxcbiAgICAgICAge1xuICAgICAgICAgIFwib3BlcmF0aW9uXCI6IFwiY3JvcCBjYXJlIC0gcG9zdCBoYXJ2ZXN0XCIsXG4gICAgICAgICAgXCJkdXJhdGlvblwiOiBcIjEgeWVhclwiLFxuICAgICAgICAgIFwic3RhcnRcIjogXCIyMDI5LTExLTAxXCJcbiAgICAgICAgfSxcbiAgICAgICAge1xuICAgICAgICAgIFwib3BlcmF0aW9uXCI6IFwiY3JvcCBjYXJlIC0gZXN0YWJsaXNoZWRcIixcbiAgICAgICAgICBcImR1cmF0aW9uXCI6IFwiMSB5ZWFyXCIsXG4gICAgICAgICAgXCJzdGFydFwiOiBcIjIwMzAtMTEtMDFcIlxuICAgICAgICB9LFxuICAgICAgICB7XG4gICAgICAgICAgXCJvcGVyYXRpb25cIjogXCJjcm9wIGNhcmUgLSBlc3RhYmxpc2hlZFwiLFxuICAgICAgICAgIFwiZHVyYXRpb25cIjogXCIxIHllYXJcIixcbiAgICAgICAgICBcInN0YXJ0XCI6IFwiMjAzMS0xMS0wMVwiXG4gICAgICAgIH0sXG4gICAgICAgIHtcbiAgICAgICAgICBcInVuaXRcIjogXCJbc3Rvbl91c10vW2Fjcl91c11cIixcbiAgICAgICAgICBcInlpZWxkXCI6IDI3LjUsXG4gICAgICAgICAgXCJvcGVyYXRpb25cIjogXCJoYXJ2ZXN0IC0gZXN0YWJsaXNoZWRcIixcbiAgICAgICAgICBcImR1cmF0aW9uXCI6IFwiMSBtb25cIixcbiAgICAgICAgICBcInN0YXJ0XCI6IFwiMjAzMi0xMC0wMVwiXG4gICAgICAgIH0sXG4gICAgICAgIHtcbiAgICAgICAgICBcIm9wZXJhdGlvblwiOiBcInJlc3RvcmF0aW9uXCIsXG4gICAgICAgICAgXCJkdXJhdGlvblwiOiBcIjMgbW9uc1wiLFxuICAgICAgICAgIFwic3RhcnRcIjogXCIyMDMyLTExLTAxXCJcbiAgICAgICAgfVxuICAgICAgXSxcbiAgICAgIFwib3BlcmF0aW9uc1wiOiBbXG4gICAgICAgIHtcbiAgICAgICAgICBcIm1hdGVyaWFsc1wiOiBbXG4gICAgICAgICAgICB7XG4gICAgICAgICAgICAgIFwidW5pdFwiOiBcIlthY3JfdXNdXCIsXG4gICAgICAgICAgICAgIFwiYW1vdW50XCI6IDE1MCxcbiAgICAgICAgICAgICAgXCJtYXRlcmlhbFwiOiBcImhvZWluZ1wiXG4gICAgICAgICAgICB9LFxuICAgICAgICAgICAge1xuICAgICAgICAgICAgICBcInVuaXRcIjogXCJbYWNyX3VzXVwiLFxuICAgICAgICAgICAgICBcImFtb3VudFwiOiAxMDAsXG4gICAgICAgICAgICAgIFwibWF0ZXJpYWxcIjogXCJoZXJiaWNpZGUgLSBtYW51YWxcIlxuICAgICAgICAgICAgfVxuICAgICAgICAgIF0sXG4gICAgICAgICAgXCJvcGVyYXRpb25cIjogXCJjcm9wIGNhcmUgLSBlc3RhYmxpc2hlZFwiXG4gICAgICAgIH0sXG4gICAgICAgIHtcbiAgICAgICAgICBcIm1hdGVyaWFsc1wiOiBbXG4gICAgICAgICAgICB7XG4gICAgICAgICAgICAgIFwibm90ZVwiOiBcIlRyYW5zcG9ydCBOdXJzZXJ5IHRvIGZpZWxkXCIsXG4gICAgICAgICAgICAgIFwidW5pdFwiOiBcImhcIixcbiAgICAgICAgICAgICAgXCJhbW91bnRcIjogMjAsXG4gICAgICAgICAgICAgIFwibWF0ZXJpYWxcIjogXCJTZW1pLVRyYWN0b3IgdHJhaWxlclwiXG4gICAgICAgICAgICB9LFxuICAgICAgICAgICAge1xuICAgICAgICAgICAgICBcInVuaXRcIjogXCIxXCIsXG4gICAgICAgICAgICAgIFwiYW1vdW50XCI6IDE0NTAwMCxcbiAgICAgICAgICAgICAgXCJtYXRlcmlhbFwiOiBcIlBvcGxhciBDdXR0aW5nXCJcbiAgICAgICAgICAgIH0sXG4gICAgICAgICAgICB7XG4gICAgICAgICAgICAgIFwidW5pdFwiOiBcImhcIixcbiAgICAgICAgICAgICAgXCJhbW91bnRcIjogMTA4MCxcbiAgICAgICAgICAgICAgXCJtYXRlcmlhbFwiOiBcIkNvb2xlci92YW5cIlxuICAgICAgICAgICAgfSxcbiAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgXCJ1bml0XCI6IFwiaFwiLFxuICAgICAgICAgICAgICBcImFtb3VudFwiOiA0ODAsXG4gICAgICAgICAgICAgIFwibWF0ZXJpYWxcIjogXCJMYWJvcmVyXCJcbiAgICAgICAgICAgIH1cbiAgICAgICAgICBdLFxuICAgICAgICAgIFwib3BlcmF0aW9uXCI6IFwicGxhbnRpbmdcIlxuICAgICAgICB9LFxuICAgICAgICB7XG4gICAgICAgICAgXCJtYXRlcmlhbHNcIjogW1xuICAgICAgICAgICAge1xuICAgICAgICAgICAgICBcInVuaXRcIjogXCJbYWNyX3VzXVwiLFxuICAgICAgICAgICAgICBcImFtb3VudFwiOiAyNSxcbiAgICAgICAgICAgICAgXCJtYXRlcmlhbFwiOiBcImhlcmJpY2lkZSAtIG1hbnVhbFwiXG4gICAgICAgICAgICB9LFxuICAgICAgICAgICAge1xuICAgICAgICAgICAgICBcIm5vdGVcIjogXCIyIHRpbWVzIG92ZXIgNzAgYWNyZXMgZWFjaC5cIixcbiAgICAgICAgICAgICAgXCJ1bml0XCI6IFwiW2Fjcl91c11cIixcbiAgICAgICAgICAgICAgXCJhbW91bnRcIjogMTQwLFxuICAgICAgICAgICAgICBcIm1hdGVyaWFsXCI6IFwiaG9laW5nXCJcbiAgICAgICAgICAgIH1cbiAgICAgICAgICBdLFxuICAgICAgICAgIFwib3BlcmF0aW9uXCI6IFwiY3JvcCBjYXJlIC0geXIwXCJcbiAgICAgICAgfSxcbiAgICAgICAge1xuICAgICAgICAgIFwibWF0ZXJpYWxzXCI6IFtcbiAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgXCJ1bml0XCI6IFwiaFwiLFxuICAgICAgICAgICAgICBcImFtb3VudFwiOiAzNSxcbiAgICAgICAgICAgICAgXCJtYXRlcmlhbFwiOiBcIkZSIDYwODAgRkhcIlxuICAgICAgICAgICAgfSxcbiAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgXCJ1bml0XCI6IFwiaFwiLFxuICAgICAgICAgICAgICBcImFtb3VudFwiOiAxNzUsXG4gICAgICAgICAgICAgIFwibWF0ZXJpYWxcIjogXCJUYW5kZW0gQXhsZSBUcnVja1wiXG4gICAgICAgICAgICB9LFxuICAgICAgICAgICAge1xuICAgICAgICAgICAgICBcInVuaXRcIjogXCJoXCIsXG4gICAgICAgICAgICAgIFwiYW1vdW50XCI6IDM1LFxuICAgICAgICAgICAgICBcIm1hdGVyaWFsXCI6IFwiU3VwcG9ydCBUcnVja1wiXG4gICAgICAgICAgICB9XG4gICAgICAgICAgXSxcbiAgICAgICAgICBcIm9wZXJhdGlvblwiOiBcImhhcnZlc3QgLSBlc3RhYmxpc2hlZFwiXG4gICAgICAgIH0sXG4gICAgICAgIHtcbiAgICAgICAgICBcIm1hdGVyaWFsc1wiOiBbXG4gICAgICAgICAgICB7XG4gICAgICAgICAgICAgIFwibm90ZVwiOiBcIlRpbGxhZ2VcIixcbiAgICAgICAgICAgICAgXCJ1bml0XCI6IFwiaFwiLFxuICAgICAgICAgICAgICBcImFtb3VudFwiOiA0OCxcbiAgICAgICAgICAgICAgXCJtYXRlcmlhbFwiOiBcIlNtYWxsIFRyYWN0b3JcIlxuICAgICAgICAgICAgfSxcbiAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgXCJub3RlXCI6IFwiNSB0aW1lc1wiLFxuICAgICAgICAgICAgICBcInVuaXRcIjogXCJbYWNyX3VzXVwiLFxuICAgICAgICAgICAgICBcImFtb3VudFwiOiA1MDAsXG4gICAgICAgICAgICAgIFwibWF0ZXJpYWxcIjogXCJob2VpbmdcIlxuICAgICAgICAgICAgfSxcbiAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgXCJub3RlXCI6IFwiMyB0aW1lcywgMS8yIGZpZWxkXCIsXG4gICAgICAgICAgICAgIFwidW5pdFwiOiBcIlthY3JfdXNdXCIsXG4gICAgICAgICAgICAgIFwiYW1vdW50XCI6IDE1MCxcbiAgICAgICAgICAgICAgXCJtYXRlcmlhbFwiOiBcImhlcmJpY2lkZSAtIG1hbnVhbFwiXG4gICAgICAgICAgICB9LFxuICAgICAgICAgICAge1xuICAgICAgICAgICAgICBcIm5vdGVcIjogXCJJbnRlcnBsYW50aW5nXCIsXG4gICAgICAgICAgICAgIFwidW5pdFwiOiBcImhcIixcbiAgICAgICAgICAgICAgXCJhbW91bnRcIjogOTYsXG4gICAgICAgICAgICAgIFwibWF0ZXJpYWxcIjogXCJMYWJvcmVyXCJcbiAgICAgICAgICAgIH1cbiAgICAgICAgICBdLFxuICAgICAgICAgIFwib3BlcmF0aW9uXCI6IFwiY3JvcCBjYXJlIC0geXIxXCJcbiAgICAgICAgfSxcbiAgICAgICAge1xuICAgICAgICAgIFwibWF0ZXJpYWxzXCI6IFtcbiAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgXCJub3RlXCI6IFwiZGlza2luZ1wiLFxuICAgICAgICAgICAgICBcInVuaXRcIjogXCJoXCIsXG4gICAgICAgICAgICAgIFwiYW1vdW50XCI6IDEyLFxuICAgICAgICAgICAgICBcIm1hdGVyaWFsXCI6IFwiTGFyZ2UgVHJhY3RvclwiXG4gICAgICAgICAgICB9LFxuICAgICAgICAgICAge1xuICAgICAgICAgICAgICBcIm5vdGVcIjogXCJoZXJiaWNpZGVcIixcbiAgICAgICAgICAgICAgXCJ1bml0XCI6IFwiaFwiLFxuICAgICAgICAgICAgICBcImFtb3VudFwiOiAyMCxcbiAgICAgICAgICAgICAgXCJtYXRlcmlhbFwiOiBcIlRyYWN0b3IgYW5kIHNwcmF5ZXJcIlxuICAgICAgICAgICAgfSxcbiAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgXCJub3RlXCI6IFwiaGVyYmljaWRlXCIsXG4gICAgICAgICAgICAgIFwidW5pdFwiOiBcIltxdF91c11cIixcbiAgICAgICAgICAgICAgXCJhbW91bnRcIjogMjAwLFxuICAgICAgICAgICAgICBcIm1hdGVyaWFsXCI6IFwiR2x5cGhvc2F0ZVwiXG4gICAgICAgICAgICB9LFxuICAgICAgICAgICAge1xuICAgICAgICAgICAgICBcIm5vdGVcIjogXCJoZXJiaWNpZGVcIixcbiAgICAgICAgICAgICAgXCJ1bml0XCI6IFwiW3F0X3VzXVwiLFxuICAgICAgICAgICAgICBcImFtb3VudFwiOiAyMDAsXG4gICAgICAgICAgICAgIFwibWF0ZXJpYWxcIjogXCIyLDQtRFwiXG4gICAgICAgICAgICB9XG4gICAgICAgICAgXSxcbiAgICAgICAgICBcIm9wZXJhdGlvblwiOiBcInJlc3RvcmF0aW9uXCJcbiAgICAgICAgfSxcbiAgICAgICAge1xuICAgICAgICAgIFwibWF0ZXJpYWxzXCI6IFtcbiAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgXCJub3RlXCI6IFwiUG9zdCBoYXJ2ZXN0IGNsZWFuIHVwXCIsXG4gICAgICAgICAgICAgIFwidW5pdFwiOiBcImhcIixcbiAgICAgICAgICAgICAgXCJhbW91bnRcIjogMzAsXG4gICAgICAgICAgICAgIFwibWF0ZXJpYWxcIjogXCJNaWQtc2l6ZSBUcmFjdG9yXCJcbiAgICAgICAgICAgIH0sXG4gICAgICAgICAgICB7XG4gICAgICAgICAgICAgIFwibm90ZVwiOiBcIkRvcm1hbnQgSGVyYmljaWRlXCIsXG4gICAgICAgICAgICAgIFwidW5pdFwiOiBcImhcIixcbiAgICAgICAgICAgICAgXCJhbW91bnRcIjogOCxcbiAgICAgICAgICAgICAgXCJtYXRlcmlhbFwiOiBcIlRyYWN0b3IgYW5kIHNwcmF5ZXJcIlxuICAgICAgICAgICAgfSxcbiAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgXCJub3RlXCI6IFwiRG9ybWFudCBIZXJiaWNpZGVcIixcbiAgICAgICAgICAgICAgXCJ1bml0XCI6IFwiW3F0X3VzXVwiLFxuICAgICAgICAgICAgICBcImFtb3VudFwiOiAyMDAsXG4gICAgICAgICAgICAgIFwibWF0ZXJpYWxcIjogXCJHbHlwaG9zYXRlXCJcbiAgICAgICAgICAgIH0sXG4gICAgICAgICAgICB7XG4gICAgICAgICAgICAgIFwibm90ZVwiOiBcIkRvcm1hbnQgSGVyYmljaWRlXCIsXG4gICAgICAgICAgICAgIFwidW5pdFwiOiBcIltxdF91c11cIixcbiAgICAgICAgICAgICAgXCJhbW91bnRcIjogMjAwLFxuICAgICAgICAgICAgICBcIm1hdGVyaWFsXCI6IFwiVHJpZmx1cmFsaW5cIlxuICAgICAgICAgICAgfSxcbiAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgXCJub3RlXCI6IFwicG9zdCBlbWVyZ2VudFwiLFxuICAgICAgICAgICAgICBcInVuaXRcIjogXCJbYWNyX3VzXVwiLFxuICAgICAgICAgICAgICBcImFtb3VudFwiOiAxMDAsXG4gICAgICAgICAgICAgIFwibWF0ZXJpYWxcIjogXCJoZXJiaWNpZGUgLSBtYW51YWxcIlxuICAgICAgICAgICAgfVxuICAgICAgICAgIF0sXG4gICAgICAgICAgXCJvcGVyYXRpb25cIjogXCJjcm9wIGNhcmUgLSBwb3N0IGhhcnZlc3RcIlxuICAgICAgICB9LFxuICAgICAgICB7XG4gICAgICAgICAgXCJtYXRlcmlhbHNcIjogW1xuICAgICAgICAgICAge1xuICAgICAgICAgICAgICBcIm5vdGVcIjogXCJcIixcbiAgICAgICAgICAgICAgXCJ1bml0XCI6IFwiaFwiLFxuICAgICAgICAgICAgICBcImFtb3VudFwiOiAyNixcbiAgICAgICAgICAgICAgXCJtYXRlcmlhbFwiOiBcIkZSIDYwODAgRkhcIlxuICAgICAgICAgICAgfSxcbiAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgXCJ1bml0XCI6IFwiaFwiLFxuICAgICAgICAgICAgICBcImFtb3VudFwiOiAxMDQsXG4gICAgICAgICAgICAgIFwibWF0ZXJpYWxcIjogXCJUYW5kZW0gQXhsZSBUcnVja1wiXG4gICAgICAgICAgICB9LFxuICAgICAgICAgICAge1xuICAgICAgICAgICAgICBcInVuaXRcIjogXCJoXCIsXG4gICAgICAgICAgICAgIFwiYW1vdW50XCI6IDI2LFxuICAgICAgICAgICAgICBcIm1hdGVyaWFsXCI6IFwiU3VwcG9ydCBUcnVja1wiXG4gICAgICAgICAgICB9XG4gICAgICAgICAgXSxcbiAgICAgICAgICBcIm9wZXJhdGlvblwiOiBcImhhcnZlc3QgLSB5cjFcIlxuICAgICAgICB9LFxuICAgICAgICB7XG4gICAgICAgICAgXCJtYXRlcmlhbHNcIjogW1xuICAgICAgICAgICAge1xuICAgICAgICAgICAgICBcIm5vdGVcIjogXCJJbml0aWFsIFNwcmF5aW5nXCIsXG4gICAgICAgICAgICAgIFwidW5pdFwiOiBcImhcIixcbiAgICAgICAgICAgICAgXCJhbW91bnRcIjogMyxcbiAgICAgICAgICAgICAgXCJtYXRlcmlhbFwiOiBcIlRyYWN0b3IgYW5kIHNwcmF5ZXJcIlxuICAgICAgICAgICAgfSxcbiAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgXCJub3RlXCI6IFwiSW5pdGlhbCBTcHJheWluZ1wiLFxuICAgICAgICAgICAgICBcInVuaXRcIjogXCJbcXRfdXNdXCIsXG4gICAgICAgICAgICAgIFwiYW1vdW50XCI6IDEwMCxcbiAgICAgICAgICAgICAgXCJtYXRlcmlhbFwiOiBcIkdseXBob3NhdGVcIlxuICAgICAgICAgICAgfSxcbiAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgXCJub3RlXCI6IFwiSW5pdGlhbCBTcHJheWluZ1wiLFxuICAgICAgICAgICAgICBcInVuaXRcIjogXCJbcXRfdXNdXCIsXG4gICAgICAgICAgICAgIFwiYW1vdW50XCI6IDEyNSxcbiAgICAgICAgICAgICAgXCJtYXRlcmlhbFwiOiBcIkdvYWwgMlhMXCJcbiAgICAgICAgICAgIH0sXG4gICAgICAgICAgICB7XG4gICAgICAgICAgICAgIFwibm90ZVwiOiBcIkluaXRpYWwgVGlsbGFnZVwiLFxuICAgICAgICAgICAgICBcInVuaXRcIjogXCJoXCIsXG4gICAgICAgICAgICAgIFwiYW1vdW50XCI6IDIwLFxuICAgICAgICAgICAgICBcIm1hdGVyaWFsXCI6IFwiTGFyZ2UgVHJhY3RvclwiXG4gICAgICAgICAgICB9LFxuICAgICAgICAgICAge1xuICAgICAgICAgICAgICBcIm5vdGVcIjogXCJSaXBwaW5nXCIsXG4gICAgICAgICAgICAgIFwidW5pdFwiOiBcImhcIixcbiAgICAgICAgICAgICAgXCJhbW91bnRcIjogMTAsXG4gICAgICAgICAgICAgIFwibWF0ZXJpYWxcIjogXCJMYXJnZSBUcmFjdG9yXCJcbiAgICAgICAgICAgIH0sXG4gICAgICAgICAgICB7XG4gICAgICAgICAgICAgIFwibm90ZVwiOiBcIlJvdyBNYXJraW5nXCIsXG4gICAgICAgICAgICAgIFwidW5pdFwiOiBcImhcIixcbiAgICAgICAgICAgICAgXCJhbW91bnRcIjogMjUsXG4gICAgICAgICAgICAgIFwibWF0ZXJpYWxcIjogXCJMYXJnZSBUcmFjdG9yXCJcbiAgICAgICAgICAgIH0sXG4gICAgICAgICAgICB7XG4gICAgICAgICAgICAgIFwibm90ZVwiOiBcImhlcmJpY2lkZSAtIHByZWVtZXJnZW50XCIsXG4gICAgICAgICAgICAgIFwidW5pdFwiOiBcImhcIixcbiAgICAgICAgICAgICAgXCJhbW91bnRcIjogMjUsXG4gICAgICAgICAgICAgIFwibWF0ZXJpYWxcIjogXCJDaGFsbGVuZ2VyIFRyYWN0b3JcIlxuICAgICAgICAgICAgfSxcbiAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgXCJub3RlXCI6IFwiaGVyYmljaWRlIC0gcHJlZW1lcmdlbnRcIixcbiAgICAgICAgICAgICAgXCJ1bml0XCI6IFwiW3F0X3VzXVwiLFxuICAgICAgICAgICAgICBcImFtb3VudFwiOiA1MCxcbiAgICAgICAgICAgICAgXCJtYXRlcmlhbFwiOiBcIlRyaWZsdXJhbGluXCJcbiAgICAgICAgICAgIH1cbiAgICAgICAgICBdLFxuICAgICAgICAgIFwib3BlcmF0aW9uXCI6IFwic2l0ZSBwcmVwXCJcbiAgICAgICAgfVxuICAgICAgXSxcbiAgICAgIFwidW5pdFwiOiBcIlthY3JfdXNdXCIsXG4gICAgICBcInNpemVcIjogXCIxMDBcIixcbiAgICAgIFwiY29tbW9kaXR5XCI6IFwiUE9QTEFSXCIsXG4gICAgICBcImxvY2F0aW9uXCI6IFwiMDYxMTNcIixcbiAgICAgIFwiZmFybVwiOiBcImNsYXJrc2J1cmdcIlxuICAgIH1cbiAgXVxufVxuIiwiJ3VzZSBzdHJpY3QnO1xuXG4vKipcbiAqICBOYW1lc3BhY2UgbW9kdWxlXG4gKiAgRXhwb3NlcyBvdGhlciBtb2R1bGVzXG4gKiovXG5cbnZhciBtYXRlcmlhbENvbnRyb2xsZXIgPSByZXF1aXJlKCcuL21hdGVyaWFsQ29udHJvbGxlcicpO1xudmFyIG9wZXJhdGlvbkNvbnRyb2xsZXIgPSByZXF1aXJlKCcuL29wZXJhdGlvbkNvbnRyb2xsZXInKTtcbm9wZXJhdGlvbkNvbnRyb2xsZXIuaW5pdChtYXRlcmlhbENvbnRyb2xsZXIpO1xubWF0ZXJpYWxDb250cm9sbGVyLmluaXQob3BlcmF0aW9uQ29udHJvbGxlcik7XG5cbnZhciBleGFtcGxlcyA9IHtcbiAgLy8gZGF0YWJhc2UgZm9ybWF0dGVkXG4gIGRiIDoge1xuICAgICdkZWZhdWx0JyA6IHJlcXVpcmUoJy4vY29uZmlnL2RlZmF1bHQnKSxcbiAgICAnYWxmYWxmYSAoQ0EpJzogcmVxdWlyZSgnLi9jb25maWcvY2FfYWxmYWxmYV9zd2FwJyksXG4gICAgJ2FsZmFsZmEgRXN0aW1hdGVzJyA6IHJlcXVpcmUoJy4vY29uZmlnL2NhX2FsZmFsZmFfc3dhcF9lc3RpbWF0ZScpLFxuICAgICdwb3BsYXIgYmFkJyA6IHJlcXVpcmUoJy4vY29uZmlnL3BvcGxhci1leGFtcGxlJylcbiAgfSxcbiAgLy8gYXBwbGljYXRpb24gZm9ybWF0dGVkLCBwcm9iYWJseSBmcm9tIHRoZSAnanNvbiBkdW1wJ1xuICBhcHAgOiB7XG4gICAgJ3BvcGxhciBnb29kJyA6IHJlcXVpcmUoJy4vY29uZmlnL2FwcC9wb3BsYXInKSxcbiAgICAnYWxmYWxmYSAtIGptJyA6IHJlcXVpcmUoJy4vY29uZmlnL2FwcC9hbGZhbGZhJyksXG4gICAgJ2JsYW5rJyA6IHJlcXVpcmUoJy4vY29uZmlnL2FwcC9ibGFuaycpLFxuICAgICd0ZXN0aW5nJyA6IHJlcXVpcmUoJy4vY29uZmlnL2FwcC90ZXN0aW5nJyksXG4gICAgJ3FqaC9hbGZhbGZhJzogcmVxdWlyZSgnLi9jb25maWcvYXBwL3FqaC1hbGZhbGZhJyksXG4gICAgJ3FqaC9wb3BsYXInIDogcmVxdWlyZSgnLi9jb25maWcvYXBwL3FqaC1wb3BsYXInKVxuICB9XG59O1xuXG4vLyB0bXAgZm9yIG5vd1xudmFyIGZpeGVkID0gWydFc3RpbWF0ZScsICdUYXhlcycsJ0luc3VyYW5jZScsJ0NhcGl0b2wgQ29zdCBSZWNvdmVyJ107XG5mb3IoIHZhciBpID0gMDsgaSA8IGZpeGVkLmxlbmd0aDsgaSsrICkge1xuICBtYXRlcmlhbENvbnRyb2xsZXIuYWRkKHtcbiAgICBuYW1lIDogZml4ZWRbaV0sXG4gICAgcHJpY2UgOiAxLFxuICAgIHVuaXRzIDogJ3VzJCcsXG4gICAgZml4ZWQgOiB0cnVlLFxuICAgIGRlc2NyaXB0aW9uIDogJ1Byb3ZpZGUgZml4ZWQgY29zdCBmb3IgY29tcGxleCBtYXRlcmlhbCdcbiAgfSx7XG4gICAgbm9FdmVudCA6IHRydWVcbiAgfSk7XG59XG5cbm1vZHVsZS5leHBvcnRzID0ge1xuICB1dGlscyA6IHJlcXVpcmUoJy4vdXRpbHMnKShvcGVyYXRpb25Db250cm9sbGVyLCBtYXRlcmlhbENvbnRyb2xsZXIpLFxuICBvcGVyYXRpb25Db250cm9sbGVyIDogb3BlcmF0aW9uQ29udHJvbGxlcixcbiAgbWF0ZXJpYWxDb250cm9sbGVyIDogbWF0ZXJpYWxDb250cm9sbGVyLFxuICB0cmFuc2Zvcm0gOiByZXF1aXJlKCcuL3RyYW5zZm9ybScpLFxuICBleGFtcGxlcyA6IGV4YW1wbGVzLFxuICB1Y3VtIDogcmVxdWlyZSgndWN1bS5qcycpLFxuICB1bml0cyA6IHJlcXVpcmUoJy4vdW5pdHMnKVxufTtcbiIsIid1c2Ugc3RyaWN0Jztcbi8qKlxuICoga2VlcHMgdHJhY2sgb2YgbWF0ZXJpYWxzLCBwcmljZXMgYW5kIGNvbXBsZXggbWF0ZXJpYWxzLiAgbW9zdGx5IGZvciBjbGllbnQgYXBwLlxuICoqL1xuXG4gdmFyIGV2ZW50cyA9IHJlcXVpcmUoJ2V2ZW50cycpLkV2ZW50RW1pdHRlcjtcbiB2YXIgdW5pdHMgPSByZXF1aXJlKCcuLi91bml0cycpO1xuIGV2ZW50cyA9IG5ldyBldmVudHMoKTtcbiBldmVudHMuc2V0TWF4TGlzdGVuZXJzKDEwMDApO1xuXG52YXIgZGF0YSA9IHtcbiBtYXRlcmlhbHMgOiB7fSxcbiBjb21wbGV4IDoge31cbn07XG52YXIgb3BlcmF0aW9uQ29udHJvbGxlcjtcblxuZnVuY3Rpb24gaW5pdChjb250cm9sbGVyKSB7XG4gIG9wZXJhdGlvbkNvbnRyb2xsZXIgPSBjb250cm9sbGVyO1xufVxuXG5mdW5jdGlvbiByZW1vdmUobmFtZSkge1xuICBpZiggZGF0YS5tYXRlcmlhbHNbbmFtZV0gKSB7XG4gICAgZGVsZXRlIGRhdGEubWF0ZXJpYWxzW25hbWVdO1xuICAgIGV2ZW50cy5lbWl0KCdtYXRlcmlhbC1yZW1vdmVkJywge1xuICAgICAgbWF0ZXJpYWwgOiBuYW1lXG4gICAgfSk7XG4gICAgcmV0dXJuIHN1Y2Nlc3MoKTtcbiAgfSBlbHNlIGlmKCBkYXRhLmNvbXBsZXhbbmFtZV0gKSB7XG4gICAgZGVsZXRlIGRhdGEuY29tcGxleFtuYW1lXTtcbiAgICBldmVudHMuZW1pdCgnbWF0ZXJpYWwtcmVtb3ZlZCcsIHtcbiAgICAgIG1hdGVyaWFsIDogbmFtZVxuICAgIH0pO1xuICAgIHJldHVybiBzdWNjZXNzKCk7XG4gIH1cblxuICByZXR1cm4gc2V0RXJyb3IobmFtZSwgJ21hdGVyaWFsICcrbmFtZSsnIGRvZXMgbm90IGV4aXN0JywgMSk7XG59XG5cbi8vIGJ1bGsgYWRkL3VwZGF0ZSBpdGVtcyB3aXRoIG9ubHkgb25lIHJlY2FsY1xuZnVuY3Rpb24gYnVsa0FkZChtYXRlcmlhbHMsIG9wdGlvbnMpIHtcbiAgdmFyIGFkZE9wdGlvbnMgPSB7fSwgaTtcbiAgZm9yKCB2YXIga2V5IGluIG9wdGlvbnMgKSB7XG4gICAgYWRkT3B0aW9uc1trZXldID0gb3B0aW9ucztcbiAgfVxuXG4gIGFkZE9wdGlvbnMubm9SZWNhbGMgPSB0cnVlO1xuICBhZGRPcHRpb25zLm5vRXZlbnQgPSB0cnVlO1xuXG4gIHZhciByZXNwb25zZXMgPSB7fTtcbiAgZm9yKCBpID0gMDsgaSA8IG1hdGVyaWFscy5sZW5ndGg7IGkrKyApIHtcbiAgICByZXNwb25zZXNbbWF0ZXJpYWxzW2ldLm5hbWVdID0gYWRkKG1hdGVyaWFsc1tpXSwgYWRkT3B0aW9ucyk7XG4gIH1cblxuICAvLyBub3cganVzdCByZWNhbGMgb25jZVxuICByZWNhbGMoKTtcbiAgb3BlcmF0aW9uQ29udHJvbGxlci5yZWNhbGMoKTtcblxuICBmb3IoIGkgPSAwOyBpIDwgbWF0ZXJpYWxzLmxlbmd0aDsgaSsrICkge1xuICAgIGlmKCByZXNwb25zZXNbbWF0ZXJpYWxzW2ldLm5hbWVdLmVycm9yICkge1xuICAgICAgY29udGludWU7XG4gICAgfVxuICAgIHJlc3BvbnNlc1ttYXRlcmlhbHNbaV0ubmFtZV0uYmx1ayA9IHRydWU7XG4gICAgZXZlbnRzLmVtaXQoJ21hdGVyaWFsLXVwZGF0ZScsIHJlc3BvbnNlc1ttYXRlcmlhbHNbaV0ubmFtZV0pO1xuICB9XG5cbiAgcmV0dXJuIHJlc3BvbnNlcztcbn1cblxuZnVuY3Rpb24gYWRkKG1hdGVyaWFsLCBvcHRpb25zKSB7XG4gIGlmKCAhb3B0aW9ucyApIHtcbiAgICBvcHRpb25zID0ge307XG4gIH1cblxuICBpZiggZGF0YS5tYXRlcmlhbHNbbWF0ZXJpYWwubmFtZV0gJiYgIW9wdGlvbnMucmVwbGFjZSApIHtcbiAgICByZXR1cm4gc2V0RXJyb3IobWF0ZXJpYWwubmFtZSwgJ21hdGVyaWFsIGFscmVhZHkgZXhpc3RzJywgMik7XG4gIH0gZWxzZSBpZiggZGF0YS5jb21wbGV4W21hdGVyaWFsLm5hbWVdICYmICFvcHRpb25zLnJlcGxhY2UgKSB7XG4gICAgcmV0dXJuIHNldEVycm9yKG1hdGVyaWFsLm5hbWUsICdtYXRlcmlhbCBhbHJlYWR5IGV4aXN0cycsIDIpO1xuICB9XG5cbiAgdmFyIGlzTmV3ID0gZmFsc2U7XG4gIGlmKCAhZGF0YS5tYXRlcmlhbHNbbWF0ZXJpYWwubmFtZV0gJiYgIWRhdGEuY29tcGxleFttYXRlcmlhbC5uYW1lXSApIHtcbiAgICBpc05ldyA9IHRydWU7XG4gIH1cblxuICBpZiggbWF0ZXJpYWwudHlwZSA9PT0gJ2NvbXBsZXgnICkge1xuICAgIGRhdGEuY29tcGxleFttYXRlcmlhbC5uYW1lXSA9IG1hdGVyaWFsO1xuICB9IGVsc2Uge1xuICAgIG1hdGVyaWFsLnR5cGUgPSAnc2ltcGxlJztcbiAgICBkYXRhLm1hdGVyaWFsc1ttYXRlcmlhbC5uYW1lXSA9IG1hdGVyaWFsO1xuICB9XG5cbiAgaWYoIG9wdGlvbnMucmVuYW1lICkge1xuICAgIHJlbW92ZShvcHRpb25zLnJlbmFtZSk7XG4gIH1cblxuICBpZiggIW9wdGlvbnMubm9SZWNhbGMgKSB7XG4gICAgcmVjYWxjKCk7XG4gIH1cblxuICB2YXIgcmVzcG9uc2UgPSB7XG4gICAgbWF0ZXJpYWwgOiBtYXRlcmlhbCxcbiAgICBpc05ldyA6IGlzTmV3LFxuICAgIHJlcGxhY2VkIDogb3B0aW9ucy5yZW5hbWUsXG4gICAgZmxhZyA6IG9wdGlvbnMuZmxhZywgLy8gbGV0IHRoZSBjYWxsZXIgcGFzcyBpdCdzIG93biBmbGFnc1xuICAgIHN1Y2Nlc3MgOiB0cnVlXG4gIH07XG5cbiAgaWYoICFvcHRpb25zLm5vRXZlbnQgKSB7XG4gICAgZXZlbnRzLmVtaXQoJ21hdGVyaWFsLXVwZGF0ZScsIHJlc3BvbnNlKTtcbiAgfVxuXG4gIHJldHVybiByZXNwb25zZTtcbn1cblxuZnVuY3Rpb24gZ2V0KG5hbWUpIHtcbiAgaWYoICFuYW1lICkge1xuICAgIHJldHVybiBkYXRhO1xuICB9XG5cbiAgaWYoIGRhdGEubWF0ZXJpYWxzW25hbWVdICkge1xuICAgIHJldHVybiBkYXRhLm1hdGVyaWFsc1tuYW1lXTtcbiAgfSBlbHNlIGlmKCBkYXRhLmNvbXBsZXhbbmFtZV0gKSB7XG4gICAgcmV0dXJuIGRhdGEuY29tcGxleFtuYW1lXTtcbiAgfVxuXG4gIHJldHVybiBzZXRFcnJvcihuYW1lLCBuYW1lKycgaXMgbm90IGluIHRoZSBtYXRlcmlhbCBsaXN0JywgMyk7XG59XG5cbmZ1bmN0aW9uIGZpbmQodHh0LCBpZ25vcmUpIHtcbiAgdmFyIHJlID0gbmV3IFJlZ0V4cCgnLionK3R4dCsnLionLCAnaScpO1xuICB2YXIgcmVzdWx0cyA9IFtdLCBrZXk7XG5cbiAgZm9yKCBrZXkgaW4gZGF0YS5tYXRlcmlhbHMgKSB7XG4gICAgaWYoIGtleS5tYXRjaChyZSkgJiYga2V5ICE9PSBpZ25vcmUgKSB7XG4gICAgICByZXN1bHRzLnB1c2goZGF0YS5tYXRlcmlhbHNba2V5XSk7XG4gICAgfVxuICB9XG4gIGZvcigga2V5IGluIGRhdGEuY29tcGxleCApIHtcbiAgICBpZigga2V5Lm1hdGNoKHJlKSAmJiBrZXkgIT09IGlnbm9yZSAgKSB7XG4gICAgICByZXN1bHRzLnB1c2goZGF0YS5jb21wbGV4W2tleV0pO1xuICAgIH1cbiAgfVxuXG4gIGZvciggdmFyIGkgPSAwOyBpIDwgcmVzdWx0cy5sZW5ndGg7IGkrKyApIHtcbiAgICBpZiggcmVzdWx0c1tpXS5uYW1lID09PSB0eHQgKSB7XG4gICAgICB2YXIgbSA9IHJlc3VsdHMuc3BsaWNlKGksIDEpWzBdO1xuICAgICAgcmVzdWx0cy5zcGxpY2UoMCwwLG0pO1xuICAgICAgYnJlYWs7XG4gICAgfVxuICB9XG5cbiAgcmV0dXJuIHJlc3VsdHM7XG59XG5cbi8vIHJlY2FsYyBhbGwgY29tcGxleCBtYXRlcmlhbCBjb3N0c1xuZnVuY3Rpb24gcmVjYWxjKCkge1xuICB2YXIgdCA9IG5ldyBEYXRlKCkuZ2V0VGltZSgpO1xuXG4gIHZhciBtYXRlcmlhbDtcblxuICBmb3IoIG1hdGVyaWFsIGluIGRhdGEuY29tcGxleCApIHtcbiAgICBkYXRhLmNvbXBsZXhbbWF0ZXJpYWxdLnByaWNlID0gbnVsbDtcbiAgfVxuXG4gIGZvciggbWF0ZXJpYWwgaW4gZGF0YS5jb21wbGV4ICkge1xuICAgIHZhciBtID0gZGF0YS5jb21wbGV4W21hdGVyaWFsXTtcblxuICAgIGlmKCBtLnByaWNlICE9PSBudWxsICkge1xuICAgICAgICBjb250aW51ZTtcbiAgICB9XG4gICAgbS5wcmljZSA9IF9yZWNhbGMobSwgW20ubmFtZV0pO1xuICB9XG5cbiAgY29uc29sZS5sb2coJ01hdGVyaWFsIFJlY2FsYzogJysobmV3IERhdGUoKS5nZXRUaW1lKCkgLSB0KSsnbXMnKTtcbn1cblxuZnVuY3Rpb24gX3JlY2FsYyhtYXRlcmlhbCwgbWF0ZXJpYWxDaGFpbil7XG4gIHZhciBwcmljZSA9IDA7XG5cbiAgZm9yKCB2YXIga2V5IGluIG1hdGVyaWFsLm1hdGVyaWFscyApIHtcbiAgICB2YXIgbSA9IGdldChrZXkpO1xuXG4gICAgaWYoIG0uZXJyb3IgKSB7XG4gICAgICBtYXRlcmlhbC5tYXRlcmlhbHNba2V5XS5lcnJvciA9IG0uZXJyb3I7XG4gICAgICBjb250aW51ZTtcbiAgICB9XG4gICAgbWF0ZXJpYWwubWF0ZXJpYWxzW2tleV0uZXJyb3IgPSBudWxsO1xuXG4gICAgaWYoIG0ucHJpY2UgPT09IG51bGwgJiYgbS50eXBlID09PSAnY29tcGxleCcgKSB7XG4gICAgICAvLyBtYWtlIHN1cmUgbm8gcmVjdXJzaW9uXG4gICAgICAvLyBUT0RPOiBzaG91bGQgcHJvYmFibHkgYWRkIGVycm9yIHRvIHN0YWNrIGlmIGlzc3VlLlxuICAgICAgaWYoIG1hdGVyaWFsQ2hhaW4uaW5kZXhPZihtLm5hbWUpID09PSAtMSApIHtcbiAgICAgICAgbS5wcmljZSA9IF9yZWNhbGMobSwgZXh0ZW5kQ2hhaW4obWF0ZXJpYWxDaGFpbiwgbS5uYW1lKSk7XG4gICAgICB9IGVsc2Uge1xuICAgICAgICAvLyBCQURORVNTXG4gICAgICAgIGNvbnNvbGUubG9nKCdSZWN1c2l2ZSBtYXRlcmlhbHMgZm91bmQsIGlnbm9yaW5nOiAnK21hdGVyaWFsQ2hhaW4uam9pbignaScpKycgJiYgJyttLm5hbWUpO1xuICAgICAgfVxuICAgIH1cblxuICAgIHZhciB2YWx1ZSA9IHVuaXRzLmNhbGN1bGF0ZUNvbXBsZXhQcmljZShtLCBtYXRlcmlhbC5tYXRlcmlhbHNbbS5uYW1lXSwgbWF0ZXJpYWwpO1xuXG4gICAgaWYoIHZhbHVlLmVycm9yICkge1xuICAgICAgbWF0ZXJpYWwubWF0ZXJpYWxzW20ubmFtZV0ucHJpY2UgPSAwO1xuICAgICAgbWF0ZXJpYWwubWF0ZXJpYWxzW20ubmFtZV0uZXJyb3IgPSB2YWx1ZTtcbiAgICB9IGVsc2Uge1xuICAgICAgbWF0ZXJpYWwubWF0ZXJpYWxzW20ubmFtZV0ucHJpY2UgPSB2YWx1ZS52YWx1ZTtcbiAgICB9XG5cbiAgICBwcmljZSArPSBtYXRlcmlhbC5tYXRlcmlhbHNbbS5uYW1lXS5wcmljZTtcblxuICB9XG4gIHJldHVybiBwcmljZTtcbn1cblxuZnVuY3Rpb24gZXh0ZW5kQ2hhaW4oY2hhaW4sIG0pIHtcbiAgdmFyIG5ld0NoYWluID0gY2hhaW4uc2xpY2UoKTtcbiAgbmV3Q2hhaW4ucHVzaChtKTtcbiAgcmV0dXJuIGNoYWluO1xufVxuXG5mdW5jdGlvbiBtYXRlcmlhbFJlY2FsYyhtYXRlcmlhbCkge1xuICBpZiggdHlwZW9mIG1hdGVyaWFsICE9PSAnb2JqZWN0JyApIHtcbiAgICByZXR1cm47XG4gIH0gZWxzZSBpZiggbWF0ZXJpYWwudHlwZSAhPT0gJ2NvbXBsZXgnICkge1xuICAgIHJldHVybjtcbiAgfVxuICBtYXRlcmlhbC5wcmljZSA9IF9yZWNhbGMobWF0ZXJpYWwpO1xufVxuXG5mdW5jdGlvbiBnZXRFcnJvcnMoKSB7XG4gIHZhciBlcnJvcnMgPSBbXTtcblxuICBmb3IoIHZhciBtIGluIGRhdGEubWF0ZXJpYWxzICkge1xuICAgIGlmKCBkYXRhLm1hdGVyaWFsc1ttXS5lcnJvciApIHtcbiAgICAgIGVycm9ycy5wdXNoKGRhdGEubWF0ZXJpYWxzW21dKTtcbiAgICB9XG4gIH1cblxuICBmb3IoIHZhciBpIGluIGRhdGEuY29tcGxleCApIHtcbiAgICBpZiggZGF0YS5jb21wbGV4W2ldLmVycm9yICkge1xuICAgICAgZXJyb3JzLnB1c2goZGF0YS5jb21wbGV4W2ldKTtcbiAgICB9IGVsc2Uge1xuICAgICAgZm9yKCBtIGluIGRhdGEuY29tcGxleFtpXS5tYXRlcmlhbHMgKSB7XG4gICAgICAgIGlmKCBkYXRhLmNvbXBsZXhbaV0ubWF0ZXJpYWxzW21dLmVycm9yICkge1xuICAgICAgICAgIGVycm9ycy5wdXNoKGRhdGEuY29tcGxleFtpXSk7XG4gICAgICAgICAgYnJlYWs7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9XG5cblxuICAgIGZvciggbSBpbiBkYXRhLmNvbXBsZXhbaV0ubWF0ZXJpYWxzICkge1xuICAgICAgdmFyIG1hdGVyaWFsID0gZ2V0KG0pO1xuICAgICAgaWYoIG1hdGVyaWFsLmVycm9yICkge1xuICAgICAgICBtYXRlcmlhbC5mcm9tID0gZGF0YS5jb21wbGV4W2ldO1xuICAgICAgICBlcnJvcnMucHVzaChtYXRlcmlhbCk7XG4gICAgICB9XG4gICAgfVxuICB9XG5cbiAgcmV0dXJuIGVycm9ycztcbn1cblxuXG5mdW5jdGlvbiBzdWNjZXNzKCkge1xuICByZXR1cm4ge3N1Y2Nlc3M6IHRydWV9O1xufVxuXG5mdW5jdGlvbiBzZXRFcnJvcihuYW1lLCBtc2csIGNvZGUpIHtcbiAgcmV0dXJuIHtcbiAgICBuYW1lIDogbmFtZSxcbiAgICBlcnJvciA6IHRydWUsXG4gICAgbWVzc2FnZSA6IG1zZyxcbiAgICBjb2RlIDogY29kZVxuICB9O1xufVxuXG4vLyBkb2VzIGEgbWF0ZXJpYWwgY29udGFpbiBvciBoYXZlIGEgZGVwZW5kZW5jeSBvbiBhIGdpdmVuIG1hdGVyaWFsIG5hbWVcbmZ1bmN0aW9uIGNvbnRhaW5zKG1hdGVyaWFsLCBuYW1lLCByZXBsYWNlZCkge1xuICBpZiggbWF0ZXJpYWwubmFtZSA9PT0gbmFtZSB8fCBtYXRlcmlhbC5uYW1lID09PSByZXBsYWNlZCApIHtcbiAgICByZXR1cm4gdHJ1ZTtcbiAgfVxuXG4gIGlmKCBtYXRlcmlhbC50eXBlICE9PSAnY29tcGxleCcgfHwgbWF0ZXJpYWwubWF0ZXJpYWxzID09PSB1bmRlZmluZWQgKSB7XG4gICAgcmV0dXJuIGZhbHNlO1xuICB9XG5cbiAgZm9yKCB2YXIga2V5IGluIG1hdGVyaWFsLm1hdGVyaWFscyApIHtcbiAgICBpZigga2V5ID09PSBuYW1lIHx8IGtleSA9PT0gcmVwbGFjZWQgKSB7XG4gICAgICByZXR1cm4gdHJ1ZTtcbiAgICB9XG5cbiAgICB2YXIgY2hpbGRDb250YWlucyA9IGNvbnRhaW5zKGdldChrZXkpLCBuYW1lLCByZXBsYWNlZCk7XG4gICAgaWYoIGNoaWxkQ29udGFpbnMgKSB7XG4gICAgICByZXR1cm4gdHJ1ZTtcbiAgICB9XG4gIH1cblxuICByZXR1cm4gZmFsc2U7XG59XG5cblxubW9kdWxlLmV4cG9ydHMgPSB7XG4gIGluaXQgOiBpbml0LFxuICBhZGQgOiBhZGQsXG4gIGdldCA6IGdldCxcbiAgcmVtb3ZlIDogcmVtb3ZlLFxuICBmaW5kIDogZmluZCxcbiAgZ2V0RXJyb3JzIDogZ2V0RXJyb3JzLFxuICBidWxrQWRkIDogYnVsa0FkZCxcbiAgb24gOiBmdW5jdGlvbihldmVudCwgbGlzdGVuZXIpe1xuICAgIGV2ZW50cy5vbihldmVudCwgbGlzdGVuZXIpO1xuICB9LFxuICByZWNhbGMgOiByZWNhbGMsXG4gIG1hdGVyaWFsUmVjYWxjIDogbWF0ZXJpYWxSZWNhbGMsXG4gIGNvbnRhaW5zIDogY29udGFpbnNcbn07XG4iLCJcInVzZSBzdHJpY3RcIjtcbnZhciB1Y3VtPXJlcXVpcmUoJ3VjdW0uanMnKTtcblxuLy8gVGhlc2UgdGhyb3cgZXJycywgYW5kIG5lZWQgdG8gYmUgaW4gdHJ5IGNhdGNoXG5mdW5jdGlvbiBtdWx0aXBseShhLGIsYV9uYW1lcyxiX25hbWVzKSB7XG4gIHZhciBhbj17dmFsdWU6XCJ2YWx1ZVwiLHVuaXQ6XCJ1bml0XCJ9XG4gICwgYm49e3ZhbHVlOlwidmFsdWVcIix1bml0OlwidW5pdFwifVxuICAsIHBhcnNlZFxuICAgICwgdW5pdFxuICAgICwgcHJlPVtdXG4gICAgLCBtdWx0PXt9XG4gICAgO1xuXG4gICAgaWYgKGFfbmFtZXMpIHtcbiAgICAgIGlmIChhX25hbWVzLnVuaXQpIGFuLnVuaXQ9YV9uYW1lcy51bml0O1xuICAgICAgaWYgKGFfbmFtZXMudmFsdWUpIGFuLnZhbHVlPWFfbmFtZXMudmFsdWU7XG4gICAgfVxuICAgIGlmIChiX25hbWVzKSB7XG4gICAgICBpZiAoYl9uYW1lcy51bml0KSBibi51bml0PWJfbmFtZXMudW5pdDtcbiAgICAgIGlmIChiX25hbWVzLnZhbHVlKSBibi52YWx1ZT1iX25hbWVzLnZhbHVlO1xuICAgIH1cblxuICBwYXJzZWQgPSB1Y3VtLnBhcnNlKCcoJytbYVthbi51bml0XSsnKS4oJytiW2JuLnVuaXRdXSsnKScpO1xuICBtdWx0LnZhbHVlPSgoYVthbi52YWx1ZV0pP2FbYW4udmFsdWVdOjEpKigoYltibi52YWx1ZV0pP2JbYm4udmFsdWVdOjEpKnBhcnNlZC52YWx1ZTtcblxuICAvLyBDb252ZXJ0IHVuaXQgYmFja1xuICBmb3IgKHVuaXQgaW4gcGFyc2VkLnVuaXRzKSB7XG4gICAgcHJlLnB1c2godW5pdCtwYXJzZWQudW5pdHNbdW5pdF0pO1xuICB9XG4gIG11bHQudW5pdD1wcmUuam9pbignLicpO1xuICByZXR1cm4gbXVsdDtcbn1cblxuZnVuY3Rpb24gbXVsdGlwbHlfdG9fdW5pdGxlc3MoYSxiLGFuLGJuKSB7XG4gIHZhciBtdWx0PXVuaXRfbXVsaXRwbHkoYSxiLGFuLGJuKTtcbiAgaWYgKG11bHQudW5pdCAhPT0ge30pIHtcbiAgICB0aHJvdyBtK1wiIGlzIG5vdCB1bml0bGVzc1wiO1xuICB9XG4gIHJldHVybiBtdWx0O1xufVxuXG5mdW5jdGlvbiBzdW0obGlzdCxuYW1lcykge1xuICB2YXIgbj17dmFsdWU6XCJ2YWx1ZVwiLHVuaXQ6XCJ1bml0XCJ9XG4gICwgc3VtXG4gICwgaVxuICAsIGlfdW5pdFxuICA7XG5cbiAgaWYgKG5hbWVzKSB7XG4gICAgaWYgKG5hbWVzLnVuaXQpIG4udW5pdD1uYW1lcy51bml0O1xuICAgIGlmIChuYW1lcy52YWx1ZSkgbi52YWx1ZT1uYW1lcy52YWx1ZTtcbiAgfVxuICBzdW0gPShsaXN0Lmxlbmd0aCA+IDApP3t2YWx1ZTpsaXN0WzBdW24udmFsdWVdLHVuaXQ6bGlzdFswXVtuLnVuaXRdfTp7dmFsdWU6MCx1bml0Ont9fTtcbiAgZm9yIChpPTE7aTxsaXN0Lmxlbmd0aDtpKyspIHtcbiAgICBpX3VuaXQ9IHVjdW0uY29udmVydChsaXN0W2ldW24udmFsdWVdLGxpc3RbaV1bbi51bml0XSxzdW0udW5pdCk7XG4gICAgc3VtLnZhbHVlKz1pX3VuaXQudmFsdWU7XG4gIH1cbiAgcmV0dXJuIHsndmFsdWUnOnN1bS52YWx1ZSwndW5pdCc6c3VtLnVuaXR9O1xufVxuXG5cbmZ1bmN0aW9uIGNsZWFuRG9sbGFycyh1bml0cykge1xuICBpZiggdW5pdHMgPT09IHVuZGVmaW5lZCApIHtcbiAgICByZXR1cm4gJzEnO1xuICB9XG4gIHJldHVybiB1bml0cy5yZXBsYWNlKC8odXMpP1xcJC9nLCAnMScpO1xufVxuXG5cbm1vZHVsZS5leHBvcnRzID0ge1xuICAgc3VtIDogc3VtLFxuICAgbXVsdGlwbHkgOiBtdWx0aXBseSxcbiAgIG11bHRpcGx5X3RvX3VuaXRsZXNzIDogbXVsdGlwbHlfdG9fdW5pdGxlc3MsXG4gICBjbGVhbkRvbGxhcnMgOiBjbGVhbkRvbGxhcnNcbiB9O1xuIiwiJ3VzZSBzdHJpY3QnO1xuLyoqXG4gKiBrZWVwcyB0cmFjayBvZiBtYXRlcmlhbHMsIHByaWNlcyBhbmQgY29tcGxleCBtYXRlcmlhbHMuICBtb3N0bHkgZm9yIGNsaWVudCBhcHAuXG4gKiovXG52YXIgdXVpZCA9IHJlcXVpcmUoJ25vZGUtdXVpZCcpO1xudmFyIHVuaXRzID0gcmVxdWlyZSgnLi4vdW5pdHMnKTtcbnZhciB1dGlscyA9IHJlcXVpcmUoJy4vdXRpbHMnKTtcbnZhciBldmVudHMgPSByZXF1aXJlKCdldmVudHMnKS5FdmVudEVtaXR0ZXI7XG5ldmVudHMgPSBuZXcgZXZlbnRzKCk7XG5ldmVudHMuc2V0TWF4TGlzdGVuZXJzKDEwMDApO1xuXG52YXIgdG90YWwgPSAwO1xudmFyIGZhcm1TaXplID0gMTtcbnZhciBkYXRhID0gW10sIG1hdGVyaWFsQ29udHJvbGxlciwgbGFzdFJlY2FsY01zZztcblxuZnVuY3Rpb24gaW5pdChjb250cm9sbGVyKSB7XG4gIG1hdGVyaWFsQ29udHJvbGxlciA9IGNvbnRyb2xsZXI7XG4gIG1hdGVyaWFsQ29udHJvbGxlci5vbignbWF0ZXJpYWwtdXBkYXRlJywgaGFuZGxlTWF0ZXJpYWxVcGRhdGVzKTtcbiAgdXRpbHMuaW5pdCh0aGlzKTtcbn1cblxuZnVuY3Rpb24gcmVtb3ZlKG5hbWUpIHtcbiAgdmFyIG9wO1xuXG4gIGlmKCB0eXBlb2YgbmFtZSA9PT0gJ29iamVjdCcgJiYgZGF0YS5pbmRleE9mKG5hbWUpID4gLTEgKSB7XG4gICAgb3AgPSBkYXRhLnNwbGljZShkYXRhLmluZGV4T2YobmFtZSksIDEpWzBdO1xuICAgIGV2ZW50cy5lbWl0KCdvcGVyYXRpb24tcmVtb3ZlZCcsIHtvcGVyYXRpb246IG9wfSk7XG5cbiAgICByZXR1cm4gc3VjY2VzcygpO1xuICB9IGVsc2Uge1xuICAgIGZvciggdmFyIGkgPSAwOyBpIDwgZGF0YS5sZW5ndGg7IGkrKyApIHtcbiAgICAgIGlmKCBkYXRhW2ldLm5hbWUgPT09IG5hbWUgICkge1xuICAgICAgICBvcCA9IGRhdGEuc3BsaWNlKGksIDEpWzBdO1xuICAgICAgICBldmVudHMuZW1pdCgnb3BlcmF0aW9uLXJlbW92ZWQnLCB7b3BlcmF0aW9uOiBvcH0pO1xuICAgICAgICByZXR1cm4gc3VjY2VzcygpO1xuICAgICAgfVxuICAgIH1cbiAgfVxuXG4gIHJldHVybiBzZXRFcnJvcignb3BlcmF0aW9uICcrKHR5cGVvZiBuYW1lID09PSAnb2JqZWN0JyA/IG5hbWUubmFtZSA6IG5hbWUpKycgZG9lcyBub3QgZXhpc3QnKTtcbn1cblxuZnVuY3Rpb24gYWRkKG9wZXJhdGlvbiwgb3B0aW9ucykge1xuICBpZiggIW9wdGlvbnMgKSB7XG4gICAgb3B0aW9ucyA9IHt9O1xuICB9XG5cbiAgdmFyIG9wID0gZ2V0KG9wZXJhdGlvbi5uYW1lKTtcbiAgaWYoICFvcC5lcnJvciAmJiAhb3B0aW9ucy5yZXBsYWNlICkge1xuICAgIHJldHVybiBzZXRFcnJvcihvcGVyYXRpb24ubmFtZSwgJ29wZXJhdGlvbiBhbHJlYWR5IGV4aXN0cycpO1xuICB9XG5cbiAgaWYoICFvcGVyYXRpb24ubWF0ZXJpYWxzICkge1xuICAgIG9wZXJhdGlvbi5tYXRlcmlhbHMgPSBbXTtcbiAgfVxuICBmb3IoIHZhciBpID0gMDsgaSA8IG9wZXJhdGlvbi5tYXRlcmlhbHMubGVuZ3RoOyBpKysgKSB7XG4gICAgb3BlcmF0aW9uLm1hdGVyaWFsc1tpXS5pZCA9IHV1aWQudjQoKTtcbiAgfVxuXG4gIHZhciBpc05ldyA9IGZhbHNlO1xuICBpZiggb3AuZXJyb3IgKSB7XG4gICAgaXNOZXcgPSB0cnVlO1xuICAgIGRhdGEucHVzaChvcGVyYXRpb24pO1xuICB9IGVsc2Uge1xuICAgIGRhdGFbZGF0YS5pbmRleE9mKG9wKV0gPSBvcGVyYXRpb247XG4gIH1cblxuXG5cbiAgaWYoIG9wdGlvbnMucmVuYW1lICkge1xuICAgIHJlbW92ZShvcHRpb25zLnJlbmFtZSk7XG4gIH1cblxuICBpZiggIW9wdGlvbnMubm9SZWNhbGMgKSB7XG4gICAgcmVjYWxjKCk7XG4gIH1cblxuICB2YXIgcmVzcG9uc2UgPSB7XG4gICAgb3BlcmF0aW9uIDogb3BlcmF0aW9uLFxuICAgIGlzTmV3IDogaXNOZXcsXG4gICAgcmVwbGFjZWQgOiBvcHRpb25zLnJlbmFtZSxcbiAgICBmbGFnIDogb3B0aW9ucy5mbGFnLCAvLyBsZXQgdGhlIGNhbGxlciBwYXNzIGl0J3Mgb3duIGZsYWdzXG4gICAgc3VjY2VzcyA6IHRydWVcbiAgfTtcblxuICBpZiggIW9wdGlvbnMubm9FdmVudCApIHtcbiAgICBldmVudHMuZW1pdCgnb3BlcmF0aW9uLXVwZGF0ZScsIHJlc3BvbnNlKTtcbiAgfVxuXG4gIHJldHVybiByZXNwb25zZTtcbn1cblxuLy8gYnVsayBhZGQvdXBkYXRlIGl0ZW1zIHdpdGggb25seSBvbmUgcmVjYWxjXG5mdW5jdGlvbiBidWxrQWRkKG9wZXJhdGlvbnMsIG9wdGlvbnMpIHtcbiAgdmFyIGFkZE9wdGlvbnMgPSB7fSwgaTtcbiAgZm9yKCB2YXIga2V5IGluIG9wdGlvbnMgKSB7XG4gICAgYWRkT3B0aW9uc1trZXldID0gb3B0aW9ucztcbiAgfVxuXG4gIGFkZE9wdGlvbnMubm9SZWNhbGMgPSB0cnVlO1xuICBhZGRPcHRpb25zLm5vRXZlbnQgPSB0cnVlO1xuXG4gIHZhciByZXNwb25zZXMgPSB7fTtcbiAgZm9yKCBpID0gMDsgaSA8IG9wZXJhdGlvbnMubGVuZ3RoOyBpKysgKSB7XG4gICAgcmVzcG9uc2VzW29wZXJhdGlvbnNbaV0ubmFtZV0gPSBhZGQob3BlcmF0aW9uc1tpXSwgYWRkT3B0aW9ucyk7XG4gIH1cblxuICAvLyBub3cganVzdCByZWNhbGMgb25jZVxuICByZWNhbGMoKTtcblxuICBmb3IoIGkgPSAwOyBpIDwgb3BlcmF0aW9ucy5sZW5ndGg7IGkrKyApIHtcbiAgICBpZiggcmVzcG9uc2VzW29wZXJhdGlvbnNbaV0ubmFtZV0uZXJyb3IgKSB7XG4gICAgICBjb250aW51ZTtcbiAgICB9XG4gICAgcmVzcG9uc2VzW29wZXJhdGlvbnNbaV0ubmFtZV0uYmx1ayA9IHRydWU7XG4gICAgZXZlbnRzLmVtaXQoJ29wZXJhdGlvbi11cGRhdGUnLCByZXNwb25zZXNbb3BlcmF0aW9uc1tpXS5uYW1lXSk7XG4gIH1cblxuICByZXR1cm4gcmVzcG9uc2VzO1xufVxuXG5mdW5jdGlvbiBnZXQobmFtZSkge1xuICBpZiggIW5hbWUgKSB7XG4gICAgcmV0dXJuIGRhdGE7XG4gIH1cblxuICBmb3IoIHZhciBpID0gMDsgaSA8IGRhdGEubGVuZ3RoOyBpKysgKSB7XG4gICAgaWYoIGRhdGFbaV0ubmFtZSA9PT0gbmFtZSApIHtcbiAgICAgIHJldHVybiBkYXRhW2ldO1xuICAgIH1cbiAgfVxuXG4gIHJldHVybiBzZXRFcnJvcihuYW1lKycgaXMgbm90IGluIHRoZSBtYXRlcmlhbCBsaXN0Jyk7XG59XG5cbmZ1bmN0aW9uIGZpbmQodHh0LCBpZ25vcmUpIHtcbiAgdmFyIHJlID0gbmV3IFJlZ0V4cCgnLionK3R4dCsnLionLCAnaScpO1xuICB2YXIgcmVzdWx0cyA9IFtdLCBrZXk7XG5cbiAgZm9yKCB2YXIgaSA9IDA7IGkgPCBkYXRhLmxlbmd0aDsgaSsrICkge1xuICAgIGlmKCBkYXRhW2ldLm5hbWUubWF0Y2gocmUpICYmIGRhdGFbaV0ubmFtZSAhPT0gaWdub3JlICkge1xuICAgICAgcmVzdWx0cy5wdXNoKGRhdGFbaV0pO1xuICAgIH1cbiAgfVxuXG4gIHJldHVybiByZXN1bHRzO1xufVxuXG4vLyByZWNhbGMgYWxsIGNvbXBsZXggbWF0ZXJpYWwgY29zdHNcbmZ1bmN0aW9uIHJlY2FsYygpIHtcbiAgdmFyIHQgPSBuZXcgRGF0ZSgpLmdldFRpbWUoKTtcblxuICB2YXIgb3BlcmF0aW9uLCBtZXNzYWdlcyA9IFtdO1xuICB0b3RhbCA9IDA7XG4gIHZhciByYW5nZSA9IHtcbiAgICBzdGFydCA6IG51bGwsXG4gICAgc3RvcCA6IG51bGwsXG4gICAgYWxsIDogW11cbiAgfTtcblxuICBmb3IoIHZhciBpID0gMDsgaSA8IGRhdGEubGVuZ3RoOyBpKysgKSB7XG4gICAgb3BlcmF0aW9uID0gZGF0YVtpXTtcbiAgICB2YXIgbmV3TWVzc2FnZXMgPSBvcGVyYXRpb25SZWNhbGMob3BlcmF0aW9uKTtcbiAgICBmb3IoIHZhciBqID0gMDsgaiA8IG5ld01lc3NhZ2VzLmxlbmd0aDsgaisrICkge1xuICAgICAgbWVzc2FnZXMucHVzaChuZXdNZXNzYWdlc1tqXSk7XG4gICAgfVxuXG4gICAgdmFyIHNjaGVkdWxlZCA9IG9wZXJhdGlvbi5zY2hlZHVsZSA/IG9wZXJhdGlvbi5zY2hlZHVsZS5sZW5ndGggOiAwO1xuXG4gICAgaWYoICFvcGVyYXRpb24uc2NoZWR1bGUgKSB7XG4gICAgICBtZXNzYWdlcy5wdXNoKHtcbiAgICAgICAgaW5kZXggOiBpLFxuICAgICAgICBvcGVyYXRpb24gOiBvcGVyYXRpb24ubmFtZSxcbiAgICAgICAgd2FybmluZyA6IHdhcm4oJ05vIHNjaGVkdWxlIHNldCcpXG4gICAgICB9KTtcbiAgICB9IGVsc2Uge1xuICAgICAgdXBkYXRlU2NoZWR1bGVSYW5nZShvcGVyYXRpb24uc2NoZWR1bGUsIHJhbmdlLCBvcGVyYXRpb24ubmFtZSk7XG4gICAgfVxuXG4gICAgb3BlcmF0aW9uLnRvdGFsID0gc2NoZWR1bGVkICogb3BlcmF0aW9uLnN1YnRvdGFsO1xuICAgIHRvdGFsICs9IG9wZXJhdGlvbi50b3RhbDtcbiAgfVxuXG5cbiAgdmFyIHNwZW5kaW5nQnlNb250aCA9IHV0aWxzLmNhbGN1bGF0ZVBlck1vbnRoKHJhbmdlKTtcblxuICBjb25zb2xlLmxvZygnT3BlcmF0aW9uIFJlY2FsYzogJysobmV3IERhdGUoKS5nZXRUaW1lKCkgLSB0KSsnbXMnKTtcblxuICBldmVudHMuZW1pdCgndG90YWwtdXBkYXRlJywge1xuICAgIHRvdGFsIDogdG90YWwsXG4gICAgcmFuZ2UgOiByYW5nZSxcbiAgICBzcGVuZGluZ0J5TW9udGggOiBzcGVuZGluZ0J5TW9udGhcbiAgfSk7XG5cbiAgbGFzdFJlY2FsY01zZyA9IG1lc3NhZ2VzO1xuICByZXR1cm4gbWVzc2FnZXM7XG59XG5cbmZ1bmN0aW9uIG9wZXJhdGlvblJlY2FsYyhvcGVyYXRpb24pIHtcbiAgdmFyIG1hdGVyaWFsRGVmLCBtYXRlcmlhbEltcGwsIG9wVG90YWwgPSAwO1xuICB2YXIgbWVzc2FnZXMgPSBbXTtcblxuICBmb3IoIHZhciBpID0gMDsgaSA8IG9wZXJhdGlvbi5tYXRlcmlhbHMubGVuZ3RoOyBpKysgKSB7XG4gICAgbWF0ZXJpYWxJbXBsID0gb3BlcmF0aW9uLm1hdGVyaWFsc1tpXTtcbiAgICBtYXRlcmlhbEltcGwuZXJyb3IgPSBudWxsO1xuXG4gICAgbWF0ZXJpYWxEZWYgPSBtYXRlcmlhbENvbnRyb2xsZXIuZ2V0KG1hdGVyaWFsSW1wbC5uYW1lKTtcblxuICAgIC8vIHdhcyBhIHNwZWNpZmllZCBtYXRlcmlhbCBub3QgZm91bmQ/XG4gICAgaWYoIG1hdGVyaWFsRGVmLmVycm9yICkge1xuICAgICAgbWF0ZXJpYWxJbXBsLmVycm9yID0gbWF0ZXJpYWxEZWY7IC8vIHRoaXMgaXMgYWN0dWFsbHkgdGhlIGVycm9yIHJlc3BvbnNlIG9iamVjdFxuICAgICAgbWVzc2FnZXMucHVzaCh7XG4gICAgICAgIGlkIDogbWF0ZXJpYWxJbXBsLmlkLFxuICAgICAgICBtYXRlcmlhbCA6IG1hdGVyaWFsSW1wbC5uYW1lLFxuICAgICAgICBvcGVyYXRpb24gOiBvcGVyYXRpb24ubmFtZSxcbiAgICAgICAgZXJyb3IgOiBtYXRlcmlhbERlZlxuICAgICAgfSk7XG4gICAgICBjb250aW51ZTtcbiAgICB9XG5cbiAgICAvLyB3YXMgYSBtYXRlcmlhbCBhbW91bnQgbm90IHNwZWNpZmllZD9cbiAgICBpZiggdHlwZW9mIG1hdGVyaWFsRGVmLnByaWNlICE9PSAnbnVtYmVyJyB8fCBpc05hTihtYXRlcmlhbERlZi5wcmljZSkgKSB7XG4gICAgICBtYXRlcmlhbEltcGwuZXJyb3IgPSBzZXRFcnJvcihtYXRlcmlhbERlZi5uYW1lKycgZm91bmQgYnV0IHByaWNlIGlzIG5vdCBhIG51bWJlci4nKTtcbiAgICAgIG1lc3NhZ2VzLnB1c2goe1xuICAgICAgICBpZCA6IG1hdGVyaWFsSW1wbC5pZCxcbiAgICAgICAgbWF0ZXJpYWwgOiBtYXRlcmlhbEltcGwubmFtZSxcbiAgICAgICAgb3BlcmF0aW9uIDogb3BlcmF0aW9uLm5hbWUsXG4gICAgICAgIHdhcm5pbmcgOiBtYXRlcmlhbEltcGwuZXJyb3JcbiAgICAgIH0pO1xuICAgICAgY29udGludWU7XG4gICAgfVxuXG4gICAgLy8gd2FzIGEgbWF0ZXJpYWwgYW1vdW50IG5vdCBzcGVjaWZpZWQ/XG4gICAgaWYoIG1hdGVyaWFsSW1wbC5hbW91bnQgPT09IHVuZGVmaW5lZCApIHtcbiAgICAgIG1hdGVyaWFsSW1wbC53YXJuaW5nID0gd2FybignTm8gYW1vdW50IHNldC4gIFNldHRpbmcgdG8gMS4nKTtcbiAgICAgIG1lc3NhZ2VzLnB1c2goe1xuICAgICAgICBpZCA6IG1hdGVyaWFsSW1wbC5pZCxcbiAgICAgICAgbWF0ZXJpYWwgOiBtYXRlcmlhbEltcGwubmFtZSxcbiAgICAgICAgb3BlcmF0aW9uIDogb3BlcmF0aW9uLm5hbWUsXG4gICAgICAgIHdhcm5pbmcgOiBtYXRlcmlhbEltcGwud2FybmluZ1xuICAgICAgfSk7XG4gICAgICBtYXRlcmlhbEltcGwuYW1vdW50ID0gMTtcbiAgICB9XG5cbiAgICB2YXIgdmFsdWUgPSB1bml0cy5jYWxjdWxhdGVPcE1hdGVyaWFsUHJpY2UobWF0ZXJpYWxEZWYsIG1hdGVyaWFsSW1wbCk7XG4gICAgaWYoIHZhbHVlLmVycm9yICkge1xuICAgICAgbWF0ZXJpYWxJbXBsLnByaWNlID0gMDtcbiAgICAgIG1hdGVyaWFsSW1wbC5lcnJvciA9IHZhbHVlO1xuICAgIH0gZWxzZSB7XG4gICAgICBtYXRlcmlhbEltcGwucHJpY2UgPSB2YWx1ZS52YWx1ZTtcbiAgICB9XG5cbiAgICAvLyBkaWQgc29tZXRoaW5nIGJhZCBoYXBwZW4gaW4gcHJpY2UgY2FsY3VsYXRpb24/XG4gICAgaWYoIGlzTmFOKG1hdGVyaWFsSW1wbC5wcmljZSkgKSB7XG4gICAgICBtYXRlcmlhbEltcGwuZXJyb3IgPSBzZXRFcnJvcignUHJpY2UgY2FsY3VsYXRlZCB0byBOYU4uICBNYXRlcmlhbCBub3QgaW5jbHVkZWQgaW4gdG90YWwuJyk7XG4gICAgICBtZXNzYWdlcy5wdXNoKHtcbiAgICAgICAgb3BlcmF0aW9uIDogb3BlcmF0aW9uLm5hbWUsXG4gICAgICAgIG1hdGVyaWFsIDogbWF0ZXJpYWxJbXBsLm5hbWUsXG4gICAgICAgIGlkIDogbWF0ZXJpYWxJbXBsLmlkLFxuICAgICAgICBlcnJvciA6IG1hdGVyaWFsSW1wbC5lcnJvclxuICAgICAgfSk7XG4gICAgICBjb250aW51ZTtcbiAgICB9XG5cbiAgICBvcFRvdGFsICs9IG1hdGVyaWFsSW1wbC5wcmljZTtcbiAgfVxuXG4gIG9wZXJhdGlvbi5zdWJ0b3RhbCA9IG9wVG90YWw7XG5cbiAgaWYoIG9wZXJhdGlvbi5wZXJBY3JlICkge1xuICAgIG9wZXJhdGlvbi5zdWJ0b3RhbCA9IGZhcm1TaXplICogb3BlcmF0aW9uLnN1YnRvdGFsO1xuICB9XG5cbiAgcmV0dXJuIG1lc3NhZ2VzO1xufVxuXG5cbmZ1bmN0aW9uIHVwZGF0ZVNjaGVkdWxlUmFuZ2Uoc2NoZWR1bGUsIHJhbmdlLCBuYW1lKSB7XG4gIHZhciBwYXJ0cywgZGF0ZTtcbiAgc2NoZWR1bGUuZm9yRWFjaChmdW5jdGlvbihkKXtcbiAgICBwYXJ0cyA9IGQuZGF0ZS5zcGxpdCgnLScpO1xuICAgIGRhdGUgPSBuZXcgRGF0ZShwYXJzZUludChwYXJ0c1swXSksIHBhcnNlSW50KHBhcnRzWzFdKS0xLCBwYXJzZUludChwYXJ0c1syXSkpO1xuXG4gICAgcmFuZ2UuYWxsLnB1c2goe1xuICAgICAgZGF0ZSA6IGRhdGUsXG4gICAgICBsZW5ndGggOiBkLmxlbmd0aCxcbiAgICAgIHVuaXRzIDogZC51bml0cyxcbiAgICAgIG5hbWUgOiBuYW1lXG4gICAgfSk7XG5cbiAgICBpZiggcmFuZ2Uuc3RhcnQgPT09IG51bGwgKSB7XG4gICAgICByYW5nZS5zdGFydCA9IGRhdGU7XG4gICAgfSBlbHNlIGlmKCByYW5nZS5zdGFydC5nZXRUaW1lKCkgPiBkYXRlLmdldFRpbWUoKSApIHtcbiAgICAgIHJhbmdlLnN0YXJ0ID0gZGF0ZTtcbiAgICB9XG5cbiAgICBpZiggcmFuZ2Uuc3RvcCA9PT0gbnVsbCApIHtcbiAgICAgIHJhbmdlLnN0b3AgPSBkYXRlO1xuICAgIH0gZWxzZSBpZiggcmFuZ2Uuc3RvcC5nZXRUaW1lKCkgPCBkYXRlLmdldFRpbWUoKSApIHtcbiAgICAgIHJhbmdlLnN0b3AgPSBkYXRlO1xuICAgIH1cbiAgfSk7XG59XG5cbmZ1bmN0aW9uIGhhbmRsZU1hdGVyaWFsVXBkYXRlcyhlKSB7XG5cbiAgaWYoIGUuYmx1ayApIHtcbiAgICByZXR1cm47IC8vIGlnbm9yZSBldmVudCBmcm9tIGJsdWsgdXBkYXRlc1xuICAgIC8vIGJsdWsgdXBkYXRlciB3aWxsIG1hbnVhbGx5IHBva2UgcmVjYWxjKCk7XG4gIH1cblxuICB2YXIgbWF0ZXJpYWwgPSBlLm1hdGVyaWFsO1xuICB2YXIgcmVwbGFjZWQgPSBlLnJlcGxhY2VkO1xuXG4gIHJlY2FsYygpO1xuXG4gIGZvciggdmFyIGkgPSAwOyBpIDwgZGF0YS5sZW5ndGg7IGkrKyApIHtcbiAgICB2YXIgb3BlcmF0aW9uID0gZGF0YVtpXTtcbiAgICB2YXIgZmlyZUNoYW5nZSA9IGZhbHNlO1xuXG4gICAgZm9yKCB2YXIgaiA9IDA7IGogPCBvcGVyYXRpb24ubWF0ZXJpYWxzLmxlbmd0aDsgaisrICkge1xuICAgICAgdmFyIG1hdGVyaWFsSW1wbCA9IG9wZXJhdGlvbi5tYXRlcmlhbHNbal07XG5cbiAgICAgIC8vIHVwZGF0ZSBhbnkgcmVuYW1lc1xuICAgICAgaWYoIG1hdGVyaWFsSW1wbC5uYW1lID09PSByZXBsYWNlZCApIHtcbiAgICAgICAgbWF0ZXJpYWxJbXBsLm5hbWUgPSBtYXRlcmlhbC5uYW1lO1xuICAgICAgICBmaXJlQ2hhbmdlID0gdHJ1ZTtcblxuICAgICAgLy8gbG9vayB0byBzZWUgaWYgdGhpcyBvcGVyYXRpb24gaGFzIHRoZSB1cGRhdGVkIG1hdGVyaWFsXG4gICAgICAvLyByZWN1cnNpdmVseSBjaGVjayBjb21wbGV4IGVsZW1lbnRzXG4gICAgICB9IGVsc2UgaWYoIG1hdGVyaWFsQ29udHJvbGxlci5jb250YWlucyhtYXRlcmlhbEltcGwsIG1hdGVyaWFsLm5hbWUsIHJlcGxhY2VkKSApIHtcbiAgICAgICAgICBmaXJlQ2hhbmdlID0gdHJ1ZTtcbiAgICAgIH1cblxuICAgICAgaWYoIGZpcmVDaGFuZ2UgKSB7XG4gICAgICAgIGV2ZW50cy5lbWl0KCdvcGVyYXRpb24tdXBkYXRlJywge1xuICAgICAgICAgIG9wZXJhdGlvbjogb3BlcmF0aW9uXG4gICAgICAgIH0pO1xuICAgICAgfVxuICAgIH1cbiAgfVxufVxuXG5mdW5jdGlvbiBzZXRGYXJtU2l6ZShzaXplKSB7XG4gIGZhcm1TaXplID0gc2l6ZTtcbn1cblxuZnVuY3Rpb24gZ2V0TGFzdFJlY2FsY01zZygpIHtcbiAgcmV0dXJuIGxhc3RSZWNhbGNNc2c7XG59XG5cbmZ1bmN0aW9uIHN1Y2Nlc3MoKSB7XG4gIHJldHVybiB7c3VjY2VzczogdHJ1ZX07XG59XG5cbmZ1bmN0aW9uIHNldEVycm9yKG1zZykge1xuICByZXR1cm4ge1xuICAgIGVycm9yIDogdHJ1ZSxcbiAgICBtZXNzYWdlIDogbXNnXG4gIH07XG59XG5cbmZ1bmN0aW9uIHdhcm4obXNnKSB7XG4gIHJldHVybiB7XG4gICAgd2FybmluZyA6IHRydWUsXG4gICAgbWVzc2FnZSA6IG1zZ1xuICB9O1xufVxuXG5cbm1vZHVsZS5leHBvcnRzID0ge1xuICBhZGQgOiBhZGQsXG4gIGdldCA6IGdldCxcbiAgcmVtb3ZlIDogcmVtb3ZlLFxuICBidWxrQWRkIDogYnVsa0FkZCxcbiAgZmluZCA6IGZpbmQsXG4gIG9uIDogZnVuY3Rpb24oZXZlbnQsIGxpc3RlbmVyKXtcbiAgICBldmVudHMub24oZXZlbnQsIGxpc3RlbmVyKTtcbiAgfSxcbiAgcmVjYWxjIDogcmVjYWxjLFxuICBpbml0IDogaW5pdCxcbiAgZ2V0TGFzdFJlY2FsY01zZyA6IGdldExhc3RSZWNhbGNNc2csXG4gIGFkZFVwZGF0ZU1hdGVyaWFsIDogdXRpbHMuYWRkVXBkYXRlTWF0ZXJpYWwsXG4gIHNldEZhcm1TaXplIDogc2V0RmFybVNpemVcbn07XG4iLCIndXNlIHN0cmljdCc7XG5cbnZhciB1dWlkID0gcmVxdWlyZSgnbm9kZS11dWlkJyk7XG52YXIgb3BlcmF0aW9uQ29udHJvbGxlcjtcbnZhciBtc1BlckRheSA9IDg2NDAwMDAwO1xuXG5mdW5jdGlvbiBpbml0KGNvbnRyb2xsZXIpIHtcbiAgb3BlcmF0aW9uQ29udHJvbGxlciA9IGNvbnRyb2xsZXI7XG59XG5cbmZ1bmN0aW9uIGFkZFVwZGF0ZU1hdGVyaWFsKG9wZXJhdGlvbiwgbWF0ZXJpYWxJbXBsKSB7XG4gIGlmKCAhbWF0ZXJpYWxJbXBsLmlkICkge1xuICAgIG1hdGVyaWFsSW1wbC5pZCA9IHV1aWQudjQoKTtcbiAgICBvcGVyYXRpb24ubWF0ZXJpYWxzLnB1c2gobWF0ZXJpYWxJbXBsKTtcbiAgICByZXR1cm4ge3N1Y2Nlc3M6dHJ1ZSwgbWVzc2FnZTogJ2FkZGVkJ307XG4gIH1cblxuICBmb3IoIHZhciBpID0gMDsgaSA8IG9wZXJhdGlvbi5tYXRlcmlhbHMubGVuZ3RoOyBpKysgKSB7XG4gICAgaWYoIG9wZXJhdGlvbi5tYXRlcmlhbHNbaV0uaWQgPT09IG1hdGVyaWFsSW1wbC5pZCApIHtcbiAgICAgIG9wZXJhdGlvbi5tYXRlcmlhbHNbaV0gPSBtYXRlcmlhbEltcGw7XG4gICAgICByZXR1cm4ge3N1Y2Nlc3M6dHJ1ZSwgbWVzc2FnZTogJ3VwZGF0ZWQnfTtcbiAgICB9XG4gIH1cblxuICBvcGVyYXRpb24ubWF0ZXJpYWxzLnB1c2gobWF0ZXJpYWxJbXBsKTtcbiAgcmV0dXJuIHtzdWNjZXNzOnRydWUsIG1lc3NhZ2U6ICdhZGRlZCd9O1xufVxuXG5mdW5jdGlvbiBjYWxjdWxhdGVQZXJNb250aChyYW5nZSkge1xuXG4gIHZhciBudW1Nb250aHMgPSBnZXROdW1Nb250aHMocmFuZ2UpO1xuXG4gIHZhciBtb250aHMgPSBbXTtcblxuICBpZiggIXJhbmdlLnN0YXJ0ICkge1xuICAgIHJldHVybiBtb250aHM7XG4gIH1cblxuICB2YXIgbGFzdCA9IHJhbmdlLnN0YXJ0O1xuICBtb250aHMucHVzaCh7XG4gICAgbW9udGggOiB0b01vbnRoU3RyaW5nKGxhc3QpLFxuICAgIHRvdGFsIDogMFxuICB9KTtcblxuICBmb3IoIHZhciBpID0gMTsgaSA8IG51bU1vbnRoczsgaSsrICkge1xuICAgIGxhc3QgPSBuZXh0TW9udGgobGFzdCk7XG5cbiAgICBtb250aHMucHVzaCh7XG4gICAgICBtb250aCA6IHRvTW9udGhTdHJpbmcobGFzdCksXG4gICAgICB0b3RhbCA6IDBcbiAgICB9KTtcbiAgfVxuXG4gIHZhciBvcGVyYXRpb25zID0gb3BlcmF0aW9uQ29udHJvbGxlci5nZXQoKTtcbiAgZm9yKCB2YXIgeiA9IDA7IHogPCBvcGVyYXRpb25zLmxlbmd0aDsgeisrICkge1xuICAgIHZhciBvcGVyYXRpb24gPSBvcGVyYXRpb25zW3pdO1xuICAgIGlmKCAhb3BlcmF0aW9uLnNjaGVkdWxlICkge1xuICAgICAgY29udGludWU7XG4gICAgfVxuXG4gICAgZm9yKCB2YXIgaiA9IDA7IGogPCBvcGVyYXRpb24uc2NoZWR1bGUubGVuZ3RoOyBqKysgKSB7XG4gICAgICB2YXIgZGF0ZSA9IG9wZXJhdGlvbi5zY2hlZHVsZVtqXTtcblxuICAgICAgdmFyIGQgPSB0b0RhdGUoZGF0ZS5kYXRlKTtcbiAgICAgIHZhciBpbmRleCA9IGdldE1vbnRoSW5kZXgodG9Nb250aFN0cmluZyhkKSwgbW9udGhzKTtcbiAgICAgIHZhciBsZW5ndGggPSBnZXRJbnRlcnZhbFRpbWUoZGF0ZSk7XG5cbiAgICAgIGZvciggaSA9IDA7IGkgPCBsZW5ndGg7IGkrKyApIHtcbiAgICAgICAgaWYoIG1vbnRocy5sZW5ndGggPD0gaStpbmRleCApIHtcbiAgICAgICAgICBtb250aHMucHVzaCh7XG4gICAgICAgICAgICBtb250aCA6IHRvTW9udGhTdHJpbmcoZCksXG4gICAgICAgICAgICB0b3RhbCA6IDBcbiAgICAgICAgICB9KTtcbiAgICAgICAgfVxuXG4gICAgICAgIG1vbnRoc1tpK2luZGV4XS50b3RhbCArPSAob3BlcmF0aW9uLnN1YnRvdGFsIC8gbGVuZ3RoKTtcbiAgICAgICAgbW9udGhzW2kraW5kZXhdW29wZXJhdGlvbi5uYW1lXSA9IG9wZXJhdGlvbi5zdWJ0b3RhbCAvIGxlbmd0aDtcbiAgICAgIH1cbiAgICB9XG4gIH1cblxuICByZXR1cm4gbW9udGhzO1xufVxuXG5mdW5jdGlvbiBnZXRNb250aEluZGV4KG1vbnRoLCBtb250aHMpIHtcbiAgdmFyIHQgPSBuZXcgRGF0ZSgpLmdldFRpbWUoKTtcbiAgZm9yKCB2YXIgaSA9IDA7IGkgPCBtb250aHMubGVuZ3RoOyBpKysgKSB7XG4gICAgaWYoIG1vbnRoc1tpXS5tb250aCA9PT0gbW9udGggKSB7XG4gICAgICByZXR1cm4gaTtcbiAgICB9XG4gIH1cbiAgcmV0dXJuIDA7XG59XG5cbmZ1bmN0aW9uIHRvRGF0ZShkYXRlU3RyKSB7XG4gIHZhciBwYXJ0cyA9IGRhdGVTdHIuc3BsaXQoJy0nKTtcbiAgcmV0dXJuIG5ldyBEYXRlKHBhcnNlSW50KHBhcnRzWzBdKSwgcGFyc2VJbnQocGFydHNbMV0pLTEsIHBhcnNlSW50KHBhcnRzWzJdKSk7XG59XG5cbmZ1bmN0aW9uIHRvTW9udGhTdHJpbmcoZGF0ZSkge1xuICBpZiggIWRhdGUgKSB7XG4gICAgcmV0dXJuICcxLzE5MDAnO1xuICB9XG4gIHJldHVybiAoZGF0ZS5nZXRNb250aCgpKzEpKycvJysoZGF0ZS5nZXRZZWFyKCkrMTkwMCk7XG59XG5cbmZ1bmN0aW9uIG5leHRNb250aChkYXRlKSB7XG4gIHJldHVybiBuZXcgRGF0ZShkYXRlLmdldFllYXIoKSsxOTAwLCBkYXRlLmdldE1vbnRoKCkrMSwgZGF0ZS5nZXREYXRlKCkpO1xufVxuXG5mdW5jdGlvbiBnZXROdW1Nb250aHMocmFuZ2UpIHtcbiAgaWYoICFyYW5nZS5zdG9wIHx8ICFyYW5nZS5zdGFydCApIHtcbiAgICByZXR1cm4gMTtcbiAgfVxuXG4gIHZhciBkaWZmID0gcmFuZ2Uuc3RvcC5nZXRUaW1lKCkgLSByYW5nZS5zdGFydC5nZXRUaW1lKCk7XG4gIGlmKCBkaWZmIDwgODY0MDAwMDAgKiAzMCApIHtcbiAgICBkaWZmID0gODY0MDAwMDAgKiAzMDtcbiAgfVxuXG4gIHZhciBkYXlzID0gZGlmZiAvIDg2NDAwMDAwO1xuICByZXR1cm4gTWF0aC5jZWlsKGRheXMgLyAzMCk7XG59XG5cbmZ1bmN0aW9uIGdldEludGVydmFsVGltZShkYXRlKSB7XG4gIHZhciBsID0gcGFyc2VJbnQoZGF0ZS5sZW5ndGgpO1xuICBpZiggZGF0ZS51bml0cyA9PT0gJ3llYXInICkge1xuICAgIHJldHVybiBsICogMTI7XG4gIH0gZWxzZSBpZiggZGF0ZS51bml0cyA9PT0gJ21vbnRoJyApIHtcbiAgICByZXR1cm4gbDtcbiAgfSBlbHNlIHtcbiAgICByZXR1cm4gMTtcbiAgfVxufVxuXG5tb2R1bGUuZXhwb3J0cyA9IHtcbiAgaW5pdCA6IGluaXQsXG4gIGNhbGN1bGF0ZVBlck1vbnRoIDogY2FsY3VsYXRlUGVyTW9udGgsXG4gIGFkZFVwZGF0ZU1hdGVyaWFsIDogYWRkVXBkYXRlTWF0ZXJpYWxcbn07XG4iLCIndXNlIHN0cmljdCc7XG5cbi8qKlxuICogVHJhbnNmb3JtIHRoZSBwbHY4IG9iamVjdCBkZXNjcmlwdGlvbiB0byBhcHAgb2JqZWN0IGRlc2NyaXB0aW9uLlxuICogaW4gdGhlIGVuZCwgdGhpcyBzaG91bGRuJ3QgZG8gbXVjaC4gIGp1c3QgYSBsaXR0bGUgYXBwIHN1Z2FyLlxuICoqL1xuXG4gbW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbihjb25maWcpIHtcbiAgIHZhciBhcHAgPSB7XG4gICAgIGNsYXNzZXMgOiB7fSxcbiAgICAgbWF0ZXJpYWxzIDogW10sXG4gICAgIG9wZXJhdGlvbnMgOiBbXSxcbiAgICAgZmFybSA6IHt9XG4gICB9O1xuXG4gICBpZiggY29uZmlnLm1hdGVyaWFscyApIHtcbiAgICAgYXBwLm1hdGVyaWFscyA9IGdldE1hdGVyaWFscyhjb25maWcubWF0ZXJpYWxzKTtcbiAgICAgYXBwLmNsYXNzZXMgPSBnZXRDbGFzc2VzKGFwcC5tYXRlcmlhbHMpO1xuICAgfVxuICAgaWYoIGNvbmZpZy5wcmljZXMgKSB7XG4gICAgIGpvaW5QcmljZXMoYXBwLm1hdGVyaWFscywgY29uZmlnLnByaWNlcyk7XG4gICB9XG5cbiAgIGlmKCBjb25maWcuZmFybSApIHtcbiAgICAgdmFyIGZhcm0gPSBjb25maWcuZmFybVswXTtcbiAgICAgYXBwLmZhcm0gPSBnZXRGYXJtKGZhcm0pO1xuXG4gICAgIGlmKCBmYXJtLm9wZXJhdGlvbnMgKSB7XG4gICAgICAgYXBwLm9wZXJhdGlvbnMgPSBnZXRPcGVyYXRpb25zKGZhcm0ub3BlcmF0aW9ucyk7XG4gICAgIH1cbiAgICAgaWYoIGZhcm0uc2NoZWR1bGUgKSB7XG4gICAgICAgam9pblNjaGVkdWxlKGFwcC5vcGVyYXRpb25zLCBmYXJtLnNjaGVkdWxlKTtcbiAgICAgfVxuICAgfVxuXG4gICByZXR1cm4gYXBwO1xuIH07XG5cbiBmdW5jdGlvbiBqb2luU2NoZWR1bGUob3BlcmF0aW9ucywgc2NoZWR1bGVzKSB7XG4gICBmb3IoIHZhciBpID0gMDsgaSA8IHNjaGVkdWxlcy5sZW5ndGg7IGkrKyApIHtcbiAgICAgdmFyIHNjaGVkdWxlID0gc2NoZWR1bGVzW2ldO1xuICAgICBmb3IoIHZhciBqID0gMDsgaiA8IG9wZXJhdGlvbnMubGVuZ3RoOyBqKysgKSB7XG4gICAgICAgaWYoIHNjaGVkdWxlLm9wZXJhdGlvbiA9PT0gb3BlcmF0aW9uc1tqXS5uYW1lICkge1xuICAgICAgICAgdmFyIHBhcnRzID0gc2NoZWR1bGUuZHVyYXRpb24uc3BsaXQoJyAnKTtcblxuICAgICAgICAgaWYoIHBhcnRzWzFdLm1hdGNoKC9tb24vKSApIHtcbiAgICAgICAgICAgcGFydHNbMV0gPSAnbW9udGgnO1xuICAgICAgICAgfSBlbHNlIGlmICggcGFydHNbMV0ubWF0Y2goL3llYXIvKSApIHtcbiAgICAgICAgICAgcGFydHNbMV0gPSAneWVhcic7XG4gICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICBwYXJ0c1sxXSA9ICdkYXknO1xuICAgICAgICAgfVxuXG4gICAgICAgIG9wZXJhdGlvbnNbal0uc2NoZWR1bGUucHVzaCh7XG4gICAgICAgICAgZGF0ZSA6IHNjaGVkdWxlLnN0YXJ0LFxuICAgICAgICAgIGxlbmd0aCA6IHBhcnRzWzBdLFxuICAgICAgICAgIHVuaXRzIDogcGFydHNbMV1cbiAgICAgICAgfSk7XG5cbiAgICAgICAgYnJlYWs7XG4gICAgICAgfVxuICAgICB9XG4gICB9XG4gfVxuXG5mdW5jdGlvbiBqb2luUHJpY2VzKG1hdGVyaWFscywgcHJpY2VzKSB7XG4gIGZvciggdmFyIGkgPSAwOyBpIDwgcHJpY2VzLmxlbmd0aDsgaSsrICkge1xuICAgIHZhciBwcmljZSA9IHByaWNlc1tpXTtcbiAgICB2YXIgZm91bmQgPSBmYWxzZTtcblxuICAgIGZvciggdmFyIGogPSAwOyBqIDwgbWF0ZXJpYWxzLmxlbmd0aDsgaisrICkge1xuICAgICAgaWYoIG1hdGVyaWFsc1tqXS5uYW1lID09PSBwcmljZS5tYXRlcmlhbCApIHtcblxuICAgICAgICBpZiggbWF0ZXJpYWxzW2pdLnR5cGUgPT09ICdjb21wbGV4JyApIHtcbiAgICAgICAgICBtYXRlcmlhbHNbal0ubWF0ZXJpYWxzLkVzdGltYXRlID0ge1xuICAgICAgICAgICAgdW5pdHMgOiAndXMkJyxcbiAgICAgICAgICAgIGFtb3VudCA6IHByaWNlLnByaWNlXG4gICAgICAgICAgfTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICBtYXRlcmlhbHNbal0ucHJpY2UgPSBwcmljZS5wcmljZTtcbiAgICAgICAgICBtYXRlcmlhbHNbal0udW5pdHMgPSBwcmljZS51bml0O1xuICAgICAgICB9XG5cbiAgICAgICAgZm91bmQgPSB0cnVlO1xuICAgICAgICBicmVhaztcblxuICAgICAgfVxuICAgIH1cblxuICAgIGlmKCAhZm91bmQgKSB7XG4gICAgICAvKmNvbnNvbGUubG9nKHtcbiAgICAgICAgbmFtZSA6IHByaWNlLm1hdGVyaWFsLFxuICAgICAgICBwcmljZSA6IHByaWNlLnByaWNlLFxuICAgICAgICB1bml0cyA6IHByaWNlLnVuaXRcbiAgICAgIH0pOyovXG5cbiAgICAgIG1hdGVyaWFscy5wdXNoKHtcbiAgICAgICAgbmFtZSA6IHByaWNlLm1hdGVyaWFsLFxuICAgICAgICBwcmljZSA6IHByaWNlLnByaWNlLFxuICAgICAgICB1bml0cyA6IHByaWNlLnVuaXRcbiAgICAgIH0pOyAvLyBUT0RPOiBzb21lIG1hdGVyaWFscyBkbyBub3Qgc2VlbSB0byBhcHBlYXIgaW4gbWF0ZXJpYWwgbGlzdFxuICAgIH1cblxuICB9XG59XG5cbmZ1bmN0aW9uIGdldE1hdGVyaWFscyhpbmZvKSB7XG4gIHZhciBtYXRlcmlhbHMgPSBbXTtcblxuICBpbmZvLmZvckVhY2goZnVuY3Rpb24oaSl7XG4gICAgaS5uYW1lID0gaS5tYXRlcmlhbDtcbiAgICBkZWxldGUgaS5tYXRlcmlhbDtcblxuICAgIGkudW5pdHMgPSBpLnVuaXQ7XG4gICAgZGVsZXRlIGkudW5pdDtcblxuICAgIGlmKCAhaS5yZXF1aXJlcyApIHtcbiAgICAgIG1hdGVyaWFscy5wdXNoKGkpO1xuICAgICAgcmV0dXJuO1xuICAgIH1cblxuICAgIGkudHlwZSA9ICdjb21wbGV4JztcbiAgICBpLm1hdGVyaWFscyA9IHt9O1xuXG4gICAgZm9yKCB2YXIgaiA9IDA7IGogPCBpLnJlcXVpcmVzLmxlbmd0aDsgaisrICkge1xuICAgICAgaS5tYXRlcmlhbHNbaS5yZXF1aXJlc1tqXS5tYXRlcmlhbF0gPSB7XG4gICAgICAgIGFtb3VudCA6IGkucmVxdWlyZXNbal0uYW1vdW50LFxuICAgICAgICBvcmlnaW5hbEFtb3VudCA6IGkucmVxdWlyZXNbal0uYW1vdW50LFxuICAgICAgICB1bml0cyA6IGkucmVxdWlyZXNbal0udW5pdFxuICAgICAgfTtcbiAgICB9XG5cbiAgICBkZWxldGUgaS5yZXF1aXJlcztcblxuICAgIG1hdGVyaWFscy5wdXNoKGkpO1xuICB9KTtcblxuICByZXR1cm4gbWF0ZXJpYWxzO1xufVxuXG5mdW5jdGlvbiBnZXRPcGVyYXRpb25zKGluZm8pIHtcbiAgdmFyIG9wcyA9IFtdO1xuXG4gIGluZm8uZm9yRWFjaChmdW5jdGlvbihpKXtcbiAgICB2YXIgb3AgPSB7XG4gICAgICBuYW1lIDogaS5vcGVyYXRpb24sXG4gICAgICBtYXRlcmlhbHMgOiBbXSxcbiAgICAgIHVuaXRzIDogJ1thY3JfdXNdJyxcbiAgICAgIHNjaGVkdWxlIDogW11cbiAgICB9O1xuXG4gICAgZm9yKCB2YXIgaiA9IDA7IGogPCBpLm1hdGVyaWFscy5sZW5ndGg7IGorKyApIHtcbiAgICAgIGkubWF0ZXJpYWxzW2pdLnVuaXRzID0gaS5tYXRlcmlhbHNbal0udW5pdDtcbiAgICAgIGRlbGV0ZSBpLm1hdGVyaWFsc1tqXS51bml0O1xuICAgICAgXG4gICAgICBpLm1hdGVyaWFsc1tqXS5uYW1lID0gaS5tYXRlcmlhbHNbal0ubWF0ZXJpYWw7XG4gICAgICBkZWxldGUgaS5tYXRlcmlhbHNbal0ubWF0ZXJpYWw7XG5cbiAgICAgIG9wLm1hdGVyaWFscy5wdXNoKGkubWF0ZXJpYWxzW2pdKTtcbiAgICB9XG5cbiAgICBvcHMucHVzaChvcCk7XG4gIH0pO1xuXG4gIHJldHVybiBvcHM7XG59XG5cbmZ1bmN0aW9uIGdldEZhcm0oaW5mbykge1xuICB2YXIgZmFybSA9IHt9O1xuICBmb3IoIHZhciBrZXkgaW4gaW5mbyApIHtcbiAgICBpZiggdHlwZW9mIGluZm9ba2V5XSA9PT0gJ3N0cmluZycgKSB7XG4gICAgICBmYXJtW2tleV0gPSBpbmZvW2tleV07XG4gICAgfVxuICB9XG4gIHJldHVybiBmYXJtO1xufVxuXG5mdW5jdGlvbiBnZXRDbGFzc2VzKG1hdGVyaWFscykge1xuICB2YXIgY2xhc3NlcyA9IHt9O1xuXG4gIG1hdGVyaWFscy5mb3JFYWNoKGZ1bmN0aW9uKG1hdGVyaWFsKXtcbiAgICBpZiggY2xhc3Nlc1ttYXRlcmlhbC5jbGFzc10gKSB7XG4gICAgICBjbGFzc2VzW21hdGVyaWFsLmNsYXNzXS5wdXNoKG1hdGVyaWFsLm5hbWUpO1xuICAgIH0gZWxzZSB7XG4gICAgICBjbGFzc2VzW21hdGVyaWFsLmNsYXNzXSA9IFttYXRlcmlhbC5uYW1lXTtcbiAgICB9XG4gIH0pO1xuXG4gIHJldHVybiBjbGFzc2VzO1xufVxuIiwiLyoqXG4gKiBoZWxwZXIgZmlsZSBmb3IgdGhpbmdzIGxpa2UgVUkgc2VsZWN0b3JzXG4gKiovXG5cbnZhciB0aW1lID0gW1xuICB7XG4gICAgbmFtZSA6ICdtaW51dGUnLFxuICAgIHN5bWJvbCA6ICdtaW4nXG4gIH0sXG4gIHtcbiAgICBuYW1lIDogJ2hvdXInLFxuICAgIHN5bWJvbCA6ICdoJ1xuICB9LFxuICB7XG4gICAgbmFtZSA6ICdkYXknLFxuICAgIHN5bWJvbCA6ICdkJ1xuICB9LFxuICB7XG4gICAgbmFtZSA6ICd5ZWFyJyxcbiAgICBzeW1ib2wgOiAnYSdcbiAgfVxuXTtcblxudmFyIGxlbmd0aCA9IFtcbiAge1xuICAgIG5hbWUgOiAnY2VudGltZXRlcicsXG4gICAgc3ltYm9sIDogJ2NtJyxcbiAgfSxcbiAge1xuICAgIG5hbWUgOiAnaW5jaCcsXG4gICAgc3ltYm9sIDogJ1tpbl91c10nLFxuICAgIGFjY2VwdGVkIDogWydpbiddXG4gIH0sXG4gIHtcbiAgICBuYW1lIDogJ2Zvb3QnLFxuICAgIHN5bWJvbCA6ICdbZnRfdXNdJyxcbiAgICBhY2NlcHRlZCA6IFsnZnQnXVxuICB9LFxuICB7XG4gICAgbmFtZSA6ICdtZXRlcicsXG4gICAgc3ltYm9sIDogJ20nLFxuICB9LFxuICB7XG4gICAgbmFtZSA6ICd5YXJkJyxcbiAgICBzeW1ib2wgOiAnW3lkX3VzXScsXG4gICAgYWNjZXB0ZWQgOiBbJ3lkJ11cbiAgfSxcbiAge1xuICAgIG5hbWUgOiAnbWlsZScsXG4gICAgc3ltYm9sIDogJ1ttaV91c10nLFxuICAgIGFjY2VwdGVkIDogWydtaSddXG4gIH0sXG4gIHtcbiAgICBuYW1lIDogJ2tpbG9tZXRlcicsXG4gICAgc3ltYm9sIDogJ2ttJyxcbiAgfVxuXTtcblxudmFyIGFyZWEgPSBbXG4gIHtcbiAgICBuYW1lIDogJ2hlY3RhcmUnLFxuICAgIHN5bWJvbCA6ICdoYXInLFxuICAgIGFjY2VwdCA6IFsnYXInXVxuICB9LFxuICB7XG4gICAgbmFtZSA6ICdhY3JlJyxcbiAgICBzeW1ib2wgOiAnW2Fjcl91c10nLFxuICAgIGFjY2VwdGVkIDogWydhYyddXG4gIH1cbl07XG5cbnZhciB3ZWlnaHQgPSBbXG4gIHtcbiAgICBuYW1lIDogJ291bmNlJyxcbiAgICBzeW1ib2wgOiAnW296X2F2XScsXG4gICAgYWNjZXB0ZWQgOiBbJ296J11cbiAgfSxcbiAge1xuICAgIG5hbWUgOiAncG91bmQnLFxuICAgIHN5bWJvbCA6ICdbbGJfYXZdJyxcbiAgICBhY2NlcHRlZCA6IFsnbGInXVxuICB9XG5dO1xuXG52YXIgdm9sdW1lID0gW1xuICB7XG4gICAgbmFtZSA6ICdjdXAnLFxuICAgIHN5bWJvbCA6ICdbY3VwX3VzXSdcbiAgfSxcbiAge1xuICAgIG5hbWUgOiAncXVhcnQnLFxuICAgIHN5bWJvbCA6ICdbcXRfdXNdJyxcbiAgICBhY2NlcHRlZCA6IFsncXQnXVxuICB9LFxuICB7XG4gICAgbmFtZSA6ICdwaW50JyxcbiAgICBzeW1ib2wgOiAnW3B0X3VzXScsXG4gICAgYWNjZXB0ZWQgOiBbJ3B0J11cbiAgfSxcbiAge1xuICAgIG5hbWUgOiAnZ2FsbG9uJyxcbiAgICBzeW1ib2wgOiAnW2dhbF91c10nLFxuICAgIGFjY2VwdGVkIDogWydnYWwnXVxuICB9LFxuICB7XG4gICAgbmFtZSA6ICdmbHVpZCBvdW5jZScsXG4gICAgc3ltYm9sIDogJ1tmb3pfdXNdJyxcbiAgICBhY2NlcHRlZCA6IFsnZmxveiddXG4gIH1cbl07XG5cbnZhciBwcmljZSA9IFtcbiAge1xuICAgIG5hbWUgOiAnZG9sbGFyJyxcbiAgICBzeW1ib2wgOiAnJyxcbiAgICBhY2NlcHRlZCA6IFsnJCcsICd1cyQnXVxuICB9XG5dO1xuXG5tb2R1bGUuZXhwb3J0cyA9IHtcbiAgcHJpY2UgOiBwcmljZSxcbiAgdm9sdW1lIDogdm9sdW1lLFxuICB3ZWlnaHQgOiB3ZWlnaHQsXG4gIHRpbWUgOiB0aW1lLFxuICBsZW5ndGggOiBsZW5ndGgsXG4gIGFyZWEgOiBhcmVhXG59XG4iLCIndXNlIHN0cmljdCc7XG5cbnZhciBkZWZpbml0aW9ucyA9IHJlcXVpcmUoJy4vZGVmaW5pdGlvbnMnKTtcbnZhciBtYXRoID0gcmVxdWlyZSgnLi4vbW9kZWwvdW5pdF9tYXRoJyk7XG52YXIgdWN1bSA9IHJlcXVpcmUoJ3VjdW0uanMnKTtcblxudmFyIGxvb2t1cCA9IHt9O1xuZm9yKCB2YXIgdHlwZSBpbiBkZWZpbml0aW9ucyApIHtcbiAgdmFyIGFycmF5ID0gZGVmaW5pdGlvbnNbdHlwZV07XG5cbiAgZm9yKCB2YXIgaSA9IDA7IGkgPCBhcnJheS5sZW5ndGg7IGkrKyApIHtcbiAgICBhcnJheVtpXS50eXBlID0gdHlwZTtcblxuICAgIGxvb2t1cFthcnJheVtpXS5uYW1lXSA9IGFycmF5W2ldO1xuICAgIGlmKCBhcnJheVtpXS5zeW1ib2wgKSB7XG4gICAgICBsb29rdXBbYXJyYXlbaV0uc3ltYm9sXSA9IGFycmF5W2ldO1xuICAgIH1cbiAgICBpZiggYXJyYXlbaV0uYWNjZXB0ZWQgKSB7XG4gICAgICBmb3IoIHZhciBqID0gMDsgaiA8IGFycmF5W2ldLmFjY2VwdGVkLmxlbmd0aDsgaisrICkge1xuICAgICAgICBsb29rdXBbYXJyYXlbaV0uYWNjZXB0ZWRbal1dID0gYXJyYXlbaV07XG4gICAgICB9XG4gICAgfVxuICB9XG59XG5cbi8vIGdldCBsYWJlbCBmb3IgbmFtZS4gIG1vc3RseSBmb3IgZ2V0dGluZyB1cyQgYXMgJCBvciBbdXNfZ2FsXSBhcyBnYWxsb24uXG5mdW5jdGlvbiBnZXRMYWJlbChuYW1lLCBzaG9ydCkge1xuICB2YXIgcGFydHMsIGxhYmVsO1xuXG4gIGlmKCBuYW1lID09PSB1bmRlZmluZWQgKSB7XG4gICAgcmV0dXJuICcnO1xuICB9XG5cbiAgaWYoIG5hbWUuaW5kZXhPZignLycpID4gLTEgKSB7XG4gICAgcGFydHMgPSBuYW1lLnNwbGl0KCcvJyk7XG5cbiAgICBsYWJlbCA9IFtdO1xuICAgIHBhcnRzLmZvckVhY2goZnVuY3Rpb24ocCl7XG4gICAgICBsYWJlbC5wdXNoKGdldExhYmVsKHAsIHNob3J0KSk7XG4gICAgfSk7XG5cbiAgICByZXR1cm4gbGFiZWwuam9pbignLycpO1xuICB9XG5cbiAgaWYoIG5hbWUuaW5kZXhPZignLicpID4gLTEgKSB7XG4gICAgcGFydHMgPSBuYW1lLnNwbGl0KCcuJyk7XG5cbiAgICBsYWJlbCA9IFtdO1xuICAgIHBhcnRzLmZvckVhY2goZnVuY3Rpb24ocCl7XG4gICAgICBsYWJlbC5wdXNoKGdldExhYmVsKHAsIHNob3J0KSk7XG4gICAgfSk7XG5cbiAgICByZXR1cm4gbGFiZWwuam9pbignKicpO1xuICB9XG5cbiAgdmFyIHR4dCA9IG5hbWUudG9Mb3dlckNhc2UoKTtcbiAgaWYoIGxvb2t1cFt0eHRdICkge1xuICAgIGlmKCBzaG9ydCApIHtcbiAgICAgIHJldHVybiBsb29rdXBbdHh0XS5hY2NlcHRlZCA/IGxvb2t1cFt0eHRdLmFjY2VwdGVkWzBdIDogbG9va3VwW3R4dF0uc3ltYm9sO1xuICAgIH1cbiAgICByZXR1cm4gbG9va3VwW3R4dF0ubmFtZTtcbiAgfVxuICByZXR1cm4gbmFtZTtcbn1cblxuLy8gZ2V0IHVuaXRzIG9mIHNhbWUgdHlwZVxuZnVuY3Rpb24gZ2V0TGlrZVVuaXRzKG5hbWUpIHtcbiAgdmFyIHR4dCA9IG5hbWUudG9Mb3dlckNhc2UoKTtcbiAgaWYoICFsb29rdXBbdHh0XSApIHtcbiAgICByZXR1cm4gW107XG4gIH1cblxuICByZXR1cm4gZGVmaW5pdGlvbnNbbG9va3VwW3R4dF0udHlwZV07XG59XG5cbmZ1bmN0aW9uIGludmVydCh1bml0cykge1xuICB1bml0cyA9IG1hdGguY2xlYW5Eb2xsYXJzKHVuaXRzKTtcbiAgdmFyIHJlc3VsdDtcbiAgdHJ5IHtcbiAgICByZXN1bHQgPSB1Y3VtLnBhcnNlKCcxLygnK3VuaXRzKycpJyk7XG4gIH0gY2F0Y2goZSkge1xuICAgIHJldHVybiB1bml0cztcbiAgfVxuXG4gIHZhciBkID0gW10sIG4gPSBbXTtcbiAgZm9yKCB2YXIga2V5IGluIHJlc3VsdC51bml0cyApIHtcbiAgICBpZiggcmVzdWx0LnVuaXRzW2tleV0gPT09IC0xICkge1xuICAgICAgZC5wdXNoKGtleSk7XG4gICAgfSBlbHNlIHtcbiAgICAgIG4ucHVzaChrZXkpO1xuICAgIH1cbiAgfVxuXG4gIGlmKCByZXN1bHQudmFsdWUgPiAxICkge1xuICAgIG4ucHVzaChyZXN1bHQudmFsdWUpO1xuICB9IGVsc2UgaWYgKCByZXN1bHQudmFsdWUgPCAwICkge1xuICAgIGQucHVzaCgxIC8gcmVzdWx0LnZhbHVlKTtcbiAgfVxuXG4gIHVuaXRzID0gbi5qb2luKCcuJyk7XG5cbiAgaWYoIHVuaXRzID09PSAnJyApIHtcbiAgICB1bml0cyA9ICd1cyQnO1xuICB9XG4gIGlmKCBkLmxlbmd0aCA+IDAgKSB7XG4gICAgdW5pdHMgKz0gJy8nK2Quam9pbignLicpO1xuICB9XG5cbiAgcmV0dXJuIHVuaXRzO1xufVxuXG5mdW5jdGlvbiBjYWxjdWxhdGVPcE1hdGVyaWFsUHJpY2UobWF0ZXJpYWxEZWYsIG1hdGVyaWFsSW1wbCkge1xuICB2YXIgY29udmVydDtcblxuICAvLyBUT0RPOiB0aGlzIGlzIHN0cmFuZ2UuLi4gbWluZCBpcyB0aXJlZC4uLiBpcyB0aGlzIGNvcnJlY3Q/XG4gIHZhciB1bml0cyA9IG1hdGVyaWFsRGVmLnVuaXRzO1xuICBpZiggbWF0ZXJpYWxEZWYudHlwZSA9PT0gJ2NvbXBsZXgnICkge1xuICAgIHVuaXRzID0gJzEvKCcrdW5pdHMrJyknO1xuICB9XG5cbiAgaWYoIG1hdGVyaWFsSW1wbC5hbW91bnQgPT09IHVuZGVmaW5lZCApIHtcbiAgICBtYXRlcmlhbEltcGwuYW1vdW50ID0gMTtcbiAgfVxuXG4gIGNvbnZlcnQgPSBjb252ZXJ0VW5pdHMobWF0ZXJpYWxJbXBsLnVuaXRzLCB1bml0cyk7XG4gIGNvbnZlcnQuZGVidWcyID0gbWF0ZXJpYWxJbXBsLmFtb3VudCsnICogJyttYXRlcmlhbERlZi5wcmljZSsnICogJytjb252ZXJ0LnZhbHVlO1xuICBjb252ZXJ0LnZhbHVlID0gbWF0ZXJpYWxJbXBsLmFtb3VudCAqIG1hdGVyaWFsRGVmLnByaWNlICogY29udmVydC52YWx1ZTtcblxuICByZXR1cm4gY29udmVydDtcbn1cblxuZnVuY3Rpb24gY2FsY3VsYXRlQ29tcGxleFByaWNlKG1hdGVyaWFsRGVmLCBtYXRlcmlhbEltcGwsIGNvbXBsZXhNYXRlcmlhbCkge1xuICAvLyBUT0RPOiB0aGlzIGlzIHN0cmFuZ2UuLi4gbWluZCBpcyB0aXJlZC4uLiBpcyB0aGlzIGNvcnJlY3Q/XG4gIHZhciB1bml0cyA9IG1hdGVyaWFsRGVmLnVuaXRzO1xuICBpZiggbWF0ZXJpYWxEZWYudHlwZSA9PT0gJ2NvbXBsZXgnICkge1xuICAgIHVuaXRzID0gJzEvKCcrdW5pdHMrJyknO1xuICB9XG4gIHZhciBjb252ZXJ0ID0gY29udmVydFVuaXRzKG1hdGVyaWFsSW1wbC51bml0cywgdW5pdHMpO1xuXG5cbiAgaWYoIGNvbnZlcnQuZXJyb3IgKSB7XG4gICAgcmV0dXJuIGNvbnZlcnQ7XG4gIH0gZWxzZSBpZiggT2JqZWN0LmtleXMoY29udmVydC51bml0cykubGVuZ3RoID4gMSApIHtcbiAgICByZXR1cm4ge1xuICAgICAgZXJyb3I6IHRydWUsXG4gICAgICBtZXNzYWdlIDogJ1VuaXRzIGRpZG5cXCd0IGNhbmNlbCcsXG4gICAgICBtYXRoIDogbWF0ZXJpYWxJbXBsLnVuaXRzKycgKiAnK21hdGVyaWFsRGVmLnVuaXRzXG4gICAgfTtcbiAgfVxuXG4gIGlmKCBtYXRlcmlhbEltcGwuYW1vdW50ID09PSB1bmRlZmluZWQgKSB7XG4gICAgbWF0ZXJpYWxJbXBsLmFtb3VudCA9IDE7XG4gIH1cblxuICBjb252ZXJ0LmRlYnVnMiA9IG1hdGVyaWFsSW1wbC5hbW91bnQrJyAqICcrbWF0ZXJpYWxEZWYucHJpY2UrJyAqICcrY29udmVydC52YWx1ZTtcbiAgY29udmVydC52YWx1ZSA9IG1hdGVyaWFsSW1wbC5hbW91bnQgKiBtYXRlcmlhbERlZi5wcmljZSAqIGNvbnZlcnQudmFsdWU7XG5cbiAgcmV0dXJuIGNvbnZlcnQ7XG59XG5cbmZ1bmN0aW9uIGNvbnZlcnRVbml0cyh1MSwgdTIpIHtcbiAgdmFyIHRpbWUgPSBuZXcgRGF0ZSgpLmdldFRpbWUoKTtcbiAgdHJ5IHtcbiAgICB2YXIgdDEgPSBtYXRoLmNsZWFuRG9sbGFycyh1MSk7XG4gICAgdmFyIHQyID0gbWF0aC5jbGVhbkRvbGxhcnModTIpO1xuXG4gICAgLy8gdHJ5IGFuZCBzZWUgaWYgd2UgY2FuIGZha2UgaXRcbiAgICBpZiggdDIgPT09ICcxLycrdDEgfHwgdDIgPT09ICcxLygnK3QxKycpJyB8fCB0MSA9PT0gJzEvJyt0MiB8fCB0MSA9PT0gJzEvKCcrdDIrJyknIHx8ICh0MSA9PT0gJycgJiYgdDIgPT09ICcnKSApIHtcbiAgICAgIHJldHVybiB7XG4gICAgICAgIHZhbHVlIDogMSxcbiAgICAgICAgdW5pdHMgOiB7fSxcbiAgICAgICAgc2ltcGxlIDogdHJ1ZSxcbiAgICAgICAgZGVidWcgOiAnKCcrdDErJykuKCcrdDIrJyknXG4gICAgICB9O1xuICAgIH1cblxuICAgIC8vIHdlIGFsbCBibGFuayB1bml0cyBhcyBkb2xsYXJzXG4gICAgaWYoIHQxID09PSAnJyApIHtcbiAgICAgIHQxID0gMTtcbiAgICB9XG4gICAgaWYoIHQyID09PSAnJyApIHtcbiAgICAgIHQyID0gMTtcbiAgICB9XG5cbiAgICB2YXIgdG1wID0gJygnK3QxKycpLignK3QyKycpJztcbiAgICAvL3ZhciB0ID0gdWN1bS5jYW5vbmljYWxpemUodG1wKTtcbiAgICB2YXIgdCA9IHVjdW0ucGFyc2UodG1wKTtcbiAgICB0LmRlYnVnID0gdG1wO1xuICAgIHJldHVybiB0O1xuICB9IGNhdGNoKGUpIHtcbiAgICByZXR1cm4ge1xuICAgICAgZXJyb3IgOiB0cnVlLFxuICAgICAgbWVzc2FnZSA6ICdVbmFibGUgdG8gY29udmVydCB1bml0cycsXG4gICAgICBtYXRoIDogdTErJyAqICcrdTIsXG4gICAgICBkZWJ1ZyA6ICcoJyttYXRoLmNsZWFuRG9sbGFycyh1MSkrJykuKCcrIG1hdGguY2xlYW5Eb2xsYXJzKHUyKSsnKSdcbiAgICB9O1xuICB9XG59XG5cbi8qXG5mdW5jdGlvbiBjb252ZXJ0VW5pdHModTEsIHUyLCB1Mykge1xuICB0cnkge1xuICAgIHZhciB0ID0gIHVjdW0uY2Fub25pY2FsaXplKCcoJyttYXRoLmNsZWFuRG9sbGFycyh1MSkrJykuKCcrIG1hdGguY2xlYW5Eb2xsYXJzKHUyKSsnKS4oJyttYXRoLmNsZWFuRG9sbGFycyh1MykrJyknKTtcbiAgICB0LmRlYnVnID0gJygnK21hdGguY2xlYW5Eb2xsYXJzKHUxKSsnKS4oJysgbWF0aC5jbGVhbkRvbGxhcnModTIpKycpLignK21hdGguY2xlYW5Eb2xsYXJzKHUzKSsnKSc7XG4gICAgcmV0dXJuIHQ7XG4gIH0gY2F0Y2goZSkge1xuICAgIHJldHVybiB7XG4gICAgICBlcnJvciA6IHRydWUsXG4gICAgICBtZXNzYWdlIDogJ1VuYWJsZSB0byBjb252ZXJ0IHVuaXRzJyxcbiAgICAgIG1hdGggOiB1MSsnICogJyt1MisnICogJyt1MyxcbiAgICAgIGRlYnVnIDogJygnK21hdGguY2xlYW5Eb2xsYXJzKHUxKSsnKS4oJysgbWF0aC5jbGVhbkRvbGxhcnModTIpKycpLignK21hdGguY2xlYW5Eb2xsYXJzKHUzKSsnKSdcbiAgICB9O1xuICB9XG59Ki9cblxuXG5tb2R1bGUuZXhwb3J0cyA9IHtcbiAgaW52ZXJ0IDogaW52ZXJ0LFxuICBjb252ZXJ0VW5pdHMgOiBjb252ZXJ0VW5pdHMsXG4gIGdldExhYmVsIDogZ2V0TGFiZWwsXG4gIGdldExpa2VVbml0cyA6IGdldExpa2VVbml0cyxcbiAgbWF0aCA6IG1hdGgsXG4gIGNhbGN1bGF0ZUNvbXBsZXhQcmljZSA6IGNhbGN1bGF0ZUNvbXBsZXhQcmljZSxcbiAgY2FsY3VsYXRlT3BNYXRlcmlhbFByaWNlIDogY2FsY3VsYXRlT3BNYXRlcmlhbFByaWNlLFxuICBsb29rdXAgOiBsb29rdXBcbn07XG4iLCIndXNlIHN0cmljdCc7XG5cbnZhciBtYXRlcmlhbENvbnRyb2xsZXIsIG9wZXJhdGlvbkNvbnRyb2xsZXI7XG5cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24ob0NvbnRyb2wsIG1Db250cm9sKSB7XG4gIG9wZXJhdGlvbkNvbnRyb2xsZXIgPSBvQ29udHJvbDtcbiAgbWF0ZXJpYWxDb250cm9sbGVyID0gbUNvbnRyb2w7XG5cbiAgcmV0dXJuIHtcbiAgICBnZXRBY3RpdmVNYXRlcmlhbHMgOiBnZXRBY3RpdmVNYXRlcmlhbHNcbiAgfTtcbn07XG5cbi8vIGdldCBtYXRlcmlhbHMgY3VycmVudGx5IGluIHVzZSBieSBvcGVyYXRpb25zIGNvbnRyb2xsZXJcbmZ1bmN0aW9uIGdldEFjdGl2ZU1hdGVyaWFscygpIHtcbiAgdmFyIG1hdGVyaWFscyA9IFtdO1xuXG4gIHZhciBvcGVyYXRpb25zID0gb3BlcmF0aW9uQ29udHJvbGxlci5nZXQoKTtcbiAgb3BlcmF0aW9ucy5mb3JFYWNoKGZ1bmN0aW9uKG9wKXtcbiAgICBfZ2V0QWN0aXZlTWF0ZXJpYWxzKG9wLCBtYXRlcmlhbHMpO1xuICB9KTtcblxuICBtYXRlcmlhbHMuc29ydCgpO1xuICByZXR1cm4gbWF0ZXJpYWxzO1xufVxuXG5mdW5jdGlvbiBfZ2V0QWN0aXZlTWF0ZXJpYWxzKG9iaiwgbGlzdCkge1xuICBpZiggIW9iai5tYXRlcmlhbHMgKSB7XG4gICAgcmV0dXJuO1xuICB9XG5cbiAgZm9yKCB2YXIgbmFtZSBpbiBvYmoubWF0ZXJpYWxzICkge1xuICAgIHZhciBkZWYgPSBtYXRlcmlhbENvbnRyb2xsZXIuZ2V0KG5hbWUpO1xuXG4gICAgaWYoIGxpc3QuaW5kZXhPZihkZWYubmFtZSkgPT09IC0xICkge1xuICAgICAgbGlzdC5wdXNoKGRlZi5uYW1lKTtcbiAgICB9XG5cbiAgICBpZiggZGVmLnR5cGUgPT09ICdjb21wbGV4JyApIHtcbiAgICAgIF9nZXRBY3RpdmVNYXRlcmlhbHMoZGVmLCBsaXN0KTtcbiAgICB9XG4gIH1cbn1cbiIsIi8vIENvcHlyaWdodCBKb3llbnQsIEluYy4gYW5kIG90aGVyIE5vZGUgY29udHJpYnV0b3JzLlxuLy9cbi8vIFBlcm1pc3Npb24gaXMgaGVyZWJ5IGdyYW50ZWQsIGZyZWUgb2YgY2hhcmdlLCB0byBhbnkgcGVyc29uIG9idGFpbmluZyBhXG4vLyBjb3B5IG9mIHRoaXMgc29mdHdhcmUgYW5kIGFzc29jaWF0ZWQgZG9jdW1lbnRhdGlvbiBmaWxlcyAodGhlXG4vLyBcIlNvZnR3YXJlXCIpLCB0byBkZWFsIGluIHRoZSBTb2Z0d2FyZSB3aXRob3V0IHJlc3RyaWN0aW9uLCBpbmNsdWRpbmdcbi8vIHdpdGhvdXQgbGltaXRhdGlvbiB0aGUgcmlnaHRzIHRvIHVzZSwgY29weSwgbW9kaWZ5LCBtZXJnZSwgcHVibGlzaCxcbi8vIGRpc3RyaWJ1dGUsIHN1YmxpY2Vuc2UsIGFuZC9vciBzZWxsIGNvcGllcyBvZiB0aGUgU29mdHdhcmUsIGFuZCB0byBwZXJtaXRcbi8vIHBlcnNvbnMgdG8gd2hvbSB0aGUgU29mdHdhcmUgaXMgZnVybmlzaGVkIHRvIGRvIHNvLCBzdWJqZWN0IHRvIHRoZVxuLy8gZm9sbG93aW5nIGNvbmRpdGlvbnM6XG4vL1xuLy8gVGhlIGFib3ZlIGNvcHlyaWdodCBub3RpY2UgYW5kIHRoaXMgcGVybWlzc2lvbiBub3RpY2Ugc2hhbGwgYmUgaW5jbHVkZWRcbi8vIGluIGFsbCBjb3BpZXMgb3Igc3Vic3RhbnRpYWwgcG9ydGlvbnMgb2YgdGhlIFNvZnR3YXJlLlxuLy9cbi8vIFRIRSBTT0ZUV0FSRSBJUyBQUk9WSURFRCBcIkFTIElTXCIsIFdJVEhPVVQgV0FSUkFOVFkgT0YgQU5ZIEtJTkQsIEVYUFJFU1Ncbi8vIE9SIElNUExJRUQsIElOQ0xVRElORyBCVVQgTk9UIExJTUlURUQgVE8gVEhFIFdBUlJBTlRJRVMgT0Zcbi8vIE1FUkNIQU5UQUJJTElUWSwgRklUTkVTUyBGT1IgQSBQQVJUSUNVTEFSIFBVUlBPU0UgQU5EIE5PTklORlJJTkdFTUVOVC4gSU5cbi8vIE5PIEVWRU5UIFNIQUxMIFRIRSBBVVRIT1JTIE9SIENPUFlSSUdIVCBIT0xERVJTIEJFIExJQUJMRSBGT1IgQU5ZIENMQUlNLFxuLy8gREFNQUdFUyBPUiBPVEhFUiBMSUFCSUxJVFksIFdIRVRIRVIgSU4gQU4gQUNUSU9OIE9GIENPTlRSQUNULCBUT1JUIE9SXG4vLyBPVEhFUldJU0UsIEFSSVNJTkcgRlJPTSwgT1VUIE9GIE9SIElOIENPTk5FQ1RJT04gV0lUSCBUSEUgU09GVFdBUkUgT1IgVEhFXG4vLyBVU0UgT1IgT1RIRVIgREVBTElOR1MgSU4gVEhFIFNPRlRXQVJFLlxuXG5mdW5jdGlvbiBFdmVudEVtaXR0ZXIoKSB7XG4gIHRoaXMuX2V2ZW50cyA9IHRoaXMuX2V2ZW50cyB8fCB7fTtcbiAgdGhpcy5fbWF4TGlzdGVuZXJzID0gdGhpcy5fbWF4TGlzdGVuZXJzIHx8IHVuZGVmaW5lZDtcbn1cbm1vZHVsZS5leHBvcnRzID0gRXZlbnRFbWl0dGVyO1xuXG4vLyBCYWNrd2FyZHMtY29tcGF0IHdpdGggbm9kZSAwLjEwLnhcbkV2ZW50RW1pdHRlci5FdmVudEVtaXR0ZXIgPSBFdmVudEVtaXR0ZXI7XG5cbkV2ZW50RW1pdHRlci5wcm90b3R5cGUuX2V2ZW50cyA9IHVuZGVmaW5lZDtcbkV2ZW50RW1pdHRlci5wcm90b3R5cGUuX21heExpc3RlbmVycyA9IHVuZGVmaW5lZDtcblxuLy8gQnkgZGVmYXVsdCBFdmVudEVtaXR0ZXJzIHdpbGwgcHJpbnQgYSB3YXJuaW5nIGlmIG1vcmUgdGhhbiAxMCBsaXN0ZW5lcnMgYXJlXG4vLyBhZGRlZCB0byBpdC4gVGhpcyBpcyBhIHVzZWZ1bCBkZWZhdWx0IHdoaWNoIGhlbHBzIGZpbmRpbmcgbWVtb3J5IGxlYWtzLlxuRXZlbnRFbWl0dGVyLmRlZmF1bHRNYXhMaXN0ZW5lcnMgPSAxMDtcblxuLy8gT2J2aW91c2x5IG5vdCBhbGwgRW1pdHRlcnMgc2hvdWxkIGJlIGxpbWl0ZWQgdG8gMTAuIFRoaXMgZnVuY3Rpb24gYWxsb3dzXG4vLyB0aGF0IHRvIGJlIGluY3JlYXNlZC4gU2V0IHRvIHplcm8gZm9yIHVubGltaXRlZC5cbkV2ZW50RW1pdHRlci5wcm90b3R5cGUuc2V0TWF4TGlzdGVuZXJzID0gZnVuY3Rpb24obikge1xuICBpZiAoIWlzTnVtYmVyKG4pIHx8IG4gPCAwIHx8IGlzTmFOKG4pKVxuICAgIHRocm93IFR5cGVFcnJvcignbiBtdXN0IGJlIGEgcG9zaXRpdmUgbnVtYmVyJyk7XG4gIHRoaXMuX21heExpc3RlbmVycyA9IG47XG4gIHJldHVybiB0aGlzO1xufTtcblxuRXZlbnRFbWl0dGVyLnByb3RvdHlwZS5lbWl0ID0gZnVuY3Rpb24odHlwZSkge1xuICB2YXIgZXIsIGhhbmRsZXIsIGxlbiwgYXJncywgaSwgbGlzdGVuZXJzO1xuXG4gIGlmICghdGhpcy5fZXZlbnRzKVxuICAgIHRoaXMuX2V2ZW50cyA9IHt9O1xuXG4gIC8vIElmIHRoZXJlIGlzIG5vICdlcnJvcicgZXZlbnQgbGlzdGVuZXIgdGhlbiB0aHJvdy5cbiAgaWYgKHR5cGUgPT09ICdlcnJvcicpIHtcbiAgICBpZiAoIXRoaXMuX2V2ZW50cy5lcnJvciB8fFxuICAgICAgICAoaXNPYmplY3QodGhpcy5fZXZlbnRzLmVycm9yKSAmJiAhdGhpcy5fZXZlbnRzLmVycm9yLmxlbmd0aCkpIHtcbiAgICAgIGVyID0gYXJndW1lbnRzWzFdO1xuICAgICAgaWYgKGVyIGluc3RhbmNlb2YgRXJyb3IpIHtcbiAgICAgICAgdGhyb3cgZXI7IC8vIFVuaGFuZGxlZCAnZXJyb3InIGV2ZW50XG4gICAgICB9XG4gICAgICB0aHJvdyBUeXBlRXJyb3IoJ1VuY2F1Z2h0LCB1bnNwZWNpZmllZCBcImVycm9yXCIgZXZlbnQuJyk7XG4gICAgfVxuICB9XG5cbiAgaGFuZGxlciA9IHRoaXMuX2V2ZW50c1t0eXBlXTtcblxuICBpZiAoaXNVbmRlZmluZWQoaGFuZGxlcikpXG4gICAgcmV0dXJuIGZhbHNlO1xuXG4gIGlmIChpc0Z1bmN0aW9uKGhhbmRsZXIpKSB7XG4gICAgc3dpdGNoIChhcmd1bWVudHMubGVuZ3RoKSB7XG4gICAgICAvLyBmYXN0IGNhc2VzXG4gICAgICBjYXNlIDE6XG4gICAgICAgIGhhbmRsZXIuY2FsbCh0aGlzKTtcbiAgICAgICAgYnJlYWs7XG4gICAgICBjYXNlIDI6XG4gICAgICAgIGhhbmRsZXIuY2FsbCh0aGlzLCBhcmd1bWVudHNbMV0pO1xuICAgICAgICBicmVhaztcbiAgICAgIGNhc2UgMzpcbiAgICAgICAgaGFuZGxlci5jYWxsKHRoaXMsIGFyZ3VtZW50c1sxXSwgYXJndW1lbnRzWzJdKTtcbiAgICAgICAgYnJlYWs7XG4gICAgICAvLyBzbG93ZXJcbiAgICAgIGRlZmF1bHQ6XG4gICAgICAgIGxlbiA9IGFyZ3VtZW50cy5sZW5ndGg7XG4gICAgICAgIGFyZ3MgPSBuZXcgQXJyYXkobGVuIC0gMSk7XG4gICAgICAgIGZvciAoaSA9IDE7IGkgPCBsZW47IGkrKylcbiAgICAgICAgICBhcmdzW2kgLSAxXSA9IGFyZ3VtZW50c1tpXTtcbiAgICAgICAgaGFuZGxlci5hcHBseSh0aGlzLCBhcmdzKTtcbiAgICB9XG4gIH0gZWxzZSBpZiAoaXNPYmplY3QoaGFuZGxlcikpIHtcbiAgICBsZW4gPSBhcmd1bWVudHMubGVuZ3RoO1xuICAgIGFyZ3MgPSBuZXcgQXJyYXkobGVuIC0gMSk7XG4gICAgZm9yIChpID0gMTsgaSA8IGxlbjsgaSsrKVxuICAgICAgYXJnc1tpIC0gMV0gPSBhcmd1bWVudHNbaV07XG5cbiAgICBsaXN0ZW5lcnMgPSBoYW5kbGVyLnNsaWNlKCk7XG4gICAgbGVuID0gbGlzdGVuZXJzLmxlbmd0aDtcbiAgICBmb3IgKGkgPSAwOyBpIDwgbGVuOyBpKyspXG4gICAgICBsaXN0ZW5lcnNbaV0uYXBwbHkodGhpcywgYXJncyk7XG4gIH1cblxuICByZXR1cm4gdHJ1ZTtcbn07XG5cbkV2ZW50RW1pdHRlci5wcm90b3R5cGUuYWRkTGlzdGVuZXIgPSBmdW5jdGlvbih0eXBlLCBsaXN0ZW5lcikge1xuICB2YXIgbTtcblxuICBpZiAoIWlzRnVuY3Rpb24obGlzdGVuZXIpKVxuICAgIHRocm93IFR5cGVFcnJvcignbGlzdGVuZXIgbXVzdCBiZSBhIGZ1bmN0aW9uJyk7XG5cbiAgaWYgKCF0aGlzLl9ldmVudHMpXG4gICAgdGhpcy5fZXZlbnRzID0ge307XG5cbiAgLy8gVG8gYXZvaWQgcmVjdXJzaW9uIGluIHRoZSBjYXNlIHRoYXQgdHlwZSA9PT0gXCJuZXdMaXN0ZW5lclwiISBCZWZvcmVcbiAgLy8gYWRkaW5nIGl0IHRvIHRoZSBsaXN0ZW5lcnMsIGZpcnN0IGVtaXQgXCJuZXdMaXN0ZW5lclwiLlxuICBpZiAodGhpcy5fZXZlbnRzLm5ld0xpc3RlbmVyKVxuICAgIHRoaXMuZW1pdCgnbmV3TGlzdGVuZXInLCB0eXBlLFxuICAgICAgICAgICAgICBpc0Z1bmN0aW9uKGxpc3RlbmVyLmxpc3RlbmVyKSA/XG4gICAgICAgICAgICAgIGxpc3RlbmVyLmxpc3RlbmVyIDogbGlzdGVuZXIpO1xuXG4gIGlmICghdGhpcy5fZXZlbnRzW3R5cGVdKVxuICAgIC8vIE9wdGltaXplIHRoZSBjYXNlIG9mIG9uZSBsaXN0ZW5lci4gRG9uJ3QgbmVlZCB0aGUgZXh0cmEgYXJyYXkgb2JqZWN0LlxuICAgIHRoaXMuX2V2ZW50c1t0eXBlXSA9IGxpc3RlbmVyO1xuICBlbHNlIGlmIChpc09iamVjdCh0aGlzLl9ldmVudHNbdHlwZV0pKVxuICAgIC8vIElmIHdlJ3ZlIGFscmVhZHkgZ290IGFuIGFycmF5LCBqdXN0IGFwcGVuZC5cbiAgICB0aGlzLl9ldmVudHNbdHlwZV0ucHVzaChsaXN0ZW5lcik7XG4gIGVsc2VcbiAgICAvLyBBZGRpbmcgdGhlIHNlY29uZCBlbGVtZW50LCBuZWVkIHRvIGNoYW5nZSB0byBhcnJheS5cbiAgICB0aGlzLl9ldmVudHNbdHlwZV0gPSBbdGhpcy5fZXZlbnRzW3R5cGVdLCBsaXN0ZW5lcl07XG5cbiAgLy8gQ2hlY2sgZm9yIGxpc3RlbmVyIGxlYWtcbiAgaWYgKGlzT2JqZWN0KHRoaXMuX2V2ZW50c1t0eXBlXSkgJiYgIXRoaXMuX2V2ZW50c1t0eXBlXS53YXJuZWQpIHtcbiAgICB2YXIgbTtcbiAgICBpZiAoIWlzVW5kZWZpbmVkKHRoaXMuX21heExpc3RlbmVycykpIHtcbiAgICAgIG0gPSB0aGlzLl9tYXhMaXN0ZW5lcnM7XG4gICAgfSBlbHNlIHtcbiAgICAgIG0gPSBFdmVudEVtaXR0ZXIuZGVmYXVsdE1heExpc3RlbmVycztcbiAgICB9XG5cbiAgICBpZiAobSAmJiBtID4gMCAmJiB0aGlzLl9ldmVudHNbdHlwZV0ubGVuZ3RoID4gbSkge1xuICAgICAgdGhpcy5fZXZlbnRzW3R5cGVdLndhcm5lZCA9IHRydWU7XG4gICAgICBjb25zb2xlLmVycm9yKCcobm9kZSkgd2FybmluZzogcG9zc2libGUgRXZlbnRFbWl0dGVyIG1lbW9yeSAnICtcbiAgICAgICAgICAgICAgICAgICAgJ2xlYWsgZGV0ZWN0ZWQuICVkIGxpc3RlbmVycyBhZGRlZC4gJyArXG4gICAgICAgICAgICAgICAgICAgICdVc2UgZW1pdHRlci5zZXRNYXhMaXN0ZW5lcnMoKSB0byBpbmNyZWFzZSBsaW1pdC4nLFxuICAgICAgICAgICAgICAgICAgICB0aGlzLl9ldmVudHNbdHlwZV0ubGVuZ3RoKTtcbiAgICAgIGlmICh0eXBlb2YgY29uc29sZS50cmFjZSA9PT0gJ2Z1bmN0aW9uJykge1xuICAgICAgICAvLyBub3Qgc3VwcG9ydGVkIGluIElFIDEwXG4gICAgICAgIGNvbnNvbGUudHJhY2UoKTtcbiAgICAgIH1cbiAgICB9XG4gIH1cblxuICByZXR1cm4gdGhpcztcbn07XG5cbkV2ZW50RW1pdHRlci5wcm90b3R5cGUub24gPSBFdmVudEVtaXR0ZXIucHJvdG90eXBlLmFkZExpc3RlbmVyO1xuXG5FdmVudEVtaXR0ZXIucHJvdG90eXBlLm9uY2UgPSBmdW5jdGlvbih0eXBlLCBsaXN0ZW5lcikge1xuICBpZiAoIWlzRnVuY3Rpb24obGlzdGVuZXIpKVxuICAgIHRocm93IFR5cGVFcnJvcignbGlzdGVuZXIgbXVzdCBiZSBhIGZ1bmN0aW9uJyk7XG5cbiAgdmFyIGZpcmVkID0gZmFsc2U7XG5cbiAgZnVuY3Rpb24gZygpIHtcbiAgICB0aGlzLnJlbW92ZUxpc3RlbmVyKHR5cGUsIGcpO1xuXG4gICAgaWYgKCFmaXJlZCkge1xuICAgICAgZmlyZWQgPSB0cnVlO1xuICAgICAgbGlzdGVuZXIuYXBwbHkodGhpcywgYXJndW1lbnRzKTtcbiAgICB9XG4gIH1cblxuICBnLmxpc3RlbmVyID0gbGlzdGVuZXI7XG4gIHRoaXMub24odHlwZSwgZyk7XG5cbiAgcmV0dXJuIHRoaXM7XG59O1xuXG4vLyBlbWl0cyBhICdyZW1vdmVMaXN0ZW5lcicgZXZlbnQgaWZmIHRoZSBsaXN0ZW5lciB3YXMgcmVtb3ZlZFxuRXZlbnRFbWl0dGVyLnByb3RvdHlwZS5yZW1vdmVMaXN0ZW5lciA9IGZ1bmN0aW9uKHR5cGUsIGxpc3RlbmVyKSB7XG4gIHZhciBsaXN0LCBwb3NpdGlvbiwgbGVuZ3RoLCBpO1xuXG4gIGlmICghaXNGdW5jdGlvbihsaXN0ZW5lcikpXG4gICAgdGhyb3cgVHlwZUVycm9yKCdsaXN0ZW5lciBtdXN0IGJlIGEgZnVuY3Rpb24nKTtcblxuICBpZiAoIXRoaXMuX2V2ZW50cyB8fCAhdGhpcy5fZXZlbnRzW3R5cGVdKVxuICAgIHJldHVybiB0aGlzO1xuXG4gIGxpc3QgPSB0aGlzLl9ldmVudHNbdHlwZV07XG4gIGxlbmd0aCA9IGxpc3QubGVuZ3RoO1xuICBwb3NpdGlvbiA9IC0xO1xuXG4gIGlmIChsaXN0ID09PSBsaXN0ZW5lciB8fFxuICAgICAgKGlzRnVuY3Rpb24obGlzdC5saXN0ZW5lcikgJiYgbGlzdC5saXN0ZW5lciA9PT0gbGlzdGVuZXIpKSB7XG4gICAgZGVsZXRlIHRoaXMuX2V2ZW50c1t0eXBlXTtcbiAgICBpZiAodGhpcy5fZXZlbnRzLnJlbW92ZUxpc3RlbmVyKVxuICAgICAgdGhpcy5lbWl0KCdyZW1vdmVMaXN0ZW5lcicsIHR5cGUsIGxpc3RlbmVyKTtcblxuICB9IGVsc2UgaWYgKGlzT2JqZWN0KGxpc3QpKSB7XG4gICAgZm9yIChpID0gbGVuZ3RoOyBpLS0gPiAwOykge1xuICAgICAgaWYgKGxpc3RbaV0gPT09IGxpc3RlbmVyIHx8XG4gICAgICAgICAgKGxpc3RbaV0ubGlzdGVuZXIgJiYgbGlzdFtpXS5saXN0ZW5lciA9PT0gbGlzdGVuZXIpKSB7XG4gICAgICAgIHBvc2l0aW9uID0gaTtcbiAgICAgICAgYnJlYWs7XG4gICAgICB9XG4gICAgfVxuXG4gICAgaWYgKHBvc2l0aW9uIDwgMClcbiAgICAgIHJldHVybiB0aGlzO1xuXG4gICAgaWYgKGxpc3QubGVuZ3RoID09PSAxKSB7XG4gICAgICBsaXN0Lmxlbmd0aCA9IDA7XG4gICAgICBkZWxldGUgdGhpcy5fZXZlbnRzW3R5cGVdO1xuICAgIH0gZWxzZSB7XG4gICAgICBsaXN0LnNwbGljZShwb3NpdGlvbiwgMSk7XG4gICAgfVxuXG4gICAgaWYgKHRoaXMuX2V2ZW50cy5yZW1vdmVMaXN0ZW5lcilcbiAgICAgIHRoaXMuZW1pdCgncmVtb3ZlTGlzdGVuZXInLCB0eXBlLCBsaXN0ZW5lcik7XG4gIH1cblxuICByZXR1cm4gdGhpcztcbn07XG5cbkV2ZW50RW1pdHRlci5wcm90b3R5cGUucmVtb3ZlQWxsTGlzdGVuZXJzID0gZnVuY3Rpb24odHlwZSkge1xuICB2YXIga2V5LCBsaXN0ZW5lcnM7XG5cbiAgaWYgKCF0aGlzLl9ldmVudHMpXG4gICAgcmV0dXJuIHRoaXM7XG5cbiAgLy8gbm90IGxpc3RlbmluZyBmb3IgcmVtb3ZlTGlzdGVuZXIsIG5vIG5lZWQgdG8gZW1pdFxuICBpZiAoIXRoaXMuX2V2ZW50cy5yZW1vdmVMaXN0ZW5lcikge1xuICAgIGlmIChhcmd1bWVudHMubGVuZ3RoID09PSAwKVxuICAgICAgdGhpcy5fZXZlbnRzID0ge307XG4gICAgZWxzZSBpZiAodGhpcy5fZXZlbnRzW3R5cGVdKVxuICAgICAgZGVsZXRlIHRoaXMuX2V2ZW50c1t0eXBlXTtcbiAgICByZXR1cm4gdGhpcztcbiAgfVxuXG4gIC8vIGVtaXQgcmVtb3ZlTGlzdGVuZXIgZm9yIGFsbCBsaXN0ZW5lcnMgb24gYWxsIGV2ZW50c1xuICBpZiAoYXJndW1lbnRzLmxlbmd0aCA9PT0gMCkge1xuICAgIGZvciAoa2V5IGluIHRoaXMuX2V2ZW50cykge1xuICAgICAgaWYgKGtleSA9PT0gJ3JlbW92ZUxpc3RlbmVyJykgY29udGludWU7XG4gICAgICB0aGlzLnJlbW92ZUFsbExpc3RlbmVycyhrZXkpO1xuICAgIH1cbiAgICB0aGlzLnJlbW92ZUFsbExpc3RlbmVycygncmVtb3ZlTGlzdGVuZXInKTtcbiAgICB0aGlzLl9ldmVudHMgPSB7fTtcbiAgICByZXR1cm4gdGhpcztcbiAgfVxuXG4gIGxpc3RlbmVycyA9IHRoaXMuX2V2ZW50c1t0eXBlXTtcblxuICBpZiAoaXNGdW5jdGlvbihsaXN0ZW5lcnMpKSB7XG4gICAgdGhpcy5yZW1vdmVMaXN0ZW5lcih0eXBlLCBsaXN0ZW5lcnMpO1xuICB9IGVsc2Uge1xuICAgIC8vIExJRk8gb3JkZXJcbiAgICB3aGlsZSAobGlzdGVuZXJzLmxlbmd0aClcbiAgICAgIHRoaXMucmVtb3ZlTGlzdGVuZXIodHlwZSwgbGlzdGVuZXJzW2xpc3RlbmVycy5sZW5ndGggLSAxXSk7XG4gIH1cbiAgZGVsZXRlIHRoaXMuX2V2ZW50c1t0eXBlXTtcblxuICByZXR1cm4gdGhpcztcbn07XG5cbkV2ZW50RW1pdHRlci5wcm90b3R5cGUubGlzdGVuZXJzID0gZnVuY3Rpb24odHlwZSkge1xuICB2YXIgcmV0O1xuICBpZiAoIXRoaXMuX2V2ZW50cyB8fCAhdGhpcy5fZXZlbnRzW3R5cGVdKVxuICAgIHJldCA9IFtdO1xuICBlbHNlIGlmIChpc0Z1bmN0aW9uKHRoaXMuX2V2ZW50c1t0eXBlXSkpXG4gICAgcmV0ID0gW3RoaXMuX2V2ZW50c1t0eXBlXV07XG4gIGVsc2VcbiAgICByZXQgPSB0aGlzLl9ldmVudHNbdHlwZV0uc2xpY2UoKTtcbiAgcmV0dXJuIHJldDtcbn07XG5cbkV2ZW50RW1pdHRlci5saXN0ZW5lckNvdW50ID0gZnVuY3Rpb24oZW1pdHRlciwgdHlwZSkge1xuICB2YXIgcmV0O1xuICBpZiAoIWVtaXR0ZXIuX2V2ZW50cyB8fCAhZW1pdHRlci5fZXZlbnRzW3R5cGVdKVxuICAgIHJldCA9IDA7XG4gIGVsc2UgaWYgKGlzRnVuY3Rpb24oZW1pdHRlci5fZXZlbnRzW3R5cGVdKSlcbiAgICByZXQgPSAxO1xuICBlbHNlXG4gICAgcmV0ID0gZW1pdHRlci5fZXZlbnRzW3R5cGVdLmxlbmd0aDtcbiAgcmV0dXJuIHJldDtcbn07XG5cbmZ1bmN0aW9uIGlzRnVuY3Rpb24oYXJnKSB7XG4gIHJldHVybiB0eXBlb2YgYXJnID09PSAnZnVuY3Rpb24nO1xufVxuXG5mdW5jdGlvbiBpc051bWJlcihhcmcpIHtcbiAgcmV0dXJuIHR5cGVvZiBhcmcgPT09ICdudW1iZXInO1xufVxuXG5mdW5jdGlvbiBpc09iamVjdChhcmcpIHtcbiAgcmV0dXJuIHR5cGVvZiBhcmcgPT09ICdvYmplY3QnICYmIGFyZyAhPT0gbnVsbDtcbn1cblxuZnVuY3Rpb24gaXNVbmRlZmluZWQoYXJnKSB7XG4gIHJldHVybiBhcmcgPT09IHZvaWQgMDtcbn1cbiIsIi8vICAgICB1dWlkLmpzXG4vL1xuLy8gICAgIENvcHlyaWdodCAoYykgMjAxMC0yMDEyIFJvYmVydCBLaWVmZmVyXG4vLyAgICAgTUlUIExpY2Vuc2UgLSBodHRwOi8vb3BlbnNvdXJjZS5vcmcvbGljZW5zZXMvbWl0LWxpY2Vuc2UucGhwXG5cbihmdW5jdGlvbigpIHtcbiAgdmFyIF9nbG9iYWwgPSB0aGlzO1xuXG4gIC8vIFVuaXF1ZSBJRCBjcmVhdGlvbiByZXF1aXJlcyBhIGhpZ2ggcXVhbGl0eSByYW5kb20gIyBnZW5lcmF0b3IuICBXZSBmZWF0dXJlXG4gIC8vIGRldGVjdCB0byBkZXRlcm1pbmUgdGhlIGJlc3QgUk5HIHNvdXJjZSwgbm9ybWFsaXppbmcgdG8gYSBmdW5jdGlvbiB0aGF0XG4gIC8vIHJldHVybnMgMTI4LWJpdHMgb2YgcmFuZG9tbmVzcywgc2luY2UgdGhhdCdzIHdoYXQncyB1c3VhbGx5IHJlcXVpcmVkXG4gIHZhciBfcm5nO1xuXG4gIC8vIE5vZGUuanMgY3J5cHRvLWJhc2VkIFJORyAtIGh0dHA6Ly9ub2RlanMub3JnL2RvY3MvdjAuNi4yL2FwaS9jcnlwdG8uaHRtbFxuICAvL1xuICAvLyBNb2RlcmF0ZWx5IGZhc3QsIGhpZ2ggcXVhbGl0eVxuICBpZiAodHlwZW9mKF9nbG9iYWwucmVxdWlyZSkgPT0gJ2Z1bmN0aW9uJykge1xuICAgIHRyeSB7XG4gICAgICB2YXIgX3JiID0gX2dsb2JhbC5yZXF1aXJlKCdjcnlwdG8nKS5yYW5kb21CeXRlcztcbiAgICAgIF9ybmcgPSBfcmIgJiYgZnVuY3Rpb24oKSB7cmV0dXJuIF9yYigxNik7fTtcbiAgICB9IGNhdGNoKGUpIHt9XG4gIH1cblxuICBpZiAoIV9ybmcgJiYgX2dsb2JhbC5jcnlwdG8gJiYgY3J5cHRvLmdldFJhbmRvbVZhbHVlcykge1xuICAgIC8vIFdIQVRXRyBjcnlwdG8tYmFzZWQgUk5HIC0gaHR0cDovL3dpa2kud2hhdHdnLm9yZy93aWtpL0NyeXB0b1xuICAgIC8vXG4gICAgLy8gTW9kZXJhdGVseSBmYXN0LCBoaWdoIHF1YWxpdHlcbiAgICB2YXIgX3JuZHM4ID0gbmV3IFVpbnQ4QXJyYXkoMTYpO1xuICAgIF9ybmcgPSBmdW5jdGlvbiB3aGF0d2dSTkcoKSB7XG4gICAgICBjcnlwdG8uZ2V0UmFuZG9tVmFsdWVzKF9ybmRzOCk7XG4gICAgICByZXR1cm4gX3JuZHM4O1xuICAgIH07XG4gIH1cblxuICBpZiAoIV9ybmcpIHtcbiAgICAvLyBNYXRoLnJhbmRvbSgpLWJhc2VkIChSTkcpXG4gICAgLy9cbiAgICAvLyBJZiBhbGwgZWxzZSBmYWlscywgdXNlIE1hdGgucmFuZG9tKCkuICBJdCdzIGZhc3QsIGJ1dCBpcyBvZiB1bnNwZWNpZmllZFxuICAgIC8vIHF1YWxpdHkuXG4gICAgdmFyICBfcm5kcyA9IG5ldyBBcnJheSgxNik7XG4gICAgX3JuZyA9IGZ1bmN0aW9uKCkge1xuICAgICAgZm9yICh2YXIgaSA9IDAsIHI7IGkgPCAxNjsgaSsrKSB7XG4gICAgICAgIGlmICgoaSAmIDB4MDMpID09PSAwKSByID0gTWF0aC5yYW5kb20oKSAqIDB4MTAwMDAwMDAwO1xuICAgICAgICBfcm5kc1tpXSA9IHIgPj4+ICgoaSAmIDB4MDMpIDw8IDMpICYgMHhmZjtcbiAgICAgIH1cblxuICAgICAgcmV0dXJuIF9ybmRzO1xuICAgIH07XG4gIH1cblxuICAvLyBCdWZmZXIgY2xhc3MgdG8gdXNlXG4gIHZhciBCdWZmZXJDbGFzcyA9IHR5cGVvZihfZ2xvYmFsLkJ1ZmZlcikgPT0gJ2Z1bmN0aW9uJyA/IF9nbG9iYWwuQnVmZmVyIDogQXJyYXk7XG5cbiAgLy8gTWFwcyBmb3IgbnVtYmVyIDwtPiBoZXggc3RyaW5nIGNvbnZlcnNpb25cbiAgdmFyIF9ieXRlVG9IZXggPSBbXTtcbiAgdmFyIF9oZXhUb0J5dGUgPSB7fTtcbiAgZm9yICh2YXIgaSA9IDA7IGkgPCAyNTY7IGkrKykge1xuICAgIF9ieXRlVG9IZXhbaV0gPSAoaSArIDB4MTAwKS50b1N0cmluZygxNikuc3Vic3RyKDEpO1xuICAgIF9oZXhUb0J5dGVbX2J5dGVUb0hleFtpXV0gPSBpO1xuICB9XG5cbiAgLy8gKipgcGFyc2UoKWAgLSBQYXJzZSBhIFVVSUQgaW50byBpdCdzIGNvbXBvbmVudCBieXRlcyoqXG4gIGZ1bmN0aW9uIHBhcnNlKHMsIGJ1Ziwgb2Zmc2V0KSB7XG4gICAgdmFyIGkgPSAoYnVmICYmIG9mZnNldCkgfHwgMCwgaWkgPSAwO1xuXG4gICAgYnVmID0gYnVmIHx8IFtdO1xuICAgIHMudG9Mb3dlckNhc2UoKS5yZXBsYWNlKC9bMC05YS1mXXsyfS9nLCBmdW5jdGlvbihvY3QpIHtcbiAgICAgIGlmIChpaSA8IDE2KSB7IC8vIERvbid0IG92ZXJmbG93IVxuICAgICAgICBidWZbaSArIGlpKytdID0gX2hleFRvQnl0ZVtvY3RdO1xuICAgICAgfVxuICAgIH0pO1xuXG4gICAgLy8gWmVybyBvdXQgcmVtYWluaW5nIGJ5dGVzIGlmIHN0cmluZyB3YXMgc2hvcnRcbiAgICB3aGlsZSAoaWkgPCAxNikge1xuICAgICAgYnVmW2kgKyBpaSsrXSA9IDA7XG4gICAgfVxuXG4gICAgcmV0dXJuIGJ1ZjtcbiAgfVxuXG4gIC8vICoqYHVucGFyc2UoKWAgLSBDb252ZXJ0IFVVSUQgYnl0ZSBhcnJheSAoYWxhIHBhcnNlKCkpIGludG8gYSBzdHJpbmcqKlxuICBmdW5jdGlvbiB1bnBhcnNlKGJ1Ziwgb2Zmc2V0KSB7XG4gICAgdmFyIGkgPSBvZmZzZXQgfHwgMCwgYnRoID0gX2J5dGVUb0hleDtcbiAgICByZXR1cm4gIGJ0aFtidWZbaSsrXV0gKyBidGhbYnVmW2krK11dICtcbiAgICAgICAgICAgIGJ0aFtidWZbaSsrXV0gKyBidGhbYnVmW2krK11dICsgJy0nICtcbiAgICAgICAgICAgIGJ0aFtidWZbaSsrXV0gKyBidGhbYnVmW2krK11dICsgJy0nICtcbiAgICAgICAgICAgIGJ0aFtidWZbaSsrXV0gKyBidGhbYnVmW2krK11dICsgJy0nICtcbiAgICAgICAgICAgIGJ0aFtidWZbaSsrXV0gKyBidGhbYnVmW2krK11dICsgJy0nICtcbiAgICAgICAgICAgIGJ0aFtidWZbaSsrXV0gKyBidGhbYnVmW2krK11dICtcbiAgICAgICAgICAgIGJ0aFtidWZbaSsrXV0gKyBidGhbYnVmW2krK11dICtcbiAgICAgICAgICAgIGJ0aFtidWZbaSsrXV0gKyBidGhbYnVmW2krK11dO1xuICB9XG5cbiAgLy8gKipgdjEoKWAgLSBHZW5lcmF0ZSB0aW1lLWJhc2VkIFVVSUQqKlxuICAvL1xuICAvLyBJbnNwaXJlZCBieSBodHRwczovL2dpdGh1Yi5jb20vTGlvc0svVVVJRC5qc1xuICAvLyBhbmQgaHR0cDovL2RvY3MucHl0aG9uLm9yZy9saWJyYXJ5L3V1aWQuaHRtbFxuXG4gIC8vIHJhbmRvbSAjJ3Mgd2UgbmVlZCB0byBpbml0IG5vZGUgYW5kIGNsb2Nrc2VxXG4gIHZhciBfc2VlZEJ5dGVzID0gX3JuZygpO1xuXG4gIC8vIFBlciA0LjUsIGNyZWF0ZSBhbmQgNDgtYml0IG5vZGUgaWQsICg0NyByYW5kb20gYml0cyArIG11bHRpY2FzdCBiaXQgPSAxKVxuICB2YXIgX25vZGVJZCA9IFtcbiAgICBfc2VlZEJ5dGVzWzBdIHwgMHgwMSxcbiAgICBfc2VlZEJ5dGVzWzFdLCBfc2VlZEJ5dGVzWzJdLCBfc2VlZEJ5dGVzWzNdLCBfc2VlZEJ5dGVzWzRdLCBfc2VlZEJ5dGVzWzVdXG4gIF07XG5cbiAgLy8gUGVyIDQuMi4yLCByYW5kb21pemUgKDE0IGJpdCkgY2xvY2tzZXFcbiAgdmFyIF9jbG9ja3NlcSA9IChfc2VlZEJ5dGVzWzZdIDw8IDggfCBfc2VlZEJ5dGVzWzddKSAmIDB4M2ZmZjtcblxuICAvLyBQcmV2aW91cyB1dWlkIGNyZWF0aW9uIHRpbWVcbiAgdmFyIF9sYXN0TVNlY3MgPSAwLCBfbGFzdE5TZWNzID0gMDtcblxuICAvLyBTZWUgaHR0cHM6Ly9naXRodWIuY29tL2Jyb29mYS9ub2RlLXV1aWQgZm9yIEFQSSBkZXRhaWxzXG4gIGZ1bmN0aW9uIHYxKG9wdGlvbnMsIGJ1Ziwgb2Zmc2V0KSB7XG4gICAgdmFyIGkgPSBidWYgJiYgb2Zmc2V0IHx8IDA7XG4gICAgdmFyIGIgPSBidWYgfHwgW107XG5cbiAgICBvcHRpb25zID0gb3B0aW9ucyB8fCB7fTtcblxuICAgIHZhciBjbG9ja3NlcSA9IG9wdGlvbnMuY2xvY2tzZXEgIT0gbnVsbCA/IG9wdGlvbnMuY2xvY2tzZXEgOiBfY2xvY2tzZXE7XG5cbiAgICAvLyBVVUlEIHRpbWVzdGFtcHMgYXJlIDEwMCBuYW5vLXNlY29uZCB1bml0cyBzaW5jZSB0aGUgR3JlZ29yaWFuIGVwb2NoLFxuICAgIC8vICgxNTgyLTEwLTE1IDAwOjAwKS4gIEpTTnVtYmVycyBhcmVuJ3QgcHJlY2lzZSBlbm91Z2ggZm9yIHRoaXMsIHNvXG4gICAgLy8gdGltZSBpcyBoYW5kbGVkIGludGVybmFsbHkgYXMgJ21zZWNzJyAoaW50ZWdlciBtaWxsaXNlY29uZHMpIGFuZCAnbnNlY3MnXG4gICAgLy8gKDEwMC1uYW5vc2Vjb25kcyBvZmZzZXQgZnJvbSBtc2Vjcykgc2luY2UgdW5peCBlcG9jaCwgMTk3MC0wMS0wMSAwMDowMC5cbiAgICB2YXIgbXNlY3MgPSBvcHRpb25zLm1zZWNzICE9IG51bGwgPyBvcHRpb25zLm1zZWNzIDogbmV3IERhdGUoKS5nZXRUaW1lKCk7XG5cbiAgICAvLyBQZXIgNC4yLjEuMiwgdXNlIGNvdW50IG9mIHV1aWQncyBnZW5lcmF0ZWQgZHVyaW5nIHRoZSBjdXJyZW50IGNsb2NrXG4gICAgLy8gY3ljbGUgdG8gc2ltdWxhdGUgaGlnaGVyIHJlc29sdXRpb24gY2xvY2tcbiAgICB2YXIgbnNlY3MgPSBvcHRpb25zLm5zZWNzICE9IG51bGwgPyBvcHRpb25zLm5zZWNzIDogX2xhc3ROU2VjcyArIDE7XG5cbiAgICAvLyBUaW1lIHNpbmNlIGxhc3QgdXVpZCBjcmVhdGlvbiAoaW4gbXNlY3MpXG4gICAgdmFyIGR0ID0gKG1zZWNzIC0gX2xhc3RNU2VjcykgKyAobnNlY3MgLSBfbGFzdE5TZWNzKS8xMDAwMDtcblxuICAgIC8vIFBlciA0LjIuMS4yLCBCdW1wIGNsb2Nrc2VxIG9uIGNsb2NrIHJlZ3Jlc3Npb25cbiAgICBpZiAoZHQgPCAwICYmIG9wdGlvbnMuY2xvY2tzZXEgPT0gbnVsbCkge1xuICAgICAgY2xvY2tzZXEgPSBjbG9ja3NlcSArIDEgJiAweDNmZmY7XG4gICAgfVxuXG4gICAgLy8gUmVzZXQgbnNlY3MgaWYgY2xvY2sgcmVncmVzc2VzIChuZXcgY2xvY2tzZXEpIG9yIHdlJ3ZlIG1vdmVkIG9udG8gYSBuZXdcbiAgICAvLyB0aW1lIGludGVydmFsXG4gICAgaWYgKChkdCA8IDAgfHwgbXNlY3MgPiBfbGFzdE1TZWNzKSAmJiBvcHRpb25zLm5zZWNzID09IG51bGwpIHtcbiAgICAgIG5zZWNzID0gMDtcbiAgICB9XG5cbiAgICAvLyBQZXIgNC4yLjEuMiBUaHJvdyBlcnJvciBpZiB0b28gbWFueSB1dWlkcyBhcmUgcmVxdWVzdGVkXG4gICAgaWYgKG5zZWNzID49IDEwMDAwKSB7XG4gICAgICB0aHJvdyBuZXcgRXJyb3IoJ3V1aWQudjEoKTogQ2FuXFwndCBjcmVhdGUgbW9yZSB0aGFuIDEwTSB1dWlkcy9zZWMnKTtcbiAgICB9XG5cbiAgICBfbGFzdE1TZWNzID0gbXNlY3M7XG4gICAgX2xhc3ROU2VjcyA9IG5zZWNzO1xuICAgIF9jbG9ja3NlcSA9IGNsb2Nrc2VxO1xuXG4gICAgLy8gUGVyIDQuMS40IC0gQ29udmVydCBmcm9tIHVuaXggZXBvY2ggdG8gR3JlZ29yaWFuIGVwb2NoXG4gICAgbXNlY3MgKz0gMTIyMTkyOTI4MDAwMDA7XG5cbiAgICAvLyBgdGltZV9sb3dgXG4gICAgdmFyIHRsID0gKChtc2VjcyAmIDB4ZmZmZmZmZikgKiAxMDAwMCArIG5zZWNzKSAlIDB4MTAwMDAwMDAwO1xuICAgIGJbaSsrXSA9IHRsID4+PiAyNCAmIDB4ZmY7XG4gICAgYltpKytdID0gdGwgPj4+IDE2ICYgMHhmZjtcbiAgICBiW2krK10gPSB0bCA+Pj4gOCAmIDB4ZmY7XG4gICAgYltpKytdID0gdGwgJiAweGZmO1xuXG4gICAgLy8gYHRpbWVfbWlkYFxuICAgIHZhciB0bWggPSAobXNlY3MgLyAweDEwMDAwMDAwMCAqIDEwMDAwKSAmIDB4ZmZmZmZmZjtcbiAgICBiW2krK10gPSB0bWggPj4+IDggJiAweGZmO1xuICAgIGJbaSsrXSA9IHRtaCAmIDB4ZmY7XG5cbiAgICAvLyBgdGltZV9oaWdoX2FuZF92ZXJzaW9uYFxuICAgIGJbaSsrXSA9IHRtaCA+Pj4gMjQgJiAweGYgfCAweDEwOyAvLyBpbmNsdWRlIHZlcnNpb25cbiAgICBiW2krK10gPSB0bWggPj4+IDE2ICYgMHhmZjtcblxuICAgIC8vIGBjbG9ja19zZXFfaGlfYW5kX3Jlc2VydmVkYCAoUGVyIDQuMi4yIC0gaW5jbHVkZSB2YXJpYW50KVxuICAgIGJbaSsrXSA9IGNsb2Nrc2VxID4+PiA4IHwgMHg4MDtcblxuICAgIC8vIGBjbG9ja19zZXFfbG93YFxuICAgIGJbaSsrXSA9IGNsb2Nrc2VxICYgMHhmZjtcblxuICAgIC8vIGBub2RlYFxuICAgIHZhciBub2RlID0gb3B0aW9ucy5ub2RlIHx8IF9ub2RlSWQ7XG4gICAgZm9yICh2YXIgbiA9IDA7IG4gPCA2OyBuKyspIHtcbiAgICAgIGJbaSArIG5dID0gbm9kZVtuXTtcbiAgICB9XG5cbiAgICByZXR1cm4gYnVmID8gYnVmIDogdW5wYXJzZShiKTtcbiAgfVxuXG4gIC8vICoqYHY0KClgIC0gR2VuZXJhdGUgcmFuZG9tIFVVSUQqKlxuXG4gIC8vIFNlZSBodHRwczovL2dpdGh1Yi5jb20vYnJvb2ZhL25vZGUtdXVpZCBmb3IgQVBJIGRldGFpbHNcbiAgZnVuY3Rpb24gdjQob3B0aW9ucywgYnVmLCBvZmZzZXQpIHtcbiAgICAvLyBEZXByZWNhdGVkIC0gJ2Zvcm1hdCcgYXJndW1lbnQsIGFzIHN1cHBvcnRlZCBpbiB2MS4yXG4gICAgdmFyIGkgPSBidWYgJiYgb2Zmc2V0IHx8IDA7XG5cbiAgICBpZiAodHlwZW9mKG9wdGlvbnMpID09ICdzdHJpbmcnKSB7XG4gICAgICBidWYgPSBvcHRpb25zID09ICdiaW5hcnknID8gbmV3IEJ1ZmZlckNsYXNzKDE2KSA6IG51bGw7XG4gICAgICBvcHRpb25zID0gbnVsbDtcbiAgICB9XG4gICAgb3B0aW9ucyA9IG9wdGlvbnMgfHwge307XG5cbiAgICB2YXIgcm5kcyA9IG9wdGlvbnMucmFuZG9tIHx8IChvcHRpb25zLnJuZyB8fCBfcm5nKSgpO1xuXG4gICAgLy8gUGVyIDQuNCwgc2V0IGJpdHMgZm9yIHZlcnNpb24gYW5kIGBjbG9ja19zZXFfaGlfYW5kX3Jlc2VydmVkYFxuICAgIHJuZHNbNl0gPSAocm5kc1s2XSAmIDB4MGYpIHwgMHg0MDtcbiAgICBybmRzWzhdID0gKHJuZHNbOF0gJiAweDNmKSB8IDB4ODA7XG5cbiAgICAvLyBDb3B5IGJ5dGVzIHRvIGJ1ZmZlciwgaWYgcHJvdmlkZWRcbiAgICBpZiAoYnVmKSB7XG4gICAgICBmb3IgKHZhciBpaSA9IDA7IGlpIDwgMTY7IGlpKyspIHtcbiAgICAgICAgYnVmW2kgKyBpaV0gPSBybmRzW2lpXTtcbiAgICAgIH1cbiAgICB9XG5cbiAgICByZXR1cm4gYnVmIHx8IHVucGFyc2Uocm5kcyk7XG4gIH1cblxuICAvLyBFeHBvcnQgcHVibGljIEFQSVxuICB2YXIgdXVpZCA9IHY0O1xuICB1dWlkLnYxID0gdjE7XG4gIHV1aWQudjQgPSB2NDtcbiAgdXVpZC5wYXJzZSA9IHBhcnNlO1xuICB1dWlkLnVucGFyc2UgPSB1bnBhcnNlO1xuICB1dWlkLkJ1ZmZlckNsYXNzID0gQnVmZmVyQ2xhc3M7XG5cbiAgaWYgKHR5cGVvZihtb2R1bGUpICE9ICd1bmRlZmluZWQnICYmIG1vZHVsZS5leHBvcnRzKSB7XG4gICAgLy8gUHVibGlzaCBhcyBub2RlLmpzIG1vZHVsZVxuICAgIG1vZHVsZS5leHBvcnRzID0gdXVpZDtcbiAgfSBlbHNlICBpZiAodHlwZW9mIGRlZmluZSA9PT0gJ2Z1bmN0aW9uJyAmJiBkZWZpbmUuYW1kKSB7XG4gICAgLy8gUHVibGlzaCBhcyBBTUQgbW9kdWxlXG4gICAgZGVmaW5lKGZ1bmN0aW9uKCkge3JldHVybiB1dWlkO30pO1xuIFxuXG4gIH0gZWxzZSB7XG4gICAgLy8gUHVibGlzaCBhcyBnbG9iYWwgKGluIGJyb3dzZXJzKVxuICAgIHZhciBfcHJldmlvdXNSb290ID0gX2dsb2JhbC51dWlkO1xuXG4gICAgLy8gKipgbm9Db25mbGljdCgpYCAtIChicm93c2VyIG9ubHkpIHRvIHJlc2V0IGdsb2JhbCAndXVpZCcgdmFyKipcbiAgICB1dWlkLm5vQ29uZmxpY3QgPSBmdW5jdGlvbigpIHtcbiAgICAgIF9nbG9iYWwudXVpZCA9IF9wcmV2aW91c1Jvb3Q7XG4gICAgICByZXR1cm4gdXVpZDtcbiAgICB9O1xuXG4gICAgX2dsb2JhbC51dWlkID0gdXVpZDtcbiAgfVxufSkuY2FsbCh0aGlzKTtcbiIsIm1vZHVsZS5leHBvcnRzPXtcbiAgXCIxMCpcIjoge1xuICAgIFwidmFsdWVcIjogMTAsXG4gICAgXCJ1Y3VtXCI6IFwiMVwiXG4gIH0sXG4gIFwiMTBeXCI6IHtcbiAgICBcInZhbHVlXCI6IDEwLFxuICAgIFwidWN1bVwiOiBcIjFcIlxuICB9LFxuICBcIltwaV1cIjoge1xuICAgIFwidmFsdWVcIjogMy4xNDE1OTI2NTM1ODk3OTMsXG4gICAgXCJ1Y3VtXCI6IFwiMVwiXG4gIH0sXG4gIFwiJVwiOiB7XG4gICAgXCJ2YWx1ZVwiOiAxLFxuICAgIFwidWN1bVwiOiBcIjEwKi0yXCJcbiAgfSxcbiAgXCJbcHB0aF1cIjoge1xuICAgIFwidmFsdWVcIjogMSxcbiAgICBcInVjdW1cIjogXCIxMCotM1wiXG4gIH0sXG4gIFwiW3BwbV1cIjoge1xuICAgIFwidmFsdWVcIjogMSxcbiAgICBcInVjdW1cIjogXCIxMCotNlwiXG4gIH0sXG4gIFwiW3BwYl1cIjoge1xuICAgIFwidmFsdWVcIjogMSxcbiAgICBcInVjdW1cIjogXCIxMCotOVwiXG4gIH0sXG4gIFwiW3BwdHJdXCI6IHtcbiAgICBcInZhbHVlXCI6IDEsXG4gICAgXCJ1Y3VtXCI6IFwiMTAqLTEyXCJcbiAgfSxcbiAgXCJtb2xcIjoge1xuICAgIFwidmFsdWVcIjogNi4wMjIxMzY3LFxuICAgIFwidWN1bVwiOiBcIjEwKjIzXCJcbiAgfSxcbiAgXCJzclwiOiB7XG4gICAgXCJ2YWx1ZVwiOiAxLFxuICAgIFwidWN1bVwiOiBcInJhZDJcIlxuICB9LFxuICBcIkh6XCI6IHtcbiAgICBcInZhbHVlXCI6IDEsXG4gICAgXCJ1Y3VtXCI6IFwicy0xXCJcbiAgfSxcbiAgXCJOXCI6IHtcbiAgICBcInZhbHVlXCI6IDEsXG4gICAgXCJ1Y3VtXCI6IFwia2cubS9zMlwiXG4gIH0sXG4gIFwiUGFcIjoge1xuICAgIFwidmFsdWVcIjogMSxcbiAgICBcInVjdW1cIjogXCJOL20yXCJcbiAgfSxcbiAgXCJKXCI6IHtcbiAgICBcInZhbHVlXCI6IDEsXG4gICAgXCJ1Y3VtXCI6IFwiTi5tXCJcbiAgfSxcbiAgXCJXXCI6IHtcbiAgICBcInZhbHVlXCI6IDEsXG4gICAgXCJ1Y3VtXCI6IFwiSi9zXCJcbiAgfSxcbiAgXCJBXCI6IHtcbiAgICBcInZhbHVlXCI6IDEsXG4gICAgXCJ1Y3VtXCI6IFwiQy9zXCJcbiAgfSxcbiAgXCJWXCI6IHtcbiAgICBcInZhbHVlXCI6IDEsXG4gICAgXCJ1Y3VtXCI6IFwiSi9DXCJcbiAgfSxcbiAgXCJGXCI6IHtcbiAgICBcInZhbHVlXCI6IDEsXG4gICAgXCJ1Y3VtXCI6IFwiQy9WXCJcbiAgfSxcbiAgXCJPaG1cIjoge1xuICAgIFwidmFsdWVcIjogMSxcbiAgICBcInVjdW1cIjogXCJWL0FcIlxuICB9LFxuICBcIlNcIjoge1xuICAgIFwidmFsdWVcIjogMSxcbiAgICBcInVjdW1cIjogXCJPaG0tMVwiXG4gIH0sXG4gIFwiV2JcIjoge1xuICAgIFwidmFsdWVcIjogMSxcbiAgICBcInVjdW1cIjogXCJWLnNcIlxuICB9LFxuICBcIkNlbFwiOiB7XG4gICAgXCJ2YWx1ZVwiOiBudWxsLFxuICAgIFwidWN1bVwiOiBcImNlbCgxIEspXCJcbiAgfSxcbiAgXCJUXCI6IHtcbiAgICBcInZhbHVlXCI6IDEsXG4gICAgXCJ1Y3VtXCI6IFwiV2IvbTJcIlxuICB9LFxuICBcIkhcIjoge1xuICAgIFwidmFsdWVcIjogMSxcbiAgICBcInVjdW1cIjogXCJXYi9BXCJcbiAgfSxcbiAgXCJsbVwiOiB7XG4gICAgXCJ2YWx1ZVwiOiAxLFxuICAgIFwidWN1bVwiOiBcImNkLnNyXCJcbiAgfSxcbiAgXCJseFwiOiB7XG4gICAgXCJ2YWx1ZVwiOiAxLFxuICAgIFwidWN1bVwiOiBcImxtL20yXCJcbiAgfSxcbiAgXCJCcVwiOiB7XG4gICAgXCJ2YWx1ZVwiOiAxLFxuICAgIFwidWN1bVwiOiBcInMtMVwiXG4gIH0sXG4gIFwiR3lcIjoge1xuICAgIFwidmFsdWVcIjogMSxcbiAgICBcInVjdW1cIjogXCJKL2tnXCJcbiAgfSxcbiAgXCJTdlwiOiB7XG4gICAgXCJ2YWx1ZVwiOiAxLFxuICAgIFwidWN1bVwiOiBcIkova2dcIlxuICB9LFxuICBcImdvblwiOiB7XG4gICAgXCJ2YWx1ZVwiOiAwLjksXG4gICAgXCJ1Y3VtXCI6IFwiZGVnXCJcbiAgfSxcbiAgXCJkZWdcIjoge1xuICAgIFwidmFsdWVcIjogMixcbiAgICBcInVjdW1cIjogXCJbcGldLnJhZC8zNjBcIlxuICB9LFxuICBcIidcIjoge1xuICAgIFwidmFsdWVcIjogMSxcbiAgICBcInVjdW1cIjogXCJkZWcvNjBcIlxuICB9LFxuICBcIicnXCI6IHtcbiAgICBcInZhbHVlXCI6IDEsXG4gICAgXCJ1Y3VtXCI6IFwiJy82MFwiXG4gIH0sXG4gIFwibFwiOiB7XG4gICAgXCJ2YWx1ZVwiOiAxLFxuICAgIFwidWN1bVwiOiBcImRtM1wiXG4gIH0sXG4gIFwiTFwiOiB7XG4gICAgXCJ2YWx1ZVwiOiAxLFxuICAgIFwidWN1bVwiOiBcImxcIlxuICB9LFxuICBcImFyXCI6IHtcbiAgICBcInZhbHVlXCI6IDEwMCxcbiAgICBcInVjdW1cIjogXCJtMlwiXG4gIH0sXG4gIFwibWluXCI6IHtcbiAgICBcInZhbHVlXCI6IDYwLFxuICAgIFwidWN1bVwiOiBcInNcIlxuICB9LFxuICBcImhcIjoge1xuICAgIFwidmFsdWVcIjogNjAsXG4gICAgXCJ1Y3VtXCI6IFwibWluXCJcbiAgfSxcbiAgXCJkXCI6IHtcbiAgICBcInZhbHVlXCI6IDI0LFxuICAgIFwidWN1bVwiOiBcImhcIlxuICB9LFxuICBcImFfdFwiOiB7XG4gICAgXCJ2YWx1ZVwiOiAzNjUuMjQyMTksXG4gICAgXCJ1Y3VtXCI6IFwiZFwiXG4gIH0sXG4gIFwiYV9qXCI6IHtcbiAgICBcInZhbHVlXCI6IDM2NS4yNSxcbiAgICBcInVjdW1cIjogXCJkXCJcbiAgfSxcbiAgXCJhX2dcIjoge1xuICAgIFwidmFsdWVcIjogMzY1LjI0MjUsXG4gICAgXCJ1Y3VtXCI6IFwiZFwiXG4gIH0sXG4gIFwiYVwiOiB7XG4gICAgXCJ2YWx1ZVwiOiAxLFxuICAgIFwidWN1bVwiOiBcImFfalwiXG4gIH0sXG4gIFwid2tcIjoge1xuICAgIFwidmFsdWVcIjogNyxcbiAgICBcInVjdW1cIjogXCJkXCJcbiAgfSxcbiAgXCJtb19zXCI6IHtcbiAgICBcInZhbHVlXCI6IDI5LjUzMDU5LFxuICAgIFwidWN1bVwiOiBcImRcIlxuICB9LFxuICBcIm1vX2pcIjoge1xuICAgIFwidmFsdWVcIjogMSxcbiAgICBcInVjdW1cIjogXCJhX2ovMTJcIlxuICB9LFxuICBcIm1vX2dcIjoge1xuICAgIFwidmFsdWVcIjogMSxcbiAgICBcInVjdW1cIjogXCJhX2cvMTJcIlxuICB9LFxuICBcIm1vXCI6IHtcbiAgICBcInZhbHVlXCI6IDEsXG4gICAgXCJ1Y3VtXCI6IFwibW9falwiXG4gIH0sXG4gIFwidFwiOiB7XG4gICAgXCJ2YWx1ZVwiOiAxMDAwLFxuICAgIFwidWN1bVwiOiBcImtnXCJcbiAgfSxcbiAgXCJiYXJcIjoge1xuICAgIFwidmFsdWVcIjogMTAwMDAwLFxuICAgIFwidWN1bVwiOiBcIlBhXCJcbiAgfSxcbiAgXCJ1XCI6IHtcbiAgICBcInZhbHVlXCI6IDEuNjYwNTQwMmUtMjQsXG4gICAgXCJ1Y3VtXCI6IFwiZ1wiXG4gIH0sXG4gIFwiZVZcIjoge1xuICAgIFwidmFsdWVcIjogMSxcbiAgICBcInVjdW1cIjogXCJbZV0uVlwiXG4gIH0sXG4gIFwiQVVcIjoge1xuICAgIFwidmFsdWVcIjogMTQ5NTk3Ljg3MDY5MSxcbiAgICBcInVjdW1cIjogXCJNbVwiXG4gIH0sXG4gIFwicGNcIjoge1xuICAgIFwidmFsdWVcIjogMzA4NTY3ODAwMDAwMDAwMDAsXG4gICAgXCJ1Y3VtXCI6IFwibVwiXG4gIH0sXG4gIFwiW2NdXCI6IHtcbiAgICBcInZhbHVlXCI6IDI5OTc5MjQ1OCxcbiAgICBcInVjdW1cIjogXCJtL3NcIlxuICB9LFxuICBcIltoXVwiOiB7XG4gICAgXCJ2YWx1ZVwiOiA2LjYyNjA3NTVlLTI0LFxuICAgIFwidWN1bVwiOiBcIkouc1wiXG4gIH0sXG4gIFwiW2tdXCI6IHtcbiAgICBcInZhbHVlXCI6IDEuMzgwNjU4ZS0yMyxcbiAgICBcInVjdW1cIjogXCJKL0tcIlxuICB9LFxuICBcIltlcHNfMF1cIjoge1xuICAgIFwidmFsdWVcIjogOC44NTQxODc4MTdlLTEyLFxuICAgIFwidWN1bVwiOiBcIkYvbVwiXG4gIH0sXG4gIFwiW211XzBdXCI6IHtcbiAgICBcInZhbHVlXCI6IDEsXG4gICAgXCJ1Y3VtXCI6IFwiNC5bcGldLjEwKi03Lk4vQTJcIlxuICB9LFxuICBcIltlXVwiOiB7XG4gICAgXCJ2YWx1ZVwiOiAxLjYwMjE3NzMzZS0xOSxcbiAgICBcInVjdW1cIjogXCJDXCJcbiAgfSxcbiAgXCJbbV9lXVwiOiB7XG4gICAgXCJ2YWx1ZVwiOiA5LjEwOTM4OTdlLTI4LFxuICAgIFwidWN1bVwiOiBcImdcIlxuICB9LFxuICBcIlttX3BdXCI6IHtcbiAgICBcInZhbHVlXCI6IDEuNjcyNjIzMWUtMjQsXG4gICAgXCJ1Y3VtXCI6IFwiZ1wiXG4gIH0sXG4gIFwiW0ddXCI6IHtcbiAgICBcInZhbHVlXCI6IDYuNjcyNTllLTExLFxuICAgIFwidWN1bVwiOiBcIm0zLmtnLTEucy0yXCJcbiAgfSxcbiAgXCJbZ11cIjoge1xuICAgIFwidmFsdWVcIjogOS44MDY2NSxcbiAgICBcInVjdW1cIjogXCJtL3MyXCJcbiAgfSxcbiAgXCJhdG1cIjoge1xuICAgIFwidmFsdWVcIjogMTAxMzI1LFxuICAgIFwidWN1bVwiOiBcIlBhXCJcbiAgfSxcbiAgXCJbbHldXCI6IHtcbiAgICBcInZhbHVlXCI6IDEsXG4gICAgXCJ1Y3VtXCI6IFwiW2NdLmFfalwiXG4gIH0sXG4gIFwiZ2ZcIjoge1xuICAgIFwidmFsdWVcIjogMSxcbiAgICBcInVjdW1cIjogXCJnLltnXVwiXG4gIH0sXG4gIFwiW2xiZl9hdl1cIjoge1xuICAgIFwidmFsdWVcIjogMSxcbiAgICBcInVjdW1cIjogXCJbbGJfYXZdLltnXVwiXG4gIH0sXG4gIFwiS3lcIjoge1xuICAgIFwidmFsdWVcIjogMSxcbiAgICBcInVjdW1cIjogXCJjbS0xXCJcbiAgfSxcbiAgXCJHYWxcIjoge1xuICAgIFwidmFsdWVcIjogMSxcbiAgICBcInVjdW1cIjogXCJjbS9zMlwiXG4gIH0sXG4gIFwiZHluXCI6IHtcbiAgICBcInZhbHVlXCI6IDEsXG4gICAgXCJ1Y3VtXCI6IFwiZy5jbS9zMlwiXG4gIH0sXG4gIFwiZXJnXCI6IHtcbiAgICBcInZhbHVlXCI6IDEsXG4gICAgXCJ1Y3VtXCI6IFwiZHluLmNtXCJcbiAgfSxcbiAgXCJQXCI6IHtcbiAgICBcInZhbHVlXCI6IDEsXG4gICAgXCJ1Y3VtXCI6IFwiZHluLnMvY20yXCJcbiAgfSxcbiAgXCJCaVwiOiB7XG4gICAgXCJ2YWx1ZVwiOiAxMCxcbiAgICBcInVjdW1cIjogXCJBXCJcbiAgfSxcbiAgXCJTdFwiOiB7XG4gICAgXCJ2YWx1ZVwiOiAxLFxuICAgIFwidWN1bVwiOiBcImNtMi9zXCJcbiAgfSxcbiAgXCJNeFwiOiB7XG4gICAgXCJ2YWx1ZVwiOiAxZS04LFxuICAgIFwidWN1bVwiOiBcIldiXCJcbiAgfSxcbiAgXCJHXCI6IHtcbiAgICBcInZhbHVlXCI6IDAuMDAwMSxcbiAgICBcInVjdW1cIjogXCJUXCJcbiAgfSxcbiAgXCJPZVwiOiB7XG4gICAgXCJ2YWx1ZVwiOiAyNTAsXG4gICAgXCJ1Y3VtXCI6IFwiL1twaV0uQS9tXCJcbiAgfSxcbiAgXCJHYlwiOiB7XG4gICAgXCJ2YWx1ZVwiOiAxLFxuICAgIFwidWN1bVwiOiBcIk9lLmNtXCJcbiAgfSxcbiAgXCJzYlwiOiB7XG4gICAgXCJ2YWx1ZVwiOiAxLFxuICAgIFwidWN1bVwiOiBcImNkL2NtMlwiXG4gIH0sXG4gIFwiTG1iXCI6IHtcbiAgICBcInZhbHVlXCI6IDEsXG4gICAgXCJ1Y3VtXCI6IFwiY2QvY20yL1twaV1cIlxuICB9LFxuICBcInBoXCI6IHtcbiAgICBcInZhbHVlXCI6IDAuMDAwMSxcbiAgICBcInVjdW1cIjogXCJseFwiXG4gIH0sXG4gIFwiQ2lcIjoge1xuICAgIFwidmFsdWVcIjogMzcwMDAwMDAwMDAsXG4gICAgXCJ1Y3VtXCI6IFwiQnFcIlxuICB9LFxuICBcIlJcIjoge1xuICAgIFwidmFsdWVcIjogMC4wMDAyNTgsXG4gICAgXCJ1Y3VtXCI6IFwiQy9rZ1wiXG4gIH0sXG4gIFwiUkFEXCI6IHtcbiAgICBcInZhbHVlXCI6IDEwMCxcbiAgICBcInVjdW1cIjogXCJlcmcvZ1wiXG4gIH0sXG4gIFwiUkVNXCI6IHtcbiAgICBcInZhbHVlXCI6IDEsXG4gICAgXCJ1Y3VtXCI6IFwiUkFEXCJcbiAgfSxcbiAgXCJbaW5faV1cIjoge1xuICAgIFwidmFsdWVcIjogMi41NCxcbiAgICBcInVjdW1cIjogXCJjbVwiXG4gIH0sXG4gIFwiW2Z0X2ldXCI6IHtcbiAgICBcInZhbHVlXCI6IDEyLFxuICAgIFwidWN1bVwiOiBcIltpbl9pXVwiXG4gIH0sXG4gIFwiW3lkX2ldXCI6IHtcbiAgICBcInZhbHVlXCI6IDMsXG4gICAgXCJ1Y3VtXCI6IFwiW2Z0X2ldXCJcbiAgfSxcbiAgXCJbbWlfaV1cIjoge1xuICAgIFwidmFsdWVcIjogNTI4MCxcbiAgICBcInVjdW1cIjogXCJbZnRfaV1cIlxuICB9LFxuICBcIltmdGhfaV1cIjoge1xuICAgIFwidmFsdWVcIjogNixcbiAgICBcInVjdW1cIjogXCJbZnRfaV1cIlxuICB9LFxuICBcIltubWlfaV1cIjoge1xuICAgIFwidmFsdWVcIjogMTg1MixcbiAgICBcInVjdW1cIjogXCJtXCJcbiAgfSxcbiAgXCJba25faV1cIjoge1xuICAgIFwidmFsdWVcIjogMSxcbiAgICBcInVjdW1cIjogXCJbbm1pX2ldL2hcIlxuICB9LFxuICBcIltzaW5faV1cIjoge1xuICAgIFwidmFsdWVcIjogMSxcbiAgICBcInVjdW1cIjogXCJbaW5faV0yXCJcbiAgfSxcbiAgXCJbc2Z0X2ldXCI6IHtcbiAgICBcInZhbHVlXCI6IDEsXG4gICAgXCJ1Y3VtXCI6IFwiW2Z0X2ldMlwiXG4gIH0sXG4gIFwiW3N5ZF9pXVwiOiB7XG4gICAgXCJ2YWx1ZVwiOiAxLFxuICAgIFwidWN1bVwiOiBcIlt5ZF9pXTJcIlxuICB9LFxuICBcIltjaW5faV1cIjoge1xuICAgIFwidmFsdWVcIjogMSxcbiAgICBcInVjdW1cIjogXCJbaW5faV0zXCJcbiAgfSxcbiAgXCJbY2Z0X2ldXCI6IHtcbiAgICBcInZhbHVlXCI6IDEsXG4gICAgXCJ1Y3VtXCI6IFwiW2Z0X2ldM1wiXG4gIH0sXG4gIFwiW2N5ZF9pXVwiOiB7XG4gICAgXCJ2YWx1ZVwiOiAxLFxuICAgIFwidWN1bVwiOiBcIlt5ZF9pXTNcIlxuICB9LFxuICBcIltiZl9pXVwiOiB7XG4gICAgXCJ2YWx1ZVwiOiAxNDQsXG4gICAgXCJ1Y3VtXCI6IFwiW2luX2ldM1wiXG4gIH0sXG4gIFwiW2NyX2ldXCI6IHtcbiAgICBcInZhbHVlXCI6IDEyOCxcbiAgICBcInVjdW1cIjogXCJbZnRfaV0zXCJcbiAgfSxcbiAgXCJbbWlsX2ldXCI6IHtcbiAgICBcInZhbHVlXCI6IDAuMDAxLFxuICAgIFwidWN1bVwiOiBcIltpbl9pXVwiXG4gIH0sXG4gIFwiW2NtbF9pXVwiOiB7XG4gICAgXCJ2YWx1ZVwiOiAxLFxuICAgIFwidWN1bVwiOiBcIltwaV0vNC5bbWlsX2ldMlwiXG4gIH0sXG4gIFwiW2hkX2ldXCI6IHtcbiAgICBcInZhbHVlXCI6IDQsXG4gICAgXCJ1Y3VtXCI6IFwiW2luX2ldXCJcbiAgfSxcbiAgXCJbZnRfdXNdXCI6IHtcbiAgICBcInZhbHVlXCI6IDEyMDAsXG4gICAgXCJ1Y3VtXCI6IFwibS8zOTM3XCJcbiAgfSxcbiAgXCJbeWRfdXNdXCI6IHtcbiAgICBcInZhbHVlXCI6IDMsXG4gICAgXCJ1Y3VtXCI6IFwiW2Z0X3VzXVwiXG4gIH0sXG4gIFwiW2luX3VzXVwiOiB7XG4gICAgXCJ2YWx1ZVwiOiAxLFxuICAgIFwidWN1bVwiOiBcIltmdF91c10vMTJcIlxuICB9LFxuICBcIltyZF91c11cIjoge1xuICAgIFwidmFsdWVcIjogMTYuNSxcbiAgICBcInVjdW1cIjogXCJbZnRfdXNdXCJcbiAgfSxcbiAgXCJbY2hfdXNdXCI6IHtcbiAgICBcInZhbHVlXCI6IDQsXG4gICAgXCJ1Y3VtXCI6IFwiW3JkX3VzXVwiXG4gIH0sXG4gIFwiW2xrX3VzXVwiOiB7XG4gICAgXCJ2YWx1ZVwiOiAxLFxuICAgIFwidWN1bVwiOiBcIltjaF91c10vMTAwXCJcbiAgfSxcbiAgXCJbcmNoX3VzXVwiOiB7XG4gICAgXCJ2YWx1ZVwiOiAxMDAsXG4gICAgXCJ1Y3VtXCI6IFwiW2Z0X3VzXVwiXG4gIH0sXG4gIFwiW3Jsa191c11cIjoge1xuICAgIFwidmFsdWVcIjogMSxcbiAgICBcInVjdW1cIjogXCJbcmNoX3VzXS8xMDBcIlxuICB9LFxuICBcIltmdGhfdXNdXCI6IHtcbiAgICBcInZhbHVlXCI6IDYsXG4gICAgXCJ1Y3VtXCI6IFwiW2Z0X3VzXVwiXG4gIH0sXG4gIFwiW2Z1cl91c11cIjoge1xuICAgIFwidmFsdWVcIjogNDAsXG4gICAgXCJ1Y3VtXCI6IFwiW3JkX3VzXVwiXG4gIH0sXG4gIFwiW21pX3VzXVwiOiB7XG4gICAgXCJ2YWx1ZVwiOiA4LFxuICAgIFwidWN1bVwiOiBcIltmdXJfdXNdXCJcbiAgfSxcbiAgXCJbYWNyX3VzXVwiOiB7XG4gICAgXCJ2YWx1ZVwiOiAxNjAsXG4gICAgXCJ1Y3VtXCI6IFwiW3JkX3VzXTJcIlxuICB9LFxuICBcIltzcmRfdXNdXCI6IHtcbiAgICBcInZhbHVlXCI6IDEsXG4gICAgXCJ1Y3VtXCI6IFwiW3JkX3VzXTJcIlxuICB9LFxuICBcIltzbWlfdXNdXCI6IHtcbiAgICBcInZhbHVlXCI6IDEsXG4gICAgXCJ1Y3VtXCI6IFwiW21pX3VzXTJcIlxuICB9LFxuICBcIltzY3RdXCI6IHtcbiAgICBcInZhbHVlXCI6IDEsXG4gICAgXCJ1Y3VtXCI6IFwiW21pX3VzXTJcIlxuICB9LFxuICBcIlt0d3BdXCI6IHtcbiAgICBcInZhbHVlXCI6IDM2LFxuICAgIFwidWN1bVwiOiBcIltzY3RdXCJcbiAgfSxcbiAgXCJbbWlsX3VzXVwiOiB7XG4gICAgXCJ2YWx1ZVwiOiAwLjAwMSxcbiAgICBcInVjdW1cIjogXCJbaW5fdXNdXCJcbiAgfSxcbiAgXCJbaW5fYnJdXCI6IHtcbiAgICBcInZhbHVlXCI6IDIuNTM5OTk4LFxuICAgIFwidWN1bVwiOiBcImNtXCJcbiAgfSxcbiAgXCJbZnRfYnJdXCI6IHtcbiAgICBcInZhbHVlXCI6IDEyLFxuICAgIFwidWN1bVwiOiBcIltpbl9icl1cIlxuICB9LFxuICBcIltyZF9icl1cIjoge1xuICAgIFwidmFsdWVcIjogMTYuNSxcbiAgICBcInVjdW1cIjogXCJbZnRfYnJdXCJcbiAgfSxcbiAgXCJbY2hfYnJdXCI6IHtcbiAgICBcInZhbHVlXCI6IDQsXG4gICAgXCJ1Y3VtXCI6IFwiW3JkX2JyXVwiXG4gIH0sXG4gIFwiW2xrX2JyXVwiOiB7XG4gICAgXCJ2YWx1ZVwiOiAxLFxuICAgIFwidWN1bVwiOiBcIltjaF9icl0vMTAwXCJcbiAgfSxcbiAgXCJbZnRoX2JyXVwiOiB7XG4gICAgXCJ2YWx1ZVwiOiA2LFxuICAgIFwidWN1bVwiOiBcIltmdF9icl1cIlxuICB9LFxuICBcIltwY19icl1cIjoge1xuICAgIFwidmFsdWVcIjogMi41LFxuICAgIFwidWN1bVwiOiBcIltmdF9icl1cIlxuICB9LFxuICBcIlt5ZF9icl1cIjoge1xuICAgIFwidmFsdWVcIjogMyxcbiAgICBcInVjdW1cIjogXCJbZnRfYnJdXCJcbiAgfSxcbiAgXCJbbWlfYnJdXCI6IHtcbiAgICBcInZhbHVlXCI6IDUyODAsXG4gICAgXCJ1Y3VtXCI6IFwiW2Z0X2JyXVwiXG4gIH0sXG4gIFwiW25taV9icl1cIjoge1xuICAgIFwidmFsdWVcIjogNjA4MCxcbiAgICBcInVjdW1cIjogXCJbZnRfYnJdXCJcbiAgfSxcbiAgXCJba25fYnJdXCI6IHtcbiAgICBcInZhbHVlXCI6IDEsXG4gICAgXCJ1Y3VtXCI6IFwiW25taV9icl0vaFwiXG4gIH0sXG4gIFwiW2Fjcl9icl1cIjoge1xuICAgIFwidmFsdWVcIjogNDg0MCxcbiAgICBcInVjdW1cIjogXCJbeWRfYnJdMlwiXG4gIH0sXG4gIFwiW2dhbF91c11cIjoge1xuICAgIFwidmFsdWVcIjogMjMxLFxuICAgIFwidWN1bVwiOiBcIltpbl9pXTNcIlxuICB9LFxuICBcIltiYmxfdXNdXCI6IHtcbiAgICBcInZhbHVlXCI6IDQyLFxuICAgIFwidWN1bVwiOiBcIltnYWxfdXNdXCJcbiAgfSxcbiAgXCJbcXRfdXNdXCI6IHtcbiAgICBcInZhbHVlXCI6IDEsXG4gICAgXCJ1Y3VtXCI6IFwiW2dhbF91c10vNFwiXG4gIH0sXG4gIFwiW3B0X3VzXVwiOiB7XG4gICAgXCJ2YWx1ZVwiOiAxLFxuICAgIFwidWN1bVwiOiBcIltxdF91c10vMlwiXG4gIH0sXG4gIFwiW2dpbF91c11cIjoge1xuICAgIFwidmFsdWVcIjogMSxcbiAgICBcInVjdW1cIjogXCJbcHRfdXNdLzRcIlxuICB9LFxuICBcIltmb3pfdXNdXCI6IHtcbiAgICBcInZhbHVlXCI6IDEsXG4gICAgXCJ1Y3VtXCI6IFwiW2dpbF91c10vNFwiXG4gIH0sXG4gIFwiW2Zkcl91c11cIjoge1xuICAgIFwidmFsdWVcIjogMSxcbiAgICBcInVjdW1cIjogXCJbZm96X3VzXS84XCJcbiAgfSxcbiAgXCJbbWluX3VzXVwiOiB7XG4gICAgXCJ2YWx1ZVwiOiAxLFxuICAgIFwidWN1bVwiOiBcIltmZHJfdXNdLzYwXCJcbiAgfSxcbiAgXCJbY3JkX3VzXVwiOiB7XG4gICAgXCJ2YWx1ZVwiOiAxMjgsXG4gICAgXCJ1Y3VtXCI6IFwiW2Z0X2ldM1wiXG4gIH0sXG4gIFwiW2J1X3VzXVwiOiB7XG4gICAgXCJ2YWx1ZVwiOiAyMTUwLjQyLFxuICAgIFwidWN1bVwiOiBcIltpbl9pXTNcIlxuICB9LFxuICBcIltnYWxfd2ldXCI6IHtcbiAgICBcInZhbHVlXCI6IDEsXG4gICAgXCJ1Y3VtXCI6IFwiW2J1X3VzXS84XCJcbiAgfSxcbiAgXCJbcGtfdXNdXCI6IHtcbiAgICBcInZhbHVlXCI6IDEsXG4gICAgXCJ1Y3VtXCI6IFwiW2J1X3VzXS80XCJcbiAgfSxcbiAgXCJbZHF0X3VzXVwiOiB7XG4gICAgXCJ2YWx1ZVwiOiAxLFxuICAgIFwidWN1bVwiOiBcIltwa191c10vOFwiXG4gIH0sXG4gIFwiW2RwdF91c11cIjoge1xuICAgIFwidmFsdWVcIjogMSxcbiAgICBcInVjdW1cIjogXCJbZHF0X3VzXS8yXCJcbiAgfSxcbiAgXCJbdGJzX3VzXVwiOiB7XG4gICAgXCJ2YWx1ZVwiOiAxLFxuICAgIFwidWN1bVwiOiBcIltmb3pfdXNdLzJcIlxuICB9LFxuICBcIlt0c3BfdXNdXCI6IHtcbiAgICBcInZhbHVlXCI6IDEsXG4gICAgXCJ1Y3VtXCI6IFwiW3Ric191c10vM1wiXG4gIH0sXG4gIFwiW2N1cF91c11cIjoge1xuICAgIFwidmFsdWVcIjogMTYsXG4gICAgXCJ1Y3VtXCI6IFwiW3Ric191c11cIlxuICB9LFxuICBcIltmb3pfbV1cIjoge1xuICAgIFwidmFsdWVcIjogMzAsXG4gICAgXCJ1Y3VtXCI6IFwibUxcIlxuICB9LFxuICBcIltjdXBfbV1cIjoge1xuICAgIFwidmFsdWVcIjogMjQwLFxuICAgIFwidWN1bVwiOiBcIm1MXCJcbiAgfSxcbiAgXCJbdHNwX21dXCI6IHtcbiAgICBcInZhbHVlXCI6IDUsXG4gICAgXCJ1Y3VtXCI6IFwibUxcIlxuICB9LFxuICBcIlt0YnNfbV1cIjoge1xuICAgIFwidmFsdWVcIjogMTUsXG4gICAgXCJ1Y3VtXCI6IFwibUxcIlxuICB9LFxuICBcIltnYWxfYnJdXCI6IHtcbiAgICBcInZhbHVlXCI6IDQuNTQ2MDksXG4gICAgXCJ1Y3VtXCI6IFwibFwiXG4gIH0sXG4gIFwiW3BrX2JyXVwiOiB7XG4gICAgXCJ2YWx1ZVwiOiAyLFxuICAgIFwidWN1bVwiOiBcIltnYWxfYnJdXCJcbiAgfSxcbiAgXCJbYnVfYnJdXCI6IHtcbiAgICBcInZhbHVlXCI6IDQsXG4gICAgXCJ1Y3VtXCI6IFwiW3BrX2JyXVwiXG4gIH0sXG4gIFwiW3F0X2JyXVwiOiB7XG4gICAgXCJ2YWx1ZVwiOiAxLFxuICAgIFwidWN1bVwiOiBcIltnYWxfYnJdLzRcIlxuICB9LFxuICBcIltwdF9icl1cIjoge1xuICAgIFwidmFsdWVcIjogMSxcbiAgICBcInVjdW1cIjogXCJbcXRfYnJdLzJcIlxuICB9LFxuICBcIltnaWxfYnJdXCI6IHtcbiAgICBcInZhbHVlXCI6IDEsXG4gICAgXCJ1Y3VtXCI6IFwiW3B0X2JyXS80XCJcbiAgfSxcbiAgXCJbZm96X2JyXVwiOiB7XG4gICAgXCJ2YWx1ZVwiOiAxLFxuICAgIFwidWN1bVwiOiBcIltnaWxfYnJdLzVcIlxuICB9LFxuICBcIltmZHJfYnJdXCI6IHtcbiAgICBcInZhbHVlXCI6IDEsXG4gICAgXCJ1Y3VtXCI6IFwiW2Zvel9icl0vOFwiXG4gIH0sXG4gIFwiW21pbl9icl1cIjoge1xuICAgIFwidmFsdWVcIjogMSxcbiAgICBcInVjdW1cIjogXCJbZmRyX2JyXS82MFwiXG4gIH0sXG4gIFwiW2dyXVwiOiB7XG4gICAgXCJ2YWx1ZVwiOiA2NC43OTg5MSxcbiAgICBcInVjdW1cIjogXCJtZ1wiXG4gIH0sXG4gIFwiW2xiX2F2XVwiOiB7XG4gICAgXCJ2YWx1ZVwiOiA3MDAwLFxuICAgIFwidWN1bVwiOiBcIltncl1cIlxuICB9LFxuICBcIltvel9hdl1cIjoge1xuICAgIFwidmFsdWVcIjogMSxcbiAgICBcInVjdW1cIjogXCJbbGJfYXZdLzE2XCJcbiAgfSxcbiAgXCJbZHJfYXZdXCI6IHtcbiAgICBcInZhbHVlXCI6IDEsXG4gICAgXCJ1Y3VtXCI6IFwiW296X2F2XS8xNlwiXG4gIH0sXG4gIFwiW3Njd3RfYXZdXCI6IHtcbiAgICBcInZhbHVlXCI6IDEwMCxcbiAgICBcInVjdW1cIjogXCJbbGJfYXZdXCJcbiAgfSxcbiAgXCJbbGN3dF9hdl1cIjoge1xuICAgIFwidmFsdWVcIjogMTEyLFxuICAgIFwidWN1bVwiOiBcIltsYl9hdl1cIlxuICB9LFxuICBcIltzdG9uX2F2XVwiOiB7XG4gICAgXCJ2YWx1ZVwiOiAyMCxcbiAgICBcInVjdW1cIjogXCJbc2N3dF9hdl1cIlxuICB9LFxuICBcIltsdG9uX2F2XVwiOiB7XG4gICAgXCJ2YWx1ZVwiOiAyMCxcbiAgICBcInVjdW1cIjogXCJbbGN3dF9hdl1cIlxuICB9LFxuICBcIltzdG9uZV9hdl1cIjoge1xuICAgIFwidmFsdWVcIjogMTQsXG4gICAgXCJ1Y3VtXCI6IFwiW2xiX2F2XVwiXG4gIH0sXG4gIFwiW3B3dF90cl1cIjoge1xuICAgIFwidmFsdWVcIjogMjQsXG4gICAgXCJ1Y3VtXCI6IFwiW2dyXVwiXG4gIH0sXG4gIFwiW296X3RyXVwiOiB7XG4gICAgXCJ2YWx1ZVwiOiAyMCxcbiAgICBcInVjdW1cIjogXCJbcHd0X3RyXVwiXG4gIH0sXG4gIFwiW2xiX3RyXVwiOiB7XG4gICAgXCJ2YWx1ZVwiOiAxMixcbiAgICBcInVjdW1cIjogXCJbb3pfdHJdXCJcbiAgfSxcbiAgXCJbc2NfYXBdXCI6IHtcbiAgICBcInZhbHVlXCI6IDIwLFxuICAgIFwidWN1bVwiOiBcIltncl1cIlxuICB9LFxuICBcIltkcl9hcF1cIjoge1xuICAgIFwidmFsdWVcIjogMyxcbiAgICBcInVjdW1cIjogXCJbc2NfYXBdXCJcbiAgfSxcbiAgXCJbb3pfYXBdXCI6IHtcbiAgICBcInZhbHVlXCI6IDgsXG4gICAgXCJ1Y3VtXCI6IFwiW2RyX2FwXVwiXG4gIH0sXG4gIFwiW2xiX2FwXVwiOiB7XG4gICAgXCJ2YWx1ZVwiOiAxMixcbiAgICBcInVjdW1cIjogXCJbb3pfYXBdXCJcbiAgfSxcbiAgXCJbb3pfbV1cIjoge1xuICAgIFwidmFsdWVcIjogMjgsXG4gICAgXCJ1Y3VtXCI6IFwiZ1wiXG4gIH0sXG4gIFwiW2xuZV1cIjoge1xuICAgIFwidmFsdWVcIjogMSxcbiAgICBcInVjdW1cIjogXCJbaW5faV0vMTJcIlxuICB9LFxuICBcIltwbnRdXCI6IHtcbiAgICBcInZhbHVlXCI6IDEsXG4gICAgXCJ1Y3VtXCI6IFwiW2xuZV0vNlwiXG4gIH0sXG4gIFwiW3BjYV1cIjoge1xuICAgIFwidmFsdWVcIjogMTIsXG4gICAgXCJ1Y3VtXCI6IFwiW3BudF1cIlxuICB9LFxuICBcIltwbnRfcHJdXCI6IHtcbiAgICBcInZhbHVlXCI6IDAuMDEzODM3LFxuICAgIFwidWN1bVwiOiBcIltpbl9pXVwiXG4gIH0sXG4gIFwiW3BjYV9wcl1cIjoge1xuICAgIFwidmFsdWVcIjogMTIsXG4gICAgXCJ1Y3VtXCI6IFwiW3BudF9wcl1cIlxuICB9LFxuICBcIltwaWVkXVwiOiB7XG4gICAgXCJ2YWx1ZVwiOiAzMi40OCxcbiAgICBcInVjdW1cIjogXCJjbVwiXG4gIH0sXG4gIFwiW3BvdWNlXVwiOiB7XG4gICAgXCJ2YWx1ZVwiOiAxLFxuICAgIFwidWN1bVwiOiBcIltwaWVkXS8xMlwiXG4gIH0sXG4gIFwiW2xpZ25lXVwiOiB7XG4gICAgXCJ2YWx1ZVwiOiAxLFxuICAgIFwidWN1bVwiOiBcIltwb3VjZV0vMTJcIlxuICB9LFxuICBcIltkaWRvdF1cIjoge1xuICAgIFwidmFsdWVcIjogMSxcbiAgICBcInVjdW1cIjogXCJbbGlnbmVdLzZcIlxuICB9LFxuICBcIltjaWNlcm9dXCI6IHtcbiAgICBcInZhbHVlXCI6IDEyLFxuICAgIFwidWN1bVwiOiBcIltkaWRvdF1cIlxuICB9LFxuICBcIltkZWdGXVwiOiB7XG4gICAgXCJ2YWx1ZVwiOiBudWxsLFxuICAgIFwidWN1bVwiOiBcImRlZ2YoNSBLLzkpXCJcbiAgfSxcbiAgXCJbZGVnUl1cIjoge1xuICAgIFwidmFsdWVcIjogNSxcbiAgICBcInVjdW1cIjogXCJLLzlcIlxuICB9LFxuICBcImNhbF9bMTVdXCI6IHtcbiAgICBcInZhbHVlXCI6IDQuMTg1OCxcbiAgICBcInVjdW1cIjogXCJKXCJcbiAgfSxcbiAgXCJjYWxfWzIwXVwiOiB7XG4gICAgXCJ2YWx1ZVwiOiA0LjE4MTksXG4gICAgXCJ1Y3VtXCI6IFwiSlwiXG4gIH0sXG4gIFwiY2FsX21cIjoge1xuICAgIFwidmFsdWVcIjogNC4xOTAwMixcbiAgICBcInVjdW1cIjogXCJKXCJcbiAgfSxcbiAgXCJjYWxfSVRcIjoge1xuICAgIFwidmFsdWVcIjogNC4xODY4LFxuICAgIFwidWN1bVwiOiBcIkpcIlxuICB9LFxuICBcImNhbF90aFwiOiB7XG4gICAgXCJ2YWx1ZVwiOiA0LjE4NCxcbiAgICBcInVjdW1cIjogXCJKXCJcbiAgfSxcbiAgXCJjYWxcIjoge1xuICAgIFwidmFsdWVcIjogMSxcbiAgICBcInVjdW1cIjogXCJjYWxfdGhcIlxuICB9LFxuICBcIltDYWxdXCI6IHtcbiAgICBcInZhbHVlXCI6IDEsXG4gICAgXCJ1Y3VtXCI6IFwia2NhbF90aFwiXG4gIH0sXG4gIFwiW0J0dV8zOV1cIjoge1xuICAgIFwidmFsdWVcIjogMS4wNTk2NyxcbiAgICBcInVjdW1cIjogXCJrSlwiXG4gIH0sXG4gIFwiW0J0dV81OV1cIjoge1xuICAgIFwidmFsdWVcIjogMS4wNTQ4LFxuICAgIFwidWN1bVwiOiBcImtKXCJcbiAgfSxcbiAgXCJbQnR1XzYwXVwiOiB7XG4gICAgXCJ2YWx1ZVwiOiAxLjA1NDY4LFxuICAgIFwidWN1bVwiOiBcImtKXCJcbiAgfSxcbiAgXCJbQnR1X21dXCI6IHtcbiAgICBcInZhbHVlXCI6IDEuMDU1ODcsXG4gICAgXCJ1Y3VtXCI6IFwia0pcIlxuICB9LFxuICBcIltCdHVfSVRdXCI6IHtcbiAgICBcInZhbHVlXCI6IDEuMDU1MDU1ODUyNjIsXG4gICAgXCJ1Y3VtXCI6IFwia0pcIlxuICB9LFxuICBcIltCdHVfdGhdXCI6IHtcbiAgICBcInZhbHVlXCI6IDEuMDU0MzUsXG4gICAgXCJ1Y3VtXCI6IFwia0pcIlxuICB9LFxuICBcIltCdHVdXCI6IHtcbiAgICBcInZhbHVlXCI6IDEsXG4gICAgXCJ1Y3VtXCI6IFwiW0J0dV90aF1cIlxuICB9LFxuICBcIltIUF1cIjoge1xuICAgIFwidmFsdWVcIjogNTUwLFxuICAgIFwidWN1bVwiOiBcIltmdF9pXS5bbGJmX2F2XS9zXCJcbiAgfSxcbiAgXCJ0ZXhcIjoge1xuICAgIFwidmFsdWVcIjogMSxcbiAgICBcInVjdW1cIjogXCJnL2ttXCJcbiAgfSxcbiAgXCJbZGVuXVwiOiB7XG4gICAgXCJ2YWx1ZVwiOiAxLFxuICAgIFwidWN1bVwiOiBcImcvOS9rbVwiXG4gIH0sXG4gIFwibVtIMk9dXCI6IHtcbiAgICBcInZhbHVlXCI6IDkuODA2NjUsXG4gICAgXCJ1Y3VtXCI6IFwia1BhXCJcbiAgfSxcbiAgXCJtW0hnXVwiOiB7XG4gICAgXCJ2YWx1ZVwiOiAxMzMuMzIyLFxuICAgIFwidWN1bVwiOiBcImtQYVwiXG4gIH0sXG4gIFwiW2luX2knSDJPXVwiOiB7XG4gICAgXCJ2YWx1ZVwiOiAxLFxuICAgIFwidWN1bVwiOiBcIm1bSDJPXS5baW5faV0vbVwiXG4gIH0sXG4gIFwiW2luX2knSGddXCI6IHtcbiAgICBcInZhbHVlXCI6IDEsXG4gICAgXCJ1Y3VtXCI6IFwibVtIZ10uW2luX2ldL21cIlxuICB9LFxuICBcIltQUlVdXCI6IHtcbiAgICBcInZhbHVlXCI6IDEsXG4gICAgXCJ1Y3VtXCI6IFwibW1bSGddLnMvbWxcIlxuICB9LFxuICBcIlt3b29kJ1VdXCI6IHtcbiAgICBcInZhbHVlXCI6IDEsXG4gICAgXCJ1Y3VtXCI6IFwibW1bSGddLm1pbi9MXCJcbiAgfSxcbiAgXCJbZGlvcF1cIjoge1xuICAgIFwidmFsdWVcIjogMSxcbiAgICBcInVjdW1cIjogXCIvbVwiXG4gIH0sXG4gIFwiW3AnZGlvcF1cIjoge1xuICAgIFwidmFsdWVcIjogbnVsbCxcbiAgICBcInVjdW1cIjogXCIxMDB0YW4oMSByYWQpXCJcbiAgfSxcbiAgXCIlW3Nsb3BlXVwiOiB7XG4gICAgXCJ2YWx1ZVwiOiBudWxsLFxuICAgIFwidWN1bVwiOiBcIjEwMHRhbigxIHJhZClcIlxuICB9LFxuICBcIlttZXNoX2ldXCI6IHtcbiAgICBcInZhbHVlXCI6IDEsXG4gICAgXCJ1Y3VtXCI6IFwiL1tpbl9pXVwiXG4gIH0sXG4gIFwiW0NoXVwiOiB7XG4gICAgXCJ2YWx1ZVwiOiAxLFxuICAgIFwidWN1bVwiOiBcIm1tLzNcIlxuICB9LFxuICBcIltkcnBdXCI6IHtcbiAgICBcInZhbHVlXCI6IDEsXG4gICAgXCJ1Y3VtXCI6IFwibWwvMjBcIlxuICB9LFxuICBcIltobnNmJ1VdXCI6IHtcbiAgICBcInZhbHVlXCI6IDEsXG4gICAgXCJ1Y3VtXCI6IFwiMVwiXG4gIH0sXG4gIFwiW01FVF1cIjoge1xuICAgIFwidmFsdWVcIjogMy41LFxuICAgIFwidWN1bVwiOiBcIm1ML21pbi9rZ1wiXG4gIH0sXG4gIFwiW2hwJ19YXVwiOiB7XG4gICAgXCJ2YWx1ZVwiOiBudWxsLFxuICAgIFwidWN1bVwiOiBcImhwWCgxIDEpXCJcbiAgfSxcbiAgXCJbaHAnX0NdXCI6IHtcbiAgICBcInZhbHVlXCI6IG51bGwsXG4gICAgXCJ1Y3VtXCI6IFwiaHBDKDEgMSlcIlxuICB9LFxuICBcIltocCdfTV1cIjoge1xuICAgIFwidmFsdWVcIjogbnVsbCxcbiAgICBcInVjdW1cIjogXCJocE0oMSAxKVwiXG4gIH0sXG4gIFwiW2hwJ19RXVwiOiB7XG4gICAgXCJ2YWx1ZVwiOiBudWxsLFxuICAgIFwidWN1bVwiOiBcImhwUSgxIDEpXCJcbiAgfSxcbiAgXCJbaHBfWF1cIjoge1xuICAgIFwidmFsdWVcIjogMSxcbiAgICBcInVjdW1cIjogXCIxXCJcbiAgfSxcbiAgXCJbaHBfQ11cIjoge1xuICAgIFwidmFsdWVcIjogMSxcbiAgICBcInVjdW1cIjogXCIxXCJcbiAgfSxcbiAgXCJbaHBfTV1cIjoge1xuICAgIFwidmFsdWVcIjogMSxcbiAgICBcInVjdW1cIjogXCIxXCJcbiAgfSxcbiAgXCJbaHBfUV1cIjoge1xuICAgIFwidmFsdWVcIjogMSxcbiAgICBcInVjdW1cIjogXCIxXCJcbiAgfSxcbiAgXCJba3BfWF1cIjoge1xuICAgIFwidmFsdWVcIjogMSxcbiAgICBcInVjdW1cIjogXCIxXCJcbiAgfSxcbiAgXCJba3BfQ11cIjoge1xuICAgIFwidmFsdWVcIjogMSxcbiAgICBcInVjdW1cIjogXCIxXCJcbiAgfSxcbiAgXCJba3BfTV1cIjoge1xuICAgIFwidmFsdWVcIjogMSxcbiAgICBcInVjdW1cIjogXCIxXCJcbiAgfSxcbiAgXCJba3BfUV1cIjoge1xuICAgIFwidmFsdWVcIjogMSxcbiAgICBcInVjdW1cIjogXCIxXCJcbiAgfSxcbiAgXCJlcVwiOiB7XG4gICAgXCJ2YWx1ZVwiOiAxLFxuICAgIFwidWN1bVwiOiBcIm1vbFwiXG4gIH0sXG4gIFwib3NtXCI6IHtcbiAgICBcInZhbHVlXCI6IDEsXG4gICAgXCJ1Y3VtXCI6IFwibW9sXCJcbiAgfSxcbiAgXCJbcEhdXCI6IHtcbiAgICBcInZhbHVlXCI6IG51bGwsXG4gICAgXCJ1Y3VtXCI6IFwicEgoMSBtb2wvbClcIlxuICB9LFxuICBcImclXCI6IHtcbiAgICBcInZhbHVlXCI6IDEsXG4gICAgXCJ1Y3VtXCI6IFwiZy9kbFwiXG4gIH0sXG4gIFwiW1NdXCI6IHtcbiAgICBcInZhbHVlXCI6IDEsXG4gICAgXCJ1Y3VtXCI6IFwiMTAqLTEzLnNcIlxuICB9LFxuICBcIltIUEZdXCI6IHtcbiAgICBcInZhbHVlXCI6IDEsXG4gICAgXCJ1Y3VtXCI6IFwiMVwiXG4gIH0sXG4gIFwiW0xQRl1cIjoge1xuICAgIFwidmFsdWVcIjogMTAwLFxuICAgIFwidWN1bVwiOiBcIjFcIlxuICB9LFxuICBcImthdFwiOiB7XG4gICAgXCJ2YWx1ZVwiOiAxLFxuICAgIFwidWN1bVwiOiBcIm1vbC9zXCJcbiAgfSxcbiAgXCJVXCI6IHtcbiAgICBcInZhbHVlXCI6IDEsXG4gICAgXCJ1Y3VtXCI6IFwidW1vbC9taW5cIlxuICB9LFxuICBcIltpVV1cIjoge1xuICAgIFwidmFsdWVcIjogMSxcbiAgICBcInVjdW1cIjogXCIxXCJcbiAgfSxcbiAgXCJbSVVdXCI6IHtcbiAgICBcInZhbHVlXCI6IDEsXG4gICAgXCJ1Y3VtXCI6IFwiW2lVXVwiXG4gIH0sXG4gIFwiW2FyYidVXVwiOiB7XG4gICAgXCJ2YWx1ZVwiOiAxLFxuICAgIFwidWN1bVwiOiBcIjFcIlxuICB9LFxuICBcIltVU1AnVV1cIjoge1xuICAgIFwidmFsdWVcIjogMSxcbiAgICBcInVjdW1cIjogXCIxXCJcbiAgfSxcbiAgXCJbR1BMJ1VdXCI6IHtcbiAgICBcInZhbHVlXCI6IDEsXG4gICAgXCJ1Y3VtXCI6IFwiMVwiXG4gIH0sXG4gIFwiW01QTCdVXVwiOiB7XG4gICAgXCJ2YWx1ZVwiOiAxLFxuICAgIFwidWN1bVwiOiBcIjFcIlxuICB9LFxuICBcIltBUEwnVV1cIjoge1xuICAgIFwidmFsdWVcIjogMSxcbiAgICBcInVjdW1cIjogXCIxXCJcbiAgfSxcbiAgXCJbYmV0aCdVXVwiOiB7XG4gICAgXCJ2YWx1ZVwiOiAxLFxuICAgIFwidWN1bVwiOiBcIjFcIlxuICB9LFxuICBcIlthbnRpJ1hhJ1VdXCI6IHtcbiAgICBcInZhbHVlXCI6IDEsXG4gICAgXCJ1Y3VtXCI6IFwiMVwiXG4gIH0sXG4gIFwiW3RvZGQnVV1cIjoge1xuICAgIFwidmFsdWVcIjogMSxcbiAgICBcInVjdW1cIjogXCIxXCJcbiAgfSxcbiAgXCJbZHllJ1VdXCI6IHtcbiAgICBcInZhbHVlXCI6IDEsXG4gICAgXCJ1Y3VtXCI6IFwiMVwiXG4gIH0sXG4gIFwiW3NtZ3knVV1cIjoge1xuICAgIFwidmFsdWVcIjogMSxcbiAgICBcInVjdW1cIjogXCIxXCJcbiAgfSxcbiAgXCJbYmRzaydVXVwiOiB7XG4gICAgXCJ2YWx1ZVwiOiAxLFxuICAgIFwidWN1bVwiOiBcIjFcIlxuICB9LFxuICBcIltrYSdVXVwiOiB7XG4gICAgXCJ2YWx1ZVwiOiAxLFxuICAgIFwidWN1bVwiOiBcIjFcIlxuICB9LFxuICBcIltrbmsnVV1cIjoge1xuICAgIFwidmFsdWVcIjogMSxcbiAgICBcInVjdW1cIjogXCIxXCJcbiAgfSxcbiAgXCJbbWNsZydVXVwiOiB7XG4gICAgXCJ2YWx1ZVwiOiAxLFxuICAgIFwidWN1bVwiOiBcIjFcIlxuICB9LFxuICBcIlt0YidVXVwiOiB7XG4gICAgXCJ2YWx1ZVwiOiAxLFxuICAgIFwidWN1bVwiOiBcIjFcIlxuICB9LFxuICBcIltDQ0lEXzUwXVwiOiB7XG4gICAgXCJ2YWx1ZVwiOiAxLFxuICAgIFwidWN1bVwiOiBcIjFcIlxuICB9LFxuICBcIltUQ0lEXzUwXVwiOiB7XG4gICAgXCJ2YWx1ZVwiOiAxLFxuICAgIFwidWN1bVwiOiBcIjFcIlxuICB9LFxuICBcIltFSURfNTBdXCI6IHtcbiAgICBcInZhbHVlXCI6IDEsXG4gICAgXCJ1Y3VtXCI6IFwiMVwiXG4gIH0sXG4gIFwiW1BGVV1cIjoge1xuICAgIFwidmFsdWVcIjogMSxcbiAgICBcInVjdW1cIjogXCIxXCJcbiAgfSxcbiAgXCJbRkZVXVwiOiB7XG4gICAgXCJ2YWx1ZVwiOiAxLFxuICAgIFwidWN1bVwiOiBcIjFcIlxuICB9LFxuICBcIltDRlVdXCI6IHtcbiAgICBcInZhbHVlXCI6IDEsXG4gICAgXCJ1Y3VtXCI6IFwiMVwiXG4gIH0sXG4gIFwiW0JBVV1cIjoge1xuICAgIFwidmFsdWVcIjogMSxcbiAgICBcInVjdW1cIjogXCIxXCJcbiAgfSxcbiAgXCJbQVVdXCI6IHtcbiAgICBcInZhbHVlXCI6IDEsXG4gICAgXCJ1Y3VtXCI6IFwiMVwiXG4gIH0sXG4gIFwiW0FtYidhJzEnVV1cIjoge1xuICAgIFwidmFsdWVcIjogMSxcbiAgICBcInVjdW1cIjogXCIxXCJcbiAgfSxcbiAgXCJbUE5VXVwiOiB7XG4gICAgXCJ2YWx1ZVwiOiAxLFxuICAgIFwidWN1bVwiOiBcIjFcIlxuICB9LFxuICBcIltMZl1cIjoge1xuICAgIFwidmFsdWVcIjogMSxcbiAgICBcInVjdW1cIjogXCIxXCJcbiAgfSxcbiAgXCJbRCdhZydVXVwiOiB7XG4gICAgXCJ2YWx1ZVwiOiAxLFxuICAgIFwidWN1bVwiOiBcIjFcIlxuICB9LFxuICBcIltGRVVdXCI6IHtcbiAgICBcInZhbHVlXCI6IDEsXG4gICAgXCJ1Y3VtXCI6IFwiMVwiXG4gIH0sXG4gIFwiW0VMVV1cIjoge1xuICAgIFwidmFsdWVcIjogMSxcbiAgICBcInVjdW1cIjogXCIxXCJcbiAgfSxcbiAgXCJbRVVdXCI6IHtcbiAgICBcInZhbHVlXCI6IDEsXG4gICAgXCJ1Y3VtXCI6IFwiMVwiXG4gIH0sXG4gIFwiTnBcIjoge1xuICAgIFwidmFsdWVcIjogbnVsbCxcbiAgICBcInVjdW1cIjogXCJsbigxIDEpXCJcbiAgfSxcbiAgXCJCXCI6IHtcbiAgICBcInZhbHVlXCI6IG51bGwsXG4gICAgXCJ1Y3VtXCI6IFwibGcoMSAxKVwiXG4gIH0sXG4gIFwiQltTUExdXCI6IHtcbiAgICBcInZhbHVlXCI6IG51bGwsXG4gICAgXCJ1Y3VtXCI6IFwiMmxnKDIgMTAqLTUuUGEpXCJcbiAgfSxcbiAgXCJCW1ZdXCI6IHtcbiAgICBcInZhbHVlXCI6IG51bGwsXG4gICAgXCJ1Y3VtXCI6IFwiMmxnKDEgVilcIlxuICB9LFxuICBcIkJbbVZdXCI6IHtcbiAgICBcInZhbHVlXCI6IG51bGwsXG4gICAgXCJ1Y3VtXCI6IFwiMmxnKDEgbVYpXCJcbiAgfSxcbiAgXCJCW3VWXVwiOiB7XG4gICAgXCJ2YWx1ZVwiOiBudWxsLFxuICAgIFwidWN1bVwiOiBcIjJsZygxIHVWKVwiXG4gIH0sXG4gIFwiQlsxMC5uVl1cIjoge1xuICAgIFwidmFsdWVcIjogbnVsbCxcbiAgICBcInVjdW1cIjogXCIybGcoMTAgblYpXCJcbiAgfSxcbiAgXCJCW1ddXCI6IHtcbiAgICBcInZhbHVlXCI6IG51bGwsXG4gICAgXCJ1Y3VtXCI6IFwibGcoMSBXKVwiXG4gIH0sXG4gIFwiQltrV11cIjoge1xuICAgIFwidmFsdWVcIjogbnVsbCxcbiAgICBcInVjdW1cIjogXCJsZygxIGtXKVwiXG4gIH0sXG4gIFwic3RcIjoge1xuICAgIFwidmFsdWVcIjogMSxcbiAgICBcInVjdW1cIjogXCJtM1wiXG4gIH0sXG4gIFwiQW9cIjoge1xuICAgIFwidmFsdWVcIjogMC4xLFxuICAgIFwidWN1bVwiOiBcIm5tXCJcbiAgfSxcbiAgXCJiXCI6IHtcbiAgICBcInZhbHVlXCI6IDEwMCxcbiAgICBcInVjdW1cIjogXCJmbTJcIlxuICB9LFxuICBcImF0dFwiOiB7XG4gICAgXCJ2YWx1ZVwiOiAxLFxuICAgIFwidWN1bVwiOiBcImtnZi9jbTJcIlxuICB9LFxuICBcIm1ob1wiOiB7XG4gICAgXCJ2YWx1ZVwiOiAxLFxuICAgIFwidWN1bVwiOiBcIlNcIlxuICB9LFxuICBcIltwc2ldXCI6IHtcbiAgICBcInZhbHVlXCI6IDEsXG4gICAgXCJ1Y3VtXCI6IFwiW2xiZl9hdl0vW2luX2ldMlwiXG4gIH0sXG4gIFwiY2lyY1wiOiB7XG4gICAgXCJ2YWx1ZVwiOiAyLFxuICAgIFwidWN1bVwiOiBcIltwaV0ucmFkXCJcbiAgfSxcbiAgXCJzcGhcIjoge1xuICAgIFwidmFsdWVcIjogNCxcbiAgICBcInVjdW1cIjogXCJbcGldLnNyXCJcbiAgfSxcbiAgXCJbY2FyX21dXCI6IHtcbiAgICBcInZhbHVlXCI6IDAuMixcbiAgICBcInVjdW1cIjogXCJnXCJcbiAgfSxcbiAgXCJbY2FyX0F1XVwiOiB7XG4gICAgXCJ2YWx1ZVwiOiAxLFxuICAgIFwidWN1bVwiOiBcIi8yNFwiXG4gIH0sXG4gIFwiW3Ntb290XVwiOiB7XG4gICAgXCJ2YWx1ZVwiOiA2NyxcbiAgICBcInVjdW1cIjogXCJbaW5faV1cIlxuICB9LFxuICBcImJpdF9zXCI6IHtcbiAgICBcInZhbHVlXCI6IG51bGwsXG4gICAgXCJ1Y3VtXCI6IFwibGQoMSAxKVwiXG4gIH0sXG4gIFwiYml0XCI6IHtcbiAgICBcInZhbHVlXCI6IDEsXG4gICAgXCJ1Y3VtXCI6IFwiMVwiXG4gIH0sXG4gIFwiQnlcIjoge1xuICAgIFwidmFsdWVcIjogOCxcbiAgICBcInVjdW1cIjogXCJiaXRcIlxuICB9LFxuICBcIkJkXCI6IHtcbiAgICBcInZhbHVlXCI6IDEsXG4gICAgXCJ1Y3VtXCI6IFwiL3NcIlxuICB9XG59XG4iLCJtb2R1bGUuZXhwb3J0cz17XCJtb2xcIjp0cnVlLFwic3JcIjp0cnVlLFwiSHpcIjp0cnVlLFwiTlwiOnRydWUsXCJQYVwiOnRydWUsXCJKXCI6dHJ1ZSxcIldcIjp0cnVlLFwiQVwiOnRydWUsXCJWXCI6dHJ1ZSxcIkZcIjp0cnVlLFwiT2htXCI6dHJ1ZSxcIlNcIjp0cnVlLFwiV2JcIjp0cnVlLFwiQ2VsXCI6dHJ1ZSxcIlRcIjp0cnVlLFwiSFwiOnRydWUsXCJsbVwiOnRydWUsXCJseFwiOnRydWUsXCJCcVwiOnRydWUsXCJHeVwiOnRydWUsXCJTdlwiOnRydWUsXCJsXCI6dHJ1ZSxcIkxcIjp0cnVlLFwiYXJcIjp0cnVlLFwidFwiOnRydWUsXCJiYXJcIjp0cnVlLFwidVwiOnRydWUsXCJlVlwiOnRydWUsXCJwY1wiOnRydWUsXCJbY11cIjp0cnVlLFwiW2hdXCI6dHJ1ZSxcIltrXVwiOnRydWUsXCJbZXBzXzBdXCI6dHJ1ZSxcIlttdV8wXVwiOnRydWUsXCJbZV1cIjp0cnVlLFwiW21fZV1cIjp0cnVlLFwiW21fcF1cIjp0cnVlLFwiW0ddXCI6dHJ1ZSxcIltnXVwiOnRydWUsXCJbbHldXCI6dHJ1ZSxcImdmXCI6dHJ1ZSxcIkt5XCI6dHJ1ZSxcIkdhbFwiOnRydWUsXCJkeW5cIjp0cnVlLFwiZXJnXCI6dHJ1ZSxcIlBcIjp0cnVlLFwiQmlcIjp0cnVlLFwiU3RcIjp0cnVlLFwiTXhcIjp0cnVlLFwiR1wiOnRydWUsXCJPZVwiOnRydWUsXCJHYlwiOnRydWUsXCJzYlwiOnRydWUsXCJMbWJcIjp0cnVlLFwicGhcIjp0cnVlLFwiQ2lcIjp0cnVlLFwiUlwiOnRydWUsXCJSQURcIjp0cnVlLFwiUkVNXCI6dHJ1ZSxcImNhbF9bMTVdXCI6dHJ1ZSxcImNhbF9bMjBdXCI6dHJ1ZSxcImNhbF9tXCI6dHJ1ZSxcImNhbF9JVFwiOnRydWUsXCJjYWxfdGhcIjp0cnVlLFwiY2FsXCI6dHJ1ZSxcInRleFwiOnRydWUsXCJtW0gyT11cIjp0cnVlLFwibVtIZ11cIjp0cnVlLFwiZXFcIjp0cnVlLFwib3NtXCI6dHJ1ZSxcImclXCI6dHJ1ZSxcImthdFwiOnRydWUsXCJVXCI6dHJ1ZSxcIltpVV1cIjp0cnVlLFwiW0lVXVwiOnRydWUsXCJOcFwiOnRydWUsXCJCXCI6dHJ1ZSxcIkJbU1BMXVwiOnRydWUsXCJCW1ZdXCI6dHJ1ZSxcIkJbbVZdXCI6dHJ1ZSxcIkJbdVZdXCI6dHJ1ZSxcIkJbMTAublZdXCI6dHJ1ZSxcIkJbV11cIjp0cnVlLFwiQltrV11cIjp0cnVlLFwic3RcIjp0cnVlLFwibWhvXCI6dHJ1ZSxcImJpdFwiOnRydWUsXCJCeVwiOnRydWUsXCJCZFwiOnRydWUsXCJtXCI6dHJ1ZSxcInNcIjp0cnVlLFwiZ1wiOnRydWUsXCJyYWRcIjp0cnVlLFwiS1wiOnRydWUsXCJDXCI6dHJ1ZSxcImNkXCI6dHJ1ZX1cbiIsIm1vZHVsZS5leHBvcnRzPXtcbiAgXCJZXCI6IDFlKzI0LFxuICBcIlpcIjogMWUrMjEsXG4gIFwiRVwiOiAxMDAwMDAwMDAwMDAwMDAwMDAwLFxuICBcIlBcIjogMTAwMDAwMDAwMDAwMDAwMCxcbiAgXCJUXCI6IDEwMDAwMDAwMDAwMDAsXG4gIFwiR1wiOiAxMDAwMDAwMDAwLFxuICBcIk1cIjogMTAwMDAwMCxcbiAgXCJrXCI6IDEwMDAsXG4gIFwiaFwiOiAxMDAsXG4gIFwiZGFcIjogMTAsXG4gIFwiZFwiOiAwLjEsXG4gIFwiY1wiOiAwLjAxLFxuICBcIm1cIjogMC4wMDEsXG4gIFwidVwiOiAwLjAwMDAwMSxcbiAgXCJuXCI6IDFlLTksXG4gIFwicFwiOiAxZS0xMixcbiAgXCJmXCI6IDFlLTE1LFxuICBcImFcIjogMWUtMTgsXG4gIFwielwiOiAxZS0yMSxcbiAgXCJ5XCI6IDFlLTI0LFxuICBcIktpXCI6IDEwMjQsXG4gIFwiTWlcIjogMTA0ODU3NixcbiAgXCJHaVwiOiAxMDczNzQxODI0LFxuICBcIlRpXCI6IDEwOTk1MTE2Mjc3NzZcbn1cbiIsIm1vZHVsZS5leHBvcnRzID0gKGZ1bmN0aW9uKCkge1xuICAvKlxuICAgKiBHZW5lcmF0ZWQgYnkgUEVHLmpzIDAuOC4wLlxuICAgKlxuICAgKiBodHRwOi8vcGVnanMubWFqZGEuY3ovXG4gICAqL1xuXG4gIGZ1bmN0aW9uIHBlZyRzdWJjbGFzcyhjaGlsZCwgcGFyZW50KSB7XG4gICAgZnVuY3Rpb24gY3RvcigpIHsgdGhpcy5jb25zdHJ1Y3RvciA9IGNoaWxkOyB9XG4gICAgY3Rvci5wcm90b3R5cGUgPSBwYXJlbnQucHJvdG90eXBlO1xuICAgIGNoaWxkLnByb3RvdHlwZSA9IG5ldyBjdG9yKCk7XG4gIH1cblxuICBmdW5jdGlvbiBTeW50YXhFcnJvcihtZXNzYWdlLCBleHBlY3RlZCwgZm91bmQsIG9mZnNldCwgbGluZSwgY29sdW1uKSB7XG4gICAgdGhpcy5tZXNzYWdlICA9IG1lc3NhZ2U7XG4gICAgdGhpcy5leHBlY3RlZCA9IGV4cGVjdGVkO1xuICAgIHRoaXMuZm91bmQgICAgPSBmb3VuZDtcbiAgICB0aGlzLm9mZnNldCAgID0gb2Zmc2V0O1xuICAgIHRoaXMubGluZSAgICAgPSBsaW5lO1xuICAgIHRoaXMuY29sdW1uICAgPSBjb2x1bW47XG5cbiAgICB0aGlzLm5hbWUgICAgID0gXCJTeW50YXhFcnJvclwiO1xuICB9XG5cbiAgcGVnJHN1YmNsYXNzKFN5bnRheEVycm9yLCBFcnJvcik7XG5cbiAgZnVuY3Rpb24gcGFyc2UoaW5wdXQpIHtcbiAgICB2YXIgb3B0aW9ucyA9IGFyZ3VtZW50cy5sZW5ndGggPiAxID8gYXJndW1lbnRzWzFdIDoge30sXG5cbiAgICAgICAgcGVnJEZBSUxFRCA9IHt9LFxuXG4gICAgICAgIHBlZyRzdGFydFJ1bGVJbmRpY2VzID0geyBzdGFydDogMCB9LFxuICAgICAgICBwZWckc3RhcnRSdWxlSW5kZXggICA9IDAsXG5cbiAgICAgICAgcGVnJGNvbnN0cyA9IFtcbiAgICAgICAgICBmdW5jdGlvbihlKSB7XG4gICAgICAgICAgICByZXR1cm4gZSA7IC8vIGNsZWFudXAoZSk7XG4gICAgICAgICAgfSxcbiAgICAgICAgICBwZWckRkFJTEVELFxuICAgICAgICAgIFwiL1wiLFxuICAgICAgICAgIHsgdHlwZTogXCJsaXRlcmFsXCIsIHZhbHVlOiBcIi9cIiwgZGVzY3JpcHRpb246IFwiXFxcIi9cXFwiXCIgfSxcbiAgICAgICAgICBmdW5jdGlvbihlKSB7cmV0dXJuIG11bHRpcGx5KHt2YWx1ZToxLCB1bml0czp7fX0sIFtbXCIvXCIsIGVdXSk7fSxcbiAgICAgICAgICBcIi5cIixcbiAgICAgICAgICB7IHR5cGU6IFwibGl0ZXJhbFwiLCB2YWx1ZTogXCIuXCIsIGRlc2NyaXB0aW9uOiBcIlxcXCIuXFxcIlwiIH0sXG4gICAgICAgICAgW10sXG4gICAgICAgICAgZnVuY3Rpb24odCwgbXMpIHtcbiAgICAgICAgICAgIHJldHVybiBtdWx0aXBseSh0LCBtcyk7XG4gICAgICAgICAgfSxcbiAgICAgICAgICBudWxsLFxuICAgICAgICAgIGZ1bmN0aW9uKGUsIGV4cCkge3JldHVybiBlLmFubiAmJiBleHA7fSxcbiAgICAgICAgICB2b2lkIDAsXG4gICAgICAgICAgZnVuY3Rpb24oZSwgZXhwKSB7XG4gICAgICAgICAgICByZXR1cm4gdG9wb3dlcihlLCBleHApO1xuICAgICAgICAgIH0sXG4gICAgICAgICAgZnVuY3Rpb24oZCkge1xuICAgICAgICAgICB2YXIgcmV0ID0ge1xuICAgICAgICAgICAgICB2YWx1ZTogZCxcbiAgICAgICAgICAgICAgdW5pdHM6IHt9XG4gICAgICAgICAgICB9O1xuICAgICAgICAgICAgcmV0dXJuIHJldDtcbiAgICAgICAgICB9LFxuICAgICAgICAgIGZ1bmN0aW9uKHUpIHtyZXR1cm4gdTt9LFxuICAgICAgICAgIFwiKFwiLFxuICAgICAgICAgIHsgdHlwZTogXCJsaXRlcmFsXCIsIHZhbHVlOiBcIihcIiwgZGVzY3JpcHRpb246IFwiXFxcIihcXFwiXCIgfSxcbiAgICAgICAgICBcIilcIixcbiAgICAgICAgICB7IHR5cGU6IFwibGl0ZXJhbFwiLCB2YWx1ZTogXCIpXCIsIGRlc2NyaXB0aW9uOiBcIlxcXCIpXFxcIlwiIH0sXG4gICAgICAgICAgZnVuY3Rpb24oZSkge3JldHVybiBlO30sXG4gICAgICAgICAgL15bK1xcLV0vLFxuICAgICAgICAgIHsgdHlwZTogXCJjbGFzc1wiLCB2YWx1ZTogXCJbK1xcXFwtXVwiLCBkZXNjcmlwdGlvbjogXCJbK1xcXFwtXVwiIH0sXG4gICAgICAgICAgZnVuY3Rpb24ocywgZCkge3JldHVybiAocz09XCItXCIpID8gKC0xKmQpIDogZH0sXG4gICAgICAgICAgZnVuY3Rpb24ocCwgYSkge3JldHVybihwICYmICFpc21ldHJpYyhhKSk7fSxcbiAgICAgICAgICBmdW5jdGlvbihwLCBhKSB7XG4gICAgICAgICAgICB2YXIgcmV0ID0gYTtcbiAgICAgICAgICAgIGlmIChwKSByZXQudmFsdWUgPSByZXQudmFsdWUgKiBwcmVmaXhlc1twXTtcbiAgICAgICAgICAgIHJldHVybiByZXQ7XG4gICAgICAgICAgfSxcbiAgICAgICAgICAvXlswLTldLyxcbiAgICAgICAgICB7IHR5cGU6IFwiY2xhc3NcIiwgdmFsdWU6IFwiWzAtOV1cIiwgZGVzY3JpcHRpb246IFwiWzAtOV1cIiB9LFxuICAgICAgICAgIFwiZVwiLFxuICAgICAgICAgIHsgdHlwZTogXCJsaXRlcmFsXCIsIHZhbHVlOiBcImVcIiwgZGVzY3JpcHRpb246IFwiXFxcImVcXFwiXCIgfSxcbiAgICAgICAgICBmdW5jdGlvbih2LCBlcHJlc2VudCwgZSkge3JldHVybiAoIWVwcmVzZW50ICYmICEhZSk7fSxcbiAgICAgICAgICBmdW5jdGlvbih2LCBlcHJlc2VudCwgZSkge1xuICAgICAgICAgICAgcmV0dXJuIHBhcnNlSW50KHYuam9pbihcIlwiKSkqTWF0aC5wb3coMTAsIGV8fDApO1xuICAgICAgICAgIH0sXG4gICAgICAgICAgXCJ7XCIsXG4gICAgICAgICAgeyB0eXBlOiBcImxpdGVyYWxcIiwgdmFsdWU6IFwie1wiLCBkZXNjcmlwdGlvbjogXCJcXFwie1xcXCJcIiB9LFxuICAgICAgICAgIC9eW159XS8sXG4gICAgICAgICAgeyB0eXBlOiBcImNsYXNzXCIsIHZhbHVlOiBcIltefV1cIiwgZGVzY3JpcHRpb246IFwiW159XVwiIH0sXG4gICAgICAgICAgXCJ9XCIsXG4gICAgICAgICAgeyB0eXBlOiBcImxpdGVyYWxcIiwgdmFsdWU6IFwifVwiLCBkZXNjcmlwdGlvbjogXCJcXFwifVxcXCJcIiB9LFxuICAgICAgICAgIGZ1bmN0aW9uKG0pIHtyZXR1cm4gL1teXFx4MDAtXFx4N0ZdLy50ZXN0KG0pO30sXG4gICAgICAgICAgZnVuY3Rpb24obSkgeyByZXR1cm4ge3ZhbHVlOiAxLCB1bml0czp7fSwgYW5uOiBtfSB9LFxuICAgICAgICAgIFwiW2FudGknWGEnVV1cIixcbiAgICAgICAgICB7IHR5cGU6IFwibGl0ZXJhbFwiLCB2YWx1ZTogXCJbYW50aSdYYSdVXVwiLCBkZXNjcmlwdGlvbjogXCJcXFwiW2FudGknWGEnVV1cXFwiXCIgfSxcbiAgICAgICAgICBmdW5jdGlvbih1KSB7cmV0dXJuIHt2YWx1ZTogMSwgdW5pdHM6IHtcIlthbnRpJ1hhJ1VdXCI6IDF9fTt9LFxuICAgICAgICAgIFwiW0FtYidhJzEnVV1cIixcbiAgICAgICAgICB7IHR5cGU6IFwibGl0ZXJhbFwiLCB2YWx1ZTogXCJbQW1iJ2EnMSdVXVwiLCBkZXNjcmlwdGlvbjogXCJcXFwiW0FtYidhJzEnVV1cXFwiXCIgfSxcbiAgICAgICAgICBmdW5jdGlvbih1KSB7cmV0dXJuIHt2YWx1ZTogMSwgdW5pdHM6IHtcIltBbWInYScxJ1VdXCI6IDF9fTt9LFxuICAgICAgICAgIFwiW3N0b25lX2F2XVwiLFxuICAgICAgICAgIHsgdHlwZTogXCJsaXRlcmFsXCIsIHZhbHVlOiBcIltzdG9uZV9hdl1cIiwgZGVzY3JpcHRpb246IFwiXFxcIltzdG9uZV9hdl1cXFwiXCIgfSxcbiAgICAgICAgICBmdW5jdGlvbih1KSB7cmV0dXJuIHt2YWx1ZTogMSwgdW5pdHM6IHtcIltzdG9uZV9hdl1cIjogMX19O30sXG4gICAgICAgICAgXCJbaW5faSdIMk9dXCIsXG4gICAgICAgICAgeyB0eXBlOiBcImxpdGVyYWxcIiwgdmFsdWU6IFwiW2luX2knSDJPXVwiLCBkZXNjcmlwdGlvbjogXCJcXFwiW2luX2knSDJPXVxcXCJcIiB9LFxuICAgICAgICAgIGZ1bmN0aW9uKHUpIHtyZXR1cm4ge3ZhbHVlOiAxLCB1bml0czoge1wiW2luX2knSDJPXVwiOiAxfX07fSxcbiAgICAgICAgICBcIltzdG9uX2F2XVwiLFxuICAgICAgICAgIHsgdHlwZTogXCJsaXRlcmFsXCIsIHZhbHVlOiBcIltzdG9uX2F2XVwiLCBkZXNjcmlwdGlvbjogXCJcXFwiW3N0b25fYXZdXFxcIlwiIH0sXG4gICAgICAgICAgZnVuY3Rpb24odSkge3JldHVybiB7dmFsdWU6IDEsIHVuaXRzOiB7XCJbc3Rvbl9hdl1cIjogMX19O30sXG4gICAgICAgICAgXCJbVENJRF81MF1cIixcbiAgICAgICAgICB7IHR5cGU6IFwibGl0ZXJhbFwiLCB2YWx1ZTogXCJbVENJRF81MF1cIiwgZGVzY3JpcHRpb246IFwiXFxcIltUQ0lEXzUwXVxcXCJcIiB9LFxuICAgICAgICAgIGZ1bmN0aW9uKHUpIHtyZXR1cm4ge3ZhbHVlOiAxLCB1bml0czoge1wiW1RDSURfNTBdXCI6IDF9fTt9LFxuICAgICAgICAgIFwiW0NDSURfNTBdXCIsXG4gICAgICAgICAgeyB0eXBlOiBcImxpdGVyYWxcIiwgdmFsdWU6IFwiW0NDSURfNTBdXCIsIGRlc2NyaXB0aW9uOiBcIlxcXCJbQ0NJRF81MF1cXFwiXCIgfSxcbiAgICAgICAgICBmdW5jdGlvbih1KSB7cmV0dXJuIHt2YWx1ZTogMSwgdW5pdHM6IHtcIltDQ0lEXzUwXVwiOiAxfX07fSxcbiAgICAgICAgICBcIltzY3d0X2F2XVwiLFxuICAgICAgICAgIHsgdHlwZTogXCJsaXRlcmFsXCIsIHZhbHVlOiBcIltzY3d0X2F2XVwiLCBkZXNjcmlwdGlvbjogXCJcXFwiW3Njd3RfYXZdXFxcIlwiIH0sXG4gICAgICAgICAgZnVuY3Rpb24odSkge3JldHVybiB7dmFsdWU6IDEsIHVuaXRzOiB7XCJbc2N3dF9hdl1cIjogMX19O30sXG4gICAgICAgICAgXCJbbGN3dF9hdl1cIixcbiAgICAgICAgICB7IHR5cGU6IFwibGl0ZXJhbFwiLCB2YWx1ZTogXCJbbGN3dF9hdl1cIiwgZGVzY3JpcHRpb246IFwiXFxcIltsY3d0X2F2XVxcXCJcIiB9LFxuICAgICAgICAgIGZ1bmN0aW9uKHUpIHtyZXR1cm4ge3ZhbHVlOiAxLCB1bml0czoge1wiW2xjd3RfYXZdXCI6IDF9fTt9LFxuICAgICAgICAgIFwiW2x0b25fYXZdXCIsXG4gICAgICAgICAgeyB0eXBlOiBcImxpdGVyYWxcIiwgdmFsdWU6IFwiW2x0b25fYXZdXCIsIGRlc2NyaXB0aW9uOiBcIlxcXCJbbHRvbl9hdl1cXFwiXCIgfSxcbiAgICAgICAgICBmdW5jdGlvbih1KSB7cmV0dXJuIHt2YWx1ZTogMSwgdW5pdHM6IHtcIltsdG9uX2F2XVwiOiAxfX07fSxcbiAgICAgICAgICBcIltpbl9pJ0hnXVwiLFxuICAgICAgICAgIHsgdHlwZTogXCJsaXRlcmFsXCIsIHZhbHVlOiBcIltpbl9pJ0hnXVwiLCBkZXNjcmlwdGlvbjogXCJcXFwiW2luX2knSGddXFxcIlwiIH0sXG4gICAgICAgICAgZnVuY3Rpb24odSkge3JldHVybiB7dmFsdWU6IDEsIHVuaXRzOiB7XCJbaW5faSdIZ11cIjogMX19O30sXG4gICAgICAgICAgXCJbdGJzX3VzXVwiLFxuICAgICAgICAgIHsgdHlwZTogXCJsaXRlcmFsXCIsIHZhbHVlOiBcIlt0YnNfdXNdXCIsIGRlc2NyaXB0aW9uOiBcIlxcXCJbdGJzX3VzXVxcXCJcIiB9LFxuICAgICAgICAgIGZ1bmN0aW9uKHUpIHtyZXR1cm4ge3ZhbHVlOiAxLCB1bml0czoge1wiW3Ric191c11cIjogMX19O30sXG4gICAgICAgICAgXCJbZHB0X3VzXVwiLFxuICAgICAgICAgIHsgdHlwZTogXCJsaXRlcmFsXCIsIHZhbHVlOiBcIltkcHRfdXNdXCIsIGRlc2NyaXB0aW9uOiBcIlxcXCJbZHB0X3VzXVxcXCJcIiB9LFxuICAgICAgICAgIGZ1bmN0aW9uKHUpIHtyZXR1cm4ge3ZhbHVlOiAxLCB1bml0czoge1wiW2RwdF91c11cIjogMX19O30sXG4gICAgICAgICAgXCJbYmRzaydVXVwiLFxuICAgICAgICAgIHsgdHlwZTogXCJsaXRlcmFsXCIsIHZhbHVlOiBcIltiZHNrJ1VdXCIsIGRlc2NyaXB0aW9uOiBcIlxcXCJbYmRzaydVXVxcXCJcIiB9LFxuICAgICAgICAgIGZ1bmN0aW9uKHUpIHtyZXR1cm4ge3ZhbHVlOiAxLCB1bml0czoge1wiW2Jkc2snVV1cIjogMX19O30sXG4gICAgICAgICAgXCJbc21neSdVXVwiLFxuICAgICAgICAgIHsgdHlwZTogXCJsaXRlcmFsXCIsIHZhbHVlOiBcIltzbWd5J1VdXCIsIGRlc2NyaXB0aW9uOiBcIlxcXCJbc21neSdVXVxcXCJcIiB9LFxuICAgICAgICAgIGZ1bmN0aW9uKHUpIHtyZXR1cm4ge3ZhbHVlOiAxLCB1bml0czoge1wiW3NtZ3knVV1cIjogMX19O30sXG4gICAgICAgICAgXCJbZHF0X3VzXVwiLFxuICAgICAgICAgIHsgdHlwZTogXCJsaXRlcmFsXCIsIHZhbHVlOiBcIltkcXRfdXNdXCIsIGRlc2NyaXB0aW9uOiBcIlxcXCJbZHF0X3VzXVxcXCJcIiB9LFxuICAgICAgICAgIGZ1bmN0aW9uKHUpIHtyZXR1cm4ge3ZhbHVlOiAxLCB1bml0czoge1wiW2RxdF91c11cIjogMX19O30sXG4gICAgICAgICAgXCJbdG9kZCdVXVwiLFxuICAgICAgICAgIHsgdHlwZTogXCJsaXRlcmFsXCIsIHZhbHVlOiBcIlt0b2RkJ1VdXCIsIGRlc2NyaXB0aW9uOiBcIlxcXCJbdG9kZCdVXVxcXCJcIiB9LFxuICAgICAgICAgIGZ1bmN0aW9uKHUpIHtyZXR1cm4ge3ZhbHVlOiAxLCB1bml0czoge1wiW3RvZGQnVV1cIjogMX19O30sXG4gICAgICAgICAgXCJbRCdhZydVXVwiLFxuICAgICAgICAgIHsgdHlwZTogXCJsaXRlcmFsXCIsIHZhbHVlOiBcIltEJ2FnJ1VdXCIsIGRlc2NyaXB0aW9uOiBcIlxcXCJbRCdhZydVXVxcXCJcIiB9LFxuICAgICAgICAgIGZ1bmN0aW9uKHUpIHtyZXR1cm4ge3ZhbHVlOiAxLCB1bml0czoge1wiW0QnYWcnVV1cIjogMX19O30sXG4gICAgICAgICAgXCJbYmV0aCdVXVwiLFxuICAgICAgICAgIHsgdHlwZTogXCJsaXRlcmFsXCIsIHZhbHVlOiBcIltiZXRoJ1VdXCIsIGRlc2NyaXB0aW9uOiBcIlxcXCJbYmV0aCdVXVxcXCJcIiB9LFxuICAgICAgICAgIGZ1bmN0aW9uKHUpIHtyZXR1cm4ge3ZhbHVlOiAxLCB1bml0czoge1wiW2JldGgnVV1cIjogMX19O30sXG4gICAgICAgICAgXCJbZ2FsX3dpXVwiLFxuICAgICAgICAgIHsgdHlwZTogXCJsaXRlcmFsXCIsIHZhbHVlOiBcIltnYWxfd2ldXCIsIGRlc2NyaXB0aW9uOiBcIlxcXCJbZ2FsX3dpXVxcXCJcIiB9LFxuICAgICAgICAgIGZ1bmN0aW9uKHUpIHtyZXR1cm4ge3ZhbHVlOiAxLCB1bml0czoge1wiW2dhbF93aV1cIjogMX19O30sXG4gICAgICAgICAgXCJbY3JkX3VzXVwiLFxuICAgICAgICAgIHsgdHlwZTogXCJsaXRlcmFsXCIsIHZhbHVlOiBcIltjcmRfdXNdXCIsIGRlc2NyaXB0aW9uOiBcIlxcXCJbY3JkX3VzXVxcXCJcIiB9LFxuICAgICAgICAgIGZ1bmN0aW9uKHUpIHtyZXR1cm4ge3ZhbHVlOiAxLCB1bml0czoge1wiW2NyZF91c11cIjogMX19O30sXG4gICAgICAgICAgXCJbbWluX3VzXVwiLFxuICAgICAgICAgIHsgdHlwZTogXCJsaXRlcmFsXCIsIHZhbHVlOiBcIlttaW5fdXNdXCIsIGRlc2NyaXB0aW9uOiBcIlxcXCJbbWluX3VzXVxcXCJcIiB9LFxuICAgICAgICAgIGZ1bmN0aW9uKHUpIHtyZXR1cm4ge3ZhbHVlOiAxLCB1bml0czoge1wiW21pbl91c11cIjogMX19O30sXG4gICAgICAgICAgXCJbZmRyX3VzXVwiLFxuICAgICAgICAgIHsgdHlwZTogXCJsaXRlcmFsXCIsIHZhbHVlOiBcIltmZHJfdXNdXCIsIGRlc2NyaXB0aW9uOiBcIlxcXCJbZmRyX3VzXVxcXCJcIiB9LFxuICAgICAgICAgIGZ1bmN0aW9uKHUpIHtyZXR1cm4ge3ZhbHVlOiAxLCB1bml0czoge1wiW2Zkcl91c11cIjogMX19O30sXG4gICAgICAgICAgXCJbZm96X3VzXVwiLFxuICAgICAgICAgIHsgdHlwZTogXCJsaXRlcmFsXCIsIHZhbHVlOiBcIltmb3pfdXNdXCIsIGRlc2NyaXB0aW9uOiBcIlxcXCJbZm96X3VzXVxcXCJcIiB9LFxuICAgICAgICAgIGZ1bmN0aW9uKHUpIHtyZXR1cm4ge3ZhbHVlOiAxLCB1bml0czoge1wiW2Zvel91c11cIjogMX19O30sXG4gICAgICAgICAgXCJbZ2lsX3VzXVwiLFxuICAgICAgICAgIHsgdHlwZTogXCJsaXRlcmFsXCIsIHZhbHVlOiBcIltnaWxfdXNdXCIsIGRlc2NyaXB0aW9uOiBcIlxcXCJbZ2lsX3VzXVxcXCJcIiB9LFxuICAgICAgICAgIGZ1bmN0aW9uKHUpIHtyZXR1cm4ge3ZhbHVlOiAxLCB1bml0czoge1wiW2dpbF91c11cIjogMX19O30sXG4gICAgICAgICAgXCJbYmJsX3VzXVwiLFxuICAgICAgICAgIHsgdHlwZTogXCJsaXRlcmFsXCIsIHZhbHVlOiBcIltiYmxfdXNdXCIsIGRlc2NyaXB0aW9uOiBcIlxcXCJbYmJsX3VzXVxcXCJcIiB9LFxuICAgICAgICAgIGZ1bmN0aW9uKHUpIHtyZXR1cm4ge3ZhbHVlOiAxLCB1bml0czoge1wiW2JibF91c11cIjogMX19O30sXG4gICAgICAgICAgXCJbZ2FsX3VzXVwiLFxuICAgICAgICAgIHsgdHlwZTogXCJsaXRlcmFsXCIsIHZhbHVlOiBcIltnYWxfdXNdXCIsIGRlc2NyaXB0aW9uOiBcIlxcXCJbZ2FsX3VzXVxcXCJcIiB9LFxuICAgICAgICAgIGZ1bmN0aW9uKHUpIHtyZXR1cm4ge3ZhbHVlOiAxLCB1bml0czoge1wiW2dhbF91c11cIjogMX19O30sXG4gICAgICAgICAgXCJbYWNyX2JyXVwiLFxuICAgICAgICAgIHsgdHlwZTogXCJsaXRlcmFsXCIsIHZhbHVlOiBcIlthY3JfYnJdXCIsIGRlc2NyaXB0aW9uOiBcIlxcXCJbYWNyX2JyXVxcXCJcIiB9LFxuICAgICAgICAgIGZ1bmN0aW9uKHUpIHtyZXR1cm4ge3ZhbHVlOiAxLCB1bml0czoge1wiW2Fjcl9icl1cIjogMX19O30sXG4gICAgICAgICAgXCJbbm1pX2JyXVwiLFxuICAgICAgICAgIHsgdHlwZTogXCJsaXRlcmFsXCIsIHZhbHVlOiBcIltubWlfYnJdXCIsIGRlc2NyaXB0aW9uOiBcIlxcXCJbbm1pX2JyXVxcXCJcIiB9LFxuICAgICAgICAgIGZ1bmN0aW9uKHUpIHtyZXR1cm4ge3ZhbHVlOiAxLCB1bml0czoge1wiW25taV9icl1cIjogMX19O30sXG4gICAgICAgICAgXCJbZnRoX2JyXVwiLFxuICAgICAgICAgIHsgdHlwZTogXCJsaXRlcmFsXCIsIHZhbHVlOiBcIltmdGhfYnJdXCIsIGRlc2NyaXB0aW9uOiBcIlxcXCJbZnRoX2JyXVxcXCJcIiB9LFxuICAgICAgICAgIGZ1bmN0aW9uKHUpIHtyZXR1cm4ge3ZhbHVlOiAxLCB1bml0czoge1wiW2Z0aF9icl1cIjogMX19O30sXG4gICAgICAgICAgXCJbbWlsX3VzXVwiLFxuICAgICAgICAgIHsgdHlwZTogXCJsaXRlcmFsXCIsIHZhbHVlOiBcIlttaWxfdXNdXCIsIGRlc2NyaXB0aW9uOiBcIlxcXCJbbWlsX3VzXVxcXCJcIiB9LFxuICAgICAgICAgIGZ1bmN0aW9uKHUpIHtyZXR1cm4ge3ZhbHVlOiAxLCB1bml0czoge1wiW21pbF91c11cIjogMX19O30sXG4gICAgICAgICAgXCJbc21pX3VzXVwiLFxuICAgICAgICAgIHsgdHlwZTogXCJsaXRlcmFsXCIsIHZhbHVlOiBcIltzbWlfdXNdXCIsIGRlc2NyaXB0aW9uOiBcIlxcXCJbc21pX3VzXVxcXCJcIiB9LFxuICAgICAgICAgIGZ1bmN0aW9uKHUpIHtyZXR1cm4ge3ZhbHVlOiAxLCB1bml0czoge1wiW3NtaV91c11cIjogMX19O30sXG4gICAgICAgICAgXCJbYWNyX3VzXVwiLFxuICAgICAgICAgIHsgdHlwZTogXCJsaXRlcmFsXCIsIHZhbHVlOiBcIlthY3JfdXNdXCIsIGRlc2NyaXB0aW9uOiBcIlxcXCJbYWNyX3VzXVxcXCJcIiB9LFxuICAgICAgICAgIGZ1bmN0aW9uKHUpIHtyZXR1cm4ge3ZhbHVlOiAxLCB1bml0czoge1wiW2Fjcl91c11cIjogMX19O30sXG4gICAgICAgICAgXCJbZnVyX3VzXVwiLFxuICAgICAgICAgIHsgdHlwZTogXCJsaXRlcmFsXCIsIHZhbHVlOiBcIltmdXJfdXNdXCIsIGRlc2NyaXB0aW9uOiBcIlxcXCJbZnVyX3VzXVxcXCJcIiB9LFxuICAgICAgICAgIGZ1bmN0aW9uKHUpIHtyZXR1cm4ge3ZhbHVlOiAxLCB1bml0czoge1wiW2Z1cl91c11cIjogMX19O30sXG4gICAgICAgICAgXCJbZnRoX3VzXVwiLFxuICAgICAgICAgIHsgdHlwZTogXCJsaXRlcmFsXCIsIHZhbHVlOiBcIltmdGhfdXNdXCIsIGRlc2NyaXB0aW9uOiBcIlxcXCJbZnRoX3VzXVxcXCJcIiB9LFxuICAgICAgICAgIGZ1bmN0aW9uKHUpIHtyZXR1cm4ge3ZhbHVlOiAxLCB1bml0czoge1wiW2Z0aF91c11cIjogMX19O30sXG4gICAgICAgICAgXCJbcmxrX3VzXVwiLFxuICAgICAgICAgIHsgdHlwZTogXCJsaXRlcmFsXCIsIHZhbHVlOiBcIltybGtfdXNdXCIsIGRlc2NyaXB0aW9uOiBcIlxcXCJbcmxrX3VzXVxcXCJcIiB9LFxuICAgICAgICAgIGZ1bmN0aW9uKHUpIHtyZXR1cm4ge3ZhbHVlOiAxLCB1bml0czoge1wiW3Jsa191c11cIjogMX19O30sXG4gICAgICAgICAgXCJbcmNoX3VzXVwiLFxuICAgICAgICAgIHsgdHlwZTogXCJsaXRlcmFsXCIsIHZhbHVlOiBcIltyY2hfdXNdXCIsIGRlc2NyaXB0aW9uOiBcIlxcXCJbcmNoX3VzXVxcXCJcIiB9LFxuICAgICAgICAgIGZ1bmN0aW9uKHUpIHtyZXR1cm4ge3ZhbHVlOiAxLCB1bml0czoge1wiW3JjaF91c11cIjogMX19O30sXG4gICAgICAgICAgXCJbbGJmX2F2XVwiLFxuICAgICAgICAgIHsgdHlwZTogXCJsaXRlcmFsXCIsIHZhbHVlOiBcIltsYmZfYXZdXCIsIGRlc2NyaXB0aW9uOiBcIlxcXCJbbGJmX2F2XVxcXCJcIiB9LFxuICAgICAgICAgIGZ1bmN0aW9uKHUpIHtyZXR1cm4ge3ZhbHVlOiAxLCB1bml0czoge1wiW2xiZl9hdl1cIjogMX19O30sXG4gICAgICAgICAgXCJbaG5zZidVXVwiLFxuICAgICAgICAgIHsgdHlwZTogXCJsaXRlcmFsXCIsIHZhbHVlOiBcIltobnNmJ1VdXCIsIGRlc2NyaXB0aW9uOiBcIlxcXCJbaG5zZidVXVxcXCJcIiB9LFxuICAgICAgICAgIGZ1bmN0aW9uKHUpIHtyZXR1cm4ge3ZhbHVlOiAxLCB1bml0czoge1wiW2huc2YnVV1cIjogMX19O30sXG4gICAgICAgICAgXCJbbWVzaF9pXVwiLFxuICAgICAgICAgIHsgdHlwZTogXCJsaXRlcmFsXCIsIHZhbHVlOiBcIlttZXNoX2ldXCIsIGRlc2NyaXB0aW9uOiBcIlxcXCJbbWVzaF9pXVxcXCJcIiB9LFxuICAgICAgICAgIGZ1bmN0aW9uKHUpIHtyZXR1cm4ge3ZhbHVlOiAxLCB1bml0czoge1wiW21lc2hfaV1cIjogMX19O30sXG4gICAgICAgICAgXCIlW3Nsb3BlXVwiLFxuICAgICAgICAgIHsgdHlwZTogXCJsaXRlcmFsXCIsIHZhbHVlOiBcIiVbc2xvcGVdXCIsIGRlc2NyaXB0aW9uOiBcIlxcXCIlW3Nsb3BlXVxcXCJcIiB9LFxuICAgICAgICAgIGZ1bmN0aW9uKHUpIHtyZXR1cm4ge3ZhbHVlOiAxLCB1bml0czoge1wiJVtzbG9wZV1cIjogMX19O30sXG4gICAgICAgICAgXCJbcCdkaW9wXVwiLFxuICAgICAgICAgIHsgdHlwZTogXCJsaXRlcmFsXCIsIHZhbHVlOiBcIltwJ2Rpb3BdXCIsIGRlc2NyaXB0aW9uOiBcIlxcXCJbcCdkaW9wXVxcXCJcIiB9LFxuICAgICAgICAgIGZ1bmN0aW9uKHUpIHtyZXR1cm4ge3ZhbHVlOiAxLCB1bml0czoge1wiW3AnZGlvcF1cIjogMX19O30sXG4gICAgICAgICAgXCJbZ2lsX2JyXVwiLFxuICAgICAgICAgIHsgdHlwZTogXCJsaXRlcmFsXCIsIHZhbHVlOiBcIltnaWxfYnJdXCIsIGRlc2NyaXB0aW9uOiBcIlxcXCJbZ2lsX2JyXVxcXCJcIiB9LFxuICAgICAgICAgIGZ1bmN0aW9uKHUpIHtyZXR1cm4ge3ZhbHVlOiAxLCB1bml0czoge1wiW2dpbF9icl1cIjogMX19O30sXG4gICAgICAgICAgXCJbd29vZCdVXVwiLFxuICAgICAgICAgIHsgdHlwZTogXCJsaXRlcmFsXCIsIHZhbHVlOiBcIlt3b29kJ1VdXCIsIGRlc2NyaXB0aW9uOiBcIlxcXCJbd29vZCdVXVxcXCJcIiB9LFxuICAgICAgICAgIGZ1bmN0aW9uKHUpIHtyZXR1cm4ge3ZhbHVlOiAxLCB1bml0czoge1wiW3dvb2QnVV1cIjogMX19O30sXG4gICAgICAgICAgXCJjYWxfWzE1XVwiLFxuICAgICAgICAgIHsgdHlwZTogXCJsaXRlcmFsXCIsIHZhbHVlOiBcImNhbF9bMTVdXCIsIGRlc2NyaXB0aW9uOiBcIlxcXCJjYWxfWzE1XVxcXCJcIiB9LFxuICAgICAgICAgIGZ1bmN0aW9uKHUpIHtyZXR1cm4ge3ZhbHVlOiAxLCB1bml0czoge1wiY2FsX1sxNV1cIjogMX19O30sXG4gICAgICAgICAgXCJjYWxfWzIwXVwiLFxuICAgICAgICAgIHsgdHlwZTogXCJsaXRlcmFsXCIsIHZhbHVlOiBcImNhbF9bMjBdXCIsIGRlc2NyaXB0aW9uOiBcIlxcXCJjYWxfWzIwXVxcXCJcIiB9LFxuICAgICAgICAgIGZ1bmN0aW9uKHUpIHtyZXR1cm4ge3ZhbHVlOiAxLCB1bml0czoge1wiY2FsX1syMF1cIjogMX19O30sXG4gICAgICAgICAgXCJbZm96X2JyXVwiLFxuICAgICAgICAgIHsgdHlwZTogXCJsaXRlcmFsXCIsIHZhbHVlOiBcIltmb3pfYnJdXCIsIGRlc2NyaXB0aW9uOiBcIlxcXCJbZm96X2JyXVxcXCJcIiB9LFxuICAgICAgICAgIGZ1bmN0aW9uKHUpIHtyZXR1cm4ge3ZhbHVlOiAxLCB1bml0czoge1wiW2Zvel9icl1cIjogMX19O30sXG4gICAgICAgICAgXCJbZmRyX2JyXVwiLFxuICAgICAgICAgIHsgdHlwZTogXCJsaXRlcmFsXCIsIHZhbHVlOiBcIltmZHJfYnJdXCIsIGRlc2NyaXB0aW9uOiBcIlxcXCJbZmRyX2JyXVxcXCJcIiB9LFxuICAgICAgICAgIGZ1bmN0aW9uKHUpIHtyZXR1cm4ge3ZhbHVlOiAxLCB1bml0czoge1wiW2Zkcl9icl1cIjogMX19O30sXG4gICAgICAgICAgXCJbc3JkX3VzXVwiLFxuICAgICAgICAgIHsgdHlwZTogXCJsaXRlcmFsXCIsIHZhbHVlOiBcIltzcmRfdXNdXCIsIGRlc2NyaXB0aW9uOiBcIlxcXCJbc3JkX3VzXVxcXCJcIiB9LFxuICAgICAgICAgIGZ1bmN0aW9uKHUpIHtyZXR1cm4ge3ZhbHVlOiAxLCB1bml0czoge1wiW3NyZF91c11cIjogMX19O30sXG4gICAgICAgICAgXCJbbWluX2JyXVwiLFxuICAgICAgICAgIHsgdHlwZTogXCJsaXRlcmFsXCIsIHZhbHVlOiBcIlttaW5fYnJdXCIsIGRlc2NyaXB0aW9uOiBcIlxcXCJbbWluX2JyXVxcXCJcIiB9LFxuICAgICAgICAgIGZ1bmN0aW9uKHUpIHtyZXR1cm4ge3ZhbHVlOiAxLCB1bml0czoge1wiW21pbl9icl1cIjogMX19O30sXG4gICAgICAgICAgXCJbRUlEXzUwXVwiLFxuICAgICAgICAgIHsgdHlwZTogXCJsaXRlcmFsXCIsIHZhbHVlOiBcIltFSURfNTBdXCIsIGRlc2NyaXB0aW9uOiBcIlxcXCJbRUlEXzUwXVxcXCJcIiB9LFxuICAgICAgICAgIGZ1bmN0aW9uKHUpIHtyZXR1cm4ge3ZhbHVlOiAxLCB1bml0czoge1wiW0VJRF81MF1cIjogMX19O30sXG4gICAgICAgICAgXCJbQnR1X3RoXVwiLFxuICAgICAgICAgIHsgdHlwZTogXCJsaXRlcmFsXCIsIHZhbHVlOiBcIltCdHVfdGhdXCIsIGRlc2NyaXB0aW9uOiBcIlxcXCJbQnR1X3RoXVxcXCJcIiB9LFxuICAgICAgICAgIGZ1bmN0aW9uKHUpIHtyZXR1cm4ge3ZhbHVlOiAxLCB1bml0czoge1wiW0J0dV90aF1cIjogMX19O30sXG4gICAgICAgICAgXCJbQnR1X0lUXVwiLFxuICAgICAgICAgIHsgdHlwZTogXCJsaXRlcmFsXCIsIHZhbHVlOiBcIltCdHVfSVRdXCIsIGRlc2NyaXB0aW9uOiBcIlxcXCJbQnR1X0lUXVxcXCJcIiB9LFxuICAgICAgICAgIGZ1bmN0aW9uKHUpIHtyZXR1cm4ge3ZhbHVlOiAxLCB1bml0czoge1wiW0J0dV9JVF1cIjogMX19O30sXG4gICAgICAgICAgXCJbY2FyX0F1XVwiLFxuICAgICAgICAgIHsgdHlwZTogXCJsaXRlcmFsXCIsIHZhbHVlOiBcIltjYXJfQXVdXCIsIGRlc2NyaXB0aW9uOiBcIlxcXCJbY2FyX0F1XVxcXCJcIiB9LFxuICAgICAgICAgIGZ1bmN0aW9uKHUpIHtyZXR1cm4ge3ZhbHVlOiAxLCB1bml0czoge1wiW2Nhcl9BdV1cIjogMX19O30sXG4gICAgICAgICAgXCJbQnR1XzYwXVwiLFxuICAgICAgICAgIHsgdHlwZTogXCJsaXRlcmFsXCIsIHZhbHVlOiBcIltCdHVfNjBdXCIsIGRlc2NyaXB0aW9uOiBcIlxcXCJbQnR1XzYwXVxcXCJcIiB9LFxuICAgICAgICAgIGZ1bmN0aW9uKHUpIHtyZXR1cm4ge3ZhbHVlOiAxLCB1bml0czoge1wiW0J0dV82MF1cIjogMX19O30sXG4gICAgICAgICAgXCJbQnR1XzU5XVwiLFxuICAgICAgICAgIHsgdHlwZTogXCJsaXRlcmFsXCIsIHZhbHVlOiBcIltCdHVfNTldXCIsIGRlc2NyaXB0aW9uOiBcIlxcXCJbQnR1XzU5XVxcXCJcIiB9LFxuICAgICAgICAgIGZ1bmN0aW9uKHUpIHtyZXR1cm4ge3ZhbHVlOiAxLCB1bml0czoge1wiW0J0dV81OV1cIjogMX19O30sXG4gICAgICAgICAgXCJbQnR1XzM5XVwiLFxuICAgICAgICAgIHsgdHlwZTogXCJsaXRlcmFsXCIsIHZhbHVlOiBcIltCdHVfMzldXCIsIGRlc2NyaXB0aW9uOiBcIlxcXCJbQnR1XzM5XVxcXCJcIiB9LFxuICAgICAgICAgIGZ1bmN0aW9uKHUpIHtyZXR1cm4ge3ZhbHVlOiAxLCB1bml0czoge1wiW0J0dV8zOV1cIjogMX19O30sXG4gICAgICAgICAgXCJbY3VwX3VzXVwiLFxuICAgICAgICAgIHsgdHlwZTogXCJsaXRlcmFsXCIsIHZhbHVlOiBcIltjdXBfdXNdXCIsIGRlc2NyaXB0aW9uOiBcIlxcXCJbY3VwX3VzXVxcXCJcIiB9LFxuICAgICAgICAgIGZ1bmN0aW9uKHUpIHtyZXR1cm4ge3ZhbHVlOiAxLCB1bml0czoge1wiW2N1cF91c11cIjogMX19O30sXG4gICAgICAgICAgXCJCWzEwLm5WXVwiLFxuICAgICAgICAgIHsgdHlwZTogXCJsaXRlcmFsXCIsIHZhbHVlOiBcIkJbMTAublZdXCIsIGRlc2NyaXB0aW9uOiBcIlxcXCJCWzEwLm5WXVxcXCJcIiB9LFxuICAgICAgICAgIGZ1bmN0aW9uKHUpIHtyZXR1cm4ge3ZhbHVlOiAxLCB1bml0czoge1wiQlsxMC5uVl1cIjogMX19O30sXG4gICAgICAgICAgXCJbdHNwX3VzXVwiLFxuICAgICAgICAgIHsgdHlwZTogXCJsaXRlcmFsXCIsIHZhbHVlOiBcIlt0c3BfdXNdXCIsIGRlc2NyaXB0aW9uOiBcIlxcXCJbdHNwX3VzXVxcXCJcIiB9LFxuICAgICAgICAgIGZ1bmN0aW9uKHUpIHtyZXR1cm4ge3ZhbHVlOiAxLCB1bml0czoge1wiW3RzcF91c11cIjogMX19O30sXG4gICAgICAgICAgXCJbbWNsZydVXVwiLFxuICAgICAgICAgIHsgdHlwZTogXCJsaXRlcmFsXCIsIHZhbHVlOiBcIlttY2xnJ1VdXCIsIGRlc2NyaXB0aW9uOiBcIlxcXCJbbWNsZydVXVxcXCJcIiB9LFxuICAgICAgICAgIGZ1bmN0aW9uKHUpIHtyZXR1cm4ge3ZhbHVlOiAxLCB1bml0czoge1wiW21jbGcnVV1cIjogMX19O30sXG4gICAgICAgICAgXCJbY2ljZXJvXVwiLFxuICAgICAgICAgIHsgdHlwZTogXCJsaXRlcmFsXCIsIHZhbHVlOiBcIltjaWNlcm9dXCIsIGRlc2NyaXB0aW9uOiBcIlxcXCJbY2ljZXJvXVxcXCJcIiB9LFxuICAgICAgICAgIGZ1bmN0aW9uKHUpIHtyZXR1cm4ge3ZhbHVlOiAxLCB1bml0czoge1wiW2NpY2Vyb11cIjogMX19O30sXG4gICAgICAgICAgXCJbcHd0X3RyXVwiLFxuICAgICAgICAgIHsgdHlwZTogXCJsaXRlcmFsXCIsIHZhbHVlOiBcIltwd3RfdHJdXCIsIGRlc2NyaXB0aW9uOiBcIlxcXCJbcHd0X3RyXVxcXCJcIiB9LFxuICAgICAgICAgIGZ1bmN0aW9uKHUpIHtyZXR1cm4ge3ZhbHVlOiAxLCB1bml0czoge1wiW3B3dF90cl1cIjogMX19O30sXG4gICAgICAgICAgXCJbcG50X3ByXVwiLFxuICAgICAgICAgIHsgdHlwZTogXCJsaXRlcmFsXCIsIHZhbHVlOiBcIltwbnRfcHJdXCIsIGRlc2NyaXB0aW9uOiBcIlxcXCJbcG50X3ByXVxcXCJcIiB9LFxuICAgICAgICAgIGZ1bmN0aW9uKHUpIHtyZXR1cm4ge3ZhbHVlOiAxLCB1bml0czoge1wiW3BudF9wcl1cIjogMX19O30sXG4gICAgICAgICAgXCJbcGNhX3ByXVwiLFxuICAgICAgICAgIHsgdHlwZTogXCJsaXRlcmFsXCIsIHZhbHVlOiBcIltwY2FfcHJdXCIsIGRlc2NyaXB0aW9uOiBcIlxcXCJbcGNhX3ByXVxcXCJcIiB9LFxuICAgICAgICAgIGZ1bmN0aW9uKHUpIHtyZXR1cm4ge3ZhbHVlOiAxLCB1bml0czoge1wiW3BjYV9wcl1cIjogMX19O30sXG4gICAgICAgICAgXCJbZ2FsX2JyXVwiLFxuICAgICAgICAgIHsgdHlwZTogXCJsaXRlcmFsXCIsIHZhbHVlOiBcIltnYWxfYnJdXCIsIGRlc2NyaXB0aW9uOiBcIlxcXCJbZ2FsX2JyXVxcXCJcIiB9LFxuICAgICAgICAgIGZ1bmN0aW9uKHUpIHtyZXR1cm4ge3ZhbHVlOiAxLCB1bml0czoge1wiW2dhbF9icl1cIjogMX19O30sXG4gICAgICAgICAgXCJbeWRfdXNdXCIsXG4gICAgICAgICAgeyB0eXBlOiBcImxpdGVyYWxcIiwgdmFsdWU6IFwiW3lkX3VzXVwiLCBkZXNjcmlwdGlvbjogXCJcXFwiW3lkX3VzXVxcXCJcIiB9LFxuICAgICAgICAgIGZ1bmN0aW9uKHUpIHtyZXR1cm4ge3ZhbHVlOiAxLCB1bml0czoge1wiW3lkX3VzXVwiOiAxfX07fSxcbiAgICAgICAgICBcIltsaWduZV1cIixcbiAgICAgICAgICB7IHR5cGU6IFwibGl0ZXJhbFwiLCB2YWx1ZTogXCJbbGlnbmVdXCIsIGRlc2NyaXB0aW9uOiBcIlxcXCJbbGlnbmVdXFxcIlwiIH0sXG4gICAgICAgICAgZnVuY3Rpb24odSkge3JldHVybiB7dmFsdWU6IDEsIHVuaXRzOiB7XCJbbGlnbmVdXCI6IDF9fTt9LFxuICAgICAgICAgIFwiW3Ric19tXVwiLFxuICAgICAgICAgIHsgdHlwZTogXCJsaXRlcmFsXCIsIHZhbHVlOiBcIlt0YnNfbV1cIiwgZGVzY3JpcHRpb246IFwiXFxcIlt0YnNfbV1cXFwiXCIgfSxcbiAgICAgICAgICBmdW5jdGlvbih1KSB7cmV0dXJuIHt2YWx1ZTogMSwgdW5pdHM6IHtcIlt0YnNfbV1cIjogMX19O30sXG4gICAgICAgICAgXCJbbGJfYXBdXCIsXG4gICAgICAgICAgeyB0eXBlOiBcImxpdGVyYWxcIiwgdmFsdWU6IFwiW2xiX2FwXVwiLCBkZXNjcmlwdGlvbjogXCJcXFwiW2xiX2FwXVxcXCJcIiB9LFxuICAgICAgICAgIGZ1bmN0aW9uKHUpIHtyZXR1cm4ge3ZhbHVlOiAxLCB1bml0czoge1wiW2xiX2FwXVwiOiAxfX07fSxcbiAgICAgICAgICBcIltvel9hcF1cIixcbiAgICAgICAgICB7IHR5cGU6IFwibGl0ZXJhbFwiLCB2YWx1ZTogXCJbb3pfYXBdXCIsIGRlc2NyaXB0aW9uOiBcIlxcXCJbb3pfYXBdXFxcIlwiIH0sXG4gICAgICAgICAgZnVuY3Rpb24odSkge3JldHVybiB7dmFsdWU6IDEsIHVuaXRzOiB7XCJbb3pfYXBdXCI6IDF9fTt9LFxuICAgICAgICAgIFwiW2RyX2FwXVwiLFxuICAgICAgICAgIHsgdHlwZTogXCJsaXRlcmFsXCIsIHZhbHVlOiBcIltkcl9hcF1cIiwgZGVzY3JpcHRpb246IFwiXFxcIltkcl9hcF1cXFwiXCIgfSxcbiAgICAgICAgICBmdW5jdGlvbih1KSB7cmV0dXJuIHt2YWx1ZTogMSwgdW5pdHM6IHtcIltkcl9hcF1cIjogMX19O30sXG4gICAgICAgICAgXCJbc2NfYXBdXCIsXG4gICAgICAgICAgeyB0eXBlOiBcImxpdGVyYWxcIiwgdmFsdWU6IFwiW3NjX2FwXVwiLCBkZXNjcmlwdGlvbjogXCJcXFwiW3NjX2FwXVxcXCJcIiB9LFxuICAgICAgICAgIGZ1bmN0aW9uKHUpIHtyZXR1cm4ge3ZhbHVlOiAxLCB1bml0czoge1wiW3NjX2FwXVwiOiAxfX07fSxcbiAgICAgICAgICBcIlt0c3BfbV1cIixcbiAgICAgICAgICB7IHR5cGU6IFwibGl0ZXJhbFwiLCB2YWx1ZTogXCJbdHNwX21dXCIsIGRlc2NyaXB0aW9uOiBcIlxcXCJbdHNwX21dXFxcIlwiIH0sXG4gICAgICAgICAgZnVuY3Rpb24odSkge3JldHVybiB7dmFsdWU6IDEsIHVuaXRzOiB7XCJbdHNwX21dXCI6IDF9fTt9LFxuICAgICAgICAgIFwiW2N1cF9tXVwiLFxuICAgICAgICAgIHsgdHlwZTogXCJsaXRlcmFsXCIsIHZhbHVlOiBcIltjdXBfbV1cIiwgZGVzY3JpcHRpb246IFwiXFxcIltjdXBfbV1cXFwiXCIgfSxcbiAgICAgICAgICBmdW5jdGlvbih1KSB7cmV0dXJuIHt2YWx1ZTogMSwgdW5pdHM6IHtcIltjdXBfbV1cIjogMX19O30sXG4gICAgICAgICAgXCJbbGJfdHJdXCIsXG4gICAgICAgICAgeyB0eXBlOiBcImxpdGVyYWxcIiwgdmFsdWU6IFwiW2xiX3RyXVwiLCBkZXNjcmlwdGlvbjogXCJcXFwiW2xiX3RyXVxcXCJcIiB9LFxuICAgICAgICAgIGZ1bmN0aW9uKHUpIHtyZXR1cm4ge3ZhbHVlOiAxLCB1bml0czoge1wiW2xiX3RyXVwiOiAxfX07fSxcbiAgICAgICAgICBcIltvel90cl1cIixcbiAgICAgICAgICB7IHR5cGU6IFwibGl0ZXJhbFwiLCB2YWx1ZTogXCJbb3pfdHJdXCIsIGRlc2NyaXB0aW9uOiBcIlxcXCJbb3pfdHJdXFxcIlwiIH0sXG4gICAgICAgICAgZnVuY3Rpb24odSkge3JldHVybiB7dmFsdWU6IDEsIHVuaXRzOiB7XCJbb3pfdHJdXCI6IDF9fTt9LFxuICAgICAgICAgIFwiW2RpZG90XVwiLFxuICAgICAgICAgIHsgdHlwZTogXCJsaXRlcmFsXCIsIHZhbHVlOiBcIltkaWRvdF1cIiwgZGVzY3JpcHRpb246IFwiXFxcIltkaWRvdF1cXFwiXCIgfSxcbiAgICAgICAgICBmdW5jdGlvbih1KSB7cmV0dXJuIHt2YWx1ZTogMSwgdW5pdHM6IHtcIltkaWRvdF1cIjogMX19O30sXG4gICAgICAgICAgXCJbZm96X21dXCIsXG4gICAgICAgICAgeyB0eXBlOiBcImxpdGVyYWxcIiwgdmFsdWU6IFwiW2Zvel9tXVwiLCBkZXNjcmlwdGlvbjogXCJcXFwiW2Zvel9tXVxcXCJcIiB9LFxuICAgICAgICAgIGZ1bmN0aW9uKHUpIHtyZXR1cm4ge3ZhbHVlOiAxLCB1bml0czoge1wiW2Zvel9tXVwiOiAxfX07fSxcbiAgICAgICAgICBcIltjYXJfbV1cIixcbiAgICAgICAgICB7IHR5cGU6IFwibGl0ZXJhbFwiLCB2YWx1ZTogXCJbY2FyX21dXCIsIGRlc2NyaXB0aW9uOiBcIlxcXCJbY2FyX21dXFxcIlwiIH0sXG4gICAgICAgICAgZnVuY3Rpb24odSkge3JldHVybiB7dmFsdWU6IDEsIHVuaXRzOiB7XCJbY2FyX21dXCI6IDF9fTt9LFxuICAgICAgICAgIFwiW3Ntb290XVwiLFxuICAgICAgICAgIHsgdHlwZTogXCJsaXRlcmFsXCIsIHZhbHVlOiBcIltzbW9vdF1cIiwgZGVzY3JpcHRpb246IFwiXFxcIltzbW9vdF1cXFwiXCIgfSxcbiAgICAgICAgICBmdW5jdGlvbih1KSB7cmV0dXJuIHt2YWx1ZTogMSwgdW5pdHM6IHtcIltzbW9vdF1cIjogMX19O30sXG4gICAgICAgICAgXCJba25rJ1VdXCIsXG4gICAgICAgICAgeyB0eXBlOiBcImxpdGVyYWxcIiwgdmFsdWU6IFwiW2tuaydVXVwiLCBkZXNjcmlwdGlvbjogXCJcXFwiW2tuaydVXVxcXCJcIiB9LFxuICAgICAgICAgIGZ1bmN0aW9uKHUpIHtyZXR1cm4ge3ZhbHVlOiAxLCB1bml0czoge1wiW2tuaydVXVwiOiAxfX07fSxcbiAgICAgICAgICBcIltCdHVfbV1cIixcbiAgICAgICAgICB7IHR5cGU6IFwibGl0ZXJhbFwiLCB2YWx1ZTogXCJbQnR1X21dXCIsIGRlc2NyaXB0aW9uOiBcIlxcXCJbQnR1X21dXFxcIlwiIH0sXG4gICAgICAgICAgZnVuY3Rpb24odSkge3JldHVybiB7dmFsdWU6IDEsIHVuaXRzOiB7XCJbQnR1X21dXCI6IDF9fTt9LFxuICAgICAgICAgIFwiW2RyX2F2XVwiLFxuICAgICAgICAgIHsgdHlwZTogXCJsaXRlcmFsXCIsIHZhbHVlOiBcIltkcl9hdl1cIiwgZGVzY3JpcHRpb246IFwiXFxcIltkcl9hdl1cXFwiXCIgfSxcbiAgICAgICAgICBmdW5jdGlvbih1KSB7cmV0dXJuIHt2YWx1ZTogMSwgdW5pdHM6IHtcIltkcl9hdl1cIjogMX19O30sXG4gICAgICAgICAgXCJbb3pfYXZdXCIsXG4gICAgICAgICAgeyB0eXBlOiBcImxpdGVyYWxcIiwgdmFsdWU6IFwiW296X2F2XVwiLCBkZXNjcmlwdGlvbjogXCJcXFwiW296X2F2XVxcXCJcIiB9LFxuICAgICAgICAgIGZ1bmN0aW9uKHUpIHtyZXR1cm4ge3ZhbHVlOiAxLCB1bml0czoge1wiW296X2F2XVwiOiAxfX07fSxcbiAgICAgICAgICBcIltsYl9hdl1cIixcbiAgICAgICAgICB7IHR5cGU6IFwibGl0ZXJhbFwiLCB2YWx1ZTogXCJbbGJfYXZdXCIsIGRlc2NyaXB0aW9uOiBcIlxcXCJbbGJfYXZdXFxcIlwiIH0sXG4gICAgICAgICAgZnVuY3Rpb24odSkge3JldHVybiB7dmFsdWU6IDEsIHVuaXRzOiB7XCJbbGJfYXZdXCI6IDF9fTt9LFxuICAgICAgICAgIFwiW2R5ZSdVXVwiLFxuICAgICAgICAgIHsgdHlwZTogXCJsaXRlcmFsXCIsIHZhbHVlOiBcIltkeWUnVV1cIiwgZGVzY3JpcHRpb246IFwiXFxcIltkeWUnVV1cXFwiXCIgfSxcbiAgICAgICAgICBmdW5jdGlvbih1KSB7cmV0dXJuIHt2YWx1ZTogMSwgdW5pdHM6IHtcIltkeWUnVV1cIjogMX19O30sXG4gICAgICAgICAgXCJbcGtfdXNdXCIsXG4gICAgICAgICAgeyB0eXBlOiBcImxpdGVyYWxcIiwgdmFsdWU6IFwiW3BrX3VzXVwiLCBkZXNjcmlwdGlvbjogXCJcXFwiW3BrX3VzXVxcXCJcIiB9LFxuICAgICAgICAgIGZ1bmN0aW9uKHUpIHtyZXR1cm4ge3ZhbHVlOiAxLCB1bml0czoge1wiW3BrX3VzXVwiOiAxfX07fSxcbiAgICAgICAgICBcIltBUEwnVV1cIixcbiAgICAgICAgICB7IHR5cGU6IFwibGl0ZXJhbFwiLCB2YWx1ZTogXCJbQVBMJ1VdXCIsIGRlc2NyaXB0aW9uOiBcIlxcXCJbQVBMJ1VdXFxcIlwiIH0sXG4gICAgICAgICAgZnVuY3Rpb24odSkge3JldHVybiB7dmFsdWU6IDEsIHVuaXRzOiB7XCJbQVBMJ1VdXCI6IDF9fTt9LFxuICAgICAgICAgIFwiW2J1X3VzXVwiLFxuICAgICAgICAgIHsgdHlwZTogXCJsaXRlcmFsXCIsIHZhbHVlOiBcIltidV91c11cIiwgZGVzY3JpcHRpb246IFwiXFxcIltidV91c11cXFwiXCIgfSxcbiAgICAgICAgICBmdW5jdGlvbih1KSB7cmV0dXJuIHt2YWx1ZTogMSwgdW5pdHM6IHtcIltidV91c11cIjogMX19O30sXG4gICAgICAgICAgXCJbcHRfYnJdXCIsXG4gICAgICAgICAgeyB0eXBlOiBcImxpdGVyYWxcIiwgdmFsdWU6IFwiW3B0X2JyXVwiLCBkZXNjcmlwdGlvbjogXCJcXFwiW3B0X2JyXVxcXCJcIiB9LFxuICAgICAgICAgIGZ1bmN0aW9uKHUpIHtyZXR1cm4ge3ZhbHVlOiAxLCB1bml0czoge1wiW3B0X2JyXVwiOiAxfX07fSxcbiAgICAgICAgICBcIltxdF9icl1cIixcbiAgICAgICAgICB7IHR5cGU6IFwibGl0ZXJhbFwiLCB2YWx1ZTogXCJbcXRfYnJdXCIsIGRlc2NyaXB0aW9uOiBcIlxcXCJbcXRfYnJdXFxcIlwiIH0sXG4gICAgICAgICAgZnVuY3Rpb24odSkge3JldHVybiB7dmFsdWU6IDEsIHVuaXRzOiB7XCJbcXRfYnJdXCI6IDF9fTt9LFxuICAgICAgICAgIFwiW2J1X2JyXVwiLFxuICAgICAgICAgIHsgdHlwZTogXCJsaXRlcmFsXCIsIHZhbHVlOiBcIltidV9icl1cIiwgZGVzY3JpcHRpb246IFwiXFxcIltidV9icl1cXFwiXCIgfSxcbiAgICAgICAgICBmdW5jdGlvbih1KSB7cmV0dXJuIHt2YWx1ZTogMSwgdW5pdHM6IHtcIltidV9icl1cIjogMX19O30sXG4gICAgICAgICAgXCJbaHAnX1hdXCIsXG4gICAgICAgICAgeyB0eXBlOiBcImxpdGVyYWxcIiwgdmFsdWU6IFwiW2hwJ19YXVwiLCBkZXNjcmlwdGlvbjogXCJcXFwiW2hwJ19YXVxcXCJcIiB9LFxuICAgICAgICAgIGZ1bmN0aW9uKHUpIHtyZXR1cm4ge3ZhbHVlOiAxLCB1bml0czoge1wiW2hwJ19YXVwiOiAxfX07fSxcbiAgICAgICAgICBcIltNUEwnVV1cIixcbiAgICAgICAgICB7IHR5cGU6IFwibGl0ZXJhbFwiLCB2YWx1ZTogXCJbTVBMJ1VdXCIsIGRlc2NyaXB0aW9uOiBcIlxcXCJbTVBMJ1VdXFxcIlwiIH0sXG4gICAgICAgICAgZnVuY3Rpb24odSkge3JldHVybiB7dmFsdWU6IDEsIHVuaXRzOiB7XCJbTVBMJ1VdXCI6IDF9fTt9LFxuICAgICAgICAgIFwiW0dQTCdVXVwiLFxuICAgICAgICAgIHsgdHlwZTogXCJsaXRlcmFsXCIsIHZhbHVlOiBcIltHUEwnVV1cIiwgZGVzY3JpcHRpb246IFwiXFxcIltHUEwnVV1cXFwiXCIgfSxcbiAgICAgICAgICBmdW5jdGlvbih1KSB7cmV0dXJuIHt2YWx1ZTogMSwgdW5pdHM6IHtcIltHUEwnVV1cIjogMX19O30sXG4gICAgICAgICAgXCJbVVNQJ1VdXCIsXG4gICAgICAgICAgeyB0eXBlOiBcImxpdGVyYWxcIiwgdmFsdWU6IFwiW1VTUCdVXVwiLCBkZXNjcmlwdGlvbjogXCJcXFwiW1VTUCdVXVxcXCJcIiB9LFxuICAgICAgICAgIGZ1bmN0aW9uKHUpIHtyZXR1cm4ge3ZhbHVlOiAxLCB1bml0czoge1wiW1VTUCdVXVwiOiAxfX07fSxcbiAgICAgICAgICBcIltlcHNfMF1cIixcbiAgICAgICAgICB7IHR5cGU6IFwibGl0ZXJhbFwiLCB2YWx1ZTogXCJbZXBzXzBdXCIsIGRlc2NyaXB0aW9uOiBcIlxcXCJbZXBzXzBdXFxcIlwiIH0sXG4gICAgICAgICAgZnVuY3Rpb24odSkge3JldHVybiB7dmFsdWU6IDEsIHVuaXRzOiB7XCJbZXBzXzBdXCI6IDF9fTt9LFxuICAgICAgICAgIFwiW2Z0aF9pXVwiLFxuICAgICAgICAgIHsgdHlwZTogXCJsaXRlcmFsXCIsIHZhbHVlOiBcIltmdGhfaV1cIiwgZGVzY3JpcHRpb246IFwiXFxcIltmdGhfaV1cXFwiXCIgfSxcbiAgICAgICAgICBmdW5jdGlvbih1KSB7cmV0dXJuIHt2YWx1ZTogMSwgdW5pdHM6IHtcIltmdGhfaV1cIjogMX19O30sXG4gICAgICAgICAgXCJbbm1pX2ldXCIsXG4gICAgICAgICAgeyB0eXBlOiBcImxpdGVyYWxcIiwgdmFsdWU6IFwiW25taV9pXVwiLCBkZXNjcmlwdGlvbjogXCJcXFwiW25taV9pXVxcXCJcIiB9LFxuICAgICAgICAgIGZ1bmN0aW9uKHUpIHtyZXR1cm4ge3ZhbHVlOiAxLCB1bml0czoge1wiW25taV9pXVwiOiAxfX07fSxcbiAgICAgICAgICBcIltwdF91c11cIixcbiAgICAgICAgICB7IHR5cGU6IFwibGl0ZXJhbFwiLCB2YWx1ZTogXCJbcHRfdXNdXCIsIGRlc2NyaXB0aW9uOiBcIlxcXCJbcHRfdXNdXFxcIlwiIH0sXG4gICAgICAgICAgZnVuY3Rpb24odSkge3JldHVybiB7dmFsdWU6IDEsIHVuaXRzOiB7XCJbcHRfdXNdXCI6IDF9fTt9LFxuICAgICAgICAgIFwiW3Npbl9pXVwiLFxuICAgICAgICAgIHsgdHlwZTogXCJsaXRlcmFsXCIsIHZhbHVlOiBcIltzaW5faV1cIiwgZGVzY3JpcHRpb246IFwiXFxcIltzaW5faV1cXFwiXCIgfSxcbiAgICAgICAgICBmdW5jdGlvbih1KSB7cmV0dXJuIHt2YWx1ZTogMSwgdW5pdHM6IHtcIltzaW5faV1cIjogMX19O30sXG4gICAgICAgICAgXCJbc2Z0X2ldXCIsXG4gICAgICAgICAgeyB0eXBlOiBcImxpdGVyYWxcIiwgdmFsdWU6IFwiW3NmdF9pXVwiLCBkZXNjcmlwdGlvbjogXCJcXFwiW3NmdF9pXVxcXCJcIiB9LFxuICAgICAgICAgIGZ1bmN0aW9uKHUpIHtyZXR1cm4ge3ZhbHVlOiAxLCB1bml0czoge1wiW3NmdF9pXVwiOiAxfX07fSxcbiAgICAgICAgICBcIltzeWRfaV1cIixcbiAgICAgICAgICB7IHR5cGU6IFwibGl0ZXJhbFwiLCB2YWx1ZTogXCJbc3lkX2ldXCIsIGRlc2NyaXB0aW9uOiBcIlxcXCJbc3lkX2ldXFxcIlwiIH0sXG4gICAgICAgICAgZnVuY3Rpb24odSkge3JldHVybiB7dmFsdWU6IDEsIHVuaXRzOiB7XCJbc3lkX2ldXCI6IDF9fTt9LFxuICAgICAgICAgIFwiW2Npbl9pXVwiLFxuICAgICAgICAgIHsgdHlwZTogXCJsaXRlcmFsXCIsIHZhbHVlOiBcIltjaW5faV1cIiwgZGVzY3JpcHRpb246IFwiXFxcIltjaW5faV1cXFwiXCIgfSxcbiAgICAgICAgICBmdW5jdGlvbih1KSB7cmV0dXJuIHt2YWx1ZTogMSwgdW5pdHM6IHtcIltjaW5faV1cIjogMX19O30sXG4gICAgICAgICAgXCJbY2Z0X2ldXCIsXG4gICAgICAgICAgeyB0eXBlOiBcImxpdGVyYWxcIiwgdmFsdWU6IFwiW2NmdF9pXVwiLCBkZXNjcmlwdGlvbjogXCJcXFwiW2NmdF9pXVxcXCJcIiB9LFxuICAgICAgICAgIGZ1bmN0aW9uKHUpIHtyZXR1cm4ge3ZhbHVlOiAxLCB1bml0czoge1wiW2NmdF9pXVwiOiAxfX07fSxcbiAgICAgICAgICBcIltjeWRfaV1cIixcbiAgICAgICAgICB7IHR5cGU6IFwibGl0ZXJhbFwiLCB2YWx1ZTogXCJbY3lkX2ldXCIsIGRlc2NyaXB0aW9uOiBcIlxcXCJbY3lkX2ldXFxcIlwiIH0sXG4gICAgICAgICAgZnVuY3Rpb24odSkge3JldHVybiB7dmFsdWU6IDEsIHVuaXRzOiB7XCJbY3lkX2ldXCI6IDF9fTt9LFxuICAgICAgICAgIFwiW3F0X3VzXVwiLFxuICAgICAgICAgIHsgdHlwZTogXCJsaXRlcmFsXCIsIHZhbHVlOiBcIltxdF91c11cIiwgZGVzY3JpcHRpb246IFwiXFxcIltxdF91c11cXFwiXCIgfSxcbiAgICAgICAgICBmdW5jdGlvbih1KSB7cmV0dXJuIHt2YWx1ZTogMSwgdW5pdHM6IHtcIltxdF91c11cIjogMX19O30sXG4gICAgICAgICAgXCJbYXJiJ1VdXCIsXG4gICAgICAgICAgeyB0eXBlOiBcImxpdGVyYWxcIiwgdmFsdWU6IFwiW2FyYidVXVwiLCBkZXNjcmlwdGlvbjogXCJcXFwiW2FyYidVXVxcXCJcIiB9LFxuICAgICAgICAgIGZ1bmN0aW9uKHUpIHtyZXR1cm4ge3ZhbHVlOiAxLCB1bml0czoge1wiW2FyYidVXVwiOiAxfX07fSxcbiAgICAgICAgICBcIlttaWxfaV1cIixcbiAgICAgICAgICB7IHR5cGU6IFwibGl0ZXJhbFwiLCB2YWx1ZTogXCJbbWlsX2ldXCIsIGRlc2NyaXB0aW9uOiBcIlxcXCJbbWlsX2ldXFxcIlwiIH0sXG4gICAgICAgICAgZnVuY3Rpb24odSkge3JldHVybiB7dmFsdWU6IDEsIHVuaXRzOiB7XCJbbWlsX2ldXCI6IDF9fTt9LFxuICAgICAgICAgIFwiW2NtbF9pXVwiLFxuICAgICAgICAgIHsgdHlwZTogXCJsaXRlcmFsXCIsIHZhbHVlOiBcIltjbWxfaV1cIiwgZGVzY3JpcHRpb246IFwiXFxcIltjbWxfaV1cXFwiXCIgfSxcbiAgICAgICAgICBmdW5jdGlvbih1KSB7cmV0dXJuIHt2YWx1ZTogMSwgdW5pdHM6IHtcIltjbWxfaV1cIjogMX19O30sXG4gICAgICAgICAgXCJba25fYnJdXCIsXG4gICAgICAgICAgeyB0eXBlOiBcImxpdGVyYWxcIiwgdmFsdWU6IFwiW2tuX2JyXVwiLCBkZXNjcmlwdGlvbjogXCJcXFwiW2tuX2JyXVxcXCJcIiB9LFxuICAgICAgICAgIGZ1bmN0aW9uKHUpIHtyZXR1cm4ge3ZhbHVlOiAxLCB1bml0czoge1wiW2tuX2JyXVwiOiAxfX07fSxcbiAgICAgICAgICBcIltmdF91c11cIixcbiAgICAgICAgICB7IHR5cGU6IFwibGl0ZXJhbFwiLCB2YWx1ZTogXCJbZnRfdXNdXCIsIGRlc2NyaXB0aW9uOiBcIlxcXCJbZnRfdXNdXFxcIlwiIH0sXG4gICAgICAgICAgZnVuY3Rpb24odSkge3JldHVybiB7dmFsdWU6IDEsIHVuaXRzOiB7XCJbZnRfdXNdXCI6IDF9fTt9LFxuICAgICAgICAgIFwiW3BvdWNlXVwiLFxuICAgICAgICAgIHsgdHlwZTogXCJsaXRlcmFsXCIsIHZhbHVlOiBcIltwb3VjZV1cIiwgZGVzY3JpcHRpb246IFwiXFxcIltwb3VjZV1cXFwiXCIgfSxcbiAgICAgICAgICBmdW5jdGlvbih1KSB7cmV0dXJuIHt2YWx1ZTogMSwgdW5pdHM6IHtcIltwb3VjZV1cIjogMX19O30sXG4gICAgICAgICAgXCJbaW5fdXNdXCIsXG4gICAgICAgICAgeyB0eXBlOiBcImxpdGVyYWxcIiwgdmFsdWU6IFwiW2luX3VzXVwiLCBkZXNjcmlwdGlvbjogXCJcXFwiW2luX3VzXVxcXCJcIiB9LFxuICAgICAgICAgIGZ1bmN0aW9uKHUpIHtyZXR1cm4ge3ZhbHVlOiAxLCB1bml0czoge1wiW2luX3VzXVwiOiAxfX07fSxcbiAgICAgICAgICBcIltyZF91c11cIixcbiAgICAgICAgICB7IHR5cGU6IFwibGl0ZXJhbFwiLCB2YWx1ZTogXCJbcmRfdXNdXCIsIGRlc2NyaXB0aW9uOiBcIlxcXCJbcmRfdXNdXFxcIlwiIH0sXG4gICAgICAgICAgZnVuY3Rpb24odSkge3JldHVybiB7dmFsdWU6IDEsIHVuaXRzOiB7XCJbcmRfdXNdXCI6IDF9fTt9LFxuICAgICAgICAgIFwiW2NoX3VzXVwiLFxuICAgICAgICAgIHsgdHlwZTogXCJsaXRlcmFsXCIsIHZhbHVlOiBcIltjaF91c11cIiwgZGVzY3JpcHRpb246IFwiXFxcIltjaF91c11cXFwiXCIgfSxcbiAgICAgICAgICBmdW5jdGlvbih1KSB7cmV0dXJuIHt2YWx1ZTogMSwgdW5pdHM6IHtcIltjaF91c11cIjogMX19O30sXG4gICAgICAgICAgXCJbbGtfdXNdXCIsXG4gICAgICAgICAgeyB0eXBlOiBcImxpdGVyYWxcIiwgdmFsdWU6IFwiW2xrX3VzXVwiLCBkZXNjcmlwdGlvbjogXCJcXFwiW2xrX3VzXVxcXCJcIiB9LFxuICAgICAgICAgIGZ1bmN0aW9uKHUpIHtyZXR1cm4ge3ZhbHVlOiAxLCB1bml0czoge1wiW2xrX3VzXVwiOiAxfX07fSxcbiAgICAgICAgICBcIltocCdfQ11cIixcbiAgICAgICAgICB7IHR5cGU6IFwibGl0ZXJhbFwiLCB2YWx1ZTogXCJbaHAnX0NdXCIsIGRlc2NyaXB0aW9uOiBcIlxcXCJbaHAnX0NdXFxcIlwiIH0sXG4gICAgICAgICAgZnVuY3Rpb24odSkge3JldHVybiB7dmFsdWU6IDEsIHVuaXRzOiB7XCJbaHAnX0NdXCI6IDF9fTt9LFxuICAgICAgICAgIFwiW2hwJ19NXVwiLFxuICAgICAgICAgIHsgdHlwZTogXCJsaXRlcmFsXCIsIHZhbHVlOiBcIltocCdfTV1cIiwgZGVzY3JpcHRpb246IFwiXFxcIltocCdfTV1cXFwiXCIgfSxcbiAgICAgICAgICBmdW5jdGlvbih1KSB7cmV0dXJuIHt2YWx1ZTogMSwgdW5pdHM6IHtcIltocCdfTV1cIjogMX19O30sXG4gICAgICAgICAgXCJbaHAnX1FdXCIsXG4gICAgICAgICAgeyB0eXBlOiBcImxpdGVyYWxcIiwgdmFsdWU6IFwiW2hwJ19RXVwiLCBkZXNjcmlwdGlvbjogXCJcXFwiW2hwJ19RXVxcXCJcIiB9LFxuICAgICAgICAgIGZ1bmN0aW9uKHUpIHtyZXR1cm4ge3ZhbHVlOiAxLCB1bml0czoge1wiW2hwJ19RXVwiOiAxfX07fSxcbiAgICAgICAgICBcIlttaV9icl1cIixcbiAgICAgICAgICB7IHR5cGU6IFwibGl0ZXJhbFwiLCB2YWx1ZTogXCJbbWlfYnJdXCIsIGRlc2NyaXB0aW9uOiBcIlxcXCJbbWlfYnJdXFxcIlwiIH0sXG4gICAgICAgICAgZnVuY3Rpb24odSkge3JldHVybiB7dmFsdWU6IDEsIHVuaXRzOiB7XCJbbWlfYnJdXCI6IDF9fTt9LFxuICAgICAgICAgIFwiW21pX3VzXVwiLFxuICAgICAgICAgIHsgdHlwZTogXCJsaXRlcmFsXCIsIHZhbHVlOiBcIlttaV91c11cIiwgZGVzY3JpcHRpb246IFwiXFxcIlttaV91c11cXFwiXCIgfSxcbiAgICAgICAgICBmdW5jdGlvbih1KSB7cmV0dXJuIHt2YWx1ZTogMSwgdW5pdHM6IHtcIlttaV91c11cIjogMX19O30sXG4gICAgICAgICAgXCJbeWRfYnJdXCIsXG4gICAgICAgICAgeyB0eXBlOiBcImxpdGVyYWxcIiwgdmFsdWU6IFwiW3lkX2JyXVwiLCBkZXNjcmlwdGlvbjogXCJcXFwiW3lkX2JyXVxcXCJcIiB9LFxuICAgICAgICAgIGZ1bmN0aW9uKHUpIHtyZXR1cm4ge3ZhbHVlOiAxLCB1bml0czoge1wiW3lkX2JyXVwiOiAxfX07fSxcbiAgICAgICAgICBcIltwa19icl1cIixcbiAgICAgICAgICB7IHR5cGU6IFwibGl0ZXJhbFwiLCB2YWx1ZTogXCJbcGtfYnJdXCIsIGRlc2NyaXB0aW9uOiBcIlxcXCJbcGtfYnJdXFxcIlwiIH0sXG4gICAgICAgICAgZnVuY3Rpb24odSkge3JldHVybiB7dmFsdWU6IDEsIHVuaXRzOiB7XCJbcGtfYnJdXCI6IDF9fTt9LFxuICAgICAgICAgIFwiW3BjX2JyXVwiLFxuICAgICAgICAgIHsgdHlwZTogXCJsaXRlcmFsXCIsIHZhbHVlOiBcIltwY19icl1cIiwgZGVzY3JpcHRpb246IFwiXFxcIltwY19icl1cXFwiXCIgfSxcbiAgICAgICAgICBmdW5jdGlvbih1KSB7cmV0dXJuIHt2YWx1ZTogMSwgdW5pdHM6IHtcIltwY19icl1cIjogMX19O30sXG4gICAgICAgICAgXCJbbGtfYnJdXCIsXG4gICAgICAgICAgeyB0eXBlOiBcImxpdGVyYWxcIiwgdmFsdWU6IFwiW2xrX2JyXVwiLCBkZXNjcmlwdGlvbjogXCJcXFwiW2xrX2JyXVxcXCJcIiB9LFxuICAgICAgICAgIGZ1bmN0aW9uKHUpIHtyZXR1cm4ge3ZhbHVlOiAxLCB1bml0czoge1wiW2xrX2JyXVwiOiAxfX07fSxcbiAgICAgICAgICBcIltpbl9icl1cIixcbiAgICAgICAgICB7IHR5cGU6IFwibGl0ZXJhbFwiLCB2YWx1ZTogXCJbaW5fYnJdXCIsIGRlc2NyaXB0aW9uOiBcIlxcXCJbaW5fYnJdXFxcIlwiIH0sXG4gICAgICAgICAgZnVuY3Rpb24odSkge3JldHVybiB7dmFsdWU6IDEsIHVuaXRzOiB7XCJbaW5fYnJdXCI6IDF9fTt9LFxuICAgICAgICAgIFwiW2Z0X2JyXVwiLFxuICAgICAgICAgIHsgdHlwZTogXCJsaXRlcmFsXCIsIHZhbHVlOiBcIltmdF9icl1cIiwgZGVzY3JpcHRpb246IFwiXFxcIltmdF9icl1cXFwiXCIgfSxcbiAgICAgICAgICBmdW5jdGlvbih1KSB7cmV0dXJuIHt2YWx1ZTogMSwgdW5pdHM6IHtcIltmdF9icl1cIjogMX19O30sXG4gICAgICAgICAgXCJbcmRfYnJdXCIsXG4gICAgICAgICAgeyB0eXBlOiBcImxpdGVyYWxcIiwgdmFsdWU6IFwiW3JkX2JyXVwiLCBkZXNjcmlwdGlvbjogXCJcXFwiW3JkX2JyXVxcXCJcIiB9LFxuICAgICAgICAgIGZ1bmN0aW9uKHUpIHtyZXR1cm4ge3ZhbHVlOiAxLCB1bml0czoge1wiW3JkX2JyXVwiOiAxfX07fSxcbiAgICAgICAgICBcIltjaF9icl1cIixcbiAgICAgICAgICB7IHR5cGU6IFwibGl0ZXJhbFwiLCB2YWx1ZTogXCJbY2hfYnJdXCIsIGRlc2NyaXB0aW9uOiBcIlxcXCJbY2hfYnJdXFxcIlwiIH0sXG4gICAgICAgICAgZnVuY3Rpb24odSkge3JldHVybiB7dmFsdWU6IDEsIHVuaXRzOiB7XCJbY2hfYnJdXCI6IDF9fTt9LFxuICAgICAgICAgIFwiW2Z0X2ldXCIsXG4gICAgICAgICAgeyB0eXBlOiBcImxpdGVyYWxcIiwgdmFsdWU6IFwiW2Z0X2ldXCIsIGRlc2NyaXB0aW9uOiBcIlxcXCJbZnRfaV1cXFwiXCIgfSxcbiAgICAgICAgICBmdW5jdGlvbih1KSB7cmV0dXJuIHt2YWx1ZTogMSwgdW5pdHM6IHtcIltmdF9pXVwiOiAxfX07fSxcbiAgICAgICAgICBcIltocF9RXVwiLFxuICAgICAgICAgIHsgdHlwZTogXCJsaXRlcmFsXCIsIHZhbHVlOiBcIltocF9RXVwiLCBkZXNjcmlwdGlvbjogXCJcXFwiW2hwX1FdXFxcIlwiIH0sXG4gICAgICAgICAgZnVuY3Rpb24odSkge3JldHVybiB7dmFsdWU6IDEsIHVuaXRzOiB7XCJbaHBfUV1cIjogMX19O30sXG4gICAgICAgICAgXCJbaHBfTV1cIixcbiAgICAgICAgICB7IHR5cGU6IFwibGl0ZXJhbFwiLCB2YWx1ZTogXCJbaHBfTV1cIiwgZGVzY3JpcHRpb246IFwiXFxcIltocF9NXVxcXCJcIiB9LFxuICAgICAgICAgIGZ1bmN0aW9uKHUpIHtyZXR1cm4ge3ZhbHVlOiAxLCB1bml0czoge1wiW2hwX01dXCI6IDF9fTt9LFxuICAgICAgICAgIFwiW2hwX0NdXCIsXG4gICAgICAgICAgeyB0eXBlOiBcImxpdGVyYWxcIiwgdmFsdWU6IFwiW2hwX0NdXCIsIGRlc2NyaXB0aW9uOiBcIlxcXCJbaHBfQ11cXFwiXCIgfSxcbiAgICAgICAgICBmdW5jdGlvbih1KSB7cmV0dXJuIHt2YWx1ZTogMSwgdW5pdHM6IHtcIltocF9DXVwiOiAxfX07fSxcbiAgICAgICAgICBcIltocF9YXVwiLFxuICAgICAgICAgIHsgdHlwZTogXCJsaXRlcmFsXCIsIHZhbHVlOiBcIltocF9YXVwiLCBkZXNjcmlwdGlvbjogXCJcXFwiW2hwX1hdXFxcIlwiIH0sXG4gICAgICAgICAgZnVuY3Rpb24odSkge3JldHVybiB7dmFsdWU6IDEsIHVuaXRzOiB7XCJbaHBfWF1cIjogMX19O30sXG4gICAgICAgICAgXCJba3BfQ11cIixcbiAgICAgICAgICB7IHR5cGU6IFwibGl0ZXJhbFwiLCB2YWx1ZTogXCJba3BfQ11cIiwgZGVzY3JpcHRpb246IFwiXFxcIltrcF9DXVxcXCJcIiB9LFxuICAgICAgICAgIGZ1bmN0aW9uKHUpIHtyZXR1cm4ge3ZhbHVlOiAxLCB1bml0czoge1wiW2twX0NdXCI6IDF9fTt9LFxuICAgICAgICAgIFwiW2hkX2ldXCIsXG4gICAgICAgICAgeyB0eXBlOiBcImxpdGVyYWxcIiwgdmFsdWU6IFwiW2hkX2ldXCIsIGRlc2NyaXB0aW9uOiBcIlxcXCJbaGRfaV1cXFwiXCIgfSxcbiAgICAgICAgICBmdW5jdGlvbih1KSB7cmV0dXJuIHt2YWx1ZTogMSwgdW5pdHM6IHtcIltoZF9pXVwiOiAxfX07fSxcbiAgICAgICAgICBcIltrcF9NXVwiLFxuICAgICAgICAgIHsgdHlwZTogXCJsaXRlcmFsXCIsIHZhbHVlOiBcIltrcF9NXVwiLCBkZXNjcmlwdGlvbjogXCJcXFwiW2twX01dXFxcIlwiIH0sXG4gICAgICAgICAgZnVuY3Rpb24odSkge3JldHVybiB7dmFsdWU6IDEsIHVuaXRzOiB7XCJba3BfTV1cIjogMX19O30sXG4gICAgICAgICAgXCJba3BfUV1cIixcbiAgICAgICAgICB7IHR5cGU6IFwibGl0ZXJhbFwiLCB2YWx1ZTogXCJba3BfUV1cIiwgZGVzY3JpcHRpb246IFwiXFxcIltrcF9RXVxcXCJcIiB9LFxuICAgICAgICAgIGZ1bmN0aW9uKHUpIHtyZXR1cm4ge3ZhbHVlOiAxLCB1bml0czoge1wiW2twX1FdXCI6IDF9fTt9LFxuICAgICAgICAgIFwiW2NyX2ldXCIsXG4gICAgICAgICAgeyB0eXBlOiBcImxpdGVyYWxcIiwgdmFsdWU6IFwiW2NyX2ldXCIsIGRlc2NyaXB0aW9uOiBcIlxcXCJbY3JfaV1cXFwiXCIgfSxcbiAgICAgICAgICBmdW5jdGlvbih1KSB7cmV0dXJuIHt2YWx1ZTogMSwgdW5pdHM6IHtcIltjcl9pXVwiOiAxfX07fSxcbiAgICAgICAgICBcIltiZl9pXVwiLFxuICAgICAgICAgIHsgdHlwZTogXCJsaXRlcmFsXCIsIHZhbHVlOiBcIltiZl9pXVwiLCBkZXNjcmlwdGlvbjogXCJcXFwiW2JmX2ldXFxcIlwiIH0sXG4gICAgICAgICAgZnVuY3Rpb24odSkge3JldHVybiB7dmFsdWU6IDEsIHVuaXRzOiB7XCJbYmZfaV1cIjogMX19O30sXG4gICAgICAgICAgXCJba25faV1cIixcbiAgICAgICAgICB7IHR5cGU6IFwibGl0ZXJhbFwiLCB2YWx1ZTogXCJba25faV1cIiwgZGVzY3JpcHRpb246IFwiXFxcIltrbl9pXVxcXCJcIiB9LFxuICAgICAgICAgIGZ1bmN0aW9uKHUpIHtyZXR1cm4ge3ZhbHVlOiAxLCB1bml0czoge1wiW2tuX2ldXCI6IDF9fTt9LFxuICAgICAgICAgIFwiW211XzBdXCIsXG4gICAgICAgICAgeyB0eXBlOiBcImxpdGVyYWxcIiwgdmFsdWU6IFwiW211XzBdXCIsIGRlc2NyaXB0aW9uOiBcIlxcXCJbbXVfMF1cXFwiXCIgfSxcbiAgICAgICAgICBmdW5jdGlvbih1KSB7cmV0dXJuIHt2YWx1ZTogMSwgdW5pdHM6IHtcIlttdV8wXVwiOiAxfX07fSxcbiAgICAgICAgICBcIlttaV9pXVwiLFxuICAgICAgICAgIHsgdHlwZTogXCJsaXRlcmFsXCIsIHZhbHVlOiBcIlttaV9pXVwiLCBkZXNjcmlwdGlvbjogXCJcXFwiW21pX2ldXFxcIlwiIH0sXG4gICAgICAgICAgZnVuY3Rpb24odSkge3JldHVybiB7dmFsdWU6IDEsIHVuaXRzOiB7XCJbbWlfaV1cIjogMX19O30sXG4gICAgICAgICAgXCJbeWRfaV1cIixcbiAgICAgICAgICB7IHR5cGU6IFwibGl0ZXJhbFwiLCB2YWx1ZTogXCJbeWRfaV1cIiwgZGVzY3JpcHRpb246IFwiXFxcIlt5ZF9pXVxcXCJcIiB9LFxuICAgICAgICAgIGZ1bmN0aW9uKHUpIHtyZXR1cm4ge3ZhbHVlOiAxLCB1bml0czoge1wiW3lkX2ldXCI6IDF9fTt9LFxuICAgICAgICAgIFwiW2twX1hdXCIsXG4gICAgICAgICAgeyB0eXBlOiBcImxpdGVyYWxcIiwgdmFsdWU6IFwiW2twX1hdXCIsIGRlc2NyaXB0aW9uOiBcIlxcXCJba3BfWF1cXFwiXCIgfSxcbiAgICAgICAgICBmdW5jdGlvbih1KSB7cmV0dXJuIHt2YWx1ZTogMSwgdW5pdHM6IHtcIltrcF9YXVwiOiAxfX07fSxcbiAgICAgICAgICBcIltpbl9pXVwiLFxuICAgICAgICAgIHsgdHlwZTogXCJsaXRlcmFsXCIsIHZhbHVlOiBcIltpbl9pXVwiLCBkZXNjcmlwdGlvbjogXCJcXFwiW2luX2ldXFxcIlwiIH0sXG4gICAgICAgICAgZnVuY3Rpb24odSkge3JldHVybiB7dmFsdWU6IDEsIHVuaXRzOiB7XCJbaW5faV1cIjogMX19O30sXG4gICAgICAgICAgXCJbZGlvcF1cIixcbiAgICAgICAgICB7IHR5cGU6IFwibGl0ZXJhbFwiLCB2YWx1ZTogXCJbZGlvcF1cIiwgZGVzY3JpcHRpb246IFwiXFxcIltkaW9wXVxcXCJcIiB9LFxuICAgICAgICAgIGZ1bmN0aW9uKHUpIHtyZXR1cm4ge3ZhbHVlOiAxLCB1bml0czoge1wiW2Rpb3BdXCI6IDF9fTt9LFxuICAgICAgICAgIFwiY2FsX0lUXCIsXG4gICAgICAgICAgeyB0eXBlOiBcImxpdGVyYWxcIiwgdmFsdWU6IFwiY2FsX0lUXCIsIGRlc2NyaXB0aW9uOiBcIlxcXCJjYWxfSVRcXFwiXCIgfSxcbiAgICAgICAgICBmdW5jdGlvbih1KSB7cmV0dXJuIHt2YWx1ZTogMSwgdW5pdHM6IHtcImNhbF9JVFwiOiAxfX07fSxcbiAgICAgICAgICBcImNhbF90aFwiLFxuICAgICAgICAgIHsgdHlwZTogXCJsaXRlcmFsXCIsIHZhbHVlOiBcImNhbF90aFwiLCBkZXNjcmlwdGlvbjogXCJcXFwiY2FsX3RoXFxcIlwiIH0sXG4gICAgICAgICAgZnVuY3Rpb24odSkge3JldHVybiB7dmFsdWU6IDEsIHVuaXRzOiB7XCJjYWxfdGhcIjogMX19O30sXG4gICAgICAgICAgXCJtW0gyT11cIixcbiAgICAgICAgICB7IHR5cGU6IFwibGl0ZXJhbFwiLCB2YWx1ZTogXCJtW0gyT11cIiwgZGVzY3JpcHRpb246IFwiXFxcIm1bSDJPXVxcXCJcIiB9LFxuICAgICAgICAgIGZ1bmN0aW9uKHUpIHtyZXR1cm4ge3ZhbHVlOiAxLCB1bml0czoge1wibVtIMk9dXCI6IDF9fTt9LFxuICAgICAgICAgIFwiW2thJ1VdXCIsXG4gICAgICAgICAgeyB0eXBlOiBcImxpdGVyYWxcIiwgdmFsdWU6IFwiW2thJ1VdXCIsIGRlc2NyaXB0aW9uOiBcIlxcXCJba2EnVV1cXFwiXCIgfSxcbiAgICAgICAgICBmdW5jdGlvbih1KSB7cmV0dXJuIHt2YWx1ZTogMSwgdW5pdHM6IHtcIltrYSdVXVwiOiAxfX07fSxcbiAgICAgICAgICBcIkJbU1BMXVwiLFxuICAgICAgICAgIHsgdHlwZTogXCJsaXRlcmFsXCIsIHZhbHVlOiBcIkJbU1BMXVwiLCBkZXNjcmlwdGlvbjogXCJcXFwiQltTUExdXFxcIlwiIH0sXG4gICAgICAgICAgZnVuY3Rpb24odSkge3JldHVybiB7dmFsdWU6IDEsIHVuaXRzOiB7XCJCW1NQTF1cIjogMX19O30sXG4gICAgICAgICAgXCJbdGInVV1cIixcbiAgICAgICAgICB7IHR5cGU6IFwibGl0ZXJhbFwiLCB2YWx1ZTogXCJbdGInVV1cIiwgZGVzY3JpcHRpb246IFwiXFxcIlt0YidVXVxcXCJcIiB9LFxuICAgICAgICAgIGZ1bmN0aW9uKHUpIHtyZXR1cm4ge3ZhbHVlOiAxLCB1bml0czoge1wiW3RiJ1VdXCI6IDF9fTt9LFxuICAgICAgICAgIFwiW2RlZ1JdXCIsXG4gICAgICAgICAgeyB0eXBlOiBcImxpdGVyYWxcIiwgdmFsdWU6IFwiW2RlZ1JdXCIsIGRlc2NyaXB0aW9uOiBcIlxcXCJbZGVnUl1cXFwiXCIgfSxcbiAgICAgICAgICBmdW5jdGlvbih1KSB7cmV0dXJuIHt2YWx1ZTogMSwgdW5pdHM6IHtcIltkZWdSXVwiOiAxfX07fSxcbiAgICAgICAgICBcIltkZWdGXVwiLFxuICAgICAgICAgIHsgdHlwZTogXCJsaXRlcmFsXCIsIHZhbHVlOiBcIltkZWdGXVwiLCBkZXNjcmlwdGlvbjogXCJcXFwiW2RlZ0ZdXFxcIlwiIH0sXG4gICAgICAgICAgZnVuY3Rpb24odSkge3JldHVybiB7dmFsdWU6IDEsIHVuaXRzOiB7XCJbZGVnRl1cIjogMX19O30sXG4gICAgICAgICAgXCJbcHB0cl1cIixcbiAgICAgICAgICB7IHR5cGU6IFwibGl0ZXJhbFwiLCB2YWx1ZTogXCJbcHB0cl1cIiwgZGVzY3JpcHRpb246IFwiXFxcIltwcHRyXVxcXCJcIiB9LFxuICAgICAgICAgIGZ1bmN0aW9uKHUpIHtyZXR1cm4ge3ZhbHVlOiAxLCB1bml0czoge1wiW3BwdHJdXCI6IDF9fTt9LFxuICAgICAgICAgIFwiW3BwdGhdXCIsXG4gICAgICAgICAgeyB0eXBlOiBcImxpdGVyYWxcIiwgdmFsdWU6IFwiW3BwdGhdXCIsIGRlc2NyaXB0aW9uOiBcIlxcXCJbcHB0aF1cXFwiXCIgfSxcbiAgICAgICAgICBmdW5jdGlvbih1KSB7cmV0dXJuIHt2YWx1ZTogMSwgdW5pdHM6IHtcIltwcHRoXVwiOiAxfX07fSxcbiAgICAgICAgICBcIltvel9tXVwiLFxuICAgICAgICAgIHsgdHlwZTogXCJsaXRlcmFsXCIsIHZhbHVlOiBcIltvel9tXVwiLCBkZXNjcmlwdGlvbjogXCJcXFwiW296X21dXFxcIlwiIH0sXG4gICAgICAgICAgZnVuY3Rpb24odSkge3JldHVybiB7dmFsdWU6IDEsIHVuaXRzOiB7XCJbb3pfbV1cIjogMX19O30sXG4gICAgICAgICAgXCJbcGllZF1cIixcbiAgICAgICAgICB7IHR5cGU6IFwibGl0ZXJhbFwiLCB2YWx1ZTogXCJbcGllZF1cIiwgZGVzY3JpcHRpb246IFwiXFxcIltwaWVkXVxcXCJcIiB9LFxuICAgICAgICAgIGZ1bmN0aW9uKHUpIHtyZXR1cm4ge3ZhbHVlOiAxLCB1bml0czoge1wiW3BpZWRdXCI6IDF9fTt9LFxuICAgICAgICAgIFwiW3BwbV1cIixcbiAgICAgICAgICB7IHR5cGU6IFwibGl0ZXJhbFwiLCB2YWx1ZTogXCJbcHBtXVwiLCBkZXNjcmlwdGlvbjogXCJcXFwiW3BwbV1cXFwiXCIgfSxcbiAgICAgICAgICBmdW5jdGlvbih1KSB7cmV0dXJuIHt2YWx1ZTogMSwgdW5pdHM6IHtcIltwcG1dXCI6IDF9fTt9LFxuICAgICAgICAgIFwiW3BwYl1cIixcbiAgICAgICAgICB7IHR5cGU6IFwibGl0ZXJhbFwiLCB2YWx1ZTogXCJbcHBiXVwiLCBkZXNjcmlwdGlvbjogXCJcXFwiW3BwYl1cXFwiXCIgfSxcbiAgICAgICAgICBmdW5jdGlvbih1KSB7cmV0dXJuIHt2YWx1ZTogMSwgdW5pdHM6IHtcIltwcGJdXCI6IDF9fTt9LFxuICAgICAgICAgIFwiYml0X3NcIixcbiAgICAgICAgICB7IHR5cGU6IFwibGl0ZXJhbFwiLCB2YWx1ZTogXCJiaXRfc1wiLCBkZXNjcmlwdGlvbjogXCJcXFwiYml0X3NcXFwiXCIgfSxcbiAgICAgICAgICBmdW5jdGlvbih1KSB7cmV0dXJuIHt2YWx1ZTogMSwgdW5pdHM6IHtcImJpdF9zXCI6IDF9fTt9LFxuICAgICAgICAgIFwiW1BOVV1cIixcbiAgICAgICAgICB7IHR5cGU6IFwibGl0ZXJhbFwiLCB2YWx1ZTogXCJbUE5VXVwiLCBkZXNjcmlwdGlvbjogXCJcXFwiW1BOVV1cXFwiXCIgfSxcbiAgICAgICAgICBmdW5jdGlvbih1KSB7cmV0dXJuIHt2YWx1ZTogMSwgdW5pdHM6IHtcIltQTlVdXCI6IDF9fTt9LFxuICAgICAgICAgIFwiW3BzaV1cIixcbiAgICAgICAgICB7IHR5cGU6IFwibGl0ZXJhbFwiLCB2YWx1ZTogXCJbcHNpXVwiLCBkZXNjcmlwdGlvbjogXCJcXFwiW3BzaV1cXFwiXCIgfSxcbiAgICAgICAgICBmdW5jdGlvbih1KSB7cmV0dXJuIHt2YWx1ZTogMSwgdW5pdHM6IHtcIltwc2ldXCI6IDF9fTt9LFxuICAgICAgICAgIFwiW0JBVV1cIixcbiAgICAgICAgICB7IHR5cGU6IFwibGl0ZXJhbFwiLCB2YWx1ZTogXCJbQkFVXVwiLCBkZXNjcmlwdGlvbjogXCJcXFwiW0JBVV1cXFwiXCIgfSxcbiAgICAgICAgICBmdW5jdGlvbih1KSB7cmV0dXJuIHt2YWx1ZTogMSwgdW5pdHM6IHtcIltCQVVdXCI6IDF9fTt9LFxuICAgICAgICAgIFwiW0NhbF1cIixcbiAgICAgICAgICB7IHR5cGU6IFwibGl0ZXJhbFwiLCB2YWx1ZTogXCJbQ2FsXVwiLCBkZXNjcmlwdGlvbjogXCJcXFwiW0NhbF1cXFwiXCIgfSxcbiAgICAgICAgICBmdW5jdGlvbih1KSB7cmV0dXJuIHt2YWx1ZTogMSwgdW5pdHM6IHtcIltDYWxdXCI6IDF9fTt9LFxuICAgICAgICAgIFwiQlttVl1cIixcbiAgICAgICAgICB7IHR5cGU6IFwibGl0ZXJhbFwiLCB2YWx1ZTogXCJCW21WXVwiLCBkZXNjcmlwdGlvbjogXCJcXFwiQlttVl1cXFwiXCIgfSxcbiAgICAgICAgICBmdW5jdGlvbih1KSB7cmV0dXJuIHt2YWx1ZTogMSwgdW5pdHM6IHtcIkJbbVZdXCI6IDF9fTt9LFxuICAgICAgICAgIFwiQlt1Vl1cIixcbiAgICAgICAgICB7IHR5cGU6IFwibGl0ZXJhbFwiLCB2YWx1ZTogXCJCW3VWXVwiLCBkZXNjcmlwdGlvbjogXCJcXFwiQlt1Vl1cXFwiXCIgfSxcbiAgICAgICAgICBmdW5jdGlvbih1KSB7cmV0dXJuIHt2YWx1ZTogMSwgdW5pdHM6IHtcIkJbdVZdXCI6IDF9fTt9LFxuICAgICAgICAgIFwiW0NGVV1cIixcbiAgICAgICAgICB7IHR5cGU6IFwibGl0ZXJhbFwiLCB2YWx1ZTogXCJbQ0ZVXVwiLCBkZXNjcmlwdGlvbjogXCJcXFwiW0NGVV1cXFwiXCIgfSxcbiAgICAgICAgICBmdW5jdGlvbih1KSB7cmV0dXJuIHt2YWx1ZTogMSwgdW5pdHM6IHtcIltDRlVdXCI6IDF9fTt9LFxuICAgICAgICAgIFwiW0ZGVV1cIixcbiAgICAgICAgICB7IHR5cGU6IFwibGl0ZXJhbFwiLCB2YWx1ZTogXCJbRkZVXVwiLCBkZXNjcmlwdGlvbjogXCJcXFwiW0ZGVV1cXFwiXCIgfSxcbiAgICAgICAgICBmdW5jdGlvbih1KSB7cmV0dXJuIHt2YWx1ZTogMSwgdW5pdHM6IHtcIltGRlVdXCI6IDF9fTt9LFxuICAgICAgICAgIFwiQltrV11cIixcbiAgICAgICAgICB7IHR5cGU6IFwibGl0ZXJhbFwiLCB2YWx1ZTogXCJCW2tXXVwiLCBkZXNjcmlwdGlvbjogXCJcXFwiQltrV11cXFwiXCIgfSxcbiAgICAgICAgICBmdW5jdGlvbih1KSB7cmV0dXJuIHt2YWx1ZTogMSwgdW5pdHM6IHtcIkJba1ddXCI6IDF9fTt9LFxuICAgICAgICAgIFwiW1BGVV1cIixcbiAgICAgICAgICB7IHR5cGU6IFwibGl0ZXJhbFwiLCB2YWx1ZTogXCJbUEZVXVwiLCBkZXNjcmlwdGlvbjogXCJcXFwiW1BGVV1cXFwiXCIgfSxcbiAgICAgICAgICBmdW5jdGlvbih1KSB7cmV0dXJuIHt2YWx1ZTogMSwgdW5pdHM6IHtcIltQRlVdXCI6IDF9fTt9LFxuICAgICAgICAgIFwiY2FsX21cIixcbiAgICAgICAgICB7IHR5cGU6IFwibGl0ZXJhbFwiLCB2YWx1ZTogXCJjYWxfbVwiLCBkZXNjcmlwdGlvbjogXCJcXFwiY2FsX21cXFwiXCIgfSxcbiAgICAgICAgICBmdW5jdGlvbih1KSB7cmV0dXJuIHt2YWx1ZTogMSwgdW5pdHM6IHtcImNhbF9tXCI6IDF9fTt9LFxuICAgICAgICAgIFwiW0VMVV1cIixcbiAgICAgICAgICB7IHR5cGU6IFwibGl0ZXJhbFwiLCB2YWx1ZTogXCJbRUxVXVwiLCBkZXNjcmlwdGlvbjogXCJcXFwiW0VMVV1cXFwiXCIgfSxcbiAgICAgICAgICBmdW5jdGlvbih1KSB7cmV0dXJuIHt2YWx1ZTogMSwgdW5pdHM6IHtcIltFTFVdXCI6IDF9fTt9LFxuICAgICAgICAgIFwiW0ZFVV1cIixcbiAgICAgICAgICB7IHR5cGU6IFwibGl0ZXJhbFwiLCB2YWx1ZTogXCJbRkVVXVwiLCBkZXNjcmlwdGlvbjogXCJcXFwiW0ZFVV1cXFwiXCIgfSxcbiAgICAgICAgICBmdW5jdGlvbih1KSB7cmV0dXJuIHt2YWx1ZTogMSwgdW5pdHM6IHtcIltGRVVdXCI6IDF9fTt9LFxuICAgICAgICAgIFwiW1BSVV1cIixcbiAgICAgICAgICB7IHR5cGU6IFwibGl0ZXJhbFwiLCB2YWx1ZTogXCJbUFJVXVwiLCBkZXNjcmlwdGlvbjogXCJcXFwiW1BSVV1cXFwiXCIgfSxcbiAgICAgICAgICBmdW5jdGlvbih1KSB7cmV0dXJuIHt2YWx1ZTogMSwgdW5pdHM6IHtcIltQUlVdXCI6IDF9fTt9LFxuICAgICAgICAgIFwiW21fZV1cIixcbiAgICAgICAgICB7IHR5cGU6IFwibGl0ZXJhbFwiLCB2YWx1ZTogXCJbbV9lXVwiLCBkZXNjcmlwdGlvbjogXCJcXFwiW21fZV1cXFwiXCIgfSxcbiAgICAgICAgICBmdW5jdGlvbih1KSB7cmV0dXJuIHt2YWx1ZTogMSwgdW5pdHM6IHtcIlttX2VdXCI6IDF9fTt9LFxuICAgICAgICAgIFwiW21fcF1cIixcbiAgICAgICAgICB7IHR5cGU6IFwibGl0ZXJhbFwiLCB2YWx1ZTogXCJbbV9wXVwiLCBkZXNjcmlwdGlvbjogXCJcXFwiW21fcF1cXFwiXCIgfSxcbiAgICAgICAgICBmdW5jdGlvbih1KSB7cmV0dXJuIHt2YWx1ZTogMSwgdW5pdHM6IHtcIlttX3BdXCI6IDF9fTt9LFxuICAgICAgICAgIFwibVtIZ11cIixcbiAgICAgICAgICB7IHR5cGU6IFwibGl0ZXJhbFwiLCB2YWx1ZTogXCJtW0hnXVwiLCBkZXNjcmlwdGlvbjogXCJcXFwibVtIZ11cXFwiXCIgfSxcbiAgICAgICAgICBmdW5jdGlvbih1KSB7cmV0dXJuIHt2YWx1ZTogMSwgdW5pdHM6IHtcIm1bSGddXCI6IDF9fTt9LFxuICAgICAgICAgIFwiW3BjYV1cIixcbiAgICAgICAgICB7IHR5cGU6IFwibGl0ZXJhbFwiLCB2YWx1ZTogXCJbcGNhXVwiLCBkZXNjcmlwdGlvbjogXCJcXFwiW3BjYV1cXFwiXCIgfSxcbiAgICAgICAgICBmdW5jdGlvbih1KSB7cmV0dXJuIHt2YWx1ZTogMSwgdW5pdHM6IHtcIltwY2FdXCI6IDF9fTt9LFxuICAgICAgICAgIFwiW3BudF1cIixcbiAgICAgICAgICB7IHR5cGU6IFwibGl0ZXJhbFwiLCB2YWx1ZTogXCJbcG50XVwiLCBkZXNjcmlwdGlvbjogXCJcXFwiW3BudF1cXFwiXCIgfSxcbiAgICAgICAgICBmdW5jdGlvbih1KSB7cmV0dXJuIHt2YWx1ZTogMSwgdW5pdHM6IHtcIltwbnRdXCI6IDF9fTt9LFxuICAgICAgICAgIFwiW2xuZV1cIixcbiAgICAgICAgICB7IHR5cGU6IFwibGl0ZXJhbFwiLCB2YWx1ZTogXCJbbG5lXVwiLCBkZXNjcmlwdGlvbjogXCJcXFwiW2xuZV1cXFwiXCIgfSxcbiAgICAgICAgICBmdW5jdGlvbih1KSB7cmV0dXJuIHt2YWx1ZTogMSwgdW5pdHM6IHtcIltsbmVdXCI6IDF9fTt9LFxuICAgICAgICAgIFwiW0xQRl1cIixcbiAgICAgICAgICB7IHR5cGU6IFwibGl0ZXJhbFwiLCB2YWx1ZTogXCJbTFBGXVwiLCBkZXNjcmlwdGlvbjogXCJcXFwiW0xQRl1cXFwiXCIgfSxcbiAgICAgICAgICBmdW5jdGlvbih1KSB7cmV0dXJuIHt2YWx1ZTogMSwgdW5pdHM6IHtcIltMUEZdXCI6IDF9fTt9LFxuICAgICAgICAgIFwiW2Rlbl1cIixcbiAgICAgICAgICB7IHR5cGU6IFwibGl0ZXJhbFwiLCB2YWx1ZTogXCJbZGVuXVwiLCBkZXNjcmlwdGlvbjogXCJcXFwiW2Rlbl1cXFwiXCIgfSxcbiAgICAgICAgICBmdW5jdGlvbih1KSB7cmV0dXJuIHt2YWx1ZTogMSwgdW5pdHM6IHtcIltkZW5dXCI6IDF9fTt9LFxuICAgICAgICAgIFwiW3NjdF1cIixcbiAgICAgICAgICB7IHR5cGU6IFwibGl0ZXJhbFwiLCB2YWx1ZTogXCJbc2N0XVwiLCBkZXNjcmlwdGlvbjogXCJcXFwiW3NjdF1cXFwiXCIgfSxcbiAgICAgICAgICBmdW5jdGlvbih1KSB7cmV0dXJuIHt2YWx1ZTogMSwgdW5pdHM6IHtcIltzY3RdXCI6IDF9fTt9LFxuICAgICAgICAgIFwiW3R3cF1cIixcbiAgICAgICAgICB7IHR5cGU6IFwibGl0ZXJhbFwiLCB2YWx1ZTogXCJbdHdwXVwiLCBkZXNjcmlwdGlvbjogXCJcXFwiW3R3cF1cXFwiXCIgfSxcbiAgICAgICAgICBmdW5jdGlvbih1KSB7cmV0dXJuIHt2YWx1ZTogMSwgdW5pdHM6IHtcIlt0d3BdXCI6IDF9fTt9LFxuICAgICAgICAgIFwiW0J0dV1cIixcbiAgICAgICAgICB7IHR5cGU6IFwibGl0ZXJhbFwiLCB2YWx1ZTogXCJbQnR1XVwiLCBkZXNjcmlwdGlvbjogXCJcXFwiW0J0dV1cXFwiXCIgfSxcbiAgICAgICAgICBmdW5jdGlvbih1KSB7cmV0dXJuIHt2YWx1ZTogMSwgdW5pdHM6IHtcIltCdHVdXCI6IDF9fTt9LFxuICAgICAgICAgIFwiW01FVF1cIixcbiAgICAgICAgICB7IHR5cGU6IFwibGl0ZXJhbFwiLCB2YWx1ZTogXCJbTUVUXVwiLCBkZXNjcmlwdGlvbjogXCJcXFwiW01FVF1cXFwiXCIgfSxcbiAgICAgICAgICBmdW5jdGlvbih1KSB7cmV0dXJuIHt2YWx1ZTogMSwgdW5pdHM6IHtcIltNRVRdXCI6IDF9fTt9LFxuICAgICAgICAgIFwiW0hQRl1cIixcbiAgICAgICAgICB7IHR5cGU6IFwibGl0ZXJhbFwiLCB2YWx1ZTogXCJbSFBGXVwiLCBkZXNjcmlwdGlvbjogXCJcXFwiW0hQRl1cXFwiXCIgfSxcbiAgICAgICAgICBmdW5jdGlvbih1KSB7cmV0dXJuIHt2YWx1ZTogMSwgdW5pdHM6IHtcIltIUEZdXCI6IDF9fTt9LFxuICAgICAgICAgIFwiW2RycF1cIixcbiAgICAgICAgICB7IHR5cGU6IFwibGl0ZXJhbFwiLCB2YWx1ZTogXCJbZHJwXVwiLCBkZXNjcmlwdGlvbjogXCJcXFwiW2RycF1cXFwiXCIgfSxcbiAgICAgICAgICBmdW5jdGlvbih1KSB7cmV0dXJuIHt2YWx1ZTogMSwgdW5pdHM6IHtcIltkcnBdXCI6IDF9fTt9LFxuICAgICAgICAgIFwiW0FVXVwiLFxuICAgICAgICAgIHsgdHlwZTogXCJsaXRlcmFsXCIsIHZhbHVlOiBcIltBVV1cIiwgZGVzY3JpcHRpb246IFwiXFxcIltBVV1cXFwiXCIgfSxcbiAgICAgICAgICBmdW5jdGlvbih1KSB7cmV0dXJuIHt2YWx1ZTogMSwgdW5pdHM6IHtcIltBVV1cIjogMX19O30sXG4gICAgICAgICAgXCJbSVVdXCIsXG4gICAgICAgICAgeyB0eXBlOiBcImxpdGVyYWxcIiwgdmFsdWU6IFwiW0lVXVwiLCBkZXNjcmlwdGlvbjogXCJcXFwiW0lVXVxcXCJcIiB9LFxuICAgICAgICAgIGZ1bmN0aW9uKHUpIHtyZXR1cm4ge3ZhbHVlOiAxLCB1bml0czoge1wiW0lVXVwiOiAxfX07fSxcbiAgICAgICAgICBcIm1vX3NcIixcbiAgICAgICAgICB7IHR5cGU6IFwibGl0ZXJhbFwiLCB2YWx1ZTogXCJtb19zXCIsIGRlc2NyaXB0aW9uOiBcIlxcXCJtb19zXFxcIlwiIH0sXG4gICAgICAgICAgZnVuY3Rpb24odSkge3JldHVybiB7dmFsdWU6IDEsIHVuaXRzOiB7XCJtb19zXCI6IDF9fTt9LFxuICAgICAgICAgIFwiW2dyXVwiLFxuICAgICAgICAgIHsgdHlwZTogXCJsaXRlcmFsXCIsIHZhbHVlOiBcIltncl1cIiwgZGVzY3JpcHRpb246IFwiXFxcIltncl1cXFwiXCIgfSxcbiAgICAgICAgICBmdW5jdGlvbih1KSB7cmV0dXJuIHt2YWx1ZTogMSwgdW5pdHM6IHtcIltncl1cIjogMX19O30sXG4gICAgICAgICAgXCJjaXJjXCIsXG4gICAgICAgICAgeyB0eXBlOiBcImxpdGVyYWxcIiwgdmFsdWU6IFwiY2lyY1wiLCBkZXNjcmlwdGlvbjogXCJcXFwiY2lyY1xcXCJcIiB9LFxuICAgICAgICAgIGZ1bmN0aW9uKHUpIHtyZXR1cm4ge3ZhbHVlOiAxLCB1bml0czoge1wiY2lyY1wiOiAxfX07fSxcbiAgICAgICAgICBcIltwaV1cIixcbiAgICAgICAgICB7IHR5cGU6IFwibGl0ZXJhbFwiLCB2YWx1ZTogXCJbcGldXCIsIGRlc2NyaXB0aW9uOiBcIlxcXCJbcGldXFxcIlwiIH0sXG4gICAgICAgICAgZnVuY3Rpb24odSkge3JldHVybiB7dmFsdWU6IDEsIHVuaXRzOiB7XCJbcGldXCI6IDF9fTt9LFxuICAgICAgICAgIFwiW0VVXVwiLFxuICAgICAgICAgIHsgdHlwZTogXCJsaXRlcmFsXCIsIHZhbHVlOiBcIltFVV1cIiwgZGVzY3JpcHRpb246IFwiXFxcIltFVV1cXFwiXCIgfSxcbiAgICAgICAgICBmdW5jdGlvbih1KSB7cmV0dXJuIHt2YWx1ZTogMSwgdW5pdHM6IHtcIltFVV1cIjogMX19O30sXG4gICAgICAgICAgXCJbTGZdXCIsXG4gICAgICAgICAgeyB0eXBlOiBcImxpdGVyYWxcIiwgdmFsdWU6IFwiW0xmXVwiLCBkZXNjcmlwdGlvbjogXCJcXFwiW0xmXVxcXCJcIiB9LFxuICAgICAgICAgIGZ1bmN0aW9uKHUpIHtyZXR1cm4ge3ZhbHVlOiAxLCB1bml0czoge1wiW0xmXVwiOiAxfX07fSxcbiAgICAgICAgICBcIm1vX2pcIixcbiAgICAgICAgICB7IHR5cGU6IFwibGl0ZXJhbFwiLCB2YWx1ZTogXCJtb19qXCIsIGRlc2NyaXB0aW9uOiBcIlxcXCJtb19qXFxcIlwiIH0sXG4gICAgICAgICAgZnVuY3Rpb24odSkge3JldHVybiB7dmFsdWU6IDEsIHVuaXRzOiB7XCJtb19qXCI6IDF9fTt9LFxuICAgICAgICAgIFwiQltXXVwiLFxuICAgICAgICAgIHsgdHlwZTogXCJsaXRlcmFsXCIsIHZhbHVlOiBcIkJbV11cIiwgZGVzY3JpcHRpb246IFwiXFxcIkJbV11cXFwiXCIgfSxcbiAgICAgICAgICBmdW5jdGlvbih1KSB7cmV0dXJuIHt2YWx1ZTogMSwgdW5pdHM6IHtcIkJbV11cIjogMX19O30sXG4gICAgICAgICAgXCJCW1ZdXCIsXG4gICAgICAgICAgeyB0eXBlOiBcImxpdGVyYWxcIiwgdmFsdWU6IFwiQltWXVwiLCBkZXNjcmlwdGlvbjogXCJcXFwiQltWXVxcXCJcIiB9LFxuICAgICAgICAgIGZ1bmN0aW9uKHUpIHtyZXR1cm4ge3ZhbHVlOiAxLCB1bml0czoge1wiQltWXVwiOiAxfX07fSxcbiAgICAgICAgICBcIm1vX2dcIixcbiAgICAgICAgICB7IHR5cGU6IFwibGl0ZXJhbFwiLCB2YWx1ZTogXCJtb19nXCIsIGRlc2NyaXB0aW9uOiBcIlxcXCJtb19nXFxcIlwiIH0sXG4gICAgICAgICAgZnVuY3Rpb24odSkge3JldHVybiB7dmFsdWU6IDEsIHVuaXRzOiB7XCJtb19nXCI6IDF9fTt9LFxuICAgICAgICAgIFwiW2lVXVwiLFxuICAgICAgICAgIHsgdHlwZTogXCJsaXRlcmFsXCIsIHZhbHVlOiBcIltpVV1cIiwgZGVzY3JpcHRpb246IFwiXFxcIltpVV1cXFwiXCIgfSxcbiAgICAgICAgICBmdW5jdGlvbih1KSB7cmV0dXJuIHt2YWx1ZTogMSwgdW5pdHM6IHtcIltpVV1cIjogMX19O30sXG4gICAgICAgICAgXCJbSFBdXCIsXG4gICAgICAgICAgeyB0eXBlOiBcImxpdGVyYWxcIiwgdmFsdWU6IFwiW0hQXVwiLCBkZXNjcmlwdGlvbjogXCJcXFwiW0hQXVxcXCJcIiB9LFxuICAgICAgICAgIGZ1bmN0aW9uKHUpIHtyZXR1cm4ge3ZhbHVlOiAxLCB1bml0czoge1wiW0hQXVwiOiAxfX07fSxcbiAgICAgICAgICBcIltDaF1cIixcbiAgICAgICAgICB7IHR5cGU6IFwibGl0ZXJhbFwiLCB2YWx1ZTogXCJbQ2hdXCIsIGRlc2NyaXB0aW9uOiBcIlxcXCJbQ2hdXFxcIlwiIH0sXG4gICAgICAgICAgZnVuY3Rpb24odSkge3JldHVybiB7dmFsdWU6IDEsIHVuaXRzOiB7XCJbQ2hdXCI6IDF9fTt9LFxuICAgICAgICAgIFwiW2x5XVwiLFxuICAgICAgICAgIHsgdHlwZTogXCJsaXRlcmFsXCIsIHZhbHVlOiBcIltseV1cIiwgZGVzY3JpcHRpb246IFwiXFxcIltseV1cXFwiXCIgfSxcbiAgICAgICAgICBmdW5jdGlvbih1KSB7cmV0dXJuIHt2YWx1ZTogMSwgdW5pdHM6IHtcIltseV1cIjogMX19O30sXG4gICAgICAgICAgXCJbcEhdXCIsXG4gICAgICAgICAgeyB0eXBlOiBcImxpdGVyYWxcIiwgdmFsdWU6IFwiW3BIXVwiLCBkZXNjcmlwdGlvbjogXCJcXFwiW3BIXVxcXCJcIiB9LFxuICAgICAgICAgIGZ1bmN0aW9uKHUpIHtyZXR1cm4ge3ZhbHVlOiAxLCB1bml0czoge1wiW3BIXVwiOiAxfX07fSxcbiAgICAgICAgICBcImFfalwiLFxuICAgICAgICAgIHsgdHlwZTogXCJsaXRlcmFsXCIsIHZhbHVlOiBcImFfalwiLCBkZXNjcmlwdGlvbjogXCJcXFwiYV9qXFxcIlwiIH0sXG4gICAgICAgICAgZnVuY3Rpb24odSkge3JldHVybiB7dmFsdWU6IDEsIHVuaXRzOiB7XCJhX2pcIjogMX19O30sXG4gICAgICAgICAgXCJyYWRcIixcbiAgICAgICAgICB7IHR5cGU6IFwibGl0ZXJhbFwiLCB2YWx1ZTogXCJyYWRcIiwgZGVzY3JpcHRpb246IFwiXFxcInJhZFxcXCJcIiB9LFxuICAgICAgICAgIGZ1bmN0aW9uKHUpIHtyZXR1cm4ge3ZhbHVlOiAxLCB1bml0czoge1wicmFkXCI6IDF9fTt9LFxuICAgICAgICAgIFwiYV90XCIsXG4gICAgICAgICAgeyB0eXBlOiBcImxpdGVyYWxcIiwgdmFsdWU6IFwiYV90XCIsIGRlc2NyaXB0aW9uOiBcIlxcXCJhX3RcXFwiXCIgfSxcbiAgICAgICAgICBmdW5jdGlvbih1KSB7cmV0dXJuIHt2YWx1ZTogMSwgdW5pdHM6IHtcImFfdFwiOiAxfX07fSxcbiAgICAgICAgICBcIk9obVwiLFxuICAgICAgICAgIHsgdHlwZTogXCJsaXRlcmFsXCIsIHZhbHVlOiBcIk9obVwiLCBkZXNjcmlwdGlvbjogXCJcXFwiT2htXFxcIlwiIH0sXG4gICAgICAgICAgZnVuY3Rpb24odSkge3JldHVybiB7dmFsdWU6IDEsIHVuaXRzOiB7XCJPaG1cIjogMX19O30sXG4gICAgICAgICAgXCJzcGhcIixcbiAgICAgICAgICB7IHR5cGU6IFwibGl0ZXJhbFwiLCB2YWx1ZTogXCJzcGhcIiwgZGVzY3JpcHRpb246IFwiXFxcInNwaFxcXCJcIiB9LFxuICAgICAgICAgIGZ1bmN0aW9uKHUpIHtyZXR1cm4ge3ZhbHVlOiAxLCB1bml0czoge1wic3BoXCI6IDF9fTt9LFxuICAgICAgICAgIFwiYml0XCIsXG4gICAgICAgICAgeyB0eXBlOiBcImxpdGVyYWxcIiwgdmFsdWU6IFwiYml0XCIsIGRlc2NyaXB0aW9uOiBcIlxcXCJiaXRcXFwiXCIgfSxcbiAgICAgICAgICBmdW5jdGlvbih1KSB7cmV0dXJuIHt2YWx1ZTogMSwgdW5pdHM6IHtcImJpdFwiOiAxfX07fSxcbiAgICAgICAgICBcIm1ob1wiLFxuICAgICAgICAgIHsgdHlwZTogXCJsaXRlcmFsXCIsIHZhbHVlOiBcIm1ob1wiLCBkZXNjcmlwdGlvbjogXCJcXFwibWhvXFxcIlwiIH0sXG4gICAgICAgICAgZnVuY3Rpb24odSkge3JldHVybiB7dmFsdWU6IDEsIHVuaXRzOiB7XCJtaG9cIjogMX19O30sXG4gICAgICAgICAgXCJtaW5cIixcbiAgICAgICAgICB7IHR5cGU6IFwibGl0ZXJhbFwiLCB2YWx1ZTogXCJtaW5cIiwgZGVzY3JpcHRpb246IFwiXFxcIm1pblxcXCJcIiB9LFxuICAgICAgICAgIGZ1bmN0aW9uKHUpIHtyZXR1cm4ge3ZhbHVlOiAxLCB1bml0czoge1wibWluXCI6IDF9fTt9LFxuICAgICAgICAgIFwibW9sXCIsXG4gICAgICAgICAgeyB0eXBlOiBcImxpdGVyYWxcIiwgdmFsdWU6IFwibW9sXCIsIGRlc2NyaXB0aW9uOiBcIlxcXCJtb2xcXFwiXCIgfSxcbiAgICAgICAgICBmdW5jdGlvbih1KSB7cmV0dXJuIHt2YWx1ZTogMSwgdW5pdHM6IHtcIm1vbFwiOiAxfX07fSxcbiAgICAgICAgICBcImRlZ1wiLFxuICAgICAgICAgIHsgdHlwZTogXCJsaXRlcmFsXCIsIHZhbHVlOiBcImRlZ1wiLCBkZXNjcmlwdGlvbjogXCJcXFwiZGVnXFxcIlwiIH0sXG4gICAgICAgICAgZnVuY3Rpb24odSkge3JldHVybiB7dmFsdWU6IDEsIHVuaXRzOiB7XCJkZWdcIjogMX19O30sXG4gICAgICAgICAgXCJnb25cIixcbiAgICAgICAgICB7IHR5cGU6IFwibGl0ZXJhbFwiLCB2YWx1ZTogXCJnb25cIiwgZGVzY3JpcHRpb246IFwiXFxcImdvblxcXCJcIiB9LFxuICAgICAgICAgIGZ1bmN0aW9uKHUpIHtyZXR1cm4ge3ZhbHVlOiAxLCB1bml0czoge1wiZ29uXCI6IDF9fTt9LFxuICAgICAgICAgIFwiQ2VsXCIsXG4gICAgICAgICAgeyB0eXBlOiBcImxpdGVyYWxcIiwgdmFsdWU6IFwiQ2VsXCIsIGRlc2NyaXB0aW9uOiBcIlxcXCJDZWxcXFwiXCIgfSxcbiAgICAgICAgICBmdW5jdGlvbih1KSB7cmV0dXJuIHt2YWx1ZTogMSwgdW5pdHM6IHtcIkNlbFwiOiAxfX07fSxcbiAgICAgICAgICBcImthdFwiLFxuICAgICAgICAgIHsgdHlwZTogXCJsaXRlcmFsXCIsIHZhbHVlOiBcImthdFwiLCBkZXNjcmlwdGlvbjogXCJcXFwia2F0XFxcIlwiIH0sXG4gICAgICAgICAgZnVuY3Rpb24odSkge3JldHVybiB7dmFsdWU6IDEsIHVuaXRzOiB7XCJrYXRcIjogMX19O30sXG4gICAgICAgICAgXCJhdHRcIixcbiAgICAgICAgICB7IHR5cGU6IFwibGl0ZXJhbFwiLCB2YWx1ZTogXCJhdHRcIiwgZGVzY3JpcHRpb246IFwiXFxcImF0dFxcXCJcIiB9LFxuICAgICAgICAgIGZ1bmN0aW9uKHUpIHtyZXR1cm4ge3ZhbHVlOiAxLCB1bml0czoge1wiYXR0XCI6IDF9fTt9LFxuICAgICAgICAgIFwib3NtXCIsXG4gICAgICAgICAgeyB0eXBlOiBcImxpdGVyYWxcIiwgdmFsdWU6IFwib3NtXCIsIGRlc2NyaXB0aW9uOiBcIlxcXCJvc21cXFwiXCIgfSxcbiAgICAgICAgICBmdW5jdGlvbih1KSB7cmV0dXJuIHt2YWx1ZTogMSwgdW5pdHM6IHtcIm9zbVwiOiAxfX07fSxcbiAgICAgICAgICBcInRleFwiLFxuICAgICAgICAgIHsgdHlwZTogXCJsaXRlcmFsXCIsIHZhbHVlOiBcInRleFwiLCBkZXNjcmlwdGlvbjogXCJcXFwidGV4XFxcIlwiIH0sXG4gICAgICAgICAgZnVuY3Rpb24odSkge3JldHVybiB7dmFsdWU6IDEsIHVuaXRzOiB7XCJ0ZXhcIjogMX19O30sXG4gICAgICAgICAgXCJjYWxcIixcbiAgICAgICAgICB7IHR5cGU6IFwibGl0ZXJhbFwiLCB2YWx1ZTogXCJjYWxcIiwgZGVzY3JpcHRpb246IFwiXFxcImNhbFxcXCJcIiB9LFxuICAgICAgICAgIGZ1bmN0aW9uKHUpIHtyZXR1cm4ge3ZhbHVlOiAxLCB1bml0czoge1wiY2FsXCI6IDF9fTt9LFxuICAgICAgICAgIFwiUkVNXCIsXG4gICAgICAgICAgeyB0eXBlOiBcImxpdGVyYWxcIiwgdmFsdWU6IFwiUkVNXCIsIGRlc2NyaXB0aW9uOiBcIlxcXCJSRU1cXFwiXCIgfSxcbiAgICAgICAgICBmdW5jdGlvbih1KSB7cmV0dXJuIHt2YWx1ZTogMSwgdW5pdHM6IHtcIlJFTVwiOiAxfX07fSxcbiAgICAgICAgICBcIlJBRFwiLFxuICAgICAgICAgIHsgdHlwZTogXCJsaXRlcmFsXCIsIHZhbHVlOiBcIlJBRFwiLCBkZXNjcmlwdGlvbjogXCJcXFwiUkFEXFxcIlwiIH0sXG4gICAgICAgICAgZnVuY3Rpb24odSkge3JldHVybiB7dmFsdWU6IDEsIHVuaXRzOiB7XCJSQURcIjogMX19O30sXG4gICAgICAgICAgXCJhX2dcIixcbiAgICAgICAgICB7IHR5cGU6IFwibGl0ZXJhbFwiLCB2YWx1ZTogXCJhX2dcIiwgZGVzY3JpcHRpb246IFwiXFxcImFfZ1xcXCJcIiB9LFxuICAgICAgICAgIGZ1bmN0aW9uKHUpIHtyZXR1cm4ge3ZhbHVlOiAxLCB1bml0czoge1wiYV9nXCI6IDF9fTt9LFxuICAgICAgICAgIFwiTG1iXCIsXG4gICAgICAgICAgeyB0eXBlOiBcImxpdGVyYWxcIiwgdmFsdWU6IFwiTG1iXCIsIGRlc2NyaXB0aW9uOiBcIlxcXCJMbWJcXFwiXCIgfSxcbiAgICAgICAgICBmdW5jdGlvbih1KSB7cmV0dXJuIHt2YWx1ZTogMSwgdW5pdHM6IHtcIkxtYlwiOiAxfX07fSxcbiAgICAgICAgICBcImF0bVwiLFxuICAgICAgICAgIHsgdHlwZTogXCJsaXRlcmFsXCIsIHZhbHVlOiBcImF0bVwiLCBkZXNjcmlwdGlvbjogXCJcXFwiYXRtXFxcIlwiIH0sXG4gICAgICAgICAgZnVuY3Rpb24odSkge3JldHVybiB7dmFsdWU6IDEsIHVuaXRzOiB7XCJhdG1cIjogMX19O30sXG4gICAgICAgICAgXCJlcmdcIixcbiAgICAgICAgICB7IHR5cGU6IFwibGl0ZXJhbFwiLCB2YWx1ZTogXCJlcmdcIiwgZGVzY3JpcHRpb246IFwiXFxcImVyZ1xcXCJcIiB9LFxuICAgICAgICAgIGZ1bmN0aW9uKHUpIHtyZXR1cm4ge3ZhbHVlOiAxLCB1bml0czoge1wiZXJnXCI6IDF9fTt9LFxuICAgICAgICAgIFwiZHluXCIsXG4gICAgICAgICAgeyB0eXBlOiBcImxpdGVyYWxcIiwgdmFsdWU6IFwiZHluXCIsIGRlc2NyaXB0aW9uOiBcIlxcXCJkeW5cXFwiXCIgfSxcbiAgICAgICAgICBmdW5jdGlvbih1KSB7cmV0dXJuIHt2YWx1ZTogMSwgdW5pdHM6IHtcImR5blwiOiAxfX07fSxcbiAgICAgICAgICBcIkdhbFwiLFxuICAgICAgICAgIHsgdHlwZTogXCJsaXRlcmFsXCIsIHZhbHVlOiBcIkdhbFwiLCBkZXNjcmlwdGlvbjogXCJcXFwiR2FsXFxcIlwiIH0sXG4gICAgICAgICAgZnVuY3Rpb24odSkge3JldHVybiB7dmFsdWU6IDEsIHVuaXRzOiB7XCJHYWxcIjogMX19O30sXG4gICAgICAgICAgXCIxMF5cIixcbiAgICAgICAgICB7IHR5cGU6IFwibGl0ZXJhbFwiLCB2YWx1ZTogXCIxMF5cIiwgZGVzY3JpcHRpb246IFwiXFxcIjEwXlxcXCJcIiB9LFxuICAgICAgICAgIGZ1bmN0aW9uKHUpIHtyZXR1cm4ge3ZhbHVlOiAxLCB1bml0czoge1wiMTBeXCI6IDF9fTt9LFxuICAgICAgICAgIFwiMTAqXCIsXG4gICAgICAgICAgeyB0eXBlOiBcImxpdGVyYWxcIiwgdmFsdWU6IFwiMTAqXCIsIGRlc2NyaXB0aW9uOiBcIlxcXCIxMCpcXFwiXCIgfSxcbiAgICAgICAgICBmdW5jdGlvbih1KSB7cmV0dXJuIHt2YWx1ZTogMSwgdW5pdHM6IHtcIjEwKlwiOiAxfX07fSxcbiAgICAgICAgICBcIltTXVwiLFxuICAgICAgICAgIHsgdHlwZTogXCJsaXRlcmFsXCIsIHZhbHVlOiBcIltTXVwiLCBkZXNjcmlwdGlvbjogXCJcXFwiW1NdXFxcIlwiIH0sXG4gICAgICAgICAgZnVuY3Rpb24odSkge3JldHVybiB7dmFsdWU6IDEsIHVuaXRzOiB7XCJbU11cIjogMX19O30sXG4gICAgICAgICAgXCJbZ11cIixcbiAgICAgICAgICB7IHR5cGU6IFwibGl0ZXJhbFwiLCB2YWx1ZTogXCJbZ11cIiwgZGVzY3JpcHRpb246IFwiXFxcIltnXVxcXCJcIiB9LFxuICAgICAgICAgIGZ1bmN0aW9uKHUpIHtyZXR1cm4ge3ZhbHVlOiAxLCB1bml0czoge1wiW2ddXCI6IDF9fTt9LFxuICAgICAgICAgIFwiW0ddXCIsXG4gICAgICAgICAgeyB0eXBlOiBcImxpdGVyYWxcIiwgdmFsdWU6IFwiW0ddXCIsIGRlc2NyaXB0aW9uOiBcIlxcXCJbR11cXFwiXCIgfSxcbiAgICAgICAgICBmdW5jdGlvbih1KSB7cmV0dXJuIHt2YWx1ZTogMSwgdW5pdHM6IHtcIltHXVwiOiAxfX07fSxcbiAgICAgICAgICBcIltlXVwiLFxuICAgICAgICAgIHsgdHlwZTogXCJsaXRlcmFsXCIsIHZhbHVlOiBcIltlXVwiLCBkZXNjcmlwdGlvbjogXCJcXFwiW2VdXFxcIlwiIH0sXG4gICAgICAgICAgZnVuY3Rpb24odSkge3JldHVybiB7dmFsdWU6IDEsIHVuaXRzOiB7XCJbZV1cIjogMX19O30sXG4gICAgICAgICAgXCJba11cIixcbiAgICAgICAgICB7IHR5cGU6IFwibGl0ZXJhbFwiLCB2YWx1ZTogXCJba11cIiwgZGVzY3JpcHRpb246IFwiXFxcIltrXVxcXCJcIiB9LFxuICAgICAgICAgIGZ1bmN0aW9uKHUpIHtyZXR1cm4ge3ZhbHVlOiAxLCB1bml0czoge1wiW2tdXCI6IDF9fTt9LFxuICAgICAgICAgIFwiW2hdXCIsXG4gICAgICAgICAgeyB0eXBlOiBcImxpdGVyYWxcIiwgdmFsdWU6IFwiW2hdXCIsIGRlc2NyaXB0aW9uOiBcIlxcXCJbaF1cXFwiXCIgfSxcbiAgICAgICAgICBmdW5jdGlvbih1KSB7cmV0dXJuIHt2YWx1ZTogMSwgdW5pdHM6IHtcIltoXVwiOiAxfX07fSxcbiAgICAgICAgICBcIltjXVwiLFxuICAgICAgICAgIHsgdHlwZTogXCJsaXRlcmFsXCIsIHZhbHVlOiBcIltjXVwiLCBkZXNjcmlwdGlvbjogXCJcXFwiW2NdXFxcIlwiIH0sXG4gICAgICAgICAgZnVuY3Rpb24odSkge3JldHVybiB7dmFsdWU6IDEsIHVuaXRzOiB7XCJbY11cIjogMX19O30sXG4gICAgICAgICAgXCJiYXJcIixcbiAgICAgICAgICB7IHR5cGU6IFwibGl0ZXJhbFwiLCB2YWx1ZTogXCJiYXJcIiwgZGVzY3JpcHRpb246IFwiXFxcImJhclxcXCJcIiB9LFxuICAgICAgICAgIGZ1bmN0aW9uKHUpIHtyZXR1cm4ge3ZhbHVlOiAxLCB1bml0czoge1wiYmFyXCI6IDF9fTt9LFxuICAgICAgICAgIFwibG1cIixcbiAgICAgICAgICB7IHR5cGU6IFwibGl0ZXJhbFwiLCB2YWx1ZTogXCJsbVwiLCBkZXNjcmlwdGlvbjogXCJcXFwibG1cXFwiXCIgfSxcbiAgICAgICAgICBmdW5jdGlvbih1KSB7cmV0dXJuIHt2YWx1ZTogMSwgdW5pdHM6IHtcImxtXCI6IDF9fTt9LFxuICAgICAgICAgIFwiQ2lcIixcbiAgICAgICAgICB7IHR5cGU6IFwibGl0ZXJhbFwiLCB2YWx1ZTogXCJDaVwiLCBkZXNjcmlwdGlvbjogXCJcXFwiQ2lcXFwiXCIgfSxcbiAgICAgICAgICBmdW5jdGlvbih1KSB7cmV0dXJuIHt2YWx1ZTogMSwgdW5pdHM6IHtcIkNpXCI6IDF9fTt9LFxuICAgICAgICAgIFwicGhcIixcbiAgICAgICAgICB7IHR5cGU6IFwibGl0ZXJhbFwiLCB2YWx1ZTogXCJwaFwiLCBkZXNjcmlwdGlvbjogXCJcXFwicGhcXFwiXCIgfSxcbiAgICAgICAgICBmdW5jdGlvbih1KSB7cmV0dXJuIHt2YWx1ZTogMSwgdW5pdHM6IHtcInBoXCI6IDF9fTt9LFxuICAgICAgICAgIFwiY2RcIixcbiAgICAgICAgICB7IHR5cGU6IFwibGl0ZXJhbFwiLCB2YWx1ZTogXCJjZFwiLCBkZXNjcmlwdGlvbjogXCJcXFwiY2RcXFwiXCIgfSxcbiAgICAgICAgICBmdW5jdGlvbih1KSB7cmV0dXJuIHt2YWx1ZTogMSwgdW5pdHM6IHtcImNkXCI6IDF9fTt9LFxuICAgICAgICAgIFwiQW9cIixcbiAgICAgICAgICB7IHR5cGU6IFwibGl0ZXJhbFwiLCB2YWx1ZTogXCJBb1wiLCBkZXNjcmlwdGlvbjogXCJcXFwiQW9cXFwiXCIgfSxcbiAgICAgICAgICBmdW5jdGlvbih1KSB7cmV0dXJuIHt2YWx1ZTogMSwgdW5pdHM6IHtcIkFvXCI6IDF9fTt9LFxuICAgICAgICAgIFwiV2JcIixcbiAgICAgICAgICB7IHR5cGU6IFwibGl0ZXJhbFwiLCB2YWx1ZTogXCJXYlwiLCBkZXNjcmlwdGlvbjogXCJcXFwiV2JcXFwiXCIgfSxcbiAgICAgICAgICBmdW5jdGlvbih1KSB7cmV0dXJuIHt2YWx1ZTogMSwgdW5pdHM6IHtcIldiXCI6IDF9fTt9LFxuICAgICAgICAgIFwiR2JcIixcbiAgICAgICAgICB7IHR5cGU6IFwibGl0ZXJhbFwiLCB2YWx1ZTogXCJHYlwiLCBkZXNjcmlwdGlvbjogXCJcXFwiR2JcXFwiXCIgfSxcbiAgICAgICAgICBmdW5jdGlvbih1KSB7cmV0dXJuIHt2YWx1ZTogMSwgdW5pdHM6IHtcIkdiXCI6IDF9fTt9LFxuICAgICAgICAgIFwiT2VcIixcbiAgICAgICAgICB7IHR5cGU6IFwibGl0ZXJhbFwiLCB2YWx1ZTogXCJPZVwiLCBkZXNjcmlwdGlvbjogXCJcXFwiT2VcXFwiXCIgfSxcbiAgICAgICAgICBmdW5jdGlvbih1KSB7cmV0dXJuIHt2YWx1ZTogMSwgdW5pdHM6IHtcIk9lXCI6IDF9fTt9LFxuICAgICAgICAgIFwibHhcIixcbiAgICAgICAgICB7IHR5cGU6IFwibGl0ZXJhbFwiLCB2YWx1ZTogXCJseFwiLCBkZXNjcmlwdGlvbjogXCJcXFwibHhcXFwiXCIgfSxcbiAgICAgICAgICBmdW5jdGlvbih1KSB7cmV0dXJuIHt2YWx1ZTogMSwgdW5pdHM6IHtcImx4XCI6IDF9fTt9LFxuICAgICAgICAgIFwiTXhcIixcbiAgICAgICAgICB7IHR5cGU6IFwibGl0ZXJhbFwiLCB2YWx1ZTogXCJNeFwiLCBkZXNjcmlwdGlvbjogXCJcXFwiTXhcXFwiXCIgfSxcbiAgICAgICAgICBmdW5jdGlvbih1KSB7cmV0dXJuIHt2YWx1ZTogMSwgdW5pdHM6IHtcIk14XCI6IDF9fTt9LFxuICAgICAgICAgIFwiU3RcIixcbiAgICAgICAgICB7IHR5cGU6IFwibGl0ZXJhbFwiLCB2YWx1ZTogXCJTdFwiLCBkZXNjcmlwdGlvbjogXCJcXFwiU3RcXFwiXCIgfSxcbiAgICAgICAgICBmdW5jdGlvbih1KSB7cmV0dXJuIHt2YWx1ZTogMSwgdW5pdHM6IHtcIlN0XCI6IDF9fTt9LFxuICAgICAgICAgIFwiQmlcIixcbiAgICAgICAgICB7IHR5cGU6IFwibGl0ZXJhbFwiLCB2YWx1ZTogXCJCaVwiLCBkZXNjcmlwdGlvbjogXCJcXFwiQmlcXFwiXCIgfSxcbiAgICAgICAgICBmdW5jdGlvbih1KSB7cmV0dXJuIHt2YWx1ZTogMSwgdW5pdHM6IHtcIkJpXCI6IDF9fTt9LFxuICAgICAgICAgIFwiQnFcIixcbiAgICAgICAgICB7IHR5cGU6IFwibGl0ZXJhbFwiLCB2YWx1ZTogXCJCcVwiLCBkZXNjcmlwdGlvbjogXCJcXFwiQnFcXFwiXCIgfSxcbiAgICAgICAgICBmdW5jdGlvbih1KSB7cmV0dXJuIHt2YWx1ZTogMSwgdW5pdHM6IHtcIkJxXCI6IDF9fTt9LFxuICAgICAgICAgIFwiTnBcIixcbiAgICAgICAgICB7IHR5cGU6IFwibGl0ZXJhbFwiLCB2YWx1ZTogXCJOcFwiLCBkZXNjcmlwdGlvbjogXCJcXFwiTnBcXFwiXCIgfSxcbiAgICAgICAgICBmdW5jdGlvbih1KSB7cmV0dXJuIHt2YWx1ZTogMSwgdW5pdHM6IHtcIk5wXCI6IDF9fTt9LFxuICAgICAgICAgIFwiQVVcIixcbiAgICAgICAgICB7IHR5cGU6IFwibGl0ZXJhbFwiLCB2YWx1ZTogXCJBVVwiLCBkZXNjcmlwdGlvbjogXCJcXFwiQVVcXFwiXCIgfSxcbiAgICAgICAgICBmdW5jdGlvbih1KSB7cmV0dXJuIHt2YWx1ZTogMSwgdW5pdHM6IHtcIkFVXCI6IDF9fTt9LFxuICAgICAgICAgIFwibW9cIixcbiAgICAgICAgICB7IHR5cGU6IFwibGl0ZXJhbFwiLCB2YWx1ZTogXCJtb1wiLCBkZXNjcmlwdGlvbjogXCJcXFwibW9cXFwiXCIgfSxcbiAgICAgICAgICBmdW5jdGlvbih1KSB7cmV0dXJuIHt2YWx1ZTogMSwgdW5pdHM6IHtcIm1vXCI6IDF9fTt9LFxuICAgICAgICAgIFwiS3lcIixcbiAgICAgICAgICB7IHR5cGU6IFwibGl0ZXJhbFwiLCB2YWx1ZTogXCJLeVwiLCBkZXNjcmlwdGlvbjogXCJcXFwiS3lcXFwiXCIgfSxcbiAgICAgICAgICBmdW5jdGlvbih1KSB7cmV0dXJuIHt2YWx1ZTogMSwgdW5pdHM6IHtcIkt5XCI6IDF9fTt9LFxuICAgICAgICAgIFwiZ2ZcIixcbiAgICAgICAgICB7IHR5cGU6IFwibGl0ZXJhbFwiLCB2YWx1ZTogXCJnZlwiLCBkZXNjcmlwdGlvbjogXCJcXFwiZ2ZcXFwiXCIgfSxcbiAgICAgICAgICBmdW5jdGlvbih1KSB7cmV0dXJuIHt2YWx1ZTogMSwgdW5pdHM6IHtcImdmXCI6IDF9fTt9LFxuICAgICAgICAgIFwid2tcIixcbiAgICAgICAgICB7IHR5cGU6IFwibGl0ZXJhbFwiLCB2YWx1ZTogXCJ3a1wiLCBkZXNjcmlwdGlvbjogXCJcXFwid2tcXFwiXCIgfSxcbiAgICAgICAgICBmdW5jdGlvbih1KSB7cmV0dXJuIHt2YWx1ZTogMSwgdW5pdHM6IHtcIndrXCI6IDF9fTt9LFxuICAgICAgICAgIFwiUGFcIixcbiAgICAgICAgICB7IHR5cGU6IFwibGl0ZXJhbFwiLCB2YWx1ZTogXCJQYVwiLCBkZXNjcmlwdGlvbjogXCJcXFwiUGFcXFwiXCIgfSxcbiAgICAgICAgICBmdW5jdGlvbih1KSB7cmV0dXJuIHt2YWx1ZTogMSwgdW5pdHM6IHtcIlBhXCI6IDF9fTt9LFxuICAgICAgICAgIFwiZyVcIixcbiAgICAgICAgICB7IHR5cGU6IFwibGl0ZXJhbFwiLCB2YWx1ZTogXCJnJVwiLCBkZXNjcmlwdGlvbjogXCJcXFwiZyVcXFwiXCIgfSxcbiAgICAgICAgICBmdW5jdGlvbih1KSB7cmV0dXJuIHt2YWx1ZTogMSwgdW5pdHM6IHtcImclXCI6IDF9fTt9LFxuICAgICAgICAgIFwic3JcIixcbiAgICAgICAgICB7IHR5cGU6IFwibGl0ZXJhbFwiLCB2YWx1ZTogXCJzclwiLCBkZXNjcmlwdGlvbjogXCJcXFwic3JcXFwiXCIgfSxcbiAgICAgICAgICBmdW5jdGlvbih1KSB7cmV0dXJuIHt2YWx1ZTogMSwgdW5pdHM6IHtcInNyXCI6IDF9fTt9LFxuICAgICAgICAgIFwiQmRcIixcbiAgICAgICAgICB7IHR5cGU6IFwibGl0ZXJhbFwiLCB2YWx1ZTogXCJCZFwiLCBkZXNjcmlwdGlvbjogXCJcXFwiQmRcXFwiXCIgfSxcbiAgICAgICAgICBmdW5jdGlvbih1KSB7cmV0dXJuIHt2YWx1ZTogMSwgdW5pdHM6IHtcIkJkXCI6IDF9fTt9LFxuICAgICAgICAgIFwiZXFcIixcbiAgICAgICAgICB7IHR5cGU6IFwibGl0ZXJhbFwiLCB2YWx1ZTogXCJlcVwiLCBkZXNjcmlwdGlvbjogXCJcXFwiZXFcXFwiXCIgfSxcbiAgICAgICAgICBmdW5jdGlvbih1KSB7cmV0dXJuIHt2YWx1ZTogMSwgdW5pdHM6IHtcImVxXCI6IDF9fTt9LFxuICAgICAgICAgIFwiQnlcIixcbiAgICAgICAgICB7IHR5cGU6IFwibGl0ZXJhbFwiLCB2YWx1ZTogXCJCeVwiLCBkZXNjcmlwdGlvbjogXCJcXFwiQnlcXFwiXCIgfSxcbiAgICAgICAgICBmdW5jdGlvbih1KSB7cmV0dXJuIHt2YWx1ZTogMSwgdW5pdHM6IHtcIkJ5XCI6IDF9fTt9LFxuICAgICAgICAgIFwiSHpcIixcbiAgICAgICAgICB7IHR5cGU6IFwibGl0ZXJhbFwiLCB2YWx1ZTogXCJIelwiLCBkZXNjcmlwdGlvbjogXCJcXFwiSHpcXFwiXCIgfSxcbiAgICAgICAgICBmdW5jdGlvbih1KSB7cmV0dXJuIHt2YWx1ZTogMSwgdW5pdHM6IHtcIkh6XCI6IDF9fTt9LFxuICAgICAgICAgIFwiJydcIixcbiAgICAgICAgICB7IHR5cGU6IFwibGl0ZXJhbFwiLCB2YWx1ZTogXCInJ1wiLCBkZXNjcmlwdGlvbjogXCJcXFwiJydcXFwiXCIgfSxcbiAgICAgICAgICBmdW5jdGlvbih1KSB7cmV0dXJuIHt2YWx1ZTogMSwgdW5pdHM6IHtcIicnXCI6IDF9fTt9LFxuICAgICAgICAgIFwicGNcIixcbiAgICAgICAgICB7IHR5cGU6IFwibGl0ZXJhbFwiLCB2YWx1ZTogXCJwY1wiLCBkZXNjcmlwdGlvbjogXCJcXFwicGNcXFwiXCIgfSxcbiAgICAgICAgICBmdW5jdGlvbih1KSB7cmV0dXJuIHt2YWx1ZTogMSwgdW5pdHM6IHtcInBjXCI6IDF9fTt9LFxuICAgICAgICAgIFwiZVZcIixcbiAgICAgICAgICB7IHR5cGU6IFwibGl0ZXJhbFwiLCB2YWx1ZTogXCJlVlwiLCBkZXNjcmlwdGlvbjogXCJcXFwiZVZcXFwiXCIgfSxcbiAgICAgICAgICBmdW5jdGlvbih1KSB7cmV0dXJuIHt2YWx1ZTogMSwgdW5pdHM6IHtcImVWXCI6IDF9fTt9LFxuICAgICAgICAgIFwiR3lcIixcbiAgICAgICAgICB7IHR5cGU6IFwibGl0ZXJhbFwiLCB2YWx1ZTogXCJHeVwiLCBkZXNjcmlwdGlvbjogXCJcXFwiR3lcXFwiXCIgfSxcbiAgICAgICAgICBmdW5jdGlvbih1KSB7cmV0dXJuIHt2YWx1ZTogMSwgdW5pdHM6IHtcIkd5XCI6IDF9fTt9LFxuICAgICAgICAgIFwic3RcIixcbiAgICAgICAgICB7IHR5cGU6IFwibGl0ZXJhbFwiLCB2YWx1ZTogXCJzdFwiLCBkZXNjcmlwdGlvbjogXCJcXFwic3RcXFwiXCIgfSxcbiAgICAgICAgICBmdW5jdGlvbih1KSB7cmV0dXJuIHt2YWx1ZTogMSwgdW5pdHM6IHtcInN0XCI6IDF9fTt9LFxuICAgICAgICAgIFwiU3ZcIixcbiAgICAgICAgICB7IHR5cGU6IFwibGl0ZXJhbFwiLCB2YWx1ZTogXCJTdlwiLCBkZXNjcmlwdGlvbjogXCJcXFwiU3ZcXFwiXCIgfSxcbiAgICAgICAgICBmdW5jdGlvbih1KSB7cmV0dXJuIHt2YWx1ZTogMSwgdW5pdHM6IHtcIlN2XCI6IDF9fTt9LFxuICAgICAgICAgIFwiYXJcIixcbiAgICAgICAgICB7IHR5cGU6IFwibGl0ZXJhbFwiLCB2YWx1ZTogXCJhclwiLCBkZXNjcmlwdGlvbjogXCJcXFwiYXJcXFwiXCIgfSxcbiAgICAgICAgICBmdW5jdGlvbih1KSB7cmV0dXJuIHt2YWx1ZTogMSwgdW5pdHM6IHtcImFyXCI6IDF9fTt9LFxuICAgICAgICAgIFwic2JcIixcbiAgICAgICAgICB7IHR5cGU6IFwibGl0ZXJhbFwiLCB2YWx1ZTogXCJzYlwiLCBkZXNjcmlwdGlvbjogXCJcXFwic2JcXFwiXCIgfSxcbiAgICAgICAgICBmdW5jdGlvbih1KSB7cmV0dXJuIHt2YWx1ZTogMSwgdW5pdHM6IHtcInNiXCI6IDF9fTt9LFxuICAgICAgICAgIFwiTFwiLFxuICAgICAgICAgIHsgdHlwZTogXCJsaXRlcmFsXCIsIHZhbHVlOiBcIkxcIiwgZGVzY3JpcHRpb246IFwiXFxcIkxcXFwiXCIgfSxcbiAgICAgICAgICBmdW5jdGlvbih1KSB7cmV0dXJuIHt2YWx1ZTogMSwgdW5pdHM6IHtcIkxcIjogMX19O30sXG4gICAgICAgICAgXCJ0XCIsXG4gICAgICAgICAgeyB0eXBlOiBcImxpdGVyYWxcIiwgdmFsdWU6IFwidFwiLCBkZXNjcmlwdGlvbjogXCJcXFwidFxcXCJcIiB9LFxuICAgICAgICAgIGZ1bmN0aW9uKHUpIHtyZXR1cm4ge3ZhbHVlOiAxLCB1bml0czoge1widFwiOiAxfX07fSxcbiAgICAgICAgICBcInVcIixcbiAgICAgICAgICB7IHR5cGU6IFwibGl0ZXJhbFwiLCB2YWx1ZTogXCJ1XCIsIGRlc2NyaXB0aW9uOiBcIlxcXCJ1XFxcIlwiIH0sXG4gICAgICAgICAgZnVuY3Rpb24odSkge3JldHVybiB7dmFsdWU6IDEsIHVuaXRzOiB7XCJ1XCI6IDF9fTt9LFxuICAgICAgICAgIFwiUFwiLFxuICAgICAgICAgIHsgdHlwZTogXCJsaXRlcmFsXCIsIHZhbHVlOiBcIlBcIiwgZGVzY3JpcHRpb246IFwiXFxcIlBcXFwiXCIgfSxcbiAgICAgICAgICBmdW5jdGlvbih1KSB7cmV0dXJuIHt2YWx1ZTogMSwgdW5pdHM6IHtcIlBcIjogMX19O30sXG4gICAgICAgICAgXCJHXCIsXG4gICAgICAgICAgeyB0eXBlOiBcImxpdGVyYWxcIiwgdmFsdWU6IFwiR1wiLCBkZXNjcmlwdGlvbjogXCJcXFwiR1xcXCJcIiB9LFxuICAgICAgICAgIGZ1bmN0aW9uKHUpIHtyZXR1cm4ge3ZhbHVlOiAxLCB1bml0czoge1wiR1wiOiAxfX07fSxcbiAgICAgICAgICBcIlJcIixcbiAgICAgICAgICB7IHR5cGU6IFwibGl0ZXJhbFwiLCB2YWx1ZTogXCJSXCIsIGRlc2NyaXB0aW9uOiBcIlxcXCJSXFxcIlwiIH0sXG4gICAgICAgICAgZnVuY3Rpb24odSkge3JldHVybiB7dmFsdWU6IDEsIHVuaXRzOiB7XCJSXCI6IDF9fTt9LFxuICAgICAgICAgIFwiSFwiLFxuICAgICAgICAgIHsgdHlwZTogXCJsaXRlcmFsXCIsIHZhbHVlOiBcIkhcIiwgZGVzY3JpcHRpb246IFwiXFxcIkhcXFwiXCIgfSxcbiAgICAgICAgICBmdW5jdGlvbih1KSB7cmV0dXJuIHt2YWx1ZTogMSwgdW5pdHM6IHtcIkhcIjogMX19O30sXG4gICAgICAgICAgXCJUXCIsXG4gICAgICAgICAgeyB0eXBlOiBcImxpdGVyYWxcIiwgdmFsdWU6IFwiVFwiLCBkZXNjcmlwdGlvbjogXCJcXFwiVFxcXCJcIiB9LFxuICAgICAgICAgIGZ1bmN0aW9uKHUpIHtyZXR1cm4ge3ZhbHVlOiAxLCB1bml0czoge1wiVFwiOiAxfX07fSxcbiAgICAgICAgICBcIlVcIixcbiAgICAgICAgICB7IHR5cGU6IFwibGl0ZXJhbFwiLCB2YWx1ZTogXCJVXCIsIGRlc2NyaXB0aW9uOiBcIlxcXCJVXFxcIlwiIH0sXG4gICAgICAgICAgZnVuY3Rpb24odSkge3JldHVybiB7dmFsdWU6IDEsIHVuaXRzOiB7XCJVXCI6IDF9fTt9LFxuICAgICAgICAgIFwiQlwiLFxuICAgICAgICAgIHsgdHlwZTogXCJsaXRlcmFsXCIsIHZhbHVlOiBcIkJcIiwgZGVzY3JpcHRpb246IFwiXFxcIkJcXFwiXCIgfSxcbiAgICAgICAgICBmdW5jdGlvbih1KSB7cmV0dXJuIHt2YWx1ZTogMSwgdW5pdHM6IHtcIkJcIjogMX19O30sXG4gICAgICAgICAgXCJTXCIsXG4gICAgICAgICAgeyB0eXBlOiBcImxpdGVyYWxcIiwgdmFsdWU6IFwiU1wiLCBkZXNjcmlwdGlvbjogXCJcXFwiU1xcXCJcIiB9LFxuICAgICAgICAgIGZ1bmN0aW9uKHUpIHtyZXR1cm4ge3ZhbHVlOiAxLCB1bml0czoge1wiU1wiOiAxfX07fSxcbiAgICAgICAgICBcIm1cIixcbiAgICAgICAgICB7IHR5cGU6IFwibGl0ZXJhbFwiLCB2YWx1ZTogXCJtXCIsIGRlc2NyaXB0aW9uOiBcIlxcXCJtXFxcIlwiIH0sXG4gICAgICAgICAgZnVuY3Rpb24odSkge3JldHVybiB7dmFsdWU6IDEsIHVuaXRzOiB7XCJtXCI6IDF9fTt9LFxuICAgICAgICAgIFwic1wiLFxuICAgICAgICAgIHsgdHlwZTogXCJsaXRlcmFsXCIsIHZhbHVlOiBcInNcIiwgZGVzY3JpcHRpb246IFwiXFxcInNcXFwiXCIgfSxcbiAgICAgICAgICBmdW5jdGlvbih1KSB7cmV0dXJuIHt2YWx1ZTogMSwgdW5pdHM6IHtcInNcIjogMX19O30sXG4gICAgICAgICAgXCJGXCIsXG4gICAgICAgICAgeyB0eXBlOiBcImxpdGVyYWxcIiwgdmFsdWU6IFwiRlwiLCBkZXNjcmlwdGlvbjogXCJcXFwiRlxcXCJcIiB9LFxuICAgICAgICAgIGZ1bmN0aW9uKHUpIHtyZXR1cm4ge3ZhbHVlOiAxLCB1bml0czoge1wiRlwiOiAxfX07fSxcbiAgICAgICAgICBcImxcIixcbiAgICAgICAgICB7IHR5cGU6IFwibGl0ZXJhbFwiLCB2YWx1ZTogXCJsXCIsIGRlc2NyaXB0aW9uOiBcIlxcXCJsXFxcIlwiIH0sXG4gICAgICAgICAgZnVuY3Rpb24odSkge3JldHVybiB7dmFsdWU6IDEsIHVuaXRzOiB7XCJsXCI6IDF9fTt9LFxuICAgICAgICAgIFwiVlwiLFxuICAgICAgICAgIHsgdHlwZTogXCJsaXRlcmFsXCIsIHZhbHVlOiBcIlZcIiwgZGVzY3JpcHRpb246IFwiXFxcIlZcXFwiXCIgfSxcbiAgICAgICAgICBmdW5jdGlvbih1KSB7cmV0dXJuIHt2YWx1ZTogMSwgdW5pdHM6IHtcIlZcIjogMX19O30sXG4gICAgICAgICAgXCJBXCIsXG4gICAgICAgICAgeyB0eXBlOiBcImxpdGVyYWxcIiwgdmFsdWU6IFwiQVwiLCBkZXNjcmlwdGlvbjogXCJcXFwiQVxcXCJcIiB9LFxuICAgICAgICAgIGZ1bmN0aW9uKHUpIHtyZXR1cm4ge3ZhbHVlOiAxLCB1bml0czoge1wiQVwiOiAxfX07fSxcbiAgICAgICAgICBcIldcIixcbiAgICAgICAgICB7IHR5cGU6IFwibGl0ZXJhbFwiLCB2YWx1ZTogXCJXXCIsIGRlc2NyaXB0aW9uOiBcIlxcXCJXXFxcIlwiIH0sXG4gICAgICAgICAgZnVuY3Rpb24odSkge3JldHVybiB7dmFsdWU6IDEsIHVuaXRzOiB7XCJXXCI6IDF9fTt9LFxuICAgICAgICAgIFwiS1wiLFxuICAgICAgICAgIHsgdHlwZTogXCJsaXRlcmFsXCIsIHZhbHVlOiBcIktcIiwgZGVzY3JpcHRpb246IFwiXFxcIktcXFwiXCIgfSxcbiAgICAgICAgICBmdW5jdGlvbih1KSB7cmV0dXJuIHt2YWx1ZTogMSwgdW5pdHM6IHtcIktcIjogMX19O30sXG4gICAgICAgICAgXCJDXCIsXG4gICAgICAgICAgeyB0eXBlOiBcImxpdGVyYWxcIiwgdmFsdWU6IFwiQ1wiLCBkZXNjcmlwdGlvbjogXCJcXFwiQ1xcXCJcIiB9LFxuICAgICAgICAgIGZ1bmN0aW9uKHUpIHtyZXR1cm4ge3ZhbHVlOiAxLCB1bml0czoge1wiQ1wiOiAxfX07fSxcbiAgICAgICAgICBcImJcIixcbiAgICAgICAgICB7IHR5cGU6IFwibGl0ZXJhbFwiLCB2YWx1ZTogXCJiXCIsIGRlc2NyaXB0aW9uOiBcIlxcXCJiXFxcIlwiIH0sXG4gICAgICAgICAgZnVuY3Rpb24odSkge3JldHVybiB7dmFsdWU6IDEsIHVuaXRzOiB7XCJiXCI6IDF9fTt9LFxuICAgICAgICAgIFwiJVwiLFxuICAgICAgICAgIHsgdHlwZTogXCJsaXRlcmFsXCIsIHZhbHVlOiBcIiVcIiwgZGVzY3JpcHRpb246IFwiXFxcIiVcXFwiXCIgfSxcbiAgICAgICAgICBmdW5jdGlvbih1KSB7cmV0dXJuIHt2YWx1ZTogMSwgdW5pdHM6IHtcIiVcIjogMX19O30sXG4gICAgICAgICAgXCJKXCIsXG4gICAgICAgICAgeyB0eXBlOiBcImxpdGVyYWxcIiwgdmFsdWU6IFwiSlwiLCBkZXNjcmlwdGlvbjogXCJcXFwiSlxcXCJcIiB9LFxuICAgICAgICAgIGZ1bmN0aW9uKHUpIHtyZXR1cm4ge3ZhbHVlOiAxLCB1bml0czoge1wiSlwiOiAxfX07fSxcbiAgICAgICAgICBcIidcIixcbiAgICAgICAgICB7IHR5cGU6IFwibGl0ZXJhbFwiLCB2YWx1ZTogXCInXCIsIGRlc2NyaXB0aW9uOiBcIlxcXCInXFxcIlwiIH0sXG4gICAgICAgICAgZnVuY3Rpb24odSkge3JldHVybiB7dmFsdWU6IDEsIHVuaXRzOiB7XCInXCI6IDF9fTt9LFxuICAgICAgICAgIFwiaFwiLFxuICAgICAgICAgIHsgdHlwZTogXCJsaXRlcmFsXCIsIHZhbHVlOiBcImhcIiwgZGVzY3JpcHRpb246IFwiXFxcImhcXFwiXCIgfSxcbiAgICAgICAgICBmdW5jdGlvbih1KSB7cmV0dXJuIHt2YWx1ZTogMSwgdW5pdHM6IHtcImhcIjogMX19O30sXG4gICAgICAgICAgXCJkXCIsXG4gICAgICAgICAgeyB0eXBlOiBcImxpdGVyYWxcIiwgdmFsdWU6IFwiZFwiLCBkZXNjcmlwdGlvbjogXCJcXFwiZFxcXCJcIiB9LFxuICAgICAgICAgIGZ1bmN0aW9uKHUpIHtyZXR1cm4ge3ZhbHVlOiAxLCB1bml0czoge1wiZFwiOiAxfX07fSxcbiAgICAgICAgICBcIk5cIixcbiAgICAgICAgICB7IHR5cGU6IFwibGl0ZXJhbFwiLCB2YWx1ZTogXCJOXCIsIGRlc2NyaXB0aW9uOiBcIlxcXCJOXFxcIlwiIH0sXG4gICAgICAgICAgZnVuY3Rpb24odSkge3JldHVybiB7dmFsdWU6IDEsIHVuaXRzOiB7XCJOXCI6IDF9fTt9LFxuICAgICAgICAgIFwiYVwiLFxuICAgICAgICAgIHsgdHlwZTogXCJsaXRlcmFsXCIsIHZhbHVlOiBcImFcIiwgZGVzY3JpcHRpb246IFwiXFxcImFcXFwiXCIgfSxcbiAgICAgICAgICBmdW5jdGlvbih1KSB7cmV0dXJuIHt2YWx1ZTogMSwgdW5pdHM6IHtcImFcIjogMX19O30sXG4gICAgICAgICAgXCJnXCIsXG4gICAgICAgICAgeyB0eXBlOiBcImxpdGVyYWxcIiwgdmFsdWU6IFwiZ1wiLCBkZXNjcmlwdGlvbjogXCJcXFwiZ1xcXCJcIiB9LFxuICAgICAgICAgIGZ1bmN0aW9uKHUpIHtyZXR1cm4ge3ZhbHVlOiAxLCB1bml0czoge1wiZ1wiOiAxfX07fSxcbiAgICAgICAgICBcIllcIixcbiAgICAgICAgICB7IHR5cGU6IFwibGl0ZXJhbFwiLCB2YWx1ZTogXCJZXCIsIGRlc2NyaXB0aW9uOiBcIlxcXCJZXFxcIlwiIH0sXG4gICAgICAgICAgXCJaXCIsXG4gICAgICAgICAgeyB0eXBlOiBcImxpdGVyYWxcIiwgdmFsdWU6IFwiWlwiLCBkZXNjcmlwdGlvbjogXCJcXFwiWlxcXCJcIiB9LFxuICAgICAgICAgIFwiRVwiLFxuICAgICAgICAgIHsgdHlwZTogXCJsaXRlcmFsXCIsIHZhbHVlOiBcIkVcIiwgZGVzY3JpcHRpb246IFwiXFxcIkVcXFwiXCIgfSxcbiAgICAgICAgICBcIk1cIixcbiAgICAgICAgICB7IHR5cGU6IFwibGl0ZXJhbFwiLCB2YWx1ZTogXCJNXCIsIGRlc2NyaXB0aW9uOiBcIlxcXCJNXFxcIlwiIH0sXG4gICAgICAgICAgXCJrXCIsXG4gICAgICAgICAgeyB0eXBlOiBcImxpdGVyYWxcIiwgdmFsdWU6IFwia1wiLCBkZXNjcmlwdGlvbjogXCJcXFwia1xcXCJcIiB9LFxuICAgICAgICAgIFwiZGFcIixcbiAgICAgICAgICB7IHR5cGU6IFwibGl0ZXJhbFwiLCB2YWx1ZTogXCJkYVwiLCBkZXNjcmlwdGlvbjogXCJcXFwiZGFcXFwiXCIgfSxcbiAgICAgICAgICBcImNcIixcbiAgICAgICAgICB7IHR5cGU6IFwibGl0ZXJhbFwiLCB2YWx1ZTogXCJjXCIsIGRlc2NyaXB0aW9uOiBcIlxcXCJjXFxcIlwiIH0sXG4gICAgICAgICAgXCJuXCIsXG4gICAgICAgICAgeyB0eXBlOiBcImxpdGVyYWxcIiwgdmFsdWU6IFwiblwiLCBkZXNjcmlwdGlvbjogXCJcXFwiblxcXCJcIiB9LFxuICAgICAgICAgIFwicFwiLFxuICAgICAgICAgIHsgdHlwZTogXCJsaXRlcmFsXCIsIHZhbHVlOiBcInBcIiwgZGVzY3JpcHRpb246IFwiXFxcInBcXFwiXCIgfSxcbiAgICAgICAgICBcImZcIixcbiAgICAgICAgICB7IHR5cGU6IFwibGl0ZXJhbFwiLCB2YWx1ZTogXCJmXCIsIGRlc2NyaXB0aW9uOiBcIlxcXCJmXFxcIlwiIH0sXG4gICAgICAgICAgXCJ6XCIsXG4gICAgICAgICAgeyB0eXBlOiBcImxpdGVyYWxcIiwgdmFsdWU6IFwielwiLCBkZXNjcmlwdGlvbjogXCJcXFwielxcXCJcIiB9LFxuICAgICAgICAgIFwieVwiLFxuICAgICAgICAgIHsgdHlwZTogXCJsaXRlcmFsXCIsIHZhbHVlOiBcInlcIiwgZGVzY3JpcHRpb246IFwiXFxcInlcXFwiXCIgfSxcbiAgICAgICAgICBcIktpXCIsXG4gICAgICAgICAgeyB0eXBlOiBcImxpdGVyYWxcIiwgdmFsdWU6IFwiS2lcIiwgZGVzY3JpcHRpb246IFwiXFxcIktpXFxcIlwiIH0sXG4gICAgICAgICAgXCJNaVwiLFxuICAgICAgICAgIHsgdHlwZTogXCJsaXRlcmFsXCIsIHZhbHVlOiBcIk1pXCIsIGRlc2NyaXB0aW9uOiBcIlxcXCJNaVxcXCJcIiB9LFxuICAgICAgICAgIFwiR2lcIixcbiAgICAgICAgICB7IHR5cGU6IFwibGl0ZXJhbFwiLCB2YWx1ZTogXCJHaVwiLCBkZXNjcmlwdGlvbjogXCJcXFwiR2lcXFwiXCIgfSxcbiAgICAgICAgICBcIlRpXCIsXG4gICAgICAgICAgeyB0eXBlOiBcImxpdGVyYWxcIiwgdmFsdWU6IFwiVGlcIiwgZGVzY3JpcHRpb246IFwiXFxcIlRpXFxcIlwiIH1cbiAgICAgICAgXSxcblxuICAgICAgICBwZWckYnl0ZWNvZGUgPSBbXG4gICAgICAgICAgcGVnJGRlY29kZShcIiE3ISsnIDQhNiAhISAlXCIpLFxuICAgICAgICAgIHBlZyRkZWNvZGUoXCIhLlxcXCJcXFwiXFxcIjJcXFwiMyMrMiQ3IysoJTRcXFwiNiRcXFwiISAlJFxcXCIjICFcXFwiIyAhKiMgXFxcIjcjXCIpLFxuICAgICAgICAgIHBlZyRkZWNvZGUoXCIhLiVcXFwiXFxcIjIlMyYrLSQ3JCsjJSdcXFwiJSRcXFwiIyAhXFxcIiMgISo+IFxcXCIhLlxcXCJcXFwiXFxcIjJcXFwiMyMrLSQ3JCsjJSdcXFwiJSRcXFwiIyAhXFxcIiMgIVwiKSxcbiAgICAgICAgICBwZWckZGVjb2RlKFwiITckKzskICc3XFxcIiwjJjdcXFwiXFxcIispJTRcXFwiNihcXFwiXFxcIiEgJSRcXFwiIyAhXFxcIiMgIVwiKSxcbiAgICAgICAgICBwZWckZGVjb2RlKFwiITclK2MkNyYqIyBcXFwiICkrUyUgJzcpLCMmNylcXFwiK0ElNTYqIFxcXCJcXFwiISkjI1xcXCIgIVxcXCIgKyspJTQkNiwkXFxcIiNcXFwiJSQkIyAhJCMjICEkXFxcIiMgIVxcXCIjICEqRSBcXFwiITcoKzokICc3KSwjJjcpXFxcIisoJTRcXFwiNi1cXFwiISElJFxcXCIjICFcXFwiIyAhXCIpLFxuICAgICAgICAgIHBlZyRkZWNvZGUoXCIhNycrJyA0ITYuISEgJSpZIFxcXCIhLi9cXFwiXFxcIjIvMzArQiQ3Iys4JS4xXFxcIlxcXCIyMTMyKyglNCM2MyMhISUkIyMgISRcXFwiIyAhXFxcIiMgISojIFxcXCI3KVwiKSxcbiAgICAgICAgICBwZWckZGVjb2RlKFwiITA0XFxcIlxcXCIxITM1KiMgXFxcIiApKzMkNygrKSU0XFxcIjY2XFxcIlxcXCIhICUkXFxcIiMgIVxcXCIjICFcIiksXG4gICAgICAgICAgcGVnJGRlY29kZShcIiE3KyojIFxcXCIgKStLJDcqK0ElNTY3IFxcXCIhICkjI1xcXCIgIVxcXCIgKyspJTQjNjgjXFxcIlxcXCIhJSQjIyAhJFxcXCIjICFcXFwiIyAhKiMgXFxcIjcqXCIpLFxuICAgICAgICAgIHBlZyRkZWNvZGUoXCIhICcwOVxcXCJcXFwiMSEzOissJCwpJjA5XFxcIlxcXCIxITM6XFxcIlxcXCJcXFwiICEraSQuO1xcXCJcXFwiMjszPCojIFxcXCIgKStTJTcmKiMgXFxcIiApK0MlNTY9ICNcXFwiISApIyNcXFwiICFcXFwiICsrKiU0JDY+JCMjXFxcIiElJCQjICEkIyMgISRcXFwiIyAhXFxcIiMgIVwiKSxcbiAgICAgICAgICBwZWckZGVjb2RlKFwiIS4/XFxcIlxcXCIyPzNAK3QkICcwQVxcXCJcXFwiMSEzQissJCwpJjBBXFxcIlxcXCIxITNCXFxcIlxcXCJcXFwiICErTyUuQ1xcXCJcXFwiMkMzRCs/JTU2RSAhISkjI1xcXCIgIVxcXCIgKysoJTQkNkYkIVxcXCIlJCQjICEkIyMgISRcXFwiIyAhXFxcIiMgIVwiKSxcbiAgICAgICAgICBwZWckZGVjb2RlKFwiIS5HXFxcIlxcXCIyRzNIKycgNCE2SSEhICUqXFx1MUNDRCBcXFwiIS5KXFxcIlxcXCIySjNLKycgNCE2TCEhICUqXFx1MUNCNSBcXFwiIS5NXFxcIlxcXCIyTTNOKycgNCE2TyEhICUqXFx1MUM5RCBcXFwiIS5QXFxcIlxcXCIyUDNRKycgNCE2UiEhICUqXFx1MUM4NSBcXFwiIS5TXFxcIlxcXCIyUzNUKycgNCE2VSEhICUqXFx1MUM2RCBcXFwiIS5WXFxcIlxcXCIyVjNXKycgNCE2WCEhICUqXFx1MUM1NSBcXFwiIS5ZXFxcIlxcXCIyWTNaKycgNCE2WyEhICUqXFx1MUMzRCBcXFwiIS5cXFxcXFxcIlxcXCIyXFxcXDNdKycgNCE2XiEhICUqXFx1MUMyNSBcXFwiIS5fXFxcIlxcXCIyXzNgKycgNCE2YSEhICUqXFx1MUMwRCBcXFwiIS5iXFxcIlxcXCIyYjNjKycgNCE2ZCEhICUqXFx1MUJGNSBcXFwiIS5lXFxcIlxcXCIyZTNmKycgNCE2ZyEhICUqXFx1MUJERCBcXFwiIS5oXFxcIlxcXCIyaDNpKycgNCE2aiEhICUqXFx1MUJDNSBcXFwiIS5rXFxcIlxcXCIyazNsKycgNCE2bSEhICUqXFx1MUJBRCBcXFwiIS5uXFxcIlxcXCIybjNvKycgNCE2cCEhICUqXFx1MUI5NSBcXFwiIS5xXFxcIlxcXCIycTNyKycgNCE2cyEhICUqXFx1MUI3RCBcXFwiIS50XFxcIlxcXCIydDN1KycgNCE2diEhICUqXFx1MUI2NSBcXFwiIS53XFxcIlxcXCIydzN4KycgNCE2eSEhICUqXFx1MUI0RCBcXFwiIS56XFxcIlxcXCIyejN7KycgNCE2fCEhICUqXFx1MUIzNSBcXFwiIS59XFxcIlxcXCIyfTN+KycgNCE2fyEhICUqXFx1MUIxRCBcXFwiIS5cXHg4MFxcXCJcXFwiMlxceDgwM1xceDgxKycgNCE2XFx4ODIhISAlKlxcdTFCMDUgXFxcIiEuXFx4ODNcXFwiXFxcIjJcXHg4MzNcXHg4NCsnIDQhNlxceDg1ISEgJSpcXHUxQUVEIFxcXCIhLlxceDg2XFxcIlxcXCIyXFx4ODYzXFx4ODcrJyA0ITZcXHg4OCEhICUqXFx1MUFENSBcXFwiIS5cXHg4OVxcXCJcXFwiMlxceDg5M1xceDhBKycgNCE2XFx4OEIhISAlKlxcdTFBQkQgXFxcIiEuXFx4OENcXFwiXFxcIjJcXHg4QzNcXHg4RCsnIDQhNlxceDhFISEgJSpcXHUxQUE1IFxcXCIhLlxceDhGXFxcIlxcXCIyXFx4OEYzXFx4OTArJyA0ITZcXHg5MSEhICUqXFx1MUE4RCBcXFwiIS5cXHg5MlxcXCJcXFwiMlxceDkyM1xceDkzKycgNCE2XFx4OTQhISAlKlxcdTFBNzUgXFxcIiEuXFx4OTVcXFwiXFxcIjJcXHg5NTNcXHg5NisnIDQhNlxceDk3ISEgJSpcXHUxQTVEIFxcXCIhLlxceDk4XFxcIlxcXCIyXFx4OTgzXFx4OTkrJyA0ITZcXHg5QSEhICUqXFx1MUE0NSBcXFwiIS5cXHg5QlxcXCJcXFwiMlxceDlCM1xceDlDKycgNCE2XFx4OUQhISAlKlxcdTFBMkQgXFxcIiEuXFx4OUVcXFwiXFxcIjJcXHg5RTNcXHg5RisnIDQhNlxceEEwISEgJSpcXHUxQTE1IFxcXCIhLlxceEExXFxcIlxcXCIyXFx4QTEzXFx4QTIrJyA0ITZcXHhBMyEhICUqXFx1MTlGRCBcXFwiIS5cXHhBNFxcXCJcXFwiMlxceEE0M1xceEE1KycgNCE2XFx4QTYhISAlKlxcdTE5RTUgXFxcIiEuXFx4QTdcXFwiXFxcIjJcXHhBNzNcXHhBOCsnIDQhNlxceEE5ISEgJSpcXHUxOUNEIFxcXCIhLlxceEFBXFxcIlxcXCIyXFx4QUEzXFx4QUIrJyA0ITZcXHhBQyEhICUqXFx1MTlCNSBcXFwiIS5cXHhBRFxcXCJcXFwiMlxceEFEM1xceEFFKycgNCE2XFx4QUYhISAlKlxcdTE5OUQgXFxcIiEuXFx4QjBcXFwiXFxcIjJcXHhCMDNcXHhCMSsnIDQhNlxceEIyISEgJSpcXHUxOTg1IFxcXCIhLlxceEIzXFxcIlxcXCIyXFx4QjMzXFx4QjQrJyA0ITZcXHhCNSEhICUqXFx1MTk2RCBcXFwiIS5cXHhCNlxcXCJcXFwiMlxceEI2M1xceEI3KycgNCE2XFx4QjghISAlKlxcdTE5NTUgXFxcIiEuXFx4QjlcXFwiXFxcIjJcXHhCOTNcXHhCQSsnIDQhNlxceEJCISEgJSpcXHUxOTNEIFxcXCIhLlxceEJDXFxcIlxcXCIyXFx4QkMzXFx4QkQrJyA0ITZcXHhCRSEhICUqXFx1MTkyNSBcXFwiIS5cXHhCRlxcXCJcXFwiMlxceEJGM1xceEMwKycgNCE2XFx4QzEhISAlKlxcdTE5MEQgXFxcIiEuXFx4QzJcXFwiXFxcIjJcXHhDMjNcXHhDMysnIDQhNlxceEM0ISEgJSpcXHUxOEY1IFxcXCIhLlxceEM1XFxcIlxcXCIyXFx4QzUzXFx4QzYrJyA0ITZcXHhDNyEhICUqXFx1MThERCBcXFwiIS5cXHhDOFxcXCJcXFwiMlxceEM4M1xceEM5KycgNCE2XFx4Q0EhISAlKlxcdTE4QzUgXFxcIiEuXFx4Q0JcXFwiXFxcIjJcXHhDQjNcXHhDQysnIDQhNlxceENEISEgJSpcXHUxOEFEIFxcXCIhLlxceENFXFxcIlxcXCIyXFx4Q0UzXFx4Q0YrJyA0ITZcXHhEMCEhICUqXFx1MTg5NSBcXFwiIS5cXHhEMVxcXCJcXFwiMlxceEQxM1xceEQyKycgNCE2XFx4RDMhISAlKlxcdTE4N0QgXFxcIiEuXFx4RDRcXFwiXFxcIjJcXHhENDNcXHhENSsnIDQhNlxceEQ2ISEgJSpcXHUxODY1IFxcXCIhLlxceEQ3XFxcIlxcXCIyXFx4RDczXFx4RDgrJyA0ITZcXHhEOSEhICUqXFx1MTg0RCBcXFwiIS5cXHhEQVxcXCJcXFwiMlxceERBM1xceERCKycgNCE2XFx4REMhISAlKlxcdTE4MzUgXFxcIiEuXFx4RERcXFwiXFxcIjJcXHhERDNcXHhERSsnIDQhNlxceERGISEgJSpcXHUxODFEIFxcXCIhLlxceEUwXFxcIlxcXCIyXFx4RTAzXFx4RTErJyA0ITZcXHhFMiEhICUqXFx1MTgwNSBcXFwiIS5cXHhFM1xcXCJcXFwiMlxceEUzM1xceEU0KycgNCE2XFx4RTUhISAlKlxcdTE3RUQgXFxcIiEuXFx4RTZcXFwiXFxcIjJcXHhFNjNcXHhFNysnIDQhNlxceEU4ISEgJSpcXHUxN0Q1IFxcXCIhLlxceEU5XFxcIlxcXCIyXFx4RTkzXFx4RUErJyA0ITZcXHhFQiEhICUqXFx1MTdCRCBcXFwiIS5cXHhFQ1xcXCJcXFwiMlxceEVDM1xceEVEKycgNCE2XFx4RUUhISAlKlxcdTE3QTUgXFxcIiEuXFx4RUZcXFwiXFxcIjJcXHhFRjNcXHhGMCsnIDQhNlxceEYxISEgJSpcXHUxNzhEIFxcXCIhLlxceEYyXFxcIlxcXCIyXFx4RjIzXFx4RjMrJyA0ITZcXHhGNCEhICUqXFx1MTc3NSBcXFwiIS5cXHhGNVxcXCJcXFwiMlxceEY1M1xceEY2KycgNCE2XFx4RjchISAlKlxcdTE3NUQgXFxcIiEuXFx4RjhcXFwiXFxcIjJcXHhGODNcXHhGOSsnIDQhNlxceEZBISEgJSpcXHUxNzQ1IFxcXCIhLlxceEZCXFxcIlxcXCIyXFx4RkIzXFx4RkMrJyA0ITZcXHhGRCEhICUqXFx1MTcyRCBcXFwiIS5cXHhGRVxcXCJcXFwiMlxceEZFM1xceEZGKycgNCE2XFx1MDEwMCEhICUqXFx1MTcxNSBcXFwiIS5cXHUwMTAxXFxcIlxcXCIyXFx1MDEwMTNcXHUwMTAyKycgNCE2XFx1MDEwMyEhICUqXFx1MTZGRCBcXFwiIS5cXHUwMTA0XFxcIlxcXCIyXFx1MDEwNDNcXHUwMTA1KycgNCE2XFx1MDEwNiEhICUqXFx1MTZFNSBcXFwiIS5cXHUwMTA3XFxcIlxcXCIyXFx1MDEwNzNcXHUwMTA4KycgNCE2XFx1MDEwOSEhICUqXFx1MTZDRCBcXFwiIS5cXHUwMTBBXFxcIlxcXCIyXFx1MDEwQTNcXHUwMTBCKycgNCE2XFx1MDEwQyEhICUqXFx1MTZCNSBcXFwiIS5cXHUwMTBEXFxcIlxcXCIyXFx1MDEwRDNcXHUwMTBFKycgNCE2XFx1MDEwRiEhICUqXFx1MTY5RCBcXFwiIS5cXHUwMTEwXFxcIlxcXCIyXFx1MDExMDNcXHUwMTExKycgNCE2XFx1MDExMiEhICUqXFx1MTY4NSBcXFwiIS5cXHUwMTEzXFxcIlxcXCIyXFx1MDExMzNcXHUwMTE0KycgNCE2XFx1MDExNSEhICUqXFx1MTY2RCBcXFwiIS5cXHUwMTE2XFxcIlxcXCIyXFx1MDExNjNcXHUwMTE3KycgNCE2XFx1MDExOCEhICUqXFx1MTY1NSBcXFwiIS5cXHUwMTE5XFxcIlxcXCIyXFx1MDExOTNcXHUwMTFBKycgNCE2XFx1MDExQiEhICUqXFx1MTYzRCBcXFwiIS5cXHUwMTFDXFxcIlxcXCIyXFx1MDExQzNcXHUwMTFEKycgNCE2XFx1MDExRSEhICUqXFx1MTYyNSBcXFwiIS5cXHUwMTFGXFxcIlxcXCIyXFx1MDExRjNcXHUwMTIwKycgNCE2XFx1MDEyMSEhICUqXFx1MTYwRCBcXFwiIS5cXHUwMTIyXFxcIlxcXCIyXFx1MDEyMjNcXHUwMTIzKycgNCE2XFx1MDEyNCEhICUqXFx1MTVGNSBcXFwiIS5cXHUwMTI1XFxcIlxcXCIyXFx1MDEyNTNcXHUwMTI2KycgNCE2XFx1MDEyNyEhICUqXFx1MTVERCBcXFwiIS5cXHUwMTI4XFxcIlxcXCIyXFx1MDEyODNcXHUwMTI5KycgNCE2XFx1MDEyQSEhICUqXFx1MTVDNSBcXFwiIS5cXHUwMTJCXFxcIlxcXCIyXFx1MDEyQjNcXHUwMTJDKycgNCE2XFx1MDEyRCEhICUqXFx1MTVBRCBcXFwiIS5cXHUwMTJFXFxcIlxcXCIyXFx1MDEyRTNcXHUwMTJGKycgNCE2XFx1MDEzMCEhICUqXFx1MTU5NSBcXFwiIS5cXHUwMTMxXFxcIlxcXCIyXFx1MDEzMTNcXHUwMTMyKycgNCE2XFx1MDEzMyEhICUqXFx1MTU3RCBcXFwiIS5cXHUwMTM0XFxcIlxcXCIyXFx1MDEzNDNcXHUwMTM1KycgNCE2XFx1MDEzNiEhICUqXFx1MTU2NSBcXFwiIS5cXHUwMTM3XFxcIlxcXCIyXFx1MDEzNzNcXHUwMTM4KycgNCE2XFx1MDEzOSEhICUqXFx1MTU0RCBcXFwiIS5cXHUwMTNBXFxcIlxcXCIyXFx1MDEzQTNcXHUwMTNCKycgNCE2XFx1MDEzQyEhICUqXFx1MTUzNSBcXFwiIS5cXHUwMTNEXFxcIlxcXCIyXFx1MDEzRDNcXHUwMTNFKycgNCE2XFx1MDEzRiEhICUqXFx1MTUxRCBcXFwiIS5cXHUwMTQwXFxcIlxcXCIyXFx1MDE0MDNcXHUwMTQxKycgNCE2XFx1MDE0MiEhICUqXFx1MTUwNSBcXFwiIS5cXHUwMTQzXFxcIlxcXCIyXFx1MDE0MzNcXHUwMTQ0KycgNCE2XFx1MDE0NSEhICUqXFx1MTRFRCBcXFwiIS5cXHUwMTQ2XFxcIlxcXCIyXFx1MDE0NjNcXHUwMTQ3KycgNCE2XFx1MDE0OCEhICUqXFx1MTRENSBcXFwiIS5cXHUwMTQ5XFxcIlxcXCIyXFx1MDE0OTNcXHUwMTRBKycgNCE2XFx1MDE0QiEhICUqXFx1MTRCRCBcXFwiIS5cXHUwMTRDXFxcIlxcXCIyXFx1MDE0QzNcXHUwMTREKycgNCE2XFx1MDE0RSEhICUqXFx1MTRBNSBcXFwiIS5cXHUwMTRGXFxcIlxcXCIyXFx1MDE0RjNcXHUwMTUwKycgNCE2XFx1MDE1MSEhICUqXFx1MTQ4RCBcXFwiIS5cXHUwMTUyXFxcIlxcXCIyXFx1MDE1MjNcXHUwMTUzKycgNCE2XFx1MDE1NCEhICUqXFx1MTQ3NSBcXFwiIS5cXHUwMTU1XFxcIlxcXCIyXFx1MDE1NTNcXHUwMTU2KycgNCE2XFx1MDE1NyEhICUqXFx1MTQ1RCBcXFwiIS5cXHUwMTU4XFxcIlxcXCIyXFx1MDE1ODNcXHUwMTU5KycgNCE2XFx1MDE1QSEhICUqXFx1MTQ0NSBcXFwiIS5cXHUwMTVCXFxcIlxcXCIyXFx1MDE1QjNcXHUwMTVDKycgNCE2XFx1MDE1RCEhICUqXFx1MTQyRCBcXFwiIS5cXHUwMTVFXFxcIlxcXCIyXFx1MDE1RTNcXHUwMTVGKycgNCE2XFx1MDE2MCEhICUqXFx1MTQxNSBcXFwiIS5cXHUwMTYxXFxcIlxcXCIyXFx1MDE2MTNcXHUwMTYyKycgNCE2XFx1MDE2MyEhICUqXFx1MTNGRCBcXFwiIS5cXHUwMTY0XFxcIlxcXCIyXFx1MDE2NDNcXHUwMTY1KycgNCE2XFx1MDE2NiEhICUqXFx1MTNFNSBcXFwiIS5cXHUwMTY3XFxcIlxcXCIyXFx1MDE2NzNcXHUwMTY4KycgNCE2XFx1MDE2OSEhICUqXFx1MTNDRCBcXFwiIS5cXHUwMTZBXFxcIlxcXCIyXFx1MDE2QTNcXHUwMTZCKycgNCE2XFx1MDE2QyEhICUqXFx1MTNCNSBcXFwiIS5cXHUwMTZEXFxcIlxcXCIyXFx1MDE2RDNcXHUwMTZFKycgNCE2XFx1MDE2RiEhICUqXFx1MTM5RCBcXFwiIS5cXHUwMTcwXFxcIlxcXCIyXFx1MDE3MDNcXHUwMTcxKycgNCE2XFx1MDE3MiEhICUqXFx1MTM4NSBcXFwiIS5cXHUwMTczXFxcIlxcXCIyXFx1MDE3MzNcXHUwMTc0KycgNCE2XFx1MDE3NSEhICUqXFx1MTM2RCBcXFwiIS5cXHUwMTc2XFxcIlxcXCIyXFx1MDE3NjNcXHUwMTc3KycgNCE2XFx1MDE3OCEhICUqXFx1MTM1NSBcXFwiIS5cXHUwMTc5XFxcIlxcXCIyXFx1MDE3OTNcXHUwMTdBKycgNCE2XFx1MDE3QiEhICUqXFx1MTMzRCBcXFwiIS5cXHUwMTdDXFxcIlxcXCIyXFx1MDE3QzNcXHUwMTdEKycgNCE2XFx1MDE3RSEhICUqXFx1MTMyNSBcXFwiIS5cXHUwMTdGXFxcIlxcXCIyXFx1MDE3RjNcXHUwMTgwKycgNCE2XFx1MDE4MSEhICUqXFx1MTMwRCBcXFwiIS5cXHUwMTgyXFxcIlxcXCIyXFx1MDE4MjNcXHUwMTgzKycgNCE2XFx1MDE4NCEhICUqXFx1MTJGNSBcXFwiIS5cXHUwMTg1XFxcIlxcXCIyXFx1MDE4NTNcXHUwMTg2KycgNCE2XFx1MDE4NyEhICUqXFx1MTJERCBcXFwiIS5cXHUwMTg4XFxcIlxcXCIyXFx1MDE4ODNcXHUwMTg5KycgNCE2XFx1MDE4QSEhICUqXFx1MTJDNSBcXFwiIS5cXHUwMThCXFxcIlxcXCIyXFx1MDE4QjNcXHUwMThDKycgNCE2XFx1MDE4RCEhICUqXFx1MTJBRCBcXFwiIS5cXHUwMThFXFxcIlxcXCIyXFx1MDE4RTNcXHUwMThGKycgNCE2XFx1MDE5MCEhICUqXFx1MTI5NSBcXFwiIS5cXHUwMTkxXFxcIlxcXCIyXFx1MDE5MTNcXHUwMTkyKycgNCE2XFx1MDE5MyEhICUqXFx1MTI3RCBcXFwiIS5cXHUwMTk0XFxcIlxcXCIyXFx1MDE5NDNcXHUwMTk1KycgNCE2XFx1MDE5NiEhICUqXFx1MTI2NSBcXFwiIS5cXHUwMTk3XFxcIlxcXCIyXFx1MDE5NzNcXHUwMTk4KycgNCE2XFx1MDE5OSEhICUqXFx1MTI0RCBcXFwiIS5cXHUwMTlBXFxcIlxcXCIyXFx1MDE5QTNcXHUwMTlCKycgNCE2XFx1MDE5QyEhICUqXFx1MTIzNSBcXFwiIS5cXHUwMTlEXFxcIlxcXCIyXFx1MDE5RDNcXHUwMTlFKycgNCE2XFx1MDE5RiEhICUqXFx1MTIxRCBcXFwiIS5cXHUwMUEwXFxcIlxcXCIyXFx1MDFBMDNcXHUwMUExKycgNCE2XFx1MDFBMiEhICUqXFx1MTIwNSBcXFwiIS5cXHUwMUEzXFxcIlxcXCIyXFx1MDFBMzNcXHUwMUE0KycgNCE2XFx1MDFBNSEhICUqXFx1MTFFRCBcXFwiIS5cXHUwMUE2XFxcIlxcXCIyXFx1MDFBNjNcXHUwMUE3KycgNCE2XFx1MDFBOCEhICUqXFx1MTFENSBcXFwiIS5cXHUwMUE5XFxcIlxcXCIyXFx1MDFBOTNcXHUwMUFBKycgNCE2XFx1MDFBQiEhICUqXFx1MTFCRCBcXFwiIS5cXHUwMUFDXFxcIlxcXCIyXFx1MDFBQzNcXHUwMUFEKycgNCE2XFx1MDFBRSEhICUqXFx1MTFBNSBcXFwiIS5cXHUwMUFGXFxcIlxcXCIyXFx1MDFBRjNcXHUwMUIwKycgNCE2XFx1MDFCMSEhICUqXFx1MTE4RCBcXFwiIS5cXHUwMUIyXFxcIlxcXCIyXFx1MDFCMjNcXHUwMUIzKycgNCE2XFx1MDFCNCEhICUqXFx1MTE3NSBcXFwiIS5cXHUwMUI1XFxcIlxcXCIyXFx1MDFCNTNcXHUwMUI2KycgNCE2XFx1MDFCNyEhICUqXFx1MTE1RCBcXFwiIS5cXHUwMUI4XFxcIlxcXCIyXFx1MDFCODNcXHUwMUI5KycgNCE2XFx1MDFCQSEhICUqXFx1MTE0NSBcXFwiIS5cXHUwMUJCXFxcIlxcXCIyXFx1MDFCQjNcXHUwMUJDKycgNCE2XFx1MDFCRCEhICUqXFx1MTEyRCBcXFwiIS5cXHUwMUJFXFxcIlxcXCIyXFx1MDFCRTNcXHUwMUJGKycgNCE2XFx1MDFDMCEhICUqXFx1MTExNSBcXFwiIS5cXHUwMUMxXFxcIlxcXCIyXFx1MDFDMTNcXHUwMUMyKycgNCE2XFx1MDFDMyEhICUqXFx1MTBGRCBcXFwiIS5cXHUwMUM0XFxcIlxcXCIyXFx1MDFDNDNcXHUwMUM1KycgNCE2XFx1MDFDNiEhICUqXFx1MTBFNSBcXFwiIS5cXHUwMUM3XFxcIlxcXCIyXFx1MDFDNzNcXHUwMUM4KycgNCE2XFx1MDFDOSEhICUqXFx1MTBDRCBcXFwiIS5cXHUwMUNBXFxcIlxcXCIyXFx1MDFDQTNcXHUwMUNCKycgNCE2XFx1MDFDQyEhICUqXFx1MTBCNSBcXFwiIS5cXHUwMUNEXFxcIlxcXCIyXFx1MDFDRDNcXHUwMUNFKycgNCE2XFx1MDFDRiEhICUqXFx1MTA5RCBcXFwiIS5cXHUwMUQwXFxcIlxcXCIyXFx1MDFEMDNcXHUwMUQxKycgNCE2XFx1MDFEMiEhICUqXFx1MTA4NSBcXFwiIS5cXHUwMUQzXFxcIlxcXCIyXFx1MDFEMzNcXHUwMUQ0KycgNCE2XFx1MDFENSEhICUqXFx1MTA2RCBcXFwiIS5cXHUwMUQ2XFxcIlxcXCIyXFx1MDFENjNcXHUwMUQ3KycgNCE2XFx1MDFEOCEhICUqXFx1MTA1NSBcXFwiIS5cXHUwMUQ5XFxcIlxcXCIyXFx1MDFEOTNcXHUwMURBKycgNCE2XFx1MDFEQiEhICUqXFx1MTAzRCBcXFwiIS5cXHUwMURDXFxcIlxcXCIyXFx1MDFEQzNcXHUwMUREKycgNCE2XFx1MDFERSEhICUqXFx1MTAyNSBcXFwiIS5cXHUwMURGXFxcIlxcXCIyXFx1MDFERjNcXHUwMUUwKycgNCE2XFx1MDFFMSEhICUqXFx1MTAwRCBcXFwiIS5cXHUwMUUyXFxcIlxcXCIyXFx1MDFFMjNcXHUwMUUzKycgNCE2XFx1MDFFNCEhICUqXFx1MEZGNSBcXFwiIS5cXHUwMUU1XFxcIlxcXCIyXFx1MDFFNTNcXHUwMUU2KycgNCE2XFx1MDFFNyEhICUqXFx1MEZERCBcXFwiIS5cXHUwMUU4XFxcIlxcXCIyXFx1MDFFODNcXHUwMUU5KycgNCE2XFx1MDFFQSEhICUqXFx1MEZDNSBcXFwiIS5cXHUwMUVCXFxcIlxcXCIyXFx1MDFFQjNcXHUwMUVDKycgNCE2XFx1MDFFRCEhICUqXFx1MEZBRCBcXFwiIS5cXHUwMUVFXFxcIlxcXCIyXFx1MDFFRTNcXHUwMUVGKycgNCE2XFx1MDFGMCEhICUqXFx1MEY5NSBcXFwiIS5cXHUwMUYxXFxcIlxcXCIyXFx1MDFGMTNcXHUwMUYyKycgNCE2XFx1MDFGMyEhICUqXFx1MEY3RCBcXFwiIS5cXHUwMUY0XFxcIlxcXCIyXFx1MDFGNDNcXHUwMUY1KycgNCE2XFx1MDFGNiEhICUqXFx1MEY2NSBcXFwiIS5cXHUwMUY3XFxcIlxcXCIyXFx1MDFGNzNcXHUwMUY4KycgNCE2XFx1MDFGOSEhICUqXFx1MEY0RCBcXFwiIS5cXHUwMUZBXFxcIlxcXCIyXFx1MDFGQTNcXHUwMUZCKycgNCE2XFx1MDFGQyEhICUqXFx1MEYzNSBcXFwiIS5cXHUwMUZEXFxcIlxcXCIyXFx1MDFGRDNcXHUwMUZFKycgNCE2XFx1MDFGRiEhICUqXFx1MEYxRCBcXFwiIS5cXHUwMjAwXFxcIlxcXCIyXFx1MDIwMDNcXHUwMjAxKycgNCE2XFx1MDIwMiEhICUqXFx1MEYwNSBcXFwiIS5cXHUwMjAzXFxcIlxcXCIyXFx1MDIwMzNcXHUwMjA0KycgNCE2XFx1MDIwNSEhICUqXFx1MEVFRCBcXFwiIS5cXHUwMjA2XFxcIlxcXCIyXFx1MDIwNjNcXHUwMjA3KycgNCE2XFx1MDIwOCEhICUqXFx1MEVENSBcXFwiIS5cXHUwMjA5XFxcIlxcXCIyXFx1MDIwOTNcXHUwMjBBKycgNCE2XFx1MDIwQiEhICUqXFx1MEVCRCBcXFwiIS5cXHUwMjBDXFxcIlxcXCIyXFx1MDIwQzNcXHUwMjBEKycgNCE2XFx1MDIwRSEhICUqXFx1MEVBNSBcXFwiIS5cXHUwMjBGXFxcIlxcXCIyXFx1MDIwRjNcXHUwMjEwKycgNCE2XFx1MDIxMSEhICUqXFx1MEU4RCBcXFwiIS5cXHUwMjEyXFxcIlxcXCIyXFx1MDIxMjNcXHUwMjEzKycgNCE2XFx1MDIxNCEhICUqXFx1MEU3NSBcXFwiIS5cXHUwMjE1XFxcIlxcXCIyXFx1MDIxNTNcXHUwMjE2KycgNCE2XFx1MDIxNyEhICUqXFx1MEU1RCBcXFwiIS5cXHUwMjE4XFxcIlxcXCIyXFx1MDIxODNcXHUwMjE5KycgNCE2XFx1MDIxQSEhICUqXFx1MEU0NSBcXFwiIS5cXHUwMjFCXFxcIlxcXCIyXFx1MDIxQjNcXHUwMjFDKycgNCE2XFx1MDIxRCEhICUqXFx1MEUyRCBcXFwiIS5cXHUwMjFFXFxcIlxcXCIyXFx1MDIxRTNcXHUwMjFGKycgNCE2XFx1MDIyMCEhICUqXFx1MEUxNSBcXFwiIS5cXHUwMjIxXFxcIlxcXCIyXFx1MDIyMTNcXHUwMjIyKycgNCE2XFx1MDIyMyEhICUqXFx1MERGRCBcXFwiIS5cXHUwMjI0XFxcIlxcXCIyXFx1MDIyNDNcXHUwMjI1KycgNCE2XFx1MDIyNiEhICUqXFx1MERFNSBcXFwiIS5cXHUwMjI3XFxcIlxcXCIyXFx1MDIyNzNcXHUwMjI4KycgNCE2XFx1MDIyOSEhICUqXFx1MERDRCBcXFwiIS5cXHUwMjJBXFxcIlxcXCIyXFx1MDIyQTNcXHUwMjJCKycgNCE2XFx1MDIyQyEhICUqXFx1MERCNSBcXFwiIS5cXHUwMjJEXFxcIlxcXCIyXFx1MDIyRDNcXHUwMjJFKycgNCE2XFx1MDIyRiEhICUqXFx1MEQ5RCBcXFwiIS5cXHUwMjMwXFxcIlxcXCIyXFx1MDIzMDNcXHUwMjMxKycgNCE2XFx1MDIzMiEhICUqXFx1MEQ4NSBcXFwiIS5cXHUwMjMzXFxcIlxcXCIyXFx1MDIzMzNcXHUwMjM0KycgNCE2XFx1MDIzNSEhICUqXFx1MEQ2RCBcXFwiIS5cXHUwMjM2XFxcIlxcXCIyXFx1MDIzNjNcXHUwMjM3KycgNCE2XFx1MDIzOCEhICUqXFx1MEQ1NSBcXFwiIS5cXHUwMjM5XFxcIlxcXCIyXFx1MDIzOTNcXHUwMjNBKycgNCE2XFx1MDIzQiEhICUqXFx1MEQzRCBcXFwiIS5cXHUwMjNDXFxcIlxcXCIyXFx1MDIzQzNcXHUwMjNEKycgNCE2XFx1MDIzRSEhICUqXFx1MEQyNSBcXFwiIS5cXHUwMjNGXFxcIlxcXCIyXFx1MDIzRjNcXHUwMjQwKycgNCE2XFx1MDI0MSEhICUqXFx1MEQwRCBcXFwiIS5cXHUwMjQyXFxcIlxcXCIyXFx1MDI0MjNcXHUwMjQzKycgNCE2XFx1MDI0NCEhICUqXFx1MENGNSBcXFwiIS5cXHUwMjQ1XFxcIlxcXCIyXFx1MDI0NTNcXHUwMjQ2KycgNCE2XFx1MDI0NyEhICUqXFx1MENERCBcXFwiIS5cXHUwMjQ4XFxcIlxcXCIyXFx1MDI0ODNcXHUwMjQ5KycgNCE2XFx1MDI0QSEhICUqXFx1MENDNSBcXFwiIS5cXHUwMjRCXFxcIlxcXCIyXFx1MDI0QjNcXHUwMjRDKycgNCE2XFx1MDI0RCEhICUqXFx1MENBRCBcXFwiIS5cXHUwMjRFXFxcIlxcXCIyXFx1MDI0RTNcXHUwMjRGKycgNCE2XFx1MDI1MCEhICUqXFx1MEM5NSBcXFwiIS5cXHUwMjUxXFxcIlxcXCIyXFx1MDI1MTNcXHUwMjUyKycgNCE2XFx1MDI1MyEhICUqXFx1MEM3RCBcXFwiIS5cXHUwMjU0XFxcIlxcXCIyXFx1MDI1NDNcXHUwMjU1KycgNCE2XFx1MDI1NiEhICUqXFx1MEM2NSBcXFwiIS5cXHUwMjU3XFxcIlxcXCIyXFx1MDI1NzNcXHUwMjU4KycgNCE2XFx1MDI1OSEhICUqXFx1MEM0RCBcXFwiIS5cXHUwMjVBXFxcIlxcXCIyXFx1MDI1QTNcXHUwMjVCKycgNCE2XFx1MDI1QyEhICUqXFx1MEMzNSBcXFwiIS5cXHUwMjVEXFxcIlxcXCIyXFx1MDI1RDNcXHUwMjVFKycgNCE2XFx1MDI1RiEhICUqXFx1MEMxRCBcXFwiIS5cXHUwMjYwXFxcIlxcXCIyXFx1MDI2MDNcXHUwMjYxKycgNCE2XFx1MDI2MiEhICUqXFx1MEMwNSBcXFwiIS5cXHUwMjYzXFxcIlxcXCIyXFx1MDI2MzNcXHUwMjY0KycgNCE2XFx1MDI2NSEhICUqXFx1MEJFRCBcXFwiIS5cXHUwMjY2XFxcIlxcXCIyXFx1MDI2NjNcXHUwMjY3KycgNCE2XFx1MDI2OCEhICUqXFx1MEJENSBcXFwiIS5cXHUwMjY5XFxcIlxcXCIyXFx1MDI2OTNcXHUwMjZBKycgNCE2XFx1MDI2QiEhICUqXFx1MEJCRCBcXFwiIS5cXHUwMjZDXFxcIlxcXCIyXFx1MDI2QzNcXHUwMjZEKycgNCE2XFx1MDI2RSEhICUqXFx1MEJBNSBcXFwiIS5cXHUwMjZGXFxcIlxcXCIyXFx1MDI2RjNcXHUwMjcwKycgNCE2XFx1MDI3MSEhICUqXFx1MEI4RCBcXFwiIS5cXHUwMjcyXFxcIlxcXCIyXFx1MDI3MjNcXHUwMjczKycgNCE2XFx1MDI3NCEhICUqXFx1MEI3NSBcXFwiIS5cXHUwMjc1XFxcIlxcXCIyXFx1MDI3NTNcXHUwMjc2KycgNCE2XFx1MDI3NyEhICUqXFx1MEI1RCBcXFwiIS5cXHUwMjc4XFxcIlxcXCIyXFx1MDI3ODNcXHUwMjc5KycgNCE2XFx1MDI3QSEhICUqXFx1MEI0NSBcXFwiIS5cXHUwMjdCXFxcIlxcXCIyXFx1MDI3QjNcXHUwMjdDKycgNCE2XFx1MDI3RCEhICUqXFx1MEIyRCBcXFwiIS5cXHUwMjdFXFxcIlxcXCIyXFx1MDI3RTNcXHUwMjdGKycgNCE2XFx1MDI4MCEhICUqXFx1MEIxNSBcXFwiIS5cXHUwMjgxXFxcIlxcXCIyXFx1MDI4MTNcXHUwMjgyKycgNCE2XFx1MDI4MyEhICUqXFx1MEFGRCBcXFwiIS5cXHUwMjg0XFxcIlxcXCIyXFx1MDI4NDNcXHUwMjg1KycgNCE2XFx1MDI4NiEhICUqXFx1MEFFNSBcXFwiIS5cXHUwMjg3XFxcIlxcXCIyXFx1MDI4NzNcXHUwMjg4KycgNCE2XFx1MDI4OSEhICUqXFx1MEFDRCBcXFwiIS5cXHUwMjhBXFxcIlxcXCIyXFx1MDI4QTNcXHUwMjhCKycgNCE2XFx1MDI4QyEhICUqXFx1MEFCNSBcXFwiIS5cXHUwMjhEXFxcIlxcXCIyXFx1MDI4RDNcXHUwMjhFKycgNCE2XFx1MDI4RiEhICUqXFx1MEE5RCBcXFwiIS5cXHUwMjkwXFxcIlxcXCIyXFx1MDI5MDNcXHUwMjkxKycgNCE2XFx1MDI5MiEhICUqXFx1MEE4NSBcXFwiIS5cXHUwMjkzXFxcIlxcXCIyXFx1MDI5MzNcXHUwMjk0KycgNCE2XFx1MDI5NSEhICUqXFx1MEE2RCBcXFwiIS5cXHUwMjk2XFxcIlxcXCIyXFx1MDI5NjNcXHUwMjk3KycgNCE2XFx1MDI5OCEhICUqXFx1MEE1NSBcXFwiIS5cXHUwMjk5XFxcIlxcXCIyXFx1MDI5OTNcXHUwMjlBKycgNCE2XFx1MDI5QiEhICUqXFx1MEEzRCBcXFwiIS5cXHUwMjlDXFxcIlxcXCIyXFx1MDI5QzNcXHUwMjlEKycgNCE2XFx1MDI5RSEhICUqXFx1MEEyNSBcXFwiIS5cXHUwMjlGXFxcIlxcXCIyXFx1MDI5RjNcXHUwMkEwKycgNCE2XFx1MDJBMSEhICUqXFx1MEEwRCBcXFwiIS5cXHUwMkEyXFxcIlxcXCIyXFx1MDJBMjNcXHUwMkEzKycgNCE2XFx1MDJBNCEhICUqXFx1MDlGNSBcXFwiIS5cXHUwMkE1XFxcIlxcXCIyXFx1MDJBNTNcXHUwMkE2KycgNCE2XFx1MDJBNyEhICUqXFx1MDlERCBcXFwiIS5cXHUwMkE4XFxcIlxcXCIyXFx1MDJBODNcXHUwMkE5KycgNCE2XFx1MDJBQSEhICUqXFx1MDlDNSBcXFwiIS5cXHUwMkFCXFxcIlxcXCIyXFx1MDJBQjNcXHUwMkFDKycgNCE2XFx1MDJBRCEhICUqXFx1MDlBRCBcXFwiIS5cXHUwMkFFXFxcIlxcXCIyXFx1MDJBRTNcXHUwMkFGKycgNCE2XFx1MDJCMCEhICUqXFx1MDk5NSBcXFwiIS5cXHUwMkIxXFxcIlxcXCIyXFx1MDJCMTNcXHUwMkIyKycgNCE2XFx1MDJCMyEhICUqXFx1MDk3RCBcXFwiIS5cXHUwMkI0XFxcIlxcXCIyXFx1MDJCNDNcXHUwMkI1KycgNCE2XFx1MDJCNiEhICUqXFx1MDk2NSBcXFwiIS5cXHUwMkI3XFxcIlxcXCIyXFx1MDJCNzNcXHUwMkI4KycgNCE2XFx1MDJCOSEhICUqXFx1MDk0RCBcXFwiIS5cXHUwMkJBXFxcIlxcXCIyXFx1MDJCQTNcXHUwMkJCKycgNCE2XFx1MDJCQyEhICUqXFx1MDkzNSBcXFwiIS5cXHUwMkJEXFxcIlxcXCIyXFx1MDJCRDNcXHUwMkJFKycgNCE2XFx1MDJCRiEhICUqXFx1MDkxRCBcXFwiIS5cXHUwMkMwXFxcIlxcXCIyXFx1MDJDMDNcXHUwMkMxKycgNCE2XFx1MDJDMiEhICUqXFx1MDkwNSBcXFwiIS5cXHUwMkMzXFxcIlxcXCIyXFx1MDJDMzNcXHUwMkM0KycgNCE2XFx1MDJDNSEhICUqXFx1MDhFRCBcXFwiIS5cXHUwMkM2XFxcIlxcXCIyXFx1MDJDNjNcXHUwMkM3KycgNCE2XFx1MDJDOCEhICUqXFx1MDhENSBcXFwiIS5cXHUwMkM5XFxcIlxcXCIyXFx1MDJDOTNcXHUwMkNBKycgNCE2XFx1MDJDQiEhICUqXFx1MDhCRCBcXFwiIS5cXHUwMkNDXFxcIlxcXCIyXFx1MDJDQzNcXHUwMkNEKycgNCE2XFx1MDJDRSEhICUqXFx1MDhBNSBcXFwiIS5cXHUwMkNGXFxcIlxcXCIyXFx1MDJDRjNcXHUwMkQwKycgNCE2XFx1MDJEMSEhICUqXFx1MDg4RCBcXFwiIS5cXHUwMkQyXFxcIlxcXCIyXFx1MDJEMjNcXHUwMkQzKycgNCE2XFx1MDJENCEhICUqXFx1MDg3NSBcXFwiIS5cXHUwMkQ1XFxcIlxcXCIyXFx1MDJENTNcXHUwMkQ2KycgNCE2XFx1MDJENyEhICUqXFx1MDg1RCBcXFwiIS5cXHUwMkQ4XFxcIlxcXCIyXFx1MDJEODNcXHUwMkQ5KycgNCE2XFx1MDJEQSEhICUqXFx1MDg0NSBcXFwiIS5cXHUwMkRCXFxcIlxcXCIyXFx1MDJEQjNcXHUwMkRDKycgNCE2XFx1MDJERCEhICUqXFx1MDgyRCBcXFwiIS5cXHUwMkRFXFxcIlxcXCIyXFx1MDJERTNcXHUwMkRGKycgNCE2XFx1MDJFMCEhICUqXFx1MDgxNSBcXFwiIS5cXHUwMkUxXFxcIlxcXCIyXFx1MDJFMTNcXHUwMkUyKycgNCE2XFx1MDJFMyEhICUqXFx1MDdGRCBcXFwiIS5cXHUwMkU0XFxcIlxcXCIyXFx1MDJFNDNcXHUwMkU1KycgNCE2XFx1MDJFNiEhICUqXFx1MDdFNSBcXFwiIS5cXHUwMkU3XFxcIlxcXCIyXFx1MDJFNzNcXHUwMkU4KycgNCE2XFx1MDJFOSEhICUqXFx1MDdDRCBcXFwiIS5cXHUwMkVBXFxcIlxcXCIyXFx1MDJFQTNcXHUwMkVCKycgNCE2XFx1MDJFQyEhICUqXFx1MDdCNSBcXFwiIS5cXHUwMkVEXFxcIlxcXCIyXFx1MDJFRDNcXHUwMkVFKycgNCE2XFx1MDJFRiEhICUqXFx1MDc5RCBcXFwiIS5cXHUwMkYwXFxcIlxcXCIyXFx1MDJGMDNcXHUwMkYxKycgNCE2XFx1MDJGMiEhICUqXFx1MDc4NSBcXFwiIS5cXHUwMkYzXFxcIlxcXCIyXFx1MDJGMzNcXHUwMkY0KycgNCE2XFx1MDJGNSEhICUqXFx1MDc2RCBcXFwiIS5cXHUwMkY2XFxcIlxcXCIyXFx1MDJGNjNcXHUwMkY3KycgNCE2XFx1MDJGOCEhICUqXFx1MDc1NSBcXFwiIS5cXHUwMkY5XFxcIlxcXCIyXFx1MDJGOTNcXHUwMkZBKycgNCE2XFx1MDJGQiEhICUqXFx1MDczRCBcXFwiIS5cXHUwMkZDXFxcIlxcXCIyXFx1MDJGQzNcXHUwMkZEKycgNCE2XFx1MDJGRSEhICUqXFx1MDcyNSBcXFwiIS5cXHUwMkZGXFxcIlxcXCIyXFx1MDJGRjNcXHUwMzAwKycgNCE2XFx1MDMwMSEhICUqXFx1MDcwRCBcXFwiIS5cXHUwMzAyXFxcIlxcXCIyXFx1MDMwMjNcXHUwMzAzKycgNCE2XFx1MDMwNCEhICUqXFx1MDZGNSBcXFwiIS5cXHUwMzA1XFxcIlxcXCIyXFx1MDMwNTNcXHUwMzA2KycgNCE2XFx1MDMwNyEhICUqXFx1MDZERCBcXFwiIS5cXHUwMzA4XFxcIlxcXCIyXFx1MDMwODNcXHUwMzA5KycgNCE2XFx1MDMwQSEhICUqXFx1MDZDNSBcXFwiIS5cXHUwMzBCXFxcIlxcXCIyXFx1MDMwQjNcXHUwMzBDKycgNCE2XFx1MDMwRCEhICUqXFx1MDZBRCBcXFwiIS5cXHUwMzBFXFxcIlxcXCIyXFx1MDMwRTNcXHUwMzBGKycgNCE2XFx1MDMxMCEhICUqXFx1MDY5NSBcXFwiIS5cXHUwMzExXFxcIlxcXCIyXFx1MDMxMTNcXHUwMzEyKycgNCE2XFx1MDMxMyEhICUqXFx1MDY3RCBcXFwiIS5cXHUwMzE0XFxcIlxcXCIyXFx1MDMxNDNcXHUwMzE1KycgNCE2XFx1MDMxNiEhICUqXFx1MDY2NSBcXFwiIS5cXHUwMzE3XFxcIlxcXCIyXFx1MDMxNzNcXHUwMzE4KycgNCE2XFx1MDMxOSEhICUqXFx1MDY0RCBcXFwiIS5cXHUwMzFBXFxcIlxcXCIyXFx1MDMxQTNcXHUwMzFCKycgNCE2XFx1MDMxQyEhICUqXFx1MDYzNSBcXFwiIS5cXHUwMzFEXFxcIlxcXCIyXFx1MDMxRDNcXHUwMzFFKycgNCE2XFx1MDMxRiEhICUqXFx1MDYxRCBcXFwiIS5cXHUwMzIwXFxcIlxcXCIyXFx1MDMyMDNcXHUwMzIxKycgNCE2XFx1MDMyMiEhICUqXFx1MDYwNSBcXFwiIS5cXHUwMzIzXFxcIlxcXCIyXFx1MDMyMzNcXHUwMzI0KycgNCE2XFx1MDMyNSEhICUqXFx1MDVFRCBcXFwiIS5cXHUwMzI2XFxcIlxcXCIyXFx1MDMyNjNcXHUwMzI3KycgNCE2XFx1MDMyOCEhICUqXFx1MDVENSBcXFwiIS5cXHUwMzI5XFxcIlxcXCIyXFx1MDMyOTNcXHUwMzJBKycgNCE2XFx1MDMyQiEhICUqXFx1MDVCRCBcXFwiIS5cXHUwMzJDXFxcIlxcXCIyXFx1MDMyQzNcXHUwMzJEKycgNCE2XFx1MDMyRSEhICUqXFx1MDVBNSBcXFwiIS5cXHUwMzJGXFxcIlxcXCIyXFx1MDMyRjNcXHUwMzMwKycgNCE2XFx1MDMzMSEhICUqXFx1MDU4RCBcXFwiIS5cXHUwMzMyXFxcIlxcXCIyXFx1MDMzMjNcXHUwMzMzKycgNCE2XFx1MDMzNCEhICUqXFx1MDU3NSBcXFwiIS5cXHUwMzM1XFxcIlxcXCIyXFx1MDMzNTNcXHUwMzM2KycgNCE2XFx1MDMzNyEhICUqXFx1MDU1RCBcXFwiIS5cXHUwMzM4XFxcIlxcXCIyXFx1MDMzODNcXHUwMzM5KycgNCE2XFx1MDMzQSEhICUqXFx1MDU0NSBcXFwiIS5cXHUwMzNCXFxcIlxcXCIyXFx1MDMzQjNcXHUwMzNDKycgNCE2XFx1MDMzRCEhICUqXFx1MDUyRCBcXFwiIS5cXHUwMzNFXFxcIlxcXCIyXFx1MDMzRTNcXHUwMzNGKycgNCE2XFx1MDM0MCEhICUqXFx1MDUxNSBcXFwiIS5cXHUwMzQxXFxcIlxcXCIyXFx1MDM0MTNcXHUwMzQyKycgNCE2XFx1MDM0MyEhICUqXFx1MDRGRCBcXFwiIS5cXHUwMzQ0XFxcIlxcXCIyXFx1MDM0NDNcXHUwMzQ1KycgNCE2XFx1MDM0NiEhICUqXFx1MDRFNSBcXFwiIS5cXHUwMzQ3XFxcIlxcXCIyXFx1MDM0NzNcXHUwMzQ4KycgNCE2XFx1MDM0OSEhICUqXFx1MDRDRCBcXFwiIS5cXHUwMzRBXFxcIlxcXCIyXFx1MDM0QTNcXHUwMzRCKycgNCE2XFx1MDM0QyEhICUqXFx1MDRCNSBcXFwiIS5cXHUwMzREXFxcIlxcXCIyXFx1MDM0RDNcXHUwMzRFKycgNCE2XFx1MDM0RiEhICUqXFx1MDQ5RCBcXFwiIS5cXHUwMzUwXFxcIlxcXCIyXFx1MDM1MDNcXHUwMzUxKycgNCE2XFx1MDM1MiEhICUqXFx1MDQ4NSBcXFwiIS5cXHUwMzUzXFxcIlxcXCIyXFx1MDM1MzNcXHUwMzU0KycgNCE2XFx1MDM1NSEhICUqXFx1MDQ2RCBcXFwiIS5cXHUwMzU2XFxcIlxcXCIyXFx1MDM1NjNcXHUwMzU3KycgNCE2XFx1MDM1OCEhICUqXFx1MDQ1NSBcXFwiIS5cXHUwMzU5XFxcIlxcXCIyXFx1MDM1OTNcXHUwMzVBKycgNCE2XFx1MDM1QiEhICUqXFx1MDQzRCBcXFwiIS5cXHUwMzVDXFxcIlxcXCIyXFx1MDM1QzNcXHUwMzVEKycgNCE2XFx1MDM1RSEhICUqXFx1MDQyNSBcXFwiIS5cXHUwMzVGXFxcIlxcXCIyXFx1MDM1RjNcXHUwMzYwKycgNCE2XFx1MDM2MSEhICUqXFx1MDQwRCBcXFwiIS5cXHUwMzYyXFxcIlxcXCIyXFx1MDM2MjNcXHUwMzYzKycgNCE2XFx1MDM2NCEhICUqXFx1MDNGNSBcXFwiIS5cXHUwMzY1XFxcIlxcXCIyXFx1MDM2NTNcXHUwMzY2KycgNCE2XFx1MDM2NyEhICUqXFx1MDNERCBcXFwiIS5cXHUwMzY4XFxcIlxcXCIyXFx1MDM2ODNcXHUwMzY5KycgNCE2XFx1MDM2QSEhICUqXFx1MDNDNSBcXFwiIS5cXHUwMzZCXFxcIlxcXCIyXFx1MDM2QjNcXHUwMzZDKycgNCE2XFx1MDM2RCEhICUqXFx1MDNBRCBcXFwiIS5cXHUwMzZFXFxcIlxcXCIyXFx1MDM2RTNcXHUwMzZGKycgNCE2XFx1MDM3MCEhICUqXFx1MDM5NSBcXFwiIS5cXHUwMzcxXFxcIlxcXCIyXFx1MDM3MTNcXHUwMzcyKycgNCE2XFx1MDM3MyEhICUqXFx1MDM3RCBcXFwiIS5cXHUwMzc0XFxcIlxcXCIyXFx1MDM3NDNcXHUwMzc1KycgNCE2XFx1MDM3NiEhICUqXFx1MDM2NSBcXFwiIS5cXHUwMzc3XFxcIlxcXCIyXFx1MDM3NzNcXHUwMzc4KycgNCE2XFx1MDM3OSEhICUqXFx1MDM0RCBcXFwiIS5cXHUwMzdBXFxcIlxcXCIyXFx1MDM3QTNcXHUwMzdCKycgNCE2XFx1MDM3QyEhICUqXFx1MDMzNSBcXFwiIS5cXHUwMzdEXFxcIlxcXCIyXFx1MDM3RDNcXHUwMzdFKycgNCE2XFx1MDM3RiEhICUqXFx1MDMxRCBcXFwiIS5cXHUwMzgwXFxcIlxcXCIyXFx1MDM4MDNcXHUwMzgxKycgNCE2XFx1MDM4MiEhICUqXFx1MDMwNSBcXFwiIS5cXHUwMzgzXFxcIlxcXCIyXFx1MDM4MzNcXHUwMzg0KycgNCE2XFx1MDM4NSEhICUqXFx1MDJFRCBcXFwiIS5cXHUwMzg2XFxcIlxcXCIyXFx1MDM4NjNcXHUwMzg3KycgNCE2XFx1MDM4OCEhICUqXFx1MDJENSBcXFwiIS5cXHUwMzg5XFxcIlxcXCIyXFx1MDM4OTNcXHUwMzhBKycgNCE2XFx1MDM4QiEhICUqXFx1MDJCRCBcXFwiIS5cXHUwMzhDXFxcIlxcXCIyXFx1MDM4QzNcXHUwMzhEKycgNCE2XFx1MDM4RSEhICUqXFx1MDJBNSBcXFwiIS5cXHUwMzhGXFxcIlxcXCIyXFx1MDM4RjNcXHUwMzkwKycgNCE2XFx1MDM5MSEhICUqXFx1MDI4RCBcXFwiIS5cXHUwMzkyXFxcIlxcXCIyXFx1MDM5MjNcXHUwMzkzKycgNCE2XFx1MDM5NCEhICUqXFx1MDI3NSBcXFwiIS5cXHUwMzk1XFxcIlxcXCIyXFx1MDM5NTNcXHUwMzk2KycgNCE2XFx1MDM5NyEhICUqXFx1MDI1RCBcXFwiIS5cXHUwMzk4XFxcIlxcXCIyXFx1MDM5ODNcXHUwMzk5KycgNCE2XFx1MDM5QSEhICUqXFx1MDI0NSBcXFwiIS5cXHUwMzlCXFxcIlxcXCIyXFx1MDM5QjNcXHUwMzlDKycgNCE2XFx1MDM5RCEhICUqXFx1MDIyRCBcXFwiIS5cXHUwMzlFXFxcIlxcXCIyXFx1MDM5RTNcXHUwMzlGKycgNCE2XFx1MDNBMCEhICUqXFx1MDIxNSBcXFwiIS5cXHUwM0ExXFxcIlxcXCIyXFx1MDNBMTNcXHUwM0EyKycgNCE2XFx1MDNBMyEhICUqXFx1MDFGRCBcXFwiIS5cXHUwM0E0XFxcIlxcXCIyXFx1MDNBNDNcXHUwM0E1KycgNCE2XFx1MDNBNiEhICUqXFx1MDFFNSBcXFwiIS5cXHUwM0E3XFxcIlxcXCIyXFx1MDNBNzNcXHUwM0E4KycgNCE2XFx1MDNBOSEhICUqXFx1MDFDRCBcXFwiIS5cXHUwM0FBXFxcIlxcXCIyXFx1MDNBQTNcXHUwM0FCKycgNCE2XFx1MDNBQyEhICUqXFx1MDFCNSBcXFwiIS5cXHUwM0FEXFxcIlxcXCIyXFx1MDNBRDNcXHUwM0FFKycgNCE2XFx1MDNBRiEhICUqXFx1MDE5RCBcXFwiIS5cXHUwM0IwXFxcIlxcXCIyXFx1MDNCMDNcXHUwM0IxKycgNCE2XFx1MDNCMiEhICUqXFx1MDE4NSBcXFwiIS5cXHUwM0IzXFxcIlxcXCIyXFx1MDNCMzNcXHUwM0I0KycgNCE2XFx1MDNCNSEhICUqXFx1MDE2RCBcXFwiIS5cXHUwM0I2XFxcIlxcXCIyXFx1MDNCNjNcXHUwM0I3KycgNCE2XFx1MDNCOCEhICUqXFx1MDE1NSBcXFwiIS5cXHUwM0I5XFxcIlxcXCIyXFx1MDNCOTNcXHUwM0JBKycgNCE2XFx1MDNCQiEhICUqXFx1MDEzRCBcXFwiIS5cXHUwM0JDXFxcIlxcXCIyXFx1MDNCQzNcXHUwM0JEKycgNCE2XFx1MDNCRSEhICUqXFx1MDEyNSBcXFwiIS5cXHUwM0JGXFxcIlxcXCIyXFx1MDNCRjNcXHUwM0MwKycgNCE2XFx1MDNDMSEhICUqXFx1MDEwRCBcXFwiIS5cXHUwM0MyXFxcIlxcXCIyXFx1MDNDMjNcXHUwM0MzKycgNCE2XFx1MDNDNCEhICUqXFx4RjUgXFxcIiEuXFx1MDNDNVxcXCJcXFwiMlxcdTAzQzUzXFx1MDNDNisnIDQhNlxcdTAzQzchISAlKlxceEREIFxcXCIhLlxcdTAzQzhcXFwiXFxcIjJcXHUwM0M4M1xcdTAzQzkrJyA0ITZcXHUwM0NBISEgJSpcXHhDNSBcXFwiIS5cXHUwM0NCXFxcIlxcXCIyXFx1MDNDQjNcXHUwM0NDKycgNCE2XFx1MDNDRCEhICUqXFx4QUQgXFxcIiEuXFx1MDNDRVxcXCJcXFwiMlxcdTAzQ0UzXFx1MDNDRisnIDQhNlxcdTAzRDAhISAlKlxceDk1IFxcXCIhLlxcdTAzRDFcXFwiXFxcIjJcXHUwM0QxM1xcdTAzRDIrJyA0ITZcXHUwM0QzISEgJSp9IFxcXCIhLlxcdTAzRDRcXFwiXFxcIjJcXHUwM0Q0M1xcdTAzRDUrJyA0ITZcXHUwM0Q2ISEgJSplIFxcXCIhLlxcdTAzRDdcXFwiXFxcIjJcXHUwM0Q3M1xcdTAzRDgrJyA0ITZcXHUwM0Q5ISEgJSpNIFxcXCIhLlxcdTAzREFcXFwiXFxcIjJcXHUwM0RBM1xcdTAzREIrJyA0ITZcXHUwM0RDISEgJSo1IFxcXCIhLlxcdTAzRERcXFwiXFxcIjJcXHUwM0REM1xcdTAzREUrJyA0ITZcXHUwM0RGISEgJVwiKSxcbiAgICAgICAgICBwZWckZGVjb2RlKFwiLlxcdTAzRTBcXFwiXFxcIjJcXHUwM0UwM1xcdTAzRTEqXFx1MDEzMSBcXFwiLlxcdTAzRTJcXFwiXFxcIjJcXHUwM0UyM1xcdTAzRTMqXFx1MDEyNSBcXFwiLlxcdTAzRTRcXFwiXFxcIjJcXHUwM0U0M1xcdTAzRTUqXFx1MDExOSBcXFwiLlxcdTAzOTJcXFwiXFxcIjJcXHUwMzkyM1xcdTAzOTMqXFx1MDEwRCBcXFwiLlxcdTAzOUVcXFwiXFxcIjJcXHUwMzlFM1xcdTAzOUYqXFx1MDEwMSBcXFwiLlxcdTAzOTVcXFwiXFxcIjJcXHUwMzk1M1xcdTAzOTYqXFx4RjUgXFxcIi5cXHUwM0U2XFxcIlxcXCIyXFx1MDNFNjNcXHUwM0U3KlxceEU5IFxcXCIuXFx1MDNFOFxcXCJcXFwiMlxcdTAzRTgzXFx1MDNFOSpcXHhERCBcXFwiLlxcdTAzRDFcXFwiXFxcIjJcXHUwM0QxM1xcdTAzRDIqXFx4RDEgXFxcIi5cXHUwM0VBXFxcIlxcXCIyXFx1MDNFQTNcXHUwM0VCKlxceEM1IFxcXCIuXFx1MDNENFxcXCJcXFwiMlxcdTAzRDQzXFx1MDNENSpcXHhCOSBcXFwiLlxcdTAzRUNcXFwiXFxcIjJcXHUwM0VDM1xcdTAzRUQqXFx4QUQgXFxcIi5cXHUwM0FBXFxcIlxcXCIyXFx1MDNBQTNcXHUwM0FCKlxceEExIFxcXCIuXFx1MDM4RlxcXCJcXFwiMlxcdTAzOEYzXFx1MDM5MCpcXHg5NSBcXFwiLlxcdTAzRUVcXFwiXFxcIjJcXHUwM0VFM1xcdTAzRUYqXFx4ODkgXFxcIi5cXHUwM0YwXFxcIlxcXCIyXFx1MDNGMDNcXHUwM0YxKn0gXFxcIi5cXHUwM0YyXFxcIlxcXCIyXFx1MDNGMjNcXHUwM0YzKnEgXFxcIi5cXHUwM0RBXFxcIlxcXCIyXFx1MDNEQTNcXHUwM0RCKmUgXFxcIi5cXHUwM0Y0XFxcIlxcXCIyXFx1MDNGNDNcXHUwM0Y1KlkgXFxcIi5cXHUwM0Y2XFxcIlxcXCIyXFx1MDNGNjNcXHUwM0Y3Kk0gXFxcIi5cXHUwM0Y4XFxcIlxcXCIyXFx1MDNGODNcXHUwM0Y5KkEgXFxcIi5cXHUwM0ZBXFxcIlxcXCIyXFx1MDNGQTNcXHUwM0ZCKjUgXFxcIi5cXHUwM0ZDXFxcIlxcXCIyXFx1MDNGQzNcXHUwM0ZEKikgXFxcIi5cXHUwM0ZFXFxcIlxcXCIyXFx1MDNGRTNcXHUwM0ZGXCIpXG4gICAgICAgIF0sXG5cbiAgICAgICAgcGVnJGN1cnJQb3MgICAgICAgICAgPSAwLFxuICAgICAgICBwZWckcmVwb3J0ZWRQb3MgICAgICA9IDAsXG4gICAgICAgIHBlZyRjYWNoZWRQb3MgICAgICAgID0gMCxcbiAgICAgICAgcGVnJGNhY2hlZFBvc0RldGFpbHMgPSB7IGxpbmU6IDEsIGNvbHVtbjogMSwgc2VlbkNSOiBmYWxzZSB9LFxuICAgICAgICBwZWckbWF4RmFpbFBvcyAgICAgICA9IDAsXG4gICAgICAgIHBlZyRtYXhGYWlsRXhwZWN0ZWQgID0gW10sXG4gICAgICAgIHBlZyRzaWxlbnRGYWlscyAgICAgID0gMCxcblxuICAgICAgICBwZWckcmVzdWx0O1xuXG4gICAgaWYgKFwic3RhcnRSdWxlXCIgaW4gb3B0aW9ucykge1xuICAgICAgaWYgKCEob3B0aW9ucy5zdGFydFJ1bGUgaW4gcGVnJHN0YXJ0UnVsZUluZGljZXMpKSB7XG4gICAgICAgIHRocm93IG5ldyBFcnJvcihcIkNhbid0IHN0YXJ0IHBhcnNpbmcgZnJvbSBydWxlIFxcXCJcIiArIG9wdGlvbnMuc3RhcnRSdWxlICsgXCJcXFwiLlwiKTtcbiAgICAgIH1cblxuICAgICAgcGVnJHN0YXJ0UnVsZUluZGV4ID0gcGVnJHN0YXJ0UnVsZUluZGljZXNbb3B0aW9ucy5zdGFydFJ1bGVdO1xuICAgIH1cblxuICAgIGZ1bmN0aW9uIHRleHQoKSB7XG4gICAgICByZXR1cm4gaW5wdXQuc3Vic3RyaW5nKHBlZyRyZXBvcnRlZFBvcywgcGVnJGN1cnJQb3MpO1xuICAgIH1cblxuICAgIGZ1bmN0aW9uIG9mZnNldCgpIHtcbiAgICAgIHJldHVybiBwZWckcmVwb3J0ZWRQb3M7XG4gICAgfVxuXG4gICAgZnVuY3Rpb24gbGluZSgpIHtcbiAgICAgIHJldHVybiBwZWckY29tcHV0ZVBvc0RldGFpbHMocGVnJHJlcG9ydGVkUG9zKS5saW5lO1xuICAgIH1cblxuICAgIGZ1bmN0aW9uIGNvbHVtbigpIHtcbiAgICAgIHJldHVybiBwZWckY29tcHV0ZVBvc0RldGFpbHMocGVnJHJlcG9ydGVkUG9zKS5jb2x1bW47XG4gICAgfVxuXG4gICAgZnVuY3Rpb24gZXhwZWN0ZWQoZGVzY3JpcHRpb24pIHtcbiAgICAgIHRocm93IHBlZyRidWlsZEV4Y2VwdGlvbihcbiAgICAgICAgbnVsbCxcbiAgICAgICAgW3sgdHlwZTogXCJvdGhlclwiLCBkZXNjcmlwdGlvbjogZGVzY3JpcHRpb24gfV0sXG4gICAgICAgIHBlZyRyZXBvcnRlZFBvc1xuICAgICAgKTtcbiAgICB9XG5cbiAgICBmdW5jdGlvbiBlcnJvcihtZXNzYWdlKSB7XG4gICAgICB0aHJvdyBwZWckYnVpbGRFeGNlcHRpb24obWVzc2FnZSwgbnVsbCwgcGVnJHJlcG9ydGVkUG9zKTtcbiAgICB9XG5cbiAgICBmdW5jdGlvbiBwZWckY29tcHV0ZVBvc0RldGFpbHMocG9zKSB7XG4gICAgICBmdW5jdGlvbiBhZHZhbmNlKGRldGFpbHMsIHN0YXJ0UG9zLCBlbmRQb3MpIHtcbiAgICAgICAgdmFyIHAsIGNoO1xuXG4gICAgICAgIGZvciAocCA9IHN0YXJ0UG9zOyBwIDwgZW5kUG9zOyBwKyspIHtcbiAgICAgICAgICBjaCA9IGlucHV0LmNoYXJBdChwKTtcbiAgICAgICAgICBpZiAoY2ggPT09IFwiXFxuXCIpIHtcbiAgICAgICAgICAgIGlmICghZGV0YWlscy5zZWVuQ1IpIHsgZGV0YWlscy5saW5lKys7IH1cbiAgICAgICAgICAgIGRldGFpbHMuY29sdW1uID0gMTtcbiAgICAgICAgICAgIGRldGFpbHMuc2VlbkNSID0gZmFsc2U7XG4gICAgICAgICAgfSBlbHNlIGlmIChjaCA9PT0gXCJcXHJcIiB8fCBjaCA9PT0gXCJcXHUyMDI4XCIgfHwgY2ggPT09IFwiXFx1MjAyOVwiKSB7XG4gICAgICAgICAgICBkZXRhaWxzLmxpbmUrKztcbiAgICAgICAgICAgIGRldGFpbHMuY29sdW1uID0gMTtcbiAgICAgICAgICAgIGRldGFpbHMuc2VlbkNSID0gdHJ1ZTtcbiAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgZGV0YWlscy5jb2x1bW4rKztcbiAgICAgICAgICAgIGRldGFpbHMuc2VlbkNSID0gZmFsc2U7XG4gICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICB9XG5cbiAgICAgIGlmIChwZWckY2FjaGVkUG9zICE9PSBwb3MpIHtcbiAgICAgICAgaWYgKHBlZyRjYWNoZWRQb3MgPiBwb3MpIHtcbiAgICAgICAgICBwZWckY2FjaGVkUG9zID0gMDtcbiAgICAgICAgICBwZWckY2FjaGVkUG9zRGV0YWlscyA9IHsgbGluZTogMSwgY29sdW1uOiAxLCBzZWVuQ1I6IGZhbHNlIH07XG4gICAgICAgIH1cbiAgICAgICAgYWR2YW5jZShwZWckY2FjaGVkUG9zRGV0YWlscywgcGVnJGNhY2hlZFBvcywgcG9zKTtcbiAgICAgICAgcGVnJGNhY2hlZFBvcyA9IHBvcztcbiAgICAgIH1cblxuICAgICAgcmV0dXJuIHBlZyRjYWNoZWRQb3NEZXRhaWxzO1xuICAgIH1cblxuICAgIGZ1bmN0aW9uIHBlZyRmYWlsKGV4cGVjdGVkKSB7XG4gICAgICBpZiAocGVnJGN1cnJQb3MgPCBwZWckbWF4RmFpbFBvcykgeyByZXR1cm47IH1cblxuICAgICAgaWYgKHBlZyRjdXJyUG9zID4gcGVnJG1heEZhaWxQb3MpIHtcbiAgICAgICAgcGVnJG1heEZhaWxQb3MgPSBwZWckY3VyclBvcztcbiAgICAgICAgcGVnJG1heEZhaWxFeHBlY3RlZCA9IFtdO1xuICAgICAgfVxuXG4gICAgICBwZWckbWF4RmFpbEV4cGVjdGVkLnB1c2goZXhwZWN0ZWQpO1xuICAgIH1cblxuICAgIGZ1bmN0aW9uIHBlZyRidWlsZEV4Y2VwdGlvbihtZXNzYWdlLCBleHBlY3RlZCwgcG9zKSB7XG4gICAgICBmdW5jdGlvbiBjbGVhbnVwRXhwZWN0ZWQoZXhwZWN0ZWQpIHtcbiAgICAgICAgdmFyIGkgPSAxO1xuXG4gICAgICAgIGV4cGVjdGVkLnNvcnQoZnVuY3Rpb24oYSwgYikge1xuICAgICAgICAgIGlmIChhLmRlc2NyaXB0aW9uIDwgYi5kZXNjcmlwdGlvbikge1xuICAgICAgICAgICAgcmV0dXJuIC0xO1xuICAgICAgICAgIH0gZWxzZSBpZiAoYS5kZXNjcmlwdGlvbiA+IGIuZGVzY3JpcHRpb24pIHtcbiAgICAgICAgICAgIHJldHVybiAxO1xuICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICByZXR1cm4gMDtcbiAgICAgICAgICB9XG4gICAgICAgIH0pO1xuXG4gICAgICAgIHdoaWxlIChpIDwgZXhwZWN0ZWQubGVuZ3RoKSB7XG4gICAgICAgICAgaWYgKGV4cGVjdGVkW2kgLSAxXSA9PT0gZXhwZWN0ZWRbaV0pIHtcbiAgICAgICAgICAgIGV4cGVjdGVkLnNwbGljZShpLCAxKTtcbiAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgaSsrO1xuICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgfVxuXG4gICAgICBmdW5jdGlvbiBidWlsZE1lc3NhZ2UoZXhwZWN0ZWQsIGZvdW5kKSB7XG4gICAgICAgIGZ1bmN0aW9uIHN0cmluZ0VzY2FwZShzKSB7XG4gICAgICAgICAgZnVuY3Rpb24gaGV4KGNoKSB7IHJldHVybiBjaC5jaGFyQ29kZUF0KDApLnRvU3RyaW5nKDE2KS50b1VwcGVyQ2FzZSgpOyB9XG5cbiAgICAgICAgICByZXR1cm4gc1xuICAgICAgICAgICAgLnJlcGxhY2UoL1xcXFwvZywgICAnXFxcXFxcXFwnKVxuICAgICAgICAgICAgLnJlcGxhY2UoL1wiL2csICAgICdcXFxcXCInKVxuICAgICAgICAgICAgLnJlcGxhY2UoL1xceDA4L2csICdcXFxcYicpXG4gICAgICAgICAgICAucmVwbGFjZSgvXFx0L2csICAgJ1xcXFx0JylcbiAgICAgICAgICAgIC5yZXBsYWNlKC9cXG4vZywgICAnXFxcXG4nKVxuICAgICAgICAgICAgLnJlcGxhY2UoL1xcZi9nLCAgICdcXFxcZicpXG4gICAgICAgICAgICAucmVwbGFjZSgvXFxyL2csICAgJ1xcXFxyJylcbiAgICAgICAgICAgIC5yZXBsYWNlKC9bXFx4MDAtXFx4MDdcXHgwQlxceDBFXFx4MEZdL2csIGZ1bmN0aW9uKGNoKSB7IHJldHVybiAnXFxcXHgwJyArIGhleChjaCk7IH0pXG4gICAgICAgICAgICAucmVwbGFjZSgvW1xceDEwLVxceDFGXFx4ODAtXFx4RkZdL2csICAgIGZ1bmN0aW9uKGNoKSB7IHJldHVybiAnXFxcXHgnICArIGhleChjaCk7IH0pXG4gICAgICAgICAgICAucmVwbGFjZSgvW1xcdTAxODAtXFx1MEZGRl0vZywgICAgICAgICBmdW5jdGlvbihjaCkgeyByZXR1cm4gJ1xcXFx1MCcgKyBoZXgoY2gpOyB9KVxuICAgICAgICAgICAgLnJlcGxhY2UoL1tcXHUxMDgwLVxcdUZGRkZdL2csICAgICAgICAgZnVuY3Rpb24oY2gpIHsgcmV0dXJuICdcXFxcdScgICsgaGV4KGNoKTsgfSk7XG4gICAgICAgIH1cblxuICAgICAgICB2YXIgZXhwZWN0ZWREZXNjcyA9IG5ldyBBcnJheShleHBlY3RlZC5sZW5ndGgpLFxuICAgICAgICAgICAgZXhwZWN0ZWREZXNjLCBmb3VuZERlc2MsIGk7XG5cbiAgICAgICAgZm9yIChpID0gMDsgaSA8IGV4cGVjdGVkLmxlbmd0aDsgaSsrKSB7XG4gICAgICAgICAgZXhwZWN0ZWREZXNjc1tpXSA9IGV4cGVjdGVkW2ldLmRlc2NyaXB0aW9uO1xuICAgICAgICB9XG5cbiAgICAgICAgZXhwZWN0ZWREZXNjID0gZXhwZWN0ZWQubGVuZ3RoID4gMVxuICAgICAgICAgID8gZXhwZWN0ZWREZXNjcy5zbGljZSgwLCAtMSkuam9pbihcIiwgXCIpXG4gICAgICAgICAgICAgICsgXCIgb3IgXCJcbiAgICAgICAgICAgICAgKyBleHBlY3RlZERlc2NzW2V4cGVjdGVkLmxlbmd0aCAtIDFdXG4gICAgICAgICAgOiBleHBlY3RlZERlc2NzWzBdO1xuXG4gICAgICAgIGZvdW5kRGVzYyA9IGZvdW5kID8gXCJcXFwiXCIgKyBzdHJpbmdFc2NhcGUoZm91bmQpICsgXCJcXFwiXCIgOiBcImVuZCBvZiBpbnB1dFwiO1xuXG4gICAgICAgIHJldHVybiBcIkV4cGVjdGVkIFwiICsgZXhwZWN0ZWREZXNjICsgXCIgYnV0IFwiICsgZm91bmREZXNjICsgXCIgZm91bmQuXCI7XG4gICAgICB9XG5cbiAgICAgIHZhciBwb3NEZXRhaWxzID0gcGVnJGNvbXB1dGVQb3NEZXRhaWxzKHBvcyksXG4gICAgICAgICAgZm91bmQgICAgICA9IHBvcyA8IGlucHV0Lmxlbmd0aCA/IGlucHV0LmNoYXJBdChwb3MpIDogbnVsbDtcblxuICAgICAgaWYgKGV4cGVjdGVkICE9PSBudWxsKSB7XG4gICAgICAgIGNsZWFudXBFeHBlY3RlZChleHBlY3RlZCk7XG4gICAgICB9XG5cbiAgICAgIHJldHVybiBuZXcgU3ludGF4RXJyb3IoXG4gICAgICAgIG1lc3NhZ2UgIT09IG51bGwgPyBtZXNzYWdlIDogYnVpbGRNZXNzYWdlKGV4cGVjdGVkLCBmb3VuZCksXG4gICAgICAgIGV4cGVjdGVkLFxuICAgICAgICBmb3VuZCxcbiAgICAgICAgcG9zLFxuICAgICAgICBwb3NEZXRhaWxzLmxpbmUsXG4gICAgICAgIHBvc0RldGFpbHMuY29sdW1uXG4gICAgICApO1xuICAgIH1cblxuICAgIGZ1bmN0aW9uIHBlZyRkZWNvZGUocykge1xuICAgICAgdmFyIGJjID0gbmV3IEFycmF5KHMubGVuZ3RoKSwgaTtcblxuICAgICAgZm9yIChpID0gMDsgaSA8IHMubGVuZ3RoOyBpKyspIHtcbiAgICAgICAgYmNbaV0gPSBzLmNoYXJDb2RlQXQoaSkgLSAzMjtcbiAgICAgIH1cblxuICAgICAgcmV0dXJuIGJjO1xuICAgIH1cblxuICAgIGZ1bmN0aW9uIHBlZyRwYXJzZVJ1bGUoaW5kZXgpIHtcbiAgICAgIHZhciBiYyAgICA9IHBlZyRieXRlY29kZVtpbmRleF0sXG4gICAgICAgICAgaXAgICAgPSAwLFxuICAgICAgICAgIGlwcyAgID0gW10sXG4gICAgICAgICAgZW5kICAgPSBiYy5sZW5ndGgsXG4gICAgICAgICAgZW5kcyAgPSBbXSxcbiAgICAgICAgICBzdGFjayA9IFtdLFxuICAgICAgICAgIHBhcmFtcywgaTtcblxuICAgICAgZnVuY3Rpb24gcHJvdGVjdChvYmplY3QpIHtcbiAgICAgICAgcmV0dXJuIE9iamVjdC5wcm90b3R5cGUudG9TdHJpbmcuYXBwbHkob2JqZWN0KSA9PT0gXCJbb2JqZWN0IEFycmF5XVwiID8gW10gOiBvYmplY3Q7XG4gICAgICB9XG5cbiAgICAgIHdoaWxlICh0cnVlKSB7XG4gICAgICAgIHdoaWxlIChpcCA8IGVuZCkge1xuICAgICAgICAgIHN3aXRjaCAoYmNbaXBdKSB7XG4gICAgICAgICAgICBjYXNlIDA6XG4gICAgICAgICAgICAgIHN0YWNrLnB1c2gocHJvdGVjdChwZWckY29uc3RzW2JjW2lwICsgMV1dKSk7XG4gICAgICAgICAgICAgIGlwICs9IDI7XG4gICAgICAgICAgICAgIGJyZWFrO1xuXG4gICAgICAgICAgICBjYXNlIDE6XG4gICAgICAgICAgICAgIHN0YWNrLnB1c2gocGVnJGN1cnJQb3MpO1xuICAgICAgICAgICAgICBpcCsrO1xuICAgICAgICAgICAgICBicmVhaztcblxuICAgICAgICAgICAgY2FzZSAyOlxuICAgICAgICAgICAgICBzdGFjay5wb3AoKTtcbiAgICAgICAgICAgICAgaXArKztcbiAgICAgICAgICAgICAgYnJlYWs7XG5cbiAgICAgICAgICAgIGNhc2UgMzpcbiAgICAgICAgICAgICAgcGVnJGN1cnJQb3MgPSBzdGFjay5wb3AoKTtcbiAgICAgICAgICAgICAgaXArKztcbiAgICAgICAgICAgICAgYnJlYWs7XG5cbiAgICAgICAgICAgIGNhc2UgNDpcbiAgICAgICAgICAgICAgc3RhY2subGVuZ3RoIC09IGJjW2lwICsgMV07XG4gICAgICAgICAgICAgIGlwICs9IDI7XG4gICAgICAgICAgICAgIGJyZWFrO1xuXG4gICAgICAgICAgICBjYXNlIDU6XG4gICAgICAgICAgICAgIHN0YWNrLnNwbGljZSgtMiwgMSk7XG4gICAgICAgICAgICAgIGlwKys7XG4gICAgICAgICAgICAgIGJyZWFrO1xuXG4gICAgICAgICAgICBjYXNlIDY6XG4gICAgICAgICAgICAgIHN0YWNrW3N0YWNrLmxlbmd0aCAtIDJdLnB1c2goc3RhY2sucG9wKCkpO1xuICAgICAgICAgICAgICBpcCsrO1xuICAgICAgICAgICAgICBicmVhaztcblxuICAgICAgICAgICAgY2FzZSA3OlxuICAgICAgICAgICAgICBzdGFjay5wdXNoKHN0YWNrLnNwbGljZShzdGFjay5sZW5ndGggLSBiY1tpcCArIDFdLCBiY1tpcCArIDFdKSk7XG4gICAgICAgICAgICAgIGlwICs9IDI7XG4gICAgICAgICAgICAgIGJyZWFrO1xuXG4gICAgICAgICAgICBjYXNlIDg6XG4gICAgICAgICAgICAgIHN0YWNrLnBvcCgpO1xuICAgICAgICAgICAgICBzdGFjay5wdXNoKGlucHV0LnN1YnN0cmluZyhzdGFja1tzdGFjay5sZW5ndGggLSAxXSwgcGVnJGN1cnJQb3MpKTtcbiAgICAgICAgICAgICAgaXArKztcbiAgICAgICAgICAgICAgYnJlYWs7XG5cbiAgICAgICAgICAgIGNhc2UgOTpcbiAgICAgICAgICAgICAgZW5kcy5wdXNoKGVuZCk7XG4gICAgICAgICAgICAgIGlwcy5wdXNoKGlwICsgMyArIGJjW2lwICsgMV0gKyBiY1tpcCArIDJdKTtcblxuICAgICAgICAgICAgICBpZiAoc3RhY2tbc3RhY2subGVuZ3RoIC0gMV0pIHtcbiAgICAgICAgICAgICAgICBlbmQgPSBpcCArIDMgKyBiY1tpcCArIDFdO1xuICAgICAgICAgICAgICAgIGlwICs9IDM7XG4gICAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgICAgZW5kID0gaXAgKyAzICsgYmNbaXAgKyAxXSArIGJjW2lwICsgMl07XG4gICAgICAgICAgICAgICAgaXAgKz0gMyArIGJjW2lwICsgMV07XG4gICAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgICBicmVhaztcblxuICAgICAgICAgICAgY2FzZSAxMDpcbiAgICAgICAgICAgICAgZW5kcy5wdXNoKGVuZCk7XG4gICAgICAgICAgICAgIGlwcy5wdXNoKGlwICsgMyArIGJjW2lwICsgMV0gKyBiY1tpcCArIDJdKTtcblxuICAgICAgICAgICAgICBpZiAoc3RhY2tbc3RhY2subGVuZ3RoIC0gMV0gPT09IHBlZyRGQUlMRUQpIHtcbiAgICAgICAgICAgICAgICBlbmQgPSBpcCArIDMgKyBiY1tpcCArIDFdO1xuICAgICAgICAgICAgICAgIGlwICs9IDM7XG4gICAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgICAgZW5kID0gaXAgKyAzICsgYmNbaXAgKyAxXSArIGJjW2lwICsgMl07XG4gICAgICAgICAgICAgICAgaXAgKz0gMyArIGJjW2lwICsgMV07XG4gICAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgICBicmVhaztcblxuICAgICAgICAgICAgY2FzZSAxMTpcbiAgICAgICAgICAgICAgZW5kcy5wdXNoKGVuZCk7XG4gICAgICAgICAgICAgIGlwcy5wdXNoKGlwICsgMyArIGJjW2lwICsgMV0gKyBiY1tpcCArIDJdKTtcblxuICAgICAgICAgICAgICBpZiAoc3RhY2tbc3RhY2subGVuZ3RoIC0gMV0gIT09IHBlZyRGQUlMRUQpIHtcbiAgICAgICAgICAgICAgICBlbmQgPSBpcCArIDMgKyBiY1tpcCArIDFdO1xuICAgICAgICAgICAgICAgIGlwICs9IDM7XG4gICAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgICAgZW5kID0gaXAgKyAzICsgYmNbaXAgKyAxXSArIGJjW2lwICsgMl07XG4gICAgICAgICAgICAgICAgaXAgKz0gMyArIGJjW2lwICsgMV07XG4gICAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgICBicmVhaztcblxuICAgICAgICAgICAgY2FzZSAxMjpcbiAgICAgICAgICAgICAgaWYgKHN0YWNrW3N0YWNrLmxlbmd0aCAtIDFdICE9PSBwZWckRkFJTEVEKSB7XG4gICAgICAgICAgICAgICAgZW5kcy5wdXNoKGVuZCk7XG4gICAgICAgICAgICAgICAgaXBzLnB1c2goaXApO1xuXG4gICAgICAgICAgICAgICAgZW5kID0gaXAgKyAyICsgYmNbaXAgKyAxXTtcbiAgICAgICAgICAgICAgICBpcCArPSAyO1xuICAgICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAgIGlwICs9IDIgKyBiY1tpcCArIDFdO1xuICAgICAgICAgICAgICB9XG5cbiAgICAgICAgICAgICAgYnJlYWs7XG5cbiAgICAgICAgICAgIGNhc2UgMTM6XG4gICAgICAgICAgICAgIGVuZHMucHVzaChlbmQpO1xuICAgICAgICAgICAgICBpcHMucHVzaChpcCArIDMgKyBiY1tpcCArIDFdICsgYmNbaXAgKyAyXSk7XG5cbiAgICAgICAgICAgICAgaWYgKGlucHV0Lmxlbmd0aCA+IHBlZyRjdXJyUG9zKSB7XG4gICAgICAgICAgICAgICAgZW5kID0gaXAgKyAzICsgYmNbaXAgKyAxXTtcbiAgICAgICAgICAgICAgICBpcCArPSAzO1xuICAgICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAgIGVuZCA9IGlwICsgMyArIGJjW2lwICsgMV0gKyBiY1tpcCArIDJdO1xuICAgICAgICAgICAgICAgIGlwICs9IDMgKyBiY1tpcCArIDFdO1xuICAgICAgICAgICAgICB9XG5cbiAgICAgICAgICAgICAgYnJlYWs7XG5cbiAgICAgICAgICAgIGNhc2UgMTQ6XG4gICAgICAgICAgICAgIGVuZHMucHVzaChlbmQpO1xuICAgICAgICAgICAgICBpcHMucHVzaChpcCArIDQgKyBiY1tpcCArIDJdICsgYmNbaXAgKyAzXSk7XG5cbiAgICAgICAgICAgICAgaWYgKGlucHV0LnN1YnN0cihwZWckY3VyclBvcywgcGVnJGNvbnN0c1tiY1tpcCArIDFdXS5sZW5ndGgpID09PSBwZWckY29uc3RzW2JjW2lwICsgMV1dKSB7XG4gICAgICAgICAgICAgICAgZW5kID0gaXAgKyA0ICsgYmNbaXAgKyAyXTtcbiAgICAgICAgICAgICAgICBpcCArPSA0O1xuICAgICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAgIGVuZCA9IGlwICsgNCArIGJjW2lwICsgMl0gKyBiY1tpcCArIDNdO1xuICAgICAgICAgICAgICAgIGlwICs9IDQgKyBiY1tpcCArIDJdO1xuICAgICAgICAgICAgICB9XG5cbiAgICAgICAgICAgICAgYnJlYWs7XG5cbiAgICAgICAgICAgIGNhc2UgMTU6XG4gICAgICAgICAgICAgIGVuZHMucHVzaChlbmQpO1xuICAgICAgICAgICAgICBpcHMucHVzaChpcCArIDQgKyBiY1tpcCArIDJdICsgYmNbaXAgKyAzXSk7XG5cbiAgICAgICAgICAgICAgaWYgKGlucHV0LnN1YnN0cihwZWckY3VyclBvcywgcGVnJGNvbnN0c1tiY1tpcCArIDFdXS5sZW5ndGgpLnRvTG93ZXJDYXNlKCkgPT09IHBlZyRjb25zdHNbYmNbaXAgKyAxXV0pIHtcbiAgICAgICAgICAgICAgICBlbmQgPSBpcCArIDQgKyBiY1tpcCArIDJdO1xuICAgICAgICAgICAgICAgIGlwICs9IDQ7XG4gICAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgICAgZW5kID0gaXAgKyA0ICsgYmNbaXAgKyAyXSArIGJjW2lwICsgM107XG4gICAgICAgICAgICAgICAgaXAgKz0gNCArIGJjW2lwICsgMl07XG4gICAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgICBicmVhaztcblxuICAgICAgICAgICAgY2FzZSAxNjpcbiAgICAgICAgICAgICAgZW5kcy5wdXNoKGVuZCk7XG4gICAgICAgICAgICAgIGlwcy5wdXNoKGlwICsgNCArIGJjW2lwICsgMl0gKyBiY1tpcCArIDNdKTtcblxuICAgICAgICAgICAgICBpZiAocGVnJGNvbnN0c1tiY1tpcCArIDFdXS50ZXN0KGlucHV0LmNoYXJBdChwZWckY3VyclBvcykpKSB7XG4gICAgICAgICAgICAgICAgZW5kID0gaXAgKyA0ICsgYmNbaXAgKyAyXTtcbiAgICAgICAgICAgICAgICBpcCArPSA0O1xuICAgICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAgIGVuZCA9IGlwICsgNCArIGJjW2lwICsgMl0gKyBiY1tpcCArIDNdO1xuICAgICAgICAgICAgICAgIGlwICs9IDQgKyBiY1tpcCArIDJdO1xuICAgICAgICAgICAgICB9XG5cbiAgICAgICAgICAgICAgYnJlYWs7XG5cbiAgICAgICAgICAgIGNhc2UgMTc6XG4gICAgICAgICAgICAgIHN0YWNrLnB1c2goaW5wdXQuc3Vic3RyKHBlZyRjdXJyUG9zLCBiY1tpcCArIDFdKSk7XG4gICAgICAgICAgICAgIHBlZyRjdXJyUG9zICs9IGJjW2lwICsgMV07XG4gICAgICAgICAgICAgIGlwICs9IDI7XG4gICAgICAgICAgICAgIGJyZWFrO1xuXG4gICAgICAgICAgICBjYXNlIDE4OlxuICAgICAgICAgICAgICBzdGFjay5wdXNoKHBlZyRjb25zdHNbYmNbaXAgKyAxXV0pO1xuICAgICAgICAgICAgICBwZWckY3VyclBvcyArPSBwZWckY29uc3RzW2JjW2lwICsgMV1dLmxlbmd0aDtcbiAgICAgICAgICAgICAgaXAgKz0gMjtcbiAgICAgICAgICAgICAgYnJlYWs7XG5cbiAgICAgICAgICAgIGNhc2UgMTk6XG4gICAgICAgICAgICAgIHN0YWNrLnB1c2gocGVnJEZBSUxFRCk7XG4gICAgICAgICAgICAgIGlmIChwZWckc2lsZW50RmFpbHMgPT09IDApIHtcbiAgICAgICAgICAgICAgICBwZWckZmFpbChwZWckY29uc3RzW2JjW2lwICsgMV1dKTtcbiAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICBpcCArPSAyO1xuICAgICAgICAgICAgICBicmVhaztcblxuICAgICAgICAgICAgY2FzZSAyMDpcbiAgICAgICAgICAgICAgcGVnJHJlcG9ydGVkUG9zID0gc3RhY2tbc3RhY2subGVuZ3RoIC0gMSAtIGJjW2lwICsgMV1dO1xuICAgICAgICAgICAgICBpcCArPSAyO1xuICAgICAgICAgICAgICBicmVhaztcblxuICAgICAgICAgICAgY2FzZSAyMTpcbiAgICAgICAgICAgICAgcGVnJHJlcG9ydGVkUG9zID0gcGVnJGN1cnJQb3M7XG4gICAgICAgICAgICAgIGlwKys7XG4gICAgICAgICAgICAgIGJyZWFrO1xuXG4gICAgICAgICAgICBjYXNlIDIyOlxuICAgICAgICAgICAgICBwYXJhbXMgPSBiYy5zbGljZShpcCArIDQsIGlwICsgNCArIGJjW2lwICsgM10pO1xuICAgICAgICAgICAgICBmb3IgKGkgPSAwOyBpIDwgYmNbaXAgKyAzXTsgaSsrKSB7XG4gICAgICAgICAgICAgICAgcGFyYW1zW2ldID0gc3RhY2tbc3RhY2subGVuZ3RoIC0gMSAtIHBhcmFtc1tpXV07XG4gICAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgICBzdGFjay5zcGxpY2UoXG4gICAgICAgICAgICAgICAgc3RhY2subGVuZ3RoIC0gYmNbaXAgKyAyXSxcbiAgICAgICAgICAgICAgICBiY1tpcCArIDJdLFxuICAgICAgICAgICAgICAgIHBlZyRjb25zdHNbYmNbaXAgKyAxXV0uYXBwbHkobnVsbCwgcGFyYW1zKVxuICAgICAgICAgICAgICApO1xuXG4gICAgICAgICAgICAgIGlwICs9IDQgKyBiY1tpcCArIDNdO1xuICAgICAgICAgICAgICBicmVhaztcblxuICAgICAgICAgICAgY2FzZSAyMzpcbiAgICAgICAgICAgICAgc3RhY2sucHVzaChwZWckcGFyc2VSdWxlKGJjW2lwICsgMV0pKTtcbiAgICAgICAgICAgICAgaXAgKz0gMjtcbiAgICAgICAgICAgICAgYnJlYWs7XG5cbiAgICAgICAgICAgIGNhc2UgMjQ6XG4gICAgICAgICAgICAgIHBlZyRzaWxlbnRGYWlscysrO1xuICAgICAgICAgICAgICBpcCsrO1xuICAgICAgICAgICAgICBicmVhaztcblxuICAgICAgICAgICAgY2FzZSAyNTpcbiAgICAgICAgICAgICAgcGVnJHNpbGVudEZhaWxzLS07XG4gICAgICAgICAgICAgIGlwKys7XG4gICAgICAgICAgICAgIGJyZWFrO1xuXG4gICAgICAgICAgICBkZWZhdWx0OlxuICAgICAgICAgICAgICB0aHJvdyBuZXcgRXJyb3IoXCJJbnZhbGlkIG9wY29kZTogXCIgKyBiY1tpcF0gKyBcIi5cIik7XG4gICAgICAgICAgfVxuICAgICAgICB9XG5cbiAgICAgICAgaWYgKGVuZHMubGVuZ3RoID4gMCkge1xuICAgICAgICAgIGVuZCA9IGVuZHMucG9wKCk7XG4gICAgICAgICAgaXAgPSBpcHMucG9wKCk7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgYnJlYWs7XG4gICAgICAgIH1cbiAgICAgIH1cblxuICAgICAgcmV0dXJuIHN0YWNrWzBdO1xuICAgIH1cblxuXG4gICAgICBoZWxwZXJzID0gcmVxdWlyZSgnLi4vbGliL2hlbHBlcnMnKTtcbiAgICAgIHByZWZpeGVzID0gcmVxdWlyZSgnLi9wcmVmaXhlcy5qc29uJyk7XG4gICAgICBtZXRyaWNzID0gcmVxdWlyZSgnLi9tZXRyaWNzLmpzb24nKTtcbiAgICAgIG11bHRpcGx5ID0gaGVscGVycy5tdWx0aXBseTtcbiAgICAgIHRvcG93ZXIgPSBoZWxwZXJzLnRvcG93ZXI7XG4gICAgICBjbGVhbnVwID0gaGVscGVycy5jbGVhbnVwO1xuICAgICAgaXNtZXRyaWMgPSBoZWxwZXJzLmlzbWV0cmljKG1ldHJpY3MpO1xuXG5cbiAgICBwZWckcmVzdWx0ID0gcGVnJHBhcnNlUnVsZShwZWckc3RhcnRSdWxlSW5kZXgpO1xuXG4gICAgaWYgKHBlZyRyZXN1bHQgIT09IHBlZyRGQUlMRUQgJiYgcGVnJGN1cnJQb3MgPT09IGlucHV0Lmxlbmd0aCkge1xuICAgICAgcmV0dXJuIHBlZyRyZXN1bHQ7XG4gICAgfSBlbHNlIHtcbiAgICAgIGlmIChwZWckcmVzdWx0ICE9PSBwZWckRkFJTEVEICYmIHBlZyRjdXJyUG9zIDwgaW5wdXQubGVuZ3RoKSB7XG4gICAgICAgIHBlZyRmYWlsKHsgdHlwZTogXCJlbmRcIiwgZGVzY3JpcHRpb246IFwiZW5kIG9mIGlucHV0XCIgfSk7XG4gICAgICB9XG5cbiAgICAgIHRocm93IHBlZyRidWlsZEV4Y2VwdGlvbihudWxsLCBwZWckbWF4RmFpbEV4cGVjdGVkLCBwZWckbWF4RmFpbFBvcyk7XG4gICAgfVxuICB9XG5cbiAgcmV0dXJuIHtcbiAgICBTeW50YXhFcnJvcjogU3ludGF4RXJyb3IsXG4gICAgcGFyc2U6ICAgICAgIHBhcnNlXG4gIH07XG59KSgpO1xuIiwibW9kdWxlLmV4cG9ydHMgPSB7XG5cbiAgbXVsdGlwbHk6IGZ1bmN0aW9uIG11bHRpcGx5KHQsIG1zKSB7XG4gICAgaWYgKG1zLmxlbmd0aCA9PSAwKSByZXR1cm4gdDtcblxuICAgIHZhciByZXQgPSB0O1xuICAgIG1zLmZvckVhY2goZnVuY3Rpb24obXRlcm0pe1xuXG4gICAgICB2YXIgc2lnbiA9IChtdGVybVswXSA9PSBcIi5cIiA/IDEgOiAtMSk7XG4gICAgICB2YXIgYiA9IG10ZXJtWzFdO1xuXG4gICAgICByZXQudmFsdWUgKj0gTWF0aC5wb3coYi52YWx1ZSwgc2lnbik7XG4gICAgICBPYmplY3Qua2V5cyhiLnVuaXRzKS5mb3JFYWNoKGZ1bmN0aW9uKHUpe1xuICAgICAgICByZXQudW5pdHNbdV0gPSByZXQudW5pdHNbdV0gfHwgMDtcbiAgICAgICAgcmV0LnVuaXRzW3VdID0gcmV0LnVuaXRzW3VdICsgc2lnbipiLnVuaXRzW3VdO1xuICAgICAgICBpZiAocmV0LnVuaXRzW3VdID09IDApe1xuICAgICAgICAgIGRlbGV0ZSByZXQudW5pdHNbdV07XG4gICAgICAgIH1cbiAgICAgIH0pO1xuXG4gICAgfSk7XG4gICAgcmV0dXJuIHJldDtcbiAgfSxcblxuICB0b3Bvd2VyOiBmdW5jdGlvbiB0b3Bvd2VyKGUsIGV4cCl7XG4gICAgaWYgKCFleHApIHtleHAgPSAxO31cbiAgICB2YXIgcmV0ID0gZTtcbiAgICByZXQudmFsdWUgPSBNYXRoLnBvdyhyZXQudmFsdWUsIGV4cCk7XG4gICAgT2JqZWN0LmtleXMoZS51bml0cykuZm9yRWFjaChmdW5jdGlvbih1KXtcbiAgICAgIHJldC51bml0c1t1XSA9IGUudW5pdHNbdV0gKiBleHA7XG4gICAgfSk7XG5cbiAgICByZXR1cm4gcmV0O1xuICB9LFxuXG4gIGNsZWFudXA6IGZ1bmN0aW9uIGNsZWFudXAoZSkge1xuICAgIFtcIjEwXlwiLCBcIjEwKlwiXS5mb3JFYWNoKGZ1bmN0aW9uKGspe1xuICAgICAgaWYgKGUudW5pdHNba10pIHtcbiAgICAgICAgZS52YWx1ZSAqPSBNYXRoLnBvdygxMCwgZS51bml0c1trXSk7XG4gICAgICAgIGRlbGV0ZSBlLnVuaXRzW2tdO1xuICAgICAgfVxuICAgIH0pXG4gICAgcmV0dXJuIGU7XG4gIH0sXG5cbiAgaXNtZXRyaWM6IGZ1bmN0aW9uKG1ldHJpY3MpIHtcbiAgICByZXR1cm4gZnVuY3Rpb24odSkge1xuICAgICAgcmV0dXJuIG1ldHJpY3NbT2JqZWN0LmtleXModS51bml0cylbMF1dICE9PSB1bmRlZmluZWQ7XG4gICAgfTtcbiAgfVxufVxuIiwicGFyc2VyID0gcmVxdWlyZSgnLi9nZW5lcmF0ZWQvdWN1bS1wYXJzZXIuanMnKTtcbmVxdWl2YWxlbnRzID0gcmVxdWlyZSgnLi9nZW5lcmF0ZWQvZXF1aXZhbGVudHMuanNvbicpO1xuaGVscGVycyA9IHJlcXVpcmUoJy4vbGliL2hlbHBlcnMuanMnKTtcblxubW9kdWxlLmV4cG9ydHMgPSB7XG4gIHBhcnNlOiBwYXJzZSxcbiAgY2Fub25pY2FsaXplOiBjYW5vbmljYWxpemUsXG4gIGNvbnZlcnQ6IGNvbnZlcnRcbn07XG5cbmZ1bmN0aW9uIHBhcnNlKHZhbHVlLCB1bml0cyl7XG5cbiAgaWYgKGFyZ3VtZW50cy5sZW5ndGggPT09IDEgfHwgdW5pdHMgPT09IHVuZGVmaW5lZCl7XG4gICAgdW5pdHMgPSB2YWx1ZTtcbiAgICB2YWx1ZSA9IDFcbiAgfVxuXG4gIGlmICh1bml0cy5tYXRjaCgvXlxcLy8pKXtcbiAgICB1bml0cyA9ICcxJyt1bml0cztcbiAgfVxuXG4gIGlmICh1bml0cyA9PT0gJycpIHVuaXRzID0gJzEnO1xuXG4gIHZhciByZXQgPSBwYXJzZXIucGFyc2UodW5pdHMpO1xuICByZXQudmFsdWUgKj0gdmFsdWU7XG4gIHJldHVybiByZXQ7XG59XG5cbmZ1bmN0aW9uIG5vbkJhc2VVbml0KHUpe1xuICByZXR1cm4gZXF1aXZhbGVudHNbdV0gIT09IHVuZGVmaW5lZDtcbn1cblxuZnVuY3Rpb24gcmVtYWluaW5nTm9uQmFzZVVuaXRzKHZhbHVlKSB7XG4gIHJldHVybiBPYmplY3Qua2V5cyh2YWx1ZS51bml0cykuZmlsdGVyKG5vbkJhc2VVbml0KVxufVxuXG5mdW5jdGlvbiBjYW5vbmljYWxpemUodmFsdWUsIHVuaXRzKXtcblxuICB2YWx1ZSA9IHBhcnNlKHZhbHVlLCB1bml0cyk7XG5cbiAgdmFyIHJlbWFpbmluZyA9IHJlbWFpbmluZ05vbkJhc2VVbml0cyh2YWx1ZSk7XG5cbiAgd2hpbGUgKHJlbWFpbmluZy5sZW5ndGgpIHtcbiAgICBpZiAocmVtYWluaW5nLmxlbmd0aCA9PT0gMCkge1xuICAgICAgcmV0dXJuIGZhbHNlO1xuICAgIH1cblxuICAgIHJlbWFpbmluZy5mb3JFYWNoKGZ1bmN0aW9uKHUpe1xuICAgICAgdmFyIHN1YiA9IHBhcnNlKGVxdWl2YWxlbnRzW3VdLnVjdW0pO1xuICAgICAgc3ViLnZhbHVlICo9IGVxdWl2YWxlbnRzW3VdLnZhbHVlO1xuICAgICAgc3ViID0gaGVscGVycy50b3Bvd2VyKHN1YiwgdmFsdWUudW5pdHNbdV0pO1xuICAgICAgdmFsdWUgPSBoZWxwZXJzLm11bHRpcGx5KHZhbHVlLCBbWycuJywgc3ViXV0pO1xuICAgICAgZGVsZXRlIHZhbHVlLnVuaXRzW3VdO1xuICAgIH0pO1xuXG4gICAgcmVtYWluaW5nID0gcmVtYWluaW5nTm9uQmFzZVVuaXRzKHZhbHVlKTtcbiAgfVxuXG4gIHJldHVybiB2YWx1ZTtcbn1cblxuZnVuY3Rpb24gY29uZm9ybWFudChhLCBiKXtcbiAgdmFyIHJldCA9IHRydWU7XG4gIE9iamVjdC5rZXlzKGEudW5pdHMpXG4gIC5jb25jYXQoT2JqZWN0LmtleXMoYi51bml0cykpXG4gIC5mb3JFYWNoKGZ1bmN0aW9uKGspe1xuICAgIGlmIChhLnVuaXRzW2tdICE9PSBiLnVuaXRzW2tdKSB7XG4gICAgICByZXQgPSBmYWxzZTtcbiAgICB9XG4gIH0pO1xuICBcbiAgcmV0dXJuIHJldDtcbn1cblxuZnVuY3Rpb24gY29udmVydChmcm9tVmFsdWUsIGZyb21Vbml0cywgdG9Vbml0cyl7XG4gZnJvbWMgPSBjYW5vbmljYWxpemUoZnJvbVZhbHVlLCBmcm9tVW5pdHMpO1xuIHRvYyA9IGNhbm9uaWNhbGl6ZSh0b1VuaXRzKTtcblxuIGlmICghY29uZm9ybWFudChmcm9tYywgdG9jKSl7XG4gICB0aHJvdyBcIk5vbi1jb25mb3JtYW50IHVuaXRzOyBjYW4ndCBjb252ZXJ0IGZyb20gXCIgKyBmcm9tVW5pdHMgKyBcIiB0byBcIiArIHRvVW5pdHMgO1xuIH1cblxuIHJldHVybiBmcm9tYy52YWx1ZSAvIHRvYy52YWx1ZTtcblxufVxuIl19
