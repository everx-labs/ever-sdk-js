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

var _opentracing = require("opentracing");

var _noop = require("opentracing/lib/noop");

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
    (0, _defineProperty2["default"])((0, _assertThisInitialized2["default"])(_this), "tracer", void 0);
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
      var queriesWsServer = this._queriesHttpUrl.startsWith('https://') ? replacePrefix(this._queriesHttpUrl, 'https://', 'wss://') : replacePrefix(this._queriesHttpUrl, 'http://', 'ws://');
      this._queriesWsUrl = resolveServer(data.queriesWsServer, queriesWsServer);
      this.tracer = data.tracer || _noop.tracer;
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
        var timeString = "".concat(String(current.toFixed(3)), " ").concat(String((current - this._profileStart).toFixed(3)), " ").concat(String((current - this._profilePrev).toFixed(3)));

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
    key: "stopProfile",
    value: function stopProfile() {
      this._profileStart = this._profilePrev = 0;
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
        var coreConfig;
        return _regenerator["default"].wrap(function _callee2$(_context2) {
          while (1) {
            switch (_context2.prev = _context2.next) {
              case 0:
                if (!this.data) {
                  _context2.next = 5;
                  break;
                }

                coreConfig = Object.assign({}, this.data);
                delete coreConfig.tracer;
                _context2.next = 5;
                return this.requestCore('setup', coreConfig);

              case 5:
                this._logVerbose = this.data && this.data.log_verbose || false;

                if (this._logVerbose) {
                  this.startProfile();
                }

              case 7:
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy9tb2R1bGVzL1RPTkNvbmZpZ01vZHVsZS5qcyJdLCJuYW1lcyI6WyJVUkxQYXJ0cyIsInVybCIsInByb3RvY29sU2VwYXJhdG9yUG9zIiwiaW5kZXhPZiIsInByb3RvY29sRW5kIiwicXVlc3Rpb25Qb3MiLCJxdWVyeVN0YXJ0IiwibGVuZ3RoIiwicGF0aEVuZCIsInBhdGhTZXBhcmF0b3JQb3MiLCJwYXRoU3RhcnQiLCJzdWJzdHJpbmciLCJiYXNlVXJsIiwiYmFzZVBhcnRzIiwicGFyc2UiLCJwYXJ0cyIsInByb3RvY29sIiwiaG9zdCIsInRvU3RyaW5nIiwiZml4UGFydHMiLCJwYXRoIiwiZml4IiwicXVlcnkiLCJyZXBsYWNlIiwic3RhcnRzV2l0aCIsInJlc29sdmVTZXJ2ZXIiLCJjb25maWd1cmVkIiwiZGVmIiwicmVwbGFjZVByZWZpeCIsInMiLCJwcmVmaXgiLCJuZXdQcmVmaXgiLCJzdWJzdHIiLCJkZWZhdWx0U2VydmVyIiwiVE9OQ29uZmlnTW9kdWxlIiwiZGF0YSIsInNlcnZlcnMiLCJzZXJ2ZXIiLCJfcmVxdWVzdHNVcmwiLCJyZXF1ZXN0c1NlcnZlciIsImFwcGVuZFBhdGgiLCJfcXVlcmllc0h0dHBVcmwiLCJxdWVyaWVzU2VydmVyIiwicXVlcmllc1dzU2VydmVyIiwiX3F1ZXJpZXNXc1VybCIsInRyYWNlciIsIm5vb3BUcmFjZXIiLCJwcm9maWxlIiwiX3Byb2ZpbGVTdGFydCIsImFyZ3MiLCJjdXJyZW50IiwiRGF0ZSIsIm5vdyIsInRpbWVTdHJpbmciLCJTdHJpbmciLCJ0b0ZpeGVkIiwiX3Byb2ZpbGVQcmV2IiwiX2xvZ1ZlcmJvc2UiLCJjb25zb2xlIiwibG9nIiwicmVxdWVzdENvcmUiLCJjb3JlQ29uZmlnIiwiT2JqZWN0IiwiYXNzaWduIiwibG9nX3ZlcmJvc2UiLCJzdGFydFByb2ZpbGUiLCJUT05Nb2R1bGUiLCJtb2R1bGVOYW1lIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7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VUFBVSxDQUFDaEIsTUFBbEI7O3VCQUNNLEtBQUtlLFdBQUwsQ0FBaUIsT0FBakIsRUFBMEJDLFVBQTFCLEM7OztBQUVWLHFCQUFLSixXQUFMLEdBQW9CLEtBQUt0QixJQUFMLElBQWEsS0FBS0EsSUFBTCxDQUFVNkIsV0FBeEIsSUFBd0MsS0FBM0Q7O0FBQ0Esb0JBQUksS0FBS1AsV0FBVCxFQUFzQjtBQUNsQix1QkFBS1EsWUFBTDtBQUNIOzs7Ozs7Ozs7Ozs7Ozs7Ozs7RUF6RW9DQyxxQjs7O0FBeUY3Q2hDLGVBQWUsQ0FBQ2lDLFVBQWhCLEdBQTZCLGlCQUE3QiIsInNvdXJjZXNDb250ZW50IjpbIi8qXG4gKiBDb3B5cmlnaHQgMjAxOC0yMDIwIFRPTiBERVYgU09MVVRJT05TIExURC5cbiAqXG4gKiBMaWNlbnNlZCB1bmRlciB0aGUgU09GVFdBUkUgRVZBTFVBVElPTiBMaWNlbnNlICh0aGUgXCJMaWNlbnNlXCIpOyB5b3UgbWF5IG5vdCB1c2VcbiAqIHRoaXMgZmlsZSBleGNlcHQgaW4gY29tcGxpYW5jZSB3aXRoIHRoZSBMaWNlbnNlLiAgWW91IG1heSBvYnRhaW4gYSBjb3B5IG9mIHRoZVxuICogTGljZW5zZSBhdDpcbiAqXG4gKiBodHRwOi8vd3d3LnRvbi5kZXYvbGljZW5zZXNcbiAqXG4gKiBVbmxlc3MgcmVxdWlyZWQgYnkgYXBwbGljYWJsZSBsYXcgb3IgYWdyZWVkIHRvIGluIHdyaXRpbmcsIHNvZnR3YXJlXG4gKiBkaXN0cmlidXRlZCB1bmRlciB0aGUgTGljZW5zZSBpcyBkaXN0cmlidXRlZCBvbiBhbiBcIkFTIElTXCIgQkFTSVMsXG4gKiBXSVRIT1VUIFdBUlJBTlRJRVMgT1IgQ09ORElUSU9OUyBPRiBBTlkgS0lORCwgZWl0aGVyIGV4cHJlc3Mgb3IgaW1wbGllZC5cbiAqIFNlZSB0aGUgTGljZW5zZSBmb3IgdGhlIHNwZWNpZmljIFRPTiBERVYgc29mdHdhcmUgZ292ZXJuaW5nIHBlcm1pc3Npb25zIGFuZFxuICogbGltaXRhdGlvbnMgdW5kZXIgdGhlIExpY2Vuc2UuXG4gKi9cblxuLy8gQGZsb3dcbmltcG9ydCB0eXBlIHsgVE9OQ29uZmlnRGF0YSB9IGZyb20gXCIuLi8uLi90eXBlc1wiO1xuaW1wb3J0IHsgVE9OTW9kdWxlIH0gZnJvbSAnLi4vVE9OTW9kdWxlJztcbmltcG9ydCB7IFRyYWNlciB9IGZyb20gJ29wZW50cmFjaW5nJztcbmltcG9ydCB7IHRyYWNlciBhcyBub29wVHJhY2VyIH0gZnJvbSBcIm9wZW50cmFjaW5nL2xpYi9ub29wXCI7XG5cbmV4cG9ydCBjbGFzcyBVUkxQYXJ0cyB7XG4gICAgc3RhdGljIHBhcnNlKHVybDogc3RyaW5nKTogVVJMUGFydHMge1xuICAgICAgICBjb25zdCBwcm90b2NvbFNlcGFyYXRvclBvcyA9IHVybC5pbmRleE9mKCc6Ly8nKTtcbiAgICAgICAgY29uc3QgcHJvdG9jb2xFbmQgPSBwcm90b2NvbFNlcGFyYXRvclBvcyA+PSAwID8gcHJvdG9jb2xTZXBhcmF0b3JQb3MgKyAzIDogMDtcbiAgICAgICAgY29uc3QgcXVlc3Rpb25Qb3MgPSB1cmwuaW5kZXhPZignPycsIHByb3RvY29sRW5kKTtcbiAgICAgICAgY29uc3QgcXVlcnlTdGFydCA9IHF1ZXN0aW9uUG9zID49IDAgPyBxdWVzdGlvblBvcyArIDEgOiB1cmwubGVuZ3RoO1xuICAgICAgICBjb25zdCBwYXRoRW5kID0gcXVlc3Rpb25Qb3MgPj0gMCA/IHF1ZXN0aW9uUG9zIDogdXJsLmxlbmd0aDtcbiAgICAgICAgY29uc3QgcGF0aFNlcGFyYXRvclBvcyA9IHVybC5pbmRleE9mKCcvJywgcHJvdG9jb2xFbmQpO1xuICAgICAgICAvLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgbm8tbmVzdGVkLXRlcm5hcnlcbiAgICAgICAgY29uc3QgcGF0aFN0YXJ0ID0gcGF0aFNlcGFyYXRvclBvcyA+PSAwXG4gICAgICAgICAgICA/IChwYXRoU2VwYXJhdG9yUG9zIDwgcGF0aEVuZCA/IHBhdGhTZXBhcmF0b3JQb3MgOiBwYXRoRW5kKVxuICAgICAgICAgICAgOiAocXVlc3Rpb25Qb3MgPj0gMCA/IHF1ZXN0aW9uUG9zIDogdXJsLmxlbmd0aCk7XG4gICAgICAgIHJldHVybiBuZXcgVVJMUGFydHMoXG4gICAgICAgICAgICB1cmwuc3Vic3RyaW5nKDAsIHByb3RvY29sRW5kKSxcbiAgICAgICAgICAgIHVybC5zdWJzdHJpbmcocHJvdG9jb2xFbmQsIHBhdGhTdGFydCksXG4gICAgICAgICAgICB1cmwuc3Vic3RyaW5nKHBhdGhTdGFydCwgcGF0aEVuZCksXG4gICAgICAgICAgICB1cmwuc3Vic3RyaW5nKHF1ZXJ5U3RhcnQpLFxuICAgICAgICApO1xuICAgIH1cblxuICAgIHN0YXRpYyByZXNvbHZlVXJsKGJhc2VVcmw6IHN0cmluZywgdXJsOiBzdHJpbmcpOiBzdHJpbmcge1xuICAgICAgICBjb25zdCBiYXNlUGFydHMgPSBVUkxQYXJ0cy5wYXJzZShiYXNlVXJsKTtcbiAgICAgICAgY29uc3QgcGFydHMgPSBVUkxQYXJ0cy5wYXJzZSh1cmwpO1xuICAgICAgICBwYXJ0cy5wcm90b2NvbCA9IHBhcnRzLnByb3RvY29sIHx8IGJhc2VQYXJ0cy5wcm90b2NvbDtcbiAgICAgICAgcGFydHMuaG9zdCA9IHBhcnRzLmhvc3QgfHwgYmFzZVBhcnRzLmhvc3Q7XG4gICAgICAgIHJldHVybiBwYXJ0cy50b1N0cmluZygpO1xuICAgIH1cblxuICAgIHN0YXRpYyBmaXgodXJsOiBzdHJpbmcsIGZpeFBhcnRzOiAocGFydHM6IFVSTFBhcnRzKSA9PiB2b2lkKTogc3RyaW5nIHtcbiAgICAgICAgY29uc3QgcGFydHMgPSBVUkxQYXJ0cy5wYXJzZSh1cmwpO1xuICAgICAgICBmaXhQYXJ0cyhwYXJ0cyk7XG4gICAgICAgIHJldHVybiBwYXJ0cy50b1N0cmluZygpO1xuICAgIH1cblxuXG4gICAgc3RhdGljIGFwcGVuZFBhdGgodXJsOiBzdHJpbmcsIHBhdGg6IHN0cmluZyk6IHN0cmluZyB7XG4gICAgICAgIHJldHVybiBVUkxQYXJ0cy5maXgodXJsLCAocGFydHMpID0+IHtcbiAgICAgICAgICAgIHBhcnRzLnBhdGggPSBgJHtwYXJ0cy5wYXRofS8ke3BhdGh9YDtcbiAgICAgICAgfSk7XG4gICAgfVxuXG4gICAgcHJvdG9jb2w6IHN0cmluZztcblxuICAgIGhvc3Q6IHN0cmluZztcblxuICAgIHBhdGg6IHN0cmluZztcblxuICAgIHF1ZXJ5OiBzdHJpbmc7XG5cbiAgICBjb25zdHJ1Y3Rvcihwcm90b2NvbDogc3RyaW5nLCBob3N0OiBzdHJpbmcsIHBhdGg6IHN0cmluZywgcXVlcnk6IHN0cmluZykge1xuICAgICAgICB0aGlzLnByb3RvY29sID0gcHJvdG9jb2w7XG4gICAgICAgIHRoaXMuaG9zdCA9IGhvc3Q7XG4gICAgICAgIHRoaXMucGF0aCA9IHBhdGg7XG4gICAgICAgIHRoaXMucXVlcnkgPSBxdWVyeTtcbiAgICB9XG5cblxuICAgIHRvU3RyaW5nKCk6IHN0cmluZyB7XG4gICAgICAgIGxldCB7IHBhdGggfSA9IHRoaXM7XG4gICAgICAgIHdoaWxlIChwYXRoLmluZGV4T2YoJy8vJykgPj0gMCkge1xuICAgICAgICAgICAgcGF0aCA9IHBhdGgucmVwbGFjZSgnLy8nLCAnLycpO1xuICAgICAgICB9XG4gICAgICAgIGlmIChwYXRoICE9PSAnJyAmJiAhcGF0aC5zdGFydHNXaXRoKCcvJykpIHtcbiAgICAgICAgICAgIHBhdGggPSBgLyR7cGF0aH1gO1xuICAgICAgICB9XG4gICAgICAgIHJldHVybiBgJHt0aGlzLnByb3RvY29sfSR7dGhpcy5ob3N0fSR7cGF0aH0ke3RoaXMucXVlcnkgIT09ICcnID8gJz8nIDogJyd9JHt0aGlzLnF1ZXJ5fWA7XG4gICAgfVxufVxuXG5mdW5jdGlvbiByZXNvbHZlU2VydmVyKGNvbmZpZ3VyZWQ/OiBzdHJpbmcsIGRlZjogc3RyaW5nKTogc3RyaW5nIHtcbiAgICByZXR1cm4gVVJMUGFydHMuZml4KGNvbmZpZ3VyZWQgfHwgZGVmLCAocGFydHMpID0+IHtcbiAgICAgICAgaWYgKHBhcnRzLnByb3RvY29sID09PSAnJykge1xuICAgICAgICAgICAgcGFydHMucHJvdG9jb2wgPSAnaHR0cHM6Ly8nO1xuICAgICAgICB9XG4gICAgfSk7XG59XG5cbmZ1bmN0aW9uIHJlcGxhY2VQcmVmaXgocywgcHJlZml4LCBuZXdQcmVmaXgpIHtcbiAgICByZXR1cm4gYCR7bmV3UHJlZml4fSR7cy5zdWJzdHIocHJlZml4Lmxlbmd0aCl9YDtcbn1cblxuY29uc3QgZGVmYXVsdFNlcnZlciA9ICdzZXJ2aWNlcy50b25sYWJzLmlvJztcblxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgVE9OQ29uZmlnTW9kdWxlIGV4dGVuZHMgVE9OTW9kdWxlIHtcbiAgICBkYXRhOiA/VE9OQ29uZmlnRGF0YTtcbiAgICB0cmFjZXI6IFRyYWNlcjtcblxuXG4gICAgc2V0RGF0YShkYXRhOiBUT05Db25maWdEYXRhKSB7XG4gICAgICAgIHRoaXMuZGF0YSA9IGRhdGEgfHwge1xuICAgICAgICAgICAgc2VydmVyczogW2RlZmF1bHRTZXJ2ZXJdLFxuICAgICAgICB9O1xuICAgICAgICBjb25zdCBzZXJ2ZXIgPSByZXNvbHZlU2VydmVyKGRhdGEuc2VydmVyc1swXSwgZGVmYXVsdFNlcnZlcik7XG4gICAgICAgIHRoaXMuX3JlcXVlc3RzVXJsID0gcmVzb2x2ZVNlcnZlcihkYXRhLnJlcXVlc3RzU2VydmVyLCBVUkxQYXJ0cy5hcHBlbmRQYXRoKHNlcnZlciwgJy90b3BpY3MvcmVxdWVzdHMnKSk7XG4gICAgICAgIHRoaXMuX3F1ZXJpZXNIdHRwVXJsID0gcmVzb2x2ZVNlcnZlcihkYXRhLnF1ZXJpZXNTZXJ2ZXIsIFVSTFBhcnRzLmFwcGVuZFBhdGgoc2VydmVyLCAnL2dyYXBocWwnKSk7XG4gICAgICAgIGNvbnN0IHF1ZXJpZXNXc1NlcnZlciA9IHRoaXMuX3F1ZXJpZXNIdHRwVXJsLnN0YXJ0c1dpdGgoJ2h0dHBzOi8vJylcbiAgICAgICAgICAgID8gcmVwbGFjZVByZWZpeCh0aGlzLl9xdWVyaWVzSHR0cFVybCwgJ2h0dHBzOi8vJywgJ3dzczovLycpXG4gICAgICAgICAgICA6IHJlcGxhY2VQcmVmaXgodGhpcy5fcXVlcmllc0h0dHBVcmwsICdodHRwOi8vJywgJ3dzOi8vJyk7XG5cbiAgICAgICAgdGhpcy5fcXVlcmllc1dzVXJsID0gcmVzb2x2ZVNlcnZlcihkYXRhLnF1ZXJpZXNXc1NlcnZlciwgcXVlcmllc1dzU2VydmVyKTtcbiAgICAgICAgdGhpcy50cmFjZXIgPSBkYXRhLnRyYWNlciB8fCBub29wVHJhY2VyO1xuICAgIH1cblxuICAgIGxvZyguLi5hcmdzOiBhbnlbXSkge1xuICAgICAgICBjb25zdCBwcm9maWxlID0gKHRoaXMuX3Byb2ZpbGVTdGFydCB8fCAwKSAhPSAwO1xuICAgICAgICBpZiAocHJvZmlsZSkge1xuICAgICAgICAgICAgY29uc3QgY3VycmVudCA9IERhdGUubm93KCkgLyAxMDAwO1xuICAgICAgICAgICAgY29uc3QgdGltZVN0cmluZyA9IGAke1N0cmluZyhjdXJyZW50LnRvRml4ZWQoMykpfSAke1xuICAgICAgICAgICAgICAgIFN0cmluZygoY3VycmVudCAtIHRoaXMuX3Byb2ZpbGVTdGFydCkudG9GaXhlZCgzKSl9ICR7XG4gICAgICAgICAgICAgICAgU3RyaW5nKChjdXJyZW50IC0gdGhpcy5fcHJvZmlsZVByZXYpLnRvRml4ZWQoMykpfWA7XG4gICAgICAgICAgICBpZiAodGhpcy5fbG9nVmVyYm9zZSkge1xuICAgICAgICAgICAgICAgIGNvbnNvbGUubG9nKGBbJHt0aW1lU3RyaW5nfV1cXG5gLCAuLi5hcmdzKTtcbiAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgICAgY29uc29sZS5sb2coYFske3RpbWVTdHJpbmd9XVxcbmAsIGFyZ3NbMF0pO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgdGhpcy5fcHJvZmlsZVByZXYgPSBjdXJyZW50O1xuICAgICAgICB9IGVsc2UgaWYgKHRoaXMuX2xvZ1ZlcmJvc2UpIHtcbiAgICAgICAgICAgIGNvbnNvbGUubG9nKGBbJHtEYXRlLm5vdygpIC8gMTAwMH1dYCwgLi4uYXJncyk7XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICBzdGFydFByb2ZpbGUoKSB7XG4gICAgICAgIHRoaXMuX3Byb2ZpbGVTdGFydCA9IERhdGUubm93KCkgLyAxMDAwO1xuICAgICAgICB0aGlzLl9wcm9maWxlUHJldiA9IHRoaXMuX3Byb2ZpbGVTdGFydDtcbiAgICB9XG5cbiAgICBzdG9wUHJvZmlsZSgpIHtcbiAgICAgICAgdGhpcy5fcHJvZmlsZVN0YXJ0ID0gdGhpcy5fcHJvZmlsZVByZXYgPSAwO1xuICAgIH1cblxuICAgIHJlcXVlc3RzVXJsKCk6IHN0cmluZyB7XG4gICAgICAgIHJldHVybiB0aGlzLl9yZXF1ZXN0c1VybDtcbiAgICB9XG5cbiAgICBxdWVyaWVzSHR0cFVybCgpOiBzdHJpbmcge1xuICAgICAgICByZXR1cm4gdGhpcy5fcXVlcmllc0h0dHBVcmw7XG4gICAgfVxuXG4gICAgcXVlcmllc1dzVXJsKCk6IHN0cmluZyB7XG4gICAgICAgIHJldHVybiB0aGlzLl9xdWVyaWVzV3NVcmw7XG4gICAgfVxuXG4gICAgYXN5bmMgZ2V0VmVyc2lvbigpOiBQcm9taXNlPHN0cmluZz4ge1xuICAgICAgICByZXR1cm4gdGhpcy5yZXF1ZXN0Q29yZSgndmVyc2lvbicpO1xuICAgIH1cblxuXG4gICAgYXN5bmMgc2V0dXAoKTogUHJvbWlzZTx2b2lkPiB7XG4gICAgICAgIGlmICh0aGlzLmRhdGEpIHtcbiAgICAgICAgICAgIGNvbnN0IGNvcmVDb25maWcgPSBPYmplY3QuYXNzaWduKHt9LCB0aGlzLmRhdGEpO1xuICAgICAgICAgICAgZGVsZXRlIGNvcmVDb25maWcudHJhY2VyO1xuICAgICAgICAgICAgYXdhaXQgdGhpcy5yZXF1ZXN0Q29yZSgnc2V0dXAnLCBjb3JlQ29uZmlnKTtcbiAgICAgICAgfVxuICAgICAgICB0aGlzLl9sb2dWZXJib3NlID0gKHRoaXMuZGF0YSAmJiB0aGlzLmRhdGEubG9nX3ZlcmJvc2UpIHx8IGZhbHNlO1xuICAgICAgICBpZiAodGhpcy5fbG9nVmVyYm9zZSkge1xuICAgICAgICAgICAgdGhpcy5zdGFydFByb2ZpbGUoKTtcbiAgICAgICAgfVxuICAgIH1cblxuICAgIF9sb2dWZXJib3NlOiBib29sZWFuO1xuXG4gICAgX3JlcXVlc3RzVXJsOiBzdHJpbmc7XG5cbiAgICBfcXVlcmllc0h0dHBVcmw6IHN0cmluZztcblxuICAgIF9xdWVyaWVzV3NVcmw6IHN0cmluZztcblxuICAgIF9wcm9maWxlU3RhcnQ6IG51bWJlcjtcblxuICAgIF9wcm9maWxlUHJldjogbnVtYmVyO1xufVxuXG5UT05Db25maWdNb2R1bGUubW9kdWxlTmFtZSA9ICdUT05Db25maWdNb2R1bGUnO1xuIl19