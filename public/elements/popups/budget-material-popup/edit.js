BudgetMaterialPopup.edit = function(material) {
  if( this.showing && this.data.name != material.name ) {
    if( confirm('Do you want to save your changes before editing new material?') ) {
      this.save(true);
    } else {
      return;
    }
  }

  this.action = 'edit';
  this.$.saveBtn.innerHTML = 'Save';
  this.$.title.innerHTML = 'Edit Material';

  // copy so we don't actually edit anything
  this.data = $.extend(true, {}, material);
  this.$.advancedPanel.data = this.data;

  // make a copy for if we cancel
  this.originalData = $.extend(true, {}, this.data);
  //this.originalUniqueMaterials = [];

  /*if( this.data.name.match(/--/) ) {
    var parts = this.data.name.split('--');
    this.parentMaterial = parts[0];
    this.$.parentMaterial.innerHTML = '<h5 style="border-bottom: 1px solid #ccc; text-align:center">Parent: '+parts[0]+'</h5>';
    this.$.nameInput.value = parts[1];

    this.$.complexGroup.style.display = 'none';
    this.$.advancedBtn.style.display = 'none';
  } else {*/
    this.parentMaterial = null;
    this.$.advancedBtn.style.display = 'inline-block';
    this.$.complexGroup.style.display = 'block';
    this.$.parentMaterial.innerHTML = '';
    this.$.nameInput.value = this.data.name;
  //}

  this.$.descriptionInput.value = this.data.description || '';
  this.$.unitsInputMsg.innerHTML = '';
  this.$.nameInputMessage.innerHTML = '';

  if( this.data.type == 'complex' ) {
    this.setComplex(true);
    this.$.unitsInput.setUnits(this.data.units);

    this.$.priceInput.value = '';

    // keep track of what we assume the amounts for this material are expecting
    this.materialUnits = this.data.units;

    // snapshot all definitions of unique materials
    /*for( var key in this.data.materials ) {
      if( key.match(/--/) ) {
        this.originalUniqueMaterials.push($.extend(true, {}, FB.materialController.get(key)));
      }
    }*/

  } else {
    this.$.unitsInput.setUnits(FB.units.invert(this.data.units));
    this.$.priceInput.value = this.data.price;
    this.setComplex(false);
  }

  /*if( creatingUniqueName ) {
    this.$.uniqueNameInput.value = creatingUniqueName;
    $(this.$.createUniquePanel).show();
  }*/

  this.$.historyBtn.style.display = 'inline-block';
  this.$.removeBtn.style.display = 'inline-block';

  this.recalc();
  this.show();
};
