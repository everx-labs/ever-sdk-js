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
    (0, _defineProperty2["default"])(this, "_queries", void 0);
    (0, _defineProperty2["default"])(this, "modules", void 0);
    this.modules = new Map();
    this.config = this.getModule(_TONConfigModule["default"]);
    this.crypto = this.getModule(_TONCryptoModule["default"]);
    this.contracts = this.getModule(_TONContractsModule["default"]);
    this._queries = this.getModule(_TONQueriesModule["default"]);
    this.queries = this._queries;
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
    key: "getManagementAccessKey",
    value: function () {
      var _getManagementAccessKey = (0, _asyncToGenerator2["default"])(
      /*#__PURE__*/
      _regenerator["default"].mark(function _callee3() {
        var result;
        return _regenerator["default"].wrap(function _callee3$(_context3) {
          while (1) {
            switch (_context3.prev = _context3.next) {
              case 0:
                _context3.next = 2;
                return this._queries.query('query{getManagementAccessKey}');

              case 2:
                result = _context3.sent;
                return _context3.abrupt("return", result.data.getManagementAccessKey);

              case 4:
              case "end":
                return _context3.stop();
            }
          }
        }, _callee3, this);
      }));

      function getManagementAccessKey() {
        return _getManagementAccessKey.apply(this, arguments);
      }

      return getManagementAccessKey;
    }()
  }, {
    key: "registerAccessKeys",
    value: function () {
      var _registerAccessKeys = (0, _asyncToGenerator2["default"])(
      /*#__PURE__*/
      _regenerator["default"].mark(function _callee4(account, keys, accountKeys) {
        var managementAccessKey, signedManagementAccessKey, result;
        return _regenerator["default"].wrap(function _callee4$(_context4) {
          while (1) {
            switch (_context4.prev = _context4.next) {
              case 0:
                _context4.next = 2;
                return this.getManagementAccessKey();

              case 2:
                managementAccessKey = _context4.sent;
                _context4.next = 5;
                return this.crypto.naclSign({
                  text: managementAccessKey
                }, "".concat(accountKeys.secret).concat(accountKeys["public"]), 'Hex');

              case 5:
                signedManagementAccessKey = _context4.sent;
                _context4.next = 8;
                return this._queries.mutation("mutation registerAccessKeys($account: String, $keys: [String], $signedManagementAccessKey: String) {\n                    registerAccessKeys(account: $account, keys: $keys, signedManagementAccessKey: $signedManagementAccessKey)\n                }", {
                  account: account,
                  keys: keys,
                  signedManagementAccessKey: signedManagementAccessKey
                });

              case 8:
                result = _context4.sent;
                return _context4.abrupt("return", result.data.registerAccessKeys);

              case 10:
              case "end":
                return _context4.stop();
            }
          }
        }, _callee4, this);
      }));

      function registerAccessKeys(_x, _x2, _x3) {
        return _registerAccessKeys.apply(this, arguments);
      }

      return registerAccessKeys;
    }()
  }, {
    key: "revokeAccessKeys",
    value: function () {
      var _revokeAccessKeys = (0, _asyncToGenerator2["default"])(
      /*#__PURE__*/
      _regenerator["default"].mark(function _callee5(account, keys, accountKeys) {
        var managementAccessKey, signedManagementAccessKey, result;
        return _regenerator["default"].wrap(function _callee5$(_context5) {
          while (1) {
            switch (_context5.prev = _context5.next) {
              case 0:
                _context5.next = 2;
                return this.getManagementAccessKey();

              case 2:
                managementAccessKey = _context5.sent;
                _context5.next = 5;
                return this.crypto.naclSign({
                  text: managementAccessKey
                }, "".concat(accountKeys.secret).concat(accountKeys["public"]), 'Hex');

              case 5:
                signedManagementAccessKey = _context5.sent;
                _context5.next = 8;
                return this._queries.mutation("mutation revokeAccessKeys($account: String, $keys: [String], $signedManagementAccessKey: String) {\n                    registerAccessKeys(account: $account, keys: $keys, signedManagementAccessKey: $signedManagementAccessKey)\n                }", {
                  account: account,
                  keys: keys,
                  signedManagementAccessKey: signedManagementAccessKey
                });

              case 8:
                result = _context5.sent;
                return _context5.abrupt("return", result.data.revokeAccessKeys);

              case 10:
              case "end":
                return _context5.stop();
            }
          }
        }, _callee5, this);
      }));

      function revokeAccessKeys(_x4, _x5, _x6) {
        return _revokeAccessKeys.apply(this, arguments);
      }

      return revokeAccessKeys;
    }()
  }, {
    key: "trace",
    value: function () {
      var _trace = (0, _asyncToGenerator2["default"])(
      /*#__PURE__*/
      _regenerator["default"].mark(function _callee6(name, f, parentSpan) {
        var span, result;
        return _regenerator["default"].wrap(function _callee6$(_context6) {
          while (1) {
            switch (_context6.prev = _context6.next) {
              case 0:
                span = this.config.tracer.startSpan(name, {
                  childOf: parentSpan
                });
                _context6.prev = 1;
                span.setTag(_opentracing.Tags.SPAN_KIND, 'client');
                _context6.next = 5;
                return f(span);

              case 5:
                result = _context6.sent;

                if (result !== undefined) {
                  span.setTag('result', result);
                }

                span.finish();
                return _context6.abrupt("return", result);

              case 11:
                _context6.prev = 11;
                _context6.t0 = _context6["catch"](1);
                span.log({
                  event: 'failed',
                  payload: _context6.t0
                });
                span.finish();
                throw _context6.t0;

              case 16:
              case "end":
                return _context6.stop();
            }
          }
        }, _callee6, this, [[1, 11]]);
      }));

      function trace(_x7, _x8, _x9) {
        return _trace.apply(this, arguments);
      }

      return trace;
    }() // Internals

  }], [{
    key: "create",
    value: function () {
      var _create = (0, _asyncToGenerator2["default"])(
      /*#__PURE__*/
      _regenerator["default"].mark(function _callee7(config) {
        var client;
        return _regenerator["default"].wrap(function _callee7$(_context7) {
          while (1) {
            switch (_context7.prev = _context7.next) {
              case 0:
                client = new TONClient();
                client.config.setData(config);
                _context7.next = 4;
                return client.setup();

              case 4:
                return _context7.abrupt("return", client);

              case 5:
              case "end":
                return _context7.stop();
            }
          }
        }, _callee7);
      }));

      function create(_x10) {
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
  }, {
    key: "messageExpired",
    value: function messageExpired() {
      return new TONClientError('Message expired', TONClientError.code.MESSAGE_EXPIRED, TONClientError.source.CLIENT);
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
  QUERY_FAILED: 1005,
  MESSAGE_EXPIRED: 1006
});
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uL3NyYy9UT05DbGllbnQuanMiXSwibmFtZXMiOlsiVE9OQ2xpZW50IiwiY2xpZW50UGxhdGZvcm0iLCJtb2R1bGVzIiwiTWFwIiwiY29uZmlnIiwiZ2V0TW9kdWxlIiwiVE9OQ29uZmlnTW9kdWxlIiwiY3J5cHRvIiwiVE9OQ3J5cHRvTW9kdWxlIiwiY29udHJhY3RzIiwiVE9OQ29udHJhY3RzTW9kdWxlIiwiX3F1ZXJpZXMiLCJUT05RdWVyaWVzTW9kdWxlIiwicXVlcmllcyIsImNvcmUiLCJjcmVhdGVMaWJyYXJ5IiwidmFsdWVzIiwibW9kdWxlIiwic2V0dXAiLCJjbG9zZSIsIk1vZHVsZUNsYXNzIiwibmFtZSIsIm1vZHVsZU5hbWUiLCJleGlzdGluZ01vZHVsZSIsImdldCIsInNldCIsInF1ZXJ5IiwicmVzdWx0IiwiZGF0YSIsImdldE1hbmFnZW1lbnRBY2Nlc3NLZXkiLCJhY2NvdW50Iiwia2V5cyIsImFjY291bnRLZXlzIiwibWFuYWdlbWVudEFjY2Vzc0tleSIsIm5hY2xTaWduIiwidGV4dCIsInNlY3JldCIsInNpZ25lZE1hbmFnZW1lbnRBY2Nlc3NLZXkiLCJtdXRhdGlvbiIsInJlZ2lzdGVyQWNjZXNzS2V5cyIsInJldm9rZUFjY2Vzc0tleXMiLCJmIiwicGFyZW50U3BhbiIsInNwYW4iLCJ0cmFjZXIiLCJzdGFydFNwYW4iLCJjaGlsZE9mIiwic2V0VGFnIiwiVGFncyIsIlNQQU5fS0lORCIsInVuZGVmaW5lZCIsImZpbmlzaCIsImxvZyIsImV2ZW50IiwicGF5bG9hZCIsImNsaWVudCIsInNldERhdGEiLCJUT05DbGllbnRFcnJvciIsIm1lc3NhZ2UiLCJjb2RlIiwic291cmNlIiwiSU5URVJOQUxfRVJST1IiLCJDTElFTlQiLCJDTElFTlRfRE9FU19OT1RfQ09ORklHVVJFRCIsInJlc3BvbnNlVGV4dCIsIlNFTkRfTk9ERV9SRVFVRVNUX0ZBSUxFRCIsImZ1bmN0aW9uTmFtZSIsImFkZHJlc3MiLCJSVU5fTE9DQUxfQUNDT1VOVF9ET0VTX05PVF9FWElTVFMiLCJXQUlUX0ZPUl9USU1FT1VUIiwiZXJyb3JzIiwibWFwIiwieCIsInRvU3RyaW5nIiwiam9pbiIsIlFVRVJZX0ZBSUxFRCIsIk1FU1NBR0VfRVhQSVJFRCIsIk5PREUiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQWlCQTs7QUFVQTs7QUFDQTs7QUFDQTs7QUFFQTs7QUFHQTs7QUFsQ0E7Ozs7Ozs7Ozs7Ozs7Ozs7QUE4QkE7O0FBeUJBOzs7OztJQUthQSxTOzs7OzsrQkFDU0MsYyxFQUFtQztBQUNqREQsTUFBQUEsU0FBUyxDQUFDQyxjQUFWLEdBQTJCQSxjQUEzQjtBQUNILEssQ0FHRDs7OztBQU9BLHVCQUFjO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFDVixTQUFLQyxPQUFMLEdBQWUsSUFBSUMsR0FBSixFQUFmO0FBQ0EsU0FBS0MsTUFBTCxHQUFjLEtBQUtDLFNBQUwsQ0FBZUMsMkJBQWYsQ0FBZDtBQUNBLFNBQUtDLE1BQUwsR0FBYyxLQUFLRixTQUFMLENBQWVHLDJCQUFmLENBQWQ7QUFDQSxTQUFLQyxTQUFMLEdBQWlCLEtBQUtKLFNBQUwsQ0FBZUssOEJBQWYsQ0FBakI7QUFDQSxTQUFLQyxRQUFMLEdBQWdCLEtBQUtOLFNBQUwsQ0FBZU8sNEJBQWYsQ0FBaEI7QUFDQSxTQUFLQyxPQUFMLEdBQWUsS0FBS0YsUUFBcEI7QUFDSDtBQUVEOzs7Ozs7Ozs7O0FBWUE7Ozs7Ozs7Ozs7Ozs7O29CQUtTWCxTQUFTLENBQUNjLEk7Ozs7O29CQUNOZCxTQUFTLENBQUNDLGM7Ozs7Ozs7Ozt1QkFHUUQsU0FBUyxDQUFDQyxjQUFWLENBQXlCYyxhQUF6QixFOzs7QUFBdkJmLGdCQUFBQSxTQUFTLENBQUNjLEk7OztBQUVSWixnQkFBQUEsTyx1Q0FBMkIsS0FBS0EsT0FBTCxDQUFhYyxNQUFiLEU7Ozs7OzRCQUNaZCxPOzs7Ozs7OztBQUFWZSxnQkFBQUEsTzs7dUJBQ0RBLE9BQU0sQ0FBQ0MsS0FBUCxFOzs7Ozs7Ozs7Ozs7Ozs7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RyxFQUFBQSxpQ0FBaUMsRUFBRSxJQUh6QjtBQUlWQyxFQUFBQSxnQkFBZ0IsRUFBRSxJQUpSO0FBS1ZSLEVBQUFBLGNBQWMsRUFBRSxJQUxOO0FBTVZjLEVBQUFBLFlBQVksRUFBRSxJQU5KO0FBT1ZDLEVBQUFBLGVBQWUsRUFBRTtBQVBQLEMiLCJzb3VyY2VzQ29udGVudCI6WyIvKlxuICogQ29weXJpZ2h0IDIwMTgtMjAyMCBUT04gREVWIFNPTFVUSU9OUyBMVEQuXG4gKlxuICogTGljZW5zZWQgdW5kZXIgdGhlIFNPRlRXQVJFIEVWQUxVQVRJT04gTGljZW5zZSAodGhlIFwiTGljZW5zZVwiKTsgeW91IG1heSBub3QgdXNlXG4gKiB0aGlzIGZpbGUgZXhjZXB0IGluIGNvbXBsaWFuY2Ugd2l0aCB0aGUgTGljZW5zZS4gIFlvdSBtYXkgb2J0YWluIGEgY29weSBvZiB0aGVcbiAqIExpY2Vuc2UgYXQ6XG4gKlxuICogaHR0cDovL3d3dy50b24uZGV2L2xpY2Vuc2VzXG4gKlxuICogVW5sZXNzIHJlcXVpcmVkIGJ5IGFwcGxpY2FibGUgbGF3IG9yIGFncmVlZCB0byBpbiB3cml0aW5nLCBzb2Z0d2FyZVxuICogZGlzdHJpYnV0ZWQgdW5kZXIgdGhlIExpY2Vuc2UgaXMgZGlzdHJpYnV0ZWQgb24gYW4gXCJBUyBJU1wiIEJBU0lTLFxuICogV0lUSE9VVCBXQVJSQU5USUVTIE9SIENPTkRJVElPTlMgT0YgQU5ZIEtJTkQsIGVpdGhlciBleHByZXNzIG9yIGltcGxpZWQuXG4gKiBTZWUgdGhlIExpY2Vuc2UgZm9yIHRoZSBzcGVjaWZpYyBUT04gREVWIHNvZnR3YXJlIGdvdmVybmluZyBwZXJtaXNzaW9ucyBhbmRcbiAqIGxpbWl0YXRpb25zIHVuZGVyIHRoZSBMaWNlbnNlLlxuICovXG4vLyBAZmxvd1xuXG5pbXBvcnQgeyBUYWdzLCBTcGFuLCBTcGFuQ29udGV4dCB9IGZyb20gXCJvcGVudHJhY2luZ1wiO1xuaW1wb3J0IHR5cGUge1xuICAgIElUT05DbGllbnQsXG4gICAgVE9OQ29uZmlnRGF0YSxcbiAgICBUT05Db250cmFjdHMsXG4gICAgVE9OQ3J5cHRvLFxuICAgIFRPTktleVBhaXJEYXRhLFxuICAgIFRPTlF1ZXJpZXMsXG59IGZyb20gXCIuLi90eXBlc1wiO1xuXG5pbXBvcnQgVE9OQ29uZmlnTW9kdWxlIGZyb20gJy4vbW9kdWxlcy9UT05Db25maWdNb2R1bGUnO1xuaW1wb3J0IFRPTkNvbnRyYWN0c01vZHVsZSBmcm9tICcuL21vZHVsZXMvVE9OQ29udHJhY3RzTW9kdWxlJztcbmltcG9ydCBUT05DcnlwdG9Nb2R1bGUgZnJvbSAnLi9tb2R1bGVzL1RPTkNyeXB0b01vZHVsZSc7XG4vKiBlc2xpbnQtZGlzYWJsZSBjbGFzcy1tZXRob2RzLXVzZS10aGlzLCBuby11c2UtYmVmb3JlLWRlZmluZSAqL1xuaW1wb3J0IFRPTlF1ZXJpZXNNb2R1bGUgZnJvbSBcIi4vbW9kdWxlcy9UT05RdWVyaWVzTW9kdWxlXCI7XG5cbmltcG9ydCB0eXBlIHsgVE9OQ2xpZW50TGlicmFyeSwgVE9OTW9kdWxlQ29udGV4dCB9IGZyb20gJy4vVE9OTW9kdWxlJztcbmltcG9ydCB7IFRPTk1vZHVsZSB9IGZyb20gJy4vVE9OTW9kdWxlJztcblxuLyoqXG4gKiBKYXZhU2NyaXB0IHBsYXRmb3JtIHNwZWNpZmljIGNvbmZpZ3VyYXRpb25cbiAqL1xudHlwZSBUT05DbGllbnRQbGF0Zm9ybSA9IHtcbiAgICAvKipcbiAgICAgKiBQbGF0Zm9ybSBzcGVjaWZpYyBgZmV0Y2hgIGZ1bmN0aW9uXG4gICAgICovXG4gICAgZmV0Y2g6IGFueSxcbiAgICAvKipcbiAgICAgKiBQbGF0Zm9ybSBzcGVjaWZpYyBgV2ViU29ja2V0YCBpbXBsZW1lbnRhdGlvblxuICAgICAqIFRoaXMgaW1wbGVtZW50YXRpb24gbXVzdCBjb25mb3JtcyB0byBXM0MgV2ViU29ja2V0XG4gICAgICovXG4gICAgV2ViU29ja2V0OiBhbnksXG4gICAgLyoqXG4gICAgICogUmVxdWVzdCBjcmVhdGlvbiBvZiB0aGUgY2xpZW50IGNvcmVcbiAgICAgKi9cbiAgICBjcmVhdGVMaWJyYXJ5OiAoKSA9PiBQcm9taXNlPFRPTkNsaWVudExpYnJhcnk+LFxufTtcblxuLyoqXG4gKiBNYWluIG9iamVjdCBwcm92aWRlZCBmdW5jdGlvbmFsaXR5IG9mIHRoZSBUT04gQ2xpZW50IExpYnJhcnlcbiAqIEVhY2ggaW5zdGFuY2Ugb2YgVE9OQ2xpZW50IGhhcyBvd24gc2V0IG9mIFRPTiBDbGllbnQgbW9kdWxlc1xuICogYW5kIGhhcyBvd24gcHJlY29uZmlndXJlZCBjbGllbnQgY29udGV4dFxuICovXG5leHBvcnQgY2xhc3MgVE9OQ2xpZW50IGltcGxlbWVudHMgVE9OTW9kdWxlQ29udGV4dCwgSVRPTkNsaWVudCB7XG4gICAgc3RhdGljIHNldExpYnJhcnkoY2xpZW50UGxhdGZvcm06IFRPTkNsaWVudFBsYXRmb3JtKSB7XG4gICAgICAgIFRPTkNsaWVudC5jbGllbnRQbGF0Zm9ybSA9IGNsaWVudFBsYXRmb3JtO1xuICAgIH1cblxuXG4gICAgLy8gUHVibGljXG4gICAgY29uZmlnOiBUT05Db25maWdNb2R1bGU7XG4gICAgY3J5cHRvOiBUT05DcnlwdG87XG4gICAgY29udHJhY3RzOiBUT05Db250cmFjdHM7XG4gICAgcXVlcmllczogVE9OUXVlcmllcztcbiAgICBfcXVlcmllczogVE9OUXVlcmllc01vZHVsZTtcblxuICAgIGNvbnN0cnVjdG9yKCkge1xuICAgICAgICB0aGlzLm1vZHVsZXMgPSBuZXcgTWFwKCk7XG4gICAgICAgIHRoaXMuY29uZmlnID0gdGhpcy5nZXRNb2R1bGUoVE9OQ29uZmlnTW9kdWxlKTtcbiAgICAgICAgdGhpcy5jcnlwdG8gPSB0aGlzLmdldE1vZHVsZShUT05DcnlwdG9Nb2R1bGUpO1xuICAgICAgICB0aGlzLmNvbnRyYWN0cyA9IHRoaXMuZ2V0TW9kdWxlKFRPTkNvbnRyYWN0c01vZHVsZSk7XG4gICAgICAgIHRoaXMuX3F1ZXJpZXMgPSB0aGlzLmdldE1vZHVsZShUT05RdWVyaWVzTW9kdWxlKTtcbiAgICAgICAgdGhpcy5xdWVyaWVzID0gdGhpcy5fcXVlcmllcztcbiAgICB9XG5cbiAgICAvKipcbiAgICAgKiBDb252ZW5pZW50IHdheSB0byBjcmVhdGUgY29uZmlndXJlZCBpbnN0YW5jZSBvZiB0aGUgVE9OIENsaWVudFxuICAgICAqIEBwYXJhbSB7VE9OQ29uZmlnRGF0YX0gY29uZmlnXG4gICAgICogQHJldHVybiB7UHJvbWlzZTxUT05DbGllbnQ+fVxuICAgICAqL1xuICAgIHN0YXRpYyBhc3luYyBjcmVhdGUoY29uZmlnOiBUT05Db25maWdEYXRhKTogUHJvbWlzZTxUT05DbGllbnQ+IHtcbiAgICAgICAgY29uc3QgY2xpZW50ID0gbmV3IFRPTkNsaWVudCgpO1xuICAgICAgICBjbGllbnQuY29uZmlnLnNldERhdGEoY29uZmlnKTtcbiAgICAgICAgYXdhaXQgY2xpZW50LnNldHVwKCk7XG4gICAgICAgIHJldHVybiBjbGllbnQ7XG4gICAgfVxuXG4gICAgLyoqXG4gICAgICogU2V0IHVwIHRoZSBjbGllbnQgaW5zdGFuY2VcbiAgICAgKiBAcmV0dXJuIHtQcm9taXNlPHZvaWQ+fVxuICAgICAqL1xuICAgIGFzeW5jIHNldHVwKCk6IFByb21pc2U8dm9pZD4ge1xuICAgICAgICBpZiAoIVRPTkNsaWVudC5jb3JlKSB7XG4gICAgICAgICAgICBpZiAoIVRPTkNsaWVudC5jbGllbnRQbGF0Zm9ybSkge1xuICAgICAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIFRPTkNsaWVudC5jb3JlID0gYXdhaXQgVE9OQ2xpZW50LmNsaWVudFBsYXRmb3JtLmNyZWF0ZUxpYnJhcnkoKTtcbiAgICAgICAgfVxuICAgICAgICBjb25zdCBtb2R1bGVzOiBUT05Nb2R1bGVbXSA9IFsuLi50aGlzLm1vZHVsZXMudmFsdWVzKCldO1xuICAgICAgICBmb3IgKGNvbnN0IG1vZHVsZSBvZiBtb2R1bGVzKSB7XG4gICAgICAgICAgICBhd2FpdCBtb2R1bGUuc2V0dXAoKTtcbiAgICAgICAgfVxuICAgIH1cblxuICAgIC8qKlxuICAgICAqIFRlYXIgZG93biB0aGlzIGNsaWVudCBpbnN0YW5jZS5cbiAgICAgKiBOb3RlIHRoYXQgYWZ0ZXIgeW91IGhhdmUgY2FsbGVkIHRoaXMgbWV0aG9kIGFsbCBmdXR1cmUgdXNlIG9mIHRoaXMgaW5zdGFuY2Ugd2lsbCBmYWlsXG4gICAgICogQHJldHVybiB7UHJvbWlzZTx2b2lkPn1cbiAgICAgKi9cbiAgICBhc3luYyBjbG9zZSgpOiBQcm9taXNlPHZvaWQ+IHtcbiAgICAgICAgYXdhaXQgdGhpcy5xdWVyaWVzLmNsb3NlKCk7XG4gICAgfVxuXG4gICAgLy8gVE9OTW9kdWxlQ29udGV4dFxuXG4gICAgZ2V0Q29yZSgpOiA/VE9OQ2xpZW50TGlicmFyeSB7XG4gICAgICAgIHJldHVybiBUT05DbGllbnQuY29yZTtcbiAgICB9XG5cbiAgICBnZXRNb2R1bGU8VD4oTW9kdWxlQ2xhc3M6IHR5cGVvZiBUT05Nb2R1bGUpOiBUIHtcbiAgICAgICAgY29uc3QgbmFtZSA9IE1vZHVsZUNsYXNzLm1vZHVsZU5hbWU7XG4gICAgICAgIGNvbnN0IGV4aXN0aW5nTW9kdWxlID0gdGhpcy5tb2R1bGVzLmdldChuYW1lKTtcbiAgICAgICAgaWYgKGV4aXN0aW5nTW9kdWxlKSB7XG4gICAgICAgICAgICByZXR1cm4gKGV4aXN0aW5nTW9kdWxlOiBhbnkpO1xuICAgICAgICB9XG4gICAgICAgIGNvbnN0IG1vZHVsZSA9IG5ldyBNb2R1bGVDbGFzcyh0aGlzKTtcbiAgICAgICAgdGhpcy5tb2R1bGVzLnNldChuYW1lLCBtb2R1bGUpO1xuICAgICAgICByZXR1cm4gKG1vZHVsZTogYW55KTtcbiAgICB9XG5cblxuICAgIGFzeW5jIGdldE1hbmFnZW1lbnRBY2Nlc3NLZXkoKTogUHJvbWlzZTxzdHJpbmc+IHtcbiAgICAgICAgY29uc3QgcmVzdWx0ID0gYXdhaXQgdGhpcy5fcXVlcmllcy5xdWVyeSgncXVlcnl7Z2V0TWFuYWdlbWVudEFjY2Vzc0tleX0nKTtcbiAgICAgICAgcmV0dXJuIHJlc3VsdC5kYXRhLmdldE1hbmFnZW1lbnRBY2Nlc3NLZXk7XG4gICAgfVxuXG4gICAgYXN5bmMgcmVnaXN0ZXJBY2Nlc3NLZXlzKFxuICAgICAgICBhY2NvdW50OiBzdHJpbmcsXG4gICAgICAgIGtleXM6IHN0cmluZ1tdLFxuICAgICAgICBhY2NvdW50S2V5czogVE9OS2V5UGFpckRhdGEsXG4gICAgKTogUHJvbWlzZTxudW1iZXI+IHtcbiAgICAgICAgY29uc3QgbWFuYWdlbWVudEFjY2Vzc0tleSA9IGF3YWl0IHRoaXMuZ2V0TWFuYWdlbWVudEFjY2Vzc0tleSgpO1xuICAgICAgICBjb25zdCBzaWduZWRNYW5hZ2VtZW50QWNjZXNzS2V5ID0gYXdhaXQgdGhpcy5jcnlwdG8ubmFjbFNpZ24oXG4gICAgICAgICAgICB7IHRleHQ6IG1hbmFnZW1lbnRBY2Nlc3NLZXkgfSxcbiAgICAgICAgICAgIGAke2FjY291bnRLZXlzLnNlY3JldH0ke2FjY291bnRLZXlzLnB1YmxpY31gLFxuICAgICAgICAgICAgJ0hleCcpO1xuICAgICAgICBjb25zdCByZXN1bHQgPSBhd2FpdCB0aGlzLl9xdWVyaWVzLm11dGF0aW9uKFxuICAgICAgICAgICAgYG11dGF0aW9uIHJlZ2lzdGVyQWNjZXNzS2V5cygkYWNjb3VudDogU3RyaW5nLCAka2V5czogW1N0cmluZ10sICRzaWduZWRNYW5hZ2VtZW50QWNjZXNzS2V5OiBTdHJpbmcpIHtcbiAgICAgICAgICAgICAgICAgICAgcmVnaXN0ZXJBY2Nlc3NLZXlzKGFjY291bnQ6ICRhY2NvdW50LCBrZXlzOiAka2V5cywgc2lnbmVkTWFuYWdlbWVudEFjY2Vzc0tleTogJHNpZ25lZE1hbmFnZW1lbnRBY2Nlc3NLZXkpXG4gICAgICAgICAgICAgICAgfWAsIHtcbiAgICAgICAgICAgICAgICBhY2NvdW50LFxuICAgICAgICAgICAgICAgIGtleXMsXG4gICAgICAgICAgICAgICAgc2lnbmVkTWFuYWdlbWVudEFjY2Vzc0tleSxcbiAgICAgICAgICAgIH0pO1xuICAgICAgICByZXR1cm4gcmVzdWx0LmRhdGEucmVnaXN0ZXJBY2Nlc3NLZXlzO1xuICAgIH1cblxuICAgIGFzeW5jIHJldm9rZUFjY2Vzc0tleXMoXG4gICAgICAgIGFjY291bnQ6IHN0cmluZyxcbiAgICAgICAga2V5czogc3RyaW5nW10sXG4gICAgICAgIGFjY291bnRLZXlzOiBUT05LZXlQYWlyRGF0YSxcbiAgICApOiBQcm9taXNlPG51bWJlcj4ge1xuICAgICAgICBjb25zdCBtYW5hZ2VtZW50QWNjZXNzS2V5ID0gYXdhaXQgdGhpcy5nZXRNYW5hZ2VtZW50QWNjZXNzS2V5KCk7XG4gICAgICAgIGNvbnN0IHNpZ25lZE1hbmFnZW1lbnRBY2Nlc3NLZXkgPSBhd2FpdCB0aGlzLmNyeXB0by5uYWNsU2lnbihcbiAgICAgICAgICAgIHsgdGV4dDogbWFuYWdlbWVudEFjY2Vzc0tleSB9LFxuICAgICAgICAgICAgYCR7YWNjb3VudEtleXMuc2VjcmV0fSR7YWNjb3VudEtleXMucHVibGljfWAsXG4gICAgICAgICAgICAnSGV4Jyk7XG4gICAgICAgIGNvbnN0IHJlc3VsdCA9IGF3YWl0IHRoaXMuX3F1ZXJpZXMubXV0YXRpb24oXG4gICAgICAgICAgICBgbXV0YXRpb24gcmV2b2tlQWNjZXNzS2V5cygkYWNjb3VudDogU3RyaW5nLCAka2V5czogW1N0cmluZ10sICRzaWduZWRNYW5hZ2VtZW50QWNjZXNzS2V5OiBTdHJpbmcpIHtcbiAgICAgICAgICAgICAgICAgICAgcmVnaXN0ZXJBY2Nlc3NLZXlzKGFjY291bnQ6ICRhY2NvdW50LCBrZXlzOiAka2V5cywgc2lnbmVkTWFuYWdlbWVudEFjY2Vzc0tleTogJHNpZ25lZE1hbmFnZW1lbnRBY2Nlc3NLZXkpXG4gICAgICAgICAgICAgICAgfWAsIHtcbiAgICAgICAgICAgICAgICBhY2NvdW50LFxuICAgICAgICAgICAgICAgIGtleXMsXG4gICAgICAgICAgICAgICAgc2lnbmVkTWFuYWdlbWVudEFjY2Vzc0tleSxcbiAgICAgICAgICAgIH0pO1xuICAgICAgICByZXR1cm4gcmVzdWx0LmRhdGEucmV2b2tlQWNjZXNzS2V5cztcbiAgICB9XG5cbiAgICBhc3luYyB0cmFjZTxUPihcbiAgICAgICAgbmFtZTogc3RyaW5nLFxuICAgICAgICBmOiAoc3BhbjogU3BhbikgPT4gUHJvbWlzZTxUPixcbiAgICAgICAgcGFyZW50U3Bhbj86IChTcGFuIHwgU3BhbkNvbnRleHQpXG4gICAgKTogUHJvbWlzZTxUPiB7XG4gICAgICAgIGNvbnN0IHNwYW4gPSB0aGlzLmNvbmZpZy50cmFjZXIuc3RhcnRTcGFuKG5hbWUsIHsgY2hpbGRPZjogcGFyZW50U3BhbiB9KTtcbiAgICAgICAgdHJ5IHtcbiAgICAgICAgICAgIHNwYW4uc2V0VGFnKFRhZ3MuU1BBTl9LSU5ELCAnY2xpZW50Jyk7XG4gICAgICAgICAgICBjb25zdCByZXN1bHQgPSBhd2FpdCBmKHNwYW4pO1xuICAgICAgICAgICAgaWYgKHJlc3VsdCAhPT0gdW5kZWZpbmVkKSB7XG4gICAgICAgICAgICAgICAgc3Bhbi5zZXRUYWcoJ3Jlc3VsdCcsIHJlc3VsdCk7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBzcGFuLmZpbmlzaCgpO1xuICAgICAgICAgICAgcmV0dXJuIHJlc3VsdDtcbiAgICAgICAgfSBjYXRjaCAoZXJyb3IpIHtcbiAgICAgICAgICAgIHNwYW4ubG9nKHsgZXZlbnQ6ICdmYWlsZWQnLCBwYXlsb2FkOiBlcnJvciB9KTtcbiAgICAgICAgICAgIHNwYW4uZmluaXNoKCk7XG4gICAgICAgICAgICB0aHJvdyBlcnJvcjtcbiAgICAgICAgfVxuICAgIH1cblxuICAgIC8vIEludGVybmFsc1xuXG4gICAgc3RhdGljIGNsaWVudFBsYXRmb3JtOiA/VE9OQ2xpZW50UGxhdGZvcm0gPSBudWxsO1xuICAgIHN0YXRpYyBjb3JlOiA/VE9OQ2xpZW50TGlicmFyeSA9IG51bGw7XG5cbiAgICBtb2R1bGVzOiBNYXA8c3RyaW5nLCBUT05Nb2R1bGU+O1xufVxuXG5leHBvcnQgY2xhc3MgVE9OQ2xpZW50RXJyb3Ige1xuICAgIHN0YXRpYyBzb3VyY2UgPSB7XG4gICAgICAgIENMSUVOVDogJ2NsaWVudCcsXG4gICAgICAgIE5PREU6ICdub2RlJ1xuICAgIH07XG4gICAgc3RhdGljIGNvZGUgPSB7XG4gICAgICAgIENMSUVOVF9ET0VTX05PVF9DT05GSUdVUkVEOiAxMDAwLFxuICAgICAgICBTRU5EX05PREVfUkVRVUVTVF9GQUlMRUQ6IDEwMDEsXG4gICAgICAgIFJVTl9MT0NBTF9BQ0NPVU5UX0RPRVNfTk9UX0VYSVNUUzogMTAwMixcbiAgICAgICAgV0FJVF9GT1JfVElNRU9VVDogMTAwMyxcbiAgICAgICAgSU5URVJOQUxfRVJST1I6IDEwMDQsXG4gICAgICAgIFFVRVJZX0ZBSUxFRDogMTAwNSxcbiAgICAgICAgTUVTU0FHRV9FWFBJUkVEOiAxMDA2XG4gICAgfTtcblxuICAgIG1lc3NhZ2U6IHN0cmluZztcbiAgICBzb3VyY2U6IHN0cmluZztcbiAgICBjb2RlOiBudW1iZXI7XG4gICAgZGF0YTogYW55O1xuXG4gICAgY29uc3RydWN0b3IobWVzc2FnZTogc3RyaW5nLCBjb2RlOiBudW1iZXIsIHNvdXJjZTogc3RyaW5nLCBkYXRhPzogYW55KSB7XG4gICAgICAgIHRoaXMubWVzc2FnZSA9IG1lc3NhZ2U7XG4gICAgICAgIHRoaXMuY29kZSA9IGNvZGU7XG4gICAgICAgIHRoaXMuc291cmNlID0gc291cmNlO1xuICAgICAgICB0aGlzLmRhdGEgPSBkYXRhO1xuICAgIH1cblxuICAgIHN0YXRpYyBpbnRlcm5hbEVycm9yKG1lc3NhZ2U6IHN0cmluZyk6IFRPTkNsaWVudEVycm9yIHtcbiAgICAgICAgcmV0dXJuIG5ldyBUT05DbGllbnRFcnJvcihcbiAgICAgICAgICAgIGBJbnRlcm5hbCBlcnJvcjogJHttZXNzYWdlfWAsXG4gICAgICAgICAgICBUT05DbGllbnRFcnJvci5jb2RlLklOVEVSTkFMX0VSUk9SLFxuICAgICAgICAgICAgVE9OQ2xpZW50RXJyb3Iuc291cmNlLkNMSUVOVCxcbiAgICAgICAgKTtcbiAgICB9XG5cbiAgICBzdGF0aWMgY2xpZW50RG9lc05vdENvbmZpZ3VyZWQoKTogVE9OQ2xpZW50RXJyb3Ige1xuICAgICAgICByZXR1cm4gbmV3IFRPTkNsaWVudEVycm9yKFxuICAgICAgICAgICAgJ1RPTiBDbGllbnQgZG9lcyBub3QgY29uZmlndXJlZCcsXG4gICAgICAgICAgICBUT05DbGllbnRFcnJvci5jb2RlLkNMSUVOVF9ET0VTX05PVF9DT05GSUdVUkVELFxuICAgICAgICAgICAgVE9OQ2xpZW50RXJyb3Iuc291cmNlLkNMSUVOVCxcbiAgICAgICAgKTtcbiAgICB9XG5cbiAgICBzdGF0aWMgc2VuZE5vZGVSZXF1ZXN0RmFpbGVkKHJlc3BvbnNlVGV4dDogc3RyaW5nKTogVE9OQ2xpZW50RXJyb3Ige1xuICAgICAgICByZXR1cm4gbmV3IFRPTkNsaWVudEVycm9yKFxuICAgICAgICAgICAgYFNlbmQgbm9kZSByZXF1ZXN0IGZhaWxlZDogJHtyZXNwb25zZVRleHR9YCxcbiAgICAgICAgICAgIFRPTkNsaWVudEVycm9yLmNvZGUuU0VORF9OT0RFX1JFUVVFU1RfRkFJTEVELFxuICAgICAgICAgICAgVE9OQ2xpZW50RXJyb3Iuc291cmNlLkNMSUVOVCxcbiAgICAgICAgKTtcbiAgICB9XG5cbiAgICBzdGF0aWMgcnVuTG9jYWxBY2NvdW50RG9lc05vdEV4aXN0cyhmdW5jdGlvbk5hbWU6IHN0cmluZywgYWRkcmVzczogc3RyaW5nKTogVE9OQ2xpZW50RXJyb3Ige1xuICAgICAgICByZXR1cm4gbmV3IFRPTkNsaWVudEVycm9yKFxuICAgICAgICAgICAgYFske2Z1bmN0aW9uTmFtZX1dIHJ1biBsb2NhbCBmYWlsZWQ6IGFjY291bnQgWyR7YWRkcmVzc31dIGRvZXMgbm90IGV4aXN0c2AsXG4gICAgICAgICAgICBUT05DbGllbnRFcnJvci5jb2RlLlJVTl9MT0NBTF9BQ0NPVU5UX0RPRVNfTk9UX0VYSVNUUyxcbiAgICAgICAgICAgIFRPTkNsaWVudEVycm9yLnNvdXJjZS5DTElFTlQsXG4gICAgICAgICk7XG4gICAgfVxuXG4gICAgc3RhdGljIHdhaXRGb3JUaW1lb3V0KCkge1xuICAgICAgICByZXR1cm4gbmV3IFRPTkNsaWVudEVycm9yKFxuICAgICAgICAgICAgJ1dhaXQgZm9yIG9wZXJhdGlvbiByZWplY3RlZCBvbiB0aW1lb3V0JyxcbiAgICAgICAgICAgIFRPTkNsaWVudEVycm9yLmNvZGUuV0FJVF9GT1JfVElNRU9VVCxcbiAgICAgICAgICAgIFRPTkNsaWVudEVycm9yLnNvdXJjZS5DTElFTlQsXG4gICAgICAgICk7XG4gICAgfVxuXG4gICAgc3RhdGljIHF1ZXJ5RmFpbGVkKGVycm9yczogRXJyb3JbXSkge1xuICAgICAgICByZXR1cm4gbmV3IFRPTkNsaWVudEVycm9yKFxuICAgICAgICAgICAgYFF1ZXJ5IGZhaWxlZDogJHtlcnJvcnMubWFwKHggPT4geC5tZXNzYWdlIHx8IHgudG9TdHJpbmcoKSkuam9pbignXFxuJyl9YCxcbiAgICAgICAgICAgIFRPTkNsaWVudEVycm9yLmNvZGUuUVVFUllfRkFJTEVELFxuICAgICAgICAgICAgVE9OQ2xpZW50RXJyb3Iuc291cmNlLkNMSUVOVCxcbiAgICAgICAgKTtcbiAgICB9XG5cbiAgICBzdGF0aWMgbWVzc2FnZUV4cGlyZWQoKSB7XG4gICAgICAgIHJldHVybiBuZXcgVE9OQ2xpZW50RXJyb3IoXG4gICAgICAgICAgICAnTWVzc2FnZSBleHBpcmVkJyxcbiAgICAgICAgICAgIFRPTkNsaWVudEVycm9yLmNvZGUuTUVTU0FHRV9FWFBJUkVELFxuICAgICAgICAgICAgVE9OQ2xpZW50RXJyb3Iuc291cmNlLkNMSUVOVCxcbiAgICAgICAgKTtcbiAgICB9XG59XG5cbiJdfQ==