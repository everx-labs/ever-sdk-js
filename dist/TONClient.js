"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.TONClientError = exports.TONClient = void 0;

var _regenerator = _interopRequireDefault(require("@babel/runtime/regenerator"));

var _toConsumableArray2 = _interopRequireDefault(require("@babel/runtime/helpers/toConsumableArray"));

var _asyncToGenerator2 = _interopRequireDefault(require("@babel/runtime/helpers/asyncToGenerator"));

var _classCallCheck2 = _interopRequireDefault(require("@babel/runtime/helpers/classCallCheck"));

var _createClass2 = _interopRequireDefault(require("@babel/runtime/helpers/createClass"));

var _defineProperty2 = _interopRequireDefault(require("@babel/runtime/helpers/defineProperty"));

var _opentracing = require("opentracing");

var _TONConfigModule = _interopRequireDefault(require("./modules/TONConfigModule"));

var _TONContractsModule = _interopRequireDefault(require("./modules/TONContractsModule"));

var _TONCryptoModule = _interopRequireDefault(require("./modules/TONCryptoModule"));

var _TONQueriesModule = _interopRequireDefault(require("./modules/TONQueriesModule"));

var _TONModule = require("./TONModule");

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

/* eslint-disable class-methods-use-this, no-use-before-define */

/**
 * Main object provided functionality of the TON Client Library
 * Each instance of TONClient has own set of TON Client modules
 * and has own preconfigured client context
 */
