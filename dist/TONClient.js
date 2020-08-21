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
      var _setup = _asyncToGenerator( /*#__PURE__*/_regenerator["default"].mark(function _callee() {
        var modules, _iterator, _step, module;

        return _regenerator["default"].wrap(function _callee$(_context) {
          while (1) {
            switch (_context.prev = _context.next) {
              case 0:
                _context.next = 2;
                return this.getCoreBridge();

              case 2:
                modules = _toConsumableArray(this.modules.values());
                _iterator = _createForOfIteratorHelper(modules);
                _context.prev = 4;

                _iterator.s();

              case 6:
                if ((_step = _iterator.n()).done) {
                  _context.next = 12;
                  break;
                }

                module = _step.value;
                _context.next = 10;
                return module.setup();

              case 10:
                _context.next = 6;
                break;

              case 12:
                _context.next = 17;
                break;

              case 14:
                _context.prev = 14;
                _context.t0 = _context["catch"](4);

                _iterator.e(_context.t0);

              case 17:
                _context.prev = 17;

                _iterator.f();

                return _context.finish(17);

              case 20:
                _context.next = 22;
                return this.config.getVersion();

              case 22:
                TONClientError.coreVersion = _context.sent;

              case 23:
              case "end":
                return _context.stop();
            }
          }
        }, _callee, this, [[4, 14, 17, 20]]);
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
        var library, context;
        return _regenerator["default"].wrap(function _callee2$(_context2) {
          while (1) {
            switch (_context2.prev = _context2.next) {
              case 0:
                _context2.next = 2;
                return this.queries.close();

              case 2:
                library = TONClient.coreLibrary;

                if (!(this._context > 0 && library !== null && library !== undefined)) {
                  _context2.next = 9;
                  break;
                }

                context = this._context;
                this._coreBridge = null;
                this._context = 0;
                _context2.next = 9;
                return new Promise(function (resolve) {
                  return library.coreDestroyContext(context, resolve);
                });

              case 9:
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
    key: "tryCreateLibrary",
    value: function () {
      var _tryCreateLibrary = _asyncToGenerator( /*#__PURE__*/_regenerator["default"].mark(function _callee3() {
        var platform;
        return _regenerator["default"].wrap(function _callee3$(_context3) {
          while (1) {
            switch (_context3.prev = _context3.next) {
              case 0:
                platform = TONClient.clientPlatform;

                if (!(platform === null || platform === undefined)) {
                  _context3.next = 3;
                  break;
                }

                return _context3.abrupt("return", null);

              case 3:
                _context3.next = 5;
                return platform.createLibrary();

              case 5:
                TONClient.coreLibrary = _context3.sent;
                return _context3.abrupt("return", TONClient.coreLibrary);

              case 7:
              case "end":
                return _context3.stop();
            }
          }
        }, _callee3);
      }));

      function tryCreateLibrary() {
        return _tryCreateLibrary.apply(this, arguments);
      }

      return tryCreateLibrary;
    }()
  }, {
    key: "tryCreateCoreBridge",
    value: function () {
      var _tryCreateCoreBridge = _asyncToGenerator( /*#__PURE__*/_regenerator["default"].mark(function _callee4() {
        var _this = this;

        var library;
        return _regenerator["default"].wrap(function _callee4$(_context4) {
          while (1) {
            switch (_context4.prev = _context4.next) {
              case 0:
                _context4.t0 = TONClient.coreLibrary;

                if (_context4.t0) {
                  _context4.next = 5;
                  break;
                }

                _context4.next = 4;
                return this.tryCreateLibrary();

              case 4:
                _context4.t0 = _context4.sent;

              case 5:
                library = _context4.t0;

                if (library) {
                  _context4.next = 8;
                  break;
                }

                return _context4.abrupt("return");

              case 8:
                if (!library.coreCreateContext) {
                  _context4.next = 15;
                  break;
                }

                _context4.next = 11;
                return new Promise(function (resolve) {
                  return library.coreCreateContext(resolve);
                });

              case 11:
                this._context = _context4.sent;
                this._coreBridge = {
                  request: function request(method, paramsJson, onResult) {
                    if (TONClient.coreLibrary) {
                      TONClient.coreLibrary.coreRequest(_this._context, method, paramsJson, onResult);
                    }
                  }
                };
                _context4.next = 16;
                break;

              case 15:
                this._coreBridge = library;

              case 16:
              case "end":
                return _context4.stop();
            }
          }
        }, _callee4, this);
      }));

      function tryCreateCoreBridge() {
        return _tryCreateCoreBridge.apply(this, arguments);
      }

      return tryCreateCoreBridge;
    }()
  }, {
    key: "getCoreBridge",
    value: function () {
      var _getCoreBridge = _asyncToGenerator( /*#__PURE__*/_regenerator["default"].mark(function _callee5() {
        return _regenerator["default"].wrap(function _callee5$(_context5) {
          while (1) {
            switch (_context5.prev = _context5.next) {
              case 0:
                if (this._coreBridge) {
                  _context5.next = 3;
                  break;
                }

                _context5.next = 3;
                return this.tryCreateCoreBridge();

              case 3:
                return _context5.abrupt("return", this._coreBridge);

              case 4:
              case "end":
                return _context5.stop();
            }
          }
        }, _callee5, this);
      }));

      function getCoreBridge() {
        return _getCoreBridge.apply(this, arguments);
      }

      return getCoreBridge;
    }()
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
      var _getManagementAccessKey = _asyncToGenerator( /*#__PURE__*/_regenerator["default"].mark(function _callee6() {
        var result;
        return _regenerator["default"].wrap(function _callee6$(_context6) {
          while (1) {
            switch (_context6.prev = _context6.next) {
              case 0:
                _context6.next = 2;
                return this._queries.query('query{getManagementAccessKey}');

              case 2:
                result = _context6.sent;
                return _context6.abrupt("return", result.data.getManagementAccessKey);

              case 4:
              case "end":
                return _context6.stop();
            }
          }
        }, _callee6, this);
      }));

      function getManagementAccessKey() {
        return _getManagementAccessKey.apply(this, arguments);
      }

      return getManagementAccessKey;
    }()
  }, {
    key: "_resolveSignedManagementAccessKey",
    value: function () {
      var _resolveSignedManagementAccessKey2 = _asyncToGenerator( /*#__PURE__*/_regenerator["default"].mark(function _callee7(params) {
        var signKeys, managementAccessKey;
        return _regenerator["default"].wrap(function _callee7$(_context7) {
          while (1) {
            switch (_context7.prev = _context7.next) {
              case 0:
                if (!params.signedManagementAccessKey) {
                  _context7.next = 2;
                  break;
                }

                return _context7.abrupt("return", params.signedManagementAccessKey);

              case 2:
                signKeys = params.accountKeys;

                if (!signKeys) {
                  _context7.next = 8;
                  break;
                }

                _context7.next = 6;
                return this.getManagementAccessKey();

              case 6:
                managementAccessKey = _context7.sent;
                return _context7.abrupt("return", this.crypto.naclSign({
                  text: managementAccessKey
                }, "".concat(signKeys.secret).concat(signKeys["public"]), 'Hex'));

              case 8:
                return _context7.abrupt("return", '');

              case 9:
              case "end":
                return _context7.stop();
            }
          }
        }, _callee7, this);
      }));

      function _resolveSignedManagementAccessKey(_x) {
        return _resolveSignedManagementAccessKey2.apply(this, arguments);
      }

      return _resolveSignedManagementAccessKey;
    }()
  }, {
    key: "registerAccessKeys",
    value: function () {
      var _registerAccessKeys = _asyncToGenerator( /*#__PURE__*/_regenerator["default"].mark(function _callee8(params) {
        var signedManagementAccessKey, result;
        return _regenerator["default"].wrap(function _callee8$(_context8) {
          while (1) {
            switch (_context8.prev = _context8.next) {
              case 0:
                _context8.next = 2;
                return this._resolveSignedManagementAccessKey(params);

              case 2:
                signedManagementAccessKey = _context8.sent;
                _context8.next = 5;
                return this._queries.mutation("mutation registerAccessKeys($account: String, $keys: [AccessKey], $signedManagementAccessKey: String) {\n                    registerAccessKeys(account: $account, keys: $keys, signedManagementAccessKey: $signedManagementAccessKey)\n                }", {
                  account: params.account,
                  keys: params.keys,
                  signedManagementAccessKey: signedManagementAccessKey
                });

              case 5:
                result = _context8.sent;
                return _context8.abrupt("return", result.data.registerAccessKeys);

              case 7:
              case "end":
                return _context8.stop();
            }
          }
        }, _callee8, this);
      }));

      function registerAccessKeys(_x2) {
        return _registerAccessKeys.apply(this, arguments);
      }

      return registerAccessKeys;
    }()
  }, {
    key: "revokeAccessKeys",
    value: function () {
      var _revokeAccessKeys = _asyncToGenerator( /*#__PURE__*/_regenerator["default"].mark(function _callee9(params) {
        var signedManagementAccessKey, result;
        return _regenerator["default"].wrap(function _callee9$(_context9) {
          while (1) {
            switch (_context9.prev = _context9.next) {
              case 0:
                _context9.next = 2;
                return this._resolveSignedManagementAccessKey(params);

              case 2:
                signedManagementAccessKey = _context9.sent;
                _context9.next = 5;
                return this._queries.mutation("mutation revokeAccessKeys($account: String, $keys: [String], $signedManagementAccessKey: String) {\n                    revokeAccessKeys(account: $account, keys: $keys, signedManagementAccessKey: $signedManagementAccessKey)\n                }", {
                  account: params.account,
                  keys: params.keys,
                  signedManagementAccessKey: signedManagementAccessKey
                });

              case 5:
                result = _context9.sent;
                return _context9.abrupt("return", result.data.revokeAccessKeys);

              case 7:
              case "end":
                return _context9.stop();
            }
          }
        }, _callee9, this);
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
      var _trace = _asyncToGenerator( /*#__PURE__*/_regenerator["default"].mark(function _callee10(name, f, parentSpan) {
        var span, result;
        return _regenerator["default"].wrap(function _callee10$(_context10) {
          while (1) {
            switch (_context10.prev = _context10.next) {
              case 0:
                span = this.config.tracer.startSpan(name, {
                  childOf: parentSpan
                });
                _context10.prev = 1;
                span.setTag(_opentracing.Tags.SPAN_KIND, 'client');
                _context10.next = 5;
                return f(span);

              case 5:
                result = _context10.sent;

                if (result !== undefined) {
                  span.setTag('result', result);
                }

                span.finish();
                return _context10.abrupt("return", result);

              case 11:
                _context10.prev = 11;
                _context10.t0 = _context10["catch"](1);
                span.log({
                  event: 'failed',
                  payload: _context10.t0
                });
                span.finish();
                throw _context10.t0;

              case 16:
              case "end":
                return _context10.stop();
            }
          }
        }, _callee10, this, [[1, 11]]);
      }));

      function trace(_x4, _x5, _x6) {
        return _trace.apply(this, arguments);
      }

      return trace;
    }() // Internals

  }], [{
    key: "create",
    value: function () {
      var _create = _asyncToGenerator( /*#__PURE__*/_regenerator["default"].mark(function _callee11(config) {
        var client;
        return _regenerator["default"].wrap(function _callee11$(_context11) {
          while (1) {
            switch (_context11.prev = _context11.next) {
              case 0:
                client = new TONClient();
                client.config.setData(config);
                _context11.next = 4;
                return client.setup();

              case 4:
                return _context11.abrupt("return", client);

              case 5:
              case "end":
                return _context11.stop();
            }
          }
        }, _callee11);
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
  CONTRACT_EXECUTION_FAILED: 3025,
  // Crypto
  SIGNING_SOURCE_IS_NOT_SPECIFIED: 2021,
  INVALID_CRYPTO_BOX_PARAMS: 2030,
  // Queries
  QUERY_FORCIBLY_ABORTED: 4005
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
      return new TONClientError("Internal error: ".concat(message), TONErrorCode.INTERNAL_ERROR);
    }
  }, {
    key: "invalidCons",
    value: function invalidCons() {
      return new TONClientError('Invalid CONS structure. Each CONS item must contains of two elements.', TONErrorCode.INVALID_CONS);
    }
  }, {
    key: "clientDoesNotConfigured",
    value: function clientDoesNotConfigured() {
      return new TONClientError('TON Client isn\'t configured', TONErrorCode.CLIENT_DOES_NOT_CONFIGURED);
    }
  }, {
    key: "sendNodeRequestFailed",
    value: function sendNodeRequestFailed(responseText) {
      return new TONClientError("Send node request failed: ".concat(responseText), TONErrorCode.SEND_NODE_REQUEST_FAILED);
    }
  }, {
    key: "runLocalAccountDoesNotExists",
    value: function runLocalAccountDoesNotExists(functionName, address) {
      return new TONClientError("[".concat(functionName, "] run local failed: account [").concat(address, "] does not exists"), TONErrorCode.RUN_LOCAL_ACCOUNT_DOES_NOT_EXISTS);
    }
  }, {
    key: "waitForTimeout",
    value: function waitForTimeout() {
      return new TONClientError('Wait for operation rejected on timeout', TONErrorCode.WAIT_FOR_TIMEOUT);
    }
  }, {
    key: "queryFailed",
    value: function queryFailed(errors) {
      return new TONClientError("Query failed: ".concat(errors.map(function (x) {
        return x.message || x.toString();
      }).join('\n')), TONErrorCode.QUERY_FAILED);
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
      return new TONClientError('Message expired', TONErrorCode.MESSAGE_EXPIRED, TONErrorSource.CLIENT, {
        sendingTime: TONClientError.formatTime(data.sendingTime),
        expirationTime: TONClientError.formatTime(data.expire),
        blockTime: TONClientError.formatTime(data.blockTime)
      });
    }
  }, {
    key: "serverDoesntSupportAggregations",
    value: function serverDoesntSupportAggregations() {
      return new TONClientError('Server doesn\'t support aggregations', TONErrorCode.SERVER_DOESNT_SUPPORT_AGGREGATIONS);
    }
  }, {
    key: "addressRequiredForRunLocal",
    value: function addressRequiredForRunLocal() {
      return new TONClientError('Address required for run local. You haven\'t specified contract code or data ' + 'so address is required to load missing parts from network.', TONClientError.code.ADDRESS_REQUIRED_FOR_RUN_LOCAL, TONClientError.source.CLIENT);
    }
  }, {
    key: "networkSilent",
    value: function networkSilent(data) {
      return new TONClientError('Network silent: no blocks produced during timeout.', TONErrorCode.NETWORK_SILENT, TONErrorSource.CLIENT, data && _objectSpread(_objectSpread({}, data), {}, {
        sendingTime: TONClientError.formatTime(data.sendingTime),
        expirationTime: TONClientError.formatTime(data.expire)
      }));
    }
  }, {
    key: "transactionWaitTimeout",
    value: function transactionWaitTimeout(data) {
      return new TONClientError('Transaction did not produced during specified timeout', TONErrorCode.TRANSACTION_WAIT_TIMEOUT, TONErrorSource.CLIENT, data && _objectSpread(_objectSpread({}, data), {}, {
        sendingTime: TONClientError.formatTime(data.sendingTime)
      }));
    }
  }, {
    key: "clockOutOfSync",
    value: function clockOutOfSync() {
      return new TONClientError('You local clock is out of sync with the server time. ' + 'It is a critical condition for sending messages to the blockchain. ' + 'Please sync you clock with the internet time.', TONErrorCode.CLOCK_OUT_OF_SYNC);
    }
  }, {
    key: "accountMissing",
    value: function accountMissing(address) {
      return new TONClientError("Account with address [".concat(address, "] doesn't exists. ") + 'You have to prepaid this account to have a positive balance on them and then deploy ' + 'a contract code for this account.' + 'See SDK documentation for detailed instructions.', TONErrorCode.ACCOUNT_MISSING);
    }
  }, {
    key: "accountCodeMissing",
    value: function accountCodeMissing(address, balance) {
      return new TONClientError("Account with address [".concat(address, "] exists but haven't a contract code yet. ") + 'You have to ensure that an account has an enough balance for deploying ' + 'a contract code and then deploy a contract code for this account. ' + "Current account balance is [".concat(balance, "]. ") + 'See SDK documentation for detailed instructions.', TONErrorCode.ACCOUNT_CODE_MISSING);
    }
  }, {
    key: "accountBalanceTooLow",
    value: function accountBalanceTooLow(address, balance) {
      return new TONClientError("Account with address [".concat(address, "] has too low balance [").concat(balance, "]. ") + 'You have to send some value to account balance from other contract ' + '(e.g. Wallet contract). ' + 'See SDK documentation for detailed instructions.', TONErrorCode.ACCOUNT_BALANCE_TOO_LOW);
    }
  }, {
    key: "signingSourceIsNotSpecified",
    value: function signingSourceIsNotSpecified() {
      return new TONClientError('You must provide signing keys or signing box to sign you message.', TONErrorCode.SIGNING_SOURCE_IS_NOT_SPECIFIED);
    }
  }, {
    key: "invalidCryptoBoxParams",
    value: function invalidCryptoBoxParams(encryptedSeedPhrase) {
      return new TONClientError('You must provide a valid encrypted seed phrase to create a core crypto box. ' + "Provided phrase is: ".concat(JSON.stringify(encryptedSeedPhrase), "."), TONErrorCode.INVALID_CRYPTO_BOX_PARAMS);
    }
  }, {
    key: "noBlocks",
    value: function noBlocks(workchain) {
      var workchainName = workchain === -1 ? 'masterchain' : "workchain ".concat(workchain);
      return new TONClientError("\"No blocks for ".concat(workchainName, " found\"."), TONErrorCode.NETWORK_SILENT);
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

_defineProperty(TONClientError, "QUERY_FORCIBLY_ABORTED", new TONClientError('GraphQL query was forcibly aborted on timeout.', TONErrorCode.QUERY_FORCIBLY_ABORTED));
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uL3NyYy9UT05DbGllbnQuanMiXSwibmFtZXMiOlsiVE9OQ2xpZW50IiwiY2xpZW50UGxhdGZvcm0iLCJtb2R1bGVzIiwiTWFwIiwiY29uZmlnIiwiZ2V0TW9kdWxlIiwiVE9OQ29uZmlnTW9kdWxlIiwiY3J5cHRvIiwiVE9OQ3J5cHRvTW9kdWxlIiwiY29udHJhY3RzIiwiVE9OQ29udHJhY3RzTW9kdWxlIiwiX3F1ZXJpZXMiLCJUT05RdWVyaWVzTW9kdWxlIiwicXVlcmllcyIsIl9jb250ZXh0IiwiX2NvcmVCcmlkZ2UiLCJnZXRDb3JlQnJpZGdlIiwidmFsdWVzIiwibW9kdWxlIiwic2V0dXAiLCJnZXRWZXJzaW9uIiwiVE9OQ2xpZW50RXJyb3IiLCJjb3JlVmVyc2lvbiIsImNsb3NlIiwibGlicmFyeSIsImNvcmVMaWJyYXJ5IiwidW5kZWZpbmVkIiwiY29udGV4dCIsIlByb21pc2UiLCJyZXNvbHZlIiwiY29yZURlc3Ryb3lDb250ZXh0IiwicGxhdGZvcm0iLCJjcmVhdGVMaWJyYXJ5IiwidHJ5Q3JlYXRlTGlicmFyeSIsImNvcmVDcmVhdGVDb250ZXh0IiwicmVxdWVzdCIsIm1ldGhvZCIsInBhcmFtc0pzb24iLCJvblJlc3VsdCIsImNvcmVSZXF1ZXN0IiwidHJ5Q3JlYXRlQ29yZUJyaWRnZSIsIk1vZHVsZUNsYXNzIiwibmFtZSIsIm1vZHVsZU5hbWUiLCJleGlzdGluZ01vZHVsZSIsImdldCIsInNldCIsInNlcnZlclRpbWVEZWx0YSIsInNlcnZlck5vdyIsInF1ZXJ5IiwicmVzdWx0IiwiZGF0YSIsImdldE1hbmFnZW1lbnRBY2Nlc3NLZXkiLCJwYXJhbXMiLCJzaWduZWRNYW5hZ2VtZW50QWNjZXNzS2V5Iiwic2lnbktleXMiLCJhY2NvdW50S2V5cyIsIm1hbmFnZW1lbnRBY2Nlc3NLZXkiLCJuYWNsU2lnbiIsInRleHQiLCJzZWNyZXQiLCJfcmVzb2x2ZVNpZ25lZE1hbmFnZW1lbnRBY2Nlc3NLZXkiLCJtdXRhdGlvbiIsImFjY291bnQiLCJrZXlzIiwicmVnaXN0ZXJBY2Nlc3NLZXlzIiwicmV2b2tlQWNjZXNzS2V5cyIsInRyYWNlSWQiLCJzcGFuSWQiLCJvcGVyYXRpb25OYW1lIiwidHJhY2VyIiwic3BhbiIsIl9zdGFydEludGVybmFsU3BhbiIsImN0eCIsImV4dHJhY3QiLCJGT1JNQVRfVEVYVF9NQVAiLCJEYXRlIiwibm93Iiwic3RhcnRTcGFuIiwiZiIsInBhcmVudFNwYW4iLCJjaGlsZE9mIiwic2V0VGFnIiwiVGFncyIsIlNQQU5fS0lORCIsImZpbmlzaCIsImxvZyIsImV2ZW50IiwicGF5bG9hZCIsImNsaWVudCIsInNldERhdGEiLCJUT05FcnJvclNvdXJjZSIsIkNMSUVOVCIsIk5PREUiLCJUT05FcnJvckNvZGUiLCJDTElFTlRfRE9FU19OT1RfQ09ORklHVVJFRCIsIlNFTkRfTk9ERV9SRVFVRVNUX0ZBSUxFRCIsIk1FU1NBR0VfQUxSRUFEWV9FWFBJUkVEIiwiUlVOX0xPQ0FMX0FDQ09VTlRfRE9FU19OT1RfRVhJU1RTIiwiV0FJVF9GT1JfVElNRU9VVCIsIklOVEVSTkFMX0VSUk9SIiwiUVVFUllfRkFJTEVEIiwiTUVTU0FHRV9FWFBJUkVEIiwiU0VSVkVSX0RPRVNOVF9TVVBQT1JUX0FHR1JFR0FUSU9OUyIsIklOVkFMSURfQ09OUyIsIkFERFJFU1NfUkVRVUlSRURfRk9SX1JVTl9MT0NBTCIsIk5FVFdPUktfU0lMRU5UIiwiVFJBTlNBQ1RJT05fTEFHIiwiVFJBTlNBQ1RJT05fV0FJVF9USU1FT1VUIiwiQ0xPQ0tfT1VUX09GX1NZTkMiLCJBQ0NPVU5UX01JU1NJTkciLCJBQ0NPVU5UX0NPREVfTUlTU0lORyIsIkFDQ09VTlRfQkFMQU5DRV9UT09fTE9XIiwiQUNDT1VOVF9GUk9aRU5fT1JfREVMRVRFRCIsIkNPTlRSQUNUX0VYRUNVVElPTl9GQUlMRUQiLCJTSUdOSU5HX1NPVVJDRV9JU19OT1RfU1BFQ0lGSUVEIiwiSU5WQUxJRF9DUllQVE9fQk9YX1BBUkFNUyIsIlFVRVJZX0ZPUkNJQkxZX0FCT1JURUQiLCJUT05Db250cmFjdEV4aXRDb2RlIiwiUkVQTEFZX1BST1RFQ1RJT04iLCJOT19HQVMiLCJtZXNzYWdlIiwiY29kZSIsInNvdXJjZSIsImVycm9yIiwiZXhpdENvZGUiLCJleGl0X2NvZGUiLCJpc0NvbnRyYWN0RXJyb3IiLCJvcmlnaW5hbF9lcnJvciIsImlzTWVzc2FnZUV4cGlyZWQiLCJyZXNwb25zZVRleHQiLCJmdW5jdGlvbk5hbWUiLCJhZGRyZXNzIiwiZXJyb3JzIiwibWFwIiwieCIsInRvU3RyaW5nIiwiam9pbiIsInRpbWUiLCJ0b0lTT1N0cmluZyIsInNlbmRpbmdUaW1lIiwiZm9ybWF0VGltZSIsImV4cGlyYXRpb25UaW1lIiwiZXhwaXJlIiwiYmxvY2tUaW1lIiwiYmFsYW5jZSIsImVuY3J5cHRlZFNlZWRQaHJhc2UiLCJKU09OIiwic3RyaW5naWZ5Iiwid29ya2NoYWluIiwid29ya2NoYWluTmFtZSIsImlzQ2xpZW50RXJyb3IiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7OztBQUtBOztBQWNBOztBQUNBOztBQUNBOztBQUVBOztBQU9BOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBcUJBOzs7OztJQUthQSxTOzs7K0JBQ1NDLGMsRUFBbUM7QUFDakRELE1BQUFBLFNBQVMsQ0FBQ0MsY0FBVixHQUEyQkEsY0FBM0I7QUFDSCxLLENBR0Q7Ozs7QUFTQSx1QkFBYztBQUFBOztBQUFBOztBQUFBOztBQUFBOztBQUFBOztBQUFBOztBQUFBOztBQUFBOztBQUFBOztBQUNWLFNBQUtDLE9BQUwsR0FBZSxJQUFJQyxHQUFKLEVBQWY7QUFDQSxTQUFLQyxNQUFMLEdBQWMsS0FBS0MsU0FBTCxDQUFlQywyQkFBZixDQUFkO0FBQ0EsU0FBS0MsTUFBTCxHQUFjLEtBQUtGLFNBQUwsQ0FBZUcsMkJBQWYsQ0FBZDtBQUNBLFNBQUtDLFNBQUwsR0FBaUIsS0FBS0osU0FBTCxDQUFlSyw4QkFBZixDQUFqQjtBQUNBLFNBQUtDLFFBQUwsR0FBZ0IsS0FBS04sU0FBTCxDQUFlTyw0QkFBZixDQUFo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QUksQ0FBQ0MsU0FBTCxDQUFlRixtQkFBZixDQUR6QixNQURHLEVBR0hwRCxZQUFZLENBQUNzQix5QkFIVixDQUFQO0FBS0g7Ozs2QkFFZWlDLFMsRUFBbUI7QUFDL0IsVUFBTUMsYUFBYSxHQUFHRCxTQUFTLEtBQUssQ0FBQyxDQUFmLEdBQW1CLGFBQW5CLHVCQUFnREEsU0FBaEQsQ0FBdEI7QUFDQSxhQUFPLElBQUloSSxjQUFKLDJCQUNlaUksYUFEZixnQkFFSHhELFlBQVksQ0FBQ1ksY0FGVixDQUFQO0FBSUg7OztzQ0FFd0JlLE8sRUFBaUI7QUFDdEMsYUFBTyxJQUFJcEcsY0FBSixDQUFtQm9HLE9BQW5CLEVBQTRCM0IsWUFBWSxDQUFDWSxjQUF6QyxDQUFQO0FBQ0g7OztxQ0FFdUJrQixLLEVBQXFCO0FBQ3pDLGFBQU92RyxjQUFjLENBQUNrSSxhQUFmLENBQTZCM0IsS0FBN0IsRUFBb0N2RyxjQUFjLENBQUNxRyxJQUFmLENBQW9CcEIsZUFBeEQsQ0FBUDtBQUNIOzs7cUNBRXVCc0IsSyxFQUFxQjtBQUN6QyxhQUFPdkcsY0FBYyxDQUFDa0ksYUFBZixDQUE2QjNCLEtBQTdCLEVBQW9DdkcsY0FBYyxDQUFDcUcsSUFBZixDQUFvQnZCLGdCQUF4RCxDQUFQO0FBQ0g7Ozs7Ozs7O2dCQTNQUTlFLGMsWUFDT3NFLGM7O2dCQURQdEUsYyxVQUVLeUUsWTs7Z0JBRkx6RSxjLGlCQUdZLEU7O2dCQUhaQSxjLDRCQUl1QixJQUFJQSxjQUFKLENBQzVCLGdEQUQ0QixFQUU1QnlFLFlBQVksQ0FBQ3VCLHNCQUZlLEMiLCJzb3VyY2VzQ29udGVudCI6WyIvKlxuICogQ29weXJpZ2h0IDIwMTgtMjAyMCBUT04gREVWIFNPTFVUSU9OUyBMVEQuXG4gKi9cbi8vIEBmbG93XG5cbmltcG9ydCB7XG4gICAgVGFncywgU3BhbiwgU3BhbkNvbnRleHQsIEZPUk1BVF9URVhUX01BUCxcbn0gZnJvbSAnb3BlbnRyYWNpbmcnO1xuaW1wb3J0IHR5cGUge1xuICAgIElUT05DbGllbnQsXG4gICAgVE9OQWNjZXNzS2V5c01hbmFnZW1lbnRQYXJhbXMsXG4gICAgVE9OQ29uZmlnRGF0YSxcbiAgICBUT05Db250cmFjdHMsXG4gICAgVE9OQ3J5cHRvLCBUT05JbnB1dE1lc3NhZ2UsIFRPTk1lc3NhZ2VQcm9jZXNzaW5nU3RhdGUsXG4gICAgVE9OUXVlcmllcyxcbiAgICBUT05SZWdpc3RlckFjY2Vzc0tleXNQYXJhbXMsXG4gICAgVE9OUmV2b2tlQWNjZXNzS2V5c1BhcmFtcyxcbn0gZnJvbSAnLi4vdHlwZXMnO1xuXG5pbXBvcnQgVE9OQ29uZmlnTW9kdWxlIGZyb20gJy4vbW9kdWxlcy9UT05Db25maWdNb2R1bGUnO1xuaW1wb3J0IFRPTkNvbnRyYWN0c01vZHVsZSBmcm9tICcuL21vZHVsZXMvVE9OQ29udHJhY3RzTW9kdWxlJztcbmltcG9ydCBUT05DcnlwdG9Nb2R1bGUgZnJvbSAnLi9tb2R1bGVzL1RPTkNyeXB0b01vZHVsZSc7XG4vKiBlc2xpbnQtZGlzYWJsZSBjbGFzcy1tZXRob2RzLXVzZS10aGlzLCBuby11c2UtYmVmb3JlLWRlZmluZSAqL1xuaW1wb3J0IFRPTlF1ZXJpZXNNb2R1bGUgZnJvbSAnLi9tb2R1bGVzL1RPTlF1ZXJpZXNNb2R1bGUnO1xuXG5pbXBvcnQgdHlwZSB7XG4gICAgVE9OQ2xpZW50Q29yZUxpYnJhcnksXG4gICAgVE9OQ2xpZW50Q29yZUJyaWRnZSxcbiAgICBUT05Nb2R1bGVDb250ZXh0LFxufSBmcm9tICcuL1RPTk1vZHVsZSc7XG5pbXBvcnQgeyBUT05Nb2R1bGUgfSBmcm9tICcuL1RPTk1vZHVsZSc7XG5cbi8qKlxuICogSmF2YVNjcmlwdCBwbGF0Zm9ybSBzcGVjaWZpYyBjb25maWd1cmF0aW9uXG4gKi9cbnR5cGUgVE9OQ2xpZW50UGxhdGZvcm0gPSB7XG4gICAgLyoqXG4gICAgICogUGxhdGZvcm0gc3BlY2lmaWMgYGZldGNoYCBmdW5jdGlvblxuICAgICAqL1xuICAgIGZldGNoOiBhbnksXG4gICAgLyoqXG4gICAgICogUGxhdGZvcm0gc3BlY2lmaWMgYFdlYlNvY2tldGAgaW1wbGVtZW50YXRpb25cbiAgICAgKiBUaGlzIGltcGxlbWVudGF0aW9uIG11c3QgY29uZm9ybXMgdG8gVzNDIFdlYlNvY2tldFxuICAgICAqL1xuICAgIFdlYlNvY2tldDogYW55LFxuICAgIC8qKlxuICAgICAqIFJlcXVlc3QgY3JlYXRpb24gb2YgdGhlIGNsaWVudCBjb3JlXG4gICAgICovXG4gICAgY3JlYXRlTGlicmFyeTogKCkgPT4gUHJvbWlzZTxUT05DbGllbnRDb3JlTGlicmFyeT4sXG59O1xuXG4vKipcbiAqIE1haW4gb2JqZWN0IHByb3ZpZGVkIGZ1bmN0aW9uYWxpdHkgb2YgdGhlIFRPTiBDbGllbnQgTGlicmFyeVxuICogRWFjaCBpbnN0YW5jZSBvZiBUT05DbGllbnQgaGFzIG93biBzZXQgb2YgVE9OIENsaWVudCBtb2R1bGVzXG4gKiBhbmQgaGFzIG93biBwcmVjb25maWd1cmVkIGNsaWVudCBjb250ZXh0XG4gKi9cbmV4cG9ydCBjbGFzcyBUT05DbGllbnQgaW1wbGVtZW50cyBUT05Nb2R1bGVDb250ZXh0LCBJVE9OQ2xpZW50IHtcbiAgICBzdGF0aWMgc2V0TGlicmFyeShjbGllbnRQbGF0Zm9ybTogVE9OQ2xpZW50UGxhdGZvcm0pIHtcbiAgICAgICAgVE9OQ2xpZW50LmNsaWVudFBsYXRmb3JtID0gY2xpZW50UGxhdGZvcm07XG4gICAgfVxuXG5cbiAgICAvLyBQdWJsaWNcbiAgICBjb25maWc6IFRPTkNvbmZpZ01vZHVsZTtcbiAgICBjcnlwdG86IFRPTkNyeXB0bztcbiAgICBjb250cmFjdHM6IFRPTkNvbnRyYWN0cztcbiAgICBxdWVyaWVzOiBUT05RdWVyaWVzO1xuICAgIF9xdWVyaWVzOiBUT05RdWVyaWVzTW9kdWxlO1xuICAgIF9jb250ZXh0OiBudW1iZXI7XG4gICAgX2NvcmVCcmlkZ2U6ID9UT05DbGllbnRDb3JlQnJpZGdlO1xuXG4gICAgY29uc3RydWN0b3IoKSB7XG4gICAgICAgIHRoaXMubW9kdWxlcyA9IG5ldyBNYXAoKTtcbiAgICAgICAgdGhpcy5jb25maWcgPSB0aGlzLmdldE1vZHVsZShUT05Db25maWdNb2R1bGUpO1xuICAgICAgICB0aGlzLmNyeXB0byA9IHRoaXMuZ2V0TW9kdWxlKFRPTkNyeXB0b01vZHVsZSk7XG4gICAgICAgIHRoaXMuY29udHJhY3RzID0gdGhpcy5nZXRNb2R1bGUoVE9OQ29udHJhY3RzTW9kdWxlKTtcbiAgICAgICAgdGhpcy5fcXVlcmllcyA9IHRoaXMuZ2V0TW9kdWxlKFRPTlF1ZXJpZXNNb2R1bGUpO1xuICAgICAgICB0aGlzLnF1ZXJpZXMgPSB0aGlzLl9xdWVyaWVzO1xuICAgICAgICB0aGlzLl9jb250ZXh0ID0gMDtcbiAgICAgICAgdGhpcy5fY29yZUJyaWRnZSA9IG51bGw7XG4gICAgfVxuXG4gICAgLyoqXG4gICAgICogQ29udmVuaWVudCB3YXkgdG8gY3JlYXRlIGNvbmZpZ3VyZWQgaW5zdGFuY2Ugb2YgdGhlIFRPTiBDbGllbnRcbiAgICAgKiBAcGFyYW0ge1RPTkNvbmZpZ0RhdGF9IGNvbmZpZ1xuICAgICAqIEByZXR1cm4ge1Byb21pc2U8VE9OQ2xpZW50Pn1cbiAgICAgKi9cbiAgICBzdGF0aWMgYXN5bmMgY3JlYXRlKGNvbmZpZzogVE9OQ29uZmlnRGF0YSk6IFByb21pc2U8VE9OQ2xpZW50PiB7XG4gICAgICAgIGNvbnN0IGNsaWVudCA9IG5ldyBUT05DbGllbnQoKTtcbiAgICAgICAgY2xpZW50LmNvbmZpZy5zZXREYXRhKGNvbmZpZyk7XG4gICAgICAgIGF3YWl0IGNsaWVudC5zZXR1cCgpO1xuICAgICAgICByZXR1cm4gY2xpZW50O1xuICAgIH1cblxuICAgIC8qKlxuICAgICAqIFNldCB1cCB0aGUgY2xpZW50IGluc3RhbmNlXG4gICAgICogQHJldHVybiB7UHJvbWlzZTx2b2lkPn1cbiAgICAgKi9cbiAgICBhc3luYyBzZXR1cCgpOiBQcm9taXNlPHZvaWQ+IHtcbiAgICAgICAgYXdhaXQgdGhpcy5nZXRDb3JlQnJpZGdlKCk7XG4gICAgICAgIGNvbnN0IG1vZHVsZXM6IFRPTk1vZHVsZVtdID0gWy4uLnRoaXMubW9kdWxlcy52YWx1ZXMoKV07XG4gICAgICAgIGZvciAoY29uc3QgbW9kdWxlIG9mIG1vZHVsZXMpIHtcbiAgICAgICAgICAgIGF3YWl0IG1vZHVsZS5zZXR1cCgpO1xuICAgICAgICB9XG4gICAgICAgIFRPTkNsaWVudEVycm9yLmNvcmVWZXJzaW9uID0gYXdhaXQgdGhpcy5jb25maWcuZ2V0VmVyc2lvbigpO1xuICAgIH1cblxuICAgIC8qKlxuICAgICAqIFRlYXIgZG93biB0aGlzIGNsaWVudCBpbnN0YW5jZS5cbiAgICAgKiBOb3RlIHRoYXQgYWZ0ZXIgeW91IGhhdmUgY2FsbGVkIHRoaXMgbWV0aG9kIGFsbCBmdXR1cmUgdXNlIG9mIHRoaXMgaW5zdGFuY2Ugd2lsbCBmYWlsXG4gICAgICogQHJldHVybiB7UHJvbWlzZTx2b2lkPn1cbiAgICAgKi9cbiAgICBhc3luYyBjbG9zZSgpOiBQcm9taXNlPHZvaWQ+IHtcbiAgICAgICAgYXdhaXQgdGhpcy5xdWVyaWVzLmNsb3NlKCk7XG4gICAgICAgIGNvbnN0IGxpYnJhcnkgPSBUT05DbGllbnQuY29yZUxpYnJhcnk7XG4gICAgICAgIGlmICh0aGlzLl9jb250ZXh0ID4gMCAmJiBsaWJyYXJ5ICE9PSBudWxsICYmIGxpYnJhcnkgIT09IHVuZGVmaW5lZCkge1xuICAgICAgICAgICAgY29uc3QgY29udGV4dCA9IHRoaXMuX2NvbnRleHQ7XG4gICAgICAgICAgICB0aGlzLl9jb3JlQnJpZGdlID0gbnVsbDtcbiAgICAgICAgICAgIHRoaXMuX2NvbnRleHQgPSAwO1xuICAgICAgICAgICAgYXdhaXQgbmV3IFByb21pc2UocmVzb2x2ZSA9PiBsaWJyYXJ5LmNvcmVEZXN0cm95Q29udGV4dChjb250ZXh0LCByZXNvbHZlKSk7XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICAvLyBUT05Nb2R1bGVDb250ZXh0XG5cbiAgICBhc3luYyB0cnlDcmVhdGVMaWJyYXJ5KCkge1xuICAgICAgICBjb25zdCBwbGF0Zm9ybSA9IFRPTkNsaWVudC5jbGllbnRQbGF0Zm9ybTtcbiAgICAgICAgaWYgKHBsYXRmb3JtID09PSBudWxsIHx8IHBsYXRmb3JtID09PSB1bmRlZmluZWQpIHtcbiAgICAgICAgICAgIHJldHVybiBudWxsO1xuICAgICAgICB9XG4gICAgICAgIFRPTkNsaWVudC5jb3JlTGlicmFyeSA9IGF3YWl0IHBsYXRmb3JtLmNyZWF0ZUxpYnJhcnkoKTtcbiAgICAgICAgcmV0dXJuIFRPTkNsaWVudC5jb3JlTGlicmFyeTtcbiAgICB9XG5cbiAgICBhc3luYyB0cnlDcmVhdGVDb3JlQnJpZGdlKCkge1xuICAgICAgICBjb25zdCBsaWJyYXJ5ID0gVE9OQ2xpZW50LmNvcmVMaWJyYXJ5IHx8IGF3YWl0IHRoaXMudHJ5Q3JlYXRlTGlicmFyeSgpO1xuICAgICAgICBpZiAoIWxpYnJhcnkpIHtcbiAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgfVxuICAgICAgICBpZiAobGlicmFyeS5jb3JlQ3JlYXRlQ29udGV4dCkge1xuICAgICAgICAgICAgdGhpcy5fY29udGV4dCA9IGF3YWl0IG5ldyBQcm9taXNlKChyZXNvbHZlKSA9PiBsaWJyYXJ5LmNvcmVDcmVhdGVDb250ZXh0KHJlc29sdmUpKTtcbiAgICAgICAgICAgIHRoaXMuX2NvcmVCcmlkZ2UgPSB7XG4gICAgICAgICAgICAgICAgcmVxdWVzdDogKFxuICAgICAgICAgICAgICAgICAgICBtZXRob2Q6IHN0cmluZyxcbiAgICAgICAgICAgICAgICAgICAgcGFyYW1zSnNvbjogc3RyaW5nLFxuICAgICAgICAgICAgICAgICAgICBvblJlc3VsdDogKHJlc3VsdEpzb246IHN0cmluZywgZXJyb3JKc29uOiBzdHJpbmcpID0+IHZvaWQsXG4gICAgICAgICAgICAgICAgKTogdm9pZCA9PiB7XG4gICAgICAgICAgICAgICAgICAgIGlmIChUT05DbGllbnQuY29yZUxpYnJhcnkpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIFRPTkNsaWVudC5jb3JlTGlicmFyeS5jb3JlUmVxdWVzdChcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB0aGlzLl9jb250ZXh0LFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIG1ldGhvZCxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBwYXJhbXNKc29uLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIG9uUmVzdWx0LFxuICAgICAgICAgICAgICAgICAgICAgICAgKTtcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICB9O1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgdGhpcy5fY29yZUJyaWRnZSA9IGxpYnJhcnk7XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICBhc3luYyBnZXRDb3JlQnJpZGdlKCk6IFByb21pc2U8P1RPTkNsaWVudENvcmVCcmlkZ2U+IHtcbiAgICAgICAgaWYgKCF0aGlzLl9jb3JlQnJpZGdlKSB7XG4gICAgICAgICAgICBhd2FpdCB0aGlzLnRyeUNyZWF0ZUNvcmVCcmlkZ2UoKTtcbiAgICAgICAgfVxuICAgICAgICByZXR1cm4gdGhpcy5fY29yZUJyaWRnZTtcbiAgICB9XG5cbiAgICBnZXRNb2R1bGU8VD4oTW9kdWxlQ2xhc3M6IHR5cGVvZiBUT05Nb2R1bGUpOiBUIHtcbiAgICAgICAgY29uc3QgbmFtZSA9IE1vZHVsZUNsYXNzLm1vZHVsZU5hbWU7XG4gICAgICAgIGNvbnN0IGV4aXN0aW5nTW9kdWxlID0gdGhpcy5tb2R1bGVzLmdldChuYW1lKTtcbiAgICAgICAgaWYgKGV4aXN0aW5nTW9kdWxlKSB7XG4gICAgICAgICAgICByZXR1cm4gKGV4aXN0aW5nTW9kdWxlOiBhbnkpO1xuICAgICAgICB9XG4gICAgICAgIGNvbnN0IG1vZHVsZSA9IG5ldyBNb2R1bGVDbGFzcyh0aGlzKTtcbiAgICAgICAgdGhpcy5tb2R1bGVzLnNldChuYW1lLCBtb2R1bGUpO1xuICAgICAgICByZXR1cm4gKG1vZHVsZTogYW55KTtcbiAgICB9XG5cbiAgICBzZXJ2ZXJUaW1lRGVsdGEoKTogUHJvbWlzZTxudW1iZXI+IHtcbiAgICAgICAgcmV0dXJuIHRoaXMuX3F1ZXJpZXMuc2VydmVyVGltZURlbHRhKCk7XG4gICAgfVxuXG4gICAgc2VydmVyTm93KCk6IFByb21pc2U8bnVtYmVyPiB7XG4gICAgICAgIHJldHVybiB0aGlzLl9xdWVyaWVzLnNlcnZlck5vdygpO1xuICAgIH1cblxuICAgIGFzeW5jIGdldE1hbmFnZW1lbnRBY2Nlc3NLZXkoKTogUHJvbWlzZTxzdHJpbmc+IHtcbiAgICAgICAgY29uc3QgcmVzdWx0ID0gYXdhaXQgdGhpcy5fcXVlcmllcy5xdWVyeSgncXVlcnl7Z2V0TWFuYWdlbWVudEFjY2Vzc0tleX0nKTtcbiAgICAgICAgcmV0dXJuIHJlc3VsdC5kYXRhLmdldE1hbmFnZW1lbnRBY2Nlc3NLZXk7XG4gICAgfVxuXG5cbiAgICBhc3luYyBfcmVzb2x2ZVNpZ25lZE1hbmFnZW1lbnRBY2Nlc3NLZXkoXG4gICAgICAgIHBhcmFtczogVE9OQWNjZXNzS2V5c01hbmFnZW1lbnRQYXJhbXMsXG4gICAgKTogUHJvbWlzZTxzdHJpbmc+IHtcbiAgICAgICAgaWYgKHBhcmFtcy5zaWduZWRNYW5hZ2VtZW50QWNjZXNzS2V5KSB7XG4gICAgICAgICAgICByZXR1cm4gcGFyYW1zLnNpZ25lZE1hbmFnZW1lbnRBY2Nlc3NLZXk7XG4gICAgICAgIH1cbiAgICAgICAgY29uc3Qgc2lnbktleXMgPSBwYXJhbXMuYWNjb3VudEtleXM7XG4gICAgICAgIGlmIChzaWduS2V5cykge1xuICAgICAgICAgICAgY29uc3QgbWFuYWdlbWVudEFjY2Vzc0tleSA9IGF3YWl0IHRoaXMuZ2V0TWFuYWdlbWVudEFjY2Vzc0tleSgpO1xuICAgICAgICAgICAgcmV0dXJuIHRoaXMuY3J5cHRvLm5hY2xTaWduKFxuICAgICAgICAgICAgICAgIHsgdGV4dDogbWFuYWdlbWVudEFjY2Vzc0tleSB9LFxuICAgICAgICAgICAgICAgIGAke3NpZ25LZXlzLnNlY3JldH0ke3NpZ25LZXlzLnB1YmxpY31gLFxuICAgICAgICAgICAgICAgICdIZXgnLFxuICAgICAgICAgICAgKTtcbiAgICAgICAgfVxuICAgICAgICByZXR1cm4gJyc7XG4gICAgfVxuXG4gICAgYXN5bmMgcmVnaXN0ZXJBY2Nlc3NLZXlzKFxuICAgICAgICBwYXJhbXM6IFRPTlJlZ2lzdGVyQWNjZXNzS2V5c1BhcmFtcyxcbiAgICApOiBQcm9taXNlPG51bWJlcj4ge1xuICAgICAgICBjb25zdCBzaWduZWRNYW5hZ2VtZW50QWNjZXNzS2V5ID0gYXdhaXQgdGhpcy5fcmVzb2x2ZVNpZ25lZE1hbmFnZW1lbnRBY2Nlc3NLZXkocGFyYW1zKTtcbiAgICAgICAgY29uc3QgcmVzdWx0ID0gYXdhaXQgdGhpcy5fcXVlcmllcy5tdXRhdGlvbihcbiAgICAgICAgICAgIGBtdXRhdGlvbiByZWdpc3RlckFjY2Vzc0tleXMoJGFjY291bnQ6IFN0cmluZywgJGtleXM6IFtBY2Nlc3NLZXldLCAkc2lnbmVkTWFuYWdlbWVudEFjY2Vzc0tleTogU3RyaW5nKSB7XG4gICAgICAgICAgICAgICAgICAgIHJlZ2lzdGVyQWNjZXNzS2V5cyhhY2NvdW50OiAkYWNjb3VudCwga2V5czogJGtleXMsIHNpZ25lZE1hbmFnZW1lbnRBY2Nlc3NLZXk6ICRzaWduZWRNYW5hZ2VtZW50QWNjZXNzS2V5KVxuICAgICAgICAgICAgICAgIH1gLCB7XG4gICAgICAgICAgICAgICAgYWNjb3VudDogcGFyYW1zLmFjY291bnQsXG4gICAgICAgICAgICAgICAga2V5czogcGFyYW1zLmtleXMsXG4gICAgICAgICAgICAgICAgc2lnbmVkTWFuYWdlbWVudEFjY2Vzc0tleSxcbiAgICAgICAgICAgIH0sXG4gICAgICAgICk7XG4gICAgICAgIHJldHVybiByZXN1bHQuZGF0YS5yZWdpc3RlckFjY2Vzc0tleXM7XG4gICAgfVxuXG4gICAgYXN5bmMgcmV2b2tlQWNjZXNzS2V5cyhcbiAgICAgICAgcGFyYW1zOiBUT05SZXZva2VBY2Nlc3NLZXlzUGFyYW1zLFxuICAgICk6IFByb21pc2U8bnVtYmVyPiB7XG4gICAgICAgIGNvbnN0IHNpZ25lZE1hbmFnZW1lbnRBY2Nlc3NLZXkgPSBhd2FpdCB0aGlzLl9yZXNvbHZlU2lnbmVkTWFuYWdlbWVudEFjY2Vzc0tleShwYXJhbXMpO1xuICAgICAgICBjb25zdCByZXN1bHQgPSBhd2FpdCB0aGlzLl9xdWVyaWVzLm11dGF0aW9uKFxuICAgICAgICAgICAgYG11dGF0aW9uIHJldm9rZUFjY2Vzc0tleXMoJGFjY291bnQ6IFN0cmluZywgJGtleXM6IFtTdHJpbmddLCAkc2lnbmVkTWFuYWdlbWVudEFjY2Vzc0tleTogU3RyaW5nKSB7XG4gICAgICAgICAgICAgICAgICAgIHJldm9rZUFjY2Vzc0tleXMoYWNjb3VudDogJGFjY291bnQsIGtleXM6ICRrZXlzLCBzaWduZWRNYW5hZ2VtZW50QWNjZXNzS2V5OiAkc2lnbmVkTWFuYWdlbWVudEFjY2Vzc0tleSlcbiAgICAgICAgICAgICAgICB9YCwge1xuICAgICAgICAgICAgICAgIGFjY291bnQ6IHBhcmFtcy5hY2NvdW50LFxuICAgICAgICAgICAgICAgIGtleXM6IHBhcmFtcy5rZXlzLFxuICAgICAgICAgICAgICAgIHNpZ25lZE1hbmFnZW1lbnRBY2Nlc3NLZXksXG4gICAgICAgICAgICB9LFxuICAgICAgICApO1xuICAgICAgICByZXR1cm4gcmVzdWx0LmRhdGEucmV2b2tlQWNjZXNzS2V5cztcbiAgICB9XG5cbiAgICBzdGFydFJvb3RTcGFuKHRyYWNlSWQ6IHN0cmluZywgc3BhbklkOiBzdHJpbmcsIG9wZXJhdGlvbk5hbWU6IHN0cmluZyk6IFNwYW4ge1xuICAgICAgICBjb25zdCB0cmFjZXIgPSB0aGlzLmNvbmZpZy50cmFjZXI7XG4gICAgICAgIGxldCBzcGFuOiA/U3BhbiA9IG51bGw7XG4gICAgICAgIGlmICh0cmFjZXIuX3N0YXJ0SW50ZXJuYWxTcGFuKSB7XG4gICAgICAgICAgICB0cnkge1xuICAgICAgICAgICAgICAgIGNvbnN0IGN0eCA9IHRyYWNlci5leHRyYWN0KEZPUk1BVF9URVhUX01BUCwge1xuICAgICAgICAgICAgICAgICAgICAndWJlci10cmFjZS1pZCc6IGAke3RyYWNlSWR9OiR7c3BhbklkfTowOjFgLFxuICAgICAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgICAgIGlmIChjdHgpIHtcbiAgICAgICAgICAgICAgICAgICAgc3BhbiA9IHRoaXMuY29uZmlnLnRyYWNlci5fc3RhcnRJbnRlcm5hbFNwYW4oXG4gICAgICAgICAgICAgICAgICAgICAgICBjdHgsXG4gICAgICAgICAgICAgICAgICAgICAgICBvcGVyYXRpb25OYW1lLFxuICAgICAgICAgICAgICAgICAgICAgICAgRGF0ZS5ub3coKSwgLy8gc3RhcnRUaW1lXG4gICAgICAgICAgICAgICAgICAgICAgICB1bmRlZmluZWQsIC8vIHVzZXJUYWdzXG4gICAgICAgICAgICAgICAgICAgICAgICB7fSwgLy8gaW50ZXJuYWxUYWdzXG4gICAgICAgICAgICAgICAgICAgICAgICBbXSwgLy8gcmVmZXJlbmNlc1xuICAgICAgICAgICAgICAgICAgICAgICAgZmFsc2UsIC8vIGhhc1ZhbGlkUGFyZW50XG4gICAgICAgICAgICAgICAgICAgICAgICBmYWxzZSwgLy8gaXNScGNTZXJ2ZXJcbiAgICAgICAgICAgICAgICAgICAgKTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9IGNhdGNoIHtcbiAgICAgICAgICAgICAgICAvLyB0cmFjZXIgY2FuJ3QgY3JlYXRlIG1lc3NhZ2Ugc3BhbiB1c2luZyBwcml2YXRlIG1ldGhvZCxcbiAgICAgICAgICAgICAgICAvLyBzbyB3ZSBhcmUgZmFsbGJhY2sgdG8gY3JlYXRlIHNwYW4gdXNpbmcgcmVndWxhciBtZXRob2RcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgICByZXR1cm4gc3BhbiB8fCB0cmFjZXIuc3RhcnRTcGFuKG9wZXJhdGlvbk5hbWUpO1xuICAgIH1cblxuICAgIGFzeW5jIHRyYWNlPFQ+KFxuICAgICAgICBuYW1lOiBzdHJpbmcsXG4gICAgICAgIGY6IChzcGFuOiBTcGFuKSA9PiBQcm9taXNlPFQ+LFxuICAgICAgICBwYXJlbnRTcGFuPzogKFNwYW4gfCBTcGFuQ29udGV4dCksXG4gICAgKTogUHJvbWlzZTxUPiB7XG4gICAgICAgIGNvbnN0IHNwYW4gPSB0aGlzLmNvbmZpZy50cmFjZXIuc3RhcnRTcGFuKG5hbWUsIHsgY2hpbGRPZjogcGFyZW50U3BhbiB9KTtcbiAgICAgICAgdHJ5IHtcbiAgICAgICAgICAgIHNwYW4uc2V0VGFnKFRhZ3MuU1BBTl9LSU5ELCAnY2xpZW50Jyk7XG4gICAgICAgICAgICBjb25zdCByZXN1bHQgPSBhd2FpdCBmKHNwYW4pO1xuICAgICAgICAgICAgaWYgKHJlc3VsdCAhPT0gdW5kZWZpbmVkKSB7XG4gICAgICAgICAgICAgICAgc3Bhbi5zZXRUYWcoJ3Jlc3VsdCcsIHJlc3VsdCk7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBzcGFuLmZpbmlzaCgpO1xuICAgICAgICAgICAgcmV0dXJuIHJlc3VsdDtcbiAgICAgICAgfSBjYXRjaCAoZXJyb3IpIHtcbiAgICAgICAgICAgIHNwYW4ubG9nKHtcbiAgICAgICAgICAgICAgICBldmVudDogJ2ZhaWxlZCcsXG4gICAgICAgICAgICAgICAgcGF5bG9hZDogZXJyb3IsXG4gICAgICAgICAgICB9KTtcbiAgICAgICAgICAgIHNwYW4uZmluaXNoKCk7XG4gICAgICAgICAgICB0aHJvdyBlcnJvcjtcbiAgICAgICAgfVxuICAgIH1cblxuICAgIC8vIEludGVybmFsc1xuXG4gICAgc3RhdGljIGNsaWVudFBsYXRmb3JtOiA/VE9OQ2xpZW50UGxhdGZvcm0gPSBudWxsO1xuICAgIHN0YXRpYyBjb3JlTGlicmFyeTogP1RPTkNsaWVudENvcmVMaWJyYXJ5ID0gbnVsbDtcblxuICAgIG1vZHVsZXM6IE1hcDxzdHJpbmcsIFRPTk1vZHVsZT47XG59XG5cblxuZXhwb3J0IGNvbnN0IFRPTkVycm9yU291cmNlID0ge1xuICAgIENMSUVOVDogJ2NsaWVudCcsXG4gICAgTk9ERTogJ25vZGUnLFxufTtcblxuZXhwb3J0IGNvbnN0IFRPTkVycm9yQ29kZSA9IHtcbiAgICBDTElFTlRfRE9FU19OT1RfQ09ORklHVVJFRDogMTAwMCxcbiAgICBTRU5EX05PREVfUkVRVUVTVF9GQUlMRUQ6IDEwMDEsXG4gICAgTUVTU0FHRV9BTFJFQURZX0VYUElSRUQ6IDEwMDEsXG4gICAgUlVOX0xPQ0FMX0FDQ09VTlRfRE9FU19OT1RfRVhJU1RTOiAxMDAyLFxuICAgIFdBSVRfRk9SX1RJTUVPVVQ6IDEwMDMsXG4gICAgSU5URVJOQUxfRVJST1I6IDEwMDQsXG4gICAgUVVFUllfRkFJTEVEOiAxMDA1LFxuICAgIE1FU1NBR0VfRVhQSVJFRDogMTAwNixcbiAgICBTRVJWRVJfRE9FU05UX1NVUFBPUlRfQUdHUkVHQVRJT05TOiAxMDA3LFxuICAgIElOVkFMSURfQ09OUzogMTAwOCxcbiAgICBBRERSRVNTX1JFUVVJUkVEX0ZPUl9SVU5fTE9DQUw6IDEwMDksXG4gICAgTkVUV09SS19TSUxFTlQ6IDEwMTAsXG4gICAgVFJBTlNBQ1RJT05fTEFHOiAxMDExLFxuICAgIFRSQU5TQUNUSU9OX1dBSVRfVElNRU9VVDogMTAxMixcbiAgICBDTE9DS19PVVRfT0ZfU1lOQzogMTAxMyxcbiAgICBBQ0NPVU5UX01JU1NJTkc6IDEwMTQsXG4gICAgQUNDT1VOVF9DT0RFX01JU1NJTkc6IDEwMTUsXG4gICAgQUNDT1VOVF9CQUxBTkNFX1RPT19MT1c6IDEwMTYsXG4gICAgQUNDT1VOVF9GUk9aRU5fT1JfREVMRVRFRDogMTAxNyxcblxuICAgIC8vIENvbnRyYWN0c1xuXG4gICAgQ09OVFJBQ1RfRVhFQ1VUSU9OX0ZBSUxFRDogMzAyNSxcblxuICAgIC8vIENyeXB0b1xuXG4gICAgU0lHTklOR19TT1VSQ0VfSVNfTk9UX1NQRUNJRklFRDogMjAyMSxcbiAgICBJTlZBTElEX0NSWVBUT19CT1hfUEFSQU1TOiAyMDMwLFxuXG4gICAgLy8gUXVlcmllc1xuXG4gICAgUVVFUllfRk9SQ0lCTFlfQUJPUlRFRDogNDAwNSxcblxufTtcblxuZXhwb3J0IGNvbnN0IFRPTkNvbnRyYWN0RXhpdENvZGUgPSB7XG4gICAgUkVQTEFZX1BST1RFQ1RJT046IDUyLFxuICAgIE1FU1NBR0VfRVhQSVJFRDogNTcsXG4gICAgTk9fR0FTOiAxMyxcbn07XG5cbmV4cG9ydCBjbGFzcyBUT05DbGllbnRFcnJvciB7XG4gICAgc3RhdGljIHNvdXJjZSA9IFRPTkVycm9yU291cmNlO1xuICAgIHN0YXRpYyBjb2RlID0gVE9ORXJyb3JDb2RlO1xuICAgIHN0YXRpYyBjb3JlVmVyc2lvbiA9ICcnO1xuICAgIHN0YXRpYyBRVUVSWV9GT1JDSUJMWV9BQk9SVEVEID0gbmV3IFRPTkNsaWVudEVycm9yKFxuICAgICAgICAnR3JhcGhRTCBxdWVyeSB3YXMgZm9yY2libHkgYWJvcnRlZCBvbiB0aW1lb3V0LicsXG4gICAgICAgIFRPTkVycm9yQ29kZS5RVUVSWV9GT1JDSUJMWV9BQk9SVEVELFxuICAgICk7XG5cblxuICAgIG1lc3NhZ2U6IHN0cmluZztcbiAgICBzb3VyY2U6IHN0cmluZztcbiAgICBjb2RlOiBudW1iZXI7XG4gICAgZGF0YTogYW55O1xuICAgIGNvcmVWZXJzaW9uOiBzdHJpbmc7XG5cbiAgICBjb25zdHJ1Y3RvcihtZXNzYWdlOiBzdHJpbmcsIGNvZGU6IG51bWJlciwgc291cmNlPzogc3RyaW5nLCBkYXRhPzogYW55KSB7XG4gICAgICAgIHRoaXMubWVzc2FnZSA9IG1lc3NhZ2U7XG4gICAgICAgIHRoaXMuY29kZSA9IGNvZGU7XG4gICAgICAgIHRoaXMuc291cmNlID0gc291cmNlIHx8IFRPTkVycm9yU291cmNlLkNMSUVOVDtcbiAgICAgICAgdGhpcy5jb3JlVmVyc2lvbiA9IFRPTkNsaWVudEVycm9yLmNvcmVWZXJzaW9uO1xuICAgICAgICB0aGlzLmRhdGEgPSBkYXRhO1xuICAgIH1cblxuICAgIHN0YXRpYyBpc0NsaWVudEVycm9yKGVycm9yOiBhbnksIGNvZGU6IG51bWJlcik6IGJvb2xlYW4ge1xuICAgICAgICByZXR1cm4gKGVycm9yLnNvdXJjZSA9PT0gVE9OQ2xpZW50RXJyb3Iuc291cmNlLkNMSUVOVClcbiAgICAgICAgICAgICYmIChlcnJvci5jb2RlID09PSBjb2RlKTtcbiAgICB9XG5cbiAgICBzdGF0aWMgaXNOb2RlRXJyb3IoZXJyb3I6IGFueSwgY29kZTogbnVtYmVyKTogYm9vbGVhbiB7XG4gICAgICAgIHJldHVybiAoZXJyb3Iuc291cmNlID09PSBUT05DbGllbnRFcnJvci5zb3VyY2UuTk9ERSlcbiAgICAgICAgICAgICYmIChlcnJvci5jb2RlID09PSBjb2RlKTtcbiAgICB9XG5cbiAgICBzdGF0aWMgaXNDb250cmFjdEVycm9yKGVycm9yOiBhbnksIGV4aXRDb2RlOiBudW1iZXIpOiBib29sZWFuIHtcbiAgICAgICAgcmV0dXJuIChlcnJvci5zb3VyY2UgPT09IFRPTkNsaWVudEVycm9yLnNvdXJjZS5OT0RFKVxuICAgICAgICAgICAgJiYgKGVycm9yLmNvZGUgPT09IFRPTkNsaWVudEVycm9yLmNvZGUuQ09OVFJBQ1RfRVhFQ1VUSU9OX0ZBSUxFRClcbiAgICAgICAgICAgICYmIChlcnJvci5kYXRhICYmIGVycm9yLmRhdGEuZXhpdF9jb2RlID09PSBleGl0Q29kZSk7XG4gICAgfVxuXG4gICAgc3RhdGljIGlzT3JpZ2luYWxDb250cmFjdEVycm9yKGVycm9yOiBhbnksIGV4aXRDb2RlOiBudW1iZXIpOiBib29sZWFuIHtcbiAgICAgICAgcmV0dXJuIFRPTkNsaWVudEVycm9yLmlzQ29udHJhY3RFcnJvcihlcnJvciwgZXhpdENvZGUpXG4gICAgICAgICAgICAmJiAoIWVycm9yLmRhdGE/Lm9yaWdpbmFsX2Vycm9yKTtcbiAgICB9XG5cbiAgICBzdGF0aWMgaXNSZXNvbHZlZENvbnRyYWN0RXJyb3JBZnRlckV4cGlyZShlcnJvcjogYW55LCBleGl0Q29kZTogbnVtYmVyKTogYm9vbGVhbiB7XG4gICAgICAgIHJldHVybiBUT05DbGllbnRFcnJvci5pc0NvbnRyYWN0RXJyb3IoZXJyb3IsIGV4aXRDb2RlKVxuICAgICAgICAgICAgJiYgKGVycm9yLmRhdGEgJiYgZXJyb3IuZGF0YS5vcmlnaW5hbF9lcnJvclxuICAgICAgICAgICAgICAgICYmIFRPTkNsaWVudEVycm9yLmlzTWVzc2FnZUV4cGlyZWQoZXJyb3IuZGF0YS5vcmlnaW5hbF9lcnJvcikpO1xuICAgIH1cblxuICAgIHN0YXRpYyBpbnRlcm5hbEVycm9yKG1lc3NhZ2U6IHN0cmluZyk6IFRPTkNsaWVudEVycm9yIHtcbiAgICAgICAgcmV0dXJuIG5ldyBUT05DbGllbnRFcnJvcihcbiAgICAgICAgICAgIGBJbnRlcm5hbCBlcnJvcjogJHttZXNzYWdlfWAsXG4gICAgICAgICAgICBUT05FcnJvckNvZGUuSU5URVJOQUxfRVJST1IsXG4gICAgICAgICk7XG4gICAgfVxuXG4gICAgc3RhdGljIGludmFsaWRDb25zKCk6IFRPTkNsaWVudEVycm9yIHtcbiAgICAgICAgcmV0dXJuIG5ldyBUT05DbGllbnRFcnJvcihcbiAgICAgICAgICAgICdJbnZhbGlkIENPTlMgc3RydWN0dXJlLiBFYWNoIENPTlMgaXRlbSBtdXN0IGNvbnRhaW5zIG9mIHR3byBlbGVtZW50cy4nLFxuICAgICAgICAgICAgVE9ORXJyb3JDb2RlLklOVkFMSURfQ09OUyxcbiAgICAgICAgKTtcbiAgICB9XG5cbiAgICBzdGF0aWMgY2xpZW50RG9lc05vdENvbmZpZ3VyZWQoKTogVE9OQ2xpZW50RXJyb3Ige1xuICAgICAgICByZXR1cm4gbmV3IFRPTkNsaWVudEVycm9yKFxuICAgICAgICAgICAgJ1RPTiBDbGllbnQgaXNuXFwndCBjb25maWd1cmVkJyxcbiAgICAgICAgICAgIFRPTkVycm9yQ29kZS5DTElFTlRfRE9FU19OT1RfQ09ORklHVVJFRCxcbiAgICAgICAgKTtcbiAgICB9XG5cbiAgICBzdGF0aWMgc2VuZE5vZGVSZXF1ZXN0RmFpbGVkKHJlc3BvbnNlVGV4dDogc3RyaW5nKTogVE9OQ2xpZW50RXJyb3Ige1xuICAgICAgICByZXR1cm4gbmV3IFRPTkNsaWVudEVycm9yKFxuICAgICAgICAgICAgYFNlbmQgbm9kZSByZXF1ZXN0IGZhaWxlZDogJHtyZXNwb25zZVRleHR9YCxcbiAgICAgICAgICAgIFRPTkVycm9yQ29kZS5TRU5EX05PREVfUkVRVUVTVF9GQUlMRUQsXG4gICAgICAgICk7XG4gICAgfVxuXG4gICAgc3RhdGljIHJ1bkxvY2FsQWNjb3VudERvZXNOb3RFeGlzdHMoZnVuY3Rpb25OYW1lOiBzdHJpbmcsIGFkZHJlc3M6IHN0cmluZyk6IFRPTkNsaWVudEVycm9yIHtcbiAgICAgICAgcmV0dXJuIG5ldyBUT05DbGllbnRFcnJvcihcbiAgICAgICAgICAgIGBbJHtmdW5jdGlvbk5hbWV9XSBydW4gbG9jYWwgZmFpbGVkOiBhY2NvdW50IFske2FkZHJlc3N9XSBkb2VzIG5vdCBleGlzdHNgLFxuICAgICAgICAgICAgVE9ORXJyb3JDb2RlLlJVTl9MT0NBTF9BQ0NPVU5UX0RPRVNfTk9UX0VYSVNUUyxcbiAgICAgICAgKTtcbiAgICB9XG5cbiAgICBzdGF0aWMgd2FpdEZvclRpbWVvdXQoKSB7XG4gICAgICAgIHJldHVybiBuZXcgVE9OQ2xpZW50RXJyb3IoXG4gICAgICAgICAgICAnV2FpdCBmb3Igb3BlcmF0aW9uIHJlamVjdGVkIG9uIHRpbWVvdXQnLFxuICAgICAgICAgICAgVE9ORXJyb3JDb2RlLldBSVRfRk9SX1RJTUVPVVQsXG4gICAgICAgICk7XG4gICAgfVxuXG4gICAgc3RhdGljIHF1ZXJ5RmFpbGVkKGVycm9yczogRXJyb3JbXSkge1xuICAgICAgICByZXR1cm4gbmV3IFRPTkNsaWVudEVycm9yKFxuICAgICAgICAgICAgYFF1ZXJ5IGZhaWxlZDogJHtlcnJvcnMubWFwKHggPT4geC5tZXNzYWdlIHx8IHgudG9TdHJpbmcoKSkuam9pbignXFxuJyl9YCxcbiAgICAgICAgICAgIFRPTkVycm9yQ29kZS5RVUVSWV9GQUlMRUQsXG4gICAgICAgICk7XG4gICAgfVxuXG4gICAgc3RhdGljIGZvcm1hdFRpbWUodGltZTogP251bWJlcik6ID9zdHJpbmcge1xuICAgICAgICBpZiAodGltZSkge1xuICAgICAgICAgICAgcmV0dXJuIGAke25ldyBEYXRlKHRpbWUgKiAxMDAwKS50b0lTT1N0cmluZygpfSAoJHt0aW1lfSlgO1xuICAgICAgICB9XG4gICAgICAgIHJldHVybiBudWxsO1xuICAgIH1cblxuICAgIHN0YXRpYyBtZXNzYWdlRXhwaXJlZChkYXRhOiB7XG4gICAgICAgIG1lc3NhZ2VJZDogc3RyaW5nLFxuICAgICAgICBzZW5kaW5nVGltZTogbnVtYmVyLFxuICAgICAgICBleHBpcmU6ID9udW1iZXIsXG4gICAgICAgIGJsb2NrVGltZTogP251bWJlcixcbiAgICB9KSB7XG4gICAgICAgIHJldHVybiBuZXcgVE9OQ2xpZW50RXJyb3IoXG4gICAgICAgICAgICAnTWVzc2FnZSBleHBpcmVkJyxcbiAgICAgICAgICAgIFRPTkVycm9yQ29kZS5NRVNTQUdFX0VYUElSRUQsXG4gICAgICAgICAgICBUT05FcnJvclNvdXJjZS5DTElFTlQsXG4gICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgc2VuZGluZ1RpbWU6IFRPTkNsaWVudEVycm9yLmZvcm1hdFRpbWUoZGF0YS5zZW5kaW5nVGltZSksXG4gICAgICAgICAgICAgICAgZXhwaXJhdGlvblRpbWU6IFRPTkNsaWVudEVycm9yLmZvcm1hdFRpbWUoZGF0YS5leHBpcmUpLFxuICAgICAgICAgICAgICAgIGJsb2NrVGltZTogVE9OQ2xpZW50RXJyb3IuZm9ybWF0VGltZShkYXRhLmJsb2NrVGltZSksXG4gICAgICAgICAgICB9LFxuICAgICAgICApO1xuICAgIH1cblxuICAgIHN0YXRpYyBzZXJ2ZXJEb2VzbnRTdXBwb3J0QWdncmVnYXRpb25zKCkge1xuICAgICAgICByZXR1cm4gbmV3IFRPTkNsaWVudEVycm9yKFxuICAgICAgICAgICAgJ1NlcnZlciBkb2VzblxcJ3Qgc3VwcG9ydCBhZ2dyZWdhdGlvbnMnLFxuICAgICAgICAgICAgVE9ORXJyb3JDb2RlLlNFUlZFUl9ET0VTTlRfU1VQUE9SVF9BR0dSRUdBVElPTlMsXG4gICAgICAgICk7XG4gICAgfVxuXG4gICAgc3RhdGljIGFkZHJlc3NSZXF1aXJlZEZvclJ1bkxvY2FsKCkge1xuICAgICAgICByZXR1cm4gbmV3IFRPTkNsaWVudEVycm9yKFxuICAgICAgICAgICAgJ0FkZHJlc3MgcmVxdWlyZWQgZm9yIHJ1biBsb2NhbC4gWW91IGhhdmVuXFwndCBzcGVjaWZpZWQgY29udHJhY3QgY29kZSBvciBkYXRhICdcbiAgICAgICAgICAgICsgJ3NvIGFkZHJlc3MgaXMgcmVxdWlyZWQgdG8gbG9hZCBtaXNzaW5nIHBhcnRzIGZyb20gbmV0d29yay4nLFxuICAgICAgICAgICAgVE9OQ2xpZW50RXJyb3IuY29kZS5BRERSRVNTX1JFUVVJUkVEX0ZPUl9SVU5fTE9DQUwsXG4gICAgICAgICAgICBUT05DbGllbnRFcnJvci5zb3VyY2UuQ0xJRU5ULFxuICAgICAgICApO1xuICAgIH1cblxuICAgIHN0YXRpYyBuZXR3b3JrU2lsZW50KGRhdGE6IHtcbiAgICAgICAgbWVzc2FnZUlkOiBzdHJpbmcsXG4gICAgICAgIHNlbmRpbmdUaW1lOiBudW1iZXIsXG4gICAgICAgIGV4cGlyZTogbnVtYmVyLFxuICAgICAgICB0aW1lb3V0OiBudW1iZXIsXG4gICAgICAgIGJsb2NrSWQ/OiBzdHJpbmcsXG4gICAgICAgIG1lc3NhZ2VQcm9jZXNzaW5nU3RhdGU/OiBUT05NZXNzYWdlUHJvY2Vzc2luZ1N0YXRlLFxuICAgIH0pIHtcbiAgICAgICAgcmV0dXJuIG5ldyBUT05DbGllbnRFcnJvcihcbiAgICAgICAgICAgICdOZXR3b3JrIHNpbGVudDogbm8gYmxvY2tzIHByb2R1Y2VkIGR1cmluZyB0aW1lb3V0LicsXG4gICAgICAgICAgICBUT05FcnJvckNvZGUuTkVUV09SS19TSUxFTlQsXG4gICAgICAgICAgICBUT05FcnJvclNvdXJjZS5DTElFTlQsXG4gICAgICAgICAgICBkYXRhICYmIHtcbiAgICAgICAgICAgICAgICAuLi5kYXRhLFxuICAgICAgICAgICAgICAgIHNlbmRpbmdUaW1lOiBUT05DbGllbnRFcnJvci5mb3JtYXRUaW1lKGRhdGEuc2VuZGluZ1RpbWUpLFxuICAgICAgICAgICAgICAgIGV4cGlyYXRpb25UaW1lOiBUT05DbGllbnRFcnJvci5mb3JtYXRUaW1lKGRhdGEuZXhwaXJlKSxcbiAgICAgICAgICAgIH0sXG4gICAgICAgICk7XG4gICAgfVxuXG4gICAgc3RhdGljIHRyYW5zYWN0aW9uV2FpdFRpbWVvdXQoZGF0YToge1xuICAgICAgICBtZXNzYWdlSWQ6IHN0cmluZyxcbiAgICAgICAgc2VuZGluZ1RpbWU6IG51bWJlcixcbiAgICAgICAgdGltZW91dDogbnVtYmVyLFxuICAgICAgICBtZXNzYWdlUHJvY2Vzc2luZ1N0YXRlPzogVE9OTWVzc2FnZVByb2Nlc3NpbmdTdGF0ZSxcbiAgICB9KSB7XG4gICAgICAgIHJldHVybiBuZXcgVE9OQ2xpZW50RXJyb3IoXG4gICAgICAgICAgICAnVHJhbnNhY3Rpb24gZGlkIG5vdCBwcm9kdWNlZCBkdXJpbmcgc3BlY2lmaWVkIHRpbWVvdXQnLFxuICAgICAgICAgICAgVE9ORXJyb3JDb2RlLlRSQU5TQUNUSU9OX1dBSVRfVElNRU9VVCxcbiAgICAgICAgICAgIFRPTkVycm9yU291cmNlLkNMSUVOVCxcbiAgICAgICAgICAgIGRhdGEgJiYge1xuICAgICAgICAgICAgICAgIC4uLmRhdGEsXG4gICAgICAgICAgICAgICAgc2VuZGluZ1RpbWU6IFRPTkNsaWVudEVycm9yLmZvcm1hdFRpbWUoZGF0YS5zZW5kaW5nVGltZSksXG4gICAgICAgICAgICB9LFxuICAgICAgICApO1xuICAgIH1cblxuICAgIHN0YXRpYyBjbG9ja091dE9mU3luYygpIHtcbiAgICAgICAgcmV0dXJuIG5ldyBUT05DbGllbnRFcnJvcihcbiAgICAgICAgICAgICdZb3UgbG9jYWwgY2xvY2sgaXMgb3V0IG9mIHN5bmMgd2l0aCB0aGUgc2VydmVyIHRpbWUuICdcbiAgICAgICAgICAgICsgJ0l0IGlzIGEgY3JpdGljYWwgY29uZGl0aW9uIGZvciBzZW5kaW5nIG1lc3NhZ2VzIHRvIHRoZSBibG9ja2NoYWluLiAnXG4gICAgICAgICAgICArICdQbGVhc2Ugc3luYyB5b3UgY2xvY2sgd2l0aCB0aGUgaW50ZXJuZXQgdGltZS4nLFxuICAgICAgICAgICAgVE9ORXJyb3JDb2RlLkNMT0NLX09VVF9PRl9TWU5DLFxuICAgICAgICApO1xuICAgIH1cblxuICAgIHN0YXRpYyBhY2NvdW50TWlzc2luZyhhZGRyZXNzOiBzdHJpbmcpIHtcbiAgICAgICAgcmV0dXJuIG5ldyBUT05DbGllbnRFcnJvcihcbiAgICAgICAgICAgIGBBY2NvdW50IHdpdGggYWRkcmVzcyBbJHthZGRyZXNzfV0gZG9lc24ndCBleGlzdHMuIGBcbiAgICAgICAgICAgICsgJ1lvdSBoYXZlIHRvIHByZXBhaWQgdGhpcyBhY2NvdW50IHRvIGhhdmUgYSBwb3NpdGl2ZSBiYWxhbmNlIG9uIHRoZW0gYW5kIHRoZW4gZGVwbG95ICdcbiAgICAgICAgICAgICsgJ2EgY29udHJhY3QgY29kZSBmb3IgdGhpcyBhY2NvdW50LidcbiAgICAgICAgICAgICsgJ1NlZSBTREsgZG9jdW1lbnRhdGlvbiBmb3IgZGV0YWlsZWQgaW5zdHJ1Y3Rpb25zLicsXG4gICAgICAgICAgICBUT05FcnJvckNvZGUuQUNDT1VOVF9NSVNTSU5HLFxuICAgICAgICApO1xuICAgIH1cblxuICAgIHN0YXRpYyBhY2NvdW50Q29kZU1pc3NpbmcoYWRkcmVzczogc3RyaW5nLCBiYWxhbmNlOiBzdHJpbmcpIHtcbiAgICAgICAgcmV0dXJuIG5ldyBUT05DbGllbnRFcnJvcihcbiAgICAgICAgICAgIGBBY2NvdW50IHdpdGggYWRkcmVzcyBbJHthZGRyZXNzfV0gZXhpc3RzIGJ1dCBoYXZlbid0IGEgY29udHJhY3QgY29kZSB5ZXQuIGBcbiAgICAgICAgICAgICsgJ1lvdSBoYXZlIHRvIGVuc3VyZSB0aGF0IGFuIGFjY291bnQgaGFzIGFuIGVub3VnaCBiYWxhbmNlIGZvciBkZXBsb3lpbmcgJ1xuICAgICAgICAgICAgKyAnYSBjb250cmFjdCBjb2RlIGFuZCB0aGVuIGRlcGxveSBhIGNvbnRyYWN0IGNvZGUgZm9yIHRoaXMgYWNjb3VudC4gJ1xuICAgICAgICAgICAgKyBgQ3VycmVudCBhY2NvdW50IGJhbGFuY2UgaXMgWyR7YmFsYW5jZX1dLiBgXG4gICAgICAgICAgICArICdTZWUgU0RLIGRvY3VtZW50YXRpb24gZm9yIGRldGFpbGVkIGluc3RydWN0aW9ucy4nLFxuICAgICAgICAgICAgVE9ORXJyb3JDb2RlLkFDQ09VTlRfQ09ERV9NSVNTSU5HLFxuICAgICAgICApO1xuICAgIH1cblxuICAgIHN0YXRpYyBhY2NvdW50QmFsYW5jZVRvb0xvdyhhZGRyZXNzOiBzdHJpbmcsIGJhbGFuY2U6IHN0cmluZykge1xuICAgICAgICByZXR1cm4gbmV3IFRPTkNsaWVudEVycm9yKFxuICAgICAgICAgICAgYEFjY291bnQgd2l0aCBhZGRyZXNzIFske2FkZHJlc3N9XSBoYXMgdG9vIGxvdyBiYWxhbmNlIFske2JhbGFuY2V9XS4gYFxuICAgICAgICAgICAgKyAnWW91IGhhdmUgdG8gc2VuZCBzb21lIHZhbHVlIHRvIGFjY291bnQgYmFsYW5jZSBmcm9tIG90aGVyIGNvbnRyYWN0ICdcbiAgICAgICAgICAgICsgJyhlLmcuIFdhbGxldCBjb250cmFjdCkuICdcbiAgICAgICAgICAgICsgJ1NlZSBTREsgZG9jdW1lbnRhdGlvbiBmb3IgZGV0YWlsZWQgaW5zdHJ1Y3Rpb25zLicsXG4gICAgICAgICAgICBUT05FcnJvckNvZGUuQUNDT1VOVF9CQUxBTkNFX1RPT19MT1csXG4gICAgICAgICk7XG4gICAgfVxuXG4gICAgc3RhdGljIHNpZ25pbmdTb3VyY2VJc05vdFNwZWNpZmllZCgpIHtcbiAgICAgICAgcmV0dXJuIG5ldyBUT05DbGllbnRFcnJvcihcbiAgICAgICAgICAgICdZb3UgbXVzdCBwcm92aWRlIHNpZ25pbmcga2V5cyBvciBzaWduaW5nIGJveCB0byBzaWduIHlvdSBtZXNzYWdlLicsXG4gICAgICAgICAgICBUT05FcnJvckNvZGUuU0lHTklOR19TT1VSQ0VfSVNfTk9UX1NQRUNJRklFRCxcbiAgICAgICAgKTtcbiAgICB9XG5cbiAgICBzdGF0aWMgaW52YWxpZENyeXB0b0JveFBhcmFtcyhlbmNyeXB0ZWRTZWVkUGhyYXNlOiBUT05JbnB1dE1lc3NhZ2UpIHtcbiAgICAgICAgcmV0dXJuIG5ldyBUT05DbGllbnRFcnJvcihcbiAgICAgICAgICAgICdZb3UgbXVzdCBwcm92aWRlIGEgdmFsaWQgZW5jcnlwdGVkIHNlZWQgcGhyYXNlIHRvIGNyZWF0ZSBhIGNvcmUgY3J5cHRvIGJveC4gJ1xuICAgICAgICAgICAgKyBgUHJvdmlkZWQgcGhyYXNlIGlzOiAke0pTT04uc3RyaW5naWZ5KGVuY3J5cHRlZFNlZWRQaHJhc2UpfS5gLFxuICAgICAgICAgICAgVE9ORXJyb3JDb2RlLklOVkFMSURfQ1JZUFRPX0JPWF9QQVJBTVMsXG4gICAgICAgICk7XG4gICAgfVxuXG4gICAgc3RhdGljIG5vQmxvY2tzKHdvcmtjaGFpbjogbnVtYmVyKSB7XG4gICAgICAgIGNvbnN0IHdvcmtjaGFpbk5hbWUgPSB3b3JrY2hhaW4gPT09IC0xID8gJ21hc3RlcmNoYWluJyA6IGB3b3JrY2hhaW4gJHt3b3JrY2hhaW59YDtcbiAgICAgICAgcmV0dXJuIG5ldyBUT05DbGllbnRFcnJvcihcbiAgICAgICAgICAgIGBcIk5vIGJsb2NrcyBmb3IgJHt3b3JrY2hhaW5OYW1lfSBmb3VuZFwiLmAsXG4gICAgICAgICAgICBUT05FcnJvckNvZGUuTkVUV09SS19TSUxFTlQsXG4gICAgICAgICk7XG4gICAgfVxuXG4gICAgc3RhdGljIGludmFsaWRCbG9ja2NoYWluKG1lc3NhZ2U6IHN0cmluZykge1xuICAgICAgICByZXR1cm4gbmV3IFRPTkNsaWVudEVycm9yKG1lc3NhZ2UsIFRPTkVycm9yQ29kZS5ORVRXT1JLX1NJTEVOVCk7XG4gICAgfVxuXG4gICAgc3RhdGljIGlzTWVzc2FnZUV4cGlyZWQoZXJyb3I6IGFueSk6IGJvb2xlYW4ge1xuICAgICAgICByZXR1cm4gVE9OQ2xpZW50RXJyb3IuaXNDbGllbnRFcnJvcihlcnJvciwgVE9OQ2xpZW50RXJyb3IuY29kZS5NRVNTQUdFX0VYUElSRUQpO1xuICAgIH1cblxuICAgIHN0YXRpYyBpc1dhaXRGb3JUaW1lb3V0KGVycm9yOiBhbnkpOiBib29sZWFuIHtcbiAgICAgICAgcmV0dXJuIFRPTkNsaWVudEVycm9yLmlzQ2xpZW50RXJyb3IoZXJyb3IsIFRPTkNsaWVudEVycm9yLmNvZGUuV0FJVF9GT1JfVElNRU9VVCk7XG4gICAgfVxufVxuIl19