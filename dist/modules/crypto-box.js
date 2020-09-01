"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.decodeMessage = decodeMessage;
exports.encodeOutput = encodeOutput;
exports.CoreCryptoBox = exports.DEFAULT_HD_PATH = exports.DEFAULT_MNEMONIC_WORD_COUNT = exports.DEFAULT_MNEMONIC_DICTIONARY = void 0;

var _regenerator = _interopRequireDefault(require("@babel/runtime/regenerator"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { Promise.resolve(value).then(_next, _throw); } }

function _asyncToGenerator(fn) { return function () { var self = this, args = arguments; return new Promise(function (resolve, reject) { var gen = fn.apply(self, args); function _next(value) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "next", value); } function _throw(err) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "throw", err); } _next(undefined); }); }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

function decodeMessage(message) {
  if (message.base64) {
    return Buffer.from(message.base64, 'base64');
  }

  if (message.hex) {
    return Buffer.from(message.hex, 'hex');
  }

  return Buffer.from(message.text || '', 'utf8');
}

function encodeOutput(buffer, encoding) {
  switch (encoding) {
    case 'Base64':
      return buffer.toString('base64');

    case 'Hex':
      return buffer.toString('hex');

    case 'HexUppercase':
      return buffer.toString('hex').toUpperCase();

    default:
      return buffer.toString('utf8');
  }
}

var notImplemented = new Error('Not implemented');

var CoreSigningBox = /*#__PURE__*/function () {
  function CoreSigningBox(cryptoBox, hdPath) {
    _classCallCheck(this, CoreSigningBox);

    _defineProperty(this, "cryptoBox", void 0);

    _defineProperty(this, "hdPath", void 0);

    _defineProperty(this, "publicKey", void 0);

    this.cryptoBox = cryptoBox;
    this.hdPath = hdPath;
    this.publicKey = null;
  }

  _createClass(CoreSigningBox, [{
    key: "getPublicKey",
    value: function () {
      var _getPublicKey = _asyncToGenerator( /*#__PURE__*/_regenerator["default"].mark(function _callee() {
        return _regenerator["default"].wrap(function _callee$(_context) {
          while (1) {
            switch (_context.prev = _context.next) {
              case 0:
                if (this.publicKey) {
                  _context.next = 4;
                  break;
                }

                _context.next = 3;
                return this.cryptoBox.getSignKeys(this.hdPath);

              case 3:
                this.publicKey = _context.sent["public"];

              case 4:
                return _context.abrupt("return", this.publicKey);

              case 5:
              case "end":
                return _context.stop();
            }
          }
        }, _callee, this);
      }));

      function getPublicKey() {
        return _getPublicKey.apply(this, arguments);
      }

      return getPublicKey;
    }()
  }, {
    key: "sign",
    value: function () {
      var _sign = _asyncToGenerator( /*#__PURE__*/_regenerator["default"].mark(function _callee2(message, outputEncoding) {
        var keys;
        return _regenerator["default"].wrap(function _callee2$(_context2) {
          while (1) {
            switch (_context2.prev = _context2.next) {
              case 0:
                _context2.next = 2;
                return this.cryptoBox.getSignKeys(this.hdPath);

              case 2:
                keys = _context2.sent;
                return _context2.abrupt("return", this.cryptoBox.crypto.naclSignDetached(message, "".concat(keys.secret).concat(keys["public"]), outputEncoding));

              case 4:
              case "end":
                return _context2.stop();
            }
          }
        }, _callee2, this);
      }));

      function sign(_x, _x2) {
        return _sign.apply(this, arguments);
      }

      return sign;
    }()
  }]);

  return CoreSigningBox;
}();

var CoreEncryptionBox = /*#__PURE__*/function () {
  function CoreEncryptionBox() {
    _classCallCheck(this, CoreEncryptionBox);
  }

  _createClass(CoreEncryptionBox, [{
    key: "getPublicKey",
    // eslint-disable-next-line class-methods-use-this
    value: function getPublicKey() {
      throw notImplemented;
    } // eslint-disable-next-line class-methods-use-this,no-unused-vars

  }, {
    key: "encrypt",
    value: function encrypt(message, outputEncoding) {
      throw notImplemented;
    } // eslint-disable-next-line class-methods-use-this,no-unused-vars

  }, {
    key: "decrypt",
    value: function decrypt(message, outputEncoding) {
      throw notImplemented;
    }
  }]);

  return CoreEncryptionBox;
}();

