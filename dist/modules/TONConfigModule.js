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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy9tb2R1bGVzL1RPTkNvbmZpZ01vZHVsZS5qcyJdLCJuYW1lcyI6WyJERUZBVUxUX01FU1NBR0VfUkVUUklFU19DT1VOVCIsIkRFRkFVTFRfTUVTU0FHRV9QUk9DRVNTSU5HX1RJTUVPVVQiLCJERUZBVUxUX1dBSVRfRk9SX1RJTUVPVVQiLCJERUZBVUxUX05FVFdPUktfVElNRU9VVCIsIkRFRkFVTFRfT1VUX09GX1NZTkNfVEhSRVNIT0xEIiwiVVJMUGFydHMiLCJmaXgiLCJwcm90b2NvbCIsImhvc3QiLCJwYXRoIiwicXVlcnkiLCJ1cmwiLCJwcm90b2NvbFNlcGFyYXRvclBvcyIsImluZGV4T2YiLCJwcm90b2NvbEVuZCIsInF1ZXN0aW9uUG9zIiwicXVlcnlTdGFydCIsImxlbmd0aCIsInBhdGhFbmQiLCJwYXRoU2VwYXJhdG9yUG9zIiwicGF0aFN0YXJ0Iiwic3Vic3RyaW5nIiwiYmFzZVVybCIsImJhc2VQYXJ0cyIsInBhcnNlIiwiZml4UHJvdG9jb2wiLCJ4IiwiZml4SG9zdCIsInRvU3RyaW5nIiwicmVwbGFjZSIsInN0YXJ0c1dpdGgiLCJkZWZhdWx0U2VydmVyIiwidmFsdWVPckRlZmF1bHQiLCJ2YWx1ZSIsImRlZmF1bHRWYWx1ZSIsInVuZGVmaW5lZCIsIlRPTkNvbmZpZ01vZHVsZSIsImNvbnRleHQiLCJkYXRhIiwic2VydmVycyIsInB1c2giLCJ0cmFjZXIiLCJub29wVHJhY2VyIiwib3V0T2ZTeW5jVGhyZXNob2xkIiwibWVzc2FnZVJldHJpZXNDb3VudCIsInRpbWVvdXQiLCJtZXNzYWdlUHJvY2Vzc2luZ1RpbWVvdXQiLCJ3YWl0Rm9yVGltZW91dCIsIm5ldHdvcmtUaW1lb3V0Iiwic3RhcnRUaW1lIiwiRGF0ZSIsIm5vdyIsInByb2ZpbGUiLCJfcHJvZmlsZVN0YXJ0IiwiYXJncyIsImN1cnJlbnQiLCJ0aW1lU3RyaW5nIiwiU3RyaW5nIiwidG9GaXhlZCIsIl9wcm9maWxlUHJldiIsIl9sb2dWZXJib3NlIiwiY29uc29sZSIsImxvZyIsInJlcXVlc3RDb3JlIiwiY29yZUNvbmZpZyIsIk9iamVjdCIsImFzc2lnbiIsImxvZ192ZXJib3NlIiwic3RhcnRQcm9maWxlIiwiVE9OTW9kdWxlIiwibW9kdWxlTmFtZSJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7O0FBT0E7O0FBQ0E7O0FBQ0E7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBRUEsSUFBTUEsNkJBQTZCLEdBQUcsRUFBdEM7QUFDQSxJQUFNQyxrQ0FBa0MsR0FBRyxLQUEzQztBQUNBLElBQU1DLHdCQUF3QixHQUFHLEtBQWpDO0FBQ0EsSUFBTUMsdUJBQXVCLEdBQUcsQ0FBaEM7QUFFQSxJQUFNQyw2QkFBNkIsR0FBRyxLQUF0Qzs7SUFFYUMsUTs7O2dDQTRCR0MsRyxFQUFzQztBQUM5QyxXQUFLQyxRQUFMLEdBQWdCRCxHQUFHLENBQUMsS0FBS0MsUUFBTixDQUFuQjtBQUNBLGFBQU8sSUFBUDtBQUNIOzs7NEJBRU9ELEcsRUFBc0M7QUFDMUMsV0FBS0UsSUFBTCxHQUFZRixHQUFHLENBQUMsS0FBS0UsSUFBTixDQUFmO0FBQ0EsYUFBTyxJQUFQO0FBQ0g7Ozs0QkFFT0YsRyxFQUFzQztBQUMxQyxXQUFLRyxJQUFMLEdBQVlILEdBQUcsQ0FBQyxLQUFLRyxJQUFOLENBQWY7QUFDQSxhQUFPLElBQVA7QUFDSDs7OzZCQUVRSCxHLEVBQXNDO0FBQzNDLFdBQUtJLEtBQUwsR0FBYUosR0FBRyxDQUFDLEtBQUtJLEtBQU4sQ0FBaEI7QUFDQSxhQUFPLElBQVA7QUFDSDs7OzBCQTdDWUMsRyxFQUF1QjtBQUNoQyxVQUFNQyxvQkFBb0IsR0FBR0QsR0FBRyxDQUFDRSxPQUFKLENBQVksS0FBWixDQUE3QjtBQUNBLFVBQU1DLFdBQVcsR0FBR0Ysb0JBQW9CLElBQUksQ0FBeEIsR0FBNEJBLG9CQUFvQixHQUFHLENBQW5ELEdBQXVELENBQTNFO0FBQ0EsVUFBTUcsV0FBVyxHQUFHSixHQUFHLENBQUNFLE9BQUosQ0FBWSxHQUFaLEVBQWlCQyxXQUFqQixDQUFw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Q1gsV0FBS0QsYUFBTCxHQUFxQkgsSUFBSSxDQUFDQyxHQUFMLEtBQWEsSUFBbEM7QUFDQSxXQUFLUSxZQUFMLEdBQW9CLEtBQUtOLGFBQXpCO0FBQ0g7OztrQ0FFYTtBQUNWLFdBQUtBLGFBQUwsR0FBcUIsS0FBS00sWUFBTCxHQUFvQixDQUF6QztBQUNIOzs7Ozs7Ozs7aURBR1UsS0FBS0ksV0FBTCxDQUFpQixTQUFqQixDOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O3FCQUtILEtBQUt6QixJOzs7OztBQUNDMEIsZ0JBQUFBLFUsR0FBYUMsTUFBTSxDQUFDQyxNQUFQLENBQWMsRUFBZCxFQUFrQixLQUFLNUIsSUFBdkIsQztBQUNuQix1QkFBTzBCLFVBQVUsQ0FBQ3ZCLE1BQWxCOzt1QkFDTSxLQUFLc0IsV0FBTCxDQUFpQixPQUFqQixFQUEwQkMsVUFBMUIsQzs7O0FBRVYscUJBQUtKLFdBQUwsR0FBbUIsS0FBS3RCLElBQUwsQ0FBVTZCLFdBQVYsSUFBeUIsS0FBNUM7O0FBQ0Esb0JBQUksS0FBS1AsV0FBVCxFQUFzQjtBQUNsQix1QkFBS1EsWUFBTDtBQUNIOzs7Ozs7Ozs7Ozs7Ozs7Ozs7O0VBN0ZvQ0MscUI7OztBQXVHN0NqQyxlQUFlLENBQUNrQyxVQUFoQixHQUE2QixpQkFBN0IiLCJzb3VyY2VzQ29udGVudCI6WyIvKlxuICogQ29weXJpZ2h0IDIwMTgtMjAyMCBUT04gREVWIFNPTFVUSU9OUyBMVEQuXG4gKi9cblxuLy8gQGZsb3dcbmltcG9ydCB0eXBlIHsgVE9OQ29uZmlnRGF0YSB9IGZyb20gXCIuLi8uLi90eXBlc1wiO1xuaW1wb3J0IHR5cGUgeyBUT05Nb2R1bGVDb250ZXh0IH0gZnJvbSBcIi4uL1RPTk1vZHVsZVwiO1xuaW1wb3J0IHsgVE9OTW9kdWxlIH0gZnJvbSAnLi4vVE9OTW9kdWxlJztcbmltcG9ydCB7IFRyYWNlciB9IGZyb20gJ29wZW50cmFjaW5nJztcbmltcG9ydCB7IHRyYWNlciBhcyBub29wVHJhY2VyIH0gZnJvbSBcIm9wZW50cmFjaW5nL2xpYi9ub29wXCI7XG5cbmNvbnN0IERFRkFVTFRfTUVTU0FHRV9SRVRSSUVTX0NPVU5UID0gMTA7XG5jb25zdCBERUZBVUxUX01FU1NBR0VfUFJPQ0VTU0lOR19USU1FT1VUID0gNDAwMDA7XG5jb25zdCBERUZBVUxUX1dBSVRfRk9SX1RJTUVPVVQgPSA0MDAwMDtcbmNvbnN0IERFRkFVTFRfTkVUV09SS19USU1FT1VUID0gMDtcblxuY29uc3QgREVGQVVMVF9PVVRfT0ZfU1lOQ19USFJFU0hPTEQgPSAxNTAwMDtcblxuZXhwb3J0IGNsYXNzIFVSTFBhcnRzIHtcbiAgICBzdGF0aWMgcGFyc2UodXJsOiBzdHJpbmcpOiBVUkxQYXJ0cyB7XG4gICAgICAgIGNvbnN0IHByb3RvY29sU2VwYXJhdG9yUG9zID0gdXJsLmluZGV4T2YoJzovLycpO1xuICAgICAgICBjb25zdCBwcm90b2NvbEVuZCA9IHByb3RvY29sU2VwYXJhdG9yUG9zID49IDAgPyBwcm90b2NvbFNlcGFyYXRvclBvcyArIDMgOiAwO1xuICAgICAgICBjb25zdCBxdWVzdGlvblBvcyA9IHVybC5pbmRleE9mKCc/JywgcHJvdG9jb2xFbmQpO1xuICAgICAgICBjb25zdCBxdWVyeVN0YXJ0ID0gcXVlc3Rpb25Qb3MgPj0gMCA/IHF1ZXN0aW9uUG9zICsgMSA6IHVybC5sZW5ndGg7XG4gICAgICAgIGNvbnN0IHBhdGhFbmQgPSBxdWVzdGlvblBvcyA+PSAwID8gcXVlc3Rpb25Qb3MgOiB1cmwubGVuZ3RoO1xuICAgICAgICBjb25zdCBwYXRoU2VwYXJhdG9yUG9zID0gdXJsLmluZGV4T2YoJy8nLCBwcm90b2NvbEVuZCk7XG4gICAgICAgIC8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSBuby1uZXN0ZWQtdGVybmFyeVxuICAgICAgICBjb25zdCBwYXRoU3RhcnQgPSBwYXRoU2VwYXJhdG9yUG9zID49IDBcbiAgICAgICAgICAgID8gKHBhdGhTZXBhcmF0b3JQb3MgPCBwYXRoRW5kID8gcGF0aFNlcGFyYXRvclBvcyA6IHBhdGhFbmQpXG4gICAgICAgICAgICA6IChxdWVzdGlvblBvcyA+PSAwID8gcXVlc3Rpb25Qb3MgOiB1cmwubGVuZ3RoKTtcbiAgICAgICAgcmV0dXJuIG5ldyBVUkxQYXJ0cyhcbiAgICAgICAgICAgIHVybC5zdWJzdHJpbmcoMCwgcHJvdG9jb2xFbmQpLFxuICAgICAgICAgICAgdXJsLnN1YnN0cmluZyhwcm90b2NvbEVuZCwgcGF0aFN0YXJ0KSxcbiAgICAgICAgICAgIHVybC5zdWJzdHJpbmcocGF0aFN0YXJ0LCBwYXRoRW5kKSxcbiAgICAgICAgICAgIHVybC5zdWJzdHJpbmcocXVlcnlTdGFydCksXG4gICAgICAgICk7XG4gICAgfVxuXG4gICAgc3RhdGljIHJlc29sdmVVcmwoYmFzZVVybDogc3RyaW5nLCB1cmw6IHN0cmluZyk6IHN0cmluZyB7XG4gICAgICAgIGNvbnN0IGJhc2VQYXJ0cyA9IFVSTFBhcnRzLnBhcnNlKGJhc2VVcmwpO1xuICAgICAgICByZXR1cm4gVVJMUGFydHMucGFyc2UodXJsKVxuICAgICAgICAgICAgLmZpeFByb3RvY29sKHggPT4geCB8fCBiYXNlUGFydHMucHJvdG9jb2wpXG4gICAgICAgICAgICAuZml4SG9zdCh4ID0+IHggfHwgYmFzZVBhcnRzLmhvc3QpXG4gICAgICAgICAgICAudG9TdHJpbmcoKTtcbiAgICB9XG5cbiAgICBmaXhQcm90b2NvbChmaXg6IChwOiBzdHJpbmcpID0+IHN0cmluZyk6IFVSTFBhcnRzIHtcbiAgICAgICAgdGhpcy5wcm90b2NvbCA9IGZpeCh0aGlzLnByb3RvY29sKTtcbiAgICAgICAgcmV0dXJuIHRoaXM7XG4gICAgfVxuXG4gICAgZml4SG9zdChmaXg6IChwOiBzdHJpbmcpID0+IHN0cmluZyk6IFVSTFBhcnRzIHtcbiAgICAgICAgdGhpcy5ob3N0ID0gZml4KHRoaXMuaG9zdCk7XG4gICAgICAgIHJldHVybiB0aGlzO1xuICAgIH1cblxuICAgIGZpeFBhdGgoZml4OiAocDogc3RyaW5nKSA9PiBzdHJpbmcpOiBVUkxQYXJ0cyB7XG4gICAgICAgIHRoaXMucGF0aCA9IGZpeCh0aGlzLnBhdGgpO1xuICAgICAgICByZXR1cm4gdGhpcztcbiAgICB9XG5cbiAgICBmaXhRdWVyeShmaXg6IChxOiBzdHJpbmcpID0+IHN0cmluZyk6IFVSTFBhcnRzIHtcbiAgICAgICAgdGhpcy5xdWVyeSA9IGZpeCh0aGlzLnF1ZXJ5KTtcbiAgICAgICAgcmV0dXJuIHRoaXM7XG4gICAgfVxuXG5cbiAgICBwcm90b2NvbDogc3RyaW5nO1xuXG4gICAgaG9zdDogc3RyaW5nO1xuXG4gICAgcGF0aDogc3RyaW5nO1xuXG4gICAgcXVlcnk6IHN0cmluZztcblxuICAgIGNvbnN0cnVjdG9yKHByb3RvY29sOiBzdHJpbmcsIGhvc3Q6IHN0cmluZywgcGF0aDogc3RyaW5nLCBxdWVyeTogc3RyaW5nKSB7XG4gICAgICAgIHRoaXMucHJvdG9jb2wgPSBwcm90b2NvbDtcbiAgICAgICAgdGhpcy5ob3N0ID0gaG9zdDtcbiAgICAgICAgdGhpcy5wYXRoID0gcGF0aDtcbiAgICAgICAgdGhpcy5xdWVyeSA9IHF1ZXJ5O1xuICAgIH1cblxuXG4gICAgdG9TdHJpbmcoKTogc3RyaW5nIHtcbiAgICAgICAgbGV0IHsgcGF0aCB9ID0gdGhpcztcbiAgICAgICAgd2hpbGUgKHBhdGguaW5kZXhPZignLy8nKSA+PSAwKSB7XG4gICAgICAgICAgICBwYXRoID0gcGF0aC5yZXBsYWNlKCcvLycsICcvJyk7XG4gICAgICAgIH1cbiAgICAgICAgaWYgKHBhdGggIT09ICcnICYmICFwYXRoLnN0YXJ0c1dpdGgoJy8nKSkge1xuICAgICAgICAgICAgcGF0aCA9IGAvJHtwYXRofWA7XG4gICAgICAgIH1cbiAgICAgICAgcmV0dXJuIGAke3RoaXMucHJvdG9jb2x9JHt0aGlzLmhvc3R9JHtwYXRofSR7dGhpcy5xdWVyeSAhPT0gJycgPyAnPycgOiAnJ30ke3RoaXMucXVlcnl9YDtcbiAgICB9XG59XG5jb25zdCBkZWZhdWx0U2VydmVyID0gJ2h0dHA6Ly9sb2NhbGhvc3QnO1xuZnVuY3Rpb24gdmFsdWVPckRlZmF1bHQodmFsdWUsIGRlZmF1bHRWYWx1ZSkge1xuICAgIHJldHVybiAodmFsdWUgPT09IHVuZGVmaW5lZCB8fCB2YWx1ZSA9PT0gbnVsbCkgPyBkZWZhdWx0VmFsdWUgOiB2YWx1ZTtcbn1cblxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgVE9OQ29uZmlnTW9kdWxlIGV4dGVuZHMgVE9OTW9kdWxlIHtcbiAgICBkYXRhOiBUT05Db25maWdEYXRhO1xuICAgIHRyYWNlcjogVHJhY2VyO1xuXG4gICAgY29uc3RydWN0b3IoY29udGV4dDogVE9OTW9kdWxlQ29udGV4dCkge1xuICAgICAgICBzdXBlcihjb250ZXh0KTtcbiAgICAgICAgdGhpcy5kYXRhID0ge1xuICAgICAgICAgICAgc2VydmVyczogW2RlZmF1bHRTZXJ2ZXJdLFxuICAgICAgICB9XG4gICAgfVxuXG4gICAgc2V0RGF0YShkYXRhOiBUT05Db25maWdEYXRhKSB7XG4gICAgICAgIHRoaXMuZGF0YSA9IGRhdGEgfHwgdGhpcy5kYXRhO1xuICAgICAgICBpZiAodGhpcy5kYXRhLnNlcnZlcnMubGVuZ3RoID09PSAwKSB7XG4gICAgICAgICAgICB0aGlzLmRhdGEuc2VydmVycy5wdXNoKGRlZmF1bHRTZXJ2ZXIpO1xuICAgICAgICB9XG4gICAgICAgIHRoaXMudHJhY2VyID0gZGF0YS50cmFjZXIgfHwgbm9vcFRyYWNlcjtcbiAgICB9XG5cbiAgICBnZXRDb25maWdTZXJ2ZXIoKTogc3RyaW5nIHtcbiAgICAgICAgcmV0dXJuIHRoaXMuZGF0YT8uc2VydmVycz8uWzBdIHx8ICcnO1xuICAgIH1cblxuICAgIG91dE9mU3luY1RocmVzaG9sZCgpOiBudW1iZXIge1xuICAgICAgICByZXR1cm4gdmFsdWVPckRlZmF1bHQodGhpcy5kYXRhLm91dE9mU3luY1RocmVzaG9sZCwgREVGQVVMVF9PVVRfT0ZfU1lOQ19USFJFU0hPTEQpO1xuICAgIH1cblxuICAgIG1lc3NhZ2VSZXRyaWVzQ291bnQoKTogbnVtYmVyIHtcbiAgICAgICAgcmV0dXJuIHZhbHVlT3JEZWZhdWx0KHRoaXMuZGF0YS5tZXNzYWdlUmV0cmllc0NvdW50LCBERUZBVUxUX01FU1NBR0VfUkVUUklFU19DT1VOVCk7XG4gICAgfVxuXG4gICAgbWVzc2FnZVByb2Nlc3NpbmdUaW1lb3V0KCk6IG51bWJlciB7XG4gICAgICAgIGNvbnN0IHRpbWVvdXQgPSB0aGlzLmRhdGEubWVzc2FnZVByb2Nlc3NpbmdUaW1lb3V0O1xuICAgICAgICByZXR1cm4gdGltZW91dCA9PT0gMCA/IDAgOiAodGltZW91dCB8fCBERUZBVUxUX01FU1NBR0VfUFJPQ0VTU0lOR19USU1FT1VUKTtcbiAgICB9XG5cbiAgICB3YWl0Rm9yVGltZW91dCgpOiBudW1iZXIge1xuICAgICAgICByZXR1cm4gdmFsdWVPckRlZmF1bHQodGhpcy5kYXRhLndhaXRGb3JUaW1lb3V0LCBERUZBVUxUX1dBSVRfRk9SX1RJTUVPVVQpO1xuICAgIH1cblxuICAgIG5ldHdvcmtUaW1lb3V0KCk6IG51bWJlciB7XG4gICAgICAgIHJldHVybiB2YWx1ZU9yRGVmYXVsdCh0aGlzLmRhdGEubmV0d29ya1RpbWVvdXQsIERFRkFVTFRfTkVUV09SS19USU1FT1VUKTtcbiAgICB9XG5cbiAgICBpc05ldHdvcmtUaW1lb3V0RXhwaXJlZFNpbmNlKHN0YXJ0VGltZTogbnVtYmVyKTogYm9vbGVhbiB7XG4gICAgICAgIGNvbnN0IHRpbWVvdXQgPSB0aGlzLm5ldHdvcmtUaW1lb3V0KCk7XG4gICAgICAgIGlmICh0aW1lb3V0ID09PSAwKSB7XG4gICAgICAgICAgICByZXR1cm4gZmFsc2U7XG4gICAgICAgIH1cbiAgICAgICAgcmV0dXJuIERhdGUubm93KCkgPiAoc3RhcnRUaW1lICsgdGltZW91dCk7XG4gICAgfVxuXG4gICAgbG9nKC4uLmFyZ3M6IGFueVtdKSB7XG4gICAgICAgIGNvbnN0IHByb2ZpbGUgPSAodGhpcy5fcHJvZmlsZVN0YXJ0IHx8IDApICE9PSAwO1xuICAgICAgICBpZiAocHJvZmlsZSkge1xuICAgICAgICAgICAgY29uc3QgY3VycmVudCA9IERhdGUubm93KCkgLyAxMDAwO1xuICAgICAgICAgICAgY29uc3QgdGltZVN0cmluZyA9IGAke1N0cmluZyhjdXJyZW50LnRvRml4ZWQoMykpfSAke1xuICAgICAgICAgICAgICAgIFN0cmluZygoY3VycmVudCAtIHRoaXMuX3Byb2ZpbGVTdGFydCkudG9GaXhlZCgzKSl9ICR7XG4gICAgICAgICAgICAgICAgU3RyaW5nKChjdXJyZW50IC0gdGhpcy5fcHJvZmlsZVByZXYpLnRvRml4ZWQoMykpfWA7XG4gICAgICAgICAgICBpZiAodGhpcy5fbG9nVmVyYm9zZSkge1xuICAgICAgICAgICAgICAgIGNvbnNvbGUubG9nKGBbJHt0aW1lU3RyaW5nfV1cXG5gLCAuLi5hcmdzKTtcbiAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgICAgY29uc29sZS5sb2coYFske3RpbWVTdHJpbmd9XVxcbmAsIGFyZ3NbMF0pO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgdGhpcy5fcHJvZmlsZVByZXYgPSBjdXJyZW50O1xuICAgICAgICB9IGVsc2UgaWYgKHRoaXMuX2xvZ1ZlcmJvc2UpIHtcbiAgICAgICAgICAgIGNvbnNvbGUubG9nKGBbJHtEYXRlLm5vdygpIC8gMTAwMH1dYCwgLi4uYXJncyk7XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICBzdGFydFByb2ZpbGUoKSB7XG4gICAgICAgIHRoaXMuX3Byb2ZpbGVTdGFydCA9IERhdGUubm93KCkgLyAxMDAwO1xuICAgICAgICB0aGlzLl9wcm9maWxlUHJldiA9IHRoaXMuX3Byb2ZpbGVTdGFydDtcbiAgICB9XG5cbiAgICBzdG9wUHJvZmlsZSgpIHtcbiAgICAgICAgdGhpcy5fcHJvZmlsZVN0YXJ0ID0gdGhpcy5fcHJvZmlsZVByZXYgPSAwO1xuICAgIH1cblxuICAgIGFzeW5jIGdldFZlcnNpb24oKTogUHJvbWlzZTxzdHJpbmc+IHtcbiAgICAgICAgcmV0dXJuIHRoaXMucmVxdWVzdENvcmUoJ3ZlcnNpb24nKTtcbiAgICB9XG5cblxuICAgIGFzeW5jIHNldHVwKCk6IFByb21pc2U8dm9pZD4ge1xuICAgICAgICBpZiAodGhpcy5kYXRhKSB7XG4gICAgICAgICAgICBjb25zdCBjb3JlQ29uZmlnID0gT2JqZWN0LmFzc2lnbih7fSwgdGhpcy5kYXRhKTtcbiAgICAgICAgICAgIGRlbGV0ZSBjb3JlQ29uZmlnLnRyYWNlcjtcbiAgICAgICAgICAgIGF3YWl0IHRoaXMucmVxdWVzdENvcmUoJ3NldHVwJywgY29yZUNvbmZpZyk7XG4gICAgICAgIH1cbiAgICAgICAgdGhpcy5fbG9nVmVyYm9zZSA9IHRoaXMuZGF0YS5sb2dfdmVyYm9zZSB8fCBmYWxzZTtcbiAgICAgICAgaWYgKHRoaXMuX2xvZ1ZlcmJvc2UpIHtcbiAgICAgICAgICAgIHRoaXMuc3RhcnRQcm9maWxlKCk7XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICBfbG9nVmVyYm9zZTogYm9vbGVhbjtcblxuICAgIF9wcm9maWxlU3RhcnQ6IG51bWJlcjtcblxuICAgIF9wcm9maWxlUHJldjogbnVtYmVyO1xufVxuXG5UT05Db25maWdNb2R1bGUubW9kdWxlTmFtZSA9ICdUT05Db25maWdNb2R1bGUnO1xuIl19