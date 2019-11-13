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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy9tb2R1bGVzL1RPTkNyeXB0b01vZHVsZS5qcyJdLCJuYW1lcyI6WyJUT05PdXRwdXRFbmNvZGluZyIsIlRleHQiLCJIZXgiLCJIZXhVcHBlcmNhc2UiLCJCYXNlNjQiLCJmaXhJbnB1dE1lc3NhZ2UiLCJtZXNzYWdlIiwidGV4dCIsImJhc2U2NCIsIkJ1ZmZlciIsImZyb20iLCJ0b1N0cmluZyIsIlRPTkNyeXB0b01vZHVsZSIsImNoYWxsZW5nZUhleCIsInJlcXVlc3RMaWJyYXJ5IiwiYmFzZUhleCIsImV4cG9uZW50SGV4IiwibW9kdWx1c0hleCIsImJhc2UiLCJleHBvbmVudCIsIm1vZHVsdXMiLCJsZW5ndGgiLCJvdXRwdXRFbmNvZGluZyIsInBhcmFtcyIsImZpeGVkIiwiT2JqZWN0IiwiYXNzaWduIiwicGFzc3dvcmQiLCJzYWx0Iiwic2VjcmV0S2V5Iiwia2V5IiwiZW50cm9weUhleCIsImVudHJvcHkiLCJoZXgiLCJwaHJhc2UiLCJzZXJpYWxpemVkIiwiaW5kZXgiLCJoYXJkZW5lZCIsImNvbXBsaWFudCIsInBhdGgiLCJUT05Nb2R1bGUiLCJtb2R1bGVOYW1lIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQTRCQTs7QUE1QkE7Ozs7Ozs7Ozs7Ozs7Ozs7QUFpQkE7QUFhTyxJQUFNQSxpQkFBaUIsR0FBRztBQUM3QkMsRUFBQUEsSUFBSSxFQUFFLE1BRHVCO0FBRTdCQyxFQUFBQSxHQUFHLEVBQUUsS0FGd0I7QUFHN0JDLEVBQUFBLFlBQVksRUFBRSxjQUhlO0FBSTdCQyxFQUFBQSxNQUFNLEVBQUU7QUFKcUIsQ0FBMUI7OztBQVFQLFNBQVNDLGVBQVQsQ0FBeUJDLE9BQXpCLEVBQW9FO0FBQ2hFLFNBQU9BLE9BQU8sQ0FBQ0MsSUFBUixHQUNEO0FBQ0VDLElBQUFBLE1BQU0sRUFBRUMsTUFBTSxDQUFDQyxJQUFQLENBQVlKLE9BQU8sQ0FBQ0MsSUFBcEIsRUFBMEIsTUFBMUIsRUFDSEksUUFERyxDQUNN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RU8sS0FBS3hCLGNBQUwsQ0FDSCwwQkFERyxFQUVIO0FBQ0lxQixrQkFBQUEsVUFBVSxFQUFWQSxVQURKO0FBRUlDLGtCQUFBQSxLQUFLLEVBQUxBLEtBRko7QUFHSUMsa0JBQUFBLFFBQVEsRUFBUkEsUUFISjtBQUlJQyxrQkFBQUEsU0FBUyxFQUFUQTtBQUpKLGlCQUZHLEM7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztzREFZUEgsVSxFQUNBSSxJLEVBQ0FELFM7Ozs7O21EQUVPLEtBQUt4QixjQUFMLENBQ0gsK0JBREcsRUFFSDtBQUNJcUIsa0JBQUFBLFVBQVUsRUFBVkEsVUFESjtBQUVJSSxrQkFBQUEsSUFBSSxFQUFKQSxJQUZKO0FBR0lELGtCQUFBQSxTQUFTLEVBQVRBO0FBSEosaUJBRkcsQzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O3NEQVVXSCxVOzs7OzttREFDWCxLQUFLckIsY0FBTCxDQUFvQiwwQkFBcEIsRUFBZ0Q7QUFBRXFCLGtCQUFBQSxVQUFVLEVBQVZBO0FBQUYsaUJBQWhELEM7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztzREFHV0EsVTs7Ozs7bURBQ1gsS0FBS3JCLGNBQUwsQ0FBb0IsMEJBQXBCLEVBQWdEO0FBQUVxQixrQkFBQUEsVUFBVSxFQUFWQTtBQUFGLGlCQUFoRCxDOzs7Ozs7Ozs7Ozs7Ozs7Ozs7RUE3TThCSyxxQjs7O0FBa043QzVCLGVBQWUsQ0FBQzZCLFVBQWhCLEdBQTZCLGlCQUE3QiIsInNvdXJjZXNDb250ZW50IjpbIi8qXG4gKiBDb3B5cmlnaHQgMjAxOC0yMDE5IFRPTiBERVYgU09MVVRJT05TIExURC5cbiAqXG4gKiBMaWNlbnNlZCB1bmRlciB0aGUgU09GVFdBUkUgRVZBTFVBVElPTiBMaWNlbnNlICh0aGUgXCJMaWNlbnNlXCIpOyB5b3UgbWF5IG5vdCB1c2VcbiAqIHRoaXMgZmlsZSBleGNlcHQgaW4gY29tcGxpYW5jZSB3aXRoIHRoZSBMaWNlbnNlLiAgWW91IG1heSBvYnRhaW4gYSBjb3B5IG9mIHRoZVxuICogTGljZW5zZSBhdDpcbiAqXG4gKiBodHRwOi8vd3d3LnRvbi5kZXYvbGljZW5zZXNcbiAqXG4gKiBVbmxlc3MgcmVxdWlyZWQgYnkgYXBwbGljYWJsZSBsYXcgb3IgYWdyZWVkIHRvIGluIHdyaXRpbmcsIHNvZnR3YXJlXG4gKiBkaXN0cmlidXRlZCB1bmRlciB0aGUgTGljZW5zZSBpcyBkaXN0cmlidXRlZCBvbiBhbiBcIkFTIElTXCIgQkFTSVMsXG4gKiBXSVRIT1VUIFdBUlJBTlRJRVMgT1IgQ09ORElUSU9OUyBPRiBBTlkgS0lORCwgZWl0aGVyIGV4cHJlc3Mgb3IgaW1wbGllZC5cbiAqIFNlZSB0aGUgTGljZW5zZSBmb3IgdGhlIHNwZWNpZmljIFRPTiBERVYgc29mdHdhcmUgZ292ZXJuaW5nIHBlcm1pc3Npb25zIGFuZFxuICogbGltaXRhdGlvbnMgdW5kZXIgdGhlIExpY2Vuc2UuXG4gKi9cblxuLy8gQGZsb3dcbi8qIGVzbGludC1kaXNhYmxlIGNsYXNzLW1ldGhvZHMtdXNlLXRoaXMscHJlZmVyLW9iamVjdC1zcHJlYWQgKi9cblxuaW1wb3J0IHR5cGUge1xuICAgIFRPTkZhY3Rvcml6ZVJlc3VsdCxcbiAgICBUT05JbnB1dE1lc3NhZ2UsXG4gICAgVE9OS2V5UGFpckRhdGEsXG4gICAgVE9OT3V0cHV0RW5jb2RpbmdUeXBlLFxuICAgIFRPTlNjcnlwdFBhcmFtcyxcbiAgICBUT05OYWNsQm94UGFyYW1zLFxuICAgIFRPTk5hY2xTZWNyZXRCb3hQYXJhbXMsXG59IGZyb20gXCIuLi8uLi90eXBlc1wiO1xuaW1wb3J0IHsgVE9OTW9kdWxlIH0gZnJvbSAnLi4vVE9OTW9kdWxlJztcblxuZXhwb3J0IGNvbnN0IFRPTk91dHB1dEVuY29kaW5nID0ge1xuICAgIFRleHQ6ICdUZXh0JyxcbiAgICBIZXg6ICdIZXgnLFxuICAgIEhleFVwcGVyY2FzZTogJ0hleFVwcGVyY2FzZScsXG4gICAgQmFzZTY0OiAnQmFzZTY0Jyxcbn07XG5cblxuZnVuY3Rpb24gZml4SW5wdXRNZXNzYWdlKG1lc3NhZ2U6IFRPTklucHV0TWVzc2FnZSk6IFRPTklucHV0TWVzc2FnZSB7XG4gICAgcmV0dXJuIG1lc3NhZ2UudGV4dFxuICAgICAgICA/IHtcbiAgICAgICAgICAgIGJhc2U2NDogQnVmZmVyLmZyb20obWVzc2FnZS50ZXh0LCAndXRmOCcpXG4gICAgICAgICAgICAgICAgLnRvU3RyaW5nKCdiYXNlNjQnKSxcbiAgICAgICAgfVxuICAgICAgICA6IG1lc3NhZ2U7XG59XG5cbmV4cG9ydCBkZWZhdWx0IGNsYXNzIFRPTkNyeXB0b01vZHVsZSBleHRlbmRzIFRPTk1vZHVsZSB7XG4gICAgYXN5bmMgZmFjdG9yaXplKGNoYWxsZW5nZUhleDogc3RyaW5nKTogUHJvbWlzZTxUT05GYWN0b3JpemVSZXN1bHQ+IHtcbiAgICAgICAgcmV0dXJuIHRoaXMucmVxdWVzdExpYnJhcnkoJ2NyeXB0by5tYXRoLmZhY3Rvcml6ZScsIGNoYWxsZW5nZUhleCk7XG4gICAgfVxuXG4gICAgYXN5bmMgbW9kdWxhclBvd2VyKFxuICAgICAgICBiYXNlSGV4OiBzdHJpbmcsXG4gICAgICAgIGV4cG9uZW50SGV4OiBzdHJpbmcsXG4gICAgICAgIG1vZHVsdXNIZXg6IHN0cmluZyxcbiAgICApOiBQcm9taXNlPHN0cmluZz4ge1xuICAgICAgICByZXR1cm4gdGhpcy5yZXF1ZXN0TGlicmFyeSgnY3J5cHRvLm1hdGgubW9kdWxhclBvd2VyJywge1xuICAgICAgICAgICAgYmFzZTogYmFzZUhleCxcbiAgICAgICAgICAgIGV4cG9uZW50OiBleHBvbmVudEhleCxcbiAgICAgICAgICAgIG1vZHVsdXM6IG1vZHVsdXNIZXgsXG4gICAgICAgIH0pO1xuICAgIH1cblxuICAgIGFzeW5jIHJhbmRvbUdlbmVyYXRlQnl0ZXMoXG4gICAgICAgIGxlbmd0aDogbnVtYmVyLFxuICAgICAgICBvdXRwdXRFbmNvZGluZzogVE9OT3V0cHV0RW5jb2RpbmdUeXBlID0gVE9OT3V0cHV0RW5jb2RpbmcuSGV4LFxuICAgICk6IFByb21pc2U8c3RyaW5nPiB7XG4gICAgICAgIHJldHVybiB0aGlzLnJlcXVlc3RMaWJyYXJ5KCdjcnlwdG8ucmFuZG9tLmdlbmVyYXRlQnl0ZXMnLCB7XG4gICAgICAgICAgICBsZW5ndGgsXG4gICAgICAgICAgICBvdXRwdXRFbmNvZGluZyxcbiAgICAgICAgfSk7XG4gICAgfVxuXG5cbiAgICBhc3luYyBlZDI1NTE5S2V5cGFpcigpOiBQcm9taXNlPFRPTktleVBhaXJEYXRhPiB7XG4gICAgICAgIHJldHVybiB0aGlzLnJlcXVlc3RMaWJyYXJ5KCdjcnlwdG8uZWQyNTUxOS5rZXlwYWlyJyk7XG4gICAgfVxuXG4gICAgYXN5bmMgc2hhNTEyKFxuICAgICAgICBtZXNzYWdlOiBUT05JbnB1dE1lc3NhZ2UsXG4gICAgICAgIG91dHB1dEVuY29kaW5nOiBUT05PdXRwdXRFbmNvZGluZ1R5cGUgPSBUT05PdXRwdXRFbmNvZGluZy5IZXgsXG4gICAgKTogUHJvbWlzZTxzdHJpbmc+IHtcbiAgICAgICAgcmV0dXJuIHRoaXMucmVxdWVzdExpYnJhcnkoXG4gICAgICAgICAgICAnY3J5cHRvLnNoYTUxMicsXG4gICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgbWVzc2FnZTogZml4SW5wdXRNZXNzYWdlKG1lc3NhZ2UpLFxuICAgICAgICAgICAgICAgIG91dHB1dEVuY29kaW5nLFxuICAgICAgICAgICAgfSxcbiAgICAgICAgKTtcbiAgICB9XG5cbiAgICBhc3luYyBzaGEyNTYoXG4gICAgICAgIG1lc3NhZ2U6IFRPTklucHV0TWVzc2FnZSxcbiAgICAgICAgb3V0cHV0RW5jb2Rpbmc6IFRPTk91dHB1dEVuY29kaW5nVHlwZSA9IFRPTk91dHB1dEVuY29kaW5nLkhleCxcbiAgICApOiBQcm9taXNlPHN0cmluZz4ge1xuICAgICAgICByZXR1cm4gdGhpcy5yZXF1ZXN0TGlicmFyeShcbiAgICAgICAgICAgICdjcnlwdG8uc2hhMjU2JyxcbiAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICBtZXNzYWdlOiBmaXhJbnB1dE1lc3NhZ2UobWVzc2FnZSksXG4gICAgICAgICAgICAgICAgb3V0cHV0RW5jb2RpbmcsXG4gICAgICAgICAgICB9LFxuICAgICAgICApO1xuICAgIH1cblxuICAgIGFzeW5jIHNjcnlwdChwYXJhbXM6IFRPTlNjcnlwdFBhcmFtcyk6IFByb21pc2U8c3RyaW5nPiB7XG4gICAgICAgIGNvbnN0IGZpeGVkOiBUT05TY3J5cHRQYXJhbXMgPSAoT2JqZWN0LmFzc2lnbih7fSwgcGFyYW1zKTogYW55KTtcbiAgICAgICAgZml4ZWQucGFzc3dvcmQgPSBmaXhJbnB1dE1lc3NhZ2UocGFyYW1zLnBhc3N3b3JkKTtcbiAgICAgICAgZml4ZWQuc2FsdCA9IGZpeElucHV0TWVzc2FnZShwYXJhbXMuc2FsdCk7XG4gICAgICAgIHJldHVybiB0aGlzLnJlcXVlc3RMaWJyYXJ5KCdjcnlwdG8uc2NyeXB0JywgZml4ZWQpO1xuICAgIH1cblxuICAgIGFzeW5jIG5hY2xCb3hLZXlwYWlyKCk6IFByb21pc2U8VE9OS2V5UGFpckRhdGE+IHtcbiAgICAgICAgcmV0dXJuIHRoaXMucmVxdWVzdExpYnJhcnkoJ2NyeXB0by5uYWNsLmJveC5rZXlwYWlyJyk7XG4gICAgfVxuXG4gICAgYXN5bmMgbmFjbEJveEtleXBhaXJGcm9tU2VjcmV0S2V5KHNlY3JldEtleTogc3RyaW5nKTogUHJvbWlzZTxUT05LZXlQYWlyRGF0YT4ge1xuICAgICAgICByZXR1cm4gdGhpcy5yZXF1ZXN0TGlicmFyeSgnY3J5cHRvLm5hY2wuYm94LmtleXBhaXIuZnJvbVNlY3JldEtleScsIHNlY3JldEtleSk7XG4gICAgfVxuXG4gICAgYXN5bmMgbmFjbFNpZ25LZXlwYWlyKCk6IFByb21pc2U8VE9OS2V5UGFpckRhdGE+IHtcbiAgICAgICAgcmV0dXJuIHRoaXMucmVxdWVzdExpYnJhcnkoJ2NyeXB0by5uYWNsLnNpZ24ua2V5cGFpcicpO1xuICAgIH1cblxuICAgIGFzeW5jIG5hY2xTaWduS2V5cGFpckZyb21TZWNyZXRLZXkoc2VjcmV0S2V5OiBzdHJpbmcpOiBQcm9taXNlPFRPTktleVBhaXJEYXRhPiB7XG4gICAgICAgIHJldHVybiB0aGlzLnJlcXVlc3RMaWJyYXJ5KCdjcnlwdG8ubmFjbC5zaWduLmtleXBhaXIuZnJvbVNlY3JldEtleScsIHNlY3JldEtleSk7XG4gICAgfVxuXG4gICAgYXN5bmMgbmFjbEJveChwYXJhbXM6IFRPTk5hY2xCb3hQYXJhbXMpOiBQcm9taXNlPHN0cmluZz4ge1xuICAgICAgICBjb25zdCBmaXhlZDogVE9OTmFjbEJveFBhcmFtcyA9IChPYmplY3QuYXNzaWduKHt9LCBwYXJhbXMpOiBhbnkpO1xuICAgICAgICBmaXhlZC5tZXNzYWdlID0gZml4SW5wdXRNZXNzYWdlKHBhcmFtcy5tZXNzYWdlKTtcbiAgICAgICAgcmV0dXJuIHRoaXMucmVxdWVzdExpYnJhcnkoJ2NyeXB0by5uYWNsLmJveCcsIGZpeGVkKTtcbiAgICB9XG5cbiAgICBhc3luYyBuYWNsQm94T3BlbihwYXJhbXM6IFRPTk5hY2xCb3hQYXJhbXMpOiBQcm9taXNlPHN0cmluZz4ge1xuICAgICAgICBjb25zdCBmaXhlZDogVE9OTmFjbEJveFBhcmFtcyA9IChPYmplY3QuYXNzaWduKHt9LCBwYXJhbXMpOiBhbnkpO1xuICAgICAgICBmaXhlZC5tZXNzYWdlID0gZml4SW5wdXRNZXNzYWdlKHBhcmFtcy5tZXNzYWdlKTtcbiAgICAgICAgcmV0dXJuIHRoaXMucmVxdWVzdExpYnJhcnkoJ2NyeXB0by5uYWNsLmJveC5vcGVuJywgZml4ZWQpO1xuICAgIH1cblxuICAgIGFzeW5jIG5hY2xTZWNyZXRCb3gocGFyYW1zOiBUT05OYWNsU2VjcmV0Qm94UGFyYW1zKTogUHJvbWlzZTxzdHJpbmc+IHtcbiAgICAgICAgY29uc3QgZml4ZWQ6IFRPTk5hY2xCb3hQYXJhbXMgPSAoT2JqZWN0LmFzc2lnbih7fSwgcGFyYW1zKTogYW55KTtcbiAgICAgICAgZml4ZWQubWVzc2FnZSA9IGZpeElucHV0TWVzc2FnZShwYXJhbXMubWVzc2FnZSk7XG4gICAgICAgIHJldHVybiB0aGlzLnJlcXVlc3RMaWJyYXJ5KCdjcnlwdG8ubmFjbC5zZWNyZXQuYm94JywgZml4ZWQpO1xuICAgIH1cblxuICAgIGFzeW5jIG5hY2xTZWNyZXRCb3hPcGVuKHBhcmFtczogVE9OTmFjbFNlY3JldEJveFBhcmFtcyk6IFByb21pc2U8c3RyaW5nPiB7XG4gICAgICAgIGNvbnN0IGZpeGVkOiBUT05OYWNsQm94UGFyYW1zID0gKE9iamVjdC5hc3NpZ24oe30sIHBhcmFtcyk6IGFueSk7XG4gICAgICAgIGZpeGVkLm1lc3NhZ2UgPSBmaXhJbnB1dE1lc3NhZ2UocGFyYW1zLm1lc3NhZ2UpO1xuICAgICAgICByZXR1cm4gdGhpcy5yZXF1ZXN0TGlicmFyeSgnY3J5cHRvLm5hY2wuc2VjcmV0LmJveC5vcGVuJywgZml4ZWQpO1xuICAgIH1cblxuICAgIGFzeW5jIG5hY2xTaWduKFxuICAgICAgICBtZXNzYWdlOiBUT05JbnB1dE1lc3NhZ2UsXG4gICAgICAgIGtleTogc3RyaW5nLFxuICAgICAgICBvdXRwdXRFbmNvZGluZzogVE9OT3V0cHV0RW5jb2RpbmdUeXBlID0gVE9OT3V0cHV0RW5jb2RpbmcuSGV4LFxuICAgICk6IFByb21pc2U8c3RyaW5nPiB7XG4gICAgICAgIHJldHVybiB0aGlzLnJlcXVlc3RMaWJyYXJ5KCdjcnlwdG8ubmFjbC5zaWduJywge1xuICAgICAgICAgICAgbWVzc2FnZTogZml4SW5wdXRNZXNzYWdlKG1lc3NhZ2UpLFxuICAgICAgICAgICAga2V5LFxuICAgICAgICAgICAgb3V0cHV0RW5jb2RpbmcsXG4gICAgICAgIH0pO1xuICAgIH1cblxuICAgIGFzeW5jIG5hY2xTaWduT3BlbihcbiAgICAgICAgbWVzc2FnZTogVE9OSW5wdXRNZXNzYWdlLFxuICAgICAgICBrZXk6IHN0cmluZyxcbiAgICAgICAgb3V0cHV0RW5jb2Rpbmc6IFRPTk91dHB1dEVuY29kaW5nVHlwZSA9IFRPTk91dHB1dEVuY29kaW5nLkhleCxcbiAgICApOiBQcm9taXNlPHN0cmluZz4ge1xuICAgICAgICByZXR1cm4gdGhpcy5yZXF1ZXN0TGlicmFyeSgnY3J5cHRvLm5hY2wuc2lnbi5vcGVuJywge1xuICAgICAgICAgICAgbWVzc2FnZTogZml4SW5wdXRNZXNzYWdlKG1lc3NhZ2UpLFxuICAgICAgICAgICAga2V5LFxuICAgICAgICAgICAgb3V0cHV0RW5jb2RpbmcsXG4gICAgICAgIH0pO1xuICAgIH1cblxuICAgIGFzeW5jIG5hY2xTaWduRGV0YWNoZWQoXG4gICAgICAgIG1lc3NhZ2U6IFRPTklucHV0TWVzc2FnZSxcbiAgICAgICAga2V5OiBzdHJpbmcsXG4gICAgICAgIG91dHB1dEVuY29kaW5nOiBUT05PdXRwdXRFbmNvZGluZ1R5cGUgPSBUT05PdXRwdXRFbmNvZGluZy5IZXgsXG4gICAgKTogUHJvbWlzZTxzdHJpbmc+IHtcbiAgICAgICAgcmV0dXJuIHRoaXMucmVxdWVzdExpYnJhcnkoJ2NyeXB0by5uYWNsLnNpZ24uZGV0YWNoZWQnLCB7XG4gICAgICAgICAgICBtZXNzYWdlOiBmaXhJbnB1dE1lc3NhZ2UobWVzc2FnZSksXG4gICAgICAgICAgICBrZXksXG4gICAgICAgICAgICBvdXRwdXRFbmNvZGluZyxcbiAgICAgICAgfSk7XG4gICAgfVxuXG4gICAgLy8gTW5lbW9uaWNcblxuICAgIGFzeW5jIG1uZW1vbmljV29yZHMoKTogUHJvbWlzZTxzdHJpbmc+IHtcbiAgICAgICAgcmV0dXJuIHRoaXMucmVxdWVzdExpYnJhcnkoJ2NyeXB0by5tbmVtb25pYy53b3JkcycpO1xuICAgIH1cblxuICAgIGFzeW5jIG1uZW1vbmljRnJvbVJhbmRvbSgpOiBQcm9taXNlPHN0cmluZz4ge1xuICAgICAgICByZXR1cm4gdGhpcy5yZXF1ZXN0TGlicmFyeSgnY3J5cHRvLm1uZW1vbmljLmZyb20ucmFuZG9tJyk7XG4gICAgfVxuXG4gICAgYXN5bmMgbW5lbW9uaWNGcm9tRW50cm9weShlbnRyb3B5SGV4OiBzdHJpbmcpOiBQcm9taXNlPHN0cmluZz4ge1xuICAgICAgICByZXR1cm4gdGhpcy5yZXF1ZXN0TGlicmFyeShcbiAgICAgICAgICAgICdjcnlwdG8ubW5lbW9uaWMuZnJvbS5lbnRyb3B5JyxcbiAgICAgICAgICAgIHsgZW50cm9weTogeyBoZXg6IGVudHJvcHlIZXggfSB9LFxuICAgICAgICApO1xuICAgIH1cblxuICAgIGFzeW5jIG1uZW1vbmljSXNWYWxpZChwaHJhc2U6IHN0cmluZyk6IFByb21pc2U8Ym9vbGVhbj4ge1xuICAgICAgICByZXR1cm4gdGhpcy5yZXF1ZXN0TGlicmFyeSgnY3J5cHRvLm1uZW1vbmljLnZlcmlmeScsIHsgcGhyYXNlIH0pO1xuICAgIH1cblxuICAgIC8vIEhES2V5c1xuXG4gICAgYXN5bmMgaGRrZXlYUHJ2RnJvbU1uZW1vbmljKHBocmFzZTogc3RyaW5nKTogUHJvbWlzZTxzdHJpbmc+IHtcbiAgICAgICAgcmV0dXJuIHRoaXMucmVxdWVzdExpYnJhcnkoJ2NyeXB0by5oZGtleS54cHJ2LmZyb20ubW5lbW9uaWMnLCB7IHBocmFzZSB9KTtcbiAgICB9XG5cbiAgICBhc3luYyBoZGtleVhQcnZEZXJpdmUoXG4gICAgICAgIHNlcmlhbGl6ZWQ6IHN0cmluZyxcbiAgICAgICAgaW5kZXg6IG51bWJlcixcbiAgICAgICAgaGFyZGVuZWQ6IGJvb2xlYW4sXG4gICAgICAgIGNvbXBsaWFudDogYm9vbGVhbixcbiAgICApOiBQcm9taXNlPHN0cmluZz4ge1xuICAgICAgICByZXR1cm4gdGhpcy5yZXF1ZXN0TGlicmFyeShcbiAgICAgICAgICAgICdjcnlwdG8uaGRrZXkueHBydi5kZXJpdmUnLFxuICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgIHNlcmlhbGl6ZWQsXG4gICAgICAgICAgICAgICAgaW5kZXgsXG4gICAgICAgICAgICAgICAgaGFyZGVuZWQsXG4gICAgICAgICAgICAgICAgY29tcGxpYW50LFxuICAgICAgICAgICAgfSxcbiAgICAgICAgKTtcbiAgICB9XG5cbiAgICBhc3luYyBoZGtleVhQcnZEZXJpdmVQYXRoKFxuICAgICAgICBzZXJpYWxpemVkOiBzdHJpbmcsXG4gICAgICAgIHBhdGg6IHN0cmluZyxcbiAgICAgICAgY29tcGxpYW50OiBib29sZWFuLFxuICAgICk6IFByb21pc2U8c3RyaW5nPiB7XG4gICAgICAgIHJldHVybiB0aGlzLnJlcXVlc3RMaWJyYXJ5KFxuICAgICAgICAgICAgJ2NyeXB0by5oZGtleS54cHJ2LmRlcml2ZS5wYXRoJyxcbiAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICBzZXJpYWxpemVkLFxuICAgICAgICAgICAgICAgIHBhdGgsXG4gICAgICAgICAgICAgICAgY29tcGxpYW50LFxuICAgICAgICAgICAgfSxcbiAgICAgICAgKTtcbiAgICB9XG5cbiAgICBhc3luYyBoZGtleVhQcnZTZWNyZXQoc2VyaWFsaXplZDogc3RyaW5nKTogUHJvbWlzZTxzdHJpbmc+IHtcbiAgICAgICAgcmV0dXJuIHRoaXMucmVxdWVzdExpYnJhcnkoJ2NyeXB0by5oZGtleS54cHJ2LnNlY3JldCcsIHsgc2VyaWFsaXplZCB9KTtcbiAgICB9XG5cbiAgICBhc3luYyBoZGtleVhQcnZQdWJsaWMoc2VyaWFsaXplZDogc3RyaW5nKTogUHJvbWlzZTxzdHJpbmc+IHtcbiAgICAgICAgcmV0dXJuIHRoaXMucmVxdWVzdExpYnJhcnkoJ2NyeXB0by5oZGtleS54cHJ2LnB1YmxpYycsIHsgc2VyaWFsaXplZCB9KTtcbiAgICB9XG5cbn1cblxuVE9OQ3J5cHRvTW9kdWxlLm1vZHVsZU5hbWUgPSAnVE9OQ3J5cHRvTW9kdWxlJztcbiJdfQ==