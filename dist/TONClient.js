"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.TONClientError = exports.TONClient = void 0;

var _opentracing = require("opentracing");

var _TONConfigModule = _interopRequireDefault(require("./modules/TONConfigModule"));

var _TONContractsModule = _interopRequireDefault(require("./modules/TONContractsModule"));

var _TONCryptoModule = _interopRequireDefault(require("./modules/TONCryptoModule"));

var _TONQueriesModule = _interopRequireDefault(require("./modules/TONQueriesModule"));

var _TONModule = require("./TONModule");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _createForOfIteratorHelper(o) { if (typeof Symbol === "undefined" || o[Symbol.iterator] == null) { if (Array.isArray(o) || (o = _unsupportedIterableToArray(o))) { var i = 0; var F = function F() {}; return { s: F, n: function n() { if (i >= o.length) return { done: true }; return { done: false, value: o[i++] }; }, e: function e(_e) { throw _e; }, f: F }; } throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); } var it, normalCompletion = true, didErr = false, err; return { s: function s() { it = o[Symbol.iterator](); }, n: function n() { var step = it.next(); normalCompletion = step.done; return step; }, e: function e(_e2) { didErr = true; err = _e2; }, f: function f() { try { if (!normalCompletion && it["return"] != null) it["return"](); } finally { if (didErr) throw err; } } }; }

function _toConsumableArray(arr) { return _arrayWithoutHoles(arr) || _iterableToArray(arr) || _unsupportedIterableToArray(arr) || _nonIterableSpread(); }

function _nonIterableSpread() { throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }

function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }

function _iterableToArray(iter) { if (typeof Symbol !== "undefined" && Symbol.iterator in Object(iter)) return Array.from(iter); }

function _arrayWithoutHoles(arr) { if (Array.isArray(arr)) return _arrayLikeToArray(arr); }

function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }

function asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { Promise.resolve(value).then(_next, _throw); } }

function _asyncToGenerator(fn) { return function () { var self = this, args = arguments; return new Promise(function (resolve, reject) { var gen = fn.apply(self, args); function _next(value) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "next", value); } function _throw(err) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "throw", err); } _next(undefined); }); }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

/**
 * Main object provided functionality of the TON Client Library
 * Each instance of TONClient has own set of TON Client modules
 * and has own preconfigured client context
 */
var TONClient = /*#__PURE__*/function () {
  _createClass(TONClient, null, [{
    key: "setLibrary",
    value: function setLibrary(clientPlatform) {
      TONClient.clientPlatform = clientPlatform;
    } // Public

  }]);

  function TONClient() {
    _classCallCheck(this, TONClient);

    _defineProperty(this, "config", void 0);

    _defineProperty(this, "crypto", void 0);

    _defineProperty(this, "contracts", void 0);

    _defineProperty(this, "queries", void 0);

    _defineProperty(this, "_queries", void 0);

    _defineProperty(this, "modules", void 0);

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


  _createClass(TONClient, [{
    key: "setup",

    /**
     * Set up the client instance
     * @return {Promise<void>}
     */
    value: function () {
      var _setup = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee() {
        var modules, _iterator, _step, module;

        return regeneratorRuntime.wrap(function _callee$(_context) {
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
                modules = _toConsumableArray(this.modules.values());
                _iterator = _createForOfIteratorHelper(modules);
                _context.prev = 8;

                _iterator.s();

              case 10:
                if ((_step = _iterator.n()).done) {
                  _context.next = 16;
                  break;
                }

                module = _step.value;
                _context.next = 14;
                return module.setup();

              case 14:
                _context.next = 10;
                break;

              case 16:
                _context.next = 21;
                break;

              case 18:
                _context.prev = 18;
                _context.t0 = _context["catch"](8);

                _iterator.e(_context.t0);

              case 21:
                _context.prev = 21;

                _iterator.f();

                return _context.finish(21);

              case 24:
              case "end":
                return _context.stop();
            }
          }
        }, _callee, this, [[8, 18, 21, 24]]);
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
      var _close = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee2() {
        return regeneratorRuntime.wrap(function _callee2$(_context2) {
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
    key: "serverTimeDelta",
    value: function serverTimeDelta() {
      return this._queries.serverTimeDelta();
    }
  }, {
    key: "serverNow",
    value: function serverNow() {
      return this._queries.serverNow();
    }
  }, {
    key: "getManagementAccessKey",
    value: function () {
      var _getManagementAccessKey = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee3() {
        var result;
        return regeneratorRuntime.wrap(function _callee3$(_context3) {
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
    key: "_resolveSignedManagementAccessKey",
    value: function () {
      var _resolveSignedManagementAccessKey2 = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee4(params) {
        var signKeys, managementAccessKey;
        return regeneratorRuntime.wrap(function _callee4$(_context4) {
          while (1) {
            switch (_context4.prev = _context4.next) {
              case 0:
                if (!params.signedManagementAccessKey) {
                  _context4.next = 2;
                  break;
                }

                return _context4.abrupt("return", params.signedManagementAccessKey);

              case 2:
                signKeys = params.accountKeys;

                if (!signKeys) {
                  _context4.next = 8;
                  break;
                }

                _context4.next = 6;
                return this.getManagementAccessKey();

              case 6:
                managementAccessKey = _context4.sent;
                return _context4.abrupt("return", this.crypto.naclSign({
                  text: managementAccessKey
                }, "".concat(signKeys.secret).concat(signKeys["public"]), 'Hex'));

              case 8:
                return _context4.abrupt("return", '');

              case 9:
              case "end":
                return _context4.stop();
            }
          }
        }, _callee4, this);
      }));

      function _resolveSignedManagementAccessKey(_x) {
        return _resolveSignedManagementAccessKey2.apply(this, arguments);
      }

      return _resolveSignedManagementAccessKey;
    }()
  }, {
    key: "registerAccessKeys",
    value: function () {
      var _registerAccessKeys = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee5(params) {
        var signedManagementAccessKey, result;
        return regeneratorRuntime.wrap(function _callee5$(_context5) {
          while (1) {
            switch (_context5.prev = _context5.next) {
              case 0:
                _context5.next = 2;
                return this._resolveSignedManagementAccessKey(params);

              case 2:
                signedManagementAccessKey = _context5.sent;
                _context5.next = 5;
                return this._queries.mutation("mutation registerAccessKeys($account: String, $keys: [AccessKey], $signedManagementAccessKey: String) {\n                    registerAccessKeys(account: $account, keys: $keys, signedManagementAccessKey: $signedManagementAccessKey)\n                }", {
                  account: params.account,
                  keys: params.keys,
                  signedManagementAccessKey: signedManagementAccessKey
                });

              case 5:
                result = _context5.sent;
                return _context5.abrupt("return", result.data.registerAccessKeys);

              case 7:
              case "end":
                return _context5.stop();
            }
          }
        }, _callee5, this);
      }));

      function registerAccessKeys(_x2) {
        return _registerAccessKeys.apply(this, arguments);
      }

      return registerAccessKeys;
    }()
  }, {
    key: "revokeAccessKeys",
    value: function () {
      var _revokeAccessKeys = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee6(params) {
        var signedManagementAccessKey, result;
        return regeneratorRuntime.wrap(function _callee6$(_context6) {
          while (1) {
            switch (_context6.prev = _context6.next) {
              case 0:
                _context6.next = 2;
                return this._resolveSignedManagementAccessKey(params);

              case 2:
                signedManagementAccessKey = _context6.sent;
                _context6.next = 5;
                return this._queries.mutation("mutation revokeAccessKeys($account: String, $keys: [String], $signedManagementAccessKey: String) {\n                    revokeAccessKeys(account: $account, keys: $keys, signedManagementAccessKey: $signedManagementAccessKey)\n                }", {
                  account: params.account,
                  keys: params.keys,
                  signedManagementAccessKey: signedManagementAccessKey
                });

              case 5:
                result = _context6.sent;
                return _context6.abrupt("return", result.data.revokeAccessKeys);

              case 7:
              case "end":
                return _context6.stop();
            }
          }
        }, _callee6, this);
      }));

      function revokeAccessKeys(_x3) {
        return _revokeAccessKeys.apply(this, arguments);
      }

      return revokeAccessKeys;
    }()
  }, {
    key: "trace",
    value: function () {
      var _trace = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee7(name, f, parentSpan) {
        var span, result;
        return regeneratorRuntime.wrap(function _callee7$(_context7) {
          while (1) {
            switch (_context7.prev = _context7.next) {
              case 0:
                span = this.config.tracer.startSpan(name, {
                  childOf: parentSpan
                });
                _context7.prev = 1;
                span.setTag(_opentracing.Tags.SPAN_KIND, 'client');
                _context7.next = 5;
                return f(span);

              case 5:
                result = _context7.sent;

                if (result !== undefined) {
                  span.setTag('result', result);
                }

                span.finish();
                return _context7.abrupt("return", result);

              case 11:
                _context7.prev = 11;
                _context7.t0 = _context7["catch"](1);
                span.log({
                  event: 'failed',
                  payload: _context7.t0
                });
                span.finish();
                throw _context7.t0;

              case 16:
              case "end":
                return _context7.stop();
            }
          }
        }, _callee7, this, [[1, 11]]);
      }));

      function trace(_x4, _x5, _x6) {
        return _trace.apply(this, arguments);
      }

      return trace;
    }() // Internals

  }], [{
    key: "create",
    value: function () {
      var _create = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee8(config) {
        var client;
        return regeneratorRuntime.wrap(function _callee8$(_context8) {
          while (1) {
            switch (_context8.prev = _context8.next) {
              case 0:
                client = new TONClient();
                client.config.setData(config);
                _context8.next = 4;
                return client.setup();

              case 4:
                return _context8.abrupt("return", client);

              case 5:
              case "end":
                return _context8.stop();
            }
          }
        }, _callee8);
      }));

      function create(_x7) {
        return _create.apply(this, arguments);
      }

      return create;
    }()
  }]);

  return TONClient;
}();

