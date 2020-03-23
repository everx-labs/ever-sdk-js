function asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { Promise.resolve(value).then(_next, _throw); } }

function _asyncToGenerator(fn) { return function () { var self = this, args = arguments; return new Promise(function (resolve, reject) { var gen = fn.apply(self, args); function _next(value) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "next", value); } function _throw(err) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "throw", err); } _next(undefined); }); }; }

function _possibleConstructorReturn(self, call) { if (call && (typeof call === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

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
import { TONModule } from '../TONModule';
import { Tracer } from 'opentracing';
import { tracer as noopTracer } from "opentracing/lib/noop";
var MAX_MESSAGE_TIMEOUT = 5 * 60000;
var DEFAULT_MESSAGE_RETRIES_COUNT = 10;
var DEFAULT_MESSAGE_EXPIRATION_TIMEOUT = 10000;
var DEFAULT_MESSAGE_EXPIRATION_GROW_FACTOR = 1.5;
var DEFAULT_MESSAGE_PROCESSING_TIMEOUT = 40000;
var DEFAULT_MESSAGE_PROCESSING_GROW_FACTOR = 1.5;
var DEFAULT_WAIT_FOR_TIMEOUT = 40000;
export var URLParts = /*#__PURE__*/function () {
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
      var {
        path
      } = this;

      while (path.indexOf('//') >= 0) {
        path = path.replace('//', '/');
      }

      if (path !== '' && !path.startsWith('/')) {
        path = `/${path}`;
      }

      return `${this.protocol}${this.host}${path}${this.query !== '' ? '?' : ''}${this.query}`;
    }
  }]);

  return URLParts;
}();

function resolveTimeout(timeout, defaultTimeout, growFactor, defaultGrowFactor, retryIndex) {
  var resolvedTimeout = timeout === 0 ? 0 : timeout || defaultTimeout;
  var resolvedGrowFactor = growFactor || defaultGrowFactor;
  return Math.min(MAX_MESSAGE_TIMEOUT, resolvedTimeout * Math.pow(resolvedGrowFactor, retryIndex || 0));
}

var defaultServer = 'http://localhost';

var TONConfigModule = /*#__PURE__*/function (_TONModule) {
  _inherits(TONConfigModule, _TONModule);

  function TONConfigModule(context) {
    var _this;

    _classCallCheck(this, TONConfigModule);

    _this = _possibleConstructorReturn(this, _getPrototypeOf(TONConfigModule).call(this, context));

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

      this.tracer = data.tracer || noopTracer;
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
    value: function log(...args) {
      var profile = (this._profileStart || 0) !== 0;

      if (profile) {
        var current = Date.now() / 1000;
        var timeString = `${String(current.toFixed(3))} ${String((current - this._profileStart).toFixed(3))} ${String((current - this._profilePrev).toFixed(3))}`;

        if (this._logVerbose) {
          console.log(`[${timeString}]\n`, ...args);
        } else {
          console.log(`[${timeString}]\n`, args[0]);
        }

        this._profilePrev = current;
      } else if (this._logVerbose) {
        console.log(`[${Date.now() / 1000}]`, ...args);
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
      var _getVersion = _asyncToGenerator(function* () {
        return this.requestCore('version');
      });

      function getVersion() {
        return _getVersion.apply(this, arguments);
      }

      return getVersion;
    }()
  }, {
    key: "setup",
    value: function () {
      var _setup = _asyncToGenerator(function* () {
        if (this.data) {
          var coreConfig = Object.assign({}, this.data);
          delete coreConfig.tracer;
          yield this.requestCore('setup', coreConfig);
        }

        this._logVerbose = this.data.log_verbose || false;

        if (this._logVerbose) {
          this.startProfile();
        }
      });

      function setup() {
        return _setup.apply(this, arguments);
      }

      return setup;
    }()
  }]);

  return TONConfigModule;
}(TONModule);

