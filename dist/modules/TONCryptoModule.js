"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = exports.TONMnemonicDictionary = exports.TONOutputEncoding = void 0;

var _regenerator = _interopRequireDefault(require("@babel/runtime/regenerator"));

var _asyncToGenerator2 = _interopRequireDefault(require("@babel/runtime/helpers/asyncToGenerator"));

var _classCallCheck2 = _interopRequireDefault(require("@babel/runtime/helpers/classCallCheck"));

var _createClass2 = _interopRequireDefault(require("@babel/runtime/helpers/createClass"));

var _possibleConstructorReturn2 = _interopRequireDefault(require("@babel/runtime/helpers/possibleConstructorReturn"));

var _getPrototypeOf2 = _interopRequireDefault(require("@babel/runtime/helpers/getPrototypeOf"));

var _inherits2 = _interopRequireDefault(require("@babel/runtime/helpers/inherits"));

var _TONModule2 = require("../TONModule");

/*
 * Copyright 2018-2019 TON DEV SOLUTIONS LTD.
 *
 * Licensed under the SOFTWARE EVALUATION License (the "License"); you may not use
 * this file except in compliance with the License.  You may obtain a copy of the
 * License at:
 *
 * http://www.ton.dev/licenses
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific TON DEV software governing permissions and
 * limitations under the License.
 */

/* eslint-disable class-methods-use-this,prefer-object-spread */
var TONOutputEncoding = {
  Text: 'Text',
  Hex: 'Hex',
  HexUppercase: 'HexUppercase',
  Base64: 'Base64'
};
exports.TONOutputEncoding = TONOutputEncoding;
var TONMnemonicDictionary = {
  TON: 0,
  ENGLISH: 1,
  CHINESE_SIMPLIFIED: 2,
  CHINESE_TRADITIONAL: 3,
  FRENCH: 4,
  ITALIAN: 5,
  JAPANESE: 6,
  KOREAN: 7,
  SPANISH: 8
};
exports.TONMnemonicDictionary = TONMnemonicDictionary;

function fixInputMessage(message) {
  return message.text ? {
    base64: Buffer.from(message.text, 'utf8').toString('base64')
  } : message;
}

