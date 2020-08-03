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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uL3NyYy9UT05DbGllbnQuanMiXSwibmFtZXMiOlsiVE9OQ2xpZW50IiwiY2xpZW50UGxhdGZvcm0iLCJtb2R1bGVzIiwiTWFwIiwiY29uZmlnIiwiZ2V0TW9kdWxlIiwiVE9OQ29uZmlnTW9kdWxlIiwiY3J5cHRvIiwiVE9OQ3J5cHRvTW9kdWxlIiwiY29udHJhY3RzIiwiVE9OQ29udHJhY3RzTW9kdWxlIiwiX3F1ZXJpZXMiLCJUT05RdWVyaWVzTW9kdWxlIiwicXVlcmllcyIsIl9jb250ZXh0IiwiX2NvcmVCcmlkZ2UiLCJnZXRDb3JlQnJpZGdlIiwidmFsdWVzIiwibW9kdWxlIiwic2V0dXAiLCJnZXRWZXJzaW9uIiwiVE9OQ2xpZW50RXJyb3IiLCJjb3JlVmVyc2lvbiIsImNsb3NlIiwibGlicmFyeSIsImNvcmVMaWJyYXJ5IiwidW5kZWZpbmVkIiwiY29udGV4dCIsIlByb21pc2UiLCJyZXNvbHZlIiwiY29yZURlc3Ryb3lDb250ZXh0IiwicGxhdGZvcm0iLCJjcmVhdGVMaWJyYXJ5IiwidHJ5Q3JlYXRlTGlicmFyeSIsImNvcmVDcmVhdGVDb250ZXh0IiwicmVxdWVzdCIsIm1ldGhvZCIsInBhcmFtc0pzb24iLCJvblJlc3VsdCIsImNvcmVSZXF1ZXN0IiwidHJ5Q3JlYXRlQ29yZUJyaWRnZSIsIk1vZHVsZUNsYXNzIiwibmFtZSIsIm1vZHVsZU5hbWUiLCJleGlzdGluZ01vZHVsZSIsImdldCIsInNldCIsInNlcnZlclRpbWVEZWx0YSIsInNlcnZlck5vdyIsInF1ZXJ5IiwicmVzdWx0IiwiZGF0YSIsImdldE1hbmFnZW1lbnRBY2Nlc3NLZXkiLCJwYXJhbXMiLCJzaWduZWRNYW5hZ2VtZW50QWNjZXNzS2V5Iiwic2lnbktleXMiLCJhY2NvdW50S2V5cyIsIm1hbmFnZW1lbnRBY2Nlc3NLZXkiLCJuYWNsU2lnbiIsInRleHQiLCJzZWNyZXQiLCJfcmVzb2x2ZVNpZ25lZE1hbmFnZW1lbnRBY2Nlc3NLZXkiLCJtdXRhdGlvbiIsImFjY291bnQiLCJrZXlzIiwicmVnaXN0ZXJBY2Nlc3NLZXlzIiwicmV2b2tlQWNjZXNzS2V5cyIsInRyYWNlSWQiLCJzcGFuSWQiLCJvcGVyYXRpb25OYW1lIiwidHJhY2VyIiwic3BhbiIsIl9zdGFydEludGVybmFsU3BhbiIsImN0eCIsImV4dHJhY3QiLCJGT1JNQVRfVEVYVF9NQVAiLCJEYXRlIiwibm93Iiwic3RhcnRTcGFuIiwiZiIsInBhcmVudFNwYW4iLCJjaGlsZE9mIiwic2V0VGFnIiwiVGFncyIsIlNQQU5fS0lORCIsImZpbmlzaCIsImxvZyIsImV2ZW50IiwicGF5bG9hZCIsImNsaWVudCIsInNldERhdGEiLCJUT05FcnJvclNvdXJjZSIsIkNMSUVOVCIsIk5PREUiLCJUT05FcnJvckNvZGUiLCJDTElFTlRfRE9FU19OT1RfQ09ORklHVVJFRCIsIlNFTkRfTk9ERV9SRVFVRVNUX0ZBSUxFRCIsIk1FU1NBR0VfQUxSRUFEWV9FWFBJUkVEIiwiUlVOX0xPQ0FMX0FDQ09VTlRfRE9FU19OT1RfRVhJU1RTIiwiV0FJVF9GT1JfVElNRU9VVCIsIklOVEVSTkFMX0VSUk9SIiwiUVVFUllfRkFJTEVEIiwiTUVTU0FHRV9FWFBJUkVEIiwiU0VSVkVSX0RPRVNOVF9TVVBQT1JUX0FHR1JFR0FUSU9OUyIsIklOVkFMSURfQ09OUyIsIkFERFJFU1NfUkVRVUlSRURfRk9SX1JVTl9MT0NBTCIsIk5FVFdPUktfU0lMRU5UIiwiVFJBTlNBQ1RJT05fTEFHIiwiVFJBTlNBQ1RJT05fV0FJVF9USU1FT1VUIiwiQ0xPQ0tfT1VUX09GX1NZTkMiLCJBQ0NPVU5UX01JU1NJTkciLCJBQ0NPVU5UX0NPREVfTUlTU0lORyIsIkFDQ09VTlRfQkFMQU5DRV9UT09fTE9XIiwiQUNDT1VOVF9GUk9aRU5fT1JfREVMRVRFRCIsIkNPTlRSQUNUX0VYRUNVVElPTl9GQUlMRUQiLCJRVUVSWV9GT1JDSUJMWV9BQk9SVEVEIiwiVE9OQ29udHJhY3RFeGl0Q29kZSIsIlJFUExBWV9QUk9URUNUSU9OIiwiTk9fR0FTIiwibWVzc2FnZSIsImNvZGUiLCJzb3VyY2UiLCJlcnJvciIsImV4aXRDb2RlIiwiZXhpdF9jb2RlIiwiaXNDb250cmFjdEVycm9yIiwib3JpZ2luYWxfZXJyb3IiLCJpc01lc3NhZ2VFeHBpcmVkIiwicmVzcG9uc2VUZXh0IiwiZnVuY3Rpb25OYW1lIiwiYWRkcmVzcyIsImVycm9ycyIsIm1hcCIsIngiLCJ0b1N0cmluZyIsImpvaW4iLCJ0aW1lIiwidG9JU09TdHJpbmciLCJzZW5kaW5nVGltZSIsImZvcm1hdFRpbWUiLCJleHBpcmF0aW9uVGltZSIsImV4cGlyZSIsImJsb2NrVGltZSIsImJhbGFuY2UiLCJ3b3JrY2hhaW4iLCJ3b3JrY2hhaW5OYW1lIiwiaXNDbGllbnRFcnJvciJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7O0FBS0E7O0FBY0E7O0FBQ0E7O0FBQ0E7O0FBRUE7O0FBT0E7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFxQkE7Ozs7O0lBS2FBLFM7OzsrQkFDU0MsYyxFQUFtQztBQUNqREQsTUFBQUEsU0FBUyxDQUFDQyxjQUFWLEdBQTJCQSxjQUEzQjtBQUNILEssQ0FHRDs7OztBQVNBLHVCQUFjO0FBQUE7O0FBQUE7O0FBQUE7O0FBQUE7O0FBQUE7O0FBQUE7O0FBQUE7O0FBQUE7O0FBQUE7O0FBQ1YsU0FBS0MsT0FBTCxHQUFlLElBQUlDLEdBQUosRUFBZjtBQUNBLFNBQUtDLE1BQUwsR0FBYyxLQUFLQyxTQUFMLENBQWVDLDJCQUFmLENBQWQ7QUFDQSxTQUFLQyxNQUFMLEdBQWMsS0FBS0YsU0FBTCxDQUFlRywyQkFBZixDQUFkO0FBQ0EsU0FBS0MsU0FBTCxHQUFpQixLQUFLSixTQUFMLENBQWVLLDhCQUFmLENBQWpCO0FBQ0EsU0FBS0MsUUFBTCxHQUFnQixLQUFLTixTQUFMLENBQWVPLDRCQUFmLENBQWhCO0FBQ0EsU0FBS0MsT0FBTCxHQUFlLEtBQUtGLFFBQXBCO0FBQ0EsU0FBS0csUUFBTCxHQUFnQixDQUFoQjtBQUNBLFNBQUtDLFdBQUwsR0FBbUIsSUFBbkI7QUFDSDtBQUVEOzs7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QTdCLEVBQW9DckcsY0FBYyxDQUFDbUcsSUFBZixDQUFvQmxCLGVBQXhELENBQVA7QUFDSDs7O3FDQUV1Qm9CLEssRUFBcUI7QUFDekMsYUFBT3JHLGNBQWMsQ0FBQzZILGFBQWYsQ0FBNkJ4QixLQUE3QixFQUFvQ3JHLGNBQWMsQ0FBQ21HLElBQWYsQ0FBb0JyQixnQkFBeEQsQ0FBUDtBQUNIOzs7Ozs7OztnQkE1T1E5RSxjLFlBQ09zRSxjOztnQkFEUHRFLGMsVUFFS3lFLFk7O2dCQUZMekUsYyxpQkFHWSxFOztnQkFIWkEsYyw0QkFJdUIsSUFBSUEsY0FBSixDQUM1QixnREFENEIsRUFFNUJ5RSxZQUFZLENBQUNxQixzQkFGZSxDIiwic291cmNlc0NvbnRlbnQiOlsiLypcbiAqIENvcHlyaWdodCAyMDE4LTIwMjAgVE9OIERFViBTT0xVVElPTlMgTFRELlxuICovXG4vLyBAZmxvd1xuXG5pbXBvcnQge1xuICAgIFRhZ3MsIFNwYW4sIFNwYW5Db250ZXh0LCBGT1JNQVRfVEVYVF9NQVAsXG59IGZyb20gJ29wZW50cmFjaW5nJztcbmltcG9ydCB0eXBlIHtcbiAgICBJVE9OQ2xpZW50LFxuICAgIFRPTkFjY2Vzc0tleXNNYW5hZ2VtZW50UGFyYW1zLFxuICAgIFRPTkNvbmZpZ0RhdGEsXG4gICAgVE9OQ29udHJhY3RzLFxuICAgIFRPTkNyeXB0bywgVE9OTWVzc2FnZVByb2Nlc3NpbmdTdGF0ZSxcbiAgICBUT05RdWVyaWVzLFxuICAgIFRPTlJlZ2lzdGVyQWNjZXNzS2V5c1BhcmFtcyxcbiAgICBUT05SZXZva2VBY2Nlc3NLZXlzUGFyYW1zLFxufSBmcm9tICcuLi90eXBlcyc7XG5cbmltcG9ydCBUT05Db25maWdNb2R1bGUgZnJvbSAnLi9tb2R1bGVzL1RPTkNvbmZpZ01vZHVsZSc7XG5pbXBvcnQgVE9OQ29udHJhY3RzTW9kdWxlIGZyb20gJy4vbW9kdWxlcy9UT05Db250cmFjdHNNb2R1bGUnO1xuaW1wb3J0IFRPTkNyeXB0b01vZHVsZSBmcm9tICcuL21vZHVsZXMvVE9OQ3J5cHRvTW9kdWxlJztcbi8qIGVzbGludC1kaXNhYmxlIGNsYXNzLW1ldGhvZHMtdXNlLXRoaXMsIG5vLXVzZS1iZWZvcmUtZGVmaW5lICovXG5pbXBvcnQgVE9OUXVlcmllc01vZHVsZSBmcm9tICcuL21vZHVsZXMvVE9OUXVlcmllc01vZHVsZSc7XG5cbmltcG9ydCB0eXBlIHtcbiAgICBUT05DbGllbnRDb3JlTGlicmFyeSxcbiAgICBUT05DbGllbnRDb3JlQnJpZGdlLFxuICAgIFRPTk1vZHVsZUNvbnRleHQsXG59IGZyb20gJy4vVE9OTW9kdWxlJztcbmltcG9ydCB7IFRPTk1vZHVsZSB9IGZyb20gJy4vVE9OTW9kdWxlJztcblxuLyoqXG4gKiBKYXZhU2NyaXB0IHBsYXRmb3JtIHNwZWNpZmljIGNvbmZpZ3VyYXRpb25cbiAqL1xudHlwZSBUT05DbGllbnRQbGF0Zm9ybSA9IHtcbiAgICAvKipcbiAgICAgKiBQbGF0Zm9ybSBzcGVjaWZpYyBgZmV0Y2hgIGZ1bmN0aW9uXG4gICAgICovXG4gICAgZmV0Y2g6IGFueSxcbiAgICAvKipcbiAgICAgKiBQbGF0Zm9ybSBzcGVjaWZpYyBgV2ViU29ja2V0YCBpbXBsZW1lbnRhdGlvblxuICAgICAqIFRoaXMgaW1wbGVtZW50YXRpb24gbXVzdCBjb25mb3JtcyB0byBXM0MgV2ViU29ja2V0XG4gICAgICovXG4gICAgV2ViU29ja2V0OiBhbnksXG4gICAgLyoqXG4gICAgICogUmVxdWVzdCBjcmVhdGlvbiBvZiB0aGUgY2xpZW50IGNvcmVcbiAgICAgKi9cbiAgICBjcmVhdGVMaWJyYXJ5OiAoKSA9PiBQcm9taXNlPFRPTkNsaWVudENvcmVMaWJyYXJ5Pixcbn07XG5cbi8qKlxuICogTWFpbiBvYmplY3QgcHJvdmlkZWQgZnVuY3Rpb25hbGl0eSBvZiB0aGUgVE9OIENsaWVudCBMaWJyYXJ5XG4gKiBFYWNoIGluc3RhbmNlIG9mIFRPTkNsaWVudCBoYXMgb3duIHNldCBvZiBUT04gQ2xpZW50IG1vZHVsZXNcbiAqIGFuZCBoYXMgb3duIHByZWNvbmZpZ3VyZWQgY2xpZW50IGNvbnRleHRcbiAqL1xuZXhwb3J0IGNsYXNzIFRPTkNsaWVudCBpbXBsZW1lbnRzIFRPTk1vZHVsZUNvbnRleHQsIElUT05DbGllbnQge1xuICAgIHN0YXRpYyBzZXRMaWJyYXJ5KGNsaWVudFBsYXRmb3JtOiBUT05DbGllbnRQbGF0Zm9ybSkge1xuICAgICAgICBUT05DbGllbnQuY2xpZW50UGxhdGZvcm0gPSBjbGllbnRQbGF0Zm9ybTtcbiAgICB9XG5cblxuICAgIC8vIFB1YmxpY1xuICAgIGNvbmZpZzogVE9OQ29uZmlnTW9kdWxlO1xuICAgIGNyeXB0bzogVE9OQ3J5cHRvO1xuICAgIGNvbnRyYWN0czogVE9OQ29udHJhY3RzO1xuICAgIHF1ZXJpZXM6IFRPTlF1ZXJpZXM7XG4gICAgX3F1ZXJpZXM6IFRPTlF1ZXJpZXNNb2R1bGU7XG4gICAgX2NvbnRleHQ6IG51bWJlcjtcbiAgICBfY29yZUJyaWRnZTogP1RPTkNsaWVudENvcmVCcmlkZ2U7XG5cbiAgICBjb25zdHJ1Y3RvcigpIHtcbiAgICAgICAgdGhpcy5tb2R1bGVzID0gbmV3IE1hcCgpO1xuICAgICAgICB0aGlzLmNvbmZpZyA9IHRoaXMuZ2V0TW9kdWxlKFRPTkNvbmZpZ01vZHVsZSk7XG4gICAgICAgIHRoaXMuY3J5cHRvID0gdGhpcy5nZXRNb2R1bGUoVE9OQ3J5cHRvTW9kdWxlKTtcbiAgICAgICAgdGhpcy5jb250cmFjdHMgPSB0aGlzLmdldE1vZHVsZShUT05Db250cmFjdHNNb2R1bGUpO1xuICAgICAgICB0aGlzLl9xdWVyaWVzID0gdGhpcy5nZXRNb2R1bGUoVE9OUXVlcmllc01vZHVsZSk7XG4gICAgICAgIHRoaXMucXVlcmllcyA9IHRoaXMuX3F1ZXJpZXM7XG4gICAgICAgIHRoaXMuX2NvbnRleHQgPSAwO1xuICAgICAgICB0aGlzLl9jb3JlQnJpZGdlID0gbnVsbDtcbiAgICB9XG5cbiAgICAvKipcbiAgICAgKiBDb252ZW5pZW50IHdheSB0byBjcmVhdGUgY29uZmlndXJlZCBpbnN0YW5jZSBvZiB0aGUgVE9OIENsaWVudFxuICAgICAqIEBwYXJhbSB7VE9OQ29uZmlnRGF0YX0gY29uZmlnXG4gICAgICogQHJldHVybiB7UHJvbWlzZTxUT05DbGllbnQ+fVxuICAgICAqL1xuICAgIHN0YXRpYyBhc3luYyBjcmVhdGUoY29uZmlnOiBUT05Db25maWdEYXRhKTogUHJvbWlzZTxUT05DbGllbnQ+IHtcbiAgICAgICAgY29uc3QgY2xpZW50ID0gbmV3IFRPTkNsaWVudCgpO1xuICAgICAgICBjbGllbnQuY29uZmlnLnNldERhdGEoY29uZmlnKTtcbiAgICAgICAgYXdhaXQgY2xpZW50LnNldHVwKCk7XG4gICAgICAgIHJldHVybiBjbGllbnQ7XG4gICAgfVxuXG4gICAgLyoqXG4gICAgICogU2V0IHVwIHRoZSBjbGllbnQgaW5zdGFuY2VcbiAgICAgKiBAcmV0dXJuIHtQcm9taXNlPHZvaWQ+fVxuICAgICAqL1xuICAgIGFzeW5jIHNldHVwKCk6IFByb21pc2U8dm9pZD4ge1xuICAgICAgICBhd2FpdCB0aGlzLmdldENvcmVCcmlkZ2UoKTtcbiAgICAgICAgY29uc3QgbW9kdWxlczogVE9OTW9kdWxlW10gPSBbLi4udGhpcy5tb2R1bGVzLnZhbHVlcygpXTtcbiAgICAgICAgZm9yIChjb25zdCBtb2R1bGUgb2YgbW9kdWxlcykge1xuICAgICAgICAgICAgYXdhaXQgbW9kdWxlLnNldHVwKCk7XG4gICAgICAgIH1cbiAgICAgICAgVE9OQ2xpZW50RXJyb3IuY29yZVZlcnNpb24gPSBhd2FpdCB0aGlzLmNvbmZpZy5nZXRWZXJzaW9uKCk7XG4gICAgfVxuXG4gICAgLyoqXG4gICAgICogVGVhciBkb3duIHRoaXMgY2xpZW50IGluc3RhbmNlLlxuICAgICAqIE5vdGUgdGhhdCBhZnRlciB5b3UgaGF2ZSBjYWxsZWQgdGhpcyBtZXRob2QgYWxsIGZ1dHVyZSB1c2Ugb2YgdGhpcyBpbnN0YW5jZSB3aWxsIGZhaWxcbiAgICAgKiBAcmV0dXJuIHtQcm9taXNlPHZvaWQ+fVxuICAgICAqL1xuICAgIGFzeW5jIGNsb3NlKCk6IFByb21pc2U8dm9pZD4ge1xuICAgICAgICBhd2FpdCB0aGlzLnF1ZXJpZXMuY2xvc2UoKTtcbiAgICAgICAgY29uc3QgbGlicmFyeSA9IFRPTkNsaWVudC5jb3JlTGlicmFyeTtcbiAgICAgICAgaWYgKHRoaXMuX2NvbnRleHQgPiAwICYmIGxpYnJhcnkgIT09IG51bGwgJiYgbGlicmFyeSAhPT0gdW5kZWZpbmVkKSB7XG4gICAgICAgICAgICBjb25zdCBjb250ZXh0ID0gdGhpcy5fY29udGV4dDtcbiAgICAgICAgICAgIHRoaXMuX2NvcmVCcmlkZ2UgPSBudWxsO1xuICAgICAgICAgICAgdGhpcy5fY29udGV4dCA9IDA7XG4gICAgICAgICAgICBhd2FpdCBuZXcgUHJvbWlzZShyZXNvbHZlID0+IGxpYnJhcnkuY29yZURlc3Ryb3lDb250ZXh0KGNvbnRleHQsIHJlc29sdmUpKTtcbiAgICAgICAgfVxuICAgIH1cblxuICAgIC8vIFRPTk1vZHVsZUNvbnRleHRcblxuICAgIGFzeW5jIHRyeUNyZWF0ZUxpYnJhcnkoKSB7XG4gICAgICAgIGNvbnN0IHBsYXRmb3JtID0gVE9OQ2xpZW50LmNsaWVudFBsYXRmb3JtO1xuICAgICAgICBpZiAocGxhdGZvcm0gPT09IG51bGwgfHwgcGxhdGZvcm0gPT09IHVuZGVmaW5lZCkge1xuICAgICAgICAgICAgcmV0dXJuIG51bGw7XG4gICAgICAgIH1cbiAgICAgICAgVE9OQ2xpZW50LmNvcmVMaWJyYXJ5ID0gYXdhaXQgcGxhdGZvcm0uY3JlYXRlTGlicmFyeSgpO1xuICAgICAgICByZXR1cm4gVE9OQ2xpZW50LmNvcmVMaWJyYXJ5O1xuICAgIH1cblxuICAgIGFzeW5jIHRyeUNyZWF0ZUNvcmVCcmlkZ2UoKSB7XG4gICAgICAgIGNvbnN0IGxpYnJhcnkgPSBUT05DbGllbnQuY29yZUxpYnJhcnkgfHwgYXdhaXQgdGhpcy50cnlDcmVhdGVMaWJyYXJ5KCk7XG4gICAgICAgIGlmICghbGlicmFyeSkge1xuICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICB9XG4gICAgICAgIGlmIChsaWJyYXJ5LmNvcmVDcmVhdGVDb250ZXh0KSB7XG4gICAgICAgICAgICB0aGlzLl9jb250ZXh0ID0gYXdhaXQgbmV3IFByb21pc2UoKHJlc29sdmUpID0+IGxpYnJhcnkuY29yZUNyZWF0ZUNvbnRleHQocmVzb2x2ZSkpO1xuICAgICAgICAgICAgdGhpcy5fY29yZUJyaWRnZSA9IHtcbiAgICAgICAgICAgICAgICByZXF1ZXN0OiAoXG4gICAgICAgICAgICAgICAgICAgIG1ldGhvZDogc3RyaW5nLFxuICAgICAgICAgICAgICAgICAgICBwYXJhbXNKc29uOiBzdHJpbmcsXG4gICAgICAgICAgICAgICAgICAgIG9uUmVzdWx0OiAocmVzdWx0SnNvbjogc3RyaW5nLCBlcnJvckpzb246IHN0cmluZykgPT4gdm9pZCxcbiAgICAgICAgICAgICAgICApOiB2b2lkID0+IHtcbiAgICAgICAgICAgICAgICAgICAgaWYgKFRPTkNsaWVudC5jb3JlTGlicmFyeSkge1xuICAgICAgICAgICAgICAgICAgICAgICAgVE9OQ2xpZW50LmNvcmVMaWJyYXJ5LmNvcmVSZXF1ZXN0KFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMuX2NvbnRleHQsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgbWV0aG9kLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHBhcmFtc0pzb24sXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgb25SZXN1bHQsXG4gICAgICAgICAgICAgICAgICAgICAgICApO1xuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgIH07XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICB0aGlzLl9jb3JlQnJpZGdlID0gbGlicmFyeTtcbiAgICAgICAgfVxuICAgIH1cblxuICAgIGFzeW5jIGdldENvcmVCcmlkZ2UoKTogUHJvbWlzZTw/VE9OQ2xpZW50Q29yZUJyaWRnZT4ge1xuICAgICAgICBpZiAoIXRoaXMuX2NvcmVCcmlkZ2UpIHtcbiAgICAgICAgICAgIGF3YWl0IHRoaXMudHJ5Q3JlYXRlQ29yZUJyaWRnZSgpO1xuICAgICAgICB9XG4gICAgICAgIHJldHVybiB0aGlzLl9jb3JlQnJpZGdlO1xuICAgIH1cblxuICAgIGdldE1vZHVsZTxUPihNb2R1bGVDbGFzczogdHlwZW9mIFRPTk1vZHVsZSk6IFQge1xuICAgICAgICBjb25zdCBuYW1lID0gTW9kdWxlQ2xhc3MubW9kdWxlTmFtZTtcbiAgICAgICAgY29uc3QgZXhpc3RpbmdNb2R1bGUgPSB0aGlzLm1vZHVsZXMuZ2V0KG5hbWUpO1xuICAgICAgICBpZiAoZXhpc3RpbmdNb2R1bGUpIHtcbiAgICAgICAgICAgIHJldHVybiAoZXhpc3RpbmdNb2R1bGU6IGFueSk7XG4gICAgICAgIH1cbiAgICAgICAgY29uc3QgbW9kdWxlID0gbmV3IE1vZHVsZUNsYXNzKHRoaXMpO1xuICAgICAgICB0aGlzLm1vZHVsZXMuc2V0KG5hbWUsIG1vZHVsZSk7XG4gICAgICAgIHJldHVybiAobW9kdWxlOiBhbnkpO1xuICAgIH1cblxuICAgIHNlcnZlclRpbWVEZWx0YSgpOiBQcm9taXNlPG51bWJlcj4ge1xuICAgICAgICByZXR1cm4gdGhpcy5fcXVlcmllcy5zZXJ2ZXJUaW1lRGVsdGEoKTtcbiAgICB9XG5cbiAgICBzZXJ2ZXJOb3coKTogUHJvbWlzZTxudW1iZXI+IHtcbiAgICAgICAgcmV0dXJuIHRoaXMuX3F1ZXJpZXMuc2VydmVyTm93KCk7XG4gICAgfVxuXG4gICAgYXN5bmMgZ2V0TWFuYWdlbWVudEFjY2Vzc0tleSgpOiBQcm9taXNlPHN0cmluZz4ge1xuICAgICAgICBjb25zdCByZXN1bHQgPSBhd2FpdCB0aGlzLl9xdWVyaWVzLnF1ZXJ5KCdxdWVyeXtnZXRNYW5hZ2VtZW50QWNjZXNzS2V5fScpO1xuICAgICAgICByZXR1cm4gcmVzdWx0LmRhdGEuZ2V0TWFuYWdlbWVudEFjY2Vzc0tleTtcbiAgICB9XG5cblxuICAgIGFzeW5jIF9yZXNvbHZlU2lnbmVkTWFuYWdlbWVudEFjY2Vzc0tleShcbiAgICAgICAgcGFyYW1zOiBUT05BY2Nlc3NLZXlzTWFuYWdlbWVudFBhcmFtcyxcbiAgICApOiBQcm9taXNlPHN0cmluZz4ge1xuICAgICAgICBpZiAocGFyYW1zLnNpZ25lZE1hbmFnZW1lbnRBY2Nlc3NLZXkpIHtcbiAgICAgICAgICAgIHJldHVybiBwYXJhbXMuc2lnbmVkTWFuYWdlbWVudEFjY2Vzc0tleTtcbiAgICAgICAgfVxuICAgICAgICBjb25zdCBzaWduS2V5cyA9IHBhcmFtcy5hY2NvdW50S2V5cztcbiAgICAgICAgaWYgKHNpZ25LZXlzKSB7XG4gICAgICAgICAgICBjb25zdCBtYW5hZ2VtZW50QWNjZXNzS2V5ID0gYXdhaXQgdGhpcy5nZXRNYW5hZ2VtZW50QWNjZXNzS2V5KCk7XG4gICAgICAgICAgICByZXR1cm4gdGhpcy5jcnlwdG8ubmFjbFNpZ24oXG4gICAgICAgICAgICAgICAgeyB0ZXh0OiBtYW5hZ2VtZW50QWNjZXNzS2V5IH0sXG4gICAgICAgICAgICAgICAgYCR7c2lnbktleXMuc2VjcmV0fSR7c2lnbktleXMucHVibGljfWAsXG4gICAgICAgICAgICAgICAgJ0hleCcsXG4gICAgICAgICAgICApO1xuICAgICAgICB9XG4gICAgICAgIHJldHVybiAnJztcbiAgICB9XG5cbiAgICBhc3luYyByZWdpc3RlckFjY2Vzc0tleXMoXG4gICAgICAgIHBhcmFtczogVE9OUmVnaXN0ZXJBY2Nlc3NLZXlzUGFyYW1zLFxuICAgICk6IFByb21pc2U8bnVtYmVyPiB7XG4gICAgICAgIGNvbnN0IHNpZ25lZE1hbmFnZW1lbnRBY2Nlc3NLZXkgPSBhd2FpdCB0aGlzLl9yZXNvbHZlU2lnbmVkTWFuYWdlbWVudEFjY2Vzc0tleShwYXJhbXMpO1xuICAgICAgICBjb25zdCByZXN1bHQgPSBhd2FpdCB0aGlzLl9xdWVyaWVzLm11dGF0aW9uKFxuICAgICAgICAgICAgYG11dGF0aW9uIHJlZ2lzdGVyQWNjZXNzS2V5cygkYWNjb3VudDogU3RyaW5nLCAka2V5czogW0FjY2Vzc0tleV0sICRzaWduZWRNYW5hZ2VtZW50QWNjZXNzS2V5OiBTdHJpbmcpIHtcbiAgICAgICAgICAgICAgICAgICAgcmVnaXN0ZXJBY2Nlc3NLZXlzKGFjY291bnQ6ICRhY2NvdW50LCBrZXlzOiAka2V5cywgc2lnbmVkTWFuYWdlbWVudEFjY2Vzc0tleTogJHNpZ25lZE1hbmFnZW1lbnRBY2Nlc3NLZXkpXG4gICAgICAgICAgICAgICAgfWAsIHtcbiAgICAgICAgICAgICAgICBhY2NvdW50OiBwYXJhbXMuYWNjb3VudCxcbiAgICAgICAgICAgICAgICBrZXlzOiBwYXJhbXMua2V5cyxcbiAgICAgICAgICAgICAgICBzaWduZWRNYW5hZ2VtZW50QWNjZXNzS2V5LFxuICAgICAgICAgICAgfSxcbiAgICAgICAgKTtcbiAgICAgICAgcmV0dXJuIHJlc3VsdC5kYXRhLnJlZ2lzdGVyQWNjZXNzS2V5cztcbiAgICB9XG5cbiAgICBhc3luYyByZXZva2VBY2Nlc3NLZXlzKFxuICAgICAgICBwYXJhbXM6IFRPTlJldm9rZUFjY2Vzc0tleXNQYXJhbXMsXG4gICAgKTogUHJvbWlzZTxudW1iZXI+IHtcbiAgICAgICAgY29uc3Qgc2lnbmVkTWFuYWdlbWVudEFjY2Vzc0tleSA9IGF3YWl0IHRoaXMuX3Jlc29sdmVTaWduZWRNYW5hZ2VtZW50QWNjZXNzS2V5KHBhcmFtcyk7XG4gICAgICAgIGNvbnN0IHJlc3VsdCA9IGF3YWl0IHRoaXMuX3F1ZXJpZXMubXV0YXRpb24oXG4gICAgICAgICAgICBgbXV0YXRpb24gcmV2b2tlQWNjZXNzS2V5cygkYWNjb3VudDogU3RyaW5nLCAka2V5czogW1N0cmluZ10sICRzaWduZWRNYW5hZ2VtZW50QWNjZXNzS2V5OiBTdHJpbmcpIHtcbiAgICAgICAgICAgICAgICAgICAgcmV2b2tlQWNjZXNzS2V5cyhhY2NvdW50OiAkYWNjb3VudCwga2V5czogJGtleXMsIHNpZ25lZE1hbmFnZW1lbnRBY2Nlc3NLZXk6ICRzaWduZWRNYW5hZ2VtZW50QWNjZXNzS2V5KVxuICAgICAgICAgICAgICAgIH1gLCB7XG4gICAgICAgICAgICAgICAgYWNjb3VudDogcGFyYW1zLmFjY291bnQsXG4gICAgICAgICAgICAgICAga2V5czogcGFyYW1zLmtleXMsXG4gICAgICAgICAgICAgICAgc2lnbmVkTWFuYWdlbWVudEFjY2Vzc0tleSxcbiAgICAgICAgICAgIH0sXG4gICAgICAgICk7XG4gICAgICAgIHJldHVybiByZXN1bHQuZGF0YS5yZXZva2VBY2Nlc3NLZXlzO1xuICAgIH1cblxuICAgIHN0YXJ0Um9vdFNwYW4odHJhY2VJZDogc3RyaW5nLCBzcGFuSWQ6IHN0cmluZywgb3BlcmF0aW9uTmFtZTogc3RyaW5nKTogU3BhbiB7XG4gICAgICAgIGNvbnN0IHRyYWNlciA9IHRoaXMuY29uZmlnLnRyYWNlcjtcbiAgICAgICAgbGV0IHNwYW46ID9TcGFuID0gbnVsbDtcbiAgICAgICAgaWYgKHRyYWNlci5fc3RhcnRJbnRlcm5hbFNwYW4pIHtcbiAgICAgICAgICAgIHRyeSB7XG4gICAgICAgICAgICAgICAgY29uc3QgY3R4ID0gdHJhY2VyLmV4dHJhY3QoRk9STUFUX1RFWFRfTUFQLCB7XG4gICAgICAgICAgICAgICAgICAgICd1YmVyLXRyYWNlLWlkJzogYCR7dHJhY2VJZH06JHtzcGFuSWR9OjA6MWAsXG4gICAgICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICAgICAgaWYgKGN0eCkge1xuICAgICAgICAgICAgICAgICAgICBzcGFuID0gdGhpcy5jb25maWcudHJhY2VyLl9zdGFydEludGVybmFsU3BhbihcbiAgICAgICAgICAgICAgICAgICAgICAgIGN0eCxcbiAgICAgICAgICAgICAgICAgICAgICAgIG9wZXJhdGlvbk5hbWUsXG4gICAgICAgICAgICAgICAgICAgICAgICBEYXRlLm5vdygpLCAvLyBzdGFydFRpbWVcbiAgICAgICAgICAgICAgICAgICAgICAgIHVuZGVmaW5lZCwgLy8gdXNlclRhZ3NcbiAgICAgICAgICAgICAgICAgICAgICAgIHt9LCAvLyBpbnRlcm5hbFRhZ3NcbiAgICAgICAgICAgICAgICAgICAgICAgIFtdLCAvLyByZWZlcmVuY2VzXG4gICAgICAgICAgICAgICAgICAgICAgICBmYWxzZSwgLy8gaGFzVmFsaWRQYXJlbnRcbiAgICAgICAgICAgICAgICAgICAgICAgIGZhbHNlLCAvLyBpc1JwY1NlcnZlclxuICAgICAgICAgICAgICAgICAgICApO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH0gY2F0Y2gge1xuICAgICAgICAgICAgICAgIC8vIHRyYWNlciBjYW4ndCBjcmVhdGUgbWVzc2FnZSBzcGFuIHVzaW5nIHByaXZhdGUgbWV0aG9kLFxuICAgICAgICAgICAgICAgIC8vIHNvIHdlIGFyZSBmYWxsYmFjayB0byBjcmVhdGUgc3BhbiB1c2luZyByZWd1bGFyIG1ldGhvZFxuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICAgIHJldHVybiBzcGFuIHx8IHRyYWNlci5zdGFydFNwYW4ob3BlcmF0aW9uTmFtZSk7XG4gICAgfVxuXG4gICAgYXN5bmMgdHJhY2U8VD4oXG4gICAgICAgIG5hbWU6IHN0cmluZyxcbiAgICAgICAgZjogKHNwYW46IFNwYW4pID0+IFByb21pc2U8VD4sXG4gICAgICAgIHBhcmVudFNwYW4/OiAoU3BhbiB8IFNwYW5Db250ZXh0KSxcbiAgICApOiBQcm9taXNlPFQ+IHtcbiAgICAgICAgY29uc3Qgc3BhbiA9IHRoaXMuY29uZmlnLnRyYWNlci5zdGFydFNwYW4obmFtZSwgeyBjaGlsZE9mOiBwYXJlbnRTcGFuIH0pO1xuICAgICAgICB0cnkge1xuICAgICAgICAgICAgc3Bhbi5zZXRUYWcoVGFncy5TUEFOX0tJTkQsICdjbGllbnQnKTtcbiAgICAgICAgICAgIGNvbnN0IHJlc3VsdCA9IGF3YWl0IGYoc3Bhbik7XG4gICAgICAgICAgICBpZiAocmVzdWx0ICE9PSB1bmRlZmluZWQpIHtcbiAgICAgICAgICAgICAgICBzcGFuLnNldFRhZygncmVzdWx0JywgcmVzdWx0KTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIHNwYW4uZmluaXNoKCk7XG4gICAgICAgICAgICByZXR1cm4gcmVzdWx0O1xuICAgICAgICB9IGNhdGNoIChlcnJvcikge1xuICAgICAgICAgICAgc3Bhbi5sb2coe1xuICAgICAgICAgICAgICAgIGV2ZW50OiAnZmFpbGVkJyxcbiAgICAgICAgICAgICAgICBwYXlsb2FkOiBlcnJvcixcbiAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgc3Bhbi5maW5pc2goKTtcbiAgICAgICAgICAgIHRocm93IGVycm9yO1xuICAgICAgICB9XG4gICAgfVxuXG4gICAgLy8gSW50ZXJuYWxzXG5cbiAgICBzdGF0aWMgY2xpZW50UGxhdGZvcm06ID9UT05DbGllbnRQbGF0Zm9ybSA9IG51bGw7XG4gICAgc3RhdGljIGNvcmVMaWJyYXJ5OiA/VE9OQ2xpZW50Q29yZUxpYnJhcnkgPSBudWxsO1xuXG4gICAgbW9kdWxlczogTWFwPHN0cmluZywgVE9OTW9kdWxlPjtcbn1cblxuXG5leHBvcnQgY29uc3QgVE9ORXJyb3JTb3VyY2UgPSB7XG4gICAgQ0xJRU5UOiAnY2xpZW50JyxcbiAgICBOT0RFOiAnbm9kZScsXG59O1xuXG5leHBvcnQgY29uc3QgVE9ORXJyb3JDb2RlID0ge1xuICAgIENMSUVOVF9ET0VTX05PVF9DT05GSUdVUkVEOiAxMDAwLFxuICAgIFNFTkRfTk9ERV9SRVFVRVNUX0ZBSUxFRDogMTAwMSxcbiAgICBNRVNTQUdFX0FMUkVBRFlfRVhQSVJFRDogMTAwMSxcbiAgICBSVU5fTE9DQUxfQUNDT1VOVF9ET0VTX05PVF9FWElTVFM6IDEwMDIsXG4gICAgV0FJVF9GT1JfVElNRU9VVDogMTAwMyxcbiAgICBJTlRFUk5BTF9FUlJPUjogMTAwNCxcbiAgICBRVUVSWV9GQUlMRUQ6IDEwMDUsXG4gICAgTUVTU0FHRV9FWFBJUkVEOiAxMDA2LFxuICAgIFNFUlZFUl9ET0VTTlRfU1VQUE9SVF9BR0dSRUdBVElPTlM6IDEwMDcsXG4gICAgSU5WQUxJRF9DT05TOiAxMDA4LFxuICAgIEFERFJFU1NfUkVRVUlSRURfRk9SX1JVTl9MT0NBTDogMTAwOSxcbiAgICBORVRXT1JLX1NJTEVOVDogMTAxMCxcbiAgICBUUkFOU0FDVElPTl9MQUc6IDEwMTEsXG4gICAgVFJBTlNBQ1RJT05fV0FJVF9USU1FT1VUOiAxMDEyLFxuICAgIENMT0NLX09VVF9PRl9TWU5DOiAxMDEzLFxuICAgIEFDQ09VTlRfTUlTU0lORzogMTAxNCxcbiAgICBBQ0NPVU5UX0NPREVfTUlTU0lORzogMTAxNSxcbiAgICBBQ0NPVU5UX0JBTEFOQ0VfVE9PX0xPVzogMTAxNixcbiAgICBBQ0NPVU5UX0ZST1pFTl9PUl9ERUxFVEVEOiAxMDE3LFxuXG4gICAgLy8gQ29udHJhY3RzXG5cbiAgICBDT05UUkFDVF9FWEVDVVRJT05fRkFJTEVEOiAzMDI1LFxuXG4gICAgLy8gUXVlcmllc1xuXG4gICAgUVVFUllfRk9SQ0lCTFlfQUJPUlRFRDogNDAwNSxcbn07XG5cbmV4cG9ydCBjb25zdCBUT05Db250cmFjdEV4aXRDb2RlID0ge1xuICAgIFJFUExBWV9QUk9URUNUSU9OOiA1MixcbiAgICBNRVNTQUdFX0VYUElSRUQ6IDU3LFxuICAgIE5PX0dBUzogMTMsXG59O1xuXG5leHBvcnQgY2xhc3MgVE9OQ2xpZW50RXJyb3Ige1xuICAgIHN0YXRpYyBzb3VyY2UgPSBUT05FcnJvclNvdXJjZTtcbiAgICBzdGF0aWMgY29kZSA9IFRPTkVycm9yQ29kZTtcbiAgICBzdGF0aWMgY29yZVZlcnNpb24gPSAnJztcbiAgICBzdGF0aWMgUVVFUllfRk9SQ0lCTFlfQUJPUlRFRCA9IG5ldyBUT05DbGllbnRFcnJvcihcbiAgICAgICAgJ0dyYXBoUUwgcXVlcnkgd2FzIGZvcmNpYmx5IGFib3J0ZWQgb24gdGltZW91dC4nLFxuICAgICAgICBUT05FcnJvckNvZGUuUVVFUllfRk9SQ0lCTFlfQUJPUlRFRCxcbiAgICApO1xuXG5cbiAgICBtZXNzYWdlOiBzdHJpbmc7XG4gICAgc291cmNlOiBzdHJpbmc7XG4gICAgY29kZTogbnVtYmVyO1xuICAgIGRhdGE6IGFueTtcbiAgICBjb3JlVmVyc2lvbjogc3RyaW5nO1xuXG4gICAgY29uc3RydWN0b3IobWVzc2FnZTogc3RyaW5nLCBjb2RlOiBudW1iZXIsIHNvdXJjZT86IHN0cmluZywgZGF0YT86IGFueSkge1xuICAgICAgICB0aGlzLm1lc3NhZ2UgPSBtZXNzYWdlO1xuICAgICAgICB0aGlzLmNvZGUgPSBjb2RlO1xuICAgICAgICB0aGlzLnNvdXJjZSA9IHNvdXJjZSB8fCBUT05FcnJvclNvdXJjZS5DTElFTlQ7XG4gICAgICAgIHRoaXMuY29yZVZlcnNpb24gPSBUT05DbGllbnRFcnJvci5jb3JlVmVyc2lvbjtcbiAgICAgICAgdGhpcy5kYXRhID0gZGF0YTtcbiAgICB9XG5cbiAgICBzdGF0aWMgaXNDbGllbnRFcnJvcihlcnJvcjogYW55LCBjb2RlOiBudW1iZXIpOiBib29sZWFuIHtcbiAgICAgICAgcmV0dXJuIChlcnJvci5zb3VyY2UgPT09IFRPTkNsaWVudEVycm9yLnNvdXJjZS5DTElFTlQpXG4gICAgICAgICAgICAmJiAoZXJyb3IuY29kZSA9PT0gY29kZSk7XG4gICAgfVxuXG4gICAgc3RhdGljIGlzTm9kZUVycm9yKGVycm9yOiBhbnksIGNvZGU6IG51bWJlcik6IGJvb2xlYW4ge1xuICAgICAgICByZXR1cm4gKGVycm9yLnNvdXJjZSA9PT0gVE9OQ2xpZW50RXJyb3Iuc291cmNlLk5PREUpXG4gICAgICAgICAgICAmJiAoZXJyb3IuY29kZSA9PT0gY29kZSk7XG4gICAgfVxuXG4gICAgc3RhdGljIGlzQ29udHJhY3RFcnJvcihlcnJvcjogYW55LCBleGl0Q29kZTogbnVtYmVyKTogYm9vbGVhbiB7XG4gICAgICAgIHJldHVybiAoZXJyb3Iuc291cmNlID09PSBUT05DbGllbnRFcnJvci5zb3VyY2UuTk9ERSlcbiAgICAgICAgICAgICYmIChlcnJvci5jb2RlID09PSBUT05DbGllbnRFcnJvci5jb2RlLkNPTlRSQUNUX0VYRUNVVElPTl9GQUlMRUQpXG4gICAgICAgICAgICAmJiAoZXJyb3IuZGF0YSAmJiBlcnJvci5kYXRhLmV4aXRfY29kZSA9PT0gZXhpdENvZGUpO1xuICAgIH1cblxuICAgIHN0YXRpYyBpc09yaWdpbmFsQ29udHJhY3RFcnJvcihlcnJvcjogYW55LCBleGl0Q29kZTogbnVtYmVyKTogYm9vbGVhbiB7XG4gICAgICAgIHJldHVybiBUT05DbGllbnRFcnJvci5pc0NvbnRyYWN0RXJyb3IoZXJyb3IsIGV4aXRDb2RlKVxuICAgICAgICAgICAgJiYgKCFlcnJvci5kYXRhPy5vcmlnaW5hbF9lcnJvcik7XG4gICAgfVxuXG4gICAgc3RhdGljIGlzUmVzb2x2ZWRDb250cmFjdEVycm9yQWZ0ZXJFeHBpcmUoZXJyb3I6IGFueSwgZXhpdENvZGU6IG51bWJlcik6IGJvb2xlYW4ge1xuICAgICAgICByZXR1cm4gVE9OQ2xpZW50RXJyb3IuaXNDb250cmFjdEVycm9yKGVycm9yLCBleGl0Q29kZSlcbiAgICAgICAgICAgICYmIChlcnJvci5kYXRhICYmIGVycm9yLmRhdGEub3JpZ2luYWxfZXJyb3JcbiAgICAgICAgICAgICAgICAmJiBUT05DbGllbnRFcnJvci5pc01lc3NhZ2VFeHBpcmVkKGVycm9yLmRhdGEub3JpZ2luYWxfZXJyb3IpKTtcbiAgICB9XG5cbiAgICBzdGF0aWMgaW50ZXJuYWxFcnJvcihtZXNzYWdlOiBzdHJpbmcpOiBUT05DbGllbnRFcnJvciB7XG4gICAgICAgIHJldHVybiBuZXcgVE9OQ2xpZW50RXJyb3IoXG4gICAgICAgICAgICBgSW50ZXJuYWwgZXJyb3I6ICR7bWVzc2FnZX1gLFxuICAgICAgICAgICAgVE9ORXJyb3JDb2RlLklOVEVSTkFMX0VSUk9SLFxuICAgICAgICApO1xuICAgIH1cblxuICAgIHN0YXRpYyBpbnZhbGlkQ29ucygpOiBUT05DbGllbnRFcnJvciB7XG4gICAgICAgIHJldHVybiBuZXcgVE9OQ2xpZW50RXJyb3IoXG4gICAgICAgICAgICAnSW52YWxpZCBDT05TIHN0cnVjdHVyZS4gRWFjaCBDT05TIGl0ZW0gbXVzdCBjb250YWlucyBvZiB0d28gZWxlbWVudHMuJyxcbiAgICAgICAgICAgIFRPTkVycm9yQ29kZS5JTlZBTElEX0NPTlMsXG4gICAgICAgICk7XG4gICAgfVxuXG4gICAgc3RhdGljIGNsaWVudERvZXNOb3RDb25maWd1cmVkKCk6IFRPTkNsaWVudEVycm9yIHtcbiAgICAgICAgcmV0dXJuIG5ldyBUT05DbGllbnRFcnJvcihcbiAgICAgICAgICAgICdUT04gQ2xpZW50IGlzblxcJ3QgY29uZmlndXJlZCcsXG4gICAgICAgICAgICBUT05FcnJvckNvZGUuQ0xJRU5UX0RPRVNfTk9UX0NPTkZJR1VSRUQsXG4gICAgICAgICk7XG4gICAgfVxuXG4gICAgc3RhdGljIHNlbmROb2RlUmVxdWVzdEZhaWxlZChyZXNwb25zZVRleHQ6IHN0cmluZyk6IFRPTkNsaWVudEVycm9yIHtcbiAgICAgICAgcmV0dXJuIG5ldyBUT05DbGllbnRFcnJvcihcbiAgICAgICAgICAgIGBTZW5kIG5vZGUgcmVxdWVzdCBmYWlsZWQ6ICR7cmVzcG9uc2VUZXh0fWAsXG4gICAgICAgICAgICBUT05FcnJvckNvZGUuU0VORF9OT0RFX1JFUVVFU1RfRkFJTEVELFxuICAgICAgICApO1xuICAgIH1cblxuICAgIHN0YXRpYyBydW5Mb2NhbEFjY291bnREb2VzTm90RXhpc3RzKGZ1bmN0aW9uTmFtZTogc3RyaW5nLCBhZGRyZXNzOiBzdHJpbmcpOiBUT05DbGllbnRFcnJvciB7XG4gICAgICAgIHJldHVybiBuZXcgVE9OQ2xpZW50RXJyb3IoXG4gICAgICAgICAgICBgWyR7ZnVuY3Rpb25OYW1lfV0gcnVuIGxvY2FsIGZhaWxlZDogYWNjb3VudCBbJHthZGRyZXNzfV0gZG9lcyBub3QgZXhpc3RzYCxcbiAgICAgICAgICAgIFRPTkVycm9yQ29kZS5SVU5fTE9DQUxfQUNDT1VOVF9ET0VTX05PVF9FWElTVFMsXG4gICAgICAgICk7XG4gICAgfVxuXG4gICAgc3RhdGljIHdhaXRGb3JUaW1lb3V0KCkge1xuICAgICAgICByZXR1cm4gbmV3IFRPTkNsaWVudEVycm9yKFxuICAgICAgICAgICAgJ1dhaXQgZm9yIG9wZXJhdGlvbiByZWplY3RlZCBvbiB0aW1lb3V0JyxcbiAgICAgICAgICAgIFRPTkVycm9yQ29kZS5XQUlUX0ZPUl9USU1FT1VULFxuICAgICAgICApO1xuICAgIH1cblxuICAgIHN0YXRpYyBxdWVyeUZhaWxlZChlcnJvcnM6IEVycm9yW10pIHtcbiAgICAgICAgcmV0dXJuIG5ldyBUT05DbGllbnRFcnJvcihcbiAgICAgICAgICAgIGBRdWVyeSBmYWlsZWQ6ICR7ZXJyb3JzLm1hcCh4ID0+IHgubWVzc2FnZSB8fCB4LnRvU3RyaW5nKCkpLmpvaW4oJ1xcbicpfWAsXG4gICAgICAgICAgICBUT05FcnJvckNvZGUuUVVFUllfRkFJTEVELFxuICAgICAgICApO1xuICAgIH1cblxuICAgIHN0YXRpYyBmb3JtYXRUaW1lKHRpbWU6ID9udW1iZXIpOiA/c3RyaW5nIHtcbiAgICAgICAgaWYgKHRpbWUpIHtcbiAgICAgICAgICAgIHJldHVybiBgJHtuZXcgRGF0ZSh0aW1lICogMTAwMCkudG9JU09TdHJpbmcoKX0gKCR7dGltZX0pYDtcbiAgICAgICAgfVxuICAgICAgICByZXR1cm4gbnVsbDtcbiAgICB9XG5cbiAgICBzdGF0aWMgbWVzc2FnZUV4cGlyZWQoZGF0YToge1xuICAgICAgICBtZXNzYWdlSWQ6IHN0cmluZyxcbiAgICAgICAgc2VuZGluZ1RpbWU6IG51bWJlcixcbiAgICAgICAgZXhwaXJlOiA/bnVtYmVyLFxuICAgICAgICBibG9ja1RpbWU6ID9udW1iZXIsXG4gICAgfSkge1xuICAgICAgICByZXR1cm4gbmV3IFRPTkNsaWVudEVycm9yKFxuICAgICAgICAgICAgJ01lc3NhZ2UgZXhwaXJlZCcsXG4gICAgICAgICAgICBUT05FcnJvckNvZGUuTUVTU0FHRV9FWFBJUkVELFxuICAgICAgICAgICAgVE9ORXJyb3JTb3VyY2UuQ0xJRU5ULFxuICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgIHNlbmRpbmdUaW1lOiBUT05DbGllbnRFcnJvci5mb3JtYXRUaW1lKGRhdGEuc2VuZGluZ1RpbWUpLFxuICAgICAgICAgICAgICAgIGV4cGlyYXRpb25UaW1lOiBUT05DbGllbnRFcnJvci5mb3JtYXRUaW1lKGRhdGEuZXhwaXJlKSxcbiAgICAgICAgICAgICAgICBibG9ja1RpbWU6IFRPTkNsaWVudEVycm9yLmZvcm1hdFRpbWUoZGF0YS5ibG9ja1RpbWUpLFxuICAgICAgICAgICAgfSxcbiAgICAgICAgKTtcbiAgICB9XG5cbiAgICBzdGF0aWMgc2VydmVyRG9lc250U3VwcG9ydEFnZ3JlZ2F0aW9ucygpIHtcbiAgICAgICAgcmV0dXJuIG5ldyBUT05DbGllbnRFcnJvcihcbiAgICAgICAgICAgICdTZXJ2ZXIgZG9lc25cXCd0IHN1cHBvcnQgYWdncmVnYXRpb25zJyxcbiAgICAgICAgICAgIFRPTkVycm9yQ29kZS5TRVJWRVJfRE9FU05UX1NVUFBPUlRfQUdHUkVHQVRJT05TLFxuICAgICAgICApO1xuICAgIH1cblxuICAgIHN0YXRpYyBhZGRyZXNzUmVxdWlyZWRGb3JSdW5Mb2NhbCgpIHtcbiAgICAgICAgcmV0dXJuIG5ldyBUT05DbGllbnRFcnJvcihcbiAgICAgICAgICAgICdBZGRyZXNzIHJlcXVpcmVkIGZvciBydW4gbG9jYWwuIFlvdSBoYXZlblxcJ3Qgc3BlY2lmaWVkIGNvbnRyYWN0IGNvZGUgb3IgZGF0YSAnXG4gICAgICAgICAgICArICdzbyBhZGRyZXNzIGlzIHJlcXVpcmVkIHRvIGxvYWQgbWlzc2luZyBwYXJ0cyBmcm9tIG5ldHdvcmsuJyxcbiAgICAgICAgICAgIFRPTkNsaWVudEVycm9yLmNvZGUuQUREUkVTU19SRVFVSVJFRF9GT1JfUlVOX0xPQ0FMLFxuICAgICAgICAgICAgVE9OQ2xpZW50RXJyb3Iuc291cmNlLkNMSUVOVCxcbiAgICAgICAgKTtcbiAgICB9XG5cbiAgICBzdGF0aWMgbmV0d29ya1NpbGVudChkYXRhOiB7XG4gICAgICAgIG1lc3NhZ2VJZDogc3RyaW5nLFxuICAgICAgICBzZW5kaW5nVGltZTogbnVtYmVyLFxuICAgICAgICBleHBpcmU6IG51bWJlcixcbiAgICAgICAgdGltZW91dDogbnVtYmVyLFxuICAgICAgICBibG9ja0lkPzogc3RyaW5nLFxuICAgICAgICBtZXNzYWdlUHJvY2Vzc2luZ1N0YXRlPzogVE9OTWVzc2FnZVByb2Nlc3NpbmdTdGF0ZSxcbiAgICB9KSB7XG4gICAgICAgIHJldHVybiBuZXcgVE9OQ2xpZW50RXJyb3IoXG4gICAgICAgICAgICAnTmV0d29yayBzaWxlbnQ6IG5vIGJsb2NrcyBwcm9kdWNlZCBkdXJpbmcgdGltZW91dC4nLFxuICAgICAgICAgICAgVE9ORXJyb3JDb2RlLk5FVFdPUktfU0lMRU5ULFxuICAgICAgICAgICAgVE9ORXJyb3JTb3VyY2UuQ0xJRU5ULFxuICAgICAgICAgICAgZGF0YSAmJiB7XG4gICAgICAgICAgICAgICAgLi4uZGF0YSxcbiAgICAgICAgICAgICAgICBzZW5kaW5nVGltZTogVE9OQ2xpZW50RXJyb3IuZm9ybWF0VGltZShkYXRhLnNlbmRpbmdUaW1lKSxcbiAgICAgICAgICAgICAgICBleHBpcmF0aW9uVGltZTogVE9OQ2xpZW50RXJyb3IuZm9ybWF0VGltZShkYXRhLmV4cGlyZSksXG4gICAgICAgICAgICB9LFxuICAgICAgICApO1xuICAgIH1cblxuICAgIHN0YXRpYyB0cmFuc2FjdGlvbldhaXRUaW1lb3V0KGRhdGE6IHtcbiAgICAgICAgbWVzc2FnZUlkOiBzdHJpbmcsXG4gICAgICAgIHNlbmRpbmdUaW1lOiBudW1iZXIsXG4gICAgICAgIHRpbWVvdXQ6IG51bWJlcixcbiAgICAgICAgbWVzc2FnZVByb2Nlc3NpbmdTdGF0ZT86IFRPTk1lc3NhZ2VQcm9jZXNzaW5nU3RhdGUsXG4gICAgfSkge1xuICAgICAgICByZXR1cm4gbmV3IFRPTkNsaWVudEVycm9yKFxuICAgICAgICAgICAgJ1RyYW5zYWN0aW9uIGRpZCBub3QgcHJvZHVjZWQgZHVyaW5nIHNwZWNpZmllZCB0aW1lb3V0JyxcbiAgICAgICAgICAgIFRPTkVycm9yQ29kZS5UUkFOU0FDVElPTl9XQUlUX1RJTUVPVVQsXG4gICAgICAgICAgICBUT05FcnJvclNvdXJjZS5DTElFTlQsXG4gICAgICAgICAgICBkYXRhICYmIHtcbiAgICAgICAgICAgICAgICAuLi5kYXRhLFxuICAgICAgICAgICAgICAgIHNlbmRpbmdUaW1lOiBUT05DbGllbnRFcnJvci5mb3JtYXRUaW1lKGRhdGEuc2VuZGluZ1RpbWUpLFxuICAgICAgICAgICAgfSxcbiAgICAgICAgKTtcbiAgICB9XG5cbiAgICBzdGF0aWMgY2xvY2tPdXRPZlN5bmMoKSB7XG4gICAgICAgIHJldHVybiBuZXcgVE9OQ2xpZW50RXJyb3IoXG4gICAgICAgICAgICAnWW91IGxvY2FsIGNsb2NrIGlzIG91dCBvZiBzeW5jIHdpdGggdGhlIHNlcnZlciB0aW1lLiAnXG4gICAgICAgICAgICArICdJdCBpcyBhIGNyaXRpY2FsIGNvbmRpdGlvbiBmb3Igc2VuZGluZyBtZXNzYWdlcyB0byB0aGUgYmxvY2tjaGFpbi4gJ1xuICAgICAgICAgICAgKyAnUGxlYXNlIHN5bmMgeW91IGNsb2NrIHdpdGggdGhlIGludGVybmV0IHRpbWUuJyxcbiAgICAgICAgICAgIFRPTkVycm9yQ29kZS5DTE9DS19PVVRfT0ZfU1lOQyxcbiAgICAgICAgKTtcbiAgICB9XG5cbiAgICBzdGF0aWMgYWNjb3VudE1pc3NpbmcoYWRkcmVzczogc3RyaW5nKSB7XG4gICAgICAgIHJldHVybiBuZXcgVE9OQ2xpZW50RXJyb3IoXG4gICAgICAgICAgICBgQWNjb3VudCB3aXRoIGFkZHJlc3MgWyR7YWRkcmVzc31dIGRvZXNuJ3QgZXhpc3RzLiBgXG4gICAgICAgICAgICArICdZb3UgaGF2ZSB0byBwcmVwYWlkIHRoaXMgYWNjb3VudCB0byBoYXZlIGEgcG9zaXRpdmUgYmFsYW5jZSBvbiB0aGVtIGFuZCB0aGVuIGRlcGxveSAnXG4gICAgICAgICAgICArICdhIGNvbnRyYWN0IGNvZGUgZm9yIHRoaXMgYWNjb3VudC4nXG4gICAgICAgICAgICArICdTZWUgU0RLIGRvY3VtZW50YXRpb24gZm9yIGRldGFpbGVkIGluc3RydWN0aW9ucy4nLFxuICAgICAgICAgICAgVE9ORXJyb3JDb2RlLkFDQ09VTlRfTUlTU0lORyxcbiAgICAgICAgKTtcbiAgICB9XG5cbiAgICBzdGF0aWMgYWNjb3VudENvZGVNaXNzaW5nKGFkZHJlc3M6IHN0cmluZywgYmFsYW5jZTogc3RyaW5nKSB7XG4gICAgICAgIHJldHVybiBuZXcgVE9OQ2xpZW50RXJyb3IoXG4gICAgICAgICAgICBgQWNjb3VudCB3aXRoIGFkZHJlc3MgWyR7YWRkcmVzc31dIGV4aXN0cyBidXQgaGF2ZW4ndCBhIGNvbnRyYWN0IGNvZGUgeWV0LiBgXG4gICAgICAgICAgICArICdZb3UgaGF2ZSB0byBlbnN1cmUgdGhhdCBhbiBhY2NvdW50IGhhcyBhbiBlbm91Z2ggYmFsYW5jZSBmb3IgZGVwbG95aW5nICdcbiAgICAgICAgICAgICsgJ2EgY29udHJhY3QgY29kZSBhbmQgdGhlbiBkZXBsb3kgYSBjb250cmFjdCBjb2RlIGZvciB0aGlzIGFjY291bnQuICdcbiAgICAgICAgICAgICsgYEN1cnJlbnQgYWNjb3VudCBiYWxhbmNlIGlzIFske2JhbGFuY2V9XS4gYFxuICAgICAgICAgICAgKyAnU2VlIFNESyBkb2N1bWVudGF0aW9uIGZvciBkZXRhaWxlZCBpbnN0cnVjdGlvbnMuJyxcbiAgICAgICAgICAgIFRPTkVycm9yQ29kZS5BQ0NPVU5UX0NPREVfTUlTU0lORyxcbiAgICAgICAgKTtcbiAgICB9XG5cbiAgICBzdGF0aWMgYWNjb3VudEJhbGFuY2VUb29Mb3coYWRkcmVzczogc3RyaW5nLCBiYWxhbmNlOiBzdHJpbmcpIHtcbiAgICAgICAgcmV0dXJuIG5ldyBUT05DbGllbnRFcnJvcihcbiAgICAgICAgICAgIGBBY2NvdW50IHdpdGggYWRkcmVzcyBbJHthZGRyZXNzfV0gaGFzIHRvbyBsb3cgYmFsYW5jZSBbJHtiYWxhbmNlfV0uIGBcbiAgICAgICAgICAgICsgJ1lvdSBoYXZlIHRvIHNlbmQgc29tZSB2YWx1ZSB0byBhY2NvdW50IGJhbGFuY2UgZnJvbSBvdGhlciBjb250cmFjdCAnXG4gICAgICAgICAgICArICcoZS5nLiBXYWxsZXQgY29udHJhY3QpLiAnXG4gICAgICAgICAgICArICdTZWUgU0RLIGRvY3VtZW50YXRpb24gZm9yIGRldGFpbGVkIGluc3RydWN0aW9ucy4nLFxuICAgICAgICAgICAgVE9ORXJyb3JDb2RlLkFDQ09VTlRfQkFMQU5DRV9UT09fTE9XLFxuICAgICAgICApO1xuICAgIH1cblxuICAgIHN0YXRpYyBub0Jsb2Nrcyh3b3JrY2hhaW46IG51bWJlcikge1xuICAgICAgICBjb25zdCB3b3JrY2hhaW5OYW1lID0gd29ya2NoYWluID09PSAtMSA/ICdtYXN0ZXJjaGFpbicgOiBgd29ya2NoYWluICR7d29ya2NoYWlufWA7XG4gICAgICAgIHJldHVybiBuZXcgVE9OQ2xpZW50RXJyb3IoXG4gICAgICAgICAgICBgXCJObyBibG9ja3MgZm9yICR7d29ya2NoYWluTmFtZX0gZm91bmRcIi5gLFxuICAgICAgICAgICAgVE9ORXJyb3JDb2RlLk5FVFdPUktfU0lMRU5ULFxuICAgICAgICApO1xuICAgIH1cblxuICAgIHN0YXRpYyBpbnZhbGlkQmxvY2tjaGFpbihtZXNzYWdlOiBzdHJpbmcpIHtcbiAgICAgICAgcmV0dXJuIG5ldyBUT05DbGllbnRFcnJvcihtZXNzYWdlLCBUT05FcnJvckNvZGUuTkVUV09SS19TSUxFTlQpO1xuICAgIH1cblxuICAgIHN0YXRpYyBpc01lc3NhZ2VFeHBpcmVkKGVycm9yOiBhbnkpOiBib29sZWFuIHtcbiAgICAgICAgcmV0dXJuIFRPTkNsaWVudEVycm9yLmlzQ2xpZW50RXJyb3IoZXJyb3IsIFRPTkNsaWVudEVycm9yLmNvZGUuTUVTU0FHRV9FWFBJUkVEKTtcbiAgICB9XG5cbiAgICBzdGF0aWMgaXNXYWl0Rm9yVGltZW91dChlcnJvcjogYW55KTogYm9vbGVhbiB7XG4gICAgICAgIHJldHVybiBUT05DbGllbnRFcnJvci5pc0NsaWVudEVycm9yKGVycm9yLCBUT05DbGllbnRFcnJvci5jb2RlLldBSVRfRk9SX1RJTUVPVVQpO1xuICAgIH1cbn1cbiJdfQ==