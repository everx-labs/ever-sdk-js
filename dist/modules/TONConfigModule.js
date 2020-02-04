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
  return (0, _jaegerClient.initTracer)(config, options);
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
      this.tracer = data.jaegerEndpoint ? initTracer('ton-client-js', data.jaegerEndpoint) : _noop.tracer;
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy9tb2R1bGVzL1RPTkNvbmZpZ01vZHVsZS5qcyJdLCJuYW1lcyI6WyJVUkxQYXJ0cyIsInVybCIsInByb3RvY29sU2VwYXJhdG9yUG9zIiwiaW5kZXhPZiIsInByb3RvY29sRW5kIiwicXVlc3Rpb25Qb3MiLCJxdWVyeVN0YXJ0IiwibGVuZ3RoIiwicGF0aEVuZCIsInBhdGhTZXBhcmF0b3JQb3MiLCJwYXRoU3RhcnQiLCJzdWJzdHJpbmciLCJiYXNlVXJsIiwiYmFzZVBhcnRzIiwicGFyc2UiLCJwYXJ0cyIsInByb3RvY29sIiwiaG9zdCIsInRvU3RyaW5nIiwiZml4UGFydHMiLCJwYXRoIiwiZml4IiwicXVlcnkiLCJyZXBsYWNlIiwic3RhcnRzV2l0aCIsInJlc29sdmVTZXJ2ZXIiLCJjb25maWd1cmVkIiwiZGVmIiwicmVwbGFjZVByZWZpeCIsInMiLCJwcmVmaXgiLCJuZXdQcmVmaXgiLCJzdWJzdHIiLCJkZWZhdWx0U2VydmVyIiwiaW5pdFRyYWNlciIsInNlcnZpY2VOYW1lIiwiamFlZ2VyRW5kcG9pbnQiLCJjb25maWciLCJzYW1wbGVyIiwidHlwZSIsInBhcmFtIiwicmVwb3J0ZXIiLCJjb2xsZWN0b3JFbmRwb2ludCIsImxvZ1NwYW5zIiwib3B0aW9ucyIsImxvZ2dlciIsImluZm8iLCJtc2ciLCJjb25zb2xlIiwibG9nIiwiZXJyb3IiLCJUT05Db25maWdNb2R1bGUiLCJkYXRhIiwic2VydmVycyIsInNlcnZlciIsIl9yZXF1ZXN0c1VybCIsInJlcXVlc3RzU2VydmVyIiwiYXBwZW5kUGF0aCIsIl9xdWVyaWVzSHR0cFVybCIsInF1ZXJpZXNTZXJ2ZXIiLCJxdWVyaWVzV3NTZXJ2ZXIiLCJfcXVlcmllc1dzVXJsIiwidHJhY2VyIiwibm9vcFRyYWNlciIsInByb2ZpbGUiLCJfcHJvZmlsZVN0YXJ0IiwiYXJncyIsImN1cnJlbnQiLCJEYXRlIiwibm93IiwidGltZVN0cmluZyIsIlN0cmluZyIsInRvRml4ZWQiLCJfcHJvZmlsZVByZXYiLCJfbG9nVmVyYm9zZSIsInJlcXVlc3RDb3JlIiwibG9nX3ZlcmJvc2UiLCJzdGFydFByb2ZpbGUiLCJUT05Nb2R1bGUiLCJtb2R1bGVOYW1lIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFrQkE7O0FBQ0E7O0FBQ0E7O0FBRUE7O0FBdEJBOzs7Ozs7Ozs7Ozs7Ozs7SUF3QmFBLFE7Ozs7OzBCQUNJQyxHLEVBQXVCO0FBQ2hDLFVBQU1DLG9CQUFvQixHQUFHRCxHQUFHLENBQUNFLE9BQUosQ0FBWSxLQUFaLENBQTdCO0FBQ0EsVUFBTUMsV0FBVyxHQUFHRixvQkFBb0IsSUFBSSxDQUF4QixHQUE0QkEsb0JBQW9CLEdBQUcsQ0FBbkQsR0FBdUQsQ0FBM0U7QUFDQSxVQUFNRyxXQUFXLEdBQUdKLEdBQUcsQ0FBQ0UsT0FBSixDQUFZLEdBQVosRUFBaUJDLFdBQWpCLENBQXBCO0FBQ0EsVUFBTUUsVUFBVSxHQUFHRCxXQUFXLElBQUksQ0FBZixHQUFtQkEsV0FBVyxHQUFHLENBQWpDLEdBQXFDSixHQUFHLENBQUNNLE1BQTVEO0FBQ0EsVUFBTUMsT0FBTyxHQUFHSCxXQUFXLElBQUksQ0FBZixHQUFtQkEsV0FBbkIsR0FBaUNKLEdBQUcsQ0FBQ00sTUFBckQ7QUFDQSxVQUFNRSxnQkFBZ0IsR0FBR1IsR0FBRyxDQUFDRSxPQUFKLENBQVksR0FBWixFQUFpQkMsV0FBakIsQ0FBekIsQ0FOZ0MsQ0FPaEM7O0FBQ0EsVUFBTU0sU0FBUyxHQUFHRCxnQkFBZ0IsSUFBSSxDQUFwQixHQUNYQSxnQkFBZ0IsR0FBR0QsT0FBbkIsR0FBNkJDLGdCQUE3QixHQUFnREQsT0FEckMsR0FFWEgsV0FBVyxJQUFJLENBQWYsR0FBbUJBLFdBQW5CLEdBQWlDSixHQUFHLENBQUNNLE1BRjVDO0FBR0EsYUFBTyxJQUFJUCxRQUFKLENBQ0hDLEdBQUcsQ0FBQ1UsU0FBSixDQUFjLENBQWQsRUFBaUJQLFdBQWpCLENBREcsRUFFSEgsR0FBRyxDQUFDVSxTQUFKLENBQWNQLFdBQWQsRUFB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Ozs7Ozs7RUF6RW9DQyxxQjs7O0FBeUY3QzNCLGVBQWUsQ0FBQzRCLFVBQWhCLEdBQTZCLGlCQUE3QiIsInNvdXJjZXNDb250ZW50IjpbIi8qXG4gKiBDb3B5cmlnaHQgMjAxOC0yMDIwIFRPTiBERVYgU09MVVRJT05TIExURC5cbiAqXG4gKiBMaWNlbnNlZCB1bmRlciB0aGUgU09GVFdBUkUgRVZBTFVBVElPTiBMaWNlbnNlICh0aGUgXCJMaWNlbnNlXCIpOyB5b3UgbWF5IG5vdCB1c2VcbiAqIHRoaXMgZmlsZSBleGNlcHQgaW4gY29tcGxpYW5jZSB3aXRoIHRoZSBMaWNlbnNlLiAgWW91IG1heSBvYnRhaW4gYSBjb3B5IG9mIHRoZVxuICogTGljZW5zZSBhdDpcbiAqXG4gKiBodHRwOi8vd3d3LnRvbi5kZXYvbGljZW5zZXNcbiAqXG4gKiBVbmxlc3MgcmVxdWlyZWQgYnkgYXBwbGljYWJsZSBsYXcgb3IgYWdyZWVkIHRvIGluIHdyaXRpbmcsIHNvZnR3YXJlXG4gKiBkaXN0cmlidXRlZCB1bmRlciB0aGUgTGljZW5zZSBpcyBkaXN0cmlidXRlZCBvbiBhbiBcIkFTIElTXCIgQkFTSVMsXG4gKiBXSVRIT1VUIFdBUlJBTlRJRVMgT1IgQ09ORElUSU9OUyBPRiBBTlkgS0lORCwgZWl0aGVyIGV4cHJlc3Mgb3IgaW1wbGllZC5cbiAqIFNlZSB0aGUgTGljZW5zZSBmb3IgdGhlIHNwZWNpZmljIFRPTiBERVYgc29mdHdhcmUgZ292ZXJuaW5nIHBlcm1pc3Npb25zIGFuZFxuICogbGltaXRhdGlvbnMgdW5kZXIgdGhlIExpY2Vuc2UuXG4gKi9cblxuLy8gQGZsb3dcbmltcG9ydCB0eXBlIHsgVE9OQ29uZmlnRGF0YSB9IGZyb20gXCIuLi8uLi90eXBlc1wiO1xuaW1wb3J0IHsgVE9OTW9kdWxlIH0gZnJvbSAnLi4vVE9OTW9kdWxlJztcbmltcG9ydCB7IFRyYWNlciB9IGZyb20gJ29wZW50cmFjaW5nJztcbmltcG9ydCB7IHRyYWNlciBhcyBub29wVHJhY2VyIH0gZnJvbSBcIm9wZW50cmFjaW5nL2xpYi9ub29wXCI7XG5cbmltcG9ydCB7IGluaXRUcmFjZXIgYXMgaW5pdEphZWdlclRyYWNlciB9IGZyb20gJ2phZWdlci1jbGllbnQnO1xuXG5leHBvcnQgY2xhc3MgVVJMUGFydHMge1xuICAgIHN0YXRpYyBwYXJzZSh1cmw6IHN0cmluZyk6IFVSTFBhcnRzIHtcbiAgICAgICAgY29uc3QgcHJvdG9jb2xTZXBhcmF0b3JQb3MgPSB1cmwuaW5kZXhPZignOi8vJyk7XG4gICAgICAgIGNvbnN0IHByb3RvY29sRW5kID0gcHJvdG9jb2xTZXBhcmF0b3JQb3MgPj0gMCA/IHByb3RvY29sU2VwYXJhdG9yUG9zICsgMyA6IDA7XG4gICAgICAgIGNvbnN0IHF1ZXN0aW9uUG9zID0gdXJsLmluZGV4T2YoJz8nLCBwcm90b2NvbEVuZCk7XG4gICAgICAgIGNvbnN0IHF1ZXJ5U3RhcnQgPSBxdWVzdGlvblBvcyA+PSAwID8gcXVlc3Rpb25Qb3MgKyAxIDogdXJsLmxlbmd0aDtcbiAgICAgICAgY29uc3QgcGF0aEVuZCA9IHF1ZXN0aW9uUG9zID49IDAgPyBxdWVzdGlvblBvcyA6IHVybC5sZW5ndGg7XG4gICAgICAgIGNvbnN0IHBhdGhTZXBhcmF0b3JQb3MgPSB1cmwuaW5kZXhPZignLycsIHByb3RvY29sRW5kKTtcbiAgICAgICAgLy8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIG5vLW5lc3RlZC10ZXJuYXJ5XG4gICAgICAgIGNvbnN0IHBhdGhTdGFydCA9IHBhdGhTZXBhcmF0b3JQb3MgPj0gMFxuICAgICAgICAgICAgPyAocGF0aFNlcGFyYXRvclBvcyA8IHBhdGhFbmQgPyBwYXRoU2VwYXJhdG9yUG9zIDogcGF0aEVuZClcbiAgICAgICAgICAgIDogKHF1ZXN0aW9uUG9zID49IDAgPyBxdWVzdGlvblBvcyA6IHVybC5sZW5ndGgpO1xuICAgICAgICByZXR1cm4gbmV3IFVSTFBhcnRzKFxuICAgICAgICAgICAgdXJsLnN1YnN0cmluZygwLCBwcm90b2NvbEVuZCksXG4gICAgICAgICAgICB1cmwuc3Vic3RyaW5nKHByb3RvY29sRW5kLCBwYXRoU3RhcnQpLFxuICAgICAgICAgICAgdXJsLnN1YnN0cmluZyhwYXRoU3RhcnQsIHBhdGhFbmQpLFxuICAgICAgICAgICAgdXJsLnN1YnN0cmluZyhxdWVyeVN0YXJ0KSxcbiAgICAgICAgKTtcbiAgICB9XG5cbiAgICBzdGF0aWMgcmVzb2x2ZVVybChiYXNlVXJsOiBzdHJpbmcsIHVybDogc3RyaW5nKTogc3RyaW5nIHtcbiAgICAgICAgY29uc3QgYmFzZVBhcnRzID0gVVJMUGFydHMucGFyc2UoYmFzZVVybCk7XG4gICAgICAgIGNvbnN0IHBhcnRzID0gVVJMUGFydHMucGFyc2UodXJsKTtcbiAgICAgICAgcGFydHMucHJvdG9jb2wgPSBwYXJ0cy5wcm90b2NvbCB8fCBiYXNlUGFydHMucHJvdG9jb2w7XG4gICAgICAgIHBhcnRzLmhvc3QgPSBwYXJ0cy5ob3N0IHx8IGJhc2VQYXJ0cy5ob3N0O1xuICAgICAgICByZXR1cm4gcGFydHMudG9TdHJpbmcoKTtcbiAgICB9XG5cbiAgICBzdGF0aWMgZml4KHVybDogc3RyaW5nLCBmaXhQYXJ0czogKHBhcnRzOiBVUkxQYXJ0cykgPT4gdm9pZCk6IHN0cmluZyB7XG4gICAgICAgIGNvbnN0IHBhcnRzID0gVVJMUGFydHMucGFyc2UodXJsKTtcbiAgICAgICAgZml4UGFydHMocGFydHMpO1xuICAgICAgICByZXR1cm4gcGFydHMudG9TdHJpbmcoKTtcbiAgICB9XG5cblxuICAgIHN0YXRpYyBhcHBlbmRQYXRoKHVybDogc3RyaW5nLCBwYXRoOiBzdHJpbmcpOiBzdHJpbmcge1xuICAgICAgICByZXR1cm4gVVJMUGFydHMuZml4KHVybCwgKHBhcnRzKSA9PiB7XG4gICAgICAgICAgICBwYXJ0cy5wYXRoID0gYCR7cGFydHMucGF0aH0vJHtwYXRofWA7XG4gICAgICAgIH0pO1xuICAgIH1cblxuICAgIHByb3RvY29sOiBzdHJpbmc7XG5cbiAgICBob3N0OiBzdHJpbmc7XG5cbiAgICBwYXRoOiBzdHJpbmc7XG5cbiAgICBxdWVyeTogc3RyaW5nO1xuXG4gICAgY29uc3RydWN0b3IocHJvdG9jb2w6IHN0cmluZywgaG9zdDogc3RyaW5nLCBwYXRoOiBzdHJpbmcsIHF1ZXJ5OiBzdHJpbmcpIHtcbiAgICAgICAgdGhpcy5wcm90b2NvbCA9IHByb3RvY29sO1xuICAgICAgICB0aGlzLmhvc3QgPSBob3N0O1xuICAgICAgICB0aGlzLnBhdGggPSBwYXRoO1xuICAgICAgICB0aGlzLnF1ZXJ5ID0gcXVlcnk7XG4gICAgfVxuXG5cbiAgICB0b1N0cmluZygpOiBzdHJpbmcge1xuICAgICAgICBsZXQgeyBwYXRoIH0gPSB0aGlzO1xuICAgICAgICB3aGlsZSAocGF0aC5pbmRleE9mKCcvLycpID49IDApIHtcbiAgICAgICAgICAgIHBhdGggPSBwYXRoLnJlcGxhY2UoJy8vJywgJy8nKTtcbiAgICAgICAgfVxuICAgICAgICBpZiAocGF0aCAhPT0gJycgJiYgIXBhdGguc3RhcnRzV2l0aCgnLycpKSB7XG4gICAgICAgICAgICBwYXRoID0gYC8ke3BhdGh9YDtcbiAgICAgICAgfVxuICAgICAgICByZXR1cm4gYCR7dGhpcy5wcm90b2NvbH0ke3RoaXMuaG9zdH0ke3BhdGh9JHt0aGlzLnF1ZXJ5ICE9PSAnJyA/ICc/JyA6ICcnfSR7dGhpcy5xdWVyeX1gO1xuICAgIH1cbn1cblxuZnVuY3Rpb24gcmVzb2x2ZVNlcnZlcihjb25maWd1cmVkPzogc3RyaW5nLCBkZWY6IHN0cmluZyk6IHN0cmluZyB7XG4gICAgcmV0dXJuIFVSTFBhcnRzLmZpeChjb25maWd1cmVkIHx8IGRlZiwgKHBhcnRzKSA9PiB7XG4gICAgICAgIGlmIChwYXJ0cy5wcm90b2NvbCA9PT0gJycpIHtcbiAgICAgICAgICAgIHBhcnRzLnByb3RvY29sID0gJ2h0dHBzOi8vJztcbiAgICAgICAgfVxuICAgIH0pO1xufVxuXG5mdW5jdGlvbiByZXBsYWNlUHJlZml4KHMsIHByZWZpeCwgbmV3UHJlZml4KSB7XG4gICAgcmV0dXJuIGAke25ld1ByZWZpeH0ke3Muc3Vic3RyKHByZWZpeC5sZW5ndGgpfWA7XG59XG5cbmNvbnN0IGRlZmF1bHRTZXJ2ZXIgPSAnc2VydmljZXMudG9ubGFicy5pbyc7XG5cbmZ1bmN0aW9uIGluaXRUcmFjZXIoc2VydmljZU5hbWUsIGphZWdlckVuZHBvaW50KSB7XG4gICAgY29uc3QgY29uZmlnID0ge1xuICAgICAgICBzZXJ2aWNlTmFtZSxcbiAgICAgICAgc2FtcGxlcjoge1xuICAgICAgICAgICAgdHlwZTogJ2NvbnN0JyxcbiAgICAgICAgICAgIHBhcmFtOiAxLFxuICAgICAgICB9LFxuICAgICAgICByZXBvcnRlcjogamFlZ2VyRW5kcG9pbnQgPyB7XG4gICAgICAgICAgICBjb2xsZWN0b3JFbmRwb2ludDogamFlZ2VyRW5kcG9pbnQsXG4gICAgICAgICAgICBsb2dTcGFuczogdHJ1ZSxcbiAgICAgICAgfSA6IHt9LFxuICAgIH07XG4gICAgY29uc3Qgb3B0aW9ucyA9IHtcbiAgICAgICAgbG9nZ2VyOiB7XG4gICAgICAgICAgICBpbmZvKG1zZykge1xuICAgICAgICAgICAgICAgIGNvbnNvbGUubG9nKCdJTkZPICcsIG1zZyk7XG4gICAgICAgICAgICB9LFxuICAgICAgICAgICAgZXJyb3IobXNnKSB7XG4gICAgICAgICAgICAgICAgY29uc29sZS5sb2coJ0VSUk9SJywgbXNnKTtcbiAgICAgICAgICAgIH0sXG4gICAgICAgIH0sXG4gICAgfTtcbiAgICByZXR1cm4gaW5pdEphZWdlclRyYWNlcihjb25maWcsIG9wdGlvbnMpO1xufVxuXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBUT05Db25maWdNb2R1bGUgZXh0ZW5kcyBUT05Nb2R1bGUge1xuICAgIGRhdGE6ID9UT05Db25maWdEYXRhO1xuICAgIHRyYWNlcjogVHJhY2VyO1xuXG5cbiAgICBzZXREYXRhKGRhdGE6IFRPTkNvbmZpZ0RhdGEpIHtcbiAgICAgICAgdGhpcy5kYXRhID0gZGF0YSB8fCB7XG4gICAgICAgICAgICBzZXJ2ZXJzOiBbZGVmYXVsdFNlcnZlcl0sXG4gICAgICAgIH07XG4gICAgICAgIGNvbnN0IHNlcnZlciA9IHJlc29sdmVTZXJ2ZXIoZGF0YS5zZXJ2ZXJzWzBdLCBkZWZhdWx0U2VydmVyKTtcbiAgICAgICAgdGhpcy5fcmVxdWVzdHNVcmwgPSByZXNvbHZlU2VydmVyKGRhdGEucmVxdWVzdHNTZXJ2ZXIsIFVSTFBhcnRzLmFwcGVuZFBhdGgoc2VydmVyLCAnL3RvcGljcy9yZXF1ZXN0cycpKTtcbiAgICAgICAgdGhpcy5fcXVlcmllc0h0dHBVcmwgPSByZXNvbHZlU2VydmVyKGRhdGEucXVlcmllc1NlcnZlciwgVVJMUGFydHMuYXBwZW5kUGF0aChzZXJ2ZXIsICcvZ3JhcGhxbCcpKTtcbiAgICAgICAgY29uc3QgcXVlcmllc1dzU2VydmVyID0gdGhpcy5fcXVlcmllc0h0dHBVcmwuc3RhcnRzV2l0aCgnaHR0cHM6Ly8nKVxuICAgICAgICAgICAgPyByZXBsYWNlUHJlZml4KHRoaXMuX3F1ZXJpZXNIdHRwVXJsLCAnaHR0cHM6Ly8nLCAnd3NzOi8vJylcbiAgICAgICAgICAgIDogcmVwbGFjZVByZWZpeCh0aGlzLl9xdWVyaWVzSHR0cFVybCwgJ2h0dHA6Ly8nLCAnd3M6Ly8nKTtcblxuICAgICAgICB0aGlzLl9xdWVyaWVzV3NVcmwgPSByZXNvbHZlU2VydmVyKGRhdGEucXVlcmllc1dzU2VydmVyLCBxdWVyaWVzV3NTZXJ2ZXIpO1xuICAgICAgICB0aGlzLnRyYWNlciA9IGRhdGEuamFlZ2VyRW5kcG9pbnRcbiAgICAgICAgICAgID8gaW5pdFRyYWNlcigndG9uLWNsaWVudC1qcycsIGRhdGEuamFlZ2VyRW5kcG9pbnQpXG4gICAgICAgICAgICA6IG5vb3BUcmFjZXI7XG4gICAgfVxuXG4gICAgbG9nKC4uLmFyZ3M6IGFueVtdKSB7XG4gICAgICAgIGNvbnN0IHByb2ZpbGUgPSAodGhpcy5fcHJvZmlsZVN0YXJ0IHx8IDApICE9IDA7XG4gICAgICAgIGlmIChwcm9maWxlKSB7XG4gICAgICAgICAgICBjb25zdCBjdXJyZW50ID0gRGF0ZS5ub3coKSAvIDEwMDA7XG4gICAgICAgICAgICBjb25zdCB0aW1lU3RyaW5nID0gYCR7U3RyaW5nKGN1cnJlbnQudG9GaXhlZCgzKSl9ICR7XG4gICAgICAgICAgICAgICAgU3RyaW5nKChjdXJyZW50IC0gdGhpcy5fcHJvZmlsZVN0YXJ0KS50b0ZpeGVkKDMpKX0gJHtcbiAgICAgICAgICAgICAgICBTdHJpbmcoKGN1cnJlbnQgLSB0aGlzLl9wcm9maWxlUHJldikudG9GaXhlZCgzKSl9YDtcbiAgICAgICAgICAgIGlmICh0aGlzLl9sb2dWZXJib3NlKSB7XG4gICAgICAgICAgICAgICAgY29uc29sZS5sb2coYFske3RpbWVTdHJpbmd9XVxcbmAsIC4uLmFyZ3MpO1xuICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgICBjb25zb2xlLmxvZyhgWyR7dGltZVN0cmluZ31dXFxuYCwgYXJnc1swXSk7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICB0aGlzLl9wcm9maWxlUHJldiA9IGN1cnJlbnQ7XG4gICAgICAgIH0gZWxzZSBpZiAodGhpcy5fbG9nVmVyYm9zZSkge1xuICAgICAgICAgICAgY29uc29sZS5sb2coYFske0RhdGUubm93KCkgLyAxMDAwfV1gLCAuLi5hcmdzKTtcbiAgICAgICAgfVxuICAgIH1cblxuICAgIHN0YXJ0UHJvZmlsZSgpIHtcbiAgICAgICAgdGhpcy5fcHJvZmlsZVN0YXJ0ID0gRGF0ZS5ub3coKSAvIDEwMDA7XG4gICAgICAgIHRoaXMuX3Byb2ZpbGVQcmV2ID0gdGhpcy5fcHJvZmlsZVN0YXJ0O1xuICAgIH1cblxuICAgIHN0b3BQcm9maWxlKCkge1xuICAgICAgICB0aGlzLl9wcm9maWxlU3RhcnQgPSB0aGlzLl9wcm9maWxlUHJldiA9IDA7XG4gICAgfVxuXG4gICAgcmVxdWVzdHNVcmwoKTogc3RyaW5nIHtcbiAgICAgICAgcmV0dXJuIHRoaXMuX3JlcXVlc3RzVXJsO1xuICAgIH1cblxuICAgIHF1ZXJpZXNIdHRwVXJsKCk6IHN0cmluZyB7XG4gICAgICAgIHJldHVybiB0aGlzLl9xdWVyaWVzSHR0cFVybDtcbiAgICB9XG5cbiAgICBxdWVyaWVzV3NVcmwoKTogc3RyaW5nIHtcbiAgICAgICAgcmV0dXJuIHRoaXMuX3F1ZXJpZXNXc1VybDtcbiAgICB9XG5cbiAgICBhc3luYyBnZXRWZXJzaW9uKCk6IFByb21pc2U8c3RyaW5nPiB7XG4gICAgICAgIHJldHVybiB0aGlzLnJlcXVlc3RDb3JlKCd2ZXJzaW9uJyk7XG4gICAgfVxuXG5cbiAgICBhc3luYyBzZXR1cCgpOiBQcm9taXNlPHZvaWQ+IHtcbiAgICAgICAgaWYgKHRoaXMuZGF0YSkge1xuICAgICAgICAgICAgYXdhaXQgdGhpcy5yZXF1ZXN0Q29yZSgnc2V0dXAnLCB0aGlzLmRhdGEpO1xuICAgICAgICB9XG4gICAgICAgIHRoaXMuX2xvZ1ZlcmJvc2UgPSAodGhpcy5kYXRhICYmIHRoaXMuZGF0YS5sb2dfdmVyYm9zZSkgfHwgZmFsc2U7XG4gICAgICAgIGlmICh0aGlzLl9sb2dWZXJib3NlKSB7XG4gICAgICAgICAgICB0aGlzLnN0YXJ0UHJvZmlsZSgpO1xuICAgICAgICB9XG4gICAgfVxuXG4gICAgX2xvZ1ZlcmJvc2U6IGJvb2xlYW47XG5cbiAgICBfcmVxdWVzdHNVcmw6IHN0cmluZztcblxuICAgIF9xdWVyaWVzSHR0cFVybDogc3RyaW5nO1xuXG4gICAgX3F1ZXJpZXNXc1VybDogc3RyaW5nO1xuXG4gICAgX3Byb2ZpbGVTdGFydDogbnVtYmVyO1xuXG4gICAgX3Byb2ZpbGVQcmV2OiBudW1iZXI7XG59XG5cblRPTkNvbmZpZ01vZHVsZS5tb2R1bGVOYW1lID0gJ1RPTkNvbmZpZ01vZHVsZSc7XG4iXX0=