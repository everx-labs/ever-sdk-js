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

    _defineProperty(this, "_context", void 0);

    _defineProperty(this, "_core", void 0);

    _defineProperty(this, "modules", void 0);

    this.modules = new Map();
    this.config = this.getModule(_TONConfigModule["default"]);
    this.crypto = this.getModule(_TONCryptoModule["default"]);
    this.contracts = this.getModule(_TONContractsModule["default"]);
    this._queries = this.getModule(_TONQueriesModule["default"]);
    this.queries = this._queries;
    this._context = 0;
    this._core = null;
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
        var _this = this;

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
                if (!this._core) {
                  if (TONClient.core.coreCreateContext1) {
                    this._context = TONClient.core.coreCreateContext();
                    this._core = {
                      request: function request(method, paramsJson, onResult) {
                        TONClient.core.coreRequest(_this._context, method, paramsJson, onResult);
                      }
                    };
                  } else {
                    this._core = TONClient.core;
                  }
                }

                modules = _toConsumableArray(this.modules.values());
                _iterator = _createForOfIteratorHelper(modules);
                _context.prev = 9;

                _iterator.s();

              case 11:
                if ((_step = _iterator.n()).done) {
                  _context.next = 17;
                  break;
                }

                module = _step.value;
                _context.next = 15;
                return module.setup();

              case 15:
                _context.next = 11;
                break;

              case 17:
                _context.next = 22;
                break;

              case 19:
                _context.prev = 19;
                _context.t0 = _context["catch"](9);

                _iterator.e(_context.t0);

              case 22:
                _context.prev = 22;

                _iterator.f();

                return _context.finish(22);

              case 25:
              case "end":
                return _context.stop();
            }
          }
        }, _callee, this, [[9, 19, 22, 25]]);
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
                if (this._context > 0) {
                  TONClient.core.coreDestroyContext(this._context);
                  this._context = 0;
                }

              case 3:
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
      return this._core;
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
    value: function messageExpired(data) {
      return new TONClientError('Message expired', TONClientError.code.MESSAGE_EXPIRED, TONClientError.source.CLIENT, {
        messageId: data.msgId,
        sendTime: TONClientError.formatTime(data.sendTime),
        expirationTime: TONClientError.formatTime(data.expire),
        blockTime: TONClientError.formatTime(data.blockTime)
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
    value: function networkSilent(data) {
      return new TONClientError('Network silent: no blocks produced during timeout.', TONClientError.code.NETWORK_SILENT, TONClientError.source.CLIENT, {
        messageId: data.msgId,
        sendTime: TONClientError.formatTime(data.sendTime),
        expirationTime: TONClientError.formatTime(data.expire),
        timeout: data.timeout
      });
    }
  }, {
    key: "transactionLag",
    value: function transactionLag(data) {
      return new TONClientError('Existing block transaction not found (no transaction appeared for the masterchain block with gen_utime > message expiration time)', TONClientError.code.TRANSACTION_LAG, TONClientError.source.CLIENT, {
        messageId: data.msgId,
        blockId: data.blockId,
        transactionId: data.transactionId,
        timeout: data.timeout
      });
    }
  }, {
    key: "transactionWaitTimeout",
    value: function transactionWaitTimeout(data) {
      return new TONClientError('Transaction did not produced during specified timeout', TONClientError.code.TRANSACTION_WAIT_TIMEOUT, TONClientError.source.CLIENT, {
        messageId: data.msgId,
        sendTime: TONClientError.formatTime(data.sendTime),
        timeout: data.timeout
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
    key: "isWaitForTimeout",
    value: function isWaitForTimeout(error) {
      return TONClientError.isClientError(error, TONClientError.code.WAIT_FOR_TIMEOUT);
    }
  }]);

  return TONClientError;
}();

exports.TONClientError = TONClientError;

_defineProperty(TONClientError, "source", TONErrorSource);

_defineProperty(TONClientError, "code", TONErrorCode);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uL3NyYy9UT05DbGllbnQuanMiXSwibmFtZXMiOlsiVE9OQ2xpZW50IiwiY2xpZW50UGxhdGZvcm0iLCJtb2R1bGVzIiwiTWFwIiwiY29uZmlnIiwiZ2V0TW9kdWxlIiwiVE9OQ29uZmlnTW9kdWxlIiwiY3J5cHRvIiwiVE9OQ3J5cHRvTW9kdWxlIiwiY29udHJhY3RzIiwiVE9OQ29udHJhY3RzTW9kdWxlIiwiX3F1ZXJpZXMiLCJUT05RdWVyaWVzTW9kdWxlIiwicXVlcmllcyIsIl9jb250ZXh0IiwiX2NvcmUiLCJjb3JlIiwiY3JlYXRlTGlicmFyeSIsImNvcmVDcmVhdGVDb250ZXh0MSIsImNvcmVDcmVhdGVDb250ZXh0IiwicmVxdWVzdCIsIm1ldGhvZCIsInBhcmFtc0pzb24iLCJvblJlc3VsdCIsImNvcmVSZXF1ZXN0IiwidmFsdWVzIiwibW9kdWxlIiwic2V0dXAiLCJjbG9zZSIsImNvcmVEZXN0cm95Q29udGV4dCIsIk1vZHVsZUNsYXNzIiwibmFtZSIsIm1vZHVsZU5hbWUiLCJleGlzdGluZ01vZHVsZSIsImdldCIsInNldCIsInNlcnZlclRpbWVEZWx0YSIsInNlcnZlck5vdyIsInF1ZXJ5IiwicmVzdWx0IiwiZGF0YSIsImdldE1hbmFnZW1lbnRBY2Nlc3NLZXkiLCJwYXJhbXMiLCJzaWduZWRNYW5hZ2VtZW50QWNjZXNzS2V5Iiwic2lnbktleXMiLCJhY2NvdW50S2V5cyIsIm1hbmFnZW1lbnRBY2Nlc3NLZXkiLCJuYWNsU2lnbiIsInRleHQiLCJzZWNyZXQiLCJfcmVzb2x2ZVNpZ25lZE1hbmFnZW1lbnRBY2Nlc3NLZXkiLCJtdXRhdGlvbiIsImFjY291bnQiLCJrZXlzIiwicmVnaXN0ZXJBY2Nlc3NLZXlzIiwicmV2b2tlQWNjZXNzS2V5cyIsImYiLCJwYXJlbnRTcGFuIiwic3BhbiIsInRyYWNlciIsInN0YXJ0U3BhbiIsImNoaWxkT2YiLCJzZXRUYWciLCJUYWdzIiwiU1BBTl9LSU5EIiwidW5kZWZpbmVkIiwiZmluaXNoIiwibG9nIiwiZXZlbnQiLCJwYXlsb2FkIiwiY2xpZW50Iiwic2V0RGF0YSIsIlRPTkVycm9yU291cmNlIiwiQ0xJRU5UIiwiTk9ERSIsIlRPTkVycm9yQ29kZSIsIkNMSUVOVF9ET0VTX05PVF9DT05GSUdVUkVEIiwiU0VORF9OT0RFX1JFUVVFU1RfRkFJTEVEIiwiTUVTU0FHRV9BTFJFQURZX0VYUElSRUQiLCJSVU5fTE9DQUxfQUNDT1VOVF9ET0VTX05PVF9FWElTVFMiLCJXQUlUX0ZPUl9USU1FT1VUIiwiSU5URVJOQUxfRVJST1IiLCJRVUVSWV9GQUlMRUQiLCJNRVNTQUdFX0VYUElSRUQiLCJTRVJWRVJfRE9FU05UX1NVUFBPUlRfQUdHUkVHQVRJT05TIiwiSU5WQUxJRF9DT05TIiwiQUREUkVTU19SRVFVSVJFRF9GT1JfUlVOX0xPQ0FMIiwiTkVUV09SS19TSUxFTlQiLCJUUkFOU0FDVElPTl9MQUciLCJUUkFOU0FDVElPTl9XQUlUX1RJTUVPVVQiLCJDTE9DS19PVVRfT0ZfU1lOQyIsIkFDQ09VTlRfTUlTU0lORyIsIkFDQ09VTlRfQ09ERV9NSVNTSU5HIiwiQUNDT1VOVF9CQUxBTkNFX1RPT19MT1ciLCJBQ0NPVU5UX0ZST1pFTl9PUl9ERUxFVEVEIiwiQ09OVFJBQ1RfRVhFQ1VUSU9OX0ZBSUxFRCIsIlRPTkNvbnRyYWN0RXhpdENvZGUiLCJSRVBMQVlfUFJPVEVDVElPTiIsIk5PX0dBUyIsIlRPTkNsaWVudEVycm9yIiwibWVzc2FnZSIsImNvZGUiLCJzb3VyY2UiLCJlcnJvciIsImV4aXRDb2RlIiwiZXhpdF9jb2RlIiwicmVzcG9uc2VUZXh0IiwiZnVuY3Rpb25OYW1lIiwiYWRkcmVzcyIsImVycm9ycyIsIm1hcCIsIngiLCJ0b1N0cmluZyIsImpvaW4iLCJ0aW1lIiwiRGF0ZSIsInRvSVNPU3RyaW5nIiwibWVzc2FnZUlkIiwibXNnSWQiLCJzZW5kVGltZSIsImZvcm1hdFRpbWUiLCJleHBpcmF0aW9uVGltZSIsImV4cGlyZSIsImJsb2NrVGltZSIsInRpbWVvdXQiLCJibG9ja0lkIiwidHJh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LEtBQTdCLEVBQW9DSixjQUFjLENBQUNFLElBQWYsQ0FBb0JyQixnQkFBeEQsQ0FBUDtBQUNIOzs7Ozs7OztnQkF0TlFtQixjLFlBQ08zQixjOztnQkFEUDJCLGMsVUFFS3hCLFkiLCJzb3VyY2VzQ29udGVudCI6WyIvKlxuICogQ29weXJpZ2h0IDIwMTgtMjAyMCBUT04gREVWIFNPTFVUSU9OUyBMVEQuXG4gKi9cbi8vIEBmbG93XG5cbmltcG9ydCB7VGFncywgU3BhbiwgU3BhbkNvbnRleHR9IGZyb20gXCJvcGVudHJhY2luZ1wiO1xuaW1wb3J0IHR5cGUge1xuICAgIElUT05DbGllbnQsXG4gICAgVE9OQWNjZXNzS2V5c01hbmFnZW1lbnRQYXJhbXMsXG4gICAgVE9OQ29uZmlnRGF0YSxcbiAgICBUT05Db250cmFjdHMsXG4gICAgVE9OQ3J5cHRvLFxuICAgIFRPTlF1ZXJpZXMsXG4gICAgVE9OUmVnaXN0ZXJBY2Nlc3NLZXlzUGFyYW1zLFxuICAgIFRPTlJldm9rZUFjY2Vzc0tleXNQYXJhbXMsXG59IGZyb20gXCIuLi90eXBlc1wiO1xuXG5pbXBvcnQgVE9OQ29uZmlnTW9kdWxlIGZyb20gJy4vbW9kdWxlcy9UT05Db25maWdNb2R1bGUnO1xuaW1wb3J0IFRPTkNvbnRyYWN0c01vZHVsZSBmcm9tICcuL21vZHVsZXMvVE9OQ29udHJhY3RzTW9kdWxlJztcbmltcG9ydCBUT05DcnlwdG9Nb2R1bGUgZnJvbSAnLi9tb2R1bGVzL1RPTkNyeXB0b01vZHVsZSc7XG4vKiBlc2xpbnQtZGlzYWJsZSBjbGFzcy1tZXRob2RzLXVzZS10aGlzLCBuby11c2UtYmVmb3JlLWRlZmluZSAqL1xuaW1wb3J0IFRPTlF1ZXJpZXNNb2R1bGUgZnJvbSBcIi4vbW9kdWxlcy9UT05RdWVyaWVzTW9kdWxlXCI7XG5cbmltcG9ydCB0eXBlIHtUT05DbGllbnRDb3JlLCBUT05DbGllbnRMaWJyYXJ5LCBUT05Nb2R1bGVDb250ZXh0fSBmcm9tICcuL1RPTk1vZHVsZSc7XG5pbXBvcnQge1RPTk1vZHVsZX0gZnJvbSAnLi9UT05Nb2R1bGUnO1xuXG4vKipcbiAqIEphdmFTY3JpcHQgcGxhdGZvcm0gc3BlY2lmaWMgY29uZmlndXJhdGlvblxuICovXG50eXBlIFRPTkNsaWVudFBsYXRmb3JtID0ge1xuICAgIC8qKlxuICAgICAqIFBsYXRmb3JtIHNwZWNpZmljIGBmZXRjaGAgZnVuY3Rpb25cbiAgICAgKi9cbiAgICBmZXRjaDogYW55LFxuICAgIC8qKlxuICAgICAqIFBsYXRmb3JtIHNwZWNpZmljIGBXZWJTb2NrZXRgIGltcGxlbWVudGF0aW9uXG4gICAgICogVGhpcyBpbXBsZW1lbnRhdGlvbiBtdXN0IGNvbmZvcm1zIHRvIFczQyBXZWJTb2NrZXRcbiAgICAgKi9cbiAgICBXZWJTb2NrZXQ6IGFueSxcbiAgICAvKipcbiAgICAgKiBSZXF1ZXN0IGNyZWF0aW9uIG9mIHRoZSBjbGllbnQgY29yZVxuICAgICAqL1xuICAgIGNyZWF0ZUxpYnJhcnk6ICgpID0+IFByb21pc2U8VE9OQ2xpZW50TGlicmFyeT4sXG59O1xuXG4vKipcbiAqIE1haW4gb2JqZWN0IHByb3ZpZGVkIGZ1bmN0aW9uYWxpdHkgb2YgdGhlIFRPTiBDbGllbnQgTGlicmFyeVxuICogRWFjaCBpbnN0YW5jZSBvZiBUT05DbGllbnQgaGFzIG93biBzZXQgb2YgVE9OIENsaWVudCBtb2R1bGVzXG4gKiBhbmQgaGFzIG93biBwcmVjb25maWd1cmVkIGNsaWVudCBjb250ZXh0XG4gKi9cbmV4cG9ydCBjbGFzcyBUT05DbGllbnQgaW1wbGVtZW50cyBUT05Nb2R1bGVDb250ZXh0LCBJVE9OQ2xpZW50IHtcbiAgICBzdGF0aWMgc2V0TGlicmFyeShjbGllbnRQbGF0Zm9ybTogVE9OQ2xpZW50UGxhdGZvcm0pIHtcbiAgICAgICAgVE9OQ2xpZW50LmNsaWVudFBsYXRmb3JtID0gY2xpZW50UGxhdGZvcm07XG4gICAgfVxuXG5cbiAgICAvLyBQdWJsaWNcbiAgICBjb25maWc6IFRPTkNvbmZpZ01vZHVsZTtcbiAgICBjcnlwdG86IFRPTkNyeXB0bztcbiAgICBjb250cmFjdHM6IFRPTkNvbnRyYWN0cztcbiAgICBxdWVyaWVzOiBUT05RdWVyaWVzO1xuICAgIF9xdWVyaWVzOiBUT05RdWVyaWVzTW9kdWxlO1xuICAgIF9jb250ZXh0OiBudW1iZXI7XG4gICAgX2NvcmU6ID9UT05DbGllbnRMaWJyYXJ5O1xuXG4gICAgY29uc3RydWN0b3IoKSB7XG4gICAgICAgIHRoaXMubW9kdWxlcyA9IG5ldyBNYXAoKTtcbiAgICAgICAgdGhpcy5jb25maWcgPSB0aGlzLmdldE1vZHVsZShUT05Db25maWdNb2R1bGUpO1xuICAgICAgICB0aGlzLmNyeXB0byA9IHRoaXMuZ2V0TW9kdWxlKFRPTkNyeXB0b01vZHVsZSk7XG4gICAgICAgIHRoaXMuY29udHJhY3RzID0gdGhpcy5nZXRNb2R1bGUoVE9OQ29udHJhY3RzTW9kdWxlKTtcbiAgICAgICAgdGhpcy5fcXVlcmllcyA9IHRoaXMuZ2V0TW9kdWxlKFRPTlF1ZXJpZXNNb2R1bGUpO1xuICAgICAgICB0aGlzLnF1ZXJpZXMgPSB0aGlzLl9xdWVyaWVzO1xuICAgICAgICB0aGlzLl9jb250ZXh0ID0gMDtcbiAgICAgICAgdGhpcy5fY29yZSA9IG51bGw7XG4gICAgfVxuXG4gICAgLyoqXG4gICAgICogQ29udmVuaWVudCB3YXkgdG8gY3JlYXRlIGNvbmZpZ3VyZWQgaW5zdGFuY2Ugb2YgdGhlIFRPTiBDbGllbnRcbiAgICAgKiBAcGFyYW0ge1RPTkNvbmZpZ0RhdGF9IGNvbmZpZ1xuICAgICAqIEByZXR1cm4ge1Byb21pc2U8VE9OQ2xpZW50Pn1cbiAgICAgKi9cbiAgICBzdGF0aWMgYXN5bmMgY3JlYXRlKGNvbmZpZzogVE9OQ29uZmlnRGF0YSk6IFByb21pc2U8VE9OQ2xpZW50PiB7XG4gICAgICAgIGNvbnN0IGNsaWVudCA9IG5ldyBUT05DbGllbnQoKTtcbiAgICAgICAgY2xpZW50LmNvbmZpZy5zZXREYXRhKGNvbmZpZyk7XG4gICAgICAgIGF3YWl0IGNsaWVudC5zZXR1cCgpO1xuICAgICAgICByZXR1cm4gY2xpZW50O1xuICAgIH1cblxuICAgIC8qKlxuICAgICAqIFNldCB1cCB0aGUgY2xpZW50IGluc3RhbmNlXG4gICAgICogQHJldHVybiB7UHJvbWlzZTx2b2lkPn1cbiAgICAgKi9cbiAgICBhc3luYyBzZXR1cCgpOiBQcm9taXNlPHZvaWQ+IHtcbiAgICAgICAgaWYgKCFUT05DbGllbnQuY29yZSkge1xuICAgICAgICAgICAgaWYgKCFUT05DbGllbnQuY2xpZW50UGxhdGZvcm0pIHtcbiAgICAgICAgICAgICAgICByZXR1cm47XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBUT05DbGllbnQuY29yZSA9IGF3YWl0IFRPTkNsaWVudC5jbGllbnRQbGF0Zm9ybS5jcmVhdGVMaWJyYXJ5KCk7XG4gICAgICAgIH1cbiAgICAgICAgaWYgKCF0aGlzLl9jb3JlKSB7XG4gICAgICAgICAgICBpZiAoKFRPTkNsaWVudC5jb3JlOiBhbnkpLmNvcmVDcmVhdGVDb250ZXh0MSkge1xuICAgICAgICAgICAgICAgIHRoaXMuX2NvbnRleHQgPSAoKFRPTkNsaWVudC5jb3JlOiBhbnkpOiBUT05DbGllbnRDb3JlKS5jb3JlQ3JlYXRlQ29udGV4dCgpO1xuICAgICAgICAgICAgICAgIHRoaXMuX2NvcmUgPSB7XG4gICAgICAgICAgICAgICAgICAgIHJlcXVlc3Q6IChcbiAgICAgICAgICAgICAgICAgICAgICAgIG1ldGhvZDogc3RyaW5nLFxuICAgICAgICAgICAgICAgICAgICAgICAgcGFyYW1zSnNvbjogc3RyaW5nLFxuICAgICAgICAgICAgICAgICAgICAgICAgb25SZXN1bHQ6IChyZXN1bHRKc29uOiBzdHJpbmcsIGVycm9ySnNvbjogc3RyaW5nKSA9PiB2b2lkLFxuICAgICAgICAgICAgICAgICAgICApOiB2b2lkID0+IHtcbiAgICAgICAgICAgICAgICAgICAgICAgICgoVE9OQ2xpZW50LmNvcmU6IGFueSk6IFRPTkNsaWVudENvcmUpLmNvcmVSZXF1ZXN0KHRoaXMuX2NvbnRleHQsIG1ldGhvZCwgcGFyYW1zSnNvbiwgb25SZXN1bHQpO1xuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgICB0aGlzLl9jb3JlID0gVE9OQ2xpZW50LmNvcmU7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgICAgY29uc3QgbW9kdWxlczogVE9OTW9kdWxlW10gPSBbLi4udGhpcy5tb2R1bGVzLnZhbHVlcygpXTtcbiAgICAgICAgZm9yIChjb25zdCBtb2R1bGUgb2YgbW9kdWxlcykge1xuICAgICAgICAgICAgYXdhaXQgbW9kdWxlLnNldHVwKCk7XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICAvKipcbiAgICAgKiBUZWFyIGRvd24gdGhpcyBjbGllbnQgaW5zdGFuY2UuXG4gICAgICogTm90ZSB0aGF0IGFmdGVyIHlvdSBoYXZlIGNhbGxlZCB0aGlzIG1ldGhvZCBhbGwgZnV0dXJlIHVzZSBvZiB0aGlzIGluc3RhbmNlIHdpbGwgZmFpbFxuICAgICAqIEByZXR1cm4ge1Byb21pc2U8dm9pZD59XG4gICAgICovXG4gICAgYXN5bmMgY2xvc2UoKTogUHJvbWlzZTx2b2lkPiB7XG4gICAgICAgIGF3YWl0IHRoaXMucXVlcmllcy5jbG9zZSgpO1xuICAgICAgICBpZiAodGhpcy5fY29udGV4dCA+IDApIHtcbiAgICAgICAgICAgICgoVE9OQ2xpZW50LmNvcmU6IGFueSk6IFRPTkNsaWVudENvcmUpLmNvcmVEZXN0cm95Q29udGV4dCh0aGlzLl9jb250ZXh0KTtcbiAgICAgICAgICAgIHRoaXMuX2NvbnRleHQgPSAwO1xuICAgICAgICB9XG4gICAgfVxuXG4gICAgLy8gVE9OTW9kdWxlQ29udGV4dFxuXG4gICAgZ2V0Q29yZSgpOiA/VE9OQ2xpZW50TGlicmFyeSB7XG4gICAgICAgIHJldHVybiB0aGlzLl9jb3JlO1xuICAgIH1cblxuICAgIGdldE1vZHVsZTxUPihNb2R1bGVDbGFzczogdHlwZW9mIFRPTk1vZHVsZSk6IFQge1xuICAgICAgICBjb25zdCBuYW1lID0gTW9kdWxlQ2xhc3MubW9kdWxlTmFtZTtcbiAgICAgICAgY29uc3QgZXhpc3RpbmdNb2R1bGUgPSB0aGlzLm1vZHVsZXMuZ2V0KG5hbWUpO1xuICAgICAgICBpZiAoZXhpc3RpbmdNb2R1bGUpIHtcbiAgICAgICAgICAgIHJldHVybiAoZXhpc3RpbmdNb2R1bGU6IGFueSk7XG4gICAgICAgIH1cbiAgICAgICAgY29uc3QgbW9kdWxlID0gbmV3IE1vZHVsZUNsYXNzKHRoaXMpO1xuICAgICAgICB0aGlzLm1vZHVsZXMuc2V0KG5hbWUsIG1vZHVsZSk7XG4gICAgICAgIHJldHVybiAobW9kdWxlOiBhbnkpO1xuICAgIH1cblxuICAgIHNlcnZlclRpbWVEZWx0YSgpOiBQcm9taXNlPG51bWJlcj4ge1xuICAgICAgICByZXR1cm4gdGhpcy5fcXVlcmllcy5zZXJ2ZXJUaW1lRGVsdGEoKTtcbiAgICB9XG5cbiAgICBzZXJ2ZXJOb3coKTogUHJvbWlzZTxudW1iZXI+IHtcbiAgICAgICAgcmV0dXJuIHRoaXMuX3F1ZXJpZXMuc2VydmVyTm93KCk7XG4gICAgfVxuXG4gICAgYXN5bmMgZ2V0TWFuYWdlbWVudEFjY2Vzc0tleSgpOiBQcm9taXNlPHN0cmluZz4ge1xuICAgICAgICBjb25zdCByZXN1bHQgPSBhd2FpdCB0aGlzLl9xdWVyaWVzLnF1ZXJ5KCdxdWVyeXtnZXRNYW5hZ2VtZW50QWNjZXNzS2V5fScpO1xuICAgICAgICByZXR1cm4gcmVzdWx0LmRhdGEuZ2V0TWFuYWdlbWVudEFjY2Vzc0tleTtcbiAgICB9XG5cblxuICAgIGFzeW5jIF9yZXNvbHZlU2lnbmVkTWFuYWdlbWVudEFjY2Vzc0tleShwYXJhbXM6IFRPTkFjY2Vzc0tleXNNYW5hZ2VtZW50UGFyYW1zKTogUHJvbWlzZTxzdHJpbmc+IHtcbiAgICAgICAgaWYgKHBhcmFtcy5zaWduZWRNYW5hZ2VtZW50QWNjZXNzS2V5KSB7XG4gICAgICAgICAgICByZXR1cm4gcGFyYW1zLnNpZ25lZE1hbmFnZW1lbnRBY2Nlc3NLZXk7XG4gICAgICAgIH1cbiAgICAgICAgY29uc3Qgc2lnbktleXMgPSBwYXJhbXMuYWNjb3VudEtleXM7XG4gICAgICAgIGlmIChzaWduS2V5cykge1xuICAgICAgICAgICAgY29uc3QgbWFuYWdlbWVudEFjY2Vzc0tleSA9IGF3YWl0IHRoaXMuZ2V0TWFuYWdlbWVudEFjY2Vzc0tleSgpO1xuICAgICAgICAgICAgcmV0dXJuIHRoaXMuY3J5cHRvLm5hY2xTaWduKFxuICAgICAgICAgICAgICAgIHsgdGV4dDogbWFuYWdlbWVudEFjY2Vzc0tleSB9LFxuICAgICAgICAgICAgICAgIGAke3NpZ25LZXlzLnNlY3JldH0ke3NpZ25LZXlzLnB1YmxpY31gLFxuICAgICAgICAgICAgICAgICdIZXgnKTtcbiAgICAgICAgfVxuICAgICAgICByZXR1cm4gJyc7XG4gICAgfVxuXG4gICAgYXN5bmMgcmVnaXN0ZXJBY2Nlc3NLZXlzKFxuICAgICAgICBwYXJhbXM6IFRPTlJlZ2lzdGVyQWNjZXNzS2V5c1BhcmFtc1xuICAgICk6IFByb21pc2U8bnVtYmVyPiB7XG4gICAgICAgIGNvbnN0IHNpZ25lZE1hbmFnZW1lbnRBY2Nlc3NLZXkgPSBhd2FpdCB0aGlzLl9yZXNvbHZlU2lnbmVkTWFuYWdlbWVudEFjY2Vzc0tleShwYXJhbXMpO1xuICAgICAgICBjb25zdCByZXN1bHQgPSBhd2FpdCB0aGlzLl9xdWVyaWVzLm11dGF0aW9uKFxuICAgICAgICAgICAgYG11dGF0aW9uIHJlZ2lzdGVyQWNjZXNzS2V5cygkYWNjb3VudDogU3RyaW5nLCAka2V5czogW0FjY2Vzc0tleV0sICRzaWduZWRNYW5hZ2VtZW50QWNjZXNzS2V5OiBTdHJpbmcpIHtcbiAgICAgICAgICAgICAgICAgICAgcmVnaXN0ZXJBY2Nlc3NLZXlzKGFjY291bnQ6ICRhY2NvdW50LCBrZXlzOiAka2V5cywgc2lnbmVkTWFuYWdlbWVudEFjY2Vzc0tleTogJHNpZ25lZE1hbmFnZW1lbnRBY2Nlc3NLZXkpXG4gICAgICAgICAgICAgICAgfWAsIHtcbiAgICAgICAgICAgICAgICBhY2NvdW50OiBwYXJhbXMuYWNjb3VudCxcbiAgICAgICAgICAgICAgICBrZXlzOiBwYXJhbXMua2V5cyxcbiAgICAgICAgICAgICAgICBzaWduZWRNYW5hZ2VtZW50QWNjZXNzS2V5LFxuICAgICAgICAgICAgfSk7XG4gICAgICAgIHJldHVybiByZXN1bHQuZGF0YS5yZWdpc3RlckFjY2Vzc0tleXM7XG4gICAgfVxuXG4gICAgYXN5bmMgcmV2b2tlQWNjZXNzS2V5cyhcbiAgICAgICAgcGFyYW1zOiBUT05SZXZva2VBY2Nlc3NLZXlzUGFyYW1zXG4gICAgKTogUHJvbWlzZTxudW1iZXI+IHtcbiAgICAgICAgY29uc3Qgc2lnbmVkTWFuYWdlbWVudEFjY2Vzc0tleSA9IGF3YWl0IHRoaXMuX3Jlc29sdmVTaWduZWRNYW5hZ2VtZW50QWNjZXNzS2V5KHBhcmFtcyk7XG4gICAgICAgIGNvbnN0IHJlc3VsdCA9IGF3YWl0IHRoaXMuX3F1ZXJpZXMubXV0YXRpb24oXG4gICAgICAgICAgICBgbXV0YXRpb24gcmV2b2tlQWNjZXNzS2V5cygkYWNjb3VudDogU3RyaW5nLCAka2V5czogW1N0cmluZ10sICRzaWduZWRNYW5hZ2VtZW50QWNjZXNzS2V5OiBTdHJpbmcpIHtcbiAgICAgICAgICAgICAgICAgICAgcmV2b2tlQWNjZXNzS2V5cyhhY2NvdW50OiAkYWNjb3VudCwga2V5czogJGtleXMsIHNpZ25lZE1hbmFnZW1lbnRBY2Nlc3NLZXk6ICRzaWduZWRNYW5hZ2VtZW50QWNjZXNzS2V5KVxuICAgICAgICAgICAgICAgIH1gLCB7XG4gICAgICAgICAgICAgICAgYWNjb3VudDogcGFyYW1zLmFjY291bnQsXG4gICAgICAgICAgICAgICAga2V5czogcGFyYW1zLmtleXMsXG4gICAgICAgICAgICAgICAgc2lnbmVkTWFuYWdlbWVudEFjY2Vzc0tleSxcbiAgICAgICAgICAgIH0pO1xuICAgICAgICByZXR1cm4gcmVzdWx0LmRhdGEucmV2b2tlQWNjZXNzS2V5cztcbiAgICB9XG5cbiAgICBhc3luYyB0cmFjZTxUPihcbiAgICAgICAgbmFtZTogc3RyaW5nLFxuICAgICAgICBmOiAoc3BhbjogU3BhbikgPT4gUHJvbWlzZTxUPixcbiAgICAgICAgcGFyZW50U3Bhbj86IChTcGFuIHwgU3BhbkNvbnRleHQpXG4gICAgKTogUHJvbWlzZTxUPiB7XG4gICAgICAgIGNvbnN0IHNwYW4gPSB0aGlzLmNvbmZpZy50cmFjZXIuc3RhcnRTcGFuKG5hbWUsIHsgY2hpbGRPZjogcGFyZW50U3BhbiB9KTtcbiAgICAgICAgdHJ5IHtcbiAgICAgICAgICAgIHNwYW4uc2V0VGFnKFRhZ3MuU1BBTl9LSU5ELCAnY2xpZW50Jyk7XG4gICAgICAgICAgICBjb25zdCByZXN1bHQgPSBhd2FpdCBmKHNwYW4pO1xuICAgICAgICAgICAgaWYgKHJlc3VsdCAhPT0gdW5kZWZpbmVkKSB7XG4gICAgICAgICAgICAgICAgc3Bhbi5zZXRUYWcoJ3Jlc3VsdCcsIHJlc3VsdCk7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBzcGFuLmZpbmlzaCgpO1xuICAgICAgICAgICAgcmV0dXJuIHJlc3VsdDtcbiAgICAgICAgfSBjYXRjaCAoZXJyb3IpIHtcbiAgICAgICAgICAgIHNwYW4ubG9nKHsgZXZlbnQ6ICdmYWlsZWQnLCBwYXlsb2FkOiBlcnJvciB9KTtcbiAgICAgICAgICAgIHNwYW4uZmluaXNoKCk7XG4gICAgICAgICAgICB0aHJvdyBlcnJvcjtcbiAgICAgICAgfVxuICAgIH1cblxuICAgIC8vIEludGVybmFsc1xuXG4gICAgc3RhdGljIGNsaWVudFBsYXRmb3JtOiA/VE9OQ2xpZW50UGxhdGZvcm0gPSBudWxsO1xuICAgIHN0YXRpYyBjb3JlOiA/VE9OQ2xpZW50TGlicmFyeSA9IG51bGw7XG5cbiAgICBtb2R1bGVzOiBNYXA8c3RyaW5nLCBUT05Nb2R1bGU+O1xufVxuXG5cbmV4cG9ydCBjb25zdCBUT05FcnJvclNvdXJjZSA9IHtcbiAgICBDTElFTlQ6ICdjbGllbnQnLFxuICAgIE5PREU6ICdub2RlJ1xufTtcblxuZXhwb3J0IGNvbnN0IFRPTkVycm9yQ29kZSA9IHtcbiAgICBDTElFTlRfRE9FU19OT1RfQ09ORklHVVJFRDogMTAwMCxcbiAgICBTRU5EX05PREVfUkVRVUVTVF9GQUlMRUQ6IDEwMDEsXG4gICAgTUVTU0FHRV9BTFJFQURZX0VYUElSRUQ6IDEwMDEsXG4gICAgUlVOX0xPQ0FMX0FDQ09VTlRfRE9FU19OT1RfRVhJU1RTOiAxMDAyLFxuICAgIFdBSVRfRk9SX1RJTUVPVVQ6IDEwMDMsXG4gICAgSU5URVJOQUxfRVJST1I6IDEwMDQsXG4gICAgUVVFUllfRkFJTEVEOiAxMDA1LFxuICAgIE1FU1NBR0VfRVhQSVJFRDogMTAwNixcbiAgICBTRVJWRVJfRE9FU05UX1NVUFBPUlRfQUdHUkVHQVRJT05TOiAxMDA3LFxuICAgIElOVkFMSURfQ09OUzogMTAwOCxcbiAgICBBRERSRVNTX1JFUVVJUkVEX0ZPUl9SVU5fTE9DQUw6IDEwMDksXG4gICAgTkVUV09SS19TSUxFTlQ6IDEwMTAsXG4gICAgVFJBTlNBQ1RJT05fTEFHOiAxMDExLFxuICAgIFRSQU5TQUNUSU9OX1dBSVRfVElNRU9VVDogMTAxMixcbiAgICBDTE9DS19PVVRfT0ZfU1lOQzogMTAxMyxcbiAgICBBQ0NPVU5UX01JU1NJTkc6IDEwMTQsXG4gICAgQUNDT1VOVF9DT0RFX01JU1NJTkc6IDEwMTUsXG4gICAgQUNDT1VOVF9CQUxBTkNFX1RPT19MT1c6IDEwMTYsXG4gICAgQUNDT1VOVF9GUk9aRU5fT1JfREVMRVRFRDogMTAxNyxcblxuICAgIENPTlRSQUNUX0VYRUNVVElPTl9GQUlMRUQ6IDMwMjUsXG5cbn07XG5cbmV4cG9ydCBjb25zdCBUT05Db250cmFjdEV4aXRDb2RlID0ge1xuICAgIFJFUExBWV9QUk9URUNUSU9OOiA1MixcbiAgICBNRVNTQUdFX0VYUElSRUQ6IDU3LFxuICAgIE5PX0dBUzogMTMsXG59XG5cbmV4cG9ydCBjbGFzcyBUT05DbGllbnRFcnJvciB7XG4gICAgc3RhdGljIHNvdXJjZSA9IFRPTkVycm9yU291cmNlO1xuICAgIHN0YXRpYyBjb2RlID0gVE9ORXJyb3JDb2RlO1xuXG4gICAgbWVzc2FnZTogc3RyaW5nO1xuICAgIHNvdXJjZTogc3RyaW5nO1xuICAgIGNvZGU6IG51bWJlcjtcbiAgICBkYXRhOiBhbnk7XG5cbiAgICBjb25zdHJ1Y3RvcihtZXNzYWdlOiBzdHJpbmcsIGNvZGU6IG51bWJlciwgc291cmNlOiBzdHJpbmcsIGRhdGE/OiBhbnkpIHtcbiAgICAgICAgdGhpcy5tZXNzYWdlID0gbWVzc2FnZTtcbiAgICAgICAgdGhpcy5jb2RlID0gY29kZTtcbiAgICAgICAgdGhpcy5zb3VyY2UgPSBzb3VyY2U7XG4gICAgICAgIHRoaXMuZGF0YSA9IGRhdGE7XG4gICAgfVxuXG4gICAgc3RhdGljIGlzQ2xpZW50RXJyb3IoZXJyb3I6IGFueSwgY29kZTogbnVtYmVyKTogYm9vbGVhbiB7XG4gICAgICAgIHJldHVybiAoZXJyb3Iuc291cmNlID09PSBUT05DbGllbnRFcnJvci5zb3VyY2UuQ0xJRU5UKVxuICAgICAgICAgICAgJiYgKGVycm9yLmNvZGUgPT09IGNvZGUpO1xuICAgIH1cblxuICAgIHN0YXRpYyBpc05vZGVFcnJvcihlcnJvcjogYW55LCBjb2RlOiBudW1iZXIpOiBib29sZWFuIHtcbiAgICAgICAgcmV0dXJuIChlcnJvci5zb3VyY2UgPT09IFRPTkNsaWVudEVycm9yLnNvdXJjZS5OT0RFKVxuICAgICAgICAgICAgJiYgKGVycm9yLmNvZGUgPT09IGNvZGUpO1xuICAgIH1cblxuICAgIHN0YXRpYyBpc0NvbnRyYWN0RXJyb3IoZXJyb3I6IGFueSwgZXhpdENvZGU6IG51bWJlcik6IGJvb2xlYW4ge1xuICAgICAgICByZXR1cm4gKGVycm9yLnNvdXJjZSA9PT0gVE9OQ2xpZW50RXJyb3Iuc291cmNlLk5PREUpXG4gICAgICAgICAgICAmJiAoZXJyb3IuY29kZSA9PT0gVE9OQ2xpZW50RXJyb3IuY29kZS5DT05UUkFDVF9FWEVDVVRJT05fRkFJTEVEKVxuICAgICAgICAgICAgJiYgKGVycm9yLmRhdGEgJiYgZXJyb3IuZGF0YS5leGl0X2NvZGUgPT09IGV4aXRDb2RlKTtcbiAgICB9XG5cbiAgICBzdGF0aWMgaW50ZXJuYWxFcnJvcihtZXNzYWdlOiBzdHJpbmcpOiBUT05DbGllbnRFcnJvciB7XG4gICAgICAgIHJldHVybiBuZXcgVE9OQ2xpZW50RXJyb3IoXG4gICAgICAgICAgICBgSW50ZXJuYWwgZXJyb3I6ICR7bWVzc2FnZX1gLFxuICAgICAgICAgICAgVE9OQ2xpZW50RXJyb3IuY29kZS5JTlRFUk5BTF9FUlJPUixcbiAgICAgICAgICAgIFRPTkNsaWVudEVycm9yLnNvdXJjZS5DTElFTlQsXG4gICAgICAgICk7XG4gICAgfVxuXG4gICAgc3RhdGljIGludmFsaWRDb25zKCk6IFRPTkNsaWVudEVycm9yIHtcbiAgICAgICAgcmV0dXJuIG5ldyBUT05DbGllbnRFcnJvcihcbiAgICAgICAgICAgICdJbnZhbGlkIENPTlMgc3RydWN0dXJlLiBFYWNoIENPTlMgaXRlbSBtdXN0IGNvbnRhaW5zIG9mIHR3byBlbGVtZW50cy4nLFxuICAgICAgICAgICAgVE9OQ2xpZW50RXJyb3IuY29kZS5JTlZBTElEX0NPTlMsXG4gICAgICAgICAgICBUT05DbGllbnRFcnJvci5zb3VyY2UuQ0xJRU5ULFxuICAgICAgICApO1xuICAgIH1cblxuICAgIHN0YXRpYyBjbGllbnREb2VzTm90Q29uZmlndXJlZCgpOiBUT05DbGllbnRFcnJvciB7XG4gICAgICAgIHJldHVybiBuZXcgVE9OQ2xpZW50RXJyb3IoXG4gICAgICAgICAgICAnVE9OIENsaWVudCBkb2VzIG5vdCBjb25maWd1cmVkJyxcbiAgICAgICAgICAgIFRPTkNsaWVudEVycm9yLmNvZGUuQ0xJRU5UX0RPRVNfTk9UX0NPTkZJR1VSRUQsXG4gICAgICAgICAgICBUT05DbGllbnRFcnJvci5zb3VyY2UuQ0xJRU5ULFxuICAgICAgICApO1xuICAgIH1cblxuICAgIHN0YXRpYyBzZW5kTm9kZVJlcXVlc3RGYWlsZWQocmVzcG9uc2VUZXh0OiBzdHJpbmcpOiBUT05DbGllbnRFcnJvciB7XG4gICAgICAgIHJldHVybiBuZXcgVE9OQ2xpZW50RXJyb3IoXG4gICAgICAgICAgICBgU2VuZCBub2RlIHJlcXVlc3QgZmFpbGVkOiAke3Jlc3BvbnNlVGV4dH1gLFxuICAgICAgICAgICAgVE9OQ2xpZW50RXJyb3IuY29kZS5TRU5EX05PREVfUkVRVUVTVF9GQUlMRUQsXG4gICAgICAgICAgICBUT05DbGllbnRFcnJvci5zb3VyY2UuQ0xJRU5ULFxuICAgICAgICApO1xuICAgIH1cblxuICAgIHN0YXRpYyBydW5Mb2NhbEFjY291bnREb2VzTm90RXhpc3RzKGZ1bmN0aW9uTmFtZTogc3RyaW5nLCBhZGRyZXNzOiBzdHJpbmcpOiBUT05DbGllbnRFcnJvciB7XG4gICAgICAgIHJldHVybiBuZXcgVE9OQ2xpZW50RXJyb3IoXG4gICAgICAgICAgICBgWyR7ZnVuY3Rpb25OYW1lfV0gcnVuIGxvY2FsIGZhaWxlZDogYWNjb3VudCBbJHthZGRyZXNzfV0gZG9lcyBub3QgZXhpc3RzYCxcbiAgICAgICAgICAgIFRPTkNsaWVudEVycm9yLmNvZGUuUlVOX0xPQ0FMX0FDQ09VTlRfRE9FU19OT1RfRVhJU1RTLFxuICAgICAgICAgICAgVE9OQ2xpZW50RXJyb3Iuc291cmNlLkNMSUVOVCxcbiAgICAgICAgKTtcbiAgICB9XG5cbiAgICBzdGF0aWMgd2FpdEZvclRpbWVvdXQoKSB7XG4gICAgICAgIHJldHVybiBuZXcgVE9OQ2xpZW50RXJyb3IoXG4gICAgICAgICAgICAnV2FpdCBmb3Igb3BlcmF0aW9uIHJlamVjdGVkIG9uIHRpbWVvdXQnLFxuICAgICAgICAgICAgVE9OQ2xpZW50RXJyb3IuY29kZS5XQUlUX0ZPUl9USU1FT1VULFxuICAgICAgICAgICAgVE9OQ2xpZW50RXJyb3Iuc291cmNlLkNMSUVOVCxcbiAgICAgICAgKTtcbiAgICB9XG5cbiAgICBzdGF0aWMgcXVlcnlGYWlsZWQoZXJyb3JzOiBFcnJvcltdKSB7XG4gICAgICAgIHJldHVybiBuZXcgVE9OQ2xpZW50RXJyb3IoXG4gICAgICAgICAgICBgUXVlcnkgZmFpbGVkOiAke2Vycm9ycy5tYXAoeCA9PiB4Lm1lc3NhZ2UgfHwgeC50b1N0cmluZygpKS5qb2luKCdcXG4nKX1gLFxuICAgICAgICAgICAgVE9OQ2xpZW50RXJyb3IuY29kZS5RVUVSWV9GQUlMRUQsXG4gICAgICAgICAgICBUT05DbGllbnRFcnJvci5zb3VyY2UuQ0xJRU5ULFxuICAgICAgICApO1xuICAgIH1cblxuICAgIHN0YXRpYyBmb3JtYXRUaW1lKHRpbWU6ID9udW1iZXIpOiA/c3RyaW5nIHtcbiAgICAgICAgaWYgKHRpbWUpIHtcbiAgICAgICAgICAgIHJldHVybiBgJHtuZXcgRGF0ZSh0aW1lICogMTAwMCkudG9JU09TdHJpbmcoKX0gKCR7dGltZX0pYDtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIHJldHVybiBudWxsO1xuICAgICAgICB9XG4gICAgfVxuXG4gICAgc3RhdGljIG1lc3NhZ2VFeHBpcmVkKGRhdGE6IHsgbXNnSWQ6IHN0cmluZywgc2VuZFRpbWU6IG51bWJlciwgZXhwaXJlOiA/bnVtYmVyLCBibG9ja1RpbWU6ID9udW1iZXIgfSkge1xuICAgICAgICByZXR1cm4gbmV3IFRPTkNsaWVudEVycm9yKFxuICAgICAgICAgICAgJ01lc3NhZ2UgZXhwaXJlZCcsXG4gICAgICAgICAgICBUT05DbGllbnRFcnJvci5jb2RlLk1FU1NBR0VfRVhQSVJFRCxcbiAgICAgICAgICAgIFRPTkNsaWVudEVycm9yLnNvdXJjZS5DTElFTlQsXG4gICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgbWVzc2FnZUlkOiBkYXRhLm1zZ0lkLFxuICAgICAgICAgICAgICAgIHNlbmRUaW1lOiBUT05DbGllbnRFcnJvci5mb3JtYXRUaW1lKGRhdGEuc2VuZFRpbWUpLFxuICAgICAgICAgICAgICAgIGV4cGlyYXRpb25UaW1lOiBUT05DbGllbnRFcnJvci5mb3JtYXRUaW1lKGRhdGEuZXhwaXJlKSxcbiAgICAgICAgICAgICAgICBibG9ja1RpbWU6IFRPTkNsaWVudEVycm9yLmZvcm1hdFRpbWUoZGF0YS5ibG9ja1RpbWUpLFxuICAgICAgICAgICAgfVxuICAgICAgICApO1xuICAgIH1cblxuICAgIHN0YXRpYyBzZXJ2ZXJEb2VzbnRTdXBwb3J0QWdncmVnYXRpb25zKCkge1xuICAgICAgICByZXR1cm4gbmV3IFRPTkNsaWVudEVycm9yKFxuICAgICAgICAgICAgJ1NlcnZlciBkb2VzblxcJ3Qgc3VwcG9ydCBhZ2dyZWdhdGlvbnMnLFxuICAgICAgICAgICAgVE9OQ2xpZW50RXJyb3IuY29kZS5TRVJWRVJfRE9FU05UX1NVUFBPUlRfQUdHUkVHQVRJT05TLFxuICAgICAgICAgICAgVE9OQ2xpZW50RXJyb3Iuc291cmNlLkNMSUVOVCxcbiAgICAgICAgKTtcbiAgICB9XG5cbiAgICBzdGF0aWMgYWRkcmVzc1JlcXVpcmVkRm9yUnVuTG9jYWwoKSB7XG4gICAgICAgIHJldHVybiBuZXcgVE9OQ2xpZW50RXJyb3IoXG4gICAgICAgICAgICBgQWRkcmVzcyByZXF1aXJlZCBmb3IgcnVuIGxvY2FsLiBZb3UgaGF2ZW4ndCBzcGVjaWZpZWQgY29udHJhY3QgY29kZSBvciBkYXRhIHNvIGFkZHJlc3MgaXMgcmVxdWlyZWQgdG8gbG9hZCBtaXNzaW5nIHBhcnRzIGZyb20gbmV0d29yay5gLFxuICAgICAgICAgICAgVE9OQ2xpZW50RXJyb3IuY29kZS5BRERSRVNTX1JFUVVJUkVEX0ZPUl9SVU5fTE9DQUwsXG4gICAgICAgICAgICBUT05DbGllbnRFcnJvci5zb3VyY2UuQ0xJRU5ULFxuICAgICAgICApO1xuICAgIH1cblxuICAgIHN0YXRpYyBuZXR3b3JrU2lsZW50KGRhdGE6IHsgbXNnSWQ6IHN0cmluZywgc2VuZFRpbWU6IG51bWJlciwgZXhwaXJlOiBudW1iZXIsIHRpbWVvdXQ6IG51bWJlciB9KSB7XG4gICAgICAgIHJldHVybiBuZXcgVE9OQ2xpZW50RXJyb3IoXG4gICAgICAgICAgICAnTmV0d29yayBzaWxlbnQ6IG5vIGJsb2NrcyBwcm9kdWNlZCBkdXJpbmcgdGltZW91dC4nLFxuICAgICAgICAgICAgVE9OQ2xpZW50RXJyb3IuY29kZS5ORVRXT1JLX1NJTEVOVCxcbiAgICAgICAgICAgIFRPTkNsaWVudEVycm9yLnNvdXJjZS5DTElFTlQsXG4gICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgbWVzc2FnZUlkOiBkYXRhLm1zZ0lkLFxuICAgICAgICAgICAgICAgIHNlbmRUaW1lOiBUT05DbGllbnRFcnJvci5mb3JtYXRUaW1lKGRhdGEuc2VuZFRpbWUpLFxuICAgICAgICAgICAgICAgIGV4cGlyYXRpb25UaW1lOiBUT05DbGllbnRFcnJvci5mb3JtYXRUaW1lKGRhdGEuZXhwaXJlKSxcbiAgICAgICAgICAgICAgICB0aW1lb3V0OiBkYXRhLnRpbWVvdXQsXG4gICAgICAgICAgICB9XG4gICAgICAgICk7XG4gICAgfVxuXG4gICAgc3RhdGljIHRyYW5zYWN0aW9uTGFnKGRhdGE6IHsgbXNnSWQ6IHN0cmluZywgYmxvY2tJZDogc3RyaW5nLCB0cmFuc2FjdGlvbklkOiBzdHJpbmcsIHRpbWVvdXQ6IG51bWJlciB9KSB7XG4gICAgICAgIHJldHVybiBuZXcgVE9OQ2xpZW50RXJyb3IoXG4gICAgICAgICAgICAnRXhpc3RpbmcgYmxvY2sgdHJhbnNhY3Rpb24gbm90IGZvdW5kIChubyB0cmFuc2FjdGlvbiBhcHBlYXJlZCBmb3IgdGhlIG1hc3RlcmNoYWluIGJsb2NrIHdpdGggZ2VuX3V0aW1lID4gbWVzc2FnZSBleHBpcmF0aW9uIHRpbWUpJyxcbiAgICAgICAgICAgIFRPTkNsaWVudEVycm9yLmNvZGUuVFJBTlNBQ1RJT05fTEFHLFxuICAgICAgICAgICAgVE9OQ2xpZW50RXJyb3Iuc291cmNlLkNMSUVOVCxcbiAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICBtZXNzYWdlSWQ6IGRhdGEubXNnSWQsXG4gICAgICAgICAgICAgICAgYmxvY2tJZDogZGF0YS5ibG9ja0lkLFxuICAgICAgICAgICAgICAgIHRyYW5zYWN0aW9uSWQ6IGRhdGEudHJhbnNhY3Rpb25JZCxcbiAgICAgICAgICAgICAgICB0aW1lb3V0OiBkYXRhLnRpbWVvdXQsXG4gICAgICAgICAgICB9XG4gICAgICAgICk7XG4gICAgfVxuXG4gICAgc3RhdGljIHRyYW5zYWN0aW9uV2FpdFRpbWVvdXQoZGF0YTogeyBtc2dJZDogc3RyaW5nLCBzZW5kVGltZTogbnVtYmVyLCB0aW1lb3V0OiBudW1iZXIgfSkge1xuICAgICAgICByZXR1cm4gbmV3IFRPTkNsaWVudEVycm9yKFxuICAgICAgICAgICAgJ1RyYW5zYWN0aW9uIGRpZCBub3QgcHJvZHVjZWQgZHVyaW5nIHNwZWNpZmllZCB0aW1lb3V0JyxcbiAgICAgICAgICAgIFRPTkNsaWVudEVycm9yLmNvZGUuVFJBTlNBQ1RJT05fV0FJVF9USU1FT1VULFxuICAgICAgICAgICAgVE9OQ2xpZW50RXJyb3Iuc291cmNlLkNMSUVOVCxcbiAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICBtZXNzYWdlSWQ6IGRhdGEubXNnSWQsXG4gICAgICAgICAgICAgICAgc2VuZFRpbWU6IFRPTkNsaWVudEVycm9yLmZvcm1hdFRpbWUoZGF0YS5zZW5kVGltZSksXG4gICAgICAgICAgICAgICAgdGltZW91dDogZGF0YS50aW1lb3V0LFxuICAgICAgICAgICAgfVxuICAgICAgICApO1xuICAgIH1cblxuICAgIHN0YXRpYyBjbG9ja091dE9mU3luYygpIHtcbiAgICAgICAgcmV0dXJuIG5ldyBUT05DbGllbnRFcnJvcihcbiAgICAgICAgICAgICdZb3UgbG9jYWwgY2xvY2sgaXMgb3V0IG9mIHN5bmMgd2l0aCB0aGUgc2VydmVyIHRpbWUuICcgK1xuICAgICAgICAgICAgJ0l0IGlzIGEgY3JpdGljYWwgY29uZGl0aW9uIGZvciBzZW5kaW5nIG1lc3NhZ2VzIHRvIHRoZSBibG9ja2NoYWluLiAnICtcbiAgICAgICAgICAgICdQbGVhc2Ugc3luYyB5b3UgY2xvY2sgd2l0aCB0aGUgaW50ZXJuZXQgdGltZS4nLFxuICAgICAgICAgICAgVE9OQ2xpZW50RXJyb3IuY29kZS5DTE9DS19PVVRfT0ZfU1lOQyxcbiAgICAgICAgICAgIFRPTkNsaWVudEVycm9yLnNvdXJjZS5DTElFTlQsXG4gICAgICAgICk7XG4gICAgfVxuXG4gICAgc3RhdGljIGFjY291bnRNaXNzaW5nKGFkZHJlc3M6IHN0cmluZykge1xuICAgICAgICByZXR1cm4gbmV3IFRPTkNsaWVudEVycm9yKFxuICAgICAgICAgICAgYEFjY291bnQgd2l0aCBhZGRyZXNzIFske2FkZHJlc3N9XSBkb2Vzbid0IGV4aXN0cy4gYCArXG4gICAgICAgICAgICAnWW91IGhhdmUgdG8gcHJlcGFpZCB0aGlzIGFjY291bnQgdG8gaGF2ZSBhIHBvc2l0aXZlIGJhbGFuY2Ugb24gdGhlbSBhbmQgdGhlbiBkZXBsb3kgYSBjb250cmFjdCBjb2RlIGZvciB0aGlzIGFjY291bnQuJyArXG4gICAgICAgICAgICAnU2VlIFNESyBkb2N1bWVudGF0aW9uIGZvciBkZXRhaWxlZCBpbnN0cnVjdGlvbnMuJyxcbiAgICAgICAgICAgIFRPTkNsaWVudEVycm9yLmNvZGUuQUNDT1VOVF9NSVNTSU5HLFxuICAgICAgICAgICAgVE9OQ2xpZW50RXJyb3Iuc291cmNlLkNMSUVOVCxcbiAgICAgICAgKTtcbiAgICB9XG5cbiAgICBzdGF0aWMgYWNjb3VudENvZGVNaXNzaW5nKGFkZHJlc3M6IHN0cmluZywgYmFsYW5jZTogc3RyaW5nKSB7XG4gICAgICAgIHJldHVybiBuZXcgVE9OQ2xpZW50RXJyb3IoXG4gICAgICAgICAgICBgQWNjb3VudCB3aXRoIGFkZHJlc3MgWyR7YWRkcmVzc31dIGV4aXN0cyBidXQgaGF2ZW4ndCBhIGNvbnRyYWN0IGNvZGUgeWV0LiBgICtcbiAgICAgICAgICAgICdZb3UgaGF2ZSB0byBlbnN1cmUgdGhhdCBhbiBhY2NvdW50IGhhcyBhbiBlbm91Z2ggYmFsYW5jZSBmb3IgZGVwbG95aW5nIGEgY29udHJhY3QgY29kZSBhbmQgdGhlbiBkZXBsb3kgYSBjb250cmFjdCBjb2RlIGZvciB0aGlzIGFjY291bnQuICcgK1xuICAgICAgICAgICAgYEN1cnJlbnQgYWNjb3VudCBiYWxhbmNlIGlzIFske2JhbGFuY2V9XS4gYCArXG4gICAgICAgICAgICAnU2VlIFNESyBkb2N1bWVudGF0aW9uIGZvciBkZXRhaWxlZCBpbnN0cnVjdGlvbnMuJyxcbiAgICAgICAgICAgIFRPTkNsaWVudEVycm9yLmNvZGUuQUNDT1VOVF9DT0RFX01JU1NJTkcsXG4gICAgICAgICAgICBUT05DbGllbnRFcnJvci5zb3VyY2UuQ0xJRU5ULFxuICAgICAgICApO1xuICAgIH1cblxuICAgIHN0YXRpYyBhY2NvdW50QmFsYW5jZVRvb0xvdyhhZGRyZXNzOiBzdHJpbmcsIGJhbGFuY2U6IHN0cmluZykge1xuICAgICAgICByZXR1cm4gbmV3IFRPTkNsaWVudEVycm9yKFxuICAgICAgICAgICAgYEFjY291bnQgd2l0aCBhZGRyZXNzIFske2FkZHJlc3N9XSBoYXMgdG9vIGxvdyBiYWxhbmNlIFske2JhbGFuY2V9XS4gYCArXG4gICAgICAgICAgICAnWW91IGhhdmUgdG8gc2VuZCBzb21lIHZhbHVlIHRvIGFjY291bnQgYmFsYW5jZSBmcm9tIG90aGVyIGNvbnRyYWN0IChlLmcuIFdhbGxldCBjb250cmFjdCkuICcgK1xuICAgICAgICAgICAgJ1NlZSBTREsgZG9jdW1lbnRhdGlvbiBmb3IgZGV0YWlsZWQgaW5zdHJ1Y3Rpb25zLicsXG4gICAgICAgICAgICBUT05DbGllbnRFcnJvci5jb2RlLkFDQ09VTlRfQkFMQU5DRV9UT09fTE9XLFxuICAgICAgICAgICAgVE9OQ2xpZW50RXJyb3Iuc291cmNlLkNMSUVOVCxcbiAgICAgICAgKTtcbiAgICB9XG5cbiAgICBzdGF0aWMgaXNNZXNzYWdlRXhwaXJlZChlcnJvcjogYW55KTogYm9vbGVhbiB7XG4gICAgICAgIHJldHVybiBUT05DbGllbnRFcnJvci5pc0NsaWVudEVycm9yKGVycm9yLCBUT05DbGllbnRFcnJvci5jb2RlLk1FU1NBR0VfRVhQSVJFRCk7XG4gICAgfVxuXG4gICAgc3RhdGljIGlzV2FpdEZvclRpbWVvdXQoZXJyb3I6IGFueSk6IGJvb2xlYW4ge1xuICAgICAgICByZXR1cm4gVE9OQ2xpZW50RXJyb3IuaXNDbGllbnRFcnJvcihlcnJvciwgVE9OQ2xpZW50RXJyb3IuY29kZS5XQUlUX0ZPUl9USU1FT1VUKTtcbiAgICB9XG59XG4iXX0=