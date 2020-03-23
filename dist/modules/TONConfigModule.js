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
var DEFAULT_MESSAGE_RETRIES_COUNT = 10;
var DEFAULT_MESSAGE_EXPIRATION_TIMEOUT = 10000;
var DEFAULT_MESSAGE_EXPIRATION_GROW_FACTOR = 1.5;
var DEFAULT_MESSAGE_PROCESSING_TIMEOUT = 40000;
var DEFAULT_MESSAGE_PROCESSING_GROW_FACTOR = 1.5;
var DEFAULT_WAIT_FOR_TIMEOUT = 40000;

var URLParts = /*#__PURE__*/function () {
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

var TONConfigModule = /*#__PURE__*/function (_TONModule) {
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
      var _getVersion = (0, _asyncToGenerator2["default"])( /*#__PURE__*/_regenerator["default"].mark(function _callee() {
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
      var _setup = (0, _asyncToGenerator2["default"])( /*#__PURE__*/_regenerator["default"].mark(function _callee2() {
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy9tb2R1bGVzL1RPTkNvbmZpZ01vZHVsZS5qcyJdLCJuYW1lcyI6WyJNQVhfTUVTU0FHRV9USU1FT1VUIiwiREVGQVVMVF9NRVNTQUdFX1JFVFJJRVNfQ09VTlQiLCJERUZBVUxUX01FU1NBR0VfRVhQSVJBVElPTl9USU1FT1VUIiwiREVGQVVMVF9NRVNTQUdFX0VYUElSQVRJT05fR1JPV19GQUNUT1IiLCJERUZBVUxUX01FU1NBR0VfUFJPQ0VTU0lOR19USU1FT1VUIiwiREVGQVVMVF9NRVNTQUdFX1BST0NFU1NJTkdfR1JPV19GQUNUT1IiLCJERUZBVUxUX1dBSVRfRk9SX1RJTUVPVVQiLCJVUkxQYXJ0cyIsImZpeCIsInByb3RvY29sIiwiaG9zdCIsInBhdGgiLCJxdWVyeSIsInVybCIsInByb3RvY29sU2VwYXJhdG9yUG9zIiwiaW5kZXhPZiIsInByb3RvY29sRW5kIiwicXVlc3Rpb25Qb3MiLCJxdWVyeVN0YXJ0IiwibGVuZ3RoIiwicGF0aEVuZCIsInBhdGhTZXBhcmF0b3JQb3MiLCJwYXRoU3RhcnQiLCJzdWJzdHJpbmciLCJiYXNlVXJsIiwiYmFzZVBhcnRzIiwicGFyc2UiLCJmaXhQcm90b2NvbCIsIngiLCJmaXhIb3N0IiwidG9TdHJpbmciLCJyZXBsYWNlIiwic3RhcnRzV2l0aCIsInJlc29sdmVUaW1lb3V0IiwidGltZW91dCIsImRlZmF1bHRUaW1lb3V0IiwiZ3Jvd0ZhY3RvciIsImRlZmF1bHRHcm93RmFjdG9yIiwicmV0cnlJbmRleCIsInJlc29sdmVkVGltZW91dCIsInJlc29sdmVkR3Jvd0ZhY3RvciIsIk1hdGgiLCJtaW4iLCJwb3ciLCJkZWZhdWx0U2VydmVyIiwiVE9OQ29uZmlnTW9kdWxlIiwiY29udGV4dCIsImRhdGEiLCJzZXJ2ZXJzIiwicHVzaCIsInRyYWNlciIsIm5vb3BUcmFjZXIiLCJtZXNzYWdlUmV0cmllc0NvdW50IiwibWVzc2FnZUV4cGlyYXRpb25UaW1lb3V0IiwibWVzc2FnZUV4cGlyYXRpb25UaW1lb3V0R3Jvd0ZhY3RvciIsIm1lc3NhZ2VQcm9jZXNzaW5nVGltZW91dCIsIm1lc3NhZ2VQcm9jZXNzaW5nVGltZW91dEdyb3dGYWN0b3IiLCJ3YWl0Rm9yVGltZW91dCIsInByb2ZpbGUiLCJfcHJvZmlsZVN0YXJ0IiwiYXJncyIsImN1cnJlbnQiLCJEYXRlIiwibm93IiwidGltZVN0cmluZyIsIlN0cmluZyIsInRvRml4ZWQiLCJfcHJvZmlsZVByZXYiLCJfbG9nVmVyYm9zZSIsImNvbnNvbGUiLCJsb2ciLCJyZXF1ZXN0Q29yZSIsImNvcmVDb25maWciLCJPYmplY3QiLCJhc3NpZ24iLCJsb2dfdmVyYm9zZSIsInN0YXJ0UHJvZmlsZSIsIlRPTk1vZHVsZSIsIm1vZHVsZU5hbWUiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQW1CQTs7QUFDQTs7QUFDQTs7QUFyQkE7Ozs7Ozs7Ozs7Ozs7OztBQXVCQSxJQUFNQSxtQkFBbUIsR0FBRyxJQUFJLEtBQWhDO0FBQ0EsSUFBTUMsNkJBQTZCLEdBQUcsRUFBdEM7QUFDQSxJQUFNQyxrQ0FBa0MsR0FBRyxLQUEzQztBQUNBLElBQU1DLHNDQUFzQyxHQUFHLEdBQS9DO0FBQ0EsSUFBTUMsa0NBQWtDLEdBQUcsS0FBM0M7QUFDQSxJQUFNQyxzQ0FBc0MsR0FBRyxHQUEvQztBQUNBLElBQU1DLHdCQUF3QixHQUFHLEtBQWpDOztJQUVhQyxROzs7Z0NBNEJHQyxHLEVBQXNDO0FBQzlDLFdBQUtDLFFBQUwsR0FBZ0JELEdBQUcsQ0FBQyxLQUFLQyxRQUFOLENBQW5CO0FBQ0EsYUFBTyxJQUFQO0FBQ0g7Ozs0QkFFT0QsRyxFQUFzQztBQUMxQyxXQUFLRSxJQUFMLEdBQVlGLEdBQUcsQ0FBQyxLQUFLRSxJQUFOLENBQWY7QUFDQSxhQUFPLElBQVA7QUFDSDs7OzRCQUVPRixHLEVBQXNDO0FBQzFDLFdBQUtHLElBQUwsR0FBWUgsR0FBRyxDQUFDLEtBQUtHLElBQU4sQ0FBZjtBQUNBLGFBQU8sSUFBUDtBQUNIOzs7NkJBRVFILEcs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SUFBSSxDQUFDLENBQUQsQ0FBckM7QUFDSDs7QUFDRCxhQUFLTyxZQUFMLEdBQW9CTixPQUFwQjtBQUNILE9BWEQsTUFXTyxJQUFJLEtBQUtPLFdBQVQsRUFBc0I7QUFBQTs7QUFDekIscUJBQUFDLE9BQU8sRUFBQ0MsR0FBUiw4QkFBZ0JSLElBQUksQ0FBQ0MsR0FBTCxLQUFhLElBQTdCLGVBQXlDSCxJQUF6QztBQUNIO0FBQ0o7OzttQ0FFYztBQUNYLFdBQUtELGFBQUwsR0FBcUJHLElBQUksQ0FBQ0MsR0FBTCxLQUFhLElBQWxDO0FBQ0EsV0FBS0ksWUFBTCxHQUFvQixLQUFLUixhQUF6QjtBQUNIOzs7a0NBRWE7QUFDVixXQUFLQSxhQUFMLEdBQXFCLEtBQUtRLFlBQUwsR0FBb0IsQ0FBekM7QUFDSDs7Ozs7Ozs7O2lEQUdVLEtBQUtJLFdBQUwsQ0FBaUIsU0FBakIsQzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztxQkFLSCxLQUFLeEIsSTs7Ozs7QUFDQ3lCLGdCQUFBQSxVLEdBQWFDLE1BQU0sQ0FBQ0MsTUFBUCxDQUFjLEVBQWQsRUFBa0IsS0FBSzNCLElBQXZCLEM7QUFDbkIsdUJBQU95QixVQUFVLENBQUN0QixNQUFsQjs7dUJBQ00sS0FBS3FCLFdBQUwsQ0FBaUIsT0FBakIsRUFBMEJDLFVBQTFCLEM7OztBQUVWLHFCQUFLSixXQUFMLEdBQW1CLEtBQUtyQixJQUFMLENBQVU0QixXQUFWLElBQXlCLEtBQTVDOztBQUNBLG9CQUFJLEtBQUtQLFdBQVQsRUFBc0I7QUFDbEIsdUJBQUtRLFlBQUw7QUFDSDs7Ozs7Ozs7Ozs7Ozs7Ozs7O0VBekZvQ0MscUI7OztBQW1HN0NoQyxlQUFlLENBQUNpQyxVQUFoQixHQUE2QixpQkFBN0IiLCJzb3VyY2VzQ29udGVudCI6WyIvKlxuICogQ29weXJpZ2h0IDIwMTgtMjAyMCBUT04gREVWIFNPTFVUSU9OUyBMVEQuXG4gKlxuICogTGljZW5zZWQgdW5kZXIgdGhlIFNPRlRXQVJFIEVWQUxVQVRJT04gTGljZW5zZSAodGhlIFwiTGljZW5zZVwiKTsgeW91IG1heSBub3QgdXNlXG4gKiB0aGlzIGZpbGUgZXhjZXB0IGluIGNvbXBsaWFuY2Ugd2l0aCB0aGUgTGljZW5zZS4gIFlvdSBtYXkgb2J0YWluIGEgY29weSBvZiB0aGVcbiAqIExpY2Vuc2UgYXQ6XG4gKlxuICogaHR0cDovL3d3dy50b24uZGV2L2xpY2Vuc2VzXG4gKlxuICogVW5sZXNzIHJlcXVpcmVkIGJ5IGFwcGxpY2FibGUgbGF3IG9yIGFncmVlZCB0byBpbiB3cml0aW5nLCBzb2Z0d2FyZVxuICogZGlzdHJpYnV0ZWQgdW5kZXIgdGhlIExpY2Vuc2UgaXMgZGlzdHJpYnV0ZWQgb24gYW4gXCJBUyBJU1wiIEJBU0lTLFxuICogV0lUSE9VVCBXQVJSQU5USUVTIE9SIENPTkRJVElPTlMgT0YgQU5ZIEtJTkQsIGVpdGhlciBleHByZXNzIG9yIGltcGxpZWQuXG4gKiBTZWUgdGhlIExpY2Vuc2UgZm9yIHRoZSBzcGVjaWZpYyBUT04gREVWIHNvZnR3YXJlIGdvdmVybmluZyBwZXJtaXNzaW9ucyBhbmRcbiAqIGxpbWl0YXRpb25zIHVuZGVyIHRoZSBMaWNlbnNlLlxuICovXG5cbi8vIEBmbG93XG5pbXBvcnQgdHlwZSB7IFRPTkNvbmZpZ0RhdGEgfSBmcm9tIFwiLi4vLi4vdHlwZXNcIjtcbmltcG9ydCB0eXBlIHsgVE9OTW9kdWxlQ29udGV4dCB9IGZyb20gXCIuLi9UT05Nb2R1bGVcIjtcbmltcG9ydCB7IFRPTk1vZHVsZSB9IGZyb20gJy4uL1RPTk1vZHVsZSc7XG5pbXBvcnQgeyBUcmFjZXIgfSBmcm9tICdvcGVudHJhY2luZyc7XG5pbXBvcnQgeyB0cmFjZXIgYXMgbm9vcFRyYWNlciB9IGZyb20gXCJvcGVudHJhY2luZy9saWIvbm9vcFwiO1xuXG5jb25zdCBNQVhfTUVTU0FHRV9USU1FT1VUID0gNSAqIDYwMDAwO1xuY29uc3QgREVGQVVMVF9NRVNTQUdFX1JFVFJJRVNfQ09VTlQgPSAxMDtcbmNvbnN0IERFRkFVTFRfTUVTU0FHRV9FWFBJUkFUSU9OX1RJTUVPVVQgPSAxMDAwMDtcbmNvbnN0IERFRkFVTFRfTUVTU0FHRV9FWFBJUkFUSU9OX0dST1dfRkFDVE9SID0gMS41O1xuY29uc3QgREVGQVVMVF9NRVNTQUdFX1BST0NFU1NJTkdfVElNRU9VVCA9IDQwMDAwO1xuY29uc3QgREVGQVVMVF9NRVNTQUdFX1BST0NFU1NJTkdfR1JPV19GQUNUT1IgPSAxLjU7XG5jb25zdCBERUZBVUxUX1dBSVRfRk9SX1RJTUVPVVQgPSA0MDAwMDtcblxuZXhwb3J0IGNsYXNzIFVSTFBhcnRzIHtcbiAgICBzdGF0aWMgcGFyc2UodXJsOiBzdHJpbmcpOiBVUkxQYXJ0cyB7XG4gICAgICAgIGNvbnN0IHByb3RvY29sU2VwYXJhdG9yUG9zID0gdXJsLmluZGV4T2YoJzovLycpO1xuICAgICAgICBjb25zdCBwcm90b2NvbEVuZCA9IHByb3RvY29sU2VwYXJhdG9yUG9zID49IDAgPyBwcm90b2NvbFNlcGFyYXRvclBvcyArIDMgOiAwO1xuICAgICAgICBjb25zdCBxdWVzdGlvblBvcyA9IHVybC5pbmRleE9mKCc/JywgcHJvdG9jb2xFbmQpO1xuICAgICAgICBjb25zdCBxdWVyeVN0YXJ0ID0gcXVlc3Rpb25Qb3MgPj0gMCA/IHF1ZXN0aW9uUG9zICsgMSA6IHVybC5sZW5ndGg7XG4gICAgICAgIGNvbnN0IHBhdGhFbmQgPSBxdWVzdGlvblBvcyA+PSAwID8gcXVlc3Rpb25Qb3MgOiB1cmwubGVuZ3RoO1xuICAgICAgICBjb25zdCBwYXRoU2VwYXJhdG9yUG9zID0gdXJsLmluZGV4T2YoJy8nLCBwcm90b2NvbEVuZCk7XG4gICAgICAgIC8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSBuby1uZXN0ZWQtdGVybmFyeVxuICAgICAgICBjb25zdCBwYXRoU3RhcnQgPSBwYXRoU2VwYXJhdG9yUG9zID49IDBcbiAgICAgICAgICAgID8gKHBhdGhTZXBhcmF0b3JQb3MgPCBwYXRoRW5kID8gcGF0aFNlcGFyYXRvclBvcyA6IHBhdGhFbmQpXG4gICAgICAgICAgICA6IChxdWVzdGlvblBvcyA+PSAwID8gcXVlc3Rpb25Qb3MgOiB1cmwubGVuZ3RoKTtcbiAgICAgICAgcmV0dXJuIG5ldyBVUkxQYXJ0cyhcbiAgICAgICAgICAgIHVybC5zdWJzdHJpbmcoMCwgcHJvdG9jb2xFbmQpLFxuICAgICAgICAgICAgdXJsLnN1YnN0cmluZyhwcm90b2NvbEVuZCwgcGF0aFN0YXJ0KSxcbiAgICAgICAgICAgIHVybC5zdWJzdHJpbmcocGF0aFN0YXJ0LCBwYXRoRW5kKSxcbiAgICAgICAgICAgIHVybC5zdWJzdHJpbmcocXVlcnlTdGFydCksXG4gICAgICAgICk7XG4gICAgfVxuXG4gICAgc3RhdGljIHJlc29sdmVVcmwoYmFzZVVybDogc3RyaW5nLCB1cmw6IHN0cmluZyk6IHN0cmluZyB7XG4gICAgICAgIGNvbnN0IGJhc2VQYXJ0cyA9IFVSTFBhcnRzLnBhcnNlKGJhc2VVcmwpO1xuICAgICAgICByZXR1cm4gVVJMUGFydHMucGFyc2UodXJsKVxuICAgICAgICAgICAgLmZpeFByb3RvY29sKHggPT4geCB8fCBiYXNlUGFydHMucHJvdG9jb2wpXG4gICAgICAgICAgICAuZml4SG9zdCh4ID0+IHggfHwgYmFzZVBhcnRzLmhvc3QpXG4gICAgICAgICAgICAudG9TdHJpbmcoKTtcbiAgICB9XG5cbiAgICBmaXhQcm90b2NvbChmaXg6IChwOiBzdHJpbmcpID0+IHN0cmluZyk6IFVSTFBhcnRzIHtcbiAgICAgICAgdGhpcy5wcm90b2NvbCA9IGZpeCh0aGlzLnByb3RvY29sKTtcbiAgICAgICAgcmV0dXJuIHRoaXM7XG4gICAgfVxuXG4gICAgZml4SG9zdChmaXg6IChwOiBzdHJpbmcpID0+IHN0cmluZyk6IFVSTFBhcnRzIHtcbiAgICAgICAgdGhpcy5ob3N0ID0gZml4KHRoaXMuaG9zdCk7XG4gICAgICAgIHJldHVybiB0aGlzO1xuICAgIH1cblxuICAgIGZpeFBhdGgoZml4OiAocDogc3RyaW5nKSA9PiBzdHJpbmcpOiBVUkxQYXJ0cyB7XG4gICAgICAgIHRoaXMucGF0aCA9IGZpeCh0aGlzLnBhdGgpO1xuICAgICAgICByZXR1cm4gdGhpcztcbiAgICB9XG5cbiAgICBmaXhRdWVyeShmaXg6IChxOiBzdHJpbmcpID0+IHN0cmluZyk6IFVSTFBhcnRzIHtcbiAgICAgICAgdGhpcy5xdWVyeSA9IGZpeCh0aGlzLnF1ZXJ5KTtcbiAgICAgICAgcmV0dXJuIHRoaXM7XG4gICAgfVxuXG5cbiAgICBwcm90b2NvbDogc3RyaW5nO1xuXG4gICAgaG9zdDogc3RyaW5nO1xuXG4gICAgcGF0aDogc3RyaW5nO1xuXG4gICAgcXVlcnk6IHN0cmluZztcblxuICAgIGNvbnN0cnVjdG9yKHByb3RvY29sOiBzdHJpbmcsIGhvc3Q6IHN0cmluZywgcGF0aDogc3RyaW5nLCBxdWVyeTogc3RyaW5nKSB7XG4gICAgICAgIHRoaXMucHJvdG9jb2wgPSBwcm90b2NvbDtcbiAgICAgICAgdGhpcy5ob3N0ID0gaG9zdDtcbiAgICAgICAgdGhpcy5wYXRoID0gcGF0aDtcbiAgICAgICAgdGhpcy5xdWVyeSA9IHF1ZXJ5O1xuICAgIH1cblxuXG4gICAgdG9TdHJpbmcoKTogc3RyaW5nIHtcbiAgICAgICAgbGV0IHsgcGF0aCB9ID0gdGhpcztcbiAgICAgICAgd2hpbGUgKHBhdGguaW5kZXhPZignLy8nKSA+PSAwKSB7XG4gICAgICAgICAgICBwYXRoID0gcGF0aC5yZXBsYWNlKCcvLycsICcvJyk7XG4gICAgICAgIH1cbiAgICAgICAgaWYgKHBhdGggIT09ICcnICYmICFwYXRoLnN0YXJ0c1dpdGgoJy8nKSkge1xuICAgICAgICAgICAgcGF0aCA9IGAvJHtwYXRofWA7XG4gICAgICAgIH1cbiAgICAgICAgcmV0dXJuIGAke3RoaXMucHJvdG9jb2x9JHt0aGlzLmhvc3R9JHtwYXRofSR7dGhpcy5xdWVyeSAhPT0gJycgPyAnPycgOiAnJ30ke3RoaXMucXVlcnl9YDtcbiAgICB9XG59XG5cbmZ1bmN0aW9uIHJlc29sdmVUaW1lb3V0KFxuICAgIHRpbWVvdXQ/OiBudW1iZXIsXG4gICAgZGVmYXVsdFRpbWVvdXQ6IG51bWJlcixcbiAgICBncm93RmFjdG9yPzogbnVtYmVyLFxuICAgIGRlZmF1bHRHcm93RmFjdG9yOiBudW1iZXIsXG4gICAgcmV0cnlJbmRleD86IG51bWJlcixcbik6IG51bWJlciB7XG4gICAgY29uc3QgcmVzb2x2ZWRUaW1lb3V0ID0gdGltZW91dCA9PT0gMCA/IDAgOiAodGltZW91dCB8fCBkZWZhdWx0VGltZW91dCk7XG4gICAgY29uc3QgcmVzb2x2ZWRHcm93RmFjdG9yID0gZ3Jvd0ZhY3RvciB8fCBkZWZhdWx0R3Jvd0ZhY3RvcjtcbiAgICByZXR1cm4gTWF0aC5taW4oXG4gICAgICAgIE1BWF9NRVNTQUdFX1RJTUVPVVQsXG4gICAgICAgIHJlc29sdmVkVGltZW91dCAqIE1hdGgucG93KHJlc29sdmVkR3Jvd0ZhY3RvciwgcmV0cnlJbmRleCB8fCAwKVxuICAgICk7XG59XG5cbmNvbnN0IGRlZmF1bHRTZXJ2ZXIgPSAnaHR0cDovL2xvY2FsaG9zdCc7XG5cbmV4cG9ydCBkZWZhdWx0IGNsYXNzIFRPTkNvbmZpZ01vZHVsZSBleHRlbmRzIFRPTk1vZHVsZSB7XG4gICAgZGF0YTogVE9OQ29uZmlnRGF0YTtcbiAgICB0cmFjZXI6IFRyYWNlcjtcblxuICAgIGNvbnN0cnVjdG9yKGNvbnRleHQ6IFRPTk1vZHVsZUNvbnRleHQpIHtcbiAgICAgICAgc3VwZXIoY29udGV4dCk7XG4gICAgICAgIHRoaXMuZGF0YSA9IHtcbiAgICAgICAgICAgIHNlcnZlcnM6IFtkZWZhdWx0U2VydmVyXSxcbiAgICAgICAgfVxuICAgIH1cblxuICAgIHNldERhdGEoZGF0YTogVE9OQ29uZmlnRGF0YSkge1xuICAgICAgICB0aGlzLmRhdGEgPSBkYXRhIHx8IHRoaXMuZGF0YTtcbiAgICAgICAgaWYgKHRoaXMuZGF0YS5zZXJ2ZXJzLmxlbmd0aCA9PT0gMCkge1xuICAgICAgICAgICAgdGhpcy5kYXRhLnNlcnZlcnMucHVzaChkZWZhdWx0U2VydmVyKTtcbiAgICAgICAgfVxuICAgICAgICB0aGlzLnRyYWNlciA9IGRhdGEudHJhY2VyIHx8IG5vb3BUcmFjZXI7XG4gICAgfVxuXG5cbiAgICBtZXNzYWdlUmV0cmllc0NvdW50KCk6IG51bWJlciB7XG4gICAgICAgIHJldHVybiB0aGlzLmRhdGEubWVzc2FnZVJldHJpZXNDb3VudCB8fCBERUZBVUxUX01FU1NBR0VfUkVUUklFU19DT1VOVDtcbiAgICB9XG5cbiAgICBtZXNzYWdlRXhwaXJhdGlvblRpbWVvdXQocmV0cnlJbmRleD86IG51bWJlcik6IG51bWJlciB7XG4gICAgICAgIHJldHVybiByZXNvbHZlVGltZW91dChcbiAgICAgICAgICAgIHRoaXMuZGF0YS5tZXNzYWdlRXhwaXJhdGlvblRpbWVvdXQsXG4gICAgICAgICAgICBERUZBVUxUX01FU1NBR0VfRVhQSVJBVElPTl9USU1FT1VULFxuICAgICAgICAgICAgdGhpcy5kYXRhLm1lc3NhZ2VFeHBpcmF0aW9uVGltZW91dEdyb3dGYWN0b3IsXG4gICAgICAgICAgICBERUZBVUxUX01FU1NBR0VfRVhQSVJBVElPTl9HUk9XX0ZBQ1RPUixcbiAgICAgICAgICAgIHJldHJ5SW5kZXgsXG4gICAgICAgICk7XG4gICAgfVxuXG4gICAgbWVzc2FnZVByb2Nlc3NpbmdUaW1lb3V0KHJldHJ5SW5kZXg/OiBudW1iZXIpOiBudW1iZXIge1xuICAgICAgICByZXR1cm4gcmVzb2x2ZVRpbWVvdXQoXG4gICAgICAgICAgICB0aGlzLmRhdGEubWVzc2FnZVByb2Nlc3NpbmdUaW1lb3V0LFxuICAgICAgICAgICAgREVGQVVMVF9NRVNTQUdFX1BST0NFU1NJTkdfVElNRU9VVCxcbiAgICAgICAgICAgIHRoaXMuZGF0YS5tZXNzYWdlUHJvY2Vzc2luZ1RpbWVvdXRHcm93RmFjdG9yLFxuICAgICAgICAgICAgREVGQVVMVF9NRVNTQUdFX1BST0NFU1NJTkdfR1JPV19GQUNUT1IsXG4gICAgICAgICAgICByZXRyeUluZGV4LFxuICAgICAgICApO1xuICAgIH1cblxuICAgIHdhaXRGb3JUaW1lb3V0KCk6IG51bWJlciB7XG4gICAgICAgIHJldHVybiB0aGlzLmRhdGEud2FpdEZvclRpbWVvdXQgfHwgREVGQVVMVF9XQUlUX0ZPUl9USU1FT1VUO1xuICAgIH1cblxuICAgIGxvZyguLi5hcmdzOiBhbnlbXSkge1xuICAgICAgICBjb25zdCBwcm9maWxlID0gKHRoaXMuX3Byb2ZpbGVTdGFydCB8fCAwKSAhPT0gMDtcbiAgICAgICAgaWYgKHByb2ZpbGUpIHtcbiAgICAgICAgICAgIGNvbnN0IGN1cnJlbnQgPSBEYXRlLm5vdygpIC8gMTAwMDtcbiAgICAgICAgICAgIGNvbnN0IHRpbWVTdHJpbmcgPSBgJHtTdHJpbmcoY3VycmVudC50b0ZpeGVkKDMpKX0gJHtcbiAgICAgICAgICAgICAgICBTdHJpbmcoKGN1cnJlbnQgLSB0aGlzLl9wcm9maWxlU3RhcnQpLnRvRml4ZWQoMykpfSAke1xuICAgICAgICAgICAgICAgIFN0cmluZygoY3VycmVudCAtIHRoaXMuX3Byb2ZpbGVQcmV2KS50b0ZpeGVkKDMpKX1gO1xuICAgICAgICAgICAgaWYgKHRoaXMuX2xvZ1ZlcmJvc2UpIHtcbiAgICAgICAgICAgICAgICBjb25zb2xlLmxvZyhgWyR7dGltZVN0cmluZ31dXFxuYCwgLi4uYXJncyk7XG4gICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAgIGNvbnNvbGUubG9nKGBbJHt0aW1lU3RyaW5nfV1cXG5gLCBhcmdzWzBdKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIHRoaXMuX3Byb2ZpbGVQcmV2ID0gY3VycmVudDtcbiAgICAgICAgfSBlbHNlIGlmICh0aGlzLl9sb2dWZXJib3NlKSB7XG4gICAgICAgICAgICBjb25zb2xlLmxvZyhgWyR7RGF0ZS5ub3coKSAvIDEwMDB9XWAsIC4uLmFyZ3MpO1xuICAgICAgICB9XG4gICAgfVxuXG4gICAgc3RhcnRQcm9maWxlKCkge1xuICAgICAgICB0aGlzLl9wcm9maWxlU3RhcnQgPSBEYXRlLm5vdygpIC8gMTAwMDtcbiAgICAgICAgdGhpcy5fcHJvZmlsZVByZXYgPSB0aGlzLl9wcm9maWxlU3RhcnQ7XG4gICAgfVxuXG4gICAgc3RvcFByb2ZpbGUoKSB7XG4gICAgICAgIHRoaXMuX3Byb2ZpbGVTdGFydCA9IHRoaXMuX3Byb2ZpbGVQcmV2ID0gMDtcbiAgICB9XG5cbiAgICBhc3luYyBnZXRWZXJzaW9uKCk6IFByb21pc2U8c3RyaW5nPiB7XG4gICAgICAgIHJldHVybiB0aGlzLnJlcXVlc3RDb3JlKCd2ZXJzaW9uJyk7XG4gICAgfVxuXG5cbiAgICBhc3luYyBzZXR1cCgpOiBQcm9taXNlPHZvaWQ+IHtcbiAgICAgICAgaWYgKHRoaXMuZGF0YSkge1xuICAgICAgICAgICAgY29uc3QgY29yZUNvbmZpZyA9IE9iamVjdC5hc3NpZ24oe30sIHRoaXMuZGF0YSk7XG4gICAgICAgICAgICBkZWxldGUgY29yZUNvbmZpZy50cmFjZXI7XG4gICAgICAgICAgICBhd2FpdCB0aGlzLnJlcXVlc3RDb3JlKCdzZXR1cCcsIGNvcmVDb25maWcpO1xuICAgICAgICB9XG4gICAgICAgIHRoaXMuX2xvZ1ZlcmJvc2UgPSB0aGlzLmRhdGEubG9nX3ZlcmJvc2UgfHwgZmFsc2U7XG4gICAgICAgIGlmICh0aGlzLl9sb2dWZXJib3NlKSB7XG4gICAgICAgICAgICB0aGlzLnN0YXJ0UHJvZmlsZSgpO1xuICAgICAgICB9XG4gICAgfVxuXG4gICAgX2xvZ1ZlcmJvc2U6IGJvb2xlYW47XG5cbiAgICBfcHJvZmlsZVN0YXJ0OiBudW1iZXI7XG5cbiAgICBfcHJvZmlsZVByZXY6IG51bWJlcjtcbn1cblxuVE9OQ29uZmlnTW9kdWxlLm1vZHVsZU5hbWUgPSAnVE9OQ29uZmlnTW9kdWxlJztcbiJdfQ==