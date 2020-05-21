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

var _inherits2 = _interopRequireDefault(require("@babel/runtime/helpers/inherits"));

var _possibleConstructorReturn2 = _interopRequireDefault(require("@babel/runtime/helpers/possibleConstructorReturn"));

var _getPrototypeOf2 = _interopRequireDefault(require("@babel/runtime/helpers/getPrototypeOf"));

var _TONModule2 = require("../TONModule");

function _createSuper(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct(); return function () { var Super = (0, _getPrototypeOf2["default"])(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = (0, _getPrototypeOf2["default"])(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return (0, _possibleConstructorReturn2["default"])(this, result); }; }

function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Date.prototype.toString.call(Reflect.construct(Date, [], function () {})); return true; } catch (e) { return false; } }

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

var TONCryptoModule = /*#__PURE__*/function (_TONModule) {
  (0, _inherits2["default"])(TONCryptoModule, _TONModule);

  var _super = _createSuper(TONCryptoModule);

  function TONCryptoModule() {
    (0, _classCallCheck2["default"])(this, TONCryptoModule);
    return _super.apply(this, arguments);
  }

  (0, _createClass2["default"])(TONCryptoModule, [{
    key: "factorize",
    value: function () {
      var _factorize = (0, _asyncToGenerator2["default"])( /*#__PURE__*/_regenerator["default"].mark(function _callee(challengeHex) {
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
      var _modularPower = (0, _asyncToGenerator2["default"])( /*#__PURE__*/_regenerator["default"].mark(function _callee2(baseHex, exponentHex, modulusHex) {
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
      var _randomGenerateBytes = (0, _asyncToGenerator2["default"])( /*#__PURE__*/_regenerator["default"].mark(function _callee3(length) {
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
      var _ed25519Keypair = (0, _asyncToGenerator2["default"])( /*#__PURE__*/_regenerator["default"].mark(function _callee4() {
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
      var _publicKeyToString = (0, _asyncToGenerator2["default"])( /*#__PURE__*/_regenerator["default"].mark(function _callee5(key) {
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
      var _sha = (0, _asyncToGenerator2["default"])( /*#__PURE__*/_regenerator["default"].mark(function _callee6(message) {
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
      var _sha2 = (0, _asyncToGenerator2["default"])( /*#__PURE__*/_regenerator["default"].mark(function _callee7(message) {
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
      var _scrypt = (0, _asyncToGenerator2["default"])( /*#__PURE__*/_regenerator["default"].mark(function _callee8(params) {
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
      var _naclBoxKeypair = (0, _asyncToGenerator2["default"])( /*#__PURE__*/_regenerator["default"].mark(function _callee9() {
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
      var _naclBoxKeypairFromSecretKey = (0, _asyncToGenerator2["default"])( /*#__PURE__*/_regenerator["default"].mark(function _callee10(secretKey) {
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
      var _naclSignKeypair = (0, _asyncToGenerator2["default"])( /*#__PURE__*/_regenerator["default"].mark(function _callee11() {
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
      var _naclSignKeypairFromSecretKey = (0, _asyncToGenerator2["default"])( /*#__PURE__*/_regenerator["default"].mark(function _callee12(secretKey) {
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
      var _naclBox = (0, _asyncToGenerator2["default"])( /*#__PURE__*/_regenerator["default"].mark(function _callee13(params) {
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
      var _naclBoxOpen = (0, _asyncToGenerator2["default"])( /*#__PURE__*/_regenerator["default"].mark(function _callee14(params) {
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
      var _naclSecretBox = (0, _asyncToGenerator2["default"])( /*#__PURE__*/_regenerator["default"].mark(function _callee15(params) {
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
      var _naclSecretBoxOpen = (0, _asyncToGenerator2["default"])( /*#__PURE__*/_regenerator["default"].mark(function _callee16(params) {
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
      var _naclSign = (0, _asyncToGenerator2["default"])( /*#__PURE__*/_regenerator["default"].mark(function _callee17(message, key) {
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
      var _naclSignOpen = (0, _asyncToGenerator2["default"])( /*#__PURE__*/_regenerator["default"].mark(function _callee18(message, key) {
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
      var _naclSignDetached = (0, _asyncToGenerator2["default"])( /*#__PURE__*/_regenerator["default"].mark(function _callee19(message, key) {
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
      var _mnemonicWords = (0, _asyncToGenerator2["default"])( /*#__PURE__*/_regenerator["default"].mark(function _callee20(params) {
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
      var _mnemonicFromRandom = (0, _asyncToGenerator2["default"])( /*#__PURE__*/_regenerator["default"].mark(function _callee21(params) {
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
      var _mnemonicFromEntropy = (0, _asyncToGenerator2["default"])( /*#__PURE__*/_regenerator["default"].mark(function _callee22(params) {
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
      var _mnemonicIsValid = (0, _asyncToGenerator2["default"])( /*#__PURE__*/_regenerator["default"].mark(function _callee23(params) {
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
      var _mnemonicDeriveSignKeys = (0, _asyncToGenerator2["default"])( /*#__PURE__*/_regenerator["default"].mark(function _callee24(params) {
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
      var _hdkeyXPrvFromMnemonic = (0, _asyncToGenerator2["default"])( /*#__PURE__*/_regenerator["default"].mark(function _callee25(params) {
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
      var _hdkeyXPrvDerive = (0, _asyncToGenerator2["default"])( /*#__PURE__*/_regenerator["default"].mark(function _callee26(serialized, index, hardened, compliant) {
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
      var _hdkeyXPrvDerivePath = (0, _asyncToGenerator2["default"])( /*#__PURE__*/_regenerator["default"].mark(function _callee27(serialized, path, compliant) {
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
      var _hdkeyXPrvSecret = (0, _asyncToGenerator2["default"])( /*#__PURE__*/_regenerator["default"].mark(function _callee28(serialized) {
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
      var _hdkeyXPrvPublic = (0, _asyncToGenerator2["default"])( /*#__PURE__*/_regenerator["default"].mark(function _callee29(serialized) {
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy9tb2R1bGVzL1RPTkNyeXB0b01vZHVsZS5qcyJdLCJuYW1lcyI6WyJUT05PdXRwdXRFbmNvZGluZyIsIlRleHQiLCJIZXgiLCJIZXhVcHBlcmNhc2UiLCJCYXNlNjQiLCJUT05NbmVtb25pY0RpY3Rpb25hcnkiLCJUT04iLCJFTkdMSVNIIiwiQ0hJTkVTRV9TSU1QTElGSUVEIiwiQ0hJTkVTRV9UUkFESVRJT05BTCIsIkZSRU5DSCIsIklUQUxJQU4iLCJKQVBBTkVTRSIsIktPUkVBTiIsIlNQQU5JU0giLCJmaXhJbnB1dE1lc3NhZ2UiLCJtZXNzYWdlIiwidGV4dCIsImJhc2U2NCIsIkJ1ZmZlciIsImZyb20iLCJ0b1N0cmluZyIsIlRPTkNyeXB0b01vZHVsZSIsImNoYWxsZW5nZUhleCIsInJlcXVlc3RDb3JlIiwiYmFzZUhleCIsImV4cG9uZW50SGV4IiwibW9kdWx1c0hleCIsImJhc2UiLCJleHBvbmVudCIsIm1vZHVsdXMiLCJsZW5ndGgiLCJvdXRwdXRFbmNvZGluZyIsImtleSIsInBhcmFtcyIsImZpeGVkIiwiT2JqZWN0IiwiYXNzaWduIiwicGFzc3dvcmQiLCJzYWx0Iiwic2VjcmV0S2V5Iiwic2VyaWFsaXplZCIsImluZGV4IiwiaGFyZGVuZWQiLCJjb21wbGlhbnQiLCJwYXRoIiwiVE9OTW9kdWxlIiwibW9kdWxlTmFtZSJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUF1QkE7Ozs7OztBQUVPLElBQU1BLGlCQUFpQixHQUFHO0FBQzdCQyxFQUFBQSxJQUFJLEVBQUUsTUFEdUI7QUFFN0JDLEVBQUFBLEdBQUcsRUFBRSxLQUZ3QjtBQUc3QkMsRUFBQUEsWUFBWSxFQUFFLGNBSGU7QUFJN0JDLEVBQUFBLE1BQU0sRUFBRTtBQUpxQixDQUExQjs7QUFRQSxJQUFNQyxxQkFBcUIsR0FBRztBQUNqQ0MsRUFBQUEsR0FBRyxFQUFFLENBRDRCO0FBRWpDQyxFQUFBQSxPQUFPLEVBQUUsQ0FGd0I7QUFHakNDLEVB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QUFLakIsV0FBTCxDQUFpQiwwQkFBakIsRUFBNkM7QUFBRWlCLGtCQUFBQSxVQUFVLEVBQVZBO0FBQUYsaUJBQTdDLEM7Ozs7Ozs7Ozs7Ozs7Ozs7OztFQXJOOEJLLHFCOzs7QUEwTjdDeEIsZUFBZSxDQUFDeUIsVUFBaEIsR0FBNkIsaUJBQTdCIiwic291cmNlc0NvbnRlbnQiOlsiLypcbiAqIENvcHlyaWdodCAyMDE4LTIwMjAgVE9OIERFViBTT0xVVElPTlMgTFRELlxuICovXG5cbi8vIEBmbG93XG4vKiBlc2xpbnQtZGlzYWJsZSBjbGFzcy1tZXRob2RzLXVzZS10aGlzLHByZWZlci1vYmplY3Qtc3ByZWFkICovXG5cbmltcG9ydCB0eXBlIHtcbiAgICBUT05GYWN0b3JpemVSZXN1bHQsXG4gICAgVE9OSW5wdXRNZXNzYWdlLFxuICAgIFRPTktleVBhaXJEYXRhLFxuICAgIFRPTk91dHB1dEVuY29kaW5nVHlwZSxcbiAgICBUT05TY3J5cHRQYXJhbXMsXG4gICAgVE9OTmFjbEJveFBhcmFtcyxcbiAgICBUT05OYWNsU2VjcmV0Qm94UGFyYW1zLFxuICAgIFRPTk1uZW1vbmljV29yZHNQYXJhbXMsXG4gICAgVE9OTW5lbW9uaWNGcm9tUmFuZG9tUGFyYW1zLFxuICAgIFRPTk1uZW1vbmljRnJvbUVudHJvcHlQYXJhbXMsXG4gICAgVE9OTW5lbW9uaWNJc1ZhbGlkUGFyYW1zLFxuICAgIFRPTk1uZW1vbmljRGVyaXZlU2lnbktleXNQYXJhbXMsXG4gICAgVE9OQ3J5cHRvLFxuICAgIFRPTkhES2V5RnJvbU1uZW1vbmljUGFyYW1zLFxufSBmcm9tIFwiLi4vLi4vdHlwZXNcIjtcbmltcG9ydCB7IFRPTk1vZHVsZSB9IGZyb20gJy4uL1RPTk1vZHVsZSc7XG5cbmV4cG9ydCBjb25zdCBUT05PdXRwdXRFbmNvZGluZyA9IHtcbiAgICBUZXh0OiAnVGV4dCcsXG4gICAgSGV4OiAnSGV4JyxcbiAgICBIZXhVcHBlcmNhc2U6ICdIZXhVcHBlcmNhc2UnLFxuICAgIEJhc2U2NDogJ0Jhc2U2NCcsXG59O1xuXG5cbmV4cG9ydCBjb25zdCBUT05NbmVtb25pY0RpY3Rpb25hcnkgPSB7XG4gICAgVE9OOiAwLFxuICAgIEVOR0xJU0g6IDEsXG4gICAgQ0hJTkVTRV9TSU1QTElGSUVEOiAyLFxuICAgIENISU5FU0VfVFJBRElUSU9OQUw6IDMsXG4gICAgRlJFTkNIOiA0LFxuICAgIElUQUxJQU46IDUsXG4gICAgSkFQQU5FU0U6IDYsXG4gICAgS09SRUFOOiA3LFxuICAgIFNQQU5JU0g6IDgsXG59O1xuXG5cbmZ1bmN0aW9uIGZpeElucHV0TWVzc2FnZShtZXNzYWdlOiBUT05JbnB1dE1lc3NhZ2UpOiBUT05JbnB1dE1lc3NhZ2Uge1xuICAgIHJldHVybiBtZXNzYWdlLnRleHRcbiAgICAgICAgPyB7XG4gICAgICAgICAgICBiYXNlNjQ6IEJ1ZmZlci5mcm9tKG1lc3NhZ2UudGV4dCwgJ3V0ZjgnKVxuICAgICAgICAgICAgICAgIC50b1N0cmluZygnYmFzZTY0JyksXG4gICAgICAgIH1cbiAgICAgICAgOiBtZXNzYWdlO1xufVxuXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBUT05DcnlwdG9Nb2R1bGUgZXh0ZW5kcyBUT05Nb2R1bGUgaW1wbGVtZW50cyBUT05DcnlwdG8ge1xuICAgIGFzeW5jIGZhY3Rvcml6ZShjaGFsbGVuZ2VIZXg6IHN0cmluZyk6IFByb21pc2U8VE9ORmFjdG9yaXplUmVzdWx0PiB7XG4gICAgICAgIHJldHVybiB0aGlzLnJlcXVlc3RDb3JlKCdjcnlwdG8ubWF0aC5mYWN0b3JpemUnLCBjaGFsbGVuZ2VIZXgpO1xuICAgIH1cblxuICAgIGFzeW5jIG1vZHVsYXJQb3dlcihcbiAgICAgICAgYmFzZUhleDogc3RyaW5nLFxuICAgICAgICBleHBvbmVudEhleDogc3RyaW5nLFxuICAgICAgICBtb2R1bHVzSGV4OiBzdHJpbmcsXG4gICAgKTogUHJvbWlzZTxzdHJpbmc+IHtcbiAgICAgICAgcmV0dXJuIHRoaXMucmVxdWVzdENvcmUoJ2NyeXB0by5tYXRoLm1vZHVsYXJQb3dlcicsIHtcbiAgICAgICAgICAgIGJhc2U6IGJhc2VIZXgsXG4gICAgICAgICAgICBleHBvbmVudDogZXhwb25lbnRIZXgsXG4gICAgICAgICAgICBtb2R1bHVzOiBtb2R1bHVzSGV4LFxuICAgICAgICB9KTtcbiAgICB9XG5cbiAgICBhc3luYyByYW5kb21HZW5lcmF0ZUJ5dGVzKFxuICAgICAgICBsZW5ndGg6IG51bWJlcixcbiAgICAgICAgb3V0cHV0RW5jb2Rpbmc6IFRPTk91dHB1dEVuY29kaW5nVHlwZSA9IFRPTk91dHB1dEVuY29kaW5nLkhleCxcbiAgICApOiBQcm9taXNlPHN0cmluZz4ge1xuICAgICAgICByZXR1cm4gdGhpcy5yZXF1ZXN0Q29yZSgnY3J5cHRvLnJhbmRvbS5nZW5lcmF0ZUJ5dGVzJywge1xuICAgICAgICAgICAgbGVuZ3RoLFxuICAgICAgICAgICAgb3V0cHV0RW5jb2RpbmcsXG4gICAgICAgIH0pO1xuICAgIH1cblxuXG4gICAgYXN5bmMgZWQyNTUxOUtleXBhaXIoKTogUHJvbWlzZTxUT05LZXlQYWlyRGF0YT4ge1xuICAgICAgICByZXR1cm4gdGhpcy5yZXF1ZXN0Q29yZSgnY3J5cHRvLmVkMjU1MTkua2V5cGFpcicpO1xuICAgIH1cblxuICAgIGFzeW5jIHB1YmxpY0tleVRvU3RyaW5nKGtleTogc3RyaW5nKTogUHJvbWlzZTxzdHJpbmc+IHtcbiAgICAgICAgcmV0dXJuIHRoaXMucmVxdWVzdENvcmUoJ2NyeXB0by50b25fcHVibGljX2tleV9zdHJpbmcnLCBrZXkpO1xuICAgIH1cblxuICAgIGFzeW5jIHNoYTUxMihcbiAgICAgICAgbWVzc2FnZTogVE9OSW5wdXRNZXNzYWdlLFxuICAgICAgICBvdXRwdXRFbmNvZGluZzogVE9OT3V0cHV0RW5jb2RpbmdUeXBlID0gVE9OT3V0cHV0RW5jb2RpbmcuSGV4LFxuICAgICk6IFByb21pc2U8c3RyaW5nPiB7XG4gICAgICAgIHJldHVybiB0aGlzLnJlcXVlc3RDb3JlKFxuICAgICAgICAgICAgJ2NyeXB0by5zaGE1MTInLFxuICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgIG1lc3NhZ2U6IGZpeElucHV0TWVzc2FnZShtZXNzYWdlKSxcbiAgICAgICAgICAgICAgICBvdXRwdXRFbmNvZGluZyxcbiAgICAgICAgICAgIH0sXG4gICAgICAgICk7XG4gICAgfVxuXG4gICAgYXN5bmMgc2hhMjU2KFxuICAgICAgICBtZXNzYWdlOiBUT05JbnB1dE1lc3NhZ2UsXG4gICAgICAgIG91dHB1dEVuY29kaW5nOiBUT05PdXRwdXRFbmNvZGluZ1R5cGUgPSBUT05PdXRwdXRFbmNvZGluZy5IZXgsXG4gICAgKTogUHJvbWlzZTxzdHJpbmc+IHtcbiAgICAgICAgcmV0dXJuIHRoaXMucmVxdWVzdENvcmUoXG4gICAgICAgICAgICAnY3J5cHRvLnNoYTI1NicsXG4gICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgbWVzc2FnZTogZml4SW5wdXRNZXNzYWdlKG1lc3NhZ2UpLFxuICAgICAgICAgICAgICAgIG91dHB1dEVuY29kaW5nLFxuICAgICAgICAgICAgfSxcbiAgICAgICAgKTtcbiAgICB9XG5cbiAgICBhc3luYyBzY3J5cHQocGFyYW1zOiBUT05TY3J5cHRQYXJhbXMpOiBQcm9taXNlPHN0cmluZz4ge1xuICAgICAgICBjb25zdCBmaXhlZDogVE9OU2NyeXB0UGFyYW1zID0gKE9iamVjdC5hc3NpZ24oe30sIHBhcmFtcyk6IGFueSk7XG4gICAgICAgIGZpeGVkLnBhc3N3b3JkID0gZml4SW5wdXRNZXNzYWdlKHBhcmFtcy5wYXNzd29yZCk7XG4gICAgICAgIGZpeGVkLnNhbHQgPSBmaXhJbnB1dE1lc3NhZ2UocGFyYW1zLnNhbHQpO1xuICAgICAgICByZXR1cm4gdGhpcy5yZXF1ZXN0Q29yZSgnY3J5cHRvLnNjcnlwdCcsIGZpeGVkKTtcbiAgICB9XG5cbiAgICBhc3luYyBuYWNsQm94S2V5cGFpcigpOiBQcm9taXNlPFRPTktleVBhaXJEYXRhPiB7XG4gICAgICAgIHJldHVybiB0aGlzLnJlcXVlc3RDb3JlKCdjcnlwdG8ubmFjbC5ib3gua2V5cGFpcicpO1xuICAgIH1cblxuICAgIGFzeW5jIG5hY2xCb3hLZXlwYWlyRnJvbVNlY3JldEtleShzZWNyZXRLZXk6IHN0cmluZyk6IFByb21pc2U8VE9OS2V5UGFpckRhdGE+IHtcbiAgICAgICAgcmV0dXJuIHRoaXMucmVxdWVzdENvcmUoJ2NyeXB0by5uYWNsLmJveC5rZXlwYWlyLmZyb21TZWNyZXRLZXknLCBzZWNyZXRLZXkpO1xuICAgIH1cblxuICAgIGFzeW5jIG5hY2xTaWduS2V5cGFpcigpOiBQcm9taXNlPFRPTktleVBhaXJEYXRhPiB7XG4gICAgICAgIHJldHVybiB0aGlzLnJlcXVlc3RDb3JlKCdjcnlwdG8ubmFjbC5zaWduLmtleXBhaXInKTtcbiAgICB9XG5cbiAgICBhc3luYyBuYWNsU2lnbktleXBhaXJGcm9tU2VjcmV0S2V5KHNlY3JldEtleTogc3RyaW5nKTogUHJvbWlzZTxUT05LZXlQYWlyRGF0YT4ge1xuICAgICAgICByZXR1cm4gdGhpcy5yZXF1ZXN0Q29yZSgnY3J5cHRvLm5hY2wuc2lnbi5rZXlwYWlyLmZyb21TZWNyZXRLZXknLCBzZWNyZXRLZXkpO1xuICAgIH1cblxuICAgIGFzeW5jIG5hY2xCb3gocGFyYW1zOiBUT05OYWNsQm94UGFyYW1zKTogUHJvbWlzZTxzdHJpbmc+IHtcbiAgICAgICAgY29uc3QgZml4ZWQ6IFRPTk5hY2xCb3hQYXJhbXMgPSAoT2JqZWN0LmFzc2lnbih7fSwgcGFyYW1zKTogYW55KTtcbiAgICAgICAgZml4ZWQubWVzc2FnZSA9IGZpeElucHV0TWVzc2FnZShwYXJhbXMubWVzc2FnZSk7XG4gICAgICAgIHJldHVybiB0aGlzLnJlcXVlc3RDb3JlKCdjcnlwdG8ubmFjbC5ib3gnLCBmaXhlZCk7XG4gICAgfVxuXG4gICAgYXN5bmMgbmFjbEJveE9wZW4ocGFyYW1zOiBUT05OYWNsQm94UGFyYW1zKTogUHJvbWlzZTxzdHJpbmc+IHtcbiAgICAgICAgY29uc3QgZml4ZWQ6IFRPTk5hY2xCb3hQYXJhbXMgPSAoT2JqZWN0LmFzc2lnbih7fSwgcGFyYW1zKTogYW55KTtcbiAgICAgICAgZml4ZWQubWVzc2FnZSA9IGZpeElucHV0TWVzc2FnZShwYXJhbXMubWVzc2FnZSk7XG4gICAgICAgIHJldHVybiB0aGlzLnJlcXVlc3RDb3JlKCdjcnlwdG8ubmFjbC5ib3gub3BlbicsIGZpeGVkKTtcbiAgICB9XG5cbiAgICBhc3luYyBuYWNsU2VjcmV0Qm94KHBhcmFtczogVE9OTmFjbFNlY3JldEJveFBhcmFtcyk6IFByb21pc2U8c3RyaW5nPiB7XG4gICAgICAgIGNvbnN0IGZpeGVkOiBUT05OYWNsQm94UGFyYW1zID0gKE9iamVjdC5hc3NpZ24oe30sIHBhcmFtcyk6IGFueSk7XG4gICAgICAgIGZpeGVkLm1lc3NhZ2UgPSBmaXhJbnB1dE1lc3NhZ2UocGFyYW1zLm1lc3NhZ2UpO1xuICAgICAgICByZXR1cm4gdGhpcy5yZXF1ZXN0Q29yZSgnY3J5cHRvLm5hY2wuc2VjcmV0LmJveCcsIGZpeGVkKTtcbiAgICB9XG5cbiAgICBhc3luYyBuYWNsU2VjcmV0Qm94T3BlbihwYXJhbXM6IFRPTk5hY2xTZWNyZXRCb3hQYXJhbXMpOiBQcm9taXNlPHN0cmluZz4ge1xuICAgICAgICBjb25zdCBmaXhlZDogVE9OTmFjbEJveFBhcmFtcyA9IChPYmplY3QuYXNzaWduKHt9LCBwYXJhbXMpOiBhbnkpO1xuICAgICAgICBmaXhlZC5tZXNzYWdlID0gZml4SW5wdXRNZXNzYWdlKHBhcmFtcy5tZXNzYWdlKTtcbiAgICAgICAgcmV0dXJuIHRoaXMucmVxdWVzdENvcmUoJ2NyeXB0by5uYWNsLnNlY3JldC5ib3gub3BlbicsIGZpeGVkKTtcbiAgICB9XG5cbiAgICBhc3luYyBuYWNsU2lnbihcbiAgICAgICAgbWVzc2FnZTogVE9OSW5wdXRNZXNzYWdlLFxuICAgICAgICBrZXk6IHN0cmluZyxcbiAgICAgICAgb3V0cHV0RW5jb2Rpbmc6IFRPTk91dHB1dEVuY29kaW5nVHlwZSA9IFRPTk91dHB1dEVuY29kaW5nLkhleCxcbiAgICApOiBQcm9taXNlPHN0cmluZz4ge1xuICAgICAgICByZXR1cm4gdGhpcy5yZXF1ZXN0Q29yZSgnY3J5cHRvLm5hY2wuc2lnbicsIHtcbiAgICAgICAgICAgIG1lc3NhZ2U6IGZpeElucHV0TWVzc2FnZShtZXNzYWdlKSxcbiAgICAgICAgICAgIGtleSxcbiAgICAgICAgICAgIG91dHB1dEVuY29kaW5nLFxuICAgICAgICB9KTtcbiAgICB9XG5cbiAgICBhc3luYyBuYWNsU2lnbk9wZW4oXG4gICAgICAgIG1lc3NhZ2U6IFRPTklucHV0TWVzc2FnZSxcbiAgICAgICAga2V5OiBzdHJpbmcsXG4gICAgICAgIG91dHB1dEVuY29kaW5nOiBUT05PdXRwdXRFbmNvZGluZ1R5cGUgPSBUT05PdXRwdXRFbmNvZGluZy5IZXgsXG4gICAgKTogUHJvbWlzZTxzdHJpbmc+IHtcbiAgICAgICAgcmV0dXJuIHRoaXMucmVxdWVzdENvcmUoJ2NyeXB0by5uYWNsLnNpZ24ub3BlbicsIHtcbiAgICAgICAgICAgIG1lc3NhZ2U6IGZpeElucHV0TWVzc2FnZShtZXNzYWdlKSxcbiAgICAgICAgICAgIGtleSxcbiAgICAgICAgICAgIG91dHB1dEVuY29kaW5nLFxuICAgICAgICB9KTtcbiAgICB9XG5cbiAgICBhc3luYyBuYWNsU2lnbkRldGFjaGVkKFxuICAgICAgICBtZXNzYWdlOiBUT05JbnB1dE1lc3NhZ2UsXG4gICAgICAgIGtleTogc3RyaW5nLFxuICAgICAgICBvdXRwdXRFbmNvZGluZzogVE9OT3V0cHV0RW5jb2RpbmdUeXBlID0gVE9OT3V0cHV0RW5jb2RpbmcuSGV4LFxuICAgICk6IFByb21pc2U8c3RyaW5nPiB7XG4gICAgICAgIHJldHVybiB0aGlzLnJlcXVlc3RDb3JlKCdjcnlwdG8ubmFjbC5zaWduLmRldGFjaGVkJywge1xuICAgICAgICAgICAgbWVzc2FnZTogZml4SW5wdXRNZXNzYWdlKG1lc3NhZ2UpLFxuICAgICAgICAgICAga2V5LFxuICAgICAgICAgICAgb3V0cHV0RW5jb2RpbmcsXG4gICAgICAgIH0pO1xuICAgIH1cblxuICAgIC8vIE1uZW1vbmljXG5cbiAgICBhc3luYyBtbmVtb25pY1dvcmRzKHBhcmFtcz86IFRPTk1uZW1vbmljV29yZHNQYXJhbXMpOiBQcm9taXNlPHN0cmluZz4ge1xuICAgICAgICByZXR1cm4gdGhpcy5yZXF1ZXN0Q29yZSgnY3J5cHRvLm1uZW1vbmljLndvcmRzJywgcGFyYW1zIHx8IHt9KTtcbiAgICB9XG5cbiAgICBhc3luYyBtbmVtb25pY0Zyb21SYW5kb20ocGFyYW1zPzogVE9OTW5lbW9uaWNGcm9tUmFuZG9tUGFyYW1zKTogUHJvbWlzZTxzdHJpbmc+IHtcbiAgICAgICAgcmV0dXJuIHRoaXMucmVxdWVzdENvcmUoJ2NyeXB0by5tbmVtb25pYy5mcm9tLnJhbmRvbScsIHBhcmFtcyB8fCB7fSk7XG4gICAgfVxuXG4gICAgYXN5bmMgbW5lbW9uaWNGcm9tRW50cm9weShwYXJhbXM6IFRPTk1uZW1vbmljRnJvbUVudHJvcHlQYXJhbXMpOiBQcm9taXNlPHN0cmluZz4ge1xuICAgICAgICByZXR1cm4gdGhpcy5yZXF1ZXN0Q29yZShcbiAgICAgICAgICAgICdjcnlwdG8ubW5lbW9uaWMuZnJvbS5lbnRyb3B5JyxcbiAgICAgICAgICAgIHBhcmFtcyxcbiAgICAgICAgKTtcbiAgICB9XG5cbiAgICBhc3luYyBtbmVtb25pY0lzVmFsaWQocGFyYW1zOiBUT05NbmVtb25pY0lzVmFsaWRQYXJhbXMpOiBQcm9taXNlPGJvb2xlYW4+IHtcbiAgICAgICAgcmV0dXJuIHRoaXMucmVxdWVzdENvcmUoJ2NyeXB0by5tbmVtb25pYy52ZXJpZnknLCBwYXJhbXMpO1xuICAgIH1cblxuICAgIGFzeW5jIG1uZW1vbmljRGVyaXZlU2lnbktleXMocGFyYW1zOiBUT05NbmVtb25pY0Rlcml2ZVNpZ25LZXlzUGFyYW1zKTogUHJvbWlzZTxUT05LZXlQYWlyRGF0YT4ge1xuICAgICAgICByZXR1cm4gdGhpcy5yZXF1ZXN0Q29yZSgnY3J5cHRvLm1uZW1vbmljLmRlcml2ZS5zaWduLmtleXMnLCBwYXJhbXMpO1xuICAgIH1cblxuICAgIC8vIEhES2V5c1xuXG4gICAgYXN5bmMgaGRrZXlYUHJ2RnJvbU1uZW1vbmljKHBhcmFtczogVE9OSERLZXlGcm9tTW5lbW9uaWNQYXJhbXMpOiBQcm9taXNlPHN0cmluZz4ge1xuICAgICAgICByZXR1cm4gdGhpcy5yZXF1ZXN0Q29yZSgnY3J5cHRvLmhka2V5LnhwcnYuZnJvbS5tbmVtb25pYycsIHBhcmFtcyk7XG4gICAgfVxuXG4gICAgYXN5bmMgaGRrZXlYUHJ2RGVyaXZlKFxuICAgICAgICBzZXJpYWxpemVkOiBzdHJpbmcsXG4gICAgICAgIGluZGV4OiBudW1iZXIsXG4gICAgICAgIGhhcmRlbmVkOiBib29sZWFuLFxuICAgICAgICBjb21wbGlhbnQ6IGJvb2xlYW4sXG4gICAgKTogUHJvbWlzZTxzdHJpbmc+IHtcbiAgICAgICAgcmV0dXJuIHRoaXMucmVxdWVzdENvcmUoXG4gICAgICAgICAgICAnY3J5cHRvLmhka2V5LnhwcnYuZGVyaXZlJyxcbiAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICBzZXJpYWxpemVkLFxuICAgICAgICAgICAgICAgIGluZGV4LFxuICAgICAgICAgICAgICAgIGhhcmRlbmVkLFxuICAgICAgICAgICAgICAgIGNvbXBsaWFudCxcbiAgICAgICAgICAgIH0sXG4gICAgICAgICk7XG4gICAgfVxuXG4gICAgYXN5bmMgaGRrZXlYUHJ2RGVyaXZlUGF0aChcbiAgICAgICAgc2VyaWFsaXplZDogc3RyaW5nLFxuICAgICAgICBwYXRoOiBzdHJpbmcsXG4gICAgICAgIGNvbXBsaWFudDogYm9vbGVhbixcbiAgICApOiBQcm9taXNlPHN0cmluZz4ge1xuICAgICAgICByZXR1cm4gdGhpcy5yZXF1ZXN0Q29yZShcbiAgICAgICAgICAgICdjcnlwdG8uaGRrZXkueHBydi5kZXJpdmUucGF0aCcsXG4gICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgc2VyaWFsaXplZCxcbiAgICAgICAgICAgICAgICBwYXRoLFxuICAgICAgICAgICAgICAgIGNvbXBsaWFudCxcbiAgICAgICAgICAgIH0sXG4gICAgICAgICk7XG4gICAgfVxuXG4gICAgYXN5bmMgaGRrZXlYUHJ2U2VjcmV0KHNlcmlhbGl6ZWQ6IHN0cmluZyk6IFByb21pc2U8c3RyaW5nPiB7XG4gICAgICAgIHJldHVybiB0aGlzLnJlcXVlc3RDb3JlKCdjcnlwdG8uaGRrZXkueHBydi5zZWNyZXQnLCB7IHNlcmlhbGl6ZWQgfSk7XG4gICAgfVxuXG4gICAgYXN5bmMgaGRrZXlYUHJ2UHVibGljKHNlcmlhbGl6ZWQ6IHN0cmluZyk6IFByb21pc2U8c3RyaW5nPiB7XG4gICAgICAgIHJldHVybiB0aGlzLnJlcXVlc3RDb3JlKCdjcnlwdG8uaGRrZXkueHBydi5wdWJsaWMnLCB7IHNlcmlhbGl6ZWQgfSk7XG4gICAgfVxuXG59XG5cblRPTkNyeXB0b01vZHVsZS5tb2R1bGVOYW1lID0gJ1RPTkNyeXB0b01vZHVsZSc7XG4iXX0=