var BudgetMaterialPopup = {
  show : function() {
    this.showing = true;
    this.showSimple();
    this.popup.modal('show');
  },

  hide : function() {
    this.showing = false;
    this.popup.modal('hide');
  },

  hidePanels : function() {
    this.$.simplePanel.style.display = 'none';
    this.$.complexPanel.style.display = 'none';
    this.$.advancedPanel.style.display = 'none';
    this.$.historyPanel.style.display = 'none';
    this.$.removePanel.style.display = 'none';
  },

  showMainHeaderFooter : function(show) {
    if( show ) {
      this.$.footer.style.display = 'flex';
      this.$.header.style.display = 'block';
    } else {
      this.$.footer.style.display = 'none';
      this.$.header.style.display = 'none';
    }
  },


  showSimple : function() {
    this.hidePanels();
    this.showMainHeaderFooter(true);

    this.$.simplePanel.style.display = 'block';
    if( this.data.type == 'complex' ) {
      this.$.complexPanel.style.display = 'block';
    }
  },

  showAdvanced : function() {
    this.hidePanels();
    this.showMainHeaderFooter(false);
    this.$.advancedPanel.style.display = 'block';
  },

  showRemove : function() {
    this.hidePanels();
    this.showMainHeaderFooter(false);
    this.$.removePanel.update(this.data);
    this.$.removePanel.style.display = 'block';
  },

  showHistory : function() {
    this.hidePanels();
    this.showMainHeaderFooter(false);
    this.$.historyPanel.style.display = 'block';
  },

  toggleComplex : function() {
    if( !this.data ) return;

    if( this.data.materials ) {
      var keys = Object.keys(this.data.materials).length;

      // BASEPRICE
      // var hasBase = this.data.materials[this.getBasePriceName()];
      // if( keys === 0 || (keys === 1 && hasBase) ){
      if( keys === 0 ){
        delete this.data.materials;
        delete this.data.class;
        this.data.type = 'simple';

        if( this.data.units ) {
          this.data.units = FB.units.invert(this.data.units);
        }

        this.setComplex(false);

      } else if ( confirm('Are your sure you want to make this a simple material?  All required '+
            'materials will be removed') ) {

        delete this.data.materials;
        delete this.data.class;
        this.data.type = 'simple';
        if( this.data.units ) {
          this.data.units = FB.units.invert(this.data.units);
        }

        this.setComplex(false);
      } else {
        this.setComplex(true);
      }

    } else {
      this.data.type = 'complex';
      this.data.materials = {};

      if( this.data.units ) {
        this.data.units = FB.units.invert(this.data.units);
      }

      // as there a simple price set?  make it the base price material
      if( this.data.price !== undefined ) {
        var price = parseFloat(this.$.priceInput.value);

        if( !isNaN(price) ) {

          this.data.materials.Estimate = {
            amount : price,
            units : 'us$'
          }

          this.recalc();
        }
      }


      this.setComplex(true);
    }
  },

  toggleUnique : function() {
    this.$.createUniqueBtn.innerHTML = 'Create';
    $(this.$.createUniquePanel).toggle('slow');
  },

  showUnique : function() {
    $(this.$.createUniquePanel).show('slow');
  },

  setComplex : function(isComplex) {
    // regarless, dismiss the units exhange message
    this.$.unitsInputMsg.innerHTML = '';

    if( isComplex ) {
      this.$.isComplexInput.setAttribute('checked', 'checked');
      this.$.isComplexInput.checked = true;
      this.$.complexPanel.style.display = 'block';

      this.$.priceGroup.style.display = 'none';

      this.$.materialTable.setMaterials(this.data, this.materialTableOptions);
      this.updatePriceLabel();
    } else {
      this.$.isComplexInput.removeAttribute('checked');
      this.$.isComplexInput.checked = false;
      this.$.complexPanel.style.display = 'none';

      this.$.priceGroup.style.display = 'block';
    }
  }
};
