(function(f){if(typeof exports==="object"&&typeof module!=="undefined"){module.exports=f()}else if(typeof define==="function"&&define.amd){define([],f)}else{var g;if(typeof window!=="undefined"){g=window}else if(typeof global!=="undefined"){g=global}else if(typeof self!=="undefined"){g=self}else{g=this}g.FB = f()}})(function(){var define,module,exports;return (function e(t,n,r){function s(o,u){if(!n[o]){if(!t[o]){var a=typeof require=="function"&&require;if(!u&&a)return a(o,!0);if(i)return i(o,!0);var f=new Error("Cannot find module '"+o+"'");throw f.code="MODULE_NOT_FOUND",f}var l=n[o]={exports:{}};t[o][0].call(l.exports,function(e){var n=t[o][1][e];return s(n?n:e)},l,l.exports,e,t,n,r)}return n[o].exports}var i=typeof require=="function"&&require;for(var o=0;o<r.length;o++)s(r[o]);return s})({"/Users/jrmerz/dev/cstars/AHB/farm-budgets-app/lib/shared/config/default.json":[function(require,module,exports){
module.exports={
    "application":"farm-budgets"
}

},{}],"/Users/jrmerz/dev/cstars/AHB/farm-budgets-app/lib/shared/config/poplar-example.json":[function(require,module,exports){
module.exports={
  "prices": [
    {
      "unit": "us$/h",
      "price": 50,
      "material": "3-Wheel Ag Sprayer"
    },
    {
      "unit": "us$/h",
      "price": 90,
      "material": "Challenger tractor"
    },
    {
      "unit": "us$/h",
      "price": 1.2,
      "material": "Cooler/van"
    },
    {
      "unit": "us$/h",
      "price": 155,
      "material": "Eliminator"
    },
    {
      "unit": "us$/h",
      "price": 180,
      "material": "FR 6080 FH"
    },
    {
      "unit": "us$/h",
      "price": 70,
      "material": "Large tractor"
    },
    {
      "unit": "us$/h",
      "price": 45,
      "material": "Mid-size tractor"
    },
    {
      "unit": "us$/h",
      "price": 55,
      "material": "Semi-tractor trailer"
    },
    {
      "unit": "us$/h",
      "price": 30,
      "material": "Small tractor"
    },
    {
      "unit": "us$/h",
      "price": 25,
      "material": "Support Truck"
    },
    {
      "unit": "us$/h",
      "price": 25,
      "material": "Tandem axle truck"
    },
    {
      "unit": "us$/h",
      "price": 50,
      "material": "Tractor and sprayer"
    },
    {
      "unit": "us$/h",
      "price": 30,
      "material": "3-Wheel ag sprayer"
    },
    {
      "unit": "us$/h",
      "price": 35,
      "material": "Challenger tractor"
    },
    {
      "unit": "us$/h",
      "price": 0.71,
      "material": "Cooler/van"
    },
    {
      "unit": "us$/h",
      "price": 30,
      "material": "FR 6080 FH"
    },
    {
      "unit": "us$/h",
      "price": 17,
      "material": "Laborer"
    },
    {
      "unit": "us$/h",
      "price": 35,
      "material": "Labor--Large tractor"
    },
    {
      "unit": "us$/h",
      "price": 22,
      "material": "Labor--Mid-size tractor"
    },
    {
      "unit": "us$/h",
      "price": 28,
      "material": "Labor--Semi-tractor trailer"
    },
    {
      "unit": "us$/h",
      "price": 22,
      "material": "Labor--Small tractor"
    },
    {
      "unit": "us$/h",
      "price": 26,
      "material": "Labor--Supervisor"
    },
    {
      "unit": "us$/h",
      "price": 30,
      "material": "Labor--Support Truck"
    },
    {
      "unit": "us$/h",
      "price": 26,
      "material": "Labor--Tandem axle truck"
    },
    {
      "unit": "us$/h",
      "price": 30,
      "material": "Labor--Tractor and Sprayer"
    },
    {
      "unit": "us$/[gal_us]",
      "price": 2.81,
      "material": "Equipment Fuel"
    },
    {
      "unit": "us$/[qt_us]",
      "price": 5,
      "material": "2,4-D"
    },
    {
      "unit": "us$/[qt_us]",
      "price": 210,
      "material": "Coragen"
    },
    {
      "unit": "us$/[qt_us]",
      "price": 30,
      "material": "Fusilade"
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
      "unit": "us$/[qt_us]",
      "price": 56,
      "material": "Imidacloprid"
    },
    {
      "unit": "us$/[lb_av]",
      "price": 64,
      "material": "Oust"
    },
    {
      "unit": "us$/[lb_av]",
      "price": 1.85,
      "material": "Rozol"
    },
    {
      "unit": "us$/[lb_av]",
      "price": 130,
      "material": "Sureguard"
    },
    {
      "unit": "us$/[gal_us]",
      "price": 215,
      "material": "Transline"
    },
    {
      "unit": "us$/[qt_us]",
      "price": 7.5,
      "material": "Trifluralin"
    },
    {
      "unit": "us$/1",
      "price": 0.08,
      "material": "Poplar Cutting"
    },
    {
      "unit": "us$/[acr_us].[in_us]",
      "price": 6,
      "material": "Irrigation Cost"
    }
  ],
  "materials": [
    {
      "class": "fertilizer",
      "material": "0-0-60"
    },
    {
      "class": "fertilizer",
      "material": "10-34-00"
    },
    {
      "class": "fertilizer",
      "material": "11-52-0"
    },
    {
      "class": "fertilizer",
      "material": "13-0-45"
    },
    {
      "class": "fertilizer",
      "material": "16-16-16"
    },
    {
      "class": "fertilizer",
      "material": "16-20-0-14"
    },
    {
      "class": "fertilizer",
      "material": "18-0-5-4"
    },
    {
      "class": "fertilizer",
      "material": "2,4-D"
    },
    {
      "class": "fertilizer",
      "material": "32-0-0"
    },
    {
      "class": "fertilizer",
      "material": "33-0-0-12"
    },
    {
      "class": "fertilizer",
      "material": "40-0-0-6"
    },
    {
      "class": "fertilizer",
      "material": "46-0-0"
    },
    {
      "class": "fertilizer",
      "material": "80-0-0"
    },
    {
      "class": "fertilizer",
      "material": "80-00-00"
    },
    {
      "class": "pesticide",
      "material": "Achieve SC"
    },
    {
      "class": "pesticide",
      "material": "Admire"
    },
    {
      "class": "pesticide",
      "material": "Admire Pro"
    },
    {
      "class": "pesticide",
      "material": "Air Application"
    },
    {
      "class": "pesticide",
      "material": "Alcala"
    },
    {
      "class": "pesticide",
      "material": "Ammonium Sulfate"
    },
    {
      "class": "pesticide",
      "material": "AMS"
    },
    {
      "class": "pesticide",
      "material": "Apogee"
    },
    {
      "class": "pesticide",
      "material": "Assail 70WP"
    },
    {
      "class": "pesticide",
      "material": "Assesment"
    },
    {
      "class": "pesticide",
      "material": "Assure II"
    },
    {
      "class": "pesticide",
      "material": "Axiom LB"
    },
    {
      "class": "pesticide",
      "material": "Axiom OZ"
    },
    {
      "class": "pesticide",
      "material": "Bale"
    },
    {
      "class": "pesticide",
      "material": "Baling"
    },
    {
      "class": "pesticide",
      "material": "Banvel"
    },
    {
      "class": "seed",
      "material": "Barley Seed"
    },
    {
      "class": "pesticide",
      "material": "Bee Hives"
    },
    {
      "class": "pesticide",
      "material": "Bravo"
    },
    {
      "class": "pesticide",
      "material": "Broadcast Fertilizer"
    },
    {
      "class": "pesticide",
      "material": "Brox M"
    },
    {
      "class": "seed",
      "material": "Canola Seed"
    },
    {
      "class": "processing",
      "material": "Capture"
    },
    {
      "class": "pesticide",
      "material": "Carbine 50WG"
    },
    {
      "class": "pesticide",
      "material": "Clarity"
    },
    {
      "class": "processing",
      "material": "Clean Seed Orchdgr"
    },
    {
      "class": "labor",
      "material": "Combine"
    },
    {
      "class": "labor",
      "material": "Combine Wheat"
    },
    {
      "class": "processing",
      "material": "Commision Assess"
    },
    {
      "class": "processing",
      "material": "Commission Assess"
    },
    {
      "class": "processing",
      "material": "Consultant"
    },
    {
      "class": "labor",
      "material": "Cool and Pack"
    },
    {
      "class": "seed",
      "material": "Corn Seed"
    },
    {
      "class": "processing",
      "material": "Cotton Assesment"
    },
    {
      "class": "pesticide",
      "material": "Counter 15G L-N-L"
    },
    {
      "class": "insurance",
      "material": "Crop Insurance"
    },
    {
      "class": "processing",
      "material": "Custom Aerial Spray"
    },
    {
      "class": "processing",
      "material": "Custom Air Spray"
    },
    {
      "class": "processing",
      "material": "Custom Air Spray - 5G"
    },
    {
      "class": "processing",
      "material": "Custom Combining"
    },
    {
      "class": "processing",
      "material": "Custom Fertilize"
    },
    {
      "class": "processing",
      "material": "Custom Fumigate - Deep"
    },
    {
      "class": "processing",
      "material": "Custom Sidedress"
    },
    {
      "class": "processing",
      "material": "Cut/Windrow"
    },
    {
      "class": "pesticide",
      "material": "Dacthal"
    },
    {
      "class": "pesticide",
      "material": "Defol 5"
    },
    {
      "class": "pesticide",
      "material": "Devrinol 50DF"
    },
    {
      "class": "pesticide",
      "material": "Dimethoate"
    },
    {
      "class": "pesticide",
      "material": "Diomethate"
    },
    {
      "class": "pesticide",
      "material": "Discover"
    },
    {
      "class": "pesticide",
      "material": "Disyston"
    },
    {
      "class": "pesticide",
      "material": "Di-Syston"
    },
    {
      "class": "pesticide",
      "material": "Dithane F45 Rainshield"
    },
    {
      "class": "pesticide",
      "material": "Diuron"
    },
    {
      "class": "fertilizer",
      "material": "Dry Nitrogen"
    },
    {
      "class": "fertilizer",
      "material": "Dry Nitrogen - Preplant"
    },
    {
      "class": "fertilizer",
      "material": "Dry P2O5"
    },
    {
      "class": "fertilizer",
      "material": "Dry Phosphate"
    },
    {
      "class": "fertilizer",
      "material": "Dry Potash"
    },
    {
      "class": "fertilizer",
      "material": "Dry Sulfur"
    },
    {
      "class": "pesticide",
      "material": "Endura (2x)"
    },
    {
      "class": "pesticide",
      "material": "Eptam 7EC"
    },
    {
      "description": "Cost Estimate",
      "class": "any",
      "material": "estimate"
    },
    {
      "class": "pesticide",
      "material": "Excel 90"
    },
    {
      "class": "pesticide",
      "material": "Far-GO"
    },
    {
      "class": "processing",
      "material": "Fees Assesment"
    },
    {
      "class": "pesticide",
      "material": "Finish 6 Pro"
    },
    {
      "class": "material",
      "material": "Fuel"
    },
    {
      "class": "material",
      "material": "Fuel - Diesel"
    },
    {
      "class": "material",
      "material": "Fuel - Gas"
    },
    {
      "class": "processing",
      "material": "Fumigation"
    },
    {
      "class": "pesticide",
      "material": "Gen 25WG"
    },
    {
      "class": "pesticide",
      "material": "Ginstar"
    },
    {
      "class": "pesticide",
      "material": "Glyphosate GAL1"
    },
    {
      "class": "pesticide",
      "material": "Goal"
    },
    {
      "class": "pesticide",
      "material": "Goal Tender"
    },
    {
      "class": "labor",
      "material": "Gopher Control"
    },
    {
      "class": "processing",
      "material": "Ground Application"
    },
    {
      "class": "pesticide",
      "material": "Harmony Extra"
    },
    {
      "class": "processing",
      "material": "Harvest"
    },
    {
      "class": "processing",
      "material": "Harvest Combine Grain"
    },
    {
      "class": "processing",
      "material": "Harvest for Grain"
    },
    {
      "class": "processing",
      "material": "Harvest: Haul Grain"
    },
    {
      "class": "processing",
      "material": "Haul and Stack"
    },
    {
      "class": "processing",
      "material": "Haul Local"
    },
    {
      "class": "pesticide",
      "material": "Headline"
    },
    {
      "class": "processing",
      "material": "Injection-Sidedress"
    },
    {
      "class": "processing",
      "material": "Injection-Sidedress NH3"
    },
    {
      "class": "processing",
      "material": "Insecticide"
    },
    {
      "class": "water",
      "material": "Irrigation"
    },
    {
      "class": "fertilizer",
      "material": "K20"
    },
    {
      "class": "fertilizer",
      "material": "K2O"
    },
    {
      "class": "pesticide",
      "material": "Karmex"
    },
    {
      "class": "pesticide",
      "material": "Karmex DF"
    },
    {
      "class": "pesticide",
      "material": "Kerb"
    },
    {
      "class": "labor",
      "material": "Labor (Irrigation)"
    },
    {
      "class": "labor",
      "material": "Labor (Machine)"
    },
    {
      "class": "labor",
      "material": "Labor (non-machine)"
    },
    {
      "class": "labor",
      "material": "Labor (other)"
    },
    {
      "description": "Irrigated Land Rent",
      "class": "rent",
      "material": "land-rent-irrigated"
    },
    {
      "description": "Non irrigated Land Rent",
      "class": "rent",
      "material": "land-rent-nonirrigated"
    },
    {
      "description": "Pasture irrigated Land Rent",
      "class": "rent",
      "material": "land-rent-pasture"
    },
    {
      "class": "pesticide",
      "material": "Lannate 90 SP"
    },
    {
      "class": "seed",
      "material": "Lentil Seed"
    },
    {
      "class": "pesticide",
      "material": "Leverage"
    },
    {
      "class": "pesticide",
      "material": "Leverage 2.7"
    },
    {
      "class": "pesticide",
      "material": "LI 700"
    },
    {
      "class": "material",
      "material": "Lime"
    },
    {
      "class": "fertilizer",
      "material": "Liquid Nitrogen"
    },
    {
      "class": "fertilizer",
      "material": "Liquid P2O5"
    },
    {
      "class": "pesticide",
      "material": "Lorsban 15G"
    },
    {
      "class": "pesticide",
      "material": "Lorsban 4E"
    },
    {
      "class": "material",
      "material": "Lube"
    },
    {
      "class": "material",
      "material": "Lubricants"
    },
    {
      "class": "pesticide",
      "material": "M90"
    },
    {
      "class": "labor",
      "material": "Maintenance"
    },
    {
      "class": "labor",
      "material": "Maintenance and Repair"
    },
    {
      "class": "pesticide",
      "material": "Malathion"
    },
    {
      "class": "processing",
      "material": "Management"
    },
    {
      "class": "pesticide",
      "material": "Maverick"
    },
    {
      "class": "pesticide",
      "material": "MCPA Amine"
    },
    {
      "class": "pesticide",
      "material": "Mepex Gin Our"
    },
    {
      "class": "pesticide",
      "material": "Metam Sodium"
    },
    {
      "class": "fertilizer",
      "material": "Micronutrients"
    },
    {
      "class": "pesticide",
      "material": "Micro-Tech"
    },
    {
      "class": "fertilizer",
      "material": "Mulch"
    },
    {
      "class": "pesticide",
      "material": "Mustang 1.5 EW"
    },
    {
      "class": "fertilizer",
      "material": "Nitrogen"
    },
    {
      "class": "fertilizer",
      "material": "Nitrogen (dry)"
    },
    {
      "class": "pesticide",
      "material": "Oberon 25C"
    },
    {
      "description": "[45-2091 Agricultural Equipment Operators](http://www.bls.gov/oes/current/oes452091.htm)",
      "class": "labor",
      "material": "oes452091"
    },
    {
      "description": "[45-2092 Farmworkers and Laborers, Crop, Nursery, and Greenhouse](http://www.bls.gov/oes/current/oes452092.htm)",
      "class": "labor",
      "material": "oes452092"
    },
    {
      "description": "[53-3032 Heavy and Tractor-Trailer Truck Drivers](http://www.bls.gov/oes/current/oes533032.htm)",
      "class": "labor",
      "material": "oes533032"
    },
    {
      "class": "pesticide",
      "material": "Orthene"
    },
    {
      "class": "pesticide",
      "material": "Osprey"
    },
    {
      "class": "pesticide",
      "material": "Outlook 6EC"
    },
    {
      "class": "material",
      "material": "Packing"
    },
    {
      "class": "processing",
      "material": "Pest Control Consultant"
    },
    {
      "class": "fertilizer",
      "material": "Phosphorous"
    },
    {
      "class": "fertilizer",
      "material": "Phosphorous (dry)"
    },
    {
      "class": "labor",
      "material": "Pick Berries"
    },
    {
      "class": "labor",
      "material": "Plant"
    },
    {
      "class": "labor",
      "material": "Planting"
    },
    {
      "class": "processing",
      "material": "Poncho Beta Seed Treatment"
    },
    {
      "class": "labor",
      "material": "Postharvest and packaging"
    },
    {
      "class": "seed",
      "material": "Potato Seed"
    },
    {
      "class": "pesticide",
      "material": "Pristine"
    },
    {
      "class": "pesticide",
      "material": "Prowl"
    },
    {
      "class": "pesticide",
      "material": "Prowl 3.3EC"
    },
    {
      "class": "pesticide",
      "material": "Prowl H20"
    },
    {
      "class": "pesticide",
      "material": "Puma 1EC"
    },
    {
      "class": "material",
      "material": "Purity and Germ"
    },
    {
      "class": "pesticide",
      "material": "Pursuit"
    },
    {
      "class": "pesticide",
      "material": "Quadris"
    },
    {
      "class": "pesticide",
      "material": "Quilt"
    },
    {
      "class": "material",
      "material": "Rake"
    },
    {
      "class": "pesticide",
      "material": "Rally 40 WSP"
    },
    {
      "class": "pesticide",
      "material": "Reglone"
    },
    {
      "class": "processing",
      "material": "Rental Fertilizer Applicator"
    },
    {
      "class": "processing",
      "material": "Rental Ripper Shooter"
    },
    {
      "class": "processing",
      "material": "Rental Sprayer"
    },
    {
      "class": "processing",
      "material": "Repair"
    },
    {
      "class": "pesticide",
      "material": "Ridomil Gold EC"
    },
    {
      "class": "processing",
      "material": "Riper Shooter"
    },
    {
      "class": "processing",
      "material": "Roadside Bales"
    },
    {
      "class": "processing",
      "material": "Roadside Hay"
    },
    {
      "class": "labor",
      "material": "Rodent Control"
    },
    {
      "class": "pesticide",
      "material": "Roundup"
    },
    {
      "class": "pesticide",
      "material": "Roundup Original Max"
    },
    {
      "class": "pesticide",
      "material": "Roundup Ultra Max"
    },
    {
      "class": "material",
      "material": "Sawdust"
    },
    {
      "class": "processing",
      "material": "Seed Clean and Bag"
    },
    {
      "class": "processing",
      "material": "Seed Cleand and Bag"
    },
    {
      "class": "processing",
      "material": "Seed Test"
    },
    {
      "class": "pesticide",
      "material": "Select Max"
    },
    {
      "class": "pesticide",
      "material": "Sencor"
    },
    {
      "class": "pesticide",
      "material": "Sencor 4L"
    },
    {
      "class": "pesticide",
      "material": "Sencor 75DF"
    },
    {
      "class": "pesticide",
      "material": "Sevin XLR Plus"
    },
    {
      "class": "pesticide",
      "material": "Shark EW"
    },
    {
      "class": "pesticide",
      "material": "Slug Bait"
    },
    {
      "class": "pesticide",
      "material": "Sonalan HFP"
    },
    {
      "class": "seed",
      "material": "Sorghum Seed"
    },
    {
      "class": "pesticide",
      "material": "Spot Spray Roundup"
    },
    {
      "class": "labor",
      "material": "Sprayer"
    },
    {
      "class": "pesticide",
      "material": "Staple"
    },
    {
      "class": "pesticide",
      "material": "Starane+Salvo"
    },
    {
      "class": "pesticide",
      "material": "Starane+Sword"
    },
    {
      "class": "processing",
      "material": "Storage Operating Costs"
    },
    {
      "class": "processing",
      "material": "Storage Repairs"
    },
    {
      "class": "pesticide",
      "material": "Stratego"
    },
    {
      "class": "labor",
      "material": "Stuble Shredder"
    },
    {
      "class": "pesticide",
      "material": "Success"
    },
    {
      "class": "processing",
      "material": "Sugarbeet"
    },
    {
      "class": "fertilizer",
      "material": "Sulfur"
    },
    {
      "class": "fertilizer",
      "material": "Sulfur (dry)"
    },
    {
      "class": "fertilizer",
      "material": "Sulfuric Acid"
    },
    {
      "class": "fertilizer",
      "material": "Surfactant-Induce"
    },
    {
      "class": "pesticide",
      "material": "Surflan AS"
    },
    {
      "class": "seed",
      "material": "Susan Seed"
    },
    {
      "class": "processing",
      "material": "Swath"
    },
    {
      "class": "processing",
      "material": "Swathing"
    },
    {
      "class": "labor",
      "material": "Swath Rake"
    },
    {
      "class": "pesticide",
      "material": "Synapse WG"
    },
    {
      "class": "processing",
      "material": "Tarping"
    },
    {
      "class": "pesticide",
      "material": "Telone II"
    },
    {
      "class": "processing",
      "material": "Tissue Analysis"
    },
    {
      "class": "processing",
      "material": "Transport"
    },
    {
      "class": "processing",
      "material": "Transport to PDX"
    },
    {
      "class": "pesticide",
      "material": "Treflan 4HFP"
    },
    {
      "class": "pesticide",
      "material": "Treflan FP"
    },
    {
      "class": "pesticide",
      "material": "Treflan TR 10"
    },
    {
      "class": "pesticide",
      "material": "Triflurex HFP"
    },
    {
      "class": "fertilizer",
      "material": "UN32"
    },
    {
      "class": "pesticide",
      "material": "Velpar L"
    },
    {
      "class": "water",
      "material": "Water"
    },
    {
      "class": "processing",
      "material": "Water Assesment"
    },
    {
      "class": "labor",
      "material": "Weed Control"
    },
    {
      "class": "processing",
      "material": "Wheat Assesment"
    },
    {
      "class": "seed",
      "material": "Wheat Seed"
    },
    {
      "class": "material",
      "material": "Yukon"
    },
    {
      "class": "material",
      "material": "Zephyr"
    },
    {
      "class": "fertilizer",
      "material": "Zinc"
    },
    {
      "requires": [
        {
          "unit": "[gal_us]/h",
          "amount": 3.96,
          "material": "Equipment Fuel"
        },
        {
          "unit": "h/h",
          "amount": 1,
          "material": "Labor--3-Wheel Ag Sprayer"
        }
      ],
      "class": "equipment",
      "unit": "h",
      "material": "3-Wheel Ag Sprayer"
    },
    {
      "requires": [
        {
          "unit": "[gal_us]/h",
          "amount": 19.36,
          "material": "Equipment Fuel"
        },
        {
          "unit": "h/h",
          "amount": 1,
          "material": "Labor--Challenger tractor"
        }
      ],
      "class": "equipment",
      "unit": "h",
      "material": "Challenger tractor"
    },
    {
      "requires": [
        {
          "unit": "[gal_us]/h",
          "amount": 0.96,
          "material": "Equipment Fuel"
        },
        {
          "unit": "h/h",
          "amount": 1,
          "material": "Labor--Cooler/van"
        }
      ],
      "class": "equipment",
      "unit": "h",
      "material": "Cooler/van"
    },
    {
      "requires": [
        {
          "unit": "[gal_us]/h",
          "amount": 19.36,
          "material": "Equipment Fuel"
        },
        {
          "unit": "h/h",
          "amount": 1,
          "material": "Labor--Eliminator"
        }
      ],
      "class": "equipment",
      "unit": "h",
      "material": "Eliminator"
    },
    {
      "requires": [
        {
          "unit": "[gal_us]/h",
          "amount": 13.2,
          "material": "Equipment Fuel"
        },
        {
          "unit": "h/h",
          "amount": 1,
          "material": "Labor--FR 6080 FH"
        }
      ],
      "class": "equipment",
      "unit": "h",
      "material": "FR 6080 FH"
    },
    {
      "requires": [
        {
          "unit": "[gal_us]/h",
          "amount": 13.2,
          "material": "Equipment Fuel"
        },
        {
          "unit": "h/h",
          "amount": 1,
          "material": "Labor--Large tractor"
        }
      ],
      "class": "equipment",
      "unit": "h",
      "material": "Large tractor"
    },
    {
      "requires": [
        {
          "unit": "[gal_us]/h",
          "amount": 3.96,
          "material": "Equipment Fuel"
        },
        {
          "unit": "h/h",
          "amount": 1,
          "material": "Labor--Mid-size tractor"
        }
      ],
      "class": "equipment",
      "unit": "h",
      "material": "Mid-size tractor"
    },
    {
      "requires": [
        {
          "unit": "[gal_us]/h",
          "amount": 6.5,
          "material": "Equipment Fuel"
        },
        {
          "unit": "h/h",
          "amount": 1,
          "material": "Labor--Semi-tractor trailer"
        }
      ],
      "class": "equipment",
      "unit": "h",
      "material": "Semi-tractor trailer"
    },
    {
      "requires": [
        {
          "unit": "[gal_us]/h",
          "amount": 1.98,
          "material": "Equipment Fuel"
        },
        {
          "unit": "h/h",
          "amount": 1,
          "material": "Labor--Small tractor"
        }
      ],
      "class": "equipment",
      "unit": "h",
      "material": "Small tractor"
    },
    {
      "requires": [
        {
          "unit": "[gal_us]/h",
          "amount": 1.76,
          "material": "Equipment Fuel"
        },
        {
          "unit": "h/h",
          "amount": 1,
          "material": "Labor--Support Truck"
        }
      ],
      "class": "equipment",
      "unit": "h",
      "material": "Support Truck"
    },
    {
      "requires": [
        {
          "unit": "[gal_us]/h",
          "amount": 13.2,
          "material": "Equipment Fuel"
        },
        {
          "unit": "h/h",
          "amount": 1,
          "material": "Labor--Tandem axle truck"
        }
      ],
      "class": "equipment",
      "unit": "h",
      "material": "Tandem axle truck"
    },
    {
      "requires": [
        {
          "unit": "[gal_us]/h",
          "amount": 3.96,
          "material": "Equipment Fuel"
        },
        {
          "unit": "h/h",
          "amount": 1,
          "material": "Labor--Tractor and sprayer"
        }
      ],
      "class": "equipment",
      "unit": "h",
      "material": "Tractor and sprayer"
    },
    {
      "class": "labor",
      "unit": "h",
      "material": "Labor--3-Wheel ag sprayer"
    },
    {
      "class": "labor",
      "unit": "h",
      "material": "Labor--Challenger tractor"
    },
    {
      "class": "labor",
      "unit": "h",
      "material": "Labor--Cooler/van"
    },
    {
      "class": "labor",
      "unit": "h",
      "material": "Labor--FR 6080 FH"
    },
    {
      "class": "labor",
      "unit": "h",
      "material": "Laborer"
    },
    {
      "class": "labor",
      "unit": "h",
      "material": "Labor--Large tractor"
    },
    {
      "class": "labor",
      "unit": "h",
      "material": "Labor--Mid-size tractor"
    },
    {
      "class": "labor",
      "unit": "h",
      "material": "Labor--Semi-tractor trailer"
    },
    {
      "class": "labor",
      "unit": "h",
      "material": "Labor--Small tractor"
    },
    {
      "class": "labor",
      "unit": "h",
      "material": "Labor--Supervisor"
    },
    {
      "class": "labor",
      "unit": "h",
      "material": "Labor--Support Truck"
    },
    {
      "class": "labor",
      "unit": "h",
      "material": "Labor--Tandem axle truck"
    },
    {
      "class": "labor",
      "unit": "h",
      "material": "Labor--Tractor and Sprayer"
    },
    {
      "requires": [
        {
          "unit": "h/(100.[acr_us])",
          "amount": 192,
          "material": "Laborer"
        }
      ],
      "class": "labor",
      "unit": "100.[acr_us]",
      "material": "hoeing"
    },
    {
      "requires": [
        {
          "unit": "[qt_us]/(100.[acr_us])",
          "amount": 200,
          "material": "Glyphosate"
        },
        {
          "unit": "h/(100.[acr_us])",
          "amount": 96,
          "material": "Laborer"
        }
      ],
      "class": "labor",
      "unit": "h",
      "material": "herbicide - manual"
    },
    {
      "description": "Off Road Diesel",
      "class": "fuel",
      "unit": "gal",
      "material": "Equipment Fuel"
    },
    {
      "class": "fertilizer",
      "unit": "[qt_us]",
      "material": "2,4-D"
    },
    {
      "class": "pesticide",
      "unit": "[qt_us]",
      "material": "Coragen"
    },
    {
      "class": "pesticide",
      "unit": "[qt_us]",
      "material": "Dimilin"
    },
    {
      "class": "pesticide",
      "unit": "[qt_us]",
      "material": "Fusilade"
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
      "class": "pesticide",
      "unit": "[qt_us]",
      "material": "Imidacloprid5"
    },
    {
      "class": "pesticide",
      "unit": "[qt_us]",
      "material": "Oust"
    },
    {
      "description": "rodenticide",
      "class": "[qt_us]",
      "unit": "pesticide",
      "material": "Rozol"
    },
    {
      "class": "pesticide",
      "unit": "[qt_us]",
      "material": "Sureguard"
    },
    {
      "class": "pesticide",
      "unit": "[qt_us]",
      "material": "Transline"
    },
    {
      "class": "pesticide",
      "unit": "[qt_us]",
      "material": "Trifluralin"
    },
    {
      "description": "Poplar cutting for planting",
      "class": "seed",
      "unit": "1",
      "material": "Poplar Cutting"
    },
    {
      "class": "water",
      "unit": "acr_us].[in_us]",
      "material": "Irrigation"
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
              "material": "Semi-tractor trailer"
            },
            {
              "unit": "each",
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
              "material": "Tandem axle truck"
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
              "unit": "[arc_us]",
              "amount": 500,
              "material": "hoeing"
            },
            {
              "note": "3 times, 1/2 field",
              "unit": "[arc_us]",
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
              "material": "Large tractor"
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
              "material": "Mid-size tractor"
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
              "material": "Tandom axle truck"
            },
            {
              "unit": "h",
              "amount": 26,
              "material": "Support truck"
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
              "material": "Large tractor"
            },
            {
              "note": "Ripping",
              "unit": "h",
              "amount": 10,
              "material": "Large tractor"
            },
            {
              "note": "Row Marking",
              "unit": "h",
              "amount": 25,
              "material": "Large tractor"
            },
            {
              "note": "herbicide - preemergent",
              "unit": "h",
              "amount": 25,
              "material": "Challenger tractor"
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
/**
 *  Namespace module
 *  Exposes other modules
 **/

var materialController = require('./materialController');
var operationController = require('./operationController');
operationController.init(materialController);

var examples = {
  'default' : require('./config/default'),
  'poplar' : require('./config/poplar-example')
};

module.exports = {
  helloWorld : require('./test'),
  operationController : operationController,
  materialController : materialController,
  transform : require('./transform'),
  examples : examples,
  ucum : require('ucum.js'),
  units : require('./units')
};

},{"./config/default":"/Users/jrmerz/dev/cstars/AHB/farm-budgets-app/lib/shared/config/default.json","./config/poplar-example":"/Users/jrmerz/dev/cstars/AHB/farm-budgets-app/lib/shared/config/poplar-example.json","./materialController":"/Users/jrmerz/dev/cstars/AHB/farm-budgets-app/lib/shared/materialController/index.js","./operationController":"/Users/jrmerz/dev/cstars/AHB/farm-budgets-app/lib/shared/operationController/index.js","./test":"/Users/jrmerz/dev/cstars/AHB/farm-budgets-app/lib/shared/test/index.js","./transform":"/Users/jrmerz/dev/cstars/AHB/farm-budgets-app/lib/shared/transform/index.js","./units":"/Users/jrmerz/dev/cstars/AHB/farm-budgets-app/lib/shared/units/index.js","ucum.js":"/Users/jrmerz/dev/cstars/AHB/farm-budgets-app/node_modules/ucum.js/ucum.js"}],"/Users/jrmerz/dev/cstars/AHB/farm-budgets-app/lib/shared/materialController/index.js":[function(require,module,exports){
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

function remove(name) {
  if( data.materials[name] ) {
    delete data.materials[name];
    return success();
  } else if( data.complex[name] ) {
    delete data.complex[name];
    return success();
  }

  return setError('material '+name+' does not exist');
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

  if( !options.noEvent ) {
    events.emit('material-update', {
      material : material,
      replaced : options.rename
    });
  }

  return success();
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

  if( txt.length === 0 ) {
    return results;
  }

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

  return results;
}

// recalc all complex material costs
function recalc() {
  var material;
  for( material in data.complex ) {
    data.complex[material].price = null;
  }

  for( material in data.complex ) {
    var m = data.complex[material];

    if( m.price !== null ) {
        continue;
    }
    m.price = _recalc(m);
  }
}

function _recalc(material){
  var price = 0;

  for( var key in material.materials ) {
    var m = get(key);

    if( m.error ) {
      material.materials[key].error = m.error;
      return 0;
    }
    material.materials[key].error = null;

    if( m.price === null && m.type === 'complex' ) {
      m.price = _recalc(m);
    }

    var value = units.calculateComplexPrice(m, material.materials[m.name], material);

    if( value.error ) {
      material.materials[m.name].price = 0;
      material.materials[m.name].error = value;
    } else {
      material.materials[m.name].price = value.value;
    }

    price += material.materials[m.name].price;

    //material.materials[m.name].price = getPriceForUnits(m, material.materials[m.name].units);
    //price += material.materials[m.name].amount * material.materials[m.name].price;
  }
  return price;
}

function getPriceForUnits(m, units) {
  if( units && units !== m.units ) {
    // TODO: really you need to convert units here
    //console.log('found unit missmatch '+units+' !== '+m.units+'.  need to wire up conversion library. faking');
    //return m.price*2;
  }
  return m.price;
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
  add : add,
  get : get,
  remove : remove,
  find : find,
  on : function(event, listener){
    events.on(event, listener);
  },
  recalc : recalc
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
var events = require('events').EventEmitter;
events = new events();
events.setMaxListeners(1000);

var data = [], materialController, lastRecalcMsg;

function init(controller) {
  materialController = controller;

  materialController.on('material-update', handleMaterialUpdates);
}

function remove(id) {
  if( typeof id === 'object' && data.indexOf(id) > -1 ) {
    data.splice(data.indexOf(id), 1);
    return success();
  } else {
    for( var i = 0; i < data.length; i++ ) {
      if( data[i].id === id  ) {
        data.splice(i, 1);
        return success();
      }
    }
  }

  return setError('operation '+(typeof id === 'object' ? id.id : id)+' does not exist');
}

function add(operation, options) {
  if( !options ) {
    options = {};
  }

  operation.id = uuid.v4();
  data.push(operation);

  recalc();

  if( !options.noEvent ) {
    events.emit('operation-update', {
      operation : operation
    });
  }

  return success();
}

function update(operation, options) {
  if( !options ) {
    options = {};
  }

  var found = false;
  for( var i = 0; i < data.length; i++ ) {
    if( operation.id === data[i].id ) {
      data[i] = operation;
      found = true;
      break;
    }
  }

  if( !found ) {
    return setError('Operation '+operation.id+' not found');
  }

  recalc();

  if( !options.noEvent ) {
    events.emit('operation-update', {
      operation : operation
    });
  }

  return success();
}

function get(id) {
  if( !id ) {
    return data;
  }

  for( var i = 0; i < data.length; i++ ) {
    if( data[i].id === id ) {
      return data[i];
    }
  }

  return setError(id+' is not in the material list');
}

function find(txt, ignore) {
  var re = new RegExp('.*'+txt+'.*', 'i');
  var results = [], key;

  if( txt.length === 0 ) {
    return results;
  }

  for( var i = 0; i < data.length; i++ ) {
    if( data[i].match(re) && data[i] !== ignore ) {
      results.push(data[i]);
    }
  }

  return results;
}

// recalc all complex material costs
function recalc() {
  var operation, materialDef, materialImpl, total, messages = [];

  for( var i = 0; i < data.length; i++ ) {
    total = 0;
    operation = data[i];

    for( var m in operation.materials ) {
      materialImpl = operation.materials[m];
      materialDef = materialController.get(m);

      // was a specified material not found?
      if( materialDef.error ) {
        materialImpl.error = materialDef; // this is actually the error response object
        messages.push({
          index : i,
          material : m,
          operation : operation.name,
          error : materialDef
        });
        continue;
      }

      // was a material amount not specified?
      if( typeof materialDef.price !== 'number' || isNaN(materialDef.price) ) {
        materialImpl.error = setError(materialDef.name+' found but price is not a number.');
        messages.push({
          index : i,
          material : m,
          operation : operation.name,
          warning : materialImpl.error
        });
        continue;
      }

      // was a material amount not specified?
      if( materialImpl.amount === undefined ) {
        materialImpl.warning = warn('No amount set.  Setting to 1.');
        messages.push({
          index : i,
          material : m,
          operation : operation.name,
          warning : materialImpl.warning
        });
        materialImpl.amount = 1;
      }


      // to we need to switch units?
      if( materialImpl.units !== undefined && materialImpl.units !== materialDef.units ) {
        messages.push({
          index : i,
          material : m,
          operation : operation.name,
          message : 'Converting from '+materialDef.units+' to '+materialImpl.units
        });

        // TODO: need to wire up unit conversions
        materialImpl.price = materialImpl.amount * materialDef.price * 2;
      } else {
        materialImpl.price = materialImpl.amount * materialDef.price;
      }

      // did something bad happen in price calculation?
      if( isNaN(materialImpl.price) ) {
        materialImpl.error = setError('Price calculated to NaN.  Material not included in total.');
        messages.push({
          index : i,
          operation : operation.name,
          material : m,
          error : materialImpl.error
        });
        continue;
      }

      total += materialImpl.price;
    }

    operation.subtotal = total;

    var scheduled = operation.schedule ? operation.schedule.length : 0;
    if( !operation.scheduled ) {
      messages.push({
        index : i,
        operation : operation.name,
        warning : warn('No schedule set')
      });
    }

    operation.total = scheduled * operation.subtotal;

  }

  lastRecalcMsg = messages;
  return messages;
}

function handleMaterialUpdates(e) {
  var material = e.material;
  var replaced = e.replaced;

  recalc();

  for( var i = 0; i < data.length; i++ ) {
    var operation = data[i];
    var fireChange = false;

    for( var m in operation.materials ) {
      // update any renames
      if( m === replaced ) {
        operation.materials[m].name = material.name;
        operation.materials[m] = operation.materials[replaced];
        delete operation.materials[m];
        fireChange = true;

      // look to see if this operation has the updated material
      } else if( m === material.name ) {
        fireChange = true;
      }
    }

    if( fireChange ) {
      events.emit('operation-update', operation);
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
    warrning : true,
    message : msg
  };
}


module.exports = {
  add : add,
  get : get,
  remove : remove,
  update : update,
  find : find,
  on : function(event, listener){
    events.on(event, listener);
  },
  recalc : recalc,
  init : init,
  getLastRecalcMsg : getLastRecalcMsg
};

},{"events":"/Users/jrmerz/dev/cstars/AHB/farm-budgets-app/node_modules/grunt-browserify/node_modules/browserify/node_modules/events/events.js","node-uuid":"/Users/jrmerz/dev/cstars/AHB/farm-budgets-app/node_modules/node-uuid/uuid.js"}],"/Users/jrmerz/dev/cstars/AHB/farm-budgets-app/lib/shared/test/index.js":[function(require,module,exports){
module.exports = function() {
  console.log('Hello World');
}

},{}],"/Users/jrmerz/dev/cstars/AHB/farm-budgets-app/lib/shared/transform/index.js":[function(require,module,exports){
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
      if( materials[j].name == price.material ) {
        materials[j].price = price.price;
        materials[j].units = price.unit;
        found = true;
        break;
      }
    }

    if( !found ) {
      console.log({
        name : price.material,
        price : price.price,
        units : price.unit
      });

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
      materials : {},
      schedule : []
    };

    for( var j = 0; j < i.materials.length; j++ ) {
      op.materials[i.materials[j].material] = i.materials[j];
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

function calculateComplexPrice(materialDef, materialImpl, complexMaterial) {
  var units = materialImpl.units;


  var convert = convertUnits(materialImpl.units, complexMaterial.units, materialDef.units);
  if( convert.error ) {
    return convert;
  } else if( Object.keys(convert.units).length > 1 ) {
    return {
      error: true,
      message : 'Units didn\'t cancel',
      math : materialImpl.units+' * '+complexMaterial.units+' * '+materialDef.units
    };
  }

  convert.debug2 = materialImpl.amount+' * '+materialDef.price+' * '+convert.value;
  convert.value = materialImpl.amount * materialDef.price * convert.value;


  if( complexMaterial.name === 'hoeing' ) {
    console.log(convert);
  }

  return convert;
}

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
}


module.exports = {
  getLabel : getLabel,
  getLikeUnits : getLikeUnits,
  math : math,
  calculateComplexPrice : calculateComplexPrice,
  lookup : lookup
};

},{"../model/unit_math":"/Users/jrmerz/dev/cstars/AHB/farm-budgets-app/lib/shared/model/unit_math/index.js","./definitions":"/Users/jrmerz/dev/cstars/AHB/farm-budgets-app/lib/shared/units/definitions.js","ucum.js":"/Users/jrmerz/dev/cstars/AHB/farm-budgets-app/node_modules/ucum.js/ucum.js"}],"/Users/jrmerz/dev/cstars/AHB/farm-budgets-app/node_modules/grunt-browserify/node_modules/browserify/node_modules/events/events.js":[function(require,module,exports){
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
//# sourceMappingURL=data:application/json;charset:utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIm5vZGVfbW9kdWxlcy9ncnVudC1icm93c2VyaWZ5L25vZGVfbW9kdWxlcy9icm93c2VyaWZ5L25vZGVfbW9kdWxlcy9icm93c2VyLXBhY2svX3ByZWx1ZGUuanMiLCJsaWIvc2hhcmVkL2NvbmZpZy9kZWZhdWx0Lmpzb24iLCJsaWIvc2hhcmVkL2NvbmZpZy9wb3BsYXItZXhhbXBsZS5qc29uIiwibGliL3NoYXJlZC9pbmRleC5qcyIsImxpYi9zaGFyZWQvbWF0ZXJpYWxDb250cm9sbGVyL2luZGV4LmpzIiwibGliL3NoYXJlZC9tb2RlbC91bml0X21hdGgvaW5kZXguanMiLCJsaWIvc2hhcmVkL29wZXJhdGlvbkNvbnRyb2xsZXIvaW5kZXguanMiLCJsaWIvc2hhcmVkL3Rlc3QvaW5kZXguanMiLCJsaWIvc2hhcmVkL3RyYW5zZm9ybS9pbmRleC5qcyIsImxpYi9zaGFyZWQvdW5pdHMvZGVmaW5pdGlvbnMuanMiLCJsaWIvc2hhcmVkL3VuaXRzL2luZGV4LmpzIiwibm9kZV9tb2R1bGVzL2dydW50LWJyb3dzZXJpZnkvbm9kZV9tb2R1bGVzL2Jyb3dzZXJpZnkvbm9kZV9tb2R1bGVzL2V2ZW50cy9ldmVudHMuanMiLCJub2RlX21vZHVsZXMvbm9kZS11dWlkL3V1aWQuanMiLCJub2RlX21vZHVsZXMvdWN1bS5qcy9nZW5lcmF0ZWQvZXF1aXZhbGVudHMuanNvbiIsIm5vZGVfbW9kdWxlcy91Y3VtLmpzL2dlbmVyYXRlZC9tZXRyaWNzLmpzb24iLCJub2RlX21vZHVsZXMvdWN1bS5qcy9nZW5lcmF0ZWQvcHJlZml4ZXMuanNvbiIsIm5vZGVfbW9kdWxlcy91Y3VtLmpzL2dlbmVyYXRlZC91Y3VtLXBhcnNlci5qcyIsIm5vZGVfbW9kdWxlcy91Y3VtLmpzL2xpYi9oZWxwZXJzLmpzIiwibm9kZV9tb2R1bGVzL3VjdW0uanMvdWN1bS5qcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtBQ0FBO0FBQ0E7QUFDQTtBQUNBOztBQ0hBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FDcjNEQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FDdkJBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FDckxBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQ3hFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUNwUkE7QUFDQTtBQUNBO0FBQ0E7O0FDSEE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQzdLQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FDMUhBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQ3hIQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQzdTQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQ3ZQQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FDbHJDQTtBQUNBOztBQ0RBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUMxQkE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FDMytDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUNuREE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSIsImZpbGUiOiJnZW5lcmF0ZWQuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlc0NvbnRlbnQiOlsiKGZ1bmN0aW9uIGUodCxuLHIpe2Z1bmN0aW9uIHMobyx1KXtpZighbltvXSl7aWYoIXRbb10pe3ZhciBhPXR5cGVvZiByZXF1aXJlPT1cImZ1bmN0aW9uXCImJnJlcXVpcmU7aWYoIXUmJmEpcmV0dXJuIGEobywhMCk7aWYoaSlyZXR1cm4gaShvLCEwKTt2YXIgZj1uZXcgRXJyb3IoXCJDYW5ub3QgZmluZCBtb2R1bGUgJ1wiK28rXCInXCIpO3Rocm93IGYuY29kZT1cIk1PRFVMRV9OT1RfRk9VTkRcIixmfXZhciBsPW5bb109e2V4cG9ydHM6e319O3Rbb11bMF0uY2FsbChsLmV4cG9ydHMsZnVuY3Rpb24oZSl7dmFyIG49dFtvXVsxXVtlXTtyZXR1cm4gcyhuP246ZSl9LGwsbC5leHBvcnRzLGUsdCxuLHIpfXJldHVybiBuW29dLmV4cG9ydHN9dmFyIGk9dHlwZW9mIHJlcXVpcmU9PVwiZnVuY3Rpb25cIiYmcmVxdWlyZTtmb3IodmFyIG89MDtvPHIubGVuZ3RoO28rKylzKHJbb10pO3JldHVybiBzfSkiLCJtb2R1bGUuZXhwb3J0cz17XG4gICAgXCJhcHBsaWNhdGlvblwiOlwiZmFybS1idWRnZXRzXCJcbn1cbiIsIm1vZHVsZS5leHBvcnRzPXtcbiAgXCJwcmljZXNcIjogW1xuICAgIHtcbiAgICAgIFwidW5pdFwiOiBcInVzJC9oXCIsXG4gICAgICBcInByaWNlXCI6IDUwLFxuICAgICAgXCJtYXRlcmlhbFwiOiBcIjMtV2hlZWwgQWcgU3ByYXllclwiXG4gICAgfSxcbiAgICB7XG4gICAgICBcInVuaXRcIjogXCJ1cyQvaFwiLFxuICAgICAgXCJwcmljZVwiOiA5MCxcbiAgICAgIFwibWF0ZXJpYWxcIjogXCJDaGFsbGVuZ2VyIHRyYWN0b3JcIlxuICAgIH0sXG4gICAge1xuICAgICAgXCJ1bml0XCI6IFwidXMkL2hcIixcbiAgICAgIFwicHJpY2VcIjogMS4yLFxuICAgICAgXCJtYXRlcmlhbFwiOiBcIkNvb2xlci92YW5cIlxuICAgIH0sXG4gICAge1xuICAgICAgXCJ1bml0XCI6IFwidXMkL2hcIixcbiAgICAgIFwicHJpY2VcIjogMTU1LFxuICAgICAgXCJtYXRlcmlhbFwiOiBcIkVsaW1pbmF0b3JcIlxuICAgIH0sXG4gICAge1xuICAgICAgXCJ1bml0XCI6IFwidXMkL2hcIixcbiAgICAgIFwicHJpY2VcIjogMTgwLFxuICAgICAgXCJtYXRlcmlhbFwiOiBcIkZSIDYwODAgRkhcIlxuICAgIH0sXG4gICAge1xuICAgICAgXCJ1bml0XCI6IFwidXMkL2hcIixcbiAgICAgIFwicHJpY2VcIjogNzAsXG4gICAgICBcIm1hdGVyaWFsXCI6IFwiTGFyZ2UgdHJhY3RvclwiXG4gICAgfSxcbiAgICB7XG4gICAgICBcInVuaXRcIjogXCJ1cyQvaFwiLFxuICAgICAgXCJwcmljZVwiOiA0NSxcbiAgICAgIFwibWF0ZXJpYWxcIjogXCJNaWQtc2l6ZSB0cmFjdG9yXCJcbiAgICB9LFxuICAgIHtcbiAgICAgIFwidW5pdFwiOiBcInVzJC9oXCIsXG4gICAgICBcInByaWNlXCI6IDU1LFxuICAgICAgXCJtYXRlcmlhbFwiOiBcIlNlbWktdHJhY3RvciB0cmFpbGVyXCJcbiAgICB9LFxuICAgIHtcbiAgICAgIFwidW5pdFwiOiBcInVzJC9oXCIsXG4gICAgICBcInByaWNlXCI6IDMwLFxuICAgICAgXCJtYXRlcmlhbFwiOiBcIlNtYWxsIHRyYWN0b3JcIlxuICAgIH0sXG4gICAge1xuICAgICAgXCJ1bml0XCI6IFwidXMkL2hcIixcbiAgICAgIFwicHJpY2VcIjogMjUsXG4gICAgICBcIm1hdGVyaWFsXCI6IFwiU3VwcG9ydCBUcnVja1wiXG4gICAgfSxcbiAgICB7XG4gICAgICBcInVuaXRcIjogXCJ1cyQvaFwiLFxuICAgICAgXCJwcmljZVwiOiAyNSxcbiAgICAgIFwibWF0ZXJpYWxcIjogXCJUYW5kZW0gYXhsZSB0cnVja1wiXG4gICAgfSxcbiAgICB7XG4gICAgICBcInVuaXRcIjogXCJ1cyQvaFwiLFxuICAgICAgXCJwcmljZVwiOiA1MCxcbiAgICAgIFwibWF0ZXJpYWxcIjogXCJUcmFjdG9yIGFuZCBzcHJheWVyXCJcbiAgICB9LFxuICAgIHtcbiAgICAgIFwidW5pdFwiOiBcInVzJC9oXCIsXG4gICAgICBcInByaWNlXCI6IDMwLFxuICAgICAgXCJtYXRlcmlhbFwiOiBcIjMtV2hlZWwgYWcgc3ByYXllclwiXG4gICAgfSxcbiAgICB7XG4gICAgICBcInVuaXRcIjogXCJ1cyQvaFwiLFxuICAgICAgXCJwcmljZVwiOiAzNSxcbiAgICAgIFwibWF0ZXJpYWxcIjogXCJDaGFsbGVuZ2VyIHRyYWN0b3JcIlxuICAgIH0sXG4gICAge1xuICAgICAgXCJ1bml0XCI6IFwidXMkL2hcIixcbiAgICAgIFwicHJpY2VcIjogMC43MSxcbiAgICAgIFwibWF0ZXJpYWxcIjogXCJDb29sZXIvdmFuXCJcbiAgICB9LFxuICAgIHtcbiAgICAgIFwidW5pdFwiOiBcInVzJC9oXCIsXG4gICAgICBcInByaWNlXCI6IDMwLFxuICAgICAgXCJtYXRlcmlhbFwiOiBcIkZSIDYwODAgRkhcIlxuICAgIH0sXG4gICAge1xuICAgICAgXCJ1bml0XCI6IFwidXMkL2hcIixcbiAgICAgIFwicHJpY2VcIjogMTcsXG4gICAgICBcIm1hdGVyaWFsXCI6IFwiTGFib3JlclwiXG4gICAgfSxcbiAgICB7XG4gICAgICBcInVuaXRcIjogXCJ1cyQvaFwiLFxuICAgICAgXCJwcmljZVwiOiAzNSxcbiAgICAgIFwibWF0ZXJpYWxcIjogXCJMYWJvci0tTGFyZ2UgdHJhY3RvclwiXG4gICAgfSxcbiAgICB7XG4gICAgICBcInVuaXRcIjogXCJ1cyQvaFwiLFxuICAgICAgXCJwcmljZVwiOiAyMixcbiAgICAgIFwibWF0ZXJpYWxcIjogXCJMYWJvci0tTWlkLXNpemUgdHJhY3RvclwiXG4gICAgfSxcbiAgICB7XG4gICAgICBcInVuaXRcIjogXCJ1cyQvaFwiLFxuICAgICAgXCJwcmljZVwiOiAyOCxcbiAgICAgIFwibWF0ZXJpYWxcIjogXCJMYWJvci0tU2VtaS10cmFjdG9yIHRyYWlsZXJcIlxuICAgIH0sXG4gICAge1xuICAgICAgXCJ1bml0XCI6IFwidXMkL2hcIixcbiAgICAgIFwicHJpY2VcIjogMjIsXG4gICAgICBcIm1hdGVyaWFsXCI6IFwiTGFib3ItLVNtYWxsIHRyYWN0b3JcIlxuICAgIH0sXG4gICAge1xuICAgICAgXCJ1bml0XCI6IFwidXMkL2hcIixcbiAgICAgIFwicHJpY2VcIjogMjYsXG4gICAgICBcIm1hdGVyaWFsXCI6IFwiTGFib3ItLVN1cGVydmlzb3JcIlxuICAgIH0sXG4gICAge1xuICAgICAgXCJ1bml0XCI6IFwidXMkL2hcIixcbiAgICAgIFwicHJpY2VcIjogMzAsXG4gICAgICBcIm1hdGVyaWFsXCI6IFwiTGFib3ItLVN1cHBvcnQgVHJ1Y2tcIlxuICAgIH0sXG4gICAge1xuICAgICAgXCJ1bml0XCI6IFwidXMkL2hcIixcbiAgICAgIFwicHJpY2VcIjogMjYsXG4gICAgICBcIm1hdGVyaWFsXCI6IFwiTGFib3ItLVRhbmRlbSBheGxlIHRydWNrXCJcbiAgICB9LFxuICAgIHtcbiAgICAgIFwidW5pdFwiOiBcInVzJC9oXCIsXG4gICAgICBcInByaWNlXCI6IDMwLFxuICAgICAgXCJtYXRlcmlhbFwiOiBcIkxhYm9yLS1UcmFjdG9yIGFuZCBTcHJheWVyXCJcbiAgICB9LFxuICAgIHtcbiAgICAgIFwidW5pdFwiOiBcInVzJC9bZ2FsX3VzXVwiLFxuICAgICAgXCJwcmljZVwiOiAyLjgxLFxuICAgICAgXCJtYXRlcmlhbFwiOiBcIkVxdWlwbWVudCBGdWVsXCJcbiAgICB9LFxuICAgIHtcbiAgICAgIFwidW5pdFwiOiBcInVzJC9bcXRfdXNdXCIsXG4gICAgICBcInByaWNlXCI6IDUsXG4gICAgICBcIm1hdGVyaWFsXCI6IFwiMiw0LURcIlxuICAgIH0sXG4gICAge1xuICAgICAgXCJ1bml0XCI6IFwidXMkL1txdF91c11cIixcbiAgICAgIFwicHJpY2VcIjogMjEwLFxuICAgICAgXCJtYXRlcmlhbFwiOiBcIkNvcmFnZW5cIlxuICAgIH0sXG4gICAge1xuICAgICAgXCJ1bml0XCI6IFwidXMkL1txdF91c11cIixcbiAgICAgIFwicHJpY2VcIjogMzAsXG4gICAgICBcIm1hdGVyaWFsXCI6IFwiRnVzaWxhZGVcIlxuICAgIH0sXG4gICAge1xuICAgICAgXCJ1bml0XCI6IFwidXMkL1txdF91c11cIixcbiAgICAgIFwicHJpY2VcIjogNCxcbiAgICAgIFwibWF0ZXJpYWxcIjogXCJHbHlwaG9zYXRlXCJcbiAgICB9LFxuICAgIHtcbiAgICAgIFwidW5pdFwiOiBcInVzJC9bcXRfdXNdXCIsXG4gICAgICBcInByaWNlXCI6IDMwLFxuICAgICAgXCJtYXRlcmlhbFwiOiBcIkdvYWwgMlhMXCJcbiAgICB9LFxuICAgIHtcbiAgICAgIFwidW5pdFwiOiBcInVzJC9bcXRfdXNdXCIsXG4gICAgICBcInByaWNlXCI6IDU2LFxuICAgICAgXCJtYXRlcmlhbFwiOiBcIkltaWRhY2xvcHJpZFwiXG4gICAgfSxcbiAgICB7XG4gICAgICBcInVuaXRcIjogXCJ1cyQvW2xiX2F2XVwiLFxuICAgICAgXCJwcmljZVwiOiA2NCxcbiAgICAgIFwibWF0ZXJpYWxcIjogXCJPdXN0XCJcbiAgICB9LFxuICAgIHtcbiAgICAgIFwidW5pdFwiOiBcInVzJC9bbGJfYXZdXCIsXG4gICAgICBcInByaWNlXCI6IDEuODUsXG4gICAgICBcIm1hdGVyaWFsXCI6IFwiUm96b2xcIlxuICAgIH0sXG4gICAge1xuICAgICAgXCJ1bml0XCI6IFwidXMkL1tsYl9hdl1cIixcbiAgICAgIFwicHJpY2VcIjogMTMwLFxuICAgICAgXCJtYXRlcmlhbFwiOiBcIlN1cmVndWFyZFwiXG4gICAgfSxcbiAgICB7XG4gICAgICBcInVuaXRcIjogXCJ1cyQvW2dhbF91c11cIixcbiAgICAgIFwicHJpY2VcIjogMjE1LFxuICAgICAgXCJtYXRlcmlhbFwiOiBcIlRyYW5zbGluZVwiXG4gICAgfSxcbiAgICB7XG4gICAgICBcInVuaXRcIjogXCJ1cyQvW3F0X3VzXVwiLFxuICAgICAgXCJwcmljZVwiOiA3LjUsXG4gICAgICBcIm1hdGVyaWFsXCI6IFwiVHJpZmx1cmFsaW5cIlxuICAgIH0sXG4gICAge1xuICAgICAgXCJ1bml0XCI6IFwidXMkLzFcIixcbiAgICAgIFwicHJpY2VcIjogMC4wOCxcbiAgICAgIFwibWF0ZXJpYWxcIjogXCJQb3BsYXIgQ3V0dGluZ1wiXG4gICAgfSxcbiAgICB7XG4gICAgICBcInVuaXRcIjogXCJ1cyQvW2Fjcl91c10uW2luX3VzXVwiLFxuICAgICAgXCJwcmljZVwiOiA2LFxuICAgICAgXCJtYXRlcmlhbFwiOiBcIklycmlnYXRpb24gQ29zdFwiXG4gICAgfVxuICBdLFxuICBcIm1hdGVyaWFsc1wiOiBbXG4gICAge1xuICAgICAgXCJjbGFzc1wiOiBcImZlcnRpbGl6ZXJcIixcbiAgICAgIFwibWF0ZXJpYWxcIjogXCIwLTAtNjBcIlxuICAgIH0sXG4gICAge1xuICAgICAgXCJjbGFzc1wiOiBcImZlcnRpbGl6ZXJcIixcbiAgICAgIFwibWF0ZXJpYWxcIjogXCIxMC0zNC0wMFwiXG4gICAgfSxcbiAgICB7XG4gICAgICBcImNsYXNzXCI6IFwiZmVydGlsaXplclwiLFxuICAgICAgXCJtYXRlcmlhbFwiOiBcIjExLTUyLTBcIlxuICAgIH0sXG4gICAge1xuICAgICAgXCJjbGFzc1wiOiBcImZlcnRpbGl6ZXJcIixcbiAgICAgIFwibWF0ZXJpYWxcIjogXCIxMy0wLTQ1XCJcbiAgICB9LFxuICAgIHtcbiAgICAgIFwiY2xhc3NcIjogXCJmZXJ0aWxpemVyXCIsXG4gICAgICBcIm1hdGVyaWFsXCI6IFwiMTYtMTYtMTZcIlxuICAgIH0sXG4gICAge1xuICAgICAgXCJjbGFzc1wiOiBcImZlcnRpbGl6ZXJcIixcbiAgICAgIFwibWF0ZXJpYWxcIjogXCIxNi0yMC0wLTE0XCJcbiAgICB9LFxuICAgIHtcbiAgICAgIFwiY2xhc3NcIjogXCJmZXJ0aWxpemVyXCIsXG4gICAgICBcIm1hdGVyaWFsXCI6IFwiMTgtMC01LTRcIlxuICAgIH0sXG4gICAge1xuICAgICAgXCJjbGFzc1wiOiBcImZlcnRpbGl6ZXJcIixcbiAgICAgIFwibWF0ZXJpYWxcIjogXCIyLDQtRFwiXG4gICAgfSxcbiAgICB7XG4gICAgICBcImNsYXNzXCI6IFwiZmVydGlsaXplclwiLFxuICAgICAgXCJtYXRlcmlhbFwiOiBcIjMyLTAtMFwiXG4gICAgfSxcbiAgICB7XG4gICAgICBcImNsYXNzXCI6IFwiZmVydGlsaXplclwiLFxuICAgICAgXCJtYXRlcmlhbFwiOiBcIjMzLTAtMC0xMlwiXG4gICAgfSxcbiAgICB7XG4gICAgICBcImNsYXNzXCI6IFwiZmVydGlsaXplclwiLFxuICAgICAgXCJtYXRlcmlhbFwiOiBcIjQwLTAtMC02XCJcbiAgICB9LFxuICAgIHtcbiAgICAgIFwiY2xhc3NcIjogXCJmZXJ0aWxpemVyXCIsXG4gICAgICBcIm1hdGVyaWFsXCI6IFwiNDYtMC0wXCJcbiAgICB9LFxuICAgIHtcbiAgICAgIFwiY2xhc3NcIjogXCJmZXJ0aWxpemVyXCIsXG4gICAgICBcIm1hdGVyaWFsXCI6IFwiODAtMC0wXCJcbiAgICB9LFxuICAgIHtcbiAgICAgIFwiY2xhc3NcIjogXCJmZXJ0aWxpemVyXCIsXG4gICAgICBcIm1hdGVyaWFsXCI6IFwiODAtMDAtMDBcIlxuICAgIH0sXG4gICAge1xuICAgICAgXCJjbGFzc1wiOiBcInBlc3RpY2lkZVwiLFxuICAgICAgXCJtYXRlcmlhbFwiOiBcIkFjaGlldmUgU0NcIlxuICAgIH0sXG4gICAge1xuICAgICAgXCJjbGFzc1wiOiBcInBlc3RpY2lkZVwiLFxuICAgICAgXCJtYXRlcmlhbFwiOiBcIkFkbWlyZVwiXG4gICAgfSxcbiAgICB7XG4gICAgICBcImNsYXNzXCI6IFwicGVzdGljaWRlXCIsXG4gICAgICBcIm1hdGVyaWFsXCI6IFwiQWRtaXJlIFByb1wiXG4gICAgfSxcbiAgICB7XG4gICAgICBcImNsYXNzXCI6IFwicGVzdGljaWRlXCIsXG4gICAgICBcIm1hdGVyaWFsXCI6IFwiQWlyIEFwcGxpY2F0aW9uXCJcbiAgICB9LFxuICAgIHtcbiAgICAgIFwiY2xhc3NcIjogXCJwZXN0aWNpZGVcIixcbiAgICAgIFwibWF0ZXJpYWxcIjogXCJBbGNhbGFcIlxuICAgIH0sXG4gICAge1xuICAgICAgXCJjbGFzc1wiOiBcInBlc3RpY2lkZVwiLFxuICAgICAgXCJtYXRlcmlhbFwiOiBcIkFtbW9uaXVtIFN1bGZhdGVcIlxuICAgIH0sXG4gICAge1xuICAgICAgXCJjbGFzc1wiOiBcInBlc3RpY2lkZVwiLFxuICAgICAgXCJtYXRlcmlhbFwiOiBcIkFNU1wiXG4gICAgfSxcbiAgICB7XG4gICAgICBcImNsYXNzXCI6IFwicGVzdGljaWRlXCIsXG4gICAgICBcIm1hdGVyaWFsXCI6IFwiQXBvZ2VlXCJcbiAgICB9LFxuICAgIHtcbiAgICAgIFwiY2xhc3NcIjogXCJwZXN0aWNpZGVcIixcbiAgICAgIFwibWF0ZXJpYWxcIjogXCJBc3NhaWwgNzBXUFwiXG4gICAgfSxcbiAgICB7XG4gICAgICBcImNsYXNzXCI6IFwicGVzdGljaWRlXCIsXG4gICAgICBcIm1hdGVyaWFsXCI6IFwiQXNzZXNtZW50XCJcbiAgICB9LFxuICAgIHtcbiAgICAgIFwiY2xhc3NcIjogXCJwZXN0aWNpZGVcIixcbiAgICAgIFwibWF0ZXJpYWxcIjogXCJBc3N1cmUgSUlcIlxuICAgIH0sXG4gICAge1xuICAgICAgXCJjbGFzc1wiOiBcInBlc3RpY2lkZVwiLFxuICAgICAgXCJtYXRlcmlhbFwiOiBcIkF4aW9tIExCXCJcbiAgICB9LFxuICAgIHtcbiAgICAgIFwiY2xhc3NcIjogXCJwZXN0aWNpZGVcIixcbiAgICAgIFwibWF0ZXJpYWxcIjogXCJBeGlvbSBPWlwiXG4gICAgfSxcbiAgICB7XG4gICAgICBcImNsYXNzXCI6IFwicGVzdGljaWRlXCIsXG4gICAgICBcIm1hdGVyaWFsXCI6IFwiQmFsZVwiXG4gICAgfSxcbiAgICB7XG4gICAgICBcImNsYXNzXCI6IFwicGVzdGljaWRlXCIsXG4gICAgICBcIm1hdGVyaWFsXCI6IFwiQmFsaW5nXCJcbiAgICB9LFxuICAgIHtcbiAgICAgIFwiY2xhc3NcIjogXCJwZXN0aWNpZGVcIixcbiAgICAgIFwibWF0ZXJpYWxcIjogXCJCYW52ZWxcIlxuICAgIH0sXG4gICAge1xuICAgICAgXCJjbGFzc1wiOiBcInNlZWRcIixcbiAgICAgIFwibWF0ZXJpYWxcIjogXCJCYXJsZXkgU2VlZFwiXG4gICAgfSxcbiAgICB7XG4gICAgICBcImNsYXNzXCI6IFwicGVzdGljaWRlXCIsXG4gICAgICBcIm1hdGVyaWFsXCI6IFwiQmVlIEhpdmVzXCJcbiAgICB9LFxuICAgIHtcbiAgICAgIFwiY2xhc3NcIjogXCJwZXN0aWNpZGVcIixcbiAgICAgIFwibWF0ZXJpYWxcIjogXCJCcmF2b1wiXG4gICAgfSxcbiAgICB7XG4gICAgICBcImNsYXNzXCI6IFwicGVzdGljaWRlXCIsXG4gICAgICBcIm1hdGVyaWFsXCI6IFwiQnJvYWRjYXN0IEZlcnRpbGl6ZXJcIlxuICAgIH0sXG4gICAge1xuICAgICAgXCJjbGFzc1wiOiBcInBlc3RpY2lkZVwiLFxuICAgICAgXCJtYXRlcmlhbFwiOiBcIkJyb3ggTVwiXG4gICAgfSxcbiAgICB7XG4gICAgICBcImNsYXNzXCI6IFwic2VlZFwiLFxuICAgICAgXCJtYXRlcmlhbFwiOiBcIkNhbm9sYSBTZWVkXCJcbiAgICB9LFxuICAgIHtcbiAgICAgIFwiY2xhc3NcIjogXCJwcm9jZXNzaW5nXCIsXG4gICAgICBcIm1hdGVyaWFsXCI6IFwiQ2FwdHVyZVwiXG4gICAgfSxcbiAgICB7XG4gICAgICBcImNsYXNzXCI6IFwicGVzdGljaWRlXCIsXG4gICAgICBcIm1hdGVyaWFsXCI6IFwiQ2FyYmluZSA1MFdHXCJcbiAgICB9LFxuICAgIHtcbiAgICAgIFwiY2xhc3NcIjogXCJwZXN0aWNpZGVcIixcbiAgICAgIFwibWF0ZXJpYWxcIjogXCJDbGFyaXR5XCJcbiAgICB9LFxuICAgIHtcbiAgICAgIFwiY2xhc3NcIjogXCJwcm9jZXNzaW5nXCIsXG4gICAgICBcIm1hdGVyaWFsXCI6IFwiQ2xlYW4gU2VlZCBPcmNoZGdyXCJcbiAgICB9LFxuICAgIHtcbiAgICAgIFwiY2xhc3NcIjogXCJsYWJvclwiLFxuICAgICAgXCJtYXRlcmlhbFwiOiBcIkNvbWJpbmVcIlxuICAgIH0sXG4gICAge1xuICAgICAgXCJjbGFzc1wiOiBcImxhYm9yXCIsXG4gICAgICBcIm1hdGVyaWFsXCI6IFwiQ29tYmluZSBXaGVhdFwiXG4gICAgfSxcbiAgICB7XG4gICAgICBcImNsYXNzXCI6IFwicHJvY2Vzc2luZ1wiLFxuICAgICAgXCJtYXRlcmlhbFwiOiBcIkNvbW1pc2lvbiBBc3Nlc3NcIlxuICAgIH0sXG4gICAge1xuICAgICAgXCJjbGFzc1wiOiBcInByb2Nlc3NpbmdcIixcbiAgICAgIFwibWF0ZXJpYWxcIjogXCJDb21taXNzaW9uIEFzc2Vzc1wiXG4gICAgfSxcbiAgICB7XG4gICAgICBcImNsYXNzXCI6IFwicHJvY2Vzc2luZ1wiLFxuICAgICAgXCJtYXRlcmlhbFwiOiBcIkNvbnN1bHRhbnRcIlxuICAgIH0sXG4gICAge1xuICAgICAgXCJjbGFzc1wiOiBcImxhYm9yXCIsXG4gICAgICBcIm1hdGVyaWFsXCI6IFwiQ29vbCBhbmQgUGFja1wiXG4gICAgfSxcbiAgICB7XG4gICAgICBcImNsYXNzXCI6IFwic2VlZFwiLFxuICAgICAgXCJtYXRlcmlhbFwiOiBcIkNvcm4gU2VlZFwiXG4gICAgfSxcbiAgICB7XG4gICAgICBcImNsYXNzXCI6IFwicHJvY2Vzc2luZ1wiLFxuICAgICAgXCJtYXRlcmlhbFwiOiBcIkNvdHRvbiBBc3Nlc21lbnRcIlxuICAgIH0sXG4gICAge1xuICAgICAgXCJjbGFzc1wiOiBcInBlc3RpY2lkZVwiLFxuICAgICAgXCJtYXRlcmlhbFwiOiBcIkNvdW50ZXIgMTVHIEwtTi1MXCJcbiAgICB9LFxuICAgIHtcbiAgICAgIFwiY2xhc3NcIjogXCJpbnN1cmFuY2VcIixcbiAgICAgIFwibWF0ZXJpYWxcIjogXCJDcm9wIEluc3VyYW5jZVwiXG4gICAgfSxcbiAgICB7XG4gICAgICBcImNsYXNzXCI6IFwicHJvY2Vzc2luZ1wiLFxuICAgICAgXCJtYXRlcmlhbFwiOiBcIkN1c3RvbSBBZXJpYWwgU3ByYXlcIlxuICAgIH0sXG4gICAge1xuICAgICAgXCJjbGFzc1wiOiBcInByb2Nlc3NpbmdcIixcbiAgICAgIFwibWF0ZXJpYWxcIjogXCJDdXN0b20gQWlyIFNwcmF5XCJcbiAgICB9LFxuICAgIHtcbiAgICAgIFwiY2xhc3NcIjogXCJwcm9jZXNzaW5nXCIsXG4gICAgICBcIm1hdGVyaWFsXCI6IFwiQ3VzdG9tIEFpciBTcHJheSAtIDVHXCJcbiAgICB9LFxuICAgIHtcbiAgICAgIFwiY2xhc3NcIjogXCJwcm9jZXNzaW5nXCIsXG4gICAgICBcIm1hdGVyaWFsXCI6IFwiQ3VzdG9tIENvbWJpbmluZ1wiXG4gICAgfSxcbiAgICB7XG4gICAgICBcImNsYXNzXCI6IFwicHJvY2Vzc2luZ1wiLFxuICAgICAgXCJtYXRlcmlhbFwiOiBcIkN1c3RvbSBGZXJ0aWxpemVcIlxuICAgIH0sXG4gICAge1xuICAgICAgXCJjbGFzc1wiOiBcInByb2Nlc3NpbmdcIixcbiAgICAgIFwibWF0ZXJpYWxcIjogXCJDdXN0b20gRnVtaWdhdGUgLSBEZWVwXCJcbiAgICB9LFxuICAgIHtcbiAgICAgIFwiY2xhc3NcIjogXCJwcm9jZXNzaW5nXCIsXG4gICAgICBcIm1hdGVyaWFsXCI6IFwiQ3VzdG9tIFNpZGVkcmVzc1wiXG4gICAgfSxcbiAgICB7XG4gICAgICBcImNsYXNzXCI6IFwicHJvY2Vzc2luZ1wiLFxuICAgICAgXCJtYXRlcmlhbFwiOiBcIkN1dC9XaW5kcm93XCJcbiAgICB9LFxuICAgIHtcbiAgICAgIFwiY2xhc3NcIjogXCJwZXN0aWNpZGVcIixcbiAgICAgIFwibWF0ZXJpYWxcIjogXCJEYWN0aGFsXCJcbiAgICB9LFxuICAgIHtcbiAgICAgIFwiY2xhc3NcIjogXCJwZXN0aWNpZGVcIixcbiAgICAgIFwibWF0ZXJpYWxcIjogXCJEZWZvbCA1XCJcbiAgICB9LFxuICAgIHtcbiAgICAgIFwiY2xhc3NcIjogXCJwZXN0aWNpZGVcIixcbiAgICAgIFwibWF0ZXJpYWxcIjogXCJEZXZyaW5vbCA1MERGXCJcbiAgICB9LFxuICAgIHtcbiAgICAgIFwiY2xhc3NcIjogXCJwZXN0aWNpZGVcIixcbiAgICAgIFwibWF0ZXJpYWxcIjogXCJEaW1ldGhvYXRlXCJcbiAgICB9LFxuICAgIHtcbiAgICAgIFwiY2xhc3NcIjogXCJwZXN0aWNpZGVcIixcbiAgICAgIFwibWF0ZXJpYWxcIjogXCJEaW9tZXRoYXRlXCJcbiAgICB9LFxuICAgIHtcbiAgICAgIFwiY2xhc3NcIjogXCJwZXN0aWNpZGVcIixcbiAgICAgIFwibWF0ZXJpYWxcIjogXCJEaXNjb3ZlclwiXG4gICAgfSxcbiAgICB7XG4gICAgICBcImNsYXNzXCI6IFwicGVzdGljaWRlXCIsXG4gICAgICBcIm1hdGVyaWFsXCI6IFwiRGlzeXN0b25cIlxuICAgIH0sXG4gICAge1xuICAgICAgXCJjbGFzc1wiOiBcInBlc3RpY2lkZVwiLFxuICAgICAgXCJtYXRlcmlhbFwiOiBcIkRpLVN5c3RvblwiXG4gICAgfSxcbiAgICB7XG4gICAgICBcImNsYXNzXCI6IFwicGVzdGljaWRlXCIsXG4gICAgICBcIm1hdGVyaWFsXCI6IFwiRGl0aGFuZSBGNDUgUmFpbnNoaWVsZFwiXG4gICAgfSxcbiAgICB7XG4gICAgICBcImNsYXNzXCI6IFwicGVzdGljaWRlXCIsXG4gICAgICBcIm1hdGVyaWFsXCI6IFwiRGl1cm9uXCJcbiAgICB9LFxuICAgIHtcbiAgICAgIFwiY2xhc3NcIjogXCJmZXJ0aWxpemVyXCIsXG4gICAgICBcIm1hdGVyaWFsXCI6IFwiRHJ5IE5pdHJvZ2VuXCJcbiAgICB9LFxuICAgIHtcbiAgICAgIFwiY2xhc3NcIjogXCJmZXJ0aWxpemVyXCIsXG4gICAgICBcIm1hdGVyaWFsXCI6IFwiRHJ5IE5pdHJvZ2VuIC0gUHJlcGxhbnRcIlxuICAgIH0sXG4gICAge1xuICAgICAgXCJjbGFzc1wiOiBcImZlcnRpbGl6ZXJcIixcbiAgICAgIFwibWF0ZXJpYWxcIjogXCJEcnkgUDJPNVwiXG4gICAgfSxcbiAgICB7XG4gICAgICBcImNsYXNzXCI6IFwiZmVydGlsaXplclwiLFxuICAgICAgXCJtYXRlcmlhbFwiOiBcIkRyeSBQaG9zcGhhdGVcIlxuICAgIH0sXG4gICAge1xuICAgICAgXCJjbGFzc1wiOiBcImZlcnRpbGl6ZXJcIixcbiAgICAgIFwibWF0ZXJpYWxcIjogXCJEcnkgUG90YXNoXCJcbiAgICB9LFxuICAgIHtcbiAgICAgIFwiY2xhc3NcIjogXCJmZXJ0aWxpemVyXCIsXG4gICAgICBcIm1hdGVyaWFsXCI6IFwiRHJ5IFN1bGZ1clwiXG4gICAgfSxcbiAgICB7XG4gICAgICBcImNsYXNzXCI6IFwicGVzdGljaWRlXCIsXG4gICAgICBcIm1hdGVyaWFsXCI6IFwiRW5kdXJhICgyeClcIlxuICAgIH0sXG4gICAge1xuICAgICAgXCJjbGFzc1wiOiBcInBlc3RpY2lkZVwiLFxuICAgICAgXCJtYXRlcmlhbFwiOiBcIkVwdGFtIDdFQ1wiXG4gICAgfSxcbiAgICB7XG4gICAgICBcImRlc2NyaXB0aW9uXCI6IFwiQ29zdCBFc3RpbWF0ZVwiLFxuICAgICAgXCJjbGFzc1wiOiBcImFueVwiLFxuICAgICAgXCJtYXRlcmlhbFwiOiBcImVzdGltYXRlXCJcbiAgICB9LFxuICAgIHtcbiAgICAgIFwiY2xhc3NcIjogXCJwZXN0aWNpZGVcIixcbiAgICAgIFwibWF0ZXJpYWxcIjogXCJFeGNlbCA5MFwiXG4gICAgfSxcbiAgICB7XG4gICAgICBcImNsYXNzXCI6IFwicGVzdGljaWRlXCIsXG4gICAgICBcIm1hdGVyaWFsXCI6IFwiRmFyLUdPXCJcbiAgICB9LFxuICAgIHtcbiAgICAgIFwiY2xhc3NcIjogXCJwcm9jZXNzaW5nXCIsXG4gICAgICBcIm1hdGVyaWFsXCI6IFwiRmVlcyBBc3Nlc21lbnRcIlxuICAgIH0sXG4gICAge1xuICAgICAgXCJjbGFzc1wiOiBcInBlc3RpY2lkZVwiLFxuICAgICAgXCJtYXRlcmlhbFwiOiBcIkZpbmlzaCA2IFByb1wiXG4gICAgfSxcbiAgICB7XG4gICAgICBcImNsYXNzXCI6IFwibWF0ZXJpYWxcIixcbiAgICAgIFwibWF0ZXJpYWxcIjogXCJGdWVsXCJcbiAgICB9LFxuICAgIHtcbiAgICAgIFwiY2xhc3NcIjogXCJtYXRlcmlhbFwiLFxuICAgICAgXCJtYXRlcmlhbFwiOiBcIkZ1ZWwgLSBEaWVzZWxcIlxuICAgIH0sXG4gICAge1xuICAgICAgXCJjbGFzc1wiOiBcIm1hdGVyaWFsXCIsXG4gICAgICBcIm1hdGVyaWFsXCI6IFwiRnVlbCAtIEdhc1wiXG4gICAgfSxcbiAgICB7XG4gICAgICBcImNsYXNzXCI6IFwicHJvY2Vzc2luZ1wiLFxuICAgICAgXCJtYXRlcmlhbFwiOiBcIkZ1bWlnYXRpb25cIlxuICAgIH0sXG4gICAge1xuICAgICAgXCJjbGFzc1wiOiBcInBlc3RpY2lkZVwiLFxuICAgICAgXCJtYXRlcmlhbFwiOiBcIkdlbiAyNVdHXCJcbiAgICB9LFxuICAgIHtcbiAgICAgIFwiY2xhc3NcIjogXCJwZXN0aWNpZGVcIixcbiAgICAgIFwibWF0ZXJpYWxcIjogXCJHaW5zdGFyXCJcbiAgICB9LFxuICAgIHtcbiAgICAgIFwiY2xhc3NcIjogXCJwZXN0aWNpZGVcIixcbiAgICAgIFwibWF0ZXJpYWxcIjogXCJHbHlwaG9zYXRlIEdBTDFcIlxuICAgIH0sXG4gICAge1xuICAgICAgXCJjbGFzc1wiOiBcInBlc3RpY2lkZVwiLFxuICAgICAgXCJtYXRlcmlhbFwiOiBcIkdvYWxcIlxuICAgIH0sXG4gICAge1xuICAgICAgXCJjbGFzc1wiOiBcInBlc3RpY2lkZVwiLFxuICAgICAgXCJtYXRlcmlhbFwiOiBcIkdvYWwgVGVuZGVyXCJcbiAgICB9LFxuICAgIHtcbiAgICAgIFwiY2xhc3NcIjogXCJsYWJvclwiLFxuICAgICAgXCJtYXRlcmlhbFwiOiBcIkdvcGhlciBDb250cm9sXCJcbiAgICB9LFxuICAgIHtcbiAgICAgIFwiY2xhc3NcIjogXCJwcm9jZXNzaW5nXCIsXG4gICAgICBcIm1hdGVyaWFsXCI6IFwiR3JvdW5kIEFwcGxpY2F0aW9uXCJcbiAgICB9LFxuICAgIHtcbiAgICAgIFwiY2xhc3NcIjogXCJwZXN0aWNpZGVcIixcbiAgICAgIFwibWF0ZXJpYWxcIjogXCJIYXJtb255IEV4dHJhXCJcbiAgICB9LFxuICAgIHtcbiAgICAgIFwiY2xhc3NcIjogXCJwcm9jZXNzaW5nXCIsXG4gICAgICBcIm1hdGVyaWFsXCI6IFwiSGFydmVzdFwiXG4gICAgfSxcbiAgICB7XG4gICAgICBcImNsYXNzXCI6IFwicHJvY2Vzc2luZ1wiLFxuICAgICAgXCJtYXRlcmlhbFwiOiBcIkhhcnZlc3QgQ29tYmluZSBHcmFpblwiXG4gICAgfSxcbiAgICB7XG4gICAgICBcImNsYXNzXCI6IFwicHJvY2Vzc2luZ1wiLFxuICAgICAgXCJtYXRlcmlhbFwiOiBcIkhhcnZlc3QgZm9yIEdyYWluXCJcbiAgICB9LFxuICAgIHtcbiAgICAgIFwiY2xhc3NcIjogXCJwcm9jZXNzaW5nXCIsXG4gICAgICBcIm1hdGVyaWFsXCI6IFwiSGFydmVzdDogSGF1bCBHcmFpblwiXG4gICAgfSxcbiAgICB7XG4gICAgICBcImNsYXNzXCI6IFwicHJvY2Vzc2luZ1wiLFxuICAgICAgXCJtYXRlcmlhbFwiOiBcIkhhdWwgYW5kIFN0YWNrXCJcbiAgICB9LFxuICAgIHtcbiAgICAgIFwiY2xhc3NcIjogXCJwcm9jZXNzaW5nXCIsXG4gICAgICBcIm1hdGVyaWFsXCI6IFwiSGF1bCBMb2NhbFwiXG4gICAgfSxcbiAgICB7XG4gICAgICBcImNsYXNzXCI6IFwicGVzdGljaWRlXCIsXG4gICAgICBcIm1hdGVyaWFsXCI6IFwiSGVhZGxpbmVcIlxuICAgIH0sXG4gICAge1xuICAgICAgXCJjbGFzc1wiOiBcInByb2Nlc3NpbmdcIixcbiAgICAgIFwibWF0ZXJpYWxcIjogXCJJbmplY3Rpb24tU2lkZWRyZXNzXCJcbiAgICB9LFxuICAgIHtcbiAgICAgIFwiY2xhc3NcIjogXCJwcm9jZXNzaW5nXCIsXG4gICAgICBcIm1hdGVyaWFsXCI6IFwiSW5qZWN0aW9uLVNpZGVkcmVzcyBOSDNcIlxuICAgIH0sXG4gICAge1xuICAgICAgXCJjbGFzc1wiOiBcInByb2Nlc3NpbmdcIixcbiAgICAgIFwibWF0ZXJpYWxcIjogXCJJbnNlY3RpY2lkZVwiXG4gICAgfSxcbiAgICB7XG4gICAgICBcImNsYXNzXCI6IFwid2F0ZXJcIixcbiAgICAgIFwibWF0ZXJpYWxcIjogXCJJcnJpZ2F0aW9uXCJcbiAgICB9LFxuICAgIHtcbiAgICAgIFwiY2xhc3NcIjogXCJmZXJ0aWxpemVyXCIsXG4gICAgICBcIm1hdGVyaWFsXCI6IFwiSzIwXCJcbiAgICB9LFxuICAgIHtcbiAgICAgIFwiY2xhc3NcIjogXCJmZXJ0aWxpemVyXCIsXG4gICAgICBcIm1hdGVyaWFsXCI6IFwiSzJPXCJcbiAgICB9LFxuICAgIHtcbiAgICAgIFwiY2xhc3NcIjogXCJwZXN0aWNpZGVcIixcbiAgICAgIFwibWF0ZXJpYWxcIjogXCJLYXJtZXhcIlxuICAgIH0sXG4gICAge1xuICAgICAgXCJjbGFzc1wiOiBcInBlc3RpY2lkZVwiLFxuICAgICAgXCJtYXRlcmlhbFwiOiBcIkthcm1leCBERlwiXG4gICAgfSxcbiAgICB7XG4gICAgICBcImNsYXNzXCI6IFwicGVzdGljaWRlXCIsXG4gICAgICBcIm1hdGVyaWFsXCI6IFwiS2VyYlwiXG4gICAgfSxcbiAgICB7XG4gICAgICBcImNsYXNzXCI6IFwibGFib3JcIixcbiAgICAgIFwibWF0ZXJpYWxcIjogXCJMYWJvciAoSXJyaWdhdGlvbilcIlxuICAgIH0sXG4gICAge1xuICAgICAgXCJjbGFzc1wiOiBcImxhYm9yXCIsXG4gICAgICBcIm1hdGVyaWFsXCI6IFwiTGFib3IgKE1hY2hpbmUpXCJcbiAgICB9LFxuICAgIHtcbiAgICAgIFwiY2xhc3NcIjogXCJsYWJvclwiLFxuICAgICAgXCJtYXRlcmlhbFwiOiBcIkxhYm9yIChub24tbWFjaGluZSlcIlxuICAgIH0sXG4gICAge1xuICAgICAgXCJjbGFzc1wiOiBcImxhYm9yXCIsXG4gICAgICBcIm1hdGVyaWFsXCI6IFwiTGFib3IgKG90aGVyKVwiXG4gICAgfSxcbiAgICB7XG4gICAgICBcImRlc2NyaXB0aW9uXCI6IFwiSXJyaWdhdGVkIExhbmQgUmVudFwiLFxuICAgICAgXCJjbGFzc1wiOiBcInJlbnRcIixcbiAgICAgIFwibWF0ZXJpYWxcIjogXCJsYW5kLXJlbnQtaXJyaWdhdGVkXCJcbiAgICB9LFxuICAgIHtcbiAgICAgIFwiZGVzY3JpcHRpb25cIjogXCJOb24gaXJyaWdhdGVkIExhbmQgUmVudFwiLFxuICAgICAgXCJjbGFzc1wiOiBcInJlbnRcIixcbiAgICAgIFwibWF0ZXJpYWxcIjogXCJsYW5kLXJlbnQtbm9uaXJyaWdhdGVkXCJcbiAgICB9LFxuICAgIHtcbiAgICAgIFwiZGVzY3JpcHRpb25cIjogXCJQYXN0dXJlIGlycmlnYXRlZCBMYW5kIFJlbnRcIixcbiAgICAgIFwiY2xhc3NcIjogXCJyZW50XCIsXG4gICAgICBcIm1hdGVyaWFsXCI6IFwibGFuZC1yZW50LXBhc3R1cmVcIlxuICAgIH0sXG4gICAge1xuICAgICAgXCJjbGFzc1wiOiBcInBlc3RpY2lkZVwiLFxuICAgICAgXCJtYXRlcmlhbFwiOiBcIkxhbm5hdGUgOTAgU1BcIlxuICAgIH0sXG4gICAge1xuICAgICAgXCJjbGFzc1wiOiBcInNlZWRcIixcbiAgICAgIFwibWF0ZXJpYWxcIjogXCJMZW50aWwgU2VlZFwiXG4gICAgfSxcbiAgICB7XG4gICAgICBcImNsYXNzXCI6IFwicGVzdGljaWRlXCIsXG4gICAgICBcIm1hdGVyaWFsXCI6IFwiTGV2ZXJhZ2VcIlxuICAgIH0sXG4gICAge1xuICAgICAgXCJjbGFzc1wiOiBcInBlc3RpY2lkZVwiLFxuICAgICAgXCJtYXRlcmlhbFwiOiBcIkxldmVyYWdlIDIuN1wiXG4gICAgfSxcbiAgICB7XG4gICAgICBcImNsYXNzXCI6IFwicGVzdGljaWRlXCIsXG4gICAgICBcIm1hdGVyaWFsXCI6IFwiTEkgNzAwXCJcbiAgICB9LFxuICAgIHtcbiAgICAgIFwiY2xhc3NcIjogXCJtYXRlcmlhbFwiLFxuICAgICAgXCJtYXRlcmlhbFwiOiBcIkxpbWVcIlxuICAgIH0sXG4gICAge1xuICAgICAgXCJjbGFzc1wiOiBcImZlcnRpbGl6ZXJcIixcbiAgICAgIFwibWF0ZXJpYWxcIjogXCJMaXF1aWQgTml0cm9nZW5cIlxuICAgIH0sXG4gICAge1xuICAgICAgXCJjbGFzc1wiOiBcImZlcnRpbGl6ZXJcIixcbiAgICAgIFwibWF0ZXJpYWxcIjogXCJMaXF1aWQgUDJPNVwiXG4gICAgfSxcbiAgICB7XG4gICAgICBcImNsYXNzXCI6IFwicGVzdGljaWRlXCIsXG4gICAgICBcIm1hdGVyaWFsXCI6IFwiTG9yc2JhbiAxNUdcIlxuICAgIH0sXG4gICAge1xuICAgICAgXCJjbGFzc1wiOiBcInBlc3RpY2lkZVwiLFxuICAgICAgXCJtYXRlcmlhbFwiOiBcIkxvcnNiYW4gNEVcIlxuICAgIH0sXG4gICAge1xuICAgICAgXCJjbGFzc1wiOiBcIm1hdGVyaWFsXCIsXG4gICAgICBcIm1hdGVyaWFsXCI6IFwiTHViZVwiXG4gICAgfSxcbiAgICB7XG4gICAgICBcImNsYXNzXCI6IFwibWF0ZXJpYWxcIixcbiAgICAgIFwibWF0ZXJpYWxcIjogXCJMdWJyaWNhbnRzXCJcbiAgICB9LFxuICAgIHtcbiAgICAgIFwiY2xhc3NcIjogXCJwZXN0aWNpZGVcIixcbiAgICAgIFwibWF0ZXJpYWxcIjogXCJNOTBcIlxuICAgIH0sXG4gICAge1xuICAgICAgXCJjbGFzc1wiOiBcImxhYm9yXCIsXG4gICAgICBcIm1hdGVyaWFsXCI6IFwiTWFpbnRlbmFuY2VcIlxuICAgIH0sXG4gICAge1xuICAgICAgXCJjbGFzc1wiOiBcImxhYm9yXCIsXG4gICAgICBcIm1hdGVyaWFsXCI6IFwiTWFpbnRlbmFuY2UgYW5kIFJlcGFpclwiXG4gICAgfSxcbiAgICB7XG4gICAgICBcImNsYXNzXCI6IFwicGVzdGljaWRlXCIsXG4gICAgICBcIm1hdGVyaWFsXCI6IFwiTWFsYXRoaW9uXCJcbiAgICB9LFxuICAgIHtcbiAgICAgIFwiY2xhc3NcIjogXCJwcm9jZXNzaW5nXCIsXG4gICAgICBcIm1hdGVyaWFsXCI6IFwiTWFuYWdlbWVudFwiXG4gICAgfSxcbiAgICB7XG4gICAgICBcImNsYXNzXCI6IFwicGVzdGljaWRlXCIsXG4gICAgICBcIm1hdGVyaWFsXCI6IFwiTWF2ZXJpY2tcIlxuICAgIH0sXG4gICAge1xuICAgICAgXCJjbGFzc1wiOiBcInBlc3RpY2lkZVwiLFxuICAgICAgXCJtYXRlcmlhbFwiOiBcIk1DUEEgQW1pbmVcIlxuICAgIH0sXG4gICAge1xuICAgICAgXCJjbGFzc1wiOiBcInBlc3RpY2lkZVwiLFxuICAgICAgXCJtYXRlcmlhbFwiOiBcIk1lcGV4IEdpbiBPdXJcIlxuICAgIH0sXG4gICAge1xuICAgICAgXCJjbGFzc1wiOiBcInBlc3RpY2lkZVwiLFxuICAgICAgXCJtYXRlcmlhbFwiOiBcIk1ldGFtIFNvZGl1bVwiXG4gICAgfSxcbiAgICB7XG4gICAgICBcImNsYXNzXCI6IFwiZmVydGlsaXplclwiLFxuICAgICAgXCJtYXRlcmlhbFwiOiBcIk1pY3JvbnV0cmllbnRzXCJcbiAgICB9LFxuICAgIHtcbiAgICAgIFwiY2xhc3NcIjogXCJwZXN0aWNpZGVcIixcbiAgICAgIFwibWF0ZXJpYWxcIjogXCJNaWNyby1UZWNoXCJcbiAgICB9LFxuICAgIHtcbiAgICAgIFwiY2xhc3NcIjogXCJmZXJ0aWxpemVyXCIsXG4gICAgICBcIm1hdGVyaWFsXCI6IFwiTXVsY2hcIlxuICAgIH0sXG4gICAge1xuICAgICAgXCJjbGFzc1wiOiBcInBlc3RpY2lkZVwiLFxuICAgICAgXCJtYXRlcmlhbFwiOiBcIk11c3RhbmcgMS41IEVXXCJcbiAgICB9LFxuICAgIHtcbiAgICAgIFwiY2xhc3NcIjogXCJmZXJ0aWxpemVyXCIsXG4gICAgICBcIm1hdGVyaWFsXCI6IFwiTml0cm9nZW5cIlxuICAgIH0sXG4gICAge1xuICAgICAgXCJjbGFzc1wiOiBcImZlcnRpbGl6ZXJcIixcbiAgICAgIFwibWF0ZXJpYWxcIjogXCJOaXRyb2dlbiAoZHJ5KVwiXG4gICAgfSxcbiAgICB7XG4gICAgICBcImNsYXNzXCI6IFwicGVzdGljaWRlXCIsXG4gICAgICBcIm1hdGVyaWFsXCI6IFwiT2Jlcm9uIDI1Q1wiXG4gICAgfSxcbiAgICB7XG4gICAgICBcImRlc2NyaXB0aW9uXCI6IFwiWzQ1LTIwOTEgQWdyaWN1bHR1cmFsIEVxdWlwbWVudCBPcGVyYXRvcnNdKGh0dHA6Ly93d3cuYmxzLmdvdi9vZXMvY3VycmVudC9vZXM0NTIwOTEuaHRtKVwiLFxuICAgICAgXCJjbGFzc1wiOiBcImxhYm9yXCIsXG4gICAgICBcIm1hdGVyaWFsXCI6IFwib2VzNDUyMDkxXCJcbiAgICB9LFxuICAgIHtcbiAgICAgIFwiZGVzY3JpcHRpb25cIjogXCJbNDUtMjA5MiBGYXJtd29ya2VycyBhbmQgTGFib3JlcnMsIENyb3AsIE51cnNlcnksIGFuZCBHcmVlbmhvdXNlXShodHRwOi8vd3d3LmJscy5nb3Yvb2VzL2N1cnJlbnQvb2VzNDUyMDkyLmh0bSlcIixcbiAgICAgIFwiY2xhc3NcIjogXCJsYWJvclwiLFxuICAgICAgXCJtYXRlcmlhbFwiOiBcIm9lczQ1MjA5MlwiXG4gICAgfSxcbiAgICB7XG4gICAgICBcImRlc2NyaXB0aW9uXCI6IFwiWzUzLTMwMzIgSGVhdnkgYW5kIFRyYWN0b3ItVHJhaWxlciBUcnVjayBEcml2ZXJzXShodHRwOi8vd3d3LmJscy5nb3Yvb2VzL2N1cnJlbnQvb2VzNTMzMDMyLmh0bSlcIixcbiAgICAgIFwiY2xhc3NcIjogXCJsYWJvclwiLFxuICAgICAgXCJtYXRlcmlhbFwiOiBcIm9lczUzMzAzMlwiXG4gICAgfSxcbiAgICB7XG4gICAgICBcImNsYXNzXCI6IFwicGVzdGljaWRlXCIsXG4gICAgICBcIm1hdGVyaWFsXCI6IFwiT3J0aGVuZVwiXG4gICAgfSxcbiAgICB7XG4gICAgICBcImNsYXNzXCI6IFwicGVzdGljaWRlXCIsXG4gICAgICBcIm1hdGVyaWFsXCI6IFwiT3NwcmV5XCJcbiAgICB9LFxuICAgIHtcbiAgICAgIFwiY2xhc3NcIjogXCJwZXN0aWNpZGVcIixcbiAgICAgIFwibWF0ZXJpYWxcIjogXCJPdXRsb29rIDZFQ1wiXG4gICAgfSxcbiAgICB7XG4gICAgICBcImNsYXNzXCI6IFwibWF0ZXJpYWxcIixcbiAgICAgIFwibWF0ZXJpYWxcIjogXCJQYWNraW5nXCJcbiAgICB9LFxuICAgIHtcbiAgICAgIFwiY2xhc3NcIjogXCJwcm9jZXNzaW5nXCIsXG4gICAgICBcIm1hdGVyaWFsXCI6IFwiUGVzdCBDb250cm9sIENvbnN1bHRhbnRcIlxuICAgIH0sXG4gICAge1xuICAgICAgXCJjbGFzc1wiOiBcImZlcnRpbGl6ZXJcIixcbiAgICAgIFwibWF0ZXJpYWxcIjogXCJQaG9zcGhvcm91c1wiXG4gICAgfSxcbiAgICB7XG4gICAgICBcImNsYXNzXCI6IFwiZmVydGlsaXplclwiLFxuICAgICAgXCJtYXRlcmlhbFwiOiBcIlBob3NwaG9yb3VzIChkcnkpXCJcbiAgICB9LFxuICAgIHtcbiAgICAgIFwiY2xhc3NcIjogXCJsYWJvclwiLFxuICAgICAgXCJtYXRlcmlhbFwiOiBcIlBpY2sgQmVycmllc1wiXG4gICAgfSxcbiAgICB7XG4gICAgICBcImNsYXNzXCI6IFwibGFib3JcIixcbiAgICAgIFwibWF0ZXJpYWxcIjogXCJQbGFudFwiXG4gICAgfSxcbiAgICB7XG4gICAgICBcImNsYXNzXCI6IFwibGFib3JcIixcbiAgICAgIFwibWF0ZXJpYWxcIjogXCJQbGFudGluZ1wiXG4gICAgfSxcbiAgICB7XG4gICAgICBcImNsYXNzXCI6IFwicHJvY2Vzc2luZ1wiLFxuICAgICAgXCJtYXRlcmlhbFwiOiBcIlBvbmNobyBCZXRhIFNlZWQgVHJlYXRtZW50XCJcbiAgICB9LFxuICAgIHtcbiAgICAgIFwiY2xhc3NcIjogXCJsYWJvclwiLFxuICAgICAgXCJtYXRlcmlhbFwiOiBcIlBvc3RoYXJ2ZXN0IGFuZCBwYWNrYWdpbmdcIlxuICAgIH0sXG4gICAge1xuICAgICAgXCJjbGFzc1wiOiBcInNlZWRcIixcbiAgICAgIFwibWF0ZXJpYWxcIjogXCJQb3RhdG8gU2VlZFwiXG4gICAgfSxcbiAgICB7XG4gICAgICBcImNsYXNzXCI6IFwicGVzdGljaWRlXCIsXG4gICAgICBcIm1hdGVyaWFsXCI6IFwiUHJpc3RpbmVcIlxuICAgIH0sXG4gICAge1xuICAgICAgXCJjbGFzc1wiOiBcInBlc3RpY2lkZVwiLFxuICAgICAgXCJtYXRlcmlhbFwiOiBcIlByb3dsXCJcbiAgICB9LFxuICAgIHtcbiAgICAgIFwiY2xhc3NcIjogXCJwZXN0aWNpZGVcIixcbiAgICAgIFwibWF0ZXJpYWxcIjogXCJQcm93bCAzLjNFQ1wiXG4gICAgfSxcbiAgICB7XG4gICAgICBcImNsYXNzXCI6IFwicGVzdGljaWRlXCIsXG4gICAgICBcIm1hdGVyaWFsXCI6IFwiUHJvd2wgSDIwXCJcbiAgICB9LFxuICAgIHtcbiAgICAgIFwiY2xhc3NcIjogXCJwZXN0aWNpZGVcIixcbiAgICAgIFwibWF0ZXJpYWxcIjogXCJQdW1hIDFFQ1wiXG4gICAgfSxcbiAgICB7XG4gICAgICBcImNsYXNzXCI6IFwibWF0ZXJpYWxcIixcbiAgICAgIFwibWF0ZXJpYWxcIjogXCJQdXJpdHkgYW5kIEdlcm1cIlxuICAgIH0sXG4gICAge1xuICAgICAgXCJjbGFzc1wiOiBcInBlc3RpY2lkZVwiLFxuICAgICAgXCJtYXRlcmlhbFwiOiBcIlB1cnN1aXRcIlxuICAgIH0sXG4gICAge1xuICAgICAgXCJjbGFzc1wiOiBcInBlc3RpY2lkZVwiLFxuICAgICAgXCJtYXRlcmlhbFwiOiBcIlF1YWRyaXNcIlxuICAgIH0sXG4gICAge1xuICAgICAgXCJjbGFzc1wiOiBcInBlc3RpY2lkZVwiLFxuICAgICAgXCJtYXRlcmlhbFwiOiBcIlF1aWx0XCJcbiAgICB9LFxuICAgIHtcbiAgICAgIFwiY2xhc3NcIjogXCJtYXRlcmlhbFwiLFxuICAgICAgXCJtYXRlcmlhbFwiOiBcIlJha2VcIlxuICAgIH0sXG4gICAge1xuICAgICAgXCJjbGFzc1wiOiBcInBlc3RpY2lkZVwiLFxuICAgICAgXCJtYXRlcmlhbFwiOiBcIlJhbGx5IDQwIFdTUFwiXG4gICAgfSxcbiAgICB7XG4gICAgICBcImNsYXNzXCI6IFwicGVzdGljaWRlXCIsXG4gICAgICBcIm1hdGVyaWFsXCI6IFwiUmVnbG9uZVwiXG4gICAgfSxcbiAgICB7XG4gICAgICBcImNsYXNzXCI6IFwicHJvY2Vzc2luZ1wiLFxuICAgICAgXCJtYXRlcmlhbFwiOiBcIlJlbnRhbCBGZXJ0aWxpemVyIEFwcGxpY2F0b3JcIlxuICAgIH0sXG4gICAge1xuICAgICAgXCJjbGFzc1wiOiBcInByb2Nlc3NpbmdcIixcbiAgICAgIFwibWF0ZXJpYWxcIjogXCJSZW50YWwgUmlwcGVyIFNob290ZXJcIlxuICAgIH0sXG4gICAge1xuICAgICAgXCJjbGFzc1wiOiBcInByb2Nlc3NpbmdcIixcbiAgICAgIFwibWF0ZXJpYWxcIjogXCJSZW50YWwgU3ByYXllclwiXG4gICAgfSxcbiAgICB7XG4gICAgICBcImNsYXNzXCI6IFwicHJvY2Vzc2luZ1wiLFxuICAgICAgXCJtYXRlcmlhbFwiOiBcIlJlcGFpclwiXG4gICAgfSxcbiAgICB7XG4gICAgICBcImNsYXNzXCI6IFwicGVzdGljaWRlXCIsXG4gICAgICBcIm1hdGVyaWFsXCI6IFwiUmlkb21pbCBHb2xkIEVDXCJcbiAgICB9LFxuICAgIHtcbiAgICAgIFwiY2xhc3NcIjogXCJwcm9jZXNzaW5nXCIsXG4gICAgICBcIm1hdGVyaWFsXCI6IFwiUmlwZXIgU2hvb3RlclwiXG4gICAgfSxcbiAgICB7XG4gICAgICBcImNsYXNzXCI6IFwicHJvY2Vzc2luZ1wiLFxuICAgICAgXCJtYXRlcmlhbFwiOiBcIlJvYWRzaWRlIEJhbGVzXCJcbiAgICB9LFxuICAgIHtcbiAgICAgIFwiY2xhc3NcIjogXCJwcm9jZXNzaW5nXCIsXG4gICAgICBcIm1hdGVyaWFsXCI6IFwiUm9hZHNpZGUgSGF5XCJcbiAgICB9LFxuICAgIHtcbiAgICAgIFwiY2xhc3NcIjogXCJsYWJvclwiLFxuICAgICAgXCJtYXRlcmlhbFwiOiBcIlJvZGVudCBDb250cm9sXCJcbiAgICB9LFxuICAgIHtcbiAgICAgIFwiY2xhc3NcIjogXCJwZXN0aWNpZGVcIixcbiAgICAgIFwibWF0ZXJpYWxcIjogXCJSb3VuZHVwXCJcbiAgICB9LFxuICAgIHtcbiAgICAgIFwiY2xhc3NcIjogXCJwZXN0aWNpZGVcIixcbiAgICAgIFwibWF0ZXJpYWxcIjogXCJSb3VuZHVwIE9yaWdpbmFsIE1heFwiXG4gICAgfSxcbiAgICB7XG4gICAgICBcImNsYXNzXCI6IFwicGVzdGljaWRlXCIsXG4gICAgICBcIm1hdGVyaWFsXCI6IFwiUm91bmR1cCBVbHRyYSBNYXhcIlxuICAgIH0sXG4gICAge1xuICAgICAgXCJjbGFzc1wiOiBcIm1hdGVyaWFsXCIsXG4gICAgICBcIm1hdGVyaWFsXCI6IFwiU2F3ZHVzdFwiXG4gICAgfSxcbiAgICB7XG4gICAgICBcImNsYXNzXCI6IFwicHJvY2Vzc2luZ1wiLFxuICAgICAgXCJtYXRlcmlhbFwiOiBcIlNlZWQgQ2xlYW4gYW5kIEJhZ1wiXG4gICAgfSxcbiAgICB7XG4gICAgICBcImNsYXNzXCI6IFwicHJvY2Vzc2luZ1wiLFxuICAgICAgXCJtYXRlcmlhbFwiOiBcIlNlZWQgQ2xlYW5kIGFuZCBCYWdcIlxuICAgIH0sXG4gICAge1xuICAgICAgXCJjbGFzc1wiOiBcInByb2Nlc3NpbmdcIixcbiAgICAgIFwibWF0ZXJpYWxcIjogXCJTZWVkIFRlc3RcIlxuICAgIH0sXG4gICAge1xuICAgICAgXCJjbGFzc1wiOiBcInBlc3RpY2lkZVwiLFxuICAgICAgXCJtYXRlcmlhbFwiOiBcIlNlbGVjdCBNYXhcIlxuICAgIH0sXG4gICAge1xuICAgICAgXCJjbGFzc1wiOiBcInBlc3RpY2lkZVwiLFxuICAgICAgXCJtYXRlcmlhbFwiOiBcIlNlbmNvclwiXG4gICAgfSxcbiAgICB7XG4gICAgICBcImNsYXNzXCI6IFwicGVzdGljaWRlXCIsXG4gICAgICBcIm1hdGVyaWFsXCI6IFwiU2VuY29yIDRMXCJcbiAgICB9LFxuICAgIHtcbiAgICAgIFwiY2xhc3NcIjogXCJwZXN0aWNpZGVcIixcbiAgICAgIFwibWF0ZXJpYWxcIjogXCJTZW5jb3IgNzVERlwiXG4gICAgfSxcbiAgICB7XG4gICAgICBcImNsYXNzXCI6IFwicGVzdGljaWRlXCIsXG4gICAgICBcIm1hdGVyaWFsXCI6IFwiU2V2aW4gWExSIFBsdXNcIlxuICAgIH0sXG4gICAge1xuICAgICAgXCJjbGFzc1wiOiBcInBlc3RpY2lkZVwiLFxuICAgICAgXCJtYXRlcmlhbFwiOiBcIlNoYXJrIEVXXCJcbiAgICB9LFxuICAgIHtcbiAgICAgIFwiY2xhc3NcIjogXCJwZXN0aWNpZGVcIixcbiAgICAgIFwibWF0ZXJpYWxcIjogXCJTbHVnIEJhaXRcIlxuICAgIH0sXG4gICAge1xuICAgICAgXCJjbGFzc1wiOiBcInBlc3RpY2lkZVwiLFxuICAgICAgXCJtYXRlcmlhbFwiOiBcIlNvbmFsYW4gSEZQXCJcbiAgICB9LFxuICAgIHtcbiAgICAgIFwiY2xhc3NcIjogXCJzZWVkXCIsXG4gICAgICBcIm1hdGVyaWFsXCI6IFwiU29yZ2h1bSBTZWVkXCJcbiAgICB9LFxuICAgIHtcbiAgICAgIFwiY2xhc3NcIjogXCJwZXN0aWNpZGVcIixcbiAgICAgIFwibWF0ZXJpYWxcIjogXCJTcG90IFNwcmF5IFJvdW5kdXBcIlxuICAgIH0sXG4gICAge1xuICAgICAgXCJjbGFzc1wiOiBcImxhYm9yXCIsXG4gICAgICBcIm1hdGVyaWFsXCI6IFwiU3ByYXllclwiXG4gICAgfSxcbiAgICB7XG4gICAgICBcImNsYXNzXCI6IFwicGVzdGljaWRlXCIsXG4gICAgICBcIm1hdGVyaWFsXCI6IFwiU3RhcGxlXCJcbiAgICB9LFxuICAgIHtcbiAgICAgIFwiY2xhc3NcIjogXCJwZXN0aWNpZGVcIixcbiAgICAgIFwibWF0ZXJpYWxcIjogXCJTdGFyYW5lK1NhbHZvXCJcbiAgICB9LFxuICAgIHtcbiAgICAgIFwiY2xhc3NcIjogXCJwZXN0aWNpZGVcIixcbiAgICAgIFwibWF0ZXJpYWxcIjogXCJTdGFyYW5lK1N3b3JkXCJcbiAgICB9LFxuICAgIHtcbiAgICAgIFwiY2xhc3NcIjogXCJwcm9jZXNzaW5nXCIsXG4gICAgICBcIm1hdGVyaWFsXCI6IFwiU3RvcmFnZSBPcGVyYXRpbmcgQ29zdHNcIlxuICAgIH0sXG4gICAge1xuICAgICAgXCJjbGFzc1wiOiBcInByb2Nlc3NpbmdcIixcbiAgICAgIFwibWF0ZXJpYWxcIjogXCJTdG9yYWdlIFJlcGFpcnNcIlxuICAgIH0sXG4gICAge1xuICAgICAgXCJjbGFzc1wiOiBcInBlc3RpY2lkZVwiLFxuICAgICAgXCJtYXRlcmlhbFwiOiBcIlN0cmF0ZWdvXCJcbiAgICB9LFxuICAgIHtcbiAgICAgIFwiY2xhc3NcIjogXCJsYWJvclwiLFxuICAgICAgXCJtYXRlcmlhbFwiOiBcIlN0dWJsZSBTaHJlZGRlclwiXG4gICAgfSxcbiAgICB7XG4gICAgICBcImNsYXNzXCI6IFwicGVzdGljaWRlXCIsXG4gICAgICBcIm1hdGVyaWFsXCI6IFwiU3VjY2Vzc1wiXG4gICAgfSxcbiAgICB7XG4gICAgICBcImNsYXNzXCI6IFwicHJvY2Vzc2luZ1wiLFxuICAgICAgXCJtYXRlcmlhbFwiOiBcIlN1Z2FyYmVldFwiXG4gICAgfSxcbiAgICB7XG4gICAgICBcImNsYXNzXCI6IFwiZmVydGlsaXplclwiLFxuICAgICAgXCJtYXRlcmlhbFwiOiBcIlN1bGZ1clwiXG4gICAgfSxcbiAgICB7XG4gICAgICBcImNsYXNzXCI6IFwiZmVydGlsaXplclwiLFxuICAgICAgXCJtYXRlcmlhbFwiOiBcIlN1bGZ1ciAoZHJ5KVwiXG4gICAgfSxcbiAgICB7XG4gICAgICBcImNsYXNzXCI6IFwiZmVydGlsaXplclwiLFxuICAgICAgXCJtYXRlcmlhbFwiOiBcIlN1bGZ1cmljIEFjaWRcIlxuICAgIH0sXG4gICAge1xuICAgICAgXCJjbGFzc1wiOiBcImZlcnRpbGl6ZXJcIixcbiAgICAgIFwibWF0ZXJpYWxcIjogXCJTdXJmYWN0YW50LUluZHVjZVwiXG4gICAgfSxcbiAgICB7XG4gICAgICBcImNsYXNzXCI6IFwicGVzdGljaWRlXCIsXG4gICAgICBcIm1hdGVyaWFsXCI6IFwiU3VyZmxhbiBBU1wiXG4gICAgfSxcbiAgICB7XG4gICAgICBcImNsYXNzXCI6IFwic2VlZFwiLFxuICAgICAgXCJtYXRlcmlhbFwiOiBcIlN1c2FuIFNlZWRcIlxuICAgIH0sXG4gICAge1xuICAgICAgXCJjbGFzc1wiOiBcInByb2Nlc3NpbmdcIixcbiAgICAgIFwibWF0ZXJpYWxcIjogXCJTd2F0aFwiXG4gICAgfSxcbiAgICB7XG4gICAgICBcImNsYXNzXCI6IFwicHJvY2Vzc2luZ1wiLFxuICAgICAgXCJtYXRlcmlhbFwiOiBcIlN3YXRoaW5nXCJcbiAgICB9LFxuICAgIHtcbiAgICAgIFwiY2xhc3NcIjogXCJsYWJvclwiLFxuICAgICAgXCJtYXRlcmlhbFwiOiBcIlN3YXRoIFJha2VcIlxuICAgIH0sXG4gICAge1xuICAgICAgXCJjbGFzc1wiOiBcInBlc3RpY2lkZVwiLFxuICAgICAgXCJtYXRlcmlhbFwiOiBcIlN5bmFwc2UgV0dcIlxuICAgIH0sXG4gICAge1xuICAgICAgXCJjbGFzc1wiOiBcInByb2Nlc3NpbmdcIixcbiAgICAgIFwibWF0ZXJpYWxcIjogXCJUYXJwaW5nXCJcbiAgICB9LFxuICAgIHtcbiAgICAgIFwiY2xhc3NcIjogXCJwZXN0aWNpZGVcIixcbiAgICAgIFwibWF0ZXJpYWxcIjogXCJUZWxvbmUgSUlcIlxuICAgIH0sXG4gICAge1xuICAgICAgXCJjbGFzc1wiOiBcInByb2Nlc3NpbmdcIixcbiAgICAgIFwibWF0ZXJpYWxcIjogXCJUaXNzdWUgQW5hbHlzaXNcIlxuICAgIH0sXG4gICAge1xuICAgICAgXCJjbGFzc1wiOiBcInByb2Nlc3NpbmdcIixcbiAgICAgIFwibWF0ZXJpYWxcIjogXCJUcmFuc3BvcnRcIlxuICAgIH0sXG4gICAge1xuICAgICAgXCJjbGFzc1wiOiBcInByb2Nlc3NpbmdcIixcbiAgICAgIFwibWF0ZXJpYWxcIjogXCJUcmFuc3BvcnQgdG8gUERYXCJcbiAgICB9LFxuICAgIHtcbiAgICAgIFwiY2xhc3NcIjogXCJwZXN0aWNpZGVcIixcbiAgICAgIFwibWF0ZXJpYWxcIjogXCJUcmVmbGFuIDRIRlBcIlxuICAgIH0sXG4gICAge1xuICAgICAgXCJjbGFzc1wiOiBcInBlc3RpY2lkZVwiLFxuICAgICAgXCJtYXRlcmlhbFwiOiBcIlRyZWZsYW4gRlBcIlxuICAgIH0sXG4gICAge1xuICAgICAgXCJjbGFzc1wiOiBcInBlc3RpY2lkZVwiLFxuICAgICAgXCJtYXRlcmlhbFwiOiBcIlRyZWZsYW4gVFIgMTBcIlxuICAgIH0sXG4gICAge1xuICAgICAgXCJjbGFzc1wiOiBcInBlc3RpY2lkZVwiLFxuICAgICAgXCJtYXRlcmlhbFwiOiBcIlRyaWZsdXJleCBIRlBcIlxuICAgIH0sXG4gICAge1xuICAgICAgXCJjbGFzc1wiOiBcImZlcnRpbGl6ZXJcIixcbiAgICAgIFwibWF0ZXJpYWxcIjogXCJVTjMyXCJcbiAgICB9LFxuICAgIHtcbiAgICAgIFwiY2xhc3NcIjogXCJwZXN0aWNpZGVcIixcbiAgICAgIFwibWF0ZXJpYWxcIjogXCJWZWxwYXIgTFwiXG4gICAgfSxcbiAgICB7XG4gICAgICBcImNsYXNzXCI6IFwid2F0ZXJcIixcbiAgICAgIFwibWF0ZXJpYWxcIjogXCJXYXRlclwiXG4gICAgfSxcbiAgICB7XG4gICAgICBcImNsYXNzXCI6IFwicHJvY2Vzc2luZ1wiLFxuICAgICAgXCJtYXRlcmlhbFwiOiBcIldhdGVyIEFzc2VzbWVudFwiXG4gICAgfSxcbiAgICB7XG4gICAgICBcImNsYXNzXCI6IFwibGFib3JcIixcbiAgICAgIFwibWF0ZXJpYWxcIjogXCJXZWVkIENvbnRyb2xcIlxuICAgIH0sXG4gICAge1xuICAgICAgXCJjbGFzc1wiOiBcInByb2Nlc3NpbmdcIixcbiAgICAgIFwibWF0ZXJpYWxcIjogXCJXaGVhdCBBc3Nlc21lbnRcIlxuICAgIH0sXG4gICAge1xuICAgICAgXCJjbGFzc1wiOiBcInNlZWRcIixcbiAgICAgIFwibWF0ZXJpYWxcIjogXCJXaGVhdCBTZWVkXCJcbiAgICB9LFxuICAgIHtcbiAgICAgIFwiY2xhc3NcIjogXCJtYXRlcmlhbFwiLFxuICAgICAgXCJtYXRlcmlhbFwiOiBcIll1a29uXCJcbiAgICB9LFxuICAgIHtcbiAgICAgIFwiY2xhc3NcIjogXCJtYXRlcmlhbFwiLFxuICAgICAgXCJtYXRlcmlhbFwiOiBcIlplcGh5clwiXG4gICAgfSxcbiAgICB7XG4gICAgICBcImNsYXNzXCI6IFwiZmVydGlsaXplclwiLFxuICAgICAgXCJtYXRlcmlhbFwiOiBcIlppbmNcIlxuICAgIH0sXG4gICAge1xuICAgICAgXCJyZXF1aXJlc1wiOiBbXG4gICAgICAgIHtcbiAgICAgICAgICBcInVuaXRcIjogXCJbZ2FsX3VzXS9oXCIsXG4gICAgICAgICAgXCJhbW91bnRcIjogMy45NixcbiAgICAgICAgICBcIm1hdGVyaWFsXCI6IFwiRXF1aXBtZW50IEZ1ZWxcIlxuICAgICAgICB9LFxuICAgICAgICB7XG4gICAgICAgICAgXCJ1bml0XCI6IFwiaC9oXCIsXG4gICAgICAgICAgXCJhbW91bnRcIjogMSxcbiAgICAgICAgICBcIm1hdGVyaWFsXCI6IFwiTGFib3ItLTMtV2hlZWwgQWcgU3ByYXllclwiXG4gICAgICAgIH1cbiAgICAgIF0sXG4gICAgICBcImNsYXNzXCI6IFwiZXF1aXBtZW50XCIsXG4gICAgICBcInVuaXRcIjogXCJoXCIsXG4gICAgICBcIm1hdGVyaWFsXCI6IFwiMy1XaGVlbCBBZyBTcHJheWVyXCJcbiAgICB9LFxuICAgIHtcbiAgICAgIFwicmVxdWlyZXNcIjogW1xuICAgICAgICB7XG4gICAgICAgICAgXCJ1bml0XCI6IFwiW2dhbF91c10vaFwiLFxuICAgICAgICAgIFwiYW1vdW50XCI6IDE5LjM2LFxuICAgICAgICAgIFwibWF0ZXJpYWxcIjogXCJFcXVpcG1lbnQgRnVlbFwiXG4gICAgICAgIH0sXG4gICAgICAgIHtcbiAgICAgICAgICBcInVuaXRcIjogXCJoL2hcIixcbiAgICAgICAgICBcImFtb3VudFwiOiAxLFxuICAgICAgICAgIFwibWF0ZXJpYWxcIjogXCJMYWJvci0tQ2hhbGxlbmdlciB0cmFjdG9yXCJcbiAgICAgICAgfVxuICAgICAgXSxcbiAgICAgIFwiY2xhc3NcIjogXCJlcXVpcG1lbnRcIixcbiAgICAgIFwidW5pdFwiOiBcImhcIixcbiAgICAgIFwibWF0ZXJpYWxcIjogXCJDaGFsbGVuZ2VyIHRyYWN0b3JcIlxuICAgIH0sXG4gICAge1xuICAgICAgXCJyZXF1aXJlc1wiOiBbXG4gICAgICAgIHtcbiAgICAgICAgICBcInVuaXRcIjogXCJbZ2FsX3VzXS9oXCIsXG4gICAgICAgICAgXCJhbW91bnRcIjogMC45NixcbiAgICAgICAgICBcIm1hdGVyaWFsXCI6IFwiRXF1aXBtZW50IEZ1ZWxcIlxuICAgICAgICB9LFxuICAgICAgICB7XG4gICAgICAgICAgXCJ1bml0XCI6IFwiaC9oXCIsXG4gICAgICAgICAgXCJhbW91bnRcIjogMSxcbiAgICAgICAgICBcIm1hdGVyaWFsXCI6IFwiTGFib3ItLUNvb2xlci92YW5cIlxuICAgICAgICB9XG4gICAgICBdLFxuICAgICAgXCJjbGFzc1wiOiBcImVxdWlwbWVudFwiLFxuICAgICAgXCJ1bml0XCI6IFwiaFwiLFxuICAgICAgXCJtYXRlcmlhbFwiOiBcIkNvb2xlci92YW5cIlxuICAgIH0sXG4gICAge1xuICAgICAgXCJyZXF1aXJlc1wiOiBbXG4gICAgICAgIHtcbiAgICAgICAgICBcInVuaXRcIjogXCJbZ2FsX3VzXS9oXCIsXG4gICAgICAgICAgXCJhbW91bnRcIjogMTkuMzYsXG4gICAgICAgICAgXCJtYXRlcmlhbFwiOiBcIkVxdWlwbWVudCBGdWVsXCJcbiAgICAgICAgfSxcbiAgICAgICAge1xuICAgICAgICAgIFwidW5pdFwiOiBcImgvaFwiLFxuICAgICAgICAgIFwiYW1vdW50XCI6IDEsXG4gICAgICAgICAgXCJtYXRlcmlhbFwiOiBcIkxhYm9yLS1FbGltaW5hdG9yXCJcbiAgICAgICAgfVxuICAgICAgXSxcbiAgICAgIFwiY2xhc3NcIjogXCJlcXVpcG1lbnRcIixcbiAgICAgIFwidW5pdFwiOiBcImhcIixcbiAgICAgIFwibWF0ZXJpYWxcIjogXCJFbGltaW5hdG9yXCJcbiAgICB9LFxuICAgIHtcbiAgICAgIFwicmVxdWlyZXNcIjogW1xuICAgICAgICB7XG4gICAgICAgICAgXCJ1bml0XCI6IFwiW2dhbF91c10vaFwiLFxuICAgICAgICAgIFwiYW1vdW50XCI6IDEzLjIsXG4gICAgICAgICAgXCJtYXRlcmlhbFwiOiBcIkVxdWlwbWVudCBGdWVsXCJcbiAgICAgICAgfSxcbiAgICAgICAge1xuICAgICAgICAgIFwidW5pdFwiOiBcImgvaFwiLFxuICAgICAgICAgIFwiYW1vdW50XCI6IDEsXG4gICAgICAgICAgXCJtYXRlcmlhbFwiOiBcIkxhYm9yLS1GUiA2MDgwIEZIXCJcbiAgICAgICAgfVxuICAgICAgXSxcbiAgICAgIFwiY2xhc3NcIjogXCJlcXVpcG1lbnRcIixcbiAgICAgIFwidW5pdFwiOiBcImhcIixcbiAgICAgIFwibWF0ZXJpYWxcIjogXCJGUiA2MDgwIEZIXCJcbiAgICB9LFxuICAgIHtcbiAgICAgIFwicmVxdWlyZXNcIjogW1xuICAgICAgICB7XG4gICAgICAgICAgXCJ1bml0XCI6IFwiW2dhbF91c10vaFwiLFxuICAgICAgICAgIFwiYW1vdW50XCI6IDEzLjIsXG4gICAgICAgICAgXCJtYXRlcmlhbFwiOiBcIkVxdWlwbWVudCBGdWVsXCJcbiAgICAgICAgfSxcbiAgICAgICAge1xuICAgICAgICAgIFwidW5pdFwiOiBcImgvaFwiLFxuICAgICAgICAgIFwiYW1vdW50XCI6IDEsXG4gICAgICAgICAgXCJtYXRlcmlhbFwiOiBcIkxhYm9yLS1MYXJnZSB0cmFjdG9yXCJcbiAgICAgICAgfVxuICAgICAgXSxcbiAgICAgIFwiY2xhc3NcIjogXCJlcXVpcG1lbnRcIixcbiAgICAgIFwidW5pdFwiOiBcImhcIixcbiAgICAgIFwibWF0ZXJpYWxcIjogXCJMYXJnZSB0cmFjdG9yXCJcbiAgICB9LFxuICAgIHtcbiAgICAgIFwicmVxdWlyZXNcIjogW1xuICAgICAgICB7XG4gICAgICAgICAgXCJ1bml0XCI6IFwiW2dhbF91c10vaFwiLFxuICAgICAgICAgIFwiYW1vdW50XCI6IDMuOTYsXG4gICAgICAgICAgXCJtYXRlcmlhbFwiOiBcIkVxdWlwbWVudCBGdWVsXCJcbiAgICAgICAgfSxcbiAgICAgICAge1xuICAgICAgICAgIFwidW5pdFwiOiBcImgvaFwiLFxuICAgICAgICAgIFwiYW1vdW50XCI6IDEsXG4gICAgICAgICAgXCJtYXRlcmlhbFwiOiBcIkxhYm9yLS1NaWQtc2l6ZSB0cmFjdG9yXCJcbiAgICAgICAgfVxuICAgICAgXSxcbiAgICAgIFwiY2xhc3NcIjogXCJlcXVpcG1lbnRcIixcbiAgICAgIFwidW5pdFwiOiBcImhcIixcbiAgICAgIFwibWF0ZXJpYWxcIjogXCJNaWQtc2l6ZSB0cmFjdG9yXCJcbiAgICB9LFxuICAgIHtcbiAgICAgIFwicmVxdWlyZXNcIjogW1xuICAgICAgICB7XG4gICAgICAgICAgXCJ1bml0XCI6IFwiW2dhbF91c10vaFwiLFxuICAgICAgICAgIFwiYW1vdW50XCI6IDYuNSxcbiAgICAgICAgICBcIm1hdGVyaWFsXCI6IFwiRXF1aXBtZW50IEZ1ZWxcIlxuICAgICAgICB9LFxuICAgICAgICB7XG4gICAgICAgICAgXCJ1bml0XCI6IFwiaC9oXCIsXG4gICAgICAgICAgXCJhbW91bnRcIjogMSxcbiAgICAgICAgICBcIm1hdGVyaWFsXCI6IFwiTGFib3ItLVNlbWktdHJhY3RvciB0cmFpbGVyXCJcbiAgICAgICAgfVxuICAgICAgXSxcbiAgICAgIFwiY2xhc3NcIjogXCJlcXVpcG1lbnRcIixcbiAgICAgIFwidW5pdFwiOiBcImhcIixcbiAgICAgIFwibWF0ZXJpYWxcIjogXCJTZW1pLXRyYWN0b3IgdHJhaWxlclwiXG4gICAgfSxcbiAgICB7XG4gICAgICBcInJlcXVpcmVzXCI6IFtcbiAgICAgICAge1xuICAgICAgICAgIFwidW5pdFwiOiBcIltnYWxfdXNdL2hcIixcbiAgICAgICAgICBcImFtb3VudFwiOiAxLjk4LFxuICAgICAgICAgIFwibWF0ZXJpYWxcIjogXCJFcXVpcG1lbnQgRnVlbFwiXG4gICAgICAgIH0sXG4gICAgICAgIHtcbiAgICAgICAgICBcInVuaXRcIjogXCJoL2hcIixcbiAgICAgICAgICBcImFtb3VudFwiOiAxLFxuICAgICAgICAgIFwibWF0ZXJpYWxcIjogXCJMYWJvci0tU21hbGwgdHJhY3RvclwiXG4gICAgICAgIH1cbiAgICAgIF0sXG4gICAgICBcImNsYXNzXCI6IFwiZXF1aXBtZW50XCIsXG4gICAgICBcInVuaXRcIjogXCJoXCIsXG4gICAgICBcIm1hdGVyaWFsXCI6IFwiU21hbGwgdHJhY3RvclwiXG4gICAgfSxcbiAgICB7XG4gICAgICBcInJlcXVpcmVzXCI6IFtcbiAgICAgICAge1xuICAgICAgICAgIFwidW5pdFwiOiBcIltnYWxfdXNdL2hcIixcbiAgICAgICAgICBcImFtb3VudFwiOiAxLjc2LFxuICAgICAgICAgIFwibWF0ZXJpYWxcIjogXCJFcXVpcG1lbnQgRnVlbFwiXG4gICAgICAgIH0sXG4gICAgICAgIHtcbiAgICAgICAgICBcInVuaXRcIjogXCJoL2hcIixcbiAgICAgICAgICBcImFtb3VudFwiOiAxLFxuICAgICAgICAgIFwibWF0ZXJpYWxcIjogXCJMYWJvci0tU3VwcG9ydCBUcnVja1wiXG4gICAgICAgIH1cbiAgICAgIF0sXG4gICAgICBcImNsYXNzXCI6IFwiZXF1aXBtZW50XCIsXG4gICAgICBcInVuaXRcIjogXCJoXCIsXG4gICAgICBcIm1hdGVyaWFsXCI6IFwiU3VwcG9ydCBUcnVja1wiXG4gICAgfSxcbiAgICB7XG4gICAgICBcInJlcXVpcmVzXCI6IFtcbiAgICAgICAge1xuICAgICAgICAgIFwidW5pdFwiOiBcIltnYWxfdXNdL2hcIixcbiAgICAgICAgICBcImFtb3VudFwiOiAxMy4yLFxuICAgICAgICAgIFwibWF0ZXJpYWxcIjogXCJFcXVpcG1lbnQgRnVlbFwiXG4gICAgICAgIH0sXG4gICAgICAgIHtcbiAgICAgICAgICBcInVuaXRcIjogXCJoL2hcIixcbiAgICAgICAgICBcImFtb3VudFwiOiAxLFxuICAgICAgICAgIFwibWF0ZXJpYWxcIjogXCJMYWJvci0tVGFuZGVtIGF4bGUgdHJ1Y2tcIlxuICAgICAgICB9XG4gICAgICBdLFxuICAgICAgXCJjbGFzc1wiOiBcImVxdWlwbWVudFwiLFxuICAgICAgXCJ1bml0XCI6IFwiaFwiLFxuICAgICAgXCJtYXRlcmlhbFwiOiBcIlRhbmRlbSBheGxlIHRydWNrXCJcbiAgICB9LFxuICAgIHtcbiAgICAgIFwicmVxdWlyZXNcIjogW1xuICAgICAgICB7XG4gICAgICAgICAgXCJ1bml0XCI6IFwiW2dhbF91c10vaFwiLFxuICAgICAgICAgIFwiYW1vdW50XCI6IDMuOTYsXG4gICAgICAgICAgXCJtYXRlcmlhbFwiOiBcIkVxdWlwbWVudCBGdWVsXCJcbiAgICAgICAgfSxcbiAgICAgICAge1xuICAgICAgICAgIFwidW5pdFwiOiBcImgvaFwiLFxuICAgICAgICAgIFwiYW1vdW50XCI6IDEsXG4gICAgICAgICAgXCJtYXRlcmlhbFwiOiBcIkxhYm9yLS1UcmFjdG9yIGFuZCBzcHJheWVyXCJcbiAgICAgICAgfVxuICAgICAgXSxcbiAgICAgIFwiY2xhc3NcIjogXCJlcXVpcG1lbnRcIixcbiAgICAgIFwidW5pdFwiOiBcImhcIixcbiAgICAgIFwibWF0ZXJpYWxcIjogXCJUcmFjdG9yIGFuZCBzcHJheWVyXCJcbiAgICB9LFxuICAgIHtcbiAgICAgIFwiY2xhc3NcIjogXCJsYWJvclwiLFxuICAgICAgXCJ1bml0XCI6IFwiaFwiLFxuICAgICAgXCJtYXRlcmlhbFwiOiBcIkxhYm9yLS0zLVdoZWVsIGFnIHNwcmF5ZXJcIlxuICAgIH0sXG4gICAge1xuICAgICAgXCJjbGFzc1wiOiBcImxhYm9yXCIsXG4gICAgICBcInVuaXRcIjogXCJoXCIsXG4gICAgICBcIm1hdGVyaWFsXCI6IFwiTGFib3ItLUNoYWxsZW5nZXIgdHJhY3RvclwiXG4gICAgfSxcbiAgICB7XG4gICAgICBcImNsYXNzXCI6IFwibGFib3JcIixcbiAgICAgIFwidW5pdFwiOiBcImhcIixcbiAgICAgIFwibWF0ZXJpYWxcIjogXCJMYWJvci0tQ29vbGVyL3ZhblwiXG4gICAgfSxcbiAgICB7XG4gICAgICBcImNsYXNzXCI6IFwibGFib3JcIixcbiAgICAgIFwidW5pdFwiOiBcImhcIixcbiAgICAgIFwibWF0ZXJpYWxcIjogXCJMYWJvci0tRlIgNjA4MCBGSFwiXG4gICAgfSxcbiAgICB7XG4gICAgICBcImNsYXNzXCI6IFwibGFib3JcIixcbiAgICAgIFwidW5pdFwiOiBcImhcIixcbiAgICAgIFwibWF0ZXJpYWxcIjogXCJMYWJvcmVyXCJcbiAgICB9LFxuICAgIHtcbiAgICAgIFwiY2xhc3NcIjogXCJsYWJvclwiLFxuICAgICAgXCJ1bml0XCI6IFwiaFwiLFxuICAgICAgXCJtYXRlcmlhbFwiOiBcIkxhYm9yLS1MYXJnZSB0cmFjdG9yXCJcbiAgICB9LFxuICAgIHtcbiAgICAgIFwiY2xhc3NcIjogXCJsYWJvclwiLFxuICAgICAgXCJ1bml0XCI6IFwiaFwiLFxuICAgICAgXCJtYXRlcmlhbFwiOiBcIkxhYm9yLS1NaWQtc2l6ZSB0cmFjdG9yXCJcbiAgICB9LFxuICAgIHtcbiAgICAgIFwiY2xhc3NcIjogXCJsYWJvclwiLFxuICAgICAgXCJ1bml0XCI6IFwiaFwiLFxuICAgICAgXCJtYXRlcmlhbFwiOiBcIkxhYm9yLS1TZW1pLXRyYWN0b3IgdHJhaWxlclwiXG4gICAgfSxcbiAgICB7XG4gICAgICBcImNsYXNzXCI6IFwibGFib3JcIixcbiAgICAgIFwidW5pdFwiOiBcImhcIixcbiAgICAgIFwibWF0ZXJpYWxcIjogXCJMYWJvci0tU21hbGwgdHJhY3RvclwiXG4gICAgfSxcbiAgICB7XG4gICAgICBcImNsYXNzXCI6IFwibGFib3JcIixcbiAgICAgIFwidW5pdFwiOiBcImhcIixcbiAgICAgIFwibWF0ZXJpYWxcIjogXCJMYWJvci0tU3VwZXJ2aXNvclwiXG4gICAgfSxcbiAgICB7XG4gICAgICBcImNsYXNzXCI6IFwibGFib3JcIixcbiAgICAgIFwidW5pdFwiOiBcImhcIixcbiAgICAgIFwibWF0ZXJpYWxcIjogXCJMYWJvci0tU3VwcG9ydCBUcnVja1wiXG4gICAgfSxcbiAgICB7XG4gICAgICBcImNsYXNzXCI6IFwibGFib3JcIixcbiAgICAgIFwidW5pdFwiOiBcImhcIixcbiAgICAgIFwibWF0ZXJpYWxcIjogXCJMYWJvci0tVGFuZGVtIGF4bGUgdHJ1Y2tcIlxuICAgIH0sXG4gICAge1xuICAgICAgXCJjbGFzc1wiOiBcImxhYm9yXCIsXG4gICAgICBcInVuaXRcIjogXCJoXCIsXG4gICAgICBcIm1hdGVyaWFsXCI6IFwiTGFib3ItLVRyYWN0b3IgYW5kIFNwcmF5ZXJcIlxuICAgIH0sXG4gICAge1xuICAgICAgXCJyZXF1aXJlc1wiOiBbXG4gICAgICAgIHtcbiAgICAgICAgICBcInVuaXRcIjogXCJoLygxMDAuW2Fjcl91c10pXCIsXG4gICAgICAgICAgXCJhbW91bnRcIjogMTkyLFxuICAgICAgICAgIFwibWF0ZXJpYWxcIjogXCJMYWJvcmVyXCJcbiAgICAgICAgfVxuICAgICAgXSxcbiAgICAgIFwiY2xhc3NcIjogXCJsYWJvclwiLFxuICAgICAgXCJ1bml0XCI6IFwiMTAwLlthY3JfdXNdXCIsXG4gICAgICBcIm1hdGVyaWFsXCI6IFwiaG9laW5nXCJcbiAgICB9LFxuICAgIHtcbiAgICAgIFwicmVxdWlyZXNcIjogW1xuICAgICAgICB7XG4gICAgICAgICAgXCJ1bml0XCI6IFwiW3F0X3VzXS8oMTAwLlthY3JfdXNdKVwiLFxuICAgICAgICAgIFwiYW1vdW50XCI6IDIwMCxcbiAgICAgICAgICBcIm1hdGVyaWFsXCI6IFwiR2x5cGhvc2F0ZVwiXG4gICAgICAgIH0sXG4gICAgICAgIHtcbiAgICAgICAgICBcInVuaXRcIjogXCJoLygxMDAuW2Fjcl91c10pXCIsXG4gICAgICAgICAgXCJhbW91bnRcIjogOTYsXG4gICAgICAgICAgXCJtYXRlcmlhbFwiOiBcIkxhYm9yZXJcIlxuICAgICAgICB9XG4gICAgICBdLFxuICAgICAgXCJjbGFzc1wiOiBcImxhYm9yXCIsXG4gICAgICBcInVuaXRcIjogXCJoXCIsXG4gICAgICBcIm1hdGVyaWFsXCI6IFwiaGVyYmljaWRlIC0gbWFudWFsXCJcbiAgICB9LFxuICAgIHtcbiAgICAgIFwiZGVzY3JpcHRpb25cIjogXCJPZmYgUm9hZCBEaWVzZWxcIixcbiAgICAgIFwiY2xhc3NcIjogXCJmdWVsXCIsXG4gICAgICBcInVuaXRcIjogXCJnYWxcIixcbiAgICAgIFwibWF0ZXJpYWxcIjogXCJFcXVpcG1lbnQgRnVlbFwiXG4gICAgfSxcbiAgICB7XG4gICAgICBcImNsYXNzXCI6IFwiZmVydGlsaXplclwiLFxuICAgICAgXCJ1bml0XCI6IFwiW3F0X3VzXVwiLFxuICAgICAgXCJtYXRlcmlhbFwiOiBcIjIsNC1EXCJcbiAgICB9LFxuICAgIHtcbiAgICAgIFwiY2xhc3NcIjogXCJwZXN0aWNpZGVcIixcbiAgICAgIFwidW5pdFwiOiBcIltxdF91c11cIixcbiAgICAgIFwibWF0ZXJpYWxcIjogXCJDb3JhZ2VuXCJcbiAgICB9LFxuICAgIHtcbiAgICAgIFwiY2xhc3NcIjogXCJwZXN0aWNpZGVcIixcbiAgICAgIFwidW5pdFwiOiBcIltxdF91c11cIixcbiAgICAgIFwibWF0ZXJpYWxcIjogXCJEaW1pbGluXCJcbiAgICB9LFxuICAgIHtcbiAgICAgIFwiY2xhc3NcIjogXCJwZXN0aWNpZGVcIixcbiAgICAgIFwidW5pdFwiOiBcIltxdF91c11cIixcbiAgICAgIFwibWF0ZXJpYWxcIjogXCJGdXNpbGFkZVwiXG4gICAgfSxcbiAgICB7XG4gICAgICBcImNsYXNzXCI6IFwicGVzdGljaWRlXCIsXG4gICAgICBcInVuaXRcIjogXCJbcXRfdXNdXCIsXG4gICAgICBcIm1hdGVyaWFsXCI6IFwiR2x5cGhvc2F0ZVwiXG4gICAgfSxcbiAgICB7XG4gICAgICBcImNsYXNzXCI6IFwicGVzdGljaWRlXCIsXG4gICAgICBcInVuaXRcIjogXCJbcXRfdXNdXCIsXG4gICAgICBcIm1hdGVyaWFsXCI6IFwiR29hbCAyWExcIlxuICAgIH0sXG4gICAge1xuICAgICAgXCJjbGFzc1wiOiBcInBlc3RpY2lkZVwiLFxuICAgICAgXCJ1bml0XCI6IFwiW3F0X3VzXVwiLFxuICAgICAgXCJtYXRlcmlhbFwiOiBcIkltaWRhY2xvcHJpZDVcIlxuICAgIH0sXG4gICAge1xuICAgICAgXCJjbGFzc1wiOiBcInBlc3RpY2lkZVwiLFxuICAgICAgXCJ1bml0XCI6IFwiW3F0X3VzXVwiLFxuICAgICAgXCJtYXRlcmlhbFwiOiBcIk91c3RcIlxuICAgIH0sXG4gICAge1xuICAgICAgXCJkZXNjcmlwdGlvblwiOiBcInJvZGVudGljaWRlXCIsXG4gICAgICBcImNsYXNzXCI6IFwiW3F0X3VzXVwiLFxuICAgICAgXCJ1bml0XCI6IFwicGVzdGljaWRlXCIsXG4gICAgICBcIm1hdGVyaWFsXCI6IFwiUm96b2xcIlxuICAgIH0sXG4gICAge1xuICAgICAgXCJjbGFzc1wiOiBcInBlc3RpY2lkZVwiLFxuICAgICAgXCJ1bml0XCI6IFwiW3F0X3VzXVwiLFxuICAgICAgXCJtYXRlcmlhbFwiOiBcIlN1cmVndWFyZFwiXG4gICAgfSxcbiAgICB7XG4gICAgICBcImNsYXNzXCI6IFwicGVzdGljaWRlXCIsXG4gICAgICBcInVuaXRcIjogXCJbcXRfdXNdXCIsXG4gICAgICBcIm1hdGVyaWFsXCI6IFwiVHJhbnNsaW5lXCJcbiAgICB9LFxuICAgIHtcbiAgICAgIFwiY2xhc3NcIjogXCJwZXN0aWNpZGVcIixcbiAgICAgIFwidW5pdFwiOiBcIltxdF91c11cIixcbiAgICAgIFwibWF0ZXJpYWxcIjogXCJUcmlmbHVyYWxpblwiXG4gICAgfSxcbiAgICB7XG4gICAgICBcImRlc2NyaXB0aW9uXCI6IFwiUG9wbGFyIGN1dHRpbmcgZm9yIHBsYW50aW5nXCIsXG4gICAgICBcImNsYXNzXCI6IFwic2VlZFwiLFxuICAgICAgXCJ1bml0XCI6IFwiMVwiLFxuICAgICAgXCJtYXRlcmlhbFwiOiBcIlBvcGxhciBDdXR0aW5nXCJcbiAgICB9LFxuICAgIHtcbiAgICAgIFwiY2xhc3NcIjogXCJ3YXRlclwiLFxuICAgICAgXCJ1bml0XCI6IFwiYWNyX3VzXS5baW5fdXNdXCIsXG4gICAgICBcIm1hdGVyaWFsXCI6IFwiSXJyaWdhdGlvblwiXG4gICAgfVxuICBdLFxuICBcImZhcm1cIjogW1xuICAgIHtcbiAgICAgIFwic2NoZWR1bGVcIjogW1xuICAgICAgICB7XG4gICAgICAgICAgXCJvcGVyYXRpb25cIjogXCJzaXRlIHByZXBcIixcbiAgICAgICAgICBcImR1cmF0aW9uXCI6IFwiMyBtb25zXCIsXG4gICAgICAgICAgXCJzdGFydFwiOiBcIjIwMTUtMDYtMDFcIlxuICAgICAgICB9LFxuICAgICAgICB7XG4gICAgICAgICAgXCJvcGVyYXRpb25cIjogXCJwbGFudGluZ1wiLFxuICAgICAgICAgIFwiZHVyYXRpb25cIjogXCIxIG1vblwiLFxuICAgICAgICAgIFwic3RhcnRcIjogXCIyMDE1LTEwLTAxXCJcbiAgICAgICAgfSxcbiAgICAgICAge1xuICAgICAgICAgIFwib3BlcmF0aW9uXCI6IFwiY3JvcCBjYXJlIC0geXIwXCIsXG4gICAgICAgICAgXCJkdXJhdGlvblwiOiBcIjEgeWVhclwiLFxuICAgICAgICAgIFwic3RhcnRcIjogXCIyMDE1LTExLTAxXCJcbiAgICAgICAgfSxcbiAgICAgICAge1xuICAgICAgICAgIFwib3BlcmF0aW9uXCI6IFwiY3JvcCBjYXJlIC0geXIxXCIsXG4gICAgICAgICAgXCJkdXJhdGlvblwiOiBcIjEgeWVhclwiLFxuICAgICAgICAgIFwic3RhcnRcIjogXCIyMDE2LTExLTAxXCJcbiAgICAgICAgfSxcbiAgICAgICAge1xuICAgICAgICAgIFwidW5pdFwiOiBcIltzdG9uX3VzXS9bYWNyX3VzXVwiLFxuICAgICAgICAgIFwieWllbGRcIjogOSxcbiAgICAgICAgICBcIm9wZXJhdGlvblwiOiBcImhhcnZlc3QgLSB5cjJcIixcbiAgICAgICAgICBcImR1cmF0aW9uXCI6IFwiMSBtb25cIixcbiAgICAgICAgICBcInN0YXJ0XCI6IFwiMjAxNy0xMC0wMVwiXG4gICAgICAgIH0sXG4gICAgICAgIHtcbiAgICAgICAgICBcIm9wZXJhdGlvblwiOiBcImNyb3AgY2FyZSAtIHBvc3QgaGFydmVzdFwiLFxuICAgICAgICAgIFwiZHVyYXRpb25cIjogXCIxIHllYXJcIixcbiAgICAgICAgICBcInN0YXJ0XCI6IFwiMjAxNy0xMS0wMVwiXG4gICAgICAgIH0sXG4gICAgICAgIHtcbiAgICAgICAgICBcIm9wZXJhdGlvblwiOiBcImNyb3AgY2FyZSAtIGVzdGFibGlzaGVkXCIsXG4gICAgICAgICAgXCJkdXJhdGlvblwiOiBcIjEgeWVhclwiLFxuICAgICAgICAgIFwic3RhcnRcIjogXCIyMDE4LTExLTAxXCJcbiAgICAgICAgfSxcbiAgICAgICAge1xuICAgICAgICAgIFwib3BlcmF0aW9uXCI6IFwiY3JvcCBjYXJlIC0gZXN0YWJsaXNoZWRcIixcbiAgICAgICAgICBcImR1cmF0aW9uXCI6IFwiMSB5ZWFyXCIsXG4gICAgICAgICAgXCJzdGFydFwiOiBcIjIwMTktMTEtMDFcIlxuICAgICAgICB9LFxuICAgICAgICB7XG4gICAgICAgICAgXCJ1bml0XCI6IFwiW3N0b25fdXNdL1thY3JfdXNdXCIsXG4gICAgICAgICAgXCJ5aWVsZFwiOiAyNy41LFxuICAgICAgICAgIFwib3BlcmF0aW9uXCI6IFwiaGFydmVzdCAtIGVzdGFibGlzaGVkXCIsXG4gICAgICAgICAgXCJkdXJhdGlvblwiOiBcIjEgbW9uXCIsXG4gICAgICAgICAgXCJzdGFydFwiOiBcIjIwMjAtMTAtMDFcIlxuICAgICAgICB9LFxuICAgICAgICB7XG4gICAgICAgICAgXCJvcGVyYXRpb25cIjogXCJjcm9wIGNhcmUgLSBwb3N0IGhhcnZlc3RcIixcbiAgICAgICAgICBcImR1cmF0aW9uXCI6IFwiMSB5ZWFyXCIsXG4gICAgICAgICAgXCJzdGFydFwiOiBcIjIwMjEtMTEtMDFcIlxuICAgICAgICB9LFxuICAgICAgICB7XG4gICAgICAgICAgXCJvcGVyYXRpb25cIjogXCJjcm9wIGNhcmUgLSBlc3RhYmxpc2hlZFwiLFxuICAgICAgICAgIFwiZHVyYXRpb25cIjogXCIxIHllYXJcIixcbiAgICAgICAgICBcInN0YXJ0XCI6IFwiMjAyMi0xMS0wMVwiXG4gICAgICAgIH0sXG4gICAgICAgIHtcbiAgICAgICAgICBcIm9wZXJhdGlvblwiOiBcImNyb3AgY2FyZSAtIGVzdGFibGlzaGVkXCIsXG4gICAgICAgICAgXCJkdXJhdGlvblwiOiBcIjEgeWVhclwiLFxuICAgICAgICAgIFwic3RhcnRcIjogXCIyMDIzLTExLTAxXCJcbiAgICAgICAgfSxcbiAgICAgICAge1xuICAgICAgICAgIFwidW5pdFwiOiBcIltzdG9uX3VzXS9bYWNyX3VzXVwiLFxuICAgICAgICAgIFwieWllbGRcIjogMjcuNSxcbiAgICAgICAgICBcIm9wZXJhdGlvblwiOiBcImhhcnZlc3QgLSBlc3RhYmxpc2hlZFwiLFxuICAgICAgICAgIFwiZHVyYXRpb25cIjogXCIxIG1vblwiLFxuICAgICAgICAgIFwic3RhcnRcIjogXCIyMDIzLTEwLTAxXCJcbiAgICAgICAgfSxcbiAgICAgICAge1xuICAgICAgICAgIFwib3BlcmF0aW9uXCI6IFwiY3JvcCBjYXJlIC0gcG9zdCBoYXJ2ZXN0XCIsXG4gICAgICAgICAgXCJkdXJhdGlvblwiOiBcIjEgeWVhclwiLFxuICAgICAgICAgIFwic3RhcnRcIjogXCIyMDI1LTExLTAxXCJcbiAgICAgICAgfSxcbiAgICAgICAge1xuICAgICAgICAgIFwib3BlcmF0aW9uXCI6IFwiY3JvcCBjYXJlIC0gZXN0YWJsaXNoZWRcIixcbiAgICAgICAgICBcImR1cmF0aW9uXCI6IFwiMSB5ZWFyXCIsXG4gICAgICAgICAgXCJzdGFydFwiOiBcIjIwMjYtMTEtMDFcIlxuICAgICAgICB9LFxuICAgICAgICB7XG4gICAgICAgICAgXCJvcGVyYXRpb25cIjogXCJjcm9wIGNhcmUgLSBlc3RhYmxpc2hlZFwiLFxuICAgICAgICAgIFwiZHVyYXRpb25cIjogXCIxIHllYXJcIixcbiAgICAgICAgICBcInN0YXJ0XCI6IFwiMjAyNy0xMS0wMVwiXG4gICAgICAgIH0sXG4gICAgICAgIHtcbiAgICAgICAgICBcInVuaXRcIjogXCJbc3Rvbl91c10vW2Fjcl91c11cIixcbiAgICAgICAgICBcInlpZWxkXCI6IDI3LjUsXG4gICAgICAgICAgXCJvcGVyYXRpb25cIjogXCJoYXJ2ZXN0IC0gZXN0YWJsaXNoZWRcIixcbiAgICAgICAgICBcImR1cmF0aW9uXCI6IFwiMSBtb25cIixcbiAgICAgICAgICBcInN0YXJ0XCI6IFwiMjAyOC0xMC0wMVwiXG4gICAgICAgIH0sXG4gICAgICAgIHtcbiAgICAgICAgICBcIm9wZXJhdGlvblwiOiBcImNyb3AgY2FyZSAtIHBvc3QgaGFydmVzdFwiLFxuICAgICAgICAgIFwiZHVyYXRpb25cIjogXCIxIHllYXJcIixcbiAgICAgICAgICBcInN0YXJ0XCI6IFwiMjAyOS0xMS0wMVwiXG4gICAgICAgIH0sXG4gICAgICAgIHtcbiAgICAgICAgICBcIm9wZXJhdGlvblwiOiBcImNyb3AgY2FyZSAtIGVzdGFibGlzaGVkXCIsXG4gICAgICAgICAgXCJkdXJhdGlvblwiOiBcIjEgeWVhclwiLFxuICAgICAgICAgIFwic3RhcnRcIjogXCIyMDMwLTExLTAxXCJcbiAgICAgICAgfSxcbiAgICAgICAge1xuICAgICAgICAgIFwib3BlcmF0aW9uXCI6IFwiY3JvcCBjYXJlIC0gZXN0YWJsaXNoZWRcIixcbiAgICAgICAgICBcImR1cmF0aW9uXCI6IFwiMSB5ZWFyXCIsXG4gICAgICAgICAgXCJzdGFydFwiOiBcIjIwMzEtMTEtMDFcIlxuICAgICAgICB9LFxuICAgICAgICB7XG4gICAgICAgICAgXCJ1bml0XCI6IFwiW3N0b25fdXNdL1thY3JfdXNdXCIsXG4gICAgICAgICAgXCJ5aWVsZFwiOiAyNy41LFxuICAgICAgICAgIFwib3BlcmF0aW9uXCI6IFwiaGFydmVzdCAtIGVzdGFibGlzaGVkXCIsXG4gICAgICAgICAgXCJkdXJhdGlvblwiOiBcIjEgbW9uXCIsXG4gICAgICAgICAgXCJzdGFydFwiOiBcIjIwMzItMTAtMDFcIlxuICAgICAgICB9LFxuICAgICAgICB7XG4gICAgICAgICAgXCJvcGVyYXRpb25cIjogXCJyZXN0b3JhdGlvblwiLFxuICAgICAgICAgIFwiZHVyYXRpb25cIjogXCIzIG1vbnNcIixcbiAgICAgICAgICBcInN0YXJ0XCI6IFwiMjAzMi0xMS0wMVwiXG4gICAgICAgIH1cbiAgICAgIF0sXG4gICAgICBcIm9wZXJhdGlvbnNcIjogW1xuICAgICAgICB7XG4gICAgICAgICAgXCJtYXRlcmlhbHNcIjogW1xuICAgICAgICAgICAge1xuICAgICAgICAgICAgICBcInVuaXRcIjogXCJbYWNyX3VzXVwiLFxuICAgICAgICAgICAgICBcImFtb3VudFwiOiAxNTAsXG4gICAgICAgICAgICAgIFwibWF0ZXJpYWxcIjogXCJob2VpbmdcIlxuICAgICAgICAgICAgfSxcbiAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgXCJ1bml0XCI6IFwiW2Fjcl91c11cIixcbiAgICAgICAgICAgICAgXCJhbW91bnRcIjogMTAwLFxuICAgICAgICAgICAgICBcIm1hdGVyaWFsXCI6IFwiaGVyYmljaWRlIC0gbWFudWFsXCJcbiAgICAgICAgICAgIH1cbiAgICAgICAgICBdLFxuICAgICAgICAgIFwib3BlcmF0aW9uXCI6IFwiY3JvcCBjYXJlIC0gZXN0YWJsaXNoZWRcIlxuICAgICAgICB9LFxuICAgICAgICB7XG4gICAgICAgICAgXCJtYXRlcmlhbHNcIjogW1xuICAgICAgICAgICAge1xuICAgICAgICAgICAgICBcIm5vdGVcIjogXCJUcmFuc3BvcnQgTnVyc2VyeSB0byBmaWVsZFwiLFxuICAgICAgICAgICAgICBcInVuaXRcIjogXCJoXCIsXG4gICAgICAgICAgICAgIFwiYW1vdW50XCI6IDIwLFxuICAgICAgICAgICAgICBcIm1hdGVyaWFsXCI6IFwiU2VtaS10cmFjdG9yIHRyYWlsZXJcIlxuICAgICAgICAgICAgfSxcbiAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgXCJ1bml0XCI6IFwiZWFjaFwiLFxuICAgICAgICAgICAgICBcImFtb3VudFwiOiAxNDUwMDAsXG4gICAgICAgICAgICAgIFwibWF0ZXJpYWxcIjogXCJQb3BsYXIgQ3V0dGluZ1wiXG4gICAgICAgICAgICB9LFxuICAgICAgICAgICAge1xuICAgICAgICAgICAgICBcInVuaXRcIjogXCJoXCIsXG4gICAgICAgICAgICAgIFwiYW1vdW50XCI6IDEwODAsXG4gICAgICAgICAgICAgIFwibWF0ZXJpYWxcIjogXCJDb29sZXIvdmFuXCJcbiAgICAgICAgICAgIH0sXG4gICAgICAgICAgICB7XG4gICAgICAgICAgICAgIFwidW5pdFwiOiBcImhcIixcbiAgICAgICAgICAgICAgXCJhbW91bnRcIjogNDgwLFxuICAgICAgICAgICAgICBcIm1hdGVyaWFsXCI6IFwiTGFib3JlclwiXG4gICAgICAgICAgICB9XG4gICAgICAgICAgXSxcbiAgICAgICAgICBcIm9wZXJhdGlvblwiOiBcInBsYW50aW5nXCJcbiAgICAgICAgfSxcbiAgICAgICAge1xuICAgICAgICAgIFwibWF0ZXJpYWxzXCI6IFtcbiAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgXCJ1bml0XCI6IFwiW2Fjcl91c11cIixcbiAgICAgICAgICAgICAgXCJhbW91bnRcIjogMjUsXG4gICAgICAgICAgICAgIFwibWF0ZXJpYWxcIjogXCJoZXJiaWNpZGUgLSBtYW51YWxcIlxuICAgICAgICAgICAgfSxcbiAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgXCJub3RlXCI6IFwiMiB0aW1lcyBvdmVyIDcwIGFjcmVzIGVhY2guXCIsXG4gICAgICAgICAgICAgIFwidW5pdFwiOiBcIlthY3JfdXNdXCIsXG4gICAgICAgICAgICAgIFwiYW1vdW50XCI6IDE0MCxcbiAgICAgICAgICAgICAgXCJtYXRlcmlhbFwiOiBcImhvZWluZ1wiXG4gICAgICAgICAgICB9XG4gICAgICAgICAgXSxcbiAgICAgICAgICBcIm9wZXJhdGlvblwiOiBcImNyb3AgY2FyZSAtIHlyMFwiXG4gICAgICAgIH0sXG4gICAgICAgIHtcbiAgICAgICAgICBcIm1hdGVyaWFsc1wiOiBbXG4gICAgICAgICAgICB7XG4gICAgICAgICAgICAgIFwidW5pdFwiOiBcImhcIixcbiAgICAgICAgICAgICAgXCJhbW91bnRcIjogMzUsXG4gICAgICAgICAgICAgIFwibWF0ZXJpYWxcIjogXCJGUiA2MDgwIEZIXCJcbiAgICAgICAgICAgIH0sXG4gICAgICAgICAgICB7XG4gICAgICAgICAgICAgIFwidW5pdFwiOiBcImhcIixcbiAgICAgICAgICAgICAgXCJhbW91bnRcIjogMTc1LFxuICAgICAgICAgICAgICBcIm1hdGVyaWFsXCI6IFwiVGFuZGVtIGF4bGUgdHJ1Y2tcIlxuICAgICAgICAgICAgfSxcbiAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgXCJ1bml0XCI6IFwiaFwiLFxuICAgICAgICAgICAgICBcImFtb3VudFwiOiAzNSxcbiAgICAgICAgICAgICAgXCJtYXRlcmlhbFwiOiBcIlN1cHBvcnQgVHJ1Y2tcIlxuICAgICAgICAgICAgfVxuICAgICAgICAgIF0sXG4gICAgICAgICAgXCJvcGVyYXRpb25cIjogXCJoYXJ2ZXN0IC0gZXN0YWJsaXNoZWRcIlxuICAgICAgICB9LFxuICAgICAgICB7XG4gICAgICAgICAgXCJtYXRlcmlhbHNcIjogW1xuICAgICAgICAgICAge1xuICAgICAgICAgICAgICBcIm5vdGVcIjogXCJUaWxsYWdlXCIsXG4gICAgICAgICAgICAgIFwidW5pdFwiOiBcImhcIixcbiAgICAgICAgICAgICAgXCJhbW91bnRcIjogNDgsXG4gICAgICAgICAgICAgIFwibWF0ZXJpYWxcIjogXCJTbWFsbCBUcmFjdG9yXCJcbiAgICAgICAgICAgIH0sXG4gICAgICAgICAgICB7XG4gICAgICAgICAgICAgIFwibm90ZVwiOiBcIjUgdGltZXNcIixcbiAgICAgICAgICAgICAgXCJ1bml0XCI6IFwiW2FyY191c11cIixcbiAgICAgICAgICAgICAgXCJhbW91bnRcIjogNTAwLFxuICAgICAgICAgICAgICBcIm1hdGVyaWFsXCI6IFwiaG9laW5nXCJcbiAgICAgICAgICAgIH0sXG4gICAgICAgICAgICB7XG4gICAgICAgICAgICAgIFwibm90ZVwiOiBcIjMgdGltZXMsIDEvMiBmaWVsZFwiLFxuICAgICAgICAgICAgICBcInVuaXRcIjogXCJbYXJjX3VzXVwiLFxuICAgICAgICAgICAgICBcImFtb3VudFwiOiAxNTAsXG4gICAgICAgICAgICAgIFwibWF0ZXJpYWxcIjogXCJoZXJiaWNpZGUgLSBtYW51YWxcIlxuICAgICAgICAgICAgfSxcbiAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgXCJub3RlXCI6IFwiSW50ZXJwbGFudGluZ1wiLFxuICAgICAgICAgICAgICBcInVuaXRcIjogXCJoXCIsXG4gICAgICAgICAgICAgIFwiYW1vdW50XCI6IDk2LFxuICAgICAgICAgICAgICBcIm1hdGVyaWFsXCI6IFwiTGFib3JlclwiXG4gICAgICAgICAgICB9XG4gICAgICAgICAgXSxcbiAgICAgICAgICBcIm9wZXJhdGlvblwiOiBcImNyb3AgY2FyZSAtIHlyMVwiXG4gICAgICAgIH0sXG4gICAgICAgIHtcbiAgICAgICAgICBcIm1hdGVyaWFsc1wiOiBbXG4gICAgICAgICAgICB7XG4gICAgICAgICAgICAgIFwibm90ZVwiOiBcImRpc2tpbmdcIixcbiAgICAgICAgICAgICAgXCJ1bml0XCI6IFwiaFwiLFxuICAgICAgICAgICAgICBcImFtb3VudFwiOiAxMixcbiAgICAgICAgICAgICAgXCJtYXRlcmlhbFwiOiBcIkxhcmdlIHRyYWN0b3JcIlxuICAgICAgICAgICAgfSxcbiAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgXCJub3RlXCI6IFwiaGVyYmljaWRlXCIsXG4gICAgICAgICAgICAgIFwidW5pdFwiOiBcImhcIixcbiAgICAgICAgICAgICAgXCJhbW91bnRcIjogMjAsXG4gICAgICAgICAgICAgIFwibWF0ZXJpYWxcIjogXCJUcmFjdG9yIGFuZCBzcHJheWVyXCJcbiAgICAgICAgICAgIH0sXG4gICAgICAgICAgICB7XG4gICAgICAgICAgICAgIFwibm90ZVwiOiBcImhlcmJpY2lkZVwiLFxuICAgICAgICAgICAgICBcInVuaXRcIjogXCJbcXRfdXNdXCIsXG4gICAgICAgICAgICAgIFwiYW1vdW50XCI6IDIwMCxcbiAgICAgICAgICAgICAgXCJtYXRlcmlhbFwiOiBcIkdseXBob3NhdGVcIlxuICAgICAgICAgICAgfSxcbiAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgXCJub3RlXCI6IFwiaGVyYmljaWRlXCIsXG4gICAgICAgICAgICAgIFwidW5pdFwiOiBcIltxdF91c11cIixcbiAgICAgICAgICAgICAgXCJhbW91bnRcIjogMjAwLFxuICAgICAgICAgICAgICBcIm1hdGVyaWFsXCI6IFwiMiw0LURcIlxuICAgICAgICAgICAgfVxuICAgICAgICAgIF0sXG4gICAgICAgICAgXCJvcGVyYXRpb25cIjogXCJyZXN0b3JhdGlvblwiXG4gICAgICAgIH0sXG4gICAgICAgIHtcbiAgICAgICAgICBcIm1hdGVyaWFsc1wiOiBbXG4gICAgICAgICAgICB7XG4gICAgICAgICAgICAgIFwibm90ZVwiOiBcIlBvc3QgaGFydmVzdCBjbGVhbiB1cFwiLFxuICAgICAgICAgICAgICBcInVuaXRcIjogXCJoXCIsXG4gICAgICAgICAgICAgIFwiYW1vdW50XCI6IDMwLFxuICAgICAgICAgICAgICBcIm1hdGVyaWFsXCI6IFwiTWlkLXNpemUgdHJhY3RvclwiXG4gICAgICAgICAgICB9LFxuICAgICAgICAgICAge1xuICAgICAgICAgICAgICBcIm5vdGVcIjogXCJEb3JtYW50IEhlcmJpY2lkZVwiLFxuICAgICAgICAgICAgICBcInVuaXRcIjogXCJoXCIsXG4gICAgICAgICAgICAgIFwiYW1vdW50XCI6IDgsXG4gICAgICAgICAgICAgIFwibWF0ZXJpYWxcIjogXCJUcmFjdG9yIGFuZCBzcHJheWVyXCJcbiAgICAgICAgICAgIH0sXG4gICAgICAgICAgICB7XG4gICAgICAgICAgICAgIFwibm90ZVwiOiBcIkRvcm1hbnQgSGVyYmljaWRlXCIsXG4gICAgICAgICAgICAgIFwidW5pdFwiOiBcIltxdF91c11cIixcbiAgICAgICAgICAgICAgXCJhbW91bnRcIjogMjAwLFxuICAgICAgICAgICAgICBcIm1hdGVyaWFsXCI6IFwiR2x5cGhvc2F0ZVwiXG4gICAgICAgICAgICB9LFxuICAgICAgICAgICAge1xuICAgICAgICAgICAgICBcIm5vdGVcIjogXCJEb3JtYW50IEhlcmJpY2lkZVwiLFxuICAgICAgICAgICAgICBcInVuaXRcIjogXCJbcXRfdXNdXCIsXG4gICAgICAgICAgICAgIFwiYW1vdW50XCI6IDIwMCxcbiAgICAgICAgICAgICAgXCJtYXRlcmlhbFwiOiBcIlRyaWZsdXJhbGluXCJcbiAgICAgICAgICAgIH0sXG4gICAgICAgICAgICB7XG4gICAgICAgICAgICAgIFwibm90ZVwiOiBcInBvc3QgZW1lcmdlbnRcIixcbiAgICAgICAgICAgICAgXCJ1bml0XCI6IFwiW2Fjcl91c11cIixcbiAgICAgICAgICAgICAgXCJhbW91bnRcIjogMTAwLFxuICAgICAgICAgICAgICBcIm1hdGVyaWFsXCI6IFwiaGVyYmljaWRlIC0gbWFudWFsXCJcbiAgICAgICAgICAgIH1cbiAgICAgICAgICBdLFxuICAgICAgICAgIFwib3BlcmF0aW9uXCI6IFwiY3JvcCBjYXJlIC0gcG9zdCBoYXJ2ZXN0XCJcbiAgICAgICAgfSxcbiAgICAgICAge1xuICAgICAgICAgIFwibWF0ZXJpYWxzXCI6IFtcbiAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgXCJub3RlXCI6IFwiXCIsXG4gICAgICAgICAgICAgIFwidW5pdFwiOiBcImhcIixcbiAgICAgICAgICAgICAgXCJhbW91bnRcIjogMjYsXG4gICAgICAgICAgICAgIFwibWF0ZXJpYWxcIjogXCJGUiA2MDgwIEZIXCJcbiAgICAgICAgICAgIH0sXG4gICAgICAgICAgICB7XG4gICAgICAgICAgICAgIFwidW5pdFwiOiBcImhcIixcbiAgICAgICAgICAgICAgXCJhbW91bnRcIjogMTA0LFxuICAgICAgICAgICAgICBcIm1hdGVyaWFsXCI6IFwiVGFuZG9tIGF4bGUgdHJ1Y2tcIlxuICAgICAgICAgICAgfSxcbiAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgXCJ1bml0XCI6IFwiaFwiLFxuICAgICAgICAgICAgICBcImFtb3VudFwiOiAyNixcbiAgICAgICAgICAgICAgXCJtYXRlcmlhbFwiOiBcIlN1cHBvcnQgdHJ1Y2tcIlxuICAgICAgICAgICAgfVxuICAgICAgICAgIF0sXG4gICAgICAgICAgXCJvcGVyYXRpb25cIjogXCJoYXJ2ZXN0IC0geXIxXCJcbiAgICAgICAgfSxcbiAgICAgICAge1xuICAgICAgICAgIFwibWF0ZXJpYWxzXCI6IFtcbiAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgXCJub3RlXCI6IFwiSW5pdGlhbCBTcHJheWluZ1wiLFxuICAgICAgICAgICAgICBcInVuaXRcIjogXCJoXCIsXG4gICAgICAgICAgICAgIFwiYW1vdW50XCI6IDMsXG4gICAgICAgICAgICAgIFwibWF0ZXJpYWxcIjogXCJUcmFjdG9yIGFuZCBzcHJheWVyXCJcbiAgICAgICAgICAgIH0sXG4gICAgICAgICAgICB7XG4gICAgICAgICAgICAgIFwibm90ZVwiOiBcIkluaXRpYWwgU3ByYXlpbmdcIixcbiAgICAgICAgICAgICAgXCJ1bml0XCI6IFwiW3F0X3VzXVwiLFxuICAgICAgICAgICAgICBcImFtb3VudFwiOiAxMDAsXG4gICAgICAgICAgICAgIFwibWF0ZXJpYWxcIjogXCJHbHlwaG9zYXRlXCJcbiAgICAgICAgICAgIH0sXG4gICAgICAgICAgICB7XG4gICAgICAgICAgICAgIFwibm90ZVwiOiBcIkluaXRpYWwgU3ByYXlpbmdcIixcbiAgICAgICAgICAgICAgXCJ1bml0XCI6IFwiW3F0X3VzXVwiLFxuICAgICAgICAgICAgICBcImFtb3VudFwiOiAxMjUsXG4gICAgICAgICAgICAgIFwibWF0ZXJpYWxcIjogXCJHb2FsIDJYTFwiXG4gICAgICAgICAgICB9LFxuICAgICAgICAgICAge1xuICAgICAgICAgICAgICBcIm5vdGVcIjogXCJJbml0aWFsIFRpbGxhZ2VcIixcbiAgICAgICAgICAgICAgXCJ1bml0XCI6IFwiaFwiLFxuICAgICAgICAgICAgICBcImFtb3VudFwiOiAyMCxcbiAgICAgICAgICAgICAgXCJtYXRlcmlhbFwiOiBcIkxhcmdlIHRyYWN0b3JcIlxuICAgICAgICAgICAgfSxcbiAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgXCJub3RlXCI6IFwiUmlwcGluZ1wiLFxuICAgICAgICAgICAgICBcInVuaXRcIjogXCJoXCIsXG4gICAgICAgICAgICAgIFwiYW1vdW50XCI6IDEwLFxuICAgICAgICAgICAgICBcIm1hdGVyaWFsXCI6IFwiTGFyZ2UgdHJhY3RvclwiXG4gICAgICAgICAgICB9LFxuICAgICAgICAgICAge1xuICAgICAgICAgICAgICBcIm5vdGVcIjogXCJSb3cgTWFya2luZ1wiLFxuICAgICAgICAgICAgICBcInVuaXRcIjogXCJoXCIsXG4gICAgICAgICAgICAgIFwiYW1vdW50XCI6IDI1LFxuICAgICAgICAgICAgICBcIm1hdGVyaWFsXCI6IFwiTGFyZ2UgdHJhY3RvclwiXG4gICAgICAgICAgICB9LFxuICAgICAgICAgICAge1xuICAgICAgICAgICAgICBcIm5vdGVcIjogXCJoZXJiaWNpZGUgLSBwcmVlbWVyZ2VudFwiLFxuICAgICAgICAgICAgICBcInVuaXRcIjogXCJoXCIsXG4gICAgICAgICAgICAgIFwiYW1vdW50XCI6IDI1LFxuICAgICAgICAgICAgICBcIm1hdGVyaWFsXCI6IFwiQ2hhbGxlbmdlciB0cmFjdG9yXCJcbiAgICAgICAgICAgIH0sXG4gICAgICAgICAgICB7XG4gICAgICAgICAgICAgIFwibm90ZVwiOiBcImhlcmJpY2lkZSAtIHByZWVtZXJnZW50XCIsXG4gICAgICAgICAgICAgIFwidW5pdFwiOiBcIltxdF91c11cIixcbiAgICAgICAgICAgICAgXCJhbW91bnRcIjogNTAsXG4gICAgICAgICAgICAgIFwibWF0ZXJpYWxcIjogXCJUcmlmbHVyYWxpblwiXG4gICAgICAgICAgICB9XG4gICAgICAgICAgXSxcbiAgICAgICAgICBcIm9wZXJhdGlvblwiOiBcInNpdGUgcHJlcFwiXG4gICAgICAgIH1cbiAgICAgIF0sXG4gICAgICBcInVuaXRcIjogXCJbYWNyX3VzXVwiLFxuICAgICAgXCJzaXplXCI6IFwiMTAwXCIsXG4gICAgICBcImNvbW1vZGl0eVwiOiBcIlBPUExBUlwiLFxuICAgICAgXCJsb2NhdGlvblwiOiBcIjA2MTEzXCIsXG4gICAgICBcImZhcm1cIjogXCJjbGFya3NidXJnXCJcbiAgICB9XG4gIF1cbn1cbiIsIi8qKlxuICogIE5hbWVzcGFjZSBtb2R1bGVcbiAqICBFeHBvc2VzIG90aGVyIG1vZHVsZXNcbiAqKi9cblxudmFyIG1hdGVyaWFsQ29udHJvbGxlciA9IHJlcXVpcmUoJy4vbWF0ZXJpYWxDb250cm9sbGVyJyk7XG52YXIgb3BlcmF0aW9uQ29udHJvbGxlciA9IHJlcXVpcmUoJy4vb3BlcmF0aW9uQ29udHJvbGxlcicpO1xub3BlcmF0aW9uQ29udHJvbGxlci5pbml0KG1hdGVyaWFsQ29udHJvbGxlcik7XG5cbnZhciBleGFtcGxlcyA9IHtcbiAgJ2RlZmF1bHQnIDogcmVxdWlyZSgnLi9jb25maWcvZGVmYXVsdCcpLFxuICAncG9wbGFyJyA6IHJlcXVpcmUoJy4vY29uZmlnL3BvcGxhci1leGFtcGxlJylcbn07XG5cbm1vZHVsZS5leHBvcnRzID0ge1xuICBoZWxsb1dvcmxkIDogcmVxdWlyZSgnLi90ZXN0JyksXG4gIG9wZXJhdGlvbkNvbnRyb2xsZXIgOiBvcGVyYXRpb25Db250cm9sbGVyLFxuICBtYXRlcmlhbENvbnRyb2xsZXIgOiBtYXRlcmlhbENvbnRyb2xsZXIsXG4gIHRyYW5zZm9ybSA6IHJlcXVpcmUoJy4vdHJhbnNmb3JtJyksXG4gIGV4YW1wbGVzIDogZXhhbXBsZXMsXG4gIHVjdW0gOiByZXF1aXJlKCd1Y3VtLmpzJyksXG4gIHVuaXRzIDogcmVxdWlyZSgnLi91bml0cycpXG59O1xuIiwiJ3VzZSBzdHJpY3QnO1xuLyoqXG4gKiBrZWVwcyB0cmFjayBvZiBtYXRlcmlhbHMsIHByaWNlcyBhbmQgY29tcGxleCBtYXRlcmlhbHMuICBtb3N0bHkgZm9yIGNsaWVudCBhcHAuXG4gKiovXG5cbiB2YXIgZXZlbnRzID0gcmVxdWlyZSgnZXZlbnRzJykuRXZlbnRFbWl0dGVyO1xuIHZhciB1bml0cyA9IHJlcXVpcmUoJy4uL3VuaXRzJyk7XG4gZXZlbnRzID0gbmV3IGV2ZW50cygpO1xuIGV2ZW50cy5zZXRNYXhMaXN0ZW5lcnMoMTAwMCk7XG5cbnZhciBkYXRhID0ge1xuIG1hdGVyaWFscyA6IHt9LFxuIGNvbXBsZXggOiB7fVxufTtcblxuZnVuY3Rpb24gcmVtb3ZlKG5hbWUpIHtcbiAgaWYoIGRhdGEubWF0ZXJpYWxzW25hbWVdICkge1xuICAgIGRlbGV0ZSBkYXRhLm1hdGVyaWFsc1tuYW1lXTtcbiAgICByZXR1cm4gc3VjY2VzcygpO1xuICB9IGVsc2UgaWYoIGRhdGEuY29tcGxleFtuYW1lXSApIHtcbiAgICBkZWxldGUgZGF0YS5jb21wbGV4W25hbWVdO1xuICAgIHJldHVybiBzdWNjZXNzKCk7XG4gIH1cblxuICByZXR1cm4gc2V0RXJyb3IoJ21hdGVyaWFsICcrbmFtZSsnIGRvZXMgbm90IGV4aXN0Jyk7XG59XG5cbmZ1bmN0aW9uIGFkZChtYXRlcmlhbCwgb3B0aW9ucykge1xuICBpZiggIW9wdGlvbnMgKSB7XG4gICAgb3B0aW9ucyA9IHt9O1xuICB9XG5cbiAgaWYoIGRhdGEubWF0ZXJpYWxzW21hdGVyaWFsLm5hbWVdICYmICFvcHRpb25zLnJlcGxhY2UgKSB7XG4gICAgcmV0dXJuIHNldEVycm9yKG1hdGVyaWFsLm5hbWUsICdtYXRlcmlhbCBhbHJlYWR5IGV4aXN0cycpO1xuICB9IGVsc2UgaWYoIGRhdGEuY29tcGxleFttYXRlcmlhbC5uYW1lXSAmJiAhb3B0aW9ucy5yZXBsYWNlICkge1xuICAgIHJldHVybiBzZXRFcnJvcihtYXRlcmlhbC5uYW1lLCAnbWF0ZXJpYWwgYWxyZWFkeSBleGlzdHMnKTtcbiAgfVxuXG4gIGlmKCBtYXRlcmlhbC50eXBlID09PSAnY29tcGxleCcgKSB7XG4gICAgZGF0YS5jb21wbGV4W21hdGVyaWFsLm5hbWVdID0gbWF0ZXJpYWw7XG4gIH0gZWxzZSB7XG4gICAgbWF0ZXJpYWwudHlwZSA9ICdzaW1wbGUnO1xuICAgIGRhdGEubWF0ZXJpYWxzW21hdGVyaWFsLm5hbWVdID0gbWF0ZXJpYWw7XG4gIH1cblxuICBpZiggb3B0aW9ucy5yZW5hbWUgKSB7XG4gICAgcmVtb3ZlKG9wdGlvbnMucmVuYW1lKTtcbiAgfVxuXG4gIGlmKCAhb3B0aW9ucy5ub1JlY2FsYyApIHtcbiAgICByZWNhbGMoKTtcbiAgfVxuXG4gIGlmKCAhb3B0aW9ucy5ub0V2ZW50ICkge1xuICAgIGV2ZW50cy5lbWl0KCdtYXRlcmlhbC11cGRhdGUnLCB7XG4gICAgICBtYXRlcmlhbCA6IG1hdGVyaWFsLFxuICAgICAgcmVwbGFjZWQgOiBvcHRpb25zLnJlbmFtZVxuICAgIH0pO1xuICB9XG5cbiAgcmV0dXJuIHN1Y2Nlc3MoKTtcbn1cblxuZnVuY3Rpb24gZ2V0KG5hbWUpIHtcbiAgaWYoICFuYW1lICkge1xuICAgIHJldHVybiBkYXRhO1xuICB9XG5cbiAgaWYoIGRhdGEubWF0ZXJpYWxzW25hbWVdICkge1xuICAgIHJldHVybiBkYXRhLm1hdGVyaWFsc1tuYW1lXTtcbiAgfSBlbHNlIGlmKCBkYXRhLmNvbXBsZXhbbmFtZV0gKSB7XG4gICAgcmV0dXJuIGRhdGEuY29tcGxleFtuYW1lXTtcbiAgfVxuXG4gIHJldHVybiBzZXRFcnJvcihuYW1lLCBuYW1lKycgaXMgbm90IGluIHRoZSBtYXRlcmlhbCBsaXN0Jyk7XG59XG5cbmZ1bmN0aW9uIGZpbmQodHh0LCBpZ25vcmUpIHtcbiAgdmFyIHJlID0gbmV3IFJlZ0V4cCgnLionK3R4dCsnLionLCAnaScpO1xuICB2YXIgcmVzdWx0cyA9IFtdLCBrZXk7XG5cbiAgaWYoIHR4dC5sZW5ndGggPT09IDAgKSB7XG4gICAgcmV0dXJuIHJlc3VsdHM7XG4gIH1cblxuICBmb3IoIGtleSBpbiBkYXRhLm1hdGVyaWFscyApIHtcbiAgICBpZigga2V5Lm1hdGNoKHJlKSAmJiBrZXkgIT09IGlnbm9yZSApIHtcbiAgICAgIHJlc3VsdHMucHVzaChkYXRhLm1hdGVyaWFsc1trZXldKTtcbiAgICB9XG4gIH1cbiAgZm9yKCBrZXkgaW4gZGF0YS5jb21wbGV4ICkge1xuICAgIGlmKCBrZXkubWF0Y2gocmUpICYmIGtleSAhPT0gaWdub3JlICApIHtcbiAgICAgIHJlc3VsdHMucHVzaChkYXRhLmNvbXBsZXhba2V5XSk7XG4gICAgfVxuICB9XG5cbiAgcmV0dXJuIHJlc3VsdHM7XG59XG5cbi8vIHJlY2FsYyBhbGwgY29tcGxleCBtYXRlcmlhbCBjb3N0c1xuZnVuY3Rpb24gcmVjYWxjKCkge1xuICB2YXIgbWF0ZXJpYWw7XG4gIGZvciggbWF0ZXJpYWwgaW4gZGF0YS5jb21wbGV4ICkge1xuICAgIGRhdGEuY29tcGxleFttYXRlcmlhbF0ucHJpY2UgPSBudWxsO1xuICB9XG5cbiAgZm9yKCBtYXRlcmlhbCBpbiBkYXRhLmNvbXBsZXggKSB7XG4gICAgdmFyIG0gPSBkYXRhLmNvbXBsZXhbbWF0ZXJpYWxdO1xuXG4gICAgaWYoIG0ucHJpY2UgIT09IG51bGwgKSB7XG4gICAgICAgIGNvbnRpbnVlO1xuICAgIH1cbiAgICBtLnByaWNlID0gX3JlY2FsYyhtKTtcbiAgfVxufVxuXG5mdW5jdGlvbiBfcmVjYWxjKG1hdGVyaWFsKXtcbiAgdmFyIHByaWNlID0gMDtcblxuICBmb3IoIHZhciBrZXkgaW4gbWF0ZXJpYWwubWF0ZXJpYWxzICkge1xuICAgIHZhciBtID0gZ2V0KGtleSk7XG5cbiAgICBpZiggbS5lcnJvciApIHtcbiAgICAgIG1hdGVyaWFsLm1hdGVyaWFsc1trZXldLmVycm9yID0gbS5lcnJvcjtcbiAgICAgIHJldHVybiAwO1xuICAgIH1cbiAgICBtYXRlcmlhbC5tYXRlcmlhbHNba2V5XS5lcnJvciA9IG51bGw7XG5cbiAgICBpZiggbS5wcmljZSA9PT0gbnVsbCAmJiBtLnR5cGUgPT09ICdjb21wbGV4JyApIHtcbiAgICAgIG0ucHJpY2UgPSBfcmVjYWxjKG0pO1xuICAgIH1cblxuICAgIHZhciB2YWx1ZSA9IHVuaXRzLmNhbGN1bGF0ZUNvbXBsZXhQcmljZShtLCBtYXRlcmlhbC5tYXRlcmlhbHNbbS5uYW1lXSwgbWF0ZXJpYWwpO1xuXG4gICAgaWYoIHZhbHVlLmVycm9yICkge1xuICAgICAgbWF0ZXJpYWwubWF0ZXJpYWxzW20ubmFtZV0ucHJpY2UgPSAwO1xuICAgICAgbWF0ZXJpYWwubWF0ZXJpYWxzW20ubmFtZV0uZXJyb3IgPSB2YWx1ZTtcbiAgICB9IGVsc2Uge1xuICAgICAgbWF0ZXJpYWwubWF0ZXJpYWxzW20ubmFtZV0ucHJpY2UgPSB2YWx1ZS52YWx1ZTtcbiAgICB9XG5cbiAgICBwcmljZSArPSBtYXRlcmlhbC5tYXRlcmlhbHNbbS5uYW1lXS5wcmljZTtcblxuICAgIC8vbWF0ZXJpYWwubWF0ZXJpYWxzW20ubmFtZV0ucHJpY2UgPSBnZXRQcmljZUZvclVuaXRzKG0sIG1hdGVyaWFsLm1hdGVyaWFsc1ttLm5hbWVdLnVuaXRzKTtcbiAgICAvL3ByaWNlICs9IG1hdGVyaWFsLm1hdGVyaWFsc1ttLm5hbWVdLmFtb3VudCAqIG1hdGVyaWFsLm1hdGVyaWFsc1ttLm5hbWVdLnByaWNlO1xuICB9XG4gIHJldHVybiBwcmljZTtcbn1cblxuZnVuY3Rpb24gZ2V0UHJpY2VGb3JVbml0cyhtLCB1bml0cykge1xuICBpZiggdW5pdHMgJiYgdW5pdHMgIT09IG0udW5pdHMgKSB7XG4gICAgLy8gVE9ETzogcmVhbGx5IHlvdSBuZWVkIHRvIGNvbnZlcnQgdW5pdHMgaGVyZVxuICAgIC8vY29uc29sZS5sb2coJ2ZvdW5kIHVuaXQgbWlzc21hdGNoICcrdW5pdHMrJyAhPT0gJyttLnVuaXRzKycuICBuZWVkIHRvIHdpcmUgdXAgY29udmVyc2lvbiBsaWJyYXJ5LiBmYWtpbmcnKTtcbiAgICAvL3JldHVybiBtLnByaWNlKjI7XG4gIH1cbiAgcmV0dXJuIG0ucHJpY2U7XG59XG5cbmZ1bmN0aW9uIHN1Y2Nlc3MoKSB7XG4gIHJldHVybiB7c3VjY2VzczogdHJ1ZX07XG59XG5cbmZ1bmN0aW9uIHNldEVycm9yKG5hbWUsIG1zZykge1xuICByZXR1cm4ge1xuICAgIG5hbWUgOiBuYW1lLFxuICAgIGVycm9yIDogdHJ1ZSxcbiAgICBtZXNzYWdlIDogbXNnXG4gIH07XG59XG5cblxubW9kdWxlLmV4cG9ydHMgPSB7XG4gIGFkZCA6IGFkZCxcbiAgZ2V0IDogZ2V0LFxuICByZW1vdmUgOiByZW1vdmUsXG4gIGZpbmQgOiBmaW5kLFxuICBvbiA6IGZ1bmN0aW9uKGV2ZW50LCBsaXN0ZW5lcil7XG4gICAgZXZlbnRzLm9uKGV2ZW50LCBsaXN0ZW5lcik7XG4gIH0sXG4gIHJlY2FsYyA6IHJlY2FsY1xufTtcbiIsIlwidXNlIHN0cmljdFwiO1xudmFyIHVjdW09cmVxdWlyZSgndWN1bS5qcycpO1xuXG4vLyBUaGVzZSB0aHJvdyBlcnJzLCBhbmQgbmVlZCB0byBiZSBpbiB0cnkgY2F0Y2hcbmZ1bmN0aW9uIG11bHRpcGx5KGEsYixhX25hbWVzLGJfbmFtZXMpIHtcbiAgdmFyIGFuPXt2YWx1ZTpcInZhbHVlXCIsdW5pdDpcInVuaXRcIn1cbiAgLCBibj17dmFsdWU6XCJ2YWx1ZVwiLHVuaXQ6XCJ1bml0XCJ9XG4gICwgcGFyc2VkXG4gICAgLCB1bml0XG4gICAgLCBwcmU9W11cbiAgICAsIG11bHQ9e31cbiAgICA7XG5cbiAgICBpZiAoYV9uYW1lcykge1xuICAgICAgaWYgKGFfbmFtZXMudW5pdCkgYW4udW5pdD1hX25hbWVzLnVuaXQ7XG4gICAgICBpZiAoYV9uYW1lcy52YWx1ZSkgYW4udmFsdWU9YV9uYW1lcy52YWx1ZTtcbiAgICB9XG4gICAgaWYgKGJfbmFtZXMpIHtcbiAgICAgIGlmIChiX25hbWVzLnVuaXQpIGJuLnVuaXQ9Yl9uYW1lcy51bml0O1xuICAgICAgaWYgKGJfbmFtZXMudmFsdWUpIGJuLnZhbHVlPWJfbmFtZXMudmFsdWU7XG4gICAgfVxuXG4gIHBhcnNlZCA9IHVjdW0ucGFyc2UoJygnK1thW2FuLnVuaXRdKycpLignK2JbYm4udW5pdF1dKycpJyk7XG4gIG11bHQudmFsdWU9KChhW2FuLnZhbHVlXSk/YVthbi52YWx1ZV06MSkqKChiW2JuLnZhbHVlXSk/Yltibi52YWx1ZV06MSkqcGFyc2VkLnZhbHVlO1xuXG4gIC8vIENvbnZlcnQgdW5pdCBiYWNrXG4gIGZvciAodW5pdCBpbiBwYXJzZWQudW5pdHMpIHtcbiAgICBwcmUucHVzaCh1bml0K3BhcnNlZC51bml0c1t1bml0XSk7XG4gIH1cbiAgbXVsdC51bml0PXByZS5qb2luKCcuJyk7XG4gIHJldHVybiBtdWx0O1xufVxuXG5mdW5jdGlvbiBtdWx0aXBseV90b191bml0bGVzcyhhLGIsYW4sYm4pIHtcbiAgdmFyIG11bHQ9dW5pdF9tdWxpdHBseShhLGIsYW4sYm4pO1xuICBpZiAobXVsdC51bml0ICE9PSB7fSkge1xuICAgIHRocm93IG0rXCIgaXMgbm90IHVuaXRsZXNzXCI7XG4gIH1cbiAgcmV0dXJuIG11bHQ7XG59XG5cbmZ1bmN0aW9uIHN1bShsaXN0LG5hbWVzKSB7XG4gIHZhciBuPXt2YWx1ZTpcInZhbHVlXCIsdW5pdDpcInVuaXRcIn1cbiAgLCBzdW1cbiAgLCBpXG4gICwgaV91bml0XG4gIDtcblxuICBpZiAobmFtZXMpIHtcbiAgICBpZiAobmFtZXMudW5pdCkgbi51bml0PW5hbWVzLnVuaXQ7XG4gICAgaWYgKG5hbWVzLnZhbHVlKSBuLnZhbHVlPW5hbWVzLnZhbHVlO1xuICB9XG4gIHN1bSA9KGxpc3QubGVuZ3RoID4gMCk/e3ZhbHVlOmxpc3RbMF1bbi52YWx1ZV0sdW5pdDpsaXN0WzBdW24udW5pdF19Ont2YWx1ZTowLHVuaXQ6e319O1xuICBmb3IgKGk9MTtpPGxpc3QubGVuZ3RoO2krKykge1xuICAgIGlfdW5pdD0gdWN1bS5jb252ZXJ0KGxpc3RbaV1bbi52YWx1ZV0sbGlzdFtpXVtuLnVuaXRdLHN1bS51bml0KTtcbiAgICBzdW0udmFsdWUrPWlfdW5pdC52YWx1ZTtcbiAgfVxuICByZXR1cm4geyd2YWx1ZSc6c3VtLnZhbHVlLCd1bml0JzpzdW0udW5pdH07XG59XG5cblxuZnVuY3Rpb24gY2xlYW5Eb2xsYXJzKHVuaXRzKSB7XG4gIHJldHVybiB1bml0cy5yZXBsYWNlKC8odXMpP1xcJC9nLCAnMScpO1xufVxuXG5cbm1vZHVsZS5leHBvcnRzID0ge1xuICAgc3VtIDogc3VtLFxuICAgbXVsdGlwbHkgOiBtdWx0aXBseSxcbiAgIG11bHRpcGx5X3RvX3VuaXRsZXNzIDogbXVsdGlwbHlfdG9fdW5pdGxlc3MsXG4gICBjbGVhbkRvbGxhcnMgOiBjbGVhbkRvbGxhcnNcbiB9O1xuIiwiJ3VzZSBzdHJpY3QnO1xuLyoqXG4gKiBrZWVwcyB0cmFjayBvZiBtYXRlcmlhbHMsIHByaWNlcyBhbmQgY29tcGxleCBtYXRlcmlhbHMuICBtb3N0bHkgZm9yIGNsaWVudCBhcHAuXG4gKiovXG52YXIgdXVpZCA9IHJlcXVpcmUoJ25vZGUtdXVpZCcpO1xudmFyIGV2ZW50cyA9IHJlcXVpcmUoJ2V2ZW50cycpLkV2ZW50RW1pdHRlcjtcbmV2ZW50cyA9IG5ldyBldmVudHMoKTtcbmV2ZW50cy5zZXRNYXhMaXN0ZW5lcnMoMTAwMCk7XG5cbnZhciBkYXRhID0gW10sIG1hdGVyaWFsQ29udHJvbGxlciwgbGFzdFJlY2FsY01zZztcblxuZnVuY3Rpb24gaW5pdChjb250cm9sbGVyKSB7XG4gIG1hdGVyaWFsQ29udHJvbGxlciA9IGNvbnRyb2xsZXI7XG5cbiAgbWF0ZXJpYWxDb250cm9sbGVyLm9uKCdtYXRlcmlhbC11cGRhdGUnLCBoYW5kbGVNYXRlcmlhbFVwZGF0ZXMpO1xufVxuXG5mdW5jdGlvbiByZW1vdmUoaWQpIHtcbiAgaWYoIHR5cGVvZiBpZCA9PT0gJ29iamVjdCcgJiYgZGF0YS5pbmRleE9mKGlkKSA+IC0xICkge1xuICAgIGRhdGEuc3BsaWNlKGRhdGEuaW5kZXhPZihpZCksIDEpO1xuICAgIHJldHVybiBzdWNjZXNzKCk7XG4gIH0gZWxzZSB7XG4gICAgZm9yKCB2YXIgaSA9IDA7IGkgPCBkYXRhLmxlbmd0aDsgaSsrICkge1xuICAgICAgaWYoIGRhdGFbaV0uaWQgPT09IGlkICApIHtcbiAgICAgICAgZGF0YS5zcGxpY2UoaSwgMSk7XG4gICAgICAgIHJldHVybiBzdWNjZXNzKCk7XG4gICAgICB9XG4gICAgfVxuICB9XG5cbiAgcmV0dXJuIHNldEVycm9yKCdvcGVyYXRpb24gJysodHlwZW9mIGlkID09PSAnb2JqZWN0JyA/IGlkLmlkIDogaWQpKycgZG9lcyBub3QgZXhpc3QnKTtcbn1cblxuZnVuY3Rpb24gYWRkKG9wZXJhdGlvbiwgb3B0aW9ucykge1xuICBpZiggIW9wdGlvbnMgKSB7XG4gICAgb3B0aW9ucyA9IHt9O1xuICB9XG5cbiAgb3BlcmF0aW9uLmlkID0gdXVpZC52NCgpO1xuICBkYXRhLnB1c2gob3BlcmF0aW9uKTtcblxuICByZWNhbGMoKTtcblxuICBpZiggIW9wdGlvbnMubm9FdmVudCApIHtcbiAgICBldmVudHMuZW1pdCgnb3BlcmF0aW9uLXVwZGF0ZScsIHtcbiAgICAgIG9wZXJhdGlvbiA6IG9wZXJhdGlvblxuICAgIH0pO1xuICB9XG5cbiAgcmV0dXJuIHN1Y2Nlc3MoKTtcbn1cblxuZnVuY3Rpb24gdXBkYXRlKG9wZXJhdGlvbiwgb3B0aW9ucykge1xuICBpZiggIW9wdGlvbnMgKSB7XG4gICAgb3B0aW9ucyA9IHt9O1xuICB9XG5cbiAgdmFyIGZvdW5kID0gZmFsc2U7XG4gIGZvciggdmFyIGkgPSAwOyBpIDwgZGF0YS5sZW5ndGg7IGkrKyApIHtcbiAgICBpZiggb3BlcmF0aW9uLmlkID09PSBkYXRhW2ldLmlkICkge1xuICAgICAgZGF0YVtpXSA9IG9wZXJhdGlvbjtcbiAgICAgIGZvdW5kID0gdHJ1ZTtcbiAgICAgIGJyZWFrO1xuICAgIH1cbiAgfVxuXG4gIGlmKCAhZm91bmQgKSB7XG4gICAgcmV0dXJuIHNldEVycm9yKCdPcGVyYXRpb24gJytvcGVyYXRpb24uaWQrJyBub3QgZm91bmQnKTtcbiAgfVxuXG4gIHJlY2FsYygpO1xuXG4gIGlmKCAhb3B0aW9ucy5ub0V2ZW50ICkge1xuICAgIGV2ZW50cy5lbWl0KCdvcGVyYXRpb24tdXBkYXRlJywge1xuICAgICAgb3BlcmF0aW9uIDogb3BlcmF0aW9uXG4gICAgfSk7XG4gIH1cblxuICByZXR1cm4gc3VjY2VzcygpO1xufVxuXG5mdW5jdGlvbiBnZXQoaWQpIHtcbiAgaWYoICFpZCApIHtcbiAgICByZXR1cm4gZGF0YTtcbiAgfVxuXG4gIGZvciggdmFyIGkgPSAwOyBpIDwgZGF0YS5sZW5ndGg7IGkrKyApIHtcbiAgICBpZiggZGF0YVtpXS5pZCA9PT0gaWQgKSB7XG4gICAgICByZXR1cm4gZGF0YVtpXTtcbiAgICB9XG4gIH1cblxuICByZXR1cm4gc2V0RXJyb3IoaWQrJyBpcyBub3QgaW4gdGhlIG1hdGVyaWFsIGxpc3QnKTtcbn1cblxuZnVuY3Rpb24gZmluZCh0eHQsIGlnbm9yZSkge1xuICB2YXIgcmUgPSBuZXcgUmVnRXhwKCcuKicrdHh0KycuKicsICdpJyk7XG4gIHZhciByZXN1bHRzID0gW10sIGtleTtcblxuICBpZiggdHh0Lmxlbmd0aCA9PT0gMCApIHtcbiAgICByZXR1cm4gcmVzdWx0cztcbiAgfVxuXG4gIGZvciggdmFyIGkgPSAwOyBpIDwgZGF0YS5sZW5ndGg7IGkrKyApIHtcbiAgICBpZiggZGF0YVtpXS5tYXRjaChyZSkgJiYgZGF0YVtpXSAhPT0gaWdub3JlICkge1xuICAgICAgcmVzdWx0cy5wdXNoKGRhdGFbaV0pO1xuICAgIH1cbiAgfVxuXG4gIHJldHVybiByZXN1bHRzO1xufVxuXG4vLyByZWNhbGMgYWxsIGNvbXBsZXggbWF0ZXJpYWwgY29zdHNcbmZ1bmN0aW9uIHJlY2FsYygpIHtcbiAgdmFyIG9wZXJhdGlvbiwgbWF0ZXJpYWxEZWYsIG1hdGVyaWFsSW1wbCwgdG90YWwsIG1lc3NhZ2VzID0gW107XG5cbiAgZm9yKCB2YXIgaSA9IDA7IGkgPCBkYXRhLmxlbmd0aDsgaSsrICkge1xuICAgIHRvdGFsID0gMDtcbiAgICBvcGVyYXRpb24gPSBkYXRhW2ldO1xuXG4gICAgZm9yKCB2YXIgbSBpbiBvcGVyYXRpb24ubWF0ZXJpYWxzICkge1xuICAgICAgbWF0ZXJpYWxJbXBsID0gb3BlcmF0aW9uLm1hdGVyaWFsc1ttXTtcbiAgICAgIG1hdGVyaWFsRGVmID0gbWF0ZXJpYWxDb250cm9sbGVyLmdldChtKTtcblxuICAgICAgLy8gd2FzIGEgc3BlY2lmaWVkIG1hdGVyaWFsIG5vdCBmb3VuZD9cbiAgICAgIGlmKCBtYXRlcmlhbERlZi5lcnJvciApIHtcbiAgICAgICAgbWF0ZXJpYWxJbXBsLmVycm9yID0gbWF0ZXJpYWxEZWY7IC8vIHRoaXMgaXMgYWN0dWFsbHkgdGhlIGVycm9yIHJlc3BvbnNlIG9iamVjdFxuICAgICAgICBtZXNzYWdlcy5wdXNoKHtcbiAgICAgICAgICBpbmRleCA6IGksXG4gICAgICAgICAgbWF0ZXJpYWwgOiBtLFxuICAgICAgICAgIG9wZXJhdGlvbiA6IG9wZXJhdGlvbi5uYW1lLFxuICAgICAgICAgIGVycm9yIDogbWF0ZXJpYWxEZWZcbiAgICAgICAgfSk7XG4gICAgICAgIGNvbnRpbnVlO1xuICAgICAgfVxuXG4gICAgICAvLyB3YXMgYSBtYXRlcmlhbCBhbW91bnQgbm90IHNwZWNpZmllZD9cbiAgICAgIGlmKCB0eXBlb2YgbWF0ZXJpYWxEZWYucHJpY2UgIT09ICdudW1iZXInIHx8IGlzTmFOKG1hdGVyaWFsRGVmLnByaWNlKSApIHtcbiAgICAgICAgbWF0ZXJpYWxJbXBsLmVycm9yID0gc2V0RXJyb3IobWF0ZXJpYWxEZWYubmFtZSsnIGZvdW5kIGJ1dCBwcmljZSBpcyBub3QgYSBudW1iZXIuJyk7XG4gICAgICAgIG1lc3NhZ2VzLnB1c2goe1xuICAgICAgICAgIGluZGV4IDogaSxcbiAgICAgICAgICBtYXRlcmlhbCA6IG0sXG4gICAgICAgICAgb3BlcmF0aW9uIDogb3BlcmF0aW9uLm5hbWUsXG4gICAgICAgICAgd2FybmluZyA6IG1hdGVyaWFsSW1wbC5lcnJvclxuICAgICAgICB9KTtcbiAgICAgICAgY29udGludWU7XG4gICAgICB9XG5cbiAgICAgIC8vIHdhcyBhIG1hdGVyaWFsIGFtb3VudCBub3Qgc3BlY2lmaWVkP1xuICAgICAgaWYoIG1hdGVyaWFsSW1wbC5hbW91bnQgPT09IHVuZGVmaW5lZCApIHtcbiAgICAgICAgbWF0ZXJpYWxJbXBsLndhcm5pbmcgPSB3YXJuKCdObyBhbW91bnQgc2V0LiAgU2V0dGluZyB0byAxLicpO1xuICAgICAgICBtZXNzYWdlcy5wdXNoKHtcbiAgICAgICAgICBpbmRleCA6IGksXG4gICAgICAgICAgbWF0ZXJpYWwgOiBtLFxuICAgICAgICAgIG9wZXJhdGlvbiA6IG9wZXJhdGlvbi5uYW1lLFxuICAgICAgICAgIHdhcm5pbmcgOiBtYXRlcmlhbEltcGwud2FybmluZ1xuICAgICAgICB9KTtcbiAgICAgICAgbWF0ZXJpYWxJbXBsLmFtb3VudCA9IDE7XG4gICAgICB9XG5cblxuICAgICAgLy8gdG8gd2UgbmVlZCB0byBzd2l0Y2ggdW5pdHM/XG4gICAgICBpZiggbWF0ZXJpYWxJbXBsLnVuaXRzICE9PSB1bmRlZmluZWQgJiYgbWF0ZXJpYWxJbXBsLnVuaXRzICE9PSBtYXRlcmlhbERlZi51bml0cyApIHtcbiAgICAgICAgbWVzc2FnZXMucHVzaCh7XG4gICAgICAgICAgaW5kZXggOiBpLFxuICAgICAgICAgIG1hdGVyaWFsIDogbSxcbiAgICAgICAgICBvcGVyYXRpb24gOiBvcGVyYXRpb24ubmFtZSxcbiAgICAgICAgICBtZXNzYWdlIDogJ0NvbnZlcnRpbmcgZnJvbSAnK21hdGVyaWFsRGVmLnVuaXRzKycgdG8gJyttYXRlcmlhbEltcGwudW5pdHNcbiAgICAgICAgfSk7XG5cbiAgICAgICAgLy8gVE9ETzogbmVlZCB0byB3aXJlIHVwIHVuaXQgY29udmVyc2lvbnNcbiAgICAgICAgbWF0ZXJpYWxJbXBsLnByaWNlID0gbWF0ZXJpYWxJbXBsLmFtb3VudCAqIG1hdGVyaWFsRGVmLnByaWNlICogMjtcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIG1hdGVyaWFsSW1wbC5wcmljZSA9IG1hdGVyaWFsSW1wbC5hbW91bnQgKiBtYXRlcmlhbERlZi5wcmljZTtcbiAgICAgIH1cblxuICAgICAgLy8gZGlkIHNvbWV0aGluZyBiYWQgaGFwcGVuIGluIHByaWNlIGNhbGN1bGF0aW9uP1xuICAgICAgaWYoIGlzTmFOKG1hdGVyaWFsSW1wbC5wcmljZSkgKSB7XG4gICAgICAgIG1hdGVyaWFsSW1wbC5lcnJvciA9IHNldEVycm9yKCdQcmljZSBjYWxjdWxhdGVkIHRvIE5hTi4gIE1hdGVyaWFsIG5vdCBpbmNsdWRlZCBpbiB0b3RhbC4nKTtcbiAgICAgICAgbWVzc2FnZXMucHVzaCh7XG4gICAgICAgICAgaW5kZXggOiBpLFxuICAgICAgICAgIG9wZXJhdGlvbiA6IG9wZXJhdGlvbi5uYW1lLFxuICAgICAgICAgIG1hdGVyaWFsIDogbSxcbiAgICAgICAgICBlcnJvciA6IG1hdGVyaWFsSW1wbC5lcnJvclxuICAgICAgICB9KTtcbiAgICAgICAgY29udGludWU7XG4gICAgICB9XG5cbiAgICAgIHRvdGFsICs9IG1hdGVyaWFsSW1wbC5wcmljZTtcbiAgICB9XG5cbiAgICBvcGVyYXRpb24uc3VidG90YWwgPSB0b3RhbDtcblxuICAgIHZhciBzY2hlZHVsZWQgPSBvcGVyYXRpb24uc2NoZWR1bGUgPyBvcGVyYXRpb24uc2NoZWR1bGUubGVuZ3RoIDogMDtcbiAgICBpZiggIW9wZXJhdGlvbi5zY2hlZHVsZWQgKSB7XG4gICAgICBtZXNzYWdlcy5wdXNoKHtcbiAgICAgICAgaW5kZXggOiBpLFxuICAgICAgICBvcGVyYXRpb24gOiBvcGVyYXRpb24ubmFtZSxcbiAgICAgICAgd2FybmluZyA6IHdhcm4oJ05vIHNjaGVkdWxlIHNldCcpXG4gICAgICB9KTtcbiAgICB9XG5cbiAgICBvcGVyYXRpb24udG90YWwgPSBzY2hlZHVsZWQgKiBvcGVyYXRpb24uc3VidG90YWw7XG5cbiAgfVxuXG4gIGxhc3RSZWNhbGNNc2cgPSBtZXNzYWdlcztcbiAgcmV0dXJuIG1lc3NhZ2VzO1xufVxuXG5mdW5jdGlvbiBoYW5kbGVNYXRlcmlhbFVwZGF0ZXMoZSkge1xuICB2YXIgbWF0ZXJpYWwgPSBlLm1hdGVyaWFsO1xuICB2YXIgcmVwbGFjZWQgPSBlLnJlcGxhY2VkO1xuXG4gIHJlY2FsYygpO1xuXG4gIGZvciggdmFyIGkgPSAwOyBpIDwgZGF0YS5sZW5ndGg7IGkrKyApIHtcbiAgICB2YXIgb3BlcmF0aW9uID0gZGF0YVtpXTtcbiAgICB2YXIgZmlyZUNoYW5nZSA9IGZhbHNlO1xuXG4gICAgZm9yKCB2YXIgbSBpbiBvcGVyYXRpb24ubWF0ZXJpYWxzICkge1xuICAgICAgLy8gdXBkYXRlIGFueSByZW5hbWVzXG4gICAgICBpZiggbSA9PT0gcmVwbGFjZWQgKSB7XG4gICAgICAgIG9wZXJhdGlvbi5tYXRlcmlhbHNbbV0ubmFtZSA9IG1hdGVyaWFsLm5hbWU7XG4gICAgICAgIG9wZXJhdGlvbi5tYXRlcmlhbHNbbV0gPSBvcGVyYXRpb24ubWF0ZXJpYWxzW3JlcGxhY2VkXTtcbiAgICAgICAgZGVsZXRlIG9wZXJhdGlvbi5tYXRlcmlhbHNbbV07XG4gICAgICAgIGZpcmVDaGFuZ2UgPSB0cnVlO1xuXG4gICAgICAvLyBsb29rIHRvIHNlZSBpZiB0aGlzIG9wZXJhdGlvbiBoYXMgdGhlIHVwZGF0ZWQgbWF0ZXJpYWxcbiAgICAgIH0gZWxzZSBpZiggbSA9PT0gbWF0ZXJpYWwubmFtZSApIHtcbiAgICAgICAgZmlyZUNoYW5nZSA9IHRydWU7XG4gICAgICB9XG4gICAgfVxuXG4gICAgaWYoIGZpcmVDaGFuZ2UgKSB7XG4gICAgICBldmVudHMuZW1pdCgnb3BlcmF0aW9uLXVwZGF0ZScsIG9wZXJhdGlvbik7XG4gICAgfVxuICB9XG59XG5cbmZ1bmN0aW9uIGdldExhc3RSZWNhbGNNc2coKSB7XG4gIHJldHVybiBsYXN0UmVjYWxjTXNnO1xufVxuXG5mdW5jdGlvbiBzdWNjZXNzKCkge1xuICByZXR1cm4ge3N1Y2Nlc3M6IHRydWV9O1xufVxuXG5mdW5jdGlvbiBzZXRFcnJvcihtc2cpIHtcbiAgcmV0dXJuIHtcbiAgICBlcnJvciA6IHRydWUsXG4gICAgbWVzc2FnZSA6IG1zZ1xuICB9O1xufVxuXG5mdW5jdGlvbiB3YXJuKG1zZykge1xuICByZXR1cm4ge1xuICAgIHdhcnJuaW5nIDogdHJ1ZSxcbiAgICBtZXNzYWdlIDogbXNnXG4gIH07XG59XG5cblxubW9kdWxlLmV4cG9ydHMgPSB7XG4gIGFkZCA6IGFkZCxcbiAgZ2V0IDogZ2V0LFxuICByZW1vdmUgOiByZW1vdmUsXG4gIHVwZGF0ZSA6IHVwZGF0ZSxcbiAgZmluZCA6IGZpbmQsXG4gIG9uIDogZnVuY3Rpb24oZXZlbnQsIGxpc3RlbmVyKXtcbiAgICBldmVudHMub24oZXZlbnQsIGxpc3RlbmVyKTtcbiAgfSxcbiAgcmVjYWxjIDogcmVjYWxjLFxuICBpbml0IDogaW5pdCxcbiAgZ2V0TGFzdFJlY2FsY01zZyA6IGdldExhc3RSZWNhbGNNc2dcbn07XG4iLCJtb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uKCkge1xuICBjb25zb2xlLmxvZygnSGVsbG8gV29ybGQnKTtcbn1cbiIsIid1c2Ugc3RyaWN0JztcblxuLyoqXG4gKiBUcmFuc2Zvcm0gdGhlIHBsdjggb2JqZWN0IGRlc2NyaXB0aW9uIHRvIGFwcCBvYmplY3QgZGVzY3JpcHRpb24uXG4gKiBpbiB0aGUgZW5kLCB0aGlzIHNob3VsZG4ndCBkbyBtdWNoLiAganVzdCBhIGxpdHRsZSBhcHAgc3VnYXIuXG4gKiovXG5cbiBtb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uKGNvbmZpZykge1xuICAgdmFyIGFwcCA9IHtcbiAgICAgY2xhc3NlcyA6IHt9LFxuICAgICBtYXRlcmlhbHMgOiBbXSxcbiAgICAgb3BlcmF0aW9ucyA6IFtdLFxuICAgICBmYXJtIDoge31cbiAgIH07XG5cbiAgIGlmKCBjb25maWcubWF0ZXJpYWxzICkge1xuICAgICBhcHAubWF0ZXJpYWxzID0gZ2V0TWF0ZXJpYWxzKGNvbmZpZy5tYXRlcmlhbHMpO1xuICAgICBhcHAuY2xhc3NlcyA9IGdldENsYXNzZXMoYXBwLm1hdGVyaWFscyk7XG4gICB9XG4gICBpZiggY29uZmlnLnByaWNlcyApIHtcbiAgICAgam9pblByaWNlcyhhcHAubWF0ZXJpYWxzLCBjb25maWcucHJpY2VzKTtcbiAgIH1cblxuICAgaWYoIGNvbmZpZy5mYXJtICkge1xuICAgICB2YXIgZmFybSA9IGNvbmZpZy5mYXJtWzBdO1xuICAgICBhcHAuZmFybSA9IGdldEZhcm0oZmFybSk7XG5cbiAgICAgaWYoIGZhcm0ub3BlcmF0aW9ucyApIHtcbiAgICAgICBhcHAub3BlcmF0aW9ucyA9IGdldE9wZXJhdGlvbnMoZmFybS5vcGVyYXRpb25zKTtcbiAgICAgfVxuICAgICBpZiggZmFybS5zY2hlZHVsZSApIHtcbiAgICAgICBqb2luU2NoZWR1bGUoYXBwLm9wZXJhdGlvbnMsIGZhcm0uc2NoZWR1bGUpO1xuICAgICB9XG4gICB9XG5cbiAgIHJldHVybiBhcHA7XG4gfTtcblxuIGZ1bmN0aW9uIGpvaW5TY2hlZHVsZShvcGVyYXRpb25zLCBzY2hlZHVsZXMpIHtcbiAgIGZvciggdmFyIGkgPSAwOyBpIDwgc2NoZWR1bGVzLmxlbmd0aDsgaSsrICkge1xuICAgICB2YXIgc2NoZWR1bGUgPSBzY2hlZHVsZXNbaV07XG4gICAgIGZvciggdmFyIGogPSAwOyBqIDwgb3BlcmF0aW9ucy5sZW5ndGg7IGorKyApIHtcbiAgICAgICBpZiggc2NoZWR1bGUub3BlcmF0aW9uID09PSBvcGVyYXRpb25zW2pdLm5hbWUgKSB7XG4gICAgICAgICB2YXIgcGFydHMgPSBzY2hlZHVsZS5kdXJhdGlvbi5zcGxpdCgnICcpO1xuXG4gICAgICAgICBpZiggcGFydHNbMV0ubWF0Y2goL21vbi8pICkge1xuICAgICAgICAgICBwYXJ0c1sxXSA9ICdtb250aCc7XG4gICAgICAgICB9IGVsc2UgaWYgKCBwYXJ0c1sxXS5tYXRjaCgveWVhci8pICkge1xuICAgICAgICAgICBwYXJ0c1sxXSA9ICd5ZWFyJztcbiAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgIHBhcnRzWzFdID0gJ2RheSc7XG4gICAgICAgICB9XG5cbiAgICAgICAgb3BlcmF0aW9uc1tqXS5zY2hlZHVsZS5wdXNoKHtcbiAgICAgICAgICBkYXRlIDogc2NoZWR1bGUuc3RhcnQsXG4gICAgICAgICAgbGVuZ3RoIDogcGFydHNbMF0sXG4gICAgICAgICAgdW5pdHMgOiBwYXJ0c1sxXVxuICAgICAgICB9KTtcblxuICAgICAgICBicmVhaztcbiAgICAgICB9XG4gICAgIH1cbiAgIH1cbiB9XG5cbmZ1bmN0aW9uIGpvaW5QcmljZXMobWF0ZXJpYWxzLCBwcmljZXMpIHtcbiAgZm9yKCB2YXIgaSA9IDA7IGkgPCBwcmljZXMubGVuZ3RoOyBpKysgKSB7XG4gICAgdmFyIHByaWNlID0gcHJpY2VzW2ldO1xuICAgIHZhciBmb3VuZCA9IGZhbHNlO1xuXG4gICAgZm9yKCB2YXIgaiA9IDA7IGogPCBtYXRlcmlhbHMubGVuZ3RoOyBqKysgKSB7XG4gICAgICBpZiggbWF0ZXJpYWxzW2pdLm5hbWUgPT0gcHJpY2UubWF0ZXJpYWwgKSB7XG4gICAgICAgIG1hdGVyaWFsc1tqXS5wcmljZSA9IHByaWNlLnByaWNlO1xuICAgICAgICBtYXRlcmlhbHNbal0udW5pdHMgPSBwcmljZS51bml0O1xuICAgICAgICBmb3VuZCA9IHRydWU7XG4gICAgICAgIGJyZWFrO1xuICAgICAgfVxuICAgIH1cblxuICAgIGlmKCAhZm91bmQgKSB7XG4gICAgICBjb25zb2xlLmxvZyh7XG4gICAgICAgIG5hbWUgOiBwcmljZS5tYXRlcmlhbCxcbiAgICAgICAgcHJpY2UgOiBwcmljZS5wcmljZSxcbiAgICAgICAgdW5pdHMgOiBwcmljZS51bml0XG4gICAgICB9KTtcblxuICAgICAgbWF0ZXJpYWxzLnB1c2goe1xuICAgICAgICBuYW1lIDogcHJpY2UubWF0ZXJpYWwsXG4gICAgICAgIHByaWNlIDogcHJpY2UucHJpY2UsXG4gICAgICAgIHVuaXRzIDogcHJpY2UudW5pdFxuICAgICAgfSk7IC8vIFRPRE86IHNvbWUgbWF0ZXJpYWxzIGRvIG5vdCBzZWVtIHRvIGFwcGVhciBpbiBtYXRlcmlhbCBsaXN0XG4gICAgfVxuXG4gIH1cbn1cblxuZnVuY3Rpb24gZ2V0TWF0ZXJpYWxzKGluZm8pIHtcbiAgdmFyIG1hdGVyaWFscyA9IFtdO1xuXG4gIGluZm8uZm9yRWFjaChmdW5jdGlvbihpKXtcbiAgICBpLm5hbWUgPSBpLm1hdGVyaWFsO1xuICAgIGRlbGV0ZSBpLm1hdGVyaWFsO1xuXG4gICAgaS51bml0cyA9IGkudW5pdDtcbiAgICBkZWxldGUgaS51bml0O1xuXG4gICAgaWYoICFpLnJlcXVpcmVzICkge1xuICAgICAgbWF0ZXJpYWxzLnB1c2goaSk7XG4gICAgICByZXR1cm47XG4gICAgfVxuXG4gICAgaS50eXBlID0gJ2NvbXBsZXgnO1xuICAgIGkubWF0ZXJpYWxzID0ge307XG5cbiAgICBmb3IoIHZhciBqID0gMDsgaiA8IGkucmVxdWlyZXMubGVuZ3RoOyBqKysgKSB7XG4gICAgICBpLm1hdGVyaWFsc1tpLnJlcXVpcmVzW2pdLm1hdGVyaWFsXSA9IHtcbiAgICAgICAgYW1vdW50IDogaS5yZXF1aXJlc1tqXS5hbW91bnQsXG4gICAgICAgIG9yaWdpbmFsQW1vdW50IDogaS5yZXF1aXJlc1tqXS5hbW91bnQsXG4gICAgICAgIHVuaXRzIDogaS5yZXF1aXJlc1tqXS51bml0XG4gICAgICB9O1xuICAgIH1cblxuICAgIGRlbGV0ZSBpLnJlcXVpcmVzO1xuXG4gICAgbWF0ZXJpYWxzLnB1c2goaSk7XG4gIH0pO1xuXG4gIHJldHVybiBtYXRlcmlhbHM7XG59XG5cbmZ1bmN0aW9uIGdldE9wZXJhdGlvbnMoaW5mbykge1xuICB2YXIgb3BzID0gW107XG5cbiAgaW5mby5mb3JFYWNoKGZ1bmN0aW9uKGkpe1xuICAgIHZhciBvcCA9IHtcbiAgICAgIG5hbWUgOiBpLm9wZXJhdGlvbixcbiAgICAgIG1hdGVyaWFscyA6IHt9LFxuICAgICAgc2NoZWR1bGUgOiBbXVxuICAgIH07XG5cbiAgICBmb3IoIHZhciBqID0gMDsgaiA8IGkubWF0ZXJpYWxzLmxlbmd0aDsgaisrICkge1xuICAgICAgb3AubWF0ZXJpYWxzW2kubWF0ZXJpYWxzW2pdLm1hdGVyaWFsXSA9IGkubWF0ZXJpYWxzW2pdO1xuICAgIH1cblxuICAgIG9wcy5wdXNoKG9wKTtcbiAgfSk7XG5cbiAgcmV0dXJuIG9wcztcbn1cblxuZnVuY3Rpb24gZ2V0RmFybShpbmZvKSB7XG4gIHZhciBmYXJtID0ge307XG4gIGZvciggdmFyIGtleSBpbiBpbmZvICkge1xuICAgIGlmKCB0eXBlb2YgaW5mb1trZXldID09PSAnc3RyaW5nJyApIHtcbiAgICAgIGZhcm1ba2V5XSA9IGluZm9ba2V5XTtcbiAgICB9XG4gIH1cbiAgcmV0dXJuIGZhcm07XG59XG5cbmZ1bmN0aW9uIGdldENsYXNzZXMobWF0ZXJpYWxzKSB7XG4gIHZhciBjbGFzc2VzID0ge307XG5cbiAgbWF0ZXJpYWxzLmZvckVhY2goZnVuY3Rpb24obWF0ZXJpYWwpe1xuICAgIGlmKCBjbGFzc2VzW21hdGVyaWFsLmNsYXNzXSApIHtcbiAgICAgIGNsYXNzZXNbbWF0ZXJpYWwuY2xhc3NdLnB1c2gobWF0ZXJpYWwubmFtZSk7XG4gICAgfSBlbHNlIHtcbiAgICAgIGNsYXNzZXNbbWF0ZXJpYWwuY2xhc3NdID0gW21hdGVyaWFsLm5hbWVdO1xuICAgIH1cbiAgfSk7XG5cbiAgcmV0dXJuIGNsYXNzZXM7XG59XG4iLCIvKipcbiAqIGhlbHBlciBmaWxlIGZvciB0aGluZ3MgbGlrZSBVSSBzZWxlY3RvcnNcbiAqKi9cblxudmFyIHRpbWUgPSBbXG4gIHtcbiAgICBuYW1lIDogJ21pbnV0ZScsXG4gICAgc3ltYm9sIDogJ21pbidcbiAgfSxcbiAge1xuICAgIG5hbWUgOiAnaG91cicsXG4gICAgc3ltYm9sIDogJ2gnXG4gIH0sXG4gIHtcbiAgICBuYW1lIDogJ2RheScsXG4gICAgc3ltYm9sIDogJ2QnXG4gIH0sXG4gIHtcbiAgICBuYW1lIDogJ3llYXInLFxuICAgIHN5bWJvbCA6ICdhJ1xuICB9XG5dO1xuXG52YXIgbGVuZ3RoID0gW1xuICB7XG4gICAgbmFtZSA6ICdjZW50aW1ldGVyJyxcbiAgICBzeW1ib2wgOiAnY20nLFxuICB9LFxuICB7XG4gICAgbmFtZSA6ICdpbmNoJyxcbiAgICBzeW1ib2wgOiAnW2luX3VzXScsXG4gICAgYWNjZXB0ZWQgOiBbJ2luJ11cbiAgfSxcbiAge1xuICAgIG5hbWUgOiAnZm9vdCcsXG4gICAgc3ltYm9sIDogJ1tmdF91c10nLFxuICAgIGFjY2VwdGVkIDogWydmdCddXG4gIH0sXG4gIHtcbiAgICBuYW1lIDogJ21ldGVyJyxcbiAgICBzeW1ib2wgOiAnbScsXG4gIH0sXG4gIHtcbiAgICBuYW1lIDogJ3lhcmQnLFxuICAgIHN5bWJvbCA6ICdbeWRfdXNdJyxcbiAgICBhY2NlcHRlZCA6IFsneWQnXVxuICB9LFxuICB7XG4gICAgbmFtZSA6ICdtaWxlJyxcbiAgICBzeW1ib2wgOiAnW21pX3VzXScsXG4gICAgYWNjZXB0ZWQgOiBbJ21pJ11cbiAgfSxcbiAge1xuICAgIG5hbWUgOiAna2lsb21ldGVyJyxcbiAgICBzeW1ib2wgOiAna20nLFxuICB9XG5dO1xuXG52YXIgYXJlYSA9IFtcbiAge1xuICAgIG5hbWUgOiAnaGVjdGFyZScsXG4gICAgc3ltYm9sIDogJ2hhcicsXG4gICAgYWNjZXB0IDogWydhciddXG4gIH0sXG4gIHtcbiAgICBuYW1lIDogJ2FjcmUnLFxuICAgIHN5bWJvbCA6ICdbYWNyX3VzXScsXG4gICAgYWNjZXB0ZWQgOiBbJ2FjJ11cbiAgfVxuXTtcblxudmFyIHdlaWdodCA9IFtcbiAge1xuICAgIG5hbWUgOiAnb3VuY2UnLFxuICAgIHN5bWJvbCA6ICdbb3pfYXZdJyxcbiAgICBhY2NlcHRlZCA6IFsnb3onXVxuICB9LFxuICB7XG4gICAgbmFtZSA6ICdwb3VuZCcsXG4gICAgc3ltYm9sIDogJ1tsYl9hdl0nLFxuICAgIGFjY2VwdGVkIDogWydsYiddXG4gIH1cbl07XG5cbnZhciB2b2x1bWUgPSBbXG4gIHtcbiAgICBuYW1lIDogJ2N1cCcsXG4gICAgc3ltYm9sIDogJ1tjdXBfdXNdJ1xuICB9LFxuICB7XG4gICAgbmFtZSA6ICdxdWFydCcsXG4gICAgc3ltYm9sIDogJ1txdF91c10nLFxuICAgIGFjY2VwdGVkIDogWydxdCddXG4gIH0sXG4gIHtcbiAgICBuYW1lIDogJ3BpbnQnLFxuICAgIHN5bWJvbCA6ICdbcHRfdXNdJyxcbiAgICBhY2NlcHRlZCA6IFsncHQnXVxuICB9LFxuICB7XG4gICAgbmFtZSA6ICdnYWxsb24nLFxuICAgIHN5bWJvbCA6ICdbZ2FsX3VzXScsXG4gICAgYWNjZXB0ZWQgOiBbJ2dhbCddXG4gIH1cbl07XG5cbnZhciBwcmljZSA9IFtcbiAge1xuICAgIG5hbWUgOiAnZG9sbGFyJyxcbiAgICBzeW1ib2wgOiAnJyxcbiAgICBhY2NlcHRlZCA6IFsnJCcsICd1cyQnXVxuICB9XG5dO1xuXG5tb2R1bGUuZXhwb3J0cyA9IHtcbiAgcHJpY2UgOiBwcmljZSxcbiAgdm9sdW1lIDogdm9sdW1lLFxuICB3ZWlnaHQgOiB3ZWlnaHQsXG4gIHRpbWUgOiB0aW1lLFxuICBsZW5ndGggOiBsZW5ndGgsXG4gIGFyZWEgOiBhcmVhXG59XG4iLCIndXNlIHN0cmljdCc7XG5cbnZhciBkZWZpbml0aW9ucyA9IHJlcXVpcmUoJy4vZGVmaW5pdGlvbnMnKTtcbnZhciBtYXRoID0gcmVxdWlyZSgnLi4vbW9kZWwvdW5pdF9tYXRoJyk7XG52YXIgdWN1bSA9IHJlcXVpcmUoJ3VjdW0uanMnKTtcblxudmFyIGxvb2t1cCA9IHt9O1xuZm9yKCB2YXIgdHlwZSBpbiBkZWZpbml0aW9ucyApIHtcbiAgdmFyIGFycmF5ID0gZGVmaW5pdGlvbnNbdHlwZV07XG5cbiAgZm9yKCB2YXIgaSA9IDA7IGkgPCBhcnJheS5sZW5ndGg7IGkrKyApIHtcbiAgICBhcnJheVtpXS50eXBlID0gdHlwZTtcblxuICAgIGxvb2t1cFthcnJheVtpXS5uYW1lXSA9IGFycmF5W2ldO1xuICAgIGlmKCBhcnJheVtpXS5zeW1ib2wgKSB7XG4gICAgICBsb29rdXBbYXJyYXlbaV0uc3ltYm9sXSA9IGFycmF5W2ldO1xuICAgIH1cbiAgICBpZiggYXJyYXlbaV0uYWNjZXB0ZWQgKSB7XG4gICAgICBmb3IoIHZhciBqID0gMDsgaiA8IGFycmF5W2ldLmFjY2VwdGVkLmxlbmd0aDsgaisrICkge1xuICAgICAgICBsb29rdXBbYXJyYXlbaV0uYWNjZXB0ZWRbal1dID0gYXJyYXlbaV07XG4gICAgICB9XG4gICAgfVxuICB9XG59XG5cbi8vIGdldCBsYWJlbCBmb3IgbmFtZS4gIG1vc3RseSBmb3IgZ2V0dGluZyB1cyQgYXMgJCBvciBbdXNfZ2FsXSBhcyBnYWxsb24uXG5mdW5jdGlvbiBnZXRMYWJlbChuYW1lLCBzaG9ydCkge1xuICB2YXIgcGFydHMsIGxhYmVsO1xuXG4gIGlmKCBuYW1lLmluZGV4T2YoJy8nKSA+IC0xICkge1xuICAgIHBhcnRzID0gbmFtZS5zcGxpdCgnLycpO1xuXG4gICAgbGFiZWwgPSBbXTtcbiAgICBwYXJ0cy5mb3JFYWNoKGZ1bmN0aW9uKHApe1xuICAgICAgbGFiZWwucHVzaChnZXRMYWJlbChwLCBzaG9ydCkpO1xuICAgIH0pO1xuXG4gICAgcmV0dXJuIGxhYmVsLmpvaW4oJy8nKTtcbiAgfVxuXG4gIGlmKCBuYW1lLmluZGV4T2YoJy4nKSA+IC0xICkge1xuICAgIHBhcnRzID0gbmFtZS5zcGxpdCgnLicpO1xuXG4gICAgbGFiZWwgPSBbXTtcbiAgICBwYXJ0cy5mb3JFYWNoKGZ1bmN0aW9uKHApe1xuICAgICAgbGFiZWwucHVzaChnZXRMYWJlbChwLCBzaG9ydCkpO1xuICAgIH0pO1xuXG4gICAgcmV0dXJuIGxhYmVsLmpvaW4oJyonKTtcbiAgfVxuXG4gIHZhciB0eHQgPSBuYW1lLnRvTG93ZXJDYXNlKCk7XG4gIGlmKCBsb29rdXBbdHh0XSApIHtcbiAgICBpZiggc2hvcnQgKSB7XG4gICAgICByZXR1cm4gbG9va3VwW3R4dF0uYWNjZXB0ZWQgPyBsb29rdXBbdHh0XS5hY2NlcHRlZFswXSA6IGxvb2t1cFt0eHRdLnN5bWJvbDtcbiAgICB9XG4gICAgcmV0dXJuIGxvb2t1cFt0eHRdLm5hbWU7XG4gIH1cbiAgcmV0dXJuIG5hbWU7XG59XG5cbi8vIGdldCB1bml0cyBvZiBzYW1lIHR5cGVcbmZ1bmN0aW9uIGdldExpa2VVbml0cyhuYW1lKSB7XG4gIHZhciB0eHQgPSBuYW1lLnRvTG93ZXJDYXNlKCk7XG4gIGlmKCAhbG9va3VwW3R4dF0gKSB7XG4gICAgcmV0dXJuIFtdO1xuICB9XG5cbiAgcmV0dXJuIGRlZmluaXRpb25zW2xvb2t1cFt0eHRdLnR5cGVdO1xufVxuXG5mdW5jdGlvbiBjYWxjdWxhdGVDb21wbGV4UHJpY2UobWF0ZXJpYWxEZWYsIG1hdGVyaWFsSW1wbCwgY29tcGxleE1hdGVyaWFsKSB7XG4gIHZhciB1bml0cyA9IG1hdGVyaWFsSW1wbC51bml0cztcblxuXG4gIHZhciBjb252ZXJ0ID0gY29udmVydFVuaXRzKG1hdGVyaWFsSW1wbC51bml0cywgY29tcGxleE1hdGVyaWFsLnVuaXRzLCBtYXRlcmlhbERlZi51bml0cyk7XG4gIGlmKCBjb252ZXJ0LmVycm9yICkge1xuICAgIHJldHVybiBjb252ZXJ0O1xuICB9IGVsc2UgaWYoIE9iamVjdC5rZXlzKGNvbnZlcnQudW5pdHMpLmxlbmd0aCA+IDEgKSB7XG4gICAgcmV0dXJuIHtcbiAgICAgIGVycm9yOiB0cnVlLFxuICAgICAgbWVzc2FnZSA6ICdVbml0cyBkaWRuXFwndCBjYW5jZWwnLFxuICAgICAgbWF0aCA6IG1hdGVyaWFsSW1wbC51bml0cysnICogJytjb21wbGV4TWF0ZXJpYWwudW5pdHMrJyAqICcrbWF0ZXJpYWxEZWYudW5pdHNcbiAgICB9O1xuICB9XG5cbiAgY29udmVydC5kZWJ1ZzIgPSBtYXRlcmlhbEltcGwuYW1vdW50KycgKiAnK21hdGVyaWFsRGVmLnByaWNlKycgKiAnK2NvbnZlcnQudmFsdWU7XG4gIGNvbnZlcnQudmFsdWUgPSBtYXRlcmlhbEltcGwuYW1vdW50ICogbWF0ZXJpYWxEZWYucHJpY2UgKiBjb252ZXJ0LnZhbHVlO1xuXG5cbiAgaWYoIGNvbXBsZXhNYXRlcmlhbC5uYW1lID09PSAnaG9laW5nJyApIHtcbiAgICBjb25zb2xlLmxvZyhjb252ZXJ0KTtcbiAgfVxuXG4gIHJldHVybiBjb252ZXJ0O1xufVxuXG5mdW5jdGlvbiBjb252ZXJ0VW5pdHModTEsIHUyLCB1Mykge1xuICB0cnkge1xuICAgIHZhciB0ID0gIHVjdW0uY2Fub25pY2FsaXplKCcoJyttYXRoLmNsZWFuRG9sbGFycyh1MSkrJykuKCcrIG1hdGguY2xlYW5Eb2xsYXJzKHUyKSsnKS4oJyttYXRoLmNsZWFuRG9sbGFycyh1MykrJyknKTtcbiAgICB0LmRlYnVnID0gJygnK21hdGguY2xlYW5Eb2xsYXJzKHUxKSsnKS4oJysgbWF0aC5jbGVhbkRvbGxhcnModTIpKycpLignK21hdGguY2xlYW5Eb2xsYXJzKHUzKSsnKSc7XG4gICAgcmV0dXJuIHQ7XG4gIH0gY2F0Y2goZSkge1xuICAgIHJldHVybiB7XG4gICAgICBlcnJvciA6IHRydWUsXG4gICAgICBtZXNzYWdlIDogJ1VuYWJsZSB0byBjb252ZXJ0IHVuaXRzJyxcbiAgICAgIG1hdGggOiB1MSsnICogJyt1MisnICogJyt1MyxcbiAgICAgIGRlYnVnIDogJygnK21hdGguY2xlYW5Eb2xsYXJzKHUxKSsnKS4oJysgbWF0aC5jbGVhbkRvbGxhcnModTIpKycpLignK21hdGguY2xlYW5Eb2xsYXJzKHUzKSsnKSdcbiAgICB9O1xuICB9XG59XG5cblxubW9kdWxlLmV4cG9ydHMgPSB7XG4gIGdldExhYmVsIDogZ2V0TGFiZWwsXG4gIGdldExpa2VVbml0cyA6IGdldExpa2VVbml0cyxcbiAgbWF0aCA6IG1hdGgsXG4gIGNhbGN1bGF0ZUNvbXBsZXhQcmljZSA6IGNhbGN1bGF0ZUNvbXBsZXhQcmljZSxcbiAgbG9va3VwIDogbG9va3VwXG59O1xuIiwiLy8gQ29weXJpZ2h0IEpveWVudCwgSW5jLiBhbmQgb3RoZXIgTm9kZSBjb250cmlidXRvcnMuXG4vL1xuLy8gUGVybWlzc2lvbiBpcyBoZXJlYnkgZ3JhbnRlZCwgZnJlZSBvZiBjaGFyZ2UsIHRvIGFueSBwZXJzb24gb2J0YWluaW5nIGFcbi8vIGNvcHkgb2YgdGhpcyBzb2Z0d2FyZSBhbmQgYXNzb2NpYXRlZCBkb2N1bWVudGF0aW9uIGZpbGVzICh0aGVcbi8vIFwiU29mdHdhcmVcIiksIHRvIGRlYWwgaW4gdGhlIFNvZnR3YXJlIHdpdGhvdXQgcmVzdHJpY3Rpb24sIGluY2x1ZGluZ1xuLy8gd2l0aG91dCBsaW1pdGF0aW9uIHRoZSByaWdodHMgdG8gdXNlLCBjb3B5LCBtb2RpZnksIG1lcmdlLCBwdWJsaXNoLFxuLy8gZGlzdHJpYnV0ZSwgc3VibGljZW5zZSwgYW5kL29yIHNlbGwgY29waWVzIG9mIHRoZSBTb2Z0d2FyZSwgYW5kIHRvIHBlcm1pdFxuLy8gcGVyc29ucyB0byB3aG9tIHRoZSBTb2Z0d2FyZSBpcyBmdXJuaXNoZWQgdG8gZG8gc28sIHN1YmplY3QgdG8gdGhlXG4vLyBmb2xsb3dpbmcgY29uZGl0aW9uczpcbi8vXG4vLyBUaGUgYWJvdmUgY29weXJpZ2h0IG5vdGljZSBhbmQgdGhpcyBwZXJtaXNzaW9uIG5vdGljZSBzaGFsbCBiZSBpbmNsdWRlZFxuLy8gaW4gYWxsIGNvcGllcyBvciBzdWJzdGFudGlhbCBwb3J0aW9ucyBvZiB0aGUgU29mdHdhcmUuXG4vL1xuLy8gVEhFIFNPRlRXQVJFIElTIFBST1ZJREVEIFwiQVMgSVNcIiwgV0lUSE9VVCBXQVJSQU5UWSBPRiBBTlkgS0lORCwgRVhQUkVTU1xuLy8gT1IgSU1QTElFRCwgSU5DTFVESU5HIEJVVCBOT1QgTElNSVRFRCBUTyBUSEUgV0FSUkFOVElFUyBPRlxuLy8gTUVSQ0hBTlRBQklMSVRZLCBGSVRORVNTIEZPUiBBIFBBUlRJQ1VMQVIgUFVSUE9TRSBBTkQgTk9OSU5GUklOR0VNRU5ULiBJTlxuLy8gTk8gRVZFTlQgU0hBTEwgVEhFIEFVVEhPUlMgT1IgQ09QWVJJR0hUIEhPTERFUlMgQkUgTElBQkxFIEZPUiBBTlkgQ0xBSU0sXG4vLyBEQU1BR0VTIE9SIE9USEVSIExJQUJJTElUWSwgV0hFVEhFUiBJTiBBTiBBQ1RJT04gT0YgQ09OVFJBQ1QsIFRPUlQgT1Jcbi8vIE9USEVSV0lTRSwgQVJJU0lORyBGUk9NLCBPVVQgT0YgT1IgSU4gQ09OTkVDVElPTiBXSVRIIFRIRSBTT0ZUV0FSRSBPUiBUSEVcbi8vIFVTRSBPUiBPVEhFUiBERUFMSU5HUyBJTiBUSEUgU09GVFdBUkUuXG5cbmZ1bmN0aW9uIEV2ZW50RW1pdHRlcigpIHtcbiAgdGhpcy5fZXZlbnRzID0gdGhpcy5fZXZlbnRzIHx8IHt9O1xuICB0aGlzLl9tYXhMaXN0ZW5lcnMgPSB0aGlzLl9tYXhMaXN0ZW5lcnMgfHwgdW5kZWZpbmVkO1xufVxubW9kdWxlLmV4cG9ydHMgPSBFdmVudEVtaXR0ZXI7XG5cbi8vIEJhY2t3YXJkcy1jb21wYXQgd2l0aCBub2RlIDAuMTAueFxuRXZlbnRFbWl0dGVyLkV2ZW50RW1pdHRlciA9IEV2ZW50RW1pdHRlcjtcblxuRXZlbnRFbWl0dGVyLnByb3RvdHlwZS5fZXZlbnRzID0gdW5kZWZpbmVkO1xuRXZlbnRFbWl0dGVyLnByb3RvdHlwZS5fbWF4TGlzdGVuZXJzID0gdW5kZWZpbmVkO1xuXG4vLyBCeSBkZWZhdWx0IEV2ZW50RW1pdHRlcnMgd2lsbCBwcmludCBhIHdhcm5pbmcgaWYgbW9yZSB0aGFuIDEwIGxpc3RlbmVycyBhcmVcbi8vIGFkZGVkIHRvIGl0LiBUaGlzIGlzIGEgdXNlZnVsIGRlZmF1bHQgd2hpY2ggaGVscHMgZmluZGluZyBtZW1vcnkgbGVha3MuXG5FdmVudEVtaXR0ZXIuZGVmYXVsdE1heExpc3RlbmVycyA9IDEwO1xuXG4vLyBPYnZpb3VzbHkgbm90IGFsbCBFbWl0dGVycyBzaG91bGQgYmUgbGltaXRlZCB0byAxMC4gVGhpcyBmdW5jdGlvbiBhbGxvd3Ncbi8vIHRoYXQgdG8gYmUgaW5jcmVhc2VkLiBTZXQgdG8gemVybyBmb3IgdW5saW1pdGVkLlxuRXZlbnRFbWl0dGVyLnByb3RvdHlwZS5zZXRNYXhMaXN0ZW5lcnMgPSBmdW5jdGlvbihuKSB7XG4gIGlmICghaXNOdW1iZXIobikgfHwgbiA8IDAgfHwgaXNOYU4obikpXG4gICAgdGhyb3cgVHlwZUVycm9yKCduIG11c3QgYmUgYSBwb3NpdGl2ZSBudW1iZXInKTtcbiAgdGhpcy5fbWF4TGlzdGVuZXJzID0gbjtcbiAgcmV0dXJuIHRoaXM7XG59O1xuXG5FdmVudEVtaXR0ZXIucHJvdG90eXBlLmVtaXQgPSBmdW5jdGlvbih0eXBlKSB7XG4gIHZhciBlciwgaGFuZGxlciwgbGVuLCBhcmdzLCBpLCBsaXN0ZW5lcnM7XG5cbiAgaWYgKCF0aGlzLl9ldmVudHMpXG4gICAgdGhpcy5fZXZlbnRzID0ge307XG5cbiAgLy8gSWYgdGhlcmUgaXMgbm8gJ2Vycm9yJyBldmVudCBsaXN0ZW5lciB0aGVuIHRocm93LlxuICBpZiAodHlwZSA9PT0gJ2Vycm9yJykge1xuICAgIGlmICghdGhpcy5fZXZlbnRzLmVycm9yIHx8XG4gICAgICAgIChpc09iamVjdCh0aGlzLl9ldmVudHMuZXJyb3IpICYmICF0aGlzLl9ldmVudHMuZXJyb3IubGVuZ3RoKSkge1xuICAgICAgZXIgPSBhcmd1bWVudHNbMV07XG4gICAgICBpZiAoZXIgaW5zdGFuY2VvZiBFcnJvcikge1xuICAgICAgICB0aHJvdyBlcjsgLy8gVW5oYW5kbGVkICdlcnJvcicgZXZlbnRcbiAgICAgIH1cbiAgICAgIHRocm93IFR5cGVFcnJvcignVW5jYXVnaHQsIHVuc3BlY2lmaWVkIFwiZXJyb3JcIiBldmVudC4nKTtcbiAgICB9XG4gIH1cblxuICBoYW5kbGVyID0gdGhpcy5fZXZlbnRzW3R5cGVdO1xuXG4gIGlmIChpc1VuZGVmaW5lZChoYW5kbGVyKSlcbiAgICByZXR1cm4gZmFsc2U7XG5cbiAgaWYgKGlzRnVuY3Rpb24oaGFuZGxlcikpIHtcbiAgICBzd2l0Y2ggKGFyZ3VtZW50cy5sZW5ndGgpIHtcbiAgICAgIC8vIGZhc3QgY2FzZXNcbiAgICAgIGNhc2UgMTpcbiAgICAgICAgaGFuZGxlci5jYWxsKHRoaXMpO1xuICAgICAgICBicmVhaztcbiAgICAgIGNhc2UgMjpcbiAgICAgICAgaGFuZGxlci5jYWxsKHRoaXMsIGFyZ3VtZW50c1sxXSk7XG4gICAgICAgIGJyZWFrO1xuICAgICAgY2FzZSAzOlxuICAgICAgICBoYW5kbGVyLmNhbGwodGhpcywgYXJndW1lbnRzWzFdLCBhcmd1bWVudHNbMl0pO1xuICAgICAgICBicmVhaztcbiAgICAgIC8vIHNsb3dlclxuICAgICAgZGVmYXVsdDpcbiAgICAgICAgbGVuID0gYXJndW1lbnRzLmxlbmd0aDtcbiAgICAgICAgYXJncyA9IG5ldyBBcnJheShsZW4gLSAxKTtcbiAgICAgICAgZm9yIChpID0gMTsgaSA8IGxlbjsgaSsrKVxuICAgICAgICAgIGFyZ3NbaSAtIDFdID0gYXJndW1lbnRzW2ldO1xuICAgICAgICBoYW5kbGVyLmFwcGx5KHRoaXMsIGFyZ3MpO1xuICAgIH1cbiAgfSBlbHNlIGlmIChpc09iamVjdChoYW5kbGVyKSkge1xuICAgIGxlbiA9IGFyZ3VtZW50cy5sZW5ndGg7XG4gICAgYXJncyA9IG5ldyBBcnJheShsZW4gLSAxKTtcbiAgICBmb3IgKGkgPSAxOyBpIDwgbGVuOyBpKyspXG4gICAgICBhcmdzW2kgLSAxXSA9IGFyZ3VtZW50c1tpXTtcblxuICAgIGxpc3RlbmVycyA9IGhhbmRsZXIuc2xpY2UoKTtcbiAgICBsZW4gPSBsaXN0ZW5lcnMubGVuZ3RoO1xuICAgIGZvciAoaSA9IDA7IGkgPCBsZW47IGkrKylcbiAgICAgIGxpc3RlbmVyc1tpXS5hcHBseSh0aGlzLCBhcmdzKTtcbiAgfVxuXG4gIHJldHVybiB0cnVlO1xufTtcblxuRXZlbnRFbWl0dGVyLnByb3RvdHlwZS5hZGRMaXN0ZW5lciA9IGZ1bmN0aW9uKHR5cGUsIGxpc3RlbmVyKSB7XG4gIHZhciBtO1xuXG4gIGlmICghaXNGdW5jdGlvbihsaXN0ZW5lcikpXG4gICAgdGhyb3cgVHlwZUVycm9yKCdsaXN0ZW5lciBtdXN0IGJlIGEgZnVuY3Rpb24nKTtcblxuICBpZiAoIXRoaXMuX2V2ZW50cylcbiAgICB0aGlzLl9ldmVudHMgPSB7fTtcblxuICAvLyBUbyBhdm9pZCByZWN1cnNpb24gaW4gdGhlIGNhc2UgdGhhdCB0eXBlID09PSBcIm5ld0xpc3RlbmVyXCIhIEJlZm9yZVxuICAvLyBhZGRpbmcgaXQgdG8gdGhlIGxpc3RlbmVycywgZmlyc3QgZW1pdCBcIm5ld0xpc3RlbmVyXCIuXG4gIGlmICh0aGlzLl9ldmVudHMubmV3TGlzdGVuZXIpXG4gICAgdGhpcy5lbWl0KCduZXdMaXN0ZW5lcicsIHR5cGUsXG4gICAgICAgICAgICAgIGlzRnVuY3Rpb24obGlzdGVuZXIubGlzdGVuZXIpID9cbiAgICAgICAgICAgICAgbGlzdGVuZXIubGlzdGVuZXIgOiBsaXN0ZW5lcik7XG5cbiAgaWYgKCF0aGlzLl9ldmVudHNbdHlwZV0pXG4gICAgLy8gT3B0aW1pemUgdGhlIGNhc2Ugb2Ygb25lIGxpc3RlbmVyLiBEb24ndCBuZWVkIHRoZSBleHRyYSBhcnJheSBvYmplY3QuXG4gICAgdGhpcy5fZXZlbnRzW3R5cGVdID0gbGlzdGVuZXI7XG4gIGVsc2UgaWYgKGlzT2JqZWN0KHRoaXMuX2V2ZW50c1t0eXBlXSkpXG4gICAgLy8gSWYgd2UndmUgYWxyZWFkeSBnb3QgYW4gYXJyYXksIGp1c3QgYXBwZW5kLlxuICAgIHRoaXMuX2V2ZW50c1t0eXBlXS5wdXNoKGxpc3RlbmVyKTtcbiAgZWxzZVxuICAgIC8vIEFkZGluZyB0aGUgc2Vjb25kIGVsZW1lbnQsIG5lZWQgdG8gY2hhbmdlIHRvIGFycmF5LlxuICAgIHRoaXMuX2V2ZW50c1t0eXBlXSA9IFt0aGlzLl9ldmVudHNbdHlwZV0sIGxpc3RlbmVyXTtcblxuICAvLyBDaGVjayBmb3IgbGlzdGVuZXIgbGVha1xuICBpZiAoaXNPYmplY3QodGhpcy5fZXZlbnRzW3R5cGVdKSAmJiAhdGhpcy5fZXZlbnRzW3R5cGVdLndhcm5lZCkge1xuICAgIHZhciBtO1xuICAgIGlmICghaXNVbmRlZmluZWQodGhpcy5fbWF4TGlzdGVuZXJzKSkge1xuICAgICAgbSA9IHRoaXMuX21heExpc3RlbmVycztcbiAgICB9IGVsc2Uge1xuICAgICAgbSA9IEV2ZW50RW1pdHRlci5kZWZhdWx0TWF4TGlzdGVuZXJzO1xuICAgIH1cblxuICAgIGlmIChtICYmIG0gPiAwICYmIHRoaXMuX2V2ZW50c1t0eXBlXS5sZW5ndGggPiBtKSB7XG4gICAgICB0aGlzLl9ldmVudHNbdHlwZV0ud2FybmVkID0gdHJ1ZTtcbiAgICAgIGNvbnNvbGUuZXJyb3IoJyhub2RlKSB3YXJuaW5nOiBwb3NzaWJsZSBFdmVudEVtaXR0ZXIgbWVtb3J5ICcgK1xuICAgICAgICAgICAgICAgICAgICAnbGVhayBkZXRlY3RlZC4gJWQgbGlzdGVuZXJzIGFkZGVkLiAnICtcbiAgICAgICAgICAgICAgICAgICAgJ1VzZSBlbWl0dGVyLnNldE1heExpc3RlbmVycygpIHRvIGluY3JlYXNlIGxpbWl0LicsXG4gICAgICAgICAgICAgICAgICAgIHRoaXMuX2V2ZW50c1t0eXBlXS5sZW5ndGgpO1xuICAgICAgaWYgKHR5cGVvZiBjb25zb2xlLnRyYWNlID09PSAnZnVuY3Rpb24nKSB7XG4gICAgICAgIC8vIG5vdCBzdXBwb3J0ZWQgaW4gSUUgMTBcbiAgICAgICAgY29uc29sZS50cmFjZSgpO1xuICAgICAgfVxuICAgIH1cbiAgfVxuXG4gIHJldHVybiB0aGlzO1xufTtcblxuRXZlbnRFbWl0dGVyLnByb3RvdHlwZS5vbiA9IEV2ZW50RW1pdHRlci5wcm90b3R5cGUuYWRkTGlzdGVuZXI7XG5cbkV2ZW50RW1pdHRlci5wcm90b3R5cGUub25jZSA9IGZ1bmN0aW9uKHR5cGUsIGxpc3RlbmVyKSB7XG4gIGlmICghaXNGdW5jdGlvbihsaXN0ZW5lcikpXG4gICAgdGhyb3cgVHlwZUVycm9yKCdsaXN0ZW5lciBtdXN0IGJlIGEgZnVuY3Rpb24nKTtcblxuICB2YXIgZmlyZWQgPSBmYWxzZTtcblxuICBmdW5jdGlvbiBnKCkge1xuICAgIHRoaXMucmVtb3ZlTGlzdGVuZXIodHlwZSwgZyk7XG5cbiAgICBpZiAoIWZpcmVkKSB7XG4gICAgICBmaXJlZCA9IHRydWU7XG4gICAgICBsaXN0ZW5lci5hcHBseSh0aGlzLCBhcmd1bWVudHMpO1xuICAgIH1cbiAgfVxuXG4gIGcubGlzdGVuZXIgPSBsaXN0ZW5lcjtcbiAgdGhpcy5vbih0eXBlLCBnKTtcblxuICByZXR1cm4gdGhpcztcbn07XG5cbi8vIGVtaXRzIGEgJ3JlbW92ZUxpc3RlbmVyJyBldmVudCBpZmYgdGhlIGxpc3RlbmVyIHdhcyByZW1vdmVkXG5FdmVudEVtaXR0ZXIucHJvdG90eXBlLnJlbW92ZUxpc3RlbmVyID0gZnVuY3Rpb24odHlwZSwgbGlzdGVuZXIpIHtcbiAgdmFyIGxpc3QsIHBvc2l0aW9uLCBsZW5ndGgsIGk7XG5cbiAgaWYgKCFpc0Z1bmN0aW9uKGxpc3RlbmVyKSlcbiAgICB0aHJvdyBUeXBlRXJyb3IoJ2xpc3RlbmVyIG11c3QgYmUgYSBmdW5jdGlvbicpO1xuXG4gIGlmICghdGhpcy5fZXZlbnRzIHx8ICF0aGlzLl9ldmVudHNbdHlwZV0pXG4gICAgcmV0dXJuIHRoaXM7XG5cbiAgbGlzdCA9IHRoaXMuX2V2ZW50c1t0eXBlXTtcbiAgbGVuZ3RoID0gbGlzdC5sZW5ndGg7XG4gIHBvc2l0aW9uID0gLTE7XG5cbiAgaWYgKGxpc3QgPT09IGxpc3RlbmVyIHx8XG4gICAgICAoaXNGdW5jdGlvbihsaXN0Lmxpc3RlbmVyKSAmJiBsaXN0Lmxpc3RlbmVyID09PSBsaXN0ZW5lcikpIHtcbiAgICBkZWxldGUgdGhpcy5fZXZlbnRzW3R5cGVdO1xuICAgIGlmICh0aGlzLl9ldmVudHMucmVtb3ZlTGlzdGVuZXIpXG4gICAgICB0aGlzLmVtaXQoJ3JlbW92ZUxpc3RlbmVyJywgdHlwZSwgbGlzdGVuZXIpO1xuXG4gIH0gZWxzZSBpZiAoaXNPYmplY3QobGlzdCkpIHtcbiAgICBmb3IgKGkgPSBsZW5ndGg7IGktLSA+IDA7KSB7XG4gICAgICBpZiAobGlzdFtpXSA9PT0gbGlzdGVuZXIgfHxcbiAgICAgICAgICAobGlzdFtpXS5saXN0ZW5lciAmJiBsaXN0W2ldLmxpc3RlbmVyID09PSBsaXN0ZW5lcikpIHtcbiAgICAgICAgcG9zaXRpb24gPSBpO1xuICAgICAgICBicmVhaztcbiAgICAgIH1cbiAgICB9XG5cbiAgICBpZiAocG9zaXRpb24gPCAwKVxuICAgICAgcmV0dXJuIHRoaXM7XG5cbiAgICBpZiAobGlzdC5sZW5ndGggPT09IDEpIHtcbiAgICAgIGxpc3QubGVuZ3RoID0gMDtcbiAgICAgIGRlbGV0ZSB0aGlzLl9ldmVudHNbdHlwZV07XG4gICAgfSBlbHNlIHtcbiAgICAgIGxpc3Quc3BsaWNlKHBvc2l0aW9uLCAxKTtcbiAgICB9XG5cbiAgICBpZiAodGhpcy5fZXZlbnRzLnJlbW92ZUxpc3RlbmVyKVxuICAgICAgdGhpcy5lbWl0KCdyZW1vdmVMaXN0ZW5lcicsIHR5cGUsIGxpc3RlbmVyKTtcbiAgfVxuXG4gIHJldHVybiB0aGlzO1xufTtcblxuRXZlbnRFbWl0dGVyLnByb3RvdHlwZS5yZW1vdmVBbGxMaXN0ZW5lcnMgPSBmdW5jdGlvbih0eXBlKSB7XG4gIHZhciBrZXksIGxpc3RlbmVycztcblxuICBpZiAoIXRoaXMuX2V2ZW50cylcbiAgICByZXR1cm4gdGhpcztcblxuICAvLyBub3QgbGlzdGVuaW5nIGZvciByZW1vdmVMaXN0ZW5lciwgbm8gbmVlZCB0byBlbWl0XG4gIGlmICghdGhpcy5fZXZlbnRzLnJlbW92ZUxpc3RlbmVyKSB7XG4gICAgaWYgKGFyZ3VtZW50cy5sZW5ndGggPT09IDApXG4gICAgICB0aGlzLl9ldmVudHMgPSB7fTtcbiAgICBlbHNlIGlmICh0aGlzLl9ldmVudHNbdHlwZV0pXG4gICAgICBkZWxldGUgdGhpcy5fZXZlbnRzW3R5cGVdO1xuICAgIHJldHVybiB0aGlzO1xuICB9XG5cbiAgLy8gZW1pdCByZW1vdmVMaXN0ZW5lciBmb3IgYWxsIGxpc3RlbmVycyBvbiBhbGwgZXZlbnRzXG4gIGlmIChhcmd1bWVudHMubGVuZ3RoID09PSAwKSB7XG4gICAgZm9yIChrZXkgaW4gdGhpcy5fZXZlbnRzKSB7XG4gICAgICBpZiAoa2V5ID09PSAncmVtb3ZlTGlzdGVuZXInKSBjb250aW51ZTtcbiAgICAgIHRoaXMucmVtb3ZlQWxsTGlzdGVuZXJzKGtleSk7XG4gICAgfVxuICAgIHRoaXMucmVtb3ZlQWxsTGlzdGVuZXJzKCdyZW1vdmVMaXN0ZW5lcicpO1xuICAgIHRoaXMuX2V2ZW50cyA9IHt9O1xuICAgIHJldHVybiB0aGlzO1xuICB9XG5cbiAgbGlzdGVuZXJzID0gdGhpcy5fZXZlbnRzW3R5cGVdO1xuXG4gIGlmIChpc0Z1bmN0aW9uKGxpc3RlbmVycykpIHtcbiAgICB0aGlzLnJlbW92ZUxpc3RlbmVyKHR5cGUsIGxpc3RlbmVycyk7XG4gIH0gZWxzZSB7XG4gICAgLy8gTElGTyBvcmRlclxuICAgIHdoaWxlIChsaXN0ZW5lcnMubGVuZ3RoKVxuICAgICAgdGhpcy5yZW1vdmVMaXN0ZW5lcih0eXBlLCBsaXN0ZW5lcnNbbGlzdGVuZXJzLmxlbmd0aCAtIDFdKTtcbiAgfVxuICBkZWxldGUgdGhpcy5fZXZlbnRzW3R5cGVdO1xuXG4gIHJldHVybiB0aGlzO1xufTtcblxuRXZlbnRFbWl0dGVyLnByb3RvdHlwZS5saXN0ZW5lcnMgPSBmdW5jdGlvbih0eXBlKSB7XG4gIHZhciByZXQ7XG4gIGlmICghdGhpcy5fZXZlbnRzIHx8ICF0aGlzLl9ldmVudHNbdHlwZV0pXG4gICAgcmV0ID0gW107XG4gIGVsc2UgaWYgKGlzRnVuY3Rpb24odGhpcy5fZXZlbnRzW3R5cGVdKSlcbiAgICByZXQgPSBbdGhpcy5fZXZlbnRzW3R5cGVdXTtcbiAgZWxzZVxuICAgIHJldCA9IHRoaXMuX2V2ZW50c1t0eXBlXS5zbGljZSgpO1xuICByZXR1cm4gcmV0O1xufTtcblxuRXZlbnRFbWl0dGVyLmxpc3RlbmVyQ291bnQgPSBmdW5jdGlvbihlbWl0dGVyLCB0eXBlKSB7XG4gIHZhciByZXQ7XG4gIGlmICghZW1pdHRlci5fZXZlbnRzIHx8ICFlbWl0dGVyLl9ldmVudHNbdHlwZV0pXG4gICAgcmV0ID0gMDtcbiAgZWxzZSBpZiAoaXNGdW5jdGlvbihlbWl0dGVyLl9ldmVudHNbdHlwZV0pKVxuICAgIHJldCA9IDE7XG4gIGVsc2VcbiAgICByZXQgPSBlbWl0dGVyLl9ldmVudHNbdHlwZV0ubGVuZ3RoO1xuICByZXR1cm4gcmV0O1xufTtcblxuZnVuY3Rpb24gaXNGdW5jdGlvbihhcmcpIHtcbiAgcmV0dXJuIHR5cGVvZiBhcmcgPT09ICdmdW5jdGlvbic7XG59XG5cbmZ1bmN0aW9uIGlzTnVtYmVyKGFyZykge1xuICByZXR1cm4gdHlwZW9mIGFyZyA9PT0gJ251bWJlcic7XG59XG5cbmZ1bmN0aW9uIGlzT2JqZWN0KGFyZykge1xuICByZXR1cm4gdHlwZW9mIGFyZyA9PT0gJ29iamVjdCcgJiYgYXJnICE9PSBudWxsO1xufVxuXG5mdW5jdGlvbiBpc1VuZGVmaW5lZChhcmcpIHtcbiAgcmV0dXJuIGFyZyA9PT0gdm9pZCAwO1xufVxuIiwiLy8gICAgIHV1aWQuanNcbi8vXG4vLyAgICAgQ29weXJpZ2h0IChjKSAyMDEwLTIwMTIgUm9iZXJ0IEtpZWZmZXJcbi8vICAgICBNSVQgTGljZW5zZSAtIGh0dHA6Ly9vcGVuc291cmNlLm9yZy9saWNlbnNlcy9taXQtbGljZW5zZS5waHBcblxuKGZ1bmN0aW9uKCkge1xuICB2YXIgX2dsb2JhbCA9IHRoaXM7XG5cbiAgLy8gVW5pcXVlIElEIGNyZWF0aW9uIHJlcXVpcmVzIGEgaGlnaCBxdWFsaXR5IHJhbmRvbSAjIGdlbmVyYXRvci4gIFdlIGZlYXR1cmVcbiAgLy8gZGV0ZWN0IHRvIGRldGVybWluZSB0aGUgYmVzdCBSTkcgc291cmNlLCBub3JtYWxpemluZyB0byBhIGZ1bmN0aW9uIHRoYXRcbiAgLy8gcmV0dXJucyAxMjgtYml0cyBvZiByYW5kb21uZXNzLCBzaW5jZSB0aGF0J3Mgd2hhdCdzIHVzdWFsbHkgcmVxdWlyZWRcbiAgdmFyIF9ybmc7XG5cbiAgLy8gTm9kZS5qcyBjcnlwdG8tYmFzZWQgUk5HIC0gaHR0cDovL25vZGVqcy5vcmcvZG9jcy92MC42LjIvYXBpL2NyeXB0by5odG1sXG4gIC8vXG4gIC8vIE1vZGVyYXRlbHkgZmFzdCwgaGlnaCBxdWFsaXR5XG4gIGlmICh0eXBlb2YoX2dsb2JhbC5yZXF1aXJlKSA9PSAnZnVuY3Rpb24nKSB7XG4gICAgdHJ5IHtcbiAgICAgIHZhciBfcmIgPSBfZ2xvYmFsLnJlcXVpcmUoJ2NyeXB0bycpLnJhbmRvbUJ5dGVzO1xuICAgICAgX3JuZyA9IF9yYiAmJiBmdW5jdGlvbigpIHtyZXR1cm4gX3JiKDE2KTt9O1xuICAgIH0gY2F0Y2goZSkge31cbiAgfVxuXG4gIGlmICghX3JuZyAmJiBfZ2xvYmFsLmNyeXB0byAmJiBjcnlwdG8uZ2V0UmFuZG9tVmFsdWVzKSB7XG4gICAgLy8gV0hBVFdHIGNyeXB0by1iYXNlZCBSTkcgLSBodHRwOi8vd2lraS53aGF0d2cub3JnL3dpa2kvQ3J5cHRvXG4gICAgLy9cbiAgICAvLyBNb2RlcmF0ZWx5IGZhc3QsIGhpZ2ggcXVhbGl0eVxuICAgIHZhciBfcm5kczggPSBuZXcgVWludDhBcnJheSgxNik7XG4gICAgX3JuZyA9IGZ1bmN0aW9uIHdoYXR3Z1JORygpIHtcbiAgICAgIGNyeXB0by5nZXRSYW5kb21WYWx1ZXMoX3JuZHM4KTtcbiAgICAgIHJldHVybiBfcm5kczg7XG4gICAgfTtcbiAgfVxuXG4gIGlmICghX3JuZykge1xuICAgIC8vIE1hdGgucmFuZG9tKCktYmFzZWQgKFJORylcbiAgICAvL1xuICAgIC8vIElmIGFsbCBlbHNlIGZhaWxzLCB1c2UgTWF0aC5yYW5kb20oKS4gIEl0J3MgZmFzdCwgYnV0IGlzIG9mIHVuc3BlY2lmaWVkXG4gICAgLy8gcXVhbGl0eS5cbiAgICB2YXIgIF9ybmRzID0gbmV3IEFycmF5KDE2KTtcbiAgICBfcm5nID0gZnVuY3Rpb24oKSB7XG4gICAgICBmb3IgKHZhciBpID0gMCwgcjsgaSA8IDE2OyBpKyspIHtcbiAgICAgICAgaWYgKChpICYgMHgwMykgPT09IDApIHIgPSBNYXRoLnJhbmRvbSgpICogMHgxMDAwMDAwMDA7XG4gICAgICAgIF9ybmRzW2ldID0gciA+Pj4gKChpICYgMHgwMykgPDwgMykgJiAweGZmO1xuICAgICAgfVxuXG4gICAgICByZXR1cm4gX3JuZHM7XG4gICAgfTtcbiAgfVxuXG4gIC8vIEJ1ZmZlciBjbGFzcyB0byB1c2VcbiAgdmFyIEJ1ZmZlckNsYXNzID0gdHlwZW9mKF9nbG9iYWwuQnVmZmVyKSA9PSAnZnVuY3Rpb24nID8gX2dsb2JhbC5CdWZmZXIgOiBBcnJheTtcblxuICAvLyBNYXBzIGZvciBudW1iZXIgPC0+IGhleCBzdHJpbmcgY29udmVyc2lvblxuICB2YXIgX2J5dGVUb0hleCA9IFtdO1xuICB2YXIgX2hleFRvQnl0ZSA9IHt9O1xuICBmb3IgKHZhciBpID0gMDsgaSA8IDI1NjsgaSsrKSB7XG4gICAgX2J5dGVUb0hleFtpXSA9IChpICsgMHgxMDApLnRvU3RyaW5nKDE2KS5zdWJzdHIoMSk7XG4gICAgX2hleFRvQnl0ZVtfYnl0ZVRvSGV4W2ldXSA9IGk7XG4gIH1cblxuICAvLyAqKmBwYXJzZSgpYCAtIFBhcnNlIGEgVVVJRCBpbnRvIGl0J3MgY29tcG9uZW50IGJ5dGVzKipcbiAgZnVuY3Rpb24gcGFyc2UocywgYnVmLCBvZmZzZXQpIHtcbiAgICB2YXIgaSA9IChidWYgJiYgb2Zmc2V0KSB8fCAwLCBpaSA9IDA7XG5cbiAgICBidWYgPSBidWYgfHwgW107XG4gICAgcy50b0xvd2VyQ2FzZSgpLnJlcGxhY2UoL1swLTlhLWZdezJ9L2csIGZ1bmN0aW9uKG9jdCkge1xuICAgICAgaWYgKGlpIDwgMTYpIHsgLy8gRG9uJ3Qgb3ZlcmZsb3chXG4gICAgICAgIGJ1ZltpICsgaWkrK10gPSBfaGV4VG9CeXRlW29jdF07XG4gICAgICB9XG4gICAgfSk7XG5cbiAgICAvLyBaZXJvIG91dCByZW1haW5pbmcgYnl0ZXMgaWYgc3RyaW5nIHdhcyBzaG9ydFxuICAgIHdoaWxlIChpaSA8IDE2KSB7XG4gICAgICBidWZbaSArIGlpKytdID0gMDtcbiAgICB9XG5cbiAgICByZXR1cm4gYnVmO1xuICB9XG5cbiAgLy8gKipgdW5wYXJzZSgpYCAtIENvbnZlcnQgVVVJRCBieXRlIGFycmF5IChhbGEgcGFyc2UoKSkgaW50byBhIHN0cmluZyoqXG4gIGZ1bmN0aW9uIHVucGFyc2UoYnVmLCBvZmZzZXQpIHtcbiAgICB2YXIgaSA9IG9mZnNldCB8fCAwLCBidGggPSBfYnl0ZVRvSGV4O1xuICAgIHJldHVybiAgYnRoW2J1ZltpKytdXSArIGJ0aFtidWZbaSsrXV0gK1xuICAgICAgICAgICAgYnRoW2J1ZltpKytdXSArIGJ0aFtidWZbaSsrXV0gKyAnLScgK1xuICAgICAgICAgICAgYnRoW2J1ZltpKytdXSArIGJ0aFtidWZbaSsrXV0gKyAnLScgK1xuICAgICAgICAgICAgYnRoW2J1ZltpKytdXSArIGJ0aFtidWZbaSsrXV0gKyAnLScgK1xuICAgICAgICAgICAgYnRoW2J1ZltpKytdXSArIGJ0aFtidWZbaSsrXV0gKyAnLScgK1xuICAgICAgICAgICAgYnRoW2J1ZltpKytdXSArIGJ0aFtidWZbaSsrXV0gK1xuICAgICAgICAgICAgYnRoW2J1ZltpKytdXSArIGJ0aFtidWZbaSsrXV0gK1xuICAgICAgICAgICAgYnRoW2J1ZltpKytdXSArIGJ0aFtidWZbaSsrXV07XG4gIH1cblxuICAvLyAqKmB2MSgpYCAtIEdlbmVyYXRlIHRpbWUtYmFzZWQgVVVJRCoqXG4gIC8vXG4gIC8vIEluc3BpcmVkIGJ5IGh0dHBzOi8vZ2l0aHViLmNvbS9MaW9zSy9VVUlELmpzXG4gIC8vIGFuZCBodHRwOi8vZG9jcy5weXRob24ub3JnL2xpYnJhcnkvdXVpZC5odG1sXG5cbiAgLy8gcmFuZG9tICMncyB3ZSBuZWVkIHRvIGluaXQgbm9kZSBhbmQgY2xvY2tzZXFcbiAgdmFyIF9zZWVkQnl0ZXMgPSBfcm5nKCk7XG5cbiAgLy8gUGVyIDQuNSwgY3JlYXRlIGFuZCA0OC1iaXQgbm9kZSBpZCwgKDQ3IHJhbmRvbSBiaXRzICsgbXVsdGljYXN0IGJpdCA9IDEpXG4gIHZhciBfbm9kZUlkID0gW1xuICAgIF9zZWVkQnl0ZXNbMF0gfCAweDAxLFxuICAgIF9zZWVkQnl0ZXNbMV0sIF9zZWVkQnl0ZXNbMl0sIF9zZWVkQnl0ZXNbM10sIF9zZWVkQnl0ZXNbNF0sIF9zZWVkQnl0ZXNbNV1cbiAgXTtcblxuICAvLyBQZXIgNC4yLjIsIHJhbmRvbWl6ZSAoMTQgYml0KSBjbG9ja3NlcVxuICB2YXIgX2Nsb2Nrc2VxID0gKF9zZWVkQnl0ZXNbNl0gPDwgOCB8IF9zZWVkQnl0ZXNbN10pICYgMHgzZmZmO1xuXG4gIC8vIFByZXZpb3VzIHV1aWQgY3JlYXRpb24gdGltZVxuICB2YXIgX2xhc3RNU2VjcyA9IDAsIF9sYXN0TlNlY3MgPSAwO1xuXG4gIC8vIFNlZSBodHRwczovL2dpdGh1Yi5jb20vYnJvb2ZhL25vZGUtdXVpZCBmb3IgQVBJIGRldGFpbHNcbiAgZnVuY3Rpb24gdjEob3B0aW9ucywgYnVmLCBvZmZzZXQpIHtcbiAgICB2YXIgaSA9IGJ1ZiAmJiBvZmZzZXQgfHwgMDtcbiAgICB2YXIgYiA9IGJ1ZiB8fCBbXTtcblxuICAgIG9wdGlvbnMgPSBvcHRpb25zIHx8IHt9O1xuXG4gICAgdmFyIGNsb2Nrc2VxID0gb3B0aW9ucy5jbG9ja3NlcSAhPSBudWxsID8gb3B0aW9ucy5jbG9ja3NlcSA6IF9jbG9ja3NlcTtcblxuICAgIC8vIFVVSUQgdGltZXN0YW1wcyBhcmUgMTAwIG5hbm8tc2Vjb25kIHVuaXRzIHNpbmNlIHRoZSBHcmVnb3JpYW4gZXBvY2gsXG4gICAgLy8gKDE1ODItMTAtMTUgMDA6MDApLiAgSlNOdW1iZXJzIGFyZW4ndCBwcmVjaXNlIGVub3VnaCBmb3IgdGhpcywgc29cbiAgICAvLyB0aW1lIGlzIGhhbmRsZWQgaW50ZXJuYWxseSBhcyAnbXNlY3MnIChpbnRlZ2VyIG1pbGxpc2Vjb25kcykgYW5kICduc2VjcydcbiAgICAvLyAoMTAwLW5hbm9zZWNvbmRzIG9mZnNldCBmcm9tIG1zZWNzKSBzaW5jZSB1bml4IGVwb2NoLCAxOTcwLTAxLTAxIDAwOjAwLlxuICAgIHZhciBtc2VjcyA9IG9wdGlvbnMubXNlY3MgIT0gbnVsbCA/IG9wdGlvbnMubXNlY3MgOiBuZXcgRGF0ZSgpLmdldFRpbWUoKTtcblxuICAgIC8vIFBlciA0LjIuMS4yLCB1c2UgY291bnQgb2YgdXVpZCdzIGdlbmVyYXRlZCBkdXJpbmcgdGhlIGN1cnJlbnQgY2xvY2tcbiAgICAvLyBjeWNsZSB0byBzaW11bGF0ZSBoaWdoZXIgcmVzb2x1dGlvbiBjbG9ja1xuICAgIHZhciBuc2VjcyA9IG9wdGlvbnMubnNlY3MgIT0gbnVsbCA/IG9wdGlvbnMubnNlY3MgOiBfbGFzdE5TZWNzICsgMTtcblxuICAgIC8vIFRpbWUgc2luY2UgbGFzdCB1dWlkIGNyZWF0aW9uIChpbiBtc2VjcylcbiAgICB2YXIgZHQgPSAobXNlY3MgLSBfbGFzdE1TZWNzKSArIChuc2VjcyAtIF9sYXN0TlNlY3MpLzEwMDAwO1xuXG4gICAgLy8gUGVyIDQuMi4xLjIsIEJ1bXAgY2xvY2tzZXEgb24gY2xvY2sgcmVncmVzc2lvblxuICAgIGlmIChkdCA8IDAgJiYgb3B0aW9ucy5jbG9ja3NlcSA9PSBudWxsKSB7XG4gICAgICBjbG9ja3NlcSA9IGNsb2Nrc2VxICsgMSAmIDB4M2ZmZjtcbiAgICB9XG5cbiAgICAvLyBSZXNldCBuc2VjcyBpZiBjbG9jayByZWdyZXNzZXMgKG5ldyBjbG9ja3NlcSkgb3Igd2UndmUgbW92ZWQgb250byBhIG5ld1xuICAgIC8vIHRpbWUgaW50ZXJ2YWxcbiAgICBpZiAoKGR0IDwgMCB8fCBtc2VjcyA+IF9sYXN0TVNlY3MpICYmIG9wdGlvbnMubnNlY3MgPT0gbnVsbCkge1xuICAgICAgbnNlY3MgPSAwO1xuICAgIH1cblxuICAgIC8vIFBlciA0LjIuMS4yIFRocm93IGVycm9yIGlmIHRvbyBtYW55IHV1aWRzIGFyZSByZXF1ZXN0ZWRcbiAgICBpZiAobnNlY3MgPj0gMTAwMDApIHtcbiAgICAgIHRocm93IG5ldyBFcnJvcigndXVpZC52MSgpOiBDYW5cXCd0IGNyZWF0ZSBtb3JlIHRoYW4gMTBNIHV1aWRzL3NlYycpO1xuICAgIH1cblxuICAgIF9sYXN0TVNlY3MgPSBtc2VjcztcbiAgICBfbGFzdE5TZWNzID0gbnNlY3M7XG4gICAgX2Nsb2Nrc2VxID0gY2xvY2tzZXE7XG5cbiAgICAvLyBQZXIgNC4xLjQgLSBDb252ZXJ0IGZyb20gdW5peCBlcG9jaCB0byBHcmVnb3JpYW4gZXBvY2hcbiAgICBtc2VjcyArPSAxMjIxOTI5MjgwMDAwMDtcblxuICAgIC8vIGB0aW1lX2xvd2BcbiAgICB2YXIgdGwgPSAoKG1zZWNzICYgMHhmZmZmZmZmKSAqIDEwMDAwICsgbnNlY3MpICUgMHgxMDAwMDAwMDA7XG4gICAgYltpKytdID0gdGwgPj4+IDI0ICYgMHhmZjtcbiAgICBiW2krK10gPSB0bCA+Pj4gMTYgJiAweGZmO1xuICAgIGJbaSsrXSA9IHRsID4+PiA4ICYgMHhmZjtcbiAgICBiW2krK10gPSB0bCAmIDB4ZmY7XG5cbiAgICAvLyBgdGltZV9taWRgXG4gICAgdmFyIHRtaCA9IChtc2VjcyAvIDB4MTAwMDAwMDAwICogMTAwMDApICYgMHhmZmZmZmZmO1xuICAgIGJbaSsrXSA9IHRtaCA+Pj4gOCAmIDB4ZmY7XG4gICAgYltpKytdID0gdG1oICYgMHhmZjtcblxuICAgIC8vIGB0aW1lX2hpZ2hfYW5kX3ZlcnNpb25gXG4gICAgYltpKytdID0gdG1oID4+PiAyNCAmIDB4ZiB8IDB4MTA7IC8vIGluY2x1ZGUgdmVyc2lvblxuICAgIGJbaSsrXSA9IHRtaCA+Pj4gMTYgJiAweGZmO1xuXG4gICAgLy8gYGNsb2NrX3NlcV9oaV9hbmRfcmVzZXJ2ZWRgIChQZXIgNC4yLjIgLSBpbmNsdWRlIHZhcmlhbnQpXG4gICAgYltpKytdID0gY2xvY2tzZXEgPj4+IDggfCAweDgwO1xuXG4gICAgLy8gYGNsb2NrX3NlcV9sb3dgXG4gICAgYltpKytdID0gY2xvY2tzZXEgJiAweGZmO1xuXG4gICAgLy8gYG5vZGVgXG4gICAgdmFyIG5vZGUgPSBvcHRpb25zLm5vZGUgfHwgX25vZGVJZDtcbiAgICBmb3IgKHZhciBuID0gMDsgbiA8IDY7IG4rKykge1xuICAgICAgYltpICsgbl0gPSBub2RlW25dO1xuICAgIH1cblxuICAgIHJldHVybiBidWYgPyBidWYgOiB1bnBhcnNlKGIpO1xuICB9XG5cbiAgLy8gKipgdjQoKWAgLSBHZW5lcmF0ZSByYW5kb20gVVVJRCoqXG5cbiAgLy8gU2VlIGh0dHBzOi8vZ2l0aHViLmNvbS9icm9vZmEvbm9kZS11dWlkIGZvciBBUEkgZGV0YWlsc1xuICBmdW5jdGlvbiB2NChvcHRpb25zLCBidWYsIG9mZnNldCkge1xuICAgIC8vIERlcHJlY2F0ZWQgLSAnZm9ybWF0JyBhcmd1bWVudCwgYXMgc3VwcG9ydGVkIGluIHYxLjJcbiAgICB2YXIgaSA9IGJ1ZiAmJiBvZmZzZXQgfHwgMDtcblxuICAgIGlmICh0eXBlb2Yob3B0aW9ucykgPT0gJ3N0cmluZycpIHtcbiAgICAgIGJ1ZiA9IG9wdGlvbnMgPT0gJ2JpbmFyeScgPyBuZXcgQnVmZmVyQ2xhc3MoMTYpIDogbnVsbDtcbiAgICAgIG9wdGlvbnMgPSBudWxsO1xuICAgIH1cbiAgICBvcHRpb25zID0gb3B0aW9ucyB8fCB7fTtcblxuICAgIHZhciBybmRzID0gb3B0aW9ucy5yYW5kb20gfHwgKG9wdGlvbnMucm5nIHx8IF9ybmcpKCk7XG5cbiAgICAvLyBQZXIgNC40LCBzZXQgYml0cyBmb3IgdmVyc2lvbiBhbmQgYGNsb2NrX3NlcV9oaV9hbmRfcmVzZXJ2ZWRgXG4gICAgcm5kc1s2XSA9IChybmRzWzZdICYgMHgwZikgfCAweDQwO1xuICAgIHJuZHNbOF0gPSAocm5kc1s4XSAmIDB4M2YpIHwgMHg4MDtcblxuICAgIC8vIENvcHkgYnl0ZXMgdG8gYnVmZmVyLCBpZiBwcm92aWRlZFxuICAgIGlmIChidWYpIHtcbiAgICAgIGZvciAodmFyIGlpID0gMDsgaWkgPCAxNjsgaWkrKykge1xuICAgICAgICBidWZbaSArIGlpXSA9IHJuZHNbaWldO1xuICAgICAgfVxuICAgIH1cblxuICAgIHJldHVybiBidWYgfHwgdW5wYXJzZShybmRzKTtcbiAgfVxuXG4gIC8vIEV4cG9ydCBwdWJsaWMgQVBJXG4gIHZhciB1dWlkID0gdjQ7XG4gIHV1aWQudjEgPSB2MTtcbiAgdXVpZC52NCA9IHY0O1xuICB1dWlkLnBhcnNlID0gcGFyc2U7XG4gIHV1aWQudW5wYXJzZSA9IHVucGFyc2U7XG4gIHV1aWQuQnVmZmVyQ2xhc3MgPSBCdWZmZXJDbGFzcztcblxuICBpZiAodHlwZW9mKG1vZHVsZSkgIT0gJ3VuZGVmaW5lZCcgJiYgbW9kdWxlLmV4cG9ydHMpIHtcbiAgICAvLyBQdWJsaXNoIGFzIG5vZGUuanMgbW9kdWxlXG4gICAgbW9kdWxlLmV4cG9ydHMgPSB1dWlkO1xuICB9IGVsc2UgIGlmICh0eXBlb2YgZGVmaW5lID09PSAnZnVuY3Rpb24nICYmIGRlZmluZS5hbWQpIHtcbiAgICAvLyBQdWJsaXNoIGFzIEFNRCBtb2R1bGVcbiAgICBkZWZpbmUoZnVuY3Rpb24oKSB7cmV0dXJuIHV1aWQ7fSk7XG4gXG5cbiAgfSBlbHNlIHtcbiAgICAvLyBQdWJsaXNoIGFzIGdsb2JhbCAoaW4gYnJvd3NlcnMpXG4gICAgdmFyIF9wcmV2aW91c1Jvb3QgPSBfZ2xvYmFsLnV1aWQ7XG5cbiAgICAvLyAqKmBub0NvbmZsaWN0KClgIC0gKGJyb3dzZXIgb25seSkgdG8gcmVzZXQgZ2xvYmFsICd1dWlkJyB2YXIqKlxuICAgIHV1aWQubm9Db25mbGljdCA9IGZ1bmN0aW9uKCkge1xuICAgICAgX2dsb2JhbC51dWlkID0gX3ByZXZpb3VzUm9vdDtcbiAgICAgIHJldHVybiB1dWlkO1xuICAgIH07XG5cbiAgICBfZ2xvYmFsLnV1aWQgPSB1dWlkO1xuICB9XG59KS5jYWxsKHRoaXMpO1xuIiwibW9kdWxlLmV4cG9ydHM9e1xuICBcIjEwKlwiOiB7XG4gICAgXCJ2YWx1ZVwiOiAxMCxcbiAgICBcInVjdW1cIjogXCIxXCJcbiAgfSxcbiAgXCIxMF5cIjoge1xuICAgIFwidmFsdWVcIjogMTAsXG4gICAgXCJ1Y3VtXCI6IFwiMVwiXG4gIH0sXG4gIFwiW3BpXVwiOiB7XG4gICAgXCJ2YWx1ZVwiOiAzLjE0MTU5MjY1MzU4OTc5MyxcbiAgICBcInVjdW1cIjogXCIxXCJcbiAgfSxcbiAgXCIlXCI6IHtcbiAgICBcInZhbHVlXCI6IDEsXG4gICAgXCJ1Y3VtXCI6IFwiMTAqLTJcIlxuICB9LFxuICBcIltwcHRoXVwiOiB7XG4gICAgXCJ2YWx1ZVwiOiAxLFxuICAgIFwidWN1bVwiOiBcIjEwKi0zXCJcbiAgfSxcbiAgXCJbcHBtXVwiOiB7XG4gICAgXCJ2YWx1ZVwiOiAxLFxuICAgIFwidWN1bVwiOiBcIjEwKi02XCJcbiAgfSxcbiAgXCJbcHBiXVwiOiB7XG4gICAgXCJ2YWx1ZVwiOiAxLFxuICAgIFwidWN1bVwiOiBcIjEwKi05XCJcbiAgfSxcbiAgXCJbcHB0cl1cIjoge1xuICAgIFwidmFsdWVcIjogMSxcbiAgICBcInVjdW1cIjogXCIxMCotMTJcIlxuICB9LFxuICBcIm1vbFwiOiB7XG4gICAgXCJ2YWx1ZVwiOiA2LjAyMjEzNjcsXG4gICAgXCJ1Y3VtXCI6IFwiMTAqMjNcIlxuICB9LFxuICBcInNyXCI6IHtcbiAgICBcInZhbHVlXCI6IDEsXG4gICAgXCJ1Y3VtXCI6IFwicmFkMlwiXG4gIH0sXG4gIFwiSHpcIjoge1xuICAgIFwidmFsdWVcIjogMSxcbiAgICBcInVjdW1cIjogXCJzLTFcIlxuICB9LFxuICBcIk5cIjoge1xuICAgIFwidmFsdWVcIjogMSxcbiAgICBcInVjdW1cIjogXCJrZy5tL3MyXCJcbiAgfSxcbiAgXCJQYVwiOiB7XG4gICAgXCJ2YWx1ZVwiOiAxLFxuICAgIFwidWN1bVwiOiBcIk4vbTJcIlxuICB9LFxuICBcIkpcIjoge1xuICAgIFwidmFsdWVcIjogMSxcbiAgICBcInVjdW1cIjogXCJOLm1cIlxuICB9LFxuICBcIldcIjoge1xuICAgIFwidmFsdWVcIjogMSxcbiAgICBcInVjdW1cIjogXCJKL3NcIlxuICB9LFxuICBcIkFcIjoge1xuICAgIFwidmFsdWVcIjogMSxcbiAgICBcInVjdW1cIjogXCJDL3NcIlxuICB9LFxuICBcIlZcIjoge1xuICAgIFwidmFsdWVcIjogMSxcbiAgICBcInVjdW1cIjogXCJKL0NcIlxuICB9LFxuICBcIkZcIjoge1xuICAgIFwidmFsdWVcIjogMSxcbiAgICBcInVjdW1cIjogXCJDL1ZcIlxuICB9LFxuICBcIk9obVwiOiB7XG4gICAgXCJ2YWx1ZVwiOiAxLFxuICAgIFwidWN1bVwiOiBcIlYvQVwiXG4gIH0sXG4gIFwiU1wiOiB7XG4gICAgXCJ2YWx1ZVwiOiAxLFxuICAgIFwidWN1bVwiOiBcIk9obS0xXCJcbiAgfSxcbiAgXCJXYlwiOiB7XG4gICAgXCJ2YWx1ZVwiOiAxLFxuICAgIFwidWN1bVwiOiBcIlYuc1wiXG4gIH0sXG4gIFwiQ2VsXCI6IHtcbiAgICBcInZhbHVlXCI6IG51bGwsXG4gICAgXCJ1Y3VtXCI6IFwiY2VsKDEgSylcIlxuICB9LFxuICBcIlRcIjoge1xuICAgIFwidmFsdWVcIjogMSxcbiAgICBcInVjdW1cIjogXCJXYi9tMlwiXG4gIH0sXG4gIFwiSFwiOiB7XG4gICAgXCJ2YWx1ZVwiOiAxLFxuICAgIFwidWN1bVwiOiBcIldiL0FcIlxuICB9LFxuICBcImxtXCI6IHtcbiAgICBcInZhbHVlXCI6IDEsXG4gICAgXCJ1Y3VtXCI6IFwiY2Quc3JcIlxuICB9LFxuICBcImx4XCI6IHtcbiAgICBcInZhbHVlXCI6IDEsXG4gICAgXCJ1Y3VtXCI6IFwibG0vbTJcIlxuICB9LFxuICBcIkJxXCI6IHtcbiAgICBcInZhbHVlXCI6IDEsXG4gICAgXCJ1Y3VtXCI6IFwicy0xXCJcbiAgfSxcbiAgXCJHeVwiOiB7XG4gICAgXCJ2YWx1ZVwiOiAxLFxuICAgIFwidWN1bVwiOiBcIkova2dcIlxuICB9LFxuICBcIlN2XCI6IHtcbiAgICBcInZhbHVlXCI6IDEsXG4gICAgXCJ1Y3VtXCI6IFwiSi9rZ1wiXG4gIH0sXG4gIFwiZ29uXCI6IHtcbiAgICBcInZhbHVlXCI6IDAuOSxcbiAgICBcInVjdW1cIjogXCJkZWdcIlxuICB9LFxuICBcImRlZ1wiOiB7XG4gICAgXCJ2YWx1ZVwiOiAyLFxuICAgIFwidWN1bVwiOiBcIltwaV0ucmFkLzM2MFwiXG4gIH0sXG4gIFwiJ1wiOiB7XG4gICAgXCJ2YWx1ZVwiOiAxLFxuICAgIFwidWN1bVwiOiBcImRlZy82MFwiXG4gIH0sXG4gIFwiJydcIjoge1xuICAgIFwidmFsdWVcIjogMSxcbiAgICBcInVjdW1cIjogXCInLzYwXCJcbiAgfSxcbiAgXCJsXCI6IHtcbiAgICBcInZhbHVlXCI6IDEsXG4gICAgXCJ1Y3VtXCI6IFwiZG0zXCJcbiAgfSxcbiAgXCJMXCI6IHtcbiAgICBcInZhbHVlXCI6IDEsXG4gICAgXCJ1Y3VtXCI6IFwibFwiXG4gIH0sXG4gIFwiYXJcIjoge1xuICAgIFwidmFsdWVcIjogMTAwLFxuICAgIFwidWN1bVwiOiBcIm0yXCJcbiAgfSxcbiAgXCJtaW5cIjoge1xuICAgIFwidmFsdWVcIjogNjAsXG4gICAgXCJ1Y3VtXCI6IFwic1wiXG4gIH0sXG4gIFwiaFwiOiB7XG4gICAgXCJ2YWx1ZVwiOiA2MCxcbiAgICBcInVjdW1cIjogXCJtaW5cIlxuICB9LFxuICBcImRcIjoge1xuICAgIFwidmFsdWVcIjogMjQsXG4gICAgXCJ1Y3VtXCI6IFwiaFwiXG4gIH0sXG4gIFwiYV90XCI6IHtcbiAgICBcInZhbHVlXCI6IDM2NS4yNDIxOSxcbiAgICBcInVjdW1cIjogXCJkXCJcbiAgfSxcbiAgXCJhX2pcIjoge1xuICAgIFwidmFsdWVcIjogMzY1LjI1LFxuICAgIFwidWN1bVwiOiBcImRcIlxuICB9LFxuICBcImFfZ1wiOiB7XG4gICAgXCJ2YWx1ZVwiOiAzNjUuMjQyNSxcbiAgICBcInVjdW1cIjogXCJkXCJcbiAgfSxcbiAgXCJhXCI6IHtcbiAgICBcInZhbHVlXCI6IDEsXG4gICAgXCJ1Y3VtXCI6IFwiYV9qXCJcbiAgfSxcbiAgXCJ3a1wiOiB7XG4gICAgXCJ2YWx1ZVwiOiA3LFxuICAgIFwidWN1bVwiOiBcImRcIlxuICB9LFxuICBcIm1vX3NcIjoge1xuICAgIFwidmFsdWVcIjogMjkuNTMwNTksXG4gICAgXCJ1Y3VtXCI6IFwiZFwiXG4gIH0sXG4gIFwibW9falwiOiB7XG4gICAgXCJ2YWx1ZVwiOiAxLFxuICAgIFwidWN1bVwiOiBcImFfai8xMlwiXG4gIH0sXG4gIFwibW9fZ1wiOiB7XG4gICAgXCJ2YWx1ZVwiOiAxLFxuICAgIFwidWN1bVwiOiBcImFfZy8xMlwiXG4gIH0sXG4gIFwibW9cIjoge1xuICAgIFwidmFsdWVcIjogMSxcbiAgICBcInVjdW1cIjogXCJtb19qXCJcbiAgfSxcbiAgXCJ0XCI6IHtcbiAgICBcInZhbHVlXCI6IDEwMDAsXG4gICAgXCJ1Y3VtXCI6IFwia2dcIlxuICB9LFxuICBcImJhclwiOiB7XG4gICAgXCJ2YWx1ZVwiOiAxMDAwMDAsXG4gICAgXCJ1Y3VtXCI6IFwiUGFcIlxuICB9LFxuICBcInVcIjoge1xuICAgIFwidmFsdWVcIjogMS42NjA1NDAyZS0yNCxcbiAgICBcInVjdW1cIjogXCJnXCJcbiAgfSxcbiAgXCJlVlwiOiB7XG4gICAgXCJ2YWx1ZVwiOiAxLFxuICAgIFwidWN1bVwiOiBcIltlXS5WXCJcbiAgfSxcbiAgXCJBVVwiOiB7XG4gICAgXCJ2YWx1ZVwiOiAxNDk1OTcuODcwNjkxLFxuICAgIFwidWN1bVwiOiBcIk1tXCJcbiAgfSxcbiAgXCJwY1wiOiB7XG4gICAgXCJ2YWx1ZVwiOiAzMDg1Njc4MDAwMDAwMDAwMCxcbiAgICBcInVjdW1cIjogXCJtXCJcbiAgfSxcbiAgXCJbY11cIjoge1xuICAgIFwidmFsdWVcIjogMjk5NzkyNDU4LFxuICAgIFwidWN1bVwiOiBcIm0vc1wiXG4gIH0sXG4gIFwiW2hdXCI6IHtcbiAgICBcInZhbHVlXCI6IDYuNjI2MDc1NWUtMjQsXG4gICAgXCJ1Y3VtXCI6IFwiSi5zXCJcbiAgfSxcbiAgXCJba11cIjoge1xuICAgIFwidmFsdWVcIjogMS4zODA2NThlLTIzLFxuICAgIFwidWN1bVwiOiBcIkovS1wiXG4gIH0sXG4gIFwiW2Vwc18wXVwiOiB7XG4gICAgXCJ2YWx1ZVwiOiA4Ljg1NDE4NzgxN2UtMTIsXG4gICAgXCJ1Y3VtXCI6IFwiRi9tXCJcbiAgfSxcbiAgXCJbbXVfMF1cIjoge1xuICAgIFwidmFsdWVcIjogMSxcbiAgICBcInVjdW1cIjogXCI0LltwaV0uMTAqLTcuTi9BMlwiXG4gIH0sXG4gIFwiW2VdXCI6IHtcbiAgICBcInZhbHVlXCI6IDEuNjAyMTc3MzNlLTE5LFxuICAgIFwidWN1bVwiOiBcIkNcIlxuICB9LFxuICBcIlttX2VdXCI6IHtcbiAgICBcInZhbHVlXCI6IDkuMTA5Mzg5N2UtMjgsXG4gICAgXCJ1Y3VtXCI6IFwiZ1wiXG4gIH0sXG4gIFwiW21fcF1cIjoge1xuICAgIFwidmFsdWVcIjogMS42NzI2MjMxZS0yNCxcbiAgICBcInVjdW1cIjogXCJnXCJcbiAgfSxcbiAgXCJbR11cIjoge1xuICAgIFwidmFsdWVcIjogNi42NzI1OWUtMTEsXG4gICAgXCJ1Y3VtXCI6IFwibTMua2ctMS5zLTJcIlxuICB9LFxuICBcIltnXVwiOiB7XG4gICAgXCJ2YWx1ZVwiOiA5LjgwNjY1LFxuICAgIFwidWN1bVwiOiBcIm0vczJcIlxuICB9LFxuICBcImF0bVwiOiB7XG4gICAgXCJ2YWx1ZVwiOiAxMDEzMjUsXG4gICAgXCJ1Y3VtXCI6IFwiUGFcIlxuICB9LFxuICBcIltseV1cIjoge1xuICAgIFwidmFsdWVcIjogMSxcbiAgICBcInVjdW1cIjogXCJbY10uYV9qXCJcbiAgfSxcbiAgXCJnZlwiOiB7XG4gICAgXCJ2YWx1ZVwiOiAxLFxuICAgIFwidWN1bVwiOiBcImcuW2ddXCJcbiAgfSxcbiAgXCJbbGJmX2F2XVwiOiB7XG4gICAgXCJ2YWx1ZVwiOiAxLFxuICAgIFwidWN1bVwiOiBcIltsYl9hdl0uW2ddXCJcbiAgfSxcbiAgXCJLeVwiOiB7XG4gICAgXCJ2YWx1ZVwiOiAxLFxuICAgIFwidWN1bVwiOiBcImNtLTFcIlxuICB9LFxuICBcIkdhbFwiOiB7XG4gICAgXCJ2YWx1ZVwiOiAxLFxuICAgIFwidWN1bVwiOiBcImNtL3MyXCJcbiAgfSxcbiAgXCJkeW5cIjoge1xuICAgIFwidmFsdWVcIjogMSxcbiAgICBcInVjdW1cIjogXCJnLmNtL3MyXCJcbiAgfSxcbiAgXCJlcmdcIjoge1xuICAgIFwidmFsdWVcIjogMSxcbiAgICBcInVjdW1cIjogXCJkeW4uY21cIlxuICB9LFxuICBcIlBcIjoge1xuICAgIFwidmFsdWVcIjogMSxcbiAgICBcInVjdW1cIjogXCJkeW4ucy9jbTJcIlxuICB9LFxuICBcIkJpXCI6IHtcbiAgICBcInZhbHVlXCI6IDEwLFxuICAgIFwidWN1bVwiOiBcIkFcIlxuICB9LFxuICBcIlN0XCI6IHtcbiAgICBcInZhbHVlXCI6IDEsXG4gICAgXCJ1Y3VtXCI6IFwiY20yL3NcIlxuICB9LFxuICBcIk14XCI6IHtcbiAgICBcInZhbHVlXCI6IDFlLTgsXG4gICAgXCJ1Y3VtXCI6IFwiV2JcIlxuICB9LFxuICBcIkdcIjoge1xuICAgIFwidmFsdWVcIjogMC4wMDAxLFxuICAgIFwidWN1bVwiOiBcIlRcIlxuICB9LFxuICBcIk9lXCI6IHtcbiAgICBcInZhbHVlXCI6IDI1MCxcbiAgICBcInVjdW1cIjogXCIvW3BpXS5BL21cIlxuICB9LFxuICBcIkdiXCI6IHtcbiAgICBcInZhbHVlXCI6IDEsXG4gICAgXCJ1Y3VtXCI6IFwiT2UuY21cIlxuICB9LFxuICBcInNiXCI6IHtcbiAgICBcInZhbHVlXCI6IDEsXG4gICAgXCJ1Y3VtXCI6IFwiY2QvY20yXCJcbiAgfSxcbiAgXCJMbWJcIjoge1xuICAgIFwidmFsdWVcIjogMSxcbiAgICBcInVjdW1cIjogXCJjZC9jbTIvW3BpXVwiXG4gIH0sXG4gIFwicGhcIjoge1xuICAgIFwidmFsdWVcIjogMC4wMDAxLFxuICAgIFwidWN1bVwiOiBcImx4XCJcbiAgfSxcbiAgXCJDaVwiOiB7XG4gICAgXCJ2YWx1ZVwiOiAzNzAwMDAwMDAwMCxcbiAgICBcInVjdW1cIjogXCJCcVwiXG4gIH0sXG4gIFwiUlwiOiB7XG4gICAgXCJ2YWx1ZVwiOiAwLjAwMDI1OCxcbiAgICBcInVjdW1cIjogXCJDL2tnXCJcbiAgfSxcbiAgXCJSQURcIjoge1xuICAgIFwidmFsdWVcIjogMTAwLFxuICAgIFwidWN1bVwiOiBcImVyZy9nXCJcbiAgfSxcbiAgXCJSRU1cIjoge1xuICAgIFwidmFsdWVcIjogMSxcbiAgICBcInVjdW1cIjogXCJSQURcIlxuICB9LFxuICBcIltpbl9pXVwiOiB7XG4gICAgXCJ2YWx1ZVwiOiAyLjU0LFxuICAgIFwidWN1bVwiOiBcImNtXCJcbiAgfSxcbiAgXCJbZnRfaV1cIjoge1xuICAgIFwidmFsdWVcIjogMTIsXG4gICAgXCJ1Y3VtXCI6IFwiW2luX2ldXCJcbiAgfSxcbiAgXCJbeWRfaV1cIjoge1xuICAgIFwidmFsdWVcIjogMyxcbiAgICBcInVjdW1cIjogXCJbZnRfaV1cIlxuICB9LFxuICBcIlttaV9pXVwiOiB7XG4gICAgXCJ2YWx1ZVwiOiA1MjgwLFxuICAgIFwidWN1bVwiOiBcIltmdF9pXVwiXG4gIH0sXG4gIFwiW2Z0aF9pXVwiOiB7XG4gICAgXCJ2YWx1ZVwiOiA2LFxuICAgIFwidWN1bVwiOiBcIltmdF9pXVwiXG4gIH0sXG4gIFwiW25taV9pXVwiOiB7XG4gICAgXCJ2YWx1ZVwiOiAxODUyLFxuICAgIFwidWN1bVwiOiBcIm1cIlxuICB9LFxuICBcIltrbl9pXVwiOiB7XG4gICAgXCJ2YWx1ZVwiOiAxLFxuICAgIFwidWN1bVwiOiBcIltubWlfaV0vaFwiXG4gIH0sXG4gIFwiW3Npbl9pXVwiOiB7XG4gICAgXCJ2YWx1ZVwiOiAxLFxuICAgIFwidWN1bVwiOiBcIltpbl9pXTJcIlxuICB9LFxuICBcIltzZnRfaV1cIjoge1xuICAgIFwidmFsdWVcIjogMSxcbiAgICBcInVjdW1cIjogXCJbZnRfaV0yXCJcbiAgfSxcbiAgXCJbc3lkX2ldXCI6IHtcbiAgICBcInZhbHVlXCI6IDEsXG4gICAgXCJ1Y3VtXCI6IFwiW3lkX2ldMlwiXG4gIH0sXG4gIFwiW2Npbl9pXVwiOiB7XG4gICAgXCJ2YWx1ZVwiOiAxLFxuICAgIFwidWN1bVwiOiBcIltpbl9pXTNcIlxuICB9LFxuICBcIltjZnRfaV1cIjoge1xuICAgIFwidmFsdWVcIjogMSxcbiAgICBcInVjdW1cIjogXCJbZnRfaV0zXCJcbiAgfSxcbiAgXCJbY3lkX2ldXCI6IHtcbiAgICBcInZhbHVlXCI6IDEsXG4gICAgXCJ1Y3VtXCI6IFwiW3lkX2ldM1wiXG4gIH0sXG4gIFwiW2JmX2ldXCI6IHtcbiAgICBcInZhbHVlXCI6IDE0NCxcbiAgICBcInVjdW1cIjogXCJbaW5faV0zXCJcbiAgfSxcbiAgXCJbY3JfaV1cIjoge1xuICAgIFwidmFsdWVcIjogMTI4LFxuICAgIFwidWN1bVwiOiBcIltmdF9pXTNcIlxuICB9LFxuICBcIlttaWxfaV1cIjoge1xuICAgIFwidmFsdWVcIjogMC4wMDEsXG4gICAgXCJ1Y3VtXCI6IFwiW2luX2ldXCJcbiAgfSxcbiAgXCJbY21sX2ldXCI6IHtcbiAgICBcInZhbHVlXCI6IDEsXG4gICAgXCJ1Y3VtXCI6IFwiW3BpXS80LlttaWxfaV0yXCJcbiAgfSxcbiAgXCJbaGRfaV1cIjoge1xuICAgIFwidmFsdWVcIjogNCxcbiAgICBcInVjdW1cIjogXCJbaW5faV1cIlxuICB9LFxuICBcIltmdF91c11cIjoge1xuICAgIFwidmFsdWVcIjogMTIwMCxcbiAgICBcInVjdW1cIjogXCJtLzM5MzdcIlxuICB9LFxuICBcIlt5ZF91c11cIjoge1xuICAgIFwidmFsdWVcIjogMyxcbiAgICBcInVjdW1cIjogXCJbZnRfdXNdXCJcbiAgfSxcbiAgXCJbaW5fdXNdXCI6IHtcbiAgICBcInZhbHVlXCI6IDEsXG4gICAgXCJ1Y3VtXCI6IFwiW2Z0X3VzXS8xMlwiXG4gIH0sXG4gIFwiW3JkX3VzXVwiOiB7XG4gICAgXCJ2YWx1ZVwiOiAxNi41LFxuICAgIFwidWN1bVwiOiBcIltmdF91c11cIlxuICB9LFxuICBcIltjaF91c11cIjoge1xuICAgIFwidmFsdWVcIjogNCxcbiAgICBcInVjdW1cIjogXCJbcmRfdXNdXCJcbiAgfSxcbiAgXCJbbGtfdXNdXCI6IHtcbiAgICBcInZhbHVlXCI6IDEsXG4gICAgXCJ1Y3VtXCI6IFwiW2NoX3VzXS8xMDBcIlxuICB9LFxuICBcIltyY2hfdXNdXCI6IHtcbiAgICBcInZhbHVlXCI6IDEwMCxcbiAgICBcInVjdW1cIjogXCJbZnRfdXNdXCJcbiAgfSxcbiAgXCJbcmxrX3VzXVwiOiB7XG4gICAgXCJ2YWx1ZVwiOiAxLFxuICAgIFwidWN1bVwiOiBcIltyY2hfdXNdLzEwMFwiXG4gIH0sXG4gIFwiW2Z0aF91c11cIjoge1xuICAgIFwidmFsdWVcIjogNixcbiAgICBcInVjdW1cIjogXCJbZnRfdXNdXCJcbiAgfSxcbiAgXCJbZnVyX3VzXVwiOiB7XG4gICAgXCJ2YWx1ZVwiOiA0MCxcbiAgICBcInVjdW1cIjogXCJbcmRfdXNdXCJcbiAgfSxcbiAgXCJbbWlfdXNdXCI6IHtcbiAgICBcInZhbHVlXCI6IDgsXG4gICAgXCJ1Y3VtXCI6IFwiW2Z1cl91c11cIlxuICB9LFxuICBcIlthY3JfdXNdXCI6IHtcbiAgICBcInZhbHVlXCI6IDE2MCxcbiAgICBcInVjdW1cIjogXCJbcmRfdXNdMlwiXG4gIH0sXG4gIFwiW3NyZF91c11cIjoge1xuICAgIFwidmFsdWVcIjogMSxcbiAgICBcInVjdW1cIjogXCJbcmRfdXNdMlwiXG4gIH0sXG4gIFwiW3NtaV91c11cIjoge1xuICAgIFwidmFsdWVcIjogMSxcbiAgICBcInVjdW1cIjogXCJbbWlfdXNdMlwiXG4gIH0sXG4gIFwiW3NjdF1cIjoge1xuICAgIFwidmFsdWVcIjogMSxcbiAgICBcInVjdW1cIjogXCJbbWlfdXNdMlwiXG4gIH0sXG4gIFwiW3R3cF1cIjoge1xuICAgIFwidmFsdWVcIjogMzYsXG4gICAgXCJ1Y3VtXCI6IFwiW3NjdF1cIlxuICB9LFxuICBcIlttaWxfdXNdXCI6IHtcbiAgICBcInZhbHVlXCI6IDAuMDAxLFxuICAgIFwidWN1bVwiOiBcIltpbl91c11cIlxuICB9LFxuICBcIltpbl9icl1cIjoge1xuICAgIFwidmFsdWVcIjogMi41Mzk5OTgsXG4gICAgXCJ1Y3VtXCI6IFwiY21cIlxuICB9LFxuICBcIltmdF9icl1cIjoge1xuICAgIFwidmFsdWVcIjogMTIsXG4gICAgXCJ1Y3VtXCI6IFwiW2luX2JyXVwiXG4gIH0sXG4gIFwiW3JkX2JyXVwiOiB7XG4gICAgXCJ2YWx1ZVwiOiAxNi41LFxuICAgIFwidWN1bVwiOiBcIltmdF9icl1cIlxuICB9LFxuICBcIltjaF9icl1cIjoge1xuICAgIFwidmFsdWVcIjogNCxcbiAgICBcInVjdW1cIjogXCJbcmRfYnJdXCJcbiAgfSxcbiAgXCJbbGtfYnJdXCI6IHtcbiAgICBcInZhbHVlXCI6IDEsXG4gICAgXCJ1Y3VtXCI6IFwiW2NoX2JyXS8xMDBcIlxuICB9LFxuICBcIltmdGhfYnJdXCI6IHtcbiAgICBcInZhbHVlXCI6IDYsXG4gICAgXCJ1Y3VtXCI6IFwiW2Z0X2JyXVwiXG4gIH0sXG4gIFwiW3BjX2JyXVwiOiB7XG4gICAgXCJ2YWx1ZVwiOiAyLjUsXG4gICAgXCJ1Y3VtXCI6IFwiW2Z0X2JyXVwiXG4gIH0sXG4gIFwiW3lkX2JyXVwiOiB7XG4gICAgXCJ2YWx1ZVwiOiAzLFxuICAgIFwidWN1bVwiOiBcIltmdF9icl1cIlxuICB9LFxuICBcIlttaV9icl1cIjoge1xuICAgIFwidmFsdWVcIjogNTI4MCxcbiAgICBcInVjdW1cIjogXCJbZnRfYnJdXCJcbiAgfSxcbiAgXCJbbm1pX2JyXVwiOiB7XG4gICAgXCJ2YWx1ZVwiOiA2MDgwLFxuICAgIFwidWN1bVwiOiBcIltmdF9icl1cIlxuICB9LFxuICBcIltrbl9icl1cIjoge1xuICAgIFwidmFsdWVcIjogMSxcbiAgICBcInVjdW1cIjogXCJbbm1pX2JyXS9oXCJcbiAgfSxcbiAgXCJbYWNyX2JyXVwiOiB7XG4gICAgXCJ2YWx1ZVwiOiA0ODQwLFxuICAgIFwidWN1bVwiOiBcIlt5ZF9icl0yXCJcbiAgfSxcbiAgXCJbZ2FsX3VzXVwiOiB7XG4gICAgXCJ2YWx1ZVwiOiAyMzEsXG4gICAgXCJ1Y3VtXCI6IFwiW2luX2ldM1wiXG4gIH0sXG4gIFwiW2JibF91c11cIjoge1xuICAgIFwidmFsdWVcIjogNDIsXG4gICAgXCJ1Y3VtXCI6IFwiW2dhbF91c11cIlxuICB9LFxuICBcIltxdF91c11cIjoge1xuICAgIFwidmFsdWVcIjogMSxcbiAgICBcInVjdW1cIjogXCJbZ2FsX3VzXS80XCJcbiAgfSxcbiAgXCJbcHRfdXNdXCI6IHtcbiAgICBcInZhbHVlXCI6IDEsXG4gICAgXCJ1Y3VtXCI6IFwiW3F0X3VzXS8yXCJcbiAgfSxcbiAgXCJbZ2lsX3VzXVwiOiB7XG4gICAgXCJ2YWx1ZVwiOiAxLFxuICAgIFwidWN1bVwiOiBcIltwdF91c10vNFwiXG4gIH0sXG4gIFwiW2Zvel91c11cIjoge1xuICAgIFwidmFsdWVcIjogMSxcbiAgICBcInVjdW1cIjogXCJbZ2lsX3VzXS80XCJcbiAgfSxcbiAgXCJbZmRyX3VzXVwiOiB7XG4gICAgXCJ2YWx1ZVwiOiAxLFxuICAgIFwidWN1bVwiOiBcIltmb3pfdXNdLzhcIlxuICB9LFxuICBcIlttaW5fdXNdXCI6IHtcbiAgICBcInZhbHVlXCI6IDEsXG4gICAgXCJ1Y3VtXCI6IFwiW2Zkcl91c10vNjBcIlxuICB9LFxuICBcIltjcmRfdXNdXCI6IHtcbiAgICBcInZhbHVlXCI6IDEyOCxcbiAgICBcInVjdW1cIjogXCJbZnRfaV0zXCJcbiAgfSxcbiAgXCJbYnVfdXNdXCI6IHtcbiAgICBcInZhbHVlXCI6IDIxNTAuNDIsXG4gICAgXCJ1Y3VtXCI6IFwiW2luX2ldM1wiXG4gIH0sXG4gIFwiW2dhbF93aV1cIjoge1xuICAgIFwidmFsdWVcIjogMSxcbiAgICBcInVjdW1cIjogXCJbYnVfdXNdLzhcIlxuICB9LFxuICBcIltwa191c11cIjoge1xuICAgIFwidmFsdWVcIjogMSxcbiAgICBcInVjdW1cIjogXCJbYnVfdXNdLzRcIlxuICB9LFxuICBcIltkcXRfdXNdXCI6IHtcbiAgICBcInZhbHVlXCI6IDEsXG4gICAgXCJ1Y3VtXCI6IFwiW3BrX3VzXS84XCJcbiAgfSxcbiAgXCJbZHB0X3VzXVwiOiB7XG4gICAgXCJ2YWx1ZVwiOiAxLFxuICAgIFwidWN1bVwiOiBcIltkcXRfdXNdLzJcIlxuICB9LFxuICBcIlt0YnNfdXNdXCI6IHtcbiAgICBcInZhbHVlXCI6IDEsXG4gICAgXCJ1Y3VtXCI6IFwiW2Zvel91c10vMlwiXG4gIH0sXG4gIFwiW3RzcF91c11cIjoge1xuICAgIFwidmFsdWVcIjogMSxcbiAgICBcInVjdW1cIjogXCJbdGJzX3VzXS8zXCJcbiAgfSxcbiAgXCJbY3VwX3VzXVwiOiB7XG4gICAgXCJ2YWx1ZVwiOiAxNixcbiAgICBcInVjdW1cIjogXCJbdGJzX3VzXVwiXG4gIH0sXG4gIFwiW2Zvel9tXVwiOiB7XG4gICAgXCJ2YWx1ZVwiOiAzMCxcbiAgICBcInVjdW1cIjogXCJtTFwiXG4gIH0sXG4gIFwiW2N1cF9tXVwiOiB7XG4gICAgXCJ2YWx1ZVwiOiAyNDAsXG4gICAgXCJ1Y3VtXCI6IFwibUxcIlxuICB9LFxuICBcIlt0c3BfbV1cIjoge1xuICAgIFwidmFsdWVcIjogNSxcbiAgICBcInVjdW1cIjogXCJtTFwiXG4gIH0sXG4gIFwiW3Ric19tXVwiOiB7XG4gICAgXCJ2YWx1ZVwiOiAxNSxcbiAgICBcInVjdW1cIjogXCJtTFwiXG4gIH0sXG4gIFwiW2dhbF9icl1cIjoge1xuICAgIFwidmFsdWVcIjogNC41NDYwOSxcbiAgICBcInVjdW1cIjogXCJsXCJcbiAgfSxcbiAgXCJbcGtfYnJdXCI6IHtcbiAgICBcInZhbHVlXCI6IDIsXG4gICAgXCJ1Y3VtXCI6IFwiW2dhbF9icl1cIlxuICB9LFxuICBcIltidV9icl1cIjoge1xuICAgIFwidmFsdWVcIjogNCxcbiAgICBcInVjdW1cIjogXCJbcGtfYnJdXCJcbiAgfSxcbiAgXCJbcXRfYnJdXCI6IHtcbiAgICBcInZhbHVlXCI6IDEsXG4gICAgXCJ1Y3VtXCI6IFwiW2dhbF9icl0vNFwiXG4gIH0sXG4gIFwiW3B0X2JyXVwiOiB7XG4gICAgXCJ2YWx1ZVwiOiAxLFxuICAgIFwidWN1bVwiOiBcIltxdF9icl0vMlwiXG4gIH0sXG4gIFwiW2dpbF9icl1cIjoge1xuICAgIFwidmFsdWVcIjogMSxcbiAgICBcInVjdW1cIjogXCJbcHRfYnJdLzRcIlxuICB9LFxuICBcIltmb3pfYnJdXCI6IHtcbiAgICBcInZhbHVlXCI6IDEsXG4gICAgXCJ1Y3VtXCI6IFwiW2dpbF9icl0vNVwiXG4gIH0sXG4gIFwiW2Zkcl9icl1cIjoge1xuICAgIFwidmFsdWVcIjogMSxcbiAgICBcInVjdW1cIjogXCJbZm96X2JyXS84XCJcbiAgfSxcbiAgXCJbbWluX2JyXVwiOiB7XG4gICAgXCJ2YWx1ZVwiOiAxLFxuICAgIFwidWN1bVwiOiBcIltmZHJfYnJdLzYwXCJcbiAgfSxcbiAgXCJbZ3JdXCI6IHtcbiAgICBcInZhbHVlXCI6IDY0Ljc5ODkxLFxuICAgIFwidWN1bVwiOiBcIm1nXCJcbiAgfSxcbiAgXCJbbGJfYXZdXCI6IHtcbiAgICBcInZhbHVlXCI6IDcwMDAsXG4gICAgXCJ1Y3VtXCI6IFwiW2dyXVwiXG4gIH0sXG4gIFwiW296X2F2XVwiOiB7XG4gICAgXCJ2YWx1ZVwiOiAxLFxuICAgIFwidWN1bVwiOiBcIltsYl9hdl0vMTZcIlxuICB9LFxuICBcIltkcl9hdl1cIjoge1xuICAgIFwidmFsdWVcIjogMSxcbiAgICBcInVjdW1cIjogXCJbb3pfYXZdLzE2XCJcbiAgfSxcbiAgXCJbc2N3dF9hdl1cIjoge1xuICAgIFwidmFsdWVcIjogMTAwLFxuICAgIFwidWN1bVwiOiBcIltsYl9hdl1cIlxuICB9LFxuICBcIltsY3d0X2F2XVwiOiB7XG4gICAgXCJ2YWx1ZVwiOiAxMTIsXG4gICAgXCJ1Y3VtXCI6IFwiW2xiX2F2XVwiXG4gIH0sXG4gIFwiW3N0b25fYXZdXCI6IHtcbiAgICBcInZhbHVlXCI6IDIwLFxuICAgIFwidWN1bVwiOiBcIltzY3d0X2F2XVwiXG4gIH0sXG4gIFwiW2x0b25fYXZdXCI6IHtcbiAgICBcInZhbHVlXCI6IDIwLFxuICAgIFwidWN1bVwiOiBcIltsY3d0X2F2XVwiXG4gIH0sXG4gIFwiW3N0b25lX2F2XVwiOiB7XG4gICAgXCJ2YWx1ZVwiOiAxNCxcbiAgICBcInVjdW1cIjogXCJbbGJfYXZdXCJcbiAgfSxcbiAgXCJbcHd0X3RyXVwiOiB7XG4gICAgXCJ2YWx1ZVwiOiAyNCxcbiAgICBcInVjdW1cIjogXCJbZ3JdXCJcbiAgfSxcbiAgXCJbb3pfdHJdXCI6IHtcbiAgICBcInZhbHVlXCI6IDIwLFxuICAgIFwidWN1bVwiOiBcIltwd3RfdHJdXCJcbiAgfSxcbiAgXCJbbGJfdHJdXCI6IHtcbiAgICBcInZhbHVlXCI6IDEyLFxuICAgIFwidWN1bVwiOiBcIltvel90cl1cIlxuICB9LFxuICBcIltzY19hcF1cIjoge1xuICAgIFwidmFsdWVcIjogMjAsXG4gICAgXCJ1Y3VtXCI6IFwiW2dyXVwiXG4gIH0sXG4gIFwiW2RyX2FwXVwiOiB7XG4gICAgXCJ2YWx1ZVwiOiAzLFxuICAgIFwidWN1bVwiOiBcIltzY19hcF1cIlxuICB9LFxuICBcIltvel9hcF1cIjoge1xuICAgIFwidmFsdWVcIjogOCxcbiAgICBcInVjdW1cIjogXCJbZHJfYXBdXCJcbiAgfSxcbiAgXCJbbGJfYXBdXCI6IHtcbiAgICBcInZhbHVlXCI6IDEyLFxuICAgIFwidWN1bVwiOiBcIltvel9hcF1cIlxuICB9LFxuICBcIltvel9tXVwiOiB7XG4gICAgXCJ2YWx1ZVwiOiAyOCxcbiAgICBcInVjdW1cIjogXCJnXCJcbiAgfSxcbiAgXCJbbG5lXVwiOiB7XG4gICAgXCJ2YWx1ZVwiOiAxLFxuICAgIFwidWN1bVwiOiBcIltpbl9pXS8xMlwiXG4gIH0sXG4gIFwiW3BudF1cIjoge1xuICAgIFwidmFsdWVcIjogMSxcbiAgICBcInVjdW1cIjogXCJbbG5lXS82XCJcbiAgfSxcbiAgXCJbcGNhXVwiOiB7XG4gICAgXCJ2YWx1ZVwiOiAxMixcbiAgICBcInVjdW1cIjogXCJbcG50XVwiXG4gIH0sXG4gIFwiW3BudF9wcl1cIjoge1xuICAgIFwidmFsdWVcIjogMC4wMTM4MzcsXG4gICAgXCJ1Y3VtXCI6IFwiW2luX2ldXCJcbiAgfSxcbiAgXCJbcGNhX3ByXVwiOiB7XG4gICAgXCJ2YWx1ZVwiOiAxMixcbiAgICBcInVjdW1cIjogXCJbcG50X3ByXVwiXG4gIH0sXG4gIFwiW3BpZWRdXCI6IHtcbiAgICBcInZhbHVlXCI6IDMyLjQ4LFxuICAgIFwidWN1bVwiOiBcImNtXCJcbiAgfSxcbiAgXCJbcG91Y2VdXCI6IHtcbiAgICBcInZhbHVlXCI6IDEsXG4gICAgXCJ1Y3VtXCI6IFwiW3BpZWRdLzEyXCJcbiAgfSxcbiAgXCJbbGlnbmVdXCI6IHtcbiAgICBcInZhbHVlXCI6IDEsXG4gICAgXCJ1Y3VtXCI6IFwiW3BvdWNlXS8xMlwiXG4gIH0sXG4gIFwiW2RpZG90XVwiOiB7XG4gICAgXCJ2YWx1ZVwiOiAxLFxuICAgIFwidWN1bVwiOiBcIltsaWduZV0vNlwiXG4gIH0sXG4gIFwiW2NpY2Vyb11cIjoge1xuICAgIFwidmFsdWVcIjogMTIsXG4gICAgXCJ1Y3VtXCI6IFwiW2RpZG90XVwiXG4gIH0sXG4gIFwiW2RlZ0ZdXCI6IHtcbiAgICBcInZhbHVlXCI6IG51bGwsXG4gICAgXCJ1Y3VtXCI6IFwiZGVnZig1IEsvOSlcIlxuICB9LFxuICBcIltkZWdSXVwiOiB7XG4gICAgXCJ2YWx1ZVwiOiA1LFxuICAgIFwidWN1bVwiOiBcIksvOVwiXG4gIH0sXG4gIFwiY2FsX1sxNV1cIjoge1xuICAgIFwidmFsdWVcIjogNC4xODU4LFxuICAgIFwidWN1bVwiOiBcIkpcIlxuICB9LFxuICBcImNhbF9bMjBdXCI6IHtcbiAgICBcInZhbHVlXCI6IDQuMTgxOSxcbiAgICBcInVjdW1cIjogXCJKXCJcbiAgfSxcbiAgXCJjYWxfbVwiOiB7XG4gICAgXCJ2YWx1ZVwiOiA0LjE5MDAyLFxuICAgIFwidWN1bVwiOiBcIkpcIlxuICB9LFxuICBcImNhbF9JVFwiOiB7XG4gICAgXCJ2YWx1ZVwiOiA0LjE4NjgsXG4gICAgXCJ1Y3VtXCI6IFwiSlwiXG4gIH0sXG4gIFwiY2FsX3RoXCI6IHtcbiAgICBcInZhbHVlXCI6IDQuMTg0LFxuICAgIFwidWN1bVwiOiBcIkpcIlxuICB9LFxuICBcImNhbFwiOiB7XG4gICAgXCJ2YWx1ZVwiOiAxLFxuICAgIFwidWN1bVwiOiBcImNhbF90aFwiXG4gIH0sXG4gIFwiW0NhbF1cIjoge1xuICAgIFwidmFsdWVcIjogMSxcbiAgICBcInVjdW1cIjogXCJrY2FsX3RoXCJcbiAgfSxcbiAgXCJbQnR1XzM5XVwiOiB7XG4gICAgXCJ2YWx1ZVwiOiAxLjA1OTY3LFxuICAgIFwidWN1bVwiOiBcImtKXCJcbiAgfSxcbiAgXCJbQnR1XzU5XVwiOiB7XG4gICAgXCJ2YWx1ZVwiOiAxLjA1NDgsXG4gICAgXCJ1Y3VtXCI6IFwia0pcIlxuICB9LFxuICBcIltCdHVfNjBdXCI6IHtcbiAgICBcInZhbHVlXCI6IDEuMDU0NjgsXG4gICAgXCJ1Y3VtXCI6IFwia0pcIlxuICB9LFxuICBcIltCdHVfbV1cIjoge1xuICAgIFwidmFsdWVcIjogMS4wNTU4NyxcbiAgICBcInVjdW1cIjogXCJrSlwiXG4gIH0sXG4gIFwiW0J0dV9JVF1cIjoge1xuICAgIFwidmFsdWVcIjogMS4wNTUwNTU4NTI2MixcbiAgICBcInVjdW1cIjogXCJrSlwiXG4gIH0sXG4gIFwiW0J0dV90aF1cIjoge1xuICAgIFwidmFsdWVcIjogMS4wNTQzNSxcbiAgICBcInVjdW1cIjogXCJrSlwiXG4gIH0sXG4gIFwiW0J0dV1cIjoge1xuICAgIFwidmFsdWVcIjogMSxcbiAgICBcInVjdW1cIjogXCJbQnR1X3RoXVwiXG4gIH0sXG4gIFwiW0hQXVwiOiB7XG4gICAgXCJ2YWx1ZVwiOiA1NTAsXG4gICAgXCJ1Y3VtXCI6IFwiW2Z0X2ldLltsYmZfYXZdL3NcIlxuICB9LFxuICBcInRleFwiOiB7XG4gICAgXCJ2YWx1ZVwiOiAxLFxuICAgIFwidWN1bVwiOiBcImcva21cIlxuICB9LFxuICBcIltkZW5dXCI6IHtcbiAgICBcInZhbHVlXCI6IDEsXG4gICAgXCJ1Y3VtXCI6IFwiZy85L2ttXCJcbiAgfSxcbiAgXCJtW0gyT11cIjoge1xuICAgIFwidmFsdWVcIjogOS44MDY2NSxcbiAgICBcInVjdW1cIjogXCJrUGFcIlxuICB9LFxuICBcIm1bSGddXCI6IHtcbiAgICBcInZhbHVlXCI6IDEzMy4zMjIsXG4gICAgXCJ1Y3VtXCI6IFwia1BhXCJcbiAgfSxcbiAgXCJbaW5faSdIMk9dXCI6IHtcbiAgICBcInZhbHVlXCI6IDEsXG4gICAgXCJ1Y3VtXCI6IFwibVtIMk9dLltpbl9pXS9tXCJcbiAgfSxcbiAgXCJbaW5faSdIZ11cIjoge1xuICAgIFwidmFsdWVcIjogMSxcbiAgICBcInVjdW1cIjogXCJtW0hnXS5baW5faV0vbVwiXG4gIH0sXG4gIFwiW1BSVV1cIjoge1xuICAgIFwidmFsdWVcIjogMSxcbiAgICBcInVjdW1cIjogXCJtbVtIZ10ucy9tbFwiXG4gIH0sXG4gIFwiW3dvb2QnVV1cIjoge1xuICAgIFwidmFsdWVcIjogMSxcbiAgICBcInVjdW1cIjogXCJtbVtIZ10ubWluL0xcIlxuICB9LFxuICBcIltkaW9wXVwiOiB7XG4gICAgXCJ2YWx1ZVwiOiAxLFxuICAgIFwidWN1bVwiOiBcIi9tXCJcbiAgfSxcbiAgXCJbcCdkaW9wXVwiOiB7XG4gICAgXCJ2YWx1ZVwiOiBudWxsLFxuICAgIFwidWN1bVwiOiBcIjEwMHRhbigxIHJhZClcIlxuICB9LFxuICBcIiVbc2xvcGVdXCI6IHtcbiAgICBcInZhbHVlXCI6IG51bGwsXG4gICAgXCJ1Y3VtXCI6IFwiMTAwdGFuKDEgcmFkKVwiXG4gIH0sXG4gIFwiW21lc2hfaV1cIjoge1xuICAgIFwidmFsdWVcIjogMSxcbiAgICBcInVjdW1cIjogXCIvW2luX2ldXCJcbiAgfSxcbiAgXCJbQ2hdXCI6IHtcbiAgICBcInZhbHVlXCI6IDEsXG4gICAgXCJ1Y3VtXCI6IFwibW0vM1wiXG4gIH0sXG4gIFwiW2RycF1cIjoge1xuICAgIFwidmFsdWVcIjogMSxcbiAgICBcInVjdW1cIjogXCJtbC8yMFwiXG4gIH0sXG4gIFwiW2huc2YnVV1cIjoge1xuICAgIFwidmFsdWVcIjogMSxcbiAgICBcInVjdW1cIjogXCIxXCJcbiAgfSxcbiAgXCJbTUVUXVwiOiB7XG4gICAgXCJ2YWx1ZVwiOiAzLjUsXG4gICAgXCJ1Y3VtXCI6IFwibUwvbWluL2tnXCJcbiAgfSxcbiAgXCJbaHAnX1hdXCI6IHtcbiAgICBcInZhbHVlXCI6IG51bGwsXG4gICAgXCJ1Y3VtXCI6IFwiaHBYKDEgMSlcIlxuICB9LFxuICBcIltocCdfQ11cIjoge1xuICAgIFwidmFsdWVcIjogbnVsbCxcbiAgICBcInVjdW1cIjogXCJocEMoMSAxKVwiXG4gIH0sXG4gIFwiW2hwJ19NXVwiOiB7XG4gICAgXCJ2YWx1ZVwiOiBudWxsLFxuICAgIFwidWN1bVwiOiBcImhwTSgxIDEpXCJcbiAgfSxcbiAgXCJbaHAnX1FdXCI6IHtcbiAgICBcInZhbHVlXCI6IG51bGwsXG4gICAgXCJ1Y3VtXCI6IFwiaHBRKDEgMSlcIlxuICB9LFxuICBcIltocF9YXVwiOiB7XG4gICAgXCJ2YWx1ZVwiOiAxLFxuICAgIFwidWN1bVwiOiBcIjFcIlxuICB9LFxuICBcIltocF9DXVwiOiB7XG4gICAgXCJ2YWx1ZVwiOiAxLFxuICAgIFwidWN1bVwiOiBcIjFcIlxuICB9LFxuICBcIltocF9NXVwiOiB7XG4gICAgXCJ2YWx1ZVwiOiAxLFxuICAgIFwidWN1bVwiOiBcIjFcIlxuICB9LFxuICBcIltocF9RXVwiOiB7XG4gICAgXCJ2YWx1ZVwiOiAxLFxuICAgIFwidWN1bVwiOiBcIjFcIlxuICB9LFxuICBcIltrcF9YXVwiOiB7XG4gICAgXCJ2YWx1ZVwiOiAxLFxuICAgIFwidWN1bVwiOiBcIjFcIlxuICB9LFxuICBcIltrcF9DXVwiOiB7XG4gICAgXCJ2YWx1ZVwiOiAxLFxuICAgIFwidWN1bVwiOiBcIjFcIlxuICB9LFxuICBcIltrcF9NXVwiOiB7XG4gICAgXCJ2YWx1ZVwiOiAxLFxuICAgIFwidWN1bVwiOiBcIjFcIlxuICB9LFxuICBcIltrcF9RXVwiOiB7XG4gICAgXCJ2YWx1ZVwiOiAxLFxuICAgIFwidWN1bVwiOiBcIjFcIlxuICB9LFxuICBcImVxXCI6IHtcbiAgICBcInZhbHVlXCI6IDEsXG4gICAgXCJ1Y3VtXCI6IFwibW9sXCJcbiAgfSxcbiAgXCJvc21cIjoge1xuICAgIFwidmFsdWVcIjogMSxcbiAgICBcInVjdW1cIjogXCJtb2xcIlxuICB9LFxuICBcIltwSF1cIjoge1xuICAgIFwidmFsdWVcIjogbnVsbCxcbiAgICBcInVjdW1cIjogXCJwSCgxIG1vbC9sKVwiXG4gIH0sXG4gIFwiZyVcIjoge1xuICAgIFwidmFsdWVcIjogMSxcbiAgICBcInVjdW1cIjogXCJnL2RsXCJcbiAgfSxcbiAgXCJbU11cIjoge1xuICAgIFwidmFsdWVcIjogMSxcbiAgICBcInVjdW1cIjogXCIxMCotMTMuc1wiXG4gIH0sXG4gIFwiW0hQRl1cIjoge1xuICAgIFwidmFsdWVcIjogMSxcbiAgICBcInVjdW1cIjogXCIxXCJcbiAgfSxcbiAgXCJbTFBGXVwiOiB7XG4gICAgXCJ2YWx1ZVwiOiAxMDAsXG4gICAgXCJ1Y3VtXCI6IFwiMVwiXG4gIH0sXG4gIFwia2F0XCI6IHtcbiAgICBcInZhbHVlXCI6IDEsXG4gICAgXCJ1Y3VtXCI6IFwibW9sL3NcIlxuICB9LFxuICBcIlVcIjoge1xuICAgIFwidmFsdWVcIjogMSxcbiAgICBcInVjdW1cIjogXCJ1bW9sL21pblwiXG4gIH0sXG4gIFwiW2lVXVwiOiB7XG4gICAgXCJ2YWx1ZVwiOiAxLFxuICAgIFwidWN1bVwiOiBcIjFcIlxuICB9LFxuICBcIltJVV1cIjoge1xuICAgIFwidmFsdWVcIjogMSxcbiAgICBcInVjdW1cIjogXCJbaVVdXCJcbiAgfSxcbiAgXCJbYXJiJ1VdXCI6IHtcbiAgICBcInZhbHVlXCI6IDEsXG4gICAgXCJ1Y3VtXCI6IFwiMVwiXG4gIH0sXG4gIFwiW1VTUCdVXVwiOiB7XG4gICAgXCJ2YWx1ZVwiOiAxLFxuICAgIFwidWN1bVwiOiBcIjFcIlxuICB9LFxuICBcIltHUEwnVV1cIjoge1xuICAgIFwidmFsdWVcIjogMSxcbiAgICBcInVjdW1cIjogXCIxXCJcbiAgfSxcbiAgXCJbTVBMJ1VdXCI6IHtcbiAgICBcInZhbHVlXCI6IDEsXG4gICAgXCJ1Y3VtXCI6IFwiMVwiXG4gIH0sXG4gIFwiW0FQTCdVXVwiOiB7XG4gICAgXCJ2YWx1ZVwiOiAxLFxuICAgIFwidWN1bVwiOiBcIjFcIlxuICB9LFxuICBcIltiZXRoJ1VdXCI6IHtcbiAgICBcInZhbHVlXCI6IDEsXG4gICAgXCJ1Y3VtXCI6IFwiMVwiXG4gIH0sXG4gIFwiW2FudGknWGEnVV1cIjoge1xuICAgIFwidmFsdWVcIjogMSxcbiAgICBcInVjdW1cIjogXCIxXCJcbiAgfSxcbiAgXCJbdG9kZCdVXVwiOiB7XG4gICAgXCJ2YWx1ZVwiOiAxLFxuICAgIFwidWN1bVwiOiBcIjFcIlxuICB9LFxuICBcIltkeWUnVV1cIjoge1xuICAgIFwidmFsdWVcIjogMSxcbiAgICBcInVjdW1cIjogXCIxXCJcbiAgfSxcbiAgXCJbc21neSdVXVwiOiB7XG4gICAgXCJ2YWx1ZVwiOiAxLFxuICAgIFwidWN1bVwiOiBcIjFcIlxuICB9LFxuICBcIltiZHNrJ1VdXCI6IHtcbiAgICBcInZhbHVlXCI6IDEsXG4gICAgXCJ1Y3VtXCI6IFwiMVwiXG4gIH0sXG4gIFwiW2thJ1VdXCI6IHtcbiAgICBcInZhbHVlXCI6IDEsXG4gICAgXCJ1Y3VtXCI6IFwiMVwiXG4gIH0sXG4gIFwiW2tuaydVXVwiOiB7XG4gICAgXCJ2YWx1ZVwiOiAxLFxuICAgIFwidWN1bVwiOiBcIjFcIlxuICB9LFxuICBcIlttY2xnJ1VdXCI6IHtcbiAgICBcInZhbHVlXCI6IDEsXG4gICAgXCJ1Y3VtXCI6IFwiMVwiXG4gIH0sXG4gIFwiW3RiJ1VdXCI6IHtcbiAgICBcInZhbHVlXCI6IDEsXG4gICAgXCJ1Y3VtXCI6IFwiMVwiXG4gIH0sXG4gIFwiW0NDSURfNTBdXCI6IHtcbiAgICBcInZhbHVlXCI6IDEsXG4gICAgXCJ1Y3VtXCI6IFwiMVwiXG4gIH0sXG4gIFwiW1RDSURfNTBdXCI6IHtcbiAgICBcInZhbHVlXCI6IDEsXG4gICAgXCJ1Y3VtXCI6IFwiMVwiXG4gIH0sXG4gIFwiW0VJRF81MF1cIjoge1xuICAgIFwidmFsdWVcIjogMSxcbiAgICBcInVjdW1cIjogXCIxXCJcbiAgfSxcbiAgXCJbUEZVXVwiOiB7XG4gICAgXCJ2YWx1ZVwiOiAxLFxuICAgIFwidWN1bVwiOiBcIjFcIlxuICB9LFxuICBcIltGRlVdXCI6IHtcbiAgICBcInZhbHVlXCI6IDEsXG4gICAgXCJ1Y3VtXCI6IFwiMVwiXG4gIH0sXG4gIFwiW0NGVV1cIjoge1xuICAgIFwidmFsdWVcIjogMSxcbiAgICBcInVjdW1cIjogXCIxXCJcbiAgfSxcbiAgXCJbQkFVXVwiOiB7XG4gICAgXCJ2YWx1ZVwiOiAxLFxuICAgIFwidWN1bVwiOiBcIjFcIlxuICB9LFxuICBcIltBVV1cIjoge1xuICAgIFwidmFsdWVcIjogMSxcbiAgICBcInVjdW1cIjogXCIxXCJcbiAgfSxcbiAgXCJbQW1iJ2EnMSdVXVwiOiB7XG4gICAgXCJ2YWx1ZVwiOiAxLFxuICAgIFwidWN1bVwiOiBcIjFcIlxuICB9LFxuICBcIltQTlVdXCI6IHtcbiAgICBcInZhbHVlXCI6IDEsXG4gICAgXCJ1Y3VtXCI6IFwiMVwiXG4gIH0sXG4gIFwiW0xmXVwiOiB7XG4gICAgXCJ2YWx1ZVwiOiAxLFxuICAgIFwidWN1bVwiOiBcIjFcIlxuICB9LFxuICBcIltEJ2FnJ1VdXCI6IHtcbiAgICBcInZhbHVlXCI6IDEsXG4gICAgXCJ1Y3VtXCI6IFwiMVwiXG4gIH0sXG4gIFwiW0ZFVV1cIjoge1xuICAgIFwidmFsdWVcIjogMSxcbiAgICBcInVjdW1cIjogXCIxXCJcbiAgfSxcbiAgXCJbRUxVXVwiOiB7XG4gICAgXCJ2YWx1ZVwiOiAxLFxuICAgIFwidWN1bVwiOiBcIjFcIlxuICB9LFxuICBcIltFVV1cIjoge1xuICAgIFwidmFsdWVcIjogMSxcbiAgICBcInVjdW1cIjogXCIxXCJcbiAgfSxcbiAgXCJOcFwiOiB7XG4gICAgXCJ2YWx1ZVwiOiBudWxsLFxuICAgIFwidWN1bVwiOiBcImxuKDEgMSlcIlxuICB9LFxuICBcIkJcIjoge1xuICAgIFwidmFsdWVcIjogbnVsbCxcbiAgICBcInVjdW1cIjogXCJsZygxIDEpXCJcbiAgfSxcbiAgXCJCW1NQTF1cIjoge1xuICAgIFwidmFsdWVcIjogbnVsbCxcbiAgICBcInVjdW1cIjogXCIybGcoMiAxMCotNS5QYSlcIlxuICB9LFxuICBcIkJbVl1cIjoge1xuICAgIFwidmFsdWVcIjogbnVsbCxcbiAgICBcInVjdW1cIjogXCIybGcoMSBWKVwiXG4gIH0sXG4gIFwiQlttVl1cIjoge1xuICAgIFwidmFsdWVcIjogbnVsbCxcbiAgICBcInVjdW1cIjogXCIybGcoMSBtVilcIlxuICB9LFxuICBcIkJbdVZdXCI6IHtcbiAgICBcInZhbHVlXCI6IG51bGwsXG4gICAgXCJ1Y3VtXCI6IFwiMmxnKDEgdVYpXCJcbiAgfSxcbiAgXCJCWzEwLm5WXVwiOiB7XG4gICAgXCJ2YWx1ZVwiOiBudWxsLFxuICAgIFwidWN1bVwiOiBcIjJsZygxMCBuVilcIlxuICB9LFxuICBcIkJbV11cIjoge1xuICAgIFwidmFsdWVcIjogbnVsbCxcbiAgICBcInVjdW1cIjogXCJsZygxIFcpXCJcbiAgfSxcbiAgXCJCW2tXXVwiOiB7XG4gICAgXCJ2YWx1ZVwiOiBudWxsLFxuICAgIFwidWN1bVwiOiBcImxnKDEga1cpXCJcbiAgfSxcbiAgXCJzdFwiOiB7XG4gICAgXCJ2YWx1ZVwiOiAxLFxuICAgIFwidWN1bVwiOiBcIm0zXCJcbiAgfSxcbiAgXCJBb1wiOiB7XG4gICAgXCJ2YWx1ZVwiOiAwLjEsXG4gICAgXCJ1Y3VtXCI6IFwibm1cIlxuICB9LFxuICBcImJcIjoge1xuICAgIFwidmFsdWVcIjogMTAwLFxuICAgIFwidWN1bVwiOiBcImZtMlwiXG4gIH0sXG4gIFwiYXR0XCI6IHtcbiAgICBcInZhbHVlXCI6IDEsXG4gICAgXCJ1Y3VtXCI6IFwia2dmL2NtMlwiXG4gIH0sXG4gIFwibWhvXCI6IHtcbiAgICBcInZhbHVlXCI6IDEsXG4gICAgXCJ1Y3VtXCI6IFwiU1wiXG4gIH0sXG4gIFwiW3BzaV1cIjoge1xuICAgIFwidmFsdWVcIjogMSxcbiAgICBcInVjdW1cIjogXCJbbGJmX2F2XS9baW5faV0yXCJcbiAgfSxcbiAgXCJjaXJjXCI6IHtcbiAgICBcInZhbHVlXCI6IDIsXG4gICAgXCJ1Y3VtXCI6IFwiW3BpXS5yYWRcIlxuICB9LFxuICBcInNwaFwiOiB7XG4gICAgXCJ2YWx1ZVwiOiA0LFxuICAgIFwidWN1bVwiOiBcIltwaV0uc3JcIlxuICB9LFxuICBcIltjYXJfbV1cIjoge1xuICAgIFwidmFsdWVcIjogMC4yLFxuICAgIFwidWN1bVwiOiBcImdcIlxuICB9LFxuICBcIltjYXJfQXVdXCI6IHtcbiAgICBcInZhbHVlXCI6IDEsXG4gICAgXCJ1Y3VtXCI6IFwiLzI0XCJcbiAgfSxcbiAgXCJbc21vb3RdXCI6IHtcbiAgICBcInZhbHVlXCI6IDY3LFxuICAgIFwidWN1bVwiOiBcIltpbl9pXVwiXG4gIH0sXG4gIFwiYml0X3NcIjoge1xuICAgIFwidmFsdWVcIjogbnVsbCxcbiAgICBcInVjdW1cIjogXCJsZCgxIDEpXCJcbiAgfSxcbiAgXCJiaXRcIjoge1xuICAgIFwidmFsdWVcIjogMSxcbiAgICBcInVjdW1cIjogXCIxXCJcbiAgfSxcbiAgXCJCeVwiOiB7XG4gICAgXCJ2YWx1ZVwiOiA4LFxuICAgIFwidWN1bVwiOiBcImJpdFwiXG4gIH0sXG4gIFwiQmRcIjoge1xuICAgIFwidmFsdWVcIjogMSxcbiAgICBcInVjdW1cIjogXCIvc1wiXG4gIH1cbn1cbiIsIm1vZHVsZS5leHBvcnRzPXtcIm1vbFwiOnRydWUsXCJzclwiOnRydWUsXCJIelwiOnRydWUsXCJOXCI6dHJ1ZSxcIlBhXCI6dHJ1ZSxcIkpcIjp0cnVlLFwiV1wiOnRydWUsXCJBXCI6dHJ1ZSxcIlZcIjp0cnVlLFwiRlwiOnRydWUsXCJPaG1cIjp0cnVlLFwiU1wiOnRydWUsXCJXYlwiOnRydWUsXCJDZWxcIjp0cnVlLFwiVFwiOnRydWUsXCJIXCI6dHJ1ZSxcImxtXCI6dHJ1ZSxcImx4XCI6dHJ1ZSxcIkJxXCI6dHJ1ZSxcIkd5XCI6dHJ1ZSxcIlN2XCI6dHJ1ZSxcImxcIjp0cnVlLFwiTFwiOnRydWUsXCJhclwiOnRydWUsXCJ0XCI6dHJ1ZSxcImJhclwiOnRydWUsXCJ1XCI6dHJ1ZSxcImVWXCI6dHJ1ZSxcInBjXCI6dHJ1ZSxcIltjXVwiOnRydWUsXCJbaF1cIjp0cnVlLFwiW2tdXCI6dHJ1ZSxcIltlcHNfMF1cIjp0cnVlLFwiW211XzBdXCI6dHJ1ZSxcIltlXVwiOnRydWUsXCJbbV9lXVwiOnRydWUsXCJbbV9wXVwiOnRydWUsXCJbR11cIjp0cnVlLFwiW2ddXCI6dHJ1ZSxcIltseV1cIjp0cnVlLFwiZ2ZcIjp0cnVlLFwiS3lcIjp0cnVlLFwiR2FsXCI6dHJ1ZSxcImR5blwiOnRydWUsXCJlcmdcIjp0cnVlLFwiUFwiOnRydWUsXCJCaVwiOnRydWUsXCJTdFwiOnRydWUsXCJNeFwiOnRydWUsXCJHXCI6dHJ1ZSxcIk9lXCI6dHJ1ZSxcIkdiXCI6dHJ1ZSxcInNiXCI6dHJ1ZSxcIkxtYlwiOnRydWUsXCJwaFwiOnRydWUsXCJDaVwiOnRydWUsXCJSXCI6dHJ1ZSxcIlJBRFwiOnRydWUsXCJSRU1cIjp0cnVlLFwiY2FsX1sxNV1cIjp0cnVlLFwiY2FsX1syMF1cIjp0cnVlLFwiY2FsX21cIjp0cnVlLFwiY2FsX0lUXCI6dHJ1ZSxcImNhbF90aFwiOnRydWUsXCJjYWxcIjp0cnVlLFwidGV4XCI6dHJ1ZSxcIm1bSDJPXVwiOnRydWUsXCJtW0hnXVwiOnRydWUsXCJlcVwiOnRydWUsXCJvc21cIjp0cnVlLFwiZyVcIjp0cnVlLFwia2F0XCI6dHJ1ZSxcIlVcIjp0cnVlLFwiW2lVXVwiOnRydWUsXCJbSVVdXCI6dHJ1ZSxcIk5wXCI6dHJ1ZSxcIkJcIjp0cnVlLFwiQltTUExdXCI6dHJ1ZSxcIkJbVl1cIjp0cnVlLFwiQlttVl1cIjp0cnVlLFwiQlt1Vl1cIjp0cnVlLFwiQlsxMC5uVl1cIjp0cnVlLFwiQltXXVwiOnRydWUsXCJCW2tXXVwiOnRydWUsXCJzdFwiOnRydWUsXCJtaG9cIjp0cnVlLFwiYml0XCI6dHJ1ZSxcIkJ5XCI6dHJ1ZSxcIkJkXCI6dHJ1ZSxcIm1cIjp0cnVlLFwic1wiOnRydWUsXCJnXCI6dHJ1ZSxcInJhZFwiOnRydWUsXCJLXCI6dHJ1ZSxcIkNcIjp0cnVlLFwiY2RcIjp0cnVlfVxuIiwibW9kdWxlLmV4cG9ydHM9e1xuICBcIllcIjogMWUrMjQsXG4gIFwiWlwiOiAxZSsyMSxcbiAgXCJFXCI6IDEwMDAwMDAwMDAwMDAwMDAwMDAsXG4gIFwiUFwiOiAxMDAwMDAwMDAwMDAwMDAwLFxuICBcIlRcIjogMTAwMDAwMDAwMDAwMCxcbiAgXCJHXCI6IDEwMDAwMDAwMDAsXG4gIFwiTVwiOiAxMDAwMDAwLFxuICBcImtcIjogMTAwMCxcbiAgXCJoXCI6IDEwMCxcbiAgXCJkYVwiOiAxMCxcbiAgXCJkXCI6IDAuMSxcbiAgXCJjXCI6IDAuMDEsXG4gIFwibVwiOiAwLjAwMSxcbiAgXCJ1XCI6IDAuMDAwMDAxLFxuICBcIm5cIjogMWUtOSxcbiAgXCJwXCI6IDFlLTEyLFxuICBcImZcIjogMWUtMTUsXG4gIFwiYVwiOiAxZS0xOCxcbiAgXCJ6XCI6IDFlLTIxLFxuICBcInlcIjogMWUtMjQsXG4gIFwiS2lcIjogMTAyNCxcbiAgXCJNaVwiOiAxMDQ4NTc2LFxuICBcIkdpXCI6IDEwNzM3NDE4MjQsXG4gIFwiVGlcIjogMTA5OTUxMTYyNzc3NlxufVxuIiwibW9kdWxlLmV4cG9ydHMgPSAoZnVuY3Rpb24oKSB7XG4gIC8qXG4gICAqIEdlbmVyYXRlZCBieSBQRUcuanMgMC44LjAuXG4gICAqXG4gICAqIGh0dHA6Ly9wZWdqcy5tYWpkYS5jei9cbiAgICovXG5cbiAgZnVuY3Rpb24gcGVnJHN1YmNsYXNzKGNoaWxkLCBwYXJlbnQpIHtcbiAgICBmdW5jdGlvbiBjdG9yKCkgeyB0aGlzLmNvbnN0cnVjdG9yID0gY2hpbGQ7IH1cbiAgICBjdG9yLnByb3RvdHlwZSA9IHBhcmVudC5wcm90b3R5cGU7XG4gICAgY2hpbGQucHJvdG90eXBlID0gbmV3IGN0b3IoKTtcbiAgfVxuXG4gIGZ1bmN0aW9uIFN5bnRheEVycm9yKG1lc3NhZ2UsIGV4cGVjdGVkLCBmb3VuZCwgb2Zmc2V0LCBsaW5lLCBjb2x1bW4pIHtcbiAgICB0aGlzLm1lc3NhZ2UgID0gbWVzc2FnZTtcbiAgICB0aGlzLmV4cGVjdGVkID0gZXhwZWN0ZWQ7XG4gICAgdGhpcy5mb3VuZCAgICA9IGZvdW5kO1xuICAgIHRoaXMub2Zmc2V0ICAgPSBvZmZzZXQ7XG4gICAgdGhpcy5saW5lICAgICA9IGxpbmU7XG4gICAgdGhpcy5jb2x1bW4gICA9IGNvbHVtbjtcblxuICAgIHRoaXMubmFtZSAgICAgPSBcIlN5bnRheEVycm9yXCI7XG4gIH1cblxuICBwZWckc3ViY2xhc3MoU3ludGF4RXJyb3IsIEVycm9yKTtcblxuICBmdW5jdGlvbiBwYXJzZShpbnB1dCkge1xuICAgIHZhciBvcHRpb25zID0gYXJndW1lbnRzLmxlbmd0aCA+IDEgPyBhcmd1bWVudHNbMV0gOiB7fSxcblxuICAgICAgICBwZWckRkFJTEVEID0ge30sXG5cbiAgICAgICAgcGVnJHN0YXJ0UnVsZUluZGljZXMgPSB7IHN0YXJ0OiAwIH0sXG4gICAgICAgIHBlZyRzdGFydFJ1bGVJbmRleCAgID0gMCxcblxuICAgICAgICBwZWckY29uc3RzID0gW1xuICAgICAgICAgIGZ1bmN0aW9uKGUpIHtcbiAgICAgICAgICAgIHJldHVybiBlIDsgLy8gY2xlYW51cChlKTtcbiAgICAgICAgICB9LFxuICAgICAgICAgIHBlZyRGQUlMRUQsXG4gICAgICAgICAgXCIvXCIsXG4gICAgICAgICAgeyB0eXBlOiBcImxpdGVyYWxcIiwgdmFsdWU6IFwiL1wiLCBkZXNjcmlwdGlvbjogXCJcXFwiL1xcXCJcIiB9LFxuICAgICAgICAgIGZ1bmN0aW9uKGUpIHtyZXR1cm4gbXVsdGlwbHkoe3ZhbHVlOjEsIHVuaXRzOnt9fSwgW1tcIi9cIiwgZV1dKTt9LFxuICAgICAgICAgIFwiLlwiLFxuICAgICAgICAgIHsgdHlwZTogXCJsaXRlcmFsXCIsIHZhbHVlOiBcIi5cIiwgZGVzY3JpcHRpb246IFwiXFxcIi5cXFwiXCIgfSxcbiAgICAgICAgICBbXSxcbiAgICAgICAgICBmdW5jdGlvbih0LCBtcykge1xuICAgICAgICAgICAgcmV0dXJuIG11bHRpcGx5KHQsIG1zKTtcbiAgICAgICAgICB9LFxuICAgICAgICAgIG51bGwsXG4gICAgICAgICAgZnVuY3Rpb24oZSwgZXhwKSB7cmV0dXJuIGUuYW5uICYmIGV4cDt9LFxuICAgICAgICAgIHZvaWQgMCxcbiAgICAgICAgICBmdW5jdGlvbihlLCBleHApIHtcbiAgICAgICAgICAgIHJldHVybiB0b3Bvd2VyKGUsIGV4cCk7XG4gICAgICAgICAgfSxcbiAgICAgICAgICBmdW5jdGlvbihkKSB7XG4gICAgICAgICAgIHZhciByZXQgPSB7XG4gICAgICAgICAgICAgIHZhbHVlOiBkLFxuICAgICAgICAgICAgICB1bml0czoge31cbiAgICAgICAgICAgIH07XG4gICAgICAgICAgICByZXR1cm4gcmV0O1xuICAgICAgICAgIH0sXG4gICAgICAgICAgZnVuY3Rpb24odSkge3JldHVybiB1O30sXG4gICAgICAgICAgXCIoXCIsXG4gICAgICAgICAgeyB0eXBlOiBcImxpdGVyYWxcIiwgdmFsdWU6IFwiKFwiLCBkZXNjcmlwdGlvbjogXCJcXFwiKFxcXCJcIiB9LFxuICAgICAgICAgIFwiKVwiLFxuICAgICAgICAgIHsgdHlwZTogXCJsaXRlcmFsXCIsIHZhbHVlOiBcIilcIiwgZGVzY3JpcHRpb246IFwiXFxcIilcXFwiXCIgfSxcbiAgICAgICAgICBmdW5jdGlvbihlKSB7cmV0dXJuIGU7fSxcbiAgICAgICAgICAvXlsrXFwtXS8sXG4gICAgICAgICAgeyB0eXBlOiBcImNsYXNzXCIsIHZhbHVlOiBcIlsrXFxcXC1dXCIsIGRlc2NyaXB0aW9uOiBcIlsrXFxcXC1dXCIgfSxcbiAgICAgICAgICBmdW5jdGlvbihzLCBkKSB7cmV0dXJuIChzPT1cIi1cIikgPyAoLTEqZCkgOiBkfSxcbiAgICAgICAgICBmdW5jdGlvbihwLCBhKSB7cmV0dXJuKHAgJiYgIWlzbWV0cmljKGEpKTt9LFxuICAgICAgICAgIGZ1bmN0aW9uKHAsIGEpIHtcbiAgICAgICAgICAgIHZhciByZXQgPSBhO1xuICAgICAgICAgICAgaWYgKHApIHJldC52YWx1ZSA9IHJldC52YWx1ZSAqIHByZWZpeGVzW3BdO1xuICAgICAgICAgICAgcmV0dXJuIHJldDtcbiAgICAgICAgICB9LFxuICAgICAgICAgIC9eWzAtOV0vLFxuICAgICAgICAgIHsgdHlwZTogXCJjbGFzc1wiLCB2YWx1ZTogXCJbMC05XVwiLCBkZXNjcmlwdGlvbjogXCJbMC05XVwiIH0sXG4gICAgICAgICAgXCJlXCIsXG4gICAgICAgICAgeyB0eXBlOiBcImxpdGVyYWxcIiwgdmFsdWU6IFwiZVwiLCBkZXNjcmlwdGlvbjogXCJcXFwiZVxcXCJcIiB9LFxuICAgICAgICAgIGZ1bmN0aW9uKHYsIGVwcmVzZW50LCBlKSB7cmV0dXJuICghZXByZXNlbnQgJiYgISFlKTt9LFxuICAgICAgICAgIGZ1bmN0aW9uKHYsIGVwcmVzZW50LCBlKSB7XG4gICAgICAgICAgICByZXR1cm4gcGFyc2VJbnQodi5qb2luKFwiXCIpKSpNYXRoLnBvdygxMCwgZXx8MCk7XG4gICAgICAgICAgfSxcbiAgICAgICAgICBcIntcIixcbiAgICAgICAgICB7IHR5cGU6IFwibGl0ZXJhbFwiLCB2YWx1ZTogXCJ7XCIsIGRlc2NyaXB0aW9uOiBcIlxcXCJ7XFxcIlwiIH0sXG4gICAgICAgICAgL15bXn1dLyxcbiAgICAgICAgICB7IHR5cGU6IFwiY2xhc3NcIiwgdmFsdWU6IFwiW159XVwiLCBkZXNjcmlwdGlvbjogXCJbXn1dXCIgfSxcbiAgICAgICAgICBcIn1cIixcbiAgICAgICAgICB7IHR5cGU6IFwibGl0ZXJhbFwiLCB2YWx1ZTogXCJ9XCIsIGRlc2NyaXB0aW9uOiBcIlxcXCJ9XFxcIlwiIH0sXG4gICAgICAgICAgZnVuY3Rpb24obSkge3JldHVybiAvW15cXHgwMC1cXHg3Rl0vLnRlc3QobSk7fSxcbiAgICAgICAgICBmdW5jdGlvbihtKSB7IHJldHVybiB7dmFsdWU6IDEsIHVuaXRzOnt9LCBhbm46IG19IH0sXG4gICAgICAgICAgXCJbYW50aSdYYSdVXVwiLFxuICAgICAgICAgIHsgdHlwZTogXCJsaXRlcmFsXCIsIHZhbHVlOiBcIlthbnRpJ1hhJ1VdXCIsIGRlc2NyaXB0aW9uOiBcIlxcXCJbYW50aSdYYSdVXVxcXCJcIiB9LFxuICAgICAgICAgIGZ1bmN0aW9uKHUpIHtyZXR1cm4ge3ZhbHVlOiAxLCB1bml0czoge1wiW2FudGknWGEnVV1cIjogMX19O30sXG4gICAgICAgICAgXCJbQW1iJ2EnMSdVXVwiLFxuICAgICAgICAgIHsgdHlwZTogXCJsaXRlcmFsXCIsIHZhbHVlOiBcIltBbWInYScxJ1VdXCIsIGRlc2NyaXB0aW9uOiBcIlxcXCJbQW1iJ2EnMSdVXVxcXCJcIiB9LFxuICAgICAgICAgIGZ1bmN0aW9uKHUpIHtyZXR1cm4ge3ZhbHVlOiAxLCB1bml0czoge1wiW0FtYidhJzEnVV1cIjogMX19O30sXG4gICAgICAgICAgXCJbc3RvbmVfYXZdXCIsXG4gICAgICAgICAgeyB0eXBlOiBcImxpdGVyYWxcIiwgdmFsdWU6IFwiW3N0b25lX2F2XVwiLCBkZXNjcmlwdGlvbjogXCJcXFwiW3N0b25lX2F2XVxcXCJcIiB9LFxuICAgICAgICAgIGZ1bmN0aW9uKHUpIHtyZXR1cm4ge3ZhbHVlOiAxLCB1bml0czoge1wiW3N0b25lX2F2XVwiOiAxfX07fSxcbiAgICAgICAgICBcIltpbl9pJ0gyT11cIixcbiAgICAgICAgICB7IHR5cGU6IFwibGl0ZXJhbFwiLCB2YWx1ZTogXCJbaW5faSdIMk9dXCIsIGRlc2NyaXB0aW9uOiBcIlxcXCJbaW5faSdIMk9dXFxcIlwiIH0sXG4gICAgICAgICAgZnVuY3Rpb24odSkge3JldHVybiB7dmFsdWU6IDEsIHVuaXRzOiB7XCJbaW5faSdIMk9dXCI6IDF9fTt9LFxuICAgICAgICAgIFwiW3N0b25fYXZdXCIsXG4gICAgICAgICAgeyB0eXBlOiBcImxpdGVyYWxcIiwgdmFsdWU6IFwiW3N0b25fYXZdXCIsIGRlc2NyaXB0aW9uOiBcIlxcXCJbc3Rvbl9hdl1cXFwiXCIgfSxcbiAgICAgICAgICBmdW5jdGlvbih1KSB7cmV0dXJuIHt2YWx1ZTogMSwgdW5pdHM6IHtcIltzdG9uX2F2XVwiOiAxfX07fSxcbiAgICAgICAgICBcIltUQ0lEXzUwXVwiLFxuICAgICAgICAgIHsgdHlwZTogXCJsaXRlcmFsXCIsIHZhbHVlOiBcIltUQ0lEXzUwXVwiLCBkZXNjcmlwdGlvbjogXCJcXFwiW1RDSURfNTBdXFxcIlwiIH0sXG4gICAgICAgICAgZnVuY3Rpb24odSkge3JldHVybiB7dmFsdWU6IDEsIHVuaXRzOiB7XCJbVENJRF81MF1cIjogMX19O30sXG4gICAgICAgICAgXCJbQ0NJRF81MF1cIixcbiAgICAgICAgICB7IHR5cGU6IFwibGl0ZXJhbFwiLCB2YWx1ZTogXCJbQ0NJRF81MF1cIiwgZGVzY3JpcHRpb246IFwiXFxcIltDQ0lEXzUwXVxcXCJcIiB9LFxuICAgICAgICAgIGZ1bmN0aW9uKHUpIHtyZXR1cm4ge3ZhbHVlOiAxLCB1bml0czoge1wiW0NDSURfNTBdXCI6IDF9fTt9LFxuICAgICAgICAgIFwiW3Njd3RfYXZdXCIsXG4gICAgICAgICAgeyB0eXBlOiBcImxpdGVyYWxcIiwgdmFsdWU6IFwiW3Njd3RfYXZdXCIsIGRlc2NyaXB0aW9uOiBcIlxcXCJbc2N3dF9hdl1cXFwiXCIgfSxcbiAgICAgICAgICBmdW5jdGlvbih1KSB7cmV0dXJuIHt2YWx1ZTogMSwgdW5pdHM6IHtcIltzY3d0X2F2XVwiOiAxfX07fSxcbiAgICAgICAgICBcIltsY3d0X2F2XVwiLFxuICAgICAgICAgIHsgdHlwZTogXCJsaXRlcmFsXCIsIHZhbHVlOiBcIltsY3d0X2F2XVwiLCBkZXNjcmlwdGlvbjogXCJcXFwiW2xjd3RfYXZdXFxcIlwiIH0sXG4gICAgICAgICAgZnVuY3Rpb24odSkge3JldHVybiB7dmFsdWU6IDEsIHVuaXRzOiB7XCJbbGN3dF9hdl1cIjogMX19O30sXG4gICAgICAgICAgXCJbbHRvbl9hdl1cIixcbiAgICAgICAgICB7IHR5cGU6IFwibGl0ZXJhbFwiLCB2YWx1ZTogXCJbbHRvbl9hdl1cIiwgZGVzY3JpcHRpb246IFwiXFxcIltsdG9uX2F2XVxcXCJcIiB9LFxuICAgICAgICAgIGZ1bmN0aW9uKHUpIHtyZXR1cm4ge3ZhbHVlOiAxLCB1bml0czoge1wiW2x0b25fYXZdXCI6IDF9fTt9LFxuICAgICAgICAgIFwiW2luX2knSGddXCIsXG4gICAgICAgICAgeyB0eXBlOiBcImxpdGVyYWxcIiwgdmFsdWU6IFwiW2luX2knSGddXCIsIGRlc2NyaXB0aW9uOiBcIlxcXCJbaW5faSdIZ11cXFwiXCIgfSxcbiAgICAgICAgICBmdW5jdGlvbih1KSB7cmV0dXJuIHt2YWx1ZTogMSwgdW5pdHM6IHtcIltpbl9pJ0hnXVwiOiAxfX07fSxcbiAgICAgICAgICBcIlt0YnNfdXNdXCIsXG4gICAgICAgICAgeyB0eXBlOiBcImxpdGVyYWxcIiwgdmFsdWU6IFwiW3Ric191c11cIiwgZGVzY3JpcHRpb246IFwiXFxcIlt0YnNfdXNdXFxcIlwiIH0sXG4gICAgICAgICAgZnVuY3Rpb24odSkge3JldHVybiB7dmFsdWU6IDEsIHVuaXRzOiB7XCJbdGJzX3VzXVwiOiAxfX07fSxcbiAgICAgICAgICBcIltkcHRfdXNdXCIsXG4gICAgICAgICAgeyB0eXBlOiBcImxpdGVyYWxcIiwgdmFsdWU6IFwiW2RwdF91c11cIiwgZGVzY3JpcHRpb246IFwiXFxcIltkcHRfdXNdXFxcIlwiIH0sXG4gICAgICAgICAgZnVuY3Rpb24odSkge3JldHVybiB7dmFsdWU6IDEsIHVuaXRzOiB7XCJbZHB0X3VzXVwiOiAxfX07fSxcbiAgICAgICAgICBcIltiZHNrJ1VdXCIsXG4gICAgICAgICAgeyB0eXBlOiBcImxpdGVyYWxcIiwgdmFsdWU6IFwiW2Jkc2snVV1cIiwgZGVzY3JpcHRpb246IFwiXFxcIltiZHNrJ1VdXFxcIlwiIH0sXG4gICAgICAgICAgZnVuY3Rpb24odSkge3JldHVybiB7dmFsdWU6IDEsIHVuaXRzOiB7XCJbYmRzaydVXVwiOiAxfX07fSxcbiAgICAgICAgICBcIltzbWd5J1VdXCIsXG4gICAgICAgICAgeyB0eXBlOiBcImxpdGVyYWxcIiwgdmFsdWU6IFwiW3NtZ3knVV1cIiwgZGVzY3JpcHRpb246IFwiXFxcIltzbWd5J1VdXFxcIlwiIH0sXG4gICAgICAgICAgZnVuY3Rpb24odSkge3JldHVybiB7dmFsdWU6IDEsIHVuaXRzOiB7XCJbc21neSdVXVwiOiAxfX07fSxcbiAgICAgICAgICBcIltkcXRfdXNdXCIsXG4gICAgICAgICAgeyB0eXBlOiBcImxpdGVyYWxcIiwgdmFsdWU6IFwiW2RxdF91c11cIiwgZGVzY3JpcHRpb246IFwiXFxcIltkcXRfdXNdXFxcIlwiIH0sXG4gICAgICAgICAgZnVuY3Rpb24odSkge3JldHVybiB7dmFsdWU6IDEsIHVuaXRzOiB7XCJbZHF0X3VzXVwiOiAxfX07fSxcbiAgICAgICAgICBcIlt0b2RkJ1VdXCIsXG4gICAgICAgICAgeyB0eXBlOiBcImxpdGVyYWxcIiwgdmFsdWU6IFwiW3RvZGQnVV1cIiwgZGVzY3JpcHRpb246IFwiXFxcIlt0b2RkJ1VdXFxcIlwiIH0sXG4gICAgICAgICAgZnVuY3Rpb24odSkge3JldHVybiB7dmFsdWU6IDEsIHVuaXRzOiB7XCJbdG9kZCdVXVwiOiAxfX07fSxcbiAgICAgICAgICBcIltEJ2FnJ1VdXCIsXG4gICAgICAgICAgeyB0eXBlOiBcImxpdGVyYWxcIiwgdmFsdWU6IFwiW0QnYWcnVV1cIiwgZGVzY3JpcHRpb246IFwiXFxcIltEJ2FnJ1VdXFxcIlwiIH0sXG4gICAgICAgICAgZnVuY3Rpb24odSkge3JldHVybiB7dmFsdWU6IDEsIHVuaXRzOiB7XCJbRCdhZydVXVwiOiAxfX07fSxcbiAgICAgICAgICBcIltiZXRoJ1VdXCIsXG4gICAgICAgICAgeyB0eXBlOiBcImxpdGVyYWxcIiwgdmFsdWU6IFwiW2JldGgnVV1cIiwgZGVzY3JpcHRpb246IFwiXFxcIltiZXRoJ1VdXFxcIlwiIH0sXG4gICAgICAgICAgZnVuY3Rpb24odSkge3JldHVybiB7dmFsdWU6IDEsIHVuaXRzOiB7XCJbYmV0aCdVXVwiOiAxfX07fSxcbiAgICAgICAgICBcIltnYWxfd2ldXCIsXG4gICAgICAgICAgeyB0eXBlOiBcImxpdGVyYWxcIiwgdmFsdWU6IFwiW2dhbF93aV1cIiwgZGVzY3JpcHRpb246IFwiXFxcIltnYWxfd2ldXFxcIlwiIH0sXG4gICAgICAgICAgZnVuY3Rpb24odSkge3JldHVybiB7dmFsdWU6IDEsIHVuaXRzOiB7XCJbZ2FsX3dpXVwiOiAxfX07fSxcbiAgICAgICAgICBcIltjcmRfdXNdXCIsXG4gICAgICAgICAgeyB0eXBlOiBcImxpdGVyYWxcIiwgdmFsdWU6IFwiW2NyZF91c11cIiwgZGVzY3JpcHRpb246IFwiXFxcIltjcmRfdXNdXFxcIlwiIH0sXG4gICAgICAgICAgZnVuY3Rpb24odSkge3JldHVybiB7dmFsdWU6IDEsIHVuaXRzOiB7XCJbY3JkX3VzXVwiOiAxfX07fSxcbiAgICAgICAgICBcIlttaW5fdXNdXCIsXG4gICAgICAgICAgeyB0eXBlOiBcImxpdGVyYWxcIiwgdmFsdWU6IFwiW21pbl91c11cIiwgZGVzY3JpcHRpb246IFwiXFxcIlttaW5fdXNdXFxcIlwiIH0sXG4gICAgICAgICAgZnVuY3Rpb24odSkge3JldHVybiB7dmFsdWU6IDEsIHVuaXRzOiB7XCJbbWluX3VzXVwiOiAxfX07fSxcbiAgICAgICAgICBcIltmZHJfdXNdXCIsXG4gICAgICAgICAgeyB0eXBlOiBcImxpdGVyYWxcIiwgdmFsdWU6IFwiW2Zkcl91c11cIiwgZGVzY3JpcHRpb246IFwiXFxcIltmZHJfdXNdXFxcIlwiIH0sXG4gICAgICAgICAgZnVuY3Rpb24odSkge3JldHVybiB7dmFsdWU6IDEsIHVuaXRzOiB7XCJbZmRyX3VzXVwiOiAxfX07fSxcbiAgICAgICAgICBcIltmb3pfdXNdXCIsXG4gICAgICAgICAgeyB0eXBlOiBcImxpdGVyYWxcIiwgdmFsdWU6IFwiW2Zvel91c11cIiwgZGVzY3JpcHRpb246IFwiXFxcIltmb3pfdXNdXFxcIlwiIH0sXG4gICAgICAgICAgZnVuY3Rpb24odSkge3JldHVybiB7dmFsdWU6IDEsIHVuaXRzOiB7XCJbZm96X3VzXVwiOiAxfX07fSxcbiAgICAgICAgICBcIltnaWxfdXNdXCIsXG4gICAgICAgICAgeyB0eXBlOiBcImxpdGVyYWxcIiwgdmFsdWU6IFwiW2dpbF91c11cIiwgZGVzY3JpcHRpb246IFwiXFxcIltnaWxfdXNdXFxcIlwiIH0sXG4gICAgICAgICAgZnVuY3Rpb24odSkge3JldHVybiB7dmFsdWU6IDEsIHVuaXRzOiB7XCJbZ2lsX3VzXVwiOiAxfX07fSxcbiAgICAgICAgICBcIltiYmxfdXNdXCIsXG4gICAgICAgICAgeyB0eXBlOiBcImxpdGVyYWxcIiwgdmFsdWU6IFwiW2JibF91c11cIiwgZGVzY3JpcHRpb246IFwiXFxcIltiYmxfdXNdXFxcIlwiIH0sXG4gICAgICAgICAgZnVuY3Rpb24odSkge3JldHVybiB7dmFsdWU6IDEsIHVuaXRzOiB7XCJbYmJsX3VzXVwiOiAxfX07fSxcbiAgICAgICAgICBcIltnYWxfdXNdXCIsXG4gICAgICAgICAgeyB0eXBlOiBcImxpdGVyYWxcIiwgdmFsdWU6IFwiW2dhbF91c11cIiwgZGVzY3JpcHRpb246IFwiXFxcIltnYWxfdXNdXFxcIlwiIH0sXG4gICAgICAgICAgZnVuY3Rpb24odSkge3JldHVybiB7dmFsdWU6IDEsIHVuaXRzOiB7XCJbZ2FsX3VzXVwiOiAxfX07fSxcbiAgICAgICAgICBcIlthY3JfYnJdXCIsXG4gICAgICAgICAgeyB0eXBlOiBcImxpdGVyYWxcIiwgdmFsdWU6IFwiW2Fjcl9icl1cIiwgZGVzY3JpcHRpb246IFwiXFxcIlthY3JfYnJdXFxcIlwiIH0sXG4gICAgICAgICAgZnVuY3Rpb24odSkge3JldHVybiB7dmFsdWU6IDEsIHVuaXRzOiB7XCJbYWNyX2JyXVwiOiAxfX07fSxcbiAgICAgICAgICBcIltubWlfYnJdXCIsXG4gICAgICAgICAgeyB0eXBlOiBcImxpdGVyYWxcIiwgdmFsdWU6IFwiW25taV9icl1cIiwgZGVzY3JpcHRpb246IFwiXFxcIltubWlfYnJdXFxcIlwiIH0sXG4gICAgICAgICAgZnVuY3Rpb24odSkge3JldHVybiB7dmFsdWU6IDEsIHVuaXRzOiB7XCJbbm1pX2JyXVwiOiAxfX07fSxcbiAgICAgICAgICBcIltmdGhfYnJdXCIsXG4gICAgICAgICAgeyB0eXBlOiBcImxpdGVyYWxcIiwgdmFsdWU6IFwiW2Z0aF9icl1cIiwgZGVzY3JpcHRpb246IFwiXFxcIltmdGhfYnJdXFxcIlwiIH0sXG4gICAgICAgICAgZnVuY3Rpb24odSkge3JldHVybiB7dmFsdWU6IDEsIHVuaXRzOiB7XCJbZnRoX2JyXVwiOiAxfX07fSxcbiAgICAgICAgICBcIlttaWxfdXNdXCIsXG4gICAgICAgICAgeyB0eXBlOiBcImxpdGVyYWxcIiwgdmFsdWU6IFwiW21pbF91c11cIiwgZGVzY3JpcHRpb246IFwiXFxcIlttaWxfdXNdXFxcIlwiIH0sXG4gICAgICAgICAgZnVuY3Rpb24odSkge3JldHVybiB7dmFsdWU6IDEsIHVuaXRzOiB7XCJbbWlsX3VzXVwiOiAxfX07fSxcbiAgICAgICAgICBcIltzbWlfdXNdXCIsXG4gICAgICAgICAgeyB0eXBlOiBcImxpdGVyYWxcIiwgdmFsdWU6IFwiW3NtaV91c11cIiwgZGVzY3JpcHRpb246IFwiXFxcIltzbWlfdXNdXFxcIlwiIH0sXG4gICAgICAgICAgZnVuY3Rpb24odSkge3JldHVybiB7dmFsdWU6IDEsIHVuaXRzOiB7XCJbc21pX3VzXVwiOiAxfX07fSxcbiAgICAgICAgICBcIlthY3JfdXNdXCIsXG4gICAgICAgICAgeyB0eXBlOiBcImxpdGVyYWxcIiwgdmFsdWU6IFwiW2Fjcl91c11cIiwgZGVzY3JpcHRpb246IFwiXFxcIlthY3JfdXNdXFxcIlwiIH0sXG4gICAgICAgICAgZnVuY3Rpb24odSkge3JldHVybiB7dmFsdWU6IDEsIHVuaXRzOiB7XCJbYWNyX3VzXVwiOiAxfX07fSxcbiAgICAgICAgICBcIltmdXJfdXNdXCIsXG4gICAgICAgICAgeyB0eXBlOiBcImxpdGVyYWxcIiwgdmFsdWU6IFwiW2Z1cl91c11cIiwgZGVzY3JpcHRpb246IFwiXFxcIltmdXJfdXNdXFxcIlwiIH0sXG4gICAgICAgICAgZnVuY3Rpb24odSkge3JldHVybiB7dmFsdWU6IDEsIHVuaXRzOiB7XCJbZnVyX3VzXVwiOiAxfX07fSxcbiAgICAgICAgICBcIltmdGhfdXNdXCIsXG4gICAgICAgICAgeyB0eXBlOiBcImxpdGVyYWxcIiwgdmFsdWU6IFwiW2Z0aF91c11cIiwgZGVzY3JpcHRpb246IFwiXFxcIltmdGhfdXNdXFxcIlwiIH0sXG4gICAgICAgICAgZnVuY3Rpb24odSkge3JldHVybiB7dmFsdWU6IDEsIHVuaXRzOiB7XCJbZnRoX3VzXVwiOiAxfX07fSxcbiAgICAgICAgICBcIltybGtfdXNdXCIsXG4gICAgICAgICAgeyB0eXBlOiBcImxpdGVyYWxcIiwgdmFsdWU6IFwiW3Jsa191c11cIiwgZGVzY3JpcHRpb246IFwiXFxcIltybGtfdXNdXFxcIlwiIH0sXG4gICAgICAgICAgZnVuY3Rpb24odSkge3JldHVybiB7dmFsdWU6IDEsIHVuaXRzOiB7XCJbcmxrX3VzXVwiOiAxfX07fSxcbiAgICAgICAgICBcIltyY2hfdXNdXCIsXG4gICAgICAgICAgeyB0eXBlOiBcImxpdGVyYWxcIiwgdmFsdWU6IFwiW3JjaF91c11cIiwgZGVzY3JpcHRpb246IFwiXFxcIltyY2hfdXNdXFxcIlwiIH0sXG4gICAgICAgICAgZnVuY3Rpb24odSkge3JldHVybiB7dmFsdWU6IDEsIHVuaXRzOiB7XCJbcmNoX3VzXVwiOiAxfX07fSxcbiAgICAgICAgICBcIltsYmZfYXZdXCIsXG4gICAgICAgICAgeyB0eXBlOiBcImxpdGVyYWxcIiwgdmFsdWU6IFwiW2xiZl9hdl1cIiwgZGVzY3JpcHRpb246IFwiXFxcIltsYmZfYXZdXFxcIlwiIH0sXG4gICAgICAgICAgZnVuY3Rpb24odSkge3JldHVybiB7dmFsdWU6IDEsIHVuaXRzOiB7XCJbbGJmX2F2XVwiOiAxfX07fSxcbiAgICAgICAgICBcIltobnNmJ1VdXCIsXG4gICAgICAgICAgeyB0eXBlOiBcImxpdGVyYWxcIiwgdmFsdWU6IFwiW2huc2YnVV1cIiwgZGVzY3JpcHRpb246IFwiXFxcIltobnNmJ1VdXFxcIlwiIH0sXG4gICAgICAgICAgZnVuY3Rpb24odSkge3JldHVybiB7dmFsdWU6IDEsIHVuaXRzOiB7XCJbaG5zZidVXVwiOiAxfX07fSxcbiAgICAgICAgICBcIlttZXNoX2ldXCIsXG4gICAgICAgICAgeyB0eXBlOiBcImxpdGVyYWxcIiwgdmFsdWU6IFwiW21lc2hfaV1cIiwgZGVzY3JpcHRpb246IFwiXFxcIlttZXNoX2ldXFxcIlwiIH0sXG4gICAgICAgICAgZnVuY3Rpb24odSkge3JldHVybiB7dmFsdWU6IDEsIHVuaXRzOiB7XCJbbWVzaF9pXVwiOiAxfX07fSxcbiAgICAgICAgICBcIiVbc2xvcGVdXCIsXG4gICAgICAgICAgeyB0eXBlOiBcImxpdGVyYWxcIiwgdmFsdWU6IFwiJVtzbG9wZV1cIiwgZGVzY3JpcHRpb246IFwiXFxcIiVbc2xvcGVdXFxcIlwiIH0sXG4gICAgICAgICAgZnVuY3Rpb24odSkge3JldHVybiB7dmFsdWU6IDEsIHVuaXRzOiB7XCIlW3Nsb3BlXVwiOiAxfX07fSxcbiAgICAgICAgICBcIltwJ2Rpb3BdXCIsXG4gICAgICAgICAgeyB0eXBlOiBcImxpdGVyYWxcIiwgdmFsdWU6IFwiW3AnZGlvcF1cIiwgZGVzY3JpcHRpb246IFwiXFxcIltwJ2Rpb3BdXFxcIlwiIH0sXG4gICAgICAgICAgZnVuY3Rpb24odSkge3JldHVybiB7dmFsdWU6IDEsIHVuaXRzOiB7XCJbcCdkaW9wXVwiOiAxfX07fSxcbiAgICAgICAgICBcIltnaWxfYnJdXCIsXG4gICAgICAgICAgeyB0eXBlOiBcImxpdGVyYWxcIiwgdmFsdWU6IFwiW2dpbF9icl1cIiwgZGVzY3JpcHRpb246IFwiXFxcIltnaWxfYnJdXFxcIlwiIH0sXG4gICAgICAgICAgZnVuY3Rpb24odSkge3JldHVybiB7dmFsdWU6IDEsIHVuaXRzOiB7XCJbZ2lsX2JyXVwiOiAxfX07fSxcbiAgICAgICAgICBcIlt3b29kJ1VdXCIsXG4gICAgICAgICAgeyB0eXBlOiBcImxpdGVyYWxcIiwgdmFsdWU6IFwiW3dvb2QnVV1cIiwgZGVzY3JpcHRpb246IFwiXFxcIlt3b29kJ1VdXFxcIlwiIH0sXG4gICAgICAgICAgZnVuY3Rpb24odSkge3JldHVybiB7dmFsdWU6IDEsIHVuaXRzOiB7XCJbd29vZCdVXVwiOiAxfX07fSxcbiAgICAgICAgICBcImNhbF9bMTVdXCIsXG4gICAgICAgICAgeyB0eXBlOiBcImxpdGVyYWxcIiwgdmFsdWU6IFwiY2FsX1sxNV1cIiwgZGVzY3JpcHRpb246IFwiXFxcImNhbF9bMTVdXFxcIlwiIH0sXG4gICAgICAgICAgZnVuY3Rpb24odSkge3JldHVybiB7dmFsdWU6IDEsIHVuaXRzOiB7XCJjYWxfWzE1XVwiOiAxfX07fSxcbiAgICAgICAgICBcImNhbF9bMjBdXCIsXG4gICAgICAgICAgeyB0eXBlOiBcImxpdGVyYWxcIiwgdmFsdWU6IFwiY2FsX1syMF1cIiwgZGVzY3JpcHRpb246IFwiXFxcImNhbF9bMjBdXFxcIlwiIH0sXG4gICAgICAgICAgZnVuY3Rpb24odSkge3JldHVybiB7dmFsdWU6IDEsIHVuaXRzOiB7XCJjYWxfWzIwXVwiOiAxfX07fSxcbiAgICAgICAgICBcIltmb3pfYnJdXCIsXG4gICAgICAgICAgeyB0eXBlOiBcImxpdGVyYWxcIiwgdmFsdWU6IFwiW2Zvel9icl1cIiwgZGVzY3JpcHRpb246IFwiXFxcIltmb3pfYnJdXFxcIlwiIH0sXG4gICAgICAgICAgZnVuY3Rpb24odSkge3JldHVybiB7dmFsdWU6IDEsIHVuaXRzOiB7XCJbZm96X2JyXVwiOiAxfX07fSxcbiAgICAgICAgICBcIltmZHJfYnJdXCIsXG4gICAgICAgICAgeyB0eXBlOiBcImxpdGVyYWxcIiwgdmFsdWU6IFwiW2Zkcl9icl1cIiwgZGVzY3JpcHRpb246IFwiXFxcIltmZHJfYnJdXFxcIlwiIH0sXG4gICAgICAgICAgZnVuY3Rpb24odSkge3JldHVybiB7dmFsdWU6IDEsIHVuaXRzOiB7XCJbZmRyX2JyXVwiOiAxfX07fSxcbiAgICAgICAgICBcIltzcmRfdXNdXCIsXG4gICAgICAgICAgeyB0eXBlOiBcImxpdGVyYWxcIiwgdmFsdWU6IFwiW3NyZF91c11cIiwgZGVzY3JpcHRpb246IFwiXFxcIltzcmRfdXNdXFxcIlwiIH0sXG4gICAgICAgICAgZnVuY3Rpb24odSkge3JldHVybiB7dmFsdWU6IDEsIHVuaXRzOiB7XCJbc3JkX3VzXVwiOiAxfX07fSxcbiAgICAgICAgICBcIlttaW5fYnJdXCIsXG4gICAgICAgICAgeyB0eXBlOiBcImxpdGVyYWxcIiwgdmFsdWU6IFwiW21pbl9icl1cIiwgZGVzY3JpcHRpb246IFwiXFxcIlttaW5fYnJdXFxcIlwiIH0sXG4gICAgICAgICAgZnVuY3Rpb24odSkge3JldHVybiB7dmFsdWU6IDEsIHVuaXRzOiB7XCJbbWluX2JyXVwiOiAxfX07fSxcbiAgICAgICAgICBcIltFSURfNTBdXCIsXG4gICAgICAgICAgeyB0eXBlOiBcImxpdGVyYWxcIiwgdmFsdWU6IFwiW0VJRF81MF1cIiwgZGVzY3JpcHRpb246IFwiXFxcIltFSURfNTBdXFxcIlwiIH0sXG4gICAgICAgICAgZnVuY3Rpb24odSkge3JldHVybiB7dmFsdWU6IDEsIHVuaXRzOiB7XCJbRUlEXzUwXVwiOiAxfX07fSxcbiAgICAgICAgICBcIltCdHVfdGhdXCIsXG4gICAgICAgICAgeyB0eXBlOiBcImxpdGVyYWxcIiwgdmFsdWU6IFwiW0J0dV90aF1cIiwgZGVzY3JpcHRpb246IFwiXFxcIltCdHVfdGhdXFxcIlwiIH0sXG4gICAgICAgICAgZnVuY3Rpb24odSkge3JldHVybiB7dmFsdWU6IDEsIHVuaXRzOiB7XCJbQnR1X3RoXVwiOiAxfX07fSxcbiAgICAgICAgICBcIltCdHVfSVRdXCIsXG4gICAgICAgICAgeyB0eXBlOiBcImxpdGVyYWxcIiwgdmFsdWU6IFwiW0J0dV9JVF1cIiwgZGVzY3JpcHRpb246IFwiXFxcIltCdHVfSVRdXFxcIlwiIH0sXG4gICAgICAgICAgZnVuY3Rpb24odSkge3JldHVybiB7dmFsdWU6IDEsIHVuaXRzOiB7XCJbQnR1X0lUXVwiOiAxfX07fSxcbiAgICAgICAgICBcIltjYXJfQXVdXCIsXG4gICAgICAgICAgeyB0eXBlOiBcImxpdGVyYWxcIiwgdmFsdWU6IFwiW2Nhcl9BdV1cIiwgZGVzY3JpcHRpb246IFwiXFxcIltjYXJfQXVdXFxcIlwiIH0sXG4gICAgICAgICAgZnVuY3Rpb24odSkge3JldHVybiB7dmFsdWU6IDEsIHVuaXRzOiB7XCJbY2FyX0F1XVwiOiAxfX07fSxcbiAgICAgICAgICBcIltCdHVfNjBdXCIsXG4gICAgICAgICAgeyB0eXBlOiBcImxpdGVyYWxcIiwgdmFsdWU6IFwiW0J0dV82MF1cIiwgZGVzY3JpcHRpb246IFwiXFxcIltCdHVfNjBdXFxcIlwiIH0sXG4gICAgICAgICAgZnVuY3Rpb24odSkge3JldHVybiB7dmFsdWU6IDEsIHVuaXRzOiB7XCJbQnR1XzYwXVwiOiAxfX07fSxcbiAgICAgICAgICBcIltCdHVfNTldXCIsXG4gICAgICAgICAgeyB0eXBlOiBcImxpdGVyYWxcIiwgdmFsdWU6IFwiW0J0dV81OV1cIiwgZGVzY3JpcHRpb246IFwiXFxcIltCdHVfNTldXFxcIlwiIH0sXG4gICAgICAgICAgZnVuY3Rpb24odSkge3JldHVybiB7dmFsdWU6IDEsIHVuaXRzOiB7XCJbQnR1XzU5XVwiOiAxfX07fSxcbiAgICAgICAgICBcIltCdHVfMzldXCIsXG4gICAgICAgICAgeyB0eXBlOiBcImxpdGVyYWxcIiwgdmFsdWU6IFwiW0J0dV8zOV1cIiwgZGVzY3JpcHRpb246IFwiXFxcIltCdHVfMzldXFxcIlwiIH0sXG4gICAgICAgICAgZnVuY3Rpb24odSkge3JldHVybiB7dmFsdWU6IDEsIHVuaXRzOiB7XCJbQnR1XzM5XVwiOiAxfX07fSxcbiAgICAgICAgICBcIltjdXBfdXNdXCIsXG4gICAgICAgICAgeyB0eXBlOiBcImxpdGVyYWxcIiwgdmFsdWU6IFwiW2N1cF91c11cIiwgZGVzY3JpcHRpb246IFwiXFxcIltjdXBfdXNdXFxcIlwiIH0sXG4gICAgICAgICAgZnVuY3Rpb24odSkge3JldHVybiB7dmFsdWU6IDEsIHVuaXRzOiB7XCJbY3VwX3VzXVwiOiAxfX07fSxcbiAgICAgICAgICBcIkJbMTAublZdXCIsXG4gICAgICAgICAgeyB0eXBlOiBcImxpdGVyYWxcIiwgdmFsdWU6IFwiQlsxMC5uVl1cIiwgZGVzY3JpcHRpb246IFwiXFxcIkJbMTAublZdXFxcIlwiIH0sXG4gICAgICAgICAgZnVuY3Rpb24odSkge3JldHVybiB7dmFsdWU6IDEsIHVuaXRzOiB7XCJCWzEwLm5WXVwiOiAxfX07fSxcbiAgICAgICAgICBcIlt0c3BfdXNdXCIsXG4gICAgICAgICAgeyB0eXBlOiBcImxpdGVyYWxcIiwgdmFsdWU6IFwiW3RzcF91c11cIiwgZGVzY3JpcHRpb246IFwiXFxcIlt0c3BfdXNdXFxcIlwiIH0sXG4gICAgICAgICAgZnVuY3Rpb24odSkge3JldHVybiB7dmFsdWU6IDEsIHVuaXRzOiB7XCJbdHNwX3VzXVwiOiAxfX07fSxcbiAgICAgICAgICBcIlttY2xnJ1VdXCIsXG4gICAgICAgICAgeyB0eXBlOiBcImxpdGVyYWxcIiwgdmFsdWU6IFwiW21jbGcnVV1cIiwgZGVzY3JpcHRpb246IFwiXFxcIlttY2xnJ1VdXFxcIlwiIH0sXG4gICAgICAgICAgZnVuY3Rpb24odSkge3JldHVybiB7dmFsdWU6IDEsIHVuaXRzOiB7XCJbbWNsZydVXVwiOiAxfX07fSxcbiAgICAgICAgICBcIltjaWNlcm9dXCIsXG4gICAgICAgICAgeyB0eXBlOiBcImxpdGVyYWxcIiwgdmFsdWU6IFwiW2NpY2Vyb11cIiwgZGVzY3JpcHRpb246IFwiXFxcIltjaWNlcm9dXFxcIlwiIH0sXG4gICAgICAgICAgZnVuY3Rpb24odSkge3JldHVybiB7dmFsdWU6IDEsIHVuaXRzOiB7XCJbY2ljZXJvXVwiOiAxfX07fSxcbiAgICAgICAgICBcIltwd3RfdHJdXCIsXG4gICAgICAgICAgeyB0eXBlOiBcImxpdGVyYWxcIiwgdmFsdWU6IFwiW3B3dF90cl1cIiwgZGVzY3JpcHRpb246IFwiXFxcIltwd3RfdHJdXFxcIlwiIH0sXG4gICAgICAgICAgZnVuY3Rpb24odSkge3JldHVybiB7dmFsdWU6IDEsIHVuaXRzOiB7XCJbcHd0X3RyXVwiOiAxfX07fSxcbiAgICAgICAgICBcIltwbnRfcHJdXCIsXG4gICAgICAgICAgeyB0eXBlOiBcImxpdGVyYWxcIiwgdmFsdWU6IFwiW3BudF9wcl1cIiwgZGVzY3JpcHRpb246IFwiXFxcIltwbnRfcHJdXFxcIlwiIH0sXG4gICAgICAgICAgZnVuY3Rpb24odSkge3JldHVybiB7dmFsdWU6IDEsIHVuaXRzOiB7XCJbcG50X3ByXVwiOiAxfX07fSxcbiAgICAgICAgICBcIltwY2FfcHJdXCIsXG4gICAgICAgICAgeyB0eXBlOiBcImxpdGVyYWxcIiwgdmFsdWU6IFwiW3BjYV9wcl1cIiwgZGVzY3JpcHRpb246IFwiXFxcIltwY2FfcHJdXFxcIlwiIH0sXG4gICAgICAgICAgZnVuY3Rpb24odSkge3JldHVybiB7dmFsdWU6IDEsIHVuaXRzOiB7XCJbcGNhX3ByXVwiOiAxfX07fSxcbiAgICAgICAgICBcIltnYWxfYnJdXCIsXG4gICAgICAgICAgeyB0eXBlOiBcImxpdGVyYWxcIiwgdmFsdWU6IFwiW2dhbF9icl1cIiwgZGVzY3JpcHRpb246IFwiXFxcIltnYWxfYnJdXFxcIlwiIH0sXG4gICAgICAgICAgZnVuY3Rpb24odSkge3JldHVybiB7dmFsdWU6IDEsIHVuaXRzOiB7XCJbZ2FsX2JyXVwiOiAxfX07fSxcbiAgICAgICAgICBcIlt5ZF91c11cIixcbiAgICAgICAgICB7IHR5cGU6IFwibGl0ZXJhbFwiLCB2YWx1ZTogXCJbeWRfdXNdXCIsIGRlc2NyaXB0aW9uOiBcIlxcXCJbeWRfdXNdXFxcIlwiIH0sXG4gICAgICAgICAgZnVuY3Rpb24odSkge3JldHVybiB7dmFsdWU6IDEsIHVuaXRzOiB7XCJbeWRfdXNdXCI6IDF9fTt9LFxuICAgICAgICAgIFwiW2xpZ25lXVwiLFxuICAgICAgICAgIHsgdHlwZTogXCJsaXRlcmFsXCIsIHZhbHVlOiBcIltsaWduZV1cIiwgZGVzY3JpcHRpb246IFwiXFxcIltsaWduZV1cXFwiXCIgfSxcbiAgICAgICAgICBmdW5jdGlvbih1KSB7cmV0dXJuIHt2YWx1ZTogMSwgdW5pdHM6IHtcIltsaWduZV1cIjogMX19O30sXG4gICAgICAgICAgXCJbdGJzX21dXCIsXG4gICAgICAgICAgeyB0eXBlOiBcImxpdGVyYWxcIiwgdmFsdWU6IFwiW3Ric19tXVwiLCBkZXNjcmlwdGlvbjogXCJcXFwiW3Ric19tXVxcXCJcIiB9LFxuICAgICAgICAgIGZ1bmN0aW9uKHUpIHtyZXR1cm4ge3ZhbHVlOiAxLCB1bml0czoge1wiW3Ric19tXVwiOiAxfX07fSxcbiAgICAgICAgICBcIltsYl9hcF1cIixcbiAgICAgICAgICB7IHR5cGU6IFwibGl0ZXJhbFwiLCB2YWx1ZTogXCJbbGJfYXBdXCIsIGRlc2NyaXB0aW9uOiBcIlxcXCJbbGJfYXBdXFxcIlwiIH0sXG4gICAgICAgICAgZnVuY3Rpb24odSkge3JldHVybiB7dmFsdWU6IDEsIHVuaXRzOiB7XCJbbGJfYXBdXCI6IDF9fTt9LFxuICAgICAgICAgIFwiW296X2FwXVwiLFxuICAgICAgICAgIHsgdHlwZTogXCJsaXRlcmFsXCIsIHZhbHVlOiBcIltvel9hcF1cIiwgZGVzY3JpcHRpb246IFwiXFxcIltvel9hcF1cXFwiXCIgfSxcbiAgICAgICAgICBmdW5jdGlvbih1KSB7cmV0dXJuIHt2YWx1ZTogMSwgdW5pdHM6IHtcIltvel9hcF1cIjogMX19O30sXG4gICAgICAgICAgXCJbZHJfYXBdXCIsXG4gICAgICAgICAgeyB0eXBlOiBcImxpdGVyYWxcIiwgdmFsdWU6IFwiW2RyX2FwXVwiLCBkZXNjcmlwdGlvbjogXCJcXFwiW2RyX2FwXVxcXCJcIiB9LFxuICAgICAgICAgIGZ1bmN0aW9uKHUpIHtyZXR1cm4ge3ZhbHVlOiAxLCB1bml0czoge1wiW2RyX2FwXVwiOiAxfX07fSxcbiAgICAgICAgICBcIltzY19hcF1cIixcbiAgICAgICAgICB7IHR5cGU6IFwibGl0ZXJhbFwiLCB2YWx1ZTogXCJbc2NfYXBdXCIsIGRlc2NyaXB0aW9uOiBcIlxcXCJbc2NfYXBdXFxcIlwiIH0sXG4gICAgICAgICAgZnVuY3Rpb24odSkge3JldHVybiB7dmFsdWU6IDEsIHVuaXRzOiB7XCJbc2NfYXBdXCI6IDF9fTt9LFxuICAgICAgICAgIFwiW3RzcF9tXVwiLFxuICAgICAgICAgIHsgdHlwZTogXCJsaXRlcmFsXCIsIHZhbHVlOiBcIlt0c3BfbV1cIiwgZGVzY3JpcHRpb246IFwiXFxcIlt0c3BfbV1cXFwiXCIgfSxcbiAgICAgICAgICBmdW5jdGlvbih1KSB7cmV0dXJuIHt2YWx1ZTogMSwgdW5pdHM6IHtcIlt0c3BfbV1cIjogMX19O30sXG4gICAgICAgICAgXCJbY3VwX21dXCIsXG4gICAgICAgICAgeyB0eXBlOiBcImxpdGVyYWxcIiwgdmFsdWU6IFwiW2N1cF9tXVwiLCBkZXNjcmlwdGlvbjogXCJcXFwiW2N1cF9tXVxcXCJcIiB9LFxuICAgICAgICAgIGZ1bmN0aW9uKHUpIHtyZXR1cm4ge3ZhbHVlOiAxLCB1bml0czoge1wiW2N1cF9tXVwiOiAxfX07fSxcbiAgICAgICAgICBcIltsYl90cl1cIixcbiAgICAgICAgICB7IHR5cGU6IFwibGl0ZXJhbFwiLCB2YWx1ZTogXCJbbGJfdHJdXCIsIGRlc2NyaXB0aW9uOiBcIlxcXCJbbGJfdHJdXFxcIlwiIH0sXG4gICAgICAgICAgZnVuY3Rpb24odSkge3JldHVybiB7dmFsdWU6IDEsIHVuaXRzOiB7XCJbbGJfdHJdXCI6IDF9fTt9LFxuICAgICAgICAgIFwiW296X3RyXVwiLFxuICAgICAgICAgIHsgdHlwZTogXCJsaXRlcmFsXCIsIHZhbHVlOiBcIltvel90cl1cIiwgZGVzY3JpcHRpb246IFwiXFxcIltvel90cl1cXFwiXCIgfSxcbiAgICAgICAgICBmdW5jdGlvbih1KSB7cmV0dXJuIHt2YWx1ZTogMSwgdW5pdHM6IHtcIltvel90cl1cIjogMX19O30sXG4gICAgICAgICAgXCJbZGlkb3RdXCIsXG4gICAgICAgICAgeyB0eXBlOiBcImxpdGVyYWxcIiwgdmFsdWU6IFwiW2RpZG90XVwiLCBkZXNjcmlwdGlvbjogXCJcXFwiW2RpZG90XVxcXCJcIiB9LFxuICAgICAgICAgIGZ1bmN0aW9uKHUpIHtyZXR1cm4ge3ZhbHVlOiAxLCB1bml0czoge1wiW2RpZG90XVwiOiAxfX07fSxcbiAgICAgICAgICBcIltmb3pfbV1cIixcbiAgICAgICAgICB7IHR5cGU6IFwibGl0ZXJhbFwiLCB2YWx1ZTogXCJbZm96X21dXCIsIGRlc2NyaXB0aW9uOiBcIlxcXCJbZm96X21dXFxcIlwiIH0sXG4gICAgICAgICAgZnVuY3Rpb24odSkge3JldHVybiB7dmFsdWU6IDEsIHVuaXRzOiB7XCJbZm96X21dXCI6IDF9fTt9LFxuICAgICAgICAgIFwiW2Nhcl9tXVwiLFxuICAgICAgICAgIHsgdHlwZTogXCJsaXRlcmFsXCIsIHZhbHVlOiBcIltjYXJfbV1cIiwgZGVzY3JpcHRpb246IFwiXFxcIltjYXJfbV1cXFwiXCIgfSxcbiAgICAgICAgICBmdW5jdGlvbih1KSB7cmV0dXJuIHt2YWx1ZTogMSwgdW5pdHM6IHtcIltjYXJfbV1cIjogMX19O30sXG4gICAgICAgICAgXCJbc21vb3RdXCIsXG4gICAgICAgICAgeyB0eXBlOiBcImxpdGVyYWxcIiwgdmFsdWU6IFwiW3Ntb290XVwiLCBkZXNjcmlwdGlvbjogXCJcXFwiW3Ntb290XVxcXCJcIiB9LFxuICAgICAgICAgIGZ1bmN0aW9uKHUpIHtyZXR1cm4ge3ZhbHVlOiAxLCB1bml0czoge1wiW3Ntb290XVwiOiAxfX07fSxcbiAgICAgICAgICBcIltrbmsnVV1cIixcbiAgICAgICAgICB7IHR5cGU6IFwibGl0ZXJhbFwiLCB2YWx1ZTogXCJba25rJ1VdXCIsIGRlc2NyaXB0aW9uOiBcIlxcXCJba25rJ1VdXFxcIlwiIH0sXG4gICAgICAgICAgZnVuY3Rpb24odSkge3JldHVybiB7dmFsdWU6IDEsIHVuaXRzOiB7XCJba25rJ1VdXCI6IDF9fTt9LFxuICAgICAgICAgIFwiW0J0dV9tXVwiLFxuICAgICAgICAgIHsgdHlwZTogXCJsaXRlcmFsXCIsIHZhbHVlOiBcIltCdHVfbV1cIiwgZGVzY3JpcHRpb246IFwiXFxcIltCdHVfbV1cXFwiXCIgfSxcbiAgICAgICAgICBmdW5jdGlvbih1KSB7cmV0dXJuIHt2YWx1ZTogMSwgdW5pdHM6IHtcIltCdHVfbV1cIjogMX19O30sXG4gICAgICAgICAgXCJbZHJfYXZdXCIsXG4gICAgICAgICAgeyB0eXBlOiBcImxpdGVyYWxcIiwgdmFsdWU6IFwiW2RyX2F2XVwiLCBkZXNjcmlwdGlvbjogXCJcXFwiW2RyX2F2XVxcXCJcIiB9LFxuICAgICAgICAgIGZ1bmN0aW9uKHUpIHtyZXR1cm4ge3ZhbHVlOiAxLCB1bml0czoge1wiW2RyX2F2XVwiOiAxfX07fSxcbiAgICAgICAgICBcIltvel9hdl1cIixcbiAgICAgICAgICB7IHR5cGU6IFwibGl0ZXJhbFwiLCB2YWx1ZTogXCJbb3pfYXZdXCIsIGRlc2NyaXB0aW9uOiBcIlxcXCJbb3pfYXZdXFxcIlwiIH0sXG4gICAgICAgICAgZnVuY3Rpb24odSkge3JldHVybiB7dmFsdWU6IDEsIHVuaXRzOiB7XCJbb3pfYXZdXCI6IDF9fTt9LFxuICAgICAgICAgIFwiW2xiX2F2XVwiLFxuICAgICAgICAgIHsgdHlwZTogXCJsaXRlcmFsXCIsIHZhbHVlOiBcIltsYl9hdl1cIiwgZGVzY3JpcHRpb246IFwiXFxcIltsYl9hdl1cXFwiXCIgfSxcbiAgICAgICAgICBmdW5jdGlvbih1KSB7cmV0dXJuIHt2YWx1ZTogMSwgdW5pdHM6IHtcIltsYl9hdl1cIjogMX19O30sXG4gICAgICAgICAgXCJbZHllJ1VdXCIsXG4gICAgICAgICAgeyB0eXBlOiBcImxpdGVyYWxcIiwgdmFsdWU6IFwiW2R5ZSdVXVwiLCBkZXNjcmlwdGlvbjogXCJcXFwiW2R5ZSdVXVxcXCJcIiB9LFxuICAgICAgICAgIGZ1bmN0aW9uKHUpIHtyZXR1cm4ge3ZhbHVlOiAxLCB1bml0czoge1wiW2R5ZSdVXVwiOiAxfX07fSxcbiAgICAgICAgICBcIltwa191c11cIixcbiAgICAgICAgICB7IHR5cGU6IFwibGl0ZXJhbFwiLCB2YWx1ZTogXCJbcGtfdXNdXCIsIGRlc2NyaXB0aW9uOiBcIlxcXCJbcGtfdXNdXFxcIlwiIH0sXG4gICAgICAgICAgZnVuY3Rpb24odSkge3JldHVybiB7dmFsdWU6IDEsIHVuaXRzOiB7XCJbcGtfdXNdXCI6IDF9fTt9LFxuICAgICAgICAgIFwiW0FQTCdVXVwiLFxuICAgICAgICAgIHsgdHlwZTogXCJsaXRlcmFsXCIsIHZhbHVlOiBcIltBUEwnVV1cIiwgZGVzY3JpcHRpb246IFwiXFxcIltBUEwnVV1cXFwiXCIgfSxcbiAgICAgICAgICBmdW5jdGlvbih1KSB7cmV0dXJuIHt2YWx1ZTogMSwgdW5pdHM6IHtcIltBUEwnVV1cIjogMX19O30sXG4gICAgICAgICAgXCJbYnVfdXNdXCIsXG4gICAgICAgICAgeyB0eXBlOiBcImxpdGVyYWxcIiwgdmFsdWU6IFwiW2J1X3VzXVwiLCBkZXNjcmlwdGlvbjogXCJcXFwiW2J1X3VzXVxcXCJcIiB9LFxuICAgICAgICAgIGZ1bmN0aW9uKHUpIHtyZXR1cm4ge3ZhbHVlOiAxLCB1bml0czoge1wiW2J1X3VzXVwiOiAxfX07fSxcbiAgICAgICAgICBcIltwdF9icl1cIixcbiAgICAgICAgICB7IHR5cGU6IFwibGl0ZXJhbFwiLCB2YWx1ZTogXCJbcHRfYnJdXCIsIGRlc2NyaXB0aW9uOiBcIlxcXCJbcHRfYnJdXFxcIlwiIH0sXG4gICAgICAgICAgZnVuY3Rpb24odSkge3JldHVybiB7dmFsdWU6IDEsIHVuaXRzOiB7XCJbcHRfYnJdXCI6IDF9fTt9LFxuICAgICAgICAgIFwiW3F0X2JyXVwiLFxuICAgICAgICAgIHsgdHlwZTogXCJsaXRlcmFsXCIsIHZhbHVlOiBcIltxdF9icl1cIiwgZGVzY3JpcHRpb246IFwiXFxcIltxdF9icl1cXFwiXCIgfSxcbiAgICAgICAgICBmdW5jdGlvbih1KSB7cmV0dXJuIHt2YWx1ZTogMSwgdW5pdHM6IHtcIltxdF9icl1cIjogMX19O30sXG4gICAgICAgICAgXCJbYnVfYnJdXCIsXG4gICAgICAgICAgeyB0eXBlOiBcImxpdGVyYWxcIiwgdmFsdWU6IFwiW2J1X2JyXVwiLCBkZXNjcmlwdGlvbjogXCJcXFwiW2J1X2JyXVxcXCJcIiB9LFxuICAgICAgICAgIGZ1bmN0aW9uKHUpIHtyZXR1cm4ge3ZhbHVlOiAxLCB1bml0czoge1wiW2J1X2JyXVwiOiAxfX07fSxcbiAgICAgICAgICBcIltocCdfWF1cIixcbiAgICAgICAgICB7IHR5cGU6IFwibGl0ZXJhbFwiLCB2YWx1ZTogXCJbaHAnX1hdXCIsIGRlc2NyaXB0aW9uOiBcIlxcXCJbaHAnX1hdXFxcIlwiIH0sXG4gICAgICAgICAgZnVuY3Rpb24odSkge3JldHVybiB7dmFsdWU6IDEsIHVuaXRzOiB7XCJbaHAnX1hdXCI6IDF9fTt9LFxuICAgICAgICAgIFwiW01QTCdVXVwiLFxuICAgICAgICAgIHsgdHlwZTogXCJsaXRlcmFsXCIsIHZhbHVlOiBcIltNUEwnVV1cIiwgZGVzY3JpcHRpb246IFwiXFxcIltNUEwnVV1cXFwiXCIgfSxcbiAgICAgICAgICBmdW5jdGlvbih1KSB7cmV0dXJuIHt2YWx1ZTogMSwgdW5pdHM6IHtcIltNUEwnVV1cIjogMX19O30sXG4gICAgICAgICAgXCJbR1BMJ1VdXCIsXG4gICAgICAgICAgeyB0eXBlOiBcImxpdGVyYWxcIiwgdmFsdWU6IFwiW0dQTCdVXVwiLCBkZXNjcmlwdGlvbjogXCJcXFwiW0dQTCdVXVxcXCJcIiB9LFxuICAgICAgICAgIGZ1bmN0aW9uKHUpIHtyZXR1cm4ge3ZhbHVlOiAxLCB1bml0czoge1wiW0dQTCdVXVwiOiAxfX07fSxcbiAgICAgICAgICBcIltVU1AnVV1cIixcbiAgICAgICAgICB7IHR5cGU6IFwibGl0ZXJhbFwiLCB2YWx1ZTogXCJbVVNQJ1VdXCIsIGRlc2NyaXB0aW9uOiBcIlxcXCJbVVNQJ1VdXFxcIlwiIH0sXG4gICAgICAgICAgZnVuY3Rpb24odSkge3JldHVybiB7dmFsdWU6IDEsIHVuaXRzOiB7XCJbVVNQJ1VdXCI6IDF9fTt9LFxuICAgICAgICAgIFwiW2Vwc18wXVwiLFxuICAgICAgICAgIHsgdHlwZTogXCJsaXRlcmFsXCIsIHZhbHVlOiBcIltlcHNfMF1cIiwgZGVzY3JpcHRpb246IFwiXFxcIltlcHNfMF1cXFwiXCIgfSxcbiAgICAgICAgICBmdW5jdGlvbih1KSB7cmV0dXJuIHt2YWx1ZTogMSwgdW5pdHM6IHtcIltlcHNfMF1cIjogMX19O30sXG4gICAgICAgICAgXCJbZnRoX2ldXCIsXG4gICAgICAgICAgeyB0eXBlOiBcImxpdGVyYWxcIiwgdmFsdWU6IFwiW2Z0aF9pXVwiLCBkZXNjcmlwdGlvbjogXCJcXFwiW2Z0aF9pXVxcXCJcIiB9LFxuICAgICAgICAgIGZ1bmN0aW9uKHUpIHtyZXR1cm4ge3ZhbHVlOiAxLCB1bml0czoge1wiW2Z0aF9pXVwiOiAxfX07fSxcbiAgICAgICAgICBcIltubWlfaV1cIixcbiAgICAgICAgICB7IHR5cGU6IFwibGl0ZXJhbFwiLCB2YWx1ZTogXCJbbm1pX2ldXCIsIGRlc2NyaXB0aW9uOiBcIlxcXCJbbm1pX2ldXFxcIlwiIH0sXG4gICAgICAgICAgZnVuY3Rpb24odSkge3JldHVybiB7dmFsdWU6IDEsIHVuaXRzOiB7XCJbbm1pX2ldXCI6IDF9fTt9LFxuICAgICAgICAgIFwiW3B0X3VzXVwiLFxuICAgICAgICAgIHsgdHlwZTogXCJsaXRlcmFsXCIsIHZhbHVlOiBcIltwdF91c11cIiwgZGVzY3JpcHRpb246IFwiXFxcIltwdF91c11cXFwiXCIgfSxcbiAgICAgICAgICBmdW5jdGlvbih1KSB7cmV0dXJuIHt2YWx1ZTogMSwgdW5pdHM6IHtcIltwdF91c11cIjogMX19O30sXG4gICAgICAgICAgXCJbc2luX2ldXCIsXG4gICAgICAgICAgeyB0eXBlOiBcImxpdGVyYWxcIiwgdmFsdWU6IFwiW3Npbl9pXVwiLCBkZXNjcmlwdGlvbjogXCJcXFwiW3Npbl9pXVxcXCJcIiB9LFxuICAgICAgICAgIGZ1bmN0aW9uKHUpIHtyZXR1cm4ge3ZhbHVlOiAxLCB1bml0czoge1wiW3Npbl9pXVwiOiAxfX07fSxcbiAgICAgICAgICBcIltzZnRfaV1cIixcbiAgICAgICAgICB7IHR5cGU6IFwibGl0ZXJhbFwiLCB2YWx1ZTogXCJbc2Z0X2ldXCIsIGRlc2NyaXB0aW9uOiBcIlxcXCJbc2Z0X2ldXFxcIlwiIH0sXG4gICAgICAgICAgZnVuY3Rpb24odSkge3JldHVybiB7dmFsdWU6IDEsIHVuaXRzOiB7XCJbc2Z0X2ldXCI6IDF9fTt9LFxuICAgICAgICAgIFwiW3N5ZF9pXVwiLFxuICAgICAgICAgIHsgdHlwZTogXCJsaXRlcmFsXCIsIHZhbHVlOiBcIltzeWRfaV1cIiwgZGVzY3JpcHRpb246IFwiXFxcIltzeWRfaV1cXFwiXCIgfSxcbiAgICAgICAgICBmdW5jdGlvbih1KSB7cmV0dXJuIHt2YWx1ZTogMSwgdW5pdHM6IHtcIltzeWRfaV1cIjogMX19O30sXG4gICAgICAgICAgXCJbY2luX2ldXCIsXG4gICAgICAgICAgeyB0eXBlOiBcImxpdGVyYWxcIiwgdmFsdWU6IFwiW2Npbl9pXVwiLCBkZXNjcmlwdGlvbjogXCJcXFwiW2Npbl9pXVxcXCJcIiB9LFxuICAgICAgICAgIGZ1bmN0aW9uKHUpIHtyZXR1cm4ge3ZhbHVlOiAxLCB1bml0czoge1wiW2Npbl9pXVwiOiAxfX07fSxcbiAgICAgICAgICBcIltjZnRfaV1cIixcbiAgICAgICAgICB7IHR5cGU6IFwibGl0ZXJhbFwiLCB2YWx1ZTogXCJbY2Z0X2ldXCIsIGRlc2NyaXB0aW9uOiBcIlxcXCJbY2Z0X2ldXFxcIlwiIH0sXG4gICAgICAgICAgZnVuY3Rpb24odSkge3JldHVybiB7dmFsdWU6IDEsIHVuaXRzOiB7XCJbY2Z0X2ldXCI6IDF9fTt9LFxuICAgICAgICAgIFwiW2N5ZF9pXVwiLFxuICAgICAgICAgIHsgdHlwZTogXCJsaXRlcmFsXCIsIHZhbHVlOiBcIltjeWRfaV1cIiwgZGVzY3JpcHRpb246IFwiXFxcIltjeWRfaV1cXFwiXCIgfSxcbiAgICAgICAgICBmdW5jdGlvbih1KSB7cmV0dXJuIHt2YWx1ZTogMSwgdW5pdHM6IHtcIltjeWRfaV1cIjogMX19O30sXG4gICAgICAgICAgXCJbcXRfdXNdXCIsXG4gICAgICAgICAgeyB0eXBlOiBcImxpdGVyYWxcIiwgdmFsdWU6IFwiW3F0X3VzXVwiLCBkZXNjcmlwdGlvbjogXCJcXFwiW3F0X3VzXVxcXCJcIiB9LFxuICAgICAgICAgIGZ1bmN0aW9uKHUpIHtyZXR1cm4ge3ZhbHVlOiAxLCB1bml0czoge1wiW3F0X3VzXVwiOiAxfX07fSxcbiAgICAgICAgICBcIlthcmInVV1cIixcbiAgICAgICAgICB7IHR5cGU6IFwibGl0ZXJhbFwiLCB2YWx1ZTogXCJbYXJiJ1VdXCIsIGRlc2NyaXB0aW9uOiBcIlxcXCJbYXJiJ1VdXFxcIlwiIH0sXG4gICAgICAgICAgZnVuY3Rpb24odSkge3JldHVybiB7dmFsdWU6IDEsIHVuaXRzOiB7XCJbYXJiJ1VdXCI6IDF9fTt9LFxuICAgICAgICAgIFwiW21pbF9pXVwiLFxuICAgICAgICAgIHsgdHlwZTogXCJsaXRlcmFsXCIsIHZhbHVlOiBcIlttaWxfaV1cIiwgZGVzY3JpcHRpb246IFwiXFxcIlttaWxfaV1cXFwiXCIgfSxcbiAgICAgICAgICBmdW5jdGlvbih1KSB7cmV0dXJuIHt2YWx1ZTogMSwgdW5pdHM6IHtcIlttaWxfaV1cIjogMX19O30sXG4gICAgICAgICAgXCJbY21sX2ldXCIsXG4gICAgICAgICAgeyB0eXBlOiBcImxpdGVyYWxcIiwgdmFsdWU6IFwiW2NtbF9pXVwiLCBkZXNjcmlwdGlvbjogXCJcXFwiW2NtbF9pXVxcXCJcIiB9LFxuICAgICAgICAgIGZ1bmN0aW9uKHUpIHtyZXR1cm4ge3ZhbHVlOiAxLCB1bml0czoge1wiW2NtbF9pXVwiOiAxfX07fSxcbiAgICAgICAgICBcIltrbl9icl1cIixcbiAgICAgICAgICB7IHR5cGU6IFwibGl0ZXJhbFwiLCB2YWx1ZTogXCJba25fYnJdXCIsIGRlc2NyaXB0aW9uOiBcIlxcXCJba25fYnJdXFxcIlwiIH0sXG4gICAgICAgICAgZnVuY3Rpb24odSkge3JldHVybiB7dmFsdWU6IDEsIHVuaXRzOiB7XCJba25fYnJdXCI6IDF9fTt9LFxuICAgICAgICAgIFwiW2Z0X3VzXVwiLFxuICAgICAgICAgIHsgdHlwZTogXCJsaXRlcmFsXCIsIHZhbHVlOiBcIltmdF91c11cIiwgZGVzY3JpcHRpb246IFwiXFxcIltmdF91c11cXFwiXCIgfSxcbiAgICAgICAgICBmdW5jdGlvbih1KSB7cmV0dXJuIHt2YWx1ZTogMSwgdW5pdHM6IHtcIltmdF91c11cIjogMX19O30sXG4gICAgICAgICAgXCJbcG91Y2VdXCIsXG4gICAgICAgICAgeyB0eXBlOiBcImxpdGVyYWxcIiwgdmFsdWU6IFwiW3BvdWNlXVwiLCBkZXNjcmlwdGlvbjogXCJcXFwiW3BvdWNlXVxcXCJcIiB9LFxuICAgICAgICAgIGZ1bmN0aW9uKHUpIHtyZXR1cm4ge3ZhbHVlOiAxLCB1bml0czoge1wiW3BvdWNlXVwiOiAxfX07fSxcbiAgICAgICAgICBcIltpbl91c11cIixcbiAgICAgICAgICB7IHR5cGU6IFwibGl0ZXJhbFwiLCB2YWx1ZTogXCJbaW5fdXNdXCIsIGRlc2NyaXB0aW9uOiBcIlxcXCJbaW5fdXNdXFxcIlwiIH0sXG4gICAgICAgICAgZnVuY3Rpb24odSkge3JldHVybiB7dmFsdWU6IDEsIHVuaXRzOiB7XCJbaW5fdXNdXCI6IDF9fTt9LFxuICAgICAgICAgIFwiW3JkX3VzXVwiLFxuICAgICAgICAgIHsgdHlwZTogXCJsaXRlcmFsXCIsIHZhbHVlOiBcIltyZF91c11cIiwgZGVzY3JpcHRpb246IFwiXFxcIltyZF91c11cXFwiXCIgfSxcbiAgICAgICAgICBmdW5jdGlvbih1KSB7cmV0dXJuIHt2YWx1ZTogMSwgdW5pdHM6IHtcIltyZF91c11cIjogMX19O30sXG4gICAgICAgICAgXCJbY2hfdXNdXCIsXG4gICAgICAgICAgeyB0eXBlOiBcImxpdGVyYWxcIiwgdmFsdWU6IFwiW2NoX3VzXVwiLCBkZXNjcmlwdGlvbjogXCJcXFwiW2NoX3VzXVxcXCJcIiB9LFxuICAgICAgICAgIGZ1bmN0aW9uKHUpIHtyZXR1cm4ge3ZhbHVlOiAxLCB1bml0czoge1wiW2NoX3VzXVwiOiAxfX07fSxcbiAgICAgICAgICBcIltsa191c11cIixcbiAgICAgICAgICB7IHR5cGU6IFwibGl0ZXJhbFwiLCB2YWx1ZTogXCJbbGtfdXNdXCIsIGRlc2NyaXB0aW9uOiBcIlxcXCJbbGtfdXNdXFxcIlwiIH0sXG4gICAgICAgICAgZnVuY3Rpb24odSkge3JldHVybiB7dmFsdWU6IDEsIHVuaXRzOiB7XCJbbGtfdXNdXCI6IDF9fTt9LFxuICAgICAgICAgIFwiW2hwJ19DXVwiLFxuICAgICAgICAgIHsgdHlwZTogXCJsaXRlcmFsXCIsIHZhbHVlOiBcIltocCdfQ11cIiwgZGVzY3JpcHRpb246IFwiXFxcIltocCdfQ11cXFwiXCIgfSxcbiAgICAgICAgICBmdW5jdGlvbih1KSB7cmV0dXJuIHt2YWx1ZTogMSwgdW5pdHM6IHtcIltocCdfQ11cIjogMX19O30sXG4gICAgICAgICAgXCJbaHAnX01dXCIsXG4gICAgICAgICAgeyB0eXBlOiBcImxpdGVyYWxcIiwgdmFsdWU6IFwiW2hwJ19NXVwiLCBkZXNjcmlwdGlvbjogXCJcXFwiW2hwJ19NXVxcXCJcIiB9LFxuICAgICAgICAgIGZ1bmN0aW9uKHUpIHtyZXR1cm4ge3ZhbHVlOiAxLCB1bml0czoge1wiW2hwJ19NXVwiOiAxfX07fSxcbiAgICAgICAgICBcIltocCdfUV1cIixcbiAgICAgICAgICB7IHR5cGU6IFwibGl0ZXJhbFwiLCB2YWx1ZTogXCJbaHAnX1FdXCIsIGRlc2NyaXB0aW9uOiBcIlxcXCJbaHAnX1FdXFxcIlwiIH0sXG4gICAgICAgICAgZnVuY3Rpb24odSkge3JldHVybiB7dmFsdWU6IDEsIHVuaXRzOiB7XCJbaHAnX1FdXCI6IDF9fTt9LFxuICAgICAgICAgIFwiW21pX2JyXVwiLFxuICAgICAgICAgIHsgdHlwZTogXCJsaXRlcmFsXCIsIHZhbHVlOiBcIlttaV9icl1cIiwgZGVzY3JpcHRpb246IFwiXFxcIlttaV9icl1cXFwiXCIgfSxcbiAgICAgICAgICBmdW5jdGlvbih1KSB7cmV0dXJuIHt2YWx1ZTogMSwgdW5pdHM6IHtcIlttaV9icl1cIjogMX19O30sXG4gICAgICAgICAgXCJbbWlfdXNdXCIsXG4gICAgICAgICAgeyB0eXBlOiBcImxpdGVyYWxcIiwgdmFsdWU6IFwiW21pX3VzXVwiLCBkZXNjcmlwdGlvbjogXCJcXFwiW21pX3VzXVxcXCJcIiB9LFxuICAgICAgICAgIGZ1bmN0aW9uKHUpIHtyZXR1cm4ge3ZhbHVlOiAxLCB1bml0czoge1wiW21pX3VzXVwiOiAxfX07fSxcbiAgICAgICAgICBcIlt5ZF9icl1cIixcbiAgICAgICAgICB7IHR5cGU6IFwibGl0ZXJhbFwiLCB2YWx1ZTogXCJbeWRfYnJdXCIsIGRlc2NyaXB0aW9uOiBcIlxcXCJbeWRfYnJdXFxcIlwiIH0sXG4gICAgICAgICAgZnVuY3Rpb24odSkge3JldHVybiB7dmFsdWU6IDEsIHVuaXRzOiB7XCJbeWRfYnJdXCI6IDF9fTt9LFxuICAgICAgICAgIFwiW3BrX2JyXVwiLFxuICAgICAgICAgIHsgdHlwZTogXCJsaXRlcmFsXCIsIHZhbHVlOiBcIltwa19icl1cIiwgZGVzY3JpcHRpb246IFwiXFxcIltwa19icl1cXFwiXCIgfSxcbiAgICAgICAgICBmdW5jdGlvbih1KSB7cmV0dXJuIHt2YWx1ZTogMSwgdW5pdHM6IHtcIltwa19icl1cIjogMX19O30sXG4gICAgICAgICAgXCJbcGNfYnJdXCIsXG4gICAgICAgICAgeyB0eXBlOiBcImxpdGVyYWxcIiwgdmFsdWU6IFwiW3BjX2JyXVwiLCBkZXNjcmlwdGlvbjogXCJcXFwiW3BjX2JyXVxcXCJcIiB9LFxuICAgICAgICAgIGZ1bmN0aW9uKHUpIHtyZXR1cm4ge3ZhbHVlOiAxLCB1bml0czoge1wiW3BjX2JyXVwiOiAxfX07fSxcbiAgICAgICAgICBcIltsa19icl1cIixcbiAgICAgICAgICB7IHR5cGU6IFwibGl0ZXJhbFwiLCB2YWx1ZTogXCJbbGtfYnJdXCIsIGRlc2NyaXB0aW9uOiBcIlxcXCJbbGtfYnJdXFxcIlwiIH0sXG4gICAgICAgICAgZnVuY3Rpb24odSkge3JldHVybiB7dmFsdWU6IDEsIHVuaXRzOiB7XCJbbGtfYnJdXCI6IDF9fTt9LFxuICAgICAgICAgIFwiW2luX2JyXVwiLFxuICAgICAgICAgIHsgdHlwZTogXCJsaXRlcmFsXCIsIHZhbHVlOiBcIltpbl9icl1cIiwgZGVzY3JpcHRpb246IFwiXFxcIltpbl9icl1cXFwiXCIgfSxcbiAgICAgICAgICBmdW5jdGlvbih1KSB7cmV0dXJuIHt2YWx1ZTogMSwgdW5pdHM6IHtcIltpbl9icl1cIjogMX19O30sXG4gICAgICAgICAgXCJbZnRfYnJdXCIsXG4gICAgICAgICAgeyB0eXBlOiBcImxpdGVyYWxcIiwgdmFsdWU6IFwiW2Z0X2JyXVwiLCBkZXNjcmlwdGlvbjogXCJcXFwiW2Z0X2JyXVxcXCJcIiB9LFxuICAgICAgICAgIGZ1bmN0aW9uKHUpIHtyZXR1cm4ge3ZhbHVlOiAxLCB1bml0czoge1wiW2Z0X2JyXVwiOiAxfX07fSxcbiAgICAgICAgICBcIltyZF9icl1cIixcbiAgICAgICAgICB7IHR5cGU6IFwibGl0ZXJhbFwiLCB2YWx1ZTogXCJbcmRfYnJdXCIsIGRlc2NyaXB0aW9uOiBcIlxcXCJbcmRfYnJdXFxcIlwiIH0sXG4gICAgICAgICAgZnVuY3Rpb24odSkge3JldHVybiB7dmFsdWU6IDEsIHVuaXRzOiB7XCJbcmRfYnJdXCI6IDF9fTt9LFxuICAgICAgICAgIFwiW2NoX2JyXVwiLFxuICAgICAgICAgIHsgdHlwZTogXCJsaXRlcmFsXCIsIHZhbHVlOiBcIltjaF9icl1cIiwgZGVzY3JpcHRpb246IFwiXFxcIltjaF9icl1cXFwiXCIgfSxcbiAgICAgICAgICBmdW5jdGlvbih1KSB7cmV0dXJuIHt2YWx1ZTogMSwgdW5pdHM6IHtcIltjaF9icl1cIjogMX19O30sXG4gICAgICAgICAgXCJbZnRfaV1cIixcbiAgICAgICAgICB7IHR5cGU6IFwibGl0ZXJhbFwiLCB2YWx1ZTogXCJbZnRfaV1cIiwgZGVzY3JpcHRpb246IFwiXFxcIltmdF9pXVxcXCJcIiB9LFxuICAgICAgICAgIGZ1bmN0aW9uKHUpIHtyZXR1cm4ge3ZhbHVlOiAxLCB1bml0czoge1wiW2Z0X2ldXCI6IDF9fTt9LFxuICAgICAgICAgIFwiW2hwX1FdXCIsXG4gICAgICAgICAgeyB0eXBlOiBcImxpdGVyYWxcIiwgdmFsdWU6IFwiW2hwX1FdXCIsIGRlc2NyaXB0aW9uOiBcIlxcXCJbaHBfUV1cXFwiXCIgfSxcbiAgICAgICAgICBmdW5jdGlvbih1KSB7cmV0dXJuIHt2YWx1ZTogMSwgdW5pdHM6IHtcIltocF9RXVwiOiAxfX07fSxcbiAgICAgICAgICBcIltocF9NXVwiLFxuICAgICAgICAgIHsgdHlwZTogXCJsaXRlcmFsXCIsIHZhbHVlOiBcIltocF9NXVwiLCBkZXNjcmlwdGlvbjogXCJcXFwiW2hwX01dXFxcIlwiIH0sXG4gICAgICAgICAgZnVuY3Rpb24odSkge3JldHVybiB7dmFsdWU6IDEsIHVuaXRzOiB7XCJbaHBfTV1cIjogMX19O30sXG4gICAgICAgICAgXCJbaHBfQ11cIixcbiAgICAgICAgICB7IHR5cGU6IFwibGl0ZXJhbFwiLCB2YWx1ZTogXCJbaHBfQ11cIiwgZGVzY3JpcHRpb246IFwiXFxcIltocF9DXVxcXCJcIiB9LFxuICAgICAgICAgIGZ1bmN0aW9uKHUpIHtyZXR1cm4ge3ZhbHVlOiAxLCB1bml0czoge1wiW2hwX0NdXCI6IDF9fTt9LFxuICAgICAgICAgIFwiW2hwX1hdXCIsXG4gICAgICAgICAgeyB0eXBlOiBcImxpdGVyYWxcIiwgdmFsdWU6IFwiW2hwX1hdXCIsIGRlc2NyaXB0aW9uOiBcIlxcXCJbaHBfWF1cXFwiXCIgfSxcbiAgICAgICAgICBmdW5jdGlvbih1KSB7cmV0dXJuIHt2YWx1ZTogMSwgdW5pdHM6IHtcIltocF9YXVwiOiAxfX07fSxcbiAgICAgICAgICBcIltrcF9DXVwiLFxuICAgICAgICAgIHsgdHlwZTogXCJsaXRlcmFsXCIsIHZhbHVlOiBcIltrcF9DXVwiLCBkZXNjcmlwdGlvbjogXCJcXFwiW2twX0NdXFxcIlwiIH0sXG4gICAgICAgICAgZnVuY3Rpb24odSkge3JldHVybiB7dmFsdWU6IDEsIHVuaXRzOiB7XCJba3BfQ11cIjogMX19O30sXG4gICAgICAgICAgXCJbaGRfaV1cIixcbiAgICAgICAgICB7IHR5cGU6IFwibGl0ZXJhbFwiLCB2YWx1ZTogXCJbaGRfaV1cIiwgZGVzY3JpcHRpb246IFwiXFxcIltoZF9pXVxcXCJcIiB9LFxuICAgICAgICAgIGZ1bmN0aW9uKHUpIHtyZXR1cm4ge3ZhbHVlOiAxLCB1bml0czoge1wiW2hkX2ldXCI6IDF9fTt9LFxuICAgICAgICAgIFwiW2twX01dXCIsXG4gICAgICAgICAgeyB0eXBlOiBcImxpdGVyYWxcIiwgdmFsdWU6IFwiW2twX01dXCIsIGRlc2NyaXB0aW9uOiBcIlxcXCJba3BfTV1cXFwiXCIgfSxcbiAgICAgICAgICBmdW5jdGlvbih1KSB7cmV0dXJuIHt2YWx1ZTogMSwgdW5pdHM6IHtcIltrcF9NXVwiOiAxfX07fSxcbiAgICAgICAgICBcIltrcF9RXVwiLFxuICAgICAgICAgIHsgdHlwZTogXCJsaXRlcmFsXCIsIHZhbHVlOiBcIltrcF9RXVwiLCBkZXNjcmlwdGlvbjogXCJcXFwiW2twX1FdXFxcIlwiIH0sXG4gICAgICAgICAgZnVuY3Rpb24odSkge3JldHVybiB7dmFsdWU6IDEsIHVuaXRzOiB7XCJba3BfUV1cIjogMX19O30sXG4gICAgICAgICAgXCJbY3JfaV1cIixcbiAgICAgICAgICB7IHR5cGU6IFwibGl0ZXJhbFwiLCB2YWx1ZTogXCJbY3JfaV1cIiwgZGVzY3JpcHRpb246IFwiXFxcIltjcl9pXVxcXCJcIiB9LFxuICAgICAgICAgIGZ1bmN0aW9uKHUpIHtyZXR1cm4ge3ZhbHVlOiAxLCB1bml0czoge1wiW2NyX2ldXCI6IDF9fTt9LFxuICAgICAgICAgIFwiW2JmX2ldXCIsXG4gICAgICAgICAgeyB0eXBlOiBcImxpdGVyYWxcIiwgdmFsdWU6IFwiW2JmX2ldXCIsIGRlc2NyaXB0aW9uOiBcIlxcXCJbYmZfaV1cXFwiXCIgfSxcbiAgICAgICAgICBmdW5jdGlvbih1KSB7cmV0dXJuIHt2YWx1ZTogMSwgdW5pdHM6IHtcIltiZl9pXVwiOiAxfX07fSxcbiAgICAgICAgICBcIltrbl9pXVwiLFxuICAgICAgICAgIHsgdHlwZTogXCJsaXRlcmFsXCIsIHZhbHVlOiBcIltrbl9pXVwiLCBkZXNjcmlwdGlvbjogXCJcXFwiW2tuX2ldXFxcIlwiIH0sXG4gICAgICAgICAgZnVuY3Rpb24odSkge3JldHVybiB7dmFsdWU6IDEsIHVuaXRzOiB7XCJba25faV1cIjogMX19O30sXG4gICAgICAgICAgXCJbbXVfMF1cIixcbiAgICAgICAgICB7IHR5cGU6IFwibGl0ZXJhbFwiLCB2YWx1ZTogXCJbbXVfMF1cIiwgZGVzY3JpcHRpb246IFwiXFxcIlttdV8wXVxcXCJcIiB9LFxuICAgICAgICAgIGZ1bmN0aW9uKHUpIHtyZXR1cm4ge3ZhbHVlOiAxLCB1bml0czoge1wiW211XzBdXCI6IDF9fTt9LFxuICAgICAgICAgIFwiW21pX2ldXCIsXG4gICAgICAgICAgeyB0eXBlOiBcImxpdGVyYWxcIiwgdmFsdWU6IFwiW21pX2ldXCIsIGRlc2NyaXB0aW9uOiBcIlxcXCJbbWlfaV1cXFwiXCIgfSxcbiAgICAgICAgICBmdW5jdGlvbih1KSB7cmV0dXJuIHt2YWx1ZTogMSwgdW5pdHM6IHtcIlttaV9pXVwiOiAxfX07fSxcbiAgICAgICAgICBcIlt5ZF9pXVwiLFxuICAgICAgICAgIHsgdHlwZTogXCJsaXRlcmFsXCIsIHZhbHVlOiBcIlt5ZF9pXVwiLCBkZXNjcmlwdGlvbjogXCJcXFwiW3lkX2ldXFxcIlwiIH0sXG4gICAgICAgICAgZnVuY3Rpb24odSkge3JldHVybiB7dmFsdWU6IDEsIHVuaXRzOiB7XCJbeWRfaV1cIjogMX19O30sXG4gICAgICAgICAgXCJba3BfWF1cIixcbiAgICAgICAgICB7IHR5cGU6IFwibGl0ZXJhbFwiLCB2YWx1ZTogXCJba3BfWF1cIiwgZGVzY3JpcHRpb246IFwiXFxcIltrcF9YXVxcXCJcIiB9LFxuICAgICAgICAgIGZ1bmN0aW9uKHUpIHtyZXR1cm4ge3ZhbHVlOiAxLCB1bml0czoge1wiW2twX1hdXCI6IDF9fTt9LFxuICAgICAgICAgIFwiW2luX2ldXCIsXG4gICAgICAgICAgeyB0eXBlOiBcImxpdGVyYWxcIiwgdmFsdWU6IFwiW2luX2ldXCIsIGRlc2NyaXB0aW9uOiBcIlxcXCJbaW5faV1cXFwiXCIgfSxcbiAgICAgICAgICBmdW5jdGlvbih1KSB7cmV0dXJuIHt2YWx1ZTogMSwgdW5pdHM6IHtcIltpbl9pXVwiOiAxfX07fSxcbiAgICAgICAgICBcIltkaW9wXVwiLFxuICAgICAgICAgIHsgdHlwZTogXCJsaXRlcmFsXCIsIHZhbHVlOiBcIltkaW9wXVwiLCBkZXNjcmlwdGlvbjogXCJcXFwiW2Rpb3BdXFxcIlwiIH0sXG4gICAgICAgICAgZnVuY3Rpb24odSkge3JldHVybiB7dmFsdWU6IDEsIHVuaXRzOiB7XCJbZGlvcF1cIjogMX19O30sXG4gICAgICAgICAgXCJjYWxfSVRcIixcbiAgICAgICAgICB7IHR5cGU6IFwibGl0ZXJhbFwiLCB2YWx1ZTogXCJjYWxfSVRcIiwgZGVzY3JpcHRpb246IFwiXFxcImNhbF9JVFxcXCJcIiB9LFxuICAgICAgICAgIGZ1bmN0aW9uKHUpIHtyZXR1cm4ge3ZhbHVlOiAxLCB1bml0czoge1wiY2FsX0lUXCI6IDF9fTt9LFxuICAgICAgICAgIFwiY2FsX3RoXCIsXG4gICAgICAgICAgeyB0eXBlOiBcImxpdGVyYWxcIiwgdmFsdWU6IFwiY2FsX3RoXCIsIGRlc2NyaXB0aW9uOiBcIlxcXCJjYWxfdGhcXFwiXCIgfSxcbiAgICAgICAgICBmdW5jdGlvbih1KSB7cmV0dXJuIHt2YWx1ZTogMSwgdW5pdHM6IHtcImNhbF90aFwiOiAxfX07fSxcbiAgICAgICAgICBcIm1bSDJPXVwiLFxuICAgICAgICAgIHsgdHlwZTogXCJsaXRlcmFsXCIsIHZhbHVlOiBcIm1bSDJPXVwiLCBkZXNjcmlwdGlvbjogXCJcXFwibVtIMk9dXFxcIlwiIH0sXG4gICAgICAgICAgZnVuY3Rpb24odSkge3JldHVybiB7dmFsdWU6IDEsIHVuaXRzOiB7XCJtW0gyT11cIjogMX19O30sXG4gICAgICAgICAgXCJba2EnVV1cIixcbiAgICAgICAgICB7IHR5cGU6IFwibGl0ZXJhbFwiLCB2YWx1ZTogXCJba2EnVV1cIiwgZGVzY3JpcHRpb246IFwiXFxcIltrYSdVXVxcXCJcIiB9LFxuICAgICAgICAgIGZ1bmN0aW9uKHUpIHtyZXR1cm4ge3ZhbHVlOiAxLCB1bml0czoge1wiW2thJ1VdXCI6IDF9fTt9LFxuICAgICAgICAgIFwiQltTUExdXCIsXG4gICAgICAgICAgeyB0eXBlOiBcImxpdGVyYWxcIiwgdmFsdWU6IFwiQltTUExdXCIsIGRlc2NyaXB0aW9uOiBcIlxcXCJCW1NQTF1cXFwiXCIgfSxcbiAgICAgICAgICBmdW5jdGlvbih1KSB7cmV0dXJuIHt2YWx1ZTogMSwgdW5pdHM6IHtcIkJbU1BMXVwiOiAxfX07fSxcbiAgICAgICAgICBcIlt0YidVXVwiLFxuICAgICAgICAgIHsgdHlwZTogXCJsaXRlcmFsXCIsIHZhbHVlOiBcIlt0YidVXVwiLCBkZXNjcmlwdGlvbjogXCJcXFwiW3RiJ1VdXFxcIlwiIH0sXG4gICAgICAgICAgZnVuY3Rpb24odSkge3JldHVybiB7dmFsdWU6IDEsIHVuaXRzOiB7XCJbdGInVV1cIjogMX19O30sXG4gICAgICAgICAgXCJbZGVnUl1cIixcbiAgICAgICAgICB7IHR5cGU6IFwibGl0ZXJhbFwiLCB2YWx1ZTogXCJbZGVnUl1cIiwgZGVzY3JpcHRpb246IFwiXFxcIltkZWdSXVxcXCJcIiB9LFxuICAgICAgICAgIGZ1bmN0aW9uKHUpIHtyZXR1cm4ge3ZhbHVlOiAxLCB1bml0czoge1wiW2RlZ1JdXCI6IDF9fTt9LFxuICAgICAgICAgIFwiW2RlZ0ZdXCIsXG4gICAgICAgICAgeyB0eXBlOiBcImxpdGVyYWxcIiwgdmFsdWU6IFwiW2RlZ0ZdXCIsIGRlc2NyaXB0aW9uOiBcIlxcXCJbZGVnRl1cXFwiXCIgfSxcbiAgICAgICAgICBmdW5jdGlvbih1KSB7cmV0dXJuIHt2YWx1ZTogMSwgdW5pdHM6IHtcIltkZWdGXVwiOiAxfX07fSxcbiAgICAgICAgICBcIltwcHRyXVwiLFxuICAgICAgICAgIHsgdHlwZTogXCJsaXRlcmFsXCIsIHZhbHVlOiBcIltwcHRyXVwiLCBkZXNjcmlwdGlvbjogXCJcXFwiW3BwdHJdXFxcIlwiIH0sXG4gICAgICAgICAgZnVuY3Rpb24odSkge3JldHVybiB7dmFsdWU6IDEsIHVuaXRzOiB7XCJbcHB0cl1cIjogMX19O30sXG4gICAgICAgICAgXCJbcHB0aF1cIixcbiAgICAgICAgICB7IHR5cGU6IFwibGl0ZXJhbFwiLCB2YWx1ZTogXCJbcHB0aF1cIiwgZGVzY3JpcHRpb246IFwiXFxcIltwcHRoXVxcXCJcIiB9LFxuICAgICAgICAgIGZ1bmN0aW9uKHUpIHtyZXR1cm4ge3ZhbHVlOiAxLCB1bml0czoge1wiW3BwdGhdXCI6IDF9fTt9LFxuICAgICAgICAgIFwiW296X21dXCIsXG4gICAgICAgICAgeyB0eXBlOiBcImxpdGVyYWxcIiwgdmFsdWU6IFwiW296X21dXCIsIGRlc2NyaXB0aW9uOiBcIlxcXCJbb3pfbV1cXFwiXCIgfSxcbiAgICAgICAgICBmdW5jdGlvbih1KSB7cmV0dXJuIHt2YWx1ZTogMSwgdW5pdHM6IHtcIltvel9tXVwiOiAxfX07fSxcbiAgICAgICAgICBcIltwaWVkXVwiLFxuICAgICAgICAgIHsgdHlwZTogXCJsaXRlcmFsXCIsIHZhbHVlOiBcIltwaWVkXVwiLCBkZXNjcmlwdGlvbjogXCJcXFwiW3BpZWRdXFxcIlwiIH0sXG4gICAgICAgICAgZnVuY3Rpb24odSkge3JldHVybiB7dmFsdWU6IDEsIHVuaXRzOiB7XCJbcGllZF1cIjogMX19O30sXG4gICAgICAgICAgXCJbcHBtXVwiLFxuICAgICAgICAgIHsgdHlwZTogXCJsaXRlcmFsXCIsIHZhbHVlOiBcIltwcG1dXCIsIGRlc2NyaXB0aW9uOiBcIlxcXCJbcHBtXVxcXCJcIiB9LFxuICAgICAgICAgIGZ1bmN0aW9uKHUpIHtyZXR1cm4ge3ZhbHVlOiAxLCB1bml0czoge1wiW3BwbV1cIjogMX19O30sXG4gICAgICAgICAgXCJbcHBiXVwiLFxuICAgICAgICAgIHsgdHlwZTogXCJsaXRlcmFsXCIsIHZhbHVlOiBcIltwcGJdXCIsIGRlc2NyaXB0aW9uOiBcIlxcXCJbcHBiXVxcXCJcIiB9LFxuICAgICAgICAgIGZ1bmN0aW9uKHUpIHtyZXR1cm4ge3ZhbHVlOiAxLCB1bml0czoge1wiW3BwYl1cIjogMX19O30sXG4gICAgICAgICAgXCJiaXRfc1wiLFxuICAgICAgICAgIHsgdHlwZTogXCJsaXRlcmFsXCIsIHZhbHVlOiBcImJpdF9zXCIsIGRlc2NyaXB0aW9uOiBcIlxcXCJiaXRfc1xcXCJcIiB9LFxuICAgICAgICAgIGZ1bmN0aW9uKHUpIHtyZXR1cm4ge3ZhbHVlOiAxLCB1bml0czoge1wiYml0X3NcIjogMX19O30sXG4gICAgICAgICAgXCJbUE5VXVwiLFxuICAgICAgICAgIHsgdHlwZTogXCJsaXRlcmFsXCIsIHZhbHVlOiBcIltQTlVdXCIsIGRlc2NyaXB0aW9uOiBcIlxcXCJbUE5VXVxcXCJcIiB9LFxuICAgICAgICAgIGZ1bmN0aW9uKHUpIHtyZXR1cm4ge3ZhbHVlOiAxLCB1bml0czoge1wiW1BOVV1cIjogMX19O30sXG4gICAgICAgICAgXCJbcHNpXVwiLFxuICAgICAgICAgIHsgdHlwZTogXCJsaXRlcmFsXCIsIHZhbHVlOiBcIltwc2ldXCIsIGRlc2NyaXB0aW9uOiBcIlxcXCJbcHNpXVxcXCJcIiB9LFxuICAgICAgICAgIGZ1bmN0aW9uKHUpIHtyZXR1cm4ge3ZhbHVlOiAxLCB1bml0czoge1wiW3BzaV1cIjogMX19O30sXG4gICAgICAgICAgXCJbQkFVXVwiLFxuICAgICAgICAgIHsgdHlwZTogXCJsaXRlcmFsXCIsIHZhbHVlOiBcIltCQVVdXCIsIGRlc2NyaXB0aW9uOiBcIlxcXCJbQkFVXVxcXCJcIiB9LFxuICAgICAgICAgIGZ1bmN0aW9uKHUpIHtyZXR1cm4ge3ZhbHVlOiAxLCB1bml0czoge1wiW0JBVV1cIjogMX19O30sXG4gICAgICAgICAgXCJbQ2FsXVwiLFxuICAgICAgICAgIHsgdHlwZTogXCJsaXRlcmFsXCIsIHZhbHVlOiBcIltDYWxdXCIsIGRlc2NyaXB0aW9uOiBcIlxcXCJbQ2FsXVxcXCJcIiB9LFxuICAgICAgICAgIGZ1bmN0aW9uKHUpIHtyZXR1cm4ge3ZhbHVlOiAxLCB1bml0czoge1wiW0NhbF1cIjogMX19O30sXG4gICAgICAgICAgXCJCW21WXVwiLFxuICAgICAgICAgIHsgdHlwZTogXCJsaXRlcmFsXCIsIHZhbHVlOiBcIkJbbVZdXCIsIGRlc2NyaXB0aW9uOiBcIlxcXCJCW21WXVxcXCJcIiB9LFxuICAgICAgICAgIGZ1bmN0aW9uKHUpIHtyZXR1cm4ge3ZhbHVlOiAxLCB1bml0czoge1wiQlttVl1cIjogMX19O30sXG4gICAgICAgICAgXCJCW3VWXVwiLFxuICAgICAgICAgIHsgdHlwZTogXCJsaXRlcmFsXCIsIHZhbHVlOiBcIkJbdVZdXCIsIGRlc2NyaXB0aW9uOiBcIlxcXCJCW3VWXVxcXCJcIiB9LFxuICAgICAgICAgIGZ1bmN0aW9uKHUpIHtyZXR1cm4ge3ZhbHVlOiAxLCB1bml0czoge1wiQlt1Vl1cIjogMX19O30sXG4gICAgICAgICAgXCJbQ0ZVXVwiLFxuICAgICAgICAgIHsgdHlwZTogXCJsaXRlcmFsXCIsIHZhbHVlOiBcIltDRlVdXCIsIGRlc2NyaXB0aW9uOiBcIlxcXCJbQ0ZVXVxcXCJcIiB9LFxuICAgICAgICAgIGZ1bmN0aW9uKHUpIHtyZXR1cm4ge3ZhbHVlOiAxLCB1bml0czoge1wiW0NGVV1cIjogMX19O30sXG4gICAgICAgICAgXCJbRkZVXVwiLFxuICAgICAgICAgIHsgdHlwZTogXCJsaXRlcmFsXCIsIHZhbHVlOiBcIltGRlVdXCIsIGRlc2NyaXB0aW9uOiBcIlxcXCJbRkZVXVxcXCJcIiB9LFxuICAgICAgICAgIGZ1bmN0aW9uKHUpIHtyZXR1cm4ge3ZhbHVlOiAxLCB1bml0czoge1wiW0ZGVV1cIjogMX19O30sXG4gICAgICAgICAgXCJCW2tXXVwiLFxuICAgICAgICAgIHsgdHlwZTogXCJsaXRlcmFsXCIsIHZhbHVlOiBcIkJba1ddXCIsIGRlc2NyaXB0aW9uOiBcIlxcXCJCW2tXXVxcXCJcIiB9LFxuICAgICAgICAgIGZ1bmN0aW9uKHUpIHtyZXR1cm4ge3ZhbHVlOiAxLCB1bml0czoge1wiQltrV11cIjogMX19O30sXG4gICAgICAgICAgXCJbUEZVXVwiLFxuICAgICAgICAgIHsgdHlwZTogXCJsaXRlcmFsXCIsIHZhbHVlOiBcIltQRlVdXCIsIGRlc2NyaXB0aW9uOiBcIlxcXCJbUEZVXVxcXCJcIiB9LFxuICAgICAgICAgIGZ1bmN0aW9uKHUpIHtyZXR1cm4ge3ZhbHVlOiAxLCB1bml0czoge1wiW1BGVV1cIjogMX19O30sXG4gICAgICAgICAgXCJjYWxfbVwiLFxuICAgICAgICAgIHsgdHlwZTogXCJsaXRlcmFsXCIsIHZhbHVlOiBcImNhbF9tXCIsIGRlc2NyaXB0aW9uOiBcIlxcXCJjYWxfbVxcXCJcIiB9LFxuICAgICAgICAgIGZ1bmN0aW9uKHUpIHtyZXR1cm4ge3ZhbHVlOiAxLCB1bml0czoge1wiY2FsX21cIjogMX19O30sXG4gICAgICAgICAgXCJbRUxVXVwiLFxuICAgICAgICAgIHsgdHlwZTogXCJsaXRlcmFsXCIsIHZhbHVlOiBcIltFTFVdXCIsIGRlc2NyaXB0aW9uOiBcIlxcXCJbRUxVXVxcXCJcIiB9LFxuICAgICAgICAgIGZ1bmN0aW9uKHUpIHtyZXR1cm4ge3ZhbHVlOiAxLCB1bml0czoge1wiW0VMVV1cIjogMX19O30sXG4gICAgICAgICAgXCJbRkVVXVwiLFxuICAgICAgICAgIHsgdHlwZTogXCJsaXRlcmFsXCIsIHZhbHVlOiBcIltGRVVdXCIsIGRlc2NyaXB0aW9uOiBcIlxcXCJbRkVVXVxcXCJcIiB9LFxuICAgICAgICAgIGZ1bmN0aW9uKHUpIHtyZXR1cm4ge3ZhbHVlOiAxLCB1bml0czoge1wiW0ZFVV1cIjogMX19O30sXG4gICAgICAgICAgXCJbUFJVXVwiLFxuICAgICAgICAgIHsgdHlwZTogXCJsaXRlcmFsXCIsIHZhbHVlOiBcIltQUlVdXCIsIGRlc2NyaXB0aW9uOiBcIlxcXCJbUFJVXVxcXCJcIiB9LFxuICAgICAgICAgIGZ1bmN0aW9uKHUpIHtyZXR1cm4ge3ZhbHVlOiAxLCB1bml0czoge1wiW1BSVV1cIjogMX19O30sXG4gICAgICAgICAgXCJbbV9lXVwiLFxuICAgICAgICAgIHsgdHlwZTogXCJsaXRlcmFsXCIsIHZhbHVlOiBcIlttX2VdXCIsIGRlc2NyaXB0aW9uOiBcIlxcXCJbbV9lXVxcXCJcIiB9LFxuICAgICAgICAgIGZ1bmN0aW9uKHUpIHtyZXR1cm4ge3ZhbHVlOiAxLCB1bml0czoge1wiW21fZV1cIjogMX19O30sXG4gICAgICAgICAgXCJbbV9wXVwiLFxuICAgICAgICAgIHsgdHlwZTogXCJsaXRlcmFsXCIsIHZhbHVlOiBcIlttX3BdXCIsIGRlc2NyaXB0aW9uOiBcIlxcXCJbbV9wXVxcXCJcIiB9LFxuICAgICAgICAgIGZ1bmN0aW9uKHUpIHtyZXR1cm4ge3ZhbHVlOiAxLCB1bml0czoge1wiW21fcF1cIjogMX19O30sXG4gICAgICAgICAgXCJtW0hnXVwiLFxuICAgICAgICAgIHsgdHlwZTogXCJsaXRlcmFsXCIsIHZhbHVlOiBcIm1bSGddXCIsIGRlc2NyaXB0aW9uOiBcIlxcXCJtW0hnXVxcXCJcIiB9LFxuICAgICAgICAgIGZ1bmN0aW9uKHUpIHtyZXR1cm4ge3ZhbHVlOiAxLCB1bml0czoge1wibVtIZ11cIjogMX19O30sXG4gICAgICAgICAgXCJbcGNhXVwiLFxuICAgICAgICAgIHsgdHlwZTogXCJsaXRlcmFsXCIsIHZhbHVlOiBcIltwY2FdXCIsIGRlc2NyaXB0aW9uOiBcIlxcXCJbcGNhXVxcXCJcIiB9LFxuICAgICAgICAgIGZ1bmN0aW9uKHUpIHtyZXR1cm4ge3ZhbHVlOiAxLCB1bml0czoge1wiW3BjYV1cIjogMX19O30sXG4gICAgICAgICAgXCJbcG50XVwiLFxuICAgICAgICAgIHsgdHlwZTogXCJsaXRlcmFsXCIsIHZhbHVlOiBcIltwbnRdXCIsIGRlc2NyaXB0aW9uOiBcIlxcXCJbcG50XVxcXCJcIiB9LFxuICAgICAgICAgIGZ1bmN0aW9uKHUpIHtyZXR1cm4ge3ZhbHVlOiAxLCB1bml0czoge1wiW3BudF1cIjogMX19O30sXG4gICAgICAgICAgXCJbbG5lXVwiLFxuICAgICAgICAgIHsgdHlwZTogXCJsaXRlcmFsXCIsIHZhbHVlOiBcIltsbmVdXCIsIGRlc2NyaXB0aW9uOiBcIlxcXCJbbG5lXVxcXCJcIiB9LFxuICAgICAgICAgIGZ1bmN0aW9uKHUpIHtyZXR1cm4ge3ZhbHVlOiAxLCB1bml0czoge1wiW2xuZV1cIjogMX19O30sXG4gICAgICAgICAgXCJbTFBGXVwiLFxuICAgICAgICAgIHsgdHlwZTogXCJsaXRlcmFsXCIsIHZhbHVlOiBcIltMUEZdXCIsIGRlc2NyaXB0aW9uOiBcIlxcXCJbTFBGXVxcXCJcIiB9LFxuICAgICAgICAgIGZ1bmN0aW9uKHUpIHtyZXR1cm4ge3ZhbHVlOiAxLCB1bml0czoge1wiW0xQRl1cIjogMX19O30sXG4gICAgICAgICAgXCJbZGVuXVwiLFxuICAgICAgICAgIHsgdHlwZTogXCJsaXRlcmFsXCIsIHZhbHVlOiBcIltkZW5dXCIsIGRlc2NyaXB0aW9uOiBcIlxcXCJbZGVuXVxcXCJcIiB9LFxuICAgICAgICAgIGZ1bmN0aW9uKHUpIHtyZXR1cm4ge3ZhbHVlOiAxLCB1bml0czoge1wiW2Rlbl1cIjogMX19O30sXG4gICAgICAgICAgXCJbc2N0XVwiLFxuICAgICAgICAgIHsgdHlwZTogXCJsaXRlcmFsXCIsIHZhbHVlOiBcIltzY3RdXCIsIGRlc2NyaXB0aW9uOiBcIlxcXCJbc2N0XVxcXCJcIiB9LFxuICAgICAgICAgIGZ1bmN0aW9uKHUpIHtyZXR1cm4ge3ZhbHVlOiAxLCB1bml0czoge1wiW3NjdF1cIjogMX19O30sXG4gICAgICAgICAgXCJbdHdwXVwiLFxuICAgICAgICAgIHsgdHlwZTogXCJsaXRlcmFsXCIsIHZhbHVlOiBcIlt0d3BdXCIsIGRlc2NyaXB0aW9uOiBcIlxcXCJbdHdwXVxcXCJcIiB9LFxuICAgICAgICAgIGZ1bmN0aW9uKHUpIHtyZXR1cm4ge3ZhbHVlOiAxLCB1bml0czoge1wiW3R3cF1cIjogMX19O30sXG4gICAgICAgICAgXCJbQnR1XVwiLFxuICAgICAgICAgIHsgdHlwZTogXCJsaXRlcmFsXCIsIHZhbHVlOiBcIltCdHVdXCIsIGRlc2NyaXB0aW9uOiBcIlxcXCJbQnR1XVxcXCJcIiB9LFxuICAgICAgICAgIGZ1bmN0aW9uKHUpIHtyZXR1cm4ge3ZhbHVlOiAxLCB1bml0czoge1wiW0J0dV1cIjogMX19O30sXG4gICAgICAgICAgXCJbTUVUXVwiLFxuICAgICAgICAgIHsgdHlwZTogXCJsaXRlcmFsXCIsIHZhbHVlOiBcIltNRVRdXCIsIGRlc2NyaXB0aW9uOiBcIlxcXCJbTUVUXVxcXCJcIiB9LFxuICAgICAgICAgIGZ1bmN0aW9uKHUpIHtyZXR1cm4ge3ZhbHVlOiAxLCB1bml0czoge1wiW01FVF1cIjogMX19O30sXG4gICAgICAgICAgXCJbSFBGXVwiLFxuICAgICAgICAgIHsgdHlwZTogXCJsaXRlcmFsXCIsIHZhbHVlOiBcIltIUEZdXCIsIGRlc2NyaXB0aW9uOiBcIlxcXCJbSFBGXVxcXCJcIiB9LFxuICAgICAgICAgIGZ1bmN0aW9uKHUpIHtyZXR1cm4ge3ZhbHVlOiAxLCB1bml0czoge1wiW0hQRl1cIjogMX19O30sXG4gICAgICAgICAgXCJbZHJwXVwiLFxuICAgICAgICAgIHsgdHlwZTogXCJsaXRlcmFsXCIsIHZhbHVlOiBcIltkcnBdXCIsIGRlc2NyaXB0aW9uOiBcIlxcXCJbZHJwXVxcXCJcIiB9LFxuICAgICAgICAgIGZ1bmN0aW9uKHUpIHtyZXR1cm4ge3ZhbHVlOiAxLCB1bml0czoge1wiW2RycF1cIjogMX19O30sXG4gICAgICAgICAgXCJbQVVdXCIsXG4gICAgICAgICAgeyB0eXBlOiBcImxpdGVyYWxcIiwgdmFsdWU6IFwiW0FVXVwiLCBkZXNjcmlwdGlvbjogXCJcXFwiW0FVXVxcXCJcIiB9LFxuICAgICAgICAgIGZ1bmN0aW9uKHUpIHtyZXR1cm4ge3ZhbHVlOiAxLCB1bml0czoge1wiW0FVXVwiOiAxfX07fSxcbiAgICAgICAgICBcIltJVV1cIixcbiAgICAgICAgICB7IHR5cGU6IFwibGl0ZXJhbFwiLCB2YWx1ZTogXCJbSVVdXCIsIGRlc2NyaXB0aW9uOiBcIlxcXCJbSVVdXFxcIlwiIH0sXG4gICAgICAgICAgZnVuY3Rpb24odSkge3JldHVybiB7dmFsdWU6IDEsIHVuaXRzOiB7XCJbSVVdXCI6IDF9fTt9LFxuICAgICAgICAgIFwibW9fc1wiLFxuICAgICAgICAgIHsgdHlwZTogXCJsaXRlcmFsXCIsIHZhbHVlOiBcIm1vX3NcIiwgZGVzY3JpcHRpb246IFwiXFxcIm1vX3NcXFwiXCIgfSxcbiAgICAgICAgICBmdW5jdGlvbih1KSB7cmV0dXJuIHt2YWx1ZTogMSwgdW5pdHM6IHtcIm1vX3NcIjogMX19O30sXG4gICAgICAgICAgXCJbZ3JdXCIsXG4gICAgICAgICAgeyB0eXBlOiBcImxpdGVyYWxcIiwgdmFsdWU6IFwiW2dyXVwiLCBkZXNjcmlwdGlvbjogXCJcXFwiW2dyXVxcXCJcIiB9LFxuICAgICAgICAgIGZ1bmN0aW9uKHUpIHtyZXR1cm4ge3ZhbHVlOiAxLCB1bml0czoge1wiW2dyXVwiOiAxfX07fSxcbiAgICAgICAgICBcImNpcmNcIixcbiAgICAgICAgICB7IHR5cGU6IFwibGl0ZXJhbFwiLCB2YWx1ZTogXCJjaXJjXCIsIGRlc2NyaXB0aW9uOiBcIlxcXCJjaXJjXFxcIlwiIH0sXG4gICAgICAgICAgZnVuY3Rpb24odSkge3JldHVybiB7dmFsdWU6IDEsIHVuaXRzOiB7XCJjaXJjXCI6IDF9fTt9LFxuICAgICAgICAgIFwiW3BpXVwiLFxuICAgICAgICAgIHsgdHlwZTogXCJsaXRlcmFsXCIsIHZhbHVlOiBcIltwaV1cIiwgZGVzY3JpcHRpb246IFwiXFxcIltwaV1cXFwiXCIgfSxcbiAgICAgICAgICBmdW5jdGlvbih1KSB7cmV0dXJuIHt2YWx1ZTogMSwgdW5pdHM6IHtcIltwaV1cIjogMX19O30sXG4gICAgICAgICAgXCJbRVVdXCIsXG4gICAgICAgICAgeyB0eXBlOiBcImxpdGVyYWxcIiwgdmFsdWU6IFwiW0VVXVwiLCBkZXNjcmlwdGlvbjogXCJcXFwiW0VVXVxcXCJcIiB9LFxuICAgICAgICAgIGZ1bmN0aW9uKHUpIHtyZXR1cm4ge3ZhbHVlOiAxLCB1bml0czoge1wiW0VVXVwiOiAxfX07fSxcbiAgICAgICAgICBcIltMZl1cIixcbiAgICAgICAgICB7IHR5cGU6IFwibGl0ZXJhbFwiLCB2YWx1ZTogXCJbTGZdXCIsIGRlc2NyaXB0aW9uOiBcIlxcXCJbTGZdXFxcIlwiIH0sXG4gICAgICAgICAgZnVuY3Rpb24odSkge3JldHVybiB7dmFsdWU6IDEsIHVuaXRzOiB7XCJbTGZdXCI6IDF9fTt9LFxuICAgICAgICAgIFwibW9falwiLFxuICAgICAgICAgIHsgdHlwZTogXCJsaXRlcmFsXCIsIHZhbHVlOiBcIm1vX2pcIiwgZGVzY3JpcHRpb246IFwiXFxcIm1vX2pcXFwiXCIgfSxcbiAgICAgICAgICBmdW5jdGlvbih1KSB7cmV0dXJuIHt2YWx1ZTogMSwgdW5pdHM6IHtcIm1vX2pcIjogMX19O30sXG4gICAgICAgICAgXCJCW1ddXCIsXG4gICAgICAgICAgeyB0eXBlOiBcImxpdGVyYWxcIiwgdmFsdWU6IFwiQltXXVwiLCBkZXNjcmlwdGlvbjogXCJcXFwiQltXXVxcXCJcIiB9LFxuICAgICAgICAgIGZ1bmN0aW9uKHUpIHtyZXR1cm4ge3ZhbHVlOiAxLCB1bml0czoge1wiQltXXVwiOiAxfX07fSxcbiAgICAgICAgICBcIkJbVl1cIixcbiAgICAgICAgICB7IHR5cGU6IFwibGl0ZXJhbFwiLCB2YWx1ZTogXCJCW1ZdXCIsIGRlc2NyaXB0aW9uOiBcIlxcXCJCW1ZdXFxcIlwiIH0sXG4gICAgICAgICAgZnVuY3Rpb24odSkge3JldHVybiB7dmFsdWU6IDEsIHVuaXRzOiB7XCJCW1ZdXCI6IDF9fTt9LFxuICAgICAgICAgIFwibW9fZ1wiLFxuICAgICAgICAgIHsgdHlwZTogXCJsaXRlcmFsXCIsIHZhbHVlOiBcIm1vX2dcIiwgZGVzY3JpcHRpb246IFwiXFxcIm1vX2dcXFwiXCIgfSxcbiAgICAgICAgICBmdW5jdGlvbih1KSB7cmV0dXJuIHt2YWx1ZTogMSwgdW5pdHM6IHtcIm1vX2dcIjogMX19O30sXG4gICAgICAgICAgXCJbaVVdXCIsXG4gICAgICAgICAgeyB0eXBlOiBcImxpdGVyYWxcIiwgdmFsdWU6IFwiW2lVXVwiLCBkZXNjcmlwdGlvbjogXCJcXFwiW2lVXVxcXCJcIiB9LFxuICAgICAgICAgIGZ1bmN0aW9uKHUpIHtyZXR1cm4ge3ZhbHVlOiAxLCB1bml0czoge1wiW2lVXVwiOiAxfX07fSxcbiAgICAgICAgICBcIltIUF1cIixcbiAgICAgICAgICB7IHR5cGU6IFwibGl0ZXJhbFwiLCB2YWx1ZTogXCJbSFBdXCIsIGRlc2NyaXB0aW9uOiBcIlxcXCJbSFBdXFxcIlwiIH0sXG4gICAgICAgICAgZnVuY3Rpb24odSkge3JldHVybiB7dmFsdWU6IDEsIHVuaXRzOiB7XCJbSFBdXCI6IDF9fTt9LFxuICAgICAgICAgIFwiW0NoXVwiLFxuICAgICAgICAgIHsgdHlwZTogXCJsaXRlcmFsXCIsIHZhbHVlOiBcIltDaF1cIiwgZGVzY3JpcHRpb246IFwiXFxcIltDaF1cXFwiXCIgfSxcbiAgICAgICAgICBmdW5jdGlvbih1KSB7cmV0dXJuIHt2YWx1ZTogMSwgdW5pdHM6IHtcIltDaF1cIjogMX19O30sXG4gICAgICAgICAgXCJbbHldXCIsXG4gICAgICAgICAgeyB0eXBlOiBcImxpdGVyYWxcIiwgdmFsdWU6IFwiW2x5XVwiLCBkZXNjcmlwdGlvbjogXCJcXFwiW2x5XVxcXCJcIiB9LFxuICAgICAgICAgIGZ1bmN0aW9uKHUpIHtyZXR1cm4ge3ZhbHVlOiAxLCB1bml0czoge1wiW2x5XVwiOiAxfX07fSxcbiAgICAgICAgICBcIltwSF1cIixcbiAgICAgICAgICB7IHR5cGU6IFwibGl0ZXJhbFwiLCB2YWx1ZTogXCJbcEhdXCIsIGRlc2NyaXB0aW9uOiBcIlxcXCJbcEhdXFxcIlwiIH0sXG4gICAgICAgICAgZnVuY3Rpb24odSkge3JldHVybiB7dmFsdWU6IDEsIHVuaXRzOiB7XCJbcEhdXCI6IDF9fTt9LFxuICAgICAgICAgIFwiYV9qXCIsXG4gICAgICAgICAgeyB0eXBlOiBcImxpdGVyYWxcIiwgdmFsdWU6IFwiYV9qXCIsIGRlc2NyaXB0aW9uOiBcIlxcXCJhX2pcXFwiXCIgfSxcbiAgICAgICAgICBmdW5jdGlvbih1KSB7cmV0dXJuIHt2YWx1ZTogMSwgdW5pdHM6IHtcImFfalwiOiAxfX07fSxcbiAgICAgICAgICBcInJhZFwiLFxuICAgICAgICAgIHsgdHlwZTogXCJsaXRlcmFsXCIsIHZhbHVlOiBcInJhZFwiLCBkZXNjcmlwdGlvbjogXCJcXFwicmFkXFxcIlwiIH0sXG4gICAgICAgICAgZnVuY3Rpb24odSkge3JldHVybiB7dmFsdWU6IDEsIHVuaXRzOiB7XCJyYWRcIjogMX19O30sXG4gICAgICAgICAgXCJhX3RcIixcbiAgICAgICAgICB7IHR5cGU6IFwibGl0ZXJhbFwiLCB2YWx1ZTogXCJhX3RcIiwgZGVzY3JpcHRpb246IFwiXFxcImFfdFxcXCJcIiB9LFxuICAgICAgICAgIGZ1bmN0aW9uKHUpIHtyZXR1cm4ge3ZhbHVlOiAxLCB1bml0czoge1wiYV90XCI6IDF9fTt9LFxuICAgICAgICAgIFwiT2htXCIsXG4gICAgICAgICAgeyB0eXBlOiBcImxpdGVyYWxcIiwgdmFsdWU6IFwiT2htXCIsIGRlc2NyaXB0aW9uOiBcIlxcXCJPaG1cXFwiXCIgfSxcbiAgICAgICAgICBmdW5jdGlvbih1KSB7cmV0dXJuIHt2YWx1ZTogMSwgdW5pdHM6IHtcIk9obVwiOiAxfX07fSxcbiAgICAgICAgICBcInNwaFwiLFxuICAgICAgICAgIHsgdHlwZTogXCJsaXRlcmFsXCIsIHZhbHVlOiBcInNwaFwiLCBkZXNjcmlwdGlvbjogXCJcXFwic3BoXFxcIlwiIH0sXG4gICAgICAgICAgZnVuY3Rpb24odSkge3JldHVybiB7dmFsdWU6IDEsIHVuaXRzOiB7XCJzcGhcIjogMX19O30sXG4gICAgICAgICAgXCJiaXRcIixcbiAgICAgICAgICB7IHR5cGU6IFwibGl0ZXJhbFwiLCB2YWx1ZTogXCJiaXRcIiwgZGVzY3JpcHRpb246IFwiXFxcImJpdFxcXCJcIiB9LFxuICAgICAgICAgIGZ1bmN0aW9uKHUpIHtyZXR1cm4ge3ZhbHVlOiAxLCB1bml0czoge1wiYml0XCI6IDF9fTt9LFxuICAgICAgICAgIFwibWhvXCIsXG4gICAgICAgICAgeyB0eXBlOiBcImxpdGVyYWxcIiwgdmFsdWU6IFwibWhvXCIsIGRlc2NyaXB0aW9uOiBcIlxcXCJtaG9cXFwiXCIgfSxcbiAgICAgICAgICBmdW5jdGlvbih1KSB7cmV0dXJuIHt2YWx1ZTogMSwgdW5pdHM6IHtcIm1ob1wiOiAxfX07fSxcbiAgICAgICAgICBcIm1pblwiLFxuICAgICAgICAgIHsgdHlwZTogXCJsaXRlcmFsXCIsIHZhbHVlOiBcIm1pblwiLCBkZXNjcmlwdGlvbjogXCJcXFwibWluXFxcIlwiIH0sXG4gICAgICAgICAgZnVuY3Rpb24odSkge3JldHVybiB7dmFsdWU6IDEsIHVuaXRzOiB7XCJtaW5cIjogMX19O30sXG4gICAgICAgICAgXCJtb2xcIixcbiAgICAgICAgICB7IHR5cGU6IFwibGl0ZXJhbFwiLCB2YWx1ZTogXCJtb2xcIiwgZGVzY3JpcHRpb246IFwiXFxcIm1vbFxcXCJcIiB9LFxuICAgICAgICAgIGZ1bmN0aW9uKHUpIHtyZXR1cm4ge3ZhbHVlOiAxLCB1bml0czoge1wibW9sXCI6IDF9fTt9LFxuICAgICAgICAgIFwiZGVnXCIsXG4gICAgICAgICAgeyB0eXBlOiBcImxpdGVyYWxcIiwgdmFsdWU6IFwiZGVnXCIsIGRlc2NyaXB0aW9uOiBcIlxcXCJkZWdcXFwiXCIgfSxcbiAgICAgICAgICBmdW5jdGlvbih1KSB7cmV0dXJuIHt2YWx1ZTogMSwgdW5pdHM6IHtcImRlZ1wiOiAxfX07fSxcbiAgICAgICAgICBcImdvblwiLFxuICAgICAgICAgIHsgdHlwZTogXCJsaXRlcmFsXCIsIHZhbHVlOiBcImdvblwiLCBkZXNjcmlwdGlvbjogXCJcXFwiZ29uXFxcIlwiIH0sXG4gICAgICAgICAgZnVuY3Rpb24odSkge3JldHVybiB7dmFsdWU6IDEsIHVuaXRzOiB7XCJnb25cIjogMX19O30sXG4gICAgICAgICAgXCJDZWxcIixcbiAgICAgICAgICB7IHR5cGU6IFwibGl0ZXJhbFwiLCB2YWx1ZTogXCJDZWxcIiwgZGVzY3JpcHRpb246IFwiXFxcIkNlbFxcXCJcIiB9LFxuICAgICAgICAgIGZ1bmN0aW9uKHUpIHtyZXR1cm4ge3ZhbHVlOiAxLCB1bml0czoge1wiQ2VsXCI6IDF9fTt9LFxuICAgICAgICAgIFwia2F0XCIsXG4gICAgICAgICAgeyB0eXBlOiBcImxpdGVyYWxcIiwgdmFsdWU6IFwia2F0XCIsIGRlc2NyaXB0aW9uOiBcIlxcXCJrYXRcXFwiXCIgfSxcbiAgICAgICAgICBmdW5jdGlvbih1KSB7cmV0dXJuIHt2YWx1ZTogMSwgdW5pdHM6IHtcImthdFwiOiAxfX07fSxcbiAgICAgICAgICBcImF0dFwiLFxuICAgICAgICAgIHsgdHlwZTogXCJsaXRlcmFsXCIsIHZhbHVlOiBcImF0dFwiLCBkZXNjcmlwdGlvbjogXCJcXFwiYXR0XFxcIlwiIH0sXG4gICAgICAgICAgZnVuY3Rpb24odSkge3JldHVybiB7dmFsdWU6IDEsIHVuaXRzOiB7XCJhdHRcIjogMX19O30sXG4gICAgICAgICAgXCJvc21cIixcbiAgICAgICAgICB7IHR5cGU6IFwibGl0ZXJhbFwiLCB2YWx1ZTogXCJvc21cIiwgZGVzY3JpcHRpb246IFwiXFxcIm9zbVxcXCJcIiB9LFxuICAgICAgICAgIGZ1bmN0aW9uKHUpIHtyZXR1cm4ge3ZhbHVlOiAxLCB1bml0czoge1wib3NtXCI6IDF9fTt9LFxuICAgICAgICAgIFwidGV4XCIsXG4gICAgICAgICAgeyB0eXBlOiBcImxpdGVyYWxcIiwgdmFsdWU6IFwidGV4XCIsIGRlc2NyaXB0aW9uOiBcIlxcXCJ0ZXhcXFwiXCIgfSxcbiAgICAgICAgICBmdW5jdGlvbih1KSB7cmV0dXJuIHt2YWx1ZTogMSwgdW5pdHM6IHtcInRleFwiOiAxfX07fSxcbiAgICAgICAgICBcImNhbFwiLFxuICAgICAgICAgIHsgdHlwZTogXCJsaXRlcmFsXCIsIHZhbHVlOiBcImNhbFwiLCBkZXNjcmlwdGlvbjogXCJcXFwiY2FsXFxcIlwiIH0sXG4gICAgICAgICAgZnVuY3Rpb24odSkge3JldHVybiB7dmFsdWU6IDEsIHVuaXRzOiB7XCJjYWxcIjogMX19O30sXG4gICAgICAgICAgXCJSRU1cIixcbiAgICAgICAgICB7IHR5cGU6IFwibGl0ZXJhbFwiLCB2YWx1ZTogXCJSRU1cIiwgZGVzY3JpcHRpb246IFwiXFxcIlJFTVxcXCJcIiB9LFxuICAgICAgICAgIGZ1bmN0aW9uKHUpIHtyZXR1cm4ge3ZhbHVlOiAxLCB1bml0czoge1wiUkVNXCI6IDF9fTt9LFxuICAgICAgICAgIFwiUkFEXCIsXG4gICAgICAgICAgeyB0eXBlOiBcImxpdGVyYWxcIiwgdmFsdWU6IFwiUkFEXCIsIGRlc2NyaXB0aW9uOiBcIlxcXCJSQURcXFwiXCIgfSxcbiAgICAgICAgICBmdW5jdGlvbih1KSB7cmV0dXJuIHt2YWx1ZTogMSwgdW5pdHM6IHtcIlJBRFwiOiAxfX07fSxcbiAgICAgICAgICBcImFfZ1wiLFxuICAgICAgICAgIHsgdHlwZTogXCJsaXRlcmFsXCIsIHZhbHVlOiBcImFfZ1wiLCBkZXNjcmlwdGlvbjogXCJcXFwiYV9nXFxcIlwiIH0sXG4gICAgICAgICAgZnVuY3Rpb24odSkge3JldHVybiB7dmFsdWU6IDEsIHVuaXRzOiB7XCJhX2dcIjogMX19O30sXG4gICAgICAgICAgXCJMbWJcIixcbiAgICAgICAgICB7IHR5cGU6IFwibGl0ZXJhbFwiLCB2YWx1ZTogXCJMbWJcIiwgZGVzY3JpcHRpb246IFwiXFxcIkxtYlxcXCJcIiB9LFxuICAgICAgICAgIGZ1bmN0aW9uKHUpIHtyZXR1cm4ge3ZhbHVlOiAxLCB1bml0czoge1wiTG1iXCI6IDF9fTt9LFxuICAgICAgICAgIFwiYXRtXCIsXG4gICAgICAgICAgeyB0eXBlOiBcImxpdGVyYWxcIiwgdmFsdWU6IFwiYXRtXCIsIGRlc2NyaXB0aW9uOiBcIlxcXCJhdG1cXFwiXCIgfSxcbiAgICAgICAgICBmdW5jdGlvbih1KSB7cmV0dXJuIHt2YWx1ZTogMSwgdW5pdHM6IHtcImF0bVwiOiAxfX07fSxcbiAgICAgICAgICBcImVyZ1wiLFxuICAgICAgICAgIHsgdHlwZTogXCJsaXRlcmFsXCIsIHZhbHVlOiBcImVyZ1wiLCBkZXNjcmlwdGlvbjogXCJcXFwiZXJnXFxcIlwiIH0sXG4gICAgICAgICAgZnVuY3Rpb24odSkge3JldHVybiB7dmFsdWU6IDEsIHVuaXRzOiB7XCJlcmdcIjogMX19O30sXG4gICAgICAgICAgXCJkeW5cIixcbiAgICAgICAgICB7IHR5cGU6IFwibGl0ZXJhbFwiLCB2YWx1ZTogXCJkeW5cIiwgZGVzY3JpcHRpb246IFwiXFxcImR5blxcXCJcIiB9LFxuICAgICAgICAgIGZ1bmN0aW9uKHUpIHtyZXR1cm4ge3ZhbHVlOiAxLCB1bml0czoge1wiZHluXCI6IDF9fTt9LFxuICAgICAgICAgIFwiR2FsXCIsXG4gICAgICAgICAgeyB0eXBlOiBcImxpdGVyYWxcIiwgdmFsdWU6IFwiR2FsXCIsIGRlc2NyaXB0aW9uOiBcIlxcXCJHYWxcXFwiXCIgfSxcbiAgICAgICAgICBmdW5jdGlvbih1KSB7cmV0dXJuIHt2YWx1ZTogMSwgdW5pdHM6IHtcIkdhbFwiOiAxfX07fSxcbiAgICAgICAgICBcIjEwXlwiLFxuICAgICAgICAgIHsgdHlwZTogXCJsaXRlcmFsXCIsIHZhbHVlOiBcIjEwXlwiLCBkZXNjcmlwdGlvbjogXCJcXFwiMTBeXFxcIlwiIH0sXG4gICAgICAgICAgZnVuY3Rpb24odSkge3JldHVybiB7dmFsdWU6IDEsIHVuaXRzOiB7XCIxMF5cIjogMX19O30sXG4gICAgICAgICAgXCIxMCpcIixcbiAgICAgICAgICB7IHR5cGU6IFwibGl0ZXJhbFwiLCB2YWx1ZTogXCIxMCpcIiwgZGVzY3JpcHRpb246IFwiXFxcIjEwKlxcXCJcIiB9LFxuICAgICAgICAgIGZ1bmN0aW9uKHUpIHtyZXR1cm4ge3ZhbHVlOiAxLCB1bml0czoge1wiMTAqXCI6IDF9fTt9LFxuICAgICAgICAgIFwiW1NdXCIsXG4gICAgICAgICAgeyB0eXBlOiBcImxpdGVyYWxcIiwgdmFsdWU6IFwiW1NdXCIsIGRlc2NyaXB0aW9uOiBcIlxcXCJbU11cXFwiXCIgfSxcbiAgICAgICAgICBmdW5jdGlvbih1KSB7cmV0dXJuIHt2YWx1ZTogMSwgdW5pdHM6IHtcIltTXVwiOiAxfX07fSxcbiAgICAgICAgICBcIltnXVwiLFxuICAgICAgICAgIHsgdHlwZTogXCJsaXRlcmFsXCIsIHZhbHVlOiBcIltnXVwiLCBkZXNjcmlwdGlvbjogXCJcXFwiW2ddXFxcIlwiIH0sXG4gICAgICAgICAgZnVuY3Rpb24odSkge3JldHVybiB7dmFsdWU6IDEsIHVuaXRzOiB7XCJbZ11cIjogMX19O30sXG4gICAgICAgICAgXCJbR11cIixcbiAgICAgICAgICB7IHR5cGU6IFwibGl0ZXJhbFwiLCB2YWx1ZTogXCJbR11cIiwgZGVzY3JpcHRpb246IFwiXFxcIltHXVxcXCJcIiB9LFxuICAgICAgICAgIGZ1bmN0aW9uKHUpIHtyZXR1cm4ge3ZhbHVlOiAxLCB1bml0czoge1wiW0ddXCI6IDF9fTt9LFxuICAgICAgICAgIFwiW2VdXCIsXG4gICAgICAgICAgeyB0eXBlOiBcImxpdGVyYWxcIiwgdmFsdWU6IFwiW2VdXCIsIGRlc2NyaXB0aW9uOiBcIlxcXCJbZV1cXFwiXCIgfSxcbiAgICAgICAgICBmdW5jdGlvbih1KSB7cmV0dXJuIHt2YWx1ZTogMSwgdW5pdHM6IHtcIltlXVwiOiAxfX07fSxcbiAgICAgICAgICBcIltrXVwiLFxuICAgICAgICAgIHsgdHlwZTogXCJsaXRlcmFsXCIsIHZhbHVlOiBcIltrXVwiLCBkZXNjcmlwdGlvbjogXCJcXFwiW2tdXFxcIlwiIH0sXG4gICAgICAgICAgZnVuY3Rpb24odSkge3JldHVybiB7dmFsdWU6IDEsIHVuaXRzOiB7XCJba11cIjogMX19O30sXG4gICAgICAgICAgXCJbaF1cIixcbiAgICAgICAgICB7IHR5cGU6IFwibGl0ZXJhbFwiLCB2YWx1ZTogXCJbaF1cIiwgZGVzY3JpcHRpb246IFwiXFxcIltoXVxcXCJcIiB9LFxuICAgICAgICAgIGZ1bmN0aW9uKHUpIHtyZXR1cm4ge3ZhbHVlOiAxLCB1bml0czoge1wiW2hdXCI6IDF9fTt9LFxuICAgICAgICAgIFwiW2NdXCIsXG4gICAgICAgICAgeyB0eXBlOiBcImxpdGVyYWxcIiwgdmFsdWU6IFwiW2NdXCIsIGRlc2NyaXB0aW9uOiBcIlxcXCJbY11cXFwiXCIgfSxcbiAgICAgICAgICBmdW5jdGlvbih1KSB7cmV0dXJuIHt2YWx1ZTogMSwgdW5pdHM6IHtcIltjXVwiOiAxfX07fSxcbiAgICAgICAgICBcImJhclwiLFxuICAgICAgICAgIHsgdHlwZTogXCJsaXRlcmFsXCIsIHZhbHVlOiBcImJhclwiLCBkZXNjcmlwdGlvbjogXCJcXFwiYmFyXFxcIlwiIH0sXG4gICAgICAgICAgZnVuY3Rpb24odSkge3JldHVybiB7dmFsdWU6IDEsIHVuaXRzOiB7XCJiYXJcIjogMX19O30sXG4gICAgICAgICAgXCJsbVwiLFxuICAgICAgICAgIHsgdHlwZTogXCJsaXRlcmFsXCIsIHZhbHVlOiBcImxtXCIsIGRlc2NyaXB0aW9uOiBcIlxcXCJsbVxcXCJcIiB9LFxuICAgICAgICAgIGZ1bmN0aW9uKHUpIHtyZXR1cm4ge3ZhbHVlOiAxLCB1bml0czoge1wibG1cIjogMX19O30sXG4gICAgICAgICAgXCJDaVwiLFxuICAgICAgICAgIHsgdHlwZTogXCJsaXRlcmFsXCIsIHZhbHVlOiBcIkNpXCIsIGRlc2NyaXB0aW9uOiBcIlxcXCJDaVxcXCJcIiB9LFxuICAgICAgICAgIGZ1bmN0aW9uKHUpIHtyZXR1cm4ge3ZhbHVlOiAxLCB1bml0czoge1wiQ2lcIjogMX19O30sXG4gICAgICAgICAgXCJwaFwiLFxuICAgICAgICAgIHsgdHlwZTogXCJsaXRlcmFsXCIsIHZhbHVlOiBcInBoXCIsIGRlc2NyaXB0aW9uOiBcIlxcXCJwaFxcXCJcIiB9LFxuICAgICAgICAgIGZ1bmN0aW9uKHUpIHtyZXR1cm4ge3ZhbHVlOiAxLCB1bml0czoge1wicGhcIjogMX19O30sXG4gICAgICAgICAgXCJjZFwiLFxuICAgICAgICAgIHsgdHlwZTogXCJsaXRlcmFsXCIsIHZhbHVlOiBcImNkXCIsIGRlc2NyaXB0aW9uOiBcIlxcXCJjZFxcXCJcIiB9LFxuICAgICAgICAgIGZ1bmN0aW9uKHUpIHtyZXR1cm4ge3ZhbHVlOiAxLCB1bml0czoge1wiY2RcIjogMX19O30sXG4gICAgICAgICAgXCJBb1wiLFxuICAgICAgICAgIHsgdHlwZTogXCJsaXRlcmFsXCIsIHZhbHVlOiBcIkFvXCIsIGRlc2NyaXB0aW9uOiBcIlxcXCJBb1xcXCJcIiB9LFxuICAgICAgICAgIGZ1bmN0aW9uKHUpIHtyZXR1cm4ge3ZhbHVlOiAxLCB1bml0czoge1wiQW9cIjogMX19O30sXG4gICAgICAgICAgXCJXYlwiLFxuICAgICAgICAgIHsgdHlwZTogXCJsaXRlcmFsXCIsIHZhbHVlOiBcIldiXCIsIGRlc2NyaXB0aW9uOiBcIlxcXCJXYlxcXCJcIiB9LFxuICAgICAgICAgIGZ1bmN0aW9uKHUpIHtyZXR1cm4ge3ZhbHVlOiAxLCB1bml0czoge1wiV2JcIjogMX19O30sXG4gICAgICAgICAgXCJHYlwiLFxuICAgICAgICAgIHsgdHlwZTogXCJsaXRlcmFsXCIsIHZhbHVlOiBcIkdiXCIsIGRlc2NyaXB0aW9uOiBcIlxcXCJHYlxcXCJcIiB9LFxuICAgICAgICAgIGZ1bmN0aW9uKHUpIHtyZXR1cm4ge3ZhbHVlOiAxLCB1bml0czoge1wiR2JcIjogMX19O30sXG4gICAgICAgICAgXCJPZVwiLFxuICAgICAgICAgIHsgdHlwZTogXCJsaXRlcmFsXCIsIHZhbHVlOiBcIk9lXCIsIGRlc2NyaXB0aW9uOiBcIlxcXCJPZVxcXCJcIiB9LFxuICAgICAgICAgIGZ1bmN0aW9uKHUpIHtyZXR1cm4ge3ZhbHVlOiAxLCB1bml0czoge1wiT2VcIjogMX19O30sXG4gICAgICAgICAgXCJseFwiLFxuICAgICAgICAgIHsgdHlwZTogXCJsaXRlcmFsXCIsIHZhbHVlOiBcImx4XCIsIGRlc2NyaXB0aW9uOiBcIlxcXCJseFxcXCJcIiB9LFxuICAgICAgICAgIGZ1bmN0aW9uKHUpIHtyZXR1cm4ge3ZhbHVlOiAxLCB1bml0czoge1wibHhcIjogMX19O30sXG4gICAgICAgICAgXCJNeFwiLFxuICAgICAgICAgIHsgdHlwZTogXCJsaXRlcmFsXCIsIHZhbHVlOiBcIk14XCIsIGRlc2NyaXB0aW9uOiBcIlxcXCJNeFxcXCJcIiB9LFxuICAgICAgICAgIGZ1bmN0aW9uKHUpIHtyZXR1cm4ge3ZhbHVlOiAxLCB1bml0czoge1wiTXhcIjogMX19O30sXG4gICAgICAgICAgXCJTdFwiLFxuICAgICAgICAgIHsgdHlwZTogXCJsaXRlcmFsXCIsIHZhbHVlOiBcIlN0XCIsIGRlc2NyaXB0aW9uOiBcIlxcXCJTdFxcXCJcIiB9LFxuICAgICAgICAgIGZ1bmN0aW9uKHUpIHtyZXR1cm4ge3ZhbHVlOiAxLCB1bml0czoge1wiU3RcIjogMX19O30sXG4gICAgICAgICAgXCJCaVwiLFxuICAgICAgICAgIHsgdHlwZTogXCJsaXRlcmFsXCIsIHZhbHVlOiBcIkJpXCIsIGRlc2NyaXB0aW9uOiBcIlxcXCJCaVxcXCJcIiB9LFxuICAgICAgICAgIGZ1bmN0aW9uKHUpIHtyZXR1cm4ge3ZhbHVlOiAxLCB1bml0czoge1wiQmlcIjogMX19O30sXG4gICAgICAgICAgXCJCcVwiLFxuICAgICAgICAgIHsgdHlwZTogXCJsaXRlcmFsXCIsIHZhbHVlOiBcIkJxXCIsIGRlc2NyaXB0aW9uOiBcIlxcXCJCcVxcXCJcIiB9LFxuICAgICAgICAgIGZ1bmN0aW9uKHUpIHtyZXR1cm4ge3ZhbHVlOiAxLCB1bml0czoge1wiQnFcIjogMX19O30sXG4gICAgICAgICAgXCJOcFwiLFxuICAgICAgICAgIHsgdHlwZTogXCJsaXRlcmFsXCIsIHZhbHVlOiBcIk5wXCIsIGRlc2NyaXB0aW9uOiBcIlxcXCJOcFxcXCJcIiB9LFxuICAgICAgICAgIGZ1bmN0aW9uKHUpIHtyZXR1cm4ge3ZhbHVlOiAxLCB1bml0czoge1wiTnBcIjogMX19O30sXG4gICAgICAgICAgXCJBVVwiLFxuICAgICAgICAgIHsgdHlwZTogXCJsaXRlcmFsXCIsIHZhbHVlOiBcIkFVXCIsIGRlc2NyaXB0aW9uOiBcIlxcXCJBVVxcXCJcIiB9LFxuICAgICAgICAgIGZ1bmN0aW9uKHUpIHtyZXR1cm4ge3ZhbHVlOiAxLCB1bml0czoge1wiQVVcIjogMX19O30sXG4gICAgICAgICAgXCJtb1wiLFxuICAgICAgICAgIHsgdHlwZTogXCJsaXRlcmFsXCIsIHZhbHVlOiBcIm1vXCIsIGRlc2NyaXB0aW9uOiBcIlxcXCJtb1xcXCJcIiB9LFxuICAgICAgICAgIGZ1bmN0aW9uKHUpIHtyZXR1cm4ge3ZhbHVlOiAxLCB1bml0czoge1wibW9cIjogMX19O30sXG4gICAgICAgICAgXCJLeVwiLFxuICAgICAgICAgIHsgdHlwZTogXCJsaXRlcmFsXCIsIHZhbHVlOiBcIkt5XCIsIGRlc2NyaXB0aW9uOiBcIlxcXCJLeVxcXCJcIiB9LFxuICAgICAgICAgIGZ1bmN0aW9uKHUpIHtyZXR1cm4ge3ZhbHVlOiAxLCB1bml0czoge1wiS3lcIjogMX19O30sXG4gICAgICAgICAgXCJnZlwiLFxuICAgICAgICAgIHsgdHlwZTogXCJsaXRlcmFsXCIsIHZhbHVlOiBcImdmXCIsIGRlc2NyaXB0aW9uOiBcIlxcXCJnZlxcXCJcIiB9LFxuICAgICAgICAgIGZ1bmN0aW9uKHUpIHtyZXR1cm4ge3ZhbHVlOiAxLCB1bml0czoge1wiZ2ZcIjogMX19O30sXG4gICAgICAgICAgXCJ3a1wiLFxuICAgICAgICAgIHsgdHlwZTogXCJsaXRlcmFsXCIsIHZhbHVlOiBcIndrXCIsIGRlc2NyaXB0aW9uOiBcIlxcXCJ3a1xcXCJcIiB9LFxuICAgICAgICAgIGZ1bmN0aW9uKHUpIHtyZXR1cm4ge3ZhbHVlOiAxLCB1bml0czoge1wid2tcIjogMX19O30sXG4gICAgICAgICAgXCJQYVwiLFxuICAgICAgICAgIHsgdHlwZTogXCJsaXRlcmFsXCIsIHZhbHVlOiBcIlBhXCIsIGRlc2NyaXB0aW9uOiBcIlxcXCJQYVxcXCJcIiB9LFxuICAgICAgICAgIGZ1bmN0aW9uKHUpIHtyZXR1cm4ge3ZhbHVlOiAxLCB1bml0czoge1wiUGFcIjogMX19O30sXG4gICAgICAgICAgXCJnJVwiLFxuICAgICAgICAgIHsgdHlwZTogXCJsaXRlcmFsXCIsIHZhbHVlOiBcImclXCIsIGRlc2NyaXB0aW9uOiBcIlxcXCJnJVxcXCJcIiB9LFxuICAgICAgICAgIGZ1bmN0aW9uKHUpIHtyZXR1cm4ge3ZhbHVlOiAxLCB1bml0czoge1wiZyVcIjogMX19O30sXG4gICAgICAgICAgXCJzclwiLFxuICAgICAgICAgIHsgdHlwZTogXCJsaXRlcmFsXCIsIHZhbHVlOiBcInNyXCIsIGRlc2NyaXB0aW9uOiBcIlxcXCJzclxcXCJcIiB9LFxuICAgICAgICAgIGZ1bmN0aW9uKHUpIHtyZXR1cm4ge3ZhbHVlOiAxLCB1bml0czoge1wic3JcIjogMX19O30sXG4gICAgICAgICAgXCJCZFwiLFxuICAgICAgICAgIHsgdHlwZTogXCJsaXRlcmFsXCIsIHZhbHVlOiBcIkJkXCIsIGRlc2NyaXB0aW9uOiBcIlxcXCJCZFxcXCJcIiB9LFxuICAgICAgICAgIGZ1bmN0aW9uKHUpIHtyZXR1cm4ge3ZhbHVlOiAxLCB1bml0czoge1wiQmRcIjogMX19O30sXG4gICAgICAgICAgXCJlcVwiLFxuICAgICAgICAgIHsgdHlwZTogXCJsaXRlcmFsXCIsIHZhbHVlOiBcImVxXCIsIGRlc2NyaXB0aW9uOiBcIlxcXCJlcVxcXCJcIiB9LFxuICAgICAgICAgIGZ1bmN0aW9uKHUpIHtyZXR1cm4ge3ZhbHVlOiAxLCB1bml0czoge1wiZXFcIjogMX19O30sXG4gICAgICAgICAgXCJCeVwiLFxuICAgICAgICAgIHsgdHlwZTogXCJsaXRlcmFsXCIsIHZhbHVlOiBcIkJ5XCIsIGRlc2NyaXB0aW9uOiBcIlxcXCJCeVxcXCJcIiB9LFxuICAgICAgICAgIGZ1bmN0aW9uKHUpIHtyZXR1cm4ge3ZhbHVlOiAxLCB1bml0czoge1wiQnlcIjogMX19O30sXG4gICAgICAgICAgXCJIelwiLFxuICAgICAgICAgIHsgdHlwZTogXCJsaXRlcmFsXCIsIHZhbHVlOiBcIkh6XCIsIGRlc2NyaXB0aW9uOiBcIlxcXCJIelxcXCJcIiB9LFxuICAgICAgICAgIGZ1bmN0aW9uKHUpIHtyZXR1cm4ge3ZhbHVlOiAxLCB1bml0czoge1wiSHpcIjogMX19O30sXG4gICAgICAgICAgXCInJ1wiLFxuICAgICAgICAgIHsgdHlwZTogXCJsaXRlcmFsXCIsIHZhbHVlOiBcIicnXCIsIGRlc2NyaXB0aW9uOiBcIlxcXCInJ1xcXCJcIiB9LFxuICAgICAgICAgIGZ1bmN0aW9uKHUpIHtyZXR1cm4ge3ZhbHVlOiAxLCB1bml0czoge1wiJydcIjogMX19O30sXG4gICAgICAgICAgXCJwY1wiLFxuICAgICAgICAgIHsgdHlwZTogXCJsaXRlcmFsXCIsIHZhbHVlOiBcInBjXCIsIGRlc2NyaXB0aW9uOiBcIlxcXCJwY1xcXCJcIiB9LFxuICAgICAgICAgIGZ1bmN0aW9uKHUpIHtyZXR1cm4ge3ZhbHVlOiAxLCB1bml0czoge1wicGNcIjogMX19O30sXG4gICAgICAgICAgXCJlVlwiLFxuICAgICAgICAgIHsgdHlwZTogXCJsaXRlcmFsXCIsIHZhbHVlOiBcImVWXCIsIGRlc2NyaXB0aW9uOiBcIlxcXCJlVlxcXCJcIiB9LFxuICAgICAgICAgIGZ1bmN0aW9uKHUpIHtyZXR1cm4ge3ZhbHVlOiAxLCB1bml0czoge1wiZVZcIjogMX19O30sXG4gICAgICAgICAgXCJHeVwiLFxuICAgICAgICAgIHsgdHlwZTogXCJsaXRlcmFsXCIsIHZhbHVlOiBcIkd5XCIsIGRlc2NyaXB0aW9uOiBcIlxcXCJHeVxcXCJcIiB9LFxuICAgICAgICAgIGZ1bmN0aW9uKHUpIHtyZXR1cm4ge3ZhbHVlOiAxLCB1bml0czoge1wiR3lcIjogMX19O30sXG4gICAgICAgICAgXCJzdFwiLFxuICAgICAgICAgIHsgdHlwZTogXCJsaXRlcmFsXCIsIHZhbHVlOiBcInN0XCIsIGRlc2NyaXB0aW9uOiBcIlxcXCJzdFxcXCJcIiB9LFxuICAgICAgICAgIGZ1bmN0aW9uKHUpIHtyZXR1cm4ge3ZhbHVlOiAxLCB1bml0czoge1wic3RcIjogMX19O30sXG4gICAgICAgICAgXCJTdlwiLFxuICAgICAgICAgIHsgdHlwZTogXCJsaXRlcmFsXCIsIHZhbHVlOiBcIlN2XCIsIGRlc2NyaXB0aW9uOiBcIlxcXCJTdlxcXCJcIiB9LFxuICAgICAgICAgIGZ1bmN0aW9uKHUpIHtyZXR1cm4ge3ZhbHVlOiAxLCB1bml0czoge1wiU3ZcIjogMX19O30sXG4gICAgICAgICAgXCJhclwiLFxuICAgICAgICAgIHsgdHlwZTogXCJsaXRlcmFsXCIsIHZhbHVlOiBcImFyXCIsIGRlc2NyaXB0aW9uOiBcIlxcXCJhclxcXCJcIiB9LFxuICAgICAgICAgIGZ1bmN0aW9uKHUpIHtyZXR1cm4ge3ZhbHVlOiAxLCB1bml0czoge1wiYXJcIjogMX19O30sXG4gICAgICAgICAgXCJzYlwiLFxuICAgICAgICAgIHsgdHlwZTogXCJsaXRlcmFsXCIsIHZhbHVlOiBcInNiXCIsIGRlc2NyaXB0aW9uOiBcIlxcXCJzYlxcXCJcIiB9LFxuICAgICAgICAgIGZ1bmN0aW9uKHUpIHtyZXR1cm4ge3ZhbHVlOiAxLCB1bml0czoge1wic2JcIjogMX19O30sXG4gICAgICAgICAgXCJMXCIsXG4gICAgICAgICAgeyB0eXBlOiBcImxpdGVyYWxcIiwgdmFsdWU6IFwiTFwiLCBkZXNjcmlwdGlvbjogXCJcXFwiTFxcXCJcIiB9LFxuICAgICAgICAgIGZ1bmN0aW9uKHUpIHtyZXR1cm4ge3ZhbHVlOiAxLCB1bml0czoge1wiTFwiOiAxfX07fSxcbiAgICAgICAgICBcInRcIixcbiAgICAgICAgICB7IHR5cGU6IFwibGl0ZXJhbFwiLCB2YWx1ZTogXCJ0XCIsIGRlc2NyaXB0aW9uOiBcIlxcXCJ0XFxcIlwiIH0sXG4gICAgICAgICAgZnVuY3Rpb24odSkge3JldHVybiB7dmFsdWU6IDEsIHVuaXRzOiB7XCJ0XCI6IDF9fTt9LFxuICAgICAgICAgIFwidVwiLFxuICAgICAgICAgIHsgdHlwZTogXCJsaXRlcmFsXCIsIHZhbHVlOiBcInVcIiwgZGVzY3JpcHRpb246IFwiXFxcInVcXFwiXCIgfSxcbiAgICAgICAgICBmdW5jdGlvbih1KSB7cmV0dXJuIHt2YWx1ZTogMSwgdW5pdHM6IHtcInVcIjogMX19O30sXG4gICAgICAgICAgXCJQXCIsXG4gICAgICAgICAgeyB0eXBlOiBcImxpdGVyYWxcIiwgdmFsdWU6IFwiUFwiLCBkZXNjcmlwdGlvbjogXCJcXFwiUFxcXCJcIiB9LFxuICAgICAgICAgIGZ1bmN0aW9uKHUpIHtyZXR1cm4ge3ZhbHVlOiAxLCB1bml0czoge1wiUFwiOiAxfX07fSxcbiAgICAgICAgICBcIkdcIixcbiAgICAgICAgICB7IHR5cGU6IFwibGl0ZXJhbFwiLCB2YWx1ZTogXCJHXCIsIGRlc2NyaXB0aW9uOiBcIlxcXCJHXFxcIlwiIH0sXG4gICAgICAgICAgZnVuY3Rpb24odSkge3JldHVybiB7dmFsdWU6IDEsIHVuaXRzOiB7XCJHXCI6IDF9fTt9LFxuICAgICAgICAgIFwiUlwiLFxuICAgICAgICAgIHsgdHlwZTogXCJsaXRlcmFsXCIsIHZhbHVlOiBcIlJcIiwgZGVzY3JpcHRpb246IFwiXFxcIlJcXFwiXCIgfSxcbiAgICAgICAgICBmdW5jdGlvbih1KSB7cmV0dXJuIHt2YWx1ZTogMSwgdW5pdHM6IHtcIlJcIjogMX19O30sXG4gICAgICAgICAgXCJIXCIsXG4gICAgICAgICAgeyB0eXBlOiBcImxpdGVyYWxcIiwgdmFsdWU6IFwiSFwiLCBkZXNjcmlwdGlvbjogXCJcXFwiSFxcXCJcIiB9LFxuICAgICAgICAgIGZ1bmN0aW9uKHUpIHtyZXR1cm4ge3ZhbHVlOiAxLCB1bml0czoge1wiSFwiOiAxfX07fSxcbiAgICAgICAgICBcIlRcIixcbiAgICAgICAgICB7IHR5cGU6IFwibGl0ZXJhbFwiLCB2YWx1ZTogXCJUXCIsIGRlc2NyaXB0aW9uOiBcIlxcXCJUXFxcIlwiIH0sXG4gICAgICAgICAgZnVuY3Rpb24odSkge3JldHVybiB7dmFsdWU6IDEsIHVuaXRzOiB7XCJUXCI6IDF9fTt9LFxuICAgICAgICAgIFwiVVwiLFxuICAgICAgICAgIHsgdHlwZTogXCJsaXRlcmFsXCIsIHZhbHVlOiBcIlVcIiwgZGVzY3JpcHRpb246IFwiXFxcIlVcXFwiXCIgfSxcbiAgICAgICAgICBmdW5jdGlvbih1KSB7cmV0dXJuIHt2YWx1ZTogMSwgdW5pdHM6IHtcIlVcIjogMX19O30sXG4gICAgICAgICAgXCJCXCIsXG4gICAgICAgICAgeyB0eXBlOiBcImxpdGVyYWxcIiwgdmFsdWU6IFwiQlwiLCBkZXNjcmlwdGlvbjogXCJcXFwiQlxcXCJcIiB9LFxuICAgICAgICAgIGZ1bmN0aW9uKHUpIHtyZXR1cm4ge3ZhbHVlOiAxLCB1bml0czoge1wiQlwiOiAxfX07fSxcbiAgICAgICAgICBcIlNcIixcbiAgICAgICAgICB7IHR5cGU6IFwibGl0ZXJhbFwiLCB2YWx1ZTogXCJTXCIsIGRlc2NyaXB0aW9uOiBcIlxcXCJTXFxcIlwiIH0sXG4gICAgICAgICAgZnVuY3Rpb24odSkge3JldHVybiB7dmFsdWU6IDEsIHVuaXRzOiB7XCJTXCI6IDF9fTt9LFxuICAgICAgICAgIFwibVwiLFxuICAgICAgICAgIHsgdHlwZTogXCJsaXRlcmFsXCIsIHZhbHVlOiBcIm1cIiwgZGVzY3JpcHRpb246IFwiXFxcIm1cXFwiXCIgfSxcbiAgICAgICAgICBmdW5jdGlvbih1KSB7cmV0dXJuIHt2YWx1ZTogMSwgdW5pdHM6IHtcIm1cIjogMX19O30sXG4gICAgICAgICAgXCJzXCIsXG4gICAgICAgICAgeyB0eXBlOiBcImxpdGVyYWxcIiwgdmFsdWU6IFwic1wiLCBkZXNjcmlwdGlvbjogXCJcXFwic1xcXCJcIiB9LFxuICAgICAgICAgIGZ1bmN0aW9uKHUpIHtyZXR1cm4ge3ZhbHVlOiAxLCB1bml0czoge1wic1wiOiAxfX07fSxcbiAgICAgICAgICBcIkZcIixcbiAgICAgICAgICB7IHR5cGU6IFwibGl0ZXJhbFwiLCB2YWx1ZTogXCJGXCIsIGRlc2NyaXB0aW9uOiBcIlxcXCJGXFxcIlwiIH0sXG4gICAgICAgICAgZnVuY3Rpb24odSkge3JldHVybiB7dmFsdWU6IDEsIHVuaXRzOiB7XCJGXCI6IDF9fTt9LFxuICAgICAgICAgIFwibFwiLFxuICAgICAgICAgIHsgdHlwZTogXCJsaXRlcmFsXCIsIHZhbHVlOiBcImxcIiwgZGVzY3JpcHRpb246IFwiXFxcImxcXFwiXCIgfSxcbiAgICAgICAgICBmdW5jdGlvbih1KSB7cmV0dXJuIHt2YWx1ZTogMSwgdW5pdHM6IHtcImxcIjogMX19O30sXG4gICAgICAgICAgXCJWXCIsXG4gICAgICAgICAgeyB0eXBlOiBcImxpdGVyYWxcIiwgdmFsdWU6IFwiVlwiLCBkZXNjcmlwdGlvbjogXCJcXFwiVlxcXCJcIiB9LFxuICAgICAgICAgIGZ1bmN0aW9uKHUpIHtyZXR1cm4ge3ZhbHVlOiAxLCB1bml0czoge1wiVlwiOiAxfX07fSxcbiAgICAgICAgICBcIkFcIixcbiAgICAgICAgICB7IHR5cGU6IFwibGl0ZXJhbFwiLCB2YWx1ZTogXCJBXCIsIGRlc2NyaXB0aW9uOiBcIlxcXCJBXFxcIlwiIH0sXG4gICAgICAgICAgZnVuY3Rpb24odSkge3JldHVybiB7dmFsdWU6IDEsIHVuaXRzOiB7XCJBXCI6IDF9fTt9LFxuICAgICAgICAgIFwiV1wiLFxuICAgICAgICAgIHsgdHlwZTogXCJsaXRlcmFsXCIsIHZhbHVlOiBcIldcIiwgZGVzY3JpcHRpb246IFwiXFxcIldcXFwiXCIgfSxcbiAgICAgICAgICBmdW5jdGlvbih1KSB7cmV0dXJuIHt2YWx1ZTogMSwgdW5pdHM6IHtcIldcIjogMX19O30sXG4gICAgICAgICAgXCJLXCIsXG4gICAgICAgICAgeyB0eXBlOiBcImxpdGVyYWxcIiwgdmFsdWU6IFwiS1wiLCBkZXNjcmlwdGlvbjogXCJcXFwiS1xcXCJcIiB9LFxuICAgICAgICAgIGZ1bmN0aW9uKHUpIHtyZXR1cm4ge3ZhbHVlOiAxLCB1bml0czoge1wiS1wiOiAxfX07fSxcbiAgICAgICAgICBcIkNcIixcbiAgICAgICAgICB7IHR5cGU6IFwibGl0ZXJhbFwiLCB2YWx1ZTogXCJDXCIsIGRlc2NyaXB0aW9uOiBcIlxcXCJDXFxcIlwiIH0sXG4gICAgICAgICAgZnVuY3Rpb24odSkge3JldHVybiB7dmFsdWU6IDEsIHVuaXRzOiB7XCJDXCI6IDF9fTt9LFxuICAgICAgICAgIFwiYlwiLFxuICAgICAgICAgIHsgdHlwZTogXCJsaXRlcmFsXCIsIHZhbHVlOiBcImJcIiwgZGVzY3JpcHRpb246IFwiXFxcImJcXFwiXCIgfSxcbiAgICAgICAgICBmdW5jdGlvbih1KSB7cmV0dXJuIHt2YWx1ZTogMSwgdW5pdHM6IHtcImJcIjogMX19O30sXG4gICAgICAgICAgXCIlXCIsXG4gICAgICAgICAgeyB0eXBlOiBcImxpdGVyYWxcIiwgdmFsdWU6IFwiJVwiLCBkZXNjcmlwdGlvbjogXCJcXFwiJVxcXCJcIiB9LFxuICAgICAgICAgIGZ1bmN0aW9uKHUpIHtyZXR1cm4ge3ZhbHVlOiAxLCB1bml0czoge1wiJVwiOiAxfX07fSxcbiAgICAgICAgICBcIkpcIixcbiAgICAgICAgICB7IHR5cGU6IFwibGl0ZXJhbFwiLCB2YWx1ZTogXCJKXCIsIGRlc2NyaXB0aW9uOiBcIlxcXCJKXFxcIlwiIH0sXG4gICAgICAgICAgZnVuY3Rpb24odSkge3JldHVybiB7dmFsdWU6IDEsIHVuaXRzOiB7XCJKXCI6IDF9fTt9LFxuICAgICAgICAgIFwiJ1wiLFxuICAgICAgICAgIHsgdHlwZTogXCJsaXRlcmFsXCIsIHZhbHVlOiBcIidcIiwgZGVzY3JpcHRpb246IFwiXFxcIidcXFwiXCIgfSxcbiAgICAgICAgICBmdW5jdGlvbih1KSB7cmV0dXJuIHt2YWx1ZTogMSwgdW5pdHM6IHtcIidcIjogMX19O30sXG4gICAgICAgICAgXCJoXCIsXG4gICAgICAgICAgeyB0eXBlOiBcImxpdGVyYWxcIiwgdmFsdWU6IFwiaFwiLCBkZXNjcmlwdGlvbjogXCJcXFwiaFxcXCJcIiB9LFxuICAgICAgICAgIGZ1bmN0aW9uKHUpIHtyZXR1cm4ge3ZhbHVlOiAxLCB1bml0czoge1wiaFwiOiAxfX07fSxcbiAgICAgICAgICBcImRcIixcbiAgICAgICAgICB7IHR5cGU6IFwibGl0ZXJhbFwiLCB2YWx1ZTogXCJkXCIsIGRlc2NyaXB0aW9uOiBcIlxcXCJkXFxcIlwiIH0sXG4gICAgICAgICAgZnVuY3Rpb24odSkge3JldHVybiB7dmFsdWU6IDEsIHVuaXRzOiB7XCJkXCI6IDF9fTt9LFxuICAgICAgICAgIFwiTlwiLFxuICAgICAgICAgIHsgdHlwZTogXCJsaXRlcmFsXCIsIHZhbHVlOiBcIk5cIiwgZGVzY3JpcHRpb246IFwiXFxcIk5cXFwiXCIgfSxcbiAgICAgICAgICBmdW5jdGlvbih1KSB7cmV0dXJuIHt2YWx1ZTogMSwgdW5pdHM6IHtcIk5cIjogMX19O30sXG4gICAgICAgICAgXCJhXCIsXG4gICAgICAgICAgeyB0eXBlOiBcImxpdGVyYWxcIiwgdmFsdWU6IFwiYVwiLCBkZXNjcmlwdGlvbjogXCJcXFwiYVxcXCJcIiB9LFxuICAgICAgICAgIGZ1bmN0aW9uKHUpIHtyZXR1cm4ge3ZhbHVlOiAxLCB1bml0czoge1wiYVwiOiAxfX07fSxcbiAgICAgICAgICBcImdcIixcbiAgICAgICAgICB7IHR5cGU6IFwibGl0ZXJhbFwiLCB2YWx1ZTogXCJnXCIsIGRlc2NyaXB0aW9uOiBcIlxcXCJnXFxcIlwiIH0sXG4gICAgICAgICAgZnVuY3Rpb24odSkge3JldHVybiB7dmFsdWU6IDEsIHVuaXRzOiB7XCJnXCI6IDF9fTt9LFxuICAgICAgICAgIFwiWVwiLFxuICAgICAgICAgIHsgdHlwZTogXCJsaXRlcmFsXCIsIHZhbHVlOiBcIllcIiwgZGVzY3JpcHRpb246IFwiXFxcIllcXFwiXCIgfSxcbiAgICAgICAgICBcIlpcIixcbiAgICAgICAgICB7IHR5cGU6IFwibGl0ZXJhbFwiLCB2YWx1ZTogXCJaXCIsIGRlc2NyaXB0aW9uOiBcIlxcXCJaXFxcIlwiIH0sXG4gICAgICAgICAgXCJFXCIsXG4gICAgICAgICAgeyB0eXBlOiBcImxpdGVyYWxcIiwgdmFsdWU6IFwiRVwiLCBkZXNjcmlwdGlvbjogXCJcXFwiRVxcXCJcIiB9LFxuICAgICAgICAgIFwiTVwiLFxuICAgICAgICAgIHsgdHlwZTogXCJsaXRlcmFsXCIsIHZhbHVlOiBcIk1cIiwgZGVzY3JpcHRpb246IFwiXFxcIk1cXFwiXCIgfSxcbiAgICAgICAgICBcImtcIixcbiAgICAgICAgICB7IHR5cGU6IFwibGl0ZXJhbFwiLCB2YWx1ZTogXCJrXCIsIGRlc2NyaXB0aW9uOiBcIlxcXCJrXFxcIlwiIH0sXG4gICAgICAgICAgXCJkYVwiLFxuICAgICAgICAgIHsgdHlwZTogXCJsaXRlcmFsXCIsIHZhbHVlOiBcImRhXCIsIGRlc2NyaXB0aW9uOiBcIlxcXCJkYVxcXCJcIiB9LFxuICAgICAgICAgIFwiY1wiLFxuICAgICAgICAgIHsgdHlwZTogXCJsaXRlcmFsXCIsIHZhbHVlOiBcImNcIiwgZGVzY3JpcHRpb246IFwiXFxcImNcXFwiXCIgfSxcbiAgICAgICAgICBcIm5cIixcbiAgICAgICAgICB7IHR5cGU6IFwibGl0ZXJhbFwiLCB2YWx1ZTogXCJuXCIsIGRlc2NyaXB0aW9uOiBcIlxcXCJuXFxcIlwiIH0sXG4gICAgICAgICAgXCJwXCIsXG4gICAgICAgICAgeyB0eXBlOiBcImxpdGVyYWxcIiwgdmFsdWU6IFwicFwiLCBkZXNjcmlwdGlvbjogXCJcXFwicFxcXCJcIiB9LFxuICAgICAgICAgIFwiZlwiLFxuICAgICAgICAgIHsgdHlwZTogXCJsaXRlcmFsXCIsIHZhbHVlOiBcImZcIiwgZGVzY3JpcHRpb246IFwiXFxcImZcXFwiXCIgfSxcbiAgICAgICAgICBcInpcIixcbiAgICAgICAgICB7IHR5cGU6IFwibGl0ZXJhbFwiLCB2YWx1ZTogXCJ6XCIsIGRlc2NyaXB0aW9uOiBcIlxcXCJ6XFxcIlwiIH0sXG4gICAgICAgICAgXCJ5XCIsXG4gICAgICAgICAgeyB0eXBlOiBcImxpdGVyYWxcIiwgdmFsdWU6IFwieVwiLCBkZXNjcmlwdGlvbjogXCJcXFwieVxcXCJcIiB9LFxuICAgICAgICAgIFwiS2lcIixcbiAgICAgICAgICB7IHR5cGU6IFwibGl0ZXJhbFwiLCB2YWx1ZTogXCJLaVwiLCBkZXNjcmlwdGlvbjogXCJcXFwiS2lcXFwiXCIgfSxcbiAgICAgICAgICBcIk1pXCIsXG4gICAgICAgICAgeyB0eXBlOiBcImxpdGVyYWxcIiwgdmFsdWU6IFwiTWlcIiwgZGVzY3JpcHRpb246IFwiXFxcIk1pXFxcIlwiIH0sXG4gICAgICAgICAgXCJHaVwiLFxuICAgICAgICAgIHsgdHlwZTogXCJsaXRlcmFsXCIsIHZhbHVlOiBcIkdpXCIsIGRlc2NyaXB0aW9uOiBcIlxcXCJHaVxcXCJcIiB9LFxuICAgICAgICAgIFwiVGlcIixcbiAgICAgICAgICB7IHR5cGU6IFwibGl0ZXJhbFwiLCB2YWx1ZTogXCJUaVwiLCBkZXNjcmlwdGlvbjogXCJcXFwiVGlcXFwiXCIgfVxuICAgICAgICBdLFxuXG4gICAgICAgIHBlZyRieXRlY29kZSA9IFtcbiAgICAgICAgICBwZWckZGVjb2RlKFwiITchKycgNCE2ICEhICVcIiksXG4gICAgICAgICAgcGVnJGRlY29kZShcIiEuXFxcIlxcXCJcXFwiMlxcXCIzIysyJDcjKyglNFxcXCI2JFxcXCIhICUkXFxcIiMgIVxcXCIjICEqIyBcXFwiNyNcIiksXG4gICAgICAgICAgcGVnJGRlY29kZShcIiEuJVxcXCJcXFwiMiUzJistJDckKyMlJ1xcXCIlJFxcXCIjICFcXFwiIyAhKj4gXFxcIiEuXFxcIlxcXCJcXFwiMlxcXCIzIystJDckKyMlJ1xcXCIlJFxcXCIjICFcXFwiIyAhXCIpLFxuICAgICAgICAgIHBlZyRkZWNvZGUoXCIhNyQrOyQgJzdcXFwiLCMmN1xcXCJcXFwiKyklNFxcXCI2KFxcXCJcXFwiISAlJFxcXCIjICFcXFwiIyAhXCIpLFxuICAgICAgICAgIHBlZyRkZWNvZGUoXCIhNyUrYyQ3JiojIFxcXCIgKStTJSAnNyksIyY3KVxcXCIrQSU1NiogXFxcIlxcXCIhKSMjXFxcIiAhXFxcIiArKyklNCQ2LCRcXFwiI1xcXCIlJCQjICEkIyMgISRcXFwiIyAhXFxcIiMgISpFIFxcXCIhNygrOiQgJzcpLCMmNylcXFwiKyglNFxcXCI2LVxcXCIhISUkXFxcIiMgIVxcXCIjICFcIiksXG4gICAgICAgICAgcGVnJGRlY29kZShcIiE3JysnIDQhNi4hISAlKlkgXFxcIiEuL1xcXCJcXFwiMi8zMCtCJDcjKzglLjFcXFwiXFxcIjIxMzIrKCU0IzYzIyEhJSQjIyAhJFxcXCIjICFcXFwiIyAhKiMgXFxcIjcpXCIpLFxuICAgICAgICAgIHBlZyRkZWNvZGUoXCIhMDRcXFwiXFxcIjEhMzUqIyBcXFwiICkrMyQ3KCspJTRcXFwiNjZcXFwiXFxcIiEgJSRcXFwiIyAhXFxcIiMgIVwiKSxcbiAgICAgICAgICBwZWckZGVjb2RlKFwiITcrKiMgXFxcIiApK0skNyorQSU1NjcgXFxcIiEgKSMjXFxcIiAhXFxcIiArKyklNCM2OCNcXFwiXFxcIiElJCMjICEkXFxcIiMgIVxcXCIjICEqIyBcXFwiNypcIiksXG4gICAgICAgICAgcGVnJGRlY29kZShcIiEgJzA5XFxcIlxcXCIxITM6KywkLCkmMDlcXFwiXFxcIjEhMzpcXFwiXFxcIlxcXCIgIStpJC47XFxcIlxcXCIyOzM8KiMgXFxcIiApK1MlNyYqIyBcXFwiICkrQyU1Nj0gI1xcXCIhICkjI1xcXCIgIVxcXCIgKysqJTQkNj4kIyNcXFwiISUkJCMgISQjIyAhJFxcXCIjICFcXFwiIyAhXCIpLFxuICAgICAgICAgIHBlZyRkZWNvZGUoXCIhLj9cXFwiXFxcIjI/M0ArdCQgJzBBXFxcIlxcXCIxITNCKywkLCkmMEFcXFwiXFxcIjEhM0JcXFwiXFxcIlxcXCIgIStPJS5DXFxcIlxcXCIyQzNEKz8lNTZFICEhKSMjXFxcIiAhXFxcIiArKyglNCQ2RiQhXFxcIiUkJCMgISQjIyAhJFxcXCIjICFcXFwiIyAhXCIpLFxuICAgICAgICAgIHBlZyRkZWNvZGUoXCIhLkdcXFwiXFxcIjJHM0grJyA0ITZJISEgJSpcXHUxQ0NEIFxcXCIhLkpcXFwiXFxcIjJKM0srJyA0ITZMISEgJSpcXHUxQ0I1IFxcXCIhLk1cXFwiXFxcIjJNM04rJyA0ITZPISEgJSpcXHUxQzlEIFxcXCIhLlBcXFwiXFxcIjJQM1ErJyA0ITZSISEgJSpcXHUxQzg1IFxcXCIhLlNcXFwiXFxcIjJTM1QrJyA0ITZVISEgJSpcXHUxQzZEIFxcXCIhLlZcXFwiXFxcIjJWM1crJyA0ITZYISEgJSpcXHUxQzU1IFxcXCIhLllcXFwiXFxcIjJZM1orJyA0ITZbISEgJSpcXHUxQzNEIFxcXCIhLlxcXFxcXFwiXFxcIjJcXFxcM10rJyA0ITZeISEgJSpcXHUxQzI1IFxcXCIhLl9cXFwiXFxcIjJfM2ArJyA0ITZhISEgJSpcXHUxQzBEIFxcXCIhLmJcXFwiXFxcIjJiM2MrJyA0ITZkISEgJSpcXHUxQkY1IFxcXCIhLmVcXFwiXFxcIjJlM2YrJyA0ITZnISEgJSpcXHUxQkREIFxcXCIhLmhcXFwiXFxcIjJoM2krJyA0ITZqISEgJSpcXHUxQkM1IFxcXCIhLmtcXFwiXFxcIjJrM2wrJyA0ITZtISEgJSpcXHUxQkFEIFxcXCIhLm5cXFwiXFxcIjJuM28rJyA0ITZwISEgJSpcXHUxQjk1IFxcXCIhLnFcXFwiXFxcIjJxM3IrJyA0ITZzISEgJSpcXHUxQjdEIFxcXCIhLnRcXFwiXFxcIjJ0M3UrJyA0ITZ2ISEgJSpcXHUxQjY1IFxcXCIhLndcXFwiXFxcIjJ3M3grJyA0ITZ5ISEgJSpcXHUxQjREIFxcXCIhLnpcXFwiXFxcIjJ6M3srJyA0ITZ8ISEgJSpcXHUxQjM1IFxcXCIhLn1cXFwiXFxcIjJ9M34rJyA0ITZ/ISEgJSpcXHUxQjFEIFxcXCIhLlxceDgwXFxcIlxcXCIyXFx4ODAzXFx4ODErJyA0ITZcXHg4MiEhICUqXFx1MUIwNSBcXFwiIS5cXHg4M1xcXCJcXFwiMlxceDgzM1xceDg0KycgNCE2XFx4ODUhISAlKlxcdTFBRUQgXFxcIiEuXFx4ODZcXFwiXFxcIjJcXHg4NjNcXHg4NysnIDQhNlxceDg4ISEgJSpcXHUxQUQ1IFxcXCIhLlxceDg5XFxcIlxcXCIyXFx4ODkzXFx4OEErJyA0ITZcXHg4QiEhICUqXFx1MUFCRCBcXFwiIS5cXHg4Q1xcXCJcXFwiMlxceDhDM1xceDhEKycgNCE2XFx4OEUhISAlKlxcdTFBQTUgXFxcIiEuXFx4OEZcXFwiXFxcIjJcXHg4RjNcXHg5MCsnIDQhNlxceDkxISEgJSpcXHUxQThEIFxcXCIhLlxceDkyXFxcIlxcXCIyXFx4OTIzXFx4OTMrJyA0ITZcXHg5NCEhICUqXFx1MUE3NSBcXFwiIS5cXHg5NVxcXCJcXFwiMlxceDk1M1xceDk2KycgNCE2XFx4OTchISAlKlxcdTFBNUQgXFxcIiEuXFx4OThcXFwiXFxcIjJcXHg5ODNcXHg5OSsnIDQhNlxceDlBISEgJSpcXHUxQTQ1IFxcXCIhLlxceDlCXFxcIlxcXCIyXFx4OUIzXFx4OUMrJyA0ITZcXHg5RCEhICUqXFx1MUEyRCBcXFwiIS5cXHg5RVxcXCJcXFwiMlxceDlFM1xceDlGKycgNCE2XFx4QTAhISAlKlxcdTFBMTUgXFxcIiEuXFx4QTFcXFwiXFxcIjJcXHhBMTNcXHhBMisnIDQhNlxceEEzISEgJSpcXHUxOUZEIFxcXCIhLlxceEE0XFxcIlxcXCIyXFx4QTQzXFx4QTUrJyA0ITZcXHhBNiEhICUqXFx1MTlFNSBcXFwiIS5cXHhBN1xcXCJcXFwiMlxceEE3M1xceEE4KycgNCE2XFx4QTkhISAlKlxcdTE5Q0QgXFxcIiEuXFx4QUFcXFwiXFxcIjJcXHhBQTNcXHhBQisnIDQhNlxceEFDISEgJSpcXHUxOUI1IFxcXCIhLlxceEFEXFxcIlxcXCIyXFx4QUQzXFx4QUUrJyA0ITZcXHhBRiEhICUqXFx1MTk5RCBcXFwiIS5cXHhCMFxcXCJcXFwiMlxceEIwM1xceEIxKycgNCE2XFx4QjIhISAlKlxcdTE5ODUgXFxcIiEuXFx4QjNcXFwiXFxcIjJcXHhCMzNcXHhCNCsnIDQhNlxceEI1ISEgJSpcXHUxOTZEIFxcXCIhLlxceEI2XFxcIlxcXCIyXFx4QjYzXFx4QjcrJyA0ITZcXHhCOCEhICUqXFx1MTk1NSBcXFwiIS5cXHhCOVxcXCJcXFwiMlxceEI5M1xceEJBKycgNCE2XFx4QkIhISAlKlxcdTE5M0QgXFxcIiEuXFx4QkNcXFwiXFxcIjJcXHhCQzNcXHhCRCsnIDQhNlxceEJFISEgJSpcXHUxOTI1IFxcXCIhLlxceEJGXFxcIlxcXCIyXFx4QkYzXFx4QzArJyA0ITZcXHhDMSEhICUqXFx1MTkwRCBcXFwiIS5cXHhDMlxcXCJcXFwiMlxceEMyM1xceEMzKycgNCE2XFx4QzQhISAlKlxcdTE4RjUgXFxcIiEuXFx4QzVcXFwiXFxcIjJcXHhDNTNcXHhDNisnIDQhNlxceEM3ISEgJSpcXHUxOEREIFxcXCIhLlxceEM4XFxcIlxcXCIyXFx4QzgzXFx4QzkrJyA0ITZcXHhDQSEhICUqXFx1MThDNSBcXFwiIS5cXHhDQlxcXCJcXFwiMlxceENCM1xceENDKycgNCE2XFx4Q0QhISAlKlxcdTE4QUQgXFxcIiEuXFx4Q0VcXFwiXFxcIjJcXHhDRTNcXHhDRisnIDQhNlxceEQwISEgJSpcXHUxODk1IFxcXCIhLlxceEQxXFxcIlxcXCIyXFx4RDEzXFx4RDIrJyA0ITZcXHhEMyEhICUqXFx1MTg3RCBcXFwiIS5cXHhENFxcXCJcXFwiMlxceEQ0M1xceEQ1KycgNCE2XFx4RDYhISAlKlxcdTE4NjUgXFxcIiEuXFx4RDdcXFwiXFxcIjJcXHhENzNcXHhEOCsnIDQhNlxceEQ5ISEgJSpcXHUxODREIFxcXCIhLlxceERBXFxcIlxcXCIyXFx4REEzXFx4REIrJyA0ITZcXHhEQyEhICUqXFx1MTgzNSBcXFwiIS5cXHhERFxcXCJcXFwiMlxceEREM1xceERFKycgNCE2XFx4REYhISAlKlxcdTE4MUQgXFxcIiEuXFx4RTBcXFwiXFxcIjJcXHhFMDNcXHhFMSsnIDQhNlxceEUyISEgJSpcXHUxODA1IFxcXCIhLlxceEUzXFxcIlxcXCIyXFx4RTMzXFx4RTQrJyA0ITZcXHhFNSEhICUqXFx1MTdFRCBcXFwiIS5cXHhFNlxcXCJcXFwiMlxceEU2M1xceEU3KycgNCE2XFx4RTghISAlKlxcdTE3RDUgXFxcIiEuXFx4RTlcXFwiXFxcIjJcXHhFOTNcXHhFQSsnIDQhNlxceEVCISEgJSpcXHUxN0JEIFxcXCIhLlxceEVDXFxcIlxcXCIyXFx4RUMzXFx4RUQrJyA0ITZcXHhFRSEhICUqXFx1MTdBNSBcXFwiIS5cXHhFRlxcXCJcXFwiMlxceEVGM1xceEYwKycgNCE2XFx4RjEhISAlKlxcdTE3OEQgXFxcIiEuXFx4RjJcXFwiXFxcIjJcXHhGMjNcXHhGMysnIDQhNlxceEY0ISEgJSpcXHUxNzc1IFxcXCIhLlxceEY1XFxcIlxcXCIyXFx4RjUzXFx4RjYrJyA0ITZcXHhGNyEhICUqXFx1MTc1RCBcXFwiIS5cXHhGOFxcXCJcXFwiMlxceEY4M1xceEY5KycgNCE2XFx4RkEhISAlKlxcdTE3NDUgXFxcIiEuXFx4RkJcXFwiXFxcIjJcXHhGQjNcXHhGQysnIDQhNlxceEZEISEgJSpcXHUxNzJEIFxcXCIhLlxceEZFXFxcIlxcXCIyXFx4RkUzXFx4RkYrJyA0ITZcXHUwMTAwISEgJSpcXHUxNzE1IFxcXCIhLlxcdTAxMDFcXFwiXFxcIjJcXHUwMTAxM1xcdTAxMDIrJyA0ITZcXHUwMTAzISEgJSpcXHUxNkZEIFxcXCIhLlxcdTAxMDRcXFwiXFxcIjJcXHUwMTA0M1xcdTAxMDUrJyA0ITZcXHUwMTA2ISEgJSpcXHUxNkU1IFxcXCIhLlxcdTAxMDdcXFwiXFxcIjJcXHUwMTA3M1xcdTAxMDgrJyA0ITZcXHUwMTA5ISEgJSpcXHUxNkNEIFxcXCIhLlxcdTAxMEFcXFwiXFxcIjJcXHUwMTBBM1xcdTAxMEIrJyA0ITZcXHUwMTBDISEgJSpcXHUxNkI1IFxcXCIhLlxcdTAxMERcXFwiXFxcIjJcXHUwMTBEM1xcdTAxMEUrJyA0ITZcXHUwMTBGISEgJSpcXHUxNjlEIFxcXCIhLlxcdTAxMTBcXFwiXFxcIjJcXHUwMTEwM1xcdTAxMTErJyA0ITZcXHUwMTEyISEgJSpcXHUxNjg1IFxcXCIhLlxcdTAxMTNcXFwiXFxcIjJcXHUwMTEzM1xcdTAxMTQrJyA0ITZcXHUwMTE1ISEgJSpcXHUxNjZEIFxcXCIhLlxcdTAxMTZcXFwiXFxcIjJcXHUwMTE2M1xcdTAxMTcrJyA0ITZcXHUwMTE4ISEgJSpcXHUxNjU1IFxcXCIhLlxcdTAxMTlcXFwiXFxcIjJcXHUwMTE5M1xcdTAxMUErJyA0ITZcXHUwMTFCISEgJSpcXHUxNjNEIFxcXCIhLlxcdTAxMUNcXFwiXFxcIjJcXHUwMTFDM1xcdTAxMUQrJyA0ITZcXHUwMTFFISEgJSpcXHUxNjI1IFxcXCIhLlxcdTAxMUZcXFwiXFxcIjJcXHUwMTFGM1xcdTAxMjArJyA0ITZcXHUwMTIxISEgJSpcXHUxNjBEIFxcXCIhLlxcdTAxMjJcXFwiXFxcIjJcXHUwMTIyM1xcdTAxMjMrJyA0ITZcXHUwMTI0ISEgJSpcXHUxNUY1IFxcXCIhLlxcdTAxMjVcXFwiXFxcIjJcXHUwMTI1M1xcdTAxMjYrJyA0ITZcXHUwMTI3ISEgJSpcXHUxNUREIFxcXCIhLlxcdTAxMjhcXFwiXFxcIjJcXHUwMTI4M1xcdTAxMjkrJyA0ITZcXHUwMTJBISEgJSpcXHUxNUM1IFxcXCIhLlxcdTAxMkJcXFwiXFxcIjJcXHUwMTJCM1xcdTAxMkMrJyA0ITZcXHUwMTJEISEgJSpcXHUxNUFEIFxcXCIhLlxcdTAxMkVcXFwiXFxcIjJcXHUwMTJFM1xcdTAxMkYrJyA0ITZcXHUwMTMwISEgJSpcXHUxNTk1IFxcXCIhLlxcdTAxMzFcXFwiXFxcIjJcXHUwMTMxM1xcdTAxMzIrJyA0ITZcXHUwMTMzISEgJSpcXHUxNTdEIFxcXCIhLlxcdTAxMzRcXFwiXFxcIjJcXHUwMTM0M1xcdTAxMzUrJyA0ITZcXHUwMTM2ISEgJSpcXHUxNTY1IFxcXCIhLlxcdTAxMzdcXFwiXFxcIjJcXHUwMTM3M1xcdTAxMzgrJyA0ITZcXHUwMTM5ISEgJSpcXHUxNTREIFxcXCIhLlxcdTAxM0FcXFwiXFxcIjJcXHUwMTNBM1xcdTAxM0IrJyA0ITZcXHUwMTNDISEgJSpcXHUxNTM1IFxcXCIhLlxcdTAxM0RcXFwiXFxcIjJcXHUwMTNEM1xcdTAxM0UrJyA0ITZcXHUwMTNGISEgJSpcXHUxNTFEIFxcXCIhLlxcdTAxNDBcXFwiXFxcIjJcXHUwMTQwM1xcdTAxNDErJyA0ITZcXHUwMTQyISEgJSpcXHUxNTA1IFxcXCIhLlxcdTAxNDNcXFwiXFxcIjJcXHUwMTQzM1xcdTAxNDQrJyA0ITZcXHUwMTQ1ISEgJSpcXHUxNEVEIFxcXCIhLlxcdTAxNDZcXFwiXFxcIjJcXHUwMTQ2M1xcdTAxNDcrJyA0ITZcXHUwMTQ4ISEgJSpcXHUxNEQ1IFxcXCIhLlxcdTAxNDlcXFwiXFxcIjJcXHUwMTQ5M1xcdTAxNEErJyA0ITZcXHUwMTRCISEgJSpcXHUxNEJEIFxcXCIhLlxcdTAxNENcXFwiXFxcIjJcXHUwMTRDM1xcdTAxNEQrJyA0ITZcXHUwMTRFISEgJSpcXHUxNEE1IFxcXCIhLlxcdTAxNEZcXFwiXFxcIjJcXHUwMTRGM1xcdTAxNTArJyA0ITZcXHUwMTUxISEgJSpcXHUxNDhEIFxcXCIhLlxcdTAxNTJcXFwiXFxcIjJcXHUwMTUyM1xcdTAxNTMrJyA0ITZcXHUwMTU0ISEgJSpcXHUxNDc1IFxcXCIhLlxcdTAxNTVcXFwiXFxcIjJcXHUwMTU1M1xcdTAxNTYrJyA0ITZcXHUwMTU3ISEgJSpcXHUxNDVEIFxcXCIhLlxcdTAxNThcXFwiXFxcIjJcXHUwMTU4M1xcdTAxNTkrJyA0ITZcXHUwMTVBISEgJSpcXHUxNDQ1IFxcXCIhLlxcdTAxNUJcXFwiXFxcIjJcXHUwMTVCM1xcdTAxNUMrJyA0ITZcXHUwMTVEISEgJSpcXHUxNDJEIFxcXCIhLlxcdTAxNUVcXFwiXFxcIjJcXHUwMTVFM1xcdTAxNUYrJyA0ITZcXHUwMTYwISEgJSpcXHUxNDE1IFxcXCIhLlxcdTAxNjFcXFwiXFxcIjJcXHUwMTYxM1xcdTAxNjIrJyA0ITZcXHUwMTYzISEgJSpcXHUxM0ZEIFxcXCIhLlxcdTAxNjRcXFwiXFxcIjJcXHUwMTY0M1xcdTAxNjUrJyA0ITZcXHUwMTY2ISEgJSpcXHUxM0U1IFxcXCIhLlxcdTAxNjdcXFwiXFxcIjJcXHUwMTY3M1xcdTAxNjgrJyA0ITZcXHUwMTY5ISEgJSpcXHUxM0NEIFxcXCIhLlxcdTAxNkFcXFwiXFxcIjJcXHUwMTZBM1xcdTAxNkIrJyA0ITZcXHUwMTZDISEgJSpcXHUxM0I1IFxcXCIhLlxcdTAxNkRcXFwiXFxcIjJcXHUwMTZEM1xcdTAxNkUrJyA0ITZcXHUwMTZGISEgJSpcXHUxMzlEIFxcXCIhLlxcdTAxNzBcXFwiXFxcIjJcXHUwMTcwM1xcdTAxNzErJyA0ITZcXHUwMTcyISEgJSpcXHUxMzg1IFxcXCIhLlxcdTAxNzNcXFwiXFxcIjJcXHUwMTczM1xcdTAxNzQrJyA0ITZcXHUwMTc1ISEgJSpcXHUxMzZEIFxcXCIhLlxcdTAxNzZcXFwiXFxcIjJcXHUwMTc2M1xcdTAxNzcrJyA0ITZcXHUwMTc4ISEgJSpcXHUxMzU1IFxcXCIhLlxcdTAxNzlcXFwiXFxcIjJcXHUwMTc5M1xcdTAxN0ErJyA0ITZcXHUwMTdCISEgJSpcXHUxMzNEIFxcXCIhLlxcdTAxN0NcXFwiXFxcIjJcXHUwMTdDM1xcdTAxN0QrJyA0ITZcXHUwMTdFISEgJSpcXHUxMzI1IFxcXCIhLlxcdTAxN0ZcXFwiXFxcIjJcXHUwMTdGM1xcdTAxODArJyA0ITZcXHUwMTgxISEgJSpcXHUxMzBEIFxcXCIhLlxcdTAxODJcXFwiXFxcIjJcXHUwMTgyM1xcdTAxODMrJyA0ITZcXHUwMTg0ISEgJSpcXHUxMkY1IFxcXCIhLlxcdTAxODVcXFwiXFxcIjJcXHUwMTg1M1xcdTAxODYrJyA0ITZcXHUwMTg3ISEgJSpcXHUxMkREIFxcXCIhLlxcdTAxODhcXFwiXFxcIjJcXHUwMTg4M1xcdTAxODkrJyA0ITZcXHUwMThBISEgJSpcXHUxMkM1IFxcXCIhLlxcdTAxOEJcXFwiXFxcIjJcXHUwMThCM1xcdTAxOEMrJyA0ITZcXHUwMThEISEgJSpcXHUxMkFEIFxcXCIhLlxcdTAxOEVcXFwiXFxcIjJcXHUwMThFM1xcdTAxOEYrJyA0ITZcXHUwMTkwISEgJSpcXHUxMjk1IFxcXCIhLlxcdTAxOTFcXFwiXFxcIjJcXHUwMTkxM1xcdTAxOTIrJyA0ITZcXHUwMTkzISEgJSpcXHUxMjdEIFxcXCIhLlxcdTAxOTRcXFwiXFxcIjJcXHUwMTk0M1xcdTAxOTUrJyA0ITZcXHUwMTk2ISEgJSpcXHUxMjY1IFxcXCIhLlxcdTAxOTdcXFwiXFxcIjJcXHUwMTk3M1xcdTAxOTgrJyA0ITZcXHUwMTk5ISEgJSpcXHUxMjREIFxcXCIhLlxcdTAxOUFcXFwiXFxcIjJcXHUwMTlBM1xcdTAxOUIrJyA0ITZcXHUwMTlDISEgJSpcXHUxMjM1IFxcXCIhLlxcdTAxOURcXFwiXFxcIjJcXHUwMTlEM1xcdTAxOUUrJyA0ITZcXHUwMTlGISEgJSpcXHUxMjFEIFxcXCIhLlxcdTAxQTBcXFwiXFxcIjJcXHUwMUEwM1xcdTAxQTErJyA0ITZcXHUwMUEyISEgJSpcXHUxMjA1IFxcXCIhLlxcdTAxQTNcXFwiXFxcIjJcXHUwMUEzM1xcdTAxQTQrJyA0ITZcXHUwMUE1ISEgJSpcXHUxMUVEIFxcXCIhLlxcdTAxQTZcXFwiXFxcIjJcXHUwMUE2M1xcdTAxQTcrJyA0ITZcXHUwMUE4ISEgJSpcXHUxMUQ1IFxcXCIhLlxcdTAxQTlcXFwiXFxcIjJcXHUwMUE5M1xcdTAxQUErJyA0ITZcXHUwMUFCISEgJSpcXHUxMUJEIFxcXCIhLlxcdTAxQUNcXFwiXFxcIjJcXHUwMUFDM1xcdTAxQUQrJyA0ITZcXHUwMUFFISEgJSpcXHUxMUE1IFxcXCIhLlxcdTAxQUZcXFwiXFxcIjJcXHUwMUFGM1xcdTAxQjArJyA0ITZcXHUwMUIxISEgJSpcXHUxMThEIFxcXCIhLlxcdTAxQjJcXFwiXFxcIjJcXHUwMUIyM1xcdTAxQjMrJyA0ITZcXHUwMUI0ISEgJSpcXHUxMTc1IFxcXCIhLlxcdTAxQjVcXFwiXFxcIjJcXHUwMUI1M1xcdTAxQjYrJyA0ITZcXHUwMUI3ISEgJSpcXHUxMTVEIFxcXCIhLlxcdTAxQjhcXFwiXFxcIjJcXHUwMUI4M1xcdTAxQjkrJyA0ITZcXHUwMUJBISEgJSpcXHUxMTQ1IFxcXCIhLlxcdTAxQkJcXFwiXFxcIjJcXHUwMUJCM1xcdTAxQkMrJyA0ITZcXHUwMUJEISEgJSpcXHUxMTJEIFxcXCIhLlxcdTAxQkVcXFwiXFxcIjJcXHUwMUJFM1xcdTAxQkYrJyA0ITZcXHUwMUMwISEgJSpcXHUxMTE1IFxcXCIhLlxcdTAxQzFcXFwiXFxcIjJcXHUwMUMxM1xcdTAxQzIrJyA0ITZcXHUwMUMzISEgJSpcXHUxMEZEIFxcXCIhLlxcdTAxQzRcXFwiXFxcIjJcXHUwMUM0M1xcdTAxQzUrJyA0ITZcXHUwMUM2ISEgJSpcXHUxMEU1IFxcXCIhLlxcdTAxQzdcXFwiXFxcIjJcXHUwMUM3M1xcdTAxQzgrJyA0ITZcXHUwMUM5ISEgJSpcXHUxMENEIFxcXCIhLlxcdTAxQ0FcXFwiXFxcIjJcXHUwMUNBM1xcdTAxQ0IrJyA0ITZcXHUwMUNDISEgJSpcXHUxMEI1IFxcXCIhLlxcdTAxQ0RcXFwiXFxcIjJcXHUwMUNEM1xcdTAxQ0UrJyA0ITZcXHUwMUNGISEgJSpcXHUxMDlEIFxcXCIhLlxcdTAxRDBcXFwiXFxcIjJcXHUwMUQwM1xcdTAxRDErJyA0ITZcXHUwMUQyISEgJSpcXHUxMDg1IFxcXCIhLlxcdTAxRDNcXFwiXFxcIjJcXHUwMUQzM1xcdTAxRDQrJyA0ITZcXHUwMUQ1ISEgJSpcXHUxMDZEIFxcXCIhLlxcdTAxRDZcXFwiXFxcIjJcXHUwMUQ2M1xcdTAxRDcrJyA0ITZcXHUwMUQ4ISEgJSpcXHUxMDU1IFxcXCIhLlxcdTAxRDlcXFwiXFxcIjJcXHUwMUQ5M1xcdTAxREErJyA0ITZcXHUwMURCISEgJSpcXHUxMDNEIFxcXCIhLlxcdTAxRENcXFwiXFxcIjJcXHUwMURDM1xcdTAxREQrJyA0ITZcXHUwMURFISEgJSpcXHUxMDI1IFxcXCIhLlxcdTAxREZcXFwiXFxcIjJcXHUwMURGM1xcdTAxRTArJyA0ITZcXHUwMUUxISEgJSpcXHUxMDBEIFxcXCIhLlxcdTAxRTJcXFwiXFxcIjJcXHUwMUUyM1xcdTAxRTMrJyA0ITZcXHUwMUU0ISEgJSpcXHUwRkY1IFxcXCIhLlxcdTAxRTVcXFwiXFxcIjJcXHUwMUU1M1xcdTAxRTYrJyA0ITZcXHUwMUU3ISEgJSpcXHUwRkREIFxcXCIhLlxcdTAxRThcXFwiXFxcIjJcXHUwMUU4M1xcdTAxRTkrJyA0ITZcXHUwMUVBISEgJSpcXHUwRkM1IFxcXCIhLlxcdTAxRUJcXFwiXFxcIjJcXHUwMUVCM1xcdTAxRUMrJyA0ITZcXHUwMUVEISEgJSpcXHUwRkFEIFxcXCIhLlxcdTAxRUVcXFwiXFxcIjJcXHUwMUVFM1xcdTAxRUYrJyA0ITZcXHUwMUYwISEgJSpcXHUwRjk1IFxcXCIhLlxcdTAxRjFcXFwiXFxcIjJcXHUwMUYxM1xcdTAxRjIrJyA0ITZcXHUwMUYzISEgJSpcXHUwRjdEIFxcXCIhLlxcdTAxRjRcXFwiXFxcIjJcXHUwMUY0M1xcdTAxRjUrJyA0ITZcXHUwMUY2ISEgJSpcXHUwRjY1IFxcXCIhLlxcdTAxRjdcXFwiXFxcIjJcXHUwMUY3M1xcdTAxRjgrJyA0ITZcXHUwMUY5ISEgJSpcXHUwRjREIFxcXCIhLlxcdTAxRkFcXFwiXFxcIjJcXHUwMUZBM1xcdTAxRkIrJyA0ITZcXHUwMUZDISEgJSpcXHUwRjM1IFxcXCIhLlxcdTAxRkRcXFwiXFxcIjJcXHUwMUZEM1xcdTAxRkUrJyA0ITZcXHUwMUZGISEgJSpcXHUwRjFEIFxcXCIhLlxcdTAyMDBcXFwiXFxcIjJcXHUwMjAwM1xcdTAyMDErJyA0ITZcXHUwMjAyISEgJSpcXHUwRjA1IFxcXCIhLlxcdTAyMDNcXFwiXFxcIjJcXHUwMjAzM1xcdTAyMDQrJyA0ITZcXHUwMjA1ISEgJSpcXHUwRUVEIFxcXCIhLlxcdTAyMDZcXFwiXFxcIjJcXHUwMjA2M1xcdTAyMDcrJyA0ITZcXHUwMjA4ISEgJSpcXHUwRUQ1IFxcXCIhLlxcdTAyMDlcXFwiXFxcIjJcXHUwMjA5M1xcdTAyMEErJyA0ITZcXHUwMjBCISEgJSpcXHUwRUJEIFxcXCIhLlxcdTAyMENcXFwiXFxcIjJcXHUwMjBDM1xcdTAyMEQrJyA0ITZcXHUwMjBFISEgJSpcXHUwRUE1IFxcXCIhLlxcdTAyMEZcXFwiXFxcIjJcXHUwMjBGM1xcdTAyMTArJyA0ITZcXHUwMjExISEgJSpcXHUwRThEIFxcXCIhLlxcdTAyMTJcXFwiXFxcIjJcXHUwMjEyM1xcdTAyMTMrJyA0ITZcXHUwMjE0ISEgJSpcXHUwRTc1IFxcXCIhLlxcdTAyMTVcXFwiXFxcIjJcXHUwMjE1M1xcdTAyMTYrJyA0ITZcXHUwMjE3ISEgJSpcXHUwRTVEIFxcXCIhLlxcdTAyMThcXFwiXFxcIjJcXHUwMjE4M1xcdTAyMTkrJyA0ITZcXHUwMjFBISEgJSpcXHUwRTQ1IFxcXCIhLlxcdTAyMUJcXFwiXFxcIjJcXHUwMjFCM1xcdTAyMUMrJyA0ITZcXHUwMjFEISEgJSpcXHUwRTJEIFxcXCIhLlxcdTAyMUVcXFwiXFxcIjJcXHUwMjFFM1xcdTAyMUYrJyA0ITZcXHUwMjIwISEgJSpcXHUwRTE1IFxcXCIhLlxcdTAyMjFcXFwiXFxcIjJcXHUwMjIxM1xcdTAyMjIrJyA0ITZcXHUwMjIzISEgJSpcXHUwREZEIFxcXCIhLlxcdTAyMjRcXFwiXFxcIjJcXHUwMjI0M1xcdTAyMjUrJyA0ITZcXHUwMjI2ISEgJSpcXHUwREU1IFxcXCIhLlxcdTAyMjdcXFwiXFxcIjJcXHUwMjI3M1xcdTAyMjgrJyA0ITZcXHUwMjI5ISEgJSpcXHUwRENEIFxcXCIhLlxcdTAyMkFcXFwiXFxcIjJcXHUwMjJBM1xcdTAyMkIrJyA0ITZcXHUwMjJDISEgJSpcXHUwREI1IFxcXCIhLlxcdTAyMkRcXFwiXFxcIjJcXHUwMjJEM1xcdTAyMkUrJyA0ITZcXHUwMjJGISEgJSpcXHUwRDlEIFxcXCIhLlxcdTAyMzBcXFwiXFxcIjJcXHUwMjMwM1xcdTAyMzErJyA0ITZcXHUwMjMyISEgJSpcXHUwRDg1IFxcXCIhLlxcdTAyMzNcXFwiXFxcIjJcXHUwMjMzM1xcdTAyMzQrJyA0ITZcXHUwMjM1ISEgJSpcXHUwRDZEIFxcXCIhLlxcdTAyMzZcXFwiXFxcIjJcXHUwMjM2M1xcdTAyMzcrJyA0ITZcXHUwMjM4ISEgJSpcXHUwRDU1IFxcXCIhLlxcdTAyMzlcXFwiXFxcIjJcXHUwMjM5M1xcdTAyM0ErJyA0ITZcXHUwMjNCISEgJSpcXHUwRDNEIFxcXCIhLlxcdTAyM0NcXFwiXFxcIjJcXHUwMjNDM1xcdTAyM0QrJyA0ITZcXHUwMjNFISEgJSpcXHUwRDI1IFxcXCIhLlxcdTAyM0ZcXFwiXFxcIjJcXHUwMjNGM1xcdTAyNDArJyA0ITZcXHUwMjQxISEgJSpcXHUwRDBEIFxcXCIhLlxcdTAyNDJcXFwiXFxcIjJcXHUwMjQyM1xcdTAyNDMrJyA0ITZcXHUwMjQ0ISEgJSpcXHUwQ0Y1IFxcXCIhLlxcdTAyNDVcXFwiXFxcIjJcXHUwMjQ1M1xcdTAyNDYrJyA0ITZcXHUwMjQ3ISEgJSpcXHUwQ0REIFxcXCIhLlxcdTAyNDhcXFwiXFxcIjJcXHUwMjQ4M1xcdTAyNDkrJyA0ITZcXHUwMjRBISEgJSpcXHUwQ0M1IFxcXCIhLlxcdTAyNEJcXFwiXFxcIjJcXHUwMjRCM1xcdTAyNEMrJyA0ITZcXHUwMjREISEgJSpcXHUwQ0FEIFxcXCIhLlxcdTAyNEVcXFwiXFxcIjJcXHUwMjRFM1xcdTAyNEYrJyA0ITZcXHUwMjUwISEgJSpcXHUwQzk1IFxcXCIhLlxcdTAyNTFcXFwiXFxcIjJcXHUwMjUxM1xcdTAyNTIrJyA0ITZcXHUwMjUzISEgJSpcXHUwQzdEIFxcXCIhLlxcdTAyNTRcXFwiXFxcIjJcXHUwMjU0M1xcdTAyNTUrJyA0ITZcXHUwMjU2ISEgJSpcXHUwQzY1IFxcXCIhLlxcdTAyNTdcXFwiXFxcIjJcXHUwMjU3M1xcdTAyNTgrJyA0ITZcXHUwMjU5ISEgJSpcXHUwQzREIFxcXCIhLlxcdTAyNUFcXFwiXFxcIjJcXHUwMjVBM1xcdTAyNUIrJyA0ITZcXHUwMjVDISEgJSpcXHUwQzM1IFxcXCIhLlxcdTAyNURcXFwiXFxcIjJcXHUwMjVEM1xcdTAyNUUrJyA0ITZcXHUwMjVGISEgJSpcXHUwQzFEIFxcXCIhLlxcdTAyNjBcXFwiXFxcIjJcXHUwMjYwM1xcdTAyNjErJyA0ITZcXHUwMjYyISEgJSpcXHUwQzA1IFxcXCIhLlxcdTAyNjNcXFwiXFxcIjJcXHUwMjYzM1xcdTAyNjQrJyA0ITZcXHUwMjY1ISEgJSpcXHUwQkVEIFxcXCIhLlxcdTAyNjZcXFwiXFxcIjJcXHUwMjY2M1xcdTAyNjcrJyA0ITZcXHUwMjY4ISEgJSpcXHUwQkQ1IFxcXCIhLlxcdTAyNjlcXFwiXFxcIjJcXHUwMjY5M1xcdTAyNkErJyA0ITZcXHUwMjZCISEgJSpcXHUwQkJEIFxcXCIhLlxcdTAyNkNcXFwiXFxcIjJcXHUwMjZDM1xcdTAyNkQrJyA0ITZcXHUwMjZFISEgJSpcXHUwQkE1IFxcXCIhLlxcdTAyNkZcXFwiXFxcIjJcXHUwMjZGM1xcdTAyNzArJyA0ITZcXHUwMjcxISEgJSpcXHUwQjhEIFxcXCIhLlxcdTAyNzJcXFwiXFxcIjJcXHUwMjcyM1xcdTAyNzMrJyA0ITZcXHUwMjc0ISEgJSpcXHUwQjc1IFxcXCIhLlxcdTAyNzVcXFwiXFxcIjJcXHUwMjc1M1xcdTAyNzYrJyA0ITZcXHUwMjc3ISEgJSpcXHUwQjVEIFxcXCIhLlxcdTAyNzhcXFwiXFxcIjJcXHUwMjc4M1xcdTAyNzkrJyA0ITZcXHUwMjdBISEgJSpcXHUwQjQ1IFxcXCIhLlxcdTAyN0JcXFwiXFxcIjJcXHUwMjdCM1xcdTAyN0MrJyA0ITZcXHUwMjdEISEgJSpcXHUwQjJEIFxcXCIhLlxcdTAyN0VcXFwiXFxcIjJcXHUwMjdFM1xcdTAyN0YrJyA0ITZcXHUwMjgwISEgJSpcXHUwQjE1IFxcXCIhLlxcdTAyODFcXFwiXFxcIjJcXHUwMjgxM1xcdTAyODIrJyA0ITZcXHUwMjgzISEgJSpcXHUwQUZEIFxcXCIhLlxcdTAyODRcXFwiXFxcIjJcXHUwMjg0M1xcdTAyODUrJyA0ITZcXHUwMjg2ISEgJSpcXHUwQUU1IFxcXCIhLlxcdTAyODdcXFwiXFxcIjJcXHUwMjg3M1xcdTAyODgrJyA0ITZcXHUwMjg5ISEgJSpcXHUwQUNEIFxcXCIhLlxcdTAyOEFcXFwiXFxcIjJcXHUwMjhBM1xcdTAyOEIrJyA0ITZcXHUwMjhDISEgJSpcXHUwQUI1IFxcXCIhLlxcdTAyOERcXFwiXFxcIjJcXHUwMjhEM1xcdTAyOEUrJyA0ITZcXHUwMjhGISEgJSpcXHUwQTlEIFxcXCIhLlxcdTAyOTBcXFwiXFxcIjJcXHUwMjkwM1xcdTAyOTErJyA0ITZcXHUwMjkyISEgJSpcXHUwQTg1IFxcXCIhLlxcdTAyOTNcXFwiXFxcIjJcXHUwMjkzM1xcdTAyOTQrJyA0ITZcXHUwMjk1ISEgJSpcXHUwQTZEIFxcXCIhLlxcdTAyOTZcXFwiXFxcIjJcXHUwMjk2M1xcdTAyOTcrJyA0ITZcXHUwMjk4ISEgJSpcXHUwQTU1IFxcXCIhLlxcdTAyOTlcXFwiXFxcIjJcXHUwMjk5M1xcdTAyOUErJyA0ITZcXHUwMjlCISEgJSpcXHUwQTNEIFxcXCIhLlxcdTAyOUNcXFwiXFxcIjJcXHUwMjlDM1xcdTAyOUQrJyA0ITZcXHUwMjlFISEgJSpcXHUwQTI1IFxcXCIhLlxcdTAyOUZcXFwiXFxcIjJcXHUwMjlGM1xcdTAyQTArJyA0ITZcXHUwMkExISEgJSpcXHUwQTBEIFxcXCIhLlxcdTAyQTJcXFwiXFxcIjJcXHUwMkEyM1xcdTAyQTMrJyA0ITZcXHUwMkE0ISEgJSpcXHUwOUY1IFxcXCIhLlxcdTAyQTVcXFwiXFxcIjJcXHUwMkE1M1xcdTAyQTYrJyA0ITZcXHUwMkE3ISEgJSpcXHUwOUREIFxcXCIhLlxcdTAyQThcXFwiXFxcIjJcXHUwMkE4M1xcdTAyQTkrJyA0ITZcXHUwMkFBISEgJSpcXHUwOUM1IFxcXCIhLlxcdTAyQUJcXFwiXFxcIjJcXHUwMkFCM1xcdTAyQUMrJyA0ITZcXHUwMkFEISEgJSpcXHUwOUFEIFxcXCIhLlxcdTAyQUVcXFwiXFxcIjJcXHUwMkFFM1xcdTAyQUYrJyA0ITZcXHUwMkIwISEgJSpcXHUwOTk1IFxcXCIhLlxcdTAyQjFcXFwiXFxcIjJcXHUwMkIxM1xcdTAyQjIrJyA0ITZcXHUwMkIzISEgJSpcXHUwOTdEIFxcXCIhLlxcdTAyQjRcXFwiXFxcIjJcXHUwMkI0M1xcdTAyQjUrJyA0ITZcXHUwMkI2ISEgJSpcXHUwOTY1IFxcXCIhLlxcdTAyQjdcXFwiXFxcIjJcXHUwMkI3M1xcdTAyQjgrJyA0ITZcXHUwMkI5ISEgJSpcXHUwOTREIFxcXCIhLlxcdTAyQkFcXFwiXFxcIjJcXHUwMkJBM1xcdTAyQkIrJyA0ITZcXHUwMkJDISEgJSpcXHUwOTM1IFxcXCIhLlxcdTAyQkRcXFwiXFxcIjJcXHUwMkJEM1xcdTAyQkUrJyA0ITZcXHUwMkJGISEgJSpcXHUwOTFEIFxcXCIhLlxcdTAyQzBcXFwiXFxcIjJcXHUwMkMwM1xcdTAyQzErJyA0ITZcXHUwMkMyISEgJSpcXHUwOTA1IFxcXCIhLlxcdTAyQzNcXFwiXFxcIjJcXHUwMkMzM1xcdTAyQzQrJyA0ITZcXHUwMkM1ISEgJSpcXHUwOEVEIFxcXCIhLlxcdTAyQzZcXFwiXFxcIjJcXHUwMkM2M1xcdTAyQzcrJyA0ITZcXHUwMkM4ISEgJSpcXHUwOEQ1IFxcXCIhLlxcdTAyQzlcXFwiXFxcIjJcXHUwMkM5M1xcdTAyQ0ErJyA0ITZcXHUwMkNCISEgJSpcXHUwOEJEIFxcXCIhLlxcdTAyQ0NcXFwiXFxcIjJcXHUwMkNDM1xcdTAyQ0QrJyA0ITZcXHUwMkNFISEgJSpcXHUwOEE1IFxcXCIhLlxcdTAyQ0ZcXFwiXFxcIjJcXHUwMkNGM1xcdTAyRDArJyA0ITZcXHUwMkQxISEgJSpcXHUwODhEIFxcXCIhLlxcdTAyRDJcXFwiXFxcIjJcXHUwMkQyM1xcdTAyRDMrJyA0ITZcXHUwMkQ0ISEgJSpcXHUwODc1IFxcXCIhLlxcdTAyRDVcXFwiXFxcIjJcXHUwMkQ1M1xcdTAyRDYrJyA0ITZcXHUwMkQ3ISEgJSpcXHUwODVEIFxcXCIhLlxcdTAyRDhcXFwiXFxcIjJcXHUwMkQ4M1xcdTAyRDkrJyA0ITZcXHUwMkRBISEgJSpcXHUwODQ1IFxcXCIhLlxcdTAyREJcXFwiXFxcIjJcXHUwMkRCM1xcdTAyREMrJyA0ITZcXHUwMkREISEgJSpcXHUwODJEIFxcXCIhLlxcdTAyREVcXFwiXFxcIjJcXHUwMkRFM1xcdTAyREYrJyA0ITZcXHUwMkUwISEgJSpcXHUwODE1IFxcXCIhLlxcdTAyRTFcXFwiXFxcIjJcXHUwMkUxM1xcdTAyRTIrJyA0ITZcXHUwMkUzISEgJSpcXHUwN0ZEIFxcXCIhLlxcdTAyRTRcXFwiXFxcIjJcXHUwMkU0M1xcdTAyRTUrJyA0ITZcXHUwMkU2ISEgJSpcXHUwN0U1IFxcXCIhLlxcdTAyRTdcXFwiXFxcIjJcXHUwMkU3M1xcdTAyRTgrJyA0ITZcXHUwMkU5ISEgJSpcXHUwN0NEIFxcXCIhLlxcdTAyRUFcXFwiXFxcIjJcXHUwMkVBM1xcdTAyRUIrJyA0ITZcXHUwMkVDISEgJSpcXHUwN0I1IFxcXCIhLlxcdTAyRURcXFwiXFxcIjJcXHUwMkVEM1xcdTAyRUUrJyA0ITZcXHUwMkVGISEgJSpcXHUwNzlEIFxcXCIhLlxcdTAyRjBcXFwiXFxcIjJcXHUwMkYwM1xcdTAyRjErJyA0ITZcXHUwMkYyISEgJSpcXHUwNzg1IFxcXCIhLlxcdTAyRjNcXFwiXFxcIjJcXHUwMkYzM1xcdTAyRjQrJyA0ITZcXHUwMkY1ISEgJSpcXHUwNzZEIFxcXCIhLlxcdTAyRjZcXFwiXFxcIjJcXHUwMkY2M1xcdTAyRjcrJyA0ITZcXHUwMkY4ISEgJSpcXHUwNzU1IFxcXCIhLlxcdTAyRjlcXFwiXFxcIjJcXHUwMkY5M1xcdTAyRkErJyA0ITZcXHUwMkZCISEgJSpcXHUwNzNEIFxcXCIhLlxcdTAyRkNcXFwiXFxcIjJcXHUwMkZDM1xcdTAyRkQrJyA0ITZcXHUwMkZFISEgJSpcXHUwNzI1IFxcXCIhLlxcdTAyRkZcXFwiXFxcIjJcXHUwMkZGM1xcdTAzMDArJyA0ITZcXHUwMzAxISEgJSpcXHUwNzBEIFxcXCIhLlxcdTAzMDJcXFwiXFxcIjJcXHUwMzAyM1xcdTAzMDMrJyA0ITZcXHUwMzA0ISEgJSpcXHUwNkY1IFxcXCIhLlxcdTAzMDVcXFwiXFxcIjJcXHUwMzA1M1xcdTAzMDYrJyA0ITZcXHUwMzA3ISEgJSpcXHUwNkREIFxcXCIhLlxcdTAzMDhcXFwiXFxcIjJcXHUwMzA4M1xcdTAzMDkrJyA0ITZcXHUwMzBBISEgJSpcXHUwNkM1IFxcXCIhLlxcdTAzMEJcXFwiXFxcIjJcXHUwMzBCM1xcdTAzMEMrJyA0ITZcXHUwMzBEISEgJSpcXHUwNkFEIFxcXCIhLlxcdTAzMEVcXFwiXFxcIjJcXHUwMzBFM1xcdTAzMEYrJyA0ITZcXHUwMzEwISEgJSpcXHUwNjk1IFxcXCIhLlxcdTAzMTFcXFwiXFxcIjJcXHUwMzExM1xcdTAzMTIrJyA0ITZcXHUwMzEzISEgJSpcXHUwNjdEIFxcXCIhLlxcdTAzMTRcXFwiXFxcIjJcXHUwMzE0M1xcdTAzMTUrJyA0ITZcXHUwMzE2ISEgJSpcXHUwNjY1IFxcXCIhLlxcdTAzMTdcXFwiXFxcIjJcXHUwMzE3M1xcdTAzMTgrJyA0ITZcXHUwMzE5ISEgJSpcXHUwNjREIFxcXCIhLlxcdTAzMUFcXFwiXFxcIjJcXHUwMzFBM1xcdTAzMUIrJyA0ITZcXHUwMzFDISEgJSpcXHUwNjM1IFxcXCIhLlxcdTAzMURcXFwiXFxcIjJcXHUwMzFEM1xcdTAzMUUrJyA0ITZcXHUwMzFGISEgJSpcXHUwNjFEIFxcXCIhLlxcdTAzMjBcXFwiXFxcIjJcXHUwMzIwM1xcdTAzMjErJyA0ITZcXHUwMzIyISEgJSpcXHUwNjA1IFxcXCIhLlxcdTAzMjNcXFwiXFxcIjJcXHUwMzIzM1xcdTAzMjQrJyA0ITZcXHUwMzI1ISEgJSpcXHUwNUVEIFxcXCIhLlxcdTAzMjZcXFwiXFxcIjJcXHUwMzI2M1xcdTAzMjcrJyA0ITZcXHUwMzI4ISEgJSpcXHUwNUQ1IFxcXCIhLlxcdTAzMjlcXFwiXFxcIjJcXHUwMzI5M1xcdTAzMkErJyA0ITZcXHUwMzJCISEgJSpcXHUwNUJEIFxcXCIhLlxcdTAzMkNcXFwiXFxcIjJcXHUwMzJDM1xcdTAzMkQrJyA0ITZcXHUwMzJFISEgJSpcXHUwNUE1IFxcXCIhLlxcdTAzMkZcXFwiXFxcIjJcXHUwMzJGM1xcdTAzMzArJyA0ITZcXHUwMzMxISEgJSpcXHUwNThEIFxcXCIhLlxcdTAzMzJcXFwiXFxcIjJcXHUwMzMyM1xcdTAzMzMrJyA0ITZcXHUwMzM0ISEgJSpcXHUwNTc1IFxcXCIhLlxcdTAzMzVcXFwiXFxcIjJcXHUwMzM1M1xcdTAzMzYrJyA0ITZcXHUwMzM3ISEgJSpcXHUwNTVEIFxcXCIhLlxcdTAzMzhcXFwiXFxcIjJcXHUwMzM4M1xcdTAzMzkrJyA0ITZcXHUwMzNBISEgJSpcXHUwNTQ1IFxcXCIhLlxcdTAzM0JcXFwiXFxcIjJcXHUwMzNCM1xcdTAzM0MrJyA0ITZcXHUwMzNEISEgJSpcXHUwNTJEIFxcXCIhLlxcdTAzM0VcXFwiXFxcIjJcXHUwMzNFM1xcdTAzM0YrJyA0ITZcXHUwMzQwISEgJSpcXHUwNTE1IFxcXCIhLlxcdTAzNDFcXFwiXFxcIjJcXHUwMzQxM1xcdTAzNDIrJyA0ITZcXHUwMzQzISEgJSpcXHUwNEZEIFxcXCIhLlxcdTAzNDRcXFwiXFxcIjJcXHUwMzQ0M1xcdTAzNDUrJyA0ITZcXHUwMzQ2ISEgJSpcXHUwNEU1IFxcXCIhLlxcdTAzNDdcXFwiXFxcIjJcXHUwMzQ3M1xcdTAzNDgrJyA0ITZcXHUwMzQ5ISEgJSpcXHUwNENEIFxcXCIhLlxcdTAzNEFcXFwiXFxcIjJcXHUwMzRBM1xcdTAzNEIrJyA0ITZcXHUwMzRDISEgJSpcXHUwNEI1IFxcXCIhLlxcdTAzNERcXFwiXFxcIjJcXHUwMzREM1xcdTAzNEUrJyA0ITZcXHUwMzRGISEgJSpcXHUwNDlEIFxcXCIhLlxcdTAzNTBcXFwiXFxcIjJcXHUwMzUwM1xcdTAzNTErJyA0ITZcXHUwMzUyISEgJSpcXHUwNDg1IFxcXCIhLlxcdTAzNTNcXFwiXFxcIjJcXHUwMzUzM1xcdTAzNTQrJyA0ITZcXHUwMzU1ISEgJSpcXHUwNDZEIFxcXCIhLlxcdTAzNTZcXFwiXFxcIjJcXHUwMzU2M1xcdTAzNTcrJyA0ITZcXHUwMzU4ISEgJSpcXHUwNDU1IFxcXCIhLlxcdTAzNTlcXFwiXFxcIjJcXHUwMzU5M1xcdTAzNUErJyA0ITZcXHUwMzVCISEgJSpcXHUwNDNEIFxcXCIhLlxcdTAzNUNcXFwiXFxcIjJcXHUwMzVDM1xcdTAzNUQrJyA0ITZcXHUwMzVFISEgJSpcXHUwNDI1IFxcXCIhLlxcdTAzNUZcXFwiXFxcIjJcXHUwMzVGM1xcdTAzNjArJyA0ITZcXHUwMzYxISEgJSpcXHUwNDBEIFxcXCIhLlxcdTAzNjJcXFwiXFxcIjJcXHUwMzYyM1xcdTAzNjMrJyA0ITZcXHUwMzY0ISEgJSpcXHUwM0Y1IFxcXCIhLlxcdTAzNjVcXFwiXFxcIjJcXHUwMzY1M1xcdTAzNjYrJyA0ITZcXHUwMzY3ISEgJSpcXHUwM0REIFxcXCIhLlxcdTAzNjhcXFwiXFxcIjJcXHUwMzY4M1xcdTAzNjkrJyA0ITZcXHUwMzZBISEgJSpcXHUwM0M1IFxcXCIhLlxcdTAzNkJcXFwiXFxcIjJcXHUwMzZCM1xcdTAzNkMrJyA0ITZcXHUwMzZEISEgJSpcXHUwM0FEIFxcXCIhLlxcdTAzNkVcXFwiXFxcIjJcXHUwMzZFM1xcdTAzNkYrJyA0ITZcXHUwMzcwISEgJSpcXHUwMzk1IFxcXCIhLlxcdTAzNzFcXFwiXFxcIjJcXHUwMzcxM1xcdTAzNzIrJyA0ITZcXHUwMzczISEgJSpcXHUwMzdEIFxcXCIhLlxcdTAzNzRcXFwiXFxcIjJcXHUwMzc0M1xcdTAzNzUrJyA0ITZcXHUwMzc2ISEgJSpcXHUwMzY1IFxcXCIhLlxcdTAzNzdcXFwiXFxcIjJcXHUwMzc3M1xcdTAzNzgrJyA0ITZcXHUwMzc5ISEgJSpcXHUwMzREIFxcXCIhLlxcdTAzN0FcXFwiXFxcIjJcXHUwMzdBM1xcdTAzN0IrJyA0ITZcXHUwMzdDISEgJSpcXHUwMzM1IFxcXCIhLlxcdTAzN0RcXFwiXFxcIjJcXHUwMzdEM1xcdTAzN0UrJyA0ITZcXHUwMzdGISEgJSpcXHUwMzFEIFxcXCIhLlxcdTAzODBcXFwiXFxcIjJcXHUwMzgwM1xcdTAzODErJyA0ITZcXHUwMzgyISEgJSpcXHUwMzA1IFxcXCIhLlxcdTAzODNcXFwiXFxcIjJcXHUwMzgzM1xcdTAzODQrJyA0ITZcXHUwMzg1ISEgJSpcXHUwMkVEIFxcXCIhLlxcdTAzODZcXFwiXFxcIjJcXHUwMzg2M1xcdTAzODcrJyA0ITZcXHUwMzg4ISEgJSpcXHUwMkQ1IFxcXCIhLlxcdTAzODlcXFwiXFxcIjJcXHUwMzg5M1xcdTAzOEErJyA0ITZcXHUwMzhCISEgJSpcXHUwMkJEIFxcXCIhLlxcdTAzOENcXFwiXFxcIjJcXHUwMzhDM1xcdTAzOEQrJyA0ITZcXHUwMzhFISEgJSpcXHUwMkE1IFxcXCIhLlxcdTAzOEZcXFwiXFxcIjJcXHUwMzhGM1xcdTAzOTArJyA0ITZcXHUwMzkxISEgJSpcXHUwMjhEIFxcXCIhLlxcdTAzOTJcXFwiXFxcIjJcXHUwMzkyM1xcdTAzOTMrJyA0ITZcXHUwMzk0ISEgJSpcXHUwMjc1IFxcXCIhLlxcdTAzOTVcXFwiXFxcIjJcXHUwMzk1M1xcdTAzOTYrJyA0ITZcXHUwMzk3ISEgJSpcXHUwMjVEIFxcXCIhLlxcdTAzOThcXFwiXFxcIjJcXHUwMzk4M1xcdTAzOTkrJyA0ITZcXHUwMzlBISEgJSpcXHUwMjQ1IFxcXCIhLlxcdTAzOUJcXFwiXFxcIjJcXHUwMzlCM1xcdTAzOUMrJyA0ITZcXHUwMzlEISEgJSpcXHUwMjJEIFxcXCIhLlxcdTAzOUVcXFwiXFxcIjJcXHUwMzlFM1xcdTAzOUYrJyA0ITZcXHUwM0EwISEgJSpcXHUwMjE1IFxcXCIhLlxcdTAzQTFcXFwiXFxcIjJcXHUwM0ExM1xcdTAzQTIrJyA0ITZcXHUwM0EzISEgJSpcXHUwMUZEIFxcXCIhLlxcdTAzQTRcXFwiXFxcIjJcXHUwM0E0M1xcdTAzQTUrJyA0ITZcXHUwM0E2ISEgJSpcXHUwMUU1IFxcXCIhLlxcdTAzQTdcXFwiXFxcIjJcXHUwM0E3M1xcdTAzQTgrJyA0ITZcXHUwM0E5ISEgJSpcXHUwMUNEIFxcXCIhLlxcdTAzQUFcXFwiXFxcIjJcXHUwM0FBM1xcdTAzQUIrJyA0ITZcXHUwM0FDISEgJSpcXHUwMUI1IFxcXCIhLlxcdTAzQURcXFwiXFxcIjJcXHUwM0FEM1xcdTAzQUUrJyA0ITZcXHUwM0FGISEgJSpcXHUwMTlEIFxcXCIhLlxcdTAzQjBcXFwiXFxcIjJcXHUwM0IwM1xcdTAzQjErJyA0ITZcXHUwM0IyISEgJSpcXHUwMTg1IFxcXCIhLlxcdTAzQjNcXFwiXFxcIjJcXHUwM0IzM1xcdTAzQjQrJyA0ITZcXHUwM0I1ISEgJSpcXHUwMTZEIFxcXCIhLlxcdTAzQjZcXFwiXFxcIjJcXHUwM0I2M1xcdTAzQjcrJyA0ITZcXHUwM0I4ISEgJSpcXHUwMTU1IFxcXCIhLlxcdTAzQjlcXFwiXFxcIjJcXHUwM0I5M1xcdTAzQkErJyA0ITZcXHUwM0JCISEgJSpcXHUwMTNEIFxcXCIhLlxcdTAzQkNcXFwiXFxcIjJcXHUwM0JDM1xcdTAzQkQrJyA0ITZcXHUwM0JFISEgJSpcXHUwMTI1IFxcXCIhLlxcdTAzQkZcXFwiXFxcIjJcXHUwM0JGM1xcdTAzQzArJyA0ITZcXHUwM0MxISEgJSpcXHUwMTBEIFxcXCIhLlxcdTAzQzJcXFwiXFxcIjJcXHUwM0MyM1xcdTAzQzMrJyA0ITZcXHUwM0M0ISEgJSpcXHhGNSBcXFwiIS5cXHUwM0M1XFxcIlxcXCIyXFx1MDNDNTNcXHUwM0M2KycgNCE2XFx1MDNDNyEhICUqXFx4REQgXFxcIiEuXFx1MDNDOFxcXCJcXFwiMlxcdTAzQzgzXFx1MDNDOSsnIDQhNlxcdTAzQ0EhISAlKlxceEM1IFxcXCIhLlxcdTAzQ0JcXFwiXFxcIjJcXHUwM0NCM1xcdTAzQ0MrJyA0ITZcXHUwM0NEISEgJSpcXHhBRCBcXFwiIS5cXHUwM0NFXFxcIlxcXCIyXFx1MDNDRTNcXHUwM0NGKycgNCE2XFx1MDNEMCEhICUqXFx4OTUgXFxcIiEuXFx1MDNEMVxcXCJcXFwiMlxcdTAzRDEzXFx1MDNEMisnIDQhNlxcdTAzRDMhISAlKn0gXFxcIiEuXFx1MDNENFxcXCJcXFwiMlxcdTAzRDQzXFx1MDNENSsnIDQhNlxcdTAzRDYhISAlKmUgXFxcIiEuXFx1MDNEN1xcXCJcXFwiMlxcdTAzRDczXFx1MDNEOCsnIDQhNlxcdTAzRDkhISAlKk0gXFxcIiEuXFx1MDNEQVxcXCJcXFwiMlxcdTAzREEzXFx1MDNEQisnIDQhNlxcdTAzREMhISAlKjUgXFxcIiEuXFx1MDNERFxcXCJcXFwiMlxcdTAzREQzXFx1MDNERSsnIDQhNlxcdTAzREYhISAlXCIpLFxuICAgICAgICAgIHBlZyRkZWNvZGUoXCIuXFx1MDNFMFxcXCJcXFwiMlxcdTAzRTAzXFx1MDNFMSpcXHUwMTMxIFxcXCIuXFx1MDNFMlxcXCJcXFwiMlxcdTAzRTIzXFx1MDNFMypcXHUwMTI1IFxcXCIuXFx1MDNFNFxcXCJcXFwiMlxcdTAzRTQzXFx1MDNFNSpcXHUwMTE5IFxcXCIuXFx1MDM5MlxcXCJcXFwiMlxcdTAzOTIzXFx1MDM5MypcXHUwMTBEIFxcXCIuXFx1MDM5RVxcXCJcXFwiMlxcdTAzOUUzXFx1MDM5RipcXHUwMTAxIFxcXCIuXFx1MDM5NVxcXCJcXFwiMlxcdTAzOTUzXFx1MDM5NipcXHhGNSBcXFwiLlxcdTAzRTZcXFwiXFxcIjJcXHUwM0U2M1xcdTAzRTcqXFx4RTkgXFxcIi5cXHUwM0U4XFxcIlxcXCIyXFx1MDNFODNcXHUwM0U5KlxceEREIFxcXCIuXFx1MDNEMVxcXCJcXFwiMlxcdTAzRDEzXFx1MDNEMipcXHhEMSBcXFwiLlxcdTAzRUFcXFwiXFxcIjJcXHUwM0VBM1xcdTAzRUIqXFx4QzUgXFxcIi5cXHUwM0Q0XFxcIlxcXCIyXFx1MDNENDNcXHUwM0Q1KlxceEI5IFxcXCIuXFx1MDNFQ1xcXCJcXFwiMlxcdTAzRUMzXFx1MDNFRCpcXHhBRCBcXFwiLlxcdTAzQUFcXFwiXFxcIjJcXHUwM0FBM1xcdTAzQUIqXFx4QTEgXFxcIi5cXHUwMzhGXFxcIlxcXCIyXFx1MDM4RjNcXHUwMzkwKlxceDk1IFxcXCIuXFx1MDNFRVxcXCJcXFwiMlxcdTAzRUUzXFx1MDNFRipcXHg4OSBcXFwiLlxcdTAzRjBcXFwiXFxcIjJcXHUwM0YwM1xcdTAzRjEqfSBcXFwiLlxcdTAzRjJcXFwiXFxcIjJcXHUwM0YyM1xcdTAzRjMqcSBcXFwiLlxcdTAzREFcXFwiXFxcIjJcXHUwM0RBM1xcdTAzREIqZSBcXFwiLlxcdTAzRjRcXFwiXFxcIjJcXHUwM0Y0M1xcdTAzRjUqWSBcXFwiLlxcdTAzRjZcXFwiXFxcIjJcXHUwM0Y2M1xcdTAzRjcqTSBcXFwiLlxcdTAzRjhcXFwiXFxcIjJcXHUwM0Y4M1xcdTAzRjkqQSBcXFwiLlxcdTAzRkFcXFwiXFxcIjJcXHUwM0ZBM1xcdTAzRkIqNSBcXFwiLlxcdTAzRkNcXFwiXFxcIjJcXHUwM0ZDM1xcdTAzRkQqKSBcXFwiLlxcdTAzRkVcXFwiXFxcIjJcXHUwM0ZFM1xcdTAzRkZcIilcbiAgICAgICAgXSxcblxuICAgICAgICBwZWckY3VyclBvcyAgICAgICAgICA9IDAsXG4gICAgICAgIHBlZyRyZXBvcnRlZFBvcyAgICAgID0gMCxcbiAgICAgICAgcGVnJGNhY2hlZFBvcyAgICAgICAgPSAwLFxuICAgICAgICBwZWckY2FjaGVkUG9zRGV0YWlscyA9IHsgbGluZTogMSwgY29sdW1uOiAxLCBzZWVuQ1I6IGZhbHNlIH0sXG4gICAgICAgIHBlZyRtYXhGYWlsUG9zICAgICAgID0gMCxcbiAgICAgICAgcGVnJG1heEZhaWxFeHBlY3RlZCAgPSBbXSxcbiAgICAgICAgcGVnJHNpbGVudEZhaWxzICAgICAgPSAwLFxuXG4gICAgICAgIHBlZyRyZXN1bHQ7XG5cbiAgICBpZiAoXCJzdGFydFJ1bGVcIiBpbiBvcHRpb25zKSB7XG4gICAgICBpZiAoIShvcHRpb25zLnN0YXJ0UnVsZSBpbiBwZWckc3RhcnRSdWxlSW5kaWNlcykpIHtcbiAgICAgICAgdGhyb3cgbmV3IEVycm9yKFwiQ2FuJ3Qgc3RhcnQgcGFyc2luZyBmcm9tIHJ1bGUgXFxcIlwiICsgb3B0aW9ucy5zdGFydFJ1bGUgKyBcIlxcXCIuXCIpO1xuICAgICAgfVxuXG4gICAgICBwZWckc3RhcnRSdWxlSW5kZXggPSBwZWckc3RhcnRSdWxlSW5kaWNlc1tvcHRpb25zLnN0YXJ0UnVsZV07XG4gICAgfVxuXG4gICAgZnVuY3Rpb24gdGV4dCgpIHtcbiAgICAgIHJldHVybiBpbnB1dC5zdWJzdHJpbmcocGVnJHJlcG9ydGVkUG9zLCBwZWckY3VyclBvcyk7XG4gICAgfVxuXG4gICAgZnVuY3Rpb24gb2Zmc2V0KCkge1xuICAgICAgcmV0dXJuIHBlZyRyZXBvcnRlZFBvcztcbiAgICB9XG5cbiAgICBmdW5jdGlvbiBsaW5lKCkge1xuICAgICAgcmV0dXJuIHBlZyRjb21wdXRlUG9zRGV0YWlscyhwZWckcmVwb3J0ZWRQb3MpLmxpbmU7XG4gICAgfVxuXG4gICAgZnVuY3Rpb24gY29sdW1uKCkge1xuICAgICAgcmV0dXJuIHBlZyRjb21wdXRlUG9zRGV0YWlscyhwZWckcmVwb3J0ZWRQb3MpLmNvbHVtbjtcbiAgICB9XG5cbiAgICBmdW5jdGlvbiBleHBlY3RlZChkZXNjcmlwdGlvbikge1xuICAgICAgdGhyb3cgcGVnJGJ1aWxkRXhjZXB0aW9uKFxuICAgICAgICBudWxsLFxuICAgICAgICBbeyB0eXBlOiBcIm90aGVyXCIsIGRlc2NyaXB0aW9uOiBkZXNjcmlwdGlvbiB9XSxcbiAgICAgICAgcGVnJHJlcG9ydGVkUG9zXG4gICAgICApO1xuICAgIH1cblxuICAgIGZ1bmN0aW9uIGVycm9yKG1lc3NhZ2UpIHtcbiAgICAgIHRocm93IHBlZyRidWlsZEV4Y2VwdGlvbihtZXNzYWdlLCBudWxsLCBwZWckcmVwb3J0ZWRQb3MpO1xuICAgIH1cblxuICAgIGZ1bmN0aW9uIHBlZyRjb21wdXRlUG9zRGV0YWlscyhwb3MpIHtcbiAgICAgIGZ1bmN0aW9uIGFkdmFuY2UoZGV0YWlscywgc3RhcnRQb3MsIGVuZFBvcykge1xuICAgICAgICB2YXIgcCwgY2g7XG5cbiAgICAgICAgZm9yIChwID0gc3RhcnRQb3M7IHAgPCBlbmRQb3M7IHArKykge1xuICAgICAgICAgIGNoID0gaW5wdXQuY2hhckF0KHApO1xuICAgICAgICAgIGlmIChjaCA9PT0gXCJcXG5cIikge1xuICAgICAgICAgICAgaWYgKCFkZXRhaWxzLnNlZW5DUikgeyBkZXRhaWxzLmxpbmUrKzsgfVxuICAgICAgICAgICAgZGV0YWlscy5jb2x1bW4gPSAxO1xuICAgICAgICAgICAgZGV0YWlscy5zZWVuQ1IgPSBmYWxzZTtcbiAgICAgICAgICB9IGVsc2UgaWYgKGNoID09PSBcIlxcclwiIHx8IGNoID09PSBcIlxcdTIwMjhcIiB8fCBjaCA9PT0gXCJcXHUyMDI5XCIpIHtcbiAgICAgICAgICAgIGRldGFpbHMubGluZSsrO1xuICAgICAgICAgICAgZGV0YWlscy5jb2x1bW4gPSAxO1xuICAgICAgICAgICAgZGV0YWlscy5zZWVuQ1IgPSB0cnVlO1xuICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICBkZXRhaWxzLmNvbHVtbisrO1xuICAgICAgICAgICAgZGV0YWlscy5zZWVuQ1IgPSBmYWxzZTtcbiAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgIH1cblxuICAgICAgaWYgKHBlZyRjYWNoZWRQb3MgIT09IHBvcykge1xuICAgICAgICBpZiAocGVnJGNhY2hlZFBvcyA+IHBvcykge1xuICAgICAgICAgIHBlZyRjYWNoZWRQb3MgPSAwO1xuICAgICAgICAgIHBlZyRjYWNoZWRQb3NEZXRhaWxzID0geyBsaW5lOiAxLCBjb2x1bW46IDEsIHNlZW5DUjogZmFsc2UgfTtcbiAgICAgICAgfVxuICAgICAgICBhZHZhbmNlKHBlZyRjYWNoZWRQb3NEZXRhaWxzLCBwZWckY2FjaGVkUG9zLCBwb3MpO1xuICAgICAgICBwZWckY2FjaGVkUG9zID0gcG9zO1xuICAgICAgfVxuXG4gICAgICByZXR1cm4gcGVnJGNhY2hlZFBvc0RldGFpbHM7XG4gICAgfVxuXG4gICAgZnVuY3Rpb24gcGVnJGZhaWwoZXhwZWN0ZWQpIHtcbiAgICAgIGlmIChwZWckY3VyclBvcyA8IHBlZyRtYXhGYWlsUG9zKSB7IHJldHVybjsgfVxuXG4gICAgICBpZiAocGVnJGN1cnJQb3MgPiBwZWckbWF4RmFpbFBvcykge1xuICAgICAgICBwZWckbWF4RmFpbFBvcyA9IHBlZyRjdXJyUG9zO1xuICAgICAgICBwZWckbWF4RmFpbEV4cGVjdGVkID0gW107XG4gICAgICB9XG5cbiAgICAgIHBlZyRtYXhGYWlsRXhwZWN0ZWQucHVzaChleHBlY3RlZCk7XG4gICAgfVxuXG4gICAgZnVuY3Rpb24gcGVnJGJ1aWxkRXhjZXB0aW9uKG1lc3NhZ2UsIGV4cGVjdGVkLCBwb3MpIHtcbiAgICAgIGZ1bmN0aW9uIGNsZWFudXBFeHBlY3RlZChleHBlY3RlZCkge1xuICAgICAgICB2YXIgaSA9IDE7XG5cbiAgICAgICAgZXhwZWN0ZWQuc29ydChmdW5jdGlvbihhLCBiKSB7XG4gICAgICAgICAgaWYgKGEuZGVzY3JpcHRpb24gPCBiLmRlc2NyaXB0aW9uKSB7XG4gICAgICAgICAgICByZXR1cm4gLTE7XG4gICAgICAgICAgfSBlbHNlIGlmIChhLmRlc2NyaXB0aW9uID4gYi5kZXNjcmlwdGlvbikge1xuICAgICAgICAgICAgcmV0dXJuIDE7XG4gICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIHJldHVybiAwO1xuICAgICAgICAgIH1cbiAgICAgICAgfSk7XG5cbiAgICAgICAgd2hpbGUgKGkgPCBleHBlY3RlZC5sZW5ndGgpIHtcbiAgICAgICAgICBpZiAoZXhwZWN0ZWRbaSAtIDFdID09PSBleHBlY3RlZFtpXSkge1xuICAgICAgICAgICAgZXhwZWN0ZWQuc3BsaWNlKGksIDEpO1xuICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICBpKys7XG4gICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICB9XG5cbiAgICAgIGZ1bmN0aW9uIGJ1aWxkTWVzc2FnZShleHBlY3RlZCwgZm91bmQpIHtcbiAgICAgICAgZnVuY3Rpb24gc3RyaW5nRXNjYXBlKHMpIHtcbiAgICAgICAgICBmdW5jdGlvbiBoZXgoY2gpIHsgcmV0dXJuIGNoLmNoYXJDb2RlQXQoMCkudG9TdHJpbmcoMTYpLnRvVXBwZXJDYXNlKCk7IH1cblxuICAgICAgICAgIHJldHVybiBzXG4gICAgICAgICAgICAucmVwbGFjZSgvXFxcXC9nLCAgICdcXFxcXFxcXCcpXG4gICAgICAgICAgICAucmVwbGFjZSgvXCIvZywgICAgJ1xcXFxcIicpXG4gICAgICAgICAgICAucmVwbGFjZSgvXFx4MDgvZywgJ1xcXFxiJylcbiAgICAgICAgICAgIC5yZXBsYWNlKC9cXHQvZywgICAnXFxcXHQnKVxuICAgICAgICAgICAgLnJlcGxhY2UoL1xcbi9nLCAgICdcXFxcbicpXG4gICAgICAgICAgICAucmVwbGFjZSgvXFxmL2csICAgJ1xcXFxmJylcbiAgICAgICAgICAgIC5yZXBsYWNlKC9cXHIvZywgICAnXFxcXHInKVxuICAgICAgICAgICAgLnJlcGxhY2UoL1tcXHgwMC1cXHgwN1xceDBCXFx4MEVcXHgwRl0vZywgZnVuY3Rpb24oY2gpIHsgcmV0dXJuICdcXFxceDAnICsgaGV4KGNoKTsgfSlcbiAgICAgICAgICAgIC5yZXBsYWNlKC9bXFx4MTAtXFx4MUZcXHg4MC1cXHhGRl0vZywgICAgZnVuY3Rpb24oY2gpIHsgcmV0dXJuICdcXFxceCcgICsgaGV4KGNoKTsgfSlcbiAgICAgICAgICAgIC5yZXBsYWNlKC9bXFx1MDE4MC1cXHUwRkZGXS9nLCAgICAgICAgIGZ1bmN0aW9uKGNoKSB7IHJldHVybiAnXFxcXHUwJyArIGhleChjaCk7IH0pXG4gICAgICAgICAgICAucmVwbGFjZSgvW1xcdTEwODAtXFx1RkZGRl0vZywgICAgICAgICBmdW5jdGlvbihjaCkgeyByZXR1cm4gJ1xcXFx1JyAgKyBoZXgoY2gpOyB9KTtcbiAgICAgICAgfVxuXG4gICAgICAgIHZhciBleHBlY3RlZERlc2NzID0gbmV3IEFycmF5KGV4cGVjdGVkLmxlbmd0aCksXG4gICAgICAgICAgICBleHBlY3RlZERlc2MsIGZvdW5kRGVzYywgaTtcblxuICAgICAgICBmb3IgKGkgPSAwOyBpIDwgZXhwZWN0ZWQubGVuZ3RoOyBpKyspIHtcbiAgICAgICAgICBleHBlY3RlZERlc2NzW2ldID0gZXhwZWN0ZWRbaV0uZGVzY3JpcHRpb247XG4gICAgICAgIH1cblxuICAgICAgICBleHBlY3RlZERlc2MgPSBleHBlY3RlZC5sZW5ndGggPiAxXG4gICAgICAgICAgPyBleHBlY3RlZERlc2NzLnNsaWNlKDAsIC0xKS5qb2luKFwiLCBcIilcbiAgICAgICAgICAgICAgKyBcIiBvciBcIlxuICAgICAgICAgICAgICArIGV4cGVjdGVkRGVzY3NbZXhwZWN0ZWQubGVuZ3RoIC0gMV1cbiAgICAgICAgICA6IGV4cGVjdGVkRGVzY3NbMF07XG5cbiAgICAgICAgZm91bmREZXNjID0gZm91bmQgPyBcIlxcXCJcIiArIHN0cmluZ0VzY2FwZShmb3VuZCkgKyBcIlxcXCJcIiA6IFwiZW5kIG9mIGlucHV0XCI7XG5cbiAgICAgICAgcmV0dXJuIFwiRXhwZWN0ZWQgXCIgKyBleHBlY3RlZERlc2MgKyBcIiBidXQgXCIgKyBmb3VuZERlc2MgKyBcIiBmb3VuZC5cIjtcbiAgICAgIH1cblxuICAgICAgdmFyIHBvc0RldGFpbHMgPSBwZWckY29tcHV0ZVBvc0RldGFpbHMocG9zKSxcbiAgICAgICAgICBmb3VuZCAgICAgID0gcG9zIDwgaW5wdXQubGVuZ3RoID8gaW5wdXQuY2hhckF0KHBvcykgOiBudWxsO1xuXG4gICAgICBpZiAoZXhwZWN0ZWQgIT09IG51bGwpIHtcbiAgICAgICAgY2xlYW51cEV4cGVjdGVkKGV4cGVjdGVkKTtcbiAgICAgIH1cblxuICAgICAgcmV0dXJuIG5ldyBTeW50YXhFcnJvcihcbiAgICAgICAgbWVzc2FnZSAhPT0gbnVsbCA/IG1lc3NhZ2UgOiBidWlsZE1lc3NhZ2UoZXhwZWN0ZWQsIGZvdW5kKSxcbiAgICAgICAgZXhwZWN0ZWQsXG4gICAgICAgIGZvdW5kLFxuICAgICAgICBwb3MsXG4gICAgICAgIHBvc0RldGFpbHMubGluZSxcbiAgICAgICAgcG9zRGV0YWlscy5jb2x1bW5cbiAgICAgICk7XG4gICAgfVxuXG4gICAgZnVuY3Rpb24gcGVnJGRlY29kZShzKSB7XG4gICAgICB2YXIgYmMgPSBuZXcgQXJyYXkocy5sZW5ndGgpLCBpO1xuXG4gICAgICBmb3IgKGkgPSAwOyBpIDwgcy5sZW5ndGg7IGkrKykge1xuICAgICAgICBiY1tpXSA9IHMuY2hhckNvZGVBdChpKSAtIDMyO1xuICAgICAgfVxuXG4gICAgICByZXR1cm4gYmM7XG4gICAgfVxuXG4gICAgZnVuY3Rpb24gcGVnJHBhcnNlUnVsZShpbmRleCkge1xuICAgICAgdmFyIGJjICAgID0gcGVnJGJ5dGVjb2RlW2luZGV4XSxcbiAgICAgICAgICBpcCAgICA9IDAsXG4gICAgICAgICAgaXBzICAgPSBbXSxcbiAgICAgICAgICBlbmQgICA9IGJjLmxlbmd0aCxcbiAgICAgICAgICBlbmRzICA9IFtdLFxuICAgICAgICAgIHN0YWNrID0gW10sXG4gICAgICAgICAgcGFyYW1zLCBpO1xuXG4gICAgICBmdW5jdGlvbiBwcm90ZWN0KG9iamVjdCkge1xuICAgICAgICByZXR1cm4gT2JqZWN0LnByb3RvdHlwZS50b1N0cmluZy5hcHBseShvYmplY3QpID09PSBcIltvYmplY3QgQXJyYXldXCIgPyBbXSA6IG9iamVjdDtcbiAgICAgIH1cblxuICAgICAgd2hpbGUgKHRydWUpIHtcbiAgICAgICAgd2hpbGUgKGlwIDwgZW5kKSB7XG4gICAgICAgICAgc3dpdGNoIChiY1tpcF0pIHtcbiAgICAgICAgICAgIGNhc2UgMDpcbiAgICAgICAgICAgICAgc3RhY2sucHVzaChwcm90ZWN0KHBlZyRjb25zdHNbYmNbaXAgKyAxXV0pKTtcbiAgICAgICAgICAgICAgaXAgKz0gMjtcbiAgICAgICAgICAgICAgYnJlYWs7XG5cbiAgICAgICAgICAgIGNhc2UgMTpcbiAgICAgICAgICAgICAgc3RhY2sucHVzaChwZWckY3VyclBvcyk7XG4gICAgICAgICAgICAgIGlwKys7XG4gICAgICAgICAgICAgIGJyZWFrO1xuXG4gICAgICAgICAgICBjYXNlIDI6XG4gICAgICAgICAgICAgIHN0YWNrLnBvcCgpO1xuICAgICAgICAgICAgICBpcCsrO1xuICAgICAgICAgICAgICBicmVhaztcblxuICAgICAgICAgICAgY2FzZSAzOlxuICAgICAgICAgICAgICBwZWckY3VyclBvcyA9IHN0YWNrLnBvcCgpO1xuICAgICAgICAgICAgICBpcCsrO1xuICAgICAgICAgICAgICBicmVhaztcblxuICAgICAgICAgICAgY2FzZSA0OlxuICAgICAgICAgICAgICBzdGFjay5sZW5ndGggLT0gYmNbaXAgKyAxXTtcbiAgICAgICAgICAgICAgaXAgKz0gMjtcbiAgICAgICAgICAgICAgYnJlYWs7XG5cbiAgICAgICAgICAgIGNhc2UgNTpcbiAgICAgICAgICAgICAgc3RhY2suc3BsaWNlKC0yLCAxKTtcbiAgICAgICAgICAgICAgaXArKztcbiAgICAgICAgICAgICAgYnJlYWs7XG5cbiAgICAgICAgICAgIGNhc2UgNjpcbiAgICAgICAgICAgICAgc3RhY2tbc3RhY2subGVuZ3RoIC0gMl0ucHVzaChzdGFjay5wb3AoKSk7XG4gICAgICAgICAgICAgIGlwKys7XG4gICAgICAgICAgICAgIGJyZWFrO1xuXG4gICAgICAgICAgICBjYXNlIDc6XG4gICAgICAgICAgICAgIHN0YWNrLnB1c2goc3RhY2suc3BsaWNlKHN0YWNrLmxlbmd0aCAtIGJjW2lwICsgMV0sIGJjW2lwICsgMV0pKTtcbiAgICAgICAgICAgICAgaXAgKz0gMjtcbiAgICAgICAgICAgICAgYnJlYWs7XG5cbiAgICAgICAgICAgIGNhc2UgODpcbiAgICAgICAgICAgICAgc3RhY2sucG9wKCk7XG4gICAgICAgICAgICAgIHN0YWNrLnB1c2goaW5wdXQuc3Vic3RyaW5nKHN0YWNrW3N0YWNrLmxlbmd0aCAtIDFdLCBwZWckY3VyclBvcykpO1xuICAgICAgICAgICAgICBpcCsrO1xuICAgICAgICAgICAgICBicmVhaztcblxuICAgICAgICAgICAgY2FzZSA5OlxuICAgICAgICAgICAgICBlbmRzLnB1c2goZW5kKTtcbiAgICAgICAgICAgICAgaXBzLnB1c2goaXAgKyAzICsgYmNbaXAgKyAxXSArIGJjW2lwICsgMl0pO1xuXG4gICAgICAgICAgICAgIGlmIChzdGFja1tzdGFjay5sZW5ndGggLSAxXSkge1xuICAgICAgICAgICAgICAgIGVuZCA9IGlwICsgMyArIGJjW2lwICsgMV07XG4gICAgICAgICAgICAgICAgaXAgKz0gMztcbiAgICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgICBlbmQgPSBpcCArIDMgKyBiY1tpcCArIDFdICsgYmNbaXAgKyAyXTtcbiAgICAgICAgICAgICAgICBpcCArPSAzICsgYmNbaXAgKyAxXTtcbiAgICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICAgIGJyZWFrO1xuXG4gICAgICAgICAgICBjYXNlIDEwOlxuICAgICAgICAgICAgICBlbmRzLnB1c2goZW5kKTtcbiAgICAgICAgICAgICAgaXBzLnB1c2goaXAgKyAzICsgYmNbaXAgKyAxXSArIGJjW2lwICsgMl0pO1xuXG4gICAgICAgICAgICAgIGlmIChzdGFja1tzdGFjay5sZW5ndGggLSAxXSA9PT0gcGVnJEZBSUxFRCkge1xuICAgICAgICAgICAgICAgIGVuZCA9IGlwICsgMyArIGJjW2lwICsgMV07XG4gICAgICAgICAgICAgICAgaXAgKz0gMztcbiAgICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgICBlbmQgPSBpcCArIDMgKyBiY1tpcCArIDFdICsgYmNbaXAgKyAyXTtcbiAgICAgICAgICAgICAgICBpcCArPSAzICsgYmNbaXAgKyAxXTtcbiAgICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICAgIGJyZWFrO1xuXG4gICAgICAgICAgICBjYXNlIDExOlxuICAgICAgICAgICAgICBlbmRzLnB1c2goZW5kKTtcbiAgICAgICAgICAgICAgaXBzLnB1c2goaXAgKyAzICsgYmNbaXAgKyAxXSArIGJjW2lwICsgMl0pO1xuXG4gICAgICAgICAgICAgIGlmIChzdGFja1tzdGFjay5sZW5ndGggLSAxXSAhPT0gcGVnJEZBSUxFRCkge1xuICAgICAgICAgICAgICAgIGVuZCA9IGlwICsgMyArIGJjW2lwICsgMV07XG4gICAgICAgICAgICAgICAgaXAgKz0gMztcbiAgICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgICBlbmQgPSBpcCArIDMgKyBiY1tpcCArIDFdICsgYmNbaXAgKyAyXTtcbiAgICAgICAgICAgICAgICBpcCArPSAzICsgYmNbaXAgKyAxXTtcbiAgICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICAgIGJyZWFrO1xuXG4gICAgICAgICAgICBjYXNlIDEyOlxuICAgICAgICAgICAgICBpZiAoc3RhY2tbc3RhY2subGVuZ3RoIC0gMV0gIT09IHBlZyRGQUlMRUQpIHtcbiAgICAgICAgICAgICAgICBlbmRzLnB1c2goZW5kKTtcbiAgICAgICAgICAgICAgICBpcHMucHVzaChpcCk7XG5cbiAgICAgICAgICAgICAgICBlbmQgPSBpcCArIDIgKyBiY1tpcCArIDFdO1xuICAgICAgICAgICAgICAgIGlwICs9IDI7XG4gICAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgICAgaXAgKz0gMiArIGJjW2lwICsgMV07XG4gICAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgICBicmVhaztcblxuICAgICAgICAgICAgY2FzZSAxMzpcbiAgICAgICAgICAgICAgZW5kcy5wdXNoKGVuZCk7XG4gICAgICAgICAgICAgIGlwcy5wdXNoKGlwICsgMyArIGJjW2lwICsgMV0gKyBiY1tpcCArIDJdKTtcblxuICAgICAgICAgICAgICBpZiAoaW5wdXQubGVuZ3RoID4gcGVnJGN1cnJQb3MpIHtcbiAgICAgICAgICAgICAgICBlbmQgPSBpcCArIDMgKyBiY1tpcCArIDFdO1xuICAgICAgICAgICAgICAgIGlwICs9IDM7XG4gICAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgICAgZW5kID0gaXAgKyAzICsgYmNbaXAgKyAxXSArIGJjW2lwICsgMl07XG4gICAgICAgICAgICAgICAgaXAgKz0gMyArIGJjW2lwICsgMV07XG4gICAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgICBicmVhaztcblxuICAgICAgICAgICAgY2FzZSAxNDpcbiAgICAgICAgICAgICAgZW5kcy5wdXNoKGVuZCk7XG4gICAgICAgICAgICAgIGlwcy5wdXNoKGlwICsgNCArIGJjW2lwICsgMl0gKyBiY1tpcCArIDNdKTtcblxuICAgICAgICAgICAgICBpZiAoaW5wdXQuc3Vic3RyKHBlZyRjdXJyUG9zLCBwZWckY29uc3RzW2JjW2lwICsgMV1dLmxlbmd0aCkgPT09IHBlZyRjb25zdHNbYmNbaXAgKyAxXV0pIHtcbiAgICAgICAgICAgICAgICBlbmQgPSBpcCArIDQgKyBiY1tpcCArIDJdO1xuICAgICAgICAgICAgICAgIGlwICs9IDQ7XG4gICAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgICAgZW5kID0gaXAgKyA0ICsgYmNbaXAgKyAyXSArIGJjW2lwICsgM107XG4gICAgICAgICAgICAgICAgaXAgKz0gNCArIGJjW2lwICsgMl07XG4gICAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgICBicmVhaztcblxuICAgICAgICAgICAgY2FzZSAxNTpcbiAgICAgICAgICAgICAgZW5kcy5wdXNoKGVuZCk7XG4gICAgICAgICAgICAgIGlwcy5wdXNoKGlwICsgNCArIGJjW2lwICsgMl0gKyBiY1tpcCArIDNdKTtcblxuICAgICAgICAgICAgICBpZiAoaW5wdXQuc3Vic3RyKHBlZyRjdXJyUG9zLCBwZWckY29uc3RzW2JjW2lwICsgMV1dLmxlbmd0aCkudG9Mb3dlckNhc2UoKSA9PT0gcGVnJGNvbnN0c1tiY1tpcCArIDFdXSkge1xuICAgICAgICAgICAgICAgIGVuZCA9IGlwICsgNCArIGJjW2lwICsgMl07XG4gICAgICAgICAgICAgICAgaXAgKz0gNDtcbiAgICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgICBlbmQgPSBpcCArIDQgKyBiY1tpcCArIDJdICsgYmNbaXAgKyAzXTtcbiAgICAgICAgICAgICAgICBpcCArPSA0ICsgYmNbaXAgKyAyXTtcbiAgICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICAgIGJyZWFrO1xuXG4gICAgICAgICAgICBjYXNlIDE2OlxuICAgICAgICAgICAgICBlbmRzLnB1c2goZW5kKTtcbiAgICAgICAgICAgICAgaXBzLnB1c2goaXAgKyA0ICsgYmNbaXAgKyAyXSArIGJjW2lwICsgM10pO1xuXG4gICAgICAgICAgICAgIGlmIChwZWckY29uc3RzW2JjW2lwICsgMV1dLnRlc3QoaW5wdXQuY2hhckF0KHBlZyRjdXJyUG9zKSkpIHtcbiAgICAgICAgICAgICAgICBlbmQgPSBpcCArIDQgKyBiY1tpcCArIDJdO1xuICAgICAgICAgICAgICAgIGlwICs9IDQ7XG4gICAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgICAgZW5kID0gaXAgKyA0ICsgYmNbaXAgKyAyXSArIGJjW2lwICsgM107XG4gICAgICAgICAgICAgICAgaXAgKz0gNCArIGJjW2lwICsgMl07XG4gICAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgICBicmVhaztcblxuICAgICAgICAgICAgY2FzZSAxNzpcbiAgICAgICAgICAgICAgc3RhY2sucHVzaChpbnB1dC5zdWJzdHIocGVnJGN1cnJQb3MsIGJjW2lwICsgMV0pKTtcbiAgICAgICAgICAgICAgcGVnJGN1cnJQb3MgKz0gYmNbaXAgKyAxXTtcbiAgICAgICAgICAgICAgaXAgKz0gMjtcbiAgICAgICAgICAgICAgYnJlYWs7XG5cbiAgICAgICAgICAgIGNhc2UgMTg6XG4gICAgICAgICAgICAgIHN0YWNrLnB1c2gocGVnJGNvbnN0c1tiY1tpcCArIDFdXSk7XG4gICAgICAgICAgICAgIHBlZyRjdXJyUG9zICs9IHBlZyRjb25zdHNbYmNbaXAgKyAxXV0ubGVuZ3RoO1xuICAgICAgICAgICAgICBpcCArPSAyO1xuICAgICAgICAgICAgICBicmVhaztcblxuICAgICAgICAgICAgY2FzZSAxOTpcbiAgICAgICAgICAgICAgc3RhY2sucHVzaChwZWckRkFJTEVEKTtcbiAgICAgICAgICAgICAgaWYgKHBlZyRzaWxlbnRGYWlscyA9PT0gMCkge1xuICAgICAgICAgICAgICAgIHBlZyRmYWlsKHBlZyRjb25zdHNbYmNbaXAgKyAxXV0pO1xuICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgIGlwICs9IDI7XG4gICAgICAgICAgICAgIGJyZWFrO1xuXG4gICAgICAgICAgICBjYXNlIDIwOlxuICAgICAgICAgICAgICBwZWckcmVwb3J0ZWRQb3MgPSBzdGFja1tzdGFjay5sZW5ndGggLSAxIC0gYmNbaXAgKyAxXV07XG4gICAgICAgICAgICAgIGlwICs9IDI7XG4gICAgICAgICAgICAgIGJyZWFrO1xuXG4gICAgICAgICAgICBjYXNlIDIxOlxuICAgICAgICAgICAgICBwZWckcmVwb3J0ZWRQb3MgPSBwZWckY3VyclBvcztcbiAgICAgICAgICAgICAgaXArKztcbiAgICAgICAgICAgICAgYnJlYWs7XG5cbiAgICAgICAgICAgIGNhc2UgMjI6XG4gICAgICAgICAgICAgIHBhcmFtcyA9IGJjLnNsaWNlKGlwICsgNCwgaXAgKyA0ICsgYmNbaXAgKyAzXSk7XG4gICAgICAgICAgICAgIGZvciAoaSA9IDA7IGkgPCBiY1tpcCArIDNdOyBpKyspIHtcbiAgICAgICAgICAgICAgICBwYXJhbXNbaV0gPSBzdGFja1tzdGFjay5sZW5ndGggLSAxIC0gcGFyYW1zW2ldXTtcbiAgICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICAgIHN0YWNrLnNwbGljZShcbiAgICAgICAgICAgICAgICBzdGFjay5sZW5ndGggLSBiY1tpcCArIDJdLFxuICAgICAgICAgICAgICAgIGJjW2lwICsgMl0sXG4gICAgICAgICAgICAgICAgcGVnJGNvbnN0c1tiY1tpcCArIDFdXS5hcHBseShudWxsLCBwYXJhbXMpXG4gICAgICAgICAgICAgICk7XG5cbiAgICAgICAgICAgICAgaXAgKz0gNCArIGJjW2lwICsgM107XG4gICAgICAgICAgICAgIGJyZWFrO1xuXG4gICAgICAgICAgICBjYXNlIDIzOlxuICAgICAgICAgICAgICBzdGFjay5wdXNoKHBlZyRwYXJzZVJ1bGUoYmNbaXAgKyAxXSkpO1xuICAgICAgICAgICAgICBpcCArPSAyO1xuICAgICAgICAgICAgICBicmVhaztcblxuICAgICAgICAgICAgY2FzZSAyNDpcbiAgICAgICAgICAgICAgcGVnJHNpbGVudEZhaWxzKys7XG4gICAgICAgICAgICAgIGlwKys7XG4gICAgICAgICAgICAgIGJyZWFrO1xuXG4gICAgICAgICAgICBjYXNlIDI1OlxuICAgICAgICAgICAgICBwZWckc2lsZW50RmFpbHMtLTtcbiAgICAgICAgICAgICAgaXArKztcbiAgICAgICAgICAgICAgYnJlYWs7XG5cbiAgICAgICAgICAgIGRlZmF1bHQ6XG4gICAgICAgICAgICAgIHRocm93IG5ldyBFcnJvcihcIkludmFsaWQgb3Bjb2RlOiBcIiArIGJjW2lwXSArIFwiLlwiKTtcbiAgICAgICAgICB9XG4gICAgICAgIH1cblxuICAgICAgICBpZiAoZW5kcy5sZW5ndGggPiAwKSB7XG4gICAgICAgICAgZW5kID0gZW5kcy5wb3AoKTtcbiAgICAgICAgICBpcCA9IGlwcy5wb3AoKTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICBicmVhaztcbiAgICAgICAgfVxuICAgICAgfVxuXG4gICAgICByZXR1cm4gc3RhY2tbMF07XG4gICAgfVxuXG5cbiAgICAgIGhlbHBlcnMgPSByZXF1aXJlKCcuLi9saWIvaGVscGVycycpO1xuICAgICAgcHJlZml4ZXMgPSByZXF1aXJlKCcuL3ByZWZpeGVzLmpzb24nKTtcbiAgICAgIG1ldHJpY3MgPSByZXF1aXJlKCcuL21ldHJpY3MuanNvbicpO1xuICAgICAgbXVsdGlwbHkgPSBoZWxwZXJzLm11bHRpcGx5O1xuICAgICAgdG9wb3dlciA9IGhlbHBlcnMudG9wb3dlcjtcbiAgICAgIGNsZWFudXAgPSBoZWxwZXJzLmNsZWFudXA7XG4gICAgICBpc21ldHJpYyA9IGhlbHBlcnMuaXNtZXRyaWMobWV0cmljcyk7XG5cblxuICAgIHBlZyRyZXN1bHQgPSBwZWckcGFyc2VSdWxlKHBlZyRzdGFydFJ1bGVJbmRleCk7XG5cbiAgICBpZiAocGVnJHJlc3VsdCAhPT0gcGVnJEZBSUxFRCAmJiBwZWckY3VyclBvcyA9PT0gaW5wdXQubGVuZ3RoKSB7XG4gICAgICByZXR1cm4gcGVnJHJlc3VsdDtcbiAgICB9IGVsc2Uge1xuICAgICAgaWYgKHBlZyRyZXN1bHQgIT09IHBlZyRGQUlMRUQgJiYgcGVnJGN1cnJQb3MgPCBpbnB1dC5sZW5ndGgpIHtcbiAgICAgICAgcGVnJGZhaWwoeyB0eXBlOiBcImVuZFwiLCBkZXNjcmlwdGlvbjogXCJlbmQgb2YgaW5wdXRcIiB9KTtcbiAgICAgIH1cblxuICAgICAgdGhyb3cgcGVnJGJ1aWxkRXhjZXB0aW9uKG51bGwsIHBlZyRtYXhGYWlsRXhwZWN0ZWQsIHBlZyRtYXhGYWlsUG9zKTtcbiAgICB9XG4gIH1cblxuICByZXR1cm4ge1xuICAgIFN5bnRheEVycm9yOiBTeW50YXhFcnJvcixcbiAgICBwYXJzZTogICAgICAgcGFyc2VcbiAgfTtcbn0pKCk7XG4iLCJtb2R1bGUuZXhwb3J0cyA9IHtcblxuICBtdWx0aXBseTogZnVuY3Rpb24gbXVsdGlwbHkodCwgbXMpIHtcbiAgICBpZiAobXMubGVuZ3RoID09IDApIHJldHVybiB0O1xuXG4gICAgdmFyIHJldCA9IHQ7XG4gICAgbXMuZm9yRWFjaChmdW5jdGlvbihtdGVybSl7XG5cbiAgICAgIHZhciBzaWduID0gKG10ZXJtWzBdID09IFwiLlwiID8gMSA6IC0xKTtcbiAgICAgIHZhciBiID0gbXRlcm1bMV07XG5cbiAgICAgIHJldC52YWx1ZSAqPSBNYXRoLnBvdyhiLnZhbHVlLCBzaWduKTtcbiAgICAgIE9iamVjdC5rZXlzKGIudW5pdHMpLmZvckVhY2goZnVuY3Rpb24odSl7XG4gICAgICAgIHJldC51bml0c1t1XSA9IHJldC51bml0c1t1XSB8fCAwO1xuICAgICAgICByZXQudW5pdHNbdV0gPSByZXQudW5pdHNbdV0gKyBzaWduKmIudW5pdHNbdV07XG4gICAgICAgIGlmIChyZXQudW5pdHNbdV0gPT0gMCl7XG4gICAgICAgICAgZGVsZXRlIHJldC51bml0c1t1XTtcbiAgICAgICAgfVxuICAgICAgfSk7XG5cbiAgICB9KTtcbiAgICByZXR1cm4gcmV0O1xuICB9LFxuXG4gIHRvcG93ZXI6IGZ1bmN0aW9uIHRvcG93ZXIoZSwgZXhwKXtcbiAgICBpZiAoIWV4cCkge2V4cCA9IDE7fVxuICAgIHZhciByZXQgPSBlO1xuICAgIHJldC52YWx1ZSA9IE1hdGgucG93KHJldC52YWx1ZSwgZXhwKTtcbiAgICBPYmplY3Qua2V5cyhlLnVuaXRzKS5mb3JFYWNoKGZ1bmN0aW9uKHUpe1xuICAgICAgcmV0LnVuaXRzW3VdID0gZS51bml0c1t1XSAqIGV4cDtcbiAgICB9KTtcblxuICAgIHJldHVybiByZXQ7XG4gIH0sXG5cbiAgY2xlYW51cDogZnVuY3Rpb24gY2xlYW51cChlKSB7XG4gICAgW1wiMTBeXCIsIFwiMTAqXCJdLmZvckVhY2goZnVuY3Rpb24oayl7XG4gICAgICBpZiAoZS51bml0c1trXSkge1xuICAgICAgICBlLnZhbHVlICo9IE1hdGgucG93KDEwLCBlLnVuaXRzW2tdKTtcbiAgICAgICAgZGVsZXRlIGUudW5pdHNba107XG4gICAgICB9XG4gICAgfSlcbiAgICByZXR1cm4gZTtcbiAgfSxcblxuICBpc21ldHJpYzogZnVuY3Rpb24obWV0cmljcykge1xuICAgIHJldHVybiBmdW5jdGlvbih1KSB7XG4gICAgICByZXR1cm4gbWV0cmljc1tPYmplY3Qua2V5cyh1LnVuaXRzKVswXV0gIT09IHVuZGVmaW5lZDtcbiAgICB9O1xuICB9XG59XG4iLCJwYXJzZXIgPSByZXF1aXJlKCcuL2dlbmVyYXRlZC91Y3VtLXBhcnNlci5qcycpO1xuZXF1aXZhbGVudHMgPSByZXF1aXJlKCcuL2dlbmVyYXRlZC9lcXVpdmFsZW50cy5qc29uJyk7XG5oZWxwZXJzID0gcmVxdWlyZSgnLi9saWIvaGVscGVycy5qcycpO1xuXG5tb2R1bGUuZXhwb3J0cyA9IHtcbiAgcGFyc2U6IHBhcnNlLFxuICBjYW5vbmljYWxpemU6IGNhbm9uaWNhbGl6ZSxcbiAgY29udmVydDogY29udmVydFxufTtcblxuZnVuY3Rpb24gcGFyc2UodmFsdWUsIHVuaXRzKXtcblxuICBpZiAoYXJndW1lbnRzLmxlbmd0aCA9PT0gMSB8fCB1bml0cyA9PT0gdW5kZWZpbmVkKXtcbiAgICB1bml0cyA9IHZhbHVlO1xuICAgIHZhbHVlID0gMVxuICB9XG5cbiAgaWYgKHVuaXRzLm1hdGNoKC9eXFwvLykpe1xuICAgIHVuaXRzID0gJzEnK3VuaXRzO1xuICB9XG5cbiAgaWYgKHVuaXRzID09PSAnJykgdW5pdHMgPSAnMSc7XG5cbiAgdmFyIHJldCA9IHBhcnNlci5wYXJzZSh1bml0cyk7XG4gIHJldC52YWx1ZSAqPSB2YWx1ZTtcbiAgcmV0dXJuIHJldDtcbn1cblxuZnVuY3Rpb24gbm9uQmFzZVVuaXQodSl7XG4gIHJldHVybiBlcXVpdmFsZW50c1t1XSAhPT0gdW5kZWZpbmVkO1xufVxuXG5mdW5jdGlvbiByZW1haW5pbmdOb25CYXNlVW5pdHModmFsdWUpIHtcbiAgcmV0dXJuIE9iamVjdC5rZXlzKHZhbHVlLnVuaXRzKS5maWx0ZXIobm9uQmFzZVVuaXQpXG59XG5cbmZ1bmN0aW9uIGNhbm9uaWNhbGl6ZSh2YWx1ZSwgdW5pdHMpe1xuXG4gIHZhbHVlID0gcGFyc2UodmFsdWUsIHVuaXRzKTtcblxuICB2YXIgcmVtYWluaW5nID0gcmVtYWluaW5nTm9uQmFzZVVuaXRzKHZhbHVlKTtcblxuICB3aGlsZSAocmVtYWluaW5nLmxlbmd0aCkge1xuICAgIGlmIChyZW1haW5pbmcubGVuZ3RoID09PSAwKSB7XG4gICAgICByZXR1cm4gZmFsc2U7XG4gICAgfVxuXG4gICAgcmVtYWluaW5nLmZvckVhY2goZnVuY3Rpb24odSl7XG4gICAgICB2YXIgc3ViID0gcGFyc2UoZXF1aXZhbGVudHNbdV0udWN1bSk7XG4gICAgICBzdWIudmFsdWUgKj0gZXF1aXZhbGVudHNbdV0udmFsdWU7XG4gICAgICBzdWIgPSBoZWxwZXJzLnRvcG93ZXIoc3ViLCB2YWx1ZS51bml0c1t1XSk7XG4gICAgICB2YWx1ZSA9IGhlbHBlcnMubXVsdGlwbHkodmFsdWUsIFtbJy4nLCBzdWJdXSk7XG4gICAgICBkZWxldGUgdmFsdWUudW5pdHNbdV07XG4gICAgfSk7XG5cbiAgICByZW1haW5pbmcgPSByZW1haW5pbmdOb25CYXNlVW5pdHModmFsdWUpO1xuICB9XG5cbiAgcmV0dXJuIHZhbHVlO1xufVxuXG5mdW5jdGlvbiBjb25mb3JtYW50KGEsIGIpe1xuICB2YXIgcmV0ID0gdHJ1ZTtcbiAgT2JqZWN0LmtleXMoYS51bml0cylcbiAgLmNvbmNhdChPYmplY3Qua2V5cyhiLnVuaXRzKSlcbiAgLmZvckVhY2goZnVuY3Rpb24oayl7XG4gICAgaWYgKGEudW5pdHNba10gIT09IGIudW5pdHNba10pIHtcbiAgICAgIHJldCA9IGZhbHNlO1xuICAgIH1cbiAgfSk7XG4gIFxuICByZXR1cm4gcmV0O1xufVxuXG5mdW5jdGlvbiBjb252ZXJ0KGZyb21WYWx1ZSwgZnJvbVVuaXRzLCB0b1VuaXRzKXtcbiBmcm9tYyA9IGNhbm9uaWNhbGl6ZShmcm9tVmFsdWUsIGZyb21Vbml0cyk7XG4gdG9jID0gY2Fub25pY2FsaXplKHRvVW5pdHMpO1xuXG4gaWYgKCFjb25mb3JtYW50KGZyb21jLCB0b2MpKXtcbiAgIHRocm93IFwiTm9uLWNvbmZvcm1hbnQgdW5pdHM7IGNhbid0IGNvbnZlcnQgZnJvbSBcIiArIGZyb21Vbml0cyArIFwiIHRvIFwiICsgdG9Vbml0cyA7XG4gfVxuXG4gcmV0dXJuIGZyb21jLnZhbHVlIC8gdG9jLnZhbHVlO1xuXG59XG4iXX0=
