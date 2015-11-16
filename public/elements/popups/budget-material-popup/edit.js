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


  this.parentMaterial = null;
  this.$.advancedBtn.style.display = 'inline-block';
  this.$.complexGroup.style.display = 'block';
  this.$.parentMaterial.innerHTML = '';
  this.$.nameInput.value = this.data.name;

  this.$.descriptionInput.value = this.data.description || '';
  this.$.unitsInputMsg.innerHTML = '';
  this.$.nameInputMessage.innerHTML = '';

  if( this.data.type == 'complex' ) {
    this.setComplex(true);
    this.$.unitsInput.setUnits(this.data.units);

    this.$.priceInput.value = '';

    // keep track of what we assume the amounts for this material are expecting
    this.materialUnits = this.data.units;

  } else {
    this.$.unitsInput.setUnits(FB.units.invert(this.data.units));
    this.$.priceInput.value = this.data.price;
    this.setComplex(false);
  }

  // update save btn text and message based on if we are logged in or not
  if( ExpressAuth.user ) {
    this.$.saveBtn.innerHTML = 'Save';
    this.$.saveMsg.style.display = 'none';
  } else {
    this.$.saveMsg.style.display = 'block';
    this.$.saveBtn.innerHTML = 'Update';
  }

  this.$.historyBtn.style.display = 'inline-block';
  this.$.removeBtn.style.display = 'inline-block';

  this.recalc();
  this.show();
};
