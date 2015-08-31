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
