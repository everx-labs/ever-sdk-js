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
  WAIT_FOR_TIMEOUT: 1003,
  INTERNAL_ERROR: 1004
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uL3NyYy9UT05DbGllbnQuanMiXSwibmFtZXMiOlsiVE9OQ2xpZW50RXJyb3IiLCJtZXNzYWdlIiwiY29kZSIsInNvdXJjZSIsImRhdGEiLCJJTlRFUk5BTF9FUlJPUiIsIkNMSUVOVCIsIkNMSUVOVF9ET0VTX05PVF9DT05GSUdVUkVEIiwicmVzcG9uc2VUZXh0IiwiU0VORF9OT0RFX1JFUVVFU1RfRkFJTEVEIiwiZnVuY3Rpb25OYW1lIiwiYWRkcmVzcyIsIlJVTl9MT0NBTF9BQ0NPVU5UX0RPRVNfTk9UX0VYSVNUUyIsIldBSVRfRk9SX1RJTUVPVVQiLCJFcnJvciIsIk5PREUiLCJNb2R1bGVDb250ZXh0IiwibW9kdWxlcyIsIk1hcCIsIlRPTkNsaWVudCIsImxpYnJhcnkiLCJNb2R1bGVDbGFzcyIsIm5hbWUiLCJtb2R1bGVOYW1lIiwiZXhpc3RpbmdNb2R1bGUiLCJnZXQiLCJtb2R1bGUiLCJzZXQiLCJjbGllbnRQbGF0Zm9ybSIsImNvbnRleHQiLCJjb25maWciLCJnZXRNb2R1bGUiLCJUT05Db25maWdNb2R1bGUiLCJjcnlwdG8iLCJUT05DcnlwdG9Nb2R1bGUiLCJjb250cmFjdHMiLCJUT05Db250cmFjdHNNb2R1bGUiLCJxdWVyaWVzIiwiVE9OUXVlcmllc01vZHVsZSIsImNyZWF0ZUxpYnJhcnkiLCJ2YWx1ZXMiLCJzZXR1cCIsImNsb3NlIiwiY2xpZW50Iiwic2V0RGF0YSJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQWtCQTs7QUFDQTs7QUFDQTs7QUFFQTs7QUFHQTs7QUF6QkE7Ozs7Ozs7Ozs7Ozs7Ozs7QUFxQkE7SUFNYUEsYzs7Ozs7QUFpQlQsMEJBQVlDLE9BQVosRUFBNkJDLElBQTdCLEVBQTJDQyxNQUEzQyxFQUEyREMsSUFBM0QsRUFBdUU7QUFBQTs7QUFBQTtBQUNuRSwwSEFBTUgsT0FBTjtBQURtRTtBQUFBO0FBQUE7QUFFbkUsVUFBS0MsSUFBTCxHQUFZQSxJQUFaO0FBQ0EsVUFBS0Ms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Q0g7Ozs7Ozs7Ozs7Ozs7O29CQVVRbkIsU0FBUyxDQUFDQyxPOzs7OztvQkFDTkQsU0FBUyxDQUFDUyxjOzs7Ozs7Ozs7dUJBR1dULFNBQVMsQ0FBQ1MsY0FBVixDQUF5QlcsYUFBekIsRTs7O0FBQTFCcEIsZ0JBQUFBLFNBQVMsQ0FBQ0MsTzs7O0FBRVJILGdCQUFBQSxPLHVDQUEyQixLQUFLWSxPQUFMLENBQWFaLE9BQWIsQ0FBcUJ1QixNQUFyQixFOzs7Ozs0QkFDWnZCLE87Ozs7Ozs7O0FBQVZTLGdCQUFBQSxPOzt1QkFDREEsT0FBTSxDQUFDZSxLQUFQLEU7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozt1QkFLSixLQUFLSixPQUFMLENBQWFLLEtBQWIsRTs7Ozs7Ozs7Ozs7Ozs7O1FBSVY7Ozs7bUNBQ2tCckIsVyxFQUFrQztBQUNoRCxhQUFPLEtBQUtRLE9BQUwsQ0FBYUUsU0FBYixDQUEwQlYsV0FBMUIsQ0FBUDtBQUNILEssQ0FHRDs7Ozs7OztxREEvQm9CUyxNOzs7Ozs7QUFDVmEsZ0JBQUFBLE0sR0FBUyxJQUFJeEIsU0FBSixFO0FBQ2Z3QixnQkFBQUEsTUFBTSxDQUFDYixNQUFQLENBQWNjLE9BQWQsQ0FBc0JkLE1BQXRCOzt1QkFDTWEsTUFBTSxDQUFDRixLQUFQLEU7OztrREFDQ0UsTTs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O2lDQXpCRnhCLFMsb0JBcURtQyxJO2lDQXJEbkNBLFMsYUFzRDJCLEkiLCJzb3VyY2VzQ29udGVudCI6WyIvKlxuICogQ29weXJpZ2h0IDIwMTgtMjAxOSBUT04gREVWIFNPTFVUSU9OUyBMVEQuXG4gKlxuICogTGljZW5zZWQgdW5kZXIgdGhlIFNPRlRXQVJFIEVWQUxVQVRJT04gTGljZW5zZSAodGhlIFwiTGljZW5zZVwiKTsgeW91IG1heSBub3QgdXNlXG4gKiB0aGlzIGZpbGUgZXhjZXB0IGluIGNvbXBsaWFuY2Ugd2l0aCB0aGUgTGljZW5zZS4gIFlvdSBtYXkgb2J0YWluIGEgY29weSBvZiB0aGVcbiAqIExpY2Vuc2UgYXQ6XG4gKlxuICogaHR0cDovL3d3dy50b24uZGV2L2xpY2Vuc2VzXG4gKlxuICogVW5sZXNzIHJlcXVpcmVkIGJ5IGFwcGxpY2FibGUgbGF3IG9yIGFncmVlZCB0byBpbiB3cml0aW5nLCBzb2Z0d2FyZVxuICogZGlzdHJpYnV0ZWQgdW5kZXIgdGhlIExpY2Vuc2UgaXMgZGlzdHJpYnV0ZWQgb24gYW4gXCJBUyBJU1wiIEJBU0lTLFxuICogV0lUSE9VVCBXQVJSQU5USUVTIE9SIENPTkRJVElPTlMgT0YgQU5ZIEtJTkQsIGVpdGhlciBleHByZXNzIG9yIGltcGxpZWQuXG4gKiBTZWUgdGhlIExpY2Vuc2UgZm9yIHRoZSBzcGVjaWZpYyBUT04gREVWIHNvZnR3YXJlIGdvdmVybmluZyBwZXJtaXNzaW9ucyBhbmRcbiAqIGxpbWl0YXRpb25zIHVuZGVyIHRoZSBMaWNlbnNlLlxuICovXG4vLyBAZmxvd1xuXG5pbXBvcnQgdHlwZSB7IFRPTkNvbmZpZ0RhdGEgfSBmcm9tIFwiLi9tb2R1bGVzL1RPTkNvbmZpZ01vZHVsZVwiO1xuaW1wb3J0IFRPTkNvbmZpZ01vZHVsZSBmcm9tICcuL21vZHVsZXMvVE9OQ29uZmlnTW9kdWxlJztcbmltcG9ydCBUT05Db250cmFjdHNNb2R1bGUgZnJvbSAnLi9tb2R1bGVzL1RPTkNvbnRyYWN0c01vZHVsZSc7XG5pbXBvcnQgVE9OQ3J5cHRvTW9kdWxlIGZyb20gJy4vbW9kdWxlcy9UT05DcnlwdG9Nb2R1bGUnO1xuLyogZXNsaW50LWRpc2FibGUgY2xhc3MtbWV0aG9kcy11c2UtdGhpcywgbm8tdXNlLWJlZm9yZS1kZWZpbmUgKi9cbmltcG9ydCBUT05RdWVyaWVzTW9kdWxlIGZyb20gXCIuL21vZHVsZXMvVE9OUXVlcmllc01vZHVsZVwiO1xuXG5pbXBvcnQgdHlwZSB7IFRPTkNsaWVudExpYnJhcnksIFRPTk1vZHVsZUNvbnRleHQsIH0gZnJvbSAnLi9UT05Nb2R1bGUnO1xuaW1wb3J0IHsgVE9OTW9kdWxlIH0gZnJvbSAnLi9UT05Nb2R1bGUnO1xuXG5leHBvcnQgY2xhc3MgVE9OQ2xpZW50RXJyb3IgZXh0ZW5kcyBFcnJvciB7XG4gICAgc3RhdGljIHNvdXJjZSA9IHtcbiAgICAgICAgQ0xJRU5UOiAnY2xpZW50JyxcbiAgICAgICAgTk9ERTogJ25vZGUnXG4gICAgfTtcbiAgICBzdGF0aWMgY29kZSA9IHtcbiAgICAgICAgQ0xJRU5UX0RPRVNfTk9UX0NPTkZJR1VSRUQ6IDEwMDAsXG4gICAgICAgIFNFTkRfTk9ERV9SRVFVRVNUX0ZBSUxFRDogMTAwMSxcbiAgICAgICAgUlVOX0xPQ0FMX0FDQ09VTlRfRE9FU19OT1RfRVhJU1RTOiAxMDAyLFxuICAgICAgICBXQUlUX0ZPUl9USU1FT1VUOiAxMDAzLFxuICAgICAgICBJTlRFUk5BTF9FUlJPUjogMTAwNCxcbiAgICB9O1xuXG4gICAgc291cmNlOiBzdHJpbmc7XG4gICAgY29kZTogbnVtYmVyO1xuICAgIGRhdGE6IGFueTtcblxuICAgIGNvbnN0cnVjdG9yKG1lc3NhZ2U6IHN0cmluZywgY29kZTogbnVtYmVyLCBzb3VyY2U6IHN0cmluZywgZGF0YT86IGFueSkge1xuICAgICAgICBzdXBlcihtZXNzYWdlKTtcbiAgICAgICAgdGhpcy5jb2RlID0gY29kZTtcbiAgICAgICAgdGhpcy5zb3VyY2UgPSBzb3VyY2U7XG4gICAgICAgIHRoaXMuZGF0YSA9IGRhdGE7XG4gICAgfVxuXG4gICAgc3RhdGljIGludGVybmFsRXJyb3IobWVzc2FnZTogc3RyaW5nKTogVE9OQ2xpZW50RXJyb3Ige1xuICAgICAgICByZXR1cm4gbmV3IFRPTkNsaWVudEVycm9yKFxuICAgICAgICAgICAgYEludGVybmFsIGVycm9yOiAke21lc3NhZ2V9YCxcbiAgICAgICAgICAgIFRPTkNsaWVudEVycm9yLmNvZGUuSU5URVJOQUxfRVJST1IsXG4gICAgICAgICAgICBUT05DbGllbnRFcnJvci5zb3VyY2UuQ0xJRU5ULFxuICAgICAgICApO1xuICAgIH1cblxuICAgIHN0YXRpYyBjbGllbnREb2VzTm90Q29uZmlndXJlZCgpOiBUT05DbGllbnRFcnJvciB7XG4gICAgICAgIHJldHVybiBuZXcgVE9OQ2xpZW50RXJyb3IoXG4gICAgICAgICAgICAnVE9OIENsaWVudCBkb2VzIG5vdCBjb25maWd1cmVkJyxcbiAgICAgICAgICAgIFRPTkNsaWVudEVycm9yLmNvZGUuQ0xJRU5UX0RPRVNfTk9UX0NPTkZJR1VSRUQsXG4gICAgICAgICAgICBUT05DbGllbnRFcnJvci5zb3VyY2UuQ0xJRU5ULFxuICAgICAgICApO1xuICAgIH1cblxuICAgIHN0YXRpYyBzZW5kTm9kZVJlcXVlc3RGYWlsZWQocmVzcG9uc2VUZXh0OiBzdHJpbmcpOiBUT05DbGllbnRFcnJvciB7XG4gICAgICAgIHJldHVybiBuZXcgVE9OQ2xpZW50RXJyb3IoXG4gICAgICAgICAgICBgU2VuZCBub2RlIHJlcXVlc3QgZmFpbGVkOiAke3Jlc3BvbnNlVGV4dH1gLFxuICAgICAgICAgICAgVE9OQ2xpZW50RXJyb3IuY29kZS5TRU5EX05PREVfUkVRVUVTVF9GQUlMRUQsXG4gICAgICAgICAgICBUT05DbGllbnRFcnJvci5zb3VyY2UuQ0xJRU5ULFxuICAgICAgICApO1xuICAgIH1cblxuICAgIHN0YXRpYyBydW5Mb2NhbEFjY291bnREb2VzTm90RXhpc3RzKGZ1bmN0aW9uTmFtZTogc3RyaW5nLCBhZGRyZXNzOiBzdHJpbmcpOiBUT05DbGllbnRFcnJvciB7XG4gICAgICAgIHJldHVybiBuZXcgVE9OQ2xpZW50RXJyb3IoXG4gICAgICAgICAgICBgWyR7ZnVuY3Rpb25OYW1lfV0gcnVuIGxvY2FsIGZhaWxlZDogYWNjb3VudCBbJHthZGRyZXNzfV0gZG9lcyBub3QgZXhpc3RzYCxcbiAgICAgICAgICAgIFRPTkNsaWVudEVycm9yLmNvZGUuUlVOX0xPQ0FMX0FDQ09VTlRfRE9FU19OT1RfRVhJU1RTLFxuICAgICAgICAgICAgVE9OQ2xpZW50RXJyb3Iuc291cmNlLkNMSUVOVCxcbiAgICAgICAgKTtcbiAgICB9XG5cbiAgICBzdGF0aWMgd2FpdEZvclRpbWVvdXQoKSB7XG4gICAgICAgIHJldHVybiBuZXcgVE9OQ2xpZW50RXJyb3IoXG4gICAgICAgICAgICAnV2FpdCBmb3Igb3BlcmF0aW9uIHJlamVjdGVkIG9uIHRpbWVvdXQnLFxuICAgICAgICAgICAgVE9OQ2xpZW50RXJyb3IuY29kZS5XQUlUX0ZPUl9USU1FT1VULFxuICAgICAgICAgICAgVE9OQ2xpZW50RXJyb3Iuc291cmNlLkNMSUVOVCxcbiAgICAgICAgKTtcbiAgICB9XG59XG5cbmNsYXNzIE1vZHVsZUNvbnRleHQgaW1wbGVtZW50cyBUT05Nb2R1bGVDb250ZXh0IHtcbiAgICBtb2R1bGVzOiBNYXA8c3RyaW5nLCBUT05Nb2R1bGU+O1xuXG5cbiAgICBjb25zdHJ1Y3RvcigpIHtcbiAgICAgICAgdGhpcy5tb2R1bGVzID0gbmV3IE1hcCgpO1xuICAgIH1cblxuICAgIG9wdGlvbmFsTGlicmFyeSgpOiA/VE9OQ2xpZW50TGlicmFyeSB7XG4gICAgICAgIHJldHVybiBUT05DbGllbnQubGlicmFyeTtcbiAgICB9XG5cbiAgICBnZXRNb2R1bGU8VD4oTW9kdWxlQ2xhc3M6IHR5cGVvZiBUT05Nb2R1bGUpOiBUIHtcbiAgICAgICAgY29uc3QgbmFtZSA9IE1vZHVsZUNsYXNzLm1vZHVsZU5hbWU7XG4gICAgICAgIGNvbnN0IGV4aXN0aW5nTW9kdWxlID0gdGhpcy5tb2R1bGVzLmdldChuYW1lKTtcbiAgICAgICAgaWYgKGV4aXN0aW5nTW9kdWxlKSB7XG4gICAgICAgICAgICByZXR1cm4gKGV4aXN0aW5nTW9kdWxlOiBhbnkpO1xuICAgICAgICB9XG4gICAgICAgIGNvbnN0IG1vZHVsZSA9IG5ldyBNb2R1bGVDbGFzcyh0aGlzKTtcbiAgICAgICAgdGhpcy5tb2R1bGVzLnNldChuYW1lLCBtb2R1bGUpO1xuICAgICAgICByZXR1cm4gKG1vZHVsZTogYW55KTtcbiAgICB9XG59XG5cblxudHlwZSBUT05DbGllbnRQbGF0Zm9ybSA9IHtcbiAgICBmZXRjaDogYW55LFxuICAgIFdlYlNvY2tldDogYW55LFxuICAgIGNyZWF0ZUxpYnJhcnk6ICgpID0+IFByb21pc2U8VE9OQ2xpZW50TGlicmFyeT4sXG59O1xuXG5leHBvcnQgY2xhc3MgVE9OQ2xpZW50IHtcbiAgICBzdGF0aWMgc2V0TGlicmFyeShjbGllbnRQbGF0Zm9ybTogVE9OQ2xpZW50UGxhdGZvcm0pIHtcbiAgICAgICAgVE9OQ2xpZW50LmNsaWVudFBsYXRmb3JtID0gY2xpZW50UGxhdGZvcm07XG4gICAgfVxuXG5cbiAgICAvLyBQdWJsaWNcbiAgICBjb25maWc6IFRPTkNvbmZpZ01vZHVsZTtcbiAgICBjcnlwdG86IFRPTkNyeXB0b01vZHVsZTtcbiAgICBjb250cmFjdHM6IFRPTkNvbnRyYWN0c01vZHVsZTtcbiAgICBxdWVyaWVzOiBUT05RdWVyaWVzTW9kdWxlO1xuXG5cbiAgICBjb25zdHJ1Y3RvcigpIHtcbiAgICAgICAgdGhpcy5jb250ZXh0ID0gbmV3IE1vZHVsZUNvbnRleHQoKTtcbiAgICAgICAgdGhpcy5jb25maWcgPSB0aGlzLmNvbnRleHQuZ2V0TW9kdWxlKFRPTkNvbmZpZ01vZHVsZSk7XG4gICAgICAgIHRoaXMuY3J5cHRvID0gdGhpcy5jb250ZXh0LmdldE1vZHVsZShUT05DcnlwdG9Nb2R1bGUpO1xuICAgICAgICB0aGlzLmNvbnRyYWN0cyA9IHRoaXMuY29udGV4dC5nZXRNb2R1bGUoVE9OQ29udHJhY3RzTW9kdWxlKTtcbiAgICAgICAgdGhpcy5xdWVyaWVzID0gdGhpcy5jb250ZXh0LmdldE1vZHVsZShUT05RdWVyaWVzTW9kdWxlKTtcbiAgICB9XG5cbiAgICBzdGF0aWMgYXN5bmMgY3JlYXRlKGNvbmZpZzogVE9OQ29uZmlnRGF0YSk6IFByb21pc2U8VE9OQ2xpZW50PiB7XG4gICAgICAgIGNvbnN0IGNsaWVudCA9IG5ldyBUT05DbGllbnQoKTtcbiAgICAgICAgY2xpZW50LmNvbmZpZy5zZXREYXRhKGNvbmZpZyk7XG4gICAgICAgIGF3YWl0IGNsaWVudC5zZXR1cCgpO1xuICAgICAgICByZXR1cm4gY2xpZW50O1xuICAgIH1cblxuICAgIGFzeW5jIHNldHVwKCk6IFByb21pc2U8dm9pZD4ge1xuICAgICAgICBpZiAoIVRPTkNsaWVudC5saWJyYXJ5KSB7XG4gICAgICAgICAgICBpZiAoIVRPTkNsaWVudC5jbGllbnRQbGF0Zm9ybSkge1xuICAgICAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIFRPTkNsaWVudC5saWJyYXJ5ID0gYXdhaXQgVE9OQ2xpZW50LmNsaWVudFBsYXRmb3JtLmNyZWF0ZUxpYnJhcnkoKTtcbiAgICAgICAgfVxuICAgICAgICBjb25zdCBtb2R1bGVzOiBUT05Nb2R1bGVbXSA9IFsuLi50aGlzLmNvbnRleHQubW9kdWxlcy52YWx1ZXMoKV07XG4gICAgICAgIGZvciAoY29uc3QgbW9kdWxlIG9mIG1vZHVsZXMpIHtcbiAgICAgICAgICAgIGF3YWl0IG1vZHVsZS5zZXR1cCgpO1xuICAgICAgICB9XG4gICAgfVxuXG4gICAgYXN5bmMgY2xvc2UoKTogUHJvbWlzZTx2b2lkPiB7XG4gICAgICAgIGF3YWl0IHRoaXMucXVlcmllcy5jbG9zZSgpO1xuICAgIH1cblxuXG4gICAgLy8gTW9kdWxlc1xuICAgIHJlcXVpcmVkTW9kdWxlPFQ+KE1vZHVsZUNsYXNzOiB0eXBlb2YgVE9OTW9kdWxlKTogVCB7XG4gICAgICAgIHJldHVybiB0aGlzLmNvbnRleHQuZ2V0TW9kdWxlPFQ+KE1vZHVsZUNsYXNzKTtcbiAgICB9XG5cblxuICAgIC8vIEludGVybmFsc1xuICAgIHN0YXRpYyBjbGllbnRQbGF0Zm9ybTogP1RPTkNsaWVudFBsYXRmb3JtID0gbnVsbDtcbiAgICBzdGF0aWMgbGlicmFyeTogP1RPTkNsaWVudExpYnJhcnkgPSBudWxsO1xuXG4gICAgY29udGV4dDogTW9kdWxlQ29udGV4dDtcbn1cbiJdfQ==