"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = exports.URLParts = void 0;

var _regenerator = _interopRequireDefault(require("@babel/runtime/regenerator"));

var _asyncToGenerator2 = _interopRequireDefault(require("@babel/runtime/helpers/asyncToGenerator"));

var _possibleConstructorReturn2 = _interopRequireDefault(require("@babel/runtime/helpers/possibleConstructorReturn"));

var _getPrototypeOf3 = _interopRequireDefault(require("@babel/runtime/helpers/getPrototypeOf"));

var _assertThisInitialized2 = _interopRequireDefault(require("@babel/runtime/helpers/assertThisInitialized"));

var _inherits2 = _interopRequireDefault(require("@babel/runtime/helpers/inherits"));

var _classCallCheck2 = _interopRequireDefault(require("@babel/runtime/helpers/classCallCheck"));

var _createClass2 = _interopRequireDefault(require("@babel/runtime/helpers/createClass"));

var _defineProperty2 = _interopRequireDefault(require("@babel/runtime/helpers/defineProperty"));

var _TONModule2 = require("../TONModule");

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
var URLParts =
/*#__PURE__*/
function () {
  (0, _createClass2["default"])(URLParts, null, [{
    key: "parse",
    value: function parse(url) {
      var protocolSeparatorPos = url.indexOf('://');
      var protocolEnd = protocolSeparatorPos >= 0 ? protocolSeparatorPos + 3 : 0;
      var questionPos = url.indexOf('?', protocolEnd);
      var queryStart = questionPos >= 0 ? questionPos + 1 : url.length;
      var pathEnd = questionPos >= 0 ? questionPos : url.length;
      var pathSeparatorPos = url.indexOf('/', protocolEnd); // eslint-disable-next-line no-nested-ternary

      var pathStart = pathSeparatorPos >= 0 ? pathSeparatorPos < pathEnd ? pathSeparatorPos : pathEnd : questionPos >= 0 ? questionPos : url.length;
      return new URLParts(url.substring(0, protocolEnd), url.substring(protocolEnd, pathStart), url.substring(pathStart, pathEnd), url.substring(queryStart));
    }
  }, {
    key: "resolveUrl",
    value: function resolveUrl(baseUrl, url) {
      var baseParts = URLParts.parse(baseUrl);
      var parts = URLParts.parse(url);
      parts.protocol = parts.protocol || baseParts.protocol;
      parts.host = parts.host || baseParts.host;
      return parts.toString();
    }
  }, {
    key: "fix",
    value: function fix(url, fixParts) {
      var parts = URLParts.parse(url);
      fixParts(parts);
      return parts.toString();
    }
  }, {
    key: "appendPath",
    value: function appendPath(url, path) {
      return URLParts.fix(url, function (parts) {
        parts.path = "".concat(parts.path, "/").concat(path);
      });
    }
  }]);

  function URLParts(protocol, host, path, query) {
    (0, _classCallCheck2["default"])(this, URLParts);
    (0, _defineProperty2["default"])(this, "protocol", void 0);
    (0, _defineProperty2["default"])(this, "host", void 0);
    (0, _defineProperty2["default"])(this, "path", void 0);
    (0, _defineProperty2["default"])(this, "query", void 0);
    this.protocol = protocol;
    this.host = host;
    this.path = path;
    this.query = query;
  }

  (0, _createClass2["default"])(URLParts, [{
    key: "toString",
    value: function toString() {
      var path = this.path;

      while (path.indexOf('//') >= 0) {
        path = path.replace('//', '/');
      }

      if (path !== '' && !path.startsWith('/')) {
        path = "/".concat(path);
      }

      return "".concat(this.protocol).concat(this.host).concat(path).concat(this.query !== '' ? '?' : '').concat(this.query);
    }
  }]);
  return URLParts;
}();

exports.URLParts = URLParts;

function resolveServer(configured, def) {
  return URLParts.fix(configured || def, function (parts) {
    if (parts.protocol === '') {
      parts.protocol = 'https://';
    }
  });
}

function replacePrefix(s, prefix, newPrefix) {
  return "".concat(newPrefix).concat(s.substr(prefix.length));
}

var defaultServer = 'services.tonlabs.io';