export { TONConfigModule as default };
TONConfigModule.moduleName = 'TONConfigModule';
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy9tb2R1bGVzL1RPTkNvbmZpZ01vZHVsZS5qcyJdLCJuYW1lcyI6WyJUT05Nb2R1bGUiLCJUcmFjZXIiLCJ0cmFjZXIiLCJub29wVHJhY2VyIiwiTUFYX01FU1NBR0VfVElNRU9VVCIsIkRFRkFVTFRfTUVTU0FHRV9SRVRSSUVTX0NPVU5UIiwiREVGQVVMVF9NRVNTQUdFX0VYUElSQVRJT05fVElNRU9VVCIsIkRFRkFVTFRfTUVTU0FHRV9FWFBJUkFUSU9OX0dST1dfRkFDVE9SIiwiREVGQVVMVF9NRVNTQUdFX1BST0NFU1NJTkdfVElNRU9VVCIsIkRFRkFVTFRfTUVTU0FHRV9QUk9DRVNTSU5HX0dST1dfRkFDVE9SIiwiREVGQVVMVF9XQUlUX0ZPUl9USU1FT1VUIiwiVVJMUGFydHMiLCJmaXgiLCJwcm90b2NvbCIsImhvc3QiLCJwYXRoIiwicXVlcnkiLCJ1cmwiLCJwcm90b2NvbFNlcGFyYXRvclBvcyIsImluZGV4T2YiLCJwcm90b2NvbEVuZCIsInF1ZXN0aW9uUG9zIiwicXVlcnlTdGFydCIsImxlbmd0aCIsInBhdGhFbmQiLCJwYXRoU2VwYXJhdG9yUG9zIiwicGF0aFN0YXJ0Iiwic3Vic3RyaW5nIiwiYmFzZVVybCIsImJhc2VQYXJ0cyIsInBhcnNlIiwiZml4UHJvdG9jb2wiLCJ4IiwiZml4SG9zdCIsInRvU3RyaW5nIiwicmVwbGFjZSIsInN0YXJ0c1dpdGgiLCJyZXNvbHZlVGltZW91dCIsInRpbWVvdXQiLCJkZWZhdWx0VGltZW91dCIsImdyb3dGYWN0b3IiLCJkZWZhdWx0R3Jvd0ZhY3RvciIsInJldHJ5SW5kZXgiLCJyZXNvbHZlZFRpbWVvdXQiLCJyZXNvbHZlZEdyb3dGYWN0b3IiLCJNYXRoIiwibWluIiwicG93IiwiZGVmYXVsdFNlcnZlciIsIlRPTkNvbmZpZ01vZHVsZSIsImNvbnRleHQiLCJkYXRhIiwic2VydmVycyIsInB1c2giLCJtZXNzYWdlUmV0cmllc0NvdW50IiwibWVzc2FnZUV4cGlyYXRpb25UaW1lb3V0IiwibWVzc2FnZUV4cGlyYXRpb25UaW1lb3V0R3Jvd0ZhY3RvciIsIm1lc3NhZ2VQcm9jZXNzaW5nVGltZW91dCIsIm1lc3NhZ2VQcm9jZXNzaW5nVGltZW91dEdyb3dGYWN0b3IiLCJ3YWl0Rm9yVGltZW91dCIsImFyZ3MiLCJwcm9maWxlIiwiX3Byb2ZpbGVTdGFydCIsImN1cnJlbnQiLCJEYXRlIiwibm93IiwidGltZVN0cmluZyIsIlN0cmluZyIsInRvRml4ZWQiLCJfcHJvZmlsZVByZXYiLCJfbG9nVmVyYm9zZSIsImNvbnNvbGUiLCJsb2ciLCJyZXF1ZXN0Q29yZSIsImNvcmVDb25maWciLCJPYmplY3QiLCJhc3NpZ24iLCJsb2dfdmVyYm9zZSIsInN0YXJ0UHJvZmlsZSIsIm1vZHVsZU5hbWUiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQTs7Ozs7Ozs7Ozs7Ozs7O0FBbUJBLFNBQVNBLFNBQVQsUUFBMEIsY0FBMUI7QUFDQSxTQUFTQyxNQUFULFFBQXVCLGFBQXZCO0FBQ0EsU0FBU0MsTUFBTSxJQUFJQyxVQUFuQixRQUFxQyxzQkFBckM7QUFFQSxJQUFNQyxtQkFBbUIsR0FBRyxJQUFJLEtBQWhDO0FBQ0EsSUFBTUMsNkJBQTZCLEdBQUcsRUFBdEM7QUFDQSxJQUFNQyxrQ0FBa0MsR0FBRyxLQUEzQztBQUNBLElBQU1DLHNDQUFzQyxHQUFHLEdBQS9DO0FBQ0EsSUFBTUMsa0NBQWtDLEdBQUcsS0FBM0M7QUFDQSxJQUFNQyxzQ0FBc0MsR0FBRyxHQUEvQztBQUNBLElBQU1DLHdCQUF3QixHQUFHLEtBQWpDO0FBRUEsV0FBYUMsUUFBYjtBQUFBO0FBQUE7QUFBQSxnQ0E0QmdCQyxHQTVCaEIsRUE0QnNEO0FBQzlDLFdBQUtDLFFBQUwsR0FBZ0JELEdBQUcsQ0FBQyxLQUFLQyxRQUFOLENBQW5CO0FBQ0EsYUFBTyxJQUFQO0FBQ0g7QUEvQkw7QUFBQTtBQUFBLDRCQWlDWUQsR0FqQ1osRUFpQ2tEO0FBQzFDLFdBQUtFLElBQUwsR0FBWUYsR0FBRyxDQUFDLEtBQUtF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S0FBS25CLElBQUwsQ0FBVTBCLFdBQVYsSUFBeUIsS0FBNUM7O0FBQ0EsWUFBSSxLQUFLUCxXQUFULEVBQXNCO0FBQ2xCLGVBQUtRLFlBQUw7QUFDSDtBQUNKLE87Ozs7Ozs7Ozs7O0VBMUZ3QzlFLFM7O1NBQXhCaUQsZTtBQW1HckJBLGVBQWUsQ0FBQzhCLFVBQWhCLEdBQTZCLGlCQUE3QiIsInNvdXJjZXNDb250ZW50IjpbIi8qXG4gKiBDb3B5cmlnaHQgMjAxOC0yMDIwIFRPTiBERVYgU09MVVRJT05TIExURC5cbiAqXG4gKiBMaWNlbnNlZCB1bmRlciB0aGUgU09GVFdBUkUgRVZBTFVBVElPTiBMaWNlbnNlICh0aGUgXCJMaWNlbnNlXCIpOyB5b3UgbWF5IG5vdCB1c2VcbiAqIHRoaXMgZmlsZSBleGNlcHQgaW4gY29tcGxpYW5jZSB3aXRoIHRoZSBMaWNlbnNlLiAgWW91IG1heSBvYnRhaW4gYSBjb3B5IG9mIHRoZVxuICogTGljZW5zZSBhdDpcbiAqXG4gKiBodHRwOi8vd3d3LnRvbi5kZXYvbGljZW5zZXNcbiAqXG4gKiBVbmxlc3MgcmVxdWlyZWQgYnkgYXBwbGljYWJsZSBsYXcgb3IgYWdyZWVkIHRvIGluIHdyaXRpbmcsIHNvZnR3YXJlXG4gKiBkaXN0cmlidXRlZCB1bmRlciB0aGUgTGljZW5zZSBpcyBkaXN0cmlidXRlZCBvbiBhbiBcIkFTIElTXCIgQkFTSVMsXG4gKiBXSVRIT1VUIFdBUlJBTlRJRVMgT1IgQ09ORElUSU9OUyBPRiBBTlkgS0lORCwgZWl0aGVyIGV4cHJlc3Mgb3IgaW1wbGllZC5cbiAqIFNlZSB0aGUgTGljZW5zZSBmb3IgdGhlIHNwZWNpZmljIFRPTiBERVYgc29mdHdhcmUgZ292ZXJuaW5nIHBlcm1pc3Npb25zIGFuZFxuICogbGltaXRhdGlvbnMgdW5kZXIgdGhlIExpY2Vuc2UuXG4gKi9cblxuLy8gQGZsb3dcbmltcG9ydCB0eXBlIHsgVE9OQ29uZmlnRGF0YSB9IGZyb20gXCIuLi8uLi90eXBlc1wiO1xuaW1wb3J0IHR5cGUgeyBUT05Nb2R1bGVDb250ZXh0IH0gZnJvbSBcIi4uL1RPTk1vZHVsZVwiO1xuaW1wb3J0IHsgVE9OTW9kdWxlIH0gZnJvbSAnLi4vVE9OTW9kdWxlJztcbmltcG9ydCB7IFRyYWNlciB9IGZyb20gJ29wZW50cmFjaW5nJztcbmltcG9ydCB7IHRyYWNlciBhcyBub29wVHJhY2VyIH0gZnJvbSBcIm9wZW50cmFjaW5nL2xpYi9ub29wXCI7XG5cbmNvbnN0IE1BWF9NRVNTQUdFX1RJTUVPVVQgPSA1ICogNjAwMDA7XG5jb25zdCBERUZBVUxUX01FU1NBR0VfUkVUUklFU19DT1VOVCA9IDEwO1xuY29uc3QgREVGQVVMVF9NRVNTQUdFX0VYUElSQVRJT05fVElNRU9VVCA9IDEwMDAwO1xuY29uc3QgREVGQVVMVF9NRVNTQUdFX0VYUElSQVRJT05fR1JPV19GQUNUT1IgPSAxLjU7XG5jb25zdCBERUZBVUxUX01FU1NBR0VfUFJPQ0VTU0lOR19USU1FT1VUID0gNDAwMDA7XG5jb25zdCBERUZBVUxUX01FU1NBR0VfUFJPQ0VTU0lOR19HUk9XX0ZBQ1RPUiA9IDEuNTtcbmNvbnN0IERFRkFVTFRfV0FJVF9GT1JfVElNRU9VVCA9IDQwMDAwO1xuXG5leHBvcnQgY2xhc3MgVVJMUGFydHMge1xuICAgIHN0YXRpYyBwYXJzZSh1cmw6IHN0cmluZyk6IFVSTFBhcnRzIHtcbiAgICAgICAgY29uc3QgcHJvdG9jb2xTZXBhcmF0b3JQb3MgPSB1cmwuaW5kZXhPZignOi8vJyk7XG4gICAgICAgIGNvbnN0IHByb3RvY29sRW5kID0gcHJvdG9jb2xTZXBhcmF0b3JQb3MgPj0gMCA/IHByb3RvY29sU2VwYXJhdG9yUG9zICsgMyA6IDA7XG4gICAgICAgIGNvbnN0IHF1ZXN0aW9uUG9zID0gdXJsLmluZGV4T2YoJz8nLCBwcm90b2NvbEVuZCk7XG4gICAgICAgIGNvbnN0IHF1ZXJ5U3RhcnQgPSBxdWVzdGlvblBvcyA+PSAwID8gcXVlc3Rpb25Qb3MgKyAxIDogdXJsLmxlbmd0aDtcbiAgICAgICAgY29uc3QgcGF0aEVuZCA9IHF1ZXN0aW9uUG9zID49IDAgPyBxdWVzdGlvblBvcyA6IHVybC5sZW5ndGg7XG4gICAgICAgIGNvbnN0IHBhdGhTZXBhcmF0b3JQb3MgPSB1cmwuaW5kZXhPZignLycsIHByb3RvY29sRW5kKTtcbiAgICAgICAgLy8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIG5vLW5lc3RlZC10ZXJuYXJ5XG4gICAgICAgIGNvbnN0IHBhdGhTdGFydCA9IHBhdGhTZXBhcmF0b3JQb3MgPj0gMFxuICAgICAgICAgICAgPyAocGF0aFNlcGFyYXRvclBvcyA8IHBhdGhFbmQgPyBwYXRoU2VwYXJhdG9yUG9zIDogcGF0aEVuZClcbiAgICAgICAgICAgIDogKHF1ZXN0aW9uUG9zID49IDAgPyBxdWVzdGlvblBvcyA6IHVybC5sZW5ndGgpO1xuICAgICAgICByZXR1cm4gbmV3IFVSTFBhcnRzKFxuICAgICAgICAgICAgdXJsLnN1YnN0cmluZygwLCBwcm90b2NvbEVuZCksXG4gICAgICAgICAgICB1cmwuc3Vic3RyaW5nKHByb3RvY29sRW5kLCBwYXRoU3RhcnQpLFxuICAgICAgICAgICAgdXJsLnN1YnN0cmluZyhwYXRoU3RhcnQsIHBhdGhFbmQpLFxuICAgICAgICAgICAgdXJsLnN1YnN0cmluZyhxdWVyeVN0YXJ0KSxcbiAgICAgICAgKTtcbiAgICB9XG5cbiAgICBzdGF0aWMgcmVzb2x2ZVVybChiYXNlVXJsOiBzdHJpbmcsIHVybDogc3RyaW5nKTogc3RyaW5nIHtcbiAgICAgICAgY29uc3QgYmFzZVBhcnRzID0gVVJMUGFydHMucGFyc2UoYmFzZVVybCk7XG4gICAgICAgIHJldHVybiBVUkxQYXJ0cy5wYXJzZSh1cmwpXG4gICAgICAgICAgICAuZml4UHJvdG9jb2woeCA9PiB4IHx8IGJhc2VQYXJ0cy5wcm90b2NvbClcbiAgICAgICAgICAgIC5maXhIb3N0KHggPT4geCB8fCBiYXNlUGFydHMuaG9zdClcbiAgICAgICAgICAgIC50b1N0cmluZygpO1xuICAgIH1cblxuICAgIGZpeFByb3RvY29sKGZpeDogKHA6IHN0cmluZykgPT4gc3RyaW5nKTogVVJMUGFydHMge1xuICAgICAgICB0aGlzLnByb3RvY29sID0gZml4KHRoaXMucHJvdG9jb2wpO1xuICAgICAgICByZXR1cm4gdGhpcztcbiAgICB9XG5cbiAgICBmaXhIb3N0KGZpeDogKHA6IHN0cmluZykgPT4gc3RyaW5nKTogVVJMUGFydHMge1xuICAgICAgICB0aGlzLmhvc3QgPSBmaXgodGhpcy5ob3N0KTtcbiAgICAgICAgcmV0dXJuIHRoaXM7XG4gICAgfVxuXG4gICAgZml4UGF0aChmaXg6IChwOiBzdHJpbmcpID0+IHN0cmluZyk6IFVSTFBhcnRzIHtcbiAgICAgICAgdGhpcy5wYXRoID0gZml4KHRoaXMucGF0aCk7XG4gICAgICAgIHJldHVybiB0aGlzO1xuICAgIH1cblxuICAgIGZpeFF1ZXJ5KGZpeDogKHE6IHN0cmluZykgPT4gc3RyaW5nKTogVVJMUGFydHMge1xuICAgICAgICB0aGlzLnF1ZXJ5ID0gZml4KHRoaXMucXVlcnkpO1xuICAgICAgICByZXR1cm4gdGhpcztcbiAgICB9XG5cblxuICAgIHByb3RvY29sOiBzdHJpbmc7XG5cbiAgICBob3N0OiBzdHJpbmc7XG5cbiAgICBwYXRoOiBzdHJpbmc7XG5cbiAgICBxdWVyeTogc3RyaW5nO1xuXG4gICAgY29uc3RydWN0b3IocHJvdG9jb2w6IHN0cmluZywgaG9zdDogc3RyaW5nLCBwYXRoOiBzdHJpbmcsIHF1ZXJ5OiBzdHJpbmcpIHtcbiAgICAgICAgdGhpcy5wcm90b2NvbCA9IHByb3RvY29sO1xuICAgICAgICB0aGlzLmhvc3QgPSBob3N0O1xuICAgICAgICB0aGlzLnBhdGggPSBwYXRoO1xuICAgICAgICB0aGlzLnF1ZXJ5ID0gcXVlcnk7XG4gICAgfVxuXG5cbiAgICB0b1N0cmluZygpOiBzdHJpbmcge1xuICAgICAgICBsZXQgeyBwYXRoIH0gPSB0aGlzO1xuICAgICAgICB3aGlsZSAocGF0aC5pbmRleE9mKCcvLycpID49IDApIHtcbiAgICAgICAgICAgIHBhdGggPSBwYXRoLnJlcGxhY2UoJy8vJywgJy8nKTtcbiAgICAgICAgfVxuICAgICAgICBpZiAocGF0aCAhPT0gJycgJiYgIXBhdGguc3RhcnRzV2l0aCgnLycpKSB7XG4gICAgICAgICAgICBwYXRoID0gYC8ke3BhdGh9YDtcbiAgICAgICAgfVxuICAgICAgICByZXR1cm4gYCR7dGhpcy5wcm90b2NvbH0ke3RoaXMuaG9zdH0ke3BhdGh9JHt0aGlzLnF1ZXJ5ICE9PSAnJyA/ICc/JyA6ICcnfSR7dGhpcy5xdWVyeX1gO1xuICAgIH1cbn1cblxuZnVuY3Rpb24gcmVzb2x2ZVRpbWVvdXQoXG4gICAgdGltZW91dD86IG51bWJlcixcbiAgICBkZWZhdWx0VGltZW91dDogbnVtYmVyLFxuICAgIGdyb3dGYWN0b3I/OiBudW1iZXIsXG4gICAgZGVmYXVsdEdyb3dGYWN0b3I6IG51bWJlcixcbiAgICByZXRyeUluZGV4PzogbnVtYmVyLFxuKTogbnVtYmVyIHtcbiAgICBjb25zdCByZXNvbHZlZFRpbWVvdXQgPSB0aW1lb3V0ID09PSAwID8gMCA6ICh0aW1lb3V0IHx8IGRlZmF1bHRUaW1lb3V0KTtcbiAgICBjb25zdCByZXNvbHZlZEdyb3dGYWN0b3IgPSBncm93RmFjdG9yIHx8IGRlZmF1bHRHcm93RmFjdG9yO1xuICAgIHJldHVybiBNYXRoLm1pbihcbiAgICAgICAgTUFYX01FU1NBR0VfVElNRU9VVCxcbiAgICAgICAgcmVzb2x2ZWRUaW1lb3V0ICogTWF0aC5wb3cocmVzb2x2ZWRHcm93RmFjdG9yLCByZXRyeUluZGV4IHx8IDApXG4gICAgKTtcbn1cblxuY29uc3QgZGVmYXVsdFNlcnZlciA9ICdodHRwOi8vbG9jYWxob3N0JztcblxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgVE9OQ29uZmlnTW9kdWxlIGV4dGVuZHMgVE9OTW9kdWxlIHtcbiAgICBkYXRhOiBUT05Db25maWdEYXRhO1xuICAgIHRyYWNlcjogVHJhY2VyO1xuXG4gICAgY29uc3RydWN0b3IoY29udGV4dDogVE9OTW9kdWxlQ29udGV4dCkge1xuICAgICAgICBzdXBlcihjb250ZXh0KTtcbiAgICAgICAgdGhpcy5kYXRhID0ge1xuICAgICAgICAgICAgc2VydmVyczogW2RlZmF1bHRTZXJ2ZXJdLFxuICAgICAgICB9XG4gICAgfVxuXG4gICAgc2V0RGF0YShkYXRhOiBUT05Db25maWdEYXRhKSB7XG4gICAgICAgIHRoaXMuZGF0YSA9IGRhdGEgfHwgdGhpcy5kYXRhO1xuICAgICAgICBpZiAodGhpcy5kYXRhLnNlcnZlcnMubGVuZ3RoID09PSAwKSB7XG4gICAgICAgICAgICB0aGlzLmRhdGEuc2VydmVycy5wdXNoKGRlZmF1bHRTZXJ2ZXIpO1xuICAgICAgICB9XG4gICAgICAgIHRoaXMudHJhY2VyID0gZGF0YS50cmFjZXIgfHwgbm9vcFRyYWNlcjtcbiAgICB9XG5cblxuICAgIG1lc3NhZ2VSZXRyaWVzQ291bnQoKTogbnVtYmVyIHtcbiAgICAgICAgcmV0dXJuIHRoaXMuZGF0YS5tZXNzYWdlUmV0cmllc0NvdW50IHx8IERFRkFVTFRfTUVTU0FHRV9SRVRSSUVTX0NPVU5UO1xuICAgIH1cblxuICAgIG1lc3NhZ2VFeHBpcmF0aW9uVGltZW91dChyZXRyeUluZGV4PzogbnVtYmVyKTogbnVtYmVyIHtcbiAgICAgICAgcmV0dXJuIHJlc29sdmVUaW1lb3V0KFxuICAgICAgICAgICAgdGhpcy5kYXRhLm1lc3NhZ2VFeHBpcmF0aW9uVGltZW91dCxcbiAgICAgICAgICAgIERFRkFVTFRfTUVTU0FHRV9FWFBJUkFUSU9OX1RJTUVPVVQsXG4gICAgICAgICAgICB0aGlzLmRhdGEubWVzc2FnZUV4cGlyYXRpb25UaW1lb3V0R3Jvd0ZhY3RvcixcbiAgICAgICAgICAgIERFRkFVTFRfTUVTU0FHRV9FWFBJUkFUSU9OX0dST1dfRkFDVE9SLFxuICAgICAgICAgICAgcmV0cnlJbmRleCxcbiAgICAgICAgKTtcbiAgICB9XG5cbiAgICBtZXNzYWdlUHJvY2Vzc2luZ1RpbWVvdXQocmV0cnlJbmRleD86IG51bWJlcik6IG51bWJlciB7XG4gICAgICAgIHJldHVybiByZXNvbHZlVGltZW91dChcbiAgICAgICAgICAgIHRoaXMuZGF0YS5tZXNzYWdlUHJvY2Vzc2luZ1RpbWVvdXQsXG4gICAgICAgICAgICBERUZBVUxUX01FU1NBR0VfUFJPQ0VTU0lOR19USU1FT1VULFxuICAgICAgICAgICAgdGhpcy5kYXRhLm1lc3NhZ2VQcm9jZXNzaW5nVGltZW91dEdyb3dGYWN0b3IsXG4gICAgICAgICAgICBERUZBVUxUX01FU1NBR0VfUFJPQ0VTU0lOR19HUk9XX0ZBQ1RPUixcbiAgICAgICAgICAgIHJldHJ5SW5kZXgsXG4gICAgICAgICk7XG4gICAgfVxuXG4gICAgd2FpdEZvclRpbWVvdXQoKTogbnVtYmVyIHtcbiAgICAgICAgcmV0dXJuIHRoaXMuZGF0YS53YWl0Rm9yVGltZW91dCB8fCBERUZBVUxUX1dBSVRfRk9SX1RJTUVPVVQ7XG4gICAgfVxuXG4gICAgbG9nKC4uLmFyZ3M6IGFueVtdKSB7XG4gICAgICAgIGNvbnN0IHByb2ZpbGUgPSAodGhpcy5fcHJvZmlsZVN0YXJ0IHx8IDApICE9PSAwO1xuICAgICAgICBpZiAocHJvZmlsZSkge1xuICAgICAgICAgICAgY29uc3QgY3VycmVudCA9IERhdGUubm93KCkgLyAxMDAwO1xuICAgICAgICAgICAgY29uc3QgdGltZVN0cmluZyA9IGAke1N0cmluZyhjdXJyZW50LnRvRml4ZWQoMykpfSAke1xuICAgICAgICAgICAgICAgIFN0cmluZygoY3VycmVudCAtIHRoaXMuX3Byb2ZpbGVTdGFydCkudG9GaXhlZCgzKSl9ICR7XG4gICAgICAgICAgICAgICAgU3RyaW5nKChjdXJyZW50IC0gdGhpcy5fcHJvZmlsZVByZXYpLnRvRml4ZWQoMykpfWA7XG4gICAgICAgICAgICBpZiAodGhpcy5fbG9nVmVyYm9zZSkge1xuICAgICAgICAgICAgICAgIGNvbnNvbGUubG9nKGBbJHt0aW1lU3RyaW5nfV1cXG5gLCAuLi5hcmdzKTtcbiAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgICAgY29uc29sZS5sb2coYFske3RpbWVTdHJpbmd9XVxcbmAsIGFyZ3NbMF0pO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgdGhpcy5fcHJvZmlsZVByZXYgPSBjdXJyZW50O1xuICAgICAgICB9IGVsc2UgaWYgKHRoaXMuX2xvZ1ZlcmJvc2UpIHtcbiAgICAgICAgICAgIGNvbnNvbGUubG9nKGBbJHtEYXRlLm5vdygpIC8gMTAwMH1dYCwgLi4uYXJncyk7XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICBzdGFydFByb2ZpbGUoKSB7XG4gICAgICAgIHRoaXMuX3Byb2ZpbGVTdGFydCA9IERhdGUubm93KCkgLyAxMDAwO1xuICAgICAgICB0aGlzLl9wcm9maWxlUHJldiA9IHRoaXMuX3Byb2ZpbGVTdGFydDtcbiAgICB9XG5cbiAgICBzdG9wUHJvZmlsZSgpIHtcbiAgICAgICAgdGhpcy5fcHJvZmlsZVN0YXJ0ID0gdGhpcy5fcHJvZmlsZVByZXYgPSAwO1xuICAgIH1cblxuICAgIGFzeW5jIGdldFZlcnNpb24oKTogUHJvbWlzZTxzdHJpbmc+IHtcbiAgICAgICAgcmV0dXJuIHRoaXMucmVxdWVzdENvcmUoJ3ZlcnNpb24nKTtcbiAgICB9XG5cblxuICAgIGFzeW5jIHNldHVwKCk6IFByb21pc2U8dm9pZD4ge1xuICAgICAgICBpZiAodGhpcy5kYXRhKSB7XG4gICAgICAgICAgICBjb25zdCBjb3JlQ29uZmlnID0gT2JqZWN0LmFzc2lnbih7fSwgdGhpcy5kYXRhKTtcbiAgICAgICAgICAgIGRlbGV0ZSBjb3JlQ29uZmlnLnRyYWNlcjtcbiAgICAgICAgICAgIGF3YWl0IHRoaXMucmVxdWVzdENvcmUoJ3NldHVwJywgY29yZUNvbmZpZyk7XG4gICAgICAgIH1cbiAgICAgICAgdGhpcy5fbG9nVmVyYm9zZSA9IHRoaXMuZGF0YS5sb2dfdmVyYm9zZSB8fCBmYWxzZTtcbiAgICAgICAgaWYgKHRoaXMuX2xvZ1ZlcmJvc2UpIHtcbiAgICAgICAgICAgIHRoaXMuc3RhcnRQcm9maWxlKCk7XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICBfbG9nVmVyYm9zZTogYm9vbGVhbjtcblxuICAgIF9wcm9maWxlU3RhcnQ6IG51bWJlcjtcblxuICAgIF9wcm9maWxlUHJldjogbnVtYmVyO1xufVxuXG5UT05Db25maWdNb2R1bGUubW9kdWxlTmFtZSA9ICdUT05Db25maWdNb2R1bGUnO1xuIl19