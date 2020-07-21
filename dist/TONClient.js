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
                _context2.next = 38;
                return this.config.getVersion();

              case 38:
                TONClientError.coreVersion = _context2.sent;

              case 39:
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
    key: "startRootSpan",
    value: function startRootSpan(traceId, spanId, operationName) {
      var tracer = this.config.tracer;
      var span = null;

      if (tracer._startInternalSpan) {
        try {
          var ctx = tracer.extract(_opentracing.FORMAT_TEXT_MAP, {
            'uber-trace-id': "".concat(traceId, ":").concat(spanId, ":0:1")
          });

          if (ctx) {
            span = this.config.tracer._startInternalSpan(ctx, operationName, Date.now(), // startTime
            undefined, // userTags
            {}, // internalTags
            [], // references
            false, // hasValidParent
            false // isRpcServer
            );
          }
        } catch (_unused) {// tracer can't create message span using private method,
          // so we are fallback to create span using regular method
        }
      }

      return span || tracer.startSpan(operationName);
    }
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

    _defineProperty(this, "coreVersion", void 0);

    this.message = message;
    this.code = code;
    this.source = source || TONErrorSource.CLIENT;
    this.coreVersion = TONClientError.coreVersion;
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
    key: "isOriginalContractError",
    value: function isOriginalContractError(error, exitCode) {
      var _error$data;

      return TONClientError.isContractError(error, exitCode) && !((_error$data = error.data) === null || _error$data === void 0 ? void 0 : _error$data.original_error);
    }
  }, {
    key: "isResolvedContractErrorAfterExpire",
    value: function isResolvedContractErrorAfterExpire(error, exitCode) {
      return TONClientError.isContractError(error, exitCode) && error.data && error.data.original_error && TONClientError.isMessageExpired(error.data.original_error);
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
      }

      return null;
    }
  }, {
    key: "messageExpired",
    value: function messageExpired(data) {
      return new TONClientError('Message expired', TONClientError.code.MESSAGE_EXPIRED, TONClientError.source.CLIENT, {
        sendingTime: TONClientError.formatTime(data.sendingTime),
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
      return new TONClientError('Address required for run local. You haven\'t specified contract code or data ' + 'so address is required to load missing parts from network.', TONClientError.code.ADDRESS_REQUIRED_FOR_RUN_LOCAL, TONClientError.source.CLIENT);
    }
  }, {
    key: "networkSilent",
    value: function networkSilent(data) {
      return new TONClientError('Network silent: no blocks produced during timeout.', TONClientError.code.NETWORK_SILENT, TONClientError.source.CLIENT, data && _objectSpread(_objectSpread({}, data), {}, {
        sendingTime: TONClientError.formatTime(data.sendingTime),
        expirationTime: TONClientError.formatTime(data.expire)
      }));
    }
  }, {
    key: "transactionWaitTimeout",
    value: function transactionWaitTimeout(data) {
      return new TONClientError('Transaction did not produced during specified timeout', TONClientError.code.TRANSACTION_WAIT_TIMEOUT, TONClientError.source.CLIENT, data && _objectSpread(_objectSpread({}, data), {}, {
        sendingTime: TONClientError.formatTime(data.sendingTime)
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
      return new TONClientError("Account with address [".concat(address, "] doesn't exists. ") + 'You have to prepaid this account to have a positive balance on them and then deploy ' + 'a contract code for this account.' + 'See SDK documentation for detailed instructions.', TONClientError.code.ACCOUNT_MISSING, TONClientError.source.CLIENT);
    }
  }, {
    key: "accountCodeMissing",
    value: function accountCodeMissing(address, balance) {
      return new TONClientError("Account with address [".concat(address, "] exists but haven't a contract code yet. ") + 'You have to ensure that an account has an enough balance for deploying ' + 'a contract code and then deploy a contract code for this account. ' + "Current account balance is [".concat(balance, "]. ") + 'See SDK documentation for detailed instructions.', TONClientError.code.ACCOUNT_CODE_MISSING, TONClientError.source.CLIENT);
    }
  }, {
    key: "accountBalanceTooLow",
    value: function accountBalanceTooLow(address, balance) {
      return new TONClientError("Account with address [".concat(address, "] has too low balance [").concat(balance, "]. ") + 'You have to send some value to account balance from other contract ' + '(e.g. Wallet contract). ' + 'See SDK documentation for detailed instructions.', TONClientError.code.ACCOUNT_BALANCE_TOO_LOW, TONClientError.source.CLIENT);
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

_defineProperty(TONClientError, "coreVersion", '');
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uL3NyYy9UT05DbGllbnQuanMiXSwibmFtZXMiOlsiVE9OQ2xpZW50IiwiY2xpZW50UGxhdGZvcm0iLCJtb2R1bGVzIiwiTWFwIiwiY29uZmlnIiwiZ2V0TW9kdWxlIiwiVE9OQ29uZmlnTW9kdWxlIiwiY3J5cHRvIiwiVE9OQ3J5cHRvTW9kdWxlIiwiY29udHJhY3RzIiwiVE9OQ29udHJhY3RzTW9kdWxlIiwiX3F1ZXJpZXMiLCJUT05RdWVyaWVzTW9kdWxlIiwicXVlcmllcyIsIl9jb250ZXh0IiwiX2NvcmVCcmlkZ2UiLCJ0cnlDcmVhdGVMaWJyYXJ5IiwicGxhdGZvcm0iLCJ1bmRlZmluZWQiLCJjcmVhdGVMaWJyYXJ5IiwiY29yZUxpYnJhcnkiLCJsaWJyYXJ5IiwiY29yZUNyZWF0ZUNvbnRleHQiLCJQcm9taXNlIiwicmVzb2x2ZSIsInJlcXVlc3QiLCJtZXRob2QiLCJwYXJhbXNKc29uIiwib25SZXN1bHQiLCJjb3JlUmVxdWVzdCIsInZhbHVlcyIsIm1vZHVsZSIsInNldHVwIiwiZ2V0VmVyc2lvbiIsIlRPTkNsaWVudEVycm9yIiwiY29yZVZlcnNpb24iLCJjbG9zZSIsImNvbnRleHQiLCJjb3JlRGVzdHJveUNvbnRleHQiLCJNb2R1bGVDbGFzcyIsIm5hbWUiLCJtb2R1bGVOYW1lIiwiZXhpc3RpbmdNb2R1bGUiLCJnZXQiLCJzZXQiLCJzZXJ2ZXJUaW1lRGVsdGEiLCJzZXJ2ZXJOb3ciLCJxdWVyeSIsInJlc3VsdCIsImRhdGEiLCJnZXRNYW5hZ2VtZW50QWNjZXNzS2V5IiwicGFyYW1zIiwic2lnbmVkTWFuYWdlbWVudEFjY2Vzc0tleSIsInNpZ25LZXlzIiwiYWNjb3VudEtleXMiLCJtYW5hZ2VtZW50QWNjZXNzS2V5IiwibmFjbFNpZ24iLCJ0ZXh0Iiwic2VjcmV0IiwiX3Jlc29sdmVTaWduZWRNYW5hZ2VtZW50QWNjZXNzS2V5IiwibXV0YXRpb24iLCJhY2NvdW50Iiwia2V5cyIsInJlZ2lzdGVyQWNjZXNzS2V5cyIsInJldm9rZUFjY2Vzc0tleXMiLCJ0cmFjZUlkIiwic3BhbklkIiwib3BlcmF0aW9uTmFtZSIsInRyYWNlciIsInNwYW4iLCJfc3RhcnRJbnRlcm5hbFNwYW4iLCJjdHgiLCJleHRyYWN0IiwiRk9STUFUX1RFWFRfTUFQIiwiRGF0ZSIsIm5vdyIsInN0YXJ0U3BhbiIsImYiLCJwYXJlbnRTcGFuIiwiY2hpbGRPZiIsInNldFRhZyIsIlRhZ3MiLCJTUEFOX0tJTkQiLCJmaW5pc2giLCJsb2ciLCJldmVudCIsInBheWxvYWQiLCJjbGllbnQiLCJzZXREYXRhIiwiVE9ORXJyb3JTb3VyY2UiLCJDTElFTlQiLCJOT0RFIiwiVE9ORXJyb3JDb2RlIiwiQ0xJRU5UX0RPRVNfTk9UX0NPTkZJR1VSRUQiLCJTRU5EX05PREVfUkVRVUVTVF9GQUlMRUQiLCJNRVNTQUdFX0FMUkVBRFlfRVhQSVJFRCIsIlJVTl9MT0NBTF9BQ0NPVU5UX0RPRVNfTk9UX0VYSVNUUyIsIldBSVRfRk9SX1RJTUVPVVQiLCJJTlRFUk5BTF9FUlJPUiIsIlFVRVJZX0ZBSUxFRCIsIk1FU1NBR0VfRVhQSVJFRCIsIlNFUlZFUl9ET0VTTlRfU1VQUE9SVF9BR0dSRUdBVElPTlMiLCJJTlZBTElEX0NPTlMiLCJBRERSRVNTX1JFUVVJUkVEX0ZPUl9SVU5fTE9DQUwiLCJORVRXT1JLX1NJTEVOVCIsIlRSQU5TQUNUSU9OX0xBRyIsIlRSQU5TQUNUSU9OX1dBSVRfVElNRU9VVCIsIkNMT0NLX09VVF9PRl9TWU5DIiwiQUNDT1VOVF9NSVNTSU5HIiwiQUNDT1VOVF9DT0RFX01JU1NJTkciLCJBQ0NPVU5UX0JBTEFOQ0VfVE9PX0xPVyIsIkFDQ09VTlRfRlJPWkVOX09SX0RFTEVURUQiLCJDT05UUkFDVF9FWEVDVVRJT05fRkFJTEVEIiwiVE9OQ29udHJhY3RFeGl0Q29kZSIsIlJFUExBWV9QUk9URUNUSU9OIiwiTk9fR0FTIiwibWVzc2FnZSIsImNvZGUiLCJzb3VyY2UiLCJlcnJvciIsImV4aXRDb2RlIiwiZXhpdF9jb2RlIiwiaXNDb250cmFjdEVycm9yIiwib3JpZ2luYWxfZXJyb3IiLCJpc01lc3NhZ2VFeHBpcmVkIiwicmVzcG9uc2VUZXh0IiwiZnVuY3Rpb25OYW1lIiwiYWRkcmVzcyIsImVycm9ycyIsIm1hcCIsIngiLCJ0b1N0cmluZyIsImpvaW4iLCJ0aW1lIiwidG9JU09TdHJpbmciLCJzZW5kaW5nVGltZSIsImZvcm1hdFRpbWUiLCJleHBpcmF0aW9uVGltZSIsImV4cGlyZSIsImJsb2NrVGltZSIsImJhbGFuY2UiLCJ3b3JrY2hhaW4iLCJ3b3JrY2hhaW5OYW1lIiwiaXNDbGllbnRFcnJvciJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7O0FBS0E7O0FBY0E7O0FBQ0E7O0FBQ0E7O0FBRUE7O0FBT0E7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFxQkE7Ozs7O0lBS2FBLFM7OzsrQkFDU0MsYyxFQUFtQztBQUNqREQsTUFBQUEsU0FBUyxDQUFDQyxjQUFWLEdBQTJCQSxjQUEzQjtBQUNILEssQ0FHRDs7OztBQVNBLHVCQUFjO0FBQUE7O0FBQUE7O0FBQUE7O0FBQUE7O0FBQUE7O0FBQUE7O0FBQUE7O0FBQUE7O0FBQUE7O0FBQ1YsU0FBS0MsT0FBTCxHQUFlLElBQUlDLEdBQUosRUFBZjtBQUNBLFNBQUtDLE1BQUwsR0FBYyxLQUFLQyxTQUFMLENBQWVDLDJCQUFmLENBQWQ7QUFDQSxTQUFLQyxNQUFMLEdBQWMsS0FBS0YsU0FBTCxDQUFlRywyQkFBZixDQUFkO0FBQ0EsU0FBS0MsU0FBTCxHQUFpQixLQUFLSixTQUFMLENBQWVLLDhCQUFmLENBQWpCO0FBQ0EsU0FBS0MsUUFBTCxHQUFnQixLQUFLTixTQUFMLENBQWVPLDRCQUFmLENBQWhCO0FBQ0EsU0FBS0MsT0FBTCxHQUFlLEtBQUtGLFFBQXBCO0FBQ0EsU0FBS0csUUFBTCxHQUFnQixDQUFoQjtBQUNBLFNBQUtDLFdBQUwsR0FBbUIsSUFBbkI7QUFDSDtBQUVEOzs7Ozs7Ozs7O0FBWUE7Ozs7Ozs7Ozs7Ozs7O0FBS1VDLGdCQUFBQSxnQjswRkFBbUI7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQ2ZDLDRCQUFBQSxRQURlLEdBQ0pqQixTQUFTLENBQUNDLGNBRE47O0FBQUEsa0NBRWpCZ0IsUUFBUSxLQUFLLElBQWIsSUFBcUJBLFFBQVEsS0FBS0MsU0FGakI7QUFBQTtBQUFBO0FBQUE7O0FBQUEsNkRBR1YsSUFIVTs7QUFBQTtBQUFBO0FBQUEsbUNBS1NELFFBQVEsQ0FBQ0UsYUFBVCxFQUxUOztBQUFBO0FBS3JCbkIsNEJBQUFBLFNBQVMsQ0FBQ29CLFdBTFc7QUFBQSw2REFNZHBCLFNBQVMsQ0FBQ29CLFdBTkk7O0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsbUI7O2tDQUFuQkosZ0I7Ozs7OytCQVFVaEIsU0FBUyxDQUFDb0IsVzs7Ozs7Ozs7dUJBQXFCSixnQkFBZ0IsRTs7Ozs7O0FBQXpESyxnQkFBQUEsTzs7b0JBQ0RBLE87Ozs7Ozs7O3NCQUdELEtBQUtOLFdBQUwsS0FBcUIsSUFBckIsSUFBNkIsS0FBS0EsV0FBTCxLQUFxQkcsUzs7Ozs7cUJBQzlDRyxPQUFPLENBQUNDLGlCOzs7Ozs7dUJBQ2MsSUFBSUMsT0FBSixDQUFZLFVBQUNDLE9BQUQ7QUFBQSx5QkFBYUgsT0FBTyxDQUFDQyxpQkFBUixDQUEwQkUsT0FBMUIsQ0FBYjtBQUFBLGlCQUFaLEM7OztBQUF0QixxQkFBS1YsUTtBQUNMLHFCQUFLQyxXQUFMLEdBQW1CO0FBQ2ZVLGtCQUFBQSxPQUFPLEVBQUUsaUJBQ0xDLE1BREssRUFFTEMsVUFGSyxFQUdMQyxRQUhLLEVBSUU7QUFDUCx3QkFBSTVCLFNBQVMsQ0FBQ29CLFdBQWQsRUFBMkI7QUFDdkJwQixzQkFBQUEsU0FBUyxDQUFDb0IsV0FBVixDQUFzQlMsV0FBdEIsQ0FDSSxLQUFJLENBQUNmLFFBRFQsRUFFSVksTUFGSixFQUdJQyxVQUhKLEVBSUlDLFFBSko7QUFNSDtBQUNKO0FBZGMsaUJBQW5COzs7OztBQWlCQSxxQkFBS2IsV0FBTCxHQUFtQk0sT0FBbkI7OztBQUdGbkIsZ0JBQUFBLE8sc0JBQTJCLEtBQUtBLE9BQUwsQ0FBYTRCLE1BQWIsRTt1REFDWjVCLE87Ozs7Ozs7Ozs7O0FBQVY2QixnQkFBQUEsTTs7dUJBQ0RBLE1BQU0sQ0FBQ0MsS0FBUCxFOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O3VCQUV5QixLQUFLNUIsTUFBTCxDQUFZNkIsVUFBWixFOzs7QUFBbkNDLGdCQUFBQSxjQUFjLENBQUNDLFc7Ozs7Ozs7Ozs7Ozs7Ozs7QUFHbkI7Ozs7Ozs7Ozs7Ozs7Ozs7dUJBTVUsS0FBS3RCLE9BQUwsQ0FBYXVCLEtBQWIsRTs7O0FBQ0FmLGdCQUFBQSxPLEdBQVVyQixTQUFTLENBQUNvQixXOztzQkFDdEIsS0FBS04sUUFBTCxHQUFnQixDQUFoQixJQUFxQk8sT0FBTyxLQUFLLElBQWpDLElBQXlDQSxPQUFPLEtBQUtILFM7Ozs7O0FBQy9DbUIsZ0JBQUFBLE8sR0FBVSxLQUFLdkIsUTtBQUNyQixxQkFBS0MsV0FBTCxHQUFtQixJQUFuQjtBQUNBLHFCQUFLRCxRQUFMLEdBQWdCLENBQWhCOzt1QkFDTSxJQUFJUyxPQUFKLENBQVksVUFBQUMsT0FBTztBQUFBLHlCQUFJSCxPQUFPLENBQUNpQixrQkFBUixDQUEyQkQsT0FBM0IsRUFBb0NiLE9BQXBDLENBQUo7QUFBQSxpQkFBbkIsQzs7Ozs7Ozs7Ozs7Ozs7O1FBSWQ7Ozs7b0NBRXNDO0FBQ2xDLGFBQU8sS0FBS1QsV0FBWjtBQUNIOzs7OEJBRVl3QixXLEVBQWtDO0FBQzNDLFVBQU1DLElBQUksR0FBR0QsV0FBVyxDQUFDRSxVQUF6QjtBQUNBLFVBQU1DLGNBQWMsR0FBRyxLQUFLeEMsT0FBTCxDQUFheUMsR0FBYixDQUFpQkgsSUFBakIsQ0FBdkI7O0FBQ0EsVUFBSUUsY0FBSixFQUFvQjtBQUNoQixlQUFRQSxjQUFSO0FBQ0g7O0FBQ0QsVUFBTVgsTUFBTSxHQUFHLElBQUlRLFdBQUosQ0FBZ0IsSUFBaEIsQ0FBZjtBQUNBLFdBQUtyQyxPQUFMLENBQWEwQyxHQUFiLENBQWlCSixJQUFqQixFQUF1QlQsTUFBdkI7QUFDQSxhQUFRQSxNQUFSO0FBQ0g7OztzQ0FFa0M7QUFDL0IsYUFBTyxLQUFLcEIsUUFBTCxDQUFja0MsZUFBZCxFQUFQO0FBQ0g7OztnQ0FFNEI7QUFDekIsYUFBTyxLQUFLbEMsUUFBTCxDQUFjbUMsU0FBZCxFQUFQO0FBQ0g7Ozs7Ozs7Ozs7O3VCQUd3QixLQUFLbkMsUUFBTCxDQUFjb0MsS0FBZCxDQUFvQiwrQkFBcEIsQzs7O0FBQWZDLGdCQUFBQSxNO2tEQUNDQSxNQUFNLENBQUNDLElBQVAsQ0FBWUMsc0I7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OEhBS25CQyxNOzs7Ozs7cUJBRUlBLE1BQU0sQ0FBQ0MseUI7Ozs7O2tEQUNBRCxNQUFNLENBQUNDLHlCOzs7QUFFWkMsZ0JBQUFBLFEsR0FBV0YsTUFBTSxDQUFDRyxXOztxQkFDcEJELFE7Ozs7Ozt1QkFDa0MsS0FBS0gsc0JBQUwsRTs7O0FBQTVCSyxnQkFBQUEsbUI7a0RBQ0MsS0FBS2hELE1BQUwsQ0FBWWlELFFBQVosQ0FDSDtBQUFFQyxrQkFBQUEsSUFBSSxFQUFFRjtBQUFSLGlCQURHLFlBRUFGLFFBQVEsQ0FBQ0ssTUFGVCxTQUVrQkwsUUFBUSxVQUYxQixHQUdILEtBSEcsQzs7O2tEQU1KLEU7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7K0dBSVBGLE07Ozs7Ozs7dUJBRXdDLEtBQUtRLGlDQUFMLENBQXVDUixNQUF2QyxDOzs7QUFBbENDLGdCQUFBQSx5Qjs7dUJBQ2UsS0FBS3pDLFFBQUwsQ0FBY2lELFFBQWQsOFBBR1Q7QUFDSkMsa0JBQUFBLE9BQU8sRUFBRVYsTUFBTSxDQUFDVSxPQURaO0FBRUpDLGtCQUFBQSxJQUFJLEVBQUVYLE1BQU0sQ0FBQ1csSUFGVDtBQUdKVixrQkFBQUEseUJBQXlCLEVBQXpCQTtBQUhJLGlCQUhTLEM7OztBQUFmSixnQkFBQUEsTTtrREFTQ0EsTUFBTSxDQUFDQyxJQUFQLENBQVljLGtCOzs7Ozs7Ozs7Ozs7Ozs7Ozs7OzZHQUluQlosTTs7Ozs7Ozt1QkFFd0MsS0FBS1EsaUNBQUwsQ0FBdUNSLE1BQXZDLEM7OztBQUFsQ0MsZ0JBQUFBLHlCOzt1QkFDZSxLQUFLekMsUUFBTCxDQUFjaUQsUUFBZCx1UEFHVDtBQUNKQyxrQkFBQUEsT0FBTyxFQUFFVixNQUFNLENBQUNVLE9BRFo7QUFFSkMsa0JBQUFBLElBQUksRUFBRVgsTUFBTSxDQUFDVyxJQUZUO0FBR0pWLGtCQUFBQSx5QkFBeUIsRUFBekJBO0FBSEksaUJBSFMsQzs7O0FBQWZKLGdCQUFBQSxNO2tEQVNDQSxNQUFNLENBQUNDLElBQVAsQ0FBWWUsZ0I7Ozs7Ozs7Ozs7Ozs7Ozs7OztrQ0FHVEMsTyxFQUFpQkMsTSxFQUFnQkMsYSxFQUE2QjtBQUN4RSxVQUFNQyxNQUFNLEdBQUcsS0FBS2hFLE1BQUwsQ0FBWWdFLE1BQTNCO0FBQ0EsVUFBSUMsSUFBVyxHQUFHLElBQWxCOztBQUNBLFVBQUlELE1BQU0sQ0FBQ0Usa0JBQVgsRUFBK0I7QUFDM0IsWUFBSTtBQUNBLGNBQU1DLEdBQUcsR0FBR0gsTUFBTSxDQUFDSSxPQUFQLENBQWVDLDRCQUFmLEVBQWdDO0FBQ3hDLHVDQUFvQlIsT0FBcEIsY0FBK0JDLE1BQS9CO0FBRHdDLFdBQWhDLENBQVo7O0FBR0EsY0FBSUssR0FBSixFQUFTO0FBQ0xGLFlBQUFBLElBQUksR0FBRyxLQUFLakUsTUFBTCxDQUFZZ0UsTUFBWixDQUFtQkUsa0JBQW5CLENBQ0hDLEdBREcsRUFFSEosYUFGRyxFQUdITyxJQUFJLENBQUNDLEdBQUwsRUFIRyxFQUdTO0FBQ1p6RCxZQUFBQSxTQUpHLEVBSVE7QUFDWCxjQUxHLEVBS0M7QUFDSixjQU5HLEVBTUM7QUFDSixpQkFQRyxFQU9JO0FBQ1AsaUJBUkcsQ0FRSTtBQVJKLGFBQVA7QUFVSDtBQUNKLFNBaEJELENBZ0JFLGdCQUFNLENBQ0o7QUFDQTtBQUNIO0FBQ0o7O0FBQ0QsYUFBT21ELElBQUksSUFBSUQsTUFBTSxDQUFDUSxTQUFQLENBQWlCVCxhQUFqQixDQUFmO0FBQ0g7Ozs7a0dBR0czQixJLEVBQ0FxQyxDLEVBQ0FDLFU7Ozs7OztBQUVNVCxnQkFBQUEsSSxHQUFPLEtBQUtqRSxNQUFMLENBQVlnRSxNQUFaLENBQW1CUSxTQUFuQixDQUE2QnBDLElBQTdCLEVBQW1DO0FBQUV1QyxrQkFBQUEsT0FBTyxFQUFFRDtBQUFYLGlCQUFuQyxDOztBQUVUVCxnQkFBQUEsSUFBSSxDQUFDVyxNQUFMLENBQVlDLGtCQUFLQyxTQUFqQixFQUE0QixRQUE1Qjs7dUJBQ3FCTCxDQUFDLENBQUNSLElBQUQsQzs7O0FBQWhCckIsZ0JBQUFBLE07O0FBQ04sb0JBQUlBLE1BQU0sS0FBSzlCLFNBQWYsRUFBMEI7QUFDdEJtRCxrQkFBQUEsSUFBSSxDQUFDVyxNQUFMLENBQVksUUFBWixFQUFzQmhDLE1BQXRCO0FBQ0g7O0FBQ0RxQixnQkFBQUEsSUFBSSxDQUFDYyxNQUFMO2tEQUNPbkMsTTs7Ozs7QUFFUHFCLGdCQUFBQSxJQUFJLENBQUNlLEdBQUwsQ0FBUztBQUNMQyxrQkFBQUEsS0FBSyxFQUFFLFFBREY7QUFFTEMsa0JBQUFBLE9BQU87QUFGRixpQkFBVDtBQUlBakIsZ0JBQUFBLElBQUksQ0FBQ2MsTUFBTDs7Ozs7Ozs7Ozs7Ozs7OztRQUtSOzs7OzttR0EzTW9CL0UsTTs7Ozs7O0FBQ1ZtRixnQkFBQUEsTSxHQUFTLElBQUl2RixTQUFKLEU7QUFDZnVGLGdCQUFBQSxNQUFNLENBQUNuRixNQUFQLENBQWNvRixPQUFkLENBQXNCcEYsTUFBdEI7O3VCQUNNbUYsTUFBTSxDQUFDdkQsS0FBUCxFOzs7a0RBQ0N1RCxNOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztnQkFuQ0Z2RixTLG9CQTRPbUMsSTs7Z0JBNU9uQ0EsUyxpQkE2T21DLEk7O0FBTXpDLElBQU15RixjQUFjLEdBQUc7QUFDMUJDLEVBQUFBLE1BQU0sRUFBRSxRQURrQjtBQUUxQkMsRUFBQUEsSUFBSSxFQUFFO0FBRm9CLENBQXZCOztBQUtBLElBQU1DLFlBQVksR0FBRztBQUN4QkMsRUFBQUEsMEJBQTBCLEVBQUUsSUFESjtBQUV4QkMsRUFBQUEsd0JBQXdCLEVBQUUsSUFGRjtBQUd4QkMsRUFBQUEsdUJBQXVCLEVBQUUsSUFIRDtBQUl4QkMsRUFBQUEsaUNBQWlDLEVBQUUsSUFKWDtBQUt4QkMsRUFBQUEsZ0JBQWdCLEVBQUUsSUFMTTtBQU14QkMsRUFBQUEsY0FBYyxFQUFFLElBTlE7QUFPeEJDLEVBQUFBLFlBQVksRUFBRSxJQVBVO0FBUXhCQyxFQUFBQSxlQUFlLEVBQUUsSUFSTztBQVN4QkMsRUFBQUEsa0NBQWtDLEVBQUUsSUFUWjtBQVV4QkMsRUFBQUEsWUFBWSxFQUFFLElBVlU7QUFXeEJDLEVBQUFBLDhCQUE4QixFQUFFLElBWFI7QUFZeEJDLEVBQUFBLGNBQWMsRUFBRSxJQVpRO0FBYXhCQyxFQUFBQSxlQUFlLEVBQUUsSUFiTztBQWN4QkMsRUFBQUEsd0JBQXdCLEVBQUUsSUFkRjtBQWV4QkMsRUFBQUEsaUJBQWlCLEVBQUUsSUFmSztBQWdCeEJDLEVBQUFBLGVBQWUsRUFBRSxJQWhCTztBQWlCeEJDLEVBQUFBLG9CQUFvQixFQUFFLElBakJFO0FBa0J4QkMsRUFBQUEsdUJBQXVCLEVBQUUsSUFsQkQ7QUFtQnhCQyxFQUFBQSx5QkFBeUIsRUFBRSxJQW5CSDtBQXFCeEI7QUFFQUMsRUFBQUEseUJBQXlCLEVBQUU7QUF2QkgsQ0FBckI7O0FBMEJBLElBQU1DLG1CQUFtQixHQUFHO0FBQy9CQyxFQUFBQSxpQkFBaUIsRUFBRSxFQURZO0FBRS9CZCxFQUFBQSxlQUFlLEVBQUUsRUFGYztBQUcvQmUsRUFBQUEsTUFBTSxFQUFFO0FBSHVCLENBQTVCOzs7SUFNTWpGLGM7QUFZVCwwQkFBWWtGLE9BQVosRUFBNkJDLElBQTdCLEVBQTJDQyxNQUEzQyxFQUE0RHJFLElBQTVELEVBQXdFO0FBQUE7O0FBQUE7O0FBQUE7O0FBQUE7O0FBQUE7O0FBQUE7O0FBQ3BFLFNBQUttRSxPQUFMLEdBQWVBLE9BQWY7QUFDQSxTQUFLQyxJQUFMLEdBQVlBLElBQVo7QUFDQSxTQUFLQyxNQUFMLEdBQWNBLE1BQU0sSUFBSTdCLGNBQWMsQ0FBQ0MsTUFBdkM7QUFDQSxTQUFLdkQsV0FBTCxHQUFtQkQsY0FBYyxDQUFDQyxXQUFsQztBQUNBLFNBQUtjLElBQUwsR0FBWUEsSUFBWjtBQUNIOzs7O2tDQUVvQnNFLEssRUFBWUYsSSxFQUF1QjtBQUNwRCxhQUFRRSxLQUFLLENBQUNELE1BQU4sS0FBaUJwRixjQUFjLENBQUNvRixNQUFmLENBQXNCNUIsTUFBeEMsSUFDQzZCLEtBQUssQ0FBQ0YsSUFBTixLQUFlQSxJQUR2QjtBQUVIOzs7Z0NBRWtCRSxLLEVBQVlGLEksRUFBdUI7QUFDbEQsYUFBUUUsS0FBSyxDQUFDRCxNQUFOLEtBQWlCcEYsY0FBYyxDQUFDb0YsTUFBZixDQUFzQjNCLElBQXhDLElBQ0M0QixLQUFLLENBQUNGLElBQU4sS0FBZUEsSUFEdkI7QUFFSDs7O29DQUVzQkUsSyxFQUFZQyxRLEVBQTJCO0FBQzFELGFBQVFELEtBQUssQ0FBQ0QsTUFBTixLQUFpQnBGLGNBQWMsQ0FBQ29GLE1BQWYsQ0FBc0IzQixJQUF4QyxJQUNDNEIsS0FBSyxDQUFDRixJQUFOLEtBQWVuRixjQUFjLENBQUNtRixJQUFmLENBQW9CTCx5QkFEcEMsSUFFQ08sS0FBSyxDQUFDdEUsSUFBTixJQUFjc0UsS0FBSyxDQUFDdEUsSUFBTixDQUFXd0UsU0FBWCxLQUF5QkQsUUFGL0M7QUFHSDs7OzRDQUU4QkQsSyxFQUFZQyxRLEVBQTJCO0FBQUE7O0FBQ2xFLGFBQU90RixjQUFjLENBQUN3RixlQUFmLENBQStCSCxLQUEvQixFQUFzQ0MsUUFBdEMsS0FDQyxpQkFBQ0QsS0FBSyxDQUFDdEUsSUFBUCxnREFBQyxZQUFZMEUsY0FBYixDQURSO0FBRUg7Ozt1REFFeUNKLEssRUFBWUMsUSxFQUEyQjtBQUM3RSxhQUFPdEYsY0FBYyxDQUFDd0YsZUFBZixDQUErQkgsS0FBL0IsRUFBc0NDLFFBQXRDLEtBQ0NELEtBQUssQ0FBQ3RFLElBQU4sSUFBY3NFLEtBQUssQ0FBQ3RFLElBQU4sQ0FBVzBFLGNBQXpCLElBQ0d6RixjQUFjLENBQUMwRixnQkFBZixDQUFnQ0wsS0FBSyxDQUFDdEUsSUFBTixDQUFXMEUsY0FBM0MsQ0FGWDtBQUdIOzs7a0NBRW9CUCxPLEVBQWlDO0FBQ2xELGFBQU8sSUFBSWxGLGNBQUosMkJBQ2dCa0YsT0FEaEIsR0FFSGxGLGNBQWMsQ0FBQ21GLElBQWYsQ0FBb0JuQixjQUZqQixFQUdIaEUsY0FBYyxDQUFDb0YsTUFBZixDQUFzQjVCLE1BSG5CLENBQVA7QUFLSDs7O2tDQUVvQztBQUNqQyxhQUFPLElBQUl4RCxjQUFKLENBQ0gsdUVBREcsRUFFSEEsY0FBYyxDQUFDbUYsSUFBZixDQUFvQmYsWUFGakIsRUFHSHBFLGNBQWMsQ0FBQ29GLE1BQWYsQ0FBc0I1QixNQUhuQixDQUFQO0FBS0g7Ozs4Q0FFZ0Q7QUFDN0MsYUFBTyxJQUFJeEQsY0FBSixDQUNILDhCQURHLEVBRUhBLGNBQWMsQ0FBQ21GLElBQWYsQ0FBb0J4QiwwQkFGakIsRUFHSDNELGNBQWMsQ0FBQ29GLE1BQWYsQ0FBc0I1QixNQUhuQixDQUFQO0FBS0g7OzswQ0FFNEJtQyxZLEVBQXNDO0FBQy9ELGFBQU8sSUFBSTNGLGNBQUoscUNBQzBCMkYsWUFEMUIsR0FFSDNGLGNBQWMsQ0FBQ21GLElBQWYsQ0FBb0J2Qix3QkFGakIsRUFHSDVELGNBQWMsQ0FBQ29GLE1BQWYsQ0FBc0I1QixNQUhuQixDQUFQO0FBS0g7OztpREFFbUNvQyxZLEVBQXNCQyxPLEVBQWlDO0FBQ3ZGLGFBQU8sSUFBSTdGLGNBQUosWUFDQzRGLFlBREQsMENBQzZDQyxPQUQ3Qyx3QkFFSDdGLGNBQWMsQ0FBQ21GLElBQWYsQ0FBb0JyQixpQ0FGakIsRUFHSDlELGNBQWMsQ0FBQ29GLE1BQWYsQ0FBc0I1QixNQUhuQixDQUFQO0FBS0g7OztxQ0FFdUI7QUFDcEIsYUFBTyxJQUFJeEQsY0FBSixDQUNILHdDQURHLEVBRUhBLGNBQWMsQ0FBQ21GLElBQWYsQ0FBb0JwQixnQkFGakIsRUFHSC9ELGNBQWMsQ0FBQ29GLE1BQWYsQ0FBc0I1QixNQUhuQixDQUFQO0FBS0g7OztnQ0FFa0JzQyxNLEVBQWlCO0FBQ2hDLGFBQU8sSUFBSTlGLGNBQUoseUJBQ2M4RixNQUFNLENBQUNDLEdBQVAsQ0FBVyxVQUFBQyxDQUFDO0FBQUEsZUFBSUEsQ0FBQyxDQUFDZCxPQUFGLElBQWFjLENBQUMsQ0FBQ0MsUUFBRixFQUFqQjtBQUFBLE9BQVosRUFBMkNDLElBQTNDLENBQWdELElBQWhELENBRGQsR0FFSGxHLGNBQWMsQ0FBQ21GLElBQWYsQ0FBb0JsQixZQUZqQixFQUdIakUsY0FBYyxDQUFDb0YsTUFBZixDQUFzQjVCLE1BSG5CLENBQVA7QUFLSDs7OytCQUVpQjJDLEksRUFBd0I7QUFDdEMsVUFBSUEsSUFBSixFQUFVO0FBQ04seUJBQVUsSUFBSTNELElBQUosQ0FBUzJELElBQUksR0FBRyxJQUFoQixFQUFzQkMsV0FBdEIsRUFBVixlQUFrREQsSUFBbEQ7QUFDSDs7QUFDRCxhQUFPLElBQVA7QUFDSDs7O21DQUVxQnBGLEksRUFLbkI7QUFDQyxhQUFPLElBQUlmLGNBQUosQ0FDSCxpQkFERyxFQUVIQSxjQUFjLENBQUNtRixJQUFmLENBQW9CakIsZUFGakIsRUFHSGxFLGNBQWMsQ0FBQ29GLE1BQWYsQ0FBc0I1QixNQUhuQixFQUlIO0FBQ0k2QyxRQUFBQSxXQUFXLEVBQUVyRyxjQUFjLENBQUNzRyxVQUFmLENBQTBCdkYsSUFBSSxDQUFDc0YsV0FBL0IsQ0FEakI7QUFFSUUsUUFBQUEsY0FBYyxFQUFFdkcsY0FBYyxDQUFDc0csVUFBZixDQUEwQnZGLElBQUksQ0FBQ3lGLE1BQS9CLENBRnBCO0FBR0lDLFFBQUFBLFNBQVMsRUFBRXpHLGNBQWMsQ0FBQ3NHLFVBQWYsQ0FBMEJ2RixJQUFJLENBQUMwRixTQUEvQjtBQUhmLE9BSkcsQ0FBUDtBQVVIOzs7c0RBRXdDO0FBQ3JDLGFBQU8sSUFBSXpHLGNBQUosQ0FDSCxzQ0FERyxFQUVIQSxjQUFjLENBQUNtRixJQUFmLENBQW9CaEIsa0NBRmpCLEVBR0huRSxjQUFjLENBQUNvRixNQUFmLENBQXNCNUIsTUFIbkIsQ0FBUDtBQUtIOzs7aURBRW1DO0FBQ2hDLGFBQU8sSUFBSXhELGNBQUosQ0FDSCxrRkFDRSw0REFGQyxFQUdIQSxjQUFjLENBQUNtRixJQUFmLENBQW9CZCw4QkFIakIsRUFJSHJFLGNBQWMsQ0FBQ29GLE1BQWYsQ0FBc0I1QixNQUpuQixDQUFQO0FBTUg7OztrQ0FFb0J6QyxJLEVBT2xCO0FBQ0MsYUFBTyxJQUFJZixjQUFKLENBQ0gsb0RBREcsRUFFSEEsY0FBYyxDQUFDbUYsSUFBZixDQUFvQmIsY0FGakIsRUFHSHRFLGNBQWMsQ0FBQ29GLE1BQWYsQ0FBc0I1QixNQUhuQixFQUlIekMsSUFBSSxvQ0FDR0EsSUFESDtBQUVBc0YsUUFBQUEsV0FBVyxFQUFFckcsY0FBYyxDQUFDc0csVUFBZixDQUEwQnZGLElBQUksQ0FBQ3NGLFdBQS9CLENBRmI7QUFHQUUsUUFBQUEsY0FBYyxFQUFFdkcsY0FBYyxDQUFDc0csVUFBZixDQUEwQnZGLElBQUksQ0FBQ3lGLE1BQS9CO0FBSGhCLFFBSkQsQ0FBUDtBQVVIOzs7MkNBRTZCekYsSSxFQUszQjtBQUNDLGFBQU8sSUFBSWYsY0FBSixDQUNILHVEQURHLEVBRUhBLGNBQWMsQ0FBQ21GLElBQWYsQ0FBb0JYLHdCQUZqQixFQUdIeEUsY0FBYyxDQUFDb0YsTUFBZixDQUFzQjVCLE1BSG5CLEVBSUh6QyxJQUFJLG9DQUNHQSxJQURIO0FBRUFzRixRQUFBQSxXQUFXLEVBQUVyRyxjQUFjLENBQUNzRyxVQUFmLENBQTBCdkYsSUFBSSxDQUFDc0YsV0FBL0I7QUFGYixRQUpELENBQVA7QUFTSDs7O3FDQUV1QjtBQUNwQixhQUFPLElBQUlyRyxjQUFKLENBQ0gsMERBQ0UscUVBREYsR0FFRSwrQ0FIQyxFQUlIQSxjQUFjLENBQUNtRixJQUFmLENBQW9CVixpQkFKakIsRUFLSHpFLGNBQWMsQ0FBQ29GLE1BQWYsQ0FBc0I1QixNQUxuQixDQUFQO0FBT0g7OzttQ0FFcUJxQyxPLEVBQWlCO0FBQ25DLGFBQU8sSUFBSTdGLGNBQUosQ0FDSCxnQ0FBeUI2RixPQUF6QiwwQkFDRSxzRkFERixHQUVFLG1DQUZGLEdBR0Usa0RBSkMsRUFLSDdGLGNBQWMsQ0FBQ21GLElBQWYsQ0FBb0JULGVBTGpCLEVBTUgxRSxjQUFjLENBQUNvRixNQUFmLENBQXNCNUIsTUFObkIsQ0FBUDtBQVFIOzs7dUNBRXlCcUMsTyxFQUFpQmEsTyxFQUFpQjtBQUN4RCxhQUFPLElBQUkxRyxjQUFKLENBQ0gsZ0NBQXlCNkYsT0FBekIsa0RBQ0UseUVBREYsR0FFRSxvRUFGRix5Q0FHaUNhLE9BSGpDLFdBSUUsa0RBTEMsRUFNSDFHLGNBQWMsQ0FBQ21GLElBQWYsQ0FBb0JSLG9CQU5qQixFQU9IM0UsY0FBYyxDQUFDb0YsTUFBZixDQUFzQjVCLE1BUG5CLENBQVA7QUFTSDs7O3lDQUUyQnFDLE8sRUFBaUJhLE8sRUFBaUI7QUFDMUQsYUFBTyxJQUFJMUcsY0FBSixDQUNILGdDQUF5QjZGLE9BQXpCLG9DQUEwRGEsT0FBMUQsV0FDRSxxRUFERixHQUVFLDBCQUZGLEdBR0Usa0RBSkMsRUFLSDFHLGNBQWMsQ0FBQ21GLElBQWYsQ0FBb0JQLHVCQUxqQixFQU1INUUsY0FBYyxDQUFDb0YsTUFBZixDQUFzQjVCLE1BTm5CLENBQVA7QUFRSDs7OzZCQUVlbUQsUyxFQUFtQjtBQUMvQixVQUFNQyxhQUFhLEdBQUdELFNBQVMsS0FBSyxDQUFDLENBQWYsR0FBbUIsYUFBbkIsdUJBQWdEQSxTQUFoRCxDQUF0QjtBQUNBLGFBQU8sSUFBSTNHLGNBQUosMkJBQ2U0RyxhQURmLGdCQUVIbEQsWUFBWSxDQUFDWSxjQUZWLEVBR0hmLGNBQWMsQ0FBQ0MsTUFIWixDQUFQO0FBS0g7OztzQ0FFd0IwQixPLEVBQWlCO0FBQ3RDLGFBQU8sSUFBSWxGLGNBQUosQ0FBbUJrRixPQUFuQixFQUE0QnhCLFlBQVksQ0FBQ1ksY0FBekMsQ0FBUDtBQUNIOzs7cUNBRXVCZSxLLEVBQXFCO0FBQ3pDLGFBQU9yRixjQUFjLENBQUM2RyxhQUFmLENBQTZCeEIsS0FBN0IsRUFBb0NyRixjQUFjLENBQUNtRixJQUFmLENBQW9CakIsZUFBeEQsQ0FBUDtBQUNIOzs7cUNBRXVCbUIsSyxFQUFxQjtBQUN6QyxhQUFPckYsY0FBYyxDQUFDNkcsYUFBZixDQUE2QnhCLEtBQTdCLEVBQW9DckYsY0FBYyxDQUFDbUYsSUFBZixDQUFvQnBCLGdCQUF4RCxDQUFQO0FBQ0g7Ozs7Ozs7O2dCQXJQUS9ELGMsWUFDT3VELGM7O2dCQURQdkQsYyxVQUVLMEQsWTs7Z0JBRkwxRCxjLGlCQUdZLEUiLCJzb3VyY2VzQ29udGVudCI6WyIvKlxuICogQ29weXJpZ2h0IDIwMTgtMjAyMCBUT04gREVWIFNPTFVUSU9OUyBMVEQuXG4gKi9cbi8vIEBmbG93XG5cbmltcG9ydCB7XG4gICAgVGFncywgU3BhbiwgU3BhbkNvbnRleHQsIEZPUk1BVF9URVhUX01BUCxcbn0gZnJvbSAnb3BlbnRyYWNpbmcnO1xuaW1wb3J0IHR5cGUge1xuICAgIElUT05DbGllbnQsXG4gICAgVE9OQWNjZXNzS2V5c01hbmFnZW1lbnRQYXJhbXMsXG4gICAgVE9OQ29uZmlnRGF0YSxcbiAgICBUT05Db250cmFjdHMsXG4gICAgVE9OQ3J5cHRvLCBUT05NZXNzYWdlUHJvY2Vzc2luZ1N0YXRlLFxuICAgIFRPTlF1ZXJpZXMsXG4gICAgVE9OUmVnaXN0ZXJBY2Nlc3NLZXlzUGFyYW1zLFxuICAgIFRPTlJldm9rZUFjY2Vzc0tleXNQYXJhbXMsXG59IGZyb20gJy4uL3R5cGVzJztcblxuaW1wb3J0IFRPTkNvbmZpZ01vZHVsZSBmcm9tICcuL21vZHVsZXMvVE9OQ29uZmlnTW9kdWxlJztcbmltcG9ydCBUT05Db250cmFjdHNNb2R1bGUgZnJvbSAnLi9tb2R1bGVzL1RPTkNvbnRyYWN0c01vZHVsZSc7XG5pbXBvcnQgVE9OQ3J5cHRvTW9kdWxlIGZyb20gJy4vbW9kdWxlcy9UT05DcnlwdG9Nb2R1bGUnO1xuLyogZXNsaW50LWRpc2FibGUgY2xhc3MtbWV0aG9kcy11c2UtdGhpcywgbm8tdXNlLWJlZm9yZS1kZWZpbmUgKi9cbmltcG9ydCBUT05RdWVyaWVzTW9kdWxlIGZyb20gJy4vbW9kdWxlcy9UT05RdWVyaWVzTW9kdWxlJztcblxuaW1wb3J0IHR5cGUge1xuICAgIFRPTkNsaWVudENvcmVMaWJyYXJ5LFxuICAgIFRPTkNsaWVudENvcmVCcmlkZ2UsXG4gICAgVE9OTW9kdWxlQ29udGV4dCxcbn0gZnJvbSAnLi9UT05Nb2R1bGUnO1xuaW1wb3J0IHsgVE9OTW9kdWxlIH0gZnJvbSAnLi9UT05Nb2R1bGUnO1xuXG4vKipcbiAqIEphdmFTY3JpcHQgcGxhdGZvcm0gc3BlY2lmaWMgY29uZmlndXJhdGlvblxuICovXG50eXBlIFRPTkNsaWVudFBsYXRmb3JtID0ge1xuICAgIC8qKlxuICAgICAqIFBsYXRmb3JtIHNwZWNpZmljIGBmZXRjaGAgZnVuY3Rpb25cbiAgICAgKi9cbiAgICBmZXRjaDogYW55LFxuICAgIC8qKlxuICAgICAqIFBsYXRmb3JtIHNwZWNpZmljIGBXZWJTb2NrZXRgIGltcGxlbWVudGF0aW9uXG4gICAgICogVGhpcyBpbXBsZW1lbnRhdGlvbiBtdXN0IGNvbmZvcm1zIHRvIFczQyBXZWJTb2NrZXRcbiAgICAgKi9cbiAgICBXZWJTb2NrZXQ6IGFueSxcbiAgICAvKipcbiAgICAgKiBSZXF1ZXN0IGNyZWF0aW9uIG9mIHRoZSBjbGllbnQgY29yZVxuICAgICAqL1xuICAgIGNyZWF0ZUxpYnJhcnk6ICgpID0+IFByb21pc2U8VE9OQ2xpZW50Q29yZUxpYnJhcnk+LFxufTtcblxuLyoqXG4gKiBNYWluIG9iamVjdCBwcm92aWRlZCBmdW5jdGlvbmFsaXR5IG9mIHRoZSBUT04gQ2xpZW50IExpYnJhcnlcbiAqIEVhY2ggaW5zdGFuY2Ugb2YgVE9OQ2xpZW50IGhhcyBvd24gc2V0IG9mIFRPTiBDbGllbnQgbW9kdWxlc1xuICogYW5kIGhhcyBvd24gcHJlY29uZmlndXJlZCBjbGllbnQgY29udGV4dFxuICovXG5leHBvcnQgY2xhc3MgVE9OQ2xpZW50IGltcGxlbWVudHMgVE9OTW9kdWxlQ29udGV4dCwgSVRPTkNsaWVudCB7XG4gICAgc3RhdGljIHNldExpYnJhcnkoY2xpZW50UGxhdGZvcm06IFRPTkNsaWVudFBsYXRmb3JtKSB7XG4gICAgICAgIFRPTkNsaWVudC5jbGllbnRQbGF0Zm9ybSA9IGNsaWVudFBsYXRmb3JtO1xuICAgIH1cblxuXG4gICAgLy8gUHVibGljXG4gICAgY29uZmlnOiBUT05Db25maWdNb2R1bGU7XG4gICAgY3J5cHRvOiBUT05DcnlwdG87XG4gICAgY29udHJhY3RzOiBUT05Db250cmFjdHM7XG4gICAgcXVlcmllczogVE9OUXVlcmllcztcbiAgICBfcXVlcmllczogVE9OUXVlcmllc01vZHVsZTtcbiAgICBfY29udGV4dDogbnVtYmVyO1xuICAgIF9jb3JlQnJpZGdlOiA/VE9OQ2xpZW50Q29yZUJyaWRnZTtcblxuICAgIGNvbnN0cnVjdG9yKCkge1xuICAgICAgICB0aGlzLm1vZHVsZXMgPSBuZXcgTWFwKCk7XG4gICAgICAgIHRoaXMuY29uZmlnID0gdGhpcy5nZXRNb2R1bGUoVE9OQ29uZmlnTW9kdWxlKTtcbiAgICAgICAgdGhpcy5jcnlwdG8gPSB0aGlzLmdldE1vZHVsZShUT05DcnlwdG9Nb2R1bGUpO1xuICAgICAgICB0aGlzLmNvbnRyYWN0cyA9IHRoaXMuZ2V0TW9kdWxlKFRPTkNvbnRyYWN0c01vZHVsZSk7XG4gICAgICAgIHRoaXMuX3F1ZXJpZXMgPSB0aGlzLmdldE1vZHVsZShUT05RdWVyaWVzTW9kdWxlKTtcbiAgICAgICAgdGhpcy5xdWVyaWVzID0gdGhpcy5fcXVlcmllcztcbiAgICAgICAgdGhpcy5fY29udGV4dCA9IDA7XG4gICAgICAgIHRoaXMuX2NvcmVCcmlkZ2UgPSBudWxsO1xuICAgIH1cblxuICAgIC8qKlxuICAgICAqIENvbnZlbmllbnQgd2F5IHRvIGNyZWF0ZSBjb25maWd1cmVkIGluc3RhbmNlIG9mIHRoZSBUT04gQ2xpZW50XG4gICAgICogQHBhcmFtIHtUT05Db25maWdEYXRhfSBjb25maWdcbiAgICAgKiBAcmV0dXJuIHtQcm9taXNlPFRPTkNsaWVudD59XG4gICAgICovXG4gICAgc3RhdGljIGFzeW5jIGNyZWF0ZShjb25maWc6IFRPTkNvbmZpZ0RhdGEpOiBQcm9taXNlPFRPTkNsaWVudD4ge1xuICAgICAgICBjb25zdCBjbGllbnQgPSBuZXcgVE9OQ2xpZW50KCk7XG4gICAgICAgIGNsaWVudC5jb25maWcuc2V0RGF0YShjb25maWcpO1xuICAgICAgICBhd2FpdCBjbGllbnQuc2V0dXAoKTtcbiAgICAgICAgcmV0dXJuIGNsaWVudDtcbiAgICB9XG5cbiAgICAvKipcbiAgICAgKiBTZXQgdXAgdGhlIGNsaWVudCBpbnN0YW5jZVxuICAgICAqIEByZXR1cm4ge1Byb21pc2U8dm9pZD59XG4gICAgICovXG4gICAgYXN5bmMgc2V0dXAoKTogUHJvbWlzZTx2b2lkPiB7XG4gICAgICAgIGNvbnN0IHRyeUNyZWF0ZUxpYnJhcnkgPSBhc3luYyAoKSA9PiB7XG4gICAgICAgICAgICBjb25zdCBwbGF0Zm9ybSA9IFRPTkNsaWVudC5jbGllbnRQbGF0Zm9ybTtcbiAgICAgICAgICAgIGlmIChwbGF0Zm9ybSA9PT0gbnVsbCB8fCBwbGF0Zm9ybSA9PT0gdW5kZWZpbmVkKSB7XG4gICAgICAgICAgICAgICAgcmV0dXJuIG51bGw7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBUT05DbGllbnQuY29yZUxpYnJhcnkgPSBhd2FpdCBwbGF0Zm9ybS5jcmVhdGVMaWJyYXJ5KCk7XG4gICAgICAgICAgICByZXR1cm4gVE9OQ2xpZW50LmNvcmVMaWJyYXJ5O1xuICAgICAgICB9O1xuICAgICAgICBjb25zdCBsaWJyYXJ5ID0gVE9OQ2xpZW50LmNvcmVMaWJyYXJ5IHx8IGF3YWl0IHRyeUNyZWF0ZUxpYnJhcnkoKTtcbiAgICAgICAgaWYgKCFsaWJyYXJ5KSB7XG4gICAgICAgICAgICByZXR1cm47XG4gICAgICAgIH1cbiAgICAgICAgaWYgKHRoaXMuX2NvcmVCcmlkZ2UgPT09IG51bGwgfHwgdGhpcy5fY29yZUJyaWRnZSA9PT0gdW5kZWZpbmVkKSB7XG4gICAgICAgICAgICBpZiAobGlicmFyeS5jb3JlQ3JlYXRlQ29udGV4dCkge1xuICAgICAgICAgICAgICAgIHRoaXMuX2NvbnRleHQgPSBhd2FpdCBuZXcgUHJvbWlzZSgocmVzb2x2ZSkgPT4gbGlicmFyeS5jb3JlQ3JlYXRlQ29udGV4dChyZXNvbHZlKSk7XG4gICAgICAgICAgICAgICAgdGhpcy5fY29yZUJyaWRnZSA9IHtcbiAgICAgICAgICAgICAgICAgICAgcmVxdWVzdDogKFxuICAgICAgICAgICAgICAgICAgICAgICAgbWV0aG9kOiBzdHJpbmcsXG4gICAgICAgICAgICAgICAgICAgICAgICBwYXJhbXNKc29uOiBzdHJpbmcsXG4gICAgICAgICAgICAgICAgICAgICAgICBvblJlc3VsdDogKHJlc3VsdEpzb246IHN0cmluZywgZXJyb3JKc29uOiBzdHJpbmcpID0+IHZvaWQsXG4gICAgICAgICAgICAgICAgICAgICk6IHZvaWQgPT4ge1xuICAgICAgICAgICAgICAgICAgICAgICAgaWYgKFRPTkNsaWVudC5jb3JlTGlicmFyeSkge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIFRPTkNsaWVudC5jb3JlTGlicmFyeS5jb3JlUmVxdWVzdChcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5fY29udGV4dCxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgbWV0aG9kLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBwYXJhbXNKc29uLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBvblJlc3VsdCxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICApO1xuICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgIH07XG4gICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAgIHRoaXMuX2NvcmVCcmlkZ2UgPSBsaWJyYXJ5O1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICAgIGNvbnN0IG1vZHVsZXM6IFRPTk1vZHVsZVtdID0gWy4uLnRoaXMubW9kdWxlcy52YWx1ZXMoKV07XG4gICAgICAgIGZvciAoY29uc3QgbW9kdWxlIG9mIG1vZHVsZXMpIHtcbiAgICAgICAgICAgIGF3YWl0IG1vZHVsZS5zZXR1cCgpO1xuICAgICAgICB9XG4gICAgICAgIFRPTkNsaWVudEVycm9yLmNvcmVWZXJzaW9uID0gYXdhaXQgdGhpcy5jb25maWcuZ2V0VmVyc2lvbigpO1xuICAgIH1cblxuICAgIC8qKlxuICAgICAqIFRlYXIgZG93biB0aGlzIGNsaWVudCBpbnN0YW5jZS5cbiAgICAgKiBOb3RlIHRoYXQgYWZ0ZXIgeW91IGhhdmUgY2FsbGVkIHRoaXMgbWV0aG9kIGFsbCBmdXR1cmUgdXNlIG9mIHRoaXMgaW5zdGFuY2Ugd2lsbCBmYWlsXG4gICAgICogQHJldHVybiB7UHJvbWlzZTx2b2lkPn1cbiAgICAgKi9cbiAgICBhc3luYyBjbG9zZSgpOiBQcm9taXNlPHZvaWQ+IHtcbiAgICAgICAgYXdhaXQgdGhpcy5xdWVyaWVzLmNsb3NlKCk7XG4gICAgICAgIGNvbnN0IGxpYnJhcnkgPSBUT05DbGllbnQuY29yZUxpYnJhcnk7XG4gICAgICAgIGlmICh0aGlzLl9jb250ZXh0ID4gMCAmJiBsaWJyYXJ5ICE9PSBudWxsICYmIGxpYnJhcnkgIT09IHVuZGVmaW5lZCkge1xuICAgICAgICAgICAgY29uc3QgY29udGV4dCA9IHRoaXMuX2NvbnRleHQ7XG4gICAgICAgICAgICB0aGlzLl9jb3JlQnJpZGdlID0gbnVsbDtcbiAgICAgICAgICAgIHRoaXMuX2NvbnRleHQgPSAwO1xuICAgICAgICAgICAgYXdhaXQgbmV3IFByb21pc2UocmVzb2x2ZSA9PiBsaWJyYXJ5LmNvcmVEZXN0cm95Q29udGV4dChjb250ZXh0LCByZXNvbHZlKSk7XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICAvLyBUT05Nb2R1bGVDb250ZXh0XG5cbiAgICBnZXRDb3JlQnJpZGdlKCk6ID9UT05DbGllbnRDb3JlQnJpZGdlIHtcbiAgICAgICAgcmV0dXJuIHRoaXMuX2NvcmVCcmlkZ2U7XG4gICAgfVxuXG4gICAgZ2V0TW9kdWxlPFQ+KE1vZHVsZUNsYXNzOiB0eXBlb2YgVE9OTW9kdWxlKTogVCB7XG4gICAgICAgIGNvbnN0IG5hbWUgPSBNb2R1bGVDbGFzcy5tb2R1bGVOYW1lO1xuICAgICAgICBjb25zdCBleGlzdGluZ01vZHVsZSA9IHRoaXMubW9kdWxlcy5nZXQobmFtZSk7XG4gICAgICAgIGlmIChleGlzdGluZ01vZHVsZSkge1xuICAgICAgICAgICAgcmV0dXJuIChleGlzdGluZ01vZHVsZTogYW55KTtcbiAgICAgICAgfVxuICAgICAgICBjb25zdCBtb2R1bGUgPSBuZXcgTW9kdWxlQ2xhc3ModGhpcyk7XG4gICAgICAgIHRoaXMubW9kdWxlcy5zZXQobmFtZSwgbW9kdWxlKTtcbiAgICAgICAgcmV0dXJuIChtb2R1bGU6IGFueSk7XG4gICAgfVxuXG4gICAgc2VydmVyVGltZURlbHRhKCk6IFByb21pc2U8bnVtYmVyPiB7XG4gICAgICAgIHJldHVybiB0aGlzLl9xdWVyaWVzLnNlcnZlclRpbWVEZWx0YSgpO1xuICAgIH1cblxuICAgIHNlcnZlck5vdygpOiBQcm9taXNlPG51bWJlcj4ge1xuICAgICAgICByZXR1cm4gdGhpcy5fcXVlcmllcy5zZXJ2ZXJOb3coKTtcbiAgICB9XG5cbiAgICBhc3luYyBnZXRNYW5hZ2VtZW50QWNjZXNzS2V5KCk6IFByb21pc2U8c3RyaW5nPiB7XG4gICAgICAgIGNvbnN0IHJlc3VsdCA9IGF3YWl0IHRoaXMuX3F1ZXJpZXMucXVlcnkoJ3F1ZXJ5e2dldE1hbmFnZW1lbnRBY2Nlc3NLZXl9Jyk7XG4gICAgICAgIHJldHVybiByZXN1bHQuZGF0YS5nZXRNYW5hZ2VtZW50QWNjZXNzS2V5O1xuICAgIH1cblxuXG4gICAgYXN5bmMgX3Jlc29sdmVTaWduZWRNYW5hZ2VtZW50QWNjZXNzS2V5KFxuICAgICAgICBwYXJhbXM6IFRPTkFjY2Vzc0tleXNNYW5hZ2VtZW50UGFyYW1zLFxuICAgICk6IFByb21pc2U8c3RyaW5nPiB7XG4gICAgICAgIGlmIChwYXJhbXMuc2lnbmVkTWFuYWdlbWVudEFjY2Vzc0tleSkge1xuICAgICAgICAgICAgcmV0dXJuIHBhcmFtcy5zaWduZWRNYW5hZ2VtZW50QWNjZXNzS2V5O1xuICAgICAgICB9XG4gICAgICAgIGNvbnN0IHNpZ25LZXlzID0gcGFyYW1zLmFjY291bnRLZXlzO1xuICAgICAgICBpZiAoc2lnbktleXMpIHtcbiAgICAgICAgICAgIGNvbnN0IG1hbmFnZW1lbnRBY2Nlc3NLZXkgPSBhd2FpdCB0aGlzLmdldE1hbmFnZW1lbnRBY2Nlc3NLZXkoKTtcbiAgICAgICAgICAgIHJldHVybiB0aGlzLmNyeXB0by5uYWNsU2lnbihcbiAgICAgICAgICAgICAgICB7IHRleHQ6IG1hbmFnZW1lbnRBY2Nlc3NLZXkgfSxcbiAgICAgICAgICAgICAgICBgJHtzaWduS2V5cy5zZWNyZXR9JHtzaWduS2V5cy5wdWJsaWN9YCxcbiAgICAgICAgICAgICAgICAnSGV4JyxcbiAgICAgICAgICAgICk7XG4gICAgICAgIH1cbiAgICAgICAgcmV0dXJuICcnO1xuICAgIH1cblxuICAgIGFzeW5jIHJlZ2lzdGVyQWNjZXNzS2V5cyhcbiAgICAgICAgcGFyYW1zOiBUT05SZWdpc3RlckFjY2Vzc0tleXNQYXJhbXMsXG4gICAgKTogUHJvbWlzZTxudW1iZXI+IHtcbiAgICAgICAgY29uc3Qgc2lnbmVkTWFuYWdlbWVudEFjY2Vzc0tleSA9IGF3YWl0IHRoaXMuX3Jlc29sdmVTaWduZWRNYW5hZ2VtZW50QWNjZXNzS2V5KHBhcmFtcyk7XG4gICAgICAgIGNvbnN0IHJlc3VsdCA9IGF3YWl0IHRoaXMuX3F1ZXJpZXMubXV0YXRpb24oXG4gICAgICAgICAgICBgbXV0YXRpb24gcmVnaXN0ZXJBY2Nlc3NLZXlzKCRhY2NvdW50OiBTdHJpbmcsICRrZXlzOiBbQWNjZXNzS2V5XSwgJHNpZ25lZE1hbmFnZW1lbnRBY2Nlc3NLZXk6IFN0cmluZykge1xuICAgICAgICAgICAgICAgICAgICByZWdpc3RlckFjY2Vzc0tleXMoYWNjb3VudDogJGFjY291bnQsIGtleXM6ICRrZXlzLCBzaWduZWRNYW5hZ2VtZW50QWNjZXNzS2V5OiAkc2lnbmVkTWFuYWdlbWVudEFjY2Vzc0tleSlcbiAgICAgICAgICAgICAgICB9YCwge1xuICAgICAgICAgICAgICAgIGFjY291bnQ6IHBhcmFtcy5hY2NvdW50LFxuICAgICAgICAgICAgICAgIGtleXM6IHBhcmFtcy5rZXlzLFxuICAgICAgICAgICAgICAgIHNpZ25lZE1hbmFnZW1lbnRBY2Nlc3NLZXksXG4gICAgICAgICAgICB9LFxuICAgICAgICApO1xuICAgICAgICByZXR1cm4gcmVzdWx0LmRhdGEucmVnaXN0ZXJBY2Nlc3NLZXlzO1xuICAgIH1cblxuICAgIGFzeW5jIHJldm9rZUFjY2Vzc0tleXMoXG4gICAgICAgIHBhcmFtczogVE9OUmV2b2tlQWNjZXNzS2V5c1BhcmFtcyxcbiAgICApOiBQcm9taXNlPG51bWJlcj4ge1xuICAgICAgICBjb25zdCBzaWduZWRNYW5hZ2VtZW50QWNjZXNzS2V5ID0gYXdhaXQgdGhpcy5fcmVzb2x2ZVNpZ25lZE1hbmFnZW1lbnRBY2Nlc3NLZXkocGFyYW1zKTtcbiAgICAgICAgY29uc3QgcmVzdWx0ID0gYXdhaXQgdGhpcy5fcXVlcmllcy5tdXRhdGlvbihcbiAgICAgICAgICAgIGBtdXRhdGlvbiByZXZva2VBY2Nlc3NLZXlzKCRhY2NvdW50OiBTdHJpbmcsICRrZXlzOiBbU3RyaW5nXSwgJHNpZ25lZE1hbmFnZW1lbnRBY2Nlc3NLZXk6IFN0cmluZykge1xuICAgICAgICAgICAgICAgICAgICByZXZva2VBY2Nlc3NLZXlzKGFjY291bnQ6ICRhY2NvdW50LCBrZXlzOiAka2V5cywgc2lnbmVkTWFuYWdlbWVudEFjY2Vzc0tleTogJHNpZ25lZE1hbmFnZW1lbnRBY2Nlc3NLZXkpXG4gICAgICAgICAgICAgICAgfWAsIHtcbiAgICAgICAgICAgICAgICBhY2NvdW50OiBwYXJhbXMuYWNjb3VudCxcbiAgICAgICAgICAgICAgICBrZXlzOiBwYXJhbXMua2V5cyxcbiAgICAgICAgICAgICAgICBzaWduZWRNYW5hZ2VtZW50QWNjZXNzS2V5LFxuICAgICAgICAgICAgfSxcbiAgICAgICAgKTtcbiAgICAgICAgcmV0dXJuIHJlc3VsdC5kYXRhLnJldm9rZUFjY2Vzc0tleXM7XG4gICAgfVxuXG4gICAgc3RhcnRSb290U3Bhbih0cmFjZUlkOiBzdHJpbmcsIHNwYW5JZDogc3RyaW5nLCBvcGVyYXRpb25OYW1lOiBzdHJpbmcpOiBTcGFuIHtcbiAgICAgICAgY29uc3QgdHJhY2VyID0gdGhpcy5jb25maWcudHJhY2VyO1xuICAgICAgICBsZXQgc3BhbjogP1NwYW4gPSBudWxsO1xuICAgICAgICBpZiAodHJhY2VyLl9zdGFydEludGVybmFsU3Bhbikge1xuICAgICAgICAgICAgdHJ5IHtcbiAgICAgICAgICAgICAgICBjb25zdCBjdHggPSB0cmFjZXIuZXh0cmFjdChGT1JNQVRfVEVYVF9NQVAsIHtcbiAgICAgICAgICAgICAgICAgICAgJ3ViZXItdHJhY2UtaWQnOiBgJHt0cmFjZUlkfToke3NwYW5JZH06MDoxYCxcbiAgICAgICAgICAgICAgICB9KTtcbiAgICAgICAgICAgICAgICBpZiAoY3R4KSB7XG4gICAgICAgICAgICAgICAgICAgIHNwYW4gPSB0aGlzLmNvbmZpZy50cmFjZXIuX3N0YXJ0SW50ZXJuYWxTcGFuKFxuICAgICAgICAgICAgICAgICAgICAgICAgY3R4LFxuICAgICAgICAgICAgICAgICAgICAgICAgb3BlcmF0aW9uTmFtZSxcbiAgICAgICAgICAgICAgICAgICAgICAgIERhdGUubm93KCksIC8vIHN0YXJ0VGltZVxuICAgICAgICAgICAgICAgICAgICAgICAgdW5kZWZpbmVkLCAvLyB1c2VyVGFnc1xuICAgICAgICAgICAgICAgICAgICAgICAge30sIC8vIGludGVybmFsVGFnc1xuICAgICAgICAgICAgICAgICAgICAgICAgW10sIC8vIHJlZmVyZW5jZXNcbiAgICAgICAgICAgICAgICAgICAgICAgIGZhbHNlLCAvLyBoYXNWYWxpZFBhcmVudFxuICAgICAgICAgICAgICAgICAgICAgICAgZmFsc2UsIC8vIGlzUnBjU2VydmVyXG4gICAgICAgICAgICAgICAgICAgICk7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfSBjYXRjaCB7XG4gICAgICAgICAgICAgICAgLy8gdHJhY2VyIGNhbid0IGNyZWF0ZSBtZXNzYWdlIHNwYW4gdXNpbmcgcHJpdmF0ZSBtZXRob2QsXG4gICAgICAgICAgICAgICAgLy8gc28gd2UgYXJlIGZhbGxiYWNrIHRvIGNyZWF0ZSBzcGFuIHVzaW5nIHJlZ3VsYXIgbWV0aG9kXG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgICAgcmV0dXJuIHNwYW4gfHwgdHJhY2VyLnN0YXJ0U3BhbihvcGVyYXRpb25OYW1lKTtcbiAgICB9XG5cbiAgICBhc3luYyB0cmFjZTxUPihcbiAgICAgICAgbmFtZTogc3RyaW5nLFxuICAgICAgICBmOiAoc3BhbjogU3BhbikgPT4gUHJvbWlzZTxUPixcbiAgICAgICAgcGFyZW50U3Bhbj86IChTcGFuIHwgU3BhbkNvbnRleHQpLFxuICAgICk6IFByb21pc2U8VD4ge1xuICAgICAgICBjb25zdCBzcGFuID0gdGhpcy5jb25maWcudHJhY2VyLnN0YXJ0U3BhbihuYW1lLCB7IGNoaWxkT2Y6IHBhcmVudFNwYW4gfSk7XG4gICAgICAgIHRyeSB7XG4gICAgICAgICAgICBzcGFuLnNldFRhZyhUYWdzLlNQQU5fS0lORCwgJ2NsaWVudCcpO1xuICAgICAgICAgICAgY29uc3QgcmVzdWx0ID0gYXdhaXQgZihzcGFuKTtcbiAgICAgICAgICAgIGlmIChyZXN1bHQgIT09IHVuZGVmaW5lZCkge1xuICAgICAgICAgICAgICAgIHNwYW4uc2V0VGFnKCdyZXN1bHQnLCByZXN1bHQpO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgc3Bhbi5maW5pc2goKTtcbiAgICAgICAgICAgIHJldHVybiByZXN1bHQ7XG4gICAgICAgIH0gY2F0Y2ggKGVycm9yKSB7XG4gICAgICAgICAgICBzcGFuLmxvZyh7XG4gICAgICAgICAgICAgICAgZXZlbnQ6ICdmYWlsZWQnLFxuICAgICAgICAgICAgICAgIHBheWxvYWQ6IGVycm9yLFxuICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICBzcGFuLmZpbmlzaCgpO1xuICAgICAgICAgICAgdGhyb3cgZXJyb3I7XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICAvLyBJbnRlcm5hbHNcblxuICAgIHN0YXRpYyBjbGllbnRQbGF0Zm9ybTogP1RPTkNsaWVudFBsYXRmb3JtID0gbnVsbDtcbiAgICBzdGF0aWMgY29yZUxpYnJhcnk6ID9UT05DbGllbnRDb3JlTGlicmFyeSA9IG51bGw7XG5cbiAgICBtb2R1bGVzOiBNYXA8c3RyaW5nLCBUT05Nb2R1bGU+O1xufVxuXG5cbmV4cG9ydCBjb25zdCBUT05FcnJvclNvdXJjZSA9IHtcbiAgICBDTElFTlQ6ICdjbGllbnQnLFxuICAgIE5PREU6ICdub2RlJyxcbn07XG5cbmV4cG9ydCBjb25zdCBUT05FcnJvckNvZGUgPSB7XG4gICAgQ0xJRU5UX0RPRVNfTk9UX0NPTkZJR1VSRUQ6IDEwMDAsXG4gICAgU0VORF9OT0RFX1JFUVVFU1RfRkFJTEVEOiAxMDAxLFxuICAgIE1FU1NBR0VfQUxSRUFEWV9FWFBJUkVEOiAxMDAxLFxuICAgIFJVTl9MT0NBTF9BQ0NPVU5UX0RPRVNfTk9UX0VYSVNUUzogMTAwMixcbiAgICBXQUlUX0ZPUl9USU1FT1VUOiAxMDAzLFxuICAgIElOVEVSTkFMX0VSUk9SOiAxMDA0LFxuICAgIFFVRVJZX0ZBSUxFRDogMTAwNSxcbiAgICBNRVNTQUdFX0VYUElSRUQ6IDEwMDYsXG4gICAgU0VSVkVSX0RPRVNOVF9TVVBQT1JUX0FHR1JFR0FUSU9OUzogMTAwNyxcbiAgICBJTlZBTElEX0NPTlM6IDEwMDgsXG4gICAgQUREUkVTU19SRVFVSVJFRF9GT1JfUlVOX0xPQ0FMOiAxMDA5LFxuICAgIE5FVFdPUktfU0lMRU5UOiAxMDEwLFxuICAgIFRSQU5TQUNUSU9OX0xBRzogMTAxMSxcbiAgICBUUkFOU0FDVElPTl9XQUlUX1RJTUVPVVQ6IDEwMTIsXG4gICAgQ0xPQ0tfT1VUX09GX1NZTkM6IDEwMTMsXG4gICAgQUNDT1VOVF9NSVNTSU5HOiAxMDE0LFxuICAgIEFDQ09VTlRfQ09ERV9NSVNTSU5HOiAxMDE1LFxuICAgIEFDQ09VTlRfQkFMQU5DRV9UT09fTE9XOiAxMDE2LFxuICAgIEFDQ09VTlRfRlJPWkVOX09SX0RFTEVURUQ6IDEwMTcsXG5cbiAgICAvLyBDb250cmFjdHNcblxuICAgIENPTlRSQUNUX0VYRUNVVElPTl9GQUlMRUQ6IDMwMjUsXG59O1xuXG5leHBvcnQgY29uc3QgVE9OQ29udHJhY3RFeGl0Q29kZSA9IHtcbiAgICBSRVBMQVlfUFJPVEVDVElPTjogNTIsXG4gICAgTUVTU0FHRV9FWFBJUkVEOiA1NyxcbiAgICBOT19HQVM6IDEzLFxufTtcblxuZXhwb3J0IGNsYXNzIFRPTkNsaWVudEVycm9yIHtcbiAgICBzdGF0aWMgc291cmNlID0gVE9ORXJyb3JTb3VyY2U7XG4gICAgc3RhdGljIGNvZGUgPSBUT05FcnJvckNvZGU7XG4gICAgc3RhdGljIGNvcmVWZXJzaW9uID0gJyc7XG5cblxuICAgIG1lc3NhZ2U6IHN0cmluZztcbiAgICBzb3VyY2U6IHN0cmluZztcbiAgICBjb2RlOiBudW1iZXI7XG4gICAgZGF0YTogYW55O1xuICAgIGNvcmVWZXJzaW9uOiBzdHJpbmc7XG5cbiAgICBjb25zdHJ1Y3RvcihtZXNzYWdlOiBzdHJpbmcsIGNvZGU6IG51bWJlciwgc291cmNlPzogc3RyaW5nLCBkYXRhPzogYW55KSB7XG4gICAgICAgIHRoaXMubWVzc2FnZSA9IG1lc3NhZ2U7XG4gICAgICAgIHRoaXMuY29kZSA9IGNvZGU7XG4gICAgICAgIHRoaXMuc291cmNlID0gc291cmNlIHx8IFRPTkVycm9yU291cmNlLkNMSUVOVDtcbiAgICAgICAgdGhpcy5jb3JlVmVyc2lvbiA9IFRPTkNsaWVudEVycm9yLmNvcmVWZXJzaW9uO1xuICAgICAgICB0aGlzLmRhdGEgPSBkYXRhO1xuICAgIH1cblxuICAgIHN0YXRpYyBpc0NsaWVudEVycm9yKGVycm9yOiBhbnksIGNvZGU6IG51bWJlcik6IGJvb2xlYW4ge1xuICAgICAgICByZXR1cm4gKGVycm9yLnNvdXJjZSA9PT0gVE9OQ2xpZW50RXJyb3Iuc291cmNlLkNMSUVOVClcbiAgICAgICAgICAgICYmIChlcnJvci5jb2RlID09PSBjb2RlKTtcbiAgICB9XG5cbiAgICBzdGF0aWMgaXNOb2RlRXJyb3IoZXJyb3I6IGFueSwgY29kZTogbnVtYmVyKTogYm9vbGVhbiB7XG4gICAgICAgIHJldHVybiAoZXJyb3Iuc291cmNlID09PSBUT05DbGllbnRFcnJvci5zb3VyY2UuTk9ERSlcbiAgICAgICAgICAgICYmIChlcnJvci5jb2RlID09PSBjb2RlKTtcbiAgICB9XG5cbiAgICBzdGF0aWMgaXNDb250cmFjdEVycm9yKGVycm9yOiBhbnksIGV4aXRDb2RlOiBudW1iZXIpOiBib29sZWFuIHtcbiAgICAgICAgcmV0dXJuIChlcnJvci5zb3VyY2UgPT09IFRPTkNsaWVudEVycm9yLnNvdXJjZS5OT0RFKVxuICAgICAgICAgICAgJiYgKGVycm9yLmNvZGUgPT09IFRPTkNsaWVudEVycm9yLmNvZGUuQ09OVFJBQ1RfRVhFQ1VUSU9OX0ZBSUxFRClcbiAgICAgICAgICAgICYmIChlcnJvci5kYXRhICYmIGVycm9yLmRhdGEuZXhpdF9jb2RlID09PSBleGl0Q29kZSk7XG4gICAgfVxuXG4gICAgc3RhdGljIGlzT3JpZ2luYWxDb250cmFjdEVycm9yKGVycm9yOiBhbnksIGV4aXRDb2RlOiBudW1iZXIpOiBib29sZWFuIHtcbiAgICAgICAgcmV0dXJuIFRPTkNsaWVudEVycm9yLmlzQ29udHJhY3RFcnJvcihlcnJvciwgZXhpdENvZGUpXG4gICAgICAgICAgICAmJiAoIWVycm9yLmRhdGE/Lm9yaWdpbmFsX2Vycm9yKTtcbiAgICB9XG5cbiAgICBzdGF0aWMgaXNSZXNvbHZlZENvbnRyYWN0RXJyb3JBZnRlckV4cGlyZShlcnJvcjogYW55LCBleGl0Q29kZTogbnVtYmVyKTogYm9vbGVhbiB7XG4gICAgICAgIHJldHVybiBUT05DbGllbnRFcnJvci5pc0NvbnRyYWN0RXJyb3IoZXJyb3IsIGV4aXRDb2RlKVxuICAgICAgICAgICAgJiYgKGVycm9yLmRhdGEgJiYgZXJyb3IuZGF0YS5vcmlnaW5hbF9lcnJvclxuICAgICAgICAgICAgICAgICYmIFRPTkNsaWVudEVycm9yLmlzTWVzc2FnZUV4cGlyZWQoZXJyb3IuZGF0YS5vcmlnaW5hbF9lcnJvcikpO1xuICAgIH1cblxuICAgIHN0YXRpYyBpbnRlcm5hbEVycm9yKG1lc3NhZ2U6IHN0cmluZyk6IFRPTkNsaWVudEVycm9yIHtcbiAgICAgICAgcmV0dXJuIG5ldyBUT05DbGllbnRFcnJvcihcbiAgICAgICAgICAgIGBJbnRlcm5hbCBlcnJvcjogJHttZXNzYWdlfWAsXG4gICAgICAgICAgICBUT05DbGllbnRFcnJvci5jb2RlLklOVEVSTkFMX0VSUk9SLFxuICAgICAgICAgICAgVE9OQ2xpZW50RXJyb3Iuc291cmNlLkNMSUVOVCxcbiAgICAgICAgKTtcbiAgICB9XG5cbiAgICBzdGF0aWMgaW52YWxpZENvbnMoKTogVE9OQ2xpZW50RXJyb3Ige1xuICAgICAgICByZXR1cm4gbmV3IFRPTkNsaWVudEVycm9yKFxuICAgICAgICAgICAgJ0ludmFsaWQgQ09OUyBzdHJ1Y3R1cmUuIEVhY2ggQ09OUyBpdGVtIG11c3QgY29udGFpbnMgb2YgdHdvIGVsZW1lbnRzLicsXG4gICAgICAgICAgICBUT05DbGllbnRFcnJvci5jb2RlLklOVkFMSURfQ09OUyxcbiAgICAgICAgICAgIFRPTkNsaWVudEVycm9yLnNvdXJjZS5DTElFTlQsXG4gICAgICAgICk7XG4gICAgfVxuXG4gICAgc3RhdGljIGNsaWVudERvZXNOb3RDb25maWd1cmVkKCk6IFRPTkNsaWVudEVycm9yIHtcbiAgICAgICAgcmV0dXJuIG5ldyBUT05DbGllbnRFcnJvcihcbiAgICAgICAgICAgICdUT04gQ2xpZW50IGlzblxcJ3QgY29uZmlndXJlZCcsXG4gICAgICAgICAgICBUT05DbGllbnRFcnJvci5jb2RlLkNMSUVOVF9ET0VTX05PVF9DT05GSUdVUkVELFxuICAgICAgICAgICAgVE9OQ2xpZW50RXJyb3Iuc291cmNlLkNMSUVOVCxcbiAgICAgICAgKTtcbiAgICB9XG5cbiAgICBzdGF0aWMgc2VuZE5vZGVSZXF1ZXN0RmFpbGVkKHJlc3BvbnNlVGV4dDogc3RyaW5nKTogVE9OQ2xpZW50RXJyb3Ige1xuICAgICAgICByZXR1cm4gbmV3IFRPTkNsaWVudEVycm9yKFxuICAgICAgICAgICAgYFNlbmQgbm9kZSByZXF1ZXN0IGZhaWxlZDogJHtyZXNwb25zZVRleHR9YCxcbiAgICAgICAgICAgIFRPTkNsaWVudEVycm9yLmNvZGUuU0VORF9OT0RFX1JFUVVFU1RfRkFJTEVELFxuICAgICAgICAgICAgVE9OQ2xpZW50RXJyb3Iuc291cmNlLkNMSUVOVCxcbiAgICAgICAgKTtcbiAgICB9XG5cbiAgICBzdGF0aWMgcnVuTG9jYWxBY2NvdW50RG9lc05vdEV4aXN0cyhmdW5jdGlvbk5hbWU6IHN0cmluZywgYWRkcmVzczogc3RyaW5nKTogVE9OQ2xpZW50RXJyb3Ige1xuICAgICAgICByZXR1cm4gbmV3IFRPTkNsaWVudEVycm9yKFxuICAgICAgICAgICAgYFske2Z1bmN0aW9uTmFtZX1dIHJ1biBsb2NhbCBmYWlsZWQ6IGFjY291bnQgWyR7YWRkcmVzc31dIGRvZXMgbm90IGV4aXN0c2AsXG4gICAgICAgICAgICBUT05DbGllbnRFcnJvci5jb2RlLlJVTl9MT0NBTF9BQ0NPVU5UX0RPRVNfTk9UX0VYSVNUUyxcbiAgICAgICAgICAgIFRPTkNsaWVudEVycm9yLnNvdXJjZS5DTElFTlQsXG4gICAgICAgICk7XG4gICAgfVxuXG4gICAgc3RhdGljIHdhaXRGb3JUaW1lb3V0KCkge1xuICAgICAgICByZXR1cm4gbmV3IFRPTkNsaWVudEVycm9yKFxuICAgICAgICAgICAgJ1dhaXQgZm9yIG9wZXJhdGlvbiByZWplY3RlZCBvbiB0aW1lb3V0JyxcbiAgICAgICAgICAgIFRPTkNsaWVudEVycm9yLmNvZGUuV0FJVF9GT1JfVElNRU9VVCxcbiAgICAgICAgICAgIFRPTkNsaWVudEVycm9yLnNvdXJjZS5DTElFTlQsXG4gICAgICAgICk7XG4gICAgfVxuXG4gICAgc3RhdGljIHF1ZXJ5RmFpbGVkKGVycm9yczogRXJyb3JbXSkge1xuICAgICAgICByZXR1cm4gbmV3IFRPTkNsaWVudEVycm9yKFxuICAgICAgICAgICAgYFF1ZXJ5IGZhaWxlZDogJHtlcnJvcnMubWFwKHggPT4geC5tZXNzYWdlIHx8IHgudG9TdHJpbmcoKSkuam9pbignXFxuJyl9YCxcbiAgICAgICAgICAgIFRPTkNsaWVudEVycm9yLmNvZGUuUVVFUllfRkFJTEVELFxuICAgICAgICAgICAgVE9OQ2xpZW50RXJyb3Iuc291cmNlLkNMSUVOVCxcbiAgICAgICAgKTtcbiAgICB9XG5cbiAgICBzdGF0aWMgZm9ybWF0VGltZSh0aW1lOiA/bnVtYmVyKTogP3N0cmluZyB7XG4gICAgICAgIGlmICh0aW1lKSB7XG4gICAgICAgICAgICByZXR1cm4gYCR7bmV3IERhdGUodGltZSAqIDEwMDApLnRvSVNPU3RyaW5nKCl9ICgke3RpbWV9KWA7XG4gICAgICAgIH1cbiAgICAgICAgcmV0dXJuIG51bGw7XG4gICAgfVxuXG4gICAgc3RhdGljIG1lc3NhZ2VFeHBpcmVkKGRhdGE6IHtcbiAgICAgICAgbWVzc2FnZUlkOiBzdHJpbmcsXG4gICAgICAgIHNlbmRpbmdUaW1lOiBudW1iZXIsXG4gICAgICAgIGV4cGlyZTogP251bWJlcixcbiAgICAgICAgYmxvY2tUaW1lOiA/bnVtYmVyLFxuICAgIH0pIHtcbiAgICAgICAgcmV0dXJuIG5ldyBUT05DbGllbnRFcnJvcihcbiAgICAgICAgICAgICdNZXNzYWdlIGV4cGlyZWQnLFxuICAgICAgICAgICAgVE9OQ2xpZW50RXJyb3IuY29kZS5NRVNTQUdFX0VYUElSRUQsXG4gICAgICAgICAgICBUT05DbGllbnRFcnJvci5zb3VyY2UuQ0xJRU5ULFxuICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgIHNlbmRpbmdUaW1lOiBUT05DbGllbnRFcnJvci5mb3JtYXRUaW1lKGRhdGEuc2VuZGluZ1RpbWUpLFxuICAgICAgICAgICAgICAgIGV4cGlyYXRpb25UaW1lOiBUT05DbGllbnRFcnJvci5mb3JtYXRUaW1lKGRhdGEuZXhwaXJlKSxcbiAgICAgICAgICAgICAgICBibG9ja1RpbWU6IFRPTkNsaWVudEVycm9yLmZvcm1hdFRpbWUoZGF0YS5ibG9ja1RpbWUpLFxuICAgICAgICAgICAgfSxcbiAgICAgICAgKTtcbiAgICB9XG5cbiAgICBzdGF0aWMgc2VydmVyRG9lc250U3VwcG9ydEFnZ3JlZ2F0aW9ucygpIHtcbiAgICAgICAgcmV0dXJuIG5ldyBUT05DbGllbnRFcnJvcihcbiAgICAgICAgICAgICdTZXJ2ZXIgZG9lc25cXCd0IHN1cHBvcnQgYWdncmVnYXRpb25zJyxcbiAgICAgICAgICAgIFRPTkNsaWVudEVycm9yLmNvZGUuU0VSVkVSX0RPRVNOVF9TVVBQT1JUX0FHR1JFR0FUSU9OUyxcbiAgICAgICAgICAgIFRPTkNsaWVudEVycm9yLnNvdXJjZS5DTElFTlQsXG4gICAgICAgICk7XG4gICAgfVxuXG4gICAgc3RhdGljIGFkZHJlc3NSZXF1aXJlZEZvclJ1bkxvY2FsKCkge1xuICAgICAgICByZXR1cm4gbmV3IFRPTkNsaWVudEVycm9yKFxuICAgICAgICAgICAgJ0FkZHJlc3MgcmVxdWlyZWQgZm9yIHJ1biBsb2NhbC4gWW91IGhhdmVuXFwndCBzcGVjaWZpZWQgY29udHJhY3QgY29kZSBvciBkYXRhICdcbiAgICAgICAgICAgICsgJ3NvIGFkZHJlc3MgaXMgcmVxdWlyZWQgdG8gbG9hZCBtaXNzaW5nIHBhcnRzIGZyb20gbmV0d29yay4nLFxuICAgICAgICAgICAgVE9OQ2xpZW50RXJyb3IuY29kZS5BRERSRVNTX1JFUVVJUkVEX0ZPUl9SVU5fTE9DQUwsXG4gICAgICAgICAgICBUT05DbGllbnRFcnJvci5zb3VyY2UuQ0xJRU5ULFxuICAgICAgICApO1xuICAgIH1cblxuICAgIHN0YXRpYyBuZXR3b3JrU2lsZW50KGRhdGE6IHtcbiAgICAgICAgbWVzc2FnZUlkOiBzdHJpbmcsXG4gICAgICAgIHNlbmRpbmdUaW1lOiBudW1iZXIsXG4gICAgICAgIGV4cGlyZTogbnVtYmVyLFxuICAgICAgICB0aW1lb3V0OiBudW1iZXIsXG4gICAgICAgIGJsb2NrSWQ/OiBzdHJpbmcsXG4gICAgICAgIG1lc3NhZ2VQcm9jZXNzaW5nU3RhdGU/OiBUT05NZXNzYWdlUHJvY2Vzc2luZ1N0YXRlLFxuICAgIH0pIHtcbiAgICAgICAgcmV0dXJuIG5ldyBUT05DbGllbnRFcnJvcihcbiAgICAgICAgICAgICdOZXR3b3JrIHNpbGVudDogbm8gYmxvY2tzIHByb2R1Y2VkIGR1cmluZyB0aW1lb3V0LicsXG4gICAgICAgICAgICBUT05DbGllbnRFcnJvci5jb2RlLk5FVFdPUktfU0lMRU5ULFxuICAgICAgICAgICAgVE9OQ2xpZW50RXJyb3Iuc291cmNlLkNMSUVOVCxcbiAgICAgICAgICAgIGRhdGEgJiYge1xuICAgICAgICAgICAgICAgIC4uLmRhdGEsXG4gICAgICAgICAgICAgICAgc2VuZGluZ1RpbWU6IFRPTkNsaWVudEVycm9yLmZvcm1hdFRpbWUoZGF0YS5zZW5kaW5nVGltZSksXG4gICAgICAgICAgICAgICAgZXhwaXJhdGlvblRpbWU6IFRPTkNsaWVudEVycm9yLmZvcm1hdFRpbWUoZGF0YS5leHBpcmUpLFxuICAgICAgICAgICAgfSxcbiAgICAgICAgKTtcbiAgICB9XG5cbiAgICBzdGF0aWMgdHJhbnNhY3Rpb25XYWl0VGltZW91dChkYXRhOiB7XG4gICAgICAgIG1lc3NhZ2VJZDogc3RyaW5nLFxuICAgICAgICBzZW5kaW5nVGltZTogbnVtYmVyLFxuICAgICAgICB0aW1lb3V0OiBudW1iZXIsXG4gICAgICAgIG1lc3NhZ2VQcm9jZXNzaW5nU3RhdGU/OiBUT05NZXNzYWdlUHJvY2Vzc2luZ1N0YXRlLFxuICAgIH0pIHtcbiAgICAgICAgcmV0dXJuIG5ldyBUT05DbGllbnRFcnJvcihcbiAgICAgICAgICAgICdUcmFuc2FjdGlvbiBkaWQgbm90IHByb2R1Y2VkIGR1cmluZyBzcGVjaWZpZWQgdGltZW91dCcsXG4gICAgICAgICAgICBUT05DbGllbnRFcnJvci5jb2RlLlRSQU5TQUNUSU9OX1dBSVRfVElNRU9VVCxcbiAgICAgICAgICAgIFRPTkNsaWVudEVycm9yLnNvdXJjZS5DTElFTlQsXG4gICAgICAgICAgICBkYXRhICYmIHtcbiAgICAgICAgICAgICAgICAuLi5kYXRhLFxuICAgICAgICAgICAgICAgIHNlbmRpbmdUaW1lOiBUT05DbGllbnRFcnJvci5mb3JtYXRUaW1lKGRhdGEuc2VuZGluZ1RpbWUpLFxuICAgICAgICAgICAgfSxcbiAgICAgICAgKTtcbiAgICB9XG5cbiAgICBzdGF0aWMgY2xvY2tPdXRPZlN5bmMoKSB7XG4gICAgICAgIHJldHVybiBuZXcgVE9OQ2xpZW50RXJyb3IoXG4gICAgICAgICAgICAnWW91IGxvY2FsIGNsb2NrIGlzIG91dCBvZiBzeW5jIHdpdGggdGhlIHNlcnZlciB0aW1lLiAnXG4gICAgICAgICAgICArICdJdCBpcyBhIGNyaXRpY2FsIGNvbmRpdGlvbiBmb3Igc2VuZGluZyBtZXNzYWdlcyB0byB0aGUgYmxvY2tjaGFpbi4gJ1xuICAgICAgICAgICAgKyAnUGxlYXNlIHN5bmMgeW91IGNsb2NrIHdpdGggdGhlIGludGVybmV0IHRpbWUuJyxcbiAgICAgICAgICAgIFRPTkNsaWVudEVycm9yLmNvZGUuQ0xPQ0tfT1VUX09GX1NZTkMsXG4gICAgICAgICAgICBUT05DbGllbnRFcnJvci5zb3VyY2UuQ0xJRU5ULFxuICAgICAgICApO1xuICAgIH1cblxuICAgIHN0YXRpYyBhY2NvdW50TWlzc2luZyhhZGRyZXNzOiBzdHJpbmcpIHtcbiAgICAgICAgcmV0dXJuIG5ldyBUT05DbGllbnRFcnJvcihcbiAgICAgICAgICAgIGBBY2NvdW50IHdpdGggYWRkcmVzcyBbJHthZGRyZXNzfV0gZG9lc24ndCBleGlzdHMuIGBcbiAgICAgICAgICAgICsgJ1lvdSBoYXZlIHRvIHByZXBhaWQgdGhpcyBhY2NvdW50IHRvIGhhdmUgYSBwb3NpdGl2ZSBiYWxhbmNlIG9uIHRoZW0gYW5kIHRoZW4gZGVwbG95ICdcbiAgICAgICAgICAgICsgJ2EgY29udHJhY3QgY29kZSBmb3IgdGhpcyBhY2NvdW50LidcbiAgICAgICAgICAgICsgJ1NlZSBTREsgZG9jdW1lbnRhdGlvbiBmb3IgZGV0YWlsZWQgaW5zdHJ1Y3Rpb25zLicsXG4gICAgICAgICAgICBUT05DbGllbnRFcnJvci5jb2RlLkFDQ09VTlRfTUlTU0lORyxcbiAgICAgICAgICAgIFRPTkNsaWVudEVycm9yLnNvdXJjZS5DTElFTlQsXG4gICAgICAgICk7XG4gICAgfVxuXG4gICAgc3RhdGljIGFjY291bnRDb2RlTWlzc2luZyhhZGRyZXNzOiBzdHJpbmcsIGJhbGFuY2U6IHN0cmluZykge1xuICAgICAgICByZXR1cm4gbmV3IFRPTkNsaWVudEVycm9yKFxuICAgICAgICAgICAgYEFjY291bnQgd2l0aCBhZGRyZXNzIFske2FkZHJlc3N9XSBleGlzdHMgYnV0IGhhdmVuJ3QgYSBjb250cmFjdCBjb2RlIHlldC4gYFxuICAgICAgICAgICAgKyAnWW91IGhhdmUgdG8gZW5zdXJlIHRoYXQgYW4gYWNjb3VudCBoYXMgYW4gZW5vdWdoIGJhbGFuY2UgZm9yIGRlcGxveWluZyAnXG4gICAgICAgICAgICArICdhIGNvbnRyYWN0IGNvZGUgYW5kIHRoZW4gZGVwbG95IGEgY29udHJhY3QgY29kZSBmb3IgdGhpcyBhY2NvdW50LiAnXG4gICAgICAgICAgICArIGBDdXJyZW50IGFjY291bnQgYmFsYW5jZSBpcyBbJHtiYWxhbmNlfV0uIGBcbiAgICAgICAgICAgICsgJ1NlZSBTREsgZG9jdW1lbnRhdGlvbiBmb3IgZGV0YWlsZWQgaW5zdHJ1Y3Rpb25zLicsXG4gICAgICAgICAgICBUT05DbGllbnRFcnJvci5jb2RlLkFDQ09VTlRfQ09ERV9NSVNTSU5HLFxuICAgICAgICAgICAgVE9OQ2xpZW50RXJyb3Iuc291cmNlLkNMSUVOVCxcbiAgICAgICAgKTtcbiAgICB9XG5cbiAgICBzdGF0aWMgYWNjb3VudEJhbGFuY2VUb29Mb3coYWRkcmVzczogc3RyaW5nLCBiYWxhbmNlOiBzdHJpbmcpIHtcbiAgICAgICAgcmV0dXJuIG5ldyBUT05DbGllbnRFcnJvcihcbiAgICAgICAgICAgIGBBY2NvdW50IHdpdGggYWRkcmVzcyBbJHthZGRyZXNzfV0gaGFzIHRvbyBsb3cgYmFsYW5jZSBbJHtiYWxhbmNlfV0uIGBcbiAgICAgICAgICAgICsgJ1lvdSBoYXZlIHRvIHNlbmQgc29tZSB2YWx1ZSB0byBhY2NvdW50IGJhbGFuY2UgZnJvbSBvdGhlciBjb250cmFjdCAnXG4gICAgICAgICAgICArICcoZS5nLiBXYWxsZXQgY29udHJhY3QpLiAnXG4gICAgICAgICAgICArICdTZWUgU0RLIGRvY3VtZW50YXRpb24gZm9yIGRldGFpbGVkIGluc3RydWN0aW9ucy4nLFxuICAgICAgICAgICAgVE9OQ2xpZW50RXJyb3IuY29kZS5BQ0NPVU5UX0JBTEFOQ0VfVE9PX0xPVyxcbiAgICAgICAgICAgIFRPTkNsaWVudEVycm9yLnNvdXJjZS5DTElFTlQsXG4gICAgICAgICk7XG4gICAgfVxuXG4gICAgc3RhdGljIG5vQmxvY2tzKHdvcmtjaGFpbjogbnVtYmVyKSB7XG4gICAgICAgIGNvbnN0IHdvcmtjaGFpbk5hbWUgPSB3b3JrY2hhaW4gPT09IC0xID8gJ21hc3RlcmNoYWluJyA6IGB3b3JrY2hhaW4gJHt3b3JrY2hhaW59YDtcbiAgICAgICAgcmV0dXJuIG5ldyBUT05DbGllbnRFcnJvcihcbiAgICAgICAgICAgIGBcIk5vIGJsb2NrcyBmb3IgJHt3b3JrY2hhaW5OYW1lfSBmb3VuZFwiLmAsXG4gICAgICAgICAgICBUT05FcnJvckNvZGUuTkVUV09SS19TSUxFTlQsXG4gICAgICAgICAgICBUT05FcnJvclNvdXJjZS5DTElFTlQsXG4gICAgICAgICk7XG4gICAgfVxuXG4gICAgc3RhdGljIGludmFsaWRCbG9ja2NoYWluKG1lc3NhZ2U6IHN0cmluZykge1xuICAgICAgICByZXR1cm4gbmV3IFRPTkNsaWVudEVycm9yKG1lc3NhZ2UsIFRPTkVycm9yQ29kZS5ORVRXT1JLX1NJTEVOVCk7XG4gICAgfVxuXG4gICAgc3RhdGljIGlzTWVzc2FnZUV4cGlyZWQoZXJyb3I6IGFueSk6IGJvb2xlYW4ge1xuICAgICAgICByZXR1cm4gVE9OQ2xpZW50RXJyb3IuaXNDbGllbnRFcnJvcihlcnJvciwgVE9OQ2xpZW50RXJyb3IuY29kZS5NRVNTQUdFX0VYUElSRUQpO1xuICAgIH1cblxuICAgIHN0YXRpYyBpc1dhaXRGb3JUaW1lb3V0KGVycm9yOiBhbnkpOiBib29sZWFuIHtcbiAgICAgICAgcmV0dXJuIFRPTkNsaWVudEVycm9yLmlzQ2xpZW50RXJyb3IoZXJyb3IsIFRPTkNsaWVudEVycm9yLmNvZGUuV0FJVF9GT1JfVElNRU9VVCk7XG4gICAgfVxufVxuIl19