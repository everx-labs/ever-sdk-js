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

function _createSuper(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct(); return function _createSuperInternal() { var Super = _getPrototypeOf(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = _getPrototypeOf(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return _possibleConstructorReturn(this, result); }; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Date.prototype.toString.call(Reflect.construct(Date, [], function () {})); return true; } catch (e) { return false; } }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

var DEFAULT_MESSAGE_RETRIES_COUNT = 10;
var DEFAULT_MESSAGE_PROCESSING_TIMEOUT = 40000;
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

    _defineProperty(_assertThisInitialized(_this), "_errLogVerbose", void 0);

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
    key: "getConfigServer",
    value: function getConfigServer() {
      var _this$data, _this$data$servers;

      return ((_this$data = this.data) === null || _this$data === void 0 ? void 0 : (_this$data$servers = _this$data.servers) === null || _this$data$servers === void 0 ? void 0 : _this$data$servers[0]) || '';
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
    key: "messageProcessingTimeout",
    value: function messageProcessingTimeout() {
      var timeout = this.data.messageProcessingTimeout;
      return timeout === 0 ? 0 : timeout || DEFAULT_MESSAGE_PROCESSING_TIMEOUT;
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

                this._errLogVerbose = this.data.err_log_verbose || true;

              case 8:
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy9tb2R1bGVzL1RPTkNvbmZpZ01vZHVsZS5qcyJdLCJuYW1lcyI6WyJERUZBVUxUX01FU1NBR0VfUkVUUklFU19DT1VOVCIsIkRFRkFVTFRfTUVTU0FHRV9QUk9DRVNTSU5HX1RJTUVPVVQiLCJERUZBVUxUX1dBSVRfRk9SX1RJTUVPVVQiLCJERUZBVUxUX05FVFdPUktfVElNRU9VVCIsIkRFRkFVTFRfT1VUX09GX1NZTkNfVEhSRVNIT0xEIiwiVVJMUGFydHMiLCJmaXgiLCJwcm90b2NvbCIsImhvc3QiLCJwYXRoIiwicXVlcnkiLCJ1cmwiLCJwcm90b2NvbFNlcGFyYXRvclBvcyIsImluZGV4T2YiLCJwcm90b2NvbEVuZCIsInF1ZXN0aW9uUG9zIiwicXVlcnlTdGFydCIsImxlbmd0aCIsInBhdGhFbmQiLCJwYXRoU2VwYXJhdG9yUG9zIiwicGF0aFN0YXJ0Iiwic3Vic3RyaW5nIiwiYmFzZVVybCIsImJhc2VQYXJ0cyIsInBhcnNlIiwiZml4UHJvdG9jb2wiLCJ4IiwiZml4SG9zdCIsInRvU3RyaW5nIiwicmVwbGFjZSIsInN0YXJ0c1dpdGgiLCJkZWZhdWx0U2VydmVyIiwidmFsdWVPckRlZmF1bHQiLCJ2YWx1ZSIsImRlZmF1bHRWYWx1ZSIsInVuZGVmaW5lZCIsIlRPTkNvbmZpZ01vZHVsZSIsImNvbnRleHQiLCJkYXRhIiwic2VydmVycyIsInB1c2giLCJ0cmFjZXIiLCJub29wVHJhY2VyIiwib3V0T2ZTeW5jVGhyZXNob2xkIiwibWVzc2FnZVJldHJpZXNDb3VudCIsInRpbWVvdXQiLCJtZXNzYWdlUHJvY2Vzc2luZ1RpbWVvdXQiLCJ3YWl0Rm9yVGltZW91dCIsIm5ldHdvcmtUaW1lb3V0Iiwic3RhcnRUaW1lIiwiRGF0ZSIsIm5vdyIsInByb2ZpbGUiLCJfcHJvZmlsZVN0YXJ0IiwiYXJncyIsImN1cnJlbnQiLCJ0aW1lU3RyaW5nIiwiU3RyaW5nIiwidG9GaXhlZCIsIl9wcm9maWxlUHJldiIsIl9sb2dWZXJib3NlIiwiY29uc29sZSIsImxvZyIsInJlcXVlc3RDb3JlIiwiY29yZUNvbmZpZyIsIk9iamVjdCIsImFzc2lnbiIsImxvZ192ZXJib3NlIiwic3RhcnRQcm9maWxlIiwiX2VyckxvZ1ZlcmJvc2UiLCJlcnJfbG9nX3ZlcmJvc2UiLCJUT05Nb2R1bGUiLCJtb2R1bGVOYW1lIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7QUFPQTs7QUFDQTs7QUFDQTs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFFQSxJQUFNQSw2QkFBNkIsR0FBRyxFQUF0QztBQUNBLElBQU1DLGtDQUFrQyxHQUFHLEtBQTNDO0FBQ0EsSUFBTUMsd0JBQXdCLEdBQUcsS0FBakM7QUFDQSxJQUFNQyx1QkFBdUIsR0FBRyxDQUFoQztBQUVBLElBQU1DLDZCQUE2QixHQUFHLEtBQXRDOztJQUVhQyxROzs7Z0NBNEJHQyxHLEVBQXNDO0FBQzlDLFdBQUtDLFFBQUwsR0FBZ0JELEdBQUcsQ0FBQyxLQUFLQyxRQUFOLENBQW5CO0FBQ0EsYUFBTyxJQUFQO0FBQ0g7Ozs0QkFFT0QsRyxFQUFzQztBQUMxQyxXQUFLRSxJQUFMLEdBQVlGLEdBQUcsQ0FBQyxLQUFLRSxJQUFOLENBQWY7QUFDQSxhQUFPLElBQVA7QUFDSDs7OzRCQUVPRixHLEVBQXNDO0FBQzFDLFdBQUtHLElBQUwsR0FBWUgsR0FBRyxDQUFDLEtBQUtHLElBQU4sQ0FBZjtBQUNBLGFBQU8sSUFBUDtBQUNIOzs7NkJBRVFILEcsRUFBc0M7QUFDM0MsV0FBS0ksS0FBTCxHQUFhSixHQUFHLENBQUMsS0FBS0ksS0FBTixDQUFoQjtBQUNBLGFBQU8sSUFBUDtBQUNIOzs7MEJBN0NZQyxHLEVBQXVCO0FBQ2hDLFVBQU1DLG9CQUFvQixHQUFHRCxHQUFHLENBQUNFLE9BQUosQ0FBWSxLQUFaLENBQTdCO0FBQ0EsVUFBTUMsV0FBVyxHQUFHRixvQkFBb0IsSUFBSSxDQUF4QixHQUE0QkEsb0JBQW9CLEdBQUcsQ0FBbkQsR0FBdUQsQ0FBM0U7QUFDQSxVQUFNRyxXQUFXLEdBQUdKLEdBQUcsQ0FB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YSxJQUE3QixlQUF5Q0csSUFBekM7QUFDSDtBQUNKOzs7bUNBRWM7QUFDWCxXQUFLRCxhQUFMLEdBQXFCSCxJQUFJLENBQUNDLEdBQUwsS0FBYSxJQUFsQztBQUNBLFdBQUtRLFlBQUwsR0FBb0IsS0FBS04sYUFBekI7QUFDSDs7O2tDQUVhO0FBQ1YsV0FBS0EsYUFBTCxHQUFxQixLQUFLTSxZQUFMLEdBQW9CLENBQXpDO0FBQ0g7Ozs7Ozs7OztpREFHVSxLQUFLSSxXQUFMLENBQWlCLFNBQWpCLEM7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7cUJBS0gsS0FBS3pCLEk7Ozs7O0FBQ0MwQixnQkFBQUEsVSxHQUFhQyxNQUFNLENBQUNDLE1BQVAsQ0FBYyxFQUFkLEVBQWtCLEtBQUs1QixJQUF2QixDO0FBQ25CLHVCQUFPMEIsVUFBVSxDQUFDdkIsTUFBbEI7O3VCQUNNLEtBQUtzQixXQUFMLENBQWlCLE9BQWpCLEVBQTBCQyxVQUExQixDOzs7QUFFVixxQkFBS0osV0FBTCxHQUFtQixLQUFLdEIsSUFBTCxDQUFVNkIsV0FBVixJQUF5QixLQUE1Qzs7QUFDQSxvQkFBSSxLQUFLUCxXQUFULEVBQXNCO0FBQ2xCLHVCQUFLUSxZQUFMO0FBQ0g7O0FBQ0QscUJBQUtDLGNBQUwsR0FBc0IsS0FBSy9CLElBQUwsQ0FBVWdDLGVBQVYsSUFBNkIsSUFBbkQ7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7RUE5RnFDQyxxQjs7O0FBd0c3Q25DLGVBQWUsQ0FBQ29DLFVBQWhCLEdBQTZCLGlCQUE3QiIsInNvdXJjZXNDb250ZW50IjpbIi8qXG4gKiBDb3B5cmlnaHQgMjAxOC0yMDIwIFRPTiBERVYgU09MVVRJT05TIExURC5cbiAqL1xuXG4vLyBAZmxvd1xuaW1wb3J0IHR5cGUgeyBUT05Db25maWdEYXRhIH0gZnJvbSBcIi4uLy4uL3R5cGVzXCI7XG5pbXBvcnQgdHlwZSB7IFRPTk1vZHVsZUNvbnRleHQgfSBmcm9tIFwiLi4vVE9OTW9kdWxlXCI7XG5pbXBvcnQgeyBUT05Nb2R1bGUgfSBmcm9tICcuLi9UT05Nb2R1bGUnO1xuaW1wb3J0IHsgVHJhY2VyIH0gZnJvbSAnb3BlbnRyYWNpbmcnO1xuaW1wb3J0IHsgdHJhY2VyIGFzIG5vb3BUcmFjZXIgfSBmcm9tIFwib3BlbnRyYWNpbmcvbGliL25vb3BcIjtcblxuY29uc3QgREVGQVVMVF9NRVNTQUdFX1JFVFJJRVNfQ09VTlQgPSAxMDtcbmNvbnN0IERFRkFVTFRfTUVTU0FHRV9QUk9DRVNTSU5HX1RJTUVPVVQgPSA0MDAwMDtcbmNvbnN0IERFRkFVTFRfV0FJVF9GT1JfVElNRU9VVCA9IDQwMDAwO1xuY29uc3QgREVGQVVMVF9ORVRXT1JLX1RJTUVPVVQgPSAwO1xuXG5jb25zdCBERUZBVUxUX09VVF9PRl9TWU5DX1RIUkVTSE9MRCA9IDE1MDAwO1xuXG5leHBvcnQgY2xhc3MgVVJMUGFydHMge1xuICAgIHN0YXRpYyBwYXJzZSh1cmw6IHN0cmluZyk6IFVSTFBhcnRzIHtcbiAgICAgICAgY29uc3QgcHJvdG9jb2xTZXBhcmF0b3JQb3MgPSB1cmwuaW5kZXhPZignOi8vJyk7XG4gICAgICAgIGNvbnN0IHByb3RvY29sRW5kID0gcHJvdG9jb2xTZXBhcmF0b3JQb3MgPj0gMCA/IHByb3RvY29sU2VwYXJhdG9yUG9zICsgMyA6IDA7XG4gICAgICAgIGNvbnN0IHF1ZXN0aW9uUG9zID0gdXJsLmluZGV4T2YoJz8nLCBwcm90b2NvbEVuZCk7XG4gICAgICAgIGNvbnN0IHF1ZXJ5U3RhcnQgPSBxdWVzdGlvblBvcyA+PSAwID8gcXVlc3Rpb25Qb3MgKyAxIDogdXJsLmxlbmd0aDtcbiAgICAgICAgY29uc3QgcGF0aEVuZCA9IHF1ZXN0aW9uUG9zID49IDAgPyBxdWVzdGlvblBvcyA6IHVybC5sZW5ndGg7XG4gICAgICAgIGNvbnN0IHBhdGhTZXBhcmF0b3JQb3MgPSB1cmwuaW5kZXhPZignLycsIHByb3RvY29sRW5kKTtcbiAgICAgICAgLy8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIG5vLW5lc3RlZC10ZXJuYXJ5XG4gICAgICAgIGNvbnN0IHBhdGhTdGFydCA9IHBhdGhTZXBhcmF0b3JQb3MgPj0gMFxuICAgICAgICAgICAgPyAocGF0aFNlcGFyYXRvclBvcyA8IHBhdGhFbmQgPyBwYXRoU2VwYXJhdG9yUG9zIDogcGF0aEVuZClcbiAgICAgICAgICAgIDogKHF1ZXN0aW9uUG9zID49IDAgPyBxdWVzdGlvblBvcyA6IHVybC5sZW5ndGgpO1xuICAgICAgICByZXR1cm4gbmV3IFVSTFBhcnRzKFxuICAgICAgICAgICAgdXJsLnN1YnN0cmluZygwLCBwcm90b2NvbEVuZCksXG4gICAgICAgICAgICB1cmwuc3Vic3RyaW5nKHByb3RvY29sRW5kLCBwYXRoU3RhcnQpLFxuICAgICAgICAgICAgdXJsLnN1YnN0cmluZyhwYXRoU3RhcnQsIHBhdGhFbmQpLFxuICAgICAgICAgICAgdXJsLnN1YnN0cmluZyhxdWVyeVN0YXJ0KSxcbiAgICAgICAgKTtcbiAgICB9XG5cbiAgICBzdGF0aWMgcmVzb2x2ZVVybChiYXNlVXJsOiBzdHJpbmcsIHVybDogc3RyaW5nKTogc3RyaW5nIHtcbiAgICAgICAgY29uc3QgYmFzZVBhcnRzID0gVVJMUGFydHMucGFyc2UoYmFzZVVybCk7XG4gICAgICAgIHJldHVybiBVUkxQYXJ0cy5wYXJzZSh1cmwpXG4gICAgICAgICAgICAuZml4UHJvdG9jb2woeCA9PiB4IHx8IGJhc2VQYXJ0cy5wcm90b2NvbClcbiAgICAgICAgICAgIC5maXhIb3N0KHggPT4geCB8fCBiYXNlUGFydHMuaG9zdClcbiAgICAgICAgICAgIC50b1N0cmluZygpO1xuICAgIH1cblxuICAgIGZpeFByb3RvY29sKGZpeDogKHA6IHN0cmluZykgPT4gc3RyaW5nKTogVVJMUGFydHMge1xuICAgICAgICB0aGlzLnByb3RvY29sID0gZml4KHRoaXMucHJvdG9jb2wpO1xuICAgICAgICByZXR1cm4gdGhpcztcbiAgICB9XG5cbiAgICBmaXhIb3N0KGZpeDogKHA6IHN0cmluZykgPT4gc3RyaW5nKTogVVJMUGFydHMge1xuICAgICAgICB0aGlzLmhvc3QgPSBmaXgodGhpcy5ob3N0KTtcbiAgICAgICAgcmV0dXJuIHRoaXM7XG4gICAgfVxuXG4gICAgZml4UGF0aChmaXg6IChwOiBzdHJpbmcpID0+IHN0cmluZyk6IFVSTFBhcnRzIHtcbiAgICAgICAgdGhpcy5wYXRoID0gZml4KHRoaXMucGF0aCk7XG4gICAgICAgIHJldHVybiB0aGlzO1xuICAgIH1cblxuICAgIGZpeFF1ZXJ5KGZpeDogKHE6IHN0cmluZykgPT4gc3RyaW5nKTogVVJMUGFydHMge1xuICAgICAgICB0aGlzLnF1ZXJ5ID0gZml4KHRoaXMucXVlcnkpO1xuICAgICAgICByZXR1cm4gdGhpcztcbiAgICB9XG5cblxuICAgIHByb3RvY29sOiBzdHJpbmc7XG5cbiAgICBob3N0OiBzdHJpbmc7XG5cbiAgICBwYXRoOiBzdHJpbmc7XG5cbiAgICBxdWVyeTogc3RyaW5nO1xuXG4gICAgY29uc3RydWN0b3IocHJvdG9jb2w6IHN0cmluZywgaG9zdDogc3RyaW5nLCBwYXRoOiBzdHJpbmcsIHF1ZXJ5OiBzdHJpbmcpIHtcbiAgICAgICAgdGhpcy5wcm90b2NvbCA9IHByb3RvY29sO1xuICAgICAgICB0aGlzLmhvc3QgPSBob3N0O1xuICAgICAgICB0aGlzLnBhdGggPSBwYXRoO1xuICAgICAgICB0aGlzLnF1ZXJ5ID0gcXVlcnk7XG4gICAgfVxuXG5cbiAgICB0b1N0cmluZygpOiBzdHJpbmcge1xuICAgICAgICBsZXQgeyBwYXRoIH0gPSB0aGlzO1xuICAgICAgICB3aGlsZSAocGF0aC5pbmRleE9mKCcvLycpID49IDApIHtcbiAgICAgICAgICAgIHBhdGggPSBwYXRoLnJlcGxhY2UoJy8vJywgJy8nKTtcbiAgICAgICAgfVxuICAgICAgICBpZiAocGF0aCAhPT0gJycgJiYgIXBhdGguc3RhcnRzV2l0aCgnLycpKSB7XG4gICAgICAgICAgICBwYXRoID0gYC8ke3BhdGh9YDtcbiAgICAgICAgfVxuICAgICAgICByZXR1cm4gYCR7dGhpcy5wcm90b2NvbH0ke3RoaXMuaG9zdH0ke3BhdGh9JHt0aGlzLnF1ZXJ5ICE9PSAnJyA/ICc/JyA6ICcnfSR7dGhpcy5xdWVyeX1gO1xuICAgIH1cbn1cbmNvbnN0IGRlZmF1bHRTZXJ2ZXIgPSAnaHR0cDovL2xvY2FsaG9zdCc7XG5mdW5jdGlvbiB2YWx1ZU9yRGVmYXVsdCh2YWx1ZSwgZGVmYXVsdFZhbHVlKSB7XG4gICAgcmV0dXJuICh2YWx1ZSA9PT0gdW5kZWZpbmVkIHx8IHZhbHVlID09PSBudWxsKSA/IGRlZmF1bHRWYWx1ZSA6IHZhbHVlO1xufVxuXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBUT05Db25maWdNb2R1bGUgZXh0ZW5kcyBUT05Nb2R1bGUge1xuICAgIGRhdGE6IFRPTkNvbmZpZ0RhdGE7XG4gICAgdHJhY2VyOiBUcmFjZXI7XG5cbiAgICBjb25zdHJ1Y3Rvcihjb250ZXh0OiBUT05Nb2R1bGVDb250ZXh0KSB7XG4gICAgICAgIHN1cGVyKGNvbnRleHQpO1xuICAgICAgICB0aGlzLmRhdGEgPSB7XG4gICAgICAgICAgICBzZXJ2ZXJzOiBbZGVmYXVsdFNlcnZlcl0sXG4gICAgICAgIH1cbiAgICB9XG5cbiAgICBzZXREYXRhKGRhdGE6IFRPTkNvbmZpZ0RhdGEpIHtcbiAgICAgICAgdGhpcy5kYXRhID0gZGF0YSB8fCB0aGlzLmRhdGE7XG4gICAgICAgIGlmICh0aGlzLmRhdGEuc2VydmVycy5sZW5ndGggPT09IDApIHtcbiAgICAgICAgICAgIHRoaXMuZGF0YS5zZXJ2ZXJzLnB1c2goZGVmYXVsdFNlcnZlcik7XG4gICAgICAgIH1cbiAgICAgICAgdGhpcy50cmFjZXIgPSBkYXRhLnRyYWNlciB8fCBub29wVHJhY2VyO1xuICAgIH1cblxuICAgIGdldENvbmZpZ1NlcnZlcigpOiBzdHJpbmcge1xuICAgICAgICByZXR1cm4gdGhpcy5kYXRhPy5zZXJ2ZXJzPy5bMF0gfHwgJyc7XG4gICAgfVxuXG4gICAgb3V0T2ZTeW5jVGhyZXNob2xkKCk6IG51bWJlciB7XG4gICAgICAgIHJldHVybiB2YWx1ZU9yRGVmYXVsdCh0aGlzLmRhdGEub3V0T2ZTeW5jVGhyZXNob2xkLCBERUZBVUxUX09VVF9PRl9TWU5DX1RIUkVTSE9MRCk7XG4gICAgfVxuXG4gICAgbWVzc2FnZVJldHJpZXNDb3VudCgpOiBudW1iZXIge1xuICAgICAgICByZXR1cm4gdmFsdWVPckRlZmF1bHQodGhpcy5kYXRhLm1lc3NhZ2VSZXRyaWVzQ291bnQsIERFRkFVTFRfTUVTU0FHRV9SRVRSSUVTX0NPVU5UKTtcbiAgICB9XG5cbiAgICBtZXNzYWdlUHJvY2Vzc2luZ1RpbWVvdXQoKTogbnVtYmVyIHtcbiAgICAgICAgY29uc3QgdGltZW91dCA9IHRoaXMuZGF0YS5tZXNzYWdlUHJvY2Vzc2luZ1RpbWVvdXQ7XG4gICAgICAgIHJldHVybiB0aW1lb3V0ID09PSAwID8gMCA6ICh0aW1lb3V0IHx8IERFRkFVTFRfTUVTU0FHRV9QUk9DRVNTSU5HX1RJTUVPVVQpO1xuICAgIH1cblxuICAgIHdhaXRGb3JUaW1lb3V0KCk6IG51bWJlciB7XG4gICAgICAgIHJldHVybiB2YWx1ZU9yRGVmYXVsdCh0aGlzLmRhdGEud2FpdEZvclRpbWVvdXQsIERFRkFVTFRfV0FJVF9GT1JfVElNRU9VVCk7XG4gICAgfVxuXG4gICAgbmV0d29ya1RpbWVvdXQoKTogbnVtYmVyIHtcbiAgICAgICAgcmV0dXJuIHZhbHVlT3JEZWZhdWx0KHRoaXMuZGF0YS5uZXR3b3JrVGltZW91dCwgREVGQVVMVF9ORVRXT1JLX1RJTUVPVVQpO1xuICAgIH1cblxuICAgIGlzTmV0d29ya1RpbWVvdXRFeHBpcmVkU2luY2Uoc3RhcnRUaW1lOiBudW1iZXIpOiBib29sZWFuIHtcbiAgICAgICAgY29uc3QgdGltZW91dCA9IHRoaXMubmV0d29ya1RpbWVvdXQoKTtcbiAgICAgICAgaWYgKHRpbWVvdXQgPT09IDApIHtcbiAgICAgICAgICAgIHJldHVybiBmYWxzZTtcbiAgICAgICAgfVxuICAgICAgICByZXR1cm4gRGF0ZS5ub3coKSA+IChzdGFydFRpbWUgKyB0aW1lb3V0KTtcbiAgICB9XG5cbiAgICBsb2coLi4uYXJnczogYW55W10pIHtcbiAgICAgICAgY29uc3QgcHJvZmlsZSA9ICh0aGlzLl9wcm9maWxlU3RhcnQgfHwgMCkgIT09IDA7XG4gICAgICAgIGlmIChwcm9maWxlKSB7XG4gICAgICAgICAgICBjb25zdCBjdXJyZW50ID0gRGF0ZS5ub3coKSAvIDEwMDA7XG4gICAgICAgICAgICBjb25zdCB0aW1lU3RyaW5nID0gYCR7U3RyaW5nKGN1cnJlbnQudG9GaXhlZCgzKSl9ICR7XG4gICAgICAgICAgICAgICAgU3RyaW5nKChjdXJyZW50IC0gdGhpcy5fcHJvZmlsZVN0YXJ0KS50b0ZpeGVkKDMpKX0gJHtcbiAgICAgICAgICAgICAgICBTdHJpbmcoKGN1cnJlbnQgLSB0aGlzLl9wcm9maWxlUHJldikudG9GaXhlZCgzKSl9YDtcbiAgICAgICAgICAgIGlmICh0aGlzLl9sb2dWZXJib3NlKSB7XG4gICAgICAgICAgICAgICAgY29uc29sZS5sb2coYFske3RpbWVTdHJpbmd9XVxcbmAsIC4uLmFyZ3MpO1xuICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgICBjb25zb2xlLmxvZyhgWyR7dGltZVN0cmluZ31dXFxuYCwgYXJnc1swXSk7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICB0aGlzLl9wcm9maWxlUHJldiA9IGN1cnJlbnQ7XG4gICAgICAgIH0gZWxzZSBpZiAodGhpcy5fbG9nVmVyYm9zZSkge1xuICAgICAgICAgICAgY29uc29sZS5sb2coYFske0RhdGUubm93KCkgLyAxMDAwfV1gLCAuLi5hcmdzKTtcbiAgICAgICAgfVxuICAgIH1cblxuICAgIHN0YXJ0UHJvZmlsZSgpIHtcbiAgICAgICAgdGhpcy5fcHJvZmlsZVN0YXJ0ID0gRGF0ZS5ub3coKSAvIDEwMDA7XG4gICAgICAgIHRoaXMuX3Byb2ZpbGVQcmV2ID0gdGhpcy5fcHJvZmlsZVN0YXJ0O1xuICAgIH1cblxuICAgIHN0b3BQcm9maWxlKCkge1xuICAgICAgICB0aGlzLl9wcm9maWxlU3RhcnQgPSB0aGlzLl9wcm9maWxlUHJldiA9IDA7XG4gICAgfVxuXG4gICAgYXN5bmMgZ2V0VmVyc2lvbigpOiBQcm9taXNlPHN0cmluZz4ge1xuICAgICAgICByZXR1cm4gdGhpcy5yZXF1ZXN0Q29yZSgndmVyc2lvbicpO1xuICAgIH1cblxuXG4gICAgYXN5bmMgc2V0dXAoKTogUHJvbWlzZTx2b2lkPiB7XG4gICAgICAgIGlmICh0aGlzLmRhdGEpIHtcbiAgICAgICAgICAgIGNvbnN0IGNvcmVDb25maWcgPSBPYmplY3QuYXNzaWduKHt9LCB0aGlzLmRhdGEpO1xuICAgICAgICAgICAgZGVsZXRlIGNvcmVDb25maWcudHJhY2VyO1xuICAgICAgICAgICAgYXdhaXQgdGhpcy5yZXF1ZXN0Q29yZSgnc2V0dXAnLCBjb3JlQ29uZmlnKTtcbiAgICAgICAgfVxuICAgICAgICB0aGlzLl9sb2dWZXJib3NlID0gdGhpcy5kYXRhLmxvZ192ZXJib3NlIHx8IGZhbHNlO1xuICAgICAgICBpZiAodGhpcy5fbG9nVmVyYm9zZSkge1xuICAgICAgICAgICAgdGhpcy5zdGFydFByb2ZpbGUoKTtcbiAgICAgICAgfVxuICAgICAgICB0aGlzLl9lcnJMb2dWZXJib3NlID0gdGhpcy5kYXRhLmVycl9sb2dfdmVyYm9zZSB8fCB0cnVlO1xuICAgIH1cblxuICAgIF9sb2dWZXJib3NlOiBib29sZWFuO1xuICAgIF9lcnJMb2dWZXJib3NlOiBib29sZWFuO1xuICAgIF9wcm9maWxlU3RhcnQ6IG51bWJlcjtcblxuICAgIF9wcm9maWxlUHJldjogbnVtYmVyO1xufVxuXG5UT05Db25maWdNb2R1bGUubW9kdWxlTmFtZSA9ICdUT05Db25maWdNb2R1bGUnO1xuIl19