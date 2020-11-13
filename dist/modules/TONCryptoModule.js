"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = exports.TONMnemonicDictionary = exports.TONOutputEncoding = void 0;

var _regenerator = _interopRequireDefault(require("@babel/runtime/regenerator"));

var _TONClientError = require("../TONClientError");

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

function _createSuper(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct(); return function _createSuperInternal() { var Super = _getPrototypeOf(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = _getPrototypeOf(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return _possibleConstructorReturn(this, result); }; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Date.prototype.toString.call(Reflect.construct(Date, [], function () {})); return true; } catch (e) { return false; } }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

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

  function TONCryptoModule(context) {
    var _this;

    _classCallCheck(this, TONCryptoModule);

    _this = _super.call(this, context);

    _defineProperty(_assertThisInitialized(_this), "cryptoBoxes", void 0);

    _this.cryptoBoxes = new Map();
    return _this;
  }

  _createClass(TONCryptoModule, [{
    key: "getCryptoBox",
    value: function getCryptoBox(params) {
      var key = params.encryptedSeedPhrase.text || params.encryptedSeedPhrase.base64 || params.encryptedSeedPhrase.hex || '';

      if (!key) {
        throw _TONClientError.TONClientError.invalidCryptoBoxParams(params.encryptedSeedPhrase);
      }

      var cryptoBox = this.cryptoBoxes.get(key);

      if (!cryptoBox) {
        cryptoBox = new _cryptoBox.CoreCryptoBox(this, params);
        this.cryptoBoxes.set(key, cryptoBox);
      }

      return Promise.resolve(cryptoBox);
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
    }() // Encryption

  }, {
    key: "chacha20",
    value: function chacha20(params) {
      return this.requestCore('crypto.chacha20', params);
    }
  }]);

  return TONCryptoModule;
}(_TONModule2.TONModule);