var TONConfigModule =
/*#__PURE__*/
function (_TONModule) {
  (0, _inherits2["default"])(TONConfigModule, _TONModule);

  function TONConfigModule() {
    var _getPrototypeOf2;

    var _this;

    (0, _classCallCheck2["default"])(this, TONConfigModule);

    for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    _this = (0, _possibleConstructorReturn2["default"])(this, (_getPrototypeOf2 = (0, _getPrototypeOf3["default"])(TONConfigModule)).call.apply(_getPrototypeOf2, [this].concat(args)));
    (0, _defineProperty2["default"])((0, _assertThisInitialized2["default"])(_this), "data", void 0);
    (0, _defineProperty2["default"])((0, _assertThisInitialized2["default"])(_this), "_logVerbose", void 0);
    (0, _defineProperty2["default"])((0, _assertThisInitialized2["default"])(_this), "_requestsUrl", void 0);
    (0, _defineProperty2["default"])((0, _assertThisInitialized2["default"])(_this), "_queriesHttpUrl", void 0);
    (0, _defineProperty2["default"])((0, _assertThisInitialized2["default"])(_this), "_queriesWsUrl", void 0);
    (0, _defineProperty2["default"])((0, _assertThisInitialized2["default"])(_this), "_profileStart", void 0);
    (0, _defineProperty2["default"])((0, _assertThisInitialized2["default"])(_this), "_profilePrev", void 0);
    return _this;
  }

  (0, _createClass2["default"])(TONConfigModule, [{
    key: "setData",
    value: function setData(data) {
      this.data = data || {
        servers: [defaultServer]
      };
      var server = resolveServer(data.servers[0], defaultServer);
      this._requestsUrl = resolveServer(data.requestsServer, URLParts.appendPath(server, '/topics/requests'));
      this._queriesHttpUrl = resolveServer(data.queriesServer, URLParts.appendPath(server, '/graphql'));
      var queriesWsServer = this._queriesHttpUrl.startsWith('https://') ? replacePrefix(this._queriesHttpUrl, "https://", "wss://") : replacePrefix(this._queriesHttpUrl, "http://", "ws://");
      this._queriesWsUrl = resolveServer(data.queriesWsServer, queriesWsServer);
    }
  }, {
    key: "log",
    value: function log() {
      var profile = (this._profileStart || 0) != 0;

      for (var _len2 = arguments.length, args = new Array(_len2), _key2 = 0; _key2 < _len2; _key2++) {
        args[_key2] = arguments[_key2];
      }

      if (profile) {
        var current = Date.now() / 1000;
        var timeString = String(current.toFixed(3)) + " " + String((current - this._profileStart).toFixed(3)) + " " + String((current - this._profilePrev).toFixed(3));

        if (this._logVerbose) {
          var _console;

          (_console = console).log.apply(_console, ["[".concat(timeString, "]\n")].concat(args));
        } else {
          console.log("[".concat(timeString, "]\n"), args[0]);
        }

        this._profilePrev = current;
      } else if (this._logVerbose) {
        var _console2;

        (_console2 = console).log.apply(_console2, ["[".concat(Date.now() / 1000, "]")].concat(args));
      }
    }
  }, {
    key: "startProfile",
    value: function startProfile() {
      this._profileStart = Date.now() / 1000;
      this._profilePrev = this._profileStart;
    }
  }, {
    key: "requestsUrl",
    value: function requestsUrl() {
      return this._requestsUrl;
    }
  }, {
    key: "queriesHttpUrl",
    value: function queriesHttpUrl() {
      return this._queriesHttpUrl;
    }
  }, {
    key: "queriesWsUrl",
    value: function queriesWsUrl() {
      return this._queriesWsUrl;
    }
  }, {
    key: "getVersion",
    value: function () {
      var _getVersion = (0, _asyncToGenerator2["default"])(
      /*#__PURE__*/
      _regenerator["default"].mark(function _callee() {
        return _regenerator["default"].wrap(function _callee$(_context) {
          while (1) {
            switch (_context.prev = _context.next) {
              case 0:
                return _context.abrupt("return", this.requestCore('version'));

              case 1:
              case "end":
                return _context.stop();
            }
          }
        }, _callee, this);
      }));

      function getVersion() {
        return _getVersion.apply(this, arguments);
      }

      return getVersion;
    }()
  }, {
    key: "setup",
    value: function () {
      var _setup = (0, _asyncToGenerator2["default"])(
      /*#__PURE__*/
      _regenerator["default"].mark(function _callee2() {
        return _regenerator["default"].wrap(function _callee2$(_context2) {
          while (1) {
            switch (_context2.prev = _context2.next) {
              case 0:
                if (!this.data) {
                  _context2.next = 3;
                  break;
                }

                _context2.next = 3;
                return this.requestCore('setup', this.data);

              case 3:
                this._logVerbose = this.data && this.data.log_verbose || false;

              case 4:
              case "end":
                return _context2.stop();
            }
          }
        }, _callee2, this);
      }));

      function setup() {
        return _setup.apply(this, arguments);
      }

      return setup;
    }()
  }]);
  return TONConfigModule;
}(_TONModule2.TONModule);

