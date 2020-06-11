"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.TONClientError = exports.TONContractExitCode = exports.TONErrorCode = exports.TONErrorSource = exports.TONClient = void 0;

var _regenerator = _interopRequireDefault(require("@babel/runtime/regenerator"));

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
      var _setup = _asyncToGenerator( /*#__PURE__*/_regenerator["default"].mark(function _callee() {
        var modules, _iterator, _step, module;

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
      var _close = _asyncToGenerator( /*#__PURE__*/_regenerator["default"].mark(function _callee2() {
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
      var _getManagementAccessKey = _asyncToGenerator( /*#__PURE__*/_regenerator["default"].mark(function _callee3() {
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
    key: "_resolveSignedManagementAccessKey",
    value: function () {
      var _resolveSignedManagementAccessKey2 = _asyncToGenerator( /*#__PURE__*/_regenerator["default"].mark(function _callee4(params) {
        var signKeys, managementAccessKey;
        return _regenerator["default"].wrap(function _callee4$(_context4) {
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
      var _registerAccessKeys = _asyncToGenerator( /*#__PURE__*/_regenerator["default"].mark(function _callee5(params) {
        var signedManagementAccessKey, result;
        return _regenerator["default"].wrap(function _callee5$(_context5) {
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
      var _revokeAccessKeys = _asyncToGenerator( /*#__PURE__*/_regenerator["default"].mark(function _callee6(params) {
        var signedManagementAccessKey, result;
        return _regenerator["default"].wrap(function _callee6$(_context6) {
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
      var _trace = _asyncToGenerator( /*#__PURE__*/_regenerator["default"].mark(function _callee7(name, f, parentSpan) {
        var span, result;
        return _regenerator["default"].wrap(function _callee7$(_context7) {
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
      var _create = _asyncToGenerator( /*#__PURE__*/_regenerator["default"].mark(function _callee8(config) {
        var client;
        return _regenerator["default"].wrap(function _callee8$(_context8) {
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

var TONErrorSource = {
  CLIENT: 'client',
  NODE: 'node'
};
exports.TONErrorSource = TONErrorSource;
var TONErrorCode = {
  CLIENT_DOES_NOT_CONFIGURED: 1000,
  SEND_NODE_REQUEST_FAILED: 1001,
  MESSAGE_ALREADY_EXPIRED: 1001,
  RUN_LOCAL_ACCOUNT_DOES_NOT_EXISTS: 1002,
  WAIT_FOR_TIMEOUT: 1003,
  INTERNAL_ERROR: 1004,
  QUERY_FAILED: 1005,
  MESSAGE_EXPIRED: 1006,
  SERVER_DOESNT_SUPPORT_AGGREGATIONS: 1007,
  INVALID_CONS: 1008,
  ADDRESS_REQUIRED_FOR_RUN_LOCAL: 1009,
  NETWORK_SILENT: 1010,
  TRANSACTION_LAG: 1011,
  TRANSACTION_WAIT_TIMEOUT: 1012,
  CLOCK_OUT_OF_SYNC: 1013,
  ACCOUNT_MISSING: 1014,
  ACCOUNT_CODE_MISSING: 1015,
  ACCOUNT_BALANCE_TOO_LOW: 1016,
  ACCOUNT_FROZEN_OR_DELETED: 1017,
  CONTRACT_EXECUTION_FAILED: 3025
};
exports.TONErrorCode = TONErrorCode;
var TONContractExitCode = {
  REPLAY_PROTECTION: 52,
  MESSAGE_EXPIRED: 57,
  NO_GAS: 13
};
exports.TONContractExitCode = TONContractExitCode;

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
    key: "isContractError",
    value: function isContractError(error, exitCode) {
      return error.source === TONClientError.source.NODE && error.code === TONClientError.code.CONTRACT_EXECUTION_FAILED && error.data && error.data.exit_code === exitCode;
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
    key: "formatTime",
    value: function formatTime(time) {
      if (time) {
        return "".concat(new Date(time * 1000).toISOString(), " (").concat(time, ")");
      } else {
        return null;
      }
    }
  }, {
    key: "messageExpired",
    value: function messageExpired(msgId, sendTime, expire, blockTime) {
      return new TONClientError('Message expired', TONClientError.code.MESSAGE_EXPIRED, TONClientError.source.CLIENT, {
        message_id: msgId,
        send_time: TONClientError.formatTime(sendTime),
        expiration_time: TONClientError.formatTime(expire),
        block_time: TONClientError.formatTime(blockTime)
      });
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
    key: "networkSilent",
    value: function networkSilent(msgId, sendTime, expire, timeout) {
      return new TONClientError('Network silent: no blocks produced during timeout.', TONClientError.code.NETWORK_SILENT, TONClientError.source.CLIENT, {
        message_id: msgId,
        send_time: TONClientError.formatTime(sendTime),
        expiration_time: TONClientError.formatTime(expire),
        timeout: timeout
      });
    }
  }, {
    key: "transactionLag",
    value: function transactionLag(msgId, blockId, transactionId, timeout) {
      return new TONClientError('Existing block transaction not found.', TONClientError.code.TRANSACTION_LAG, TONClientError.source.CLIENT, {
        message_id: msgId,
        block_id: blockId,
        transaction_id: transactionId,
        timeout: timeout
      });
    }
  }, {
    key: "transactionWaitTimeout",
    value: function transactionWaitTimeout(msgId, sendTime, timeout) {
      return new TONClientError('Transaction did not produced during specified timeout', TONClientError.code.TRANSACTION_WAIT_TIMEOUT, TONClientError.source.CLIENT, {
        message_id: msgId,
        send_time: TONClientError.formatTime(sendTime),
        timeout: timeout
      });
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
  }, {
    key: "isWaitforTimeout",
    value: function isWaitforTimeout(error) {
      return TONClientError.isClientError(error, TONClientError.code.WAIT_FOR_TIMEOUT);
    }
  }]);

  return TONClientError;
}();

exports.TONClientError = TONClientError;

_defineProperty(TONClientError, "source", TONErrorSource);

_defineProperty(TONClientError, "code", TONErrorCode);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uL3NyYy9UT05DbGllbnQuanMiXSwibmFtZXMiOlsiVE9OQ2xpZW50IiwiY2xpZW50UGxhdGZvcm0iLCJtb2R1bGVzIiwiTWFwIiwiY29uZmlnIiwiZ2V0TW9kdWxlIiwiVE9OQ29uZmlnTW9kdWxlIiwiY3J5cHRvIiwiVE9OQ3J5cHRvTW9kdWxlIiwiY29udHJhY3RzIiwiVE9OQ29udHJhY3RzTW9kdWxlIiwiX3F1ZXJpZXMiLCJUT05RdWVyaWVzTW9kdWxlIiwicXVlcmllcyIsImNvcmUiLCJjcmVhdGVMaWJyYXJ5IiwidmFsdWVzIiwibW9kdWxlIiwic2V0dXAiLCJjbG9zZSIsIk1vZHVsZUNsYXNzIiwibmFtZSIsIm1vZHVsZU5hbWUiLCJleGlzdGluZ01vZHVsZSIsImdldCIsInNldCIsInNlcnZlclRpbWVEZWx0YSIsInNlcnZlck5vdyIsInF1ZXJ5IiwicmVzdWx0IiwiZGF0YSIsImdldE1hbmFnZW1lbnRBY2Nlc3NLZXkiLCJwYXJhbXMiLCJzaWduZWRNYW5hZ2VtZW50QWNjZXNzS2V5Iiwic2lnbktleXMiLCJhY2NvdW50S2V5cyIsIm1hbmFnZW1lbnRBY2Nlc3NLZXkiLCJuYWNsU2lnbiIsInRleHQiLCJzZWNyZXQiLCJfcmVzb2x2ZVNpZ25lZE1hbmFnZW1lbnRBY2Nlc3NLZXkiLCJtdXRhdGlvbiIsImFjY291bnQiLCJrZXlzIiwicmVnaXN0ZXJBY2Nlc3NLZXlzIiwicmV2b2tlQWNjZXNzS2V5cyIsImYiLCJwYXJlbnRTcGFuIiwic3BhbiIsInRyYWNlciIsInN0YXJ0U3BhbiIsImNoaWxkT2YiLCJzZXRUYWciLCJUYWdzIiwiU1BBTl9LSU5EIiwidW5kZWZpbmVkIiwiZmluaXNoIiwibG9nIiwiZXZlbnQiLCJwYXlsb2FkIiwiY2xpZW50Iiwic2V0RGF0YSIsIlRPTkVycm9yU291cmNlIiwiQ0xJRU5UIiwiTk9ERSIsIlRPTkVycm9yQ29kZSIsIkNMSUVOVF9ET0VTX05PVF9DT05GSUdVUkVEIiwiU0VORF9OT0RFX1JFUVVFU1RfRkFJTEVEIiwiTUVTU0FHRV9BTFJFQURZX0VYUElSRUQiLCJSVU5fTE9DQUxfQUNDT1VOVF9ET0VTX05PVF9FWElTVFMiLCJXQUlUX0ZPUl9USU1FT1VUIiwiSU5URVJOQUxfRVJST1IiLCJRVUVSWV9GQUlMRUQiLCJNRVNTQUdFX0VYUElSRUQiLCJTRVJWRVJfRE9FU05UX1NVUFBPUlRfQUdHUkVHQVRJT05TIiwiSU5WQUxJRF9DT05TIiwiQUREUkVTU19SRVFVSVJFRF9GT1JfUlVOX0xPQ0FMIiwiTkVUV09SS19TSUxFTlQiLCJUUkFOU0FDVElPTl9MQUciLCJUUkFOU0FDVElPTl9XQUlUX1RJTUVPVVQiLCJDTE9DS19PVVRfT0ZfU1lOQyIsIkFDQ09VTlRfTUlTU0lORyIsIkFDQ09VTlRfQ09ERV9NSVNTSU5HIiwiQUNDT1VOVF9CQUxBTkNFX1RPT19MT1ciLCJBQ0NPVU5UX0ZST1pFTl9PUl9ERUxFVEVEIiwiQ09OVFJBQ1RfRVhFQ1VUSU9OX0ZBSUxFRCIsIlRPTkNvbnRyYWN0RXhpdENvZGUiLCJSRVBMQVlfUFJPVEVDVElPTiIsIk5PX0dBUyIsIlRPTkNsaWVudEVycm9yIiwibWVzc2FnZSIsImNvZGUiLCJzb3VyY2UiLCJlcnJvciIsImV4aXRDb2RlIiwiZXhpdF9jb2RlIiwicmVzcG9uc2VUZXh0IiwiZnVuY3Rpb25OYW1lIiwiYWRkcmVzcyIsImVycm9ycyIsIm1hcCIsIngiLCJ0b1N0cmluZyIsImpvaW4iLCJ0aW1lIiwiRGF0ZSIsInRvSVNPU3RyaW5nIiwibXNnSWQiLCJzZW5kVGltZSIsImV4cGlyZSIsImJsb2NrVGltZSIsIm1lc3NhZ2VfaWQiLCJzZW5kX3RpbWUiLCJmb3JtYXRUaW1lIiwiZXhwaXJhdGlvbl90aW1lIiwiYmxvY2tfdGltZSIsInRpbWVvdXQiLCJibG9ja0lkIiwidHJhbnNhY3Rpb25JZCIsImJsb2NrX2lkIiwidHJhbnNhY3Rpb25faWQiLCJiYWxhbmNlIiwiaXNDbGllbnRFcnJvciJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7O0FBS0E7O0FBWUE7O0FBQ0E7O0FBQ0E7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SUFBZixDQUFvQmxCLGVBQXhELENBQVA7QUFDSDs7O3FDQUV1Qm9CLEssRUFBcUI7QUFDekMsYUFBT0osY0FBYyxDQUFDaUMsYUFBZixDQUE2QjdCLEtBQTdCLEVBQW9DSixjQUFjLENBQUNFLElBQWYsQ0FBb0JyQixnQkFBeEQsQ0FBUDtBQUNIOzs7Ozs7OztnQkF0TlFtQixjLFlBQ08zQixjOztnQkFEUDJCLGMsVUFFS3hCLFkiLCJzb3VyY2VzQ29udGVudCI6WyIvKlxuICogQ29weXJpZ2h0IDIwMTgtMjAyMCBUT04gREVWIFNPTFVUSU9OUyBMVEQuXG4gKi9cbi8vIEBmbG93XG5cbmltcG9ydCB7VGFncywgU3BhbiwgU3BhbkNvbnRleHR9IGZyb20gXCJvcGVudHJhY2luZ1wiO1xuaW1wb3J0IHR5cGUge1xuICAgIElUT05DbGllbnQsXG4gICAgVE9OQWNjZXNzS2V5c01hbmFnZW1lbnRQYXJhbXMsXG4gICAgVE9OQ29uZmlnRGF0YSxcbiAgICBUT05Db250cmFjdHMsXG4gICAgVE9OQ3J5cHRvLFxuICAgIFRPTlF1ZXJpZXMsXG4gICAgVE9OUmVnaXN0ZXJBY2Nlc3NLZXlzUGFyYW1zLFxuICAgIFRPTlJldm9rZUFjY2Vzc0tleXNQYXJhbXMsXG59IGZyb20gXCIuLi90eXBlc1wiO1xuXG5pbXBvcnQgVE9OQ29uZmlnTW9kdWxlIGZyb20gJy4vbW9kdWxlcy9UT05Db25maWdNb2R1bGUnO1xuaW1wb3J0IFRPTkNvbnRyYWN0c01vZHVsZSBmcm9tICcuL21vZHVsZXMvVE9OQ29udHJhY3RzTW9kdWxlJztcbmltcG9ydCBUT05DcnlwdG9Nb2R1bGUgZnJvbSAnLi9tb2R1bGVzL1RPTkNyeXB0b01vZHVsZSc7XG4vKiBlc2xpbnQtZGlzYWJsZSBjbGFzcy1tZXRob2RzLXVzZS10aGlzLCBuby11c2UtYmVmb3JlLWRlZmluZSAqL1xuaW1wb3J0IFRPTlF1ZXJpZXNNb2R1bGUgZnJvbSBcIi4vbW9kdWxlcy9UT05RdWVyaWVzTW9kdWxlXCI7XG5cbmltcG9ydCB0eXBlIHtUT05DbGllbnRMaWJyYXJ5LCBUT05Nb2R1bGVDb250ZXh0fSBmcm9tICcuL1RPTk1vZHVsZSc7XG5pbXBvcnQge1RPTk1vZHVsZX0gZnJvbSAnLi9UT05Nb2R1bGUnO1xuXG4vKipcbiAqIEphdmFTY3JpcHQgcGxhdGZvcm0gc3BlY2lmaWMgY29uZmlndXJhdGlvblxuICovXG50eXBlIFRPTkNsaWVudFBsYXRmb3JtID0ge1xuICAgIC8qKlxuICAgICAqIFBsYXRmb3JtIHNwZWNpZmljIGBmZXRjaGAgZnVuY3Rpb25cbiAgICAgKi9cbiAgICBmZXRjaDogYW55LFxuICAgIC8qKlxuICAgICAqIFBsYXRmb3JtIHNwZWNpZmljIGBXZWJTb2NrZXRgIGltcGxlbWVudGF0aW9uXG4gICAgICogVGhpcyBpbXBsZW1lbnRhdGlvbiBtdXN0IGNvbmZvcm1zIHRvIFczQyBXZWJTb2NrZXRcbiAgICAgKi9cbiAgICBXZWJTb2NrZXQ6IGFueSxcbiAgICAvKipcbiAgICAgKiBSZXF1ZXN0IGNyZWF0aW9uIG9mIHRoZSBjbGllbnQgY29yZVxuICAgICAqL1xuICAgIGNyZWF0ZUxpYnJhcnk6ICgpID0+IFByb21pc2U8VE9OQ2xpZW50TGlicmFyeT4sXG59O1xuXG4vKipcbiAqIE1haW4gb2JqZWN0IHByb3ZpZGVkIGZ1bmN0aW9uYWxpdHkgb2YgdGhlIFRPTiBDbGllbnQgTGlicmFyeVxuICogRWFjaCBpbnN0YW5jZSBvZiBUT05DbGllbnQgaGFzIG93biBzZXQgb2YgVE9OIENsaWVudCBtb2R1bGVzXG4gKiBhbmQgaGFzIG93biBwcmVjb25maWd1cmVkIGNsaWVudCBjb250ZXh0XG4gKi9cbmV4cG9ydCBjbGFzcyBUT05DbGllbnQgaW1wbGVtZW50cyBUT05Nb2R1bGVDb250ZXh0LCBJVE9OQ2xpZW50IHtcbiAgICBzdGF0aWMgc2V0TGlicmFyeShjbGllbnRQbGF0Zm9ybTogVE9OQ2xpZW50UGxhdGZvcm0pIHtcbiAgICAgICAgVE9OQ2xpZW50LmNsaWVudFBsYXRmb3JtID0gY2xpZW50UGxhdGZvcm07XG4gICAgfVxuXG5cbiAgICAvLyBQdWJsaWNcbiAgICBjb25maWc6IFRPTkNvbmZpZ01vZHVsZTtcbiAgICBjcnlwdG86IFRPTkNyeXB0bztcbiAgICBjb250cmFjdHM6IFRPTkNvbnRyYWN0cztcbiAgICBxdWVyaWVzOiBUT05RdWVyaWVzO1xuICAgIF9xdWVyaWVzOiBUT05RdWVyaWVzTW9kdWxlO1xuXG4gICAgY29uc3RydWN0b3IoKSB7XG4gICAgICAgIHRoaXMubW9kdWxlcyA9IG5ldyBNYXAoKTtcbiAgICAgICAgdGhpcy5jb25maWcgPSB0aGlzLmdldE1vZHVsZShUT05Db25maWdNb2R1bGUpO1xuICAgICAgICB0aGlzLmNyeXB0byA9IHRoaXMuZ2V0TW9kdWxlKFRPTkNyeXB0b01vZHVsZSk7XG4gICAgICAgIHRoaXMuY29udHJhY3RzID0gdGhpcy5nZXRNb2R1bGUoVE9OQ29udHJhY3RzTW9kdWxlKTtcbiAgICAgICAgdGhpcy5fcXVlcmllcyA9IHRoaXMuZ2V0TW9kdWxlKFRPTlF1ZXJpZXNNb2R1bGUpO1xuICAgICAgICB0aGlzLnF1ZXJpZXMgPSB0aGlzLl9xdWVyaWVzO1xuICAgIH1cblxuICAgIC8qKlxuICAgICAqIENvbnZlbmllbnQgd2F5IHRvIGNyZWF0ZSBjb25maWd1cmVkIGluc3RhbmNlIG9mIHRoZSBUT04gQ2xpZW50XG4gICAgICogQHBhcmFtIHtUT05Db25maWdEYXRhfSBjb25maWdcbiAgICAgKiBAcmV0dXJuIHtQcm9taXNlPFRPTkNsaWVudD59XG4gICAgICovXG4gICAgc3RhdGljIGFzeW5jIGNyZWF0ZShjb25maWc6IFRPTkNvbmZpZ0RhdGEpOiBQcm9taXNlPFRPTkNsaWVudD4ge1xuICAgICAgICBjb25zdCBjbGllbnQgPSBuZXcgVE9OQ2xpZW50KCk7XG4gICAgICAgIGNsaWVudC5jb25maWcuc2V0RGF0YShjb25maWcpO1xuICAgICAgICBhd2FpdCBjbGllbnQuc2V0dXAoKTtcbiAgICAgICAgcmV0dXJuIGNsaWVudDtcbiAgICB9XG5cbiAgICAvKipcbiAgICAgKiBTZXQgdXAgdGhlIGNsaWVudCBpbnN0YW5jZVxuICAgICAqIEByZXR1cm4ge1Byb21pc2U8dm9pZD59XG4gICAgICovXG4gICAgYXN5bmMgc2V0dXAoKTogUHJvbWlzZTx2b2lkPiB7XG4gICAgICAgIGlmICghVE9OQ2xpZW50LmNvcmUpIHtcbiAgICAgICAgICAgIGlmICghVE9OQ2xpZW50LmNsaWVudFBsYXRmb3JtKSB7XG4gICAgICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgVE9OQ2xpZW50LmNvcmUgPSBhd2FpdCBUT05DbGllbnQuY2xpZW50UGxhdGZvcm0uY3JlYXRlTGlicmFyeSgpO1xuICAgICAgICB9XG4gICAgICAgIGNvbnN0IG1vZHVsZXM6IFRPTk1vZHVsZVtdID0gWy4uLnRoaXMubW9kdWxlcy52YWx1ZXMoKV07XG4gICAgICAgIGZvciAoY29uc3QgbW9kdWxlIG9mIG1vZHVsZXMpIHtcbiAgICAgICAgICAgIGF3YWl0IG1vZHVsZS5zZXR1cCgpO1xuICAgICAgICB9XG4gICAgfVxuXG4gICAgLyoqXG4gICAgICogVGVhciBkb3duIHRoaXMgY2xpZW50IGluc3RhbmNlLlxuICAgICAqIE5vdGUgdGhhdCBhZnRlciB5b3UgaGF2ZSBjYWxsZWQgdGhpcyBtZXRob2QgYWxsIGZ1dHVyZSB1c2Ugb2YgdGhpcyBpbnN0YW5jZSB3aWxsIGZhaWxcbiAgICAgKiBAcmV0dXJuIHtQcm9taXNlPHZvaWQ+fVxuICAgICAqL1xuICAgIGFzeW5jIGNsb3NlKCk6IFByb21pc2U8dm9pZD4ge1xuICAgICAgICBhd2FpdCB0aGlzLnF1ZXJpZXMuY2xvc2UoKTtcbiAgICB9XG5cbiAgICAvLyBUT05Nb2R1bGVDb250ZXh0XG5cbiAgICBnZXRDb3JlKCk6ID9UT05DbGllbnRMaWJyYXJ5IHtcbiAgICAgICAgcmV0dXJuIFRPTkNsaWVudC5jb3JlO1xuICAgIH1cblxuICAgIGdldE1vZHVsZTxUPihNb2R1bGVDbGFzczogdHlwZW9mIFRPTk1vZHVsZSk6IFQge1xuICAgICAgICBjb25zdCBuYW1lID0gTW9kdWxlQ2xhc3MubW9kdWxlTmFtZTtcbiAgICAgICAgY29uc3QgZXhpc3RpbmdNb2R1bGUgPSB0aGlzLm1vZHVsZXMuZ2V0KG5hbWUpO1xuICAgICAgICBpZiAoZXhpc3RpbmdNb2R1bGUpIHtcbiAgICAgICAgICAgIHJldHVybiAoZXhpc3RpbmdNb2R1bGU6IGFueSk7XG4gICAgICAgIH1cbiAgICAgICAgY29uc3QgbW9kdWxlID0gbmV3IE1vZHVsZUNsYXNzKHRoaXMpO1xuICAgICAgICB0aGlzLm1vZHVsZXMuc2V0KG5hbWUsIG1vZHVsZSk7XG4gICAgICAgIHJldHVybiAobW9kdWxlOiBhbnkpO1xuICAgIH1cblxuICAgIHNlcnZlclRpbWVEZWx0YSgpOiBQcm9taXNlPG51bWJlcj4ge1xuICAgICAgICByZXR1cm4gdGhpcy5fcXVlcmllcy5zZXJ2ZXJUaW1lRGVsdGEoKTtcbiAgICB9XG5cbiAgICBzZXJ2ZXJOb3coKTogUHJvbWlzZTxudW1iZXI+IHtcbiAgICAgICAgcmV0dXJuIHRoaXMuX3F1ZXJpZXMuc2VydmVyTm93KCk7XG4gICAgfVxuXG4gICAgYXN5bmMgZ2V0TWFuYWdlbWVudEFjY2Vzc0tleSgpOiBQcm9taXNlPHN0cmluZz4ge1xuICAgICAgICBjb25zdCByZXN1bHQgPSBhd2FpdCB0aGlzLl9xdWVyaWVzLnF1ZXJ5KCdxdWVyeXtnZXRNYW5hZ2VtZW50QWNjZXNzS2V5fScpO1xuICAgICAgICByZXR1cm4gcmVzdWx0LmRhdGEuZ2V0TWFuYWdlbWVudEFjY2Vzc0tleTtcbiAgICB9XG5cblxuICAgIGFzeW5jIF9yZXNvbHZlU2lnbmVkTWFuYWdlbWVudEFjY2Vzc0tleShwYXJhbXM6IFRPTkFjY2Vzc0tleXNNYW5hZ2VtZW50UGFyYW1zKTogUHJvbWlzZTxzdHJpbmc+IHtcbiAgICAgICAgaWYgKHBhcmFtcy5zaWduZWRNYW5hZ2VtZW50QWNjZXNzS2V5KSB7XG4gICAgICAgICAgICByZXR1cm4gcGFyYW1zLnNpZ25lZE1hbmFnZW1lbnRBY2Nlc3NLZXk7XG4gICAgICAgIH1cbiAgICAgICAgY29uc3Qgc2lnbktleXMgPSBwYXJhbXMuYWNjb3VudEtleXM7XG4gICAgICAgIGlmIChzaWduS2V5cykge1xuICAgICAgICAgICAgY29uc3QgbWFuYWdlbWVudEFjY2Vzc0tleSA9IGF3YWl0IHRoaXMuZ2V0TWFuYWdlbWVudEFjY2Vzc0tleSgpO1xuICAgICAgICAgICAgcmV0dXJuIHRoaXMuY3J5cHRvLm5hY2xTaWduKFxuICAgICAgICAgICAgICAgIHsgdGV4dDogbWFuYWdlbWVudEFjY2Vzc0tleSB9LFxuICAgICAgICAgICAgICAgIGAke3NpZ25LZXlzLnNlY3JldH0ke3NpZ25LZXlzLnB1YmxpY31gLFxuICAgICAgICAgICAgICAgICdIZXgnKTtcbiAgICAgICAgfVxuICAgICAgICByZXR1cm4gJyc7XG4gICAgfVxuXG4gICAgYXN5bmMgcmVnaXN0ZXJBY2Nlc3NLZXlzKFxuICAgICAgICBwYXJhbXM6IFRPTlJlZ2lzdGVyQWNjZXNzS2V5c1BhcmFtc1xuICAgICk6IFByb21pc2U8bnVtYmVyPiB7XG4gICAgICAgIGNvbnN0IHNpZ25lZE1hbmFnZW1lbnRBY2Nlc3NLZXkgPSBhd2FpdCB0aGlzLl9yZXNvbHZlU2lnbmVkTWFuYWdlbWVudEFjY2Vzc0tleShwYXJhbXMpO1xuICAgICAgICBjb25zdCByZXN1bHQgPSBhd2FpdCB0aGlzLl9xdWVyaWVzLm11dGF0aW9uKFxuICAgICAgICAgICAgYG11dGF0aW9uIHJlZ2lzdGVyQWNjZXNzS2V5cygkYWNjb3VudDogU3RyaW5nLCAka2V5czogW0FjY2Vzc0tleV0sICRzaWduZWRNYW5hZ2VtZW50QWNjZXNzS2V5OiBTdHJpbmcpIHtcbiAgICAgICAgICAgICAgICAgICAgcmVnaXN0ZXJBY2Nlc3NLZXlzKGFjY291bnQ6ICRhY2NvdW50LCBrZXlzOiAka2V5cywgc2lnbmVkTWFuYWdlbWVudEFjY2Vzc0tleTogJHNpZ25lZE1hbmFnZW1lbnRBY2Nlc3NLZXkpXG4gICAgICAgICAgICAgICAgfWAsIHtcbiAgICAgICAgICAgICAgICBhY2NvdW50OiBwYXJhbXMuYWNjb3VudCxcbiAgICAgICAgICAgICAgICBrZXlzOiBwYXJhbXMua2V5cyxcbiAgICAgICAgICAgICAgICBzaWduZWRNYW5hZ2VtZW50QWNjZXNzS2V5LFxuICAgICAgICAgICAgfSk7XG4gICAgICAgIHJldHVybiByZXN1bHQuZGF0YS5yZWdpc3RlckFjY2Vzc0tleXM7XG4gICAgfVxuXG4gICAgYXN5bmMgcmV2b2tlQWNjZXNzS2V5cyhcbiAgICAgICAgcGFyYW1zOiBUT05SZXZva2VBY2Nlc3NLZXlzUGFyYW1zXG4gICAgKTogUHJvbWlzZTxudW1iZXI+IHtcbiAgICAgICAgY29uc3Qgc2lnbmVkTWFuYWdlbWVudEFjY2Vzc0tleSA9IGF3YWl0IHRoaXMuX3Jlc29sdmVTaWduZWRNYW5hZ2VtZW50QWNjZXNzS2V5KHBhcmFtcyk7XG4gICAgICAgIGNvbnN0IHJlc3VsdCA9IGF3YWl0IHRoaXMuX3F1ZXJpZXMubXV0YXRpb24oXG4gICAgICAgICAgICBgbXV0YXRpb24gcmV2b2tlQWNjZXNzS2V5cygkYWNjb3VudDogU3RyaW5nLCAka2V5czogW1N0cmluZ10sICRzaWduZWRNYW5hZ2VtZW50QWNjZXNzS2V5OiBTdHJpbmcpIHtcbiAgICAgICAgICAgICAgICAgICAgcmV2b2tlQWNjZXNzS2V5cyhhY2NvdW50OiAkYWNjb3VudCwga2V5czogJGtleXMsIHNpZ25lZE1hbmFnZW1lbnRBY2Nlc3NLZXk6ICRzaWduZWRNYW5hZ2VtZW50QWNjZXNzS2V5KVxuICAgICAgICAgICAgICAgIH1gLCB7XG4gICAgICAgICAgICAgICAgYWNjb3VudDogcGFyYW1zLmFjY291bnQsXG4gICAgICAgICAgICAgICAga2V5czogcGFyYW1zLmtleXMsXG4gICAgICAgICAgICAgICAgc2lnbmVkTWFuYWdlbWVudEFjY2Vzc0tleSxcbiAgICAgICAgICAgIH0pO1xuICAgICAgICByZXR1cm4gcmVzdWx0LmRhdGEucmV2b2tlQWNjZXNzS2V5cztcbiAgICB9XG5cbiAgICBhc3luYyB0cmFjZTxUPihcbiAgICAgICAgbmFtZTogc3RyaW5nLFxuICAgICAgICBmOiAoc3BhbjogU3BhbikgPT4gUHJvbWlzZTxUPixcbiAgICAgICAgcGFyZW50U3Bhbj86IChTcGFuIHwgU3BhbkNvbnRleHQpXG4gICAgKTogUHJvbWlzZTxUPiB7XG4gICAgICAgIGNvbnN0IHNwYW4gPSB0aGlzLmNvbmZpZy50cmFjZXIuc3RhcnRTcGFuKG5hbWUsIHsgY2hpbGRPZjogcGFyZW50U3BhbiB9KTtcbiAgICAgICAgdHJ5IHtcbiAgICAgICAgICAgIHNwYW4uc2V0VGFnKFRhZ3MuU1BBTl9LSU5ELCAnY2xpZW50Jyk7XG4gICAgICAgICAgICBjb25zdCByZXN1bHQgPSBhd2FpdCBmKHNwYW4pO1xuICAgICAgICAgICAgaWYgKHJlc3VsdCAhPT0gdW5kZWZpbmVkKSB7XG4gICAgICAgICAgICAgICAgc3Bhbi5zZXRUYWcoJ3Jlc3VsdCcsIHJlc3VsdCk7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBzcGFuLmZpbmlzaCgpO1xuICAgICAgICAgICAgcmV0dXJuIHJlc3VsdDtcbiAgICAgICAgfSBjYXRjaCAoZXJyb3IpIHtcbiAgICAgICAgICAgIHNwYW4ubG9nKHsgZXZlbnQ6ICdmYWlsZWQnLCBwYXlsb2FkOiBlcnJvciB9KTtcbiAgICAgICAgICAgIHNwYW4uZmluaXNoKCk7XG4gICAgICAgICAgICB0aHJvdyBlcnJvcjtcbiAgICAgICAgfVxuICAgIH1cblxuICAgIC8vIEludGVybmFsc1xuXG4gICAgc3RhdGljIGNsaWVudFBsYXRmb3JtOiA/VE9OQ2xpZW50UGxhdGZvcm0gPSBudWxsO1xuICAgIHN0YXRpYyBjb3JlOiA/VE9OQ2xpZW50TGlicmFyeSA9IG51bGw7XG5cbiAgICBtb2R1bGVzOiBNYXA8c3RyaW5nLCBUT05Nb2R1bGU+O1xufVxuXG5cbmV4cG9ydCBjb25zdCBUT05FcnJvclNvdXJjZSA9IHtcbiAgICBDTElFTlQ6ICdjbGllbnQnLFxuICAgIE5PREU6ICdub2RlJ1xufTtcblxuZXhwb3J0IGNvbnN0IFRPTkVycm9yQ29kZSA9IHtcbiAgICBDTElFTlRfRE9FU19OT1RfQ09ORklHVVJFRDogMTAwMCxcbiAgICBTRU5EX05PREVfUkVRVUVTVF9GQUlMRUQ6IDEwMDEsXG4gICAgTUVTU0FHRV9BTFJFQURZX0VYUElSRUQ6IDEwMDEsXG4gICAgUlVOX0xPQ0FMX0FDQ09VTlRfRE9FU19OT1RfRVhJU1RTOiAxMDAyLFxuICAgIFdBSVRfRk9SX1RJTUVPVVQ6IDEwMDMsXG4gICAgSU5URVJOQUxfRVJST1I6IDEwMDQsXG4gICAgUVVFUllfRkFJTEVEOiAxMDA1LFxuICAgIE1FU1NBR0VfRVhQSVJFRDogMTAwNixcbiAgICBTRVJWRVJfRE9FU05UX1NVUFBPUlRfQUdHUkVHQVRJT05TOiAxMDA3LFxuICAgIElOVkFMSURfQ09OUzogMTAwOCxcbiAgICBBRERSRVNTX1JFUVVJUkVEX0ZPUl9SVU5fTE9DQUw6IDEwMDksXG4gICAgTkVUV09SS19TSUxFTlQ6IDEwMTAsXG4gICAgVFJBTlNBQ1RJT05fTEFHOiAxMDExLFxuICAgIFRSQU5TQUNUSU9OX1dBSVRfVElNRU9VVDogMTAxMixcbiAgICBDTE9DS19PVVRfT0ZfU1lOQzogMTAxMyxcbiAgICBBQ0NPVU5UX01JU1NJTkc6IDEwMTQsXG4gICAgQUNDT1VOVF9DT0RFX01JU1NJTkc6IDEwMTUsXG4gICAgQUNDT1VOVF9CQUxBTkNFX1RPT19MT1c6IDEwMTYsXG4gICAgQUNDT1VOVF9GUk9aRU5fT1JfREVMRVRFRDogMTAxNyxcblxuICAgIENPTlRSQUNUX0VYRUNVVElPTl9GQUlMRUQ6IDMwMjUsXG5cbn07XG5cbmV4cG9ydCBjb25zdCBUT05Db250cmFjdEV4aXRDb2RlID0ge1xuICAgIFJFUExBWV9QUk9URUNUSU9OOiA1MixcbiAgICBNRVNTQUdFX0VYUElSRUQ6IDU3LFxuICAgIE5PX0dBUzogMTMsXG59XG5cbmV4cG9ydCBjbGFzcyBUT05DbGllbnRFcnJvciB7XG4gICAgc3RhdGljIHNvdXJjZSA9IFRPTkVycm9yU291cmNlO1xuICAgIHN0YXRpYyBjb2RlID0gVE9ORXJyb3JDb2RlO1xuXG4gICAgbWVzc2FnZTogc3RyaW5nO1xuICAgIHNvdXJjZTogc3RyaW5nO1xuICAgIGNvZGU6IG51bWJlcjtcbiAgICBkYXRhOiBhbnk7XG5cbiAgICBjb25zdHJ1Y3RvcihtZXNzYWdlOiBzdHJpbmcsIGNvZGU6IG51bWJlciwgc291cmNlOiBzdHJpbmcsIGRhdGE/OiBhbnkpIHtcbiAgICAgICAgdGhpcy5tZXNzYWdlID0gbWVzc2FnZTtcbiAgICAgICAgdGhpcy5jb2RlID0gY29kZTtcbiAgICAgICAgdGhpcy5zb3VyY2UgPSBzb3VyY2U7XG4gICAgICAgIHRoaXMuZGF0YSA9IGRhdGE7XG4gICAgfVxuXG4gICAgc3RhdGljIGlzQ2xpZW50RXJyb3IoZXJyb3I6IGFueSwgY29kZTogbnVtYmVyKTogYm9vbGVhbiB7XG4gICAgICAgIHJldHVybiAoZXJyb3Iuc291cmNlID09PSBUT05DbGllbnRFcnJvci5zb3VyY2UuQ0xJRU5UKVxuICAgICAgICAgICAgJiYgKGVycm9yLmNvZGUgPT09IGNvZGUpO1xuICAgIH1cblxuICAgIHN0YXRpYyBpc05vZGVFcnJvcihlcnJvcjogYW55LCBjb2RlOiBudW1iZXIpOiBib29sZWFuIHtcbiAgICAgICAgcmV0dXJuIChlcnJvci5zb3VyY2UgPT09IFRPTkNsaWVudEVycm9yLnNvdXJjZS5OT0RFKVxuICAgICAgICAgICAgJiYgKGVycm9yLmNvZGUgPT09IGNvZGUpO1xuICAgIH1cblxuICAgIHN0YXRpYyBpc0NvbnRyYWN0RXJyb3IoZXJyb3I6IGFueSwgZXhpdENvZGU6IG51bWJlcik6IGJvb2xlYW4ge1xuICAgICAgICByZXR1cm4gKGVycm9yLnNvdXJjZSA9PT0gVE9OQ2xpZW50RXJyb3Iuc291cmNlLk5PREUpXG4gICAgICAgICAgICAmJiAoZXJyb3IuY29kZSA9PT0gVE9OQ2xpZW50RXJyb3IuY29kZS5DT05UUkFDVF9FWEVDVVRJT05fRkFJTEVEKVxuICAgICAgICAgICAgJiYgKGVycm9yLmRhdGEgJiYgZXJyb3IuZGF0YS5leGl0X2NvZGUgPT09IGV4aXRDb2RlKTtcbiAgICB9XG5cbiAgICBzdGF0aWMgaW50ZXJuYWxFcnJvcihtZXNzYWdlOiBzdHJpbmcpOiBUT05DbGllbnRFcnJvciB7XG4gICAgICAgIHJldHVybiBuZXcgVE9OQ2xpZW50RXJyb3IoXG4gICAgICAgICAgICBgSW50ZXJuYWwgZXJyb3I6ICR7bWVzc2FnZX1gLFxuICAgICAgICAgICAgVE9OQ2xpZW50RXJyb3IuY29kZS5JTlRFUk5BTF9FUlJPUixcbiAgICAgICAgICAgIFRPTkNsaWVudEVycm9yLnNvdXJjZS5DTElFTlQsXG4gICAgICAgICk7XG4gICAgfVxuXG4gICAgc3RhdGljIGludmFsaWRDb25zKCk6IFRPTkNsaWVudEVycm9yIHtcbiAgICAgICAgcmV0dXJuIG5ldyBUT05DbGllbnRFcnJvcihcbiAgICAgICAgICAgICdJbnZhbGlkIENPTlMgc3RydWN0dXJlLiBFYWNoIENPTlMgaXRlbSBtdXN0IGNvbnRhaW5zIG9mIHR3byBlbGVtZW50cy4nLFxuICAgICAgICAgICAgVE9OQ2xpZW50RXJyb3IuY29kZS5JTlZBTElEX0NPTlMsXG4gICAgICAgICAgICBUT05DbGllbnRFcnJvci5zb3VyY2UuQ0xJRU5ULFxuICAgICAgICApO1xuICAgIH1cblxuICAgIHN0YXRpYyBjbGllbnREb2VzTm90Q29uZmlndXJlZCgpOiBUT05DbGllbnRFcnJvciB7XG4gICAgICAgIHJldHVybiBuZXcgVE9OQ2xpZW50RXJyb3IoXG4gICAgICAgICAgICAnVE9OIENsaWVudCBkb2VzIG5vdCBjb25maWd1cmVkJyxcbiAgICAgICAgICAgIFRPTkNsaWVudEVycm9yLmNvZGUuQ0xJRU5UX0RPRVNfTk9UX0NPTkZJR1VSRUQsXG4gICAgICAgICAgICBUT05DbGllbnRFcnJvci5zb3VyY2UuQ0xJRU5ULFxuICAgICAgICApO1xuICAgIH1cblxuICAgIHN0YXRpYyBzZW5kTm9kZVJlcXVlc3RGYWlsZWQocmVzcG9uc2VUZXh0OiBzdHJpbmcpOiBUT05DbGllbnRFcnJvciB7XG4gICAgICAgIHJldHVybiBuZXcgVE9OQ2xpZW50RXJyb3IoXG4gICAgICAgICAgICBgU2VuZCBub2RlIHJlcXVlc3QgZmFpbGVkOiAke3Jlc3BvbnNlVGV4dH1gLFxuICAgICAgICAgICAgVE9OQ2xpZW50RXJyb3IuY29kZS5TRU5EX05PREVfUkVRVUVTVF9GQUlMRUQsXG4gICAgICAgICAgICBUT05DbGllbnRFcnJvci5zb3VyY2UuQ0xJRU5ULFxuICAgICAgICApO1xuICAgIH1cblxuICAgIHN0YXRpYyBydW5Mb2NhbEFjY291bnREb2VzTm90RXhpc3RzKGZ1bmN0aW9uTmFtZTogc3RyaW5nLCBhZGRyZXNzOiBzdHJpbmcpOiBUT05DbGllbnRFcnJvciB7XG4gICAgICAgIHJldHVybiBuZXcgVE9OQ2xpZW50RXJyb3IoXG4gICAgICAgICAgICBgWyR7ZnVuY3Rpb25OYW1lfV0gcnVuIGxvY2FsIGZhaWxlZDogYWNjb3VudCBbJHthZGRyZXNzfV0gZG9lcyBub3QgZXhpc3RzYCxcbiAgICAgICAgICAgIFRPTkNsaWVudEVycm9yLmNvZGUuUlVOX0xPQ0FMX0FDQ09VTlRfRE9FU19OT1RfRVhJU1RTLFxuICAgICAgICAgICAgVE9OQ2xpZW50RXJyb3Iuc291cmNlLkNMSUVOVCxcbiAgICAgICAgKTtcbiAgICB9XG5cbiAgICBzdGF0aWMgd2FpdEZvclRpbWVvdXQoKSB7XG4gICAgICAgIHJldHVybiBuZXcgVE9OQ2xpZW50RXJyb3IoXG4gICAgICAgICAgICAnV2FpdCBmb3Igb3BlcmF0aW9uIHJlamVjdGVkIG9uIHRpbWVvdXQnLFxuICAgICAgICAgICAgVE9OQ2xpZW50RXJyb3IuY29kZS5XQUlUX0ZPUl9USU1FT1VULFxuICAgICAgICAgICAgVE9OQ2xpZW50RXJyb3Iuc291cmNlLkNMSUVOVCxcbiAgICAgICAgKTtcbiAgICB9XG5cbiAgICBzdGF0aWMgcXVlcnlGYWlsZWQoZXJyb3JzOiBFcnJvcltdKSB7XG4gICAgICAgIHJldHVybiBuZXcgVE9OQ2xpZW50RXJyb3IoXG4gICAgICAgICAgICBgUXVlcnkgZmFpbGVkOiAke2Vycm9ycy5tYXAoeCA9PiB4Lm1lc3NhZ2UgfHwgeC50b1N0cmluZygpKS5qb2luKCdcXG4nKX1gLFxuICAgICAgICAgICAgVE9OQ2xpZW50RXJyb3IuY29kZS5RVUVSWV9GQUlMRUQsXG4gICAgICAgICAgICBUT05DbGllbnRFcnJvci5zb3VyY2UuQ0xJRU5ULFxuICAgICAgICApO1xuICAgIH1cblxuICAgIHN0YXRpYyBmb3JtYXRUaW1lKHRpbWU6ID9udW1iZXIpOiA/c3RyaW5nIHtcbiAgICAgICAgaWYgKHRpbWUpIHtcbiAgICAgICAgICAgIHJldHVybiBgJHtuZXcgRGF0ZSh0aW1lICogMTAwMCkudG9JU09TdHJpbmcoKX0gKCR7dGltZX0pYDtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIHJldHVybiBudWxsO1xuICAgICAgICB9XG4gICAgfVxuXG4gICAgc3RhdGljIG1lc3NhZ2VFeHBpcmVkKG1zZ0lkOiBzdHJpbmcsIHNlbmRUaW1lOiBudW1iZXIsIGV4cGlyZTogP251bWJlciwgYmxvY2tUaW1lOiA/bnVtYmVyKSB7XG4gICAgICAgIHJldHVybiBuZXcgVE9OQ2xpZW50RXJyb3IoXG4gICAgICAgICAgICAnTWVzc2FnZSBleHBpcmVkJyxcbiAgICAgICAgICAgIFRPTkNsaWVudEVycm9yLmNvZGUuTUVTU0FHRV9FWFBJUkVELFxuICAgICAgICAgICAgVE9OQ2xpZW50RXJyb3Iuc291cmNlLkNMSUVOVCxcbiAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICBtZXNzYWdlX2lkOiBtc2dJZCxcbiAgICAgICAgICAgICAgICBzZW5kX3RpbWU6IFRPTkNsaWVudEVycm9yLmZvcm1hdFRpbWUoc2VuZFRpbWUpLFxuICAgICAgICAgICAgICAgIGV4cGlyYXRpb25fdGltZTogVE9OQ2xpZW50RXJyb3IuZm9ybWF0VGltZShleHBpcmUpLFxuICAgICAgICAgICAgICAgIGJsb2NrX3RpbWU6IFRPTkNsaWVudEVycm9yLmZvcm1hdFRpbWUoYmxvY2tUaW1lKSxcbiAgICAgICAgICAgIH1cbiAgICAgICAgKTtcbiAgICB9XG5cbiAgICBzdGF0aWMgc2VydmVyRG9lc250U3VwcG9ydEFnZ3JlZ2F0aW9ucygpIHtcbiAgICAgICAgcmV0dXJuIG5ldyBUT05DbGllbnRFcnJvcihcbiAgICAgICAgICAgICdTZXJ2ZXIgZG9lc25cXCd0IHN1cHBvcnQgYWdncmVnYXRpb25zJyxcbiAgICAgICAgICAgIFRPTkNsaWVudEVycm9yLmNvZGUuU0VSVkVSX0RPRVNOVF9TVVBQT1JUX0FHR1JFR0FUSU9OUyxcbiAgICAgICAgICAgIFRPTkNsaWVudEVycm9yLnNvdXJjZS5DTElFTlQsXG4gICAgICAgICk7XG4gICAgfVxuXG4gICAgc3RhdGljIGFkZHJlc3NSZXF1aXJlZEZvclJ1bkxvY2FsKCkge1xuICAgICAgICByZXR1cm4gbmV3IFRPTkNsaWVudEVycm9yKFxuICAgICAgICAgICAgYEFkZHJlc3MgcmVxdWlyZWQgZm9yIHJ1biBsb2NhbC4gWW91IGhhdmVuJ3Qgc3BlY2lmaWVkIGNvbnRyYWN0IGNvZGUgb3IgZGF0YSBzbyBhZGRyZXNzIGlzIHJlcXVpcmVkIHRvIGxvYWQgbWlzc2luZyBwYXJ0cyBmcm9tIG5ldHdvcmsuYCxcbiAgICAgICAgICAgIFRPTkNsaWVudEVycm9yLmNvZGUuQUREUkVTU19SRVFVSVJFRF9GT1JfUlVOX0xPQ0FMLFxuICAgICAgICAgICAgVE9OQ2xpZW50RXJyb3Iuc291cmNlLkNMSUVOVCxcbiAgICAgICAgKTtcbiAgICB9XG5cbiAgICBzdGF0aWMgbmV0d29ya1NpbGVudChtc2dJZDogc3RyaW5nLCBzZW5kVGltZTogbnVtYmVyLCBleHBpcmU6IG51bWJlciwgdGltZW91dDogbnVtYmVyKSB7XG4gICAgICAgIHJldHVybiBuZXcgVE9OQ2xpZW50RXJyb3IoXG4gICAgICAgICAgICAnTmV0d29yayBzaWxlbnQ6IG5vIGJsb2NrcyBwcm9kdWNlZCBkdXJpbmcgdGltZW91dC4nLFxuICAgICAgICAgICAgVE9OQ2xpZW50RXJyb3IuY29kZS5ORVRXT1JLX1NJTEVOVCxcbiAgICAgICAgICAgIFRPTkNsaWVudEVycm9yLnNvdXJjZS5DTElFTlQsXG4gICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgbWVzc2FnZV9pZDogbXNnSWQsXG4gICAgICAgICAgICAgICAgc2VuZF90aW1lOiBUT05DbGllbnRFcnJvci5mb3JtYXRUaW1lKHNlbmRUaW1lKSxcbiAgICAgICAgICAgICAgICBleHBpcmF0aW9uX3RpbWU6IFRPTkNsaWVudEVycm9yLmZvcm1hdFRpbWUoZXhwaXJlKSxcbiAgICAgICAgICAgICAgICB0aW1lb3V0LFxuICAgICAgICAgICAgfVxuICAgICAgICApO1xuICAgIH1cblxuICAgIHN0YXRpYyB0cmFuc2FjdGlvbkxhZyhtc2dJZDogc3RyaW5nLCBibG9ja0lkOiBzdHJpbmcsIHRyYW5zYWN0aW9uSWQ6IHN0cmluZywgdGltZW91dDogbnVtYmVyKSB7XG4gICAgICAgIHJldHVybiBuZXcgVE9OQ2xpZW50RXJyb3IoXG4gICAgICAgICAgICAnRXhpc3RpbmcgYmxvY2sgdHJhbnNhY3Rpb24gbm90IGZvdW5kLicsXG4gICAgICAgICAgICBUT05DbGllbnRFcnJvci5jb2RlLlRSQU5TQUNUSU9OX0xBRyxcbiAgICAgICAgICAgIFRPTkNsaWVudEVycm9yLnNvdXJjZS5DTElFTlQsXG4gICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgbWVzc2FnZV9pZDogbXNnSWQsXG4gICAgICAgICAgICAgICAgYmxvY2tfaWQ6IGJsb2NrSWQsXG4gICAgICAgICAgICAgICAgdHJhbnNhY3Rpb25faWQ6IHRyYW5zYWN0aW9uSWQsXG4gICAgICAgICAgICAgICAgdGltZW91dCxcbiAgICAgICAgICAgIH1cbiAgICAgICAgKTtcbiAgICB9XG5cbiAgICBzdGF0aWMgdHJhbnNhY3Rpb25XYWl0VGltZW91dChtc2dJZDogc3RyaW5nLCBzZW5kVGltZTogbnVtYmVyLCB0aW1lb3V0OiBudW1iZXIpIHtcbiAgICAgICAgcmV0dXJuIG5ldyBUT05DbGllbnRFcnJvcihcbiAgICAgICAgICAgICdUcmFuc2FjdGlvbiBkaWQgbm90IHByb2R1Y2VkIGR1cmluZyBzcGVjaWZpZWQgdGltZW91dCcsXG4gICAgICAgICAgICBUT05DbGllbnRFcnJvci5jb2RlLlRSQU5TQUNUSU9OX1dBSVRfVElNRU9VVCxcbiAgICAgICAgICAgIFRPTkNsaWVudEVycm9yLnNvdXJjZS5DTElFTlQsXG4gICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgbWVzc2FnZV9pZDogbXNnSWQsXG4gICAgICAgICAgICAgICAgc2VuZF90aW1lOiBUT05DbGllbnRFcnJvci5mb3JtYXRUaW1lKHNlbmRUaW1lKSxcbiAgICAgICAgICAgICAgICB0aW1lb3V0LFxuICAgICAgICAgICAgfVxuICAgICAgICApO1xuICAgIH1cblxuICAgIHN0YXRpYyBjbG9ja091dE9mU3luYygpIHtcbiAgICAgICAgcmV0dXJuIG5ldyBUT05DbGllbnRFcnJvcihcbiAgICAgICAgICAgICdZb3UgbG9jYWwgY2xvY2sgaXMgb3V0IG9mIHN5bmMgd2l0aCB0aGUgc2VydmVyIHRpbWUuICcgK1xuICAgICAgICAgICAgJ0l0IGlzIGEgY3JpdGljYWwgY29uZGl0aW9uIGZvciBzZW5kaW5nIG1lc3NhZ2VzIHRvIHRoZSBibG9ja2NoYWluLiAnICtcbiAgICAgICAgICAgICdQbGVhc2Ugc3luYyB5b3UgY2xvY2sgd2l0aCB0aGUgaW50ZXJuZXQgdGltZS4nLFxuICAgICAgICAgICAgVE9OQ2xpZW50RXJyb3IuY29kZS5DTE9DS19PVVRfT0ZfU1lOQyxcbiAgICAgICAgICAgIFRPTkNsaWVudEVycm9yLnNvdXJjZS5DTElFTlQsXG4gICAgICAgICk7XG4gICAgfVxuXG4gICAgc3RhdGljIGFjY291bnRNaXNzaW5nKGFkZHJlc3M6IHN0cmluZykge1xuICAgICAgICByZXR1cm4gbmV3IFRPTkNsaWVudEVycm9yKFxuICAgICAgICAgICAgYEFjY291bnQgd2l0aCBhZGRyZXNzIFske2FkZHJlc3N9XSBkb2Vzbid0IGV4aXN0cy4gYCArXG4gICAgICAgICAgICAnWW91IGhhdmUgdG8gcHJlcGFpZCB0aGlzIGFjY291bnQgdG8gaGF2ZSBhIHBvc2l0aXZlIGJhbGFuY2Ugb24gdGhlbSBhbmQgdGhlbiBkZXBsb3kgYSBjb250cmFjdCBjb2RlIGZvciB0aGlzIGFjY291bnQuJyArXG4gICAgICAgICAgICAnU2VlIFNESyBkb2N1bWVudGF0aW9uIGZvciBkZXRhaWxlZCBpbnN0cnVjdGlvbnMuJyxcbiAgICAgICAgICAgIFRPTkNsaWVudEVycm9yLmNvZGUuQUNDT1VOVF9NSVNTSU5HLFxuICAgICAgICAgICAgVE9OQ2xpZW50RXJyb3Iuc291cmNlLkNMSUVOVCxcbiAgICAgICAgKTtcbiAgICB9XG5cbiAgICBzdGF0aWMgYWNjb3VudENvZGVNaXNzaW5nKGFkZHJlc3M6IHN0cmluZywgYmFsYW5jZTogc3RyaW5nKSB7XG4gICAgICAgIHJldHVybiBuZXcgVE9OQ2xpZW50RXJyb3IoXG4gICAgICAgICAgICBgQWNjb3VudCB3aXRoIGFkZHJlc3MgWyR7YWRkcmVzc31dIGV4aXN0cyBidXQgaGF2ZW4ndCBhIGNvbnRyYWN0IGNvZGUgeWV0LiBgICtcbiAgICAgICAgICAgICdZb3UgaGF2ZSB0byBlbnN1cmUgdGhhdCBhbiBhY2NvdW50IGhhcyBhbiBlbm91Z2ggYmFsYW5jZSBmb3IgZGVwbG95aW5nIGEgY29udHJhY3QgY29kZSBhbmQgdGhlbiBkZXBsb3kgYSBjb250cmFjdCBjb2RlIGZvciB0aGlzIGFjY291bnQuICcgK1xuICAgICAgICAgICAgYEN1cnJlbnQgYWNjb3VudCBiYWxhbmNlIGlzIFske2JhbGFuY2V9XS4gYCArXG4gICAgICAgICAgICAnU2VlIFNESyBkb2N1bWVudGF0aW9uIGZvciBkZXRhaWxlZCBpbnN0cnVjdGlvbnMuJyxcbiAgICAgICAgICAgIFRPTkNsaWVudEVycm9yLmNvZGUuQUNDT1VOVF9DT0RFX01JU1NJTkcsXG4gICAgICAgICAgICBUT05DbGllbnRFcnJvci5zb3VyY2UuQ0xJRU5ULFxuICAgICAgICApO1xuICAgIH1cblxuICAgIHN0YXRpYyBhY2NvdW50QmFsYW5jZVRvb0xvdyhhZGRyZXNzOiBzdHJpbmcsIGJhbGFuY2U6IHN0cmluZykge1xuICAgICAgICByZXR1cm4gbmV3IFRPTkNsaWVudEVycm9yKFxuICAgICAgICAgICAgYEFjY291bnQgd2l0aCBhZGRyZXNzIFske2FkZHJlc3N9XSBoYXMgdG9vIGxvdyBiYWxhbmNlIFske2JhbGFuY2V9XS4gYCArXG4gICAgICAgICAgICAnWW91IGhhdmUgdG8gc2VuZCBzb21lIHZhbHVlIHRvIGFjY291bnQgYmFsYW5jZSBmcm9tIG90aGVyIGNvbnRyYWN0IChlLmcuIFdhbGxldCBjb250cmFjdCkuICcgK1xuICAgICAgICAgICAgJ1NlZSBTREsgZG9jdW1lbnRhdGlvbiBmb3IgZGV0YWlsZWQgaW5zdHJ1Y3Rpb25zLicsXG4gICAgICAgICAgICBUT05DbGllbnRFcnJvci5jb2RlLkFDQ09VTlRfQkFMQU5DRV9UT09fTE9XLFxuICAgICAgICAgICAgVE9OQ2xpZW50RXJyb3Iuc291cmNlLkNMSUVOVCxcbiAgICAgICAgKTtcbiAgICB9XG5cbiAgICBzdGF0aWMgaXNNZXNzYWdlRXhwaXJlZChlcnJvcjogYW55KTogYm9vbGVhbiB7XG4gICAgICAgIHJldHVybiBUT05DbGllbnRFcnJvci5pc0NsaWVudEVycm9yKGVycm9yLCBUT05DbGllbnRFcnJvci5jb2RlLk1FU1NBR0VfRVhQSVJFRCk7XG4gICAgfVxuXG4gICAgc3RhdGljIGlzV2FpdGZvclRpbWVvdXQoZXJyb3I6IGFueSk6IGJvb2xlYW4ge1xuICAgICAgICByZXR1cm4gVE9OQ2xpZW50RXJyb3IuaXNDbGllbnRFcnJvcihlcnJvciwgVE9OQ2xpZW50RXJyb3IuY29kZS5XQUlUX0ZPUl9USU1FT1VUKTtcbiAgICB9XG59XG4iXX0=