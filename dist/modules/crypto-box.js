"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.decodeMessage = decodeMessage;
exports.encodeOutput = encodeOutput;
exports.CoreCryptoBox = void 0;

var _regenerator = _interopRequireDefault(require("@babel/runtime/regenerator"));

var _TONCryptoModule = require("./TONCryptoModule");

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
                return _context.abrupt("return", this.publicKey = _context.sent["public"]);

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
                console.log('>>> 2', keys);
                return _context2.abrupt("return", this.cryptoBox.crypto.naclSignDetached(message, "".concat(keys.secret).concat(keys["public"]), outputEncoding));

              case 5:
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
    value: function getPublicKey() {
      throw notImplemented;
    }
  }, {
    key: "encrypt",
    value: function encrypt(message, outputEncoding) {
      throw notImplemented;
    }
  }, {
    key: "decrypt",
    value: function decrypt(message, outputEncoding) {
      throw notImplemented;
    }
  }]);

  return CoreEncryptionBox;
}();

var DEFAULT_MNEMONIC_DICTIONARY = _TONCryptoModule.TONMnemonicDictionary.ENGLISH;
var DEFAULT_MNEMONIC_WORD_COUNT = 12;
var DEFAULT_HD_PATH = 'm/44\'/396\'/0\'/0/0';

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
    }()
  }, {
    key: "getEncryptionBox",
    value: function getEncryptionBox(params) {
      throw notImplemented;
    }
  }, {
    key: "close",
    value: function close() {
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
                _context4.t0 = console;
                _context4.next = 3;
                return this.seedPhraseEncryptionBox.decrypt(this.encryptedSeedPhrase, 'Text');

              case 3:
                _context4.t1 = _context4.sent;

                _context4.t0.log.call(_context4.t0, '>>>', _context4.t1);

                _context4.t2 = this.crypto;
                _context4.next = 8;
                return this.seedPhraseEncryptionBox.decrypt(this.encryptedSeedPhrase, 'Text');

              case 8:
                _context4.t3 = _context4.sent;
                _context4.t4 = hdPath;
                _context4.t5 = this.seedPhraseDictionary;
                _context4.t6 = this.seedPhraseWordCount;
                _context4.t7 = {
                  phrase: _context4.t3,
                  path: _context4.t4,
                  dictionary: _context4.t5,
                  wordCount: _context4.t6
                };
                _context4.next = 15;
                return _context4.t2.mnemonicDeriveSignKeys.call(_context4.t2, _context4.t7);

              case 15:
                return _context4.abrupt("return", _context4.sent);

              case 16:
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy9tb2R1bGVzL2NyeXB0by1ib3guanMiXSwibmFtZXMiOlsiZGVjb2RlTWVzc2FnZSIsIm1lc3NhZ2UiLCJiYXNlNjQiLCJCdWZmZXIiLCJmcm9tIiwiaGV4IiwidGV4dCIsImVuY29kZU91dHB1dCIsImJ1ZmZlciIsImVuY29kaW5nIiwidG9TdHJpbmciLCJ0b1VwcGVyQ2FzZSIsIm5vdEltcGxlbWVudGVkIiwiRXJyb3IiLCJDb3JlU2lnbmluZ0JveCIsImNyeXB0b0JveCIsImhkUGF0aCIsInB1YmxpY0tleSIsImdldFNpZ25LZXlzIiwib3V0cHV0RW5jb2RpbmciLCJrZXlzIiwiY29uc29sZSIsImxvZyIsImNyeXB0byIsIm5hY2xTaWduRGV0YWNoZWQiLCJzZWNyZXQiLCJDb3JlRW5jcnlwdGlvbkJveCIsIkRFRkFVTFRfTU5FTU9OSUNfRElDVElPTkFSWSIsIlRPTk1uZW1vbmljRGljdGlvbmFyeSIsIkVOR0xJU0giLCJERUZBVUxUX01ORU1PTklDX1dPUkRfQ09VTlQiLCJERUZBVUxUX0hEX1BBVEgiLCJyZXNvbHZlSERQYXRoIiwicGF0aCIsIkNvcmVDcnlwdG9Cb3giLCJwYXJhbXMiLCJlbmNyeXB0ZWRTZWVkUGhyYXNlIiwic2VlZFBocmFzZUVuY3J5cHRpb25Cb3giLCJzZWVkUGhyYXNlRGljdGlvbmFyeSIsInNlZWRQaHJhc2VXb3JkQ291bnQiLCJzaWduaW5nQm94ZXMiLCJNYXAiLCJlbmNyeXB0aW9uQm94ZXMiLCJzaWduaW5nQm94IiwiZ2V0Iiwic2V0IiwiUHJvbWlzZSIsInJlc29sdmUiLCJkZWNyeXB0IiwicGhyYXNlIiwiZGljdGlvbmFyeSIsIndvcmRDb3VudCIsIm1uZW1vbmljRGVyaXZlU2lnbktleXMiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7O0FBVUE7Ozs7Ozs7Ozs7Ozs7Ozs7QUFFTyxTQUFTQSxhQUFULENBQXVCQyxPQUF2QixFQUF5RDtBQUM1RCxNQUFJQSxPQUFPLENBQUNDLE1BQVosRUFBb0I7QUFD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LGtCQUFBQSxVO0FBQ0FDLGtCQUFBQSxTOzs7b0NBSnFCQyxzQiIsInNvdXJjZXNDb250ZW50IjpbIi8vQGZsb3dcbmltcG9ydCB0eXBlIHtcbiAgICBUT05DcnlwdG8sXG4gICAgVE9OQ3J5cHRvQm94LCBUT05DcnlwdG9Cb3hQYXJhbXMsXG4gICAgVE9ORW5jcnlwdGlvbkFsZ29yaXRobSxcbiAgICBUT05FbmNyeXB0aW9uQm94LFxuICAgIFRPTklucHV0TWVzc2FnZSwgVE9OS2V5UGFpckRhdGEsIFRPTk1uZW1vbmljRGljdGlvbmFyeVR5cGUsIFRPTk1uZW1vbmljV29yZENvdW50VHlwZSxcbiAgICBUT05PdXRwdXRFbmNvZGluZ1R5cGUsXG4gICAgVE9OU2lnbmluZ0JveCxcbn0gZnJvbSAnLi4vLi4vdHlwZXMnO1xuaW1wb3J0IHsgVE9OTW5lbW9uaWNEaWN0aW9uYXJ5IH0gZnJvbSAnLi9UT05DcnlwdG9Nb2R1bGUnO1xuXG5leHBvcnQgZnVuY3Rpb24gZGVjb2RlTWVzc2FnZShtZXNzYWdlOiBUT05JbnB1dE1lc3NhZ2UpOiBCdWZmZXIge1xuICAgIGlmIChtZXNzYWdlLmJhc2U2NCkge1xuICAgICAgICByZXR1cm4gQnVmZmVyLmZyb20obWVzc2FnZS5iYXNlNjQsICdiYXNlNjQnKTtcbiAgICB9XG4gICAgaWYgKG1lc3NhZ2UuaGV4KSB7XG4gICAgICAgIHJldHVybiBCdWZmZXIuZnJvbShtZXNzYWdlLmhleCwgJ2hleCcpO1xuICAgIH1cbiAgICByZXR1cm4gQnVmZmVyLmZyb20obWVzc2FnZS50ZXh0IHx8ICcnLCAndXRmOCcpO1xufVxuXG5cbmV4cG9ydCBmdW5jdGlvbiBlbmNvZGVPdXRwdXQoYnVmZmVyOiBCdWZmZXIsIGVuY29kaW5nOiBUT05PdXRwdXRFbmNvZGluZ1R5cGUpOiBzdHJpbmcge1xuICAgIHN3aXRjaCAoZW5jb2RpbmcpIHtcbiAgICBjYXNlICdCYXNlNjQnOlxuICAgICAgICByZXR1cm4gYnVmZmVyLnRvU3RyaW5nKCdiYXNlNjQnKTtcbiAgICBjYXNlICdIZXgnOlxuICAgICAgICByZXR1cm4gYnVmZmVyLnRvU3RyaW5nKCdoZXgnKTtcbiAgICBjYXNlICdIZXhVcHBlcmNhc2UnOlxuICAgICAgICByZXR1cm4gYnVmZmVyLnRvU3RyaW5nKCdoZXgnKS50b1VwcGVyQ2FzZSgpO1xuICAgIGRlZmF1bHQ6XG4gICAgICAgIHJldHVybiBidWZmZXIudG9TdHJpbmcoJ3V0ZjgnKTtcbiAgICB9XG59XG5cbmNvbnN0IG5vdEltcGxlbWVudGVkID0gbmV3IEVycm9yKCdOb3QgaW1wbGVtZW50ZWQnKTtcblxuY2xhc3MgQ29yZVNpZ25pbmdCb3ggaW1wbGVtZW50cyBUT05TaWduaW5nQm94IHtcbiAgICBjcnlwdG9Cb3g6IENvcmVDcnlwdG9Cb3g7XG4gICAgaGRQYXRoOiBzdHJpbmc7XG4gICAgcHVibGljS2V5OiA/c3RyaW5nO1xuXG4gICAgY29uc3RydWN0b3IoY3J5cHRvQm94OiBDb3JlQ3J5cHRvQm94LCBoZFBhdGg6IHN0cmluZykge1xuICAgICAgICB0aGlzLmNyeXB0b0JveCA9IGNyeXB0b0JveDtcbiAgICAgICAgdGhpcy5oZFBhdGggPSBoZFBhdGg7XG4gICAgICAgIHRoaXMucHVibGljS2V5ID0gbnVsbDtcbiAgICB9XG5cbiAgICBhc3luYyBnZXRQdWJsaWNLZXkoKTogUHJvbWlzZTxzdHJpbmc+IHtcbiAgICAgICAgaWYgKCF0aGlzLnB1YmxpY0tleSkge1xuICAgICAgICAgICAgcmV0dXJuIHRoaXMucHVibGljS2V5ID0gKGF3YWl0IHRoaXMuY3J5cHRvQm94LmdldFNpZ25LZXlzKHRoaXMuaGRQYXRoKSkucHVibGljO1xuICAgICAgICB9XG4gICAgICAgIHJldHVybiB0aGlzLnB1YmxpY0tleTtcbiAgICB9XG5cbiAgICBhc3luYyBzaWduKG1lc3NhZ2U6IFRPTklucHV0TWVzc2FnZSwgb3V0cHV0RW5jb2Rpbmc6IFRPTk91dHB1dEVuY29kaW5nVHlwZSk6IFByb21pc2U8c3RyaW5nPiB7XG4gICAgICAgIGNvbnN0IGtleXMgPSBhd2FpdCB0aGlzLmNyeXB0b0JveC5nZXRTaWduS2V5cyh0aGlzLmhkUGF0aCk7XG4gICAgICAgIGNvbnNvbGUubG9nKCc+Pj4gMicsIGtleXMpO1xuICAgICAgICByZXR1cm4gdGhpcy5jcnlwdG9Cb3guY3J5cHRvLm5hY2xTaWduRGV0YWNoZWQobWVzc2FnZSwgYCR7a2V5cy5zZWNyZXR9JHtrZXlzLnB1YmxpY31gLCBvdXRwdXRFbmNvZGluZyk7XG4gICAgfVxufVxuXG5jbGFzcyBDb3JlRW5jcnlwdGlvbkJveCBpbXBsZW1lbnRzIFRPTkVuY3J5cHRpb25Cb3gge1xuICAgIGdldFB1YmxpY0tleSgpOiBQcm9taXNlPHN0cmluZz4ge1xuICAgICAgICB0aHJvdyBub3RJbXBsZW1lbnRlZDtcbiAgICB9XG5cbiAgICBlbmNyeXB0KG1lc3NhZ2U6IFRPTklucHV0TWVzc2FnZSwgb3V0cHV0RW5jb2Rpbmc6IFRPTk91dHB1dEVuY29kaW5nVHlwZSk6IFByb21pc2U8c3RyaW5nPiB7XG4gICAgICAgIHRocm93IG5vdEltcGxlbWVudGVkO1xuICAgIH1cblxuICAgIGRlY3J5cHQobWVzc2FnZTogVE9OSW5wdXRNZXNzYWdlLCBvdXRwdXRFbmNvZGluZzogVE9OT3V0cHV0RW5jb2RpbmdUeXBlKTogUHJvbWlzZTxzdHJpbmc+IHtcbiAgICAgICAgdGhyb3cgbm90SW1wbGVtZW50ZWQ7XG4gICAgfVxuXG59XG5cbmNvbnN0IERFRkFVTFRfTU5FTU9OSUNfRElDVElPTkFSWSA9IFRPTk1uZW1vbmljRGljdGlvbmFyeS5FTkdMSVNIO1xuY29uc3QgREVGQVVMVF9NTkVNT05JQ19XT1JEX0NPVU5UID0gMTI7XG5jb25zdCBERUZBVUxUX0hEX1BBVEggPSAnbS80NFxcJy8zOTZcXCcvMFxcJy8wLzAnO1xuXG5mdW5jdGlvbiByZXNvbHZlSERQYXRoKHBhdGg/OiBzdHJpbmcpOiBzdHJpbmcge1xuICAgIGlmIChwYXRoID09PSBudWxsIHx8IHR5cGVvZiBwYXRoID09PSAndW5kZWZpbmVkJykge1xuICAgICAgICByZXR1cm4gREVGQVVMVF9IRF9QQVRIO1xuICAgIH1cbiAgICByZXR1cm4gcGF0aCB8fCAnbSc7XG59XG5cbmV4cG9ydCBjbGFzcyBDb3JlQ3J5cHRvQm94IGltcGxlbWVudHMgVE9OQ3J5cHRvQm94IHtcbiAgICBjcnlwdG86IFRPTkNyeXB0bztcbiAgICBlbmNyeXB0ZWRTZWVkUGhyYXNlOiBUT05JbnB1dE1lc3NhZ2U7XG4gICAgc2VlZFBocmFzZUVuY3J5cHRpb25Cb3g6IFRPTkVuY3J5cHRpb25Cb3g7XG4gICAgc2VlZFBocmFzZURpY3Rpb25hcnk6IFRPTk1uZW1vbmljRGljdGlvbmFyeVR5cGU7XG4gICAgc2VlZFBocmFzZVdvcmRDb3VudDogVE9OTW5lbW9uaWNXb3JkQ291bnRUeXBlO1xuXG4gICAgc2lnbmluZ0JveGVzOiBNYXA8c3RyaW5nLCBDb3JlU2lnbmluZ0JveD47XG4gICAgZW5jcnlwdGlvbkJveGVzOiBNYXA8c3RyaW5nLCBDb3JlRW5jcnlwdGlvbkJveD47XG5cbiAgICBjb25zdHJ1Y3RvcihjcnlwdG86IFRPTkNyeXB0bywgcGFyYW1zOiBUT05DcnlwdG9Cb3hQYXJhbXMpIHtcbiAgICAgICAgdGhpcy5jcnlwdG8gPSBjcnlwdG87XG4gICAgICAgIHRoaXMuZW5jcnlwdGVkU2VlZFBocmFzZSA9IHBhcmFtcy5lbmNyeXB0ZWRTZWVkUGhyYXNlO1xuICAgICAgICB0aGlzLnNlZWRQaHJhc2VFbmNyeXB0aW9uQm94ID0gcGFyYW1zLnNlZWRQaHJhc2VFbmNyeXB0aW9uQm94O1xuICAgICAgICB0aGlzLnNlZWRQaHJhc2VEaWN0aW9uYXJ5ID0gcGFyYW1zLnNlZWRQaHJhc2VEaWN0aW9uYXJ5IHx8IERFRkFVTFRfTU5FTU9OSUNfRElDVElPTkFSWTtcbiAgICAgICAgdGhpcy5zZWVkUGhyYXNlV29yZENvdW50ID0gcGFyYW1zLnNlZWRQaHJhc2VXb3JkQ291bnQgfHwgREVGQVVMVF9NTkVNT05JQ19XT1JEX0NPVU5UO1xuICAgICAgICB0aGlzLnNpZ25pbmdCb3hlcyA9IG5ldyBNYXAoKTtcbiAgICAgICAgdGhpcy5lbmNyeXB0aW9uQm94ZXMgPSBuZXcgTWFwKCk7XG4gICAgfVxuXG4gICAgYXN5bmMgZ2V0U2lnbmluZ0JveChwYXJhbXM/OiB7IGhkUGF0aD86IHN0cmluZyB9KTogUHJvbWlzZTxUT05TaWduaW5nQm94PiB7XG4gICAgICAgIGNvbnN0IGhkUGF0aCA9IHJlc29sdmVIRFBhdGgocGFyYW1zPy5oZFBhdGgpO1xuICAgICAgICBsZXQgc2lnbmluZ0JveCA9IHRoaXMuc2lnbmluZ0JveGVzLmdldChoZFBhdGgpO1xuICAgICAgICBpZiAoIXNpZ25pbmdCb3gpIHtcbiAgICAgICAgICAgIHNpZ25pbmdCb3ggPSBuZXcgQ29yZVNpZ25pbmdCb3godGhpcywgaGRQYXRoKTtcbiAgICAgICAgICAgIHRoaXMuc2lnbmluZ0JveGVzLnNldChoZFBhdGgsIHNpZ25pbmdCb3gpO1xuICAgICAgICB9XG4gICAgICAgIHJldHVybiBzaWduaW5nQm94O1xuICAgIH1cblxuICAgIGdldEVuY3J5cHRpb25Cb3gocGFyYW1zOiB7XG4gICAgICAgIGhkUGF0aD86IHN0cmluZyxcbiAgICAgICAgYWxnb3JpdGhtOiBUT05FbmNyeXB0aW9uQWxnb3JpdGhtLFxuICAgICAgICBhbGdvcml0aG1PcHRpb25zOiB7IFtzdHJpbmddOiBhbnkgfSxcbiAgICB9KTogUHJvbWlzZTxUT05FbmNyeXB0aW9uQm94PiB7XG4gICAgICAgIHRocm93IG5vdEltcGxlbWVudGVkO1xuICAgIH1cblxuICAgIGNsb3NlKCk6IFByb21pc2U8dm9pZD4ge1xuICAgICAgICByZXR1cm4gUHJvbWlzZS5yZXNvbHZlKCk7XG4gICAgfVxuXG4gICAgLy8gSW50ZXJuYWxzXG5cbiAgICBhc3luYyBnZXRTaWduS2V5cyhoZFBhdGg6IHN0cmluZyk6IFByb21pc2U8VE9OS2V5UGFpckRhdGE+IHtcbiAgICAgICAgY29uc29sZS5sb2coJz4+PicsIGF3YWl0IHRoaXMuc2VlZFBocmFzZUVuY3J5cHRpb25Cb3guZGVjcnlwdCh0aGlzLmVuY3J5cHRlZFNlZWRQaHJhc2UsICdUZXh0JykpO1xuICAgICAgICByZXR1cm4gYXdhaXQgdGhpcy5jcnlwdG8ubW5lbW9uaWNEZXJpdmVTaWduS2V5cyh7XG4gICAgICAgICAgICBwaHJhc2U6IGF3YWl0IHRoaXMuc2VlZFBocmFzZUVuY3J5cHRpb25Cb3guZGVjcnlwdCh0aGlzLmVuY3J5cHRlZFNlZWRQaHJhc2UsICdUZXh0JyksXG4gICAgICAgICAgICBwYXRoOiBoZFBhdGgsXG4gICAgICAgICAgICBkaWN0aW9uYXJ5OiB0aGlzLnNlZWRQaHJhc2VEaWN0aW9uYXJ5LFxuICAgICAgICAgICAgd29yZENvdW50OiB0aGlzLnNlZWRQaHJhc2VXb3JkQ291bnQsXG4gICAgICAgIH0pXG4gICAgfVxufVxuIl19