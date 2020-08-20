"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = exports.TONMnemonicDictionary = exports.TONOutputEncoding = void 0;

var _regenerator = _interopRequireDefault(require("@babel/runtime/regenerator"));

var _TONModule2 = require("../TONModule");

var _cryptoBox = require("./crypto-box");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _typeof(obj) { "@babel/helpers - typeof"; if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { Promise.resolve(value).then(_next, _throw); } }

function _asyncToGenerator(fn) { return function () { var self = this, args = arguments; return new Promise(function (resolve, reject) { var gen = fn.apply(self, args); function _next(value) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "next", value); } function _throw(err) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "throw", err); } _next(undefined); }); }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

function _createSuper(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct(); return function () { var Super = _getPrototypeOf(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = _getPrototypeOf(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return _possibleConstructorReturn(this, result); }; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Date.prototype.toString.call(Reflect.construct(Date, [], function () {})); return true; } catch (e) { return false; } }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

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
  _inherits(TONCryptoModule, _TONModule);

  var _super = _createSuper(TONCryptoModule);

  function TONCryptoModule() {
    _classCallCheck(this, TONCryptoModule);

    return _super.apply(this, arguments);
  }

  _createClass(TONCryptoModule, [{
    key: "getCryptoBox",
    value: function getCryptoBox(params) {
      return Promise.resolve(new _cryptoBox.CoreCryptoBox(this, params));
    }
  }, {
    key: "factorize",
    value: function () {
      var _factorize = _asyncToGenerator( /*#__PURE__*/_regenerator["default"].mark(function _callee(challengeHex) {
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
      var _modularPower = _asyncToGenerator( /*#__PURE__*/_regenerator["default"].mark(function _callee2(baseHex, exponentHex, modulusHex) {
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
      var _randomGenerateBytes = _asyncToGenerator( /*#__PURE__*/_regenerator["default"].mark(function _callee3(length) {
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
      var _ed25519Keypair = _asyncToGenerator( /*#__PURE__*/_regenerator["default"].mark(function _callee4() {
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
      var _publicKeyToString = _asyncToGenerator( /*#__PURE__*/_regenerator["default"].mark(function _callee5(key) {
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
      var _sha = _asyncToGenerator( /*#__PURE__*/_regenerator["default"].mark(function _callee6(message) {
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
      var _sha2 = _asyncToGenerator( /*#__PURE__*/_regenerator["default"].mark(function _callee7(message) {
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
      var _scrypt = _asyncToGenerator( /*#__PURE__*/_regenerator["default"].mark(function _callee8(params) {
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
      var _naclBoxKeypair = _asyncToGenerator( /*#__PURE__*/_regenerator["default"].mark(function _callee9() {
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
      var _naclBoxKeypairFromSecretKey = _asyncToGenerator( /*#__PURE__*/_regenerator["default"].mark(function _callee10(secretKey) {
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
      var _naclSignKeypair = _asyncToGenerator( /*#__PURE__*/_regenerator["default"].mark(function _callee11() {
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
      var _naclSignKeypairFromSecretKey = _asyncToGenerator( /*#__PURE__*/_regenerator["default"].mark(function _callee12(secretKey) {
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
      var _naclBox = _asyncToGenerator( /*#__PURE__*/_regenerator["default"].mark(function _callee13(params) {
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
      var _naclBoxOpen = _asyncToGenerator( /*#__PURE__*/_regenerator["default"].mark(function _callee14(params) {
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
      var _naclSecretBox = _asyncToGenerator( /*#__PURE__*/_regenerator["default"].mark(function _callee15(params) {
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
      var _naclSecretBoxOpen = _asyncToGenerator( /*#__PURE__*/_regenerator["default"].mark(function _callee16(params) {
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
      var _naclSign = _asyncToGenerator( /*#__PURE__*/_regenerator["default"].mark(function _callee17(message, key) {
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
      var _naclSignOpen = _asyncToGenerator( /*#__PURE__*/_regenerator["default"].mark(function _callee18(message, key) {
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
      var _naclSignDetached = _asyncToGenerator( /*#__PURE__*/_regenerator["default"].mark(function _callee19(message, key) {
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
      var _mnemonicWords = _asyncToGenerator( /*#__PURE__*/_regenerator["default"].mark(function _callee20(params) {
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
      var _mnemonicFromRandom = _asyncToGenerator( /*#__PURE__*/_regenerator["default"].mark(function _callee21(params) {
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
      var _mnemonicFromEntropy = _asyncToGenerator( /*#__PURE__*/_regenerator["default"].mark(function _callee22(params) {
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
      var _mnemonicIsValid = _asyncToGenerator( /*#__PURE__*/_regenerator["default"].mark(function _callee23(params) {
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
      var _mnemonicDeriveSignKeys = _asyncToGenerator( /*#__PURE__*/_regenerator["default"].mark(function _callee24(params) {
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
      var _hdkeyXPrvFromMnemonic = _asyncToGenerator( /*#__PURE__*/_regenerator["default"].mark(function _callee25(params) {
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
      var _hdkeyXPrvDerive = _asyncToGenerator( /*#__PURE__*/_regenerator["default"].mark(function _callee26(serialized, index, hardened, compliant) {
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
      var _hdkeyXPrvDerivePath = _asyncToGenerator( /*#__PURE__*/_regenerator["default"].mark(function _callee27(serialized, path, compliant) {
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
      var _hdkeyXPrvSecret = _asyncToGenerator( /*#__PURE__*/_regenerator["default"].mark(function _callee28(serialized) {
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
      var _hdkeyXPrvPublic = _asyncToGenerator( /*#__PURE__*/_regenerator["default"].mark(function _callee29(serialized) {
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy9tb2R1bGVzL1RPTkNyeXB0b01vZHVsZS5qcyJdLCJuYW1lcyI6WyJUT05PdXRwdXRFbmNvZGluZyIsIlRleHQiLCJIZXgiLCJIZXhVcHBlcmNhc2UiLCJCYXNlNjQiLCJUT05NbmVtb25pY0RpY3Rpb25hcnkiLCJUT04iLCJFTkdMSVNIIiwiQ0hJTkVTRV9TSU1QTElGSUVEIiwiQ0hJTkVTRV9UUkFESVRJT05BTCIsIkZSRU5DSCIsIklUQUxJQU4iLCJKQVBBTkVTRSIsIktPUkVBTiIsIlNQQU5JU0giLCJmaXhJbnB1dE1lc3NhZ2UiLCJtZXNzYWdlIiwidGV4dCIsImJhc2U2NCIsIkJ1ZmZlciIsImZyb20iLCJ0b1N0cmluZyIsIlRPTkNyeXB0b01vZHVsZSIsInBhcmFtcyIsIlByb21pc2UiLCJyZXNvbHZlIiwiQ29yZUNyeXB0b0JveCIsImNoYWxsZW5nZUhleCIsInJlcXVlc3RDb3JlIiwiYmFzZUhleCIsImV4cG9uZW50SGV4IiwibW9kdWx1c0hleCIsImJhc2UiLCJleHBvbmVudCIsIm1vZHVsdXMiLCJsZW5ndGgiLCJvdXRwdXRFbmNvZGluZyIsImtleSIsImZpeGVkIiwiT2JqZWN0IiwiYXNzaWduIiwicGFzc3dvcmQiLCJzYWx0Iiwic2VjcmV0S2V5Iiwic2VyaWFsaXplZCIsImluZGV4IiwiaGFyZGVuZWQiLCJjb21wbGlhbnQiLCJwYXRoIiwiVE9OTW9kdWxlIiwibW9kdWxlTmFtZSJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7O0FBeUJBOztBQUNBOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFFTyxJQUFNQSxpQkFBaUIsR0FBRztBQUM3QkMsRUFBQUEsSUFBSSxFQUFFLE1BRHVCO0FBRTdCQyxFQUFBQSxHQUFHLEVBQUUsS0FGd0I7QUFHN0JDLEVBQUFBLFlBQVksRUFBRSxjQUhlO0FBSTdCQyxFQUFBQSxNQUFNLEVBQUU7QUFKcUIsQ0FBMUI7O0FBUUEsSUFBTUMscUJBQXFCLEdBQUc7QUFDakNDLEVBQUFBLEdB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RyxDOzs7Ozs7Ozs7Ozs7Ozs7Ozs7OzZHQVVXSCxVOzs7OzttREFDWCxLQUFLaEIsV0FBTCxDQUFpQiwwQkFBakIsRUFBNkM7QUFBRWdCLGtCQUFBQSxVQUFVLEVBQVZBO0FBQUYsaUJBQTdDLEM7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7NkdBR1dBLFU7Ozs7O21EQUNYLEtBQUtoQixXQUFMLENBQWlCLDBCQUFqQixFQUE2QztBQUFFZ0Isa0JBQUFBLFVBQVUsRUFBVkE7QUFBRixpQkFBN0MsQzs7Ozs7Ozs7Ozs7Ozs7Ozs7OztFQXpOOEJLLHFCOzs7QUE4TjdDM0IsZUFBZSxDQUFDNEIsVUFBaEIsR0FBNkIsaUJBQTdCIiwic291cmNlc0NvbnRlbnQiOlsiLypcbiAqIENvcHlyaWdodCAyMDE4LTIwMjAgVE9OIERFViBTT0xVVElPTlMgTFRELlxuICovXG5cbi8vIEBmbG93XG4vKiBlc2xpbnQtZGlzYWJsZSBjbGFzcy1tZXRob2RzLXVzZS10aGlzLHByZWZlci1vYmplY3Qtc3ByZWFkICovXG5cbmltcG9ydCB0eXBlIHtcbiAgICBUT05GYWN0b3JpemVSZXN1bHQsXG4gICAgVE9OSW5wdXRNZXNzYWdlLFxuICAgIFRPTktleVBhaXJEYXRhLFxuICAgIFRPTk91dHB1dEVuY29kaW5nVHlwZSxcbiAgICBUT05TY3J5cHRQYXJhbXMsXG4gICAgVE9OTmFjbEJveFBhcmFtcyxcbiAgICBUT05OYWNsU2VjcmV0Qm94UGFyYW1zLFxuICAgIFRPTk1uZW1vbmljV29yZHNQYXJhbXMsXG4gICAgVE9OTW5lbW9uaWNGcm9tUmFuZG9tUGFyYW1zLFxuICAgIFRPTk1uZW1vbmljRnJvbUVudHJvcHlQYXJhbXMsXG4gICAgVE9OTW5lbW9uaWNJc1ZhbGlkUGFyYW1zLFxuICAgIFRPTk1uZW1vbmljRGVyaXZlU2lnbktleXNQYXJhbXMsXG4gICAgVE9OQ3J5cHRvLFxuICAgIFRPTkhES2V5RnJvbU1uZW1vbmljUGFyYW1zLFxuICAgIFRPTkNyeXB0b0JveFBhcmFtcyxcbiAgICBUT05DcnlwdG9Cb3gsXG59IGZyb20gJy4uLy4uL3R5cGVzJztcbmltcG9ydCB7IFRPTk1vZHVsZSB9IGZyb20gJy4uL1RPTk1vZHVsZSc7XG5pbXBvcnQgeyBDb3JlQ3J5cHRvQm94IH0gZnJvbSAnLi9jcnlwdG8tYm94JztcblxuZXhwb3J0IGNvbnN0IFRPTk91dHB1dEVuY29kaW5nID0ge1xuICAgIFRleHQ6ICdUZXh0JyxcbiAgICBIZXg6ICdIZXgnLFxuICAgIEhleFVwcGVyY2FzZTogJ0hleFVwcGVyY2FzZScsXG4gICAgQmFzZTY0OiAnQmFzZTY0Jyxcbn07XG5cblxuZXhwb3J0IGNvbnN0IFRPTk1uZW1vbmljRGljdGlvbmFyeSA9IHtcbiAgICBUT046IDAsXG4gICAgRU5HTElTSDogMSxcbiAgICBDSElORVNFX1NJTVBMSUZJRUQ6IDIsXG4gICAgQ0hJTkVTRV9UUkFESVRJT05BTDogMyxcbiAgICBGUkVOQ0g6IDQsXG4gICAgSVRBTElBTjogNSxcbiAgICBKQVBBTkVTRTogNixcbiAgICBLT1JFQU46IDcsXG4gICAgU1BBTklTSDogOCxcbn07XG5cblxuZnVuY3Rpb24gZml4SW5wdXRNZXNzYWdlKG1lc3NhZ2U6IFRPTklucHV0TWVzc2FnZSk6IFRPTklucHV0TWVzc2FnZSB7XG4gICAgcmV0dXJuIG1lc3NhZ2UudGV4dFxuICAgICAgICA/IHtcbiAgICAgICAgICAgIGJhc2U2NDogQnVmZmVyLmZyb20obWVzc2FnZS50ZXh0LCAndXRmOCcpXG4gICAgICAgICAgICAgICAgLnRvU3RyaW5nKCdiYXNlNjQnKSxcbiAgICAgICAgfVxuICAgICAgICA6IG1lc3NhZ2U7XG59XG5cbmV4cG9ydCBkZWZhdWx0IGNsYXNzIFRPTkNyeXB0b01vZHVsZSBleHRlbmRzIFRPTk1vZHVsZSBpbXBsZW1lbnRzIFRPTkNyeXB0byB7XG4gICAgZ2V0Q3J5cHRvQm94KHBhcmFtczogVE9OQ3J5cHRvQm94UGFyYW1zKTogUHJvbWlzZTxUT05DcnlwdG9Cb3g+IHtcbiAgICAgICAgcmV0dXJuIFByb21pc2UucmVzb2x2ZShuZXcgQ29yZUNyeXB0b0JveCh0aGlzLCBwYXJhbXMpKTtcbiAgICB9XG5cbiAgICBhc3luYyBmYWN0b3JpemUoY2hhbGxlbmdlSGV4OiBzdHJpbmcpOiBQcm9taXNlPFRPTkZhY3Rvcml6ZVJlc3VsdD4ge1xuICAgICAgICByZXR1cm4gdGhpcy5yZXF1ZXN0Q29yZSgnY3J5cHRvLm1hdGguZmFjdG9yaXplJywgY2hhbGxlbmdlSGV4KTtcbiAgICB9XG5cbiAgICBhc3luYyBtb2R1bGFyUG93ZXIoXG4gICAgICAgIGJhc2VIZXg6IHN0cmluZyxcbiAgICAgICAgZXhwb25lbnRIZXg6IHN0cmluZyxcbiAgICAgICAgbW9kdWx1c0hleDogc3RyaW5nLFxuICAgICk6IFByb21pc2U8c3RyaW5nPiB7XG4gICAgICAgIHJldHVybiB0aGlzLnJlcXVlc3RDb3JlKCdjcnlwdG8ubWF0aC5tb2R1bGFyUG93ZXInLCB7XG4gICAgICAgICAgICBiYXNlOiBiYXNlSGV4LFxuICAgICAgICAgICAgZXhwb25lbnQ6IGV4cG9uZW50SGV4LFxuICAgICAgICAgICAgbW9kdWx1czogbW9kdWx1c0hleCxcbiAgICAgICAgfSk7XG4gICAgfVxuXG4gICAgYXN5bmMgcmFuZG9tR2VuZXJhdGVCeXRlcyhcbiAgICAgICAgbGVuZ3RoOiBudW1iZXIsXG4gICAgICAgIG91dHB1dEVuY29kaW5nOiBUT05PdXRwdXRFbmNvZGluZ1R5cGUgPSBUT05PdXRwdXRFbmNvZGluZy5IZXgsXG4gICAgKTogUHJvbWlzZTxzdHJpbmc+IHtcbiAgICAgICAgcmV0dXJuIHRoaXMucmVxdWVzdENvcmUoJ2NyeXB0by5yYW5kb20uZ2VuZXJhdGVCeXRlcycsIHtcbiAgICAgICAgICAgIGxlbmd0aCxcbiAgICAgICAgICAgIG91dHB1dEVuY29kaW5nLFxuICAgICAgICB9KTtcbiAgICB9XG5cblxuICAgIGFzeW5jIGVkMjU1MTlLZXlwYWlyKCk6IFByb21pc2U8VE9OS2V5UGFpckRhdGE+IHtcbiAgICAgICAgcmV0dXJuIHRoaXMucmVxdWVzdENvcmUoJ2NyeXB0by5lZDI1NTE5LmtleXBhaXInKTtcbiAgICB9XG5cbiAgICBhc3luYyBwdWJsaWNLZXlUb1N0cmluZyhrZXk6IHN0cmluZyk6IFByb21pc2U8c3RyaW5nPiB7XG4gICAgICAgIHJldHVybiB0aGlzLnJlcXVlc3RDb3JlKCdjcnlwdG8udG9uX3B1YmxpY19rZXlfc3RyaW5nJywga2V5KTtcbiAgICB9XG5cbiAgICBhc3luYyBzaGE1MTIoXG4gICAgICAgIG1lc3NhZ2U6IFRPTklucHV0TWVzc2FnZSxcbiAgICAgICAgb3V0cHV0RW5jb2Rpbmc6IFRPTk91dHB1dEVuY29kaW5nVHlwZSA9IFRPTk91dHB1dEVuY29kaW5nLkhleCxcbiAgICApOiBQcm9taXNlPHN0cmluZz4ge1xuICAgICAgICByZXR1cm4gdGhpcy5yZXF1ZXN0Q29yZShcbiAgICAgICAgICAgICdjcnlwdG8uc2hhNTEyJyxcbiAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICBtZXNzYWdlOiBmaXhJbnB1dE1lc3NhZ2UobWVzc2FnZSksXG4gICAgICAgICAgICAgICAgb3V0cHV0RW5jb2RpbmcsXG4gICAgICAgICAgICB9LFxuICAgICAgICApO1xuICAgIH1cblxuICAgIGFzeW5jIHNoYTI1NihcbiAgICAgICAgbWVzc2FnZTogVE9OSW5wdXRNZXNzYWdlLFxuICAgICAgICBvdXRwdXRFbmNvZGluZzogVE9OT3V0cHV0RW5jb2RpbmdUeXBlID0gVE9OT3V0cHV0RW5jb2RpbmcuSGV4LFxuICAgICk6IFByb21pc2U8c3RyaW5nPiB7XG4gICAgICAgIHJldHVybiB0aGlzLnJlcXVlc3RDb3JlKFxuICAgICAgICAgICAgJ2NyeXB0by5zaGEyNTYnLFxuICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgIG1lc3NhZ2U6IGZpeElucHV0TWVzc2FnZShtZXNzYWdlKSxcbiAgICAgICAgICAgICAgICBvdXRwdXRFbmNvZGluZyxcbiAgICAgICAgICAgIH0sXG4gICAgICAgICk7XG4gICAgfVxuXG4gICAgYXN5bmMgc2NyeXB0KHBhcmFtczogVE9OU2NyeXB0UGFyYW1zKTogUHJvbWlzZTxzdHJpbmc+IHtcbiAgICAgICAgY29uc3QgZml4ZWQ6IFRPTlNjcnlwdFBhcmFtcyA9IChPYmplY3QuYXNzaWduKHt9LCBwYXJhbXMpOiBhbnkpO1xuICAgICAgICBmaXhlZC5wYXNzd29yZCA9IGZpeElucHV0TWVzc2FnZShwYXJhbXMucGFzc3dvcmQpO1xuICAgICAgICBmaXhlZC5zYWx0ID0gZml4SW5wdXRNZXNzYWdlKHBhcmFtcy5zYWx0KTtcbiAgICAgICAgcmV0dXJuIHRoaXMucmVxdWVzdENvcmUoJ2NyeXB0by5zY3J5cHQnLCBmaXhlZCk7XG4gICAgfVxuXG4gICAgYXN5bmMgbmFjbEJveEtleXBhaXIoKTogUHJvbWlzZTxUT05LZXlQYWlyRGF0YT4ge1xuICAgICAgICByZXR1cm4gdGhpcy5yZXF1ZXN0Q29yZSgnY3J5cHRvLm5hY2wuYm94LmtleXBhaXInKTtcbiAgICB9XG5cbiAgICBhc3luYyBuYWNsQm94S2V5cGFpckZyb21TZWNyZXRLZXkoc2VjcmV0S2V5OiBzdHJpbmcpOiBQcm9taXNlPFRPTktleVBhaXJEYXRhPiB7XG4gICAgICAgIHJldHVybiB0aGlzLnJlcXVlc3RDb3JlKCdjcnlwdG8ubmFjbC5ib3gua2V5cGFpci5mcm9tU2VjcmV0S2V5Jywgc2VjcmV0S2V5KTtcbiAgICB9XG5cbiAgICBhc3luYyBuYWNsU2lnbktleXBhaXIoKTogUHJvbWlzZTxUT05LZXlQYWlyRGF0YT4ge1xuICAgICAgICByZXR1cm4gdGhpcy5yZXF1ZXN0Q29yZSgnY3J5cHRvLm5hY2wuc2lnbi5rZXlwYWlyJyk7XG4gICAgfVxuXG4gICAgYXN5bmMgbmFjbFNpZ25LZXlwYWlyRnJvbVNlY3JldEtleShzZWNyZXRLZXk6IHN0cmluZyk6IFByb21pc2U8VE9OS2V5UGFpckRhdGE+IHtcbiAgICAgICAgcmV0dXJuIHRoaXMucmVxdWVzdENvcmUoJ2NyeXB0by5uYWNsLnNpZ24ua2V5cGFpci5mcm9tU2VjcmV0S2V5Jywgc2VjcmV0S2V5KTtcbiAgICB9XG5cbiAgICBhc3luYyBuYWNsQm94KHBhcmFtczogVE9OTmFjbEJveFBhcmFtcyk6IFByb21pc2U8c3RyaW5nPiB7XG4gICAgICAgIGNvbnN0IGZpeGVkOiBUT05OYWNsQm94UGFyYW1zID0gKE9iamVjdC5hc3NpZ24oe30sIHBhcmFtcyk6IGFueSk7XG4gICAgICAgIGZpeGVkLm1lc3NhZ2UgPSBmaXhJbnB1dE1lc3NhZ2UocGFyYW1zLm1lc3NhZ2UpO1xuICAgICAgICByZXR1cm4gdGhpcy5yZXF1ZXN0Q29yZSgnY3J5cHRvLm5hY2wuYm94JywgZml4ZWQpO1xuICAgIH1cblxuICAgIGFzeW5jIG5hY2xCb3hPcGVuKHBhcmFtczogVE9OTmFjbEJveFBhcmFtcyk6IFByb21pc2U8c3RyaW5nPiB7XG4gICAgICAgIGNvbnN0IGZpeGVkOiBUT05OYWNsQm94UGFyYW1zID0gKE9iamVjdC5hc3NpZ24oe30sIHBhcmFtcyk6IGFueSk7XG4gICAgICAgIGZpeGVkLm1lc3NhZ2UgPSBmaXhJbnB1dE1lc3NhZ2UocGFyYW1zLm1lc3NhZ2UpO1xuICAgICAgICByZXR1cm4gdGhpcy5yZXF1ZXN0Q29yZSgnY3J5cHRvLm5hY2wuYm94Lm9wZW4nLCBmaXhlZCk7XG4gICAgfVxuXG4gICAgYXN5bmMgbmFjbFNlY3JldEJveChwYXJhbXM6IFRPTk5hY2xTZWNyZXRCb3hQYXJhbXMpOiBQcm9taXNlPHN0cmluZz4ge1xuICAgICAgICBjb25zdCBmaXhlZDogVE9OTmFjbEJveFBhcmFtcyA9IChPYmplY3QuYXNzaWduKHt9LCBwYXJhbXMpOiBhbnkpO1xuICAgICAgICBmaXhlZC5tZXNzYWdlID0gZml4SW5wdXRNZXNzYWdlKHBhcmFtcy5tZXNzYWdlKTtcbiAgICAgICAgcmV0dXJuIHRoaXMucmVxdWVzdENvcmUoJ2NyeXB0by5uYWNsLnNlY3JldC5ib3gnLCBmaXhlZCk7XG4gICAgfVxuXG4gICAgYXN5bmMgbmFjbFNlY3JldEJveE9wZW4ocGFyYW1zOiBUT05OYWNsU2VjcmV0Qm94UGFyYW1zKTogUHJvbWlzZTxzdHJpbmc+IHtcbiAgICAgICAgY29uc3QgZml4ZWQ6IFRPTk5hY2xCb3hQYXJhbXMgPSAoT2JqZWN0LmFzc2lnbih7fSwgcGFyYW1zKTogYW55KTtcbiAgICAgICAgZml4ZWQubWVzc2FnZSA9IGZpeElucHV0TWVzc2FnZShwYXJhbXMubWVzc2FnZSk7XG4gICAgICAgIHJldHVybiB0aGlzLnJlcXVlc3RDb3JlKCdjcnlwdG8ubmFjbC5zZWNyZXQuYm94Lm9wZW4nLCBmaXhlZCk7XG4gICAgfVxuXG4gICAgYXN5bmMgbmFjbFNpZ24oXG4gICAgICAgIG1lc3NhZ2U6IFRPTklucHV0TWVzc2FnZSxcbiAgICAgICAga2V5OiBzdHJpbmcsXG4gICAgICAgIG91dHB1dEVuY29kaW5nOiBUT05PdXRwdXRFbmNvZGluZ1R5cGUgPSBUT05PdXRwdXRFbmNvZGluZy5IZXgsXG4gICAgKTogUHJvbWlzZTxzdHJpbmc+IHtcbiAgICAgICAgcmV0dXJuIHRoaXMucmVxdWVzdENvcmUoJ2NyeXB0by5uYWNsLnNpZ24nLCB7XG4gICAgICAgICAgICBtZXNzYWdlOiBmaXhJbnB1dE1lc3NhZ2UobWVzc2FnZSksXG4gICAgICAgICAgICBrZXksXG4gICAgICAgICAgICBvdXRwdXRFbmNvZGluZyxcbiAgICAgICAgfSk7XG4gICAgfVxuXG4gICAgYXN5bmMgbmFjbFNpZ25PcGVuKFxuICAgICAgICBtZXNzYWdlOiBUT05JbnB1dE1lc3NhZ2UsXG4gICAgICAgIGtleTogc3RyaW5nLFxuICAgICAgICBvdXRwdXRFbmNvZGluZzogVE9OT3V0cHV0RW5jb2RpbmdUeXBlID0gVE9OT3V0cHV0RW5jb2RpbmcuSGV4LFxuICAgICk6IFByb21pc2U8c3RyaW5nPiB7XG4gICAgICAgIHJldHVybiB0aGlzLnJlcXVlc3RDb3JlKCdjcnlwdG8ubmFjbC5zaWduLm9wZW4nLCB7XG4gICAgICAgICAgICBtZXNzYWdlOiBmaXhJbnB1dE1lc3NhZ2UobWVzc2FnZSksXG4gICAgICAgICAgICBrZXksXG4gICAgICAgICAgICBvdXRwdXRFbmNvZGluZyxcbiAgICAgICAgfSk7XG4gICAgfVxuXG4gICAgYXN5bmMgbmFjbFNpZ25EZXRhY2hlZChcbiAgICAgICAgbWVzc2FnZTogVE9OSW5wdXRNZXNzYWdlLFxuICAgICAgICBrZXk6IHN0cmluZyxcbiAgICAgICAgb3V0cHV0RW5jb2Rpbmc6IFRPTk91dHB1dEVuY29kaW5nVHlwZSA9IFRPTk91dHB1dEVuY29kaW5nLkhleCxcbiAgICApOiBQcm9taXNlPHN0cmluZz4ge1xuICAgICAgICByZXR1cm4gdGhpcy5yZXF1ZXN0Q29yZSgnY3J5cHRvLm5hY2wuc2lnbi5kZXRhY2hlZCcsIHtcbiAgICAgICAgICAgIG1lc3NhZ2U6IGZpeElucHV0TWVzc2FnZShtZXNzYWdlKSxcbiAgICAgICAgICAgIGtleSxcbiAgICAgICAgICAgIG91dHB1dEVuY29kaW5nLFxuICAgICAgICB9KTtcbiAgICB9XG5cbiAgICAvLyBNbmVtb25pY1xuXG4gICAgYXN5bmMgbW5lbW9uaWNXb3JkcyhwYXJhbXM/OiBUT05NbmVtb25pY1dvcmRzUGFyYW1zKTogUHJvbWlzZTxzdHJpbmc+IHtcbiAgICAgICAgcmV0dXJuIHRoaXMucmVxdWVzdENvcmUoJ2NyeXB0by5tbmVtb25pYy53b3JkcycsIHBhcmFtcyB8fCB7fSk7XG4gICAgfVxuXG4gICAgYXN5bmMgbW5lbW9uaWNGcm9tUmFuZG9tKHBhcmFtcz86IFRPTk1uZW1vbmljRnJvbVJhbmRvbVBhcmFtcyk6IFByb21pc2U8c3RyaW5nPiB7XG4gICAgICAgIHJldHVybiB0aGlzLnJlcXVlc3RDb3JlKCdjcnlwdG8ubW5lbW9uaWMuZnJvbS5yYW5kb20nLCBwYXJhbXMgfHwge30pO1xuICAgIH1cblxuICAgIGFzeW5jIG1uZW1vbmljRnJvbUVudHJvcHkocGFyYW1zOiBUT05NbmVtb25pY0Zyb21FbnRyb3B5UGFyYW1zKTogUHJvbWlzZTxzdHJpbmc+IHtcbiAgICAgICAgcmV0dXJuIHRoaXMucmVxdWVzdENvcmUoXG4gICAgICAgICAgICAnY3J5cHRvLm1uZW1vbmljLmZyb20uZW50cm9weScsXG4gICAgICAgICAgICBwYXJhbXMsXG4gICAgICAgICk7XG4gICAgfVxuXG4gICAgYXN5bmMgbW5lbW9uaWNJc1ZhbGlkKHBhcmFtczogVE9OTW5lbW9uaWNJc1ZhbGlkUGFyYW1zKTogUHJvbWlzZTxib29sZWFuPiB7XG4gICAgICAgIHJldHVybiB0aGlzLnJlcXVlc3RDb3JlKCdjcnlwdG8ubW5lbW9uaWMudmVyaWZ5JywgcGFyYW1zKTtcbiAgICB9XG5cbiAgICBhc3luYyBtbmVtb25pY0Rlcml2ZVNpZ25LZXlzKHBhcmFtczogVE9OTW5lbW9uaWNEZXJpdmVTaWduS2V5c1BhcmFtcyk6IFByb21pc2U8VE9OS2V5UGFpckRhdGE+IHtcbiAgICAgICAgcmV0dXJuIHRoaXMucmVxdWVzdENvcmUoJ2NyeXB0by5tbmVtb25pYy5kZXJpdmUuc2lnbi5rZXlzJywgcGFyYW1zKTtcbiAgICB9XG5cbiAgICAvLyBIREtleXNcblxuICAgIGFzeW5jIGhka2V5WFBydkZyb21NbmVtb25pYyhwYXJhbXM6IFRPTkhES2V5RnJvbU1uZW1vbmljUGFyYW1zKTogUHJvbWlzZTxzdHJpbmc+IHtcbiAgICAgICAgcmV0dXJuIHRoaXMucmVxdWVzdENvcmUoJ2NyeXB0by5oZGtleS54cHJ2LmZyb20ubW5lbW9uaWMnLCBwYXJhbXMpO1xuICAgIH1cblxuICAgIGFzeW5jIGhka2V5WFBydkRlcml2ZShcbiAgICAgICAgc2VyaWFsaXplZDogc3RyaW5nLFxuICAgICAgICBpbmRleDogbnVtYmVyLFxuICAgICAgICBoYXJkZW5lZDogYm9vbGVhbixcbiAgICAgICAgY29tcGxpYW50OiBib29sZWFuLFxuICAgICk6IFByb21pc2U8c3RyaW5nPiB7XG4gICAgICAgIHJldHVybiB0aGlzLnJlcXVlc3RDb3JlKFxuICAgICAgICAgICAgJ2NyeXB0by5oZGtleS54cHJ2LmRlcml2ZScsXG4gICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgc2VyaWFsaXplZCxcbiAgICAgICAgICAgICAgICBpbmRleCxcbiAgICAgICAgICAgICAgICBoYXJkZW5lZCxcbiAgICAgICAgICAgICAgICBjb21wbGlhbnQsXG4gICAgICAgICAgICB9LFxuICAgICAgICApO1xuICAgIH1cblxuICAgIGFzeW5jIGhka2V5WFBydkRlcml2ZVBhdGgoXG4gICAgICAgIHNlcmlhbGl6ZWQ6IHN0cmluZyxcbiAgICAgICAgcGF0aDogc3RyaW5nLFxuICAgICAgICBjb21wbGlhbnQ6IGJvb2xlYW4sXG4gICAgKTogUHJvbWlzZTxzdHJpbmc+IHtcbiAgICAgICAgcmV0dXJuIHRoaXMucmVxdWVzdENvcmUoXG4gICAgICAgICAgICAnY3J5cHRvLmhka2V5LnhwcnYuZGVyaXZlLnBhdGgnLFxuICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgIHNlcmlhbGl6ZWQsXG4gICAgICAgICAgICAgICAgcGF0aCxcbiAgICAgICAgICAgICAgICBjb21wbGlhbnQsXG4gICAgICAgICAgICB9LFxuICAgICAgICApO1xuICAgIH1cblxuICAgIGFzeW5jIGhka2V5WFBydlNlY3JldChzZXJpYWxpemVkOiBzdHJpbmcpOiBQcm9taXNlPHN0cmluZz4ge1xuICAgICAgICByZXR1cm4gdGhpcy5yZXF1ZXN0Q29yZSgnY3J5cHRvLmhka2V5LnhwcnYuc2VjcmV0JywgeyBzZXJpYWxpemVkIH0pO1xuICAgIH1cblxuICAgIGFzeW5jIGhka2V5WFBydlB1YmxpYyhzZXJpYWxpemVkOiBzdHJpbmcpOiBQcm9taXNlPHN0cmluZz4ge1xuICAgICAgICByZXR1cm4gdGhpcy5yZXF1ZXN0Q29yZSgnY3J5cHRvLmhka2V5LnhwcnYucHVibGljJywgeyBzZXJpYWxpemVkIH0pO1xuICAgIH1cblxufVxuXG5UT05DcnlwdG9Nb2R1bGUubW9kdWxlTmFtZSA9ICdUT05DcnlwdG9Nb2R1bGUnO1xuIl19