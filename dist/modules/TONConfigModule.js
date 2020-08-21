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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy9tb2R1bGVzL1RPTkNvbmZpZ01vZHVsZS5qcyJdLCJuYW1lcyI6WyJNQVhfTUVTU0FHRV9USU1FT1VUIiwiREVGQVVMVF9NRVNTQUdFX1JFVFJJRVNfQ09VTlQiLCJERUZBVUxUX01FU1NBR0VfUFJPQ0VTU0lOR19USU1FT1VUIiwiREVGQVVMVF9XQUlUX0ZPUl9USU1FT1VUIiwiREVGQVVMVF9ORVRXT1JLX1RJTUVPVVQiLCJERUZBVUxUX09VVF9PRl9TWU5DX1RIUkVTSE9MRCIsIlVSTFBhcnRzIiwiZml4IiwicHJvdG9jb2wiLCJob3N0IiwicGF0aCIsInF1ZXJ5IiwidXJsIiwicHJvdG9jb2xTZXBhcmF0b3JQb3MiLCJpbmRleE9mIiwicHJvdG9jb2xFbmQiLCJxdWVzdGlvblBvcyIsInF1ZXJ5U3RhcnQiLCJsZW5ndGgiLCJwYXRoRW5kIiwicGF0aFNlcGFyYXRvclBvcyIsInBhdGhTdGFydCIsInN1YnN0cmluZyIsImJhc2VVcmwiLCJiYXNlUGFydHMiLCJwYXJzZSIsImZpeFByb3RvY29sIiwieCIsImZpeEhvc3QiLCJ0b1N0cmluZyIsInJlcGxhY2UiLCJzdGFydHNXaXRoIiwicmVzb2x2ZVRpbWVvdXQiLCJ0aW1lb3V0IiwiZGVmYXVsdFRpbWVvdXQiLCJncm93RmFjdG9yIiwiZGVmYXVsdEdyb3dGYWN0b3IiLCJyZXRyeUluZGV4IiwicmVzb2x2ZWRUaW1lb3V0IiwicmVzb2x2ZWRHcm93RmFjdG9yIiwiTWF0aCIsIm1pbiIsInBvdyIsImRlZmF1bHRTZXJ2ZXIiLCJ2YWx1ZU9yRGVmYXVsdCIsInZhbHVlIiwiZGVmYXVsdFZhbHVlIiwidW5kZWZpbmVkIiwiVE9OQ29uZmlnTW9kdWxlIiwiY29udGV4dCIsImRhdGEiLCJzZXJ2ZXJzIiwicHVzaCIsInRyYWNlciIsIm5vb3BUcmFjZXIiLCJvdXRPZlN5bmNUaHJlc2hvbGQiLCJtZXNzYWdlUmV0cmllc0NvdW50IiwibWVzc2FnZVByb2Nlc3NpbmdUaW1lb3V0Iiwid2FpdEZvclRpbWVvdXQiLCJuZXR3b3JrVGltZW91dCIsInN0YXJ0VGltZSIsIkRhdGUiLCJub3ciLCJwcm9maWxlIiwiX3Byb2ZpbGVTdGFydCIsImFyZ3MiLCJjdXJyZW50IiwidGltZVN0cmluZyIsIlN0cmluZyIsInRvRml4ZWQiLCJfcHJvZmlsZVByZXYiLCJfbG9nVmVyYm9zZSIsImNvbnNvbGUiLCJsb2ciLCJyZXF1ZXN0Q29yZSIsImNvcmVDb25maWciLCJPYmplY3QiLCJhc3NpZ24iLCJsb2dfdmVyYm9zZSIsInN0YXJ0UHJvZmlsZSIsIlRPTk1vZHVsZSIsIm1vZHVsZU5hbWUiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7OztBQU9BOztBQUNBOztBQUNBOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUVBLElBQU1BLG1CQUFtQixHQUFHLElBQUksS0FBaEM7QUFDQSxJQUFNQyw2QkFBNkIsR0FBRyxFQUF0QztBQUNBLElBQU1DLGtDQUFrQyxHQUFHLEtBQTNDO0FBQ0EsSUFBTUMsd0JBQXdCLEdBQUcsS0FBakM7QUFDQSxJQUFNQyx1QkFBdUIsR0FBRyxDQUFoQztBQUVBLElBQU1DLDZCQUE2QixHQUFHLEtBQXRDOztJQUVhQyxROzs7Z0NBNEJHQyxHLEVBQXNDO0FBQzlDLFdBQUtDLFFBQUwsR0FBZ0JELEdBQUcsQ0FBQyxLQUFLQyxRQUFOLENBQW5CO0FBQ0EsYUFBTyxJQUFQO0FBQ0g7Ozs0QkFFT0QsRyxFQUFzQztBQUMxQyxXQUFLRSxJQUFMLEdBQVlGLEdBQUcsQ0FBQyxLQUFLRSxJQUFOLENBQWY7QUFDQSxhQUFPLElBQVA7QUFDSDs7OzRCQUVPRixHLEVBQXNDO0FBQzFDLFdBQUtHLElBQUwsR0FBWUgsR0FBRyxDQUFDLEtBQUtHLElBQU4sQ0FBZjtBQUNBLGFBQU8sSUFBUDtBQUNIOzs7NkJBRVFILEcsRUFBc0M7QUFDM0MsV0FBS0ksS0FBTCxHQUFhSixHQUFHLENBQUMsS0FBS0ksS0FBTixDQUFoQjtBQUNBLGFBQU8sSUFBUDtBQUNIOzs7MEJBN0NZQyxHLEVBQXVCO0FBQ2hD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LHFCQUFLSixXQUFMLEdBQW1CLEtBQUtyQixJQUFMLENBQVU0QixXQUFWLElBQXlCLEtBQTVDOztBQUNBLG9CQUFJLEtBQUtQLFdBQVQsRUFBc0I7QUFDbEIsdUJBQUtRLFlBQUw7QUFDSDs7Ozs7Ozs7Ozs7Ozs7Ozs7OztFQTdGb0NDLHFCOzs7QUF1RzdDaEMsZUFBZSxDQUFDaUMsVUFBaEIsR0FBNkIsaUJBQTdCIiwic291cmNlc0NvbnRlbnQiOlsiLypcbiAqIENvcHlyaWdodCAyMDE4LTIwMjAgVE9OIERFViBTT0xVVElPTlMgTFRELlxuICovXG5cbi8vIEBmbG93XG5pbXBvcnQgdHlwZSB7IFRPTkNvbmZpZ0RhdGEgfSBmcm9tIFwiLi4vLi4vdHlwZXNcIjtcbmltcG9ydCB0eXBlIHsgVE9OTW9kdWxlQ29udGV4dCB9IGZyb20gXCIuLi9UT05Nb2R1bGVcIjtcbmltcG9ydCB7IFRPTk1vZHVsZSB9IGZyb20gJy4uL1RPTk1vZHVsZSc7XG5pbXBvcnQgeyBUcmFjZXIgfSBmcm9tICdvcGVudHJhY2luZyc7XG5pbXBvcnQgeyB0cmFjZXIgYXMgbm9vcFRyYWNlciB9IGZyb20gXCJvcGVudHJhY2luZy9saWIvbm9vcFwiO1xuXG5jb25zdCBNQVhfTUVTU0FHRV9USU1FT1VUID0gNSAqIDYwMDAwO1xuY29uc3QgREVGQVVMVF9NRVNTQUdFX1JFVFJJRVNfQ09VTlQgPSAxMDtcbmNvbnN0IERFRkFVTFRfTUVTU0FHRV9QUk9DRVNTSU5HX1RJTUVPVVQgPSA0MDAwMDtcbmNvbnN0IERFRkFVTFRfV0FJVF9GT1JfVElNRU9VVCA9IDQwMDAwO1xuY29uc3QgREVGQVVMVF9ORVRXT1JLX1RJTUVPVVQgPSAwO1xuXG5jb25zdCBERUZBVUxUX09VVF9PRl9TWU5DX1RIUkVTSE9MRCA9IDE1MDAwO1xuXG5leHBvcnQgY2xhc3MgVVJMUGFydHMge1xuICAgIHN0YXRpYyBwYXJzZSh1cmw6IHN0cmluZyk6IFVSTFBhcnRzIHtcbiAgICAgICAgY29uc3QgcHJvdG9jb2xTZXBhcmF0b3JQb3MgPSB1cmwuaW5kZXhPZignOi8vJyk7XG4gICAgICAgIGNvbnN0IHByb3RvY29sRW5kID0gcHJvdG9jb2xTZXBhcmF0b3JQb3MgPj0gMCA/IHByb3RvY29sU2VwYXJhdG9yUG9zICsgMyA6IDA7XG4gICAgICAgIGNvbnN0IHF1ZXN0aW9uUG9zID0gdXJsLmluZGV4T2YoJz8nLCBwcm90b2NvbEVuZCk7XG4gICAgICAgIGNvbnN0IHF1ZXJ5U3RhcnQgPSBxdWVzdGlvblBvcyA+PSAwID8gcXVlc3Rpb25Qb3MgKyAxIDogdXJsLmxlbmd0aDtcbiAgICAgICAgY29uc3QgcGF0aEVuZCA9IHF1ZXN0aW9uUG9zID49IDAgPyBxdWVzdGlvblBvcyA6IHVybC5sZW5ndGg7XG4gICAgICAgIGNvbnN0IHBhdGhTZXBhcmF0b3JQb3MgPSB1cmwuaW5kZXhPZignLycsIHByb3RvY29sRW5kKTtcbiAgICAgICAgLy8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIG5vLW5lc3RlZC10ZXJuYXJ5XG4gICAgICAgIGNvbnN0IHBhdGhTdGFydCA9IHBhdGhTZXBhcmF0b3JQb3MgPj0gMFxuICAgICAgICAgICAgPyAocGF0aFNlcGFyYXRvclBvcyA8IHBhdGhFbmQgPyBwYXRoU2VwYXJhdG9yUG9zIDogcGF0aEVuZClcbiAgICAgICAgICAgIDogKHF1ZXN0aW9uUG9zID49IDAgPyBxdWVzdGlvblBvcyA6IHVybC5sZW5ndGgpO1xuICAgICAgICByZXR1cm4gbmV3IFVSTFBhcnRzKFxuICAgICAgICAgICAgdXJsLnN1YnN0cmluZygwLCBwcm90b2NvbEVuZCksXG4gICAgICAgICAgICB1cmwuc3Vic3RyaW5nKHByb3RvY29sRW5kLCBwYXRoU3RhcnQpLFxuICAgICAgICAgICAgdXJsLnN1YnN0cmluZyhwYXRoU3RhcnQsIHBhdGhFbmQpLFxuICAgICAgICAgICAgdXJsLnN1YnN0cmluZyhxdWVyeVN0YXJ0KSxcbiAgICAgICAgKTtcbiAgICB9XG5cbiAgICBzdGF0aWMgcmVzb2x2ZVVybChiYXNlVXJsOiBzdHJpbmcsIHVybDogc3RyaW5nKTogc3RyaW5nIHtcbiAgICAgICAgY29uc3QgYmFzZVBhcnRzID0gVVJMUGFydHMucGFyc2UoYmFzZVVybCk7XG4gICAgICAgIHJldHVybiBVUkxQYXJ0cy5wYXJzZSh1cmwpXG4gICAgICAgICAgICAuZml4UHJvdG9jb2woeCA9PiB4IHx8IGJhc2VQYXJ0cy5wcm90b2NvbClcbiAgICAgICAgICAgIC5maXhIb3N0KHggPT4geCB8fCBiYXNlUGFydHMuaG9zdClcbiAgICAgICAgICAgIC50b1N0cmluZygpO1xuICAgIH1cblxuICAgIGZpeFByb3RvY29sKGZpeDogKHA6IHN0cmluZykgPT4gc3RyaW5nKTogVVJMUGFydHMge1xuICAgICAgICB0aGlzLnByb3RvY29sID0gZml4KHRoaXMucHJvdG9jb2wpO1xuICAgICAgICByZXR1cm4gdGhpcztcbiAgICB9XG5cbiAgICBmaXhIb3N0KGZpeDogKHA6IHN0cmluZykgPT4gc3RyaW5nKTogVVJMUGFydHMge1xuICAgICAgICB0aGlzLmhvc3QgPSBmaXgodGhpcy5ob3N0KTtcbiAgICAgICAgcmV0dXJuIHRoaXM7XG4gICAgfVxuXG4gICAgZml4UGF0aChmaXg6IChwOiBzdHJpbmcpID0+IHN0cmluZyk6IFVSTFBhcnRzIHtcbiAgICAgICAgdGhpcy5wYXRoID0gZml4KHRoaXMucGF0aCk7XG4gICAgICAgIHJldHVybiB0aGlzO1xuICAgIH1cblxuICAgIGZpeFF1ZXJ5KGZpeDogKHE6IHN0cmluZykgPT4gc3RyaW5nKTogVVJMUGFydHMge1xuICAgICAgICB0aGlzLnF1ZXJ5ID0gZml4KHRoaXMucXVlcnkpO1xuICAgICAgICByZXR1cm4gdGhpcztcbiAgICB9XG5cblxuICAgIHByb3RvY29sOiBzdHJpbmc7XG5cbiAgICBob3N0OiBzdHJpbmc7XG5cbiAgICBwYXRoOiBzdHJpbmc7XG5cbiAgICBxdWVyeTogc3RyaW5nO1xuXG4gICAgY29uc3RydWN0b3IocHJvdG9jb2w6IHN0cmluZywgaG9zdDogc3RyaW5nLCBwYXRoOiBzdHJpbmcsIHF1ZXJ5OiBzdHJpbmcpIHtcbiAgICAgICAgdGhpcy5wcm90b2NvbCA9IHByb3RvY29sO1xuICAgICAgICB0aGlzLmhvc3QgPSBob3N0O1xuICAgICAgICB0aGlzLnBhdGggPSBwYXRoO1xuICAgICAgICB0aGlzLnF1ZXJ5ID0gcXVlcnk7XG4gICAgfVxuXG5cbiAgICB0b1N0cmluZygpOiBzdHJpbmcge1xuICAgICAgICBsZXQgeyBwYXRoIH0gPSB0aGlzO1xuICAgICAgICB3aGlsZSAocGF0aC5pbmRleE9mKCcvLycpID49IDApIHtcbiAgICAgICAgICAgIHBhdGggPSBwYXRoLnJlcGxhY2UoJy8vJywgJy8nKTtcbiAgICAgICAgfVxuICAgICAgICBpZiAocGF0aCAhPT0gJycgJiYgIXBhdGguc3RhcnRzV2l0aCgnLycpKSB7XG4gICAgICAgICAgICBwYXRoID0gYC8ke3BhdGh9YDtcbiAgICAgICAgfVxuICAgICAgICByZXR1cm4gYCR7dGhpcy5wcm90b2NvbH0ke3RoaXMuaG9zdH0ke3BhdGh9JHt0aGlzLnF1ZXJ5ICE9PSAnJyA/ICc/JyA6ICcnfSR7dGhpcy5xdWVyeX1gO1xuICAgIH1cbn1cblxuZnVuY3Rpb24gcmVzb2x2ZVRpbWVvdXQoXG4gICAgdGltZW91dD86IG51bWJlcixcbiAgICBkZWZhdWx0VGltZW91dDogbnVtYmVyLFxuICAgIGdyb3dGYWN0b3I/OiBudW1iZXIsXG4gICAgZGVmYXVsdEdyb3dGYWN0b3I6IG51bWJlcixcbiAgICByZXRyeUluZGV4PzogbnVtYmVyLFxuKTogbnVtYmVyIHtcbiAgICBjb25zdCByZXNvbHZlZFRpbWVvdXQgPSB0aW1lb3V0ID09PSAwID8gMCA6ICh0aW1lb3V0IHx8IGRlZmF1bHRUaW1lb3V0KTtcbiAgICBjb25zdCByZXNvbHZlZEdyb3dGYWN0b3IgPSBncm93RmFjdG9yIHx8IGRlZmF1bHRHcm93RmFjdG9yO1xuICAgIHJldHVybiBNYXRoLm1pbihcbiAgICAgICAgTUFYX01FU1NBR0VfVElNRU9VVCxcbiAgICAgICAgcmVzb2x2ZWRUaW1lb3V0ICogTWF0aC5wb3cocmVzb2x2ZWRHcm93RmFjdG9yLCByZXRyeUluZGV4IHx8IDApXG4gICAgKTtcbn1cblxuY29uc3QgZGVmYXVsdFNlcnZlciA9ICdodHRwOi8vbG9jYWxob3N0JztcbmZ1bmN0aW9uIHZhbHVlT3JEZWZhdWx0KHZhbHVlLCBkZWZhdWx0VmFsdWUpIHtcbiAgICByZXR1cm4gKHZhbHVlID09PSB1bmRlZmluZWQgfHwgdmFsdWUgPT09IG51bGwpID8gZGVmYXVsdFZhbHVlIDogdmFsdWU7XG59XG5cbmV4cG9ydCBkZWZhdWx0IGNsYXNzIFRPTkNvbmZpZ01vZHVsZSBleHRlbmRzIFRPTk1vZHVsZSB7XG4gICAgZGF0YTogVE9OQ29uZmlnRGF0YTtcbiAgICB0cmFjZXI6IFRyYWNlcjtcblxuICAgIGNvbnN0cnVjdG9yKGNvbnRleHQ6IFRPTk1vZHVsZUNvbnRleHQpIHtcbiAgICAgICAgc3VwZXIoY29udGV4dCk7XG4gICAgICAgIHRoaXMuZGF0YSA9IHtcbiAgICAgICAgICAgIHNlcnZlcnM6IFtkZWZhdWx0U2VydmVyXSxcbiAgICAgICAgfVxuICAgIH1cblxuICAgIHNldERhdGEoZGF0YTogVE9OQ29uZmlnRGF0YSkge1xuICAgICAgICB0aGlzLmRhdGEgPSBkYXRhIHx8IHRoaXMuZGF0YTtcbiAgICAgICAgaWYgKHRoaXMuZGF0YS5zZXJ2ZXJzLmxlbmd0aCA9PT0gMCkge1xuICAgICAgICAgICAgdGhpcy5kYXRhLnNlcnZlcnMucHVzaChkZWZhdWx0U2VydmVyKTtcbiAgICAgICAgfVxuICAgICAgICB0aGlzLnRyYWNlciA9IGRhdGEudHJhY2VyIHx8IG5vb3BUcmFjZXI7XG4gICAgfVxuXG4gICAgZ2V0Q29uZmlnU2VydmVyKCk6IHN0cmluZyB7XG4gICAgICAgIHJldHVybiB0aGlzLmRhdGE/LnNlcnZlcnM/LlswXSB8fCAnJztcbiAgICB9XG5cbiAgICBvdXRPZlN5bmNUaHJlc2hvbGQoKTogbnVtYmVyIHtcbiAgICAgICAgcmV0dXJuIHZhbHVlT3JEZWZhdWx0KHRoaXMuZGF0YS5vdXRPZlN5bmNUaHJlc2hvbGQsIERFRkFVTFRfT1VUX09GX1NZTkNfVEhSRVNIT0xEKTtcbiAgICB9XG5cbiAgICBtZXNzYWdlUmV0cmllc0NvdW50KCk6IG51bWJlciB7XG4gICAgICAgIHJldHVybiB2YWx1ZU9yRGVmYXVsdCh0aGlzLmRhdGEubWVzc2FnZVJldHJpZXNDb3VudCwgREVGQVVMVF9NRVNTQUdFX1JFVFJJRVNfQ09VTlQpO1xuICAgIH1cblxuICAgIG1lc3NhZ2VQcm9jZXNzaW5nVGltZW91dCgpOiBudW1iZXIge1xuICAgICAgICBjb25zdCB0aW1lb3V0ID0gdGhpcy5kYXRhLm1lc3NhZ2VQcm9jZXNzaW5nVGltZW91dDtcbiAgICAgICAgcmV0dXJuIHRpbWVvdXQgPT09IDAgPyAwIDogKHRpbWVvdXQgfHwgREVGQVVMVF9NRVNTQUdFX1BST0NFU1NJTkdfVElNRU9VVCk7XG4gICAgfVxuXG4gICAgd2FpdEZvclRpbWVvdXQoKTogbnVtYmVyIHtcbiAgICAgICAgcmV0dXJuIHZhbHVlT3JEZWZhdWx0KHRoaXMuZGF0YS53YWl0Rm9yVGltZW91dCwgREVGQVVMVF9XQUlUX0ZPUl9USU1FT1VUKTtcbiAgICB9XG5cbiAgICBuZXR3b3JrVGltZW91dCgpOiBudW1iZXIge1xuICAgICAgICByZXR1cm4gdmFsdWVPckRlZmF1bHQodGhpcy5kYXRhLm5ldHdvcmtUaW1lb3V0LCBERUZBVUxUX05FVFdPUktfVElNRU9VVCk7XG4gICAgfVxuXG4gICAgaXNOZXR3b3JrVGltZW91dEV4cGlyZWRTaW5jZShzdGFydFRpbWU6IG51bWJlcik6IGJvb2xlYW4ge1xuICAgICAgICBjb25zdCB0aW1lb3V0ID0gdGhpcy5uZXR3b3JrVGltZW91dCgpO1xuICAgICAgICBpZiAodGltZW91dCA9PT0gMCkge1xuICAgICAgICAgICAgcmV0dXJuIGZhbHNlO1xuICAgICAgICB9XG4gICAgICAgIHJldHVybiBEYXRlLm5vdygpID4gKHN0YXJ0VGltZSArIHRpbWVvdXQpO1xuICAgIH1cblxuICAgIGxvZyguLi5hcmdzOiBhbnlbXSkge1xuICAgICAgICBjb25zdCBwcm9maWxlID0gKHRoaXMuX3Byb2ZpbGVTdGFydCB8fCAwKSAhPT0gMDtcbiAgICAgICAgaWYgKHByb2ZpbGUpIHtcbiAgICAgICAgICAgIGNvbnN0IGN1cnJlbnQgPSBEYXRlLm5vdygpIC8gMTAwMDtcbiAgICAgICAgICAgIGNvbnN0IHRpbWVTdHJpbmcgPSBgJHtTdHJpbmcoY3VycmVudC50b0ZpeGVkKDMpKX0gJHtcbiAgICAgICAgICAgICAgICBTdHJpbmcoKGN1cnJlbnQgLSB0aGlzLl9wcm9maWxlU3RhcnQpLnRvRml4ZWQoMykpfSAke1xuICAgICAgICAgICAgICAgIFN0cmluZygoY3VycmVudCAtIHRoaXMuX3Byb2ZpbGVQcmV2KS50b0ZpeGVkKDMpKX1gO1xuICAgICAgICAgICAgaWYgKHRoaXMuX2xvZ1ZlcmJvc2UpIHtcbiAgICAgICAgICAgICAgICBjb25zb2xlLmxvZyhgWyR7dGltZVN0cmluZ31dXFxuYCwgLi4uYXJncyk7XG4gICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAgIGNvbnNvbGUubG9nKGBbJHt0aW1lU3RyaW5nfV1cXG5gLCBhcmdzWzBdKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIHRoaXMuX3Byb2ZpbGVQcmV2ID0gY3VycmVudDtcbiAgICAgICAgfSBlbHNlIGlmICh0aGlzLl9sb2dWZXJib3NlKSB7XG4gICAgICAgICAgICBjb25zb2xlLmxvZyhgWyR7RGF0ZS5ub3coKSAvIDEwMDB9XWAsIC4uLmFyZ3MpO1xuICAgICAgICB9XG4gICAgfVxuXG4gICAgc3RhcnRQcm9maWxlKCkge1xuICAgICAgICB0aGlzLl9wcm9maWxlU3RhcnQgPSBEYXRlLm5vdygpIC8gMTAwMDtcbiAgICAgICAgdGhpcy5fcHJvZmlsZVByZXYgPSB0aGlzLl9wcm9maWxlU3RhcnQ7XG4gICAgfVxuXG4gICAgc3RvcFByb2ZpbGUoKSB7XG4gICAgICAgIHRoaXMuX3Byb2ZpbGVTdGFydCA9IHRoaXMuX3Byb2ZpbGVQcmV2ID0gMDtcbiAgICB9XG5cbiAgICBhc3luYyBnZXRWZXJzaW9uKCk6IFByb21pc2U8c3RyaW5nPiB7XG4gICAgICAgIHJldHVybiB0aGlzLnJlcXVlc3RDb3JlKCd2ZXJzaW9uJyk7XG4gICAgfVxuXG5cbiAgICBhc3luYyBzZXR1cCgpOiBQcm9taXNlPHZvaWQ+IHtcbiAgICAgICAgaWYgKHRoaXMuZGF0YSkge1xuICAgICAgICAgICAgY29uc3QgY29yZUNvbmZpZyA9IE9iamVjdC5hc3NpZ24oe30sIHRoaXMuZGF0YSk7XG4gICAgICAgICAgICBkZWxldGUgY29yZUNvbmZpZy50cmFjZXI7XG4gICAgICAgICAgICBhd2FpdCB0aGlzLnJlcXVlc3RDb3JlKCdzZXR1cCcsIGNvcmVDb25maWcpO1xuICAgICAgICB9XG4gICAgICAgIHRoaXMuX2xvZ1ZlcmJvc2UgPSB0aGlzLmRhdGEubG9nX3ZlcmJvc2UgfHwgZmFsc2U7XG4gICAgICAgIGlmICh0aGlzLl9sb2dWZXJib3NlKSB7XG4gICAgICAgICAgICB0aGlzLnN0YXJ0UHJvZmlsZSgpO1xuICAgICAgICB9XG4gICAgfVxuXG4gICAgX2xvZ1ZlcmJvc2U6IGJvb2xlYW47XG5cbiAgICBfcHJvZmlsZVN0YXJ0OiBudW1iZXI7XG5cbiAgICBfcHJvZmlsZVByZXY6IG51bWJlcjtcbn1cblxuVE9OQ29uZmlnTW9kdWxlLm1vZHVsZU5hbWUgPSAnVE9OQ29uZmlnTW9kdWxlJztcbiJdfQ==