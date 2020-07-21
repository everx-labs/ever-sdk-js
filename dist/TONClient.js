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
    value: function isContractError(error, exitCode, originalError) {
      return error.source === TONClientError.source.NODE && error.code === TONClientError.code.CONTRACT_EXECUTION_FAILED && error.data && error.data.exit_code === exitCode && (!originalError || !error.data.original_error);
    }
  }, {
    key: "isResolvedContractErrorAfterExpire",
    value: function isResolvedContractErrorAfterExpire(error, exitCode) {
      return TONClientError.isContractError(error, exitCode, false) && error.data && error.data.original_error && TONClientError.isMessageExpired(error.data.original_error);
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uL3NyYy9UT05DbGllbnQuanMiXSwibmFtZXMiOlsiVE9OQ2xpZW50IiwiY2xpZW50UGxhdGZvcm0iLCJtb2R1bGVzIiwiTWFwIiwiY29uZmlnIiwiZ2V0TW9kdWxlIiwiVE9OQ29uZmlnTW9kdWxlIiwiY3J5cHRvIiwiVE9OQ3J5cHRvTW9kdWxlIiwiY29udHJhY3RzIiwiVE9OQ29udHJhY3RzTW9kdWxlIiwiX3F1ZXJpZXMiLCJUT05RdWVyaWVzTW9kdWxlIiwicXVlcmllcyIsIl9jb250ZXh0IiwiX2NvcmVCcmlkZ2UiLCJ0cnlDcmVhdGVMaWJyYXJ5IiwicGxhdGZvcm0iLCJ1bmRlZmluZWQiLCJjcmVhdGVMaWJyYXJ5IiwiY29yZUxpYnJhcnkiLCJsaWJyYXJ5IiwiY29yZUNyZWF0ZUNvbnRleHQiLCJQcm9taXNlIiwicmVzb2x2ZSIsInJlcXVlc3QiLCJtZXRob2QiLCJwYXJhbXNKc29uIiwib25SZXN1bHQiLCJjb3JlUmVxdWVzdCIsInZhbHVlcyIsIm1vZHVsZSIsInNldHVwIiwiZ2V0VmVyc2lvbiIsIlRPTkNsaWVudEVycm9yIiwiY29yZVZlcnNpb24iLCJjbG9zZSIsImNvbnRleHQiLCJjb3JlRGVzdHJveUNvbnRleHQiLCJNb2R1bGVDbGFzcyIsIm5hbWUiLCJtb2R1bGVOYW1lIiwiZXhpc3RpbmdNb2R1bGUiLCJnZXQiLCJzZXQiLCJzZXJ2ZXJUaW1lRGVsdGEiLCJzZXJ2ZXJOb3ciLCJxdWVyeSIsInJlc3VsdCIsImRhdGEiLCJnZXRNYW5hZ2VtZW50QWNjZXNzS2V5IiwicGFyYW1zIiwic2lnbmVkTWFuYWdlbWVudEFjY2Vzc0tleSIsInNpZ25LZXlzIiwiYWNjb3VudEtleXMiLCJtYW5hZ2VtZW50QWNjZXNzS2V5IiwibmFjbFNpZ24iLCJ0ZXh0Iiwic2VjcmV0IiwiX3Jlc29sdmVTaWduZWRNYW5hZ2VtZW50QWNjZXNzS2V5IiwibXV0YXRpb24iLCJhY2NvdW50Iiwia2V5cyIsInJlZ2lzdGVyQWNjZXNzS2V5cyIsInJldm9rZUFjY2Vzc0tleXMiLCJ0cmFjZUlkIiwic3BhbklkIiwib3BlcmF0aW9uTmFtZSIsInRyYWNlciIsInNwYW4iLCJfc3RhcnRJbnRlcm5hbFNwYW4iLCJjdHgiLCJleHRyYWN0IiwiRk9STUFUX1RFWFRfTUFQIiwiRGF0ZSIsIm5vdyIsInN0YXJ0U3BhbiIsImYiLCJwYXJlbnRTcGFuIiwiY2hpbGRPZiIsInNldFRhZyIsIlRhZ3MiLCJTUEFOX0tJTkQiLCJmaW5pc2giLCJsb2ciLCJldmVudCIsInBheWxvYWQiLCJjbGllbnQiLCJzZXREYXRhIiwiVE9ORXJyb3JTb3VyY2UiLCJDTElFTlQiLCJOT0RFIiwiVE9ORXJyb3JDb2RlIiwiQ0xJRU5UX0RPRVNfTk9UX0NPTkZJR1VSRUQiLCJTRU5EX05PREVfUkVRVUVTVF9GQUlMRUQiLCJNRVNTQUdFX0FMUkVBRFlfRVhQSVJFRCIsIlJVTl9MT0NBTF9BQ0NPVU5UX0RPRVNfTk9UX0VYSVNUUyIsIldBSVRfRk9SX1RJTUVPVVQiLCJJTlRFUk5BTF9FUlJPUiIsIlFVRVJZX0ZBSUxFRCIsIk1FU1NBR0VfRVhQSVJFRCIsIlNFUlZFUl9ET0VTTlRfU1VQUE9SVF9BR0dSRUdBVElPTlMiLCJJTlZBTElEX0NPTlMiLCJBRERSRVNTX1JFUVVJUkVEX0ZPUl9SVU5fTE9DQUwiLCJORVRXT1JLX1NJTEVOVCIsIlRSQU5TQUNUSU9OX0xBRyIsIlRSQU5TQUNUSU9OX1dBSVRfVElNRU9VVCIsIkNMT0NLX09VVF9PRl9TWU5DIiwiQUNDT1VOVF9NSVNTSU5HIiwiQUNDT1VOVF9DT0RFX01JU1NJTkciLCJBQ0NPVU5UX0JBTEFOQ0VfVE9PX0xPVyIsIkFDQ09VTlRfRlJPWkVOX09SX0RFTEVURUQiLCJDT05UUkFDVF9FWEVDVVRJT05fRkFJTEVEIiwiVE9OQ29udHJhY3RFeGl0Q29kZSIsIlJFUExBWV9QUk9URUNUSU9OIiwiTk9fR0FTIiwibWVzc2FnZSIsImNvZGUiLCJzb3VyY2UiLCJlcnJvciIsImV4aXRDb2RlIiwib3JpZ2luYWxFcnJvciIsImV4aXRfY29kZSIsIm9yaWdpbmFsX2Vycm9yIiwiaXNDb250cmFjdEVycm9yIiwiaXNNZXNzYWdlRXhwaXJlZCIsInJlc3BvbnNlVGV4dCIsImZ1bmN0aW9uTmFtZSIsImFkZHJlc3MiLCJlcnJvcnMiLCJtYXAiLCJ4IiwidG9TdHJpbmciLCJqb2luIiwidGltZSIsInRvSVNPU3RyaW5nIiwic2VuZGluZ1RpbWUiLCJmb3JtYXRUaW1lIiwiZXhwaXJhdGlvblRpbWUiLCJleHBpcmUiLCJibG9ja1RpbWUiLCJiYWxhbmNlIiwid29ya2NoYWluIiwid29ya2NoYWluTmFtZSIsImlzQ2xpZW50RXJyb3IiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7OztBQUtBOztBQWNBOztBQUNBOztBQUNBOztBQUVBOztBQU9BOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBcUJBOzs7OztJQUthQSxTOzs7K0JBQ1NDLGMsRUFBbUM7QUFDakRELE1BQUFBLFNBQVMsQ0FBQ0MsY0FBVixHQUEyQkEsY0FBM0I7QUFDSCxLLENBR0Q7Ozs7QUFTQSx1QkFBYztBQUFBOztBQUFBOztBQUFBOztBQUFBOztBQUFBOztBQUFBOztBQUFBOztBQUFBOztBQUFBOztBQUNWLFNBQUtDLE9BQUwsR0FBZSxJQUFJQyxHQUFKLEVBQWY7QUFDQSxTQUFLQyxNQUFMLEdBQWMsS0FBS0MsU0FBTCxDQUFlQywyQkFBZixDQUFkO0FBQ0EsU0FBS0MsTUFBTCxHQUFjLEtBQUtGLFNBQUwsQ0FBZUcsMkJBQWYsQ0FBZDtBQUNBLFNBQUtDLFNBQUwsR0FBaUIsS0FBS0osU0FBTCxDQUFlSyw4QkFBZixDQUFqQjtBQUNBLFNBQUtDLFFBQUwsR0FBZ0IsS0FBS04sU0FBTCxDQUFlTyw0QkFBZixDQUFoQjtBQUNBLFNBQUtDLE9BQUwsR0FBZSxLQUFLRixRQUFwQjtBQUNBLFNBQUtHLFFBQUwsR0FBZ0IsQ0FBaEI7QUFDQSxTQUFLQyxXQUFMLEdBQW1CLElBQW5CO0FBQ0g7QUFFRDs7Ozs7Ozs7OztBQVlBOzs7Ozs7Ozs7Ozs7OztBQUtVQyxnQkFBQUEsZ0I7MEZBQW1C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QUVLMEQsWTs7Z0JBRkwxRCxjLGlCQUdZLEUiLCJzb3VyY2VzQ29udGVudCI6WyIvKlxuICogQ29weXJpZ2h0IDIwMTgtMjAyMCBUT04gREVWIFNPTFVUSU9OUyBMVEQuXG4gKi9cbi8vIEBmbG93XG5cbmltcG9ydCB7XG4gICAgVGFncywgU3BhbiwgU3BhbkNvbnRleHQsIEZPUk1BVF9URVhUX01BUCxcbn0gZnJvbSAnb3BlbnRyYWNpbmcnO1xuaW1wb3J0IHR5cGUge1xuICAgIElUT05DbGllbnQsXG4gICAgVE9OQWNjZXNzS2V5c01hbmFnZW1lbnRQYXJhbXMsXG4gICAgVE9OQ29uZmlnRGF0YSxcbiAgICBUT05Db250cmFjdHMsXG4gICAgVE9OQ3J5cHRvLCBUT05NZXNzYWdlUHJvY2Vzc2luZ1N0YXRlLFxuICAgIFRPTlF1ZXJpZXMsXG4gICAgVE9OUmVnaXN0ZXJBY2Nlc3NLZXlzUGFyYW1zLFxuICAgIFRPTlJldm9rZUFjY2Vzc0tleXNQYXJhbXMsXG59IGZyb20gJy4uL3R5cGVzJztcblxuaW1wb3J0IFRPTkNvbmZpZ01vZHVsZSBmcm9tICcuL21vZHVsZXMvVE9OQ29uZmlnTW9kdWxlJztcbmltcG9ydCBUT05Db250cmFjdHNNb2R1bGUgZnJvbSAnLi9tb2R1bGVzL1RPTkNvbnRyYWN0c01vZHVsZSc7XG5pbXBvcnQgVE9OQ3J5cHRvTW9kdWxlIGZyb20gJy4vbW9kdWxlcy9UT05DcnlwdG9Nb2R1bGUnO1xuLyogZXNsaW50LWRpc2FibGUgY2xhc3MtbWV0aG9kcy11c2UtdGhpcywgbm8tdXNlLWJlZm9yZS1kZWZpbmUgKi9cbmltcG9ydCBUT05RdWVyaWVzTW9kdWxlIGZyb20gJy4vbW9kdWxlcy9UT05RdWVyaWVzTW9kdWxlJztcblxuaW1wb3J0IHR5cGUge1xuICAgIFRPTkNsaWVudENvcmVMaWJyYXJ5LFxuICAgIFRPTkNsaWVudENvcmVCcmlkZ2UsXG4gICAgVE9OTW9kdWxlQ29udGV4dCxcbn0gZnJvbSAnLi9UT05Nb2R1bGUnO1xuaW1wb3J0IHsgVE9OTW9kdWxlIH0gZnJvbSAnLi9UT05Nb2R1bGUnO1xuXG4vKipcbiAqIEphdmFTY3JpcHQgcGxhdGZvcm0gc3BlY2lmaWMgY29uZmlndXJhdGlvblxuICovXG50eXBlIFRPTkNsaWVudFBsYXRmb3JtID0ge1xuICAgIC8qKlxuICAgICAqIFBsYXRmb3JtIHNwZWNpZmljIGBmZXRjaGAgZnVuY3Rpb25cbiAgICAgKi9cbiAgICBmZXRjaDogYW55LFxuICAgIC8qKlxuICAgICAqIFBsYXRmb3JtIHNwZWNpZmljIGBXZWJTb2NrZXRgIGltcGxlbWVudGF0aW9uXG4gICAgICogVGhpcyBpbXBsZW1lbnRhdGlvbiBtdXN0IGNvbmZvcm1zIHRvIFczQyBXZWJTb2NrZXRcbiAgICAgKi9cbiAgICBXZWJTb2NrZXQ6IGFueSxcbiAgICAvKipcbiAgICAgKiBSZXF1ZXN0IGNyZWF0aW9uIG9mIHRoZSBjbGllbnQgY29yZVxuICAgICAqL1xuICAgIGNyZWF0ZUxpYnJhcnk6ICgpID0+IFByb21pc2U8VE9OQ2xpZW50Q29yZUxpYnJhcnk+LFxufTtcblxuLyoqXG4gKiBNYWluIG9iamVjdCBwcm92aWRlZCBmdW5jdGlvbmFsaXR5IG9mIHRoZSBUT04gQ2xpZW50IExpYnJhcnlcbiAqIEVhY2ggaW5zdGFuY2Ugb2YgVE9OQ2xpZW50IGhhcyBvd24gc2V0IG9mIFRPTiBDbGllbnQgbW9kdWxlc1xuICogYW5kIGhhcyBvd24gcHJlY29uZmlndXJlZCBjbGllbnQgY29udGV4dFxuICovXG5leHBvcnQgY2xhc3MgVE9OQ2xpZW50IGltcGxlbWVudHMgVE9OTW9kdWxlQ29udGV4dCwgSVRPTkNsaWVudCB7XG4gICAgc3RhdGljIHNldExpYnJhcnkoY2xpZW50UGxhdGZvcm06IFRPTkNsaWVudFBsYXRmb3JtKSB7XG4gICAgICAgIFRPTkNsaWVudC5jbGllbnRQbGF0Zm9ybSA9IGNsaWVudFBsYXRmb3JtO1xuICAgIH1cblxuXG4gICAgLy8gUHVibGljXG4gICAgY29uZmlnOiBUT05Db25maWdNb2R1bGU7XG4gICAgY3J5cHRvOiBUT05DcnlwdG87XG4gICAgY29udHJhY3RzOiBUT05Db250cmFjdHM7XG4gICAgcXVlcmllczogVE9OUXVlcmllcztcbiAgICBfcXVlcmllczogVE9OUXVlcmllc01vZHVsZTtcbiAgICBfY29udGV4dDogbnVtYmVyO1xuICAgIF9jb3JlQnJpZGdlOiA/VE9OQ2xpZW50Q29yZUJyaWRnZTtcblxuICAgIGNvbnN0cnVjdG9yKCkge1xuICAgICAgICB0aGlzLm1vZHVsZXMgPSBuZXcgTWFwKCk7XG4gICAgICAgIHRoaXMuY29uZmlnID0gdGhpcy5nZXRNb2R1bGUoVE9OQ29uZmlnTW9kdWxlKTtcbiAgICAgICAgdGhpcy5jcnlwdG8gPSB0aGlzLmdldE1vZHVsZShUT05DcnlwdG9Nb2R1bGUpO1xuICAgICAgICB0aGlzLmNvbnRyYWN0cyA9IHRoaXMuZ2V0TW9kdWxlKFRPTkNvbnRyYWN0c01vZHVsZSk7XG4gICAgICAgIHRoaXMuX3F1ZXJpZXMgPSB0aGlzLmdldE1vZHVsZShUT05RdWVyaWVzTW9kdWxlKTtcbiAgICAgICAgdGhpcy5xdWVyaWVzID0gdGhpcy5fcXVlcmllcztcbiAgICAgICAgdGhpcy5fY29udGV4dCA9IDA7XG4gICAgICAgIHRoaXMuX2NvcmVCcmlkZ2UgPSBudWxsO1xuICAgIH1cblxuICAgIC8qKlxuICAgICAqIENvbnZlbmllbnQgd2F5IHRvIGNyZWF0ZSBjb25maWd1cmVkIGluc3RhbmNlIG9mIHRoZSBUT04gQ2xpZW50XG4gICAgICogQHBhcmFtIHtUT05Db25maWdEYXRhfSBjb25maWdcbiAgICAgKiBAcmV0dXJuIHtQcm9taXNlPFRPTkNsaWVudD59XG4gICAgICovXG4gICAgc3RhdGljIGFzeW5jIGNyZWF0ZShjb25maWc6IFRPTkNvbmZpZ0RhdGEpOiBQcm9taXNlPFRPTkNsaWVudD4ge1xuICAgICAgICBjb25zdCBjbGllbnQgPSBuZXcgVE9OQ2xpZW50KCk7XG4gICAgICAgIGNsaWVudC5jb25maWcuc2V0RGF0YShjb25maWcpO1xuICAgICAgICBhd2FpdCBjbGllbnQuc2V0dXAoKTtcbiAgICAgICAgcmV0dXJuIGNsaWVudDtcbiAgICB9XG5cbiAgICAvKipcbiAgICAgKiBTZXQgdXAgdGhlIGNsaWVudCBpbnN0YW5jZVxuICAgICAqIEByZXR1cm4ge1Byb21pc2U8dm9pZD59XG4gICAgICovXG4gICAgYXN5bmMgc2V0dXAoKTogUHJvbWlzZTx2b2lkPiB7XG4gICAgICAgIGNvbnN0IHRyeUNyZWF0ZUxpYnJhcnkgPSBhc3luYyAoKSA9PiB7XG4gICAgICAgICAgICBjb25zdCBwbGF0Zm9ybSA9IFRPTkNsaWVudC5jbGllbnRQbGF0Zm9ybTtcbiAgICAgICAgICAgIGlmIChwbGF0Zm9ybSA9PT0gbnVsbCB8fCBwbGF0Zm9ybSA9PT0gdW5kZWZpbmVkKSB7XG4gICAgICAgICAgICAgICAgcmV0dXJuIG51bGw7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBUT05DbGllbnQuY29yZUxpYnJhcnkgPSBhd2FpdCBwbGF0Zm9ybS5jcmVhdGVMaWJyYXJ5KCk7XG4gICAgICAgICAgICByZXR1cm4gVE9OQ2xpZW50LmNvcmVMaWJyYXJ5O1xuICAgICAgICB9O1xuICAgICAgICBjb25zdCBsaWJyYXJ5ID0gVE9OQ2xpZW50LmNvcmVMaWJyYXJ5IHx8IGF3YWl0IHRyeUNyZWF0ZUxpYnJhcnkoKTtcbiAgICAgICAgaWYgKCFsaWJyYXJ5KSB7XG4gICAgICAgICAgICByZXR1cm47XG4gICAgICAgIH1cbiAgICAgICAgaWYgKHRoaXMuX2NvcmVCcmlkZ2UgPT09IG51bGwgfHwgdGhpcy5fY29yZUJyaWRnZSA9PT0gdW5kZWZpbmVkKSB7XG4gICAgICAgICAgICBpZiAobGlicmFyeS5jb3JlQ3JlYXRlQ29udGV4dCkge1xuICAgICAgICAgICAgICAgIHRoaXMuX2NvbnRleHQgPSBhd2FpdCBuZXcgUHJvbWlzZSgocmVzb2x2ZSkgPT4gbGlicmFyeS5jb3JlQ3JlYXRlQ29udGV4dChyZXNvbHZlKSk7XG4gICAgICAgICAgICAgICAgdGhpcy5fY29yZUJyaWRnZSA9IHtcbiAgICAgICAgICAgICAgICAgICAgcmVxdWVzdDogKFxuICAgICAgICAgICAgICAgICAgICAgICAgbWV0aG9kOiBzdHJpbmcsXG4gICAgICAgICAgICAgICAgICAgICAgICBwYXJhbXNKc29uOiBzdHJpbmcsXG4gICAgICAgICAgICAgICAgICAgICAgICBvblJlc3VsdDogKHJlc3VsdEpzb246IHN0cmluZywgZXJyb3JKc29uOiBzdHJpbmcpID0+IHZvaWQsXG4gICAgICAgICAgICAgICAgICAgICk6IHZvaWQgPT4ge1xuICAgICAgICAgICAgICAgICAgICAgICAgaWYgKFRPTkNsaWVudC5jb3JlTGlicmFyeSkge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIFRPTkNsaWVudC5jb3JlTGlicmFyeS5jb3JlUmVxdWVzdChcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5fY29udGV4dCxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgbWV0aG9kLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBwYXJhbXNKc29uLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBvblJlc3VsdCxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICApO1xuICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgIH07XG4gICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAgIHRoaXMuX2NvcmVCcmlkZ2UgPSBsaWJyYXJ5O1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICAgIGNvbnN0IG1vZHVsZXM6IFRPTk1vZHVsZVtdID0gWy4uLnRoaXMubW9kdWxlcy52YWx1ZXMoKV07XG4gICAgICAgIGZvciAoY29uc3QgbW9kdWxlIG9mIG1vZHVsZXMpIHtcbiAgICAgICAgICAgIGF3YWl0IG1vZHVsZS5zZXR1cCgpO1xuICAgICAgICB9XG4gICAgICAgIFRPTkNsaWVudEVycm9yLmNvcmVWZXJzaW9uID0gYXdhaXQgdGhpcy5jb25maWcuZ2V0VmVyc2lvbigpO1xuICAgIH1cblxuICAgIC8qKlxuICAgICAqIFRlYXIgZG93biB0aGlzIGNsaWVudCBpbnN0YW5jZS5cbiAgICAgKiBOb3RlIHRoYXQgYWZ0ZXIgeW91IGhhdmUgY2FsbGVkIHRoaXMgbWV0aG9kIGFsbCBmdXR1cmUgdXNlIG9mIHRoaXMgaW5zdGFuY2Ugd2lsbCBmYWlsXG4gICAgICogQHJldHVybiB7UHJvbWlzZTx2b2lkPn1cbiAgICAgKi9cbiAgICBhc3luYyBjbG9zZSgpOiBQcm9taXNlPHZvaWQ+IHtcbiAgICAgICAgYXdhaXQgdGhpcy5xdWVyaWVzLmNsb3NlKCk7XG4gICAgICAgIGNvbnN0IGxpYnJhcnkgPSBUT05DbGllbnQuY29yZUxpYnJhcnk7XG4gICAgICAgIGlmICh0aGlzLl9jb250ZXh0ID4gMCAmJiBsaWJyYXJ5ICE9PSBudWxsICYmIGxpYnJhcnkgIT09IHVuZGVmaW5lZCkge1xuICAgICAgICAgICAgY29uc3QgY29udGV4dCA9IHRoaXMuX2NvbnRleHQ7XG4gICAgICAgICAgICB0aGlzLl9jb3JlQnJpZGdlID0gbnVsbDtcbiAgICAgICAgICAgIHRoaXMuX2NvbnRleHQgPSAwO1xuICAgICAgICAgICAgYXdhaXQgbmV3IFByb21pc2UocmVzb2x2ZSA9PiBsaWJyYXJ5LmNvcmVEZXN0cm95Q29udGV4dChjb250ZXh0LCByZXNvbHZlKSk7XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICAvLyBUT05Nb2R1bGVDb250ZXh0XG5cbiAgICBnZXRDb3JlQnJpZGdlKCk6ID9UT05DbGllbnRDb3JlQnJpZGdlIHtcbiAgICAgICAgcmV0dXJuIHRoaXMuX2NvcmVCcmlkZ2U7XG4gICAgfVxuXG4gICAgZ2V0TW9kdWxlPFQ+KE1vZHVsZUNsYXNzOiB0eXBlb2YgVE9OTW9kdWxlKTogVCB7XG4gICAgICAgIGNvbnN0IG5hbWUgPSBNb2R1bGVDbGFzcy5tb2R1bGVOYW1lO1xuICAgICAgICBjb25zdCBleGlzdGluZ01vZHVsZSA9IHRoaXMubW9kdWxlcy5nZXQobmFtZSk7XG4gICAgICAgIGlmIChleGlzdGluZ01vZHVsZSkge1xuICAgICAgICAgICAgcmV0dXJuIChleGlzdGluZ01vZHVsZTogYW55KTtcbiAgICAgICAgfVxuICAgICAgICBjb25zdCBtb2R1bGUgPSBuZXcgTW9kdWxlQ2xhc3ModGhpcyk7XG4gICAgICAgIHRoaXMubW9kdWxlcy5zZXQobmFtZSwgbW9kdWxlKTtcbiAgICAgICAgcmV0dXJuIChtb2R1bGU6IGFueSk7XG4gICAgfVxuXG4gICAgc2VydmVyVGltZURlbHRhKCk6IFByb21pc2U8bnVtYmVyPiB7XG4gICAgICAgIHJldHVybiB0aGlzLl9xdWVyaWVzLnNlcnZlclRpbWVEZWx0YSgpO1xuICAgIH1cblxuICAgIHNlcnZlck5vdygpOiBQcm9taXNlPG51bWJlcj4ge1xuICAgICAgICByZXR1cm4gdGhpcy5fcXVlcmllcy5zZXJ2ZXJOb3coKTtcbiAgICB9XG5cbiAgICBhc3luYyBnZXRNYW5hZ2VtZW50QWNjZXNzS2V5KCk6IFByb21pc2U8c3RyaW5nPiB7XG4gICAgICAgIGNvbnN0IHJlc3VsdCA9IGF3YWl0IHRoaXMuX3F1ZXJpZXMucXVlcnkoJ3F1ZXJ5e2dldE1hbmFnZW1lbnRBY2Nlc3NLZXl9Jyk7XG4gICAgICAgIHJldHVybiByZXN1bHQuZGF0YS5nZXRNYW5hZ2VtZW50QWNjZXNzS2V5O1xuICAgIH1cblxuXG4gICAgYXN5bmMgX3Jlc29sdmVTaWduZWRNYW5hZ2VtZW50QWNjZXNzS2V5KFxuICAgICAgICBwYXJhbXM6IFRPTkFjY2Vzc0tleXNNYW5hZ2VtZW50UGFyYW1zLFxuICAgICk6IFByb21pc2U8c3RyaW5nPiB7XG4gICAgICAgIGlmIChwYXJhbXMuc2lnbmVkTWFuYWdlbWVudEFjY2Vzc0tleSkge1xuICAgICAgICAgICAgcmV0dXJuIHBhcmFtcy5zaWduZWRNYW5hZ2VtZW50QWNjZXNzS2V5O1xuICAgICAgICB9XG4gICAgICAgIGNvbnN0IHNpZ25LZXlzID0gcGFyYW1zLmFjY291bnRLZXlzO1xuICAgICAgICBpZiAoc2lnbktleXMpIHtcbiAgICAgICAgICAgIGNvbnN0IG1hbmFnZW1lbnRBY2Nlc3NLZXkgPSBhd2FpdCB0aGlzLmdldE1hbmFnZW1lbnRBY2Nlc3NLZXkoKTtcbiAgICAgICAgICAgIHJldHVybiB0aGlzLmNyeXB0by5uYWNsU2lnbihcbiAgICAgICAgICAgICAgICB7IHRleHQ6IG1hbmFnZW1lbnRBY2Nlc3NLZXkgfSxcbiAgICAgICAgICAgICAgICBgJHtzaWduS2V5cy5zZWNyZXR9JHtzaWduS2V5cy5wdWJsaWN9YCxcbiAgICAgICAgICAgICAgICAnSGV4JyxcbiAgICAgICAgICAgICk7XG4gICAgICAgIH1cbiAgICAgICAgcmV0dXJuICcnO1xuICAgIH1cblxuICAgIGFzeW5jIHJlZ2lzdGVyQWNjZXNzS2V5cyhcbiAgICAgICAgcGFyYW1zOiBUT05SZWdpc3RlckFjY2Vzc0tleXNQYXJhbXMsXG4gICAgKTogUHJvbWlzZTxudW1iZXI+IHtcbiAgICAgICAgY29uc3Qgc2lnbmVkTWFuYWdlbWVudEFjY2Vzc0tleSA9IGF3YWl0IHRoaXMuX3Jlc29sdmVTaWduZWRNYW5hZ2VtZW50QWNjZXNzS2V5KHBhcmFtcyk7XG4gICAgICAgIGNvbnN0IHJlc3VsdCA9IGF3YWl0IHRoaXMuX3F1ZXJpZXMubXV0YXRpb24oXG4gICAgICAgICAgICBgbXV0YXRpb24gcmVnaXN0ZXJBY2Nlc3NLZXlzKCRhY2NvdW50OiBTdHJpbmcsICRrZXlzOiBbQWNjZXNzS2V5XSwgJHNpZ25lZE1hbmFnZW1lbnRBY2Nlc3NLZXk6IFN0cmluZykge1xuICAgICAgICAgICAgICAgICAgICByZWdpc3RlckFjY2Vzc0tleXMoYWNjb3VudDogJGFjY291bnQsIGtleXM6ICRrZXlzLCBzaWduZWRNYW5hZ2VtZW50QWNjZXNzS2V5OiAkc2lnbmVkTWFuYWdlbWVudEFjY2Vzc0tleSlcbiAgICAgICAgICAgICAgICB9YCwge1xuICAgICAgICAgICAgICAgIGFjY291bnQ6IHBhcmFtcy5hY2NvdW50LFxuICAgICAgICAgICAgICAgIGtleXM6IHBhcmFtcy5rZXlzLFxuICAgICAgICAgICAgICAgIHNpZ25lZE1hbmFnZW1lbnRBY2Nlc3NLZXksXG4gICAgICAgICAgICB9LFxuICAgICAgICApO1xuICAgICAgICByZXR1cm4gcmVzdWx0LmRhdGEucmVnaXN0ZXJBY2Nlc3NLZXlzO1xuICAgIH1cblxuICAgIGFzeW5jIHJldm9rZUFjY2Vzc0tleXMoXG4gICAgICAgIHBhcmFtczogVE9OUmV2b2tlQWNjZXNzS2V5c1BhcmFtcyxcbiAgICApOiBQcm9taXNlPG51bWJlcj4ge1xuICAgICAgICBjb25zdCBzaWduZWRNYW5hZ2VtZW50QWNjZXNzS2V5ID0gYXdhaXQgdGhpcy5fcmVzb2x2ZVNpZ25lZE1hbmFnZW1lbnRBY2Nlc3NLZXkocGFyYW1zKTtcbiAgICAgICAgY29uc3QgcmVzdWx0ID0gYXdhaXQgdGhpcy5fcXVlcmllcy5tdXRhdGlvbihcbiAgICAgICAgICAgIGBtdXRhdGlvbiByZXZva2VBY2Nlc3NLZXlzKCRhY2NvdW50OiBTdHJpbmcsICRrZXlzOiBbU3RyaW5nXSwgJHNpZ25lZE1hbmFnZW1lbnRBY2Nlc3NLZXk6IFN0cmluZykge1xuICAgICAgICAgICAgICAgICAgICByZXZva2VBY2Nlc3NLZXlzKGFjY291bnQ6ICRhY2NvdW50LCBrZXlzOiAka2V5cywgc2lnbmVkTWFuYWdlbWVudEFjY2Vzc0tleTogJHNpZ25lZE1hbmFnZW1lbnRBY2Nlc3NLZXkpXG4gICAgICAgICAgICAgICAgfWAsIHtcbiAgICAgICAgICAgICAgICBhY2NvdW50OiBwYXJhbXMuYWNjb3VudCxcbiAgICAgICAgICAgICAgICBrZXlzOiBwYXJhbXMua2V5cyxcbiAgICAgICAgICAgICAgICBzaWduZWRNYW5hZ2VtZW50QWNjZXNzS2V5LFxuICAgICAgICAgICAgfSxcbiAgICAgICAgKTtcbiAgICAgICAgcmV0dXJuIHJlc3VsdC5kYXRhLnJldm9rZUFjY2Vzc0tleXM7XG4gICAgfVxuXG4gICAgc3RhcnRSb290U3Bhbih0cmFjZUlkOiBzdHJpbmcsIHNwYW5JZDogc3RyaW5nLCBvcGVyYXRpb25OYW1lOiBzdHJpbmcpOiBTcGFuIHtcbiAgICAgICAgY29uc3QgdHJhY2VyID0gdGhpcy5jb25maWcudHJhY2VyO1xuICAgICAgICBsZXQgc3BhbjogP1NwYW4gPSBudWxsO1xuICAgICAgICBpZiAodHJhY2VyLl9zdGFydEludGVybmFsU3Bhbikge1xuICAgICAgICAgICAgdHJ5IHtcbiAgICAgICAgICAgICAgICBjb25zdCBjdHggPSB0cmFjZXIuZXh0cmFjdChGT1JNQVRfVEVYVF9NQVAsIHtcbiAgICAgICAgICAgICAgICAgICAgJ3ViZXItdHJhY2UtaWQnOiBgJHt0cmFjZUlkfToke3NwYW5JZH06MDoxYCxcbiAgICAgICAgICAgICAgICB9KTtcbiAgICAgICAgICAgICAgICBpZiAoY3R4KSB7XG4gICAgICAgICAgICAgICAgICAgIHNwYW4gPSB0aGlzLmNvbmZpZy50cmFjZXIuX3N0YXJ0SW50ZXJuYWxTcGFuKFxuICAgICAgICAgICAgICAgICAgICAgICAgY3R4LFxuICAgICAgICAgICAgICAgICAgICAgICAgb3BlcmF0aW9uTmFtZSxcbiAgICAgICAgICAgICAgICAgICAgICAgIERhdGUubm93KCksIC8vIHN0YXJ0VGltZVxuICAgICAgICAgICAgICAgICAgICAgICAgdW5kZWZpbmVkLCAvLyB1c2VyVGFnc1xuICAgICAgICAgICAgICAgICAgICAgICAge30sIC8vIGludGVybmFsVGFnc1xuICAgICAgICAgICAgICAgICAgICAgICAgW10sIC8vIHJlZmVyZW5jZXNcbiAgICAgICAgICAgICAgICAgICAgICAgIGZhbHNlLCAvLyBoYXNWYWxpZFBhcmVudFxuICAgICAgICAgICAgICAgICAgICAgICAgZmFsc2UsIC8vIGlzUnBjU2VydmVyXG4gICAgICAgICAgICAgICAgICAgICk7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfSBjYXRjaCB7XG4gICAgICAgICAgICAgICAgLy8gdHJhY2VyIGNhbid0IGNyZWF0ZSBtZXNzYWdlIHNwYW4gdXNpbmcgcHJpdmF0ZSBtZXRob2QsXG4gICAgICAgICAgICAgICAgLy8gc28gd2UgYXJlIGZhbGxiYWNrIHRvIGNyZWF0ZSBzcGFuIHVzaW5nIHJlZ3VsYXIgbWV0aG9kXG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgICAgcmV0dXJuIHNwYW4gfHwgdHJhY2VyLnN0YXJ0U3BhbihvcGVyYXRpb25OYW1lKTtcbiAgICB9XG5cbiAgICBhc3luYyB0cmFjZTxUPihcbiAgICAgICAgbmFtZTogc3RyaW5nLFxuICAgICAgICBmOiAoc3BhbjogU3BhbikgPT4gUHJvbWlzZTxUPixcbiAgICAgICAgcGFyZW50U3Bhbj86IChTcGFuIHwgU3BhbkNvbnRleHQpLFxuICAgICk6IFByb21pc2U8VD4ge1xuICAgICAgICBjb25zdCBzcGFuID0gdGhpcy5jb25maWcudHJhY2VyLnN0YXJ0U3BhbihuYW1lLCB7IGNoaWxkT2Y6IHBhcmVudFNwYW4gfSk7XG4gICAgICAgIHRyeSB7XG4gICAgICAgICAgICBzcGFuLnNldFRhZyhUYWdzLlNQQU5fS0lORCwgJ2NsaWVudCcpO1xuICAgICAgICAgICAgY29uc3QgcmVzdWx0ID0gYXdhaXQgZihzcGFuKTtcbiAgICAgICAgICAgIGlmIChyZXN1bHQgIT09IHVuZGVmaW5lZCkge1xuICAgICAgICAgICAgICAgIHNwYW4uc2V0VGFnKCdyZXN1bHQnLCByZXN1bHQpO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgc3Bhbi5maW5pc2goKTtcbiAgICAgICAgICAgIHJldHVybiByZXN1bHQ7XG4gICAgICAgIH0gY2F0Y2ggKGVycm9yKSB7XG4gICAgICAgICAgICBzcGFuLmxvZyh7XG4gICAgICAgICAgICAgICAgZXZlbnQ6ICdmYWlsZWQnLFxuICAgICAgICAgICAgICAgIHBheWxvYWQ6IGVycm9yLFxuICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICBzcGFuLmZpbmlzaCgpO1xuICAgICAgICAgICAgdGhyb3cgZXJyb3I7XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICAvLyBJbnRlcm5hbHNcblxuICAgIHN0YXRpYyBjbGllbnRQbGF0Zm9ybTogP1RPTkNsaWVudFBsYXRmb3JtID0gbnVsbDtcbiAgICBzdGF0aWMgY29yZUxpYnJhcnk6ID9UT05DbGllbnRDb3JlTGlicmFyeSA9IG51bGw7XG5cbiAgICBtb2R1bGVzOiBNYXA8c3RyaW5nLCBUT05Nb2R1bGU+O1xufVxuXG5cbmV4cG9ydCBjb25zdCBUT05FcnJvclNvdXJjZSA9IHtcbiAgICBDTElFTlQ6ICdjbGllbnQnLFxuICAgIE5PREU6ICdub2RlJyxcbn07XG5cbmV4cG9ydCBjb25zdCBUT05FcnJvckNvZGUgPSB7XG4gICAgQ0xJRU5UX0RPRVNfTk9UX0NPTkZJR1VSRUQ6IDEwMDAsXG4gICAgU0VORF9OT0RFX1JFUVVFU1RfRkFJTEVEOiAxMDAxLFxuICAgIE1FU1NBR0VfQUxSRUFEWV9FWFBJUkVEOiAxMDAxLFxuICAgIFJVTl9MT0NBTF9BQ0NPVU5UX0RPRVNfTk9UX0VYSVNUUzogMTAwMixcbiAgICBXQUlUX0ZPUl9USU1FT1VUOiAxMDAzLFxuICAgIElOVEVSTkFMX0VSUk9SOiAxMDA0LFxuICAgIFFVRVJZX0ZBSUxFRDogMTAwNSxcbiAgICBNRVNTQUdFX0VYUElSRUQ6IDEwMDYsXG4gICAgU0VSVkVSX0RPRVNOVF9TVVBQT1JUX0FHR1JFR0FUSU9OUzogMTAwNyxcbiAgICBJTlZBTElEX0NPTlM6IDEwMDgsXG4gICAgQUREUkVTU19SRVFVSVJFRF9GT1JfUlVOX0xPQ0FMOiAxMDA5LFxuICAgIE5FVFdPUktfU0lMRU5UOiAxMDEwLFxuICAgIFRSQU5TQUNUSU9OX0xBRzogMTAxMSxcbiAgICBUUkFOU0FDVElPTl9XQUlUX1RJTUVPVVQ6IDEwMTIsXG4gICAgQ0xPQ0tfT1VUX09GX1NZTkM6IDEwMTMsXG4gICAgQUNDT1VOVF9NSVNTSU5HOiAxMDE0LFxuICAgIEFDQ09VTlRfQ09ERV9NSVNTSU5HOiAxMDE1LFxuICAgIEFDQ09VTlRfQkFMQU5DRV9UT09fTE9XOiAxMDE2LFxuICAgIEFDQ09VTlRfRlJPWkVOX09SX0RFTEVURUQ6IDEwMTcsXG5cbiAgICAvLyBDb250cmFjdHNcblxuICAgIENPTlRSQUNUX0VYRUNVVElPTl9GQUlMRUQ6IDMwMjUsXG59O1xuXG5leHBvcnQgY29uc3QgVE9OQ29udHJhY3RFeGl0Q29kZSA9IHtcbiAgICBSRVBMQVlfUFJPVEVDVElPTjogNTIsXG4gICAgTUVTU0FHRV9FWFBJUkVEOiA1NyxcbiAgICBOT19HQVM6IDEzLFxufTtcblxuZXhwb3J0IGNsYXNzIFRPTkNsaWVudEVycm9yIHtcbiAgICBzdGF0aWMgc291cmNlID0gVE9ORXJyb3JTb3VyY2U7XG4gICAgc3RhdGljIGNvZGUgPSBUT05FcnJvckNvZGU7XG4gICAgc3RhdGljIGNvcmVWZXJzaW9uID0gJyc7XG5cblxuICAgIG1lc3NhZ2U6IHN0cmluZztcbiAgICBzb3VyY2U6IHN0cmluZztcbiAgICBjb2RlOiBudW1iZXI7XG4gICAgZGF0YTogYW55O1xuICAgIGNvcmVWZXJzaW9uOiBzdHJpbmc7XG5cbiAgICBjb25zdHJ1Y3RvcihtZXNzYWdlOiBzdHJpbmcsIGNvZGU6IG51bWJlciwgc291cmNlPzogc3RyaW5nLCBkYXRhPzogYW55KSB7XG4gICAgICAgIHRoaXMubWVzc2FnZSA9IG1lc3NhZ2U7XG4gICAgICAgIHRoaXMuY29kZSA9IGNvZGU7XG4gICAgICAgIHRoaXMuc291cmNlID0gc291cmNlIHx8IFRPTkVycm9yU291cmNlLkNMSUVOVDtcbiAgICAgICAgdGhpcy5jb3JlVmVyc2lvbiA9IFRPTkNsaWVudEVycm9yLmNvcmVWZXJzaW9uO1xuICAgICAgICB0aGlzLmRhdGEgPSBkYXRhO1xuICAgIH1cblxuICAgIHN0YXRpYyBpc0NsaWVudEVycm9yKGVycm9yOiBhbnksIGNvZGU6IG51bWJlcik6IGJvb2xlYW4ge1xuICAgICAgICByZXR1cm4gKGVycm9yLnNvdXJjZSA9PT0gVE9OQ2xpZW50RXJyb3Iuc291cmNlLkNMSUVOVClcbiAgICAgICAgICAgICYmIChlcnJvci5jb2RlID09PSBjb2RlKTtcbiAgICB9XG5cbiAgICBzdGF0aWMgaXNOb2RlRXJyb3IoZXJyb3I6IGFueSwgY29kZTogbnVtYmVyKTogYm9vbGVhbiB7XG4gICAgICAgIHJldHVybiAoZXJyb3Iuc291cmNlID09PSBUT05DbGllbnRFcnJvci5zb3VyY2UuTk9ERSlcbiAgICAgICAgICAgICYmIChlcnJvci5jb2RlID09PSBjb2RlKTtcbiAgICB9XG5cbiAgICBzdGF0aWMgaXNDb250cmFjdEVycm9yKGVycm9yOiBhbnksIGV4aXRDb2RlOiBudW1iZXIsIG9yaWdpbmFsRXJyb3I6IGJvb2xlYW4pOiBib29sZWFuIHtcbiAgICAgICAgcmV0dXJuIChlcnJvci5zb3VyY2UgPT09IFRPTkNsaWVudEVycm9yLnNvdXJjZS5OT0RFKVxuICAgICAgICAgICAgJiYgKGVycm9yLmNvZGUgPT09IFRPTkNsaWVudEVycm9yLmNvZGUuQ09OVFJBQ1RfRVhFQ1VUSU9OX0ZBSUxFRClcbiAgICAgICAgICAgICYmIChlcnJvci5kYXRhICYmIGVycm9yLmRhdGEuZXhpdF9jb2RlID09PSBleGl0Q29kZSlcbiAgICAgICAgICAgICYmICghb3JpZ2luYWxFcnJvciB8fCAhZXJyb3IuZGF0YS5vcmlnaW5hbF9lcnJvcik7XG4gICAgfVxuXG4gICAgc3RhdGljIGlzUmVzb2x2ZWRDb250cmFjdEVycm9yQWZ0ZXJFeHBpcmUoZXJyb3I6IGFueSwgZXhpdENvZGU6IG51bWJlcik6IGJvb2xlYW4ge1xuICAgICAgICByZXR1cm4gVE9OQ2xpZW50RXJyb3IuaXNDb250cmFjdEVycm9yKGVycm9yLCBleGl0Q29kZSwgZmFsc2UpXG4gICAgICAgICAgICAmJiAoZXJyb3IuZGF0YSAmJiBlcnJvci5kYXRhLm9yaWdpbmFsX2Vycm9yXG4gICAgICAgICAgICAgICAgJiYgVE9OQ2xpZW50RXJyb3IuaXNNZXNzYWdlRXhwaXJlZChlcnJvci5kYXRhLm9yaWdpbmFsX2Vycm9yKSk7XG4gICAgfVxuXG4gICAgc3RhdGljIGludGVybmFsRXJyb3IobWVzc2FnZTogc3RyaW5nKTogVE9OQ2xpZW50RXJyb3Ige1xuICAgICAgICByZXR1cm4gbmV3IFRPTkNsaWVudEVycm9yKFxuICAgICAgICAgICAgYEludGVybmFsIGVycm9yOiAke21lc3NhZ2V9YCxcbiAgICAgICAgICAgIFRPTkNsaWVudEVycm9yLmNvZGUuSU5URVJOQUxfRVJST1IsXG4gICAgICAgICAgICBUT05DbGllbnRFcnJvci5zb3VyY2UuQ0xJRU5ULFxuICAgICAgICApO1xuICAgIH1cblxuICAgIHN0YXRpYyBpbnZhbGlkQ29ucygpOiBUT05DbGllbnRFcnJvciB7XG4gICAgICAgIHJldHVybiBuZXcgVE9OQ2xpZW50RXJyb3IoXG4gICAgICAgICAgICAnSW52YWxpZCBDT05TIHN0cnVjdHVyZS4gRWFjaCBDT05TIGl0ZW0gbXVzdCBjb250YWlucyBvZiB0d28gZWxlbWVudHMuJyxcbiAgICAgICAgICAgIFRPTkNsaWVudEVycm9yLmNvZGUuSU5WQUxJRF9DT05TLFxuICAgICAgICAgICAgVE9OQ2xpZW50RXJyb3Iuc291cmNlLkNMSUVOVCxcbiAgICAgICAgKTtcbiAgICB9XG5cbiAgICBzdGF0aWMgY2xpZW50RG9lc05vdENvbmZpZ3VyZWQoKTogVE9OQ2xpZW50RXJyb3Ige1xuICAgICAgICByZXR1cm4gbmV3IFRPTkNsaWVudEVycm9yKFxuICAgICAgICAgICAgJ1RPTiBDbGllbnQgaXNuXFwndCBjb25maWd1cmVkJyxcbiAgICAgICAgICAgIFRPTkNsaWVudEVycm9yLmNvZGUuQ0xJRU5UX0RPRVNfTk9UX0NPTkZJR1VSRUQsXG4gICAgICAgICAgICBUT05DbGllbnRFcnJvci5zb3VyY2UuQ0xJRU5ULFxuICAgICAgICApO1xuICAgIH1cblxuICAgIHN0YXRpYyBzZW5kTm9kZVJlcXVlc3RGYWlsZWQocmVzcG9uc2VUZXh0OiBzdHJpbmcpOiBUT05DbGllbnRFcnJvciB7XG4gICAgICAgIHJldHVybiBuZXcgVE9OQ2xpZW50RXJyb3IoXG4gICAgICAgICAgICBgU2VuZCBub2RlIHJlcXVlc3QgZmFpbGVkOiAke3Jlc3BvbnNlVGV4dH1gLFxuICAgICAgICAgICAgVE9OQ2xpZW50RXJyb3IuY29kZS5TRU5EX05PREVfUkVRVUVTVF9GQUlMRUQsXG4gICAgICAgICAgICBUT05DbGllbnRFcnJvci5zb3VyY2UuQ0xJRU5ULFxuICAgICAgICApO1xuICAgIH1cblxuICAgIHN0YXRpYyBydW5Mb2NhbEFjY291bnREb2VzTm90RXhpc3RzKGZ1bmN0aW9uTmFtZTogc3RyaW5nLCBhZGRyZXNzOiBzdHJpbmcpOiBUT05DbGllbnRFcnJvciB7XG4gICAgICAgIHJldHVybiBuZXcgVE9OQ2xpZW50RXJyb3IoXG4gICAgICAgICAgICBgWyR7ZnVuY3Rpb25OYW1lfV0gcnVuIGxvY2FsIGZhaWxlZDogYWNjb3VudCBbJHthZGRyZXNzfV0gZG9lcyBub3QgZXhpc3RzYCxcbiAgICAgICAgICAgIFRPTkNsaWVudEVycm9yLmNvZGUuUlVOX0xPQ0FMX0FDQ09VTlRfRE9FU19OT1RfRVhJU1RTLFxuICAgICAgICAgICAgVE9OQ2xpZW50RXJyb3Iuc291cmNlLkNMSUVOVCxcbiAgICAgICAgKTtcbiAgICB9XG5cbiAgICBzdGF0aWMgd2FpdEZvclRpbWVvdXQoKSB7XG4gICAgICAgIHJldHVybiBuZXcgVE9OQ2xpZW50RXJyb3IoXG4gICAgICAgICAgICAnV2FpdCBmb3Igb3BlcmF0aW9uIHJlamVjdGVkIG9uIHRpbWVvdXQnLFxuICAgICAgICAgICAgVE9OQ2xpZW50RXJyb3IuY29kZS5XQUlUX0ZPUl9USU1FT1VULFxuICAgICAgICAgICAgVE9OQ2xpZW50RXJyb3Iuc291cmNlLkNMSUVOVCxcbiAgICAgICAgKTtcbiAgICB9XG5cbiAgICBzdGF0aWMgcXVlcnlGYWlsZWQoZXJyb3JzOiBFcnJvcltdKSB7XG4gICAgICAgIHJldHVybiBuZXcgVE9OQ2xpZW50RXJyb3IoXG4gICAgICAgICAgICBgUXVlcnkgZmFpbGVkOiAke2Vycm9ycy5tYXAoeCA9PiB4Lm1lc3NhZ2UgfHwgeC50b1N0cmluZygpKS5qb2luKCdcXG4nKX1gLFxuICAgICAgICAgICAgVE9OQ2xpZW50RXJyb3IuY29kZS5RVUVSWV9GQUlMRUQsXG4gICAgICAgICAgICBUT05DbGllbnRFcnJvci5zb3VyY2UuQ0xJRU5ULFxuICAgICAgICApO1xuICAgIH1cblxuICAgIHN0YXRpYyBmb3JtYXRUaW1lKHRpbWU6ID9udW1iZXIpOiA/c3RyaW5nIHtcbiAgICAgICAgaWYgKHRpbWUpIHtcbiAgICAgICAgICAgIHJldHVybiBgJHtuZXcgRGF0ZSh0aW1lICogMTAwMCkudG9JU09TdHJpbmcoKX0gKCR7dGltZX0pYDtcbiAgICAgICAgfVxuICAgICAgICByZXR1cm4gbnVsbDtcbiAgICB9XG5cbiAgICBzdGF0aWMgbWVzc2FnZUV4cGlyZWQoZGF0YToge1xuICAgICAgICBtZXNzYWdlSWQ6IHN0cmluZyxcbiAgICAgICAgc2VuZGluZ1RpbWU6IG51bWJlcixcbiAgICAgICAgZXhwaXJlOiA/bnVtYmVyLFxuICAgICAgICBibG9ja1RpbWU6ID9udW1iZXIsXG4gICAgfSkge1xuICAgICAgICByZXR1cm4gbmV3IFRPTkNsaWVudEVycm9yKFxuICAgICAgICAgICAgJ01lc3NhZ2UgZXhwaXJlZCcsXG4gICAgICAgICAgICBUT05DbGllbnRFcnJvci5jb2RlLk1FU1NBR0VfRVhQSVJFRCxcbiAgICAgICAgICAgIFRPTkNsaWVudEVycm9yLnNvdXJjZS5DTElFTlQsXG4gICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgc2VuZGluZ1RpbWU6IFRPTkNsaWVudEVycm9yLmZvcm1hdFRpbWUoZGF0YS5zZW5kaW5nVGltZSksXG4gICAgICAgICAgICAgICAgZXhwaXJhdGlvblRpbWU6IFRPTkNsaWVudEVycm9yLmZvcm1hdFRpbWUoZGF0YS5leHBpcmUpLFxuICAgICAgICAgICAgICAgIGJsb2NrVGltZTogVE9OQ2xpZW50RXJyb3IuZm9ybWF0VGltZShkYXRhLmJsb2NrVGltZSksXG4gICAgICAgICAgICB9LFxuICAgICAgICApO1xuICAgIH1cblxuICAgIHN0YXRpYyBzZXJ2ZXJEb2VzbnRTdXBwb3J0QWdncmVnYXRpb25zKCkge1xuICAgICAgICByZXR1cm4gbmV3IFRPTkNsaWVudEVycm9yKFxuICAgICAgICAgICAgJ1NlcnZlciBkb2VzblxcJ3Qgc3VwcG9ydCBhZ2dyZWdhdGlvbnMnLFxuICAgICAgICAgICAgVE9OQ2xpZW50RXJyb3IuY29kZS5TRVJWRVJfRE9FU05UX1NVUFBPUlRfQUdHUkVHQVRJT05TLFxuICAgICAgICAgICAgVE9OQ2xpZW50RXJyb3Iuc291cmNlLkNMSUVOVCxcbiAgICAgICAgKTtcbiAgICB9XG5cbiAgICBzdGF0aWMgYWRkcmVzc1JlcXVpcmVkRm9yUnVuTG9jYWwoKSB7XG4gICAgICAgIHJldHVybiBuZXcgVE9OQ2xpZW50RXJyb3IoXG4gICAgICAgICAgICAnQWRkcmVzcyByZXF1aXJlZCBmb3IgcnVuIGxvY2FsLiBZb3UgaGF2ZW5cXCd0IHNwZWNpZmllZCBjb250cmFjdCBjb2RlIG9yIGRhdGEgJ1xuICAgICAgICAgICAgKyAnc28gYWRkcmVzcyBpcyByZXF1aXJlZCB0byBsb2FkIG1pc3NpbmcgcGFydHMgZnJvbSBuZXR3b3JrLicsXG4gICAgICAgICAgICBUT05DbGllbnRFcnJvci5jb2RlLkFERFJFU1NfUkVRVUlSRURfRk9SX1JVTl9MT0NBTCxcbiAgICAgICAgICAgIFRPTkNsaWVudEVycm9yLnNvdXJjZS5DTElFTlQsXG4gICAgICAgICk7XG4gICAgfVxuXG4gICAgc3RhdGljIG5ldHdvcmtTaWxlbnQoZGF0YToge1xuICAgICAgICBtZXNzYWdlSWQ6IHN0cmluZyxcbiAgICAgICAgc2VuZGluZ1RpbWU6IG51bWJlcixcbiAgICAgICAgZXhwaXJlOiBudW1iZXIsXG4gICAgICAgIHRpbWVvdXQ6IG51bWJlcixcbiAgICAgICAgYmxvY2tJZD86IHN0cmluZyxcbiAgICAgICAgbWVzc2FnZVByb2Nlc3NpbmdTdGF0ZT86IFRPTk1lc3NhZ2VQcm9jZXNzaW5nU3RhdGUsXG4gICAgfSkge1xuICAgICAgICByZXR1cm4gbmV3IFRPTkNsaWVudEVycm9yKFxuICAgICAgICAgICAgJ05ldHdvcmsgc2lsZW50OiBubyBibG9ja3MgcHJvZHVjZWQgZHVyaW5nIHRpbWVvdXQuJyxcbiAgICAgICAgICAgIFRPTkNsaWVudEVycm9yLmNvZGUuTkVUV09SS19TSUxFTlQsXG4gICAgICAgICAgICBUT05DbGllbnRFcnJvci5zb3VyY2UuQ0xJRU5ULFxuICAgICAgICAgICAgZGF0YSAmJiB7XG4gICAgICAgICAgICAgICAgLi4uZGF0YSxcbiAgICAgICAgICAgICAgICBzZW5kaW5nVGltZTogVE9OQ2xpZW50RXJyb3IuZm9ybWF0VGltZShkYXRhLnNlbmRpbmdUaW1lKSxcbiAgICAgICAgICAgICAgICBleHBpcmF0aW9uVGltZTogVE9OQ2xpZW50RXJyb3IuZm9ybWF0VGltZShkYXRhLmV4cGlyZSksXG4gICAgICAgICAgICB9LFxuICAgICAgICApO1xuICAgIH1cblxuICAgIHN0YXRpYyB0cmFuc2FjdGlvbldhaXRUaW1lb3V0KGRhdGE6IHtcbiAgICAgICAgbWVzc2FnZUlkOiBzdHJpbmcsXG4gICAgICAgIHNlbmRpbmdUaW1lOiBudW1iZXIsXG4gICAgICAgIHRpbWVvdXQ6IG51bWJlcixcbiAgICAgICAgbWVzc2FnZVByb2Nlc3NpbmdTdGF0ZT86IFRPTk1lc3NhZ2VQcm9jZXNzaW5nU3RhdGUsXG4gICAgfSkge1xuICAgICAgICByZXR1cm4gbmV3IFRPTkNsaWVudEVycm9yKFxuICAgICAgICAgICAgJ1RyYW5zYWN0aW9uIGRpZCBub3QgcHJvZHVjZWQgZHVyaW5nIHNwZWNpZmllZCB0aW1lb3V0JyxcbiAgICAgICAgICAgIFRPTkNsaWVudEVycm9yLmNvZGUuVFJBTlNBQ1RJT05fV0FJVF9USU1FT1VULFxuICAgICAgICAgICAgVE9OQ2xpZW50RXJyb3Iuc291cmNlLkNMSUVOVCxcbiAgICAgICAgICAgIGRhdGEgJiYge1xuICAgICAgICAgICAgICAgIC4uLmRhdGEsXG4gICAgICAgICAgICAgICAgc2VuZGluZ1RpbWU6IFRPTkNsaWVudEVycm9yLmZvcm1hdFRpbWUoZGF0YS5zZW5kaW5nVGltZSksXG4gICAgICAgICAgICB9LFxuICAgICAgICApO1xuICAgIH1cblxuICAgIHN0YXRpYyBjbG9ja091dE9mU3luYygpIHtcbiAgICAgICAgcmV0dXJuIG5ldyBUT05DbGllbnRFcnJvcihcbiAgICAgICAgICAgICdZb3UgbG9jYWwgY2xvY2sgaXMgb3V0IG9mIHN5bmMgd2l0aCB0aGUgc2VydmVyIHRpbWUuICdcbiAgICAgICAgICAgICsgJ0l0IGlzIGEgY3JpdGljYWwgY29uZGl0aW9uIGZvciBzZW5kaW5nIG1lc3NhZ2VzIHRvIHRoZSBibG9ja2NoYWluLiAnXG4gICAgICAgICAgICArICdQbGVhc2Ugc3luYyB5b3UgY2xvY2sgd2l0aCB0aGUgaW50ZXJuZXQgdGltZS4nLFxuICAgICAgICAgICAgVE9OQ2xpZW50RXJyb3IuY29kZS5DTE9DS19PVVRfT0ZfU1lOQyxcbiAgICAgICAgICAgIFRPTkNsaWVudEVycm9yLnNvdXJjZS5DTElFTlQsXG4gICAgICAgICk7XG4gICAgfVxuXG4gICAgc3RhdGljIGFjY291bnRNaXNzaW5nKGFkZHJlc3M6IHN0cmluZykge1xuICAgICAgICByZXR1cm4gbmV3IFRPTkNsaWVudEVycm9yKFxuICAgICAgICAgICAgYEFjY291bnQgd2l0aCBhZGRyZXNzIFske2FkZHJlc3N9XSBkb2Vzbid0IGV4aXN0cy4gYFxuICAgICAgICAgICAgKyAnWW91IGhhdmUgdG8gcHJlcGFpZCB0aGlzIGFjY291bnQgdG8gaGF2ZSBhIHBvc2l0aXZlIGJhbGFuY2Ugb24gdGhlbSBhbmQgdGhlbiBkZXBsb3kgJ1xuICAgICAgICAgICAgKyAnYSBjb250cmFjdCBjb2RlIGZvciB0aGlzIGFjY291bnQuJ1xuICAgICAgICAgICAgKyAnU2VlIFNESyBkb2N1bWVudGF0aW9uIGZvciBkZXRhaWxlZCBpbnN0cnVjdGlvbnMuJyxcbiAgICAgICAgICAgIFRPTkNsaWVudEVycm9yLmNvZGUuQUNDT1VOVF9NSVNTSU5HLFxuICAgICAgICAgICAgVE9OQ2xpZW50RXJyb3Iuc291cmNlLkNMSUVOVCxcbiAgICAgICAgKTtcbiAgICB9XG5cbiAgICBzdGF0aWMgYWNjb3VudENvZGVNaXNzaW5nKGFkZHJlc3M6IHN0cmluZywgYmFsYW5jZTogc3RyaW5nKSB7XG4gICAgICAgIHJldHVybiBuZXcgVE9OQ2xpZW50RXJyb3IoXG4gICAgICAgICAgICBgQWNjb3VudCB3aXRoIGFkZHJlc3MgWyR7YWRkcmVzc31dIGV4aXN0cyBidXQgaGF2ZW4ndCBhIGNvbnRyYWN0IGNvZGUgeWV0LiBgXG4gICAgICAgICAgICArICdZb3UgaGF2ZSB0byBlbnN1cmUgdGhhdCBhbiBhY2NvdW50IGhhcyBhbiBlbm91Z2ggYmFsYW5jZSBmb3IgZGVwbG95aW5nICdcbiAgICAgICAgICAgICsgJ2EgY29udHJhY3QgY29kZSBhbmQgdGhlbiBkZXBsb3kgYSBjb250cmFjdCBjb2RlIGZvciB0aGlzIGFjY291bnQuICdcbiAgICAgICAgICAgICsgYEN1cnJlbnQgYWNjb3VudCBiYWxhbmNlIGlzIFske2JhbGFuY2V9XS4gYFxuICAgICAgICAgICAgKyAnU2VlIFNESyBkb2N1bWVudGF0aW9uIGZvciBkZXRhaWxlZCBpbnN0cnVjdGlvbnMuJyxcbiAgICAgICAgICAgIFRPTkNsaWVudEVycm9yLmNvZGUuQUNDT1VOVF9DT0RFX01JU1NJTkcsXG4gICAgICAgICAgICBUT05DbGllbnRFcnJvci5zb3VyY2UuQ0xJRU5ULFxuICAgICAgICApO1xuICAgIH1cblxuICAgIHN0YXRpYyBhY2NvdW50QmFsYW5jZVRvb0xvdyhhZGRyZXNzOiBzdHJpbmcsIGJhbGFuY2U6IHN0cmluZykge1xuICAgICAgICByZXR1cm4gbmV3IFRPTkNsaWVudEVycm9yKFxuICAgICAgICAgICAgYEFjY291bnQgd2l0aCBhZGRyZXNzIFske2FkZHJlc3N9XSBoYXMgdG9vIGxvdyBiYWxhbmNlIFske2JhbGFuY2V9XS4gYFxuICAgICAgICAgICAgKyAnWW91IGhhdmUgdG8gc2VuZCBzb21lIHZhbHVlIHRvIGFjY291bnQgYmFsYW5jZSBmcm9tIG90aGVyIGNvbnRyYWN0ICdcbiAgICAgICAgICAgICsgJyhlLmcuIFdhbGxldCBjb250cmFjdCkuICdcbiAgICAgICAgICAgICsgJ1NlZSBTREsgZG9jdW1lbnRhdGlvbiBmb3IgZGV0YWlsZWQgaW5zdHJ1Y3Rpb25zLicsXG4gICAgICAgICAgICBUT05DbGllbnRFcnJvci5jb2RlLkFDQ09VTlRfQkFMQU5DRV9UT09fTE9XLFxuICAgICAgICAgICAgVE9OQ2xpZW50RXJyb3Iuc291cmNlLkNMSUVOVCxcbiAgICAgICAgKTtcbiAgICB9XG5cbiAgICBzdGF0aWMgbm9CbG9ja3Mod29ya2NoYWluOiBudW1iZXIpIHtcbiAgICAgICAgY29uc3Qgd29ya2NoYWluTmFtZSA9IHdvcmtjaGFpbiA9PT0gLTEgPyAnbWFzdGVyY2hhaW4nIDogYHdvcmtjaGFpbiAke3dvcmtjaGFpbn1gO1xuICAgICAgICByZXR1cm4gbmV3IFRPTkNsaWVudEVycm9yKFxuICAgICAgICAgICAgYFwiTm8gYmxvY2tzIGZvciAke3dvcmtjaGFpbk5hbWV9IGZvdW5kXCIuYCxcbiAgICAgICAgICAgIFRPTkVycm9yQ29kZS5ORVRXT1JLX1NJTEVOVCxcbiAgICAgICAgICAgIFRPTkVycm9yU291cmNlLkNMSUVOVCxcbiAgICAgICAgKTtcbiAgICB9XG5cbiAgICBzdGF0aWMgaW52YWxpZEJsb2NrY2hhaW4obWVzc2FnZTogc3RyaW5nKSB7XG4gICAgICAgIHJldHVybiBuZXcgVE9OQ2xpZW50RXJyb3IobWVzc2FnZSwgVE9ORXJyb3JDb2RlLk5FVFdPUktfU0lMRU5UKTtcbiAgICB9XG5cbiAgICBzdGF0aWMgaXNNZXNzYWdlRXhwaXJlZChlcnJvcjogYW55KTogYm9vbGVhbiB7XG4gICAgICAgIHJldHVybiBUT05DbGllbnRFcnJvci5pc0NsaWVudEVycm9yKGVycm9yLCBUT05DbGllbnRFcnJvci5jb2RlLk1FU1NBR0VfRVhQSVJFRCk7XG4gICAgfVxuXG4gICAgc3RhdGljIGlzV2FpdEZvclRpbWVvdXQoZXJyb3I6IGFueSk6IGJvb2xlYW4ge1xuICAgICAgICByZXR1cm4gVE9OQ2xpZW50RXJyb3IuaXNDbGllbnRFcnJvcihlcnJvciwgVE9OQ2xpZW50RXJyb3IuY29kZS5XQUlUX0ZPUl9USU1FT1VUKTtcbiAgICB9XG59XG4iXX0=