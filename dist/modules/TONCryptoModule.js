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

/* eslint-disable class-methods-use-this,prefer-object-spread */
var TONOutputEncoding = {
  Text: 'Text',
  Hex: 'Hex',
  HexUppercase: 'HexUppercase',
  Base64: 'Base64'
};
exports.TONOutputEncoding = TONOutputEncoding;

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
                  message: fixInputMessage(message),
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
        var fixed;
        return _regenerator["default"].wrap(function _callee7$(_context7) {
          while (1) {
            switch (_context7.prev = _context7.next) {
              case 0:
                fixed = Object.assign({}, params);
                fixed.password = fixInputMessage(params.password);
                fixed.salt = fixInputMessage(params.salt);
                return _context7.abrupt("return", this.requestLibrary('crypto.scrypt', fixed));

              case 4:
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
        var fixed;
        return _regenerator["default"].wrap(function _callee12$(_context12) {
          while (1) {
            switch (_context12.prev = _context12.next) {
              case 0:
                fixed = Object.assign({}, params);
                fixed.message = fixInputMessage(params.message);
                return _context12.abrupt("return", this.requestLibrary('crypto.nacl.box', fixed));

              case 3:
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
        var fixed;
        return _regenerator["default"].wrap(function _callee13$(_context13) {
          while (1) {
            switch (_context13.prev = _context13.next) {
              case 0:
                fixed = Object.assign({}, params);
                fixed.message = fixInputMessage(params.message);
                return _context13.abrupt("return", this.requestLibrary('crypto.nacl.box.open', fixed));

              case 3:
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
        var fixed;
        return _regenerator["default"].wrap(function _callee14$(_context14) {
          while (1) {
            switch (_context14.prev = _context14.next) {
              case 0:
                fixed = Object.assign({}, params);
                fixed.message = fixInputMessage(params.message);
                return _context14.abrupt("return", this.requestLibrary('crypto.nacl.secret.box', fixed));

              case 3:
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
        var fixed;
        return _regenerator["default"].wrap(function _callee15$(_context15) {
          while (1) {
            switch (_context15.prev = _context15.next) {
              case 0:
                fixed = Object.assign({}, params);
                fixed.message = fixInputMessage(params.message);
                return _context15.abrupt("return", this.requestLibrary('crypto.nacl.secret.box.open', fixed));

              case 3:
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
                  message: fixInputMessage(message),
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy9tb2R1bGVzL1RPTkNyeXB0b01vZHVsZS5qcyJdLCJuYW1lcyI6WyJUT05PdXRwdXRFbmNvZGluZyIsIlRleHQiLCJIZXgiLCJIZXhVcHBlcmNhc2UiLCJCYXNlNjQiLCJmaXhJbnB1dE1lc3NhZ2UiLCJtZXNzYWdlIiwidGV4dCIsImJhc2U2NCIsIkJ1ZmZlciIsImZyb20iLCJ0b1N0cmluZyIsIlRPTkNyeXB0b01vZHVsZSIsImNoYWxsZW5nZUhleCIsInJlcXVlc3RMaWJyYXJ5IiwiYmFzZUhleCIsImV4cG9uZW50SGV4IiwibW9kdWx1c0hleCIsImJhc2UiLCJleHBvbmVudCIsIm1vZHVsdXMiLCJsZW5ndGgiLCJvdXRwdXRFbmNvZGluZyIsInBhcmFtcyIsImZpeGVkIiwiT2JqZWN0IiwiYXNzaWduIiwicGFzc3dvcmQiLCJzYWx0Iiwic2VjcmV0S2V5Iiwia2V5IiwiZW50cm9weUhleCIsImVudHJvcHkiLCJoZXgiLCJwaHJhc2UiLCJzZXJpYWxpemVkIiwiaW5kZXgiLCJoYXJkZW5lZCIsImNvbXBsaWFudCIsInBhdGgiLCJUT05Nb2R1bGUiLCJtb2R1bGVOYW1lIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQW1CQTs7QUFuQkE7Ozs7Ozs7Ozs7Ozs7Ozs7QUFpQkE7QUFTTyxJQUFNQSxpQkFBaUIsR0FBRztBQUM3QkMsRUFBQUEsSUFBSSxFQUFFLE1BRHVCO0FBRTdCQyxFQUFBQSxHQUFHLEVBQUUsS0FGd0I7QUFHN0JDLEVBQUFBLFlBQVksRUFBRSxjQUhlO0FBSTdCQyxFQUFBQSxNQUFNLEVBQUU7QUFKcUIsQ0FBMUI7OztBQTZDUCxTQUFTQyxlQUFULENBQXlCQyxPQUF6QixFQUFvRTtBQUNoRSxTQUFPQSxPQUFPLENBQUNDLElBQVIsR0FDRDtBQUNFQyxJQUFBQSxNQUFNLEVBQUVDLE1BQU0sQ0FBQ0MsSUFBUCxDQUFZSixPQUFPLENBQUNDLElBQXBCLEVBQTBCLE1BQTFCLEVBQ0hJLFFBREcsQ0FD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QUVPLEtBQUt4QixjQUFMLENBQ0gsMEJBREcsRUFFSDtBQUNJcUIsa0JBQUFBLFVBQVUsRUFBVkEsVUFESjtBQUVJQyxrQkFBQUEsS0FBSyxFQUFMQSxLQUZKO0FBR0lDLGtCQUFBQSxRQUFRLEVBQVJBLFFBSEo7QUFJSUMsa0JBQUFBLFNBQVMsRUFBVEE7QUFKSixpQkFGRyxDOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7c0RBWVBILFUsRUFDQUksSSxFQUNBRCxTOzs7OzttREFFTyxLQUFLeEIsY0FBTCxDQUNILCtCQURHLEVBRUg7QUFDSXFCLGtCQUFBQSxVQUFVLEVBQVZBLFVBREo7QUFFSUksa0JBQUFBLElBQUksRUFBSkEsSUFGSjtBQUdJRCxrQkFBQUEsU0FBUyxFQUFUQTtBQUhKLGlCQUZHLEM7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztzREFVV0gsVTs7Ozs7bURBQ1gsS0FBS3JCLGNBQUwsQ0FBb0IsMEJBQXBCLEVBQWdEO0FBQUVxQixrQkFBQUEsVUFBVSxFQUFWQTtBQUFGLGlCQUFoRCxDOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7c0RBR1dBLFU7Ozs7O21EQUNYLEtBQUtyQixjQUFMLENBQW9CLDBCQUFwQixFQUFnRDtBQUFFcUIsa0JBQUFBLFVBQVUsRUFBVkE7QUFBRixpQkFBaEQsQzs7Ozs7Ozs7Ozs7Ozs7Ozs7O0VBN004QksscUI7OztBQWtON0M1QixlQUFlLENBQUM2QixVQUFoQixHQUE2QixpQkFBN0IiLCJzb3VyY2VzQ29udGVudCI6WyIvKlxuICogQ29weXJpZ2h0IDIwMTgtMjAxOSBUT04gREVWIFNPTFVUSU9OUyBMVEQuXG4gKlxuICogTGljZW5zZWQgdW5kZXIgdGhlIFNPRlRXQVJFIEVWQUxVQVRJT04gTGljZW5zZSAodGhlIFwiTGljZW5zZVwiKTsgeW91IG1heSBub3QgdXNlXG4gKiB0aGlzIGZpbGUgZXhjZXB0IGluIGNvbXBsaWFuY2Ugd2l0aCB0aGUgTGljZW5zZS4gIFlvdSBtYXkgb2J0YWluIGEgY29weSBvZiB0aGVcbiAqIExpY2Vuc2UgYXQ6XG4gKlxuICogaHR0cDovL3d3dy50b24uZGV2L2xpY2Vuc2VzXG4gKlxuICogVW5sZXNzIHJlcXVpcmVkIGJ5IGFwcGxpY2FibGUgbGF3IG9yIGFncmVlZCB0byBpbiB3cml0aW5nLCBzb2Z0d2FyZVxuICogZGlzdHJpYnV0ZWQgdW5kZXIgdGhlIExpY2Vuc2UgaXMgZGlzdHJpYnV0ZWQgb24gYW4gXCJBUyBJU1wiIEJBU0lTLFxuICogV0lUSE9VVCBXQVJSQU5USUVTIE9SIENPTkRJVElPTlMgT0YgQU5ZIEtJTkQsIGVpdGhlciBleHByZXNzIG9yIGltcGxpZWQuXG4gKiBTZWUgdGhlIExpY2Vuc2UgZm9yIHRoZSBzcGVjaWZpYyBUT04gREVWIHNvZnR3YXJlIGdvdmVybmluZyBwZXJtaXNzaW9ucyBhbmRcbiAqIGxpbWl0YXRpb25zIHVuZGVyIHRoZSBMaWNlbnNlLlxuICovXG5cbi8vIEBmbG93XG4vKiBlc2xpbnQtZGlzYWJsZSBjbGFzcy1tZXRob2RzLXVzZS10aGlzLHByZWZlci1vYmplY3Qtc3ByZWFkICovXG5cbmltcG9ydCB7IFRPTk1vZHVsZSB9IGZyb20gJy4uL1RPTk1vZHVsZSc7XG5cbmV4cG9ydCB0eXBlIFRPTktleVBhaXJEYXRhID0ge1xuICAgIHNlY3JldDogc3RyaW5nLFxuICAgIHB1YmxpYzogc3RyaW5nLFxufVxuXG5leHBvcnQgY29uc3QgVE9OT3V0cHV0RW5jb2RpbmcgPSB7XG4gICAgVGV4dDogJ1RleHQnLFxuICAgIEhleDogJ0hleCcsXG4gICAgSGV4VXBwZXJjYXNlOiAnSGV4VXBwZXJjYXNlJyxcbiAgICBCYXNlNjQ6ICdCYXNlNjQnLFxufTtcblxuZXhwb3J0IHR5cGUgVE9OT3V0cHV0RW5jb2RpbmdUeXBlID0gJEtleXM8dHlwZW9mIFRPTk91dHB1dEVuY29kaW5nPjtcblxuZXhwb3J0IHR5cGUgVE9OSW5wdXRNZXNzYWdlID0ge1xuICAgIHRleHQ/OiBzdHJpbmcsXG4gICAgaGV4Pzogc3RyaW5nLFxuICAgIGJhc2U2ND86IHN0cmluZ1xufVxuXG5leHBvcnQgdHlwZSBUT05GYWN0b3JpemVSZXN1bHQgPSB7XG4gICAgYTogc3RyaW5nLFxuICAgIGI6IHN0cmluZ1xufVxuXG5leHBvcnQgdHlwZSBUT05TY3J5cHRQYXJhbXMgPSB7XG4gICAgcGFzc3dvcmQ6IFRPTklucHV0TWVzc2FnZSxcbiAgICBzYWx0OiBUT05JbnB1dE1lc3NhZ2UsXG4gICAgbG9nTjogbnVtYmVyLFxuICAgIHI6IG51bWJlcixcbiAgICBwOiBudW1iZXIsXG4gICAgZGtMZW46IG51bWJlcixcbiAgICBvdXRwdXRFbmNvZGluZz86IFRPTk91dHB1dEVuY29kaW5nVHlwZSwgLy8gZGVmYXVsdCBIZXhcbn1cblxuZXhwb3J0IHR5cGUgVE9OTmFjbEJveFBhcmFtcyA9IHtcbiAgICBtZXNzYWdlOiBUT05JbnB1dE1lc3NhZ2UsXG4gICAgbm9uY2U6IHN0cmluZyxcbiAgICB0aGVpclB1YmxpY0tleTogc3RyaW5nLFxuICAgIHNlY3JldEtleTogc3RyaW5nLFxuICAgIG91dHB1dEVuY29kaW5nPzogVE9OT3V0cHV0RW5jb2RpbmdUeXBlLCAvLyBkZWZhdWx0IEhleFxufVxuXG5leHBvcnQgdHlwZSBUT05OYWNsU2VjcmV0Qm94UGFyYW1zID0ge1xuICAgIG1lc3NhZ2U6IFRPTklucHV0TWVzc2FnZSxcbiAgICBub25jZTogc3RyaW5nLFxuICAgIGtleTogc3RyaW5nLFxuICAgIG91dHB1dEVuY29kaW5nPzogVE9OT3V0cHV0RW5jb2RpbmdUeXBlLCAvLyBkZWZhdWx0IEhleFxufVxuXG5mdW5jdGlvbiBmaXhJbnB1dE1lc3NhZ2UobWVzc2FnZTogVE9OSW5wdXRNZXNzYWdlKTogVE9OSW5wdXRNZXNzYWdlIHtcbiAgICByZXR1cm4gbWVzc2FnZS50ZXh0XG4gICAgICAgID8ge1xuICAgICAgICAgICAgYmFzZTY0OiBCdWZmZXIuZnJvbShtZXNzYWdlLnRleHQsICd1dGY4JylcbiAgICAgICAgICAgICAgICAudG9TdHJpbmcoJ2Jhc2U2NCcpLFxuICAgICAgICB9XG4gICAgICAgIDogbWVzc2FnZTtcbn1cblxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgVE9OQ3J5cHRvTW9kdWxlIGV4dGVuZHMgVE9OTW9kdWxlIHtcbiAgICBhc3luYyBmYWN0b3JpemUoY2hhbGxlbmdlSGV4OiBzdHJpbmcpOiBQcm9taXNlPFRPTkZhY3Rvcml6ZVJlc3VsdD4ge1xuICAgICAgICByZXR1cm4gdGhpcy5yZXF1ZXN0TGlicmFyeSgnY3J5cHRvLm1hdGguZmFjdG9yaXplJywgY2hhbGxlbmdlSGV4KTtcbiAgICB9XG5cbiAgICBhc3luYyBtb2R1bGFyUG93ZXIoXG4gICAgICAgIGJhc2VIZXg6IHN0cmluZyxcbiAgICAgICAgZXhwb25lbnRIZXg6IHN0cmluZyxcbiAgICAgICAgbW9kdWx1c0hleDogc3RyaW5nLFxuICAgICk6IFByb21pc2U8c3RyaW5nPiB7XG4gICAgICAgIHJldHVybiB0aGlzLnJlcXVlc3RMaWJyYXJ5KCdjcnlwdG8ubWF0aC5tb2R1bGFyUG93ZXInLCB7XG4gICAgICAgICAgICBiYXNlOiBiYXNlSGV4LFxuICAgICAgICAgICAgZXhwb25lbnQ6IGV4cG9uZW50SGV4LFxuICAgICAgICAgICAgbW9kdWx1czogbW9kdWx1c0hleCxcbiAgICAgICAgfSk7XG4gICAgfVxuXG4gICAgYXN5bmMgcmFuZG9tR2VuZXJhdGVCeXRlcyhcbiAgICAgICAgbGVuZ3RoOiBudW1iZXIsXG4gICAgICAgIG91dHB1dEVuY29kaW5nOiBUT05PdXRwdXRFbmNvZGluZ1R5cGUgPSBUT05PdXRwdXRFbmNvZGluZy5IZXgsXG4gICAgKTogUHJvbWlzZTxzdHJpbmc+IHtcbiAgICAgICAgcmV0dXJuIHRoaXMucmVxdWVzdExpYnJhcnkoJ2NyeXB0by5yYW5kb20uZ2VuZXJhdGVCeXRlcycsIHtcbiAgICAgICAgICAgIGxlbmd0aCxcbiAgICAgICAgICAgIG91dHB1dEVuY29kaW5nLFxuICAgICAgICB9KTtcbiAgICB9XG5cblxuICAgIGFzeW5jIGVkMjU1MTlLZXlwYWlyKCk6IFByb21pc2U8VE9OS2V5UGFpckRhdGE+IHtcbiAgICAgICAgcmV0dXJuIHRoaXMucmVxdWVzdExpYnJhcnkoJ2NyeXB0by5lZDI1NTE5LmtleXBhaXInKTtcbiAgICB9XG5cbiAgICBhc3luYyBzaGE1MTIoXG4gICAgICAgIG1lc3NhZ2U6IFRPTklucHV0TWVzc2FnZSxcbiAgICAgICAgb3V0cHV0RW5jb2Rpbmc6IFRPTk91dHB1dEVuY29kaW5nVHlwZSA9IFRPTk91dHB1dEVuY29kaW5nLkhleCxcbiAgICApOiBQcm9taXNlPHN0cmluZz4ge1xuICAgICAgICByZXR1cm4gdGhpcy5yZXF1ZXN0TGlicmFyeShcbiAgICAgICAgICAgICdjcnlwdG8uc2hhNTEyJyxcbiAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICBtZXNzYWdlOiBmaXhJbnB1dE1lc3NhZ2UobWVzc2FnZSksXG4gICAgICAgICAgICAgICAgb3V0cHV0RW5jb2RpbmcsXG4gICAgICAgICAgICB9LFxuICAgICAgICApO1xuICAgIH1cblxuICAgIGFzeW5jIHNoYTI1NihcbiAgICAgICAgbWVzc2FnZTogVE9OSW5wdXRNZXNzYWdlLFxuICAgICAgICBvdXRwdXRFbmNvZGluZzogVE9OT3V0cHV0RW5jb2RpbmdUeXBlID0gVE9OT3V0cHV0RW5jb2RpbmcuSGV4LFxuICAgICk6IFByb21pc2U8c3RyaW5nPiB7XG4gICAgICAgIHJldHVybiB0aGlzLnJlcXVlc3RMaWJyYXJ5KFxuICAgICAgICAgICAgJ2NyeXB0by5zaGEyNTYnLFxuICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgIG1lc3NhZ2U6IGZpeElucHV0TWVzc2FnZShtZXNzYWdlKSxcbiAgICAgICAgICAgICAgICBvdXRwdXRFbmNvZGluZyxcbiAgICAgICAgICAgIH0sXG4gICAgICAgICk7XG4gICAgfVxuXG4gICAgYXN5bmMgc2NyeXB0KHBhcmFtczogVE9OU2NyeXB0UGFyYW1zKTogUHJvbWlzZTxzdHJpbmc+IHtcbiAgICAgICAgY29uc3QgZml4ZWQ6IFRPTlNjcnlwdFBhcmFtcyA9IChPYmplY3QuYXNzaWduKHt9LCBwYXJhbXMpOiBhbnkpO1xuICAgICAgICBmaXhlZC5wYXNzd29yZCA9IGZpeElucHV0TWVzc2FnZShwYXJhbXMucGFzc3dvcmQpO1xuICAgICAgICBmaXhlZC5zYWx0ID0gZml4SW5wdXRNZXNzYWdlKHBhcmFtcy5zYWx0KTtcbiAgICAgICAgcmV0dXJuIHRoaXMucmVxdWVzdExpYnJhcnkoJ2NyeXB0by5zY3J5cHQnLCBmaXhlZCk7XG4gICAgfVxuXG4gICAgYXN5bmMgbmFjbEJveEtleXBhaXIoKTogUHJvbWlzZTxUT05LZXlQYWlyRGF0YT4ge1xuICAgICAgICByZXR1cm4gdGhpcy5yZXF1ZXN0TGlicmFyeSgnY3J5cHRvLm5hY2wuYm94LmtleXBhaXInKTtcbiAgICB9XG5cbiAgICBhc3luYyBuYWNsQm94S2V5cGFpckZyb21TZWNyZXRLZXkoc2VjcmV0S2V5OiBzdHJpbmcpOiBQcm9taXNlPFRPTktleVBhaXJEYXRhPiB7XG4gICAgICAgIHJldHVybiB0aGlzLnJlcXVlc3RMaWJyYXJ5KCdjcnlwdG8ubmFjbC5ib3gua2V5cGFpci5mcm9tU2VjcmV0S2V5Jywgc2VjcmV0S2V5KTtcbiAgICB9XG5cbiAgICBhc3luYyBuYWNsU2lnbktleXBhaXIoKTogUHJvbWlzZTxUT05LZXlQYWlyRGF0YT4ge1xuICAgICAgICByZXR1cm4gdGhpcy5yZXF1ZXN0TGlicmFyeSgnY3J5cHRvLm5hY2wuc2lnbi5rZXlwYWlyJyk7XG4gICAgfVxuXG4gICAgYXN5bmMgbmFjbFNpZ25LZXlwYWlyRnJvbVNlY3JldEtleShzZWNyZXRLZXk6IHN0cmluZyk6IFByb21pc2U8VE9OS2V5UGFpckRhdGE+IHtcbiAgICAgICAgcmV0dXJuIHRoaXMucmVxdWVzdExpYnJhcnkoJ2NyeXB0by5uYWNsLnNpZ24ua2V5cGFpci5mcm9tU2VjcmV0S2V5Jywgc2VjcmV0S2V5KTtcbiAgICB9XG5cbiAgICBhc3luYyBuYWNsQm94KHBhcmFtczogVE9OTmFjbEJveFBhcmFtcyk6IFByb21pc2U8c3RyaW5nPiB7XG4gICAgICAgIGNvbnN0IGZpeGVkOiBUT05OYWNsQm94UGFyYW1zID0gKE9iamVjdC5hc3NpZ24oe30sIHBhcmFtcyk6IGFueSk7XG4gICAgICAgIGZpeGVkLm1lc3NhZ2UgPSBmaXhJbnB1dE1lc3NhZ2UocGFyYW1zLm1lc3NhZ2UpO1xuICAgICAgICByZXR1cm4gdGhpcy5yZXF1ZXN0TGlicmFyeSgnY3J5cHRvLm5hY2wuYm94JywgZml4ZWQpO1xuICAgIH1cblxuICAgIGFzeW5jIG5hY2xCb3hPcGVuKHBhcmFtczogVE9OTmFjbEJveFBhcmFtcyk6IFByb21pc2U8c3RyaW5nPiB7XG4gICAgICAgIGNvbnN0IGZpeGVkOiBUT05OYWNsQm94UGFyYW1zID0gKE9iamVjdC5hc3NpZ24oe30sIHBhcmFtcyk6IGFueSk7XG4gICAgICAgIGZpeGVkLm1lc3NhZ2UgPSBmaXhJbnB1dE1lc3NhZ2UocGFyYW1zLm1lc3NhZ2UpO1xuICAgICAgICByZXR1cm4gdGhpcy5yZXF1ZXN0TGlicmFyeSgnY3J5cHRvLm5hY2wuYm94Lm9wZW4nLCBmaXhlZCk7XG4gICAgfVxuXG4gICAgYXN5bmMgbmFjbFNlY3JldEJveChwYXJhbXM6IFRPTk5hY2xTZWNyZXRCb3hQYXJhbXMpOiBQcm9taXNlPHN0cmluZz4ge1xuICAgICAgICBjb25zdCBmaXhlZDogVE9OTmFjbEJveFBhcmFtcyA9IChPYmplY3QuYXNzaWduKHt9LCBwYXJhbXMpOiBhbnkpO1xuICAgICAgICBmaXhlZC5tZXNzYWdlID0gZml4SW5wdXRNZXNzYWdlKHBhcmFtcy5tZXNzYWdlKTtcbiAgICAgICAgcmV0dXJuIHRoaXMucmVxdWVzdExpYnJhcnkoJ2NyeXB0by5uYWNsLnNlY3JldC5ib3gnLCBmaXhlZCk7XG4gICAgfVxuXG4gICAgYXN5bmMgbmFjbFNlY3JldEJveE9wZW4ocGFyYW1zOiBUT05OYWNsU2VjcmV0Qm94UGFyYW1zKTogUHJvbWlzZTxzdHJpbmc+IHtcbiAgICAgICAgY29uc3QgZml4ZWQ6IFRPTk5hY2xCb3hQYXJhbXMgPSAoT2JqZWN0LmFzc2lnbih7fSwgcGFyYW1zKTogYW55KTtcbiAgICAgICAgZml4ZWQubWVzc2FnZSA9IGZpeElucHV0TWVzc2FnZShwYXJhbXMubWVzc2FnZSk7XG4gICAgICAgIHJldHVybiB0aGlzLnJlcXVlc3RMaWJyYXJ5KCdjcnlwdG8ubmFjbC5zZWNyZXQuYm94Lm9wZW4nLCBmaXhlZCk7XG4gICAgfVxuXG4gICAgYXN5bmMgbmFjbFNpZ24oXG4gICAgICAgIG1lc3NhZ2U6IFRPTklucHV0TWVzc2FnZSxcbiAgICAgICAga2V5OiBzdHJpbmcsXG4gICAgICAgIG91dHB1dEVuY29kaW5nOiBUT05PdXRwdXRFbmNvZGluZ1R5cGUgPSBUT05PdXRwdXRFbmNvZGluZy5IZXgsXG4gICAgKTogUHJvbWlzZTxzdHJpbmc+IHtcbiAgICAgICAgcmV0dXJuIHRoaXMucmVxdWVzdExpYnJhcnkoJ2NyeXB0by5uYWNsLnNpZ24nLCB7XG4gICAgICAgICAgICBtZXNzYWdlOiBmaXhJbnB1dE1lc3NhZ2UobWVzc2FnZSksXG4gICAgICAgICAgICBrZXksXG4gICAgICAgICAgICBvdXRwdXRFbmNvZGluZyxcbiAgICAgICAgfSk7XG4gICAgfVxuXG4gICAgYXN5bmMgbmFjbFNpZ25PcGVuKFxuICAgICAgICBtZXNzYWdlOiBUT05JbnB1dE1lc3NhZ2UsXG4gICAgICAgIGtleTogc3RyaW5nLFxuICAgICAgICBvdXRwdXRFbmNvZGluZzogVE9OT3V0cHV0RW5jb2RpbmdUeXBlID0gVE9OT3V0cHV0RW5jb2RpbmcuSGV4LFxuICAgICk6IFByb21pc2U8c3RyaW5nPiB7XG4gICAgICAgIHJldHVybiB0aGlzLnJlcXVlc3RMaWJyYXJ5KCdjcnlwdG8ubmFjbC5zaWduLm9wZW4nLCB7XG4gICAgICAgICAgICBtZXNzYWdlOiBmaXhJbnB1dE1lc3NhZ2UobWVzc2FnZSksXG4gICAgICAgICAgICBrZXksXG4gICAgICAgICAgICBvdXRwdXRFbmNvZGluZyxcbiAgICAgICAgfSk7XG4gICAgfVxuXG4gICAgYXN5bmMgbmFjbFNpZ25EZXRhY2hlZChcbiAgICAgICAgbWVzc2FnZTogVE9OSW5wdXRNZXNzYWdlLFxuICAgICAgICBrZXk6IHN0cmluZyxcbiAgICAgICAgb3V0cHV0RW5jb2Rpbmc6IFRPTk91dHB1dEVuY29kaW5nVHlwZSA9IFRPTk91dHB1dEVuY29kaW5nLkhleCxcbiAgICApOiBQcm9taXNlPHN0cmluZz4ge1xuICAgICAgICByZXR1cm4gdGhpcy5yZXF1ZXN0TGlicmFyeSgnY3J5cHRvLm5hY2wuc2lnbi5kZXRhY2hlZCcsIHtcbiAgICAgICAgICAgIG1lc3NhZ2U6IGZpeElucHV0TWVzc2FnZShtZXNzYWdlKSxcbiAgICAgICAgICAgIGtleSxcbiAgICAgICAgICAgIG91dHB1dEVuY29kaW5nLFxuICAgICAgICB9KTtcbiAgICB9XG5cbiAgICAvLyBNbmVtb25pY1xuXG4gICAgYXN5bmMgbW5lbW9uaWNXb3JkcygpOiBQcm9taXNlPHN0cmluZz4ge1xuICAgICAgICByZXR1cm4gdGhpcy5yZXF1ZXN0TGlicmFyeSgnY3J5cHRvLm1uZW1vbmljLndvcmRzJyk7XG4gICAgfVxuXG4gICAgYXN5bmMgbW5lbW9uaWNGcm9tUmFuZG9tKCk6IFByb21pc2U8c3RyaW5nPiB7XG4gICAgICAgIHJldHVybiB0aGlzLnJlcXVlc3RMaWJyYXJ5KCdjcnlwdG8ubW5lbW9uaWMuZnJvbS5yYW5kb20nKTtcbiAgICB9XG5cbiAgICBhc3luYyBtbmVtb25pY0Zyb21FbnRyb3B5KGVudHJvcHlIZXg6IHN0cmluZyk6IFByb21pc2U8c3RyaW5nPiB7XG4gICAgICAgIHJldHVybiB0aGlzLnJlcXVlc3RMaWJyYXJ5KFxuICAgICAgICAgICAgJ2NyeXB0by5tbmVtb25pYy5mcm9tLmVudHJvcHknLFxuICAgICAgICAgICAgeyBlbnRyb3B5OiB7IGhleDogZW50cm9weUhleCB9IH0sXG4gICAgICAgICk7XG4gICAgfVxuXG4gICAgYXN5bmMgbW5lbW9uaWNJc1ZhbGlkKHBocmFzZTogc3RyaW5nKTogUHJvbWlzZTxib29sZWFuPiB7XG4gICAgICAgIHJldHVybiB0aGlzLnJlcXVlc3RMaWJyYXJ5KCdjcnlwdG8ubW5lbW9uaWMudmVyaWZ5JywgeyBwaHJhc2UgfSk7XG4gICAgfVxuXG4gICAgLy8gSERLZXlzXG5cbiAgICBhc3luYyBoZGtleVhQcnZGcm9tTW5lbW9uaWMocGhyYXNlOiBzdHJpbmcpOiBQcm9taXNlPHN0cmluZz4ge1xuICAgICAgICByZXR1cm4gdGhpcy5yZXF1ZXN0TGlicmFyeSgnY3J5cHRvLmhka2V5LnhwcnYuZnJvbS5tbmVtb25pYycsIHsgcGhyYXNlIH0pO1xuICAgIH1cblxuICAgIGFzeW5jIGhka2V5WFBydkRlcml2ZShcbiAgICAgICAgc2VyaWFsaXplZDogc3RyaW5nLFxuICAgICAgICBpbmRleDogbnVtYmVyLFxuICAgICAgICBoYXJkZW5lZDogYm9vbGVhbixcbiAgICAgICAgY29tcGxpYW50OiBib29sZWFuLFxuICAgICk6IFByb21pc2U8c3RyaW5nPiB7XG4gICAgICAgIHJldHVybiB0aGlzLnJlcXVlc3RMaWJyYXJ5KFxuICAgICAgICAgICAgJ2NyeXB0by5oZGtleS54cHJ2LmRlcml2ZScsXG4gICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgc2VyaWFsaXplZCxcbiAgICAgICAgICAgICAgICBpbmRleCxcbiAgICAgICAgICAgICAgICBoYXJkZW5lZCxcbiAgICAgICAgICAgICAgICBjb21wbGlhbnQsXG4gICAgICAgICAgICB9LFxuICAgICAgICApO1xuICAgIH1cblxuICAgIGFzeW5jIGhka2V5WFBydkRlcml2ZVBhdGgoXG4gICAgICAgIHNlcmlhbGl6ZWQ6IHN0cmluZyxcbiAgICAgICAgcGF0aDogc3RyaW5nLFxuICAgICAgICBjb21wbGlhbnQ6IGJvb2xlYW4sXG4gICAgKTogUHJvbWlzZTxzdHJpbmc+IHtcbiAgICAgICAgcmV0dXJuIHRoaXMucmVxdWVzdExpYnJhcnkoXG4gICAgICAgICAgICAnY3J5cHRvLmhka2V5LnhwcnYuZGVyaXZlLnBhdGgnLFxuICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgIHNlcmlhbGl6ZWQsXG4gICAgICAgICAgICAgICAgcGF0aCxcbiAgICAgICAgICAgICAgICBjb21wbGlhbnQsXG4gICAgICAgICAgICB9LFxuICAgICAgICApO1xuICAgIH1cblxuICAgIGFzeW5jIGhka2V5WFBydlNlY3JldChzZXJpYWxpemVkOiBzdHJpbmcpOiBQcm9taXNlPHN0cmluZz4ge1xuICAgICAgICByZXR1cm4gdGhpcy5yZXF1ZXN0TGlicmFyeSgnY3J5cHRvLmhka2V5LnhwcnYuc2VjcmV0JywgeyBzZXJpYWxpemVkIH0pO1xuICAgIH1cblxuICAgIGFzeW5jIGhka2V5WFBydlB1YmxpYyhzZXJpYWxpemVkOiBzdHJpbmcpOiBQcm9taXNlPHN0cmluZz4ge1xuICAgICAgICByZXR1cm4gdGhpcy5yZXF1ZXN0TGlicmFyeSgnY3J5cHRvLmhka2V5LnhwcnYucHVibGljJywgeyBzZXJpYWxpemVkIH0pO1xuICAgIH1cblxufVxuXG5UT05DcnlwdG9Nb2R1bGUubW9kdWxlTmFtZSA9ICdUT05DcnlwdG9Nb2R1bGUnO1xuIl19