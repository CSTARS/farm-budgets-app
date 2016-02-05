BudgetMaterialPopup.cancel = function() {
  // remove any unique materials as they were added to the material
  // controller so things didn't break


  // if we were creating
  if( this.action != 'create' ) {
    SDK.controllers.material.add(this.originalData, {replace: true});
  }

  this.hide();
};
