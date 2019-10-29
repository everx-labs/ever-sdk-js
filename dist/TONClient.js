"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.TONClient = exports.TONClientError = void 0;

var _regenerator = _interopRequireDefault(require("@babel/runtime/regenerator"));

var _toConsumableArray2 = _interopRequireDefault(require("@babel/runtime/helpers/toConsumableArray"));

var _asyncToGenerator2 = _interopRequireDefault(require("@babel/runtime/helpers/asyncToGenerator"));

var _classCallCheck2 = _interopRequireDefault(require("@babel/runtime/helpers/classCallCheck"));

var _createClass2 = _interopRequireDefault(require("@babel/runtime/helpers/createClass"));

var _possibleConstructorReturn2 = _interopRequireDefault(require("@babel/runtime/helpers/possibleConstructorReturn"));

var _getPrototypeOf2 = _interopRequireDefault(require("@babel/runtime/helpers/getPrototypeOf"));

var _assertThisInitialized2 = _interopRequireDefault(require("@babel/runtime/helpers/assertThisInitialized"));

var _inherits2 = _interopRequireDefault(require("@babel/runtime/helpers/inherits"));

var _wrapNativeSuper2 = _interopRequireDefault(require("@babel/runtime/helpers/wrapNativeSuper"));

var _defineProperty2 = _interopRequireDefault(require("@babel/runtime/helpers/defineProperty"));

var _TONConfigModule = _interopRequireDefault(require("./modules/TONConfigModule"));

var _TONContractsModule = _interopRequireDefault(require("./modules/TONContractsModule"));

var _TONCryptoModule = _interopRequireDefault(require("./modules/TONCryptoModule"));

var _TONQueriesModule = _interopRequireDefault(require("./modules/TONQueriesModule"));

var _TONModule = require("./TONModule");

/*
 * Copyright 2018-2019 TON DEV SOLUTIONS LTD.
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
var TONClientError =
/*#__PURE__*/
function (_Error) {
  (0, _inherits2["default"])(TONClientError, _Error);

  function TONClientError(message, code, source, data) {
    var _this;

    (0, _classCallCheck2["default"])(this, TONClientError);
    _this = (0, _possibleConstructorReturn2["default"])(this, (0, _getPrototypeOf2["default"])(TONClientError).call(this, message));
    (0, _defineProperty2["default"])((0, _assertThisInitialized2["default"])(_this), "source", void 0);
    (0, _defineProperty2["default"])((0, _assertThisInitialized2["default"])(_this), "code", void 0);
    (0, _defineProperty2["default"])((0, _assertThisInitialized2["default"])(_this), "data", void 0);
    _this.code = code;
    _this.source = source;
    _this.data = data;
    return _this;
  }

  (0, _createClass2["default"])(TONClientError, null, [{
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
  }]);
  return TONClientError;
}((0, _wrapNativeSuper2["default"])(Error));

exports.TONClientError = TONClientError;
(0, _defineProperty2["default"])(TONClientError, "source", {
  CLIENT: 'client',
  NODE: 'node'
});
(0, _defineProperty2["default"])(TONClientError, "code", {
  CLIENT_DOES_NOT_CONFIGURED: 1000,
  SEND_NODE_REQUEST_FAILED: 1001,
  RUN_LOCAL_ACCOUNT_DOES_NOT_EXISTS: 1002,
  WAIT_FOR_TIMEOUT: 1003
});