var TONClient =
/*#__PURE__*/
function () {
  (0, _createClass2["default"])(TONClient, null, [{
    key: "setLibrary",
    value: function setLibrary(clientPlatform) {
      TONClient.clientPlatform = clientPlatform;
    } // Public

  }]);

  function TONClient() {
    (0, _classCallCheck2["default"])(this, TONClient);
    (0, _defineProperty2["default"])(this, "config", void 0);
    (0, _defineProperty2["default"])(this, "crypto", void 0);
    (0, _defineProperty2["default"])(this, "contracts", void 0);
    (0, _defineProperty2["default"])(this, "queries", void 0);
    (0, _defineProperty2["default"])(this, "modules", void 0);
    this.modules = new Map();
    this.config = this.getModule(_TONConfigModule["default"]);
    this.crypto = this.getModule(_TONCryptoModule["default"]);
    this.contracts = this.getModule(_TONContractsModule["default"]);
    this.queries = this.getModule(_TONQueriesModule["default"]);
  }
  /**
   * Convenient way to create configured instance of the TON Client
   * @param {TONConfigData} config
   * @return {Promise<TONClient>}
   */


  (0, _createClass2["default"])(TONClient, [{
    key: "setup",

    /**
     * Set up the client instance
     * @return {Promise<void>}
     */
    value: function () {
      var _setup = (0, _asyncToGenerator2["default"])(
      /*#__PURE__*/
      _regenerator["default"].mark(function _callee() {
        var modules, _iteratorNormalCompletion, _didIteratorError, _iteratorError, _iterator, _step, _module;

        return _regenerator["default"].wrap(function _callee$(_context) {
          while (1) {
            switch (_context.prev = _context.next) {
              case 0:
                if (TONClient.core) {
                  _context.next = 6;
                  break;
                }

                if (TONClient.clientPlatform) {
                  _context.next = 3;
                  break;
                }

                return _context.abrupt("return");

              case 3:
                _context.next = 5;
                return TONClient.clientPlatform.createLibrary();

              case 5:
                TONClient.core = _context.sent;

              case 6:
                modules = (0, _toConsumableArray2["default"])(this.modules.values());
                _iteratorNormalCompletion = true;
                _didIteratorError = false;
                _iteratorError = undefined;
                _context.prev = 10;
                _iterator = modules[Symbol.iterator]();

              case 12:
                if (_iteratorNormalCompletion = (_step = _iterator.next()).done) {
                  _context.next = 19;
                  break;
                }

                _module = _step.value;
                _context.next = 16;
                return _module.setup();

              case 16:
                _iteratorNormalCompletion = true;
                _context.next = 12;
                break;

              case 19:
                _context.next = 25;
                break;

              case 21:
                _context.prev = 21;
                _context.t0 = _context["catch"](10);
                _didIteratorError = true;
                _iteratorError = _context.t0;

              case 25:
                _context.prev = 25;
                _context.prev = 26;

                if (!_iteratorNormalCompletion && _iterator["return"] != null) {
                  _iterator["return"]();
                }

              case 28:
                _context.prev = 28;

                if (!_didIteratorError) {
                  _context.next = 31;
                  break;
                }

                throw _iteratorError;

              case 31:
                return _context.finish(28);

              case 32:
                return _context.finish(25);

              case 33:
              case "end":
                return _context.stop();
            }
          }
        }, _callee, this, [[10, 21, 25, 33], [26,, 28, 32]]);
      }));

      function setup() {
        return _setup.apply(this, arguments);
      }

      return setup;
    }()
    /**
     * Tear down this client instance.
     * Note that after you have called this method all future use of this instance will fail
     * @return {Promise<void>}
     */

  }, {
    key: "close",
    value: function () {
      var _close = (0, _asyncToGenerator2["default"])(
      /*#__PURE__*/
      _regenerator["default"].mark(function _callee2() {
        return _regenerator["default"].wrap(function _callee2$(_context2) {
          while (1) {
            switch (_context2.prev = _context2.next) {
              case 0:
                _context2.next = 2;
                return this.queries.close();

              case 2:
              case "end":
                return _context2.stop();
            }
          }
        }, _callee2, this);
      }));

      function close() {
        return _close.apply(this, arguments);
      }

      return close;
    }() // TONModuleContext

  }, {
    key: "getCore",
    value: function getCore() {
      return TONClient.core;
    }
  }, {
    key: "getModule",
    value: function getModule(ModuleClass) {
      var name = ModuleClass.moduleName;
      var existingModule = this.modules.get(name);

      if (existingModule) {
        return existingModule;
      }

      var module = new ModuleClass(this);
      this.modules.set(name, module);
      return module;
    }
  }, {
    key: "trace",
    value: function () {
      var _trace = (0, _asyncToGenerator2["default"])(
      /*#__PURE__*/
      _regenerator["default"].mark(function _callee3(name, f, parentSpan) {
        var span, result;
        return _regenerator["default"].wrap(function _callee3$(_context3) {
          while (1) {
            switch (_context3.prev = _context3.next) {
              case 0:
                span = this.config.tracer.startSpan(name, {
                  childOf: parentSpan
                });
                _context3.prev = 1;
                span.setTag(_opentracing.Tags.SPAN_KIND, 'client');
                _context3.next = 5;
                return f(span);

              case 5:
                result = _context3.sent;

                if (result !== undefined) {
                  span.setTag('result', result);
                }

                span.finish();
                return _context3.abrupt("return", result);

              case 11:
                _context3.prev = 11;
                _context3.t0 = _context3["catch"](1);
                span.logEvent('failed', _context3.t0);
                span.finish();
                throw _context3.t0;

              case 16:
              case "end":
                return _context3.stop();
            }
          }
        }, _callee3, this, [[1, 11]]);
      }));

      function trace(_x, _x2, _x3) {
        return _trace.apply(this, arguments);
      }

      return trace;
    }() // Internals

  }], [{
    key: "create",
    value: function () {
      var _create = (0, _asyncToGenerator2["default"])(
      /*#__PURE__*/
      _regenerator["default"].mark(function _callee4(config) {
        var client;
        return _regenerator["default"].wrap(function _callee4$(_context4) {
          while (1) {
            switch (_context4.prev = _context4.next) {
              case 0:
                client = new TONClient();
                client.config.setData(config);
                _context4.next = 4;
                return client.setup();

              case 4:
                return _context4.abrupt("return", client);

              case 5:
              case "end":
                return _context4.stop();
            }
          }
        }, _callee4);
      }));

      function create(_x4) {
        return _create.apply(this, arguments);
      }

      return create;
    }()
  }]);
  return TONClient;
}();

exports.TONClient = TONClient;
(0, _defineProperty2["default"])(TONClient, "clientPlatform", null);
(0, _defineProperty2["default"])(TONClient, "core", null);

