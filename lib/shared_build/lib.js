(function(f){if(typeof exports==="object"&&typeof module!=="undefined"){module.exports=f()}else if(typeof define==="function"&&define.amd){define([],f)}else{var g;if(typeof window!=="undefined"){g=window}else if(typeof global!=="undefined"){g=global}else if(typeof self!=="undefined"){g=self}else{g=this}g.FB = f()}})(function(){var define,module,exports;return (function e(t,n,r){function s(o,u){if(!n[o]){if(!t[o]){var a=typeof require=="function"&&require;if(!u&&a)return a(o,!0);if(i)return i(o,!0);var f=new Error("Cannot find module '"+o+"'");throw f.code="MODULE_NOT_FOUND",f}var l=n[o]={exports:{}};t[o][0].call(l.exports,function(e){var n=t[o][1][e];return s(n?n:e)},l,l.exports,e,t,n,r)}return n[o].exports}var i=typeof require=="function"&&require;for(var o=0;o<r.length;o++)s(r[o]);return s})({"/Users/jrmerz/dev/cstars/AHB/farm-budgets-app/lib/shared/index.js":[function(require,module,exports){
/**
 *  Namespace module
 *  Exposes other modules
 **/

var materialController = require('./materialController');
var operationController = require('./operationController');
operationController.init(materialController);

module.exports = {
  helloWorld : require('./test'),
  operationController : operationController,
  materialController : materialController
};

},{"./materialController":"/Users/jrmerz/dev/cstars/AHB/farm-budgets-app/lib/shared/materialController/index.js","./operationController":"/Users/jrmerz/dev/cstars/AHB/farm-budgets-app/lib/shared/operationController/index.js","./test":"/Users/jrmerz/dev/cstars/AHB/farm-budgets-app/lib/shared/test/index.js"}],"/Users/jrmerz/dev/cstars/AHB/farm-budgets-app/lib/shared/materialController/index.js":[function(require,module,exports){
'use strict';
/**
 * keeps track of materials, prices and complex materials.  mostly for client app.
 **/

 var events = require('events').EventEmitter;
 events = new events();

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

  return error('material '+name+' does not exist');
}

function add(material, options) {
  if( !options ) {
    options = {};
  }

  if( data.materials[material.name] && !options.replace ) {
    return error('material already exists');
  } else if( data.complex[material.name] && !options.replace ) {
    return error('material already exists');
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

  recalc();

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

  return error(name+' is not in the material list');
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
  for( var m in material.materials ) {
    m = get(m);

    if( m.price !== null ) { // doesn't matter if complex or not
      material.materials[m.name].price = getPriceForUnits(m, material.materials[m.name].units);
      price += material.materials[m.name].amount * material.materials[m.name].price;
    } else if ( m.type === 'complex' ) {
      m.price = _recalc(m);

      material.materials[m.name].price = getPriceForUnits(m, material.materials[m.name].units);
      price += material.materials[m.name].amount * material.materials[m.name].price;
    }
  }
  return price;
}

function getPriceForUnits(m, units) {
  if( units && units !== m.units ) {
    // TODO: really you need to convert units here
    console.log('found unit missmatch '+units+' !== '+m.units+'.  need to wire up conversion library. faking');
    return m.price*2;
  }
  return m.price;
}


function success() {
  return {success: true};
}

function error(msg) {
  return {
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

},{"events":"/Users/jrmerz/dev/cstars/AHB/farm-budgets-app/node_modules/grunt-browserify/node_modules/browserify/node_modules/events/events.js"}],"/Users/jrmerz/dev/cstars/AHB/farm-budgets-app/lib/shared/operationController/index.js":[function(require,module,exports){
'use strict';
/**
 * keeps track of materials, prices and complex materials.  mostly for client app.
 **/
var uuid = require('node-uuid');
var events = require('events').EventEmitter;
events = new events();

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

  return error('operation '+(typeof id === 'object' ? id.id : id)+' does not exist');
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
    return error('Operation '+operation.id+' not found');
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

  return error(id+' is not in the material list');
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
          error : materialDef
        });
        continue;
      }

      // was a material amount not specified?
      if( materialImpl.amount === undefined ) {
        materialImpl.warning = warn('No amount set.  Setting to 1.');
        messages.push({
          index : i,
          material : m,
          warning : materialImpl.warning
        });
        materialImpl.amount = 1;
      }

      // to we need to switch units?
      if( materialImpl.units !== undefined && materialImpl.units !== materialDef.units ) {
        messages.push({
          index : i,
          material : m,
          message : 'Converting from '+materialDef.units+' to '+materialImpl.units
        });

        // TODO: need to wire up unit conversions
        materialImpl.price = materialImpl.amount * materialDef.price * 2;
      } else {
        materialImpl.price = materialImpl.amount * materialDef.price;
      }

      // did something bad happen in price calculation?
      if( isNaN(materialImpl.price) ) {
        materialImpl.error = error('Price calculated to NaN.  Material not included in total.');
        messages.push({
          index : i,
          material : m,
          error : materialImpl.error
        });
        continue;
      }

      total += materialImpl.price;
    }

    operation.price = total;
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

function error(msg) {
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

},{}],"/Users/jrmerz/dev/cstars/AHB/farm-budgets-app/node_modules/grunt-browserify/node_modules/browserify/node_modules/events/events.js":[function(require,module,exports){
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

},{}]},{},["/Users/jrmerz/dev/cstars/AHB/farm-budgets-app/lib/shared/index.js"])("/Users/jrmerz/dev/cstars/AHB/farm-budgets-app/lib/shared/index.js")
});
//# sourceMappingURL=data:application/json;charset:utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIm5vZGVfbW9kdWxlcy9ncnVudC1icm93c2VyaWZ5L25vZGVfbW9kdWxlcy9icm93c2VyaWZ5L25vZGVfbW9kdWxlcy9icm93c2VyLXBhY2svX3ByZWx1ZGUuanMiLCJsaWIvc2hhcmVkL2luZGV4LmpzIiwibGliL3NoYXJlZC9tYXRlcmlhbENvbnRyb2xsZXIvaW5kZXguanMiLCJsaWIvc2hhcmVkL29wZXJhdGlvbkNvbnRyb2xsZXIvaW5kZXguanMiLCJsaWIvc2hhcmVkL3Rlc3QvaW5kZXguanMiLCJub2RlX21vZHVsZXMvZ3J1bnQtYnJvd3NlcmlmeS9ub2RlX21vZHVsZXMvYnJvd3NlcmlmeS9ub2RlX21vZHVsZXMvZXZlbnRzL2V2ZW50cy5qcyIsIm5vZGVfbW9kdWxlcy9ub2RlLXV1aWQvdXVpZC5qcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtBQ0FBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUNkQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUNsS0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FDdFBBO0FBQ0E7QUFDQTtBQUNBOztBQ0hBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FDN1NBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EiLCJmaWxlIjoiZ2VuZXJhdGVkLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXNDb250ZW50IjpbIihmdW5jdGlvbiBlKHQsbixyKXtmdW5jdGlvbiBzKG8sdSl7aWYoIW5bb10pe2lmKCF0W29dKXt2YXIgYT10eXBlb2YgcmVxdWlyZT09XCJmdW5jdGlvblwiJiZyZXF1aXJlO2lmKCF1JiZhKXJldHVybiBhKG8sITApO2lmKGkpcmV0dXJuIGkobywhMCk7dmFyIGY9bmV3IEVycm9yKFwiQ2Fubm90IGZpbmQgbW9kdWxlICdcIitvK1wiJ1wiKTt0aHJvdyBmLmNvZGU9XCJNT0RVTEVfTk9UX0ZPVU5EXCIsZn12YXIgbD1uW29dPXtleHBvcnRzOnt9fTt0W29dWzBdLmNhbGwobC5leHBvcnRzLGZ1bmN0aW9uKGUpe3ZhciBuPXRbb11bMV1bZV07cmV0dXJuIHMobj9uOmUpfSxsLGwuZXhwb3J0cyxlLHQsbixyKX1yZXR1cm4gbltvXS5leHBvcnRzfXZhciBpPXR5cGVvZiByZXF1aXJlPT1cImZ1bmN0aW9uXCImJnJlcXVpcmU7Zm9yKHZhciBvPTA7bzxyLmxlbmd0aDtvKyspcyhyW29dKTtyZXR1cm4gc30pIiwiLyoqXG4gKiAgTmFtZXNwYWNlIG1vZHVsZVxuICogIEV4cG9zZXMgb3RoZXIgbW9kdWxlc1xuICoqL1xuXG52YXIgbWF0ZXJpYWxDb250cm9sbGVyID0gcmVxdWlyZSgnLi9tYXRlcmlhbENvbnRyb2xsZXInKTtcbnZhciBvcGVyYXRpb25Db250cm9sbGVyID0gcmVxdWlyZSgnLi9vcGVyYXRpb25Db250cm9sbGVyJyk7XG5vcGVyYXRpb25Db250cm9sbGVyLmluaXQobWF0ZXJpYWxDb250cm9sbGVyKTtcblxubW9kdWxlLmV4cG9ydHMgPSB7XG4gIGhlbGxvV29ybGQgOiByZXF1aXJlKCcuL3Rlc3QnKSxcbiAgb3BlcmF0aW9uQ29udHJvbGxlciA6IG9wZXJhdGlvbkNvbnRyb2xsZXIsXG4gIG1hdGVyaWFsQ29udHJvbGxlciA6IG1hdGVyaWFsQ29udHJvbGxlclxufTtcbiIsIid1c2Ugc3RyaWN0Jztcbi8qKlxuICoga2VlcHMgdHJhY2sgb2YgbWF0ZXJpYWxzLCBwcmljZXMgYW5kIGNvbXBsZXggbWF0ZXJpYWxzLiAgbW9zdGx5IGZvciBjbGllbnQgYXBwLlxuICoqL1xuXG4gdmFyIGV2ZW50cyA9IHJlcXVpcmUoJ2V2ZW50cycpLkV2ZW50RW1pdHRlcjtcbiBldmVudHMgPSBuZXcgZXZlbnRzKCk7XG5cbnZhciBkYXRhID0ge1xuIG1hdGVyaWFscyA6IHt9LFxuIGNvbXBsZXggOiB7fVxufTtcblxuZnVuY3Rpb24gcmVtb3ZlKG5hbWUpIHtcbiAgaWYoIGRhdGEubWF0ZXJpYWxzW25hbWVdICkge1xuICAgIGRlbGV0ZSBkYXRhLm1hdGVyaWFsc1tuYW1lXTtcbiAgICByZXR1cm4gc3VjY2VzcygpO1xuICB9IGVsc2UgaWYoIGRhdGEuY29tcGxleFtuYW1lXSApIHtcbiAgICBkZWxldGUgZGF0YS5jb21wbGV4W25hbWVdO1xuICAgIHJldHVybiBzdWNjZXNzKCk7XG4gIH1cblxuICByZXR1cm4gZXJyb3IoJ21hdGVyaWFsICcrbmFtZSsnIGRvZXMgbm90IGV4aXN0Jyk7XG59XG5cbmZ1bmN0aW9uIGFkZChtYXRlcmlhbCwgb3B0aW9ucykge1xuICBpZiggIW9wdGlvbnMgKSB7XG4gICAgb3B0aW9ucyA9IHt9O1xuICB9XG5cbiAgaWYoIGRhdGEubWF0ZXJpYWxzW21hdGVyaWFsLm5hbWVdICYmICFvcHRpb25zLnJlcGxhY2UgKSB7XG4gICAgcmV0dXJuIGVycm9yKCdtYXRlcmlhbCBhbHJlYWR5IGV4aXN0cycpO1xuICB9IGVsc2UgaWYoIGRhdGEuY29tcGxleFttYXRlcmlhbC5uYW1lXSAmJiAhb3B0aW9ucy5yZXBsYWNlICkge1xuICAgIHJldHVybiBlcnJvcignbWF0ZXJpYWwgYWxyZWFkeSBleGlzdHMnKTtcbiAgfVxuXG4gIGlmKCBtYXRlcmlhbC50eXBlID09PSAnY29tcGxleCcgKSB7XG4gICAgZGF0YS5jb21wbGV4W21hdGVyaWFsLm5hbWVdID0gbWF0ZXJpYWw7XG4gIH0gZWxzZSB7XG4gICAgbWF0ZXJpYWwudHlwZSA9ICdzaW1wbGUnO1xuICAgIGRhdGEubWF0ZXJpYWxzW21hdGVyaWFsLm5hbWVdID0gbWF0ZXJpYWw7XG4gIH1cblxuICBpZiggb3B0aW9ucy5yZW5hbWUgKSB7XG4gICAgcmVtb3ZlKG9wdGlvbnMucmVuYW1lKTtcbiAgfVxuXG4gIHJlY2FsYygpO1xuXG4gIGlmKCAhb3B0aW9ucy5ub0V2ZW50ICkge1xuICAgIGV2ZW50cy5lbWl0KCdtYXRlcmlhbC11cGRhdGUnLCB7XG4gICAgICBtYXRlcmlhbCA6IG1hdGVyaWFsLFxuICAgICAgcmVwbGFjZWQgOiBvcHRpb25zLnJlbmFtZVxuICAgIH0pO1xuICB9XG5cbiAgcmV0dXJuIHN1Y2Nlc3MoKTtcbn1cblxuZnVuY3Rpb24gZ2V0KG5hbWUpIHtcbiAgaWYoICFuYW1lICkge1xuICAgIHJldHVybiBkYXRhO1xuICB9XG5cbiAgaWYoIGRhdGEubWF0ZXJpYWxzW25hbWVdICkge1xuICAgIHJldHVybiBkYXRhLm1hdGVyaWFsc1tuYW1lXTtcbiAgfSBlbHNlIGlmKCBkYXRhLmNvbXBsZXhbbmFtZV0gKSB7XG4gICAgcmV0dXJuIGRhdGEuY29tcGxleFtuYW1lXTtcbiAgfVxuXG4gIHJldHVybiBlcnJvcihuYW1lKycgaXMgbm90IGluIHRoZSBtYXRlcmlhbCBsaXN0Jyk7XG59XG5cbmZ1bmN0aW9uIGZpbmQodHh0LCBpZ25vcmUpIHtcbiAgdmFyIHJlID0gbmV3IFJlZ0V4cCgnLionK3R4dCsnLionLCAnaScpO1xuICB2YXIgcmVzdWx0cyA9IFtdLCBrZXk7XG5cbiAgaWYoIHR4dC5sZW5ndGggPT09IDAgKSB7XG4gICAgcmV0dXJuIHJlc3VsdHM7XG4gIH1cblxuICBmb3IoIGtleSBpbiBkYXRhLm1hdGVyaWFscyApIHtcbiAgICBpZigga2V5Lm1hdGNoKHJlKSAmJiBrZXkgIT09IGlnbm9yZSApIHtcbiAgICAgIHJlc3VsdHMucHVzaChkYXRhLm1hdGVyaWFsc1trZXldKTtcbiAgICB9XG4gIH1cbiAgZm9yKCBrZXkgaW4gZGF0YS5jb21wbGV4ICkge1xuICAgIGlmKCBrZXkubWF0Y2gocmUpICYmIGtleSAhPT0gaWdub3JlICApIHtcbiAgICAgIHJlc3VsdHMucHVzaChkYXRhLmNvbXBsZXhba2V5XSk7XG4gICAgfVxuICB9XG5cbiAgcmV0dXJuIHJlc3VsdHM7XG59XG5cbi8vIHJlY2FsYyBhbGwgY29tcGxleCBtYXRlcmlhbCBjb3N0c1xuZnVuY3Rpb24gcmVjYWxjKCkge1xuICB2YXIgbWF0ZXJpYWw7XG4gIGZvciggbWF0ZXJpYWwgaW4gZGF0YS5jb21wbGV4ICkge1xuICAgIGRhdGEuY29tcGxleFttYXRlcmlhbF0ucHJpY2UgPSBudWxsO1xuICB9XG5cbiAgZm9yKCBtYXRlcmlhbCBpbiBkYXRhLmNvbXBsZXggKSB7XG4gICAgdmFyIG0gPSBkYXRhLmNvbXBsZXhbbWF0ZXJpYWxdO1xuXG4gICAgaWYoIG0ucHJpY2UgIT09IG51bGwgKSB7XG4gICAgICAgIGNvbnRpbnVlO1xuICAgIH1cbiAgICBtLnByaWNlID0gX3JlY2FsYyhtKTtcbiAgfVxufVxuXG5mdW5jdGlvbiBfcmVjYWxjKG1hdGVyaWFsKXtcbiAgdmFyIHByaWNlID0gMDtcbiAgZm9yKCB2YXIgbSBpbiBtYXRlcmlhbC5tYXRlcmlhbHMgKSB7XG4gICAgbSA9IGdldChtKTtcblxuICAgIGlmKCBtLnByaWNlICE9PSBudWxsICkgeyAvLyBkb2Vzbid0IG1hdHRlciBpZiBjb21wbGV4IG9yIG5vdFxuICAgICAgbWF0ZXJpYWwubWF0ZXJpYWxzW20ubmFtZV0ucHJpY2UgPSBnZXRQcmljZUZvclVuaXRzKG0sIG1hdGVyaWFsLm1hdGVyaWFsc1ttLm5hbWVdLnVuaXRzKTtcbiAgICAgIHByaWNlICs9IG1hdGVyaWFsLm1hdGVyaWFsc1ttLm5hbWVdLmFtb3VudCAqIG1hdGVyaWFsLm1hdGVyaWFsc1ttLm5hbWVdLnByaWNlO1xuICAgIH0gZWxzZSBpZiAoIG0udHlwZSA9PT0gJ2NvbXBsZXgnICkge1xuICAgICAgbS5wcmljZSA9IF9yZWNhbGMobSk7XG5cbiAgICAgIG1hdGVyaWFsLm1hdGVyaWFsc1ttLm5hbWVdLnByaWNlID0gZ2V0UHJpY2VGb3JVbml0cyhtLCBtYXRlcmlhbC5tYXRlcmlhbHNbbS5uYW1lXS51bml0cyk7XG4gICAgICBwcmljZSArPSBtYXRlcmlhbC5tYXRlcmlhbHNbbS5uYW1lXS5hbW91bnQgKiBtYXRlcmlhbC5tYXRlcmlhbHNbbS5uYW1lXS5wcmljZTtcbiAgICB9XG4gIH1cbiAgcmV0dXJuIHByaWNlO1xufVxuXG5mdW5jdGlvbiBnZXRQcmljZUZvclVuaXRzKG0sIHVuaXRzKSB7XG4gIGlmKCB1bml0cyAmJiB1bml0cyAhPT0gbS51bml0cyApIHtcbiAgICAvLyBUT0RPOiByZWFsbHkgeW91IG5lZWQgdG8gY29udmVydCB1bml0cyBoZXJlXG4gICAgY29uc29sZS5sb2coJ2ZvdW5kIHVuaXQgbWlzc21hdGNoICcrdW5pdHMrJyAhPT0gJyttLnVuaXRzKycuICBuZWVkIHRvIHdpcmUgdXAgY29udmVyc2lvbiBsaWJyYXJ5LiBmYWtpbmcnKTtcbiAgICByZXR1cm4gbS5wcmljZSoyO1xuICB9XG4gIHJldHVybiBtLnByaWNlO1xufVxuXG5cbmZ1bmN0aW9uIHN1Y2Nlc3MoKSB7XG4gIHJldHVybiB7c3VjY2VzczogdHJ1ZX07XG59XG5cbmZ1bmN0aW9uIGVycm9yKG1zZykge1xuICByZXR1cm4ge1xuICAgIGVycm9yIDogdHJ1ZSxcbiAgICBtZXNzYWdlIDogbXNnXG4gIH07XG59XG5cblxubW9kdWxlLmV4cG9ydHMgPSB7XG4gIGFkZCA6IGFkZCxcbiAgZ2V0IDogZ2V0LFxuICByZW1vdmUgOiByZW1vdmUsXG4gIGZpbmQgOiBmaW5kLFxuICBvbiA6IGZ1bmN0aW9uKGV2ZW50LCBsaXN0ZW5lcil7XG4gICAgZXZlbnRzLm9uKGV2ZW50LCBsaXN0ZW5lcik7XG4gIH0sXG4gIHJlY2FsYyA6IHJlY2FsY1xufTtcbiIsIid1c2Ugc3RyaWN0Jztcbi8qKlxuICoga2VlcHMgdHJhY2sgb2YgbWF0ZXJpYWxzLCBwcmljZXMgYW5kIGNvbXBsZXggbWF0ZXJpYWxzLiAgbW9zdGx5IGZvciBjbGllbnQgYXBwLlxuICoqL1xudmFyIHV1aWQgPSByZXF1aXJlKCdub2RlLXV1aWQnKTtcbnZhciBldmVudHMgPSByZXF1aXJlKCdldmVudHMnKS5FdmVudEVtaXR0ZXI7XG5ldmVudHMgPSBuZXcgZXZlbnRzKCk7XG5cbnZhciBkYXRhID0gW10sIG1hdGVyaWFsQ29udHJvbGxlciwgbGFzdFJlY2FsY01zZztcblxuZnVuY3Rpb24gaW5pdChjb250cm9sbGVyKSB7XG4gIG1hdGVyaWFsQ29udHJvbGxlciA9IGNvbnRyb2xsZXI7XG5cbiAgbWF0ZXJpYWxDb250cm9sbGVyLm9uKCdtYXRlcmlhbC11cGRhdGUnLCBoYW5kbGVNYXRlcmlhbFVwZGF0ZXMpO1xufVxuXG5mdW5jdGlvbiByZW1vdmUoaWQpIHtcbiAgaWYoIHR5cGVvZiBpZCA9PT0gJ29iamVjdCcgJiYgZGF0YS5pbmRleE9mKGlkKSA+IC0xICkge1xuICAgIGRhdGEuc3BsaWNlKGRhdGEuaW5kZXhPZihpZCksIDEpO1xuICAgIHJldHVybiBzdWNjZXNzKCk7XG4gIH0gZWxzZSB7XG4gICAgZm9yKCB2YXIgaSA9IDA7IGkgPCBkYXRhLmxlbmd0aDsgaSsrICkge1xuICAgICAgaWYoIGRhdGFbaV0uaWQgPT09IGlkICApIHtcbiAgICAgICAgZGF0YS5zcGxpY2UoaSwgMSk7XG4gICAgICAgIHJldHVybiBzdWNjZXNzKCk7XG4gICAgICB9XG4gICAgfVxuICB9XG5cbiAgcmV0dXJuIGVycm9yKCdvcGVyYXRpb24gJysodHlwZW9mIGlkID09PSAnb2JqZWN0JyA/IGlkLmlkIDogaWQpKycgZG9lcyBub3QgZXhpc3QnKTtcbn1cblxuZnVuY3Rpb24gYWRkKG9wZXJhdGlvbiwgb3B0aW9ucykge1xuICBpZiggIW9wdGlvbnMgKSB7XG4gICAgb3B0aW9ucyA9IHt9O1xuICB9XG5cbiAgb3BlcmF0aW9uLmlkID0gdXVpZC52NCgpO1xuICBkYXRhLnB1c2gob3BlcmF0aW9uKTtcblxuICByZWNhbGMoKTtcblxuICBpZiggIW9wdGlvbnMubm9FdmVudCApIHtcbiAgICBldmVudHMuZW1pdCgnb3BlcmF0aW9uLXVwZGF0ZScsIHtcbiAgICAgIG9wZXJhdGlvbiA6IG9wZXJhdGlvblxuICAgIH0pO1xuICB9XG5cbiAgcmV0dXJuIHN1Y2Nlc3MoKTtcbn1cblxuZnVuY3Rpb24gdXBkYXRlKG9wZXJhdGlvbiwgb3B0aW9ucykge1xuICBpZiggIW9wdGlvbnMgKSB7XG4gICAgb3B0aW9ucyA9IHt9O1xuICB9XG5cbiAgdmFyIGZvdW5kID0gZmFsc2U7XG4gIGZvciggdmFyIGkgPSAwOyBpIDwgZGF0YS5sZW5ndGg7IGkrKyApIHtcbiAgICBpZiggb3BlcmF0aW9uLmlkID09PSBkYXRhW2ldLmlkICkge1xuICAgICAgZGF0YVtpXSA9IG9wZXJhdGlvbjtcbiAgICAgIGZvdW5kID0gdHJ1ZTtcbiAgICAgIGJyZWFrO1xuICAgIH1cbiAgfVxuXG4gIGlmKCAhZm91bmQgKSB7XG4gICAgcmV0dXJuIGVycm9yKCdPcGVyYXRpb24gJytvcGVyYXRpb24uaWQrJyBub3QgZm91bmQnKTtcbiAgfVxuXG4gIHJlY2FsYygpO1xuXG4gIGlmKCAhb3B0aW9ucy5ub0V2ZW50ICkge1xuICAgIGV2ZW50cy5lbWl0KCdvcGVyYXRpb24tdXBkYXRlJywge1xuICAgICAgb3BlcmF0aW9uIDogb3BlcmF0aW9uXG4gICAgfSk7XG4gIH1cblxuICByZXR1cm4gc3VjY2VzcygpO1xufVxuXG5mdW5jdGlvbiBnZXQoaWQpIHtcbiAgaWYoICFpZCApIHtcbiAgICByZXR1cm4gZGF0YTtcbiAgfVxuXG4gIGZvciggdmFyIGkgPSAwOyBpIDwgZGF0YS5sZW5ndGg7IGkrKyApIHtcbiAgICBpZiggZGF0YVtpXS5pZCA9PT0gaWQgKSB7XG4gICAgICByZXR1cm4gZGF0YVtpXTtcbiAgICB9XG4gIH1cblxuICByZXR1cm4gZXJyb3IoaWQrJyBpcyBub3QgaW4gdGhlIG1hdGVyaWFsIGxpc3QnKTtcbn1cblxuZnVuY3Rpb24gZmluZCh0eHQsIGlnbm9yZSkge1xuICB2YXIgcmUgPSBuZXcgUmVnRXhwKCcuKicrdHh0KycuKicsICdpJyk7XG4gIHZhciByZXN1bHRzID0gW10sIGtleTtcblxuICBpZiggdHh0Lmxlbmd0aCA9PT0gMCApIHtcbiAgICByZXR1cm4gcmVzdWx0cztcbiAgfVxuXG4gIGZvciggdmFyIGkgPSAwOyBpIDwgZGF0YS5sZW5ndGg7IGkrKyApIHtcbiAgICBpZiggZGF0YVtpXS5tYXRjaChyZSkgJiYgZGF0YVtpXSAhPT0gaWdub3JlICkge1xuICAgICAgcmVzdWx0cy5wdXNoKGRhdGFbaV0pO1xuICAgIH1cbiAgfVxuXG4gIHJldHVybiByZXN1bHRzO1xufVxuXG4vLyByZWNhbGMgYWxsIGNvbXBsZXggbWF0ZXJpYWwgY29zdHNcbmZ1bmN0aW9uIHJlY2FsYygpIHtcbiAgdmFyIG9wZXJhdGlvbiwgbWF0ZXJpYWxEZWYsIG1hdGVyaWFsSW1wbCwgdG90YWwsIG1lc3NhZ2VzID0gW107XG5cbiAgZm9yKCB2YXIgaSA9IDA7IGkgPCBkYXRhLmxlbmd0aDsgaSsrICkge1xuICAgIHRvdGFsID0gMDtcbiAgICBvcGVyYXRpb24gPSBkYXRhW2ldO1xuXG4gICAgZm9yKCB2YXIgbSBpbiBvcGVyYXRpb24ubWF0ZXJpYWxzICkge1xuICAgICAgbWF0ZXJpYWxJbXBsID0gb3BlcmF0aW9uLm1hdGVyaWFsc1ttXTtcbiAgICAgIG1hdGVyaWFsRGVmID0gbWF0ZXJpYWxDb250cm9sbGVyLmdldChtKTtcblxuICAgICAgLy8gd2FzIGEgc3BlY2lmaWVkIG1hdGVyaWFsIG5vdCBmb3VuZD9cbiAgICAgIGlmKCBtYXRlcmlhbERlZi5lcnJvciApIHtcbiAgICAgICAgbWF0ZXJpYWxJbXBsLmVycm9yID0gbWF0ZXJpYWxEZWY7IC8vIHRoaXMgaXMgYWN0dWFsbHkgdGhlIGVycm9yIHJlc3BvbnNlIG9iamVjdFxuICAgICAgICBtZXNzYWdlcy5wdXNoKHtcbiAgICAgICAgICBpbmRleCA6IGksXG4gICAgICAgICAgbWF0ZXJpYWwgOiBtLFxuICAgICAgICAgIGVycm9yIDogbWF0ZXJpYWxEZWZcbiAgICAgICAgfSk7XG4gICAgICAgIGNvbnRpbnVlO1xuICAgICAgfVxuXG4gICAgICAvLyB3YXMgYSBtYXRlcmlhbCBhbW91bnQgbm90IHNwZWNpZmllZD9cbiAgICAgIGlmKCBtYXRlcmlhbEltcGwuYW1vdW50ID09PSB1bmRlZmluZWQgKSB7XG4gICAgICAgIG1hdGVyaWFsSW1wbC53YXJuaW5nID0gd2FybignTm8gYW1vdW50IHNldC4gIFNldHRpbmcgdG8gMS4nKTtcbiAgICAgICAgbWVzc2FnZXMucHVzaCh7XG4gICAgICAgICAgaW5kZXggOiBpLFxuICAgICAgICAgIG1hdGVyaWFsIDogbSxcbiAgICAgICAgICB3YXJuaW5nIDogbWF0ZXJpYWxJbXBsLndhcm5pbmdcbiAgICAgICAgfSk7XG4gICAgICAgIG1hdGVyaWFsSW1wbC5hbW91bnQgPSAxO1xuICAgICAgfVxuXG4gICAgICAvLyB0byB3ZSBuZWVkIHRvIHN3aXRjaCB1bml0cz9cbiAgICAgIGlmKCBtYXRlcmlhbEltcGwudW5pdHMgIT09IHVuZGVmaW5lZCAmJiBtYXRlcmlhbEltcGwudW5pdHMgIT09IG1hdGVyaWFsRGVmLnVuaXRzICkge1xuICAgICAgICBtZXNzYWdlcy5wdXNoKHtcbiAgICAgICAgICBpbmRleCA6IGksXG4gICAgICAgICAgbWF0ZXJpYWwgOiBtLFxuICAgICAgICAgIG1lc3NhZ2UgOiAnQ29udmVydGluZyBmcm9tICcrbWF0ZXJpYWxEZWYudW5pdHMrJyB0byAnK21hdGVyaWFsSW1wbC51bml0c1xuICAgICAgICB9KTtcblxuICAgICAgICAvLyBUT0RPOiBuZWVkIHRvIHdpcmUgdXAgdW5pdCBjb252ZXJzaW9uc1xuICAgICAgICBtYXRlcmlhbEltcGwucHJpY2UgPSBtYXRlcmlhbEltcGwuYW1vdW50ICogbWF0ZXJpYWxEZWYucHJpY2UgKiAyO1xuICAgICAgfSBlbHNlIHtcbiAgICAgICAgbWF0ZXJpYWxJbXBsLnByaWNlID0gbWF0ZXJpYWxJbXBsLmFtb3VudCAqIG1hdGVyaWFsRGVmLnByaWNlO1xuICAgICAgfVxuXG4gICAgICAvLyBkaWQgc29tZXRoaW5nIGJhZCBoYXBwZW4gaW4gcHJpY2UgY2FsY3VsYXRpb24/XG4gICAgICBpZiggaXNOYU4obWF0ZXJpYWxJbXBsLnByaWNlKSApIHtcbiAgICAgICAgbWF0ZXJpYWxJbXBsLmVycm9yID0gZXJyb3IoJ1ByaWNlIGNhbGN1bGF0ZWQgdG8gTmFOLiAgTWF0ZXJpYWwgbm90IGluY2x1ZGVkIGluIHRvdGFsLicpO1xuICAgICAgICBtZXNzYWdlcy5wdXNoKHtcbiAgICAgICAgICBpbmRleCA6IGksXG4gICAgICAgICAgbWF0ZXJpYWwgOiBtLFxuICAgICAgICAgIGVycm9yIDogbWF0ZXJpYWxJbXBsLmVycm9yXG4gICAgICAgIH0pO1xuICAgICAgICBjb250aW51ZTtcbiAgICAgIH1cblxuICAgICAgdG90YWwgKz0gbWF0ZXJpYWxJbXBsLnByaWNlO1xuICAgIH1cblxuICAgIG9wZXJhdGlvbi5wcmljZSA9IHRvdGFsO1xuICB9XG5cbiAgbGFzdFJlY2FsY01zZyA9IG1lc3NhZ2VzO1xuICByZXR1cm4gbWVzc2FnZXM7XG59XG5cbmZ1bmN0aW9uIGhhbmRsZU1hdGVyaWFsVXBkYXRlcyhlKSB7XG4gIHZhciBtYXRlcmlhbCA9IGUubWF0ZXJpYWw7XG4gIHZhciByZXBsYWNlZCA9IGUucmVwbGFjZWQ7XG5cbiAgcmVjYWxjKCk7XG5cbiAgZm9yKCB2YXIgaSA9IDA7IGkgPCBkYXRhLmxlbmd0aDsgaSsrICkge1xuICAgIHZhciBvcGVyYXRpb24gPSBkYXRhW2ldO1xuICAgIHZhciBmaXJlQ2hhbmdlID0gZmFsc2U7XG5cbiAgICBmb3IoIHZhciBtIGluIG9wZXJhdGlvbi5tYXRlcmlhbHMgKSB7XG4gICAgICAvLyB1cGRhdGUgYW55IHJlbmFtZXNcbiAgICAgIGlmKCBtID09PSByZXBsYWNlZCApIHtcbiAgICAgICAgb3BlcmF0aW9uLm1hdGVyaWFsc1ttXS5uYW1lID0gbWF0ZXJpYWwubmFtZTtcbiAgICAgICAgb3BlcmF0aW9uLm1hdGVyaWFsc1ttXSA9IG9wZXJhdGlvbi5tYXRlcmlhbHNbcmVwbGFjZWRdO1xuICAgICAgICBkZWxldGUgb3BlcmF0aW9uLm1hdGVyaWFsc1ttXTtcbiAgICAgICAgZmlyZUNoYW5nZSA9IHRydWU7XG5cbiAgICAgIC8vIGxvb2sgdG8gc2VlIGlmIHRoaXMgb3BlcmF0aW9uIGhhcyB0aGUgdXBkYXRlZCBtYXRlcmlhbFxuICAgICAgfSBlbHNlIGlmKCBtID09PSBtYXRlcmlhbC5uYW1lICkge1xuICAgICAgICBmaXJlQ2hhbmdlID0gdHJ1ZTtcbiAgICAgIH1cbiAgICB9XG5cbiAgICBpZiggZmlyZUNoYW5nZSApIHtcbiAgICAgIGV2ZW50cy5lbWl0KCdvcGVyYXRpb24tdXBkYXRlJywgb3BlcmF0aW9uKTtcbiAgICB9XG4gIH1cbn1cblxuZnVuY3Rpb24gZ2V0TGFzdFJlY2FsY01zZygpIHtcbiAgcmV0dXJuIGxhc3RSZWNhbGNNc2c7XG59XG5cbmZ1bmN0aW9uIHN1Y2Nlc3MoKSB7XG4gIHJldHVybiB7c3VjY2VzczogdHJ1ZX07XG59XG5cbmZ1bmN0aW9uIGVycm9yKG1zZykge1xuICByZXR1cm4ge1xuICAgIGVycm9yIDogdHJ1ZSxcbiAgICBtZXNzYWdlIDogbXNnXG4gIH07XG59XG5cbmZ1bmN0aW9uIHdhcm4obXNnKSB7XG4gIHJldHVybiB7XG4gICAgd2Fycm5pbmcgOiB0cnVlLFxuICAgIG1lc3NhZ2UgOiBtc2dcbiAgfTtcbn1cblxuXG5tb2R1bGUuZXhwb3J0cyA9IHtcbiAgYWRkIDogYWRkLFxuICBnZXQgOiBnZXQsXG4gIHJlbW92ZSA6IHJlbW92ZSxcbiAgdXBkYXRlIDogdXBkYXRlLFxuICBmaW5kIDogZmluZCxcbiAgb24gOiBmdW5jdGlvbihldmVudCwgbGlzdGVuZXIpe1xuICAgIGV2ZW50cy5vbihldmVudCwgbGlzdGVuZXIpO1xuICB9LFxuICByZWNhbGMgOiByZWNhbGMsXG4gIGluaXQgOiBpbml0LFxuICBnZXRMYXN0UmVjYWxjTXNnIDogZ2V0TGFzdFJlY2FsY01zZ1xufTtcbiIsIm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24oKSB7XG4gIGNvbnNvbGUubG9nKCdIZWxsbyBXb3JsZCcpO1xufVxuIiwiLy8gQ29weXJpZ2h0IEpveWVudCwgSW5jLiBhbmQgb3RoZXIgTm9kZSBjb250cmlidXRvcnMuXG4vL1xuLy8gUGVybWlzc2lvbiBpcyBoZXJlYnkgZ3JhbnRlZCwgZnJlZSBvZiBjaGFyZ2UsIHRvIGFueSBwZXJzb24gb2J0YWluaW5nIGFcbi8vIGNvcHkgb2YgdGhpcyBzb2Z0d2FyZSBhbmQgYXNzb2NpYXRlZCBkb2N1bWVudGF0aW9uIGZpbGVzICh0aGVcbi8vIFwiU29mdHdhcmVcIiksIHRvIGRlYWwgaW4gdGhlIFNvZnR3YXJlIHdpdGhvdXQgcmVzdHJpY3Rpb24sIGluY2x1ZGluZ1xuLy8gd2l0aG91dCBsaW1pdGF0aW9uIHRoZSByaWdodHMgdG8gdXNlLCBjb3B5LCBtb2RpZnksIG1lcmdlLCBwdWJsaXNoLFxuLy8gZGlzdHJpYnV0ZSwgc3VibGljZW5zZSwgYW5kL29yIHNlbGwgY29waWVzIG9mIHRoZSBTb2Z0d2FyZSwgYW5kIHRvIHBlcm1pdFxuLy8gcGVyc29ucyB0byB3aG9tIHRoZSBTb2Z0d2FyZSBpcyBmdXJuaXNoZWQgdG8gZG8gc28sIHN1YmplY3QgdG8gdGhlXG4vLyBmb2xsb3dpbmcgY29uZGl0aW9uczpcbi8vXG4vLyBUaGUgYWJvdmUgY29weXJpZ2h0IG5vdGljZSBhbmQgdGhpcyBwZXJtaXNzaW9uIG5vdGljZSBzaGFsbCBiZSBpbmNsdWRlZFxuLy8gaW4gYWxsIGNvcGllcyBvciBzdWJzdGFudGlhbCBwb3J0aW9ucyBvZiB0aGUgU29mdHdhcmUuXG4vL1xuLy8gVEhFIFNPRlRXQVJFIElTIFBST1ZJREVEIFwiQVMgSVNcIiwgV0lUSE9VVCBXQVJSQU5UWSBPRiBBTlkgS0lORCwgRVhQUkVTU1xuLy8gT1IgSU1QTElFRCwgSU5DTFVESU5HIEJVVCBOT1QgTElNSVRFRCBUTyBUSEUgV0FSUkFOVElFUyBPRlxuLy8gTUVSQ0hBTlRBQklMSVRZLCBGSVRORVNTIEZPUiBBIFBBUlRJQ1VMQVIgUFVSUE9TRSBBTkQgTk9OSU5GUklOR0VNRU5ULiBJTlxuLy8gTk8gRVZFTlQgU0hBTEwgVEhFIEFVVEhPUlMgT1IgQ09QWVJJR0hUIEhPTERFUlMgQkUgTElBQkxFIEZPUiBBTlkgQ0xBSU0sXG4vLyBEQU1BR0VTIE9SIE9USEVSIExJQUJJTElUWSwgV0hFVEhFUiBJTiBBTiBBQ1RJT04gT0YgQ09OVFJBQ1QsIFRPUlQgT1Jcbi8vIE9USEVSV0lTRSwgQVJJU0lORyBGUk9NLCBPVVQgT0YgT1IgSU4gQ09OTkVDVElPTiBXSVRIIFRIRSBTT0ZUV0FSRSBPUiBUSEVcbi8vIFVTRSBPUiBPVEhFUiBERUFMSU5HUyBJTiBUSEUgU09GVFdBUkUuXG5cbmZ1bmN0aW9uIEV2ZW50RW1pdHRlcigpIHtcbiAgdGhpcy5fZXZlbnRzID0gdGhpcy5fZXZlbnRzIHx8IHt9O1xuICB0aGlzLl9tYXhMaXN0ZW5lcnMgPSB0aGlzLl9tYXhMaXN0ZW5lcnMgfHwgdW5kZWZpbmVkO1xufVxubW9kdWxlLmV4cG9ydHMgPSBFdmVudEVtaXR0ZXI7XG5cbi8vIEJhY2t3YXJkcy1jb21wYXQgd2l0aCBub2RlIDAuMTAueFxuRXZlbnRFbWl0dGVyLkV2ZW50RW1pdHRlciA9IEV2ZW50RW1pdHRlcjtcblxuRXZlbnRFbWl0dGVyLnByb3RvdHlwZS5fZXZlbnRzID0gdW5kZWZpbmVkO1xuRXZlbnRFbWl0dGVyLnByb3RvdHlwZS5fbWF4TGlzdGVuZXJzID0gdW5kZWZpbmVkO1xuXG4vLyBCeSBkZWZhdWx0IEV2ZW50RW1pdHRlcnMgd2lsbCBwcmludCBhIHdhcm5pbmcgaWYgbW9yZSB0aGFuIDEwIGxpc3RlbmVycyBhcmVcbi8vIGFkZGVkIHRvIGl0LiBUaGlzIGlzIGEgdXNlZnVsIGRlZmF1bHQgd2hpY2ggaGVscHMgZmluZGluZyBtZW1vcnkgbGVha3MuXG5FdmVudEVtaXR0ZXIuZGVmYXVsdE1heExpc3RlbmVycyA9IDEwO1xuXG4vLyBPYnZpb3VzbHkgbm90IGFsbCBFbWl0dGVycyBzaG91bGQgYmUgbGltaXRlZCB0byAxMC4gVGhpcyBmdW5jdGlvbiBhbGxvd3Ncbi8vIHRoYXQgdG8gYmUgaW5jcmVhc2VkLiBTZXQgdG8gemVybyBmb3IgdW5saW1pdGVkLlxuRXZlbnRFbWl0dGVyLnByb3RvdHlwZS5zZXRNYXhMaXN0ZW5lcnMgPSBmdW5jdGlvbihuKSB7XG4gIGlmICghaXNOdW1iZXIobikgfHwgbiA8IDAgfHwgaXNOYU4obikpXG4gICAgdGhyb3cgVHlwZUVycm9yKCduIG11c3QgYmUgYSBwb3NpdGl2ZSBudW1iZXInKTtcbiAgdGhpcy5fbWF4TGlzdGVuZXJzID0gbjtcbiAgcmV0dXJuIHRoaXM7XG59O1xuXG5FdmVudEVtaXR0ZXIucHJvdG90eXBlLmVtaXQgPSBmdW5jdGlvbih0eXBlKSB7XG4gIHZhciBlciwgaGFuZGxlciwgbGVuLCBhcmdzLCBpLCBsaXN0ZW5lcnM7XG5cbiAgaWYgKCF0aGlzLl9ldmVudHMpXG4gICAgdGhpcy5fZXZlbnRzID0ge307XG5cbiAgLy8gSWYgdGhlcmUgaXMgbm8gJ2Vycm9yJyBldmVudCBsaXN0ZW5lciB0aGVuIHRocm93LlxuICBpZiAodHlwZSA9PT0gJ2Vycm9yJykge1xuICAgIGlmICghdGhpcy5fZXZlbnRzLmVycm9yIHx8XG4gICAgICAgIChpc09iamVjdCh0aGlzLl9ldmVudHMuZXJyb3IpICYmICF0aGlzLl9ldmVudHMuZXJyb3IubGVuZ3RoKSkge1xuICAgICAgZXIgPSBhcmd1bWVudHNbMV07XG4gICAgICBpZiAoZXIgaW5zdGFuY2VvZiBFcnJvcikge1xuICAgICAgICB0aHJvdyBlcjsgLy8gVW5oYW5kbGVkICdlcnJvcicgZXZlbnRcbiAgICAgIH1cbiAgICAgIHRocm93IFR5cGVFcnJvcignVW5jYXVnaHQsIHVuc3BlY2lmaWVkIFwiZXJyb3JcIiBldmVudC4nKTtcbiAgICB9XG4gIH1cblxuICBoYW5kbGVyID0gdGhpcy5fZXZlbnRzW3R5cGVdO1xuXG4gIGlmIChpc1VuZGVmaW5lZChoYW5kbGVyKSlcbiAgICByZXR1cm4gZmFsc2U7XG5cbiAgaWYgKGlzRnVuY3Rpb24oaGFuZGxlcikpIHtcbiAgICBzd2l0Y2ggKGFyZ3VtZW50cy5sZW5ndGgpIHtcbiAgICAgIC8vIGZhc3QgY2FzZXNcbiAgICAgIGNhc2UgMTpcbiAgICAgICAgaGFuZGxlci5jYWxsKHRoaXMpO1xuICAgICAgICBicmVhaztcbiAgICAgIGNhc2UgMjpcbiAgICAgICAgaGFuZGxlci5jYWxsKHRoaXMsIGFyZ3VtZW50c1sxXSk7XG4gICAgICAgIGJyZWFrO1xuICAgICAgY2FzZSAzOlxuICAgICAgICBoYW5kbGVyLmNhbGwodGhpcywgYXJndW1lbnRzWzFdLCBhcmd1bWVudHNbMl0pO1xuICAgICAgICBicmVhaztcbiAgICAgIC8vIHNsb3dlclxuICAgICAgZGVmYXVsdDpcbiAgICAgICAgbGVuID0gYXJndW1lbnRzLmxlbmd0aDtcbiAgICAgICAgYXJncyA9IG5ldyBBcnJheShsZW4gLSAxKTtcbiAgICAgICAgZm9yIChpID0gMTsgaSA8IGxlbjsgaSsrKVxuICAgICAgICAgIGFyZ3NbaSAtIDFdID0gYXJndW1lbnRzW2ldO1xuICAgICAgICBoYW5kbGVyLmFwcGx5KHRoaXMsIGFyZ3MpO1xuICAgIH1cbiAgfSBlbHNlIGlmIChpc09iamVjdChoYW5kbGVyKSkge1xuICAgIGxlbiA9IGFyZ3VtZW50cy5sZW5ndGg7XG4gICAgYXJncyA9IG5ldyBBcnJheShsZW4gLSAxKTtcbiAgICBmb3IgKGkgPSAxOyBpIDwgbGVuOyBpKyspXG4gICAgICBhcmdzW2kgLSAxXSA9IGFyZ3VtZW50c1tpXTtcblxuICAgIGxpc3RlbmVycyA9IGhhbmRsZXIuc2xpY2UoKTtcbiAgICBsZW4gPSBsaXN0ZW5lcnMubGVuZ3RoO1xuICAgIGZvciAoaSA9IDA7IGkgPCBsZW47IGkrKylcbiAgICAgIGxpc3RlbmVyc1tpXS5hcHBseSh0aGlzLCBhcmdzKTtcbiAgfVxuXG4gIHJldHVybiB0cnVlO1xufTtcblxuRXZlbnRFbWl0dGVyLnByb3RvdHlwZS5hZGRMaXN0ZW5lciA9IGZ1bmN0aW9uKHR5cGUsIGxpc3RlbmVyKSB7XG4gIHZhciBtO1xuXG4gIGlmICghaXNGdW5jdGlvbihsaXN0ZW5lcikpXG4gICAgdGhyb3cgVHlwZUVycm9yKCdsaXN0ZW5lciBtdXN0IGJlIGEgZnVuY3Rpb24nKTtcblxuICBpZiAoIXRoaXMuX2V2ZW50cylcbiAgICB0aGlzLl9ldmVudHMgPSB7fTtcblxuICAvLyBUbyBhdm9pZCByZWN1cnNpb24gaW4gdGhlIGNhc2UgdGhhdCB0eXBlID09PSBcIm5ld0xpc3RlbmVyXCIhIEJlZm9yZVxuICAvLyBhZGRpbmcgaXQgdG8gdGhlIGxpc3RlbmVycywgZmlyc3QgZW1pdCBcIm5ld0xpc3RlbmVyXCIuXG4gIGlmICh0aGlzLl9ldmVudHMubmV3TGlzdGVuZXIpXG4gICAgdGhpcy5lbWl0KCduZXdMaXN0ZW5lcicsIHR5cGUsXG4gICAgICAgICAgICAgIGlzRnVuY3Rpb24obGlzdGVuZXIubGlzdGVuZXIpID9cbiAgICAgICAgICAgICAgbGlzdGVuZXIubGlzdGVuZXIgOiBsaXN0ZW5lcik7XG5cbiAgaWYgKCF0aGlzLl9ldmVudHNbdHlwZV0pXG4gICAgLy8gT3B0aW1pemUgdGhlIGNhc2Ugb2Ygb25lIGxpc3RlbmVyLiBEb24ndCBuZWVkIHRoZSBleHRyYSBhcnJheSBvYmplY3QuXG4gICAgdGhpcy5fZXZlbnRzW3R5cGVdID0gbGlzdGVuZXI7XG4gIGVsc2UgaWYgKGlzT2JqZWN0KHRoaXMuX2V2ZW50c1t0eXBlXSkpXG4gICAgLy8gSWYgd2UndmUgYWxyZWFkeSBnb3QgYW4gYXJyYXksIGp1c3QgYXBwZW5kLlxuICAgIHRoaXMuX2V2ZW50c1t0eXBlXS5wdXNoKGxpc3RlbmVyKTtcbiAgZWxzZVxuICAgIC8vIEFkZGluZyB0aGUgc2Vjb25kIGVsZW1lbnQsIG5lZWQgdG8gY2hhbmdlIHRvIGFycmF5LlxuICAgIHRoaXMuX2V2ZW50c1t0eXBlXSA9IFt0aGlzLl9ldmVudHNbdHlwZV0sIGxpc3RlbmVyXTtcblxuICAvLyBDaGVjayBmb3IgbGlzdGVuZXIgbGVha1xuICBpZiAoaXNPYmplY3QodGhpcy5fZXZlbnRzW3R5cGVdKSAmJiAhdGhpcy5fZXZlbnRzW3R5cGVdLndhcm5lZCkge1xuICAgIHZhciBtO1xuICAgIGlmICghaXNVbmRlZmluZWQodGhpcy5fbWF4TGlzdGVuZXJzKSkge1xuICAgICAgbSA9IHRoaXMuX21heExpc3RlbmVycztcbiAgICB9IGVsc2Uge1xuICAgICAgbSA9IEV2ZW50RW1pdHRlci5kZWZhdWx0TWF4TGlzdGVuZXJzO1xuICAgIH1cblxuICAgIGlmIChtICYmIG0gPiAwICYmIHRoaXMuX2V2ZW50c1t0eXBlXS5sZW5ndGggPiBtKSB7XG4gICAgICB0aGlzLl9ldmVudHNbdHlwZV0ud2FybmVkID0gdHJ1ZTtcbiAgICAgIGNvbnNvbGUuZXJyb3IoJyhub2RlKSB3YXJuaW5nOiBwb3NzaWJsZSBFdmVudEVtaXR0ZXIgbWVtb3J5ICcgK1xuICAgICAgICAgICAgICAgICAgICAnbGVhayBkZXRlY3RlZC4gJWQgbGlzdGVuZXJzIGFkZGVkLiAnICtcbiAgICAgICAgICAgICAgICAgICAgJ1VzZSBlbWl0dGVyLnNldE1heExpc3RlbmVycygpIHRvIGluY3JlYXNlIGxpbWl0LicsXG4gICAgICAgICAgICAgICAgICAgIHRoaXMuX2V2ZW50c1t0eXBlXS5sZW5ndGgpO1xuICAgICAgaWYgKHR5cGVvZiBjb25zb2xlLnRyYWNlID09PSAnZnVuY3Rpb24nKSB7XG4gICAgICAgIC8vIG5vdCBzdXBwb3J0ZWQgaW4gSUUgMTBcbiAgICAgICAgY29uc29sZS50cmFjZSgpO1xuICAgICAgfVxuICAgIH1cbiAgfVxuXG4gIHJldHVybiB0aGlzO1xufTtcblxuRXZlbnRFbWl0dGVyLnByb3RvdHlwZS5vbiA9IEV2ZW50RW1pdHRlci5wcm90b3R5cGUuYWRkTGlzdGVuZXI7XG5cbkV2ZW50RW1pdHRlci5wcm90b3R5cGUub25jZSA9IGZ1bmN0aW9uKHR5cGUsIGxpc3RlbmVyKSB7XG4gIGlmICghaXNGdW5jdGlvbihsaXN0ZW5lcikpXG4gICAgdGhyb3cgVHlwZUVycm9yKCdsaXN0ZW5lciBtdXN0IGJlIGEgZnVuY3Rpb24nKTtcblxuICB2YXIgZmlyZWQgPSBmYWxzZTtcblxuICBmdW5jdGlvbiBnKCkge1xuICAgIHRoaXMucmVtb3ZlTGlzdGVuZXIodHlwZSwgZyk7XG5cbiAgICBpZiAoIWZpcmVkKSB7XG4gICAgICBmaXJlZCA9IHRydWU7XG4gICAgICBsaXN0ZW5lci5hcHBseSh0aGlzLCBhcmd1bWVudHMpO1xuICAgIH1cbiAgfVxuXG4gIGcubGlzdGVuZXIgPSBsaXN0ZW5lcjtcbiAgdGhpcy5vbih0eXBlLCBnKTtcblxuICByZXR1cm4gdGhpcztcbn07XG5cbi8vIGVtaXRzIGEgJ3JlbW92ZUxpc3RlbmVyJyBldmVudCBpZmYgdGhlIGxpc3RlbmVyIHdhcyByZW1vdmVkXG5FdmVudEVtaXR0ZXIucHJvdG90eXBlLnJlbW92ZUxpc3RlbmVyID0gZnVuY3Rpb24odHlwZSwgbGlzdGVuZXIpIHtcbiAgdmFyIGxpc3QsIHBvc2l0aW9uLCBsZW5ndGgsIGk7XG5cbiAgaWYgKCFpc0Z1bmN0aW9uKGxpc3RlbmVyKSlcbiAgICB0aHJvdyBUeXBlRXJyb3IoJ2xpc3RlbmVyIG11c3QgYmUgYSBmdW5jdGlvbicpO1xuXG4gIGlmICghdGhpcy5fZXZlbnRzIHx8ICF0aGlzLl9ldmVudHNbdHlwZV0pXG4gICAgcmV0dXJuIHRoaXM7XG5cbiAgbGlzdCA9IHRoaXMuX2V2ZW50c1t0eXBlXTtcbiAgbGVuZ3RoID0gbGlzdC5sZW5ndGg7XG4gIHBvc2l0aW9uID0gLTE7XG5cbiAgaWYgKGxpc3QgPT09IGxpc3RlbmVyIHx8XG4gICAgICAoaXNGdW5jdGlvbihsaXN0Lmxpc3RlbmVyKSAmJiBsaXN0Lmxpc3RlbmVyID09PSBsaXN0ZW5lcikpIHtcbiAgICBkZWxldGUgdGhpcy5fZXZlbnRzW3R5cGVdO1xuICAgIGlmICh0aGlzLl9ldmVudHMucmVtb3ZlTGlzdGVuZXIpXG4gICAgICB0aGlzLmVtaXQoJ3JlbW92ZUxpc3RlbmVyJywgdHlwZSwgbGlzdGVuZXIpO1xuXG4gIH0gZWxzZSBpZiAoaXNPYmplY3QobGlzdCkpIHtcbiAgICBmb3IgKGkgPSBsZW5ndGg7IGktLSA+IDA7KSB7XG4gICAgICBpZiAobGlzdFtpXSA9PT0gbGlzdGVuZXIgfHxcbiAgICAgICAgICAobGlzdFtpXS5saXN0ZW5lciAmJiBsaXN0W2ldLmxpc3RlbmVyID09PSBsaXN0ZW5lcikpIHtcbiAgICAgICAgcG9zaXRpb24gPSBpO1xuICAgICAgICBicmVhaztcbiAgICAgIH1cbiAgICB9XG5cbiAgICBpZiAocG9zaXRpb24gPCAwKVxuICAgICAgcmV0dXJuIHRoaXM7XG5cbiAgICBpZiAobGlzdC5sZW5ndGggPT09IDEpIHtcbiAgICAgIGxpc3QubGVuZ3RoID0gMDtcbiAgICAgIGRlbGV0ZSB0aGlzLl9ldmVudHNbdHlwZV07XG4gICAgfSBlbHNlIHtcbiAgICAgIGxpc3Quc3BsaWNlKHBvc2l0aW9uLCAxKTtcbiAgICB9XG5cbiAgICBpZiAodGhpcy5fZXZlbnRzLnJlbW92ZUxpc3RlbmVyKVxuICAgICAgdGhpcy5lbWl0KCdyZW1vdmVMaXN0ZW5lcicsIHR5cGUsIGxpc3RlbmVyKTtcbiAgfVxuXG4gIHJldHVybiB0aGlzO1xufTtcblxuRXZlbnRFbWl0dGVyLnByb3RvdHlwZS5yZW1vdmVBbGxMaXN0ZW5lcnMgPSBmdW5jdGlvbih0eXBlKSB7XG4gIHZhciBrZXksIGxpc3RlbmVycztcblxuICBpZiAoIXRoaXMuX2V2ZW50cylcbiAgICByZXR1cm4gdGhpcztcblxuICAvLyBub3QgbGlzdGVuaW5nIGZvciByZW1vdmVMaXN0ZW5lciwgbm8gbmVlZCB0byBlbWl0XG4gIGlmICghdGhpcy5fZXZlbnRzLnJlbW92ZUxpc3RlbmVyKSB7XG4gICAgaWYgKGFyZ3VtZW50cy5sZW5ndGggPT09IDApXG4gICAgICB0aGlzLl9ldmVudHMgPSB7fTtcbiAgICBlbHNlIGlmICh0aGlzLl9ldmVudHNbdHlwZV0pXG4gICAgICBkZWxldGUgdGhpcy5fZXZlbnRzW3R5cGVdO1xuICAgIHJldHVybiB0aGlzO1xuICB9XG5cbiAgLy8gZW1pdCByZW1vdmVMaXN0ZW5lciBmb3IgYWxsIGxpc3RlbmVycyBvbiBhbGwgZXZlbnRzXG4gIGlmIChhcmd1bWVudHMubGVuZ3RoID09PSAwKSB7XG4gICAgZm9yIChrZXkgaW4gdGhpcy5fZXZlbnRzKSB7XG4gICAgICBpZiAoa2V5ID09PSAncmVtb3ZlTGlzdGVuZXInKSBjb250aW51ZTtcbiAgICAgIHRoaXMucmVtb3ZlQWxsTGlzdGVuZXJzKGtleSk7XG4gICAgfVxuICAgIHRoaXMucmVtb3ZlQWxsTGlzdGVuZXJzKCdyZW1vdmVMaXN0ZW5lcicpO1xuICAgIHRoaXMuX2V2ZW50cyA9IHt9O1xuICAgIHJldHVybiB0aGlzO1xuICB9XG5cbiAgbGlzdGVuZXJzID0gdGhpcy5fZXZlbnRzW3R5cGVdO1xuXG4gIGlmIChpc0Z1bmN0aW9uKGxpc3RlbmVycykpIHtcbiAgICB0aGlzLnJlbW92ZUxpc3RlbmVyKHR5cGUsIGxpc3RlbmVycyk7XG4gIH0gZWxzZSB7XG4gICAgLy8gTElGTyBvcmRlclxuICAgIHdoaWxlIChsaXN0ZW5lcnMubGVuZ3RoKVxuICAgICAgdGhpcy5yZW1vdmVMaXN0ZW5lcih0eXBlLCBsaXN0ZW5lcnNbbGlzdGVuZXJzLmxlbmd0aCAtIDFdKTtcbiAgfVxuICBkZWxldGUgdGhpcy5fZXZlbnRzW3R5cGVdO1xuXG4gIHJldHVybiB0aGlzO1xufTtcblxuRXZlbnRFbWl0dGVyLnByb3RvdHlwZS5saXN0ZW5lcnMgPSBmdW5jdGlvbih0eXBlKSB7XG4gIHZhciByZXQ7XG4gIGlmICghdGhpcy5fZXZlbnRzIHx8ICF0aGlzLl9ldmVudHNbdHlwZV0pXG4gICAgcmV0ID0gW107XG4gIGVsc2UgaWYgKGlzRnVuY3Rpb24odGhpcy5fZXZlbnRzW3R5cGVdKSlcbiAgICByZXQgPSBbdGhpcy5fZXZlbnRzW3R5cGVdXTtcbiAgZWxzZVxuICAgIHJldCA9IHRoaXMuX2V2ZW50c1t0eXBlXS5zbGljZSgpO1xuICByZXR1cm4gcmV0O1xufTtcblxuRXZlbnRFbWl0dGVyLmxpc3RlbmVyQ291bnQgPSBmdW5jdGlvbihlbWl0dGVyLCB0eXBlKSB7XG4gIHZhciByZXQ7XG4gIGlmICghZW1pdHRlci5fZXZlbnRzIHx8ICFlbWl0dGVyLl9ldmVudHNbdHlwZV0pXG4gICAgcmV0ID0gMDtcbiAgZWxzZSBpZiAoaXNGdW5jdGlvbihlbWl0dGVyLl9ldmVudHNbdHlwZV0pKVxuICAgIHJldCA9IDE7XG4gIGVsc2VcbiAgICByZXQgPSBlbWl0dGVyLl9ldmVudHNbdHlwZV0ubGVuZ3RoO1xuICByZXR1cm4gcmV0O1xufTtcblxuZnVuY3Rpb24gaXNGdW5jdGlvbihhcmcpIHtcbiAgcmV0dXJuIHR5cGVvZiBhcmcgPT09ICdmdW5jdGlvbic7XG59XG5cbmZ1bmN0aW9uIGlzTnVtYmVyKGFyZykge1xuICByZXR1cm4gdHlwZW9mIGFyZyA9PT0gJ251bWJlcic7XG59XG5cbmZ1bmN0aW9uIGlzT2JqZWN0KGFyZykge1xuICByZXR1cm4gdHlwZW9mIGFyZyA9PT0gJ29iamVjdCcgJiYgYXJnICE9PSBudWxsO1xufVxuXG5mdW5jdGlvbiBpc1VuZGVmaW5lZChhcmcpIHtcbiAgcmV0dXJuIGFyZyA9PT0gdm9pZCAwO1xufVxuIiwiLy8gICAgIHV1aWQuanNcbi8vXG4vLyAgICAgQ29weXJpZ2h0IChjKSAyMDEwLTIwMTIgUm9iZXJ0IEtpZWZmZXJcbi8vICAgICBNSVQgTGljZW5zZSAtIGh0dHA6Ly9vcGVuc291cmNlLm9yZy9saWNlbnNlcy9taXQtbGljZW5zZS5waHBcblxuKGZ1bmN0aW9uKCkge1xuICB2YXIgX2dsb2JhbCA9IHRoaXM7XG5cbiAgLy8gVW5pcXVlIElEIGNyZWF0aW9uIHJlcXVpcmVzIGEgaGlnaCBxdWFsaXR5IHJhbmRvbSAjIGdlbmVyYXRvci4gIFdlIGZlYXR1cmVcbiAgLy8gZGV0ZWN0IHRvIGRldGVybWluZSB0aGUgYmVzdCBSTkcgc291cmNlLCBub3JtYWxpemluZyB0byBhIGZ1bmN0aW9uIHRoYXRcbiAgLy8gcmV0dXJucyAxMjgtYml0cyBvZiByYW5kb21uZXNzLCBzaW5jZSB0aGF0J3Mgd2hhdCdzIHVzdWFsbHkgcmVxdWlyZWRcbiAgdmFyIF9ybmc7XG5cbiAgLy8gTm9kZS5qcyBjcnlwdG8tYmFzZWQgUk5HIC0gaHR0cDovL25vZGVqcy5vcmcvZG9jcy92MC42LjIvYXBpL2NyeXB0by5odG1sXG4gIC8vXG4gIC8vIE1vZGVyYXRlbHkgZmFzdCwgaGlnaCBxdWFsaXR5XG4gIGlmICh0eXBlb2YoX2dsb2JhbC5yZXF1aXJlKSA9PSAnZnVuY3Rpb24nKSB7XG4gICAgdHJ5IHtcbiAgICAgIHZhciBfcmIgPSBfZ2xvYmFsLnJlcXVpcmUoJ2NyeXB0bycpLnJhbmRvbUJ5dGVzO1xuICAgICAgX3JuZyA9IF9yYiAmJiBmdW5jdGlvbigpIHtyZXR1cm4gX3JiKDE2KTt9O1xuICAgIH0gY2F0Y2goZSkge31cbiAgfVxuXG4gIGlmICghX3JuZyAmJiBfZ2xvYmFsLmNyeXB0byAmJiBjcnlwdG8uZ2V0UmFuZG9tVmFsdWVzKSB7XG4gICAgLy8gV0hBVFdHIGNyeXB0by1iYXNlZCBSTkcgLSBodHRwOi8vd2lraS53aGF0d2cub3JnL3dpa2kvQ3J5cHRvXG4gICAgLy9cbiAgICAvLyBNb2RlcmF0ZWx5IGZhc3QsIGhpZ2ggcXVhbGl0eVxuICAgIHZhciBfcm5kczggPSBuZXcgVWludDhBcnJheSgxNik7XG4gICAgX3JuZyA9IGZ1bmN0aW9uIHdoYXR3Z1JORygpIHtcbiAgICAgIGNyeXB0by5nZXRSYW5kb21WYWx1ZXMoX3JuZHM4KTtcbiAgICAgIHJldHVybiBfcm5kczg7XG4gICAgfTtcbiAgfVxuXG4gIGlmICghX3JuZykge1xuICAgIC8vIE1hdGgucmFuZG9tKCktYmFzZWQgKFJORylcbiAgICAvL1xuICAgIC8vIElmIGFsbCBlbHNlIGZhaWxzLCB1c2UgTWF0aC5yYW5kb20oKS4gIEl0J3MgZmFzdCwgYnV0IGlzIG9mIHVuc3BlY2lmaWVkXG4gICAgLy8gcXVhbGl0eS5cbiAgICB2YXIgIF9ybmRzID0gbmV3IEFycmF5KDE2KTtcbiAgICBfcm5nID0gZnVuY3Rpb24oKSB7XG4gICAgICBmb3IgKHZhciBpID0gMCwgcjsgaSA8IDE2OyBpKyspIHtcbiAgICAgICAgaWYgKChpICYgMHgwMykgPT09IDApIHIgPSBNYXRoLnJhbmRvbSgpICogMHgxMDAwMDAwMDA7XG4gICAgICAgIF9ybmRzW2ldID0gciA+Pj4gKChpICYgMHgwMykgPDwgMykgJiAweGZmO1xuICAgICAgfVxuXG4gICAgICByZXR1cm4gX3JuZHM7XG4gICAgfTtcbiAgfVxuXG4gIC8vIEJ1ZmZlciBjbGFzcyB0byB1c2VcbiAgdmFyIEJ1ZmZlckNsYXNzID0gdHlwZW9mKF9nbG9iYWwuQnVmZmVyKSA9PSAnZnVuY3Rpb24nID8gX2dsb2JhbC5CdWZmZXIgOiBBcnJheTtcblxuICAvLyBNYXBzIGZvciBudW1iZXIgPC0+IGhleCBzdHJpbmcgY29udmVyc2lvblxuICB2YXIgX2J5dGVUb0hleCA9IFtdO1xuICB2YXIgX2hleFRvQnl0ZSA9IHt9O1xuICBmb3IgKHZhciBpID0gMDsgaSA8IDI1NjsgaSsrKSB7XG4gICAgX2J5dGVUb0hleFtpXSA9IChpICsgMHgxMDApLnRvU3RyaW5nKDE2KS5zdWJzdHIoMSk7XG4gICAgX2hleFRvQnl0ZVtfYnl0ZVRvSGV4W2ldXSA9IGk7XG4gIH1cblxuICAvLyAqKmBwYXJzZSgpYCAtIFBhcnNlIGEgVVVJRCBpbnRvIGl0J3MgY29tcG9uZW50IGJ5dGVzKipcbiAgZnVuY3Rpb24gcGFyc2UocywgYnVmLCBvZmZzZXQpIHtcbiAgICB2YXIgaSA9IChidWYgJiYgb2Zmc2V0KSB8fCAwLCBpaSA9IDA7XG5cbiAgICBidWYgPSBidWYgfHwgW107XG4gICAgcy50b0xvd2VyQ2FzZSgpLnJlcGxhY2UoL1swLTlhLWZdezJ9L2csIGZ1bmN0aW9uKG9jdCkge1xuICAgICAgaWYgKGlpIDwgMTYpIHsgLy8gRG9uJ3Qgb3ZlcmZsb3chXG4gICAgICAgIGJ1ZltpICsgaWkrK10gPSBfaGV4VG9CeXRlW29jdF07XG4gICAgICB9XG4gICAgfSk7XG5cbiAgICAvLyBaZXJvIG91dCByZW1haW5pbmcgYnl0ZXMgaWYgc3RyaW5nIHdhcyBzaG9ydFxuICAgIHdoaWxlIChpaSA8IDE2KSB7XG4gICAgICBidWZbaSArIGlpKytdID0gMDtcbiAgICB9XG5cbiAgICByZXR1cm4gYnVmO1xuICB9XG5cbiAgLy8gKipgdW5wYXJzZSgpYCAtIENvbnZlcnQgVVVJRCBieXRlIGFycmF5IChhbGEgcGFyc2UoKSkgaW50byBhIHN0cmluZyoqXG4gIGZ1bmN0aW9uIHVucGFyc2UoYnVmLCBvZmZzZXQpIHtcbiAgICB2YXIgaSA9IG9mZnNldCB8fCAwLCBidGggPSBfYnl0ZVRvSGV4O1xuICAgIHJldHVybiAgYnRoW2J1ZltpKytdXSArIGJ0aFtidWZbaSsrXV0gK1xuICAgICAgICAgICAgYnRoW2J1ZltpKytdXSArIGJ0aFtidWZbaSsrXV0gKyAnLScgK1xuICAgICAgICAgICAgYnRoW2J1ZltpKytdXSArIGJ0aFtidWZbaSsrXV0gKyAnLScgK1xuICAgICAgICAgICAgYnRoW2J1ZltpKytdXSArIGJ0aFtidWZbaSsrXV0gKyAnLScgK1xuICAgICAgICAgICAgYnRoW2J1ZltpKytdXSArIGJ0aFtidWZbaSsrXV0gKyAnLScgK1xuICAgICAgICAgICAgYnRoW2J1ZltpKytdXSArIGJ0aFtidWZbaSsrXV0gK1xuICAgICAgICAgICAgYnRoW2J1ZltpKytdXSArIGJ0aFtidWZbaSsrXV0gK1xuICAgICAgICAgICAgYnRoW2J1ZltpKytdXSArIGJ0aFtidWZbaSsrXV07XG4gIH1cblxuICAvLyAqKmB2MSgpYCAtIEdlbmVyYXRlIHRpbWUtYmFzZWQgVVVJRCoqXG4gIC8vXG4gIC8vIEluc3BpcmVkIGJ5IGh0dHBzOi8vZ2l0aHViLmNvbS9MaW9zSy9VVUlELmpzXG4gIC8vIGFuZCBodHRwOi8vZG9jcy5weXRob24ub3JnL2xpYnJhcnkvdXVpZC5odG1sXG5cbiAgLy8gcmFuZG9tICMncyB3ZSBuZWVkIHRvIGluaXQgbm9kZSBhbmQgY2xvY2tzZXFcbiAgdmFyIF9zZWVkQnl0ZXMgPSBfcm5nKCk7XG5cbiAgLy8gUGVyIDQuNSwgY3JlYXRlIGFuZCA0OC1iaXQgbm9kZSBpZCwgKDQ3IHJhbmRvbSBiaXRzICsgbXVsdGljYXN0IGJpdCA9IDEpXG4gIHZhciBfbm9kZUlkID0gW1xuICAgIF9zZWVkQnl0ZXNbMF0gfCAweDAxLFxuICAgIF9zZWVkQnl0ZXNbMV0sIF9zZWVkQnl0ZXNbMl0sIF9zZWVkQnl0ZXNbM10sIF9zZWVkQnl0ZXNbNF0sIF9zZWVkQnl0ZXNbNV1cbiAgXTtcblxuICAvLyBQZXIgNC4yLjIsIHJhbmRvbWl6ZSAoMTQgYml0KSBjbG9ja3NlcVxuICB2YXIgX2Nsb2Nrc2VxID0gKF9zZWVkQnl0ZXNbNl0gPDwgOCB8IF9zZWVkQnl0ZXNbN10pICYgMHgzZmZmO1xuXG4gIC8vIFByZXZpb3VzIHV1aWQgY3JlYXRpb24gdGltZVxuICB2YXIgX2xhc3RNU2VjcyA9IDAsIF9sYXN0TlNlY3MgPSAwO1xuXG4gIC8vIFNlZSBodHRwczovL2dpdGh1Yi5jb20vYnJvb2ZhL25vZGUtdXVpZCBmb3IgQVBJIGRldGFpbHNcbiAgZnVuY3Rpb24gdjEob3B0aW9ucywgYnVmLCBvZmZzZXQpIHtcbiAgICB2YXIgaSA9IGJ1ZiAmJiBvZmZzZXQgfHwgMDtcbiAgICB2YXIgYiA9IGJ1ZiB8fCBbXTtcblxuICAgIG9wdGlvbnMgPSBvcHRpb25zIHx8IHt9O1xuXG4gICAgdmFyIGNsb2Nrc2VxID0gb3B0aW9ucy5jbG9ja3NlcSAhPSBudWxsID8gb3B0aW9ucy5jbG9ja3NlcSA6IF9jbG9ja3NlcTtcblxuICAgIC8vIFVVSUQgdGltZXN0YW1wcyBhcmUgMTAwIG5hbm8tc2Vjb25kIHVuaXRzIHNpbmNlIHRoZSBHcmVnb3JpYW4gZXBvY2gsXG4gICAgLy8gKDE1ODItMTAtMTUgMDA6MDApLiAgSlNOdW1iZXJzIGFyZW4ndCBwcmVjaXNlIGVub3VnaCBmb3IgdGhpcywgc29cbiAgICAvLyB0aW1lIGlzIGhhbmRsZWQgaW50ZXJuYWxseSBhcyAnbXNlY3MnIChpbnRlZ2VyIG1pbGxpc2Vjb25kcykgYW5kICduc2VjcydcbiAgICAvLyAoMTAwLW5hbm9zZWNvbmRzIG9mZnNldCBmcm9tIG1zZWNzKSBzaW5jZSB1bml4IGVwb2NoLCAxOTcwLTAxLTAxIDAwOjAwLlxuICAgIHZhciBtc2VjcyA9IG9wdGlvbnMubXNlY3MgIT0gbnVsbCA/IG9wdGlvbnMubXNlY3MgOiBuZXcgRGF0ZSgpLmdldFRpbWUoKTtcblxuICAgIC8vIFBlciA0LjIuMS4yLCB1c2UgY291bnQgb2YgdXVpZCdzIGdlbmVyYXRlZCBkdXJpbmcgdGhlIGN1cnJlbnQgY2xvY2tcbiAgICAvLyBjeWNsZSB0byBzaW11bGF0ZSBoaWdoZXIgcmVzb2x1dGlvbiBjbG9ja1xuICAgIHZhciBuc2VjcyA9IG9wdGlvbnMubnNlY3MgIT0gbnVsbCA/IG9wdGlvbnMubnNlY3MgOiBfbGFzdE5TZWNzICsgMTtcblxuICAgIC8vIFRpbWUgc2luY2UgbGFzdCB1dWlkIGNyZWF0aW9uIChpbiBtc2VjcylcbiAgICB2YXIgZHQgPSAobXNlY3MgLSBfbGFzdE1TZWNzKSArIChuc2VjcyAtIF9sYXN0TlNlY3MpLzEwMDAwO1xuXG4gICAgLy8gUGVyIDQuMi4xLjIsIEJ1bXAgY2xvY2tzZXEgb24gY2xvY2sgcmVncmVzc2lvblxuICAgIGlmIChkdCA8IDAgJiYgb3B0aW9ucy5jbG9ja3NlcSA9PSBudWxsKSB7XG4gICAgICBjbG9ja3NlcSA9IGNsb2Nrc2VxICsgMSAmIDB4M2ZmZjtcbiAgICB9XG5cbiAgICAvLyBSZXNldCBuc2VjcyBpZiBjbG9jayByZWdyZXNzZXMgKG5ldyBjbG9ja3NlcSkgb3Igd2UndmUgbW92ZWQgb250byBhIG5ld1xuICAgIC8vIHRpbWUgaW50ZXJ2YWxcbiAgICBpZiAoKGR0IDwgMCB8fCBtc2VjcyA+IF9sYXN0TVNlY3MpICYmIG9wdGlvbnMubnNlY3MgPT0gbnVsbCkge1xuICAgICAgbnNlY3MgPSAwO1xuICAgIH1cblxuICAgIC8vIFBlciA0LjIuMS4yIFRocm93IGVycm9yIGlmIHRvbyBtYW55IHV1aWRzIGFyZSByZXF1ZXN0ZWRcbiAgICBpZiAobnNlY3MgPj0gMTAwMDApIHtcbiAgICAgIHRocm93IG5ldyBFcnJvcigndXVpZC52MSgpOiBDYW5cXCd0IGNyZWF0ZSBtb3JlIHRoYW4gMTBNIHV1aWRzL3NlYycpO1xuICAgIH1cblxuICAgIF9sYXN0TVNlY3MgPSBtc2VjcztcbiAgICBfbGFzdE5TZWNzID0gbnNlY3M7XG4gICAgX2Nsb2Nrc2VxID0gY2xvY2tzZXE7XG5cbiAgICAvLyBQZXIgNC4xLjQgLSBDb252ZXJ0IGZyb20gdW5peCBlcG9jaCB0byBHcmVnb3JpYW4gZXBvY2hcbiAgICBtc2VjcyArPSAxMjIxOTI5MjgwMDAwMDtcblxuICAgIC8vIGB0aW1lX2xvd2BcbiAgICB2YXIgdGwgPSAoKG1zZWNzICYgMHhmZmZmZmZmKSAqIDEwMDAwICsgbnNlY3MpICUgMHgxMDAwMDAwMDA7XG4gICAgYltpKytdID0gdGwgPj4+IDI0ICYgMHhmZjtcbiAgICBiW2krK10gPSB0bCA+Pj4gMTYgJiAweGZmO1xuICAgIGJbaSsrXSA9IHRsID4+PiA4ICYgMHhmZjtcbiAgICBiW2krK10gPSB0bCAmIDB4ZmY7XG5cbiAgICAvLyBgdGltZV9taWRgXG4gICAgdmFyIHRtaCA9IChtc2VjcyAvIDB4MTAwMDAwMDAwICogMTAwMDApICYgMHhmZmZmZmZmO1xuICAgIGJbaSsrXSA9IHRtaCA+Pj4gOCAmIDB4ZmY7XG4gICAgYltpKytdID0gdG1oICYgMHhmZjtcblxuICAgIC8vIGB0aW1lX2hpZ2hfYW5kX3ZlcnNpb25gXG4gICAgYltpKytdID0gdG1oID4+PiAyNCAmIDB4ZiB8IDB4MTA7IC8vIGluY2x1ZGUgdmVyc2lvblxuICAgIGJbaSsrXSA9IHRtaCA+Pj4gMTYgJiAweGZmO1xuXG4gICAgLy8gYGNsb2NrX3NlcV9oaV9hbmRfcmVzZXJ2ZWRgIChQZXIgNC4yLjIgLSBpbmNsdWRlIHZhcmlhbnQpXG4gICAgYltpKytdID0gY2xvY2tzZXEgPj4+IDggfCAweDgwO1xuXG4gICAgLy8gYGNsb2NrX3NlcV9sb3dgXG4gICAgYltpKytdID0gY2xvY2tzZXEgJiAweGZmO1xuXG4gICAgLy8gYG5vZGVgXG4gICAgdmFyIG5vZGUgPSBvcHRpb25zLm5vZGUgfHwgX25vZGVJZDtcbiAgICBmb3IgKHZhciBuID0gMDsgbiA8IDY7IG4rKykge1xuICAgICAgYltpICsgbl0gPSBub2RlW25dO1xuICAgIH1cblxuICAgIHJldHVybiBidWYgPyBidWYgOiB1bnBhcnNlKGIpO1xuICB9XG5cbiAgLy8gKipgdjQoKWAgLSBHZW5lcmF0ZSByYW5kb20gVVVJRCoqXG5cbiAgLy8gU2VlIGh0dHBzOi8vZ2l0aHViLmNvbS9icm9vZmEvbm9kZS11dWlkIGZvciBBUEkgZGV0YWlsc1xuICBmdW5jdGlvbiB2NChvcHRpb25zLCBidWYsIG9mZnNldCkge1xuICAgIC8vIERlcHJlY2F0ZWQgLSAnZm9ybWF0JyBhcmd1bWVudCwgYXMgc3VwcG9ydGVkIGluIHYxLjJcbiAgICB2YXIgaSA9IGJ1ZiAmJiBvZmZzZXQgfHwgMDtcblxuICAgIGlmICh0eXBlb2Yob3B0aW9ucykgPT0gJ3N0cmluZycpIHtcbiAgICAgIGJ1ZiA9IG9wdGlvbnMgPT0gJ2JpbmFyeScgPyBuZXcgQnVmZmVyQ2xhc3MoMTYpIDogbnVsbDtcbiAgICAgIG9wdGlvbnMgPSBudWxsO1xuICAgIH1cbiAgICBvcHRpb25zID0gb3B0aW9ucyB8fCB7fTtcblxuICAgIHZhciBybmRzID0gb3B0aW9ucy5yYW5kb20gfHwgKG9wdGlvbnMucm5nIHx8IF9ybmcpKCk7XG5cbiAgICAvLyBQZXIgNC40LCBzZXQgYml0cyBmb3IgdmVyc2lvbiBhbmQgYGNsb2NrX3NlcV9oaV9hbmRfcmVzZXJ2ZWRgXG4gICAgcm5kc1s2XSA9IChybmRzWzZdICYgMHgwZikgfCAweDQwO1xuICAgIHJuZHNbOF0gPSAocm5kc1s4XSAmIDB4M2YpIHwgMHg4MDtcblxuICAgIC8vIENvcHkgYnl0ZXMgdG8gYnVmZmVyLCBpZiBwcm92aWRlZFxuICAgIGlmIChidWYpIHtcbiAgICAgIGZvciAodmFyIGlpID0gMDsgaWkgPCAxNjsgaWkrKykge1xuICAgICAgICBidWZbaSArIGlpXSA9IHJuZHNbaWldO1xuICAgICAgfVxuICAgIH1cblxuICAgIHJldHVybiBidWYgfHwgdW5wYXJzZShybmRzKTtcbiAgfVxuXG4gIC8vIEV4cG9ydCBwdWJsaWMgQVBJXG4gIHZhciB1dWlkID0gdjQ7XG4gIHV1aWQudjEgPSB2MTtcbiAgdXVpZC52NCA9IHY0O1xuICB1dWlkLnBhcnNlID0gcGFyc2U7XG4gIHV1aWQudW5wYXJzZSA9IHVucGFyc2U7XG4gIHV1aWQuQnVmZmVyQ2xhc3MgPSBCdWZmZXJDbGFzcztcblxuICBpZiAodHlwZW9mKG1vZHVsZSkgIT0gJ3VuZGVmaW5lZCcgJiYgbW9kdWxlLmV4cG9ydHMpIHtcbiAgICAvLyBQdWJsaXNoIGFzIG5vZGUuanMgbW9kdWxlXG4gICAgbW9kdWxlLmV4cG9ydHMgPSB1dWlkO1xuICB9IGVsc2UgIGlmICh0eXBlb2YgZGVmaW5lID09PSAnZnVuY3Rpb24nICYmIGRlZmluZS5hbWQpIHtcbiAgICAvLyBQdWJsaXNoIGFzIEFNRCBtb2R1bGVcbiAgICBkZWZpbmUoZnVuY3Rpb24oKSB7cmV0dXJuIHV1aWQ7fSk7XG4gXG5cbiAgfSBlbHNlIHtcbiAgICAvLyBQdWJsaXNoIGFzIGdsb2JhbCAoaW4gYnJvd3NlcnMpXG4gICAgdmFyIF9wcmV2aW91c1Jvb3QgPSBfZ2xvYmFsLnV1aWQ7XG5cbiAgICAvLyAqKmBub0NvbmZsaWN0KClgIC0gKGJyb3dzZXIgb25seSkgdG8gcmVzZXQgZ2xvYmFsICd1dWlkJyB2YXIqKlxuICAgIHV1aWQubm9Db25mbGljdCA9IGZ1bmN0aW9uKCkge1xuICAgICAgX2dsb2JhbC51dWlkID0gX3ByZXZpb3VzUm9vdDtcbiAgICAgIHJldHVybiB1dWlkO1xuICAgIH07XG5cbiAgICBfZ2xvYmFsLnV1aWQgPSB1dWlkO1xuICB9XG59KS5jYWxsKHRoaXMpO1xuIl19
