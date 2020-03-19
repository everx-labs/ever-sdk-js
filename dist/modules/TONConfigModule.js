"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = exports.URLParts = void 0;

var _regenerator = _interopRequireDefault(require("@babel/runtime/regenerator"));

var _asyncToGenerator2 = _interopRequireDefault(require("@babel/runtime/helpers/asyncToGenerator"));

var _possibleConstructorReturn2 = _interopRequireDefault(require("@babel/runtime/helpers/possibleConstructorReturn"));

var _getPrototypeOf2 = _interopRequireDefault(require("@babel/runtime/helpers/getPrototypeOf"));

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
var MAX_MESSAGE_TIMEOUT = 5 * 60000;
var DEFAULT_MESSAGE_RETRIES_COUNT = 5;
var DEFAULT_MESSAGE_EXPIRATION_TIMEOUT = 10000;
var DEFAULT_MESSAGE_EXPIRATION_GROW_FACTOR = 1.5;
var DEFAULT_MESSAGE_PROCESSING_TIMEOUT = 40000;
var DEFAULT_MESSAGE_PROCESSING_GROW_FACTOR = 1.5;
var DEFAULT_WAIT_FOR_TIMEOUT = 40000;

var URLParts =
/*#__PURE__*/
function () {
  (0, _createClass2["default"])(URLParts, [{
    key: "fixProtocol",
    value: function fixProtocol(fix) {
      this.protocol = fix(this.protocol);
      return this;
    }
  }, {
    key: "fixHost",
    value: function fixHost(fix) {
      this.host = fix(this.host);
      return this;
    }
  }, {
    key: "fixPath",
    value: function fixPath(fix) {
      this.path = fix(this.path);
      return this;
    }
  }, {
    key: "fixQuery",
    value: function fixQuery(fix) {
      this.query = fix(this.query);
      return this;
    }
  }], [{
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
      return URLParts.parse(url).fixProtocol(function (x) {
        return x || baseParts.protocol;
      }).fixHost(function (x) {
        return x || baseParts.host;
      }).toString();
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

function resolveTimeout(timeout, defaultTimeout, growFactor, defaultGrowFactor, retryIndex) {
  var resolvedTimeout = timeout === 0 ? 0 : timeout || defaultTimeout;
  var resolvedGrowFactor = growFactor || defaultGrowFactor;
  return Math.min(MAX_MESSAGE_TIMEOUT, resolvedTimeout * Math.pow(resolvedGrowFactor, retryIndex || 0));
}

var defaultServer = 'http://localhost';

var TONConfigModule =
/*#__PURE__*/
function (_TONModule) {
  (0, _inherits2["default"])(TONConfigModule, _TONModule);

  function TONConfigModule(context) {
    var _this;

    (0, _classCallCheck2["default"])(this, TONConfigModule);
    _this = (0, _possibleConstructorReturn2["default"])(this, (0, _getPrototypeOf2["default"])(TONConfigModule).call(this, context));
    (0, _defineProperty2["default"])((0, _assertThisInitialized2["default"])(_this), "data", void 0);
    (0, _defineProperty2["default"])((0, _assertThisInitialized2["default"])(_this), "tracer", void 0);
    (0, _defineProperty2["default"])((0, _assertThisInitialized2["default"])(_this), "_logVerbose", void 0);
    (0, _defineProperty2["default"])((0, _assertThisInitialized2["default"])(_this), "_profileStart", void 0);
    (0, _defineProperty2["default"])((0, _assertThisInitialized2["default"])(_this), "_profilePrev", void 0);
    _this.data = {
      servers: [defaultServer]
    };
    return _this;
  }

  (0, _createClass2["default"])(TONConfigModule, [{
    key: "setData",
    value: function setData(data) {
      this.data = data || this.data;

      if (this.data.servers.length === 0) {
        this.data.servers.push(defaultServer);
      }

      this.tracer = data.tracer || _noop.tracer;
    }
  }, {
    key: "messageRetriesCount",
    value: function messageRetriesCount() {
      return this.data.messageRetriesCount || DEFAULT_MESSAGE_RETRIES_COUNT;
    }
  }, {
    key: "messageExpirationTimeout",
    value: function messageExpirationTimeout(retryIndex) {
      return resolveTimeout(this.data.messageExpirationTimeout, DEFAULT_MESSAGE_EXPIRATION_TIMEOUT, this.data.messageExpirationTimeoutGrowFactor, DEFAULT_MESSAGE_EXPIRATION_GROW_FACTOR, retryIndex);
    }
  }, {
    key: "messageProcessingTimeout",
    value: function messageProcessingTimeout(retryIndex) {
      return resolveTimeout(this.data.messageProcessingTimeout, DEFAULT_MESSAGE_PROCESSING_TIMEOUT, this.data.messageProcessingTimeoutGrowFactor, DEFAULT_MESSAGE_PROCESSING_GROW_FACTOR, retryIndex);
    }
  }, {
    key: "waitForTimeout",
    value: function waitForTimeout() {
      return this.data.waitForTimeout || DEFAULT_WAIT_FOR_TIMEOUT;
    }
  }, {
    key: "log",
    value: function log() {
      var profile = (this._profileStart || 0) !== 0;

      for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
        args[_key] = arguments[_key];
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
                this._logVerbose = this.data.log_verbose || false;

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy9tb2R1bGVzL1RPTkNvbmZpZ01vZHVsZS5qcyJdLCJuYW1lcyI6WyJNQVhfTUVTU0FHRV9USU1FT1VUIiwiREVGQVVMVF9NRVNTQUdFX1JFVFJJRVNfQ09VTlQiLCJERUZBVUxUX01FU1NBR0VfRVhQSVJBVElPTl9USU1FT1VUIiwiREVGQVVMVF9NRVNTQUdFX0VYUElSQVRJT05fR1JPV19GQUNUT1IiLCJERUZBVUxUX01FU1NBR0VfUFJPQ0VTU0lOR19USU1FT1VUIiwiREVGQVVMVF9NRVNTQUdFX1BST0NFU1NJTkdfR1JPV19GQUNUT1IiLCJERUZBVUxUX1dBSVRfRk9SX1RJTUVPVVQiLCJVUkxQYXJ0cyIsImZpeCIsInByb3RvY29sIiwiaG9zdCIsInBhdGgiLCJxdWVyeSIsInVybCIsInByb3RvY29sU2VwYXJhdG9yUG9zIiwiaW5kZXhPZiIsInByb3RvY29sRW5kIiwicXVlc3Rpb25Qb3MiLCJxdWVyeVN0YXJ0IiwibGVuZ3RoIiwicGF0aEVuZCIsInBhdGhTZXBhcmF0b3JQb3MiLCJwYXRoU3RhcnQiLCJzdWJzdHJpbmciLCJiYXNlVXJsIiwiYmFzZVBhcnRzIiwicGFyc2UiLCJmaXhQcm90b2NvbCIsIngiLCJmaXhIb3N0IiwidG9TdHJpbmciLCJyZXBsYWNlIiwic3RhcnRzV2l0aCIsInJlc29sdmVUaW1lb3V0IiwidGltZW91dCIsImRlZmF1bHRUaW1lb3V0IiwiZ3Jvd0ZhY3RvciIsImRlZmF1bHRHcm93RmFjdG9yIiwicmV0cnlJbmRleCIsInJlc29sdmVkVGltZW91dCIsInJlc29sdmVkR3Jvd0ZhY3RvciIsIk1hdGgiLCJtaW4iLCJwb3ciLCJkZWZhdWx0U2VydmVyIiwiVE9OQ29uZmlnTW9kdWxlIiwiY29udGV4dCIsImRhdGEiLCJzZXJ2ZXJzIiwicHVzaCIsInRyYWNlciIsIm5vb3BUcmFjZXIiLCJtZXNzYWdlUmV0cmllc0NvdW50IiwibWVzc2FnZUV4cGlyYXRpb25UaW1lb3V0IiwibWVzc2FnZUV4cGlyYXRpb25UaW1lb3V0R3Jvd0ZhY3RvciIsIm1lc3NhZ2VQcm9jZXNzaW5nVGltZW91dCIsIm1lc3NhZ2VQcm9jZXNzaW5nVGltZW91dEdyb3dGYWN0b3IiLCJ3YWl0Rm9yVGltZW91dCIsInByb2ZpbGUiLCJfcHJvZmlsZVN0YXJ0IiwiYXJncyIsImN1cnJlbnQiLCJEYXRlIiwibm93IiwidGltZVN0cmluZyIsIlN0cmluZyIsInRvRml4ZWQiLCJfcHJvZmlsZVByZXYiLCJfbG9nVmVyYm9zZSIsImNvbnNvbGUiLCJsb2ciLCJyZXF1ZXN0Q29yZSIsImNvcmVDb25maWciLCJPYmplY3QiLCJhc3NpZ24iLCJsb2dfdmVyYm9zZSIsInN0YXJ0UHJvZmlsZSIsIlRPTk1vZHVsZSIsIm1vZHVsZU5hbWUiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQW1CQTs7QUFDQTs7QUFDQTs7QUFyQkE7Ozs7Ozs7Ozs7Ozs7OztBQXVCQSxJQUFNQSxtQkFBbUIsR0FBRyxJQUFJLEtBQWhDO0FBQ0EsSUFBTUMsNkJBQTZCLEdBQUcsQ0FBdEM7QUFDQSxJQUFNQyxrQ0FBa0MsR0FBRyxLQUEzQztBQUNBLElBQU1DLHNDQUFzQyxHQUFHLEdBQS9DO0FBQ0EsSUFBTUMsa0NBQWtDLEdBQUcsS0FBM0M7QUFDQSxJQUFNQyxzQ0FBc0MsR0FBRyxHQUEvQztBQUNBLElBQU1DLHdCQUF3QixHQUFHLEtBQWpDOztJQUVhQyxROzs7OztnQ0E0QkdDLEcsRUFBc0M7QUFDOUMsV0FBS0MsUUFBTCxHQUFnQkQsR0FBRyxDQUFDLEtBQUtDLFFBQU4sQ0FBbkI7QUFDQSxhQUFPLElBQVA7QUFDSDs7OzRCQUVPRCxHLEVBQXNDO0FBQzFDLFdBQUtFLElBQUwsR0FBWUYsR0FBRyxDQUFDLEtBQUtFLElBQU4sQ0FBZjtBQUNBLGFBQU8sSUFBUDtBQUNIOzs7NEJBRU9GLEcsRUFBc0M7QUFDMUMsV0FBS0csSUFBTCxHQUFZSCxHQUFHLENBQUMsS0FBS0csSUFBTixDQUFmO0FBQ0EsYUFBTyxJQUFQO0FBQ0g7Ozs2QkFFUUgs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aUNKLElBQUksQ0FBQyxDQUFELENBQXJDO0FBQ0g7O0FBQ0QsYUFBS08sWUFBTCxHQUFvQk4sT0FBcEI7QUFDSCxPQVhELE1BV08sSUFBSSxLQUFLTyxXQUFULEVBQXNCO0FBQUE7O0FBQ3pCLHFCQUFBQyxPQUFPLEVBQUNDLEdBQVIsOEJBQWdCUixJQUFJLENBQUNDLEdBQUwsS0FBYSxJQUE3QixlQUF5Q0gsSUFBekM7QUFDSDtBQUNKOzs7bUNBRWM7QUFDWCxXQUFLRCxhQUFMLEdBQXFCRyxJQUFJLENBQUNDLEdBQUwsS0FBYSxJQUFsQztBQUNBLFdBQUtJLFlBQUwsR0FBb0IsS0FBS1IsYUFBekI7QUFDSDs7O2tDQUVhO0FBQ1YsV0FBS0EsYUFBTCxHQUFxQixLQUFLUSxZQUFMLEdBQW9CLENBQXpDO0FBQ0g7Ozs7Ozs7Ozs7O2lEQUdVLEtBQUtJLFdBQUwsQ0FBaUIsU0FBakIsQzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O3FCQUtILEtBQUt4QixJOzs7OztBQUNDeUIsZ0JBQUFBLFUsR0FBYUMsTUFBTSxDQUFDQyxNQUFQLENBQWMsRUFBZCxFQUFrQixLQUFLM0IsSUFBdkIsQztBQUNuQix1QkFBT3lCLFVBQVUsQ0FBQ3RCLE1BQWxCOzt1QkFDTSxLQUFLcUIsV0FBTCxDQUFpQixPQUFqQixFQUEwQkMsVUFBMUIsQzs7O0FBRVYscUJBQUtKLFdBQUwsR0FBbUIsS0FBS3JCLElBQUwsQ0FBVTRCLFdBQVYsSUFBeUIsS0FBNUM7O0FBQ0Esb0JBQUksS0FBS1AsV0FBVCxFQUFzQjtBQUNsQix1QkFBS1EsWUFBTDtBQUNIOzs7Ozs7Ozs7Ozs7Ozs7Ozs7RUF6Rm9DQyxxQjs7O0FBbUc3Q2hDLGVBQWUsQ0FBQ2lDLFVBQWhCLEdBQTZCLGlCQUE3QiIsInNvdXJjZXNDb250ZW50IjpbIi8qXG4gKiBDb3B5cmlnaHQgMjAxOC0yMDIwIFRPTiBERVYgU09MVVRJT05TIExURC5cbiAqXG4gKiBMaWNlbnNlZCB1bmRlciB0aGUgU09GVFdBUkUgRVZBTFVBVElPTiBMaWNlbnNlICh0aGUgXCJMaWNlbnNlXCIpOyB5b3UgbWF5IG5vdCB1c2VcbiAqIHRoaXMgZmlsZSBleGNlcHQgaW4gY29tcGxpYW5jZSB3aXRoIHRoZSBMaWNlbnNlLiAgWW91IG1heSBvYnRhaW4gYSBjb3B5IG9mIHRoZVxuICogTGljZW5zZSBhdDpcbiAqXG4gKiBodHRwOi8vd3d3LnRvbi5kZXYvbGljZW5zZXNcbiAqXG4gKiBVbmxlc3MgcmVxdWlyZWQgYnkgYXBwbGljYWJsZSBsYXcgb3IgYWdyZWVkIHRvIGluIHdyaXRpbmcsIHNvZnR3YXJlXG4gKiBkaXN0cmlidXRlZCB1bmRlciB0aGUgTGljZW5zZSBpcyBkaXN0cmlidXRlZCBvbiBhbiBcIkFTIElTXCIgQkFTSVMsXG4gKiBXSVRIT1VUIFdBUlJBTlRJRVMgT1IgQ09ORElUSU9OUyBPRiBBTlkgS0lORCwgZWl0aGVyIGV4cHJlc3Mgb3IgaW1wbGllZC5cbiAqIFNlZSB0aGUgTGljZW5zZSBmb3IgdGhlIHNwZWNpZmljIFRPTiBERVYgc29mdHdhcmUgZ292ZXJuaW5nIHBlcm1pc3Npb25zIGFuZFxuICogbGltaXRhdGlvbnMgdW5kZXIgdGhlIExpY2Vuc2UuXG4gKi9cblxuLy8gQGZsb3dcbmltcG9ydCB0eXBlIHsgVE9OQ29uZmlnRGF0YSB9IGZyb20gXCIuLi8uLi90eXBlc1wiO1xuaW1wb3J0IHR5cGUgeyBUT05Nb2R1bGVDb250ZXh0IH0gZnJvbSBcIi4uL1RPTk1vZHVsZVwiO1xuaW1wb3J0IHsgVE9OTW9kdWxlIH0gZnJvbSAnLi4vVE9OTW9kdWxlJztcbmltcG9ydCB7IFRyYWNlciB9IGZyb20gJ29wZW50cmFjaW5nJztcbmltcG9ydCB7IHRyYWNlciBhcyBub29wVHJhY2VyIH0gZnJvbSBcIm9wZW50cmFjaW5nL2xpYi9ub29wXCI7XG5cbmNvbnN0IE1BWF9NRVNTQUdFX1RJTUVPVVQgPSA1ICogNjAwMDA7XG5jb25zdCBERUZBVUxUX01FU1NBR0VfUkVUUklFU19DT1VOVCA9IDU7XG5jb25zdCBERUZBVUxUX01FU1NBR0VfRVhQSVJBVElPTl9USU1FT1VUID0gMTAwMDA7XG5jb25zdCBERUZBVUxUX01FU1NBR0VfRVhQSVJBVElPTl9HUk9XX0ZBQ1RPUiA9IDEuNTtcbmNvbnN0IERFRkFVTFRfTUVTU0FHRV9QUk9DRVNTSU5HX1RJTUVPVVQgPSA0MDAwMDtcbmNvbnN0IERFRkFVTFRfTUVTU0FHRV9QUk9DRVNTSU5HX0dST1dfRkFDVE9SID0gMS41O1xuY29uc3QgREVGQVVMVF9XQUlUX0ZPUl9USU1FT1VUID0gNDAwMDA7XG5cbmV4cG9ydCBjbGFzcyBVUkxQYXJ0cyB7XG4gICAgc3RhdGljIHBhcnNlKHVybDogc3RyaW5nKTogVVJMUGFydHMge1xuICAgICAgICBjb25zdCBwcm90b2NvbFNlcGFyYXRvclBvcyA9IHVybC5pbmRleE9mKCc6Ly8nKTtcbiAgICAgICAgY29uc3QgcHJvdG9jb2xFbmQgPSBwcm90b2NvbFNlcGFyYXRvclBvcyA+PSAwID8gcHJvdG9jb2xTZXBhcmF0b3JQb3MgKyAzIDogMDtcbiAgICAgICAgY29uc3QgcXVlc3Rpb25Qb3MgPSB1cmwuaW5kZXhPZignPycsIHByb3RvY29sRW5kKTtcbiAgICAgICAgY29uc3QgcXVlcnlTdGFydCA9IHF1ZXN0aW9uUG9zID49IDAgPyBxdWVzdGlvblBvcyArIDEgOiB1cmwubGVuZ3RoO1xuICAgICAgICBjb25zdCBwYXRoRW5kID0gcXVlc3Rpb25Qb3MgPj0gMCA/IHF1ZXN0aW9uUG9zIDogdXJsLmxlbmd0aDtcbiAgICAgICAgY29uc3QgcGF0aFNlcGFyYXRvclBvcyA9IHVybC5pbmRleE9mKCcvJywgcHJvdG9jb2xFbmQpO1xuICAgICAgICAvLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgbm8tbmVzdGVkLXRlcm5hcnlcbiAgICAgICAgY29uc3QgcGF0aFN0YXJ0ID0gcGF0aFNlcGFyYXRvclBvcyA+PSAwXG4gICAgICAgICAgICA/IChwYXRoU2VwYXJhdG9yUG9zIDwgcGF0aEVuZCA/IHBhdGhTZXBhcmF0b3JQb3MgOiBwYXRoRW5kKVxuICAgICAgICAgICAgOiAocXVlc3Rpb25Qb3MgPj0gMCA/IHF1ZXN0aW9uUG9zIDogdXJsLmxlbmd0aCk7XG4gICAgICAgIHJldHVybiBuZXcgVVJMUGFydHMoXG4gICAgICAgICAgICB1cmwuc3Vic3RyaW5nKDAsIHByb3RvY29sRW5kKSxcbiAgICAgICAgICAgIHVybC5zdWJzdHJpbmcocHJvdG9jb2xFbmQsIHBhdGhTdGFydCksXG4gICAgICAgICAgICB1cmwuc3Vic3RyaW5nKHBhdGhTdGFydCwgcGF0aEVuZCksXG4gICAgICAgICAgICB1cmwuc3Vic3RyaW5nKHF1ZXJ5U3RhcnQpLFxuICAgICAgICApO1xuICAgIH1cblxuICAgIHN0YXRpYyByZXNvbHZlVXJsKGJhc2VVcmw6IHN0cmluZywgdXJsOiBzdHJpbmcpOiBzdHJpbmcge1xuICAgICAgICBjb25zdCBiYXNlUGFydHMgPSBVUkxQYXJ0cy5wYXJzZShiYXNlVXJsKTtcbiAgICAgICAgcmV0dXJuIFVSTFBhcnRzLnBhcnNlKHVybClcbiAgICAgICAgICAgIC5maXhQcm90b2NvbCh4ID0+IHggfHwgYmFzZVBhcnRzLnByb3RvY29sKVxuICAgICAgICAgICAgLmZpeEhvc3QoeCA9PiB4IHx8IGJhc2VQYXJ0cy5ob3N0KVxuICAgICAgICAgICAgLnRvU3RyaW5nKCk7XG4gICAgfVxuXG4gICAgZml4UHJvdG9jb2woZml4OiAocDogc3RyaW5nKSA9PiBzdHJpbmcpOiBVUkxQYXJ0cyB7XG4gICAgICAgIHRoaXMucHJvdG9jb2wgPSBmaXgodGhpcy5wcm90b2NvbCk7XG4gICAgICAgIHJldHVybiB0aGlzO1xuICAgIH1cblxuICAgIGZpeEhvc3QoZml4OiAocDogc3RyaW5nKSA9PiBzdHJpbmcpOiBVUkxQYXJ0cyB7XG4gICAgICAgIHRoaXMuaG9zdCA9IGZpeCh0aGlzLmhvc3QpO1xuICAgICAgICByZXR1cm4gdGhpcztcbiAgICB9XG5cbiAgICBmaXhQYXRoKGZpeDogKHA6IHN0cmluZykgPT4gc3RyaW5nKTogVVJMUGFydHMge1xuICAgICAgICB0aGlzLnBhdGggPSBmaXgodGhpcy5wYXRoKTtcbiAgICAgICAgcmV0dXJuIHRoaXM7XG4gICAgfVxuXG4gICAgZml4UXVlcnkoZml4OiAocTogc3RyaW5nKSA9PiBzdHJpbmcpOiBVUkxQYXJ0cyB7XG4gICAgICAgIHRoaXMucXVlcnkgPSBmaXgodGhpcy5xdWVyeSk7XG4gICAgICAgIHJldHVybiB0aGlzO1xuICAgIH1cblxuXG4gICAgcHJvdG9jb2w6IHN0cmluZztcblxuICAgIGhvc3Q6IHN0cmluZztcblxuICAgIHBhdGg6IHN0cmluZztcblxuICAgIHF1ZXJ5OiBzdHJpbmc7XG5cbiAgICBjb25zdHJ1Y3Rvcihwcm90b2NvbDogc3RyaW5nLCBob3N0OiBzdHJpbmcsIHBhdGg6IHN0cmluZywgcXVlcnk6IHN0cmluZykge1xuICAgICAgICB0aGlzLnByb3RvY29sID0gcHJvdG9jb2w7XG4gICAgICAgIHRoaXMuaG9zdCA9IGhvc3Q7XG4gICAgICAgIHRoaXMucGF0aCA9IHBhdGg7XG4gICAgICAgIHRoaXMucXVlcnkgPSBxdWVyeTtcbiAgICB9XG5cblxuICAgIHRvU3RyaW5nKCk6IHN0cmluZyB7XG4gICAgICAgIGxldCB7IHBhdGggfSA9IHRoaXM7XG4gICAgICAgIHdoaWxlIChwYXRoLmluZGV4T2YoJy8vJykgPj0gMCkge1xuICAgICAgICAgICAgcGF0aCA9IHBhdGgucmVwbGFjZSgnLy8nLCAnLycpO1xuICAgICAgICB9XG4gICAgICAgIGlmIChwYXRoICE9PSAnJyAmJiAhcGF0aC5zdGFydHNXaXRoKCcvJykpIHtcbiAgICAgICAgICAgIHBhdGggPSBgLyR7cGF0aH1gO1xuICAgICAgICB9XG4gICAgICAgIHJldHVybiBgJHt0aGlzLnByb3RvY29sfSR7dGhpcy5ob3N0fSR7cGF0aH0ke3RoaXMucXVlcnkgIT09ICcnID8gJz8nIDogJyd9JHt0aGlzLnF1ZXJ5fWA7XG4gICAgfVxufVxuXG5mdW5jdGlvbiByZXNvbHZlVGltZW91dChcbiAgICB0aW1lb3V0PzogbnVtYmVyLFxuICAgIGRlZmF1bHRUaW1lb3V0OiBudW1iZXIsXG4gICAgZ3Jvd0ZhY3Rvcj86IG51bWJlcixcbiAgICBkZWZhdWx0R3Jvd0ZhY3RvcjogbnVtYmVyLFxuICAgIHJldHJ5SW5kZXg/OiBudW1iZXIsXG4pOiBudW1iZXIge1xuICAgIGNvbnN0IHJlc29sdmVkVGltZW91dCA9IHRpbWVvdXQgPT09IDAgPyAwIDogKHRpbWVvdXQgfHwgZGVmYXVsdFRpbWVvdXQpO1xuICAgIGNvbnN0IHJlc29sdmVkR3Jvd0ZhY3RvciA9IGdyb3dGYWN0b3IgfHwgZGVmYXVsdEdyb3dGYWN0b3I7XG4gICAgcmV0dXJuIE1hdGgubWluKFxuICAgICAgICBNQVhfTUVTU0FHRV9USU1FT1VULFxuICAgICAgICByZXNvbHZlZFRpbWVvdXQgKiBNYXRoLnBvdyhyZXNvbHZlZEdyb3dGYWN0b3IsIHJldHJ5SW5kZXggfHwgMClcbiAgICApO1xufVxuXG5jb25zdCBkZWZhdWx0U2VydmVyID0gJ2h0dHA6Ly9sb2NhbGhvc3QnO1xuXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBUT05Db25maWdNb2R1bGUgZXh0ZW5kcyBUT05Nb2R1bGUge1xuICAgIGRhdGE6IFRPTkNvbmZpZ0RhdGE7XG4gICAgdHJhY2VyOiBUcmFjZXI7XG5cbiAgICBjb25zdHJ1Y3Rvcihjb250ZXh0OiBUT05Nb2R1bGVDb250ZXh0KSB7XG4gICAgICAgIHN1cGVyKGNvbnRleHQpO1xuICAgICAgICB0aGlzLmRhdGEgPSB7XG4gICAgICAgICAgICBzZXJ2ZXJzOiBbZGVmYXVsdFNlcnZlcl0sXG4gICAgICAgIH1cbiAgICB9XG5cbiAgICBzZXREYXRhKGRhdGE6IFRPTkNvbmZpZ0RhdGEpIHtcbiAgICAgICAgdGhpcy5kYXRhID0gZGF0YSB8fCB0aGlzLmRhdGE7XG4gICAgICAgIGlmICh0aGlzLmRhdGEuc2VydmVycy5sZW5ndGggPT09IDApIHtcbiAgICAgICAgICAgIHRoaXMuZGF0YS5zZXJ2ZXJzLnB1c2goZGVmYXVsdFNlcnZlcik7XG4gICAgICAgIH1cbiAgICAgICAgdGhpcy50cmFjZXIgPSBkYXRhLnRyYWNlciB8fCBub29wVHJhY2VyO1xuICAgIH1cblxuXG4gICAgbWVzc2FnZVJldHJpZXNDb3VudCgpOiBudW1iZXIge1xuICAgICAgICByZXR1cm4gdGhpcy5kYXRhLm1lc3NhZ2VSZXRyaWVzQ291bnQgfHwgREVGQVVMVF9NRVNTQUdFX1JFVFJJRVNfQ09VTlQ7XG4gICAgfVxuXG4gICAgbWVzc2FnZUV4cGlyYXRpb25UaW1lb3V0KHJldHJ5SW5kZXg/OiBudW1iZXIpOiBudW1iZXIge1xuICAgICAgICByZXR1cm4gcmVzb2x2ZVRpbWVvdXQoXG4gICAgICAgICAgICB0aGlzLmRhdGEubWVzc2FnZUV4cGlyYXRpb25UaW1lb3V0LFxuICAgICAgICAgICAgREVGQVVMVF9NRVNTQUdFX0VYUElSQVRJT05fVElNRU9VVCxcbiAgICAgICAgICAgIHRoaXMuZGF0YS5tZXNzYWdlRXhwaXJhdGlvblRpbWVvdXRHcm93RmFjdG9yLFxuICAgICAgICAgICAgREVGQVVMVF9NRVNTQUdFX0VYUElSQVRJT05fR1JPV19GQUNUT1IsXG4gICAgICAgICAgICByZXRyeUluZGV4LFxuICAgICAgICApO1xuICAgIH1cblxuICAgIG1lc3NhZ2VQcm9jZXNzaW5nVGltZW91dChyZXRyeUluZGV4PzogbnVtYmVyKTogbnVtYmVyIHtcbiAgICAgICAgcmV0dXJuIHJlc29sdmVUaW1lb3V0KFxuICAgICAgICAgICAgdGhpcy5kYXRhLm1lc3NhZ2VQcm9jZXNzaW5nVGltZW91dCxcbiAgICAgICAgICAgIERFRkFVTFRfTUVTU0FHRV9QUk9DRVNTSU5HX1RJTUVPVVQsXG4gICAgICAgICAgICB0aGlzLmRhdGEubWVzc2FnZVByb2Nlc3NpbmdUaW1lb3V0R3Jvd0ZhY3RvcixcbiAgICAgICAgICAgIERFRkFVTFRfTUVTU0FHRV9QUk9DRVNTSU5HX0dST1dfRkFDVE9SLFxuICAgICAgICAgICAgcmV0cnlJbmRleCxcbiAgICAgICAgKTtcbiAgICB9XG5cbiAgICB3YWl0Rm9yVGltZW91dCgpOiBudW1iZXIge1xuICAgICAgICByZXR1cm4gdGhpcy5kYXRhLndhaXRGb3JUaW1lb3V0IHx8IERFRkFVTFRfV0FJVF9GT1JfVElNRU9VVDtcbiAgICB9XG5cbiAgICBsb2coLi4uYXJnczogYW55W10pIHtcbiAgICAgICAgY29uc3QgcHJvZmlsZSA9ICh0aGlzLl9wcm9maWxlU3RhcnQgfHwgMCkgIT09IDA7XG4gICAgICAgIGlmIChwcm9maWxlKSB7XG4gICAgICAgICAgICBjb25zdCBjdXJyZW50ID0gRGF0ZS5ub3coKSAvIDEwMDA7XG4gICAgICAgICAgICBjb25zdCB0aW1lU3RyaW5nID0gYCR7U3RyaW5nKGN1cnJlbnQudG9GaXhlZCgzKSl9ICR7XG4gICAgICAgICAgICAgICAgU3RyaW5nKChjdXJyZW50IC0gdGhpcy5fcHJvZmlsZVN0YXJ0KS50b0ZpeGVkKDMpKX0gJHtcbiAgICAgICAgICAgICAgICBTdHJpbmcoKGN1cnJlbnQgLSB0aGlzLl9wcm9maWxlUHJldikudG9GaXhlZCgzKSl9YDtcbiAgICAgICAgICAgIGlmICh0aGlzLl9sb2dWZXJib3NlKSB7XG4gICAgICAgICAgICAgICAgY29uc29sZS5sb2coYFske3RpbWVTdHJpbmd9XVxcbmAsIC4uLmFyZ3MpO1xuICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgICBjb25zb2xlLmxvZyhgWyR7dGltZVN0cmluZ31dXFxuYCwgYXJnc1swXSk7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICB0aGlzLl9wcm9maWxlUHJldiA9IGN1cnJlbnQ7XG4gICAgICAgIH0gZWxzZSBpZiAodGhpcy5fbG9nVmVyYm9zZSkge1xuICAgICAgICAgICAgY29uc29sZS5sb2coYFske0RhdGUubm93KCkgLyAxMDAwfV1gLCAuLi5hcmdzKTtcbiAgICAgICAgfVxuICAgIH1cblxuICAgIHN0YXJ0UHJvZmlsZSgpIHtcbiAgICAgICAgdGhpcy5fcHJvZmlsZVN0YXJ0ID0gRGF0ZS5ub3coKSAvIDEwMDA7XG4gICAgICAgIHRoaXMuX3Byb2ZpbGVQcmV2ID0gdGhpcy5fcHJvZmlsZVN0YXJ0O1xuICAgIH1cblxuICAgIHN0b3BQcm9maWxlKCkge1xuICAgICAgICB0aGlzLl9wcm9maWxlU3RhcnQgPSB0aGlzLl9wcm9maWxlUHJldiA9IDA7XG4gICAgfVxuXG4gICAgYXN5bmMgZ2V0VmVyc2lvbigpOiBQcm9taXNlPHN0cmluZz4ge1xuICAgICAgICByZXR1cm4gdGhpcy5yZXF1ZXN0Q29yZSgndmVyc2lvbicpO1xuICAgIH1cblxuXG4gICAgYXN5bmMgc2V0dXAoKTogUHJvbWlzZTx2b2lkPiB7XG4gICAgICAgIGlmICh0aGlzLmRhdGEpIHtcbiAgICAgICAgICAgIGNvbnN0IGNvcmVDb25maWcgPSBPYmplY3QuYXNzaWduKHt9LCB0aGlzLmRhdGEpO1xuICAgICAgICAgICAgZGVsZXRlIGNvcmVDb25maWcudHJhY2VyO1xuICAgICAgICAgICAgYXdhaXQgdGhpcy5yZXF1ZXN0Q29yZSgnc2V0dXAnLCBjb3JlQ29uZmlnKTtcbiAgICAgICAgfVxuICAgICAgICB0aGlzLl9sb2dWZXJib3NlID0gdGhpcy5kYXRhLmxvZ192ZXJib3NlIHx8IGZhbHNlO1xuICAgICAgICBpZiAodGhpcy5fbG9nVmVyYm9zZSkge1xuICAgICAgICAgICAgdGhpcy5zdGFydFByb2ZpbGUoKTtcbiAgICAgICAgfVxuICAgIH1cblxuICAgIF9sb2dWZXJib3NlOiBib29sZWFuO1xuXG4gICAgX3Byb2ZpbGVTdGFydDogbnVtYmVyO1xuXG4gICAgX3Byb2ZpbGVQcmV2OiBudW1iZXI7XG59XG5cblRPTkNvbmZpZ01vZHVsZS5tb2R1bGVOYW1lID0gJ1RPTkNvbmZpZ01vZHVsZSc7XG4iXX0=