var TONCryptoModule =
/*#__PURE__*/
function (_TONModule) {
  (0, _inherits2["default"])(TONCryptoModule, _TONModule);

  function TONCryptoModule() {
    (0, _classCallCheck2["default"])(this, TONCryptoModule);
    return (0, _possibleConstructorReturn2["default"])(this, (0, _getPrototypeOf2["default"])(TONCryptoModule).apply(this, arguments));
  }

  (0, _createClass2["default"])(TONCryptoModule, [{
    key: "factorize",
    value: function () {
      var _factorize = (0, _asyncToGenerator2["default"])(
      /*#__PURE__*/
      _regenerator["default"].mark(function _callee(challengeHex) {
        return _regenerator["default"].wrap(function _callee$(_context) {
          while (1) {
            switch (_context.prev = _context.next) {
              case 0:
                return _context.abrupt("return", this.requestLibrary('crypto.math.factorize', challengeHex));

              case 1:
              case "end":
                return _context.stop();
            }
          }
        }, _callee, this);
      }));

      function factorize(_x) {
        return _factorize.apply(this, arguments);
      }

      return factorize;
    }()
  }, {
    key: "modularPower",
    value: function () {
      var _modularPower = (0, _asyncToGenerator2["default"])(
      /*#__PURE__*/
      _regenerator["default"].mark(function _callee2(baseHex, exponentHex, modulusHex) {
        return _regenerator["default"].wrap(function _callee2$(_context2) {
          while (1) {
            switch (_context2.prev = _context2.next) {
              case 0:
                return _context2.abrupt("return", this.requestLibrary('crypto.math.modularPower', {
                  base: baseHex,
                  exponent: exponentHex,
                  modulus: modulusHex
                }));

              case 1:
              case "end":
                return _context2.stop();
            }
          }
        }, _callee2, this);
      }));

      function modularPower(_x2, _x3, _x4) {
        return _modularPower.apply(this, arguments);
      }

      return modularPower;
    }()
  }, {
    key: "randomGenerateBytes",
    value: function () {
      var _randomGenerateBytes = (0, _asyncToGenerator2["default"])(
      /*#__PURE__*/
      _regenerator["default"].mark(function _callee3(length) {
        var outputEncoding,
            _args3 = arguments;
        return _regenerator["default"].wrap(function _callee3$(_context3) {
          while (1) {
            switch (_context3.prev = _context3.next) {
              case 0:
                outputEncoding = _args3.length > 1 && _args3[1] !== undefined ? _args3[1] : TONOutputEncoding.Hex;
                return _context3.abrupt("return", this.requestLibrary('crypto.random.generateBytes', {
                  length: length,
                  outputEncoding: outputEncoding
                }));

              case 2:
              case "end":
                return _context3.stop();
            }
          }
        }, _callee3, this);
      }));

      function randomGenerateBytes(_x5) {
        return _randomGenerateBytes.apply(this, arguments);
      }

      return randomGenerateBytes;
    }()
  }, {
    key: "ed25519Keypair",
    value: function () {
      var _ed25519Keypair = (0, _asyncToGenerator2["default"])(
      /*#__PURE__*/
      _regenerator["default"].mark(function _callee4() {
        return _regenerator["default"].wrap(function _callee4$(_context4) {
          while (1) {
            switch (_context4.prev = _context4.next) {
              case 0:
                return _context4.abrupt("return", this.requestLibrary('crypto.ed25519.keypair'));

              case 1:
              case "end":
                return _context4.stop();
            }
          }
        }, _callee4, this);
      }));

      function ed25519Keypair() {
        return _ed25519Keypair.apply(this, arguments);
      }

      return ed25519Keypair;
    }()
  }, {
    key: "publicKeyToString",
    value: function () {
      var _publicKeyToString = (0, _asyncToGenerator2["default"])(
      /*#__PURE__*/
      _regenerator["default"].mark(function _callee5(key) {
        return _regenerator["default"].wrap(function _callee5$(_context5) {
          while (1) {
            switch (_context5.prev = _context5.next) {
              case 0:
                return _context5.abrupt("return", this.requestLibrary('crypto.ton_public_key_string', key));

              case 1:
              case "end":
                return _context5.stop();
            }
          }
        }, _callee5, this);
      }));

      function publicKeyToString(_x6) {
        return _publicKeyToString.apply(this, arguments);
      }

      return publicKeyToString;
    }()
  }, {
    key: "sha512",
    value: function () {
      var _sha = (0, _asyncToGenerator2["default"])(
      /*#__PURE__*/
      _regenerator["default"].mark(function _callee6(message) {
        var outputEncoding,
            _args6 = arguments;
        return _regenerator["default"].wrap(function _callee6$(_context6) {
          while (1) {
            switch (_context6.prev = _context6.next) {
              case 0:
                outputEncoding = _args6.length > 1 && _args6[1] !== undefined ? _args6[1] : TONOutputEncoding.Hex;
                return _context6.abrupt("return", this.requestLibrary('crypto.sha512', {
                  message: fixInputMessage(message),
                  outputEncoding: outputEncoding
                }));

              case 2:
              case "end":
                return _context6.stop();
            }
          }
        }, _callee6, this);
      }));

      function sha512(_x7) {
        return _sha.apply(this, arguments);
      }

      return sha512;
    }()
  }, {
    key: "sha256",
    value: function () {
      var _sha2 = (0, _asyncToGenerator2["default"])(
      /*#__PURE__*/
      _regenerator["default"].mark(function _callee7(message) {
        var outputEncoding,
            _args7 = arguments;
        return _regenerator["default"].wrap(function _callee7$(_context7) {
          while (1) {
            switch (_context7.prev = _context7.next) {
              case 0:
                outputEncoding = _args7.length > 1 && _args7[1] !== undefined ? _args7[1] : TONOutputEncoding.Hex;
                return _context7.abrupt("return", this.requestLibrary('crypto.sha256', {
                  message: fixInputMessage(message),
                  outputEncoding: outputEncoding
                }));

              case 2:
              case "end":
                return _context7.stop();
            }
          }
        }, _callee7, this);
      }));

      function sha256(_x8) {
        return _sha2.apply(this, arguments);
      }

      return sha256;
    }()
  }, {
    key: "scrypt",
    value: function () {
      var _scrypt = (0, _asyncToGenerator2["default"])(
      /*#__PURE__*/
      _regenerator["default"].mark(function _callee8(params) {
        var fixed;
        return _regenerator["default"].wrap(function _callee8$(_context8) {
          while (1) {
            switch (_context8.prev = _context8.next) {
              case 0:
                fixed = Object.assign({}, params);
                fixed.password = fixInputMessage(params.password);
                fixed.salt = fixInputMessage(params.salt);
                return _context8.abrupt("return", this.requestLibrary('crypto.scrypt', fixed));

              case 4:
              case "end":
                return _context8.stop();
            }
          }
        }, _callee8, this);
      }));

      function scrypt(_x9) {
        return _scrypt.apply(this, arguments);
      }

      return scrypt;
    }()
  }, {
    key: "naclBoxKeypair",
    value: function () {
      var _naclBoxKeypair = (0, _asyncToGenerator2["default"])(
      /*#__PURE__*/
      _regenerator["default"].mark(function _callee9() {
        return _regenerator["default"].wrap(function _callee9$(_context9) {
          while (1) {
            switch (_context9.prev = _context9.next) {
              case 0:
                return _context9.abrupt("return", this.requestLibrary('crypto.nacl.box.keypair'));

              case 1:
              case "end":
                return _context9.stop();
            }
          }
        }, _callee9, this);
      }));

      function naclBoxKeypair() {
        return _naclBoxKeypair.apply(this, arguments);
      }

      return naclBoxKeypair;
    }()
  }, {
    key: "naclBoxKeypairFromSecretKey",
    value: function () {
      var _naclBoxKeypairFromSecretKey = (0, _asyncToGenerator2["default"])(
      /*#__PURE__*/
      _regenerator["default"].mark(function _callee10(secretKey) {
        return _regenerator["default"].wrap(function _callee10$(_context10) {
          while (1) {
            switch (_context10.prev = _context10.next) {
              case 0:
                return _context10.abrupt("return", this.requestLibrary('crypto.nacl.box.keypair.fromSecretKey', secretKey));

              case 1:
              case "end":
                return _context10.stop();
            }
          }
        }, _callee10, this);
      }));

      function naclBoxKeypairFromSecretKey(_x10) {
        return _naclBoxKeypairFromSecretKey.apply(this, arguments);
      }

      return naclBoxKeypairFromSecretKey;
    }()
  }, {
    key: "naclSignKeypair",
    value: function () {
      var _naclSignKeypair = (0, _asyncToGenerator2["default"])(
      /*#__PURE__*/
      _regenerator["default"].mark(function _callee11() {
        return _regenerator["default"].wrap(function _callee11$(_context11) {
          while (1) {
            switch (_context11.prev = _context11.next) {
              case 0:
                return _context11.abrupt("return", this.requestLibrary('crypto.nacl.sign.keypair'));

              case 1:
              case "end":
                return _context11.stop();
            }
          }
        }, _callee11, this);
      }));

      function naclSignKeypair() {
        return _naclSignKeypair.apply(this, arguments);
      }

      return naclSignKeypair;
    }()
  }, {
    key: "naclSignKeypairFromSecretKey",
    value: function () {
      var _naclSignKeypairFromSecretKey = (0, _asyncToGenerator2["default"])(
      /*#__PURE__*/
      _regenerator["default"].mark(function _callee12(secretKey) {
        return _regenerator["default"].wrap(function _callee12$(_context12) {
          while (1) {
            switch (_context12.prev = _context12.next) {
              case 0:
                return _context12.abrupt("return", this.requestLibrary('crypto.nacl.sign.keypair.fromSecretKey', secretKey));

              case 1:
              case "end":
                return _context12.stop();
            }
          }
        }, _callee12, this);
      }));

      function naclSignKeypairFromSecretKey(_x11) {
        return _naclSignKeypairFromSecretKey.apply(this, arguments);
      }

      return naclSignKeypairFromSecretKey;
    }()
  }, {
    key: "naclBox",
    value: function () {
      var _naclBox = (0, _asyncToGenerator2["default"])(
      /*#__PURE__*/
      _regenerator["default"].mark(function _callee13(params) {
        var fixed;
        return _regenerator["default"].wrap(function _callee13$(_context13) {
          while (1) {
            switch (_context13.prev = _context13.next) {
              case 0:
                fixed = Object.assign({}, params);
                fixed.message = fixInputMessage(params.message);
                return _context13.abrupt("return", this.requestLibrary('crypto.nacl.box', fixed));

              case 3:
              case "end":
                return _context13.stop();
            }
          }
        }, _callee13, this);
      }));

      function naclBox(_x12) {
        return _naclBox.apply(this, arguments);
      }

      return naclBox;
    }()
  }, {
    key: "naclBoxOpen",
    value: function () {
      var _naclBoxOpen = (0, _asyncToGenerator2["default"])(
      /*#__PURE__*/
      _regenerator["default"].mark(function _callee14(params) {
        var fixed;
        return _regenerator["default"].wrap(function _callee14$(_context14) {
          while (1) {
            switch (_context14.prev = _context14.next) {
              case 0:
                fixed = Object.assign({}, params);
                fixed.message = fixInputMessage(params.message);
                return _context14.abrupt("return", this.requestLibrary('crypto.nacl.box.open', fixed));

              case 3:
              case "end":
                return _context14.stop();
            }
          }
        }, _callee14, this);
      }));

      function naclBoxOpen(_x13) {
        return _naclBoxOpen.apply(this, arguments);
      }

      return naclBoxOpen;
    }()
  }, {
    key: "naclSecretBox",
    value: function () {
      var _naclSecretBox = (0, _asyncToGenerator2["default"])(
      /*#__PURE__*/
      _regenerator["default"].mark(function _callee15(params) {
        var fixed;
        return _regenerator["default"].wrap(function _callee15$(_context15) {
          while (1) {
            switch (_context15.prev = _context15.next) {
              case 0:
                fixed = Object.assign({}, params);
                fixed.message = fixInputMessage(params.message);
                return _context15.abrupt("return", this.requestLibrary('crypto.nacl.secret.box', fixed));

              case 3:
              case "end":
                return _context15.stop();
            }
          }
        }, _callee15, this);
      }));

      function naclSecretBox(_x14) {
        return _naclSecretBox.apply(this, arguments);
      }

      return naclSecretBox;
    }()
  }, {
    key: "naclSecretBoxOpen",
    value: function () {
      var _naclSecretBoxOpen = (0, _asyncToGenerator2["default"])(
      /*#__PURE__*/
      _regenerator["default"].mark(function _callee16(params) {
        var fixed;
        return _regenerator["default"].wrap(function _callee16$(_context16) {
          while (1) {
            switch (_context16.prev = _context16.next) {
              case 0:
                fixed = Object.assign({}, params);
                fixed.message = fixInputMessage(params.message);
                return _context16.abrupt("return", this.requestLibrary('crypto.nacl.secret.box.open', fixed));

              case 3:
              case "end":
                return _context16.stop();
            }
          }
        }, _callee16, this);
      }));

      function naclSecretBoxOpen(_x15) {
        return _naclSecretBoxOpen.apply(this, arguments);
      }

      return naclSecretBoxOpen;
    }()
  }, {
    key: "naclSign",
    value: function () {
      var _naclSign = (0, _asyncToGenerator2["default"])(
      /*#__PURE__*/
      _regenerator["default"].mark(function _callee17(message, key) {
        var outputEncoding,
            _args17 = arguments;
        return _regenerator["default"].wrap(function _callee17$(_context17) {
          while (1) {
            switch (_context17.prev = _context17.next) {
              case 0:
                outputEncoding = _args17.length > 2 && _args17[2] !== undefined ? _args17[2] : TONOutputEncoding.Hex;
                return _context17.abrupt("return", this.requestLibrary('crypto.nacl.sign', {
                  message: fixInputMessage(message),
                  key: key,
                  outputEncoding: outputEncoding
                }));

              case 2:
              case "end":
                return _context17.stop();
            }
          }
        }, _callee17, this);
      }));

      function naclSign(_x16, _x17) {
        return _naclSign.apply(this, arguments);
      }

      return naclSign;
    }()
  }, {
    key: "naclSignOpen",
    value: function () {
      var _naclSignOpen = (0, _asyncToGenerator2["default"])(
      /*#__PURE__*/
      _regenerator["default"].mark(function _callee18(message, key) {
        var outputEncoding,
            _args18 = arguments;
        return _regenerator["default"].wrap(function _callee18$(_context18) {
          while (1) {
            switch (_context18.prev = _context18.next) {
              case 0:
                outputEncoding = _args18.length > 2 && _args18[2] !== undefined ? _args18[2] : TONOutputEncoding.Hex;
                return _context18.abrupt("return", this.requestLibrary('crypto.nacl.sign.open', {
                  message: fixInputMessage(message),
                  key: key,
                  outputEncoding: outputEncoding
                }));

              case 2:
              case "end":
                return _context18.stop();
            }
          }
        }, _callee18, this);
      }));

      function naclSignOpen(_x18, _x19) {
        return _naclSignOpen.apply(this, arguments);
      }

      return naclSignOpen;
    }()
  }, {
    key: "naclSignDetached",
    value: function () {
      var _naclSignDetached = (0, _asyncToGenerator2["default"])(
      /*#__PURE__*/
      _regenerator["default"].mark(function _callee19(message, key) {
        var outputEncoding,
            _args19 = arguments;
        return _regenerator["default"].wrap(function _callee19$(_context19) {
          while (1) {
            switch (_context19.prev = _context19.next) {
              case 0:
                outputEncoding = _args19.length > 2 && _args19[2] !== undefined ? _args19[2] : TONOutputEncoding.Hex;
                return _context19.abrupt("return", this.requestLibrary('crypto.nacl.sign.detached', {
                  message: fixInputMessage(message),
                  key: key,
                  outputEncoding: outputEncoding
                }));

              case 2:
              case "end":
                return _context19.stop();
            }
          }
        }, _callee19, this);
      }));

      function naclSignDetached(_x20, _x21) {
        return _naclSignDetached.apply(this, arguments);
      }

      return naclSignDetached;
    }() // Mnemonic

  }, {
    key: "mnemonicWords",
    value: function () {
      var _mnemonicWords = (0, _asyncToGenerator2["default"])(
      /*#__PURE__*/
      _regenerator["default"].mark(function _callee20(params) {
        return _regenerator["default"].wrap(function _callee20$(_context20) {
          while (1) {
            switch (_context20.prev = _context20.next) {
              case 0:
                return _context20.abrupt("return", this.requestLibrary('crypto.mnemonic.words', params || {}));

              case 1:
              case "end":
                return _context20.stop();
            }
          }
        }, _callee20, this);
      }));

      function mnemonicWords(_x22) {
        return _mnemonicWords.apply(this, arguments);
      }

      return mnemonicWords;
    }()
  }, {
    key: "mnemonicFromRandom",
    value: function () {
      var _mnemonicFromRandom = (0, _asyncToGenerator2["default"])(
      /*#__PURE__*/
      _regenerator["default"].mark(function _callee21(params) {
        return _regenerator["default"].wrap(function _callee21$(_context21) {
          while (1) {
            switch (_context21.prev = _context21.next) {
              case 0:
                return _context21.abrupt("return", this.requestLibrary('crypto.mnemonic.from.random', params || {}));

              case 1:
              case "end":
                return _context21.stop();
            }
          }
        }, _callee21, this);
      }));

      function mnemonicFromRandom(_x23) {
        return _mnemonicFromRandom.apply(this, arguments);
      }

      return mnemonicFromRandom;
    }()
  }, {
    key: "mnemonicFromEntropy",
    value: function () {
      var _mnemonicFromEntropy = (0, _asyncToGenerator2["default"])(
      /*#__PURE__*/
      _regenerator["default"].mark(function _callee22(params) {
        return _regenerator["default"].wrap(function _callee22$(_context22) {
          while (1) {
            switch (_context22.prev = _context22.next) {
              case 0:
                return _context22.abrupt("return", this.requestLibrary('crypto.mnemonic.from.entropy', params));

              case 1:
              case "end":
                return _context22.stop();
            }
          }
        }, _callee22, this);
      }));

      function mnemonicFromEntropy(_x24) {
        return _mnemonicFromEntropy.apply(this, arguments);
      }

      return mnemonicFromEntropy;
    }()
  }, {
    key: "mnemonicIsValid",
    value: function () {
      var _mnemonicIsValid = (0, _asyncToGenerator2["default"])(
      /*#__PURE__*/
      _regenerator["default"].mark(function _callee23(params) {
        return _regenerator["default"].wrap(function _callee23$(_context23) {
          while (1) {
            switch (_context23.prev = _context23.next) {
              case 0:
                return _context23.abrupt("return", this.requestLibrary('crypto.mnemonic.verify', params));

              case 1:
              case "end":
                return _context23.stop();
            }
          }
        }, _callee23, this);
      }));

      function mnemonicIsValid(_x25) {
        return _mnemonicIsValid.apply(this, arguments);
      }

      return mnemonicIsValid;
    }()
  }, {
    key: "mnemonicDeriveSignKeys",
    value: function () {
      var _mnemonicDeriveSignKeys = (0, _asyncToGenerator2["default"])(
      /*#__PURE__*/
      _regenerator["default"].mark(function _callee24(params) {
        return _regenerator["default"].wrap(function _callee24$(_context24) {
          while (1) {
            switch (_context24.prev = _context24.next) {
              case 0:
                return _context24.abrupt("return", this.requestLibrary('crypto.mnemonic.derive.sign.keys', params));

              case 1:
              case "end":
                return _context24.stop();
            }
          }
        }, _callee24, this);
      }));

      function mnemonicDeriveSignKeys(_x26) {
        return _mnemonicDeriveSignKeys.apply(this, arguments);
      }

      return mnemonicDeriveSignKeys;
    }() // HDKeys

  }, {
    key: "hdkeyXPrvFromMnemonic",
    value: function () {
      var _hdkeyXPrvFromMnemonic = (0, _asyncToGenerator2["default"])(
      /*#__PURE__*/
      _regenerator["default"].mark(function _callee25(phrase) {
        return _regenerator["default"].wrap(function _callee25$(_context25) {
          while (1) {
            switch (_context25.prev = _context25.next) {
              case 0:
                return _context25.abrupt("return", this.requestLibrary('crypto.hdkey.xprv.from.mnemonic', {
                  phrase: phrase
                }));

              case 1:
              case "end":
                return _context25.stop();
            }
          }
        }, _callee25, this);
      }));

      function hdkeyXPrvFromMnemonic(_x27) {
        return _hdkeyXPrvFromMnemonic.apply(this, arguments);
      }

      return hdkeyXPrvFromMnemonic;
    }()
  }, {
    key: "hdkeyXPrvDerive",
    value: function () {
      var _hdkeyXPrvDerive = (0, _asyncToGenerator2["default"])(
      /*#__PURE__*/
      _regenerator["default"].mark(function _callee26(serialized, index, hardened, compliant) {
        return _regenerator["default"].wrap(function _callee26$(_context26) {
          while (1) {
            switch (_context26.prev = _context26.next) {
              case 0:
                return _context26.abrupt("return", this.requestLibrary('crypto.hdkey.xprv.derive', {
                  serialized: serialized,
                  index: index,
                  hardened: hardened,
                  compliant: compliant
                }));

              case 1:
              case "end":
                return _context26.stop();
            }
          }
        }, _callee26, this);
      }));

      function hdkeyXPrvDerive(_x28, _x29, _x30, _x31) {
        return _hdkeyXPrvDerive.apply(this, arguments);
      }

      return hdkeyXPrvDerive;
    }()
  }, {
    key: "hdkeyXPrvDerivePath",
    value: function () {
      var _hdkeyXPrvDerivePath = (0, _asyncToGenerator2["default"])(
      /*#__PURE__*/
      _regenerator["default"].mark(function _callee27(serialized, path, compliant) {
        return _regenerator["default"].wrap(function _callee27$(_context27) {
          while (1) {
            switch (_context27.prev = _context27.next) {
              case 0:
                return _context27.abrupt("return", this.requestLibrary('crypto.hdkey.xprv.derive.path', {
                  serialized: serialized,
                  path: path,
                  compliant: compliant
                }));

              case 1:
              case "end":
                return _context27.stop();
            }
          }
        }, _callee27, this);
      }));

      function hdkeyXPrvDerivePath(_x32, _x33, _x34) {
        return _hdkeyXPrvDerivePath.apply(this, arguments);
      }

      return hdkeyXPrvDerivePath;
    }()
  }, {
    key: "hdkeyXPrvSecret",
    value: function () {
      var _hdkeyXPrvSecret = (0, _asyncToGenerator2["default"])(
      /*#__PURE__*/
      _regenerator["default"].mark(function _callee28(serialized) {
        return _regenerator["default"].wrap(function _callee28$(_context28) {
          while (1) {
            switch (_context28.prev = _context28.next) {
              case 0:
                return _context28.abrupt("return", this.requestLibrary('crypto.hdkey.xprv.secret', {
                  serialized: serialized
                }));

              case 1:
              case "end":
                return _context28.stop();
            }
          }
        }, _callee28, this);
      }));

      function hdkeyXPrvSecret(_x35) {
        return _hdkeyXPrvSecret.apply(this, arguments);
      }

      return hdkeyXPrvSecret;
    }()
  }, {
    key: "hdkeyXPrvPublic",
    value: function () {
      var _hdkeyXPrvPublic = (0, _asyncToGenerator2["default"])(
      /*#__PURE__*/
      _regenerator["default"].mark(function _callee29(serialized) {
        return _regenerator["default"].wrap(function _callee29$(_context29) {
          while (1) {
            switch (_context29.prev = _context29.next) {
              case 0:
                return _context29.abrupt("return", this.requestLibrary('crypto.hdkey.xprv.public', {
                  serialized: serialized
                }));

              case 1:
              case "end":
                return _context29.stop();
            }
          }
        }, _callee29, this);
      }));

      function hdkeyXPrvPublic(_x36) {
        return _hdkeyXPrvPublic.apply(this, arguments);
      }

      return hdkeyXPrvPublic;
    }()
  }]);
  return TONCryptoModule;
}(_TONModule2.TONModule);

