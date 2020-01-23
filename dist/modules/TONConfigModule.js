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
var initJaegerTracer = require("jaeger-client").initTracerFromEnv;

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

function initTracer(serviceName, jaegerEndpoint) {
  var config = {
    serviceName: serviceName,
    sampler: {
      type: "const",
      param: 1
    },
    reporter: jaegerEndpoint ? {
      collectorEndpoint: jaegerEndpoint,
      logSpans: true
    } : {}
  };
  var options = {
    logger: {
      info: function info(msg) {
        console.log("INFO ", msg);
      },
      error: function error(msg) {
        console.log("ERROR", msg);
      }
    }
  };
  return initJaegerTracer(config, options);
}

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
      this.tracer = initTracer('ton-client-js', data.jaegerEndpoint);
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy9tb2R1bGVzL1RPTkNvbmZpZ01vZHVsZS5qcyJdLCJuYW1lcyI6WyJpbml0SmFlZ2VyVHJhY2VyIiwicmVxdWlyZSIsImluaXRUcmFjZXJGcm9tRW52IiwiVVJMUGFydHMiLCJ1cmwiLCJwcm90b2NvbFNlcGFyYXRvclBvcyIsImluZGV4T2YiLCJwcm90b2NvbEVuZCIsInF1ZXN0aW9uUG9zIiwicXVlcnlTdGFydCIsImxlbmd0aCIsInBhdGhFbmQiLCJwYXRoU2VwYXJhdG9yUG9zIiwicGF0aFN0YXJ0Iiwic3Vic3RyaW5nIiwiYmFzZVVybCIsImJhc2VQYXJ0cyIsInBhcnNlIiwicGFydHMiLCJwcm90b2NvbCIsImhvc3QiLCJ0b1N0cmluZyIsImZpeFBhcnRzIiwicGF0aCIsImZpeCIsInF1ZXJ5IiwicmVwbGFjZSIsInN0YXJ0c1dpdGgiLCJyZXNvbHZlU2VydmVyIiwiY29uZmlndXJlZCIsImRlZiIsInJlcGxhY2VQcmVmaXgiLCJzIiwicHJlZml4IiwibmV3UHJlZml4Iiwic3Vic3RyIiwiZGVmYXVsdFNlcnZlciIsImluaXRUcmFjZXIiLCJzZXJ2aWNlTmFtZSIsImphZWdlckVuZHBvaW50IiwiY29uZmlnIiwic2FtcGxlciIsInR5cGUiLCJwYXJhbSIsInJlcG9ydGVyIiwiY29sbGVjdG9yRW5kcG9pbnQiLCJsb2dTcGFucyIsIm9wdGlvbnMiLCJsb2dnZXIiLCJpbmZvIiwibXNnIiwiY29uc29sZSIsImxvZyIsImVycm9yIiwiVE9OQ29uZmlnTW9kdWxlIiwiZGF0YSIsInNlcnZlcnMiLCJzZXJ2ZXIiLCJfcmVxdWVzdHNVcmwiLCJyZXF1ZXN0c1NlcnZlciIsImFwcGVuZFBhdGgiLCJfcXVlcmllc0h0dHBVcmwiLCJxdWVyaWVzU2VydmVyIiwicXVlcmllc1dzU2VydmVyIiwiX3F1ZXJpZXNXc1VybCIsInRyYWNlciIsInByb2ZpbGUiLCJfcHJvZmlsZVN0YXJ0IiwiYXJncyIsImN1cnJlbnQiLCJEYXRlIiwibm93IiwidGltZVN0cmluZyIsIlN0cmluZyIsInRvRml4ZWQiLCJfcHJvZmlsZVByZXYiLCJfbG9nVmVyYm9zZSIsInJlcXVlc3RDb3JlIiwibG9nX3ZlcmJvc2UiLCJzdGFydFByb2ZpbGUiLCJUT05Nb2R1bGUiLCJtb2R1bGVOYW1lIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFpQkE7O0FBakJBOzs7Ozs7Ozs7Ozs7Ozs7QUFrQkEsSUFBTUEsZ0JBQWdCLEdBQUdDLE9BQU8sQ0FBQyxlQUFELENBQVAsQ0FBeUJDLGlCQUFsRDs7SUFZYUMsUTs7Ozs7MEJBQ0lDLEcsRUFBdUI7QUFDaEMsVUFBTUMsb0JBQW9CLEdBQUdELEdBQUcsQ0FBQ0UsT0FBSixDQUFZLEtBQVosQ0FBN0I7QUFDQSxVQUFNQyxXQUFXLEdBQUdGLG9CQUFvQixJQUFJLENBQXhCLEdBQTRCQSxvQkFBb0IsR0FBRyxDQUFuRCxHQUF1RCxDQUEzRTtBQUNBLFVBQU1HLFdBQVcsR0FBR0osR0FBRyxDQUFDRSxPQUFKLENBQVksR0FBWixFQUFpQkMsV0FBakIsQ0FBcEI7QUFDQSxVQUFNRSxVQUFVLEdBQUdELFdBQVcsSUFBSSxDQUFmLEdBQW1CQSxXQUFXLEdBQUcsQ0FBakMsR0FBcUNKLEdBQUcsQ0FBQ00sTUFBNUQ7QUFDQSxVQUFNQyxPQUFPLEdBQUdILFdBQVcsSUFBSSxDQUFmLEdBQW1CQSxXQUFuQixHQUFpQ0osR0FBRyxDQUFDTSxNQUFyRDtBQUNBLFVBQU1FLGdCQUFnQixHQUFHUixHQUFHLENBQUNFLE9BQUosQ0FBWSxHQUFaLEVBQWlCQyxXQUFqQixDQUF6QixDQU5nQyxDQU9oQzs7QUFDQSxVQUFNTSxTQUFTLEdBQUdELGdCQUFnQixJQUFJLENBQXBCLEdBQ1hBLGdCQUFnQixHQUFHRCxPQUFuQixHQUE2QkMsZ0JBQTdCLEdBQWdERCxPQURyQyxHQUVYSCxXQUFXLElBQUksQ0FBZixHQUFtQkEsV0FBbkIsR0FBaUNKLEdBQUcsQ0FBQ00sTUFGNUM7QUFHQSxhQUFPLElBQUlQLFFBQUosQ0FDSEMsR0FB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QUEzRDs7QUFDQSxvQkFBSSxLQUFLRixXQUFULEVBQXNCO0FBQ2xCLHVCQUFLRyxZQUFMO0FBQ0g7Ozs7Ozs7Ozs7Ozs7Ozs7OztFQXZFb0NDLHFCOzs7QUFrRjdDMUIsZUFBZSxDQUFDMkIsVUFBaEIsR0FBNkIsaUJBQTdCIiwic291cmNlc0NvbnRlbnQiOlsiLypcbiAqIENvcHlyaWdodCAyMDE4LTIwMjAgVE9OIERFViBTT0xVVElPTlMgTFRELlxuICpcbiAqIExpY2Vuc2VkIHVuZGVyIHRoZSBTT0ZUV0FSRSBFVkFMVUFUSU9OIExpY2Vuc2UgKHRoZSBcIkxpY2Vuc2VcIik7IHlvdSBtYXkgbm90IHVzZVxuICogdGhpcyBmaWxlIGV4Y2VwdCBpbiBjb21wbGlhbmNlIHdpdGggdGhlIExpY2Vuc2UuICBZb3UgbWF5IG9idGFpbiBhIGNvcHkgb2YgdGhlXG4gKiBMaWNlbnNlIGF0OlxuICpcbiAqIGh0dHA6Ly93d3cudG9uLmRldi9saWNlbnNlc1xuICpcbiAqIFVubGVzcyByZXF1aXJlZCBieSBhcHBsaWNhYmxlIGxhdyBvciBhZ3JlZWQgdG8gaW4gd3JpdGluZywgc29mdHdhcmVcbiAqIGRpc3RyaWJ1dGVkIHVuZGVyIHRoZSBMaWNlbnNlIGlzIGRpc3RyaWJ1dGVkIG9uIGFuIFwiQVMgSVNcIiBCQVNJUyxcbiAqIFdJVEhPVVQgV0FSUkFOVElFUyBPUiBDT05ESVRJT05TIE9GIEFOWSBLSU5ELCBlaXRoZXIgZXhwcmVzcyBvciBpbXBsaWVkLlxuICogU2VlIHRoZSBMaWNlbnNlIGZvciB0aGUgc3BlY2lmaWMgVE9OIERFViBzb2Z0d2FyZSBnb3Zlcm5pbmcgcGVybWlzc2lvbnMgYW5kXG4gKiBsaW1pdGF0aW9ucyB1bmRlciB0aGUgTGljZW5zZS5cbiAqL1xuXG4vLyBAZmxvd1xuaW1wb3J0IHsgVE9OTW9kdWxlIH0gZnJvbSAnLi4vVE9OTW9kdWxlJztcbmNvbnN0IGluaXRKYWVnZXJUcmFjZXIgPSByZXF1aXJlKFwiamFlZ2VyLWNsaWVudFwiKS5pbml0VHJhY2VyRnJvbUVudjtcblxuZXhwb3J0IHR5cGUgVE9OQ29uZmlnRGF0YSA9IHtcbiAgICBkZWZhdWx0V29ya2NoYWluOiA/bnVtYmVyLFxuICAgIHNlcnZlcnM6IHN0cmluZ1tdLFxuICAgIHJlcXVlc3RzU2VydmVyPzogc3RyaW5nLFxuICAgIHF1ZXJpZXNTZXJ2ZXI/OiBzdHJpbmcsXG4gICAgcXVlcmllc1dzU2VydmVyPzogc3RyaW5nLFxuICAgIGxvZ192ZXJib3NlPzogYm9vbGVhbixcbiAgICBqYWVnZXJFbmRwb2ludD86IFN0cmluZyxcbn1cblxuZXhwb3J0IGNsYXNzIFVSTFBhcnRzIHtcbiAgICBzdGF0aWMgcGFyc2UodXJsOiBzdHJpbmcpOiBVUkxQYXJ0cyB7XG4gICAgICAgIGNvbnN0IHByb3RvY29sU2VwYXJhdG9yUG9zID0gdXJsLmluZGV4T2YoJzovLycpO1xuICAgICAgICBjb25zdCBwcm90b2NvbEVuZCA9IHByb3RvY29sU2VwYXJhdG9yUG9zID49IDAgPyBwcm90b2NvbFNlcGFyYXRvclBvcyArIDMgOiAwO1xuICAgICAgICBjb25zdCBxdWVzdGlvblBvcyA9IHVybC5pbmRleE9mKCc/JywgcHJvdG9jb2xFbmQpO1xuICAgICAgICBjb25zdCBxdWVyeVN0YXJ0ID0gcXVlc3Rpb25Qb3MgPj0gMCA/IHF1ZXN0aW9uUG9zICsgMSA6IHVybC5sZW5ndGg7XG4gICAgICAgIGNvbnN0IHBhdGhFbmQgPSBxdWVzdGlvblBvcyA+PSAwID8gcXVlc3Rpb25Qb3MgOiB1cmwubGVuZ3RoO1xuICAgICAgICBjb25zdCBwYXRoU2VwYXJhdG9yUG9zID0gdXJsLmluZGV4T2YoJy8nLCBwcm90b2NvbEVuZCk7XG4gICAgICAgIC8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSBuby1uZXN0ZWQtdGVybmFyeVxuICAgICAgICBjb25zdCBwYXRoU3RhcnQgPSBwYXRoU2VwYXJhdG9yUG9zID49IDBcbiAgICAgICAgICAgID8gKHBhdGhTZXBhcmF0b3JQb3MgPCBwYXRoRW5kID8gcGF0aFNlcGFyYXRvclBvcyA6IHBhdGhFbmQpXG4gICAgICAgICAgICA6IChxdWVzdGlvblBvcyA+PSAwID8gcXVlc3Rpb25Qb3MgOiB1cmwubGVuZ3RoKTtcbiAgICAgICAgcmV0dXJuIG5ldyBVUkxQYXJ0cyhcbiAgICAgICAgICAgIHVybC5zdWJzdHJpbmcoMCwgcHJvdG9jb2xFbmQpLFxuICAgICAgICAgICAgdXJsLnN1YnN0cmluZyhwcm90b2NvbEVuZCwgcGF0aFN0YXJ0KSxcbiAgICAgICAgICAgIHVybC5zdWJzdHJpbmcocGF0aFN0YXJ0LCBwYXRoRW5kKSxcbiAgICAgICAgICAgIHVybC5zdWJzdHJpbmcocXVlcnlTdGFydClcbiAgICAgICAgKVxuICAgIH1cblxuICAgIHN0YXRpYyByZXNvbHZlVXJsKGJhc2VVcmw6IHN0cmluZywgdXJsOiBzdHJpbmcpOiBzdHJpbmcge1xuICAgICAgICBjb25zdCBiYXNlUGFydHMgPSBVUkxQYXJ0cy5wYXJzZShiYXNlVXJsKTtcbiAgICAgICAgY29uc3QgcGFydHMgPSBVUkxQYXJ0cy5wYXJzZSh1cmwpO1xuICAgICAgICBwYXJ0cy5wcm90b2NvbCA9IHBhcnRzLnByb3RvY29sIHx8IGJhc2VQYXJ0cy5wcm90b2NvbDtcbiAgICAgICAgcGFydHMuaG9zdCA9IHBhcnRzLmhvc3QgfHwgYmFzZVBhcnRzLmhvc3Q7XG4gICAgICAgIHJldHVybiBwYXJ0cy50b1N0cmluZygpO1xuICAgIH1cblxuICAgIHN0YXRpYyBmaXgodXJsOiBzdHJpbmcsIGZpeFBhcnRzOiAocGFydHM6IFVSTFBhcnRzKSA9PiB2b2lkKTogc3RyaW5nIHtcbiAgICAgICAgbGV0IHBhcnRzID0gVVJMUGFydHMucGFyc2UodXJsKTtcbiAgICAgICAgZml4UGFydHMocGFydHMpO1xuICAgICAgICByZXR1cm4gcGFydHMudG9TdHJpbmcoKTtcbiAgICB9XG5cblxuICAgIHN0YXRpYyBhcHBlbmRQYXRoKHVybDogc3RyaW5nLCBwYXRoOiBzdHJpbmcpOiBzdHJpbmcge1xuICAgICAgICByZXR1cm4gVVJMUGFydHMuZml4KHVybCwgKHBhcnRzKSA9PiB7XG4gICAgICAgICAgICBwYXJ0cy5wYXRoID0gYCR7cGFydHMucGF0aH0vJHtwYXRofWA7XG4gICAgICAgIH0pO1xuICAgIH1cblxuICAgIHByb3RvY29sOiBzdHJpbmc7XG4gICAgaG9zdDogc3RyaW5nO1xuICAgIHBhdGg6IHN0cmluZztcbiAgICBxdWVyeTogc3RyaW5nO1xuXG4gICAgY29uc3RydWN0b3IocHJvdG9jb2w6IHN0cmluZywgaG9zdDogc3RyaW5nLCBwYXRoOiBzdHJpbmcsIHF1ZXJ5OiBzdHJpbmcpIHtcbiAgICAgICAgdGhpcy5wcm90b2NvbCA9IHByb3RvY29sO1xuICAgICAgICB0aGlzLmhvc3QgPSBob3N0O1xuICAgICAgICB0aGlzLnBhdGggPSBwYXRoO1xuICAgICAgICB0aGlzLnF1ZXJ5ID0gcXVlcnk7XG4gICAgfVxuXG5cbiAgICB0b1N0cmluZygpOiBzdHJpbmcge1xuICAgICAgICBsZXQgeyBwYXRoIH0gPSB0aGlzO1xuICAgICAgICB3aGlsZSAocGF0aC5pbmRleE9mKCcvLycpID49IDApIHtcbiAgICAgICAgICAgIHBhdGggPSBwYXRoLnJlcGxhY2UoJy8vJywgJy8nKTtcbiAgICAgICAgfVxuICAgICAgICBpZiAocGF0aCAhPT0gJycgJiYgIXBhdGguc3RhcnRzV2l0aCgnLycpKSB7XG4gICAgICAgICAgICBwYXRoID0gYC8ke3BhdGh9YDtcbiAgICAgICAgfVxuICAgICAgICByZXR1cm4gYCR7dGhpcy5wcm90b2NvbH0ke3RoaXMuaG9zdH0ke3BhdGh9JHt0aGlzLnF1ZXJ5ICE9PSAnJyA/ICc/JyA6ICcnfSR7dGhpcy5xdWVyeX1gO1xuICAgIH1cbn1cblxuZnVuY3Rpb24gcmVzb2x2ZVNlcnZlcihjb25maWd1cmVkPzogc3RyaW5nLCBkZWY6IHN0cmluZyk6IHN0cmluZyB7XG4gICAgcmV0dXJuIFVSTFBhcnRzLmZpeChjb25maWd1cmVkIHx8IGRlZiwgKHBhcnRzKSA9PiB7XG4gICAgICAgIGlmIChwYXJ0cy5wcm90b2NvbCA9PT0gJycpIHtcbiAgICAgICAgICAgIHBhcnRzLnByb3RvY29sID0gJ2h0dHBzOi8vJztcbiAgICAgICAgfVxuICAgIH0pO1xufVxuXG5mdW5jdGlvbiByZXBsYWNlUHJlZml4KHMsIHByZWZpeCwgbmV3UHJlZml4KSB7XG4gICAgcmV0dXJuIGAke25ld1ByZWZpeH0ke3Muc3Vic3RyKHByZWZpeC5sZW5ndGgpfWA7XG59XG5cbmNvbnN0IGRlZmF1bHRTZXJ2ZXIgPSAnc2VydmljZXMudG9ubGFicy5pbyc7XG5cbmZ1bmN0aW9uIGluaXRUcmFjZXIoc2VydmljZU5hbWUsIGphZWdlckVuZHBvaW50KSB7XG4gIGNvbnN0IGNvbmZpZyA9IHtcbiAgICBzZXJ2aWNlTmFtZTogc2VydmljZU5hbWUsXG4gICAgc2FtcGxlcjoge1xuICAgICAgdHlwZTogXCJjb25zdFwiLFxuICAgICAgcGFyYW06IDEsXG4gICAgfSxcbiAgICByZXBvcnRlcjogamFlZ2VyRW5kcG9pbnQgPyB7XG4gICAgICAgIGNvbGxlY3RvckVuZHBvaW50OiBqYWVnZXJFbmRwb2ludCxcbiAgICAgICAgbG9nU3BhbnM6IHRydWUsXG4gICAgICB9IDoge31cbiAgfTtcbiAgY29uc3Qgb3B0aW9ucyA9IHtcbiAgICBsb2dnZXI6IHtcbiAgICAgIGluZm8obXNnKSB7XG4gICAgICAgIGNvbnNvbGUubG9nKFwiSU5GTyBcIiwgbXNnKTtcbiAgICAgIH0sXG4gICAgICBlcnJvcihtc2cpIHtcbiAgICAgICAgY29uc29sZS5sb2coXCJFUlJPUlwiLCBtc2cpO1xuICAgICAgfSxcbiAgICB9LFxuICB9O1xuICByZXR1cm4gaW5pdEphZWdlclRyYWNlcihjb25maWcsIG9wdGlvbnMpO1xufVxuXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBUT05Db25maWdNb2R1bGUgZXh0ZW5kcyBUT05Nb2R1bGUge1xuICAgIGRhdGE6ID9UT05Db25maWdEYXRhO1xuXG5cbiAgICBzZXREYXRhKGRhdGE6IFRPTkNvbmZpZ0RhdGEpIHtcblxuICAgICAgICB0aGlzLmRhdGEgPSBkYXRhIHx8IHtcbiAgICAgICAgICAgIHNlcnZlcnM6IFtkZWZhdWx0U2VydmVyXSxcbiAgICAgICAgfTtcbiAgICAgICAgbGV0IHNlcnZlciA9IHJlc29sdmVTZXJ2ZXIoZGF0YS5zZXJ2ZXJzWzBdLCBkZWZhdWx0U2VydmVyKTtcbiAgICAgICAgdGhpcy5fcmVxdWVzdHNVcmwgPSByZXNvbHZlU2VydmVyKGRhdGEucmVxdWVzdHNTZXJ2ZXIsIFVSTFBhcnRzLmFwcGVuZFBhdGgoc2VydmVyLCAnL3RvcGljcy9yZXF1ZXN0cycpKTtcbiAgICAgICAgdGhpcy5fcXVlcmllc0h0dHBVcmwgPSByZXNvbHZlU2VydmVyKGRhdGEucXVlcmllc1NlcnZlciwgVVJMUGFydHMuYXBwZW5kUGF0aChzZXJ2ZXIsICcvZ3JhcGhxbCcpKTtcbiAgICAgICAgY29uc3QgcXVlcmllc1dzU2VydmVyID0gdGhpcy5fcXVlcmllc0h0dHBVcmwuc3RhcnRzV2l0aCgnaHR0cHM6Ly8nKVxuICAgICAgICAgICAgPyByZXBsYWNlUHJlZml4KHRoaXMuX3F1ZXJpZXNIdHRwVXJsLCBcImh0dHBzOi8vXCIsIFwid3NzOi8vXCIpXG4gICAgICAgICAgICA6IHJlcGxhY2VQcmVmaXgodGhpcy5fcXVlcmllc0h0dHBVcmwsIFwiaHR0cDovL1wiLCBcIndzOi8vXCIpO1xuXG4gICAgICAgIHRoaXMuX3F1ZXJpZXNXc1VybCA9IHJlc29sdmVTZXJ2ZXIoZGF0YS5xdWVyaWVzV3NTZXJ2ZXIsIHF1ZXJpZXNXc1NlcnZlcik7XG4gICAgICAgIHRoaXMudHJhY2VyID0gaW5pdFRyYWNlcigndG9uLWNsaWVudC1qcycsIGRhdGEuamFlZ2VyRW5kcG9pbnQpO1xuICAgIH1cblxuICAgIGxvZyguLi5hcmdzOiBhbnlbXSkge1xuICAgICAgICBjb25zdCBwcm9maWxlID0gKHRoaXMuX3Byb2ZpbGVTdGFydCB8fCAwKSAhPSAwO1xuICAgICAgICBpZiAocHJvZmlsZSkge1xuICAgICAgICAgICAgY29uc3QgY3VycmVudCA9IERhdGUubm93KCkgLyAxMDAwO1xuICAgICAgICAgICAgY29uc3QgdGltZVN0cmluZyA9IFN0cmluZyhjdXJyZW50LnRvRml4ZWQoMykpICsgXCIgXCIgK1xuICAgICAgICAgICAgICAgIFN0cmluZygoY3VycmVudCAtIHRoaXMuX3Byb2ZpbGVTdGFydCkudG9GaXhlZCgzKSkgKyBcIiBcIiArXG4gICAgICAgICAgICAgICAgU3RyaW5nKChjdXJyZW50IC0gdGhpcy5fcHJvZmlsZVByZXYpLnRvRml4ZWQoMykpO1xuICAgICAgICAgICAgaWYgKHRoaXMuX2xvZ1ZlcmJvc2UpIHtcbiAgICAgICAgICAgICAgICBjb25zb2xlLmxvZyhgWyR7dGltZVN0cmluZ31dXFxuYCwgLi4uYXJncyk7XG4gICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAgIGNvbnNvbGUubG9nKGBbJHt0aW1lU3RyaW5nfV1cXG5gLCBhcmdzWzBdKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIHRoaXMuX3Byb2ZpbGVQcmV2ID0gY3VycmVudDtcbiAgICAgICAgfSBlbHNlIGlmICh0aGlzLl9sb2dWZXJib3NlKSB7XG4gICAgICAgICAgICBjb25zb2xlLmxvZyhgWyR7RGF0ZS5ub3coKSAvIDEwMDB9XWAsIC4uLmFyZ3MpO1xuICAgICAgICB9XG4gICAgfVxuXG4gICAgc3RhcnRQcm9maWxlKCkge1xuICAgICAgICB0aGlzLl9wcm9maWxlU3RhcnQgPSBEYXRlLm5vdygpIC8gMTAwMDtcbiAgICAgICAgdGhpcy5fcHJvZmlsZVByZXYgPSB0aGlzLl9wcm9maWxlU3RhcnQ7XG4gICAgfVxuXG4gICAgc3RvcFByb2ZpbGUoKSB7XG4gICAgICAgIHRoaXMuX3Byb2ZpbGVTdGFydCA9IHRoaXMuX3Byb2ZpbGVQcmV2ID0gMDtcbiAgICB9XG5cbiAgICByZXF1ZXN0c1VybCgpOiBzdHJpbmcge1xuICAgICAgICByZXR1cm4gdGhpcy5fcmVxdWVzdHNVcmw7XG4gICAgfVxuXG4gICAgcXVlcmllc0h0dHBVcmwoKTogc3RyaW5nIHtcbiAgICAgICAgcmV0dXJuIHRoaXMuX3F1ZXJpZXNIdHRwVXJsO1xuICAgIH1cblxuICAgIHF1ZXJpZXNXc1VybCgpOiBzdHJpbmcge1xuICAgICAgICByZXR1cm4gdGhpcy5fcXVlcmllc1dzVXJsO1xuICAgIH1cblxuICAgIGFzeW5jIGdldFZlcnNpb24oKTogUHJvbWlzZTxzdHJpbmc+IHtcbiAgICAgICAgcmV0dXJuIHRoaXMucmVxdWVzdENvcmUoJ3ZlcnNpb24nKTtcbiAgICB9XG5cblxuICAgIGFzeW5jIHNldHVwKCk6IFByb21pc2U8dm9pZD4ge1xuICAgICAgICBpZiAodGhpcy5kYXRhKSB7XG4gICAgICAgICAgICBhd2FpdCB0aGlzLnJlcXVlc3RDb3JlKCdzZXR1cCcsIHRoaXMuZGF0YSk7XG4gICAgICAgIH1cbiAgICAgICAgdGhpcy5fbG9nVmVyYm9zZSA9ICh0aGlzLmRhdGEgJiYgdGhpcy5kYXRhLmxvZ192ZXJib3NlKSB8fCBmYWxzZTtcbiAgICAgICAgaWYgKHRoaXMuX2xvZ1ZlcmJvc2UpIHtcbiAgICAgICAgICAgIHRoaXMuc3RhcnRQcm9maWxlKCk7XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICBfbG9nVmVyYm9zZTogYm9vbGVhbjtcbiAgICBfcmVxdWVzdHNVcmw6IHN0cmluZztcbiAgICBfcXVlcmllc0h0dHBVcmw6IHN0cmluZztcbiAgICBfcXVlcmllc1dzVXJsOiBzdHJpbmc7XG4gICAgX3Byb2ZpbGVTdGFydDogbnVtYmVyO1xuICAgIF9wcm9maWxlUHJldjogbnVtYmVyO1xufVxuXG5UT05Db25maWdNb2R1bGUubW9kdWxlTmFtZSA9ICdUT05Db25maWdNb2R1bGUnO1xuIl19