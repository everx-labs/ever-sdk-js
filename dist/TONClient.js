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

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

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
  // Contracts
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
    this.source = source || TONErrorSource.CLIENT;
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
      return new TONClientError('TON Client isn\'t configured', TONClientError.code.CLIENT_DOES_NOT_CONFIGURED, TONClientError.source.CLIENT);
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
      return new TONClientError('Network silent: no blocks produced during timeout.', TONClientError.code.NETWORK_SILENT, TONClientError.source.CLIENT, data && _objectSpread(_objectSpread({}, data), {}, {
        messageId: data.msgId,
        sendTime: TONClientError.formatTime(data.sendTime),
        expirationTime: TONClientError.formatTime(data.expire)
      }));
    }
  }, {
    key: "transactionLag",
    value: function transactionLag(data) {
      return new TONClientError('Existing block transaction not found (no transaction appeared for the masterchain block with gen_utime > message expiration time)', TONClientError.code.TRANSACTION_LAG, TONClientError.source.CLIENT, data && _objectSpread(_objectSpread({}, data), {}, {
        messageId: data.msgId
      }));
    }
  }, {
    key: "transactionWaitTimeout",
    value: function transactionWaitTimeout(data) {
      return new TONClientError('Transaction did not produced during specified timeout', TONClientError.code.TRANSACTION_WAIT_TIMEOUT, TONClientError.source.CLIENT, data && _objectSpread(_objectSpread({}, data), {}, {
        messageId: data.msgId,
        sendTime: TONClientError.formatTime(data.sendTime)
      }));
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
    key: "noBlocks",
    value: function noBlocks(workchain) {
      var workchainName = workchain === -1 ? 'masterchain' : "workchain ".concat(workchain);
      return new TONClientError("\"No blocks for ".concat(workchainName, " found\"."), TONErrorCode.NETWORK_SILENT, TONErrorSource.CLIENT);
    }
  }, {
    key: "invalidBlockchain",
    value: function invalidBlockchain(message) {
      return new TONClientError(message, TONErrorCode.NETWORK_SILENT);
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uL3NyYy9UT05DbGllbnQuanMiXSwibmFtZXMiOlsiVE9OQ2xpZW50IiwiY2xpZW50UGxhdGZvcm0iLCJtb2R1bGVzIiwiTWFwIiwiY29uZmlnIiwiZ2V0TW9kdWxlIiwiVE9OQ29uZmlnTW9kdWxlIiwiY3J5cHRvIiwiVE9OQ3J5cHRvTW9kdWxlIiwiY29udHJhY3RzIiwiVE9OQ29udHJhY3RzTW9kdWxlIiwiX3F1ZXJpZXMiLCJUT05RdWVyaWVzTW9kdWxlIiwicXVlcmllcyIsIl9jb250ZXh0IiwiX2NvcmVCcmlkZ2UiLCJ0cnlDcmVhdGVMaWJyYXJ5IiwicGxhdGZvcm0iLCJ1bmRlZmluZWQiLCJjcmVhdGVMaWJyYXJ5IiwiY29yZUxpYnJhcnkiLCJsaWJyYXJ5IiwiY29yZUNyZWF0ZUNvbnRleHQiLCJQcm9taXNlIiwicmVzb2x2ZSIsInJlcXVlc3QiLCJtZXRob2QiLCJwYXJhbXNKc29uIiwib25SZXN1bHQiLCJjb3JlUmVxdWVzdCIsInZhbHVlcyIsIm1vZHVsZSIsInNldHVwIiwiY2xvc2UiLCJjb250ZXh0IiwiY29yZURlc3Ryb3lDb250ZXh0IiwiTW9kdWxlQ2xhc3MiLCJuYW1lIiwibW9kdWxlTmFtZSIsImV4aXN0aW5nTW9kdWxlIiwiZ2V0Iiwic2V0Iiwic2VydmVyVGltZURlbHRhIiwic2VydmVyTm93IiwicXVlcnkiLCJyZXN1bHQiLCJkYXRhIiwiZ2V0TWFuYWdlbWVudEFjY2Vzc0tleSIsInBhcmFtcyIsInNpZ25lZE1hbmFnZW1lbnRBY2Nlc3NLZXkiLCJzaWduS2V5cyIsImFjY291bnRLZXlzIiwibWFuYWdlbWVudEFjY2Vzc0tleSIsIm5hY2xTaWduIiwidGV4dCIsInNlY3JldCIsIl9yZXNvbHZlU2lnbmVkTWFuYWdlbWVudEFjY2Vzc0tleSIsIm11dGF0aW9uIiwiYWNjb3VudCIsImtleXMiLCJyZWdpc3RlckFjY2Vzc0tleXMiLCJyZXZva2VBY2Nlc3NLZXlzIiwiZiIsInBhcmVudFNwYW4iLCJzcGFuIiwidHJhY2VyIiwic3RhcnRTcGFuIiwiY2hpbGRPZiIsInNldFRhZyIsIlRhZ3MiLCJTUEFOX0tJTkQiLCJmaW5pc2giLCJsb2ciLCJldmVudCIsInBheWxvYWQiLCJjbGllbnQiLCJzZXREYXRhIiwiVE9ORXJyb3JTb3VyY2UiLCJDTElFTlQiLCJOT0RFIiwiVE9ORXJyb3JDb2RlIiwiQ0xJRU5UX0RPRVNfTk9UX0NPTkZJR1VSRUQiLCJTRU5EX05PREVfUkVRVUVTVF9GQUlMRUQiLCJNRVNTQUdFX0FMUkVBRFlfRVhQSVJFRCIsIlJVTl9MT0NBTF9BQ0NPVU5UX0RPRVNfTk9UX0VYSVNUUyIsIldBSVRfRk9SX1RJTUVPVVQiLCJJTlRFUk5BTF9FUlJPUiIsIlFVRVJZX0ZBSUxFRCIsIk1FU1NBR0VfRVhQSVJFRCIsIlNFUlZFUl9ET0VTTlRfU1VQUE9SVF9BR0dSRUdBVElPTlMiLCJJTlZBTElEX0NPTlMiLCJBRERSRVNTX1JFUVVJUkVEX0ZPUl9SVU5fTE9DQUwiLCJORVRXT1JLX1NJTEVOVCIsIlRSQU5TQUNUSU9OX0xBRyIsIlRSQU5TQUNUSU9OX1dBSVRfVElNRU9VVCIsIkNMT0NLX09VVF9PRl9TWU5DIiwiQUNDT1VOVF9NSVNTSU5HIiwiQUNDT1VOVF9DT0RFX01JU1NJTkciLCJBQ0NPVU5UX0JBTEFOQ0VfVE9PX0xPVyIsIkFDQ09VTlRfRlJPWkVOX09SX0RFTEVURUQiLCJDT05UUkFDVF9FWEVDVVRJT05fRkFJTEVEIiwiVE9OQ29udHJhY3RFeGl0Q29kZSIsIlJFUExBWV9QUk9URUNUSU9OIiwiTk9fR0FTIiwiVE9OQ2xpZW50RXJyb3IiLCJtZXNzYWdlIiwiY29kZSIsInNvdXJjZSIsImVycm9yIiwiZXhpdENvZGUiLCJleGl0X2NvZGUiLCJyZXNwb25zZVRleHQiLCJmdW5jdGlvbk5hbWUiLCJhZGRyZXNzIiwiZXJyb3JzIiwibWFwIiwieCIsInRvU3RyaW5nIiwiam9pbiIsInRpbWUiLCJEYXRlIiwidG9JU09TdHJpbmciLCJtZXNzYWdlSWQiLCJtc2dJZCIsInNlbmRUaW1lIiwiZm9ybWF0VGltZSIsImV4cGlyYXRpb25UaW1lIiwiZXhwaXJlIiwiYmxvY2tUaW1lIiwiYmFsYW5jZSIsIndvcmtjaGFpbiIsIndvcmtjaGFpbk5hbWUiLCJpc0NsaWVudEVycm9yIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7QUFLQTs7QUFZQTs7QUFDQTs7QUFDQTs7QUFFQTs7QUFPQTs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQXFCQTs7Ozs7SUFLYUEsUzs7OytCQUNTQyxjLEVBQW1DO0FBQ2pERCxNQUFBQSxTQUFTLENBQUNDLGNBQVYsR0FBMkJBLGNBQTNCO0FBQ0gsSyxDQUdEOzs7O0FBU0EsdUJBQWM7QUFBQTs7QUFBQTs7QUFBQTs7QUFBQTs7QUFBQTs7QUFBQTs7QUFBQTs7QUFBQTs7QUFBQTs7QUFDVixTQUFLQyxPQUFMLEdBQWUsSUFBSUMsR0FBSixFQUFmO0FBQ0EsU0FBS0MsTUFBTCxHQUFjLEtBQUtDLFNBQUwsQ0FBZUMsMkJBQWYsQ0FBZDtBQUNBLFNBQUtDLE1BQUwsR0FBYyxLQUFLRixTQUFMLENBQWVHLDJCQUFmLENBQWQ7QUFDQSxTQUFLQyxTQUFMLEdBQWlCLEtBQUtKLFNBQUwsQ0FBZUssOEJBQWYsQ0FBakI7QUFDQSxTQUFLQyxRQUFMLEdBQWdCLEtBQUtOLFNBQUwsQ0FBZU8sNEJBQWYsQ0FBaEI7QUFDQSxTQUFLQyxPQUFMLEdBQWUsS0FBS0YsUUFBcEI7QUFDQSxTQUFLRyxRQUFMLEdBQWdCLENBQWhCO0FBQ0EsU0FBS0MsV0FBTCxHQUFtQixJQUFuQjtBQUNIO0FBRUQ7Ozs7Ozs7Ozs7QUFZQTs7Ozs7Ozs7Ozs7Ozs7QUFLVUMsZ0JBQUFBLGdCOzBGQUFtQjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFDZkMsNEJBQUFBLFFBRGUsR0FDSmpCLFNBQVMsQ0FBQ0MsY0FETjs7QUFBQSxrQ0FFakJnQixRQUFRLEtBQUssSUFBYixJQUFxQkEsUUFBUSxLQUFLQyxTQUZqQjtBQUFBO0FBQUE7QUFBQTs7QUFBQSw2REFHVixJQUhVOztBQUFBO0FBQUE7QUFBQSxtQ0FLU0QsUUFBUSxDQUFDRSxhQUFULEVBTFQ7O0FBQUE7QUFLckJuQiw0QkFBQUEsU0FBUyxDQUFDb0IsV0FMVztBQUFBLDZEQU1kcEIsU0FBUyxDQUFDb0IsV0FOSTs7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxtQjs7a0NBQW5CSixnQjs7Ozs7K0JBUVVoQixTQUFTLENBQUNvQixXOzs7Ozs7Ozt1QkFBcUJKLGdCQUFnQixFOzs7Ozs7QUFBekRLLGdCQUFBQSxPOztvQkFDREEsTzs7Ozs7Ozs7c0JBR0QsS0FBS04sV0FBTCxLQUFxQixJQUFyQixJQUE2QixLQUFLQSxXQUFMLEtBQXFCRyxTOzs7OztxQkFDOUNHLE9BQU8sQ0FBQ0MsaUI7Ozs7Ozt1QkFDYyxJQUFJQyxPQUFKLENBQVksVUFBQ0MsT0FBRDtBQUFBLHlCQUFhSCxPQUFPLENBQUNDLGlCQUFSLENBQTBCRSxPQUExQixDQUFiO0FBQUEsaUJBQVosQzs7O0FBQXRCLHFCQUFLVixRO0FBQ0wscUJBQUtDLFdBQUwsR0FBbUI7QUFDZlUsa0JBQUFBLE9BQU8sRUFBRSxpQkFDTEMsTUFESyxFQUVMQyxVQUZLLEVBR0xDLFFBSEssRUFJRTtBQUNQLHdCQUFJNUIsU0FBUyxDQUFDb0IsV0FBZCxFQUEyQjtBQUN2QnBCLHNCQUFBQSxTQUFTLENBQUNvQixXQUFWLENBQXNCUyxXQUF0QixDQUFrQyxLQUFJLENBQUNmLFFBQXZDLEVBQWlEWSxNQUFqRCxFQUF5REMsVUFBekQsRUFBcUVDLFFBQXJFO0FBQ0g7QUFDSjtBQVRjLGlCQUFuQjs7Ozs7QUFZQSxxQkFBS2IsV0FBTCxHQUFtQk0sT0FBbkI7OztBQUdGbkIsZ0JBQUFBLE8sc0JBQTJCLEtBQUtBLE9BQUwsQ0FBYTRCLE1BQWIsRTt1REFDWjVCLE87Ozs7Ozs7Ozs7O0FBQVY2QixnQkFBQUEsTTs7dUJBQ0RBLE1BQU0sQ0FBQ0MsS0FBUCxFOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBSWQ7Ozs7Ozs7Ozs7Ozs7Ozs7dUJBTVUsS0FBS25CLE9BQUwsQ0FBYW9CLEtBQWIsRTs7O0FBQ0FaLGdCQUFBQSxPLEdBQVVyQixTQUFTLENBQUNvQixXOztzQkFDdEIsS0FBS04sUUFBTCxHQUFnQixDQUFoQixJQUFxQk8sT0FBTyxLQUFLLElBQWpDLElBQXlDQSxPQUFPLEtBQUtILFM7Ozs7O0FBQy9DZ0IsZ0JBQUFBLE8sR0FBVSxLQUFLcEIsUTtBQUNyQixxQkFBS0MsV0FBTCxHQUFtQixJQUFuQjtBQUNBLHFCQUFLRCxRQUFMLEdBQWdCLENBQWhCOzt1QkFDTSxJQUFJUyxPQUFKLENBQVksVUFBQUMsT0FBTztBQUFBLHlCQUFJSCxPQUFPLENBQUNjLGtCQUFSLENBQTJCRCxPQUEzQixFQUFvQ1YsT0FBcEMsQ0FBSjtBQUFBLGlCQUFuQixDOzs7Ozs7Ozs7Ozs7Ozs7UUFJZDs7OztvQ0FFc0M7QUFDbEMsYUFBTyxLQUFLVCxXQUFaO0FBQ0g7Ozs4QkFFWXFCLFcsRUFBa0M7QUFDM0MsVUFBTUMsSUFBSSxHQUFHRCxXQUFXLENBQUNFLFVBQXpCO0FBQ0EsVUFBTUMsY0FBYyxHQUFHLEtBQUtyQyxPQUFMLENBQWFzQyxHQUFiLENBQWlCSCxJQUFqQixDQUF2Qjs7QUFDQSxVQUFJRSxjQUFKLEVBQW9CO0FBQ2hCLGVBQVFBLGNBQVI7QUFDSDs7QUFDRCxVQUFNUixNQUFNLEdBQUcsSUFBSUssV0FBSixDQUFnQixJQUFoQixDQUFmO0FBQ0EsV0FBS2xDLE9BQUwsQ0FBYXVDLEdBQWIsQ0FBaUJKLElBQWpCLEVBQXVCTixNQUF2QjtBQUNBLGFBQVFBLE1BQVI7QUFDSDs7O3NDQUVrQztBQUMvQixhQUFPLEtBQUtwQixRQUFMLENBQWMrQixlQUFkLEVBQVA7QUFDSDs7O2dDQUU0QjtBQUN6QixhQUFPLEtBQUsvQixRQUFMLENBQWNnQyxTQUFkLEVBQVA7QUFDSDs7Ozs7Ozs7Ozs7dUJBR3dCLEtBQUtoQyxRQUFMLENBQWNpQyxLQUFkLENBQW9CLCtCQUFwQixDOzs7QUFBZkMsZ0JBQUFBLE07a0RBQ0NBLE1BQU0sQ0FBQ0MsSUFBUCxDQUFZQyxzQjs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs4SEFJaUJDLE07Ozs7OztxQkFDaENBLE1BQU0sQ0FBQ0MseUI7Ozs7O2tEQUNBRCxNQUFNLENBQUNDLHlCOzs7QUFFWkMsZ0JBQUFBLFEsR0FBV0YsTUFBTSxDQUFDRyxXOztxQkFDcEJELFE7Ozs7Ozt1QkFDa0MsS0FBS0gsc0JBQUwsRTs7O0FBQTVCSyxnQkFBQUEsbUI7a0RBQ0MsS0FBSzdDLE1BQUwsQ0FBWThDLFFBQVosQ0FDSDtBQUFFQyxrQkFBQUEsSUFBSSxFQUFFRjtBQUFSLGlCQURHLFlBRUFGLFFBQVEsQ0FBQ0ssTUFGVCxTQUVrQkwsUUFBUSxVQUYxQixHQUdILEtBSEcsQzs7O2tEQUtKLEU7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7K0dBSVBGLE07Ozs7Ozs7dUJBRXdDLEtBQUtRLGlDQUFMLENBQXVDUixNQUF2QyxDOzs7QUFBbENDLGdCQUFBQSx5Qjs7dUJBQ2UsS0FBS3RDLFFBQUwsQ0FBYzhDLFFBQWQsOFBBR1Q7QUFDSkMsa0JBQUFBLE9BQU8sRUFBRVYsTUFBTSxDQUFDVSxPQURaO0FBRUpDLGtCQUFBQSxJQUFJLEVBQUVYLE1BQU0sQ0FBQ1csSUFGVDtBQUdKVixrQkFBQUEseUJBQXlCLEVBQXpCQTtBQUhJLGlCQUhTLEM7OztBQUFmSixnQkFBQUEsTTtrREFRQ0EsTUFBTSxDQUFDQyxJQUFQLENBQVljLGtCOzs7Ozs7Ozs7Ozs7Ozs7Ozs7OzZHQUluQlosTTs7Ozs7Ozt1QkFFd0MsS0FBS1EsaUNBQUwsQ0FBdUNSLE1BQXZDLEM7OztBQUFsQ0MsZ0JBQUFBLHlCOzt1QkFDZSxLQUFLdEMsUUFBTCxDQUFjOEMsUUFBZCx1UEFHVDtBQUNKQyxrQkFBQUEsT0FBTyxFQUFFVixNQUFNLENBQUNVLE9BRFo7QUFFSkMsa0JBQUFBLElBQUksRUFBRVgsTUFBTSxDQUFDVyxJQUZUO0FBR0pWLGtCQUFBQSx5QkFBeUIsRUFBekJBO0FBSEksaUJBSFMsQzs7O0FBQWZKLGdCQUFBQSxNO2tEQVFDQSxNQUFNLENBQUNDLElBQVAsQ0FBWWUsZ0I7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7a0dBSW5CeEIsSSxFQUNBeUIsQyxFQUNBQyxVOzs7Ozs7QUFFTUMsZ0JBQUFBLEksR0FBTyxLQUFLNUQsTUFBTCxDQUFZNkQsTUFBWixDQUFtQkMsU0FBbkIsQ0FBNkI3QixJQUE3QixFQUFtQztBQUFFOEIsa0JBQUFBLE9BQU8sRUFBRUo7QUFBWCxpQkFBbkMsQzs7QUFFVEMsZ0JBQUFBLElBQUksQ0FBQ0ksTUFBTCxDQUFZQyxrQkFBS0MsU0FBakIsRUFBNEIsUUFBNUI7O3VCQUNxQlIsQ0FBQyxDQUFDRSxJQUFELEM7OztBQUFoQm5CLGdCQUFBQSxNOztBQUNOLG9CQUFJQSxNQUFNLEtBQUszQixTQUFmLEVBQTBCO0FBQ3RCOEMsa0JBQUFBLElBQUksQ0FBQ0ksTUFBTCxDQUFZLFFBQVosRUFBc0J2QixNQUF0QjtBQUNIOztBQUNEbUIsZ0JBQUFBLElBQUksQ0FBQ08sTUFBTDtrREFDTzFCLE07Ozs7O0FBRVBtQixnQkFBQUEsSUFBSSxDQUFDUSxHQUFMLENBQVM7QUFBRUMsa0JBQUFBLEtBQUssRUFBRSxRQUFUO0FBQW1CQyxrQkFBQUEsT0FBTztBQUExQixpQkFBVDtBQUNBVixnQkFBQUEsSUFBSSxDQUFDTyxNQUFMOzs7Ozs7Ozs7Ozs7Ozs7O1FBS1I7Ozs7O21HQWpLb0JuRSxNOzs7Ozs7QUFDVnVFLGdCQUFBQSxNLEdBQVMsSUFBSTNFLFNBQUosRTtBQUNmMkUsZ0JBQUFBLE1BQU0sQ0FBQ3ZFLE1BQVAsQ0FBY3dFLE9BQWQsQ0FBc0J4RSxNQUF0Qjs7dUJBQ011RSxNQUFNLENBQUMzQyxLQUFQLEU7OztrREFDQzJDLE07Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O2dCQW5DRjNFLFMsb0JBa01tQyxJOztnQkFsTW5DQSxTLGlCQW1NbUMsSTs7QUFNekMsSUFBTTZFLGNBQWMsR0FBRztBQUMxQkMsRUFBQUEsTUFBTSxFQUFFLFFBRGtCO0FBRTFCQyxFQUFBQSxJQUFJLEVBQUU7QUFGb0IsQ0FBdkI7O0FBS0EsSUFBTUMsWUFBWSxHQUFHO0FBQ3hCQyxFQUFBQSwwQkFBMEIsRUFBRSxJQURKO0FBRXhCQyxFQUFBQSx3QkFBd0IsRUFBRSxJQUZGO0FBR3hCQyxFQUFBQSx1QkFBdUIsRUFBRSxJQUhEO0FBSXhCQyxFQUFBQSxpQ0FBaUMsRUFBRSxJQUpYO0FBS3hCQyxFQUFBQSxnQkFBZ0IsRUFBRSxJQUxNO0FBTXhCQyxFQUFBQSxjQUFjLEVBQUUsSUFOUTtBQU94QkMsRUFBQUEsWUFBWSxFQUFFLElBUFU7QUFReEJDLEVBQUFBLGVBQWUsRUFBRSxJQVJPO0FBU3hCQyxFQUFBQSxrQ0FBa0MsRUFBRSxJQVRaO0FBVXhCQyxFQUFBQSxZQUFZLEVBQUUsSUFWVTtBQVd4QkMsRUFBQUEsOEJBQThCLEVBQUUsSUFYUjtBQVl4QkMsRUFBQUEsY0FBYyxFQUFFLElBWlE7QUFheEJDLEVBQUFBLGVBQWUsRUFBRSxJQWJPO0FBY3hCQyxFQUFBQSx3QkFBd0IsRUFBRSxJQWRGO0FBZXhCQyxFQUFBQSxpQkFBaUIsRUFBRSxJQWZLO0FBZ0J4QkMsRUFBQUEsZUFBZSxFQUFFLElBaEJPO0FBaUJ4QkMsRUFBQUEsb0JBQW9CLEVBQUUsSUFqQkU7QUFrQnhCQyxFQUFBQSx1QkFBdUIsRUFBRSxJQWxCRDtBQW1CeEJDLEVBQUFBLHlCQUF5QixFQUFFLElBbkJIO0FBcUJ4QjtBQUVBQyxFQUFBQSx5QkFBeUIsRUFBRTtBQXZCSCxDQUFyQjs7QUEwQkEsSUFBTUMsbUJBQW1CLEdBQUc7QUFDL0JDLEVBQUFBLGlCQUFpQixFQUFFLEVBRFk7QUFFL0JkLEVBQUFBLGVBQWUsRUFBRSxFQUZjO0FBRy9CZSxFQUFBQSxNQUFNLEVBQUU7QUFIdUIsQ0FBNUI7OztJQU1NQyxjO0FBU1QsMEJBQVlDLE9BQVosRUFBNkJDLElBQTdCLEVBQTJDQyxNQUEzQyxFQUE0RDdELElBQTVELEVBQXdFO0FBQUE7O0FBQUE7O0FBQUE7O0FBQUE7O0FBQUE7O0FBQ3BFLFNBQUsyRCxPQUFMLEdBQWVBLE9BQWY7QUFDQSxTQUFLQyxJQUFMLEdBQVlBLElBQVo7QUFDQSxTQUFLQyxNQUFMLEdBQWNBLE1BQU0sSUFBSTlCLGNBQWMsQ0FBQ0MsTUFBdkM7QUFDQSxTQUFLaEMsSUFBTCxHQUFZQSxJQUFaO0FBQ0g7Ozs7a0NBRW9COEQsSyxFQUFZRixJLEVBQXVCO0FBQ3BELGFBQVFFLEtBQUssQ0FBQ0QsTUFBTixLQUFpQkgsY0FBYyxDQUFDRyxNQUFmLENBQXNCN0IsTUFBeEMsSUFDQzhCLEtBQUssQ0FBQ0YsSUFBTixLQUFlQSxJQUR2QjtBQUVIOzs7Z0NBRWtCRSxLLEVBQVlGLEksRUFBdUI7QUFDbEQsYUFBUUUsS0FBSyxDQUFDRCxNQUFOLEtBQWlCSCxjQUFjLENBQUNHLE1BQWYsQ0FBc0I1QixJQUF4QyxJQUNDNkIsS0FBSyxDQUFDRixJQUFOLEtBQWVBLElBRHZCO0FBRUg7OztvQ0FFc0JFLEssRUFBWUMsUSxFQUEyQjtBQUMxRCxhQUFRRCxLQUFLLENBQUNELE1BQU4sS0FBaUJILGNBQWMsQ0FBQ0csTUFBZixDQUFzQjVCLElBQXhDLElBQ0M2QixLQUFLLENBQUNGLElBQU4sS0FBZUYsY0FBYyxDQUFDRSxJQUFmLENBQW9CTix5QkFEcEMsSUFFQ1EsS0FBSyxDQUFDOUQsSUFBTixJQUFjOEQsS0FBSyxDQUFDOUQsSUFBTixDQUFXZ0UsU0FBWCxLQUF5QkQsUUFGL0M7QUFHSDs7O2tDQUVvQkosTyxFQUFpQztBQUNsRCxhQUFPLElBQUlELGNBQUosMkJBQ2dCQyxPQURoQixHQUVIRCxjQUFjLENBQUNFLElBQWYsQ0FBb0JwQixjQUZqQixFQUdIa0IsY0FBYyxDQUFDRyxNQUFmLENBQXNCN0IsTUFIbkIsQ0FBUDtBQUtIOzs7a0NBRW9DO0FBQ2pDLGFBQU8sSUFBSTBCLGNBQUosQ0FDSCx1RUFERyxFQUVIQSxjQUFjLENBQUNFLElBQWYsQ0FBb0JoQixZQUZqQixFQUdIYyxjQUFjLENBQUNHLE1BQWYsQ0FBc0I3QixNQUhuQixDQUFQO0FBS0g7Ozs4Q0FFZ0Q7QUFDN0MsYUFBTyxJQUFJMEIsY0FBSixDQUNILDhCQURHLEVBRUhBLGNBQWMsQ0FBQ0UsSUFBZixDQUFvQnpCLDBCQUZqQixFQUdIdUIsY0FBYyxDQUFDRyxNQUFmLENBQXNCN0IsTUFIbkIsQ0FBUDtBQUtIOzs7MENBRTRCaUMsWSxFQUFzQztBQUMvRCxhQUFPLElBQUlQLGNBQUoscUNBQzBCTyxZQUQxQixHQUVIUCxjQUFjLENBQUNFLElBQWYsQ0FBb0J4Qix3QkFGakIsRUFHSHNCLGNBQWMsQ0FBQ0csTUFBZixDQUFzQjdCLE1BSG5CLENBQVA7QUFLSDs7O2lEQUVtQ2tDLFksRUFBc0JDLE8sRUFBaUM7QUFDdkYsYUFBTyxJQUFJVCxjQUFKLFlBQ0NRLFlBREQsMENBQzZDQyxPQUQ3Qyx3QkFFSFQsY0FBYyxDQUFDRSxJQUFmLENBQW9CdEIsaUNBRmpCLEVBR0hvQixjQUFjLENBQUNHLE1BQWYsQ0FBc0I3QixNQUhuQixDQUFQO0FBS0g7OztxQ0FFdUI7QUFDcEIsYUFBTyxJQUFJMEIsY0FBSixDQUNILHdDQURHLEVBRUhBLGNBQWMsQ0FBQ0UsSUFBZixDQUFvQnJCLGdCQUZqQixFQUdIbUIsY0FBYyxDQUFDRyxNQUFmLENBQXNCN0IsTUFIbkIsQ0FBUDtBQUtIOzs7Z0NBRWtCb0MsTSxFQUFpQjtBQUNoQyxhQUFPLElBQUlWLGNBQUoseUJBQ2NVLE1BQU0sQ0FBQ0MsR0FBUCxDQUFXLFVBQUFDLENBQUM7QUFBQSxlQUFJQSxDQUFDLENBQUNYLE9BQUYsSUFBYVcsQ0FBQyxDQUFDQyxRQUFGLEVBQWpCO0FBQUEsT0FBWixFQUEyQ0MsSUFBM0MsQ0FBZ0QsSUFBaEQsQ0FEZCxHQUVIZCxjQUFjLENBQUNFLElBQWYsQ0FBb0JuQixZQUZqQixFQUdIaUIsY0FBYyxDQUFDRyxNQUFmLENBQXNCN0IsTUFIbkIsQ0FBUDtBQUtIOzs7K0JBRWlCeUMsSSxFQUF3QjtBQUN0QyxVQUFJQSxJQUFKLEVBQVU7QUFDTix5QkFBVSxJQUFJQyxJQUFKLENBQVNELElBQUksR0FBRyxJQUFoQixFQUFzQkUsV0FBdEIsRUFBVixlQUFrREYsSUFBbEQ7QUFDSCxPQUZELE1BRU87QUFDSCxlQUFPLElBQVA7QUFDSDtBQUNKOzs7bUNBRXFCekUsSSxFQUFnRjtBQUNsRyxhQUFPLElBQUkwRCxjQUFKLENBQ0gsaUJBREcsRUFFSEEsY0FBYyxDQUFDRSxJQUFmLENBQW9CbEIsZUFGakIsRUFHSGdCLGNBQWMsQ0FBQ0csTUFBZixDQUFzQjdCLE1BSG5CLEVBSUg7QUFDSTRDLFFBQUFBLFNBQVMsRUFBRTVFLElBQUksQ0FBQzZFLEtBRHBCO0FBRUlDLFFBQUFBLFFBQVEsRUFBRXBCLGNBQWMsQ0FBQ3FCLFVBQWYsQ0FBMEIvRSxJQUFJLENBQUM4RSxRQUEvQixDQUZkO0FBR0lFLFFBQUFBLGNBQWMsRUFBRXRCLGNBQWMsQ0FBQ3FCLFVBQWYsQ0FBMEIvRSxJQUFJLENBQUNpRixNQUEvQixDQUhwQjtBQUlJQyxRQUFBQSxTQUFTLEVBQUV4QixjQUFjLENBQUNxQixVQUFmLENBQTBCL0UsSUFBSSxDQUFDa0YsU0FBL0I7QUFKZixPQUpHLENBQVA7QUFXSDs7O3NEQUV3QztBQUNyQyxhQUFPLElBQUl4QixjQUFKLENBQ0gsc0NBREcsRUFFSEEsY0FBYyxDQUFDRSxJQUFmLENBQW9CakIsa0NBRmpCLEVBR0hlLGNBQWMsQ0FBQ0csTUFBZixDQUFzQjdCLE1BSG5CLENBQVA7QUFLSDs7O2lEQUVtQztBQUNoQyxhQUFPLElBQUkwQixjQUFKLDJJQUVIQSxjQUFjLENBQUNFLElBQWYsQ0FBb0JmLDhCQUZqQixFQUdIYSxjQUFjLENBQUNHLE1BQWYsQ0FBc0I3QixNQUhuQixDQUFQO0FBS0g7OztrQ0FFb0JoQyxJLEVBQTRFO0FBQzdGLGFBQU8sSUFBSTBELGNBQUosQ0FDSCxvREFERyxFQUVIQSxjQUFjLENBQUNFLElBQWYsQ0FBb0JkLGNBRmpCLEVBR0hZLGNBQWMsQ0FBQ0csTUFBZixDQUFzQjdCLE1BSG5CLEVBSUhoQyxJQUFJLG9DQUNHQSxJQURIO0FBRUE0RSxRQUFBQSxTQUFTLEVBQUU1RSxJQUFJLENBQUM2RSxLQUZoQjtBQUdBQyxRQUFBQSxRQUFRLEVBQUVwQixjQUFjLENBQUNxQixVQUFmLENBQTBCL0UsSUFBSSxDQUFDOEUsUUFBL0IsQ0FIVjtBQUlBRSxRQUFBQSxjQUFjLEVBQUV0QixjQUFjLENBQUNxQixVQUFmLENBQTBCL0UsSUFBSSxDQUFDaUYsTUFBL0I7QUFKaEIsUUFKRCxDQUFQO0FBV0g7OzttQ0FFcUJqRixJLEVBQWtGO0FBQ3BHLGFBQU8sSUFBSTBELGNBQUosQ0FDSCxtSUFERyxFQUVIQSxjQUFjLENBQUNFLElBQWYsQ0FBb0JiLGVBRmpCLEVBR0hXLGNBQWMsQ0FBQ0csTUFBZixDQUFzQjdCLE1BSG5CLEVBSUhoQyxJQUFJLG9DQUNHQSxJQURIO0FBRUE0RSxRQUFBQSxTQUFTLEVBQUU1RSxJQUFJLENBQUM2RTtBQUZoQixRQUpELENBQVA7QUFTSDs7OzJDQUU2QjdFLEksRUFBNEQ7QUFDdEYsYUFBTyxJQUFJMEQsY0FBSixDQUNILHVEQURHLEVBRUhBLGNBQWMsQ0FBQ0UsSUFBZixDQUFvQlosd0JBRmpCLEVBR0hVLGNBQWMsQ0FBQ0csTUFBZixDQUFzQjdCLE1BSG5CLEVBSUhoQyxJQUFJLG9DQUNHQSxJQURIO0FBRUE0RSxRQUFBQSxTQUFTLEVBQUU1RSxJQUFJLENBQUM2RSxLQUZoQjtBQUdBQyxRQUFBQSxRQUFRLEVBQUVwQixjQUFjLENBQUNxQixVQUFmLENBQTBCL0UsSUFBSSxDQUFDOEUsUUFBL0I7QUFIVixRQUpELENBQVA7QUFVSDs7O3FDQUV1QjtBQUNwQixhQUFPLElBQUlwQixjQUFKLENBQ0gsMERBQ0EscUVBREEsR0FFQSwrQ0FIRyxFQUlIQSxjQUFjLENBQUNFLElBQWYsQ0FBb0JYLGlCQUpqQixFQUtIUyxjQUFjLENBQUNHLE1BQWYsQ0FBc0I3QixNQUxuQixDQUFQO0FBT0g7OzttQ0FFcUJtQyxPLEVBQWlCO0FBQ25DLGFBQU8sSUFBSVQsY0FBSixDQUNILGdDQUF5QlMsT0FBekIsMEJBQ0EsdUhBREEsR0FFQSxrREFIRyxFQUlIVCxjQUFjLENBQUNFLElBQWYsQ0FBb0JWLGVBSmpCLEVBS0hRLGNBQWMsQ0FBQ0csTUFBZixDQUFzQjdCLE1BTG5CLENBQVA7QUFPSDs7O3VDQUV5Qm1DLE8sRUFBaUJnQixPLEVBQWlCO0FBQ3hELGFBQU8sSUFBSXpCLGNBQUosQ0FDSCxnQ0FBeUJTLE9BQXpCLGtEQUNBLDJJQURBLHlDQUUrQmdCLE9BRi9CLFdBR0Esa0RBSkcsRUFLSHpCLGNBQWMsQ0FBQ0UsSUFBZixDQUFvQlQsb0JBTGpCLEVBTUhPLGNBQWMsQ0FBQ0csTUFBZixDQUFzQjdCLE1BTm5CLENBQVA7QUFRSDs7O3lDQUUyQm1DLE8sRUFBaUJnQixPLEVBQWlCO0FBQzFELGFBQU8sSUFBSXpCLGNBQUosQ0FDSCxnQ0FBeUJTLE9BQXpCLG9DQUEwRGdCLE9BQTFELFdBQ0EsNkZBREEsR0FFQSxrREFIRyxFQUlIekIsY0FBYyxDQUFDRSxJQUFmLENBQW9CUix1QkFKakIsRUFLSE0sY0FBYyxDQUFDRyxNQUFmLENBQXNCN0IsTUFMbkIsQ0FBUDtBQU9IOzs7NkJBRWVvRCxTLEVBQW1CO0FBQy9CLFVBQU1DLGFBQWEsR0FBR0QsU0FBUyxLQUFLLENBQUMsQ0FBZixHQUFtQixhQUFuQix1QkFBZ0RBLFNBQWhELENBQXRCO0FBQ0EsYUFBTyxJQUFJMUIsY0FBSiwyQkFDZTJCLGFBRGYsZ0JBRUhuRCxZQUFZLENBQUNZLGNBRlYsRUFHSGYsY0FBYyxDQUFDQyxNQUhaLENBQVA7QUFLSDs7O3NDQUV3QjJCLE8sRUFBaUI7QUFDdEMsYUFBTyxJQUFJRCxjQUFKLENBQW1CQyxPQUFuQixFQUE0QnpCLFlBQVksQ0FBQ1ksY0FBekMsQ0FBUDtBQUNIOzs7cUNBRXVCZ0IsSyxFQUFxQjtBQUN6QyxhQUFPSixjQUFjLENBQUM0QixhQUFmLENBQTZCeEIsS0FBN0IsRUFBb0NKLGNBQWMsQ0FBQ0UsSUFBZixDQUFvQmxCLGVBQXhELENBQVA7QUFDSDs7O3FDQUV1Qm9CLEssRUFBcUI7QUFDekMsYUFBT0osY0FBYyxDQUFDNEIsYUFBZixDQUE2QnhCLEtBQTdCLEVBQW9DSixjQUFjLENBQUNFLElBQWYsQ0FBb0JyQixnQkFBeEQsQ0FBUDtBQUNIOzs7Ozs7OztnQkFqT1FtQixjLFlBQ08zQixjOztnQkFEUDJCLGMsVUFFS3hCLFkiLCJzb3VyY2VzQ29udGVudCI6WyIvKlxuICogQ29weXJpZ2h0IDIwMTgtMjAyMCBUT04gREVWIFNPTFVUSU9OUyBMVEQuXG4gKi9cbi8vIEBmbG93XG5cbmltcG9ydCB7VGFncywgU3BhbiwgU3BhbkNvbnRleHR9IGZyb20gXCJvcGVudHJhY2luZ1wiO1xuaW1wb3J0IHR5cGUge1xuICAgIElUT05DbGllbnQsXG4gICAgVE9OQWNjZXNzS2V5c01hbmFnZW1lbnRQYXJhbXMsXG4gICAgVE9OQ29uZmlnRGF0YSxcbiAgICBUT05Db250cmFjdHMsXG4gICAgVE9OQ3J5cHRvLFxuICAgIFRPTlF1ZXJpZXMsXG4gICAgVE9OUmVnaXN0ZXJBY2Nlc3NLZXlzUGFyYW1zLFxuICAgIFRPTlJldm9rZUFjY2Vzc0tleXNQYXJhbXMsXG59IGZyb20gXCIuLi90eXBlc1wiO1xuXG5pbXBvcnQgVE9OQ29uZmlnTW9kdWxlIGZyb20gJy4vbW9kdWxlcy9UT05Db25maWdNb2R1bGUnO1xuaW1wb3J0IFRPTkNvbnRyYWN0c01vZHVsZSBmcm9tICcuL21vZHVsZXMvVE9OQ29udHJhY3RzTW9kdWxlJztcbmltcG9ydCBUT05DcnlwdG9Nb2R1bGUgZnJvbSAnLi9tb2R1bGVzL1RPTkNyeXB0b01vZHVsZSc7XG4vKiBlc2xpbnQtZGlzYWJsZSBjbGFzcy1tZXRob2RzLXVzZS10aGlzLCBuby11c2UtYmVmb3JlLWRlZmluZSAqL1xuaW1wb3J0IFRPTlF1ZXJpZXNNb2R1bGUgZnJvbSBcIi4vbW9kdWxlcy9UT05RdWVyaWVzTW9kdWxlXCI7XG5cbmltcG9ydCB0eXBlIHtcbiAgICBUT05DbGllbnRDb3JlTGlicmFyeSxcbiAgICBUT05DbGllbnRDb3JlQnJpZGdlLFxuICAgIFRPTk1vZHVsZUNvbnRleHRcbn0gZnJvbSAnLi9UT05Nb2R1bGUnO1xuaW1wb3J0IHtUT05Nb2R1bGV9IGZyb20gJy4vVE9OTW9kdWxlJztcblxuLyoqXG4gKiBKYXZhU2NyaXB0IHBsYXRmb3JtIHNwZWNpZmljIGNvbmZpZ3VyYXRpb25cbiAqL1xudHlwZSBUT05DbGllbnRQbGF0Zm9ybSA9IHtcbiAgICAvKipcbiAgICAgKiBQbGF0Zm9ybSBzcGVjaWZpYyBgZmV0Y2hgIGZ1bmN0aW9uXG4gICAgICovXG4gICAgZmV0Y2g6IGFueSxcbiAgICAvKipcbiAgICAgKiBQbGF0Zm9ybSBzcGVjaWZpYyBgV2ViU29ja2V0YCBpbXBsZW1lbnRhdGlvblxuICAgICAqIFRoaXMgaW1wbGVtZW50YXRpb24gbXVzdCBjb25mb3JtcyB0byBXM0MgV2ViU29ja2V0XG4gICAgICovXG4gICAgV2ViU29ja2V0OiBhbnksXG4gICAgLyoqXG4gICAgICogUmVxdWVzdCBjcmVhdGlvbiBvZiB0aGUgY2xpZW50IGNvcmVcbiAgICAgKi9cbiAgICBjcmVhdGVMaWJyYXJ5OiAoKSA9PiBQcm9taXNlPFRPTkNsaWVudENvcmVMaWJyYXJ5Pixcbn07XG5cbi8qKlxuICogTWFpbiBvYmplY3QgcHJvdmlkZWQgZnVuY3Rpb25hbGl0eSBvZiB0aGUgVE9OIENsaWVudCBMaWJyYXJ5XG4gKiBFYWNoIGluc3RhbmNlIG9mIFRPTkNsaWVudCBoYXMgb3duIHNldCBvZiBUT04gQ2xpZW50IG1vZHVsZXNcbiAqIGFuZCBoYXMgb3duIHByZWNvbmZpZ3VyZWQgY2xpZW50IGNvbnRleHRcbiAqL1xuZXhwb3J0IGNsYXNzIFRPTkNsaWVudCBpbXBsZW1lbnRzIFRPTk1vZHVsZUNvbnRleHQsIElUT05DbGllbnQge1xuICAgIHN0YXRpYyBzZXRMaWJyYXJ5KGNsaWVudFBsYXRmb3JtOiBUT05DbGllbnRQbGF0Zm9ybSkge1xuICAgICAgICBUT05DbGllbnQuY2xpZW50UGxhdGZvcm0gPSBjbGllbnRQbGF0Zm9ybTtcbiAgICB9XG5cblxuICAgIC8vIFB1YmxpY1xuICAgIGNvbmZpZzogVE9OQ29uZmlnTW9kdWxlO1xuICAgIGNyeXB0bzogVE9OQ3J5cHRvO1xuICAgIGNvbnRyYWN0czogVE9OQ29udHJhY3RzO1xuICAgIHF1ZXJpZXM6IFRPTlF1ZXJpZXM7XG4gICAgX3F1ZXJpZXM6IFRPTlF1ZXJpZXNNb2R1bGU7XG4gICAgX2NvbnRleHQ6IG51bWJlcjtcbiAgICBfY29yZUJyaWRnZTogP1RPTkNsaWVudENvcmVCcmlkZ2U7XG5cbiAgICBjb25zdHJ1Y3RvcigpIHtcbiAgICAgICAgdGhpcy5tb2R1bGVzID0gbmV3IE1hcCgpO1xuICAgICAgICB0aGlzLmNvbmZpZyA9IHRoaXMuZ2V0TW9kdWxlKFRPTkNvbmZpZ01vZHVsZSk7XG4gICAgICAgIHRoaXMuY3J5cHRvID0gdGhpcy5nZXRNb2R1bGUoVE9OQ3J5cHRvTW9kdWxlKTtcbiAgICAgICAgdGhpcy5jb250cmFjdHMgPSB0aGlzLmdldE1vZHVsZShUT05Db250cmFjdHNNb2R1bGUpO1xuICAgICAgICB0aGlzLl9xdWVyaWVzID0gdGhpcy5nZXRNb2R1bGUoVE9OUXVlcmllc01vZHVsZSk7XG4gICAgICAgIHRoaXMucXVlcmllcyA9IHRoaXMuX3F1ZXJpZXM7XG4gICAgICAgIHRoaXMuX2NvbnRleHQgPSAwO1xuICAgICAgICB0aGlzLl9jb3JlQnJpZGdlID0gbnVsbDtcbiAgICB9XG5cbiAgICAvKipcbiAgICAgKiBDb252ZW5pZW50IHdheSB0byBjcmVhdGUgY29uZmlndXJlZCBpbnN0YW5jZSBvZiB0aGUgVE9OIENsaWVudFxuICAgICAqIEBwYXJhbSB7VE9OQ29uZmlnRGF0YX0gY29uZmlnXG4gICAgICogQHJldHVybiB7UHJvbWlzZTxUT05DbGllbnQ+fVxuICAgICAqL1xuICAgIHN0YXRpYyBhc3luYyBjcmVhdGUoY29uZmlnOiBUT05Db25maWdEYXRhKTogUHJvbWlzZTxUT05DbGllbnQ+IHtcbiAgICAgICAgY29uc3QgY2xpZW50ID0gbmV3IFRPTkNsaWVudCgpO1xuICAgICAgICBjbGllbnQuY29uZmlnLnNldERhdGEoY29uZmlnKTtcbiAgICAgICAgYXdhaXQgY2xpZW50LnNldHVwKCk7XG4gICAgICAgIHJldHVybiBjbGllbnQ7XG4gICAgfVxuXG4gICAgLyoqXG4gICAgICogU2V0IHVwIHRoZSBjbGllbnQgaW5zdGFuY2VcbiAgICAgKiBAcmV0dXJuIHtQcm9taXNlPHZvaWQ+fVxuICAgICAqL1xuICAgIGFzeW5jIHNldHVwKCk6IFByb21pc2U8dm9pZD4ge1xuICAgICAgICBjb25zdCB0cnlDcmVhdGVMaWJyYXJ5ID0gYXN5bmMgKCkgPT4ge1xuICAgICAgICAgICAgY29uc3QgcGxhdGZvcm0gPSBUT05DbGllbnQuY2xpZW50UGxhdGZvcm07XG4gICAgICAgICAgICBpZiAocGxhdGZvcm0gPT09IG51bGwgfHwgcGxhdGZvcm0gPT09IHVuZGVmaW5lZCkge1xuICAgICAgICAgICAgICAgIHJldHVybiBudWxsO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgVE9OQ2xpZW50LmNvcmVMaWJyYXJ5ID0gYXdhaXQgcGxhdGZvcm0uY3JlYXRlTGlicmFyeSgpO1xuICAgICAgICAgICAgcmV0dXJuIFRPTkNsaWVudC5jb3JlTGlicmFyeTtcbiAgICAgICAgfTtcbiAgICAgICAgY29uc3QgbGlicmFyeSA9IFRPTkNsaWVudC5jb3JlTGlicmFyeSB8fCBhd2FpdCB0cnlDcmVhdGVMaWJyYXJ5KCk7XG4gICAgICAgIGlmICghbGlicmFyeSkge1xuICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICB9XG4gICAgICAgIGlmICh0aGlzLl9jb3JlQnJpZGdlID09PSBudWxsIHx8IHRoaXMuX2NvcmVCcmlkZ2UgPT09IHVuZGVmaW5lZCkge1xuICAgICAgICAgICAgaWYgKGxpYnJhcnkuY29yZUNyZWF0ZUNvbnRleHQpIHtcbiAgICAgICAgICAgICAgICB0aGlzLl9jb250ZXh0ID0gYXdhaXQgbmV3IFByb21pc2UoKHJlc29sdmUpID0+IGxpYnJhcnkuY29yZUNyZWF0ZUNvbnRleHQocmVzb2x2ZSkpO1xuICAgICAgICAgICAgICAgIHRoaXMuX2NvcmVCcmlkZ2UgPSB7XG4gICAgICAgICAgICAgICAgICAgIHJlcXVlc3Q6IChcbiAgICAgICAgICAgICAgICAgICAgICAgIG1ldGhvZDogc3RyaW5nLFxuICAgICAgICAgICAgICAgICAgICAgICAgcGFyYW1zSnNvbjogc3RyaW5nLFxuICAgICAgICAgICAgICAgICAgICAgICAgb25SZXN1bHQ6IChyZXN1bHRKc29uOiBzdHJpbmcsIGVycm9ySnNvbjogc3RyaW5nKSA9PiB2b2lkLFxuICAgICAgICAgICAgICAgICAgICApOiB2b2lkID0+IHtcbiAgICAgICAgICAgICAgICAgICAgICAgIGlmIChUT05DbGllbnQuY29yZUxpYnJhcnkpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBUT05DbGllbnQuY29yZUxpYnJhcnkuY29yZVJlcXVlc3QodGhpcy5fY29udGV4dCwgbWV0aG9kLCBwYXJhbXNKc29uLCBvblJlc3VsdCk7XG4gICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAgIHRoaXMuX2NvcmVCcmlkZ2UgPSBsaWJyYXJ5O1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICAgIGNvbnN0IG1vZHVsZXM6IFRPTk1vZHVsZVtdID0gWy4uLnRoaXMubW9kdWxlcy52YWx1ZXMoKV07XG4gICAgICAgIGZvciAoY29uc3QgbW9kdWxlIG9mIG1vZHVsZXMpIHtcbiAgICAgICAgICAgIGF3YWl0IG1vZHVsZS5zZXR1cCgpO1xuICAgICAgICB9XG4gICAgfVxuXG4gICAgLyoqXG4gICAgICogVGVhciBkb3duIHRoaXMgY2xpZW50IGluc3RhbmNlLlxuICAgICAqIE5vdGUgdGhhdCBhZnRlciB5b3UgaGF2ZSBjYWxsZWQgdGhpcyBtZXRob2QgYWxsIGZ1dHVyZSB1c2Ugb2YgdGhpcyBpbnN0YW5jZSB3aWxsIGZhaWxcbiAgICAgKiBAcmV0dXJuIHtQcm9taXNlPHZvaWQ+fVxuICAgICAqL1xuICAgIGFzeW5jIGNsb3NlKCk6IFByb21pc2U8dm9pZD4ge1xuICAgICAgICBhd2FpdCB0aGlzLnF1ZXJpZXMuY2xvc2UoKTtcbiAgICAgICAgY29uc3QgbGlicmFyeSA9IFRPTkNsaWVudC5jb3JlTGlicmFyeTtcbiAgICAgICAgaWYgKHRoaXMuX2NvbnRleHQgPiAwICYmIGxpYnJhcnkgIT09IG51bGwgJiYgbGlicmFyeSAhPT0gdW5kZWZpbmVkKSB7XG4gICAgICAgICAgICBjb25zdCBjb250ZXh0ID0gdGhpcy5fY29udGV4dDtcbiAgICAgICAgICAgIHRoaXMuX2NvcmVCcmlkZ2UgPSBudWxsO1xuICAgICAgICAgICAgdGhpcy5fY29udGV4dCA9IDA7XG4gICAgICAgICAgICBhd2FpdCBuZXcgUHJvbWlzZShyZXNvbHZlID0+IGxpYnJhcnkuY29yZURlc3Ryb3lDb250ZXh0KGNvbnRleHQsIHJlc29sdmUpKTtcbiAgICAgICAgfVxuICAgIH1cblxuICAgIC8vIFRPTk1vZHVsZUNvbnRleHRcblxuICAgIGdldENvcmVCcmlkZ2UoKTogP1RPTkNsaWVudENvcmVCcmlkZ2Uge1xuICAgICAgICByZXR1cm4gdGhpcy5fY29yZUJyaWRnZTtcbiAgICB9XG5cbiAgICBnZXRNb2R1bGU8VD4oTW9kdWxlQ2xhc3M6IHR5cGVvZiBUT05Nb2R1bGUpOiBUIHtcbiAgICAgICAgY29uc3QgbmFtZSA9IE1vZHVsZUNsYXNzLm1vZHVsZU5hbWU7XG4gICAgICAgIGNvbnN0IGV4aXN0aW5nTW9kdWxlID0gdGhpcy5tb2R1bGVzLmdldChuYW1lKTtcbiAgICAgICAgaWYgKGV4aXN0aW5nTW9kdWxlKSB7XG4gICAgICAgICAgICByZXR1cm4gKGV4aXN0aW5nTW9kdWxlOiBhbnkpO1xuICAgICAgICB9XG4gICAgICAgIGNvbnN0IG1vZHVsZSA9IG5ldyBNb2R1bGVDbGFzcyh0aGlzKTtcbiAgICAgICAgdGhpcy5tb2R1bGVzLnNldChuYW1lLCBtb2R1bGUpO1xuICAgICAgICByZXR1cm4gKG1vZHVsZTogYW55KTtcbiAgICB9XG5cbiAgICBzZXJ2ZXJUaW1lRGVsdGEoKTogUHJvbWlzZTxudW1iZXI+IHtcbiAgICAgICAgcmV0dXJuIHRoaXMuX3F1ZXJpZXMuc2VydmVyVGltZURlbHRhKCk7XG4gICAgfVxuXG4gICAgc2VydmVyTm93KCk6IFByb21pc2U8bnVtYmVyPiB7XG4gICAgICAgIHJldHVybiB0aGlzLl9xdWVyaWVzLnNlcnZlck5vdygpO1xuICAgIH1cblxuICAgIGFzeW5jIGdldE1hbmFnZW1lbnRBY2Nlc3NLZXkoKTogUHJvbWlzZTxzdHJpbmc+IHtcbiAgICAgICAgY29uc3QgcmVzdWx0ID0gYXdhaXQgdGhpcy5fcXVlcmllcy5xdWVyeSgncXVlcnl7Z2V0TWFuYWdlbWVudEFjY2Vzc0tleX0nKTtcbiAgICAgICAgcmV0dXJuIHJlc3VsdC5kYXRhLmdldE1hbmFnZW1lbnRBY2Nlc3NLZXk7XG4gICAgfVxuXG5cbiAgICBhc3luYyBfcmVzb2x2ZVNpZ25lZE1hbmFnZW1lbnRBY2Nlc3NLZXkocGFyYW1zOiBUT05BY2Nlc3NLZXlzTWFuYWdlbWVudFBhcmFtcyk6IFByb21pc2U8c3RyaW5nPiB7XG4gICAgICAgIGlmIChwYXJhbXMuc2lnbmVkTWFuYWdlbWVudEFjY2Vzc0tleSkge1xuICAgICAgICAgICAgcmV0dXJuIHBhcmFtcy5zaWduZWRNYW5hZ2VtZW50QWNjZXNzS2V5O1xuICAgICAgICB9XG4gICAgICAgIGNvbnN0IHNpZ25LZXlzID0gcGFyYW1zLmFjY291bnRLZXlzO1xuICAgICAgICBpZiAoc2lnbktleXMpIHtcbiAgICAgICAgICAgIGNvbnN0IG1hbmFnZW1lbnRBY2Nlc3NLZXkgPSBhd2FpdCB0aGlzLmdldE1hbmFnZW1lbnRBY2Nlc3NLZXkoKTtcbiAgICAgICAgICAgIHJldHVybiB0aGlzLmNyeXB0by5uYWNsU2lnbihcbiAgICAgICAgICAgICAgICB7IHRleHQ6IG1hbmFnZW1lbnRBY2Nlc3NLZXkgfSxcbiAgICAgICAgICAgICAgICBgJHtzaWduS2V5cy5zZWNyZXR9JHtzaWduS2V5cy5wdWJsaWN9YCxcbiAgICAgICAgICAgICAgICAnSGV4Jyk7XG4gICAgICAgIH1cbiAgICAgICAgcmV0dXJuICcnO1xuICAgIH1cblxuICAgIGFzeW5jIHJlZ2lzdGVyQWNjZXNzS2V5cyhcbiAgICAgICAgcGFyYW1zOiBUT05SZWdpc3RlckFjY2Vzc0tleXNQYXJhbXNcbiAgICApOiBQcm9taXNlPG51bWJlcj4ge1xuICAgICAgICBjb25zdCBzaWduZWRNYW5hZ2VtZW50QWNjZXNzS2V5ID0gYXdhaXQgdGhpcy5fcmVzb2x2ZVNpZ25lZE1hbmFnZW1lbnRBY2Nlc3NLZXkocGFyYW1zKTtcbiAgICAgICAgY29uc3QgcmVzdWx0ID0gYXdhaXQgdGhpcy5fcXVlcmllcy5tdXRhdGlvbihcbiAgICAgICAgICAgIGBtdXRhdGlvbiByZWdpc3RlckFjY2Vzc0tleXMoJGFjY291bnQ6IFN0cmluZywgJGtleXM6IFtBY2Nlc3NLZXldLCAkc2lnbmVkTWFuYWdlbWVudEFjY2Vzc0tleTogU3RyaW5nKSB7XG4gICAgICAgICAgICAgICAgICAgIHJlZ2lzdGVyQWNjZXNzS2V5cyhhY2NvdW50OiAkYWNjb3VudCwga2V5czogJGtleXMsIHNpZ25lZE1hbmFnZW1lbnRBY2Nlc3NLZXk6ICRzaWduZWRNYW5hZ2VtZW50QWNjZXNzS2V5KVxuICAgICAgICAgICAgICAgIH1gLCB7XG4gICAgICAgICAgICAgICAgYWNjb3VudDogcGFyYW1zLmFjY291bnQsXG4gICAgICAgICAgICAgICAga2V5czogcGFyYW1zLmtleXMsXG4gICAgICAgICAgICAgICAgc2lnbmVkTWFuYWdlbWVudEFjY2Vzc0tleSxcbiAgICAgICAgICAgIH0pO1xuICAgICAgICByZXR1cm4gcmVzdWx0LmRhdGEucmVnaXN0ZXJBY2Nlc3NLZXlzO1xuICAgIH1cblxuICAgIGFzeW5jIHJldm9rZUFjY2Vzc0tleXMoXG4gICAgICAgIHBhcmFtczogVE9OUmV2b2tlQWNjZXNzS2V5c1BhcmFtc1xuICAgICk6IFByb21pc2U8bnVtYmVyPiB7XG4gICAgICAgIGNvbnN0IHNpZ25lZE1hbmFnZW1lbnRBY2Nlc3NLZXkgPSBhd2FpdCB0aGlzLl9yZXNvbHZlU2lnbmVkTWFuYWdlbWVudEFjY2Vzc0tleShwYXJhbXMpO1xuICAgICAgICBjb25zdCByZXN1bHQgPSBhd2FpdCB0aGlzLl9xdWVyaWVzLm11dGF0aW9uKFxuICAgICAgICAgICAgYG11dGF0aW9uIHJldm9rZUFjY2Vzc0tleXMoJGFjY291bnQ6IFN0cmluZywgJGtleXM6IFtTdHJpbmddLCAkc2lnbmVkTWFuYWdlbWVudEFjY2Vzc0tleTogU3RyaW5nKSB7XG4gICAgICAgICAgICAgICAgICAgIHJldm9rZUFjY2Vzc0tleXMoYWNjb3VudDogJGFjY291bnQsIGtleXM6ICRrZXlzLCBzaWduZWRNYW5hZ2VtZW50QWNjZXNzS2V5OiAkc2lnbmVkTWFuYWdlbWVudEFjY2Vzc0tleSlcbiAgICAgICAgICAgICAgICB9YCwge1xuICAgICAgICAgICAgICAgIGFjY291bnQ6IHBhcmFtcy5hY2NvdW50LFxuICAgICAgICAgICAgICAgIGtleXM6IHBhcmFtcy5rZXlzLFxuICAgICAgICAgICAgICAgIHNpZ25lZE1hbmFnZW1lbnRBY2Nlc3NLZXksXG4gICAgICAgICAgICB9KTtcbiAgICAgICAgcmV0dXJuIHJlc3VsdC5kYXRhLnJldm9rZUFjY2Vzc0tleXM7XG4gICAgfVxuXG4gICAgYXN5bmMgdHJhY2U8VD4oXG4gICAgICAgIG5hbWU6IHN0cmluZyxcbiAgICAgICAgZjogKHNwYW46IFNwYW4pID0+IFByb21pc2U8VD4sXG4gICAgICAgIHBhcmVudFNwYW4/OiAoU3BhbiB8IFNwYW5Db250ZXh0KVxuICAgICk6IFByb21pc2U8VD4ge1xuICAgICAgICBjb25zdCBzcGFuID0gdGhpcy5jb25maWcudHJhY2VyLnN0YXJ0U3BhbihuYW1lLCB7IGNoaWxkT2Y6IHBhcmVudFNwYW4gfSk7XG4gICAgICAgIHRyeSB7XG4gICAgICAgICAgICBzcGFuLnNldFRhZyhUYWdzLlNQQU5fS0lORCwgJ2NsaWVudCcpO1xuICAgICAgICAgICAgY29uc3QgcmVzdWx0ID0gYXdhaXQgZihzcGFuKTtcbiAgICAgICAgICAgIGlmIChyZXN1bHQgIT09IHVuZGVmaW5lZCkge1xuICAgICAgICAgICAgICAgIHNwYW4uc2V0VGFnKCdyZXN1bHQnLCByZXN1bHQpO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgc3Bhbi5maW5pc2goKTtcbiAgICAgICAgICAgIHJldHVybiByZXN1bHQ7XG4gICAgICAgIH0gY2F0Y2ggKGVycm9yKSB7XG4gICAgICAgICAgICBzcGFuLmxvZyh7IGV2ZW50OiAnZmFpbGVkJywgcGF5bG9hZDogZXJyb3IgfSk7XG4gICAgICAgICAgICBzcGFuLmZpbmlzaCgpO1xuICAgICAgICAgICAgdGhyb3cgZXJyb3I7XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICAvLyBJbnRlcm5hbHNcblxuICAgIHN0YXRpYyBjbGllbnRQbGF0Zm9ybTogP1RPTkNsaWVudFBsYXRmb3JtID0gbnVsbDtcbiAgICBzdGF0aWMgY29yZUxpYnJhcnk6ID9UT05DbGllbnRDb3JlTGlicmFyeSA9IG51bGw7XG5cbiAgICBtb2R1bGVzOiBNYXA8c3RyaW5nLCBUT05Nb2R1bGU+O1xufVxuXG5cbmV4cG9ydCBjb25zdCBUT05FcnJvclNvdXJjZSA9IHtcbiAgICBDTElFTlQ6ICdjbGllbnQnLFxuICAgIE5PREU6ICdub2RlJ1xufTtcblxuZXhwb3J0IGNvbnN0IFRPTkVycm9yQ29kZSA9IHtcbiAgICBDTElFTlRfRE9FU19OT1RfQ09ORklHVVJFRDogMTAwMCxcbiAgICBTRU5EX05PREVfUkVRVUVTVF9GQUlMRUQ6IDEwMDEsXG4gICAgTUVTU0FHRV9BTFJFQURZX0VYUElSRUQ6IDEwMDEsXG4gICAgUlVOX0xPQ0FMX0FDQ09VTlRfRE9FU19OT1RfRVhJU1RTOiAxMDAyLFxuICAgIFdBSVRfRk9SX1RJTUVPVVQ6IDEwMDMsXG4gICAgSU5URVJOQUxfRVJST1I6IDEwMDQsXG4gICAgUVVFUllfRkFJTEVEOiAxMDA1LFxuICAgIE1FU1NBR0VfRVhQSVJFRDogMTAwNixcbiAgICBTRVJWRVJfRE9FU05UX1NVUFBPUlRfQUdHUkVHQVRJT05TOiAxMDA3LFxuICAgIElOVkFMSURfQ09OUzogMTAwOCxcbiAgICBBRERSRVNTX1JFUVVJUkVEX0ZPUl9SVU5fTE9DQUw6IDEwMDksXG4gICAgTkVUV09SS19TSUxFTlQ6IDEwMTAsXG4gICAgVFJBTlNBQ1RJT05fTEFHOiAxMDExLFxuICAgIFRSQU5TQUNUSU9OX1dBSVRfVElNRU9VVDogMTAxMixcbiAgICBDTE9DS19PVVRfT0ZfU1lOQzogMTAxMyxcbiAgICBBQ0NPVU5UX01JU1NJTkc6IDEwMTQsXG4gICAgQUNDT1VOVF9DT0RFX01JU1NJTkc6IDEwMTUsXG4gICAgQUNDT1VOVF9CQUxBTkNFX1RPT19MT1c6IDEwMTYsXG4gICAgQUNDT1VOVF9GUk9aRU5fT1JfREVMRVRFRDogMTAxNyxcblxuICAgIC8vIENvbnRyYWN0c1xuXG4gICAgQ09OVFJBQ1RfRVhFQ1VUSU9OX0ZBSUxFRDogMzAyNSxcbn07XG5cbmV4cG9ydCBjb25zdCBUT05Db250cmFjdEV4aXRDb2RlID0ge1xuICAgIFJFUExBWV9QUk9URUNUSU9OOiA1MixcbiAgICBNRVNTQUdFX0VYUElSRUQ6IDU3LFxuICAgIE5PX0dBUzogMTMsXG59XG5cbmV4cG9ydCBjbGFzcyBUT05DbGllbnRFcnJvciB7XG4gICAgc3RhdGljIHNvdXJjZSA9IFRPTkVycm9yU291cmNlO1xuICAgIHN0YXRpYyBjb2RlID0gVE9ORXJyb3JDb2RlO1xuXG4gICAgbWVzc2FnZTogc3RyaW5nO1xuICAgIHNvdXJjZTogc3RyaW5nO1xuICAgIGNvZGU6IG51bWJlcjtcbiAgICBkYXRhOiBhbnk7XG5cbiAgICBjb25zdHJ1Y3RvcihtZXNzYWdlOiBzdHJpbmcsIGNvZGU6IG51bWJlciwgc291cmNlPzogc3RyaW5nLCBkYXRhPzogYW55KSB7XG4gICAgICAgIHRoaXMubWVzc2FnZSA9IG1lc3NhZ2U7XG4gICAgICAgIHRoaXMuY29kZSA9IGNvZGU7XG4gICAgICAgIHRoaXMuc291cmNlID0gc291cmNlIHx8IFRPTkVycm9yU291cmNlLkNMSUVOVDtcbiAgICAgICAgdGhpcy5kYXRhID0gZGF0YTtcbiAgICB9XG5cbiAgICBzdGF0aWMgaXNDbGllbnRFcnJvcihlcnJvcjogYW55LCBjb2RlOiBudW1iZXIpOiBib29sZWFuIHtcbiAgICAgICAgcmV0dXJuIChlcnJvci5zb3VyY2UgPT09IFRPTkNsaWVudEVycm9yLnNvdXJjZS5DTElFTlQpXG4gICAgICAgICAgICAmJiAoZXJyb3IuY29kZSA9PT0gY29kZSk7XG4gICAgfVxuXG4gICAgc3RhdGljIGlzTm9kZUVycm9yKGVycm9yOiBhbnksIGNvZGU6IG51bWJlcik6IGJvb2xlYW4ge1xuICAgICAgICByZXR1cm4gKGVycm9yLnNvdXJjZSA9PT0gVE9OQ2xpZW50RXJyb3Iuc291cmNlLk5PREUpXG4gICAgICAgICAgICAmJiAoZXJyb3IuY29kZSA9PT0gY29kZSk7XG4gICAgfVxuXG4gICAgc3RhdGljIGlzQ29udHJhY3RFcnJvcihlcnJvcjogYW55LCBleGl0Q29kZTogbnVtYmVyKTogYm9vbGVhbiB7XG4gICAgICAgIHJldHVybiAoZXJyb3Iuc291cmNlID09PSBUT05DbGllbnRFcnJvci5zb3VyY2UuTk9ERSlcbiAgICAgICAgICAgICYmIChlcnJvci5jb2RlID09PSBUT05DbGllbnRFcnJvci5jb2RlLkNPTlRSQUNUX0VYRUNVVElPTl9GQUlMRUQpXG4gICAgICAgICAgICAmJiAoZXJyb3IuZGF0YSAmJiBlcnJvci5kYXRhLmV4aXRfY29kZSA9PT0gZXhpdENvZGUpO1xuICAgIH1cblxuICAgIHN0YXRpYyBpbnRlcm5hbEVycm9yKG1lc3NhZ2U6IHN0cmluZyk6IFRPTkNsaWVudEVycm9yIHtcbiAgICAgICAgcmV0dXJuIG5ldyBUT05DbGllbnRFcnJvcihcbiAgICAgICAgICAgIGBJbnRlcm5hbCBlcnJvcjogJHttZXNzYWdlfWAsXG4gICAgICAgICAgICBUT05DbGllbnRFcnJvci5jb2RlLklOVEVSTkFMX0VSUk9SLFxuICAgICAgICAgICAgVE9OQ2xpZW50RXJyb3Iuc291cmNlLkNMSUVOVCxcbiAgICAgICAgKTtcbiAgICB9XG5cbiAgICBzdGF0aWMgaW52YWxpZENvbnMoKTogVE9OQ2xpZW50RXJyb3Ige1xuICAgICAgICByZXR1cm4gbmV3IFRPTkNsaWVudEVycm9yKFxuICAgICAgICAgICAgJ0ludmFsaWQgQ09OUyBzdHJ1Y3R1cmUuIEVhY2ggQ09OUyBpdGVtIG11c3QgY29udGFpbnMgb2YgdHdvIGVsZW1lbnRzLicsXG4gICAgICAgICAgICBUT05DbGllbnRFcnJvci5jb2RlLklOVkFMSURfQ09OUyxcbiAgICAgICAgICAgIFRPTkNsaWVudEVycm9yLnNvdXJjZS5DTElFTlQsXG4gICAgICAgICk7XG4gICAgfVxuXG4gICAgc3RhdGljIGNsaWVudERvZXNOb3RDb25maWd1cmVkKCk6IFRPTkNsaWVudEVycm9yIHtcbiAgICAgICAgcmV0dXJuIG5ldyBUT05DbGllbnRFcnJvcihcbiAgICAgICAgICAgICdUT04gQ2xpZW50IGlzblxcJ3QgY29uZmlndXJlZCcsXG4gICAgICAgICAgICBUT05DbGllbnRFcnJvci5jb2RlLkNMSUVOVF9ET0VTX05PVF9DT05GSUdVUkVELFxuICAgICAgICAgICAgVE9OQ2xpZW50RXJyb3Iuc291cmNlLkNMSUVOVCxcbiAgICAgICAgKTtcbiAgICB9XG5cbiAgICBzdGF0aWMgc2VuZE5vZGVSZXF1ZXN0RmFpbGVkKHJlc3BvbnNlVGV4dDogc3RyaW5nKTogVE9OQ2xpZW50RXJyb3Ige1xuICAgICAgICByZXR1cm4gbmV3IFRPTkNsaWVudEVycm9yKFxuICAgICAgICAgICAgYFNlbmQgbm9kZSByZXF1ZXN0IGZhaWxlZDogJHtyZXNwb25zZVRleHR9YCxcbiAgICAgICAgICAgIFRPTkNsaWVudEVycm9yLmNvZGUuU0VORF9OT0RFX1JFUVVFU1RfRkFJTEVELFxuICAgICAgICAgICAgVE9OQ2xpZW50RXJyb3Iuc291cmNlLkNMSUVOVCxcbiAgICAgICAgKTtcbiAgICB9XG5cbiAgICBzdGF0aWMgcnVuTG9jYWxBY2NvdW50RG9lc05vdEV4aXN0cyhmdW5jdGlvbk5hbWU6IHN0cmluZywgYWRkcmVzczogc3RyaW5nKTogVE9OQ2xpZW50RXJyb3Ige1xuICAgICAgICByZXR1cm4gbmV3IFRPTkNsaWVudEVycm9yKFxuICAgICAgICAgICAgYFske2Z1bmN0aW9uTmFtZX1dIHJ1biBsb2NhbCBmYWlsZWQ6IGFjY291bnQgWyR7YWRkcmVzc31dIGRvZXMgbm90IGV4aXN0c2AsXG4gICAgICAgICAgICBUT05DbGllbnRFcnJvci5jb2RlLlJVTl9MT0NBTF9BQ0NPVU5UX0RPRVNfTk9UX0VYSVNUUyxcbiAgICAgICAgICAgIFRPTkNsaWVudEVycm9yLnNvdXJjZS5DTElFTlQsXG4gICAgICAgICk7XG4gICAgfVxuXG4gICAgc3RhdGljIHdhaXRGb3JUaW1lb3V0KCkge1xuICAgICAgICByZXR1cm4gbmV3IFRPTkNsaWVudEVycm9yKFxuICAgICAgICAgICAgJ1dhaXQgZm9yIG9wZXJhdGlvbiByZWplY3RlZCBvbiB0aW1lb3V0JyxcbiAgICAgICAgICAgIFRPTkNsaWVudEVycm9yLmNvZGUuV0FJVF9GT1JfVElNRU9VVCxcbiAgICAgICAgICAgIFRPTkNsaWVudEVycm9yLnNvdXJjZS5DTElFTlQsXG4gICAgICAgICk7XG4gICAgfVxuXG4gICAgc3RhdGljIHF1ZXJ5RmFpbGVkKGVycm9yczogRXJyb3JbXSkge1xuICAgICAgICByZXR1cm4gbmV3IFRPTkNsaWVudEVycm9yKFxuICAgICAgICAgICAgYFF1ZXJ5IGZhaWxlZDogJHtlcnJvcnMubWFwKHggPT4geC5tZXNzYWdlIHx8IHgudG9TdHJpbmcoKSkuam9pbignXFxuJyl9YCxcbiAgICAgICAgICAgIFRPTkNsaWVudEVycm9yLmNvZGUuUVVFUllfRkFJTEVELFxuICAgICAgICAgICAgVE9OQ2xpZW50RXJyb3Iuc291cmNlLkNMSUVOVCxcbiAgICAgICAgKTtcbiAgICB9XG5cbiAgICBzdGF0aWMgZm9ybWF0VGltZSh0aW1lOiA/bnVtYmVyKTogP3N0cmluZyB7XG4gICAgICAgIGlmICh0aW1lKSB7XG4gICAgICAgICAgICByZXR1cm4gYCR7bmV3IERhdGUodGltZSAqIDEwMDApLnRvSVNPU3RyaW5nKCl9ICgke3RpbWV9KWA7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICByZXR1cm4gbnVsbDtcbiAgICAgICAgfVxuICAgIH1cblxuICAgIHN0YXRpYyBtZXNzYWdlRXhwaXJlZChkYXRhOiB7IG1zZ0lkOiBzdHJpbmcsIHNlbmRUaW1lOiBudW1iZXIsIGV4cGlyZTogP251bWJlciwgYmxvY2tUaW1lOiA/bnVtYmVyIH0pIHtcbiAgICAgICAgcmV0dXJuIG5ldyBUT05DbGllbnRFcnJvcihcbiAgICAgICAgICAgICdNZXNzYWdlIGV4cGlyZWQnLFxuICAgICAgICAgICAgVE9OQ2xpZW50RXJyb3IuY29kZS5NRVNTQUdFX0VYUElSRUQsXG4gICAgICAgICAgICBUT05DbGllbnRFcnJvci5zb3VyY2UuQ0xJRU5ULFxuICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgIG1lc3NhZ2VJZDogZGF0YS5tc2dJZCxcbiAgICAgICAgICAgICAgICBzZW5kVGltZTogVE9OQ2xpZW50RXJyb3IuZm9ybWF0VGltZShkYXRhLnNlbmRUaW1lKSxcbiAgICAgICAgICAgICAgICBleHBpcmF0aW9uVGltZTogVE9OQ2xpZW50RXJyb3IuZm9ybWF0VGltZShkYXRhLmV4cGlyZSksXG4gICAgICAgICAgICAgICAgYmxvY2tUaW1lOiBUT05DbGllbnRFcnJvci5mb3JtYXRUaW1lKGRhdGEuYmxvY2tUaW1lKSxcbiAgICAgICAgICAgIH1cbiAgICAgICAgKTtcbiAgICB9XG5cbiAgICBzdGF0aWMgc2VydmVyRG9lc250U3VwcG9ydEFnZ3JlZ2F0aW9ucygpIHtcbiAgICAgICAgcmV0dXJuIG5ldyBUT05DbGllbnRFcnJvcihcbiAgICAgICAgICAgICdTZXJ2ZXIgZG9lc25cXCd0IHN1cHBvcnQgYWdncmVnYXRpb25zJyxcbiAgICAgICAgICAgIFRPTkNsaWVudEVycm9yLmNvZGUuU0VSVkVSX0RPRVNOVF9TVVBQT1JUX0FHR1JFR0FUSU9OUyxcbiAgICAgICAgICAgIFRPTkNsaWVudEVycm9yLnNvdXJjZS5DTElFTlQsXG4gICAgICAgICk7XG4gICAgfVxuXG4gICAgc3RhdGljIGFkZHJlc3NSZXF1aXJlZEZvclJ1bkxvY2FsKCkge1xuICAgICAgICByZXR1cm4gbmV3IFRPTkNsaWVudEVycm9yKFxuICAgICAgICAgICAgYEFkZHJlc3MgcmVxdWlyZWQgZm9yIHJ1biBsb2NhbC4gWW91IGhhdmVuJ3Qgc3BlY2lmaWVkIGNvbnRyYWN0IGNvZGUgb3IgZGF0YSBzbyBhZGRyZXNzIGlzIHJlcXVpcmVkIHRvIGxvYWQgbWlzc2luZyBwYXJ0cyBmcm9tIG5ldHdvcmsuYCxcbiAgICAgICAgICAgIFRPTkNsaWVudEVycm9yLmNvZGUuQUREUkVTU19SRVFVSVJFRF9GT1JfUlVOX0xPQ0FMLFxuICAgICAgICAgICAgVE9OQ2xpZW50RXJyb3Iuc291cmNlLkNMSUVOVCxcbiAgICAgICAgKTtcbiAgICB9XG5cbiAgICBzdGF0aWMgbmV0d29ya1NpbGVudChkYXRhOiB7IG1zZ0lkOiBzdHJpbmcsIHNlbmRUaW1lOiBudW1iZXIsIGV4cGlyZTogbnVtYmVyLCB0aW1lb3V0OiBudW1iZXIgfSkge1xuICAgICAgICByZXR1cm4gbmV3IFRPTkNsaWVudEVycm9yKFxuICAgICAgICAgICAgJ05ldHdvcmsgc2lsZW50OiBubyBibG9ja3MgcHJvZHVjZWQgZHVyaW5nIHRpbWVvdXQuJyxcbiAgICAgICAgICAgIFRPTkNsaWVudEVycm9yLmNvZGUuTkVUV09SS19TSUxFTlQsXG4gICAgICAgICAgICBUT05DbGllbnRFcnJvci5zb3VyY2UuQ0xJRU5ULFxuICAgICAgICAgICAgZGF0YSAmJiB7XG4gICAgICAgICAgICAgICAgLi4uZGF0YSxcbiAgICAgICAgICAgICAgICBtZXNzYWdlSWQ6IGRhdGEubXNnSWQsXG4gICAgICAgICAgICAgICAgc2VuZFRpbWU6IFRPTkNsaWVudEVycm9yLmZvcm1hdFRpbWUoZGF0YS5zZW5kVGltZSksXG4gICAgICAgICAgICAgICAgZXhwaXJhdGlvblRpbWU6IFRPTkNsaWVudEVycm9yLmZvcm1hdFRpbWUoZGF0YS5leHBpcmUpLFxuICAgICAgICAgICAgfVxuICAgICAgICApO1xuICAgIH1cblxuICAgIHN0YXRpYyB0cmFuc2FjdGlvbkxhZyhkYXRhOiB7IG1zZ0lkOiBzdHJpbmcsIGJsb2NrSWQ6IHN0cmluZywgdHJhbnNhY3Rpb25JZDogc3RyaW5nLCB0aW1lb3V0OiBudW1iZXIgfSkge1xuICAgICAgICByZXR1cm4gbmV3IFRPTkNsaWVudEVycm9yKFxuICAgICAgICAgICAgJ0V4aXN0aW5nIGJsb2NrIHRyYW5zYWN0aW9uIG5vdCBmb3VuZCAobm8gdHJhbnNhY3Rpb24gYXBwZWFyZWQgZm9yIHRoZSBtYXN0ZXJjaGFpbiBibG9jayB3aXRoIGdlbl91dGltZSA+IG1lc3NhZ2UgZXhwaXJhdGlvbiB0aW1lKScsXG4gICAgICAgICAgICBUT05DbGllbnRFcnJvci5jb2RlLlRSQU5TQUNUSU9OX0xBRyxcbiAgICAgICAgICAgIFRPTkNsaWVudEVycm9yLnNvdXJjZS5DTElFTlQsXG4gICAgICAgICAgICBkYXRhICYmIHtcbiAgICAgICAgICAgICAgICAuLi5kYXRhLFxuICAgICAgICAgICAgICAgIG1lc3NhZ2VJZDogZGF0YS5tc2dJZCxcbiAgICAgICAgICAgIH1cbiAgICAgICAgKTtcbiAgICB9XG5cbiAgICBzdGF0aWMgdHJhbnNhY3Rpb25XYWl0VGltZW91dChkYXRhOiB7IG1zZ0lkOiBzdHJpbmcsIHNlbmRUaW1lOiBudW1iZXIsIHRpbWVvdXQ6IG51bWJlciB9KSB7XG4gICAgICAgIHJldHVybiBuZXcgVE9OQ2xpZW50RXJyb3IoXG4gICAgICAgICAgICAnVHJhbnNhY3Rpb24gZGlkIG5vdCBwcm9kdWNlZCBkdXJpbmcgc3BlY2lmaWVkIHRpbWVvdXQnLFxuICAgICAgICAgICAgVE9OQ2xpZW50RXJyb3IuY29kZS5UUkFOU0FDVElPTl9XQUlUX1RJTUVPVVQsXG4gICAgICAgICAgICBUT05DbGllbnRFcnJvci5zb3VyY2UuQ0xJRU5ULFxuICAgICAgICAgICAgZGF0YSAmJiB7XG4gICAgICAgICAgICAgICAgLi4uZGF0YSxcbiAgICAgICAgICAgICAgICBtZXNzYWdlSWQ6IGRhdGEubXNnSWQsXG4gICAgICAgICAgICAgICAgc2VuZFRpbWU6IFRPTkNsaWVudEVycm9yLmZvcm1hdFRpbWUoZGF0YS5zZW5kVGltZSksXG4gICAgICAgICAgICB9XG4gICAgICAgICk7XG4gICAgfVxuXG4gICAgc3RhdGljIGNsb2NrT3V0T2ZTeW5jKCkge1xuICAgICAgICByZXR1cm4gbmV3IFRPTkNsaWVudEVycm9yKFxuICAgICAgICAgICAgJ1lvdSBsb2NhbCBjbG9jayBpcyBvdXQgb2Ygc3luYyB3aXRoIHRoZSBzZXJ2ZXIgdGltZS4gJyArXG4gICAgICAgICAgICAnSXQgaXMgYSBjcml0aWNhbCBjb25kaXRpb24gZm9yIHNlbmRpbmcgbWVzc2FnZXMgdG8gdGhlIGJsb2NrY2hhaW4uICcgK1xuICAgICAgICAgICAgJ1BsZWFzZSBzeW5jIHlvdSBjbG9jayB3aXRoIHRoZSBpbnRlcm5ldCB0aW1lLicsXG4gICAgICAgICAgICBUT05DbGllbnRFcnJvci5jb2RlLkNMT0NLX09VVF9PRl9TWU5DLFxuICAgICAgICAgICAgVE9OQ2xpZW50RXJyb3Iuc291cmNlLkNMSUVOVCxcbiAgICAgICAgKTtcbiAgICB9XG5cbiAgICBzdGF0aWMgYWNjb3VudE1pc3NpbmcoYWRkcmVzczogc3RyaW5nKSB7XG4gICAgICAgIHJldHVybiBuZXcgVE9OQ2xpZW50RXJyb3IoXG4gICAgICAgICAgICBgQWNjb3VudCB3aXRoIGFkZHJlc3MgWyR7YWRkcmVzc31dIGRvZXNuJ3QgZXhpc3RzLiBgICtcbiAgICAgICAgICAgICdZb3UgaGF2ZSB0byBwcmVwYWlkIHRoaXMgYWNjb3VudCB0byBoYXZlIGEgcG9zaXRpdmUgYmFsYW5jZSBvbiB0aGVtIGFuZCB0aGVuIGRlcGxveSBhIGNvbnRyYWN0IGNvZGUgZm9yIHRoaXMgYWNjb3VudC4nICtcbiAgICAgICAgICAgICdTZWUgU0RLIGRvY3VtZW50YXRpb24gZm9yIGRldGFpbGVkIGluc3RydWN0aW9ucy4nLFxuICAgICAgICAgICAgVE9OQ2xpZW50RXJyb3IuY29kZS5BQ0NPVU5UX01JU1NJTkcsXG4gICAgICAgICAgICBUT05DbGllbnRFcnJvci5zb3VyY2UuQ0xJRU5ULFxuICAgICAgICApO1xuICAgIH1cblxuICAgIHN0YXRpYyBhY2NvdW50Q29kZU1pc3NpbmcoYWRkcmVzczogc3RyaW5nLCBiYWxhbmNlOiBzdHJpbmcpIHtcbiAgICAgICAgcmV0dXJuIG5ldyBUT05DbGllbnRFcnJvcihcbiAgICAgICAgICAgIGBBY2NvdW50IHdpdGggYWRkcmVzcyBbJHthZGRyZXNzfV0gZXhpc3RzIGJ1dCBoYXZlbid0IGEgY29udHJhY3QgY29kZSB5ZXQuIGAgK1xuICAgICAgICAgICAgJ1lvdSBoYXZlIHRvIGVuc3VyZSB0aGF0IGFuIGFjY291bnQgaGFzIGFuIGVub3VnaCBiYWxhbmNlIGZvciBkZXBsb3lpbmcgYSBjb250cmFjdCBjb2RlIGFuZCB0aGVuIGRlcGxveSBhIGNvbnRyYWN0IGNvZGUgZm9yIHRoaXMgYWNjb3VudC4gJyArXG4gICAgICAgICAgICBgQ3VycmVudCBhY2NvdW50IGJhbGFuY2UgaXMgWyR7YmFsYW5jZX1dLiBgICtcbiAgICAgICAgICAgICdTZWUgU0RLIGRvY3VtZW50YXRpb24gZm9yIGRldGFpbGVkIGluc3RydWN0aW9ucy4nLFxuICAgICAgICAgICAgVE9OQ2xpZW50RXJyb3IuY29kZS5BQ0NPVU5UX0NPREVfTUlTU0lORyxcbiAgICAgICAgICAgIFRPTkNsaWVudEVycm9yLnNvdXJjZS5DTElFTlQsXG4gICAgICAgICk7XG4gICAgfVxuXG4gICAgc3RhdGljIGFjY291bnRCYWxhbmNlVG9vTG93KGFkZHJlc3M6IHN0cmluZywgYmFsYW5jZTogc3RyaW5nKSB7XG4gICAgICAgIHJldHVybiBuZXcgVE9OQ2xpZW50RXJyb3IoXG4gICAgICAgICAgICBgQWNjb3VudCB3aXRoIGFkZHJlc3MgWyR7YWRkcmVzc31dIGhhcyB0b28gbG93IGJhbGFuY2UgWyR7YmFsYW5jZX1dLiBgICtcbiAgICAgICAgICAgICdZb3UgaGF2ZSB0byBzZW5kIHNvbWUgdmFsdWUgdG8gYWNjb3VudCBiYWxhbmNlIGZyb20gb3RoZXIgY29udHJhY3QgKGUuZy4gV2FsbGV0IGNvbnRyYWN0KS4gJyArXG4gICAgICAgICAgICAnU2VlIFNESyBkb2N1bWVudGF0aW9uIGZvciBkZXRhaWxlZCBpbnN0cnVjdGlvbnMuJyxcbiAgICAgICAgICAgIFRPTkNsaWVudEVycm9yLmNvZGUuQUNDT1VOVF9CQUxBTkNFX1RPT19MT1csXG4gICAgICAgICAgICBUT05DbGllbnRFcnJvci5zb3VyY2UuQ0xJRU5ULFxuICAgICAgICApO1xuICAgIH1cblxuICAgIHN0YXRpYyBub0Jsb2Nrcyh3b3JrY2hhaW46IG51bWJlcikge1xuICAgICAgICBjb25zdCB3b3JrY2hhaW5OYW1lID0gd29ya2NoYWluID09PSAtMSA/ICdtYXN0ZXJjaGFpbicgOiBgd29ya2NoYWluICR7d29ya2NoYWlufWA7XG4gICAgICAgIHJldHVybiBuZXcgVE9OQ2xpZW50RXJyb3IoXG4gICAgICAgICAgICBgXCJObyBibG9ja3MgZm9yICR7d29ya2NoYWluTmFtZX0gZm91bmRcIi5gLFxuICAgICAgICAgICAgVE9ORXJyb3JDb2RlLk5FVFdPUktfU0lMRU5ULFxuICAgICAgICAgICAgVE9ORXJyb3JTb3VyY2UuQ0xJRU5ULFxuICAgICAgICApO1xuICAgIH1cblxuICAgIHN0YXRpYyBpbnZhbGlkQmxvY2tjaGFpbihtZXNzYWdlOiBzdHJpbmcpIHtcbiAgICAgICAgcmV0dXJuIG5ldyBUT05DbGllbnRFcnJvcihtZXNzYWdlLCBUT05FcnJvckNvZGUuTkVUV09SS19TSUxFTlQpO1xuICAgIH1cblxuICAgIHN0YXRpYyBpc01lc3NhZ2VFeHBpcmVkKGVycm9yOiBhbnkpOiBib29sZWFuIHtcbiAgICAgICAgcmV0dXJuIFRPTkNsaWVudEVycm9yLmlzQ2xpZW50RXJyb3IoZXJyb3IsIFRPTkNsaWVudEVycm9yLmNvZGUuTUVTU0FHRV9FWFBJUkVEKTtcbiAgICB9XG5cbiAgICBzdGF0aWMgaXNXYWl0Rm9yVGltZW91dChlcnJvcjogYW55KTogYm9vbGVhbiB7XG4gICAgICAgIHJldHVybiBUT05DbGllbnRFcnJvci5pc0NsaWVudEVycm9yKGVycm9yLCBUT05DbGllbnRFcnJvci5jb2RlLldBSVRfRk9SX1RJTUVPVVQpO1xuICAgIH1cblxufVxuIl19