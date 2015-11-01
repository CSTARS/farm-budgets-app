BudgetMaterialPopup.cancel = function() {
  // remove any unique materials as they were added to the material
  // controller so things didn't break
  /*if( this.data.type == 'complex' ) {
    for( var key in this.data.materials ) {
      if( key.match(/--/) ) {
        FB.materialController.remove(key);
      }
    }
  }*/

  // if we were creating
  if( this.action == 'create' ) {
    // not sure we need to do anything right now...

  // cancel an edit
  } else {
    //var materials = []

    // reset any original unique materials
    //for( var i = 0; i < this.originalUniqueMaterials.length; i++ ) {
    //  materials.push(this.originalUniqueMaterials[i]);
    //}
    //materials.push(this.originalData);

    //FB.materialController.add(this.originalData, {replace: true});
  }
  
  FB.materialController.add(this.originalData, {replace: true});

  this.hide();
};
