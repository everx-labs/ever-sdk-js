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

var _jaegerClient = require("jaeger-client");

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

function initTracer(serviceName, jaegerEndpoint) {
  var config = {
    serviceName: serviceName,
    sampler: {
      type: 'const',
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
        console.log('INFO ', msg);
      },
      error: function error(msg) {
        console.log('ERROR', msg);
      }
    }
  };
  return (0, _jaegerClient.initTracerFromEnv)(config, options);
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy9tb2R1bGVzL1RPTkNvbmZpZ01vZHVsZS5qcyJdLCJuYW1lcyI6WyJVUkxQYXJ0cyIsInVybCIsInByb3RvY29sU2VwYXJhdG9yUG9zIiwiaW5kZXhPZiIsInByb3RvY29sRW5kIiwicXVlc3Rpb25Qb3MiLCJxdWVyeVN0YXJ0IiwibGVuZ3RoIiwicGF0aEVuZCIsInBhdGhTZXBhcmF0b3JQb3MiLCJwYXRoU3RhcnQiLCJzdWJzdHJpbmciLCJiYXNlVXJsIiwiYmFzZVBhcnRzIiwicGFyc2UiLCJwYXJ0cyIsInByb3RvY29sIiwiaG9zdCIsInRvU3RyaW5nIiwiZml4UGFydHMiLCJwYXRoIiwiZml4IiwicXVlcnkiLCJyZXBsYWNlIiwic3RhcnRzV2l0aCIsInJlc29sdmVTZXJ2ZXIiLCJjb25maWd1cmVkIiwiZGVmIiwicmVwbGFjZVByZWZpeCIsInMiLCJwcmVmaXgiLCJuZXdQcmVmaXgiLCJzdWJzdHIiLCJkZWZhdWx0U2VydmVyIiwiaW5pdFRyYWNlciIsInNlcnZpY2VOYW1lIiwiamFlZ2VyRW5kcG9pbnQiLCJjb25maWciLCJzYW1wbGVyIiwidHlwZSIsInBhcmFtIiwicmVwb3J0ZXIiLCJjb2xsZWN0b3JFbmRwb2ludCIsImxvZ1NwYW5zIiwib3B0aW9ucyIsImxvZ2dlciIsImluZm8iLCJtc2ciLCJjb25zb2xlIiwibG9nIiwiZXJyb3IiLCJUT05Db25maWdNb2R1bGUiLCJkYXRhIiwic2VydmVycyIsInNlcnZlciIsIl9yZXF1ZXN0c1VybCIsInJlcXVlc3RzU2VydmVyIiwiYXBwZW5kUGF0aCIsIl9xdWVyaWVzSHR0cFVybCIsInF1ZXJpZXNTZXJ2ZXIiLCJxdWVyaWVzV3NTZXJ2ZXIiLCJfcXVlcmllc1dzVXJsIiwidHJhY2VyIiwicHJvZmlsZSIsIl9wcm9maWxlU3RhcnQiLCJhcmdzIiwiY3VycmVudCIsIkRhdGUiLCJub3ciLCJ0aW1lU3RyaW5nIiwiU3RyaW5nIiwidG9GaXhlZCIsIl9wcm9maWxlUHJldiIsIl9sb2dWZXJib3NlIiwicmVxdWVzdENvcmUiLCJsb2dfdmVyYm9zZSIsInN0YXJ0UHJvZmlsZSIsIlRPTk1vZHVsZSIsIm1vZHVsZU5hbWUiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQWtCQTs7QUFDQTs7QUFDQTs7QUFwQkE7Ozs7Ozs7Ozs7Ozs7OztJQXNCYUEsUTs7Ozs7MEJBQ0lDLEcsRUFBdUI7QUFDaEMsVUFBTUMsb0JBQW9CLEdBQUdELEdBQUcsQ0FBQ0UsT0FBSixDQUFZLEtBQVosQ0FBN0I7QUFDQSxVQUFNQyxXQUFXLEdBQUdGLG9CQUFvQixJQUFJLENBQXhCLEdBQTRCQSxvQkFBb0IsR0FBRyxDQUFuRCxHQUF1RCxDQUEzRTtBQUNBLFVBQU1HLFdBQVcsR0FBR0osR0FBRyxDQUFDRSxPQUFKLENBQVksR0FBWixFQUFpQkMsV0FBakIsQ0FBcEI7QUFDQSxVQUFNRSxVQUFVLEdBQUdELFdBQVcsSUFBSSxDQUFmLEdBQW1CQSxXQUFXLEdBQUcsQ0FBakMsR0FBcUNKLEdBQUcsQ0FBQ00sTUFBNUQ7QUFDQSxVQUFNQyxPQUFPLEdBQUdILFdBQVcsSUFBSSxDQUFmLEdBQW1CQSxXQUFuQixHQUFpQ0osR0FBRyxDQUFDTSxNQUFyRDtBQUNBLFVBQU1FLGdCQUFnQixHQUFHUixHQUFHLENBQUNFLE9BQUosQ0FBWSxHQUFaLEVBQWlCQyxXQUFqQixDQUF6QixDQU5nQyxDQU9oQzs7QUFDQSxVQUFNTSxTQUFTLEdBQUdELGdCQUFnQixJQUFJLENBQXBCLEdBQ1hBLGdCQUFnQixHQUFHRCxPQUFuQixHQUE2QkMsZ0JBQTdCLEdBQWdERCxPQURyQyxHQUVYSCxXQUFXLElBQUksQ0FBZixHQUFtQkEsV0FBbkIsR0FBaUNKLEdBQUcsQ0FBQ00sTUFGNUM7QUFHQSxhQUFPLElBQUlQLFFBQUosQ0FDSEMsR0FBRyxDQUFDVSxTQUFKLENBQWMsQ0FBZCxFQUFpQlAsV0FBakIsQ0FERyxFQUVISCxHQUFHLENBQUNVLFNBQUosQ0FBY1AsV0FBZCxFQUEyQk0sU0FBM0IsQ0FGRyxFQUdI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LGlCQUE3QiIsInNvdXJjZXNDb250ZW50IjpbIi8qXG4gKiBDb3B5cmlnaHQgMjAxOC0yMDIwIFRPTiBERVYgU09MVVRJT05TIExURC5cbiAqXG4gKiBMaWNlbnNlZCB1bmRlciB0aGUgU09GVFdBUkUgRVZBTFVBVElPTiBMaWNlbnNlICh0aGUgXCJMaWNlbnNlXCIpOyB5b3UgbWF5IG5vdCB1c2VcbiAqIHRoaXMgZmlsZSBleGNlcHQgaW4gY29tcGxpYW5jZSB3aXRoIHRoZSBMaWNlbnNlLiAgWW91IG1heSBvYnRhaW4gYSBjb3B5IG9mIHRoZVxuICogTGljZW5zZSBhdDpcbiAqXG4gKiBodHRwOi8vd3d3LnRvbi5kZXYvbGljZW5zZXNcbiAqXG4gKiBVbmxlc3MgcmVxdWlyZWQgYnkgYXBwbGljYWJsZSBsYXcgb3IgYWdyZWVkIHRvIGluIHdyaXRpbmcsIHNvZnR3YXJlXG4gKiBkaXN0cmlidXRlZCB1bmRlciB0aGUgTGljZW5zZSBpcyBkaXN0cmlidXRlZCBvbiBhbiBcIkFTIElTXCIgQkFTSVMsXG4gKiBXSVRIT1VUIFdBUlJBTlRJRVMgT1IgQ09ORElUSU9OUyBPRiBBTlkgS0lORCwgZWl0aGVyIGV4cHJlc3Mgb3IgaW1wbGllZC5cbiAqIFNlZSB0aGUgTGljZW5zZSBmb3IgdGhlIHNwZWNpZmljIFRPTiBERVYgc29mdHdhcmUgZ292ZXJuaW5nIHBlcm1pc3Npb25zIGFuZFxuICogbGltaXRhdGlvbnMgdW5kZXIgdGhlIExpY2Vuc2UuXG4gKi9cblxuLy8gQGZsb3dcbmltcG9ydCB0eXBlIHsgVE9OQ29uZmlnRGF0YSB9IGZyb20gXCIuLi8uLi90eXBlc1wiO1xuaW1wb3J0IHsgVE9OTW9kdWxlIH0gZnJvbSAnLi4vVE9OTW9kdWxlJztcbmltcG9ydCB7IFRyYWNlciB9IGZyb20gJ29wZW50cmFjaW5nJztcbmltcG9ydCB7IGluaXRUcmFjZXJGcm9tRW52IGFzIGluaXRKYWVnZXJUcmFjZXIgfSBmcm9tJ2phZWdlci1jbGllbnQnO1xuXG5leHBvcnQgY2xhc3MgVVJMUGFydHMge1xuICAgIHN0YXRpYyBwYXJzZSh1cmw6IHN0cmluZyk6IFVSTFBhcnRzIHtcbiAgICAgICAgY29uc3QgcHJvdG9jb2xTZXBhcmF0b3JQb3MgPSB1cmwuaW5kZXhPZignOi8vJyk7XG4gICAgICAgIGNvbnN0IHByb3RvY29sRW5kID0gcHJvdG9jb2xTZXBhcmF0b3JQb3MgPj0gMCA/IHByb3RvY29sU2VwYXJhdG9yUG9zICsgMyA6IDA7XG4gICAgICAgIGNvbnN0IHF1ZXN0aW9uUG9zID0gdXJsLmluZGV4T2YoJz8nLCBwcm90b2NvbEVuZCk7XG4gICAgICAgIGNvbnN0IHF1ZXJ5U3RhcnQgPSBxdWVzdGlvblBvcyA+PSAwID8gcXVlc3Rpb25Qb3MgKyAxIDogdXJsLmxlbmd0aDtcbiAgICAgICAgY29uc3QgcGF0aEVuZCA9IHF1ZXN0aW9uUG9zID49IDAgPyBxdWVzdGlvblBvcyA6IHVybC5sZW5ndGg7XG4gICAgICAgIGNvbnN0IHBhdGhTZXBhcmF0b3JQb3MgPSB1cmwuaW5kZXhPZignLycsIHByb3RvY29sRW5kKTtcbiAgICAgICAgLy8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIG5vLW5lc3RlZC10ZXJuYXJ5XG4gICAgICAgIGNvbnN0IHBhdGhTdGFydCA9IHBhdGhTZXBhcmF0b3JQb3MgPj0gMFxuICAgICAgICAgICAgPyAocGF0aFNlcGFyYXRvclBvcyA8IHBhdGhFbmQgPyBwYXRoU2VwYXJhdG9yUG9zIDogcGF0aEVuZClcbiAgICAgICAgICAgIDogKHF1ZXN0aW9uUG9zID49IDAgPyBxdWVzdGlvblBvcyA6IHVybC5sZW5ndGgpO1xuICAgICAgICByZXR1cm4gbmV3IFVSTFBhcnRzKFxuICAgICAgICAgICAgdXJsLnN1YnN0cmluZygwLCBwcm90b2NvbEVuZCksXG4gICAgICAgICAgICB1cmwuc3Vic3RyaW5nKHByb3RvY29sRW5kLCBwYXRoU3RhcnQpLFxuICAgICAgICAgICAgdXJsLnN1YnN0cmluZyhwYXRoU3RhcnQsIHBhdGhFbmQpLFxuICAgICAgICAgICAgdXJsLnN1YnN0cmluZyhxdWVyeVN0YXJ0KSxcbiAgICAgICAgKTtcbiAgICB9XG5cbiAgICBzdGF0aWMgcmVzb2x2ZVVybChiYXNlVXJsOiBzdHJpbmcsIHVybDogc3RyaW5nKTogc3RyaW5nIHtcbiAgICAgICAgY29uc3QgYmFzZVBhcnRzID0gVVJMUGFydHMucGFyc2UoYmFzZVVybCk7XG4gICAgICAgIGNvbnN0IHBhcnRzID0gVVJMUGFydHMucGFyc2UodXJsKTtcbiAgICAgICAgcGFydHMucHJvdG9jb2wgPSBwYXJ0cy5wcm90b2NvbCB8fCBiYXNlUGFydHMucHJvdG9jb2w7XG4gICAgICAgIHBhcnRzLmhvc3QgPSBwYXJ0cy5ob3N0IHx8IGJhc2VQYXJ0cy5ob3N0O1xuICAgICAgICByZXR1cm4gcGFydHMudG9TdHJpbmcoKTtcbiAgICB9XG5cbiAgICBzdGF0aWMgZml4KHVybDogc3RyaW5nLCBmaXhQYXJ0czogKHBhcnRzOiBVUkxQYXJ0cykgPT4gdm9pZCk6IHN0cmluZyB7XG4gICAgICAgIGNvbnN0IHBhcnRzID0gVVJMUGFydHMucGFyc2UodXJsKTtcbiAgICAgICAgZml4UGFydHMocGFydHMpO1xuICAgICAgICByZXR1cm4gcGFydHMudG9TdHJpbmcoKTtcbiAgICB9XG5cblxuICAgIHN0YXRpYyBhcHBlbmRQYXRoKHVybDogc3RyaW5nLCBwYXRoOiBzdHJpbmcpOiBzdHJpbmcge1xuICAgICAgICByZXR1cm4gVVJMUGFydHMuZml4KHVybCwgKHBhcnRzKSA9PiB7XG4gICAgICAgICAgICBwYXJ0cy5wYXRoID0gYCR7cGFydHMucGF0aH0vJHtwYXRofWA7XG4gICAgICAgIH0pO1xuICAgIH1cblxuICAgIHByb3RvY29sOiBzdHJpbmc7XG5cbiAgICBob3N0OiBzdHJpbmc7XG5cbiAgICBwYXRoOiBzdHJpbmc7XG5cbiAgICBxdWVyeTogc3RyaW5nO1xuXG4gICAgY29uc3RydWN0b3IocHJvdG9jb2w6IHN0cmluZywgaG9zdDogc3RyaW5nLCBwYXRoOiBzdHJpbmcsIHF1ZXJ5OiBzdHJpbmcpIHtcbiAgICAgICAgdGhpcy5wcm90b2NvbCA9IHByb3RvY29sO1xuICAgICAgICB0aGlzLmhvc3QgPSBob3N0O1xuICAgICAgICB0aGlzLnBhdGggPSBwYXRoO1xuICAgICAgICB0aGlzLnF1ZXJ5ID0gcXVlcnk7XG4gICAgfVxuXG5cbiAgICB0b1N0cmluZygpOiBzdHJpbmcge1xuICAgICAgICBsZXQgeyBwYXRoIH0gPSB0aGlzO1xuICAgICAgICB3aGlsZSAocGF0aC5pbmRleE9mKCcvLycpID49IDApIHtcbiAgICAgICAgICAgIHBhdGggPSBwYXRoLnJlcGxhY2UoJy8vJywgJy8nKTtcbiAgICAgICAgfVxuICAgICAgICBpZiAocGF0aCAhPT0gJycgJiYgIXBhdGguc3RhcnRzV2l0aCgnLycpKSB7XG4gICAgICAgICAgICBwYXRoID0gYC8ke3BhdGh9YDtcbiAgICAgICAgfVxuICAgICAgICByZXR1cm4gYCR7dGhpcy5wcm90b2NvbH0ke3RoaXMuaG9zdH0ke3BhdGh9JHt0aGlzLnF1ZXJ5ICE9PSAnJyA/ICc/JyA6ICcnfSR7dGhpcy5xdWVyeX1gO1xuICAgIH1cbn1cblxuZnVuY3Rpb24gcmVzb2x2ZVNlcnZlcihjb25maWd1cmVkPzogc3RyaW5nLCBkZWY6IHN0cmluZyk6IHN0cmluZyB7XG4gICAgcmV0dXJuIFVSTFBhcnRzLmZpeChjb25maWd1cmVkIHx8IGRlZiwgKHBhcnRzKSA9PiB7XG4gICAgICAgIGlmIChwYXJ0cy5wcm90b2NvbCA9PT0gJycpIHtcbiAgICAgICAgICAgIHBhcnRzLnByb3RvY29sID0gJ2h0dHBzOi8vJztcbiAgICAgICAgfVxuICAgIH0pO1xufVxuXG5mdW5jdGlvbiByZXBsYWNlUHJlZml4KHMsIHByZWZpeCwgbmV3UHJlZml4KSB7XG4gICAgcmV0dXJuIGAke25ld1ByZWZpeH0ke3Muc3Vic3RyKHByZWZpeC5sZW5ndGgpfWA7XG59XG5cbmNvbnN0IGRlZmF1bHRTZXJ2ZXIgPSAnc2VydmljZXMudG9ubGFicy5pbyc7XG5cbmZ1bmN0aW9uIGluaXRUcmFjZXIoc2VydmljZU5hbWUsIGphZWdlckVuZHBvaW50KSB7XG4gICAgY29uc3QgY29uZmlnID0ge1xuICAgICAgICBzZXJ2aWNlTmFtZSxcbiAgICAgICAgc2FtcGxlcjoge1xuICAgICAgICAgICAgdHlwZTogJ2NvbnN0JyxcbiAgICAgICAgICAgIHBhcmFtOiAxLFxuICAgICAgICB9LFxuICAgICAgICByZXBvcnRlcjogamFlZ2VyRW5kcG9pbnQgPyB7XG4gICAgICAgICAgICBjb2xsZWN0b3JFbmRwb2ludDogamFlZ2VyRW5kcG9pbnQsXG4gICAgICAgICAgICBsb2dTcGFuczogdHJ1ZSxcbiAgICAgICAgfSA6IHt9LFxuICAgIH07XG4gICAgY29uc3Qgb3B0aW9ucyA9IHtcbiAgICAgICAgbG9nZ2VyOiB7XG4gICAgICAgICAgICBpbmZvKG1zZykge1xuICAgICAgICAgICAgICAgIGNvbnNvbGUubG9nKCdJTkZPICcsIG1zZyk7XG4gICAgICAgICAgICB9LFxuICAgICAgICAgICAgZXJyb3IobXNnKSB7XG4gICAgICAgICAgICAgICAgY29uc29sZS5sb2coJ0VSUk9SJywgbXNnKTtcbiAgICAgICAgICAgIH0sXG4gICAgICAgIH0sXG4gICAgfTtcbiAgICByZXR1cm4gaW5pdEphZWdlclRyYWNlcihjb25maWcsIG9wdGlvbnMpO1xufVxuXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBUT05Db25maWdNb2R1bGUgZXh0ZW5kcyBUT05Nb2R1bGUge1xuICAgIGRhdGE6ID9UT05Db25maWdEYXRhO1xuICAgIHRyYWNlcjogVHJhY2VyO1xuXG5cbiAgICBzZXREYXRhKGRhdGE6IFRPTkNvbmZpZ0RhdGEpIHtcbiAgICAgICAgdGhpcy5kYXRhID0gZGF0YSB8fCB7XG4gICAgICAgICAgICBzZXJ2ZXJzOiBbZGVmYXVsdFNlcnZlcl0sXG4gICAgICAgIH07XG4gICAgICAgIGNvbnN0IHNlcnZlciA9IHJlc29sdmVTZXJ2ZXIoZGF0YS5zZXJ2ZXJzWzBdLCBkZWZhdWx0U2VydmVyKTtcbiAgICAgICAgdGhpcy5fcmVxdWVzdHNVcmwgPSByZXNvbHZlU2VydmVyKGRhdGEucmVxdWVzdHNTZXJ2ZXIsIFVSTFBhcnRzLmFwcGVuZFBhdGgoc2VydmVyLCAnL3RvcGljcy9yZXF1ZXN0cycpKTtcbiAgICAgICAgdGhpcy5fcXVlcmllc0h0dHBVcmwgPSByZXNvbHZlU2VydmVyKGRhdGEucXVlcmllc1NlcnZlciwgVVJMUGFydHMuYXBwZW5kUGF0aChzZXJ2ZXIsICcvZ3JhcGhxbCcpKTtcbiAgICAgICAgY29uc3QgcXVlcmllc1dzU2VydmVyID0gdGhpcy5fcXVlcmllc0h0dHBVcmwuc3RhcnRzV2l0aCgnaHR0cHM6Ly8nKVxuICAgICAgICAgICAgPyByZXBsYWNlUHJlZml4KHRoaXMuX3F1ZXJpZXNIdHRwVXJsLCAnaHR0cHM6Ly8nLCAnd3NzOi8vJylcbiAgICAgICAgICAgIDogcmVwbGFjZVByZWZpeCh0aGlzLl9xdWVyaWVzSHR0cFVybCwgJ2h0dHA6Ly8nLCAnd3M6Ly8nKTtcblxuICAgICAgICB0aGlzLl9xdWVyaWVzV3NVcmwgPSByZXNvbHZlU2VydmVyKGRhdGEucXVlcmllc1dzU2VydmVyLCBxdWVyaWVzV3NTZXJ2ZXIpO1xuICAgICAgICB0aGlzLnRyYWNlciA9IGluaXRUcmFjZXIoJ3Rvbi1jbGllbnQtanMnLCBkYXRhLmphZWdlckVuZHBvaW50KTtcbiAgICB9XG5cbiAgICBsb2coLi4uYXJnczogYW55W10pIHtcbiAgICAgICAgY29uc3QgcHJvZmlsZSA9ICh0aGlzLl9wcm9maWxlU3RhcnQgfHwgMCkgIT0gMDtcbiAgICAgICAgaWYgKHByb2ZpbGUpIHtcbiAgICAgICAgICAgIGNvbnN0IGN1cnJlbnQgPSBEYXRlLm5vdygpIC8gMTAwMDtcbiAgICAgICAgICAgIGNvbnN0IHRpbWVTdHJpbmcgPSBgJHtTdHJpbmcoY3VycmVudC50b0ZpeGVkKDMpKX0gJHtcbiAgICAgICAgICAgICAgICBTdHJpbmcoKGN1cnJlbnQgLSB0aGlzLl9wcm9maWxlU3RhcnQpLnRvRml4ZWQoMykpfSAke1xuICAgICAgICAgICAgICAgIFN0cmluZygoY3VycmVudCAtIHRoaXMuX3Byb2ZpbGVQcmV2KS50b0ZpeGVkKDMpKX1gO1xuICAgICAgICAgICAgaWYgKHRoaXMuX2xvZ1ZlcmJvc2UpIHtcbiAgICAgICAgICAgICAgICBjb25zb2xlLmxvZyhgWyR7dGltZVN0cmluZ31dXFxuYCwgLi4uYXJncyk7XG4gICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAgIGNvbnNvbGUubG9nKGBbJHt0aW1lU3RyaW5nfV1cXG5gLCBhcmdzWzBdKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIHRoaXMuX3Byb2ZpbGVQcmV2ID0gY3VycmVudDtcbiAgICAgICAgfSBlbHNlIGlmICh0aGlzLl9sb2dWZXJib3NlKSB7XG4gICAgICAgICAgICBjb25zb2xlLmxvZyhgWyR7RGF0ZS5ub3coKSAvIDEwMDB9XWAsIC4uLmFyZ3MpO1xuICAgICAgICB9XG4gICAgfVxuXG4gICAgc3RhcnRQcm9maWxlKCkge1xuICAgICAgICB0aGlzLl9wcm9maWxlU3RhcnQgPSBEYXRlLm5vdygpIC8gMTAwMDtcbiAgICAgICAgdGhpcy5fcHJvZmlsZVByZXYgPSB0aGlzLl9wcm9maWxlU3RhcnQ7XG4gICAgfVxuXG4gICAgc3RvcFByb2ZpbGUoKSB7XG4gICAgICAgIHRoaXMuX3Byb2ZpbGVTdGFydCA9IHRoaXMuX3Byb2ZpbGVQcmV2ID0gMDtcbiAgICB9XG5cbiAgICByZXF1ZXN0c1VybCgpOiBzdHJpbmcge1xuICAgICAgICByZXR1cm4gdGhpcy5fcmVxdWVzdHNVcmw7XG4gICAgfVxuXG4gICAgcXVlcmllc0h0dHBVcmwoKTogc3RyaW5nIHtcbiAgICAgICAgcmV0dXJuIHRoaXMuX3F1ZXJpZXNIdHRwVXJsO1xuICAgIH1cblxuICAgIHF1ZXJpZXNXc1VybCgpOiBzdHJpbmcge1xuICAgICAgICByZXR1cm4gdGhpcy5fcXVlcmllc1dzVXJsO1xuICAgIH1cblxuICAgIGFzeW5jIGdldFZlcnNpb24oKTogUHJvbWlzZTxzdHJpbmc+IHtcbiAgICAgICAgcmV0dXJuIHRoaXMucmVxdWVzdENvcmUoJ3ZlcnNpb24nKTtcbiAgICB9XG5cblxuICAgIGFzeW5jIHNldHVwKCk6IFByb21pc2U8dm9pZD4ge1xuICAgICAgICBpZiAodGhpcy5kYXRhKSB7XG4gICAgICAgICAgICBhd2FpdCB0aGlzLnJlcXVlc3RDb3JlKCdzZXR1cCcsIHRoaXMuZGF0YSk7XG4gICAgICAgIH1cbiAgICAgICAgdGhpcy5fbG9nVmVyYm9zZSA9ICh0aGlzLmRhdGEgJiYgdGhpcy5kYXRhLmxvZ192ZXJib3NlKSB8fCBmYWxzZTtcbiAgICAgICAgaWYgKHRoaXMuX2xvZ1ZlcmJvc2UpIHtcbiAgICAgICAgICAgIHRoaXMuc3RhcnRQcm9maWxlKCk7XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICBfbG9nVmVyYm9zZTogYm9vbGVhbjtcblxuICAgIF9yZXF1ZXN0c1VybDogc3RyaW5nO1xuXG4gICAgX3F1ZXJpZXNIdHRwVXJsOiBzdHJpbmc7XG5cbiAgICBfcXVlcmllc1dzVXJsOiBzdHJpbmc7XG5cbiAgICBfcHJvZmlsZVN0YXJ0OiBudW1iZXI7XG5cbiAgICBfcHJvZmlsZVByZXY6IG51bWJlcjtcbn1cblxuVE9OQ29uZmlnTW9kdWxlLm1vZHVsZU5hbWUgPSAnVE9OQ29uZmlnTW9kdWxlJztcbiJdfQ==