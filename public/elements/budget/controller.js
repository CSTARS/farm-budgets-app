Polymer({
  is : 'ahb-page-budget',

    behaviors : [ BudgetDemo ],

    ready : function() {
      this.rootUrl = '/budget/get?';

      this.recalcTimer = -1;

      this.duration = 12 * 3;  // in months
      this.phaseTotal = 0;
      this.farmSize = 10;
      this.grandTotal = 0;
      this.annualized = 0;

      this.phases = this.getLocalDemo();
      this.recalc();
    },

    attached : function() {
      google.setOnLoadCallback(this.redrawCharts.bind(this));
      $(window).on('resize', this.redrawCharts.bind(this));
    },

    updateCropSize : function(data) {
      this.farmSize = data.size;
      this.cropLabel = data.crop;

      // TODO: defaulting to state for now
      // should pick location based on data.locality;
      this.cropLocality = data.location.state;

      this.$.noData.style.display = 'none';
      this.$.main.style.display = 'block';

      this.query();
    },

    query : function() {
      var url = this.rootUrl+'crop='+this.cropLabel.toUpperCase()+'&location='+STATES[this.cropLocality.toLowerCase()];
      $.get(url, function(resp) {
        this.prepareFromResponse(resp);
        this.recalc();
      }.bind(this));
    },

    prepareFromResponse : function(items) {
      // reset
      for( var i = 0; i < this.phases.length; i++ ) {
        this.phases[i].total = '';
        this.phases[i].operations = [];
      }

      var item, phase;
      for( var i = 0; i < items.length; i++ ) {
        item = items[i];

        item.name = item.material;

        // clean phase names
        if( item.phase == 'annual' ) item.phase = 'Maintain';
        else if( item.phase == '' ) item.phase = '';

        phase = this.getPhase(item.phase);
        if( !phase ) return;

        operation = this.getOperation(phase, item.operation);
        this.addMaterial(operation, item);
      }
    },

    // debounce
    recalc : function() {
      if( this.recalcTimer != -1 ) clearTimeout(this.recalcTimer);

      this.recalcTimer = setTimeout(function(){
        this.recalcTimer = -1;
        this._recalc();
      }.bind(this), 50);
    },

    _recalc : function() {
      this.phaseTotal = 0;
      this.operationTotal = 0;
      this.materialTotal = 0;
      this.grandTotal = 0;

      this.phases.forEach(function(phase){
        phase.total = 0;
        if( !phase.operations ) return;

        phase.operations.forEach(function(operation){
          operation.subtotal = 0;
          operation.total = 0;
          if( !operation.materials ) return;

          operation.timeMultiplier = this.getIntervalMultiplier(operation);

          operation.materials.forEach(function(material){
            // TODO: check units here and update if needed
            material.total = material.price * material.amount;
            material.totalOverTime = material.total * operation.timeMultiplier;

            this.materialTotal += material.totalOverTime;

            operation.subtotal += material.total;
          }.bind(this));


          operation.total = operation.subtotal * operation.timeMultiplier;
          phase.total += operation.total;

          this.operationTotal += operation.total;

        }.bind(this));

        this.phaseTotal += phase.total;
      }.bind(this));

      this.grandTotal = this.phaseTotal * this.farmSize;
      this.annualized = this.grandTotal / this.getDurationInYears();

      this.redrawCharts();

      this.hack();
    },

    redrawCharts : function() {
      if( !window.google ) return;
      var operations = {}, materials = {};

      var width = $(this.$.phaseChartRoot).width();

      // Phase Chart
      var phaseData = [['Phase', '%']];
      this.phases.forEach(function(phase){
        phaseData.push([phase.name, this.getPrecent(phase.total, this.phaseTotal)]);

        if( !phase.operations ) return;
        phase.operations.forEach(function(operation){
          var key = operation.name.replace(/\s/g, '').toLowerCase();

          if( operations[key] ) {
            operations[key].total += operation.total;
          } else {
            operations[key] = {
              name : operation.name,
              total : operation.total
            }
          }

          operation.materials.forEach(function(material){
            key = material.name.replace(/\s/g, '').toLowerCase();

            if( materials[key] ) {
              materials[key].total += material.totalOverTime;
            } else {
              materials[key] = {
                name : material.name,
                total : material.totalOverTime
              }
            }
          }.bind(this));

        }.bind(this));

      }.bind(this));

      var data = google.visualization.arrayToDataTable(phaseData);
      var options = {
        title: 'Phase',
        width: width,
        is3D: true,
        animation:{
          duration: 1000,
          easing: 'out',
        },

        legend : {
          position: 'top',
          maxLines: 3
        },
        height: 400
      };
      if( !this.phaseChart ) {
        this.phaseChart = new google.visualization.PieChart(this.$.phaseChartRoot);
      }
      this.phaseChart.draw(data, options);

      // Operation Chart
      var oppData = [['operation', '%']];
      for( var key in operations ) {
        var operation = operations[key];
        oppData.push([operation.name, this.getPrecent(operation.total, this.operationTotal)]);
      };

      var data = google.visualization.arrayToDataTable(oppData);
      options.title = 'Operation'
      if( !this.operationChart ) {
        this.operationChart = new google.visualization.PieChart(this.$.operationChartRoot);
      }
      this.operationChart.draw(data, options);

      // Material Chart
      var materialData = [['material', '%']];
      for( var key in materials ) {
        var material = materials[key];
        materialData.push([material.name, this.getPrecent(material.total, this.materialTotal)]);
      };

      data = google.visualization.arrayToDataTable(materialData);
      options.title = 'Material'
      if( !this.materialChart ) {
        this.materialChart = new google.visualization.PieChart(this.$.materialChartRoot);
      }
      this.materialChart.draw(data, options);

    },

    getPrecent : function(amount, total) {
      if( total == 0 ) return 0;
      return Math.round(100 * (amount / total));
    },

    getDurationInYears : function() {
      var years = this.duration / 12;
      if( years < 1) years = 1;
      return years;
    },

    // get the multiplier for how often an operation will
    // take place over the course of the crop.
    getIntervalMultiplier : function(operation) {

      if( operation.interval == 'One Time' ) return 1;

      if( operation.interval == 'Annual' ) {
        return Math.ceil(this.duration / 12);
      }

      if( operation.interval == 'Monthly' ) {
        return this.duration;
      }

      if( operation.interval == '__ Per Year' ) {
        return (this.duration / 12) * parseInt(operation.intervalAmount);
      }

      if( operation.interval == 'Once Every __ Years' ) {
        return (this.duration / 12) / parseInt(operation.intervalAmount);
      }

      return 1;
    },

    // As of polymer 1.0.4
    // to update dom-repeat after modifications use this for now
    // a fix should be coming soon....
    hack : function() {
      this.phases = $.extend(true, [], this.phases);
    },

    _setLookup : function() {
        for( var key in this.defaultSchema ) {
            for( var i = 0; i < this.defaultSchema[key].length; i++ ) {
               this.catLookup[this.defaultSchema[key][i].item] = key;
            }
        }
    },

    removeItem : function(e) {
      var operation = e.currentTarget.getAttribute('operation');
      var phase = e.currentTarget.getAttribute('phase');
      var material = e.currentTarget.getAttribute('material');

      var p = this.getPhase(phase);
      var o = this.getOperation(p, operation);

      for( var i = 0; i < o.materials.length; i++ ) {
        if( o.materials[i].name == material ) {
          o.materials.splice(i, 1);
          break;
        }
      }

      if( o.materials.length == 0 ) {
        p.operations.splice(p.operations.indexOf(o), 1);
      }

      this.recalc();
    },

    toggleRemoved : function(e) {
        var category = e.currentTarget.getAttribute('category');
        this.removed[category].opened = !this.removed[category].opened;
    },

    toggle : function(e) {
        var name = e.currentTarget.getAttribute('name');
        this.opened[name] = !this.opened[name];
    },

    toggleAddPhase : function(e) {
      var phase = e.currentTarget.getAttribute('phase');
      var ele = $(this.querySelector('input[phase="'+phase+'"]')).toggle();
      if( ele[0].style.display != 'none' ) ele.focus();
    },

    togglePhase : function(e) {
      var phase = e.currentTarget.getAttribute('phase');
      var ele = this.querySelector('.panel-body[phase="'+phase+'"]');
      if( !ele ) return;

      if( ele.style.display == 'none' ) {
        e.currentTarget.querySelector('i').className = 'fa fa-arrow-down';
        $(ele).show('fast');
      } else {
        e.currentTarget.querySelector('i').className = 'fa fa-arrow-right';
        $(ele).hide('fast');
      }
    },

    toggleOperation : function(e) {
      var phase = e.currentTarget.getAttribute('phase');
      var operation = e.currentTarget.getAttribute('operation');
      var ele = this.querySelector('.operation-panel[phase="'+phase+'"][operation="'+operation+'"]');
      if( !ele ) return;

      if( ele.style.display == 'none' ) {
        e.currentTarget.querySelector('i').className = 'fa fa-arrow-down';
        $(ele).show('fast');
      } else {
        e.currentTarget.querySelector('i').className = 'fa fa-arrow-right';
        $(ele).hide('fast');
      }
    },

    newOppInputKeyPress : function(e) {
      if( e.which == 13 && e.currentTarget.value.length >= 3 ) {

        var phase = e.currentTarget.getAttribute('phase');
        phase = this.getPhase(phase);
        if( !phase ) return;

        operation = this.getOperation(phase, e.currentTarget.value);

        // add empty material
        this.addMaterial(operation);

        this.recalc();
        $(e.currentTarget).hide();

        // make sure panel is show
        setTimeout(function(){
          $(this.querySelector('.panel-body[phase="'+phase.name+'"]')).show('fast');
          this.querySelector('.phase-toggle[phase="'+phase.name+'"] i').className = 'fa fa-arrow-down';
          $(this.querySelector('.operation-panel[phase="'+phase.name+'"][operation="'+operation.name+'"]')).show('fast');
          this.querySelector('.opp-toggle[phase="'+phase.name+'"][operation="'+operation.name+'"] i').className = 'fa fa-arrow-down';
        }.bind(this), 50);

      }
    },

    addLineItem : function(e) {
      var phase = e.currentTarget.getAttribute('phase');
      var operation = e.currentTarget.getAttribute('operation');

      phase = this.getPhase(phase);
      if( !phase ) return;

      operation = this.getOperation(phase, operation);

      this.addMaterial(operation);
    },

    getPhase : function(name) {
      for( var i = 0; i < this.phases.length; i++ ) {
        if( this.phases[i].name.toLowerCase() == name.toLowerCase() ) return this.phases[i];
      }
      return null;
    },

    getOperation : function(phase, name) {
      if( !phase ) return null;
      if( !phase.operations ) phase.operations = [];

      for( var i = 0; i < phase.operations.length; i++ ) {
        if( phase.operations[i].name == name ) return phase.operations[i];
      }

      // return new
      var newOp = {
        name : name,
        total : 1,
        units : 'ac',
        interval : '',
        intervalAmount : 1,
        timeMultiplier : 0
      }
      phase.operations.push(newOp);
      return newOp;
    },

    addMaterial : function(operation, item) {
      if( !operation ) return null;
      if( !operation.materials ) operation.materials = [];

      operation.materials.push({
        name : item ? item.name : '',
        amount : item ? item.amount : 0,
        units : item ? item.unit : '',
        price : item ? item.price : 0
      });

      this.recalc();
    },

    _checkUpdate : function() {
        if( this.location && this.selectedCrop && this.selectedCrop != '' && this.farmSize && this.farmSize != '' ) {
            this.loadLocalityBudget();
        }
    },

    loadLocalityBudget : function() {
        var loc = {};
        var locStr = '';


        if( this.selectedLocality == 'zipCode' ) {
            loc.zipCode = this.location.zipCode;
            locStr = this.location.zipCode;
        } else if ( this.selectedLocality == 'county' ) {
            loc.county = this.location.county;
            loc.state = this.location.state;
            locStr = this.location.county;
        } else {
            loc.state = this.location.state;
            locStr = this.location.state;
        }

        $.get('/budget/get?location='+locStr+'&crop='+this.selectedCrop,
            function(resp) {
                this.setBudget(resp);
            }.bind(this)
        );
    },

    setBudget : function(budgetItems) {
        this.test = [];
        this.opened = {};

        var tmpSchema = {
          planting : {
            name : 'Planting'
          },
          annual : {
            name : 'Annual'
          },
          harvesting : {
            name : 'Harvesting'
          }
        }

        /*
        for( var i = 0; i < budgetItems.length; i++ ) {
            var item = budgetItems[i];
            if( !tmpSchema[item.phase] ) continue;

            item.value = parseFloat(item.amount);
            item.unitCost = parseFloat(item.cost);
            item.total = 0;
            item.removing = false;

        //    tmpSchema[item.phase].schema.push(item);
      }*/

        for( var key in tmpSchema ) {
            this.test.push(tmpSchema[key]);
        }
        console.log(this.test);

        this.$.schema.render();
        //this.updateTotals();
    },

    expandAll : function() {
      var eles = this.querySelectorAll('.panel-body');
      for( var i = 0; i < eles.length; i++ ) eles[i].style.display = 'block';

      eles = this.querySelectorAll('.operation-panel');
      for( var i = 0; i < eles.length; i++ ) eles[i].style.display = 'block';

      var icons = this.querySelectorAll('i.fa.fa-arrow-right');
      for( var i = 0; i < icons.length; i++ ) icons[i].className = 'fa fa-arrow-down';
    },

    collapseAll : function() {
      var eles = this.querySelectorAll('.panel-body');
      for( var i = 0; i < eles.length; i++ ) eles[i].style.display = 'none';

      eles = this.querySelectorAll('.operation-panel');
      for( var i = 0; i < eles.length; i++ ) eles[i].style.display = 'none';

      var icons = this.querySelectorAll('i.fa.fa-arrow-down');
      for( var i = 0; i < icons.length; i++ ) icons[i].className = 'fa fa-arrow-right';
    },

});
