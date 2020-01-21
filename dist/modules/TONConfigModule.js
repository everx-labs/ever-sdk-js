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

                if (this._logVerbose) {
                  this.startProfile();
                }

              case 5:
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy9tb2R1bGVzL1RPTkNvbmZpZ01vZHVsZS5qcyJdLCJuYW1lcyI6WyJVUkxQYXJ0cyIsInVybCIsInByb3RvY29sU2VwYXJhdG9yUG9zIiwiaW5kZXhPZiIsInByb3RvY29sRW5kIiwicXVlc3Rpb25Qb3MiLCJxdWVyeVN0YXJ0IiwibGVuZ3RoIiwicGF0aEVuZCIsInBhdGhTZXBhcmF0b3JQb3MiLCJwYXRoU3RhcnQiLCJzdWJzdHJpbmciLCJiYXNlVXJsIiwiYmFzZVBhcnRzIiwicGFyc2UiLCJwYXJ0cyIsInByb3RvY29sIiwiaG9zdCIsInRvU3RyaW5nIiwiZml4UGFydHMiLCJwYXRoIiwiZml4IiwicXVlcnkiLCJyZXBsYWNlIiwic3RhcnRzV2l0aCIsInJlc29sdmVTZXJ2ZXIiLCJjb25maWd1cmVkIiwiZGVmIiwicmVwbGFjZVByZWZpeCIsInMiLCJwcmVmaXgiLCJuZXdQcmVmaXgiLCJzdWJzdHIiLCJkZWZhdWx0U2VydmVyIiwiVE9OQ29uZmlnTW9kdWxlIiwiZGF0YSIsInNlcnZlcnMiLCJzZXJ2ZXIiLCJfcmVxdWVzdHNVcmwiLCJyZXF1ZXN0c1NlcnZlciIsImFwcGVuZFBhdGgiLCJfcXVlcmllc0h0dHBVcmwiLCJxdWVyaWVzU2VydmVyIiwicXVlcmllc1dzU2VydmVyIiwiX3F1ZXJpZXNXc1VybCIsInByb2ZpbGUiLCJfcHJvZmlsZVN0YXJ0IiwiYXJncyIsImN1cnJlbnQiLCJEYXRlIiwibm93IiwidGltZVN0cmluZyIsIlN0cmluZyIsInRvRml4ZWQiLCJfcHJvZmlsZVByZXYiLCJfbG9nVmVyYm9zZSIsImNvbnNvbGUiLCJsb2ciLCJyZXF1ZXN0Q29yZSIsImxvZ192ZXJib3NlIiwic3RhcnRQcm9maWxlIiwiVE9OTW9kdWxlIiwibW9kdWxlTmFtZSJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBaUJBOztBQWpCQTs7Ozs7Ozs7Ozs7Ozs7O0lBNEJhQSxROzs7OzswQkFDSUMsRyxFQUF1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QTZCLGlCQUE3QiIsInNvdXJjZXNDb250ZW50IjpbIi8qXG4gKiBDb3B5cmlnaHQgMjAxOC0yMDIwIFRPTiBERVYgU09MVVRJT05TIExURC5cbiAqXG4gKiBMaWNlbnNlZCB1bmRlciB0aGUgU09GVFdBUkUgRVZBTFVBVElPTiBMaWNlbnNlICh0aGUgXCJMaWNlbnNlXCIpOyB5b3UgbWF5IG5vdCB1c2VcbiAqIHRoaXMgZmlsZSBleGNlcHQgaW4gY29tcGxpYW5jZSB3aXRoIHRoZSBMaWNlbnNlLiAgWW91IG1heSBvYnRhaW4gYSBjb3B5IG9mIHRoZVxuICogTGljZW5zZSBhdDpcbiAqXG4gKiBodHRwOi8vd3d3LnRvbi5kZXYvbGljZW5zZXNcbiAqXG4gKiBVbmxlc3MgcmVxdWlyZWQgYnkgYXBwbGljYWJsZSBsYXcgb3IgYWdyZWVkIHRvIGluIHdyaXRpbmcsIHNvZnR3YXJlXG4gKiBkaXN0cmlidXRlZCB1bmRlciB0aGUgTGljZW5zZSBpcyBkaXN0cmlidXRlZCBvbiBhbiBcIkFTIElTXCIgQkFTSVMsXG4gKiBXSVRIT1VUIFdBUlJBTlRJRVMgT1IgQ09ORElUSU9OUyBPRiBBTlkgS0lORCwgZWl0aGVyIGV4cHJlc3Mgb3IgaW1wbGllZC5cbiAqIFNlZSB0aGUgTGljZW5zZSBmb3IgdGhlIHNwZWNpZmljIFRPTiBERVYgc29mdHdhcmUgZ292ZXJuaW5nIHBlcm1pc3Npb25zIGFuZFxuICogbGltaXRhdGlvbnMgdW5kZXIgdGhlIExpY2Vuc2UuXG4gKi9cblxuLy8gQGZsb3dcbmltcG9ydCB7IFRPTk1vZHVsZSB9IGZyb20gJy4uL1RPTk1vZHVsZSc7XG5cbmV4cG9ydCB0eXBlIFRPTkNvbmZpZ0RhdGEgPSB7XG4gICAgZGVmYXVsdFdvcmtjaGFpbjogP251bWJlcixcbiAgICBzZXJ2ZXJzOiBzdHJpbmdbXSxcbiAgICByZXF1ZXN0c1NlcnZlcj86IHN0cmluZyxcbiAgICBxdWVyaWVzU2VydmVyPzogc3RyaW5nLFxuICAgIHF1ZXJpZXNXc1NlcnZlcj86IHN0cmluZyxcbiAgICBsb2dfdmVyYm9zZT86IGJvb2xlYW4sXG59XG5cbmV4cG9ydCBjbGFzcyBVUkxQYXJ0cyB7XG4gICAgc3RhdGljIHBhcnNlKHVybDogc3RyaW5nKTogVVJMUGFydHMge1xuICAgICAgICBjb25zdCBwcm90b2NvbFNlcGFyYXRvclBvcyA9IHVybC5pbmRleE9mKCc6Ly8nKTtcbiAgICAgICAgY29uc3QgcHJvdG9jb2xFbmQgPSBwcm90b2NvbFNlcGFyYXRvclBvcyA+PSAwID8gcHJvdG9jb2xTZXBhcmF0b3JQb3MgKyAzIDogMDtcbiAgICAgICAgY29uc3QgcXVlc3Rpb25Qb3MgPSB1cmwuaW5kZXhPZignPycsIHByb3RvY29sRW5kKTtcbiAgICAgICAgY29uc3QgcXVlcnlTdGFydCA9IHF1ZXN0aW9uUG9zID49IDAgPyBxdWVzdGlvblBvcyArIDEgOiB1cmwubGVuZ3RoO1xuICAgICAgICBjb25zdCBwYXRoRW5kID0gcXVlc3Rpb25Qb3MgPj0gMCA/IHF1ZXN0aW9uUG9zIDogdXJsLmxlbmd0aDtcbiAgICAgICAgY29uc3QgcGF0aFNlcGFyYXRvclBvcyA9IHVybC5pbmRleE9mKCcvJywgcHJvdG9jb2xFbmQpO1xuICAgICAgICAvLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgbm8tbmVzdGVkLXRlcm5hcnlcbiAgICAgICAgY29uc3QgcGF0aFN0YXJ0ID0gcGF0aFNlcGFyYXRvclBvcyA+PSAwXG4gICAgICAgICAgICA/IChwYXRoU2VwYXJhdG9yUG9zIDwgcGF0aEVuZCA/IHBhdGhTZXBhcmF0b3JQb3MgOiBwYXRoRW5kKVxuICAgICAgICAgICAgOiAocXVlc3Rpb25Qb3MgPj0gMCA/IHF1ZXN0aW9uUG9zIDogdXJsLmxlbmd0aCk7XG4gICAgICAgIHJldHVybiBuZXcgVVJMUGFydHMoXG4gICAgICAgICAgICB1cmwuc3Vic3RyaW5nKDAsIHByb3RvY29sRW5kKSxcbiAgICAgICAgICAgIHVybC5zdWJzdHJpbmcocHJvdG9jb2xFbmQsIHBhdGhTdGFydCksXG4gICAgICAgICAgICB1cmwuc3Vic3RyaW5nKHBhdGhTdGFydCwgcGF0aEVuZCksXG4gICAgICAgICAgICB1cmwuc3Vic3RyaW5nKHF1ZXJ5U3RhcnQpXG4gICAgICAgIClcbiAgICB9XG5cbiAgICBzdGF0aWMgcmVzb2x2ZVVybChiYXNlVXJsOiBzdHJpbmcsIHVybDogc3RyaW5nKTogc3RyaW5nIHtcbiAgICAgICAgY29uc3QgYmFzZVBhcnRzID0gVVJMUGFydHMucGFyc2UoYmFzZVVybCk7XG4gICAgICAgIGNvbnN0IHBhcnRzID0gVVJMUGFydHMucGFyc2UodXJsKTtcbiAgICAgICAgcGFydHMucHJvdG9jb2wgPSBwYXJ0cy5wcm90b2NvbCB8fCBiYXNlUGFydHMucHJvdG9jb2w7XG4gICAgICAgIHBhcnRzLmhvc3QgPSBwYXJ0cy5ob3N0IHx8IGJhc2VQYXJ0cy5ob3N0O1xuICAgICAgICByZXR1cm4gcGFydHMudG9TdHJpbmcoKTtcbiAgICB9XG5cbiAgICBzdGF0aWMgZml4KHVybDogc3RyaW5nLCBmaXhQYXJ0czogKHBhcnRzOiBVUkxQYXJ0cykgPT4gdm9pZCk6IHN0cmluZyB7XG4gICAgICAgIGxldCBwYXJ0cyA9IFVSTFBhcnRzLnBhcnNlKHVybCk7XG4gICAgICAgIGZpeFBhcnRzKHBhcnRzKTtcbiAgICAgICAgcmV0dXJuIHBhcnRzLnRvU3RyaW5nKCk7XG4gICAgfVxuXG5cbiAgICBzdGF0aWMgYXBwZW5kUGF0aCh1cmw6IHN0cmluZywgcGF0aDogc3RyaW5nKTogc3RyaW5nIHtcbiAgICAgICAgcmV0dXJuIFVSTFBhcnRzLmZpeCh1cmwsIChwYXJ0cykgPT4ge1xuICAgICAgICAgICAgcGFydHMucGF0aCA9IGAke3BhcnRzLnBhdGh9LyR7cGF0aH1gO1xuICAgICAgICB9KTtcbiAgICB9XG5cbiAgICBwcm90b2NvbDogc3RyaW5nO1xuICAgIGhvc3Q6IHN0cmluZztcbiAgICBwYXRoOiBzdHJpbmc7XG4gICAgcXVlcnk6IHN0cmluZztcblxuICAgIGNvbnN0cnVjdG9yKHByb3RvY29sOiBzdHJpbmcsIGhvc3Q6IHN0cmluZywgcGF0aDogc3RyaW5nLCBxdWVyeTogc3RyaW5nKSB7XG4gICAgICAgIHRoaXMucHJvdG9jb2wgPSBwcm90b2NvbDtcbiAgICAgICAgdGhpcy5ob3N0ID0gaG9zdDtcbiAgICAgICAgdGhpcy5wYXRoID0gcGF0aDtcbiAgICAgICAgdGhpcy5xdWVyeSA9IHF1ZXJ5O1xuICAgIH1cblxuXG4gICAgdG9TdHJpbmcoKTogc3RyaW5nIHtcbiAgICAgICAgbGV0IHsgcGF0aCB9ID0gdGhpcztcbiAgICAgICAgd2hpbGUgKHBhdGguaW5kZXhPZignLy8nKSA+PSAwKSB7XG4gICAgICAgICAgICBwYXRoID0gcGF0aC5yZXBsYWNlKCcvLycsICcvJyk7XG4gICAgICAgIH1cbiAgICAgICAgaWYgKHBhdGggIT09ICcnICYmICFwYXRoLnN0YXJ0c1dpdGgoJy8nKSkge1xuICAgICAgICAgICAgcGF0aCA9IGAvJHtwYXRofWA7XG4gICAgICAgIH1cbiAgICAgICAgcmV0dXJuIGAke3RoaXMucHJvdG9jb2x9JHt0aGlzLmhvc3R9JHtwYXRofSR7dGhpcy5xdWVyeSAhPT0gJycgPyAnPycgOiAnJ30ke3RoaXMucXVlcnl9YDtcbiAgICB9XG59XG5cbmZ1bmN0aW9uIHJlc29sdmVTZXJ2ZXIoY29uZmlndXJlZD86IHN0cmluZywgZGVmOiBzdHJpbmcpOiBzdHJpbmcge1xuICAgIHJldHVybiBVUkxQYXJ0cy5maXgoY29uZmlndXJlZCB8fCBkZWYsIChwYXJ0cykgPT4ge1xuICAgICAgICBpZiAocGFydHMucHJvdG9jb2wgPT09ICcnKSB7XG4gICAgICAgICAgICBwYXJ0cy5wcm90b2NvbCA9ICdodHRwczovLyc7XG4gICAgICAgIH1cbiAgICB9KTtcbn1cblxuZnVuY3Rpb24gcmVwbGFjZVByZWZpeChzLCBwcmVmaXgsIG5ld1ByZWZpeCkge1xuICAgIHJldHVybiBgJHtuZXdQcmVmaXh9JHtzLnN1YnN0cihwcmVmaXgubGVuZ3RoKX1gO1xufVxuXG5jb25zdCBkZWZhdWx0U2VydmVyID0gJ3NlcnZpY2VzLnRvbmxhYnMuaW8nO1xuXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBUT05Db25maWdNb2R1bGUgZXh0ZW5kcyBUT05Nb2R1bGUge1xuICAgIGRhdGE6ID9UT05Db25maWdEYXRhO1xuXG5cbiAgICBzZXREYXRhKGRhdGE6IFRPTkNvbmZpZ0RhdGEpIHtcblxuICAgICAgICB0aGlzLmRhdGEgPSBkYXRhIHx8IHtcbiAgICAgICAgICAgIHNlcnZlcnM6IFtkZWZhdWx0U2VydmVyXSxcbiAgICAgICAgfTtcbiAgICAgICAgbGV0IHNlcnZlciA9IHJlc29sdmVTZXJ2ZXIoZGF0YS5zZXJ2ZXJzWzBdLCBkZWZhdWx0U2VydmVyKTtcbiAgICAgICAgdGhpcy5fcmVxdWVzdHNVcmwgPSByZXNvbHZlU2VydmVyKGRhdGEucmVxdWVzdHNTZXJ2ZXIsIFVSTFBhcnRzLmFwcGVuZFBhdGgoc2VydmVyLCAnL3RvcGljcy9yZXF1ZXN0cycpKTtcbiAgICAgICAgdGhpcy5fcXVlcmllc0h0dHBVcmwgPSByZXNvbHZlU2VydmVyKGRhdGEucXVlcmllc1NlcnZlciwgVVJMUGFydHMuYXBwZW5kUGF0aChzZXJ2ZXIsICcvZ3JhcGhxbCcpKTtcbiAgICAgICAgY29uc3QgcXVlcmllc1dzU2VydmVyID0gdGhpcy5fcXVlcmllc0h0dHBVcmwuc3RhcnRzV2l0aCgnaHR0cHM6Ly8nKVxuICAgICAgICAgICAgPyByZXBsYWNlUHJlZml4KHRoaXMuX3F1ZXJpZXNIdHRwVXJsLCBcImh0dHBzOi8vXCIsIFwid3NzOi8vXCIpXG4gICAgICAgICAgICA6IHJlcGxhY2VQcmVmaXgodGhpcy5fcXVlcmllc0h0dHBVcmwsIFwiaHR0cDovL1wiLCBcIndzOi8vXCIpO1xuXG4gICAgICAgIHRoaXMuX3F1ZXJpZXNXc1VybCA9IHJlc29sdmVTZXJ2ZXIoZGF0YS5xdWVyaWVzV3NTZXJ2ZXIsIHF1ZXJpZXNXc1NlcnZlcik7XG4gICAgfVxuXG4gICAgbG9nKC4uLmFyZ3M6IGFueVtdKSB7XG4gICAgICAgIGNvbnN0IHByb2ZpbGUgPSAodGhpcy5fcHJvZmlsZVN0YXJ0IHx8IDApICE9IDA7XG4gICAgICAgIGlmIChwcm9maWxlKSB7XG4gICAgICAgICAgICBjb25zdCBjdXJyZW50ID0gRGF0ZS5ub3coKSAvIDEwMDA7XG4gICAgICAgICAgICBjb25zdCB0aW1lU3RyaW5nID0gU3RyaW5nKGN1cnJlbnQudG9GaXhlZCgzKSkgKyBcIiBcIiArXG4gICAgICAgICAgICAgICAgU3RyaW5nKChjdXJyZW50IC0gdGhpcy5fcHJvZmlsZVN0YXJ0KS50b0ZpeGVkKDMpKSArIFwiIFwiICtcbiAgICAgICAgICAgICAgICBTdHJpbmcoKGN1cnJlbnQgLSB0aGlzLl9wcm9maWxlUHJldikudG9GaXhlZCgzKSk7XG4gICAgICAgICAgICBpZiAodGhpcy5fbG9nVmVyYm9zZSkge1xuICAgICAgICAgICAgICAgIGNvbnNvbGUubG9nKGBbJHt0aW1lU3RyaW5nfV1cXG5gLCAuLi5hcmdzKTtcbiAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgICAgY29uc29sZS5sb2coYFske3RpbWVTdHJpbmd9XVxcbmAsIGFyZ3NbMF0pO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgdGhpcy5fcHJvZmlsZVByZXYgPSBjdXJyZW50O1xuICAgICAgICB9IGVsc2UgaWYgKHRoaXMuX2xvZ1ZlcmJvc2UpIHtcbiAgICAgICAgICAgIGNvbnNvbGUubG9nKGBbJHtEYXRlLm5vdygpIC8gMTAwMH1dYCwgLi4uYXJncyk7XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICBzdGFydFByb2ZpbGUoKSB7XG4gICAgICAgIHRoaXMuX3Byb2ZpbGVTdGFydCA9IERhdGUubm93KCkgLyAxMDAwO1xuICAgICAgICB0aGlzLl9wcm9maWxlUHJldiA9IHRoaXMuX3Byb2ZpbGVTdGFydDtcbiAgICB9XG5cbiAgICByZXF1ZXN0c1VybCgpOiBzdHJpbmcge1xuICAgICAgICByZXR1cm4gdGhpcy5fcmVxdWVzdHNVcmw7XG4gICAgfVxuXG4gICAgcXVlcmllc0h0dHBVcmwoKTogc3RyaW5nIHtcbiAgICAgICAgcmV0dXJuIHRoaXMuX3F1ZXJpZXNIdHRwVXJsO1xuICAgIH1cblxuICAgIHF1ZXJpZXNXc1VybCgpOiBzdHJpbmcge1xuICAgICAgICByZXR1cm4gdGhpcy5fcXVlcmllc1dzVXJsO1xuICAgIH1cblxuICAgIGFzeW5jIGdldFZlcnNpb24oKTogUHJvbWlzZTxzdHJpbmc+IHtcbiAgICAgICAgcmV0dXJuIHRoaXMucmVxdWVzdENvcmUoJ3ZlcnNpb24nKTtcbiAgICB9XG5cblxuICAgIGFzeW5jIHNldHVwKCk6IFByb21pc2U8dm9pZD4ge1xuICAgICAgICBpZiAodGhpcy5kYXRhKSB7XG4gICAgICAgICAgICBhd2FpdCB0aGlzLnJlcXVlc3RDb3JlKCdzZXR1cCcsIHRoaXMuZGF0YSk7XG4gICAgICAgIH1cbiAgICAgICAgdGhpcy5fbG9nVmVyYm9zZSA9ICh0aGlzLmRhdGEgJiYgdGhpcy5kYXRhLmxvZ192ZXJib3NlKSB8fCBmYWxzZTtcbiAgICAgICAgaWYgKHRoaXMuX2xvZ1ZlcmJvc2UpIHtcbiAgICAgICAgICAgIHRoaXMuc3RhcnRQcm9maWxlKCk7XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICBfbG9nVmVyYm9zZTogYm9vbGVhbjtcbiAgICBfcmVxdWVzdHNVcmw6IHN0cmluZztcbiAgICBfcXVlcmllc0h0dHBVcmw6IHN0cmluZztcbiAgICBfcXVlcmllc1dzVXJsOiBzdHJpbmc7XG4gICAgX3Byb2ZpbGVTdGFydDogbnVtYmVyO1xuICAgIF9wcm9maWxlUHJldjogbnVtYmVyO1xufVxuXG5UT05Db25maWdNb2R1bGUubW9kdWxlTmFtZSA9ICdUT05Db25maWdNb2R1bGUnO1xuIl19