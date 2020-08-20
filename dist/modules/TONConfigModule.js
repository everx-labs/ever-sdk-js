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

var MAX_MESSAGE_TIMEOUT = 5 * 60000;
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy9tb2R1bGVzL1RPTkNvbmZpZ01vZHVsZS5qcyJdLCJuYW1lcyI6WyJNQVhfTUVTU0FHRV9USU1FT1VUIiwiREVGQVVMVF9NRVNTQUdFX1JFVFJJRVNfQ09VTlQiLCJERUZBVUxUX01FU1NBR0VfUFJPQ0VTU0lOR19USU1FT1VUIiwiREVGQVVMVF9XQUlUX0ZPUl9USU1FT1VUIiwiREVGQVVMVF9ORVRXT1JLX1RJTUVPVVQiLCJERUZBVUxUX09VVF9PRl9TWU5DX1RIUkVTSE9MRCIsIlVSTFBhcnRzIiwiZml4IiwicHJvdG9jb2wiLCJob3N0IiwicGF0aCIsInF1ZXJ5IiwidXJsIiwicHJvdG9jb2xTZXBhcmF0b3JQb3MiLCJpbmRleE9mIiwicHJvdG9jb2xFbmQiLCJxdWVzdGlvblBvcyIsInF1ZXJ5U3RhcnQiLCJsZW5ndGgiLCJwYXRoRW5kIiwicGF0aFNlcGFyYXRvclBvcyIsInBhdGhTdGFydCIsInN1YnN0cmluZyIsImJhc2VVcmwiLCJiYXNlUGFydHMiLCJwYXJzZSIsImZpeFByb3RvY29sIiwieCIsImZpeEhvc3QiLCJ0b1N0cmluZyIsInJlcGxhY2UiLCJzdGFydHNXaXRoIiwicmVzb2x2ZVRpbWVvdXQiLCJ0aW1lb3V0IiwiZGVmYXVsdFRpbWVvdXQiLCJncm93RmFjdG9yIiwiZGVmYXVsdEdyb3dGYWN0b3IiLCJyZXRyeUluZGV4IiwicmVzb2x2ZWRUaW1lb3V0IiwicmVzb2x2ZWRHcm93RmFjdG9yIiwiTWF0aCIsIm1pbiIsInBvdyIsImRlZmF1bHRTZXJ2ZXIiLCJ2YWx1ZU9yRGVmYXVsdCIsInZhbHVlIiwiZGVmYXVsdFZhbHVlIiwidW5kZWZpbmVkIiwiVE9OQ29uZmlnTW9kdWxlIiwiY29udGV4dCIsImRhdGEiLCJzZXJ2ZXJzIiwicHVzaCIsInRyYWNlciIsIm5vb3BUcmFjZXIiLCJvdXRPZlN5bmNUaHJlc2hvbGQiLCJtZXNzYWdlUmV0cmllc0NvdW50IiwibWVzc2FnZVByb2Nlc3NpbmdUaW1lb3V0Iiwid2FpdEZvclRpbWVvdXQiLCJuZXR3b3JrVGltZW91dCIsInN0YXJ0VGltZSIsIkRhdGUiLCJub3ciLCJwcm9maWxlIiwiX3Byb2ZpbGVTdGFydCIsImFyZ3MiLCJjdXJyZW50IiwidGltZVN0cmluZyIsIlN0cmluZyIsInRvRml4ZWQiLCJfcHJvZmlsZVByZXYiLCJfbG9nVmVyYm9zZSIsImNvbnNvbGUiLCJsb2ciLCJyZXF1ZXN0Q29yZSIsImNvcmVDb25maWciLCJPYmplY3QiLCJhc3NpZ24iLCJsb2dfdmVyYm9zZSIsInN0YXJ0UHJvZmlsZSIsIlRPTk1vZHVsZSIsIm1vZHVsZU5hbWUiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7OztBQU9BOztBQUNBOztBQUNBOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUVBLElBQU1BLG1CQUFtQixHQUFHLElBQUksS0FBaEM7QUFDQSxJQUFNQyw2QkFBNkIsR0FBRyxFQUF0QztBQUNBLElBQU1DLGtDQUFrQyxHQUFHLEtBQTNDO0FBQ0EsSUFBTUMsd0JBQXdCLEdBQUcsS0FBakM7QUFDQSxJQUFNQyx1QkFBdUIsR0FBRyxDQUFoQztBQUVBLElBQU1DLDZCQUE2QixHQUFHLEtBQXRDOztJQUVhQyxROzs7Z0NBNEJHQyxHLEVBQXNDO0FBQzlDLFdBQUtDLFFBQUwsR0FBZ0JELEdBQUcsQ0FBQyxLQUFLQyxRQUFOLENBQW5CO0FBQ0EsYUFBTyxJQUFQO0FBQ0g7Ozs0QkFFT0QsRyxFQUFzQztBQUMxQyxXQUFLRSxJQUFMLEdBQVlGLEdBQUcsQ0FBQyxLQUFLRSxJQUFOLENBQWY7QUFDQSxhQUFPLElBQVA7QUFDSDs7OzRCQUVPRixHLEVBQXNDO0FBQzFDLFdBQUtHLElBQUwsR0FBWUgsR0FBRyxDQUFDLEtBQUtHLElBQU4sQ0FBZjtBQUNBLGFBQU8sSUFBUDtBQUNIOzs7NkJBRVFILEcsRUFBc0M7QUFDM0MsV0FBS0ksS0FBTCxHQUFhSixHQUFHLENBQUMsS0FBS0ksS0FBTixDQUFoQjtBQUNBLGFBQU8sSUFBUDtBQUNIOzs7MEJBN0NZQyxHLEVBQXVCO0FBQ2hD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QXNCO0FBQ2xCLHVCQUFLUSxZQUFMO0FBQ0g7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7RUExRm9DQyxxQjs7O0FBb0c3Q2hDLGVBQWUsQ0FBQ2lDLFVBQWhCLEdBQTZCLGlCQUE3QiIsInNvdXJjZXNDb250ZW50IjpbIi8qXG4gKiBDb3B5cmlnaHQgMjAxOC0yMDIwIFRPTiBERVYgU09MVVRJT05TIExURC5cbiAqL1xuXG4vLyBAZmxvd1xuaW1wb3J0IHR5cGUgeyBUT05Db25maWdEYXRhIH0gZnJvbSBcIi4uLy4uL3R5cGVzXCI7XG5pbXBvcnQgdHlwZSB7IFRPTk1vZHVsZUNvbnRleHQgfSBmcm9tIFwiLi4vVE9OTW9kdWxlXCI7XG5pbXBvcnQgeyBUT05Nb2R1bGUgfSBmcm9tICcuLi9UT05Nb2R1bGUnO1xuaW1wb3J0IHsgVHJhY2VyIH0gZnJvbSAnb3BlbnRyYWNpbmcnO1xuaW1wb3J0IHsgdHJhY2VyIGFzIG5vb3BUcmFjZXIgfSBmcm9tIFwib3BlbnRyYWNpbmcvbGliL25vb3BcIjtcblxuY29uc3QgTUFYX01FU1NBR0VfVElNRU9VVCA9IDUgKiA2MDAwMDtcbmNvbnN0IERFRkFVTFRfTUVTU0FHRV9SRVRSSUVTX0NPVU5UID0gMTA7XG5jb25zdCBERUZBVUxUX01FU1NBR0VfUFJPQ0VTU0lOR19USU1FT1VUID0gNDAwMDA7XG5jb25zdCBERUZBVUxUX1dBSVRfRk9SX1RJTUVPVVQgPSA0MDAwMDtcbmNvbnN0IERFRkFVTFRfTkVUV09SS19USU1FT1VUID0gMDtcblxuY29uc3QgREVGQVVMVF9PVVRfT0ZfU1lOQ19USFJFU0hPTEQgPSAxNTAwMDtcblxuZXhwb3J0IGNsYXNzIFVSTFBhcnRzIHtcbiAgICBzdGF0aWMgcGFyc2UodXJsOiBzdHJpbmcpOiBVUkxQYXJ0cyB7XG4gICAgICAgIGNvbnN0IHByb3RvY29sU2VwYXJhdG9yUG9zID0gdXJsLmluZGV4T2YoJzovLycpO1xuICAgICAgICBjb25zdCBwcm90b2NvbEVuZCA9IHByb3RvY29sU2VwYXJhdG9yUG9zID49IDAgPyBwcm90b2NvbFNlcGFyYXRvclBvcyArIDMgOiAwO1xuICAgICAgICBjb25zdCBxdWVzdGlvblBvcyA9IHVybC5pbmRleE9mKCc/JywgcHJvdG9jb2xFbmQpO1xuICAgICAgICBjb25zdCBxdWVyeVN0YXJ0ID0gcXVlc3Rpb25Qb3MgPj0gMCA/IHF1ZXN0aW9uUG9zICsgMSA6IHVybC5sZW5ndGg7XG4gICAgICAgIGNvbnN0IHBhdGhFbmQgPSBxdWVzdGlvblBvcyA+PSAwID8gcXVlc3Rpb25Qb3MgOiB1cmwubGVuZ3RoO1xuICAgICAgICBjb25zdCBwYXRoU2VwYXJhdG9yUG9zID0gdXJsLmluZGV4T2YoJy8nLCBwcm90b2NvbEVuZCk7XG4gICAgICAgIC8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSBuby1uZXN0ZWQtdGVybmFyeVxuICAgICAgICBjb25zdCBwYXRoU3RhcnQgPSBwYXRoU2VwYXJhdG9yUG9zID49IDBcbiAgICAgICAgICAgID8gKHBhdGhTZXBhcmF0b3JQb3MgPCBwYXRoRW5kID8gcGF0aFNlcGFyYXRvclBvcyA6IHBhdGhFbmQpXG4gICAgICAgICAgICA6IChxdWVzdGlvblBvcyA+PSAwID8gcXVlc3Rpb25Qb3MgOiB1cmwubGVuZ3RoKTtcbiAgICAgICAgcmV0dXJuIG5ldyBVUkxQYXJ0cyhcbiAgICAgICAgICAgIHVybC5zdWJzdHJpbmcoMCwgcHJvdG9jb2xFbmQpLFxuICAgICAgICAgICAgdXJsLnN1YnN0cmluZyhwcm90b2NvbEVuZCwgcGF0aFN0YXJ0KSxcbiAgICAgICAgICAgIHVybC5zdWJzdHJpbmcocGF0aFN0YXJ0LCBwYXRoRW5kKSxcbiAgICAgICAgICAgIHVybC5zdWJzdHJpbmcocXVlcnlTdGFydCksXG4gICAgICAgICk7XG4gICAgfVxuXG4gICAgc3RhdGljIHJlc29sdmVVcmwoYmFzZVVybDogc3RyaW5nLCB1cmw6IHN0cmluZyk6IHN0cmluZyB7XG4gICAgICAgIGNvbnN0IGJhc2VQYXJ0cyA9IFVSTFBhcnRzLnBhcnNlKGJhc2VVcmwpO1xuICAgICAgICByZXR1cm4gVVJMUGFydHMucGFyc2UodXJsKVxuICAgICAgICAgICAgLmZpeFByb3RvY29sKHggPT4geCB8fCBiYXNlUGFydHMucHJvdG9jb2wpXG4gICAgICAgICAgICAuZml4SG9zdCh4ID0+IHggfHwgYmFzZVBhcnRzLmhvc3QpXG4gICAgICAgICAgICAudG9TdHJpbmcoKTtcbiAgICB9XG5cbiAgICBmaXhQcm90b2NvbChmaXg6IChwOiBzdHJpbmcpID0+IHN0cmluZyk6IFVSTFBhcnRzIHtcbiAgICAgICAgdGhpcy5wcm90b2NvbCA9IGZpeCh0aGlzLnByb3RvY29sKTtcbiAgICAgICAgcmV0dXJuIHRoaXM7XG4gICAgfVxuXG4gICAgZml4SG9zdChmaXg6IChwOiBzdHJpbmcpID0+IHN0cmluZyk6IFVSTFBhcnRzIHtcbiAgICAgICAgdGhpcy5ob3N0ID0gZml4KHRoaXMuaG9zdCk7XG4gICAgICAgIHJldHVybiB0aGlzO1xuICAgIH1cblxuICAgIGZpeFBhdGgoZml4OiAocDogc3RyaW5nKSA9PiBzdHJpbmcpOiBVUkxQYXJ0cyB7XG4gICAgICAgIHRoaXMucGF0aCA9IGZpeCh0aGlzLnBhdGgpO1xuICAgICAgICByZXR1cm4gdGhpcztcbiAgICB9XG5cbiAgICBmaXhRdWVyeShmaXg6IChxOiBzdHJpbmcpID0+IHN0cmluZyk6IFVSTFBhcnRzIHtcbiAgICAgICAgdGhpcy5xdWVyeSA9IGZpeCh0aGlzLnF1ZXJ5KTtcbiAgICAgICAgcmV0dXJuIHRoaXM7XG4gICAgfVxuXG5cbiAgICBwcm90b2NvbDogc3RyaW5nO1xuXG4gICAgaG9zdDogc3RyaW5nO1xuXG4gICAgcGF0aDogc3RyaW5nO1xuXG4gICAgcXVlcnk6IHN0cmluZztcblxuICAgIGNvbnN0cnVjdG9yKHByb3RvY29sOiBzdHJpbmcsIGhvc3Q6IHN0cmluZywgcGF0aDogc3RyaW5nLCBxdWVyeTogc3RyaW5nKSB7XG4gICAgICAgIHRoaXMucHJvdG9jb2wgPSBwcm90b2NvbDtcbiAgICAgICAgdGhpcy5ob3N0ID0gaG9zdDtcbiAgICAgICAgdGhpcy5wYXRoID0gcGF0aDtcbiAgICAgICAgdGhpcy5xdWVyeSA9IHF1ZXJ5O1xuICAgIH1cblxuXG4gICAgdG9TdHJpbmcoKTogc3RyaW5nIHtcbiAgICAgICAgbGV0IHsgcGF0aCB9ID0gdGhpcztcbiAgICAgICAgd2hpbGUgKHBhdGguaW5kZXhPZignLy8nKSA+PSAwKSB7XG4gICAgICAgICAgICBwYXRoID0gcGF0aC5yZXBsYWNlKCcvLycsICcvJyk7XG4gICAgICAgIH1cbiAgICAgICAgaWYgKHBhdGggIT09ICcnICYmICFwYXRoLnN0YXJ0c1dpdGgoJy8nKSkge1xuICAgICAgICAgICAgcGF0aCA9IGAvJHtwYXRofWA7XG4gICAgICAgIH1cbiAgICAgICAgcmV0dXJuIGAke3RoaXMucHJvdG9jb2x9JHt0aGlzLmhvc3R9JHtwYXRofSR7dGhpcy5xdWVyeSAhPT0gJycgPyAnPycgOiAnJ30ke3RoaXMucXVlcnl9YDtcbiAgICB9XG59XG5cbmZ1bmN0aW9uIHJlc29sdmVUaW1lb3V0KFxuICAgIHRpbWVvdXQ/OiBudW1iZXIsXG4gICAgZGVmYXVsdFRpbWVvdXQ6IG51bWJlcixcbiAgICBncm93RmFjdG9yPzogbnVtYmVyLFxuICAgIGRlZmF1bHRHcm93RmFjdG9yOiBudW1iZXIsXG4gICAgcmV0cnlJbmRleD86IG51bWJlcixcbik6IG51bWJlciB7XG4gICAgY29uc3QgcmVzb2x2ZWRUaW1lb3V0ID0gdGltZW91dCA9PT0gMCA/IDAgOiAodGltZW91dCB8fCBkZWZhdWx0VGltZW91dCk7XG4gICAgY29uc3QgcmVzb2x2ZWRHcm93RmFjdG9yID0gZ3Jvd0ZhY3RvciB8fCBkZWZhdWx0R3Jvd0ZhY3RvcjtcbiAgICByZXR1cm4gTWF0aC5taW4oXG4gICAgICAgIE1BWF9NRVNTQUdFX1RJTUVPVVQsXG4gICAgICAgIHJlc29sdmVkVGltZW91dCAqIE1hdGgucG93KHJlc29sdmVkR3Jvd0ZhY3RvciwgcmV0cnlJbmRleCB8fCAwKVxuICAgICk7XG59XG5cbmNvbnN0IGRlZmF1bHRTZXJ2ZXIgPSAnaHR0cDovL2xvY2FsaG9zdCc7XG5mdW5jdGlvbiB2YWx1ZU9yRGVmYXVsdCh2YWx1ZSwgZGVmYXVsdFZhbHVlKSB7XG4gICAgcmV0dXJuICh2YWx1ZSA9PT0gdW5kZWZpbmVkIHx8IHZhbHVlID09PSBudWxsKSA/IGRlZmF1bHRWYWx1ZSA6IHZhbHVlO1xufVxuXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBUT05Db25maWdNb2R1bGUgZXh0ZW5kcyBUT05Nb2R1bGUge1xuICAgIGRhdGE6IFRPTkNvbmZpZ0RhdGE7XG4gICAgdHJhY2VyOiBUcmFjZXI7XG5cbiAgICBjb25zdHJ1Y3Rvcihjb250ZXh0OiBUT05Nb2R1bGVDb250ZXh0KSB7XG4gICAgICAgIHN1cGVyKGNvbnRleHQpO1xuICAgICAgICB0aGlzLmRhdGEgPSB7XG4gICAgICAgICAgICBzZXJ2ZXJzOiBbZGVmYXVsdFNlcnZlcl0sXG4gICAgICAgIH1cbiAgICB9XG5cbiAgICBzZXREYXRhKGRhdGE6IFRPTkNvbmZpZ0RhdGEpIHtcbiAgICAgICAgdGhpcy5kYXRhID0gZGF0YSB8fCB0aGlzLmRhdGE7XG4gICAgICAgIGlmICh0aGlzLmRhdGEuc2VydmVycy5sZW5ndGggPT09IDApIHtcbiAgICAgICAgICAgIHRoaXMuZGF0YS5zZXJ2ZXJzLnB1c2goZGVmYXVsdFNlcnZlcik7XG4gICAgICAgIH1cbiAgICAgICAgdGhpcy50cmFjZXIgPSBkYXRhLnRyYWNlciB8fCBub29wVHJhY2VyO1xuICAgIH1cblxuXG4gICAgb3V0T2ZTeW5jVGhyZXNob2xkKCk6IG51bWJlciB7XG4gICAgICAgIHJldHVybiB2YWx1ZU9yRGVmYXVsdCh0aGlzLmRhdGEub3V0T2ZTeW5jVGhyZXNob2xkLCBERUZBVUxUX09VVF9PRl9TWU5DX1RIUkVTSE9MRCk7XG4gICAgfVxuXG4gICAgbWVzc2FnZVJldHJpZXNDb3VudCgpOiBudW1iZXIge1xuICAgICAgICByZXR1cm4gdmFsdWVPckRlZmF1bHQodGhpcy5kYXRhLm1lc3NhZ2VSZXRyaWVzQ291bnQsIERFRkFVTFRfTUVTU0FHRV9SRVRSSUVTX0NPVU5UKTtcbiAgICB9XG5cbiAgICBtZXNzYWdlUHJvY2Vzc2luZ1RpbWVvdXQoKTogbnVtYmVyIHtcbiAgICAgICAgY29uc3QgdGltZW91dCA9IHRoaXMuZGF0YS5tZXNzYWdlUHJvY2Vzc2luZ1RpbWVvdXQ7XG4gICAgICAgIHJldHVybiB0aW1lb3V0ID09PSAwID8gMCA6ICh0aW1lb3V0IHx8IERFRkFVTFRfTUVTU0FHRV9QUk9DRVNTSU5HX1RJTUVPVVQpO1xuICAgIH1cblxuICAgIHdhaXRGb3JUaW1lb3V0KCk6IG51bWJlciB7XG4gICAgICAgIHJldHVybiB2YWx1ZU9yRGVmYXVsdCh0aGlzLmRhdGEud2FpdEZvclRpbWVvdXQsIERFRkFVTFRfV0FJVF9GT1JfVElNRU9VVCk7XG4gICAgfVxuXG4gICAgbmV0d29ya1RpbWVvdXQoKTogbnVtYmVyIHtcbiAgICAgICAgcmV0dXJuIHZhbHVlT3JEZWZhdWx0KHRoaXMuZGF0YS5uZXR3b3JrVGltZW91dCwgREVGQVVMVF9ORVRXT1JLX1RJTUVPVVQpO1xuICAgIH1cblxuICAgIGlzTmV0d29ya1RpbWVvdXRFeHBpcmVkU2luY2Uoc3RhcnRUaW1lOiBudW1iZXIpOiBib29sZWFuIHtcbiAgICAgICAgY29uc3QgdGltZW91dCA9IHRoaXMubmV0d29ya1RpbWVvdXQoKTtcbiAgICAgICAgaWYgKHRpbWVvdXQgPT09IDApIHtcbiAgICAgICAgICAgIHJldHVybiBmYWxzZTtcbiAgICAgICAgfVxuICAgICAgICByZXR1cm4gRGF0ZS5ub3coKSA+IChzdGFydFRpbWUgKyB0aW1lb3V0KTtcbiAgICB9XG5cbiAgICBsb2coLi4uYXJnczogYW55W10pIHtcbiAgICAgICAgY29uc3QgcHJvZmlsZSA9ICh0aGlzLl9wcm9maWxlU3RhcnQgfHwgMCkgIT09IDA7XG4gICAgICAgIGlmIChwcm9maWxlKSB7XG4gICAgICAgICAgICBjb25zdCBjdXJyZW50ID0gRGF0ZS5ub3coKSAvIDEwMDA7XG4gICAgICAgICAgICBjb25zdCB0aW1lU3RyaW5nID0gYCR7U3RyaW5nKGN1cnJlbnQudG9GaXhlZCgzKSl9ICR7XG4gICAgICAgICAgICAgICAgU3RyaW5nKChjdXJyZW50IC0gdGhpcy5fcHJvZmlsZVN0YXJ0KS50b0ZpeGVkKDMpKX0gJHtcbiAgICAgICAgICAgICAgICBTdHJpbmcoKGN1cnJlbnQgLSB0aGlzLl9wcm9maWxlUHJldikudG9GaXhlZCgzKSl9YDtcbiAgICAgICAgICAgIGlmICh0aGlzLl9sb2dWZXJib3NlKSB7XG4gICAgICAgICAgICAgICAgY29uc29sZS5sb2coYFske3RpbWVTdHJpbmd9XVxcbmAsIC4uLmFyZ3MpO1xuICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgICBjb25zb2xlLmxvZyhgWyR7dGltZVN0cmluZ31dXFxuYCwgYXJnc1swXSk7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICB0aGlzLl9wcm9maWxlUHJldiA9IGN1cnJlbnQ7XG4gICAgICAgIH0gZWxzZSBpZiAodGhpcy5fbG9nVmVyYm9zZSkge1xuICAgICAgICAgICAgY29uc29sZS5sb2coYFske0RhdGUubm93KCkgLyAxMDAwfV1gLCAuLi5hcmdzKTtcbiAgICAgICAgfVxuICAgIH1cblxuICAgIHN0YXJ0UHJvZmlsZSgpIHtcbiAgICAgICAgdGhpcy5fcHJvZmlsZVN0YXJ0ID0gRGF0ZS5ub3coKSAvIDEwMDA7XG4gICAgICAgIHRoaXMuX3Byb2ZpbGVQcmV2ID0gdGhpcy5fcHJvZmlsZVN0YXJ0O1xuICAgIH1cblxuICAgIHN0b3BQcm9maWxlKCkge1xuICAgICAgICB0aGlzLl9wcm9maWxlU3RhcnQgPSB0aGlzLl9wcm9maWxlUHJldiA9IDA7XG4gICAgfVxuXG4gICAgYXN5bmMgZ2V0VmVyc2lvbigpOiBQcm9taXNlPHN0cmluZz4ge1xuICAgICAgICByZXR1cm4gdGhpcy5yZXF1ZXN0Q29yZSgndmVyc2lvbicpO1xuICAgIH1cblxuXG4gICAgYXN5bmMgc2V0dXAoKTogUHJvbWlzZTx2b2lkPiB7XG4gICAgICAgIGlmICh0aGlzLmRhdGEpIHtcbiAgICAgICAgICAgIGNvbnN0IGNvcmVDb25maWcgPSBPYmplY3QuYXNzaWduKHt9LCB0aGlzLmRhdGEpO1xuICAgICAgICAgICAgZGVsZXRlIGNvcmVDb25maWcudHJhY2VyO1xuICAgICAgICAgICAgYXdhaXQgdGhpcy5yZXF1ZXN0Q29yZSgnc2V0dXAnLCBjb3JlQ29uZmlnKTtcbiAgICAgICAgfVxuICAgICAgICB0aGlzLl9sb2dWZXJib3NlID0gdGhpcy5kYXRhLmxvZ192ZXJib3NlIHx8IGZhbHNlO1xuICAgICAgICBpZiAodGhpcy5fbG9nVmVyYm9zZSkge1xuICAgICAgICAgICAgdGhpcy5zdGFydFByb2ZpbGUoKTtcbiAgICAgICAgfVxuICAgIH1cblxuICAgIF9sb2dWZXJib3NlOiBib29sZWFuO1xuXG4gICAgX3Byb2ZpbGVTdGFydDogbnVtYmVyO1xuXG4gICAgX3Byb2ZpbGVQcmV2OiBudW1iZXI7XG59XG5cblRPTkNvbmZpZ01vZHVsZS5tb2R1bGVOYW1lID0gJ1RPTkNvbmZpZ01vZHVsZSc7XG4iXX0=