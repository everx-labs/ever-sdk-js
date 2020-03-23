function asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { Promise.resolve(value).then(_next, _throw); } }

function _asyncToGenerator(fn) { return function () { var self = this, args = arguments; return new Promise(function (resolve, reject) { var gen = fn.apply(self, args); function _next(value) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "next", value); } function _throw(err) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "throw", err); } _next(undefined); }); }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _possibleConstructorReturn(self, call) { if (call && (typeof call === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

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
import { TONModule } from '../TONModule';
export var TONOutputEncoding = {
  Text: 'Text',
  Hex: 'Hex',
  HexUppercase: 'HexUppercase',
  Base64: 'Base64'
};
export var TONMnemonicDictionary = {
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

function fixInputMessage(message) {
  return message.text ? {
    base64: Buffer.from(message.text, 'utf8').toString('base64')
  } : message;
}

var TONCryptoModule = /*#__PURE__*/function (_TONModule) {
  _inherits(TONCryptoModule, _TONModule);

  function TONCryptoModule() {
    _classCallCheck(this, TONCryptoModule);

    return _possibleConstructorReturn(this, _getPrototypeOf(TONCryptoModule).apply(this, arguments));
  }

  _createClass(TONCryptoModule, [{
    key: "factorize",
    value: function () {
      var _factorize = _asyncToGenerator(function* (challengeHex) {
        return this.requestCore('crypto.math.factorize', challengeHex);
      });

      function factorize(_x) {
        return _factorize.apply(this, arguments);
      }

      return factorize;
    }()
  }, {
    key: "modularPower",
    value: function () {
      var _modularPower = _asyncToGenerator(function* (baseHex, exponentHex, modulusHex) {
        return this.requestCore('crypto.math.modularPower', {
          base: baseHex,
          exponent: exponentHex,
          modulus: modulusHex
        });
      });

      function modularPower(_x2, _x3, _x4) {
        return _modularPower.apply(this, arguments);
      }

      return modularPower;
    }()
  }, {
    key: "randomGenerateBytes",
    value: function () {
      var _randomGenerateBytes = _asyncToGenerator(function* (length, outputEncoding = TONOutputEncoding.Hex) {
        return this.requestCore('crypto.random.generateBytes', {
          length,
          outputEncoding
        });
      });

      function randomGenerateBytes(_x5) {
        return _randomGenerateBytes.apply(this, arguments);
      }

      return randomGenerateBytes;
    }()
  }, {
    key: "ed25519Keypair",
    value: function () {
      var _ed25519Keypair = _asyncToGenerator(function* () {
        return this.requestCore('crypto.ed25519.keypair');
      });

      function ed25519Keypair() {
        return _ed25519Keypair.apply(this, arguments);
      }

      return ed25519Keypair;
    }()
  }, {
    key: "publicKeyToString",
    value: function () {
      var _publicKeyToString = _asyncToGenerator(function* (key) {
        return this.requestCore('crypto.ton_public_key_string', key);
      });

      function publicKeyToString(_x6) {
        return _publicKeyToString.apply(this, arguments);
      }

      return publicKeyToString;
    }()
  }, {
    key: "sha512",
    value: function () {
      var _sha = _asyncToGenerator(function* (message, outputEncoding = TONOutputEncoding.Hex) {
        return this.requestCore('crypto.sha512', {
          message: fixInputMessage(message),
          outputEncoding
        });
      });

      function sha512(_x7) {
        return _sha.apply(this, arguments);
      }

      return sha512;
    }()
  }, {
    key: "sha256",
    value: function () {
      var _sha2 = _asyncToGenerator(function* (message, outputEncoding = TONOutputEncoding.Hex) {
        return this.requestCore('crypto.sha256', {
          message: fixInputMessage(message),
          outputEncoding
        });
      });

      function sha256(_x8) {
        return _sha2.apply(this, arguments);
      }

      return sha256;
    }()
  }, {
    key: "scrypt",
    value: function () {
      var _scrypt = _asyncToGenerator(function* (params) {
        var fixed = Object.assign({}, params);
        fixed.password = fixInputMessage(params.password);
        fixed.salt = fixInputMessage(params.salt);
        return this.requestCore('crypto.scrypt', fixed);
      });

      function scrypt(_x9) {
        return _scrypt.apply(this, arguments);
      }

      return scrypt;
    }()
  }, {
    key: "naclBoxKeypair",
    value: function () {
      var _naclBoxKeypair = _asyncToGenerator(function* () {
        return this.requestCore('crypto.nacl.box.keypair');
      });

      function naclBoxKeypair() {
        return _naclBoxKeypair.apply(this, arguments);
      }

      return naclBoxKeypair;
    }()
  }, {
    key: "naclBoxKeypairFromSecretKey",
    value: function () {
      var _naclBoxKeypairFromSecretKey = _asyncToGenerator(function* (secretKey) {
        return this.requestCore('crypto.nacl.box.keypair.fromSecretKey', secretKey);
      });

      function naclBoxKeypairFromSecretKey(_x10) {
        return _naclBoxKeypairFromSecretKey.apply(this, arguments);
      }

      return naclBoxKeypairFromSecretKey;
    }()
  }, {
    key: "naclSignKeypair",
    value: function () {
      var _naclSignKeypair = _asyncToGenerator(function* () {
        return this.requestCore('crypto.nacl.sign.keypair');
      });

      function naclSignKeypair() {
        return _naclSignKeypair.apply(this, arguments);
      }

      return naclSignKeypair;
    }()
  }, {
    key: "naclSignKeypairFromSecretKey",
    value: function () {
      var _naclSignKeypairFromSecretKey = _asyncToGenerator(function* (secretKey) {
        return this.requestCore('crypto.nacl.sign.keypair.fromSecretKey', secretKey);
      });

      function naclSignKeypairFromSecretKey(_x11) {
        return _naclSignKeypairFromSecretKey.apply(this, arguments);
      }

      return naclSignKeypairFromSecretKey;
    }()
  }, {
    key: "naclBox",
    value: function () {
      var _naclBox = _asyncToGenerator(function* (params) {
        var fixed = Object.assign({}, params);
        fixed.message = fixInputMessage(params.message);
        return this.requestCore('crypto.nacl.box', fixed);
      });

      function naclBox(_x12) {
        return _naclBox.apply(this, arguments);
      }

      return naclBox;
    }()
  }, {
    key: "naclBoxOpen",
    value: function () {
      var _naclBoxOpen = _asyncToGenerator(function* (params) {
        var fixed = Object.assign({}, params);
        fixed.message = fixInputMessage(params.message);
        return this.requestCore('crypto.nacl.box.open', fixed);
      });

      function naclBoxOpen(_x13) {
        return _naclBoxOpen.apply(this, arguments);
      }

      return naclBoxOpen;
    }()
  }, {
    key: "naclSecretBox",
    value: function () {
      var _naclSecretBox = _asyncToGenerator(function* (params) {
        var fixed = Object.assign({}, params);
        fixed.message = fixInputMessage(params.message);
        return this.requestCore('crypto.nacl.secret.box', fixed);
      });

      function naclSecretBox(_x14) {
        return _naclSecretBox.apply(this, arguments);
      }

      return naclSecretBox;
    }()
  }, {
    key: "naclSecretBoxOpen",
    value: function () {
      var _naclSecretBoxOpen = _asyncToGenerator(function* (params) {
        var fixed = Object.assign({}, params);
        fixed.message = fixInputMessage(params.message);
        return this.requestCore('crypto.nacl.secret.box.open', fixed);
      });

      function naclSecretBoxOpen(_x15) {
        return _naclSecretBoxOpen.apply(this, arguments);
      }

      return naclSecretBoxOpen;
    }()
  }, {
    key: "naclSign",
    value: function () {
      var _naclSign = _asyncToGenerator(function* (message, key, outputEncoding = TONOutputEncoding.Hex) {
        return this.requestCore('crypto.nacl.sign', {
          message: fixInputMessage(message),
          key,
          outputEncoding
        });
      });

      function naclSign(_x16, _x17) {
        return _naclSign.apply(this, arguments);
      }

      return naclSign;
    }()
  }, {
    key: "naclSignOpen",
    value: function () {
      var _naclSignOpen = _asyncToGenerator(function* (message, key, outputEncoding = TONOutputEncoding.Hex) {
        return this.requestCore('crypto.nacl.sign.open', {
          message: fixInputMessage(message),
          key,
          outputEncoding
        });
      });

      function naclSignOpen(_x18, _x19) {
        return _naclSignOpen.apply(this, arguments);
      }

      return naclSignOpen;
    }()
  }, {
    key: "naclSignDetached",
    value: function () {
      var _naclSignDetached = _asyncToGenerator(function* (message, key, outputEncoding = TONOutputEncoding.Hex) {
        return this.requestCore('crypto.nacl.sign.detached', {
          message: fixInputMessage(message),
          key,
          outputEncoding
        });
      });

      function naclSignDetached(_x20, _x21) {
        return _naclSignDetached.apply(this, arguments);
      }

      return naclSignDetached;
    }() // Mnemonic

  }, {
    key: "mnemonicWords",
    value: function () {
      var _mnemonicWords = _asyncToGenerator(function* (params) {
        return this.requestCore('crypto.mnemonic.words', params || {});
      });

      function mnemonicWords(_x22) {
        return _mnemonicWords.apply(this, arguments);
      }

      return mnemonicWords;
    }()
  }, {
    key: "mnemonicFromRandom",
    value: function () {
      var _mnemonicFromRandom = _asyncToGenerator(function* (params) {
        return this.requestCore('crypto.mnemonic.from.random', params || {});
      });

      function mnemonicFromRandom(_x23) {
        return _mnemonicFromRandom.apply(this, arguments);
      }

      return mnemonicFromRandom;
    }()
  }, {
    key: "mnemonicFromEntropy",
    value: function () {
      var _mnemonicFromEntropy = _asyncToGenerator(function* (params) {
        return this.requestCore('crypto.mnemonic.from.entropy', params);
      });

      function mnemonicFromEntropy(_x24) {
        return _mnemonicFromEntropy.apply(this, arguments);
      }

      return mnemonicFromEntropy;
    }()
  }, {
    key: "mnemonicIsValid",
    value: function () {
      var _mnemonicIsValid = _asyncToGenerator(function* (params) {
        return this.requestCore('crypto.mnemonic.verify', params);
      });

      function mnemonicIsValid(_x25) {
        return _mnemonicIsValid.apply(this, arguments);
      }

      return mnemonicIsValid;
    }()
  }, {
    key: "mnemonicDeriveSignKeys",
    value: function () {
      var _mnemonicDeriveSignKeys = _asyncToGenerator(function* (params) {
        return this.requestCore('crypto.mnemonic.derive.sign.keys', params);
      });

      function mnemonicDeriveSignKeys(_x26) {
        return _mnemonicDeriveSignKeys.apply(this, arguments);
      }

      return mnemonicDeriveSignKeys;
    }() // HDKeys

  }, {
    key: "hdkeyXPrvFromMnemonic",
    value: function () {
      var _hdkeyXPrvFromMnemonic = _asyncToGenerator(function* (params) {
        return this.requestCore('crypto.hdkey.xprv.from.mnemonic', params);
      });

      function hdkeyXPrvFromMnemonic(_x27) {
        return _hdkeyXPrvFromMnemonic.apply(this, arguments);
      }

      return hdkeyXPrvFromMnemonic;
    }()
  }, {
    key: "hdkeyXPrvDerive",
    value: function () {
      var _hdkeyXPrvDerive = _asyncToGenerator(function* (serialized, index, hardened, compliant) {
        return this.requestCore('crypto.hdkey.xprv.derive', {
          serialized,
          index,
          hardened,
          compliant
        });
      });

      function hdkeyXPrvDerive(_x28, _x29, _x30, _x31) {
        return _hdkeyXPrvDerive.apply(this, arguments);
      }

      return hdkeyXPrvDerive;
    }()
  }, {
    key: "hdkeyXPrvDerivePath",
    value: function () {
      var _hdkeyXPrvDerivePath = _asyncToGenerator(function* (serialized, path, compliant) {
        return this.requestCore('crypto.hdkey.xprv.derive.path', {
          serialized,
          path,
          compliant
        });
      });

      function hdkeyXPrvDerivePath(_x32, _x33, _x34) {
        return _hdkeyXPrvDerivePath.apply(this, arguments);
      }

      return hdkeyXPrvDerivePath;
    }()
  }, {
    key: "hdkeyXPrvSecret",
    value: function () {
      var _hdkeyXPrvSecret = _asyncToGenerator(function* (serialized) {
        return this.requestCore('crypto.hdkey.xprv.secret', {
          serialized
        });
      });

      function hdkeyXPrvSecret(_x35) {
        return _hdkeyXPrvSecret.apply(this, arguments);
      }

      return hdkeyXPrvSecret;
    }()
  }, {
    key: "hdkeyXPrvPublic",
    value: function () {
      var _hdkeyXPrvPublic = _asyncToGenerator(function* (serialized) {
        return this.requestCore('crypto.hdkey.xprv.public', {
          serialized
        });
      });

      function hdkeyXPrvPublic(_x36) {
        return _hdkeyXPrvPublic.apply(this, arguments);
      }

      return hdkeyXPrvPublic;
    }()
  }]);

  return TONCryptoModule;
}(TONModule);

export { TONCryptoModule as default };
TONCryptoModule.moduleName = 'TONCryptoModule';
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy9tb2R1bGVzL1RPTkNyeXB0b01vZHVsZS5qcyJdLCJuYW1lcyI6WyJUT05Nb2R1bGUiLCJUT05PdXRwdXRFbmNvZGluZyIsIlRleHQiLCJIZXgiLCJIZXhVcHBlcmNhc2UiLCJCYXNlNjQiLCJUT05NbmVtb25pY0RpY3Rpb25hcnkiLCJUT04iLCJFTkdMSVNIIiwiQ0hJTkVTRV9TSU1QTElGSUVEIiwiQ0hJTkVTRV9UUkFESVRJT05BTCIsIkZSRU5DSCIsIklUQUxJQU4iLCJKQVBBTkVTRSIsIktPUkVBTiIsIlNQQU5JU0giLCJmaXhJbnB1dE1lc3NhZ2UiLCJtZXNzYWdlIiwidGV4dCIsImJhc2U2NCIsIkJ1ZmZlciIsImZyb20iLCJ0b1N0cmluZyIsIlRPTkNyeXB0b01vZHVsZSIsImNoYWxsZW5nZUhleCIsInJlcXVlc3RDb3JlIiwiYmFzZUhleCIsImV4cG9uZW50SGV4IiwibW9kdWx1c0hleCIsImJhc2UiLCJleHBvbmVudCIsIm1vZHVsdXMiLCJsZW5ndGgiLCJvdXRwdXRFbmNvZGluZyIsImtleSIsInBhcmFtcyIsImZpeGVkIiwiT2JqZWN0IiwiYXNzaWduIiwicGFzc3dvcmQiLCJzYWx0Iiwic2VjcmV0S2V5Iiwic2VyaWFsaXplZCIsImluZGV4IiwiaGFyZGVuZWQiLCJjb21wbGlhbnQiLCJwYXRoIiwibW9kdWxlTmFtZSJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQTs7Ozs7Ozs7Ozs7Ozs7OztBQWlCQTtBQWtCQSxTQUFTQSxTQUFULFFBQTBCLGNBQTFCO0FBRUEsT0FBTyxJQUFNQyxpQkFBaUIsR0FBRztBQUM3QkMsRUFBQUEsSUFBSSxFQUFFLE1BRHVCO0FBRTdCQyxFQUFBQSxHQUFHLEVBQUUsS0FGd0I7QUFHN0JDLEVBQUFBLFlBQVksRUFBRSxjQUhlO0FBSTdCQyxFQUFBQSxNQUFNLEVBQUU7QUFKcUIsQ0FBMUI7QUFRUCxPQUFPLElBQU1DLHFCQUFxQixHQUFHO0FBQ2pDQyxFQUFBQSxHQUFH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REFFcUJBLFUsRUFBcUM7QUFDdkQsZUFBTyxLQUFLakIsV0FBTCxDQUFpQiwwQkFBakIsRUFBNkM7QUFBRWlCLFVBQUFBO0FBQUYsU0FBN0MsQ0FBUDtBQUNILE87Ozs7Ozs7Ozs7O0VBdE53QzFDLFM7O1NBQXhCdUIsZTtBQTBOckJBLGVBQWUsQ0FBQ3dCLFVBQWhCLEdBQTZCLGlCQUE3QiIsInNvdXJjZXNDb250ZW50IjpbIi8qXG4gKiBDb3B5cmlnaHQgMjAxOC0yMDIwIFRPTiBERVYgU09MVVRJT05TIExURC5cbiAqXG4gKiBMaWNlbnNlZCB1bmRlciB0aGUgU09GVFdBUkUgRVZBTFVBVElPTiBMaWNlbnNlICh0aGUgXCJMaWNlbnNlXCIpOyB5b3UgbWF5IG5vdCB1c2VcbiAqIHRoaXMgZmlsZSBleGNlcHQgaW4gY29tcGxpYW5jZSB3aXRoIHRoZSBMaWNlbnNlLiAgWW91IG1heSBvYnRhaW4gYSBjb3B5IG9mIHRoZVxuICogTGljZW5zZSBhdDpcbiAqXG4gKiBodHRwOi8vd3d3LnRvbi5kZXYvbGljZW5zZXNcbiAqXG4gKiBVbmxlc3MgcmVxdWlyZWQgYnkgYXBwbGljYWJsZSBsYXcgb3IgYWdyZWVkIHRvIGluIHdyaXRpbmcsIHNvZnR3YXJlXG4gKiBkaXN0cmlidXRlZCB1bmRlciB0aGUgTGljZW5zZSBpcyBkaXN0cmlidXRlZCBvbiBhbiBcIkFTIElTXCIgQkFTSVMsXG4gKiBXSVRIT1VUIFdBUlJBTlRJRVMgT1IgQ09ORElUSU9OUyBPRiBBTlkgS0lORCwgZWl0aGVyIGV4cHJlc3Mgb3IgaW1wbGllZC5cbiAqIFNlZSB0aGUgTGljZW5zZSBmb3IgdGhlIHNwZWNpZmljIFRPTiBERVYgc29mdHdhcmUgZ292ZXJuaW5nIHBlcm1pc3Npb25zIGFuZFxuICogbGltaXRhdGlvbnMgdW5kZXIgdGhlIExpY2Vuc2UuXG4gKi9cblxuLy8gQGZsb3dcbi8qIGVzbGludC1kaXNhYmxlIGNsYXNzLW1ldGhvZHMtdXNlLXRoaXMscHJlZmVyLW9iamVjdC1zcHJlYWQgKi9cblxuaW1wb3J0IHR5cGUge1xuICAgIFRPTkZhY3Rvcml6ZVJlc3VsdCxcbiAgICBUT05JbnB1dE1lc3NhZ2UsXG4gICAgVE9OS2V5UGFpckRhdGEsXG4gICAgVE9OT3V0cHV0RW5jb2RpbmdUeXBlLFxuICAgIFRPTlNjcnlwdFBhcmFtcyxcbiAgICBUT05OYWNsQm94UGFyYW1zLFxuICAgIFRPTk5hY2xTZWNyZXRCb3hQYXJhbXMsXG4gICAgVE9OTW5lbW9uaWNXb3Jkc1BhcmFtcyxcbiAgICBUT05NbmVtb25pY0Zyb21SYW5kb21QYXJhbXMsXG4gICAgVE9OTW5lbW9uaWNGcm9tRW50cm9weVBhcmFtcyxcbiAgICBUT05NbmVtb25pY0lzVmFsaWRQYXJhbXMsXG4gICAgVE9OTW5lbW9uaWNEZXJpdmVTaWduS2V5c1BhcmFtcyxcbiAgICBUT05DcnlwdG8sXG4gICAgVE9OSERLZXlGcm9tTW5lbW9uaWNQYXJhbXMsXG59IGZyb20gXCIuLi8uLi90eXBlc1wiO1xuaW1wb3J0IHsgVE9OTW9kdWxlIH0gZnJvbSAnLi4vVE9OTW9kdWxlJztcblxuZXhwb3J0IGNvbnN0IFRPTk91dHB1dEVuY29kaW5nID0ge1xuICAgIFRleHQ6ICdUZXh0JyxcbiAgICBIZXg6ICdIZXgnLFxuICAgIEhleFVwcGVyY2FzZTogJ0hleFVwcGVyY2FzZScsXG4gICAgQmFzZTY0OiAnQmFzZTY0Jyxcbn07XG5cblxuZXhwb3J0IGNvbnN0IFRPTk1uZW1vbmljRGljdGlvbmFyeSA9IHtcbiAgICBUT046IDAsXG4gICAgRU5HTElTSDogMSxcbiAgICBDSElORVNFX1NJTVBMSUZJRUQ6IDIsXG4gICAgQ0hJTkVTRV9UUkFESVRJT05BTDogMyxcbiAgICBGUkVOQ0g6IDQsXG4gICAgSVRBTElBTjogNSxcbiAgICBKQVBBTkVTRTogNixcbiAgICBLT1JFQU46IDcsXG4gICAgU1BBTklTSDogOCxcbn07XG5cblxuZnVuY3Rpb24gZml4SW5wdXRNZXNzYWdlKG1lc3NhZ2U6IFRPTklucHV0TWVzc2FnZSk6IFRPTklucHV0TWVzc2FnZSB7XG4gICAgcmV0dXJuIG1lc3NhZ2UudGV4dFxuICAgICAgICA/IHtcbiAgICAgICAgICAgIGJhc2U2NDogQnVmZmVyLmZyb20obWVzc2FnZS50ZXh0LCAndXRmOCcpXG4gICAgICAgICAgICAgICAgLnRvU3RyaW5nKCdiYXNlNjQnKSxcbiAgICAgICAgfVxuICAgICAgICA6IG1lc3NhZ2U7XG59XG5cbmV4cG9ydCBkZWZhdWx0IGNsYXNzIFRPTkNyeXB0b01vZHVsZSBleHRlbmRzIFRPTk1vZHVsZSBpbXBsZW1lbnRzIFRPTkNyeXB0byB7XG4gICAgYXN5bmMgZmFjdG9yaXplKGNoYWxsZW5nZUhleDogc3RyaW5nKTogUHJvbWlzZTxUT05GYWN0b3JpemVSZXN1bHQ+IHtcbiAgICAgICAgcmV0dXJuIHRoaXMucmVxdWVzdENvcmUoJ2NyeXB0by5tYXRoLmZhY3Rvcml6ZScsIGNoYWxsZW5nZUhleCk7XG4gICAgfVxuXG4gICAgYXN5bmMgbW9kdWxhclBvd2VyKFxuICAgICAgICBiYXNlSGV4OiBzdHJpbmcsXG4gICAgICAgIGV4cG9uZW50SGV4OiBzdHJpbmcsXG4gICAgICAgIG1vZHVsdXNIZXg6IHN0cmluZyxcbiAgICApOiBQcm9taXNlPHN0cmluZz4ge1xuICAgICAgICByZXR1cm4gdGhpcy5yZXF1ZXN0Q29yZSgnY3J5cHRvLm1hdGgubW9kdWxhclBvd2VyJywge1xuICAgICAgICAgICAgYmFzZTogYmFzZUhleCxcbiAgICAgICAgICAgIGV4cG9uZW50OiBleHBvbmVudEhleCxcbiAgICAgICAgICAgIG1vZHVsdXM6IG1vZHVsdXNIZXgsXG4gICAgICAgIH0pO1xuICAgIH1cblxuICAgIGFzeW5jIHJhbmRvbUdlbmVyYXRlQnl0ZXMoXG4gICAgICAgIGxlbmd0aDogbnVtYmVyLFxuICAgICAgICBvdXRwdXRFbmNvZGluZzogVE9OT3V0cHV0RW5jb2RpbmdUeXBlID0gVE9OT3V0cHV0RW5jb2RpbmcuSGV4LFxuICAgICk6IFByb21pc2U8c3RyaW5nPiB7XG4gICAgICAgIHJldHVybiB0aGlzLnJlcXVlc3RDb3JlKCdjcnlwdG8ucmFuZG9tLmdlbmVyYXRlQnl0ZXMnLCB7XG4gICAgICAgICAgICBsZW5ndGgsXG4gICAgICAgICAgICBvdXRwdXRFbmNvZGluZyxcbiAgICAgICAgfSk7XG4gICAgfVxuXG5cbiAgICBhc3luYyBlZDI1NTE5S2V5cGFpcigpOiBQcm9taXNlPFRPTktleVBhaXJEYXRhPiB7XG4gICAgICAgIHJldHVybiB0aGlzLnJlcXVlc3RDb3JlKCdjcnlwdG8uZWQyNTUxOS5rZXlwYWlyJyk7XG4gICAgfVxuXG4gICAgYXN5bmMgcHVibGljS2V5VG9TdHJpbmcoa2V5OiBzdHJpbmcpOiBQcm9taXNlPHN0cmluZz4ge1xuICAgICAgICByZXR1cm4gdGhpcy5yZXF1ZXN0Q29yZSgnY3J5cHRvLnRvbl9wdWJsaWNfa2V5X3N0cmluZycsIGtleSk7XG4gICAgfVxuXG4gICAgYXN5bmMgc2hhNTEyKFxuICAgICAgICBtZXNzYWdlOiBUT05JbnB1dE1lc3NhZ2UsXG4gICAgICAgIG91dHB1dEVuY29kaW5nOiBUT05PdXRwdXRFbmNvZGluZ1R5cGUgPSBUT05PdXRwdXRFbmNvZGluZy5IZXgsXG4gICAgKTogUHJvbWlzZTxzdHJpbmc+IHtcbiAgICAgICAgcmV0dXJuIHRoaXMucmVxdWVzdENvcmUoXG4gICAgICAgICAgICAnY3J5cHRvLnNoYTUxMicsXG4gICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgbWVzc2FnZTogZml4SW5wdXRNZXNzYWdlKG1lc3NhZ2UpLFxuICAgICAgICAgICAgICAgIG91dHB1dEVuY29kaW5nLFxuICAgICAgICAgICAgfSxcbiAgICAgICAgKTtcbiAgICB9XG5cbiAgICBhc3luYyBzaGEyNTYoXG4gICAgICAgIG1lc3NhZ2U6IFRPTklucHV0TWVzc2FnZSxcbiAgICAgICAgb3V0cHV0RW5jb2Rpbmc6IFRPTk91dHB1dEVuY29kaW5nVHlwZSA9IFRPTk91dHB1dEVuY29kaW5nLkhleCxcbiAgICApOiBQcm9taXNlPHN0cmluZz4ge1xuICAgICAgICByZXR1cm4gdGhpcy5yZXF1ZXN0Q29yZShcbiAgICAgICAgICAgICdjcnlwdG8uc2hhMjU2JyxcbiAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICBtZXNzYWdlOiBmaXhJbnB1dE1lc3NhZ2UobWVzc2FnZSksXG4gICAgICAgICAgICAgICAgb3V0cHV0RW5jb2RpbmcsXG4gICAgICAgICAgICB9LFxuICAgICAgICApO1xuICAgIH1cblxuICAgIGFzeW5jIHNjcnlwdChwYXJhbXM6IFRPTlNjcnlwdFBhcmFtcyk6IFByb21pc2U8c3RyaW5nPiB7XG4gICAgICAgIGNvbnN0IGZpeGVkOiBUT05TY3J5cHRQYXJhbXMgPSAoT2JqZWN0LmFzc2lnbih7fSwgcGFyYW1zKTogYW55KTtcbiAgICAgICAgZml4ZWQucGFzc3dvcmQgPSBmaXhJbnB1dE1lc3NhZ2UocGFyYW1zLnBhc3N3b3JkKTtcbiAgICAgICAgZml4ZWQuc2FsdCA9IGZpeElucHV0TWVzc2FnZShwYXJhbXMuc2FsdCk7XG4gICAgICAgIHJldHVybiB0aGlzLnJlcXVlc3RDb3JlKCdjcnlwdG8uc2NyeXB0JywgZml4ZWQpO1xuICAgIH1cblxuICAgIGFzeW5jIG5hY2xCb3hLZXlwYWlyKCk6IFByb21pc2U8VE9OS2V5UGFpckRhdGE+IHtcbiAgICAgICAgcmV0dXJuIHRoaXMucmVxdWVzdENvcmUoJ2NyeXB0by5uYWNsLmJveC5rZXlwYWlyJyk7XG4gICAgfVxuXG4gICAgYXN5bmMgbmFjbEJveEtleXBhaXJGcm9tU2VjcmV0S2V5KHNlY3JldEtleTogc3RyaW5nKTogUHJvbWlzZTxUT05LZXlQYWlyRGF0YT4ge1xuICAgICAgICByZXR1cm4gdGhpcy5yZXF1ZXN0Q29yZSgnY3J5cHRvLm5hY2wuYm94LmtleXBhaXIuZnJvbVNlY3JldEtleScsIHNlY3JldEtleSk7XG4gICAgfVxuXG4gICAgYXN5bmMgbmFjbFNpZ25LZXlwYWlyKCk6IFByb21pc2U8VE9OS2V5UGFpckRhdGE+IHtcbiAgICAgICAgcmV0dXJuIHRoaXMucmVxdWVzdENvcmUoJ2NyeXB0by5uYWNsLnNpZ24ua2V5cGFpcicpO1xuICAgIH1cblxuICAgIGFzeW5jIG5hY2xTaWduS2V5cGFpckZyb21TZWNyZXRLZXkoc2VjcmV0S2V5OiBzdHJpbmcpOiBQcm9taXNlPFRPTktleVBhaXJEYXRhPiB7XG4gICAgICAgIHJldHVybiB0aGlzLnJlcXVlc3RDb3JlKCdjcnlwdG8ubmFjbC5zaWduLmtleXBhaXIuZnJvbVNlY3JldEtleScsIHNlY3JldEtleSk7XG4gICAgfVxuXG4gICAgYXN5bmMgbmFjbEJveChwYXJhbXM6IFRPTk5hY2xCb3hQYXJhbXMpOiBQcm9taXNlPHN0cmluZz4ge1xuICAgICAgICBjb25zdCBmaXhlZDogVE9OTmFjbEJveFBhcmFtcyA9IChPYmplY3QuYXNzaWduKHt9LCBwYXJhbXMpOiBhbnkpO1xuICAgICAgICBmaXhlZC5tZXNzYWdlID0gZml4SW5wdXRNZXNzYWdlKHBhcmFtcy5tZXNzYWdlKTtcbiAgICAgICAgcmV0dXJuIHRoaXMucmVxdWVzdENvcmUoJ2NyeXB0by5uYWNsLmJveCcsIGZpeGVkKTtcbiAgICB9XG5cbiAgICBhc3luYyBuYWNsQm94T3BlbihwYXJhbXM6IFRPTk5hY2xCb3hQYXJhbXMpOiBQcm9taXNlPHN0cmluZz4ge1xuICAgICAgICBjb25zdCBmaXhlZDogVE9OTmFjbEJveFBhcmFtcyA9IChPYmplY3QuYXNzaWduKHt9LCBwYXJhbXMpOiBhbnkpO1xuICAgICAgICBmaXhlZC5tZXNzYWdlID0gZml4SW5wdXRNZXNzYWdlKHBhcmFtcy5tZXNzYWdlKTtcbiAgICAgICAgcmV0dXJuIHRoaXMucmVxdWVzdENvcmUoJ2NyeXB0by5uYWNsLmJveC5vcGVuJywgZml4ZWQpO1xuICAgIH1cblxuICAgIGFzeW5jIG5hY2xTZWNyZXRCb3gocGFyYW1zOiBUT05OYWNsU2VjcmV0Qm94UGFyYW1zKTogUHJvbWlzZTxzdHJpbmc+IHtcbiAgICAgICAgY29uc3QgZml4ZWQ6IFRPTk5hY2xCb3hQYXJhbXMgPSAoT2JqZWN0LmFzc2lnbih7fSwgcGFyYW1zKTogYW55KTtcbiAgICAgICAgZml4ZWQubWVzc2FnZSA9IGZpeElucHV0TWVzc2FnZShwYXJhbXMubWVzc2FnZSk7XG4gICAgICAgIHJldHVybiB0aGlzLnJlcXVlc3RDb3JlKCdjcnlwdG8ubmFjbC5zZWNyZXQuYm94JywgZml4ZWQpO1xuICAgIH1cblxuICAgIGFzeW5jIG5hY2xTZWNyZXRCb3hPcGVuKHBhcmFtczogVE9OTmFjbFNlY3JldEJveFBhcmFtcyk6IFByb21pc2U8c3RyaW5nPiB7XG4gICAgICAgIGNvbnN0IGZpeGVkOiBUT05OYWNsQm94UGFyYW1zID0gKE9iamVjdC5hc3NpZ24oe30sIHBhcmFtcyk6IGFueSk7XG4gICAgICAgIGZpeGVkLm1lc3NhZ2UgPSBmaXhJbnB1dE1lc3NhZ2UocGFyYW1zLm1lc3NhZ2UpO1xuICAgICAgICByZXR1cm4gdGhpcy5yZXF1ZXN0Q29yZSgnY3J5cHRvLm5hY2wuc2VjcmV0LmJveC5vcGVuJywgZml4ZWQpO1xuICAgIH1cblxuICAgIGFzeW5jIG5hY2xTaWduKFxuICAgICAgICBtZXNzYWdlOiBUT05JbnB1dE1lc3NhZ2UsXG4gICAgICAgIGtleTogc3RyaW5nLFxuICAgICAgICBvdXRwdXRFbmNvZGluZzogVE9OT3V0cHV0RW5jb2RpbmdUeXBlID0gVE9OT3V0cHV0RW5jb2RpbmcuSGV4LFxuICAgICk6IFByb21pc2U8c3RyaW5nPiB7XG4gICAgICAgIHJldHVybiB0aGlzLnJlcXVlc3RDb3JlKCdjcnlwdG8ubmFjbC5zaWduJywge1xuICAgICAgICAgICAgbWVzc2FnZTogZml4SW5wdXRNZXNzYWdlKG1lc3NhZ2UpLFxuICAgICAgICAgICAga2V5LFxuICAgICAgICAgICAgb3V0cHV0RW5jb2RpbmcsXG4gICAgICAgIH0pO1xuICAgIH1cblxuICAgIGFzeW5jIG5hY2xTaWduT3BlbihcbiAgICAgICAgbWVzc2FnZTogVE9OSW5wdXRNZXNzYWdlLFxuICAgICAgICBrZXk6IHN0cmluZyxcbiAgICAgICAgb3V0cHV0RW5jb2Rpbmc6IFRPTk91dHB1dEVuY29kaW5nVHlwZSA9IFRPTk91dHB1dEVuY29kaW5nLkhleCxcbiAgICApOiBQcm9taXNlPHN0cmluZz4ge1xuICAgICAgICByZXR1cm4gdGhpcy5yZXF1ZXN0Q29yZSgnY3J5cHRvLm5hY2wuc2lnbi5vcGVuJywge1xuICAgICAgICAgICAgbWVzc2FnZTogZml4SW5wdXRNZXNzYWdlKG1lc3NhZ2UpLFxuICAgICAgICAgICAga2V5LFxuICAgICAgICAgICAgb3V0cHV0RW5jb2RpbmcsXG4gICAgICAgIH0pO1xuICAgIH1cblxuICAgIGFzeW5jIG5hY2xTaWduRGV0YWNoZWQoXG4gICAgICAgIG1lc3NhZ2U6IFRPTklucHV0TWVzc2FnZSxcbiAgICAgICAga2V5OiBzdHJpbmcsXG4gICAgICAgIG91dHB1dEVuY29kaW5nOiBUT05PdXRwdXRFbmNvZGluZ1R5cGUgPSBUT05PdXRwdXRFbmNvZGluZy5IZXgsXG4gICAgKTogUHJvbWlzZTxzdHJpbmc+IHtcbiAgICAgICAgcmV0dXJuIHRoaXMucmVxdWVzdENvcmUoJ2NyeXB0by5uYWNsLnNpZ24uZGV0YWNoZWQnLCB7XG4gICAgICAgICAgICBtZXNzYWdlOiBmaXhJbnB1dE1lc3NhZ2UobWVzc2FnZSksXG4gICAgICAgICAgICBrZXksXG4gICAgICAgICAgICBvdXRwdXRFbmNvZGluZyxcbiAgICAgICAgfSk7XG4gICAgfVxuXG4gICAgLy8gTW5lbW9uaWNcblxuICAgIGFzeW5jIG1uZW1vbmljV29yZHMocGFyYW1zPzogVE9OTW5lbW9uaWNXb3Jkc1BhcmFtcyk6IFByb21pc2U8c3RyaW5nPiB7XG4gICAgICAgIHJldHVybiB0aGlzLnJlcXVlc3RDb3JlKCdjcnlwdG8ubW5lbW9uaWMud29yZHMnLCBwYXJhbXMgfHwge30pO1xuICAgIH1cblxuICAgIGFzeW5jIG1uZW1vbmljRnJvbVJhbmRvbShwYXJhbXM/OiBUT05NbmVtb25pY0Zyb21SYW5kb21QYXJhbXMpOiBQcm9taXNlPHN0cmluZz4ge1xuICAgICAgICByZXR1cm4gdGhpcy5yZXF1ZXN0Q29yZSgnY3J5cHRvLm1uZW1vbmljLmZyb20ucmFuZG9tJywgcGFyYW1zIHx8IHt9KTtcbiAgICB9XG5cbiAgICBhc3luYyBtbmVtb25pY0Zyb21FbnRyb3B5KHBhcmFtczogVE9OTW5lbW9uaWNGcm9tRW50cm9weVBhcmFtcyk6IFByb21pc2U8c3RyaW5nPiB7XG4gICAgICAgIHJldHVybiB0aGlzLnJlcXVlc3RDb3JlKFxuICAgICAgICAgICAgJ2NyeXB0by5tbmVtb25pYy5mcm9tLmVudHJvcHknLFxuICAgICAgICAgICAgcGFyYW1zLFxuICAgICAgICApO1xuICAgIH1cblxuICAgIGFzeW5jIG1uZW1vbmljSXNWYWxpZChwYXJhbXM6IFRPTk1uZW1vbmljSXNWYWxpZFBhcmFtcyk6IFByb21pc2U8Ym9vbGVhbj4ge1xuICAgICAgICByZXR1cm4gdGhpcy5yZXF1ZXN0Q29yZSgnY3J5cHRvLm1uZW1vbmljLnZlcmlmeScsIHBhcmFtcyk7XG4gICAgfVxuXG4gICAgYXN5bmMgbW5lbW9uaWNEZXJpdmVTaWduS2V5cyhwYXJhbXM6IFRPTk1uZW1vbmljRGVyaXZlU2lnbktleXNQYXJhbXMpOiBQcm9taXNlPFRPTktleVBhaXJEYXRhPiB7XG4gICAgICAgIHJldHVybiB0aGlzLnJlcXVlc3RDb3JlKCdjcnlwdG8ubW5lbW9uaWMuZGVyaXZlLnNpZ24ua2V5cycsIHBhcmFtcyk7XG4gICAgfVxuXG4gICAgLy8gSERLZXlzXG5cbiAgICBhc3luYyBoZGtleVhQcnZGcm9tTW5lbW9uaWMocGFyYW1zOiBUT05IREtleUZyb21NbmVtb25pY1BhcmFtcyk6IFByb21pc2U8c3RyaW5nPiB7XG4gICAgICAgIHJldHVybiB0aGlzLnJlcXVlc3RDb3JlKCdjcnlwdG8uaGRrZXkueHBydi5mcm9tLm1uZW1vbmljJywgcGFyYW1zKTtcbiAgICB9XG5cbiAgICBhc3luYyBoZGtleVhQcnZEZXJpdmUoXG4gICAgICAgIHNlcmlhbGl6ZWQ6IHN0cmluZyxcbiAgICAgICAgaW5kZXg6IG51bWJlcixcbiAgICAgICAgaGFyZGVuZWQ6IGJvb2xlYW4sXG4gICAgICAgIGNvbXBsaWFudDogYm9vbGVhbixcbiAgICApOiBQcm9taXNlPHN0cmluZz4ge1xuICAgICAgICByZXR1cm4gdGhpcy5yZXF1ZXN0Q29yZShcbiAgICAgICAgICAgICdjcnlwdG8uaGRrZXkueHBydi5kZXJpdmUnLFxuICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgIHNlcmlhbGl6ZWQsXG4gICAgICAgICAgICAgICAgaW5kZXgsXG4gICAgICAgICAgICAgICAgaGFyZGVuZWQsXG4gICAgICAgICAgICAgICAgY29tcGxpYW50LFxuICAgICAgICAgICAgfSxcbiAgICAgICAgKTtcbiAgICB9XG5cbiAgICBhc3luYyBoZGtleVhQcnZEZXJpdmVQYXRoKFxuICAgICAgICBzZXJpYWxpemVkOiBzdHJpbmcsXG4gICAgICAgIHBhdGg6IHN0cmluZyxcbiAgICAgICAgY29tcGxpYW50OiBib29sZWFuLFxuICAgICk6IFByb21pc2U8c3RyaW5nPiB7XG4gICAgICAgIHJldHVybiB0aGlzLnJlcXVlc3RDb3JlKFxuICAgICAgICAgICAgJ2NyeXB0by5oZGtleS54cHJ2LmRlcml2ZS5wYXRoJyxcbiAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICBzZXJpYWxpemVkLFxuICAgICAgICAgICAgICAgIHBhdGgsXG4gICAgICAgICAgICAgICAgY29tcGxpYW50LFxuICAgICAgICAgICAgfSxcbiAgICAgICAgKTtcbiAgICB9XG5cbiAgICBhc3luYyBoZGtleVhQcnZTZWNyZXQoc2VyaWFsaXplZDogc3RyaW5nKTogUHJvbWlzZTxzdHJpbmc+IHtcbiAgICAgICAgcmV0dXJuIHRoaXMucmVxdWVzdENvcmUoJ2NyeXB0by5oZGtleS54cHJ2LnNlY3JldCcsIHsgc2VyaWFsaXplZCB9KTtcbiAgICB9XG5cbiAgICBhc3luYyBoZGtleVhQcnZQdWJsaWMoc2VyaWFsaXplZDogc3RyaW5nKTogUHJvbWlzZTxzdHJpbmc+IHtcbiAgICAgICAgcmV0dXJuIHRoaXMucmVxdWVzdENvcmUoJ2NyeXB0by5oZGtleS54cHJ2LnB1YmxpYycsIHsgc2VyaWFsaXplZCB9KTtcbiAgICB9XG5cbn1cblxuVE9OQ3J5cHRvTW9kdWxlLm1vZHVsZU5hbWUgPSAnVE9OQ3J5cHRvTW9kdWxlJztcbiJdfQ==