var DEFAULT_MNEMONIC_DICTIONARY = 1;
exports.DEFAULT_MNEMONIC_DICTIONARY = DEFAULT_MNEMONIC_DICTIONARY;
var DEFAULT_MNEMONIC_WORD_COUNT = 12;
exports.DEFAULT_MNEMONIC_WORD_COUNT = DEFAULT_MNEMONIC_WORD_COUNT;
var DEFAULT_HD_PATH = 'm/44\'/396\'/0\'/0/0';
exports.DEFAULT_HD_PATH = DEFAULT_HD_PATH;

function resolveHDPath(path) {
  if (path === null || typeof path === 'undefined') {
    return DEFAULT_HD_PATH;
  }

  return path || 'm';
}

var CoreCryptoBox = /*#__PURE__*/function () {
  function CoreCryptoBox(crypto, params) {
    _classCallCheck(this, CoreCryptoBox);

    _defineProperty(this, "crypto", void 0);

    _defineProperty(this, "encryptedSeedPhrase", void 0);

    _defineProperty(this, "seedPhraseEncryptionBox", void 0);

    _defineProperty(this, "seedPhraseDictionary", void 0);

    _defineProperty(this, "seedPhraseWordCount", void 0);

    _defineProperty(this, "signingBoxes", void 0);

    _defineProperty(this, "encryptionBoxes", void 0);

    this.crypto = crypto;
    this.encryptedSeedPhrase = params.encryptedSeedPhrase;
    this.seedPhraseEncryptionBox = params.seedPhraseEncryptionBox;
    this.seedPhraseDictionary = params.seedPhraseDictionary || DEFAULT_MNEMONIC_DICTIONARY;
    this.seedPhraseWordCount = params.seedPhraseWordCount || DEFAULT_MNEMONIC_WORD_COUNT;
    this.signingBoxes = new Map();
    this.encryptionBoxes = new Map();
  }

  _createClass(CoreCryptoBox, [{
    key: "getSigningBox",
    value: function () {
      var _getSigningBox = _asyncToGenerator( /*#__PURE__*/_regenerator["default"].mark(function _callee3(params) {
        var hdPath, signingBox;
        return _regenerator["default"].wrap(function _callee3$(_context3) {
          while (1) {
            switch (_context3.prev = _context3.next) {
              case 0:
                hdPath = resolveHDPath(params === null || params === void 0 ? void 0 : params.hdPath);
                signingBox = this.signingBoxes.get(hdPath);

                if (!signingBox) {
                  signingBox = new CoreSigningBox(this, hdPath);
                  this.signingBoxes.set(hdPath, signingBox);
                }

                return _context3.abrupt("return", signingBox);

              case 4:
              case "end":
                return _context3.stop();
            }
          }
        }, _callee3, this);
      }));

      function getSigningBox(_x3) {
        return _getSigningBox.apply(this, arguments);
      }

      return getSigningBox;
    }() // eslint-disable-next-line class-methods-use-this,no-unused-vars

  }, {
    key: "getEncryptionBox",
    value: function getEncryptionBox(params) {
      throw notImplemented;
    }
  }, {
    key: "close",
    value: function close() {
      this.signingBoxes.clear();
      this.encryptionBoxes.clear();
      return Promise.resolve();
    } // Internals

  }, {
    key: "getSignKeys",
    value: function () {
      var _getSignKeys = _asyncToGenerator( /*#__PURE__*/_regenerator["default"].mark(function _callee4(hdPath) {
        return _regenerator["default"].wrap(function _callee4$(_context4) {
          while (1) {
            switch (_context4.prev = _context4.next) {
              case 0:
                _context4.t0 = this.crypto;
                _context4.next = 3;
                return this.seedPhraseEncryptionBox.decrypt(this.encryptedSeedPhrase, 'Text');

              case 3:
                _context4.t1 = _context4.sent;
                _context4.t2 = hdPath;
                _context4.t3 = this.seedPhraseDictionary;
                _context4.t4 = this.seedPhraseWordCount;
                _context4.t5 = {
                  phrase: _context4.t1,
                  path: _context4.t2,
                  dictionary: _context4.t3,
                  wordCount: _context4.t4
                };
                return _context4.abrupt("return", _context4.t0.mnemonicDeriveSignKeys.call(_context4.t0, _context4.t5));

              case 9:
              case "end":
                return _context4.stop();
            }
          }
        }, _callee4, this);
      }));

      function getSignKeys(_x4) {
        return _getSignKeys.apply(this, arguments);
      }

      return getSignKeys;
    }()
  }]);

  return CoreCryptoBox;
}();

