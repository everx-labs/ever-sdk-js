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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy9tb2R1bGVzL1RPTkNvbmZpZ01vZHVsZS5qcyJdLCJuYW1lcyI6WyJNQVhfTUVTU0FHRV9USU1FT1VUIiwiREVGQVVMVF9NRVNTQUdFX1JFVFJJRVNfQ09VTlQiLCJERUZBVUxUX01FU1NBR0VfRVhQSVJBVElPTl9USU1FT1VUIiwiREVGQVVMVF9NRVNTQUdFX0VYUElSQVRJT05fR1JPV19GQUNUT1IiLCJERUZBVUxUX01FU1NBR0VfUFJPQ0VTU0lOR19USU1FT1VUIiwiREVGQVVMVF9NRVNTQUdFX1BST0NFU1NJTkdfR1JPV19GQUNUT1IiLCJERUZBVUxUX1dBSVRfRk9SX1RJTUVPVVQiLCJERUZBVUxUX09VVF9PRl9TWU5DX1RIUkVTSE9MRCIsIlVSTFBhcnRzIiwiZml4IiwicHJvdG9jb2wiLCJob3N0IiwicGF0aCIsInF1ZXJ5IiwidXJsIiwicHJvdG9jb2xTZXBhcmF0b3JQb3MiLCJpbmRleE9mIiwicHJvdG9jb2xFbmQiLCJxdWVzdGlvblBvcyIsInF1ZXJ5U3RhcnQiLCJsZW5ndGgiLCJwYXRoRW5kIiwicGF0aFNlcGFyYXRvclBvcyIsInBhdGhTdGFydCIsInN1YnN0cmluZyIsImJhc2VVcmwiLCJiYXNlUGFydHMiLCJwYXJzZSIsImZpeFByb3RvY29sIiwieCIsImZpeEhvc3QiLCJ0b1N0cmluZyIsInJlcGxhY2UiLCJzdGFydHNXaXRoIiwicmVzb2x2ZVRpbWVvdXQiLCJ0aW1lb3V0IiwiZGVmYXVsdFRpbWVvdXQiLCJncm93RmFjdG9yIiwiZGVmYXVsdEdyb3dGYWN0b3IiLCJyZXRyeUluZGV4IiwicmVzb2x2ZWRUaW1lb3V0IiwicmVzb2x2ZWRHcm93RmFjdG9yIiwiTWF0aCIsIm1pbiIsInBvdyIsImRlZmF1bHRTZXJ2ZXIiLCJ2YWx1ZU9yRGVmYXVsdCIsInZhbHVlIiwiZGVmYXVsdFZhbHVlIiwidW5kZWZpbmVkIiwiVE9OQ29uZmlnTW9kdWxlIiwiY29udGV4dCIsImRhdGEiLCJzZXJ2ZXJzIiwicHVzaCIsInRyYWNlciIsIm5vb3BUcmFjZXIiLCJvdXRPZlN5bmNUaHJlc2hvbGQiLCJtZXNzYWdlUmV0cmllc0NvdW50IiwibWVzc2FnZUV4cGlyYXRpb25UaW1lb3V0IiwibWVzc2FnZUV4cGlyYXRpb25UaW1lb3V0R3Jvd0ZhY3RvciIsIm1lc3NhZ2VQcm9jZXNzaW5nVGltZW91dCIsIm1lc3NhZ2VQcm9jZXNzaW5nVGltZW91dEdyb3dGYWN0b3IiLCJ3YWl0Rm9yVGltZW91dCIsInByb2ZpbGUiLCJfcHJvZmlsZVN0YXJ0IiwiYXJncyIsImN1cnJlbnQiLCJEYXRlIiwibm93IiwidGltZVN0cmluZyIsIlN0cmluZyIsInRvRml4ZWQiLCJfcHJvZmlsZVByZXYiLCJfbG9nVmVyYm9zZSIsImNvbnNvbGUiLCJsb2ciLCJyZXF1ZXN0Q29yZSIsImNvcmVDb25maWciLCJPYmplY3QiLCJhc3NpZ24iLCJsb2dfdmVyYm9zZSIsInN0YXJ0UHJvZmlsZSIsIlRPTk1vZHVsZSIsIm1vZHVsZU5hbWUiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7OztBQU9BOztBQUNBOztBQUNBOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUVBLElBQU1BLG1CQUFtQixHQUFHLElBQUksS0FBaEM7QUFDQSxJQUFNQyw2QkFBNkIsR0FBRyxFQUF0QztBQUNBLElBQU1DLGtDQUFrQyxHQUFHLEtBQTNDO0FBQ0EsSUFBTUMsc0NBQXNDLEdBQUcsR0FBL0M7QUFDQSxJQUFNQyxrQ0FBa0MsR0FBRyxLQUEzQztBQUNBLElBQU1DLHNDQUFzQyxHQUFHLEdBQS9DO0FBQ0EsSUFBTUMsd0JBQXdCLEdBQUcsS0FBakM7QUFFQSxJQUFNQyw2QkFBNkIsR0FBRyxLQUF0Qzs7SUFFYUMsUTs7O2dDQTRCR0MsRyxFQUFzQztBQUM5QyxXQUFLQyxRQUFMLEdBQWdCRCxHQUFHLENBQUMsS0FBS0MsUUFBTixDQUFuQjtBQUNBLGFBQU8sSUFBUDtBQUNIOzs7NEJBRU9ELEcsRUFBc0M7QUFDMUMsV0FBS0UsSUFBTCxHQUFZRixHQUFHLENBQUMsS0FBS0UsSUFBTixDQUFmO0FBQ0EsYUFBTyxJQUFQO0FBQ0g7Ozs0QkFFT0YsRyxFQUFzQztBQUMxQyxXQUFLRyxJQUFMLEdBQVlILEdBQUcsQ0FBQyxLQUFLRyxJQUFOLENBQWY7QUFDQSxhQUFPLElBQVA7QUFDSDs7OzZCQUVRSCxHLEVBQXNDO0FBQzNDLFdBQUtJLEtBQUwsR0FBYUosR0FBRyxDQUFDLEtBQUtJLEtBQU4sQ0FBaEI7QUFDQSxhQUFPLElBQVA7QUFDSDs7OzBCQTdDWUMsRyxFQUF1QjtBQUNoQyxVQUFNQyxvQkFBb0IsR0FBR0QsR0FBRyxDQUFDRSxPQUFKLENBQVksS0FBWixDQUE3QjtBQUNBLFVBQU1DLFdBQVcsR0FBR0Ysb0JBQW9CLElBQUksQ0FBeEIsR0FBNEJBLG9CQUFvQixHQUFHLENBQW5ELEdBQXVELENBQTNFO0FBQ0EsVUFBTUcsV0FBVyxHQUFHSixHQUFHLENBQUNFLE9BQUosQ0FBWSxHQUFaLEVBQWlCQyxXQUFqQixDQUFwQjtBQUNBLFVBQU1FLFVBQVUsR0FBR0QsV0FBVyxJQUFJLENBQWYsR0FBbUJBLFdBQVcsR0FBRyxDQUFqQyxHQUFxQ0osR0FBRyxDQUFDTSxNQUE1RDtBQUNBLFVBQU1DLE9BQU8sR0FBR0gsV0FBVyxJQUFJLENBQWYsR0FBbUJBLFdBQW5CLEdBQWlDSixHQUFHLENBQUNNLE1BQXJEO0FBQ0EsVUFBTUUsZ0JBQWdCLEdBQUdSLEdBQUcsQ0FBQ0UsT0FBSixDQUFZLEdBQVosRUFBaUJDLFdBQWpCLENBQXpCLENBTmdDLENBT2hDOztBQUNBLFVBQU1NLFNBQVMsR0FBR0QsZ0JBQWdCLElBQUksQ0FBcEIsR0FDWEEsZ0JBQWdCLEdBQUdELE9BQW5CLEdBQTZCQyxnQkFBN0IsR0FBZ0RELE9BRHJDLEdBRVhILFdBQVcsSUFBSSxDQUFmLEdBQW1CQSxXQUFuQixHQUFpQ0osR0FBRyxDQUFDTSxNQUY1QztBQUdBLGFBQU8sSUFBSVosUUFBSixDQUNITSxHQUFHLENBQUNVLFNBQUosQ0FBYyxDQUFkLEVBQWlCUCxXQUFqQixDQURHLEVBRUhILEdBQUcsQ0FBQ1UsU0FBSixDQUFjUCxXQUFkLEVBQTJCTSxTQUEzQixDQUZHLEVBR0hULEdBQUcsQ0FBQ1UsU0FBSixDQUFjRCxTQUFkLEVBQXlCRixPQUF6QixDQUhHLEVBSUhQLEdBQUcsQ0FBQ1UsU0FBSixDQUFjTCxVQUFkLENBSkcsQ0FBUDtBQU1IOzs7K0JBRWlCTSxPLEVBQWlCWCxHLEVBQXFCO0FBQ3BELFVBQU1ZLFNBQVMsR0FBR2xCLFFBQVEsQ0FBQ21CLEtBQVQsQ0FBZUYsT0FBZixDQUFsQjtBQUNBLGFBQU9qQixRQUFRLENBQUNtQixLQUFULENBQWViLEdBQWYsRUFDRmMsV0FERSxDQUNVLFVBQUFDLENBQUM7QUFBQSxlQUFJQSxDQUFDLElBQUlILFNBQVMsQ0FBQ2hCLFFBQW5CO0FBQUEsT0FEWCxFQUVGb0IsT0FGRSxDQUVNLFVBQUFELENBQUM7QUFBQSxlQUFJQSxDQUFDLElBQUlILFNBQVMsQ0FBQ2YsSUFBbkI7QUFBQSxPQUZQLEVBR0ZvQixRQUhFLEVBQVA7QUFJSDs7O0FBK0JELG9CQUFZckIsUUFBWixFQUE4QkMsSUFBOUIsRUFBNENDLElBQTVDLEVBQTBEQyxLQUExRCxFQUF5RTtBQUFBOztBQUFBOztBQUFBOztBQUFBOztBQUFBOztBQUNyRSxTQUFLSCxRQUFMLEdBQWdCQSxRQUFoQjtBQUNBLFNBQUtDLElBQUwsR0FBWUEsSUFBWjtBQUNBLFNBQUtDLElBQUwsR0FBWUEsSUFBWjtBQUNBLFNBQUtDLEtBQUwsR0FBYUEsS0FBYjtBQUNIOzs7OytCQUdrQjtBQUFBLFVBQ1RELElBRFMsR0FDQSxJQURBLENBQ1RBLElBRFM7O0FBRWYsYUFBT0EsSUFBSSxDQUFDSSxPQUFMLENBQWEsSUFBYixLQUFzQixDQUE3QixFQUFnQztBQUM1QkosUUFBQUEsSUFBSSxHQUFHQSxJQUFJLENBQUNvQixPQUFMLENBQWEsSUFBYixFQUFtQixHQUFuQixDQUFQO0FBQ0g7O0FBQ0QsVUFBSXBCLElBQUksS0FBSyxFQUFULElBQWUsQ0FBQ0EsSUFBSSxDQUFDcUIsVUFBTCxDQUFnQixHQUFoQixDQUFwQixFQUEwQztBQUN0Q3JCLFFBQUFBLElBQUksY0FBT0EsSUFBUCxDQUFKO0FBQ0g7O0FBQ0QsdUJBQVUsS0FBS0YsUUFBZixTQUEwQixLQUFLQyxJQUEvQixTQUFzQ0MsSUFBdEMsU0FBNkMsS0FBS0MsS0FBTCxLQUFlLEVBQWYsR0FBb0IsR0FBcEIsR0FBMEIsRUFBdkUsU0FBNEUsS0FBS0EsS0FBakY7QUFDSDs7Ozs7Ozs7QUFHTCxTQUFTcUIsY0FBVCxDQUNJQyxPQURKLEVBRUlDLGNBRkosRUFHSUMsVUFISixFQUlJQyxpQkFKSixFQUtJQyxVQUxKLEVBTVU7QUFDTixNQUFNQyxlQUFlLEdBQUdMLE9BQU8sS0FBSyxDQUFaLEdBQWdCLENBQWhCLEdBQXFCQSxPQUFPLElBQUlDLGNBQXhEO0FBQ0EsTUFBTUssa0JBQWtCLEdBQUdKLFVBQVUsSUFBSUMsaUJBQXpDO0FBQ0EsU0FBT0ksSUFBSSxDQUFDQyxHQUFMLENBQ0gzQyxtQkFERyxFQUVId0MsZUFBZSxHQUFHRSxJQUFJLENBQUNFLEdBQUwsQ0FBU0gsa0JBQVQsRUFBNkJGLFVBQVUsSUFBSSxDQUEzQyxDQUZmLENBQVA7QUFJSDs7QUFFRCxJQUFNTSxhQUFhLEdBQUcsa0JBQXRCOztBQUNBLFNBQVNDLGNBQVQsQ0FBd0JDLEtBQXhCLEVBQStCQyxZQUEvQixFQUE2QztBQUN6QyxTQUFRRCxLQUFLLEtBQUtFLFNBQVYsSUFBdUJGLEtBQUssS0FBSyxJQUFsQyxHQUEwQ0MsWUFBMUMsR0FBeURELEtBQWhFO0FBQ0g7O0lBRW9CRyxlOzs7OztBQUlqQiwyQkFBWUMsT0FBWixFQUF1QztBQUFBOztBQUFBOztBQUNuQyw4QkFBTUEsT0FBTjs7QUFEbUM7O0FBQUE7O0FBQUE7O0FBQUE7O0FBQUE7O0FBRW5DLFVBQUtDLElBQUwsR0FBWTtBQUNSQyxNQUFBQSxPQUFPLEVBQUUsQ0FBQ1IsYUFBRDtBQURELEtBQVo7QUFGbUM7QUFLdEM7Ozs7NEJBRU9PLEksRUFBcUI7QUFDekIsV0FBS0EsSUFBTCxHQUFZQSxJQUFJLElBQUksS0FBS0EsSUFBekI7O0FBQ0EsVUFBSSxLQUFLQSxJQUFMLENBQVVDLE9BQVYsQ0FBa0JqQyxNQUFsQixLQUE2QixDQUFqQyxFQUFvQztBQUNoQyxhQUFLZ0MsSUFBTCxDQUFVQyxPQUFWLENBQWtCQyxJQUFsQixDQUF1QlQsYUFBdkI7QUFDSDs7QUFDRCxXQUFLVSxNQUFMLEdBQWNILElBQUksQ0FBQ0csTUFBTCxJQUFlQyxZQUE3QjtBQUNIOzs7eUNBRzRCO0FBQ3pCLGFBQU9WLGNBQWMsQ0FBQyxLQUFLTSxJQUFMLENBQVVLLGtCQUFYLEVBQStCbEQsNkJBQS9CLENBQXJCO0FBQ0g7OzswQ0FFNkI7QUFDMUIsYUFBT3VDLGNBQWMsQ0FBQyxLQUFLTSxJQUFMLENBQVVNLG1CQUFYLEVBQWdDekQsNkJBQWhDLENBQXJCO0FBQ0g7Ozs2Q0FFd0JzQyxVLEVBQTZCO0FBQ2xELGFBQU9MLGNBQWMsQ0FDakIsS0FBS2tCLElBQUwsQ0FBVU8sd0JBRE8sRUFFakJ6RCxrQ0FGaUIsRUFHakIsS0FBS2tELElBQUwsQ0FBVVEsa0NBSE8sRUFJakJ6RCxzQ0FKaUIsRUFLakJvQyxVQUxpQixDQUFyQjtBQU9IOzs7NkNBRXdCQSxVLEVBQTZCO0FBQ2xELGFBQU9MLGNBQWMsQ0FDakIsS0FBS2tCLElBQUwsQ0FBVVMsd0JBRE8sRUFFakJ6RCxrQ0FGaUIsRUFHakIsS0FBS2dELElBQUwsQ0FBVVUsa0NBSE8sRUFJakJ6RCxzQ0FKaUIsRUFLakJrQyxVQUxpQixDQUFyQjtBQU9IOzs7cUNBRXdCO0FBQ3JCLGFBQU9PLGNBQWMsQ0FBQyxLQUFLTSxJQUFMLENBQVVXLGNBQVgsRUFBMkJ6RCx3QkFBM0IsQ0FBckI7QUFDSDs7OzBCQUVtQjtBQUNoQixVQUFNMEQsT0FBTyxHQUFHLENBQUMsS0FBS0MsYUFBTCxJQUFzQixDQUF2QixNQUE4QixDQUE5Qzs7QUFEZ0Isd0NBQWJDLElBQWE7QUFBYkEsUUFBQUEsSUFBYTtBQUFBOztBQUVoQixVQUFJRixPQUFKLEVBQWE7QUFDVCxZQUFNRyxPQUFPLEdBQUdDLElBQUksQ0FBQ0MsR0FBTCxLQUFhLElBQTdCO0FBQ0EsWUFBTUMsVUFBVSxhQUFNQyxNQUFNLENBQUNKLE9BQU8sQ0FBQ0ssT0FBUixDQUFnQixDQUFoQixDQUFELENBQVosY0FDWkQsTUFBTSxDQUFDLENBQUNKLE9BQU8sR0FBRyxLQUFLRixhQUFoQixFQUErQk8sT0FBL0IsQ0FBdUMsQ0FBdkMsQ0FBRCxDQURNLGNBRVpELE1BQU0sQ0FBQyxDQUFDSixPQUFPLEdBQUcsS0FBS00sWUFBaEIsRUFBOEJELE9BQTlCLENBQXNDLENBQXRDLENBQUQsQ0FGTSxDQUFoQjs7QUFHQSxZQUFJLEtBQUtFLFdBQVQsRUFBc0I7QUFBQTs7QUFDbEIsc0JBQUFDLE9BQU8sRUFBQ0MsR0FBUiw2QkFBZ0JOLFVBQWhCLGlCQUFvQ0osSUFBcEM7QUFDSCxTQUZELE1BRU87QUFDSFMsVUFBQUEsT0FBTyxDQUFDQyxHQUFSLFlBQWdCTixVQUFoQixVQUFpQ0osSUFBSSxDQUFDLENBQUQsQ0FBckM7QUFDSDs7QUFDRCxhQUFLTyxZQUFMLEdBQW9CTixPQUFwQjtBQUNILE9BWEQsTUFXTyxJQUFJLEtBQUtPLFdBQVQsRUFBc0I7QUFBQTs7QUFDekIscUJBQUFDLE9BQU8sRUFBQ0MsR0FBUiw4QkFBZ0JSLElBQUksQ0FBQ0MsR0FBTCxLQUFhLElBQTdCLGVBQXlDSCxJQUF6QztBQUNIO0FBQ0o7OzttQ0FFYztBQUNYLFdBQUtELGFBQUwsR0FBcUJHLElBQUksQ0FBQ0MsR0FBTCxLQUFhLElBQWxDO0FBQ0EsV0FBS0ksWUFBTCxHQUFvQixLQUFLUixhQUF6QjtBQUNIOzs7a0NBRWE7QUFDVixXQUFLQSxhQUFMLEdBQXFCLEtBQUtRLFlBQUwsR0FBb0IsQ0FBekM7QUFDSDs7Ozs7Ozs7O2lEQUdVLEtBQUtJLFdBQUwsQ0FBaUIsU0FBakIsQzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztxQkFLSCxLQUFLekIsSTs7Ozs7QUFDQzBCLGdCQUFBQSxVLEdBQWFDLE1BQU0sQ0FBQ0MsTUFBUCxDQUFjLEVBQWQsRUFBa0IsS0FBSzVCLElBQXZCLEM7QUFDbkIsdUJBQU8wQixVQUFVLENBQUN2QixNQUFsQjs7dUJBQ00sS0FBS3NCLFdBQUwsQ0FBaUIsT0FBakIsRUFBMEJDLFVBQTFCLEM7OztBQUVWLHFCQUFLSixXQUFMLEdBQW1CLEtBQUt0QixJQUFMLENBQVU2QixXQUFWLElBQXlCLEtBQTVDOztBQUNBLG9CQUFJLEtBQUtQLFdBQVQsRUFBc0I7QUFDbEIsdUJBQUtRLFlBQUw7QUFDSDs7Ozs7Ozs7Ozs7Ozs7Ozs7OztFQTdGb0NDLHFCOzs7QUF1RzdDakMsZUFBZSxDQUFDa0MsVUFBaEIsR0FBNkIsaUJBQTdCIiwic291cmNlc0NvbnRlbnQiOlsiLypcbiAqIENvcHlyaWdodCAyMDE4LTIwMjAgVE9OIERFViBTT0xVVElPTlMgTFRELlxuICovXG5cbi8vIEBmbG93XG5pbXBvcnQgdHlwZSB7IFRPTkNvbmZpZ0RhdGEgfSBmcm9tIFwiLi4vLi4vdHlwZXNcIjtcbmltcG9ydCB0eXBlIHsgVE9OTW9kdWxlQ29udGV4dCB9IGZyb20gXCIuLi9UT05Nb2R1bGVcIjtcbmltcG9ydCB7IFRPTk1vZHVsZSB9IGZyb20gJy4uL1RPTk1vZHVsZSc7XG5pbXBvcnQgeyBUcmFjZXIgfSBmcm9tICdvcGVudHJhY2luZyc7XG5pbXBvcnQgeyB0cmFjZXIgYXMgbm9vcFRyYWNlciB9IGZyb20gXCJvcGVudHJhY2luZy9saWIvbm9vcFwiO1xuXG5jb25zdCBNQVhfTUVTU0FHRV9USU1FT1VUID0gNSAqIDYwMDAwO1xuY29uc3QgREVGQVVMVF9NRVNTQUdFX1JFVFJJRVNfQ09VTlQgPSAxMDtcbmNvbnN0IERFRkFVTFRfTUVTU0FHRV9FWFBJUkFUSU9OX1RJTUVPVVQgPSAxMDAwMDtcbmNvbnN0IERFRkFVTFRfTUVTU0FHRV9FWFBJUkFUSU9OX0dST1dfRkFDVE9SID0gMS41O1xuY29uc3QgREVGQVVMVF9NRVNTQUdFX1BST0NFU1NJTkdfVElNRU9VVCA9IDQwMDAwO1xuY29uc3QgREVGQVVMVF9NRVNTQUdFX1BST0NFU1NJTkdfR1JPV19GQUNUT1IgPSAxLjU7XG5jb25zdCBERUZBVUxUX1dBSVRfRk9SX1RJTUVPVVQgPSA0MDAwMDtcblxuY29uc3QgREVGQVVMVF9PVVRfT0ZfU1lOQ19USFJFU0hPTEQgPSAxNTAwMDtcblxuZXhwb3J0IGNsYXNzIFVSTFBhcnRzIHtcbiAgICBzdGF0aWMgcGFyc2UodXJsOiBzdHJpbmcpOiBVUkxQYXJ0cyB7XG4gICAgICAgIGNvbnN0IHByb3RvY29sU2VwYXJhdG9yUG9zID0gdXJsLmluZGV4T2YoJzovLycpO1xuICAgICAgICBjb25zdCBwcm90b2NvbEVuZCA9IHByb3RvY29sU2VwYXJhdG9yUG9zID49IDAgPyBwcm90b2NvbFNlcGFyYXRvclBvcyArIDMgOiAwO1xuICAgICAgICBjb25zdCBxdWVzdGlvblBvcyA9IHVybC5pbmRleE9mKCc/JywgcHJvdG9jb2xFbmQpO1xuICAgICAgICBjb25zdCBxdWVyeVN0YXJ0ID0gcXVlc3Rpb25Qb3MgPj0gMCA/IHF1ZXN0aW9uUG9zICsgMSA6IHVybC5sZW5ndGg7XG4gICAgICAgIGNvbnN0IHBhdGhFbmQgPSBxdWVzdGlvblBvcyA+PSAwID8gcXVlc3Rpb25Qb3MgOiB1cmwubGVuZ3RoO1xuICAgICAgICBjb25zdCBwYXRoU2VwYXJhdG9yUG9zID0gdXJsLmluZGV4T2YoJy8nLCBwcm90b2NvbEVuZCk7XG4gICAgICAgIC8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSBuby1uZXN0ZWQtdGVybmFyeVxuICAgICAgICBjb25zdCBwYXRoU3RhcnQgPSBwYXRoU2VwYXJhdG9yUG9zID49IDBcbiAgICAgICAgICAgID8gKHBhdGhTZXBhcmF0b3JQb3MgPCBwYXRoRW5kID8gcGF0aFNlcGFyYXRvclBvcyA6IHBhdGhFbmQpXG4gICAgICAgICAgICA6IChxdWVzdGlvblBvcyA+PSAwID8gcXVlc3Rpb25Qb3MgOiB1cmwubGVuZ3RoKTtcbiAgICAgICAgcmV0dXJuIG5ldyBVUkxQYXJ0cyhcbiAgICAgICAgICAgIHVybC5zdWJzdHJpbmcoMCwgcHJvdG9jb2xFbmQpLFxuICAgICAgICAgICAgdXJsLnN1YnN0cmluZyhwcm90b2NvbEVuZCwgcGF0aFN0YXJ0KSxcbiAgICAgICAgICAgIHVybC5zdWJzdHJpbmcocGF0aFN0YXJ0LCBwYXRoRW5kKSxcbiAgICAgICAgICAgIHVybC5zdWJzdHJpbmcocXVlcnlTdGFydCksXG4gICAgICAgICk7XG4gICAgfVxuXG4gICAgc3RhdGljIHJlc29sdmVVcmwoYmFzZVVybDogc3RyaW5nLCB1cmw6IHN0cmluZyk6IHN0cmluZyB7XG4gICAgICAgIGNvbnN0IGJhc2VQYXJ0cyA9IFVSTFBhcnRzLnBhcnNlKGJhc2VVcmwpO1xuICAgICAgICByZXR1cm4gVVJMUGFydHMucGFyc2UodXJsKVxuICAgICAgICAgICAgLmZpeFByb3RvY29sKHggPT4geCB8fCBiYXNlUGFydHMucHJvdG9jb2wpXG4gICAgICAgICAgICAuZml4SG9zdCh4ID0+IHggfHwgYmFzZVBhcnRzLmhvc3QpXG4gICAgICAgICAgICAudG9TdHJpbmcoKTtcbiAgICB9XG5cbiAgICBmaXhQcm90b2NvbChmaXg6IChwOiBzdHJpbmcpID0+IHN0cmluZyk6IFVSTFBhcnRzIHtcbiAgICAgICAgdGhpcy5wcm90b2NvbCA9IGZpeCh0aGlzLnByb3RvY29sKTtcbiAgICAgICAgcmV0dXJuIHRoaXM7XG4gICAgfVxuXG4gICAgZml4SG9zdChmaXg6IChwOiBzdHJpbmcpID0+IHN0cmluZyk6IFVSTFBhcnRzIHtcbiAgICAgICAgdGhpcy5ob3N0ID0gZml4KHRoaXMuaG9zdCk7XG4gICAgICAgIHJldHVybiB0aGlzO1xuICAgIH1cblxuICAgIGZpeFBhdGgoZml4OiAocDogc3RyaW5nKSA9PiBzdHJpbmcpOiBVUkxQYXJ0cyB7XG4gICAgICAgIHRoaXMucGF0aCA9IGZpeCh0aGlzLnBhdGgpO1xuICAgICAgICByZXR1cm4gdGhpcztcbiAgICB9XG5cbiAgICBmaXhRdWVyeShmaXg6IChxOiBzdHJpbmcpID0+IHN0cmluZyk6IFVSTFBhcnRzIHtcbiAgICAgICAgdGhpcy5xdWVyeSA9IGZpeCh0aGlzLnF1ZXJ5KTtcbiAgICAgICAgcmV0dXJuIHRoaXM7XG4gICAgfVxuXG5cbiAgICBwcm90b2NvbDogc3RyaW5nO1xuXG4gICAgaG9zdDogc3RyaW5nO1xuXG4gICAgcGF0aDogc3RyaW5nO1xuXG4gICAgcXVlcnk6IHN0cmluZztcblxuICAgIGNvbnN0cnVjdG9yKHByb3RvY29sOiBzdHJpbmcsIGhvc3Q6IHN0cmluZywgcGF0aDogc3RyaW5nLCBxdWVyeTogc3RyaW5nKSB7XG4gICAgICAgIHRoaXMucHJvdG9jb2wgPSBwcm90b2NvbDtcbiAgICAgICAgdGhpcy5ob3N0ID0gaG9zdDtcbiAgICAgICAgdGhpcy5wYXRoID0gcGF0aDtcbiAgICAgICAgdGhpcy5xdWVyeSA9IHF1ZXJ5O1xuICAgIH1cblxuXG4gICAgdG9TdHJpbmcoKTogc3RyaW5nIHtcbiAgICAgICAgbGV0IHsgcGF0aCB9ID0gdGhpcztcbiAgICAgICAgd2hpbGUgKHBhdGguaW5kZXhPZignLy8nKSA+PSAwKSB7XG4gICAgICAgICAgICBwYXRoID0gcGF0aC5yZXBsYWNlKCcvLycsICcvJyk7XG4gICAgICAgIH1cbiAgICAgICAgaWYgKHBhdGggIT09ICcnICYmICFwYXRoLnN0YXJ0c1dpdGgoJy8nKSkge1xuICAgICAgICAgICAgcGF0aCA9IGAvJHtwYXRofWA7XG4gICAgICAgIH1cbiAgICAgICAgcmV0dXJuIGAke3RoaXMucHJvdG9jb2x9JHt0aGlzLmhvc3R9JHtwYXRofSR7dGhpcy5xdWVyeSAhPT0gJycgPyAnPycgOiAnJ30ke3RoaXMucXVlcnl9YDtcbiAgICB9XG59XG5cbmZ1bmN0aW9uIHJlc29sdmVUaW1lb3V0KFxuICAgIHRpbWVvdXQ/OiBudW1iZXIsXG4gICAgZGVmYXVsdFRpbWVvdXQ6IG51bWJlcixcbiAgICBncm93RmFjdG9yPzogbnVtYmVyLFxuICAgIGRlZmF1bHRHcm93RmFjdG9yOiBudW1iZXIsXG4gICAgcmV0cnlJbmRleD86IG51bWJlcixcbik6IG51bWJlciB7XG4gICAgY29uc3QgcmVzb2x2ZWRUaW1lb3V0ID0gdGltZW91dCA9PT0gMCA/IDAgOiAodGltZW91dCB8fCBkZWZhdWx0VGltZW91dCk7XG4gICAgY29uc3QgcmVzb2x2ZWRHcm93RmFjdG9yID0gZ3Jvd0ZhY3RvciB8fCBkZWZhdWx0R3Jvd0ZhY3RvcjtcbiAgICByZXR1cm4gTWF0aC5taW4oXG4gICAgICAgIE1BWF9NRVNTQUdFX1RJTUVPVVQsXG4gICAgICAgIHJlc29sdmVkVGltZW91dCAqIE1hdGgucG93KHJlc29sdmVkR3Jvd0ZhY3RvciwgcmV0cnlJbmRleCB8fCAwKVxuICAgICk7XG59XG5cbmNvbnN0IGRlZmF1bHRTZXJ2ZXIgPSAnaHR0cDovL2xvY2FsaG9zdCc7XG5mdW5jdGlvbiB2YWx1ZU9yRGVmYXVsdCh2YWx1ZSwgZGVmYXVsdFZhbHVlKSB7XG4gICAgcmV0dXJuICh2YWx1ZSA9PT0gdW5kZWZpbmVkIHx8IHZhbHVlID09PSBudWxsKSA/IGRlZmF1bHRWYWx1ZSA6IHZhbHVlO1xufVxuXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBUT05Db25maWdNb2R1bGUgZXh0ZW5kcyBUT05Nb2R1bGUge1xuICAgIGRhdGE6IFRPTkNvbmZpZ0RhdGE7XG4gICAgdHJhY2VyOiBUcmFjZXI7XG5cbiAgICBjb25zdHJ1Y3Rvcihjb250ZXh0OiBUT05Nb2R1bGVDb250ZXh0KSB7XG4gICAgICAgIHN1cGVyKGNvbnRleHQpO1xuICAgICAgICB0aGlzLmRhdGEgPSB7XG4gICAgICAgICAgICBzZXJ2ZXJzOiBbZGVmYXVsdFNlcnZlcl0sXG4gICAgICAgIH1cbiAgICB9XG5cbiAgICBzZXREYXRhKGRhdGE6IFRPTkNvbmZpZ0RhdGEpIHtcbiAgICAgICAgdGhpcy5kYXRhID0gZGF0YSB8fCB0aGlzLmRhdGE7XG4gICAgICAgIGlmICh0aGlzLmRhdGEuc2VydmVycy5sZW5ndGggPT09IDApIHtcbiAgICAgICAgICAgIHRoaXMuZGF0YS5zZXJ2ZXJzLnB1c2goZGVmYXVsdFNlcnZlcik7XG4gICAgICAgIH1cbiAgICAgICAgdGhpcy50cmFjZXIgPSBkYXRhLnRyYWNlciB8fCBub29wVHJhY2VyO1xuICAgIH1cblxuXG4gICAgb3V0T2ZTeW5jVGhyZXNob2xkKCk6IG51bWJlciB7XG4gICAgICAgIHJldHVybiB2YWx1ZU9yRGVmYXVsdCh0aGlzLmRhdGEub3V0T2ZTeW5jVGhyZXNob2xkLCBERUZBVUxUX09VVF9PRl9TWU5DX1RIUkVTSE9MRCk7XG4gICAgfVxuXG4gICAgbWVzc2FnZVJldHJpZXNDb3VudCgpOiBudW1iZXIge1xuICAgICAgICByZXR1cm4gdmFsdWVPckRlZmF1bHQodGhpcy5kYXRhLm1lc3NhZ2VSZXRyaWVzQ291bnQsIERFRkFVTFRfTUVTU0FHRV9SRVRSSUVTX0NPVU5UKTtcbiAgICB9XG5cbiAgICBtZXNzYWdlRXhwaXJhdGlvblRpbWVvdXQocmV0cnlJbmRleD86IG51bWJlcik6IG51bWJlciB7XG4gICAgICAgIHJldHVybiByZXNvbHZlVGltZW91dChcbiAgICAgICAgICAgIHRoaXMuZGF0YS5tZXNzYWdlRXhwaXJhdGlvblRpbWVvdXQsXG4gICAgICAgICAgICBERUZBVUxUX01FU1NBR0VfRVhQSVJBVElPTl9USU1FT1VULFxuICAgICAgICAgICAgdGhpcy5kYXRhLm1lc3NhZ2VFeHBpcmF0aW9uVGltZW91dEdyb3dGYWN0b3IsXG4gICAgICAgICAgICBERUZBVUxUX01FU1NBR0VfRVhQSVJBVElPTl9HUk9XX0ZBQ1RPUixcbiAgICAgICAgICAgIHJldHJ5SW5kZXgsXG4gICAgICAgICk7XG4gICAgfVxuXG4gICAgbWVzc2FnZVByb2Nlc3NpbmdUaW1lb3V0KHJldHJ5SW5kZXg/OiBudW1iZXIpOiBudW1iZXIge1xuICAgICAgICByZXR1cm4gcmVzb2x2ZVRpbWVvdXQoXG4gICAgICAgICAgICB0aGlzLmRhdGEubWVzc2FnZVByb2Nlc3NpbmdUaW1lb3V0LFxuICAgICAgICAgICAgREVGQVVMVF9NRVNTQUdFX1BST0NFU1NJTkdfVElNRU9VVCxcbiAgICAgICAgICAgIHRoaXMuZGF0YS5tZXNzYWdlUHJvY2Vzc2luZ1RpbWVvdXRHcm93RmFjdG9yLFxuICAgICAgICAgICAgREVGQVVMVF9NRVNTQUdFX1BST0NFU1NJTkdfR1JPV19GQUNUT1IsXG4gICAgICAgICAgICByZXRyeUluZGV4LFxuICAgICAgICApO1xuICAgIH1cblxuICAgIHdhaXRGb3JUaW1lb3V0KCk6IG51bWJlciB7XG4gICAgICAgIHJldHVybiB2YWx1ZU9yRGVmYXVsdCh0aGlzLmRhdGEud2FpdEZvclRpbWVvdXQsIERFRkFVTFRfV0FJVF9GT1JfVElNRU9VVCk7XG4gICAgfVxuXG4gICAgbG9nKC4uLmFyZ3M6IGFueVtdKSB7XG4gICAgICAgIGNvbnN0IHByb2ZpbGUgPSAodGhpcy5fcHJvZmlsZVN0YXJ0IHx8IDApICE9PSAwO1xuICAgICAgICBpZiAocHJvZmlsZSkge1xuICAgICAgICAgICAgY29uc3QgY3VycmVudCA9IERhdGUubm93KCkgLyAxMDAwO1xuICAgICAgICAgICAgY29uc3QgdGltZVN0cmluZyA9IGAke1N0cmluZyhjdXJyZW50LnRvRml4ZWQoMykpfSAke1xuICAgICAgICAgICAgICAgIFN0cmluZygoY3VycmVudCAtIHRoaXMuX3Byb2ZpbGVTdGFydCkudG9GaXhlZCgzKSl9ICR7XG4gICAgICAgICAgICAgICAgU3RyaW5nKChjdXJyZW50IC0gdGhpcy5fcHJvZmlsZVByZXYpLnRvRml4ZWQoMykpfWA7XG4gICAgICAgICAgICBpZiAodGhpcy5fbG9nVmVyYm9zZSkge1xuICAgICAgICAgICAgICAgIGNvbnNvbGUubG9nKGBbJHt0aW1lU3RyaW5nfV1cXG5gLCAuLi5hcmdzKTtcbiAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgICAgY29uc29sZS5sb2coYFske3RpbWVTdHJpbmd9XVxcbmAsIGFyZ3NbMF0pO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgdGhpcy5fcHJvZmlsZVByZXYgPSBjdXJyZW50O1xuICAgICAgICB9IGVsc2UgaWYgKHRoaXMuX2xvZ1ZlcmJvc2UpIHtcbiAgICAgICAgICAgIGNvbnNvbGUubG9nKGBbJHtEYXRlLm5vdygpIC8gMTAwMH1dYCwgLi4uYXJncyk7XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICBzdGFydFByb2ZpbGUoKSB7XG4gICAgICAgIHRoaXMuX3Byb2ZpbGVTdGFydCA9IERhdGUubm93KCkgLyAxMDAwO1xuICAgICAgICB0aGlzLl9wcm9maWxlUHJldiA9IHRoaXMuX3Byb2ZpbGVTdGFydDtcbiAgICB9XG5cbiAgICBzdG9wUHJvZmlsZSgpIHtcbiAgICAgICAgdGhpcy5fcHJvZmlsZVN0YXJ0ID0gdGhpcy5fcHJvZmlsZVByZXYgPSAwO1xuICAgIH1cblxuICAgIGFzeW5jIGdldFZlcnNpb24oKTogUHJvbWlzZTxzdHJpbmc+IHtcbiAgICAgICAgcmV0dXJuIHRoaXMucmVxdWVzdENvcmUoJ3ZlcnNpb24nKTtcbiAgICB9XG5cblxuICAgIGFzeW5jIHNldHVwKCk6IFByb21pc2U8dm9pZD4ge1xuICAgICAgICBpZiAodGhpcy5kYXRhKSB7XG4gICAgICAgICAgICBjb25zdCBjb3JlQ29uZmlnID0gT2JqZWN0LmFzc2lnbih7fSwgdGhpcy5kYXRhKTtcbiAgICAgICAgICAgIGRlbGV0ZSBjb3JlQ29uZmlnLnRyYWNlcjtcbiAgICAgICAgICAgIGF3YWl0IHRoaXMucmVxdWVzdENvcmUoJ3NldHVwJywgY29yZUNvbmZpZyk7XG4gICAgICAgIH1cbiAgICAgICAgdGhpcy5fbG9nVmVyYm9zZSA9IHRoaXMuZGF0YS5sb2dfdmVyYm9zZSB8fCBmYWxzZTtcbiAgICAgICAgaWYgKHRoaXMuX2xvZ1ZlcmJvc2UpIHtcbiAgICAgICAgICAgIHRoaXMuc3RhcnRQcm9maWxlKCk7XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICBfbG9nVmVyYm9zZTogYm9vbGVhbjtcblxuICAgIF9wcm9maWxlU3RhcnQ6IG51bWJlcjtcblxuICAgIF9wcm9maWxlUHJldjogbnVtYmVyO1xufVxuXG5UT05Db25maWdNb2R1bGUubW9kdWxlTmFtZSA9ICdUT05Db25maWdNb2R1bGUnO1xuIl19