exports["default"] = TONCryptoModule;
TONCryptoModule.moduleName = 'TONCryptoModule';
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy9tb2R1bGVzL1RPTkNyeXB0b01vZHVsZS5qcyJdLCJuYW1lcyI6WyJUT05PdXRwdXRFbmNvZGluZyIsIlRleHQiLCJIZXgiLCJIZXhVcHBlcmNhc2UiLCJCYXNlNjQiLCJUT05NbmVtb25pY0RpY3Rpb25hcnkiLCJUT04iLCJFTkdMSVNIIiwiQ0hJTkVTRV9TSU1QTElGSUVEIiwiQ0hJTkVTRV9UUkFESVRJT05BTCIsIkZSRU5DSCIsIklUQUxJQU4iLCJKQVBBTkVTRSIsIktPUkVBTiIsIlNQQU5JU0giLCJmaXhJbnB1dE1lc3NhZ2UiLCJtZXNzYWdlIiwidGV4dCIsImJhc2U2NCIsIkJ1ZmZlciIsImZyb20iLCJ0b1N0cmluZyIsIlRPTkNyeXB0b01vZHVsZSIsImNoYWxsZW5nZUhleCIsInJlcXVlc3RMaWJyYXJ5IiwiYmFzZUhleCIsImV4cG9uZW50SGV4IiwibW9kdWx1c0hleCIsImJhc2UiLCJleHBvbmVudCIsIm1vZHVsdXMiLCJsZW5ndGgiLCJvdXRwdXRFbmNvZGluZyIsImtleSIsInBhcmFtcyIsImZpeGVkIiwiT2JqZWN0IiwiYXNzaWduIiwicGFzc3dvcmQiLCJzYWx0Iiwic2VjcmV0S2V5IiwicGhyYXNlIiwic2VyaWFsaXplZCIsImluZGV4IiwiaGFyZGVuZWQiLCJjb21wbGlhbnQiLCJwYXRoIiwiVE9OTW9kdWxlIiwibW9kdWxlTmFtZSJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFnQ0E7O0FBaENBOzs7Ozs7Ozs7Ozs7Ozs7O0FBaUJBO0FBaUJPLElBQU1BLGlCQUFpQixHQUFHO0FBQzdCQyxFQUFBQSxJQUFJLEVBQUUsTUFEdUI7QUFFN0JDLEVBQUFBLEdBQUcsRUFBRSxLQUZ3QjtBQUc3QkMsRUFBQUEsWUFBWSxFQUFFLGNBSGU7QUFJN0JDLEVBQUFBLE1BQU0sRUFBRTtBQUpxQixDQUExQjs7QUFRQSxJQUFNQyxxQkFBcUIsR0FBRztBQUNqQ0MsRUFBQUEsR0FBRyxFQUFFLENBRDRCO0FB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V0gsVTs7Ozs7bURBQ1gsS0FBS2xCLGNBQUwsQ0FBb0IsMEJBQXBCLEVBQWdEO0FBQUVrQixrQkFBQUEsVUFBVSxFQUFWQTtBQUFGLGlCQUFoRCxDOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7c0RBR1dBLFU7Ozs7O21EQUNYLEtBQUtsQixjQUFMLENBQW9CLDBCQUFwQixFQUFnRDtBQUFFa0Isa0JBQUFBLFVBQVUsRUFBVkE7QUFBRixpQkFBaEQsQzs7Ozs7Ozs7Ozs7Ozs7Ozs7O0VBck44QksscUI7OztBQTBON0N6QixlQUFlLENBQUMwQixVQUFoQixHQUE2QixpQkFBN0IiLCJzb3VyY2VzQ29udGVudCI6WyIvKlxuICogQ29weXJpZ2h0IDIwMTgtMjAxOSBUT04gREVWIFNPTFVUSU9OUyBMVEQuXG4gKlxuICogTGljZW5zZWQgdW5kZXIgdGhlIFNPRlRXQVJFIEVWQUxVQVRJT04gTGljZW5zZSAodGhlIFwiTGljZW5zZVwiKTsgeW91IG1heSBub3QgdXNlXG4gKiB0aGlzIGZpbGUgZXhjZXB0IGluIGNvbXBsaWFuY2Ugd2l0aCB0aGUgTGljZW5zZS4gIFlvdSBtYXkgb2J0YWluIGEgY29weSBvZiB0aGVcbiAqIExpY2Vuc2UgYXQ6XG4gKlxuICogaHR0cDovL3d3dy50b24uZGV2L2xpY2Vuc2VzXG4gKlxuICogVW5sZXNzIHJlcXVpcmVkIGJ5IGFwcGxpY2FibGUgbGF3IG9yIGFncmVlZCB0byBpbiB3cml0aW5nLCBzb2Z0d2FyZVxuICogZGlzdHJpYnV0ZWQgdW5kZXIgdGhlIExpY2Vuc2UgaXMgZGlzdHJpYnV0ZWQgb24gYW4gXCJBUyBJU1wiIEJBU0lTLFxuICogV0lUSE9VVCBXQVJSQU5USUVTIE9SIENPTkRJVElPTlMgT0YgQU5ZIEtJTkQsIGVpdGhlciBleHByZXNzIG9yIGltcGxpZWQuXG4gKiBTZWUgdGhlIExpY2Vuc2UgZm9yIHRoZSBzcGVjaWZpYyBUT04gREVWIHNvZnR3YXJlIGdvdmVybmluZyBwZXJtaXNzaW9ucyBhbmRcbiAqIGxpbWl0YXRpb25zIHVuZGVyIHRoZSBMaWNlbnNlLlxuICovXG5cbi8vIEBmbG93XG4vKiBlc2xpbnQtZGlzYWJsZSBjbGFzcy1tZXRob2RzLXVzZS10aGlzLHByZWZlci1vYmplY3Qtc3ByZWFkICovXG5cbmltcG9ydCB0eXBlIHtcbiAgICBUT05GYWN0b3JpemVSZXN1bHQsXG4gICAgVE9OSW5wdXRNZXNzYWdlLFxuICAgIFRPTktleVBhaXJEYXRhLFxuICAgIFRPTk91dHB1dEVuY29kaW5nVHlwZSxcbiAgICBUT05TY3J5cHRQYXJhbXMsXG4gICAgVE9OTmFjbEJveFBhcmFtcyxcbiAgICBUT05OYWNsU2VjcmV0Qm94UGFyYW1zLFxuICAgIFRPTk1uZW1vbmljV29yZHNQYXJhbXMsXG4gICAgVE9OTW5lbW9uaWNGcm9tUmFuZG9tUGFyYW1zLFxuICAgIFRPTk1uZW1vbmljRnJvbUVudHJvcHlQYXJhbXMsXG4gICAgVE9OTW5lbW9uaWNJc1ZhbGlkUGFyYW1zLCBUT05NbmVtb25pY0Rlcml2ZVNpZ25LZXlzUGFyYW1zLFxufSBmcm9tIFwiLi4vLi4vdHlwZXNcIjtcbmltcG9ydCB7IFRPTk1vZHVsZSB9IGZyb20gJy4uL1RPTk1vZHVsZSc7XG5cbmV4cG9ydCBjb25zdCBUT05PdXRwdXRFbmNvZGluZyA9IHtcbiAgICBUZXh0OiAnVGV4dCcsXG4gICAgSGV4OiAnSGV4JyxcbiAgICBIZXhVcHBlcmNhc2U6ICdIZXhVcHBlcmNhc2UnLFxuICAgIEJhc2U2NDogJ0Jhc2U2NCcsXG59O1xuXG5cbmV4cG9ydCBjb25zdCBUT05NbmVtb25pY0RpY3Rpb25hcnkgPSB7XG4gICAgVE9OOiAwLFxuICAgIEVOR0xJU0g6IDEsXG4gICAgQ0hJTkVTRV9TSU1QTElGSUVEOiAyLFxuICAgIENISU5FU0VfVFJBRElUSU9OQUw6IDMsXG4gICAgRlJFTkNIOiA0LFxuICAgIElUQUxJQU46IDUsXG4gICAgSkFQQU5FU0U6IDYsXG4gICAgS09SRUFOOiA3LFxuICAgIFNQQU5JU0g6IDgsXG59O1xuXG5cbmZ1bmN0aW9uIGZpeElucHV0TWVzc2FnZShtZXNzYWdlOiBUT05JbnB1dE1lc3NhZ2UpOiBUT05JbnB1dE1lc3NhZ2Uge1xuICAgIHJldHVybiBtZXNzYWdlLnRleHRcbiAgICAgICAgPyB7XG4gICAgICAgICAgICBiYXNlNjQ6IEJ1ZmZlci5mcm9tKG1lc3NhZ2UudGV4dCwgJ3V0ZjgnKVxuICAgICAgICAgICAgICAgIC50b1N0cmluZygnYmFzZTY0JyksXG4gICAgICAgIH1cbiAgICAgICAgOiBtZXNzYWdlO1xufVxuXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBUT05DcnlwdG9Nb2R1bGUgZXh0ZW5kcyBUT05Nb2R1bGUge1xuICAgIGFzeW5jIGZhY3Rvcml6ZShjaGFsbGVuZ2VIZXg6IHN0cmluZyk6IFByb21pc2U8VE9ORmFjdG9yaXplUmVzdWx0PiB7XG4gICAgICAgIHJldHVybiB0aGlzLnJlcXVlc3RMaWJyYXJ5KCdjcnlwdG8ubWF0aC5mYWN0b3JpemUnLCBjaGFsbGVuZ2VIZXgpO1xuICAgIH1cblxuICAgIGFzeW5jIG1vZHVsYXJQb3dlcihcbiAgICAgICAgYmFzZUhleDogc3RyaW5nLFxuICAgICAgICBleHBvbmVudEhleDogc3RyaW5nLFxuICAgICAgICBtb2R1bHVzSGV4OiBzdHJpbmcsXG4gICAgKTogUHJvbWlzZTxzdHJpbmc+IHtcbiAgICAgICAgcmV0dXJuIHRoaXMucmVxdWVzdExpYnJhcnkoJ2NyeXB0by5tYXRoLm1vZHVsYXJQb3dlcicsIHtcbiAgICAgICAgICAgIGJhc2U6IGJhc2VIZXgsXG4gICAgICAgICAgICBleHBvbmVudDogZXhwb25lbnRIZXgsXG4gICAgICAgICAgICBtb2R1bHVzOiBtb2R1bHVzSGV4LFxuICAgICAgICB9KTtcbiAgICB9XG5cbiAgICBhc3luYyByYW5kb21HZW5lcmF0ZUJ5dGVzKFxuICAgICAgICBsZW5ndGg6IG51bWJlcixcbiAgICAgICAgb3V0cHV0RW5jb2Rpbmc6IFRPTk91dHB1dEVuY29kaW5nVHlwZSA9IFRPTk91dHB1dEVuY29kaW5nLkhleCxcbiAgICApOiBQcm9taXNlPHN0cmluZz4ge1xuICAgICAgICByZXR1cm4gdGhpcy5yZXF1ZXN0TGlicmFyeSgnY3J5cHRvLnJhbmRvbS5nZW5lcmF0ZUJ5dGVzJywge1xuICAgICAgICAgICAgbGVuZ3RoLFxuICAgICAgICAgICAgb3V0cHV0RW5jb2RpbmcsXG4gICAgICAgIH0pO1xuICAgIH1cblxuXG4gICAgYXN5bmMgZWQyNTUxOUtleXBhaXIoKTogUHJvbWlzZTxUT05LZXlQYWlyRGF0YT4ge1xuICAgICAgICByZXR1cm4gdGhpcy5yZXF1ZXN0TGlicmFyeSgnY3J5cHRvLmVkMjU1MTkua2V5cGFpcicpO1xuICAgIH1cblxuICAgIGFzeW5jIHB1YmxpY0tleVRvU3RyaW5nKGtleTogc3RyaW5nKTogUHJvbWlzZTxzdHJpbmc+IHtcbiAgICAgICAgcmV0dXJuIHRoaXMucmVxdWVzdExpYnJhcnkoJ2NyeXB0by50b25fcHVibGljX2tleV9zdHJpbmcnLCBrZXkpO1xuICAgIH1cblxuICAgIGFzeW5jIHNoYTUxMihcbiAgICAgICAgbWVzc2FnZTogVE9OSW5wdXRNZXNzYWdlLFxuICAgICAgICBvdXRwdXRFbmNvZGluZzogVE9OT3V0cHV0RW5jb2RpbmdUeXBlID0gVE9OT3V0cHV0RW5jb2RpbmcuSGV4LFxuICAgICk6IFByb21pc2U8c3RyaW5nPiB7XG4gICAgICAgIHJldHVybiB0aGlzLnJlcXVlc3RMaWJyYXJ5KFxuICAgICAgICAgICAgJ2NyeXB0by5zaGE1MTInLFxuICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgIG1lc3NhZ2U6IGZpeElucHV0TWVzc2FnZShtZXNzYWdlKSxcbiAgICAgICAgICAgICAgICBvdXRwdXRFbmNvZGluZyxcbiAgICAgICAgICAgIH0sXG4gICAgICAgICk7XG4gICAgfVxuXG4gICAgYXN5bmMgc2hhMjU2KFxuICAgICAgICBtZXNzYWdlOiBUT05JbnB1dE1lc3NhZ2UsXG4gICAgICAgIG91dHB1dEVuY29kaW5nOiBUT05PdXRwdXRFbmNvZGluZ1R5cGUgPSBUT05PdXRwdXRFbmNvZGluZy5IZXgsXG4gICAgKTogUHJvbWlzZTxzdHJpbmc+IHtcbiAgICAgICAgcmV0dXJuIHRoaXMucmVxdWVzdExpYnJhcnkoXG4gICAgICAgICAgICAnY3J5cHRvLnNoYTI1NicsXG4gICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgbWVzc2FnZTogZml4SW5wdXRNZXNzYWdlKG1lc3NhZ2UpLFxuICAgICAgICAgICAgICAgIG91dHB1dEVuY29kaW5nLFxuICAgICAgICAgICAgfSxcbiAgICAgICAgKTtcbiAgICB9XG5cbiAgICBhc3luYyBzY3J5cHQocGFyYW1zOiBUT05TY3J5cHRQYXJhbXMpOiBQcm9taXNlPHN0cmluZz4ge1xuICAgICAgICBjb25zdCBmaXhlZDogVE9OU2NyeXB0UGFyYW1zID0gKE9iamVjdC5hc3NpZ24oe30sIHBhcmFtcyk6IGFueSk7XG4gICAgICAgIGZpeGVkLnBhc3N3b3JkID0gZml4SW5wdXRNZXNzYWdlKHBhcmFtcy5wYXNzd29yZCk7XG4gICAgICAgIGZpeGVkLnNhbHQgPSBmaXhJbnB1dE1lc3NhZ2UocGFyYW1zLnNhbHQpO1xuICAgICAgICByZXR1cm4gdGhpcy5yZXF1ZXN0TGlicmFyeSgnY3J5cHRvLnNjcnlwdCcsIGZpeGVkKTtcbiAgICB9XG5cbiAgICBhc3luYyBuYWNsQm94S2V5cGFpcigpOiBQcm9taXNlPFRPTktleVBhaXJEYXRhPiB7XG4gICAgICAgIHJldHVybiB0aGlzLnJlcXVlc3RMaWJyYXJ5KCdjcnlwdG8ubmFjbC5ib3gua2V5cGFpcicpO1xuICAgIH1cblxuICAgIGFzeW5jIG5hY2xCb3hLZXlwYWlyRnJvbVNlY3JldEtleShzZWNyZXRLZXk6IHN0cmluZyk6IFByb21pc2U8VE9OS2V5UGFpckRhdGE+IHtcbiAgICAgICAgcmV0dXJuIHRoaXMucmVxdWVzdExpYnJhcnkoJ2NyeXB0by5uYWNsLmJveC5rZXlwYWlyLmZyb21TZWNyZXRLZXknLCBzZWNyZXRLZXkpO1xuICAgIH1cblxuICAgIGFzeW5jIG5hY2xTaWduS2V5cGFpcigpOiBQcm9taXNlPFRPTktleVBhaXJEYXRhPiB7XG4gICAgICAgIHJldHVybiB0aGlzLnJlcXVlc3RMaWJyYXJ5KCdjcnlwdG8ubmFjbC5zaWduLmtleXBhaXInKTtcbiAgICB9XG5cbiAgICBhc3luYyBuYWNsU2lnbktleXBhaXJGcm9tU2VjcmV0S2V5KHNlY3JldEtleTogc3RyaW5nKTogUHJvbWlzZTxUT05LZXlQYWlyRGF0YT4ge1xuICAgICAgICByZXR1cm4gdGhpcy5yZXF1ZXN0TGlicmFyeSgnY3J5cHRvLm5hY2wuc2lnbi5rZXlwYWlyLmZyb21TZWNyZXRLZXknLCBzZWNyZXRLZXkpO1xuICAgIH1cblxuICAgIGFzeW5jIG5hY2xCb3gocGFyYW1zOiBUT05OYWNsQm94UGFyYW1zKTogUHJvbWlzZTxzdHJpbmc+IHtcbiAgICAgICAgY29uc3QgZml4ZWQ6IFRPTk5hY2xCb3hQYXJhbXMgPSAoT2JqZWN0LmFzc2lnbih7fSwgcGFyYW1zKTogYW55KTtcbiAgICAgICAgZml4ZWQubWVzc2FnZSA9IGZpeElucHV0TWVzc2FnZShwYXJhbXMubWVzc2FnZSk7XG4gICAgICAgIHJldHVybiB0aGlzLnJlcXVlc3RMaWJyYXJ5KCdjcnlwdG8ubmFjbC5ib3gnLCBmaXhlZCk7XG4gICAgfVxuXG4gICAgYXN5bmMgbmFjbEJveE9wZW4ocGFyYW1zOiBUT05OYWNsQm94UGFyYW1zKTogUHJvbWlzZTxzdHJpbmc+IHtcbiAgICAgICAgY29uc3QgZml4ZWQ6IFRPTk5hY2xCb3hQYXJhbXMgPSAoT2JqZWN0LmFzc2lnbih7fSwgcGFyYW1zKTogYW55KTtcbiAgICAgICAgZml4ZWQubWVzc2FnZSA9IGZpeElucHV0TWVzc2FnZShwYXJhbXMubWVzc2FnZSk7XG4gICAgICAgIHJldHVybiB0aGlzLnJlcXVlc3RMaWJyYXJ5KCdjcnlwdG8ubmFjbC5ib3gub3BlbicsIGZpeGVkKTtcbiAgICB9XG5cbiAgICBhc3luYyBuYWNsU2VjcmV0Qm94KHBhcmFtczogVE9OTmFjbFNlY3JldEJveFBhcmFtcyk6IFByb21pc2U8c3RyaW5nPiB7XG4gICAgICAgIGNvbnN0IGZpeGVkOiBUT05OYWNsQm94UGFyYW1zID0gKE9iamVjdC5hc3NpZ24oe30sIHBhcmFtcyk6IGFueSk7XG4gICAgICAgIGZpeGVkLm1lc3NhZ2UgPSBmaXhJbnB1dE1lc3NhZ2UocGFyYW1zLm1lc3NhZ2UpO1xuICAgICAgICByZXR1cm4gdGhpcy5yZXF1ZXN0TGlicmFyeSgnY3J5cHRvLm5hY2wuc2VjcmV0LmJveCcsIGZpeGVkKTtcbiAgICB9XG5cbiAgICBhc3luYyBuYWNsU2VjcmV0Qm94T3BlbihwYXJhbXM6IFRPTk5hY2xTZWNyZXRCb3hQYXJhbXMpOiBQcm9taXNlPHN0cmluZz4ge1xuICAgICAgICBjb25zdCBmaXhlZDogVE9OTmFjbEJveFBhcmFtcyA9IChPYmplY3QuYXNzaWduKHt9LCBwYXJhbXMpOiBhbnkpO1xuICAgICAgICBmaXhlZC5tZXNzYWdlID0gZml4SW5wdXRNZXNzYWdlKHBhcmFtcy5tZXNzYWdlKTtcbiAgICAgICAgcmV0dXJuIHRoaXMucmVxdWVzdExpYnJhcnkoJ2NyeXB0by5uYWNsLnNlY3JldC5ib3gub3BlbicsIGZpeGVkKTtcbiAgICB9XG5cbiAgICBhc3luYyBuYWNsU2lnbihcbiAgICAgICAgbWVzc2FnZTogVE9OSW5wdXRNZXNzYWdlLFxuICAgICAgICBrZXk6IHN0cmluZyxcbiAgICAgICAgb3V0cHV0RW5jb2Rpbmc6IFRPTk91dHB1dEVuY29kaW5nVHlwZSA9IFRPTk91dHB1dEVuY29kaW5nLkhleCxcbiAgICApOiBQcm9taXNlPHN0cmluZz4ge1xuICAgICAgICByZXR1cm4gdGhpcy5yZXF1ZXN0TGlicmFyeSgnY3J5cHRvLm5hY2wuc2lnbicsIHtcbiAgICAgICAgICAgIG1lc3NhZ2U6IGZpeElucHV0TWVzc2FnZShtZXNzYWdlKSxcbiAgICAgICAgICAgIGtleSxcbiAgICAgICAgICAgIG91dHB1dEVuY29kaW5nLFxuICAgICAgICB9KTtcbiAgICB9XG5cbiAgICBhc3luYyBuYWNsU2lnbk9wZW4oXG4gICAgICAgIG1lc3NhZ2U6IFRPTklucHV0TWVzc2FnZSxcbiAgICAgICAga2V5OiBzdHJpbmcsXG4gICAgICAgIG91dHB1dEVuY29kaW5nOiBUT05PdXRwdXRFbmNvZGluZ1R5cGUgPSBUT05PdXRwdXRFbmNvZGluZy5IZXgsXG4gICAgKTogUHJvbWlzZTxzdHJpbmc+IHtcbiAgICAgICAgcmV0dXJuIHRoaXMucmVxdWVzdExpYnJhcnkoJ2NyeXB0by5uYWNsLnNpZ24ub3BlbicsIHtcbiAgICAgICAgICAgIG1lc3NhZ2U6IGZpeElucHV0TWVzc2FnZShtZXNzYWdlKSxcbiAgICAgICAgICAgIGtleSxcbiAgICAgICAgICAgIG91dHB1dEVuY29kaW5nLFxuICAgICAgICB9KTtcbiAgICB9XG5cbiAgICBhc3luYyBuYWNsU2lnbkRldGFjaGVkKFxuICAgICAgICBtZXNzYWdlOiBUT05JbnB1dE1lc3NhZ2UsXG4gICAgICAgIGtleTogc3RyaW5nLFxuICAgICAgICBvdXRwdXRFbmNvZGluZzogVE9OT3V0cHV0RW5jb2RpbmdUeXBlID0gVE9OT3V0cHV0RW5jb2RpbmcuSGV4LFxuICAgICk6IFByb21pc2U8c3RyaW5nPiB7XG4gICAgICAgIHJldHVybiB0aGlzLnJlcXVlc3RMaWJyYXJ5KCdjcnlwdG8ubmFjbC5zaWduLmRldGFjaGVkJywge1xuICAgICAgICAgICAgbWVzc2FnZTogZml4SW5wdXRNZXNzYWdlKG1lc3NhZ2UpLFxuICAgICAgICAgICAga2V5LFxuICAgICAgICAgICAgb3V0cHV0RW5jb2RpbmcsXG4gICAgICAgIH0pO1xuICAgIH1cblxuICAgIC8vIE1uZW1vbmljXG5cbiAgICBhc3luYyBtbmVtb25pY1dvcmRzKHBhcmFtcz86IFRPTk1uZW1vbmljV29yZHNQYXJhbXMpOiBQcm9taXNlPHN0cmluZz4ge1xuICAgICAgICByZXR1cm4gdGhpcy5yZXF1ZXN0TGlicmFyeSgnY3J5cHRvLm1uZW1vbmljLndvcmRzJywgcGFyYW1zIHx8IHt9KTtcbiAgICB9XG5cbiAgICBhc3luYyBtbmVtb25pY0Zyb21SYW5kb20ocGFyYW1zPzogVE9OTW5lbW9uaWNGcm9tUmFuZG9tUGFyYW1zKTogUHJvbWlzZTxzdHJpbmc+IHtcbiAgICAgICAgcmV0dXJuIHRoaXMucmVxdWVzdExpYnJhcnkoJ2NyeXB0by5tbmVtb25pYy5mcm9tLnJhbmRvbScsIHBhcmFtcyB8fCB7fSk7XG4gICAgfVxuXG4gICAgYXN5bmMgbW5lbW9uaWNGcm9tRW50cm9weShwYXJhbXM6IFRPTk1uZW1vbmljRnJvbUVudHJvcHlQYXJhbXMpOiBQcm9taXNlPHN0cmluZz4ge1xuICAgICAgICByZXR1cm4gdGhpcy5yZXF1ZXN0TGlicmFyeShcbiAgICAgICAgICAgICdjcnlwdG8ubW5lbW9uaWMuZnJvbS5lbnRyb3B5JyxcbiAgICAgICAgICAgIHBhcmFtcyxcbiAgICAgICAgKTtcbiAgICB9XG5cbiAgICBhc3luYyBtbmVtb25pY0lzVmFsaWQocGFyYW1zOiBUT05NbmVtb25pY0lzVmFsaWRQYXJhbXMpOiBQcm9taXNlPGJvb2xlYW4+IHtcbiAgICAgICAgcmV0dXJuIHRoaXMucmVxdWVzdExpYnJhcnkoJ2NyeXB0by5tbmVtb25pYy52ZXJpZnknLCBwYXJhbXMpO1xuICAgIH1cblxuICAgIGFzeW5jIG1uZW1vbmljRGVyaXZlU2lnbktleXMocGFyYW1zOiBUT05NbmVtb25pY0Rlcml2ZVNpZ25LZXlzUGFyYW1zKTogUHJvbWlzZTxUT05LZXlQYWlyRGF0YT4ge1xuICAgICAgICByZXR1cm4gdGhpcy5yZXF1ZXN0TGlicmFyeSgnY3J5cHRvLm1uZW1vbmljLmRlcml2ZS5zaWduLmtleXMnLCBwYXJhbXMpO1xuICAgIH1cblxuICAgIC8vIEhES2V5c1xuXG4gICAgYXN5bmMgaGRrZXlYUHJ2RnJvbU1uZW1vbmljKHBocmFzZTogc3RyaW5nKTogUHJvbWlzZTxzdHJpbmc+IHtcbiAgICAgICAgcmV0dXJuIHRoaXMucmVxdWVzdExpYnJhcnkoJ2NyeXB0by5oZGtleS54cHJ2LmZyb20ubW5lbW9uaWMnLCB7IHBocmFzZSB9KTtcbiAgICB9XG5cbiAgICBhc3luYyBoZGtleVhQcnZEZXJpdmUoXG4gICAgICAgIHNlcmlhbGl6ZWQ6IHN0cmluZyxcbiAgICAgICAgaW5kZXg6IG51bWJlcixcbiAgICAgICAgaGFyZGVuZWQ6IGJvb2xlYW4sXG4gICAgICAgIGNvbXBsaWFudDogYm9vbGVhbixcbiAgICApOiBQcm9taXNlPHN0cmluZz4ge1xuICAgICAgICByZXR1cm4gdGhpcy5yZXF1ZXN0TGlicmFyeShcbiAgICAgICAgICAgICdjcnlwdG8uaGRrZXkueHBydi5kZXJpdmUnLFxuICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgIHNlcmlhbGl6ZWQsXG4gICAgICAgICAgICAgICAgaW5kZXgsXG4gICAgICAgICAgICAgICAgaGFyZGVuZWQsXG4gICAgICAgICAgICAgICAgY29tcGxpYW50LFxuICAgICAgICAgICAgfSxcbiAgICAgICAgKTtcbiAgICB9XG5cbiAgICBhc3luYyBoZGtleVhQcnZEZXJpdmVQYXRoKFxuICAgICAgICBzZXJpYWxpemVkOiBzdHJpbmcsXG4gICAgICAgIHBhdGg6IHN0cmluZyxcbiAgICAgICAgY29tcGxpYW50OiBib29sZWFuLFxuICAgICk6IFByb21pc2U8c3RyaW5nPiB7XG4gICAgICAgIHJldHVybiB0aGlzLnJlcXVlc3RMaWJyYXJ5KFxuICAgICAgICAgICAgJ2NyeXB0by5oZGtleS54cHJ2LmRlcml2ZS5wYXRoJyxcbiAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICBzZXJpYWxpemVkLFxuICAgICAgICAgICAgICAgIHBhdGgsXG4gICAgICAgICAgICAgICAgY29tcGxpYW50LFxuICAgICAgICAgICAgfSxcbiAgICAgICAgKTtcbiAgICB9XG5cbiAgICBhc3luYyBoZGtleVhQcnZTZWNyZXQoc2VyaWFsaXplZDogc3RyaW5nKTogUHJvbWlzZTxzdHJpbmc+IHtcbiAgICAgICAgcmV0dXJuIHRoaXMucmVxdWVzdExpYnJhcnkoJ2NyeXB0by5oZGtleS54cHJ2LnNlY3JldCcsIHsgc2VyaWFsaXplZCB9KTtcbiAgICB9XG5cbiAgICBhc3luYyBoZGtleVhQcnZQdWJsaWMoc2VyaWFsaXplZDogc3RyaW5nKTogUHJvbWlzZTxzdHJpbmc+IHtcbiAgICAgICAgcmV0dXJuIHRoaXMucmVxdWVzdExpYnJhcnkoJ2NyeXB0by5oZGtleS54cHJ2LnB1YmxpYycsIHsgc2VyaWFsaXplZCB9KTtcbiAgICB9XG5cbn1cblxuVE9OQ3J5cHRvTW9kdWxlLm1vZHVsZU5hbWUgPSAnVE9OQ3J5cHRvTW9kdWxlJztcbiJdfQ==