exports.TONClient = TONClient;

_defineProperty(TONClient, "clientPlatform", null);

_defineProperty(TONClient, "core", null);

var TONClientError = /*#__PURE__*/function () {
  function TONClientError(message, code, source, data) {
    _classCallCheck(this, TONClientError);

    _defineProperty(this, "message", void 0);

    _defineProperty(this, "source", void 0);

    _defineProperty(this, "code", void 0);

    _defineProperty(this, "data", void 0);

    this.message = message;
    this.code = code;
    this.source = source;
    this.data = data;
  }

  _createClass(TONClientError, null, [{
    key: "isClientError",
    value: function isClientError(error, code) {
      return error.source === TONClientError.source.CLIENT && error.code === code;
    }
  }, {
    key: "internalError",
    value: function internalError(message) {
      return new TONClientError("Internal error: ".concat(message), TONClientError.code.INTERNAL_ERROR, TONClientError.source.CLIENT);
    }
  }, {
    key: "invalidCons",
    value: function invalidCons() {
      return new TONClientError('Invalid CONS structure. Each CONS item must contains of two elements.', TONClientError.code.INVALID_CONS, TONClientError.source.CLIENT);
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
  }, {
    key: "serverDoesntSupportAggregations",
    value: function serverDoesntSupportAggregations() {
      return new TONClientError('Server doesn\'t support aggregations', TONClientError.code.SERVER_DOESNT_SUPPORT_AGGREGATIONS, TONClientError.source.CLIENT);
    }
  }, {
    key: "addressRequiredForRunLocal",
    value: function addressRequiredForRunLocal() {
      return new TONClientError("Address required for run local. You haven't specified contract code or data so address is required to load missing parts from network.", TONClientError.code.ADDRESS_REQUIRED_FOR_RUN_LOCAL, TONClientError.source.CLIENT);
    }
  }, {
    key: "clockOutOfSync",
    value: function clockOutOfSync() {
      return new TONClientError('You local clock is out of sync with the server time. ' + 'It is a critical condition for sending messages to the blockchain. ' + 'Please sync you clock with the internet time.', TONClientError.code.CLOCK_OUT_OF_SYNC, TONClientError.source.CLIENT);
    }
  }, {
    key: "isMessageExpired",
    value: function isMessageExpired(error) {
      return TONClientError.isClientError(error, TONClientError.code.MESSAGE_EXPIRED);
    }
  }]);

  return TONClientError;
}();

exports.TONClientError = TONClientError;

_defineProperty(TONClientError, "source", {
  CLIENT: 'client',
  NODE: 'node'
});

_defineProperty(TONClientError, "code", {
  CLIENT_DOES_NOT_CONFIGURED: 1000,
  SEND_NODE_REQUEST_FAILED: 1001,
  RUN_LOCAL_ACCOUNT_DOES_NOT_EXISTS: 1002,
  WAIT_FOR_TIMEOUT: 1003,
  INTERNAL_ERROR: 1004,
  QUERY_FAILED: 1005,
  MESSAGE_EXPIRED: 1006,
  SERVER_DOESNT_SUPPORT_AGGREGATIONS: 1007,
  INVALID_CONS: 1008,
  ADDRESS_REQUIRED_FOR_RUN_LOCAL: 1009,
  CLOCK_OUT_OF_SYNC: 1013,
  ACCOUNT_MISSING: 1014
});
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uL3NyYy9UT05DbGllbnQuanMiXSwibmFtZXMiOlsiVE9OQ2xpZW50IiwiY2xpZW50UGxhdGZvcm0iLCJtb2R1bGVzIiwiTWFwIiwiY29uZmlnIiwiZ2V0TW9kdWxlIiwiVE9OQ29uZmlnTW9kdWxlIiwiY3J5cHRvIiwiVE9OQ3J5cHRvTW9kdWxlIiwiY29udHJhY3RzIiwiVE9OQ29udHJhY3RzTW9kdWxlIiwiX3F1ZXJpZXMiLCJUT05RdWVyaWVzTW9kdWxlIiwicXVlcmllcyIsImNvcmUiLCJjcmVhdGVMaWJyYXJ5IiwidmFsdWVzIiwibW9kdWxlIiwic2V0dXAiLCJjbG9zZSIsIk1vZHVsZUNsYXNzIiwibmFtZSIsIm1vZHVsZU5hbWUiLCJleGlzdGluZ01vZHVsZSIsImdldCIsInNldCIsInNlcnZlclRpbWVEZWx0YSIsInNlcnZlck5vdyIsInF1ZXJ5IiwicmVzdWx0IiwiZGF0YSIsImdldE1hbmFnZW1lbnRBY2Nlc3NLZXkiLCJwYXJhbXMiLCJzaWduZWRNYW5hZ2VtZW50QWNjZXNzS2V5Iiwic2lnbktleXMiLCJhY2NvdW50S2V5cyIsIm1hbmFnZW1lbnRBY2Nlc3NLZXkiLCJuYWNsU2lnbiIsInRleHQiLCJzZWNyZXQiLCJfcmVzb2x2ZVNpZ25lZE1hbmFnZW1lbnRBY2Nlc3NLZXkiLCJtdXRhdGlvbiIsImFjY291bnQiLCJrZXlzIiwicmVnaXN0ZXJBY2Nlc3NLZXlzIiwicmV2b2tlQWNjZXNzS2V5cyIsImYiLCJwYXJlbnRTcGFuIiwic3BhbiIsInRyYWNlciIsInN0YXJ0U3BhbiIsImNoaWxkT2YiLCJzZXRUYWciLCJUYWdzIiwiU1BBTl9LSU5EIiwidW5kZWZpbmVkIiwiZmluaXNoIiwibG9nIiwiZXZlbnQiLCJwYXlsb2FkIiwiY2xpZW50Iiwic2V0RGF0YSIsIlRPTkNsaWVudEVycm9yIiwibWVzc2FnZSIsImNvZGUiLCJzb3VyY2UiLCJlcnJvciIsIkNMSUVOVCIsIklOVEVSTkFMX0VSUk9SIiwiSU5WQUxJRF9DT05TIiwiQ0xJRU5UX0RPRVNfTk9UX0NPTkZJR1VSRUQiLCJyZXNwb25zZVRleHQiLCJTRU5EX05PREVfUkVRVUVTVF9GQUlMRUQiLCJmdW5jdGlvbk5hbWUiLCJhZGRyZXNzIiwiUlVOX0xPQ0FMX0FDQ09VTlRfRE9FU19OT1RfRVhJU1RTIiwiV0FJVF9GT1JfVElNRU9VVCIsImVycm9ycyIsIm1hcCIsIngiLCJ0b1N0cmluZyIsImpvaW4iLCJRVUVSWV9GQUlMRUQiLCJNRVNTQUdFX0VYUElSRUQiLCJTRVJWRVJfRE9FU05UX1NVUFBPUlRfQUdHUkVHQVRJT05TIiwiQUREUkVTU19SRVFVSVJFRF9GT1JfUlVOX0xPQ0FMIiwiQ0xPQ0tfT1VUX09GX1NZTkMiLCJpc0NsaWVudEVycm9yIiwiTk9ERSIsIkFDQ09VTlRfTUlTU0lORyJdLCJtYXBwaW5ncyI6Ijs7Ozs7OztBQUtBOztBQVlBOztBQUNBOztBQUNBOztBQUVBOztBQUdBOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFxQkE7Ozs7O0lBS2FBLFM7OzsrQkFDU0MsYyxFQUFtQztBQUNqREQsTUFBQUEsU0FBUyxDQUFDQyxjQUFWLEdBQTJCQSxjQUEzQjtBQUNILEssQ0FHRDs7OztBQU9BLHVCQUFjO0FBQUE7O0FBQUE7O0FBQUE7O0FBQUE7O0FBQUE7O0FBQUE7O0FBQUE7O0FBQ1YsU0FBS0MsT0FBTCxHQUFlLElBQUlDLEdBQUosRUFBZjtBQUNBLFNBQUtDLE1BQUwsR0FBYyxLQUFLQyxTQUFMLENBQWVDLDJCQUFmLENBQWQ7QUFDQSxTQUFLQyxNQUFMLEdBQWMsS0FBS0YsU0FBTCxDQUFlRywyQkFBZixDQUFkO0FBQ0EsU0FBS0MsU0FBTCxHQUFpQixLQUFLSixTQUFMLENBQWVLLDhCQUFmLENBQWpCO0FBQ0EsU0FBS0MsUUFBTCxHQUFnQixLQUFLTixTQUFMLENBQWVPLDRCQUFmLENBQWhCO0FBQ0EsU0FBS0MsT0FBTCxHQUFlLEtBQUtGLFFBQXBCO0FBQ0g7QUFFRDs7Ozs7Ozs7OztBQVlBOzs7Ozs7Ozs7Ozs7b0JBS1NYLFNBQVMsQ0FBQ2MsSTs7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QWMsQ0FBQ0UsSUFBZixDQUFvQm1CLGVBQXhELENBQVA7QUFDSDs7Ozs7Ozs7Z0JBaklRckIsYyxZQUNPO0FBQ1pLLEVBQUFBLE1BQU0sRUFBRSxRQURJO0FBRVpxQixFQUFBQSxJQUFJLEVBQUU7QUFGTSxDOztnQkFEUDFCLGMsVUFLSztBQUNWUSxFQUFBQSwwQkFBMEIsRUFBRSxJQURsQjtBQUVWRSxFQUFBQSx3QkFBd0IsRUFBRSxJQUZoQjtBQUdWRyxFQUFBQSxpQ0FBaUMsRUFBRSxJQUh6QjtBQUlWQyxFQUFBQSxnQkFBZ0IsRUFBRSxJQUpSO0FBS1ZSLEVBQUFBLGNBQWMsRUFBRSxJQUxOO0FBTVZjLEVBQUFBLFlBQVksRUFBRSxJQU5KO0FBT1ZDLEVBQUFBLGVBQWUsRUFBRSxJQVBQO0FBUVZDLEVBQUFBLGtDQUFrQyxFQUFFLElBUjFCO0FBU1ZmLEVBQUFBLFlBQVksRUFBRSxJQVRKO0FBVVZnQixFQUFBQSw4QkFBOEIsRUFBRSxJQVZ0QjtBQVdWQyxFQUFBQSxpQkFBaUIsRUFBRSxJQVhUO0FBWVZHLEVBQUFBLGVBQWUsRUFBRTtBQVpQLEMiLCJzb3VyY2VzQ29udGVudCI6WyIvKlxuICogQ29weXJpZ2h0IDIwMTgtMjAyMCBUT04gREVWIFNPTFVUSU9OUyBMVEQuXG4gKi9cbi8vIEBmbG93XG5cbmltcG9ydCB7IFRhZ3MsIFNwYW4sIFNwYW5Db250ZXh0IH0gZnJvbSBcIm9wZW50cmFjaW5nXCI7XG5pbXBvcnQgdHlwZSB7XG4gICAgSVRPTkNsaWVudCxcbiAgICBUT05BY2Nlc3NLZXlzTWFuYWdlbWVudFBhcmFtcyxcbiAgICBUT05Db25maWdEYXRhLFxuICAgIFRPTkNvbnRyYWN0cyxcbiAgICBUT05DcnlwdG8sXG4gICAgVE9OUXVlcmllcyxcbiAgICBUT05SZWdpc3RlckFjY2Vzc0tleXNQYXJhbXMsXG4gICAgVE9OUmV2b2tlQWNjZXNzS2V5c1BhcmFtcyxcbn0gZnJvbSBcIi4uL3R5cGVzXCI7XG5cbmltcG9ydCBUT05Db25maWdNb2R1bGUgZnJvbSAnLi9tb2R1bGVzL1RPTkNvbmZpZ01vZHVsZSc7XG5pbXBvcnQgVE9OQ29udHJhY3RzTW9kdWxlIGZyb20gJy4vbW9kdWxlcy9UT05Db250cmFjdHNNb2R1bGUnO1xuaW1wb3J0IFRPTkNyeXB0b01vZHVsZSBmcm9tICcuL21vZHVsZXMvVE9OQ3J5cHRvTW9kdWxlJztcbi8qIGVzbGludC1kaXNhYmxlIGNsYXNzLW1ldGhvZHMtdXNlLXRoaXMsIG5vLXVzZS1iZWZvcmUtZGVmaW5lICovXG5pbXBvcnQgVE9OUXVlcmllc01vZHVsZSBmcm9tIFwiLi9tb2R1bGVzL1RPTlF1ZXJpZXNNb2R1bGVcIjtcblxuaW1wb3J0IHR5cGUgeyBUT05DbGllbnRMaWJyYXJ5LCBUT05Nb2R1bGVDb250ZXh0IH0gZnJvbSAnLi9UT05Nb2R1bGUnO1xuaW1wb3J0IHsgVE9OTW9kdWxlIH0gZnJvbSAnLi9UT05Nb2R1bGUnO1xuXG4vKipcbiAqIEphdmFTY3JpcHQgcGxhdGZvcm0gc3BlY2lmaWMgY29uZmlndXJhdGlvblxuICovXG50eXBlIFRPTkNsaWVudFBsYXRmb3JtID0ge1xuICAgIC8qKlxuICAgICAqIFBsYXRmb3JtIHNwZWNpZmljIGBmZXRjaGAgZnVuY3Rpb25cbiAgICAgKi9cbiAgICBmZXRjaDogYW55LFxuICAgIC8qKlxuICAgICAqIFBsYXRmb3JtIHNwZWNpZmljIGBXZWJTb2NrZXRgIGltcGxlbWVudGF0aW9uXG4gICAgICogVGhpcyBpbXBsZW1lbnRhdGlvbiBtdXN0IGNvbmZvcm1zIHRvIFczQyBXZWJTb2NrZXRcbiAgICAgKi9cbiAgICBXZWJTb2NrZXQ6IGFueSxcbiAgICAvKipcbiAgICAgKiBSZXF1ZXN0IGNyZWF0aW9uIG9mIHRoZSBjbGllbnQgY29yZVxuICAgICAqL1xuICAgIGNyZWF0ZUxpYnJhcnk6ICgpID0+IFByb21pc2U8VE9OQ2xpZW50TGlicmFyeT4sXG59O1xuXG4vKipcbiAqIE1haW4gb2JqZWN0IHByb3ZpZGVkIGZ1bmN0aW9uYWxpdHkgb2YgdGhlIFRPTiBDbGllbnQgTGlicmFyeVxuICogRWFjaCBpbnN0YW5jZSBvZiBUT05DbGllbnQgaGFzIG93biBzZXQgb2YgVE9OIENsaWVudCBtb2R1bGVzXG4gKiBhbmQgaGFzIG93biBwcmVjb25maWd1cmVkIGNsaWVudCBjb250ZXh0XG4gKi9cbmV4cG9ydCBjbGFzcyBUT05DbGllbnQgaW1wbGVtZW50cyBUT05Nb2R1bGVDb250ZXh0LCBJVE9OQ2xpZW50IHtcbiAgICBzdGF0aWMgc2V0TGlicmFyeShjbGllbnRQbGF0Zm9ybTogVE9OQ2xpZW50UGxhdGZvcm0pIHtcbiAgICAgICAgVE9OQ2xpZW50LmNsaWVudFBsYXRmb3JtID0gY2xpZW50UGxhdGZvcm07XG4gICAgfVxuXG5cbiAgICAvLyBQdWJsaWNcbiAgICBjb25maWc6IFRPTkNvbmZpZ01vZHVsZTtcbiAgICBjcnlwdG86IFRPTkNyeXB0bztcbiAgICBjb250cmFjdHM6IFRPTkNvbnRyYWN0cztcbiAgICBxdWVyaWVzOiBUT05RdWVyaWVzO1xuICAgIF9xdWVyaWVzOiBUT05RdWVyaWVzTW9kdWxlO1xuXG4gICAgY29uc3RydWN0b3IoKSB7XG4gICAgICAgIHRoaXMubW9kdWxlcyA9IG5ldyBNYXAoKTtcbiAgICAgICAgdGhpcy5jb25maWcgPSB0aGlzLmdldE1vZHVsZShUT05Db25maWdNb2R1bGUpO1xuICAgICAgICB0aGlzLmNyeXB0byA9IHRoaXMuZ2V0TW9kdWxlKFRPTkNyeXB0b01vZHVsZSk7XG4gICAgICAgIHRoaXMuY29udHJhY3RzID0gdGhpcy5nZXRNb2R1bGUoVE9OQ29udHJhY3RzTW9kdWxlKTtcbiAgICAgICAgdGhpcy5fcXVlcmllcyA9IHRoaXMuZ2V0TW9kdWxlKFRPTlF1ZXJpZXNNb2R1bGUpO1xuICAgICAgICB0aGlzLnF1ZXJpZXMgPSB0aGlzLl9xdWVyaWVzO1xuICAgIH1cblxuICAgIC8qKlxuICAgICAqIENvbnZlbmllbnQgd2F5IHRvIGNyZWF0ZSBjb25maWd1cmVkIGluc3RhbmNlIG9mIHRoZSBUT04gQ2xpZW50XG4gICAgICogQHBhcmFtIHtUT05Db25maWdEYXRhfSBjb25maWdcbiAgICAgKiBAcmV0dXJuIHtQcm9taXNlPFRPTkNsaWVudD59XG4gICAgICovXG4gICAgc3RhdGljIGFzeW5jIGNyZWF0ZShjb25maWc6IFRPTkNvbmZpZ0RhdGEpOiBQcm9taXNlPFRPTkNsaWVudD4ge1xuICAgICAgICBjb25zdCBjbGllbnQgPSBuZXcgVE9OQ2xpZW50KCk7XG4gICAgICAgIGNsaWVudC5jb25maWcuc2V0RGF0YShjb25maWcpO1xuICAgICAgICBhd2FpdCBjbGllbnQuc2V0dXAoKTtcbiAgICAgICAgcmV0dXJuIGNsaWVudDtcbiAgICB9XG5cbiAgICAvKipcbiAgICAgKiBTZXQgdXAgdGhlIGNsaWVudCBpbnN0YW5jZVxuICAgICAqIEByZXR1cm4ge1Byb21pc2U8dm9pZD59XG4gICAgICovXG4gICAgYXN5bmMgc2V0dXAoKTogUHJvbWlzZTx2b2lkPiB7XG4gICAgICAgIGlmICghVE9OQ2xpZW50LmNvcmUpIHtcbiAgICAgICAgICAgIGlmICghVE9OQ2xpZW50LmNsaWVudFBsYXRmb3JtKSB7XG4gICAgICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgVE9OQ2xpZW50LmNvcmUgPSBhd2FpdCBUT05DbGllbnQuY2xpZW50UGxhdGZvcm0uY3JlYXRlTGlicmFyeSgpO1xuICAgICAgICB9XG4gICAgICAgIGNvbnN0IG1vZHVsZXM6IFRPTk1vZHVsZVtdID0gWy4uLnRoaXMubW9kdWxlcy52YWx1ZXMoKV07XG4gICAgICAgIGZvciAoY29uc3QgbW9kdWxlIG9mIG1vZHVsZXMpIHtcbiAgICAgICAgICAgIGF3YWl0IG1vZHVsZS5zZXR1cCgpO1xuICAgICAgICB9XG4gICAgfVxuXG4gICAgLyoqXG4gICAgICogVGVhciBkb3duIHRoaXMgY2xpZW50IGluc3RhbmNlLlxuICAgICAqIE5vdGUgdGhhdCBhZnRlciB5b3UgaGF2ZSBjYWxsZWQgdGhpcyBtZXRob2QgYWxsIGZ1dHVyZSB1c2Ugb2YgdGhpcyBpbnN0YW5jZSB3aWxsIGZhaWxcbiAgICAgKiBAcmV0dXJuIHtQcm9taXNlPHZvaWQ+fVxuICAgICAqL1xuICAgIGFzeW5jIGNsb3NlKCk6IFByb21pc2U8dm9pZD4ge1xuICAgICAgICBhd2FpdCB0aGlzLnF1ZXJpZXMuY2xvc2UoKTtcbiAgICB9XG5cbiAgICAvLyBUT05Nb2R1bGVDb250ZXh0XG5cbiAgICBnZXRDb3JlKCk6ID9UT05DbGllbnRMaWJyYXJ5IHtcbiAgICAgICAgcmV0dXJuIFRPTkNsaWVudC5jb3JlO1xuICAgIH1cblxuICAgIGdldE1vZHVsZTxUPihNb2R1bGVDbGFzczogdHlwZW9mIFRPTk1vZHVsZSk6IFQge1xuICAgICAgICBjb25zdCBuYW1lID0gTW9kdWxlQ2xhc3MubW9kdWxlTmFtZTtcbiAgICAgICAgY29uc3QgZXhpc3RpbmdNb2R1bGUgPSB0aGlzLm1vZHVsZXMuZ2V0KG5hbWUpO1xuICAgICAgICBpZiAoZXhpc3RpbmdNb2R1bGUpIHtcbiAgICAgICAgICAgIHJldHVybiAoZXhpc3RpbmdNb2R1bGU6IGFueSk7XG4gICAgICAgIH1cbiAgICAgICAgY29uc3QgbW9kdWxlID0gbmV3IE1vZHVsZUNsYXNzKHRoaXMpO1xuICAgICAgICB0aGlzLm1vZHVsZXMuc2V0KG5hbWUsIG1vZHVsZSk7XG4gICAgICAgIHJldHVybiAobW9kdWxlOiBhbnkpO1xuICAgIH1cblxuICAgIHNlcnZlclRpbWVEZWx0YSgpOiBQcm9taXNlPG51bWJlcj4ge1xuICAgICAgICByZXR1cm4gdGhpcy5fcXVlcmllcy5zZXJ2ZXJUaW1lRGVsdGEoKTtcbiAgICB9XG5cbiAgICBzZXJ2ZXJOb3coKTogUHJvbWlzZTxudW1iZXI+IHtcbiAgICAgICAgcmV0dXJuIHRoaXMuX3F1ZXJpZXMuc2VydmVyTm93KCk7XG4gICAgfVxuXG4gICAgYXN5bmMgZ2V0TWFuYWdlbWVudEFjY2Vzc0tleSgpOiBQcm9taXNlPHN0cmluZz4ge1xuICAgICAgICBjb25zdCByZXN1bHQgPSBhd2FpdCB0aGlzLl9xdWVyaWVzLnF1ZXJ5KCdxdWVyeXtnZXRNYW5hZ2VtZW50QWNjZXNzS2V5fScpO1xuICAgICAgICByZXR1cm4gcmVzdWx0LmRhdGEuZ2V0TWFuYWdlbWVudEFjY2Vzc0tleTtcbiAgICB9XG5cblxuICAgIGFzeW5jIF9yZXNvbHZlU2lnbmVkTWFuYWdlbWVudEFjY2Vzc0tleShwYXJhbXM6IFRPTkFjY2Vzc0tleXNNYW5hZ2VtZW50UGFyYW1zKTogUHJvbWlzZTxzdHJpbmc+IHtcbiAgICAgICAgaWYgKHBhcmFtcy5zaWduZWRNYW5hZ2VtZW50QWNjZXNzS2V5KSB7XG4gICAgICAgICAgICByZXR1cm4gcGFyYW1zLnNpZ25lZE1hbmFnZW1lbnRBY2Nlc3NLZXk7XG4gICAgICAgIH1cbiAgICAgICAgY29uc3Qgc2lnbktleXMgPSBwYXJhbXMuYWNjb3VudEtleXM7XG4gICAgICAgIGlmIChzaWduS2V5cykge1xuICAgICAgICAgICAgY29uc3QgbWFuYWdlbWVudEFjY2Vzc0tleSA9IGF3YWl0IHRoaXMuZ2V0TWFuYWdlbWVudEFjY2Vzc0tleSgpO1xuICAgICAgICAgICAgcmV0dXJuIHRoaXMuY3J5cHRvLm5hY2xTaWduKFxuICAgICAgICAgICAgICAgIHsgdGV4dDogbWFuYWdlbWVudEFjY2Vzc0tleSB9LFxuICAgICAgICAgICAgICAgIGAke3NpZ25LZXlzLnNlY3JldH0ke3NpZ25LZXlzLnB1YmxpY31gLFxuICAgICAgICAgICAgICAgICdIZXgnKTtcbiAgICAgICAgfVxuICAgICAgICByZXR1cm4gJyc7XG4gICAgfVxuXG4gICAgYXN5bmMgcmVnaXN0ZXJBY2Nlc3NLZXlzKFxuICAgICAgICBwYXJhbXM6IFRPTlJlZ2lzdGVyQWNjZXNzS2V5c1BhcmFtc1xuICAgICk6IFByb21pc2U8bnVtYmVyPiB7XG4gICAgICAgIGNvbnN0IHNpZ25lZE1hbmFnZW1lbnRBY2Nlc3NLZXkgPSBhd2FpdCB0aGlzLl9yZXNvbHZlU2lnbmVkTWFuYWdlbWVudEFjY2Vzc0tleShwYXJhbXMpO1xuICAgICAgICBjb25zdCByZXN1bHQgPSBhd2FpdCB0aGlzLl9xdWVyaWVzLm11dGF0aW9uKFxuICAgICAgICAgICAgYG11dGF0aW9uIHJlZ2lzdGVyQWNjZXNzS2V5cygkYWNjb3VudDogU3RyaW5nLCAka2V5czogW0FjY2Vzc0tleV0sICRzaWduZWRNYW5hZ2VtZW50QWNjZXNzS2V5OiBTdHJpbmcpIHtcbiAgICAgICAgICAgICAgICAgICAgcmVnaXN0ZXJBY2Nlc3NLZXlzKGFjY291bnQ6ICRhY2NvdW50LCBrZXlzOiAka2V5cywgc2lnbmVkTWFuYWdlbWVudEFjY2Vzc0tleTogJHNpZ25lZE1hbmFnZW1lbnRBY2Nlc3NLZXkpXG4gICAgICAgICAgICAgICAgfWAsIHtcbiAgICAgICAgICAgICAgICBhY2NvdW50OiBwYXJhbXMuYWNjb3VudCxcbiAgICAgICAgICAgICAgICBrZXlzOiBwYXJhbXMua2V5cyxcbiAgICAgICAgICAgICAgICBzaWduZWRNYW5hZ2VtZW50QWNjZXNzS2V5LFxuICAgICAgICAgICAgfSk7XG4gICAgICAgIHJldHVybiByZXN1bHQuZGF0YS5yZWdpc3RlckFjY2Vzc0tleXM7XG4gICAgfVxuXG4gICAgYXN5bmMgcmV2b2tlQWNjZXNzS2V5cyhcbiAgICAgICAgcGFyYW1zOiBUT05SZXZva2VBY2Nlc3NLZXlzUGFyYW1zXG4gICAgKTogUHJvbWlzZTxudW1iZXI+IHtcbiAgICAgICAgY29uc3Qgc2lnbmVkTWFuYWdlbWVudEFjY2Vzc0tleSA9IGF3YWl0IHRoaXMuX3Jlc29sdmVTaWduZWRNYW5hZ2VtZW50QWNjZXNzS2V5KHBhcmFtcyk7XG4gICAgICAgIGNvbnN0IHJlc3VsdCA9IGF3YWl0IHRoaXMuX3F1ZXJpZXMubXV0YXRpb24oXG4gICAgICAgICAgICBgbXV0YXRpb24gcmV2b2tlQWNjZXNzS2V5cygkYWNjb3VudDogU3RyaW5nLCAka2V5czogW1N0cmluZ10sICRzaWduZWRNYW5hZ2VtZW50QWNjZXNzS2V5OiBTdHJpbmcpIHtcbiAgICAgICAgICAgICAgICAgICAgcmV2b2tlQWNjZXNzS2V5cyhhY2NvdW50OiAkYWNjb3VudCwga2V5czogJGtleXMsIHNpZ25lZE1hbmFnZW1lbnRBY2Nlc3NLZXk6ICRzaWduZWRNYW5hZ2VtZW50QWNjZXNzS2V5KVxuICAgICAgICAgICAgICAgIH1gLCB7XG4gICAgICAgICAgICAgICAgYWNjb3VudDogcGFyYW1zLmFjY291bnQsXG4gICAgICAgICAgICAgICAga2V5czogcGFyYW1zLmtleXMsXG4gICAgICAgICAgICAgICAgc2lnbmVkTWFuYWdlbWVudEFjY2Vzc0tleSxcbiAgICAgICAgICAgIH0pO1xuICAgICAgICByZXR1cm4gcmVzdWx0LmRhdGEucmV2b2tlQWNjZXNzS2V5cztcbiAgICB9XG5cbiAgICBhc3luYyB0cmFjZTxUPihcbiAgICAgICAgbmFtZTogc3RyaW5nLFxuICAgICAgICBmOiAoc3BhbjogU3BhbikgPT4gUHJvbWlzZTxUPixcbiAgICAgICAgcGFyZW50U3Bhbj86IChTcGFuIHwgU3BhbkNvbnRleHQpXG4gICAgKTogUHJvbWlzZTxUPiB7XG4gICAgICAgIGNvbnN0IHNwYW4gPSB0aGlzLmNvbmZpZy50cmFjZXIuc3RhcnRTcGFuKG5hbWUsIHsgY2hpbGRPZjogcGFyZW50U3BhbiB9KTtcbiAgICAgICAgdHJ5IHtcbiAgICAgICAgICAgIHNwYW4uc2V0VGFnKFRhZ3MuU1BBTl9LSU5ELCAnY2xpZW50Jyk7XG4gICAgICAgICAgICBjb25zdCByZXN1bHQgPSBhd2FpdCBmKHNwYW4pO1xuICAgICAgICAgICAgaWYgKHJlc3VsdCAhPT0gdW5kZWZpbmVkKSB7XG4gICAgICAgICAgICAgICAgc3Bhbi5zZXRUYWcoJ3Jlc3VsdCcsIHJlc3VsdCk7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBzcGFuLmZpbmlzaCgpO1xuICAgICAgICAgICAgcmV0dXJuIHJlc3VsdDtcbiAgICAgICAgfSBjYXRjaCAoZXJyb3IpIHtcbiAgICAgICAgICAgIHNwYW4ubG9nKHsgZXZlbnQ6ICdmYWlsZWQnLCBwYXlsb2FkOiBlcnJvciB9KTtcbiAgICAgICAgICAgIHNwYW4uZmluaXNoKCk7XG4gICAgICAgICAgICB0aHJvdyBlcnJvcjtcbiAgICAgICAgfVxuICAgIH1cblxuICAgIC8vIEludGVybmFsc1xuXG4gICAgc3RhdGljIGNsaWVudFBsYXRmb3JtOiA/VE9OQ2xpZW50UGxhdGZvcm0gPSBudWxsO1xuICAgIHN0YXRpYyBjb3JlOiA/VE9OQ2xpZW50TGlicmFyeSA9IG51bGw7XG5cbiAgICBtb2R1bGVzOiBNYXA8c3RyaW5nLCBUT05Nb2R1bGU+O1xufVxuXG5leHBvcnQgY2xhc3MgVE9OQ2xpZW50RXJyb3Ige1xuICAgIHN0YXRpYyBzb3VyY2UgPSB7XG4gICAgICAgIENMSUVOVDogJ2NsaWVudCcsXG4gICAgICAgIE5PREU6ICdub2RlJ1xuICAgIH07XG4gICAgc3RhdGljIGNvZGUgPSB7XG4gICAgICAgIENMSUVOVF9ET0VTX05PVF9DT05GSUdVUkVEOiAxMDAwLFxuICAgICAgICBTRU5EX05PREVfUkVRVUVTVF9GQUlMRUQ6IDEwMDEsXG4gICAgICAgIFJVTl9MT0NBTF9BQ0NPVU5UX0RPRVNfTk9UX0VYSVNUUzogMTAwMixcbiAgICAgICAgV0FJVF9GT1JfVElNRU9VVDogMTAwMyxcbiAgICAgICAgSU5URVJOQUxfRVJST1I6IDEwMDQsXG4gICAgICAgIFFVRVJZX0ZBSUxFRDogMTAwNSxcbiAgICAgICAgTUVTU0FHRV9FWFBJUkVEOiAxMDA2LFxuICAgICAgICBTRVJWRVJfRE9FU05UX1NVUFBPUlRfQUdHUkVHQVRJT05TOiAxMDA3LFxuICAgICAgICBJTlZBTElEX0NPTlM6IDEwMDgsXG4gICAgICAgIEFERFJFU1NfUkVRVUlSRURfRk9SX1JVTl9MT0NBTDogMTAwOSxcbiAgICAgICAgQ0xPQ0tfT1VUX09GX1NZTkM6IDEwMTMsXG4gICAgICAgIEFDQ09VTlRfTUlTU0lORzogMTAxNCxcbiAgICB9O1xuXG4gICAgbWVzc2FnZTogc3RyaW5nO1xuICAgIHNvdXJjZTogc3RyaW5nO1xuICAgIGNvZGU6IG51bWJlcjtcbiAgICBkYXRhOiBhbnk7XG5cbiAgICBjb25zdHJ1Y3RvcihtZXNzYWdlOiBzdHJpbmcsIGNvZGU6IG51bWJlciwgc291cmNlOiBzdHJpbmcsIGRhdGE/OiBhbnkpIHtcbiAgICAgICAgdGhpcy5tZXNzYWdlID0gbWVzc2FnZTtcbiAgICAgICAgdGhpcy5jb2RlID0gY29kZTtcbiAgICAgICAgdGhpcy5zb3VyY2UgPSBzb3VyY2U7XG4gICAgICAgIHRoaXMuZGF0YSA9IGRhdGE7XG4gICAgfVxuXG4gICAgc3RhdGljIGlzQ2xpZW50RXJyb3IoZXJyb3I6IGFueSwgY29kZTogbnVtYmVyKTogYm9vbGVhbiB7XG4gICAgICAgIHJldHVybiAoZXJyb3Iuc291cmNlID09PSBUT05DbGllbnRFcnJvci5zb3VyY2UuQ0xJRU5UKVxuICAgICAgICAgICAgJiYgKGVycm9yLmNvZGUgPT09IGNvZGUpO1xuICAgIH1cblxuICAgIHN0YXRpYyBpbnRlcm5hbEVycm9yKG1lc3NhZ2U6IHN0cmluZyk6IFRPTkNsaWVudEVycm9yIHtcbiAgICAgICAgcmV0dXJuIG5ldyBUT05DbGllbnRFcnJvcihcbiAgICAgICAgICAgIGBJbnRlcm5hbCBlcnJvcjogJHttZXNzYWdlfWAsXG4gICAgICAgICAgICBUT05DbGllbnRFcnJvci5jb2RlLklOVEVSTkFMX0VSUk9SLFxuICAgICAgICAgICAgVE9OQ2xpZW50RXJyb3Iuc291cmNlLkNMSUVOVCxcbiAgICAgICAgKTtcbiAgICB9XG5cbiAgICBzdGF0aWMgaW52YWxpZENvbnMoKTogVE9OQ2xpZW50RXJyb3Ige1xuICAgICAgICByZXR1cm4gbmV3IFRPTkNsaWVudEVycm9yKFxuICAgICAgICAgICAgJ0ludmFsaWQgQ09OUyBzdHJ1Y3R1cmUuIEVhY2ggQ09OUyBpdGVtIG11c3QgY29udGFpbnMgb2YgdHdvIGVsZW1lbnRzLicsXG4gICAgICAgICAgICBUT05DbGllbnRFcnJvci5jb2RlLklOVkFMSURfQ09OUyxcbiAgICAgICAgICAgIFRPTkNsaWVudEVycm9yLnNvdXJjZS5DTElFTlQsXG4gICAgICAgICk7XG4gICAgfVxuXG4gICAgc3RhdGljIGNsaWVudERvZXNOb3RDb25maWd1cmVkKCk6IFRPTkNsaWVudEVycm9yIHtcbiAgICAgICAgcmV0dXJuIG5ldyBUT05DbGllbnRFcnJvcihcbiAgICAgICAgICAgICdUT04gQ2xpZW50IGRvZXMgbm90IGNvbmZpZ3VyZWQnLFxuICAgICAgICAgICAgVE9OQ2xpZW50RXJyb3IuY29kZS5DTElFTlRfRE9FU19OT1RfQ09ORklHVVJFRCxcbiAgICAgICAgICAgIFRPTkNsaWVudEVycm9yLnNvdXJjZS5DTElFTlQsXG4gICAgICAgICk7XG4gICAgfVxuXG4gICAgc3RhdGljIHNlbmROb2RlUmVxdWVzdEZhaWxlZChyZXNwb25zZVRleHQ6IHN0cmluZyk6IFRPTkNsaWVudEVycm9yIHtcbiAgICAgICAgcmV0dXJuIG5ldyBUT05DbGllbnRFcnJvcihcbiAgICAgICAgICAgIGBTZW5kIG5vZGUgcmVxdWVzdCBmYWlsZWQ6ICR7cmVzcG9uc2VUZXh0fWAsXG4gICAgICAgICAgICBUT05DbGllbnRFcnJvci5jb2RlLlNFTkRfTk9ERV9SRVFVRVNUX0ZBSUxFRCxcbiAgICAgICAgICAgIFRPTkNsaWVudEVycm9yLnNvdXJjZS5DTElFTlQsXG4gICAgICAgICk7XG4gICAgfVxuXG4gICAgc3RhdGljIHJ1bkxvY2FsQWNjb3VudERvZXNOb3RFeGlzdHMoZnVuY3Rpb25OYW1lOiBzdHJpbmcsIGFkZHJlc3M6IHN0cmluZyk6IFRPTkNsaWVudEVycm9yIHtcbiAgICAgICAgcmV0dXJuIG5ldyBUT05DbGllbnRFcnJvcihcbiAgICAgICAgICAgIGBbJHtmdW5jdGlvbk5hbWV9XSBydW4gbG9jYWwgZmFpbGVkOiBhY2NvdW50IFske2FkZHJlc3N9XSBkb2VzIG5vdCBleGlzdHNgLFxuICAgICAgICAgICAgVE9OQ2xpZW50RXJyb3IuY29kZS5SVU5fTE9DQUxfQUNDT1VOVF9ET0VTX05PVF9FWElTVFMsXG4gICAgICAgICAgICBUT05DbGllbnRFcnJvci5zb3VyY2UuQ0xJRU5ULFxuICAgICAgICApO1xuICAgIH1cblxuICAgIHN0YXRpYyB3YWl0Rm9yVGltZW91dCgpIHtcbiAgICAgICAgcmV0dXJuIG5ldyBUT05DbGllbnRFcnJvcihcbiAgICAgICAgICAgICdXYWl0IGZvciBvcGVyYXRpb24gcmVqZWN0ZWQgb24gdGltZW91dCcsXG4gICAgICAgICAgICBUT05DbGllbnRFcnJvci5jb2RlLldBSVRfRk9SX1RJTUVPVVQsXG4gICAgICAgICAgICBUT05DbGllbnRFcnJvci5zb3VyY2UuQ0xJRU5ULFxuICAgICAgICApO1xuICAgIH1cblxuICAgIHN0YXRpYyBxdWVyeUZhaWxlZChlcnJvcnM6IEVycm9yW10pIHtcbiAgICAgICAgcmV0dXJuIG5ldyBUT05DbGllbnRFcnJvcihcbiAgICAgICAgICAgIGBRdWVyeSBmYWlsZWQ6ICR7ZXJyb3JzLm1hcCh4ID0+IHgubWVzc2FnZSB8fCB4LnRvU3RyaW5nKCkpLmpvaW4oJ1xcbicpfWAsXG4gICAgICAgICAgICBUT05DbGllbnRFcnJvci5jb2RlLlFVRVJZX0ZBSUxFRCxcbiAgICAgICAgICAgIFRPTkNsaWVudEVycm9yLnNvdXJjZS5DTElFTlQsXG4gICAgICAgICk7XG4gICAgfVxuXG4gICAgc3RhdGljIG1lc3NhZ2VFeHBpcmVkKCkge1xuICAgICAgICByZXR1cm4gbmV3IFRPTkNsaWVudEVycm9yKFxuICAgICAgICAgICAgJ01lc3NhZ2UgZXhwaXJlZCcsXG4gICAgICAgICAgICBUT05DbGllbnRFcnJvci5jb2RlLk1FU1NBR0VfRVhQSVJFRCxcbiAgICAgICAgICAgIFRPTkNsaWVudEVycm9yLnNvdXJjZS5DTElFTlQsXG4gICAgICAgICk7XG4gICAgfVxuXG4gICAgc3RhdGljIHNlcnZlckRvZXNudFN1cHBvcnRBZ2dyZWdhdGlvbnMoKSB7XG4gICAgICAgIHJldHVybiBuZXcgVE9OQ2xpZW50RXJyb3IoXG4gICAgICAgICAgICAnU2VydmVyIGRvZXNuXFwndCBzdXBwb3J0IGFnZ3JlZ2F0aW9ucycsXG4gICAgICAgICAgICBUT05DbGllbnRFcnJvci5jb2RlLlNFUlZFUl9ET0VTTlRfU1VQUE9SVF9BR0dSRUdBVElPTlMsXG4gICAgICAgICAgICBUT05DbGllbnRFcnJvci5zb3VyY2UuQ0xJRU5ULFxuICAgICAgICApO1xuICAgIH1cblxuICAgIHN0YXRpYyBhZGRyZXNzUmVxdWlyZWRGb3JSdW5Mb2NhbCgpIHtcbiAgICAgICAgcmV0dXJuIG5ldyBUT05DbGllbnRFcnJvcihcbiAgICAgICAgICAgIGBBZGRyZXNzIHJlcXVpcmVkIGZvciBydW4gbG9jYWwuIFlvdSBoYXZlbid0IHNwZWNpZmllZCBjb250cmFjdCBjb2RlIG9yIGRhdGEgc28gYWRkcmVzcyBpcyByZXF1aXJlZCB0byBsb2FkIG1pc3NpbmcgcGFydHMgZnJvbSBuZXR3b3JrLmAsXG4gICAgICAgICAgICBUT05DbGllbnRFcnJvci5jb2RlLkFERFJFU1NfUkVRVUlSRURfRk9SX1JVTl9MT0NBTCxcbiAgICAgICAgICAgIFRPTkNsaWVudEVycm9yLnNvdXJjZS5DTElFTlQsXG4gICAgICAgICk7XG4gICAgfVxuXG4gICAgc3RhdGljIGNsb2NrT3V0T2ZTeW5jKCkge1xuICAgICAgICByZXR1cm4gbmV3IFRPTkNsaWVudEVycm9yKFxuICAgICAgICAgICAgJ1lvdSBsb2NhbCBjbG9jayBpcyBvdXQgb2Ygc3luYyB3aXRoIHRoZSBzZXJ2ZXIgdGltZS4gJyArXG4gICAgICAgICAgICAnSXQgaXMgYSBjcml0aWNhbCBjb25kaXRpb24gZm9yIHNlbmRpbmcgbWVzc2FnZXMgdG8gdGhlIGJsb2NrY2hhaW4uICcgK1xuICAgICAgICAgICAgJ1BsZWFzZSBzeW5jIHlvdSBjbG9jayB3aXRoIHRoZSBpbnRlcm5ldCB0aW1lLicsXG4gICAgICAgICAgICBUT05DbGllbnRFcnJvci5jb2RlLkNMT0NLX09VVF9PRl9TWU5DLFxuICAgICAgICAgICAgVE9OQ2xpZW50RXJyb3Iuc291cmNlLkNMSUVOVCxcbiAgICAgICAgKTtcbiAgICB9XG5cbiAgICBzdGF0aWMgaXNNZXNzYWdlRXhwaXJlZChlcnJvcjogYW55KTogYm9vbGVhbiB7XG4gICAgICAgIHJldHVybiBUT05DbGllbnRFcnJvci5pc0NsaWVudEVycm9yKGVycm9yLCBUT05DbGllbnRFcnJvci5jb2RlLk1FU1NBR0VfRVhQSVJFRCk7XG4gICAgfVxuXG59XG5cbiJdfQ==