var TONClientError =
/*#__PURE__*/
function () {
  function TONClientError(message, code, source, data) {
    (0, _classCallCheck2["default"])(this, TONClientError);
    (0, _defineProperty2["default"])(this, "message", void 0);
    (0, _defineProperty2["default"])(this, "source", void 0);
    (0, _defineProperty2["default"])(this, "code", void 0);
    (0, _defineProperty2["default"])(this, "data", void 0);
    this.message = message;
    this.code = code;
    this.source = source;
    this.data = data;
  }

  (0, _createClass2["default"])(TONClientError, null, [{
    key: "internalError",
    value: function internalError(message) {
      return new TONClientError("Internal error: ".concat(message), TONClientError.code.INTERNAL_ERROR, TONClientError.source.CLIENT);
    }
  }, {
    key: "clientDoesNotConfigured",
    value: function clientDoesNotConfigured() {
      return new TONClientError('TON Client does not configured', TONClientError.code.CLIENT_DOES_NOT_CONFIGURED, TONClientError.source.CLIENT);
    }
  }, {
    key: "sendNodeRequestFailed",
    value: function sendNodeRequestFailed(responseText) {
      return new TONClientError("Send node request failed: ".concat(responseText), TONClientError.code.SEND_NODE_REQUEST_FAILED, TONClientError.source.CLIENT);
    }
  }, {
    key: "runLocalAccountDoesNotExists",
    value: function runLocalAccountDoesNotExists(functionName, address) {
      return new TONClientError("[".concat(functionName, "] run local failed: account [").concat(address, "] does not exists"), TONClientError.code.RUN_LOCAL_ACCOUNT_DOES_NOT_EXISTS, TONClientError.source.CLIENT);
    }
  }, {
    key: "waitForTimeout",
    value: function waitForTimeout() {
      return new TONClientError('Wait for operation rejected on timeout', TONClientError.code.WAIT_FOR_TIMEOUT, TONClientError.source.CLIENT);
    }
  }, {
    key: "queryFailed",
    value: function queryFailed(errors) {
      return new TONClientError("Query failed: ".concat(errors.map(function (x) {
        return x.message || x.toString();
      }).join('\n')), TONClientError.code.QUERY_FAILED, TONClientError.source.CLIENT);
    }
  }]);
  return TONClientError;
}();

