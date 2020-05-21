"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = exports.URLParts = void 0;

var _TONModule2 = require("../TONModule");

var _opentracing = require("opentracing");

var _noop = require("opentracing/lib/noop");

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
      var _getVersion = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee() {
        return regeneratorRuntime.wrap(function _callee$(_context) {
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
      var _setup = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee2() {
        var coreConfig;
        return regeneratorRuntime.wrap(function _callee2$(_context2) {
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy9tb2R1bGVzL1RPTkNvbmZpZ01vZHVsZS5qcyJdLCJuYW1lcyI6WyJNQVhfTUVTU0FHRV9USU1FT1VUIiwiREVGQVVMVF9NRVNTQUdFX1JFVFJJRVNfQ09VTlQiLCJERUZBVUxUX01FU1NBR0VfRVhQSVJBVElPTl9USU1FT1VUIiwiREVGQVVMVF9NRVNTQUdFX0VYUElSQVRJT05fR1JPV19GQUNUT1IiLCJERUZBVUxUX01FU1NBR0VfUFJPQ0VTU0lOR19USU1FT1VUIiwiREVGQVVMVF9NRVNTQUdFX1BST0NFU1NJTkdfR1JPV19GQUNUT1IiLCJERUZBVUxUX1dBSVRfRk9SX1RJTUVPVVQiLCJERUZBVUxUX09VVF9PRl9TWU5DX1RIUkVTSE9MRCIsIlVSTFBhcnRzIiwiZml4IiwicHJvdG9jb2wiLCJob3N0IiwicGF0aCIsInF1ZXJ5IiwidXJsIiwicHJvdG9jb2xTZXBhcmF0b3JQb3MiLCJpbmRleE9mIiwicHJvdG9jb2xFbmQiLCJxdWVzdGlvblBvcyIsInF1ZXJ5U3RhcnQiLCJsZW5ndGgiLCJwYXRoRW5kIiwicGF0aFNlcGFyYXRvclBvcyIsInBhdGhTdGFydCIsInN1YnN0cmluZyIsImJhc2VVcmwiLCJiYXNlUGFydHMiLCJwYXJzZSIsImZpeFByb3RvY29sIiwieCIsImZpeEhvc3QiLCJ0b1N0cmluZyIsInJlcGxhY2UiLCJzdGFydHNXaXRoIiwicmVzb2x2ZVRpbWVvdXQiLCJ0aW1lb3V0IiwiZGVmYXVsdFRpbWVvdXQiLCJncm93RmFjdG9yIiwiZGVmYXVsdEdyb3dGYWN0b3IiLCJyZXRyeUluZGV4IiwicmVzb2x2ZWRUaW1lb3V0IiwicmVzb2x2ZWRHcm93RmFjdG9yIiwiTWF0aCIsIm1pbiIsInBvdyIsImRlZmF1bHRTZXJ2ZXIiLCJ2YWx1ZU9yRGVmYXVsdCIsInZhbHVlIiwiZGVmYXVsdFZhbHVlIiwidW5kZWZpbmVkIiwiVE9OQ29uZmlnTW9kdWxlIiwiY29udGV4dCIsImRhdGEiLCJzZXJ2ZXJzIiwicHVzaCIsInRyYWNlciIsIm5vb3BUcmFjZXIiLCJvdXRPZlN5bmNUaHJlc2hvbGQiLCJtZXNzYWdlUmV0cmllc0NvdW50IiwibWVzc2FnZUV4cGlyYXRpb25UaW1lb3V0IiwibWVzc2FnZUV4cGlyYXRpb25UaW1lb3V0R3Jvd0ZhY3RvciIsIm1lc3NhZ2VQcm9jZXNzaW5nVGltZW91dCIsIm1lc3NhZ2VQcm9jZXNzaW5nVGltZW91dEdyb3dGYWN0b3IiLCJ3YWl0Rm9yVGltZW91dCIsInByb2ZpbGUiLCJfcHJvZmlsZVN0YXJ0IiwiYXJncyIsImN1cnJlbnQiLCJEYXRlIiwibm93IiwidGltZVN0cmluZyIsIlN0cmluZyIsInRvRml4ZWQiLCJfcHJvZmlsZVByZXYiLCJfbG9nVmVyYm9zZSIsImNvbnNvbGUiLCJsb2ciLCJyZXF1ZXN0Q29yZSIsImNvcmVDb25maWciLCJPYmplY3QiLCJhc3NpZ24iLCJsb2dfdmVyYm9zZSIsInN0YXJ0UHJvZmlsZSIsIlRPTk1vZHVsZSIsIm1vZHVsZU5hbWUiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7QUFPQTs7QUFDQTs7QUFDQTs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBRUEsSUFBTUEsbUJBQW1CLEdBQUcsSUFBSSxLQUFoQztBQUNBLElBQU1DLDZCQUE2QixHQUFHLEVBQXRDO0FBQ0EsSUFBTUMsa0NBQWtDLEdBQUcsS0FBM0M7QUFDQSxJQUFNQyxzQ0FBc0MsR0FBRyxHQUEvQztBQUNBLElBQU1DLGtDQUFrQyxHQUFHLEtBQTNDO0FBQ0EsSUFBTUMsc0NBQXNDLEdBQUcsR0FBL0M7QUFDQSxJQUFNQyx3QkFBd0IsR0FBRyxLQUFqQztBQUVBLElBQU1DLDZCQUE2QixHQUFHLEtBQXRDOztJQUVhQyxROzs7Z0NBNEJHQyxHLEVBQXNDO0FBQzlDLFdBQUtDLFFBQUwsR0FBZ0JELEdBQUcsQ0FBQyxLQUFLQyxRQUFOLENBQW5CO0FBQ0EsYUFBTyxJQUFQO0FBQ0g7Ozs0QkFFT0QsRyxFQUFzQztBQUMxQyxXQUFLRSxJQUFMLEdBQVlGLEdBQUcsQ0FBQyxLQUFLRSxJQUFOLENB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LE1BQWxCOzt1QkFDTSxLQUFLc0IsV0FBTCxDQUFpQixPQUFqQixFQUEwQkMsVUFBMUIsQzs7O0FBRVYscUJBQUtKLFdBQUwsR0FBbUIsS0FBS3RCLElBQUwsQ0FBVTZCLFdBQVYsSUFBeUIsS0FBNUM7O0FBQ0Esb0JBQUksS0FBS1AsV0FBVCxFQUFzQjtBQUNsQix1QkFBS1EsWUFBTDtBQUNIOzs7Ozs7Ozs7Ozs7Ozs7Ozs7O0VBN0ZvQ0MscUI7OztBQXVHN0NqQyxlQUFlLENBQUNrQyxVQUFoQixHQUE2QixpQkFBN0IiLCJzb3VyY2VzQ29udGVudCI6WyIvKlxuICogQ29weXJpZ2h0IDIwMTgtMjAyMCBUT04gREVWIFNPTFVUSU9OUyBMVEQuXG4gKi9cblxuLy8gQGZsb3dcbmltcG9ydCB0eXBlIHsgVE9OQ29uZmlnRGF0YSB9IGZyb20gXCIuLi8uLi90eXBlc1wiO1xuaW1wb3J0IHR5cGUgeyBUT05Nb2R1bGVDb250ZXh0IH0gZnJvbSBcIi4uL1RPTk1vZHVsZVwiO1xuaW1wb3J0IHsgVE9OTW9kdWxlIH0gZnJvbSAnLi4vVE9OTW9kdWxlJztcbmltcG9ydCB7IFRyYWNlciB9IGZyb20gJ29wZW50cmFjaW5nJztcbmltcG9ydCB7IHRyYWNlciBhcyBub29wVHJhY2VyIH0gZnJvbSBcIm9wZW50cmFjaW5nL2xpYi9ub29wXCI7XG5cbmNvbnN0IE1BWF9NRVNTQUdFX1RJTUVPVVQgPSA1ICogNjAwMDA7XG5jb25zdCBERUZBVUxUX01FU1NBR0VfUkVUUklFU19DT1VOVCA9IDEwO1xuY29uc3QgREVGQVVMVF9NRVNTQUdFX0VYUElSQVRJT05fVElNRU9VVCA9IDEwMDAwO1xuY29uc3QgREVGQVVMVF9NRVNTQUdFX0VYUElSQVRJT05fR1JPV19GQUNUT1IgPSAxLjU7XG5jb25zdCBERUZBVUxUX01FU1NBR0VfUFJPQ0VTU0lOR19USU1FT1VUID0gNDAwMDA7XG5jb25zdCBERUZBVUxUX01FU1NBR0VfUFJPQ0VTU0lOR19HUk9XX0ZBQ1RPUiA9IDEuNTtcbmNvbnN0IERFRkFVTFRfV0FJVF9GT1JfVElNRU9VVCA9IDQwMDAwO1xuXG5jb25zdCBERUZBVUxUX09VVF9PRl9TWU5DX1RIUkVTSE9MRCA9IDE1MDAwO1xuXG5leHBvcnQgY2xhc3MgVVJMUGFydHMge1xuICAgIHN0YXRpYyBwYXJzZSh1cmw6IHN0cmluZyk6IFVSTFBhcnRzIHtcbiAgICAgICAgY29uc3QgcHJvdG9jb2xTZXBhcmF0b3JQb3MgPSB1cmwuaW5kZXhPZignOi8vJyk7XG4gICAgICAgIGNvbnN0IHByb3RvY29sRW5kID0gcHJvdG9jb2xTZXBhcmF0b3JQb3MgPj0gMCA/IHByb3RvY29sU2VwYXJhdG9yUG9zICsgMyA6IDA7XG4gICAgICAgIGNvbnN0IHF1ZXN0aW9uUG9zID0gdXJsLmluZGV4T2YoJz8nLCBwcm90b2NvbEVuZCk7XG4gICAgICAgIGNvbnN0IHF1ZXJ5U3RhcnQgPSBxdWVzdGlvblBvcyA+PSAwID8gcXVlc3Rpb25Qb3MgKyAxIDogdXJsLmxlbmd0aDtcbiAgICAgICAgY29uc3QgcGF0aEVuZCA9IHF1ZXN0aW9uUG9zID49IDAgPyBxdWVzdGlvblBvcyA6IHVybC5sZW5ndGg7XG4gICAgICAgIGNvbnN0IHBhdGhTZXBhcmF0b3JQb3MgPSB1cmwuaW5kZXhPZignLycsIHByb3RvY29sRW5kKTtcbiAgICAgICAgLy8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIG5vLW5lc3RlZC10ZXJuYXJ5XG4gICAgICAgIGNvbnN0IHBhdGhTdGFydCA9IHBhdGhTZXBhcmF0b3JQb3MgPj0gMFxuICAgICAgICAgICAgPyAocGF0aFNlcGFyYXRvclBvcyA8IHBhdGhFbmQgPyBwYXRoU2VwYXJhdG9yUG9zIDogcGF0aEVuZClcbiAgICAgICAgICAgIDogKHF1ZXN0aW9uUG9zID49IDAgPyBxdWVzdGlvblBvcyA6IHVybC5sZW5ndGgpO1xuICAgICAgICByZXR1cm4gbmV3IFVSTFBhcnRzKFxuICAgICAgICAgICAgdXJsLnN1YnN0cmluZygwLCBwcm90b2NvbEVuZCksXG4gICAgICAgICAgICB1cmwuc3Vic3RyaW5nKHByb3RvY29sRW5kLCBwYXRoU3RhcnQpLFxuICAgICAgICAgICAgdXJsLnN1YnN0cmluZyhwYXRoU3RhcnQsIHBhdGhFbmQpLFxuICAgICAgICAgICAgdXJsLnN1YnN0cmluZyhxdWVyeVN0YXJ0KSxcbiAgICAgICAgKTtcbiAgICB9XG5cbiAgICBzdGF0aWMgcmVzb2x2ZVVybChiYXNlVXJsOiBzdHJpbmcsIHVybDogc3RyaW5nKTogc3RyaW5nIHtcbiAgICAgICAgY29uc3QgYmFzZVBhcnRzID0gVVJMUGFydHMucGFyc2UoYmFzZVVybCk7XG4gICAgICAgIHJldHVybiBVUkxQYXJ0cy5wYXJzZSh1cmwpXG4gICAgICAgICAgICAuZml4UHJvdG9jb2woeCA9PiB4IHx8IGJhc2VQYXJ0cy5wcm90b2NvbClcbiAgICAgICAgICAgIC5maXhIb3N0KHggPT4geCB8fCBiYXNlUGFydHMuaG9zdClcbiAgICAgICAgICAgIC50b1N0cmluZygpO1xuICAgIH1cblxuICAgIGZpeFByb3RvY29sKGZpeDogKHA6IHN0cmluZykgPT4gc3RyaW5nKTogVVJMUGFydHMge1xuICAgICAgICB0aGlzLnByb3RvY29sID0gZml4KHRoaXMucHJvdG9jb2wpO1xuICAgICAgICByZXR1cm4gdGhpcztcbiAgICB9XG5cbiAgICBmaXhIb3N0KGZpeDogKHA6IHN0cmluZykgPT4gc3RyaW5nKTogVVJMUGFydHMge1xuICAgICAgICB0aGlzLmhvc3QgPSBmaXgodGhpcy5ob3N0KTtcbiAgICAgICAgcmV0dXJuIHRoaXM7XG4gICAgfVxuXG4gICAgZml4UGF0aChmaXg6IChwOiBzdHJpbmcpID0+IHN0cmluZyk6IFVSTFBhcnRzIHtcbiAgICAgICAgdGhpcy5wYXRoID0gZml4KHRoaXMucGF0aCk7XG4gICAgICAgIHJldHVybiB0aGlzO1xuICAgIH1cblxuICAgIGZpeFF1ZXJ5KGZpeDogKHE6IHN0cmluZykgPT4gc3RyaW5nKTogVVJMUGFydHMge1xuICAgICAgICB0aGlzLnF1ZXJ5ID0gZml4KHRoaXMucXVlcnkpO1xuICAgICAgICByZXR1cm4gdGhpcztcbiAgICB9XG5cblxuICAgIHByb3RvY29sOiBzdHJpbmc7XG5cbiAgICBob3N0OiBzdHJpbmc7XG5cbiAgICBwYXRoOiBzdHJpbmc7XG5cbiAgICBxdWVyeTogc3RyaW5nO1xuXG4gICAgY29uc3RydWN0b3IocHJvdG9jb2w6IHN0cmluZywgaG9zdDogc3RyaW5nLCBwYXRoOiBzdHJpbmcsIHF1ZXJ5OiBzdHJpbmcpIHtcbiAgICAgICAgdGhpcy5wcm90b2NvbCA9IHByb3RvY29sO1xuICAgICAgICB0aGlzLmhvc3QgPSBob3N0O1xuICAgICAgICB0aGlzLnBhdGggPSBwYXRoO1xuICAgICAgICB0aGlzLnF1ZXJ5ID0gcXVlcnk7XG4gICAgfVxuXG5cbiAgICB0b1N0cmluZygpOiBzdHJpbmcge1xuICAgICAgICBsZXQgeyBwYXRoIH0gPSB0aGlzO1xuICAgICAgICB3aGlsZSAocGF0aC5pbmRleE9mKCcvLycpID49IDApIHtcbiAgICAgICAgICAgIHBhdGggPSBwYXRoLnJlcGxhY2UoJy8vJywgJy8nKTtcbiAgICAgICAgfVxuICAgICAgICBpZiAocGF0aCAhPT0gJycgJiYgIXBhdGguc3RhcnRzV2l0aCgnLycpKSB7XG4gICAgICAgICAgICBwYXRoID0gYC8ke3BhdGh9YDtcbiAgICAgICAgfVxuICAgICAgICByZXR1cm4gYCR7dGhpcy5wcm90b2NvbH0ke3RoaXMuaG9zdH0ke3BhdGh9JHt0aGlzLnF1ZXJ5ICE9PSAnJyA/ICc/JyA6ICcnfSR7dGhpcy5xdWVyeX1gO1xuICAgIH1cbn1cblxuZnVuY3Rpb24gcmVzb2x2ZVRpbWVvdXQoXG4gICAgdGltZW91dD86IG51bWJlcixcbiAgICBkZWZhdWx0VGltZW91dDogbnVtYmVyLFxuICAgIGdyb3dGYWN0b3I/OiBudW1iZXIsXG4gICAgZGVmYXVsdEdyb3dGYWN0b3I6IG51bWJlcixcbiAgICByZXRyeUluZGV4PzogbnVtYmVyLFxuKTogbnVtYmVyIHtcbiAgICBjb25zdCByZXNvbHZlZFRpbWVvdXQgPSB0aW1lb3V0ID09PSAwID8gMCA6ICh0aW1lb3V0IHx8IGRlZmF1bHRUaW1lb3V0KTtcbiAgICBjb25zdCByZXNvbHZlZEdyb3dGYWN0b3IgPSBncm93RmFjdG9yIHx8IGRlZmF1bHRHcm93RmFjdG9yO1xuICAgIHJldHVybiBNYXRoLm1pbihcbiAgICAgICAgTUFYX01FU1NBR0VfVElNRU9VVCxcbiAgICAgICAgcmVzb2x2ZWRUaW1lb3V0ICogTWF0aC5wb3cocmVzb2x2ZWRHcm93RmFjdG9yLCByZXRyeUluZGV4IHx8IDApXG4gICAgKTtcbn1cblxuY29uc3QgZGVmYXVsdFNlcnZlciA9ICdodHRwOi8vbG9jYWxob3N0JztcbmZ1bmN0aW9uIHZhbHVlT3JEZWZhdWx0KHZhbHVlLCBkZWZhdWx0VmFsdWUpIHtcbiAgICByZXR1cm4gKHZhbHVlID09PSB1bmRlZmluZWQgfHwgdmFsdWUgPT09IG51bGwpID8gZGVmYXVsdFZhbHVlIDogdmFsdWU7XG59XG5cbmV4cG9ydCBkZWZhdWx0IGNsYXNzIFRPTkNvbmZpZ01vZHVsZSBleHRlbmRzIFRPTk1vZHVsZSB7XG4gICAgZGF0YTogVE9OQ29uZmlnRGF0YTtcbiAgICB0cmFjZXI6IFRyYWNlcjtcblxuICAgIGNvbnN0cnVjdG9yKGNvbnRleHQ6IFRPTk1vZHVsZUNvbnRleHQpIHtcbiAgICAgICAgc3VwZXIoY29udGV4dCk7XG4gICAgICAgIHRoaXMuZGF0YSA9IHtcbiAgICAgICAgICAgIHNlcnZlcnM6IFtkZWZhdWx0U2VydmVyXSxcbiAgICAgICAgfVxuICAgIH1cblxuICAgIHNldERhdGEoZGF0YTogVE9OQ29uZmlnRGF0YSkge1xuICAgICAgICB0aGlzLmRhdGEgPSBkYXRhIHx8IHRoaXMuZGF0YTtcbiAgICAgICAgaWYgKHRoaXMuZGF0YS5zZXJ2ZXJzLmxlbmd0aCA9PT0gMCkge1xuICAgICAgICAgICAgdGhpcy5kYXRhLnNlcnZlcnMucHVzaChkZWZhdWx0U2VydmVyKTtcbiAgICAgICAgfVxuICAgICAgICB0aGlzLnRyYWNlciA9IGRhdGEudHJhY2VyIHx8IG5vb3BUcmFjZXI7XG4gICAgfVxuXG5cbiAgICBvdXRPZlN5bmNUaHJlc2hvbGQoKTogbnVtYmVyIHtcbiAgICAgICAgcmV0dXJuIHZhbHVlT3JEZWZhdWx0KHRoaXMuZGF0YS5vdXRPZlN5bmNUaHJlc2hvbGQsIERFRkFVTFRfT1VUX09GX1NZTkNfVEhSRVNIT0xEKTtcbiAgICB9XG5cbiAgICBtZXNzYWdlUmV0cmllc0NvdW50KCk6IG51bWJlciB7XG4gICAgICAgIHJldHVybiB2YWx1ZU9yRGVmYXVsdCh0aGlzLmRhdGEubWVzc2FnZVJldHJpZXNDb3VudCwgREVGQVVMVF9NRVNTQUdFX1JFVFJJRVNfQ09VTlQpO1xuICAgIH1cblxuICAgIG1lc3NhZ2VFeHBpcmF0aW9uVGltZW91dChyZXRyeUluZGV4PzogbnVtYmVyKTogbnVtYmVyIHtcbiAgICAgICAgcmV0dXJuIHJlc29sdmVUaW1lb3V0KFxuICAgICAgICAgICAgdGhpcy5kYXRhLm1lc3NhZ2VFeHBpcmF0aW9uVGltZW91dCxcbiAgICAgICAgICAgIERFRkFVTFRfTUVTU0FHRV9FWFBJUkFUSU9OX1RJTUVPVVQsXG4gICAgICAgICAgICB0aGlzLmRhdGEubWVzc2FnZUV4cGlyYXRpb25UaW1lb3V0R3Jvd0ZhY3RvcixcbiAgICAgICAgICAgIERFRkFVTFRfTUVTU0FHRV9FWFBJUkFUSU9OX0dST1dfRkFDVE9SLFxuICAgICAgICAgICAgcmV0cnlJbmRleCxcbiAgICAgICAgKTtcbiAgICB9XG5cbiAgICBtZXNzYWdlUHJvY2Vzc2luZ1RpbWVvdXQocmV0cnlJbmRleD86IG51bWJlcik6IG51bWJlciB7XG4gICAgICAgIHJldHVybiByZXNvbHZlVGltZW91dChcbiAgICAgICAgICAgIHRoaXMuZGF0YS5tZXNzYWdlUHJvY2Vzc2luZ1RpbWVvdXQsXG4gICAgICAgICAgICBERUZBVUxUX01FU1NBR0VfUFJPQ0VTU0lOR19USU1FT1VULFxuICAgICAgICAgICAgdGhpcy5kYXRhLm1lc3NhZ2VQcm9jZXNzaW5nVGltZW91dEdyb3dGYWN0b3IsXG4gICAgICAgICAgICBERUZBVUxUX01FU1NBR0VfUFJPQ0VTU0lOR19HUk9XX0ZBQ1RPUixcbiAgICAgICAgICAgIHJldHJ5SW5kZXgsXG4gICAgICAgICk7XG4gICAgfVxuXG4gICAgd2FpdEZvclRpbWVvdXQoKTogbnVtYmVyIHtcbiAgICAgICAgcmV0dXJuIHZhbHVlT3JEZWZhdWx0KHRoaXMuZGF0YS53YWl0Rm9yVGltZW91dCwgREVGQVVMVF9XQUlUX0ZPUl9USU1FT1VUKTtcbiAgICB9XG5cbiAgICBsb2coLi4uYXJnczogYW55W10pIHtcbiAgICAgICAgY29uc3QgcHJvZmlsZSA9ICh0aGlzLl9wcm9maWxlU3RhcnQgfHwgMCkgIT09IDA7XG4gICAgICAgIGlmIChwcm9maWxlKSB7XG4gICAgICAgICAgICBjb25zdCBjdXJyZW50ID0gRGF0ZS5ub3coKSAvIDEwMDA7XG4gICAgICAgICAgICBjb25zdCB0aW1lU3RyaW5nID0gYCR7U3RyaW5nKGN1cnJlbnQudG9GaXhlZCgzKSl9ICR7XG4gICAgICAgICAgICAgICAgU3RyaW5nKChjdXJyZW50IC0gdGhpcy5fcHJvZmlsZVN0YXJ0KS50b0ZpeGVkKDMpKX0gJHtcbiAgICAgICAgICAgICAgICBTdHJpbmcoKGN1cnJlbnQgLSB0aGlzLl9wcm9maWxlUHJldikudG9GaXhlZCgzKSl9YDtcbiAgICAgICAgICAgIGlmICh0aGlzLl9sb2dWZXJib3NlKSB7XG4gICAgICAgICAgICAgICAgY29uc29sZS5sb2coYFske3RpbWVTdHJpbmd9XVxcbmAsIC4uLmFyZ3MpO1xuICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgICBjb25zb2xlLmxvZyhgWyR7dGltZVN0cmluZ31dXFxuYCwgYXJnc1swXSk7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICB0aGlzLl9wcm9maWxlUHJldiA9IGN1cnJlbnQ7XG4gICAgICAgIH0gZWxzZSBpZiAodGhpcy5fbG9nVmVyYm9zZSkge1xuICAgICAgICAgICAgY29uc29sZS5sb2coYFske0RhdGUubm93KCkgLyAxMDAwfV1gLCAuLi5hcmdzKTtcbiAgICAgICAgfVxuICAgIH1cblxuICAgIHN0YXJ0UHJvZmlsZSgpIHtcbiAgICAgICAgdGhpcy5fcHJvZmlsZVN0YXJ0ID0gRGF0ZS5ub3coKSAvIDEwMDA7XG4gICAgICAgIHRoaXMuX3Byb2ZpbGVQcmV2ID0gdGhpcy5fcHJvZmlsZVN0YXJ0O1xuICAgIH1cblxuICAgIHN0b3BQcm9maWxlKCkge1xuICAgICAgICB0aGlzLl9wcm9maWxlU3RhcnQgPSB0aGlzLl9wcm9maWxlUHJldiA9IDA7XG4gICAgfVxuXG4gICAgYXN5bmMgZ2V0VmVyc2lvbigpOiBQcm9taXNlPHN0cmluZz4ge1xuICAgICAgICByZXR1cm4gdGhpcy5yZXF1ZXN0Q29yZSgndmVyc2lvbicpO1xuICAgIH1cblxuXG4gICAgYXN5bmMgc2V0dXAoKTogUHJvbWlzZTx2b2lkPiB7XG4gICAgICAgIGlmICh0aGlzLmRhdGEpIHtcbiAgICAgICAgICAgIGNvbnN0IGNvcmVDb25maWcgPSBPYmplY3QuYXNzaWduKHt9LCB0aGlzLmRhdGEpO1xuICAgICAgICAgICAgZGVsZXRlIGNvcmVDb25maWcudHJhY2VyO1xuICAgICAgICAgICAgYXdhaXQgdGhpcy5yZXF1ZXN0Q29yZSgnc2V0dXAnLCBjb3JlQ29uZmlnKTtcbiAgICAgICAgfVxuICAgICAgICB0aGlzLl9sb2dWZXJib3NlID0gdGhpcy5kYXRhLmxvZ192ZXJib3NlIHx8IGZhbHNlO1xuICAgICAgICBpZiAodGhpcy5fbG9nVmVyYm9zZSkge1xuICAgICAgICAgICAgdGhpcy5zdGFydFByb2ZpbGUoKTtcbiAgICAgICAgfVxuICAgIH1cblxuICAgIF9sb2dWZXJib3NlOiBib29sZWFuO1xuXG4gICAgX3Byb2ZpbGVTdGFydDogbnVtYmVyO1xuXG4gICAgX3Byb2ZpbGVQcmV2OiBudW1iZXI7XG59XG5cblRPTkNvbmZpZ01vZHVsZS5tb2R1bGVOYW1lID0gJ1RPTkNvbmZpZ01vZHVsZSc7XG4iXX0=