exports["default"] = TONCryptoModule;
TONCryptoModule.moduleName = 'TONCryptoModule';
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy9tb2R1bGVzL1RPTkNyeXB0b01vZHVsZS5qcyJdLCJuYW1lcyI6WyJUT05PdXRwdXRFbmNvZGluZyIsIlRleHQiLCJIZXgiLCJIZXhVcHBlcmNhc2UiLCJCYXNlNjQiLCJUT05NbmVtb25pY0RpY3Rpb25hcnkiLCJUT04iLCJFTkdMSVNIIiwiQ0hJTkVTRV9TSU1QTElGSUVEIiwiQ0hJTkVTRV9UUkFESVRJT05BTCIsIkZSRU5DSCIsIklUQUxJQU4iLCJKQVBBTkVTRSIsIktPUkVBTiIsIlNQQU5JU0giLCJmaXhJbnB1dE1lc3NhZ2UiLCJtZXNzYWdlIiwidGV4dCIsImJhc2U2NCIsIkJ1ZmZlciIsImZyb20iLCJ0b1N0cmluZyIsIlRPTkNyeXB0b01vZHVsZSIsImNvbnRleHQiLCJjcnlwdG9Cb3hlcyIsIk1hcCIsInBhcmFtcyIsImtleSIsImVuY3J5cHRlZFNlZWRQaHJhc2UiLCJoZXgiLCJUT05DbGllbnRFcnJvciIsImludmFsaWRDcnlwdG9Cb3hQYXJhbXMiLCJjcnlwdG9Cb3giLCJnZXQiLCJDb3JlQ3J5cHRvQm94Iiwic2V0IiwiUHJvbWlzZSIsInJlc29sdmUiLCJjaGFsbGVuZ2VIZXgiLCJyZXF1ZXN0Q29yZSIsImJhc2VIZXgiLCJleHBvbmVudEhleCIsIm1vZHVsdXNIZXgiLCJiYXNlIiwiZXhwb25lbnQiLCJtb2R1bHVzIiwibGVuZ3RoIiwib3V0cHV0RW5jb2RpbmciLCJmaXhlZCIsIk9iamVjdCIsImFzc2lnbiIsInBhc3N3b3JkIiwic2FsdCIsInNlY3JldEtleSIsInNlcmlhbGl6ZWQiLCJpbmRleCIsImhhcmRlbmVkIiwiY29tcGxpYW50IiwicGF0aCIsIlRPTk1vZHVsZSIsIm1vZHVsZU5hbWUiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7OztBQXlCQTs7QUFFQTs7QUFDQTs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFFTyxJQUFNQSxpQkFBaUIsR0FBRztBQUM3QkMsRUFBQUEsSUFBSSxFQUFFLE1BRHVC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NkJBRVM1QixNLEVBQW1FO0FBQ3hFLGFBQU8sS0FBS2EsV0FBTCxDQUFpQixpQkFBakIsRUFBb0NiLE1BQXBDLENBQVA7QUFDSDs7OztFQW5Qd0NpQyxxQjs7O0FBc1A3Q3JDLGVBQWUsQ0FBQ3NDLFVBQWhCLEdBQTZCLGlCQUE3QiIsInNvdXJjZXNDb250ZW50IjpbIi8qXG4gKiBDb3B5cmlnaHQgMjAxOC0yMDIwIFRPTiBERVYgU09MVVRJT05TIExURC5cbiAqL1xuXG4vLyBAZmxvd1xuLyogZXNsaW50LWRpc2FibGUgY2xhc3MtbWV0aG9kcy11c2UtdGhpcyxwcmVmZXItb2JqZWN0LXNwcmVhZCAqL1xuXG5pbXBvcnQgdHlwZSB7XG4gICAgVE9ORmFjdG9yaXplUmVzdWx0LFxuICAgIFRPTklucHV0TWVzc2FnZSxcbiAgICBUT05LZXlQYWlyRGF0YSxcbiAgICBUT05PdXRwdXRFbmNvZGluZ1R5cGUsXG4gICAgVE9OU2NyeXB0UGFyYW1zLFxuICAgIFRPTk5hY2xCb3hQYXJhbXMsXG4gICAgVE9OTmFjbFNlY3JldEJveFBhcmFtcyxcbiAgICBUT05NbmVtb25pY1dvcmRzUGFyYW1zLFxuICAgIFRPTk1uZW1vbmljRnJvbVJhbmRvbVBhcmFtcyxcbiAgICBUT05NbmVtb25pY0Zyb21FbnRyb3B5UGFyYW1zLFxuICAgIFRPTk1uZW1vbmljSXNWYWxpZFBhcmFtcyxcbiAgICBUT05NbmVtb25pY0Rlcml2ZVNpZ25LZXlzUGFyYW1zLFxuICAgIFRPTkNyeXB0byxcbiAgICBUT05IREtleUZyb21NbmVtb25pY1BhcmFtcyxcbiAgICBUT05DcnlwdG9Cb3hQYXJhbXMsXG4gICAgVE9OQ3J5cHRvQm94LCBUT05DcnlwdG9DaGFDaGEyMFBhcmFtcywgVE9OQ3J5cHRvQ2hhQ2hhMjBSZXN1bHQsXG59IGZyb20gJy4uLy4uL3R5cGVzJztcbmltcG9ydCB7IFRPTkNsaWVudEVycm9yIH0gZnJvbSAnLi4vVE9OQ2xpZW50RXJyb3InO1xuaW1wb3J0IHR5cGUgeyBUT05Nb2R1bGVDb250ZXh0IH0gZnJvbSAnLi4vVE9OTW9kdWxlJztcbmltcG9ydCB7IFRPTk1vZHVsZSB9IGZyb20gJy4uL1RPTk1vZHVsZSc7XG5pbXBvcnQgeyBDb3JlQ3J5cHRvQm94IH0gZnJvbSAnLi9jcnlwdG8tYm94JztcblxuZXhwb3J0IGNvbnN0IFRPTk91dHB1dEVuY29kaW5nID0ge1xuICAgIFRleHQ6ICdUZXh0JyxcbiAgICBIZXg6ICdIZXgnLFxuICAgIEhleFVwcGVyY2FzZTogJ0hleFVwcGVyY2FzZScsXG4gICAgQmFzZTY0OiAnQmFzZTY0Jyxcbn07XG5cblxuZXhwb3J0IGNvbnN0IFRPTk1uZW1vbmljRGljdGlvbmFyeSA9IHtcbiAgICBUT046IDAsXG4gICAgRU5HTElTSDogMSxcbiAgICBDSElORVNFX1NJTVBMSUZJRUQ6IDIsXG4gICAgQ0hJTkVTRV9UUkFESVRJT05BTDogMyxcbiAgICBGUkVOQ0g6IDQsXG4gICAgSVRBTElBTjogNSxcbiAgICBKQVBBTkVTRTogNixcbiAgICBLT1JFQU46IDcsXG4gICAgU1BBTklTSDogOCxcbn07XG5cblxuZnVuY3Rpb24gZml4SW5wdXRNZXNzYWdlKG1lc3NhZ2U6IFRPTklucHV0TWVzc2FnZSk6IFRPTklucHV0TWVzc2FnZSB7XG4gICAgcmV0dXJuIG1lc3NhZ2UudGV4dFxuICAgICAgICA/IHtcbiAgICAgICAgICAgIGJhc2U2NDogQnVmZmVyLmZyb20obWVzc2FnZS50ZXh0LCAndXRmOCcpXG4gICAgICAgICAgICAgICAgLnRvU3RyaW5nKCdiYXNlNjQnKSxcbiAgICAgICAgfVxuICAgICAgICA6IG1lc3NhZ2U7XG59XG5cbmV4cG9ydCBkZWZhdWx0IGNsYXNzIFRPTkNyeXB0b01vZHVsZSBleHRlbmRzIFRPTk1vZHVsZSBpbXBsZW1lbnRzIFRPTkNyeXB0byB7XG4gICAgY3J5cHRvQm94ZXM6IE1hcDxzdHJpbmcsIENvcmVDcnlwdG9Cb3g+O1xuXG4gICAgY29uc3RydWN0b3IoY29udGV4dDogVE9OTW9kdWxlQ29udGV4dCkge1xuICAgICAgICBzdXBlcihjb250ZXh0KTtcbiAgICAgICAgdGhpcy5jcnlwdG9Cb3hlcyA9IG5ldyBNYXAoKTtcbiAgICB9XG5cbiAgICBnZXRDcnlwdG9Cb3gocGFyYW1zOiBUT05DcnlwdG9Cb3hQYXJhbXMpOiBQcm9taXNlPFRPTkNyeXB0b0JveD4ge1xuICAgICAgICBjb25zdCBrZXkgPSBwYXJhbXMuZW5jcnlwdGVkU2VlZFBocmFzZS50ZXh0XG4gICAgICAgICAgICB8fCBwYXJhbXMuZW5jcnlwdGVkU2VlZFBocmFzZS5iYXNlNjRcbiAgICAgICAgICAgIHx8IHBhcmFtcy5lbmNyeXB0ZWRTZWVkUGhyYXNlLmhleFxuICAgICAgICAgICAgfHwgJyc7XG4gICAgICAgIGlmICgha2V5KSB7XG4gICAgICAgICAgICB0aHJvdyBUT05DbGllbnRFcnJvci5pbnZhbGlkQ3J5cHRvQm94UGFyYW1zKHBhcmFtcy5lbmNyeXB0ZWRTZWVkUGhyYXNlKTtcbiAgICAgICAgfVxuICAgICAgICBsZXQgY3J5cHRvQm94ID0gdGhpcy5jcnlwdG9Cb3hlcy5nZXQoa2V5KTtcbiAgICAgICAgaWYgKCFjcnlwdG9Cb3gpIHtcbiAgICAgICAgICAgIGNyeXB0b0JveCA9IG5ldyBDb3JlQ3J5cHRvQm94KHRoaXMsIHBhcmFtcyk7XG4gICAgICAgICAgICB0aGlzLmNyeXB0b0JveGVzLnNldChrZXksIGNyeXB0b0JveCk7XG4gICAgICAgIH1cbiAgICAgICAgcmV0dXJuIFByb21pc2UucmVzb2x2ZShjcnlwdG9Cb3gpO1xuICAgIH1cblxuICAgIGFzeW5jIGZhY3Rvcml6ZShjaGFsbGVuZ2VIZXg6IHN0cmluZyk6IFByb21pc2U8VE9ORmFjdG9yaXplUmVzdWx0PiB7XG4gICAgICAgIHJldHVybiB0aGlzLnJlcXVlc3RDb3JlKCdjcnlwdG8ubWF0aC5mYWN0b3JpemUnLCBjaGFsbGVuZ2VIZXgpO1xuICAgIH1cblxuICAgIGFzeW5jIG1vZHVsYXJQb3dlcihcbiAgICAgICAgYmFzZUhleDogc3RyaW5nLFxuICAgICAgICBleHBvbmVudEhleDogc3RyaW5nLFxuICAgICAgICBtb2R1bHVzSGV4OiBzdHJpbmcsXG4gICAgKTogUHJvbWlzZTxzdHJpbmc+IHtcbiAgICAgICAgcmV0dXJuIHRoaXMucmVxdWVzdENvcmUoJ2NyeXB0by5tYXRoLm1vZHVsYXJQb3dlcicsIHtcbiAgICAgICAgICAgIGJhc2U6IGJhc2VIZXgsXG4gICAgICAgICAgICBleHBvbmVudDogZXhwb25lbnRIZXgsXG4gICAgICAgICAgICBtb2R1bHVzOiBtb2R1bHVzSGV4LFxuICAgICAgICB9KTtcbiAgICB9XG5cbiAgICBhc3luYyByYW5kb21HZW5lcmF0ZUJ5dGVzKFxuICAgICAgICBsZW5ndGg6IG51bWJlcixcbiAgICAgICAgb3V0cHV0RW5jb2Rpbmc6IFRPTk91dHB1dEVuY29kaW5nVHlwZSA9IFRPTk91dHB1dEVuY29kaW5nLkhleCxcbiAgICApOiBQcm9taXNlPHN0cmluZz4ge1xuICAgICAgICByZXR1cm4gdGhpcy5yZXF1ZXN0Q29yZSgnY3J5cHRvLnJhbmRvbS5nZW5lcmF0ZUJ5dGVzJywge1xuICAgICAgICAgICAgbGVuZ3RoLFxuICAgICAgICAgICAgb3V0cHV0RW5jb2RpbmcsXG4gICAgICAgIH0pO1xuICAgIH1cblxuXG4gICAgYXN5bmMgZWQyNTUxOUtleXBhaXIoKTogUHJvbWlzZTxUT05LZXlQYWlyRGF0YT4ge1xuICAgICAgICByZXR1cm4gdGhpcy5yZXF1ZXN0Q29yZSgnY3J5cHRvLmVkMjU1MTkua2V5cGFpcicpO1xuICAgIH1cblxuICAgIGFzeW5jIHB1YmxpY0tleVRvU3RyaW5nKGtleTogc3RyaW5nKTogUHJvbWlzZTxzdHJpbmc+IHtcbiAgICAgICAgcmV0dXJuIHRoaXMucmVxdWVzdENvcmUoJ2NyeXB0by50b25fcHVibGljX2tleV9zdHJpbmcnLCBrZXkpO1xuICAgIH1cblxuICAgIGFzeW5jIHNoYTUxMihcbiAgICAgICAgbWVzc2FnZTogVE9OSW5wdXRNZXNzYWdlLFxuICAgICAgICBvdXRwdXRFbmNvZGluZzogVE9OT3V0cHV0RW5jb2RpbmdUeXBlID0gVE9OT3V0cHV0RW5jb2RpbmcuSGV4LFxuICAgICk6IFByb21pc2U8c3RyaW5nPiB7XG4gICAgICAgIHJldHVybiB0aGlzLnJlcXVlc3RDb3JlKFxuICAgICAgICAgICAgJ2NyeXB0by5zaGE1MTInLFxuICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgIG1lc3NhZ2U6IGZpeElucHV0TWVzc2FnZShtZXNzYWdlKSxcbiAgICAgICAgICAgICAgICBvdXRwdXRFbmNvZGluZyxcbiAgICAgICAgICAgIH0sXG4gICAgICAgICk7XG4gICAgfVxuXG4gICAgYXN5bmMgc2hhMjU2KFxuICAgICAgICBtZXNzYWdlOiBUT05JbnB1dE1lc3NhZ2UsXG4gICAgICAgIG91dHB1dEVuY29kaW5nOiBUT05PdXRwdXRFbmNvZGluZ1R5cGUgPSBUT05PdXRwdXRFbmNvZGluZy5IZXgsXG4gICAgKTogUHJvbWlzZTxzdHJpbmc+IHtcbiAgICAgICAgcmV0dXJuIHRoaXMucmVxdWVzdENvcmUoXG4gICAgICAgICAgICAnY3J5cHRvLnNoYTI1NicsXG4gICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgbWVzc2FnZTogZml4SW5wdXRNZXNzYWdlKG1lc3NhZ2UpLFxuICAgICAgICAgICAgICAgIG91dHB1dEVuY29kaW5nLFxuICAgICAgICAgICAgfSxcbiAgICAgICAgKTtcbiAgICB9XG5cbiAgICBhc3luYyBzY3J5cHQocGFyYW1zOiBUT05TY3J5cHRQYXJhbXMpOiBQcm9taXNlPHN0cmluZz4ge1xuICAgICAgICBjb25zdCBmaXhlZDogVE9OU2NyeXB0UGFyYW1zID0gKE9iamVjdC5hc3NpZ24oe30sIHBhcmFtcyk6IGFueSk7XG4gICAgICAgIGZpeGVkLnBhc3N3b3JkID0gZml4SW5wdXRNZXNzYWdlKHBhcmFtcy5wYXNzd29yZCk7XG4gICAgICAgIGZpeGVkLnNhbHQgPSBmaXhJbnB1dE1lc3NhZ2UocGFyYW1zLnNhbHQpO1xuICAgICAgICByZXR1cm4gdGhpcy5yZXF1ZXN0Q29yZSgnY3J5cHRvLnNjcnlwdCcsIGZpeGVkKTtcbiAgICB9XG5cbiAgICBhc3luYyBuYWNsQm94S2V5cGFpcigpOiBQcm9taXNlPFRPTktleVBhaXJEYXRhPiB7XG4gICAgICAgIHJldHVybiB0aGlzLnJlcXVlc3RDb3JlKCdjcnlwdG8ubmFjbC5ib3gua2V5cGFpcicpO1xuICAgIH1cblxuICAgIGFzeW5jIG5hY2xCb3hLZXlwYWlyRnJvbVNlY3JldEtleShzZWNyZXRLZXk6IHN0cmluZyk6IFByb21pc2U8VE9OS2V5UGFpckRhdGE+IHtcbiAgICAgICAgcmV0dXJuIHRoaXMucmVxdWVzdENvcmUoJ2NyeXB0by5uYWNsLmJveC5rZXlwYWlyLmZyb21TZWNyZXRLZXknLCBzZWNyZXRLZXkpO1xuICAgIH1cblxuICAgIGFzeW5jIG5hY2xTaWduS2V5cGFpcigpOiBQcm9taXNlPFRPTktleVBhaXJEYXRhPiB7XG4gICAgICAgIHJldHVybiB0aGlzLnJlcXVlc3RDb3JlKCdjcnlwdG8ubmFjbC5zaWduLmtleXBhaXInKTtcbiAgICB9XG5cbiAgICBhc3luYyBuYWNsU2lnbktleXBhaXJGcm9tU2VjcmV0S2V5KHNlY3JldEtleTogc3RyaW5nKTogUHJvbWlzZTxUT05LZXlQYWlyRGF0YT4ge1xuICAgICAgICByZXR1cm4gdGhpcy5yZXF1ZXN0Q29yZSgnY3J5cHRvLm5hY2wuc2lnbi5rZXlwYWlyLmZyb21TZWNyZXRLZXknLCBzZWNyZXRLZXkpO1xuICAgIH1cblxuICAgIGFzeW5jIG5hY2xCb3gocGFyYW1zOiBUT05OYWNsQm94UGFyYW1zKTogUHJvbWlzZTxzdHJpbmc+IHtcbiAgICAgICAgY29uc3QgZml4ZWQ6IFRPTk5hY2xCb3hQYXJhbXMgPSAoT2JqZWN0LmFzc2lnbih7fSwgcGFyYW1zKTogYW55KTtcbiAgICAgICAgZml4ZWQubWVzc2FnZSA9IGZpeElucHV0TWVzc2FnZShwYXJhbXMubWVzc2FnZSk7XG4gICAgICAgIHJldHVybiB0aGlzLnJlcXVlc3RDb3JlKCdjcnlwdG8ubmFjbC5ib3gnLCBmaXhlZCk7XG4gICAgfVxuXG4gICAgYXN5bmMgbmFjbEJveE9wZW4ocGFyYW1zOiBUT05OYWNsQm94UGFyYW1zKTogUHJvbWlzZTxzdHJpbmc+IHtcbiAgICAgICAgY29uc3QgZml4ZWQ6IFRPTk5hY2xCb3hQYXJhbXMgPSAoT2JqZWN0LmFzc2lnbih7fSwgcGFyYW1zKTogYW55KTtcbiAgICAgICAgZml4ZWQubWVzc2FnZSA9IGZpeElucHV0TWVzc2FnZShwYXJhbXMubWVzc2FnZSk7XG4gICAgICAgIHJldHVybiB0aGlzLnJlcXVlc3RDb3JlKCdjcnlwdG8ubmFjbC5ib3gub3BlbicsIGZpeGVkKTtcbiAgICB9XG5cbiAgICBhc3luYyBuYWNsU2VjcmV0Qm94KHBhcmFtczogVE9OTmFjbFNlY3JldEJveFBhcmFtcyk6IFByb21pc2U8c3RyaW5nPiB7XG4gICAgICAgIGNvbnN0IGZpeGVkOiBUT05OYWNsQm94UGFyYW1zID0gKE9iamVjdC5hc3NpZ24oe30sIHBhcmFtcyk6IGFueSk7XG4gICAgICAgIGZpeGVkLm1lc3NhZ2UgPSBmaXhJbnB1dE1lc3NhZ2UocGFyYW1zLm1lc3NhZ2UpO1xuICAgICAgICByZXR1cm4gdGhpcy5yZXF1ZXN0Q29yZSgnY3J5cHRvLm5hY2wuc2VjcmV0LmJveCcsIGZpeGVkKTtcbiAgICB9XG5cbiAgICBhc3luYyBuYWNsU2VjcmV0Qm94T3BlbihwYXJhbXM6IFRPTk5hY2xTZWNyZXRCb3hQYXJhbXMpOiBQcm9taXNlPHN0cmluZz4ge1xuICAgICAgICBjb25zdCBmaXhlZDogVE9OTmFjbEJveFBhcmFtcyA9IChPYmplY3QuYXNzaWduKHt9LCBwYXJhbXMpOiBhbnkpO1xuICAgICAgICBmaXhlZC5tZXNzYWdlID0gZml4SW5wdXRNZXNzYWdlKHBhcmFtcy5tZXNzYWdlKTtcbiAgICAgICAgcmV0dXJuIHRoaXMucmVxdWVzdENvcmUoJ2NyeXB0by5uYWNsLnNlY3JldC5ib3gub3BlbicsIGZpeGVkKTtcbiAgICB9XG5cbiAgICBhc3luYyBuYWNsU2lnbihcbiAgICAgICAgbWVzc2FnZTogVE9OSW5wdXRNZXNzYWdlLFxuICAgICAgICBrZXk6IHN0cmluZyxcbiAgICAgICAgb3V0cHV0RW5jb2Rpbmc6IFRPTk91dHB1dEVuY29kaW5nVHlwZSA9IFRPTk91dHB1dEVuY29kaW5nLkhleCxcbiAgICApOiBQcm9taXNlPHN0cmluZz4ge1xuICAgICAgICByZXR1cm4gdGhpcy5yZXF1ZXN0Q29yZSgnY3J5cHRvLm5hY2wuc2lnbicsIHtcbiAgICAgICAgICAgIG1lc3NhZ2U6IGZpeElucHV0TWVzc2FnZShtZXNzYWdlKSxcbiAgICAgICAgICAgIGtleSxcbiAgICAgICAgICAgIG91dHB1dEVuY29kaW5nLFxuICAgICAgICB9KTtcbiAgICB9XG5cbiAgICBhc3luYyBuYWNsU2lnbk9wZW4oXG4gICAgICAgIG1lc3NhZ2U6IFRPTklucHV0TWVzc2FnZSxcbiAgICAgICAga2V5OiBzdHJpbmcsXG4gICAgICAgIG91dHB1dEVuY29kaW5nOiBUT05PdXRwdXRFbmNvZGluZ1R5cGUgPSBUT05PdXRwdXRFbmNvZGluZy5IZXgsXG4gICAgKTogUHJvbWlzZTxzdHJpbmc+IHtcbiAgICAgICAgcmV0dXJuIHRoaXMucmVxdWVzdENvcmUoJ2NyeXB0by5uYWNsLnNpZ24ub3BlbicsIHtcbiAgICAgICAgICAgIG1lc3NhZ2U6IGZpeElucHV0TWVzc2FnZShtZXNzYWdlKSxcbiAgICAgICAgICAgIGtleSxcbiAgICAgICAgICAgIG91dHB1dEVuY29kaW5nLFxuICAgICAgICB9KTtcbiAgICB9XG5cbiAgICBhc3luYyBuYWNsU2lnbkRldGFjaGVkKFxuICAgICAgICBtZXNzYWdlOiBUT05JbnB1dE1lc3NhZ2UsXG4gICAgICAgIGtleTogc3RyaW5nLFxuICAgICAgICBvdXRwdXRFbmNvZGluZzogVE9OT3V0cHV0RW5jb2RpbmdUeXBlID0gVE9OT3V0cHV0RW5jb2RpbmcuSGV4LFxuICAgICk6IFByb21pc2U8c3RyaW5nPiB7XG4gICAgICAgIHJldHVybiB0aGlzLnJlcXVlc3RDb3JlKCdjcnlwdG8ubmFjbC5zaWduLmRldGFjaGVkJywge1xuICAgICAgICAgICAgbWVzc2FnZTogZml4SW5wdXRNZXNzYWdlKG1lc3NhZ2UpLFxuICAgICAgICAgICAga2V5LFxuICAgICAgICAgICAgb3V0cHV0RW5jb2RpbmcsXG4gICAgICAgIH0pO1xuICAgIH1cblxuICAgIC8vIE1uZW1vbmljXG5cbiAgICBhc3luYyBtbmVtb25pY1dvcmRzKHBhcmFtcz86IFRPTk1uZW1vbmljV29yZHNQYXJhbXMpOiBQcm9taXNlPHN0cmluZz4ge1xuICAgICAgICByZXR1cm4gdGhpcy5yZXF1ZXN0Q29yZSgnY3J5cHRvLm1uZW1vbmljLndvcmRzJywgcGFyYW1zIHx8IHt9KTtcbiAgICB9XG5cbiAgICBhc3luYyBtbmVtb25pY0Zyb21SYW5kb20ocGFyYW1zPzogVE9OTW5lbW9uaWNGcm9tUmFuZG9tUGFyYW1zKTogUHJvbWlzZTxzdHJpbmc+IHtcbiAgICAgICAgcmV0dXJuIHRoaXMucmVxdWVzdENvcmUoJ2NyeXB0by5tbmVtb25pYy5mcm9tLnJhbmRvbScsIHBhcmFtcyB8fCB7fSk7XG4gICAgfVxuXG4gICAgYXN5bmMgbW5lbW9uaWNGcm9tRW50cm9weShwYXJhbXM6IFRPTk1uZW1vbmljRnJvbUVudHJvcHlQYXJhbXMpOiBQcm9taXNlPHN0cmluZz4ge1xuICAgICAgICByZXR1cm4gdGhpcy5yZXF1ZXN0Q29yZShcbiAgICAgICAgICAgICdjcnlwdG8ubW5lbW9uaWMuZnJvbS5lbnRyb3B5JyxcbiAgICAgICAgICAgIHBhcmFtcyxcbiAgICAgICAgKTtcbiAgICB9XG5cbiAgICBhc3luYyBtbmVtb25pY0lzVmFsaWQocGFyYW1zOiBUT05NbmVtb25pY0lzVmFsaWRQYXJhbXMpOiBQcm9taXNlPGJvb2xlYW4+IHtcbiAgICAgICAgcmV0dXJuIHRoaXMucmVxdWVzdENvcmUoJ2NyeXB0by5tbmVtb25pYy52ZXJpZnknLCBwYXJhbXMpO1xuICAgIH1cblxuICAgIGFzeW5jIG1uZW1vbmljRGVyaXZlU2lnbktleXMocGFyYW1zOiBUT05NbmVtb25pY0Rlcml2ZVNpZ25LZXlzUGFyYW1zKTogUHJvbWlzZTxUT05LZXlQYWlyRGF0YT4ge1xuICAgICAgICByZXR1cm4gdGhpcy5yZXF1ZXN0Q29yZSgnY3J5cHRvLm1uZW1vbmljLmRlcml2ZS5zaWduLmtleXMnLCBwYXJhbXMpO1xuICAgIH1cblxuICAgIC8vIEhES2V5c1xuXG4gICAgYXN5bmMgaGRrZXlYUHJ2RnJvbU1uZW1vbmljKHBhcmFtczogVE9OSERLZXlGcm9tTW5lbW9uaWNQYXJhbXMpOiBQcm9taXNlPHN0cmluZz4ge1xuICAgICAgICByZXR1cm4gdGhpcy5yZXF1ZXN0Q29yZSgnY3J5cHRvLmhka2V5LnhwcnYuZnJvbS5tbmVtb25pYycsIHBhcmFtcyk7XG4gICAgfVxuXG4gICAgYXN5bmMgaGRrZXlYUHJ2RGVyaXZlKFxuICAgICAgICBzZXJpYWxpemVkOiBzdHJpbmcsXG4gICAgICAgIGluZGV4OiBudW1iZXIsXG4gICAgICAgIGhhcmRlbmVkOiBib29sZWFuLFxuICAgICAgICBjb21wbGlhbnQ6IGJvb2xlYW4sXG4gICAgKTogUHJvbWlzZTxzdHJpbmc+IHtcbiAgICAgICAgcmV0dXJuIHRoaXMucmVxdWVzdENvcmUoXG4gICAgICAgICAgICAnY3J5cHRvLmhka2V5LnhwcnYuZGVyaXZlJyxcbiAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICBzZXJpYWxpemVkLFxuICAgICAgICAgICAgICAgIGluZGV4LFxuICAgICAgICAgICAgICAgIGhhcmRlbmVkLFxuICAgICAgICAgICAgICAgIGNvbXBsaWFudCxcbiAgICAgICAgICAgIH0sXG4gICAgICAgICk7XG4gICAgfVxuXG4gICAgYXN5bmMgaGRrZXlYUHJ2RGVyaXZlUGF0aChcbiAgICAgICAgc2VyaWFsaXplZDogc3RyaW5nLFxuICAgICAgICBwYXRoOiBzdHJpbmcsXG4gICAgICAgIGNvbXBsaWFudDogYm9vbGVhbixcbiAgICApOiBQcm9taXNlPHN0cmluZz4ge1xuICAgICAgICByZXR1cm4gdGhpcy5yZXF1ZXN0Q29yZShcbiAgICAgICAgICAgICdjcnlwdG8uaGRrZXkueHBydi5kZXJpdmUucGF0aCcsXG4gICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgc2VyaWFsaXplZCxcbiAgICAgICAgICAgICAgICBwYXRoLFxuICAgICAgICAgICAgICAgIGNvbXBsaWFudCxcbiAgICAgICAgICAgIH0sXG4gICAgICAgICk7XG4gICAgfVxuXG4gICAgYXN5bmMgaGRrZXlYUHJ2U2VjcmV0KHNlcmlhbGl6ZWQ6IHN0cmluZyk6IFByb21pc2U8c3RyaW5nPiB7XG4gICAgICAgIHJldHVybiB0aGlzLnJlcXVlc3RDb3JlKCdjcnlwdG8uaGRrZXkueHBydi5zZWNyZXQnLCB7IHNlcmlhbGl6ZWQgfSk7XG4gICAgfVxuXG4gICAgYXN5bmMgaGRrZXlYUHJ2UHVibGljKHNlcmlhbGl6ZWQ6IHN0cmluZyk6IFByb21pc2U8c3RyaW5nPiB7XG4gICAgICAgIHJldHVybiB0aGlzLnJlcXVlc3RDb3JlKCdjcnlwdG8uaGRrZXkueHBydi5wdWJsaWMnLCB7IHNlcmlhbGl6ZWQgfSk7XG4gICAgfVxuXG4gICAgLy8gRW5jcnlwdGlvblxuXG4gICAgY2hhY2hhMjAocGFyYW1zOiBUT05DcnlwdG9DaGFDaGEyMFBhcmFtcyk6IFByb21pc2U8VE9OQ3J5cHRvQ2hhQ2hhMjBSZXN1bHQ+IHtcbiAgICAgICAgcmV0dXJuIHRoaXMucmVxdWVzdENvcmUoJ2NyeXB0by5jaGFjaGEyMCcsIHBhcmFtcyk7XG4gICAgfVxufVxuXG5UT05DcnlwdG9Nb2R1bGUubW9kdWxlTmFtZSA9ICdUT05DcnlwdG9Nb2R1bGUnO1xuIl19