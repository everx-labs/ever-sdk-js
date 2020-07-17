"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = exports.URLParts = void 0;

var _regenerator = _interopRequireDefault(require("@babel/runtime/regenerator"));

var _TONModule2 = require("../TONModule");

var _opentracing = require("opentracing");

var _noop = require("opentracing/lib/noop");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _typeof(obj) { "@babel/helpers - typeof"; if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { Promise.resolve(value).then(_next, _throw); } }

function _asyncToGenerator(fn) { return function () { var self = this, args = arguments; return new Promise(function (resolve, reject) { var gen = fn.apply(self, args); function _next(value) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "next", value); } function _throw(err) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "throw", err); } _next(undefined); }); }; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

function _createSuper(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct(); return function () { var Super = _getPrototypeOf(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = _getPrototypeOf(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return _possibleConstructorReturn(this, result); }; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Date.prototype.toString.call(Reflect.construct(Date, [], function () {})); return true; } catch (e) { return false; } }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

var MAX_MESSAGE_TIMEOUT = 5 * 60000;
var DEFAULT_MESSAGE_RETRIES_COUNT = 10;
var DEFAULT_MESSAGE_EXPIRATION_TIMEOUT = 10000;
var DEFAULT_MESSAGE_EXPIRATION_GROW_FACTOR = 1.5;
var DEFAULT_MESSAGE_PROCESSING_TIMEOUT = 40000;
var DEFAULT_MESSAGE_PROCESSING_GROW_FACTOR = 1.5;
var DEFAULT_WAIT_FOR_TIMEOUT = 40000;
var DEFAULT_NETWORK_TIMEOUT = 0;
var DEFAULT_OUT_OF_SYNC_THRESHOLD = 15000;

var URLParts = /*#__PURE__*/function () {
  _createClass(URLParts, [{
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
    _classCallCheck(this, URLParts);

    _defineProperty(this, "protocol", void 0);

    _defineProperty(this, "host", void 0);

    _defineProperty(this, "path", void 0);

    _defineProperty(this, "query", void 0);

    this.protocol = protocol;
    this.host = host;
    this.path = path;
    this.query = query;
  }

  _createClass(URLParts, [{
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

function valueOrDefault(value, defaultValue) {
  return value === undefined || value === null ? defaultValue : value;
}

var TONConfigModule = /*#__PURE__*/function (_TONModule) {
  _inherits(TONConfigModule, _TONModule);

  var _super = _createSuper(TONConfigModule);

  function TONConfigModule(context) {
    var _this;

    _classCallCheck(this, TONConfigModule);

    _this = _super.call(this, context);

    _defineProperty(_assertThisInitialized(_this), "data", void 0);

    _defineProperty(_assertThisInitialized(_this), "tracer", void 0);

    _defineProperty(_assertThisInitialized(_this), "_logVerbose", void 0);

    _defineProperty(_assertThisInitialized(_this), "_profileStart", void 0);

    _defineProperty(_assertThisInitialized(_this), "_profilePrev", void 0);

    _this.data = {
      servers: [defaultServer]
    };
    return _this;
  }

  _createClass(TONConfigModule, [{
    key: "setData",
    value: function setData(data) {
      this.data = data || this.data;

      if (this.data.servers.length === 0) {
        this.data.servers.push(defaultServer);
      }

      this.tracer = data.tracer || _noop.tracer;
    }
  }, {
    key: "outOfSyncThreshold",
    value: function outOfSyncThreshold() {
      return valueOrDefault(this.data.outOfSyncThreshold, DEFAULT_OUT_OF_SYNC_THRESHOLD);
    }
  }, {
    key: "messageRetriesCount",
    value: function messageRetriesCount() {
      return valueOrDefault(this.data.messageRetriesCount, DEFAULT_MESSAGE_RETRIES_COUNT);
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
      return valueOrDefault(this.data.waitForTimeout, DEFAULT_WAIT_FOR_TIMEOUT);
    }
  }, {
    key: "networkTimeout",
    value: function networkTimeout() {
      return valueOrDefault(this.data.networkTimeout, DEFAULT_NETWORK_TIMEOUT);
    }
  }, {
    key: "isNetworkTimeoutExpiredSince",
    value: function isNetworkTimeoutExpiredSince(startTime) {
      var timeout = this.networkTimeout();

      if (timeout === 0) {
        return false;
      }

      return Date.now() > startTime + timeout;
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
      var _getVersion = _asyncToGenerator( /*#__PURE__*/_regenerator["default"].mark(function _callee() {
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
      var _setup = _asyncToGenerator( /*#__PURE__*/_regenerator["default"].mark(function _callee2() {
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy9tb2R1bGVzL1RPTkNvbmZpZ01vZHVsZS5qcyJdLCJuYW1lcyI6WyJNQVhfTUVTU0FHRV9USU1FT1VUIiwiREVGQVVMVF9NRVNTQUdFX1JFVFJJRVNfQ09VTlQiLCJERUZBVUxUX01FU1NBR0VfRVhQSVJBVElPTl9USU1FT1VUIiwiREVGQVVMVF9NRVNTQUdFX0VYUElSQVRJT05fR1JPV19GQUNUT1IiLCJERUZBVUxUX01FU1NBR0VfUFJPQ0VTU0lOR19USU1FT1VUIiwiREVGQVVMVF9NRVNTQUdFX1BST0NFU1NJTkdfR1JPV19GQUNUT1IiLCJERUZBVUxUX1dBSVRfRk9SX1RJTUVPVVQiLCJERUZBVUxUX05FVFdPUktfVElNRU9VVCIsIkRFRkFVTFRfT1VUX09GX1NZTkNfVEhSRVNIT0xEIiwiVVJMUGFydHMiLCJmaXgiLCJwcm90b2NvbCIsImhvc3QiLCJwYXRoIiwicXVlcnkiLCJ1cmwiLCJwcm90b2NvbFNlcGFyYXRvclBvcyIsImluZGV4T2YiLCJwcm90b2NvbEVuZCIsInF1ZXN0aW9uUG9zIiwicXVlcnlTdGFydCIsImxlbmd0aCIsInBhdGhFbmQiLCJwYXRoU2VwYXJhdG9yUG9zIiwicGF0aFN0YXJ0Iiwic3Vic3RyaW5nIiwiYmFzZVVybCIsImJhc2VQYXJ0cyIsInBhcnNlIiwiZml4UHJvdG9jb2wiLCJ4IiwiZml4SG9zdCIsInRvU3RyaW5nIiwicmVwbGFjZSIsInN0YXJ0c1dpdGgiLCJyZXNvbHZlVGltZW91dCIsInRpbWVvdXQiLCJkZWZhdWx0VGltZW91dCIsImdyb3dGYWN0b3IiLCJkZWZhdWx0R3Jvd0ZhY3RvciIsInJldHJ5SW5kZXgiLCJyZXNvbHZlZFRpbWVvdXQiLCJyZXNvbHZlZEdyb3dGYWN0b3IiLCJNYXRoIiwibWluIiwicG93IiwiZGVmYXVsdFNlcnZlciIsInZhbHVlT3JEZWZhdWx0IiwidmFsdWUiLCJkZWZhdWx0VmFsdWUiLCJ1bmRlZmluZWQiLCJUT05Db25maWdNb2R1bGUiLCJjb250ZXh0IiwiZGF0YSIsInNlcnZlcnMiLCJwdXNoIiwidHJhY2VyIiwibm9vcFRyYWNlciIsIm91dE9mU3luY1RocmVzaG9sZCIsIm1lc3NhZ2VSZXRyaWVzQ291bnQiLCJtZXNzYWdlRXhwaXJhdGlvblRpbWVvdXQiLCJtZXNzYWdlRXhwaXJhdGlvblRpbWVvdXRHcm93RmFjdG9yIiwibWVzc2FnZVByb2Nlc3NpbmdUaW1lb3V0IiwibWVzc2FnZVByb2Nlc3NpbmdUaW1lb3V0R3Jvd0ZhY3RvciIsIndhaXRGb3JUaW1lb3V0IiwibmV0d29ya1RpbWVvdXQiLCJzdGFydFRpbWUiLCJEYXRlIiwibm93IiwicHJvZmlsZSIsIl9wcm9maWxlU3RhcnQiLCJhcmdzIiwiY3VycmVudCIsInRpbWVTdHJpbmciLCJTdHJpbmciLCJ0b0ZpeGVkIiwiX3Byb2ZpbGVQcmV2IiwiX2xvZ1ZlcmJvc2UiLCJjb25zb2xlIiwibG9nIiwicmVxdWVzdENvcmUiLCJjb3JlQ29uZmlnIiwiT2JqZWN0IiwiYXNzaWduIiwibG9nX3ZlcmJvc2UiLCJzdGFydFByb2ZpbGUiLCJUT05Nb2R1bGUiLCJtb2R1bGVOYW1lIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7QUFPQTs7QUFDQTs7QUFDQTs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFFQSxJQUFNQSxtQkFBbUIsR0FBRyxJQUFJLEtBQWhDO0FBQ0EsSUFBTUMsNkJBQTZCLEdBQUcsRUFBdEM7QUFDQSxJQUFNQyxrQ0FBa0MsR0FBRyxLQUEzQztBQUNBLElBQU1DLHNDQUFzQyxHQUFHLEdBQS9DO0FBQ0EsSUFBTUMsa0NBQWtDLEdBQUcsS0FBM0M7QUFDQSxJQUFNQyxzQ0FBc0MsR0FBRyxHQUEvQztBQUNBLElBQU1DLHdCQUF3QixHQUFHLEtBQWpDO0FBQ0EsSUFBTUMsdUJBQXVCLEdBQUcsQ0FBaEM7QUFFQSxJQUFNQyw2QkFBNkIsR0FBRyxLQUF0Qzs7SUFFYUMsUTs7O2dDQTRCR0MsRyxFQUFzQztBQUM5QyxXQUFLQyxRQUFMLEdBQWdCRCxHQUFHLENBQUMsS0FBS0MsUUFBTixD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QUFDSDtBQUNKOzs7bUNBRWM7QUFDWCxXQUFLRCxhQUFMLEdBQXFCSCxJQUFJLENBQUNDLEdBQUwsS0FBYSxJQUFsQztBQUNBLFdBQUtRLFlBQUwsR0FBb0IsS0FBS04sYUFBekI7QUFDSDs7O2tDQUVhO0FBQ1YsV0FBS0EsYUFBTCxHQUFxQixLQUFLTSxZQUFMLEdBQW9CLENBQXpDO0FBQ0g7Ozs7Ozs7OztpREFHVSxLQUFLSSxXQUFMLENBQWlCLFNBQWpCLEM7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7cUJBS0gsS0FBSzNCLEk7Ozs7O0FBQ0M0QixnQkFBQUEsVSxHQUFhQyxNQUFNLENBQUNDLE1BQVAsQ0FBYyxFQUFkLEVBQWtCLEtBQUs5QixJQUF2QixDO0FBQ25CLHVCQUFPNEIsVUFBVSxDQUFDekIsTUFBbEI7O3VCQUNNLEtBQUt3QixXQUFMLENBQWlCLE9BQWpCLEVBQTBCQyxVQUExQixDOzs7QUFFVixxQkFBS0osV0FBTCxHQUFtQixLQUFLeEIsSUFBTCxDQUFVK0IsV0FBVixJQUF5QixLQUE1Qzs7QUFDQSxvQkFBSSxLQUFLUCxXQUFULEVBQXNCO0FBQ2xCLHVCQUFLUSxZQUFMO0FBQ0g7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7RUF6R29DQyxxQjs7O0FBbUg3Q25DLGVBQWUsQ0FBQ29DLFVBQWhCLEdBQTZCLGlCQUE3QiIsInNvdXJjZXNDb250ZW50IjpbIi8qXG4gKiBDb3B5cmlnaHQgMjAxOC0yMDIwIFRPTiBERVYgU09MVVRJT05TIExURC5cbiAqL1xuXG4vLyBAZmxvd1xuaW1wb3J0IHR5cGUgeyBUT05Db25maWdEYXRhIH0gZnJvbSBcIi4uLy4uL3R5cGVzXCI7XG5pbXBvcnQgdHlwZSB7IFRPTk1vZHVsZUNvbnRleHQgfSBmcm9tIFwiLi4vVE9OTW9kdWxlXCI7XG5pbXBvcnQgeyBUT05Nb2R1bGUgfSBmcm9tICcuLi9UT05Nb2R1bGUnO1xuaW1wb3J0IHsgVHJhY2VyIH0gZnJvbSAnb3BlbnRyYWNpbmcnO1xuaW1wb3J0IHsgdHJhY2VyIGFzIG5vb3BUcmFjZXIgfSBmcm9tIFwib3BlbnRyYWNpbmcvbGliL25vb3BcIjtcblxuY29uc3QgTUFYX01FU1NBR0VfVElNRU9VVCA9IDUgKiA2MDAwMDtcbmNvbnN0IERFRkFVTFRfTUVTU0FHRV9SRVRSSUVTX0NPVU5UID0gMTA7XG5jb25zdCBERUZBVUxUX01FU1NBR0VfRVhQSVJBVElPTl9USU1FT1VUID0gMTAwMDA7XG5jb25zdCBERUZBVUxUX01FU1NBR0VfRVhQSVJBVElPTl9HUk9XX0ZBQ1RPUiA9IDEuNTtcbmNvbnN0IERFRkFVTFRfTUVTU0FHRV9QUk9DRVNTSU5HX1RJTUVPVVQgPSA0MDAwMDtcbmNvbnN0IERFRkFVTFRfTUVTU0FHRV9QUk9DRVNTSU5HX0dST1dfRkFDVE9SID0gMS41O1xuY29uc3QgREVGQVVMVF9XQUlUX0ZPUl9USU1FT1VUID0gNDAwMDA7XG5jb25zdCBERUZBVUxUX05FVFdPUktfVElNRU9VVCA9IDA7XG5cbmNvbnN0IERFRkFVTFRfT1VUX09GX1NZTkNfVEhSRVNIT0xEID0gMTUwMDA7XG5cbmV4cG9ydCBjbGFzcyBVUkxQYXJ0cyB7XG4gICAgc3RhdGljIHBhcnNlKHVybDogc3RyaW5nKTogVVJMUGFydHMge1xuICAgICAgICBjb25zdCBwcm90b2NvbFNlcGFyYXRvclBvcyA9IHVybC5pbmRleE9mKCc6Ly8nKTtcbiAgICAgICAgY29uc3QgcHJvdG9jb2xFbmQgPSBwcm90b2NvbFNlcGFyYXRvclBvcyA+PSAwID8gcHJvdG9jb2xTZXBhcmF0b3JQb3MgKyAzIDogMDtcbiAgICAgICAgY29uc3QgcXVlc3Rpb25Qb3MgPSB1cmwuaW5kZXhPZignPycsIHByb3RvY29sRW5kKTtcbiAgICAgICAgY29uc3QgcXVlcnlTdGFydCA9IHF1ZXN0aW9uUG9zID49IDAgPyBxdWVzdGlvblBvcyArIDEgOiB1cmwubGVuZ3RoO1xuICAgICAgICBjb25zdCBwYXRoRW5kID0gcXVlc3Rpb25Qb3MgPj0gMCA/IHF1ZXN0aW9uUG9zIDogdXJsLmxlbmd0aDtcbiAgICAgICAgY29uc3QgcGF0aFNlcGFyYXRvclBvcyA9IHVybC5pbmRleE9mKCcvJywgcHJvdG9jb2xFbmQpO1xuICAgICAgICAvLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgbm8tbmVzdGVkLXRlcm5hcnlcbiAgICAgICAgY29uc3QgcGF0aFN0YXJ0ID0gcGF0aFNlcGFyYXRvclBvcyA+PSAwXG4gICAgICAgICAgICA/IChwYXRoU2VwYXJhdG9yUG9zIDwgcGF0aEVuZCA/IHBhdGhTZXBhcmF0b3JQb3MgOiBwYXRoRW5kKVxuICAgICAgICAgICAgOiAocXVlc3Rpb25Qb3MgPj0gMCA/IHF1ZXN0aW9uUG9zIDogdXJsLmxlbmd0aCk7XG4gICAgICAgIHJldHVybiBuZXcgVVJMUGFydHMoXG4gICAgICAgICAgICB1cmwuc3Vic3RyaW5nKDAsIHByb3RvY29sRW5kKSxcbiAgICAgICAgICAgIHVybC5zdWJzdHJpbmcocHJvdG9jb2xFbmQsIHBhdGhTdGFydCksXG4gICAgICAgICAgICB1cmwuc3Vic3RyaW5nKHBhdGhTdGFydCwgcGF0aEVuZCksXG4gICAgICAgICAgICB1cmwuc3Vic3RyaW5nKHF1ZXJ5U3RhcnQpLFxuICAgICAgICApO1xuICAgIH1cblxuICAgIHN0YXRpYyByZXNvbHZlVXJsKGJhc2VVcmw6IHN0cmluZywgdXJsOiBzdHJpbmcpOiBzdHJpbmcge1xuICAgICAgICBjb25zdCBiYXNlUGFydHMgPSBVUkxQYXJ0cy5wYXJzZShiYXNlVXJsKTtcbiAgICAgICAgcmV0dXJuIFVSTFBhcnRzLnBhcnNlKHVybClcbiAgICAgICAgICAgIC5maXhQcm90b2NvbCh4ID0+IHggfHwgYmFzZVBhcnRzLnByb3RvY29sKVxuICAgICAgICAgICAgLmZpeEhvc3QoeCA9PiB4IHx8IGJhc2VQYXJ0cy5ob3N0KVxuICAgICAgICAgICAgLnRvU3RyaW5nKCk7XG4gICAgfVxuXG4gICAgZml4UHJvdG9jb2woZml4OiAocDogc3RyaW5nKSA9PiBzdHJpbmcpOiBVUkxQYXJ0cyB7XG4gICAgICAgIHRoaXMucHJvdG9jb2wgPSBmaXgodGhpcy5wcm90b2NvbCk7XG4gICAgICAgIHJldHVybiB0aGlzO1xuICAgIH1cblxuICAgIGZpeEhvc3QoZml4OiAocDogc3RyaW5nKSA9PiBzdHJpbmcpOiBVUkxQYXJ0cyB7XG4gICAgICAgIHRoaXMuaG9zdCA9IGZpeCh0aGlzLmhvc3QpO1xuICAgICAgICByZXR1cm4gdGhpcztcbiAgICB9XG5cbiAgICBmaXhQYXRoKGZpeDogKHA6IHN0cmluZykgPT4gc3RyaW5nKTogVVJMUGFydHMge1xuICAgICAgICB0aGlzLnBhdGggPSBmaXgodGhpcy5wYXRoKTtcbiAgICAgICAgcmV0dXJuIHRoaXM7XG4gICAgfVxuXG4gICAgZml4UXVlcnkoZml4OiAocTogc3RyaW5nKSA9PiBzdHJpbmcpOiBVUkxQYXJ0cyB7XG4gICAgICAgIHRoaXMucXVlcnkgPSBmaXgodGhpcy5xdWVyeSk7XG4gICAgICAgIHJldHVybiB0aGlzO1xuICAgIH1cblxuXG4gICAgcHJvdG9jb2w6IHN0cmluZztcblxuICAgIGhvc3Q6IHN0cmluZztcblxuICAgIHBhdGg6IHN0cmluZztcblxuICAgIHF1ZXJ5OiBzdHJpbmc7XG5cbiAgICBjb25zdHJ1Y3Rvcihwcm90b2NvbDogc3RyaW5nLCBob3N0OiBzdHJpbmcsIHBhdGg6IHN0cmluZywgcXVlcnk6IHN0cmluZykge1xuICAgICAgICB0aGlzLnByb3RvY29sID0gcHJvdG9jb2w7XG4gICAgICAgIHRoaXMuaG9zdCA9IGhvc3Q7XG4gICAgICAgIHRoaXMucGF0aCA9IHBhdGg7XG4gICAgICAgIHRoaXMucXVlcnkgPSBxdWVyeTtcbiAgICB9XG5cblxuICAgIHRvU3RyaW5nKCk6IHN0cmluZyB7XG4gICAgICAgIGxldCB7IHBhdGggfSA9IHRoaXM7XG4gICAgICAgIHdoaWxlIChwYXRoLmluZGV4T2YoJy8vJykgPj0gMCkge1xuICAgICAgICAgICAgcGF0aCA9IHBhdGgucmVwbGFjZSgnLy8nLCAnLycpO1xuICAgICAgICB9XG4gICAgICAgIGlmIChwYXRoICE9PSAnJyAmJiAhcGF0aC5zdGFydHNXaXRoKCcvJykpIHtcbiAgICAgICAgICAgIHBhdGggPSBgLyR7cGF0aH1gO1xuICAgICAgICB9XG4gICAgICAgIHJldHVybiBgJHt0aGlzLnByb3RvY29sfSR7dGhpcy5ob3N0fSR7cGF0aH0ke3RoaXMucXVlcnkgIT09ICcnID8gJz8nIDogJyd9JHt0aGlzLnF1ZXJ5fWA7XG4gICAgfVxufVxuXG5mdW5jdGlvbiByZXNvbHZlVGltZW91dChcbiAgICB0aW1lb3V0PzogbnVtYmVyLFxuICAgIGRlZmF1bHRUaW1lb3V0OiBudW1iZXIsXG4gICAgZ3Jvd0ZhY3Rvcj86IG51bWJlcixcbiAgICBkZWZhdWx0R3Jvd0ZhY3RvcjogbnVtYmVyLFxuICAgIHJldHJ5SW5kZXg/OiBudW1iZXIsXG4pOiBudW1iZXIge1xuICAgIGNvbnN0IHJlc29sdmVkVGltZW91dCA9IHRpbWVvdXQgPT09IDAgPyAwIDogKHRpbWVvdXQgfHwgZGVmYXVsdFRpbWVvdXQpO1xuICAgIGNvbnN0IHJlc29sdmVkR3Jvd0ZhY3RvciA9IGdyb3dGYWN0b3IgfHwgZGVmYXVsdEdyb3dGYWN0b3I7XG4gICAgcmV0dXJuIE1hdGgubWluKFxuICAgICAgICBNQVhfTUVTU0FHRV9USU1FT1VULFxuICAgICAgICByZXNvbHZlZFRpbWVvdXQgKiBNYXRoLnBvdyhyZXNvbHZlZEdyb3dGYWN0b3IsIHJldHJ5SW5kZXggfHwgMClcbiAgICApO1xufVxuXG5jb25zdCBkZWZhdWx0U2VydmVyID0gJ2h0dHA6Ly9sb2NhbGhvc3QnO1xuZnVuY3Rpb24gdmFsdWVPckRlZmF1bHQodmFsdWUsIGRlZmF1bHRWYWx1ZSkge1xuICAgIHJldHVybiAodmFsdWUgPT09IHVuZGVmaW5lZCB8fCB2YWx1ZSA9PT0gbnVsbCkgPyBkZWZhdWx0VmFsdWUgOiB2YWx1ZTtcbn1cblxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgVE9OQ29uZmlnTW9kdWxlIGV4dGVuZHMgVE9OTW9kdWxlIHtcbiAgICBkYXRhOiBUT05Db25maWdEYXRhO1xuICAgIHRyYWNlcjogVHJhY2VyO1xuXG4gICAgY29uc3RydWN0b3IoY29udGV4dDogVE9OTW9kdWxlQ29udGV4dCkge1xuICAgICAgICBzdXBlcihjb250ZXh0KTtcbiAgICAgICAgdGhpcy5kYXRhID0ge1xuICAgICAgICAgICAgc2VydmVyczogW2RlZmF1bHRTZXJ2ZXJdLFxuICAgICAgICB9XG4gICAgfVxuXG4gICAgc2V0RGF0YShkYXRhOiBUT05Db25maWdEYXRhKSB7XG4gICAgICAgIHRoaXMuZGF0YSA9IGRhdGEgfHwgdGhpcy5kYXRhO1xuICAgICAgICBpZiAodGhpcy5kYXRhLnNlcnZlcnMubGVuZ3RoID09PSAwKSB7XG4gICAgICAgICAgICB0aGlzLmRhdGEuc2VydmVycy5wdXNoKGRlZmF1bHRTZXJ2ZXIpO1xuICAgICAgICB9XG4gICAgICAgIHRoaXMudHJhY2VyID0gZGF0YS50cmFjZXIgfHwgbm9vcFRyYWNlcjtcbiAgICB9XG5cblxuICAgIG91dE9mU3luY1RocmVzaG9sZCgpOiBudW1iZXIge1xuICAgICAgICByZXR1cm4gdmFsdWVPckRlZmF1bHQodGhpcy5kYXRhLm91dE9mU3luY1RocmVzaG9sZCwgREVGQVVMVF9PVVRfT0ZfU1lOQ19USFJFU0hPTEQpO1xuICAgIH1cblxuICAgIG1lc3NhZ2VSZXRyaWVzQ291bnQoKTogbnVtYmVyIHtcbiAgICAgICAgcmV0dXJuIHZhbHVlT3JEZWZhdWx0KHRoaXMuZGF0YS5tZXNzYWdlUmV0cmllc0NvdW50LCBERUZBVUxUX01FU1NBR0VfUkVUUklFU19DT1VOVCk7XG4gICAgfVxuXG4gICAgbWVzc2FnZUV4cGlyYXRpb25UaW1lb3V0KHJldHJ5SW5kZXg/OiBudW1iZXIpOiBudW1iZXIge1xuICAgICAgICByZXR1cm4gcmVzb2x2ZVRpbWVvdXQoXG4gICAgICAgICAgICB0aGlzLmRhdGEubWVzc2FnZUV4cGlyYXRpb25UaW1lb3V0LFxuICAgICAgICAgICAgREVGQVVMVF9NRVNTQUdFX0VYUElSQVRJT05fVElNRU9VVCxcbiAgICAgICAgICAgIHRoaXMuZGF0YS5tZXNzYWdlRXhwaXJhdGlvblRpbWVvdXRHcm93RmFjdG9yLFxuICAgICAgICAgICAgREVGQVVMVF9NRVNTQUdFX0VYUElSQVRJT05fR1JPV19GQUNUT1IsXG4gICAgICAgICAgICByZXRyeUluZGV4LFxuICAgICAgICApO1xuICAgIH1cblxuICAgIG1lc3NhZ2VQcm9jZXNzaW5nVGltZW91dChyZXRyeUluZGV4PzogbnVtYmVyKTogbnVtYmVyIHtcbiAgICAgICAgcmV0dXJuIHJlc29sdmVUaW1lb3V0KFxuICAgICAgICAgICAgdGhpcy5kYXRhLm1lc3NhZ2VQcm9jZXNzaW5nVGltZW91dCxcbiAgICAgICAgICAgIERFRkFVTFRfTUVTU0FHRV9QUk9DRVNTSU5HX1RJTUVPVVQsXG4gICAgICAgICAgICB0aGlzLmRhdGEubWVzc2FnZVByb2Nlc3NpbmdUaW1lb3V0R3Jvd0ZhY3RvcixcbiAgICAgICAgICAgIERFRkFVTFRfTUVTU0FHRV9QUk9DRVNTSU5HX0dST1dfRkFDVE9SLFxuICAgICAgICAgICAgcmV0cnlJbmRleCxcbiAgICAgICAgKTtcbiAgICB9XG5cbiAgICB3YWl0Rm9yVGltZW91dCgpOiBudW1iZXIge1xuICAgICAgICByZXR1cm4gdmFsdWVPckRlZmF1bHQodGhpcy5kYXRhLndhaXRGb3JUaW1lb3V0LCBERUZBVUxUX1dBSVRfRk9SX1RJTUVPVVQpO1xuICAgIH1cblxuICAgIG5ldHdvcmtUaW1lb3V0KCk6IG51bWJlciB7XG4gICAgICAgIHJldHVybiB2YWx1ZU9yRGVmYXVsdCh0aGlzLmRhdGEubmV0d29ya1RpbWVvdXQsIERFRkFVTFRfTkVUV09SS19USU1FT1VUKTtcbiAgICB9XG5cbiAgICBpc05ldHdvcmtUaW1lb3V0RXhwaXJlZFNpbmNlKHN0YXJ0VGltZTogbnVtYmVyKTogYm9vbGVhbiB7XG4gICAgICAgIGNvbnN0IHRpbWVvdXQgPSB0aGlzLm5ldHdvcmtUaW1lb3V0KCk7XG4gICAgICAgIGlmICh0aW1lb3V0ID09PSAwKSB7XG4gICAgICAgICAgICByZXR1cm4gZmFsc2U7XG4gICAgICAgIH1cbiAgICAgICAgcmV0dXJuIERhdGUubm93KCkgPiAoc3RhcnRUaW1lICsgdGltZW91dCk7XG4gICAgfVxuXG4gICAgbG9nKC4uLmFyZ3M6IGFueVtdKSB7XG4gICAgICAgIGNvbnN0IHByb2ZpbGUgPSAodGhpcy5fcHJvZmlsZVN0YXJ0IHx8IDApICE9PSAwO1xuICAgICAgICBpZiAocHJvZmlsZSkge1xuICAgICAgICAgICAgY29uc3QgY3VycmVudCA9IERhdGUubm93KCkgLyAxMDAwO1xuICAgICAgICAgICAgY29uc3QgdGltZVN0cmluZyA9IGAke1N0cmluZyhjdXJyZW50LnRvRml4ZWQoMykpfSAke1xuICAgICAgICAgICAgICAgIFN0cmluZygoY3VycmVudCAtIHRoaXMuX3Byb2ZpbGVTdGFydCkudG9GaXhlZCgzKSl9ICR7XG4gICAgICAgICAgICAgICAgU3RyaW5nKChjdXJyZW50IC0gdGhpcy5fcHJvZmlsZVByZXYpLnRvRml4ZWQoMykpfWA7XG4gICAgICAgICAgICBpZiAodGhpcy5fbG9nVmVyYm9zZSkge1xuICAgICAgICAgICAgICAgIGNvbnNvbGUubG9nKGBbJHt0aW1lU3RyaW5nfV1cXG5gLCAuLi5hcmdzKTtcbiAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgICAgY29uc29sZS5sb2coYFske3RpbWVTdHJpbmd9XVxcbmAsIGFyZ3NbMF0pO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgdGhpcy5fcHJvZmlsZVByZXYgPSBjdXJyZW50O1xuICAgICAgICB9IGVsc2UgaWYgKHRoaXMuX2xvZ1ZlcmJvc2UpIHtcbiAgICAgICAgICAgIGNvbnNvbGUubG9nKGBbJHtEYXRlLm5vdygpIC8gMTAwMH1dYCwgLi4uYXJncyk7XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICBzdGFydFByb2ZpbGUoKSB7XG4gICAgICAgIHRoaXMuX3Byb2ZpbGVTdGFydCA9IERhdGUubm93KCkgLyAxMDAwO1xuICAgICAgICB0aGlzLl9wcm9maWxlUHJldiA9IHRoaXMuX3Byb2ZpbGVTdGFydDtcbiAgICB9XG5cbiAgICBzdG9wUHJvZmlsZSgpIHtcbiAgICAgICAgdGhpcy5fcHJvZmlsZVN0YXJ0ID0gdGhpcy5fcHJvZmlsZVByZXYgPSAwO1xuICAgIH1cblxuICAgIGFzeW5jIGdldFZlcnNpb24oKTogUHJvbWlzZTxzdHJpbmc+IHtcbiAgICAgICAgcmV0dXJuIHRoaXMucmVxdWVzdENvcmUoJ3ZlcnNpb24nKTtcbiAgICB9XG5cblxuICAgIGFzeW5jIHNldHVwKCk6IFByb21pc2U8dm9pZD4ge1xuICAgICAgICBpZiAodGhpcy5kYXRhKSB7XG4gICAgICAgICAgICBjb25zdCBjb3JlQ29uZmlnID0gT2JqZWN0LmFzc2lnbih7fSwgdGhpcy5kYXRhKTtcbiAgICAgICAgICAgIGRlbGV0ZSBjb3JlQ29uZmlnLnRyYWNlcjtcbiAgICAgICAgICAgIGF3YWl0IHRoaXMucmVxdWVzdENvcmUoJ3NldHVwJywgY29yZUNvbmZpZyk7XG4gICAgICAgIH1cbiAgICAgICAgdGhpcy5fbG9nVmVyYm9zZSA9IHRoaXMuZGF0YS5sb2dfdmVyYm9zZSB8fCBmYWxzZTtcbiAgICAgICAgaWYgKHRoaXMuX2xvZ1ZlcmJvc2UpIHtcbiAgICAgICAgICAgIHRoaXMuc3RhcnRQcm9maWxlKCk7XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICBfbG9nVmVyYm9zZTogYm9vbGVhbjtcblxuICAgIF9wcm9maWxlU3RhcnQ6IG51bWJlcjtcblxuICAgIF9wcm9maWxlUHJldjogbnVtYmVyO1xufVxuXG5UT05Db25maWdNb2R1bGUubW9kdWxlTmFtZSA9ICdUT05Db25maWdNb2R1bGUnO1xuIl19