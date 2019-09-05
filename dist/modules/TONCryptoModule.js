"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = exports.TONOutputEncoding = void 0;

var _regenerator = _interopRequireDefault(require("@babel/runtime/regenerator"));

var _asyncToGenerator2 = _interopRequireDefault(require("@babel/runtime/helpers/asyncToGenerator"));

var _classCallCheck2 = _interopRequireDefault(require("@babel/runtime/helpers/classCallCheck"));

var _createClass2 = _interopRequireDefault(require("@babel/runtime/helpers/createClass"));

var _possibleConstructorReturn2 = _interopRequireDefault(require("@babel/runtime/helpers/possibleConstructorReturn"));

var _getPrototypeOf2 = _interopRequireDefault(require("@babel/runtime/helpers/getPrototypeOf"));

var _inherits2 = _interopRequireDefault(require("@babel/runtime/helpers/inherits"));

var _TONModule2 = require("../TONModule");

/* eslint-disable class-methods-use-this */
var TONOutputEncoding = {
  Text: 'Text',
  Hex: 'Hex',
  HexUppercase: 'HexUppercase',
  Base64: 'Base64'
};
exports.TONOutputEncoding = TONOutputEncoding;

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
    key: "sha512",
    value: function () {
      var _sha = (0, _asyncToGenerator2["default"])(
      /*#__PURE__*/
      _regenerator["default"].mark(function _callee5(message) {
        var outputEncoding,
            _args5 = arguments;
        return _regenerator["default"].wrap(function _callee5$(_context5) {
          while (1) {
            switch (_context5.prev = _context5.next) {
              case 0:
                outputEncoding = _args5.length > 1 && _args5[1] !== undefined ? _args5[1] : TONOutputEncoding.Hex;
                return _context5.abrupt("return", this.requestLibrary('crypto.sha512', {
                  message: message,
                  outputEncoding: outputEncoding
                }));

              case 2:
              case "end":
                return _context5.stop();
            }
          }
        }, _callee5, this);
      }));

      function sha512(_x6) {
        return _sha.apply(this, arguments);
      }

      return sha512;
    }()
  }, {
    key: "sha256",
    value: function () {
      var _sha2 = (0, _asyncToGenerator2["default"])(
      /*#__PURE__*/
      _regenerator["default"].mark(function _callee6(message) {
        var outputEncoding,
            _args6 = arguments;
        return _regenerator["default"].wrap(function _callee6$(_context6) {
          while (1) {
            switch (_context6.prev = _context6.next) {
              case 0:
                outputEncoding = _args6.length > 1 && _args6[1] !== undefined ? _args6[1] : TONOutputEncoding.Hex;
                return _context6.abrupt("return", this.requestLibrary('crypto.sha256', {
                  message: message,
                  outputEncoding: outputEncoding
                }));

              case 2:
              case "end":
                return _context6.stop();
            }
          }
        }, _callee6, this);
      }));

      function sha256(_x7) {
        return _sha2.apply(this, arguments);
      }

      return sha256;
    }()
  }, {
    key: "scrypt",
    value: function () {
      var _scrypt = (0, _asyncToGenerator2["default"])(
      /*#__PURE__*/
      _regenerator["default"].mark(function _callee7(params) {
        return _regenerator["default"].wrap(function _callee7$(_context7) {
          while (1) {
            switch (_context7.prev = _context7.next) {
              case 0:
                return _context7.abrupt("return", this.requestLibrary('crypto.scrypt', params));

              case 1:
              case "end":
                return _context7.stop();
            }
          }
        }, _callee7, this);
      }));

      function scrypt(_x8) {
        return _scrypt.apply(this, arguments);
      }

      return scrypt;
    }()
  }, {
    key: "naclBoxKeypair",
    value: function () {
      var _naclBoxKeypair = (0, _asyncToGenerator2["default"])(
      /*#__PURE__*/
      _regenerator["default"].mark(function _callee8() {
        return _regenerator["default"].wrap(function _callee8$(_context8) {
          while (1) {
            switch (_context8.prev = _context8.next) {
              case 0:
                return _context8.abrupt("return", this.requestLibrary('crypto.nacl.box.keypair'));

              case 1:
              case "end":
                return _context8.stop();
            }
          }
        }, _callee8, this);
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
      _regenerator["default"].mark(function _callee9(secretKey) {
        return _regenerator["default"].wrap(function _callee9$(_context9) {
          while (1) {
            switch (_context9.prev = _context9.next) {
              case 0:
                return _context9.abrupt("return", this.requestLibrary('crypto.nacl.box.keypair.fromSecretKey', secretKey));

              case 1:
              case "end":
                return _context9.stop();
            }
          }
        }, _callee9, this);
      }));

      function naclBoxKeypairFromSecretKey(_x9) {
        return _naclBoxKeypairFromSecretKey.apply(this, arguments);
      }

      return naclBoxKeypairFromSecretKey;
    }()
  }, {
    key: "naclSignKeypair",
    value: function () {
      var _naclSignKeypair = (0, _asyncToGenerator2["default"])(
      /*#__PURE__*/
      _regenerator["default"].mark(function _callee10() {
        return _regenerator["default"].wrap(function _callee10$(_context10) {
          while (1) {
            switch (_context10.prev = _context10.next) {
              case 0:
                return _context10.abrupt("return", this.requestLibrary('crypto.nacl.sign.keypair'));

              case 1:
              case "end":
                return _context10.stop();
            }
          }
        }, _callee10, this);
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
      _regenerator["default"].mark(function _callee11(secretKey) {
        return _regenerator["default"].wrap(function _callee11$(_context11) {
          while (1) {
            switch (_context11.prev = _context11.next) {
              case 0:
                return _context11.abrupt("return", this.requestLibrary('crypto.nacl.sign.keypair.fromSecretKey', secretKey));

              case 1:
              case "end":
                return _context11.stop();
            }
          }
        }, _callee11, this);
      }));

      function naclSignKeypairFromSecretKey(_x10) {
        return _naclSignKeypairFromSecretKey.apply(this, arguments);
      }

      return naclSignKeypairFromSecretKey;
    }()
  }, {
    key: "naclBox",
    value: function () {
      var _naclBox = (0, _asyncToGenerator2["default"])(
      /*#__PURE__*/
      _regenerator["default"].mark(function _callee12(params) {
        return _regenerator["default"].wrap(function _callee12$(_context12) {
          while (1) {
            switch (_context12.prev = _context12.next) {
              case 0:
                return _context12.abrupt("return", this.requestLibrary('crypto.nacl.box', params));

              case 1:
              case "end":
                return _context12.stop();
            }
          }
        }, _callee12, this);
      }));

      function naclBox(_x11) {
        return _naclBox.apply(this, arguments);
      }

      return naclBox;
    }()
  }, {
    key: "naclBoxOpen",
    value: function () {
      var _naclBoxOpen = (0, _asyncToGenerator2["default"])(
      /*#__PURE__*/
      _regenerator["default"].mark(function _callee13(params) {
        return _regenerator["default"].wrap(function _callee13$(_context13) {
          while (1) {
            switch (_context13.prev = _context13.next) {
              case 0:
                return _context13.abrupt("return", this.requestLibrary('crypto.nacl.box.open', params));

              case 1:
              case "end":
                return _context13.stop();
            }
          }
        }, _callee13, this);
      }));

      function naclBoxOpen(_x12) {
        return _naclBoxOpen.apply(this, arguments);
      }

      return naclBoxOpen;
    }()
  }, {
    key: "naclSecretBox",
    value: function () {
      var _naclSecretBox = (0, _asyncToGenerator2["default"])(
      /*#__PURE__*/
      _regenerator["default"].mark(function _callee14(params) {
        return _regenerator["default"].wrap(function _callee14$(_context14) {
          while (1) {
            switch (_context14.prev = _context14.next) {
              case 0:
                return _context14.abrupt("return", this.requestLibrary('crypto.nacl.secret.box', params));

              case 1:
              case "end":
                return _context14.stop();
            }
          }
        }, _callee14, this);
      }));

      function naclSecretBox(_x13) {
        return _naclSecretBox.apply(this, arguments);
      }

      return naclSecretBox;
    }()
  }, {
    key: "naclSecretBoxOpen",
    value: function () {
      var _naclSecretBoxOpen = (0, _asyncToGenerator2["default"])(
      /*#__PURE__*/
      _regenerator["default"].mark(function _callee15(params) {
        return _regenerator["default"].wrap(function _callee15$(_context15) {
          while (1) {
            switch (_context15.prev = _context15.next) {
              case 0:
                return _context15.abrupt("return", this.requestLibrary('crypto.nacl.secret.box.open', params));

              case 1:
              case "end":
                return _context15.stop();
            }
          }
        }, _callee15, this);
      }));

      function naclSecretBoxOpen(_x14) {
        return _naclSecretBoxOpen.apply(this, arguments);
      }

      return naclSecretBoxOpen;
    }()
  }, {
    key: "naclSign",
    value: function () {
      var _naclSign = (0, _asyncToGenerator2["default"])(
      /*#__PURE__*/
      _regenerator["default"].mark(function _callee16(message, key) {
        var outputEncoding,
            _args16 = arguments;
        return _regenerator["default"].wrap(function _callee16$(_context16) {
          while (1) {
            switch (_context16.prev = _context16.next) {
              case 0:
                outputEncoding = _args16.length > 2 && _args16[2] !== undefined ? _args16[2] : TONOutputEncoding.Hex;
                return _context16.abrupt("return", this.requestLibrary('crypto.nacl.sign', {
                  message: message,
                  key: key,
                  outputEncoding: outputEncoding
                }));

              case 2:
              case "end":
                return _context16.stop();
            }
          }
        }, _callee16, this);
      }));

      function naclSign(_x15, _x16) {
        return _naclSign.apply(this, arguments);
      }

      return naclSign;
    }()
  }, {
    key: "naclSignOpen",
    value: function () {
      var _naclSignOpen = (0, _asyncToGenerator2["default"])(
      /*#__PURE__*/
      _regenerator["default"].mark(function _callee17(message, key) {
        var outputEncoding,
            _args17 = arguments;
        return _regenerator["default"].wrap(function _callee17$(_context17) {
          while (1) {
            switch (_context17.prev = _context17.next) {
              case 0:
                outputEncoding = _args17.length > 2 && _args17[2] !== undefined ? _args17[2] : TONOutputEncoding.Hex;
                return _context17.abrupt("return", this.requestLibrary('crypto.nacl.sign.open', {
                  message: message,
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

      function naclSignOpen(_x17, _x18) {
        return _naclSignOpen.apply(this, arguments);
      }

      return naclSignOpen;
    }()
  }, {
    key: "naclSignDetached",
    value: function () {
      var _naclSignDetached = (0, _asyncToGenerator2["default"])(
      /*#__PURE__*/
      _regenerator["default"].mark(function _callee18(message, key) {
        var outputEncoding,
            _args18 = arguments;
        return _regenerator["default"].wrap(function _callee18$(_context18) {
          while (1) {
            switch (_context18.prev = _context18.next) {
              case 0:
                outputEncoding = _args18.length > 2 && _args18[2] !== undefined ? _args18[2] : TONOutputEncoding.Hex;
                return _context18.abrupt("return", this.requestLibrary('crypto.nacl.sign.detached', {
                  message: message,
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

      function naclSignDetached(_x19, _x20) {
        return _naclSignDetached.apply(this, arguments);
      }

      return naclSignDetached;
    }() // Mnemonic

  }, {
    key: "mnemonicWords",
    value: function () {
      var _mnemonicWords = (0, _asyncToGenerator2["default"])(
      /*#__PURE__*/
      _regenerator["default"].mark(function _callee19() {
        return _regenerator["default"].wrap(function _callee19$(_context19) {
          while (1) {
            switch (_context19.prev = _context19.next) {
              case 0:
                return _context19.abrupt("return", this.requestLibrary('crypto.mnemonic.words'));

              case 1:
              case "end":
                return _context19.stop();
            }
          }
        }, _callee19, this);
      }));

      function mnemonicWords() {
        return _mnemonicWords.apply(this, arguments);
      }

      return mnemonicWords;
    }()
  }, {
    key: "mnemonicFromRandom",
    value: function () {
      var _mnemonicFromRandom = (0, _asyncToGenerator2["default"])(
      /*#__PURE__*/
      _regenerator["default"].mark(function _callee20() {
        return _regenerator["default"].wrap(function _callee20$(_context20) {
          while (1) {
            switch (_context20.prev = _context20.next) {
              case 0:
                return _context20.abrupt("return", this.requestLibrary('crypto.mnemonic.from.random'));

              case 1:
              case "end":
                return _context20.stop();
            }
          }
        }, _callee20, this);
      }));

      function mnemonicFromRandom() {
        return _mnemonicFromRandom.apply(this, arguments);
      }

      return mnemonicFromRandom;
    }()
  }, {
    key: "mnemonicFromEntropy",
    value: function () {
      var _mnemonicFromEntropy = (0, _asyncToGenerator2["default"])(
      /*#__PURE__*/
      _regenerator["default"].mark(function _callee21(entropyHex) {
        return _regenerator["default"].wrap(function _callee21$(_context21) {
          while (1) {
            switch (_context21.prev = _context21.next) {
              case 0:
                return _context21.abrupt("return", this.requestLibrary('crypto.mnemonic.from.entropy', {
                  entropy: {
                    hex: entropyHex
                  }
                }));

              case 1:
              case "end":
                return _context21.stop();
            }
          }
        }, _callee21, this);
      }));

      function mnemonicFromEntropy(_x21) {
        return _mnemonicFromEntropy.apply(this, arguments);
      }

      return mnemonicFromEntropy;
    }()
  }, {
    key: "mnemonicIsValid",
    value: function () {
      var _mnemonicIsValid = (0, _asyncToGenerator2["default"])(
      /*#__PURE__*/
      _regenerator["default"].mark(function _callee22(phrase) {
        return _regenerator["default"].wrap(function _callee22$(_context22) {
          while (1) {
            switch (_context22.prev = _context22.next) {
              case 0:
                return _context22.abrupt("return", this.requestLibrary('crypto.mnemonic.verify', {
                  phrase: phrase
                }));

              case 1:
              case "end":
                return _context22.stop();
            }
          }
        }, _callee22, this);
      }));

      function mnemonicIsValid(_x22) {
        return _mnemonicIsValid.apply(this, arguments);
      }

      return mnemonicIsValid;
    }() // HDKeys

  }, {
    key: "hdkeyXPrvFromMnemonic",
    value: function () {
      var _hdkeyXPrvFromMnemonic = (0, _asyncToGenerator2["default"])(
      /*#__PURE__*/
      _regenerator["default"].mark(function _callee23(phrase) {
        return _regenerator["default"].wrap(function _callee23$(_context23) {
          while (1) {
            switch (_context23.prev = _context23.next) {
              case 0:
                return _context23.abrupt("return", this.requestLibrary('crypto.hdkey.xprv.from.mnemonic', {
                  phrase: phrase
                }));

              case 1:
              case "end":
                return _context23.stop();
            }
          }
        }, _callee23, this);
      }));

      function hdkeyXPrvFromMnemonic(_x23) {
        return _hdkeyXPrvFromMnemonic.apply(this, arguments);
      }

      return hdkeyXPrvFromMnemonic;
    }()
  }, {
    key: "hdkeyXPrvDerive",
    value: function () {
      var _hdkeyXPrvDerive = (0, _asyncToGenerator2["default"])(
      /*#__PURE__*/
      _regenerator["default"].mark(function _callee24(serialized, index, hardened, compliant) {
        return _regenerator["default"].wrap(function _callee24$(_context24) {
          while (1) {
            switch (_context24.prev = _context24.next) {
              case 0:
                return _context24.abrupt("return", this.requestLibrary('crypto.hdkey.xprv.derive', {
                  serialized: serialized,
                  index: index,
                  hardened: hardened,
                  compliant: compliant
                }));

              case 1:
              case "end":
                return _context24.stop();
            }
          }
        }, _callee24, this);
      }));

      function hdkeyXPrvDerive(_x24, _x25, _x26, _x27) {
        return _hdkeyXPrvDerive.apply(this, arguments);
      }

      return hdkeyXPrvDerive;
    }()
  }, {
    key: "hdkeyXPrvDerivePath",
    value: function () {
      var _hdkeyXPrvDerivePath = (0, _asyncToGenerator2["default"])(
      /*#__PURE__*/
      _regenerator["default"].mark(function _callee25(serialized, path, compliant) {
        return _regenerator["default"].wrap(function _callee25$(_context25) {
          while (1) {
            switch (_context25.prev = _context25.next) {
              case 0:
                return _context25.abrupt("return", this.requestLibrary('crypto.hdkey.xprv.derive.path', {
                  serialized: serialized,
                  path: path,
                  compliant: compliant
                }));

              case 1:
              case "end":
                return _context25.stop();
            }
          }
        }, _callee25, this);
      }));

      function hdkeyXPrvDerivePath(_x28, _x29, _x30) {
        return _hdkeyXPrvDerivePath.apply(this, arguments);
      }

      return hdkeyXPrvDerivePath;
    }()
  }, {
    key: "hdkeyXPrvSecret",
    value: function () {
      var _hdkeyXPrvSecret = (0, _asyncToGenerator2["default"])(
      /*#__PURE__*/
      _regenerator["default"].mark(function _callee26(serialized) {
        return _regenerator["default"].wrap(function _callee26$(_context26) {
          while (1) {
            switch (_context26.prev = _context26.next) {
              case 0:
                return _context26.abrupt("return", this.requestLibrary('crypto.hdkey.xprv.secret', {
                  serialized: serialized
                }));

              case 1:
              case "end":
                return _context26.stop();
            }
          }
        }, _callee26, this);
      }));

      function hdkeyXPrvSecret(_x31) {
        return _hdkeyXPrvSecret.apply(this, arguments);
      }

      return hdkeyXPrvSecret;
    }()
  }, {
    key: "hdkeyXPrvPublic",
    value: function () {
      var _hdkeyXPrvPublic = (0, _asyncToGenerator2["default"])(
      /*#__PURE__*/
      _regenerator["default"].mark(function _callee27(serialized) {
        return _regenerator["default"].wrap(function _callee27$(_context27) {
          while (1) {
            switch (_context27.prev = _context27.next) {
              case 0:
                return _context27.abrupt("return", this.requestLibrary('crypto.hdkey.xprv.public', {
                  serialized: serialized
                }));

              case 1:
              case "end":
                return _context27.stop();
            }
          }
        }, _callee27, this);
      }));

      function hdkeyXPrvPublic(_x32) {
        return _hdkeyXPrvPublic.apply(this, arguments);
      }

      return hdkeyXPrvPublic;
    }()
  }]);
  return TONCryptoModule;
}(_TONModule2.TONModule);

exports["default"] = TONCryptoModule;
TONCryptoModule.moduleName = 'TONCryptoModule';
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy9tb2R1bGVzL1RPTkNyeXB0b01vZHVsZS5qcyJdLCJuYW1lcyI6WyJUT05PdXRwdXRFbmNvZGluZyIsIlRleHQiLCJIZXgiLCJIZXhVcHBlcmNhc2UiLCJCYXNlNjQiLCJUT05DcnlwdG9Nb2R1bGUiLCJjaGFsbGVuZ2VIZXgiLCJyZXF1ZXN0TGlicmFyeSIsImJhc2VIZXgiLCJleHBvbmVudEhleCIsIm1vZHVsdXNIZXgiLCJiYXNlIiwiZXhwb25lbnQiLCJtb2R1bHVzIiwibGVuZ3RoIiwib3V0cHV0RW5jb2RpbmciLCJtZXNzYWdlIiwicGFyYW1zIiwic2VjcmV0S2V5Iiwia2V5IiwiZW50cm9weUhleCIsImVudHJvcHkiLCJoZXgiLCJwaHJhc2UiLCJzZXJpYWxpemVkIiwiaW5kZXgiLCJoYXJkZW5lZCIsImNvbXBsaWFudCIsInBhdGgiLCJUT05Nb2R1bGUiLCJtb2R1bGVOYW1lIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUdBOztBQUZBO0FBU08sSUFBTUEsaUJBQWlCLEdBQUc7QUFDN0JDLEVBQUFBLElBQUksRUFBRSxNQUR1QjtBQUU3QkMsRUFBQUEsR0FBRyxFQUFFLEtBRndCO0FBRzdCQyxFQUFBQSxZQUFZLEVBQUUsY0FIZTtBQUk3QkMsRUFBQUEsTUFBTSxFQUFFO0FBSnFCLENBQTFCOzs7SUF5Q2NDLGU7Ozs7Ozs7Ozs7Ozs7OztvREFDREMsWTs7Ozs7aURBQ0wsS0FBS0MsY0FBTCxDQUFvQix1QkFBcEIsRUFBNkNELFlBQTdDLEM7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztxREFHUUUsTyxFQUFpQkMsVyxFQUFxQkMsVTs7Ozs7a0RBQzlDLEtBQUtILGNBQUwsQ0FBb0IsMEJBQXBCLEVBQWdEO0FBQ25ESSxrQkFBQUEsSUFBSSxFQUFFSCxPQUQ2QztBQUVuREksa0JBQUFBLFFBQVEsRUFBRUgsV0FGeUM7QUFHbkRJLGtCQUFBQSxPQUFPLEVBQUVIO0FBSDBDLGlCQUFoRCxDOzs7Ozs7Ozs7Ozs7Ozs7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a0JBQUFBLFVBQVUsRUFBVkEsVUFBRjtBQUFjSSxrQkFBQUEsSUFBSSxFQUFKQSxJQUFkO0FBQW9CRCxrQkFBQUEsU0FBUyxFQUFUQTtBQUFwQixpQkFBckQsQzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O3NEQUdXSCxVOzs7OzttREFDWCxLQUFLakIsY0FBTCxDQUFvQiwwQkFBcEIsRUFBZ0Q7QUFBRWlCLGtCQUFBQSxVQUFVLEVBQVZBO0FBQUYsaUJBQWhELEM7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztzREFHV0EsVTs7Ozs7bURBQ1gsS0FBS2pCLGNBQUwsQ0FBb0IsMEJBQXBCLEVBQWdEO0FBQUVpQixrQkFBQUEsVUFBVSxFQUFWQTtBQUFGLGlCQUFoRCxDOzs7Ozs7Ozs7Ozs7Ozs7Ozs7RUF2SjhCSyxxQjs7O0FBNEo3Q3hCLGVBQWUsQ0FBQ3lCLFVBQWhCLEdBQTZCLGlCQUE3QiIsInNvdXJjZXNDb250ZW50IjpbIi8vIEBmbG93XG4vKiBlc2xpbnQtZGlzYWJsZSBjbGFzcy1tZXRob2RzLXVzZS10aGlzICovXG5cbmltcG9ydCB7IFRPTk1vZHVsZSB9IGZyb20gJy4uL1RPTk1vZHVsZSc7XG5cbmV4cG9ydCB0eXBlIFRPTktleVBhaXJEYXRhID0ge1xuICAgIHNlY3JldDogc3RyaW5nLFxuICAgIHB1YmxpYzogc3RyaW5nLFxufVxuXG5leHBvcnQgY29uc3QgVE9OT3V0cHV0RW5jb2RpbmcgPSB7XG4gICAgVGV4dDogJ1RleHQnLFxuICAgIEhleDogJ0hleCcsXG4gICAgSGV4VXBwZXJjYXNlOiAnSGV4VXBwZXJjYXNlJyxcbiAgICBCYXNlNjQ6ICdCYXNlNjQnLFxufTtcblxuZXhwb3J0IHR5cGUgVE9OT3V0cHV0RW5jb2RpbmdUeXBlID0gJEtleXM8dHlwZW9mIFRPTk91dHB1dEVuY29kaW5nPjtcblxuZXhwb3J0IHR5cGUgVE9OSW5wdXRNZXNzYWdlID0geyB0ZXh0OiBzdHJpbmcgfSB8IHsgaGV4OiBzdHJpbmcgfSB8IHsgYmFzZTY0OiBzdHJpbmcgfVxuXG5leHBvcnQgdHlwZSBUT05GYWN0b3JpemVSZXN1bHQgPSB7XG4gICAgYTogc3RyaW5nLFxuICAgIGI6IHN0cmluZ1xufVxuXG5leHBvcnQgdHlwZSBUT05TY3J5cHRQYXJhbXMgPSB7XG4gICAgcGFzc3dvcmQ6IFRPTklucHV0TWVzc2FnZSxcbiAgICBzYWx0OiBUT05JbnB1dE1lc3NhZ2UsXG4gICAgbG9nTjogbnVtYmVyLFxuICAgIHI6IG51bWJlcixcbiAgICBwOiBudW1iZXIsXG4gICAgZGtMZW46IG51bWJlcixcbiAgICBvdXRwdXRFbmNvZGluZz86IFRPTk91dHB1dEVuY29kaW5nVHlwZSwgLy8gZGVmYXVsdCBIZXhcbn1cblxuZXhwb3J0IHR5cGUgVE9OTmFjbEJveFBhcmFtcyA9IHtcbiAgICBtZXNzYWdlOiBUT05JbnB1dE1lc3NhZ2UsXG4gICAgbm9uY2U6IHN0cmluZyxcbiAgICB0aGVpclB1YmxpY0tleTogc3RyaW5nLFxuICAgIHNlY3JldEtleTogc3RyaW5nLFxuICAgIG91dHB1dEVuY29kaW5nPzogVE9OT3V0cHV0RW5jb2RpbmdUeXBlLCAvLyBkZWZhdWx0IEhleFxufVxuXG5leHBvcnQgdHlwZSBUT05OYWNsU2VjcmV0Qm94UGFyYW1zID0ge1xuICAgIG1lc3NhZ2U6IFRPTklucHV0TWVzc2FnZSxcbiAgICBub25jZTogc3RyaW5nLFxuICAgIGtleTogc3RyaW5nLFxuICAgIG91dHB1dEVuY29kaW5nPzogVE9OT3V0cHV0RW5jb2RpbmdUeXBlLCAvLyBkZWZhdWx0IEhleFxufVxuXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBUT05DcnlwdG9Nb2R1bGUgZXh0ZW5kcyBUT05Nb2R1bGUge1xuICAgIGFzeW5jIGZhY3Rvcml6ZShjaGFsbGVuZ2VIZXg6IHN0cmluZyk6IFByb21pc2U8VE9ORmFjdG9yaXplUmVzdWx0PiB7XG4gICAgICAgIHJldHVybiB0aGlzLnJlcXVlc3RMaWJyYXJ5KCdjcnlwdG8ubWF0aC5mYWN0b3JpemUnLCBjaGFsbGVuZ2VIZXgpO1xuICAgIH1cblxuICAgIGFzeW5jIG1vZHVsYXJQb3dlcihiYXNlSGV4OiBzdHJpbmcsIGV4cG9uZW50SGV4OiBzdHJpbmcsIG1vZHVsdXNIZXg6IHN0cmluZyk6IFByb21pc2U8c3RyaW5nPiB7XG4gICAgICAgIHJldHVybiB0aGlzLnJlcXVlc3RMaWJyYXJ5KCdjcnlwdG8ubWF0aC5tb2R1bGFyUG93ZXInLCB7XG4gICAgICAgICAgICBiYXNlOiBiYXNlSGV4LFxuICAgICAgICAgICAgZXhwb25lbnQ6IGV4cG9uZW50SGV4LFxuICAgICAgICAgICAgbW9kdWx1czogbW9kdWx1c0hleCxcbiAgICAgICAgfSk7XG4gICAgfVxuXG4gICAgYXN5bmMgcmFuZG9tR2VuZXJhdGVCeXRlcyhcbiAgICAgICAgbGVuZ3RoOiBudW1iZXIsXG4gICAgICAgIG91dHB1dEVuY29kaW5nOiBUT05PdXRwdXRFbmNvZGluZ1R5cGUgPSBUT05PdXRwdXRFbmNvZGluZy5IZXgsXG4gICAgKTogUHJvbWlzZTxzdHJpbmc+IHtcbiAgICAgICAgcmV0dXJuIHRoaXMucmVxdWVzdExpYnJhcnkoJ2NyeXB0by5yYW5kb20uZ2VuZXJhdGVCeXRlcycsIHtcbiAgICAgICAgICAgIGxlbmd0aCxcbiAgICAgICAgICAgIG91dHB1dEVuY29kaW5nLFxuICAgICAgICB9KTtcbiAgICB9XG5cblxuICAgIGFzeW5jIGVkMjU1MTlLZXlwYWlyKCk6IFByb21pc2U8VE9OS2V5UGFpckRhdGE+IHtcbiAgICAgICAgcmV0dXJuIHRoaXMucmVxdWVzdExpYnJhcnkoJ2NyeXB0by5lZDI1NTE5LmtleXBhaXInKTtcbiAgICB9XG5cbiAgICBhc3luYyBzaGE1MTIoXG4gICAgICAgIG1lc3NhZ2U6IFRPTklucHV0TWVzc2FnZSxcbiAgICAgICAgb3V0cHV0RW5jb2Rpbmc6IFRPTk91dHB1dEVuY29kaW5nVHlwZSA9IFRPTk91dHB1dEVuY29kaW5nLkhleCxcbiAgICApOiBQcm9taXNlPHN0cmluZz4ge1xuICAgICAgICByZXR1cm4gdGhpcy5yZXF1ZXN0TGlicmFyeSgnY3J5cHRvLnNoYTUxMicsIHsgbWVzc2FnZSwgb3V0cHV0RW5jb2RpbmcgfSk7XG4gICAgfVxuXG4gICAgYXN5bmMgc2hhMjU2KFxuICAgICAgICBtZXNzYWdlOiBUT05JbnB1dE1lc3NhZ2UsXG4gICAgICAgIG91dHB1dEVuY29kaW5nOiBUT05PdXRwdXRFbmNvZGluZ1R5cGUgPSBUT05PdXRwdXRFbmNvZGluZy5IZXgsXG4gICAgKTogUHJvbWlzZTxzdHJpbmc+IHtcbiAgICAgICAgcmV0dXJuIHRoaXMucmVxdWVzdExpYnJhcnkoJ2NyeXB0by5zaGEyNTYnLCB7IG1lc3NhZ2UsIG91dHB1dEVuY29kaW5nIH0pO1xuICAgIH1cblxuICAgIGFzeW5jIHNjcnlwdChwYXJhbXM6IFRPTlNjcnlwdFBhcmFtcyk6IFByb21pc2U8c3RyaW5nPiB7XG4gICAgICAgIHJldHVybiB0aGlzLnJlcXVlc3RMaWJyYXJ5KCdjcnlwdG8uc2NyeXB0JywgcGFyYW1zKTtcbiAgICB9XG5cbiAgICBhc3luYyBuYWNsQm94S2V5cGFpcigpOiBQcm9taXNlPFRPTktleVBhaXJEYXRhPiB7XG4gICAgICAgIHJldHVybiB0aGlzLnJlcXVlc3RMaWJyYXJ5KCdjcnlwdG8ubmFjbC5ib3gua2V5cGFpcicpO1xuICAgIH1cblxuICAgIGFzeW5jIG5hY2xCb3hLZXlwYWlyRnJvbVNlY3JldEtleShzZWNyZXRLZXk6IHN0cmluZyk6IFByb21pc2U8VE9OS2V5UGFpckRhdGE+IHtcbiAgICAgICAgcmV0dXJuIHRoaXMucmVxdWVzdExpYnJhcnkoJ2NyeXB0by5uYWNsLmJveC5rZXlwYWlyLmZyb21TZWNyZXRLZXknLCBzZWNyZXRLZXkpO1xuICAgIH1cblxuICAgIGFzeW5jIG5hY2xTaWduS2V5cGFpcigpOiBQcm9taXNlPFRPTktleVBhaXJEYXRhPiB7XG4gICAgICAgIHJldHVybiB0aGlzLnJlcXVlc3RMaWJyYXJ5KCdjcnlwdG8ubmFjbC5zaWduLmtleXBhaXInKTtcbiAgICB9XG5cbiAgICBhc3luYyBuYWNsU2lnbktleXBhaXJGcm9tU2VjcmV0S2V5KHNlY3JldEtleTogc3RyaW5nKTogUHJvbWlzZTxUT05LZXlQYWlyRGF0YT4ge1xuICAgICAgICByZXR1cm4gdGhpcy5yZXF1ZXN0TGlicmFyeSgnY3J5cHRvLm5hY2wuc2lnbi5rZXlwYWlyLmZyb21TZWNyZXRLZXknLCBzZWNyZXRLZXkpO1xuICAgIH1cblxuICAgIGFzeW5jIG5hY2xCb3gocGFyYW1zOiBUT05OYWNsQm94UGFyYW1zKTogUHJvbWlzZTxzdHJpbmc+IHtcbiAgICAgICAgcmV0dXJuIHRoaXMucmVxdWVzdExpYnJhcnkoJ2NyeXB0by5uYWNsLmJveCcsIHBhcmFtcyk7XG4gICAgfVxuXG4gICAgYXN5bmMgbmFjbEJveE9wZW4ocGFyYW1zOiBUT05OYWNsQm94UGFyYW1zKTogUHJvbWlzZTxzdHJpbmc+IHtcbiAgICAgICAgcmV0dXJuIHRoaXMucmVxdWVzdExpYnJhcnkoJ2NyeXB0by5uYWNsLmJveC5vcGVuJywgcGFyYW1zKTtcbiAgICB9XG5cbiAgICBhc3luYyBuYWNsU2VjcmV0Qm94KHBhcmFtczogVE9OTmFjbFNlY3JldEJveFBhcmFtcyk6IFByb21pc2U8c3RyaW5nPiB7XG4gICAgICAgIHJldHVybiB0aGlzLnJlcXVlc3RMaWJyYXJ5KCdjcnlwdG8ubmFjbC5zZWNyZXQuYm94JywgcGFyYW1zKTtcbiAgICB9XG5cbiAgICBhc3luYyBuYWNsU2VjcmV0Qm94T3BlbihwYXJhbXM6IFRPTk5hY2xTZWNyZXRCb3hQYXJhbXMpOiBQcm9taXNlPHN0cmluZz4ge1xuICAgICAgICByZXR1cm4gdGhpcy5yZXF1ZXN0TGlicmFyeSgnY3J5cHRvLm5hY2wuc2VjcmV0LmJveC5vcGVuJywgcGFyYW1zKTtcbiAgICB9XG5cbiAgICBhc3luYyBuYWNsU2lnbihcbiAgICAgICAgbWVzc2FnZTogVE9OSW5wdXRNZXNzYWdlLFxuICAgICAgICBrZXk6IHN0cmluZyxcbiAgICAgICAgb3V0cHV0RW5jb2Rpbmc6IFRPTk91dHB1dEVuY29kaW5nVHlwZSA9IFRPTk91dHB1dEVuY29kaW5nLkhleCxcbiAgICApOiBQcm9taXNlPHN0cmluZz4ge1xuICAgICAgICByZXR1cm4gdGhpcy5yZXF1ZXN0TGlicmFyeSgnY3J5cHRvLm5hY2wuc2lnbicsIHtcbiAgICAgICAgICAgIG1lc3NhZ2UsXG4gICAgICAgICAgICBrZXksXG4gICAgICAgICAgICBvdXRwdXRFbmNvZGluZyxcbiAgICAgICAgfSk7XG4gICAgfVxuXG4gICAgYXN5bmMgbmFjbFNpZ25PcGVuKFxuICAgICAgICBtZXNzYWdlOiBUT05JbnB1dE1lc3NhZ2UsXG4gICAgICAgIGtleTogc3RyaW5nLFxuICAgICAgICBvdXRwdXRFbmNvZGluZzogVE9OT3V0cHV0RW5jb2RpbmdUeXBlID0gVE9OT3V0cHV0RW5jb2RpbmcuSGV4LFxuICAgICk6IFByb21pc2U8c3RyaW5nPiB7XG4gICAgICAgIHJldHVybiB0aGlzLnJlcXVlc3RMaWJyYXJ5KCdjcnlwdG8ubmFjbC5zaWduLm9wZW4nLCB7XG4gICAgICAgICAgICBtZXNzYWdlLFxuICAgICAgICAgICAga2V5LFxuICAgICAgICAgICAgb3V0cHV0RW5jb2RpbmcsXG4gICAgICAgIH0pO1xuICAgIH1cblxuICAgIGFzeW5jIG5hY2xTaWduRGV0YWNoZWQoXG4gICAgICAgIG1lc3NhZ2U6IFRPTklucHV0TWVzc2FnZSxcbiAgICAgICAga2V5OiBzdHJpbmcsXG4gICAgICAgIG91dHB1dEVuY29kaW5nOiBUT05PdXRwdXRFbmNvZGluZ1R5cGUgPSBUT05PdXRwdXRFbmNvZGluZy5IZXgsXG4gICAgKTogUHJvbWlzZTxzdHJpbmc+IHtcbiAgICAgICAgcmV0dXJuIHRoaXMucmVxdWVzdExpYnJhcnkoJ2NyeXB0by5uYWNsLnNpZ24uZGV0YWNoZWQnLCB7XG4gICAgICAgICAgICBtZXNzYWdlLFxuICAgICAgICAgICAga2V5LFxuICAgICAgICAgICAgb3V0cHV0RW5jb2RpbmcsXG4gICAgICAgIH0pO1xuICAgIH1cblxuICAgIC8vIE1uZW1vbmljXG5cbiAgICBhc3luYyBtbmVtb25pY1dvcmRzKCk6IFByb21pc2U8c3RyaW5nPiB7XG4gICAgICAgIHJldHVybiB0aGlzLnJlcXVlc3RMaWJyYXJ5KCdjcnlwdG8ubW5lbW9uaWMud29yZHMnKTtcbiAgICB9XG5cbiAgICBhc3luYyBtbmVtb25pY0Zyb21SYW5kb20oKTogUHJvbWlzZTxzdHJpbmc+IHtcbiAgICAgICAgcmV0dXJuIHRoaXMucmVxdWVzdExpYnJhcnkoJ2NyeXB0by5tbmVtb25pYy5mcm9tLnJhbmRvbScpO1xuICAgIH1cblxuICAgIGFzeW5jIG1uZW1vbmljRnJvbUVudHJvcHkoZW50cm9weUhleDogc3RyaW5nKTogUHJvbWlzZTxzdHJpbmc+IHtcbiAgICAgICAgcmV0dXJuIHRoaXMucmVxdWVzdExpYnJhcnkoJ2NyeXB0by5tbmVtb25pYy5mcm9tLmVudHJvcHknLCB7IGVudHJvcHk6IHsgaGV4OiBlbnRyb3B5SGV4IH0gfSk7XG4gICAgfVxuXG4gICAgYXN5bmMgbW5lbW9uaWNJc1ZhbGlkKHBocmFzZTogc3RyaW5nKTogUHJvbWlzZTxib29sZWFuPiB7XG4gICAgICAgIHJldHVybiB0aGlzLnJlcXVlc3RMaWJyYXJ5KCdjcnlwdG8ubW5lbW9uaWMudmVyaWZ5JywgeyBwaHJhc2UgfSk7XG4gICAgfVxuXG4gICAgLy8gSERLZXlzXG5cbiAgICBhc3luYyBoZGtleVhQcnZGcm9tTW5lbW9uaWMocGhyYXNlOiBzdHJpbmcpOiBQcm9taXNlPHN0cmluZz4ge1xuICAgICAgICByZXR1cm4gdGhpcy5yZXF1ZXN0TGlicmFyeSgnY3J5cHRvLmhka2V5LnhwcnYuZnJvbS5tbmVtb25pYycsIHsgcGhyYXNlIH0pO1xuICAgIH1cblxuICAgIGFzeW5jIGhka2V5WFBydkRlcml2ZShzZXJpYWxpemVkOiBzdHJpbmcsIGluZGV4OiBudW1iZXIsIGhhcmRlbmVkOiBib29sZWFuLCBjb21wbGlhbnQ6IGJvb2xlYW4pOiBQcm9taXNlPHN0cmluZz4ge1xuICAgICAgICByZXR1cm4gdGhpcy5yZXF1ZXN0TGlicmFyeSgnY3J5cHRvLmhka2V5LnhwcnYuZGVyaXZlJywgeyBzZXJpYWxpemVkLCBpbmRleCwgaGFyZGVuZWQsIGNvbXBsaWFudCB9KTtcbiAgICB9XG5cbiAgICBhc3luYyBoZGtleVhQcnZEZXJpdmVQYXRoKHNlcmlhbGl6ZWQ6IHN0cmluZywgcGF0aDogc3RyaW5nLCBjb21wbGlhbnQ6IGJvb2xlYW4pOiBQcm9taXNlPHN0cmluZz4ge1xuICAgICAgICByZXR1cm4gdGhpcy5yZXF1ZXN0TGlicmFyeSgnY3J5cHRvLmhka2V5LnhwcnYuZGVyaXZlLnBhdGgnLCB7IHNlcmlhbGl6ZWQsIHBhdGgsIGNvbXBsaWFudCB9KTtcbiAgICB9XG5cbiAgICBhc3luYyBoZGtleVhQcnZTZWNyZXQoc2VyaWFsaXplZDogc3RyaW5nKTogUHJvbWlzZTxzdHJpbmc+IHtcbiAgICAgICAgcmV0dXJuIHRoaXMucmVxdWVzdExpYnJhcnkoJ2NyeXB0by5oZGtleS54cHJ2LnNlY3JldCcsIHsgc2VyaWFsaXplZCB9KTtcbiAgICB9XG5cbiAgICBhc3luYyBoZGtleVhQcnZQdWJsaWMoc2VyaWFsaXplZDogc3RyaW5nKTogUHJvbWlzZTxzdHJpbmc+IHtcbiAgICAgICAgcmV0dXJuIHRoaXMucmVxdWVzdExpYnJhcnkoJ2NyeXB0by5oZGtleS54cHJ2LnB1YmxpYycsIHsgc2VyaWFsaXplZCB9KTtcbiAgICB9XG5cbn1cblxuVE9OQ3J5cHRvTW9kdWxlLm1vZHVsZU5hbWUgPSAnVE9OQ3J5cHRvTW9kdWxlJztcbiJdfQ==