var ModuleContext =
/*#__PURE__*/
function () {
  function ModuleContext() {
    (0, _classCallCheck2["default"])(this, ModuleContext);
    (0, _defineProperty2["default"])(this, "modules", void 0);
    this.modules = new Map();
  }

  (0, _createClass2["default"])(ModuleContext, [{
    key: "optionalLibrary",
    value: function optionalLibrary() {
      return TONClient.library;
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
  }]);
  return ModuleContext;
}();

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
    (0, _defineProperty2["default"])(this, "context", void 0);
    this.context = new ModuleContext();
    this.config = this.context.getModule(_TONConfigModule["default"]);
    this.crypto = this.context.getModule(_TONCryptoModule["default"]);
    this.contracts = this.context.getModule(_TONContractsModule["default"]);
    this.queries = this.context.getModule(_TONQueriesModule["default"]);
  }

  (0, _createClass2["default"])(TONClient, [{
    key: "setup",
    value: function () {
      var _setup = (0, _asyncToGenerator2["default"])(
      /*#__PURE__*/
      _regenerator["default"].mark(function _callee() {
        var modules, _iteratorNormalCompletion, _didIteratorError, _iteratorError, _iterator, _step, _module;

        return _regenerator["default"].wrap(function _callee$(_context) {
          while (1) {
            switch (_context.prev = _context.next) {
              case 0:
                if (TONClient.library) {
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
                TONClient.library = _context.sent;

              case 6:
                modules = (0, _toConsumableArray2["default"])(this.context.modules.values());
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
    }() // Modules

  }, {
    key: "requiredModule",
    value: function requiredModule(ModuleClass) {
      return this.context.getModule(ModuleClass);
    } // Internals

  }], [{
    key: "create",
    value: function () {
      var _create = (0, _asyncToGenerator2["default"])(
      /*#__PURE__*/
      _regenerator["default"].mark(function _callee3(config) {
        var client;
        return _regenerator["default"].wrap(function _callee3$(_context3) {
          while (1) {
            switch (_context3.prev = _context3.next) {
              case 0:
                client = new TONClient();
                client.config.setData(config);
                _context3.next = 4;
                return client.setup();

              case 4:
                return _context3.abrupt("return", client);

              case 5:
              case "end":
                return _context3.stop();
            }
          }
        }, _callee3);
      }));

      function create(_x) {
        return _create.apply(this, arguments);
      }

      return create;
    }()
  }]);
  return TONClient;
}();

exports.TONClient = TONClient;
(0, _defineProperty2["default"])(TONClient, "clientPlatform", null);
(0, _defineProperty2["default"])(TONClient, "library", null);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uL3NyYy9UT05DbGllbnQuanMiXSwibmFtZXMiOlsiVE9OQ2xpZW50RXJyb3IiLCJtZXNzYWdlIiwiY29kZSIsInNvdXJjZSIsImRhdGEiLCJDTElFTlRfRE9FU19OT1RfQ09ORklHVVJFRCIsIkNMSUVOVCIsInJlc3BvbnNlVGV4dCIsIlNFTkRfTk9ERV9SRVFVRVNUX0ZBSUxFRCIsImZ1bmN0aW9uTmFtZSIsImFkZHJlc3MiLCJSVU5fTE9DQUxfQUNDT1VOVF9ET0VTX05PVF9FWElTVFMiLCJXQUlUX0ZPUl9USU1FT1VUIiwiRXJyb3IiLCJOT0RFIiwiTW9kdWxlQ29udGV4dCIsIm1vZHVsZXMiLCJNYXAiLCJUT05DbGllbnQiLCJsaWJyYXJ5IiwiTW9kdWxlQ2xhc3MiLCJuYW1lIiwibW9kdWxlTmFtZSIsImV4aXN0aW5nTW9kdWxlIiwiZ2V0IiwibW9kdWxlIiwic2V0IiwiY2xpZW50UGxhdGZvcm0iLCJjb250ZXh0IiwiY29uZmlnIiwiZ2V0TW9kdWxlIiwiVE9OQ29uZmlnTW9kdWxlIiwiY3J5cHRvIiwiVE9OQ3J5cHRvTW9kdWxlIiwiY29udHJhY3RzIiwiVE9OQ29udHJhY3RzTW9kdWxlIiwicXVlcmllcyIsIlRPTlF1ZXJpZXNNb2R1bGUiLCJjcmVhdGVMaWJyYXJ5IiwidmFsdWVzIiwic2V0dXAiLCJjbG9zZSIsImNsaWVudCIsInNldERhdGEiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFrQkE7O0FBQ0E7O0FBQ0E7O0FBRUE7O0FBR0E7O0FBekJBOzs7Ozs7Ozs7Ozs7Ozs7O0FBcUJBO0lBTWFBLGM7Ozs7O0FBZ0JULDBCQUFZQyxPQUFaLEVBQTZCQyxJQUE3QixFQUEyQ0MsTUFBM0MsRUFBMkRDLElBQTNELEVBQXVFO0FBQUE7O0FBQUE7QUFDbkUsMEhBQU1ILE9BQU47QUFEbUU7QUFBQTtBQUFBO0FBRW5FLFVBQUtDLElBQUwsR0FBWUEsSUFBWjtBQUNBLFVBQUtDLE1BQUwsR0FBY0EsTUFBZDtB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T0FBYixDQUFxQnVCLE1BQXJCLEU7Ozs7OzRCQUNadkIsTzs7Ozs7Ozs7QUFBVlMsZ0JBQUFBLE87O3VCQUNEQSxPQUFNLENBQUNlLEtBQVAsRTs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O3VCQUtKLEtBQUtKLE9BQUwsQ0FBYUssS0FBYixFOzs7Ozs7Ozs7Ozs7Ozs7UUFJVjs7OzttQ0FDa0JyQixXLEVBQWtDO0FBQ2hELGFBQU8sS0FBS1EsT0FBTCxDQUFhRSxTQUFiLENBQTBCVixXQUExQixDQUFQO0FBQ0gsSyxDQUdEOzs7Ozs7O3FEQS9Cb0JTLE07Ozs7OztBQUNWYSxnQkFBQUEsTSxHQUFTLElBQUl4QixTQUFKLEU7QUFDZndCLGdCQUFBQSxNQUFNLENBQUNiLE1BQVAsQ0FBY2MsT0FBZCxDQUFzQmQsTUFBdEI7O3VCQUNNYSxNQUFNLENBQUNGLEtBQVAsRTs7O2tEQUNDRSxNOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7aUNBekJGeEIsUyxvQkFxRG1DLEk7aUNBckRuQ0EsUyxhQXNEMkIsSSIsInNvdXJjZXNDb250ZW50IjpbIi8qXG4gKiBDb3B5cmlnaHQgMjAxOC0yMDE5IFRPTiBERVYgU09MVVRJT05TIExURC5cbiAqXG4gKiBMaWNlbnNlZCB1bmRlciB0aGUgU09GVFdBUkUgRVZBTFVBVElPTiBMaWNlbnNlICh0aGUgXCJMaWNlbnNlXCIpOyB5b3UgbWF5IG5vdCB1c2VcbiAqIHRoaXMgZmlsZSBleGNlcHQgaW4gY29tcGxpYW5jZSB3aXRoIHRoZSBMaWNlbnNlLiAgWW91IG1heSBvYnRhaW4gYSBjb3B5IG9mIHRoZVxuICogTGljZW5zZSBhdDpcbiAqXG4gKiBodHRwOi8vd3d3LnRvbi5kZXYvbGljZW5zZXNcbiAqXG4gKiBVbmxlc3MgcmVxdWlyZWQgYnkgYXBwbGljYWJsZSBsYXcgb3IgYWdyZWVkIHRvIGluIHdyaXRpbmcsIHNvZnR3YXJlXG4gKiBkaXN0cmlidXRlZCB1bmRlciB0aGUgTGljZW5zZSBpcyBkaXN0cmlidXRlZCBvbiBhbiBcIkFTIElTXCIgQkFTSVMsXG4gKiBXSVRIT1VUIFdBUlJBTlRJRVMgT1IgQ09ORElUSU9OUyBPRiBBTlkgS0lORCwgZWl0aGVyIGV4cHJlc3Mgb3IgaW1wbGllZC5cbiAqIFNlZSB0aGUgTGljZW5zZSBmb3IgdGhlIHNwZWNpZmljIFRPTiBERVYgc29mdHdhcmUgZ292ZXJuaW5nIHBlcm1pc3Npb25zIGFuZFxuICogbGltaXRhdGlvbnMgdW5kZXIgdGhlIExpY2Vuc2UuXG4gKi9cbi8vIEBmbG93XG5cbmltcG9ydCB0eXBlIHsgVE9OQ29uZmlnRGF0YSB9IGZyb20gXCIuL21vZHVsZXMvVE9OQ29uZmlnTW9kdWxlXCI7XG5pbXBvcnQgVE9OQ29uZmlnTW9kdWxlIGZyb20gJy4vbW9kdWxlcy9UT05Db25maWdNb2R1bGUnO1xuaW1wb3J0IFRPTkNvbnRyYWN0c01vZHVsZSBmcm9tICcuL21vZHVsZXMvVE9OQ29udHJhY3RzTW9kdWxlJztcbmltcG9ydCBUT05DcnlwdG9Nb2R1bGUgZnJvbSAnLi9tb2R1bGVzL1RPTkNyeXB0b01vZHVsZSc7XG4vKiBlc2xpbnQtZGlzYWJsZSBjbGFzcy1tZXRob2RzLXVzZS10aGlzLCBuby11c2UtYmVmb3JlLWRlZmluZSAqL1xuaW1wb3J0IFRPTlF1ZXJpZXNNb2R1bGUgZnJvbSBcIi4vbW9kdWxlcy9UT05RdWVyaWVzTW9kdWxlXCI7XG5cbmltcG9ydCB0eXBlIHsgVE9OQ2xpZW50TGlicmFyeSwgVE9OTW9kdWxlQ29udGV4dCwgfSBmcm9tICcuL1RPTk1vZHVsZSc7XG5pbXBvcnQgeyBUT05Nb2R1bGUgfSBmcm9tICcuL1RPTk1vZHVsZSc7XG5cbmV4cG9ydCBjbGFzcyBUT05DbGllbnRFcnJvciBleHRlbmRzIEVycm9yIHtcbiAgICBzdGF0aWMgc291cmNlID0ge1xuICAgICAgICBDTElFTlQ6ICdjbGllbnQnLFxuICAgICAgICBOT0RFOiAnbm9kZSdcbiAgICB9O1xuICAgIHN0YXRpYyBjb2RlID0ge1xuICAgICAgICBDTElFTlRfRE9FU19OT1RfQ09ORklHVVJFRDogMTAwMCxcbiAgICAgICAgU0VORF9OT0RFX1JFUVVFU1RfRkFJTEVEOiAxMDAxLFxuICAgICAgICBSVU5fTE9DQUxfQUNDT1VOVF9ET0VTX05PVF9FWElTVFM6IDEwMDIsXG4gICAgICAgIFdBSVRfRk9SX1RJTUVPVVQ6IDEwMDMsXG4gICAgfTtcblxuICAgIHNvdXJjZTogc3RyaW5nO1xuICAgIGNvZGU6IG51bWJlcjtcbiAgICBkYXRhOiBhbnk7XG5cbiAgICBjb25zdHJ1Y3RvcihtZXNzYWdlOiBzdHJpbmcsIGNvZGU6IG51bWJlciwgc291cmNlOiBzdHJpbmcsIGRhdGE/OiBhbnkpIHtcbiAgICAgICAgc3VwZXIobWVzc2FnZSk7XG4gICAgICAgIHRoaXMuY29kZSA9IGNvZGU7XG4gICAgICAgIHRoaXMuc291cmNlID0gc291cmNlO1xuICAgICAgICB0aGlzLmRhdGEgPSBkYXRhO1xuICAgIH1cblxuICAgIHN0YXRpYyBjbGllbnREb2VzTm90Q29uZmlndXJlZCgpOiBUT05DbGllbnRFcnJvciB7XG4gICAgICAgIHJldHVybiBuZXcgVE9OQ2xpZW50RXJyb3IoXG4gICAgICAgICAgICAnVE9OIENsaWVudCBkb2VzIG5vdCBjb25maWd1cmVkJyxcbiAgICAgICAgICAgIFRPTkNsaWVudEVycm9yLmNvZGUuQ0xJRU5UX0RPRVNfTk9UX0NPTkZJR1VSRUQsXG4gICAgICAgICAgICBUT05DbGllbnRFcnJvci5zb3VyY2UuQ0xJRU5ULFxuICAgICAgICApO1xuICAgIH1cblxuICAgIHN0YXRpYyBzZW5kTm9kZVJlcXVlc3RGYWlsZWQocmVzcG9uc2VUZXh0OiBzdHJpbmcpOiBUT05DbGllbnRFcnJvciB7XG4gICAgICAgIHJldHVybiBuZXcgVE9OQ2xpZW50RXJyb3IoXG4gICAgICAgICAgICBgU2VuZCBub2RlIHJlcXVlc3QgZmFpbGVkOiAke3Jlc3BvbnNlVGV4dH1gLFxuICAgICAgICAgICAgVE9OQ2xpZW50RXJyb3IuY29kZS5TRU5EX05PREVfUkVRVUVTVF9GQUlMRUQsXG4gICAgICAgICAgICBUT05DbGllbnRFcnJvci5zb3VyY2UuQ0xJRU5ULFxuICAgICAgICApO1xuICAgIH1cblxuICAgIHN0YXRpYyBydW5Mb2NhbEFjY291bnREb2VzTm90RXhpc3RzKGZ1bmN0aW9uTmFtZTogc3RyaW5nLCBhZGRyZXNzOiBzdHJpbmcpOiBUT05DbGllbnRFcnJvciB7XG4gICAgICAgIHJldHVybiBuZXcgVE9OQ2xpZW50RXJyb3IoXG4gICAgICAgICAgICBgWyR7ZnVuY3Rpb25OYW1lfV0gcnVuIGxvY2FsIGZhaWxlZDogYWNjb3VudCBbJHthZGRyZXNzfV0gZG9lcyBub3QgZXhpc3RzYCxcbiAgICAgICAgICAgIFRPTkNsaWVudEVycm9yLmNvZGUuUlVOX0xPQ0FMX0FDQ09VTlRfRE9FU19OT1RfRVhJU1RTLFxuICAgICAgICAgICAgVE9OQ2xpZW50RXJyb3Iuc291cmNlLkNMSUVOVCxcbiAgICAgICAgKTtcbiAgICB9XG5cbiAgICBzdGF0aWMgd2FpdEZvclRpbWVvdXQoKSB7XG4gICAgICAgIHJldHVybiBuZXcgVE9OQ2xpZW50RXJyb3IoXG4gICAgICAgICAgICAnV2FpdCBmb3Igb3BlcmF0aW9uIHJlamVjdGVkIG9uIHRpbWVvdXQnLFxuICAgICAgICAgICAgVE9OQ2xpZW50RXJyb3IuY29kZS5XQUlUX0ZPUl9USU1FT1VULFxuICAgICAgICAgICAgVE9OQ2xpZW50RXJyb3Iuc291cmNlLkNMSUVOVCxcbiAgICAgICAgKTtcbiAgICB9XG59XG5cbmNsYXNzIE1vZHVsZUNvbnRleHQgaW1wbGVtZW50cyBUT05Nb2R1bGVDb250ZXh0IHtcbiAgICBtb2R1bGVzOiBNYXA8c3RyaW5nLCBUT05Nb2R1bGU+O1xuXG5cbiAgICBjb25zdHJ1Y3RvcigpIHtcbiAgICAgICAgdGhpcy5tb2R1bGVzID0gbmV3IE1hcCgpO1xuICAgIH1cblxuICAgIG9wdGlvbmFsTGlicmFyeSgpOiA/VE9OQ2xpZW50TGlicmFyeSB7XG4gICAgICAgIHJldHVybiBUT05DbGllbnQubGlicmFyeTtcbiAgICB9XG5cbiAgICBnZXRNb2R1bGU8VD4oTW9kdWxlQ2xhc3M6IHR5cGVvZiBUT05Nb2R1bGUpOiBUIHtcbiAgICAgICAgY29uc3QgbmFtZSA9IE1vZHVsZUNsYXNzLm1vZHVsZU5hbWU7XG4gICAgICAgIGNvbnN0IGV4aXN0aW5nTW9kdWxlID0gdGhpcy5tb2R1bGVzLmdldChuYW1lKTtcbiAgICAgICAgaWYgKGV4aXN0aW5nTW9kdWxlKSB7XG4gICAgICAgICAgICByZXR1cm4gKGV4aXN0aW5nTW9kdWxlOiBhbnkpO1xuICAgICAgICB9XG4gICAgICAgIGNvbnN0IG1vZHVsZSA9IG5ldyBNb2R1bGVDbGFzcyh0aGlzKTtcbiAgICAgICAgdGhpcy5tb2R1bGVzLnNldChuYW1lLCBtb2R1bGUpO1xuICAgICAgICByZXR1cm4gKG1vZHVsZTogYW55KTtcbiAgICB9XG59XG5cblxudHlwZSBUT05DbGllbnRQbGF0Zm9ybSA9IHtcbiAgICBmZXRjaDogYW55LFxuICAgIFdlYlNvY2tldDogYW55LFxuICAgIGNyZWF0ZUxpYnJhcnk6ICgpID0+IFByb21pc2U8VE9OQ2xpZW50TGlicmFyeT4sXG59O1xuXG5leHBvcnQgY2xhc3MgVE9OQ2xpZW50IHtcbiAgICBzdGF0aWMgc2V0TGlicmFyeShjbGllbnRQbGF0Zm9ybTogVE9OQ2xpZW50UGxhdGZvcm0pIHtcbiAgICAgICAgVE9OQ2xpZW50LmNsaWVudFBsYXRmb3JtID0gY2xpZW50UGxhdGZvcm07XG4gICAgfVxuXG5cbiAgICAvLyBQdWJsaWNcbiAgICBjb25maWc6IFRPTkNvbmZpZ01vZHVsZTtcbiAgICBjcnlwdG86IFRPTkNyeXB0b01vZHVsZTtcbiAgICBjb250cmFjdHM6IFRPTkNvbnRyYWN0c01vZHVsZTtcbiAgICBxdWVyaWVzOiBUT05RdWVyaWVzTW9kdWxlO1xuXG5cbiAgICBjb25zdHJ1Y3RvcigpIHtcbiAgICAgICAgdGhpcy5jb250ZXh0ID0gbmV3IE1vZHVsZUNvbnRleHQoKTtcbiAgICAgICAgdGhpcy5jb25maWcgPSB0aGlzLmNvbnRleHQuZ2V0TW9kdWxlKFRPTkNvbmZpZ01vZHVsZSk7XG4gICAgICAgIHRoaXMuY3J5cHRvID0gdGhpcy5jb250ZXh0LmdldE1vZHVsZShUT05DcnlwdG9Nb2R1bGUpO1xuICAgICAgICB0aGlzLmNvbnRyYWN0cyA9IHRoaXMuY29udGV4dC5nZXRNb2R1bGUoVE9OQ29udHJhY3RzTW9kdWxlKTtcbiAgICAgICAgdGhpcy5xdWVyaWVzID0gdGhpcy5jb250ZXh0LmdldE1vZHVsZShUT05RdWVyaWVzTW9kdWxlKTtcbiAgICB9XG5cbiAgICBzdGF0aWMgYXN5bmMgY3JlYXRlKGNvbmZpZzogVE9OQ29uZmlnRGF0YSk6IFByb21pc2U8VE9OQ2xpZW50PiB7XG4gICAgICAgIGNvbnN0IGNsaWVudCA9IG5ldyBUT05DbGllbnQoKTtcbiAgICAgICAgY2xpZW50LmNvbmZpZy5zZXREYXRhKGNvbmZpZyk7XG4gICAgICAgIGF3YWl0IGNsaWVudC5zZXR1cCgpO1xuICAgICAgICByZXR1cm4gY2xpZW50O1xuICAgIH1cblxuICAgIGFzeW5jIHNldHVwKCk6IFByb21pc2U8dm9pZD4ge1xuICAgICAgICBpZiAoIVRPTkNsaWVudC5saWJyYXJ5KSB7XG4gICAgICAgICAgICBpZiAoIVRPTkNsaWVudC5jbGllbnRQbGF0Zm9ybSkge1xuICAgICAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIFRPTkNsaWVudC5saWJyYXJ5ID0gYXdhaXQgVE9OQ2xpZW50LmNsaWVudFBsYXRmb3JtLmNyZWF0ZUxpYnJhcnkoKTtcbiAgICAgICAgfVxuICAgICAgICBjb25zdCBtb2R1bGVzOiBUT05Nb2R1bGVbXSA9IFsuLi50aGlzLmNvbnRleHQubW9kdWxlcy52YWx1ZXMoKV07XG4gICAgICAgIGZvciAoY29uc3QgbW9kdWxlIG9mIG1vZHVsZXMpIHtcbiAgICAgICAgICAgIGF3YWl0IG1vZHVsZS5zZXR1cCgpO1xuICAgICAgICB9XG4gICAgfVxuXG4gICAgYXN5bmMgY2xvc2UoKTogUHJvbWlzZTx2b2lkPiB7XG4gICAgICAgIGF3YWl0IHRoaXMucXVlcmllcy5jbG9zZSgpO1xuICAgIH1cblxuXG4gICAgLy8gTW9kdWxlc1xuICAgIHJlcXVpcmVkTW9kdWxlPFQ+KE1vZHVsZUNsYXNzOiB0eXBlb2YgVE9OTW9kdWxlKTogVCB7XG4gICAgICAgIHJldHVybiB0aGlzLmNvbnRleHQuZ2V0TW9kdWxlPFQ+KE1vZHVsZUNsYXNzKTtcbiAgICB9XG5cblxuICAgIC8vIEludGVybmFsc1xuICAgIHN0YXRpYyBjbGllbnRQbGF0Zm9ybTogP1RPTkNsaWVudFBsYXRmb3JtID0gbnVsbDtcbiAgICBzdGF0aWMgbGlicmFyeTogP1RPTkNsaWVudExpYnJhcnkgPSBudWxsO1xuXG4gICAgY29udGV4dDogTW9kdWxlQ29udGV4dDtcbn1cbiJdfQ==