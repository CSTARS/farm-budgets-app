(function(f){if(typeof exports==="object"&&typeof module!=="undefined"){module.exports=f()}else if(typeof define==="function"&&define.amd){define([],f)}else{var g;if(typeof window!=="undefined"){g=window}else if(typeof global!=="undefined"){g=global}else if(typeof self!=="undefined"){g=self}else{g=this}g.SDK = f()}})(function(){var define,module,exports;return (function e(t,n,r){function s(o,u){if(!n[o]){if(!t[o]){var a=typeof require=="function"&&require;if(!u&&a)return a(o,!0);if(i)return i(o,!0);var f=new Error("Cannot find module '"+o+"'");throw f.code="MODULE_NOT_FOUND",f}var l=n[o]={exports:{}};t[o][0].call(l.exports,function(e){var n=t[o][1][e];return s(n?n:e)},l,l.exports,e,t,n,r)}return n[o].exports}var i=typeof require=="function"&&require;for(var o=0;o<r.length;o++)s(r[o]);return s})({"/Users/jrmerz/dev/cstars/AHB/farm-budgets-app/lib/sdk.js":[function(require,module,exports){
//var sdk = require('farm-budgets-sdk')();
var sdk = require('/Users/jrmerz/dev/cstars/AHB/farm-budgets-sdk')();
module.exports = sdk;

},{"/Users/jrmerz/dev/cstars/AHB/farm-budgets-sdk":"/Users/jrmerz/dev/cstars/AHB/farm-budgets-sdk/index.js"}],"/Users/jrmerz/dev/cstars/AHB/farm-budgets-app/node_modules/base64-js/lib/b64.js":[function(require,module,exports){
var lookup = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/';

;(function (exports) {
	'use strict';

  var Arr = (typeof Uint8Array !== 'undefined')
    ? Uint8Array
    : Array

	var PLUS   = '+'.charCodeAt(0)
	var SLASH  = '/'.charCodeAt(0)
	var NUMBER = '0'.charCodeAt(0)
	var LOWER  = 'a'.charCodeAt(0)
	var UPPER  = 'A'.charCodeAt(0)
	var PLUS_URL_SAFE = '-'.charCodeAt(0)
	var SLASH_URL_SAFE = '_'.charCodeAt(0)

	function decode (elt) {
		var code = elt.charCodeAt(0)
		if (code === PLUS ||
		    code === PLUS_URL_SAFE)
			return 62 // '+'
		if (code === SLASH ||
		    code === SLASH_URL_SAFE)
			return 63 // '/'
		if (code < NUMBER)
			return -1 //no match
		if (code < NUMBER + 10)
			return code - NUMBER + 26 + 26
		if (code < UPPER + 26)
			return code - UPPER
		if (code < LOWER + 26)
			return code - LOWER + 26
	}

	function b64ToByteArray (b64) {
		var i, j, l, tmp, placeHolders, arr

		if (b64.length % 4 > 0) {
			throw new Error('Invalid string. Length must be a multiple of 4')
		}

		// the number of equal signs (place holders)
		// if there are two placeholders, than the two characters before it
		// represent one byte
		// if there is only one, then the three characters before it represent 2 bytes
		// this is just a cheap hack to not do indexOf twice
		var len = b64.length
		placeHolders = '=' === b64.charAt(len - 2) ? 2 : '=' === b64.charAt(len - 1) ? 1 : 0

		// base64 is 4/3 + up to two characters of the original data
		arr = new Arr(b64.length * 3 / 4 - placeHolders)

		// if there are placeholders, only get up to the last complete 4 chars
		l = placeHolders > 0 ? b64.length - 4 : b64.length

		var L = 0

		function push (v) {
			arr[L++] = v
		}

		for (i = 0, j = 0; i < l; i += 4, j += 3) {
			tmp = (decode(b64.charAt(i)) << 18) | (decode(b64.charAt(i + 1)) << 12) | (decode(b64.charAt(i + 2)) << 6) | decode(b64.charAt(i + 3))
			push((tmp & 0xFF0000) >> 16)
			push((tmp & 0xFF00) >> 8)
			push(tmp & 0xFF)
		}

		if (placeHolders === 2) {
			tmp = (decode(b64.charAt(i)) << 2) | (decode(b64.charAt(i + 1)) >> 4)
			push(tmp & 0xFF)
		} else if (placeHolders === 1) {
			tmp = (decode(b64.charAt(i)) << 10) | (decode(b64.charAt(i + 1)) << 4) | (decode(b64.charAt(i + 2)) >> 2)
			push((tmp >> 8) & 0xFF)
			push(tmp & 0xFF)
		}

		return arr
	}

	function uint8ToBase64 (uint8) {
		var i,
			extraBytes = uint8.length % 3, // if we have 1 byte left, pad 2 bytes
			output = "",
			temp, length

		function encode (num) {
			return lookup.charAt(num)
		}

		function tripletToBase64 (num) {
			return encode(num >> 18 & 0x3F) + encode(num >> 12 & 0x3F) + encode(num >> 6 & 0x3F) + encode(num & 0x3F)
		}

		// go through the array every three bytes, we'll deal with trailing stuff later
		for (i = 0, length = uint8.length - extraBytes; i < length; i += 3) {
			temp = (uint8[i] << 16) + (uint8[i + 1] << 8) + (uint8[i + 2])
			output += tripletToBase64(temp)
		}

		// pad the end with zeros, but make sure to not forget the extra bytes
		switch (extraBytes) {
			case 1:
				temp = uint8[uint8.length - 1]
				output += encode(temp >> 2)
				output += encode((temp << 4) & 0x3F)
				output += '=='
				break
			case 2:
				temp = (uint8[uint8.length - 2] << 8) + (uint8[uint8.length - 1])
				output += encode(temp >> 10)
				output += encode((temp >> 4) & 0x3F)
				output += encode((temp << 2) & 0x3F)
				output += '='
				break
		}

		return output
	}

	exports.toByteArray = b64ToByteArray
	exports.fromByteArray = uint8ToBase64
}(typeof exports === 'undefined' ? (this.base64js = {}) : exports))

},{}],"/Users/jrmerz/dev/cstars/AHB/farm-budgets-app/node_modules/brorand/index.js":[function(require,module,exports){
var r;

module.exports = function rand(len) {
  if (!r)
    r = new Rand(null);

  return r.generate(len);
};

function Rand(rand) {
  this.rand = rand;
}
module.exports.Rand = Rand;

Rand.prototype.generate = function generate(len) {
  return this._rand(len);
};

if (typeof window === 'object') {
  if (window.crypto && window.crypto.getRandomValues) {
    // Modern browsers
    Rand.prototype._rand = function _rand(n) {
      var arr = new Uint8Array(n);
      window.crypto.getRandomValues(arr);
      return arr;
    };
  } else if (window.msCrypto && window.msCrypto.getRandomValues) {
    // IE
    Rand.prototype._rand = function _rand(n) {
      var arr = new Uint8Array(n);
      window.msCrypto.getRandomValues(arr);
      return arr;
    };
  } else {
    // Old junk
    Rand.prototype._rand = function() {
      throw new Error('Not implemented yet');
    };
  }
} else {
  // Node.js or Web worker
  try {
    var crypto = require('cry' + 'pto');

    Rand.prototype._rand = function _rand(n) {
      return crypto.randomBytes(n);
    };
  } catch (e) {
    // Emulate crypto API using randy
    Rand.prototype._rand = function _rand(n) {
      var res = new Uint8Array(n);
      for (var i = 0; i < res.length; i++)
        res[i] = this.rand.getByte();
      return res;
    };
  }
}

},{}],"/Users/jrmerz/dev/cstars/AHB/farm-budgets-app/node_modules/browser-resolve/empty.js":[function(require,module,exports){

},{}],"/Users/jrmerz/dev/cstars/AHB/farm-budgets-app/node_modules/browserify-aes/aes.js":[function(require,module,exports){
(function (Buffer){
// based on the aes implimentation in triple sec
// https://github.com/keybase/triplesec

// which is in turn based on the one from crypto-js
// https://code.google.com/p/crypto-js/

var uint_max = Math.pow(2, 32)
function fixup_uint32 (x) {
  var ret, x_pos
  ret = x > uint_max || x < 0 ? (x_pos = Math.abs(x) % uint_max, x < 0 ? uint_max - x_pos : x_pos) : x
  return ret
}
function scrub_vec (v) {
  for (var i = 0; i < v.length; v++) {
    v[i] = 0
  }
  return false
}

function Global () {
  this.SBOX = []
  this.INV_SBOX = []
  this.SUB_MIX = [[], [], [], []]
  this.INV_SUB_MIX = [[], [], [], []]
  this.init()
  this.RCON = [0x00, 0x01, 0x02, 0x04, 0x08, 0x10, 0x20, 0x40, 0x80, 0x1b, 0x36]
}

Global.prototype.init = function () {
  var d, i, sx, t, x, x2, x4, x8, xi, _i
  d = (function () {
    var _i, _results
    _results = []
    for (i = _i = 0; _i < 256; i = ++_i) {
      if (i < 128) {
        _results.push(i << 1)
      } else {
        _results.push((i << 1) ^ 0x11b)
      }
    }
    return _results
  })()
  x = 0
  xi = 0
  for (i = _i = 0; _i < 256; i = ++_i) {
    sx = xi ^ (xi << 1) ^ (xi << 2) ^ (xi << 3) ^ (xi << 4)
    sx = (sx >>> 8) ^ (sx & 0xff) ^ 0x63
    this.SBOX[x] = sx
    this.INV_SBOX[sx] = x
    x2 = d[x]
    x4 = d[x2]
    x8 = d[x4]
    t = (d[sx] * 0x101) ^ (sx * 0x1010100)
    this.SUB_MIX[0][x] = (t << 24) | (t >>> 8)
    this.SUB_MIX[1][x] = (t << 16) | (t >>> 16)
    this.SUB_MIX[2][x] = (t << 8) | (t >>> 24)
    this.SUB_MIX[3][x] = t
    t = (x8 * 0x1010101) ^ (x4 * 0x10001) ^ (x2 * 0x101) ^ (x * 0x1010100)
    this.INV_SUB_MIX[0][sx] = (t << 24) | (t >>> 8)
    this.INV_SUB_MIX[1][sx] = (t << 16) | (t >>> 16)
    this.INV_SUB_MIX[2][sx] = (t << 8) | (t >>> 24)
    this.INV_SUB_MIX[3][sx] = t
    if (x === 0) {
      x = xi = 1
    } else {
      x = x2 ^ d[d[d[x8 ^ x2]]]
      xi ^= d[d[xi]]
    }
  }
  return true
}

var G = new Global()

AES.blockSize = 4 * 4

AES.prototype.blockSize = AES.blockSize

AES.keySize = 256 / 8

AES.prototype.keySize = AES.keySize

function bufferToArray (buf) {
  var len = buf.length / 4
  var out = new Array(len)
  var i = -1
  while (++i < len) {
    out[i] = buf.readUInt32BE(i * 4)
  }
  return out
}
function AES (key) {
  this._key = bufferToArray(key)
  this._doReset()
}

AES.prototype._doReset = function () {
  var invKsRow, keySize, keyWords, ksRow, ksRows, t
  keyWords = this._key
  keySize = keyWords.length
  this._nRounds = keySize + 6
  ksRows = (this._nRounds + 1) * 4
  this._keySchedule = []
  for (ksRow = 0; ksRow < ksRows; ksRow++) {
    this._keySchedule[ksRow] = ksRow < keySize ? keyWords[ksRow] : (t = this._keySchedule[ksRow - 1], (ksRow % keySize) === 0 ? (t = (t << 8) | (t >>> 24), t = (G.SBOX[t >>> 24] << 24) | (G.SBOX[(t >>> 16) & 0xff] << 16) | (G.SBOX[(t >>> 8) & 0xff] << 8) | G.SBOX[t & 0xff], t ^= G.RCON[(ksRow / keySize) | 0] << 24) : keySize > 6 && ksRow % keySize === 4 ? t = (G.SBOX[t >>> 24] << 24) | (G.SBOX[(t >>> 16) & 0xff] << 16) | (G.SBOX[(t >>> 8) & 0xff] << 8) | G.SBOX[t & 0xff] : void 0, this._keySchedule[ksRow - keySize] ^ t)
  }
  this._invKeySchedule = []
  for (invKsRow = 0; invKsRow < ksRows; invKsRow++) {
    ksRow = ksRows - invKsRow
    t = this._keySchedule[ksRow - (invKsRow % 4 ? 0 : 4)]
    this._invKeySchedule[invKsRow] = invKsRow < 4 || ksRow <= 4 ? t : G.INV_SUB_MIX[0][G.SBOX[t >>> 24]] ^ G.INV_SUB_MIX[1][G.SBOX[(t >>> 16) & 0xff]] ^ G.INV_SUB_MIX[2][G.SBOX[(t >>> 8) & 0xff]] ^ G.INV_SUB_MIX[3][G.SBOX[t & 0xff]]
  }
  return true
}

AES.prototype.encryptBlock = function (M) {
  M = bufferToArray(new Buffer(M))
  var out = this._doCryptBlock(M, this._keySchedule, G.SUB_MIX, G.SBOX)
  var buf = new Buffer(16)
  buf.writeUInt32BE(out[0], 0)
  buf.writeUInt32BE(out[1], 4)
  buf.writeUInt32BE(out[2], 8)
  buf.writeUInt32BE(out[3], 12)
  return buf
}

AES.prototype.decryptBlock = function (M) {
  M = bufferToArray(new Buffer(M))
  var temp = [M[3], M[1]]
  M[1] = temp[0]
  M[3] = temp[1]
  var out = this._doCryptBlock(M, this._invKeySchedule, G.INV_SUB_MIX, G.INV_SBOX)
  var buf = new Buffer(16)
  buf.writeUInt32BE(out[0], 0)
  buf.writeUInt32BE(out[3], 4)
  buf.writeUInt32BE(out[2], 8)
  buf.writeUInt32BE(out[1], 12)
  return buf
}

AES.prototype.scrub = function () {
  scrub_vec(this._keySchedule)
  scrub_vec(this._invKeySchedule)
  scrub_vec(this._key)
}

AES.prototype._doCryptBlock = function (M, keySchedule, SUB_MIX, SBOX) {
  var ksRow, s0, s1, s2, s3, t0, t1, t2, t3

  s0 = M[0] ^ keySchedule[0]
  s1 = M[1] ^ keySchedule[1]
  s2 = M[2] ^ keySchedule[2]
  s3 = M[3] ^ keySchedule[3]
  ksRow = 4
  for (var round = 1; round < this._nRounds; round++) {
    t0 = SUB_MIX[0][s0 >>> 24] ^ SUB_MIX[1][(s1 >>> 16) & 0xff] ^ SUB_MIX[2][(s2 >>> 8) & 0xff] ^ SUB_MIX[3][s3 & 0xff] ^ keySchedule[ksRow++]
    t1 = SUB_MIX[0][s1 >>> 24] ^ SUB_MIX[1][(s2 >>> 16) & 0xff] ^ SUB_MIX[2][(s3 >>> 8) & 0xff] ^ SUB_MIX[3][s0 & 0xff] ^ keySchedule[ksRow++]
    t2 = SUB_MIX[0][s2 >>> 24] ^ SUB_MIX[1][(s3 >>> 16) & 0xff] ^ SUB_MIX[2][(s0 >>> 8) & 0xff] ^ SUB_MIX[3][s1 & 0xff] ^ keySchedule[ksRow++]
    t3 = SUB_MIX[0][s3 >>> 24] ^ SUB_MIX[1][(s0 >>> 16) & 0xff] ^ SUB_MIX[2][(s1 >>> 8) & 0xff] ^ SUB_MIX[3][s2 & 0xff] ^ keySchedule[ksRow++]
    s0 = t0
    s1 = t1
    s2 = t2
    s3 = t3
  }
  t0 = ((SBOX[s0 >>> 24] << 24) | (SBOX[(s1 >>> 16) & 0xff] << 16) | (SBOX[(s2 >>> 8) & 0xff] << 8) | SBOX[s3 & 0xff]) ^ keySchedule[ksRow++]
  t1 = ((SBOX[s1 >>> 24] << 24) | (SBOX[(s2 >>> 16) & 0xff] << 16) | (SBOX[(s3 >>> 8) & 0xff] << 8) | SBOX[s0 & 0xff]) ^ keySchedule[ksRow++]
  t2 = ((SBOX[s2 >>> 24] << 24) | (SBOX[(s3 >>> 16) & 0xff] << 16) | (SBOX[(s0 >>> 8) & 0xff] << 8) | SBOX[s1 & 0xff]) ^ keySchedule[ksRow++]
  t3 = ((SBOX[s3 >>> 24] << 24) | (SBOX[(s0 >>> 16) & 0xff] << 16) | (SBOX[(s1 >>> 8) & 0xff] << 8) | SBOX[s2 & 0xff]) ^ keySchedule[ksRow++]
  return [
    fixup_uint32(t0),
    fixup_uint32(t1),
    fixup_uint32(t2),
    fixup_uint32(t3)
  ]
}

exports.AES = AES

}).call(this,require("buffer").Buffer)

},{"buffer":"/Users/jrmerz/dev/cstars/AHB/farm-budgets-app/node_modules/buffer/index.js"}],"/Users/jrmerz/dev/cstars/AHB/farm-budgets-app/node_modules/browserify-aes/authCipher.js":[function(require,module,exports){
(function (Buffer){
var aes = require('./aes')
var Transform = require('cipher-base')
var inherits = require('inherits')
var GHASH = require('./ghash')
var xor = require('buffer-xor')
inherits(StreamCipher, Transform)
module.exports = StreamCipher

function StreamCipher (mode, key, iv, decrypt) {
  if (!(this instanceof StreamCipher)) {
    return new StreamCipher(mode, key, iv)
  }
  Transform.call(this)
  this._finID = Buffer.concat([iv, new Buffer([0, 0, 0, 1])])
  iv = Buffer.concat([iv, new Buffer([0, 0, 0, 2])])
  this._cipher = new aes.AES(key)
  this._prev = new Buffer(iv.length)
  this._cache = new Buffer('')
  this._secCache = new Buffer('')
  this._decrypt = decrypt
  this._alen = 0
  this._len = 0
  iv.copy(this._prev)
  this._mode = mode
  var h = new Buffer(4)
  h.fill(0)
  this._ghash = new GHASH(this._cipher.encryptBlock(h))
  this._authTag = null
  this._called = false
}
StreamCipher.prototype._update = function (chunk) {
  if (!this._called && this._alen) {
    var rump = 16 - (this._alen % 16)
    if (rump < 16) {
      rump = new Buffer(rump)
      rump.fill(0)
      this._ghash.update(rump)
    }
  }
  this._called = true
  var out = this._mode.encrypt(this, chunk)
  if (this._decrypt) {
    this._ghash.update(chunk)
  } else {
    this._ghash.update(out)
  }
  this._len += chunk.length
  return out
}
StreamCipher.prototype._final = function () {
  if (this._decrypt && !this._authTag) {
    throw new Error('Unsupported state or unable to authenticate data')
  }
  var tag = xor(this._ghash.final(this._alen * 8, this._len * 8), this._cipher.encryptBlock(this._finID))
  if (this._decrypt) {
    if (xorTest(tag, this._authTag)) {
      throw new Error('Unsupported state or unable to authenticate data')
    }
  } else {
    this._authTag = tag
  }
  this._cipher.scrub()
}
StreamCipher.prototype.getAuthTag = function getAuthTag () {
  if (!this._decrypt && Buffer.isBuffer(this._authTag)) {
    return this._authTag
  } else {
    throw new Error('Attempting to get auth tag in unsupported state')
  }
}
StreamCipher.prototype.setAuthTag = function setAuthTag (tag) {
  if (this._decrypt) {
    this._authTag = tag
  } else {
    throw new Error('Attempting to set auth tag in unsupported state')
  }
}
StreamCipher.prototype.setAAD = function setAAD (buf) {
  if (!this._called) {
    this._ghash.update(buf)
    this._alen += buf.length
  } else {
    throw new Error('Attempting to set AAD in unsupported state')
  }
}
function xorTest (a, b) {
  var out = 0
  if (a.length !== b.length) {
    out++
  }
  var len = Math.min(a.length, b.length)
  var i = -1
  while (++i < len) {
    out += (a[i] ^ b[i])
  }
  return out
}

}).call(this,require("buffer").Buffer)

},{"./aes":"/Users/jrmerz/dev/cstars/AHB/farm-budgets-app/node_modules/browserify-aes/aes.js","./ghash":"/Users/jrmerz/dev/cstars/AHB/farm-budgets-app/node_modules/browserify-aes/ghash.js","buffer":"/Users/jrmerz/dev/cstars/AHB/farm-budgets-app/node_modules/buffer/index.js","buffer-xor":"/Users/jrmerz/dev/cstars/AHB/farm-budgets-app/node_modules/buffer-xor/index.js","cipher-base":"/Users/jrmerz/dev/cstars/AHB/farm-budgets-app/node_modules/cipher-base/index.js","inherits":"/Users/jrmerz/dev/cstars/AHB/farm-budgets-app/node_modules/inherits/inherits_browser.js"}],"/Users/jrmerz/dev/cstars/AHB/farm-budgets-app/node_modules/browserify-aes/browser.js":[function(require,module,exports){
var ciphers = require('./encrypter')
exports.createCipher = exports.Cipher = ciphers.createCipher
exports.createCipheriv = exports.Cipheriv = ciphers.createCipheriv
var deciphers = require('./decrypter')
exports.createDecipher = exports.Decipher = deciphers.createDecipher
exports.createDecipheriv = exports.Decipheriv = deciphers.createDecipheriv
var modes = require('./modes')
function getCiphers () {
  return Object.keys(modes)
}
exports.listCiphers = exports.getCiphers = getCiphers

},{"./decrypter":"/Users/jrmerz/dev/cstars/AHB/farm-budgets-app/node_modules/browserify-aes/decrypter.js","./encrypter":"/Users/jrmerz/dev/cstars/AHB/farm-budgets-app/node_modules/browserify-aes/encrypter.js","./modes":"/Users/jrmerz/dev/cstars/AHB/farm-budgets-app/node_modules/browserify-aes/modes.js"}],"/Users/jrmerz/dev/cstars/AHB/farm-budgets-app/node_modules/browserify-aes/decrypter.js":[function(require,module,exports){
(function (Buffer){
var aes = require('./aes')
var Transform = require('cipher-base')
var inherits = require('inherits')
var modes = require('./modes')
var StreamCipher = require('./streamCipher')
var AuthCipher = require('./authCipher')
var ebtk = require('evp_bytestokey')

inherits(Decipher, Transform)
function Decipher (mode, key, iv) {
  if (!(this instanceof Decipher)) {
    return new Decipher(mode, key, iv)
  }
  Transform.call(this)
  this._cache = new Splitter()
  this._last = void 0
  this._cipher = new aes.AES(key)
  this._prev = new Buffer(iv.length)
  iv.copy(this._prev)
  this._mode = mode
  this._autopadding = true
}
Decipher.prototype._update = function (data) {
  this._cache.add(data)
  var chunk
  var thing
  var out = []
  while ((chunk = this._cache.get(this._autopadding))) {
    thing = this._mode.decrypt(this, chunk)
    out.push(thing)
  }
  return Buffer.concat(out)
}
Decipher.prototype._final = function () {
  var chunk = this._cache.flush()
  if (this._autopadding) {
    return unpad(this._mode.decrypt(this, chunk))
  } else if (chunk) {
    throw new Error('data not multiple of block length')
  }
}
Decipher.prototype.setAutoPadding = function (setTo) {
  this._autopadding = !!setTo
}
function Splitter () {
  if (!(this instanceof Splitter)) {
    return new Splitter()
  }
  this.cache = new Buffer('')
}
Splitter.prototype.add = function (data) {
  this.cache = Buffer.concat([this.cache, data])
}

Splitter.prototype.get = function (autoPadding) {
  var out
  if (autoPadding) {
    if (this.cache.length > 16) {
      out = this.cache.slice(0, 16)
      this.cache = this.cache.slice(16)
      return out
    }
  } else {
    if (this.cache.length >= 16) {
      out = this.cache.slice(0, 16)
      this.cache = this.cache.slice(16)
      return out
    }
  }
  return null
}
Splitter.prototype.flush = function () {
  if (this.cache.length) {
    return this.cache
  }
}
function unpad (last) {
  var padded = last[15]
  var i = -1
  while (++i < padded) {
    if (last[(i + (16 - padded))] !== padded) {
      throw new Error('unable to decrypt data')
    }
  }
  if (padded === 16) {
    return
  }
  return last.slice(0, 16 - padded)
}

var modelist = {
  ECB: require('./modes/ecb'),
  CBC: require('./modes/cbc'),
  CFB: require('./modes/cfb'),
  CFB8: require('./modes/cfb8'),
  CFB1: require('./modes/cfb1'),
  OFB: require('./modes/ofb'),
  CTR: require('./modes/ctr'),
  GCM: require('./modes/ctr')
}

function createDecipheriv (suite, password, iv) {
  var config = modes[suite.toLowerCase()]
  if (!config) {
    throw new TypeError('invalid suite type')
  }
  if (typeof iv === 'string') {
    iv = new Buffer(iv)
  }
  if (typeof password === 'string') {
    password = new Buffer(password)
  }
  if (password.length !== config.key / 8) {
    throw new TypeError('invalid key length ' + password.length)
  }
  if (iv.length !== config.iv) {
    throw new TypeError('invalid iv length ' + iv.length)
  }
  if (config.type === 'stream') {
    return new StreamCipher(modelist[config.mode], password, iv, true)
  } else if (config.type === 'auth') {
    return new AuthCipher(modelist[config.mode], password, iv, true)
  }
  return new Decipher(modelist[config.mode], password, iv)
}

function createDecipher (suite, password) {
  var config = modes[suite.toLowerCase()]
  if (!config) {
    throw new TypeError('invalid suite type')
  }
  var keys = ebtk(password, false, config.key, config.iv)
  return createDecipheriv(suite, keys.key, keys.iv)
}
exports.createDecipher = createDecipher
exports.createDecipheriv = createDecipheriv

}).call(this,require("buffer").Buffer)

},{"./aes":"/Users/jrmerz/dev/cstars/AHB/farm-budgets-app/node_modules/browserify-aes/aes.js","./authCipher":"/Users/jrmerz/dev/cstars/AHB/farm-budgets-app/node_modules/browserify-aes/authCipher.js","./modes":"/Users/jrmerz/dev/cstars/AHB/farm-budgets-app/node_modules/browserify-aes/modes.js","./modes/cbc":"/Users/jrmerz/dev/cstars/AHB/farm-budgets-app/node_modules/browserify-aes/modes/cbc.js","./modes/cfb":"/Users/jrmerz/dev/cstars/AHB/farm-budgets-app/node_modules/browserify-aes/modes/cfb.js","./modes/cfb1":"/Users/jrmerz/dev/cstars/AHB/farm-budgets-app/node_modules/browserify-aes/modes/cfb1.js","./modes/cfb8":"/Users/jrmerz/dev/cstars/AHB/farm-budgets-app/node_modules/browserify-aes/modes/cfb8.js","./modes/ctr":"/Users/jrmerz/dev/cstars/AHB/farm-budgets-app/node_modules/browserify-aes/modes/ctr.js","./modes/ecb":"/Users/jrmerz/dev/cstars/AHB/farm-budgets-app/node_modules/browserify-aes/modes/ecb.js","./modes/ofb":"/Users/jrmerz/dev/cstars/AHB/farm-budgets-app/node_modules/browserify-aes/modes/ofb.js","./streamCipher":"/Users/jrmerz/dev/cstars/AHB/farm-budgets-app/node_modules/browserify-aes/streamCipher.js","buffer":"/Users/jrmerz/dev/cstars/AHB/farm-budgets-app/node_modules/buffer/index.js","cipher-base":"/Users/jrmerz/dev/cstars/AHB/farm-budgets-app/node_modules/cipher-base/index.js","evp_bytestokey":"/Users/jrmerz/dev/cstars/AHB/farm-budgets-app/node_modules/evp_bytestokey/index.js","inherits":"/Users/jrmerz/dev/cstars/AHB/farm-budgets-app/node_modules/inherits/inherits_browser.js"}],"/Users/jrmerz/dev/cstars/AHB/farm-budgets-app/node_modules/browserify-aes/encrypter.js":[function(require,module,exports){
(function (Buffer){
var aes = require('./aes')
var Transform = require('cipher-base')
var inherits = require('inherits')
var modes = require('./modes')
var ebtk = require('evp_bytestokey')
var StreamCipher = require('./streamCipher')
var AuthCipher = require('./authCipher')
inherits(Cipher, Transform)
function Cipher (mode, key, iv) {
  if (!(this instanceof Cipher)) {
    return new Cipher(mode, key, iv)
  }
  Transform.call(this)
  this._cache = new Splitter()
  this._cipher = new aes.AES(key)
  this._prev = new Buffer(iv.length)
  iv.copy(this._prev)
  this._mode = mode
  this._autopadding = true
}
Cipher.prototype._update = function (data) {
  this._cache.add(data)
  var chunk
  var thing
  var out = []
  while ((chunk = this._cache.get())) {
    thing = this._mode.encrypt(this, chunk)
    out.push(thing)
  }
  return Buffer.concat(out)
}
Cipher.prototype._final = function () {
  var chunk = this._cache.flush()
  if (this._autopadding) {
    chunk = this._mode.encrypt(this, chunk)
    this._cipher.scrub()
    return chunk
  } else if (chunk.toString('hex') !== '10101010101010101010101010101010') {
    this._cipher.scrub()
    throw new Error('data not multiple of block length')
  }
}
Cipher.prototype.setAutoPadding = function (setTo) {
  this._autopadding = !!setTo
}

function Splitter () {
  if (!(this instanceof Splitter)) {
    return new Splitter()
  }
  this.cache = new Buffer('')
}
Splitter.prototype.add = function (data) {
  this.cache = Buffer.concat([this.cache, data])
}

Splitter.prototype.get = function () {
  if (this.cache.length > 15) {
    var out = this.cache.slice(0, 16)
    this.cache = this.cache.slice(16)
    return out
  }
  return null
}
Splitter.prototype.flush = function () {
  var len = 16 - this.cache.length
  var padBuff = new Buffer(len)

  var i = -1
  while (++i < len) {
    padBuff.writeUInt8(len, i)
  }
  var out = Buffer.concat([this.cache, padBuff])
  return out
}
var modelist = {
  ECB: require('./modes/ecb'),
  CBC: require('./modes/cbc'),
  CFB: require('./modes/cfb'),
  CFB8: require('./modes/cfb8'),
  CFB1: require('./modes/cfb1'),
  OFB: require('./modes/ofb'),
  CTR: require('./modes/ctr'),
  GCM: require('./modes/ctr')
}

function createCipheriv (suite, password, iv) {
  var config = modes[suite.toLowerCase()]
  if (!config) {
    throw new TypeError('invalid suite type')
  }
  if (typeof iv === 'string') {
    iv = new Buffer(iv)
  }
  if (typeof password === 'string') {
    password = new Buffer(password)
  }
  if (password.length !== config.key / 8) {
    throw new TypeError('invalid key length ' + password.length)
  }
  if (iv.length !== config.iv) {
    throw new TypeError('invalid iv length ' + iv.length)
  }
  if (config.type === 'stream') {
    return new StreamCipher(modelist[config.mode], password, iv)
  } else if (config.type === 'auth') {
    return new AuthCipher(modelist[config.mode], password, iv)
  }
  return new Cipher(modelist[config.mode], password, iv)
}
function createCipher (suite, password) {
  var config = modes[suite.toLowerCase()]
  if (!config) {
    throw new TypeError('invalid suite type')
  }
  var keys = ebtk(password, false, config.key, config.iv)
  return createCipheriv(suite, keys.key, keys.iv)
}

exports.createCipheriv = createCipheriv
exports.createCipher = createCipher

}).call(this,require("buffer").Buffer)

},{"./aes":"/Users/jrmerz/dev/cstars/AHB/farm-budgets-app/node_modules/browserify-aes/aes.js","./authCipher":"/Users/jrmerz/dev/cstars/AHB/farm-budgets-app/node_modules/browserify-aes/authCipher.js","./modes":"/Users/jrmerz/dev/cstars/AHB/farm-budgets-app/node_modules/browserify-aes/modes.js","./modes/cbc":"/Users/jrmerz/dev/cstars/AHB/farm-budgets-app/node_modules/browserify-aes/modes/cbc.js","./modes/cfb":"/Users/jrmerz/dev/cstars/AHB/farm-budgets-app/node_modules/browserify-aes/modes/cfb.js","./modes/cfb1":"/Users/jrmerz/dev/cstars/AHB/farm-budgets-app/node_modules/browserify-aes/modes/cfb1.js","./modes/cfb8":"/Users/jrmerz/dev/cstars/AHB/farm-budgets-app/node_modules/browserify-aes/modes/cfb8.js","./modes/ctr":"/Users/jrmerz/dev/cstars/AHB/farm-budgets-app/node_modules/browserify-aes/modes/ctr.js","./modes/ecb":"/Users/jrmerz/dev/cstars/AHB/farm-budgets-app/node_modules/browserify-aes/modes/ecb.js","./modes/ofb":"/Users/jrmerz/dev/cstars/AHB/farm-budgets-app/node_modules/browserify-aes/modes/ofb.js","./streamCipher":"/Users/jrmerz/dev/cstars/AHB/farm-budgets-app/node_modules/browserify-aes/streamCipher.js","buffer":"/Users/jrmerz/dev/cstars/AHB/farm-budgets-app/node_modules/buffer/index.js","cipher-base":"/Users/jrmerz/dev/cstars/AHB/farm-budgets-app/node_modules/cipher-base/index.js","evp_bytestokey":"/Users/jrmerz/dev/cstars/AHB/farm-budgets-app/node_modules/evp_bytestokey/index.js","inherits":"/Users/jrmerz/dev/cstars/AHB/farm-budgets-app/node_modules/inherits/inherits_browser.js"}],"/Users/jrmerz/dev/cstars/AHB/farm-budgets-app/node_modules/browserify-aes/ghash.js":[function(require,module,exports){
(function (Buffer){
var zeros = new Buffer(16)
zeros.fill(0)
module.exports = GHASH
function GHASH (key) {
  this.h = key
  this.state = new Buffer(16)
  this.state.fill(0)
  this.cache = new Buffer('')
}
// from http://bitwiseshiftleft.github.io/sjcl/doc/symbols/src/core_gcm.js.html
// by Juho Vähä-Herttua
GHASH.prototype.ghash = function (block) {
  var i = -1
  while (++i < block.length) {
    this.state[i] ^= block[i]
  }
  this._multiply()
}

GHASH.prototype._multiply = function () {
  var Vi = toArray(this.h)
  var Zi = [0, 0, 0, 0]
  var j, xi, lsb_Vi
  var i = -1
  while (++i < 128) {
    xi = (this.state[~~(i / 8)] & (1 << (7 - i % 8))) !== 0
    if (xi) {
      // Z_i+1 = Z_i ^ V_i
      Zi = xor(Zi, Vi)
    }

    // Store the value of LSB(V_i)
    lsb_Vi = (Vi[3] & 1) !== 0

    // V_i+1 = V_i >> 1
    for (j = 3; j > 0; j--) {
      Vi[j] = (Vi[j] >>> 1) | ((Vi[j - 1] & 1) << 31)
    }
    Vi[0] = Vi[0] >>> 1

    // If LSB(V_i) is 1, V_i+1 = (V_i >> 1) ^ R
    if (lsb_Vi) {
      Vi[0] = Vi[0] ^ (0xe1 << 24)
    }
  }
  this.state = fromArray(Zi)
}
GHASH.prototype.update = function (buf) {
  this.cache = Buffer.concat([this.cache, buf])
  var chunk
  while (this.cache.length >= 16) {
    chunk = this.cache.slice(0, 16)
    this.cache = this.cache.slice(16)
    this.ghash(chunk)
  }
}
GHASH.prototype.final = function (abl, bl) {
  if (this.cache.length) {
    this.ghash(Buffer.concat([this.cache, zeros], 16))
  }
  this.ghash(fromArray([
    0, abl,
    0, bl
  ]))
  return this.state
}

function toArray (buf) {
  return [
    buf.readUInt32BE(0),
    buf.readUInt32BE(4),
    buf.readUInt32BE(8),
    buf.readUInt32BE(12)
  ]
}
function fromArray (out) {
  out = out.map(fixup_uint32)
  var buf = new Buffer(16)
  buf.writeUInt32BE(out[0], 0)
  buf.writeUInt32BE(out[1], 4)
  buf.writeUInt32BE(out[2], 8)
  buf.writeUInt32BE(out[3], 12)
  return buf
}
var uint_max = Math.pow(2, 32)
function fixup_uint32 (x) {
  var ret, x_pos
  ret = x > uint_max || x < 0 ? (x_pos = Math.abs(x) % uint_max, x < 0 ? uint_max - x_pos : x_pos) : x
  return ret
}
function xor (a, b) {
  return [
    a[0] ^ b[0],
    a[1] ^ b[1],
    a[2] ^ b[2],
    a[3] ^ b[3]
  ]
}

}).call(this,require("buffer").Buffer)

},{"buffer":"/Users/jrmerz/dev/cstars/AHB/farm-budgets-app/node_modules/buffer/index.js"}],"/Users/jrmerz/dev/cstars/AHB/farm-budgets-app/node_modules/browserify-aes/modes.js":[function(require,module,exports){
exports['aes-128-ecb'] = {
  cipher: 'AES',
  key: 128,
  iv: 0,
  mode: 'ECB',
  type: 'block'
}
exports['aes-192-ecb'] = {
  cipher: 'AES',
  key: 192,
  iv: 0,
  mode: 'ECB',
  type: 'block'
}
exports['aes-256-ecb'] = {
  cipher: 'AES',
  key: 256,
  iv: 0,
  mode: 'ECB',
  type: 'block'
}
exports['aes-128-cbc'] = {
  cipher: 'AES',
  key: 128,
  iv: 16,
  mode: 'CBC',
  type: 'block'
}
exports['aes-192-cbc'] = {
  cipher: 'AES',
  key: 192,
  iv: 16,
  mode: 'CBC',
  type: 'block'
}
exports['aes-256-cbc'] = {
  cipher: 'AES',
  key: 256,
  iv: 16,
  mode: 'CBC',
  type: 'block'
}
exports['aes128'] = exports['aes-128-cbc']
exports['aes192'] = exports['aes-192-cbc']
exports['aes256'] = exports['aes-256-cbc']
exports['aes-128-cfb'] = {
  cipher: 'AES',
  key: 128,
  iv: 16,
  mode: 'CFB',
  type: 'stream'
}
exports['aes-192-cfb'] = {
  cipher: 'AES',
  key: 192,
  iv: 16,
  mode: 'CFB',
  type: 'stream'
}
exports['aes-256-cfb'] = {
  cipher: 'AES',
  key: 256,
  iv: 16,
  mode: 'CFB',
  type: 'stream'
}
exports['aes-128-cfb8'] = {
  cipher: 'AES',
  key: 128,
  iv: 16,
  mode: 'CFB8',
  type: 'stream'
}
exports['aes-192-cfb8'] = {
  cipher: 'AES',
  key: 192,
  iv: 16,
  mode: 'CFB8',
  type: 'stream'
}
exports['aes-256-cfb8'] = {
  cipher: 'AES',
  key: 256,
  iv: 16,
  mode: 'CFB8',
  type: 'stream'
}
exports['aes-128-cfb1'] = {
  cipher: 'AES',
  key: 128,
  iv: 16,
  mode: 'CFB1',
  type: 'stream'
}
exports['aes-192-cfb1'] = {
  cipher: 'AES',
  key: 192,
  iv: 16,
  mode: 'CFB1',
  type: 'stream'
}
exports['aes-256-cfb1'] = {
  cipher: 'AES',
  key: 256,
  iv: 16,
  mode: 'CFB1',
  type: 'stream'
}
exports['aes-128-ofb'] = {
  cipher: 'AES',
  key: 128,
  iv: 16,
  mode: 'OFB',
  type: 'stream'
}
exports['aes-192-ofb'] = {
  cipher: 'AES',
  key: 192,
  iv: 16,
  mode: 'OFB',
  type: 'stream'
}
exports['aes-256-ofb'] = {
  cipher: 'AES',
  key: 256,
  iv: 16,
  mode: 'OFB',
  type: 'stream'
}
exports['aes-128-ctr'] = {
  cipher: 'AES',
  key: 128,
  iv: 16,
  mode: 'CTR',
  type: 'stream'
}
exports['aes-192-ctr'] = {
  cipher: 'AES',
  key: 192,
  iv: 16,
  mode: 'CTR',
  type: 'stream'
}
exports['aes-256-ctr'] = {
  cipher: 'AES',
  key: 256,
  iv: 16,
  mode: 'CTR',
  type: 'stream'
}
exports['aes-128-gcm'] = {
  cipher: 'AES',
  key: 128,
  iv: 12,
  mode: 'GCM',
  type: 'auth'
}
exports['aes-192-gcm'] = {
  cipher: 'AES',
  key: 192,
  iv: 12,
  mode: 'GCM',
  type: 'auth'
}
exports['aes-256-gcm'] = {
  cipher: 'AES',
  key: 256,
  iv: 12,
  mode: 'GCM',
  type: 'auth'
}

},{}],"/Users/jrmerz/dev/cstars/AHB/farm-budgets-app/node_modules/browserify-aes/modes/cbc.js":[function(require,module,exports){
var xor = require('buffer-xor')

exports.encrypt = function (self, block) {
  var data = xor(block, self._prev)

  self._prev = self._cipher.encryptBlock(data)
  return self._prev
}

exports.decrypt = function (self, block) {
  var pad = self._prev

  self._prev = block
  var out = self._cipher.decryptBlock(block)

  return xor(out, pad)
}

},{"buffer-xor":"/Users/jrmerz/dev/cstars/AHB/farm-budgets-app/node_modules/buffer-xor/index.js"}],"/Users/jrmerz/dev/cstars/AHB/farm-budgets-app/node_modules/browserify-aes/modes/cfb.js":[function(require,module,exports){
(function (Buffer){
var xor = require('buffer-xor')

exports.encrypt = function (self, data, decrypt) {
  var out = new Buffer('')
  var len

  while (data.length) {
    if (self._cache.length === 0) {
      self._cache = self._cipher.encryptBlock(self._prev)
      self._prev = new Buffer('')
    }

    if (self._cache.length <= data.length) {
      len = self._cache.length
      out = Buffer.concat([out, encryptStart(self, data.slice(0, len), decrypt)])
      data = data.slice(len)
    } else {
      out = Buffer.concat([out, encryptStart(self, data, decrypt)])
      break
    }
  }

  return out
}
function encryptStart (self, data, decrypt) {
  var len = data.length
  var out = xor(data, self._cache)
  self._cache = self._cache.slice(len)
  self._prev = Buffer.concat([self._prev, decrypt ? data : out])
  return out
}

}).call(this,require("buffer").Buffer)

},{"buffer":"/Users/jrmerz/dev/cstars/AHB/farm-budgets-app/node_modules/buffer/index.js","buffer-xor":"/Users/jrmerz/dev/cstars/AHB/farm-budgets-app/node_modules/buffer-xor/index.js"}],"/Users/jrmerz/dev/cstars/AHB/farm-budgets-app/node_modules/browserify-aes/modes/cfb1.js":[function(require,module,exports){
(function (Buffer){
function encryptByte (self, byteParam, decrypt) {
  var pad
  var i = -1
  var len = 8
  var out = 0
  var bit, value
  while (++i < len) {
    pad = self._cipher.encryptBlock(self._prev)
    bit = (byteParam & (1 << (7 - i))) ? 0x80 : 0
    value = pad[0] ^ bit
    out += ((value & 0x80) >> (i % 8))
    self._prev = shiftIn(self._prev, decrypt ? bit : value)
  }
  return out
}
exports.encrypt = function (self, chunk, decrypt) {
  var len = chunk.length
  var out = new Buffer(len)
  var i = -1
  while (++i < len) {
    out[i] = encryptByte(self, chunk[i], decrypt)
  }
  return out
}
function shiftIn (buffer, value) {
  var len = buffer.length
  var i = -1
  var out = new Buffer(buffer.length)
  buffer = Buffer.concat([buffer, new Buffer([value])])
  while (++i < len) {
    out[i] = buffer[i] << 1 | buffer[i + 1] >> (7)
  }
  return out
}

}).call(this,require("buffer").Buffer)

},{"buffer":"/Users/jrmerz/dev/cstars/AHB/farm-budgets-app/node_modules/buffer/index.js"}],"/Users/jrmerz/dev/cstars/AHB/farm-budgets-app/node_modules/browserify-aes/modes/cfb8.js":[function(require,module,exports){
(function (Buffer){
function encryptByte (self, byteParam, decrypt) {
  var pad = self._cipher.encryptBlock(self._prev)
  var out = pad[0] ^ byteParam
  self._prev = Buffer.concat([self._prev.slice(1), new Buffer([decrypt ? byteParam : out])])
  return out
}
exports.encrypt = function (self, chunk, decrypt) {
  var len = chunk.length
  var out = new Buffer(len)
  var i = -1
  while (++i < len) {
    out[i] = encryptByte(self, chunk[i], decrypt)
  }
  return out
}

}).call(this,require("buffer").Buffer)

},{"buffer":"/Users/jrmerz/dev/cstars/AHB/farm-budgets-app/node_modules/buffer/index.js"}],"/Users/jrmerz/dev/cstars/AHB/farm-budgets-app/node_modules/browserify-aes/modes/ctr.js":[function(require,module,exports){
(function (Buffer){
var xor = require('buffer-xor')

function incr32 (iv) {
  var len = iv.length
  var item
  while (len--) {
    item = iv.readUInt8(len)
    if (item === 255) {
      iv.writeUInt8(0, len)
    } else {
      item++
      iv.writeUInt8(item, len)
      break
    }
  }
}

function getBlock (self) {
  var out = self._cipher.encryptBlock(self._prev)
  incr32(self._prev)
  return out
}

exports.encrypt = function (self, chunk) {
  while (self._cache.length < chunk.length) {
    self._cache = Buffer.concat([self._cache, getBlock(self)])
  }
  var pad = self._cache.slice(0, chunk.length)
  self._cache = self._cache.slice(chunk.length)
  return xor(chunk, pad)
}

}).call(this,require("buffer").Buffer)

},{"buffer":"/Users/jrmerz/dev/cstars/AHB/farm-budgets-app/node_modules/buffer/index.js","buffer-xor":"/Users/jrmerz/dev/cstars/AHB/farm-budgets-app/node_modules/buffer-xor/index.js"}],"/Users/jrmerz/dev/cstars/AHB/farm-budgets-app/node_modules/browserify-aes/modes/ecb.js":[function(require,module,exports){
exports.encrypt = function (self, block) {
  return self._cipher.encryptBlock(block)
}
exports.decrypt = function (self, block) {
  return self._cipher.decryptBlock(block)
}

},{}],"/Users/jrmerz/dev/cstars/AHB/farm-budgets-app/node_modules/browserify-aes/modes/ofb.js":[function(require,module,exports){
(function (Buffer){
var xor = require('buffer-xor')

function getBlock (self) {
  self._prev = self._cipher.encryptBlock(self._prev)
  return self._prev
}

exports.encrypt = function (self, chunk) {
  while (self._cache.length < chunk.length) {
    self._cache = Buffer.concat([self._cache, getBlock(self)])
  }

  var pad = self._cache.slice(0, chunk.length)
  self._cache = self._cache.slice(chunk.length)
  return xor(chunk, pad)
}

}).call(this,require("buffer").Buffer)

},{"buffer":"/Users/jrmerz/dev/cstars/AHB/farm-budgets-app/node_modules/buffer/index.js","buffer-xor":"/Users/jrmerz/dev/cstars/AHB/farm-budgets-app/node_modules/buffer-xor/index.js"}],"/Users/jrmerz/dev/cstars/AHB/farm-budgets-app/node_modules/browserify-aes/streamCipher.js":[function(require,module,exports){
(function (Buffer){
var aes = require('./aes')
var Transform = require('cipher-base')
var inherits = require('inherits')

inherits(StreamCipher, Transform)
module.exports = StreamCipher
function StreamCipher (mode, key, iv, decrypt) {
  if (!(this instanceof StreamCipher)) {
    return new StreamCipher(mode, key, iv)
  }
  Transform.call(this)
  this._cipher = new aes.AES(key)
  this._prev = new Buffer(iv.length)
  this._cache = new Buffer('')
  this._secCache = new Buffer('')
  this._decrypt = decrypt
  iv.copy(this._prev)
  this._mode = mode
}
StreamCipher.prototype._update = function (chunk) {
  return this._mode.encrypt(this, chunk, this._decrypt)
}
StreamCipher.prototype._final = function () {
  this._cipher.scrub()
}

}).call(this,require("buffer").Buffer)

},{"./aes":"/Users/jrmerz/dev/cstars/AHB/farm-budgets-app/node_modules/browserify-aes/aes.js","buffer":"/Users/jrmerz/dev/cstars/AHB/farm-budgets-app/node_modules/buffer/index.js","cipher-base":"/Users/jrmerz/dev/cstars/AHB/farm-budgets-app/node_modules/cipher-base/index.js","inherits":"/Users/jrmerz/dev/cstars/AHB/farm-budgets-app/node_modules/inherits/inherits_browser.js"}],"/Users/jrmerz/dev/cstars/AHB/farm-budgets-app/node_modules/browserify-cipher/browser.js":[function(require,module,exports){
var ebtk = require('evp_bytestokey')
var aes = require('browserify-aes/browser')
var DES = require('browserify-des')
var desModes = require('browserify-des/modes')
var aesModes = require('browserify-aes/modes')
function createCipher (suite, password) {
  var keyLen, ivLen
  suite = suite.toLowerCase()
  if (aesModes[suite]) {
    keyLen = aesModes[suite].key
    ivLen = aesModes[suite].iv
  } else if (desModes[suite]) {
    keyLen = desModes[suite].key * 8
    ivLen = desModes[suite].iv
  } else {
    throw new TypeError('invalid suite type')
  }
  var keys = ebtk(password, false, keyLen, ivLen)
  return createCipheriv(suite, keys.key, keys.iv)
}
function createDecipher (suite, password) {
  var keyLen, ivLen
  suite = suite.toLowerCase()
  if (aesModes[suite]) {
    keyLen = aesModes[suite].key
    ivLen = aesModes[suite].iv
  } else if (desModes[suite]) {
    keyLen = desModes[suite].key * 8
    ivLen = desModes[suite].iv
  } else {
    throw new TypeError('invalid suite type')
  }
  var keys = ebtk(password, false, keyLen, ivLen)
  return createDecipheriv(suite, keys.key, keys.iv)
}

function createCipheriv (suite, key, iv) {
  suite = suite.toLowerCase()
  if (aesModes[suite]) {
    return aes.createCipheriv(suite, key, iv)
  } else if (desModes[suite]) {
    return new DES({
      key: key,
      iv: iv,
      mode: suite
    })
  } else {
    throw new TypeError('invalid suite type')
  }
}
function createDecipheriv (suite, key, iv) {
  suite = suite.toLowerCase()
  if (aesModes[suite]) {
    return aes.createDecipheriv(suite, key, iv)
  } else if (desModes[suite]) {
    return new DES({
      key: key,
      iv: iv,
      mode: suite,
      decrypt: true
    })
  } else {
    throw new TypeError('invalid suite type')
  }
}
exports.createCipher = exports.Cipher = createCipher
exports.createCipheriv = exports.Cipheriv = createCipheriv
exports.createDecipher = exports.Decipher = createDecipher
exports.createDecipheriv = exports.Decipheriv = createDecipheriv
function getCiphers () {
  return Object.keys(desModes).concat(aes.getCiphers())
}
exports.listCiphers = exports.getCiphers = getCiphers

},{"browserify-aes/browser":"/Users/jrmerz/dev/cstars/AHB/farm-budgets-app/node_modules/browserify-aes/browser.js","browserify-aes/modes":"/Users/jrmerz/dev/cstars/AHB/farm-budgets-app/node_modules/browserify-aes/modes.js","browserify-des":"/Users/jrmerz/dev/cstars/AHB/farm-budgets-app/node_modules/browserify-des/index.js","browserify-des/modes":"/Users/jrmerz/dev/cstars/AHB/farm-budgets-app/node_modules/browserify-des/modes.js","evp_bytestokey":"/Users/jrmerz/dev/cstars/AHB/farm-budgets-app/node_modules/evp_bytestokey/index.js"}],"/Users/jrmerz/dev/cstars/AHB/farm-budgets-app/node_modules/browserify-des/index.js":[function(require,module,exports){
(function (Buffer){
var CipherBase = require('cipher-base')
var des = require('des.js')
var inherits = require('inherits')

var modes = {
  'des-ede3-cbc': des.CBC.instantiate(des.EDE),
  'des-ede3': des.EDE,
  'des-ede-cbc': des.CBC.instantiate(des.EDE),
  'des-ede': des.EDE,
  'des-cbc': des.CBC.instantiate(des.DES),
  'des-ecb': des.DES
}
modes.des = modes['des-cbc']
modes.des3 = modes['des-ede3-cbc']
module.exports = DES
inherits(DES, CipherBase)
function DES (opts) {
  CipherBase.call(this)
  var modeName = opts.mode.toLowerCase()
  var mode = modes[modeName]
  var type
  if (opts.decrypt) {
    type = 'decrypt'
  } else {
    type = 'encrypt'
  }
  var key = opts.key
  if (modeName === 'des-ede' || modeName === 'des-ede-cbc') {
    key = Buffer.concat([key, key.slice(0, 8)])
  }
  var iv = opts.iv
  this._des = mode.create({
    key: key,
    iv: iv,
    type: type
  })
}
DES.prototype._update = function (data) {
  return new Buffer(this._des.update(data))
}
DES.prototype._final = function () {
  return new Buffer(this._des.final())
}

}).call(this,require("buffer").Buffer)

},{"buffer":"/Users/jrmerz/dev/cstars/AHB/farm-budgets-app/node_modules/buffer/index.js","cipher-base":"/Users/jrmerz/dev/cstars/AHB/farm-budgets-app/node_modules/cipher-base/index.js","des.js":"/Users/jrmerz/dev/cstars/AHB/farm-budgets-app/node_modules/des.js/lib/des.js","inherits":"/Users/jrmerz/dev/cstars/AHB/farm-budgets-app/node_modules/inherits/inherits_browser.js"}],"/Users/jrmerz/dev/cstars/AHB/farm-budgets-app/node_modules/browserify-des/modes.js":[function(require,module,exports){
exports['des-ecb'] = {
  key: 8,
  iv: 0
}
exports['des-cbc'] = exports.des = {
  key: 8,
  iv: 8
}
exports['des-ede3-cbc'] = exports.des3 = {
  key: 24,
  iv: 8
}
exports['des-ede3'] = {
  key: 24,
  iv: 0
}
exports['des-ede-cbc'] = {
  key: 16,
  iv: 8
}
exports['des-ede'] = {
  key: 16,
  iv: 0
}

},{}],"/Users/jrmerz/dev/cstars/AHB/farm-budgets-app/node_modules/browserify-rsa/index.js":[function(require,module,exports){
(function (Buffer){
var bn = require('bn.js');
var randomBytes = require('randombytes');
module.exports = crt;
function blind(priv) {
  var r = getr(priv);
  var blinder = r.toRed(bn.mont(priv.modulus))
  .redPow(new bn(priv.publicExponent)).fromRed();
  return {
    blinder: blinder,
    unblinder:r.invm(priv.modulus)
  };
}
function crt(msg, priv) {
  var blinds = blind(priv);
  var len = priv.modulus.byteLength();
  var mod = bn.mont(priv.modulus);
  var blinded = new bn(msg).mul(blinds.blinder).umod(priv.modulus);
  var c1 = blinded.toRed(bn.mont(priv.prime1));
  var c2 = blinded.toRed(bn.mont(priv.prime2));
  var qinv = priv.coefficient;
  var p = priv.prime1;
  var q = priv.prime2;
  var m1 = c1.redPow(priv.exponent1);
  var m2 = c2.redPow(priv.exponent2);
  m1 = m1.fromRed();
  m2 = m2.fromRed();
  var h = m1.isub(m2).imul(qinv).umod(p);
  h.imul(q);
  m2.iadd(h);
  return new Buffer(m2.imul(blinds.unblinder).umod(priv.modulus).toArray(false, len));
}
crt.getr = getr;
function getr(priv) {
  var len = priv.modulus.byteLength();
  var r = new bn(randomBytes(len));
  while (r.cmp(priv.modulus) >=  0 || !r.umod(priv.prime1) || !r.umod(priv.prime2)) {
    r = new bn(randomBytes(len));
  }
  return r;
}

}).call(this,require("buffer").Buffer)

},{"bn.js":"/Users/jrmerz/dev/cstars/AHB/farm-budgets-app/node_modules/browserify-rsa/node_modules/bn.js/lib/bn.js","buffer":"/Users/jrmerz/dev/cstars/AHB/farm-budgets-app/node_modules/buffer/index.js","randombytes":"/Users/jrmerz/dev/cstars/AHB/farm-budgets-app/node_modules/randombytes/browser.js"}],"/Users/jrmerz/dev/cstars/AHB/farm-budgets-app/node_modules/browserify-rsa/node_modules/bn.js/lib/bn.js":[function(require,module,exports){
(function (module, exports) {
  'use strict';

  // Utils
  function assert (val, msg) {
    if (!val) throw new Error(msg || 'Assertion failed');
  }

  // Could use `inherits` module, but don't want to move from single file
  // architecture yet.
  function inherits (ctor, superCtor) {
    ctor.super_ = superCtor;
    var TempCtor = function () {};
    TempCtor.prototype = superCtor.prototype;
    ctor.prototype = new TempCtor();
    ctor.prototype.constructor = ctor;
  }

  // BN

  function BN (number, base, endian) {
    // May be `new BN(bn)` ?
    if (number !== null &&
      typeof number === 'object' &&
      Array.isArray(number.words)) {
      return number;
    }

    this.negative = 0;
    this.words = null;
    this.length = 0;

    // Reduction context
    this.red = null;

    if (number !== null) {
      if (base === 'le' || base === 'be') {
        endian = base;
        base = 10;
      }

      this._init(number || 0, base || 10, endian || 'be');
    }
  }
  if (typeof module === 'object') {
    module.exports = BN;
  } else {
    exports.BN = BN;
  }

  BN.BN = BN;
  BN.wordSize = 26;

  BN.max = function max (left, right) {
    if (left.cmp(right) > 0) return left;
    return right;
  };

  BN.min = function min (left, right) {
    if (left.cmp(right) < 0) return left;
    return right;
  };

  BN.prototype._init = function init (number, base, endian) {
    if (typeof number === 'number') {
      return this._initNumber(number, base, endian);
    }

    if (typeof number === 'object') {
      return this._initArray(number, base, endian);
    }

    if (base === 'hex') {
      base = 16;
    }
    assert(base === (base | 0) && base >= 2 && base <= 36);

    number = number.toString().replace(/\s+/g, '');
    var start = 0;
    if (number[0] === '-') {
      start++;
    }

    if (base === 16) {
      this._parseHex(number, start);
    } else {
      this._parseBase(number, base, start);
    }

    if (number[0] === '-') {
      this.negative = 1;
    }

    this.strip();

    if (endian !== 'le') return;

    this._initArray(this.toArray(), base, endian);
  };

  BN.prototype._initNumber = function _initNumber (number, base, endian) {
    if (number < 0) {
      this.negative = 1;
      number = -number;
    }
    if (number < 0x4000000) {
      this.words = [ number & 0x3ffffff ];
      this.length = 1;
    } else if (number < 0x10000000000000) {
      this.words = [
        number & 0x3ffffff,
        (number / 0x4000000) & 0x3ffffff
      ];
      this.length = 2;
    } else {
      assert(number < 0x20000000000000); // 2 ^ 53 (unsafe)
      this.words = [
        number & 0x3ffffff,
        (number / 0x4000000) & 0x3ffffff,
        1
      ];
      this.length = 3;
    }

    if (endian !== 'le') return;

    // Reverse the bytes
    this._initArray(this.toArray(), base, endian);
  };

  BN.prototype._initArray = function _initArray (number, base, endian) {
    // Perhaps a Uint8Array
    assert(typeof number.length === 'number');
    if (number.length <= 0) {
      this.words = [ 0 ];
      this.length = 1;
      return this;
    }

    this.length = Math.ceil(number.length / 3);
    this.words = new Array(this.length);
    for (var i = 0; i < this.length; i++) {
      this.words[i] = 0;
    }

    var j, w;
    var off = 0;
    if (endian === 'be') {
      for (i = number.length - 1, j = 0; i >= 0; i -= 3) {
        w = number[i] | (number[i - 1] << 8) | (number[i - 2] << 16);
        this.words[j] |= (w << off) & 0x3ffffff;
        this.words[j + 1] = (w >>> (26 - off)) & 0x3ffffff;
        off += 24;
        if (off >= 26) {
          off -= 26;
          j++;
        }
      }
    } else if (endian === 'le') {
      for (i = 0, j = 0; i < number.length; i += 3) {
        w = number[i] | (number[i + 1] << 8) | (number[i + 2] << 16);
        this.words[j] |= (w << off) & 0x3ffffff;
        this.words[j + 1] = (w >>> (26 - off)) & 0x3ffffff;
        off += 24;
        if (off >= 26) {
          off -= 26;
          j++;
        }
      }
    }
    return this.strip();
  };

  function parseHex (str, start, end) {
    var r = 0;
    var len = Math.min(str.length, end);
    for (var i = start; i < len; i++) {
      var c = str.charCodeAt(i) - 48;

      r <<= 4;

      // 'a' - 'f'
      if (c >= 49 && c <= 54) {
        r |= c - 49 + 0xa;

      // 'A' - 'F'
      } else if (c >= 17 && c <= 22) {
        r |= c - 17 + 0xa;

      // '0' - '9'
      } else {
        r |= c & 0xf;
      }
    }
    return r;
  }

  BN.prototype._parseHex = function _parseHex (number, start) {
    // Create possibly bigger array to ensure that it fits the number
    this.length = Math.ceil((number.length - start) / 6);
    this.words = new Array(this.length);
    for (var i = 0; i < this.length; i++) {
      this.words[i] = 0;
    }

    var j, w;
    // Scan 24-bit chunks and add them to the number
    var off = 0;
    for (i = number.length - 6, j = 0; i >= start; i -= 6) {
      w = parseHex(number, i, i + 6);
      this.words[j] |= (w << off) & 0x3ffffff;
      this.words[j + 1] |= w >>> (26 - off) & 0x3fffff;
      off += 24;
      if (off >= 26) {
        off -= 26;
        j++;
      }
    }
    if (i + 6 !== start) {
      w = parseHex(number, start, i + 6);
      this.words[j] |= (w << off) & 0x3ffffff;
      this.words[j + 1] |= w >>> (26 - off) & 0x3fffff;
    }
    this.strip();
  };

  function parseBase (str, start, end, mul) {
    var r = 0;
    var len = Math.min(str.length, end);
    for (var i = start; i < len; i++) {
      var c = str.charCodeAt(i) - 48;

      r *= mul;

      // 'a'
      if (c >= 49) {
        r += c - 49 + 0xa;

      // 'A'
      } else if (c >= 17) {
        r += c - 17 + 0xa;

      // '0' - '9'
      } else {
        r += c;
      }
    }
    return r;
  }

  BN.prototype._parseBase = function _parseBase (number, base, start) {
    // Initialize as zero
    this.words = [ 0 ];
    this.length = 1;

    // Find length of limb in base
    for (var limbLen = 0, limbPow = 1; limbPow <= 0x3ffffff; limbPow *= base) {
      limbLen++;
    }
    limbLen--;
    limbPow = (limbPow / base) | 0;

    var total = number.length - start;
    var mod = total % limbLen;
    var end = Math.min(total, total - mod) + start;

    var word = 0;
    for (var i = start; i < end; i += limbLen) {
      word = parseBase(number, i, i + limbLen, base);

      this.imuln(limbPow);
      if (this.words[0] + word < 0x4000000) {
        this.words[0] += word;
      } else {
        this._iaddn(word);
      }
    }

    if (mod !== 0) {
      var pow = 1;
      word = parseBase(number, i, number.length, base);

      for (i = 0; i < mod; i++) {
        pow *= base;
      }

      this.imuln(pow);
      if (this.words[0] + word < 0x4000000) {
        this.words[0] += word;
      } else {
        this._iaddn(word);
      }
    }
  };

  BN.prototype.copy = function copy (dest) {
    dest.words = new Array(this.length);
    for (var i = 0; i < this.length; i++) {
      dest.words[i] = this.words[i];
    }
    dest.length = this.length;
    dest.negative = this.negative;
    dest.red = this.red;
  };

  BN.prototype.clone = function clone () {
    var r = new BN(null);
    this.copy(r);
    return r;
  };

  // Remove leading `0` from `this`
  BN.prototype.strip = function strip () {
    while (this.length > 1 && this.words[this.length - 1] === 0) {
      this.length--;
    }
    return this._normSign();
  };

  BN.prototype._normSign = function _normSign () {
    // -0 = 0
    if (this.length === 1 && this.words[0] === 0) {
      this.negative = 0;
    }
    return this;
  };

  BN.prototype.inspect = function inspect () {
    return (this.red ? '<BN-R: ' : '<BN: ') + this.toString(16) + '>';
  };

  /*

  var zeros = [];
  var groupSizes = [];
  var groupBases = [];

  var s = '';
  var i = -1;
  while (++i < BN.wordSize) {
    zeros[i] = s;
    s += '0';
  }
  groupSizes[0] = 0;
  groupSizes[1] = 0;
  groupBases[0] = 0;
  groupBases[1] = 0;
  var base = 2 - 1;
  while (++base < 36 + 1) {
    var groupSize = 0;
    var groupBase = 1;
    while (groupBase < (1 << BN.wordSize) / base) {
      groupBase *= base;
      groupSize += 1;
    }
    groupSizes[base] = groupSize;
    groupBases[base] = groupBase;
  }

  */

  var zeros = [
    '',
    '0',
    '00',
    '000',
    '0000',
    '00000',
    '000000',
    '0000000',
    '00000000',
    '000000000',
    '0000000000',
    '00000000000',
    '000000000000',
    '0000000000000',
    '00000000000000',
    '000000000000000',
    '0000000000000000',
    '00000000000000000',
    '000000000000000000',
    '0000000000000000000',
    '00000000000000000000',
    '000000000000000000000',
    '0000000000000000000000',
    '00000000000000000000000',
    '000000000000000000000000',
    '0000000000000000000000000'
  ];

  var groupSizes = [
    0, 0,
    25, 16, 12, 11, 10, 9, 8,
    8, 7, 7, 7, 7, 6, 6,
    6, 6, 6, 6, 6, 5, 5,
    5, 5, 5, 5, 5, 5, 5,
    5, 5, 5, 5, 5, 5, 5
  ];

  var groupBases = [
    0, 0,
    33554432, 43046721, 16777216, 48828125, 60466176, 40353607, 16777216,
    43046721, 10000000, 19487171, 35831808, 62748517, 7529536, 11390625,
    16777216, 24137569, 34012224, 47045881, 64000000, 4084101, 5153632,
    6436343, 7962624, 9765625, 11881376, 14348907, 17210368, 20511149,
    24300000, 28629151, 33554432, 39135393, 45435424, 52521875, 60466176
  ];

  BN.prototype.toString = function toString (base, padding) {
    base = base || 10;
    padding = padding | 0 || 1;

    var out;
    if (base === 16 || base === 'hex') {
      out = '';
      var off = 0;
      var carry = 0;
      for (var i = 0; i < this.length; i++) {
        var w = this.words[i];
        var word = (((w << off) | carry) & 0xffffff).toString(16);
        carry = (w >>> (24 - off)) & 0xffffff;
        if (carry !== 0 || i !== this.length - 1) {
          out = zeros[6 - word.length] + word + out;
        } else {
          out = word + out;
        }
        off += 2;
        if (off >= 26) {
          off -= 26;
          i--;
        }
      }
      if (carry !== 0) {
        out = carry.toString(16) + out;
      }
      while (out.length % padding !== 0) {
        out = '0' + out;
      }
      if (this.negative !== 0) {
        out = '-' + out;
      }
      return out;
    }

    if (base === (base | 0) && base >= 2 && base <= 36) {
      // var groupSize = Math.floor(BN.wordSize * Math.LN2 / Math.log(base));
      var groupSize = groupSizes[base];
      // var groupBase = Math.pow(base, groupSize);
      var groupBase = groupBases[base];
      out = '';
      var c = this.clone();
      c.negative = 0;
      while (!c.isZero()) {
        var r = c.modn(groupBase).toString(base);
        c = c.idivn(groupBase);

        if (!c.isZero()) {
          out = zeros[groupSize - r.length] + r + out;
        } else {
          out = r + out;
        }
      }
      if (this.isZero()) {
        out = '0' + out;
      }
      while (out.length % padding !== 0) {
        out = '0' + out;
      }
      if (this.negative !== 0) {
        out = '-' + out;
      }
      return out;
    }

    assert(false, 'Base should be between 2 and 36');
  };

  BN.prototype.toNumber = function toNumber () {
    assert(this.bitLength() <= 53, 'Number can only safely store up to 53 bits');
    return parseInt(this.toString(), 10);
  };

  BN.prototype.toJSON = function toJSON () {
    return this.toString(16);
  };

  BN.prototype.toArray = function toArray (endian, length) {
    var byteLength = this.byteLength();
    var reqLength = length || Math.max(1, byteLength);
    assert(byteLength <= reqLength, 'byte array longer than desired length');
    assert(reqLength > 0, 'Requested array length <= 0');

    this.strip();
    var littleEndian = endian === 'le';
    var res = new Array(reqLength);

    var b, i;
    var q = this.clone();
    if (!littleEndian) {
      // Assume big-endian
      for (i = 0; i < reqLength - byteLength; i++) {
        res[i] = 0;
      }

      for (i = 0; !q.isZero(); i++) {
        b = q.andln(0xff);
        q.iushrn(8);

        res[reqLength - i - 1] = b;
      }
    } else {
      for (i = 0; !q.isZero(); i++) {
        b = q.andln(0xff);
        q.iushrn(8);

        res[i] = b;
      }

      for (; i < reqLength; i++) {
        res[i] = 0;
      }
    }

    return res;
  };

  if (Math.clz32) {
    BN.prototype._countBits = function _countBits (w) {
      return 32 - Math.clz32(w);
    };
  } else {
    BN.prototype._countBits = function _countBits (w) {
      var t = w;
      var r = 0;
      if (t >= 0x1000) {
        r += 13;
        t >>>= 13;
      }
      if (t >= 0x40) {
        r += 7;
        t >>>= 7;
      }
      if (t >= 0x8) {
        r += 4;
        t >>>= 4;
      }
      if (t >= 0x02) {
        r += 2;
        t >>>= 2;
      }
      return r + t;
    };
  }

  BN.prototype._zeroBits = function _zeroBits (w) {
    // Short-cut
    if (w === 0) return 26;

    var t = w;
    var r = 0;
    if ((t & 0x1fff) === 0) {
      r += 13;
      t >>>= 13;
    }
    if ((t & 0x7f) === 0) {
      r += 7;
      t >>>= 7;
    }
    if ((t & 0xf) === 0) {
      r += 4;
      t >>>= 4;
    }
    if ((t & 0x3) === 0) {
      r += 2;
      t >>>= 2;
    }
    if ((t & 0x1) === 0) {
      r++;
    }
    return r;
  };

  // Return number of used bits in a BN
  BN.prototype.bitLength = function bitLength () {
    var w = this.words[this.length - 1];
    var hi = this._countBits(w);
    return (this.length - 1) * 26 + hi;
  };

  function toBitArray (num) {
    var w = new Array(num.bitLength());

    for (var bit = 0; bit < w.length; bit++) {
      var off = (bit / 26) | 0;
      var wbit = bit % 26;

      w[bit] = (num.words[off] & (1 << wbit)) >>> wbit;
    }

    return w;
  }

  // Number of trailing zero bits
  BN.prototype.zeroBits = function zeroBits () {
    if (this.isZero()) return 0;

    var r = 0;
    for (var i = 0; i < this.length; i++) {
      var b = this._zeroBits(this.words[i]);
      r += b;
      if (b !== 26) break;
    }
    return r;
  };

  BN.prototype.byteLength = function byteLength () {
    return Math.ceil(this.bitLength() / 8);
  };

  BN.prototype.isNeg = function isNeg () {
    return this.negative !== 0;
  };

  // Return negative clone of `this`
  BN.prototype.neg = function neg () {
    if (this.isZero()) return this.clone();

    var r = this.clone();
    r.negative = this.negative ^ 1;
    return r;
  };

  BN.prototype.ineg = function ineg () {
    this.negative ^= 1;
    return this;
  };

  // Or `num` with `this` in-place
  BN.prototype.iuor = function iuor (num) {
    while (this.length < num.length) {
      this.words[this.length++] = 0;
    }

    for (var i = 0; i < num.length; i++) {
      this.words[i] = this.words[i] | num.words[i];
    }

    return this.strip();
  };

  BN.prototype.ior = function ior (num) {
    assert((this.negative | num.negative) === 0);
    return this.iuor(num);
  };

  // Or `num` with `this`
  BN.prototype.or = function or (num) {
    if (this.length > num.length) return this.clone().ior(num);
    return num.clone().ior(this);
  };

  BN.prototype.uor = function uor (num) {
    if (this.length > num.length) return this.clone().iuor(num);
    return num.clone().iuor(this);
  };

  // And `num` with `this` in-place
  BN.prototype.iuand = function iuand (num) {
    // b = min-length(num, this)
    var b;
    if (this.length > num.length) {
      b = num;
    } else {
      b = this;
    }

    for (var i = 0; i < b.length; i++) {
      this.words[i] = this.words[i] & num.words[i];
    }

    this.length = b.length;

    return this.strip();
  };

  BN.prototype.iand = function iand (num) {
    assert((this.negative | num.negative) === 0);
    return this.iuand(num);
  };

  // And `num` with `this`
  BN.prototype.and = function and (num) {
    if (this.length > num.length) return this.clone().iand(num);
    return num.clone().iand(this);
  };

  BN.prototype.uand = function uand (num) {
    if (this.length > num.length) return this.clone().iuand(num);
    return num.clone().iuand(this);
  };

  // Xor `num` with `this` in-place
  BN.prototype.iuxor = function iuxor (num) {
    // a.length > b.length
    var a;
    var b;
    if (this.length > num.length) {
      a = this;
      b = num;
    } else {
      a = num;
      b = this;
    }

    for (var i = 0; i < b.length; i++) {
      this.words[i] = a.words[i] ^ b.words[i];
    }

    if (this !== a) {
      for (; i < a.length; i++) {
        this.words[i] = a.words[i];
      }
    }

    this.length = a.length;

    return this.strip();
  };

  BN.prototype.ixor = function ixor (num) {
    assert((this.negative | num.negative) === 0);
    return this.iuxor(num);
  };

  // Xor `num` with `this`
  BN.prototype.xor = function xor (num) {
    if (this.length > num.length) return this.clone().ixor(num);
    return num.clone().ixor(this);
  };

  BN.prototype.uxor = function uxor (num) {
    if (this.length > num.length) return this.clone().iuxor(num);
    return num.clone().iuxor(this);
  };

  // Not ``this`` with ``width`` bitwidth
  BN.prototype.inotn = function inotn (width) {
    assert(typeof width === 'number' && width >= 0);

    var bytesNeeded = Math.ceil(width / 26) | 0;
    var bitsLeft = width % 26;

    // Extend the buffer with leading zeroes
    while (this.length < bytesNeeded) {
      this.words[this.length++] = 0;
    }

    if (bitsLeft > 0) {
      bytesNeeded--;
    }

    // Handle complete words
    for (var i = 0; i < bytesNeeded; i++) {
      this.words[i] = ~this.words[i] & 0x3ffffff;
    }

    // Handle the residue
    if (bitsLeft > 0) {
      this.words[i] = ~this.words[i] & (0x3ffffff >> (26 - bitsLeft));
    }

    // And remove leading zeroes
    return this.strip();
  };

  BN.prototype.notn = function notn (width) {
    return this.clone().inotn(width);
  };

  // Set `bit` of `this`
  BN.prototype.setn = function setn (bit, val) {
    assert(typeof bit === 'number' && bit >= 0);

    var off = (bit / 26) | 0;
    var wbit = bit % 26;

    while (this.length <= off) {
      this.words[this.length++] = 0;
    }

    if (val) {
      this.words[off] = this.words[off] | (1 << wbit);
    } else {
      this.words[off] = this.words[off] & ~(1 << wbit);
    }

    return this.strip();
  };

  // Add `num` to `this` in-place
  BN.prototype.iadd = function iadd (num) {
    var r;

    // negative + positive
    if (this.negative !== 0 && num.negative === 0) {
      this.negative = 0;
      r = this.isub(num);
      this.negative ^= 1;
      return this._normSign();

    // positive + negative
    } else if (this.negative === 0 && num.negative !== 0) {
      num.negative = 0;
      r = this.isub(num);
      num.negative = 1;
      return r._normSign();
    }

    // a.length > b.length
    var a, b;
    if (this.length > num.length) {
      a = this;
      b = num;
    } else {
      a = num;
      b = this;
    }

    var carry = 0;
    for (var i = 0; i < b.length; i++) {
      r = (a.words[i] | 0) + (b.words[i] | 0) + carry;
      this.words[i] = r & 0x3ffffff;
      carry = r >>> 26;
    }
    for (; carry !== 0 && i < a.length; i++) {
      r = (a.words[i] | 0) + carry;
      this.words[i] = r & 0x3ffffff;
      carry = r >>> 26;
    }

    this.length = a.length;
    if (carry !== 0) {
      this.words[this.length] = carry;
      this.length++;
    // Copy the rest of the words
    } else if (a !== this) {
      for (; i < a.length; i++) {
        this.words[i] = a.words[i];
      }
    }

    return this;
  };

  // Add `num` to `this`
  BN.prototype.add = function add (num) {
    var res;
    if (num.negative !== 0 && this.negative === 0) {
      num.negative = 0;
      res = this.sub(num);
      num.negative ^= 1;
      return res;
    } else if (num.negative === 0 && this.negative !== 0) {
      this.negative = 0;
      res = num.sub(this);
      this.negative = 1;
      return res;
    }

    if (this.length > num.length) return this.clone().iadd(num);

    return num.clone().iadd(this);
  };

  // Subtract `num` from `this` in-place
  BN.prototype.isub = function isub (num) {
    // this - (-num) = this + num
    if (num.negative !== 0) {
      num.negative = 0;
      var r = this.iadd(num);
      num.negative = 1;
      return r._normSign();

    // -this - num = -(this + num)
    } else if (this.negative !== 0) {
      this.negative = 0;
      this.iadd(num);
      this.negative = 1;
      return this._normSign();
    }

    // At this point both numbers are positive
    var cmp = this.cmp(num);

    // Optimization - zeroify
    if (cmp === 0) {
      this.negative = 0;
      this.length = 1;
      this.words[0] = 0;
      return this;
    }

    // a > b
    var a, b;
    if (cmp > 0) {
      a = this;
      b = num;
    } else {
      a = num;
      b = this;
    }

    var carry = 0;
    for (var i = 0; i < b.length; i++) {
      r = (a.words[i] | 0) - (b.words[i] | 0) + carry;
      carry = r >> 26;
      this.words[i] = r & 0x3ffffff;
    }
    for (; carry !== 0 && i < a.length; i++) {
      r = (a.words[i] | 0) + carry;
      carry = r >> 26;
      this.words[i] = r & 0x3ffffff;
    }

    // Copy rest of the words
    if (carry === 0 && i < a.length && a !== this) {
      for (; i < a.length; i++) {
        this.words[i] = a.words[i];
      }
    }

    this.length = Math.max(this.length, i);

    if (a !== this) {
      this.negative = 1;
    }

    return this.strip();
  };

  // Subtract `num` from `this`
  BN.prototype.sub = function sub (num) {
    return this.clone().isub(num);
  };

  function smallMulTo (self, num, out) {
    out.negative = num.negative ^ self.negative;
    var len = (self.length + num.length) | 0;
    out.length = len;
    len = (len - 1) | 0;

    // Peel one iteration (compiler can't do it, because of code complexity)
    var a = self.words[0] | 0;
    var b = num.words[0] | 0;
    var r = a * b;

    var lo = r & 0x3ffffff;
    var carry = (r / 0x4000000) | 0;
    out.words[0] = lo;

    for (var k = 1; k < len; k++) {
      // Sum all words with the same `i + j = k` and accumulate `ncarry`,
      // note that ncarry could be >= 0x3ffffff
      var ncarry = carry >>> 26;
      var rword = carry & 0x3ffffff;
      var maxJ = Math.min(k, num.length - 1);
      for (var j = Math.max(0, k - self.length + 1); j <= maxJ; j++) {
        var i = (k - j) | 0;
        a = self.words[i] | 0;
        b = num.words[j] | 0;
        r = a * b + rword;
        ncarry += (r / 0x4000000) | 0;
        rword = r & 0x3ffffff;
      }
      out.words[k] = rword | 0;
      carry = ncarry | 0;
    }
    if (carry !== 0) {
      out.words[k] = carry | 0;
    } else {
      out.length--;
    }

    return out.strip();
  }

  // TODO(indutny): it may be reasonable to omit it for users who don't need
  // to work with 256-bit numbers, otherwise it gives 20% improvement for 256-bit
  // multiplication (like elliptic secp256k1).
  var comb10MulTo = function comb10MulTo (self, num, out) {
    var a = self.words;
    var b = num.words;
    var o = out.words;
    var c = 0;
    var lo;
    var mid;
    var hi;
    var a0 = a[0] | 0;
    var al0 = a0 & 0x1fff;
    var ah0 = a0 >>> 13;
    var a1 = a[1] | 0;
    var al1 = a1 & 0x1fff;
    var ah1 = a1 >>> 13;
    var a2 = a[2] | 0;
    var al2 = a2 & 0x1fff;
    var ah2 = a2 >>> 13;
    var a3 = a[3] | 0;
    var al3 = a3 & 0x1fff;
    var ah3 = a3 >>> 13;
    var a4 = a[4] | 0;
    var al4 = a4 & 0x1fff;
    var ah4 = a4 >>> 13;
    var a5 = a[5] | 0;
    var al5 = a5 & 0x1fff;
    var ah5 = a5 >>> 13;
    var a6 = a[6] | 0;
    var al6 = a6 & 0x1fff;
    var ah6 = a6 >>> 13;
    var a7 = a[7] | 0;
    var al7 = a7 & 0x1fff;
    var ah7 = a7 >>> 13;
    var a8 = a[8] | 0;
    var al8 = a8 & 0x1fff;
    var ah8 = a8 >>> 13;
    var a9 = a[9] | 0;
    var al9 = a9 & 0x1fff;
    var ah9 = a9 >>> 13;
    var b0 = b[0] | 0;
    var bl0 = b0 & 0x1fff;
    var bh0 = b0 >>> 13;
    var b1 = b[1] | 0;
    var bl1 = b1 & 0x1fff;
    var bh1 = b1 >>> 13;
    var b2 = b[2] | 0;
    var bl2 = b2 & 0x1fff;
    var bh2 = b2 >>> 13;
    var b3 = b[3] | 0;
    var bl3 = b3 & 0x1fff;
    var bh3 = b3 >>> 13;
    var b4 = b[4] | 0;
    var bl4 = b4 & 0x1fff;
    var bh4 = b4 >>> 13;
    var b5 = b[5] | 0;
    var bl5 = b5 & 0x1fff;
    var bh5 = b5 >>> 13;
    var b6 = b[6] | 0;
    var bl6 = b6 & 0x1fff;
    var bh6 = b6 >>> 13;
    var b7 = b[7] | 0;
    var bl7 = b7 & 0x1fff;
    var bh7 = b7 >>> 13;
    var b8 = b[8] | 0;
    var bl8 = b8 & 0x1fff;
    var bh8 = b8 >>> 13;
    var b9 = b[9] | 0;
    var bl9 = b9 & 0x1fff;
    var bh9 = b9 >>> 13;

    out.length = 19;
    /* k = 0 */
    lo = Math.imul(al0, bl0);
    mid = Math.imul(al0, bh0);
    mid += Math.imul(ah0, bl0);
    hi = Math.imul(ah0, bh0);
    var w0 = c + lo + ((mid & 0x1fff) << 13);
    c = hi + (mid >>> 13) + (w0 >>> 26);
    w0 &= 0x3ffffff;
    /* k = 1 */
    lo = Math.imul(al1, bl0);
    mid = Math.imul(al1, bh0);
    mid += Math.imul(ah1, bl0);
    hi = Math.imul(ah1, bh0);
    lo += Math.imul(al0, bl1);
    mid += Math.imul(al0, bh1);
    mid += Math.imul(ah0, bl1);
    hi += Math.imul(ah0, bh1);
    var w1 = c + lo + ((mid & 0x1fff) << 13);
    c = hi + (mid >>> 13) + (w1 >>> 26);
    w1 &= 0x3ffffff;
    /* k = 2 */
    lo = Math.imul(al2, bl0);
    mid = Math.imul(al2, bh0);
    mid += Math.imul(ah2, bl0);
    hi = Math.imul(ah2, bh0);
    lo += Math.imul(al1, bl1);
    mid += Math.imul(al1, bh1);
    mid += Math.imul(ah1, bl1);
    hi += Math.imul(ah1, bh1);
    lo += Math.imul(al0, bl2);
    mid += Math.imul(al0, bh2);
    mid += Math.imul(ah0, bl2);
    hi += Math.imul(ah0, bh2);
    var w2 = c + lo + ((mid & 0x1fff) << 13);
    c = hi + (mid >>> 13) + (w2 >>> 26);
    w2 &= 0x3ffffff;
    /* k = 3 */
    lo = Math.imul(al3, bl0);
    mid = Math.imul(al3, bh0);
    mid += Math.imul(ah3, bl0);
    hi = Math.imul(ah3, bh0);
    lo += Math.imul(al2, bl1);
    mid += Math.imul(al2, bh1);
    mid += Math.imul(ah2, bl1);
    hi += Math.imul(ah2, bh1);
    lo += Math.imul(al1, bl2);
    mid += Math.imul(al1, bh2);
    mid += Math.imul(ah1, bl2);
    hi += Math.imul(ah1, bh2);
    lo += Math.imul(al0, bl3);
    mid += Math.imul(al0, bh3);
    mid += Math.imul(ah0, bl3);
    hi += Math.imul(ah0, bh3);
    var w3 = c + lo + ((mid & 0x1fff) << 13);
    c = hi + (mid >>> 13) + (w3 >>> 26);
    w3 &= 0x3ffffff;
    /* k = 4 */
    lo = Math.imul(al4, bl0);
    mid = Math.imul(al4, bh0);
    mid += Math.imul(ah4, bl0);
    hi = Math.imul(ah4, bh0);
    lo += Math.imul(al3, bl1);
    mid += Math.imul(al3, bh1);
    mid += Math.imul(ah3, bl1);
    hi += Math.imul(ah3, bh1);
    lo += Math.imul(al2, bl2);
    mid += Math.imul(al2, bh2);
    mid += Math.imul(ah2, bl2);
    hi += Math.imul(ah2, bh2);
    lo += Math.imul(al1, bl3);
    mid += Math.imul(al1, bh3);
    mid += Math.imul(ah1, bl3);
    hi += Math.imul(ah1, bh3);
    lo += Math.imul(al0, bl4);
    mid += Math.imul(al0, bh4);
    mid += Math.imul(ah0, bl4);
    hi += Math.imul(ah0, bh4);
    var w4 = c + lo + ((mid & 0x1fff) << 13);
    c = hi + (mid >>> 13) + (w4 >>> 26);
    w4 &= 0x3ffffff;
    /* k = 5 */
    lo = Math.imul(al5, bl0);
    mid = Math.imul(al5, bh0);
    mid += Math.imul(ah5, bl0);
    hi = Math.imul(ah5, bh0);
    lo += Math.imul(al4, bl1);
    mid += Math.imul(al4, bh1);
    mid += Math.imul(ah4, bl1);
    hi += Math.imul(ah4, bh1);
    lo += Math.imul(al3, bl2);
    mid += Math.imul(al3, bh2);
    mid += Math.imul(ah3, bl2);
    hi += Math.imul(ah3, bh2);
    lo += Math.imul(al2, bl3);
    mid += Math.imul(al2, bh3);
    mid += Math.imul(ah2, bl3);
    hi += Math.imul(ah2, bh3);
    lo += Math.imul(al1, bl4);
    mid += Math.imul(al1, bh4);
    mid += Math.imul(ah1, bl4);
    hi += Math.imul(ah1, bh4);
    lo += Math.imul(al0, bl5);
    mid += Math.imul(al0, bh5);
    mid += Math.imul(ah0, bl5);
    hi += Math.imul(ah0, bh5);
    var w5 = c + lo + ((mid & 0x1fff) << 13);
    c = hi + (mid >>> 13) + (w5 >>> 26);
    w5 &= 0x3ffffff;
    /* k = 6 */
    lo = Math.imul(al6, bl0);
    mid = Math.imul(al6, bh0);
    mid += Math.imul(ah6, bl0);
    hi = Math.imul(ah6, bh0);
    lo += Math.imul(al5, bl1);
    mid += Math.imul(al5, bh1);
    mid += Math.imul(ah5, bl1);
    hi += Math.imul(ah5, bh1);
    lo += Math.imul(al4, bl2);
    mid += Math.imul(al4, bh2);
    mid += Math.imul(ah4, bl2);
    hi += Math.imul(ah4, bh2);
    lo += Math.imul(al3, bl3);
    mid += Math.imul(al3, bh3);
    mid += Math.imul(ah3, bl3);
    hi += Math.imul(ah3, bh3);
    lo += Math.imul(al2, bl4);
    mid += Math.imul(al2, bh4);
    mid += Math.imul(ah2, bl4);
    hi += Math.imul(ah2, bh4);
    lo += Math.imul(al1, bl5);
    mid += Math.imul(al1, bh5);
    mid += Math.imul(ah1, bl5);
    hi += Math.imul(ah1, bh5);
    lo += Math.imul(al0, bl6);
    mid += Math.imul(al0, bh6);
    mid += Math.imul(ah0, bl6);
    hi += Math.imul(ah0, bh6);
    var w6 = c + lo + ((mid & 0x1fff) << 13);
    c = hi + (mid >>> 13) + (w6 >>> 26);
    w6 &= 0x3ffffff;
    /* k = 7 */
    lo = Math.imul(al7, bl0);
    mid = Math.imul(al7, bh0);
    mid += Math.imul(ah7, bl0);
    hi = Math.imul(ah7, bh0);
    lo += Math.imul(al6, bl1);
    mid += Math.imul(al6, bh1);
    mid += Math.imul(ah6, bl1);
    hi += Math.imul(ah6, bh1);
    lo += Math.imul(al5, bl2);
    mid += Math.imul(al5, bh2);
    mid += Math.imul(ah5, bl2);
    hi += Math.imul(ah5, bh2);
    lo += Math.imul(al4, bl3);
    mid += Math.imul(al4, bh3);
    mid += Math.imul(ah4, bl3);
    hi += Math.imul(ah4, bh3);
    lo += Math.imul(al3, bl4);
    mid += Math.imul(al3, bh4);
    mid += Math.imul(ah3, bl4);
    hi += Math.imul(ah3, bh4);
    lo += Math.imul(al2, bl5);
    mid += Math.imul(al2, bh5);
    mid += Math.imul(ah2, bl5);
    hi += Math.imul(ah2, bh5);
    lo += Math.imul(al1, bl6);
    mid += Math.imul(al1, bh6);
    mid += Math.imul(ah1, bl6);
    hi += Math.imul(ah1, bh6);
    lo += Math.imul(al0, bl7);
    mid += Math.imul(al0, bh7);
    mid += Math.imul(ah0, bl7);
    hi += Math.imul(ah0, bh7);
    var w7 = c + lo + ((mid & 0x1fff) << 13);
    c = hi + (mid >>> 13) + (w7 >>> 26);
    w7 &= 0x3ffffff;
    /* k = 8 */
    lo = Math.imul(al8, bl0);
    mid = Math.imul(al8, bh0);
    mid += Math.imul(ah8, bl0);
    hi = Math.imul(ah8, bh0);
    lo += Math.imul(al7, bl1);
    mid += Math.imul(al7, bh1);
    mid += Math.imul(ah7, bl1);
    hi += Math.imul(ah7, bh1);
    lo += Math.imul(al6, bl2);
    mid += Math.imul(al6, bh2);
    mid += Math.imul(ah6, bl2);
    hi += Math.imul(ah6, bh2);
    lo += Math.imul(al5, bl3);
    mid += Math.imul(al5, bh3);
    mid += Math.imul(ah5, bl3);
    hi += Math.imul(ah5, bh3);
    lo += Math.imul(al4, bl4);
    mid += Math.imul(al4, bh4);
    mid += Math.imul(ah4, bl4);
    hi += Math.imul(ah4, bh4);
    lo += Math.imul(al3, bl5);
    mid += Math.imul(al3, bh5);
    mid += Math.imul(ah3, bl5);
    hi += Math.imul(ah3, bh5);
    lo += Math.imul(al2, bl6);
    mid += Math.imul(al2, bh6);
    mid += Math.imul(ah2, bl6);
    hi += Math.imul(ah2, bh6);
    lo += Math.imul(al1, bl7);
    mid += Math.imul(al1, bh7);
    mid += Math.imul(ah1, bl7);
    hi += Math.imul(ah1, bh7);
    lo += Math.imul(al0, bl8);
    mid += Math.imul(al0, bh8);
    mid += Math.imul(ah0, bl8);
    hi += Math.imul(ah0, bh8);
    var w8 = c + lo + ((mid & 0x1fff) << 13);
    c = hi + (mid >>> 13) + (w8 >>> 26);
    w8 &= 0x3ffffff;
    /* k = 9 */
    lo = Math.imul(al9, bl0);
    mid = Math.imul(al9, bh0);
    mid += Math.imul(ah9, bl0);
    hi = Math.imul(ah9, bh0);
    lo += Math.imul(al8, bl1);
    mid += Math.imul(al8, bh1);
    mid += Math.imul(ah8, bl1);
    hi += Math.imul(ah8, bh1);
    lo += Math.imul(al7, bl2);
    mid += Math.imul(al7, bh2);
    mid += Math.imul(ah7, bl2);
    hi += Math.imul(ah7, bh2);
    lo += Math.imul(al6, bl3);
    mid += Math.imul(al6, bh3);
    mid += Math.imul(ah6, bl3);
    hi += Math.imul(ah6, bh3);
    lo += Math.imul(al5, bl4);
    mid += Math.imul(al5, bh4);
    mid += Math.imul(ah5, bl4);
    hi += Math.imul(ah5, bh4);
    lo += Math.imul(al4, bl5);
    mid += Math.imul(al4, bh5);
    mid += Math.imul(ah4, bl5);
    hi += Math.imul(ah4, bh5);
    lo += Math.imul(al3, bl6);
    mid += Math.imul(al3, bh6);
    mid += Math.imul(ah3, bl6);
    hi += Math.imul(ah3, bh6);
    lo += Math.imul(al2, bl7);
    mid += Math.imul(al2, bh7);
    mid += Math.imul(ah2, bl7);
    hi += Math.imul(ah2, bh7);
    lo += Math.imul(al1, bl8);
    mid += Math.imul(al1, bh8);
    mid += Math.imul(ah1, bl8);
    hi += Math.imul(ah1, bh8);
    lo += Math.imul(al0, bl9);
    mid += Math.imul(al0, bh9);
    mid += Math.imul(ah0, bl9);
    hi += Math.imul(ah0, bh9);
    var w9 = c + lo + ((mid & 0x1fff) << 13);
    c = hi + (mid >>> 13) + (w9 >>> 26);
    w9 &= 0x3ffffff;
    /* k = 10 */
    lo = Math.imul(al9, bl1);
    mid = Math.imul(al9, bh1);
    mid += Math.imul(ah9, bl1);
    hi = Math.imul(ah9, bh1);
    lo += Math.imul(al8, bl2);
    mid += Math.imul(al8, bh2);
    mid += Math.imul(ah8, bl2);
    hi += Math.imul(ah8, bh2);
    lo += Math.imul(al7, bl3);
    mid += Math.imul(al7, bh3);
    mid += Math.imul(ah7, bl3);
    hi += Math.imul(ah7, bh3);
    lo += Math.imul(al6, bl4);
    mid += Math.imul(al6, bh4);
    mid += Math.imul(ah6, bl4);
    hi += Math.imul(ah6, bh4);
    lo += Math.imul(al5, bl5);
    mid += Math.imul(al5, bh5);
    mid += Math.imul(ah5, bl5);
    hi += Math.imul(ah5, bh5);
    lo += Math.imul(al4, bl6);
    mid += Math.imul(al4, bh6);
    mid += Math.imul(ah4, bl6);
    hi += Math.imul(ah4, bh6);
    lo += Math.imul(al3, bl7);
    mid += Math.imul(al3, bh7);
    mid += Math.imul(ah3, bl7);
    hi += Math.imul(ah3, bh7);
    lo += Math.imul(al2, bl8);
    mid += Math.imul(al2, bh8);
    mid += Math.imul(ah2, bl8);
    hi += Math.imul(ah2, bh8);
    lo += Math.imul(al1, bl9);
    mid += Math.imul(al1, bh9);
    mid += Math.imul(ah1, bl9);
    hi += Math.imul(ah1, bh9);
    var w10 = c + lo + ((mid & 0x1fff) << 13);
    c = hi + (mid >>> 13) + (w10 >>> 26);
    w10 &= 0x3ffffff;
    /* k = 11 */
    lo = Math.imul(al9, bl2);
    mid = Math.imul(al9, bh2);
    mid += Math.imul(ah9, bl2);
    hi = Math.imul(ah9, bh2);
    lo += Math.imul(al8, bl3);
    mid += Math.imul(al8, bh3);
    mid += Math.imul(ah8, bl3);
    hi += Math.imul(ah8, bh3);
    lo += Math.imul(al7, bl4);
    mid += Math.imul(al7, bh4);
    mid += Math.imul(ah7, bl4);
    hi += Math.imul(ah7, bh4);
    lo += Math.imul(al6, bl5);
    mid += Math.imul(al6, bh5);
    mid += Math.imul(ah6, bl5);
    hi += Math.imul(ah6, bh5);
    lo += Math.imul(al5, bl6);
    mid += Math.imul(al5, bh6);
    mid += Math.imul(ah5, bl6);
    hi += Math.imul(ah5, bh6);
    lo += Math.imul(al4, bl7);
    mid += Math.imul(al4, bh7);
    mid += Math.imul(ah4, bl7);
    hi += Math.imul(ah4, bh7);
    lo += Math.imul(al3, bl8);
    mid += Math.imul(al3, bh8);
    mid += Math.imul(ah3, bl8);
    hi += Math.imul(ah3, bh8);
    lo += Math.imul(al2, bl9);
    mid += Math.imul(al2, bh9);
    mid += Math.imul(ah2, bl9);
    hi += Math.imul(ah2, bh9);
    var w11 = c + lo + ((mid & 0x1fff) << 13);
    c = hi + (mid >>> 13) + (w11 >>> 26);
    w11 &= 0x3ffffff;
    /* k = 12 */
    lo = Math.imul(al9, bl3);
    mid = Math.imul(al9, bh3);
    mid += Math.imul(ah9, bl3);
    hi = Math.imul(ah9, bh3);
    lo += Math.imul(al8, bl4);
    mid += Math.imul(al8, bh4);
    mid += Math.imul(ah8, bl4);
    hi += Math.imul(ah8, bh4);
    lo += Math.imul(al7, bl5);
    mid += Math.imul(al7, bh5);
    mid += Math.imul(ah7, bl5);
    hi += Math.imul(ah7, bh5);
    lo += Math.imul(al6, bl6);
    mid += Math.imul(al6, bh6);
    mid += Math.imul(ah6, bl6);
    hi += Math.imul(ah6, bh6);
    lo += Math.imul(al5, bl7);
    mid += Math.imul(al5, bh7);
    mid += Math.imul(ah5, bl7);
    hi += Math.imul(ah5, bh7);
    lo += Math.imul(al4, bl8);
    mid += Math.imul(al4, bh8);
    mid += Math.imul(ah4, bl8);
    hi += Math.imul(ah4, bh8);
    lo += Math.imul(al3, bl9);
    mid += Math.imul(al3, bh9);
    mid += Math.imul(ah3, bl9);
    hi += Math.imul(ah3, bh9);
    var w12 = c + lo + ((mid & 0x1fff) << 13);
    c = hi + (mid >>> 13) + (w12 >>> 26);
    w12 &= 0x3ffffff;
    /* k = 13 */
    lo = Math.imul(al9, bl4);
    mid = Math.imul(al9, bh4);
    mid += Math.imul(ah9, bl4);
    hi = Math.imul(ah9, bh4);
    lo += Math.imul(al8, bl5);
    mid += Math.imul(al8, bh5);
    mid += Math.imul(ah8, bl5);
    hi += Math.imul(ah8, bh5);
    lo += Math.imul(al7, bl6);
    mid += Math.imul(al7, bh6);
    mid += Math.imul(ah7, bl6);
    hi += Math.imul(ah7, bh6);
    lo += Math.imul(al6, bl7);
    mid += Math.imul(al6, bh7);
    mid += Math.imul(ah6, bl7);
    hi += Math.imul(ah6, bh7);
    lo += Math.imul(al5, bl8);
    mid += Math.imul(al5, bh8);
    mid += Math.imul(ah5, bl8);
    hi += Math.imul(ah5, bh8);
    lo += Math.imul(al4, bl9);
    mid += Math.imul(al4, bh9);
    mid += Math.imul(ah4, bl9);
    hi += Math.imul(ah4, bh9);
    var w13 = c + lo + ((mid & 0x1fff) << 13);
    c = hi + (mid >>> 13) + (w13 >>> 26);
    w13 &= 0x3ffffff;
    /* k = 14 */
    lo = Math.imul(al9, bl5);
    mid = Math.imul(al9, bh5);
    mid += Math.imul(ah9, bl5);
    hi = Math.imul(ah9, bh5);
    lo += Math.imul(al8, bl6);
    mid += Math.imul(al8, bh6);
    mid += Math.imul(ah8, bl6);
    hi += Math.imul(ah8, bh6);
    lo += Math.imul(al7, bl7);
    mid += Math.imul(al7, bh7);
    mid += Math.imul(ah7, bl7);
    hi += Math.imul(ah7, bh7);
    lo += Math.imul(al6, bl8);
    mid += Math.imul(al6, bh8);
    mid += Math.imul(ah6, bl8);
    hi += Math.imul(ah6, bh8);
    lo += Math.imul(al5, bl9);
    mid += Math.imul(al5, bh9);
    mid += Math.imul(ah5, bl9);
    hi += Math.imul(ah5, bh9);
    var w14 = c + lo + ((mid & 0x1fff) << 13);
    c = hi + (mid >>> 13) + (w14 >>> 26);
    w14 &= 0x3ffffff;
    /* k = 15 */
    lo = Math.imul(al9, bl6);
    mid = Math.imul(al9, bh6);
    mid += Math.imul(ah9, bl6);
    hi = Math.imul(ah9, bh6);
    lo += Math.imul(al8, bl7);
    mid += Math.imul(al8, bh7);
    mid += Math.imul(ah8, bl7);
    hi += Math.imul(ah8, bh7);
    lo += Math.imul(al7, bl8);
    mid += Math.imul(al7, bh8);
    mid += Math.imul(ah7, bl8);
    hi += Math.imul(ah7, bh8);
    lo += Math.imul(al6, bl9);
    mid += Math.imul(al6, bh9);
    mid += Math.imul(ah6, bl9);
    hi += Math.imul(ah6, bh9);
    var w15 = c + lo + ((mid & 0x1fff) << 13);
    c = hi + (mid >>> 13) + (w15 >>> 26);
    w15 &= 0x3ffffff;
    /* k = 16 */
    lo = Math.imul(al9, bl7);
    mid = Math.imul(al9, bh7);
    mid += Math.imul(ah9, bl7);
    hi = Math.imul(ah9, bh7);
    lo += Math.imul(al8, bl8);
    mid += Math.imul(al8, bh8);
    mid += Math.imul(ah8, bl8);
    hi += Math.imul(ah8, bh8);
    lo += Math.imul(al7, bl9);
    mid += Math.imul(al7, bh9);
    mid += Math.imul(ah7, bl9);
    hi += Math.imul(ah7, bh9);
    var w16 = c + lo + ((mid & 0x1fff) << 13);
    c = hi + (mid >>> 13) + (w16 >>> 26);
    w16 &= 0x3ffffff;
    /* k = 17 */
    lo = Math.imul(al9, bl8);
    mid = Math.imul(al9, bh8);
    mid += Math.imul(ah9, bl8);
    hi = Math.imul(ah9, bh8);
    lo += Math.imul(al8, bl9);
    mid += Math.imul(al8, bh9);
    mid += Math.imul(ah8, bl9);
    hi += Math.imul(ah8, bh9);
    var w17 = c + lo + ((mid & 0x1fff) << 13);
    c = hi + (mid >>> 13) + (w17 >>> 26);
    w17 &= 0x3ffffff;
    /* k = 18 */
    lo = Math.imul(al9, bl9);
    mid = Math.imul(al9, bh9);
    mid += Math.imul(ah9, bl9);
    hi = Math.imul(ah9, bh9);
    var w18 = c + lo + ((mid & 0x1fff) << 13);
    c = hi + (mid >>> 13) + (w18 >>> 26);
    w18 &= 0x3ffffff;
    o[0] = w0;
    o[1] = w1;
    o[2] = w2;
    o[3] = w3;
    o[4] = w4;
    o[5] = w5;
    o[6] = w6;
    o[7] = w7;
    o[8] = w8;
    o[9] = w9;
    o[10] = w10;
    o[11] = w11;
    o[12] = w12;
    o[13] = w13;
    o[14] = w14;
    o[15] = w15;
    o[16] = w16;
    o[17] = w17;
    o[18] = w18;
    if (c !== 0) {
      o[19] = c;
      out.length++;
    }
    return out;
  };

  // Polyfill comb
  if (!Math.imul) {
    comb10MulTo = smallMulTo;
  }

  function bigMulTo (self, num, out) {
    out.negative = num.negative ^ self.negative;
    out.length = self.length + num.length;

    var carry = 0;
    var hncarry = 0;
    for (var k = 0; k < out.length - 1; k++) {
      // Sum all words with the same `i + j = k` and accumulate `ncarry`,
      // note that ncarry could be >= 0x3ffffff
      var ncarry = hncarry;
      hncarry = 0;
      var rword = carry & 0x3ffffff;
      var maxJ = Math.min(k, num.length - 1);
      for (var j = Math.max(0, k - self.length + 1); j <= maxJ; j++) {
        var i = k - j;
        var a = self.words[i] | 0;
        var b = num.words[j] | 0;
        var r = a * b;

        var lo = r & 0x3ffffff;
        ncarry = (ncarry + ((r / 0x4000000) | 0)) | 0;
        lo = (lo + rword) | 0;
        rword = lo & 0x3ffffff;
        ncarry = (ncarry + (lo >>> 26)) | 0;

        hncarry += ncarry >>> 26;
        ncarry &= 0x3ffffff;
      }
      out.words[k] = rword;
      carry = ncarry;
      ncarry = hncarry;
    }
    if (carry !== 0) {
      out.words[k] = carry;
    } else {
      out.length--;
    }

    return out.strip();
  }

  function jumboMulTo (self, num, out) {
    var fftm = new FFTM();
    return fftm.mulp(self, num, out);
  }

  BN.prototype.mulTo = function mulTo (num, out) {
    var res;
    var len = this.length + num.length;
    if (this.length === 10 && num.length === 10) {
      res = comb10MulTo(this, num, out);
    } else if (len < 63) {
      res = smallMulTo(this, num, out);
    } else if (len < 1024) {
      res = bigMulTo(this, num, out);
    } else {
      res = jumboMulTo(this, num, out);
    }

    return res;
  };

  // Cooley-Tukey algorithm for FFT
  // slightly revisited to rely on looping instead of recursion

  function FFTM (x, y) {
    this.x = x;
    this.y = y;
  }

  FFTM.prototype.makeRBT = function makeRBT (N) {
    var t = new Array(N);
    var l = BN.prototype._countBits(N) - 1;
    for (var i = 0; i < N; i++) {
      t[i] = this.revBin(i, l, N);
    }

    return t;
  };

  // Returns binary-reversed representation of `x`
  FFTM.prototype.revBin = function revBin (x, l, N) {
    if (x === 0 || x === N - 1) return x;

    var rb = 0;
    for (var i = 0; i < l; i++) {
      rb |= (x & 1) << (l - i - 1);
      x >>= 1;
    }

    return rb;
  };

  // Performs "tweedling" phase, therefore 'emulating'
  // behaviour of the recursive algorithm
  FFTM.prototype.permute = function permute (rbt, rws, iws, rtws, itws, N) {
    for (var i = 0; i < N; i++) {
      rtws[i] = rws[rbt[i]];
      itws[i] = iws[rbt[i]];
    }
  };

  FFTM.prototype.transform = function transform (rws, iws, rtws, itws, N, rbt) {
    this.permute(rbt, rws, iws, rtws, itws, N);

    for (var s = 1; s < N; s <<= 1) {
      var l = s << 1;

      var rtwdf = Math.cos(2 * Math.PI / l);
      var itwdf = Math.sin(2 * Math.PI / l);

      for (var p = 0; p < N; p += l) {
        var rtwdf_ = rtwdf;
        var itwdf_ = itwdf;

        for (var j = 0; j < s; j++) {
          var re = rtws[p + j];
          var ie = itws[p + j];

          var ro = rtws[p + j + s];
          var io = itws[p + j + s];

          var rx = rtwdf_ * ro - itwdf_ * io;

          io = rtwdf_ * io + itwdf_ * ro;
          ro = rx;

          rtws[p + j] = re + ro;
          itws[p + j] = ie + io;

          rtws[p + j + s] = re - ro;
          itws[p + j + s] = ie - io;

          /* jshint maxdepth : false */
          if (j !== l) {
            rx = rtwdf * rtwdf_ - itwdf * itwdf_;

            itwdf_ = rtwdf * itwdf_ + itwdf * rtwdf_;
            rtwdf_ = rx;
          }
        }
      }
    }
  };

  FFTM.prototype.guessLen13b = function guessLen13b (n, m) {
    var N = Math.max(m, n) | 1;
    var odd = N & 1;
    var i = 0;
    for (N = N / 2 | 0; N; N = N >>> 1) {
      i++;
    }

    return 1 << i + 1 + odd;
  };

  FFTM.prototype.conjugate = function conjugate (rws, iws, N) {
    if (N <= 1) return;

    for (var i = 0; i < N / 2; i++) {
      var t = rws[i];

      rws[i] = rws[N - i - 1];
      rws[N - i - 1] = t;

      t = iws[i];

      iws[i] = -iws[N - i - 1];
      iws[N - i - 1] = -t;
    }
  };

  FFTM.prototype.normalize13b = function normalize13b (ws, N) {
    var carry = 0;
    for (var i = 0; i < N / 2; i++) {
      var w = Math.round(ws[2 * i + 1] / N) * 0x2000 +
        Math.round(ws[2 * i] / N) +
        carry;

      ws[i] = w & 0x3ffffff;

      if (w < 0x4000000) {
        carry = 0;
      } else {
        carry = w / 0x4000000 | 0;
      }
    }

    return ws;
  };

  FFTM.prototype.convert13b = function convert13b (ws, len, rws, N) {
    var carry = 0;
    for (var i = 0; i < len; i++) {
      carry = carry + (ws[i] | 0);

      rws[2 * i] = carry & 0x1fff; carry = carry >>> 13;
      rws[2 * i + 1] = carry & 0x1fff; carry = carry >>> 13;
    }

    // Pad with zeroes
    for (i = 2 * len; i < N; ++i) {
      rws[i] = 0;
    }

    assert(carry === 0);
    assert((carry & ~0x1fff) === 0);
  };

  FFTM.prototype.stub = function stub (N) {
    var ph = new Array(N);
    for (var i = 0; i < N; i++) {
      ph[i] = 0;
    }

    return ph;
  };

  FFTM.prototype.mulp = function mulp (x, y, out) {
    var N = 2 * this.guessLen13b(x.length, y.length);

    var rbt = this.makeRBT(N);

    var _ = this.stub(N);

    var rws = new Array(N);
    var rwst = new Array(N);
    var iwst = new Array(N);

    var nrws = new Array(N);
    var nrwst = new Array(N);
    var niwst = new Array(N);

    var rmws = out.words;
    rmws.length = N;

    this.convert13b(x.words, x.length, rws, N);
    this.convert13b(y.words, y.length, nrws, N);

    this.transform(rws, _, rwst, iwst, N, rbt);
    this.transform(nrws, _, nrwst, niwst, N, rbt);

    for (var i = 0; i < N; i++) {
      var rx = rwst[i] * nrwst[i] - iwst[i] * niwst[i];
      iwst[i] = rwst[i] * niwst[i] + iwst[i] * nrwst[i];
      rwst[i] = rx;
    }

    this.conjugate(rwst, iwst, N);
    this.transform(rwst, iwst, rmws, _, N, rbt);
    this.conjugate(rmws, _, N);
    this.normalize13b(rmws, N);

    out.negative = x.negative ^ y.negative;
    out.length = x.length + y.length;
    return out.strip();
  };

  // Multiply `this` by `num`
  BN.prototype.mul = function mul (num) {
    var out = new BN(null);
    out.words = new Array(this.length + num.length);
    return this.mulTo(num, out);
  };

  // Multiply employing FFT
  BN.prototype.mulf = function mulf (num) {
    var out = new BN(null);
    out.words = new Array(this.length + num.length);
    return jumboMulTo(this, num, out);
  };

  // In-place Multiplication
  BN.prototype.imul = function imul (num) {
    return this.clone().mulTo(num, this);
  };

  BN.prototype.imuln = function imuln (num) {
    assert(typeof num === 'number');

    // Carry
    var carry = 0;
    for (var i = 0; i < this.length; i++) {
      var w = (this.words[i] | 0) * num;
      var lo = (w & 0x3ffffff) + (carry & 0x3ffffff);
      carry >>= 26;
      carry += (w / 0x4000000) | 0;
      // NOTE: lo is 27bit maximum
      carry += lo >>> 26;
      this.words[i] = lo & 0x3ffffff;
    }

    if (carry !== 0) {
      this.words[i] = carry;
      this.length++;
    }

    return this;
  };

  BN.prototype.muln = function muln (num) {
    return this.clone().imuln(num);
  };

  // `this` * `this`
  BN.prototype.sqr = function sqr () {
    return this.mul(this);
  };

  // `this` * `this` in-place
  BN.prototype.isqr = function isqr () {
    return this.imul(this.clone());
  };

  // Math.pow(`this`, `num`)
  BN.prototype.pow = function pow (num) {
    var w = toBitArray(num);
    if (w.length === 0) return new BN(1);

    // Skip leading zeroes
    var res = this;
    for (var i = 0; i < w.length; i++, res = res.sqr()) {
      if (w[i] !== 0) break;
    }

    if (++i < w.length) {
      for (var q = res.sqr(); i < w.length; i++, q = q.sqr()) {
        if (w[i] === 0) continue;

        res = res.mul(q);
      }
    }

    return res;
  };

  // Shift-left in-place
  BN.prototype.iushln = function iushln (bits) {
    assert(typeof bits === 'number' && bits >= 0);
    var r = bits % 26;
    var s = (bits - r) / 26;
    var carryMask = (0x3ffffff >>> (26 - r)) << (26 - r);
    var i;

    if (r !== 0) {
      var carry = 0;

      for (i = 0; i < this.length; i++) {
        var newCarry = this.words[i] & carryMask;
        var c = ((this.words[i] | 0) - newCarry) << r;
        this.words[i] = c | carry;
        carry = newCarry >>> (26 - r);
      }

      if (carry) {
        this.words[i] = carry;
        this.length++;
      }
    }

    if (s !== 0) {
      for (i = this.length - 1; i >= 0; i--) {
        this.words[i + s] = this.words[i];
      }

      for (i = 0; i < s; i++) {
        this.words[i] = 0;
      }

      this.length += s;
    }

    return this.strip();
  };

  BN.prototype.ishln = function ishln (bits) {
    // TODO(indutny): implement me
    assert(this.negative === 0);
    return this.iushln(bits);
  };

  // Shift-right in-place
  // NOTE: `hint` is a lowest bit before trailing zeroes
  // NOTE: if `extended` is present - it will be filled with destroyed bits
  BN.prototype.iushrn = function iushrn (bits, hint, extended) {
    assert(typeof bits === 'number' && bits >= 0);
    var h;
    if (hint) {
      h = (hint - (hint % 26)) / 26;
    } else {
      h = 0;
    }

    var r = bits % 26;
    var s = Math.min((bits - r) / 26, this.length);
    var mask = 0x3ffffff ^ ((0x3ffffff >>> r) << r);
    var maskedWords = extended;

    h -= s;
    h = Math.max(0, h);

    // Extended mode, copy masked part
    if (maskedWords) {
      for (var i = 0; i < s; i++) {
        maskedWords.words[i] = this.words[i];
      }
      maskedWords.length = s;
    }

    if (s === 0) {
      // No-op, we should not move anything at all
    } else if (this.length > s) {
      this.length -= s;
      for (i = 0; i < this.length; i++) {
        this.words[i] = this.words[i + s];
      }
    } else {
      this.words[0] = 0;
      this.length = 1;
    }

    var carry = 0;
    for (i = this.length - 1; i >= 0 && (carry !== 0 || i >= h); i--) {
      var word = this.words[i] | 0;
      this.words[i] = (carry << (26 - r)) | (word >>> r);
      carry = word & mask;
    }

    // Push carried bits as a mask
    if (maskedWords && carry !== 0) {
      maskedWords.words[maskedWords.length++] = carry;
    }

    if (this.length === 0) {
      this.words[0] = 0;
      this.length = 1;
    }

    return this.strip();
  };

  BN.prototype.ishrn = function ishrn (bits, hint, extended) {
    // TODO(indutny): implement me
    assert(this.negative === 0);
    return this.iushrn(bits, hint, extended);
  };

  // Shift-left
  BN.prototype.shln = function shln (bits) {
    return this.clone().ishln(bits);
  };

  BN.prototype.ushln = function ushln (bits) {
    return this.clone().iushln(bits);
  };

  // Shift-right
  BN.prototype.shrn = function shrn (bits) {
    return this.clone().ishrn(bits);
  };

  BN.prototype.ushrn = function ushrn (bits) {
    return this.clone().iushrn(bits);
  };

  // Test if n bit is set
  BN.prototype.testn = function testn (bit) {
    assert(typeof bit === 'number' && bit >= 0);
    var r = bit % 26;
    var s = (bit - r) / 26;
    var q = 1 << r;

    // Fast case: bit is much higher than all existing words
    if (this.length <= s) return false;

    // Check bit and return
    var w = this.words[s];

    return !!(w & q);
  };

  // Return only lowers bits of number (in-place)
  BN.prototype.imaskn = function imaskn (bits) {
    assert(typeof bits === 'number' && bits >= 0);
    var r = bits % 26;
    var s = (bits - r) / 26;

    assert(this.negative === 0, 'imaskn works only with positive numbers');

    if (r !== 0) {
      s++;
    }
    this.length = Math.min(s, this.length);

    if (r !== 0) {
      var mask = 0x3ffffff ^ ((0x3ffffff >>> r) << r);
      this.words[this.length - 1] &= mask;
    }

    return this.strip();
  };

  // Return only lowers bits of number
  BN.prototype.maskn = function maskn (bits) {
    return this.clone().imaskn(bits);
  };

  // Add plain number `num` to `this`
  BN.prototype.iaddn = function iaddn (num) {
    assert(typeof num === 'number');
    if (num < 0) return this.isubn(-num);

    // Possible sign change
    if (this.negative !== 0) {
      if (this.length === 1 && (this.words[0] | 0) < num) {
        this.words[0] = num - (this.words[0] | 0);
        this.negative = 0;
        return this;
      }

      this.negative = 0;
      this.isubn(num);
      this.negative = 1;
      return this;
    }

    // Add without checks
    return this._iaddn(num);
  };

  BN.prototype._iaddn = function _iaddn (num) {
    this.words[0] += num;

    // Carry
    for (var i = 0; i < this.length && this.words[i] >= 0x4000000; i++) {
      this.words[i] -= 0x4000000;
      if (i === this.length - 1) {
        this.words[i + 1] = 1;
      } else {
        this.words[i + 1]++;
      }
    }
    this.length = Math.max(this.length, i + 1);

    return this;
  };

  // Subtract plain number `num` from `this`
  BN.prototype.isubn = function isubn (num) {
    assert(typeof num === 'number');
    if (num < 0) return this.iaddn(-num);

    if (this.negative !== 0) {
      this.negative = 0;
      this.iaddn(num);
      this.negative = 1;
      return this;
    }

    this.words[0] -= num;

    if (this.length === 1 && this.words[0] < 0) {
      this.words[0] = -this.words[0];
      this.negative = 1;
    } else {
      // Carry
      for (var i = 0; i < this.length && this.words[i] < 0; i++) {
        this.words[i] += 0x4000000;
        this.words[i + 1] -= 1;
      }
    }

    return this.strip();
  };

  BN.prototype.addn = function addn (num) {
    return this.clone().iaddn(num);
  };

  BN.prototype.subn = function subn (num) {
    return this.clone().isubn(num);
  };

  BN.prototype.iabs = function iabs () {
    this.negative = 0;

    return this;
  };

  BN.prototype.abs = function abs () {
    return this.clone().iabs();
  };

  BN.prototype._ishlnsubmul = function _ishlnsubmul (num, mul, shift) {
    // Bigger storage is needed
    var len = num.length + shift;
    var i;
    if (this.words.length < len) {
      var t = new Array(len);
      for (i = 0; i < this.length; i++) {
        t[i] = this.words[i];
      }
      this.words = t;
    } else {
      i = this.length;
    }

    // Zeroify rest
    this.length = Math.max(this.length, len);
    for (; i < this.length; i++) {
      this.words[i] = 0;
    }

    var w;
    var carry = 0;
    for (i = 0; i < num.length; i++) {
      w = (this.words[i + shift] | 0) + carry;
      var right = (num.words[i] | 0) * mul;
      w -= right & 0x3ffffff;
      carry = (w >> 26) - ((right / 0x4000000) | 0);
      this.words[i + shift] = w & 0x3ffffff;
    }
    for (; i < this.length - shift; i++) {
      w = (this.words[i + shift] | 0) + carry;
      carry = w >> 26;
      this.words[i + shift] = w & 0x3ffffff;
    }

    if (carry === 0) return this.strip();

    // Subtraction overflow
    assert(carry === -1);
    carry = 0;
    for (i = 0; i < this.length; i++) {
      w = -(this.words[i] | 0) + carry;
      carry = w >> 26;
      this.words[i] = w & 0x3ffffff;
    }
    this.negative = 1;

    return this.strip();
  };

  BN.prototype._wordDiv = function _wordDiv (num, mode) {
    var shift = this.length - num.length;

    var a = this.clone();
    var b = num;

    // Normalize
    var bhi = b.words[b.length - 1] | 0;
    var bhiBits = this._countBits(bhi);
    shift = 26 - bhiBits;
    if (shift !== 0) {
      b = b.ushln(shift);
      a.iushln(shift);
      bhi = b.words[b.length - 1] | 0;
    }

    // Initialize quotient
    var m = a.length - b.length;
    var q;

    if (mode !== 'mod') {
      q = new BN(null);
      q.length = m + 1;
      q.words = new Array(q.length);
      for (var i = 0; i < q.length; i++) {
        q.words[i] = 0;
      }
    }

    var diff = a.clone()._ishlnsubmul(b, 1, m);
    if (diff.negative === 0) {
      a = diff;
      if (q) {
        q.words[m] = 1;
      }
    }

    for (var j = m - 1; j >= 0; j--) {
      var qj = (a.words[b.length + j] | 0) * 0x4000000 +
        (a.words[b.length + j - 1] | 0);

      // NOTE: (qj / bhi) is (0x3ffffff * 0x4000000 + 0x3ffffff) / 0x2000000 max
      // (0x7ffffff)
      qj = Math.min((qj / bhi) | 0, 0x3ffffff);

      a._ishlnsubmul(b, qj, j);
      while (a.negative !== 0) {
        qj--;
        a.negative = 0;
        a._ishlnsubmul(b, 1, j);
        if (!a.isZero()) {
          a.negative ^= 1;
        }
      }
      if (q) {
        q.words[j] = qj;
      }
    }
    if (q) {
      q.strip();
    }
    a.strip();

    // Denormalize
    if (mode !== 'div' && shift !== 0) {
      a.iushrn(shift);
    }

    return { div: q || null, mod: a };
  };

  BN.prototype.divmod = function divmod (num, mode, positive) {
    assert(!num.isZero());

    var div, mod, res;
    if (this.negative !== 0 && num.negative === 0) {
      res = this.neg().divmod(num, mode);

      if (mode !== 'mod') {
        div = res.div.neg();
      }

      if (mode !== 'div') {
        mod = res.mod.neg();
        if (positive && mod.neg) {
          mod = mod.add(num);
        }
      }

      return {
        div: div,
        mod: mod
      };
    }

    if (this.negative === 0 && num.negative !== 0) {
      res = this.divmod(num.neg(), mode);

      if (mode !== 'mod') {
        div = res.div.neg();
      }

      return { div: div, mod: res.mod };
    }

    if ((this.negative & num.negative) !== 0) {
      res = this.neg().divmod(num.neg(), mode);

      if (mode !== 'div') {
        mod = res.mod.neg();
        if (positive && mod.neg) {
          mod = mod.isub(num);
        }
      }

      return {
        div: res.div,
        mod: mod
      };
    }

    // Both numbers are positive at this point

    // Strip both numbers to approximate shift value
    if (num.length > this.length || this.cmp(num) < 0) {
      return { div: new BN(0), mod: this };
    }

    // Very short reduction
    if (num.length === 1) {
      if (mode === 'div') {
        return { div: this.divn(num.words[0]), mod: null };
      }

      if (mode === 'mod') {
        return { div: null, mod: new BN(this.modn(num.words[0])) };
      }

      return {
        div: this.divn(num.words[0]),
        mod: new BN(this.modn(num.words[0]))
      };
    }

    return this._wordDiv(num, mode);
  };

  // Find `this` / `num`
  BN.prototype.div = function div (num) {
    return this.divmod(num, 'div', false).div;
  };

  // Find `this` % `num`
  BN.prototype.mod = function mod (num) {
    return this.divmod(num, 'mod', false).mod;
  };

  BN.prototype.umod = function umod (num) {
    return this.divmod(num, 'mod', true).mod;
  };

  // Find Round(`this` / `num`)
  BN.prototype.divRound = function divRound (num) {
    var dm = this.divmod(num);

    // Fast case - exact division
    if (dm.mod.isZero()) return dm.div;

    var mod = dm.div.negative !== 0 ? dm.mod.isub(num) : dm.mod;

    var half = num.ushrn(1);
    var r2 = num.andln(1);
    var cmp = mod.cmp(half);

    // Round down
    if (cmp < 0 || r2 === 1 && cmp === 0) return dm.div;

    // Round up
    return dm.div.negative !== 0 ? dm.div.isubn(1) : dm.div.iaddn(1);
  };

  BN.prototype.modn = function modn (num) {
    assert(num <= 0x3ffffff);
    var p = (1 << 26) % num;

    var acc = 0;
    for (var i = this.length - 1; i >= 0; i--) {
      acc = (p * acc + (this.words[i] | 0)) % num;
    }

    return acc;
  };

  // In-place division by number
  BN.prototype.idivn = function idivn (num) {
    assert(num <= 0x3ffffff);

    var carry = 0;
    for (var i = this.length - 1; i >= 0; i--) {
      var w = (this.words[i] | 0) + carry * 0x4000000;
      this.words[i] = (w / num) | 0;
      carry = w % num;
    }

    return this.strip();
  };

  BN.prototype.divn = function divn (num) {
    return this.clone().idivn(num);
  };

  BN.prototype.egcd = function egcd (p) {
    assert(p.negative === 0);
    assert(!p.isZero());

    var x = this;
    var y = p.clone();

    if (x.negative !== 0) {
      x = x.umod(p);
    } else {
      x = x.clone();
    }

    // A * x + B * y = x
    var A = new BN(1);
    var B = new BN(0);

    // C * x + D * y = y
    var C = new BN(0);
    var D = new BN(1);

    var g = 0;

    while (x.isEven() && y.isEven()) {
      x.iushrn(1);
      y.iushrn(1);
      ++g;
    }

    var yp = y.clone();
    var xp = x.clone();

    while (!x.isZero()) {
      for (var i = 0, im = 1; (x.words[0] & im) === 0 && i < 26; ++i, im <<= 1);
      if (i > 0) {
        x.iushrn(i);
        while (i-- > 0) {
          if (A.isOdd() || B.isOdd()) {
            A.iadd(yp);
            B.isub(xp);
          }

          A.iushrn(1);
          B.iushrn(1);
        }
      }

      for (var j = 0, jm = 1; (y.words[0] & jm) === 0 && j < 26; ++j, jm <<= 1);
      if (j > 0) {
        y.iushrn(j);
        while (j-- > 0) {
          if (C.isOdd() || D.isOdd()) {
            C.iadd(yp);
            D.isub(xp);
          }

          C.iushrn(1);
          D.iushrn(1);
        }
      }

      if (x.cmp(y) >= 0) {
        x.isub(y);
        A.isub(C);
        B.isub(D);
      } else {
        y.isub(x);
        C.isub(A);
        D.isub(B);
      }
    }

    return {
      a: C,
      b: D,
      gcd: y.iushln(g)
    };
  };

  // This is reduced incarnation of the binary EEA
  // above, designated to invert members of the
  // _prime_ fields F(p) at a maximal speed
  BN.prototype._invmp = function _invmp (p) {
    assert(p.negative === 0);
    assert(!p.isZero());

    var a = this;
    var b = p.clone();

    if (a.negative !== 0) {
      a = a.umod(p);
    } else {
      a = a.clone();
    }

    var x1 = new BN(1);
    var x2 = new BN(0);

    var delta = b.clone();

    while (a.cmpn(1) > 0 && b.cmpn(1) > 0) {
      for (var i = 0, im = 1; (a.words[0] & im) === 0 && i < 26; ++i, im <<= 1);
      if (i > 0) {
        a.iushrn(i);
        while (i-- > 0) {
          if (x1.isOdd()) {
            x1.iadd(delta);
          }

          x1.iushrn(1);
        }
      }

      for (var j = 0, jm = 1; (b.words[0] & jm) === 0 && j < 26; ++j, jm <<= 1);
      if (j > 0) {
        b.iushrn(j);
        while (j-- > 0) {
          if (x2.isOdd()) {
            x2.iadd(delta);
          }

          x2.iushrn(1);
        }
      }

      if (a.cmp(b) >= 0) {
        a.isub(b);
        x1.isub(x2);
      } else {
        b.isub(a);
        x2.isub(x1);
      }
    }

    var res;
    if (a.cmpn(1) === 0) {
      res = x1;
    } else {
      res = x2;
    }

    if (res.cmpn(0) < 0) {
      res.iadd(p);
    }

    return res;
  };

  BN.prototype.gcd = function gcd (num) {
    if (this.isZero()) return num.clone();
    if (num.isZero()) return this.clone();

    var a = this.clone();
    var b = num.clone();
    a.negative = 0;
    b.negative = 0;

    // Remove common factor of two
    for (var shift = 0; a.isEven() && b.isEven(); shift++) {
      a.iushrn(1);
      b.iushrn(1);
    }

    do {
      while (a.isEven()) {
        a.iushrn(1);
      }
      while (b.isEven()) {
        b.iushrn(1);
      }

      var r = a.cmp(b);
      if (r < 0) {
        // Swap `a` and `b` to make `a` always bigger than `b`
        var t = a;
        a = b;
        b = t;
      } else if (r === 0 || b.cmpn(1) === 0) {
        break;
      }

      a.isub(b);
    } while (true);

    return b.iushln(shift);
  };

  // Invert number in the field F(num)
  BN.prototype.invm = function invm (num) {
    return this.egcd(num).a.umod(num);
  };

  BN.prototype.isEven = function isEven () {
    return (this.words[0] & 1) === 0;
  };

  BN.prototype.isOdd = function isOdd () {
    return (this.words[0] & 1) === 1;
  };

  // And first word and num
  BN.prototype.andln = function andln (num) {
    return this.words[0] & num;
  };

  // Increment at the bit position in-line
  BN.prototype.bincn = function bincn (bit) {
    assert(typeof bit === 'number');
    var r = bit % 26;
    var s = (bit - r) / 26;
    var q = 1 << r;

    // Fast case: bit is much higher than all existing words
    if (this.length <= s) {
      for (var i = this.length; i < s + 1; i++) {
        this.words[i] = 0;
      }
      this.words[s] |= q;
      this.length = s + 1;
      return this;
    }

    // Add bit and propagate, if needed
    var carry = q;
    for (i = s; carry !== 0 && i < this.length; i++) {
      var w = this.words[i] | 0;
      w += carry;
      carry = w >>> 26;
      w &= 0x3ffffff;
      this.words[i] = w;
    }
    if (carry !== 0) {
      this.words[i] = carry;
      this.length++;
    }
    return this;
  };

  BN.prototype.isZero = function isZero () {
    return this.length === 1 && this.words[0] === 0;
  };

  BN.prototype.cmpn = function cmpn (num) {
    var negative = num < 0;

    if (this.negative !== 0 && !negative) return -1;
    if (this.negative === 0 && negative) return 1;

    this.strip();

    var res;
    if (this.length > 1) {
      res = 1;
    } else {
      if (negative) {
        num = -num;
      }

      assert(num <= 0x3ffffff, 'Number is too big');

      var w = this.words[0] | 0;
      res = w === num ? 0 : w < num ? -1 : 1;
    }
    if (this.negative !== 0) {
      res = -res;
    }
    return res;
  };

  // Compare two numbers and return:
  // 1 - if `this` > `num`
  // 0 - if `this` == `num`
  // -1 - if `this` < `num`
  BN.prototype.cmp = function cmp (num) {
    if (this.negative !== 0 && num.negative === 0) return -1;
    if (this.negative === 0 && num.negative !== 0) return 1;

    var res = this.ucmp(num);
    if (this.negative !== 0) return -res;

    return res;
  };

  // Unsigned comparison
  BN.prototype.ucmp = function ucmp (num) {
    // At this point both numbers have the same sign
    if (this.length > num.length) return 1;
    if (this.length < num.length) return -1;

    var res = 0;
    for (var i = this.length - 1; i >= 0; i--) {
      var a = this.words[i] | 0;
      var b = num.words[i] | 0;

      if (a === b) continue;
      if (a < b) {
        res = -1;
      } else if (a > b) {
        res = 1;
      }
      break;
    }
    return res;
  };

  //
  // A reduce context, could be using montgomery or something better, depending
  // on the `m` itself.
  //
  BN.red = function red (num) {
    return new Red(num);
  };

  BN.prototype.toRed = function toRed (ctx) {
    assert(!this.red, 'Already a number in reduction context');
    assert(this.negative === 0, 'red works only with positives');
    return ctx.convertTo(this)._forceRed(ctx);
  };

  BN.prototype.fromRed = function fromRed () {
    assert(this.red, 'fromRed works only with numbers in reduction context');
    return this.red.convertFrom(this);
  };

  BN.prototype._forceRed = function _forceRed (ctx) {
    this.red = ctx;
    return this;
  };

  BN.prototype.forceRed = function forceRed (ctx) {
    assert(!this.red, 'Already a number in reduction context');
    return this._forceRed(ctx);
  };

  BN.prototype.redAdd = function redAdd (num) {
    assert(this.red, 'redAdd works only with red numbers');
    return this.red.add(this, num);
  };

  BN.prototype.redIAdd = function redIAdd (num) {
    assert(this.red, 'redIAdd works only with red numbers');
    return this.red.iadd(this, num);
  };

  BN.prototype.redSub = function redSub (num) {
    assert(this.red, 'redSub works only with red numbers');
    return this.red.sub(this, num);
  };

  BN.prototype.redISub = function redISub (num) {
    assert(this.red, 'redISub works only with red numbers');
    return this.red.isub(this, num);
  };

  BN.prototype.redShl = function redShl (num) {
    assert(this.red, 'redShl works only with red numbers');
    return this.red.ushl(this, num);
  };

  BN.prototype.redMul = function redMul (num) {
    assert(this.red, 'redMul works only with red numbers');
    this.red._verify2(this, num);
    return this.red.mul(this, num);
  };

  BN.prototype.redIMul = function redIMul (num) {
    assert(this.red, 'redMul works only with red numbers');
    this.red._verify2(this, num);
    return this.red.imul(this, num);
  };

  BN.prototype.redSqr = function redSqr () {
    assert(this.red, 'redSqr works only with red numbers');
    this.red._verify1(this);
    return this.red.sqr(this);
  };

  BN.prototype.redISqr = function redISqr () {
    assert(this.red, 'redISqr works only with red numbers');
    this.red._verify1(this);
    return this.red.isqr(this);
  };

  // Square root over p
  BN.prototype.redSqrt = function redSqrt () {
    assert(this.red, 'redSqrt works only with red numbers');
    this.red._verify1(this);
    return this.red.sqrt(this);
  };

  BN.prototype.redInvm = function redInvm () {
    assert(this.red, 'redInvm works only with red numbers');
    this.red._verify1(this);
    return this.red.invm(this);
  };

  // Return negative clone of `this` % `red modulo`
  BN.prototype.redNeg = function redNeg () {
    assert(this.red, 'redNeg works only with red numbers');
    this.red._verify1(this);
    return this.red.neg(this);
  };

  BN.prototype.redPow = function redPow (num) {
    assert(this.red && !num.red, 'redPow(normalNum)');
    this.red._verify1(this);
    return this.red.pow(this, num);
  };

  // Prime numbers with efficient reduction
  var primes = {
    k256: null,
    p224: null,
    p192: null,
    p25519: null
  };

  // Pseudo-Mersenne prime
  function MPrime (name, p) {
    // P = 2 ^ N - K
    this.name = name;
    this.p = new BN(p, 16);
    this.n = this.p.bitLength();
    this.k = new BN(1).iushln(this.n).isub(this.p);

    this.tmp = this._tmp();
  }

  MPrime.prototype._tmp = function _tmp () {
    var tmp = new BN(null);
    tmp.words = new Array(Math.ceil(this.n / 13));
    return tmp;
  };

  MPrime.prototype.ireduce = function ireduce (num) {
    // Assumes that `num` is less than `P^2`
    // num = HI * (2 ^ N - K) + HI * K + LO = HI * K + LO (mod P)
    var r = num;
    var rlen;

    do {
      this.split(r, this.tmp);
      r = this.imulK(r);
      r = r.iadd(this.tmp);
      rlen = r.bitLength();
    } while (rlen > this.n);

    var cmp = rlen < this.n ? -1 : r.ucmp(this.p);
    if (cmp === 0) {
      r.words[0] = 0;
      r.length = 1;
    } else if (cmp > 0) {
      r.isub(this.p);
    } else {
      r.strip();
    }

    return r;
  };

  MPrime.prototype.split = function split (input, out) {
    input.iushrn(this.n, 0, out);
  };

  MPrime.prototype.imulK = function imulK (num) {
    return num.imul(this.k);
  };

  function K256 () {
    MPrime.call(
      this,
      'k256',
      'ffffffff ffffffff ffffffff ffffffff ffffffff ffffffff fffffffe fffffc2f');
  }
  inherits(K256, MPrime);

  K256.prototype.split = function split (input, output) {
    // 256 = 9 * 26 + 22
    var mask = 0x3fffff;

    var outLen = Math.min(input.length, 9);
    for (var i = 0; i < outLen; i++) {
      output.words[i] = input.words[i];
    }
    output.length = outLen;

    if (input.length <= 9) {
      input.words[0] = 0;
      input.length = 1;
      return;
    }

    // Shift by 9 limbs
    var prev = input.words[9];
    output.words[output.length++] = prev & mask;

    for (i = 10; i < input.length; i++) {
      var next = input.words[i] | 0;
      input.words[i - 10] = ((next & mask) << 4) | (prev >>> 22);
      prev = next;
    }
    input.words[i - 10] = prev >>> 22;
    input.length -= 9;
  };

  K256.prototype.imulK = function imulK (num) {
    // K = 0x1000003d1 = [ 0x40, 0x3d1 ]
    num.words[num.length] = 0;
    num.words[num.length + 1] = 0;
    num.length += 2;

    // bounded at: 0x40 * 0x3ffffff + 0x3d0 = 0x100000390
    var lo = 0;
    for (var i = 0; i < num.length; i++) {
      var w = num.words[i] | 0;
      lo += w * 0x3d1;
      num.words[i] = lo & 0x3ffffff;
      lo = w * 0x40 + ((lo / 0x4000000) | 0);
    }

    // Fast length reduction
    if (num.words[num.length - 1] === 0) {
      num.length--;
      if (num.words[num.length - 1] === 0) {
        num.length--;
      }
    }
    return num;
  };

  function P224 () {
    MPrime.call(
      this,
      'p224',
      'ffffffff ffffffff ffffffff ffffffff 00000000 00000000 00000001');
  }
  inherits(P224, MPrime);

  function P192 () {
    MPrime.call(
      this,
      'p192',
      'ffffffff ffffffff ffffffff fffffffe ffffffff ffffffff');
  }
  inherits(P192, MPrime);

  function P25519 () {
    // 2 ^ 255 - 19
    MPrime.call(
      this,
      '25519',
      '7fffffffffffffff ffffffffffffffff ffffffffffffffff ffffffffffffffed');
  }
  inherits(P25519, MPrime);

  P25519.prototype.imulK = function imulK (num) {
    // K = 0x13
    var carry = 0;
    for (var i = 0; i < num.length; i++) {
      var hi = (num.words[i] | 0) * 0x13 + carry;
      var lo = hi & 0x3ffffff;
      hi >>>= 26;

      num.words[i] = lo;
      carry = hi;
    }
    if (carry !== 0) {
      num.words[num.length++] = carry;
    }
    return num;
  };

  // Exported mostly for testing purposes, use plain name instead
  BN._prime = function prime (name) {
    // Cached version of prime
    if (primes[name]) return primes[name];

    var prime;
    if (name === 'k256') {
      prime = new K256();
    } else if (name === 'p224') {
      prime = new P224();
    } else if (name === 'p192') {
      prime = new P192();
    } else if (name === 'p25519') {
      prime = new P25519();
    } else {
      throw new Error('Unknown prime ' + name);
    }
    primes[name] = prime;

    return prime;
  };

  //
  // Base reduction engine
  //
  function Red (m) {
    if (typeof m === 'string') {
      var prime = BN._prime(m);
      this.m = prime.p;
      this.prime = prime;
    } else {
      this.m = m;
      this.prime = null;
    }
  }

  Red.prototype._verify1 = function _verify1 (a) {
    assert(a.negative === 0, 'red works only with positives');
    assert(a.red, 'red works only with red numbers');
  };

  Red.prototype._verify2 = function _verify2 (a, b) {
    assert((a.negative | b.negative) === 0, 'red works only with positives');
    assert(a.red && a.red === b.red,
      'red works only with red numbers');
  };

  Red.prototype.imod = function imod (a) {
    if (this.prime) return this.prime.ireduce(a)._forceRed(this);
    return a.umod(this.m)._forceRed(this);
  };

  Red.prototype.neg = function neg (a) {
    var r = a.clone();
    r.negative ^= 1;
    return r.iadd(this.m)._forceRed(this);
  };

  Red.prototype.add = function add (a, b) {
    this._verify2(a, b);

    var res = a.add(b);
    if (res.cmp(this.m) >= 0) {
      res.isub(this.m);
    }
    return res._forceRed(this);
  };

  Red.prototype.iadd = function iadd (a, b) {
    this._verify2(a, b);

    var res = a.iadd(b);
    if (res.cmp(this.m) >= 0) {
      res.isub(this.m);
    }
    return res;
  };

  Red.prototype.sub = function sub (a, b) {
    this._verify2(a, b);

    var res = a.sub(b);
    if (res.cmpn(0) < 0) {
      res.iadd(this.m);
    }
    return res._forceRed(this);
  };

  Red.prototype.isub = function isub (a, b) {
    this._verify2(a, b);

    var res = a.isub(b);
    if (res.cmpn(0) < 0) {
      res.iadd(this.m);
    }
    return res;
  };

  Red.prototype.shl = function shl (a, num) {
    this._verify1(a);
    return this.imod(a.ushln(num));
  };

  Red.prototype.imul = function imul (a, b) {
    this._verify2(a, b);
    return this.imod(a.imul(b));
  };

  Red.prototype.mul = function mul (a, b) {
    this._verify2(a, b);
    return this.imod(a.mul(b));
  };

  Red.prototype.isqr = function isqr (a) {
    return this.imul(a, a);
  };

  Red.prototype.sqr = function sqr (a) {
    return this.mul(a, a);
  };

  Red.prototype.sqrt = function sqrt (a) {
    if (a.isZero()) return a.clone();

    var mod3 = this.m.andln(3);
    assert(mod3 % 2 === 1);

    // Fast case
    if (mod3 === 3) {
      var pow = this.m.add(new BN(1)).iushrn(2);
      return this.pow(a, pow);
    }

    // Tonelli-Shanks algorithm (Totally unoptimized and slow)
    //
    // Find Q and S, that Q * 2 ^ S = (P - 1)
    var q = this.m.subn(1);
    var s = 0;
    while (!q.isZero() && q.andln(1) === 0) {
      s++;
      q.iushrn(1);
    }
    assert(!q.isZero());

    var one = new BN(1).toRed(this);
    var nOne = one.redNeg();

    // Find quadratic non-residue
    // NOTE: Max is such because of generalized Riemann hypothesis.
    var lpow = this.m.subn(1).iushrn(1);
    var z = this.m.bitLength();
    z = new BN(2 * z * z).toRed(this);

    while (this.pow(z, lpow).cmp(nOne) !== 0) {
      z.redIAdd(nOne);
    }

    var c = this.pow(z, q);
    var r = this.pow(a, q.addn(1).iushrn(1));
    var t = this.pow(a, q);
    var m = s;
    while (t.cmp(one) !== 0) {
      var tmp = t;
      for (var i = 0; tmp.cmp(one) !== 0; i++) {
        tmp = tmp.redSqr();
      }
      assert(i < m);
      var b = this.pow(c, new BN(1).iushln(m - i - 1));

      r = r.redMul(b);
      c = b.redSqr();
      t = t.redMul(c);
      m = i;
    }

    return r;
  };

  Red.prototype.invm = function invm (a) {
    var inv = a._invmp(this.m);
    if (inv.negative !== 0) {
      inv.negative = 0;
      return this.imod(inv).redNeg();
    } else {
      return this.imod(inv);
    }
  };

  Red.prototype.pow = function pow (a, num) {
    if (num.isZero()) return new BN(1);
    if (num.cmpn(1) === 0) return a.clone();

    var windowSize = 4;
    var wnd = new Array(1 << windowSize);
    wnd[0] = new BN(1).toRed(this);
    wnd[1] = a;
    for (var i = 2; i < wnd.length; i++) {
      wnd[i] = this.mul(wnd[i - 1], a);
    }

    var res = wnd[0];
    var current = 0;
    var currentLen = 0;
    var start = num.bitLength() % 26;
    if (start === 0) {
      start = 26;
    }

    for (i = num.length - 1; i >= 0; i--) {
      var word = num.words[i];
      for (var j = start - 1; j >= 0; j--) {
        var bit = (word >> j) & 1;
        if (res !== wnd[0]) {
          res = this.sqr(res);
        }

        if (bit === 0 && current === 0) {
          currentLen = 0;
          continue;
        }

        current <<= 1;
        current |= bit;
        currentLen++;
        if (currentLen !== windowSize && (i !== 0 || j !== 0)) continue;

        res = this.mul(res, wnd[current]);
        currentLen = 0;
        current = 0;
      }
      start = 26;
    }

    return res;
  };

  Red.prototype.convertTo = function convertTo (num) {
    var r = num.umod(this.m);

    return r === num ? r.clone() : r;
  };

  Red.prototype.convertFrom = function convertFrom (num) {
    var res = num.clone();
    res.red = null;
    return res;
  };

  //
  // Montgomery method engine
  //

  BN.mont = function mont (num) {
    return new Mont(num);
  };

  function Mont (m) {
    Red.call(this, m);

    this.shift = this.m.bitLength();
    if (this.shift % 26 !== 0) {
      this.shift += 26 - (this.shift % 26);
    }

    this.r = new BN(1).iushln(this.shift);
    this.r2 = this.imod(this.r.sqr());
    this.rinv = this.r._invmp(this.m);

    this.minv = this.rinv.mul(this.r).isubn(1).div(this.m);
    this.minv = this.minv.umod(this.r);
    this.minv = this.r.sub(this.minv);
  }
  inherits(Mont, Red);

  Mont.prototype.convertTo = function convertTo (num) {
    return this.imod(num.ushln(this.shift));
  };

  Mont.prototype.convertFrom = function convertFrom (num) {
    var r = this.imod(num.mul(this.rinv));
    r.red = null;
    return r;
  };

  Mont.prototype.imul = function imul (a, b) {
    if (a.isZero() || b.isZero()) {
      a.words[0] = 0;
      a.length = 1;
      return a;
    }

    var t = a.imul(b);
    var c = t.maskn(this.shift).mul(this.minv).imaskn(this.shift).mul(this.m);
    var u = t.isub(c).iushrn(this.shift);
    var res = u;

    if (u.cmp(this.m) >= 0) {
      res = u.isub(this.m);
    } else if (u.cmpn(0) < 0) {
      res = u.iadd(this.m);
    }

    return res._forceRed(this);
  };

  Mont.prototype.mul = function mul (a, b) {
    if (a.isZero() || b.isZero()) return new BN(0)._forceRed(this);

    var t = a.mul(b);
    var c = t.maskn(this.shift).mul(this.minv).imaskn(this.shift).mul(this.m);
    var u = t.isub(c).iushrn(this.shift);
    var res = u;
    if (u.cmp(this.m) >= 0) {
      res = u.isub(this.m);
    } else if (u.cmpn(0) < 0) {
      res = u.iadd(this.m);
    }

    return res._forceRed(this);
  };

  Mont.prototype.invm = function invm (a) {
    // (AR)^-1 * R^2 = (A^-1 * R^-1) * R^2 = A^-1 * R
    var res = this.imod(a._invmp(this.m).mul(this.r2));
    return res._forceRed(this);
  };
})(typeof module === 'undefined' || module, this);

},{}],"/Users/jrmerz/dev/cstars/AHB/farm-budgets-app/node_modules/browserify-sign/algos.js":[function(require,module,exports){
(function (Buffer){
'use strict'
exports['RSA-SHA224'] = exports.sha224WithRSAEncryption = {
  sign: 'rsa',
  hash: 'sha224',
  id: new Buffer('302d300d06096086480165030402040500041c', 'hex')
}
exports['RSA-SHA256'] = exports.sha256WithRSAEncryption = {
  sign: 'rsa',
  hash: 'sha256',
  id: new Buffer('3031300d060960864801650304020105000420', 'hex')
}
exports['RSA-SHA384'] = exports.sha384WithRSAEncryption = {
  sign: 'rsa',
  hash: 'sha384',
  id: new Buffer('3041300d060960864801650304020205000430', 'hex')
}
exports['RSA-SHA512'] = exports.sha512WithRSAEncryption = {
  sign: 'rsa',
  hash: 'sha512',
  id: new Buffer('3051300d060960864801650304020305000440', 'hex')
}
exports['RSA-SHA1'] = {
  sign: 'rsa',
  hash: 'sha1',
  id: new Buffer('3021300906052b0e03021a05000414', 'hex')
}
exports['ecdsa-with-SHA1'] = {
  sign: 'ecdsa',
  hash: 'sha1',
  id: new Buffer('', 'hex')
}

exports.DSA = exports['DSA-SHA1'] = exports['DSA-SHA'] = {
  sign: 'dsa',
  hash: 'sha1',
  id: new Buffer('', 'hex')
}
exports['DSA-SHA224'] = exports['DSA-WITH-SHA224'] = {
  sign: 'dsa',
  hash: 'sha224',
  id: new Buffer('', 'hex')
}
exports['DSA-SHA256'] = exports['DSA-WITH-SHA256'] = {
  sign: 'dsa',
  hash: 'sha256',
  id: new Buffer('', 'hex')
}
exports['DSA-SHA384'] = exports['DSA-WITH-SHA384'] = {
  sign: 'dsa',
  hash: 'sha384',
  id: new Buffer('', 'hex')
}
exports['DSA-SHA512'] = exports['DSA-WITH-SHA512'] = {
  sign: 'dsa',
  hash: 'sha512',
  id: new Buffer('', 'hex')
}
exports['DSA-RIPEMD160'] = {
  sign: 'dsa',
  hash: 'rmd160',
  id: new Buffer('', 'hex')
}
exports['RSA-RIPEMD160'] = exports.ripemd160WithRSA = {
  sign: 'rsa',
  hash: 'rmd160',
  id: new Buffer('3021300906052b2403020105000414', 'hex')
}
exports['RSA-MD5'] = exports.md5WithRSAEncryption = {
  sign: 'rsa',
  hash: 'md5',
  id: new Buffer('3020300c06082a864886f70d020505000410', 'hex')
}

}).call(this,require("buffer").Buffer)

},{"buffer":"/Users/jrmerz/dev/cstars/AHB/farm-budgets-app/node_modules/buffer/index.js"}],"/Users/jrmerz/dev/cstars/AHB/farm-budgets-app/node_modules/browserify-sign/browser.js":[function(require,module,exports){
(function (Buffer){
var _algos = require('./algos')
var createHash = require('create-hash')
var inherits = require('inherits')
var sign = require('./sign')
var stream = require('stream')
var verify = require('./verify')

var algos = {}
Object.keys(_algos).forEach(function (key) {
  algos[key] = algos[key.toLowerCase()] = _algos[key]
})

function Sign (algorithm) {
  stream.Writable.call(this)

  var data = algos[algorithm]
  if (!data) {
    throw new Error('Unknown message digest')
  }

  this._hashType = data.hash
  this._hash = createHash(data.hash)
  this._tag = data.id
  this._signType = data.sign
}
inherits(Sign, stream.Writable)

Sign.prototype._write = function _write (data, _, done) {
  this._hash.update(data)
  done()
}

Sign.prototype.update = function update (data, enc) {
  if (typeof data === 'string') {
    data = new Buffer(data, enc)
  }

  this._hash.update(data)
  return this
}

Sign.prototype.sign = function signMethod (key, enc) {
  this.end()
  var hash = this._hash.digest()
  var sig = sign(Buffer.concat([this._tag, hash]), key, this._hashType, this._signType)

  return enc ? sig.toString(enc) : sig
}

function Verify (algorithm) {
  stream.Writable.call(this)

  var data = algos[algorithm]
  if (!data) {
    throw new Error('Unknown message digest')
  }

  this._hash = createHash(data.hash)
  this._tag = data.id
  this._signType = data.sign
}
inherits(Verify, stream.Writable)

Verify.prototype._write = function _write (data, _, done) {
  this._hash.update(data)

  done()
}

Verify.prototype.update = function update (data, enc) {
  if (typeof data === 'string') {
    data = new Buffer(data, enc)
  }

  this._hash.update(data)
  return this
}

Verify.prototype.verify = function verifyMethod (key, sig, enc) {
  if (typeof sig === 'string') {
    sig = new Buffer(sig, enc)
  }

  this.end()
  var hash = this._hash.digest()

  return verify(sig, Buffer.concat([this._tag, hash]), key, this._signType)
}

function createSign (algorithm) {
  return new Sign(algorithm)
}

function createVerify (algorithm) {
  return new Verify(algorithm)
}

module.exports = {
  Sign: createSign,
  Verify: createVerify,
  createSign: createSign,
  createVerify: createVerify
}

}).call(this,require("buffer").Buffer)

},{"./algos":"/Users/jrmerz/dev/cstars/AHB/farm-budgets-app/node_modules/browserify-sign/algos.js","./sign":"/Users/jrmerz/dev/cstars/AHB/farm-budgets-app/node_modules/browserify-sign/sign.js","./verify":"/Users/jrmerz/dev/cstars/AHB/farm-budgets-app/node_modules/browserify-sign/verify.js","buffer":"/Users/jrmerz/dev/cstars/AHB/farm-budgets-app/node_modules/buffer/index.js","create-hash":"/Users/jrmerz/dev/cstars/AHB/farm-budgets-app/node_modules/create-hash/browser.js","inherits":"/Users/jrmerz/dev/cstars/AHB/farm-budgets-app/node_modules/inherits/inherits_browser.js","stream":"/Users/jrmerz/dev/cstars/AHB/farm-budgets-app/node_modules/stream-browserify/index.js"}],"/Users/jrmerz/dev/cstars/AHB/farm-budgets-app/node_modules/browserify-sign/curves.js":[function(require,module,exports){
'use strict'
exports['1.3.132.0.10'] = 'secp256k1'

exports['1.3.132.0.33'] = 'p224'

exports['1.2.840.10045.3.1.1'] = 'p192'

exports['1.2.840.10045.3.1.7'] = 'p256'

exports['1.3.132.0.34'] = 'p384'

exports['1.3.132.0.35'] = 'p521'

},{}],"/Users/jrmerz/dev/cstars/AHB/farm-budgets-app/node_modules/browserify-sign/node_modules/bn.js/lib/bn.js":[function(require,module,exports){
arguments[4]["/Users/jrmerz/dev/cstars/AHB/farm-budgets-app/node_modules/browserify-rsa/node_modules/bn.js/lib/bn.js"][0].apply(exports,arguments)
},{}],"/Users/jrmerz/dev/cstars/AHB/farm-budgets-app/node_modules/browserify-sign/sign.js":[function(require,module,exports){
(function (Buffer){
// much of this based on https://github.com/indutny/self-signed/blob/gh-pages/lib/rsa.js
var createHmac = require('create-hmac')
var crt = require('browserify-rsa')
var curves = require('./curves')
var elliptic = require('elliptic')
var parseKeys = require('parse-asn1')

var BN = require('bn.js')
var EC = elliptic.ec

function sign (hash, key, hashType, signType) {
  var priv = parseKeys(key)
  if (priv.curve) {
    if (signType !== 'ecdsa') throw new Error('wrong private key type')

    return ecSign(hash, priv)
  } else if (priv.type === 'dsa') {
    if (signType !== 'dsa') {
      throw new Error('wrong private key type')
    }
    return dsaSign(hash, priv, hashType)
  } else {
    if (signType !== 'rsa') throw new Error('wrong private key type')
  }

  var len = priv.modulus.byteLength()
  var pad = [ 0, 1 ]
  while (hash.length + pad.length + 1 < len) {
    pad.push(0xff)
  }
  pad.push(0x00)
  var i = -1
  while (++i < hash.length) {
    pad.push(hash[i])
  }

  var out = crt(pad, priv)
  return out
}

function ecSign (hash, priv) {
  var curveId = curves[priv.curve.join('.')]
  if (!curveId) throw new Error('unknown curve ' + priv.curve.join('.'))

  var curve = new EC(curveId)
  var key = curve.genKeyPair()

  key._importPrivate(priv.privateKey)
  var out = key.sign(hash)

  return new Buffer(out.toDER())
}

function dsaSign (hash, priv, algo) {
  var x = priv.params.priv_key
  var p = priv.params.p
  var q = priv.params.q
  var g = priv.params.g
  var r = new BN(0)
  var k
  var H = bits2int(hash, q).mod(q)
  var s = false
  var kv = getKey(x, q, hash, algo)
  while (s === false) {
    k = makeKey(q, kv, algo)
    r = makeR(g, k, p, q)
    s = k.invm(q).imul(H.add(x.mul(r))).mod(q)
    if (!s.cmpn(0)) {
      s = false
      r = new BN(0)
    }
  }
  return toDER(r, s)
}

function toDER (r, s) {
  r = r.toArray()
  s = s.toArray()

  // Pad values
  if (r[0] & 0x80) {
    r = [ 0 ].concat(r)
  }
  // Pad values
  if (s[0] & 0x80) {
    s = [0].concat(s)
  }

  var total = r.length + s.length + 4
  var res = [ 0x30, total, 0x02, r.length ]
  res = res.concat(r, [ 0x02, s.length ], s)
  return new Buffer(res)
}

function getKey (x, q, hash, algo) {
  x = new Buffer(x.toArray())
  if (x.length < q.byteLength()) {
    var zeros = new Buffer(q.byteLength() - x.length)
    zeros.fill(0)
    x = Buffer.concat([zeros, x])
  }
  var hlen = hash.length
  var hbits = bits2octets(hash, q)
  var v = new Buffer(hlen)
  v.fill(1)
  var k = new Buffer(hlen)
  k.fill(0)
  k = createHmac(algo, k)
    .update(v)
    .update(new Buffer([0]))
    .update(x)
    .update(hbits)
    .digest()
  v = createHmac(algo, k)
    .update(v)
    .digest()
  k = createHmac(algo, k)
    .update(v)
    .update(new Buffer([1]))
    .update(x)
    .update(hbits)
    .digest()
  v = createHmac(algo, k)
    .update(v)
    .digest()
  return {
    k: k,
    v: v
  }
}

function bits2int (obits, q) {
  var bits = new BN(obits)
  var shift = (obits.length << 3) - q.bitLength()
  if (shift > 0) {
    bits.ishrn(shift)
  }
  return bits
}

function bits2octets (bits, q) {
  bits = bits2int(bits, q)
  bits = bits.mod(q)
  var out = new Buffer(bits.toArray())
  if (out.length < q.byteLength()) {
    var zeros = new Buffer(q.byteLength() - out.length)
    zeros.fill(0)
    out = Buffer.concat([zeros, out])
  }
  return out
}

function makeKey (q, kv, algo) {
  var t, k

  do {
    t = new Buffer('')

    while (t.length * 8 < q.bitLength()) {
      kv.v = createHmac(algo, kv.k)
        .update(kv.v)
        .digest()
      t = Buffer.concat([t, kv.v])
    }

    k = bits2int(t, q)
    kv.k = createHmac(algo, kv.k)
      .update(kv.v)
      .update(new Buffer([0]))
      .digest()
    kv.v = createHmac(algo, kv.k)
      .update(kv.v)
      .digest()
  } while (k.cmp(q) !== -1)

  return k
}

function makeR (g, k, p, q) {
  return g.toRed(BN.mont(p)).redPow(k).fromRed().mod(q)
}

module.exports = sign
module.exports.getKey = getKey
module.exports.makeKey = makeKey

}).call(this,require("buffer").Buffer)

},{"./curves":"/Users/jrmerz/dev/cstars/AHB/farm-budgets-app/node_modules/browserify-sign/curves.js","bn.js":"/Users/jrmerz/dev/cstars/AHB/farm-budgets-app/node_modules/browserify-sign/node_modules/bn.js/lib/bn.js","browserify-rsa":"/Users/jrmerz/dev/cstars/AHB/farm-budgets-app/node_modules/browserify-rsa/index.js","buffer":"/Users/jrmerz/dev/cstars/AHB/farm-budgets-app/node_modules/buffer/index.js","create-hmac":"/Users/jrmerz/dev/cstars/AHB/farm-budgets-app/node_modules/create-hmac/browser.js","elliptic":"/Users/jrmerz/dev/cstars/AHB/farm-budgets-app/node_modules/elliptic/lib/elliptic.js","parse-asn1":"/Users/jrmerz/dev/cstars/AHB/farm-budgets-app/node_modules/parse-asn1/index.js"}],"/Users/jrmerz/dev/cstars/AHB/farm-budgets-app/node_modules/browserify-sign/verify.js":[function(require,module,exports){
(function (Buffer){
// much of this based on https://github.com/indutny/self-signed/blob/gh-pages/lib/rsa.js
var curves = require('./curves')
var elliptic = require('elliptic')
var parseKeys = require('parse-asn1')

var BN = require('bn.js')
var EC = elliptic.ec

function verify (sig, hash, key, signType) {
  var pub = parseKeys(key)
  if (pub.type === 'ec') {
    if (signType !== 'ecdsa') {
      throw new Error('wrong public key type')
    }
    return ecVerify(sig, hash, pub)
  } else if (pub.type === 'dsa') {
    if (signType !== 'dsa') {
      throw new Error('wrong public key type')
    }
    return dsaVerify(sig, hash, pub)
  } else {
    if (signType !== 'rsa') {
      throw new Error('wrong public key type')
    }
  }
  var len = pub.modulus.byteLength()
  var pad = [ 1 ]
  var padNum = 0
  while (hash.length + pad.length + 2 < len) {
    pad.push(0xff)
    padNum++
  }
  pad.push(0x00)
  var i = -1
  while (++i < hash.length) {
    pad.push(hash[i])
  }
  pad = new Buffer(pad)
  var red = BN.mont(pub.modulus)
  sig = new BN(sig).toRed(red)

  sig = sig.redPow(new BN(pub.publicExponent))

  sig = new Buffer(sig.fromRed().toArray())
  var out = 0
  if (padNum < 8) {
    out = 1
  }
  len = Math.min(sig.length, pad.length)
  if (sig.length !== pad.length) {
    out = 1
  }

  i = -1
  while (++i < len) {
    out |= (sig[i] ^ pad[i])
  }
  return out === 0
}

function ecVerify (sig, hash, pub) {
  var curveId = curves[pub.data.algorithm.curve.join('.')]
  if (!curveId) throw new Error('unknown curve ' + pub.data.algorithm.curve.join('.'))

  var curve = new EC(curveId)
  var pubkey = pub.data.subjectPrivateKey.data

  return curve.verify(hash, sig, pubkey)
}

function dsaVerify (sig, hash, pub) {
  var p = pub.data.p
  var q = pub.data.q
  var g = pub.data.g
  var y = pub.data.pub_key
  var unpacked = parseKeys.signature.decode(sig, 'der')
  var s = unpacked.s
  var r = unpacked.r
  checkValue(s, q)
  checkValue(r, q)
  var montp = BN.mont(p)
  var w = s.invm(q)
  var v = g.toRed(montp)
    .redPow(new BN(hash).mul(w).mod(q))
    .fromRed()
    .mul(
      y.toRed(montp)
        .redPow(r.mul(w).mod(q))
        .fromRed()
  ).mod(p).mod(q)
  return !v.cmp(r)
}

function checkValue (b, q) {
  if (b.cmpn(0) <= 0) {
    throw new Error('invalid sig')
  }
  if (b.cmp(q) >= q) {
    throw new Error('invalid sig')
  }
}

module.exports = verify

}).call(this,require("buffer").Buffer)

},{"./curves":"/Users/jrmerz/dev/cstars/AHB/farm-budgets-app/node_modules/browserify-sign/curves.js","bn.js":"/Users/jrmerz/dev/cstars/AHB/farm-budgets-app/node_modules/browserify-sign/node_modules/bn.js/lib/bn.js","buffer":"/Users/jrmerz/dev/cstars/AHB/farm-budgets-app/node_modules/buffer/index.js","elliptic":"/Users/jrmerz/dev/cstars/AHB/farm-budgets-app/node_modules/elliptic/lib/elliptic.js","parse-asn1":"/Users/jrmerz/dev/cstars/AHB/farm-budgets-app/node_modules/parse-asn1/index.js"}],"/Users/jrmerz/dev/cstars/AHB/farm-budgets-app/node_modules/buffer-xor/index.js":[function(require,module,exports){
(function (Buffer){
module.exports = function xor (a, b) {
  var length = Math.min(a.length, b.length)
  var buffer = new Buffer(length)

  for (var i = 0; i < length; ++i) {
    buffer[i] = a[i] ^ b[i]
  }

  return buffer
}

}).call(this,require("buffer").Buffer)

},{"buffer":"/Users/jrmerz/dev/cstars/AHB/farm-budgets-app/node_modules/buffer/index.js"}],"/Users/jrmerz/dev/cstars/AHB/farm-budgets-app/node_modules/buffer/index.js":[function(require,module,exports){
(function (global){
/*!
 * The buffer module from node.js, for the browser.
 *
 * @author   Feross Aboukhadijeh <feross@feross.org> <http://feross.org>
 * @license  MIT
 */
/* eslint-disable no-proto */

'use strict'

var base64 = require('base64-js')
var ieee754 = require('ieee754')
var isArray = require('isarray')

exports.Buffer = Buffer
exports.SlowBuffer = SlowBuffer
exports.INSPECT_MAX_BYTES = 50
Buffer.poolSize = 8192 // not used by this implementation

var rootParent = {}

/**
 * If `Buffer.TYPED_ARRAY_SUPPORT`:
 *   === true    Use Uint8Array implementation (fastest)
 *   === false   Use Object implementation (most compatible, even IE6)
 *
 * Browsers that support typed arrays are IE 10+, Firefox 4+, Chrome 7+, Safari 5.1+,
 * Opera 11.6+, iOS 4.2+.
 *
 * Due to various browser bugs, sometimes the Object implementation will be used even
 * when the browser supports typed arrays.
 *
 * Note:
 *
 *   - Firefox 4-29 lacks support for adding new properties to `Uint8Array` instances,
 *     See: https://bugzilla.mozilla.org/show_bug.cgi?id=695438.
 *
 *   - Safari 5-7 lacks support for changing the `Object.prototype.constructor` property
 *     on objects.
 *
 *   - Chrome 9-10 is missing the `TypedArray.prototype.subarray` function.
 *
 *   - IE10 has a broken `TypedArray.prototype.subarray` function which returns arrays of
 *     incorrect length in some situations.

 * We detect these buggy browsers and set `Buffer.TYPED_ARRAY_SUPPORT` to `false` so they
 * get the Object implementation, which is slower but behaves correctly.
 */
Buffer.TYPED_ARRAY_SUPPORT = global.TYPED_ARRAY_SUPPORT !== undefined
  ? global.TYPED_ARRAY_SUPPORT
  : typedArraySupport()

function typedArraySupport () {
  function Bar () {}
  try {
    var arr = new Uint8Array(1)
    arr.foo = function () { return 42 }
    arr.constructor = Bar
    return arr.foo() === 42 && // typed array instances can be augmented
        arr.constructor === Bar && // constructor can be set
        typeof arr.subarray === 'function' && // chrome 9-10 lack `subarray`
        arr.subarray(1, 1).byteLength === 0 // ie10 has broken `subarray`
  } catch (e) {
    return false
  }
}

function kMaxLength () {
  return Buffer.TYPED_ARRAY_SUPPORT
    ? 0x7fffffff
    : 0x3fffffff
}

/**
 * Class: Buffer
 * =============
 *
 * The Buffer constructor returns instances of `Uint8Array` that are augmented
 * with function properties for all the node `Buffer` API functions. We use
 * `Uint8Array` so that square bracket notation works as expected -- it returns
 * a single octet.
 *
 * By augmenting the instances, we can avoid modifying the `Uint8Array`
 * prototype.
 */
function Buffer (arg) {
  if (!(this instanceof Buffer)) {
    // Avoid going through an ArgumentsAdaptorTrampoline in the common case.
    if (arguments.length > 1) return new Buffer(arg, arguments[1])
    return new Buffer(arg)
  }

  if (!Buffer.TYPED_ARRAY_SUPPORT) {
    this.length = 0
    this.parent = undefined
  }

  // Common case.
  if (typeof arg === 'number') {
    return fromNumber(this, arg)
  }

  // Slightly less common case.
  if (typeof arg === 'string') {
    return fromString(this, arg, arguments.length > 1 ? arguments[1] : 'utf8')
  }

  // Unusual.
  return fromObject(this, arg)
}

function fromNumber (that, length) {
  that = allocate(that, length < 0 ? 0 : checked(length) | 0)
  if (!Buffer.TYPED_ARRAY_SUPPORT) {
    for (var i = 0; i < length; i++) {
      that[i] = 0
    }
  }
  return that
}

function fromString (that, string, encoding) {
  if (typeof encoding !== 'string' || encoding === '') encoding = 'utf8'

  // Assumption: byteLength() return value is always < kMaxLength.
  var length = byteLength(string, encoding) | 0
  that = allocate(that, length)

  that.write(string, encoding)
  return that
}

function fromObject (that, object) {
  if (Buffer.isBuffer(object)) return fromBuffer(that, object)

  if (isArray(object)) return fromArray(that, object)

  if (object == null) {
    throw new TypeError('must start with number, buffer, array or string')
  }

  if (typeof ArrayBuffer !== 'undefined') {
    if (object.buffer instanceof ArrayBuffer) {
      return fromTypedArray(that, object)
    }
    if (object instanceof ArrayBuffer) {
      return fromArrayBuffer(that, object)
    }
  }

  if (object.length) return fromArrayLike(that, object)

  return fromJsonObject(that, object)
}

function fromBuffer (that, buffer) {
  var length = checked(buffer.length) | 0
  that = allocate(that, length)
  buffer.copy(that, 0, 0, length)
  return that
}

function fromArray (that, array) {
  var length = checked(array.length) | 0
  that = allocate(that, length)
  for (var i = 0; i < length; i += 1) {
    that[i] = array[i] & 255
  }
  return that
}

// Duplicate of fromArray() to keep fromArray() monomorphic.
function fromTypedArray (that, array) {
  var length = checked(array.length) | 0
  that = allocate(that, length)
  // Truncating the elements is probably not what people expect from typed
  // arrays with BYTES_PER_ELEMENT > 1 but it's compatible with the behavior
  // of the old Buffer constructor.
  for (var i = 0; i < length; i += 1) {
    that[i] = array[i] & 255
  }
  return that
}

function fromArrayBuffer (that, array) {
  if (Buffer.TYPED_ARRAY_SUPPORT) {
    // Return an augmented `Uint8Array` instance, for best performance
    array.byteLength
    that = Buffer._augment(new Uint8Array(array))
  } else {
    // Fallback: Return an object instance of the Buffer class
    that = fromTypedArray(that, new Uint8Array(array))
  }
  return that
}

function fromArrayLike (that, array) {
  var length = checked(array.length) | 0
  that = allocate(that, length)
  for (var i = 0; i < length; i += 1) {
    that[i] = array[i] & 255
  }
  return that
}

// Deserialize { type: 'Buffer', data: [1,2,3,...] } into a Buffer object.
// Returns a zero-length buffer for inputs that don't conform to the spec.
function fromJsonObject (that, object) {
  var array
  var length = 0

  if (object.type === 'Buffer' && isArray(object.data)) {
    array = object.data
    length = checked(array.length) | 0
  }
  that = allocate(that, length)

  for (var i = 0; i < length; i += 1) {
    that[i] = array[i] & 255
  }
  return that
}

if (Buffer.TYPED_ARRAY_SUPPORT) {
  Buffer.prototype.__proto__ = Uint8Array.prototype
  Buffer.__proto__ = Uint8Array
} else {
  // pre-set for values that may exist in the future
  Buffer.prototype.length = undefined
  Buffer.prototype.parent = undefined
}

function allocate (that, length) {
  if (Buffer.TYPED_ARRAY_SUPPORT) {
    // Return an augmented `Uint8Array` instance, for best performance
    that = Buffer._augment(new Uint8Array(length))
    that.__proto__ = Buffer.prototype
  } else {
    // Fallback: Return an object instance of the Buffer class
    that.length = length
    that._isBuffer = true
  }

  var fromPool = length !== 0 && length <= Buffer.poolSize >>> 1
  if (fromPool) that.parent = rootParent

  return that
}

function checked (length) {
  // Note: cannot use `length < kMaxLength` here because that fails when
  // length is NaN (which is otherwise coerced to zero.)
  if (length >= kMaxLength()) {
    throw new RangeError('Attempt to allocate Buffer larger than maximum ' +
                         'size: 0x' + kMaxLength().toString(16) + ' bytes')
  }
  return length | 0
}

function SlowBuffer (subject, encoding) {
  if (!(this instanceof SlowBuffer)) return new SlowBuffer(subject, encoding)

  var buf = new Buffer(subject, encoding)
  delete buf.parent
  return buf
}

Buffer.isBuffer = function isBuffer (b) {
  return !!(b != null && b._isBuffer)
}

Buffer.compare = function compare (a, b) {
  if (!Buffer.isBuffer(a) || !Buffer.isBuffer(b)) {
    throw new TypeError('Arguments must be Buffers')
  }

  if (a === b) return 0

  var x = a.length
  var y = b.length

  var i = 0
  var len = Math.min(x, y)
  while (i < len) {
    if (a[i] !== b[i]) break

    ++i
  }

  if (i !== len) {
    x = a[i]
    y = b[i]
  }

  if (x < y) return -1
  if (y < x) return 1
  return 0
}

Buffer.isEncoding = function isEncoding (encoding) {
  switch (String(encoding).toLowerCase()) {
    case 'hex':
    case 'utf8':
    case 'utf-8':
    case 'ascii':
    case 'binary':
    case 'base64':
    case 'raw':
    case 'ucs2':
    case 'ucs-2':
    case 'utf16le':
    case 'utf-16le':
      return true
    default:
      return false
  }
}

Buffer.concat = function concat (list, length) {
  if (!isArray(list)) throw new TypeError('list argument must be an Array of Buffers.')

  if (list.length === 0) {
    return new Buffer(0)
  }

  var i
  if (length === undefined) {
    length = 0
    for (i = 0; i < list.length; i++) {
      length += list[i].length
    }
  }

  var buf = new Buffer(length)
  var pos = 0
  for (i = 0; i < list.length; i++) {
    var item = list[i]
    item.copy(buf, pos)
    pos += item.length
  }
  return buf
}

function byteLength (string, encoding) {
  if (typeof string !== 'string') string = '' + string

  var len = string.length
  if (len === 0) return 0

  // Use a for loop to avoid recursion
  var loweredCase = false
  for (;;) {
    switch (encoding) {
      case 'ascii':
      case 'binary':
      // Deprecated
      case 'raw':
      case 'raws':
        return len
      case 'utf8':
      case 'utf-8':
        return utf8ToBytes(string).length
      case 'ucs2':
      case 'ucs-2':
      case 'utf16le':
      case 'utf-16le':
        return len * 2
      case 'hex':
        return len >>> 1
      case 'base64':
        return base64ToBytes(string).length
      default:
        if (loweredCase) return utf8ToBytes(string).length // assume utf8
        encoding = ('' + encoding).toLowerCase()
        loweredCase = true
    }
  }
}
Buffer.byteLength = byteLength

function slowToString (encoding, start, end) {
  var loweredCase = false

  start = start | 0
  end = end === undefined || end === Infinity ? this.length : end | 0

  if (!encoding) encoding = 'utf8'
  if (start < 0) start = 0
  if (end > this.length) end = this.length
  if (end <= start) return ''

  while (true) {
    switch (encoding) {
      case 'hex':
        return hexSlice(this, start, end)

      case 'utf8':
      case 'utf-8':
        return utf8Slice(this, start, end)

      case 'ascii':
        return asciiSlice(this, start, end)

      case 'binary':
        return binarySlice(this, start, end)

      case 'base64':
        return base64Slice(this, start, end)

      case 'ucs2':
      case 'ucs-2':
      case 'utf16le':
      case 'utf-16le':
        return utf16leSlice(this, start, end)

      default:
        if (loweredCase) throw new TypeError('Unknown encoding: ' + encoding)
        encoding = (encoding + '').toLowerCase()
        loweredCase = true
    }
  }
}

Buffer.prototype.toString = function toString () {
  var length = this.length | 0
  if (length === 0) return ''
  if (arguments.length === 0) return utf8Slice(this, 0, length)
  return slowToString.apply(this, arguments)
}

Buffer.prototype.equals = function equals (b) {
  if (!Buffer.isBuffer(b)) throw new TypeError('Argument must be a Buffer')
  if (this === b) return true
  return Buffer.compare(this, b) === 0
}

Buffer.prototype.inspect = function inspect () {
  var str = ''
  var max = exports.INSPECT_MAX_BYTES
  if (this.length > 0) {
    str = this.toString('hex', 0, max).match(/.{2}/g).join(' ')
    if (this.length > max) str += ' ... '
  }
  return '<Buffer ' + str + '>'
}

Buffer.prototype.compare = function compare (b) {
  if (!Buffer.isBuffer(b)) throw new TypeError('Argument must be a Buffer')
  if (this === b) return 0
  return Buffer.compare(this, b)
}

Buffer.prototype.indexOf = function indexOf (val, byteOffset) {
  if (byteOffset > 0x7fffffff) byteOffset = 0x7fffffff
  else if (byteOffset < -0x80000000) byteOffset = -0x80000000
  byteOffset >>= 0

  if (this.length === 0) return -1
  if (byteOffset >= this.length) return -1

  // Negative offsets start from the end of the buffer
  if (byteOffset < 0) byteOffset = Math.max(this.length + byteOffset, 0)

  if (typeof val === 'string') {
    if (val.length === 0) return -1 // special case: looking for empty string always fails
    return String.prototype.indexOf.call(this, val, byteOffset)
  }
  if (Buffer.isBuffer(val)) {
    return arrayIndexOf(this, val, byteOffset)
  }
  if (typeof val === 'number') {
    if (Buffer.TYPED_ARRAY_SUPPORT && Uint8Array.prototype.indexOf === 'function') {
      return Uint8Array.prototype.indexOf.call(this, val, byteOffset)
    }
    return arrayIndexOf(this, [ val ], byteOffset)
  }

  function arrayIndexOf (arr, val, byteOffset) {
    var foundIndex = -1
    for (var i = 0; byteOffset + i < arr.length; i++) {
      if (arr[byteOffset + i] === val[foundIndex === -1 ? 0 : i - foundIndex]) {
        if (foundIndex === -1) foundIndex = i
        if (i - foundIndex + 1 === val.length) return byteOffset + foundIndex
      } else {
        foundIndex = -1
      }
    }
    return -1
  }

  throw new TypeError('val must be string, number or Buffer')
}

// `get` is deprecated
Buffer.prototype.get = function get (offset) {
  console.log('.get() is deprecated. Access using array indexes instead.')
  return this.readUInt8(offset)
}

// `set` is deprecated
Buffer.prototype.set = function set (v, offset) {
  console.log('.set() is deprecated. Access using array indexes instead.')
  return this.writeUInt8(v, offset)
}

function hexWrite (buf, string, offset, length) {
  offset = Number(offset) || 0
  var remaining = buf.length - offset
  if (!length) {
    length = remaining
  } else {
    length = Number(length)
    if (length > remaining) {
      length = remaining
    }
  }

  // must be an even number of digits
  var strLen = string.length
  if (strLen % 2 !== 0) throw new Error('Invalid hex string')

  if (length > strLen / 2) {
    length = strLen / 2
  }
  for (var i = 0; i < length; i++) {
    var parsed = parseInt(string.substr(i * 2, 2), 16)
    if (isNaN(parsed)) throw new Error('Invalid hex string')
    buf[offset + i] = parsed
  }
  return i
}

function utf8Write (buf, string, offset, length) {
  return blitBuffer(utf8ToBytes(string, buf.length - offset), buf, offset, length)
}

function asciiWrite (buf, string, offset, length) {
  return blitBuffer(asciiToBytes(string), buf, offset, length)
}

function binaryWrite (buf, string, offset, length) {
  return asciiWrite(buf, string, offset, length)
}

function base64Write (buf, string, offset, length) {
  return blitBuffer(base64ToBytes(string), buf, offset, length)
}

function ucs2Write (buf, string, offset, length) {
  return blitBuffer(utf16leToBytes(string, buf.length - offset), buf, offset, length)
}

Buffer.prototype.write = function write (string, offset, length, encoding) {
  // Buffer#write(string)
  if (offset === undefined) {
    encoding = 'utf8'
    length = this.length
    offset = 0
  // Buffer#write(string, encoding)
  } else if (length === undefined && typeof offset === 'string') {
    encoding = offset
    length = this.length
    offset = 0
  // Buffer#write(string, offset[, length][, encoding])
  } else if (isFinite(offset)) {
    offset = offset | 0
    if (isFinite(length)) {
      length = length | 0
      if (encoding === undefined) encoding = 'utf8'
    } else {
      encoding = length
      length = undefined
    }
  // legacy write(string, encoding, offset, length) - remove in v0.13
  } else {
    var swap = encoding
    encoding = offset
    offset = length | 0
    length = swap
  }

  var remaining = this.length - offset
  if (length === undefined || length > remaining) length = remaining

  if ((string.length > 0 && (length < 0 || offset < 0)) || offset > this.length) {
    throw new RangeError('attempt to write outside buffer bounds')
  }

  if (!encoding) encoding = 'utf8'

  var loweredCase = false
  for (;;) {
    switch (encoding) {
      case 'hex':
        return hexWrite(this, string, offset, length)

      case 'utf8':
      case 'utf-8':
        return utf8Write(this, string, offset, length)

      case 'ascii':
        return asciiWrite(this, string, offset, length)

      case 'binary':
        return binaryWrite(this, string, offset, length)

      case 'base64':
        // Warning: maxLength not taken into account in base64Write
        return base64Write(this, string, offset, length)

      case 'ucs2':
      case 'ucs-2':
      case 'utf16le':
      case 'utf-16le':
        return ucs2Write(this, string, offset, length)

      default:
        if (loweredCase) throw new TypeError('Unknown encoding: ' + encoding)
        encoding = ('' + encoding).toLowerCase()
        loweredCase = true
    }
  }
}

Buffer.prototype.toJSON = function toJSON () {
  return {
    type: 'Buffer',
    data: Array.prototype.slice.call(this._arr || this, 0)
  }
}

function base64Slice (buf, start, end) {
  if (start === 0 && end === buf.length) {
    return base64.fromByteArray(buf)
  } else {
    return base64.fromByteArray(buf.slice(start, end))
  }
}

function utf8Slice (buf, start, end) {
  end = Math.min(buf.length, end)
  var res = []

  var i = start
  while (i < end) {
    var firstByte = buf[i]
    var codePoint = null
    var bytesPerSequence = (firstByte > 0xEF) ? 4
      : (firstByte > 0xDF) ? 3
      : (firstByte > 0xBF) ? 2
      : 1

    if (i + bytesPerSequence <= end) {
      var secondByte, thirdByte, fourthByte, tempCodePoint

      switch (bytesPerSequence) {
        case 1:
          if (firstByte < 0x80) {
            codePoint = firstByte
          }
          break
        case 2:
          secondByte = buf[i + 1]
          if ((secondByte & 0xC0) === 0x80) {
            tempCodePoint = (firstByte & 0x1F) << 0x6 | (secondByte & 0x3F)
            if (tempCodePoint > 0x7F) {
              codePoint = tempCodePoint
            }
          }
          break
        case 3:
          secondByte = buf[i + 1]
          thirdByte = buf[i + 2]
          if ((secondByte & 0xC0) === 0x80 && (thirdByte & 0xC0) === 0x80) {
            tempCodePoint = (firstByte & 0xF) << 0xC | (secondByte & 0x3F) << 0x6 | (thirdByte & 0x3F)
            if (tempCodePoint > 0x7FF && (tempCodePoint < 0xD800 || tempCodePoint > 0xDFFF)) {
              codePoint = tempCodePoint
            }
          }
          break
        case 4:
          secondByte = buf[i + 1]
          thirdByte = buf[i + 2]
          fourthByte = buf[i + 3]
          if ((secondByte & 0xC0) === 0x80 && (thirdByte & 0xC0) === 0x80 && (fourthByte & 0xC0) === 0x80) {
            tempCodePoint = (firstByte & 0xF) << 0x12 | (secondByte & 0x3F) << 0xC | (thirdByte & 0x3F) << 0x6 | (fourthByte & 0x3F)
            if (tempCodePoint > 0xFFFF && tempCodePoint < 0x110000) {
              codePoint = tempCodePoint
            }
          }
      }
    }

    if (codePoint === null) {
      // we did not generate a valid codePoint so insert a
      // replacement char (U+FFFD) and advance only 1 byte
      codePoint = 0xFFFD
      bytesPerSequence = 1
    } else if (codePoint > 0xFFFF) {
      // encode to utf16 (surrogate pair dance)
      codePoint -= 0x10000
      res.push(codePoint >>> 10 & 0x3FF | 0xD800)
      codePoint = 0xDC00 | codePoint & 0x3FF
    }

    res.push(codePoint)
    i += bytesPerSequence
  }

  return decodeCodePointsArray(res)
}

// Based on http://stackoverflow.com/a/22747272/680742, the browser with
// the lowest limit is Chrome, with 0x10000 args.
// We go 1 magnitude less, for safety
var MAX_ARGUMENTS_LENGTH = 0x1000

function decodeCodePointsArray (codePoints) {
  var len = codePoints.length
  if (len <= MAX_ARGUMENTS_LENGTH) {
    return String.fromCharCode.apply(String, codePoints) // avoid extra slice()
  }

  // Decode in chunks to avoid "call stack size exceeded".
  var res = ''
  var i = 0
  while (i < len) {
    res += String.fromCharCode.apply(
      String,
      codePoints.slice(i, i += MAX_ARGUMENTS_LENGTH)
    )
  }
  return res
}

function asciiSlice (buf, start, end) {
  var ret = ''
  end = Math.min(buf.length, end)

  for (var i = start; i < end; i++) {
    ret += String.fromCharCode(buf[i] & 0x7F)
  }
  return ret
}

function binarySlice (buf, start, end) {
  var ret = ''
  end = Math.min(buf.length, end)

  for (var i = start; i < end; i++) {
    ret += String.fromCharCode(buf[i])
  }
  return ret
}

function hexSlice (buf, start, end) {
  var len = buf.length

  if (!start || start < 0) start = 0
  if (!end || end < 0 || end > len) end = len

  var out = ''
  for (var i = start; i < end; i++) {
    out += toHex(buf[i])
  }
  return out
}

function utf16leSlice (buf, start, end) {
  var bytes = buf.slice(start, end)
  var res = ''
  for (var i = 0; i < bytes.length; i += 2) {
    res += String.fromCharCode(bytes[i] + bytes[i + 1] * 256)
  }
  return res
}

Buffer.prototype.slice = function slice (start, end) {
  var len = this.length
  start = ~~start
  end = end === undefined ? len : ~~end

  if (start < 0) {
    start += len
    if (start < 0) start = 0
  } else if (start > len) {
    start = len
  }

  if (end < 0) {
    end += len
    if (end < 0) end = 0
  } else if (end > len) {
    end = len
  }

  if (end < start) end = start

  var newBuf
  if (Buffer.TYPED_ARRAY_SUPPORT) {
    newBuf = Buffer._augment(this.subarray(start, end))
  } else {
    var sliceLen = end - start
    newBuf = new Buffer(sliceLen, undefined)
    for (var i = 0; i < sliceLen; i++) {
      newBuf[i] = this[i + start]
    }
  }

  if (newBuf.length) newBuf.parent = this.parent || this

  return newBuf
}

/*
 * Need to make sure that buffer isn't trying to write out of bounds.
 */
function checkOffset (offset, ext, length) {
  if ((offset % 1) !== 0 || offset < 0) throw new RangeError('offset is not uint')
  if (offset + ext > length) throw new RangeError('Trying to access beyond buffer length')
}

Buffer.prototype.readUIntLE = function readUIntLE (offset, byteLength, noAssert) {
  offset = offset | 0
  byteLength = byteLength | 0
  if (!noAssert) checkOffset(offset, byteLength, this.length)

  var val = this[offset]
  var mul = 1
  var i = 0
  while (++i < byteLength && (mul *= 0x100)) {
    val += this[offset + i] * mul
  }

  return val
}

Buffer.prototype.readUIntBE = function readUIntBE (offset, byteLength, noAssert) {
  offset = offset | 0
  byteLength = byteLength | 0
  if (!noAssert) {
    checkOffset(offset, byteLength, this.length)
  }

  var val = this[offset + --byteLength]
  var mul = 1
  while (byteLength > 0 && (mul *= 0x100)) {
    val += this[offset + --byteLength] * mul
  }

  return val
}

Buffer.prototype.readUInt8 = function readUInt8 (offset, noAssert) {
  if (!noAssert) checkOffset(offset, 1, this.length)
  return this[offset]
}

Buffer.prototype.readUInt16LE = function readUInt16LE (offset, noAssert) {
  if (!noAssert) checkOffset(offset, 2, this.length)
  return this[offset] | (this[offset + 1] << 8)
}

Buffer.prototype.readUInt16BE = function readUInt16BE (offset, noAssert) {
  if (!noAssert) checkOffset(offset, 2, this.length)
  return (this[offset] << 8) | this[offset + 1]
}

Buffer.prototype.readUInt32LE = function readUInt32LE (offset, noAssert) {
  if (!noAssert) checkOffset(offset, 4, this.length)

  return ((this[offset]) |
      (this[offset + 1] << 8) |
      (this[offset + 2] << 16)) +
      (this[offset + 3] * 0x1000000)
}

Buffer.prototype.readUInt32BE = function readUInt32BE (offset, noAssert) {
  if (!noAssert) checkOffset(offset, 4, this.length)

  return (this[offset] * 0x1000000) +
    ((this[offset + 1] << 16) |
    (this[offset + 2] << 8) |
    this[offset + 3])
}

Buffer.prototype.readIntLE = function readIntLE (offset, byteLength, noAssert) {
  offset = offset | 0
  byteLength = byteLength | 0
  if (!noAssert) checkOffset(offset, byteLength, this.length)

  var val = this[offset]
  var mul = 1
  var i = 0
  while (++i < byteLength && (mul *= 0x100)) {
    val += this[offset + i] * mul
  }
  mul *= 0x80

  if (val >= mul) val -= Math.pow(2, 8 * byteLength)

  return val
}

Buffer.prototype.readIntBE = function readIntBE (offset, byteLength, noAssert) {
  offset = offset | 0
  byteLength = byteLength | 0
  if (!noAssert) checkOffset(offset, byteLength, this.length)

  var i = byteLength
  var mul = 1
  var val = this[offset + --i]
  while (i > 0 && (mul *= 0x100)) {
    val += this[offset + --i] * mul
  }
  mul *= 0x80

  if (val >= mul) val -= Math.pow(2, 8 * byteLength)

  return val
}

Buffer.prototype.readInt8 = function readInt8 (offset, noAssert) {
  if (!noAssert) checkOffset(offset, 1, this.length)
  if (!(this[offset] & 0x80)) return (this[offset])
  return ((0xff - this[offset] + 1) * -1)
}

Buffer.prototype.readInt16LE = function readInt16LE (offset, noAssert) {
  if (!noAssert) checkOffset(offset, 2, this.length)
  var val = this[offset] | (this[offset + 1] << 8)
  return (val & 0x8000) ? val | 0xFFFF0000 : val
}

Buffer.prototype.readInt16BE = function readInt16BE (offset, noAssert) {
  if (!noAssert) checkOffset(offset, 2, this.length)
  var val = this[offset + 1] | (this[offset] << 8)
  return (val & 0x8000) ? val | 0xFFFF0000 : val
}

Buffer.prototype.readInt32LE = function readInt32LE (offset, noAssert) {
  if (!noAssert) checkOffset(offset, 4, this.length)

  return (this[offset]) |
    (this[offset + 1] << 8) |
    (this[offset + 2] << 16) |
    (this[offset + 3] << 24)
}

Buffer.prototype.readInt32BE = function readInt32BE (offset, noAssert) {
  if (!noAssert) checkOffset(offset, 4, this.length)

  return (this[offset] << 24) |
    (this[offset + 1] << 16) |
    (this[offset + 2] << 8) |
    (this[offset + 3])
}

Buffer.prototype.readFloatLE = function readFloatLE (offset, noAssert) {
  if (!noAssert) checkOffset(offset, 4, this.length)
  return ieee754.read(this, offset, true, 23, 4)
}

Buffer.prototype.readFloatBE = function readFloatBE (offset, noAssert) {
  if (!noAssert) checkOffset(offset, 4, this.length)
  return ieee754.read(this, offset, false, 23, 4)
}

Buffer.prototype.readDoubleLE = function readDoubleLE (offset, noAssert) {
  if (!noAssert) checkOffset(offset, 8, this.length)
  return ieee754.read(this, offset, true, 52, 8)
}

Buffer.prototype.readDoubleBE = function readDoubleBE (offset, noAssert) {
  if (!noAssert) checkOffset(offset, 8, this.length)
  return ieee754.read(this, offset, false, 52, 8)
}

function checkInt (buf, value, offset, ext, max, min) {
  if (!Buffer.isBuffer(buf)) throw new TypeError('buffer must be a Buffer instance')
  if (value > max || value < min) throw new RangeError('value is out of bounds')
  if (offset + ext > buf.length) throw new RangeError('index out of range')
}

Buffer.prototype.writeUIntLE = function writeUIntLE (value, offset, byteLength, noAssert) {
  value = +value
  offset = offset | 0
  byteLength = byteLength | 0
  if (!noAssert) checkInt(this, value, offset, byteLength, Math.pow(2, 8 * byteLength), 0)

  var mul = 1
  var i = 0
  this[offset] = value & 0xFF
  while (++i < byteLength && (mul *= 0x100)) {
    this[offset + i] = (value / mul) & 0xFF
  }

  return offset + byteLength
}

Buffer.prototype.writeUIntBE = function writeUIntBE (value, offset, byteLength, noAssert) {
  value = +value
  offset = offset | 0
  byteLength = byteLength | 0
  if (!noAssert) checkInt(this, value, offset, byteLength, Math.pow(2, 8 * byteLength), 0)

  var i = byteLength - 1
  var mul = 1
  this[offset + i] = value & 0xFF
  while (--i >= 0 && (mul *= 0x100)) {
    this[offset + i] = (value / mul) & 0xFF
  }

  return offset + byteLength
}

Buffer.prototype.writeUInt8 = function writeUInt8 (value, offset, noAssert) {
  value = +value
  offset = offset | 0
  if (!noAssert) checkInt(this, value, offset, 1, 0xff, 0)
  if (!Buffer.TYPED_ARRAY_SUPPORT) value = Math.floor(value)
  this[offset] = (value & 0xff)
  return offset + 1
}

function objectWriteUInt16 (buf, value, offset, littleEndian) {
  if (value < 0) value = 0xffff + value + 1
  for (var i = 0, j = Math.min(buf.length - offset, 2); i < j; i++) {
    buf[offset + i] = (value & (0xff << (8 * (littleEndian ? i : 1 - i)))) >>>
      (littleEndian ? i : 1 - i) * 8
  }
}

Buffer.prototype.writeUInt16LE = function writeUInt16LE (value, offset, noAssert) {
  value = +value
  offset = offset | 0
  if (!noAssert) checkInt(this, value, offset, 2, 0xffff, 0)
  if (Buffer.TYPED_ARRAY_SUPPORT) {
    this[offset] = (value & 0xff)
    this[offset + 1] = (value >>> 8)
  } else {
    objectWriteUInt16(this, value, offset, true)
  }
  return offset + 2
}

Buffer.prototype.writeUInt16BE = function writeUInt16BE (value, offset, noAssert) {
  value = +value
  offset = offset | 0
  if (!noAssert) checkInt(this, value, offset, 2, 0xffff, 0)
  if (Buffer.TYPED_ARRAY_SUPPORT) {
    this[offset] = (value >>> 8)
    this[offset + 1] = (value & 0xff)
  } else {
    objectWriteUInt16(this, value, offset, false)
  }
  return offset + 2
}

function objectWriteUInt32 (buf, value, offset, littleEndian) {
  if (value < 0) value = 0xffffffff + value + 1
  for (var i = 0, j = Math.min(buf.length - offset, 4); i < j; i++) {
    buf[offset + i] = (value >>> (littleEndian ? i : 3 - i) * 8) & 0xff
  }
}

Buffer.prototype.writeUInt32LE = function writeUInt32LE (value, offset, noAssert) {
  value = +value
  offset = offset | 0
  if (!noAssert) checkInt(this, value, offset, 4, 0xffffffff, 0)
  if (Buffer.TYPED_ARRAY_SUPPORT) {
    this[offset + 3] = (value >>> 24)
    this[offset + 2] = (value >>> 16)
    this[offset + 1] = (value >>> 8)
    this[offset] = (value & 0xff)
  } else {
    objectWriteUInt32(this, value, offset, true)
  }
  return offset + 4
}

Buffer.prototype.writeUInt32BE = function writeUInt32BE (value, offset, noAssert) {
  value = +value
  offset = offset | 0
  if (!noAssert) checkInt(this, value, offset, 4, 0xffffffff, 0)
  if (Buffer.TYPED_ARRAY_SUPPORT) {
    this[offset] = (value >>> 24)
    this[offset + 1] = (value >>> 16)
    this[offset + 2] = (value >>> 8)
    this[offset + 3] = (value & 0xff)
  } else {
    objectWriteUInt32(this, value, offset, false)
  }
  return offset + 4
}

Buffer.prototype.writeIntLE = function writeIntLE (value, offset, byteLength, noAssert) {
  value = +value
  offset = offset | 0
  if (!noAssert) {
    var limit = Math.pow(2, 8 * byteLength - 1)

    checkInt(this, value, offset, byteLength, limit - 1, -limit)
  }

  var i = 0
  var mul = 1
  var sub = value < 0 ? 1 : 0
  this[offset] = value & 0xFF
  while (++i < byteLength && (mul *= 0x100)) {
    this[offset + i] = ((value / mul) >> 0) - sub & 0xFF
  }

  return offset + byteLength
}

Buffer.prototype.writeIntBE = function writeIntBE (value, offset, byteLength, noAssert) {
  value = +value
  offset = offset | 0
  if (!noAssert) {
    var limit = Math.pow(2, 8 * byteLength - 1)

    checkInt(this, value, offset, byteLength, limit - 1, -limit)
  }

  var i = byteLength - 1
  var mul = 1
  var sub = value < 0 ? 1 : 0
  this[offset + i] = value & 0xFF
  while (--i >= 0 && (mul *= 0x100)) {
    this[offset + i] = ((value / mul) >> 0) - sub & 0xFF
  }

  return offset + byteLength
}

Buffer.prototype.writeInt8 = function writeInt8 (value, offset, noAssert) {
  value = +value
  offset = offset | 0
  if (!noAssert) checkInt(this, value, offset, 1, 0x7f, -0x80)
  if (!Buffer.TYPED_ARRAY_SUPPORT) value = Math.floor(value)
  if (value < 0) value = 0xff + value + 1
  this[offset] = (value & 0xff)
  return offset + 1
}

Buffer.prototype.writeInt16LE = function writeInt16LE (value, offset, noAssert) {
  value = +value
  offset = offset | 0
  if (!noAssert) checkInt(this, value, offset, 2, 0x7fff, -0x8000)
  if (Buffer.TYPED_ARRAY_SUPPORT) {
    this[offset] = (value & 0xff)
    this[offset + 1] = (value >>> 8)
  } else {
    objectWriteUInt16(this, value, offset, true)
  }
  return offset + 2
}

Buffer.prototype.writeInt16BE = function writeInt16BE (value, offset, noAssert) {
  value = +value
  offset = offset | 0
  if (!noAssert) checkInt(this, value, offset, 2, 0x7fff, -0x8000)
  if (Buffer.TYPED_ARRAY_SUPPORT) {
    this[offset] = (value >>> 8)
    this[offset + 1] = (value & 0xff)
  } else {
    objectWriteUInt16(this, value, offset, false)
  }
  return offset + 2
}

Buffer.prototype.writeInt32LE = function writeInt32LE (value, offset, noAssert) {
  value = +value
  offset = offset | 0
  if (!noAssert) checkInt(this, value, offset, 4, 0x7fffffff, -0x80000000)
  if (Buffer.TYPED_ARRAY_SUPPORT) {
    this[offset] = (value & 0xff)
    this[offset + 1] = (value >>> 8)
    this[offset + 2] = (value >>> 16)
    this[offset + 3] = (value >>> 24)
  } else {
    objectWriteUInt32(this, value, offset, true)
  }
  return offset + 4
}

Buffer.prototype.writeInt32BE = function writeInt32BE (value, offset, noAssert) {
  value = +value
  offset = offset | 0
  if (!noAssert) checkInt(this, value, offset, 4, 0x7fffffff, -0x80000000)
  if (value < 0) value = 0xffffffff + value + 1
  if (Buffer.TYPED_ARRAY_SUPPORT) {
    this[offset] = (value >>> 24)
    this[offset + 1] = (value >>> 16)
    this[offset + 2] = (value >>> 8)
    this[offset + 3] = (value & 0xff)
  } else {
    objectWriteUInt32(this, value, offset, false)
  }
  return offset + 4
}

function checkIEEE754 (buf, value, offset, ext, max, min) {
  if (value > max || value < min) throw new RangeError('value is out of bounds')
  if (offset + ext > buf.length) throw new RangeError('index out of range')
  if (offset < 0) throw new RangeError('index out of range')
}

function writeFloat (buf, value, offset, littleEndian, noAssert) {
  if (!noAssert) {
    checkIEEE754(buf, value, offset, 4, 3.4028234663852886e+38, -3.4028234663852886e+38)
  }
  ieee754.write(buf, value, offset, littleEndian, 23, 4)
  return offset + 4
}

Buffer.prototype.writeFloatLE = function writeFloatLE (value, offset, noAssert) {
  return writeFloat(this, value, offset, true, noAssert)
}

Buffer.prototype.writeFloatBE = function writeFloatBE (value, offset, noAssert) {
  return writeFloat(this, value, offset, false, noAssert)
}

function writeDouble (buf, value, offset, littleEndian, noAssert) {
  if (!noAssert) {
    checkIEEE754(buf, value, offset, 8, 1.7976931348623157E+308, -1.7976931348623157E+308)
  }
  ieee754.write(buf, value, offset, littleEndian, 52, 8)
  return offset + 8
}

Buffer.prototype.writeDoubleLE = function writeDoubleLE (value, offset, noAssert) {
  return writeDouble(this, value, offset, true, noAssert)
}

Buffer.prototype.writeDoubleBE = function writeDoubleBE (value, offset, noAssert) {
  return writeDouble(this, value, offset, false, noAssert)
}

// copy(targetBuffer, targetStart=0, sourceStart=0, sourceEnd=buffer.length)
Buffer.prototype.copy = function copy (target, targetStart, start, end) {
  if (!start) start = 0
  if (!end && end !== 0) end = this.length
  if (targetStart >= target.length) targetStart = target.length
  if (!targetStart) targetStart = 0
  if (end > 0 && end < start) end = start

  // Copy 0 bytes; we're done
  if (end === start) return 0
  if (target.length === 0 || this.length === 0) return 0

  // Fatal error conditions
  if (targetStart < 0) {
    throw new RangeError('targetStart out of bounds')
  }
  if (start < 0 || start >= this.length) throw new RangeError('sourceStart out of bounds')
  if (end < 0) throw new RangeError('sourceEnd out of bounds')

  // Are we oob?
  if (end > this.length) end = this.length
  if (target.length - targetStart < end - start) {
    end = target.length - targetStart + start
  }

  var len = end - start
  var i

  if (this === target && start < targetStart && targetStart < end) {
    // descending copy from end
    for (i = len - 1; i >= 0; i--) {
      target[i + targetStart] = this[i + start]
    }
  } else if (len < 1000 || !Buffer.TYPED_ARRAY_SUPPORT) {
    // ascending copy from start
    for (i = 0; i < len; i++) {
      target[i + targetStart] = this[i + start]
    }
  } else {
    target._set(this.subarray(start, start + len), targetStart)
  }

  return len
}

// fill(value, start=0, end=buffer.length)
Buffer.prototype.fill = function fill (value, start, end) {
  if (!value) value = 0
  if (!start) start = 0
  if (!end) end = this.length

  if (end < start) throw new RangeError('end < start')

  // Fill 0 bytes; we're done
  if (end === start) return
  if (this.length === 0) return

  if (start < 0 || start >= this.length) throw new RangeError('start out of bounds')
  if (end < 0 || end > this.length) throw new RangeError('end out of bounds')

  var i
  if (typeof value === 'number') {
    for (i = start; i < end; i++) {
      this[i] = value
    }
  } else {
    var bytes = utf8ToBytes(value.toString())
    var len = bytes.length
    for (i = start; i < end; i++) {
      this[i] = bytes[i % len]
    }
  }

  return this
}

/**
 * Creates a new `ArrayBuffer` with the *copied* memory of the buffer instance.
 * Added in Node 0.12. Only available in browsers that support ArrayBuffer.
 */
Buffer.prototype.toArrayBuffer = function toArrayBuffer () {
  if (typeof Uint8Array !== 'undefined') {
    if (Buffer.TYPED_ARRAY_SUPPORT) {
      return (new Buffer(this)).buffer
    } else {
      var buf = new Uint8Array(this.length)
      for (var i = 0, len = buf.length; i < len; i += 1) {
        buf[i] = this[i]
      }
      return buf.buffer
    }
  } else {
    throw new TypeError('Buffer.toArrayBuffer not supported in this browser')
  }
}

// HELPER FUNCTIONS
// ================

var BP = Buffer.prototype

/**
 * Augment a Uint8Array *instance* (not the Uint8Array class!) with Buffer methods
 */
Buffer._augment = function _augment (arr) {
  arr.constructor = Buffer
  arr._isBuffer = true

  // save reference to original Uint8Array set method before overwriting
  arr._set = arr.set

  // deprecated
  arr.get = BP.get
  arr.set = BP.set

  arr.write = BP.write
  arr.toString = BP.toString
  arr.toLocaleString = BP.toString
  arr.toJSON = BP.toJSON
  arr.equals = BP.equals
  arr.compare = BP.compare
  arr.indexOf = BP.indexOf
  arr.copy = BP.copy
  arr.slice = BP.slice
  arr.readUIntLE = BP.readUIntLE
  arr.readUIntBE = BP.readUIntBE
  arr.readUInt8 = BP.readUInt8
  arr.readUInt16LE = BP.readUInt16LE
  arr.readUInt16BE = BP.readUInt16BE
  arr.readUInt32LE = BP.readUInt32LE
  arr.readUInt32BE = BP.readUInt32BE
  arr.readIntLE = BP.readIntLE
  arr.readIntBE = BP.readIntBE
  arr.readInt8 = BP.readInt8
  arr.readInt16LE = BP.readInt16LE
  arr.readInt16BE = BP.readInt16BE
  arr.readInt32LE = BP.readInt32LE
  arr.readInt32BE = BP.readInt32BE
  arr.readFloatLE = BP.readFloatLE
  arr.readFloatBE = BP.readFloatBE
  arr.readDoubleLE = BP.readDoubleLE
  arr.readDoubleBE = BP.readDoubleBE
  arr.writeUInt8 = BP.writeUInt8
  arr.writeUIntLE = BP.writeUIntLE
  arr.writeUIntBE = BP.writeUIntBE
  arr.writeUInt16LE = BP.writeUInt16LE
  arr.writeUInt16BE = BP.writeUInt16BE
  arr.writeUInt32LE = BP.writeUInt32LE
  arr.writeUInt32BE = BP.writeUInt32BE
  arr.writeIntLE = BP.writeIntLE
  arr.writeIntBE = BP.writeIntBE
  arr.writeInt8 = BP.writeInt8
  arr.writeInt16LE = BP.writeInt16LE
  arr.writeInt16BE = BP.writeInt16BE
  arr.writeInt32LE = BP.writeInt32LE
  arr.writeInt32BE = BP.writeInt32BE
  arr.writeFloatLE = BP.writeFloatLE
  arr.writeFloatBE = BP.writeFloatBE
  arr.writeDoubleLE = BP.writeDoubleLE
  arr.writeDoubleBE = BP.writeDoubleBE
  arr.fill = BP.fill
  arr.inspect = BP.inspect
  arr.toArrayBuffer = BP.toArrayBuffer

  return arr
}

var INVALID_BASE64_RE = /[^+\/0-9A-Za-z-_]/g

function base64clean (str) {
  // Node strips out invalid characters like \n and \t from the string, base64-js does not
  str = stringtrim(str).replace(INVALID_BASE64_RE, '')
  // Node converts strings with length < 2 to ''
  if (str.length < 2) return ''
  // Node allows for non-padded base64 strings (missing trailing ===), base64-js does not
  while (str.length % 4 !== 0) {
    str = str + '='
  }
  return str
}

function stringtrim (str) {
  if (str.trim) return str.trim()
  return str.replace(/^\s+|\s+$/g, '')
}

function toHex (n) {
  if (n < 16) return '0' + n.toString(16)
  return n.toString(16)
}

function utf8ToBytes (string, units) {
  units = units || Infinity
  var codePoint
  var length = string.length
  var leadSurrogate = null
  var bytes = []

  for (var i = 0; i < length; i++) {
    codePoint = string.charCodeAt(i)

    // is surrogate component
    if (codePoint > 0xD7FF && codePoint < 0xE000) {
      // last char was a lead
      if (!leadSurrogate) {
        // no lead yet
        if (codePoint > 0xDBFF) {
          // unexpected trail
          if ((units -= 3) > -1) bytes.push(0xEF, 0xBF, 0xBD)
          continue
        } else if (i + 1 === length) {
          // unpaired lead
          if ((units -= 3) > -1) bytes.push(0xEF, 0xBF, 0xBD)
          continue
        }

        // valid lead
        leadSurrogate = codePoint

        continue
      }

      // 2 leads in a row
      if (codePoint < 0xDC00) {
        if ((units -= 3) > -1) bytes.push(0xEF, 0xBF, 0xBD)
        leadSurrogate = codePoint
        continue
      }

      // valid surrogate pair
      codePoint = (leadSurrogate - 0xD800 << 10 | codePoint - 0xDC00) + 0x10000
    } else if (leadSurrogate) {
      // valid bmp char, but last char was a lead
      if ((units -= 3) > -1) bytes.push(0xEF, 0xBF, 0xBD)
    }

    leadSurrogate = null

    // encode utf8
    if (codePoint < 0x80) {
      if ((units -= 1) < 0) break
      bytes.push(codePoint)
    } else if (codePoint < 0x800) {
      if ((units -= 2) < 0) break
      bytes.push(
        codePoint >> 0x6 | 0xC0,
        codePoint & 0x3F | 0x80
      )
    } else if (codePoint < 0x10000) {
      if ((units -= 3) < 0) break
      bytes.push(
        codePoint >> 0xC | 0xE0,
        codePoint >> 0x6 & 0x3F | 0x80,
        codePoint & 0x3F | 0x80
      )
    } else if (codePoint < 0x110000) {
      if ((units -= 4) < 0) break
      bytes.push(
        codePoint >> 0x12 | 0xF0,
        codePoint >> 0xC & 0x3F | 0x80,
        codePoint >> 0x6 & 0x3F | 0x80,
        codePoint & 0x3F | 0x80
      )
    } else {
      throw new Error('Invalid code point')
    }
  }

  return bytes
}

function asciiToBytes (str) {
  var byteArray = []
  for (var i = 0; i < str.length; i++) {
    // Node's code seems to be doing this and not & 0x7F..
    byteArray.push(str.charCodeAt(i) & 0xFF)
  }
  return byteArray
}

function utf16leToBytes (str, units) {
  var c, hi, lo
  var byteArray = []
  for (var i = 0; i < str.length; i++) {
    if ((units -= 2) < 0) break

    c = str.charCodeAt(i)
    hi = c >> 8
    lo = c % 256
    byteArray.push(lo)
    byteArray.push(hi)
  }

  return byteArray
}

function base64ToBytes (str) {
  return base64.toByteArray(base64clean(str))
}

function blitBuffer (src, dst, offset, length) {
  for (var i = 0; i < length; i++) {
    if ((i + offset >= dst.length) || (i >= src.length)) break
    dst[i + offset] = src[i]
  }
  return i
}

}).call(this,typeof global !== "undefined" ? global : typeof self !== "undefined" ? self : typeof window !== "undefined" ? window : {})

},{"base64-js":"/Users/jrmerz/dev/cstars/AHB/farm-budgets-app/node_modules/base64-js/lib/b64.js","ieee754":"/Users/jrmerz/dev/cstars/AHB/farm-budgets-app/node_modules/ieee754/index.js","isarray":"/Users/jrmerz/dev/cstars/AHB/farm-budgets-app/node_modules/buffer/node_modules/isarray/index.js"}],"/Users/jrmerz/dev/cstars/AHB/farm-budgets-app/node_modules/buffer/node_modules/isarray/index.js":[function(require,module,exports){
var toString = {}.toString;

module.exports = Array.isArray || function (arr) {
  return toString.call(arr) == '[object Array]';
};

},{}],"/Users/jrmerz/dev/cstars/AHB/farm-budgets-app/node_modules/cipher-base/index.js":[function(require,module,exports){
(function (Buffer){
var Transform = require('stream').Transform
var inherits = require('inherits')
var StringDecoder = require('string_decoder').StringDecoder
module.exports = CipherBase
inherits(CipherBase, Transform)
function CipherBase (hashMode) {
  Transform.call(this)
  this.hashMode = typeof hashMode === 'string'
  if (this.hashMode) {
    this[hashMode] = this._finalOrDigest
  } else {
    this.final = this._finalOrDigest
  }
  this._decoder = null
  this._encoding = null
}
CipherBase.prototype.update = function (data, inputEnc, outputEnc) {
  if (typeof data === 'string') {
    data = new Buffer(data, inputEnc)
  }
  var outData = this._update(data)
  if (this.hashMode) {
    return this
  }
  if (outputEnc) {
    outData = this._toString(outData, outputEnc)
  }
  return outData
}

CipherBase.prototype.setAutoPadding = function () {}

CipherBase.prototype.getAuthTag = function () {
  throw new Error('trying to get auth tag in unsupported state')
}

CipherBase.prototype.setAuthTag = function () {
  throw new Error('trying to set auth tag in unsupported state')
}

CipherBase.prototype.setAAD = function () {
  throw new Error('trying to set aad in unsupported state')
}

CipherBase.prototype._transform = function (data, _, next) {
  var err
  try {
    if (this.hashMode) {
      this._update(data)
    } else {
      this.push(this._update(data))
    }
  } catch (e) {
    err = e
  } finally {
    next(err)
  }
}
CipherBase.prototype._flush = function (done) {
  var err
  try {
    this.push(this._final())
  } catch (e) {
    err = e
  } finally {
    done(err)
  }
}
CipherBase.prototype._finalOrDigest = function (outputEnc) {
  var outData = this._final() || new Buffer('')
  if (outputEnc) {
    outData = this._toString(outData, outputEnc, true)
  }
  return outData
}

CipherBase.prototype._toString = function (value, enc, final) {
  if (!this._decoder) {
    this._decoder = new StringDecoder(enc)
    this._encoding = enc
  }
  if (this._encoding !== enc) {
    throw new Error('can\'t switch encodings')
  }
  var out = this._decoder.write(value)
  if (final) {
    out += this._decoder.end()
  }
  return out
}

}).call(this,require("buffer").Buffer)

},{"buffer":"/Users/jrmerz/dev/cstars/AHB/farm-budgets-app/node_modules/buffer/index.js","inherits":"/Users/jrmerz/dev/cstars/AHB/farm-budgets-app/node_modules/inherits/inherits_browser.js","stream":"/Users/jrmerz/dev/cstars/AHB/farm-budgets-app/node_modules/stream-browserify/index.js","string_decoder":"/Users/jrmerz/dev/cstars/AHB/farm-budgets-app/node_modules/string_decoder/index.js"}],"/Users/jrmerz/dev/cstars/AHB/farm-budgets-app/node_modules/core-util-is/lib/util.js":[function(require,module,exports){
(function (Buffer){
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

// NOTE: These type checking functions intentionally don't use `instanceof`
// because it is fragile and can be easily faked with `Object.create()`.

function isArray(arg) {
  if (Array.isArray) {
    return Array.isArray(arg);
  }
  return objectToString(arg) === '[object Array]';
}
exports.isArray = isArray;

function isBoolean(arg) {
  return typeof arg === 'boolean';
}
exports.isBoolean = isBoolean;

function isNull(arg) {
  return arg === null;
}
exports.isNull = isNull;

function isNullOrUndefined(arg) {
  return arg == null;
}
exports.isNullOrUndefined = isNullOrUndefined;

function isNumber(arg) {
  return typeof arg === 'number';
}
exports.isNumber = isNumber;

function isString(arg) {
  return typeof arg === 'string';
}
exports.isString = isString;

function isSymbol(arg) {
  return typeof arg === 'symbol';
}
exports.isSymbol = isSymbol;

function isUndefined(arg) {
  return arg === void 0;
}
exports.isUndefined = isUndefined;

function isRegExp(re) {
  return objectToString(re) === '[object RegExp]';
}
exports.isRegExp = isRegExp;

function isObject(arg) {
  return typeof arg === 'object' && arg !== null;
}
exports.isObject = isObject;

function isDate(d) {
  return objectToString(d) === '[object Date]';
}
exports.isDate = isDate;

function isError(e) {
  return (objectToString(e) === '[object Error]' || e instanceof Error);
}
exports.isError = isError;

function isFunction(arg) {
  return typeof arg === 'function';
}
exports.isFunction = isFunction;

function isPrimitive(arg) {
  return arg === null ||
         typeof arg === 'boolean' ||
         typeof arg === 'number' ||
         typeof arg === 'string' ||
         typeof arg === 'symbol' ||  // ES6 symbol
         typeof arg === 'undefined';
}
exports.isPrimitive = isPrimitive;

exports.isBuffer = Buffer.isBuffer;

function objectToString(o) {
  return Object.prototype.toString.call(o);
}

}).call(this,{"isBuffer":require("../../is-buffer/index.js")})

},{"../../is-buffer/index.js":"/Users/jrmerz/dev/cstars/AHB/farm-budgets-app/node_modules/is-buffer/index.js"}],"/Users/jrmerz/dev/cstars/AHB/farm-budgets-app/node_modules/create-ecdh/browser.js":[function(require,module,exports){
(function (Buffer){
var elliptic = require('elliptic');
var BN = require('bn.js');

module.exports = function createECDH(curve) {
	return new ECDH(curve);
};

var aliases = {
	secp256k1: {
		name: 'secp256k1',
		byteLength: 32
	},
	secp224r1: {
		name: 'p224',
		byteLength: 28
	},
	prime256v1: {
		name: 'p256',
		byteLength: 32
	},
	prime192v1: {
		name: 'p192',
		byteLength: 24
	},
	ed25519: {
		name: 'ed25519',
		byteLength: 32
	},
	secp384r1: {
		name: 'p384',
		byteLength: 48
	},
	secp521r1: {
		name: 'p521',
		byteLength: 66
	}
};

aliases.p224 = aliases.secp224r1;
aliases.p256 = aliases.secp256r1 = aliases.prime256v1;
aliases.p192 = aliases.secp192r1 = aliases.prime192v1;
aliases.p384 = aliases.secp384r1;
aliases.p521 = aliases.secp521r1;

function ECDH(curve) {
	this.curveType = aliases[curve];
	if (!this.curveType ) {
		this.curveType = {
			name: curve
		};
	}
	this.curve = new elliptic.ec(this.curveType.name);
	this.keys = void 0;
}

ECDH.prototype.generateKeys = function (enc, format) {
	this.keys = this.curve.genKeyPair();
	return this.getPublicKey(enc, format);
};

ECDH.prototype.computeSecret = function (other, inenc, enc) {
	inenc = inenc || 'utf8';
	if (!Buffer.isBuffer(other)) {
		other = new Buffer(other, inenc);
	}
	var otherPub = this.curve.keyFromPublic(other).getPublic();
	var out = otherPub.mul(this.keys.getPrivate()).getX();
	return formatReturnValue(out, enc, this.curveType.byteLength);
};

ECDH.prototype.getPublicKey = function (enc, format) {
	var key = this.keys.getPublic(format === 'compressed', true);
	if (format === 'hybrid') {
		if (key[key.length - 1] % 2) {
			key[0] = 7;
		} else {
			key [0] = 6;
		}
	}
	return formatReturnValue(key, enc);
};

ECDH.prototype.getPrivateKey = function (enc) {
	return formatReturnValue(this.keys.getPrivate(), enc);
};

ECDH.prototype.setPublicKey = function (pub, enc) {
	enc = enc || 'utf8';
	if (!Buffer.isBuffer(pub)) {
		pub = new Buffer(pub, enc);
	}
	this.keys._importPublic(pub);
	return this;
};

ECDH.prototype.setPrivateKey = function (priv, enc) {
	enc = enc || 'utf8';
	if (!Buffer.isBuffer(priv)) {
		priv = new Buffer(priv, enc);
	}
	var _priv = new BN(priv);
	_priv = _priv.toString(16);
	this.keys._importPrivate(_priv);
	return this;
};

function formatReturnValue(bn, enc, len) {
	if (!Array.isArray(bn)) {
		bn = bn.toArray();
	}
	var buf = new Buffer(bn);
	if (len && buf.length < len) {
		var zeros = new Buffer(len - buf.length);
		zeros.fill(0);
		buf = Buffer.concat([zeros, buf]);
	}
	if (!enc) {
		return buf;
	} else {
		return buf.toString(enc);
	}
}

}).call(this,require("buffer").Buffer)

},{"bn.js":"/Users/jrmerz/dev/cstars/AHB/farm-budgets-app/node_modules/create-ecdh/node_modules/bn.js/lib/bn.js","buffer":"/Users/jrmerz/dev/cstars/AHB/farm-budgets-app/node_modules/buffer/index.js","elliptic":"/Users/jrmerz/dev/cstars/AHB/farm-budgets-app/node_modules/elliptic/lib/elliptic.js"}],"/Users/jrmerz/dev/cstars/AHB/farm-budgets-app/node_modules/create-ecdh/node_modules/bn.js/lib/bn.js":[function(require,module,exports){
arguments[4]["/Users/jrmerz/dev/cstars/AHB/farm-budgets-app/node_modules/browserify-rsa/node_modules/bn.js/lib/bn.js"][0].apply(exports,arguments)
},{}],"/Users/jrmerz/dev/cstars/AHB/farm-budgets-app/node_modules/create-hash/browser.js":[function(require,module,exports){
(function (Buffer){
'use strict';
var inherits = require('inherits')
var md5 = require('./md5')
var rmd160 = require('ripemd160')
var sha = require('sha.js')

var Base = require('cipher-base')

function HashNoConstructor(hash) {
  Base.call(this, 'digest')

  this._hash = hash
  this.buffers = []
}

inherits(HashNoConstructor, Base)

HashNoConstructor.prototype._update = function (data) {
  this.buffers.push(data)
}

HashNoConstructor.prototype._final = function () {
  var buf = Buffer.concat(this.buffers)
  var r = this._hash(buf)
  this.buffers = null

  return r
}

function Hash(hash) {
  Base.call(this, 'digest')

  this._hash = hash
}

inherits(Hash, Base)

Hash.prototype._update = function (data) {
  this._hash.update(data)
}

Hash.prototype._final = function () {
  return this._hash.digest()
}

module.exports = function createHash (alg) {
  alg = alg.toLowerCase()
  if ('md5' === alg) return new HashNoConstructor(md5)
  if ('rmd160' === alg || 'ripemd160' === alg) return new HashNoConstructor(rmd160)

  return new Hash(sha(alg))
}

}).call(this,require("buffer").Buffer)

},{"./md5":"/Users/jrmerz/dev/cstars/AHB/farm-budgets-app/node_modules/create-hash/md5.js","buffer":"/Users/jrmerz/dev/cstars/AHB/farm-budgets-app/node_modules/buffer/index.js","cipher-base":"/Users/jrmerz/dev/cstars/AHB/farm-budgets-app/node_modules/cipher-base/index.js","inherits":"/Users/jrmerz/dev/cstars/AHB/farm-budgets-app/node_modules/inherits/inherits_browser.js","ripemd160":"/Users/jrmerz/dev/cstars/AHB/farm-budgets-app/node_modules/ripemd160/lib/ripemd160.js","sha.js":"/Users/jrmerz/dev/cstars/AHB/farm-budgets-app/node_modules/sha.js/index.js"}],"/Users/jrmerz/dev/cstars/AHB/farm-budgets-app/node_modules/create-hash/helpers.js":[function(require,module,exports){
(function (Buffer){
'use strict';
var intSize = 4;
var zeroBuffer = new Buffer(intSize); zeroBuffer.fill(0);
var chrsz = 8;

function toArray(buf, bigEndian) {
  if ((buf.length % intSize) !== 0) {
    var len = buf.length + (intSize - (buf.length % intSize));
    buf = Buffer.concat([buf, zeroBuffer], len);
  }

  var arr = [];
  var fn = bigEndian ? buf.readInt32BE : buf.readInt32LE;
  for (var i = 0; i < buf.length; i += intSize) {
    arr.push(fn.call(buf, i));
  }
  return arr;
}

function toBuffer(arr, size, bigEndian) {
  var buf = new Buffer(size);
  var fn = bigEndian ? buf.writeInt32BE : buf.writeInt32LE;
  for (var i = 0; i < arr.length; i++) {
    fn.call(buf, arr[i], i * 4, true);
  }
  return buf;
}

function hash(buf, fn, hashSize, bigEndian) {
  if (!Buffer.isBuffer(buf)) buf = new Buffer(buf);
  var arr = fn(toArray(buf, bigEndian), buf.length * chrsz);
  return toBuffer(arr, hashSize, bigEndian);
}
exports.hash = hash;
}).call(this,require("buffer").Buffer)

},{"buffer":"/Users/jrmerz/dev/cstars/AHB/farm-budgets-app/node_modules/buffer/index.js"}],"/Users/jrmerz/dev/cstars/AHB/farm-budgets-app/node_modules/create-hash/md5.js":[function(require,module,exports){
'use strict';
/*
 * A JavaScript implementation of the RSA Data Security, Inc. MD5 Message
 * Digest Algorithm, as defined in RFC 1321.
 * Version 2.1 Copyright (C) Paul Johnston 1999 - 2002.
 * Other contributors: Greg Holt, Andrew Kepert, Ydnar, Lostinet
 * Distributed under the BSD License
 * See http://pajhome.org.uk/crypt/md5 for more info.
 */

var helpers = require('./helpers');

/*
 * Calculate the MD5 of an array of little-endian words, and a bit length
 */
function core_md5(x, len)
{
  /* append padding */
  x[len >> 5] |= 0x80 << ((len) % 32);
  x[(((len + 64) >>> 9) << 4) + 14] = len;

  var a =  1732584193;
  var b = -271733879;
  var c = -1732584194;
  var d =  271733878;

  for(var i = 0; i < x.length; i += 16)
  {
    var olda = a;
    var oldb = b;
    var oldc = c;
    var oldd = d;

    a = md5_ff(a, b, c, d, x[i+ 0], 7 , -680876936);
    d = md5_ff(d, a, b, c, x[i+ 1], 12, -389564586);
    c = md5_ff(c, d, a, b, x[i+ 2], 17,  606105819);
    b = md5_ff(b, c, d, a, x[i+ 3], 22, -1044525330);
    a = md5_ff(a, b, c, d, x[i+ 4], 7 , -176418897);
    d = md5_ff(d, a, b, c, x[i+ 5], 12,  1200080426);
    c = md5_ff(c, d, a, b, x[i+ 6], 17, -1473231341);
    b = md5_ff(b, c, d, a, x[i+ 7], 22, -45705983);
    a = md5_ff(a, b, c, d, x[i+ 8], 7 ,  1770035416);
    d = md5_ff(d, a, b, c, x[i+ 9], 12, -1958414417);
    c = md5_ff(c, d, a, b, x[i+10], 17, -42063);
    b = md5_ff(b, c, d, a, x[i+11], 22, -1990404162);
    a = md5_ff(a, b, c, d, x[i+12], 7 ,  1804603682);
    d = md5_ff(d, a, b, c, x[i+13], 12, -40341101);
    c = md5_ff(c, d, a, b, x[i+14], 17, -1502002290);
    b = md5_ff(b, c, d, a, x[i+15], 22,  1236535329);

    a = md5_gg(a, b, c, d, x[i+ 1], 5 , -165796510);
    d = md5_gg(d, a, b, c, x[i+ 6], 9 , -1069501632);
    c = md5_gg(c, d, a, b, x[i+11], 14,  643717713);
    b = md5_gg(b, c, d, a, x[i+ 0], 20, -373897302);
    a = md5_gg(a, b, c, d, x[i+ 5], 5 , -701558691);
    d = md5_gg(d, a, b, c, x[i+10], 9 ,  38016083);
    c = md5_gg(c, d, a, b, x[i+15], 14, -660478335);
    b = md5_gg(b, c, d, a, x[i+ 4], 20, -405537848);
    a = md5_gg(a, b, c, d, x[i+ 9], 5 ,  568446438);
    d = md5_gg(d, a, b, c, x[i+14], 9 , -1019803690);
    c = md5_gg(c, d, a, b, x[i+ 3], 14, -187363961);
    b = md5_gg(b, c, d, a, x[i+ 8], 20,  1163531501);
    a = md5_gg(a, b, c, d, x[i+13], 5 , -1444681467);
    d = md5_gg(d, a, b, c, x[i+ 2], 9 , -51403784);
    c = md5_gg(c, d, a, b, x[i+ 7], 14,  1735328473);
    b = md5_gg(b, c, d, a, x[i+12], 20, -1926607734);

    a = md5_hh(a, b, c, d, x[i+ 5], 4 , -378558);
    d = md5_hh(d, a, b, c, x[i+ 8], 11, -2022574463);
    c = md5_hh(c, d, a, b, x[i+11], 16,  1839030562);
    b = md5_hh(b, c, d, a, x[i+14], 23, -35309556);
    a = md5_hh(a, b, c, d, x[i+ 1], 4 , -1530992060);
    d = md5_hh(d, a, b, c, x[i+ 4], 11,  1272893353);
    c = md5_hh(c, d, a, b, x[i+ 7], 16, -155497632);
    b = md5_hh(b, c, d, a, x[i+10], 23, -1094730640);
    a = md5_hh(a, b, c, d, x[i+13], 4 ,  681279174);
    d = md5_hh(d, a, b, c, x[i+ 0], 11, -358537222);
    c = md5_hh(c, d, a, b, x[i+ 3], 16, -722521979);
    b = md5_hh(b, c, d, a, x[i+ 6], 23,  76029189);
    a = md5_hh(a, b, c, d, x[i+ 9], 4 , -640364487);
    d = md5_hh(d, a, b, c, x[i+12], 11, -421815835);
    c = md5_hh(c, d, a, b, x[i+15], 16,  530742520);
    b = md5_hh(b, c, d, a, x[i+ 2], 23, -995338651);

    a = md5_ii(a, b, c, d, x[i+ 0], 6 , -198630844);
    d = md5_ii(d, a, b, c, x[i+ 7], 10,  1126891415);
    c = md5_ii(c, d, a, b, x[i+14], 15, -1416354905);
    b = md5_ii(b, c, d, a, x[i+ 5], 21, -57434055);
    a = md5_ii(a, b, c, d, x[i+12], 6 ,  1700485571);
    d = md5_ii(d, a, b, c, x[i+ 3], 10, -1894986606);
    c = md5_ii(c, d, a, b, x[i+10], 15, -1051523);
    b = md5_ii(b, c, d, a, x[i+ 1], 21, -2054922799);
    a = md5_ii(a, b, c, d, x[i+ 8], 6 ,  1873313359);
    d = md5_ii(d, a, b, c, x[i+15], 10, -30611744);
    c = md5_ii(c, d, a, b, x[i+ 6], 15, -1560198380);
    b = md5_ii(b, c, d, a, x[i+13], 21,  1309151649);
    a = md5_ii(a, b, c, d, x[i+ 4], 6 , -145523070);
    d = md5_ii(d, a, b, c, x[i+11], 10, -1120210379);
    c = md5_ii(c, d, a, b, x[i+ 2], 15,  718787259);
    b = md5_ii(b, c, d, a, x[i+ 9], 21, -343485551);

    a = safe_add(a, olda);
    b = safe_add(b, oldb);
    c = safe_add(c, oldc);
    d = safe_add(d, oldd);
  }
  return Array(a, b, c, d);

}

/*
 * These functions implement the four basic operations the algorithm uses.
 */
function md5_cmn(q, a, b, x, s, t)
{
  return safe_add(bit_rol(safe_add(safe_add(a, q), safe_add(x, t)), s),b);
}
function md5_ff(a, b, c, d, x, s, t)
{
  return md5_cmn((b & c) | ((~b) & d), a, b, x, s, t);
}
function md5_gg(a, b, c, d, x, s, t)
{
  return md5_cmn((b & d) | (c & (~d)), a, b, x, s, t);
}
function md5_hh(a, b, c, d, x, s, t)
{
  return md5_cmn(b ^ c ^ d, a, b, x, s, t);
}
function md5_ii(a, b, c, d, x, s, t)
{
  return md5_cmn(c ^ (b | (~d)), a, b, x, s, t);
}

/*
 * Add integers, wrapping at 2^32. This uses 16-bit operations internally
 * to work around bugs in some JS interpreters.
 */
function safe_add(x, y)
{
  var lsw = (x & 0xFFFF) + (y & 0xFFFF);
  var msw = (x >> 16) + (y >> 16) + (lsw >> 16);
  return (msw << 16) | (lsw & 0xFFFF);
}

/*
 * Bitwise rotate a 32-bit number to the left.
 */
function bit_rol(num, cnt)
{
  return (num << cnt) | (num >>> (32 - cnt));
}

module.exports = function md5(buf) {
  return helpers.hash(buf, core_md5, 16);
};
},{"./helpers":"/Users/jrmerz/dev/cstars/AHB/farm-budgets-app/node_modules/create-hash/helpers.js"}],"/Users/jrmerz/dev/cstars/AHB/farm-budgets-app/node_modules/create-hmac/browser.js":[function(require,module,exports){
(function (Buffer){
'use strict';
var createHash = require('create-hash/browser');
var inherits = require('inherits')

var Transform = require('stream').Transform

var ZEROS = new Buffer(128)
ZEROS.fill(0)

function Hmac(alg, key) {
  Transform.call(this)
  alg = alg.toLowerCase()
  if (typeof key === 'string') {
    key = new Buffer(key)
  }

  var blocksize = (alg === 'sha512' || alg === 'sha384') ? 128 : 64

  this._alg = alg
  this._key = key

  if (key.length > blocksize) {
    key = createHash(alg).update(key).digest()

  } else if (key.length < blocksize) {
    key = Buffer.concat([key, ZEROS], blocksize)
  }

  var ipad = this._ipad = new Buffer(blocksize)
  var opad = this._opad = new Buffer(blocksize)

  for (var i = 0; i < blocksize; i++) {
    ipad[i] = key[i] ^ 0x36
    opad[i] = key[i] ^ 0x5C
  }

  this._hash = createHash(alg).update(ipad)
}

inherits(Hmac, Transform)

Hmac.prototype.update = function (data, enc) {
  this._hash.update(data, enc)

  return this
}

Hmac.prototype._transform = function (data, _, next) {
  this._hash.update(data)

  next()
}

Hmac.prototype._flush = function (next) {
  this.push(this.digest())

  next()
}

Hmac.prototype.digest = function (enc) {
  var h = this._hash.digest()

  return createHash(this._alg).update(this._opad).update(h).digest(enc)
}

module.exports = function createHmac(alg, key) {
  return new Hmac(alg, key)
}

}).call(this,require("buffer").Buffer)

},{"buffer":"/Users/jrmerz/dev/cstars/AHB/farm-budgets-app/node_modules/buffer/index.js","create-hash/browser":"/Users/jrmerz/dev/cstars/AHB/farm-budgets-app/node_modules/create-hash/browser.js","inherits":"/Users/jrmerz/dev/cstars/AHB/farm-budgets-app/node_modules/inherits/inherits_browser.js","stream":"/Users/jrmerz/dev/cstars/AHB/farm-budgets-app/node_modules/stream-browserify/index.js"}],"/Users/jrmerz/dev/cstars/AHB/farm-budgets-app/node_modules/crypto-browserify/index.js":[function(require,module,exports){
'use strict'

exports.randomBytes = exports.rng = exports.pseudoRandomBytes = exports.prng = require('randombytes')
exports.createHash = exports.Hash = require('create-hash')
exports.createHmac = exports.Hmac = require('create-hmac')

var hashes = ['sha1', 'sha224', 'sha256', 'sha384', 'sha512', 'md5', 'rmd160'].concat(Object.keys(require('browserify-sign/algos')))
exports.getHashes = function () {
  return hashes
}

var p = require('pbkdf2')
exports.pbkdf2 = p.pbkdf2
exports.pbkdf2Sync = p.pbkdf2Sync

var aes = require('browserify-cipher')
;[
  'Cipher',
  'createCipher',
  'Cipheriv',
  'createCipheriv',
  'Decipher',
  'createDecipher',
  'Decipheriv',
  'createDecipheriv',
  'getCiphers',
  'listCiphers'
].forEach(function (key) {
  exports[key] = aes[key]
})

var dh = require('diffie-hellman')
;[
  'DiffieHellmanGroup',
  'createDiffieHellmanGroup',
  'getDiffieHellman',
  'createDiffieHellman',
  'DiffieHellman'
].forEach(function (key) {
  exports[key] = dh[key]
})

var sign = require('browserify-sign')
;[
  'createSign',
  'Sign',
  'createVerify',
  'Verify'
].forEach(function (key) {
  exports[key] = sign[key]
})

exports.createECDH = require('create-ecdh')

var publicEncrypt = require('public-encrypt')

;[
  'publicEncrypt',
  'privateEncrypt',
  'publicDecrypt',
  'privateDecrypt'
].forEach(function (key) {
  exports[key] = publicEncrypt[key]
})

// the least I can do is make error messages for the rest of the node.js/crypto api.
;[
  'createCredentials'
].forEach(function (name) {
  exports[name] = function () {
    throw new Error([
      'sorry, ' + name + ' is not implemented yet',
      'we accept pull requests',
      'https://github.com/crypto-browserify/crypto-browserify'
    ].join('\n'))
  }
})

},{"browserify-cipher":"/Users/jrmerz/dev/cstars/AHB/farm-budgets-app/node_modules/browserify-cipher/browser.js","browserify-sign":"/Users/jrmerz/dev/cstars/AHB/farm-budgets-app/node_modules/browserify-sign/browser.js","browserify-sign/algos":"/Users/jrmerz/dev/cstars/AHB/farm-budgets-app/node_modules/browserify-sign/algos.js","create-ecdh":"/Users/jrmerz/dev/cstars/AHB/farm-budgets-app/node_modules/create-ecdh/browser.js","create-hash":"/Users/jrmerz/dev/cstars/AHB/farm-budgets-app/node_modules/create-hash/browser.js","create-hmac":"/Users/jrmerz/dev/cstars/AHB/farm-budgets-app/node_modules/create-hmac/browser.js","diffie-hellman":"/Users/jrmerz/dev/cstars/AHB/farm-budgets-app/node_modules/diffie-hellman/browser.js","pbkdf2":"/Users/jrmerz/dev/cstars/AHB/farm-budgets-app/node_modules/pbkdf2/browser.js","public-encrypt":"/Users/jrmerz/dev/cstars/AHB/farm-budgets-app/node_modules/public-encrypt/browser.js","randombytes":"/Users/jrmerz/dev/cstars/AHB/farm-budgets-app/node_modules/randombytes/browser.js"}],"/Users/jrmerz/dev/cstars/AHB/farm-budgets-app/node_modules/des.js/lib/des.js":[function(require,module,exports){
'use strict';

exports.utils = require('./des/utils');
exports.Cipher = require('./des/cipher');
exports.DES = require('./des/des');
exports.CBC = require('./des/cbc');
exports.EDE = require('./des/ede');

},{"./des/cbc":"/Users/jrmerz/dev/cstars/AHB/farm-budgets-app/node_modules/des.js/lib/des/cbc.js","./des/cipher":"/Users/jrmerz/dev/cstars/AHB/farm-budgets-app/node_modules/des.js/lib/des/cipher.js","./des/des":"/Users/jrmerz/dev/cstars/AHB/farm-budgets-app/node_modules/des.js/lib/des/des.js","./des/ede":"/Users/jrmerz/dev/cstars/AHB/farm-budgets-app/node_modules/des.js/lib/des/ede.js","./des/utils":"/Users/jrmerz/dev/cstars/AHB/farm-budgets-app/node_modules/des.js/lib/des/utils.js"}],"/Users/jrmerz/dev/cstars/AHB/farm-budgets-app/node_modules/des.js/lib/des/cbc.js":[function(require,module,exports){
'use strict';

var assert = require('minimalistic-assert');
var inherits = require('inherits');

var proto = {};

function CBCState(iv) {
  assert.equal(iv.length, 8, 'Invalid IV length');

  this.iv = new Array(8);
  for (var i = 0; i < this.iv.length; i++)
    this.iv[i] = iv[i];
}

function instantiate(Base) {
  function CBC(options) {
    Base.call(this, options);
    this._cbcInit();
  }
  inherits(CBC, Base);

  var keys = Object.keys(proto);
  for (var i = 0; i < keys.length; i++) {
    var key = keys[i];
    CBC.prototype[key] = proto[key];
  }

  CBC.create = function create(options) {
    return new CBC(options);
  };

  return CBC;
}

exports.instantiate = instantiate;

proto._cbcInit = function _cbcInit() {
  var state = new CBCState(this.options.iv);
  this._cbcState = state;
};

proto._update = function _update(inp, inOff, out, outOff) {
  var state = this._cbcState;
  var superProto = this.constructor.super_.prototype;

  var iv = state.iv;
  if (this.type === 'encrypt') {
    for (var i = 0; i < this.blockSize; i++)
      iv[i] ^= inp[inOff + i];

    superProto._update.call(this, iv, 0, out, outOff);

    for (var i = 0; i < this.blockSize; i++)
      iv[i] = out[outOff + i];
  } else {
    superProto._update.call(this, inp, inOff, out, outOff);

    for (var i = 0; i < this.blockSize; i++)
      out[outOff + i] ^= iv[i];

    for (var i = 0; i < this.blockSize; i++)
      iv[i] = inp[inOff + i];
  }
};

},{"inherits":"/Users/jrmerz/dev/cstars/AHB/farm-budgets-app/node_modules/inherits/inherits_browser.js","minimalistic-assert":"/Users/jrmerz/dev/cstars/AHB/farm-budgets-app/node_modules/minimalistic-assert/index.js"}],"/Users/jrmerz/dev/cstars/AHB/farm-budgets-app/node_modules/des.js/lib/des/cipher.js":[function(require,module,exports){
'use strict';

var assert = require('minimalistic-assert');

function Cipher(options) {
  this.options = options;

  this.type = this.options.type;
  this.blockSize = 8;
  this._init();

  this.buffer = new Array(this.blockSize);
  this.bufferOff = 0;
}
module.exports = Cipher;

Cipher.prototype._init = function _init() {
  // Might be overrided
};

Cipher.prototype.update = function update(data) {
  if (data.length === 0)
    return [];

  if (this.type === 'decrypt')
    return this._updateDecrypt(data);
  else
    return this._updateEncrypt(data);
};

Cipher.prototype._buffer = function _buffer(data, off) {
  // Append data to buffer
  var min = Math.min(this.buffer.length - this.bufferOff, data.length - off);
  for (var i = 0; i < min; i++)
    this.buffer[this.bufferOff + i] = data[off + i];
  this.bufferOff += min;

  // Shift next
  return min;
};

Cipher.prototype._flushBuffer = function _flushBuffer(out, off) {
  this._update(this.buffer, 0, out, off);
  this.bufferOff = 0;
  return this.blockSize;
};

Cipher.prototype._updateEncrypt = function _updateEncrypt(data) {
  var inputOff = 0;
  var outputOff = 0;

  var count = ((this.bufferOff + data.length) / this.blockSize) | 0;
  var out = new Array(count * this.blockSize);

  if (this.bufferOff !== 0) {
    inputOff += this._buffer(data, inputOff);

    if (this.bufferOff === this.buffer.length)
      outputOff += this._flushBuffer(out, outputOff);
  }

  // Write blocks
  var max = data.length - ((data.length - inputOff) % this.blockSize);
  for (; inputOff < max; inputOff += this.blockSize) {
    this._update(data, inputOff, out, outputOff);
    outputOff += this.blockSize;
  }

  // Queue rest
  for (; inputOff < data.length; inputOff++, this.bufferOff++)
    this.buffer[this.bufferOff] = data[inputOff];

  return out;
};

Cipher.prototype._updateDecrypt = function _updateDecrypt(data) {
  var inputOff = 0;
  var outputOff = 0;

  var count = Math.ceil((this.bufferOff + data.length) / this.blockSize) - 1;
  var out = new Array(count * this.blockSize);

  // TODO(indutny): optimize it, this is far from optimal
  for (; count > 0; count--) {
    inputOff += this._buffer(data, inputOff);
    outputOff += this._flushBuffer(out, outputOff);
  }

  // Buffer rest of the input
  inputOff += this._buffer(data, inputOff);

  return out;
};

Cipher.prototype.final = function final(buffer) {
  var first;
  if (buffer)
    first = this.update(buffer);

  var last;
  if (this.type === 'encrypt')
    last = this._finalEncrypt();
  else
    last = this._finalDecrypt();

  if (first)
    return first.concat(last);
  else
    return last;
};

Cipher.prototype._pad = function _pad(buffer, off) {
  if (off === 0)
    return false;

  while (off < buffer.length)
    buffer[off++] = 0;

  return true;
};

Cipher.prototype._finalEncrypt = function _finalEncrypt() {
  if (!this._pad(this.buffer, this.bufferOff))
    return [];

  var out = new Array(this.blockSize);
  this._update(this.buffer, 0, out, 0);
  return out;
};

Cipher.prototype._unpad = function _unpad(buffer) {
  return buffer;
};

Cipher.prototype._finalDecrypt = function _finalDecrypt() {
  assert.equal(this.bufferOff, this.blockSize, 'Not enough data to decrypt');
  var out = new Array(this.blockSize);
  this._flushBuffer(out, 0);

  return this._unpad(out);
};

},{"minimalistic-assert":"/Users/jrmerz/dev/cstars/AHB/farm-budgets-app/node_modules/minimalistic-assert/index.js"}],"/Users/jrmerz/dev/cstars/AHB/farm-budgets-app/node_modules/des.js/lib/des/des.js":[function(require,module,exports){
'use strict';

var assert = require('minimalistic-assert');
var inherits = require('inherits');

var des = require('../des');
var utils = des.utils;
var Cipher = des.Cipher;

function DESState() {
  this.tmp = new Array(2);
  this.keys = null;
}

function DES(options) {
  Cipher.call(this, options);

  var state = new DESState();
  this._desState = state;

  this.deriveKeys(state, options.key);
}
inherits(DES, Cipher);
module.exports = DES;

DES.create = function create(options) {
  return new DES(options);
};

var shiftTable = [
  1, 1, 2, 2, 2, 2, 2, 2,
  1, 2, 2, 2, 2, 2, 2, 1
];

DES.prototype.deriveKeys = function deriveKeys(state, key) {
  state.keys = new Array(16 * 2);

  assert.equal(key.length, this.blockSize, 'Invalid key length');

  var kL = utils.readUInt32BE(key, 0);
  var kR = utils.readUInt32BE(key, 4);

  utils.pc1(kL, kR, state.tmp, 0);
  kL = state.tmp[0];
  kR = state.tmp[1];
  for (var i = 0; i < state.keys.length; i += 2) {
    var shift = shiftTable[i >>> 1];
    kL = utils.r28shl(kL, shift);
    kR = utils.r28shl(kR, shift);
    utils.pc2(kL, kR, state.keys, i);
  }
};

DES.prototype._update = function _update(inp, inOff, out, outOff) {
  var state = this._desState;

  var l = utils.readUInt32BE(inp, inOff);
  var r = utils.readUInt32BE(inp, inOff + 4);

  // Initial Permutation
  utils.ip(l, r, state.tmp, 0);
  l = state.tmp[0];
  r = state.tmp[1];

  if (this.type === 'encrypt')
    this._encrypt(state, l, r, state.tmp, 0);
  else
    this._decrypt(state, l, r, state.tmp, 0);

  l = state.tmp[0];
  r = state.tmp[1];

  utils.writeUInt32BE(out, l, outOff);
  utils.writeUInt32BE(out, r, outOff + 4);
};

DES.prototype._pad = function _pad(buffer, off) {
  var value = buffer.length - off;
  for (var i = off; i < buffer.length; i++)
    buffer[i] = value;

  return true;
};

DES.prototype._unpad = function _unpad(buffer) {
  var pad = buffer[buffer.length - 1];
  for (var i = buffer.length - pad; i < buffer.length; i++)
    assert.equal(buffer[i], pad);

  return buffer.slice(0, buffer.length - pad);
};

DES.prototype._encrypt = function _encrypt(state, lStart, rStart, out, off) {
  var l = lStart;
  var r = rStart;

  // Apply f() x16 times
  for (var i = 0; i < state.keys.length; i += 2) {
    var keyL = state.keys[i];
    var keyR = state.keys[i + 1];

    // f(r, k)
    utils.expand(r, state.tmp, 0);

    keyL ^= state.tmp[0];
    keyR ^= state.tmp[1];
    var s = utils.substitute(keyL, keyR);
    var f = utils.permute(s);

    var t = r;
    r = (l ^ f) >>> 0;
    l = t;
  }

  // Reverse Initial Permutation
  utils.rip(r, l, out, off);
};

DES.prototype._decrypt = function _decrypt(state, lStart, rStart, out, off) {
  var l = rStart;
  var r = lStart;

  // Apply f() x16 times
  for (var i = state.keys.length - 2; i >= 0; i -= 2) {
    var keyL = state.keys[i];
    var keyR = state.keys[i + 1];

    // f(r, k)
    utils.expand(l, state.tmp, 0);

    keyL ^= state.tmp[0];
    keyR ^= state.tmp[1];
    var s = utils.substitute(keyL, keyR);
    var f = utils.permute(s);

    var t = l;
    l = (r ^ f) >>> 0;
    r = t;
  }

  // Reverse Initial Permutation
  utils.rip(l, r, out, off);
};

},{"../des":"/Users/jrmerz/dev/cstars/AHB/farm-budgets-app/node_modules/des.js/lib/des.js","inherits":"/Users/jrmerz/dev/cstars/AHB/farm-budgets-app/node_modules/inherits/inherits_browser.js","minimalistic-assert":"/Users/jrmerz/dev/cstars/AHB/farm-budgets-app/node_modules/minimalistic-assert/index.js"}],"/Users/jrmerz/dev/cstars/AHB/farm-budgets-app/node_modules/des.js/lib/des/ede.js":[function(require,module,exports){
'use strict';

var assert = require('minimalistic-assert');
var inherits = require('inherits');

var des = require('../des');
var Cipher = des.Cipher;
var DES = des.DES;

function EDEState(type, key) {
  assert.equal(key.length, 24, 'Invalid key length');

  var k1 = key.slice(0, 8);
  var k2 = key.slice(8, 16);
  var k3 = key.slice(16, 24);

  if (type === 'encrypt') {
    this.ciphers = [
      DES.create({ type: 'encrypt', key: k1 }),
      DES.create({ type: 'decrypt', key: k2 }),
      DES.create({ type: 'encrypt', key: k3 })
    ];
  } else {
    this.ciphers = [
      DES.create({ type: 'decrypt', key: k3 }),
      DES.create({ type: 'encrypt', key: k2 }),
      DES.create({ type: 'decrypt', key: k1 })
    ];
  }
}

function EDE(options) {
  Cipher.call(this, options);

  var state = new EDEState(this.type, this.options.key);
  this._edeState = state;
}
inherits(EDE, Cipher);

module.exports = EDE;

EDE.create = function create(options) {
  return new EDE(options);
};

EDE.prototype._update = function _update(inp, inOff, out, outOff) {
  var state = this._edeState;

  state.ciphers[0]._update(inp, inOff, out, outOff);
  state.ciphers[1]._update(out, outOff, out, outOff);
  state.ciphers[2]._update(out, outOff, out, outOff);
};

EDE.prototype._pad = DES.prototype._pad;
EDE.prototype._unpad = DES.prototype._unpad;

},{"../des":"/Users/jrmerz/dev/cstars/AHB/farm-budgets-app/node_modules/des.js/lib/des.js","inherits":"/Users/jrmerz/dev/cstars/AHB/farm-budgets-app/node_modules/inherits/inherits_browser.js","minimalistic-assert":"/Users/jrmerz/dev/cstars/AHB/farm-budgets-app/node_modules/minimalistic-assert/index.js"}],"/Users/jrmerz/dev/cstars/AHB/farm-budgets-app/node_modules/des.js/lib/des/utils.js":[function(require,module,exports){
'use strict';

exports.readUInt32BE = function readUInt32BE(bytes, off) {
  var res =  (bytes[0 + off] << 24) |
             (bytes[1 + off] << 16) |
             (bytes[2 + off] << 8) |
             bytes[3 + off];
  return res >>> 0;
};

exports.writeUInt32BE = function writeUInt32BE(bytes, value, off) {
  bytes[0 + off] = value >>> 24;
  bytes[1 + off] = (value >>> 16) & 0xff;
  bytes[2 + off] = (value >>> 8) & 0xff;
  bytes[3 + off] = value & 0xff;
};

exports.ip = function ip(inL, inR, out, off) {
  var outL = 0;
  var outR = 0;

  for (var i = 6; i >= 0; i -= 2) {
    for (var j = 0; j <= 24; j += 8) {
      outL <<= 1;
      outL |= (inR >>> (j + i)) & 1;
    }
    for (var j = 0; j <= 24; j += 8) {
      outL <<= 1;
      outL |= (inL >>> (j + i)) & 1;
    }
  }

  for (var i = 6; i >= 0; i -= 2) {
    for (var j = 1; j <= 25; j += 8) {
      outR <<= 1;
      outR |= (inR >>> (j + i)) & 1;
    }
    for (var j = 1; j <= 25; j += 8) {
      outR <<= 1;
      outR |= (inL >>> (j + i)) & 1;
    }
  }

  out[off + 0] = outL >>> 0;
  out[off + 1] = outR >>> 0;
};

exports.rip = function rip(inL, inR, out, off) {
  var outL = 0;
  var outR = 0;

  for (var i = 0; i < 4; i++) {
    for (var j = 24; j >= 0; j -= 8) {
      outL <<= 1;
      outL |= (inR >>> (j + i)) & 1;
      outL <<= 1;
      outL |= (inL >>> (j + i)) & 1;
    }
  }
  for (var i = 4; i < 8; i++) {
    for (var j = 24; j >= 0; j -= 8) {
      outR <<= 1;
      outR |= (inR >>> (j + i)) & 1;
      outR <<= 1;
      outR |= (inL >>> (j + i)) & 1;
    }
  }

  out[off + 0] = outL >>> 0;
  out[off + 1] = outR >>> 0;
};

exports.pc1 = function pc1(inL, inR, out, off) {
  var outL = 0;
  var outR = 0;

  // 7, 15, 23, 31, 39, 47, 55, 63
  // 6, 14, 22, 30, 39, 47, 55, 63
  // 5, 13, 21, 29, 39, 47, 55, 63
  // 4, 12, 20, 28
  for (var i = 7; i >= 5; i--) {
    for (var j = 0; j <= 24; j += 8) {
      outL <<= 1;
      outL |= (inR >> (j + i)) & 1;
    }
    for (var j = 0; j <= 24; j += 8) {
      outL <<= 1;
      outL |= (inL >> (j + i)) & 1;
    }
  }
  for (var j = 0; j <= 24; j += 8) {
    outL <<= 1;
    outL |= (inR >> (j + i)) & 1;
  }

  // 1, 9, 17, 25, 33, 41, 49, 57
  // 2, 10, 18, 26, 34, 42, 50, 58
  // 3, 11, 19, 27, 35, 43, 51, 59
  // 36, 44, 52, 60
  for (var i = 1; i <= 3; i++) {
    for (var j = 0; j <= 24; j += 8) {
      outR <<= 1;
      outR |= (inR >> (j + i)) & 1;
    }
    for (var j = 0; j <= 24; j += 8) {
      outR <<= 1;
      outR |= (inL >> (j + i)) & 1;
    }
  }
  for (var j = 0; j <= 24; j += 8) {
    outR <<= 1;
    outR |= (inL >> (j + i)) & 1;
  }

  out[off + 0] = outL >>> 0;
  out[off + 1] = outR >>> 0;
};

exports.r28shl = function r28shl(num, shift) {
  return ((num << shift) & 0xfffffff) | (num >>> (28 - shift));
};

var pc2table = [
  // inL => outL
  14, 11, 17, 4, 27, 23, 25, 0,
  13, 22, 7, 18, 5, 9, 16, 24,
  2, 20, 12, 21, 1, 8, 15, 26,

  // inR => outR
  15, 4, 25, 19, 9, 1, 26, 16,
  5, 11, 23, 8, 12, 7, 17, 0,
  22, 3, 10, 14, 6, 20, 27, 24
];

exports.pc2 = function pc2(inL, inR, out, off) {
  var outL = 0;
  var outR = 0;

  var len = pc2table.length >>> 1;
  for (var i = 0; i < len; i++) {
    outL <<= 1;
    outL |= (inL >>> pc2table[i]) & 0x1;
  }
  for (var i = len; i < pc2table.length; i++) {
    outR <<= 1;
    outR |= (inR >>> pc2table[i]) & 0x1;
  }

  out[off + 0] = outL >>> 0;
  out[off + 1] = outR >>> 0;
};

exports.expand = function expand(r, out, off) {
  var outL = 0;
  var outR = 0;

  outL = ((r & 1) << 5) | (r >>> 27);
  for (var i = 23; i >= 15; i -= 4) {
    outL <<= 6;
    outL |= (r >>> i) & 0x3f;
  }
  for (var i = 11; i >= 3; i -= 4) {
    outR |= (r >>> i) & 0x3f;
    outR <<= 6;
  }
  outR |= ((r & 0x1f) << 1) | (r >>> 31);

  out[off + 0] = outL >>> 0;
  out[off + 1] = outR >>> 0;
};

var sTable = [
  14, 0, 4, 15, 13, 7, 1, 4, 2, 14, 15, 2, 11, 13, 8, 1,
  3, 10, 10, 6, 6, 12, 12, 11, 5, 9, 9, 5, 0, 3, 7, 8,
  4, 15, 1, 12, 14, 8, 8, 2, 13, 4, 6, 9, 2, 1, 11, 7,
  15, 5, 12, 11, 9, 3, 7, 14, 3, 10, 10, 0, 5, 6, 0, 13,

  15, 3, 1, 13, 8, 4, 14, 7, 6, 15, 11, 2, 3, 8, 4, 14,
  9, 12, 7, 0, 2, 1, 13, 10, 12, 6, 0, 9, 5, 11, 10, 5,
  0, 13, 14, 8, 7, 10, 11, 1, 10, 3, 4, 15, 13, 4, 1, 2,
  5, 11, 8, 6, 12, 7, 6, 12, 9, 0, 3, 5, 2, 14, 15, 9,

  10, 13, 0, 7, 9, 0, 14, 9, 6, 3, 3, 4, 15, 6, 5, 10,
  1, 2, 13, 8, 12, 5, 7, 14, 11, 12, 4, 11, 2, 15, 8, 1,
  13, 1, 6, 10, 4, 13, 9, 0, 8, 6, 15, 9, 3, 8, 0, 7,
  11, 4, 1, 15, 2, 14, 12, 3, 5, 11, 10, 5, 14, 2, 7, 12,

  7, 13, 13, 8, 14, 11, 3, 5, 0, 6, 6, 15, 9, 0, 10, 3,
  1, 4, 2, 7, 8, 2, 5, 12, 11, 1, 12, 10, 4, 14, 15, 9,
  10, 3, 6, 15, 9, 0, 0, 6, 12, 10, 11, 1, 7, 13, 13, 8,
  15, 9, 1, 4, 3, 5, 14, 11, 5, 12, 2, 7, 8, 2, 4, 14,

  2, 14, 12, 11, 4, 2, 1, 12, 7, 4, 10, 7, 11, 13, 6, 1,
  8, 5, 5, 0, 3, 15, 15, 10, 13, 3, 0, 9, 14, 8, 9, 6,
  4, 11, 2, 8, 1, 12, 11, 7, 10, 1, 13, 14, 7, 2, 8, 13,
  15, 6, 9, 15, 12, 0, 5, 9, 6, 10, 3, 4, 0, 5, 14, 3,

  12, 10, 1, 15, 10, 4, 15, 2, 9, 7, 2, 12, 6, 9, 8, 5,
  0, 6, 13, 1, 3, 13, 4, 14, 14, 0, 7, 11, 5, 3, 11, 8,
  9, 4, 14, 3, 15, 2, 5, 12, 2, 9, 8, 5, 12, 15, 3, 10,
  7, 11, 0, 14, 4, 1, 10, 7, 1, 6, 13, 0, 11, 8, 6, 13,

  4, 13, 11, 0, 2, 11, 14, 7, 15, 4, 0, 9, 8, 1, 13, 10,
  3, 14, 12, 3, 9, 5, 7, 12, 5, 2, 10, 15, 6, 8, 1, 6,
  1, 6, 4, 11, 11, 13, 13, 8, 12, 1, 3, 4, 7, 10, 14, 7,
  10, 9, 15, 5, 6, 0, 8, 15, 0, 14, 5, 2, 9, 3, 2, 12,

  13, 1, 2, 15, 8, 13, 4, 8, 6, 10, 15, 3, 11, 7, 1, 4,
  10, 12, 9, 5, 3, 6, 14, 11, 5, 0, 0, 14, 12, 9, 7, 2,
  7, 2, 11, 1, 4, 14, 1, 7, 9, 4, 12, 10, 14, 8, 2, 13,
  0, 15, 6, 12, 10, 9, 13, 0, 15, 3, 3, 5, 5, 6, 8, 11
];

exports.substitute = function substitute(inL, inR) {
  var out = 0;
  for (var i = 0; i < 4; i++) {
    var b = (inL >>> (18 - i * 6)) & 0x3f;
    var sb = sTable[i * 0x40 + b];

    out <<= 4;
    out |= sb;
  }
  for (var i = 0; i < 4; i++) {
    var b = (inR >>> (18 - i * 6)) & 0x3f;
    var sb = sTable[4 * 0x40 + i * 0x40 + b];

    out <<= 4;
    out |= sb;
  }
  return out >>> 0;
};

var permuteTable = [
  16, 25, 12, 11, 3, 20, 4, 15, 31, 17, 9, 6, 27, 14, 1, 22,
  30, 24, 8, 18, 0, 5, 29, 23, 13, 19, 2, 26, 10, 21, 28, 7
];

exports.permute = function permute(num) {
  var out = 0;
  for (var i = 0; i < permuteTable.length; i++) {
    out <<= 1;
    out |= (num >>> permuteTable[i]) & 0x1;
  }
  return out >>> 0;
};

exports.padSplit = function padSplit(num, size, group) {
  var str = num.toString(2);
  while (str.length < size)
    str = '0' + str;

  var out = [];
  for (var i = 0; i < size; i += group)
    out.push(str.slice(i, i + group));
  return out.join(' ');
};

},{}],"/Users/jrmerz/dev/cstars/AHB/farm-budgets-app/node_modules/diffie-hellman/browser.js":[function(require,module,exports){
(function (Buffer){
var generatePrime = require('./lib/generatePrime')
var primes = require('./lib/primes')

var DH = require('./lib/dh')

function getDiffieHellman (mod) {
  var prime = new Buffer(primes[mod].prime, 'hex')
  var gen = new Buffer(primes[mod].gen, 'hex')

  return new DH(prime, gen)
}

var ENCODINGS = {
  'binary': true, 'hex': true, 'base64': true
}

function createDiffieHellman (prime, enc, generator, genc) {
  if (Buffer.isBuffer(enc) || ENCODINGS[enc] === undefined) {
    return createDiffieHellman(prime, 'binary', enc, generator)
  }

  enc = enc || 'binary'
  genc = genc || 'binary'
  generator = generator || new Buffer([2])

  if (!Buffer.isBuffer(generator)) {
    generator = new Buffer(generator, genc)
  }

  if (typeof prime === 'number') {
    return new DH(generatePrime(prime, generator), generator, true)
  }

  if (!Buffer.isBuffer(prime)) {
    prime = new Buffer(prime, enc)
  }

  return new DH(prime, generator, true)
}

exports.DiffieHellmanGroup = exports.createDiffieHellmanGroup = exports.getDiffieHellman = getDiffieHellman
exports.createDiffieHellman = exports.DiffieHellman = createDiffieHellman

}).call(this,require("buffer").Buffer)

},{"./lib/dh":"/Users/jrmerz/dev/cstars/AHB/farm-budgets-app/node_modules/diffie-hellman/lib/dh.js","./lib/generatePrime":"/Users/jrmerz/dev/cstars/AHB/farm-budgets-app/node_modules/diffie-hellman/lib/generatePrime.js","./lib/primes":"/Users/jrmerz/dev/cstars/AHB/farm-budgets-app/node_modules/diffie-hellman/lib/primes.json","buffer":"/Users/jrmerz/dev/cstars/AHB/farm-budgets-app/node_modules/buffer/index.js"}],"/Users/jrmerz/dev/cstars/AHB/farm-budgets-app/node_modules/diffie-hellman/lib/dh.js":[function(require,module,exports){
(function (Buffer){
var BN = require('bn.js');
var MillerRabin = require('miller-rabin');
var millerRabin = new MillerRabin();
var TWENTYFOUR = new BN(24);
var ELEVEN = new BN(11);
var TEN = new BN(10);
var THREE = new BN(3);
var SEVEN = new BN(7);
var primes = require('./generatePrime');
var randomBytes = require('randombytes');
module.exports = DH;

function setPublicKey(pub, enc) {
  enc = enc || 'utf8';
  if (!Buffer.isBuffer(pub)) {
    pub = new Buffer(pub, enc);
  }
  this._pub = new BN(pub);
  return this;
}

function setPrivateKey(priv, enc) {
  enc = enc || 'utf8';
  if (!Buffer.isBuffer(priv)) {
    priv = new Buffer(priv, enc);
  }
  this._priv = new BN(priv);
  return this;
}

var primeCache = {};
function checkPrime(prime, generator) {
  var gen = generator.toString('hex');
  var hex = [gen, prime.toString(16)].join('_');
  if (hex in primeCache) {
    return primeCache[hex];
  }
  var error = 0;

  if (prime.isEven() ||
    !primes.simpleSieve ||
    !primes.fermatTest(prime) ||
    !millerRabin.test(prime)) {
    //not a prime so +1
    error += 1;

    if (gen === '02' || gen === '05') {
      // we'd be able to check the generator
      // it would fail so +8
      error += 8;
    } else {
      //we wouldn't be able to test the generator
      // so +4
      error += 4;
    }
    primeCache[hex] = error;
    return error;
  }
  if (!millerRabin.test(prime.shrn(1))) {
    //not a safe prime
    error += 2;
  }
  var rem;
  switch (gen) {
    case '02':
      if (prime.mod(TWENTYFOUR).cmp(ELEVEN)) {
        // unsuidable generator
        error += 8;
      }
      break;
    case '05':
      rem = prime.mod(TEN);
      if (rem.cmp(THREE) && rem.cmp(SEVEN)) {
        // prime mod 10 needs to equal 3 or 7
        error += 8;
      }
      break;
    default:
      error += 4;
  }
  primeCache[hex] = error;
  return error;
}

function DH(prime, generator, malleable) {
  this.setGenerator(generator);
  this.__prime = new BN(prime);
  this._prime = BN.mont(this.__prime);
  this._primeLen = prime.length;
  this._pub = undefined;
  this._priv = undefined;
  this._primeCode = undefined;
  if (malleable) {
    this.setPublicKey = setPublicKey;
    this.setPrivateKey = setPrivateKey;
  } else {
    this._primeCode = 8;
  }
}
Object.defineProperty(DH.prototype, 'verifyError', {
  enumerable: true,
  get: function () {
    if (typeof this._primeCode !== 'number') {
      this._primeCode = checkPrime(this.__prime, this.__gen);
    }
    return this._primeCode;
  }
});
DH.prototype.generateKeys = function () {
  if (!this._priv) {
    this._priv = new BN(randomBytes(this._primeLen));
  }
  this._pub = this._gen.toRed(this._prime).redPow(this._priv).fromRed();
  return this.getPublicKey();
};

DH.prototype.computeSecret = function (other) {
  other = new BN(other);
  other = other.toRed(this._prime);
  var secret = other.redPow(this._priv).fromRed();
  var out = new Buffer(secret.toArray());
  var prime = this.getPrime();
  if (out.length < prime.length) {
    var front = new Buffer(prime.length - out.length);
    front.fill(0);
    out = Buffer.concat([front, out]);
  }
  return out;
};

DH.prototype.getPublicKey = function getPublicKey(enc) {
  return formatReturnValue(this._pub, enc);
};

DH.prototype.getPrivateKey = function getPrivateKey(enc) {
  return formatReturnValue(this._priv, enc);
};

DH.prototype.getPrime = function (enc) {
  return formatReturnValue(this.__prime, enc);
};

DH.prototype.getGenerator = function (enc) {
  return formatReturnValue(this._gen, enc);
};

DH.prototype.setGenerator = function (gen, enc) {
  enc = enc || 'utf8';
  if (!Buffer.isBuffer(gen)) {
    gen = new Buffer(gen, enc);
  }
  this.__gen = gen;
  this._gen = new BN(gen);
  return this;
};

function formatReturnValue(bn, enc) {
  var buf = new Buffer(bn.toArray());
  if (!enc) {
    return buf;
  } else {
    return buf.toString(enc);
  }
}

}).call(this,require("buffer").Buffer)

},{"./generatePrime":"/Users/jrmerz/dev/cstars/AHB/farm-budgets-app/node_modules/diffie-hellman/lib/generatePrime.js","bn.js":"/Users/jrmerz/dev/cstars/AHB/farm-budgets-app/node_modules/diffie-hellman/node_modules/bn.js/lib/bn.js","buffer":"/Users/jrmerz/dev/cstars/AHB/farm-budgets-app/node_modules/buffer/index.js","miller-rabin":"/Users/jrmerz/dev/cstars/AHB/farm-budgets-app/node_modules/miller-rabin/lib/mr.js","randombytes":"/Users/jrmerz/dev/cstars/AHB/farm-budgets-app/node_modules/randombytes/browser.js"}],"/Users/jrmerz/dev/cstars/AHB/farm-budgets-app/node_modules/diffie-hellman/lib/generatePrime.js":[function(require,module,exports){
var randomBytes = require('randombytes');
module.exports = findPrime;
findPrime.simpleSieve = simpleSieve;
findPrime.fermatTest = fermatTest;
var BN = require('bn.js');
var TWENTYFOUR = new BN(24);
var MillerRabin = require('miller-rabin');
var millerRabin = new MillerRabin();
var ONE = new BN(1);
var TWO = new BN(2);
var FIVE = new BN(5);
var SIXTEEN = new BN(16);
var EIGHT = new BN(8);
var TEN = new BN(10);
var THREE = new BN(3);
var SEVEN = new BN(7);
var ELEVEN = new BN(11);
var FOUR = new BN(4);
var TWELVE = new BN(12);
var primes = null;

function _getPrimes() {
  if (primes !== null)
    return primes;

  var limit = 0x100000;
  var res = [];
  res[0] = 2;
  for (var i = 1, k = 3; k < limit; k += 2) {
    var sqrt = Math.ceil(Math.sqrt(k));
    for (var j = 0; j < i && res[j] <= sqrt; j++)
      if (k % res[j] === 0)
        break;

    if (i !== j && res[j] <= sqrt)
      continue;

    res[i++] = k;
  }
  primes = res;
  return res;
}

function simpleSieve(p) {
  var primes = _getPrimes();

  for (var i = 0; i < primes.length; i++)
    if (p.modn(primes[i]) === 0) {
      if (p.cmpn(primes[i]) === 0) {
        return true;
      } else {
        return false;
      }
    }

  return true;
}

function fermatTest(p) {
  var red = BN.mont(p);
  return TWO.toRed(red).redPow(p.subn(1)).fromRed().cmpn(1) === 0;
}

function findPrime(bits, gen) {
  if (bits < 16) {
    // this is what openssl does
    if (gen === 2 || gen === 5) {
      return new BN([0x8c, 0x7b]);
    } else {
      return new BN([0x8c, 0x27]);
    }
  }
  gen = new BN(gen);

  var num, n2;

  while (true) {
    num = new BN(randomBytes(Math.ceil(bits / 8)));
    while (num.bitLength() > bits) {
      num.ishrn(1);
    }
    if (num.isEven()) {
      num.iadd(ONE);
    }
    if (!num.testn(1)) {
      num.iadd(TWO);
    }
    if (!gen.cmp(TWO)) {
      while (num.mod(TWENTYFOUR).cmp(ELEVEN)) {
        num.iadd(FOUR);
      }
    } else if (!gen.cmp(FIVE)) {
      while (num.mod(TEN).cmp(THREE)) {
        num.iadd(FOUR);
      }
    }
    n2 = num.shrn(1);
    if (simpleSieve(n2) && simpleSieve(num) &&
      fermatTest(n2) && fermatTest(num) &&
      millerRabin.test(n2) && millerRabin.test(num)) {
      return num;
    }
  }

}

},{"bn.js":"/Users/jrmerz/dev/cstars/AHB/farm-budgets-app/node_modules/diffie-hellman/node_modules/bn.js/lib/bn.js","miller-rabin":"/Users/jrmerz/dev/cstars/AHB/farm-budgets-app/node_modules/miller-rabin/lib/mr.js","randombytes":"/Users/jrmerz/dev/cstars/AHB/farm-budgets-app/node_modules/randombytes/browser.js"}],"/Users/jrmerz/dev/cstars/AHB/farm-budgets-app/node_modules/diffie-hellman/lib/primes.json":[function(require,module,exports){
module.exports={
    "modp1": {
        "gen": "02",
        "prime": "ffffffffffffffffc90fdaa22168c234c4c6628b80dc1cd129024e088a67cc74020bbea63b139b22514a08798e3404ddef9519b3cd3a431b302b0a6df25f14374fe1356d6d51c245e485b576625e7ec6f44c42e9a63a3620ffffffffffffffff"
    },
    "modp2": {
        "gen": "02",
        "prime": "ffffffffffffffffc90fdaa22168c234c4c6628b80dc1cd129024e088a67cc74020bbea63b139b22514a08798e3404ddef9519b3cd3a431b302b0a6df25f14374fe1356d6d51c245e485b576625e7ec6f44c42e9a637ed6b0bff5cb6f406b7edee386bfb5a899fa5ae9f24117c4b1fe649286651ece65381ffffffffffffffff"
    },
    "modp5": {
        "gen": "02",
        "prime": "ffffffffffffffffc90fdaa22168c234c4c6628b80dc1cd129024e088a67cc74020bbea63b139b22514a08798e3404ddef9519b3cd3a431b302b0a6df25f14374fe1356d6d51c245e485b576625e7ec6f44c42e9a637ed6b0bff5cb6f406b7edee386bfb5a899fa5ae9f24117c4b1fe649286651ece45b3dc2007cb8a163bf0598da48361c55d39a69163fa8fd24cf5f83655d23dca3ad961c62f356208552bb9ed529077096966d670c354e4abc9804f1746c08ca237327ffffffffffffffff"
    },
    "modp14": {
        "gen": "02",
        "prime": "ffffffffffffffffc90fdaa22168c234c4c6628b80dc1cd129024e088a67cc74020bbea63b139b22514a08798e3404ddef9519b3cd3a431b302b0a6df25f14374fe1356d6d51c245e485b576625e7ec6f44c42e9a637ed6b0bff5cb6f406b7edee386bfb5a899fa5ae9f24117c4b1fe649286651ece45b3dc2007cb8a163bf0598da48361c55d39a69163fa8fd24cf5f83655d23dca3ad961c62f356208552bb9ed529077096966d670c354e4abc9804f1746c08ca18217c32905e462e36ce3be39e772c180e86039b2783a2ec07a28fb5c55df06f4c52c9de2bcbf6955817183995497cea956ae515d2261898fa051015728e5a8aacaa68ffffffffffffffff"
    },
    "modp15": {
        "gen": "02",
        "prime": "ffffffffffffffffc90fdaa22168c234c4c6628b80dc1cd129024e088a67cc74020bbea63b139b22514a08798e3404ddef9519b3cd3a431b302b0a6df25f14374fe1356d6d51c245e485b576625e7ec6f44c42e9a637ed6b0bff5cb6f406b7edee386bfb5a899fa5ae9f24117c4b1fe649286651ece45b3dc2007cb8a163bf0598da48361c55d39a69163fa8fd24cf5f83655d23dca3ad961c62f356208552bb9ed529077096966d670c354e4abc9804f1746c08ca18217c32905e462e36ce3be39e772c180e86039b2783a2ec07a28fb5c55df06f4c52c9de2bcbf6955817183995497cea956ae515d2261898fa051015728e5a8aaac42dad33170d04507a33a85521abdf1cba64ecfb850458dbef0a8aea71575d060c7db3970f85a6e1e4c7abf5ae8cdb0933d71e8c94e04a25619dcee3d2261ad2ee6bf12ffa06d98a0864d87602733ec86a64521f2b18177b200cbbe117577a615d6c770988c0bad946e208e24fa074e5ab3143db5bfce0fd108e4b82d120a93ad2caffffffffffffffff"
    },
    "modp16": {
        "gen": "02",
        "prime": "ffffffffffffffffc90fdaa22168c234c4c6628b80dc1cd129024e088a67cc74020bbea63b139b22514a08798e3404ddef9519b3cd3a431b302b0a6df25f14374fe1356d6d51c245e485b576625e7ec6f44c42e9a637ed6b0bff5cb6f406b7edee386bfb5a899fa5ae9f24117c4b1fe649286651ece45b3dc2007cb8a163bf0598da48361c55d39a69163fa8fd24cf5f83655d23dca3ad961c62f356208552bb9ed529077096966d670c354e4abc9804f1746c08ca18217c32905e462e36ce3be39e772c180e86039b2783a2ec07a28fb5c55df06f4c52c9de2bcbf6955817183995497cea956ae515d2261898fa051015728e5a8aaac42dad33170d04507a33a85521abdf1cba64ecfb850458dbef0a8aea71575d060c7db3970f85a6e1e4c7abf5ae8cdb0933d71e8c94e04a25619dcee3d2261ad2ee6bf12ffa06d98a0864d87602733ec86a64521f2b18177b200cbbe117577a615d6c770988c0bad946e208e24fa074e5ab3143db5bfce0fd108e4b82d120a92108011a723c12a787e6d788719a10bdba5b2699c327186af4e23c1a946834b6150bda2583e9ca2ad44ce8dbbbc2db04de8ef92e8efc141fbecaa6287c59474e6bc05d99b2964fa090c3a2233ba186515be7ed1f612970cee2d7afb81bdd762170481cd0069127d5b05aa993b4ea988d8fddc186ffb7dc90a6c08f4df435c934063199ffffffffffffffff"
    },
    "modp17": {
        "gen": "02",
        "prime": "ffffffffffffffffc90fdaa22168c234c4c6628b80dc1cd129024e088a67cc74020bbea63b139b22514a08798e3404ddef9519b3cd3a431b302b0a6df25f14374fe1356d6d51c245e485b576625e7ec6f44c42e9a637ed6b0bff5cb6f406b7edee386bfb5a899fa5ae9f24117c4b1fe649286651ece45b3dc2007cb8a163bf0598da48361c55d39a69163fa8fd24cf5f83655d23dca3ad961c62f356208552bb9ed529077096966d670c354e4abc9804f1746c08ca18217c32905e462e36ce3be39e772c180e86039b2783a2ec07a28fb5c55df06f4c52c9de2bcbf6955817183995497cea956ae515d2261898fa051015728e5a8aaac42dad33170d04507a33a85521abdf1cba64ecfb850458dbef0a8aea71575d060c7db3970f85a6e1e4c7abf5ae8cdb0933d71e8c94e04a25619dcee3d2261ad2ee6bf12ffa06d98a0864d87602733ec86a64521f2b18177b200cbbe117577a615d6c770988c0bad946e208e24fa074e5ab3143db5bfce0fd108e4b82d120a92108011a723c12a787e6d788719a10bdba5b2699c327186af4e23c1a946834b6150bda2583e9ca2ad44ce8dbbbc2db04de8ef92e8efc141fbecaa6287c59474e6bc05d99b2964fa090c3a2233ba186515be7ed1f612970cee2d7afb81bdd762170481cd0069127d5b05aa993b4ea988d8fddc186ffb7dc90a6c08f4df435c93402849236c3fab4d27c7026c1d4dcb2602646dec9751e763dba37bdf8ff9406ad9e530ee5db382f413001aeb06a53ed9027d831179727b0865a8918da3edbebcf9b14ed44ce6cbaced4bb1bdb7f1447e6cc254b332051512bd7af426fb8f401378cd2bf5983ca01c64b92ecf032ea15d1721d03f482d7ce6e74fef6d55e702f46980c82b5a84031900b1c9e59e7c97fbec7e8f323a97a7e36cc88be0f1d45b7ff585ac54bd407b22b4154aacc8f6d7ebf48e1d814cc5ed20f8037e0a79715eef29be32806a1d58bb7c5da76f550aa3d8a1fbff0eb19ccb1a313d55cda56c9ec2ef29632387fe8d76e3c0468043e8f663f4860ee12bf2d5b0b7474d6e694f91e6dcc4024ffffffffffffffff"
    },
    "modp18": {
        "gen": "02",
        "prime": "ffffffffffffffffc90fdaa22168c234c4c6628b80dc1cd129024e088a67cc74020bbea63b139b22514a08798e3404ddef9519b3cd3a431b302b0a6df25f14374fe1356d6d51c245e485b576625e7ec6f44c42e9a637ed6b0bff5cb6f406b7edee386bfb5a899fa5ae9f24117c4b1fe649286651ece45b3dc2007cb8a163bf0598da48361c55d39a69163fa8fd24cf5f83655d23dca3ad961c62f356208552bb9ed529077096966d670c354e4abc9804f1746c08ca18217c32905e462e36ce3be39e772c180e86039b2783a2ec07a28fb5c55df06f4c52c9de2bcbf6955817183995497cea956ae515d2261898fa051015728e5a8aaac42dad33170d04507a33a85521abdf1cba64ecfb850458dbef0a8aea71575d060c7db3970f85a6e1e4c7abf5ae8cdb0933d71e8c94e04a25619dcee3d2261ad2ee6bf12ffa06d98a0864d87602733ec86a64521f2b18177b200cbbe117577a615d6c770988c0bad946e208e24fa074e5ab3143db5bfce0fd108e4b82d120a92108011a723c12a787e6d788719a10bdba5b2699c327186af4e23c1a946834b6150bda2583e9ca2ad44ce8dbbbc2db04de8ef92e8efc141fbecaa6287c59474e6bc05d99b2964fa090c3a2233ba186515be7ed1f612970cee2d7afb81bdd762170481cd0069127d5b05aa993b4ea988d8fddc186ffb7dc90a6c08f4df435c93402849236c3fab4d27c7026c1d4dcb2602646dec9751e763dba37bdf8ff9406ad9e530ee5db382f413001aeb06a53ed9027d831179727b0865a8918da3edbebcf9b14ed44ce6cbaced4bb1bdb7f1447e6cc254b332051512bd7af426fb8f401378cd2bf5983ca01c64b92ecf032ea15d1721d03f482d7ce6e74fef6d55e702f46980c82b5a84031900b1c9e59e7c97fbec7e8f323a97a7e36cc88be0f1d45b7ff585ac54bd407b22b4154aacc8f6d7ebf48e1d814cc5ed20f8037e0a79715eef29be32806a1d58bb7c5da76f550aa3d8a1fbff0eb19ccb1a313d55cda56c9ec2ef29632387fe8d76e3c0468043e8f663f4860ee12bf2d5b0b7474d6e694f91e6dbe115974a3926f12fee5e438777cb6a932df8cd8bec4d073b931ba3bc832b68d9dd300741fa7bf8afc47ed2576f6936ba424663aab639c5ae4f5683423b4742bf1c978238f16cbe39d652de3fdb8befc848ad922222e04a4037c0713eb57a81a23f0c73473fc646cea306b4bcbc8862f8385ddfa9d4b7fa2c087e879683303ed5bdd3a062b3cf5b3a278a66d2a13f83f44f82ddf310ee074ab6a364597e899a0255dc164f31cc50846851df9ab48195ded7ea1b1d510bd7ee74d73faf36bc31ecfa268359046f4eb879f924009438b481c6cd7889a002ed5ee382bc9190da6fc026e479558e4475677e9aa9e3050e2765694dfc81f56e880b96e7160c980dd98edd3dfffffffffffffffff"
    }
}
},{}],"/Users/jrmerz/dev/cstars/AHB/farm-budgets-app/node_modules/diffie-hellman/node_modules/bn.js/lib/bn.js":[function(require,module,exports){
arguments[4]["/Users/jrmerz/dev/cstars/AHB/farm-budgets-app/node_modules/browserify-rsa/node_modules/bn.js/lib/bn.js"][0].apply(exports,arguments)
},{}],"/Users/jrmerz/dev/cstars/AHB/farm-budgets-app/node_modules/elliptic/lib/elliptic.js":[function(require,module,exports){
'use strict';

var elliptic = exports;

elliptic.version = require('../package.json').version;
elliptic.utils = require('./elliptic/utils');
elliptic.rand = require('brorand');
elliptic.hmacDRBG = require('./elliptic/hmac-drbg');
elliptic.curve = require('./elliptic/curve');
elliptic.curves = require('./elliptic/curves');

// Protocols
elliptic.ec = require('./elliptic/ec');
elliptic.eddsa = require('./elliptic/eddsa');

},{"../package.json":"/Users/jrmerz/dev/cstars/AHB/farm-budgets-app/node_modules/elliptic/package.json","./elliptic/curve":"/Users/jrmerz/dev/cstars/AHB/farm-budgets-app/node_modules/elliptic/lib/elliptic/curve/index.js","./elliptic/curves":"/Users/jrmerz/dev/cstars/AHB/farm-budgets-app/node_modules/elliptic/lib/elliptic/curves.js","./elliptic/ec":"/Users/jrmerz/dev/cstars/AHB/farm-budgets-app/node_modules/elliptic/lib/elliptic/ec/index.js","./elliptic/eddsa":"/Users/jrmerz/dev/cstars/AHB/farm-budgets-app/node_modules/elliptic/lib/elliptic/eddsa/index.js","./elliptic/hmac-drbg":"/Users/jrmerz/dev/cstars/AHB/farm-budgets-app/node_modules/elliptic/lib/elliptic/hmac-drbg.js","./elliptic/utils":"/Users/jrmerz/dev/cstars/AHB/farm-budgets-app/node_modules/elliptic/lib/elliptic/utils.js","brorand":"/Users/jrmerz/dev/cstars/AHB/farm-budgets-app/node_modules/brorand/index.js"}],"/Users/jrmerz/dev/cstars/AHB/farm-budgets-app/node_modules/elliptic/lib/elliptic/curve/base.js":[function(require,module,exports){
'use strict';

var bn = require('bn.js');
var elliptic = require('../../elliptic');
var utils = elliptic.utils;
var getNAF = utils.getNAF;
var getJSF = utils.getJSF;
var assert = utils.assert;

function BaseCurve(type, conf) {
  this.type = type;
  this.p = new bn(conf.p, 16);

  // Use Montgomery, when there is no fast reduction for the prime
  this.red = conf.prime ? bn.red(conf.prime) : bn.mont(this.p);

  // Useful for many curves
  this.zero = new bn(0).toRed(this.red);
  this.one = new bn(1).toRed(this.red);
  this.two = new bn(2).toRed(this.red);

  // Curve configuration, optional
  this.n = conf.n && new bn(conf.n, 16);
  this.g = conf.g && this.pointFromJSON(conf.g, conf.gRed);

  // Temporary arrays
  this._wnafT1 = new Array(4);
  this._wnafT2 = new Array(4);
  this._wnafT3 = new Array(4);
  this._wnafT4 = new Array(4);
}
module.exports = BaseCurve;

BaseCurve.prototype.point = function point() {
  throw new Error('Not implemented');
};

BaseCurve.prototype.validate = function validate() {
  throw new Error('Not implemented');
};

BaseCurve.prototype._fixedNafMul = function _fixedNafMul(p, k) {
  assert(p.precomputed);
  var doubles = p._getDoubles();

  var naf = getNAF(k, 1);
  var I = (1 << (doubles.step + 1)) - (doubles.step % 2 === 0 ? 2 : 1);
  I /= 3;

  // Translate into more windowed form
  var repr = [];
  for (var j = 0; j < naf.length; j += doubles.step) {
    var nafW = 0;
    for (var k = j + doubles.step - 1; k >= j; k--)
      nafW = (nafW << 1) + naf[k];
    repr.push(nafW);
  }

  var a = this.jpoint(null, null, null);
  var b = this.jpoint(null, null, null);
  for (var i = I; i > 0; i--) {
    for (var j = 0; j < repr.length; j++) {
      var nafW = repr[j];
      if (nafW === i)
        b = b.mixedAdd(doubles.points[j]);
      else if (nafW === -i)
        b = b.mixedAdd(doubles.points[j].neg());
    }
    a = a.add(b);
  }
  return a.toP();
};

BaseCurve.prototype._wnafMul = function _wnafMul(p, k) {
  var w = 4;

  // Precompute window
  var nafPoints = p._getNAFPoints(w);
  w = nafPoints.wnd;
  var wnd = nafPoints.points;

  // Get NAF form
  var naf = getNAF(k, w);

  // Add `this`*(N+1) for every w-NAF index
  var acc = this.jpoint(null, null, null);
  for (var i = naf.length - 1; i >= 0; i--) {
    // Count zeroes
    for (var k = 0; i >= 0 && naf[i] === 0; i--)
      k++;
    if (i >= 0)
      k++;
    acc = acc.dblp(k);

    if (i < 0)
      break;
    var z = naf[i];
    assert(z !== 0);
    if (p.type === 'affine') {
      // J +- P
      if (z > 0)
        acc = acc.mixedAdd(wnd[(z - 1) >> 1]);
      else
        acc = acc.mixedAdd(wnd[(-z - 1) >> 1].neg());
    } else {
      // J +- J
      if (z > 0)
        acc = acc.add(wnd[(z - 1) >> 1]);
      else
        acc = acc.add(wnd[(-z - 1) >> 1].neg());
    }
  }
  return p.type === 'affine' ? acc.toP() : acc;
};

BaseCurve.prototype._wnafMulAdd = function _wnafMulAdd(defW,
                                                       points,
                                                       coeffs,
                                                       len) {
  var wndWidth = this._wnafT1;
  var wnd = this._wnafT2;
  var naf = this._wnafT3;

  // Fill all arrays
  var max = 0;
  for (var i = 0; i < len; i++) {
    var p = points[i];
    var nafPoints = p._getNAFPoints(defW);
    wndWidth[i] = nafPoints.wnd;
    wnd[i] = nafPoints.points;
  }

  // Comb small window NAFs
  for (var i = len - 1; i >= 1; i -= 2) {
    var a = i - 1;
    var b = i;
    if (wndWidth[a] !== 1 || wndWidth[b] !== 1) {
      naf[a] = getNAF(coeffs[a], wndWidth[a]);
      naf[b] = getNAF(coeffs[b], wndWidth[b]);
      max = Math.max(naf[a].length, max);
      max = Math.max(naf[b].length, max);
      continue;
    }

    var comb = [
      points[a], /* 1 */
      null, /* 3 */
      null, /* 5 */
      points[b] /* 7 */
    ];

    // Try to avoid Projective points, if possible
    if (points[a].y.cmp(points[b].y) === 0) {
      comb[1] = points[a].add(points[b]);
      comb[2] = points[a].toJ().mixedAdd(points[b].neg());
    } else if (points[a].y.cmp(points[b].y.redNeg()) === 0) {
      comb[1] = points[a].toJ().mixedAdd(points[b]);
      comb[2] = points[a].add(points[b].neg());
    } else {
      comb[1] = points[a].toJ().mixedAdd(points[b]);
      comb[2] = points[a].toJ().mixedAdd(points[b].neg());
    }

    var index = [
      -3, /* -1 -1 */
      -1, /* -1 0 */
      -5, /* -1 1 */
      -7, /* 0 -1 */
      0, /* 0 0 */
      7, /* 0 1 */
      5, /* 1 -1 */
      1, /* 1 0 */
      3  /* 1 1 */
    ];

    var jsf = getJSF(coeffs[a], coeffs[b]);
    max = Math.max(jsf[0].length, max);
    naf[a] = new Array(max);
    naf[b] = new Array(max);
    for (var j = 0; j < max; j++) {
      var ja = jsf[0][j] | 0;
      var jb = jsf[1][j] | 0;

      naf[a][j] = index[(ja + 1) * 3 + (jb + 1)];
      naf[b][j] = 0;
      wnd[a] = comb;
    }
  }

  var acc = this.jpoint(null, null, null);
  var tmp = this._wnafT4;
  for (var i = max; i >= 0; i--) {
    var k = 0;

    while (i >= 0) {
      var zero = true;
      for (var j = 0; j < len; j++) {
        tmp[j] = naf[j][i] | 0;
        if (tmp[j] !== 0)
          zero = false;
      }
      if (!zero)
        break;
      k++;
      i--;
    }
    if (i >= 0)
      k++;
    acc = acc.dblp(k);
    if (i < 0)
      break;

    for (var j = 0; j < len; j++) {
      var z = tmp[j];
      var p;
      if (z === 0)
        continue;
      else if (z > 0)
        p = wnd[j][(z - 1) >> 1];
      else if (z < 0)
        p = wnd[j][(-z - 1) >> 1].neg();

      if (p.type === 'affine')
        acc = acc.mixedAdd(p);
      else
        acc = acc.add(p);
    }
  }
  // Zeroify references
  for (var i = 0; i < len; i++)
    wnd[i] = null;
  return acc.toP();
};

function BasePoint(curve, type) {
  this.curve = curve;
  this.type = type;
  this.precomputed = null;
}
BaseCurve.BasePoint = BasePoint;

BasePoint.prototype.eq = function eq(/*other*/) {
  throw new Error('Not implemented');
};

BasePoint.prototype.validate = function validate() {
  return this.curve.validate(this);
};

BaseCurve.prototype.decodePoint = function decodePoint(bytes, enc) {
  bytes = utils.toArray(bytes, enc);

  var len = this.p.byteLength();
  if (bytes[0] === 0x04 && bytes.length - 1 === 2 * len) {
    return this.point(bytes.slice(1, 1 + len),
                      bytes.slice(1 + len, 1 + 2 * len));
  } else if ((bytes[0] === 0x02 || bytes[0] === 0x03) &&
              bytes.length - 1 === len) {
    return this.pointFromX(bytes.slice(1, 1 + len), bytes[0] === 0x03);
  }
  throw new Error('Unknown point format');
};

BasePoint.prototype.encodeCompressed = function encodeCompressed(enc) {
  return this.encode(enc, true);
};

BasePoint.prototype._encode = function _encode(compact) {
  var len = this.curve.p.byteLength();
  var x = this.getX().toArray('be', len);

  if (compact)
    return [ this.getY().isEven() ? 0x02 : 0x03 ].concat(x);

  return [ 0x04 ].concat(x, this.getY().toArray('be', len)) ;
};

BasePoint.prototype.encode = function encode(enc, compact) {
  return utils.encode(this._encode(compact), enc);
};

BasePoint.prototype.precompute = function precompute(power) {
  if (this.precomputed)
    return this;

  var precomputed = {
    doubles: null,
    naf: null,
    beta: null
  };
  precomputed.naf = this._getNAFPoints(8);
  precomputed.doubles = this._getDoubles(4, power);
  precomputed.beta = this._getBeta();
  this.precomputed = precomputed;

  return this;
};

BasePoint.prototype._hasDoubles = function _hasDoubles(k) {
  if (!this.precomputed)
    return false;

  var doubles = this.precomputed.doubles;
  if (!doubles)
    return false;

  return doubles.points.length >= Math.ceil((k.bitLength() + 1) / doubles.step);
};

BasePoint.prototype._getDoubles = function _getDoubles(step, power) {
  if (this.precomputed && this.precomputed.doubles)
    return this.precomputed.doubles;

  var doubles = [ this ];
  var acc = this;
  for (var i = 0; i < power; i += step) {
    for (var j = 0; j < step; j++)
      acc = acc.dbl();
    doubles.push(acc);
  }
  return {
    step: step,
    points: doubles
  };
};

BasePoint.prototype._getNAFPoints = function _getNAFPoints(wnd) {
  if (this.precomputed && this.precomputed.naf)
    return this.precomputed.naf;

  var res = [ this ];
  var max = (1 << wnd) - 1;
  var dbl = max === 1 ? null : this.dbl();
  for (var i = 1; i < max; i++)
    res[i] = res[i - 1].add(dbl);
  return {
    wnd: wnd,
    points: res
  };
};

BasePoint.prototype._getBeta = function _getBeta() {
  return null;
};

BasePoint.prototype.dblp = function dblp(k) {
  var r = this;
  for (var i = 0; i < k; i++)
    r = r.dbl();
  return r;
};

},{"../../elliptic":"/Users/jrmerz/dev/cstars/AHB/farm-budgets-app/node_modules/elliptic/lib/elliptic.js","bn.js":"/Users/jrmerz/dev/cstars/AHB/farm-budgets-app/node_modules/elliptic/node_modules/bn.js/lib/bn.js"}],"/Users/jrmerz/dev/cstars/AHB/farm-budgets-app/node_modules/elliptic/lib/elliptic/curve/edwards.js":[function(require,module,exports){
'use strict';

var curve = require('../curve');
var elliptic = require('../../elliptic');
var bn = require('bn.js');
var inherits = require('inherits');
var Base = curve.base;

var assert = elliptic.utils.assert;

function EdwardsCurve(conf) {
  // NOTE: Important as we are creating point in Base.call()
  this.twisted = (conf.a | 0) !== 1;
  this.mOneA = this.twisted && (conf.a | 0) === -1;
  this.extended = this.mOneA;

  Base.call(this, 'edwards', conf);

  this.a = new bn(conf.a, 16).umod(this.red.m);
  this.a = this.a.toRed(this.red);
  this.c = new bn(conf.c, 16).toRed(this.red);
  this.c2 = this.c.redSqr();
  this.d = new bn(conf.d, 16).toRed(this.red);
  this.dd = this.d.redAdd(this.d);

  assert(!this.twisted || this.c.fromRed().cmpn(1) === 0);
  this.oneC = (conf.c | 0) === 1;
}
inherits(EdwardsCurve, Base);
module.exports = EdwardsCurve;

EdwardsCurve.prototype._mulA = function _mulA(num) {
  if (this.mOneA)
    return num.redNeg();
  else
    return this.a.redMul(num);
};

EdwardsCurve.prototype._mulC = function _mulC(num) {
  if (this.oneC)
    return num;
  else
    return this.c.redMul(num);
};

// Just for compatibility with Short curve
EdwardsCurve.prototype.jpoint = function jpoint(x, y, z, t) {
  return this.point(x, y, z, t);
};

EdwardsCurve.prototype.pointFromX = function pointFromX(x, odd) {
  x = new bn(x, 16);
  if (!x.red)
    x = x.toRed(this.red);

  var x2 = x.redSqr();
  var rhs = this.c2.redSub(this.a.redMul(x2));
  var lhs = this.one.redSub(this.c2.redMul(this.d).redMul(x2));

  var y = rhs.redMul(lhs.redInvm()).redSqrt();
  var isOdd = y.fromRed().isOdd();
  if (odd && !isOdd || !odd && isOdd)
    y = y.redNeg();

  return this.point(x, y);
};

EdwardsCurve.prototype.pointFromY = function pointFromY(y, odd) {
  y = new bn(y, 16);
  if (!y.red)
    y = y.toRed(this.red);

  // x^2 = (y^2 - 1) / (d y^2 + 1)
  var y2 = y.redSqr();
  var lhs = y2.redSub(this.one);
  var rhs = y2.redMul(this.d).redAdd(this.one);
  var x2 = lhs.redMul(rhs.redInvm());

  if (x2.cmp(this.zero) === 0) {
    if (odd)
      throw new Error('invalid point');
    else
      return this.point(this.zero, y);
  }

  var x = x2.redSqrt();
  if (x.redSqr().redSub(x2).cmp(this.zero) !== 0)
    throw new Error('invalid point');

  if (x.isOdd() !== odd)
    x = x.redNeg();

  return this.point(x, y);
};

EdwardsCurve.prototype.validate = function validate(point) {
  if (point.isInfinity())
    return true;

  // Curve: A * X^2 + Y^2 = C^2 * (1 + D * X^2 * Y^2)
  point.normalize();

  var x2 = point.x.redSqr();
  var y2 = point.y.redSqr();
  var lhs = x2.redMul(this.a).redAdd(y2);
  var rhs = this.c2.redMul(this.one.redAdd(this.d.redMul(x2).redMul(y2)));

  return lhs.cmp(rhs) === 0;
};

function Point(curve, x, y, z, t) {
  Base.BasePoint.call(this, curve, 'projective');
  if (x === null && y === null && z === null) {
    this.x = this.curve.zero;
    this.y = this.curve.one;
    this.z = this.curve.one;
    this.t = this.curve.zero;
    this.zOne = true;
  } else {
    this.x = new bn(x, 16);
    this.y = new bn(y, 16);
    this.z = z ? new bn(z, 16) : this.curve.one;
    this.t = t && new bn(t, 16);
    if (!this.x.red)
      this.x = this.x.toRed(this.curve.red);
    if (!this.y.red)
      this.y = this.y.toRed(this.curve.red);
    if (!this.z.red)
      this.z = this.z.toRed(this.curve.red);
    if (this.t && !this.t.red)
      this.t = this.t.toRed(this.curve.red);
    this.zOne = this.z === this.curve.one;

    // Use extended coordinates
    if (this.curve.extended && !this.t) {
      this.t = this.x.redMul(this.y);
      if (!this.zOne)
        this.t = this.t.redMul(this.z.redInvm());
    }
  }
}
inherits(Point, Base.BasePoint);

EdwardsCurve.prototype.pointFromJSON = function pointFromJSON(obj) {
  return Point.fromJSON(this, obj);
};

EdwardsCurve.prototype.point = function point(x, y, z, t) {
  return new Point(this, x, y, z, t);
};

Point.fromJSON = function fromJSON(curve, obj) {
  return new Point(curve, obj[0], obj[1], obj[2]);
};

Point.prototype.inspect = function inspect() {
  if (this.isInfinity())
    return '<EC Point Infinity>';
  return '<EC Point x: ' + this.x.fromRed().toString(16, 2) +
      ' y: ' + this.y.fromRed().toString(16, 2) +
      ' z: ' + this.z.fromRed().toString(16, 2) + '>';
};

Point.prototype.isInfinity = function isInfinity() {
  // XXX This code assumes that zero is always zero in red
  return this.x.cmpn(0) === 0 &&
         this.y.cmp(this.z) === 0;
};

Point.prototype._extDbl = function _extDbl() {
  // hyperelliptic.org/EFD/g1p/auto-twisted-extended-1.html
  //     #doubling-dbl-2008-hwcd
  // 4M + 4S

  // A = X1^2
  var a = this.x.redSqr();
  // B = Y1^2
  var b = this.y.redSqr();
  // C = 2 * Z1^2
  var c = this.z.redSqr();
  c = c.redIAdd(c);
  // D = a * A
  var d = this.curve._mulA(a);
  // E = (X1 + Y1)^2 - A - B
  var e = this.x.redAdd(this.y).redSqr().redISub(a).redISub(b);
  // G = D + B
  var g = d.redAdd(b);
  // F = G - C
  var f = g.redSub(c);
  // H = D - B
  var h = d.redSub(b);
  // X3 = E * F
  var nx = e.redMul(f);
  // Y3 = G * H
  var ny = g.redMul(h);
  // T3 = E * H
  var nt = e.redMul(h);
  // Z3 = F * G
  var nz = f.redMul(g);
  return this.curve.point(nx, ny, nz, nt);
};

Point.prototype._projDbl = function _projDbl() {
  // hyperelliptic.org/EFD/g1p/auto-twisted-projective.html
  //     #doubling-dbl-2008-bbjlp
  //     #doubling-dbl-2007-bl
  // and others
  // Generally 3M + 4S or 2M + 4S

  // B = (X1 + Y1)^2
  var b = this.x.redAdd(this.y).redSqr();
  // C = X1^2
  var c = this.x.redSqr();
  // D = Y1^2
  var d = this.y.redSqr();

  var nx;
  var ny;
  var nz;
  if (this.curve.twisted) {
    // E = a * C
    var e = this.curve._mulA(c);
    // F = E + D
    var f = e.redAdd(d);
    if (this.zOne) {
      // X3 = (B - C - D) * (F - 2)
      nx = b.redSub(c).redSub(d).redMul(f.redSub(this.curve.two));
      // Y3 = F * (E - D)
      ny = f.redMul(e.redSub(d));
      // Z3 = F^2 - 2 * F
      nz = f.redSqr().redSub(f).redSub(f);
    } else {
      // H = Z1^2
      var h = this.z.redSqr();
      // J = F - 2 * H
      var j = f.redSub(h).redISub(h);
      // X3 = (B-C-D)*J
      nx = b.redSub(c).redISub(d).redMul(j);
      // Y3 = F * (E - D)
      ny = f.redMul(e.redSub(d));
      // Z3 = F * J
      nz = f.redMul(j);
    }
  } else {
    // E = C + D
    var e = c.redAdd(d);
    // H = (c * Z1)^2
    var h = this.curve._mulC(this.c.redMul(this.z)).redSqr();
    // J = E - 2 * H
    var j = e.redSub(h).redSub(h);
    // X3 = c * (B - E) * J
    nx = this.curve._mulC(b.redISub(e)).redMul(j);
    // Y3 = c * E * (C - D)
    ny = this.curve._mulC(e).redMul(c.redISub(d));
    // Z3 = E * J
    nz = e.redMul(j);
  }
  return this.curve.point(nx, ny, nz);
};

Point.prototype.dbl = function dbl() {
  if (this.isInfinity())
    return this;

  // Double in extended coordinates
  if (this.curve.extended)
    return this._extDbl();
  else
    return this._projDbl();
};

Point.prototype._extAdd = function _extAdd(p) {
  // hyperelliptic.org/EFD/g1p/auto-twisted-extended-1.html
  //     #addition-add-2008-hwcd-3
  // 8M

  // A = (Y1 - X1) * (Y2 - X2)
  var a = this.y.redSub(this.x).redMul(p.y.redSub(p.x));
  // B = (Y1 + X1) * (Y2 + X2)
  var b = this.y.redAdd(this.x).redMul(p.y.redAdd(p.x));
  // C = T1 * k * T2
  var c = this.t.redMul(this.curve.dd).redMul(p.t);
  // D = Z1 * 2 * Z2
  var d = this.z.redMul(p.z.redAdd(p.z));
  // E = B - A
  var e = b.redSub(a);
  // F = D - C
  var f = d.redSub(c);
  // G = D + C
  var g = d.redAdd(c);
  // H = B + A
  var h = b.redAdd(a);
  // X3 = E * F
  var nx = e.redMul(f);
  // Y3 = G * H
  var ny = g.redMul(h);
  // T3 = E * H
  var nt = e.redMul(h);
  // Z3 = F * G
  var nz = f.redMul(g);
  return this.curve.point(nx, ny, nz, nt);
};

Point.prototype._projAdd = function _projAdd(p) {
  // hyperelliptic.org/EFD/g1p/auto-twisted-projective.html
  //     #addition-add-2008-bbjlp
  //     #addition-add-2007-bl
  // 10M + 1S

  // A = Z1 * Z2
  var a = this.z.redMul(p.z);
  // B = A^2
  var b = a.redSqr();
  // C = X1 * X2
  var c = this.x.redMul(p.x);
  // D = Y1 * Y2
  var d = this.y.redMul(p.y);
  // E = d * C * D
  var e = this.curve.d.redMul(c).redMul(d);
  // F = B - E
  var f = b.redSub(e);
  // G = B + E
  var g = b.redAdd(e);
  // X3 = A * F * ((X1 + Y1) * (X2 + Y2) - C - D)
  var tmp = this.x.redAdd(this.y).redMul(p.x.redAdd(p.y)).redISub(c).redISub(d);
  var nx = a.redMul(f).redMul(tmp);
  var ny;
  var nz;
  if (this.curve.twisted) {
    // Y3 = A * G * (D - a * C)
    ny = a.redMul(g).redMul(d.redSub(this.curve._mulA(c)));
    // Z3 = F * G
    nz = f.redMul(g);
  } else {
    // Y3 = A * G * (D - C)
    ny = a.redMul(g).redMul(d.redSub(c));
    // Z3 = c * F * G
    nz = this.curve._mulC(f).redMul(g);
  }
  return this.curve.point(nx, ny, nz);
};

Point.prototype.add = function add(p) {
  if (this.isInfinity())
    return p;
  if (p.isInfinity())
    return this;

  if (this.curve.extended)
    return this._extAdd(p);
  else
    return this._projAdd(p);
};

Point.prototype.mul = function mul(k) {
  if (this._hasDoubles(k))
    return this.curve._fixedNafMul(this, k);
  else
    return this.curve._wnafMul(this, k);
};

Point.prototype.mulAdd = function mulAdd(k1, p, k2) {
  return this.curve._wnafMulAdd(1, [ this, p ], [ k1, k2 ], 2);
};

Point.prototype.normalize = function normalize() {
  if (this.zOne)
    return this;

  // Normalize coordinates
  var zi = this.z.redInvm();
  this.x = this.x.redMul(zi);
  this.y = this.y.redMul(zi);
  if (this.t)
    this.t = this.t.redMul(zi);
  this.z = this.curve.one;
  this.zOne = true;
  return this;
};

Point.prototype.neg = function neg() {
  return this.curve.point(this.x.redNeg(),
                          this.y,
                          this.z,
                          this.t && this.t.redNeg());
};

Point.prototype.getX = function getX() {
  this.normalize();
  return this.x.fromRed();
};

Point.prototype.getY = function getY() {
  this.normalize();
  return this.y.fromRed();
};

Point.prototype.eq = function eq(other) {
  return this === other ||
         this.getX().cmp(other.getX()) === 0 &&
         this.getY().cmp(other.getY()) === 0;
};

// Compatibility with BaseCurve
Point.prototype.toP = Point.prototype.normalize;
Point.prototype.mixedAdd = Point.prototype.add;

},{"../../elliptic":"/Users/jrmerz/dev/cstars/AHB/farm-budgets-app/node_modules/elliptic/lib/elliptic.js","../curve":"/Users/jrmerz/dev/cstars/AHB/farm-budgets-app/node_modules/elliptic/lib/elliptic/curve/index.js","bn.js":"/Users/jrmerz/dev/cstars/AHB/farm-budgets-app/node_modules/elliptic/node_modules/bn.js/lib/bn.js","inherits":"/Users/jrmerz/dev/cstars/AHB/farm-budgets-app/node_modules/inherits/inherits_browser.js"}],"/Users/jrmerz/dev/cstars/AHB/farm-budgets-app/node_modules/elliptic/lib/elliptic/curve/index.js":[function(require,module,exports){
'use strict';

var curve = exports;

curve.base = require('./base');
curve.short = require('./short');
curve.mont = require('./mont');
curve.edwards = require('./edwards');

},{"./base":"/Users/jrmerz/dev/cstars/AHB/farm-budgets-app/node_modules/elliptic/lib/elliptic/curve/base.js","./edwards":"/Users/jrmerz/dev/cstars/AHB/farm-budgets-app/node_modules/elliptic/lib/elliptic/curve/edwards.js","./mont":"/Users/jrmerz/dev/cstars/AHB/farm-budgets-app/node_modules/elliptic/lib/elliptic/curve/mont.js","./short":"/Users/jrmerz/dev/cstars/AHB/farm-budgets-app/node_modules/elliptic/lib/elliptic/curve/short.js"}],"/Users/jrmerz/dev/cstars/AHB/farm-budgets-app/node_modules/elliptic/lib/elliptic/curve/mont.js":[function(require,module,exports){
'use strict';

var curve = require('../curve');
var bn = require('bn.js');
var inherits = require('inherits');
var Base = curve.base;

var elliptic = require('../../elliptic');
var utils = elliptic.utils;

function MontCurve(conf) {
  Base.call(this, 'mont', conf);

  this.a = new bn(conf.a, 16).toRed(this.red);
  this.b = new bn(conf.b, 16).toRed(this.red);
  this.i4 = new bn(4).toRed(this.red).redInvm();
  this.two = new bn(2).toRed(this.red);
  this.a24 = this.i4.redMul(this.a.redAdd(this.two));
}
inherits(MontCurve, Base);
module.exports = MontCurve;

MontCurve.prototype.validate = function validate(point) {
  var x = point.normalize().x;
  var x2 = x.redSqr();
  var rhs = x2.redMul(x).redAdd(x2.redMul(this.a)).redAdd(x);
  var y = rhs.redSqrt();

  return y.redSqr().cmp(rhs) === 0;
};

function Point(curve, x, z) {
  Base.BasePoint.call(this, curve, 'projective');
  if (x === null && z === null) {
    this.x = this.curve.one;
    this.z = this.curve.zero;
  } else {
    this.x = new bn(x, 16);
    this.z = new bn(z, 16);
    if (!this.x.red)
      this.x = this.x.toRed(this.curve.red);
    if (!this.z.red)
      this.z = this.z.toRed(this.curve.red);
  }
}
inherits(Point, Base.BasePoint);

MontCurve.prototype.decodePoint = function decodePoint(bytes, enc) {
  return this.point(utils.toArray(bytes, enc), 1);
};

MontCurve.prototype.point = function point(x, z) {
  return new Point(this, x, z);
};

MontCurve.prototype.pointFromJSON = function pointFromJSON(obj) {
  return Point.fromJSON(this, obj);
};

Point.prototype.precompute = function precompute() {
  // No-op
};

Point.prototype._encode = function _encode() {
  return this.getX().toArray('be', this.curve.p.byteLength());
};

Point.fromJSON = function fromJSON(curve, obj) {
  return new Point(curve, obj[0], obj[1] || curve.one);
};

Point.prototype.inspect = function inspect() {
  if (this.isInfinity())
    return '<EC Point Infinity>';
  return '<EC Point x: ' + this.x.fromRed().toString(16, 2) +
      ' z: ' + this.z.fromRed().toString(16, 2) + '>';
};

Point.prototype.isInfinity = function isInfinity() {
  // XXX This code assumes that zero is always zero in red
  return this.z.cmpn(0) === 0;
};

Point.prototype.dbl = function dbl() {
  // http://hyperelliptic.org/EFD/g1p/auto-montgom-xz.html#doubling-dbl-1987-m-3
  // 2M + 2S + 4A

  // A = X1 + Z1
  var a = this.x.redAdd(this.z);
  // AA = A^2
  var aa = a.redSqr();
  // B = X1 - Z1
  var b = this.x.redSub(this.z);
  // BB = B^2
  var bb = b.redSqr();
  // C = AA - BB
  var c = aa.redSub(bb);
  // X3 = AA * BB
  var nx = aa.redMul(bb);
  // Z3 = C * (BB + A24 * C)
  var nz = c.redMul(bb.redAdd(this.curve.a24.redMul(c)));
  return this.curve.point(nx, nz);
};

Point.prototype.add = function add() {
  throw new Error('Not supported on Montgomery curve');
};

Point.prototype.diffAdd = function diffAdd(p, diff) {
  // http://hyperelliptic.org/EFD/g1p/auto-montgom-xz.html#diffadd-dadd-1987-m-3
  // 4M + 2S + 6A

  // A = X2 + Z2
  var a = this.x.redAdd(this.z);
  // B = X2 - Z2
  var b = this.x.redSub(this.z);
  // C = X3 + Z3
  var c = p.x.redAdd(p.z);
  // D = X3 - Z3
  var d = p.x.redSub(p.z);
  // DA = D * A
  var da = d.redMul(a);
  // CB = C * B
  var cb = c.redMul(b);
  // X5 = Z1 * (DA + CB)^2
  var nx = diff.z.redMul(da.redAdd(cb).redSqr());
  // Z5 = X1 * (DA - CB)^2
  var nz = diff.x.redMul(da.redISub(cb).redSqr());
  return this.curve.point(nx, nz);
};

Point.prototype.mul = function mul(k) {
  var t = k.clone();
  var a = this; // (N / 2) * Q + Q
  var b = this.curve.point(null, null); // (N / 2) * Q
  var c = this; // Q

  for (var bits = []; t.cmpn(0) !== 0; t.iushrn(1))
    bits.push(t.andln(1));

  for (var i = bits.length - 1; i >= 0; i--) {
    if (bits[i] === 0) {
      // N * Q + Q = ((N / 2) * Q + Q)) + (N / 2) * Q
      a = a.diffAdd(b, c);
      // N * Q = 2 * ((N / 2) * Q + Q))
      b = b.dbl();
    } else {
      // N * Q = ((N / 2) * Q + Q) + ((N / 2) * Q)
      b = a.diffAdd(b, c);
      // N * Q + Q = 2 * ((N / 2) * Q + Q)
      a = a.dbl();
    }
  }
  return b;
};

Point.prototype.mulAdd = function mulAdd() {
  throw new Error('Not supported on Montgomery curve');
};

Point.prototype.eq = function eq(other) {
  return this.getX().cmp(other.getX()) === 0;
};

Point.prototype.normalize = function normalize() {
  this.x = this.x.redMul(this.z.redInvm());
  this.z = this.curve.one;
  return this;
};

Point.prototype.getX = function getX() {
  // Normalize coordinates
  this.normalize();

  return this.x.fromRed();
};

},{"../../elliptic":"/Users/jrmerz/dev/cstars/AHB/farm-budgets-app/node_modules/elliptic/lib/elliptic.js","../curve":"/Users/jrmerz/dev/cstars/AHB/farm-budgets-app/node_modules/elliptic/lib/elliptic/curve/index.js","bn.js":"/Users/jrmerz/dev/cstars/AHB/farm-budgets-app/node_modules/elliptic/node_modules/bn.js/lib/bn.js","inherits":"/Users/jrmerz/dev/cstars/AHB/farm-budgets-app/node_modules/inherits/inherits_browser.js"}],"/Users/jrmerz/dev/cstars/AHB/farm-budgets-app/node_modules/elliptic/lib/elliptic/curve/short.js":[function(require,module,exports){
'use strict';

var curve = require('../curve');
var elliptic = require('../../elliptic');
var bn = require('bn.js');
var inherits = require('inherits');
var Base = curve.base;

var assert = elliptic.utils.assert;

function ShortCurve(conf) {
  Base.call(this, 'short', conf);

  this.a = new bn(conf.a, 16).toRed(this.red);
  this.b = new bn(conf.b, 16).toRed(this.red);
  this.tinv = this.two.redInvm();

  this.zeroA = this.a.fromRed().cmpn(0) === 0;
  this.threeA = this.a.fromRed().sub(this.p).cmpn(-3) === 0;

  // If the curve is endomorphic, precalculate beta and lambda
  this.endo = this._getEndomorphism(conf);
  this._endoWnafT1 = new Array(4);
  this._endoWnafT2 = new Array(4);
}
inherits(ShortCurve, Base);
module.exports = ShortCurve;

ShortCurve.prototype._getEndomorphism = function _getEndomorphism(conf) {
  // No efficient endomorphism
  if (!this.zeroA || !this.g || !this.n || this.p.modn(3) !== 1)
    return;

  // Compute beta and lambda, that lambda * P = (beta * Px; Py)
  var beta;
  var lambda;
  if (conf.beta) {
    beta = new bn(conf.beta, 16).toRed(this.red);
  } else {
    var betas = this._getEndoRoots(this.p);
    // Choose the smallest beta
    beta = betas[0].cmp(betas[1]) < 0 ? betas[0] : betas[1];
    beta = beta.toRed(this.red);
  }
  if (conf.lambda) {
    lambda = new bn(conf.lambda, 16);
  } else {
    // Choose the lambda that is matching selected beta
    var lambdas = this._getEndoRoots(this.n);
    if (this.g.mul(lambdas[0]).x.cmp(this.g.x.redMul(beta)) === 0) {
      lambda = lambdas[0];
    } else {
      lambda = lambdas[1];
      assert(this.g.mul(lambda).x.cmp(this.g.x.redMul(beta)) === 0);
    }
  }

  // Get basis vectors, used for balanced length-two representation
  var basis;
  if (conf.basis) {
    basis = conf.basis.map(function(vec) {
      return {
        a: new bn(vec.a, 16),
        b: new bn(vec.b, 16)
      };
    });
  } else {
    basis = this._getEndoBasis(lambda);
  }

  return {
    beta: beta,
    lambda: lambda,
    basis: basis
  };
};

ShortCurve.prototype._getEndoRoots = function _getEndoRoots(num) {
  // Find roots of for x^2 + x + 1 in F
  // Root = (-1 +- Sqrt(-3)) / 2
  //
  var red = num === this.p ? this.red : bn.mont(num);
  var tinv = new bn(2).toRed(red).redInvm();
  var ntinv = tinv.redNeg();

  var s = new bn(3).toRed(red).redNeg().redSqrt().redMul(tinv);

  var l1 = ntinv.redAdd(s).fromRed();
  var l2 = ntinv.redSub(s).fromRed();
  return [ l1, l2 ];
};

ShortCurve.prototype._getEndoBasis = function _getEndoBasis(lambda) {
  // aprxSqrt >= sqrt(this.n)
  var aprxSqrt = this.n.ushrn(Math.floor(this.n.bitLength() / 2));

  // 3.74
  // Run EGCD, until r(L + 1) < aprxSqrt
  var u = lambda;
  var v = this.n.clone();
  var x1 = new bn(1);
  var y1 = new bn(0);
  var x2 = new bn(0);
  var y2 = new bn(1);

  // NOTE: all vectors are roots of: a + b * lambda = 0 (mod n)
  var a0;
  var b0;
  // First vector
  var a1;
  var b1;
  // Second vector
  var a2;
  var b2;

  var prevR;
  var i = 0;
  var r;
  var x;
  while (u.cmpn(0) !== 0) {
    var q = v.div(u);
    r = v.sub(q.mul(u));
    x = x2.sub(q.mul(x1));
    var y = y2.sub(q.mul(y1));

    if (!a1 && r.cmp(aprxSqrt) < 0) {
      a0 = prevR.neg();
      b0 = x1;
      a1 = r.neg();
      b1 = x;
    } else if (a1 && ++i === 2) {
      break;
    }
    prevR = r;

    v = u;
    u = r;
    x2 = x1;
    x1 = x;
    y2 = y1;
    y1 = y;
  }
  a2 = r.neg();
  b2 = x;

  var len1 = a1.sqr().add(b1.sqr());
  var len2 = a2.sqr().add(b2.sqr());
  if (len2.cmp(len1) >= 0) {
    a2 = a0;
    b2 = b0;
  }

  // Normalize signs
  if (a1.negative) {
    a1 = a1.neg();
    b1 = b1.neg();
  }
  if (a2.negative) {
    a2 = a2.neg();
    b2 = b2.neg();
  }

  return [
    { a: a1, b: b1 },
    { a: a2, b: b2 }
  ];
};

ShortCurve.prototype._endoSplit = function _endoSplit(k) {
  var basis = this.endo.basis;
  var v1 = basis[0];
  var v2 = basis[1];

  var c1 = v2.b.mul(k).divRound(this.n);
  var c2 = v1.b.neg().mul(k).divRound(this.n);

  var p1 = c1.mul(v1.a);
  var p2 = c2.mul(v2.a);
  var q1 = c1.mul(v1.b);
  var q2 = c2.mul(v2.b);

  // Calculate answer
  var k1 = k.sub(p1).sub(p2);
  var k2 = q1.add(q2).neg();
  return { k1: k1, k2: k2 };
};

ShortCurve.prototype.pointFromX = function pointFromX(x, odd) {
  x = new bn(x, 16);
  if (!x.red)
    x = x.toRed(this.red);

  var y2 = x.redSqr().redMul(x).redIAdd(x.redMul(this.a)).redIAdd(this.b);
  var y = y2.redSqrt();

  // XXX Is there any way to tell if the number is odd without converting it
  // to non-red form?
  var isOdd = y.fromRed().isOdd();
  if (odd && !isOdd || !odd && isOdd)
    y = y.redNeg();

  return this.point(x, y);
};

ShortCurve.prototype.validate = function validate(point) {
  if (point.inf)
    return true;

  var x = point.x;
  var y = point.y;

  var ax = this.a.redMul(x);
  var rhs = x.redSqr().redMul(x).redIAdd(ax).redIAdd(this.b);
  return y.redSqr().redISub(rhs).cmpn(0) === 0;
};

ShortCurve.prototype._endoWnafMulAdd =
    function _endoWnafMulAdd(points, coeffs) {
  var npoints = this._endoWnafT1;
  var ncoeffs = this._endoWnafT2;
  for (var i = 0; i < points.length; i++) {
    var split = this._endoSplit(coeffs[i]);
    var p = points[i];
    var beta = p._getBeta();

    if (split.k1.negative) {
      split.k1.ineg();
      p = p.neg(true);
    }
    if (split.k2.negative) {
      split.k2.ineg();
      beta = beta.neg(true);
    }

    npoints[i * 2] = p;
    npoints[i * 2 + 1] = beta;
    ncoeffs[i * 2] = split.k1;
    ncoeffs[i * 2 + 1] = split.k2;
  }
  var res = this._wnafMulAdd(1, npoints, ncoeffs, i * 2);

  // Clean-up references to points and coefficients
  for (var j = 0; j < i * 2; j++) {
    npoints[j] = null;
    ncoeffs[j] = null;
  }
  return res;
};

function Point(curve, x, y, isRed) {
  Base.BasePoint.call(this, curve, 'affine');
  if (x === null && y === null) {
    this.x = null;
    this.y = null;
    this.inf = true;
  } else {
    this.x = new bn(x, 16);
    this.y = new bn(y, 16);
    // Force redgomery representation when loading from JSON
    if (isRed) {
      this.x.forceRed(this.curve.red);
      this.y.forceRed(this.curve.red);
    }
    if (!this.x.red)
      this.x = this.x.toRed(this.curve.red);
    if (!this.y.red)
      this.y = this.y.toRed(this.curve.red);
    this.inf = false;
  }
}
inherits(Point, Base.BasePoint);

ShortCurve.prototype.point = function point(x, y, isRed) {
  return new Point(this, x, y, isRed);
};

ShortCurve.prototype.pointFromJSON = function pointFromJSON(obj, red) {
  return Point.fromJSON(this, obj, red);
};

Point.prototype._getBeta = function _getBeta() {
  if (!this.curve.endo)
    return;

  var pre = this.precomputed;
  if (pre && pre.beta)
    return pre.beta;

  var beta = this.curve.point(this.x.redMul(this.curve.endo.beta), this.y);
  if (pre) {
    var curve = this.curve;
    var endoMul = function(p) {
      return curve.point(p.x.redMul(curve.endo.beta), p.y);
    };
    pre.beta = beta;
    beta.precomputed = {
      beta: null,
      naf: pre.naf && {
        wnd: pre.naf.wnd,
        points: pre.naf.points.map(endoMul)
      },
      doubles: pre.doubles && {
        step: pre.doubles.step,
        points: pre.doubles.points.map(endoMul)
      }
    };
  }
  return beta;
};

Point.prototype.toJSON = function toJSON() {
  if (!this.precomputed)
    return [ this.x, this.y ];

  return [ this.x, this.y, this.precomputed && {
    doubles: this.precomputed.doubles && {
      step: this.precomputed.doubles.step,
      points: this.precomputed.doubles.points.slice(1)
    },
    naf: this.precomputed.naf && {
      wnd: this.precomputed.naf.wnd,
      points: this.precomputed.naf.points.slice(1)
    }
  } ];
};

Point.fromJSON = function fromJSON(curve, obj, red) {
  if (typeof obj === 'string')
    obj = JSON.parse(obj);
  var res = curve.point(obj[0], obj[1], red);
  if (!obj[2])
    return res;

  function obj2point(obj) {
    return curve.point(obj[0], obj[1], red);
  }

  var pre = obj[2];
  res.precomputed = {
    beta: null,
    doubles: pre.doubles && {
      step: pre.doubles.step,
      points: [ res ].concat(pre.doubles.points.map(obj2point))
    },
    naf: pre.naf && {
      wnd: pre.naf.wnd,
      points: [ res ].concat(pre.naf.points.map(obj2point))
    }
  };
  return res;
};

Point.prototype.inspect = function inspect() {
  if (this.isInfinity())
    return '<EC Point Infinity>';
  return '<EC Point x: ' + this.x.fromRed().toString(16, 2) +
      ' y: ' + this.y.fromRed().toString(16, 2) + '>';
};

Point.prototype.isInfinity = function isInfinity() {
  return this.inf;
};

Point.prototype.add = function add(p) {
  // O + P = P
  if (this.inf)
    return p;

  // P + O = P
  if (p.inf)
    return this;

  // P + P = 2P
  if (this.eq(p))
    return this.dbl();

  // P + (-P) = O
  if (this.neg().eq(p))
    return this.curve.point(null, null);

  // P + Q = O
  if (this.x.cmp(p.x) === 0)
    return this.curve.point(null, null);

  var c = this.y.redSub(p.y);
  if (c.cmpn(0) !== 0)
    c = c.redMul(this.x.redSub(p.x).redInvm());
  var nx = c.redSqr().redISub(this.x).redISub(p.x);
  var ny = c.redMul(this.x.redSub(nx)).redISub(this.y);
  return this.curve.point(nx, ny);
};

Point.prototype.dbl = function dbl() {
  if (this.inf)
    return this;

  // 2P = O
  var ys1 = this.y.redAdd(this.y);
  if (ys1.cmpn(0) === 0)
    return this.curve.point(null, null);

  var a = this.curve.a;

  var x2 = this.x.redSqr();
  var dyinv = ys1.redInvm();
  var c = x2.redAdd(x2).redIAdd(x2).redIAdd(a).redMul(dyinv);

  var nx = c.redSqr().redISub(this.x.redAdd(this.x));
  var ny = c.redMul(this.x.redSub(nx)).redISub(this.y);
  return this.curve.point(nx, ny);
};

Point.prototype.getX = function getX() {
  return this.x.fromRed();
};

Point.prototype.getY = function getY() {
  return this.y.fromRed();
};

Point.prototype.mul = function mul(k) {
  k = new bn(k, 16);

  if (this._hasDoubles(k))
    return this.curve._fixedNafMul(this, k);
  else if (this.curve.endo)
    return this.curve._endoWnafMulAdd([ this ], [ k ]);
  else
    return this.curve._wnafMul(this, k);
};

Point.prototype.mulAdd = function mulAdd(k1, p2, k2) {
  var points = [ this, p2 ];
  var coeffs = [ k1, k2 ];
  if (this.curve.endo)
    return this.curve._endoWnafMulAdd(points, coeffs);
  else
    return this.curve._wnafMulAdd(1, points, coeffs, 2);
};

Point.prototype.eq = function eq(p) {
  return this === p ||
         this.inf === p.inf &&
             (this.inf || this.x.cmp(p.x) === 0 && this.y.cmp(p.y) === 0);
};

Point.prototype.neg = function neg(_precompute) {
  if (this.inf)
    return this;

  var res = this.curve.point(this.x, this.y.redNeg());
  if (_precompute && this.precomputed) {
    var pre = this.precomputed;
    var negate = function(p) {
      return p.neg();
    };
    res.precomputed = {
      naf: pre.naf && {
        wnd: pre.naf.wnd,
        points: pre.naf.points.map(negate)
      },
      doubles: pre.doubles && {
        step: pre.doubles.step,
        points: pre.doubles.points.map(negate)
      }
    };
  }
  return res;
};

Point.prototype.toJ = function toJ() {
  if (this.inf)
    return this.curve.jpoint(null, null, null);

  var res = this.curve.jpoint(this.x, this.y, this.curve.one);
  return res;
};

function JPoint(curve, x, y, z) {
  Base.BasePoint.call(this, curve, 'jacobian');
  if (x === null && y === null && z === null) {
    this.x = this.curve.one;
    this.y = this.curve.one;
    this.z = new bn(0);
  } else {
    this.x = new bn(x, 16);
    this.y = new bn(y, 16);
    this.z = new bn(z, 16);
  }
  if (!this.x.red)
    this.x = this.x.toRed(this.curve.red);
  if (!this.y.red)
    this.y = this.y.toRed(this.curve.red);
  if (!this.z.red)
    this.z = this.z.toRed(this.curve.red);

  this.zOne = this.z === this.curve.one;
}
inherits(JPoint, Base.BasePoint);

ShortCurve.prototype.jpoint = function jpoint(x, y, z) {
  return new JPoint(this, x, y, z);
};

JPoint.prototype.toP = function toP() {
  if (this.isInfinity())
    return this.curve.point(null, null);

  var zinv = this.z.redInvm();
  var zinv2 = zinv.redSqr();
  var ax = this.x.redMul(zinv2);
  var ay = this.y.redMul(zinv2).redMul(zinv);

  return this.curve.point(ax, ay);
};

JPoint.prototype.neg = function neg() {
  return this.curve.jpoint(this.x, this.y.redNeg(), this.z);
};

JPoint.prototype.add = function add(p) {
  // O + P = P
  if (this.isInfinity())
    return p;

  // P + O = P
  if (p.isInfinity())
    return this;

  // 12M + 4S + 7A
  var pz2 = p.z.redSqr();
  var z2 = this.z.redSqr();
  var u1 = this.x.redMul(pz2);
  var u2 = p.x.redMul(z2);
  var s1 = this.y.redMul(pz2.redMul(p.z));
  var s2 = p.y.redMul(z2.redMul(this.z));

  var h = u1.redSub(u2);
  var r = s1.redSub(s2);
  if (h.cmpn(0) === 0) {
    if (r.cmpn(0) !== 0)
      return this.curve.jpoint(null, null, null);
    else
      return this.dbl();
  }

  var h2 = h.redSqr();
  var h3 = h2.redMul(h);
  var v = u1.redMul(h2);

  var nx = r.redSqr().redIAdd(h3).redISub(v).redISub(v);
  var ny = r.redMul(v.redISub(nx)).redISub(s1.redMul(h3));
  var nz = this.z.redMul(p.z).redMul(h);

  return this.curve.jpoint(nx, ny, nz);
};

JPoint.prototype.mixedAdd = function mixedAdd(p) {
  // O + P = P
  if (this.isInfinity())
    return p.toJ();

  // P + O = P
  if (p.isInfinity())
    return this;

  // 8M + 3S + 7A
  var z2 = this.z.redSqr();
  var u1 = this.x;
  var u2 = p.x.redMul(z2);
  var s1 = this.y;
  var s2 = p.y.redMul(z2).redMul(this.z);

  var h = u1.redSub(u2);
  var r = s1.redSub(s2);
  if (h.cmpn(0) === 0) {
    if (r.cmpn(0) !== 0)
      return this.curve.jpoint(null, null, null);
    else
      return this.dbl();
  }

  var h2 = h.redSqr();
  var h3 = h2.redMul(h);
  var v = u1.redMul(h2);

  var nx = r.redSqr().redIAdd(h3).redISub(v).redISub(v);
  var ny = r.redMul(v.redISub(nx)).redISub(s1.redMul(h3));
  var nz = this.z.redMul(h);

  return this.curve.jpoint(nx, ny, nz);
};

JPoint.prototype.dblp = function dblp(pow) {
  if (pow === 0)
    return this;
  if (this.isInfinity())
    return this;
  if (!pow)
    return this.dbl();

  if (this.curve.zeroA || this.curve.threeA) {
    var r = this;
    for (var i = 0; i < pow; i++)
      r = r.dbl();
    return r;
  }

  // 1M + 2S + 1A + N * (4S + 5M + 8A)
  // N = 1 => 6M + 6S + 9A
  var a = this.curve.a;
  var tinv = this.curve.tinv;

  var jx = this.x;
  var jy = this.y;
  var jz = this.z;
  var jz4 = jz.redSqr().redSqr();

  // Reuse results
  var jyd = jy.redAdd(jy);
  for (var i = 0; i < pow; i++) {
    var jx2 = jx.redSqr();
    var jyd2 = jyd.redSqr();
    var jyd4 = jyd2.redSqr();
    var c = jx2.redAdd(jx2).redIAdd(jx2).redIAdd(a.redMul(jz4));

    var t1 = jx.redMul(jyd2);
    var nx = c.redSqr().redISub(t1.redAdd(t1));
    var t2 = t1.redISub(nx);
    var dny = c.redMul(t2);
    dny = dny.redIAdd(dny).redISub(jyd4);
    var nz = jyd.redMul(jz);
    if (i + 1 < pow)
      jz4 = jz4.redMul(jyd4);

    jx = nx;
    jz = nz;
    jyd = dny;
  }

  return this.curve.jpoint(jx, jyd.redMul(tinv), jz);
};

JPoint.prototype.dbl = function dbl() {
  if (this.isInfinity())
    return this;

  if (this.curve.zeroA)
    return this._zeroDbl();
  else if (this.curve.threeA)
    return this._threeDbl();
  else
    return this._dbl();
};

JPoint.prototype._zeroDbl = function _zeroDbl() {
  var nx;
  var ny;
  var nz;
  // Z = 1
  if (this.zOne) {
    // hyperelliptic.org/EFD/g1p/auto-shortw-jacobian-0.html
    //     #doubling-mdbl-2007-bl
    // 1M + 5S + 14A

    // XX = X1^2
    var xx = this.x.redSqr();
    // YY = Y1^2
    var yy = this.y.redSqr();
    // YYYY = YY^2
    var yyyy = yy.redSqr();
    // S = 2 * ((X1 + YY)^2 - XX - YYYY)
    var s = this.x.redAdd(yy).redSqr().redISub(xx).redISub(yyyy);
    s = s.redIAdd(s);
    // M = 3 * XX + a; a = 0
    var m = xx.redAdd(xx).redIAdd(xx);
    // T = M ^ 2 - 2*S
    var t = m.redSqr().redISub(s).redISub(s);

    // 8 * YYYY
    var yyyy8 = yyyy.redIAdd(yyyy);
    yyyy8 = yyyy8.redIAdd(yyyy8);
    yyyy8 = yyyy8.redIAdd(yyyy8);

    // X3 = T
    nx = t;
    // Y3 = M * (S - T) - 8 * YYYY
    ny = m.redMul(s.redISub(t)).redISub(yyyy8);
    // Z3 = 2*Y1
    nz = this.y.redAdd(this.y);
  } else {
    // hyperelliptic.org/EFD/g1p/auto-shortw-jacobian-0.html
    //     #doubling-dbl-2009-l
    // 2M + 5S + 13A

    // A = X1^2
    var a = this.x.redSqr();
    // B = Y1^2
    var b = this.y.redSqr();
    // C = B^2
    var c = b.redSqr();
    // D = 2 * ((X1 + B)^2 - A - C)
    var d = this.x.redAdd(b).redSqr().redISub(a).redISub(c);
    d = d.redIAdd(d);
    // E = 3 * A
    var e = a.redAdd(a).redIAdd(a);
    // F = E^2
    var f = e.redSqr();

    // 8 * C
    var c8 = c.redIAdd(c);
    c8 = c8.redIAdd(c8);
    c8 = c8.redIAdd(c8);

    // X3 = F - 2 * D
    nx = f.redISub(d).redISub(d);
    // Y3 = E * (D - X3) - 8 * C
    ny = e.redMul(d.redISub(nx)).redISub(c8);
    // Z3 = 2 * Y1 * Z1
    nz = this.y.redMul(this.z);
    nz = nz.redIAdd(nz);
  }

  return this.curve.jpoint(nx, ny, nz);
};

JPoint.prototype._threeDbl = function _threeDbl() {
  var nx;
  var ny;
  var nz;
  // Z = 1
  if (this.zOne) {
    // hyperelliptic.org/EFD/g1p/auto-shortw-jacobian-3.html
    //     #doubling-mdbl-2007-bl
    // 1M + 5S + 15A

    // XX = X1^2
    var xx = this.x.redSqr();
    // YY = Y1^2
    var yy = this.y.redSqr();
    // YYYY = YY^2
    var yyyy = yy.redSqr();
    // S = 2 * ((X1 + YY)^2 - XX - YYYY)
    var s = this.x.redAdd(yy).redSqr().redISub(xx).redISub(yyyy);
    s = s.redIAdd(s);
    // M = 3 * XX + a
    var m = xx.redAdd(xx).redIAdd(xx).redIAdd(this.curve.a);
    // T = M^2 - 2 * S
    var t = m.redSqr().redISub(s).redISub(s);
    // X3 = T
    nx = t;
    // Y3 = M * (S - T) - 8 * YYYY
    var yyyy8 = yyyy.redIAdd(yyyy);
    yyyy8 = yyyy8.redIAdd(yyyy8);
    yyyy8 = yyyy8.redIAdd(yyyy8);
    ny = m.redMul(s.redISub(t)).redISub(yyyy8);
    // Z3 = 2 * Y1
    nz = this.y.redAdd(this.y);
  } else {
    // hyperelliptic.org/EFD/g1p/auto-shortw-jacobian-3.html#doubling-dbl-2001-b
    // 3M + 5S

    // delta = Z1^2
    var delta = this.z.redSqr();
    // gamma = Y1^2
    var gamma = this.y.redSqr();
    // beta = X1 * gamma
    var beta = this.x.redMul(gamma);
    // alpha = 3 * (X1 - delta) * (X1 + delta)
    var alpha = this.x.redSub(delta).redMul(this.x.redAdd(delta));
    alpha = alpha.redAdd(alpha).redIAdd(alpha);
    // X3 = alpha^2 - 8 * beta
    var beta4 = beta.redIAdd(beta);
    beta4 = beta4.redIAdd(beta4);
    var beta8 = beta4.redAdd(beta4);
    nx = alpha.redSqr().redISub(beta8);
    // Z3 = (Y1 + Z1)^2 - gamma - delta
    nz = this.y.redAdd(this.z).redSqr().redISub(gamma).redISub(delta);
    // Y3 = alpha * (4 * beta - X3) - 8 * gamma^2
    var ggamma8 = gamma.redSqr();
    ggamma8 = ggamma8.redIAdd(ggamma8);
    ggamma8 = ggamma8.redIAdd(ggamma8);
    ggamma8 = ggamma8.redIAdd(ggamma8);
    ny = alpha.redMul(beta4.redISub(nx)).redISub(ggamma8);
  }

  return this.curve.jpoint(nx, ny, nz);
};

JPoint.prototype._dbl = function _dbl() {
  var a = this.curve.a;

  // 4M + 6S + 10A
  var jx = this.x;
  var jy = this.y;
  var jz = this.z;
  var jz4 = jz.redSqr().redSqr();

  var jx2 = jx.redSqr();
  var jy2 = jy.redSqr();

  var c = jx2.redAdd(jx2).redIAdd(jx2).redIAdd(a.redMul(jz4));

  var jxd4 = jx.redAdd(jx);
  jxd4 = jxd4.redIAdd(jxd4);
  var t1 = jxd4.redMul(jy2);
  var nx = c.redSqr().redISub(t1.redAdd(t1));
  var t2 = t1.redISub(nx);

  var jyd8 = jy2.redSqr();
  jyd8 = jyd8.redIAdd(jyd8);
  jyd8 = jyd8.redIAdd(jyd8);
  jyd8 = jyd8.redIAdd(jyd8);
  var ny = c.redMul(t2).redISub(jyd8);
  var nz = jy.redAdd(jy).redMul(jz);

  return this.curve.jpoint(nx, ny, nz);
};

JPoint.prototype.trpl = function trpl() {
  if (!this.curve.zeroA)
    return this.dbl().add(this);

  // hyperelliptic.org/EFD/g1p/auto-shortw-jacobian-0.html#tripling-tpl-2007-bl
  // 5M + 10S + ...

  // XX = X1^2
  var xx = this.x.redSqr();
  // YY = Y1^2
  var yy = this.y.redSqr();
  // ZZ = Z1^2
  var zz = this.z.redSqr();
  // YYYY = YY^2
  var yyyy = yy.redSqr();
  // M = 3 * XX + a * ZZ2; a = 0
  var m = xx.redAdd(xx).redIAdd(xx);
  // MM = M^2
  var mm = m.redSqr();
  // E = 6 * ((X1 + YY)^2 - XX - YYYY) - MM
  var e = this.x.redAdd(yy).redSqr().redISub(xx).redISub(yyyy);
  e = e.redIAdd(e);
  e = e.redAdd(e).redIAdd(e);
  e = e.redISub(mm);
  // EE = E^2
  var ee = e.redSqr();
  // T = 16*YYYY
  var t = yyyy.redIAdd(yyyy);
  t = t.redIAdd(t);
  t = t.redIAdd(t);
  t = t.redIAdd(t);
  // U = (M + E)^2 - MM - EE - T
  var u = m.redIAdd(e).redSqr().redISub(mm).redISub(ee).redISub(t);
  // X3 = 4 * (X1 * EE - 4 * YY * U)
  var yyu4 = yy.redMul(u);
  yyu4 = yyu4.redIAdd(yyu4);
  yyu4 = yyu4.redIAdd(yyu4);
  var nx = this.x.redMul(ee).redISub(yyu4);
  nx = nx.redIAdd(nx);
  nx = nx.redIAdd(nx);
  // Y3 = 8 * Y1 * (U * (T - U) - E * EE)
  var ny = this.y.redMul(u.redMul(t.redISub(u)).redISub(e.redMul(ee)));
  ny = ny.redIAdd(ny);
  ny = ny.redIAdd(ny);
  ny = ny.redIAdd(ny);
  // Z3 = (Z1 + E)^2 - ZZ - EE
  var nz = this.z.redAdd(e).redSqr().redISub(zz).redISub(ee);

  return this.curve.jpoint(nx, ny, nz);
};

JPoint.prototype.mul = function mul(k, kbase) {
  k = new bn(k, kbase);

  return this.curve._wnafMul(this, k);
};

JPoint.prototype.eq = function eq(p) {
  if (p.type === 'affine')
    return this.eq(p.toJ());

  if (this === p)
    return true;

  // x1 * z2^2 == x2 * z1^2
  var z2 = this.z.redSqr();
  var pz2 = p.z.redSqr();
  if (this.x.redMul(pz2).redISub(p.x.redMul(z2)).cmpn(0) !== 0)
    return false;

  // y1 * z2^3 == y2 * z1^3
  var z3 = z2.redMul(this.z);
  var pz3 = pz2.redMul(p.z);
  return this.y.redMul(pz3).redISub(p.y.redMul(z3)).cmpn(0) === 0;
};

JPoint.prototype.inspect = function inspect() {
  if (this.isInfinity())
    return '<EC JPoint Infinity>';
  return '<EC JPoint x: ' + this.x.toString(16, 2) +
      ' y: ' + this.y.toString(16, 2) +
      ' z: ' + this.z.toString(16, 2) + '>';
};

JPoint.prototype.isInfinity = function isInfinity() {
  // XXX This code assumes that zero is always zero in red
  return this.z.cmpn(0) === 0;
};

},{"../../elliptic":"/Users/jrmerz/dev/cstars/AHB/farm-budgets-app/node_modules/elliptic/lib/elliptic.js","../curve":"/Users/jrmerz/dev/cstars/AHB/farm-budgets-app/node_modules/elliptic/lib/elliptic/curve/index.js","bn.js":"/Users/jrmerz/dev/cstars/AHB/farm-budgets-app/node_modules/elliptic/node_modules/bn.js/lib/bn.js","inherits":"/Users/jrmerz/dev/cstars/AHB/farm-budgets-app/node_modules/inherits/inherits_browser.js"}],"/Users/jrmerz/dev/cstars/AHB/farm-budgets-app/node_modules/elliptic/lib/elliptic/curves.js":[function(require,module,exports){
'use strict';

var curves = exports;

var hash = require('hash.js');
var elliptic = require('../elliptic');

var assert = elliptic.utils.assert;

function PresetCurve(options) {
  if (options.type === 'short')
    this.curve = new elliptic.curve.short(options);
  else if (options.type === 'edwards')
    this.curve = new elliptic.curve.edwards(options);
  else
    this.curve = new elliptic.curve.mont(options);
  this.g = this.curve.g;
  this.n = this.curve.n;
  this.hash = options.hash;

  assert(this.g.validate(), 'Invalid curve');
  assert(this.g.mul(this.n).isInfinity(), 'Invalid curve, G*N != O');
}
curves.PresetCurve = PresetCurve;

function defineCurve(name, options) {
  Object.defineProperty(curves, name, {
    configurable: true,
    enumerable: true,
    get: function() {
      var curve = new PresetCurve(options);
      Object.defineProperty(curves, name, {
        configurable: true,
        enumerable: true,
        value: curve
      });
      return curve;
    }
  });
}

defineCurve('p192', {
  type: 'short',
  prime: 'p192',
  p: 'ffffffff ffffffff ffffffff fffffffe ffffffff ffffffff',
  a: 'ffffffff ffffffff ffffffff fffffffe ffffffff fffffffc',
  b: '64210519 e59c80e7 0fa7e9ab 72243049 feb8deec c146b9b1',
  n: 'ffffffff ffffffff ffffffff 99def836 146bc9b1 b4d22831',
  hash: hash.sha256,
  gRed: false,
  g: [
    '188da80e b03090f6 7cbf20eb 43a18800 f4ff0afd 82ff1012',
    '07192b95 ffc8da78 631011ed 6b24cdd5 73f977a1 1e794811'
  ]
});

defineCurve('p224', {
  type: 'short',
  prime: 'p224',
  p: 'ffffffff ffffffff ffffffff ffffffff 00000000 00000000 00000001',
  a: 'ffffffff ffffffff ffffffff fffffffe ffffffff ffffffff fffffffe',
  b: 'b4050a85 0c04b3ab f5413256 5044b0b7 d7bfd8ba 270b3943 2355ffb4',
  n: 'ffffffff ffffffff ffffffff ffff16a2 e0b8f03e 13dd2945 5c5c2a3d',
  hash: hash.sha256,
  gRed: false,
  g: [
    'b70e0cbd 6bb4bf7f 321390b9 4a03c1d3 56c21122 343280d6 115c1d21',
    'bd376388 b5f723fb 4c22dfe6 cd4375a0 5a074764 44d58199 85007e34'
  ]
});

defineCurve('p256', {
  type: 'short',
  prime: null,
  p: 'ffffffff 00000001 00000000 00000000 00000000 ffffffff ffffffff ffffffff',
  a: 'ffffffff 00000001 00000000 00000000 00000000 ffffffff ffffffff fffffffc',
  b: '5ac635d8 aa3a93e7 b3ebbd55 769886bc 651d06b0 cc53b0f6 3bce3c3e 27d2604b',
  n: 'ffffffff 00000000 ffffffff ffffffff bce6faad a7179e84 f3b9cac2 fc632551',
  hash: hash.sha256,
  gRed: false,
  g: [
    '6b17d1f2 e12c4247 f8bce6e5 63a440f2 77037d81 2deb33a0 f4a13945 d898c296',
    '4fe342e2 fe1a7f9b 8ee7eb4a 7c0f9e16 2bce3357 6b315ece cbb64068 37bf51f5'
  ]
});

defineCurve('p384', {
  type: 'short',
  prime: null,
  p: 'ffffffff ffffffff ffffffff ffffffff ffffffff ffffffff ffffffff ' +
     'fffffffe ffffffff 00000000 00000000 ffffffff',
  a: 'ffffffff ffffffff ffffffff ffffffff ffffffff ffffffff ffffffff ' +
     'fffffffe ffffffff 00000000 00000000 fffffffc',
  b: 'b3312fa7 e23ee7e4 988e056b e3f82d19 181d9c6e fe814112 0314088f ' +
     '5013875a c656398d 8a2ed19d 2a85c8ed d3ec2aef',
  n: 'ffffffff ffffffff ffffffff ffffffff ffffffff ffffffff c7634d81 ' +
     'f4372ddf 581a0db2 48b0a77a ecec196a ccc52973',
  hash: hash.sha384,
  gRed: false,
  g: [
    'aa87ca22 be8b0537 8eb1c71e f320ad74 6e1d3b62 8ba79b98 59f741e0 82542a38 ' +
    '5502f25d bf55296c 3a545e38 72760ab7',
    '3617de4a 96262c6f 5d9e98bf 9292dc29 f8f41dbd 289a147c e9da3113 b5f0b8c0 ' +
    '0a60b1ce 1d7e819d 7a431d7c 90ea0e5f'
  ]
});

defineCurve('p521', {
  type: 'short',
  prime: null,
  p: '000001ff ffffffff ffffffff ffffffff ffffffff ffffffff ' +
     'ffffffff ffffffff ffffffff ffffffff ffffffff ffffffff ' +
     'ffffffff ffffffff ffffffff ffffffff ffffffff',
  a: '000001ff ffffffff ffffffff ffffffff ffffffff ffffffff ' +
     'ffffffff ffffffff ffffffff ffffffff ffffffff ffffffff ' +
     'ffffffff ffffffff ffffffff ffffffff fffffffc',
  b: '00000051 953eb961 8e1c9a1f 929a21a0 b68540ee a2da725b ' +
     '99b315f3 b8b48991 8ef109e1 56193951 ec7e937b 1652c0bd ' +
     '3bb1bf07 3573df88 3d2c34f1 ef451fd4 6b503f00',
  n: '000001ff ffffffff ffffffff ffffffff ffffffff ffffffff ' +
     'ffffffff ffffffff fffffffa 51868783 bf2f966b 7fcc0148 ' +
     'f709a5d0 3bb5c9b8 899c47ae bb6fb71e 91386409',
  hash: hash.sha512,
  gRed: false,
  g: [
    '000000c6 858e06b7 0404e9cd 9e3ecb66 2395b442 9c648139 ' +
    '053fb521 f828af60 6b4d3dba a14b5e77 efe75928 fe1dc127 ' +
    'a2ffa8de 3348b3c1 856a429b f97e7e31 c2e5bd66',
    '00000118 39296a78 9a3bc004 5c8a5fb4 2c7d1bd9 98f54449 ' +
    '579b4468 17afbd17 273e662c 97ee7299 5ef42640 c550b901 ' +
    '3fad0761 353c7086 a272c240 88be9476 9fd16650'
  ]
});

defineCurve('curve25519', {
  type: 'mont',
  prime: 'p25519',
  p: '7fffffffffffffff ffffffffffffffff ffffffffffffffff ffffffffffffffed',
  a: '76d06',
  b: '0',
  n: '1000000000000000 0000000000000000 14def9dea2f79cd6 5812631a5cf5d3ed',
  hash: hash.sha256,
  gRed: false,
  g: [
    '9'
  ]
});

defineCurve('ed25519', {
  type: 'edwards',
  prime: 'p25519',
  p: '7fffffffffffffff ffffffffffffffff ffffffffffffffff ffffffffffffffed',
  a: '-1',
  c: '1',
  // -121665 * (121666^(-1)) (mod P)
  d: '52036cee2b6ffe73 8cc740797779e898 00700a4d4141d8ab 75eb4dca135978a3',
  n: '1000000000000000 0000000000000000 14def9dea2f79cd6 5812631a5cf5d3ed',
  hash: hash.sha256,
  gRed: false,
  g: [
    '216936d3cd6e53fec0a4e231fdd6dc5c692cc7609525a7b2c9562d608f25d51a',

    // 4/5
    '6666666666666666666666666666666666666666666666666666666666666658'
  ]
});

var pre;
try {
  pre = require('./precomputed/secp256k1');
} catch (e) {
  pre = undefined;
}

defineCurve('secp256k1', {
  type: 'short',
  prime: 'k256',
  p: 'ffffffff ffffffff ffffffff ffffffff ffffffff ffffffff fffffffe fffffc2f',
  a: '0',
  b: '7',
  n: 'ffffffff ffffffff ffffffff fffffffe baaedce6 af48a03b bfd25e8c d0364141',
  h: '1',
  hash: hash.sha256,

  // Precomputed endomorphism
  beta: '7ae96a2b657c07106e64479eac3434e99cf0497512f58995c1396c28719501ee',
  lambda: '5363ad4cc05c30e0a5261c028812645a122e22ea20816678df02967c1b23bd72',
  basis: [
    {
      a: '3086d221a7d46bcde86c90e49284eb15',
      b: '-e4437ed6010e88286f547fa90abfe4c3'
    },
    {
      a: '114ca50f7a8e2f3f657c1108d9d44cfd8',
      b: '3086d221a7d46bcde86c90e49284eb15'
    }
  ],

  gRed: false,
  g: [
    '79be667ef9dcbbac55a06295ce870b07029bfcdb2dce28d959f2815b16f81798',
    '483ada7726a3c4655da4fbfc0e1108a8fd17b448a68554199c47d08ffb10d4b8',
    pre
  ]
});

},{"../elliptic":"/Users/jrmerz/dev/cstars/AHB/farm-budgets-app/node_modules/elliptic/lib/elliptic.js","./precomputed/secp256k1":"/Users/jrmerz/dev/cstars/AHB/farm-budgets-app/node_modules/elliptic/lib/elliptic/precomputed/secp256k1.js","hash.js":"/Users/jrmerz/dev/cstars/AHB/farm-budgets-app/node_modules/hash.js/lib/hash.js"}],"/Users/jrmerz/dev/cstars/AHB/farm-budgets-app/node_modules/elliptic/lib/elliptic/ec/index.js":[function(require,module,exports){
'use strict';

var bn = require('bn.js');
var elliptic = require('../../elliptic');
var utils = elliptic.utils;
var assert = utils.assert;

var KeyPair = require('./key');
var Signature = require('./signature');

function EC(options) {
  if (!(this instanceof EC))
    return new EC(options);

  // Shortcut `elliptic.ec(curve-name)`
  if (typeof options === 'string') {
    assert(elliptic.curves.hasOwnProperty(options), 'Unknown curve ' + options);

    options = elliptic.curves[options];
  }

  // Shortcut for `elliptic.ec(elliptic.curves.curveName)`
  if (options instanceof elliptic.curves.PresetCurve)
    options = { curve: options };

  this.curve = options.curve.curve;
  this.n = this.curve.n;
  this.nh = this.n.ushrn(1);
  this.g = this.curve.g;

  // Point on curve
  this.g = options.curve.g;
  this.g.precompute(options.curve.n.bitLength() + 1);

  // Hash for function for DRBG
  this.hash = options.hash || options.curve.hash;
}
module.exports = EC;

EC.prototype.keyPair = function keyPair(options) {
  return new KeyPair(this, options);
};

EC.prototype.keyFromPrivate = function keyFromPrivate(priv, enc) {
  return KeyPair.fromPrivate(this, priv, enc);
};

EC.prototype.keyFromPublic = function keyFromPublic(pub, enc) {
  return KeyPair.fromPublic(this, pub, enc);
};

EC.prototype.genKeyPair = function genKeyPair(options) {
  if (!options)
    options = {};

  // Instantiate Hmac_DRBG
  var drbg = new elliptic.hmacDRBG({
    hash: this.hash,
    pers: options.pers,
    entropy: options.entropy || elliptic.rand(this.hash.hmacStrength),
    nonce: this.n.toArray()
  });

  var bytes = this.n.byteLength();
  var ns2 = this.n.sub(new bn(2));
  do {
    var priv = new bn(drbg.generate(bytes));
    if (priv.cmp(ns2) > 0)
      continue;

    priv.iaddn(1);
    return this.keyFromPrivate(priv);
  } while (true);
};

EC.prototype._truncateToN = function truncateToN(msg, truncOnly) {
  var delta = msg.byteLength() * 8 - this.n.bitLength();
  if (delta > 0)
    msg = msg.ushrn(delta);
  if (!truncOnly && msg.cmp(this.n) >= 0)
    return msg.sub(this.n);
  else
    return msg;
};

EC.prototype.sign = function sign(msg, key, enc, options) {
  if (typeof enc === 'object') {
    options = enc;
    enc = null;
  }
  if (!options)
    options = {};

  key = this.keyFromPrivate(key, enc);
  msg = this._truncateToN(new bn(msg, 16));

  // Zero-extend key to provide enough entropy
  var bytes = this.n.byteLength();
  var bkey = key.getPrivate().toArray();
  for (var i = bkey.length; i < bytes; i++)
    bkey.unshift(0);

  // Zero-extend nonce to have the same byte size as N
  var nonce = msg.toArray();
  for (var i = nonce.length; i < bytes; i++)
    nonce.unshift(0);

  // Instantiate Hmac_DRBG
  var drbg = new elliptic.hmacDRBG({
    hash: this.hash,
    entropy: bkey,
    nonce: nonce
  });

  // Number of bytes to generate
  var ns1 = this.n.sub(new bn(1));
  do {
    var k = new bn(drbg.generate(this.n.byteLength()));
    k = this._truncateToN(k, true);
    if (k.cmpn(1) <= 0 || k.cmp(ns1) >= 0)
      continue;

    var kp = this.g.mul(k);
    if (kp.isInfinity())
      continue;

    var kpX = kp.getX();
    var r = kpX.umod(this.n);
    if (r.cmpn(0) === 0)
      continue;

    var s = k.invm(this.n).mul(r.mul(key.getPrivate()).iadd(msg));
    s = s.umod(this.n);
    if (s.cmpn(0) === 0)
      continue;

    var recoveryParam = (kp.getY().isOdd() ? 1 : 0) |
                        (kpX.cmp(r) !== 0 ? 2 : 0);

    // Use complement of `s`, if it is > `n / 2`
    if (options.canonical && s.cmp(this.nh) > 0) {
      s = this.n.sub(s);
      recoveryParam ^= 1;
    }

    return new Signature({ r: r, s: s, recoveryParam: recoveryParam });
  } while (true);
};

EC.prototype.verify = function verify(msg, signature, key, enc) {
  msg = this._truncateToN(new bn(msg, 16));
  key = this.keyFromPublic(key, enc);
  signature = new Signature(signature, 'hex');

  // Perform primitive values validation
  var r = signature.r;
  var s = signature.s;
  if (r.cmpn(1) < 0 || r.cmp(this.n) >= 0)
    return false;
  if (s.cmpn(1) < 0 || s.cmp(this.n) >= 0)
    return false;

  // Validate signature
  var sinv = s.invm(this.n);
  var u1 = sinv.mul(msg).umod(this.n);
  var u2 = sinv.mul(r).umod(this.n);

  var p = this.g.mulAdd(u1, key.getPublic(), u2);
  if (p.isInfinity())
    return false;

  return p.getX().umod(this.n).cmp(r) === 0;
};

EC.prototype.recoverPubKey = function(msg, signature, j, enc) {
  assert((3 & j) === j, 'The recovery param is more than two bits');
  signature = new Signature(signature, enc);

  var n = this.n;
  var e = new bn(msg);
  var r = signature.r;
  var s = signature.s;

  // A set LSB signifies that the y-coordinate is odd
  var isYOdd = j & 1;
  var isSecondKey = j >> 1;
  if (r.cmp(this.curve.p.umod(this.curve.n)) >= 0 && isSecondKey)
    throw new Error('Unable to find sencond key candinate');

  // 1.1. Let x = r + jn.
  if (isSecondKey)
    r = this.curve.pointFromX(r.add(this.curve.n), isYOdd);
  else
    r = this.curve.pointFromX(r, isYOdd);

  var eNeg = n.sub(e);

  // 1.6.1 Compute Q = r^-1 (sR -  eG)
  //               Q = r^-1 (sR + -eG)
  var rInv = signature.r.invm(n);
  return r.mul(s).add(this.g.mul(eNeg)).mul(rInv);
};

EC.prototype.getKeyRecoveryParam = function(e, signature, Q, enc) {
  signature = new Signature(signature, enc);
  if (signature.recoveryParam !== null)
    return signature.recoveryParam;

  for (var i = 0; i < 4; i++) {
    var Qprime = this.recoverPubKey(e, signature, i);

    if (Qprime.eq(Q))
      return i;
  }
  throw new Error('Unable to find valid recovery factor');
};

},{"../../elliptic":"/Users/jrmerz/dev/cstars/AHB/farm-budgets-app/node_modules/elliptic/lib/elliptic.js","./key":"/Users/jrmerz/dev/cstars/AHB/farm-budgets-app/node_modules/elliptic/lib/elliptic/ec/key.js","./signature":"/Users/jrmerz/dev/cstars/AHB/farm-budgets-app/node_modules/elliptic/lib/elliptic/ec/signature.js","bn.js":"/Users/jrmerz/dev/cstars/AHB/farm-budgets-app/node_modules/elliptic/node_modules/bn.js/lib/bn.js"}],"/Users/jrmerz/dev/cstars/AHB/farm-budgets-app/node_modules/elliptic/lib/elliptic/ec/key.js":[function(require,module,exports){
'use strict';

var bn = require('bn.js');

function KeyPair(ec, options) {
  this.ec = ec;
  this.priv = null;
  this.pub = null;

  // KeyPair(ec, { priv: ..., pub: ... })
  if (options.priv)
    this._importPrivate(options.priv, options.privEnc);
  if (options.pub)
    this._importPublic(options.pub, options.pubEnc);
}
module.exports = KeyPair;

KeyPair.fromPublic = function fromPublic(ec, pub, enc) {
  if (pub instanceof KeyPair)
    return pub;

  return new KeyPair(ec, {
    pub: pub,
    pubEnc: enc
  });
};

KeyPair.fromPrivate = function fromPrivate(ec, priv, enc) {
  if (priv instanceof KeyPair)
    return priv;

  return new KeyPair(ec, {
    priv: priv,
    privEnc: enc
  });
};

KeyPair.prototype.validate = function validate() {
  var pub = this.getPublic();

  if (pub.isInfinity())
    return { result: false, reason: 'Invalid public key' };
  if (!pub.validate())
    return { result: false, reason: 'Public key is not a point' };
  if (!pub.mul(this.ec.curve.n).isInfinity())
    return { result: false, reason: 'Public key * N != O' };

  return { result: true, reason: null };
};

KeyPair.prototype.getPublic = function getPublic(compact, enc) {
  // compact is optional argument
  if (typeof compact === 'string') {
    enc = compact;
    compact = null;
  }

  if (!this.pub)
    this.pub = this.ec.g.mul(this.priv);

  if (!enc)
    return this.pub;

  return this.pub.encode(enc, compact);
};

KeyPair.prototype.getPrivate = function getPrivate(enc) {
  if (enc === 'hex')
    return this.priv.toString(16, 2);
  else
    return this.priv;
};

KeyPair.prototype._importPrivate = function _importPrivate(key, enc) {
  this.priv = new bn(key, enc || 16);

  // Ensure that the priv won't be bigger than n, otherwise we may fail
  // in fixed multiplication method
  this.priv = this.priv.umod(this.ec.curve.n);
};

KeyPair.prototype._importPublic = function _importPublic(key, enc) {
  if (key.x || key.y) {
    this.pub = this.ec.curve.point(key.x, key.y);
    return;
  }
  this.pub = this.ec.curve.decodePoint(key, enc);
};

// ECDH
KeyPair.prototype.derive = function derive(pub) {
  return pub.mul(this.priv).getX();
};

// ECDSA
KeyPair.prototype.sign = function sign(msg, enc, options) {
  return this.ec.sign(msg, this, enc, options);
};

KeyPair.prototype.verify = function verify(msg, signature) {
  return this.ec.verify(msg, signature, this);
};

KeyPair.prototype.inspect = function inspect() {
  return '<Key priv: ' + (this.priv && this.priv.toString(16, 2)) +
         ' pub: ' + (this.pub && this.pub.inspect()) + ' >';
};

},{"bn.js":"/Users/jrmerz/dev/cstars/AHB/farm-budgets-app/node_modules/elliptic/node_modules/bn.js/lib/bn.js"}],"/Users/jrmerz/dev/cstars/AHB/farm-budgets-app/node_modules/elliptic/lib/elliptic/ec/signature.js":[function(require,module,exports){
'use strict';

var bn = require('bn.js');

var elliptic = require('../../elliptic');
var utils = elliptic.utils;
var assert = utils.assert;

function Signature(options, enc) {
  if (options instanceof Signature)
    return options;

  if (this._importDER(options, enc))
    return;

  assert(options.r && options.s, 'Signature without r or s');
  this.r = new bn(options.r, 16);
  this.s = new bn(options.s, 16);
  if (options.recoveryParam !== null)
    this.recoveryParam = options.recoveryParam;
  else
    this.recoveryParam = null;
}
module.exports = Signature;

function Position() {
  this.place = 0;
}

function getLength(buf, p) {
  var initial = buf[p.place++];
  if (!(initial & 0x80)) {
    return initial;
  }
  var octetLen = initial & 0xf;
  var val = 0;
  for (var i = 0, off = p.place; i < octetLen; i++, off++) {
    val <<= 8;
    val |= buf[off];
  }
  p.place = off;
  return val;
}

function rmPadding(buf) {
  var i = 0;
  var len = buf.length - 1;
  while (!buf[i] && !(buf[i + 1] & 0x80) && i < len) {
    i++;
  }
  if (i === 0) {
    return buf;
  }
  return buf.slice(i);
}

Signature.prototype._importDER = function _importDER(data, enc) {
  data = utils.toArray(data, enc);
  var p = new Position();
  if (data[p.place++] !== 0x30) {
    return false;
  }
  var len = getLength(data, p);
  if ((len + p.place) !== data.length) {
    return false;
  }
  if (data[p.place++] !== 0x02) {
    return false;
  }
  var rlen = getLength(data, p);
  var r = data.slice(p.place, rlen + p.place);
  p.place += rlen;
  if (data[p.place++] !== 0x02) {
    return false;
  }
  var slen = getLength(data, p);
  if (data.length !== slen + p.place) {
    return false;
  }
  var s = data.slice(p.place, slen + p.place);
  if (r[0] === 0 && (r[1] & 0x80)) {
    r = r.slice(1);
  }
  if (s[0] === 0 && (s[1] & 0x80)) {
    s = s.slice(1);
  }

  this.r = new bn(r);
  this.s = new bn(s);
  this.recoveryParam = null;

  return true;
};

function constructLength(arr, len) {
  if (len < 0x80) {
    arr.push(len);
    return;
  }
  var octets = 1 + (Math.log(len) / Math.LN2 >>> 3);
  arr.push(octets | 0x80);
  while (--octets) {
    arr.push((len >>> (octets << 3)) & 0xff);
  }
  arr.push(len);
}

Signature.prototype.toDER = function toDER(enc) {
  var r = this.r.toArray();
  var s = this.s.toArray();

  // Pad values
  if (r[0] & 0x80)
    r = [ 0 ].concat(r);
  // Pad values
  if (s[0] & 0x80)
    s = [ 0 ].concat(s);

  r = rmPadding(r);
  s = rmPadding(s);

  while (!s[0] && !(s[1] & 0x80)) {
    s = s.slice(1);
  }
  var arr = [ 0x02 ];
  constructLength(arr, r.length);
  arr = arr.concat(r);
  arr.push(0x02);
  constructLength(arr, s.length);
  var backHalf = arr.concat(s);
  var res = [ 0x30 ];
  constructLength(res, backHalf.length);
  res = res.concat(backHalf);
  return utils.encode(res, enc);
};

},{"../../elliptic":"/Users/jrmerz/dev/cstars/AHB/farm-budgets-app/node_modules/elliptic/lib/elliptic.js","bn.js":"/Users/jrmerz/dev/cstars/AHB/farm-budgets-app/node_modules/elliptic/node_modules/bn.js/lib/bn.js"}],"/Users/jrmerz/dev/cstars/AHB/farm-budgets-app/node_modules/elliptic/lib/elliptic/eddsa/index.js":[function(require,module,exports){
'use strict';

var hash = require('hash.js');
var elliptic = require('../../elliptic');
var utils = elliptic.utils;
var assert = utils.assert;
var parseBytes = utils.parseBytes;
var KeyPair = require('./key');
var Signature = require('./signature');

function EDDSA(curve) {
  assert(curve === 'ed25519', 'only tested with ed25519 so far');

  if (!(this instanceof EDDSA))
    return new EDDSA(curve);

  var curve = elliptic.curves[curve].curve;
  this.curve = curve;
  this.g = curve.g;
  this.g.precompute(curve.n.bitLength() + 1);

  this.pointClass = curve.point().constructor;
  this.encodingLength = Math.ceil(curve.n.bitLength() / 8);
  this.hash = hash.sha512;
}

module.exports = EDDSA;

/**
* @param {Array|String} message - message bytes
* @param {Array|String|KeyPair} secret - secret bytes or a keypair
* @returns {Signature} - signature
*/
EDDSA.prototype.sign = function sign(message, secret) {
  message = parseBytes(message);
  var key = this.keyFromSecret(secret);
  var r = this.hashInt(key.messagePrefix(), message);
  var R = this.g.mul(r);
  var Rencoded = this.encodePoint(R);
  var s_ = this.hashInt(Rencoded, key.pubBytes(), message)
               .mul(key.priv());
  var S = r.add(s_).umod(this.curve.n);
  return this.makeSignature({ R: R, S: S, Rencoded: Rencoded });
};

/**
* @param {Array} message - message bytes
* @param {Array|String|Signature} sig - sig bytes
* @param {Array|String|Point|KeyPair} pub - public key
* @returns {Boolean} - true if public key matches sig of message
*/
EDDSA.prototype.verify = function verify(message, sig, pub) {
  message = parseBytes(message);
  sig = this.makeSignature(sig);
  var key = this.keyFromPublic(pub);
  var h = this.hashInt(sig.Rencoded(), key.pubBytes(), message);
  var SG = this.g.mul(sig.S());
  var RplusAh = sig.R().add(key.pub().mul(h));
  return RplusAh.eq(SG);
};

EDDSA.prototype.hashInt = function hashInt() {
  var hash = this.hash();
  for (var i = 0; i < arguments.length; i++)
    hash.update(arguments[i]);
  return utils.intFromLE(hash.digest()).umod(this.curve.n);
};

EDDSA.prototype.keyFromPublic = function keyFromPublic(pub) {
  return KeyPair.fromPublic(this, pub);
};

EDDSA.prototype.keyFromSecret = function keyFromSecret(secret) {
  return KeyPair.fromSecret(this, secret);
};

EDDSA.prototype.makeSignature = function makeSignature(sig) {
  if (sig instanceof Signature)
    return sig;
  return new Signature(this, sig);
};

/**
* * https://tools.ietf.org/html/draft-josefsson-eddsa-ed25519-03#section-5.2
*
* EDDSA defines methods for encoding and decoding points and integers. These are
* helper convenience methods, that pass along to utility functions implied
* parameters.
*
*/
EDDSA.prototype.encodePoint = function encodePoint(point) {
  var enc = point.getY().toArray('le', this.encodingLength);
  enc[this.encodingLength - 1] |= point.getX().isOdd() ? 0x80 : 0;
  return enc;
};

EDDSA.prototype.decodePoint = function decodePoint(bytes) {
  bytes = utils.parseBytes(bytes);

  var lastIx = bytes.length - 1;
  var normed = bytes.slice(0, lastIx).concat(bytes[lastIx] & ~0x80);
  var xIsOdd = (bytes[lastIx] & 0x80) !== 0;

  var y = utils.intFromLE(normed);
  return this.curve.pointFromY(y, xIsOdd);
};

EDDSA.prototype.encodeInt = function encodeInt(num) {
  return num.toArray('le', this.encodingLength);
};

EDDSA.prototype.decodeInt = function decodeInt(bytes) {
  return utils.intFromLE(bytes);
};

EDDSA.prototype.isPoint = function isPoint(val) {
  return val instanceof this.pointClass;
};

},{"../../elliptic":"/Users/jrmerz/dev/cstars/AHB/farm-budgets-app/node_modules/elliptic/lib/elliptic.js","./key":"/Users/jrmerz/dev/cstars/AHB/farm-budgets-app/node_modules/elliptic/lib/elliptic/eddsa/key.js","./signature":"/Users/jrmerz/dev/cstars/AHB/farm-budgets-app/node_modules/elliptic/lib/elliptic/eddsa/signature.js","hash.js":"/Users/jrmerz/dev/cstars/AHB/farm-budgets-app/node_modules/hash.js/lib/hash.js"}],"/Users/jrmerz/dev/cstars/AHB/farm-budgets-app/node_modules/elliptic/lib/elliptic/eddsa/key.js":[function(require,module,exports){
'use strict';

var elliptic = require('../../elliptic');
var utils = elliptic.utils;
var assert = utils.assert;
var parseBytes = utils.parseBytes;
var cachedProperty = utils.cachedProperty;

/**
* @param {EDDSA} eddsa - instance
* @param {Object} params - public/private key parameters
*
* @param {Array<Byte>} [params.secret] - secret seed bytes
* @param {Point} [params.pub] - public key point (aka `A` in eddsa terms)
* @param {Array<Byte>} [params.pub] - public key point encoded as bytes
*
*/
function KeyPair(eddsa, params) {
  this.eddsa = eddsa;
  this._secret = parseBytes(params.secret);
  if (eddsa.isPoint(params.pub))
    this._pub = params.pub;
  else
    this._pubBytes = parseBytes(params.pub);
}

KeyPair.fromPublic = function fromPublic(eddsa, pub) {
  if (pub instanceof KeyPair)
    return pub;
  return new KeyPair(eddsa, { pub: pub });
};

KeyPair.fromSecret = function fromSecret(eddsa, secret) {
  if (secret instanceof KeyPair)
    return secret;
  return new KeyPair(eddsa, { secret: secret });
};

KeyPair.prototype.secret = function secret() {
  return this._secret;
};

cachedProperty(KeyPair, function pubBytes() {
  return this.eddsa.encodePoint(this.pub());
});

cachedProperty(KeyPair, function pub() {
  if (this._pubBytes)
    return this.eddsa.decodePoint(this._pubBytes);
  return this.eddsa.g.mul(this.priv());
});

cachedProperty(KeyPair, function privBytes() {
  var eddsa = this.eddsa;
  var hash = this.hash();
  var lastIx = eddsa.encodingLength - 1;

  var a = hash.slice(0, eddsa.encodingLength);
  a[0] &= 248;
  a[lastIx] &= 127;
  a[lastIx] |= 64;

  return a;
});

cachedProperty(KeyPair, function priv() {
  return this.eddsa.decodeInt(this.privBytes());
});

cachedProperty(KeyPair, function hash() {
  return this.eddsa.hash().update(this.secret()).digest();
});

cachedProperty(KeyPair, function messagePrefix() {
  return this.hash().slice(this.eddsa.encodingLength);
});

KeyPair.prototype.sign = function sign(message) {
  assert(this._secret, 'KeyPair can only verify');
  return this.eddsa.sign(message, this);
};

KeyPair.prototype.verify = function verify(message, sig) {
  return this.eddsa.verify(message, sig, this);
};

KeyPair.prototype.getSecret = function getSecret(enc) {
  assert(this._secret, 'KeyPair is public only');
  return utils.encode(this.secret(), enc);
};

KeyPair.prototype.getPublic = function getPublic(enc) {
  return utils.encode(this.pubBytes(), enc);
};

module.exports = KeyPair;

},{"../../elliptic":"/Users/jrmerz/dev/cstars/AHB/farm-budgets-app/node_modules/elliptic/lib/elliptic.js"}],"/Users/jrmerz/dev/cstars/AHB/farm-budgets-app/node_modules/elliptic/lib/elliptic/eddsa/signature.js":[function(require,module,exports){
'use strict';

var bn = require('bn.js');
var elliptic = require('../../elliptic');
var utils = elliptic.utils;
var assert = utils.assert;
var cachedProperty = utils.cachedProperty;
var parseBytes = utils.parseBytes;

/**
* @param {EDDSA} eddsa - eddsa instance
* @param {Array<Bytes>|Object} sig -
* @param {Array<Bytes>|Point} [sig.R] - R point as Point or bytes
* @param {Array<Bytes>|bn} [sig.S] - S scalar as bn or bytes
* @param {Array<Bytes>} [sig.Rencoded] - R point encoded
* @param {Array<Bytes>} [sig.Sencoded] - S scalar encoded
*/
function Signature(eddsa, sig) {
  this.eddsa = eddsa;

  if (typeof sig !== 'object')
    sig = parseBytes(sig);

  if (Array.isArray(sig)) {
    sig = {
      R: sig.slice(0, eddsa.encodingLength),
      S: sig.slice(eddsa.encodingLength)
    };
  }

  assert(sig.R && sig.S, 'Signature without R or S');

  if (eddsa.isPoint(sig.R))
    this._R = sig.R;
  if (sig.S instanceof bn)
    this._S = sig.S;

  this._Rencoded = Array.isArray(sig.R) ? sig.R : sig.Rencoded;
  this._Sencoded = Array.isArray(sig.S) ? sig.S : sig.Sencoded;
}

cachedProperty(Signature, function S() {
  return this.eddsa.decodeInt(this.Sencoded());
});

cachedProperty(Signature, function R() {
  return this.eddsa.decodePoint(this.Rencoded());
});

cachedProperty(Signature, function Rencoded() {
  return this.eddsa.encodePoint(this.R());
});

cachedProperty(Signature, function Sencoded() {
  return this.eddsa.encodeInt(this.S());
});

Signature.prototype.toBytes = function toBytes() {
  return this.Rencoded().concat(this.Sencoded());
};

Signature.prototype.toHex = function toHex() {
  return utils.encode(this.toBytes(), 'hex').toUpperCase();
};

module.exports = Signature;

},{"../../elliptic":"/Users/jrmerz/dev/cstars/AHB/farm-budgets-app/node_modules/elliptic/lib/elliptic.js","bn.js":"/Users/jrmerz/dev/cstars/AHB/farm-budgets-app/node_modules/elliptic/node_modules/bn.js/lib/bn.js"}],"/Users/jrmerz/dev/cstars/AHB/farm-budgets-app/node_modules/elliptic/lib/elliptic/hmac-drbg.js":[function(require,module,exports){
'use strict';

var hash = require('hash.js');
var elliptic = require('../elliptic');
var utils = elliptic.utils;
var assert = utils.assert;

function HmacDRBG(options) {
  if (!(this instanceof HmacDRBG))
    return new HmacDRBG(options);
  this.hash = options.hash;
  this.predResist = !!options.predResist;

  this.outLen = this.hash.outSize;
  this.minEntropy = options.minEntropy || this.hash.hmacStrength;

  this.reseed = null;
  this.reseedInterval = null;
  this.K = null;
  this.V = null;

  var entropy = utils.toArray(options.entropy, options.entropyEnc);
  var nonce = utils.toArray(options.nonce, options.nonceEnc);
  var pers = utils.toArray(options.pers, options.persEnc);
  assert(entropy.length >= (this.minEntropy / 8),
         'Not enough entropy. Minimum is: ' + this.minEntropy + ' bits');
  this._init(entropy, nonce, pers);
}
module.exports = HmacDRBG;

HmacDRBG.prototype._init = function init(entropy, nonce, pers) {
  var seed = entropy.concat(nonce).concat(pers);

  this.K = new Array(this.outLen / 8);
  this.V = new Array(this.outLen / 8);
  for (var i = 0; i < this.V.length; i++) {
    this.K[i] = 0x00;
    this.V[i] = 0x01;
  }

  this._update(seed);
  this.reseed = 1;
  this.reseedInterval = 0x1000000000000;  // 2^48
};

HmacDRBG.prototype._hmac = function hmac() {
  return new hash.hmac(this.hash, this.K);
};

HmacDRBG.prototype._update = function update(seed) {
  var kmac = this._hmac()
                 .update(this.V)
                 .update([ 0x00 ]);
  if (seed)
    kmac = kmac.update(seed);
  this.K = kmac.digest();
  this.V = this._hmac().update(this.V).digest();
  if (!seed)
    return;

  this.K = this._hmac()
               .update(this.V)
               .update([ 0x01 ])
               .update(seed)
               .digest();
  this.V = this._hmac().update(this.V).digest();
};

HmacDRBG.prototype.reseed = function reseed(entropy, entropyEnc, add, addEnc) {
  // Optional entropy enc
  if (typeof entropyEnc !== 'string') {
    addEnc = add;
    add = entropyEnc;
    entropyEnc = null;
  }

  entropy = utils.toBuffer(entropy, entropyEnc);
  add = utils.toBuffer(add, addEnc);

  assert(entropy.length >= (this.minEntropy / 8),
         'Not enough entropy. Minimum is: ' + this.minEntropy + ' bits');

  this._update(entropy.concat(add || []));
  this.reseed = 1;
};

HmacDRBG.prototype.generate = function generate(len, enc, add, addEnc) {
  if (this.reseed > this.reseedInterval)
    throw new Error('Reseed is required');

  // Optional encoding
  if (typeof enc !== 'string') {
    addEnc = add;
    add = enc;
    enc = null;
  }

  // Optional additional data
  if (add) {
    add = utils.toArray(add, addEnc);
    this._update(add);
  }

  var temp = [];
  while (temp.length < len) {
    this.V = this._hmac().update(this.V).digest();
    temp = temp.concat(this.V);
  }

  var res = temp.slice(0, len);
  this._update(add);
  this.reseed++;
  return utils.encode(res, enc);
};

},{"../elliptic":"/Users/jrmerz/dev/cstars/AHB/farm-budgets-app/node_modules/elliptic/lib/elliptic.js","hash.js":"/Users/jrmerz/dev/cstars/AHB/farm-budgets-app/node_modules/hash.js/lib/hash.js"}],"/Users/jrmerz/dev/cstars/AHB/farm-budgets-app/node_modules/elliptic/lib/elliptic/precomputed/secp256k1.js":[function(require,module,exports){
module.exports = {
  doubles: {
    step: 4,
    points: [
      [
        'e60fce93b59e9ec53011aabc21c23e97b2a31369b87a5ae9c44ee89e2a6dec0a',
        'f7e3507399e595929db99f34f57937101296891e44d23f0be1f32cce69616821'
      ],
      [
        '8282263212c609d9ea2a6e3e172de238d8c39cabd5ac1ca10646e23fd5f51508',
        '11f8a8098557dfe45e8256e830b60ace62d613ac2f7b17bed31b6eaff6e26caf'
      ],
      [
        '175e159f728b865a72f99cc6c6fc846de0b93833fd2222ed73fce5b551e5b739',
        'd3506e0d9e3c79eba4ef97a51ff71f5eacb5955add24345c6efa6ffee9fed695'
      ],
      [
        '363d90d447b00c9c99ceac05b6262ee053441c7e55552ffe526bad8f83ff4640',
        '4e273adfc732221953b445397f3363145b9a89008199ecb62003c7f3bee9de9'
      ],
      [
        '8b4b5f165df3c2be8c6244b5b745638843e4a781a15bcd1b69f79a55dffdf80c',
        '4aad0a6f68d308b4b3fbd7813ab0da04f9e336546162ee56b3eff0c65fd4fd36'
      ],
      [
        '723cbaa6e5db996d6bf771c00bd548c7b700dbffa6c0e77bcb6115925232fcda',
        '96e867b5595cc498a921137488824d6e2660a0653779494801dc069d9eb39f5f'
      ],
      [
        'eebfa4d493bebf98ba5feec812c2d3b50947961237a919839a533eca0e7dd7fa',
        '5d9a8ca3970ef0f269ee7edaf178089d9ae4cdc3a711f712ddfd4fdae1de8999'
      ],
      [
        '100f44da696e71672791d0a09b7bde459f1215a29b3c03bfefd7835b39a48db0',
        'cdd9e13192a00b772ec8f3300c090666b7ff4a18ff5195ac0fbd5cd62bc65a09'
      ],
      [
        'e1031be262c7ed1b1dc9227a4a04c017a77f8d4464f3b3852c8acde6e534fd2d',
        '9d7061928940405e6bb6a4176597535af292dd419e1ced79a44f18f29456a00d'
      ],
      [
        'feea6cae46d55b530ac2839f143bd7ec5cf8b266a41d6af52d5e688d9094696d',
        'e57c6b6c97dce1bab06e4e12bf3ecd5c981c8957cc41442d3155debf18090088'
      ],
      [
        'da67a91d91049cdcb367be4be6ffca3cfeed657d808583de33fa978bc1ec6cb1',
        '9bacaa35481642bc41f463f7ec9780e5dec7adc508f740a17e9ea8e27a68be1d'
      ],
      [
        '53904faa0b334cdda6e000935ef22151ec08d0f7bb11069f57545ccc1a37b7c0',
        '5bc087d0bc80106d88c9eccac20d3c1c13999981e14434699dcb096b022771c8'
      ],
      [
        '8e7bcd0bd35983a7719cca7764ca906779b53a043a9b8bcaeff959f43ad86047',
        '10b7770b2a3da4b3940310420ca9514579e88e2e47fd68b3ea10047e8460372a'
      ],
      [
        '385eed34c1cdff21e6d0818689b81bde71a7f4f18397e6690a841e1599c43862',
        '283bebc3e8ea23f56701de19e9ebf4576b304eec2086dc8cc0458fe5542e5453'
      ],
      [
        '6f9d9b803ecf191637c73a4413dfa180fddf84a5947fbc9c606ed86c3fac3a7',
        '7c80c68e603059ba69b8e2a30e45c4d47ea4dd2f5c281002d86890603a842160'
      ],
      [
        '3322d401243c4e2582a2147c104d6ecbf774d163db0f5e5313b7e0e742d0e6bd',
        '56e70797e9664ef5bfb019bc4ddaf9b72805f63ea2873af624f3a2e96c28b2a0'
      ],
      [
        '85672c7d2de0b7da2bd1770d89665868741b3f9af7643397721d74d28134ab83',
        '7c481b9b5b43b2eb6374049bfa62c2e5e77f17fcc5298f44c8e3094f790313a6'
      ],
      [
        '948bf809b1988a46b06c9f1919413b10f9226c60f668832ffd959af60c82a0a',
        '53a562856dcb6646dc6b74c5d1c3418c6d4dff08c97cd2bed4cb7f88d8c8e589'
      ],
      [
        '6260ce7f461801c34f067ce0f02873a8f1b0e44dfc69752accecd819f38fd8e8',
        'bc2da82b6fa5b571a7f09049776a1ef7ecd292238051c198c1a84e95b2b4ae17'
      ],
      [
        'e5037de0afc1d8d43d8348414bbf4103043ec8f575bfdc432953cc8d2037fa2d',
        '4571534baa94d3b5f9f98d09fb990bddbd5f5b03ec481f10e0e5dc841d755bda'
      ],
      [
        'e06372b0f4a207adf5ea905e8f1771b4e7e8dbd1c6a6c5b725866a0ae4fce725',
        '7a908974bce18cfe12a27bb2ad5a488cd7484a7787104870b27034f94eee31dd'
      ],
      [
        '213c7a715cd5d45358d0bbf9dc0ce02204b10bdde2a3f58540ad6908d0559754',
        '4b6dad0b5ae462507013ad06245ba190bb4850f5f36a7eeddff2c27534b458f2'
      ],
      [
        '4e7c272a7af4b34e8dbb9352a5419a87e2838c70adc62cddf0cc3a3b08fbd53c',
        '17749c766c9d0b18e16fd09f6def681b530b9614bff7dd33e0b3941817dcaae6'
      ],
      [
        'fea74e3dbe778b1b10f238ad61686aa5c76e3db2be43057632427e2840fb27b6',
        '6e0568db9b0b13297cf674deccb6af93126b596b973f7b77701d3db7f23cb96f'
      ],
      [
        '76e64113f677cf0e10a2570d599968d31544e179b760432952c02a4417bdde39',
        'c90ddf8dee4e95cf577066d70681f0d35e2a33d2b56d2032b4b1752d1901ac01'
      ],
      [
        'c738c56b03b2abe1e8281baa743f8f9a8f7cc643df26cbee3ab150242bcbb891',
        '893fb578951ad2537f718f2eacbfbbbb82314eef7880cfe917e735d9699a84c3'
      ],
      [
        'd895626548b65b81e264c7637c972877d1d72e5f3a925014372e9f6588f6c14b',
        'febfaa38f2bc7eae728ec60818c340eb03428d632bb067e179363ed75d7d991f'
      ],
      [
        'b8da94032a957518eb0f6433571e8761ceffc73693e84edd49150a564f676e03',
        '2804dfa44805a1e4d7c99cc9762808b092cc584d95ff3b511488e4e74efdf6e7'
      ],
      [
        'e80fea14441fb33a7d8adab9475d7fab2019effb5156a792f1a11778e3c0df5d',
        'eed1de7f638e00771e89768ca3ca94472d155e80af322ea9fcb4291b6ac9ec78'
      ],
      [
        'a301697bdfcd704313ba48e51d567543f2a182031efd6915ddc07bbcc4e16070',
        '7370f91cfb67e4f5081809fa25d40f9b1735dbf7c0a11a130c0d1a041e177ea1'
      ],
      [
        '90ad85b389d6b936463f9d0512678de208cc330b11307fffab7ac63e3fb04ed4',
        'e507a3620a38261affdcbd9427222b839aefabe1582894d991d4d48cb6ef150'
      ],
      [
        '8f68b9d2f63b5f339239c1ad981f162ee88c5678723ea3351b7b444c9ec4c0da',
        '662a9f2dba063986de1d90c2b6be215dbbea2cfe95510bfdf23cbf79501fff82'
      ],
      [
        'e4f3fb0176af85d65ff99ff9198c36091f48e86503681e3e6686fd5053231e11',
        '1e63633ad0ef4f1c1661a6d0ea02b7286cc7e74ec951d1c9822c38576feb73bc'
      ],
      [
        '8c00fa9b18ebf331eb961537a45a4266c7034f2f0d4e1d0716fb6eae20eae29e',
        'efa47267fea521a1a9dc343a3736c974c2fadafa81e36c54e7d2a4c66702414b'
      ],
      [
        'e7a26ce69dd4829f3e10cec0a9e98ed3143d084f308b92c0997fddfc60cb3e41',
        '2a758e300fa7984b471b006a1aafbb18d0a6b2c0420e83e20e8a9421cf2cfd51'
      ],
      [
        'b6459e0ee3662ec8d23540c223bcbdc571cbcb967d79424f3cf29eb3de6b80ef',
        '67c876d06f3e06de1dadf16e5661db3c4b3ae6d48e35b2ff30bf0b61a71ba45'
      ],
      [
        'd68a80c8280bb840793234aa118f06231d6f1fc67e73c5a5deda0f5b496943e8',
        'db8ba9fff4b586d00c4b1f9177b0e28b5b0e7b8f7845295a294c84266b133120'
      ],
      [
        '324aed7df65c804252dc0270907a30b09612aeb973449cea4095980fc28d3d5d',
        '648a365774b61f2ff130c0c35aec1f4f19213b0c7e332843967224af96ab7c84'
      ],
      [
        '4df9c14919cde61f6d51dfdbe5fee5dceec4143ba8d1ca888e8bd373fd054c96',
        '35ec51092d8728050974c23a1d85d4b5d506cdc288490192ebac06cad10d5d'
      ],
      [
        '9c3919a84a474870faed8a9c1cc66021523489054d7f0308cbfc99c8ac1f98cd',
        'ddb84f0f4a4ddd57584f044bf260e641905326f76c64c8e6be7e5e03d4fc599d'
      ],
      [
        '6057170b1dd12fdf8de05f281d8e06bb91e1493a8b91d4cc5a21382120a959e5',
        '9a1af0b26a6a4807add9a2daf71df262465152bc3ee24c65e899be932385a2a8'
      ],
      [
        'a576df8e23a08411421439a4518da31880cef0fba7d4df12b1a6973eecb94266',
        '40a6bf20e76640b2c92b97afe58cd82c432e10a7f514d9f3ee8be11ae1b28ec8'
      ],
      [
        '7778a78c28dec3e30a05fe9629de8c38bb30d1f5cf9a3a208f763889be58ad71',
        '34626d9ab5a5b22ff7098e12f2ff580087b38411ff24ac563b513fc1fd9f43ac'
      ],
      [
        '928955ee637a84463729fd30e7afd2ed5f96274e5ad7e5cb09eda9c06d903ac',
        'c25621003d3f42a827b78a13093a95eeac3d26efa8a8d83fc5180e935bcd091f'
      ],
      [
        '85d0fef3ec6db109399064f3a0e3b2855645b4a907ad354527aae75163d82751',
        '1f03648413a38c0be29d496e582cf5663e8751e96877331582c237a24eb1f962'
      ],
      [
        'ff2b0dce97eece97c1c9b6041798b85dfdfb6d8882da20308f5404824526087e',
        '493d13fef524ba188af4c4dc54d07936c7b7ed6fb90e2ceb2c951e01f0c29907'
      ],
      [
        '827fbbe4b1e880ea9ed2b2e6301b212b57f1ee148cd6dd28780e5e2cf856e241',
        'c60f9c923c727b0b71bef2c67d1d12687ff7a63186903166d605b68baec293ec'
      ],
      [
        'eaa649f21f51bdbae7be4ae34ce6e5217a58fdce7f47f9aa7f3b58fa2120e2b3',
        'be3279ed5bbbb03ac69a80f89879aa5a01a6b965f13f7e59d47a5305ba5ad93d'
      ],
      [
        'e4a42d43c5cf169d9391df6decf42ee541b6d8f0c9a137401e23632dda34d24f',
        '4d9f92e716d1c73526fc99ccfb8ad34ce886eedfa8d8e4f13a7f7131deba9414'
      ],
      [
        '1ec80fef360cbdd954160fadab352b6b92b53576a88fea4947173b9d4300bf19',
        'aeefe93756b5340d2f3a4958a7abbf5e0146e77f6295a07b671cdc1cc107cefd'
      ],
      [
        '146a778c04670c2f91b00af4680dfa8bce3490717d58ba889ddb5928366642be',
        'b318e0ec3354028add669827f9d4b2870aaa971d2f7e5ed1d0b297483d83efd0'
      ],
      [
        'fa50c0f61d22e5f07e3acebb1aa07b128d0012209a28b9776d76a8793180eef9',
        '6b84c6922397eba9b72cd2872281a68a5e683293a57a213b38cd8d7d3f4f2811'
      ],
      [
        'da1d61d0ca721a11b1a5bf6b7d88e8421a288ab5d5bba5220e53d32b5f067ec2',
        '8157f55a7c99306c79c0766161c91e2966a73899d279b48a655fba0f1ad836f1'
      ],
      [
        'a8e282ff0c9706907215ff98e8fd416615311de0446f1e062a73b0610d064e13',
        '7f97355b8db81c09abfb7f3c5b2515888b679a3e50dd6bd6cef7c73111f4cc0c'
      ],
      [
        '174a53b9c9a285872d39e56e6913cab15d59b1fa512508c022f382de8319497c',
        'ccc9dc37abfc9c1657b4155f2c47f9e6646b3a1d8cb9854383da13ac079afa73'
      ],
      [
        '959396981943785c3d3e57edf5018cdbe039e730e4918b3d884fdff09475b7ba',
        '2e7e552888c331dd8ba0386a4b9cd6849c653f64c8709385e9b8abf87524f2fd'
      ],
      [
        'd2a63a50ae401e56d645a1153b109a8fcca0a43d561fba2dbb51340c9d82b151',
        'e82d86fb6443fcb7565aee58b2948220a70f750af484ca52d4142174dcf89405'
      ],
      [
        '64587e2335471eb890ee7896d7cfdc866bacbdbd3839317b3436f9b45617e073',
        'd99fcdd5bf6902e2ae96dd6447c299a185b90a39133aeab358299e5e9faf6589'
      ],
      [
        '8481bde0e4e4d885b3a546d3e549de042f0aa6cea250e7fd358d6c86dd45e458',
        '38ee7b8cba5404dd84a25bf39cecb2ca900a79c42b262e556d64b1b59779057e'
      ],
      [
        '13464a57a78102aa62b6979ae817f4637ffcfed3c4b1ce30bcd6303f6caf666b',
        '69be159004614580ef7e433453ccb0ca48f300a81d0942e13f495a907f6ecc27'
      ],
      [
        'bc4a9df5b713fe2e9aef430bcc1dc97a0cd9ccede2f28588cada3a0d2d83f366',
        'd3a81ca6e785c06383937adf4b798caa6e8a9fbfa547b16d758d666581f33c1'
      ],
      [
        '8c28a97bf8298bc0d23d8c749452a32e694b65e30a9472a3954ab30fe5324caa',
        '40a30463a3305193378fedf31f7cc0eb7ae784f0451cb9459e71dc73cbef9482'
      ],
      [
        '8ea9666139527a8c1dd94ce4f071fd23c8b350c5a4bb33748c4ba111faccae0',
        '620efabbc8ee2782e24e7c0cfb95c5d735b783be9cf0f8e955af34a30e62b945'
      ],
      [
        'dd3625faef5ba06074669716bbd3788d89bdde815959968092f76cc4eb9a9787',
        '7a188fa3520e30d461da2501045731ca941461982883395937f68d00c644a573'
      ],
      [
        'f710d79d9eb962297e4f6232b40e8f7feb2bc63814614d692c12de752408221e',
        'ea98e67232d3b3295d3b535532115ccac8612c721851617526ae47a9c77bfc82'
      ]
    ]
  },
  naf: {
    wnd: 7,
    points: [
      [
        'f9308a019258c31049344f85f89d5229b531c845836f99b08601f113bce036f9',
        '388f7b0f632de8140fe337e62a37f3566500a99934c2231b6cb9fd7584b8e672'
      ],
      [
        '2f8bde4d1a07209355b4a7250a5c5128e88b84bddc619ab7cba8d569b240efe4',
        'd8ac222636e5e3d6d4dba9dda6c9c426f788271bab0d6840dca87d3aa6ac62d6'
      ],
      [
        '5cbdf0646e5db4eaa398f365f2ea7a0e3d419b7e0330e39ce92bddedcac4f9bc',
        '6aebca40ba255960a3178d6d861a54dba813d0b813fde7b5a5082628087264da'
      ],
      [
        'acd484e2f0c7f65309ad178a9f559abde09796974c57e714c35f110dfc27ccbe',
        'cc338921b0a7d9fd64380971763b61e9add888a4375f8e0f05cc262ac64f9c37'
      ],
      [
        '774ae7f858a9411e5ef4246b70c65aac5649980be5c17891bbec17895da008cb',
        'd984a032eb6b5e190243dd56d7b7b365372db1e2dff9d6a8301d74c9c953c61b'
      ],
      [
        'f28773c2d975288bc7d1d205c3748651b075fbc6610e58cddeeddf8f19405aa8',
        'ab0902e8d880a89758212eb65cdaf473a1a06da521fa91f29b5cb52db03ed81'
      ],
      [
        'd7924d4f7d43ea965a465ae3095ff41131e5946f3c85f79e44adbcf8e27e080e',
        '581e2872a86c72a683842ec228cc6defea40af2bd896d3a5c504dc9ff6a26b58'
      ],
      [
        'defdea4cdb677750a420fee807eacf21eb9898ae79b9768766e4faa04a2d4a34',
        '4211ab0694635168e997b0ead2a93daeced1f4a04a95c0f6cfb199f69e56eb77'
      ],
      [
        '2b4ea0a797a443d293ef5cff444f4979f06acfebd7e86d277475656138385b6c',
        '85e89bc037945d93b343083b5a1c86131a01f60c50269763b570c854e5c09b7a'
      ],
      [
        '352bbf4a4cdd12564f93fa332ce333301d9ad40271f8107181340aef25be59d5',
        '321eb4075348f534d59c18259dda3e1f4a1b3b2e71b1039c67bd3d8bcf81998c'
      ],
      [
        '2fa2104d6b38d11b0230010559879124e42ab8dfeff5ff29dc9cdadd4ecacc3f',
        '2de1068295dd865b64569335bd5dd80181d70ecfc882648423ba76b532b7d67'
      ],
      [
        '9248279b09b4d68dab21a9b066edda83263c3d84e09572e269ca0cd7f5453714',
        '73016f7bf234aade5d1aa71bdea2b1ff3fc0de2a887912ffe54a32ce97cb3402'
      ],
      [
        'daed4f2be3a8bf278e70132fb0beb7522f570e144bf615c07e996d443dee8729',
        'a69dce4a7d6c98e8d4a1aca87ef8d7003f83c230f3afa726ab40e52290be1c55'
      ],
      [
        'c44d12c7065d812e8acf28d7cbb19f9011ecd9e9fdf281b0e6a3b5e87d22e7db',
        '2119a460ce326cdc76c45926c982fdac0e106e861edf61c5a039063f0e0e6482'
      ],
      [
        '6a245bf6dc698504c89a20cfded60853152b695336c28063b61c65cbd269e6b4',
        'e022cf42c2bd4a708b3f5126f16a24ad8b33ba48d0423b6efd5e6348100d8a82'
      ],
      [
        '1697ffa6fd9de627c077e3d2fe541084ce13300b0bec1146f95ae57f0d0bd6a5',
        'b9c398f186806f5d27561506e4557433a2cf15009e498ae7adee9d63d01b2396'
      ],
      [
        '605bdb019981718b986d0f07e834cb0d9deb8360ffb7f61df982345ef27a7479',
        '2972d2de4f8d20681a78d93ec96fe23c26bfae84fb14db43b01e1e9056b8c49'
      ],
      [
        '62d14dab4150bf497402fdc45a215e10dcb01c354959b10cfe31c7e9d87ff33d',
        '80fc06bd8cc5b01098088a1950eed0db01aa132967ab472235f5642483b25eaf'
      ],
      [
        '80c60ad0040f27dade5b4b06c408e56b2c50e9f56b9b8b425e555c2f86308b6f',
        '1c38303f1cc5c30f26e66bad7fe72f70a65eed4cbe7024eb1aa01f56430bd57a'
      ],
      [
        '7a9375ad6167ad54aa74c6348cc54d344cc5dc9487d847049d5eabb0fa03c8fb',
        'd0e3fa9eca8726909559e0d79269046bdc59ea10c70ce2b02d499ec224dc7f7'
      ],
      [
        'd528ecd9b696b54c907a9ed045447a79bb408ec39b68df504bb51f459bc3ffc9',
        'eecf41253136e5f99966f21881fd656ebc4345405c520dbc063465b521409933'
      ],
      [
        '49370a4b5f43412ea25f514e8ecdad05266115e4a7ecb1387231808f8b45963',
        '758f3f41afd6ed428b3081b0512fd62a54c3f3afbb5b6764b653052a12949c9a'
      ],
      [
        '77f230936ee88cbbd73df930d64702ef881d811e0e1498e2f1c13eb1fc345d74',
        '958ef42a7886b6400a08266e9ba1b37896c95330d97077cbbe8eb3c7671c60d6'
      ],
      [
        'f2dac991cc4ce4b9ea44887e5c7c0bce58c80074ab9d4dbaeb28531b7739f530',
        'e0dedc9b3b2f8dad4da1f32dec2531df9eb5fbeb0598e4fd1a117dba703a3c37'
      ],
      [
        '463b3d9f662621fb1b4be8fbbe2520125a216cdfc9dae3debcba4850c690d45b',
        '5ed430d78c296c3543114306dd8622d7c622e27c970a1de31cb377b01af7307e'
      ],
      [
        'f16f804244e46e2a09232d4aff3b59976b98fac14328a2d1a32496b49998f247',
        'cedabd9b82203f7e13d206fcdf4e33d92a6c53c26e5cce26d6579962c4e31df6'
      ],
      [
        'caf754272dc84563b0352b7a14311af55d245315ace27c65369e15f7151d41d1',
        'cb474660ef35f5f2a41b643fa5e460575f4fa9b7962232a5c32f908318a04476'
      ],
      [
        '2600ca4b282cb986f85d0f1709979d8b44a09c07cb86d7c124497bc86f082120',
        '4119b88753c15bd6a693b03fcddbb45d5ac6be74ab5f0ef44b0be9475a7e4b40'
      ],
      [
        '7635ca72d7e8432c338ec53cd12220bc01c48685e24f7dc8c602a7746998e435',
        '91b649609489d613d1d5e590f78e6d74ecfc061d57048bad9e76f302c5b9c61'
      ],
      [
        '754e3239f325570cdbbf4a87deee8a66b7f2b33479d468fbc1a50743bf56cc18',
        '673fb86e5bda30fb3cd0ed304ea49a023ee33d0197a695d0c5d98093c536683'
      ],
      [
        'e3e6bd1071a1e96aff57859c82d570f0330800661d1c952f9fe2694691d9b9e8',
        '59c9e0bba394e76f40c0aa58379a3cb6a5a2283993e90c4167002af4920e37f5'
      ],
      [
        '186b483d056a033826ae73d88f732985c4ccb1f32ba35f4b4cc47fdcf04aa6eb',
        '3b952d32c67cf77e2e17446e204180ab21fb8090895138b4a4a797f86e80888b'
      ],
      [
        'df9d70a6b9876ce544c98561f4be4f725442e6d2b737d9c91a8321724ce0963f',
        '55eb2dafd84d6ccd5f862b785dc39d4ab157222720ef9da217b8c45cf2ba2417'
      ],
      [
        '5edd5cc23c51e87a497ca815d5dce0f8ab52554f849ed8995de64c5f34ce7143',
        'efae9c8dbc14130661e8cec030c89ad0c13c66c0d17a2905cdc706ab7399a868'
      ],
      [
        '290798c2b6476830da12fe02287e9e777aa3fba1c355b17a722d362f84614fba',
        'e38da76dcd440621988d00bcf79af25d5b29c094db2a23146d003afd41943e7a'
      ],
      [
        'af3c423a95d9f5b3054754efa150ac39cd29552fe360257362dfdecef4053b45',
        'f98a3fd831eb2b749a93b0e6f35cfb40c8cd5aa667a15581bc2feded498fd9c6'
      ],
      [
        '766dbb24d134e745cccaa28c99bf274906bb66b26dcf98df8d2fed50d884249a',
        '744b1152eacbe5e38dcc887980da38b897584a65fa06cedd2c924f97cbac5996'
      ],
      [
        '59dbf46f8c94759ba21277c33784f41645f7b44f6c596a58ce92e666191abe3e',
        'c534ad44175fbc300f4ea6ce648309a042ce739a7919798cd85e216c4a307f6e'
      ],
      [
        'f13ada95103c4537305e691e74e9a4a8dd647e711a95e73cb62dc6018cfd87b8',
        'e13817b44ee14de663bf4bc808341f326949e21a6a75c2570778419bdaf5733d'
      ],
      [
        '7754b4fa0e8aced06d4167a2c59cca4cda1869c06ebadfb6488550015a88522c',
        '30e93e864e669d82224b967c3020b8fa8d1e4e350b6cbcc537a48b57841163a2'
      ],
      [
        '948dcadf5990e048aa3874d46abef9d701858f95de8041d2a6828c99e2262519',
        'e491a42537f6e597d5d28a3224b1bc25df9154efbd2ef1d2cbba2cae5347d57e'
      ],
      [
        '7962414450c76c1689c7b48f8202ec37fb224cf5ac0bfa1570328a8a3d7c77ab',
        '100b610ec4ffb4760d5c1fc133ef6f6b12507a051f04ac5760afa5b29db83437'
      ],
      [
        '3514087834964b54b15b160644d915485a16977225b8847bb0dd085137ec47ca',
        'ef0afbb2056205448e1652c48e8127fc6039e77c15c2378b7e7d15a0de293311'
      ],
      [
        'd3cc30ad6b483e4bc79ce2c9dd8bc54993e947eb8df787b442943d3f7b527eaf',
        '8b378a22d827278d89c5e9be8f9508ae3c2ad46290358630afb34db04eede0a4'
      ],
      [
        '1624d84780732860ce1c78fcbfefe08b2b29823db913f6493975ba0ff4847610',
        '68651cf9b6da903e0914448c6cd9d4ca896878f5282be4c8cc06e2a404078575'
      ],
      [
        '733ce80da955a8a26902c95633e62a985192474b5af207da6df7b4fd5fc61cd4',
        'f5435a2bd2badf7d485a4d8b8db9fcce3e1ef8e0201e4578c54673bc1dc5ea1d'
      ],
      [
        '15d9441254945064cf1a1c33bbd3b49f8966c5092171e699ef258dfab81c045c',
        'd56eb30b69463e7234f5137b73b84177434800bacebfc685fc37bbe9efe4070d'
      ],
      [
        'a1d0fcf2ec9de675b612136e5ce70d271c21417c9d2b8aaaac138599d0717940',
        'edd77f50bcb5a3cab2e90737309667f2641462a54070f3d519212d39c197a629'
      ],
      [
        'e22fbe15c0af8ccc5780c0735f84dbe9a790badee8245c06c7ca37331cb36980',
        'a855babad5cd60c88b430a69f53a1a7a38289154964799be43d06d77d31da06'
      ],
      [
        '311091dd9860e8e20ee13473c1155f5f69635e394704eaa74009452246cfa9b3',
        '66db656f87d1f04fffd1f04788c06830871ec5a64feee685bd80f0b1286d8374'
      ],
      [
        '34c1fd04d301be89b31c0442d3e6ac24883928b45a9340781867d4232ec2dbdf',
        '9414685e97b1b5954bd46f730174136d57f1ceeb487443dc5321857ba73abee'
      ],
      [
        'f219ea5d6b54701c1c14de5b557eb42a8d13f3abbcd08affcc2a5e6b049b8d63',
        '4cb95957e83d40b0f73af4544cccf6b1f4b08d3c07b27fb8d8c2962a400766d1'
      ],
      [
        'd7b8740f74a8fbaab1f683db8f45de26543a5490bca627087236912469a0b448',
        'fa77968128d9c92ee1010f337ad4717eff15db5ed3c049b3411e0315eaa4593b'
      ],
      [
        '32d31c222f8f6f0ef86f7c98d3a3335ead5bcd32abdd94289fe4d3091aa824bf',
        '5f3032f5892156e39ccd3d7915b9e1da2e6dac9e6f26e961118d14b8462e1661'
      ],
      [
        '7461f371914ab32671045a155d9831ea8793d77cd59592c4340f86cbc18347b5',
        '8ec0ba238b96bec0cbdddcae0aa442542eee1ff50c986ea6b39847b3cc092ff6'
      ],
      [
        'ee079adb1df1860074356a25aa38206a6d716b2c3e67453d287698bad7b2b2d6',
        '8dc2412aafe3be5c4c5f37e0ecc5f9f6a446989af04c4e25ebaac479ec1c8c1e'
      ],
      [
        '16ec93e447ec83f0467b18302ee620f7e65de331874c9dc72bfd8616ba9da6b5',
        '5e4631150e62fb40d0e8c2a7ca5804a39d58186a50e497139626778e25b0674d'
      ],
      [
        'eaa5f980c245f6f038978290afa70b6bd8855897f98b6aa485b96065d537bd99',
        'f65f5d3e292c2e0819a528391c994624d784869d7e6ea67fb18041024edc07dc'
      ],
      [
        '78c9407544ac132692ee1910a02439958ae04877151342ea96c4b6b35a49f51',
        'f3e0319169eb9b85d5404795539a5e68fa1fbd583c064d2462b675f194a3ddb4'
      ],
      [
        '494f4be219a1a77016dcd838431aea0001cdc8ae7a6fc688726578d9702857a5',
        '42242a969283a5f339ba7f075e36ba2af925ce30d767ed6e55f4b031880d562c'
      ],
      [
        'a598a8030da6d86c6bc7f2f5144ea549d28211ea58faa70ebf4c1e665c1fe9b5',
        '204b5d6f84822c307e4b4a7140737aec23fc63b65b35f86a10026dbd2d864e6b'
      ],
      [
        'c41916365abb2b5d09192f5f2dbeafec208f020f12570a184dbadc3e58595997',
        '4f14351d0087efa49d245b328984989d5caf9450f34bfc0ed16e96b58fa9913'
      ],
      [
        '841d6063a586fa475a724604da03bc5b92a2e0d2e0a36acfe4c73a5514742881',
        '73867f59c0659e81904f9a1c7543698e62562d6744c169ce7a36de01a8d6154'
      ],
      [
        '5e95bb399a6971d376026947f89bde2f282b33810928be4ded112ac4d70e20d5',
        '39f23f366809085beebfc71181313775a99c9aed7d8ba38b161384c746012865'
      ],
      [
        '36e4641a53948fd476c39f8a99fd974e5ec07564b5315d8bf99471bca0ef2f66',
        'd2424b1b1abe4eb8164227b085c9aa9456ea13493fd563e06fd51cf5694c78fc'
      ],
      [
        '336581ea7bfbbb290c191a2f507a41cf5643842170e914faeab27c2c579f726',
        'ead12168595fe1be99252129b6e56b3391f7ab1410cd1e0ef3dcdcabd2fda224'
      ],
      [
        '8ab89816dadfd6b6a1f2634fcf00ec8403781025ed6890c4849742706bd43ede',
        '6fdcef09f2f6d0a044e654aef624136f503d459c3e89845858a47a9129cdd24e'
      ],
      [
        '1e33f1a746c9c5778133344d9299fcaa20b0938e8acff2544bb40284b8c5fb94',
        '60660257dd11b3aa9c8ed618d24edff2306d320f1d03010e33a7d2057f3b3b6'
      ],
      [
        '85b7c1dcb3cec1b7ee7f30ded79dd20a0ed1f4cc18cbcfcfa410361fd8f08f31',
        '3d98a9cdd026dd43f39048f25a8847f4fcafad1895d7a633c6fed3c35e999511'
      ],
      [
        '29df9fbd8d9e46509275f4b125d6d45d7fbe9a3b878a7af872a2800661ac5f51',
        'b4c4fe99c775a606e2d8862179139ffda61dc861c019e55cd2876eb2a27d84b'
      ],
      [
        'a0b1cae06b0a847a3fea6e671aaf8adfdfe58ca2f768105c8082b2e449fce252',
        'ae434102edde0958ec4b19d917a6a28e6b72da1834aff0e650f049503a296cf2'
      ],
      [
        '4e8ceafb9b3e9a136dc7ff67e840295b499dfb3b2133e4ba113f2e4c0e121e5',
        'cf2174118c8b6d7a4b48f6d534ce5c79422c086a63460502b827ce62a326683c'
      ],
      [
        'd24a44e047e19b6f5afb81c7ca2f69080a5076689a010919f42725c2b789a33b',
        '6fb8d5591b466f8fc63db50f1c0f1c69013f996887b8244d2cdec417afea8fa3'
      ],
      [
        'ea01606a7a6c9cdd249fdfcfacb99584001edd28abbab77b5104e98e8e3b35d4',
        '322af4908c7312b0cfbfe369f7a7b3cdb7d4494bc2823700cfd652188a3ea98d'
      ],
      [
        'af8addbf2b661c8a6c6328655eb96651252007d8c5ea31be4ad196de8ce2131f',
        '6749e67c029b85f52a034eafd096836b2520818680e26ac8f3dfbcdb71749700'
      ],
      [
        'e3ae1974566ca06cc516d47e0fb165a674a3dabcfca15e722f0e3450f45889',
        '2aeabe7e4531510116217f07bf4d07300de97e4874f81f533420a72eeb0bd6a4'
      ],
      [
        '591ee355313d99721cf6993ffed1e3e301993ff3ed258802075ea8ced397e246',
        'b0ea558a113c30bea60fc4775460c7901ff0b053d25ca2bdeee98f1a4be5d196'
      ],
      [
        '11396d55fda54c49f19aa97318d8da61fa8584e47b084945077cf03255b52984',
        '998c74a8cd45ac01289d5833a7beb4744ff536b01b257be4c5767bea93ea57a4'
      ],
      [
        '3c5d2a1ba39c5a1790000738c9e0c40b8dcdfd5468754b6405540157e017aa7a',
        'b2284279995a34e2f9d4de7396fc18b80f9b8b9fdd270f6661f79ca4c81bd257'
      ],
      [
        'cc8704b8a60a0defa3a99a7299f2e9c3fbc395afb04ac078425ef8a1793cc030',
        'bdd46039feed17881d1e0862db347f8cf395b74fc4bcdc4e940b74e3ac1f1b13'
      ],
      [
        'c533e4f7ea8555aacd9777ac5cad29b97dd4defccc53ee7ea204119b2889b197',
        '6f0a256bc5efdf429a2fb6242f1a43a2d9b925bb4a4b3a26bb8e0f45eb596096'
      ],
      [
        'c14f8f2ccb27d6f109f6d08d03cc96a69ba8c34eec07bbcf566d48e33da6593',
        'c359d6923bb398f7fd4473e16fe1c28475b740dd098075e6c0e8649113dc3a38'
      ],
      [
        'a6cbc3046bc6a450bac24789fa17115a4c9739ed75f8f21ce441f72e0b90e6ef',
        '21ae7f4680e889bb130619e2c0f95a360ceb573c70603139862afd617fa9b9f'
      ],
      [
        '347d6d9a02c48927ebfb86c1359b1caf130a3c0267d11ce6344b39f99d43cc38',
        '60ea7f61a353524d1c987f6ecec92f086d565ab687870cb12689ff1e31c74448'
      ],
      [
        'da6545d2181db8d983f7dcb375ef5866d47c67b1bf31c8cf855ef7437b72656a',
        '49b96715ab6878a79e78f07ce5680c5d6673051b4935bd897fea824b77dc208a'
      ],
      [
        'c40747cc9d012cb1a13b8148309c6de7ec25d6945d657146b9d5994b8feb1111',
        '5ca560753be2a12fc6de6caf2cb489565db936156b9514e1bb5e83037e0fa2d4'
      ],
      [
        '4e42c8ec82c99798ccf3a610be870e78338c7f713348bd34c8203ef4037f3502',
        '7571d74ee5e0fb92a7a8b33a07783341a5492144cc54bcc40a94473693606437'
      ],
      [
        '3775ab7089bc6af823aba2e1af70b236d251cadb0c86743287522a1b3b0dedea',
        'be52d107bcfa09d8bcb9736a828cfa7fac8db17bf7a76a2c42ad961409018cf7'
      ],
      [
        'cee31cbf7e34ec379d94fb814d3d775ad954595d1314ba8846959e3e82f74e26',
        '8fd64a14c06b589c26b947ae2bcf6bfa0149ef0be14ed4d80f448a01c43b1c6d'
      ],
      [
        'b4f9eaea09b6917619f6ea6a4eb5464efddb58fd45b1ebefcdc1a01d08b47986',
        '39e5c9925b5a54b07433a4f18c61726f8bb131c012ca542eb24a8ac07200682a'
      ],
      [
        'd4263dfc3d2df923a0179a48966d30ce84e2515afc3dccc1b77907792ebcc60e',
        '62dfaf07a0f78feb30e30d6295853ce189e127760ad6cf7fae164e122a208d54'
      ],
      [
        '48457524820fa65a4f8d35eb6930857c0032acc0a4a2de422233eeda897612c4',
        '25a748ab367979d98733c38a1fa1c2e7dc6cc07db2d60a9ae7a76aaa49bd0f77'
      ],
      [
        'dfeeef1881101f2cb11644f3a2afdfc2045e19919152923f367a1767c11cceda',
        'ecfb7056cf1de042f9420bab396793c0c390bde74b4bbdff16a83ae09a9a7517'
      ],
      [
        '6d7ef6b17543f8373c573f44e1f389835d89bcbc6062ced36c82df83b8fae859',
        'cd450ec335438986dfefa10c57fea9bcc521a0959b2d80bbf74b190dca712d10'
      ],
      [
        'e75605d59102a5a2684500d3b991f2e3f3c88b93225547035af25af66e04541f',
        'f5c54754a8f71ee540b9b48728473e314f729ac5308b06938360990e2bfad125'
      ],
      [
        'eb98660f4c4dfaa06a2be453d5020bc99a0c2e60abe388457dd43fefb1ed620c',
        '6cb9a8876d9cb8520609af3add26cd20a0a7cd8a9411131ce85f44100099223e'
      ],
      [
        '13e87b027d8514d35939f2e6892b19922154596941888336dc3563e3b8dba942',
        'fef5a3c68059a6dec5d624114bf1e91aac2b9da568d6abeb2570d55646b8adf1'
      ],
      [
        'ee163026e9fd6fe017c38f06a5be6fc125424b371ce2708e7bf4491691e5764a',
        '1acb250f255dd61c43d94ccc670d0f58f49ae3fa15b96623e5430da0ad6c62b2'
      ],
      [
        'b268f5ef9ad51e4d78de3a750c2dc89b1e626d43505867999932e5db33af3d80',
        '5f310d4b3c99b9ebb19f77d41c1dee018cf0d34fd4191614003e945a1216e423'
      ],
      [
        'ff07f3118a9df035e9fad85eb6c7bfe42b02f01ca99ceea3bf7ffdba93c4750d',
        '438136d603e858a3a5c440c38eccbaddc1d2942114e2eddd4740d098ced1f0d8'
      ],
      [
        '8d8b9855c7c052a34146fd20ffb658bea4b9f69e0d825ebec16e8c3ce2b526a1',
        'cdb559eedc2d79f926baf44fb84ea4d44bcf50fee51d7ceb30e2e7f463036758'
      ],
      [
        '52db0b5384dfbf05bfa9d472d7ae26dfe4b851ceca91b1eba54263180da32b63',
        'c3b997d050ee5d423ebaf66a6db9f57b3180c902875679de924b69d84a7b375'
      ],
      [
        'e62f9490d3d51da6395efd24e80919cc7d0f29c3f3fa48c6fff543becbd43352',
        '6d89ad7ba4876b0b22c2ca280c682862f342c8591f1daf5170e07bfd9ccafa7d'
      ],
      [
        '7f30ea2476b399b4957509c88f77d0191afa2ff5cb7b14fd6d8e7d65aaab1193',
        'ca5ef7d4b231c94c3b15389a5f6311e9daff7bb67b103e9880ef4bff637acaec'
      ],
      [
        '5098ff1e1d9f14fb46a210fada6c903fef0fb7b4a1dd1d9ac60a0361800b7a00',
        '9731141d81fc8f8084d37c6e7542006b3ee1b40d60dfe5362a5b132fd17ddc0'
      ],
      [
        '32b78c7de9ee512a72895be6b9cbefa6e2f3c4ccce445c96b9f2c81e2778ad58',
        'ee1849f513df71e32efc3896ee28260c73bb80547ae2275ba497237794c8753c'
      ],
      [
        'e2cb74fddc8e9fbcd076eef2a7c72b0ce37d50f08269dfc074b581550547a4f7',
        'd3aa2ed71c9dd2247a62df062736eb0baddea9e36122d2be8641abcb005cc4a4'
      ],
      [
        '8438447566d4d7bedadc299496ab357426009a35f235cb141be0d99cd10ae3a8',
        'c4e1020916980a4da5d01ac5e6ad330734ef0d7906631c4f2390426b2edd791f'
      ],
      [
        '4162d488b89402039b584c6fc6c308870587d9c46f660b878ab65c82c711d67e',
        '67163e903236289f776f22c25fb8a3afc1732f2b84b4e95dbda47ae5a0852649'
      ],
      [
        '3fad3fa84caf0f34f0f89bfd2dcf54fc175d767aec3e50684f3ba4a4bf5f683d',
        'cd1bc7cb6cc407bb2f0ca647c718a730cf71872e7d0d2a53fa20efcdfe61826'
      ],
      [
        '674f2600a3007a00568c1a7ce05d0816c1fb84bf1370798f1c69532faeb1a86b',
        '299d21f9413f33b3edf43b257004580b70db57da0b182259e09eecc69e0d38a5'
      ],
      [
        'd32f4da54ade74abb81b815ad1fb3b263d82d6c692714bcff87d29bd5ee9f08f',
        'f9429e738b8e53b968e99016c059707782e14f4535359d582fc416910b3eea87'
      ],
      [
        '30e4e670435385556e593657135845d36fbb6931f72b08cb1ed954f1e3ce3ff6',
        '462f9bce619898638499350113bbc9b10a878d35da70740dc695a559eb88db7b'
      ],
      [
        'be2062003c51cc3004682904330e4dee7f3dcd10b01e580bf1971b04d4cad297',
        '62188bc49d61e5428573d48a74e1c655b1c61090905682a0d5558ed72dccb9bc'
      ],
      [
        '93144423ace3451ed29e0fb9ac2af211cb6e84a601df5993c419859fff5df04a',
        '7c10dfb164c3425f5c71a3f9d7992038f1065224f72bb9d1d902a6d13037b47c'
      ],
      [
        'b015f8044f5fcbdcf21ca26d6c34fb8197829205c7b7d2a7cb66418c157b112c',
        'ab8c1e086d04e813744a655b2df8d5f83b3cdc6faa3088c1d3aea1454e3a1d5f'
      ],
      [
        'd5e9e1da649d97d89e4868117a465a3a4f8a18de57a140d36b3f2af341a21b52',
        '4cb04437f391ed73111a13cc1d4dd0db1693465c2240480d8955e8592f27447a'
      ],
      [
        'd3ae41047dd7ca065dbf8ed77b992439983005cd72e16d6f996a5316d36966bb',
        'bd1aeb21ad22ebb22a10f0303417c6d964f8cdd7df0aca614b10dc14d125ac46'
      ],
      [
        '463e2763d885f958fc66cdd22800f0a487197d0a82e377b49f80af87c897b065',
        'bfefacdb0e5d0fd7df3a311a94de062b26b80c61fbc97508b79992671ef7ca7f'
      ],
      [
        '7985fdfd127c0567c6f53ec1bb63ec3158e597c40bfe747c83cddfc910641917',
        '603c12daf3d9862ef2b25fe1de289aed24ed291e0ec6708703a5bd567f32ed03'
      ],
      [
        '74a1ad6b5f76e39db2dd249410eac7f99e74c59cb83d2d0ed5ff1543da7703e9',
        'cc6157ef18c9c63cd6193d83631bbea0093e0968942e8c33d5737fd790e0db08'
      ],
      [
        '30682a50703375f602d416664ba19b7fc9bab42c72747463a71d0896b22f6da3',
        '553e04f6b018b4fa6c8f39e7f311d3176290d0e0f19ca73f17714d9977a22ff8'
      ],
      [
        '9e2158f0d7c0d5f26c3791efefa79597654e7a2b2464f52b1ee6c1347769ef57',
        '712fcdd1b9053f09003a3481fa7762e9ffd7c8ef35a38509e2fbf2629008373'
      ],
      [
        '176e26989a43c9cfeba4029c202538c28172e566e3c4fce7322857f3be327d66',
        'ed8cc9d04b29eb877d270b4878dc43c19aefd31f4eee09ee7b47834c1fa4b1c3'
      ],
      [
        '75d46efea3771e6e68abb89a13ad747ecf1892393dfc4f1b7004788c50374da8',
        '9852390a99507679fd0b86fd2b39a868d7efc22151346e1a3ca4726586a6bed8'
      ],
      [
        '809a20c67d64900ffb698c4c825f6d5f2310fb0451c869345b7319f645605721',
        '9e994980d9917e22b76b061927fa04143d096ccc54963e6a5ebfa5f3f8e286c1'
      ],
      [
        '1b38903a43f7f114ed4500b4eac7083fdefece1cf29c63528d563446f972c180',
        '4036edc931a60ae889353f77fd53de4a2708b26b6f5da72ad3394119daf408f9'
      ]
    ]
  }
};

},{}],"/Users/jrmerz/dev/cstars/AHB/farm-budgets-app/node_modules/elliptic/lib/elliptic/utils.js":[function(require,module,exports){
'use strict';

var utils = exports;
var bn = require('bn.js');

utils.assert = function assert(val, msg) {
  if (!val)
    throw new Error(msg || 'Assertion failed');
};

function toArray(msg, enc) {
  if (Array.isArray(msg))
    return msg.slice();
  if (!msg)
    return [];
  var res = [];
  if (typeof msg !== 'string') {
    for (var i = 0; i < msg.length; i++)
      res[i] = msg[i] | 0;
    return res;
  }
  if (!enc) {
    for (var i = 0; i < msg.length; i++) {
      var c = msg.charCodeAt(i);
      var hi = c >> 8;
      var lo = c & 0xff;
      if (hi)
        res.push(hi, lo);
      else
        res.push(lo);
    }
  } else if (enc === 'hex') {
    msg = msg.replace(/[^a-z0-9]+/ig, '');
    if (msg.length % 2 !== 0)
      msg = '0' + msg;
    for (var i = 0; i < msg.length; i += 2)
      res.push(parseInt(msg[i] + msg[i + 1], 16));
  }
  return res;
}
utils.toArray = toArray;

function zero2(word) {
  if (word.length === 1)
    return '0' + word;
  else
    return word;
}
utils.zero2 = zero2;

function toHex(msg) {
  var res = '';
  for (var i = 0; i < msg.length; i++)
    res += zero2(msg[i].toString(16));
  return res;
}
utils.toHex = toHex;

utils.encode = function encode(arr, enc) {
  if (enc === 'hex')
    return toHex(arr);
  else
    return arr;
};

// Represent num in a w-NAF form
function getNAF(num, w) {
  var naf = [];
  var ws = 1 << (w + 1);
  var k = num.clone();
  while (k.cmpn(1) >= 0) {
    var z;
    if (k.isOdd()) {
      var mod = k.andln(ws - 1);
      if (mod > (ws >> 1) - 1)
        z = (ws >> 1) - mod;
      else
        z = mod;
      k.isubn(z);
    } else {
      z = 0;
    }
    naf.push(z);

    // Optimization, shift by word if possible
    var shift = (k.cmpn(0) !== 0 && k.andln(ws - 1) === 0) ? (w + 1) : 1;
    for (var i = 1; i < shift; i++)
      naf.push(0);
    k.iushrn(shift);
  }

  return naf;
}
utils.getNAF = getNAF;

// Represent k1, k2 in a Joint Sparse Form
function getJSF(k1, k2) {
  var jsf = [
    [],
    []
  ];

  k1 = k1.clone();
  k2 = k2.clone();
  var d1 = 0;
  var d2 = 0;
  while (k1.cmpn(-d1) > 0 || k2.cmpn(-d2) > 0) {

    // First phase
    var m14 = (k1.andln(3) + d1) & 3;
    var m24 = (k2.andln(3) + d2) & 3;
    if (m14 === 3)
      m14 = -1;
    if (m24 === 3)
      m24 = -1;
    var u1;
    if ((m14 & 1) === 0) {
      u1 = 0;
    } else {
      var m8 = (k1.andln(7) + d1) & 7;
      if ((m8 === 3 || m8 === 5) && m24 === 2)
        u1 = -m14;
      else
        u1 = m14;
    }
    jsf[0].push(u1);

    var u2;
    if ((m24 & 1) === 0) {
      u2 = 0;
    } else {
      var m8 = (k2.andln(7) + d2) & 7;
      if ((m8 === 3 || m8 === 5) && m14 === 2)
        u2 = -m24;
      else
        u2 = m24;
    }
    jsf[1].push(u2);

    // Second phase
    if (2 * d1 === u1 + 1)
      d1 = 1 - d1;
    if (2 * d2 === u2 + 1)
      d2 = 1 - d2;
    k1.iushrn(1);
    k2.iushrn(1);
  }

  return jsf;
}
utils.getJSF = getJSF;

function cachedProperty(obj, computer) {
  var name = computer.name;
  var key = '_' + name;
  obj.prototype[name] = function cachedProperty() {
    return this[key] !== undefined ? this[key] :
           this[key] = computer.call(this);
  };
}
utils.cachedProperty = cachedProperty;

function parseBytes(bytes) {
  return typeof bytes === 'string' ? utils.toArray(bytes, 'hex') :
                                     bytes;
}
utils.parseBytes = parseBytes;

function intFromLE(bytes) {
  return new bn(bytes, 'hex', 'le');
}
utils.intFromLE = intFromLE;


},{"bn.js":"/Users/jrmerz/dev/cstars/AHB/farm-budgets-app/node_modules/elliptic/node_modules/bn.js/lib/bn.js"}],"/Users/jrmerz/dev/cstars/AHB/farm-budgets-app/node_modules/elliptic/node_modules/bn.js/lib/bn.js":[function(require,module,exports){
arguments[4]["/Users/jrmerz/dev/cstars/AHB/farm-budgets-app/node_modules/browserify-rsa/node_modules/bn.js/lib/bn.js"][0].apply(exports,arguments)
},{}],"/Users/jrmerz/dev/cstars/AHB/farm-budgets-app/node_modules/elliptic/package.json":[function(require,module,exports){
module.exports={
  "_args": [
    [
      "elliptic@^6.0.0",
      "/Users/jrmerz/dev/cstars/AHB/farm-budgets-app/node_modules/browserify-sign"
    ]
  ],
  "_from": "elliptic@>=6.0.0 <7.0.0",
  "_id": "elliptic@6.0.2",
  "_inCache": true,
  "_installable": true,
  "_location": "/elliptic",
  "_nodeVersion": "5.0.0",
  "_npmUser": {
    "email": "fedor@indutny.com",
    "name": "indutny"
  },
  "_npmVersion": "3.3.6",
  "_phantomChildren": {},
  "_requested": {
    "name": "elliptic",
    "raw": "elliptic@^6.0.0",
    "rawSpec": "^6.0.0",
    "scope": null,
    "spec": ">=6.0.0 <7.0.0",
    "type": "range"
  },
  "_requiredBy": [
    "/browserify-sign",
    "/create-ecdh"
  ],
  "_resolved": "https://registry.npmjs.org/elliptic/-/elliptic-6.0.2.tgz",
  "_shasum": "219b96cd92aa9885d91d31c1fd42eaa5eb4483a9",
  "_shrinkwrap": null,
  "_spec": "elliptic@^6.0.0",
  "_where": "/Users/jrmerz/dev/cstars/AHB/farm-budgets-app/node_modules/browserify-sign",
  "author": {
    "email": "fedor@indutny.com",
    "name": "Fedor Indutny"
  },
  "bugs": {
    "url": "https://github.com/indutny/elliptic/issues"
  },
  "dependencies": {
    "bn.js": "^4.0.0",
    "brorand": "^1.0.1",
    "hash.js": "^1.0.0",
    "inherits": "^2.0.1"
  },
  "description": "EC cryptography",
  "devDependencies": {
    "browserify": "^3.44.2",
    "coveralls": "^2.11.3",
    "istanbul": "^0.3.17",
    "jscs": "^1.11.3",
    "jshint": "^2.6.0",
    "mocha": "^2.1.0",
    "uglify-js": "^2.4.13"
  },
  "directories": {},
  "dist": {
    "shasum": "219b96cd92aa9885d91d31c1fd42eaa5eb4483a9",
    "tarball": "http://registry.npmjs.org/elliptic/-/elliptic-6.0.2.tgz"
  },
  "files": [
    "lib"
  ],
  "gitHead": "330106da186712d228d79bc71ae8e7e68565fa9d",
  "homepage": "https://github.com/indutny/elliptic",
  "keywords": [
    "Cryptography",
    "EC",
    "Elliptic",
    "curve"
  ],
  "license": "MIT",
  "main": "lib/elliptic.js",
  "maintainers": [
    {
      "name": "indutny",
      "email": "fedor@indutny.com"
    }
  ],
  "name": "elliptic",
  "optionalDependencies": {},
  "readme": "ERROR: No README data found!",
  "repository": {
    "type": "git",
    "url": "git+ssh://git@github.com/indutny/elliptic.git"
  },
  "scripts": {
    "coveralls": "cat ./coverage/lcov.info | coveralls",
    "test": "make lint && istanbul test _mocha --reporter=spec test/*-test.js"
  },
  "version": "6.0.2"
}

},{}],"/Users/jrmerz/dev/cstars/AHB/farm-budgets-app/node_modules/events/events.js":[function(require,module,exports){
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

},{}],"/Users/jrmerz/dev/cstars/AHB/farm-budgets-app/node_modules/evp_bytestokey/index.js":[function(require,module,exports){
(function (Buffer){
var md5 = require('create-hash/md5')
module.exports = EVP_BytesToKey
function EVP_BytesToKey (password, salt, keyLen, ivLen) {
  if (!Buffer.isBuffer(password)) {
    password = new Buffer(password, 'binary')
  }
  if (salt && !Buffer.isBuffer(salt)) {
    salt = new Buffer(salt, 'binary')
  }
  keyLen = keyLen / 8
  ivLen = ivLen || 0
  var ki = 0
  var ii = 0
  var key = new Buffer(keyLen)
  var iv = new Buffer(ivLen)
  var addmd = 0
  var md_buf
  var i
  var bufs = []
  while (true) {
    if (addmd++ > 0) {
      bufs.push(md_buf)
    }
    bufs.push(password)
    if (salt) {
      bufs.push(salt)
    }
    md_buf = md5(Buffer.concat(bufs))
    bufs = []
    i = 0
    if (keyLen > 0) {
      while (true) {
        if (keyLen === 0) {
          break
        }
        if (i === md_buf.length) {
          break
        }
        key[ki++] = md_buf[i]
        keyLen--
        i++
      }
    }
    if (ivLen > 0 && i !== md_buf.length) {
      while (true) {
        if (ivLen === 0) {
          break
        }
        if (i === md_buf.length) {
          break
        }
        iv[ii++] = md_buf[i]
        ivLen--
        i++
      }
    }
    if (keyLen === 0 && ivLen === 0) {
      break
    }
  }
  for (i = 0; i < md_buf.length; i++) {
    md_buf[i] = 0
  }
  return {
    key: key,
    iv: iv
  }
}

}).call(this,require("buffer").Buffer)

},{"buffer":"/Users/jrmerz/dev/cstars/AHB/farm-budgets-app/node_modules/buffer/index.js","create-hash/md5":"/Users/jrmerz/dev/cstars/AHB/farm-budgets-app/node_modules/create-hash/md5.js"}],"/Users/jrmerz/dev/cstars/AHB/farm-budgets-app/node_modules/hash.js/lib/hash.js":[function(require,module,exports){
var hash = exports;

hash.utils = require('./hash/utils');
hash.common = require('./hash/common');
hash.sha = require('./hash/sha');
hash.ripemd = require('./hash/ripemd');
hash.hmac = require('./hash/hmac');

// Proxy hash functions to the main object
hash.sha1 = hash.sha.sha1;
hash.sha256 = hash.sha.sha256;
hash.sha224 = hash.sha.sha224;
hash.sha384 = hash.sha.sha384;
hash.sha512 = hash.sha.sha512;
hash.ripemd160 = hash.ripemd.ripemd160;

},{"./hash/common":"/Users/jrmerz/dev/cstars/AHB/farm-budgets-app/node_modules/hash.js/lib/hash/common.js","./hash/hmac":"/Users/jrmerz/dev/cstars/AHB/farm-budgets-app/node_modules/hash.js/lib/hash/hmac.js","./hash/ripemd":"/Users/jrmerz/dev/cstars/AHB/farm-budgets-app/node_modules/hash.js/lib/hash/ripemd.js","./hash/sha":"/Users/jrmerz/dev/cstars/AHB/farm-budgets-app/node_modules/hash.js/lib/hash/sha.js","./hash/utils":"/Users/jrmerz/dev/cstars/AHB/farm-budgets-app/node_modules/hash.js/lib/hash/utils.js"}],"/Users/jrmerz/dev/cstars/AHB/farm-budgets-app/node_modules/hash.js/lib/hash/common.js":[function(require,module,exports){
var hash = require('../hash');
var utils = hash.utils;
var assert = utils.assert;

function BlockHash() {
  this.pending = null;
  this.pendingTotal = 0;
  this.blockSize = this.constructor.blockSize;
  this.outSize = this.constructor.outSize;
  this.hmacStrength = this.constructor.hmacStrength;
  this.padLength = this.constructor.padLength / 8;
  this.endian = 'big';

  this._delta8 = this.blockSize / 8;
  this._delta32 = this.blockSize / 32;
}
exports.BlockHash = BlockHash;

BlockHash.prototype.update = function update(msg, enc) {
  // Convert message to array, pad it, and join into 32bit blocks
  msg = utils.toArray(msg, enc);
  if (!this.pending)
    this.pending = msg;
  else
    this.pending = this.pending.concat(msg);
  this.pendingTotal += msg.length;

  // Enough data, try updating
  if (this.pending.length >= this._delta8) {
    msg = this.pending;

    // Process pending data in blocks
    var r = msg.length % this._delta8;
    this.pending = msg.slice(msg.length - r, msg.length);
    if (this.pending.length === 0)
      this.pending = null;

    msg = utils.join32(msg, 0, msg.length - r, this.endian);
    for (var i = 0; i < msg.length; i += this._delta32)
      this._update(msg, i, i + this._delta32);
  }

  return this;
};

BlockHash.prototype.digest = function digest(enc) {
  this.update(this._pad());
  assert(this.pending === null);

  return this._digest(enc);
};

BlockHash.prototype._pad = function pad() {
  var len = this.pendingTotal;
  var bytes = this._delta8;
  var k = bytes - ((len + this.padLength) % bytes);
  var res = new Array(k + this.padLength);
  res[0] = 0x80;
  for (var i = 1; i < k; i++)
    res[i] = 0;

  // Append length
  len <<= 3;
  if (this.endian === 'big') {
    for (var t = 8; t < this.padLength; t++)
      res[i++] = 0;

    res[i++] = 0;
    res[i++] = 0;
    res[i++] = 0;
    res[i++] = 0;
    res[i++] = (len >>> 24) & 0xff;
    res[i++] = (len >>> 16) & 0xff;
    res[i++] = (len >>> 8) & 0xff;
    res[i++] = len & 0xff;
  } else {
    res[i++] = len & 0xff;
    res[i++] = (len >>> 8) & 0xff;
    res[i++] = (len >>> 16) & 0xff;
    res[i++] = (len >>> 24) & 0xff;
    res[i++] = 0;
    res[i++] = 0;
    res[i++] = 0;
    res[i++] = 0;

    for (var t = 8; t < this.padLength; t++)
      res[i++] = 0;
  }

  return res;
};

},{"../hash":"/Users/jrmerz/dev/cstars/AHB/farm-budgets-app/node_modules/hash.js/lib/hash.js"}],"/Users/jrmerz/dev/cstars/AHB/farm-budgets-app/node_modules/hash.js/lib/hash/hmac.js":[function(require,module,exports){
var hmac = exports;

var hash = require('../hash');
var utils = hash.utils;
var assert = utils.assert;

function Hmac(hash, key, enc) {
  if (!(this instanceof Hmac))
    return new Hmac(hash, key, enc);
  this.Hash = hash;
  this.blockSize = hash.blockSize / 8;
  this.outSize = hash.outSize / 8;
  this.inner = null;
  this.outer = null;

  this._init(utils.toArray(key, enc));
}
module.exports = Hmac;

Hmac.prototype._init = function init(key) {
  // Shorten key, if needed
  if (key.length > this.blockSize)
    key = new this.Hash().update(key).digest();
  assert(key.length <= this.blockSize);

  // Add padding to key
  for (var i = key.length; i < this.blockSize; i++)
    key.push(0);

  for (var i = 0; i < key.length; i++)
    key[i] ^= 0x36;
  this.inner = new this.Hash().update(key);

  // 0x36 ^ 0x5c = 0x6a
  for (var i = 0; i < key.length; i++)
    key[i] ^= 0x6a;
  this.outer = new this.Hash().update(key);
};

Hmac.prototype.update = function update(msg, enc) {
  this.inner.update(msg, enc);
  return this;
};

Hmac.prototype.digest = function digest(enc) {
  this.outer.update(this.inner.digest());
  return this.outer.digest(enc);
};

},{"../hash":"/Users/jrmerz/dev/cstars/AHB/farm-budgets-app/node_modules/hash.js/lib/hash.js"}],"/Users/jrmerz/dev/cstars/AHB/farm-budgets-app/node_modules/hash.js/lib/hash/ripemd.js":[function(require,module,exports){
var hash = require('../hash');
var utils = hash.utils;

var rotl32 = utils.rotl32;
var sum32 = utils.sum32;
var sum32_3 = utils.sum32_3;
var sum32_4 = utils.sum32_4;
var BlockHash = hash.common.BlockHash;

function RIPEMD160() {
  if (!(this instanceof RIPEMD160))
    return new RIPEMD160();

  BlockHash.call(this);

  this.h = [ 0x67452301, 0xefcdab89, 0x98badcfe, 0x10325476, 0xc3d2e1f0 ];
  this.endian = 'little';
}
utils.inherits(RIPEMD160, BlockHash);
exports.ripemd160 = RIPEMD160;

RIPEMD160.blockSize = 512;
RIPEMD160.outSize = 160;
RIPEMD160.hmacStrength = 192;
RIPEMD160.padLength = 64;

RIPEMD160.prototype._update = function update(msg, start) {
  var A = this.h[0];
  var B = this.h[1];
  var C = this.h[2];
  var D = this.h[3];
  var E = this.h[4];
  var Ah = A;
  var Bh = B;
  var Ch = C;
  var Dh = D;
  var Eh = E;
  for (var j = 0; j < 80; j++) {
    var T = sum32(
      rotl32(
        sum32_4(A, f(j, B, C, D), msg[r[j] + start], K(j)),
        s[j]),
      E);
    A = E;
    E = D;
    D = rotl32(C, 10);
    C = B;
    B = T;
    T = sum32(
      rotl32(
        sum32_4(Ah, f(79 - j, Bh, Ch, Dh), msg[rh[j] + start], Kh(j)),
        sh[j]),
      Eh);
    Ah = Eh;
    Eh = Dh;
    Dh = rotl32(Ch, 10);
    Ch = Bh;
    Bh = T;
  }
  T = sum32_3(this.h[1], C, Dh);
  this.h[1] = sum32_3(this.h[2], D, Eh);
  this.h[2] = sum32_3(this.h[3], E, Ah);
  this.h[3] = sum32_3(this.h[4], A, Bh);
  this.h[4] = sum32_3(this.h[0], B, Ch);
  this.h[0] = T;
};

RIPEMD160.prototype._digest = function digest(enc) {
  if (enc === 'hex')
    return utils.toHex32(this.h, 'little');
  else
    return utils.split32(this.h, 'little');
};

function f(j, x, y, z) {
  if (j <= 15)
    return x ^ y ^ z;
  else if (j <= 31)
    return (x & y) | ((~x) & z);
  else if (j <= 47)
    return (x | (~y)) ^ z;
  else if (j <= 63)
    return (x & z) | (y & (~z));
  else
    return x ^ (y | (~z));
}

function K(j) {
  if (j <= 15)
    return 0x00000000;
  else if (j <= 31)
    return 0x5a827999;
  else if (j <= 47)
    return 0x6ed9eba1;
  else if (j <= 63)
    return 0x8f1bbcdc;
  else
    return 0xa953fd4e;
}

function Kh(j) {
  if (j <= 15)
    return 0x50a28be6;
  else if (j <= 31)
    return 0x5c4dd124;
  else if (j <= 47)
    return 0x6d703ef3;
  else if (j <= 63)
    return 0x7a6d76e9;
  else
    return 0x00000000;
}

var r = [
  0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15,
  7, 4, 13, 1, 10, 6, 15, 3, 12, 0, 9, 5, 2, 14, 11, 8,
  3, 10, 14, 4, 9, 15, 8, 1, 2, 7, 0, 6, 13, 11, 5, 12,
  1, 9, 11, 10, 0, 8, 12, 4, 13, 3, 7, 15, 14, 5, 6, 2,
  4, 0, 5, 9, 7, 12, 2, 10, 14, 1, 3, 8, 11, 6, 15, 13
];

var rh = [
  5, 14, 7, 0, 9, 2, 11, 4, 13, 6, 15, 8, 1, 10, 3, 12,
  6, 11, 3, 7, 0, 13, 5, 10, 14, 15, 8, 12, 4, 9, 1, 2,
  15, 5, 1, 3, 7, 14, 6, 9, 11, 8, 12, 2, 10, 0, 4, 13,
  8, 6, 4, 1, 3, 11, 15, 0, 5, 12, 2, 13, 9, 7, 10, 14,
  12, 15, 10, 4, 1, 5, 8, 7, 6, 2, 13, 14, 0, 3, 9, 11
];

var s = [
  11, 14, 15, 12, 5, 8, 7, 9, 11, 13, 14, 15, 6, 7, 9, 8,
  7, 6, 8, 13, 11, 9, 7, 15, 7, 12, 15, 9, 11, 7, 13, 12,
  11, 13, 6, 7, 14, 9, 13, 15, 14, 8, 13, 6, 5, 12, 7, 5,
  11, 12, 14, 15, 14, 15, 9, 8, 9, 14, 5, 6, 8, 6, 5, 12,
  9, 15, 5, 11, 6, 8, 13, 12, 5, 12, 13, 14, 11, 8, 5, 6
];

var sh = [
  8, 9, 9, 11, 13, 15, 15, 5, 7, 7, 8, 11, 14, 14, 12, 6,
  9, 13, 15, 7, 12, 8, 9, 11, 7, 7, 12, 7, 6, 15, 13, 11,
  9, 7, 15, 11, 8, 6, 6, 14, 12, 13, 5, 14, 13, 13, 7, 5,
  15, 5, 8, 11, 14, 14, 6, 14, 6, 9, 12, 9, 12, 5, 15, 8,
  8, 5, 12, 9, 12, 5, 14, 6, 8, 13, 6, 5, 15, 13, 11, 11
];

},{"../hash":"/Users/jrmerz/dev/cstars/AHB/farm-budgets-app/node_modules/hash.js/lib/hash.js"}],"/Users/jrmerz/dev/cstars/AHB/farm-budgets-app/node_modules/hash.js/lib/hash/sha.js":[function(require,module,exports){
var hash = require('../hash');
var utils = hash.utils;
var assert = utils.assert;

var rotr32 = utils.rotr32;
var rotl32 = utils.rotl32;
var sum32 = utils.sum32;
var sum32_4 = utils.sum32_4;
var sum32_5 = utils.sum32_5;
var rotr64_hi = utils.rotr64_hi;
var rotr64_lo = utils.rotr64_lo;
var shr64_hi = utils.shr64_hi;
var shr64_lo = utils.shr64_lo;
var sum64 = utils.sum64;
var sum64_hi = utils.sum64_hi;
var sum64_lo = utils.sum64_lo;
var sum64_4_hi = utils.sum64_4_hi;
var sum64_4_lo = utils.sum64_4_lo;
var sum64_5_hi = utils.sum64_5_hi;
var sum64_5_lo = utils.sum64_5_lo;
var BlockHash = hash.common.BlockHash;

var sha256_K = [
  0x428a2f98, 0x71374491, 0xb5c0fbcf, 0xe9b5dba5,
  0x3956c25b, 0x59f111f1, 0x923f82a4, 0xab1c5ed5,
  0xd807aa98, 0x12835b01, 0x243185be, 0x550c7dc3,
  0x72be5d74, 0x80deb1fe, 0x9bdc06a7, 0xc19bf174,
  0xe49b69c1, 0xefbe4786, 0x0fc19dc6, 0x240ca1cc,
  0x2de92c6f, 0x4a7484aa, 0x5cb0a9dc, 0x76f988da,
  0x983e5152, 0xa831c66d, 0xb00327c8, 0xbf597fc7,
  0xc6e00bf3, 0xd5a79147, 0x06ca6351, 0x14292967,
  0x27b70a85, 0x2e1b2138, 0x4d2c6dfc, 0x53380d13,
  0x650a7354, 0x766a0abb, 0x81c2c92e, 0x92722c85,
  0xa2bfe8a1, 0xa81a664b, 0xc24b8b70, 0xc76c51a3,
  0xd192e819, 0xd6990624, 0xf40e3585, 0x106aa070,
  0x19a4c116, 0x1e376c08, 0x2748774c, 0x34b0bcb5,
  0x391c0cb3, 0x4ed8aa4a, 0x5b9cca4f, 0x682e6ff3,
  0x748f82ee, 0x78a5636f, 0x84c87814, 0x8cc70208,
  0x90befffa, 0xa4506ceb, 0xbef9a3f7, 0xc67178f2
];

var sha512_K = [
  0x428a2f98, 0xd728ae22, 0x71374491, 0x23ef65cd,
  0xb5c0fbcf, 0xec4d3b2f, 0xe9b5dba5, 0x8189dbbc,
  0x3956c25b, 0xf348b538, 0x59f111f1, 0xb605d019,
  0x923f82a4, 0xaf194f9b, 0xab1c5ed5, 0xda6d8118,
  0xd807aa98, 0xa3030242, 0x12835b01, 0x45706fbe,
  0x243185be, 0x4ee4b28c, 0x550c7dc3, 0xd5ffb4e2,
  0x72be5d74, 0xf27b896f, 0x80deb1fe, 0x3b1696b1,
  0x9bdc06a7, 0x25c71235, 0xc19bf174, 0xcf692694,
  0xe49b69c1, 0x9ef14ad2, 0xefbe4786, 0x384f25e3,
  0x0fc19dc6, 0x8b8cd5b5, 0x240ca1cc, 0x77ac9c65,
  0x2de92c6f, 0x592b0275, 0x4a7484aa, 0x6ea6e483,
  0x5cb0a9dc, 0xbd41fbd4, 0x76f988da, 0x831153b5,
  0x983e5152, 0xee66dfab, 0xa831c66d, 0x2db43210,
  0xb00327c8, 0x98fb213f, 0xbf597fc7, 0xbeef0ee4,
  0xc6e00bf3, 0x3da88fc2, 0xd5a79147, 0x930aa725,
  0x06ca6351, 0xe003826f, 0x14292967, 0x0a0e6e70,
  0x27b70a85, 0x46d22ffc, 0x2e1b2138, 0x5c26c926,
  0x4d2c6dfc, 0x5ac42aed, 0x53380d13, 0x9d95b3df,
  0x650a7354, 0x8baf63de, 0x766a0abb, 0x3c77b2a8,
  0x81c2c92e, 0x47edaee6, 0x92722c85, 0x1482353b,
  0xa2bfe8a1, 0x4cf10364, 0xa81a664b, 0xbc423001,
  0xc24b8b70, 0xd0f89791, 0xc76c51a3, 0x0654be30,
  0xd192e819, 0xd6ef5218, 0xd6990624, 0x5565a910,
  0xf40e3585, 0x5771202a, 0x106aa070, 0x32bbd1b8,
  0x19a4c116, 0xb8d2d0c8, 0x1e376c08, 0x5141ab53,
  0x2748774c, 0xdf8eeb99, 0x34b0bcb5, 0xe19b48a8,
  0x391c0cb3, 0xc5c95a63, 0x4ed8aa4a, 0xe3418acb,
  0x5b9cca4f, 0x7763e373, 0x682e6ff3, 0xd6b2b8a3,
  0x748f82ee, 0x5defb2fc, 0x78a5636f, 0x43172f60,
  0x84c87814, 0xa1f0ab72, 0x8cc70208, 0x1a6439ec,
  0x90befffa, 0x23631e28, 0xa4506ceb, 0xde82bde9,
  0xbef9a3f7, 0xb2c67915, 0xc67178f2, 0xe372532b,
  0xca273ece, 0xea26619c, 0xd186b8c7, 0x21c0c207,
  0xeada7dd6, 0xcde0eb1e, 0xf57d4f7f, 0xee6ed178,
  0x06f067aa, 0x72176fba, 0x0a637dc5, 0xa2c898a6,
  0x113f9804, 0xbef90dae, 0x1b710b35, 0x131c471b,
  0x28db77f5, 0x23047d84, 0x32caab7b, 0x40c72493,
  0x3c9ebe0a, 0x15c9bebc, 0x431d67c4, 0x9c100d4c,
  0x4cc5d4be, 0xcb3e42b6, 0x597f299c, 0xfc657e2a,
  0x5fcb6fab, 0x3ad6faec, 0x6c44198c, 0x4a475817
];

var sha1_K = [
  0x5A827999, 0x6ED9EBA1,
  0x8F1BBCDC, 0xCA62C1D6
];

function SHA256() {
  if (!(this instanceof SHA256))
    return new SHA256();

  BlockHash.call(this);
  this.h = [ 0x6a09e667, 0xbb67ae85, 0x3c6ef372, 0xa54ff53a,
             0x510e527f, 0x9b05688c, 0x1f83d9ab, 0x5be0cd19 ];
  this.k = sha256_K;
  this.W = new Array(64);
}
utils.inherits(SHA256, BlockHash);
exports.sha256 = SHA256;

SHA256.blockSize = 512;
SHA256.outSize = 256;
SHA256.hmacStrength = 192;
SHA256.padLength = 64;

SHA256.prototype._update = function _update(msg, start) {
  var W = this.W;

  for (var i = 0; i < 16; i++)
    W[i] = msg[start + i];
  for (; i < W.length; i++)
    W[i] = sum32_4(g1_256(W[i - 2]), W[i - 7], g0_256(W[i - 15]), W[i - 16]);

  var a = this.h[0];
  var b = this.h[1];
  var c = this.h[2];
  var d = this.h[3];
  var e = this.h[4];
  var f = this.h[5];
  var g = this.h[6];
  var h = this.h[7];

  assert(this.k.length === W.length);
  for (var i = 0; i < W.length; i++) {
    var T1 = sum32_5(h, s1_256(e), ch32(e, f, g), this.k[i], W[i]);
    var T2 = sum32(s0_256(a), maj32(a, b, c));
    h = g;
    g = f;
    f = e;
    e = sum32(d, T1);
    d = c;
    c = b;
    b = a;
    a = sum32(T1, T2);
  }

  this.h[0] = sum32(this.h[0], a);
  this.h[1] = sum32(this.h[1], b);
  this.h[2] = sum32(this.h[2], c);
  this.h[3] = sum32(this.h[3], d);
  this.h[4] = sum32(this.h[4], e);
  this.h[5] = sum32(this.h[5], f);
  this.h[6] = sum32(this.h[6], g);
  this.h[7] = sum32(this.h[7], h);
};

SHA256.prototype._digest = function digest(enc) {
  if (enc === 'hex')
    return utils.toHex32(this.h, 'big');
  else
    return utils.split32(this.h, 'big');
};

function SHA224() {
  if (!(this instanceof SHA224))
    return new SHA224();

  SHA256.call(this);
  this.h = [ 0xc1059ed8, 0x367cd507, 0x3070dd17, 0xf70e5939,
             0xffc00b31, 0x68581511, 0x64f98fa7, 0xbefa4fa4 ];
}
utils.inherits(SHA224, SHA256);
exports.sha224 = SHA224;

SHA224.blockSize = 512;
SHA224.outSize = 224;
SHA224.hmacStrength = 192;
SHA224.padLength = 64;

SHA224.prototype._digest = function digest(enc) {
  // Just truncate output
  if (enc === 'hex')
    return utils.toHex32(this.h.slice(0, 7), 'big');
  else
    return utils.split32(this.h.slice(0, 7), 'big');
};

function SHA512() {
  if (!(this instanceof SHA512))
    return new SHA512();

  BlockHash.call(this);
  this.h = [ 0x6a09e667, 0xf3bcc908,
             0xbb67ae85, 0x84caa73b,
             0x3c6ef372, 0xfe94f82b,
             0xa54ff53a, 0x5f1d36f1,
             0x510e527f, 0xade682d1,
             0x9b05688c, 0x2b3e6c1f,
             0x1f83d9ab, 0xfb41bd6b,
             0x5be0cd19, 0x137e2179 ];
  this.k = sha512_K;
  this.W = new Array(160);
}
utils.inherits(SHA512, BlockHash);
exports.sha512 = SHA512;

SHA512.blockSize = 1024;
SHA512.outSize = 512;
SHA512.hmacStrength = 192;
SHA512.padLength = 128;

SHA512.prototype._prepareBlock = function _prepareBlock(msg, start) {
  var W = this.W;

  // 32 x 32bit words
  for (var i = 0; i < 32; i++)
    W[i] = msg[start + i];
  for (; i < W.length; i += 2) {
    var c0_hi = g1_512_hi(W[i - 4], W[i - 3]);  // i - 2
    var c0_lo = g1_512_lo(W[i - 4], W[i - 3]);
    var c1_hi = W[i - 14];  // i - 7
    var c1_lo = W[i - 13];
    var c2_hi = g0_512_hi(W[i - 30], W[i - 29]);  // i - 15
    var c2_lo = g0_512_lo(W[i - 30], W[i - 29]);
    var c3_hi = W[i - 32];  // i - 16
    var c3_lo = W[i - 31];

    W[i] = sum64_4_hi(c0_hi, c0_lo,
                      c1_hi, c1_lo,
                      c2_hi, c2_lo,
                      c3_hi, c3_lo);
    W[i + 1] = sum64_4_lo(c0_hi, c0_lo,
                          c1_hi, c1_lo,
                          c2_hi, c2_lo,
                          c3_hi, c3_lo);
  }
};

SHA512.prototype._update = function _update(msg, start) {
  this._prepareBlock(msg, start);

  var W = this.W;

  var ah = this.h[0];
  var al = this.h[1];
  var bh = this.h[2];
  var bl = this.h[3];
  var ch = this.h[4];
  var cl = this.h[5];
  var dh = this.h[6];
  var dl = this.h[7];
  var eh = this.h[8];
  var el = this.h[9];
  var fh = this.h[10];
  var fl = this.h[11];
  var gh = this.h[12];
  var gl = this.h[13];
  var hh = this.h[14];
  var hl = this.h[15];

  assert(this.k.length === W.length);
  for (var i = 0; i < W.length; i += 2) {
    var c0_hi = hh;
    var c0_lo = hl;
    var c1_hi = s1_512_hi(eh, el);
    var c1_lo = s1_512_lo(eh, el);
    var c2_hi = ch64_hi(eh, el, fh, fl, gh, gl);
    var c2_lo = ch64_lo(eh, el, fh, fl, gh, gl);
    var c3_hi = this.k[i];
    var c3_lo = this.k[i + 1];
    var c4_hi = W[i];
    var c4_lo = W[i + 1];

    var T1_hi = sum64_5_hi(c0_hi, c0_lo,
                           c1_hi, c1_lo,
                           c2_hi, c2_lo,
                           c3_hi, c3_lo,
                           c4_hi, c4_lo);
    var T1_lo = sum64_5_lo(c0_hi, c0_lo,
                           c1_hi, c1_lo,
                           c2_hi, c2_lo,
                           c3_hi, c3_lo,
                           c4_hi, c4_lo);

    var c0_hi = s0_512_hi(ah, al);
    var c0_lo = s0_512_lo(ah, al);
    var c1_hi = maj64_hi(ah, al, bh, bl, ch, cl);
    var c1_lo = maj64_lo(ah, al, bh, bl, ch, cl);

    var T2_hi = sum64_hi(c0_hi, c0_lo, c1_hi, c1_lo);
    var T2_lo = sum64_lo(c0_hi, c0_lo, c1_hi, c1_lo);

    hh = gh;
    hl = gl;

    gh = fh;
    gl = fl;

    fh = eh;
    fl = el;

    eh = sum64_hi(dh, dl, T1_hi, T1_lo);
    el = sum64_lo(dl, dl, T1_hi, T1_lo);

    dh = ch;
    dl = cl;

    ch = bh;
    cl = bl;

    bh = ah;
    bl = al;

    ah = sum64_hi(T1_hi, T1_lo, T2_hi, T2_lo);
    al = sum64_lo(T1_hi, T1_lo, T2_hi, T2_lo);
  }

  sum64(this.h, 0, ah, al);
  sum64(this.h, 2, bh, bl);
  sum64(this.h, 4, ch, cl);
  sum64(this.h, 6, dh, dl);
  sum64(this.h, 8, eh, el);
  sum64(this.h, 10, fh, fl);
  sum64(this.h, 12, gh, gl);
  sum64(this.h, 14, hh, hl);
};

SHA512.prototype._digest = function digest(enc) {
  if (enc === 'hex')
    return utils.toHex32(this.h, 'big');
  else
    return utils.split32(this.h, 'big');
};

function SHA384() {
  if (!(this instanceof SHA384))
    return new SHA384();

  SHA512.call(this);
  this.h = [ 0xcbbb9d5d, 0xc1059ed8,
             0x629a292a, 0x367cd507,
             0x9159015a, 0x3070dd17,
             0x152fecd8, 0xf70e5939,
             0x67332667, 0xffc00b31,
             0x8eb44a87, 0x68581511,
             0xdb0c2e0d, 0x64f98fa7,
             0x47b5481d, 0xbefa4fa4 ];
}
utils.inherits(SHA384, SHA512);
exports.sha384 = SHA384;

SHA384.blockSize = 1024;
SHA384.outSize = 384;
SHA384.hmacStrength = 192;
SHA384.padLength = 128;

SHA384.prototype._digest = function digest(enc) {
  if (enc === 'hex')
    return utils.toHex32(this.h.slice(0, 12), 'big');
  else
    return utils.split32(this.h.slice(0, 12), 'big');
};

function SHA1() {
  if (!(this instanceof SHA1))
    return new SHA1();

  BlockHash.call(this);
  this.h = [ 0x67452301, 0xefcdab89, 0x98badcfe,
             0x10325476, 0xc3d2e1f0 ];
  this.W = new Array(80);
}

utils.inherits(SHA1, BlockHash);
exports.sha1 = SHA1;

SHA1.blockSize = 512;
SHA1.outSize = 160;
SHA1.hmacStrength = 80;
SHA1.padLength = 64;

SHA1.prototype._update = function _update(msg, start) {
  var W = this.W;

  for (var i = 0; i < 16; i++)
    W[i] = msg[start + i];

  for(; i < W.length; i++)
    W[i] = rotl32(W[i - 3] ^ W[i - 8] ^ W[i - 14] ^ W[i - 16], 1);

  var a = this.h[0];
  var b = this.h[1];
  var c = this.h[2];
  var d = this.h[3];
  var e = this.h[4];

  for (var i = 0; i < W.length; i++) {
    var s = ~~(i / 20);
    var t = sum32_5(rotl32(a, 5), ft_1(s, b, c, d), e, W[i], sha1_K[s]);
    e = d;
    d = c;
    c = rotl32(b, 30);
    b = a;
    a = t;
  }

  this.h[0] = sum32(this.h[0], a);
  this.h[1] = sum32(this.h[1], b);
  this.h[2] = sum32(this.h[2], c);
  this.h[3] = sum32(this.h[3], d);
  this.h[4] = sum32(this.h[4], e);
};

SHA1.prototype._digest = function digest(enc) {
  if (enc === 'hex')
    return utils.toHex32(this.h, 'big');
  else
    return utils.split32(this.h, 'big');
};

function ch32(x, y, z) {
  return (x & y) ^ ((~x) & z);
}

function maj32(x, y, z) {
  return (x & y) ^ (x & z) ^ (y & z);
}

function p32(x, y, z) {
  return x ^ y ^ z;
}

function s0_256(x) {
  return rotr32(x, 2) ^ rotr32(x, 13) ^ rotr32(x, 22);
}

function s1_256(x) {
  return rotr32(x, 6) ^ rotr32(x, 11) ^ rotr32(x, 25);
}

function g0_256(x) {
  return rotr32(x, 7) ^ rotr32(x, 18) ^ (x >>> 3);
}

function g1_256(x) {
  return rotr32(x, 17) ^ rotr32(x, 19) ^ (x >>> 10);
}

function ft_1(s, x, y, z) {
  if (s === 0)
    return ch32(x, y, z);
  if (s === 1 || s === 3)
    return p32(x, y, z);
  if (s === 2)
    return maj32(x, y, z);
}

function ch64_hi(xh, xl, yh, yl, zh, zl) {
  var r = (xh & yh) ^ ((~xh) & zh);
  if (r < 0)
    r += 0x100000000;
  return r;
}

function ch64_lo(xh, xl, yh, yl, zh, zl) {
  var r = (xl & yl) ^ ((~xl) & zl);
  if (r < 0)
    r += 0x100000000;
  return r;
}

function maj64_hi(xh, xl, yh, yl, zh, zl) {
  var r = (xh & yh) ^ (xh & zh) ^ (yh & zh);
  if (r < 0)
    r += 0x100000000;
  return r;
}

function maj64_lo(xh, xl, yh, yl, zh, zl) {
  var r = (xl & yl) ^ (xl & zl) ^ (yl & zl);
  if (r < 0)
    r += 0x100000000;
  return r;
}

function s0_512_hi(xh, xl) {
  var c0_hi = rotr64_hi(xh, xl, 28);
  var c1_hi = rotr64_hi(xl, xh, 2);  // 34
  var c2_hi = rotr64_hi(xl, xh, 7);  // 39

  var r = c0_hi ^ c1_hi ^ c2_hi;
  if (r < 0)
    r += 0x100000000;
  return r;
}

function s0_512_lo(xh, xl) {
  var c0_lo = rotr64_lo(xh, xl, 28);
  var c1_lo = rotr64_lo(xl, xh, 2);  // 34
  var c2_lo = rotr64_lo(xl, xh, 7);  // 39

  var r = c0_lo ^ c1_lo ^ c2_lo;
  if (r < 0)
    r += 0x100000000;
  return r;
}

function s1_512_hi(xh, xl) {
  var c0_hi = rotr64_hi(xh, xl, 14);
  var c1_hi = rotr64_hi(xh, xl, 18);
  var c2_hi = rotr64_hi(xl, xh, 9);  // 41

  var r = c0_hi ^ c1_hi ^ c2_hi;
  if (r < 0)
    r += 0x100000000;
  return r;
}

function s1_512_lo(xh, xl) {
  var c0_lo = rotr64_lo(xh, xl, 14);
  var c1_lo = rotr64_lo(xh, xl, 18);
  var c2_lo = rotr64_lo(xl, xh, 9);  // 41

  var r = c0_lo ^ c1_lo ^ c2_lo;
  if (r < 0)
    r += 0x100000000;
  return r;
}

function g0_512_hi(xh, xl) {
  var c0_hi = rotr64_hi(xh, xl, 1);
  var c1_hi = rotr64_hi(xh, xl, 8);
  var c2_hi = shr64_hi(xh, xl, 7);

  var r = c0_hi ^ c1_hi ^ c2_hi;
  if (r < 0)
    r += 0x100000000;
  return r;
}

function g0_512_lo(xh, xl) {
  var c0_lo = rotr64_lo(xh, xl, 1);
  var c1_lo = rotr64_lo(xh, xl, 8);
  var c2_lo = shr64_lo(xh, xl, 7);

  var r = c0_lo ^ c1_lo ^ c2_lo;
  if (r < 0)
    r += 0x100000000;
  return r;
}

function g1_512_hi(xh, xl) {
  var c0_hi = rotr64_hi(xh, xl, 19);
  var c1_hi = rotr64_hi(xl, xh, 29);  // 61
  var c2_hi = shr64_hi(xh, xl, 6);

  var r = c0_hi ^ c1_hi ^ c2_hi;
  if (r < 0)
    r += 0x100000000;
  return r;
}

function g1_512_lo(xh, xl) {
  var c0_lo = rotr64_lo(xh, xl, 19);
  var c1_lo = rotr64_lo(xl, xh, 29);  // 61
  var c2_lo = shr64_lo(xh, xl, 6);

  var r = c0_lo ^ c1_lo ^ c2_lo;
  if (r < 0)
    r += 0x100000000;
  return r;
}

},{"../hash":"/Users/jrmerz/dev/cstars/AHB/farm-budgets-app/node_modules/hash.js/lib/hash.js"}],"/Users/jrmerz/dev/cstars/AHB/farm-budgets-app/node_modules/hash.js/lib/hash/utils.js":[function(require,module,exports){
var utils = exports;
var inherits = require('inherits');

function toArray(msg, enc) {
  if (Array.isArray(msg))
    return msg.slice();
  if (!msg)
    return [];
  var res = [];
  if (typeof msg === 'string') {
    if (!enc) {
      for (var i = 0; i < msg.length; i++) {
        var c = msg.charCodeAt(i);
        var hi = c >> 8;
        var lo = c & 0xff;
        if (hi)
          res.push(hi, lo);
        else
          res.push(lo);
      }
    } else if (enc === 'hex') {
      msg = msg.replace(/[^a-z0-9]+/ig, '');
      if (msg.length % 2 !== 0)
        msg = '0' + msg;
      for (var i = 0; i < msg.length; i += 2)
        res.push(parseInt(msg[i] + msg[i + 1], 16));
    }
  } else {
    for (var i = 0; i < msg.length; i++)
      res[i] = msg[i] | 0;
  }
  return res;
}
utils.toArray = toArray;

function toHex(msg) {
  var res = '';
  for (var i = 0; i < msg.length; i++)
    res += zero2(msg[i].toString(16));
  return res;
}
utils.toHex = toHex;

function htonl(w) {
  var res = (w >>> 24) |
            ((w >>> 8) & 0xff00) |
            ((w << 8) & 0xff0000) |
            ((w & 0xff) << 24);
  return res >>> 0;
}
utils.htonl = htonl;

function toHex32(msg, endian) {
  var res = '';
  for (var i = 0; i < msg.length; i++) {
    var w = msg[i];
    if (endian === 'little')
      w = htonl(w);
    res += zero8(w.toString(16));
  }
  return res;
}
utils.toHex32 = toHex32;

function zero2(word) {
  if (word.length === 1)
    return '0' + word;
  else
    return word;
}
utils.zero2 = zero2;

function zero8(word) {
  if (word.length === 7)
    return '0' + word;
  else if (word.length === 6)
    return '00' + word;
  else if (word.length === 5)
    return '000' + word;
  else if (word.length === 4)
    return '0000' + word;
  else if (word.length === 3)
    return '00000' + word;
  else if (word.length === 2)
    return '000000' + word;
  else if (word.length === 1)
    return '0000000' + word;
  else
    return word;
}
utils.zero8 = zero8;

function join32(msg, start, end, endian) {
  var len = end - start;
  assert(len % 4 === 0);
  var res = new Array(len / 4);
  for (var i = 0, k = start; i < res.length; i++, k += 4) {
    var w;
    if (endian === 'big')
      w = (msg[k] << 24) | (msg[k + 1] << 16) | (msg[k + 2] << 8) | msg[k + 3];
    else
      w = (msg[k + 3] << 24) | (msg[k + 2] << 16) | (msg[k + 1] << 8) | msg[k];
    res[i] = w >>> 0;
  }
  return res;
}
utils.join32 = join32;

function split32(msg, endian) {
  var res = new Array(msg.length * 4);
  for (var i = 0, k = 0; i < msg.length; i++, k += 4) {
    var m = msg[i];
    if (endian === 'big') {
      res[k] = m >>> 24;
      res[k + 1] = (m >>> 16) & 0xff;
      res[k + 2] = (m >>> 8) & 0xff;
      res[k + 3] = m & 0xff;
    } else {
      res[k + 3] = m >>> 24;
      res[k + 2] = (m >>> 16) & 0xff;
      res[k + 1] = (m >>> 8) & 0xff;
      res[k] = m & 0xff;
    }
  }
  return res;
}
utils.split32 = split32;

function rotr32(w, b) {
  return (w >>> b) | (w << (32 - b));
}
utils.rotr32 = rotr32;

function rotl32(w, b) {
  return (w << b) | (w >>> (32 - b));
}
utils.rotl32 = rotl32;

function sum32(a, b) {
  return (a + b) >>> 0;
}
utils.sum32 = sum32;

function sum32_3(a, b, c) {
  return (a + b + c) >>> 0;
}
utils.sum32_3 = sum32_3;

function sum32_4(a, b, c, d) {
  return (a + b + c + d) >>> 0;
}
utils.sum32_4 = sum32_4;

function sum32_5(a, b, c, d, e) {
  return (a + b + c + d + e) >>> 0;
}
utils.sum32_5 = sum32_5;

function assert(cond, msg) {
  if (!cond)
    throw new Error(msg || 'Assertion failed');
}
utils.assert = assert;

utils.inherits = inherits;

function sum64(buf, pos, ah, al) {
  var bh = buf[pos];
  var bl = buf[pos + 1];

  var lo = (al + bl) >>> 0;
  var hi = (lo < al ? 1 : 0) + ah + bh;
  buf[pos] = hi >>> 0;
  buf[pos + 1] = lo;
}
exports.sum64 = sum64;

function sum64_hi(ah, al, bh, bl) {
  var lo = (al + bl) >>> 0;
  var hi = (lo < al ? 1 : 0) + ah + bh;
  return hi >>> 0;
};
exports.sum64_hi = sum64_hi;

function sum64_lo(ah, al, bh, bl) {
  var lo = al + bl;
  return lo >>> 0;
};
exports.sum64_lo = sum64_lo;

function sum64_4_hi(ah, al, bh, bl, ch, cl, dh, dl) {
  var carry = 0;
  var lo = al;
  lo = (lo + bl) >>> 0;
  carry += lo < al ? 1 : 0;
  lo = (lo + cl) >>> 0;
  carry += lo < cl ? 1 : 0;
  lo = (lo + dl) >>> 0;
  carry += lo < dl ? 1 : 0;

  var hi = ah + bh + ch + dh + carry;
  return hi >>> 0;
};
exports.sum64_4_hi = sum64_4_hi;

function sum64_4_lo(ah, al, bh, bl, ch, cl, dh, dl) {
  var lo = al + bl + cl + dl;
  return lo >>> 0;
};
exports.sum64_4_lo = sum64_4_lo;

function sum64_5_hi(ah, al, bh, bl, ch, cl, dh, dl, eh, el) {
  var carry = 0;
  var lo = al;
  lo = (lo + bl) >>> 0;
  carry += lo < al ? 1 : 0;
  lo = (lo + cl) >>> 0;
  carry += lo < cl ? 1 : 0;
  lo = (lo + dl) >>> 0;
  carry += lo < dl ? 1 : 0;
  lo = (lo + el) >>> 0;
  carry += lo < el ? 1 : 0;

  var hi = ah + bh + ch + dh + eh + carry;
  return hi >>> 0;
};
exports.sum64_5_hi = sum64_5_hi;

function sum64_5_lo(ah, al, bh, bl, ch, cl, dh, dl, eh, el) {
  var lo = al + bl + cl + dl + el;

  return lo >>> 0;
};
exports.sum64_5_lo = sum64_5_lo;

function rotr64_hi(ah, al, num) {
  var r = (al << (32 - num)) | (ah >>> num);
  return r >>> 0;
};
exports.rotr64_hi = rotr64_hi;

function rotr64_lo(ah, al, num) {
  var r = (ah << (32 - num)) | (al >>> num);
  return r >>> 0;
};
exports.rotr64_lo = rotr64_lo;

function shr64_hi(ah, al, num) {
  return ah >>> num;
};
exports.shr64_hi = shr64_hi;

function shr64_lo(ah, al, num) {
  var r = (ah << (32 - num)) | (al >>> num);
  return r >>> 0;
};
exports.shr64_lo = shr64_lo;

},{"inherits":"/Users/jrmerz/dev/cstars/AHB/farm-budgets-app/node_modules/inherits/inherits_browser.js"}],"/Users/jrmerz/dev/cstars/AHB/farm-budgets-app/node_modules/ieee754/index.js":[function(require,module,exports){
exports.read = function (buffer, offset, isLE, mLen, nBytes) {
  var e, m
  var eLen = nBytes * 8 - mLen - 1
  var eMax = (1 << eLen) - 1
  var eBias = eMax >> 1
  var nBits = -7
  var i = isLE ? (nBytes - 1) : 0
  var d = isLE ? -1 : 1
  var s = buffer[offset + i]

  i += d

  e = s & ((1 << (-nBits)) - 1)
  s >>= (-nBits)
  nBits += eLen
  for (; nBits > 0; e = e * 256 + buffer[offset + i], i += d, nBits -= 8) {}

  m = e & ((1 << (-nBits)) - 1)
  e >>= (-nBits)
  nBits += mLen
  for (; nBits > 0; m = m * 256 + buffer[offset + i], i += d, nBits -= 8) {}

  if (e === 0) {
    e = 1 - eBias
  } else if (e === eMax) {
    return m ? NaN : ((s ? -1 : 1) * Infinity)
  } else {
    m = m + Math.pow(2, mLen)
    e = e - eBias
  }
  return (s ? -1 : 1) * m * Math.pow(2, e - mLen)
}

exports.write = function (buffer, value, offset, isLE, mLen, nBytes) {
  var e, m, c
  var eLen = nBytes * 8 - mLen - 1
  var eMax = (1 << eLen) - 1
  var eBias = eMax >> 1
  var rt = (mLen === 23 ? Math.pow(2, -24) - Math.pow(2, -77) : 0)
  var i = isLE ? 0 : (nBytes - 1)
  var d = isLE ? 1 : -1
  var s = value < 0 || (value === 0 && 1 / value < 0) ? 1 : 0

  value = Math.abs(value)

  if (isNaN(value) || value === Infinity) {
    m = isNaN(value) ? 1 : 0
    e = eMax
  } else {
    e = Math.floor(Math.log(value) / Math.LN2)
    if (value * (c = Math.pow(2, -e)) < 1) {
      e--
      c *= 2
    }
    if (e + eBias >= 1) {
      value += rt / c
    } else {
      value += rt * Math.pow(2, 1 - eBias)
    }
    if (value * c >= 2) {
      e++
      c /= 2
    }

    if (e + eBias >= eMax) {
      m = 0
      e = eMax
    } else if (e + eBias >= 1) {
      m = (value * c - 1) * Math.pow(2, mLen)
      e = e + eBias
    } else {
      m = value * Math.pow(2, eBias - 1) * Math.pow(2, mLen)
      e = 0
    }
  }

  for (; mLen >= 8; buffer[offset + i] = m & 0xff, i += d, m /= 256, mLen -= 8) {}

  e = (e << mLen) | m
  eLen += mLen
  for (; eLen > 0; buffer[offset + i] = e & 0xff, i += d, e /= 256, eLen -= 8) {}

  buffer[offset + i - d] |= s * 128
}

},{}],"/Users/jrmerz/dev/cstars/AHB/farm-budgets-app/node_modules/indexof/index.js":[function(require,module,exports){

var indexOf = [].indexOf;

module.exports = function(arr, obj){
  if (indexOf) return arr.indexOf(obj);
  for (var i = 0; i < arr.length; ++i) {
    if (arr[i] === obj) return i;
  }
  return -1;
};
},{}],"/Users/jrmerz/dev/cstars/AHB/farm-budgets-app/node_modules/inherits/inherits_browser.js":[function(require,module,exports){
if (typeof Object.create === 'function') {
  // implementation from standard node.js 'util' module
  module.exports = function inherits(ctor, superCtor) {
    ctor.super_ = superCtor
    ctor.prototype = Object.create(superCtor.prototype, {
      constructor: {
        value: ctor,
        enumerable: false,
        writable: true,
        configurable: true
      }
    });
  };
} else {
  // old school shim for old browsers
  module.exports = function inherits(ctor, superCtor) {
    ctor.super_ = superCtor
    var TempCtor = function () {}
    TempCtor.prototype = superCtor.prototype
    ctor.prototype = new TempCtor()
    ctor.prototype.constructor = ctor
  }
}

},{}],"/Users/jrmerz/dev/cstars/AHB/farm-budgets-app/node_modules/is-buffer/index.js":[function(require,module,exports){
/**
 * Determine if an object is Buffer
 *
 * Author:   Feross Aboukhadijeh <feross@feross.org> <http://feross.org>
 * License:  MIT
 *
 * `npm install is-buffer`
 */

module.exports = function (obj) {
  return !!(obj != null &&
    (obj._isBuffer || // For Safari 5-7 (missing Object.prototype.constructor)
      (obj.constructor &&
      typeof obj.constructor.isBuffer === 'function' &&
      obj.constructor.isBuffer(obj))
    ))
}

},{}],"/Users/jrmerz/dev/cstars/AHB/farm-budgets-app/node_modules/isarray/index.js":[function(require,module,exports){
module.exports = Array.isArray || function (arr) {
  return Object.prototype.toString.call(arr) == '[object Array]';
};

},{}],"/Users/jrmerz/dev/cstars/AHB/farm-budgets-app/node_modules/miller-rabin/lib/mr.js":[function(require,module,exports){
var bn = require('bn.js');
var brorand = require('brorand');

function MillerRabin(rand) {
  this.rand = rand || new brorand.Rand();
}
module.exports = MillerRabin;

MillerRabin.create = function create(rand) {
  return new MillerRabin(rand);
};

MillerRabin.prototype._rand = function _rand(n) {
  var len = n.bitLength();
  var buf = this.rand.generate(Math.ceil(len / 8));

  // Set low bits
  buf[0] |= 3;

  // Mask high bits
  var mask = len & 0x7;
  if (mask !== 0)
    buf[buf.length - 1] >>= 7 - mask;

  return new bn(buf);
}

MillerRabin.prototype.test = function test(n, k, cb) {
  var len = n.bitLength();
  var red = bn.mont(n);
  var rone = new bn(1).toRed(red);

  if (!k)
    k = Math.max(1, (len / 48) | 0);

  // Find d and s, (n - 1) = (2 ^ s) * d;
  var n1 = n.subn(1);
  var n2 = n1.subn(1);
  for (var s = 0; !n1.testn(s); s++) {}
  var d = n.shrn(s);

  var rn1 = n1.toRed(red);

  var prime = true;
  for (; k > 0; k--) {
    var a = this._rand(n2);
    if (cb)
      cb(a);

    var x = a.toRed(red).redPow(d);
    if (x.cmp(rone) === 0 || x.cmp(rn1) === 0)
      continue;

    for (var i = 1; i < s; i++) {
      x = x.redSqr();

      if (x.cmp(rone) === 0)
        return false;
      if (x.cmp(rn1) === 0)
        break;
    }

    if (i === s)
      return false;
  }

  return prime;
};

MillerRabin.prototype.getDivisor = function getDivisor(n, k) {
  var len = n.bitLength();
  var red = bn.mont(n);
  var rone = new bn(1).toRed(red);

  if (!k)
    k = Math.max(1, (len / 48) | 0);

  // Find d and s, (n - 1) = (2 ^ s) * d;
  var n1 = n.subn(1);
  var n2 = n1.subn(1);
  for (var s = 0; !n1.testn(s); s++) {}
  var d = n.shrn(s);

  var rn1 = n1.toRed(red);

  for (; k > 0; k--) {
    var a = this._rand(n2);

    var g = n.gcd(a);
    if (g.cmpn(1) !== 0)
      return g;

    var x = a.toRed(red).redPow(d);
    if (x.cmp(rone) === 0 || x.cmp(rn1) === 0)
      continue;

    for (var i = 1; i < s; i++) {
      x = x.redSqr();

      if (x.cmp(rone) === 0)
        return x.fromRed().subn(1).gcd(n);
      if (x.cmp(rn1) === 0)
        break;
    }

    if (i === s) {
      x = x.redSqr();
      return x.fromRed().subn(1).gcd(n);
    }
  }

  return false;
};

},{"bn.js":"/Users/jrmerz/dev/cstars/AHB/farm-budgets-app/node_modules/miller-rabin/node_modules/bn.js/lib/bn.js","brorand":"/Users/jrmerz/dev/cstars/AHB/farm-budgets-app/node_modules/brorand/index.js"}],"/Users/jrmerz/dev/cstars/AHB/farm-budgets-app/node_modules/miller-rabin/node_modules/bn.js/lib/bn.js":[function(require,module,exports){
arguments[4]["/Users/jrmerz/dev/cstars/AHB/farm-budgets-app/node_modules/browserify-rsa/node_modules/bn.js/lib/bn.js"][0].apply(exports,arguments)
},{}],"/Users/jrmerz/dev/cstars/AHB/farm-budgets-app/node_modules/minimalistic-assert/index.js":[function(require,module,exports){
module.exports = assert;

function assert(val, msg) {
  if (!val)
    throw new Error(msg || 'Assertion failed');
}

assert.equal = function assertEqual(l, r, msg) {
  if (l != r)
    throw new Error(msg || ('Assertion failed: ' + l + ' != ' + r));
};

},{}],"/Users/jrmerz/dev/cstars/AHB/farm-budgets-app/node_modules/parse-asn1/aesid.json":[function(require,module,exports){
module.exports={"2.16.840.1.101.3.4.1.1": "aes-128-ecb",
"2.16.840.1.101.3.4.1.2": "aes-128-cbc",
"2.16.840.1.101.3.4.1.3": "aes-128-ofb",
"2.16.840.1.101.3.4.1.4": "aes-128-cfb",
"2.16.840.1.101.3.4.1.21": "aes-192-ecb",
"2.16.840.1.101.3.4.1.22": "aes-192-cbc",
"2.16.840.1.101.3.4.1.23": "aes-192-ofb",
"2.16.840.1.101.3.4.1.24": "aes-192-cfb",
"2.16.840.1.101.3.4.1.41": "aes-256-ecb",
"2.16.840.1.101.3.4.1.42": "aes-256-cbc",
"2.16.840.1.101.3.4.1.43": "aes-256-ofb",
"2.16.840.1.101.3.4.1.44": "aes-256-cfb"
}
},{}],"/Users/jrmerz/dev/cstars/AHB/farm-budgets-app/node_modules/parse-asn1/asn1.js":[function(require,module,exports){
// from https://github.com/indutny/self-signed/blob/gh-pages/lib/asn1.js
// Fedor, you are amazing.

var asn1 = require('asn1.js')

var RSAPrivateKey = asn1.define('RSAPrivateKey', function () {
  this.seq().obj(
    this.key('version').int(),
    this.key('modulus').int(),
    this.key('publicExponent').int(),
    this.key('privateExponent').int(),
    this.key('prime1').int(),
    this.key('prime2').int(),
    this.key('exponent1').int(),
    this.key('exponent2').int(),
    this.key('coefficient').int()
  )
})
exports.RSAPrivateKey = RSAPrivateKey

var RSAPublicKey = asn1.define('RSAPublicKey', function () {
  this.seq().obj(
    this.key('modulus').int(),
    this.key('publicExponent').int()
  )
})
exports.RSAPublicKey = RSAPublicKey

var PublicKey = asn1.define('SubjectPublicKeyInfo', function () {
  this.seq().obj(
    this.key('algorithm').use(AlgorithmIdentifier),
    this.key('subjectPublicKey').bitstr()
  )
})
exports.PublicKey = PublicKey

var AlgorithmIdentifier = asn1.define('AlgorithmIdentifier', function () {
  this.seq().obj(
    this.key('algorithm').objid(),
    this.key('none').null_().optional(),
    this.key('curve').objid().optional(),
    this.key('params').seq().obj(
      this.key('p').int(),
      this.key('q').int(),
      this.key('g').int()
    ).optional()
  )
})

var PrivateKeyInfo = asn1.define('PrivateKeyInfo', function () {
  this.seq().obj(
    this.key('version').int(),
    this.key('algorithm').use(AlgorithmIdentifier),
    this.key('subjectPrivateKey').octstr()
  )
})
exports.PrivateKey = PrivateKeyInfo
var EncryptedPrivateKeyInfo = asn1.define('EncryptedPrivateKeyInfo', function () {
  this.seq().obj(
    this.key('algorithm').seq().obj(
      this.key('id').objid(),
      this.key('decrypt').seq().obj(
        this.key('kde').seq().obj(
          this.key('id').objid(),
          this.key('kdeparams').seq().obj(
            this.key('salt').octstr(),
            this.key('iters').int()
          )
        ),
        this.key('cipher').seq().obj(
          this.key('algo').objid(),
          this.key('iv').octstr()
        )
      )
    ),
    this.key('subjectPrivateKey').octstr()
  )
})

exports.EncryptedPrivateKey = EncryptedPrivateKeyInfo

var DSAPrivateKey = asn1.define('DSAPrivateKey', function () {
  this.seq().obj(
    this.key('version').int(),
    this.key('p').int(),
    this.key('q').int(),
    this.key('g').int(),
    this.key('pub_key').int(),
    this.key('priv_key').int()
  )
})
exports.DSAPrivateKey = DSAPrivateKey

exports.DSAparam = asn1.define('DSAparam', function () {
  this.int()
})
var ECPrivateKey = asn1.define('ECPrivateKey', function () {
  this.seq().obj(
    this.key('version').int(),
    this.key('privateKey').octstr(),
    this.key('parameters').optional().explicit(0).use(ECParameters),
    this.key('publicKey').optional().explicit(1).bitstr()
  )
})
exports.ECPrivateKey = ECPrivateKey
var ECParameters = asn1.define('ECParameters', function () {
  this.choice({
    namedCurve: this.objid()
  })
})

exports.signature = asn1.define('signature', function () {
  this.seq().obj(
    this.key('r').int(),
    this.key('s').int()
  )
})

},{"asn1.js":"/Users/jrmerz/dev/cstars/AHB/farm-budgets-app/node_modules/parse-asn1/node_modules/asn1.js/lib/asn1.js"}],"/Users/jrmerz/dev/cstars/AHB/farm-budgets-app/node_modules/parse-asn1/fixProc.js":[function(require,module,exports){
(function (Buffer){
// adapted from https://github.com/apatil/pemstrip
var findProc = /Proc-Type: 4,ENCRYPTED\r?\nDEK-Info: AES-((?:128)|(?:192)|(?:256))-CBC,([0-9A-H]+)\r?\n\r?\n([0-9A-z\n\r\+\/\=]+)\r?\n/m
var startRegex = /^-----BEGIN (.*) KEY-----\r?\n/m
var fullRegex = /^-----BEGIN (.*) KEY-----\r?\n([0-9A-z\n\r\+\/\=]+)\r?\n-----END \1 KEY-----$/m
var evp = require('evp_bytestokey')
var ciphers = require('browserify-aes')
module.exports = function (okey, password) {
  var key = okey.toString()
  var match = key.match(findProc)
  var decrypted
  if (!match) {
    var match2 = key.match(fullRegex)
    decrypted = new Buffer(match2[2].replace(/\r?\n/g, ''), 'base64')
  } else {
    var suite = 'aes' + match[1]
    var iv = new Buffer(match[2], 'hex')
    var cipherText = new Buffer(match[3].replace(/\r?\n/g, ''), 'base64')
    var cipherKey = evp(password, iv.slice(0, 8), parseInt(match[1], 10)).key
    var out = []
    var cipher = ciphers.createDecipheriv(suite, cipherKey, iv)
    out.push(cipher.update(cipherText))
    out.push(cipher.final())
    decrypted = Buffer.concat(out)
  }
  var tag = key.match(startRegex)[1] + ' KEY'
  return {
    tag: tag,
    data: decrypted
  }
}

}).call(this,require("buffer").Buffer)

},{"browserify-aes":"/Users/jrmerz/dev/cstars/AHB/farm-budgets-app/node_modules/browserify-aes/browser.js","buffer":"/Users/jrmerz/dev/cstars/AHB/farm-budgets-app/node_modules/buffer/index.js","evp_bytestokey":"/Users/jrmerz/dev/cstars/AHB/farm-budgets-app/node_modules/evp_bytestokey/index.js"}],"/Users/jrmerz/dev/cstars/AHB/farm-budgets-app/node_modules/parse-asn1/index.js":[function(require,module,exports){
(function (Buffer){
var asn1 = require('./asn1')
var aesid = require('./aesid.json')
var fixProc = require('./fixProc')
var ciphers = require('browserify-aes')
var compat = require('pbkdf2')
module.exports = parseKeys

function parseKeys (buffer) {
  var password
  if (typeof buffer === 'object' && !Buffer.isBuffer(buffer)) {
    password = buffer.passphrase
    buffer = buffer.key
  }
  if (typeof buffer === 'string') {
    buffer = new Buffer(buffer)
  }

  var stripped = fixProc(buffer, password)

  var type = stripped.tag
  var data = stripped.data
  var subtype, ndata
  switch (type) {
    case 'PUBLIC KEY':
      ndata = asn1.PublicKey.decode(data, 'der')
      subtype = ndata.algorithm.algorithm.join('.')
      switch (subtype) {
        case '1.2.840.113549.1.1.1':
          return asn1.RSAPublicKey.decode(ndata.subjectPublicKey.data, 'der')
        case '1.2.840.10045.2.1':
          ndata.subjectPrivateKey = ndata.subjectPublicKey
          return {
            type: 'ec',
            data: ndata
          }
        case '1.2.840.10040.4.1':
          ndata.algorithm.params.pub_key = asn1.DSAparam.decode(ndata.subjectPublicKey.data, 'der')
          return {
            type: 'dsa',
            data: ndata.algorithm.params
          }
        default: throw new Error('unknown key id ' + subtype)
      }
      throw new Error('unknown key type ' + type)
    case 'ENCRYPTED PRIVATE KEY':
      data = asn1.EncryptedPrivateKey.decode(data, 'der')
      data = decrypt(data, password)
      // falls through
    case 'PRIVATE KEY':
      ndata = asn1.PrivateKey.decode(data, 'der')
      subtype = ndata.algorithm.algorithm.join('.')
      switch (subtype) {
        case '1.2.840.113549.1.1.1':
          return asn1.RSAPrivateKey.decode(ndata.subjectPrivateKey, 'der')
        case '1.2.840.10045.2.1':
          return {
            curve: ndata.algorithm.curve,
            privateKey: asn1.ECPrivateKey.decode(ndata.subjectPrivateKey, 'der').privateKey
          }
        case '1.2.840.10040.4.1':
          ndata.algorithm.params.priv_key = asn1.DSAparam.decode(ndata.subjectPrivateKey, 'der')
          return {
            type: 'dsa',
            params: ndata.algorithm.params
          }
        default: throw new Error('unknown key id ' + subtype)
      }
      throw new Error('unknown key type ' + type)
    case 'RSA PUBLIC KEY':
      return asn1.RSAPublicKey.decode(data, 'der')
    case 'RSA PRIVATE KEY':
      return asn1.RSAPrivateKey.decode(data, 'der')
    case 'DSA PRIVATE KEY':
      return {
        type: 'dsa',
        params: asn1.DSAPrivateKey.decode(data, 'der')
      }
    case 'EC PRIVATE KEY':
      data = asn1.ECPrivateKey.decode(data, 'der')
      return {
        curve: data.parameters.value,
        privateKey: data.privateKey
      }
    default: throw new Error('unknown key type ' + type)
  }
}
parseKeys.signature = asn1.signature
function decrypt (data, password) {
  var salt = data.algorithm.decrypt.kde.kdeparams.salt
  var iters = parseInt(data.algorithm.decrypt.kde.kdeparams.iters.toString(), 10)
  var algo = aesid[data.algorithm.decrypt.cipher.algo.join('.')]
  var iv = data.algorithm.decrypt.cipher.iv
  var cipherText = data.subjectPrivateKey
  var keylen = parseInt(algo.split('-')[1], 10) / 8
  var key = compat.pbkdf2Sync(password, salt, iters, keylen)
  var cipher = ciphers.createDecipheriv(algo, key, iv)
  var out = []
  out.push(cipher.update(cipherText))
  out.push(cipher.final())
  return Buffer.concat(out)
}

}).call(this,require("buffer").Buffer)

},{"./aesid.json":"/Users/jrmerz/dev/cstars/AHB/farm-budgets-app/node_modules/parse-asn1/aesid.json","./asn1":"/Users/jrmerz/dev/cstars/AHB/farm-budgets-app/node_modules/parse-asn1/asn1.js","./fixProc":"/Users/jrmerz/dev/cstars/AHB/farm-budgets-app/node_modules/parse-asn1/fixProc.js","browserify-aes":"/Users/jrmerz/dev/cstars/AHB/farm-budgets-app/node_modules/browserify-aes/browser.js","buffer":"/Users/jrmerz/dev/cstars/AHB/farm-budgets-app/node_modules/buffer/index.js","pbkdf2":"/Users/jrmerz/dev/cstars/AHB/farm-budgets-app/node_modules/pbkdf2/browser.js"}],"/Users/jrmerz/dev/cstars/AHB/farm-budgets-app/node_modules/parse-asn1/node_modules/asn1.js/lib/asn1.js":[function(require,module,exports){
var asn1 = exports;

asn1.bignum = require('bn.js');

asn1.define = require('./asn1/api').define;
asn1.base = require('./asn1/base');
asn1.constants = require('./asn1/constants');
asn1.decoders = require('./asn1/decoders');
asn1.encoders = require('./asn1/encoders');

},{"./asn1/api":"/Users/jrmerz/dev/cstars/AHB/farm-budgets-app/node_modules/parse-asn1/node_modules/asn1.js/lib/asn1/api.js","./asn1/base":"/Users/jrmerz/dev/cstars/AHB/farm-budgets-app/node_modules/parse-asn1/node_modules/asn1.js/lib/asn1/base/index.js","./asn1/constants":"/Users/jrmerz/dev/cstars/AHB/farm-budgets-app/node_modules/parse-asn1/node_modules/asn1.js/lib/asn1/constants/index.js","./asn1/decoders":"/Users/jrmerz/dev/cstars/AHB/farm-budgets-app/node_modules/parse-asn1/node_modules/asn1.js/lib/asn1/decoders/index.js","./asn1/encoders":"/Users/jrmerz/dev/cstars/AHB/farm-budgets-app/node_modules/parse-asn1/node_modules/asn1.js/lib/asn1/encoders/index.js","bn.js":"/Users/jrmerz/dev/cstars/AHB/farm-budgets-app/node_modules/parse-asn1/node_modules/bn.js/lib/bn.js"}],"/Users/jrmerz/dev/cstars/AHB/farm-budgets-app/node_modules/parse-asn1/node_modules/asn1.js/lib/asn1/api.js":[function(require,module,exports){
var asn1 = require('../asn1');
var inherits = require('inherits');

var api = exports;

api.define = function define(name, body) {
  return new Entity(name, body);
};

function Entity(name, body) {
  this.name = name;
  this.body = body;

  this.decoders = {};
  this.encoders = {};
};

Entity.prototype._createNamed = function createNamed(base) {
  var named;
  try {
    named = require('vm').runInThisContext(
      '(function ' + this.name + '(entity) {\n' +
      '  this._initNamed(entity);\n' +
      '})'
    );
  } catch (e) {
    named = function (entity) {
      this._initNamed(entity);
    };
  }
  inherits(named, base);
  named.prototype._initNamed = function initnamed(entity) {
    base.call(this, entity);
  };

  return new named(this);
};

Entity.prototype._getDecoder = function _getDecoder(enc) {
  // Lazily create decoder
  if (!this.decoders.hasOwnProperty(enc))
    this.decoders[enc] = this._createNamed(asn1.decoders[enc]);
  return this.decoders[enc];
};

Entity.prototype.decode = function decode(data, enc, options) {
  return this._getDecoder(enc).decode(data, options);
};

Entity.prototype._getEncoder = function _getEncoder(enc) {
  // Lazily create encoder
  if (!this.encoders.hasOwnProperty(enc))
    this.encoders[enc] = this._createNamed(asn1.encoders[enc]);
  return this.encoders[enc];
};

Entity.prototype.encode = function encode(data, enc, /* internal */ reporter) {
  return this._getEncoder(enc).encode(data, reporter);
};

},{"../asn1":"/Users/jrmerz/dev/cstars/AHB/farm-budgets-app/node_modules/parse-asn1/node_modules/asn1.js/lib/asn1.js","inherits":"/Users/jrmerz/dev/cstars/AHB/farm-budgets-app/node_modules/inherits/inherits_browser.js","vm":"/Users/jrmerz/dev/cstars/AHB/farm-budgets-app/node_modules/vm-browserify/index.js"}],"/Users/jrmerz/dev/cstars/AHB/farm-budgets-app/node_modules/parse-asn1/node_modules/asn1.js/lib/asn1/base/buffer.js":[function(require,module,exports){
var inherits = require('inherits');
var Reporter = require('../base').Reporter;
var Buffer = require('buffer').Buffer;

function DecoderBuffer(base, options) {
  Reporter.call(this, options);
  if (!Buffer.isBuffer(base)) {
    this.error('Input not Buffer');
    return;
  }

  this.base = base;
  this.offset = 0;
  this.length = base.length;
}
inherits(DecoderBuffer, Reporter);
exports.DecoderBuffer = DecoderBuffer;

DecoderBuffer.prototype.save = function save() {
  return { offset: this.offset, reporter: Reporter.prototype.save.call(this) };
};

DecoderBuffer.prototype.restore = function restore(save) {
  // Return skipped data
  var res = new DecoderBuffer(this.base);
  res.offset = save.offset;
  res.length = this.offset;

  this.offset = save.offset;
  Reporter.prototype.restore.call(this, save.reporter);

  return res;
};

DecoderBuffer.prototype.isEmpty = function isEmpty() {
  return this.offset === this.length;
};

DecoderBuffer.prototype.readUInt8 = function readUInt8(fail) {
  if (this.offset + 1 <= this.length)
    return this.base.readUInt8(this.offset++, true);
  else
    return this.error(fail || 'DecoderBuffer overrun');
}

DecoderBuffer.prototype.skip = function skip(bytes, fail) {
  if (!(this.offset + bytes <= this.length))
    return this.error(fail || 'DecoderBuffer overrun');

  var res = new DecoderBuffer(this.base);

  // Share reporter state
  res._reporterState = this._reporterState;

  res.offset = this.offset;
  res.length = this.offset + bytes;
  this.offset += bytes;
  return res;
}

DecoderBuffer.prototype.raw = function raw(save) {
  return this.base.slice(save ? save.offset : this.offset, this.length);
}

function EncoderBuffer(value, reporter) {
  if (Array.isArray(value)) {
    this.length = 0;
    this.value = value.map(function(item) {
      if (!(item instanceof EncoderBuffer))
        item = new EncoderBuffer(item, reporter);
      this.length += item.length;
      return item;
    }, this);
  } else if (typeof value === 'number') {
    if (!(0 <= value && value <= 0xff))
      return reporter.error('non-byte EncoderBuffer value');
    this.value = value;
    this.length = 1;
  } else if (typeof value === 'string') {
    this.value = value;
    this.length = Buffer.byteLength(value);
  } else if (Buffer.isBuffer(value)) {
    this.value = value;
    this.length = value.length;
  } else {
    return reporter.error('Unsupported type: ' + typeof value);
  }
}
exports.EncoderBuffer = EncoderBuffer;

EncoderBuffer.prototype.join = function join(out, offset) {
  if (!out)
    out = new Buffer(this.length);
  if (!offset)
    offset = 0;

  if (this.length === 0)
    return out;

  if (Array.isArray(this.value)) {
    this.value.forEach(function(item) {
      item.join(out, offset);
      offset += item.length;
    });
  } else {
    if (typeof this.value === 'number')
      out[offset] = this.value;
    else if (typeof this.value === 'string')
      out.write(this.value, offset);
    else if (Buffer.isBuffer(this.value))
      this.value.copy(out, offset);
    offset += this.length;
  }

  return out;
};

},{"../base":"/Users/jrmerz/dev/cstars/AHB/farm-budgets-app/node_modules/parse-asn1/node_modules/asn1.js/lib/asn1/base/index.js","buffer":"/Users/jrmerz/dev/cstars/AHB/farm-budgets-app/node_modules/buffer/index.js","inherits":"/Users/jrmerz/dev/cstars/AHB/farm-budgets-app/node_modules/inherits/inherits_browser.js"}],"/Users/jrmerz/dev/cstars/AHB/farm-budgets-app/node_modules/parse-asn1/node_modules/asn1.js/lib/asn1/base/index.js":[function(require,module,exports){
var base = exports;

base.Reporter = require('./reporter').Reporter;
base.DecoderBuffer = require('./buffer').DecoderBuffer;
base.EncoderBuffer = require('./buffer').EncoderBuffer;
base.Node = require('./node');

},{"./buffer":"/Users/jrmerz/dev/cstars/AHB/farm-budgets-app/node_modules/parse-asn1/node_modules/asn1.js/lib/asn1/base/buffer.js","./node":"/Users/jrmerz/dev/cstars/AHB/farm-budgets-app/node_modules/parse-asn1/node_modules/asn1.js/lib/asn1/base/node.js","./reporter":"/Users/jrmerz/dev/cstars/AHB/farm-budgets-app/node_modules/parse-asn1/node_modules/asn1.js/lib/asn1/base/reporter.js"}],"/Users/jrmerz/dev/cstars/AHB/farm-budgets-app/node_modules/parse-asn1/node_modules/asn1.js/lib/asn1/base/node.js":[function(require,module,exports){
var Reporter = require('../base').Reporter;
var EncoderBuffer = require('../base').EncoderBuffer;
var assert = require('minimalistic-assert');

// Supported tags
var tags = [
  'seq', 'seqof', 'set', 'setof', 'octstr', 'bitstr', 'objid', 'bool',
  'gentime', 'utctime', 'null_', 'enum', 'int', 'ia5str', 'utf8str', 'bmpstr',
  'numstr', 'printstr'
];

// Public methods list
var methods = [
  'key', 'obj', 'use', 'optional', 'explicit', 'implicit', 'def', 'choice',
  'any'
].concat(tags);

// Overrided methods list
var overrided = [
  '_peekTag', '_decodeTag', '_use',
  '_decodeStr', '_decodeObjid', '_decodeTime',
  '_decodeNull', '_decodeInt', '_decodeBool', '_decodeList',

  '_encodeComposite', '_encodeStr', '_encodeObjid', '_encodeTime',
  '_encodeNull', '_encodeInt', '_encodeBool'
];

function Node(enc, parent) {
  var state = {};
  this._baseState = state;

  state.enc = enc;

  state.parent = parent || null;
  state.children = null;

  // State
  state.tag = null;
  state.args = null;
  state.reverseArgs = null;
  state.choice = null;
  state.optional = false;
  state.any = false;
  state.obj = false;
  state.use = null;
  state.useDecoder = null;
  state.key = null;
  state['default'] = null;
  state.explicit = null;
  state.implicit = null;

  // Should create new instance on each method
  if (!state.parent) {
    state.children = [];
    this._wrap();
  }
}
module.exports = Node;

var stateProps = [
  'enc', 'parent', 'children', 'tag', 'args', 'reverseArgs', 'choice',
  'optional', 'any', 'obj', 'use', 'alteredUse', 'key', 'default', 'explicit',
  'implicit'
];

Node.prototype.clone = function clone() {
  var state = this._baseState;
  var cstate = {};
  stateProps.forEach(function(prop) {
    cstate[prop] = state[prop];
  });
  var res = new this.constructor(cstate.parent);
  res._baseState = cstate;
  return res;
};

Node.prototype._wrap = function wrap() {
  var state = this._baseState;
  methods.forEach(function(method) {
    this[method] = function _wrappedMethod() {
      var clone = new this.constructor(this);
      state.children.push(clone);
      return clone[method].apply(clone, arguments);
    };
  }, this);
};

Node.prototype._init = function init(body) {
  var state = this._baseState;

  assert(state.parent === null);
  body.call(this);

  // Filter children
  state.children = state.children.filter(function(child) {
    return child._baseState.parent === this;
  }, this);
  assert.equal(state.children.length, 1, 'Root node can have only one child');
};

Node.prototype._useArgs = function useArgs(args) {
  var state = this._baseState;

  // Filter children and args
  var children = args.filter(function(arg) {
    return arg instanceof this.constructor;
  }, this);
  args = args.filter(function(arg) {
    return !(arg instanceof this.constructor);
  }, this);

  if (children.length !== 0) {
    assert(state.children === null);
    state.children = children;

    // Replace parent to maintain backward link
    children.forEach(function(child) {
      child._baseState.parent = this;
    }, this);
  }
  if (args.length !== 0) {
    assert(state.args === null);
    state.args = args;
    state.reverseArgs = args.map(function(arg) {
      if (typeof arg !== 'object' || arg.constructor !== Object)
        return arg;

      var res = {};
      Object.keys(arg).forEach(function(key) {
        if (key == (key | 0))
          key |= 0;
        var value = arg[key];
        res[value] = key;
      });
      return res;
    });
  }
};

//
// Overrided methods
//

overrided.forEach(function(method) {
  Node.prototype[method] = function _overrided() {
    var state = this._baseState;
    throw new Error(method + ' not implemented for encoding: ' + state.enc);
  };
});

//
// Public methods
//

tags.forEach(function(tag) {
  Node.prototype[tag] = function _tagMethod() {
    var state = this._baseState;
    var args = Array.prototype.slice.call(arguments);

    assert(state.tag === null);
    state.tag = tag;

    this._useArgs(args);

    return this;
  };
});

Node.prototype.use = function use(item) {
  var state = this._baseState;

  assert(state.use === null);
  state.use = item;

  return this;
};

Node.prototype.optional = function optional() {
  var state = this._baseState;

  state.optional = true;

  return this;
};

Node.prototype.def = function def(val) {
  var state = this._baseState;

  assert(state['default'] === null);
  state['default'] = val;
  state.optional = true;

  return this;
};

Node.prototype.explicit = function explicit(num) {
  var state = this._baseState;

  assert(state.explicit === null && state.implicit === null);
  state.explicit = num;

  return this;
};

Node.prototype.implicit = function implicit(num) {
  var state = this._baseState;

  assert(state.explicit === null && state.implicit === null);
  state.implicit = num;

  return this;
};

Node.prototype.obj = function obj() {
  var state = this._baseState;
  var args = Array.prototype.slice.call(arguments);

  state.obj = true;

  if (args.length !== 0)
    this._useArgs(args);

  return this;
};

Node.prototype.key = function key(newKey) {
  var state = this._baseState;

  assert(state.key === null);
  state.key = newKey;

  return this;
};

Node.prototype.any = function any() {
  var state = this._baseState;

  state.any = true;

  return this;
};

Node.prototype.choice = function choice(obj) {
  var state = this._baseState;

  assert(state.choice === null);
  state.choice = obj;
  this._useArgs(Object.keys(obj).map(function(key) {
    return obj[key];
  }));

  return this;
};

//
// Decoding
//

Node.prototype._decode = function decode(input) {
  var state = this._baseState;

  // Decode root node
  if (state.parent === null)
    return input.wrapResult(state.children[0]._decode(input));

  var result = state['default'];
  var present = true;

  var prevKey;
  if (state.key !== null)
    prevKey = input.enterKey(state.key);

  // Check if tag is there
  if (state.optional) {
    var tag = null;
    if (state.explicit !== null)
      tag = state.explicit;
    else if (state.implicit !== null)
      tag = state.implicit;
    else if (state.tag !== null)
      tag = state.tag;

    if (tag === null && !state.any) {
      // Trial and Error
      var save = input.save();
      try {
        if (state.choice === null)
          this._decodeGeneric(state.tag, input);
        else
          this._decodeChoice(input);
        present = true;
      } catch (e) {
        present = false;
      }
      input.restore(save);
    } else {
      present = this._peekTag(input, tag, state.any);

      if (input.isError(present))
        return present;
    }
  }

  // Push object on stack
  var prevObj;
  if (state.obj && present)
    prevObj = input.enterObject();

  if (present) {
    // Unwrap explicit values
    if (state.explicit !== null) {
      var explicit = this._decodeTag(input, state.explicit);
      if (input.isError(explicit))
        return explicit;
      input = explicit;
    }

    // Unwrap implicit and normal values
    if (state.use === null && state.choice === null) {
      if (state.any)
        var save = input.save();
      var body = this._decodeTag(
        input,
        state.implicit !== null ? state.implicit : state.tag,
        state.any
      );
      if (input.isError(body))
        return body;

      if (state.any)
        result = input.raw(save);
      else
        input = body;
    }

    // Select proper method for tag
    if (state.any)
      result = result;
    else if (state.choice === null)
      result = this._decodeGeneric(state.tag, input);
    else
      result = this._decodeChoice(input);

    if (input.isError(result))
      return result;

    // Decode children
    if (!state.any && state.choice === null && state.children !== null) {
      var fail = state.children.some(function decodeChildren(child) {
        // NOTE: We are ignoring errors here, to let parser continue with other
        // parts of encoded data
        child._decode(input);
      });
      if (fail)
        return err;
    }
  }

  // Pop object
  if (state.obj && present)
    result = input.leaveObject(prevObj);

  // Set key
  if (state.key !== null && (result !== null || present === true))
    input.leaveKey(prevKey, state.key, result);

  return result;
};

Node.prototype._decodeGeneric = function decodeGeneric(tag, input) {
  var state = this._baseState;

  if (tag === 'seq' || tag === 'set')
    return null;
  if (tag === 'seqof' || tag === 'setof')
    return this._decodeList(input, tag, state.args[0]);
  else if (tag === 'octstr' || tag === 'bitstr')
    return this._decodeStr(input, tag);
  else if (tag === 'ia5str' || tag === 'utf8str' || tag === 'bmpstr')
    return this._decodeStr(input, tag);
  else if (tag === 'numstr' || tag === 'printstr')
    return this._decodeStr(input, tag);
  else if (tag === 'objid' && state.args)
    return this._decodeObjid(input, state.args[0], state.args[1]);
  else if (tag === 'objid')
    return this._decodeObjid(input, null, null);
  else if (tag === 'gentime' || tag === 'utctime')
    return this._decodeTime(input, tag);
  else if (tag === 'null_')
    return this._decodeNull(input);
  else if (tag === 'bool')
    return this._decodeBool(input);
  else if (tag === 'int' || tag === 'enum')
    return this._decodeInt(input, state.args && state.args[0]);
  else if (state.use !== null)
    return this._getUse(state.use, input._reporterState.obj)._decode(input);
  else
    return input.error('unknown tag: ' + tag);

  return null;
};

Node.prototype._getUse = function _getUse(entity, obj) {

  var state = this._baseState;
  // Create altered use decoder if implicit is set
  state.useDecoder = this._use(entity, obj);
  assert(state.useDecoder._baseState.parent === null);
  state.useDecoder = state.useDecoder._baseState.children[0];
  if (state.implicit !== state.useDecoder._baseState.implicit) {
    state.useDecoder = state.useDecoder.clone();
    state.useDecoder._baseState.implicit = state.implicit;
  }
  return state.useDecoder;
};

Node.prototype._decodeChoice = function decodeChoice(input) {
  var state = this._baseState;
  var result = null;
  var match = false;

  Object.keys(state.choice).some(function(key) {
    var save = input.save();
    var node = state.choice[key];
    try {
      var value = node._decode(input);
      if (input.isError(value))
        return false;

      result = { type: key, value: value };
      match = true;
    } catch (e) {
      input.restore(save);
      return false;
    }
    return true;
  }, this);

  if (!match)
    return input.error('Choice not matched');

  return result;
};

//
// Encoding
//

Node.prototype._createEncoderBuffer = function createEncoderBuffer(data) {
  return new EncoderBuffer(data, this.reporter);
};

Node.prototype._encode = function encode(data, reporter, parent) {
  var state = this._baseState;
  if (state['default'] !== null && state['default'] === data)
    return;

  var result = this._encodeValue(data, reporter, parent);
  if (result === undefined)
    return;

  if (this._skipDefault(result, reporter, parent))
    return;

  return result;
};

Node.prototype._encodeValue = function encode(data, reporter, parent) {
  var state = this._baseState;

  // Decode root node
  if (state.parent === null)
    return state.children[0]._encode(data, reporter || new Reporter());

  var result = null;
  var present = true;

  // Set reporter to share it with a child class
  this.reporter = reporter;

  // Check if data is there
  if (state.optional && data === undefined) {
    if (state['default'] !== null)
      data = state['default']
    else
      return;
  }

  // For error reporting
  var prevKey;

  // Encode children first
  var content = null;
  var primitive = false;
  if (state.any) {
    // Anything that was given is translated to buffer
    result = this._createEncoderBuffer(data);
  } else if (state.choice) {
    result = this._encodeChoice(data, reporter);
  } else if (state.children) {
    content = state.children.map(function(child) {
      if (child._baseState.tag === 'null_')
        return child._encode(null, reporter, data);

      if (child._baseState.key === null)
        return reporter.error('Child should have a key');
      var prevKey = reporter.enterKey(child._baseState.key);

      if (typeof data !== 'object')
        return reporter.error('Child expected, but input is not object');

      var res = child._encode(data[child._baseState.key], reporter, data);
      reporter.leaveKey(prevKey);

      return res;
    }, this).filter(function(child) {
      return child;
    });

    content = this._createEncoderBuffer(content);
  } else {
    if (state.tag === 'seqof' || state.tag === 'setof') {
      // TODO(indutny): this should be thrown on DSL level
      if (!(state.args && state.args.length === 1))
        return reporter.error('Too many args for : ' + state.tag);

      if (!Array.isArray(data))
        return reporter.error('seqof/setof, but data is not Array');

      var child = this.clone();
      child._baseState.implicit = null;
      content = this._createEncoderBuffer(data.map(function(item) {
        var state = this._baseState;

        return this._getUse(state.args[0], data)._encode(item, reporter);
      }, child));
    } else if (state.use !== null) {
      result = this._getUse(state.use, parent)._encode(data, reporter);
    } else {
      content = this._encodePrimitive(state.tag, data);
      primitive = true;
    }
  }

  // Encode data itself
  var result;
  if (!state.any && state.choice === null) {
    var tag = state.implicit !== null ? state.implicit : state.tag;
    var cls = state.implicit === null ? 'universal' : 'context';

    if (tag === null) {
      if (state.use === null)
        reporter.error('Tag could be ommited only for .use()');
    } else {
      if (state.use === null)
        result = this._encodeComposite(tag, primitive, cls, content);
    }
  }

  // Wrap in explicit
  if (state.explicit !== null)
    result = this._encodeComposite(state.explicit, false, 'context', result);

  return result;
};

Node.prototype._encodeChoice = function encodeChoice(data, reporter) {
  var state = this._baseState;

  var node = state.choice[data.type];
  if (!node) {
    assert(
        false,
        data.type + ' not found in ' +
            JSON.stringify(Object.keys(state.choice)));
  }
  return node._encode(data.value, reporter);
};

Node.prototype._encodePrimitive = function encodePrimitive(tag, data) {
  var state = this._baseState;

  if (tag === 'octstr' || tag === 'bitstr' || tag === 'ia5str')
    return this._encodeStr(data, tag);
  else if (tag === 'utf8str' || tag === 'bmpstr')
    return this._encodeStr(data, tag);
  else if (tag === 'numstr' || tag === 'printstr')
    return this._encodeStr(data, tag);
  else if (tag === 'objid' && state.args)
    return this._encodeObjid(data, state.reverseArgs[0], state.args[1]);
  else if (tag === 'objid')
    return this._encodeObjid(data, null, null);
  else if (tag === 'gentime' || tag === 'utctime')
    return this._encodeTime(data, tag);
  else if (tag === 'null_')
    return this._encodeNull();
  else if (tag === 'int' || tag === 'enum')
    return this._encodeInt(data, state.args && state.reverseArgs[0]);
  else if (tag === 'bool')
    return this._encodeBool(data);
  else
    throw new Error('Unsupported tag: ' + tag);
};

Node.prototype._isNumstr = function isNumstr(str) {
  return /^[0-9 ]*$/.test(str);
};

Node.prototype._isPrintstr = function isPrintstr(str) {
  return /^[A-Za-z0-9 '\(\)\+,\-\.\/:=\?]*$/.test(str);
};
},{"../base":"/Users/jrmerz/dev/cstars/AHB/farm-budgets-app/node_modules/parse-asn1/node_modules/asn1.js/lib/asn1/base/index.js","minimalistic-assert":"/Users/jrmerz/dev/cstars/AHB/farm-budgets-app/node_modules/minimalistic-assert/index.js"}],"/Users/jrmerz/dev/cstars/AHB/farm-budgets-app/node_modules/parse-asn1/node_modules/asn1.js/lib/asn1/base/reporter.js":[function(require,module,exports){
var inherits = require('inherits');

function Reporter(options) {
  this._reporterState = {
    obj: null,
    path: [],
    options: options || {},
    errors: []
  };
}
exports.Reporter = Reporter;

Reporter.prototype.isError = function isError(obj) {
  return obj instanceof ReporterError;
};

Reporter.prototype.save = function save() {
  var state = this._reporterState;

  return { obj: state.obj, pathLen: state.path.length };
};

Reporter.prototype.restore = function restore(data) {
  var state = this._reporterState;

  state.obj = data.obj;
  state.path = state.path.slice(0, data.pathLen);
};

Reporter.prototype.enterKey = function enterKey(key) {
  return this._reporterState.path.push(key);
};

Reporter.prototype.leaveKey = function leaveKey(index, key, value) {
  var state = this._reporterState;

  state.path = state.path.slice(0, index - 1);
  if (state.obj !== null)
    state.obj[key] = value;
};

Reporter.prototype.enterObject = function enterObject() {
  var state = this._reporterState;

  var prev = state.obj;
  state.obj = {};
  return prev;
};

Reporter.prototype.leaveObject = function leaveObject(prev) {
  var state = this._reporterState;

  var now = state.obj;
  state.obj = prev;
  return now;
};

Reporter.prototype.error = function error(msg) {
  var err;
  var state = this._reporterState;

  var inherited = msg instanceof ReporterError;
  if (inherited) {
    err = msg;
  } else {
    err = new ReporterError(state.path.map(function(elem) {
      return '[' + JSON.stringify(elem) + ']';
    }).join(''), msg.message || msg, msg.stack);
  }

  if (!state.options.partial)
    throw err;

  if (!inherited)
    state.errors.push(err);

  return err;
};

Reporter.prototype.wrapResult = function wrapResult(result) {
  var state = this._reporterState;
  if (!state.options.partial)
    return result;

  return {
    result: this.isError(result) ? null : result,
    errors: state.errors
  };
};

function ReporterError(path, msg) {
  this.path = path;
  this.rethrow(msg);
};
inherits(ReporterError, Error);

ReporterError.prototype.rethrow = function rethrow(msg) {
  this.message = msg + ' at: ' + (this.path || '(shallow)');
  Error.captureStackTrace(this, ReporterError);

  return this;
};

},{"inherits":"/Users/jrmerz/dev/cstars/AHB/farm-budgets-app/node_modules/inherits/inherits_browser.js"}],"/Users/jrmerz/dev/cstars/AHB/farm-budgets-app/node_modules/parse-asn1/node_modules/asn1.js/lib/asn1/constants/der.js":[function(require,module,exports){
var constants = require('../constants');

exports.tagClass = {
  0: 'universal',
  1: 'application',
  2: 'context',
  3: 'private'
};
exports.tagClassByName = constants._reverse(exports.tagClass);

exports.tag = {
  0x00: 'end',
  0x01: 'bool',
  0x02: 'int',
  0x03: 'bitstr',
  0x04: 'octstr',
  0x05: 'null_',
  0x06: 'objid',
  0x07: 'objDesc',
  0x08: 'external',
  0x09: 'real',
  0x0a: 'enum',
  0x0b: 'embed',
  0x0c: 'utf8str',
  0x0d: 'relativeOid',
  0x10: 'seq',
  0x11: 'set',
  0x12: 'numstr',
  0x13: 'printstr',
  0x14: 't61str',
  0x15: 'videostr',
  0x16: 'ia5str',
  0x17: 'utctime',
  0x18: 'gentime',
  0x19: 'graphstr',
  0x1a: 'iso646str',
  0x1b: 'genstr',
  0x1c: 'unistr',
  0x1d: 'charstr',
  0x1e: 'bmpstr'
};
exports.tagByName = constants._reverse(exports.tag);

},{"../constants":"/Users/jrmerz/dev/cstars/AHB/farm-budgets-app/node_modules/parse-asn1/node_modules/asn1.js/lib/asn1/constants/index.js"}],"/Users/jrmerz/dev/cstars/AHB/farm-budgets-app/node_modules/parse-asn1/node_modules/asn1.js/lib/asn1/constants/index.js":[function(require,module,exports){
var constants = exports;

// Helper
constants._reverse = function reverse(map) {
  var res = {};

  Object.keys(map).forEach(function(key) {
    // Convert key to integer if it is stringified
    if ((key | 0) == key)
      key = key | 0;

    var value = map[key];
    res[value] = key;
  });

  return res;
};

constants.der = require('./der');

},{"./der":"/Users/jrmerz/dev/cstars/AHB/farm-budgets-app/node_modules/parse-asn1/node_modules/asn1.js/lib/asn1/constants/der.js"}],"/Users/jrmerz/dev/cstars/AHB/farm-budgets-app/node_modules/parse-asn1/node_modules/asn1.js/lib/asn1/decoders/der.js":[function(require,module,exports){
var inherits = require('inherits');

var asn1 = require('../../asn1');
var base = asn1.base;
var bignum = asn1.bignum;

// Import DER constants
var der = asn1.constants.der;

function DERDecoder(entity) {
  this.enc = 'der';
  this.name = entity.name;
  this.entity = entity;

  // Construct base tree
  this.tree = new DERNode();
  this.tree._init(entity.body);
};
module.exports = DERDecoder;

DERDecoder.prototype.decode = function decode(data, options) {
  if (!(data instanceof base.DecoderBuffer))
    data = new base.DecoderBuffer(data, options);

  return this.tree._decode(data, options);
};

// Tree methods

function DERNode(parent) {
  base.Node.call(this, 'der', parent);
}
inherits(DERNode, base.Node);

DERNode.prototype._peekTag = function peekTag(buffer, tag, any) {
  if (buffer.isEmpty())
    return false;

  var state = buffer.save();
  var decodedTag = derDecodeTag(buffer, 'Failed to peek tag: "' + tag + '"');
  if (buffer.isError(decodedTag))
    return decodedTag;

  buffer.restore(state);

  return decodedTag.tag === tag || decodedTag.tagStr === tag || any;
};

DERNode.prototype._decodeTag = function decodeTag(buffer, tag, any) {
  var decodedTag = derDecodeTag(buffer,
                                'Failed to decode tag of "' + tag + '"');
  if (buffer.isError(decodedTag))
    return decodedTag;

  var len = derDecodeLen(buffer,
                         decodedTag.primitive,
                         'Failed to get length of "' + tag + '"');

  // Failure
  if (buffer.isError(len))
    return len;

  if (!any &&
      decodedTag.tag !== tag &&
      decodedTag.tagStr !== tag &&
      decodedTag.tagStr + 'of' !== tag) {
    return buffer.error('Failed to match tag: "' + tag + '"');
  }

  if (decodedTag.primitive || len !== null)
    return buffer.skip(len, 'Failed to match body of: "' + tag + '"');

  // Indefinite length... find END tag
  var state = buffer.save();
  var res = this._skipUntilEnd(
      buffer,
      'Failed to skip indefinite length body: "' + this.tag + '"');
  if (buffer.isError(res))
    return res;

  len = buffer.offset - state.offset;
  buffer.restore(state);
  return buffer.skip(len, 'Failed to match body of: "' + tag + '"');
};

DERNode.prototype._skipUntilEnd = function skipUntilEnd(buffer, fail) {
  while (true) {
    var tag = derDecodeTag(buffer, fail);
    if (buffer.isError(tag))
      return tag;
    var len = derDecodeLen(buffer, tag.primitive, fail);
    if (buffer.isError(len))
      return len;

    var res;
    if (tag.primitive || len !== null)
      res = buffer.skip(len)
    else
      res = this._skipUntilEnd(buffer, fail);

    // Failure
    if (buffer.isError(res))
      return res;

    if (tag.tagStr === 'end')
      break;
  }
};

DERNode.prototype._decodeList = function decodeList(buffer, tag, decoder) {
  var result = [];
  while (!buffer.isEmpty()) {
    var possibleEnd = this._peekTag(buffer, 'end');
    if (buffer.isError(possibleEnd))
      return possibleEnd;

    var res = decoder.decode(buffer, 'der');
    if (buffer.isError(res) && possibleEnd)
      break;
    result.push(res);
  }
  return result;
};

DERNode.prototype._decodeStr = function decodeStr(buffer, tag) {
  if (tag === 'octstr') {
    return buffer.raw();
  } else if (tag === 'bitstr') {
    var unused = buffer.readUInt8();
    if (buffer.isError(unused))
      return unused;

    return { unused: unused, data: buffer.raw() };
  } else if (tag === 'ia5str' || tag === 'utf8str') {
    return buffer.raw().toString();
  } else if(tag === 'numstr') {
    var numstr = buffer.raw().toString('ascii');
    if (!this._isNumstr(numstr)) {
      return buffer.error('Decoding of string type: ' +
                          'numstr unsupported characters');
    }

    return numstr;
  } else if (tag === 'printstr') {
    var printstr = buffer.raw().toString('ascii');
    if (!this._isPrintstr(printstr)) {
      return buffer.error('Decoding of string type: ' +
                          'printstr unsupported characters');
    }

    return printstr;
  } else if(tag === 'bmpstr') {
    var raw = buffer.raw();
    if (raw.length % 2 === 1)
      return buffer.error('Decoding of string type: bmpstr length mismatch');

    var str = '';
    for (var i = 0; i < raw.length / 2; i++) {
      str += String.fromCharCode(raw.readUInt16BE(i * 2));
    }
    return str;
  } else {
    return buffer.error('Decoding of string type: ' + tag + ' unsupported');
  }
};

DERNode.prototype._decodeObjid = function decodeObjid(buffer, values, relative) {
  var identifiers = [];
  var ident = 0;
  while (!buffer.isEmpty()) {
    var subident = buffer.readUInt8();
    ident <<= 7;
    ident |= subident & 0x7f;
    if ((subident & 0x80) === 0) {
      identifiers.push(ident);
      ident = 0;
    }
  }
  if (subident & 0x80)
    identifiers.push(ident);

  var first = (identifiers[0] / 40) | 0;
  var second = identifiers[0] % 40;

  if (relative)
    result = identifiers;
  else
    result = [first, second].concat(identifiers.slice(1));

  if (values) {
    var tmp = values[result.join(' ')];
    if (tmp === undefined)
      tmp = values[result.join('.')];
    if (tmp !== undefined)
      result = tmp;
  }

  return result;
};

DERNode.prototype._decodeTime = function decodeTime(buffer, tag) {
  var str = buffer.raw().toString();
  if (tag === 'gentime') {
    var year = str.slice(0, 4) | 0;
    var mon = str.slice(4, 6) | 0;
    var day = str.slice(6, 8) | 0;
    var hour = str.slice(8, 10) | 0;
    var min = str.slice(10, 12) | 0;
    var sec = str.slice(12, 14) | 0;
  } else if (tag === 'utctime') {
    var year = str.slice(0, 2) | 0;
    var mon = str.slice(2, 4) | 0;
    var day = str.slice(4, 6) | 0;
    var hour = str.slice(6, 8) | 0;
    var min = str.slice(8, 10) | 0;
    var sec = str.slice(10, 12) | 0;
    if (year < 70)
      year = 2000 + year;
    else
      year = 1900 + year;
  } else {
    return buffer.error('Decoding ' + tag + ' time is not supported yet');
  }

  return Date.UTC(year, mon - 1, day, hour, min, sec, 0);
};

DERNode.prototype._decodeNull = function decodeNull(buffer) {
  return null;
};

DERNode.prototype._decodeBool = function decodeBool(buffer) {
  var res = buffer.readUInt8();
  if (buffer.isError(res))
    return res;
  else
    return res !== 0;
};

DERNode.prototype._decodeInt = function decodeInt(buffer, values) {
  // Bigint, return as it is (assume big endian)
  var raw = buffer.raw();
  var res = new bignum(raw);

  if (values)
    res = values[res.toString(10)] || res;

  return res;
};

DERNode.prototype._use = function use(entity, obj) {
  if (typeof entity === 'function')
    entity = entity(obj);
  return entity._getDecoder('der').tree;
};

// Utility methods

function derDecodeTag(buf, fail) {
  var tag = buf.readUInt8(fail);
  if (buf.isError(tag))
    return tag;

  var cls = der.tagClass[tag >> 6];
  var primitive = (tag & 0x20) === 0;

  // Multi-octet tag - load
  if ((tag & 0x1f) === 0x1f) {
    var oct = tag;
    tag = 0;
    while ((oct & 0x80) === 0x80) {
      oct = buf.readUInt8(fail);
      if (buf.isError(oct))
        return oct;

      tag <<= 7;
      tag |= oct & 0x7f;
    }
  } else {
    tag &= 0x1f;
  }
  var tagStr = der.tag[tag];

  return {
    cls: cls,
    primitive: primitive,
    tag: tag,
    tagStr: tagStr
  };
}

function derDecodeLen(buf, primitive, fail) {
  var len = buf.readUInt8(fail);
  if (buf.isError(len))
    return len;

  // Indefinite form
  if (!primitive && len === 0x80)
    return null;

  // Definite form
  if ((len & 0x80) === 0) {
    // Short form
    return len;
  }

  // Long form
  var num = len & 0x7f;
  if (num >= 4)
    return buf.error('length octect is too long');

  len = 0;
  for (var i = 0; i < num; i++) {
    len <<= 8;
    var j = buf.readUInt8(fail);
    if (buf.isError(j))
      return j;
    len |= j;
  }

  return len;
}

},{"../../asn1":"/Users/jrmerz/dev/cstars/AHB/farm-budgets-app/node_modules/parse-asn1/node_modules/asn1.js/lib/asn1.js","inherits":"/Users/jrmerz/dev/cstars/AHB/farm-budgets-app/node_modules/inherits/inherits_browser.js"}],"/Users/jrmerz/dev/cstars/AHB/farm-budgets-app/node_modules/parse-asn1/node_modules/asn1.js/lib/asn1/decoders/index.js":[function(require,module,exports){
var decoders = exports;

decoders.der = require('./der');
decoders.pem = require('./pem');

},{"./der":"/Users/jrmerz/dev/cstars/AHB/farm-budgets-app/node_modules/parse-asn1/node_modules/asn1.js/lib/asn1/decoders/der.js","./pem":"/Users/jrmerz/dev/cstars/AHB/farm-budgets-app/node_modules/parse-asn1/node_modules/asn1.js/lib/asn1/decoders/pem.js"}],"/Users/jrmerz/dev/cstars/AHB/farm-budgets-app/node_modules/parse-asn1/node_modules/asn1.js/lib/asn1/decoders/pem.js":[function(require,module,exports){
var inherits = require('inherits');
var Buffer = require('buffer').Buffer;

var asn1 = require('../../asn1');
var DERDecoder = require('./der');

function PEMDecoder(entity) {
  DERDecoder.call(this, entity);
  this.enc = 'pem';
};
inherits(PEMDecoder, DERDecoder);
module.exports = PEMDecoder;

PEMDecoder.prototype.decode = function decode(data, options) {
  var lines = data.toString().split(/[\r\n]+/g);

  var label = options.label.toUpperCase();

  var re = /^-----(BEGIN|END) ([^-]+)-----$/;
  var start = -1;
  var end = -1;
  for (var i = 0; i < lines.length; i++) {
    var match = lines[i].match(re);
    if (match === null)
      continue;

    if (match[2] !== label)
      continue;

    if (start === -1) {
      if (match[1] !== 'BEGIN')
        break;
      start = i;
    } else {
      if (match[1] !== 'END')
        break;
      end = i;
      break;
    }
  }
  if (start === -1 || end === -1)
    throw new Error('PEM section not found for: ' + label);

  var base64 = lines.slice(start + 1, end).join('');
  // Remove excessive symbols
  base64.replace(/[^a-z0-9\+\/=]+/gi, '');

  var input = new Buffer(base64, 'base64');
  return DERDecoder.prototype.decode.call(this, input, options);
};

},{"../../asn1":"/Users/jrmerz/dev/cstars/AHB/farm-budgets-app/node_modules/parse-asn1/node_modules/asn1.js/lib/asn1.js","./der":"/Users/jrmerz/dev/cstars/AHB/farm-budgets-app/node_modules/parse-asn1/node_modules/asn1.js/lib/asn1/decoders/der.js","buffer":"/Users/jrmerz/dev/cstars/AHB/farm-budgets-app/node_modules/buffer/index.js","inherits":"/Users/jrmerz/dev/cstars/AHB/farm-budgets-app/node_modules/inherits/inherits_browser.js"}],"/Users/jrmerz/dev/cstars/AHB/farm-budgets-app/node_modules/parse-asn1/node_modules/asn1.js/lib/asn1/encoders/der.js":[function(require,module,exports){
var inherits = require('inherits');
var Buffer = require('buffer').Buffer;

var asn1 = require('../../asn1');
var base = asn1.base;
var bignum = asn1.bignum;

// Import DER constants
var der = asn1.constants.der;

function DEREncoder(entity) {
  this.enc = 'der';
  this.name = entity.name;
  this.entity = entity;

  // Construct base tree
  this.tree = new DERNode();
  this.tree._init(entity.body);
};
module.exports = DEREncoder;

DEREncoder.prototype.encode = function encode(data, reporter) {
  return this.tree._encode(data, reporter).join();
};

// Tree methods

function DERNode(parent) {
  base.Node.call(this, 'der', parent);
}
inherits(DERNode, base.Node);

DERNode.prototype._encodeComposite = function encodeComposite(tag,
                                                              primitive,
                                                              cls,
                                                              content) {
  var encodedTag = encodeTag(tag, primitive, cls, this.reporter);

  // Short form
  if (content.length < 0x80) {
    var header = new Buffer(2);
    header[0] = encodedTag;
    header[1] = content.length;
    return this._createEncoderBuffer([ header, content ]);
  }

  // Long form
  // Count octets required to store length
  var lenOctets = 1;
  for (var i = content.length; i >= 0x100; i >>= 8)
    lenOctets++;

  var header = new Buffer(1 + 1 + lenOctets);
  header[0] = encodedTag;
  header[1] = 0x80 | lenOctets;

  for (var i = 1 + lenOctets, j = content.length; j > 0; i--, j >>= 8)
    header[i] = j & 0xff;

  return this._createEncoderBuffer([ header, content ]);
};

DERNode.prototype._encodeStr = function encodeStr(str, tag) {
  if (tag === 'octstr') {
    return this._createEncoderBuffer(str);
  } else if (tag === 'bitstr') {
    return this._createEncoderBuffer([ str.unused | 0, str.data ]);
  } else if (tag === 'ia5str' || tag === 'utf8str') {
    return this._createEncoderBuffer(str);
  } else if (tag === 'bmpstr') {
    var buf = new Buffer(str.length * 2);
    for (var i = 0; i < str.length; i++) {
      buf.writeUInt16BE(str.charCodeAt(i), i * 2);
    }
    return this._createEncoderBuffer(buf);
  } else if (tag === 'numstr') {
    if (!this._isNumstr(str)) {
      return this.reporter.error('Encoding of string type: numstr supports ' +
                                 'only digits and space');
    }

    return this._createEncoderBuffer(str);
  } else if (tag === 'printstr') {
    if (!this._isPrintstr(str)) {
      return this.reporter.error('Encoding of string type: printstr supports ' +
                                 'only latin upper and lower case letters, ' +
                                 'digits, space, apostrophe, left and rigth ' +
                                 'parenthesis, plus sign, comma, hyphen, ' +
                                 'dot, slash, colon, equal sign, ' +
                                 'question mark');
    }

    return this._createEncoderBuffer(str);
  } else {
    return this.reporter.error('Encoding of string type: ' + tag +
                               ' unsupported');
  }
};

DERNode.prototype._encodeObjid = function encodeObjid(id, values, relative) {
  if (typeof id === 'string') {
    if (!values)
      return this.reporter.error('string objid given, but no values map found');
    if (!values.hasOwnProperty(id))
      return this.reporter.error('objid not found in values map');
    id = values[id].split(/[\s\.]+/g);
    for (var i = 0; i < id.length; i++)
      id[i] |= 0;
  } else if (Array.isArray(id)) {
    id = id.slice();
    for (var i = 0; i < id.length; i++)
      id[i] |= 0;
  }

  if (!Array.isArray(id)) {
    return this.reporter.error('objid() should be either array or string, ' +
                               'got: ' + JSON.stringify(id));
  }

  if (!relative) {
    if (id[1] >= 40)
      return this.reporter.error('Second objid identifier OOB');
    id.splice(0, 2, id[0] * 40 + id[1]);
  }

  // Count number of octets
  var size = 0;
  for (var i = 0; i < id.length; i++) {
    var ident = id[i];
    for (size++; ident >= 0x80; ident >>= 7)
      size++;
  }

  var objid = new Buffer(size);
  var offset = objid.length - 1;
  for (var i = id.length - 1; i >= 0; i--) {
    var ident = id[i];
    objid[offset--] = ident & 0x7f;
    while ((ident >>= 7) > 0)
      objid[offset--] = 0x80 | (ident & 0x7f);
  }

  return this._createEncoderBuffer(objid);
};

function two(num) {
  if (num < 10)
    return '0' + num;
  else
    return num;
}

DERNode.prototype._encodeTime = function encodeTime(time, tag) {
  var str;
  var date = new Date(time);

  if (tag === 'gentime') {
    str = [
      two(date.getFullYear()),
      two(date.getUTCMonth() + 1),
      two(date.getUTCDate()),
      two(date.getUTCHours()),
      two(date.getUTCMinutes()),
      two(date.getUTCSeconds()),
      'Z'
    ].join('');
  } else if (tag === 'utctime') {
    str = [
      two(date.getFullYear() % 100),
      two(date.getUTCMonth() + 1),
      two(date.getUTCDate()),
      two(date.getUTCHours()),
      two(date.getUTCMinutes()),
      two(date.getUTCSeconds()),
      'Z'
    ].join('');
  } else {
    this.reporter.error('Encoding ' + tag + ' time is not supported yet');
  }

  return this._encodeStr(str, 'octstr');
};

DERNode.prototype._encodeNull = function encodeNull() {
  return this._createEncoderBuffer('');
};

DERNode.prototype._encodeInt = function encodeInt(num, values) {
  if (typeof num === 'string') {
    if (!values)
      return this.reporter.error('String int or enum given, but no values map');
    if (!values.hasOwnProperty(num)) {
      return this.reporter.error('Values map doesn\'t contain: ' +
                                 JSON.stringify(num));
    }
    num = values[num];
  }

  // Bignum, assume big endian
  if (typeof num !== 'number' && !Buffer.isBuffer(num)) {
    var numArray = num.toArray();
    if (!num.sign && numArray[0] & 0x80) {
      numArray.unshift(0);
    }
    num = new Buffer(numArray);
  }

  if (Buffer.isBuffer(num)) {
    var size = num.length;
    if (num.length === 0)
      size++;

    var out = new Buffer(size);
    num.copy(out);
    if (num.length === 0)
      out[0] = 0
    return this._createEncoderBuffer(out);
  }

  if (num < 0x80)
    return this._createEncoderBuffer(num);

  if (num < 0x100)
    return this._createEncoderBuffer([0, num]);

  var size = 1;
  for (var i = num; i >= 0x100; i >>= 8)
    size++;

  var out = new Array(size);
  for (var i = out.length - 1; i >= 0; i--) {
    out[i] = num & 0xff;
    num >>= 8;
  }
  if(out[0] & 0x80) {
    out.unshift(0);
  }

  return this._createEncoderBuffer(new Buffer(out));
};

DERNode.prototype._encodeBool = function encodeBool(value) {
  return this._createEncoderBuffer(value ? 0xff : 0);
};

DERNode.prototype._use = function use(entity, obj) {
  if (typeof entity === 'function')
    entity = entity(obj);
  return entity._getEncoder('der').tree;
};

DERNode.prototype._skipDefault = function skipDefault(dataBuffer, reporter, parent) {
  var state = this._baseState;
  var i;
  if (state['default'] === null)
    return false;

  var data = dataBuffer.join();
  if (state.defaultBuffer === undefined)
    state.defaultBuffer = this._encodeValue(state['default'], reporter, parent).join();

  if (data.length !== state.defaultBuffer.length)
    return false;

  for (i=0; i < data.length; i++)
    if (data[i] !== state.defaultBuffer[i])
      return false;

  return true;
};

// Utility methods

function encodeTag(tag, primitive, cls, reporter) {
  var res;

  if (tag === 'seqof')
    tag = 'seq';
  else if (tag === 'setof')
    tag = 'set';

  if (der.tagByName.hasOwnProperty(tag))
    res = der.tagByName[tag];
  else if (typeof tag === 'number' && (tag | 0) === tag)
    res = tag;
  else
    return reporter.error('Unknown tag: ' + tag);

  if (res >= 0x1f)
    return reporter.error('Multi-octet tag encoding unsupported');

  if (!primitive)
    res |= 0x20;

  res |= (der.tagClassByName[cls || 'universal'] << 6);

  return res;
}

},{"../../asn1":"/Users/jrmerz/dev/cstars/AHB/farm-budgets-app/node_modules/parse-asn1/node_modules/asn1.js/lib/asn1.js","buffer":"/Users/jrmerz/dev/cstars/AHB/farm-budgets-app/node_modules/buffer/index.js","inherits":"/Users/jrmerz/dev/cstars/AHB/farm-budgets-app/node_modules/inherits/inherits_browser.js"}],"/Users/jrmerz/dev/cstars/AHB/farm-budgets-app/node_modules/parse-asn1/node_modules/asn1.js/lib/asn1/encoders/index.js":[function(require,module,exports){
var encoders = exports;

encoders.der = require('./der');
encoders.pem = require('./pem');

},{"./der":"/Users/jrmerz/dev/cstars/AHB/farm-budgets-app/node_modules/parse-asn1/node_modules/asn1.js/lib/asn1/encoders/der.js","./pem":"/Users/jrmerz/dev/cstars/AHB/farm-budgets-app/node_modules/parse-asn1/node_modules/asn1.js/lib/asn1/encoders/pem.js"}],"/Users/jrmerz/dev/cstars/AHB/farm-budgets-app/node_modules/parse-asn1/node_modules/asn1.js/lib/asn1/encoders/pem.js":[function(require,module,exports){
var inherits = require('inherits');
var Buffer = require('buffer').Buffer;

var asn1 = require('../../asn1');
var DEREncoder = require('./der');

function PEMEncoder(entity) {
  DEREncoder.call(this, entity);
  this.enc = 'pem';
};
inherits(PEMEncoder, DEREncoder);
module.exports = PEMEncoder;

PEMEncoder.prototype.encode = function encode(data, options) {
  var buf = DEREncoder.prototype.encode.call(this, data);

  var p = buf.toString('base64');
  var out = [ '-----BEGIN ' + options.label + '-----' ];
  for (var i = 0; i < p.length; i += 64)
    out.push(p.slice(i, i + 64));
  out.push('-----END ' + options.label + '-----');
  return out.join('\n');
};

},{"../../asn1":"/Users/jrmerz/dev/cstars/AHB/farm-budgets-app/node_modules/parse-asn1/node_modules/asn1.js/lib/asn1.js","./der":"/Users/jrmerz/dev/cstars/AHB/farm-budgets-app/node_modules/parse-asn1/node_modules/asn1.js/lib/asn1/encoders/der.js","buffer":"/Users/jrmerz/dev/cstars/AHB/farm-budgets-app/node_modules/buffer/index.js","inherits":"/Users/jrmerz/dev/cstars/AHB/farm-budgets-app/node_modules/inherits/inherits_browser.js"}],"/Users/jrmerz/dev/cstars/AHB/farm-budgets-app/node_modules/parse-asn1/node_modules/bn.js/lib/bn.js":[function(require,module,exports){
arguments[4]["/Users/jrmerz/dev/cstars/AHB/farm-budgets-app/node_modules/browserify-rsa/node_modules/bn.js/lib/bn.js"][0].apply(exports,arguments)
},{}],"/Users/jrmerz/dev/cstars/AHB/farm-budgets-app/node_modules/pbkdf2/browser.js":[function(require,module,exports){
(function (Buffer){
var createHmac = require('create-hmac')
var MAX_ALLOC = Math.pow(2, 30) - 1 // default in iojs

exports.pbkdf2 = pbkdf2
function pbkdf2 (password, salt, iterations, keylen, digest, callback) {
  if (typeof digest === 'function') {
    callback = digest
    digest = undefined
  }

  if (typeof callback !== 'function') {
    throw new Error('No callback provided to pbkdf2')
  }

  var result = pbkdf2Sync(password, salt, iterations, keylen, digest)
  setTimeout(function () {
    callback(undefined, result)
  })
}

exports.pbkdf2Sync = pbkdf2Sync
function pbkdf2Sync (password, salt, iterations, keylen, digest) {
  if (typeof iterations !== 'number') {
    throw new TypeError('Iterations not a number')
  }

  if (iterations < 0) {
    throw new TypeError('Bad iterations')
  }

  if (typeof keylen !== 'number') {
    throw new TypeError('Key length not a number')
  }

  if (keylen < 0 || keylen > MAX_ALLOC) {
    throw new TypeError('Bad key length')
  }

  digest = digest || 'sha1'

  if (!Buffer.isBuffer(password)) password = new Buffer(password, 'binary')
  if (!Buffer.isBuffer(salt)) salt = new Buffer(salt, 'binary')

  var hLen
  var l = 1
  var DK = new Buffer(keylen)
  var block1 = new Buffer(salt.length + 4)
  salt.copy(block1, 0, 0, salt.length)

  var r
  var T

  for (var i = 1; i <= l; i++) {
    block1.writeUInt32BE(i, salt.length)
    var U = createHmac(digest, password).update(block1).digest()

    if (!hLen) {
      hLen = U.length
      T = new Buffer(hLen)
      l = Math.ceil(keylen / hLen)
      r = keylen - (l - 1) * hLen
    }

    U.copy(T, 0, 0, hLen)

    for (var j = 1; j < iterations; j++) {
      U = createHmac(digest, password).update(U).digest()

      for (var k = 0; k < hLen; k++) {
        T[k] ^= U[k]
      }
    }

    var destPos = (i - 1) * hLen
    var len = (i === l ? r : hLen)
    T.copy(DK, destPos, 0, len)
  }

  return DK
}

}).call(this,require("buffer").Buffer)

},{"buffer":"/Users/jrmerz/dev/cstars/AHB/farm-budgets-app/node_modules/buffer/index.js","create-hmac":"/Users/jrmerz/dev/cstars/AHB/farm-budgets-app/node_modules/create-hmac/browser.js"}],"/Users/jrmerz/dev/cstars/AHB/farm-budgets-app/node_modules/process/browser.js":[function(require,module,exports){
// shim for using process in browser

var process = module.exports = {};
var queue = [];
var draining = false;
var currentQueue;
var queueIndex = -1;

function cleanUpNextTick() {
    draining = false;
    if (currentQueue.length) {
        queue = currentQueue.concat(queue);
    } else {
        queueIndex = -1;
    }
    if (queue.length) {
        drainQueue();
    }
}

function drainQueue() {
    if (draining) {
        return;
    }
    var timeout = setTimeout(cleanUpNextTick);
    draining = true;

    var len = queue.length;
    while(len) {
        currentQueue = queue;
        queue = [];
        while (++queueIndex < len) {
            if (currentQueue) {
                currentQueue[queueIndex].run();
            }
        }
        queueIndex = -1;
        len = queue.length;
    }
    currentQueue = null;
    draining = false;
    clearTimeout(timeout);
}

process.nextTick = function (fun) {
    var args = new Array(arguments.length - 1);
    if (arguments.length > 1) {
        for (var i = 1; i < arguments.length; i++) {
            args[i - 1] = arguments[i];
        }
    }
    queue.push(new Item(fun, args));
    if (queue.length === 1 && !draining) {
        setTimeout(drainQueue, 0);
    }
};

// v8 likes predictible objects
function Item(fun, array) {
    this.fun = fun;
    this.array = array;
}
Item.prototype.run = function () {
    this.fun.apply(null, this.array);
};
process.title = 'browser';
process.browser = true;
process.env = {};
process.argv = [];
process.version = ''; // empty string to avoid regexp issues
process.versions = {};

function noop() {}

process.on = noop;
process.addListener = noop;
process.once = noop;
process.off = noop;
process.removeListener = noop;
process.removeAllListeners = noop;
process.emit = noop;

process.binding = function (name) {
    throw new Error('process.binding is not supported');
};

process.cwd = function () { return '/' };
process.chdir = function (dir) {
    throw new Error('process.chdir is not supported');
};
process.umask = function() { return 0; };

},{}],"/Users/jrmerz/dev/cstars/AHB/farm-budgets-app/node_modules/public-encrypt/browser.js":[function(require,module,exports){
exports.publicEncrypt = require('./publicEncrypt');
exports.privateDecrypt = require('./privateDecrypt');

exports.privateEncrypt = function privateEncrypt(key, buf) {
  return exports.publicEncrypt(key, buf, true);
};

exports.publicDecrypt = function publicDecrypt(key, buf) {
  return exports.privateDecrypt(key, buf, true);
};
},{"./privateDecrypt":"/Users/jrmerz/dev/cstars/AHB/farm-budgets-app/node_modules/public-encrypt/privateDecrypt.js","./publicEncrypt":"/Users/jrmerz/dev/cstars/AHB/farm-budgets-app/node_modules/public-encrypt/publicEncrypt.js"}],"/Users/jrmerz/dev/cstars/AHB/farm-budgets-app/node_modules/public-encrypt/mgf.js":[function(require,module,exports){
(function (Buffer){
var createHash = require('create-hash');
module.exports = function (seed, len) {
  var t = new Buffer('');
  var  i = 0, c;
  while (t.length < len) {
    c = i2ops(i++);
    t = Buffer.concat([t, createHash('sha1').update(seed).update(c).digest()]);
  }
  return t.slice(0, len);
};

function i2ops(c) {
  var out = new Buffer(4);
  out.writeUInt32BE(c,0);
  return out;
}
}).call(this,require("buffer").Buffer)

},{"buffer":"/Users/jrmerz/dev/cstars/AHB/farm-budgets-app/node_modules/buffer/index.js","create-hash":"/Users/jrmerz/dev/cstars/AHB/farm-budgets-app/node_modules/create-hash/browser.js"}],"/Users/jrmerz/dev/cstars/AHB/farm-budgets-app/node_modules/public-encrypt/node_modules/bn.js/lib/bn.js":[function(require,module,exports){
arguments[4]["/Users/jrmerz/dev/cstars/AHB/farm-budgets-app/node_modules/browserify-rsa/node_modules/bn.js/lib/bn.js"][0].apply(exports,arguments)
},{}],"/Users/jrmerz/dev/cstars/AHB/farm-budgets-app/node_modules/public-encrypt/privateDecrypt.js":[function(require,module,exports){
(function (Buffer){
var parseKeys = require('parse-asn1');
var mgf = require('./mgf');
var xor = require('./xor');
var bn = require('bn.js');
var crt = require('browserify-rsa');
var createHash = require('create-hash');
var withPublic = require('./withPublic');
module.exports = function privateDecrypt(private_key, enc, reverse) {
  var padding;
  if (private_key.padding) {
    padding = private_key.padding;
  } else if (reverse) {
    padding = 1;
  } else {
    padding = 4;
  }
  
  var key = parseKeys(private_key);
  var k = key.modulus.byteLength();
  if (enc.length > k || new bn(enc).cmp(key.modulus) >= 0) {
    throw new Error('decryption error');
  }
  var msg;
  if (reverse) {
    msg = withPublic(new bn(enc), key);
  } else {
    msg = crt(enc, key);
  }
  var zBuffer = new Buffer(k - msg.length);
  zBuffer.fill(0);
  msg = Buffer.concat([zBuffer, msg], k);
  if (padding === 4) {
    return oaep(key, msg);
  } else if (padding === 1) {
    return pkcs1(key, msg, reverse);
  } else if (padding === 3) {
    return msg;
  } else {
    throw new Error('unknown padding');
  }
};

function oaep(key, msg){
  var n = key.modulus;
  var k = key.modulus.byteLength();
  var mLen = msg.length;
  var iHash = createHash('sha1').update(new Buffer('')).digest();
  var hLen = iHash.length;
  var hLen2 = 2 * hLen;
  if (msg[0] !== 0) {
    throw new Error('decryption error');
  }
  var maskedSeed = msg.slice(1, hLen + 1);
  var maskedDb =  msg.slice(hLen + 1);
  var seed = xor(maskedSeed, mgf(maskedDb, hLen));
  var db = xor(maskedDb, mgf(seed, k - hLen - 1));
  if (compare(iHash, db.slice(0, hLen))) {
    throw new Error('decryption error');
  }
  var i = hLen;
  while (db[i] === 0) {
    i++;
  }
  if (db[i++] !== 1) {
    throw new Error('decryption error');
  }
  return db.slice(i);
}

function pkcs1(key, msg, reverse){
  var p1 = msg.slice(0, 2);
  var i = 2;
  var status = 0;
  while (msg[i++] !== 0) {
    if (i >= msg.length) {
      status++;
      break;
    }
  }
  var ps = msg.slice(2, i - 1);
  var p2 = msg.slice(i - 1, i);

  if ((p1.toString('hex') !== '0002' && !reverse) || (p1.toString('hex') !== '0001' && reverse)){
    status++;
  }
  if (ps.length < 8) {
    status++;
  }
  if (status) {
    throw new Error('decryption error');
  }
  return  msg.slice(i);
}
function compare(a, b){
  a = new Buffer(a);
  b = new Buffer(b);
  var dif = 0;
  var len = a.length;
  if (a.length !== b.length) {
    dif++;
    len = Math.min(a.length, b.length);
  }
  var i = -1;
  while (++i < len) {
    dif += (a[i] ^ b[i]);
  }
  return dif;
}
}).call(this,require("buffer").Buffer)

},{"./mgf":"/Users/jrmerz/dev/cstars/AHB/farm-budgets-app/node_modules/public-encrypt/mgf.js","./withPublic":"/Users/jrmerz/dev/cstars/AHB/farm-budgets-app/node_modules/public-encrypt/withPublic.js","./xor":"/Users/jrmerz/dev/cstars/AHB/farm-budgets-app/node_modules/public-encrypt/xor.js","bn.js":"/Users/jrmerz/dev/cstars/AHB/farm-budgets-app/node_modules/public-encrypt/node_modules/bn.js/lib/bn.js","browserify-rsa":"/Users/jrmerz/dev/cstars/AHB/farm-budgets-app/node_modules/browserify-rsa/index.js","buffer":"/Users/jrmerz/dev/cstars/AHB/farm-budgets-app/node_modules/buffer/index.js","create-hash":"/Users/jrmerz/dev/cstars/AHB/farm-budgets-app/node_modules/create-hash/browser.js","parse-asn1":"/Users/jrmerz/dev/cstars/AHB/farm-budgets-app/node_modules/parse-asn1/index.js"}],"/Users/jrmerz/dev/cstars/AHB/farm-budgets-app/node_modules/public-encrypt/publicEncrypt.js":[function(require,module,exports){
(function (Buffer){
var parseKeys = require('parse-asn1');
var randomBytes = require('randombytes');
var createHash = require('create-hash');
var mgf = require('./mgf');
var xor = require('./xor');
var bn = require('bn.js');
var withPublic = require('./withPublic');
var crt = require('browserify-rsa');

var constants = {
  RSA_PKCS1_OAEP_PADDING: 4,
  RSA_PKCS1_PADDIN: 1,
  RSA_NO_PADDING: 3
};

module.exports = function publicEncrypt(public_key, msg, reverse) {
  var padding;
  if (public_key.padding) {
    padding = public_key.padding;
  } else if (reverse) {
    padding = 1;
  } else {
    padding = 4;
  }
  var key = parseKeys(public_key);
  var paddedMsg;
  if (padding === 4) {
    paddedMsg = oaep(key, msg);
  } else if (padding === 1) {
    paddedMsg = pkcs1(key, msg, reverse);
  } else if (padding === 3) {
    paddedMsg = new bn(msg);
    if (paddedMsg.cmp(key.modulus) >= 0) {
      throw new Error('data too long for modulus');
    }
  } else {
    throw new Error('unknown padding');
  }
  if (reverse) {
    return crt(paddedMsg, key);
  } else {
    return withPublic(paddedMsg, key);
  }
};

function oaep(key, msg){
  var k = key.modulus.byteLength();
  var mLen = msg.length;
  var iHash = createHash('sha1').update(new Buffer('')).digest();
  var hLen = iHash.length;
  var hLen2 = 2 * hLen;
  if (mLen > k - hLen2 - 2) {
    throw new Error('message too long');
  }
  var ps = new Buffer(k - mLen - hLen2 - 2);
  ps.fill(0);
  var dblen = k - hLen - 1;
  var seed = randomBytes(hLen);
  var maskedDb = xor(Buffer.concat([iHash, ps, new Buffer([1]), msg], dblen), mgf(seed, dblen));
  var maskedSeed = xor(seed, mgf(maskedDb, hLen));
  return new bn(Buffer.concat([new Buffer([0]), maskedSeed, maskedDb], k));
}
function pkcs1(key, msg, reverse){
  var mLen = msg.length;
  var k = key.modulus.byteLength();
  if (mLen > k - 11) {
    throw new Error('message too long');
  }
  var ps;
  if (reverse) {
    ps = new Buffer(k - mLen - 3);
    ps.fill(0xff);
  } else {
    ps = nonZero(k - mLen - 3);
  }
  return new bn(Buffer.concat([new Buffer([0, reverse?1:2]), ps, new Buffer([0]), msg], k));
}
function nonZero(len, crypto) {
  var out = new Buffer(len);
  var i = 0;
  var cache = randomBytes(len*2);
  var cur = 0;
  var num;
  while (i < len) {
    if (cur === cache.length) {
      cache = randomBytes(len*2);
      cur = 0;
    }
    num = cache[cur++];
    if (num) {
      out[i++] = num;
    }
  }
  return out;
}
}).call(this,require("buffer").Buffer)

},{"./mgf":"/Users/jrmerz/dev/cstars/AHB/farm-budgets-app/node_modules/public-encrypt/mgf.js","./withPublic":"/Users/jrmerz/dev/cstars/AHB/farm-budgets-app/node_modules/public-encrypt/withPublic.js","./xor":"/Users/jrmerz/dev/cstars/AHB/farm-budgets-app/node_modules/public-encrypt/xor.js","bn.js":"/Users/jrmerz/dev/cstars/AHB/farm-budgets-app/node_modules/public-encrypt/node_modules/bn.js/lib/bn.js","browserify-rsa":"/Users/jrmerz/dev/cstars/AHB/farm-budgets-app/node_modules/browserify-rsa/index.js","buffer":"/Users/jrmerz/dev/cstars/AHB/farm-budgets-app/node_modules/buffer/index.js","create-hash":"/Users/jrmerz/dev/cstars/AHB/farm-budgets-app/node_modules/create-hash/browser.js","parse-asn1":"/Users/jrmerz/dev/cstars/AHB/farm-budgets-app/node_modules/parse-asn1/index.js","randombytes":"/Users/jrmerz/dev/cstars/AHB/farm-budgets-app/node_modules/randombytes/browser.js"}],"/Users/jrmerz/dev/cstars/AHB/farm-budgets-app/node_modules/public-encrypt/withPublic.js":[function(require,module,exports){
(function (Buffer){
var bn = require('bn.js');
function withPublic(paddedMsg, key) {
  return new Buffer(paddedMsg
    .toRed(bn.mont(key.modulus))
    .redPow(new bn(key.publicExponent))
    .fromRed()
    .toArray());
}

module.exports = withPublic;
}).call(this,require("buffer").Buffer)

},{"bn.js":"/Users/jrmerz/dev/cstars/AHB/farm-budgets-app/node_modules/public-encrypt/node_modules/bn.js/lib/bn.js","buffer":"/Users/jrmerz/dev/cstars/AHB/farm-budgets-app/node_modules/buffer/index.js"}],"/Users/jrmerz/dev/cstars/AHB/farm-budgets-app/node_modules/public-encrypt/xor.js":[function(require,module,exports){
module.exports = function xor(a, b) {
  var len = a.length;
  var i = -1;
  while (++i < len) {
    a[i] ^= b[i];
  }
  return a
};
},{}],"/Users/jrmerz/dev/cstars/AHB/farm-budgets-app/node_modules/randombytes/browser.js":[function(require,module,exports){
(function (process,global,Buffer){
'use strict'

function oldBrowser () {
  throw new Error('secure random number generation not supported by this browser\nuse chrome, FireFox or Internet Explorer 11')
}

var crypto = global.crypto || global.msCrypto

if (crypto && crypto.getRandomValues) {
  module.exports = randomBytes
} else {
  module.exports = oldBrowser
}

function randomBytes (size, cb) {
  // phantomjs needs to throw
  if (size > 65536) throw new Error('requested too many random bytes')
  // in case browserify  isn't using the Uint8Array version
  var rawBytes = new global.Uint8Array(size)

  // This will not work in older browsers.
  // See https://developer.mozilla.org/en-US/docs/Web/API/window.crypto.getRandomValues
  crypto.getRandomValues(rawBytes)

  // phantomjs doesn't like a buffer being passed here
  var bytes = new Buffer(rawBytes.buffer)

  if (typeof cb === 'function') {
    return process.nextTick(function () {
      cb(null, bytes)
    })
  }

  return bytes
}

}).call(this,require('_process'),typeof global !== "undefined" ? global : typeof self !== "undefined" ? self : typeof window !== "undefined" ? window : {},require("buffer").Buffer)

},{"_process":"/Users/jrmerz/dev/cstars/AHB/farm-budgets-app/node_modules/process/browser.js","buffer":"/Users/jrmerz/dev/cstars/AHB/farm-budgets-app/node_modules/buffer/index.js"}],"/Users/jrmerz/dev/cstars/AHB/farm-budgets-app/node_modules/ripemd160/lib/ripemd160.js":[function(require,module,exports){
(function (Buffer){
/*
CryptoJS v3.1.2
code.google.com/p/crypto-js
(c) 2009-2013 by Jeff Mott. All rights reserved.
code.google.com/p/crypto-js/wiki/License
*/
/** @preserve
(c) 2012 by Cédric Mesnil. All rights reserved.

Redistribution and use in source and binary forms, with or without modification, are permitted provided that the following conditions are met:

    - Redistributions of source code must retain the above copyright notice, this list of conditions and the following disclaimer.
    - Redistributions in binary form must reproduce the above copyright notice, this list of conditions and the following disclaimer in the documentation and/or other materials provided with the distribution.

THIS SOFTWARE IS PROVIDED BY THE COPYRIGHT HOLDERS AND CONTRIBUTORS "AS IS" AND ANY EXPRESS OR IMPLIED WARRANTIES, INCLUDING, BUT NOT LIMITED TO, THE IMPLIED WARRANTIES OF MERCHANTABILITY AND FITNESS FOR A PARTICULAR PURPOSE ARE DISCLAIMED. IN NO EVENT SHALL THE COPYRIGHT HOLDER OR CONTRIBUTORS BE LIABLE FOR ANY DIRECT, INDIRECT, INCIDENTAL, SPECIAL, EXEMPLARY, OR CONSEQUENTIAL DAMAGES (INCLUDING, BUT NOT LIMITED TO, PROCUREMENT OF SUBSTITUTE GOODS OR SERVICES; LOSS OF USE, DATA, OR PROFITS; OR BUSINESS INTERRUPTION) HOWEVER CAUSED AND ON ANY THEORY OF LIABILITY, WHETHER IN CONTRACT, STRICT LIABILITY, OR TORT (INCLUDING NEGLIGENCE OR OTHERWISE) ARISING IN ANY WAY OUT OF THE USE OF THIS SOFTWARE, EVEN IF ADVISED OF THE POSSIBILITY OF SUCH DAMAGE.
*/

// constants table
var zl = [
  0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15,
  7, 4, 13, 1, 10, 6, 15, 3, 12, 0, 9, 5, 2, 14, 11, 8,
  3, 10, 14, 4, 9, 15, 8, 1, 2, 7, 0, 6, 13, 11, 5, 12,
  1, 9, 11, 10, 0, 8, 12, 4, 13, 3, 7, 15, 14, 5, 6, 2,
  4, 0, 5, 9, 7, 12, 2, 10, 14, 1, 3, 8, 11, 6, 15, 13
]

var zr = [
  5, 14, 7, 0, 9, 2, 11, 4, 13, 6, 15, 8, 1, 10, 3, 12,
  6, 11, 3, 7, 0, 13, 5, 10, 14, 15, 8, 12, 4, 9, 1, 2,
  15, 5, 1, 3, 7, 14, 6, 9, 11, 8, 12, 2, 10, 0, 4, 13,
  8, 6, 4, 1, 3, 11, 15, 0, 5, 12, 2, 13, 9, 7, 10, 14,
  12, 15, 10, 4, 1, 5, 8, 7, 6, 2, 13, 14, 0, 3, 9, 11
]

var sl = [
  11, 14, 15, 12, 5, 8, 7, 9, 11, 13, 14, 15, 6, 7, 9, 8,
  7, 6, 8, 13, 11, 9, 7, 15, 7, 12, 15, 9, 11, 7, 13, 12,
  11, 13, 6, 7, 14, 9, 13, 15, 14, 8, 13, 6, 5, 12, 7, 5,
  11, 12, 14, 15, 14, 15, 9, 8, 9, 14, 5, 6, 8, 6, 5, 12,
  9, 15, 5, 11, 6, 8, 13, 12, 5, 12, 13, 14, 11, 8, 5, 6
]

var sr = [
  8, 9, 9, 11, 13, 15, 15, 5, 7, 7, 8, 11, 14, 14, 12, 6,
  9, 13, 15, 7, 12, 8, 9, 11, 7, 7, 12, 7, 6, 15, 13, 11,
  9, 7, 15, 11, 8, 6, 6, 14, 12, 13, 5, 14, 13, 13, 7, 5,
  15, 5, 8, 11, 14, 14, 6, 14, 6, 9, 12, 9, 12, 5, 15, 8,
  8, 5, 12, 9, 12, 5, 14, 6, 8, 13, 6, 5, 15, 13, 11, 11
]

var hl = [0x00000000, 0x5A827999, 0x6ED9EBA1, 0x8F1BBCDC, 0xA953FD4E]
var hr = [0x50A28BE6, 0x5C4DD124, 0x6D703EF3, 0x7A6D76E9, 0x00000000]

function bytesToWords (bytes) {
  var words = []
  for (var i = 0, b = 0; i < bytes.length; i++, b += 8) {
    words[b >>> 5] |= bytes[i] << (24 - b % 32)
  }
  return words
}

function wordsToBytes (words) {
  var bytes = []
  for (var b = 0; b < words.length * 32; b += 8) {
    bytes.push((words[b >>> 5] >>> (24 - b % 32)) & 0xFF)
  }
  return bytes
}

function processBlock (H, M, offset) {
  // swap endian
  for (var i = 0; i < 16; i++) {
    var offset_i = offset + i
    var M_offset_i = M[offset_i]

    // Swap
    M[offset_i] = (
      (((M_offset_i << 8) | (M_offset_i >>> 24)) & 0x00ff00ff) |
      (((M_offset_i << 24) | (M_offset_i >>> 8)) & 0xff00ff00)
    )
  }

  // Working variables
  var al, bl, cl, dl, el
  var ar, br, cr, dr, er

  ar = al = H[0]
  br = bl = H[1]
  cr = cl = H[2]
  dr = dl = H[3]
  er = el = H[4]

  // computation
  var t
  for (i = 0; i < 80; i += 1) {
    t = (al + M[offset + zl[i]]) | 0
    if (i < 16) {
      t += f1(bl, cl, dl) + hl[0]
    } else if (i < 32) {
      t += f2(bl, cl, dl) + hl[1]
    } else if (i < 48) {
      t += f3(bl, cl, dl) + hl[2]
    } else if (i < 64) {
      t += f4(bl, cl, dl) + hl[3]
    } else {// if (i<80) {
      t += f5(bl, cl, dl) + hl[4]
    }
    t = t | 0
    t = rotl(t, sl[i])
    t = (t + el) | 0
    al = el
    el = dl
    dl = rotl(cl, 10)
    cl = bl
    bl = t

    t = (ar + M[offset + zr[i]]) | 0
    if (i < 16) {
      t += f5(br, cr, dr) + hr[0]
    } else if (i < 32) {
      t += f4(br, cr, dr) + hr[1]
    } else if (i < 48) {
      t += f3(br, cr, dr) + hr[2]
    } else if (i < 64) {
      t += f2(br, cr, dr) + hr[3]
    } else {// if (i<80) {
      t += f1(br, cr, dr) + hr[4]
    }

    t = t | 0
    t = rotl(t, sr[i])
    t = (t + er) | 0
    ar = er
    er = dr
    dr = rotl(cr, 10)
    cr = br
    br = t
  }

  // intermediate hash value
  t = (H[1] + cl + dr) | 0
  H[1] = (H[2] + dl + er) | 0
  H[2] = (H[3] + el + ar) | 0
  H[3] = (H[4] + al + br) | 0
  H[4] = (H[0] + bl + cr) | 0
  H[0] = t
}

function f1 (x, y, z) {
  return ((x) ^ (y) ^ (z))
}

function f2 (x, y, z) {
  return (((x) & (y)) | ((~x) & (z)))
}

function f3 (x, y, z) {
  return (((x) | (~(y))) ^ (z))
}

function f4 (x, y, z) {
  return (((x) & (z)) | ((y) & (~(z))))
}

function f5 (x, y, z) {
  return ((x) ^ ((y) | (~(z))))
}

function rotl (x, n) {
  return (x << n) | (x >>> (32 - n))
}

function ripemd160 (message) {
  var H = [0x67452301, 0xEFCDAB89, 0x98BADCFE, 0x10325476, 0xC3D2E1F0]

  if (typeof message === 'string') {
    message = new Buffer(message, 'utf8')
  }

  var m = bytesToWords(message)

  var nBitsLeft = message.length * 8
  var nBitsTotal = message.length * 8

  // Add padding
  m[nBitsLeft >>> 5] |= 0x80 << (24 - nBitsLeft % 32)
  m[(((nBitsLeft + 64) >>> 9) << 4) + 14] = (
    (((nBitsTotal << 8) | (nBitsTotal >>> 24)) & 0x00ff00ff) |
    (((nBitsTotal << 24) | (nBitsTotal >>> 8)) & 0xff00ff00)
  )

  for (var i = 0; i < m.length; i += 16) {
    processBlock(H, m, i)
  }

  // swap endian
  for (i = 0; i < 5; i++) {
    // shortcut
    var H_i = H[i]

    // Swap
    H[i] = (((H_i << 8) | (H_i >>> 24)) & 0x00ff00ff) |
      (((H_i << 24) | (H_i >>> 8)) & 0xff00ff00)
  }

  var digestbytes = wordsToBytes(H)
  return new Buffer(digestbytes)
}

module.exports = ripemd160

}).call(this,require("buffer").Buffer)

},{"buffer":"/Users/jrmerz/dev/cstars/AHB/farm-budgets-app/node_modules/buffer/index.js"}],"/Users/jrmerz/dev/cstars/AHB/farm-budgets-app/node_modules/sha.js/hash.js":[function(require,module,exports){
(function (Buffer){
// prototype class for hash functions
function Hash (blockSize, finalSize) {
  this._block = new Buffer(blockSize)
  this._finalSize = finalSize
  this._blockSize = blockSize
  this._len = 0
  this._s = 0
}

Hash.prototype.update = function (data, enc) {
  if (typeof data === 'string') {
    enc = enc || 'utf8'
    data = new Buffer(data, enc)
  }

  var l = this._len += data.length
  var s = this._s || 0
  var f = 0
  var buffer = this._block

  while (s < l) {
    var t = Math.min(data.length, f + this._blockSize - (s % this._blockSize))
    var ch = (t - f)

    for (var i = 0; i < ch; i++) {
      buffer[(s % this._blockSize) + i] = data[i + f]
    }

    s += ch
    f += ch

    if ((s % this._blockSize) === 0) {
      this._update(buffer)
    }
  }
  this._s = s

  return this
}

Hash.prototype.digest = function (enc) {
  // Suppose the length of the message M, in bits, is l
  var l = this._len * 8

  // Append the bit 1 to the end of the message
  this._block[this._len % this._blockSize] = 0x80

  // and then k zero bits, where k is the smallest non-negative solution to the equation (l + 1 + k) === finalSize mod blockSize
  this._block.fill(0, this._len % this._blockSize + 1)

  if (l % (this._blockSize * 8) >= this._finalSize * 8) {
    this._update(this._block)
    this._block.fill(0)
  }

  // to this append the block which is equal to the number l written in binary
  // TODO: handle case where l is > Math.pow(2, 29)
  this._block.writeInt32BE(l, this._blockSize - 4)

  var hash = this._update(this._block) || this._hash()

  return enc ? hash.toString(enc) : hash
}

Hash.prototype._update = function () {
  throw new Error('_update must be implemented by subclass')
}

module.exports = Hash

}).call(this,require("buffer").Buffer)

},{"buffer":"/Users/jrmerz/dev/cstars/AHB/farm-budgets-app/node_modules/buffer/index.js"}],"/Users/jrmerz/dev/cstars/AHB/farm-budgets-app/node_modules/sha.js/index.js":[function(require,module,exports){
var exports = module.exports = function SHA (algorithm) {
  algorithm = algorithm.toLowerCase()

  var Algorithm = exports[algorithm]
  if (!Algorithm) throw new Error(algorithm + ' is not supported (we accept pull requests)')

  return new Algorithm()
}

exports.sha = require('./sha')
exports.sha1 = require('./sha1')
exports.sha224 = require('./sha224')
exports.sha256 = require('./sha256')
exports.sha384 = require('./sha384')
exports.sha512 = require('./sha512')

},{"./sha":"/Users/jrmerz/dev/cstars/AHB/farm-budgets-app/node_modules/sha.js/sha.js","./sha1":"/Users/jrmerz/dev/cstars/AHB/farm-budgets-app/node_modules/sha.js/sha1.js","./sha224":"/Users/jrmerz/dev/cstars/AHB/farm-budgets-app/node_modules/sha.js/sha224.js","./sha256":"/Users/jrmerz/dev/cstars/AHB/farm-budgets-app/node_modules/sha.js/sha256.js","./sha384":"/Users/jrmerz/dev/cstars/AHB/farm-budgets-app/node_modules/sha.js/sha384.js","./sha512":"/Users/jrmerz/dev/cstars/AHB/farm-budgets-app/node_modules/sha.js/sha512.js"}],"/Users/jrmerz/dev/cstars/AHB/farm-budgets-app/node_modules/sha.js/sha.js":[function(require,module,exports){
(function (Buffer){
/*
 * A JavaScript implementation of the Secure Hash Algorithm, SHA-0, as defined
 * in FIPS PUB 180-1
 * This source code is derived from sha1.js of the same repository.
 * The difference between SHA-0 and SHA-1 is just a bitwise rotate left
 * operation was added.
 */

var inherits = require('inherits')
var Hash = require('./hash')

var W = new Array(80)

function Sha () {
  this.init()
  this._w = W

  Hash.call(this, 64, 56)
}

inherits(Sha, Hash)

Sha.prototype.init = function () {
  this._a = 0x67452301 | 0
  this._b = 0xefcdab89 | 0
  this._c = 0x98badcfe | 0
  this._d = 0x10325476 | 0
  this._e = 0xc3d2e1f0 | 0

  return this
}

/*
 * Bitwise rotate a 32-bit number to the left.
 */
function rol (num, cnt) {
  return (num << cnt) | (num >>> (32 - cnt))
}

Sha.prototype._update = function (M) {
  var W = this._w

  var a = this._a
  var b = this._b
  var c = this._c
  var d = this._d
  var e = this._e

  var j = 0
  var k

  /*
   * SHA-1 has a bitwise rotate left operation. But, SHA is not
   * function calcW() { return rol(W[j - 3] ^ W[j -  8] ^ W[j - 14] ^ W[j - 16], 1) }
   */
  function calcW () { return W[j - 3] ^ W[j - 8] ^ W[j - 14] ^ W[j - 16] }
  function loop (w, f) {
    W[j] = w

    var t = rol(a, 5) + f + e + w + k

    e = d
    d = c
    c = rol(b, 30)
    b = a
    a = t
    j++
  }

  k = 1518500249
  while (j < 16) loop(M.readInt32BE(j * 4), (b & c) | ((~b) & d))
  while (j < 20) loop(calcW(), (b & c) | ((~b) & d))
  k = 1859775393
  while (j < 40) loop(calcW(), b ^ c ^ d)
  k = -1894007588
  while (j < 60) loop(calcW(), (b & c) | (b & d) | (c & d))
  k = -899497514
  while (j < 80) loop(calcW(), b ^ c ^ d)

  this._a = (a + this._a) | 0
  this._b = (b + this._b) | 0
  this._c = (c + this._c) | 0
  this._d = (d + this._d) | 0
  this._e = (e + this._e) | 0
}

Sha.prototype._hash = function () {
  var H = new Buffer(20)

  H.writeInt32BE(this._a | 0, 0)
  H.writeInt32BE(this._b | 0, 4)
  H.writeInt32BE(this._c | 0, 8)
  H.writeInt32BE(this._d | 0, 12)
  H.writeInt32BE(this._e | 0, 16)

  return H
}

module.exports = Sha


}).call(this,require("buffer").Buffer)

},{"./hash":"/Users/jrmerz/dev/cstars/AHB/farm-budgets-app/node_modules/sha.js/hash.js","buffer":"/Users/jrmerz/dev/cstars/AHB/farm-budgets-app/node_modules/buffer/index.js","inherits":"/Users/jrmerz/dev/cstars/AHB/farm-budgets-app/node_modules/inherits/inherits_browser.js"}],"/Users/jrmerz/dev/cstars/AHB/farm-budgets-app/node_modules/sha.js/sha1.js":[function(require,module,exports){
(function (Buffer){
/*
 * A JavaScript implementation of the Secure Hash Algorithm, SHA-1, as defined
 * in FIPS PUB 180-1
 * Version 2.1a Copyright Paul Johnston 2000 - 2002.
 * Other contributors: Greg Holt, Andrew Kepert, Ydnar, Lostinet
 * Distributed under the BSD License
 * See http://pajhome.org.uk/crypt/md5 for details.
 */

var inherits = require('inherits')
var Hash = require('./hash')

var W = new Array(80)

function Sha1 () {
  this.init()
  this._w = W

  Hash.call(this, 64, 56)
}

inherits(Sha1, Hash)

Sha1.prototype.init = function () {
  this._a = 0x67452301 | 0
  this._b = 0xefcdab89 | 0
  this._c = 0x98badcfe | 0
  this._d = 0x10325476 | 0
  this._e = 0xc3d2e1f0 | 0

  return this
}

/*
 * Bitwise rotate a 32-bit number to the left.
 */
function rol (num, cnt) {
  return (num << cnt) | (num >>> (32 - cnt))
}

Sha1.prototype._update = function (M) {
  var W = this._w

  var a = this._a
  var b = this._b
  var c = this._c
  var d = this._d
  var e = this._e

  var j = 0
  var k

  function calcW () { return rol(W[j - 3] ^ W[j - 8] ^ W[j - 14] ^ W[j - 16], 1) }
  function loop (w, f) {
    W[j] = w

    var t = rol(a, 5) + f + e + w + k

    e = d
    d = c
    c = rol(b, 30)
    b = a
    a = t
    j++
  }

  k = 1518500249
  while (j < 16) loop(M.readInt32BE(j * 4), (b & c) | ((~b) & d))
  while (j < 20) loop(calcW(), (b & c) | ((~b) & d))
  k = 1859775393
  while (j < 40) loop(calcW(), b ^ c ^ d)
  k = -1894007588
  while (j < 60) loop(calcW(), (b & c) | (b & d) | (c & d))
  k = -899497514
  while (j < 80) loop(calcW(), b ^ c ^ d)

  this._a = (a + this._a) | 0
  this._b = (b + this._b) | 0
  this._c = (c + this._c) | 0
  this._d = (d + this._d) | 0
  this._e = (e + this._e) | 0
}

Sha1.prototype._hash = function () {
  var H = new Buffer(20)

  H.writeInt32BE(this._a | 0, 0)
  H.writeInt32BE(this._b | 0, 4)
  H.writeInt32BE(this._c | 0, 8)
  H.writeInt32BE(this._d | 0, 12)
  H.writeInt32BE(this._e | 0, 16)

  return H
}

module.exports = Sha1

}).call(this,require("buffer").Buffer)

},{"./hash":"/Users/jrmerz/dev/cstars/AHB/farm-budgets-app/node_modules/sha.js/hash.js","buffer":"/Users/jrmerz/dev/cstars/AHB/farm-budgets-app/node_modules/buffer/index.js","inherits":"/Users/jrmerz/dev/cstars/AHB/farm-budgets-app/node_modules/inherits/inherits_browser.js"}],"/Users/jrmerz/dev/cstars/AHB/farm-budgets-app/node_modules/sha.js/sha224.js":[function(require,module,exports){
(function (Buffer){
/**
 * A JavaScript implementation of the Secure Hash Algorithm, SHA-256, as defined
 * in FIPS 180-2
 * Version 2.2-beta Copyright Angel Marin, Paul Johnston 2000 - 2009.
 * Other contributors: Greg Holt, Andrew Kepert, Ydnar, Lostinet
 *
 */

var inherits = require('inherits')
var Sha256 = require('./sha256')
var Hash = require('./hash')

var W = new Array(64)

function Sha224 () {
  this.init()

  this._w = W // new Array(64)

  Hash.call(this, 64, 56)
}

inherits(Sha224, Sha256)

Sha224.prototype.init = function () {
  this._a = 0xc1059ed8 | 0
  this._b = 0x367cd507 | 0
  this._c = 0x3070dd17 | 0
  this._d = 0xf70e5939 | 0
  this._e = 0xffc00b31 | 0
  this._f = 0x68581511 | 0
  this._g = 0x64f98fa7 | 0
  this._h = 0xbefa4fa4 | 0

  return this
}

Sha224.prototype._hash = function () {
  var H = new Buffer(28)

  H.writeInt32BE(this._a, 0)
  H.writeInt32BE(this._b, 4)
  H.writeInt32BE(this._c, 8)
  H.writeInt32BE(this._d, 12)
  H.writeInt32BE(this._e, 16)
  H.writeInt32BE(this._f, 20)
  H.writeInt32BE(this._g, 24)

  return H
}

module.exports = Sha224

}).call(this,require("buffer").Buffer)

},{"./hash":"/Users/jrmerz/dev/cstars/AHB/farm-budgets-app/node_modules/sha.js/hash.js","./sha256":"/Users/jrmerz/dev/cstars/AHB/farm-budgets-app/node_modules/sha.js/sha256.js","buffer":"/Users/jrmerz/dev/cstars/AHB/farm-budgets-app/node_modules/buffer/index.js","inherits":"/Users/jrmerz/dev/cstars/AHB/farm-budgets-app/node_modules/inherits/inherits_browser.js"}],"/Users/jrmerz/dev/cstars/AHB/farm-budgets-app/node_modules/sha.js/sha256.js":[function(require,module,exports){
(function (Buffer){
/**
 * A JavaScript implementation of the Secure Hash Algorithm, SHA-256, as defined
 * in FIPS 180-2
 * Version 2.2-beta Copyright Angel Marin, Paul Johnston 2000 - 2009.
 * Other contributors: Greg Holt, Andrew Kepert, Ydnar, Lostinet
 *
 */

var inherits = require('inherits')
var Hash = require('./hash')

var K = [
  0x428A2F98, 0x71374491, 0xB5C0FBCF, 0xE9B5DBA5,
  0x3956C25B, 0x59F111F1, 0x923F82A4, 0xAB1C5ED5,
  0xD807AA98, 0x12835B01, 0x243185BE, 0x550C7DC3,
  0x72BE5D74, 0x80DEB1FE, 0x9BDC06A7, 0xC19BF174,
  0xE49B69C1, 0xEFBE4786, 0x0FC19DC6, 0x240CA1CC,
  0x2DE92C6F, 0x4A7484AA, 0x5CB0A9DC, 0x76F988DA,
  0x983E5152, 0xA831C66D, 0xB00327C8, 0xBF597FC7,
  0xC6E00BF3, 0xD5A79147, 0x06CA6351, 0x14292967,
  0x27B70A85, 0x2E1B2138, 0x4D2C6DFC, 0x53380D13,
  0x650A7354, 0x766A0ABB, 0x81C2C92E, 0x92722C85,
  0xA2BFE8A1, 0xA81A664B, 0xC24B8B70, 0xC76C51A3,
  0xD192E819, 0xD6990624, 0xF40E3585, 0x106AA070,
  0x19A4C116, 0x1E376C08, 0x2748774C, 0x34B0BCB5,
  0x391C0CB3, 0x4ED8AA4A, 0x5B9CCA4F, 0x682E6FF3,
  0x748F82EE, 0x78A5636F, 0x84C87814, 0x8CC70208,
  0x90BEFFFA, 0xA4506CEB, 0xBEF9A3F7, 0xC67178F2
]

var W = new Array(64)

function Sha256 () {
  this.init()

  this._w = W // new Array(64)

  Hash.call(this, 64, 56)
}

inherits(Sha256, Hash)

Sha256.prototype.init = function () {
  this._a = 0x6a09e667 | 0
  this._b = 0xbb67ae85 | 0
  this._c = 0x3c6ef372 | 0
  this._d = 0xa54ff53a | 0
  this._e = 0x510e527f | 0
  this._f = 0x9b05688c | 0
  this._g = 0x1f83d9ab | 0
  this._h = 0x5be0cd19 | 0

  return this
}

function Ch (x, y, z) {
  return z ^ (x & (y ^ z))
}

function Maj (x, y, z) {
  return (x & y) | (z & (x | y))
}

function Sigma0 (x) {
  return (x >>> 2 | x << 30) ^ (x >>> 13 | x << 19) ^ (x >>> 22 | x << 10)
}

function Sigma1 (x) {
  return (x >>> 6 | x << 26) ^ (x >>> 11 | x << 21) ^ (x >>> 25 | x << 7)
}

function Gamma0 (x) {
  return (x >>> 7 | x << 25) ^ (x >>> 18 | x << 14) ^ (x >>> 3)
}

function Gamma1 (x) {
  return (x >>> 17 | x << 15) ^ (x >>> 19 | x << 13) ^ (x >>> 10)
}

Sha256.prototype._update = function (M) {
  var W = this._w

  var a = this._a | 0
  var b = this._b | 0
  var c = this._c | 0
  var d = this._d | 0
  var e = this._e | 0
  var f = this._f | 0
  var g = this._g | 0
  var h = this._h | 0

  var j = 0

  function calcW () { return Gamma1(W[j - 2]) + W[j - 7] + Gamma0(W[j - 15]) + W[j - 16] }
  function loop (w) {
    W[j] = w

    var T1 = h + Sigma1(e) + Ch(e, f, g) + K[j] + w
    var T2 = Sigma0(a) + Maj(a, b, c)

    h = g
    g = f
    f = e
    e = d + T1
    d = c
    c = b
    b = a
    a = T1 + T2

    j++
  }

  while (j < 16) loop(M.readInt32BE(j * 4))
  while (j < 64) loop(calcW())

  this._a = (a + this._a) | 0
  this._b = (b + this._b) | 0
  this._c = (c + this._c) | 0
  this._d = (d + this._d) | 0
  this._e = (e + this._e) | 0
  this._f = (f + this._f) | 0
  this._g = (g + this._g) | 0
  this._h = (h + this._h) | 0
}

Sha256.prototype._hash = function () {
  var H = new Buffer(32)

  H.writeInt32BE(this._a, 0)
  H.writeInt32BE(this._b, 4)
  H.writeInt32BE(this._c, 8)
  H.writeInt32BE(this._d, 12)
  H.writeInt32BE(this._e, 16)
  H.writeInt32BE(this._f, 20)
  H.writeInt32BE(this._g, 24)
  H.writeInt32BE(this._h, 28)

  return H
}

module.exports = Sha256

}).call(this,require("buffer").Buffer)

},{"./hash":"/Users/jrmerz/dev/cstars/AHB/farm-budgets-app/node_modules/sha.js/hash.js","buffer":"/Users/jrmerz/dev/cstars/AHB/farm-budgets-app/node_modules/buffer/index.js","inherits":"/Users/jrmerz/dev/cstars/AHB/farm-budgets-app/node_modules/inherits/inherits_browser.js"}],"/Users/jrmerz/dev/cstars/AHB/farm-budgets-app/node_modules/sha.js/sha384.js":[function(require,module,exports){
(function (Buffer){
var inherits = require('inherits')
var SHA512 = require('./sha512')
var Hash = require('./hash')

var W = new Array(160)

function Sha384 () {
  this.init()
  this._w = W

  Hash.call(this, 128, 112)
}

inherits(Sha384, SHA512)

Sha384.prototype.init = function () {
  this._a = 0xcbbb9d5d | 0
  this._b = 0x629a292a | 0
  this._c = 0x9159015a | 0
  this._d = 0x152fecd8 | 0
  this._e = 0x67332667 | 0
  this._f = 0x8eb44a87 | 0
  this._g = 0xdb0c2e0d | 0
  this._h = 0x47b5481d | 0

  this._al = 0xc1059ed8 | 0
  this._bl = 0x367cd507 | 0
  this._cl = 0x3070dd17 | 0
  this._dl = 0xf70e5939 | 0
  this._el = 0xffc00b31 | 0
  this._fl = 0x68581511 | 0
  this._gl = 0x64f98fa7 | 0
  this._hl = 0xbefa4fa4 | 0

  return this
}

Sha384.prototype._hash = function () {
  var H = new Buffer(48)

  function writeInt64BE (h, l, offset) {
    H.writeInt32BE(h, offset)
    H.writeInt32BE(l, offset + 4)
  }

  writeInt64BE(this._a, this._al, 0)
  writeInt64BE(this._b, this._bl, 8)
  writeInt64BE(this._c, this._cl, 16)
  writeInt64BE(this._d, this._dl, 24)
  writeInt64BE(this._e, this._el, 32)
  writeInt64BE(this._f, this._fl, 40)

  return H
}

module.exports = Sha384

}).call(this,require("buffer").Buffer)

},{"./hash":"/Users/jrmerz/dev/cstars/AHB/farm-budgets-app/node_modules/sha.js/hash.js","./sha512":"/Users/jrmerz/dev/cstars/AHB/farm-budgets-app/node_modules/sha.js/sha512.js","buffer":"/Users/jrmerz/dev/cstars/AHB/farm-budgets-app/node_modules/buffer/index.js","inherits":"/Users/jrmerz/dev/cstars/AHB/farm-budgets-app/node_modules/inherits/inherits_browser.js"}],"/Users/jrmerz/dev/cstars/AHB/farm-budgets-app/node_modules/sha.js/sha512.js":[function(require,module,exports){
(function (Buffer){
var inherits = require('inherits')
var Hash = require('./hash')

var K = [
  0x428a2f98, 0xd728ae22, 0x71374491, 0x23ef65cd,
  0xb5c0fbcf, 0xec4d3b2f, 0xe9b5dba5, 0x8189dbbc,
  0x3956c25b, 0xf348b538, 0x59f111f1, 0xb605d019,
  0x923f82a4, 0xaf194f9b, 0xab1c5ed5, 0xda6d8118,
  0xd807aa98, 0xa3030242, 0x12835b01, 0x45706fbe,
  0x243185be, 0x4ee4b28c, 0x550c7dc3, 0xd5ffb4e2,
  0x72be5d74, 0xf27b896f, 0x80deb1fe, 0x3b1696b1,
  0x9bdc06a7, 0x25c71235, 0xc19bf174, 0xcf692694,
  0xe49b69c1, 0x9ef14ad2, 0xefbe4786, 0x384f25e3,
  0x0fc19dc6, 0x8b8cd5b5, 0x240ca1cc, 0x77ac9c65,
  0x2de92c6f, 0x592b0275, 0x4a7484aa, 0x6ea6e483,
  0x5cb0a9dc, 0xbd41fbd4, 0x76f988da, 0x831153b5,
  0x983e5152, 0xee66dfab, 0xa831c66d, 0x2db43210,
  0xb00327c8, 0x98fb213f, 0xbf597fc7, 0xbeef0ee4,
  0xc6e00bf3, 0x3da88fc2, 0xd5a79147, 0x930aa725,
  0x06ca6351, 0xe003826f, 0x14292967, 0x0a0e6e70,
  0x27b70a85, 0x46d22ffc, 0x2e1b2138, 0x5c26c926,
  0x4d2c6dfc, 0x5ac42aed, 0x53380d13, 0x9d95b3df,
  0x650a7354, 0x8baf63de, 0x766a0abb, 0x3c77b2a8,
  0x81c2c92e, 0x47edaee6, 0x92722c85, 0x1482353b,
  0xa2bfe8a1, 0x4cf10364, 0xa81a664b, 0xbc423001,
  0xc24b8b70, 0xd0f89791, 0xc76c51a3, 0x0654be30,
  0xd192e819, 0xd6ef5218, 0xd6990624, 0x5565a910,
  0xf40e3585, 0x5771202a, 0x106aa070, 0x32bbd1b8,
  0x19a4c116, 0xb8d2d0c8, 0x1e376c08, 0x5141ab53,
  0x2748774c, 0xdf8eeb99, 0x34b0bcb5, 0xe19b48a8,
  0x391c0cb3, 0xc5c95a63, 0x4ed8aa4a, 0xe3418acb,
  0x5b9cca4f, 0x7763e373, 0x682e6ff3, 0xd6b2b8a3,
  0x748f82ee, 0x5defb2fc, 0x78a5636f, 0x43172f60,
  0x84c87814, 0xa1f0ab72, 0x8cc70208, 0x1a6439ec,
  0x90befffa, 0x23631e28, 0xa4506ceb, 0xde82bde9,
  0xbef9a3f7, 0xb2c67915, 0xc67178f2, 0xe372532b,
  0xca273ece, 0xea26619c, 0xd186b8c7, 0x21c0c207,
  0xeada7dd6, 0xcde0eb1e, 0xf57d4f7f, 0xee6ed178,
  0x06f067aa, 0x72176fba, 0x0a637dc5, 0xa2c898a6,
  0x113f9804, 0xbef90dae, 0x1b710b35, 0x131c471b,
  0x28db77f5, 0x23047d84, 0x32caab7b, 0x40c72493,
  0x3c9ebe0a, 0x15c9bebc, 0x431d67c4, 0x9c100d4c,
  0x4cc5d4be, 0xcb3e42b6, 0x597f299c, 0xfc657e2a,
  0x5fcb6fab, 0x3ad6faec, 0x6c44198c, 0x4a475817
]

var W = new Array(160)

function Sha512 () {
  this.init()
  this._w = W

  Hash.call(this, 128, 112)
}

inherits(Sha512, Hash)

Sha512.prototype.init = function () {
  this._a = 0x6a09e667 | 0
  this._b = 0xbb67ae85 | 0
  this._c = 0x3c6ef372 | 0
  this._d = 0xa54ff53a | 0
  this._e = 0x510e527f | 0
  this._f = 0x9b05688c | 0
  this._g = 0x1f83d9ab | 0
  this._h = 0x5be0cd19 | 0

  this._al = 0xf3bcc908 | 0
  this._bl = 0x84caa73b | 0
  this._cl = 0xfe94f82b | 0
  this._dl = 0x5f1d36f1 | 0
  this._el = 0xade682d1 | 0
  this._fl = 0x2b3e6c1f | 0
  this._gl = 0xfb41bd6b | 0
  this._hl = 0x137e2179 | 0

  return this
}

function Ch (x, y, z) {
  return z ^ (x & (y ^ z))
}

function Maj (x, y, z) {
  return (x & y) | (z & (x | y))
}

function Sigma0 (x, xl) {
  return (x >>> 28 | xl << 4) ^ (xl >>> 2 | x << 30) ^ (xl >>> 7 | x << 25)
}

function Sigma1 (x, xl) {
  return (x >>> 14 | xl << 18) ^ (x >>> 18 | xl << 14) ^ (xl >>> 9 | x << 23)
}

function Gamma0 (x, xl) {
  return (x >>> 1 | xl << 31) ^ (x >>> 8 | xl << 24) ^ (x >>> 7)
}

function Gamma0l (x, xl) {
  return (x >>> 1 | xl << 31) ^ (x >>> 8 | xl << 24) ^ (x >>> 7 | xl << 25)
}

function Gamma1 (x, xl) {
  return (x >>> 19 | xl << 13) ^ (xl >>> 29 | x << 3) ^ (x >>> 6)
}

function Gamma1l (x, xl) {
  return (x >>> 19 | xl << 13) ^ (xl >>> 29 | x << 3) ^ (x >>> 6 | xl << 26)
}

Sha512.prototype._update = function (M) {
  var W = this._w

  var a = this._a | 0
  var b = this._b | 0
  var c = this._c | 0
  var d = this._d | 0
  var e = this._e | 0
  var f = this._f | 0
  var g = this._g | 0
  var h = this._h | 0

  var al = this._al | 0
  var bl = this._bl | 0
  var cl = this._cl | 0
  var dl = this._dl | 0
  var el = this._el | 0
  var fl = this._fl | 0
  var gl = this._gl | 0
  var hl = this._hl | 0

  var i = 0
  var j = 0
  var Wi, Wil
  function calcW () {
    var x = W[j - 15 * 2]
    var xl = W[j - 15 * 2 + 1]
    var gamma0 = Gamma0(x, xl)
    var gamma0l = Gamma0l(xl, x)

    x = W[j - 2 * 2]
    xl = W[j - 2 * 2 + 1]
    var gamma1 = Gamma1(x, xl)
    var gamma1l = Gamma1l(xl, x)

    // W[i] = gamma0 + W[i - 7] + gamma1 + W[i - 16]
    var Wi7 = W[j - 7 * 2]
    var Wi7l = W[j - 7 * 2 + 1]

    var Wi16 = W[j - 16 * 2]
    var Wi16l = W[j - 16 * 2 + 1]

    Wil = gamma0l + Wi7l
    Wi = gamma0 + Wi7 + ((Wil >>> 0) < (gamma0l >>> 0) ? 1 : 0)
    Wil = Wil + gamma1l
    Wi = Wi + gamma1 + ((Wil >>> 0) < (gamma1l >>> 0) ? 1 : 0)
    Wil = Wil + Wi16l
    Wi = Wi + Wi16 + ((Wil >>> 0) < (Wi16l >>> 0) ? 1 : 0)
  }

  function loop () {
    W[j] = Wi
    W[j + 1] = Wil

    var maj = Maj(a, b, c)
    var majl = Maj(al, bl, cl)

    var sigma0h = Sigma0(a, al)
    var sigma0l = Sigma0(al, a)
    var sigma1h = Sigma1(e, el)
    var sigma1l = Sigma1(el, e)

    // t1 = h + sigma1 + ch + K[i] + W[i]
    var Ki = K[j]
    var Kil = K[j + 1]

    var ch = Ch(e, f, g)
    var chl = Ch(el, fl, gl)

    var t1l = hl + sigma1l
    var t1 = h + sigma1h + ((t1l >>> 0) < (hl >>> 0) ? 1 : 0)
    t1l = t1l + chl
    t1 = t1 + ch + ((t1l >>> 0) < (chl >>> 0) ? 1 : 0)
    t1l = t1l + Kil
    t1 = t1 + Ki + ((t1l >>> 0) < (Kil >>> 0) ? 1 : 0)
    t1l = t1l + Wil
    t1 = t1 + Wi + ((t1l >>> 0) < (Wil >>> 0) ? 1 : 0)

    // t2 = sigma0 + maj
    var t2l = sigma0l + majl
    var t2 = sigma0h + maj + ((t2l >>> 0) < (sigma0l >>> 0) ? 1 : 0)

    h = g
    hl = gl
    g = f
    gl = fl
    f = e
    fl = el
    el = (dl + t1l) | 0
    e = (d + t1 + ((el >>> 0) < (dl >>> 0) ? 1 : 0)) | 0
    d = c
    dl = cl
    c = b
    cl = bl
    b = a
    bl = al
    al = (t1l + t2l) | 0
    a = (t1 + t2 + ((al >>> 0) < (t1l >>> 0) ? 1 : 0)) | 0

    i++
    j += 2
  }

  while (i < 16) {
    Wi = M.readInt32BE(j * 4)
    Wil = M.readInt32BE(j * 4 + 4)

    loop()
  }

  while (i < 80) {
    calcW()
    loop()
  }

  this._al = (this._al + al) | 0
  this._bl = (this._bl + bl) | 0
  this._cl = (this._cl + cl) | 0
  this._dl = (this._dl + dl) | 0
  this._el = (this._el + el) | 0
  this._fl = (this._fl + fl) | 0
  this._gl = (this._gl + gl) | 0
  this._hl = (this._hl + hl) | 0

  this._a = (this._a + a + ((this._al >>> 0) < (al >>> 0) ? 1 : 0)) | 0
  this._b = (this._b + b + ((this._bl >>> 0) < (bl >>> 0) ? 1 : 0)) | 0
  this._c = (this._c + c + ((this._cl >>> 0) < (cl >>> 0) ? 1 : 0)) | 0
  this._d = (this._d + d + ((this._dl >>> 0) < (dl >>> 0) ? 1 : 0)) | 0
  this._e = (this._e + e + ((this._el >>> 0) < (el >>> 0) ? 1 : 0)) | 0
  this._f = (this._f + f + ((this._fl >>> 0) < (fl >>> 0) ? 1 : 0)) | 0
  this._g = (this._g + g + ((this._gl >>> 0) < (gl >>> 0) ? 1 : 0)) | 0
  this._h = (this._h + h + ((this._hl >>> 0) < (hl >>> 0) ? 1 : 0)) | 0
}

Sha512.prototype._hash = function () {
  var H = new Buffer(64)

  function writeInt64BE (h, l, offset) {
    H.writeInt32BE(h, offset)
    H.writeInt32BE(l, offset + 4)
  }

  writeInt64BE(this._a, this._al, 0)
  writeInt64BE(this._b, this._bl, 8)
  writeInt64BE(this._c, this._cl, 16)
  writeInt64BE(this._d, this._dl, 24)
  writeInt64BE(this._e, this._el, 32)
  writeInt64BE(this._f, this._fl, 40)
  writeInt64BE(this._g, this._gl, 48)
  writeInt64BE(this._h, this._hl, 56)

  return H
}

module.exports = Sha512

}).call(this,require("buffer").Buffer)

},{"./hash":"/Users/jrmerz/dev/cstars/AHB/farm-budgets-app/node_modules/sha.js/hash.js","buffer":"/Users/jrmerz/dev/cstars/AHB/farm-budgets-app/node_modules/buffer/index.js","inherits":"/Users/jrmerz/dev/cstars/AHB/farm-budgets-app/node_modules/inherits/inherits_browser.js"}],"/Users/jrmerz/dev/cstars/AHB/farm-budgets-app/node_modules/stream-browserify/index.js":[function(require,module,exports){
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

module.exports = Stream;

var EE = require('events').EventEmitter;
var inherits = require('inherits');

inherits(Stream, EE);
Stream.Readable = require('readable-stream/readable.js');
Stream.Writable = require('readable-stream/writable.js');
Stream.Duplex = require('readable-stream/duplex.js');
Stream.Transform = require('readable-stream/transform.js');
Stream.PassThrough = require('readable-stream/passthrough.js');

// Backwards-compat with node 0.4.x
Stream.Stream = Stream;



// old-style streams.  Note that the pipe method (the only relevant
// part of this class) is overridden in the Readable class.

function Stream() {
  EE.call(this);
}

Stream.prototype.pipe = function(dest, options) {
  var source = this;

  function ondata(chunk) {
    if (dest.writable) {
      if (false === dest.write(chunk) && source.pause) {
        source.pause();
      }
    }
  }

  source.on('data', ondata);

  function ondrain() {
    if (source.readable && source.resume) {
      source.resume();
    }
  }

  dest.on('drain', ondrain);

  // If the 'end' option is not supplied, dest.end() will be called when
  // source gets the 'end' or 'close' events.  Only dest.end() once.
  if (!dest._isStdio && (!options || options.end !== false)) {
    source.on('end', onend);
    source.on('close', onclose);
  }

  var didOnEnd = false;
  function onend() {
    if (didOnEnd) return;
    didOnEnd = true;

    dest.end();
  }


  function onclose() {
    if (didOnEnd) return;
    didOnEnd = true;

    if (typeof dest.destroy === 'function') dest.destroy();
  }

  // don't leave dangling pipes when there are errors.
  function onerror(er) {
    cleanup();
    if (EE.listenerCount(this, 'error') === 0) {
      throw er; // Unhandled stream error in pipe.
    }
  }

  source.on('error', onerror);
  dest.on('error', onerror);

  // remove all the event listeners that were added.
  function cleanup() {
    source.removeListener('data', ondata);
    dest.removeListener('drain', ondrain);

    source.removeListener('end', onend);
    source.removeListener('close', onclose);

    source.removeListener('error', onerror);
    dest.removeListener('error', onerror);

    source.removeListener('end', cleanup);
    source.removeListener('close', cleanup);

    dest.removeListener('close', cleanup);
  }

  source.on('end', cleanup);
  source.on('close', cleanup);

  dest.on('close', cleanup);

  dest.emit('pipe', source);

  // Allow for unix-like usage: A.pipe(B).pipe(C)
  return dest;
};

},{"events":"/Users/jrmerz/dev/cstars/AHB/farm-budgets-app/node_modules/events/events.js","inherits":"/Users/jrmerz/dev/cstars/AHB/farm-budgets-app/node_modules/inherits/inherits_browser.js","readable-stream/duplex.js":"/Users/jrmerz/dev/cstars/AHB/farm-budgets-app/node_modules/stream-browserify/node_modules/readable-stream/duplex.js","readable-stream/passthrough.js":"/Users/jrmerz/dev/cstars/AHB/farm-budgets-app/node_modules/stream-browserify/node_modules/readable-stream/passthrough.js","readable-stream/readable.js":"/Users/jrmerz/dev/cstars/AHB/farm-budgets-app/node_modules/stream-browserify/node_modules/readable-stream/readable.js","readable-stream/transform.js":"/Users/jrmerz/dev/cstars/AHB/farm-budgets-app/node_modules/stream-browserify/node_modules/readable-stream/transform.js","readable-stream/writable.js":"/Users/jrmerz/dev/cstars/AHB/farm-budgets-app/node_modules/stream-browserify/node_modules/readable-stream/writable.js"}],"/Users/jrmerz/dev/cstars/AHB/farm-budgets-app/node_modules/stream-browserify/node_modules/readable-stream/duplex.js":[function(require,module,exports){
module.exports = require("./lib/_stream_duplex.js")

},{"./lib/_stream_duplex.js":"/Users/jrmerz/dev/cstars/AHB/farm-budgets-app/node_modules/stream-browserify/node_modules/readable-stream/lib/_stream_duplex.js"}],"/Users/jrmerz/dev/cstars/AHB/farm-budgets-app/node_modules/stream-browserify/node_modules/readable-stream/lib/_stream_duplex.js":[function(require,module,exports){
(function (process){
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

// a duplex stream is just a stream that is both readable and writable.
// Since JS doesn't have multiple prototypal inheritance, this class
// prototypally inherits from Readable, and then parasitically from
// Writable.

module.exports = Duplex;

/*<replacement>*/
var objectKeys = Object.keys || function (obj) {
  var keys = [];
  for (var key in obj) keys.push(key);
  return keys;
}
/*</replacement>*/


/*<replacement>*/
var util = require('core-util-is');
util.inherits = require('inherits');
/*</replacement>*/

var Readable = require('./_stream_readable');
var Writable = require('./_stream_writable');

util.inherits(Duplex, Readable);

forEach(objectKeys(Writable.prototype), function(method) {
  if (!Duplex.prototype[method])
    Duplex.prototype[method] = Writable.prototype[method];
});

function Duplex(options) {
  if (!(this instanceof Duplex))
    return new Duplex(options);

  Readable.call(this, options);
  Writable.call(this, options);

  if (options && options.readable === false)
    this.readable = false;

  if (options && options.writable === false)
    this.writable = false;

  this.allowHalfOpen = true;
  if (options && options.allowHalfOpen === false)
    this.allowHalfOpen = false;

  this.once('end', onend);
}

// the no-half-open enforcer
function onend() {
  // if we allow half-open state, or if the writable side ended,
  // then we're ok.
  if (this.allowHalfOpen || this._writableState.ended)
    return;

  // no more data can be written.
  // But allow more writes to happen in this tick.
  process.nextTick(this.end.bind(this));
}

function forEach (xs, f) {
  for (var i = 0, l = xs.length; i < l; i++) {
    f(xs[i], i);
  }
}

}).call(this,require('_process'))

},{"./_stream_readable":"/Users/jrmerz/dev/cstars/AHB/farm-budgets-app/node_modules/stream-browserify/node_modules/readable-stream/lib/_stream_readable.js","./_stream_writable":"/Users/jrmerz/dev/cstars/AHB/farm-budgets-app/node_modules/stream-browserify/node_modules/readable-stream/lib/_stream_writable.js","_process":"/Users/jrmerz/dev/cstars/AHB/farm-budgets-app/node_modules/process/browser.js","core-util-is":"/Users/jrmerz/dev/cstars/AHB/farm-budgets-app/node_modules/core-util-is/lib/util.js","inherits":"/Users/jrmerz/dev/cstars/AHB/farm-budgets-app/node_modules/inherits/inherits_browser.js"}],"/Users/jrmerz/dev/cstars/AHB/farm-budgets-app/node_modules/stream-browserify/node_modules/readable-stream/lib/_stream_passthrough.js":[function(require,module,exports){
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

// a passthrough stream.
// basically just the most minimal sort of Transform stream.
// Every written chunk gets output as-is.

module.exports = PassThrough;

var Transform = require('./_stream_transform');

/*<replacement>*/
var util = require('core-util-is');
util.inherits = require('inherits');
/*</replacement>*/

util.inherits(PassThrough, Transform);

function PassThrough(options) {
  if (!(this instanceof PassThrough))
    return new PassThrough(options);

  Transform.call(this, options);
}

PassThrough.prototype._transform = function(chunk, encoding, cb) {
  cb(null, chunk);
};

},{"./_stream_transform":"/Users/jrmerz/dev/cstars/AHB/farm-budgets-app/node_modules/stream-browserify/node_modules/readable-stream/lib/_stream_transform.js","core-util-is":"/Users/jrmerz/dev/cstars/AHB/farm-budgets-app/node_modules/core-util-is/lib/util.js","inherits":"/Users/jrmerz/dev/cstars/AHB/farm-budgets-app/node_modules/inherits/inherits_browser.js"}],"/Users/jrmerz/dev/cstars/AHB/farm-budgets-app/node_modules/stream-browserify/node_modules/readable-stream/lib/_stream_readable.js":[function(require,module,exports){
(function (process){
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

module.exports = Readable;

/*<replacement>*/
var isArray = require('isarray');
/*</replacement>*/


/*<replacement>*/
var Buffer = require('buffer').Buffer;
/*</replacement>*/

Readable.ReadableState = ReadableState;

var EE = require('events').EventEmitter;

/*<replacement>*/
if (!EE.listenerCount) EE.listenerCount = function(emitter, type) {
  return emitter.listeners(type).length;
};
/*</replacement>*/

var Stream = require('stream');

/*<replacement>*/
var util = require('core-util-is');
util.inherits = require('inherits');
/*</replacement>*/

var StringDecoder;


/*<replacement>*/
var debug = require('util');
if (debug && debug.debuglog) {
  debug = debug.debuglog('stream');
} else {
  debug = function () {};
}
/*</replacement>*/


util.inherits(Readable, Stream);

function ReadableState(options, stream) {
  var Duplex = require('./_stream_duplex');

  options = options || {};

  // the point at which it stops calling _read() to fill the buffer
  // Note: 0 is a valid value, means "don't call _read preemptively ever"
  var hwm = options.highWaterMark;
  var defaultHwm = options.objectMode ? 16 : 16 * 1024;
  this.highWaterMark = (hwm || hwm === 0) ? hwm : defaultHwm;

  // cast to ints.
  this.highWaterMark = ~~this.highWaterMark;

  this.buffer = [];
  this.length = 0;
  this.pipes = null;
  this.pipesCount = 0;
  this.flowing = null;
  this.ended = false;
  this.endEmitted = false;
  this.reading = false;

  // a flag to be able to tell if the onwrite cb is called immediately,
  // or on a later tick.  We set this to true at first, because any
  // actions that shouldn't happen until "later" should generally also
  // not happen before the first write call.
  this.sync = true;

  // whenever we return null, then we set a flag to say
  // that we're awaiting a 'readable' event emission.
  this.needReadable = false;
  this.emittedReadable = false;
  this.readableListening = false;


  // object stream flag. Used to make read(n) ignore n and to
  // make all the buffer merging and length checks go away
  this.objectMode = !!options.objectMode;

  if (stream instanceof Duplex)
    this.objectMode = this.objectMode || !!options.readableObjectMode;

  // Crypto is kind of old and crusty.  Historically, its default string
  // encoding is 'binary' so we have to make this configurable.
  // Everything else in the universe uses 'utf8', though.
  this.defaultEncoding = options.defaultEncoding || 'utf8';

  // when piping, we only care about 'readable' events that happen
  // after read()ing all the bytes and not getting any pushback.
  this.ranOut = false;

  // the number of writers that are awaiting a drain event in .pipe()s
  this.awaitDrain = 0;

  // if true, a maybeReadMore has been scheduled
  this.readingMore = false;

  this.decoder = null;
  this.encoding = null;
  if (options.encoding) {
    if (!StringDecoder)
      StringDecoder = require('string_decoder/').StringDecoder;
    this.decoder = new StringDecoder(options.encoding);
    this.encoding = options.encoding;
  }
}

function Readable(options) {
  var Duplex = require('./_stream_duplex');

  if (!(this instanceof Readable))
    return new Readable(options);

  this._readableState = new ReadableState(options, this);

  // legacy
  this.readable = true;

  Stream.call(this);
}

// Manually shove something into the read() buffer.
// This returns true if the highWaterMark has not been hit yet,
// similar to how Writable.write() returns true if you should
// write() some more.
Readable.prototype.push = function(chunk, encoding) {
  var state = this._readableState;

  if (util.isString(chunk) && !state.objectMode) {
    encoding = encoding || state.defaultEncoding;
    if (encoding !== state.encoding) {
      chunk = new Buffer(chunk, encoding);
      encoding = '';
    }
  }

  return readableAddChunk(this, state, chunk, encoding, false);
};

// Unshift should *always* be something directly out of read()
Readable.prototype.unshift = function(chunk) {
  var state = this._readableState;
  return readableAddChunk(this, state, chunk, '', true);
};

function readableAddChunk(stream, state, chunk, encoding, addToFront) {
  var er = chunkInvalid(state, chunk);
  if (er) {
    stream.emit('error', er);
  } else if (util.isNullOrUndefined(chunk)) {
    state.reading = false;
    if (!state.ended)
      onEofChunk(stream, state);
  } else if (state.objectMode || chunk && chunk.length > 0) {
    if (state.ended && !addToFront) {
      var e = new Error('stream.push() after EOF');
      stream.emit('error', e);
    } else if (state.endEmitted && addToFront) {
      var e = new Error('stream.unshift() after end event');
      stream.emit('error', e);
    } else {
      if (state.decoder && !addToFront && !encoding)
        chunk = state.decoder.write(chunk);

      if (!addToFront)
        state.reading = false;

      // if we want the data now, just emit it.
      if (state.flowing && state.length === 0 && !state.sync) {
        stream.emit('data', chunk);
        stream.read(0);
      } else {
        // update the buffer info.
        state.length += state.objectMode ? 1 : chunk.length;
        if (addToFront)
          state.buffer.unshift(chunk);
        else
          state.buffer.push(chunk);

        if (state.needReadable)
          emitReadable(stream);
      }

      maybeReadMore(stream, state);
    }
  } else if (!addToFront) {
    state.reading = false;
  }

  return needMoreData(state);
}



// if it's past the high water mark, we can push in some more.
// Also, if we have no data yet, we can stand some
// more bytes.  This is to work around cases where hwm=0,
// such as the repl.  Also, if the push() triggered a
// readable event, and the user called read(largeNumber) such that
// needReadable was set, then we ought to push more, so that another
// 'readable' event will be triggered.
function needMoreData(state) {
  return !state.ended &&
         (state.needReadable ||
          state.length < state.highWaterMark ||
          state.length === 0);
}

// backwards compatibility.
Readable.prototype.setEncoding = function(enc) {
  if (!StringDecoder)
    StringDecoder = require('string_decoder/').StringDecoder;
  this._readableState.decoder = new StringDecoder(enc);
  this._readableState.encoding = enc;
  return this;
};

// Don't raise the hwm > 128MB
var MAX_HWM = 0x800000;
function roundUpToNextPowerOf2(n) {
  if (n >= MAX_HWM) {
    n = MAX_HWM;
  } else {
    // Get the next highest power of 2
    n--;
    for (var p = 1; p < 32; p <<= 1) n |= n >> p;
    n++;
  }
  return n;
}

function howMuchToRead(n, state) {
  if (state.length === 0 && state.ended)
    return 0;

  if (state.objectMode)
    return n === 0 ? 0 : 1;

  if (isNaN(n) || util.isNull(n)) {
    // only flow one buffer at a time
    if (state.flowing && state.buffer.length)
      return state.buffer[0].length;
    else
      return state.length;
  }

  if (n <= 0)
    return 0;

  // If we're asking for more than the target buffer level,
  // then raise the water mark.  Bump up to the next highest
  // power of 2, to prevent increasing it excessively in tiny
  // amounts.
  if (n > state.highWaterMark)
    state.highWaterMark = roundUpToNextPowerOf2(n);

  // don't have that much.  return null, unless we've ended.
  if (n > state.length) {
    if (!state.ended) {
      state.needReadable = true;
      return 0;
    } else
      return state.length;
  }

  return n;
}

// you can override either this method, or the async _read(n) below.
Readable.prototype.read = function(n) {
  debug('read', n);
  var state = this._readableState;
  var nOrig = n;

  if (!util.isNumber(n) || n > 0)
    state.emittedReadable = false;

  // if we're doing read(0) to trigger a readable event, but we
  // already have a bunch of data in the buffer, then just trigger
  // the 'readable' event and move on.
  if (n === 0 &&
      state.needReadable &&
      (state.length >= state.highWaterMark || state.ended)) {
    debug('read: emitReadable', state.length, state.ended);
    if (state.length === 0 && state.ended)
      endReadable(this);
    else
      emitReadable(this);
    return null;
  }

  n = howMuchToRead(n, state);

  // if we've ended, and we're now clear, then finish it up.
  if (n === 0 && state.ended) {
    if (state.length === 0)
      endReadable(this);
    return null;
  }

  // All the actual chunk generation logic needs to be
  // *below* the call to _read.  The reason is that in certain
  // synthetic stream cases, such as passthrough streams, _read
  // may be a completely synchronous operation which may change
  // the state of the read buffer, providing enough data when
  // before there was *not* enough.
  //
  // So, the steps are:
  // 1. Figure out what the state of things will be after we do
  // a read from the buffer.
  //
  // 2. If that resulting state will trigger a _read, then call _read.
  // Note that this may be asynchronous, or synchronous.  Yes, it is
  // deeply ugly to write APIs this way, but that still doesn't mean
  // that the Readable class should behave improperly, as streams are
  // designed to be sync/async agnostic.
  // Take note if the _read call is sync or async (ie, if the read call
  // has returned yet), so that we know whether or not it's safe to emit
  // 'readable' etc.
  //
  // 3. Actually pull the requested chunks out of the buffer and return.

  // if we need a readable event, then we need to do some reading.
  var doRead = state.needReadable;
  debug('need readable', doRead);

  // if we currently have less than the highWaterMark, then also read some
  if (state.length === 0 || state.length - n < state.highWaterMark) {
    doRead = true;
    debug('length less than watermark', doRead);
  }

  // however, if we've ended, then there's no point, and if we're already
  // reading, then it's unnecessary.
  if (state.ended || state.reading) {
    doRead = false;
    debug('reading or ended', doRead);
  }

  if (doRead) {
    debug('do read');
    state.reading = true;
    state.sync = true;
    // if the length is currently zero, then we *need* a readable event.
    if (state.length === 0)
      state.needReadable = true;
    // call internal read method
    this._read(state.highWaterMark);
    state.sync = false;
  }

  // If _read pushed data synchronously, then `reading` will be false,
  // and we need to re-evaluate how much data we can return to the user.
  if (doRead && !state.reading)
    n = howMuchToRead(nOrig, state);

  var ret;
  if (n > 0)
    ret = fromList(n, state);
  else
    ret = null;

  if (util.isNull(ret)) {
    state.needReadable = true;
    n = 0;
  }

  state.length -= n;

  // If we have nothing in the buffer, then we want to know
  // as soon as we *do* get something into the buffer.
  if (state.length === 0 && !state.ended)
    state.needReadable = true;

  // If we tried to read() past the EOF, then emit end on the next tick.
  if (nOrig !== n && state.ended && state.length === 0)
    endReadable(this);

  if (!util.isNull(ret))
    this.emit('data', ret);

  return ret;
};

function chunkInvalid(state, chunk) {
  var er = null;
  if (!util.isBuffer(chunk) &&
      !util.isString(chunk) &&
      !util.isNullOrUndefined(chunk) &&
      !state.objectMode) {
    er = new TypeError('Invalid non-string/buffer chunk');
  }
  return er;
}


function onEofChunk(stream, state) {
  if (state.decoder && !state.ended) {
    var chunk = state.decoder.end();
    if (chunk && chunk.length) {
      state.buffer.push(chunk);
      state.length += state.objectMode ? 1 : chunk.length;
    }
  }
  state.ended = true;

  // emit 'readable' now to make sure it gets picked up.
  emitReadable(stream);
}

// Don't emit readable right away in sync mode, because this can trigger
// another read() call => stack overflow.  This way, it might trigger
// a nextTick recursion warning, but that's not so bad.
function emitReadable(stream) {
  var state = stream._readableState;
  state.needReadable = false;
  if (!state.emittedReadable) {
    debug('emitReadable', state.flowing);
    state.emittedReadable = true;
    if (state.sync)
      process.nextTick(function() {
        emitReadable_(stream);
      });
    else
      emitReadable_(stream);
  }
}

function emitReadable_(stream) {
  debug('emit readable');
  stream.emit('readable');
  flow(stream);
}


// at this point, the user has presumably seen the 'readable' event,
// and called read() to consume some data.  that may have triggered
// in turn another _read(n) call, in which case reading = true if
// it's in progress.
// However, if we're not ended, or reading, and the length < hwm,
// then go ahead and try to read some more preemptively.
function maybeReadMore(stream, state) {
  if (!state.readingMore) {
    state.readingMore = true;
    process.nextTick(function() {
      maybeReadMore_(stream, state);
    });
  }
}

function maybeReadMore_(stream, state) {
  var len = state.length;
  while (!state.reading && !state.flowing && !state.ended &&
         state.length < state.highWaterMark) {
    debug('maybeReadMore read 0');
    stream.read(0);
    if (len === state.length)
      // didn't get any data, stop spinning.
      break;
    else
      len = state.length;
  }
  state.readingMore = false;
}

// abstract method.  to be overridden in specific implementation classes.
// call cb(er, data) where data is <= n in length.
// for virtual (non-string, non-buffer) streams, "length" is somewhat
// arbitrary, and perhaps not very meaningful.
Readable.prototype._read = function(n) {
  this.emit('error', new Error('not implemented'));
};

Readable.prototype.pipe = function(dest, pipeOpts) {
  var src = this;
  var state = this._readableState;

  switch (state.pipesCount) {
    case 0:
      state.pipes = dest;
      break;
    case 1:
      state.pipes = [state.pipes, dest];
      break;
    default:
      state.pipes.push(dest);
      break;
  }
  state.pipesCount += 1;
  debug('pipe count=%d opts=%j', state.pipesCount, pipeOpts);

  var doEnd = (!pipeOpts || pipeOpts.end !== false) &&
              dest !== process.stdout &&
              dest !== process.stderr;

  var endFn = doEnd ? onend : cleanup;
  if (state.endEmitted)
    process.nextTick(endFn);
  else
    src.once('end', endFn);

  dest.on('unpipe', onunpipe);
  function onunpipe(readable) {
    debug('onunpipe');
    if (readable === src) {
      cleanup();
    }
  }

  function onend() {
    debug('onend');
    dest.end();
  }

  // when the dest drains, it reduces the awaitDrain counter
  // on the source.  This would be more elegant with a .once()
  // handler in flow(), but adding and removing repeatedly is
  // too slow.
  var ondrain = pipeOnDrain(src);
  dest.on('drain', ondrain);

  function cleanup() {
    debug('cleanup');
    // cleanup event handlers once the pipe is broken
    dest.removeListener('close', onclose);
    dest.removeListener('finish', onfinish);
    dest.removeListener('drain', ondrain);
    dest.removeListener('error', onerror);
    dest.removeListener('unpipe', onunpipe);
    src.removeListener('end', onend);
    src.removeListener('end', cleanup);
    src.removeListener('data', ondata);

    // if the reader is waiting for a drain event from this
    // specific writer, then it would cause it to never start
    // flowing again.
    // So, if this is awaiting a drain, then we just call it now.
    // If we don't know, then assume that we are waiting for one.
    if (state.awaitDrain &&
        (!dest._writableState || dest._writableState.needDrain))
      ondrain();
  }

  src.on('data', ondata);
  function ondata(chunk) {
    debug('ondata');
    var ret = dest.write(chunk);
    if (false === ret) {
      debug('false write response, pause',
            src._readableState.awaitDrain);
      src._readableState.awaitDrain++;
      src.pause();
    }
  }

  // if the dest has an error, then stop piping into it.
  // however, don't suppress the throwing behavior for this.
  function onerror(er) {
    debug('onerror', er);
    unpipe();
    dest.removeListener('error', onerror);
    if (EE.listenerCount(dest, 'error') === 0)
      dest.emit('error', er);
  }
  // This is a brutally ugly hack to make sure that our error handler
  // is attached before any userland ones.  NEVER DO THIS.
  if (!dest._events || !dest._events.error)
    dest.on('error', onerror);
  else if (isArray(dest._events.error))
    dest._events.error.unshift(onerror);
  else
    dest._events.error = [onerror, dest._events.error];



  // Both close and finish should trigger unpipe, but only once.
  function onclose() {
    dest.removeListener('finish', onfinish);
    unpipe();
  }
  dest.once('close', onclose);
  function onfinish() {
    debug('onfinish');
    dest.removeListener('close', onclose);
    unpipe();
  }
  dest.once('finish', onfinish);

  function unpipe() {
    debug('unpipe');
    src.unpipe(dest);
  }

  // tell the dest that it's being piped to
  dest.emit('pipe', src);

  // start the flow if it hasn't been started already.
  if (!state.flowing) {
    debug('pipe resume');
    src.resume();
  }

  return dest;
};

function pipeOnDrain(src) {
  return function() {
    var state = src._readableState;
    debug('pipeOnDrain', state.awaitDrain);
    if (state.awaitDrain)
      state.awaitDrain--;
    if (state.awaitDrain === 0 && EE.listenerCount(src, 'data')) {
      state.flowing = true;
      flow(src);
    }
  };
}


Readable.prototype.unpipe = function(dest) {
  var state = this._readableState;

  // if we're not piping anywhere, then do nothing.
  if (state.pipesCount === 0)
    return this;

  // just one destination.  most common case.
  if (state.pipesCount === 1) {
    // passed in one, but it's not the right one.
    if (dest && dest !== state.pipes)
      return this;

    if (!dest)
      dest = state.pipes;

    // got a match.
    state.pipes = null;
    state.pipesCount = 0;
    state.flowing = false;
    if (dest)
      dest.emit('unpipe', this);
    return this;
  }

  // slow case. multiple pipe destinations.

  if (!dest) {
    // remove all.
    var dests = state.pipes;
    var len = state.pipesCount;
    state.pipes = null;
    state.pipesCount = 0;
    state.flowing = false;

    for (var i = 0; i < len; i++)
      dests[i].emit('unpipe', this);
    return this;
  }

  // try to find the right one.
  var i = indexOf(state.pipes, dest);
  if (i === -1)
    return this;

  state.pipes.splice(i, 1);
  state.pipesCount -= 1;
  if (state.pipesCount === 1)
    state.pipes = state.pipes[0];

  dest.emit('unpipe', this);

  return this;
};

// set up data events if they are asked for
// Ensure readable listeners eventually get something
Readable.prototype.on = function(ev, fn) {
  var res = Stream.prototype.on.call(this, ev, fn);

  // If listening to data, and it has not explicitly been paused,
  // then call resume to start the flow of data on the next tick.
  if (ev === 'data' && false !== this._readableState.flowing) {
    this.resume();
  }

  if (ev === 'readable' && this.readable) {
    var state = this._readableState;
    if (!state.readableListening) {
      state.readableListening = true;
      state.emittedReadable = false;
      state.needReadable = true;
      if (!state.reading) {
        var self = this;
        process.nextTick(function() {
          debug('readable nexttick read 0');
          self.read(0);
        });
      } else if (state.length) {
        emitReadable(this, state);
      }
    }
  }

  return res;
};
Readable.prototype.addListener = Readable.prototype.on;

// pause() and resume() are remnants of the legacy readable stream API
// If the user uses them, then switch into old mode.
Readable.prototype.resume = function() {
  var state = this._readableState;
  if (!state.flowing) {
    debug('resume');
    state.flowing = true;
    if (!state.reading) {
      debug('resume read 0');
      this.read(0);
    }
    resume(this, state);
  }
  return this;
};

function resume(stream, state) {
  if (!state.resumeScheduled) {
    state.resumeScheduled = true;
    process.nextTick(function() {
      resume_(stream, state);
    });
  }
}

function resume_(stream, state) {
  state.resumeScheduled = false;
  stream.emit('resume');
  flow(stream);
  if (state.flowing && !state.reading)
    stream.read(0);
}

Readable.prototype.pause = function() {
  debug('call pause flowing=%j', this._readableState.flowing);
  if (false !== this._readableState.flowing) {
    debug('pause');
    this._readableState.flowing = false;
    this.emit('pause');
  }
  return this;
};

function flow(stream) {
  var state = stream._readableState;
  debug('flow', state.flowing);
  if (state.flowing) {
    do {
      var chunk = stream.read();
    } while (null !== chunk && state.flowing);
  }
}

// wrap an old-style stream as the async data source.
// This is *not* part of the readable stream interface.
// It is an ugly unfortunate mess of history.
Readable.prototype.wrap = function(stream) {
  var state = this._readableState;
  var paused = false;

  var self = this;
  stream.on('end', function() {
    debug('wrapped end');
    if (state.decoder && !state.ended) {
      var chunk = state.decoder.end();
      if (chunk && chunk.length)
        self.push(chunk);
    }

    self.push(null);
  });

  stream.on('data', function(chunk) {
    debug('wrapped data');
    if (state.decoder)
      chunk = state.decoder.write(chunk);
    if (!chunk || !state.objectMode && !chunk.length)
      return;

    var ret = self.push(chunk);
    if (!ret) {
      paused = true;
      stream.pause();
    }
  });

  // proxy all the other methods.
  // important when wrapping filters and duplexes.
  for (var i in stream) {
    if (util.isFunction(stream[i]) && util.isUndefined(this[i])) {
      this[i] = function(method) { return function() {
        return stream[method].apply(stream, arguments);
      }}(i);
    }
  }

  // proxy certain important events.
  var events = ['error', 'close', 'destroy', 'pause', 'resume'];
  forEach(events, function(ev) {
    stream.on(ev, self.emit.bind(self, ev));
  });

  // when we try to consume some more bytes, simply unpause the
  // underlying stream.
  self._read = function(n) {
    debug('wrapped _read', n);
    if (paused) {
      paused = false;
      stream.resume();
    }
  };

  return self;
};



// exposed for testing purposes only.
Readable._fromList = fromList;

// Pluck off n bytes from an array of buffers.
// Length is the combined lengths of all the buffers in the list.
function fromList(n, state) {
  var list = state.buffer;
  var length = state.length;
  var stringMode = !!state.decoder;
  var objectMode = !!state.objectMode;
  var ret;

  // nothing in the list, definitely empty.
  if (list.length === 0)
    return null;

  if (length === 0)
    ret = null;
  else if (objectMode)
    ret = list.shift();
  else if (!n || n >= length) {
    // read it all, truncate the array.
    if (stringMode)
      ret = list.join('');
    else
      ret = Buffer.concat(list, length);
    list.length = 0;
  } else {
    // read just some of it.
    if (n < list[0].length) {
      // just take a part of the first list item.
      // slice is the same for buffers and strings.
      var buf = list[0];
      ret = buf.slice(0, n);
      list[0] = buf.slice(n);
    } else if (n === list[0].length) {
      // first list is a perfect match
      ret = list.shift();
    } else {
      // complex case.
      // we have enough to cover it, but it spans past the first buffer.
      if (stringMode)
        ret = '';
      else
        ret = new Buffer(n);

      var c = 0;
      for (var i = 0, l = list.length; i < l && c < n; i++) {
        var buf = list[0];
        var cpy = Math.min(n - c, buf.length);

        if (stringMode)
          ret += buf.slice(0, cpy);
        else
          buf.copy(ret, c, 0, cpy);

        if (cpy < buf.length)
          list[0] = buf.slice(cpy);
        else
          list.shift();

        c += cpy;
      }
    }
  }

  return ret;
}

function endReadable(stream) {
  var state = stream._readableState;

  // If we get here before consuming all the bytes, then that is a
  // bug in node.  Should never happen.
  if (state.length > 0)
    throw new Error('endReadable called on non-empty stream');

  if (!state.endEmitted) {
    state.ended = true;
    process.nextTick(function() {
      // Check that we didn't get one last unshift.
      if (!state.endEmitted && state.length === 0) {
        state.endEmitted = true;
        stream.readable = false;
        stream.emit('end');
      }
    });
  }
}

function forEach (xs, f) {
  for (var i = 0, l = xs.length; i < l; i++) {
    f(xs[i], i);
  }
}

function indexOf (xs, x) {
  for (var i = 0, l = xs.length; i < l; i++) {
    if (xs[i] === x) return i;
  }
  return -1;
}

}).call(this,require('_process'))

},{"./_stream_duplex":"/Users/jrmerz/dev/cstars/AHB/farm-budgets-app/node_modules/stream-browserify/node_modules/readable-stream/lib/_stream_duplex.js","_process":"/Users/jrmerz/dev/cstars/AHB/farm-budgets-app/node_modules/process/browser.js","buffer":"/Users/jrmerz/dev/cstars/AHB/farm-budgets-app/node_modules/buffer/index.js","core-util-is":"/Users/jrmerz/dev/cstars/AHB/farm-budgets-app/node_modules/core-util-is/lib/util.js","events":"/Users/jrmerz/dev/cstars/AHB/farm-budgets-app/node_modules/events/events.js","inherits":"/Users/jrmerz/dev/cstars/AHB/farm-budgets-app/node_modules/inherits/inherits_browser.js","isarray":"/Users/jrmerz/dev/cstars/AHB/farm-budgets-app/node_modules/isarray/index.js","stream":"/Users/jrmerz/dev/cstars/AHB/farm-budgets-app/node_modules/stream-browserify/index.js","string_decoder/":"/Users/jrmerz/dev/cstars/AHB/farm-budgets-app/node_modules/string_decoder/index.js","util":"/Users/jrmerz/dev/cstars/AHB/farm-budgets-app/node_modules/browser-resolve/empty.js"}],"/Users/jrmerz/dev/cstars/AHB/farm-budgets-app/node_modules/stream-browserify/node_modules/readable-stream/lib/_stream_transform.js":[function(require,module,exports){
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


// a transform stream is a readable/writable stream where you do
// something with the data.  Sometimes it's called a "filter",
// but that's not a great name for it, since that implies a thing where
// some bits pass through, and others are simply ignored.  (That would
// be a valid example of a transform, of course.)
//
// While the output is causally related to the input, it's not a
// necessarily symmetric or synchronous transformation.  For example,
// a zlib stream might take multiple plain-text writes(), and then
// emit a single compressed chunk some time in the future.
//
// Here's how this works:
//
// The Transform stream has all the aspects of the readable and writable
// stream classes.  When you write(chunk), that calls _write(chunk,cb)
// internally, and returns false if there's a lot of pending writes
// buffered up.  When you call read(), that calls _read(n) until
// there's enough pending readable data buffered up.
//
// In a transform stream, the written data is placed in a buffer.  When
// _read(n) is called, it transforms the queued up data, calling the
// buffered _write cb's as it consumes chunks.  If consuming a single
// written chunk would result in multiple output chunks, then the first
// outputted bit calls the readcb, and subsequent chunks just go into
// the read buffer, and will cause it to emit 'readable' if necessary.
//
// This way, back-pressure is actually determined by the reading side,
// since _read has to be called to start processing a new chunk.  However,
// a pathological inflate type of transform can cause excessive buffering
// here.  For example, imagine a stream where every byte of input is
// interpreted as an integer from 0-255, and then results in that many
// bytes of output.  Writing the 4 bytes {ff,ff,ff,ff} would result in
// 1kb of data being output.  In this case, you could write a very small
// amount of input, and end up with a very large amount of output.  In
// such a pathological inflating mechanism, there'd be no way to tell
// the system to stop doing the transform.  A single 4MB write could
// cause the system to run out of memory.
//
// However, even in such a pathological case, only a single written chunk
// would be consumed, and then the rest would wait (un-transformed) until
// the results of the previous transformed chunk were consumed.

module.exports = Transform;

var Duplex = require('./_stream_duplex');

/*<replacement>*/
var util = require('core-util-is');
util.inherits = require('inherits');
/*</replacement>*/

util.inherits(Transform, Duplex);


function TransformState(options, stream) {
  this.afterTransform = function(er, data) {
    return afterTransform(stream, er, data);
  };

  this.needTransform = false;
  this.transforming = false;
  this.writecb = null;
  this.writechunk = null;
}

function afterTransform(stream, er, data) {
  var ts = stream._transformState;
  ts.transforming = false;

  var cb = ts.writecb;

  if (!cb)
    return stream.emit('error', new Error('no writecb in Transform class'));

  ts.writechunk = null;
  ts.writecb = null;

  if (!util.isNullOrUndefined(data))
    stream.push(data);

  if (cb)
    cb(er);

  var rs = stream._readableState;
  rs.reading = false;
  if (rs.needReadable || rs.length < rs.highWaterMark) {
    stream._read(rs.highWaterMark);
  }
}


function Transform(options) {
  if (!(this instanceof Transform))
    return new Transform(options);

  Duplex.call(this, options);

  this._transformState = new TransformState(options, this);

  // when the writable side finishes, then flush out anything remaining.
  var stream = this;

  // start out asking for a readable event once data is transformed.
  this._readableState.needReadable = true;

  // we have implemented the _read method, and done the other things
  // that Readable wants before the first _read call, so unset the
  // sync guard flag.
  this._readableState.sync = false;

  this.once('prefinish', function() {
    if (util.isFunction(this._flush))
      this._flush(function(er) {
        done(stream, er);
      });
    else
      done(stream);
  });
}

Transform.prototype.push = function(chunk, encoding) {
  this._transformState.needTransform = false;
  return Duplex.prototype.push.call(this, chunk, encoding);
};

// This is the part where you do stuff!
// override this function in implementation classes.
// 'chunk' is an input chunk.
//
// Call `push(newChunk)` to pass along transformed output
// to the readable side.  You may call 'push' zero or more times.
//
// Call `cb(err)` when you are done with this chunk.  If you pass
// an error, then that'll put the hurt on the whole operation.  If you
// never call cb(), then you'll never get another chunk.
Transform.prototype._transform = function(chunk, encoding, cb) {
  throw new Error('not implemented');
};

Transform.prototype._write = function(chunk, encoding, cb) {
  var ts = this._transformState;
  ts.writecb = cb;
  ts.writechunk = chunk;
  ts.writeencoding = encoding;
  if (!ts.transforming) {
    var rs = this._readableState;
    if (ts.needTransform ||
        rs.needReadable ||
        rs.length < rs.highWaterMark)
      this._read(rs.highWaterMark);
  }
};

// Doesn't matter what the args are here.
// _transform does all the work.
// That we got here means that the readable side wants more data.
Transform.prototype._read = function(n) {
  var ts = this._transformState;

  if (!util.isNull(ts.writechunk) && ts.writecb && !ts.transforming) {
    ts.transforming = true;
    this._transform(ts.writechunk, ts.writeencoding, ts.afterTransform);
  } else {
    // mark that we need a transform, so that any data that comes in
    // will get processed, now that we've asked for it.
    ts.needTransform = true;
  }
};


function done(stream, er) {
  if (er)
    return stream.emit('error', er);

  // if there's nothing in the write buffer, then that means
  // that nothing more will ever be provided
  var ws = stream._writableState;
  var ts = stream._transformState;

  if (ws.length)
    throw new Error('calling transform done when ws.length != 0');

  if (ts.transforming)
    throw new Error('calling transform done when still transforming');

  return stream.push(null);
}

},{"./_stream_duplex":"/Users/jrmerz/dev/cstars/AHB/farm-budgets-app/node_modules/stream-browserify/node_modules/readable-stream/lib/_stream_duplex.js","core-util-is":"/Users/jrmerz/dev/cstars/AHB/farm-budgets-app/node_modules/core-util-is/lib/util.js","inherits":"/Users/jrmerz/dev/cstars/AHB/farm-budgets-app/node_modules/inherits/inherits_browser.js"}],"/Users/jrmerz/dev/cstars/AHB/farm-budgets-app/node_modules/stream-browserify/node_modules/readable-stream/lib/_stream_writable.js":[function(require,module,exports){
(function (process){
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

// A bit simpler than readable streams.
// Implement an async ._write(chunk, cb), and it'll handle all
// the drain event emission and buffering.

module.exports = Writable;

/*<replacement>*/
var Buffer = require('buffer').Buffer;
/*</replacement>*/

Writable.WritableState = WritableState;


/*<replacement>*/
var util = require('core-util-is');
util.inherits = require('inherits');
/*</replacement>*/

var Stream = require('stream');

util.inherits(Writable, Stream);

function WriteReq(chunk, encoding, cb) {
  this.chunk = chunk;
  this.encoding = encoding;
  this.callback = cb;
}

function WritableState(options, stream) {
  var Duplex = require('./_stream_duplex');

  options = options || {};

  // the point at which write() starts returning false
  // Note: 0 is a valid value, means that we always return false if
  // the entire buffer is not flushed immediately on write()
  var hwm = options.highWaterMark;
  var defaultHwm = options.objectMode ? 16 : 16 * 1024;
  this.highWaterMark = (hwm || hwm === 0) ? hwm : defaultHwm;

  // object stream flag to indicate whether or not this stream
  // contains buffers or objects.
  this.objectMode = !!options.objectMode;

  if (stream instanceof Duplex)
    this.objectMode = this.objectMode || !!options.writableObjectMode;

  // cast to ints.
  this.highWaterMark = ~~this.highWaterMark;

  this.needDrain = false;
  // at the start of calling end()
  this.ending = false;
  // when end() has been called, and returned
  this.ended = false;
  // when 'finish' is emitted
  this.finished = false;

  // should we decode strings into buffers before passing to _write?
  // this is here so that some node-core streams can optimize string
  // handling at a lower level.
  var noDecode = options.decodeStrings === false;
  this.decodeStrings = !noDecode;

  // Crypto is kind of old and crusty.  Historically, its default string
  // encoding is 'binary' so we have to make this configurable.
  // Everything else in the universe uses 'utf8', though.
  this.defaultEncoding = options.defaultEncoding || 'utf8';

  // not an actual buffer we keep track of, but a measurement
  // of how much we're waiting to get pushed to some underlying
  // socket or file.
  this.length = 0;

  // a flag to see when we're in the middle of a write.
  this.writing = false;

  // when true all writes will be buffered until .uncork() call
  this.corked = 0;

  // a flag to be able to tell if the onwrite cb is called immediately,
  // or on a later tick.  We set this to true at first, because any
  // actions that shouldn't happen until "later" should generally also
  // not happen before the first write call.
  this.sync = true;

  // a flag to know if we're processing previously buffered items, which
  // may call the _write() callback in the same tick, so that we don't
  // end up in an overlapped onwrite situation.
  this.bufferProcessing = false;

  // the callback that's passed to _write(chunk,cb)
  this.onwrite = function(er) {
    onwrite(stream, er);
  };

  // the callback that the user supplies to write(chunk,encoding,cb)
  this.writecb = null;

  // the amount that is being written when _write is called.
  this.writelen = 0;

  this.buffer = [];

  // number of pending user-supplied write callbacks
  // this must be 0 before 'finish' can be emitted
  this.pendingcb = 0;

  // emit prefinish if the only thing we're waiting for is _write cbs
  // This is relevant for synchronous Transform streams
  this.prefinished = false;

  // True if the error was already emitted and should not be thrown again
  this.errorEmitted = false;
}

function Writable(options) {
  var Duplex = require('./_stream_duplex');

  // Writable ctor is applied to Duplexes, though they're not
  // instanceof Writable, they're instanceof Readable.
  if (!(this instanceof Writable) && !(this instanceof Duplex))
    return new Writable(options);

  this._writableState = new WritableState(options, this);

  // legacy.
  this.writable = true;

  Stream.call(this);
}

// Otherwise people can pipe Writable streams, which is just wrong.
Writable.prototype.pipe = function() {
  this.emit('error', new Error('Cannot pipe. Not readable.'));
};


function writeAfterEnd(stream, state, cb) {
  var er = new Error('write after end');
  // TODO: defer error events consistently everywhere, not just the cb
  stream.emit('error', er);
  process.nextTick(function() {
    cb(er);
  });
}

// If we get something that is not a buffer, string, null, or undefined,
// and we're not in objectMode, then that's an error.
// Otherwise stream chunks are all considered to be of length=1, and the
// watermarks determine how many objects to keep in the buffer, rather than
// how many bytes or characters.
function validChunk(stream, state, chunk, cb) {
  var valid = true;
  if (!util.isBuffer(chunk) &&
      !util.isString(chunk) &&
      !util.isNullOrUndefined(chunk) &&
      !state.objectMode) {
    var er = new TypeError('Invalid non-string/buffer chunk');
    stream.emit('error', er);
    process.nextTick(function() {
      cb(er);
    });
    valid = false;
  }
  return valid;
}

Writable.prototype.write = function(chunk, encoding, cb) {
  var state = this._writableState;
  var ret = false;

  if (util.isFunction(encoding)) {
    cb = encoding;
    encoding = null;
  }

  if (util.isBuffer(chunk))
    encoding = 'buffer';
  else if (!encoding)
    encoding = state.defaultEncoding;

  if (!util.isFunction(cb))
    cb = function() {};

  if (state.ended)
    writeAfterEnd(this, state, cb);
  else if (validChunk(this, state, chunk, cb)) {
    state.pendingcb++;
    ret = writeOrBuffer(this, state, chunk, encoding, cb);
  }

  return ret;
};

Writable.prototype.cork = function() {
  var state = this._writableState;

  state.corked++;
};

Writable.prototype.uncork = function() {
  var state = this._writableState;

  if (state.corked) {
    state.corked--;

    if (!state.writing &&
        !state.corked &&
        !state.finished &&
        !state.bufferProcessing &&
        state.buffer.length)
      clearBuffer(this, state);
  }
};

function decodeChunk(state, chunk, encoding) {
  if (!state.objectMode &&
      state.decodeStrings !== false &&
      util.isString(chunk)) {
    chunk = new Buffer(chunk, encoding);
  }
  return chunk;
}

// if we're already writing something, then just put this
// in the queue, and wait our turn.  Otherwise, call _write
// If we return false, then we need a drain event, so set that flag.
function writeOrBuffer(stream, state, chunk, encoding, cb) {
  chunk = decodeChunk(state, chunk, encoding);
  if (util.isBuffer(chunk))
    encoding = 'buffer';
  var len = state.objectMode ? 1 : chunk.length;

  state.length += len;

  var ret = state.length < state.highWaterMark;
  // we must ensure that previous needDrain will not be reset to false.
  if (!ret)
    state.needDrain = true;

  if (state.writing || state.corked)
    state.buffer.push(new WriteReq(chunk, encoding, cb));
  else
    doWrite(stream, state, false, len, chunk, encoding, cb);

  return ret;
}

function doWrite(stream, state, writev, len, chunk, encoding, cb) {
  state.writelen = len;
  state.writecb = cb;
  state.writing = true;
  state.sync = true;
  if (writev)
    stream._writev(chunk, state.onwrite);
  else
    stream._write(chunk, encoding, state.onwrite);
  state.sync = false;
}

function onwriteError(stream, state, sync, er, cb) {
  if (sync)
    process.nextTick(function() {
      state.pendingcb--;
      cb(er);
    });
  else {
    state.pendingcb--;
    cb(er);
  }

  stream._writableState.errorEmitted = true;
  stream.emit('error', er);
}

function onwriteStateUpdate(state) {
  state.writing = false;
  state.writecb = null;
  state.length -= state.writelen;
  state.writelen = 0;
}

function onwrite(stream, er) {
  var state = stream._writableState;
  var sync = state.sync;
  var cb = state.writecb;

  onwriteStateUpdate(state);

  if (er)
    onwriteError(stream, state, sync, er, cb);
  else {
    // Check if we're actually ready to finish, but don't emit yet
    var finished = needFinish(stream, state);

    if (!finished &&
        !state.corked &&
        !state.bufferProcessing &&
        state.buffer.length) {
      clearBuffer(stream, state);
    }

    if (sync) {
      process.nextTick(function() {
        afterWrite(stream, state, finished, cb);
      });
    } else {
      afterWrite(stream, state, finished, cb);
    }
  }
}

function afterWrite(stream, state, finished, cb) {
  if (!finished)
    onwriteDrain(stream, state);
  state.pendingcb--;
  cb();
  finishMaybe(stream, state);
}

// Must force callback to be called on nextTick, so that we don't
// emit 'drain' before the write() consumer gets the 'false' return
// value, and has a chance to attach a 'drain' listener.
function onwriteDrain(stream, state) {
  if (state.length === 0 && state.needDrain) {
    state.needDrain = false;
    stream.emit('drain');
  }
}


// if there's something in the buffer waiting, then process it
function clearBuffer(stream, state) {
  state.bufferProcessing = true;

  if (stream._writev && state.buffer.length > 1) {
    // Fast case, write everything using _writev()
    var cbs = [];
    for (var c = 0; c < state.buffer.length; c++)
      cbs.push(state.buffer[c].callback);

    // count the one we are adding, as well.
    // TODO(isaacs) clean this up
    state.pendingcb++;
    doWrite(stream, state, true, state.length, state.buffer, '', function(err) {
      for (var i = 0; i < cbs.length; i++) {
        state.pendingcb--;
        cbs[i](err);
      }
    });

    // Clear buffer
    state.buffer = [];
  } else {
    // Slow case, write chunks one-by-one
    for (var c = 0; c < state.buffer.length; c++) {
      var entry = state.buffer[c];
      var chunk = entry.chunk;
      var encoding = entry.encoding;
      var cb = entry.callback;
      var len = state.objectMode ? 1 : chunk.length;

      doWrite(stream, state, false, len, chunk, encoding, cb);

      // if we didn't call the onwrite immediately, then
      // it means that we need to wait until it does.
      // also, that means that the chunk and cb are currently
      // being processed, so move the buffer counter past them.
      if (state.writing) {
        c++;
        break;
      }
    }

    if (c < state.buffer.length)
      state.buffer = state.buffer.slice(c);
    else
      state.buffer.length = 0;
  }

  state.bufferProcessing = false;
}

Writable.prototype._write = function(chunk, encoding, cb) {
  cb(new Error('not implemented'));

};

Writable.prototype._writev = null;

Writable.prototype.end = function(chunk, encoding, cb) {
  var state = this._writableState;

  if (util.isFunction(chunk)) {
    cb = chunk;
    chunk = null;
    encoding = null;
  } else if (util.isFunction(encoding)) {
    cb = encoding;
    encoding = null;
  }

  if (!util.isNullOrUndefined(chunk))
    this.write(chunk, encoding);

  // .end() fully uncorks
  if (state.corked) {
    state.corked = 1;
    this.uncork();
  }

  // ignore unnecessary end() calls.
  if (!state.ending && !state.finished)
    endWritable(this, state, cb);
};


function needFinish(stream, state) {
  return (state.ending &&
          state.length === 0 &&
          !state.finished &&
          !state.writing);
}

function prefinish(stream, state) {
  if (!state.prefinished) {
    state.prefinished = true;
    stream.emit('prefinish');
  }
}

function finishMaybe(stream, state) {
  var need = needFinish(stream, state);
  if (need) {
    if (state.pendingcb === 0) {
      prefinish(stream, state);
      state.finished = true;
      stream.emit('finish');
    } else
      prefinish(stream, state);
  }
  return need;
}

function endWritable(stream, state, cb) {
  state.ending = true;
  finishMaybe(stream, state);
  if (cb) {
    if (state.finished)
      process.nextTick(cb);
    else
      stream.once('finish', cb);
  }
  state.ended = true;
}

}).call(this,require('_process'))

},{"./_stream_duplex":"/Users/jrmerz/dev/cstars/AHB/farm-budgets-app/node_modules/stream-browserify/node_modules/readable-stream/lib/_stream_duplex.js","_process":"/Users/jrmerz/dev/cstars/AHB/farm-budgets-app/node_modules/process/browser.js","buffer":"/Users/jrmerz/dev/cstars/AHB/farm-budgets-app/node_modules/buffer/index.js","core-util-is":"/Users/jrmerz/dev/cstars/AHB/farm-budgets-app/node_modules/core-util-is/lib/util.js","inherits":"/Users/jrmerz/dev/cstars/AHB/farm-budgets-app/node_modules/inherits/inherits_browser.js","stream":"/Users/jrmerz/dev/cstars/AHB/farm-budgets-app/node_modules/stream-browserify/index.js"}],"/Users/jrmerz/dev/cstars/AHB/farm-budgets-app/node_modules/stream-browserify/node_modules/readable-stream/passthrough.js":[function(require,module,exports){
module.exports = require("./lib/_stream_passthrough.js")

},{"./lib/_stream_passthrough.js":"/Users/jrmerz/dev/cstars/AHB/farm-budgets-app/node_modules/stream-browserify/node_modules/readable-stream/lib/_stream_passthrough.js"}],"/Users/jrmerz/dev/cstars/AHB/farm-budgets-app/node_modules/stream-browserify/node_modules/readable-stream/readable.js":[function(require,module,exports){
exports = module.exports = require('./lib/_stream_readable.js');
exports.Stream = require('stream');
exports.Readable = exports;
exports.Writable = require('./lib/_stream_writable.js');
exports.Duplex = require('./lib/_stream_duplex.js');
exports.Transform = require('./lib/_stream_transform.js');
exports.PassThrough = require('./lib/_stream_passthrough.js');

},{"./lib/_stream_duplex.js":"/Users/jrmerz/dev/cstars/AHB/farm-budgets-app/node_modules/stream-browserify/node_modules/readable-stream/lib/_stream_duplex.js","./lib/_stream_passthrough.js":"/Users/jrmerz/dev/cstars/AHB/farm-budgets-app/node_modules/stream-browserify/node_modules/readable-stream/lib/_stream_passthrough.js","./lib/_stream_readable.js":"/Users/jrmerz/dev/cstars/AHB/farm-budgets-app/node_modules/stream-browserify/node_modules/readable-stream/lib/_stream_readable.js","./lib/_stream_transform.js":"/Users/jrmerz/dev/cstars/AHB/farm-budgets-app/node_modules/stream-browserify/node_modules/readable-stream/lib/_stream_transform.js","./lib/_stream_writable.js":"/Users/jrmerz/dev/cstars/AHB/farm-budgets-app/node_modules/stream-browserify/node_modules/readable-stream/lib/_stream_writable.js","stream":"/Users/jrmerz/dev/cstars/AHB/farm-budgets-app/node_modules/stream-browserify/index.js"}],"/Users/jrmerz/dev/cstars/AHB/farm-budgets-app/node_modules/stream-browserify/node_modules/readable-stream/transform.js":[function(require,module,exports){
module.exports = require("./lib/_stream_transform.js")

},{"./lib/_stream_transform.js":"/Users/jrmerz/dev/cstars/AHB/farm-budgets-app/node_modules/stream-browserify/node_modules/readable-stream/lib/_stream_transform.js"}],"/Users/jrmerz/dev/cstars/AHB/farm-budgets-app/node_modules/stream-browserify/node_modules/readable-stream/writable.js":[function(require,module,exports){
module.exports = require("./lib/_stream_writable.js")

},{"./lib/_stream_writable.js":"/Users/jrmerz/dev/cstars/AHB/farm-budgets-app/node_modules/stream-browserify/node_modules/readable-stream/lib/_stream_writable.js"}],"/Users/jrmerz/dev/cstars/AHB/farm-budgets-app/node_modules/string_decoder/index.js":[function(require,module,exports){
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

var Buffer = require('buffer').Buffer;

var isBufferEncoding = Buffer.isEncoding
  || function(encoding) {
       switch (encoding && encoding.toLowerCase()) {
         case 'hex': case 'utf8': case 'utf-8': case 'ascii': case 'binary': case 'base64': case 'ucs2': case 'ucs-2': case 'utf16le': case 'utf-16le': case 'raw': return true;
         default: return false;
       }
     }


function assertEncoding(encoding) {
  if (encoding && !isBufferEncoding(encoding)) {
    throw new Error('Unknown encoding: ' + encoding);
  }
}

// StringDecoder provides an interface for efficiently splitting a series of
// buffers into a series of JS strings without breaking apart multi-byte
// characters. CESU-8 is handled as part of the UTF-8 encoding.
//
// @TODO Handling all encodings inside a single object makes it very difficult
// to reason about this code, so it should be split up in the future.
// @TODO There should be a utf8-strict encoding that rejects invalid UTF-8 code
// points as used by CESU-8.
var StringDecoder = exports.StringDecoder = function(encoding) {
  this.encoding = (encoding || 'utf8').toLowerCase().replace(/[-_]/, '');
  assertEncoding(encoding);
  switch (this.encoding) {
    case 'utf8':
      // CESU-8 represents each of Surrogate Pair by 3-bytes
      this.surrogateSize = 3;
      break;
    case 'ucs2':
    case 'utf16le':
      // UTF-16 represents each of Surrogate Pair by 2-bytes
      this.surrogateSize = 2;
      this.detectIncompleteChar = utf16DetectIncompleteChar;
      break;
    case 'base64':
      // Base-64 stores 3 bytes in 4 chars, and pads the remainder.
      this.surrogateSize = 3;
      this.detectIncompleteChar = base64DetectIncompleteChar;
      break;
    default:
      this.write = passThroughWrite;
      return;
  }

  // Enough space to store all bytes of a single character. UTF-8 needs 4
  // bytes, but CESU-8 may require up to 6 (3 bytes per surrogate).
  this.charBuffer = new Buffer(6);
  // Number of bytes received for the current incomplete multi-byte character.
  this.charReceived = 0;
  // Number of bytes expected for the current incomplete multi-byte character.
  this.charLength = 0;
};


// write decodes the given buffer and returns it as JS string that is
// guaranteed to not contain any partial multi-byte characters. Any partial
// character found at the end of the buffer is buffered up, and will be
// returned when calling write again with the remaining bytes.
//
// Note: Converting a Buffer containing an orphan surrogate to a String
// currently works, but converting a String to a Buffer (via `new Buffer`, or
// Buffer#write) will replace incomplete surrogates with the unicode
// replacement character. See https://codereview.chromium.org/121173009/ .
StringDecoder.prototype.write = function(buffer) {
  var charStr = '';
  // if our last write ended with an incomplete multibyte character
  while (this.charLength) {
    // determine how many remaining bytes this buffer has to offer for this char
    var available = (buffer.length >= this.charLength - this.charReceived) ?
        this.charLength - this.charReceived :
        buffer.length;

    // add the new bytes to the char buffer
    buffer.copy(this.charBuffer, this.charReceived, 0, available);
    this.charReceived += available;

    if (this.charReceived < this.charLength) {
      // still not enough chars in this buffer? wait for more ...
      return '';
    }

    // remove bytes belonging to the current character from the buffer
    buffer = buffer.slice(available, buffer.length);

    // get the character that was split
    charStr = this.charBuffer.slice(0, this.charLength).toString(this.encoding);

    // CESU-8: lead surrogate (D800-DBFF) is also the incomplete character
    var charCode = charStr.charCodeAt(charStr.length - 1);
    if (charCode >= 0xD800 && charCode <= 0xDBFF) {
      this.charLength += this.surrogateSize;
      charStr = '';
      continue;
    }
    this.charReceived = this.charLength = 0;

    // if there are no more bytes in this buffer, just emit our char
    if (buffer.length === 0) {
      return charStr;
    }
    break;
  }

  // determine and set charLength / charReceived
  this.detectIncompleteChar(buffer);

  var end = buffer.length;
  if (this.charLength) {
    // buffer the incomplete character bytes we got
    buffer.copy(this.charBuffer, 0, buffer.length - this.charReceived, end);
    end -= this.charReceived;
  }

  charStr += buffer.toString(this.encoding, 0, end);

  var end = charStr.length - 1;
  var charCode = charStr.charCodeAt(end);
  // CESU-8: lead surrogate (D800-DBFF) is also the incomplete character
  if (charCode >= 0xD800 && charCode <= 0xDBFF) {
    var size = this.surrogateSize;
    this.charLength += size;
    this.charReceived += size;
    this.charBuffer.copy(this.charBuffer, size, 0, size);
    buffer.copy(this.charBuffer, 0, 0, size);
    return charStr.substring(0, end);
  }

  // or just emit the charStr
  return charStr;
};

// detectIncompleteChar determines if there is an incomplete UTF-8 character at
// the end of the given buffer. If so, it sets this.charLength to the byte
// length that character, and sets this.charReceived to the number of bytes
// that are available for this character.
StringDecoder.prototype.detectIncompleteChar = function(buffer) {
  // determine how many bytes we have to check at the end of this buffer
  var i = (buffer.length >= 3) ? 3 : buffer.length;

  // Figure out if one of the last i bytes of our buffer announces an
  // incomplete char.
  for (; i > 0; i--) {
    var c = buffer[buffer.length - i];

    // See http://en.wikipedia.org/wiki/UTF-8#Description

    // 110XXXXX
    if (i == 1 && c >> 5 == 0x06) {
      this.charLength = 2;
      break;
    }

    // 1110XXXX
    if (i <= 2 && c >> 4 == 0x0E) {
      this.charLength = 3;
      break;
    }

    // 11110XXX
    if (i <= 3 && c >> 3 == 0x1E) {
      this.charLength = 4;
      break;
    }
  }
  this.charReceived = i;
};

StringDecoder.prototype.end = function(buffer) {
  var res = '';
  if (buffer && buffer.length)
    res = this.write(buffer);

  if (this.charReceived) {
    var cr = this.charReceived;
    var buf = this.charBuffer;
    var enc = this.encoding;
    res += buf.slice(0, cr).toString(enc);
  }

  return res;
};

function passThroughWrite(buffer) {
  return buffer.toString(this.encoding);
}

function utf16DetectIncompleteChar(buffer) {
  this.charReceived = buffer.length % 2;
  this.charLength = this.charReceived ? 2 : 0;
}

function base64DetectIncompleteChar(buffer) {
  this.charReceived = buffer.length % 3;
  this.charLength = this.charReceived ? 3 : 0;
}

},{"buffer":"/Users/jrmerz/dev/cstars/AHB/farm-budgets-app/node_modules/buffer/index.js"}],"/Users/jrmerz/dev/cstars/AHB/farm-budgets-app/node_modules/vm-browserify/index.js":[function(require,module,exports){
var indexOf = require('indexof');

var Object_keys = function (obj) {
    if (Object.keys) return Object.keys(obj)
    else {
        var res = [];
        for (var key in obj) res.push(key)
        return res;
    }
};

var forEach = function (xs, fn) {
    if (xs.forEach) return xs.forEach(fn)
    else for (var i = 0; i < xs.length; i++) {
        fn(xs[i], i, xs);
    }
};

var defineProp = (function() {
    try {
        Object.defineProperty({}, '_', {});
        return function(obj, name, value) {
            Object.defineProperty(obj, name, {
                writable: true,
                enumerable: false,
                configurable: true,
                value: value
            })
        };
    } catch(e) {
        return function(obj, name, value) {
            obj[name] = value;
        };
    }
}());

var globals = ['Array', 'Boolean', 'Date', 'Error', 'EvalError', 'Function',
'Infinity', 'JSON', 'Math', 'NaN', 'Number', 'Object', 'RangeError',
'ReferenceError', 'RegExp', 'String', 'SyntaxError', 'TypeError', 'URIError',
'decodeURI', 'decodeURIComponent', 'encodeURI', 'encodeURIComponent', 'escape',
'eval', 'isFinite', 'isNaN', 'parseFloat', 'parseInt', 'undefined', 'unescape'];

function Context() {}
Context.prototype = {};

var Script = exports.Script = function NodeScript (code) {
    if (!(this instanceof Script)) return new Script(code);
    this.code = code;
};

Script.prototype.runInContext = function (context) {
    if (!(context instanceof Context)) {
        throw new TypeError("needs a 'context' argument.");
    }
    
    var iframe = document.createElement('iframe');
    if (!iframe.style) iframe.style = {};
    iframe.style.display = 'none';
    
    document.body.appendChild(iframe);
    
    var win = iframe.contentWindow;
    var wEval = win.eval, wExecScript = win.execScript;

    if (!wEval && wExecScript) {
        // win.eval() magically appears when this is called in IE:
        wExecScript.call(win, 'null');
        wEval = win.eval;
    }
    
    forEach(Object_keys(context), function (key) {
        win[key] = context[key];
    });
    forEach(globals, function (key) {
        if (context[key]) {
            win[key] = context[key];
        }
    });
    
    var winKeys = Object_keys(win);

    var res = wEval.call(win, this.code);
    
    forEach(Object_keys(win), function (key) {
        // Avoid copying circular objects like `top` and `window` by only
        // updating existing context properties or new properties in the `win`
        // that was only introduced after the eval.
        if (key in context || indexOf(winKeys, key) === -1) {
            context[key] = win[key];
        }
    });

    forEach(globals, function (key) {
        if (!(key in context)) {
            defineProp(context, key, win[key]);
        }
    });
    
    document.body.removeChild(iframe);
    
    return res;
};

Script.prototype.runInThisContext = function () {
    return eval(this.code); // maybe...
};

Script.prototype.runInNewContext = function (context) {
    var ctx = Script.createContext(context);
    var res = this.runInContext(ctx);

    forEach(Object_keys(ctx), function (key) {
        context[key] = ctx[key];
    });

    return res;
};

forEach(Object_keys(Script.prototype), function (name) {
    exports[name] = Script[name] = function (code) {
        var s = Script(code);
        return s[name].apply(s, [].slice.call(arguments, 1));
    };
});

exports.createScript = function (code) {
    return exports.Script(code);
};

exports.createContext = Script.createContext = function (context) {
    var copy = new Context();
    if(typeof context === 'object') {
        forEach(Object_keys(context), function (key) {
            copy[key] = context[key];
        });
    }
    return copy;
};

},{"indexof":"/Users/jrmerz/dev/cstars/AHB/farm-budgets-app/node_modules/indexof/index.js"}],"/Users/jrmerz/dev/cstars/AHB/farm-budgets-sdk/index.js":[function(require,module,exports){
var sdk = require('./lib');

module.exports = function(conf) {
  if( conf ) {
    sdk.config.host = conf.host;
    sdk.config.token = conf.token;
  }

  return sdk;
};

},{"./lib":"/Users/jrmerz/dev/cstars/AHB/farm-budgets-sdk/lib/index.js"}],"/Users/jrmerz/dev/cstars/AHB/farm-budgets-sdk/lib/changes/index.js":[function(require,module,exports){
'use strict';

var diff = require('deep-diff');
var extend = require('extend');
var events = require('events').EventEmitter;

events = new events();
events.setMaxListeners(1000);

var budgetTimer = -1;
var materialTimer = -1;

var checkList = {
  budget : [],
  simpleMaterial : [],
  complexMaterial : []
};

var original = {
  budget : {},
  materials : {},
  materialIds : {}
};

var differenceState = {
  budget : [],
  materialIds : [],
  materials : []
};

// list of unsaved materials
var unsaved = {};
if( typeof window !== 'undefined' ) {
  try {
    var t = window.localStorage.getItem('unsaved-materials');
    if( t ) unsaved = JSON.parse(t);
  } catch(e) {
    debugger;
    console.log(e);
  }
}


function setOriginal(budget, materials) {
  var i;
  original.materialIds = {};

  if( materials === undefined && budget.materials ) {
    original.budget = extend(true, {}, budget);

    materials = original.budget.materials;
    delete original.budget.materials;

    original.materials = {};

    for( i = 0; i < materials.length; i++ ) {
      // materials are already copied, no reason to re-extend
      original.materials[materials[i].id] = materials[i];
      original.materialIds[materials[i].id] = 1;
    }

  } else {
    if( !budget.operations ) {
      budget.operations = [];
    }

    for( var i = 0; i < budget.operations.length; i++ ) {
      if( !budget.operations[i].materials ) {
        budget.operations[i].materials = {};
      }
    }

    original.budget = extend(true, {}, budget);

    original.materials = {};
    for( i = 0; i < materials.length; i++ ) {
      original.materials[materials[i].id] = extend(true, {}, materials[i]);
      original.materialIds[materials[i].id] = 1;
    }
  }

  differenceState = {
    budget : [],
    materialIds : [],
    materials : []
  };

  events.emit('material-diff', []);
  events.emit('budget-diff', differenceState);
}

function updateMaterial(material, deleted) {
  if( deleted ) {
    delete original.materials[material.id];
    //delete original.materialIds[material.id];
    return;
  }

  original.materials[material.id] = material;
  //original.materialIds[material.id] = 1;
}

function checkMaterialsBuffered(materials) {
  if( materialTimer !== -1 ) {
    clearTimeout(materialTimer);
  }

  materialTimer = setTimeout(function(){
    materialTimer = -1;
    checkMaterials(materials);
  }, 100);
}


function checkMaterials(materials) {
  var differences = [], i;


  for( i = 0; i < materials.length; i++ ) {
    if( !materials[i].id ) {
      continue;
    }

    if( original.materials[materials[i].id] ) {
      var o = original.materials[materials[i].id];
      if( o.deleted && !materials[i].deleted ) {
        materials[i].deleted = true;
      } else if( !o.deleted && materials[i].deleted ) {
        o.deleted = true;
      }

      differences.push({
        id : materials[i].id,
        type : materials[i].type,
        updated : true,
        diff : diff(o, materials[i]) || []
      });
    }
  }

  // remove things we don't care about
  for( i = differences.length-1; i >= 0; i-- ) {
    if( !differences[i].diff ) {
      continue;
    }

    ignoreAttributes(differences[i].diff, differences[i].type === 'complex' ? checkList.complexMaterial : checkList.simpleMaterial);
    if( differences[i].diff.length === 0 ) {
      differences.splice(i, 1);
    }
  }

  differenceState.materials = differences;
  events.emit('material-diff', differences);
  return differences;
}


function checkBudgetBuffered(budget, materials) {
  if( budgetTimer !== -1 ) {
    clearTimeout(budgetTimer);
  }

  budgetTimer = setTimeout(function(){
    budgetTimer = -1;
    checkBudget(budget, materials);
  }, 100);
}


function checkBudget(budget, materials) {
  var differences = diff(original.budget, budget) || [];

  // remove things we don't care about
  ignoreAttributes(differences, checkList.budget);

  var ids = {};
  for( var i = 0; i < materials.length; i++ ) {
    if( !materials[i].id ) {
      continue;
    }
    ids[materials[i].id] = 1;
  }
  differenceState.materialIds = diff(original.materialIds, ids) || [];
  differenceState.budget = differences;

  events.emit('budget-diff', differenceState);
  return differences;
}

function ignoreAttributes(differences, list) {
  var i, j, path;
  for( i = differences.length-1; i >= 0; i-- ) {
    path = differences[i].path.join(',');
    var found = false;

    for( j = 0; j < list.length; j++ ) {
      if( list[j].test(path) ) {
        found = true;
        break;
      }
    }

    if( !found ) {
      differences.splice(i, 1);
    }
  }
}

function checkAll(budget, materials) {
  checkBudget(budget, materials);
  checkMaterials(materials);

  if( differenceState.budget.length > 0 || differenceState.materials.length > 0 || differenceState.materialIds.length > 0 ) {
    return true;
  }

  return false;
}

function getDifferences() {
  return differenceState;
}

function prep(schema) {
  prepSchema('', schema.budget, checkList.budget);
  prepSchema('', schema.material, checkList.simpleMaterial);
  prepSchema('', schema.complexMaterial, checkList.complexMaterial);
}

function prepSchema(path, schema, list) {
  var comma = path.length > 0 ? ',' : '';

  for( var key in schema ) {
    if( typeof schema[key] === 'string' ) {
      list.push(new RegExp('^'+path+comma+key+'$'));
      continue;
    }

    if( Array.isArray(schema[key]) ) {

      //if( path.length > 0 ) {
        list.push(new RegExp('^'+path+comma+key+'$'));
        prepSchema(path+comma+key+',.*', schema[key][0], list);
      //} else {
      //  prepSchema(key, schema[key][0], list);
      //}


    } else if( typeof schema[key] === 'object' ) {
      prepSchema(path+comma+key, schema[key], list);
    }
  }
}

function on(event, listener){
  events.on(event, listener);
}

function removeListener(event, listener){
  events.removeListener(event, listener);
}

function hasChanges(material) {
  if( material ) {
    if( !original.materials[material.id] ) {
      return null;
    }
    var d = diff(original.materials[material.id], material);
    if( d ) {
      ignoreAttributes(d, material.type === 'complex' ? checkList.complexMaterial : checkList.simpleMaterial);
      if( d.length === 0 ) {
        return null;
      }
    }
    return d;
  }

  for( var key in differenceState ) {
    if( differenceState[key].length > 0 ) {
      return true;
    }
  }
  if( Object.keys(unsaved).length > 0 ) {
    return true;
  }

  return false;
}

// this only removes material from original list,
// it does not touch the budget
function removeMaterial(material) {
  if( original.materials[material.id] ) {
    delete original.materials[material.id];
  }
}

function addMaterial(material) {
  original.materials[material.id] = material;
}

module.exports = {
  setOriginal : setOriginal,
  checkBudget : checkBudget,
  checkBudgetBuffered : checkBudgetBuffered,
  checkMaterials : checkMaterials,
  checkMaterialsBuffered : checkMaterialsBuffered,
  checkAll : checkAll,
  getDifferences : getDifferences,
  hasChanges : hasChanges,
  on : on,
  removeListener : removeListener,
  updateMaterial : updateMaterial,
  removeMaterial : removeMaterial,
  addMaterial : addMaterial,
  getOriginal : function() {
    return original;
  },
  setUnsaved : function(materials) {
    unsaved = materials;
  },
  getUnsaved : function() {
    return unsaved;
  },
  getEventsModule : function() {
    return events;
  },
};

 prep(require('../schema')());

},{"../schema":"/Users/jrmerz/dev/cstars/AHB/farm-budgets-sdk/lib/schema.js","deep-diff":"/Users/jrmerz/dev/cstars/AHB/farm-budgets-sdk/node_modules/deep-diff/index.js","events":"/Users/jrmerz/dev/cstars/AHB/farm-budgets-app/node_modules/events/events.js","extend":"/Users/jrmerz/dev/cstars/AHB/farm-budgets-sdk/node_modules/extend/index.js"}],"/Users/jrmerz/dev/cstars/AHB/farm-budgets-sdk/lib/classes/budget.js":[function(require,module,exports){
var extend = require('extend');
var verify = require('./utils').verify;
var rest = require('../rest');
var utils = require('../utils');
var units = require('../units');
var controllers = require('../controllers');
var Operation = require('./operation');
var Material = require('./material');

module.exports = function(data) {
  this.data = extend(true, {}, data);
  this.operations = [];

  if( !this.data.operations ) {
    this.data.operations = [];
  }
  if( !this.data.id ) {
    this.data.id = utils.guid();
  }

  for( var i = 0; i < this.data.operations.length; i++ ) {
    this.operations.push(new Operation(this.data.operations[i]));
  }

  controllers.operation.recalc();

  this.addOperation = function(name) {
    var op = new Operation({name: name});
    this.operations.push(op);
    return op;
  };

  this.getOperation = function(name) {
    if( name ) {
      var instances = [];

      for( var i = 0; i < this.operations.length; i++ ) {
        if( this.operations[i].getName() === name ) {
          instances.push(this.operations[i]);
        }
      }

      return instances;
    }

    return this.operations;
  };

  this.getFarm = function() {
    return this.data.farm;
  };
  this.setFarm = function(name, size, units) {
    if( !name ) throw(new Error('farm name required'));
    if( !size ) throw(new Error('farm size required'));
    if( !units ) throw(new Error('farm units required'));

    if( typeof name !== 'string' ) throw(new Error('farm name must be a string'));
    if( typeof size !== 'number' ) throw(new Error('size name must be a number'));
    if( typeof units !== 'string' ) throw(new Error('farm units must be a string'));

    try {
      units.ucumParse(units.cleanDollars(units));
    } catch(e) {
      throw(new Error('invalid units'));
    }

    this.data.farm = {
      name : name,
      size : size,
      units : units
    };
  };

  this.getAuthority = function() {
    return this.data.authority;
  };

  this.setAuthority = function(authority) {
    verify.authority(authority);
    this.data.authority = authority;
  };

  this.getLocality = function() {
    return this.data.locality;
  };

  this.setLocality = function(locality) {
    verify.locality(locality);
    this.data.locality = locality;
  };

  this.getName = function() {
    return this.data.name;
  };
  this.setName = function(name) {
    this.data.name = name;
  };

  this.getId = function() {
    return this.data.id;
  };

  this.setReference = function(budgetId) {
    this.data.refernce = budgetId;
  };
  this.getReference = function() {
    return this.data.reference;
  };
  this.isReference = function() {
    if( this.data.reference ) return true;
    return false;
  };

  this.isDeleted = function() {
    if( this.data.deleted ) return true;
    return false;
  };

  this.getCommodity = function() {
    return this.data.commodity;
  };
  this.setCommodity = function(commodity) {
    this.data.commodity = commodity;
  };

  this.addMaterial = function(material) {
    if( !(material instanceof Material) ) {
      throw(new Error('Object must be Material Class instance'));
    }

    if( !material.getId() ) {
      material.data.id = utils.guid();
    }

    controllers.material.add(material.data, {replace: true});
  };

  this.save = function(callback) {
    this.data.operations = [];
    this.operations.forEach(function(op) {
      this.data.operations.push(op.data);
    }.bind(this));

    rest.budgets.save(this.data, callback);
  };

};

},{"../controllers":"/Users/jrmerz/dev/cstars/AHB/farm-budgets-sdk/lib/controllers/index.js","../rest":"/Users/jrmerz/dev/cstars/AHB/farm-budgets-sdk/lib/rest/index.js","../units":"/Users/jrmerz/dev/cstars/AHB/farm-budgets-sdk/lib/units/index.js","../utils":"/Users/jrmerz/dev/cstars/AHB/farm-budgets-sdk/lib/utils/index.js","./material":"/Users/jrmerz/dev/cstars/AHB/farm-budgets-sdk/lib/classes/material.js","./operation":"/Users/jrmerz/dev/cstars/AHB/farm-budgets-sdk/lib/classes/operation.js","./utils":"/Users/jrmerz/dev/cstars/AHB/farm-budgets-sdk/lib/classes/utils/index.js","extend":"/Users/jrmerz/dev/cstars/AHB/farm-budgets-sdk/node_modules/extend/index.js"}],"/Users/jrmerz/dev/cstars/AHB/farm-budgets-sdk/lib/classes/material.js":[function(require,module,exports){
var extend = require('extend');
var units = require('../units');
var verify = require('./utils').verify;
var guid = require('../utils').guid;
var rest = require('../rest');

module.exports = function(data) {
  this.data = {};
  if( data ) {
    this.data = extend(true, {}, data);
  }
  if( !this.data.id ) {
    this.data.id = guid();
  }

  this.getId = function() {
    return this.data.id;
  };

  this.setName = function(name) {
    this.data.name = name;
  };

  this.getName = function() {
    return this.data.name;
  };

  this.getDescription = function() {
    return this.data.description;
  };

  this.setDescription = function(description) {
    this.description = description;
  };

  this.getUnits = function() {
    return this.data.units;
  };

  this.setUnits = function(units) {
    try {
      unitUtils.ucumParse(unitUtils.cleanDollars(units));
    } catch(e) {
      throw(new Error('invalid units'));
    }

    this.data.units = units;
  };

  this.getType = function() {
    return this.data.type;
  };

  this.setType = function(type) {
    this.data.type = type;
  };

  this.getPrice = function() {
    return this.data.price;
  };

  this.setPrice = function(price) {
    this.data.price = price;
  };

  this.getAuthority = function() {
    return this.data.authority;
  };

  this.setAuthority = function(authority) {
    verify.authority(authority);
    this.data.authority = authority;
  };

  this.getLocality = function() {
    return this.data.locality;
  };

  this.setLocality = function(locality) {
    verify.locality(locality);
    this.data.locality = locality;
  };

  this.getYear = function() {
    return this.data.year;
  };

  this.setYear = function(year) {
    this.data.year = year;
  };

  this.getSource = function() {
    return this.data.source;
  };

  this.setSource = function(source) {
    this.data.source = source;
  };

  this.getClass = function() {
    return this.data.class;
  };

  this.setClass = function(c) {
    this.data.class = c;
  };

  this.save = function(callback) {
    rest.materials.save(this.data, function(resp){
      if( !resp.error ) {
        // && this material is in the material controller, trigger update.
      }

      callback(resp);
    });
  };

};

},{"../rest":"/Users/jrmerz/dev/cstars/AHB/farm-budgets-sdk/lib/rest/index.js","../units":"/Users/jrmerz/dev/cstars/AHB/farm-budgets-sdk/lib/units/index.js","../utils":"/Users/jrmerz/dev/cstars/AHB/farm-budgets-sdk/lib/utils/index.js","./utils":"/Users/jrmerz/dev/cstars/AHB/farm-budgets-sdk/lib/classes/utils/index.js","extend":"/Users/jrmerz/dev/cstars/AHB/farm-budgets-sdk/node_modules/extend/index.js"}],"/Users/jrmerz/dev/cstars/AHB/farm-budgets-sdk/lib/classes/operation.js":[function(require,module,exports){
var extend = require('extend');
var unitUtils = require('../units');
var controllers = require('../controllers');

module.exports = function(data) {
  this.data = extend(true, {}, data);

  // update the operations controller
  // this will cause a recalc
  this.update = function() {
    controllers.operation.add(this.data, {replace: true});
  };

  this.schedule = function(startDate, length, units) {
    if( !startDate ) throw('startDate required');
    if( !length ) throw('length required');
    if( !units ) throw('units required');

    if( startDate instanceof Date ) {
      var m = startDate.getMonth()+1;
      var d = startDate.getDay();
      if( m < 10 ) m = '0'+m;
      if( d < 10 ) d = '0'+d;
      startDate = startDate.getFullYear()+'-'+m+'d';
    } else if( typeof startDate !== 'string' ) {
      throw('startDate must be of type string or date');
    }

    if( !startDate.match(/^\d\d\d\d-\d\d-\d\d/) ) {
      throw('invalid date format "'+startDate+'", should be: YYYY-MM-DD');
    }

    if( typeof length !== 'number' ) {
      throw('length must by of type number');
    }

    units = units.toLowerCase().trim();
    if( units !== 'year' && units !== 'month' && units !== 'day' ) {
      throw(new Error('units must be one of the following: year, month or day: '+units));
    }

    if( !this.data.schedule ) {
      this.data.schedule = [];
    }

    this.data.schedule.push({
      date : startDate,
      length : length+'',
      units : units
    });

    this.update();
  };

  this.unschedule = function(schedule) {
    if( !this.data.schedule ) return;

    if( typeof schedule === 'number' ) {
      this.data.schedule.splice(schedule, 1);
      this.update();
    } else if( typeof schedule === 'object' ) {
      var index = this.data.schedule.indexOf(schedule);
      if( index > -1 ) {
        this.data.schedule.splice(index, 1);
        this.update();
      }
    }

    return null;
  };

  this.getSchedule = function() {
    return this.data.schedule;
  };

  this.addRequiredMaterial = function(name, amount, units) {
    if( !name ) throw('material name required');
    if( !amount ) throw('material amount required');
    if( !units ) throw('material units required');

    if( typeof name !== 'string' ) throw('material name must be a string');
    if( typeof amount !== 'number' ) throw('material amount must be a number');
    if( typeof units !== 'string' ) throw('material units must be a string');

    try {
      unitUtils.ucumParse(unitUtils.cleanDollars(units));
    } catch(e) {
      console.log(e);
      throw('invalid units: '+units);
    }

    if( !this.data.materials ) {
      this.data.materials = [];
    }

    this.data.materials.push({
      name : name,
      amount : amount,
      units : units
    });

    this.update();
  };

  this.getRequiredMaterials = function() {
    return this.data.materials || [];
  };

  this.removeMaterial = function(index) {
    if( index < this.data.materials.length ) {
      this.data.materials.splice(index, 1);
    }

    this.update();
  };

  this.getName = function() {
    return this.data.name;
  };

  this.setName = function(name) {
    this.data.name = name;
  };

  this.getUnits = function() {
    return this.data.units;
  };

  this.setUnits = function(units) {
    try {
      unitUtils.ucumParse(unitUtils.cleanDollars(units));
    } catch(e) {
      throw('invalid units');
    }

    this.data.units = units;

    this.update();
  };
};

},{"../controllers":"/Users/jrmerz/dev/cstars/AHB/farm-budgets-sdk/lib/controllers/index.js","../units":"/Users/jrmerz/dev/cstars/AHB/farm-budgets-sdk/lib/units/index.js","extend":"/Users/jrmerz/dev/cstars/AHB/farm-budgets-sdk/node_modules/extend/index.js"}],"/Users/jrmerz/dev/cstars/AHB/farm-budgets-sdk/lib/classes/utils/index.js":[function(require,module,exports){

var api = {
  verify : require('./verify')
};

module.exports = api;

},{"./verify":"/Users/jrmerz/dev/cstars/AHB/farm-budgets-sdk/lib/classes/utils/verify.js"}],"/Users/jrmerz/dev/cstars/AHB/farm-budgets-sdk/lib/classes/utils/verify.js":[function(require,module,exports){
module.exports = {
  locality : function(locality) {
    if( typeof locality === 'string' ) {
      locality = [locality];
    }

    if( !Array.isArray(locality) ) {
      throw('locality must be an array');
    }

    for( var i = 0; i < locality.length; i++ ) {
      if( typeof locality[i] !== 'string' ) {
        throw('locality must be an array of strings');
      }

      // a little bit of cleanup as well.
      locality[i] = locality[i].toLowerCase().trim();
    }
  },

  authority : function(authority) {
    if( typeof authority !== 'string' ) throw('authority name must be a string');
  }
};

},{}],"/Users/jrmerz/dev/cstars/AHB/farm-budgets-sdk/lib/config.js":[function(require,module,exports){
var config = {
  host : '',
  token : ''
};

module.exports = config;

},{}],"/Users/jrmerz/dev/cstars/AHB/farm-budgets-sdk/lib/controllers/index.js":[function(require,module,exports){
var material = require('./material');
var operation = require('./operation');

operation.init(material);
var currentData = {};

/**
  Expects to rest payload looking like:
  data = {
    budget : {},
    materials : []
  }
**/
function load(data) {
  // by default adding/updating materials fires events and recalcs
  // budget.  We don't want to do this on initial load
  var options = {
    noEvent : true,
    noRecalc : true
  };

  data.materials.forEach(function(m){
    material.add(m, options);
  });

  material.recalc();

  operation.setFarmSize((data.budget.farm && data.budget.farm.size) ? parseInt(data.budget.farm.size) : 1);
  data.budget.operations.forEach(function(op){
    operation.add(op, options);
  });

  operation.recalc();

  currentData = data;
}

function set(data, soft) {
  reset(soft !== undefined ? soft : true);

  if( !data.budget.materials ) {
    data.budget.materials = [];
  }
  if( !data.budget.operations ) {
    data.budget.operations = [];
  }

  load(data);
}

function reset(soft) {
  operation.reset(soft);
  material.reset(soft);

  // tmp for now
  var fixed = ['Estimate', 'Taxes','Insurance','Capitol Cost Recover','Lube & Repairs'];
  for( var i = 0; i < fixed.length; i++ ) {
    material.add({
      name : fixed[i],
      price : 1,
      units : 'us$',
      fixed : true,
      description : 'Provide fixed cost for complex material'
    },{
      noEvent : true,
      noRecalc : true
    });
  }
}

var api = {
  material : material,
  operation : operation,
  load : load,
  set : set,
  reset : reset
};

module.exports = api;

},{"./material":"/Users/jrmerz/dev/cstars/AHB/farm-budgets-sdk/lib/controllers/material/index.js","./operation":"/Users/jrmerz/dev/cstars/AHB/farm-budgets-sdk/lib/controllers/operation/index.js"}],"/Users/jrmerz/dev/cstars/AHB/farm-budgets-sdk/lib/controllers/material/index.js":[function(require,module,exports){
'use strict';
/**
 * keeps track of materials, prices and complex materials.  mostly for client app.
 **/

var operationController = require('../operation');
var events = require('events').EventEmitter;
var units = require('../../units');
events = new events();
events.setMaxListeners(1000);

var operationUpdateHandler;


var debug = false;
var data = {};

function bind(handler) {
  operationUpdateHandler = handler;
  events.on('material-update', operationUpdateHandler);
}

function reset(softReset) {
  data = {};

  if( !softReset ) {
    events.removeAllListeners();
    if( operationUpdateHandler ) {
      events.on('material-update', operationUpdateHandler);
    }
  }
}

function remove(name, options) {
  if( !options ) {
    options = {};
  }

  if( data[name] ) {
    delete data[name];

    var e = {
      material : name,
      success : true
    };

    if( !options.noRecalc ) {
      recalc();
    }

    if( !options.noEvent ) {
      events.emit('material-removed', e);

      // fire update events on all materials using this material
      for( var key in data ) {
        if( !data[key].materials ) {
          continue;
        }

        e = {
          material : data[key],
          isNew : false,
          replaced : false,
          success : true,
          bulk: true
        };

        if( data[key].materials[name] ) {
          events.emit('material-update', e);
        }
      }

      operationController.recalc();
    }

    return e;
  }

  return setError(name, 'material '+name+' does not exist', 1);
}

function add(material, options) {
  if( !options ) {
    options = {};
  }

  if( data[material.name] && !options.replace ) {
    return setError(material.name, 'material already exists', 2);
  }

  var isNew = false;
  if( !data[material.name] ) {
    isNew = true;
  }

  if( !material.type ) {
    if( material.materials ) {
      material.type = 'complex';
    } else {
      material.type = 'simple';
    }
  }

  data[material.name] = material;

  if( options.rename ) {
    remove(options.rename, {noRecalc: true});
  }

  if( !options.noRecalc ) {
    recalc();
  }

  var response = {
    material : material,
    isNew : isNew,
    replaced : options.rename,
    flag : options.flag, // let the caller pass it's own flags
    success : true
  };

  if( !options.noEvent ) {
    events.emit('material-update', response);
  }

  return response;
}

function get(name) {
  if( !name ) {
    return data;
  }

  if( data[name] ) {
    return data[name];
  }

  return setError(name, name+' is not in the material list', 3);
}

function getById(id) {

  for( var key in data ) {
    if( data[key].id === id ) {
      return data[key];
    }
  }

  return setError(id, 'material id "'+id+'" is not in the material list', 5);
}

function asArray() {
  var arr = [], key;
  for( key in data ) {
    arr.push(data[key]);
  }
  return arr;
}

function find(txt, ignore) {
  var re = new RegExp('.*'+txt+'.*', 'i');
  var results = [], key;

  for( key in data ) {
    if( key.match(re) && key !== ignore ) {
      results.push(data[key]);
    }
  }

  for( var i = 0; i < results.length; i++ ) {
    if( results[i].name === txt ) {
      var m = results.splice(i, 1)[0];
      results.splice(0,0,m);
      break;
    }
  }

  return results;
}

// recalc all complex material costs
function recalc() {
  var t = new Date().getTime();

  var material, m;

  for( material in data ) {
    if( data[material].type !== 'complex' ) {
      continue;
    }

    data[material].price = null;
  }

  for( material in data ) {
    m = data[material];
    if( m.type !== 'complex' ) {
      continue;
    }

    if( m.price !== null ) {
        continue;
    }

    var resp = _recalc(m, [m.name]);
    m.price = resp.price;
    m.recalcErrors = resp.errors;
  }

  if( debug ) {
    console.log('Complex Material Recalc: '+(new Date().getTime() - t)+'ms');
  }
}

function _recalc(material, materialChain){
  var price = 0;
  var errors = [];

  for( var key in material.materials ) {
    var m;

    // check the unique list
    if( material.unique && material.unique[key] ) {
      m = {
        name : key,
        price : material.unique[key].price,
        units : material.unique[key].units
      };
    } else { // otherwise use this module to get a material
      m = get(key);
    }

    // if error finding material, set error on material reference and continue;
    if( m.error ) {
      setMaterialDefError(material.materials[key], m.message, errors, m.code);
      continue;
    }

    if( m.price === null && m.type === 'complex' ) {
      // make sure no recursion
      if( materialChain.indexOf(m.name) === -1 ) {
        var resp = _recalc(m, extendChain(materialChain, m.name));
        m.price = resp.price;
        m.recalcErrors = resp.errors;

        // This isn't working!?
        // errors.contact(resp.errors);
        if( resp.errors.length > 0 ) {
          setMaterialDefError(material.materials[key], m.name+' has errors', []);
          for( var i = 0; i < resp.errors.length; i++ ) {
            errors.push(resp.errors[i]);
          }
          continue;
        }

      } else {
        // BADNESS
        setMaterialDefError(material.materials[key], 'Recusive materials found, ignoring', errors);
        continue;
      }
    }

    // now actually calculate value
    var value = calculateComplexPrice(m, material.materials[m.name], material);

    if( value.error ) {
      setMaterialDefError(material.materials[m.name], value.message, errors);
    } else if( m.deleted ) {
      material.materials[key].error = true;
      material.materials[key].message = 'This material has been deleted';
      material.materials[key].code = 20;
      material.materials[m.name].price = value.value;
      errors.push('Material '+m.name+' has been deleted');
    } else {
      material.materials[key].error = null;
      material.materials[key].message = null;
      material.materials[key].code = null;
      material.materials[m.name].price = value.value;
    }

    price += material.materials[m.name].price;
  }

  return {
    price: price,
    errors : errors
  };
}

function setMaterialDefError(materialDef, msg, errors, code) {
  materialDef.price = 0;
  materialDef.error = true;
  materialDef.code = code;
  materialDef.message = msg;
  errors.push(msg);
}

function extendChain(chain, m) {
  var newChain = chain.slice();
  newChain.push(m);
  return newChain;
}

function materialRecalc(material) {
  if( typeof material !== 'object' ) {
    return;
  } else if( material.type !== 'complex' ) {
    return;
  }

  var resp = _recalc(material);
  material.price = resp.price;
  material.recalcErrors = resp.errors;
}

function getErrors() {
  var errors = [];

  for( var m in data.materials ) {
    if( data.materials[m].error ) {
      errors.push(data.materials[m]);
    }
  }

  for( var i in data.complex ) {
    if( data.complex[i].error ) {
      errors.push(data.complex[i]);
    } else {
      for( m in data.complex[i].materials ) {
        if( data.complex[i].materials[m].error ) {
          errors.push(data.complex[i]);
          break;
        }
      }
    }


    for( m in data.complex[i].materials ) {
      var material = get(m);
      if( material.error ) {
        material.from = data.complex[i];
        errors.push(material);
      }
    }
  }

  return errors;
}


function success() {
  return {success: true};
}

function setError(name, msg, code) {
  return {
    name : name,
    error : true,
    message : msg,
    code : code
  };
}

// does a material contain or have a dependency on a given material name
function contains(material, name, replaced) {
  if( material.name === name || material.name === replaced ) {
    return true;
  }

  if( material.type !== 'complex' || material.materials === undefined ) {
    return false;
  }

  for( var key in material.materials ) {
    if( key === name || key === replaced ) {
      return true;
    }

    var childContains = contains(get(key), name, replaced);
    if( childContains ) {
      return true;
    }
  }

  return false;
}

// convert units for complex materials
function calculateComplexPrice(materialDef, materialImpl) {

  var resp = units.conversionDiff(materialDef.units, materialImpl.units);
  if( resp.error ) {
    return resp;
  }

  var value = materialDef.price * resp.value * materialImpl.amount;

  resp = {
    success : true,
    debug : materialDef.price+' * '+resp.value+' * '+materialImpl.amount,
    value : value
  };

  return resp;
}


module.exports = {
  // add a material
  debug : function(d){
    debug = d;
  },
  add : add,
  get : get,
  asArray : asArray,
  remove : remove,
  find : find,
  getErrors : getErrors,
  on : function(event, listener){
    events.on(event, listener);
  },
  removeListener : function(event, listener){
    events.removeListener(event, listener);
  },
  // mostly for unit testing
  getEventsModule : function() {
    return events;
  },
  calculateComplexPrice : calculateComplexPrice,
  getById : getById,
  recalc : recalc,
  materialRecalc : materialRecalc,
  contains : contains,
  reset : reset,
  _bind : bind 
};

},{"../../units":"/Users/jrmerz/dev/cstars/AHB/farm-budgets-sdk/lib/units/index.js","../operation":"/Users/jrmerz/dev/cstars/AHB/farm-budgets-sdk/lib/controllers/operation/index.js","events":"/Users/jrmerz/dev/cstars/AHB/farm-budgets-app/node_modules/events/events.js"}],"/Users/jrmerz/dev/cstars/AHB/farm-budgets-sdk/lib/controllers/operation/index.js":[function(require,module,exports){
'use strict';
/**
 * keeps track of materials, prices and complex materials.  mostly for client app.
 **/
var uuid = require('node-uuid');
var units = require('../../units');
var utils = require('./utils');
var events = require('events').EventEmitter;
events = new events();
events.setMaxListeners(1000);

var debug = false;
var total = 0;
var farmSize = 1;
var currentTotal = null;
var data = [], materialController, lastRecalcMsg;

function init(controller) {
  materialController = controller;
  materialController._bind(handleMaterialUpdates);
  utils.init(this);
}

function reset(softReset) {
  total = 0;
  farmSize = 1;
  currentTotal = null;
  data = [];

  if( !softReset ) {
    events.removeAllListeners();
  }
}

function remove(name) {
  var op;

  if( typeof name === 'object' && data.indexOf(name) > -1 ) {
    op = data.splice(data.indexOf(name), 1)[0];
    fireUpdate('operation-removed', {operation: op});

    return success();
  } else {
    for( var i = 0; i < data.length; i++ ) {
      if( data[i].name === name  ) {
        op = data.splice(i, 1)[0];
        fireUpdate('operation-removed', {operation: op});
        return success();
      }
    }
  }

  return setError('operation '+(typeof name === 'object' ? name.name : name)+' does not exist');
}

function add(operation, options) {
  if( !options ) {
    options = {};
  }

  var op = get(operation.name);
  if( !op.error && !options.replace ) {
    return setError(operation.name, 'operation already exists');
  }

  if( !operation.materials ) {
    operation.materials = [];
  }

  var isNew = false;
  if( op.error ) {
    isNew = true;
    data.push(operation);
  } else {
    data[data.indexOf(op)] = operation;
  }

  if( options.rename ) {
    remove(options.rename);
  }

  if( !options.noRecalc ) {
    recalc();
  }

  // check operation materials and see if anything has been renamed.  change
  // name linking and fire event if so.
  for( var i = 0; i < operation.materials.length; i++ ) {
    var impl = operation.materials[i];
    if( !impl.id ) continue;

    var m = materialController.getById(impl.id);
    if( !m.error && impl.name !== m.name ) {
      var old = impl.name;
      impl.name = m.name;

      fireUpdate('operation-material-rename',{
        id : impl.id,
        old : old,
        new : m.name
      });
    }
  }

  var response = {
    operation : operation,
    isNew : isNew,
    replaced : options.rename,
    flag : options.flag, // let the caller pass it's own flags
    success : true,
    from : 'operation-add'
  };


  if( !options.noEvent ) {
    fireUpdate('operation-update', response);
  }

  return response;
}

// bulk add/update items with only one recalc
function bulkAdd(operations, options) {
  var addOptions = {}, i;
  for( var key in options ) {
    addOptions[key] = options;
  }

  addOptions.noRecalc = true;
  addOptions.noEvent = true;

  var responses = {};
  for( i = 0; i < operations.length; i++ ) {
    responses[operations[i].name] = add(operations[i], addOptions);
  }

  // now just recalc once
  recalc();

  for( i = 0; i < operations.length; i++ ) {
    if( responses[operations[i].name].error ) {
      continue;
    }
    responses[operations[i].name].bluk = true;
    fireUpdate('operation-update', responses[operations[i].name]);
  }

  return responses;
}

function get(name) {
  if( !name ) {
    return data;
  }

  for( var i = 0; i < data.length; i++ ) {
    if( data[i].name === name ) {
      return data[i];
    }
  }

  return setError(name+' is not in the operation list');
}

function find(txt, ignore) {
  var re = new RegExp('.*'+txt+'.*', 'i');
  var results = [], key;

  for( var i = 0; i < data.length; i++ ) {
    if( data[i].name.match(re) && data[i].name !== ignore ) {
      results.push(data[i]);
    }
  }

  return results;
}

// recalc all complex material costs
function recalc() {
  var t = new Date().getTime();

  var operation, messages = [];
  total = 0;
  var range = {
    start : null,
    stop : null,
    all : []
  };

  for( var i = 0; i < data.length; i++ ) {
    operation = data[i];
    var newMessages = operationRecalc(operation);
    for( var j = 0; j < newMessages.length; j++ ) {
      messages.push(newMessages[j]);
    }

    var scheduled = operation.schedule ? operation.schedule.length : 0;

    if( !operation.schedule ) {
      messages.push({
        index : i,
        operation : operation.name,
        warning : warn('No schedule set')
      });
    } else {
      updateScheduleRange(operation.schedule, range, operation.name);
    }

    operation.total = scheduled * operation.subtotal;
    total += operation.total;
  }


  var spendingByMonth = utils.calculatePerMonth(range);

  if( debug ) {
    console.log('Operation Recalc: '+(new Date().getTime() - t)+'ms');
  }

  currentTotal = {
    total : total,
    range : range,
    spendingByMonth : spendingByMonth
  };

  fireUpdate('total-update', currentTotal);

  lastRecalcMsg = messages;
  return messages;
}

function operationRecalc(operation) {
  var materialDef, materialImpl, opTotal = 0;
  var messages = [];

  for( var i = 0; i < operation.materials.length; i++ ) {
    materialImpl = operation.materials[i];
    materialImpl.error = null;

    materialDef = materialController.get(materialImpl.name);

    // was a specified material not found?
    if( materialDef.error ) {
      materialImpl.error = materialDef; // this is actually the error response object
      messages.push({
        id : materialImpl.id,
        material : materialImpl.name,
        operation : operation.name,
        error : materialDef
      });
      continue;
    }

    // was a material amount not specified?
    if( typeof materialDef.price !== 'number' || isNaN(materialDef.price) ) {
      materialImpl.error = setError(materialDef.name+' found but price is not a number.');
      messages.push({
        id : materialImpl.id,
        material : materialImpl.name,
        operation : operation.name,
        warning : materialImpl.error
      });
      continue;
    }

    if( materialDef.deleted ) {
      messages.push({
        operation : operation.name,
        material : materialImpl.name,
        id : materialImpl.id,
        error : 'Material has been deleted'
      });
    }

    // was a material amount not specified?
    if( materialImpl.amount === undefined ) {
      materialImpl.warning = warn('No amount set.  Setting to 1.');
      messages.push({
        id : materialImpl.id,
        material : materialImpl.name,
        operation : operation.name,
        warning : materialImpl.warning
      });
      materialImpl.amount = 1;
    }

    //var value = units.calculateOpMaterialPrice(materialDef, materialImpl);
    var value = materialController.calculateComplexPrice(materialDef, materialImpl);
    if( value.error ) {
      materialImpl.price = 0;
      materialImpl.error = value;
    } else {
      materialImpl.price = value.value;
    }

    // did something bad happen in price calculation?
    if( isNaN(materialImpl.price) ) {
      materialImpl.error = setError('Price calculated to NaN.  Material not included in total.');
      messages.push({
        operation : operation.name,
        material : materialImpl.name,
        id : materialImpl.id,
        error : materialImpl.error
      });
      continue;
    }

    opTotal += materialImpl.price;
  }

  operation.subtotal = opTotal;

  return messages;
}


function updateScheduleRange(schedule, range, name) {
  var parts, date;
  schedule.forEach(function(d){
    parts = d.date.split('-');
    date = new Date(parseInt(parts[0]), parseInt(parts[1])-1, parseInt(parts[2]));

    var interval = {
      date : date,
      length : d.length,
      units : d.units,
      name : name
    };

    range.all.push(interval);

    if( range.start === null ) {
      range.start = date;
    } else if( range.start.getTime() > date.getTime() ) {
      range.start = date;
    }

    var end = getStopDate(interval);
    if( range.stop === null ) {
      range.stop = end;
    } else if( range.stop.getTime() < end.getTime() ) {
      range.stop = end;
    }
  });
}

function getStopDate(interval) {
  var l = parseInt(interval.length);

  if( interval.units === 'year' ) {
    l = l * 86400000 * 365;
  } else if( interval.units === 'day' ) {
    l = l * 86400000;
  } else {
    l = l * 86400000 * 30;
  }

  return new Date(interval.date.getTime()+l);
}

function handleMaterialUpdates(e) {
  if( e.bulk ) {
    return; // ignore event from bluk updates
    // bluk updater will manually poke recalc();
  }

  var material = e.material;
  var replaced = e.replaced;

  recalc();

  for( var i = 0; i < data.length; i++ ) {
    var operation = data[i];
    var fireChange = false;

    for( var j = 0; j < operation.materials.length; j++ ) {
      var materialImpl = operation.materials[j];

      // update any renames
      if( materialImpl.name === replaced ) {
        materialImpl.name = material.name;
        fireChange = true;

      // look to see if this operation has the updated material
      // recursively check complex elements
      } else if( materialController.contains(materialImpl, material.name, replaced) ) {
          fireChange = true;
      }

      if( fireChange ) {
        fireUpdate('operation-update', {
          operation: operation,
          from : 'material-update'
        });
        break;
      }
    }
  }
}

function setFarmSize(size) {
  farmSize = size;
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
    warning : true,
    message : msg
  };
}

function getCurrentTotal() {
  return currentTotal;
}

function addUpdateMaterial(operation, material) {
  var resp = utils.addUpdateMaterial(operation, material);
  fireUpdate('material-added',{
    material : material.name,
    operation : operation.name
  });
  return resp;
}

// fire event and general update event
function fireUpdate(e, details) {
  // give UI a sec to run
  // TODO: this should not be the controllers reponsibility
  /*setTimeout(function(){
    if( e ) {
      events.emit(e,details);
    }
    events.emit('update');
  }, 100);*/
  if( e ) {
    events.emit(e,details);
  }
  events.emit('update');
}

module.exports = {
  add : add,
  get : get,
  remove : remove,
  bulkAdd : bulkAdd,
  find : find,
  on : function(event, listener){
    events.on(event, listener);
  },
  removeListener : function(event, listener){
    events.removeListener(event, listener);
  },
  recalc : recalc,
  init : init,
  getLastRecalcMsg : getLastRecalcMsg,
  addUpdateMaterial : addUpdateMaterial,
  replaceMaterial : utils.replaceMaterial,
  setFarmSize : setFarmSize,
  getCurrentTotal : getCurrentTotal,
  reset : reset,
  fireUpdate : fireUpdate,
  // mostly for unit testing
  getEventsModule : function() {
    return events;
  },
  debug : function(mode) {
    debug = mode;
  }
};

},{"../../units":"/Users/jrmerz/dev/cstars/AHB/farm-budgets-sdk/lib/units/index.js","./utils":"/Users/jrmerz/dev/cstars/AHB/farm-budgets-sdk/lib/controllers/operation/utils.js","events":"/Users/jrmerz/dev/cstars/AHB/farm-budgets-app/node_modules/events/events.js","node-uuid":"/Users/jrmerz/dev/cstars/AHB/farm-budgets-sdk/node_modules/node-uuid/uuid.js"}],"/Users/jrmerz/dev/cstars/AHB/farm-budgets-sdk/lib/controllers/operation/utils.js":[function(require,module,exports){
'use strict';

var uuid = require('node-uuid');
var operationController;
var msPerDay = 86400000;

function init(controller) {
  operationController = controller;
}

function addUpdateMaterial(operation, materialImpl) {
  // HACK
  // TODO: why is this an empty object sometimes?
  if( !operation.materials ) {
    operation.materials = [];
  } else if( !Array.isArray(operation.materials) ) {
    operation.materials = [];
  }

  if( !materialImpl.id ) {
    materialImpl.id = uuid.v4();
    operation.materials.push(materialImpl);
    return {success:true, message: 'added'};
  }

  for( var i = 0; i < operation.materials.length; i++ ) {
    if( operation.materials[i].id === materialImpl.id ) {
      operation.materials[i] = materialImpl;
      return {success:true, message: 'updated'};
    }
  }

  operation.materials.push(materialImpl);
  return {success:true, message: 'added'};
}

function replaceMaterial(materialName, newId) {
  var ops = operationController.get();

  for( var i = 0; i < ops.length; i++ ) {
    for( var j = 0; j < ops[i].materials.length; j++ ) {
      if( ops[i].materials[j].name === materialName ) {
        ops[i].materials[j].id = newId;
      }
    }
  }
}

function calculatePerMonth(range) {

  var numMonths = getNumMonths(range);

  var months = [];

  if( !range.start ) {
    return months;
  }

  var last = range.start;
  months.push({
    month : toMonthString(last),
    total : 0
  });

  for( var i = 1; i < numMonths; i++ ) {
    last = nextMonth(last);

    months.push({
      month : toMonthString(last),
      total : 0
    });
  }

  var operations = operationController.get();
  for( var z = 0; z < operations.length; z++ ) {
    var operation = operations[z];
    if( !operation.schedule ) {
      continue;
    }

    for( var j = 0; j < operation.schedule.length; j++ ) {
      var date = operation.schedule[j];

      var d = toDate(date.date);
      var index = getMonthIndex(toMonthString(d), months);
      var length = getIntervalTime(date);

      for( i = 0; i < length; i++ ) {
        if( months.length <= i+index ) {
          months.push({
            month : toMonthString(d),
            total : 0
          });
        }

        months[i+index].total += (operation.subtotal / length);
        months[i+index][operation.name] = operation.subtotal / length;
      }
    }
  }

  return months;
}

function getMonthIndex(month, months) {
  var t = new Date().getTime();
  for( var i = 0; i < months.length; i++ ) {
    if( months[i].month === month ) {
      return i;
    }
  }
  return 0;
}

function toDate(dateStr) {
  var parts = dateStr.split('-');
  return new Date(parseInt(parts[0]), parseInt(parts[1])-1, parseInt(parts[2]));
}

function toMonthString(date) {
  if( !date ) {
    return '1/1900';
  }
  return (date.getMonth()+1)+'/'+(date.getYear()+1900);
}

function nextMonth(date) {
  return new Date(date.getYear()+1900, date.getMonth()+1, date.getDate());
}

function getNumMonths(range) {
  if( !range.stop || !range.start ) {
    return 1;
  }

  var diff = range.stop.getTime() - range.start.getTime();
  if( diff < 86400000 * 30 ) {
    diff = 86400000 * 30;
  }

  // Months between years.
  var months = (range.stop.getFullYear() - range.start.getFullYear()) * 12;

  // Months between... months.
  months += range.stop.getMonth() - range.start.getMonth();

  // Subtract one month if b's date is less that a's.
  if (range.stop.getDate() < range.start.getDate()) {
      months--;
  }

  return months;

  //var days = diff / 86400000;
  //return Math.ceil(days / 30);
}

function getIntervalTime(date) {
  var l = parseInt(date.length);
  if( date.units === 'year' ) {
    return l * 12;
  } else if( date.units === 'month' ) {
    return l;
  } else {
    return 1;
  }
}

module.exports = {
  init : init,
  calculatePerMonth : calculatePerMonth,
  addUpdateMaterial : addUpdateMaterial,
  replaceMaterial : replaceMaterial
};

},{"node-uuid":"/Users/jrmerz/dev/cstars/AHB/farm-budgets-sdk/node_modules/node-uuid/uuid.js"}],"/Users/jrmerz/dev/cstars/AHB/farm-budgets-sdk/lib/index.js":[function(require,module,exports){
'use strict';

var rest = require('./rest');
var controllers = require('./controllers');
var utils = require('./utils');
var units = require('./units');
var changes = require('./changes');
var config = require('./config');
var schema = require('./schema');

var Budget = require('./classes/budget');
var Material = require('./classes/material');

var budget;

function loadBudget(id, callback) {
   rest.budgets.get(id, function(resp){
     if( resp.error ) {
       return callback(resp);
     }

     setBudget(resp);
     callback(budget);
   });
}

function setBudget(data) {
  controllers.set(data); // setup the operation and material controllers

  // create and return the helper budget class
  budget = new Budget(data.budget);
  return budget;
}

function loadMaterial(id, callback) {
   rest.materials.get(id, function(resp){
     if( resp.error ) {
       return callback(resp);
     }

     // create and return the helper budget class
     var material = new Material(resp);
     callback(material);
   });
}

function me() {
  return config.user;
}

function getTotal() {
  return controllers.operation.getCurrentTotal();
}

function reset() {
  var newData = {
    budget : {
      id : utils.guid(),
      authority : config.user ? config.user.email : '',
      locality : [],
      name : '',
      commodity : '',
      farm : {
        name : '',
        units : '[acr_us]',
        size : 1
      },
      operations : [],
    },
    materials : []
  };

  changes.setOriginal(newData.budget, newData.materials);
  controllers.set(newData);

  budget = new Budget(newData);

  return budget;
}

function createMaterial(data) {
  return new Material(data);
}


var api = {
  utils : utils,
  controllers : controllers,
  units : units,
  changes : changes,
  schema : schema,
  config : config,
  newBudget : function() {
    return reset();
  },
  getBudget : function() {
    return budget;
  },
  setBudget : setBudget,
  createMaterial : createMaterial,
  reset : reset,
  loadBudget : loadBudget,
  loadMaterial : loadMaterial,
  me : me,
  getTotal : getTotal
};

// expose rest helpers
for( var key in rest ) {
  api[key] = rest[key];
}


module.exports = api;

},{"./changes":"/Users/jrmerz/dev/cstars/AHB/farm-budgets-sdk/lib/changes/index.js","./classes/budget":"/Users/jrmerz/dev/cstars/AHB/farm-budgets-sdk/lib/classes/budget.js","./classes/material":"/Users/jrmerz/dev/cstars/AHB/farm-budgets-sdk/lib/classes/material.js","./config":"/Users/jrmerz/dev/cstars/AHB/farm-budgets-sdk/lib/config.js","./controllers":"/Users/jrmerz/dev/cstars/AHB/farm-budgets-sdk/lib/controllers/index.js","./rest":"/Users/jrmerz/dev/cstars/AHB/farm-budgets-sdk/lib/rest/index.js","./schema":"/Users/jrmerz/dev/cstars/AHB/farm-budgets-sdk/lib/schema.js","./units":"/Users/jrmerz/dev/cstars/AHB/farm-budgets-sdk/lib/units/index.js","./utils":"/Users/jrmerz/dev/cstars/AHB/farm-budgets-sdk/lib/utils/index.js"}],"/Users/jrmerz/dev/cstars/AHB/farm-budgets-sdk/lib/rest/admin.js":[function(require,module,exports){
var config = require('../config');
var handler = require('./responsehandler');
var request = require('superagent');

var root = '/admin';

function clearTesting(callback) {
  request
    .get(config.host+root+'/clearTesting')
    .set('x-dev-token', config.token)
    .end(handler(callback));
}

module.exports = {
  clearTesting : clearTesting
};

},{"../config":"/Users/jrmerz/dev/cstars/AHB/farm-budgets-sdk/lib/config.js","./responsehandler":"/Users/jrmerz/dev/cstars/AHB/farm-budgets-sdk/lib/rest/responsehandler.js","superagent":"/Users/jrmerz/dev/cstars/AHB/farm-budgets-sdk/node_modules/superagent/lib/client.js"}],"/Users/jrmerz/dev/cstars/AHB/farm-budgets-sdk/lib/rest/auth.js":[function(require,module,exports){
var config = require('../config');
var handler = require('./responsehandler');
var request = require('superagent');

var root = '/auth';

function getDevToken(callback) {
  request
    .get(config.host+root+'/getDevToken')
    .set('x-dev-token', config.token)
    .end(handler(callback));
}

function newDevToken(callback) {
  request
    .get(config.host+root+'/newDevToken')
    .set('x-dev-token', config.token)
    .end(handler(callback));
}

module.exports = {
  getDevToken : getDevToken,
  newDevToken : newDevToken
};

},{"../config":"/Users/jrmerz/dev/cstars/AHB/farm-budgets-sdk/lib/config.js","./responsehandler":"/Users/jrmerz/dev/cstars/AHB/farm-budgets-sdk/lib/rest/responsehandler.js","superagent":"/Users/jrmerz/dev/cstars/AHB/farm-budgets-sdk/node_modules/superagent/lib/client.js"}],"/Users/jrmerz/dev/cstars/AHB/farm-budgets-sdk/lib/rest/authorities.js":[function(require,module,exports){
var config = require('../config');
var handler = require('./responsehandler');
var request = require('superagent');

var root = '/authority';

function list(callback) {
  request
    .get(config.host+root+'/get/all')
    .set('x-dev-token', config.token)
    .end(handler(callback));
}

function get(name, callback) {
  request
    .get(config.host+root+'/get')
    .query({ name: name })
    .set('x-dev-token', config.token)
    .end(handler(callback));
}

function create(authority, callback) {
  request
    .post(config.host+root+'/create')
    .send(authority)
    .set('x-dev-token', config.token)
    .end(handler(callback));
}

function update(authority, callback) {
  request
    .post(config.host+root+'/update')
    .send(authority)
    .set('x-dev-token', config.token)
    .end(handler(callback));
}

function grantAccess(name, email, callback) {
  request
    .get(config.host+root+'/grantAccess')
    .query({name : name, email : email})
    .set('x-dev-token', config.token)
    .end(handler(callback));
}

function removeAccess(name, email, callback) {
  request
    .get(config.host+root+'/removeAccess')
    .query({name : name, email : email})
    .set('x-dev-token', config.token)
    .end(handler(callback));
}

module.exports = {
  list : list,
  get : get,
  create : create,
  grantAccess : grantAccess,
  removeAccess : removeAccess,
  update : update
};

},{"../config":"/Users/jrmerz/dev/cstars/AHB/farm-budgets-sdk/lib/config.js","./responsehandler":"/Users/jrmerz/dev/cstars/AHB/farm-budgets-sdk/lib/rest/responsehandler.js","superagent":"/Users/jrmerz/dev/cstars/AHB/farm-budgets-sdk/node_modules/superagent/lib/client.js"}],"/Users/jrmerz/dev/cstars/AHB/farm-budgets-sdk/lib/rest/budgets.js":[function(require,module,exports){
var config = require('../config');
var handler = require('./responsehandler');
var request = require('superagent');

var root = '/budget';

function get(id, callback) {
  request
    .get(config.host+root+'/get')
    .query({id: id})
    .set('x-dev-token', config.token)
    .end(handler(callback));
}

function contributedTo(callback) {
  request
    .get(config.host+root+'/contributedTo')
    .set('x-dev-token', config.token)
    .end(handler(callback));
}

function uses(materialId, callback) {
  request
    .get(config.host+root+'/uses')
    .query({material : materialId})
    .set('x-dev-token', config.token)
    .end(handler(callback));
}

function search(query, callback) {
  if( query.query ) {
    query.query = JSON.stringify(query.query);
  }

  request
    .get(config.host+root+'/search')
    .query(query)
    .set('x-dev-token', config.token)
    .end(handler(callback));
}


function deleteFn(id, callback) {
  request
    .get(config.host+root+'/delete')
    .query({id : id})
    .set('x-dev-token', config.token)
    .end(handler(callback));
}

function save(budget, callback) {
  request
    .post(config.host+root+'/save')
    .send(budget)
    .set('x-dev-token', config.token)
    .end(handler(callback));
}

module.exports = {
  get : get,
  contributedTo : contributedTo,
  uses : uses,
  search : search,
  save : save,
  'delete' : deleteFn
};

},{"../config":"/Users/jrmerz/dev/cstars/AHB/farm-budgets-sdk/lib/config.js","./responsehandler":"/Users/jrmerz/dev/cstars/AHB/farm-budgets-sdk/lib/rest/responsehandler.js","superagent":"/Users/jrmerz/dev/cstars/AHB/farm-budgets-sdk/node_modules/superagent/lib/client.js"}],"/Users/jrmerz/dev/cstars/AHB/farm-budgets-sdk/lib/rest/history.js":[function(require,module,exports){
var config = require('../config');
var handler = require('./responsehandler');
var request = require('superagent');

var root = '/history';

function get(id, callback) {
  request
    .get(config.host+root+'/'+id)
    .set('x-dev-token', config.token)
    .end(handler(callback));
}

module.exports = {
  get : get
};

},{"../config":"/Users/jrmerz/dev/cstars/AHB/farm-budgets-sdk/lib/config.js","./responsehandler":"/Users/jrmerz/dev/cstars/AHB/farm-budgets-sdk/lib/rest/responsehandler.js","superagent":"/Users/jrmerz/dev/cstars/AHB/farm-budgets-sdk/node_modules/superagent/lib/client.js"}],"/Users/jrmerz/dev/cstars/AHB/farm-budgets-sdk/lib/rest/index.js":[function(require,module,exports){
var rest = {
  authorities : require('./authorities'),
  materials : require('./materials'),
  login : require('./login'),
  budgets : require('./budgets'),
  history : require('./history'),
  auth : require('./auth'),
  members : require('./members'),
  admin : require('./admin')
};

module.exports = rest;

},{"./admin":"/Users/jrmerz/dev/cstars/AHB/farm-budgets-sdk/lib/rest/admin.js","./auth":"/Users/jrmerz/dev/cstars/AHB/farm-budgets-sdk/lib/rest/auth.js","./authorities":"/Users/jrmerz/dev/cstars/AHB/farm-budgets-sdk/lib/rest/authorities.js","./budgets":"/Users/jrmerz/dev/cstars/AHB/farm-budgets-sdk/lib/rest/budgets.js","./history":"/Users/jrmerz/dev/cstars/AHB/farm-budgets-sdk/lib/rest/history.js","./login":"/Users/jrmerz/dev/cstars/AHB/farm-budgets-sdk/lib/rest/login.js","./materials":"/Users/jrmerz/dev/cstars/AHB/farm-budgets-sdk/lib/rest/materials.js","./members":"/Users/jrmerz/dev/cstars/AHB/farm-budgets-sdk/lib/rest/members.js"}],"/Users/jrmerz/dev/cstars/AHB/farm-budgets-sdk/lib/rest/login.js":[function(require,module,exports){
var config = require('../config');
var handler = require('./responsehandler');
var request = require('superagent');

var root = '/auth';

// really this is just a call to get user info
function login(callback) {
  request
    .get(config.host+root+'/getUserInfo')
    .set('x-dev-token', config.token)
    .end(handler(function(resp){
      if( !resp.error ) {
        config.user = resp;
      }

      callback(resp);
    }));
}

module.exports = login;

},{"../config":"/Users/jrmerz/dev/cstars/AHB/farm-budgets-sdk/lib/config.js","./responsehandler":"/Users/jrmerz/dev/cstars/AHB/farm-budgets-sdk/lib/rest/responsehandler.js","superagent":"/Users/jrmerz/dev/cstars/AHB/farm-budgets-sdk/node_modules/superagent/lib/client.js"}],"/Users/jrmerz/dev/cstars/AHB/farm-budgets-sdk/lib/rest/materials.js":[function(require,module,exports){
var config = require('../config');
var handler = require('./responsehandler');
var request = require('superagent');

var root = '/materials';

function get(id, callback) {
  request
    .get(config.host+root+'/get')
    .query({id: id})
    .set('x-dev-token', config.token)
    .end(handler(callback));
}

function hasRequired(id, callback) {
  request
    .get(config.host+root+'/hasRequired')
    .query({id: id})
    .set('x-dev-token', config.token)
    .end(handler(callback));
}

function search(query, callback) {
  if( query.query ) {
    query.query = JSON.stringify(query);
  }

  request
    .get(config.host+root+'/search')
    .query(query)
    .set('x-dev-token', config.token)
    .end(handler(callback));
}

function suggest(query, callback) {
  request
    .get(config.host+root+'/suggest')
    .query({q: query})
    .set('x-dev-token', config.token)
    .end(handler(callback));
}

function deleteFn(id, callback) {
  request
    .get(config.host+root+'/suggest')
    .query({q: query})
    .set('x-dev-token', config.token)
    .end(handler(callback));
}

function save(material, callback) {
  request
    .post(config.host+root+'/save')
    .send(material)
    .set('x-dev-token', config.token)
    .end(handler(callback));
}

module.exports = {
  get : get,
  hasRequired : hasRequired,
  search : search,
  suggest : suggest,
  'delete' : deleteFn,
  save : save
};

},{"../config":"/Users/jrmerz/dev/cstars/AHB/farm-budgets-sdk/lib/config.js","./responsehandler":"/Users/jrmerz/dev/cstars/AHB/farm-budgets-sdk/lib/rest/responsehandler.js","superagent":"/Users/jrmerz/dev/cstars/AHB/farm-budgets-sdk/node_modules/superagent/lib/client.js"}],"/Users/jrmerz/dev/cstars/AHB/farm-budgets-sdk/lib/rest/members.js":[function(require,module,exports){
var config = require('../config');
var handler = require('./responsehandler');
var request = require('superagent');

var root = '/members';

function search(query, callback) {
  request
    .get(config.host+root+'/search')
    .query({q : query})
    .set('x-dev-token', config.token)
    .end(handler(callback));
}

module.exports = {
  search : search
};

},{"../config":"/Users/jrmerz/dev/cstars/AHB/farm-budgets-sdk/lib/config.js","./responsehandler":"/Users/jrmerz/dev/cstars/AHB/farm-budgets-sdk/lib/rest/responsehandler.js","superagent":"/Users/jrmerz/dev/cstars/AHB/farm-budgets-sdk/node_modules/superagent/lib/client.js"}],"/Users/jrmerz/dev/cstars/AHB/farm-budgets-sdk/lib/rest/responsehandler.js":[function(require,module,exports){
'use strict';

module.exports = function(callback){
  return function(err, resp) {
      if( err ) {
        return callback({
          error : true,
          message : 'request error',
          response : err
        });
      }

      if( !resp.ok ) {
        return callback({
          error : true,
          message : 'request error',
          response : err
        });
      }

      callback(resp.body);
  };
};

},{}],"/Users/jrmerz/dev/cstars/AHB/farm-budgets-sdk/lib/schema.js":[function(require,module,exports){
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
      commodity : 'string',

      deleted : 'boolean',
      testing : 'boolean',

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

      deleted : 'boolean',
      testing : 'boolean'
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
      testing : 'boolean',

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

},{}],"/Users/jrmerz/dev/cstars/AHB/farm-budgets-sdk/lib/units/cleanDollars.js":[function(require,module,exports){
'use strict';

module.exports = function(units) {
  if( units === undefined ) {
    return '1';
  }
  return units.replace(/(us)?\$/g, '1');
};

},{}],"/Users/jrmerz/dev/cstars/AHB/farm-budgets-sdk/lib/units/definitions.js":[function(require,module,exports){
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

},{}],"/Users/jrmerz/dev/cstars/AHB/farm-budgets-sdk/lib/units/index.js":[function(require,module,exports){
'use strict';

var definitions = require('./definitions');
var ucum = require('ucum.js');
var extend = require('extend');
var cleanDollars = require('./cleanDollars');

// cache for standard ucum calculations
// these can happen a lot a really slowdown the ur;
var ucumCache = {};
var convertCache = {};
// unit lookup hash
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

  if( name === undefined ) {
    return '';
  }

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

function invert(units) {
  units = cleanDollars(units);

  units = units.split('/');
  units = '('+units.join(')/(')+')';

  var result;
  try {
    result = ucumParse('1/('+units+')');
  } catch(e) {
    return units;
  }

  var d = [], n = [];
  for( var key in result.units ) {
    if( result.units[key] === -1 ) {
      d.push(key);
    } else {
      n.push(key);
    }
  }

  if( result.value > 1 ) {
    n.push(result.value);
  } else if ( result.value < 0 ) {
    d.push(1 / result.value);
  }

  units = n.join('.');

  if( units === '' ) {
    units = 'us$';
  }
  if( d.length > 0 ) {
    units += '/'+d.join('.');
  }

  return units;
}

function isDollar(value) {
  value = value.trim().toLowerCase();
  if( value === 'us$' || value === '$' || value === '1' || value === '' ) {
    return true;
  }
  return false;
}

function conversionDiff(from, to) {
  var value, diff;

  var unitsFrom = cleanDollars(from.trim());
  unitsFrom = unitsFrom.replace(/^1\//g, '');
  var unitsTo = cleanDollars(to.trim());

  try {
    if( convertCache[unitsFrom+'-'+unitsTo] !== undefined ) {
      diff = convertCache[unitsFrom+'-'+unitsTo];
    } else if( unitsFrom === unitsTo ) {
      diff = 1;
    } else {
      // transfer from what they game us to what we have
      diff = ucum.convert(1, unitsTo, unitsFrom);
      convertCache[unitsFrom+'-'+unitsTo] = diff;
    }

  } catch(e) {
    return {
      error: true,
      ucumError : e,
      message : 'Cannot convert units: '+unitsFrom+' to '+unitsTo
    };
  }

  var resp = {
    success : true,
    message : 'converted units: '+unitsFrom+' to '+unitsTo,
    value : diff
  };

  return resp;
}


function convertUnits(u1, u2) {
  var time = new Date().getTime();
  try {
    var t1 = cleanDollars(u1);
    var t2 = cleanDollars(u2);

    // try and see if we can fake it
    if( t2 === '1/'+t1 || t2 === '1/('+t1+')' || t1 === '1/'+t2 || t1 === '1/('+t2+')' || (t1 === '' && t2 === '') ) {
      return {
        value : 1,
        units : {},
        simple : true,
        debug : '('+t1+').('+t2+')'
      };
    }

    // we all blank units as dollars
    if( t1 === '' ) {
      t1 = 1;
    }
    if( t2 === '' ) {
      t2 = 1;
    }

    var tmp = '('+t1+').('+t2+')';
    //var t = ucum.canonicalize(tmp);
    var t = ucumParse(tmp);
    t.debug = tmp;
    return t;
  } catch(e) {
    return {
      error : true,
      message : 'Unable to convert units',
      math : u1+' * '+u2,
      debug : '('+cleanDollars(u1)+').('+ cleanDollars(u2)+')'
    };
  }
}


function ucumParse(value) {
  if( ucumCache[value] ) {
    return extend(true, {}, ucumCache[value]);
  }
  var response = ucum.parse(value);
  ucumCache[value] = extend(true, {}, response);
  return response;
}

module.exports = {
  invert : invert,
  convertUnits : convertUnits,
  conversionDiff : conversionDiff,
  getLabel : getLabel,
  getLikeUnits : getLikeUnits,
  lookup : lookup,
  ucumParse : ucumParse,
  cleanDollars : cleanDollars,
  ucum : ucum
};

},{"./cleanDollars":"/Users/jrmerz/dev/cstars/AHB/farm-budgets-sdk/lib/units/cleanDollars.js","./definitions":"/Users/jrmerz/dev/cstars/AHB/farm-budgets-sdk/lib/units/definitions.js","extend":"/Users/jrmerz/dev/cstars/AHB/farm-budgets-sdk/node_modules/extend/index.js","ucum.js":"/Users/jrmerz/dev/cstars/AHB/farm-budgets-sdk/node_modules/ucum.js/ucum.js"}],"/Users/jrmerz/dev/cstars/AHB/farm-budgets-sdk/lib/utils/getActiveMaterials.js":[function(require,module,exports){

var controllers = require('../controllers');

module.export = function getActiveMaterials() {
    var materials = [];

    var operations = controllers.operation.get();
    operations.forEach(function(op){
      _getActiveMaterials(op, materials);
    });

    materials.sort();
    return materials;
};

function _getActiveMaterials(obj, list) {
  if( !obj.materials ) {
    return;
  }

  for( var name in obj.materials ) {
    var def = controllers.material.get(name);

    if( list.indexOf(def.name) === -1 ) {
      list.push(def.name);
    }

    if( def.type === 'complex' ) {
      _getActiveMaterials(def, list);
    }
  }
}

},{"../controllers":"/Users/jrmerz/dev/cstars/AHB/farm-budgets-sdk/lib/controllers/index.js"}],"/Users/jrmerz/dev/cstars/AHB/farm-budgets-sdk/lib/utils/getMaterialIds.js":[function(require,module,exports){
var controllers = require('../controllers');

// TODO: this is used by several widgets.  Controller should just keep a list
module.exports = function getMaterialIds() {
  var ids = [];
  var materials = controllers.material.get();

  for( var name in materials ) {
    if( materials[name].id ) {
      ids.push(materials[name].id);
    }
  }

  return ids;
};

},{"../controllers":"/Users/jrmerz/dev/cstars/AHB/farm-budgets-sdk/lib/controllers/index.js"}],"/Users/jrmerz/dev/cstars/AHB/farm-budgets-sdk/lib/utils/index.js":[function(require,module,exports){
'use strict';

var uuid = require('node-uuid');
var extend = require('extend');
var states = require('./states');

var statesLookup = {};
for( var key in states ) {
  statesLookup[states[key].toLowerCase()] = key;
}

function hasAccess(user, authority) {
  if( !user ) {
    return false;
  }
  if( !user.authorities ) {
    return false;
  }
  if( user.authorities.indexOf(authority) > -1 ) {
    return true;
  }
  if( user.email === authority ) {
    return true;
  }

  return false;
}

var api = {
  guid : function() {
    return uuid.v4();
  },
  hasAccess : hasAccess,
  strip : require('./strip'),
  getActiveMaterials : require('./getActiveMaterials'),
  getMaterialIds : require('./getMaterialIds'),
  states : states,
  statesLookup : statesLookup
};

module.exports = api;

},{"./getActiveMaterials":"/Users/jrmerz/dev/cstars/AHB/farm-budgets-sdk/lib/utils/getActiveMaterials.js","./getMaterialIds":"/Users/jrmerz/dev/cstars/AHB/farm-budgets-sdk/lib/utils/getMaterialIds.js","./states":"/Users/jrmerz/dev/cstars/AHB/farm-budgets-sdk/lib/utils/states.json","./strip":"/Users/jrmerz/dev/cstars/AHB/farm-budgets-sdk/lib/utils/strip.js","extend":"/Users/jrmerz/dev/cstars/AHB/farm-budgets-sdk/node_modules/extend/index.js","node-uuid":"/Users/jrmerz/dev/cstars/AHB/farm-budgets-sdk/node_modules/node-uuid/uuid.js"}],"/Users/jrmerz/dev/cstars/AHB/farm-budgets-sdk/lib/utils/states.json":[function(require,module,exports){
module.exports={
  "alabama": "AL",
  "alaska": "AK",
  "american samoa": "AS",
  "arizona": "AZ",
  "arkansas": "AR",
  "california": "CA",
  "colorado": "CO",
  "connecticut": "CT",
  "delaware": "DE",
  "district of columbia": "DC",
  "federated states of micronesia": "FM",
  "florida": "FL",
  "georgia": "GA",
  "guam": "GU",
  "hawaii": "HI",
  "idaho": "ID",
  "illinois": "IL",
  "indiana": "IN",
  "iowa": "IA",
  "kansas": "KS",
  "kentucky": "KY",
  "louisiana": "LA",
  "maine": "ME",
  "marshall islands": "MH",
  "maryland": "MD",
  "massachusetts": "MA",
  "michigan": "MI",
  "minnesota": "MN",
  "mississippi": "MS",
  "missouri": "MO",
  "montana": "MT",
  "nebraska": "NE",
  "nevada": "NV",
  "new hampshire": "NH",
  "new jersey": "NJ",
  "new mexico": "NM",
  "new york": "NY",
  "north carolina": "NC",
  "north dakota": "ND",
  "northern mariana islands": "MP",
  "ohio": "OH",
  "oklahoma": "OK",
  "oregon": "OR",
  "palau": "PW",
  "pennsylvania": "PA",
  "puerto rico": "PR",
  "rhode island": "RI",
  "south carolina": "SC",
  "south dakota": "SD",
  "tennessee": "TN",
  "texas": "TX",
  "utah": "UT",
  "vermont": "VT",
  "virgin islands": "VI",
  "virginia": "VA",
  "washington": "WA",
  "west virginia": "WV",
  "wisconsin": "WI",
  "wyoming": "WY"
}

},{}],"/Users/jrmerz/dev/cstars/AHB/farm-budgets-sdk/lib/utils/strip.js":[function(require,module,exports){
'use strict';

module.exports = function(schema, object) {
  return strip(schema, object);
};

function strip(schema, object) {
  for( var key in object ) {
    if( !schema[key] ) {
      delete object[key];
      continue;
    }

    var param = schema[key];

    if( param === 'string') {
      if( typeof object[key] !== 'string' ) {
        object[key] = object[key]+'';
      }
    } else if( param === 'number') {
      checkNum(key, object);
    } else if ( Array.isArray(param) ) {

      if( param[0]._object_array_ ) {
         cleanObjectArray(param[0], object[key]);
      } else {
        for( var i = 0; i < object[key].length; i++ ) {
          strip(param[0], object[key][i]);
        }
      }
    } else if ( typeof param === 'object' ) {
      strip(param, object[key]);
    }
  }
}

function cleanObjectArray(schema, object) {
  for( var key in object ) {
    strip(schema, object[key]);
  }
}

function checkNum(key, object) {
  if( typeof object[key] !== 'number' ) {
    try {
      var org = object[key];
      object[key] = parseFloat(object[key]);
      if( isNaN(object[key]) ) {
        object[key] = org;
      }
    } catch(e) {}

  }
}

},{}],"/Users/jrmerz/dev/cstars/AHB/farm-budgets-sdk/node_modules/deep-diff/index.js":[function(require,module,exports){
(function (global){
/*!
 * deep-diff.
 * Licensed under the MIT License.
 */
;(function(root, factory) {
  'use strict';
  if (typeof define === 'function' && define.amd) {
    // AMD. Register as an anonymous module.
    define([], factory);
  } else if (typeof exports === 'object') {
    // Node. Does not work with strict CommonJS, but
    // only CommonJS-like environments that support module.exports,
    // like Node.
    module.exports = factory();
  } else {
    // Browser globals (root is window)
    root.DeepDiff = factory();
  }
}(this, function(undefined) {
  'use strict';

  var $scope, conflict, conflictResolution = [];
  if (typeof global === 'object' && global) {
    $scope = global;
  } else if (typeof window !== 'undefined') {
    $scope = window;
  } else {
    $scope = {};
  }
  conflict = $scope.DeepDiff;
  if (conflict) {
    conflictResolution.push(
      function() {
        if ('undefined' !== typeof conflict && $scope.DeepDiff === accumulateDiff) {
          $scope.DeepDiff = conflict;
          conflict = undefined;
        }
      });
  }

  // nodejs compatible on server side and in the browser.
  function inherits(ctor, superCtor) {
    ctor.super_ = superCtor;
    ctor.prototype = Object.create(superCtor.prototype, {
      constructor: {
        value: ctor,
        enumerable: false,
        writable: true,
        configurable: true
      }
    });
  }

  function Diff(kind, path) {
    Object.defineProperty(this, 'kind', {
      value: kind,
      enumerable: true
    });
    if (path && path.length) {
      Object.defineProperty(this, 'path', {
        value: path,
        enumerable: true
      });
    }
  }

  function DiffEdit(path, origin, value) {
    DiffEdit.super_.call(this, 'E', path);
    Object.defineProperty(this, 'lhs', {
      value: origin,
      enumerable: true
    });
    Object.defineProperty(this, 'rhs', {
      value: value,
      enumerable: true
    });
  }
  inherits(DiffEdit, Diff);

  function DiffNew(path, value) {
    DiffNew.super_.call(this, 'N', path);
    Object.defineProperty(this, 'rhs', {
      value: value,
      enumerable: true
    });
  }
  inherits(DiffNew, Diff);

  function DiffDeleted(path, value) {
    DiffDeleted.super_.call(this, 'D', path);
    Object.defineProperty(this, 'lhs', {
      value: value,
      enumerable: true
    });
  }
  inherits(DiffDeleted, Diff);

  function DiffArray(path, index, item) {
    DiffArray.super_.call(this, 'A', path);
    Object.defineProperty(this, 'index', {
      value: index,
      enumerable: true
    });
    Object.defineProperty(this, 'item', {
      value: item,
      enumerable: true
    });
  }
  inherits(DiffArray, Diff);

  function arrayRemove(arr, from, to) {
    var rest = arr.slice((to || from) + 1 || arr.length);
    arr.length = from < 0 ? arr.length + from : from;
    arr.push.apply(arr, rest);
    return arr;
  }

  function realTypeOf(subject) {
    var type = typeof subject;
    if (type !== 'object') {
      return type;
    }

    if (subject === Math) {
      return 'math';
    } else if (subject === null) {
      return 'null';
    } else if (Array.isArray(subject)) {
      return 'array';
    } else if (subject instanceof Date) {
      return 'date';
    } else if (/^\/.*\//.test(subject.toString())) {
      return 'regexp';
    }
    return 'object';
  }

  function deepDiff(lhs, rhs, changes, prefilter, path, key, stack) {
    path = path || [];
    var currentPath = path.slice(0);
    if (typeof key !== 'undefined') {
      if (prefilter && prefilter(currentPath, key, { lhs: lhs, rhs: rhs })) {
        return;
      }
      currentPath.push(key);
    }
    var ltype = typeof lhs;
    var rtype = typeof rhs;
    if (ltype === 'undefined') {
      if (rtype !== 'undefined') {
        changes(new DiffNew(currentPath, rhs));
      }
    } else if (rtype === 'undefined') {
      changes(new DiffDeleted(currentPath, lhs));
    } else if (realTypeOf(lhs) !== realTypeOf(rhs)) {
      changes(new DiffEdit(currentPath, lhs, rhs));
    } else if (lhs instanceof Date && rhs instanceof Date && ((lhs - rhs) !== 0)) {
      changes(new DiffEdit(currentPath, lhs, rhs));
    } else if (ltype === 'object' && lhs !== null && rhs !== null) {
      stack = stack || [];
      if (stack.indexOf(lhs) < 0) {
        stack.push(lhs);
        if (Array.isArray(lhs)) {
          var i, len = lhs.length;
          for (i = 0; i < lhs.length; i++) {
            if (i >= rhs.length) {
              changes(new DiffArray(currentPath, i, new DiffDeleted(undefined, lhs[i])));
            } else {
              deepDiff(lhs[i], rhs[i], changes, prefilter, currentPath, i, stack);
            }
          }
          while (i < rhs.length) {
            changes(new DiffArray(currentPath, i, new DiffNew(undefined, rhs[i++])));
          }
        } else {
          var akeys = Object.keys(lhs);
          var pkeys = Object.keys(rhs);
          akeys.forEach(function(k, i) {
            var other = pkeys.indexOf(k);
            if (other >= 0) {
              deepDiff(lhs[k], rhs[k], changes, prefilter, currentPath, k, stack);
              pkeys = arrayRemove(pkeys, other);
            } else {
              deepDiff(lhs[k], undefined, changes, prefilter, currentPath, k, stack);
            }
          });
          pkeys.forEach(function(k) {
            deepDiff(undefined, rhs[k], changes, prefilter, currentPath, k, stack);
          });
        }
        stack.length = stack.length - 1;
      }
    } else if (lhs !== rhs) {
      if (!(ltype === 'number' && isNaN(lhs) && isNaN(rhs))) {
        changes(new DiffEdit(currentPath, lhs, rhs));
      }
    }
  }

  function accumulateDiff(lhs, rhs, prefilter, accum) {
    accum = accum || [];
    deepDiff(lhs, rhs,
      function(diff) {
        if (diff) {
          accum.push(diff);
        }
      },
      prefilter);
    return (accum.length) ? accum : undefined;
  }

  function applyArrayChange(arr, index, change) {
    if (change.path && change.path.length) {
      var it = arr[index],
        i, u = change.path.length - 1;
      for (i = 0; i < u; i++) {
        it = it[change.path[i]];
      }
      switch (change.kind) {
        case 'A':
          applyArrayChange(it[change.path[i]], change.index, change.item);
          break;
        case 'D':
          delete it[change.path[i]];
          break;
        case 'E':
        case 'N':
          it[change.path[i]] = change.rhs;
          break;
      }
    } else {
      switch (change.kind) {
        case 'A':
          applyArrayChange(arr[index], change.index, change.item);
          break;
        case 'D':
          arr = arrayRemove(arr, index);
          break;
        case 'E':
        case 'N':
          arr[index] = change.rhs;
          break;
      }
    }
    return arr;
  }

  function applyChange(target, source, change) {
    if (target && source && change && change.kind) {
      var it = target,
        i = -1,
        last = change.path ? change.path.length - 1 : 0;
      while (++i < last) {
        if (typeof it[change.path[i]] === 'undefined') {
          it[change.path[i]] = (typeof change.path[i] === 'number') ? [] : {};
        }
        it = it[change.path[i]];
      }
      switch (change.kind) {
        case 'A':
          applyArrayChange(change.path ? it[change.path[i]] : it, change.index, change.item);
          break;
        case 'D':
          delete it[change.path[i]];
          break;
        case 'E':
        case 'N':
          it[change.path[i]] = change.rhs;
          break;
      }
    }
  }

  function revertArrayChange(arr, index, change) {
    if (change.path && change.path.length) {
      // the structure of the object at the index has changed...
      var it = arr[index],
        i, u = change.path.length - 1;
      for (i = 0; i < u; i++) {
        it = it[change.path[i]];
      }
      switch (change.kind) {
        case 'A':
          revertArrayChange(it[change.path[i]], change.index, change.item);
          break;
        case 'D':
          it[change.path[i]] = change.lhs;
          break;
        case 'E':
          it[change.path[i]] = change.lhs;
          break;
        case 'N':
          delete it[change.path[i]];
          break;
      }
    } else {
      // the array item is different...
      switch (change.kind) {
        case 'A':
          revertArrayChange(arr[index], change.index, change.item);
          break;
        case 'D':
          arr[index] = change.lhs;
          break;
        case 'E':
          arr[index] = change.lhs;
          break;
        case 'N':
          arr = arrayRemove(arr, index);
          break;
      }
    }
    return arr;
  }

  function revertChange(target, source, change) {
    if (target && source && change && change.kind) {
      var it = target,
        i, u;
      u = change.path.length - 1;
      for (i = 0; i < u; i++) {
        if (typeof it[change.path[i]] === 'undefined') {
          it[change.path[i]] = {};
        }
        it = it[change.path[i]];
      }
      switch (change.kind) {
        case 'A':
          // Array was modified...
          // it will be an array...
          revertArrayChange(it[change.path[i]], change.index, change.item);
          break;
        case 'D':
          // Item was deleted...
          it[change.path[i]] = change.lhs;
          break;
        case 'E':
          // Item was edited...
          it[change.path[i]] = change.lhs;
          break;
        case 'N':
          // Item is new...
          delete it[change.path[i]];
          break;
      }
    }
  }

  function applyDiff(target, source, filter) {
    if (target && source) {
      var onChange = function(change) {
        if (!filter || filter(target, source, change)) {
          applyChange(target, source, change);
        }
      };
      deepDiff(target, source, onChange);
    }
  }

  Object.defineProperties(accumulateDiff, {

    diff: {
      value: accumulateDiff,
      enumerable: true
    },
    observableDiff: {
      value: deepDiff,
      enumerable: true
    },
    applyDiff: {
      value: applyDiff,
      enumerable: true
    },
    applyChange: {
      value: applyChange,
      enumerable: true
    },
    revertChange: {
      value: revertChange,
      enumerable: true
    },
    isConflict: {
      value: function() {
        return 'undefined' !== typeof conflict;
      },
      enumerable: true
    },
    noConflict: {
      value: function() {
        if (conflictResolution) {
          conflictResolution.forEach(function(it) {
            it();
          });
          conflictResolution = null;
        }
        return accumulateDiff;
      },
      enumerable: true
    }
  });

  return accumulateDiff;
}));

}).call(this,typeof global !== "undefined" ? global : typeof self !== "undefined" ? self : typeof window !== "undefined" ? window : {})

},{}],"/Users/jrmerz/dev/cstars/AHB/farm-budgets-sdk/node_modules/extend/index.js":[function(require,module,exports){
'use strict';

var hasOwn = Object.prototype.hasOwnProperty;
var toStr = Object.prototype.toString;

var isArray = function isArray(arr) {
	if (typeof Array.isArray === 'function') {
		return Array.isArray(arr);
	}

	return toStr.call(arr) === '[object Array]';
};

var isPlainObject = function isPlainObject(obj) {
	if (!obj || toStr.call(obj) !== '[object Object]') {
		return false;
	}

	var hasOwnConstructor = hasOwn.call(obj, 'constructor');
	var hasIsPrototypeOf = obj.constructor && obj.constructor.prototype && hasOwn.call(obj.constructor.prototype, 'isPrototypeOf');
	// Not own constructor property must be Object
	if (obj.constructor && !hasOwnConstructor && !hasIsPrototypeOf) {
		return false;
	}

	// Own properties are enumerated firstly, so to speed up,
	// if last one is own, then all properties are own.
	var key;
	for (key in obj) {/**/}

	return typeof key === 'undefined' || hasOwn.call(obj, key);
};

module.exports = function extend() {
	var options, name, src, copy, copyIsArray, clone,
		target = arguments[0],
		i = 1,
		length = arguments.length,
		deep = false;

	// Handle a deep copy situation
	if (typeof target === 'boolean') {
		deep = target;
		target = arguments[1] || {};
		// skip the boolean and the target
		i = 2;
	} else if ((typeof target !== 'object' && typeof target !== 'function') || target == null) {
		target = {};
	}

	for (; i < length; ++i) {
		options = arguments[i];
		// Only deal with non-null/undefined values
		if (options != null) {
			// Extend the base object
			for (name in options) {
				src = target[name];
				copy = options[name];

				// Prevent never-ending loop
				if (target !== copy) {
					// Recurse if we're merging plain objects or arrays
					if (deep && copy && (isPlainObject(copy) || (copyIsArray = isArray(copy)))) {
						if (copyIsArray) {
							copyIsArray = false;
							clone = src && isArray(src) ? src : [];
						} else {
							clone = src && isPlainObject(src) ? src : {};
						}

						// Never move original objects, clone them
						target[name] = extend(deep, clone, copy);

					// Don't bring in undefined values
					} else if (typeof copy !== 'undefined') {
						target[name] = copy;
					}
				}
			}
		}
	}

	// Return the modified object
	return target;
};


},{}],"/Users/jrmerz/dev/cstars/AHB/farm-budgets-sdk/node_modules/node-uuid/uuid.js":[function(require,module,exports){
(function (Buffer){
//     uuid.js
//
//     Copyright (c) 2010-2012 Robert Kieffer
//     MIT License - http://opensource.org/licenses/mit-license.php

/*global window, require, define */
(function(_window) {
  'use strict';

  // Unique ID creation requires a high quality random # generator.  We feature
  // detect to determine the best RNG source, normalizing to a function that
  // returns 128-bits of randomness, since that's what's usually required
  var _rng, _mathRNG, _nodeRNG, _whatwgRNG, _previousRoot;

  function setupBrowser() {
    // Allow for MSIE11 msCrypto
    var _crypto = _window.crypto || _window.msCrypto;

    if (!_rng && _crypto && _crypto.getRandomValues) {
      // WHATWG crypto-based RNG - http://wiki.whatwg.org/wiki/Crypto
      //
      // Moderately fast, high quality
      try {
        var _rnds8 = new Uint8Array(16);
        _whatwgRNG = _rng = function whatwgRNG() {
          _crypto.getRandomValues(_rnds8);
          return _rnds8;
        };
        _rng();
      } catch(e) {}
    }

    if (!_rng) {
      // Math.random()-based (RNG)
      //
      // If all else fails, use Math.random().  It's fast, but is of unspecified
      // quality.
      var  _rnds = new Array(16);
      _mathRNG = _rng = function() {
        for (var i = 0, r; i < 16; i++) {
          if ((i & 0x03) === 0) { r = Math.random() * 0x100000000; }
          _rnds[i] = r >>> ((i & 0x03) << 3) & 0xff;
        }

        return _rnds;
      };
      if ('undefined' !== typeof console && console.warn) {
        console.warn("[SECURITY] node-uuid: crypto not usable, falling back to insecure Math.random()");
      }
    }
  }

  function setupNode() {
    // Node.js crypto-based RNG - http://nodejs.org/docs/v0.6.2/api/crypto.html
    //
    // Moderately fast, high quality
    if ('function' === typeof require) {
      try {
        var _rb = require('crypto').randomBytes;
        _nodeRNG = _rng = _rb && function() {return _rb(16);};
        _rng();
      } catch(e) {}
    }
  }

  if (_window) {
    setupBrowser();
  } else {
    setupNode();
  }

  // Buffer class to use
  var BufferClass = ('function' === typeof Buffer) ? Buffer : Array;

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

    var clockseq = (options.clockseq != null) ? options.clockseq : _clockseq;

    // UUID timestamps are 100 nano-second units since the Gregorian epoch,
    // (1582-10-15 00:00).  JSNumbers aren't precise enough for this, so
    // time is handled internally as 'msecs' (integer milliseconds) and 'nsecs'
    // (100-nanoseconds offset from msecs) since unix epoch, 1970-01-01 00:00.
    var msecs = (options.msecs != null) ? options.msecs : new Date().getTime();

    // Per 4.2.1.2, use count of uuid's generated during the current clock
    // cycle to simulate higher resolution clock
    var nsecs = (options.nsecs != null) ? options.nsecs : _lastNSecs + 1;

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

    if (typeof(options) === 'string') {
      buf = (options === 'binary') ? new BufferClass(16) : null;
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
  uuid._rng = _rng;
  uuid._mathRNG = _mathRNG;
  uuid._nodeRNG = _nodeRNG;
  uuid._whatwgRNG = _whatwgRNG;

  if (('undefined' !== typeof module) && module.exports) {
    // Publish as node.js module
    module.exports = uuid;
  } else if (typeof define === 'function' && define.amd) {
    // Publish as AMD module
    define(function() {return uuid;});


  } else {
    // Publish as global (in browsers)
    _previousRoot = _window.uuid;

    // **`noConflict()` - (browser only) to reset global 'uuid' var**
    uuid.noConflict = function() {
      _window.uuid = _previousRoot;
      return uuid;
    };

    _window.uuid = uuid;
  }
})('undefined' !== typeof window ? window : null);

}).call(this,require("buffer").Buffer)

},{"buffer":"/Users/jrmerz/dev/cstars/AHB/farm-budgets-app/node_modules/buffer/index.js","crypto":"/Users/jrmerz/dev/cstars/AHB/farm-budgets-app/node_modules/crypto-browserify/index.js"}],"/Users/jrmerz/dev/cstars/AHB/farm-budgets-sdk/node_modules/superagent/lib/client.js":[function(require,module,exports){
/**
 * Module dependencies.
 */

var Emitter = require('emitter');
var reduce = require('reduce');

/**
 * Root reference for iframes.
 */

var root;
if (typeof window !== 'undefined') { // Browser window
  root = window;
} else if (typeof self !== 'undefined') { // Web Worker
  root = self;
} else { // Other environments
  root = this;
}

/**
 * Noop.
 */

function noop(){};

/**
 * Check if `obj` is a host object,
 * we don't want to serialize these :)
 *
 * TODO: future proof, move to compoent land
 *
 * @param {Object} obj
 * @return {Boolean}
 * @api private
 */

function isHost(obj) {
  var str = {}.toString.call(obj);

  switch (str) {
    case '[object File]':
    case '[object Blob]':
    case '[object FormData]':
      return true;
    default:
      return false;
  }
}

/**
 * Determine XHR.
 */

request.getXHR = function () {
  if (root.XMLHttpRequest
      && (!root.location || 'file:' != root.location.protocol
          || !root.ActiveXObject)) {
    return new XMLHttpRequest;
  } else {
    try { return new ActiveXObject('Microsoft.XMLHTTP'); } catch(e) {}
    try { return new ActiveXObject('Msxml2.XMLHTTP.6.0'); } catch(e) {}
    try { return new ActiveXObject('Msxml2.XMLHTTP.3.0'); } catch(e) {}
    try { return new ActiveXObject('Msxml2.XMLHTTP'); } catch(e) {}
  }
  return false;
};

/**
 * Removes leading and trailing whitespace, added to support IE.
 *
 * @param {String} s
 * @return {String}
 * @api private
 */

var trim = ''.trim
  ? function(s) { return s.trim(); }
  : function(s) { return s.replace(/(^\s*|\s*$)/g, ''); };

/**
 * Check if `obj` is an object.
 *
 * @param {Object} obj
 * @return {Boolean}
 * @api private
 */

function isObject(obj) {
  return obj === Object(obj);
}

/**
 * Serialize the given `obj`.
 *
 * @param {Object} obj
 * @return {String}
 * @api private
 */

function serialize(obj) {
  if (!isObject(obj)) return obj;
  var pairs = [];
  for (var key in obj) {
    if (null != obj[key]) {
      pushEncodedKeyValuePair(pairs, key, obj[key]);
        }
      }
  return pairs.join('&');
}

/**
 * Helps 'serialize' with serializing arrays.
 * Mutates the pairs array.
 *
 * @param {Array} pairs
 * @param {String} key
 * @param {Mixed} val
 */

function pushEncodedKeyValuePair(pairs, key, val) {
  if (Array.isArray(val)) {
    return val.forEach(function(v) {
      pushEncodedKeyValuePair(pairs, key, v);
    });
  }
  pairs.push(encodeURIComponent(key)
    + '=' + encodeURIComponent(val));
}

/**
 * Expose serialization method.
 */

 request.serializeObject = serialize;

 /**
  * Parse the given x-www-form-urlencoded `str`.
  *
  * @param {String} str
  * @return {Object}
  * @api private
  */

function parseString(str) {
  var obj = {};
  var pairs = str.split('&');
  var parts;
  var pair;

  for (var i = 0, len = pairs.length; i < len; ++i) {
    pair = pairs[i];
    parts = pair.split('=');
    obj[decodeURIComponent(parts[0])] = decodeURIComponent(parts[1]);
  }

  return obj;
}

/**
 * Expose parser.
 */

request.parseString = parseString;

/**
 * Default MIME type map.
 *
 *     superagent.types.xml = 'application/xml';
 *
 */

request.types = {
  html: 'text/html',
  json: 'application/json',
  xml: 'application/xml',
  urlencoded: 'application/x-www-form-urlencoded',
  'form': 'application/x-www-form-urlencoded',
  'form-data': 'application/x-www-form-urlencoded'
};

/**
 * Default serialization map.
 *
 *     superagent.serialize['application/xml'] = function(obj){
 *       return 'generated xml here';
 *     };
 *
 */

 request.serialize = {
   'application/x-www-form-urlencoded': serialize,
   'application/json': JSON.stringify
 };

 /**
  * Default parsers.
  *
  *     superagent.parse['application/xml'] = function(str){
  *       return { object parsed from str };
  *     };
  *
  */

request.parse = {
  'application/x-www-form-urlencoded': parseString,
  'application/json': JSON.parse
};

/**
 * Parse the given header `str` into
 * an object containing the mapped fields.
 *
 * @param {String} str
 * @return {Object}
 * @api private
 */

function parseHeader(str) {
  var lines = str.split(/\r?\n/);
  var fields = {};
  var index;
  var line;
  var field;
  var val;

  lines.pop(); // trailing CRLF

  for (var i = 0, len = lines.length; i < len; ++i) {
    line = lines[i];
    index = line.indexOf(':');
    field = line.slice(0, index).toLowerCase();
    val = trim(line.slice(index + 1));
    fields[field] = val;
  }

  return fields;
}

/**
 * Check if `mime` is json or has +json structured syntax suffix.
 *
 * @param {String} mime
 * @return {Boolean}
 * @api private
 */

function isJSON(mime) {
  return /[\/+]json\b/.test(mime);
}

/**
 * Return the mime type for the given `str`.
 *
 * @param {String} str
 * @return {String}
 * @api private
 */

function type(str){
  return str.split(/ *; */).shift();
};

/**
 * Return header field parameters.
 *
 * @param {String} str
 * @return {Object}
 * @api private
 */

function params(str){
  return reduce(str.split(/ *; */), function(obj, str){
    var parts = str.split(/ *= */)
      , key = parts.shift()
      , val = parts.shift();

    if (key && val) obj[key] = val;
    return obj;
  }, {});
};

/**
 * Initialize a new `Response` with the given `xhr`.
 *
 *  - set flags (.ok, .error, etc)
 *  - parse header
 *
 * Examples:
 *
 *  Aliasing `superagent` as `request` is nice:
 *
 *      request = superagent;
 *
 *  We can use the promise-like API, or pass callbacks:
 *
 *      request.get('/').end(function(res){});
 *      request.get('/', function(res){});
 *
 *  Sending data can be chained:
 *
 *      request
 *        .post('/user')
 *        .send({ name: 'tj' })
 *        .end(function(res){});
 *
 *  Or passed to `.send()`:
 *
 *      request
 *        .post('/user')
 *        .send({ name: 'tj' }, function(res){});
 *
 *  Or passed to `.post()`:
 *
 *      request
 *        .post('/user', { name: 'tj' })
 *        .end(function(res){});
 *
 * Or further reduced to a single call for simple cases:
 *
 *      request
 *        .post('/user', { name: 'tj' }, function(res){});
 *
 * @param {XMLHTTPRequest} xhr
 * @param {Object} options
 * @api private
 */

function Response(req, options) {
  options = options || {};
  this.req = req;
  this.xhr = this.req.xhr;
  // responseText is accessible only if responseType is '' or 'text' and on older browsers
  this.text = ((this.req.method !='HEAD' && (this.xhr.responseType === '' || this.xhr.responseType === 'text')) || typeof this.xhr.responseType === 'undefined')
     ? this.xhr.responseText
     : null;
  this.statusText = this.req.xhr.statusText;
  this.setStatusProperties(this.xhr.status);
  this.header = this.headers = parseHeader(this.xhr.getAllResponseHeaders());
  // getAllResponseHeaders sometimes falsely returns "" for CORS requests, but
  // getResponseHeader still works. so we get content-type even if getting
  // other headers fails.
  this.header['content-type'] = this.xhr.getResponseHeader('content-type');
  this.setHeaderProperties(this.header);
  this.body = this.req.method != 'HEAD'
    ? this.parseBody(this.text ? this.text : this.xhr.response)
    : null;
}

/**
 * Get case-insensitive `field` value.
 *
 * @param {String} field
 * @return {String}
 * @api public
 */

Response.prototype.get = function(field){
  return this.header[field.toLowerCase()];
};

/**
 * Set header related properties:
 *
 *   - `.type` the content type without params
 *
 * A response of "Content-Type: text/plain; charset=utf-8"
 * will provide you with a `.type` of "text/plain".
 *
 * @param {Object} header
 * @api private
 */

Response.prototype.setHeaderProperties = function(header){
  // content-type
  var ct = this.header['content-type'] || '';
  this.type = type(ct);

  // params
  var obj = params(ct);
  for (var key in obj) this[key] = obj[key];
};

/**
 * Parse the given body `str`.
 *
 * Used for auto-parsing of bodies. Parsers
 * are defined on the `superagent.parse` object.
 *
 * @param {String} str
 * @return {Mixed}
 * @api private
 */

Response.prototype.parseBody = function(str){
  var parse = request.parse[this.type];
  return parse && str && (str.length || str instanceof Object)
    ? parse(str)
    : null;
};

/**
 * Set flags such as `.ok` based on `status`.
 *
 * For example a 2xx response will give you a `.ok` of __true__
 * whereas 5xx will be __false__ and `.error` will be __true__. The
 * `.clientError` and `.serverError` are also available to be more
 * specific, and `.statusType` is the class of error ranging from 1..5
 * sometimes useful for mapping respond colors etc.
 *
 * "sugar" properties are also defined for common cases. Currently providing:
 *
 *   - .noContent
 *   - .badRequest
 *   - .unauthorized
 *   - .notAcceptable
 *   - .notFound
 *
 * @param {Number} status
 * @api private
 */

Response.prototype.setStatusProperties = function(status){
  // handle IE9 bug: http://stackoverflow.com/questions/10046972/msie-returns-status-code-of-1223-for-ajax-request
  if (status === 1223) {
    status = 204;
  }

  var type = status / 100 | 0;

  // status / class
  this.status = this.statusCode = status;
  this.statusType = type;

  // basics
  this.info = 1 == type;
  this.ok = 2 == type;
  this.clientError = 4 == type;
  this.serverError = 5 == type;
  this.error = (4 == type || 5 == type)
    ? this.toError()
    : false;

  // sugar
  this.accepted = 202 == status;
  this.noContent = 204 == status;
  this.badRequest = 400 == status;
  this.unauthorized = 401 == status;
  this.notAcceptable = 406 == status;
  this.notFound = 404 == status;
  this.forbidden = 403 == status;
};

/**
 * Return an `Error` representative of this response.
 *
 * @return {Error}
 * @api public
 */

Response.prototype.toError = function(){
  var req = this.req;
  var method = req.method;
  var url = req.url;

  var msg = 'cannot ' + method + ' ' + url + ' (' + this.status + ')';
  var err = new Error(msg);
  err.status = this.status;
  err.method = method;
  err.url = url;

  return err;
};

/**
 * Expose `Response`.
 */

request.Response = Response;

/**
 * Initialize a new `Request` with the given `method` and `url`.
 *
 * @param {String} method
 * @param {String} url
 * @api public
 */

function Request(method, url) {
  var self = this;
  Emitter.call(this);
  this._query = this._query || [];
  this.method = method;
  this.url = url;
  this.header = {};
  this._header = {};
  this.on('end', function(){
    var err = null;
    var res = null;

    try {
      res = new Response(self);
    } catch(e) {
      err = new Error('Parser is unable to parse the response');
      err.parse = true;
      err.original = e;
      // issue #675: return the raw response if the response parsing fails
      err.rawResponse = self.xhr && self.xhr.responseText ? self.xhr.responseText : null;
      return self.callback(err);
    }

    self.emit('response', res);

    if (err) {
      return self.callback(err, res);
    }

    if (res.status >= 200 && res.status < 300) {
      return self.callback(err, res);
    }

    var new_err = new Error(res.statusText || 'Unsuccessful HTTP response');
    new_err.original = err;
    new_err.response = res;
    new_err.status = res.status;

    self.callback(new_err, res);
  });
}

/**
 * Mixin `Emitter`.
 */

Emitter(Request.prototype);

/**
 * Allow for extension
 */

Request.prototype.use = function(fn) {
  fn(this);
  return this;
}

/**
 * Set timeout to `ms`.
 *
 * @param {Number} ms
 * @return {Request} for chaining
 * @api public
 */

Request.prototype.timeout = function(ms){
  this._timeout = ms;
  return this;
};

/**
 * Clear previous timeout.
 *
 * @return {Request} for chaining
 * @api public
 */

Request.prototype.clearTimeout = function(){
  this._timeout = 0;
  clearTimeout(this._timer);
  return this;
};

/**
 * Abort the request, and clear potential timeout.
 *
 * @return {Request}
 * @api public
 */

Request.prototype.abort = function(){
  if (this.aborted) return;
  this.aborted = true;
  this.xhr.abort();
  this.clearTimeout();
  this.emit('abort');
  return this;
};

/**
 * Set header `field` to `val`, or multiple fields with one object.
 *
 * Examples:
 *
 *      req.get('/')
 *        .set('Accept', 'application/json')
 *        .set('X-API-Key', 'foobar')
 *        .end(callback);
 *
 *      req.get('/')
 *        .set({ Accept: 'application/json', 'X-API-Key': 'foobar' })
 *        .end(callback);
 *
 * @param {String|Object} field
 * @param {String} val
 * @return {Request} for chaining
 * @api public
 */

Request.prototype.set = function(field, val){
  if (isObject(field)) {
    for (var key in field) {
      this.set(key, field[key]);
    }
    return this;
  }
  this._header[field.toLowerCase()] = val;
  this.header[field] = val;
  return this;
};

/**
 * Remove header `field`.
 *
 * Example:
 *
 *      req.get('/')
 *        .unset('User-Agent')
 *        .end(callback);
 *
 * @param {String} field
 * @return {Request} for chaining
 * @api public
 */

Request.prototype.unset = function(field){
  delete this._header[field.toLowerCase()];
  delete this.header[field];
  return this;
};

/**
 * Get case-insensitive header `field` value.
 *
 * @param {String} field
 * @return {String}
 * @api private
 */

Request.prototype.getHeader = function(field){
  return this._header[field.toLowerCase()];
};

/**
 * Set Content-Type to `type`, mapping values from `request.types`.
 *
 * Examples:
 *
 *      superagent.types.xml = 'application/xml';
 *
 *      request.post('/')
 *        .type('xml')
 *        .send(xmlstring)
 *        .end(callback);
 *
 *      request.post('/')
 *        .type('application/xml')
 *        .send(xmlstring)
 *        .end(callback);
 *
 * @param {String} type
 * @return {Request} for chaining
 * @api public
 */

Request.prototype.type = function(type){
  this.set('Content-Type', request.types[type] || type);
  return this;
};

/**
 * Force given parser
 *
 * Sets the body parser no matter type.
 *
 * @param {Function}
 * @api public
 */

Request.prototype.parse = function(fn){
  this._parser = fn;
  return this;
};

/**
 * Set Accept to `type`, mapping values from `request.types`.
 *
 * Examples:
 *
 *      superagent.types.json = 'application/json';
 *
 *      request.get('/agent')
 *        .accept('json')
 *        .end(callback);
 *
 *      request.get('/agent')
 *        .accept('application/json')
 *        .end(callback);
 *
 * @param {String} accept
 * @return {Request} for chaining
 * @api public
 */

Request.prototype.accept = function(type){
  this.set('Accept', request.types[type] || type);
  return this;
};

/**
 * Set Authorization field value with `user` and `pass`.
 *
 * @param {String} user
 * @param {String} pass
 * @return {Request} for chaining
 * @api public
 */

Request.prototype.auth = function(user, pass){
  var str = btoa(user + ':' + pass);
  this.set('Authorization', 'Basic ' + str);
  return this;
};

/**
* Add query-string `val`.
*
* Examples:
*
*   request.get('/shoes')
*     .query('size=10')
*     .query({ color: 'blue' })
*
* @param {Object|String} val
* @return {Request} for chaining
* @api public
*/

Request.prototype.query = function(val){
  if ('string' != typeof val) val = serialize(val);
  if (val) this._query.push(val);
  return this;
};

/**
 * Write the field `name` and `val` for "multipart/form-data"
 * request bodies.
 *
 * ``` js
 * request.post('/upload')
 *   .field('foo', 'bar')
 *   .end(callback);
 * ```
 *
 * @param {String} name
 * @param {String|Blob|File} val
 * @return {Request} for chaining
 * @api public
 */

Request.prototype.field = function(name, val){
  if (!this._formData) this._formData = new root.FormData();
  this._formData.append(name, val);
  return this;
};

/**
 * Queue the given `file` as an attachment to the specified `field`,
 * with optional `filename`.
 *
 * ``` js
 * request.post('/upload')
 *   .attach(new Blob(['<a id="a"><b id="b">hey!</b></a>'], { type: "text/html"}))
 *   .end(callback);
 * ```
 *
 * @param {String} field
 * @param {Blob|File} file
 * @param {String} filename
 * @return {Request} for chaining
 * @api public
 */

Request.prototype.attach = function(field, file, filename){
  if (!this._formData) this._formData = new root.FormData();
  this._formData.append(field, file, filename);
  return this;
};

/**
 * Send `data`, defaulting the `.type()` to "json" when
 * an object is given.
 *
 * Examples:
 *
 *       // querystring
 *       request.get('/search')
 *         .end(callback)
 *
 *       // multiple data "writes"
 *       request.get('/search')
 *         .send({ search: 'query' })
 *         .send({ range: '1..5' })
 *         .send({ order: 'desc' })
 *         .end(callback)
 *
 *       // manual json
 *       request.post('/user')
 *         .type('json')
 *         .send('{"name":"tj"}')
 *         .end(callback)
 *
 *       // auto json
 *       request.post('/user')
 *         .send({ name: 'tj' })
 *         .end(callback)
 *
 *       // manual x-www-form-urlencoded
 *       request.post('/user')
 *         .type('form')
 *         .send('name=tj')
 *         .end(callback)
 *
 *       // auto x-www-form-urlencoded
 *       request.post('/user')
 *         .type('form')
 *         .send({ name: 'tj' })
 *         .end(callback)
 *
 *       // defaults to x-www-form-urlencoded
  *      request.post('/user')
  *        .send('name=tobi')
  *        .send('species=ferret')
  *        .end(callback)
 *
 * @param {String|Object} data
 * @return {Request} for chaining
 * @api public
 */

Request.prototype.send = function(data){
  var obj = isObject(data);
  var type = this.getHeader('Content-Type');

  // merge
  if (obj && isObject(this._data)) {
    for (var key in data) {
      this._data[key] = data[key];
    }
  } else if ('string' == typeof data) {
    if (!type) this.type('form');
    type = this.getHeader('Content-Type');
    if ('application/x-www-form-urlencoded' == type) {
      this._data = this._data
        ? this._data + '&' + data
        : data;
    } else {
      this._data = (this._data || '') + data;
    }
  } else {
    this._data = data;
  }

  if (!obj || isHost(data)) return this;
  if (!type) this.type('json');
  return this;
};

/**
 * Invoke the callback with `err` and `res`
 * and handle arity check.
 *
 * @param {Error} err
 * @param {Response} res
 * @api private
 */

Request.prototype.callback = function(err, res){
  var fn = this._callback;
  this.clearTimeout();
  fn(err, res);
};

/**
 * Invoke callback with x-domain error.
 *
 * @api private
 */

Request.prototype.crossDomainError = function(){
  var err = new Error('Request has been terminated\nPossible causes: the network is offline, Origin is not allowed by Access-Control-Allow-Origin, the page is being unloaded, etc.');
  err.crossDomain = true;

  err.status = this.status;
  err.method = this.method;
  err.url = this.url;

  this.callback(err);
};

/**
 * Invoke callback with timeout error.
 *
 * @api private
 */

Request.prototype.timeoutError = function(){
  var timeout = this._timeout;
  var err = new Error('timeout of ' + timeout + 'ms exceeded');
  err.timeout = timeout;
  this.callback(err);
};

/**
 * Enable transmission of cookies with x-domain requests.
 *
 * Note that for this to work the origin must not be
 * using "Access-Control-Allow-Origin" with a wildcard,
 * and also must set "Access-Control-Allow-Credentials"
 * to "true".
 *
 * @api public
 */

Request.prototype.withCredentials = function(){
  this._withCredentials = true;
  return this;
};

/**
 * Initiate request, invoking callback `fn(res)`
 * with an instanceof `Response`.
 *
 * @param {Function} fn
 * @return {Request} for chaining
 * @api public
 */

Request.prototype.end = function(fn){
  var self = this;
  var xhr = this.xhr = request.getXHR();
  var query = this._query.join('&');
  var timeout = this._timeout;
  var data = this._formData || this._data;

  // store callback
  this._callback = fn || noop;

  // state change
  xhr.onreadystatechange = function(){
    if (4 != xhr.readyState) return;

    // In IE9, reads to any property (e.g. status) off of an aborted XHR will
    // result in the error "Could not complete the operation due to error c00c023f"
    var status;
    try { status = xhr.status } catch(e) { status = 0; }

    if (0 == status) {
      if (self.timedout) return self.timeoutError();
      if (self.aborted) return;
      return self.crossDomainError();
    }
    self.emit('end');
  };

  // progress
  var handleProgress = function(e){
    if (e.total > 0) {
      e.percent = e.loaded / e.total * 100;
    }
    self.emit('progress', e);
  };
  if (this.hasListeners('progress')) {
    xhr.onprogress = handleProgress;
  }
  try {
    if (xhr.upload && this.hasListeners('progress')) {
      xhr.upload.onprogress = handleProgress;
    }
  } catch(e) {
    // Accessing xhr.upload fails in IE from a web worker, so just pretend it doesn't exist.
    // Reported here:
    // https://connect.microsoft.com/IE/feedback/details/837245/xmlhttprequest-upload-throws-invalid-argument-when-used-from-web-worker-context
  }

  // timeout
  if (timeout && !this._timer) {
    this._timer = setTimeout(function(){
      self.timedout = true;
      self.abort();
    }, timeout);
  }

  // querystring
  if (query) {
    query = request.serializeObject(query);
    this.url += ~this.url.indexOf('?')
      ? '&' + query
      : '?' + query;
  }

  // initiate request
  xhr.open(this.method, this.url, true);

  // CORS
  if (this._withCredentials) xhr.withCredentials = true;

  // body
  if ('GET' != this.method && 'HEAD' != this.method && 'string' != typeof data && !isHost(data)) {
    // serialize stuff
    var contentType = this.getHeader('Content-Type');
    var serialize = this._parser || request.serialize[contentType ? contentType.split(';')[0] : ''];
    if (!serialize && isJSON(contentType)) serialize = request.serialize['application/json'];
    if (serialize) data = serialize(data);
  }

  // set header fields
  for (var field in this.header) {
    if (null == this.header[field]) continue;
    xhr.setRequestHeader(field, this.header[field]);
  }

  // send stuff
  this.emit('request', this);

  // IE11 xhr.send(undefined) sends 'undefined' string as POST payload (instead of nothing)
  // We need null here if data is undefined
  xhr.send(typeof data !== 'undefined' ? data : null);
  return this;
};

/**
 * Faux promise support
 *
 * @param {Function} fulfill
 * @param {Function} reject
 * @return {Request}
 */

Request.prototype.then = function (fulfill, reject) {
  return this.end(function(err, res) {
    err ? reject(err) : fulfill(res);
  });
}

/**
 * Expose `Request`.
 */

request.Request = Request;

/**
 * Issue a request:
 *
 * Examples:
 *
 *    request('GET', '/users').end(callback)
 *    request('/users').end(callback)
 *    request('/users', callback)
 *
 * @param {String} method
 * @param {String|Function} url or callback
 * @return {Request}
 * @api public
 */

function request(method, url) {
  // callback
  if ('function' == typeof url) {
    return new Request('GET', method).end(url);
  }

  // url first
  if (1 == arguments.length) {
    return new Request('GET', method);
  }

  return new Request(method, url);
}

/**
 * GET `url` with optional callback `fn(res)`.
 *
 * @param {String} url
 * @param {Mixed|Function} data or fn
 * @param {Function} fn
 * @return {Request}
 * @api public
 */

request.get = function(url, data, fn){
  var req = request('GET', url);
  if ('function' == typeof data) fn = data, data = null;
  if (data) req.query(data);
  if (fn) req.end(fn);
  return req;
};

/**
 * HEAD `url` with optional callback `fn(res)`.
 *
 * @param {String} url
 * @param {Mixed|Function} data or fn
 * @param {Function} fn
 * @return {Request}
 * @api public
 */

request.head = function(url, data, fn){
  var req = request('HEAD', url);
  if ('function' == typeof data) fn = data, data = null;
  if (data) req.send(data);
  if (fn) req.end(fn);
  return req;
};

/**
 * DELETE `url` with optional callback `fn(res)`.
 *
 * @param {String} url
 * @param {Function} fn
 * @return {Request}
 * @api public
 */

function del(url, fn){
  var req = request('DELETE', url);
  if (fn) req.end(fn);
  return req;
};

request.del = del;
request.delete = del;

/**
 * PATCH `url` with optional `data` and callback `fn(res)`.
 *
 * @param {String} url
 * @param {Mixed} data
 * @param {Function} fn
 * @return {Request}
 * @api public
 */

request.patch = function(url, data, fn){
  var req = request('PATCH', url);
  if ('function' == typeof data) fn = data, data = null;
  if (data) req.send(data);
  if (fn) req.end(fn);
  return req;
};

/**
 * POST `url` with optional `data` and callback `fn(res)`.
 *
 * @param {String} url
 * @param {Mixed} data
 * @param {Function} fn
 * @return {Request}
 * @api public
 */

request.post = function(url, data, fn){
  var req = request('POST', url);
  if ('function' == typeof data) fn = data, data = null;
  if (data) req.send(data);
  if (fn) req.end(fn);
  return req;
};

/**
 * PUT `url` with optional `data` and callback `fn(res)`.
 *
 * @param {String} url
 * @param {Mixed|Function} data or fn
 * @param {Function} fn
 * @return {Request}
 * @api public
 */

request.put = function(url, data, fn){
  var req = request('PUT', url);
  if ('function' == typeof data) fn = data, data = null;
  if (data) req.send(data);
  if (fn) req.end(fn);
  return req;
};

/**
 * Expose `request`.
 */

module.exports = request;

},{"emitter":"/Users/jrmerz/dev/cstars/AHB/farm-budgets-sdk/node_modules/superagent/node_modules/component-emitter/index.js","reduce":"/Users/jrmerz/dev/cstars/AHB/farm-budgets-sdk/node_modules/superagent/node_modules/reduce-component/index.js"}],"/Users/jrmerz/dev/cstars/AHB/farm-budgets-sdk/node_modules/superagent/node_modules/component-emitter/index.js":[function(require,module,exports){

/**
 * Expose `Emitter`.
 */

module.exports = Emitter;

/**
 * Initialize a new `Emitter`.
 *
 * @api public
 */

function Emitter(obj) {
  if (obj) return mixin(obj);
};

/**
 * Mixin the emitter properties.
 *
 * @param {Object} obj
 * @return {Object}
 * @api private
 */

function mixin(obj) {
  for (var key in Emitter.prototype) {
    obj[key] = Emitter.prototype[key];
  }
  return obj;
}

/**
 * Listen on the given `event` with `fn`.
 *
 * @param {String} event
 * @param {Function} fn
 * @return {Emitter}
 * @api public
 */

Emitter.prototype.on =
Emitter.prototype.addEventListener = function(event, fn){
  this._callbacks = this._callbacks || {};
  (this._callbacks[event] = this._callbacks[event] || [])
    .push(fn);
  return this;
};

/**
 * Adds an `event` listener that will be invoked a single
 * time then automatically removed.
 *
 * @param {String} event
 * @param {Function} fn
 * @return {Emitter}
 * @api public
 */

Emitter.prototype.once = function(event, fn){
  var self = this;
  this._callbacks = this._callbacks || {};

  function on() {
    self.off(event, on);
    fn.apply(this, arguments);
  }

  on.fn = fn;
  this.on(event, on);
  return this;
};

/**
 * Remove the given callback for `event` or all
 * registered callbacks.
 *
 * @param {String} event
 * @param {Function} fn
 * @return {Emitter}
 * @api public
 */

Emitter.prototype.off =
Emitter.prototype.removeListener =
Emitter.prototype.removeAllListeners =
Emitter.prototype.removeEventListener = function(event, fn){
  this._callbacks = this._callbacks || {};

  // all
  if (0 == arguments.length) {
    this._callbacks = {};
    return this;
  }

  // specific event
  var callbacks = this._callbacks[event];
  if (!callbacks) return this;

  // remove all handlers
  if (1 == arguments.length) {
    delete this._callbacks[event];
    return this;
  }

  // remove specific handler
  var cb;
  for (var i = 0; i < callbacks.length; i++) {
    cb = callbacks[i];
    if (cb === fn || cb.fn === fn) {
      callbacks.splice(i, 1);
      break;
    }
  }
  return this;
};

/**
 * Emit `event` with the given args.
 *
 * @param {String} event
 * @param {Mixed} ...
 * @return {Emitter}
 */

Emitter.prototype.emit = function(event){
  this._callbacks = this._callbacks || {};
  var args = [].slice.call(arguments, 1)
    , callbacks = this._callbacks[event];

  if (callbacks) {
    callbacks = callbacks.slice(0);
    for (var i = 0, len = callbacks.length; i < len; ++i) {
      callbacks[i].apply(this, args);
    }
  }

  return this;
};

/**
 * Return array of callbacks for `event`.
 *
 * @param {String} event
 * @return {Array}
 * @api public
 */

Emitter.prototype.listeners = function(event){
  this._callbacks = this._callbacks || {};
  return this._callbacks[event] || [];
};

/**
 * Check if this emitter has `event` handlers.
 *
 * @param {String} event
 * @return {Boolean}
 * @api public
 */

Emitter.prototype.hasListeners = function(event){
  return !! this.listeners(event).length;
};

},{}],"/Users/jrmerz/dev/cstars/AHB/farm-budgets-sdk/node_modules/superagent/node_modules/reduce-component/index.js":[function(require,module,exports){

/**
 * Reduce `arr` with `fn`.
 *
 * @param {Array} arr
 * @param {Function} fn
 * @param {Mixed} initial
 *
 * TODO: combatible error handling?
 */

module.exports = function(arr, fn, initial){  
  var idx = 0;
  var len = arr.length;
  var curr = arguments.length == 3
    ? initial
    : arr[idx++];

  while (idx < len) {
    curr = fn.call(null, curr, arr[idx], ++idx, arr);
  }
  
  return curr;
};
},{}],"/Users/jrmerz/dev/cstars/AHB/farm-budgets-sdk/node_modules/ucum.js/generated/equivalents.json":[function(require,module,exports){
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

},{}],"/Users/jrmerz/dev/cstars/AHB/farm-budgets-sdk/node_modules/ucum.js/generated/metrics.json":[function(require,module,exports){
module.exports={"mol":true,"sr":true,"Hz":true,"N":true,"Pa":true,"J":true,"W":true,"A":true,"V":true,"F":true,"Ohm":true,"S":true,"Wb":true,"Cel":true,"T":true,"H":true,"lm":true,"lx":true,"Bq":true,"Gy":true,"Sv":true,"l":true,"L":true,"ar":true,"t":true,"bar":true,"u":true,"eV":true,"pc":true,"[c]":true,"[h]":true,"[k]":true,"[eps_0]":true,"[mu_0]":true,"[e]":true,"[m_e]":true,"[m_p]":true,"[G]":true,"[g]":true,"[ly]":true,"gf":true,"Ky":true,"Gal":true,"dyn":true,"erg":true,"P":true,"Bi":true,"St":true,"Mx":true,"G":true,"Oe":true,"Gb":true,"sb":true,"Lmb":true,"ph":true,"Ci":true,"R":true,"RAD":true,"REM":true,"cal_[15]":true,"cal_[20]":true,"cal_m":true,"cal_IT":true,"cal_th":true,"cal":true,"tex":true,"m[H2O]":true,"m[Hg]":true,"eq":true,"osm":true,"g%":true,"kat":true,"U":true,"[iU]":true,"[IU]":true,"Np":true,"B":true,"B[SPL]":true,"B[V]":true,"B[mV]":true,"B[uV]":true,"B[10.nV]":true,"B[W]":true,"B[kW]":true,"st":true,"mho":true,"bit":true,"By":true,"Bd":true,"m":true,"s":true,"g":true,"rad":true,"K":true,"C":true,"cd":true}

},{}],"/Users/jrmerz/dev/cstars/AHB/farm-budgets-sdk/node_modules/ucum.js/generated/prefixes.json":[function(require,module,exports){
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

},{}],"/Users/jrmerz/dev/cstars/AHB/farm-budgets-sdk/node_modules/ucum.js/generated/ucum-parser.js":[function(require,module,exports){
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

},{"../lib/helpers":"/Users/jrmerz/dev/cstars/AHB/farm-budgets-sdk/node_modules/ucum.js/lib/helpers.js","./metrics.json":"/Users/jrmerz/dev/cstars/AHB/farm-budgets-sdk/node_modules/ucum.js/generated/metrics.json","./prefixes.json":"/Users/jrmerz/dev/cstars/AHB/farm-budgets-sdk/node_modules/ucum.js/generated/prefixes.json"}],"/Users/jrmerz/dev/cstars/AHB/farm-budgets-sdk/node_modules/ucum.js/lib/helpers.js":[function(require,module,exports){
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

},{}],"/Users/jrmerz/dev/cstars/AHB/farm-budgets-sdk/node_modules/ucum.js/ucum.js":[function(require,module,exports){
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

},{"./generated/equivalents.json":"/Users/jrmerz/dev/cstars/AHB/farm-budgets-sdk/node_modules/ucum.js/generated/equivalents.json","./generated/ucum-parser.js":"/Users/jrmerz/dev/cstars/AHB/farm-budgets-sdk/node_modules/ucum.js/generated/ucum-parser.js","./lib/helpers.js":"/Users/jrmerz/dev/cstars/AHB/farm-budgets-sdk/node_modules/ucum.js/lib/helpers.js"}]},{},["/Users/jrmerz/dev/cstars/AHB/farm-budgets-app/lib/sdk.js"])("/Users/jrmerz/dev/cstars/AHB/farm-budgets-app/lib/sdk.js")
});