exports["default"] = TONConfigModule;
TONConfigModule.moduleName = 'TONConfigModule';
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy9tb2R1bGVzL1RPTkNvbmZpZ01vZHVsZS5qcyJdLCJuYW1lcyI6WyJVUkxQYXJ0cyIsInVybCIsInByb3RvY29sU2VwYXJhdG9yUG9zIiwiaW5kZXhPZiIsInByb3RvY29sRW5kIiwicXVlc3Rpb25Qb3MiLCJxdWVyeVN0YXJ0IiwibGVuZ3RoIiwicGF0aEVuZCIsInBhdGhTZXBhcmF0b3JQb3MiLCJwYXRoU3RhcnQiLCJzdWJzdHJpbmciLCJiYXNlVXJsIiwiYmFzZVBhcnRzIiwicGFyc2UiLCJwYXJ0cyIsInByb3RvY29sIiwiaG9zdCIsInRvU3RyaW5nIiwiZml4UGFydHMiLCJwYXRoIiwiZml4IiwicXVlcnkiLCJyZXBsYWNlIiwic3RhcnRzV2l0aCIsInJlc29sdmVTZXJ2ZXIiLCJjb25maWd1cmVkIiwiZGVmIiwicmVwbGFjZVByZWZpeCIsInMiLCJwcmVmaXgiLCJuZXdQcmVmaXgiLCJzdWJzdHIiLCJkZWZhdWx0U2VydmVyIiwiVE9OQ29uZmlnTW9kdWxlIiwiZGF0YSIsInNlcnZlcnMiLCJzZXJ2ZXIiLCJfcmVxdWVzdHNVcmwiLCJyZXF1ZXN0c1NlcnZlciIsImFwcGVuZFBhdGgiLCJfcXVlcmllc0h0dHBVcmwiLCJxdWVyaWVzU2VydmVyIiwicXVlcmllc1dzU2VydmVyIiwiX3F1ZXJpZXNXc1VybCIsInByb2ZpbGUiLCJfcHJvZmlsZVN0YXJ0IiwiYXJncyIsImN1cnJlbnQiLCJEYXRlIiwibm93IiwidGltZVN0cmluZyIsIlN0cmluZyIsInRvRml4ZWQiLCJfcHJvZmlsZVByZXYiLCJfbG9nVmVyYm9zZSIsImNvbnNvbGUiLCJsb2ciLCJyZXF1ZXN0Q29yZSIsImxvZ192ZXJib3NlIiwiVE9OTW9kdWxlIiwibW9kdWxlTmFtZSJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBaUJBOztBQWpCQTs7Ozs7Ozs7Ozs7Ozs7O0lBNEJhQSxROzs7OzswQkFDSUMsRyxFQUF1QjtBQUNoQyxVQUFNQyxv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T0xVVElPTlMgTFRELlxuICpcbiAqIExpY2Vuc2VkIHVuZGVyIHRoZSBTT0ZUV0FSRSBFVkFMVUFUSU9OIExpY2Vuc2UgKHRoZSBcIkxpY2Vuc2VcIik7IHlvdSBtYXkgbm90IHVzZVxuICogdGhpcyBmaWxlIGV4Y2VwdCBpbiBjb21wbGlhbmNlIHdpdGggdGhlIExpY2Vuc2UuICBZb3UgbWF5IG9idGFpbiBhIGNvcHkgb2YgdGhlXG4gKiBMaWNlbnNlIGF0OlxuICpcbiAqIGh0dHA6Ly93d3cudG9uLmRldi9saWNlbnNlc1xuICpcbiAqIFVubGVzcyByZXF1aXJlZCBieSBhcHBsaWNhYmxlIGxhdyBvciBhZ3JlZWQgdG8gaW4gd3JpdGluZywgc29mdHdhcmVcbiAqIGRpc3RyaWJ1dGVkIHVuZGVyIHRoZSBMaWNlbnNlIGlzIGRpc3RyaWJ1dGVkIG9uIGFuIFwiQVMgSVNcIiBCQVNJUyxcbiAqIFdJVEhPVVQgV0FSUkFOVElFUyBPUiBDT05ESVRJT05TIE9GIEFOWSBLSU5ELCBlaXRoZXIgZXhwcmVzcyBvciBpbXBsaWVkLlxuICogU2VlIHRoZSBMaWNlbnNlIGZvciB0aGUgc3BlY2lmaWMgVE9OIERFViBzb2Z0d2FyZSBnb3Zlcm5pbmcgcGVybWlzc2lvbnMgYW5kXG4gKiBsaW1pdGF0aW9ucyB1bmRlciB0aGUgTGljZW5zZS5cbiAqL1xuXG4vLyBAZmxvd1xuaW1wb3J0IHsgVE9OTW9kdWxlIH0gZnJvbSAnLi4vVE9OTW9kdWxlJztcblxuZXhwb3J0IHR5cGUgVE9OQ29uZmlnRGF0YSA9IHtcbiAgICBkZWZhdWx0V29ya2NoYWluOiA/bnVtYmVyLFxuICAgIHNlcnZlcnM6IHN0cmluZ1tdLFxuICAgIHJlcXVlc3RzU2VydmVyPzogc3RyaW5nLFxuICAgIHF1ZXJpZXNTZXJ2ZXI/OiBzdHJpbmcsXG4gICAgcXVlcmllc1dzU2VydmVyPzogc3RyaW5nLFxuICAgIGxvZ192ZXJib3NlPzogYm9vbGVhbixcbn1cblxuZXhwb3J0IGNsYXNzIFVSTFBhcnRzIHtcbiAgICBzdGF0aWMgcGFyc2UodXJsOiBzdHJpbmcpOiBVUkxQYXJ0cyB7XG4gICAgICAgIGNvbnN0IHByb3RvY29sU2VwYXJhdG9yUG9zID0gdXJsLmluZGV4T2YoJzovLycpO1xuICAgICAgICBjb25zdCBwcm90b2NvbEVuZCA9IHByb3RvY29sU2VwYXJhdG9yUG9zID49IDAgPyBwcm90b2NvbFNlcGFyYXRvclBvcyArIDMgOiAwO1xuICAgICAgICBjb25zdCBxdWVzdGlvblBvcyA9IHVybC5pbmRleE9mKCc/JywgcHJvdG9jb2xFbmQpO1xuICAgICAgICBjb25zdCBxdWVyeVN0YXJ0ID0gcXVlc3Rpb25Qb3MgPj0gMCA/IHF1ZXN0aW9uUG9zICsgMSA6IHVybC5sZW5ndGg7XG4gICAgICAgIGNvbnN0IHBhdGhFbmQgPSBxdWVzdGlvblBvcyA+PSAwID8gcXVlc3Rpb25Qb3MgOiB1cmwubGVuZ3RoO1xuICAgICAgICBjb25zdCBwYXRoU2VwYXJhdG9yUG9zID0gdXJsLmluZGV4T2YoJy8nLCBwcm90b2NvbEVuZCk7XG4gICAgICAgIC8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSBuby1uZXN0ZWQtdGVybmFyeVxuICAgICAgICBjb25zdCBwYXRoU3RhcnQgPSBwYXRoU2VwYXJhdG9yUG9zID49IDBcbiAgICAgICAgICAgID8gKHBhdGhTZXBhcmF0b3JQb3MgPCBwYXRoRW5kID8gcGF0aFNlcGFyYXRvclBvcyA6IHBhdGhFbmQpXG4gICAgICAgICAgICA6IChxdWVzdGlvblBvcyA+PSAwID8gcXVlc3Rpb25Qb3MgOiB1cmwubGVuZ3RoKTtcbiAgICAgICAgcmV0dXJuIG5ldyBVUkxQYXJ0cyhcbiAgICAgICAgICAgIHVybC5zdWJzdHJpbmcoMCwgcHJvdG9jb2xFbmQpLFxuICAgICAgICAgICAgdXJsLnN1YnN0cmluZyhwcm90b2NvbEVuZCwgcGF0aFN0YXJ0KSxcbiAgICAgICAgICAgIHVybC5zdWJzdHJpbmcocGF0aFN0YXJ0LCBwYXRoRW5kKSxcbiAgICAgICAgICAgIHVybC5zdWJzdHJpbmcocXVlcnlTdGFydClcbiAgICAgICAgKVxuICAgIH1cblxuICAgIHN0YXRpYyByZXNvbHZlVXJsKGJhc2VVcmw6IHN0cmluZywgdXJsOiBzdHJpbmcpOiBzdHJpbmcge1xuICAgICAgICBjb25zdCBiYXNlUGFydHMgPSBVUkxQYXJ0cy5wYXJzZShiYXNlVXJsKTtcbiAgICAgICAgY29uc3QgcGFydHMgPSBVUkxQYXJ0cy5wYXJzZSh1cmwpO1xuICAgICAgICBwYXJ0cy5wcm90b2NvbCA9IHBhcnRzLnByb3RvY29sIHx8IGJhc2VQYXJ0cy5wcm90b2NvbDtcbiAgICAgICAgcGFydHMuaG9zdCA9IHBhcnRzLmhvc3QgfHwgYmFzZVBhcnRzLmhvc3Q7XG4gICAgICAgIHJldHVybiBwYXJ0cy50b1N0cmluZygpO1xuICAgIH1cblxuICAgIHN0YXRpYyBmaXgodXJsOiBzdHJpbmcsIGZpeFBhcnRzOiAocGFydHM6IFVSTFBhcnRzKSA9PiB2b2lkKTogc3RyaW5nIHtcbiAgICAgICAgbGV0IHBhcnRzID0gVVJMUGFydHMucGFyc2UodXJsKTtcbiAgICAgICAgZml4UGFydHMocGFydHMpO1xuICAgICAgICByZXR1cm4gcGFydHMudG9TdHJpbmcoKTtcbiAgICB9XG5cblxuICAgIHN0YXRpYyBhcHBlbmRQYXRoKHVybDogc3RyaW5nLCBwYXRoOiBzdHJpbmcpOiBzdHJpbmcge1xuICAgICAgICByZXR1cm4gVVJMUGFydHMuZml4KHVybCwgKHBhcnRzKSA9PiB7XG4gICAgICAgICAgICBwYXJ0cy5wYXRoID0gYCR7cGFydHMucGF0aH0vJHtwYXRofWA7XG4gICAgICAgIH0pO1xuICAgIH1cblxuICAgIHByb3RvY29sOiBzdHJpbmc7XG4gICAgaG9zdDogc3RyaW5nO1xuICAgIHBhdGg6IHN0cmluZztcbiAgICBxdWVyeTogc3RyaW5nO1xuXG4gICAgY29uc3RydWN0b3IocHJvdG9jb2w6IHN0cmluZywgaG9zdDogc3RyaW5nLCBwYXRoOiBzdHJpbmcsIHF1ZXJ5OiBzdHJpbmcpIHtcbiAgICAgICAgdGhpcy5wcm90b2NvbCA9IHByb3RvY29sO1xuICAgICAgICB0aGlzLmhvc3QgPSBob3N0O1xuICAgICAgICB0aGlzLnBhdGggPSBwYXRoO1xuICAgICAgICB0aGlzLnF1ZXJ5ID0gcXVlcnk7XG4gICAgfVxuXG5cbiAgICB0b1N0cmluZygpOiBzdHJpbmcge1xuICAgICAgICBsZXQgeyBwYXRoIH0gPSB0aGlzO1xuICAgICAgICB3aGlsZSAocGF0aC5pbmRleE9mKCcvLycpID49IDApIHtcbiAgICAgICAgICAgIHBhdGggPSBwYXRoLnJlcGxhY2UoJy8vJywgJy8nKTtcbiAgICAgICAgfVxuICAgICAgICBpZiAocGF0aCAhPT0gJycgJiYgIXBhdGguc3RhcnRzV2l0aCgnLycpKSB7XG4gICAgICAgICAgICBwYXRoID0gYC8ke3BhdGh9YDtcbiAgICAgICAgfVxuICAgICAgICByZXR1cm4gYCR7dGhpcy5wcm90b2NvbH0ke3RoaXMuaG9zdH0ke3BhdGh9JHt0aGlzLnF1ZXJ5ICE9PSAnJyA/ICc/JyA6ICcnfSR7dGhpcy5xdWVyeX1gO1xuICAgIH1cbn1cblxuZnVuY3Rpb24gcmVzb2x2ZVNlcnZlcihjb25maWd1cmVkPzogc3RyaW5nLCBkZWY6IHN0cmluZyk6IHN0cmluZyB7XG4gICAgcmV0dXJuIFVSTFBhcnRzLmZpeChjb25maWd1cmVkIHx8IGRlZiwgKHBhcnRzKSA9PiB7XG4gICAgICAgIGlmIChwYXJ0cy5wcm90b2NvbCA9PT0gJycpIHtcbiAgICAgICAgICAgIHBhcnRzLnByb3RvY29sID0gJ2h0dHBzOi8vJztcbiAgICAgICAgfVxuICAgIH0pO1xufVxuXG5mdW5jdGlvbiByZXBsYWNlUHJlZml4KHMsIHByZWZpeCwgbmV3UHJlZml4KSB7XG4gICAgcmV0dXJuIGAke25ld1ByZWZpeH0ke3Muc3Vic3RyKHByZWZpeC5sZW5ndGgpfWA7XG59XG5cbmNvbnN0IGRlZmF1bHRTZXJ2ZXIgPSAnc2VydmljZXMudG9ubGFicy5pbyc7XG5cbmV4cG9ydCBkZWZhdWx0IGNsYXNzIFRPTkNvbmZpZ01vZHVsZSBleHRlbmRzIFRPTk1vZHVsZSB7XG4gICAgZGF0YTogP1RPTkNvbmZpZ0RhdGE7XG5cblxuICAgIHNldERhdGEoZGF0YTogVE9OQ29uZmlnRGF0YSkge1xuXG4gICAgICAgIHRoaXMuZGF0YSA9IGRhdGEgfHwge1xuICAgICAgICAgICAgc2VydmVyczogW2RlZmF1bHRTZXJ2ZXJdLFxuICAgICAgICB9O1xuICAgICAgICBsZXQgc2VydmVyID0gcmVzb2x2ZVNlcnZlcihkYXRhLnNlcnZlcnNbMF0sIGRlZmF1bHRTZXJ2ZXIpO1xuICAgICAgICB0aGlzLl9yZXF1ZXN0c1VybCA9IHJlc29sdmVTZXJ2ZXIoZGF0YS5yZXF1ZXN0c1NlcnZlciwgVVJMUGFydHMuYXBwZW5kUGF0aChzZXJ2ZXIsICcvdG9waWNzL3JlcXVlc3RzJykpO1xuICAgICAgICB0aGlzLl9xdWVyaWVzSHR0cFVybCA9IHJlc29sdmVTZXJ2ZXIoZGF0YS5xdWVyaWVzU2VydmVyLCBVUkxQYXJ0cy5hcHBlbmRQYXRoKHNlcnZlciwgJy9ncmFwaHFsJykpO1xuICAgICAgICBjb25zdCBxdWVyaWVzV3NTZXJ2ZXIgPSB0aGlzLl9xdWVyaWVzSHR0cFVybC5zdGFydHNXaXRoKCdodHRwczovLycpXG4gICAgICAgICAgICA/IHJlcGxhY2VQcmVmaXgodGhpcy5fcXVlcmllc0h0dHBVcmwsIFwiaHR0cHM6Ly9cIiwgXCJ3c3M6Ly9cIilcbiAgICAgICAgICAgIDogcmVwbGFjZVByZWZpeCh0aGlzLl9xdWVyaWVzSHR0cFVybCwgXCJodHRwOi8vXCIsIFwid3M6Ly9cIik7XG5cbiAgICAgICAgdGhpcy5fcXVlcmllc1dzVXJsID0gcmVzb2x2ZVNlcnZlcihkYXRhLnF1ZXJpZXNXc1NlcnZlciwgcXVlcmllc1dzU2VydmVyKTtcbiAgICB9XG5cbiAgICBsb2coLi4uYXJnczogYW55W10pIHtcbiAgICAgICAgY29uc3QgcHJvZmlsZSA9ICh0aGlzLl9wcm9maWxlU3RhcnQgfHwgMCkgIT0gMDtcbiAgICAgICAgaWYgKHByb2ZpbGUpIHtcbiAgICAgICAgICAgIGNvbnN0IGN1cnJlbnQgPSBEYXRlLm5vdygpIC8gMTAwMDtcbiAgICAgICAgICAgIGNvbnN0IHRpbWVTdHJpbmcgPSBTdHJpbmcoY3VycmVudC50b0ZpeGVkKDMpKSArIFwiIFwiICtcbiAgICAgICAgICAgICAgICBTdHJpbmcoKGN1cnJlbnQgLSB0aGlzLl9wcm9maWxlU3RhcnQpLnRvRml4ZWQoMykpICsgXCIgXCIgK1xuICAgICAgICAgICAgICAgIFN0cmluZygoY3VycmVudCAtIHRoaXMuX3Byb2ZpbGVQcmV2KS50b0ZpeGVkKDMpKTtcbiAgICAgICAgICAgIGlmICh0aGlzLl9sb2dWZXJib3NlKSB7XG4gICAgICAgICAgICAgICAgY29uc29sZS5sb2coYFske3RpbWVTdHJpbmd9XVxcbmAsIC4uLmFyZ3MpO1xuICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgICBjb25zb2xlLmxvZyhgWyR7dGltZVN0cmluZ31dXFxuYCwgYXJnc1swXSk7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICB0aGlzLl9wcm9maWxlUHJldiA9IGN1cnJlbnQ7XG4gICAgICAgIH0gZWxzZSBpZiAodGhpcy5fbG9nVmVyYm9zZSkge1xuICAgICAgICAgICAgY29uc29sZS5sb2coYFske0RhdGUubm93KCkgLyAxMDAwfV1gLCAuLi5hcmdzKTtcbiAgICAgICAgfVxuICAgIH1cblxuICAgIHN0YXJ0UHJvZmlsZSgpIHtcbiAgICAgICAgdGhpcy5fcHJvZmlsZVN0YXJ0ID0gRGF0ZS5ub3coKSAvIDEwMDA7XG4gICAgICAgIHRoaXMuX3Byb2ZpbGVQcmV2ID0gdGhpcy5fcHJvZmlsZVN0YXJ0O1xuICAgIH1cblxuICAgIHJlcXVlc3RzVXJsKCk6IHN0cmluZyB7XG4gICAgICAgIHJldHVybiB0aGlzLl9yZXF1ZXN0c1VybDtcbiAgICB9XG5cbiAgICBxdWVyaWVzSHR0cFVybCgpOiBzdHJpbmcge1xuICAgICAgICByZXR1cm4gdGhpcy5fcXVlcmllc0h0dHBVcmw7XG4gICAgfVxuXG4gICAgcXVlcmllc1dzVXJsKCk6IHN0cmluZyB7XG4gICAgICAgIHJldHVybiB0aGlzLl9xdWVyaWVzV3NVcmw7XG4gICAgfVxuXG4gICAgYXN5bmMgZ2V0VmVyc2lvbigpOiBQcm9taXNlPHN0cmluZz4ge1xuICAgICAgICByZXR1cm4gdGhpcy5yZXF1ZXN0Q29yZSgndmVyc2lvbicpO1xuICAgIH1cblxuXG4gICAgYXN5bmMgc2V0dXAoKTogUHJvbWlzZTx2b2lkPiB7XG4gICAgICAgIGlmICh0aGlzLmRhdGEpIHtcbiAgICAgICAgICAgIGF3YWl0IHRoaXMucmVxdWVzdENvcmUoJ3NldHVwJywgdGhpcy5kYXRhKTtcbiAgICAgICAgfVxuICAgICAgICB0aGlzLl9sb2dWZXJib3NlID0gKHRoaXMuZGF0YSAmJiB0aGlzLmRhdGEubG9nX3ZlcmJvc2UpIHx8IGZhbHNlO1xuICAgIH1cblxuICAgIF9sb2dWZXJib3NlOiBib29sZWFuO1xuICAgIF9yZXF1ZXN0c1VybDogc3RyaW5nO1xuICAgIF9xdWVyaWVzSHR0cFVybDogc3RyaW5nO1xuICAgIF9xdWVyaWVzV3NVcmw6IHN0cmluZztcbiAgICBfcHJvZmlsZVN0YXJ0OiBudW1iZXI7XG4gICAgX3Byb2ZpbGVQcmV2OiBudW1iZXI7XG59XG5cblRPTkNvbmZpZ01vZHVsZS5tb2R1bGVOYW1lID0gJ1RPTkNvbmZpZ01vZHVsZSc7XG4iXX0=