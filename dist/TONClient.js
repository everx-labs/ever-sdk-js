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
        sendTime: TONClientError.formatTime(data.sendTime),
        expirationTime: TONClientError.formatTime(data.expire)
      }));
    }
  }, {
    key: "transactionWaitTimeout",
    value: function transactionWaitTimeout(data) {
      return new TONClientError('Transaction did not produced during specified timeout', TONClientError.code.TRANSACTION_WAIT_TIMEOUT, TONClientError.source.CLIENT, data && _objectSpread(_objectSpread({}, data), {}, {
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uL3NyYy9UT05DbGllbnQuanMiXSwibmFtZXMiOlsiVE9OQ2xpZW50IiwiY2xpZW50UGxhdGZvcm0iLCJtb2R1bGVzIiwiTWFwIiwiY29uZmlnIiwiZ2V0TW9kdWxlIiwiVE9OQ29uZmlnTW9kdWxlIiwiY3J5cHRvIiwiVE9OQ3J5cHRvTW9kdWxlIiwiY29udHJhY3RzIiwiVE9OQ29udHJhY3RzTW9kdWxlIiwiX3F1ZXJpZXMiLCJUT05RdWVyaWVzTW9kdWxlIiwicXVlcmllcyIsIl9jb250ZXh0IiwiX2NvcmVCcmlkZ2UiLCJ0cnlDcmVhdGVMaWJyYXJ5IiwicGxhdGZvcm0iLCJ1bmRlZmluZWQiLCJjcmVhdGVMaWJyYXJ5IiwiY29yZUxpYnJhcnkiLCJsaWJyYXJ5IiwiY29yZUNyZWF0ZUNvbnRleHQiLCJQcm9taXNlIiwicmVzb2x2ZSIsInJlcXVlc3QiLCJtZXRob2QiLCJwYXJhbXNKc29uIiwib25SZXN1bHQiLCJjb3JlUmVxdWVzdCIsInZhbHVlcyIsIm1vZHVsZSIsInNldHVwIiwiY2xvc2UiLCJjb250ZXh0IiwiY29yZURlc3Ryb3lDb250ZXh0IiwiTW9kdWxlQ2xhc3MiLCJuYW1lIiwibW9kdWxlTmFtZSIsImV4aXN0aW5nTW9kdWxlIiwiZ2V0Iiwic2V0Iiwic2VydmVyVGltZURlbHRhIiwic2VydmVyTm93IiwicXVlcnkiLCJyZXN1bHQiLCJkYXRhIiwiZ2V0TWFuYWdlbWVudEFjY2Vzc0tleSIsInBhcmFtcyIsInNpZ25lZE1hbmFnZW1lbnRBY2Nlc3NLZXkiLCJzaWduS2V5cyIsImFjY291bnRLZXlzIiwibWFuYWdlbWVudEFjY2Vzc0tleSIsIm5hY2xTaWduIiwidGV4dCIsInNlY3JldCIsIl9yZXNvbHZlU2lnbmVkTWFuYWdlbWVudEFjY2Vzc0tleSIsIm11dGF0aW9uIiwiYWNjb3VudCIsImtleXMiLCJyZWdpc3RlckFjY2Vzc0tleXMiLCJyZXZva2VBY2Nlc3NLZXlzIiwiZiIsInBhcmVudFNwYW4iLCJzcGFuIiwidHJhY2VyIiwic3RhcnRTcGFuIiwiY2hpbGRPZiIsInNldFRhZyIsIlRhZ3MiLCJTUEFOX0tJTkQiLCJmaW5pc2giLCJsb2ciLCJldmVudCIsInBheWxvYWQiLCJjbGllbnQiLCJzZXREYXRhIiwiVE9ORXJyb3JTb3VyY2UiLCJDTElFTlQiLCJOT0RFIiwiVE9ORXJyb3JDb2RlIiwiQ0xJRU5UX0RPRVNfTk9UX0NPTkZJR1VSRUQiLCJTRU5EX05PREVfUkVRVUVTVF9GQUlMRUQiLCJNRVNTQUdFX0FMUkVBRFlfRVhQSVJFRCIsIlJVTl9MT0NBTF9BQ0NPVU5UX0RPRVNfTk9UX0VYSVNUUyIsIldBSVRfRk9SX1RJTUVPVVQiLCJJTlRFUk5BTF9FUlJPUiIsIlFVRVJZX0ZBSUxFRCIsIk1FU1NBR0VfRVhQSVJFRCIsIlNFUlZFUl9ET0VTTlRfU1VQUE9SVF9BR0dSRUdBVElPTlMiLCJJTlZBTElEX0NPTlMiLCJBRERSRVNTX1JFUVVJUkVEX0ZPUl9SVU5fTE9DQUwiLCJORVRXT1JLX1NJTEVOVCIsIlRSQU5TQUNUSU9OX0xBRyIsIlRSQU5TQUNUSU9OX1dBSVRfVElNRU9VVCIsIkNMT0NLX09VVF9PRl9TWU5DIiwiQUNDT1VOVF9NSVNTSU5HIiwiQUNDT1VOVF9DT0RFX01JU1NJTkciLCJBQ0NPVU5UX0JBTEFOQ0VfVE9PX0xPVyIsIkFDQ09VTlRfRlJPWkVOX09SX0RFTEVURUQiLCJDT05UUkFDVF9FWEVDVVRJT05fRkFJTEVEIiwiVE9OQ29udHJhY3RFeGl0Q29kZSIsIlJFUExBWV9QUk9URUNUSU9OIiwiTk9fR0FTIiwiVE9OQ2xpZW50RXJyb3IiLCJtZXNzYWdlIiwiY29kZSIsInNvdXJjZSIsImVycm9yIiwiZXhpdENvZGUiLCJleGl0X2NvZGUiLCJyZXNwb25zZVRleHQiLCJmdW5jdGlvbk5hbWUiLCJhZGRyZXNzIiwiZXJyb3JzIiwibWFwIiwieCIsInRvU3RyaW5nIiwiam9pbiIsInRpbWUiLCJEYXRlIiwidG9JU09TdHJpbmciLCJzZW5kVGltZSIsImZvcm1hdFRpbWUiLCJleHBpcmF0aW9uVGltZSIsImV4cGlyZSIsImJsb2NrVGltZSIsImJhbGFuY2UiLCJ3b3JrY2hhaW4iLCJ3b3JrY2hhaW5OYW1lIiwiaXNDbGllbnRFcnJvciJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7O0FBS0E7O0FBWUE7O0FBQ0E7O0FBQ0E7O0FBRUE7O0FBT0E7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFxQkE7Ozs7O0lBS2FBLFM7OzsrQkFDU0MsYyxFQUFtQztBQUNqREQsTUFBQUEsU0FBUyxDQUFDQyxjQUFWLEdBQTJCQSxjQUEzQjtBQUNILEssQ0FHRDs7OztBQVNBLHVCQUFjO0FBQUE7O0FBQUE7O0FBQUE7O0FBQUE7O0FBQUE7O0FBQUE7O0FBQUE7O0FBQUE7O0FBQUE7O0FBQ1YsU0FBS0MsT0FBTCxHQUFlLElBQUlDLEdBQUosRUFBZjtBQUNBLFNBQUtDLE1BQUwsR0FBYyxLQUFLQyxTQUFMLENBQWVDLDJCQUFmLENBQWQ7QUFDQSxTQUFLQyxNQUFMLEdBQWMsS0FBS0YsU0FBTCxDQUFlRywyQkFBZixDQUFkO0FBQ0EsU0FBS0MsU0FBTCxHQUFpQixLQUFLSixTQUFMLENBQWVLLDhCQUFmLENBQWpCO0FBQ0EsU0FBS0MsUUFBTCxHQUFnQixLQUFLTixTQUFMLENBQWVPLDRCQUFmLENBQWhCO0FBQ0EsU0FBS0MsT0FBTCxHQUFlLEtBQUtGLFFBQXBCO0FBQ0EsU0FBS0csUUFBTCxHQUFnQixDQUFoQjtBQUNBLFNBQUtDLFdBQUwsR0FBbUIsSUFBbkI7QUFDSDtBQUVEOzs7Ozs7Ozs7O0FBWUE7Ozs7Ozs7Ozs7Ozs7O0FBS1VDLGdCQUFBQSxnQjswRkFBbUI7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQ2ZDLDRCQUFBQSxRQURlLEdBQ0pqQixTQUFTLENBQUNDLGNBRE47O0FBQUEsa0NBRWpCZ0IsUUFBUSxLQUFLLElBQWIsSUFBcUJBLFFBQVEsS0FBS0MsU0FGakI7QUFBQTtBQUFBO0FBQUE7O0FBQUEsNkRBR1YsSUFIVTs7QUFBQTtBQUFBO0FBQUEsbUNBS1NELFFBQVEsQ0FBQ0UsYUFBVCxFQUxU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LFNBQVMsS0FBSyxDQUFDLENBQWYsR0FBbUIsYUFBbkIsdUJBQWdEQSxTQUFoRCxDQUF0QjtBQUNBLGFBQU8sSUFBSXhCLGNBQUosMkJBQ2V5QixhQURmLGdCQUVIakQsWUFBWSxDQUFDWSxjQUZWLEVBR0hmLGNBQWMsQ0FBQ0MsTUFIWixDQUFQO0FBS0g7OztzQ0FFd0IyQixPLEVBQWlCO0FBQ3RDLGFBQU8sSUFBSUQsY0FBSixDQUFtQkMsT0FBbkIsRUFBNEJ6QixZQUFZLENBQUNZLGNBQXpDLENBQVA7QUFDSDs7O3FDQUV1QmdCLEssRUFBcUI7QUFDekMsYUFBT0osY0FBYyxDQUFDMEIsYUFBZixDQUE2QnRCLEtBQTdCLEVBQW9DSixjQUFjLENBQUNFLElBQWYsQ0FBb0JsQixlQUF4RCxDQUFQO0FBQ0g7OztxQ0FFdUJvQixLLEVBQXFCO0FBQ3pDLGFBQU9KLGNBQWMsQ0FBQzBCLGFBQWYsQ0FBNkJ0QixLQUE3QixFQUFvQ0osY0FBYyxDQUFDRSxJQUFmLENBQW9CckIsZ0JBQXhELENBQVA7QUFDSDs7Ozs7Ozs7Z0JBcE9RbUIsYyxZQUNPM0IsYzs7Z0JBRFAyQixjLFVBRUt4QixZIiwic291cmNlc0NvbnRlbnQiOlsiLypcbiAqIENvcHlyaWdodCAyMDE4LTIwMjAgVE9OIERFViBTT0xVVElPTlMgTFRELlxuICovXG4vLyBAZmxvd1xuXG5pbXBvcnQge1RhZ3MsIFNwYW4sIFNwYW5Db250ZXh0fSBmcm9tIFwib3BlbnRyYWNpbmdcIjtcbmltcG9ydCB0eXBlIHtcbiAgICBJVE9OQ2xpZW50LFxuICAgIFRPTkFjY2Vzc0tleXNNYW5hZ2VtZW50UGFyYW1zLFxuICAgIFRPTkNvbmZpZ0RhdGEsXG4gICAgVE9OQ29udHJhY3RzLFxuICAgIFRPTkNyeXB0bywgVE9OTWVzc2FnZVByb2Nlc3NpbmdTdGF0ZSxcbiAgICBUT05RdWVyaWVzLFxuICAgIFRPTlJlZ2lzdGVyQWNjZXNzS2V5c1BhcmFtcyxcbiAgICBUT05SZXZva2VBY2Nlc3NLZXlzUGFyYW1zLFxufSBmcm9tIFwiLi4vdHlwZXNcIjtcblxuaW1wb3J0IFRPTkNvbmZpZ01vZHVsZSBmcm9tICcuL21vZHVsZXMvVE9OQ29uZmlnTW9kdWxlJztcbmltcG9ydCBUT05Db250cmFjdHNNb2R1bGUgZnJvbSAnLi9tb2R1bGVzL1RPTkNvbnRyYWN0c01vZHVsZSc7XG5pbXBvcnQgVE9OQ3J5cHRvTW9kdWxlIGZyb20gJy4vbW9kdWxlcy9UT05DcnlwdG9Nb2R1bGUnO1xuLyogZXNsaW50LWRpc2FibGUgY2xhc3MtbWV0aG9kcy11c2UtdGhpcywgbm8tdXNlLWJlZm9yZS1kZWZpbmUgKi9cbmltcG9ydCBUT05RdWVyaWVzTW9kdWxlIGZyb20gXCIuL21vZHVsZXMvVE9OUXVlcmllc01vZHVsZVwiO1xuXG5pbXBvcnQgdHlwZSB7XG4gICAgVE9OQ2xpZW50Q29yZUxpYnJhcnksXG4gICAgVE9OQ2xpZW50Q29yZUJyaWRnZSxcbiAgICBUT05Nb2R1bGVDb250ZXh0XG59IGZyb20gJy4vVE9OTW9kdWxlJztcbmltcG9ydCB7VE9OTW9kdWxlfSBmcm9tICcuL1RPTk1vZHVsZSc7XG5cbi8qKlxuICogSmF2YVNjcmlwdCBwbGF0Zm9ybSBzcGVjaWZpYyBjb25maWd1cmF0aW9uXG4gKi9cbnR5cGUgVE9OQ2xpZW50UGxhdGZvcm0gPSB7XG4gICAgLyoqXG4gICAgICogUGxhdGZvcm0gc3BlY2lmaWMgYGZldGNoYCBmdW5jdGlvblxuICAgICAqL1xuICAgIGZldGNoOiBhbnksXG4gICAgLyoqXG4gICAgICogUGxhdGZvcm0gc3BlY2lmaWMgYFdlYlNvY2tldGAgaW1wbGVtZW50YXRpb25cbiAgICAgKiBUaGlzIGltcGxlbWVudGF0aW9uIG11c3QgY29uZm9ybXMgdG8gVzNDIFdlYlNvY2tldFxuICAgICAqL1xuICAgIFdlYlNvY2tldDogYW55LFxuICAgIC8qKlxuICAgICAqIFJlcXVlc3QgY3JlYXRpb24gb2YgdGhlIGNsaWVudCBjb3JlXG4gICAgICovXG4gICAgY3JlYXRlTGlicmFyeTogKCkgPT4gUHJvbWlzZTxUT05DbGllbnRDb3JlTGlicmFyeT4sXG59O1xuXG4vKipcbiAqIE1haW4gb2JqZWN0IHByb3ZpZGVkIGZ1bmN0aW9uYWxpdHkgb2YgdGhlIFRPTiBDbGllbnQgTGlicmFyeVxuICogRWFjaCBpbnN0YW5jZSBvZiBUT05DbGllbnQgaGFzIG93biBzZXQgb2YgVE9OIENsaWVudCBtb2R1bGVzXG4gKiBhbmQgaGFzIG93biBwcmVjb25maWd1cmVkIGNsaWVudCBjb250ZXh0XG4gKi9cbmV4cG9ydCBjbGFzcyBUT05DbGllbnQgaW1wbGVtZW50cyBUT05Nb2R1bGVDb250ZXh0LCBJVE9OQ2xpZW50IHtcbiAgICBzdGF0aWMgc2V0TGlicmFyeShjbGllbnRQbGF0Zm9ybTogVE9OQ2xpZW50UGxhdGZvcm0pIHtcbiAgICAgICAgVE9OQ2xpZW50LmNsaWVudFBsYXRmb3JtID0gY2xpZW50UGxhdGZvcm07XG4gICAgfVxuXG5cbiAgICAvLyBQdWJsaWNcbiAgICBjb25maWc6IFRPTkNvbmZpZ01vZHVsZTtcbiAgICBjcnlwdG86IFRPTkNyeXB0bztcbiAgICBjb250cmFjdHM6IFRPTkNvbnRyYWN0cztcbiAgICBxdWVyaWVzOiBUT05RdWVyaWVzO1xuICAgIF9xdWVyaWVzOiBUT05RdWVyaWVzTW9kdWxlO1xuICAgIF9jb250ZXh0OiBudW1iZXI7XG4gICAgX2NvcmVCcmlkZ2U6ID9UT05DbGllbnRDb3JlQnJpZGdlO1xuXG4gICAgY29uc3RydWN0b3IoKSB7XG4gICAgICAgIHRoaXMubW9kdWxlcyA9IG5ldyBNYXAoKTtcbiAgICAgICAgdGhpcy5jb25maWcgPSB0aGlzLmdldE1vZHVsZShUT05Db25maWdNb2R1bGUpO1xuICAgICAgICB0aGlzLmNyeXB0byA9IHRoaXMuZ2V0TW9kdWxlKFRPTkNyeXB0b01vZHVsZSk7XG4gICAgICAgIHRoaXMuY29udHJhY3RzID0gdGhpcy5nZXRNb2R1bGUoVE9OQ29udHJhY3RzTW9kdWxlKTtcbiAgICAgICAgdGhpcy5fcXVlcmllcyA9IHRoaXMuZ2V0TW9kdWxlKFRPTlF1ZXJpZXNNb2R1bGUpO1xuICAgICAgICB0aGlzLnF1ZXJpZXMgPSB0aGlzLl9xdWVyaWVzO1xuICAgICAgICB0aGlzLl9jb250ZXh0ID0gMDtcbiAgICAgICAgdGhpcy5fY29yZUJyaWRnZSA9IG51bGw7XG4gICAgfVxuXG4gICAgLyoqXG4gICAgICogQ29udmVuaWVudCB3YXkgdG8gY3JlYXRlIGNvbmZpZ3VyZWQgaW5zdGFuY2Ugb2YgdGhlIFRPTiBDbGllbnRcbiAgICAgKiBAcGFyYW0ge1RPTkNvbmZpZ0RhdGF9IGNvbmZpZ1xuICAgICAqIEByZXR1cm4ge1Byb21pc2U8VE9OQ2xpZW50Pn1cbiAgICAgKi9cbiAgICBzdGF0aWMgYXN5bmMgY3JlYXRlKGNvbmZpZzogVE9OQ29uZmlnRGF0YSk6IFByb21pc2U8VE9OQ2xpZW50PiB7XG4gICAgICAgIGNvbnN0IGNsaWVudCA9IG5ldyBUT05DbGllbnQoKTtcbiAgICAgICAgY2xpZW50LmNvbmZpZy5zZXREYXRhKGNvbmZpZyk7XG4gICAgICAgIGF3YWl0IGNsaWVudC5zZXR1cCgpO1xuICAgICAgICByZXR1cm4gY2xpZW50O1xuICAgIH1cblxuICAgIC8qKlxuICAgICAqIFNldCB1cCB0aGUgY2xpZW50IGluc3RhbmNlXG4gICAgICogQHJldHVybiB7UHJvbWlzZTx2b2lkPn1cbiAgICAgKi9cbiAgICBhc3luYyBzZXR1cCgpOiBQcm9taXNlPHZvaWQ+IHtcbiAgICAgICAgY29uc3QgdHJ5Q3JlYXRlTGlicmFyeSA9IGFzeW5jICgpID0+IHtcbiAgICAgICAgICAgIGNvbnN0IHBsYXRmb3JtID0gVE9OQ2xpZW50LmNsaWVudFBsYXRmb3JtO1xuICAgICAgICAgICAgaWYgKHBsYXRmb3JtID09PSBudWxsIHx8IHBsYXRmb3JtID09PSB1bmRlZmluZWQpIHtcbiAgICAgICAgICAgICAgICByZXR1cm4gbnVsbDtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIFRPTkNsaWVudC5jb3JlTGlicmFyeSA9IGF3YWl0IHBsYXRmb3JtLmNyZWF0ZUxpYnJhcnkoKTtcbiAgICAgICAgICAgIHJldHVybiBUT05DbGllbnQuY29yZUxpYnJhcnk7XG4gICAgICAgIH07XG4gICAgICAgIGNvbnN0IGxpYnJhcnkgPSBUT05DbGllbnQuY29yZUxpYnJhcnkgfHwgYXdhaXQgdHJ5Q3JlYXRlTGlicmFyeSgpO1xuICAgICAgICBpZiAoIWxpYnJhcnkpIHtcbiAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgfVxuICAgICAgICBpZiAodGhpcy5fY29yZUJyaWRnZSA9PT0gbnVsbCB8fCB0aGlzLl9jb3JlQnJpZGdlID09PSB1bmRlZmluZWQpIHtcbiAgICAgICAgICAgIGlmIChsaWJyYXJ5LmNvcmVDcmVhdGVDb250ZXh0KSB7XG4gICAgICAgICAgICAgICAgdGhpcy5fY29udGV4dCA9IGF3YWl0IG5ldyBQcm9taXNlKChyZXNvbHZlKSA9PiBsaWJyYXJ5LmNvcmVDcmVhdGVDb250ZXh0KHJlc29sdmUpKTtcbiAgICAgICAgICAgICAgICB0aGlzLl9jb3JlQnJpZGdlID0ge1xuICAgICAgICAgICAgICAgICAgICByZXF1ZXN0OiAoXG4gICAgICAgICAgICAgICAgICAgICAgICBtZXRob2Q6IHN0cmluZyxcbiAgICAgICAgICAgICAgICAgICAgICAgIHBhcmFtc0pzb246IHN0cmluZyxcbiAgICAgICAgICAgICAgICAgICAgICAgIG9uUmVzdWx0OiAocmVzdWx0SnNvbjogc3RyaW5nLCBlcnJvckpzb246IHN0cmluZykgPT4gdm9pZCxcbiAgICAgICAgICAgICAgICAgICAgKTogdm9pZCA9PiB7XG4gICAgICAgICAgICAgICAgICAgICAgICBpZiAoVE9OQ2xpZW50LmNvcmVMaWJyYXJ5KSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgVE9OQ2xpZW50LmNvcmVMaWJyYXJ5LmNvcmVSZXF1ZXN0KHRoaXMuX2NvbnRleHQsIG1ldGhvZCwgcGFyYW1zSnNvbiwgb25SZXN1bHQpO1xuICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgICB0aGlzLl9jb3JlQnJpZGdlID0gbGlicmFyeTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgICBjb25zdCBtb2R1bGVzOiBUT05Nb2R1bGVbXSA9IFsuLi50aGlzLm1vZHVsZXMudmFsdWVzKCldO1xuICAgICAgICBmb3IgKGNvbnN0IG1vZHVsZSBvZiBtb2R1bGVzKSB7XG4gICAgICAgICAgICBhd2FpdCBtb2R1bGUuc2V0dXAoKTtcbiAgICAgICAgfVxuICAgIH1cblxuICAgIC8qKlxuICAgICAqIFRlYXIgZG93biB0aGlzIGNsaWVudCBpbnN0YW5jZS5cbiAgICAgKiBOb3RlIHRoYXQgYWZ0ZXIgeW91IGhhdmUgY2FsbGVkIHRoaXMgbWV0aG9kIGFsbCBmdXR1cmUgdXNlIG9mIHRoaXMgaW5zdGFuY2Ugd2lsbCBmYWlsXG4gICAgICogQHJldHVybiB7UHJvbWlzZTx2b2lkPn1cbiAgICAgKi9cbiAgICBhc3luYyBjbG9zZSgpOiBQcm9taXNlPHZvaWQ+IHtcbiAgICAgICAgYXdhaXQgdGhpcy5xdWVyaWVzLmNsb3NlKCk7XG4gICAgICAgIGNvbnN0IGxpYnJhcnkgPSBUT05DbGllbnQuY29yZUxpYnJhcnk7XG4gICAgICAgIGlmICh0aGlzLl9jb250ZXh0ID4gMCAmJiBsaWJyYXJ5ICE9PSBudWxsICYmIGxpYnJhcnkgIT09IHVuZGVmaW5lZCkge1xuICAgICAgICAgICAgY29uc3QgY29udGV4dCA9IHRoaXMuX2NvbnRleHQ7XG4gICAgICAgICAgICB0aGlzLl9jb3JlQnJpZGdlID0gbnVsbDtcbiAgICAgICAgICAgIHRoaXMuX2NvbnRleHQgPSAwO1xuICAgICAgICAgICAgYXdhaXQgbmV3IFByb21pc2UocmVzb2x2ZSA9PiBsaWJyYXJ5LmNvcmVEZXN0cm95Q29udGV4dChjb250ZXh0LCByZXNvbHZlKSk7XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICAvLyBUT05Nb2R1bGVDb250ZXh0XG5cbiAgICBnZXRDb3JlQnJpZGdlKCk6ID9UT05DbGllbnRDb3JlQnJpZGdlIHtcbiAgICAgICAgcmV0dXJuIHRoaXMuX2NvcmVCcmlkZ2U7XG4gICAgfVxuXG4gICAgZ2V0TW9kdWxlPFQ+KE1vZHVsZUNsYXNzOiB0eXBlb2YgVE9OTW9kdWxlKTogVCB7XG4gICAgICAgIGNvbnN0IG5hbWUgPSBNb2R1bGVDbGFzcy5tb2R1bGVOYW1lO1xuICAgICAgICBjb25zdCBleGlzdGluZ01vZHVsZSA9IHRoaXMubW9kdWxlcy5nZXQobmFtZSk7XG4gICAgICAgIGlmIChleGlzdGluZ01vZHVsZSkge1xuICAgICAgICAgICAgcmV0dXJuIChleGlzdGluZ01vZHVsZTogYW55KTtcbiAgICAgICAgfVxuICAgICAgICBjb25zdCBtb2R1bGUgPSBuZXcgTW9kdWxlQ2xhc3ModGhpcyk7XG4gICAgICAgIHRoaXMubW9kdWxlcy5zZXQobmFtZSwgbW9kdWxlKTtcbiAgICAgICAgcmV0dXJuIChtb2R1bGU6IGFueSk7XG4gICAgfVxuXG4gICAgc2VydmVyVGltZURlbHRhKCk6IFByb21pc2U8bnVtYmVyPiB7XG4gICAgICAgIHJldHVybiB0aGlzLl9xdWVyaWVzLnNlcnZlclRpbWVEZWx0YSgpO1xuICAgIH1cblxuICAgIHNlcnZlck5vdygpOiBQcm9taXNlPG51bWJlcj4ge1xuICAgICAgICByZXR1cm4gdGhpcy5fcXVlcmllcy5zZXJ2ZXJOb3coKTtcbiAgICB9XG5cbiAgICBhc3luYyBnZXRNYW5hZ2VtZW50QWNjZXNzS2V5KCk6IFByb21pc2U8c3RyaW5nPiB7XG4gICAgICAgIGNvbnN0IHJlc3VsdCA9IGF3YWl0IHRoaXMuX3F1ZXJpZXMucXVlcnkoJ3F1ZXJ5e2dldE1hbmFnZW1lbnRBY2Nlc3NLZXl9Jyk7XG4gICAgICAgIHJldHVybiByZXN1bHQuZGF0YS5nZXRNYW5hZ2VtZW50QWNjZXNzS2V5O1xuICAgIH1cblxuXG4gICAgYXN5bmMgX3Jlc29sdmVTaWduZWRNYW5hZ2VtZW50QWNjZXNzS2V5KHBhcmFtczogVE9OQWNjZXNzS2V5c01hbmFnZW1lbnRQYXJhbXMpOiBQcm9taXNlPHN0cmluZz4ge1xuICAgICAgICBpZiAocGFyYW1zLnNpZ25lZE1hbmFnZW1lbnRBY2Nlc3NLZXkpIHtcbiAgICAgICAgICAgIHJldHVybiBwYXJhbXMuc2lnbmVkTWFuYWdlbWVudEFjY2Vzc0tleTtcbiAgICAgICAgfVxuICAgICAgICBjb25zdCBzaWduS2V5cyA9IHBhcmFtcy5hY2NvdW50S2V5cztcbiAgICAgICAgaWYgKHNpZ25LZXlzKSB7XG4gICAgICAgICAgICBjb25zdCBtYW5hZ2VtZW50QWNjZXNzS2V5ID0gYXdhaXQgdGhpcy5nZXRNYW5hZ2VtZW50QWNjZXNzS2V5KCk7XG4gICAgICAgICAgICByZXR1cm4gdGhpcy5jcnlwdG8ubmFjbFNpZ24oXG4gICAgICAgICAgICAgICAgeyB0ZXh0OiBtYW5hZ2VtZW50QWNjZXNzS2V5IH0sXG4gICAgICAgICAgICAgICAgYCR7c2lnbktleXMuc2VjcmV0fSR7c2lnbktleXMucHVibGljfWAsXG4gICAgICAgICAgICAgICAgJ0hleCcpO1xuICAgICAgICB9XG4gICAgICAgIHJldHVybiAnJztcbiAgICB9XG5cbiAgICBhc3luYyByZWdpc3RlckFjY2Vzc0tleXMoXG4gICAgICAgIHBhcmFtczogVE9OUmVnaXN0ZXJBY2Nlc3NLZXlzUGFyYW1zXG4gICAgKTogUHJvbWlzZTxudW1iZXI+IHtcbiAgICAgICAgY29uc3Qgc2lnbmVkTWFuYWdlbWVudEFjY2Vzc0tleSA9IGF3YWl0IHRoaXMuX3Jlc29sdmVTaWduZWRNYW5hZ2VtZW50QWNjZXNzS2V5KHBhcmFtcyk7XG4gICAgICAgIGNvbnN0IHJlc3VsdCA9IGF3YWl0IHRoaXMuX3F1ZXJpZXMubXV0YXRpb24oXG4gICAgICAgICAgICBgbXV0YXRpb24gcmVnaXN0ZXJBY2Nlc3NLZXlzKCRhY2NvdW50OiBTdHJpbmcsICRrZXlzOiBbQWNjZXNzS2V5XSwgJHNpZ25lZE1hbmFnZW1lbnRBY2Nlc3NLZXk6IFN0cmluZykge1xuICAgICAgICAgICAgICAgICAgICByZWdpc3RlckFjY2Vzc0tleXMoYWNjb3VudDogJGFjY291bnQsIGtleXM6ICRrZXlzLCBzaWduZWRNYW5hZ2VtZW50QWNjZXNzS2V5OiAkc2lnbmVkTWFuYWdlbWVudEFjY2Vzc0tleSlcbiAgICAgICAgICAgICAgICB9YCwge1xuICAgICAgICAgICAgICAgIGFjY291bnQ6IHBhcmFtcy5hY2NvdW50LFxuICAgICAgICAgICAgICAgIGtleXM6IHBhcmFtcy5rZXlzLFxuICAgICAgICAgICAgICAgIHNpZ25lZE1hbmFnZW1lbnRBY2Nlc3NLZXksXG4gICAgICAgICAgICB9KTtcbiAgICAgICAgcmV0dXJuIHJlc3VsdC5kYXRhLnJlZ2lzdGVyQWNjZXNzS2V5cztcbiAgICB9XG5cbiAgICBhc3luYyByZXZva2VBY2Nlc3NLZXlzKFxuICAgICAgICBwYXJhbXM6IFRPTlJldm9rZUFjY2Vzc0tleXNQYXJhbXNcbiAgICApOiBQcm9taXNlPG51bWJlcj4ge1xuICAgICAgICBjb25zdCBzaWduZWRNYW5hZ2VtZW50QWNjZXNzS2V5ID0gYXdhaXQgdGhpcy5fcmVzb2x2ZVNpZ25lZE1hbmFnZW1lbnRBY2Nlc3NLZXkocGFyYW1zKTtcbiAgICAgICAgY29uc3QgcmVzdWx0ID0gYXdhaXQgdGhpcy5fcXVlcmllcy5tdXRhdGlvbihcbiAgICAgICAgICAgIGBtdXRhdGlvbiByZXZva2VBY2Nlc3NLZXlzKCRhY2NvdW50OiBTdHJpbmcsICRrZXlzOiBbU3RyaW5nXSwgJHNpZ25lZE1hbmFnZW1lbnRBY2Nlc3NLZXk6IFN0cmluZykge1xuICAgICAgICAgICAgICAgICAgICByZXZva2VBY2Nlc3NLZXlzKGFjY291bnQ6ICRhY2NvdW50LCBrZXlzOiAka2V5cywgc2lnbmVkTWFuYWdlbWVudEFjY2Vzc0tleTogJHNpZ25lZE1hbmFnZW1lbnRBY2Nlc3NLZXkpXG4gICAgICAgICAgICAgICAgfWAsIHtcbiAgICAgICAgICAgICAgICBhY2NvdW50OiBwYXJhbXMuYWNjb3VudCxcbiAgICAgICAgICAgICAgICBrZXlzOiBwYXJhbXMua2V5cyxcbiAgICAgICAgICAgICAgICBzaWduZWRNYW5hZ2VtZW50QWNjZXNzS2V5LFxuICAgICAgICAgICAgfSk7XG4gICAgICAgIHJldHVybiByZXN1bHQuZGF0YS5yZXZva2VBY2Nlc3NLZXlzO1xuICAgIH1cblxuICAgIGFzeW5jIHRyYWNlPFQ+KFxuICAgICAgICBuYW1lOiBzdHJpbmcsXG4gICAgICAgIGY6IChzcGFuOiBTcGFuKSA9PiBQcm9taXNlPFQ+LFxuICAgICAgICBwYXJlbnRTcGFuPzogKFNwYW4gfCBTcGFuQ29udGV4dClcbiAgICApOiBQcm9taXNlPFQ+IHtcbiAgICAgICAgY29uc3Qgc3BhbiA9IHRoaXMuY29uZmlnLnRyYWNlci5zdGFydFNwYW4obmFtZSwgeyBjaGlsZE9mOiBwYXJlbnRTcGFuIH0pO1xuICAgICAgICB0cnkge1xuICAgICAgICAgICAgc3Bhbi5zZXRUYWcoVGFncy5TUEFOX0tJTkQsICdjbGllbnQnKTtcbiAgICAgICAgICAgIGNvbnN0IHJlc3VsdCA9IGF3YWl0IGYoc3Bhbik7XG4gICAgICAgICAgICBpZiAocmVzdWx0ICE9PSB1bmRlZmluZWQpIHtcbiAgICAgICAgICAgICAgICBzcGFuLnNldFRhZygncmVzdWx0JywgcmVzdWx0KTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIHNwYW4uZmluaXNoKCk7XG4gICAgICAgICAgICByZXR1cm4gcmVzdWx0O1xuICAgICAgICB9IGNhdGNoIChlcnJvcikge1xuICAgICAgICAgICAgc3Bhbi5sb2coeyBldmVudDogJ2ZhaWxlZCcsIHBheWxvYWQ6IGVycm9yIH0pO1xuICAgICAgICAgICAgc3Bhbi5maW5pc2goKTtcbiAgICAgICAgICAgIHRocm93IGVycm9yO1xuICAgICAgICB9XG4gICAgfVxuXG4gICAgLy8gSW50ZXJuYWxzXG5cbiAgICBzdGF0aWMgY2xpZW50UGxhdGZvcm06ID9UT05DbGllbnRQbGF0Zm9ybSA9IG51bGw7XG4gICAgc3RhdGljIGNvcmVMaWJyYXJ5OiA/VE9OQ2xpZW50Q29yZUxpYnJhcnkgPSBudWxsO1xuXG4gICAgbW9kdWxlczogTWFwPHN0cmluZywgVE9OTW9kdWxlPjtcbn1cblxuXG5leHBvcnQgY29uc3QgVE9ORXJyb3JTb3VyY2UgPSB7XG4gICAgQ0xJRU5UOiAnY2xpZW50JyxcbiAgICBOT0RFOiAnbm9kZSdcbn07XG5cbmV4cG9ydCBjb25zdCBUT05FcnJvckNvZGUgPSB7XG4gICAgQ0xJRU5UX0RPRVNfTk9UX0NPTkZJR1VSRUQ6IDEwMDAsXG4gICAgU0VORF9OT0RFX1JFUVVFU1RfRkFJTEVEOiAxMDAxLFxuICAgIE1FU1NBR0VfQUxSRUFEWV9FWFBJUkVEOiAxMDAxLFxuICAgIFJVTl9MT0NBTF9BQ0NPVU5UX0RPRVNfTk9UX0VYSVNUUzogMTAwMixcbiAgICBXQUlUX0ZPUl9USU1FT1VUOiAxMDAzLFxuICAgIElOVEVSTkFMX0VSUk9SOiAxMDA0LFxuICAgIFFVRVJZX0ZBSUxFRDogMTAwNSxcbiAgICBNRVNTQUdFX0VYUElSRUQ6IDEwMDYsXG4gICAgU0VSVkVSX0RPRVNOVF9TVVBQT1JUX0FHR1JFR0FUSU9OUzogMTAwNyxcbiAgICBJTlZBTElEX0NPTlM6IDEwMDgsXG4gICAgQUREUkVTU19SRVFVSVJFRF9GT1JfUlVOX0xPQ0FMOiAxMDA5LFxuICAgIE5FVFdPUktfU0lMRU5UOiAxMDEwLFxuICAgIFRSQU5TQUNUSU9OX0xBRzogMTAxMSxcbiAgICBUUkFOU0FDVElPTl9XQUlUX1RJTUVPVVQ6IDEwMTIsXG4gICAgQ0xPQ0tfT1VUX09GX1NZTkM6IDEwMTMsXG4gICAgQUNDT1VOVF9NSVNTSU5HOiAxMDE0LFxuICAgIEFDQ09VTlRfQ09ERV9NSVNTSU5HOiAxMDE1LFxuICAgIEFDQ09VTlRfQkFMQU5DRV9UT09fTE9XOiAxMDE2LFxuICAgIEFDQ09VTlRfRlJPWkVOX09SX0RFTEVURUQ6IDEwMTcsXG5cbiAgICAvLyBDb250cmFjdHNcblxuICAgIENPTlRSQUNUX0VYRUNVVElPTl9GQUlMRUQ6IDMwMjUsXG59O1xuXG5leHBvcnQgY29uc3QgVE9OQ29udHJhY3RFeGl0Q29kZSA9IHtcbiAgICBSRVBMQVlfUFJPVEVDVElPTjogNTIsXG4gICAgTUVTU0FHRV9FWFBJUkVEOiA1NyxcbiAgICBOT19HQVM6IDEzLFxufVxuXG5leHBvcnQgY2xhc3MgVE9OQ2xpZW50RXJyb3Ige1xuICAgIHN0YXRpYyBzb3VyY2UgPSBUT05FcnJvclNvdXJjZTtcbiAgICBzdGF0aWMgY29kZSA9IFRPTkVycm9yQ29kZTtcblxuICAgIG1lc3NhZ2U6IHN0cmluZztcbiAgICBzb3VyY2U6IHN0cmluZztcbiAgICBjb2RlOiBudW1iZXI7XG4gICAgZGF0YTogYW55O1xuXG4gICAgY29uc3RydWN0b3IobWVzc2FnZTogc3RyaW5nLCBjb2RlOiBudW1iZXIsIHNvdXJjZT86IHN0cmluZywgZGF0YT86IGFueSkge1xuICAgICAgICB0aGlzLm1lc3NhZ2UgPSBtZXNzYWdlO1xuICAgICAgICB0aGlzLmNvZGUgPSBjb2RlO1xuICAgICAgICB0aGlzLnNvdXJjZSA9IHNvdXJjZSB8fCBUT05FcnJvclNvdXJjZS5DTElFTlQ7XG4gICAgICAgIHRoaXMuZGF0YSA9IGRhdGE7XG4gICAgfVxuXG4gICAgc3RhdGljIGlzQ2xpZW50RXJyb3IoZXJyb3I6IGFueSwgY29kZTogbnVtYmVyKTogYm9vbGVhbiB7XG4gICAgICAgIHJldHVybiAoZXJyb3Iuc291cmNlID09PSBUT05DbGllbnRFcnJvci5zb3VyY2UuQ0xJRU5UKVxuICAgICAgICAgICAgJiYgKGVycm9yLmNvZGUgPT09IGNvZGUpO1xuICAgIH1cblxuICAgIHN0YXRpYyBpc05vZGVFcnJvcihlcnJvcjogYW55LCBjb2RlOiBudW1iZXIpOiBib29sZWFuIHtcbiAgICAgICAgcmV0dXJuIChlcnJvci5zb3VyY2UgPT09IFRPTkNsaWVudEVycm9yLnNvdXJjZS5OT0RFKVxuICAgICAgICAgICAgJiYgKGVycm9yLmNvZGUgPT09IGNvZGUpO1xuICAgIH1cblxuICAgIHN0YXRpYyBpc0NvbnRyYWN0RXJyb3IoZXJyb3I6IGFueSwgZXhpdENvZGU6IG51bWJlcik6IGJvb2xlYW4ge1xuICAgICAgICByZXR1cm4gKGVycm9yLnNvdXJjZSA9PT0gVE9OQ2xpZW50RXJyb3Iuc291cmNlLk5PREUpXG4gICAgICAgICAgICAmJiAoZXJyb3IuY29kZSA9PT0gVE9OQ2xpZW50RXJyb3IuY29kZS5DT05UUkFDVF9FWEVDVVRJT05fRkFJTEVEKVxuICAgICAgICAgICAgJiYgKGVycm9yLmRhdGEgJiYgZXJyb3IuZGF0YS5leGl0X2NvZGUgPT09IGV4aXRDb2RlKTtcbiAgICB9XG5cbiAgICBzdGF0aWMgaW50ZXJuYWxFcnJvcihtZXNzYWdlOiBzdHJpbmcpOiBUT05DbGllbnRFcnJvciB7XG4gICAgICAgIHJldHVybiBuZXcgVE9OQ2xpZW50RXJyb3IoXG4gICAgICAgICAgICBgSW50ZXJuYWwgZXJyb3I6ICR7bWVzc2FnZX1gLFxuICAgICAgICAgICAgVE9OQ2xpZW50RXJyb3IuY29kZS5JTlRFUk5BTF9FUlJPUixcbiAgICAgICAgICAgIFRPTkNsaWVudEVycm9yLnNvdXJjZS5DTElFTlQsXG4gICAgICAgICk7XG4gICAgfVxuXG4gICAgc3RhdGljIGludmFsaWRDb25zKCk6IFRPTkNsaWVudEVycm9yIHtcbiAgICAgICAgcmV0dXJuIG5ldyBUT05DbGllbnRFcnJvcihcbiAgICAgICAgICAgICdJbnZhbGlkIENPTlMgc3RydWN0dXJlLiBFYWNoIENPTlMgaXRlbSBtdXN0IGNvbnRhaW5zIG9mIHR3byBlbGVtZW50cy4nLFxuICAgICAgICAgICAgVE9OQ2xpZW50RXJyb3IuY29kZS5JTlZBTElEX0NPTlMsXG4gICAgICAgICAgICBUT05DbGllbnRFcnJvci5zb3VyY2UuQ0xJRU5ULFxuICAgICAgICApO1xuICAgIH1cblxuICAgIHN0YXRpYyBjbGllbnREb2VzTm90Q29uZmlndXJlZCgpOiBUT05DbGllbnRFcnJvciB7XG4gICAgICAgIHJldHVybiBuZXcgVE9OQ2xpZW50RXJyb3IoXG4gICAgICAgICAgICAnVE9OIENsaWVudCBpc25cXCd0IGNvbmZpZ3VyZWQnLFxuICAgICAgICAgICAgVE9OQ2xpZW50RXJyb3IuY29kZS5DTElFTlRfRE9FU19OT1RfQ09ORklHVVJFRCxcbiAgICAgICAgICAgIFRPTkNsaWVudEVycm9yLnNvdXJjZS5DTElFTlQsXG4gICAgICAgICk7XG4gICAgfVxuXG4gICAgc3RhdGljIHNlbmROb2RlUmVxdWVzdEZhaWxlZChyZXNwb25zZVRleHQ6IHN0cmluZyk6IFRPTkNsaWVudEVycm9yIHtcbiAgICAgICAgcmV0dXJuIG5ldyBUT05DbGllbnRFcnJvcihcbiAgICAgICAgICAgIGBTZW5kIG5vZGUgcmVxdWVzdCBmYWlsZWQ6ICR7cmVzcG9uc2VUZXh0fWAsXG4gICAgICAgICAgICBUT05DbGllbnRFcnJvci5jb2RlLlNFTkRfTk9ERV9SRVFVRVNUX0ZBSUxFRCxcbiAgICAgICAgICAgIFRPTkNsaWVudEVycm9yLnNvdXJjZS5DTElFTlQsXG4gICAgICAgICk7XG4gICAgfVxuXG4gICAgc3RhdGljIHJ1bkxvY2FsQWNjb3VudERvZXNOb3RFeGlzdHMoZnVuY3Rpb25OYW1lOiBzdHJpbmcsIGFkZHJlc3M6IHN0cmluZyk6IFRPTkNsaWVudEVycm9yIHtcbiAgICAgICAgcmV0dXJuIG5ldyBUT05DbGllbnRFcnJvcihcbiAgICAgICAgICAgIGBbJHtmdW5jdGlvbk5hbWV9XSBydW4gbG9jYWwgZmFpbGVkOiBhY2NvdW50IFske2FkZHJlc3N9XSBkb2VzIG5vdCBleGlzdHNgLFxuICAgICAgICAgICAgVE9OQ2xpZW50RXJyb3IuY29kZS5SVU5fTE9DQUxfQUNDT1VOVF9ET0VTX05PVF9FWElTVFMsXG4gICAgICAgICAgICBUT05DbGllbnRFcnJvci5zb3VyY2UuQ0xJRU5ULFxuICAgICAgICApO1xuICAgIH1cblxuICAgIHN0YXRpYyB3YWl0Rm9yVGltZW91dCgpIHtcbiAgICAgICAgcmV0dXJuIG5ldyBUT05DbGllbnRFcnJvcihcbiAgICAgICAgICAgICdXYWl0IGZvciBvcGVyYXRpb24gcmVqZWN0ZWQgb24gdGltZW91dCcsXG4gICAgICAgICAgICBUT05DbGllbnRFcnJvci5jb2RlLldBSVRfRk9SX1RJTUVPVVQsXG4gICAgICAgICAgICBUT05DbGllbnRFcnJvci5zb3VyY2UuQ0xJRU5ULFxuICAgICAgICApO1xuICAgIH1cblxuICAgIHN0YXRpYyBxdWVyeUZhaWxlZChlcnJvcnM6IEVycm9yW10pIHtcbiAgICAgICAgcmV0dXJuIG5ldyBUT05DbGllbnRFcnJvcihcbiAgICAgICAgICAgIGBRdWVyeSBmYWlsZWQ6ICR7ZXJyb3JzLm1hcCh4ID0+IHgubWVzc2FnZSB8fCB4LnRvU3RyaW5nKCkpLmpvaW4oJ1xcbicpfWAsXG4gICAgICAgICAgICBUT05DbGllbnRFcnJvci5jb2RlLlFVRVJZX0ZBSUxFRCxcbiAgICAgICAgICAgIFRPTkNsaWVudEVycm9yLnNvdXJjZS5DTElFTlQsXG4gICAgICAgICk7XG4gICAgfVxuXG4gICAgc3RhdGljIGZvcm1hdFRpbWUodGltZTogP251bWJlcik6ID9zdHJpbmcge1xuICAgICAgICBpZiAodGltZSkge1xuICAgICAgICAgICAgcmV0dXJuIGAke25ldyBEYXRlKHRpbWUgKiAxMDAwKS50b0lTT1N0cmluZygpfSAoJHt0aW1lfSlgO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgcmV0dXJuIG51bGw7XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICBzdGF0aWMgbWVzc2FnZUV4cGlyZWQoZGF0YToge1xuICAgICAgICBtZXNzYWdlSWQ6IHN0cmluZyxcbiAgICAgICAgc2VuZFRpbWU6IG51bWJlcixcbiAgICAgICAgZXhwaXJlOiA/bnVtYmVyLFxuICAgICAgICBibG9ja1RpbWU6ID9udW1iZXIsXG4gICAgfSkge1xuICAgICAgICByZXR1cm4gbmV3IFRPTkNsaWVudEVycm9yKFxuICAgICAgICAgICAgJ01lc3NhZ2UgZXhwaXJlZCcsXG4gICAgICAgICAgICBUT05DbGllbnRFcnJvci5jb2RlLk1FU1NBR0VfRVhQSVJFRCxcbiAgICAgICAgICAgIFRPTkNsaWVudEVycm9yLnNvdXJjZS5DTElFTlQsXG4gICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgc2VuZFRpbWU6IFRPTkNsaWVudEVycm9yLmZvcm1hdFRpbWUoZGF0YS5zZW5kVGltZSksXG4gICAgICAgICAgICAgICAgZXhwaXJhdGlvblRpbWU6IFRPTkNsaWVudEVycm9yLmZvcm1hdFRpbWUoZGF0YS5leHBpcmUpLFxuICAgICAgICAgICAgICAgIGJsb2NrVGltZTogVE9OQ2xpZW50RXJyb3IuZm9ybWF0VGltZShkYXRhLmJsb2NrVGltZSksXG4gICAgICAgICAgICB9XG4gICAgICAgICk7XG4gICAgfVxuXG4gICAgc3RhdGljIHNlcnZlckRvZXNudFN1cHBvcnRBZ2dyZWdhdGlvbnMoKSB7XG4gICAgICAgIHJldHVybiBuZXcgVE9OQ2xpZW50RXJyb3IoXG4gICAgICAgICAgICAnU2VydmVyIGRvZXNuXFwndCBzdXBwb3J0IGFnZ3JlZ2F0aW9ucycsXG4gICAgICAgICAgICBUT05DbGllbnRFcnJvci5jb2RlLlNFUlZFUl9ET0VTTlRfU1VQUE9SVF9BR0dSRUdBVElPTlMsXG4gICAgICAgICAgICBUT05DbGllbnRFcnJvci5zb3VyY2UuQ0xJRU5ULFxuICAgICAgICApO1xuICAgIH1cblxuICAgIHN0YXRpYyBhZGRyZXNzUmVxdWlyZWRGb3JSdW5Mb2NhbCgpIHtcbiAgICAgICAgcmV0dXJuIG5ldyBUT05DbGllbnRFcnJvcihcbiAgICAgICAgICAgIGBBZGRyZXNzIHJlcXVpcmVkIGZvciBydW4gbG9jYWwuIFlvdSBoYXZlbid0IHNwZWNpZmllZCBjb250cmFjdCBjb2RlIG9yIGRhdGEgc28gYWRkcmVzcyBpcyByZXF1aXJlZCB0byBsb2FkIG1pc3NpbmcgcGFydHMgZnJvbSBuZXR3b3JrLmAsXG4gICAgICAgICAgICBUT05DbGllbnRFcnJvci5jb2RlLkFERFJFU1NfUkVRVUlSRURfRk9SX1JVTl9MT0NBTCxcbiAgICAgICAgICAgIFRPTkNsaWVudEVycm9yLnNvdXJjZS5DTElFTlQsXG4gICAgICAgICk7XG4gICAgfVxuXG4gICAgc3RhdGljIG5ldHdvcmtTaWxlbnQoZGF0YToge1xuICAgICAgICBtZXNzYWdlSWQ6IHN0cmluZyxcbiAgICAgICAgc2VuZFRpbWU6IG51bWJlcixcbiAgICAgICAgZXhwaXJlOiBudW1iZXIsXG4gICAgICAgIHRpbWVvdXQ6IG51bWJlcixcbiAgICAgICAgYmxvY2tJZD86IHN0cmluZyxcbiAgICAgICAgbWVzc2FnZVByb2Nlc3NpbmdTdGF0ZT86IFRPTk1lc3NhZ2VQcm9jZXNzaW5nU3RhdGUsXG4gICAgfSkge1xuICAgICAgICByZXR1cm4gbmV3IFRPTkNsaWVudEVycm9yKFxuICAgICAgICAgICAgJ05ldHdvcmsgc2lsZW50OiBubyBibG9ja3MgcHJvZHVjZWQgZHVyaW5nIHRpbWVvdXQuJyxcbiAgICAgICAgICAgIFRPTkNsaWVudEVycm9yLmNvZGUuTkVUV09SS19TSUxFTlQsXG4gICAgICAgICAgICBUT05DbGllbnRFcnJvci5zb3VyY2UuQ0xJRU5ULFxuICAgICAgICAgICAgZGF0YSAmJiB7XG4gICAgICAgICAgICAgICAgLi4uZGF0YSxcbiAgICAgICAgICAgICAgICBzZW5kVGltZTogVE9OQ2xpZW50RXJyb3IuZm9ybWF0VGltZShkYXRhLnNlbmRUaW1lKSxcbiAgICAgICAgICAgICAgICBleHBpcmF0aW9uVGltZTogVE9OQ2xpZW50RXJyb3IuZm9ybWF0VGltZShkYXRhLmV4cGlyZSksXG4gICAgICAgICAgICB9XG4gICAgICAgICk7XG4gICAgfVxuXG4gICAgc3RhdGljIHRyYW5zYWN0aW9uV2FpdFRpbWVvdXQoZGF0YToge1xuICAgICAgICBtZXNzYWdlSWQ6IHN0cmluZyxcbiAgICAgICAgc2VuZFRpbWU6IG51bWJlcixcbiAgICAgICAgdGltZW91dDogbnVtYmVyLFxuICAgICAgICBtZXNzYWdlUHJvY2Vzc2luZ1N0YXRlPzogVE9OTWVzc2FnZVByb2Nlc3NpbmdTdGF0ZSxcblxuICAgIH0pIHtcbiAgICAgICAgcmV0dXJuIG5ldyBUT05DbGllbnRFcnJvcihcbiAgICAgICAgICAgICdUcmFuc2FjdGlvbiBkaWQgbm90IHByb2R1Y2VkIGR1cmluZyBzcGVjaWZpZWQgdGltZW91dCcsXG4gICAgICAgICAgICBUT05DbGllbnRFcnJvci5jb2RlLlRSQU5TQUNUSU9OX1dBSVRfVElNRU9VVCxcbiAgICAgICAgICAgIFRPTkNsaWVudEVycm9yLnNvdXJjZS5DTElFTlQsXG4gICAgICAgICAgICBkYXRhICYmIHtcbiAgICAgICAgICAgICAgICAuLi5kYXRhLFxuICAgICAgICAgICAgICAgIHNlbmRUaW1lOiBUT05DbGllbnRFcnJvci5mb3JtYXRUaW1lKGRhdGEuc2VuZFRpbWUpLFxuICAgICAgICAgICAgfVxuICAgICAgICApO1xuICAgIH1cblxuICAgIHN0YXRpYyBjbG9ja091dE9mU3luYygpIHtcbiAgICAgICAgcmV0dXJuIG5ldyBUT05DbGllbnRFcnJvcihcbiAgICAgICAgICAgICdZb3UgbG9jYWwgY2xvY2sgaXMgb3V0IG9mIHN5bmMgd2l0aCB0aGUgc2VydmVyIHRpbWUuICcgK1xuICAgICAgICAgICAgJ0l0IGlzIGEgY3JpdGljYWwgY29uZGl0aW9uIGZvciBzZW5kaW5nIG1lc3NhZ2VzIHRvIHRoZSBibG9ja2NoYWluLiAnICtcbiAgICAgICAgICAgICdQbGVhc2Ugc3luYyB5b3UgY2xvY2sgd2l0aCB0aGUgaW50ZXJuZXQgdGltZS4nLFxuICAgICAgICAgICAgVE9OQ2xpZW50RXJyb3IuY29kZS5DTE9DS19PVVRfT0ZfU1lOQyxcbiAgICAgICAgICAgIFRPTkNsaWVudEVycm9yLnNvdXJjZS5DTElFTlQsXG4gICAgICAgICk7XG4gICAgfVxuXG4gICAgc3RhdGljIGFjY291bnRNaXNzaW5nKGFkZHJlc3M6IHN0cmluZykge1xuICAgICAgICByZXR1cm4gbmV3IFRPTkNsaWVudEVycm9yKFxuICAgICAgICAgICAgYEFjY291bnQgd2l0aCBhZGRyZXNzIFske2FkZHJlc3N9XSBkb2Vzbid0IGV4aXN0cy4gYCArXG4gICAgICAgICAgICAnWW91IGhhdmUgdG8gcHJlcGFpZCB0aGlzIGFjY291bnQgdG8gaGF2ZSBhIHBvc2l0aXZlIGJhbGFuY2Ugb24gdGhlbSBhbmQgdGhlbiBkZXBsb3kgYSBjb250cmFjdCBjb2RlIGZvciB0aGlzIGFjY291bnQuJyArXG4gICAgICAgICAgICAnU2VlIFNESyBkb2N1bWVudGF0aW9uIGZvciBkZXRhaWxlZCBpbnN0cnVjdGlvbnMuJyxcbiAgICAgICAgICAgIFRPTkNsaWVudEVycm9yLmNvZGUuQUNDT1VOVF9NSVNTSU5HLFxuICAgICAgICAgICAgVE9OQ2xpZW50RXJyb3Iuc291cmNlLkNMSUVOVCxcbiAgICAgICAgKTtcbiAgICB9XG5cbiAgICBzdGF0aWMgYWNjb3VudENvZGVNaXNzaW5nKGFkZHJlc3M6IHN0cmluZywgYmFsYW5jZTogc3RyaW5nKSB7XG4gICAgICAgIHJldHVybiBuZXcgVE9OQ2xpZW50RXJyb3IoXG4gICAgICAgICAgICBgQWNjb3VudCB3aXRoIGFkZHJlc3MgWyR7YWRkcmVzc31dIGV4aXN0cyBidXQgaGF2ZW4ndCBhIGNvbnRyYWN0IGNvZGUgeWV0LiBgICtcbiAgICAgICAgICAgICdZb3UgaGF2ZSB0byBlbnN1cmUgdGhhdCBhbiBhY2NvdW50IGhhcyBhbiBlbm91Z2ggYmFsYW5jZSBmb3IgZGVwbG95aW5nIGEgY29udHJhY3QgY29kZSBhbmQgdGhlbiBkZXBsb3kgYSBjb250cmFjdCBjb2RlIGZvciB0aGlzIGFjY291bnQuICcgK1xuICAgICAgICAgICAgYEN1cnJlbnQgYWNjb3VudCBiYWxhbmNlIGlzIFske2JhbGFuY2V9XS4gYCArXG4gICAgICAgICAgICAnU2VlIFNESyBkb2N1bWVudGF0aW9uIGZvciBkZXRhaWxlZCBpbnN0cnVjdGlvbnMuJyxcbiAgICAgICAgICAgIFRPTkNsaWVudEVycm9yLmNvZGUuQUNDT1VOVF9DT0RFX01JU1NJTkcsXG4gICAgICAgICAgICBUT05DbGllbnRFcnJvci5zb3VyY2UuQ0xJRU5ULFxuICAgICAgICApO1xuICAgIH1cblxuICAgIHN0YXRpYyBhY2NvdW50QmFsYW5jZVRvb0xvdyhhZGRyZXNzOiBzdHJpbmcsIGJhbGFuY2U6IHN0cmluZykge1xuICAgICAgICByZXR1cm4gbmV3IFRPTkNsaWVudEVycm9yKFxuICAgICAgICAgICAgYEFjY291bnQgd2l0aCBhZGRyZXNzIFske2FkZHJlc3N9XSBoYXMgdG9vIGxvdyBiYWxhbmNlIFske2JhbGFuY2V9XS4gYCArXG4gICAgICAgICAgICAnWW91IGhhdmUgdG8gc2VuZCBzb21lIHZhbHVlIHRvIGFjY291bnQgYmFsYW5jZSBmcm9tIG90aGVyIGNvbnRyYWN0IChlLmcuIFdhbGxldCBjb250cmFjdCkuICcgK1xuICAgICAgICAgICAgJ1NlZSBTREsgZG9jdW1lbnRhdGlvbiBmb3IgZGV0YWlsZWQgaW5zdHJ1Y3Rpb25zLicsXG4gICAgICAgICAgICBUT05DbGllbnRFcnJvci5jb2RlLkFDQ09VTlRfQkFMQU5DRV9UT09fTE9XLFxuICAgICAgICAgICAgVE9OQ2xpZW50RXJyb3Iuc291cmNlLkNMSUVOVCxcbiAgICAgICAgKTtcbiAgICB9XG5cbiAgICBzdGF0aWMgbm9CbG9ja3Mod29ya2NoYWluOiBudW1iZXIpIHtcbiAgICAgICAgY29uc3Qgd29ya2NoYWluTmFtZSA9IHdvcmtjaGFpbiA9PT0gLTEgPyAnbWFzdGVyY2hhaW4nIDogYHdvcmtjaGFpbiAke3dvcmtjaGFpbn1gO1xuICAgICAgICByZXR1cm4gbmV3IFRPTkNsaWVudEVycm9yKFxuICAgICAgICAgICAgYFwiTm8gYmxvY2tzIGZvciAke3dvcmtjaGFpbk5hbWV9IGZvdW5kXCIuYCxcbiAgICAgICAgICAgIFRPTkVycm9yQ29kZS5ORVRXT1JLX1NJTEVOVCxcbiAgICAgICAgICAgIFRPTkVycm9yU291cmNlLkNMSUVOVCxcbiAgICAgICAgKTtcbiAgICB9XG5cbiAgICBzdGF0aWMgaW52YWxpZEJsb2NrY2hhaW4obWVzc2FnZTogc3RyaW5nKSB7XG4gICAgICAgIHJldHVybiBuZXcgVE9OQ2xpZW50RXJyb3IobWVzc2FnZSwgVE9ORXJyb3JDb2RlLk5FVFdPUktfU0lMRU5UKTtcbiAgICB9XG5cbiAgICBzdGF0aWMgaXNNZXNzYWdlRXhwaXJlZChlcnJvcjogYW55KTogYm9vbGVhbiB7XG4gICAgICAgIHJldHVybiBUT05DbGllbnRFcnJvci5pc0NsaWVudEVycm9yKGVycm9yLCBUT05DbGllbnRFcnJvci5jb2RlLk1FU1NBR0VfRVhQSVJFRCk7XG4gICAgfVxuXG4gICAgc3RhdGljIGlzV2FpdEZvclRpbWVvdXQoZXJyb3I6IGFueSk6IGJvb2xlYW4ge1xuICAgICAgICByZXR1cm4gVE9OQ2xpZW50RXJyb3IuaXNDbGllbnRFcnJvcihlcnJvciwgVE9OQ2xpZW50RXJyb3IuY29kZS5XQUlUX0ZPUl9USU1FT1VUKTtcbiAgICB9XG5cbn1cbiJdfQ==