'use strict';

module.exports = function() {
  return {
    budget : {
      authority : 'string',
      locality : 'array',
      name : 'string',
      id : 'string',
      materialIds : 'array',
      reference : 'string',
      deleted : 'boolean',
      commodity : 'string',

      farm : {
        name : 'string',
        size : 'string',
        units : 'string'
      },

      operations : [{
        name : 'string',
        units : 'string',

        schedule : [{
          date : 'string',
          length : 'string',
          units : 'string'
        }],

        materials : [{
          amount : 'number',
          id : 'string',
          name : 'string',
          note : 'string',
          units : 'string'
        }]
      }]
    },

    material : {
      authority : 'string',
      source : 'string',
      class : 'string',
      id : 'string',
      locality : 'array',
      name : 'string',
      description : 'string',
      price : 'number',
      year : 'number',
      type : 'string',
      units : 'string',
      deleted : 'boolean'
    },

    complexMaterial : {
      authority : 'string',
      class : 'string',
      source : 'string',
      id : 'string',
      locality : 'array',
      name : 'string',
      description : 'string',
      type : 'string',
      units : 'string',
      deleted : 'boolean',

      materials : [{
        _object_array_ : true,
        amount : 'number',
        units : 'string'
      }],

      unique : [{
        _object_array_ : true,
        price : 'number',
        units : 'string'
      }]
    }
  };
};