exports.CoreCryptoBox = CoreCryptoBox;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy9tb2R1bGVzL2NyeXB0by1ib3guanMiXSwibmFtZXMiOlsiZGVjb2RlTWVzc2FnZSIsIm1lc3NhZ2UiLCJiYXNlNjQiLCJCdWZmZXIiLCJmcm9tIiwiaGV4IiwidGV4dCIsImVuY29kZU91dHB1dCIsImJ1ZmZlciIsImVuY29kaW5nIiwidG9TdHJpbmciLCJ0b1VwcGVyQ2FzZSIsIm5vdEltcGxlbWVudGVkIiwiRXJyb3IiLCJDb3JlU2lnbmluZ0JveCIsImNyeXB0b0JveCIsImhkUGF0aCIsInB1YmxpY0tleSIsImdldFNpZ25LZXlzIiwib3V0cHV0RW5jb2RpbmciLCJrZXlzIiwiY3J5cHRvIiwibmFjbFNpZ25EZXRhY2hlZCIsInNlY3JldCIsIkNvcmVFbmNyeXB0aW9uQm94IiwiREVGQVVMVF9NTkVNT05JQ19ESUNUSU9OQVJZIiwiREVGQVVMVF9NTkVNT05JQ19XT1JEX0NPVU5UIiwiREVGQVVMVF9IRF9QQVRIIiwicmVzb2x2ZUhEUGF0aCIsInBhdGgiLCJDb3JlQ3J5cHRvQm94IiwicGFyYW1zIiwiZW5jcnlwdGVkU2VlZFBocmFzZSIsInNlZWRQaHJhc2VFbmNyeXB0aW9uQm94Iiwic2VlZFBocmFzZURpY3Rpb25hcnkiLCJzZWVkUGhyYXNlV29yZENvdW50Iiwic2lnbmluZ0JveGVzIiwiTWFwIiwiZW5jcnlwdGlvbkJveGVzIiwic2lnbmluZ0JveCIsImdldCIsInNldCIsImNsZWFyIiwiUHJvbWlzZSIsInJlc29sdmUiLCJkZWNyeXB0IiwicGhyYXNlIiwiZGljdGlvbmFyeSIsIndvcmRDb3VudCIsIm1uZW1vbmljRGVyaXZlU2lnbktleXMiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFnQk8sU0FBU0EsYUFBVCxDQUF1QkMsT0FBdkIsRUFBeUQ7QUFDNUQsTUFBSUEsT0FBTyxDQUFDQyxNQUFaLEVBQW9CO0FBQ2hCLFdBQU9DLE1BQU0sQ0FBQ0MsSUFBUCxDQUFZSCxPQUFPLENBQUNDLE1BQXBC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QVAsSUFBOEJULDJCQUF6RDtBQUNBLFNBQUtVLFlBQUwsR0FBb0IsSUFBSUMsR0FBSixFQUFwQjtBQUNBLFNBQUtDLGVBQUwsR0FBdUIsSUFBSUQsR0FBSixFQUF2QjtBQUNIOzs7OzswR0FFbUJOLE07Ozs7OztBQUNWZixnQkFBQUEsTSxHQUFTWSxhQUFhLENBQUNHLE1BQUQsYUFBQ0EsTUFBRCx1QkFBQ0EsTUFBTSxDQUFFZixNQUFULEM7QUFDeEJ1QixnQkFBQUEsVSxHQUFhLEtBQUtILFlBQUwsQ0FBa0JJLEdBQWxCLENBQXNCeEIsTUFBdEIsQzs7QUFDakIsb0JBQUksQ0FBQ3VCLFVBQUwsRUFBaUI7QUFDYkEsa0JBQUFBLFVBQVUsR0FBRyxJQUFJekIsY0FBSixDQUFtQixJQUFuQixFQUF5QkUsTUFBekIsQ0FBYjtBQUNBLHVCQUFLb0IsWUFBTCxDQUFrQkssR0FBbEIsQ0FBc0J6QixNQUF0QixFQUE4QnVCLFVBQTlCO0FBQ0g7O2tEQUNNQSxVOzs7Ozs7Ozs7Ozs7Ozs7UUFHWDs7OztxQ0FDaUJSLE0sRUFJYTtBQUMxQixZQUFNbkIsY0FBTjtBQUNIOzs7NEJBRXNCO0FBQ25CLFdBQUt3QixZQUFMLENBQWtCTSxLQUFsQjtBQUNBLFdBQUtKLGVBQUwsQ0FBcUJJLEtBQXJCO0FBQ0EsYUFBT0MsT0FBTyxDQUFDQyxPQUFSLEVBQVA7QUFDSCxLLENBRUQ7Ozs7O3dHQUVrQjVCLE07Ozs7OytCQUNQLEtBQUtLLE07O3VCQUNNLEtBQUtZLHVCQUFMLENBQTZCWSxPQUE3QixDQUFxQyxLQUFLYixtQkFBMUMsRUFBK0QsTUFBL0QsQzs7OzsrQkFDUmhCLE07K0JBQ00sS0FBS2tCLG9COytCQUNOLEtBQUtDLG1COztBQUhoQlcsa0JBQUFBLE07QUFDQWpCLGtCQUFBQSxJO0FBQ0FrQixrQkFBQUEsVTtBQUNBQyxrQkFBQUEsUzs7K0RBSmVDLHNCIiwic291cmNlc0NvbnRlbnQiOlsiLy8gQGZsb3dcblxuaW1wb3J0IHR5cGUge1xuICAgIFRPTkNyeXB0byxcbiAgICBUT05DcnlwdG9Cb3gsXG4gICAgVE9OQ3J5cHRvQm94UGFyYW1zLFxuICAgIFRPTkVuY3J5cHRpb25BbGdvcml0aG0sXG4gICAgVE9ORW5jcnlwdGlvbkJveCxcbiAgICBUT05JbnB1dE1lc3NhZ2UsXG4gICAgVE9OS2V5UGFpckRhdGEsXG4gICAgVE9OTW5lbW9uaWNEaWN0aW9uYXJ5VHlwZSxcbiAgICBUT05NbmVtb25pY1dvcmRDb3VudFR5cGUsXG4gICAgVE9OT3V0cHV0RW5jb2RpbmdUeXBlLFxuICAgIFRPTlNpZ25pbmdCb3gsXG59IGZyb20gJy4uLy4uL3R5cGVzJztcblxuZXhwb3J0IGZ1bmN0aW9uIGRlY29kZU1lc3NhZ2UobWVzc2FnZTogVE9OSW5wdXRNZXNzYWdlKTogQnVmZmVyIHtcbiAgICBpZiAobWVzc2FnZS5iYXNlNjQpIHtcbiAgICAgICAgcmV0dXJuIEJ1ZmZlci5mcm9tKG1lc3NhZ2UuYmFzZTY0LCAnYmFzZTY0Jyk7XG4gICAgfVxuICAgIGlmIChtZXNzYWdlLmhleCkge1xuICAgICAgICByZXR1cm4gQnVmZmVyLmZyb20obWVzc2FnZS5oZXgsICdoZXgnKTtcbiAgICB9XG4gICAgcmV0dXJuIEJ1ZmZlci5mcm9tKG1lc3NhZ2UudGV4dCB8fCAnJywgJ3V0ZjgnKTtcbn1cblxuXG5leHBvcnQgZnVuY3Rpb24gZW5jb2RlT3V0cHV0KGJ1ZmZlcjogQnVmZmVyLCBlbmNvZGluZzogVE9OT3V0cHV0RW5jb2RpbmdUeXBlKTogc3RyaW5nIHtcbiAgICBzd2l0Y2ggKGVuY29kaW5nKSB7XG4gICAgY2FzZSAnQmFzZTY0JzpcbiAgICAgICAgcmV0dXJuIGJ1ZmZlci50b1N0cmluZygnYmFzZTY0Jyk7XG4gICAgY2FzZSAnSGV4JzpcbiAgICAgICAgcmV0dXJuIGJ1ZmZlci50b1N0cmluZygnaGV4Jyk7XG4gICAgY2FzZSAnSGV4VXBwZXJjYXNlJzpcbiAgICAgICAgcmV0dXJuIGJ1ZmZlci50b1N0cmluZygnaGV4JykudG9VcHBlckNhc2UoKTtcbiAgICBkZWZhdWx0OlxuICAgICAgICByZXR1cm4gYnVmZmVyLnRvU3RyaW5nKCd1dGY4Jyk7XG4gICAgfVxufVxuXG5jb25zdCBub3RJbXBsZW1lbnRlZCA9IG5ldyBFcnJvcignTm90IGltcGxlbWVudGVkJyk7XG5cblxuY2xhc3MgQ29yZVNpZ25pbmdCb3ggaW1wbGVtZW50cyBUT05TaWduaW5nQm94IHtcbiAgICBjcnlwdG9Cb3g6IENvcmVDcnlwdG9Cb3g7XG4gICAgaGRQYXRoOiBzdHJpbmc7XG4gICAgcHVibGljS2V5OiA/c3RyaW5nO1xuXG4gICAgY29uc3RydWN0b3IoY3J5cHRvQm94OiBDb3JlQ3J5cHRvQm94LCBoZFBhdGg6IHN0cmluZykge1xuICAgICAgICB0aGlzLmNyeXB0b0JveCA9IGNyeXB0b0JveDtcbiAgICAgICAgdGhpcy5oZFBhdGggPSBoZFBhdGg7XG4gICAgICAgIHRoaXMucHVibGljS2V5ID0gbnVsbDtcbiAgICB9XG5cbiAgICBhc3luYyBnZXRQdWJsaWNLZXkoKTogUHJvbWlzZTxzdHJpbmc+IHtcbiAgICAgICAgaWYgKCF0aGlzLnB1YmxpY0tleSkge1xuICAgICAgICAgICAgdGhpcy5wdWJsaWNLZXkgPSAoYXdhaXQgdGhpcy5jcnlwdG9Cb3guZ2V0U2lnbktleXModGhpcy5oZFBhdGgpKS5wdWJsaWM7XG4gICAgICAgIH1cbiAgICAgICAgcmV0dXJuIHRoaXMucHVibGljS2V5O1xuICAgIH1cblxuICAgIGFzeW5jIHNpZ24obWVzc2FnZTogVE9OSW5wdXRNZXNzYWdlLCBvdXRwdXRFbmNvZGluZzogVE9OT3V0cHV0RW5jb2RpbmdUeXBlKTogUHJvbWlzZTxzdHJpbmc+IHtcbiAgICAgICAgY29uc3Qga2V5cyA9IGF3YWl0IHRoaXMuY3J5cHRvQm94LmdldFNpZ25LZXlzKHRoaXMuaGRQYXRoKTtcbiAgICAgICAgcmV0dXJuIHRoaXMuY3J5cHRvQm94LmNyeXB0by5uYWNsU2lnbkRldGFjaGVkKG1lc3NhZ2UsIGAke2tleXMuc2VjcmV0fSR7a2V5cy5wdWJsaWN9YCwgb3V0cHV0RW5jb2RpbmcpO1xuICAgIH1cbn1cblxuXG5jbGFzcyBDb3JlRW5jcnlwdGlvbkJveCBpbXBsZW1lbnRzIFRPTkVuY3J5cHRpb25Cb3gge1xuICAgIC8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSBjbGFzcy1tZXRob2RzLXVzZS10aGlzXG4gICAgZ2V0UHVibGljS2V5KCk6IFByb21pc2U8c3RyaW5nPiB7XG4gICAgICAgIHRocm93IG5vdEltcGxlbWVudGVkO1xuICAgIH1cblxuICAgIC8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSBjbGFzcy1tZXRob2RzLXVzZS10aGlzLG5vLXVudXNlZC12YXJzXG4gICAgZW5jcnlwdChtZXNzYWdlOiBUT05JbnB1dE1lc3NhZ2UsIG91dHB1dEVuY29kaW5nOiBUT05PdXRwdXRFbmNvZGluZ1R5cGUpOiBQcm9taXNlPHN0cmluZz4ge1xuICAgICAgICB0aHJvdyBub3RJbXBsZW1lbnRlZDtcbiAgICB9XG5cbiAgICAvLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgY2xhc3MtbWV0aG9kcy11c2UtdGhpcyxuby11bnVzZWQtdmFyc1xuICAgIGRlY3J5cHQobWVzc2FnZTogVE9OSW5wdXRNZXNzYWdlLCBvdXRwdXRFbmNvZGluZzogVE9OT3V0cHV0RW5jb2RpbmdUeXBlKTogUHJvbWlzZTxzdHJpbmc+IHtcbiAgICAgICAgdGhyb3cgbm90SW1wbGVtZW50ZWQ7XG4gICAgfVxufVxuXG5cbmV4cG9ydCBjb25zdCBERUZBVUxUX01ORU1PTklDX0RJQ1RJT05BUlkgPSAxO1xuZXhwb3J0IGNvbnN0IERFRkFVTFRfTU5FTU9OSUNfV09SRF9DT1VOVCA9IDEyO1xuZXhwb3J0IGNvbnN0IERFRkFVTFRfSERfUEFUSCA9ICdtLzQ0XFwnLzM5NlxcJy8wXFwnLzAvMCc7XG5cbmZ1bmN0aW9uIHJlc29sdmVIRFBhdGgocGF0aD86IHN0cmluZyk6IHN0cmluZyB7XG4gICAgaWYgKHBhdGggPT09IG51bGwgfHwgdHlwZW9mIHBhdGggPT09ICd1bmRlZmluZWQnKSB7XG4gICAgICAgIHJldHVybiBERUZBVUxUX0hEX1BBVEg7XG4gICAgfVxuICAgIHJldHVybiBwYXRoIHx8ICdtJztcbn1cblxuZXhwb3J0IGNsYXNzIENvcmVDcnlwdG9Cb3ggaW1wbGVtZW50cyBUT05DcnlwdG9Cb3gge1xuICAgIGNyeXB0bzogVE9OQ3J5cHRvO1xuICAgIGVuY3J5cHRlZFNlZWRQaHJhc2U6IFRPTklucHV0TWVzc2FnZTtcbiAgICBzZWVkUGhyYXNlRW5jcnlwdGlvbkJveDogVE9ORW5jcnlwdGlvbkJveDtcbiAgICBzZWVkUGhyYXNlRGljdGlvbmFyeTogVE9OTW5lbW9uaWNEaWN0aW9uYXJ5VHlwZTtcbiAgICBzZWVkUGhyYXNlV29yZENvdW50OiBUT05NbmVtb25pY1dvcmRDb3VudFR5cGU7XG5cbiAgICBzaWduaW5nQm94ZXM6IE1hcDxzdHJpbmcsIENvcmVTaWduaW5nQm94PjtcbiAgICBlbmNyeXB0aW9uQm94ZXM6IE1hcDxzdHJpbmcsIENvcmVFbmNyeXB0aW9uQm94PjtcblxuICAgIGNvbnN0cnVjdG9yKGNyeXB0bzogVE9OQ3J5cHRvLCBwYXJhbXM6IFRPTkNyeXB0b0JveFBhcmFtcykge1xuICAgICAgICB0aGlzLmNyeXB0byA9IGNyeXB0bztcbiAgICAgICAgdGhpcy5lbmNyeXB0ZWRTZWVkUGhyYXNlID0gcGFyYW1zLmVuY3J5cHRlZFNlZWRQaHJhc2U7XG4gICAgICAgIHRoaXMuc2VlZFBocmFzZUVuY3J5cHRpb25Cb3ggPSBwYXJhbXMuc2VlZFBocmFzZUVuY3J5cHRpb25Cb3g7XG4gICAgICAgIHRoaXMuc2VlZFBocmFzZURpY3Rpb25hcnkgPSBwYXJhbXMuc2VlZFBocmFzZURpY3Rpb25hcnkgfHwgREVGQVVMVF9NTkVNT05JQ19ESUNUSU9OQVJZO1xuICAgICAgICB0aGlzLnNlZWRQaHJhc2VXb3JkQ291bnQgPSBwYXJhbXMuc2VlZFBocmFzZVdvcmRDb3VudCB8fCBERUZBVUxUX01ORU1PTklDX1dPUkRfQ09VTlQ7XG4gICAgICAgIHRoaXMuc2lnbmluZ0JveGVzID0gbmV3IE1hcCgpO1xuICAgICAgICB0aGlzLmVuY3J5cHRpb25Cb3hlcyA9IG5ldyBNYXAoKTtcbiAgICB9XG5cbiAgICBhc3luYyBnZXRTaWduaW5nQm94KHBhcmFtcz86IHsgaGRQYXRoPzogc3RyaW5nIH0pOiBQcm9taXNlPFRPTlNpZ25pbmdCb3g+IHtcbiAgICAgICAgY29uc3QgaGRQYXRoID0gcmVzb2x2ZUhEUGF0aChwYXJhbXM/LmhkUGF0aCk7XG4gICAgICAgIGxldCBzaWduaW5nQm94ID0gdGhpcy5zaWduaW5nQm94ZXMuZ2V0KGhkUGF0aCk7XG4gICAgICAgIGlmICghc2lnbmluZ0JveCkge1xuICAgICAgICAgICAgc2lnbmluZ0JveCA9IG5ldyBDb3JlU2lnbmluZ0JveCh0aGlzLCBoZFBhdGgpO1xuICAgICAgICAgICAgdGhpcy5zaWduaW5nQm94ZXMuc2V0KGhkUGF0aCwgc2lnbmluZ0JveCk7XG4gICAgICAgIH1cbiAgICAgICAgcmV0dXJuIHNpZ25pbmdCb3g7XG4gICAgfVxuXG4gICAgLy8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIGNsYXNzLW1ldGhvZHMtdXNlLXRoaXMsbm8tdW51c2VkLXZhcnNcbiAgICBnZXRFbmNyeXB0aW9uQm94KHBhcmFtczoge1xuICAgICAgICBoZFBhdGg/OiBzdHJpbmcsXG4gICAgICAgIGFsZ29yaXRobTogVE9ORW5jcnlwdGlvbkFsZ29yaXRobSxcbiAgICAgICAgYWxnb3JpdGhtT3B0aW9uczogeyBbc3RyaW5nXTogYW55IH0sXG4gICAgfSk6IFByb21pc2U8VE9ORW5jcnlwdGlvbkJveD4ge1xuICAgICAgICB0aHJvdyBub3RJbXBsZW1lbnRlZDtcbiAgICB9XG5cbiAgICBjbG9zZSgpOiBQcm9taXNlPHZvaWQ+IHtcbiAgICAgICAgdGhpcy5zaWduaW5nQm94ZXMuY2xlYXIoKTtcbiAgICAgICAgdGhpcy5lbmNyeXB0aW9uQm94ZXMuY2xlYXIoKTtcbiAgICAgICAgcmV0dXJuIFByb21pc2UucmVzb2x2ZSgpO1xuICAgIH1cblxuICAgIC8vIEludGVybmFsc1xuXG4gICAgYXN5bmMgZ2V0U2lnbktleXMoaGRQYXRoOiBzdHJpbmcpOiBQcm9taXNlPFRPTktleVBhaXJEYXRhPiB7XG4gICAgICAgIHJldHVybiB0aGlzLmNyeXB0by5tbmVtb25pY0Rlcml2ZVNpZ25LZXlzKHtcbiAgICAgICAgICAgIHBocmFzZTogYXdhaXQgdGhpcy5zZWVkUGhyYXNlRW5jcnlwdGlvbkJveC5kZWNyeXB0KHRoaXMuZW5jcnlwdGVkU2VlZFBocmFzZSwgJ1RleHQnKSxcbiAgICAgICAgICAgIHBhdGg6IGhkUGF0aCxcbiAgICAgICAgICAgIGRpY3Rpb25hcnk6IHRoaXMuc2VlZFBocmFzZURpY3Rpb25hcnksXG4gICAgICAgICAgICB3b3JkQ291bnQ6IHRoaXMuc2VlZFBocmFzZVdvcmRDb3VudCxcbiAgICAgICAgfSk7XG4gICAgfVxufVxuIl19