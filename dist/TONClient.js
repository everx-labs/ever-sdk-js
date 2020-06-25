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

    _defineProperty(this, "_coreBridge", void 0);

    _defineProperty(this, "modules", void 0);

    this.modules = new Map();
    this.config = this.getModule(_TONConfigModule["default"]);
    this.crypto = this.getModule(_TONCryptoModule["default"]);
    this.contracts = this.getModule(_TONContractsModule["default"]);
    this._queries = this.getModule(_TONQueriesModule["default"]);
    this.queries = this._queries;
    this._context = 0;
    this._coreBridge = null;
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
      var _setup = _asyncToGenerator( /*#__PURE__*/_regenerator["default"].mark(function _callee2() {
        var _this = this;

        var tryCreateLibrary, library, modules, _iterator, _step, module;

        return _regenerator["default"].wrap(function _callee2$(_context2) {
          while (1) {
            switch (_context2.prev = _context2.next) {
              case 0:
                tryCreateLibrary = /*#__PURE__*/function () {
                  var _ref = _asyncToGenerator( /*#__PURE__*/_regenerator["default"].mark(function _callee() {
                    var platform;
                    return _regenerator["default"].wrap(function _callee$(_context) {
                      while (1) {
                        switch (_context.prev = _context.next) {
                          case 0:
                            platform = TONClient.clientPlatform;

                            if (!(platform === null || platform === undefined)) {
                              _context.next = 3;
                              break;
                            }

                            return _context.abrupt("return", null);

                          case 3:
                            _context.next = 5;
                            return platform.createLibrary();

                          case 5:
                            TONClient.coreLibrary = _context.sent;
                            return _context.abrupt("return", TONClient.coreLibrary);

                          case 7:
                          case "end":
                            return _context.stop();
                        }
                      }
                    }, _callee);
                  }));

                  return function tryCreateLibrary() {
                    return _ref.apply(this, arguments);
                  };
                }();

                _context2.t0 = TONClient.coreLibrary;

                if (_context2.t0) {
                  _context2.next = 6;
                  break;
                }

                _context2.next = 5;
                return tryCreateLibrary();

              case 5:
                _context2.t0 = _context2.sent;

              case 6:
                library = _context2.t0;

                if (library) {
                  _context2.next = 9;
                  break;
                }

                return _context2.abrupt("return");

              case 9:
                if (!(this._coreBridge === null || this._coreBridge === undefined)) {
                  _context2.next = 18;
                  break;
                }

                if (!library.coreCreateContext) {
                  _context2.next = 17;
                  break;
                }

                _context2.next = 13;
                return new Promise(function (resolve) {
                  return library.coreCreateContext(resolve);
                });

              case 13:
                this._context = _context2.sent;
                this._coreBridge = {
                  request: function request(method, paramsJson, onResult) {
                    if (TONClient.coreLibrary) {
                      TONClient.coreLibrary.coreRequest(_this._context, method, paramsJson, onResult);
                    }
                  }
                };
                _context2.next = 18;
                break;

              case 17:
                this._coreBridge = library;

              case 18:
                modules = _toConsumableArray(this.modules.values());
                _iterator = _createForOfIteratorHelper(modules);
                _context2.prev = 20;

                _iterator.s();

              case 22:
                if ((_step = _iterator.n()).done) {
                  _context2.next = 28;
                  break;
                }

                module = _step.value;
                _context2.next = 26;
                return module.setup();

              case 26:
                _context2.next = 22;
                break;

              case 28:
                _context2.next = 33;
                break;

              case 30:
                _context2.prev = 30;
                _context2.t1 = _context2["catch"](20);

                _iterator.e(_context2.t1);

              case 33:
                _context2.prev = 33;

                _iterator.f();

                return _context2.finish(33);

              case 36:
              case "end":
                return _context2.stop();
            }
          }
        }, _callee2, this, [[20, 30, 33, 36]]);
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
      var _close = _asyncToGenerator( /*#__PURE__*/_regenerator["default"].mark(function _callee3() {
        var library, context;
        return _regenerator["default"].wrap(function _callee3$(_context3) {
          while (1) {
            switch (_context3.prev = _context3.next) {
              case 0:
                _context3.next = 2;
                return this.queries.close();

              case 2:
                library = TONClient.coreLibrary;

                if (!(this._context > 0 && library !== null && library !== undefined)) {
                  _context3.next = 9;
                  break;
                }

                context = this._context;
                this._coreBridge = null;
                this._context = 0;
                _context3.next = 9;
                return new Promise(function (resolve) {
                  return library.coreDestroyContext(context, resolve);
                });

              case 9:
              case "end":
                return _context3.stop();
            }
          }
        }, _callee3, this);
      }));

      function close() {
        return _close.apply(this, arguments);
      }

      return close;
    }() // TONModuleContext

  }, {
    key: "getCoreBridge",
    value: function getCoreBridge() {
      return this._coreBridge;
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
      var _getManagementAccessKey = _asyncToGenerator( /*#__PURE__*/_regenerator["default"].mark(function _callee4() {
        var result;
        return _regenerator["default"].wrap(function _callee4$(_context4) {
          while (1) {
            switch (_context4.prev = _context4.next) {
              case 0:
                _context4.next = 2;
                return this._queries.query('query{getManagementAccessKey}');

              case 2:
                result = _context4.sent;
                return _context4.abrupt("return", result.data.getManagementAccessKey);

              case 4:
              case "end":
                return _context4.stop();
            }
          }
        }, _callee4, this);
      }));

      function getManagementAccessKey() {
        return _getManagementAccessKey.apply(this, arguments);
      }

      return getManagementAccessKey;
    }()
  }, {
    key: "_resolveSignedManagementAccessKey",
    value: function () {
      var _resolveSignedManagementAccessKey2 = _asyncToGenerator( /*#__PURE__*/_regenerator["default"].mark(function _callee5(params) {
        var signKeys, managementAccessKey;
        return _regenerator["default"].wrap(function _callee5$(_context5) {
          while (1) {
            switch (_context5.prev = _context5.next) {
              case 0:
                if (!params.signedManagementAccessKey) {
                  _context5.next = 2;
                  break;
                }

                return _context5.abrupt("return", params.signedManagementAccessKey);

              case 2:
                signKeys = params.accountKeys;

                if (!signKeys) {
                  _context5.next = 8;
                  break;
                }

                _context5.next = 6;
                return this.getManagementAccessKey();

              case 6:
                managementAccessKey = _context5.sent;
                return _context5.abrupt("return", this.crypto.naclSign({
                  text: managementAccessKey
                }, "".concat(signKeys.secret).concat(signKeys["public"]), 'Hex'));

              case 8:
                return _context5.abrupt("return", '');

              case 9:
              case "end":
                return _context5.stop();
            }
          }
        }, _callee5, this);
      }));

      function _resolveSignedManagementAccessKey(_x) {
        return _resolveSignedManagementAccessKey2.apply(this, arguments);
      }

      return _resolveSignedManagementAccessKey;
    }()
  }, {
    key: "registerAccessKeys",
    value: function () {
      var _registerAccessKeys = _asyncToGenerator( /*#__PURE__*/_regenerator["default"].mark(function _callee6(params) {
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
                return this._queries.mutation("mutation registerAccessKeys($account: String, $keys: [AccessKey], $signedManagementAccessKey: String) {\n                    registerAccessKeys(account: $account, keys: $keys, signedManagementAccessKey: $signedManagementAccessKey)\n                }", {
                  account: params.account,
                  keys: params.keys,
                  signedManagementAccessKey: signedManagementAccessKey
                });

              case 5:
                result = _context6.sent;
                return _context6.abrupt("return", result.data.registerAccessKeys);

              case 7:
              case "end":
                return _context6.stop();
            }
          }
        }, _callee6, this);
      }));

      function registerAccessKeys(_x2) {
        return _registerAccessKeys.apply(this, arguments);
      }

      return registerAccessKeys;
    }()
  }, {
    key: "revokeAccessKeys",
    value: function () {
      var _revokeAccessKeys = _asyncToGenerator( /*#__PURE__*/_regenerator["default"].mark(function _callee7(params) {
        var signedManagementAccessKey, result;
        return _regenerator["default"].wrap(function _callee7$(_context7) {
          while (1) {
            switch (_context7.prev = _context7.next) {
              case 0:
                _context7.next = 2;
                return this._resolveSignedManagementAccessKey(params);

              case 2:
                signedManagementAccessKey = _context7.sent;
                _context7.next = 5;
                return this._queries.mutation("mutation revokeAccessKeys($account: String, $keys: [String], $signedManagementAccessKey: String) {\n                    revokeAccessKeys(account: $account, keys: $keys, signedManagementAccessKey: $signedManagementAccessKey)\n                }", {
                  account: params.account,
                  keys: params.keys,
                  signedManagementAccessKey: signedManagementAccessKey
                });

              case 5:
                result = _context7.sent;
                return _context7.abrupt("return", result.data.revokeAccessKeys);

              case 7:
              case "end":
                return _context7.stop();
            }
          }
        }, _callee7, this);
      }));

      function revokeAccessKeys(_x3) {
        return _revokeAccessKeys.apply(this, arguments);
      }

      return revokeAccessKeys;
    }()
  }, {
    key: "trace",
    value: function () {
      var _trace = _asyncToGenerator( /*#__PURE__*/_regenerator["default"].mark(function _callee8(name, f, parentSpan) {
        var span, result;
        return _regenerator["default"].wrap(function _callee8$(_context8) {
          while (1) {
            switch (_context8.prev = _context8.next) {
              case 0:
                span = this.config.tracer.startSpan(name, {
                  childOf: parentSpan
                });
                _context8.prev = 1;
                span.setTag(_opentracing.Tags.SPAN_KIND, 'client');
                _context8.next = 5;
                return f(span);

              case 5:
                result = _context8.sent;

                if (result !== undefined) {
                  span.setTag('result', result);
                }

                span.finish();
                return _context8.abrupt("return", result);

              case 11:
                _context8.prev = 11;
                _context8.t0 = _context8["catch"](1);
                span.log({
                  event: 'failed',
                  payload: _context8.t0
                });
                span.finish();
                throw _context8.t0;

              case 16:
              case "end":
                return _context8.stop();
            }
          }
        }, _callee8, this, [[1, 11]]);
      }));

      function trace(_x4, _x5, _x6) {
        return _trace.apply(this, arguments);
      }

      return trace;
    }() // Internals

  }], [{
    key: "create",
    value: function () {
      var _create = _asyncToGenerator( /*#__PURE__*/_regenerator["default"].mark(function _callee9(config) {
        var client;
        return _regenerator["default"].wrap(function _callee9$(_context9) {
          while (1) {
            switch (_context9.prev = _context9.next) {
              case 0:
                client = new TONClient();
                client.config.setData(config);
                _context9.next = 4;
                return client.setup();

              case 4:
                return _context9.abrupt("return", client);

              case 5:
              case "end":
                return _context9.stop();
            }
          }
        }, _callee9);
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

_defineProperty(TONClient, "coreLibrary", null);

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uL3NyYy9UT05DbGllbnQuanMiXSwibmFtZXMiOlsiVE9OQ2xpZW50IiwiY2xpZW50UGxhdGZvcm0iLCJtb2R1bGVzIiwiTWFwIiwiY29uZmlnIiwiZ2V0TW9kdWxlIiwiVE9OQ29uZmlnTW9kdWxlIiwiY3J5cHRvIiwiVE9OQ3J5cHRvTW9kdWxlIiwiY29udHJhY3RzIiwiVE9OQ29udHJhY3RzTW9kdWxlIiwiX3F1ZXJpZXMiLCJUT05RdWVyaWVzTW9kdWxlIiwicXVlcmllcyIsIl9jb250ZXh0IiwiX2NvcmVCcmlkZ2UiLCJ0cnlDcmVhdGVMaWJyYXJ5IiwicGxhdGZvcm0iLCJ1bmRlZmluZWQiLCJjcmVhdGVMaWJyYXJ5IiwiY29yZUxpYnJhcnkiLCJsaWJyYXJ5IiwiY29yZUNyZWF0ZUNvbnRleHQiLCJQcm9taXNlIiwicmVzb2x2ZSIsInJlcXVlc3QiLCJtZXRob2QiLCJwYXJhbXNKc29uIiwib25SZXN1bHQiLCJjb3JlUmVxdWVzdCIsInZhbHVlcyIsIm1vZHVsZSIsInNldHVwIiwiY2xvc2UiLCJjb250ZXh0IiwiY29yZURlc3Ryb3lDb250ZXh0IiwiTW9kdWxlQ2xhc3MiLCJuYW1lIiwibW9kdWxlTmFtZSIsImV4aXN0aW5nTW9kdWxlIiwiZ2V0Iiwic2V0Iiwic2VydmVyVGltZURlbHRhIiwic2VydmVyTm93IiwicXVlcnkiLCJyZXN1bHQiLCJkYXRhIiwiZ2V0TWFuYWdlbWVudEFjY2Vzc0tleSIsInBhcmFtcyIsInNpZ25lZE1hbmFnZW1lbnRBY2Nlc3NLZXkiLCJzaWduS2V5cyIsImFjY291bnRLZXlzIiwibWFuYWdlbWVudEFjY2Vzc0tleSIsIm5hY2xTaWduIiwidGV4dCIsInNlY3JldCIsIl9yZXNvbHZlU2lnbmVkTWFuYWdlbWVudEFjY2Vzc0tleSIsIm11dGF0aW9uIiwiYWNjb3VudCIsImtleXMiLCJyZWdpc3RlckFjY2Vzc0tleXMiLCJyZXZva2VBY2Nlc3NLZXlzIiwiZiIsInBhcmVudFNwYW4iLCJzcGFuIiwidHJhY2VyIiwic3RhcnRTcGFuIiwiY2hpbGRPZiIsInNldFRhZyIsIlRhZ3MiLCJTUEFOX0tJTkQiLCJmaW5pc2giLCJsb2ciLCJldmVudCIsInBheWxvYWQiLCJjbGllbnQiLCJzZXREYXRhIiwiVE9ORXJyb3JTb3VyY2UiLCJDTElFTlQiLCJOT0RFIiwiVE9ORXJyb3JDb2RlIiwiQ0xJRU5UX0RPRVNfTk9UX0NPTkZJR1VSRUQiLCJTRU5EX05PREVfUkVRVUVTVF9GQUlMRUQiLCJNRVNTQUdFX0FMUkVBRFlfRVhQSVJFRCIsIlJVTl9MT0NBTF9BQ0NPVU5UX0RPRVNfTk9UX0VYSVNUUyIsIldBSVRfRk9SX1RJTUVPVVQiLCJJTlRFUk5BTF9FUlJPUiIsIlFVRVJZX0ZBSUxFRCIsIk1FU1NBR0VfRVhQSVJFRCIsIlNFUlZFUl9ET0VTTlRfU1VQUE9SVF9BR0dSRUdBVElPTlMiLCJJTlZBTElEX0NPTlMiLCJBRERSRVNTX1JFUVVJUkVEX0ZPUl9SVU5fTE9DQUwiLCJORVRXT1JLX1NJTEVOVCIsIlRSQU5TQUNUSU9OX0xBRyIsIlRSQU5TQUNUSU9OX1dBSVRfVElNRU9VVCIsIkNMT0NLX09VVF9PRl9TWU5DIiwiQUNDT1VOVF9NSVNTSU5HIiwiQUNDT1VOVF9DT0RFX01JU1NJTkciLCJBQ0NPVU5UX0JBTEFOQ0VfVE9PX0xPVyIsIkFDQ09VTlRfRlJPWkVOX09SX0RFTEVURUQiLCJDT05UUkFDVF9FWEVDVVRJT05fRkFJTEVEIiwiVE9OQ29udHJhY3RFeGl0Q29kZSIsIlJFUExBWV9QUk9URUNUSU9OIiwiTk9fR0FTIiwiVE9OQ2xpZW50RXJyb3IiLCJtZXNzYWdlIiwiY29kZSIsInNvdXJjZSIsImVycm9yIiwiZXhpdENvZGUiLCJleGl0X2NvZGUiLCJyZXNwb25zZVRleHQiLCJmdW5jdGlvbk5hbWUiLCJhZGRyZXNzIiwiZXJyb3JzIiwibWFwIiwieCIsInRvU3RyaW5nIiwiam9pbiIsInRpbWUiLCJEYXRlIiwidG9JU09TdHJpbmciLCJtZXNzYWdlSWQiLCJtc2dJZCIsInNlbmRUaW1lIiwiZm9ybWF0VGltZSIsImV4cGlyYXRpb25UaW1lIiwiZXhwaXJlIiwiYmxvY2tUaW1lIiwidGltZW91dCIsImJsb2NrSWQiLCJ0cmFuc2FjdGlvbklkIiwiYmFsYW5jZSIsImlzQ2xpZW50RXJyb3IiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7OztBQUtBOztBQVlBOztBQUNBOztBQUNBOztBQUVBOztBQU9BOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFxQkE7Ozs7O0lBS2FBLFM7OzsrQkFDU0MsYyxFQUFtQztBQUNqREQsTUFBQUEsU0FBUyxDQUFDQyxjQUFWLEdBQTJCQSxjQUEzQjtBQUNILEssQ0FHRDs7OztBQVNBLHVCQUFjO0FBQUE7O0FBQUE7O0FBQUE7O0FBQUE7O0FBQUE7O0FBQUE7O0FBQUE7O0FBQUE7O0FBQUE7O0FBQ1YsU0FBS0MsT0FBTCxHQUFlLElBQUlDLEdBQUosRUFBZjtBQUNBLFNBQUtDLE1BQUwsR0FBYyxLQUFLQyxTQUFMLENBQWVDLDJCQUFmLENBQWQ7QUFDQSxTQUFLQyxNQUFMLEdBQWMsS0FBS0YsU0FBTCxDQUFlRywyQkFBZixDQUFkO0FBQ0EsU0FBS0MsU0FBTCxHQUFpQixLQUFLSixTQUFMLENBQWVLLDhCQUFmLENBQWpCO0FBQ0EsU0FBS0MsUUFBTCxHQUFnQixLQUFLTixTQUFMLENBQWVPLDRCQUFmLENBQWhCO0FBQ0EsU0FBS0MsT0FBTCxHQUFlLEtBQUtGLFFBQXBCO0FBQ0EsU0FBS0csUUFBTCxHQUFnQixDQUFoQjtBQUNBLFNBQUtDLFdBQUwsR0FBbUIsSUFBbkI7QUFDSDtBQUVEOzs7Ozs7Ozs7O0FBWUE7Ozs7Ozs7Ozs7Ozs7O0FBS1VDLGdCQUFBQSxnQjswRkFBbUI7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQ2ZDLDRCQUFBQSxRQURlLEdBQ0pqQixTQUFTLENBQUNDLGNBRE47O0FBQUEsa0NBRWpCZ0IsUUFBUSxLQUFLLElBQWIsSUFBcUJBLFFBQVEsS0FBS0MsU0FGakI7QUFBQTtBQUFBO0FBQUE7O0FBQUEsNkRBR1YsSUFIVTs7QUFBQTtBQUFBO0FBQUEsbUNB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SUFBZixDQUFvQlYsZUFKakIsRUFLSFEsY0FBYyxDQUFDRyxNQUFmLENBQXNCN0IsTUFMbkIsQ0FBUDtBQU9IOzs7dUNBRXlCbUMsTyxFQUFpQm1CLE8sRUFBaUI7QUFDeEQsYUFBTyxJQUFJNUIsY0FBSixDQUNILGdDQUF5QlMsT0FBekIsa0RBQ0EsMklBREEseUNBRStCbUIsT0FGL0IsV0FHQSxrREFKRyxFQUtINUIsY0FBYyxDQUFDRSxJQUFmLENBQW9CVCxvQkFMakIsRUFNSE8sY0FBYyxDQUFDRyxNQUFmLENBQXNCN0IsTUFObkIsQ0FBUDtBQVFIOzs7eUNBRTJCbUMsTyxFQUFpQm1CLE8sRUFBaUI7QUFDMUQsYUFBTyxJQUFJNUIsY0FBSixDQUNILGdDQUF5QlMsT0FBekIsb0NBQTBEbUIsT0FBMUQsV0FDQSw2RkFEQSxHQUVBLGtEQUhHLEVBSUg1QixjQUFjLENBQUNFLElBQWYsQ0FBb0JSLHVCQUpqQixFQUtITSxjQUFjLENBQUNHLE1BQWYsQ0FBc0I3QixNQUxuQixDQUFQO0FBT0g7OztxQ0FFdUI4QixLLEVBQXFCO0FBQ3pDLGFBQU9KLGNBQWMsQ0FBQzZCLGFBQWYsQ0FBNkJ6QixLQUE3QixFQUFvQ0osY0FBYyxDQUFDRSxJQUFmLENBQW9CbEIsZUFBeEQsQ0FBUDtBQUNIOzs7cUNBRXVCb0IsSyxFQUFxQjtBQUN6QyxhQUFPSixjQUFjLENBQUM2QixhQUFmLENBQTZCekIsS0FBN0IsRUFBb0NKLGNBQWMsQ0FBQ0UsSUFBZixDQUFvQnJCLGdCQUF4RCxDQUFQO0FBQ0g7Ozs7Ozs7O2dCQXROUW1CLGMsWUFDTzNCLGM7O2dCQURQMkIsYyxVQUVLeEIsWSIsInNvdXJjZXNDb250ZW50IjpbIi8qXG4gKiBDb3B5cmlnaHQgMjAxOC0yMDIwIFRPTiBERVYgU09MVVRJT05TIExURC5cbiAqL1xuLy8gQGZsb3dcblxuaW1wb3J0IHtUYWdzLCBTcGFuLCBTcGFuQ29udGV4dH0gZnJvbSBcIm9wZW50cmFjaW5nXCI7XG5pbXBvcnQgdHlwZSB7XG4gICAgSVRPTkNsaWVudCxcbiAgICBUT05BY2Nlc3NLZXlzTWFuYWdlbWVudFBhcmFtcyxcbiAgICBUT05Db25maWdEYXRhLFxuICAgIFRPTkNvbnRyYWN0cyxcbiAgICBUT05DcnlwdG8sXG4gICAgVE9OUXVlcmllcyxcbiAgICBUT05SZWdpc3RlckFjY2Vzc0tleXNQYXJhbXMsXG4gICAgVE9OUmV2b2tlQWNjZXNzS2V5c1BhcmFtcyxcbn0gZnJvbSBcIi4uL3R5cGVzXCI7XG5cbmltcG9ydCBUT05Db25maWdNb2R1bGUgZnJvbSAnLi9tb2R1bGVzL1RPTkNvbmZpZ01vZHVsZSc7XG5pbXBvcnQgVE9OQ29udHJhY3RzTW9kdWxlIGZyb20gJy4vbW9kdWxlcy9UT05Db250cmFjdHNNb2R1bGUnO1xuaW1wb3J0IFRPTkNyeXB0b01vZHVsZSBmcm9tICcuL21vZHVsZXMvVE9OQ3J5cHRvTW9kdWxlJztcbi8qIGVzbGludC1kaXNhYmxlIGNsYXNzLW1ldGhvZHMtdXNlLXRoaXMsIG5vLXVzZS1iZWZvcmUtZGVmaW5lICovXG5pbXBvcnQgVE9OUXVlcmllc01vZHVsZSBmcm9tIFwiLi9tb2R1bGVzL1RPTlF1ZXJpZXNNb2R1bGVcIjtcblxuaW1wb3J0IHR5cGUge1xuICAgIFRPTkNsaWVudENvcmVMaWJyYXJ5LFxuICAgIFRPTkNsaWVudENvcmVCcmlkZ2UsXG4gICAgVE9OTW9kdWxlQ29udGV4dFxufSBmcm9tICcuL1RPTk1vZHVsZSc7XG5pbXBvcnQge1RPTk1vZHVsZX0gZnJvbSAnLi9UT05Nb2R1bGUnO1xuXG4vKipcbiAqIEphdmFTY3JpcHQgcGxhdGZvcm0gc3BlY2lmaWMgY29uZmlndXJhdGlvblxuICovXG50eXBlIFRPTkNsaWVudFBsYXRmb3JtID0ge1xuICAgIC8qKlxuICAgICAqIFBsYXRmb3JtIHNwZWNpZmljIGBmZXRjaGAgZnVuY3Rpb25cbiAgICAgKi9cbiAgICBmZXRjaDogYW55LFxuICAgIC8qKlxuICAgICAqIFBsYXRmb3JtIHNwZWNpZmljIGBXZWJTb2NrZXRgIGltcGxlbWVudGF0aW9uXG4gICAgICogVGhpcyBpbXBsZW1lbnRhdGlvbiBtdXN0IGNvbmZvcm1zIHRvIFczQyBXZWJTb2NrZXRcbiAgICAgKi9cbiAgICBXZWJTb2NrZXQ6IGFueSxcbiAgICAvKipcbiAgICAgKiBSZXF1ZXN0IGNyZWF0aW9uIG9mIHRoZSBjbGllbnQgY29yZVxuICAgICAqL1xuICAgIGNyZWF0ZUxpYnJhcnk6ICgpID0+IFByb21pc2U8VE9OQ2xpZW50Q29yZUxpYnJhcnk+LFxufTtcblxuLyoqXG4gKiBNYWluIG9iamVjdCBwcm92aWRlZCBmdW5jdGlvbmFsaXR5IG9mIHRoZSBUT04gQ2xpZW50IExpYnJhcnlcbiAqIEVhY2ggaW5zdGFuY2Ugb2YgVE9OQ2xpZW50IGhhcyBvd24gc2V0IG9mIFRPTiBDbGllbnQgbW9kdWxlc1xuICogYW5kIGhhcyBvd24gcHJlY29uZmlndXJlZCBjbGllbnQgY29udGV4dFxuICovXG5leHBvcnQgY2xhc3MgVE9OQ2xpZW50IGltcGxlbWVudHMgVE9OTW9kdWxlQ29udGV4dCwgSVRPTkNsaWVudCB7XG4gICAgc3RhdGljIHNldExpYnJhcnkoY2xpZW50UGxhdGZvcm06IFRPTkNsaWVudFBsYXRmb3JtKSB7XG4gICAgICAgIFRPTkNsaWVudC5jbGllbnRQbGF0Zm9ybSA9IGNsaWVudFBsYXRmb3JtO1xuICAgIH1cblxuXG4gICAgLy8gUHVibGljXG4gICAgY29uZmlnOiBUT05Db25maWdNb2R1bGU7XG4gICAgY3J5cHRvOiBUT05DcnlwdG87XG4gICAgY29udHJhY3RzOiBUT05Db250cmFjdHM7XG4gICAgcXVlcmllczogVE9OUXVlcmllcztcbiAgICBfcXVlcmllczogVE9OUXVlcmllc01vZHVsZTtcbiAgICBfY29udGV4dDogbnVtYmVyO1xuICAgIF9jb3JlQnJpZGdlOiA/VE9OQ2xpZW50Q29yZUJyaWRnZTtcblxuICAgIGNvbnN0cnVjdG9yKCkge1xuICAgICAgICB0aGlzLm1vZHVsZXMgPSBuZXcgTWFwKCk7XG4gICAgICAgIHRoaXMuY29uZmlnID0gdGhpcy5nZXRNb2R1bGUoVE9OQ29uZmlnTW9kdWxlKTtcbiAgICAgICAgdGhpcy5jcnlwdG8gPSB0aGlzLmdldE1vZHVsZShUT05DcnlwdG9Nb2R1bGUpO1xuICAgICAgICB0aGlzLmNvbnRyYWN0cyA9IHRoaXMuZ2V0TW9kdWxlKFRPTkNvbnRyYWN0c01vZHVsZSk7XG4gICAgICAgIHRoaXMuX3F1ZXJpZXMgPSB0aGlzLmdldE1vZHVsZShUT05RdWVyaWVzTW9kdWxlKTtcbiAgICAgICAgdGhpcy5xdWVyaWVzID0gdGhpcy5fcXVlcmllcztcbiAgICAgICAgdGhpcy5fY29udGV4dCA9IDA7XG4gICAgICAgIHRoaXMuX2NvcmVCcmlkZ2UgPSBudWxsO1xuICAgIH1cblxuICAgIC8qKlxuICAgICAqIENvbnZlbmllbnQgd2F5IHRvIGNyZWF0ZSBjb25maWd1cmVkIGluc3RhbmNlIG9mIHRoZSBUT04gQ2xpZW50XG4gICAgICogQHBhcmFtIHtUT05Db25maWdEYXRhfSBjb25maWdcbiAgICAgKiBAcmV0dXJuIHtQcm9taXNlPFRPTkNsaWVudD59XG4gICAgICovXG4gICAgc3RhdGljIGFzeW5jIGNyZWF0ZShjb25maWc6IFRPTkNvbmZpZ0RhdGEpOiBQcm9taXNlPFRPTkNsaWVudD4ge1xuICAgICAgICBjb25zdCBjbGllbnQgPSBuZXcgVE9OQ2xpZW50KCk7XG4gICAgICAgIGNsaWVudC5jb25maWcuc2V0RGF0YShjb25maWcpO1xuICAgICAgICBhd2FpdCBjbGllbnQuc2V0dXAoKTtcbiAgICAgICAgcmV0dXJuIGNsaWVudDtcbiAgICB9XG5cbiAgICAvKipcbiAgICAgKiBTZXQgdXAgdGhlIGNsaWVudCBpbnN0YW5jZVxuICAgICAqIEByZXR1cm4ge1Byb21pc2U8dm9pZD59XG4gICAgICovXG4gICAgYXN5bmMgc2V0dXAoKTogUHJvbWlzZTx2b2lkPiB7XG4gICAgICAgIGNvbnN0IHRyeUNyZWF0ZUxpYnJhcnkgPSBhc3luYyAoKSA9PiB7XG4gICAgICAgICAgICBjb25zdCBwbGF0Zm9ybSA9IFRPTkNsaWVudC5jbGllbnRQbGF0Zm9ybTtcbiAgICAgICAgICAgIGlmIChwbGF0Zm9ybSA9PT0gbnVsbCB8fCBwbGF0Zm9ybSA9PT0gdW5kZWZpbmVkKSB7XG4gICAgICAgICAgICAgICAgcmV0dXJuIG51bGw7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBUT05DbGllbnQuY29yZUxpYnJhcnkgPSBhd2FpdCBwbGF0Zm9ybS5jcmVhdGVMaWJyYXJ5KCk7XG4gICAgICAgICAgICByZXR1cm4gVE9OQ2xpZW50LmNvcmVMaWJyYXJ5O1xuICAgICAgICB9O1xuICAgICAgICBjb25zdCBsaWJyYXJ5ID0gVE9OQ2xpZW50LmNvcmVMaWJyYXJ5IHx8IGF3YWl0IHRyeUNyZWF0ZUxpYnJhcnkoKTtcbiAgICAgICAgaWYgKCFsaWJyYXJ5KSB7XG4gICAgICAgICAgICByZXR1cm47XG4gICAgICAgIH1cbiAgICAgICAgaWYgKHRoaXMuX2NvcmVCcmlkZ2UgPT09IG51bGwgfHwgdGhpcy5fY29yZUJyaWRnZSA9PT0gdW5kZWZpbmVkKSB7XG4gICAgICAgICAgICBpZiAobGlicmFyeS5jb3JlQ3JlYXRlQ29udGV4dCkge1xuICAgICAgICAgICAgICAgIHRoaXMuX2NvbnRleHQgPSBhd2FpdCBuZXcgUHJvbWlzZSgocmVzb2x2ZSkgPT4gbGlicmFyeS5jb3JlQ3JlYXRlQ29udGV4dChyZXNvbHZlKSk7XG4gICAgICAgICAgICAgICAgdGhpcy5fY29yZUJyaWRnZSA9IHtcbiAgICAgICAgICAgICAgICAgICAgcmVxdWVzdDogKFxuICAgICAgICAgICAgICAgICAgICAgICAgbWV0aG9kOiBzdHJpbmcsXG4gICAgICAgICAgICAgICAgICAgICAgICBwYXJhbXNKc29uOiBzdHJpbmcsXG4gICAgICAgICAgICAgICAgICAgICAgICBvblJlc3VsdDogKHJlc3VsdEpzb246IHN0cmluZywgZXJyb3JKc29uOiBzdHJpbmcpID0+IHZvaWQsXG4gICAgICAgICAgICAgICAgICAgICk6IHZvaWQgPT4ge1xuICAgICAgICAgICAgICAgICAgICAgICAgaWYgKFRPTkNsaWVudC5jb3JlTGlicmFyeSkge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIFRPTkNsaWVudC5jb3JlTGlicmFyeS5jb3JlUmVxdWVzdCh0aGlzLl9jb250ZXh0LCBtZXRob2QsIHBhcmFtc0pzb24sIG9uUmVzdWx0KTtcbiAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgICAgdGhpcy5fY29yZUJyaWRnZSA9IGxpYnJhcnk7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgICAgY29uc3QgbW9kdWxlczogVE9OTW9kdWxlW10gPSBbLi4udGhpcy5tb2R1bGVzLnZhbHVlcygpXTtcbiAgICAgICAgZm9yIChjb25zdCBtb2R1bGUgb2YgbW9kdWxlcykge1xuICAgICAgICAgICAgYXdhaXQgbW9kdWxlLnNldHVwKCk7XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICAvKipcbiAgICAgKiBUZWFyIGRvd24gdGhpcyBjbGllbnQgaW5zdGFuY2UuXG4gICAgICogTm90ZSB0aGF0IGFmdGVyIHlvdSBoYXZlIGNhbGxlZCB0aGlzIG1ldGhvZCBhbGwgZnV0dXJlIHVzZSBvZiB0aGlzIGluc3RhbmNlIHdpbGwgZmFpbFxuICAgICAqIEByZXR1cm4ge1Byb21pc2U8dm9pZD59XG4gICAgICovXG4gICAgYXN5bmMgY2xvc2UoKTogUHJvbWlzZTx2b2lkPiB7XG4gICAgICAgIGF3YWl0IHRoaXMucXVlcmllcy5jbG9zZSgpO1xuICAgICAgICBjb25zdCBsaWJyYXJ5ID0gVE9OQ2xpZW50LmNvcmVMaWJyYXJ5O1xuICAgICAgICBpZiAodGhpcy5fY29udGV4dCA+IDAgJiYgbGlicmFyeSAhPT0gbnVsbCAmJiBsaWJyYXJ5ICE9PSB1bmRlZmluZWQpIHtcbiAgICAgICAgICAgIGNvbnN0IGNvbnRleHQgPSB0aGlzLl9jb250ZXh0O1xuICAgICAgICAgICAgdGhpcy5fY29yZUJyaWRnZSA9IG51bGw7XG4gICAgICAgICAgICB0aGlzLl9jb250ZXh0ID0gMDtcbiAgICAgICAgICAgIGF3YWl0IG5ldyBQcm9taXNlKHJlc29sdmUgPT4gbGlicmFyeS5jb3JlRGVzdHJveUNvbnRleHQoY29udGV4dCwgcmVzb2x2ZSkpO1xuICAgICAgICB9XG4gICAgfVxuXG4gICAgLy8gVE9OTW9kdWxlQ29udGV4dFxuXG4gICAgZ2V0Q29yZUJyaWRnZSgpOiA/VE9OQ2xpZW50Q29yZUJyaWRnZSB7XG4gICAgICAgIHJldHVybiB0aGlzLl9jb3JlQnJpZGdlO1xuICAgIH1cblxuICAgIGdldE1vZHVsZTxUPihNb2R1bGVDbGFzczogdHlwZW9mIFRPTk1vZHVsZSk6IFQge1xuICAgICAgICBjb25zdCBuYW1lID0gTW9kdWxlQ2xhc3MubW9kdWxlTmFtZTtcbiAgICAgICAgY29uc3QgZXhpc3RpbmdNb2R1bGUgPSB0aGlzLm1vZHVsZXMuZ2V0KG5hbWUpO1xuICAgICAgICBpZiAoZXhpc3RpbmdNb2R1bGUpIHtcbiAgICAgICAgICAgIHJldHVybiAoZXhpc3RpbmdNb2R1bGU6IGFueSk7XG4gICAgICAgIH1cbiAgICAgICAgY29uc3QgbW9kdWxlID0gbmV3IE1vZHVsZUNsYXNzKHRoaXMpO1xuICAgICAgICB0aGlzLm1vZHVsZXMuc2V0KG5hbWUsIG1vZHVsZSk7XG4gICAgICAgIHJldHVybiAobW9kdWxlOiBhbnkpO1xuICAgIH1cblxuICAgIHNlcnZlclRpbWVEZWx0YSgpOiBQcm9taXNlPG51bWJlcj4ge1xuICAgICAgICByZXR1cm4gdGhpcy5fcXVlcmllcy5zZXJ2ZXJUaW1lRGVsdGEoKTtcbiAgICB9XG5cbiAgICBzZXJ2ZXJOb3coKTogUHJvbWlzZTxudW1iZXI+IHtcbiAgICAgICAgcmV0dXJuIHRoaXMuX3F1ZXJpZXMuc2VydmVyTm93KCk7XG4gICAgfVxuXG4gICAgYXN5bmMgZ2V0TWFuYWdlbWVudEFjY2Vzc0tleSgpOiBQcm9taXNlPHN0cmluZz4ge1xuICAgICAgICBjb25zdCByZXN1bHQgPSBhd2FpdCB0aGlzLl9xdWVyaWVzLnF1ZXJ5KCdxdWVyeXtnZXRNYW5hZ2VtZW50QWNjZXNzS2V5fScpO1xuICAgICAgICByZXR1cm4gcmVzdWx0LmRhdGEuZ2V0TWFuYWdlbWVudEFjY2Vzc0tleTtcbiAgICB9XG5cblxuICAgIGFzeW5jIF9yZXNvbHZlU2lnbmVkTWFuYWdlbWVudEFjY2Vzc0tleShwYXJhbXM6IFRPTkFjY2Vzc0tleXNNYW5hZ2VtZW50UGFyYW1zKTogUHJvbWlzZTxzdHJpbmc+IHtcbiAgICAgICAgaWYgKHBhcmFtcy5zaWduZWRNYW5hZ2VtZW50QWNjZXNzS2V5KSB7XG4gICAgICAgICAgICByZXR1cm4gcGFyYW1zLnNpZ25lZE1hbmFnZW1lbnRBY2Nlc3NLZXk7XG4gICAgICAgIH1cbiAgICAgICAgY29uc3Qgc2lnbktleXMgPSBwYXJhbXMuYWNjb3VudEtleXM7XG4gICAgICAgIGlmIChzaWduS2V5cykge1xuICAgICAgICAgICAgY29uc3QgbWFuYWdlbWVudEFjY2Vzc0tleSA9IGF3YWl0IHRoaXMuZ2V0TWFuYWdlbWVudEFjY2Vzc0tleSgpO1xuICAgICAgICAgICAgcmV0dXJuIHRoaXMuY3J5cHRvLm5hY2xTaWduKFxuICAgICAgICAgICAgICAgIHsgdGV4dDogbWFuYWdlbWVudEFjY2Vzc0tleSB9LFxuICAgICAgICAgICAgICAgIGAke3NpZ25LZXlzLnNlY3JldH0ke3NpZ25LZXlzLnB1YmxpY31gLFxuICAgICAgICAgICAgICAgICdIZXgnKTtcbiAgICAgICAgfVxuICAgICAgICByZXR1cm4gJyc7XG4gICAgfVxuXG4gICAgYXN5bmMgcmVnaXN0ZXJBY2Nlc3NLZXlzKFxuICAgICAgICBwYXJhbXM6IFRPTlJlZ2lzdGVyQWNjZXNzS2V5c1BhcmFtc1xuICAgICk6IFByb21pc2U8bnVtYmVyPiB7XG4gICAgICAgIGNvbnN0IHNpZ25lZE1hbmFnZW1lbnRBY2Nlc3NLZXkgPSBhd2FpdCB0aGlzLl9yZXNvbHZlU2lnbmVkTWFuYWdlbWVudEFjY2Vzc0tleShwYXJhbXMpO1xuICAgICAgICBjb25zdCByZXN1bHQgPSBhd2FpdCB0aGlzLl9xdWVyaWVzLm11dGF0aW9uKFxuICAgICAgICAgICAgYG11dGF0aW9uIHJlZ2lzdGVyQWNjZXNzS2V5cygkYWNjb3VudDogU3RyaW5nLCAka2V5czogW0FjY2Vzc0tleV0sICRzaWduZWRNYW5hZ2VtZW50QWNjZXNzS2V5OiBTdHJpbmcpIHtcbiAgICAgICAgICAgICAgICAgICAgcmVnaXN0ZXJBY2Nlc3NLZXlzKGFjY291bnQ6ICRhY2NvdW50LCBrZXlzOiAka2V5cywgc2lnbmVkTWFuYWdlbWVudEFjY2Vzc0tleTogJHNpZ25lZE1hbmFnZW1lbnRBY2Nlc3NLZXkpXG4gICAgICAgICAgICAgICAgfWAsIHtcbiAgICAgICAgICAgICAgICBhY2NvdW50OiBwYXJhbXMuYWNjb3VudCxcbiAgICAgICAgICAgICAgICBrZXlzOiBwYXJhbXMua2V5cyxcbiAgICAgICAgICAgICAgICBzaWduZWRNYW5hZ2VtZW50QWNjZXNzS2V5LFxuICAgICAgICAgICAgfSk7XG4gICAgICAgIHJldHVybiByZXN1bHQuZGF0YS5yZWdpc3RlckFjY2Vzc0tleXM7XG4gICAgfVxuXG4gICAgYXN5bmMgcmV2b2tlQWNjZXNzS2V5cyhcbiAgICAgICAgcGFyYW1zOiBUT05SZXZva2VBY2Nlc3NLZXlzUGFyYW1zXG4gICAgKTogUHJvbWlzZTxudW1iZXI+IHtcbiAgICAgICAgY29uc3Qgc2lnbmVkTWFuYWdlbWVudEFjY2Vzc0tleSA9IGF3YWl0IHRoaXMuX3Jlc29sdmVTaWduZWRNYW5hZ2VtZW50QWNjZXNzS2V5KHBhcmFtcyk7XG4gICAgICAgIGNvbnN0IHJlc3VsdCA9IGF3YWl0IHRoaXMuX3F1ZXJpZXMubXV0YXRpb24oXG4gICAgICAgICAgICBgbXV0YXRpb24gcmV2b2tlQWNjZXNzS2V5cygkYWNjb3VudDogU3RyaW5nLCAka2V5czogW1N0cmluZ10sICRzaWduZWRNYW5hZ2VtZW50QWNjZXNzS2V5OiBTdHJpbmcpIHtcbiAgICAgICAgICAgICAgICAgICAgcmV2b2tlQWNjZXNzS2V5cyhhY2NvdW50OiAkYWNjb3VudCwga2V5czogJGtleXMsIHNpZ25lZE1hbmFnZW1lbnRBY2Nlc3NLZXk6ICRzaWduZWRNYW5hZ2VtZW50QWNjZXNzS2V5KVxuICAgICAgICAgICAgICAgIH1gLCB7XG4gICAgICAgICAgICAgICAgYWNjb3VudDogcGFyYW1zLmFjY291bnQsXG4gICAgICAgICAgICAgICAga2V5czogcGFyYW1zLmtleXMsXG4gICAgICAgICAgICAgICAgc2lnbmVkTWFuYWdlbWVudEFjY2Vzc0tleSxcbiAgICAgICAgICAgIH0pO1xuICAgICAgICByZXR1cm4gcmVzdWx0LmRhdGEucmV2b2tlQWNjZXNzS2V5cztcbiAgICB9XG5cbiAgICBhc3luYyB0cmFjZTxUPihcbiAgICAgICAgbmFtZTogc3RyaW5nLFxuICAgICAgICBmOiAoc3BhbjogU3BhbikgPT4gUHJvbWlzZTxUPixcbiAgICAgICAgcGFyZW50U3Bhbj86IChTcGFuIHwgU3BhbkNvbnRleHQpXG4gICAgKTogUHJvbWlzZTxUPiB7XG4gICAgICAgIGNvbnN0IHNwYW4gPSB0aGlzLmNvbmZpZy50cmFjZXIuc3RhcnRTcGFuKG5hbWUsIHsgY2hpbGRPZjogcGFyZW50U3BhbiB9KTtcbiAgICAgICAgdHJ5IHtcbiAgICAgICAgICAgIHNwYW4uc2V0VGFnKFRhZ3MuU1BBTl9LSU5ELCAnY2xpZW50Jyk7XG4gICAgICAgICAgICBjb25zdCByZXN1bHQgPSBhd2FpdCBmKHNwYW4pO1xuICAgICAgICAgICAgaWYgKHJlc3VsdCAhPT0gdW5kZWZpbmVkKSB7XG4gICAgICAgICAgICAgICAgc3Bhbi5zZXRUYWcoJ3Jlc3VsdCcsIHJlc3VsdCk7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBzcGFuLmZpbmlzaCgpO1xuICAgICAgICAgICAgcmV0dXJuIHJlc3VsdDtcbiAgICAgICAgfSBjYXRjaCAoZXJyb3IpIHtcbiAgICAgICAgICAgIHNwYW4ubG9nKHsgZXZlbnQ6ICdmYWlsZWQnLCBwYXlsb2FkOiBlcnJvciB9KTtcbiAgICAgICAgICAgIHNwYW4uZmluaXNoKCk7XG4gICAgICAgICAgICB0aHJvdyBlcnJvcjtcbiAgICAgICAgfVxuICAgIH1cblxuICAgIC8vIEludGVybmFsc1xuXG4gICAgc3RhdGljIGNsaWVudFBsYXRmb3JtOiA/VE9OQ2xpZW50UGxhdGZvcm0gPSBudWxsO1xuICAgIHN0YXRpYyBjb3JlTGlicmFyeTogP1RPTkNsaWVudENvcmVMaWJyYXJ5ID0gbnVsbDtcblxuICAgIG1vZHVsZXM6IE1hcDxzdHJpbmcsIFRPTk1vZHVsZT47XG59XG5cblxuZXhwb3J0IGNvbnN0IFRPTkVycm9yU291cmNlID0ge1xuICAgIENMSUVOVDogJ2NsaWVudCcsXG4gICAgTk9ERTogJ25vZGUnXG59O1xuXG5leHBvcnQgY29uc3QgVE9ORXJyb3JDb2RlID0ge1xuICAgIENMSUVOVF9ET0VTX05PVF9DT05GSUdVUkVEOiAxMDAwLFxuICAgIFNFTkRfTk9ERV9SRVFVRVNUX0ZBSUxFRDogMTAwMSxcbiAgICBNRVNTQUdFX0FMUkVBRFlfRVhQSVJFRDogMTAwMSxcbiAgICBSVU5fTE9DQUxfQUNDT1VOVF9ET0VTX05PVF9FWElTVFM6IDEwMDIsXG4gICAgV0FJVF9GT1JfVElNRU9VVDogMTAwMyxcbiAgICBJTlRFUk5BTF9FUlJPUjogMTAwNCxcbiAgICBRVUVSWV9GQUlMRUQ6IDEwMDUsXG4gICAgTUVTU0FHRV9FWFBJUkVEOiAxMDA2LFxuICAgIFNFUlZFUl9ET0VTTlRfU1VQUE9SVF9BR0dSRUdBVElPTlM6IDEwMDcsXG4gICAgSU5WQUxJRF9DT05TOiAxMDA4LFxuICAgIEFERFJFU1NfUkVRVUlSRURfRk9SX1JVTl9MT0NBTDogMTAwOSxcbiAgICBORVRXT1JLX1NJTEVOVDogMTAxMCxcbiAgICBUUkFOU0FDVElPTl9MQUc6IDEwMTEsXG4gICAgVFJBTlNBQ1RJT05fV0FJVF9USU1FT1VUOiAxMDEyLFxuICAgIENMT0NLX09VVF9PRl9TWU5DOiAxMDEzLFxuICAgIEFDQ09VTlRfTUlTU0lORzogMTAxNCxcbiAgICBBQ0NPVU5UX0NPREVfTUlTU0lORzogMTAxNSxcbiAgICBBQ0NPVU5UX0JBTEFOQ0VfVE9PX0xPVzogMTAxNixcbiAgICBBQ0NPVU5UX0ZST1pFTl9PUl9ERUxFVEVEOiAxMDE3LFxuXG4gICAgQ09OVFJBQ1RfRVhFQ1VUSU9OX0ZBSUxFRDogMzAyNSxcblxufTtcblxuZXhwb3J0IGNvbnN0IFRPTkNvbnRyYWN0RXhpdENvZGUgPSB7XG4gICAgUkVQTEFZX1BST1RFQ1RJT046IDUyLFxuICAgIE1FU1NBR0VfRVhQSVJFRDogNTcsXG4gICAgTk9fR0FTOiAxMyxcbn1cblxuZXhwb3J0IGNsYXNzIFRPTkNsaWVudEVycm9yIHtcbiAgICBzdGF0aWMgc291cmNlID0gVE9ORXJyb3JTb3VyY2U7XG4gICAgc3RhdGljIGNvZGUgPSBUT05FcnJvckNvZGU7XG5cbiAgICBtZXNzYWdlOiBzdHJpbmc7XG4gICAgc291cmNlOiBzdHJpbmc7XG4gICAgY29kZTogbnVtYmVyO1xuICAgIGRhdGE6IGFueTtcblxuICAgIGNvbnN0cnVjdG9yKG1lc3NhZ2U6IHN0cmluZywgY29kZTogbnVtYmVyLCBzb3VyY2U6IHN0cmluZywgZGF0YT86IGFueSkge1xuICAgICAgICB0aGlzLm1lc3NhZ2UgPSBtZXNzYWdlO1xuICAgICAgICB0aGlzLmNvZGUgPSBjb2RlO1xuICAgICAgICB0aGlzLnNvdXJjZSA9IHNvdXJjZTtcbiAgICAgICAgdGhpcy5kYXRhID0gZGF0YTtcbiAgICB9XG5cbiAgICBzdGF0aWMgaXNDbGllbnRFcnJvcihlcnJvcjogYW55LCBjb2RlOiBudW1iZXIpOiBib29sZWFuIHtcbiAgICAgICAgcmV0dXJuIChlcnJvci5zb3VyY2UgPT09IFRPTkNsaWVudEVycm9yLnNvdXJjZS5DTElFTlQpXG4gICAgICAgICAgICAmJiAoZXJyb3IuY29kZSA9PT0gY29kZSk7XG4gICAgfVxuXG4gICAgc3RhdGljIGlzTm9kZUVycm9yKGVycm9yOiBhbnksIGNvZGU6IG51bWJlcik6IGJvb2xlYW4ge1xuICAgICAgICByZXR1cm4gKGVycm9yLnNvdXJjZSA9PT0gVE9OQ2xpZW50RXJyb3Iuc291cmNlLk5PREUpXG4gICAgICAgICAgICAmJiAoZXJyb3IuY29kZSA9PT0gY29kZSk7XG4gICAgfVxuXG4gICAgc3RhdGljIGlzQ29udHJhY3RFcnJvcihlcnJvcjogYW55LCBleGl0Q29kZTogbnVtYmVyKTogYm9vbGVhbiB7XG4gICAgICAgIHJldHVybiAoZXJyb3Iuc291cmNlID09PSBUT05DbGllbnRFcnJvci5zb3VyY2UuTk9ERSlcbiAgICAgICAgICAgICYmIChlcnJvci5jb2RlID09PSBUT05DbGllbnRFcnJvci5jb2RlLkNPTlRSQUNUX0VYRUNVVElPTl9GQUlMRUQpXG4gICAgICAgICAgICAmJiAoZXJyb3IuZGF0YSAmJiBlcnJvci5kYXRhLmV4aXRfY29kZSA9PT0gZXhpdENvZGUpO1xuICAgIH1cblxuICAgIHN0YXRpYyBpbnRlcm5hbEVycm9yKG1lc3NhZ2U6IHN0cmluZyk6IFRPTkNsaWVudEVycm9yIHtcbiAgICAgICAgcmV0dXJuIG5ldyBUT05DbGllbnRFcnJvcihcbiAgICAgICAgICAgIGBJbnRlcm5hbCBlcnJvcjogJHttZXNzYWdlfWAsXG4gICAgICAgICAgICBUT05DbGllbnRFcnJvci5jb2RlLklOVEVSTkFMX0VSUk9SLFxuICAgICAgICAgICAgVE9OQ2xpZW50RXJyb3Iuc291cmNlLkNMSUVOVCxcbiAgICAgICAgKTtcbiAgICB9XG5cbiAgICBzdGF0aWMgaW52YWxpZENvbnMoKTogVE9OQ2xpZW50RXJyb3Ige1xuICAgICAgICByZXR1cm4gbmV3IFRPTkNsaWVudEVycm9yKFxuICAgICAgICAgICAgJ0ludmFsaWQgQ09OUyBzdHJ1Y3R1cmUuIEVhY2ggQ09OUyBpdGVtIG11c3QgY29udGFpbnMgb2YgdHdvIGVsZW1lbnRzLicsXG4gICAgICAgICAgICBUT05DbGllbnRFcnJvci5jb2RlLklOVkFMSURfQ09OUyxcbiAgICAgICAgICAgIFRPTkNsaWVudEVycm9yLnNvdXJjZS5DTElFTlQsXG4gICAgICAgICk7XG4gICAgfVxuXG4gICAgc3RhdGljIGNsaWVudERvZXNOb3RDb25maWd1cmVkKCk6IFRPTkNsaWVudEVycm9yIHtcbiAgICAgICAgcmV0dXJuIG5ldyBUT05DbGllbnRFcnJvcihcbiAgICAgICAgICAgICdUT04gQ2xpZW50IGRvZXMgbm90IGNvbmZpZ3VyZWQnLFxuICAgICAgICAgICAgVE9OQ2xpZW50RXJyb3IuY29kZS5DTElFTlRfRE9FU19OT1RfQ09ORklHVVJFRCxcbiAgICAgICAgICAgIFRPTkNsaWVudEVycm9yLnNvdXJjZS5DTElFTlQsXG4gICAgICAgICk7XG4gICAgfVxuXG4gICAgc3RhdGljIHNlbmROb2RlUmVxdWVzdEZhaWxlZChyZXNwb25zZVRleHQ6IHN0cmluZyk6IFRPTkNsaWVudEVycm9yIHtcbiAgICAgICAgcmV0dXJuIG5ldyBUT05DbGllbnRFcnJvcihcbiAgICAgICAgICAgIGBTZW5kIG5vZGUgcmVxdWVzdCBmYWlsZWQ6ICR7cmVzcG9uc2VUZXh0fWAsXG4gICAgICAgICAgICBUT05DbGllbnRFcnJvci5jb2RlLlNFTkRfTk9ERV9SRVFVRVNUX0ZBSUxFRCxcbiAgICAgICAgICAgIFRPTkNsaWVudEVycm9yLnNvdXJjZS5DTElFTlQsXG4gICAgICAgICk7XG4gICAgfVxuXG4gICAgc3RhdGljIHJ1bkxvY2FsQWNjb3VudERvZXNOb3RFeGlzdHMoZnVuY3Rpb25OYW1lOiBzdHJpbmcsIGFkZHJlc3M6IHN0cmluZyk6IFRPTkNsaWVudEVycm9yIHtcbiAgICAgICAgcmV0dXJuIG5ldyBUT05DbGllbnRFcnJvcihcbiAgICAgICAgICAgIGBbJHtmdW5jdGlvbk5hbWV9XSBydW4gbG9jYWwgZmFpbGVkOiBhY2NvdW50IFske2FkZHJlc3N9XSBkb2VzIG5vdCBleGlzdHNgLFxuICAgICAgICAgICAgVE9OQ2xpZW50RXJyb3IuY29kZS5SVU5fTE9DQUxfQUNDT1VOVF9ET0VTX05PVF9FWElTVFMsXG4gICAgICAgICAgICBUT05DbGllbnRFcnJvci5zb3VyY2UuQ0xJRU5ULFxuICAgICAgICApO1xuICAgIH1cblxuICAgIHN0YXRpYyB3YWl0Rm9yVGltZW91dCgpIHtcbiAgICAgICAgcmV0dXJuIG5ldyBUT05DbGllbnRFcnJvcihcbiAgICAgICAgICAgICdXYWl0IGZvciBvcGVyYXRpb24gcmVqZWN0ZWQgb24gdGltZW91dCcsXG4gICAgICAgICAgICBUT05DbGllbnRFcnJvci5jb2RlLldBSVRfRk9SX1RJTUVPVVQsXG4gICAgICAgICAgICBUT05DbGllbnRFcnJvci5zb3VyY2UuQ0xJRU5ULFxuICAgICAgICApO1xuICAgIH1cblxuICAgIHN0YXRpYyBxdWVyeUZhaWxlZChlcnJvcnM6IEVycm9yW10pIHtcbiAgICAgICAgcmV0dXJuIG5ldyBUT05DbGllbnRFcnJvcihcbiAgICAgICAgICAgIGBRdWVyeSBmYWlsZWQ6ICR7ZXJyb3JzLm1hcCh4ID0+IHgubWVzc2FnZSB8fCB4LnRvU3RyaW5nKCkpLmpvaW4oJ1xcbicpfWAsXG4gICAgICAgICAgICBUT05DbGllbnRFcnJvci5jb2RlLlFVRVJZX0ZBSUxFRCxcbiAgICAgICAgICAgIFRPTkNsaWVudEVycm9yLnNvdXJjZS5DTElFTlQsXG4gICAgICAgICk7XG4gICAgfVxuXG4gICAgc3RhdGljIGZvcm1hdFRpbWUodGltZTogP251bWJlcik6ID9zdHJpbmcge1xuICAgICAgICBpZiAodGltZSkge1xuICAgICAgICAgICAgcmV0dXJuIGAke25ldyBEYXRlKHRpbWUgKiAxMDAwKS50b0lTT1N0cmluZygpfSAoJHt0aW1lfSlgO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgcmV0dXJuIG51bGw7XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICBzdGF0aWMgbWVzc2FnZUV4cGlyZWQoZGF0YTogeyBtc2dJZDogc3RyaW5nLCBzZW5kVGltZTogbnVtYmVyLCBleHBpcmU6ID9udW1iZXIsIGJsb2NrVGltZTogP251bWJlciB9KSB7XG4gICAgICAgIHJldHVybiBuZXcgVE9OQ2xpZW50RXJyb3IoXG4gICAgICAgICAgICAnTWVzc2FnZSBleHBpcmVkJyxcbiAgICAgICAgICAgIFRPTkNsaWVudEVycm9yLmNvZGUuTUVTU0FHRV9FWFBJUkVELFxuICAgICAgICAgICAgVE9OQ2xpZW50RXJyb3Iuc291cmNlLkNMSUVOVCxcbiAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICBtZXNzYWdlSWQ6IGRhdGEubXNnSWQsXG4gICAgICAgICAgICAgICAgc2VuZFRpbWU6IFRPTkNsaWVudEVycm9yLmZvcm1hdFRpbWUoZGF0YS5zZW5kVGltZSksXG4gICAgICAgICAgICAgICAgZXhwaXJhdGlvblRpbWU6IFRPTkNsaWVudEVycm9yLmZvcm1hdFRpbWUoZGF0YS5leHBpcmUpLFxuICAgICAgICAgICAgICAgIGJsb2NrVGltZTogVE9OQ2xpZW50RXJyb3IuZm9ybWF0VGltZShkYXRhLmJsb2NrVGltZSksXG4gICAgICAgICAgICB9XG4gICAgICAgICk7XG4gICAgfVxuXG4gICAgc3RhdGljIHNlcnZlckRvZXNudFN1cHBvcnRBZ2dyZWdhdGlvbnMoKSB7XG4gICAgICAgIHJldHVybiBuZXcgVE9OQ2xpZW50RXJyb3IoXG4gICAgICAgICAgICAnU2VydmVyIGRvZXNuXFwndCBzdXBwb3J0IGFnZ3JlZ2F0aW9ucycsXG4gICAgICAgICAgICBUT05DbGllbnRFcnJvci5jb2RlLlNFUlZFUl9ET0VTTlRfU1VQUE9SVF9BR0dSRUdBVElPTlMsXG4gICAgICAgICAgICBUT05DbGllbnRFcnJvci5zb3VyY2UuQ0xJRU5ULFxuICAgICAgICApO1xuICAgIH1cblxuICAgIHN0YXRpYyBhZGRyZXNzUmVxdWlyZWRGb3JSdW5Mb2NhbCgpIHtcbiAgICAgICAgcmV0dXJuIG5ldyBUT05DbGllbnRFcnJvcihcbiAgICAgICAgICAgIGBBZGRyZXNzIHJlcXVpcmVkIGZvciBydW4gbG9jYWwuIFlvdSBoYXZlbid0IHNwZWNpZmllZCBjb250cmFjdCBjb2RlIG9yIGRhdGEgc28gYWRkcmVzcyBpcyByZXF1aXJlZCB0byBsb2FkIG1pc3NpbmcgcGFydHMgZnJvbSBuZXR3b3JrLmAsXG4gICAgICAgICAgICBUT05DbGllbnRFcnJvci5jb2RlLkFERFJFU1NfUkVRVUlSRURfRk9SX1JVTl9MT0NBTCxcbiAgICAgICAgICAgIFRPTkNsaWVudEVycm9yLnNvdXJjZS5DTElFTlQsXG4gICAgICAgICk7XG4gICAgfVxuXG4gICAgc3RhdGljIG5ldHdvcmtTaWxlbnQoZGF0YTogeyBtc2dJZDogc3RyaW5nLCBzZW5kVGltZTogbnVtYmVyLCBleHBpcmU6IG51bWJlciwgdGltZW91dDogbnVtYmVyIH0pIHtcbiAgICAgICAgcmV0dXJuIG5ldyBUT05DbGllbnRFcnJvcihcbiAgICAgICAgICAgICdOZXR3b3JrIHNpbGVudDogbm8gYmxvY2tzIHByb2R1Y2VkIGR1cmluZyB0aW1lb3V0LicsXG4gICAgICAgICAgICBUT05DbGllbnRFcnJvci5jb2RlLk5FVFdPUktfU0lMRU5ULFxuICAgICAgICAgICAgVE9OQ2xpZW50RXJyb3Iuc291cmNlLkNMSUVOVCxcbiAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICBtZXNzYWdlSWQ6IGRhdGEubXNnSWQsXG4gICAgICAgICAgICAgICAgc2VuZFRpbWU6IFRPTkNsaWVudEVycm9yLmZvcm1hdFRpbWUoZGF0YS5zZW5kVGltZSksXG4gICAgICAgICAgICAgICAgZXhwaXJhdGlvblRpbWU6IFRPTkNsaWVudEVycm9yLmZvcm1hdFRpbWUoZGF0YS5leHBpcmUpLFxuICAgICAgICAgICAgICAgIHRpbWVvdXQ6IGRhdGEudGltZW91dCxcbiAgICAgICAgICAgIH1cbiAgICAgICAgKTtcbiAgICB9XG5cbiAgICBzdGF0aWMgdHJhbnNhY3Rpb25MYWcoZGF0YTogeyBtc2dJZDogc3RyaW5nLCBibG9ja0lkOiBzdHJpbmcsIHRyYW5zYWN0aW9uSWQ6IHN0cmluZywgdGltZW91dDogbnVtYmVyIH0pIHtcbiAgICAgICAgcmV0dXJuIG5ldyBUT05DbGllbnRFcnJvcihcbiAgICAgICAgICAgICdFeGlzdGluZyBibG9jayB0cmFuc2FjdGlvbiBub3QgZm91bmQgKG5vIHRyYW5zYWN0aW9uIGFwcGVhcmVkIGZvciB0aGUgbWFzdGVyY2hhaW4gYmxvY2sgd2l0aCBnZW5fdXRpbWUgPiBtZXNzYWdlIGV4cGlyYXRpb24gdGltZSknLFxuICAgICAgICAgICAgVE9OQ2xpZW50RXJyb3IuY29kZS5UUkFOU0FDVElPTl9MQUcsXG4gICAgICAgICAgICBUT05DbGllbnRFcnJvci5zb3VyY2UuQ0xJRU5ULFxuICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgIG1lc3NhZ2VJZDogZGF0YS5tc2dJZCxcbiAgICAgICAgICAgICAgICBibG9ja0lkOiBkYXRhLmJsb2NrSWQsXG4gICAgICAgICAgICAgICAgdHJhbnNhY3Rpb25JZDogZGF0YS50cmFuc2FjdGlvbklkLFxuICAgICAgICAgICAgICAgIHRpbWVvdXQ6IGRhdGEudGltZW91dCxcbiAgICAgICAgICAgIH1cbiAgICAgICAgKTtcbiAgICB9XG5cbiAgICBzdGF0aWMgdHJhbnNhY3Rpb25XYWl0VGltZW91dChkYXRhOiB7IG1zZ0lkOiBzdHJpbmcsIHNlbmRUaW1lOiBudW1iZXIsIHRpbWVvdXQ6IG51bWJlciB9KSB7XG4gICAgICAgIHJldHVybiBuZXcgVE9OQ2xpZW50RXJyb3IoXG4gICAgICAgICAgICAnVHJhbnNhY3Rpb24gZGlkIG5vdCBwcm9kdWNlZCBkdXJpbmcgc3BlY2lmaWVkIHRpbWVvdXQnLFxuICAgICAgICAgICAgVE9OQ2xpZW50RXJyb3IuY29kZS5UUkFOU0FDVElPTl9XQUlUX1RJTUVPVVQsXG4gICAgICAgICAgICBUT05DbGllbnRFcnJvci5zb3VyY2UuQ0xJRU5ULFxuICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgIG1lc3NhZ2VJZDogZGF0YS5tc2dJZCxcbiAgICAgICAgICAgICAgICBzZW5kVGltZTogVE9OQ2xpZW50RXJyb3IuZm9ybWF0VGltZShkYXRhLnNlbmRUaW1lKSxcbiAgICAgICAgICAgICAgICB0aW1lb3V0OiBkYXRhLnRpbWVvdXQsXG4gICAgICAgICAgICB9XG4gICAgICAgICk7XG4gICAgfVxuXG4gICAgc3RhdGljIGNsb2NrT3V0T2ZTeW5jKCkge1xuICAgICAgICByZXR1cm4gbmV3IFRPTkNsaWVudEVycm9yKFxuICAgICAgICAgICAgJ1lvdSBsb2NhbCBjbG9jayBpcyBvdXQgb2Ygc3luYyB3aXRoIHRoZSBzZXJ2ZXIgdGltZS4gJyArXG4gICAgICAgICAgICAnSXQgaXMgYSBjcml0aWNhbCBjb25kaXRpb24gZm9yIHNlbmRpbmcgbWVzc2FnZXMgdG8gdGhlIGJsb2NrY2hhaW4uICcgK1xuICAgICAgICAgICAgJ1BsZWFzZSBzeW5jIHlvdSBjbG9jayB3aXRoIHRoZSBpbnRlcm5ldCB0aW1lLicsXG4gICAgICAgICAgICBUT05DbGllbnRFcnJvci5jb2RlLkNMT0NLX09VVF9PRl9TWU5DLFxuICAgICAgICAgICAgVE9OQ2xpZW50RXJyb3Iuc291cmNlLkNMSUVOVCxcbiAgICAgICAgKTtcbiAgICB9XG5cbiAgICBzdGF0aWMgYWNjb3VudE1pc3NpbmcoYWRkcmVzczogc3RyaW5nKSB7XG4gICAgICAgIHJldHVybiBuZXcgVE9OQ2xpZW50RXJyb3IoXG4gICAgICAgICAgICBgQWNjb3VudCB3aXRoIGFkZHJlc3MgWyR7YWRkcmVzc31dIGRvZXNuJ3QgZXhpc3RzLiBgICtcbiAgICAgICAgICAgICdZb3UgaGF2ZSB0byBwcmVwYWlkIHRoaXMgYWNjb3VudCB0byBoYXZlIGEgcG9zaXRpdmUgYmFsYW5jZSBvbiB0aGVtIGFuZCB0aGVuIGRlcGxveSBhIGNvbnRyYWN0IGNvZGUgZm9yIHRoaXMgYWNjb3VudC4nICtcbiAgICAgICAgICAgICdTZWUgU0RLIGRvY3VtZW50YXRpb24gZm9yIGRldGFpbGVkIGluc3RydWN0aW9ucy4nLFxuICAgICAgICAgICAgVE9OQ2xpZW50RXJyb3IuY29kZS5BQ0NPVU5UX01JU1NJTkcsXG4gICAgICAgICAgICBUT05DbGllbnRFcnJvci5zb3VyY2UuQ0xJRU5ULFxuICAgICAgICApO1xuICAgIH1cblxuICAgIHN0YXRpYyBhY2NvdW50Q29kZU1pc3NpbmcoYWRkcmVzczogc3RyaW5nLCBiYWxhbmNlOiBzdHJpbmcpIHtcbiAgICAgICAgcmV0dXJuIG5ldyBUT05DbGllbnRFcnJvcihcbiAgICAgICAgICAgIGBBY2NvdW50IHdpdGggYWRkcmVzcyBbJHthZGRyZXNzfV0gZXhpc3RzIGJ1dCBoYXZlbid0IGEgY29udHJhY3QgY29kZSB5ZXQuIGAgK1xuICAgICAgICAgICAgJ1lvdSBoYXZlIHRvIGVuc3VyZSB0aGF0IGFuIGFjY291bnQgaGFzIGFuIGVub3VnaCBiYWxhbmNlIGZvciBkZXBsb3lpbmcgYSBjb250cmFjdCBjb2RlIGFuZCB0aGVuIGRlcGxveSBhIGNvbnRyYWN0IGNvZGUgZm9yIHRoaXMgYWNjb3VudC4gJyArXG4gICAgICAgICAgICBgQ3VycmVudCBhY2NvdW50IGJhbGFuY2UgaXMgWyR7YmFsYW5jZX1dLiBgICtcbiAgICAgICAgICAgICdTZWUgU0RLIGRvY3VtZW50YXRpb24gZm9yIGRldGFpbGVkIGluc3RydWN0aW9ucy4nLFxuICAgICAgICAgICAgVE9OQ2xpZW50RXJyb3IuY29kZS5BQ0NPVU5UX0NPREVfTUlTU0lORyxcbiAgICAgICAgICAgIFRPTkNsaWVudEVycm9yLnNvdXJjZS5DTElFTlQsXG4gICAgICAgICk7XG4gICAgfVxuXG4gICAgc3RhdGljIGFjY291bnRCYWxhbmNlVG9vTG93KGFkZHJlc3M6IHN0cmluZywgYmFsYW5jZTogc3RyaW5nKSB7XG4gICAgICAgIHJldHVybiBuZXcgVE9OQ2xpZW50RXJyb3IoXG4gICAgICAgICAgICBgQWNjb3VudCB3aXRoIGFkZHJlc3MgWyR7YWRkcmVzc31dIGhhcyB0b28gbG93IGJhbGFuY2UgWyR7YmFsYW5jZX1dLiBgICtcbiAgICAgICAgICAgICdZb3UgaGF2ZSB0byBzZW5kIHNvbWUgdmFsdWUgdG8gYWNjb3VudCBiYWxhbmNlIGZyb20gb3RoZXIgY29udHJhY3QgKGUuZy4gV2FsbGV0IGNvbnRyYWN0KS4gJyArXG4gICAgICAgICAgICAnU2VlIFNESyBkb2N1bWVudGF0aW9uIGZvciBkZXRhaWxlZCBpbnN0cnVjdGlvbnMuJyxcbiAgICAgICAgICAgIFRPTkNsaWVudEVycm9yLmNvZGUuQUNDT1VOVF9CQUxBTkNFX1RPT19MT1csXG4gICAgICAgICAgICBUT05DbGllbnRFcnJvci5zb3VyY2UuQ0xJRU5ULFxuICAgICAgICApO1xuICAgIH1cblxuICAgIHN0YXRpYyBpc01lc3NhZ2VFeHBpcmVkKGVycm9yOiBhbnkpOiBib29sZWFuIHtcbiAgICAgICAgcmV0dXJuIFRPTkNsaWVudEVycm9yLmlzQ2xpZW50RXJyb3IoZXJyb3IsIFRPTkNsaWVudEVycm9yLmNvZGUuTUVTU0FHRV9FWFBJUkVEKTtcbiAgICB9XG5cbiAgICBzdGF0aWMgaXNXYWl0Rm9yVGltZW91dChlcnJvcjogYW55KTogYm9vbGVhbiB7XG4gICAgICAgIHJldHVybiBUT05DbGllbnRFcnJvci5pc0NsaWVudEVycm9yKGVycm9yLCBUT05DbGllbnRFcnJvci5jb2RlLldBSVRfRk9SX1RJTUVPVVQpO1xuICAgIH1cbn1cbiJdfQ==