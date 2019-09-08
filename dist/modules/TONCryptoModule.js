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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy9tb2R1bGVzL1RPTkNyeXB0b01vZHVsZS5qcyJdLCJuYW1lcyI6WyJUT05PdXRwdXRFbmNvZGluZyIsIlRleHQiLCJIZXgiLCJIZXhVcHBlcmNhc2UiLCJCYXNlNjQiLCJUT05DcnlwdG9Nb2R1bGUiLCJjaGFsbGVuZ2VIZXgiLCJyZXF1ZXN0TGlicmFyeSIsImJhc2VIZXgiLCJleHBvbmVudEhleCIsIm1vZHVsdXNIZXgiLCJiYXNlIiwiZXhwb25lbnQiLCJtb2R1bHVzIiwibGVuZ3RoIiwib3V0cHV0RW5jb2RpbmciLCJtZXNzYWdlIiwicGFyYW1zIiwic2VjcmV0S2V5Iiwia2V5IiwiZW50cm9weUhleCIsImVudHJvcHkiLCJoZXgiLCJwaHJhc2UiLCJzZXJpYWxpemVkIiwiaW5kZXgiLCJoYXJkZW5lZCIsImNvbXBsaWFudCIsInBhdGgiLCJUT05Nb2R1bGUiLCJtb2R1bGVOYW1lIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQW1CQTs7QUFuQkE7Ozs7Ozs7Ozs7Ozs7Ozs7QUFpQkE7QUFTTyxJQUFNQSxpQkFBaUIsR0FBRztBQUM3QkMsRUFBQUEsSUFBSSxFQUFFLE1BRHVCO0FBRTdCQyxFQUFBQSxHQUFHLEVBQUUsS0FGd0I7QUFHN0JDLEVBQUFBLFlBQVksRUFBRSxjQUhlO0FBSTdCQyxFQUFBQSxNQUFNLEVBQUU7QUFKcUIsQ0FBMUI7OztJQXlDY0MsZTs7Ozs7Ozs7Ozs7Ozs7O29EQUNEQyxZOzs7OztpREFDTCxLQUFLQyxjQUFMLENBQW9CLHVCQUFwQixFQUE2Q0QsWUFBN0MsQzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O3FEQUdRRSxPLEVBQWlCQyxXLEVBQXFCQyxVOzs7OztrREFDOUMsS0FBS0gsY0FBTCxDQUFvQiwwQkFBcEIsRUFBZ0Q7QUFDbkRJLGtCQUFBQSxJQUFJLEVBQUVILE9BRDZDO0FBRW5ESSxrQkFBQUEsUUFBUSxFQUFFSCxXQUZ5QztBQUduREksa0JBQUFBLE9BQU8sRUFBRUg7QUFIMEMs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b0IsK0JBQXBCLEVBQXFEO0FBQUVpQixrQkFBQUEsVUFBVSxFQUFWQSxVQUFGO0FBQWNJLGtCQUFBQSxJQUFJLEVBQUpBLElBQWQ7QUFBb0JELGtCQUFBQSxTQUFTLEVBQVRBO0FBQXBCLGlCQUFyRCxDOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7c0RBR1dILFU7Ozs7O21EQUNYLEtBQUtqQixjQUFMLENBQW9CLDBCQUFwQixFQUFnRDtBQUFFaUIsa0JBQUFBLFVBQVUsRUFBVkE7QUFBRixpQkFBaEQsQzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O3NEQUdXQSxVOzs7OzttREFDWCxLQUFLakIsY0FBTCxDQUFvQiwwQkFBcEIsRUFBZ0Q7QUFBRWlCLGtCQUFBQSxVQUFVLEVBQVZBO0FBQUYsaUJBQWhELEM7Ozs7Ozs7Ozs7Ozs7Ozs7OztFQXZKOEJLLHFCOzs7QUE0SjdDeEIsZUFBZSxDQUFDeUIsVUFBaEIsR0FBNkIsaUJBQTdCIiwic291cmNlc0NvbnRlbnQiOlsiLypcbiAqIENvcHlyaWdodCAyMDE4LTIwMTkgVE9OIERFViBTT0xVVElPTlMgTFRELlxuICpcbiAqIExpY2Vuc2VkIHVuZGVyIHRoZSBTT0ZUV0FSRSBFVkFMVUFUSU9OIExpY2Vuc2UgKHRoZSBcIkxpY2Vuc2VcIik7IHlvdSBtYXkgbm90IHVzZVxuICogdGhpcyBmaWxlIGV4Y2VwdCBpbiBjb21wbGlhbmNlIHdpdGggdGhlIExpY2Vuc2UuICBZb3UgbWF5IG9idGFpbiBhIGNvcHkgb2YgdGhlXG4gKiBMaWNlbnNlIGF0OlxuICpcbiAqIGh0dHA6Ly93d3cudG9uLmRldi9saWNlbnNlc1xuICpcbiAqIFVubGVzcyByZXF1aXJlZCBieSBhcHBsaWNhYmxlIGxhdyBvciBhZ3JlZWQgdG8gaW4gd3JpdGluZywgc29mdHdhcmVcbiAqIGRpc3RyaWJ1dGVkIHVuZGVyIHRoZSBMaWNlbnNlIGlzIGRpc3RyaWJ1dGVkIG9uIGFuIFwiQVMgSVNcIiBCQVNJUyxcbiAqIFdJVEhPVVQgV0FSUkFOVElFUyBPUiBDT05ESVRJT05TIE9GIEFOWSBLSU5ELCBlaXRoZXIgZXhwcmVzcyBvciBpbXBsaWVkLlxuICogU2VlIHRoZSBMaWNlbnNlIGZvciB0aGUgc3BlY2lmaWMgVE9OIERFViBzb2Z0d2FyZSBnb3Zlcm5pbmcgcGVybWlzc2lvbnMgYW5kXG4gKiBsaW1pdGF0aW9ucyB1bmRlciB0aGUgTGljZW5zZS5cbiAqL1xuXG4vLyBAZmxvd1xuLyogZXNsaW50LWRpc2FibGUgY2xhc3MtbWV0aG9kcy11c2UtdGhpcyAqL1xuXG5pbXBvcnQgeyBUT05Nb2R1bGUgfSBmcm9tICcuLi9UT05Nb2R1bGUnO1xuXG5leHBvcnQgdHlwZSBUT05LZXlQYWlyRGF0YSA9IHtcbiAgICBzZWNyZXQ6IHN0cmluZyxcbiAgICBwdWJsaWM6IHN0cmluZyxcbn1cblxuZXhwb3J0IGNvbnN0IFRPTk91dHB1dEVuY29kaW5nID0ge1xuICAgIFRleHQ6ICdUZXh0JyxcbiAgICBIZXg6ICdIZXgnLFxuICAgIEhleFVwcGVyY2FzZTogJ0hleFVwcGVyY2FzZScsXG4gICAgQmFzZTY0OiAnQmFzZTY0Jyxcbn07XG5cbmV4cG9ydCB0eXBlIFRPTk91dHB1dEVuY29kaW5nVHlwZSA9ICRLZXlzPHR5cGVvZiBUT05PdXRwdXRFbmNvZGluZz47XG5cbmV4cG9ydCB0eXBlIFRPTklucHV0TWVzc2FnZSA9IHsgdGV4dDogc3RyaW5nIH0gfCB7IGhleDogc3RyaW5nIH0gfCB7IGJhc2U2NDogc3RyaW5nIH1cblxuZXhwb3J0IHR5cGUgVE9ORmFjdG9yaXplUmVzdWx0ID0ge1xuICAgIGE6IHN0cmluZyxcbiAgICBiOiBzdHJpbmdcbn1cblxuZXhwb3J0IHR5cGUgVE9OU2NyeXB0UGFyYW1zID0ge1xuICAgIHBhc3N3b3JkOiBUT05JbnB1dE1lc3NhZ2UsXG4gICAgc2FsdDogVE9OSW5wdXRNZXNzYWdlLFxuICAgIGxvZ046IG51bWJlcixcbiAgICByOiBudW1iZXIsXG4gICAgcDogbnVtYmVyLFxuICAgIGRrTGVuOiBudW1iZXIsXG4gICAgb3V0cHV0RW5jb2Rpbmc/OiBUT05PdXRwdXRFbmNvZGluZ1R5cGUsIC8vIGRlZmF1bHQgSGV4XG59XG5cbmV4cG9ydCB0eXBlIFRPTk5hY2xCb3hQYXJhbXMgPSB7XG4gICAgbWVzc2FnZTogVE9OSW5wdXRNZXNzYWdlLFxuICAgIG5vbmNlOiBzdHJpbmcsXG4gICAgdGhlaXJQdWJsaWNLZXk6IHN0cmluZyxcbiAgICBzZWNyZXRLZXk6IHN0cmluZyxcbiAgICBvdXRwdXRFbmNvZGluZz86IFRPTk91dHB1dEVuY29kaW5nVHlwZSwgLy8gZGVmYXVsdCBIZXhcbn1cblxuZXhwb3J0IHR5cGUgVE9OTmFjbFNlY3JldEJveFBhcmFtcyA9IHtcbiAgICBtZXNzYWdlOiBUT05JbnB1dE1lc3NhZ2UsXG4gICAgbm9uY2U6IHN0cmluZyxcbiAgICBrZXk6IHN0cmluZyxcbiAgICBvdXRwdXRFbmNvZGluZz86IFRPTk91dHB1dEVuY29kaW5nVHlwZSwgLy8gZGVmYXVsdCBIZXhcbn1cblxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgVE9OQ3J5cHRvTW9kdWxlIGV4dGVuZHMgVE9OTW9kdWxlIHtcbiAgICBhc3luYyBmYWN0b3JpemUoY2hhbGxlbmdlSGV4OiBzdHJpbmcpOiBQcm9taXNlPFRPTkZhY3Rvcml6ZVJlc3VsdD4ge1xuICAgICAgICByZXR1cm4gdGhpcy5yZXF1ZXN0TGlicmFyeSgnY3J5cHRvLm1hdGguZmFjdG9yaXplJywgY2hhbGxlbmdlSGV4KTtcbiAgICB9XG5cbiAgICBhc3luYyBtb2R1bGFyUG93ZXIoYmFzZUhleDogc3RyaW5nLCBleHBvbmVudEhleDogc3RyaW5nLCBtb2R1bHVzSGV4OiBzdHJpbmcpOiBQcm9taXNlPHN0cmluZz4ge1xuICAgICAgICByZXR1cm4gdGhpcy5yZXF1ZXN0TGlicmFyeSgnY3J5cHRvLm1hdGgubW9kdWxhclBvd2VyJywge1xuICAgICAgICAgICAgYmFzZTogYmFzZUhleCxcbiAgICAgICAgICAgIGV4cG9uZW50OiBleHBvbmVudEhleCxcbiAgICAgICAgICAgIG1vZHVsdXM6IG1vZHVsdXNIZXgsXG4gICAgICAgIH0pO1xuICAgIH1cblxuICAgIGFzeW5jIHJhbmRvbUdlbmVyYXRlQnl0ZXMoXG4gICAgICAgIGxlbmd0aDogbnVtYmVyLFxuICAgICAgICBvdXRwdXRFbmNvZGluZzogVE9OT3V0cHV0RW5jb2RpbmdUeXBlID0gVE9OT3V0cHV0RW5jb2RpbmcuSGV4LFxuICAgICk6IFByb21pc2U8c3RyaW5nPiB7XG4gICAgICAgIHJldHVybiB0aGlzLnJlcXVlc3RMaWJyYXJ5KCdjcnlwdG8ucmFuZG9tLmdlbmVyYXRlQnl0ZXMnLCB7XG4gICAgICAgICAgICBsZW5ndGgsXG4gICAgICAgICAgICBvdXRwdXRFbmNvZGluZyxcbiAgICAgICAgfSk7XG4gICAgfVxuXG5cbiAgICBhc3luYyBlZDI1NTE5S2V5cGFpcigpOiBQcm9taXNlPFRPTktleVBhaXJEYXRhPiB7XG4gICAgICAgIHJldHVybiB0aGlzLnJlcXVlc3RMaWJyYXJ5KCdjcnlwdG8uZWQyNTUxOS5rZXlwYWlyJyk7XG4gICAgfVxuXG4gICAgYXN5bmMgc2hhNTEyKFxuICAgICAgICBtZXNzYWdlOiBUT05JbnB1dE1lc3NhZ2UsXG4gICAgICAgIG91dHB1dEVuY29kaW5nOiBUT05PdXRwdXRFbmNvZGluZ1R5cGUgPSBUT05PdXRwdXRFbmNvZGluZy5IZXgsXG4gICAgKTogUHJvbWlzZTxzdHJpbmc+IHtcbiAgICAgICAgcmV0dXJuIHRoaXMucmVxdWVzdExpYnJhcnkoJ2NyeXB0by5zaGE1MTInLCB7IG1lc3NhZ2UsIG91dHB1dEVuY29kaW5nIH0pO1xuICAgIH1cblxuICAgIGFzeW5jIHNoYTI1NihcbiAgICAgICAgbWVzc2FnZTogVE9OSW5wdXRNZXNzYWdlLFxuICAgICAgICBvdXRwdXRFbmNvZGluZzogVE9OT3V0cHV0RW5jb2RpbmdUeXBlID0gVE9OT3V0cHV0RW5jb2RpbmcuSGV4LFxuICAgICk6IFByb21pc2U8c3RyaW5nPiB7XG4gICAgICAgIHJldHVybiB0aGlzLnJlcXVlc3RMaWJyYXJ5KCdjcnlwdG8uc2hhMjU2JywgeyBtZXNzYWdlLCBvdXRwdXRFbmNvZGluZyB9KTtcbiAgICB9XG5cbiAgICBhc3luYyBzY3J5cHQocGFyYW1zOiBUT05TY3J5cHRQYXJhbXMpOiBQcm9taXNlPHN0cmluZz4ge1xuICAgICAgICByZXR1cm4gdGhpcy5yZXF1ZXN0TGlicmFyeSgnY3J5cHRvLnNjcnlwdCcsIHBhcmFtcyk7XG4gICAgfVxuXG4gICAgYXN5bmMgbmFjbEJveEtleXBhaXIoKTogUHJvbWlzZTxUT05LZXlQYWlyRGF0YT4ge1xuICAgICAgICByZXR1cm4gdGhpcy5yZXF1ZXN0TGlicmFyeSgnY3J5cHRvLm5hY2wuYm94LmtleXBhaXInKTtcbiAgICB9XG5cbiAgICBhc3luYyBuYWNsQm94S2V5cGFpckZyb21TZWNyZXRLZXkoc2VjcmV0S2V5OiBzdHJpbmcpOiBQcm9taXNlPFRPTktleVBhaXJEYXRhPiB7XG4gICAgICAgIHJldHVybiB0aGlzLnJlcXVlc3RMaWJyYXJ5KCdjcnlwdG8ubmFjbC5ib3gua2V5cGFpci5mcm9tU2VjcmV0S2V5Jywgc2VjcmV0S2V5KTtcbiAgICB9XG5cbiAgICBhc3luYyBuYWNsU2lnbktleXBhaXIoKTogUHJvbWlzZTxUT05LZXlQYWlyRGF0YT4ge1xuICAgICAgICByZXR1cm4gdGhpcy5yZXF1ZXN0TGlicmFyeSgnY3J5cHRvLm5hY2wuc2lnbi5rZXlwYWlyJyk7XG4gICAgfVxuXG4gICAgYXN5bmMgbmFjbFNpZ25LZXlwYWlyRnJvbVNlY3JldEtleShzZWNyZXRLZXk6IHN0cmluZyk6IFByb21pc2U8VE9OS2V5UGFpckRhdGE+IHtcbiAgICAgICAgcmV0dXJuIHRoaXMucmVxdWVzdExpYnJhcnkoJ2NyeXB0by5uYWNsLnNpZ24ua2V5cGFpci5mcm9tU2VjcmV0S2V5Jywgc2VjcmV0S2V5KTtcbiAgICB9XG5cbiAgICBhc3luYyBuYWNsQm94KHBhcmFtczogVE9OTmFjbEJveFBhcmFtcyk6IFByb21pc2U8c3RyaW5nPiB7XG4gICAgICAgIHJldHVybiB0aGlzLnJlcXVlc3RMaWJyYXJ5KCdjcnlwdG8ubmFjbC5ib3gnLCBwYXJhbXMpO1xuICAgIH1cblxuICAgIGFzeW5jIG5hY2xCb3hPcGVuKHBhcmFtczogVE9OTmFjbEJveFBhcmFtcyk6IFByb21pc2U8c3RyaW5nPiB7XG4gICAgICAgIHJldHVybiB0aGlzLnJlcXVlc3RMaWJyYXJ5KCdjcnlwdG8ubmFjbC5ib3gub3BlbicsIHBhcmFtcyk7XG4gICAgfVxuXG4gICAgYXN5bmMgbmFjbFNlY3JldEJveChwYXJhbXM6IFRPTk5hY2xTZWNyZXRCb3hQYXJhbXMpOiBQcm9taXNlPHN0cmluZz4ge1xuICAgICAgICByZXR1cm4gdGhpcy5yZXF1ZXN0TGlicmFyeSgnY3J5cHRvLm5hY2wuc2VjcmV0LmJveCcsIHBhcmFtcyk7XG4gICAgfVxuXG4gICAgYXN5bmMgbmFjbFNlY3JldEJveE9wZW4ocGFyYW1zOiBUT05OYWNsU2VjcmV0Qm94UGFyYW1zKTogUHJvbWlzZTxzdHJpbmc+IHtcbiAgICAgICAgcmV0dXJuIHRoaXMucmVxdWVzdExpYnJhcnkoJ2NyeXB0by5uYWNsLnNlY3JldC5ib3gub3BlbicsIHBhcmFtcyk7XG4gICAgfVxuXG4gICAgYXN5bmMgbmFjbFNpZ24oXG4gICAgICAgIG1lc3NhZ2U6IFRPTklucHV0TWVzc2FnZSxcbiAgICAgICAga2V5OiBzdHJpbmcsXG4gICAgICAgIG91dHB1dEVuY29kaW5nOiBUT05PdXRwdXRFbmNvZGluZ1R5cGUgPSBUT05PdXRwdXRFbmNvZGluZy5IZXgsXG4gICAgKTogUHJvbWlzZTxzdHJpbmc+IHtcbiAgICAgICAgcmV0dXJuIHRoaXMucmVxdWVzdExpYnJhcnkoJ2NyeXB0by5uYWNsLnNpZ24nLCB7XG4gICAgICAgICAgICBtZXNzYWdlLFxuICAgICAgICAgICAga2V5LFxuICAgICAgICAgICAgb3V0cHV0RW5jb2RpbmcsXG4gICAgICAgIH0pO1xuICAgIH1cblxuICAgIGFzeW5jIG5hY2xTaWduT3BlbihcbiAgICAgICAgbWVzc2FnZTogVE9OSW5wdXRNZXNzYWdlLFxuICAgICAgICBrZXk6IHN0cmluZyxcbiAgICAgICAgb3V0cHV0RW5jb2Rpbmc6IFRPTk91dHB1dEVuY29kaW5nVHlwZSA9IFRPTk91dHB1dEVuY29kaW5nLkhleCxcbiAgICApOiBQcm9taXNlPHN0cmluZz4ge1xuICAgICAgICByZXR1cm4gdGhpcy5yZXF1ZXN0TGlicmFyeSgnY3J5cHRvLm5hY2wuc2lnbi5vcGVuJywge1xuICAgICAgICAgICAgbWVzc2FnZSxcbiAgICAgICAgICAgIGtleSxcbiAgICAgICAgICAgIG91dHB1dEVuY29kaW5nLFxuICAgICAgICB9KTtcbiAgICB9XG5cbiAgICBhc3luYyBuYWNsU2lnbkRldGFjaGVkKFxuICAgICAgICBtZXNzYWdlOiBUT05JbnB1dE1lc3NhZ2UsXG4gICAgICAgIGtleTogc3RyaW5nLFxuICAgICAgICBvdXRwdXRFbmNvZGluZzogVE9OT3V0cHV0RW5jb2RpbmdUeXBlID0gVE9OT3V0cHV0RW5jb2RpbmcuSGV4LFxuICAgICk6IFByb21pc2U8c3RyaW5nPiB7XG4gICAgICAgIHJldHVybiB0aGlzLnJlcXVlc3RMaWJyYXJ5KCdjcnlwdG8ubmFjbC5zaWduLmRldGFjaGVkJywge1xuICAgICAgICAgICAgbWVzc2FnZSxcbiAgICAgICAgICAgIGtleSxcbiAgICAgICAgICAgIG91dHB1dEVuY29kaW5nLFxuICAgICAgICB9KTtcbiAgICB9XG5cbiAgICAvLyBNbmVtb25pY1xuXG4gICAgYXN5bmMgbW5lbW9uaWNXb3JkcygpOiBQcm9taXNlPHN0cmluZz4ge1xuICAgICAgICByZXR1cm4gdGhpcy5yZXF1ZXN0TGlicmFyeSgnY3J5cHRvLm1uZW1vbmljLndvcmRzJyk7XG4gICAgfVxuXG4gICAgYXN5bmMgbW5lbW9uaWNGcm9tUmFuZG9tKCk6IFByb21pc2U8c3RyaW5nPiB7XG4gICAgICAgIHJldHVybiB0aGlzLnJlcXVlc3RMaWJyYXJ5KCdjcnlwdG8ubW5lbW9uaWMuZnJvbS5yYW5kb20nKTtcbiAgICB9XG5cbiAgICBhc3luYyBtbmVtb25pY0Zyb21FbnRyb3B5KGVudHJvcHlIZXg6IHN0cmluZyk6IFByb21pc2U8c3RyaW5nPiB7XG4gICAgICAgIHJldHVybiB0aGlzLnJlcXVlc3RMaWJyYXJ5KCdjcnlwdG8ubW5lbW9uaWMuZnJvbS5lbnRyb3B5JywgeyBlbnRyb3B5OiB7IGhleDogZW50cm9weUhleCB9IH0pO1xuICAgIH1cblxuICAgIGFzeW5jIG1uZW1vbmljSXNWYWxpZChwaHJhc2U6IHN0cmluZyk6IFByb21pc2U8Ym9vbGVhbj4ge1xuICAgICAgICByZXR1cm4gdGhpcy5yZXF1ZXN0TGlicmFyeSgnY3J5cHRvLm1uZW1vbmljLnZlcmlmeScsIHsgcGhyYXNlIH0pO1xuICAgIH1cblxuICAgIC8vIEhES2V5c1xuXG4gICAgYXN5bmMgaGRrZXlYUHJ2RnJvbU1uZW1vbmljKHBocmFzZTogc3RyaW5nKTogUHJvbWlzZTxzdHJpbmc+IHtcbiAgICAgICAgcmV0dXJuIHRoaXMucmVxdWVzdExpYnJhcnkoJ2NyeXB0by5oZGtleS54cHJ2LmZyb20ubW5lbW9uaWMnLCB7IHBocmFzZSB9KTtcbiAgICB9XG5cbiAgICBhc3luYyBoZGtleVhQcnZEZXJpdmUoc2VyaWFsaXplZDogc3RyaW5nLCBpbmRleDogbnVtYmVyLCBoYXJkZW5lZDogYm9vbGVhbiwgY29tcGxpYW50OiBib29sZWFuKTogUHJvbWlzZTxzdHJpbmc+IHtcbiAgICAgICAgcmV0dXJuIHRoaXMucmVxdWVzdExpYnJhcnkoJ2NyeXB0by5oZGtleS54cHJ2LmRlcml2ZScsIHsgc2VyaWFsaXplZCwgaW5kZXgsIGhhcmRlbmVkLCBjb21wbGlhbnQgfSk7XG4gICAgfVxuXG4gICAgYXN5bmMgaGRrZXlYUHJ2RGVyaXZlUGF0aChzZXJpYWxpemVkOiBzdHJpbmcsIHBhdGg6IHN0cmluZywgY29tcGxpYW50OiBib29sZWFuKTogUHJvbWlzZTxzdHJpbmc+IHtcbiAgICAgICAgcmV0dXJuIHRoaXMucmVxdWVzdExpYnJhcnkoJ2NyeXB0by5oZGtleS54cHJ2LmRlcml2ZS5wYXRoJywgeyBzZXJpYWxpemVkLCBwYXRoLCBjb21wbGlhbnQgfSk7XG4gICAgfVxuXG4gICAgYXN5bmMgaGRrZXlYUHJ2U2VjcmV0KHNlcmlhbGl6ZWQ6IHN0cmluZyk6IFByb21pc2U8c3RyaW5nPiB7XG4gICAgICAgIHJldHVybiB0aGlzLnJlcXVlc3RMaWJyYXJ5KCdjcnlwdG8uaGRrZXkueHBydi5zZWNyZXQnLCB7IHNlcmlhbGl6ZWQgfSk7XG4gICAgfVxuXG4gICAgYXN5bmMgaGRrZXlYUHJ2UHVibGljKHNlcmlhbGl6ZWQ6IHN0cmluZyk6IFByb21pc2U8c3RyaW5nPiB7XG4gICAgICAgIHJldHVybiB0aGlzLnJlcXVlc3RMaWJyYXJ5KCdjcnlwdG8uaGRrZXkueHBydi5wdWJsaWMnLCB7IHNlcmlhbGl6ZWQgfSk7XG4gICAgfVxuXG59XG5cblRPTkNyeXB0b01vZHVsZS5tb2R1bGVOYW1lID0gJ1RPTkNyeXB0b01vZHVsZSc7XG4iXX0=