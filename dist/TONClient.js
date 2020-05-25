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
    key: "isNodeError",
    value: function isNodeError(error, code) {
      return error.source === TONClientError.source.NODE && error.code === code;
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
    key: "accountMissing",
    value: function accountMissing(address) {
      return new TONClientError("Account with address [".concat(address, "] doesn't exists. ") + 'You have to prepaid this account to have a positive balance on them and then deploy a contract code for this account.' + 'See SDK documentation for detailed instructions.', TONClientError.code.ACCOUNT_MISSING, TONClientError.source.CLIENT);
    }
  }, {
    key: "accountCodeMissing",
    value: function accountCodeMissing(address, balance) {
      return new TONClientError("Account with address [".concat(address, "] exists but haven't a contract code yet. ") + 'You have to ensure that an account has an enough balance for deploying a contract code and then deploy a contract code for this account. ' + "Current account balance is [".concat(balance, "]. ") + 'See SDK documentation for detailed instructions.', TONClientError.code.ACCOUNT_CODE_MISSING, TONClientError.source.CLIENT);
    }
  }, {
    key: "accountBalanceTooLow",
    value: function accountBalanceTooLow(address, balance) {
      return new TONClientError("Account with address [".concat(address, "] has too low balance [").concat(balance, "]. ") + 'You have to send some value to account balance from other contract (e.g. Wallet contract). ' + 'See SDK documentation for detailed instructions.', TONClientError.code.ACCOUNT_BALANCE_TOO_LOW, TONClientError.source.CLIENT);
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
  ACCOUNT_MISSING: 1014,
  ACCOUNT_CODE_MISSING: 1015,
  ACCOUNT_BALANCE_TOO_LOW: 1016,
  ACCOUNT_FROZEN_OR_DELETED: 1017
});
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uL3NyYy9UT05DbGllbnQuanMiXSwibmFtZXMiOlsiVE9OQ2xpZW50IiwiY2xpZW50UGxhdGZvcm0iLCJtb2R1bGVzIiwiTWFwIiwiY29uZmlnIiwiZ2V0TW9kdWxlIiwiVE9OQ29uZmlnTW9kdWxlIiwiY3J5cHRvIiwiVE9OQ3J5cHRvTW9kdWxlIiwiY29udHJhY3RzIiwiVE9OQ29udHJhY3RzTW9kdWxlIiwiX3F1ZXJpZXMiLCJUT05RdWVyaWVzTW9kdWxlIiwicXVlcmllcyIsImNvcmUiLCJjcmVhdGVMaWJyYXJ5IiwidmFsdWVzIiwibW9kdWxlIiwic2V0dXAiLCJjbG9zZSIsIk1vZHVsZUNsYXNzIiwibmFtZSIsIm1vZHVsZU5hbWUiLCJleGlzdGluZ01vZHVsZSIsImdldCIsInNldCIsInNlcnZlclRpbWVEZWx0YSIsInNlcnZlck5vdyIsInF1ZXJ5IiwicmVzdWx0IiwiZGF0YSIsImdldE1hbmFnZW1lbnRBY2Nlc3NLZXkiLCJwYXJhbXMiLCJzaWduZWRNYW5hZ2VtZW50QWNjZXNzS2V5Iiwic2lnbktleXMiLCJhY2NvdW50S2V5cyIsIm1hbmFnZW1lbnRBY2Nlc3NLZXkiLCJuYWNsU2lnbiIsInRleHQiLCJzZWNyZXQiLCJfcmVzb2x2ZVNpZ25lZE1hbmFnZW1lbnRBY2Nlc3NLZXkiLCJtdXRhdGlvbiIsImFjY291bnQiLCJrZXlzIiwicmVnaXN0ZXJBY2Nlc3NLZXlzIiwicmV2b2tlQWNjZXNzS2V5cyIsImYiLCJwYXJlbnRTcGFuIiwic3BhbiIsInRyYWNlciIsInN0YXJ0U3BhbiIsImNoaWxkT2YiLCJzZXRUYWciLCJUYWdzIiwiU1BBTl9LSU5EIiwidW5kZWZpbmVkIiwiZmluaXNoIiwibG9nIiwiZXZlbnQiLCJwYXlsb2FkIiwiY2xpZW50Iiwic2V0RGF0YSIsIlRPTkNsaWVudEVycm9yIiwibWVzc2FnZSIsImNvZGUiLCJzb3VyY2UiLCJlcnJvciIsIkNMSUVOVCIsIk5PREUiLCJJTlRFUk5BTF9FUlJPUiIsIklOVkFMSURfQ09OUyIsIkNMSUVOVF9ET0VTX05PVF9DT05GSUdVUkVEIiwicmVzcG9uc2VUZXh0IiwiU0VORF9OT0RFX1JFUVVFU1RfRkFJTEVEIiwiZnVuY3Rpb25OYW1lIiwiYWRkcmVzcyIsIlJVTl9MT0NBTF9BQ0NPVU5UX0RPRVNfTk9UX0VYSVNUUyIsIldBSVRfRk9SX1RJTUVPVVQiLCJlcnJvcnMiLCJtYXAiLCJ4IiwidG9TdHJpbmciLCJqb2luIiwiUVVFUllfRkFJTEVEIiwiTUVTU0FHRV9FWFBJUkVEIiwiU0VSVkVSX0RPRVNOVF9TVVBQT1JUX0FHR1JFR0FUSU9OUyIsIkFERFJFU1NfUkVRVUlSRURfRk9SX1JVTl9MT0NBTCIsIkNMT0NLX09VVF9PRl9TWU5DIiwiQUNDT1VOVF9NSVNTSU5HIiwiYmFsYW5jZSIsIkFDQ09VTlRfQ09ERV9NSVNTSU5HIiwiQUNDT1VOVF9CQUxBTkNFX1RPT19MT1ciLCJpc0NsaWVudEVycm9yIiwiQUNDT1VOVF9GUk9aRU5fT1JfREVMRVRFRCJdLCJtYXBwaW5ncyI6Ijs7Ozs7OztBQUtBOztBQVlBOztBQUNBOztBQUNBOztBQUVBOztBQUdBOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFxQkE7Ozs7O0lBS2FBLFM7OzsrQkFDU0MsYyxFQUFtQztBQUNqREQsTUFBQUEsU0FBUyxDQUFDQyxjQUFWLEdBQTJCQSxjQUEzQjtBQUNILEssQ0FHRDs7OztBQU9BLHVCQUFjO0FBQUE7O0FBQUE7O0FBQUE7O0FBQUE7O0FBQUE7O0FBQUE7O0FBQUE7O0FBQ1YsU0FBS0MsT0FBTCxHQUFlLElBQUlDLEdBQUosRUFBZjtBQUNBLFNBQUtDLE1BQUwsR0FBYyxLQUFLQyxTQUFMLENBQWVDLDJCQUFmLENBQWQ7QUFDQSxTQUFLQyxNQUFMLEdBQWMsS0FBS0YsU0FBTCxDQUFlRywyQkFBZixDQUFkO0FBQ0EsU0FBS0MsU0FBTCxHQUFpQixLQUFLSixTQUFMLENBQWVLLDhCQUFmLENBQWpCO0FBQ0EsU0FBS0MsUUFBTCxHQUFnQixLQUFLTixTQUFMLENBQWVPLDRCQUFmLENBQWhCO0FB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QUFBQSwwQkFBMEIsRUFBRSxJQURsQjtBQUVWRSxFQUFBQSx3QkFBd0IsRUFBRSxJQUZoQjtBQUdWRyxFQUFBQSxpQ0FBaUMsRUFBRSxJQUh6QjtBQUlWQyxFQUFBQSxnQkFBZ0IsRUFBRSxJQUpSO0FBS1ZSLEVBQUFBLGNBQWMsRUFBRSxJQUxOO0FBTVZjLEVBQUFBLFlBQVksRUFBRSxJQU5KO0FBT1ZDLEVBQUFBLGVBQWUsRUFBRSxJQVBQO0FBUVZDLEVBQUFBLGtDQUFrQyxFQUFFLElBUjFCO0FBU1ZmLEVBQUFBLFlBQVksRUFBRSxJQVRKO0FBVVZnQixFQUFBQSw4QkFBOEIsRUFBRSxJQVZ0QjtBQVdWQyxFQUFBQSxpQkFBaUIsRUFBRSxJQVhUO0FBWVZDLEVBQUFBLGVBQWUsRUFBRSxJQVpQO0FBYVZFLEVBQUFBLG9CQUFvQixFQUFFLElBYlo7QUFjVkMsRUFBQUEsdUJBQXVCLEVBQUUsSUFkZjtBQWVWRSxFQUFBQSx5QkFBeUIsRUFBRTtBQWZqQixDIiwic291cmNlc0NvbnRlbnQiOlsiLypcbiAqIENvcHlyaWdodCAyMDE4LTIwMjAgVE9OIERFViBTT0xVVElPTlMgTFRELlxuICovXG4vLyBAZmxvd1xuXG5pbXBvcnQgeyBUYWdzLCBTcGFuLCBTcGFuQ29udGV4dCB9IGZyb20gXCJvcGVudHJhY2luZ1wiO1xuaW1wb3J0IHR5cGUge1xuICAgIElUT05DbGllbnQsXG4gICAgVE9OQWNjZXNzS2V5c01hbmFnZW1lbnRQYXJhbXMsXG4gICAgVE9OQ29uZmlnRGF0YSxcbiAgICBUT05Db250cmFjdHMsXG4gICAgVE9OQ3J5cHRvLFxuICAgIFRPTlF1ZXJpZXMsXG4gICAgVE9OUmVnaXN0ZXJBY2Nlc3NLZXlzUGFyYW1zLFxuICAgIFRPTlJldm9rZUFjY2Vzc0tleXNQYXJhbXMsXG59IGZyb20gXCIuLi90eXBlc1wiO1xuXG5pbXBvcnQgVE9OQ29uZmlnTW9kdWxlIGZyb20gJy4vbW9kdWxlcy9UT05Db25maWdNb2R1bGUnO1xuaW1wb3J0IFRPTkNvbnRyYWN0c01vZHVsZSBmcm9tICcuL21vZHVsZXMvVE9OQ29udHJhY3RzTW9kdWxlJztcbmltcG9ydCBUT05DcnlwdG9Nb2R1bGUgZnJvbSAnLi9tb2R1bGVzL1RPTkNyeXB0b01vZHVsZSc7XG4vKiBlc2xpbnQtZGlzYWJsZSBjbGFzcy1tZXRob2RzLXVzZS10aGlzLCBuby11c2UtYmVmb3JlLWRlZmluZSAqL1xuaW1wb3J0IFRPTlF1ZXJpZXNNb2R1bGUgZnJvbSBcIi4vbW9kdWxlcy9UT05RdWVyaWVzTW9kdWxlXCI7XG5cbmltcG9ydCB0eXBlIHsgVE9OQ2xpZW50TGlicmFyeSwgVE9OTW9kdWxlQ29udGV4dCB9IGZyb20gJy4vVE9OTW9kdWxlJztcbmltcG9ydCB7IFRPTk1vZHVsZSB9IGZyb20gJy4vVE9OTW9kdWxlJztcblxuLyoqXG4gKiBKYXZhU2NyaXB0IHBsYXRmb3JtIHNwZWNpZmljIGNvbmZpZ3VyYXRpb25cbiAqL1xudHlwZSBUT05DbGllbnRQbGF0Zm9ybSA9IHtcbiAgICAvKipcbiAgICAgKiBQbGF0Zm9ybSBzcGVjaWZpYyBgZmV0Y2hgIGZ1bmN0aW9uXG4gICAgICovXG4gICAgZmV0Y2g6IGFueSxcbiAgICAvKipcbiAgICAgKiBQbGF0Zm9ybSBzcGVjaWZpYyBgV2ViU29ja2V0YCBpbXBsZW1lbnRhdGlvblxuICAgICAqIFRoaXMgaW1wbGVtZW50YXRpb24gbXVzdCBjb25mb3JtcyB0byBXM0MgV2ViU29ja2V0XG4gICAgICovXG4gICAgV2ViU29ja2V0OiBhbnksXG4gICAgLyoqXG4gICAgICogUmVxdWVzdCBjcmVhdGlvbiBvZiB0aGUgY2xpZW50IGNvcmVcbiAgICAgKi9cbiAgICBjcmVhdGVMaWJyYXJ5OiAoKSA9PiBQcm9taXNlPFRPTkNsaWVudExpYnJhcnk+LFxufTtcblxuLyoqXG4gKiBNYWluIG9iamVjdCBwcm92aWRlZCBmdW5jdGlvbmFsaXR5IG9mIHRoZSBUT04gQ2xpZW50IExpYnJhcnlcbiAqIEVhY2ggaW5zdGFuY2Ugb2YgVE9OQ2xpZW50IGhhcyBvd24gc2V0IG9mIFRPTiBDbGllbnQgbW9kdWxlc1xuICogYW5kIGhhcyBvd24gcHJlY29uZmlndXJlZCBjbGllbnQgY29udGV4dFxuICovXG5leHBvcnQgY2xhc3MgVE9OQ2xpZW50IGltcGxlbWVudHMgVE9OTW9kdWxlQ29udGV4dCwgSVRPTkNsaWVudCB7XG4gICAgc3RhdGljIHNldExpYnJhcnkoY2xpZW50UGxhdGZvcm06IFRPTkNsaWVudFBsYXRmb3JtKSB7XG4gICAgICAgIFRPTkNsaWVudC5jbGllbnRQbGF0Zm9ybSA9IGNsaWVudFBsYXRmb3JtO1xuICAgIH1cblxuXG4gICAgLy8gUHVibGljXG4gICAgY29uZmlnOiBUT05Db25maWdNb2R1bGU7XG4gICAgY3J5cHRvOiBUT05DcnlwdG87XG4gICAgY29udHJhY3RzOiBUT05Db250cmFjdHM7XG4gICAgcXVlcmllczogVE9OUXVlcmllcztcbiAgICBfcXVlcmllczogVE9OUXVlcmllc01vZHVsZTtcblxuICAgIGNvbnN0cnVjdG9yKCkge1xuICAgICAgICB0aGlzLm1vZHVsZXMgPSBuZXcgTWFwKCk7XG4gICAgICAgIHRoaXMuY29uZmlnID0gdGhpcy5nZXRNb2R1bGUoVE9OQ29uZmlnTW9kdWxlKTtcbiAgICAgICAgdGhpcy5jcnlwdG8gPSB0aGlzLmdldE1vZHVsZShUT05DcnlwdG9Nb2R1bGUpO1xuICAgICAgICB0aGlzLmNvbnRyYWN0cyA9IHRoaXMuZ2V0TW9kdWxlKFRPTkNvbnRyYWN0c01vZHVsZSk7XG4gICAgICAgIHRoaXMuX3F1ZXJpZXMgPSB0aGlzLmdldE1vZHVsZShUT05RdWVyaWVzTW9kdWxlKTtcbiAgICAgICAgdGhpcy5xdWVyaWVzID0gdGhpcy5fcXVlcmllcztcbiAgICB9XG5cbiAgICAvKipcbiAgICAgKiBDb252ZW5pZW50IHdheSB0byBjcmVhdGUgY29uZmlndXJlZCBpbnN0YW5jZSBvZiB0aGUgVE9OIENsaWVudFxuICAgICAqIEBwYXJhbSB7VE9OQ29uZmlnRGF0YX0gY29uZmlnXG4gICAgICogQHJldHVybiB7UHJvbWlzZTxUT05DbGllbnQ+fVxuICAgICAqL1xuICAgIHN0YXRpYyBhc3luYyBjcmVhdGUoY29uZmlnOiBUT05Db25maWdEYXRhKTogUHJvbWlzZTxUT05DbGllbnQ+IHtcbiAgICAgICAgY29uc3QgY2xpZW50ID0gbmV3IFRPTkNsaWVudCgpO1xuICAgICAgICBjbGllbnQuY29uZmlnLnNldERhdGEoY29uZmlnKTtcbiAgICAgICAgYXdhaXQgY2xpZW50LnNldHVwKCk7XG4gICAgICAgIHJldHVybiBjbGllbnQ7XG4gICAgfVxuXG4gICAgLyoqXG4gICAgICogU2V0IHVwIHRoZSBjbGllbnQgaW5zdGFuY2VcbiAgICAgKiBAcmV0dXJuIHtQcm9taXNlPHZvaWQ+fVxuICAgICAqL1xuICAgIGFzeW5jIHNldHVwKCk6IFByb21pc2U8dm9pZD4ge1xuICAgICAgICBpZiAoIVRPTkNsaWVudC5jb3JlKSB7XG4gICAgICAgICAgICBpZiAoIVRPTkNsaWVudC5jbGllbnRQbGF0Zm9ybSkge1xuICAgICAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIFRPTkNsaWVudC5jb3JlID0gYXdhaXQgVE9OQ2xpZW50LmNsaWVudFBsYXRmb3JtLmNyZWF0ZUxpYnJhcnkoKTtcbiAgICAgICAgfVxuICAgICAgICBjb25zdCBtb2R1bGVzOiBUT05Nb2R1bGVbXSA9IFsuLi50aGlzLm1vZHVsZXMudmFsdWVzKCldO1xuICAgICAgICBmb3IgKGNvbnN0IG1vZHVsZSBvZiBtb2R1bGVzKSB7XG4gICAgICAgICAgICBhd2FpdCBtb2R1bGUuc2V0dXAoKTtcbiAgICAgICAgfVxuICAgIH1cblxuICAgIC8qKlxuICAgICAqIFRlYXIgZG93biB0aGlzIGNsaWVudCBpbnN0YW5jZS5cbiAgICAgKiBOb3RlIHRoYXQgYWZ0ZXIgeW91IGhhdmUgY2FsbGVkIHRoaXMgbWV0aG9kIGFsbCBmdXR1cmUgdXNlIG9mIHRoaXMgaW5zdGFuY2Ugd2lsbCBmYWlsXG4gICAgICogQHJldHVybiB7UHJvbWlzZTx2b2lkPn1cbiAgICAgKi9cbiAgICBhc3luYyBjbG9zZSgpOiBQcm9taXNlPHZvaWQ+IHtcbiAgICAgICAgYXdhaXQgdGhpcy5xdWVyaWVzLmNsb3NlKCk7XG4gICAgfVxuXG4gICAgLy8gVE9OTW9kdWxlQ29udGV4dFxuXG4gICAgZ2V0Q29yZSgpOiA/VE9OQ2xpZW50TGlicmFyeSB7XG4gICAgICAgIHJldHVybiBUT05DbGllbnQuY29yZTtcbiAgICB9XG5cbiAgICBnZXRNb2R1bGU8VD4oTW9kdWxlQ2xhc3M6IHR5cGVvZiBUT05Nb2R1bGUpOiBUIHtcbiAgICAgICAgY29uc3QgbmFtZSA9IE1vZHVsZUNsYXNzLm1vZHVsZU5hbWU7XG4gICAgICAgIGNvbnN0IGV4aXN0aW5nTW9kdWxlID0gdGhpcy5tb2R1bGVzLmdldChuYW1lKTtcbiAgICAgICAgaWYgKGV4aXN0aW5nTW9kdWxlKSB7XG4gICAgICAgICAgICByZXR1cm4gKGV4aXN0aW5nTW9kdWxlOiBhbnkpO1xuICAgICAgICB9XG4gICAgICAgIGNvbnN0IG1vZHVsZSA9IG5ldyBNb2R1bGVDbGFzcyh0aGlzKTtcbiAgICAgICAgdGhpcy5tb2R1bGVzLnNldChuYW1lLCBtb2R1bGUpO1xuICAgICAgICByZXR1cm4gKG1vZHVsZTogYW55KTtcbiAgICB9XG5cbiAgICBzZXJ2ZXJUaW1lRGVsdGEoKTogUHJvbWlzZTxudW1iZXI+IHtcbiAgICAgICAgcmV0dXJuIHRoaXMuX3F1ZXJpZXMuc2VydmVyVGltZURlbHRhKCk7XG4gICAgfVxuXG4gICAgc2VydmVyTm93KCk6IFByb21pc2U8bnVtYmVyPiB7XG4gICAgICAgIHJldHVybiB0aGlzLl9xdWVyaWVzLnNlcnZlck5vdygpO1xuICAgIH1cblxuICAgIGFzeW5jIGdldE1hbmFnZW1lbnRBY2Nlc3NLZXkoKTogUHJvbWlzZTxzdHJpbmc+IHtcbiAgICAgICAgY29uc3QgcmVzdWx0ID0gYXdhaXQgdGhpcy5fcXVlcmllcy5xdWVyeSgncXVlcnl7Z2V0TWFuYWdlbWVudEFjY2Vzc0tleX0nKTtcbiAgICAgICAgcmV0dXJuIHJlc3VsdC5kYXRhLmdldE1hbmFnZW1lbnRBY2Nlc3NLZXk7XG4gICAgfVxuXG5cbiAgICBhc3luYyBfcmVzb2x2ZVNpZ25lZE1hbmFnZW1lbnRBY2Nlc3NLZXkocGFyYW1zOiBUT05BY2Nlc3NLZXlzTWFuYWdlbWVudFBhcmFtcyk6IFByb21pc2U8c3RyaW5nPiB7XG4gICAgICAgIGlmIChwYXJhbXMuc2lnbmVkTWFuYWdlbWVudEFjY2Vzc0tleSkge1xuICAgICAgICAgICAgcmV0dXJuIHBhcmFtcy5zaWduZWRNYW5hZ2VtZW50QWNjZXNzS2V5O1xuICAgICAgICB9XG4gICAgICAgIGNvbnN0IHNpZ25LZXlzID0gcGFyYW1zLmFjY291bnRLZXlzO1xuICAgICAgICBpZiAoc2lnbktleXMpIHtcbiAgICAgICAgICAgIGNvbnN0IG1hbmFnZW1lbnRBY2Nlc3NLZXkgPSBhd2FpdCB0aGlzLmdldE1hbmFnZW1lbnRBY2Nlc3NLZXkoKTtcbiAgICAgICAgICAgIHJldHVybiB0aGlzLmNyeXB0by5uYWNsU2lnbihcbiAgICAgICAgICAgICAgICB7IHRleHQ6IG1hbmFnZW1lbnRBY2Nlc3NLZXkgfSxcbiAgICAgICAgICAgICAgICBgJHtzaWduS2V5cy5zZWNyZXR9JHtzaWduS2V5cy5wdWJsaWN9YCxcbiAgICAgICAgICAgICAgICAnSGV4Jyk7XG4gICAgICAgIH1cbiAgICAgICAgcmV0dXJuICcnO1xuICAgIH1cblxuICAgIGFzeW5jIHJlZ2lzdGVyQWNjZXNzS2V5cyhcbiAgICAgICAgcGFyYW1zOiBUT05SZWdpc3RlckFjY2Vzc0tleXNQYXJhbXNcbiAgICApOiBQcm9taXNlPG51bWJlcj4ge1xuICAgICAgICBjb25zdCBzaWduZWRNYW5hZ2VtZW50QWNjZXNzS2V5ID0gYXdhaXQgdGhpcy5fcmVzb2x2ZVNpZ25lZE1hbmFnZW1lbnRBY2Nlc3NLZXkocGFyYW1zKTtcbiAgICAgICAgY29uc3QgcmVzdWx0ID0gYXdhaXQgdGhpcy5fcXVlcmllcy5tdXRhdGlvbihcbiAgICAgICAgICAgIGBtdXRhdGlvbiByZWdpc3RlckFjY2Vzc0tleXMoJGFjY291bnQ6IFN0cmluZywgJGtleXM6IFtBY2Nlc3NLZXldLCAkc2lnbmVkTWFuYWdlbWVudEFjY2Vzc0tleTogU3RyaW5nKSB7XG4gICAgICAgICAgICAgICAgICAgIHJlZ2lzdGVyQWNjZXNzS2V5cyhhY2NvdW50OiAkYWNjb3VudCwga2V5czogJGtleXMsIHNpZ25lZE1hbmFnZW1lbnRBY2Nlc3NLZXk6ICRzaWduZWRNYW5hZ2VtZW50QWNjZXNzS2V5KVxuICAgICAgICAgICAgICAgIH1gLCB7XG4gICAgICAgICAgICAgICAgYWNjb3VudDogcGFyYW1zLmFjY291bnQsXG4gICAgICAgICAgICAgICAga2V5czogcGFyYW1zLmtleXMsXG4gICAgICAgICAgICAgICAgc2lnbmVkTWFuYWdlbWVudEFjY2Vzc0tleSxcbiAgICAgICAgICAgIH0pO1xuICAgICAgICByZXR1cm4gcmVzdWx0LmRhdGEucmVnaXN0ZXJBY2Nlc3NLZXlzO1xuICAgIH1cblxuICAgIGFzeW5jIHJldm9rZUFjY2Vzc0tleXMoXG4gICAgICAgIHBhcmFtczogVE9OUmV2b2tlQWNjZXNzS2V5c1BhcmFtc1xuICAgICk6IFByb21pc2U8bnVtYmVyPiB7XG4gICAgICAgIGNvbnN0IHNpZ25lZE1hbmFnZW1lbnRBY2Nlc3NLZXkgPSBhd2FpdCB0aGlzLl9yZXNvbHZlU2lnbmVkTWFuYWdlbWVudEFjY2Vzc0tleShwYXJhbXMpO1xuICAgICAgICBjb25zdCByZXN1bHQgPSBhd2FpdCB0aGlzLl9xdWVyaWVzLm11dGF0aW9uKFxuICAgICAgICAgICAgYG11dGF0aW9uIHJldm9rZUFjY2Vzc0tleXMoJGFjY291bnQ6IFN0cmluZywgJGtleXM6IFtTdHJpbmddLCAkc2lnbmVkTWFuYWdlbWVudEFjY2Vzc0tleTogU3RyaW5nKSB7XG4gICAgICAgICAgICAgICAgICAgIHJldm9rZUFjY2Vzc0tleXMoYWNjb3VudDogJGFjY291bnQsIGtleXM6ICRrZXlzLCBzaWduZWRNYW5hZ2VtZW50QWNjZXNzS2V5OiAkc2lnbmVkTWFuYWdlbWVudEFjY2Vzc0tleSlcbiAgICAgICAgICAgICAgICB9YCwge1xuICAgICAgICAgICAgICAgIGFjY291bnQ6IHBhcmFtcy5hY2NvdW50LFxuICAgICAgICAgICAgICAgIGtleXM6IHBhcmFtcy5rZXlzLFxuICAgICAgICAgICAgICAgIHNpZ25lZE1hbmFnZW1lbnRBY2Nlc3NLZXksXG4gICAgICAgICAgICB9KTtcbiAgICAgICAgcmV0dXJuIHJlc3VsdC5kYXRhLnJldm9rZUFjY2Vzc0tleXM7XG4gICAgfVxuXG4gICAgYXN5bmMgdHJhY2U8VD4oXG4gICAgICAgIG5hbWU6IHN0cmluZyxcbiAgICAgICAgZjogKHNwYW46IFNwYW4pID0+IFByb21pc2U8VD4sXG4gICAgICAgIHBhcmVudFNwYW4/OiAoU3BhbiB8IFNwYW5Db250ZXh0KVxuICAgICk6IFByb21pc2U8VD4ge1xuICAgICAgICBjb25zdCBzcGFuID0gdGhpcy5jb25maWcudHJhY2VyLnN0YXJ0U3BhbihuYW1lLCB7IGNoaWxkT2Y6IHBhcmVudFNwYW4gfSk7XG4gICAgICAgIHRyeSB7XG4gICAgICAgICAgICBzcGFuLnNldFRhZyhUYWdzLlNQQU5fS0lORCwgJ2NsaWVudCcpO1xuICAgICAgICAgICAgY29uc3QgcmVzdWx0ID0gYXdhaXQgZihzcGFuKTtcbiAgICAgICAgICAgIGlmIChyZXN1bHQgIT09IHVuZGVmaW5lZCkge1xuICAgICAgICAgICAgICAgIHNwYW4uc2V0VGFnKCdyZXN1bHQnLCByZXN1bHQpO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgc3Bhbi5maW5pc2goKTtcbiAgICAgICAgICAgIHJldHVybiByZXN1bHQ7XG4gICAgICAgIH0gY2F0Y2ggKGVycm9yKSB7XG4gICAgICAgICAgICBzcGFuLmxvZyh7IGV2ZW50OiAnZmFpbGVkJywgcGF5bG9hZDogZXJyb3IgfSk7XG4gICAgICAgICAgICBzcGFuLmZpbmlzaCgpO1xuICAgICAgICAgICAgdGhyb3cgZXJyb3I7XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICAvLyBJbnRlcm5hbHNcblxuICAgIHN0YXRpYyBjbGllbnRQbGF0Zm9ybTogP1RPTkNsaWVudFBsYXRmb3JtID0gbnVsbDtcbiAgICBzdGF0aWMgY29yZTogP1RPTkNsaWVudExpYnJhcnkgPSBudWxsO1xuXG4gICAgbW9kdWxlczogTWFwPHN0cmluZywgVE9OTW9kdWxlPjtcbn1cblxuZXhwb3J0IGNsYXNzIFRPTkNsaWVudEVycm9yIHtcbiAgICBzdGF0aWMgc291cmNlID0ge1xuICAgICAgICBDTElFTlQ6ICdjbGllbnQnLFxuICAgICAgICBOT0RFOiAnbm9kZSdcbiAgICB9O1xuICAgIHN0YXRpYyBjb2RlID0ge1xuICAgICAgICBDTElFTlRfRE9FU19OT1RfQ09ORklHVVJFRDogMTAwMCxcbiAgICAgICAgU0VORF9OT0RFX1JFUVVFU1RfRkFJTEVEOiAxMDAxLFxuICAgICAgICBSVU5fTE9DQUxfQUNDT1VOVF9ET0VTX05PVF9FWElTVFM6IDEwMDIsXG4gICAgICAgIFdBSVRfRk9SX1RJTUVPVVQ6IDEwMDMsXG4gICAgICAgIElOVEVSTkFMX0VSUk9SOiAxMDA0LFxuICAgICAgICBRVUVSWV9GQUlMRUQ6IDEwMDUsXG4gICAgICAgIE1FU1NBR0VfRVhQSVJFRDogMTAwNixcbiAgICAgICAgU0VSVkVSX0RPRVNOVF9TVVBQT1JUX0FHR1JFR0FUSU9OUzogMTAwNyxcbiAgICAgICAgSU5WQUxJRF9DT05TOiAxMDA4LFxuICAgICAgICBBRERSRVNTX1JFUVVJUkVEX0ZPUl9SVU5fTE9DQUw6IDEwMDksXG4gICAgICAgIENMT0NLX09VVF9PRl9TWU5DOiAxMDEzLFxuICAgICAgICBBQ0NPVU5UX01JU1NJTkc6IDEwMTQsXG4gICAgICAgIEFDQ09VTlRfQ09ERV9NSVNTSU5HOiAxMDE1LFxuICAgICAgICBBQ0NPVU5UX0JBTEFOQ0VfVE9PX0xPVzogMTAxNixcbiAgICAgICAgQUNDT1VOVF9GUk9aRU5fT1JfREVMRVRFRDogMTAxNyxcbiAgICB9O1xuXG4gICAgbWVzc2FnZTogc3RyaW5nO1xuICAgIHNvdXJjZTogc3RyaW5nO1xuICAgIGNvZGU6IG51bWJlcjtcbiAgICBkYXRhOiBhbnk7XG5cbiAgICBjb25zdHJ1Y3RvcihtZXNzYWdlOiBzdHJpbmcsIGNvZGU6IG51bWJlciwgc291cmNlOiBzdHJpbmcsIGRhdGE/OiBhbnkpIHtcbiAgICAgICAgdGhpcy5tZXNzYWdlID0gbWVzc2FnZTtcbiAgICAgICAgdGhpcy5jb2RlID0gY29kZTtcbiAgICAgICAgdGhpcy5zb3VyY2UgPSBzb3VyY2U7XG4gICAgICAgIHRoaXMuZGF0YSA9IGRhdGE7XG4gICAgfVxuXG4gICAgc3RhdGljIGlzQ2xpZW50RXJyb3IoZXJyb3I6IGFueSwgY29kZTogbnVtYmVyKTogYm9vbGVhbiB7XG4gICAgICAgIHJldHVybiAoZXJyb3Iuc291cmNlID09PSBUT05DbGllbnRFcnJvci5zb3VyY2UuQ0xJRU5UKVxuICAgICAgICAgICAgJiYgKGVycm9yLmNvZGUgPT09IGNvZGUpO1xuICAgIH1cblxuICAgIHN0YXRpYyBpc05vZGVFcnJvcihlcnJvcjogYW55LCBjb2RlOiBudW1iZXIpOiBib29sZWFuIHtcbiAgICAgICAgcmV0dXJuIChlcnJvci5zb3VyY2UgPT09IFRPTkNsaWVudEVycm9yLnNvdXJjZS5OT0RFKVxuICAgICAgICAgICAgJiYgKGVycm9yLmNvZGUgPT09IGNvZGUpO1xuICAgIH1cblxuICAgIHN0YXRpYyBpbnRlcm5hbEVycm9yKG1lc3NhZ2U6IHN0cmluZyk6IFRPTkNsaWVudEVycm9yIHtcbiAgICAgICAgcmV0dXJuIG5ldyBUT05DbGllbnRFcnJvcihcbiAgICAgICAgICAgIGBJbnRlcm5hbCBlcnJvcjogJHttZXNzYWdlfWAsXG4gICAgICAgICAgICBUT05DbGllbnRFcnJvci5jb2RlLklOVEVSTkFMX0VSUk9SLFxuICAgICAgICAgICAgVE9OQ2xpZW50RXJyb3Iuc291cmNlLkNMSUVOVCxcbiAgICAgICAgKTtcbiAgICB9XG5cbiAgICBzdGF0aWMgaW52YWxpZENvbnMoKTogVE9OQ2xpZW50RXJyb3Ige1xuICAgICAgICByZXR1cm4gbmV3IFRPTkNsaWVudEVycm9yKFxuICAgICAgICAgICAgJ0ludmFsaWQgQ09OUyBzdHJ1Y3R1cmUuIEVhY2ggQ09OUyBpdGVtIG11c3QgY29udGFpbnMgb2YgdHdvIGVsZW1lbnRzLicsXG4gICAgICAgICAgICBUT05DbGllbnRFcnJvci5jb2RlLklOVkFMSURfQ09OUyxcbiAgICAgICAgICAgIFRPTkNsaWVudEVycm9yLnNvdXJjZS5DTElFTlQsXG4gICAgICAgICk7XG4gICAgfVxuXG4gICAgc3RhdGljIGNsaWVudERvZXNOb3RDb25maWd1cmVkKCk6IFRPTkNsaWVudEVycm9yIHtcbiAgICAgICAgcmV0dXJuIG5ldyBUT05DbGllbnRFcnJvcihcbiAgICAgICAgICAgICdUT04gQ2xpZW50IGRvZXMgbm90IGNvbmZpZ3VyZWQnLFxuICAgICAgICAgICAgVE9OQ2xpZW50RXJyb3IuY29kZS5DTElFTlRfRE9FU19OT1RfQ09ORklHVVJFRCxcbiAgICAgICAgICAgIFRPTkNsaWVudEVycm9yLnNvdXJjZS5DTElFTlQsXG4gICAgICAgICk7XG4gICAgfVxuXG4gICAgc3RhdGljIHNlbmROb2RlUmVxdWVzdEZhaWxlZChyZXNwb25zZVRleHQ6IHN0cmluZyk6IFRPTkNsaWVudEVycm9yIHtcbiAgICAgICAgcmV0dXJuIG5ldyBUT05DbGllbnRFcnJvcihcbiAgICAgICAgICAgIGBTZW5kIG5vZGUgcmVxdWVzdCBmYWlsZWQ6ICR7cmVzcG9uc2VUZXh0fWAsXG4gICAgICAgICAgICBUT05DbGllbnRFcnJvci5jb2RlLlNFTkRfTk9ERV9SRVFVRVNUX0ZBSUxFRCxcbiAgICAgICAgICAgIFRPTkNsaWVudEVycm9yLnNvdXJjZS5DTElFTlQsXG4gICAgICAgICk7XG4gICAgfVxuXG4gICAgc3RhdGljIHJ1bkxvY2FsQWNjb3VudERvZXNOb3RFeGlzdHMoZnVuY3Rpb25OYW1lOiBzdHJpbmcsIGFkZHJlc3M6IHN0cmluZyk6IFRPTkNsaWVudEVycm9yIHtcbiAgICAgICAgcmV0dXJuIG5ldyBUT05DbGllbnRFcnJvcihcbiAgICAgICAgICAgIGBbJHtmdW5jdGlvbk5hbWV9XSBydW4gbG9jYWwgZmFpbGVkOiBhY2NvdW50IFske2FkZHJlc3N9XSBkb2VzIG5vdCBleGlzdHNgLFxuICAgICAgICAgICAgVE9OQ2xpZW50RXJyb3IuY29kZS5SVU5fTE9DQUxfQUNDT1VOVF9ET0VTX05PVF9FWElTVFMsXG4gICAgICAgICAgICBUT05DbGllbnRFcnJvci5zb3VyY2UuQ0xJRU5ULFxuICAgICAgICApO1xuICAgIH1cblxuICAgIHN0YXRpYyB3YWl0Rm9yVGltZW91dCgpIHtcbiAgICAgICAgcmV0dXJuIG5ldyBUT05DbGllbnRFcnJvcihcbiAgICAgICAgICAgICdXYWl0IGZvciBvcGVyYXRpb24gcmVqZWN0ZWQgb24gdGltZW91dCcsXG4gICAgICAgICAgICBUT05DbGllbnRFcnJvci5jb2RlLldBSVRfRk9SX1RJTUVPVVQsXG4gICAgICAgICAgICBUT05DbGllbnRFcnJvci5zb3VyY2UuQ0xJRU5ULFxuICAgICAgICApO1xuICAgIH1cblxuICAgIHN0YXRpYyBxdWVyeUZhaWxlZChlcnJvcnM6IEVycm9yW10pIHtcbiAgICAgICAgcmV0dXJuIG5ldyBUT05DbGllbnRFcnJvcihcbiAgICAgICAgICAgIGBRdWVyeSBmYWlsZWQ6ICR7ZXJyb3JzLm1hcCh4ID0+IHgubWVzc2FnZSB8fCB4LnRvU3RyaW5nKCkpLmpvaW4oJ1xcbicpfWAsXG4gICAgICAgICAgICBUT05DbGllbnRFcnJvci5jb2RlLlFVRVJZX0ZBSUxFRCxcbiAgICAgICAgICAgIFRPTkNsaWVudEVycm9yLnNvdXJjZS5DTElFTlQsXG4gICAgICAgICk7XG4gICAgfVxuXG4gICAgc3RhdGljIG1lc3NhZ2VFeHBpcmVkKCkge1xuICAgICAgICByZXR1cm4gbmV3IFRPTkNsaWVudEVycm9yKFxuICAgICAgICAgICAgJ01lc3NhZ2UgZXhwaXJlZCcsXG4gICAgICAgICAgICBUT05DbGllbnRFcnJvci5jb2RlLk1FU1NBR0VfRVhQSVJFRCxcbiAgICAgICAgICAgIFRPTkNsaWVudEVycm9yLnNvdXJjZS5DTElFTlQsXG4gICAgICAgICk7XG4gICAgfVxuXG4gICAgc3RhdGljIHNlcnZlckRvZXNudFN1cHBvcnRBZ2dyZWdhdGlvbnMoKSB7XG4gICAgICAgIHJldHVybiBuZXcgVE9OQ2xpZW50RXJyb3IoXG4gICAgICAgICAgICAnU2VydmVyIGRvZXNuXFwndCBzdXBwb3J0IGFnZ3JlZ2F0aW9ucycsXG4gICAgICAgICAgICBUT05DbGllbnRFcnJvci5jb2RlLlNFUlZFUl9ET0VTTlRfU1VQUE9SVF9BR0dSRUdBVElPTlMsXG4gICAgICAgICAgICBUT05DbGllbnRFcnJvci5zb3VyY2UuQ0xJRU5ULFxuICAgICAgICApO1xuICAgIH1cblxuICAgIHN0YXRpYyBhZGRyZXNzUmVxdWlyZWRGb3JSdW5Mb2NhbCgpIHtcbiAgICAgICAgcmV0dXJuIG5ldyBUT05DbGllbnRFcnJvcihcbiAgICAgICAgICAgIGBBZGRyZXNzIHJlcXVpcmVkIGZvciBydW4gbG9jYWwuIFlvdSBoYXZlbid0IHNwZWNpZmllZCBjb250cmFjdCBjb2RlIG9yIGRhdGEgc28gYWRkcmVzcyBpcyByZXF1aXJlZCB0byBsb2FkIG1pc3NpbmcgcGFydHMgZnJvbSBuZXR3b3JrLmAsXG4gICAgICAgICAgICBUT05DbGllbnRFcnJvci5jb2RlLkFERFJFU1NfUkVRVUlSRURfRk9SX1JVTl9MT0NBTCxcbiAgICAgICAgICAgIFRPTkNsaWVudEVycm9yLnNvdXJjZS5DTElFTlQsXG4gICAgICAgICk7XG4gICAgfVxuXG4gICAgc3RhdGljIGNsb2NrT3V0T2ZTeW5jKCkge1xuICAgICAgICByZXR1cm4gbmV3IFRPTkNsaWVudEVycm9yKFxuICAgICAgICAgICAgJ1lvdSBsb2NhbCBjbG9jayBpcyBvdXQgb2Ygc3luYyB3aXRoIHRoZSBzZXJ2ZXIgdGltZS4gJyArXG4gICAgICAgICAgICAnSXQgaXMgYSBjcml0aWNhbCBjb25kaXRpb24gZm9yIHNlbmRpbmcgbWVzc2FnZXMgdG8gdGhlIGJsb2NrY2hhaW4uICcgK1xuICAgICAgICAgICAgJ1BsZWFzZSBzeW5jIHlvdSBjbG9jayB3aXRoIHRoZSBpbnRlcm5ldCB0aW1lLicsXG4gICAgICAgICAgICBUT05DbGllbnRFcnJvci5jb2RlLkNMT0NLX09VVF9PRl9TWU5DLFxuICAgICAgICAgICAgVE9OQ2xpZW50RXJyb3Iuc291cmNlLkNMSUVOVCxcbiAgICAgICAgKTtcbiAgICB9XG5cbiAgICBzdGF0aWMgYWNjb3VudE1pc3NpbmcoYWRkcmVzczogc3RyaW5nKSB7XG4gICAgICAgIHJldHVybiBuZXcgVE9OQ2xpZW50RXJyb3IoXG4gICAgICAgICAgICBgQWNjb3VudCB3aXRoIGFkZHJlc3MgWyR7YWRkcmVzc31dIGRvZXNuJ3QgZXhpc3RzLiBgICtcbiAgICAgICAgICAgICdZb3UgaGF2ZSB0byBwcmVwYWlkIHRoaXMgYWNjb3VudCB0byBoYXZlIGEgcG9zaXRpdmUgYmFsYW5jZSBvbiB0aGVtIGFuZCB0aGVuIGRlcGxveSBhIGNvbnRyYWN0IGNvZGUgZm9yIHRoaXMgYWNjb3VudC4nICtcbiAgICAgICAgICAgICdTZWUgU0RLIGRvY3VtZW50YXRpb24gZm9yIGRldGFpbGVkIGluc3RydWN0aW9ucy4nLFxuICAgICAgICAgICAgVE9OQ2xpZW50RXJyb3IuY29kZS5BQ0NPVU5UX01JU1NJTkcsXG4gICAgICAgICAgICBUT05DbGllbnRFcnJvci5zb3VyY2UuQ0xJRU5ULFxuICAgICAgICApO1xuICAgIH1cblxuICAgIHN0YXRpYyBhY2NvdW50Q29kZU1pc3NpbmcoYWRkcmVzczogc3RyaW5nLCBiYWxhbmNlOiBzdHJpbmcpIHtcbiAgICAgICAgcmV0dXJuIG5ldyBUT05DbGllbnRFcnJvcihcbiAgICAgICAgICAgIGBBY2NvdW50IHdpdGggYWRkcmVzcyBbJHthZGRyZXNzfV0gZXhpc3RzIGJ1dCBoYXZlbid0IGEgY29udHJhY3QgY29kZSB5ZXQuIGAgK1xuICAgICAgICAgICAgJ1lvdSBoYXZlIHRvIGVuc3VyZSB0aGF0IGFuIGFjY291bnQgaGFzIGFuIGVub3VnaCBiYWxhbmNlIGZvciBkZXBsb3lpbmcgYSBjb250cmFjdCBjb2RlIGFuZCB0aGVuIGRlcGxveSBhIGNvbnRyYWN0IGNvZGUgZm9yIHRoaXMgYWNjb3VudC4gJyArXG4gICAgICAgICAgICBgQ3VycmVudCBhY2NvdW50IGJhbGFuY2UgaXMgWyR7YmFsYW5jZX1dLiBgICtcbiAgICAgICAgICAgICdTZWUgU0RLIGRvY3VtZW50YXRpb24gZm9yIGRldGFpbGVkIGluc3RydWN0aW9ucy4nLFxuICAgICAgICAgICAgVE9OQ2xpZW50RXJyb3IuY29kZS5BQ0NPVU5UX0NPREVfTUlTU0lORyxcbiAgICAgICAgICAgIFRPTkNsaWVudEVycm9yLnNvdXJjZS5DTElFTlQsXG4gICAgICAgICk7XG4gICAgfVxuXG4gICAgc3RhdGljIGFjY291bnRCYWxhbmNlVG9vTG93KGFkZHJlc3M6IHN0cmluZywgYmFsYW5jZTogc3RyaW5nKSB7XG4gICAgICAgIHJldHVybiBuZXcgVE9OQ2xpZW50RXJyb3IoXG4gICAgICAgICAgICBgQWNjb3VudCB3aXRoIGFkZHJlc3MgWyR7YWRkcmVzc31dIGhhcyB0b28gbG93IGJhbGFuY2UgWyR7YmFsYW5jZX1dLiBgICtcbiAgICAgICAgICAgICdZb3UgaGF2ZSB0byBzZW5kIHNvbWUgdmFsdWUgdG8gYWNjb3VudCBiYWxhbmNlIGZyb20gb3RoZXIgY29udHJhY3QgKGUuZy4gV2FsbGV0IGNvbnRyYWN0KS4gJyArXG4gICAgICAgICAgICAnU2VlIFNESyBkb2N1bWVudGF0aW9uIGZvciBkZXRhaWxlZCBpbnN0cnVjdGlvbnMuJyxcbiAgICAgICAgICAgIFRPTkNsaWVudEVycm9yLmNvZGUuQUNDT1VOVF9CQUxBTkNFX1RPT19MT1csXG4gICAgICAgICAgICBUT05DbGllbnRFcnJvci5zb3VyY2UuQ0xJRU5ULFxuICAgICAgICApO1xuICAgIH1cblxuICAgIHN0YXRpYyBpc01lc3NhZ2VFeHBpcmVkKGVycm9yOiBhbnkpOiBib29sZWFuIHtcbiAgICAgICAgcmV0dXJuIFRPTkNsaWVudEVycm9yLmlzQ2xpZW50RXJyb3IoZXJyb3IsIFRPTkNsaWVudEVycm9yLmNvZGUuTUVTU0FHRV9FWFBJUkVEKTtcbiAgICB9XG5cbn1cblxuIl19