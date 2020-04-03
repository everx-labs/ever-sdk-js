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
 * Copyright 2018-2020 TON DEV SOLUTIONS LTD.
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
                return _context.abrupt("return", this.requestCore('crypto.math.factorize', challengeHex));

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
                return _context2.abrupt("return", this.requestCore('crypto.math.modularPower', {
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
                return _context3.abrupt("return", this.requestCore('crypto.random.generateBytes', {
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
                return _context4.abrupt("return", this.requestCore('crypto.ed25519.keypair'));

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
                return _context5.abrupt("return", this.requestCore('crypto.ton_public_key_string', key));

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
                return _context6.abrupt("return", this.requestCore('crypto.sha512', {
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
                return _context7.abrupt("return", this.requestCore('crypto.sha256', {
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
                return _context8.abrupt("return", this.requestCore('crypto.scrypt', fixed));

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
                return _context9.abrupt("return", this.requestCore('crypto.nacl.box.keypair'));

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
                return _context10.abrupt("return", this.requestCore('crypto.nacl.box.keypair.fromSecretKey', secretKey));

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
                return _context11.abrupt("return", this.requestCore('crypto.nacl.sign.keypair'));

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
                return _context12.abrupt("return", this.requestCore('crypto.nacl.sign.keypair.fromSecretKey', secretKey));

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
                return _context13.abrupt("return", this.requestCore('crypto.nacl.box', fixed));

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
                return _context14.abrupt("return", this.requestCore('crypto.nacl.box.open', fixed));

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
                return _context15.abrupt("return", this.requestCore('crypto.nacl.secret.box', fixed));

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
                return _context16.abrupt("return", this.requestCore('crypto.nacl.secret.box.open', fixed));

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
                return _context17.abrupt("return", this.requestCore('crypto.nacl.sign', {
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
                return _context18.abrupt("return", this.requestCore('crypto.nacl.sign.open', {
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
                return _context19.abrupt("return", this.requestCore('crypto.nacl.sign.detached', {
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
                return _context20.abrupt("return", this.requestCore('crypto.mnemonic.words', params || {}));

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
                return _context21.abrupt("return", this.requestCore('crypto.mnemonic.from.random', params || {}));

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
                return _context22.abrupt("return", this.requestCore('crypto.mnemonic.from.entropy', params));

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
                return _context23.abrupt("return", this.requestCore('crypto.mnemonic.verify', params));

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
                return _context24.abrupt("return", this.requestCore('crypto.mnemonic.derive.sign.keys', params));

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
      _regenerator["default"].mark(function _callee25(params) {
        return _regenerator["default"].wrap(function _callee25$(_context25) {
          while (1) {
            switch (_context25.prev = _context25.next) {
              case 0:
                return _context25.abrupt("return", this.requestCore('crypto.hdkey.xprv.from.mnemonic', params));

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
                return _context26.abrupt("return", this.requestCore('crypto.hdkey.xprv.derive', {
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
                return _context27.abrupt("return", this.requestCore('crypto.hdkey.xprv.derive.path', {
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
                return _context28.abrupt("return", this.requestCore('crypto.hdkey.xprv.secret', {
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
                return _context29.abrupt("return", this.requestCore('crypto.hdkey.xprv.public', {
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy9tb2R1bGVzL1RPTkNyeXB0b01vZHVsZS5qcyJdLCJuYW1lcyI6WyJUT05PdXRwdXRFbmNvZGluZyIsIlRleHQiLCJIZXgiLCJIZXhVcHBlcmNhc2UiLCJCYXNlNjQiLCJUT05NbmVtb25pY0RpY3Rpb25hcnkiLCJUT04iLCJFTkdMSVNIIiwiQ0hJTkVTRV9TSU1QTElGSUVEIiwiQ0hJTkVTRV9UUkFESVRJT05BTCIsIkZSRU5DSCIsIklUQUxJQU4iLCJKQVBBTkVTRSIsIktPUkVBTiIsIlNQQU5JU0giLCJmaXhJbnB1dE1lc3NhZ2UiLCJtZXNzYWdlIiwidGV4dCIsImJhc2U2NCIsIkJ1ZmZlciIsImZyb20iLCJ0b1N0cmluZyIsIlRPTkNyeXB0b01vZHVsZSIsImNoYWxsZW5nZUhleCIsInJlcXVlc3RDb3JlIiwiYmFzZUhleCIsImV4cG9uZW50SGV4IiwibW9kdWx1c0hleCIsImJhc2UiLCJleHBvbmVudCIsIm1vZHVsdXMiLCJsZW5ndGgiLCJvdXRwdXRFbmNvZGluZyIsImtleSIsInBhcmFtcyIsImZpeGVkIiwiT2JqZWN0IiwiYXNzaWduIiwicGFzc3dvcmQiLCJzYWx0Iiwic2VjcmV0S2V5Iiwic2VyaWFsaXplZCIsImluZGV4IiwiaGFyZGVuZWQiLCJjb21wbGlhbnQiLCJwYXRoIiwiVE9OTW9kdWxlIiwibW9kdWxlTmFtZSJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFtQ0E7O0FBbkNBOzs7Ozs7Ozs7Ozs7Ozs7O0FBaUJBO0FBb0JPLElBQU1BLGlCQUFpQixHQUFHO0FBQzdCQyxFQUFBQSxJQUFJLEVBQUUsTUFEdUI7QUFFN0JDLEVBQUFBLEdBQUcsRUFBRSxLQUZ3QjtBQUc3QkMsRUFBQUEsWUFBWSxFQUFFLGNBSGU7QUFJN0JDLEVBQUFBLE1BQU0sRUFBRTtBQUpxQixDQUExQjs7QUFRQSxJQUFNQyxxQkFBcUIsR0FBRztBQUNqQ0MsRUFBQUEsR0FBRyxFQUFFLENBRDRCO0FBRWpDQyxFQUFBQSxP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NkM7QUFBRWlCLGtCQUFBQSxVQUFVLEVBQVZBO0FBQUYsaUJBQTdDLEM7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztzREFHV0EsVTs7Ozs7bURBQ1gsS0FBS2pCLFdBQUwsQ0FBaUIsMEJBQWpCLEVBQTZDO0FBQUVpQixrQkFBQUEsVUFBVSxFQUFWQTtBQUFGLGlCQUE3QyxDOzs7Ozs7Ozs7Ozs7Ozs7Ozs7RUFyTjhCSyxxQjs7O0FBME43Q3hCLGVBQWUsQ0FBQ3lCLFVBQWhCLEdBQTZCLGlCQUE3QiIsInNvdXJjZXNDb250ZW50IjpbIi8qXG4gKiBDb3B5cmlnaHQgMjAxOC0yMDIwIFRPTiBERVYgU09MVVRJT05TIExURC5cbiAqXG4gKiBMaWNlbnNlZCB1bmRlciB0aGUgU09GVFdBUkUgRVZBTFVBVElPTiBMaWNlbnNlICh0aGUgXCJMaWNlbnNlXCIpOyB5b3UgbWF5IG5vdCB1c2VcbiAqIHRoaXMgZmlsZSBleGNlcHQgaW4gY29tcGxpYW5jZSB3aXRoIHRoZSBMaWNlbnNlLiAgWW91IG1heSBvYnRhaW4gYSBjb3B5IG9mIHRoZVxuICogTGljZW5zZSBhdDpcbiAqXG4gKiBodHRwOi8vd3d3LnRvbi5kZXYvbGljZW5zZXNcbiAqXG4gKiBVbmxlc3MgcmVxdWlyZWQgYnkgYXBwbGljYWJsZSBsYXcgb3IgYWdyZWVkIHRvIGluIHdyaXRpbmcsIHNvZnR3YXJlXG4gKiBkaXN0cmlidXRlZCB1bmRlciB0aGUgTGljZW5zZSBpcyBkaXN0cmlidXRlZCBvbiBhbiBcIkFTIElTXCIgQkFTSVMsXG4gKiBXSVRIT1VUIFdBUlJBTlRJRVMgT1IgQ09ORElUSU9OUyBPRiBBTlkgS0lORCwgZWl0aGVyIGV4cHJlc3Mgb3IgaW1wbGllZC5cbiAqIFNlZSB0aGUgTGljZW5zZSBmb3IgdGhlIHNwZWNpZmljIFRPTiBERVYgc29mdHdhcmUgZ292ZXJuaW5nIHBlcm1pc3Npb25zIGFuZFxuICogbGltaXRhdGlvbnMgdW5kZXIgdGhlIExpY2Vuc2UuXG4gKi9cblxuLy8gQGZsb3dcbi8qIGVzbGludC1kaXNhYmxlIGNsYXNzLW1ldGhvZHMtdXNlLXRoaXMscHJlZmVyLW9iamVjdC1zcHJlYWQgKi9cblxuaW1wb3J0IHR5cGUge1xuICAgIFRPTkZhY3Rvcml6ZVJlc3VsdCxcbiAgICBUT05JbnB1dE1lc3NhZ2UsXG4gICAgVE9OS2V5UGFpckRhdGEsXG4gICAgVE9OT3V0cHV0RW5jb2RpbmdUeXBlLFxuICAgIFRPTlNjcnlwdFBhcmFtcyxcbiAgICBUT05OYWNsQm94UGFyYW1zLFxuICAgIFRPTk5hY2xTZWNyZXRCb3hQYXJhbXMsXG4gICAgVE9OTW5lbW9uaWNXb3Jkc1BhcmFtcyxcbiAgICBUT05NbmVtb25pY0Zyb21SYW5kb21QYXJhbXMsXG4gICAgVE9OTW5lbW9uaWNGcm9tRW50cm9weVBhcmFtcyxcbiAgICBUT05NbmVtb25pY0lzVmFsaWRQYXJhbXMsXG4gICAgVE9OTW5lbW9uaWNEZXJpdmVTaWduS2V5c1BhcmFtcyxcbiAgICBUT05DcnlwdG8sXG4gICAgVE9OSERLZXlGcm9tTW5lbW9uaWNQYXJhbXMsXG59IGZyb20gXCIuLi8uLi90eXBlc1wiO1xuaW1wb3J0IHsgVE9OTW9kdWxlIH0gZnJvbSAnLi4vVE9OTW9kdWxlJztcblxuZXhwb3J0IGNvbnN0IFRPTk91dHB1dEVuY29kaW5nID0ge1xuICAgIFRleHQ6ICdUZXh0JyxcbiAgICBIZXg6ICdIZXgnLFxuICAgIEhleFVwcGVyY2FzZTogJ0hleFVwcGVyY2FzZScsXG4gICAgQmFzZTY0OiAnQmFzZTY0Jyxcbn07XG5cblxuZXhwb3J0IGNvbnN0IFRPTk1uZW1vbmljRGljdGlvbmFyeSA9IHtcbiAgICBUT046IDAsXG4gICAgRU5HTElTSDogMSxcbiAgICBDSElORVNFX1NJTVBMSUZJRUQ6IDIsXG4gICAgQ0hJTkVTRV9UUkFESVRJT05BTDogMyxcbiAgICBGUkVOQ0g6IDQsXG4gICAgSVRBTElBTjogNSxcbiAgICBKQVBBTkVTRTogNixcbiAgICBLT1JFQU46IDcsXG4gICAgU1BBTklTSDogOCxcbn07XG5cblxuZnVuY3Rpb24gZml4SW5wdXRNZXNzYWdlKG1lc3NhZ2U6IFRPTklucHV0TWVzc2FnZSk6IFRPTklucHV0TWVzc2FnZSB7XG4gICAgcmV0dXJuIG1lc3NhZ2UudGV4dFxuICAgICAgICA/IHtcbiAgICAgICAgICAgIGJhc2U2NDogQnVmZmVyLmZyb20obWVzc2FnZS50ZXh0LCAndXRmOCcpXG4gICAgICAgICAgICAgICAgLnRvU3RyaW5nKCdiYXNlNjQnKSxcbiAgICAgICAgfVxuICAgICAgICA6IG1lc3NhZ2U7XG59XG5cbmV4cG9ydCBkZWZhdWx0IGNsYXNzIFRPTkNyeXB0b01vZHVsZSBleHRlbmRzIFRPTk1vZHVsZSBpbXBsZW1lbnRzIFRPTkNyeXB0byB7XG4gICAgYXN5bmMgZmFjdG9yaXplKGNoYWxsZW5nZUhleDogc3RyaW5nKTogUHJvbWlzZTxUT05GYWN0b3JpemVSZXN1bHQ+IHtcbiAgICAgICAgcmV0dXJuIHRoaXMucmVxdWVzdENvcmUoJ2NyeXB0by5tYXRoLmZhY3Rvcml6ZScsIGNoYWxsZW5nZUhleCk7XG4gICAgfVxuXG4gICAgYXN5bmMgbW9kdWxhclBvd2VyKFxuICAgICAgICBiYXNlSGV4OiBzdHJpbmcsXG4gICAgICAgIGV4cG9uZW50SGV4OiBzdHJpbmcsXG4gICAgICAgIG1vZHVsdXNIZXg6IHN0cmluZyxcbiAgICApOiBQcm9taXNlPHN0cmluZz4ge1xuICAgICAgICByZXR1cm4gdGhpcy5yZXF1ZXN0Q29yZSgnY3J5cHRvLm1hdGgubW9kdWxhclBvd2VyJywge1xuICAgICAgICAgICAgYmFzZTogYmFzZUhleCxcbiAgICAgICAgICAgIGV4cG9uZW50OiBleHBvbmVudEhleCxcbiAgICAgICAgICAgIG1vZHVsdXM6IG1vZHVsdXNIZXgsXG4gICAgICAgIH0pO1xuICAgIH1cblxuICAgIGFzeW5jIHJhbmRvbUdlbmVyYXRlQnl0ZXMoXG4gICAgICAgIGxlbmd0aDogbnVtYmVyLFxuICAgICAgICBvdXRwdXRFbmNvZGluZzogVE9OT3V0cHV0RW5jb2RpbmdUeXBlID0gVE9OT3V0cHV0RW5jb2RpbmcuSGV4LFxuICAgICk6IFByb21pc2U8c3RyaW5nPiB7XG4gICAgICAgIHJldHVybiB0aGlzLnJlcXVlc3RDb3JlKCdjcnlwdG8ucmFuZG9tLmdlbmVyYXRlQnl0ZXMnLCB7XG4gICAgICAgICAgICBsZW5ndGgsXG4gICAgICAgICAgICBvdXRwdXRFbmNvZGluZyxcbiAgICAgICAgfSk7XG4gICAgfVxuXG5cbiAgICBhc3luYyBlZDI1NTE5S2V5cGFpcigpOiBQcm9taXNlPFRPTktleVBhaXJEYXRhPiB7XG4gICAgICAgIHJldHVybiB0aGlzLnJlcXVlc3RDb3JlKCdjcnlwdG8uZWQyNTUxOS5rZXlwYWlyJyk7XG4gICAgfVxuXG4gICAgYXN5bmMgcHVibGljS2V5VG9TdHJpbmcoa2V5OiBzdHJpbmcpOiBQcm9taXNlPHN0cmluZz4ge1xuICAgICAgICByZXR1cm4gdGhpcy5yZXF1ZXN0Q29yZSgnY3J5cHRvLnRvbl9wdWJsaWNfa2V5X3N0cmluZycsIGtleSk7XG4gICAgfVxuXG4gICAgYXN5bmMgc2hhNTEyKFxuICAgICAgICBtZXNzYWdlOiBUT05JbnB1dE1lc3NhZ2UsXG4gICAgICAgIG91dHB1dEVuY29kaW5nOiBUT05PdXRwdXRFbmNvZGluZ1R5cGUgPSBUT05PdXRwdXRFbmNvZGluZy5IZXgsXG4gICAgKTogUHJvbWlzZTxzdHJpbmc+IHtcbiAgICAgICAgcmV0dXJuIHRoaXMucmVxdWVzdENvcmUoXG4gICAgICAgICAgICAnY3J5cHRvLnNoYTUxMicsXG4gICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgbWVzc2FnZTogZml4SW5wdXRNZXNzYWdlKG1lc3NhZ2UpLFxuICAgICAgICAgICAgICAgIG91dHB1dEVuY29kaW5nLFxuICAgICAgICAgICAgfSxcbiAgICAgICAgKTtcbiAgICB9XG5cbiAgICBhc3luYyBzaGEyNTYoXG4gICAgICAgIG1lc3NhZ2U6IFRPTklucHV0TWVzc2FnZSxcbiAgICAgICAgb3V0cHV0RW5jb2Rpbmc6IFRPTk91dHB1dEVuY29kaW5nVHlwZSA9IFRPTk91dHB1dEVuY29kaW5nLkhleCxcbiAgICApOiBQcm9taXNlPHN0cmluZz4ge1xuICAgICAgICByZXR1cm4gdGhpcy5yZXF1ZXN0Q29yZShcbiAgICAgICAgICAgICdjcnlwdG8uc2hhMjU2JyxcbiAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICBtZXNzYWdlOiBmaXhJbnB1dE1lc3NhZ2UobWVzc2FnZSksXG4gICAgICAgICAgICAgICAgb3V0cHV0RW5jb2RpbmcsXG4gICAgICAgICAgICB9LFxuICAgICAgICApO1xuICAgIH1cblxuICAgIGFzeW5jIHNjcnlwdChwYXJhbXM6IFRPTlNjcnlwdFBhcmFtcyk6IFByb21pc2U8c3RyaW5nPiB7XG4gICAgICAgIGNvbnN0IGZpeGVkOiBUT05TY3J5cHRQYXJhbXMgPSAoT2JqZWN0LmFzc2lnbih7fSwgcGFyYW1zKTogYW55KTtcbiAgICAgICAgZml4ZWQucGFzc3dvcmQgPSBmaXhJbnB1dE1lc3NhZ2UocGFyYW1zLnBhc3N3b3JkKTtcbiAgICAgICAgZml4ZWQuc2FsdCA9IGZpeElucHV0TWVzc2FnZShwYXJhbXMuc2FsdCk7XG4gICAgICAgIHJldHVybiB0aGlzLnJlcXVlc3RDb3JlKCdjcnlwdG8uc2NyeXB0JywgZml4ZWQpO1xuICAgIH1cblxuICAgIGFzeW5jIG5hY2xCb3hLZXlwYWlyKCk6IFByb21pc2U8VE9OS2V5UGFpckRhdGE+IHtcbiAgICAgICAgcmV0dXJuIHRoaXMucmVxdWVzdENvcmUoJ2NyeXB0by5uYWNsLmJveC5rZXlwYWlyJyk7XG4gICAgfVxuXG4gICAgYXN5bmMgbmFjbEJveEtleXBhaXJGcm9tU2VjcmV0S2V5KHNlY3JldEtleTogc3RyaW5nKTogUHJvbWlzZTxUT05LZXlQYWlyRGF0YT4ge1xuICAgICAgICByZXR1cm4gdGhpcy5yZXF1ZXN0Q29yZSgnY3J5cHRvLm5hY2wuYm94LmtleXBhaXIuZnJvbVNlY3JldEtleScsIHNlY3JldEtleSk7XG4gICAgfVxuXG4gICAgYXN5bmMgbmFjbFNpZ25LZXlwYWlyKCk6IFByb21pc2U8VE9OS2V5UGFpckRhdGE+IHtcbiAgICAgICAgcmV0dXJuIHRoaXMucmVxdWVzdENvcmUoJ2NyeXB0by5uYWNsLnNpZ24ua2V5cGFpcicpO1xuICAgIH1cblxuICAgIGFzeW5jIG5hY2xTaWduS2V5cGFpckZyb21TZWNyZXRLZXkoc2VjcmV0S2V5OiBzdHJpbmcpOiBQcm9taXNlPFRPTktleVBhaXJEYXRhPiB7XG4gICAgICAgIHJldHVybiB0aGlzLnJlcXVlc3RDb3JlKCdjcnlwdG8ubmFjbC5zaWduLmtleXBhaXIuZnJvbVNlY3JldEtleScsIHNlY3JldEtleSk7XG4gICAgfVxuXG4gICAgYXN5bmMgbmFjbEJveChwYXJhbXM6IFRPTk5hY2xCb3hQYXJhbXMpOiBQcm9taXNlPHN0cmluZz4ge1xuICAgICAgICBjb25zdCBmaXhlZDogVE9OTmFjbEJveFBhcmFtcyA9IChPYmplY3QuYXNzaWduKHt9LCBwYXJhbXMpOiBhbnkpO1xuICAgICAgICBmaXhlZC5tZXNzYWdlID0gZml4SW5wdXRNZXNzYWdlKHBhcmFtcy5tZXNzYWdlKTtcbiAgICAgICAgcmV0dXJuIHRoaXMucmVxdWVzdENvcmUoJ2NyeXB0by5uYWNsLmJveCcsIGZpeGVkKTtcbiAgICB9XG5cbiAgICBhc3luYyBuYWNsQm94T3BlbihwYXJhbXM6IFRPTk5hY2xCb3hQYXJhbXMpOiBQcm9taXNlPHN0cmluZz4ge1xuICAgICAgICBjb25zdCBmaXhlZDogVE9OTmFjbEJveFBhcmFtcyA9IChPYmplY3QuYXNzaWduKHt9LCBwYXJhbXMpOiBhbnkpO1xuICAgICAgICBmaXhlZC5tZXNzYWdlID0gZml4SW5wdXRNZXNzYWdlKHBhcmFtcy5tZXNzYWdlKTtcbiAgICAgICAgcmV0dXJuIHRoaXMucmVxdWVzdENvcmUoJ2NyeXB0by5uYWNsLmJveC5vcGVuJywgZml4ZWQpO1xuICAgIH1cblxuICAgIGFzeW5jIG5hY2xTZWNyZXRCb3gocGFyYW1zOiBUT05OYWNsU2VjcmV0Qm94UGFyYW1zKTogUHJvbWlzZTxzdHJpbmc+IHtcbiAgICAgICAgY29uc3QgZml4ZWQ6IFRPTk5hY2xCb3hQYXJhbXMgPSAoT2JqZWN0LmFzc2lnbih7fSwgcGFyYW1zKTogYW55KTtcbiAgICAgICAgZml4ZWQubWVzc2FnZSA9IGZpeElucHV0TWVzc2FnZShwYXJhbXMubWVzc2FnZSk7XG4gICAgICAgIHJldHVybiB0aGlzLnJlcXVlc3RDb3JlKCdjcnlwdG8ubmFjbC5zZWNyZXQuYm94JywgZml4ZWQpO1xuICAgIH1cblxuICAgIGFzeW5jIG5hY2xTZWNyZXRCb3hPcGVuKHBhcmFtczogVE9OTmFjbFNlY3JldEJveFBhcmFtcyk6IFByb21pc2U8c3RyaW5nPiB7XG4gICAgICAgIGNvbnN0IGZpeGVkOiBUT05OYWNsQm94UGFyYW1zID0gKE9iamVjdC5hc3NpZ24oe30sIHBhcmFtcyk6IGFueSk7XG4gICAgICAgIGZpeGVkLm1lc3NhZ2UgPSBmaXhJbnB1dE1lc3NhZ2UocGFyYW1zLm1lc3NhZ2UpO1xuICAgICAgICByZXR1cm4gdGhpcy5yZXF1ZXN0Q29yZSgnY3J5cHRvLm5hY2wuc2VjcmV0LmJveC5vcGVuJywgZml4ZWQpO1xuICAgIH1cblxuICAgIGFzeW5jIG5hY2xTaWduKFxuICAgICAgICBtZXNzYWdlOiBUT05JbnB1dE1lc3NhZ2UsXG4gICAgICAgIGtleTogc3RyaW5nLFxuICAgICAgICBvdXRwdXRFbmNvZGluZzogVE9OT3V0cHV0RW5jb2RpbmdUeXBlID0gVE9OT3V0cHV0RW5jb2RpbmcuSGV4LFxuICAgICk6IFByb21pc2U8c3RyaW5nPiB7XG4gICAgICAgIHJldHVybiB0aGlzLnJlcXVlc3RDb3JlKCdjcnlwdG8ubmFjbC5zaWduJywge1xuICAgICAgICAgICAgbWVzc2FnZTogZml4SW5wdXRNZXNzYWdlKG1lc3NhZ2UpLFxuICAgICAgICAgICAga2V5LFxuICAgICAgICAgICAgb3V0cHV0RW5jb2RpbmcsXG4gICAgICAgIH0pO1xuICAgIH1cblxuICAgIGFzeW5jIG5hY2xTaWduT3BlbihcbiAgICAgICAgbWVzc2FnZTogVE9OSW5wdXRNZXNzYWdlLFxuICAgICAgICBrZXk6IHN0cmluZyxcbiAgICAgICAgb3V0cHV0RW5jb2Rpbmc6IFRPTk91dHB1dEVuY29kaW5nVHlwZSA9IFRPTk91dHB1dEVuY29kaW5nLkhleCxcbiAgICApOiBQcm9taXNlPHN0cmluZz4ge1xuICAgICAgICByZXR1cm4gdGhpcy5yZXF1ZXN0Q29yZSgnY3J5cHRvLm5hY2wuc2lnbi5vcGVuJywge1xuICAgICAgICAgICAgbWVzc2FnZTogZml4SW5wdXRNZXNzYWdlKG1lc3NhZ2UpLFxuICAgICAgICAgICAga2V5LFxuICAgICAgICAgICAgb3V0cHV0RW5jb2RpbmcsXG4gICAgICAgIH0pO1xuICAgIH1cblxuICAgIGFzeW5jIG5hY2xTaWduRGV0YWNoZWQoXG4gICAgICAgIG1lc3NhZ2U6IFRPTklucHV0TWVzc2FnZSxcbiAgICAgICAga2V5OiBzdHJpbmcsXG4gICAgICAgIG91dHB1dEVuY29kaW5nOiBUT05PdXRwdXRFbmNvZGluZ1R5cGUgPSBUT05PdXRwdXRFbmNvZGluZy5IZXgsXG4gICAgKTogUHJvbWlzZTxzdHJpbmc+IHtcbiAgICAgICAgcmV0dXJuIHRoaXMucmVxdWVzdENvcmUoJ2NyeXB0by5uYWNsLnNpZ24uZGV0YWNoZWQnLCB7XG4gICAgICAgICAgICBtZXNzYWdlOiBmaXhJbnB1dE1lc3NhZ2UobWVzc2FnZSksXG4gICAgICAgICAgICBrZXksXG4gICAgICAgICAgICBvdXRwdXRFbmNvZGluZyxcbiAgICAgICAgfSk7XG4gICAgfVxuXG4gICAgLy8gTW5lbW9uaWNcblxuICAgIGFzeW5jIG1uZW1vbmljV29yZHMocGFyYW1zPzogVE9OTW5lbW9uaWNXb3Jkc1BhcmFtcyk6IFByb21pc2U8c3RyaW5nPiB7XG4gICAgICAgIHJldHVybiB0aGlzLnJlcXVlc3RDb3JlKCdjcnlwdG8ubW5lbW9uaWMud29yZHMnLCBwYXJhbXMgfHwge30pO1xuICAgIH1cblxuICAgIGFzeW5jIG1uZW1vbmljRnJvbVJhbmRvbShwYXJhbXM/OiBUT05NbmVtb25pY0Zyb21SYW5kb21QYXJhbXMpOiBQcm9taXNlPHN0cmluZz4ge1xuICAgICAgICByZXR1cm4gdGhpcy5yZXF1ZXN0Q29yZSgnY3J5cHRvLm1uZW1vbmljLmZyb20ucmFuZG9tJywgcGFyYW1zIHx8IHt9KTtcbiAgICB9XG5cbiAgICBhc3luYyBtbmVtb25pY0Zyb21FbnRyb3B5KHBhcmFtczogVE9OTW5lbW9uaWNGcm9tRW50cm9weVBhcmFtcyk6IFByb21pc2U8c3RyaW5nPiB7XG4gICAgICAgIHJldHVybiB0aGlzLnJlcXVlc3RDb3JlKFxuICAgICAgICAgICAgJ2NyeXB0by5tbmVtb25pYy5mcm9tLmVudHJvcHknLFxuICAgICAgICAgICAgcGFyYW1zLFxuICAgICAgICApO1xuICAgIH1cblxuICAgIGFzeW5jIG1uZW1vbmljSXNWYWxpZChwYXJhbXM6IFRPTk1uZW1vbmljSXNWYWxpZFBhcmFtcyk6IFByb21pc2U8Ym9vbGVhbj4ge1xuICAgICAgICByZXR1cm4gdGhpcy5yZXF1ZXN0Q29yZSgnY3J5cHRvLm1uZW1vbmljLnZlcmlmeScsIHBhcmFtcyk7XG4gICAgfVxuXG4gICAgYXN5bmMgbW5lbW9uaWNEZXJpdmVTaWduS2V5cyhwYXJhbXM6IFRPTk1uZW1vbmljRGVyaXZlU2lnbktleXNQYXJhbXMpOiBQcm9taXNlPFRPTktleVBhaXJEYXRhPiB7XG4gICAgICAgIHJldHVybiB0aGlzLnJlcXVlc3RDb3JlKCdjcnlwdG8ubW5lbW9uaWMuZGVyaXZlLnNpZ24ua2V5cycsIHBhcmFtcyk7XG4gICAgfVxuXG4gICAgLy8gSERLZXlzXG5cbiAgICBhc3luYyBoZGtleVhQcnZGcm9tTW5lbW9uaWMocGFyYW1zOiBUT05IREtleUZyb21NbmVtb25pY1BhcmFtcyk6IFByb21pc2U8c3RyaW5nPiB7XG4gICAgICAgIHJldHVybiB0aGlzLnJlcXVlc3RDb3JlKCdjcnlwdG8uaGRrZXkueHBydi5mcm9tLm1uZW1vbmljJywgcGFyYW1zKTtcbiAgICB9XG5cbiAgICBhc3luYyBoZGtleVhQcnZEZXJpdmUoXG4gICAgICAgIHNlcmlhbGl6ZWQ6IHN0cmluZyxcbiAgICAgICAgaW5kZXg6IG51bWJlcixcbiAgICAgICAgaGFyZGVuZWQ6IGJvb2xlYW4sXG4gICAgICAgIGNvbXBsaWFudDogYm9vbGVhbixcbiAgICApOiBQcm9taXNlPHN0cmluZz4ge1xuICAgICAgICByZXR1cm4gdGhpcy5yZXF1ZXN0Q29yZShcbiAgICAgICAgICAgICdjcnlwdG8uaGRrZXkueHBydi5kZXJpdmUnLFxuICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgIHNlcmlhbGl6ZWQsXG4gICAgICAgICAgICAgICAgaW5kZXgsXG4gICAgICAgICAgICAgICAgaGFyZGVuZWQsXG4gICAgICAgICAgICAgICAgY29tcGxpYW50LFxuICAgICAgICAgICAgfSxcbiAgICAgICAgKTtcbiAgICB9XG5cbiAgICBhc3luYyBoZGtleVhQcnZEZXJpdmVQYXRoKFxuICAgICAgICBzZXJpYWxpemVkOiBzdHJpbmcsXG4gICAgICAgIHBhdGg6IHN0cmluZyxcbiAgICAgICAgY29tcGxpYW50OiBib29sZWFuLFxuICAgICk6IFByb21pc2U8c3RyaW5nPiB7XG4gICAgICAgIHJldHVybiB0aGlzLnJlcXVlc3RDb3JlKFxuICAgICAgICAgICAgJ2NyeXB0by5oZGtleS54cHJ2LmRlcml2ZS5wYXRoJyxcbiAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICBzZXJpYWxpemVkLFxuICAgICAgICAgICAgICAgIHBhdGgsXG4gICAgICAgICAgICAgICAgY29tcGxpYW50LFxuICAgICAgICAgICAgfSxcbiAgICAgICAgKTtcbiAgICB9XG5cbiAgICBhc3luYyBoZGtleVhQcnZTZWNyZXQoc2VyaWFsaXplZDogc3RyaW5nKTogUHJvbWlzZTxzdHJpbmc+IHtcbiAgICAgICAgcmV0dXJuIHRoaXMucmVxdWVzdENvcmUoJ2NyeXB0by5oZGtleS54cHJ2LnNlY3JldCcsIHsgc2VyaWFsaXplZCB9KTtcbiAgICB9XG5cbiAgICBhc3luYyBoZGtleVhQcnZQdWJsaWMoc2VyaWFsaXplZDogc3RyaW5nKTogUHJvbWlzZTxzdHJpbmc+IHtcbiAgICAgICAgcmV0dXJuIHRoaXMucmVxdWVzdENvcmUoJ2NyeXB0by5oZGtleS54cHJ2LnB1YmxpYycsIHsgc2VyaWFsaXplZCB9KTtcbiAgICB9XG5cbn1cblxuVE9OQ3J5cHRvTW9kdWxlLm1vZHVsZU5hbWUgPSAnVE9OQ3J5cHRvTW9kdWxlJztcbiJdfQ==