exports.TONClientError = TONClientError;
(0, _defineProperty2["default"])(TONClientError, "source", {
  CLIENT: 'client',
  NODE: 'node'
});
(0, _defineProperty2["default"])(TONClientError, "code", {
  CLIENT_DOES_NOT_CONFIGURED: 1000,
  SEND_NODE_REQUEST_FAILED: 1001,
  RUN_LOCAL_ACCOUNT_DOES_NOT_EXISTS: 1002,
  WAIT_FOR_TIMEOUT: 1003,
  INTERNAL_ERROR: 1004,
  QUERY_FAILED: 1005
});
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uL3NyYy9UT05DbGllbnQuanMiXSwibmFtZXMiOlsiVE9OQ2xpZW50IiwiY2xpZW50UGxhdGZvcm0iLCJtb2R1bGVzIiwiTWFwIiwiY29uZmlnIiwiZ2V0TW9kdWxlIiwiVE9OQ29uZmlnTW9kdWxlIiwiY3J5cHRvIiwiVE9OQ3J5cHRvTW9kdWxlIiwiY29udHJhY3RzIiwiVE9OQ29udHJhY3RzTW9kdWxlIiwicXVlcmllcyIsIlRPTlF1ZXJpZXNNb2R1bGUiLCJjb3JlIiwiY3JlYXRlTGlicmFyeSIsInZhbHVlcyIsIm1vZHVsZSIsInNldHVwIiwiY2xvc2UiLCJNb2R1bGVDbGFzcyIsIm5hbWUiLCJtb2R1bGVOYW1lIiwiZXhpc3RpbmdNb2R1bGUiLCJnZXQiLCJzZXQiLCJmIiwicGFyZW50U3BhbiIsInNwYW4iLCJ0cmFjZXIiLCJzdGFydFNwYW4iLCJjaGlsZE9mIiwic2V0VGFnIiwiVGFncyIsIlNQQU5fS0lORCIsInJlc3VsdCIsInVuZGVmaW5lZCIsImZpbmlzaCIsImxvZ0V2ZW50IiwiY2xpZW50Iiwic2V0RGF0YSIsIlRPTkNsaWVudEVycm9yIiwibWVzc2FnZSIsImNvZGUiLCJzb3VyY2UiLCJkYXRhIiwiSU5URVJOQUxfRVJST1IiLCJDTElFTlQiLCJDTElFTlRfRE9FU19OT1RfQ09ORklHVVJFRCIsInJlc3BvbnNlVGV4dCIsIlNFTkRfTk9ERV9SRVFVRVNUX0ZBSUxFRCIsImZ1bmN0aW9uTmFtZSIsImFkZHJlc3MiLCJSVU5fTE9DQUxfQUNDT1VOVF9ET0VTX05PVF9FWElTVFMiLCJXQUlUX0ZPUl9USU1FT1VUIiwiZXJyb3JzIiwibWFwIiwieCIsInRvU3RyaW5nIiwiam9pbiIsIlFVRVJZX0ZBSUxFRCIsIk5PREUiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQWlCQTs7QUFFQTs7QUFDQTs7QUFDQTs7QUFFQTs7QUFHQTs7QUExQkE7Ozs7Ozs7Ozs7Ozs7Ozs7QUFzQkE7O0FBeUJBOzs7OztJQUthQSxTOzs7Ozsr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YyxNQUFNLENBQUNDLEdBQVAsQ0FBVyxVQUFBQyxDQUFDO0FBQUEsZUFBSUEsQ0FBQyxDQUFDZixPQUFGLElBQWFlLENBQUMsQ0FBQ0MsUUFBRixFQUFqQjtBQUFBLE9BQVosRUFBMkNDLElBQTNDLENBQWdELElBQWhELENBRGQsR0FFSGxCLGNBQWMsQ0FBQ0UsSUFBZixDQUFvQmlCLFlBRmpCLEVBR0huQixjQUFjLENBQUNHLE1BQWYsQ0FBc0JHLE1BSG5CLENBQVA7QUFLSDs7Ozs7O2lDQXhFUU4sYyxZQUNPO0FBQ1pNLEVBQUFBLE1BQU0sRUFBRSxRQURJO0FBRVpjLEVBQUFBLElBQUksRUFBRTtBQUZNLEM7aUNBRFBwQixjLFVBS0s7QUFDVk8sRUFBQUEsMEJBQTBCLEVBQUUsSUFEbEI7QUFFVkUsRUFBQUEsd0JBQXdCLEVBQUUsSUFGaEI7QUFHVkcsRUFBQUEsaUNBQWlDLEVBQUUsSUFIekI7QUFJVkMsRUFBQUEsZ0JBQWdCLEVBQUUsSUFKUjtBQUtWUixFQUFBQSxjQUFjLEVBQUUsSUFMTjtBQU1WYyxFQUFBQSxZQUFZLEVBQUU7QUFOSixDIiwic291cmNlc0NvbnRlbnQiOlsiLypcbiAqIENvcHlyaWdodCAyMDE4LTIwMjAgVE9OIERFViBTT0xVVElPTlMgTFRELlxuICpcbiAqIExpY2Vuc2VkIHVuZGVyIHRoZSBTT0ZUV0FSRSBFVkFMVUFUSU9OIExpY2Vuc2UgKHRoZSBcIkxpY2Vuc2VcIik7IHlvdSBtYXkgbm90IHVzZVxuICogdGhpcyBmaWxlIGV4Y2VwdCBpbiBjb21wbGlhbmNlIHdpdGggdGhlIExpY2Vuc2UuICBZb3UgbWF5IG9idGFpbiBhIGNvcHkgb2YgdGhlXG4gKiBMaWNlbnNlIGF0OlxuICpcbiAqIGh0dHA6Ly93d3cudG9uLmRldi9saWNlbnNlc1xuICpcbiAqIFVubGVzcyByZXF1aXJlZCBieSBhcHBsaWNhYmxlIGxhdyBvciBhZ3JlZWQgdG8gaW4gd3JpdGluZywgc29mdHdhcmVcbiAqIGRpc3RyaWJ1dGVkIHVuZGVyIHRoZSBMaWNlbnNlIGlzIGRpc3RyaWJ1dGVkIG9uIGFuIFwiQVMgSVNcIiBCQVNJUyxcbiAqIFdJVEhPVVQgV0FSUkFOVElFUyBPUiBDT05ESVRJT05TIE9GIEFOWSBLSU5ELCBlaXRoZXIgZXhwcmVzcyBvciBpbXBsaWVkLlxuICogU2VlIHRoZSBMaWNlbnNlIGZvciB0aGUgc3BlY2lmaWMgVE9OIERFViBzb2Z0d2FyZSBnb3Zlcm5pbmcgcGVybWlzc2lvbnMgYW5kXG4gKiBsaW1pdGF0aW9ucyB1bmRlciB0aGUgTGljZW5zZS5cbiAqL1xuLy8gQGZsb3dcblxuaW1wb3J0IHsgVGFncywgU3BhbiwgU3BhbkNvbnRleHQgfSBmcm9tIFwib3BlbnRyYWNpbmdcIjtcbmltcG9ydCB0eXBlIHsgVE9OQ29uZmlnRGF0YSB9IGZyb20gXCIuLi90eXBlc1wiO1xuaW1wb3J0IFRPTkNvbmZpZ01vZHVsZSBmcm9tICcuL21vZHVsZXMvVE9OQ29uZmlnTW9kdWxlJztcbmltcG9ydCBUT05Db250cmFjdHNNb2R1bGUgZnJvbSAnLi9tb2R1bGVzL1RPTkNvbnRyYWN0c01vZHVsZSc7XG5pbXBvcnQgVE9OQ3J5cHRvTW9kdWxlIGZyb20gJy4vbW9kdWxlcy9UT05DcnlwdG9Nb2R1bGUnO1xuLyogZXNsaW50LWRpc2FibGUgY2xhc3MtbWV0aG9kcy11c2UtdGhpcywgbm8tdXNlLWJlZm9yZS1kZWZpbmUgKi9cbmltcG9ydCBUT05RdWVyaWVzTW9kdWxlIGZyb20gXCIuL21vZHVsZXMvVE9OUXVlcmllc01vZHVsZVwiO1xuXG5pbXBvcnQgdHlwZSB7IFRPTkNsaWVudExpYnJhcnksIFRPTk1vZHVsZUNvbnRleHQsIH0gZnJvbSAnLi9UT05Nb2R1bGUnO1xuaW1wb3J0IHsgVE9OTW9kdWxlIH0gZnJvbSAnLi9UT05Nb2R1bGUnO1xuXG4vKipcbiAqIEphdmFTY3JpcHQgcGxhdGZvcm0gc3BlY2lmaWMgY29uZmlndXJhdGlvblxuICovXG50eXBlIFRPTkNsaWVudFBsYXRmb3JtID0ge1xuICAgIC8qKlxuICAgICAqIFBsYXRmb3JtIHNwZWNpZmljIGBmZXRjaGAgZnVuY3Rpb25cbiAgICAgKi9cbiAgICBmZXRjaDogYW55LFxuICAgIC8qKlxuICAgICAqIFBsYXRmb3JtIHNwZWNpZmljIGBXZWJTb2NrZXRgIGltcGxlbWVudGF0aW9uXG4gICAgICogVGhpcyBpbXBsZW1lbnRhdGlvbiBtdXN0IGNvbmZvcm1zIHRvIFczQyBXZWJTb2NrZXRcbiAgICAgKi9cbiAgICBXZWJTb2NrZXQ6IGFueSxcbiAgICAvKipcbiAgICAgKiBSZXF1ZXN0IGNyZWF0aW9uIG9mIHRoZSBjbGllbnQgY29yZVxuICAgICAqL1xuICAgIGNyZWF0ZUxpYnJhcnk6ICgpID0+IFByb21pc2U8VE9OQ2xpZW50TGlicmFyeT4sXG59O1xuXG4vKipcbiAqIE1haW4gb2JqZWN0IHByb3ZpZGVkIGZ1bmN0aW9uYWxpdHkgb2YgdGhlIFRPTiBDbGllbnQgTGlicmFyeVxuICogRWFjaCBpbnN0YW5jZSBvZiBUT05DbGllbnQgaGFzIG93biBzZXQgb2YgVE9OIENsaWVudCBtb2R1bGVzXG4gKiBhbmQgaGFzIG93biBwcmVjb25maWd1cmVkIGNsaWVudCBjb250ZXh0XG4gKi9cbmV4cG9ydCBjbGFzcyBUT05DbGllbnQgaW1wbGVtZW50cyBUT05Nb2R1bGVDb250ZXh0IHtcbiAgICBzdGF0aWMgc2V0TGlicmFyeShjbGllbnRQbGF0Zm9ybTogVE9OQ2xpZW50UGxhdGZvcm0pIHtcbiAgICAgICAgVE9OQ2xpZW50LmNsaWVudFBsYXRmb3JtID0gY2xpZW50UGxhdGZvcm07XG4gICAgfVxuXG5cbiAgICAvLyBQdWJsaWNcbiAgICBjb25maWc6IFRPTkNvbmZpZ01vZHVsZTtcbiAgICBjcnlwdG86IFRPTkNyeXB0b01vZHVsZTtcbiAgICBjb250cmFjdHM6IFRPTkNvbnRyYWN0c01vZHVsZTtcbiAgICBxdWVyaWVzOiBUT05RdWVyaWVzTW9kdWxlO1xuXG4gICAgY29uc3RydWN0b3IoKSB7XG4gICAgICAgIHRoaXMubW9kdWxlcyA9IG5ldyBNYXAoKTtcbiAgICAgICAgdGhpcy5jb25maWcgPSB0aGlzLmdldE1vZHVsZShUT05Db25maWdNb2R1bGUpO1xuICAgICAgICB0aGlzLmNyeXB0byA9IHRoaXMuZ2V0TW9kdWxlKFRPTkNyeXB0b01vZHVsZSk7XG4gICAgICAgIHRoaXMuY29udHJhY3RzID0gdGhpcy5nZXRNb2R1bGUoVE9OQ29udHJhY3RzTW9kdWxlKTtcbiAgICAgICAgdGhpcy5xdWVyaWVzID0gdGhpcy5nZXRNb2R1bGUoVE9OUXVlcmllc01vZHVsZSk7XG4gICAgfVxuXG4gICAgLyoqXG4gICAgICogQ29udmVuaWVudCB3YXkgdG8gY3JlYXRlIGNvbmZpZ3VyZWQgaW5zdGFuY2Ugb2YgdGhlIFRPTiBDbGllbnRcbiAgICAgKiBAcGFyYW0ge1RPTkNvbmZpZ0RhdGF9IGNvbmZpZ1xuICAgICAqIEByZXR1cm4ge1Byb21pc2U8VE9OQ2xpZW50Pn1cbiAgICAgKi9cbiAgICBzdGF0aWMgYXN5bmMgY3JlYXRlKGNvbmZpZzogVE9OQ29uZmlnRGF0YSk6IFByb21pc2U8VE9OQ2xpZW50PiB7XG4gICAgICAgIGNvbnN0IGNsaWVudCA9IG5ldyBUT05DbGllbnQoKTtcbiAgICAgICAgY2xpZW50LmNvbmZpZy5zZXREYXRhKGNvbmZpZyk7XG4gICAgICAgIGF3YWl0IGNsaWVudC5zZXR1cCgpO1xuICAgICAgICByZXR1cm4gY2xpZW50O1xuICAgIH1cblxuICAgIC8qKlxuICAgICAqIFNldCB1cCB0aGUgY2xpZW50IGluc3RhbmNlXG4gICAgICogQHJldHVybiB7UHJvbWlzZTx2b2lkPn1cbiAgICAgKi9cbiAgICBhc3luYyBzZXR1cCgpOiBQcm9taXNlPHZvaWQ+IHtcbiAgICAgICAgaWYgKCFUT05DbGllbnQuY29yZSkge1xuICAgICAgICAgICAgaWYgKCFUT05DbGllbnQuY2xpZW50UGxhdGZvcm0pIHtcbiAgICAgICAgICAgICAgICByZXR1cm47XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBUT05DbGllbnQuY29yZSA9IGF3YWl0IFRPTkNsaWVudC5jbGllbnRQbGF0Zm9ybS5jcmVhdGVMaWJyYXJ5KCk7XG4gICAgICAgIH1cbiAgICAgICAgY29uc3QgbW9kdWxlczogVE9OTW9kdWxlW10gPSBbLi4udGhpcy5tb2R1bGVzLnZhbHVlcygpXTtcbiAgICAgICAgZm9yIChjb25zdCBtb2R1bGUgb2YgbW9kdWxlcykge1xuICAgICAgICAgICAgYXdhaXQgbW9kdWxlLnNldHVwKCk7XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICAvKipcbiAgICAgKiBUZWFyIGRvd24gdGhpcyBjbGllbnQgaW5zdGFuY2UuXG4gICAgICogTm90ZSB0aGF0IGFmdGVyIHlvdSBoYXZlIGNhbGxlZCB0aGlzIG1ldGhvZCBhbGwgZnV0dXJlIHVzZSBvZiB0aGlzIGluc3RhbmNlIHdpbGwgZmFpbFxuICAgICAqIEByZXR1cm4ge1Byb21pc2U8dm9pZD59XG4gICAgICovXG4gICAgYXN5bmMgY2xvc2UoKTogUHJvbWlzZTx2b2lkPiB7XG4gICAgICAgIGF3YWl0IHRoaXMucXVlcmllcy5jbG9zZSgpO1xuICAgIH1cblxuICAgIC8vIFRPTk1vZHVsZUNvbnRleHRcblxuICAgIGdldENvcmUoKTogP1RPTkNsaWVudExpYnJhcnkge1xuICAgICAgICByZXR1cm4gVE9OQ2xpZW50LmNvcmU7XG4gICAgfVxuXG4gICAgZ2V0TW9kdWxlPFQ+KE1vZHVsZUNsYXNzOiB0eXBlb2YgVE9OTW9kdWxlKTogVCB7XG4gICAgICAgIGNvbnN0IG5hbWUgPSBNb2R1bGVDbGFzcy5tb2R1bGVOYW1lO1xuICAgICAgICBjb25zdCBleGlzdGluZ01vZHVsZSA9IHRoaXMubW9kdWxlcy5nZXQobmFtZSk7XG4gICAgICAgIGlmIChleGlzdGluZ01vZHVsZSkge1xuICAgICAgICAgICAgcmV0dXJuIChleGlzdGluZ01vZHVsZTogYW55KTtcbiAgICAgICAgfVxuICAgICAgICBjb25zdCBtb2R1bGUgPSBuZXcgTW9kdWxlQ2xhc3ModGhpcyk7XG4gICAgICAgIHRoaXMubW9kdWxlcy5zZXQobmFtZSwgbW9kdWxlKTtcbiAgICAgICAgcmV0dXJuIChtb2R1bGU6IGFueSk7XG4gICAgfVxuXG5cbiAgICBhc3luYyB0cmFjZTxUPihcbiAgICAgICAgbmFtZTogc3RyaW5nLFxuICAgICAgICBmOiAoc3BhbjogU3BhbikgPT4gUHJvbWlzZTxUPixcbiAgICAgICAgcGFyZW50U3Bhbj86IChTcGFuIHwgU3BhbkNvbnRleHQpXG4gICAgKTogUHJvbWlzZTxUPiB7XG4gICAgICAgIGNvbnN0IHNwYW4gPSB0aGlzLmNvbmZpZy50cmFjZXIuc3RhcnRTcGFuKG5hbWUsIHsgY2hpbGRPZjogcGFyZW50U3BhbiB9KTtcbiAgICAgICAgdHJ5IHtcbiAgICAgICAgICAgIHNwYW4uc2V0VGFnKFRhZ3MuU1BBTl9LSU5ELCAnY2xpZW50Jyk7XG4gICAgICAgICAgICBjb25zdCByZXN1bHQgPSBhd2FpdCBmKHNwYW4pO1xuICAgICAgICAgICAgaWYgKHJlc3VsdCAhPT0gdW5kZWZpbmVkKSB7XG4gICAgICAgICAgICAgICAgc3Bhbi5zZXRUYWcoJ3Jlc3VsdCcsIHJlc3VsdCk7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBzcGFuLmZpbmlzaCgpO1xuICAgICAgICAgICAgcmV0dXJuIHJlc3VsdDtcbiAgICAgICAgfSBjYXRjaCAoZXJyb3IpIHtcbiAgICAgICAgICAgIHNwYW4ubG9nRXZlbnQoJ2ZhaWxlZCcsIGVycm9yKTtcbiAgICAgICAgICAgIHNwYW4uZmluaXNoKCk7XG4gICAgICAgICAgICB0aHJvdyBlcnJvcjtcbiAgICAgICAgfVxuICAgIH1cblxuICAgIC8vIEludGVybmFsc1xuXG4gICAgc3RhdGljIGNsaWVudFBsYXRmb3JtOiA/VE9OQ2xpZW50UGxhdGZvcm0gPSBudWxsO1xuICAgIHN0YXRpYyBjb3JlOiA/VE9OQ2xpZW50TGlicmFyeSA9IG51bGw7XG5cbiAgICBtb2R1bGVzOiBNYXA8c3RyaW5nLCBUT05Nb2R1bGU+O1xufVxuXG5leHBvcnQgY2xhc3MgVE9OQ2xpZW50RXJyb3Ige1xuICAgIHN0YXRpYyBzb3VyY2UgPSB7XG4gICAgICAgIENMSUVOVDogJ2NsaWVudCcsXG4gICAgICAgIE5PREU6ICdub2RlJ1xuICAgIH07XG4gICAgc3RhdGljIGNvZGUgPSB7XG4gICAgICAgIENMSUVOVF9ET0VTX05PVF9DT05GSUdVUkVEOiAxMDAwLFxuICAgICAgICBTRU5EX05PREVfUkVRVUVTVF9GQUlMRUQ6IDEwMDEsXG4gICAgICAgIFJVTl9MT0NBTF9BQ0NPVU5UX0RPRVNfTk9UX0VYSVNUUzogMTAwMixcbiAgICAgICAgV0FJVF9GT1JfVElNRU9VVDogMTAwMyxcbiAgICAgICAgSU5URVJOQUxfRVJST1I6IDEwMDQsXG4gICAgICAgIFFVRVJZX0ZBSUxFRDogMTAwNSxcbiAgICB9O1xuXG4gICAgbWVzc2FnZTogc3RyaW5nO1xuICAgIHNvdXJjZTogc3RyaW5nO1xuICAgIGNvZGU6IG51bWJlcjtcbiAgICBkYXRhOiBhbnk7XG5cbiAgICBjb25zdHJ1Y3RvcihtZXNzYWdlOiBzdHJpbmcsIGNvZGU6IG51bWJlciwgc291cmNlOiBzdHJpbmcsIGRhdGE/OiBhbnkpIHtcbiAgICAgICAgdGhpcy5tZXNzYWdlID0gbWVzc2FnZTtcbiAgICAgICAgdGhpcy5jb2RlID0gY29kZTtcbiAgICAgICAgdGhpcy5zb3VyY2UgPSBzb3VyY2U7XG4gICAgICAgIHRoaXMuZGF0YSA9IGRhdGE7XG4gICAgfVxuXG4gICAgc3RhdGljIGludGVybmFsRXJyb3IobWVzc2FnZTogc3RyaW5nKTogVE9OQ2xpZW50RXJyb3Ige1xuICAgICAgICByZXR1cm4gbmV3IFRPTkNsaWVudEVycm9yKFxuICAgICAgICAgICAgYEludGVybmFsIGVycm9yOiAke21lc3NhZ2V9YCxcbiAgICAgICAgICAgIFRPTkNsaWVudEVycm9yLmNvZGUuSU5URVJOQUxfRVJST1IsXG4gICAgICAgICAgICBUT05DbGllbnRFcnJvci5zb3VyY2UuQ0xJRU5ULFxuICAgICAgICApO1xuICAgIH1cblxuICAgIHN0YXRpYyBjbGllbnREb2VzTm90Q29uZmlndXJlZCgpOiBUT05DbGllbnRFcnJvciB7XG4gICAgICAgIHJldHVybiBuZXcgVE9OQ2xpZW50RXJyb3IoXG4gICAgICAgICAgICAnVE9OIENsaWVudCBkb2VzIG5vdCBjb25maWd1cmVkJyxcbiAgICAgICAgICAgIFRPTkNsaWVudEVycm9yLmNvZGUuQ0xJRU5UX0RPRVNfTk9UX0NPTkZJR1VSRUQsXG4gICAgICAgICAgICBUT05DbGllbnRFcnJvci5zb3VyY2UuQ0xJRU5ULFxuICAgICAgICApO1xuICAgIH1cblxuICAgIHN0YXRpYyBzZW5kTm9kZVJlcXVlc3RGYWlsZWQocmVzcG9uc2VUZXh0OiBzdHJpbmcpOiBUT05DbGllbnRFcnJvciB7XG4gICAgICAgIHJldHVybiBuZXcgVE9OQ2xpZW50RXJyb3IoXG4gICAgICAgICAgICBgU2VuZCBub2RlIHJlcXVlc3QgZmFpbGVkOiAke3Jlc3BvbnNlVGV4dH1gLFxuICAgICAgICAgICAgVE9OQ2xpZW50RXJyb3IuY29kZS5TRU5EX05PREVfUkVRVUVTVF9GQUlMRUQsXG4gICAgICAgICAgICBUT05DbGllbnRFcnJvci5zb3VyY2UuQ0xJRU5ULFxuICAgICAgICApO1xuICAgIH1cblxuICAgIHN0YXRpYyBydW5Mb2NhbEFjY291bnREb2VzTm90RXhpc3RzKGZ1bmN0aW9uTmFtZTogc3RyaW5nLCBhZGRyZXNzOiBzdHJpbmcpOiBUT05DbGllbnRFcnJvciB7XG4gICAgICAgIHJldHVybiBuZXcgVE9OQ2xpZW50RXJyb3IoXG4gICAgICAgICAgICBgWyR7ZnVuY3Rpb25OYW1lfV0gcnVuIGxvY2FsIGZhaWxlZDogYWNjb3VudCBbJHthZGRyZXNzfV0gZG9lcyBub3QgZXhpc3RzYCxcbiAgICAgICAgICAgIFRPTkNsaWVudEVycm9yLmNvZGUuUlVOX0xPQ0FMX0FDQ09VTlRfRE9FU19OT1RfRVhJU1RTLFxuICAgICAgICAgICAgVE9OQ2xpZW50RXJyb3Iuc291cmNlLkNMSUVOVCxcbiAgICAgICAgKTtcbiAgICB9XG5cbiAgICBzdGF0aWMgd2FpdEZvclRpbWVvdXQoKSB7XG4gICAgICAgIHJldHVybiBuZXcgVE9OQ2xpZW50RXJyb3IoXG4gICAgICAgICAgICAnV2FpdCBmb3Igb3BlcmF0aW9uIHJlamVjdGVkIG9uIHRpbWVvdXQnLFxuICAgICAgICAgICAgVE9OQ2xpZW50RXJyb3IuY29kZS5XQUlUX0ZPUl9USU1FT1VULFxuICAgICAgICAgICAgVE9OQ2xpZW50RXJyb3Iuc291cmNlLkNMSUVOVCxcbiAgICAgICAgKTtcbiAgICB9XG5cbiAgICBzdGF0aWMgcXVlcnlGYWlsZWQoZXJyb3JzOiBFcnJvcltdKSB7XG4gICAgICAgIHJldHVybiBuZXcgVE9OQ2xpZW50RXJyb3IoXG4gICAgICAgICAgICBgUXVlcnkgZmFpbGVkOiAke2Vycm9ycy5tYXAoeCA9PiB4Lm1lc3NhZ2UgfHwgeC50b1N0cmluZygpKS5qb2luKCdcXG4nKX1gLFxuICAgICAgICAgICAgVE9OQ2xpZW50RXJyb3IuY29kZS5RVUVSWV9GQUlMRUQsXG4gICAgICAgICAgICBUT05DbGllbnRFcnJvci5zb3VyY2UuQ0xJRU5ULFxuICAgICAgICApO1xuICAgIH1cbn1cblxuIl19