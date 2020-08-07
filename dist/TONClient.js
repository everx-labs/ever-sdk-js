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
    key: "getClientInfo",
    value: function () {
      var _getClientInfo = _asyncToGenerator( /*#__PURE__*/_regenerator["default"].mark(function _callee3() {
        return _regenerator["default"].wrap(function _callee3$(_context3) {
          while (1) {
            switch (_context3.prev = _context3.next) {
              case 0:
                _context3.next = 2;
                return this.config.getVersion();

              case 2:
                _context3.t0 = _context3.sent;
                _context3.t1 = this.config.getConfigServer();
                _context3.t2 = this._queries.getQueryUrl();
                return _context3.abrupt("return", {
                  coreVersion: _context3.t0,
                  configServer: _context3.t1,
                  queryUrl: _context3.t2
                });

              case 6:
              case "end":
                return _context3.stop();
            }
          }
        }, _callee3, this);
      }));

      function getClientInfo() {
        return _getClientInfo.apply(this, arguments);
      }

      return getClientInfo;
    }()
  }, {
    key: "tryCreateLibrary",
    value: function () {
      var _tryCreateLibrary = _asyncToGenerator( /*#__PURE__*/_regenerator["default"].mark(function _callee4() {
        var platform;
        return _regenerator["default"].wrap(function _callee4$(_context4) {
          while (1) {
            switch (_context4.prev = _context4.next) {
              case 0:
                platform = TONClient.clientPlatform;

                if (!(platform === null || platform === undefined)) {
                  _context4.next = 3;
                  break;
                }

                return _context4.abrupt("return", null);

              case 3:
                _context4.next = 5;
                return platform.createLibrary();

              case 5:
                TONClient.coreLibrary = _context4.sent;
                return _context4.abrupt("return", TONClient.coreLibrary);

              case 7:
              case "end":
                return _context4.stop();
            }
          }
        }, _callee4);
      }));

      function tryCreateLibrary() {
        return _tryCreateLibrary.apply(this, arguments);
      }

      return tryCreateLibrary;
    }()
  }, {
    key: "tryCreateCoreBridge",
    value: function () {
      var _tryCreateCoreBridge = _asyncToGenerator( /*#__PURE__*/_regenerator["default"].mark(function _callee5() {
        var _this = this;

        var library;
        return _regenerator["default"].wrap(function _callee5$(_context5) {
          while (1) {
            switch (_context5.prev = _context5.next) {
              case 0:
                _context5.t0 = TONClient.coreLibrary;

                if (_context5.t0) {
                  _context5.next = 5;
                  break;
                }

                _context5.next = 4;
                return this.tryCreateLibrary();

              case 4:
                _context5.t0 = _context5.sent;

              case 5:
                library = _context5.t0;

                if (library) {
                  _context5.next = 8;
                  break;
                }

                return _context5.abrupt("return");

              case 8:
                if (!library.coreCreateContext) {
                  _context5.next = 15;
                  break;
                }

                _context5.next = 11;
                return new Promise(function (resolve) {
                  return library.coreCreateContext(resolve);
                });

              case 11:
                this._context = _context5.sent;
                this._coreBridge = {
                  request: function request(method, paramsJson, onResult) {
                    if (TONClient.coreLibrary) {
                      TONClient.coreLibrary.coreRequest(_this._context, method, paramsJson, onResult);
                    }
                  }
                };
                _context5.next = 16;
                break;

              case 15:
                this._coreBridge = library;

              case 16:
              case "end":
                return _context5.stop();
            }
          }
        }, _callee5, this);
      }));

      function tryCreateCoreBridge() {
        return _tryCreateCoreBridge.apply(this, arguments);
      }

      return tryCreateCoreBridge;
    }()
  }, {
    key: "getCoreBridge",
    value: function () {
      var _getCoreBridge = _asyncToGenerator( /*#__PURE__*/_regenerator["default"].mark(function _callee6() {
        return _regenerator["default"].wrap(function _callee6$(_context6) {
          while (1) {
            switch (_context6.prev = _context6.next) {
              case 0:
                if (this._coreBridge) {
                  _context6.next = 3;
                  break;
                }

                _context6.next = 3;
                return this.tryCreateCoreBridge();

              case 3:
                return _context6.abrupt("return", this._coreBridge);

              case 4:
              case "end":
                return _context6.stop();
            }
          }
        }, _callee6, this);
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
      var _getManagementAccessKey = _asyncToGenerator( /*#__PURE__*/_regenerator["default"].mark(function _callee7() {
        var result;
        return _regenerator["default"].wrap(function _callee7$(_context7) {
          while (1) {
            switch (_context7.prev = _context7.next) {
              case 0:
                _context7.next = 2;
                return this._queries.query('query{getManagementAccessKey}');

              case 2:
                result = _context7.sent;
                return _context7.abrupt("return", result.data.getManagementAccessKey);

              case 4:
              case "end":
                return _context7.stop();
            }
          }
        }, _callee7, this);
      }));

      function getManagementAccessKey() {
        return _getManagementAccessKey.apply(this, arguments);
      }

      return getManagementAccessKey;
    }()
  }, {
    key: "_resolveSignedManagementAccessKey",
    value: function () {
      var _resolveSignedManagementAccessKey2 = _asyncToGenerator( /*#__PURE__*/_regenerator["default"].mark(function _callee8(params) {
        var signKeys, managementAccessKey;
        return _regenerator["default"].wrap(function _callee8$(_context8) {
          while (1) {
            switch (_context8.prev = _context8.next) {
              case 0:
                if (!params.signedManagementAccessKey) {
                  _context8.next = 2;
                  break;
                }

                return _context8.abrupt("return", params.signedManagementAccessKey);

              case 2:
                signKeys = params.accountKeys;

                if (!signKeys) {
                  _context8.next = 8;
                  break;
                }

                _context8.next = 6;
                return this.getManagementAccessKey();

              case 6:
                managementAccessKey = _context8.sent;
                return _context8.abrupt("return", this.crypto.naclSign({
                  text: managementAccessKey
                }, "".concat(signKeys.secret).concat(signKeys["public"]), 'Hex'));

              case 8:
                return _context8.abrupt("return", '');

              case 9:
              case "end":
                return _context8.stop();
            }
          }
        }, _callee8, this);
      }));

      function _resolveSignedManagementAccessKey(_x) {
        return _resolveSignedManagementAccessKey2.apply(this, arguments);
      }

      return _resolveSignedManagementAccessKey;
    }()
  }, {
    key: "registerAccessKeys",
    value: function () {
      var _registerAccessKeys = _asyncToGenerator( /*#__PURE__*/_regenerator["default"].mark(function _callee9(params) {
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
                return this._queries.mutation("mutation registerAccessKeys($account: String, $keys: [AccessKey], $signedManagementAccessKey: String) {\n                    registerAccessKeys(account: $account, keys: $keys, signedManagementAccessKey: $signedManagementAccessKey)\n                }", {
                  account: params.account,
                  keys: params.keys,
                  signedManagementAccessKey: signedManagementAccessKey
                });

              case 5:
                result = _context9.sent;
                return _context9.abrupt("return", result.data.registerAccessKeys);

              case 7:
              case "end":
                return _context9.stop();
            }
          }
        }, _callee9, this);
      }));

      function registerAccessKeys(_x2) {
        return _registerAccessKeys.apply(this, arguments);
      }

      return registerAccessKeys;
    }()
  }, {
    key: "revokeAccessKeys",
    value: function () {
      var _revokeAccessKeys = _asyncToGenerator( /*#__PURE__*/_regenerator["default"].mark(function _callee10(params) {
        var signedManagementAccessKey, result;
        return _regenerator["default"].wrap(function _callee10$(_context10) {
          while (1) {
            switch (_context10.prev = _context10.next) {
              case 0:
                _context10.next = 2;
                return this._resolveSignedManagementAccessKey(params);

              case 2:
                signedManagementAccessKey = _context10.sent;
                _context10.next = 5;
                return this._queries.mutation("mutation revokeAccessKeys($account: String, $keys: [String], $signedManagementAccessKey: String) {\n                    revokeAccessKeys(account: $account, keys: $keys, signedManagementAccessKey: $signedManagementAccessKey)\n                }", {
                  account: params.account,
                  keys: params.keys,
                  signedManagementAccessKey: signedManagementAccessKey
                });

              case 5:
                result = _context10.sent;
                return _context10.abrupt("return", result.data.revokeAccessKeys);

              case 7:
              case "end":
                return _context10.stop();
            }
          }
        }, _callee10, this);
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
      var _trace = _asyncToGenerator( /*#__PURE__*/_regenerator["default"].mark(function _callee11(name, f, parentSpan) {
        var span, result;
        return _regenerator["default"].wrap(function _callee11$(_context11) {
          while (1) {
            switch (_context11.prev = _context11.next) {
              case 0:
                span = this.config.tracer.startSpan(name, {
                  childOf: parentSpan
                });
                _context11.prev = 1;
                span.setTag(_opentracing.Tags.SPAN_KIND, 'client');
                _context11.next = 5;
                return f(span);

              case 5:
                result = _context11.sent;

                if (result !== undefined) {
                  span.setTag('result', result);
                }

                span.finish();
                return _context11.abrupt("return", result);

              case 11:
                _context11.prev = 11;
                _context11.t0 = _context11["catch"](1);
                span.log({
                  event: 'failed',
                  payload: _context11.t0
                });
                span.finish();
                throw _context11.t0;

              case 16:
              case "end":
                return _context11.stop();
            }
          }
        }, _callee11, this, [[1, 11]]);
      }));

      function trace(_x4, _x5, _x6) {
        return _trace.apply(this, arguments);
      }

      return trace;
    }() // Internals

  }], [{
    key: "create",
    value: function () {
      var _create = _asyncToGenerator( /*#__PURE__*/_regenerator["default"].mark(function _callee12(config) {
        var client;
        return _regenerator["default"].wrap(function _callee12$(_context12) {
          while (1) {
            switch (_context12.prev = _context12.next) {
              case 0:
                client = new TONClient();
                client.config.setData(config);
                _context12.next = 4;
                return client.setup();

              case 4:
                return _context12.abrupt("return", client);

              case 5:
              case "end":
                return _context12.stop();
            }
          }
        }, _callee12);
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
  function TONClientError(clientInfo, message, code, source, data) {
    _classCallCheck(this, TONClientError);

    _defineProperty(this, "message", void 0);

    _defineProperty(this, "source", void 0);

    _defineProperty(this, "code", void 0);

    _defineProperty(this, "data", void 0);

    _defineProperty(this, "coreVersion", void 0);

    _defineProperty(this, "configServer", void 0);

    _defineProperty(this, "queryUrl", void 0);

    this.message = message;
    this.code = code;
    this.source = source || TONErrorSource.CLIENT;
    this.coreVersion = clientInfo.coreVersion;
    this.configServer = clientInfo.configServer;
    this.queryUrl = clientInfo.queryUrl;
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
    value: function internalError(clientInfo, message) {
      return new TONClientError(clientInfo, "Internal error: ".concat(message), TONErrorCode.INTERNAL_ERROR);
    }
  }, {
    key: "invalidCons",
    value: function invalidCons(clientInfo) {
      return new TONClientError(clientInfo, 'Invalid CONS structure. Each CONS item must contains of two elements.', TONErrorCode.INVALID_CONS);
    }
  }, {
    key: "clientDoesNotConfigured",
    value: function clientDoesNotConfigured(clientInfo) {
      return new TONClientError(clientInfo, 'TON Client isn\'t configured', TONErrorCode.CLIENT_DOES_NOT_CONFIGURED);
    }
  }, {
    key: "sendNodeRequestFailed",
    value: function sendNodeRequestFailed(clientInfo, responseText) {
      return new TONClientError(clientInfo, "Send node request failed: ".concat(responseText), TONErrorCode.SEND_NODE_REQUEST_FAILED);
    }
  }, {
    key: "runLocalAccountDoesNotExists",
    value: function runLocalAccountDoesNotExists(clientInfo, functionName, address) {
      return new TONClientError(clientInfo, "[".concat(functionName, "] run local failed: account [").concat(address, "] does not exists"), TONErrorCode.RUN_LOCAL_ACCOUNT_DOES_NOT_EXISTS);
    }
  }, {
    key: "waitForTimeout",
    value: function waitForTimeout(clientInfo) {
      return new TONClientError(clientInfo, 'Wait for operation rejected on timeout', TONErrorCode.WAIT_FOR_TIMEOUT);
    }
  }, {
    key: "queryFailed",
    value: function queryFailed(clientInfo, errors) {
      return new TONClientError(clientInfo, "Query failed: ".concat(errors.map(function (x) {
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
    value: function messageExpired(clientInfo, data) {
      return new TONClientError(clientInfo, 'Message expired', TONErrorCode.MESSAGE_EXPIRED, TONErrorSource.CLIENT, {
        sendingTime: TONClientError.formatTime(data.sendingTime),
        expirationTime: TONClientError.formatTime(data.expire),
        blockTime: TONClientError.formatTime(data.blockTime)
      });
    }
  }, {
    key: "serverDoesntSupportAggregations",
    value: function serverDoesntSupportAggregations(clientInfo) {
      return new TONClientError(clientInfo, 'Server doesn\'t support aggregations', TONErrorCode.SERVER_DOESNT_SUPPORT_AGGREGATIONS);
    }
  }, {
    key: "addressRequiredForRunLocal",
    value: function addressRequiredForRunLocal(clientInfo) {
      return new TONClientError(clientInfo, 'Address required for run local. You haven\'t specified contract code or data ' + 'so address is required to load missing parts from network.', TONClientError.code.ADDRESS_REQUIRED_FOR_RUN_LOCAL, TONClientError.source.CLIENT);
    }
  }, {
    key: "networkSilent",
    value: function networkSilent(clientInfo, data) {
      return new TONClientError(clientInfo, 'Network silent: no blocks produced during timeout.', TONErrorCode.NETWORK_SILENT, TONErrorSource.CLIENT, data && _objectSpread(_objectSpread({}, data), {}, {
        sendingTime: TONClientError.formatTime(data.sendingTime),
        expirationTime: TONClientError.formatTime(data.expire)
      }));
    }
  }, {
    key: "transactionWaitTimeout",
    value: function transactionWaitTimeout(clientInfo, data) {
      return new TONClientError(clientInfo, 'Transaction did not produced during specified timeout', TONErrorCode.TRANSACTION_WAIT_TIMEOUT, TONErrorSource.CLIENT, data && _objectSpread(_objectSpread({}, data), {}, {
        sendingTime: TONClientError.formatTime(data.sendingTime)
      }));
    }
  }, {
    key: "clockOutOfSync",
    value: function clockOutOfSync(clientInfo) {
      return new TONClientError(clientInfo, 'You local clock is out of sync with the server time. ' + 'It is a critical condition for sending messages to the blockchain. ' + 'Please sync you clock with the internet time.', TONErrorCode.CLOCK_OUT_OF_SYNC);
    }
  }, {
    key: "accountMissing",
    value: function accountMissing(clientInfo, address, data) {
      return new TONClientError(clientInfo, "Account with address [".concat(address, "] doesn't exists. ") + 'You have to prepaid this account to have a positive balance on them and then deploy ' + 'a contract code for this account.' + 'See SDK documentation for detailed instructions.', TONErrorCode.ACCOUNT_MISSING, undefined, data);
    }
  }, {
    key: "accountCodeMissing",
    value: function accountCodeMissing(clientInfo, address, balance) {
      return new TONClientError(clientInfo, "Account with address [".concat(address, "] exists but haven't a contract code yet. ") + 'You have to ensure that an account has an enough balance for deploying ' + 'a contract code and then deploy a contract code for this account. ' + "Current account balance is [".concat(balance, "]. ") + 'See SDK documentation for detailed instructions.', TONErrorCode.ACCOUNT_CODE_MISSING);
    }
  }, {
    key: "accountBalanceTooLow",
    value: function accountBalanceTooLow(clientInfo, address, balance) {
      return new TONClientError(clientInfo, "Account with address [".concat(address, "] has too low balance [").concat(balance, "]. ") + 'You have to send some value to account balance from other contract ' + '(e.g. Wallet contract). ' + 'See SDK documentation for detailed instructions.', TONErrorCode.ACCOUNT_BALANCE_TOO_LOW);
    }
  }, {
    key: "noBlocks",
    value: function noBlocks(clientInfo, workchain) {
      var workchainName = workchain === -1 ? 'masterchain' : "workchain ".concat(workchain);
      return new TONClientError(clientInfo, "\"No blocks for ".concat(workchainName, " found\"."), TONErrorCode.NETWORK_SILENT);
    }
  }, {
    key: "invalidBlockchain",
    value: function invalidBlockchain(clientInfo, message) {
      return new TONClientError(clientInfo, message, TONErrorCode.NETWORK_SILENT);
    }
  }, {
    key: "queryForciblyAborted",
    value: function queryForciblyAborted(clientInfo) {
      return new TONClientError(clientInfo, 'GraphQL query was forcibly aborted on timeout.', TONErrorCode.QUERY_FORCIBLY_ABORTED);
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uL3NyYy9UT05DbGllbnQuanMiXSwibmFtZXMiOlsiVE9OQ2xpZW50IiwiY2xpZW50UGxhdGZvcm0iLCJtb2R1bGVzIiwiTWFwIiwiY29uZmlnIiwiZ2V0TW9kdWxlIiwiVE9OQ29uZmlnTW9kdWxlIiwiY3J5cHRvIiwiVE9OQ3J5cHRvTW9kdWxlIiwiY29udHJhY3RzIiwiVE9OQ29udHJhY3RzTW9kdWxlIiwiX3F1ZXJpZXMiLCJUT05RdWVyaWVzTW9kdWxlIiwicXVlcmllcyIsIl9jb250ZXh0IiwiX2NvcmVCcmlkZ2UiLCJnZXRDb3JlQnJpZGdlIiwidmFsdWVzIiwibW9kdWxlIiwic2V0dXAiLCJjbG9zZSIsImxpYnJhcnkiLCJjb3JlTGlicmFyeSIsInVuZGVmaW5lZCIsImNvbnRleHQiLCJQcm9taXNlIiwicmVzb2x2ZSIsImNvcmVEZXN0cm95Q29udGV4dCIsImdldFZlcnNpb24iLCJnZXRDb25maWdTZXJ2ZXIiLCJnZXRRdWVyeVVybCIsImNvcmVWZXJzaW9uIiwiY29uZmlnU2VydmVyIiwicXVlcnlVcmwiLCJwbGF0Zm9ybSIsImNyZWF0ZUxpYnJhcnkiLCJ0cnlDcmVhdGVMaWJyYXJ5IiwiY29yZUNyZWF0ZUNvbnRleHQiLCJyZXF1ZXN0IiwibWV0aG9kIiwicGFyYW1zSnNvbiIsIm9uUmVzdWx0IiwiY29yZVJlcXVlc3QiLCJ0cnlDcmVhdGVDb3JlQnJpZGdlIiwiTW9kdWxlQ2xhc3MiLCJuYW1lIiwibW9kdWxlTmFtZSIsImV4aXN0aW5nTW9kdWxlIiwiZ2V0Iiwic2V0Iiwic2VydmVyVGltZURlbHRhIiwic2VydmVyTm93IiwicXVlcnkiLCJyZXN1bHQiLCJkYXRhIiwiZ2V0TWFuYWdlbWVudEFjY2Vzc0tleSIsInBhcmFtcyIsInNpZ25lZE1hbmFnZW1lbnRBY2Nlc3NLZXkiLCJzaWduS2V5cyIsImFjY291bnRLZXlzIiwibWFuYWdlbWVudEFjY2Vzc0tleSIsIm5hY2xTaWduIiwidGV4dCIsInNlY3JldCIsIl9yZXNvbHZlU2lnbmVkTWFuYWdlbWVudEFjY2Vzc0tleSIsIm11dGF0aW9uIiwiYWNjb3VudCIsImtleXMiLCJyZWdpc3RlckFjY2Vzc0tleXMiLCJyZXZva2VBY2Nlc3NLZXlzIiwidHJhY2VJZCIsInNwYW5JZCIsIm9wZXJhdGlvbk5hbWUiLCJ0cmFjZXIiLCJzcGFuIiwiX3N0YXJ0SW50ZXJuYWxTcGFuIiwiY3R4IiwiZXh0cmFjdCIsIkZPUk1BVF9URVhUX01BUCIsIkRhdGUiLCJub3ciLCJzdGFydFNwYW4iLCJmIiwicGFyZW50U3BhbiIsImNoaWxkT2YiLCJzZXRUYWciLCJUYWdzIiwiU1BBTl9LSU5EIiwiZmluaXNoIiwibG9nIiwiZXZlbnQiLCJwYXlsb2FkIiwiY2xpZW50Iiwic2V0RGF0YSIsIlRPTkVycm9yU291cmNlIiwiQ0xJRU5UIiwiTk9ERSIsIlRPTkVycm9yQ29kZSIsIkNMSUVOVF9ET0VTX05PVF9DT05GSUdVUkVEIiwiU0VORF9OT0RFX1JFUVVFU1RfRkFJTEVEIiwiTUVTU0FHRV9BTFJFQURZX0VYUElSRUQiLCJSVU5fTE9DQUxfQUNDT1VOVF9ET0VTX05PVF9FWElTVFMiLCJXQUlUX0ZPUl9USU1FT1VUIiwiSU5URVJOQUxfRVJST1IiLCJRVUVSWV9GQUlMRUQiLCJNRVNTQUdFX0VYUElSRUQiLCJTRVJWRVJfRE9FU05UX1NVUFBPUlRfQUdHUkVHQVRJT05TIiwiSU5WQUxJRF9DT05TIiwiQUREUkVTU19SRVFVSVJFRF9GT1JfUlVOX0xPQ0FMIiwiTkVUV09SS19TSUxFTlQiLCJUUkFOU0FDVElPTl9MQUciLCJUUkFOU0FDVElPTl9XQUlUX1RJTUVPVVQiLCJDTE9DS19PVVRfT0ZfU1lOQyIsIkFDQ09VTlRfTUlTU0lORyIsIkFDQ09VTlRfQ09ERV9NSVNTSU5HIiwiQUNDT1VOVF9CQUxBTkNFX1RPT19MT1ciLCJBQ0NPVU5UX0ZST1pFTl9PUl9ERUxFVEVEIiwiQ09OVFJBQ1RfRVhFQ1VUSU9OX0ZBSUxFRCIsIlFVRVJZX0ZPUkNJQkxZX0FCT1JURUQiLCJUT05Db250cmFjdEV4aXRDb2RlIiwiUkVQTEFZX1BST1RFQ1RJT04iLCJOT19HQVMiLCJUT05DbGllbnRFcnJvciIsImNsaWVudEluZm8iLCJtZXNzYWdlIiwiY29kZSIsInNvdXJjZSIsImVycm9yIiwiZXhpdENvZGUiLCJleGl0X2NvZGUiLCJpc0NvbnRyYWN0RXJyb3IiLCJvcmlnaW5hbF9lcnJvciIsImlzTWVzc2FnZUV4cGlyZWQiLCJyZXNwb25zZVRleHQiLCJmdW5jdGlvbk5hbWUiLCJhZGRyZXNzIiwiZXJyb3JzIiwibWFwIiwieCIsInRvU3RyaW5nIiwiam9pbiIsInRpbWUiLCJ0b0lTT1N0cmluZyIsInNlbmRpbmdUaW1lIiwiZm9ybWF0VGltZSIsImV4cGlyYXRpb25UaW1lIiwiZXhwaXJlIiwiYmxvY2tUaW1lIiwiYmFsYW5jZSIsIndvcmtjaGFpbiIsIndvcmtjaGFpbk5hbWUiLCJpc0NsaWVudEVycm9yIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7QUFLQTs7QUFjQTs7QUFDQTs7QUFDQTs7QUFFQTs7QUFPQTs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQXFCQTs7Ozs7SUFLYUEsUzs7OytCQUNTQyxjLEVBQW1DO0FBQ2pERCxNQUFBQSxTQUFTLENBQUNDLGNBQVYsR0FBMkJBLGNBQTNCO0FBQ0gsSyxDQUdEOzs7O0FBU0EsdUJBQWM7QUFBQTs7QUFBQTs7QUFBQTs7QUFBQTs7QUFBQTs7QUFBQTs7QUFBQTs7QUFBQTs7QUFBQTs7QUFDVixTQUFLQyxPQUFMLEdBQWUsSUFBSUMsR0FBSixFQUFmO0FBQ0EsU0FBS0MsTUFBTCxHQUFjLEtBQUtDLFNBQUwsQ0FBZUMsMkJBQWYsQ0FBZDtBQUNBLFNBQUtDLE1BQUwsR0FBYyxLQUFLRixTQUFMLENBQWVHLDJCQUFmLENBQWQ7QUFDQSxTQUFLQyxTQUFMLEdBQWlCLEtBQUtKLFNBQUwsQ0FBZUssOEJBQWYsQ0FBakI7QUFDQSxTQUFLQyxRQUFMLEdBQWdCLEtBQUtOLFNBQUwsQ0FBZU8sNEJBQWYsQ0FBaEI7QUFDQSxTQUFLQyxPQUFMLEdBQWUsS0FBS0YsUUFB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Iiwic291cmNlc0NvbnRlbnQiOlsiLypcbiAqIENvcHlyaWdodCAyMDE4LTIwMjAgVE9OIERFViBTT0xVVElPTlMgTFRELlxuICovXG4vLyBAZmxvd1xuXG5pbXBvcnQge1xuICAgIFRhZ3MsIFNwYW4sIFNwYW5Db250ZXh0LCBGT1JNQVRfVEVYVF9NQVAsXG59IGZyb20gJ29wZW50cmFjaW5nJztcbmltcG9ydCB0eXBlIHtcbiAgICBJVE9OQ2xpZW50LFxuICAgIFRPTkFjY2Vzc0tleXNNYW5hZ2VtZW50UGFyYW1zLFxuICAgIFRPTkNvbmZpZ0RhdGEsXG4gICAgVE9OQ29udHJhY3RzLFxuICAgIFRPTkNyeXB0bywgVE9OTWVzc2FnZVByb2Nlc3NpbmdTdGF0ZSxcbiAgICBUT05RdWVyaWVzLFxuICAgIFRPTlJlZ2lzdGVyQWNjZXNzS2V5c1BhcmFtcyxcbiAgICBUT05SZXZva2VBY2Nlc3NLZXlzUGFyYW1zLFxufSBmcm9tICcuLi90eXBlcyc7XG5cbmltcG9ydCBUT05Db25maWdNb2R1bGUgZnJvbSAnLi9tb2R1bGVzL1RPTkNvbmZpZ01vZHVsZSc7XG5pbXBvcnQgVE9OQ29udHJhY3RzTW9kdWxlIGZyb20gJy4vbW9kdWxlcy9UT05Db250cmFjdHNNb2R1bGUnO1xuaW1wb3J0IFRPTkNyeXB0b01vZHVsZSBmcm9tICcuL21vZHVsZXMvVE9OQ3J5cHRvTW9kdWxlJztcbi8qIGVzbGludC1kaXNhYmxlIGNsYXNzLW1ldGhvZHMtdXNlLXRoaXMsIG5vLXVzZS1iZWZvcmUtZGVmaW5lICovXG5pbXBvcnQgVE9OUXVlcmllc01vZHVsZSBmcm9tICcuL21vZHVsZXMvVE9OUXVlcmllc01vZHVsZSc7XG5cbmltcG9ydCB0eXBlIHtcbiAgICBUT05DbGllbnRDb3JlTGlicmFyeSxcbiAgICBUT05DbGllbnRDb3JlQnJpZGdlLFxuICAgIFRPTk1vZHVsZUNvbnRleHQsIFRPTkNsaWVudEluZm8sXG59IGZyb20gJy4vVE9OTW9kdWxlJztcbmltcG9ydCB7IFRPTk1vZHVsZSB9IGZyb20gJy4vVE9OTW9kdWxlJztcblxuLyoqXG4gKiBKYXZhU2NyaXB0IHBsYXRmb3JtIHNwZWNpZmljIGNvbmZpZ3VyYXRpb25cbiAqL1xudHlwZSBUT05DbGllbnRQbGF0Zm9ybSA9IHtcbiAgICAvKipcbiAgICAgKiBQbGF0Zm9ybSBzcGVjaWZpYyBgZmV0Y2hgIGZ1bmN0aW9uXG4gICAgICovXG4gICAgZmV0Y2g6IGFueSxcbiAgICAvKipcbiAgICAgKiBQbGF0Zm9ybSBzcGVjaWZpYyBgV2ViU29ja2V0YCBpbXBsZW1lbnRhdGlvblxuICAgICAqIFRoaXMgaW1wbGVtZW50YXRpb24gbXVzdCBjb25mb3JtcyB0byBXM0MgV2ViU29ja2V0XG4gICAgICovXG4gICAgV2ViU29ja2V0OiBhbnksXG4gICAgLyoqXG4gICAgICogUmVxdWVzdCBjcmVhdGlvbiBvZiB0aGUgY2xpZW50IGNvcmVcbiAgICAgKi9cbiAgICBjcmVhdGVMaWJyYXJ5OiAoKSA9PiBQcm9taXNlPFRPTkNsaWVudENvcmVMaWJyYXJ5Pixcbn07XG5cbi8qKlxuICogTWFpbiBvYmplY3QgcHJvdmlkZWQgZnVuY3Rpb25hbGl0eSBvZiB0aGUgVE9OIENsaWVudCBMaWJyYXJ5XG4gKiBFYWNoIGluc3RhbmNlIG9mIFRPTkNsaWVudCBoYXMgb3duIHNldCBvZiBUT04gQ2xpZW50IG1vZHVsZXNcbiAqIGFuZCBoYXMgb3duIHByZWNvbmZpZ3VyZWQgY2xpZW50IGNvbnRleHRcbiAqL1xuZXhwb3J0IGNsYXNzIFRPTkNsaWVudCBpbXBsZW1lbnRzIFRPTk1vZHVsZUNvbnRleHQsIElUT05DbGllbnQge1xuICAgIHN0YXRpYyBzZXRMaWJyYXJ5KGNsaWVudFBsYXRmb3JtOiBUT05DbGllbnRQbGF0Zm9ybSkge1xuICAgICAgICBUT05DbGllbnQuY2xpZW50UGxhdGZvcm0gPSBjbGllbnRQbGF0Zm9ybTtcbiAgICB9XG5cblxuICAgIC8vIFB1YmxpY1xuICAgIGNvbmZpZzogVE9OQ29uZmlnTW9kdWxlO1xuICAgIGNyeXB0bzogVE9OQ3J5cHRvO1xuICAgIGNvbnRyYWN0czogVE9OQ29udHJhY3RzO1xuICAgIHF1ZXJpZXM6IFRPTlF1ZXJpZXM7XG4gICAgX3F1ZXJpZXM6IFRPTlF1ZXJpZXNNb2R1bGU7XG4gICAgX2NvbnRleHQ6IG51bWJlcjtcbiAgICBfY29yZUJyaWRnZTogP1RPTkNsaWVudENvcmVCcmlkZ2U7XG5cbiAgICBjb25zdHJ1Y3RvcigpIHtcbiAgICAgICAgdGhpcy5tb2R1bGVzID0gbmV3IE1hcCgpO1xuICAgICAgICB0aGlzLmNvbmZpZyA9IHRoaXMuZ2V0TW9kdWxlKFRPTkNvbmZpZ01vZHVsZSk7XG4gICAgICAgIHRoaXMuY3J5cHRvID0gdGhpcy5nZXRNb2R1bGUoVE9OQ3J5cHRvTW9kdWxlKTtcbiAgICAgICAgdGhpcy5jb250cmFjdHMgPSB0aGlzLmdldE1vZHVsZShUT05Db250cmFjdHNNb2R1bGUpO1xuICAgICAgICB0aGlzLl9xdWVyaWVzID0gdGhpcy5nZXRNb2R1bGUoVE9OUXVlcmllc01vZHVsZSk7XG4gICAgICAgIHRoaXMucXVlcmllcyA9IHRoaXMuX3F1ZXJpZXM7XG4gICAgICAgIHRoaXMuX2NvbnRleHQgPSAwO1xuICAgICAgICB0aGlzLl9jb3JlQnJpZGdlID0gbnVsbDtcbiAgICB9XG5cbiAgICAvKipcbiAgICAgKiBDb252ZW5pZW50IHdheSB0byBjcmVhdGUgY29uZmlndXJlZCBpbnN0YW5jZSBvZiB0aGUgVE9OIENsaWVudFxuICAgICAqIEBwYXJhbSB7VE9OQ29uZmlnRGF0YX0gY29uZmlnXG4gICAgICogQHJldHVybiB7UHJvbWlzZTxUT05DbGllbnQ+fVxuICAgICAqL1xuICAgIHN0YXRpYyBhc3luYyBjcmVhdGUoY29uZmlnOiBUT05Db25maWdEYXRhKTogUHJvbWlzZTxUT05DbGllbnQ+IHtcbiAgICAgICAgY29uc3QgY2xpZW50ID0gbmV3IFRPTkNsaWVudCgpO1xuICAgICAgICBjbGllbnQuY29uZmlnLnNldERhdGEoY29uZmlnKTtcbiAgICAgICAgYXdhaXQgY2xpZW50LnNldHVwKCk7XG4gICAgICAgIHJldHVybiBjbGllbnQ7XG4gICAgfVxuXG4gICAgLyoqXG4gICAgICogU2V0IHVwIHRoZSBjbGllbnQgaW5zdGFuY2VcbiAgICAgKiBAcmV0dXJuIHtQcm9taXNlPHZvaWQ+fVxuICAgICAqL1xuICAgIGFzeW5jIHNldHVwKCk6IFByb21pc2U8dm9pZD4ge1xuICAgICAgICBhd2FpdCB0aGlzLmdldENvcmVCcmlkZ2UoKTtcbiAgICAgICAgY29uc3QgbW9kdWxlczogVE9OTW9kdWxlW10gPSBbLi4udGhpcy5tb2R1bGVzLnZhbHVlcygpXTtcbiAgICAgICAgZm9yIChjb25zdCBtb2R1bGUgb2YgbW9kdWxlcykge1xuICAgICAgICAgICAgYXdhaXQgbW9kdWxlLnNldHVwKCk7XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICAvKipcbiAgICAgKiBUZWFyIGRvd24gdGhpcyBjbGllbnQgaW5zdGFuY2UuXG4gICAgICogTm90ZSB0aGF0IGFmdGVyIHlvdSBoYXZlIGNhbGxlZCB0aGlzIG1ldGhvZCBhbGwgZnV0dXJlIHVzZSBvZiB0aGlzIGluc3RhbmNlIHdpbGwgZmFpbFxuICAgICAqIEByZXR1cm4ge1Byb21pc2U8dm9pZD59XG4gICAgICovXG4gICAgYXN5bmMgY2xvc2UoKTogUHJvbWlzZTx2b2lkPiB7XG4gICAgICAgIGF3YWl0IHRoaXMucXVlcmllcy5jbG9zZSgpO1xuICAgICAgICBjb25zdCBsaWJyYXJ5ID0gVE9OQ2xpZW50LmNvcmVMaWJyYXJ5O1xuICAgICAgICBpZiAodGhpcy5fY29udGV4dCA+IDAgJiYgbGlicmFyeSAhPT0gbnVsbCAmJiBsaWJyYXJ5ICE9PSB1bmRlZmluZWQpIHtcbiAgICAgICAgICAgIGNvbnN0IGNvbnRleHQgPSB0aGlzLl9jb250ZXh0O1xuICAgICAgICAgICAgdGhpcy5fY29yZUJyaWRnZSA9IG51bGw7XG4gICAgICAgICAgICB0aGlzLl9jb250ZXh0ID0gMDtcbiAgICAgICAgICAgIGF3YWl0IG5ldyBQcm9taXNlKHJlc29sdmUgPT4gbGlicmFyeS5jb3JlRGVzdHJveUNvbnRleHQoY29udGV4dCwgcmVzb2x2ZSkpO1xuICAgICAgICB9XG4gICAgfVxuXG4gICAgLy8gVE9OTW9kdWxlQ29udGV4dFxuXG4gICAgYXN5bmMgZ2V0Q2xpZW50SW5mbygpOiBQcm9taXNlPFRPTkNsaWVudEluZm8+IHtcbiAgICAgICAgcmV0dXJuIHtcbiAgICAgICAgICAgIGNvcmVWZXJzaW9uOiBhd2FpdCB0aGlzLmNvbmZpZy5nZXRWZXJzaW9uKCksXG4gICAgICAgICAgICBjb25maWdTZXJ2ZXI6IHRoaXMuY29uZmlnLmdldENvbmZpZ1NlcnZlcigpLFxuICAgICAgICAgICAgcXVlcnlVcmw6IHRoaXMuX3F1ZXJpZXMuZ2V0UXVlcnlVcmwoKSxcbiAgICAgICAgfVxuICAgIH1cblxuICAgIGFzeW5jIHRyeUNyZWF0ZUxpYnJhcnkoKSB7XG4gICAgICAgIGNvbnN0IHBsYXRmb3JtID0gVE9OQ2xpZW50LmNsaWVudFBsYXRmb3JtO1xuICAgICAgICBpZiAocGxhdGZvcm0gPT09IG51bGwgfHwgcGxhdGZvcm0gPT09IHVuZGVmaW5lZCkge1xuICAgICAgICAgICAgcmV0dXJuIG51bGw7XG4gICAgICAgIH1cbiAgICAgICAgVE9OQ2xpZW50LmNvcmVMaWJyYXJ5ID0gYXdhaXQgcGxhdGZvcm0uY3JlYXRlTGlicmFyeSgpO1xuICAgICAgICByZXR1cm4gVE9OQ2xpZW50LmNvcmVMaWJyYXJ5O1xuICAgIH1cblxuICAgIGFzeW5jIHRyeUNyZWF0ZUNvcmVCcmlkZ2UoKSB7XG4gICAgICAgIGNvbnN0IGxpYnJhcnkgPSBUT05DbGllbnQuY29yZUxpYnJhcnkgfHwgYXdhaXQgdGhpcy50cnlDcmVhdGVMaWJyYXJ5KCk7XG4gICAgICAgIGlmICghbGlicmFyeSkge1xuICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICB9XG4gICAgICAgIGlmIChsaWJyYXJ5LmNvcmVDcmVhdGVDb250ZXh0KSB7XG4gICAgICAgICAgICB0aGlzLl9jb250ZXh0ID0gYXdhaXQgbmV3IFByb21pc2UoKHJlc29sdmUpID0+IGxpYnJhcnkuY29yZUNyZWF0ZUNvbnRleHQocmVzb2x2ZSkpO1xuICAgICAgICAgICAgdGhpcy5fY29yZUJyaWRnZSA9IHtcbiAgICAgICAgICAgICAgICByZXF1ZXN0OiAoXG4gICAgICAgICAgICAgICAgICAgIG1ldGhvZDogc3RyaW5nLFxuICAgICAgICAgICAgICAgICAgICBwYXJhbXNKc29uOiBzdHJpbmcsXG4gICAgICAgICAgICAgICAgICAgIG9uUmVzdWx0OiAocmVzdWx0SnNvbjogc3RyaW5nLCBlcnJvckpzb246IHN0cmluZykgPT4gdm9pZCxcbiAgICAgICAgICAgICAgICApOiB2b2lkID0+IHtcbiAgICAgICAgICAgICAgICAgICAgaWYgKFRPTkNsaWVudC5jb3JlTGlicmFyeSkge1xuICAgICAgICAgICAgICAgICAgICAgICAgVE9OQ2xpZW50LmNvcmVMaWJyYXJ5LmNvcmVSZXF1ZXN0KFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMuX2NvbnRleHQsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgbWV0aG9kLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHBhcmFtc0pzb24sXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgb25SZXN1bHQsXG4gICAgICAgICAgICAgICAgICAgICAgICApO1xuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgIH07XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICB0aGlzLl9jb3JlQnJpZGdlID0gbGlicmFyeTtcbiAgICAgICAgfVxuICAgIH1cblxuICAgIGFzeW5jIGdldENvcmVCcmlkZ2UoKTogUHJvbWlzZTw/VE9OQ2xpZW50Q29yZUJyaWRnZT4ge1xuICAgICAgICBpZiAoIXRoaXMuX2NvcmVCcmlkZ2UpIHtcbiAgICAgICAgICAgIGF3YWl0IHRoaXMudHJ5Q3JlYXRlQ29yZUJyaWRnZSgpO1xuICAgICAgICB9XG4gICAgICAgIHJldHVybiB0aGlzLl9jb3JlQnJpZGdlO1xuICAgIH1cblxuICAgIGdldE1vZHVsZTxUPihNb2R1bGVDbGFzczogdHlwZW9mIFRPTk1vZHVsZSk6IFQge1xuICAgICAgICBjb25zdCBuYW1lID0gTW9kdWxlQ2xhc3MubW9kdWxlTmFtZTtcbiAgICAgICAgY29uc3QgZXhpc3RpbmdNb2R1bGUgPSB0aGlzLm1vZHVsZXMuZ2V0KG5hbWUpO1xuICAgICAgICBpZiAoZXhpc3RpbmdNb2R1bGUpIHtcbiAgICAgICAgICAgIHJldHVybiAoZXhpc3RpbmdNb2R1bGU6IGFueSk7XG4gICAgICAgIH1cbiAgICAgICAgY29uc3QgbW9kdWxlID0gbmV3IE1vZHVsZUNsYXNzKHRoaXMpO1xuICAgICAgICB0aGlzLm1vZHVsZXMuc2V0KG5hbWUsIG1vZHVsZSk7XG4gICAgICAgIHJldHVybiAobW9kdWxlOiBhbnkpO1xuICAgIH1cblxuICAgIHNlcnZlclRpbWVEZWx0YSgpOiBQcm9taXNlPG51bWJlcj4ge1xuICAgICAgICByZXR1cm4gdGhpcy5fcXVlcmllcy5zZXJ2ZXJUaW1lRGVsdGEoKTtcbiAgICB9XG5cbiAgICBzZXJ2ZXJOb3coKTogUHJvbWlzZTxudW1iZXI+IHtcbiAgICAgICAgcmV0dXJuIHRoaXMuX3F1ZXJpZXMuc2VydmVyTm93KCk7XG4gICAgfVxuXG4gICAgYXN5bmMgZ2V0TWFuYWdlbWVudEFjY2Vzc0tleSgpOiBQcm9taXNlPHN0cmluZz4ge1xuICAgICAgICBjb25zdCByZXN1bHQgPSBhd2FpdCB0aGlzLl9xdWVyaWVzLnF1ZXJ5KCdxdWVyeXtnZXRNYW5hZ2VtZW50QWNjZXNzS2V5fScpO1xuICAgICAgICByZXR1cm4gcmVzdWx0LmRhdGEuZ2V0TWFuYWdlbWVudEFjY2Vzc0tleTtcbiAgICB9XG5cblxuICAgIGFzeW5jIF9yZXNvbHZlU2lnbmVkTWFuYWdlbWVudEFjY2Vzc0tleShcbiAgICAgICAgcGFyYW1zOiBUT05BY2Nlc3NLZXlzTWFuYWdlbWVudFBhcmFtcyxcbiAgICApOiBQcm9taXNlPHN0cmluZz4ge1xuICAgICAgICBpZiAocGFyYW1zLnNpZ25lZE1hbmFnZW1lbnRBY2Nlc3NLZXkpIHtcbiAgICAgICAgICAgIHJldHVybiBwYXJhbXMuc2lnbmVkTWFuYWdlbWVudEFjY2Vzc0tleTtcbiAgICAgICAgfVxuICAgICAgICBjb25zdCBzaWduS2V5cyA9IHBhcmFtcy5hY2NvdW50S2V5cztcbiAgICAgICAgaWYgKHNpZ25LZXlzKSB7XG4gICAgICAgICAgICBjb25zdCBtYW5hZ2VtZW50QWNjZXNzS2V5ID0gYXdhaXQgdGhpcy5nZXRNYW5hZ2VtZW50QWNjZXNzS2V5KCk7XG4gICAgICAgICAgICByZXR1cm4gdGhpcy5jcnlwdG8ubmFjbFNpZ24oXG4gICAgICAgICAgICAgICAgeyB0ZXh0OiBtYW5hZ2VtZW50QWNjZXNzS2V5IH0sXG4gICAgICAgICAgICAgICAgYCR7c2lnbktleXMuc2VjcmV0fSR7c2lnbktleXMucHVibGljfWAsXG4gICAgICAgICAgICAgICAgJ0hleCcsXG4gICAgICAgICAgICApO1xuICAgICAgICB9XG4gICAgICAgIHJldHVybiAnJztcbiAgICB9XG5cbiAgICBhc3luYyByZWdpc3RlckFjY2Vzc0tleXMoXG4gICAgICAgIHBhcmFtczogVE9OUmVnaXN0ZXJBY2Nlc3NLZXlzUGFyYW1zLFxuICAgICk6IFByb21pc2U8bnVtYmVyPiB7XG4gICAgICAgIGNvbnN0IHNpZ25lZE1hbmFnZW1lbnRBY2Nlc3NLZXkgPSBhd2FpdCB0aGlzLl9yZXNvbHZlU2lnbmVkTWFuYWdlbWVudEFjY2Vzc0tleShwYXJhbXMpO1xuICAgICAgICBjb25zdCByZXN1bHQgPSBhd2FpdCB0aGlzLl9xdWVyaWVzLm11dGF0aW9uKFxuICAgICAgICAgICAgYG11dGF0aW9uIHJlZ2lzdGVyQWNjZXNzS2V5cygkYWNjb3VudDogU3RyaW5nLCAka2V5czogW0FjY2Vzc0tleV0sICRzaWduZWRNYW5hZ2VtZW50QWNjZXNzS2V5OiBTdHJpbmcpIHtcbiAgICAgICAgICAgICAgICAgICAgcmVnaXN0ZXJBY2Nlc3NLZXlzKGFjY291bnQ6ICRhY2NvdW50LCBrZXlzOiAka2V5cywgc2lnbmVkTWFuYWdlbWVudEFjY2Vzc0tleTogJHNpZ25lZE1hbmFnZW1lbnRBY2Nlc3NLZXkpXG4gICAgICAgICAgICAgICAgfWAsIHtcbiAgICAgICAgICAgICAgICBhY2NvdW50OiBwYXJhbXMuYWNjb3VudCxcbiAgICAgICAgICAgICAgICBrZXlzOiBwYXJhbXMua2V5cyxcbiAgICAgICAgICAgICAgICBzaWduZWRNYW5hZ2VtZW50QWNjZXNzS2V5LFxuICAgICAgICAgICAgfSxcbiAgICAgICAgKTtcbiAgICAgICAgcmV0dXJuIHJlc3VsdC5kYXRhLnJlZ2lzdGVyQWNjZXNzS2V5cztcbiAgICB9XG5cbiAgICBhc3luYyByZXZva2VBY2Nlc3NLZXlzKFxuICAgICAgICBwYXJhbXM6IFRPTlJldm9rZUFjY2Vzc0tleXNQYXJhbXMsXG4gICAgKTogUHJvbWlzZTxudW1iZXI+IHtcbiAgICAgICAgY29uc3Qgc2lnbmVkTWFuYWdlbWVudEFjY2Vzc0tleSA9IGF3YWl0IHRoaXMuX3Jlc29sdmVTaWduZWRNYW5hZ2VtZW50QWNjZXNzS2V5KHBhcmFtcyk7XG4gICAgICAgIGNvbnN0IHJlc3VsdCA9IGF3YWl0IHRoaXMuX3F1ZXJpZXMubXV0YXRpb24oXG4gICAgICAgICAgICBgbXV0YXRpb24gcmV2b2tlQWNjZXNzS2V5cygkYWNjb3VudDogU3RyaW5nLCAka2V5czogW1N0cmluZ10sICRzaWduZWRNYW5hZ2VtZW50QWNjZXNzS2V5OiBTdHJpbmcpIHtcbiAgICAgICAgICAgICAgICAgICAgcmV2b2tlQWNjZXNzS2V5cyhhY2NvdW50OiAkYWNjb3VudCwga2V5czogJGtleXMsIHNpZ25lZE1hbmFnZW1lbnRBY2Nlc3NLZXk6ICRzaWduZWRNYW5hZ2VtZW50QWNjZXNzS2V5KVxuICAgICAgICAgICAgICAgIH1gLCB7XG4gICAgICAgICAgICAgICAgYWNjb3VudDogcGFyYW1zLmFjY291bnQsXG4gICAgICAgICAgICAgICAga2V5czogcGFyYW1zLmtleXMsXG4gICAgICAgICAgICAgICAgc2lnbmVkTWFuYWdlbWVudEFjY2Vzc0tleSxcbiAgICAgICAgICAgIH0sXG4gICAgICAgICk7XG4gICAgICAgIHJldHVybiByZXN1bHQuZGF0YS5yZXZva2VBY2Nlc3NLZXlzO1xuICAgIH1cblxuICAgIHN0YXJ0Um9vdFNwYW4odHJhY2VJZDogc3RyaW5nLCBzcGFuSWQ6IHN0cmluZywgb3BlcmF0aW9uTmFtZTogc3RyaW5nKTogU3BhbiB7XG4gICAgICAgIGNvbnN0IHRyYWNlciA9IHRoaXMuY29uZmlnLnRyYWNlcjtcbiAgICAgICAgbGV0IHNwYW46ID9TcGFuID0gbnVsbDtcbiAgICAgICAgaWYgKHRyYWNlci5fc3RhcnRJbnRlcm5hbFNwYW4pIHtcbiAgICAgICAgICAgIHRyeSB7XG4gICAgICAgICAgICAgICAgY29uc3QgY3R4ID0gdHJhY2VyLmV4dHJhY3QoRk9STUFUX1RFWFRfTUFQLCB7XG4gICAgICAgICAgICAgICAgICAgICd1YmVyLXRyYWNlLWlkJzogYCR7dHJhY2VJZH06JHtzcGFuSWR9OjA6MWAsXG4gICAgICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICAgICAgaWYgKGN0eCkge1xuICAgICAgICAgICAgICAgICAgICBzcGFuID0gdGhpcy5jb25maWcudHJhY2VyLl9zdGFydEludGVybmFsU3BhbihcbiAgICAgICAgICAgICAgICAgICAgICAgIGN0eCxcbiAgICAgICAgICAgICAgICAgICAgICAgIG9wZXJhdGlvbk5hbWUsXG4gICAgICAgICAgICAgICAgICAgICAgICBEYXRlLm5vdygpLCAvLyBzdGFydFRpbWVcbiAgICAgICAgICAgICAgICAgICAgICAgIHVuZGVmaW5lZCwgLy8gdXNlclRhZ3NcbiAgICAgICAgICAgICAgICAgICAgICAgIHt9LCAvLyBpbnRlcm5hbFRhZ3NcbiAgICAgICAgICAgICAgICAgICAgICAgIFtdLCAvLyByZWZlcmVuY2VzXG4gICAgICAgICAgICAgICAgICAgICAgICBmYWxzZSwgLy8gaGFzVmFsaWRQYXJlbnRcbiAgICAgICAgICAgICAgICAgICAgICAgIGZhbHNlLCAvLyBpc1JwY1NlcnZlclxuICAgICAgICAgICAgICAgICAgICApO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH0gY2F0Y2gge1xuICAgICAgICAgICAgICAgIC8vIHRyYWNlciBjYW4ndCBjcmVhdGUgbWVzc2FnZSBzcGFuIHVzaW5nIHByaXZhdGUgbWV0aG9kLFxuICAgICAgICAgICAgICAgIC8vIHNvIHdlIGFyZSBmYWxsYmFjayB0byBjcmVhdGUgc3BhbiB1c2luZyByZWd1bGFyIG1ldGhvZFxuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICAgIHJldHVybiBzcGFuIHx8IHRyYWNlci5zdGFydFNwYW4ob3BlcmF0aW9uTmFtZSk7XG4gICAgfVxuXG4gICAgYXN5bmMgdHJhY2U8VD4oXG4gICAgICAgIG5hbWU6IHN0cmluZyxcbiAgICAgICAgZjogKHNwYW46IFNwYW4pID0+IFByb21pc2U8VD4sXG4gICAgICAgIHBhcmVudFNwYW4/OiAoU3BhbiB8IFNwYW5Db250ZXh0KSxcbiAgICApOiBQcm9taXNlPFQ+IHtcbiAgICAgICAgY29uc3Qgc3BhbiA9IHRoaXMuY29uZmlnLnRyYWNlci5zdGFydFNwYW4obmFtZSwgeyBjaGlsZE9mOiBwYXJlbnRTcGFuIH0pO1xuICAgICAgICB0cnkge1xuICAgICAgICAgICAgc3Bhbi5zZXRUYWcoVGFncy5TUEFOX0tJTkQsICdjbGllbnQnKTtcbiAgICAgICAgICAgIGNvbnN0IHJlc3VsdCA9IGF3YWl0IGYoc3Bhbik7XG4gICAgICAgICAgICBpZiAocmVzdWx0ICE9PSB1bmRlZmluZWQpIHtcbiAgICAgICAgICAgICAgICBzcGFuLnNldFRhZygncmVzdWx0JywgcmVzdWx0KTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIHNwYW4uZmluaXNoKCk7XG4gICAgICAgICAgICByZXR1cm4gcmVzdWx0O1xuICAgICAgICB9IGNhdGNoIChlcnJvcikge1xuICAgICAgICAgICAgc3Bhbi5sb2coe1xuICAgICAgICAgICAgICAgIGV2ZW50OiAnZmFpbGVkJyxcbiAgICAgICAgICAgICAgICBwYXlsb2FkOiBlcnJvcixcbiAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgc3Bhbi5maW5pc2goKTtcbiAgICAgICAgICAgIHRocm93IGVycm9yO1xuICAgICAgICB9XG4gICAgfVxuXG4gICAgLy8gSW50ZXJuYWxzXG5cbiAgICBzdGF0aWMgY2xpZW50UGxhdGZvcm06ID9UT05DbGllbnRQbGF0Zm9ybSA9IG51bGw7XG4gICAgc3RhdGljIGNvcmVMaWJyYXJ5OiA/VE9OQ2xpZW50Q29yZUxpYnJhcnkgPSBudWxsO1xuXG4gICAgbW9kdWxlczogTWFwPHN0cmluZywgVE9OTW9kdWxlPjtcbn1cblxuXG5leHBvcnQgY29uc3QgVE9ORXJyb3JTb3VyY2UgPSB7XG4gICAgQ0xJRU5UOiAnY2xpZW50JyxcbiAgICBOT0RFOiAnbm9kZScsXG59O1xuXG5leHBvcnQgY29uc3QgVE9ORXJyb3JDb2RlID0ge1xuICAgIENMSUVOVF9ET0VTX05PVF9DT05GSUdVUkVEOiAxMDAwLFxuICAgIFNFTkRfTk9ERV9SRVFVRVNUX0ZBSUxFRDogMTAwMSxcbiAgICBNRVNTQUdFX0FMUkVBRFlfRVhQSVJFRDogMTAwMSxcbiAgICBSVU5fTE9DQUxfQUNDT1VOVF9ET0VTX05PVF9FWElTVFM6IDEwMDIsXG4gICAgV0FJVF9GT1JfVElNRU9VVDogMTAwMyxcbiAgICBJTlRFUk5BTF9FUlJPUjogMTAwNCxcbiAgICBRVUVSWV9GQUlMRUQ6IDEwMDUsXG4gICAgTUVTU0FHRV9FWFBJUkVEOiAxMDA2LFxuICAgIFNFUlZFUl9ET0VTTlRfU1VQUE9SVF9BR0dSRUdBVElPTlM6IDEwMDcsXG4gICAgSU5WQUxJRF9DT05TOiAxMDA4LFxuICAgIEFERFJFU1NfUkVRVUlSRURfRk9SX1JVTl9MT0NBTDogMTAwOSxcbiAgICBORVRXT1JLX1NJTEVOVDogMTAxMCxcbiAgICBUUkFOU0FDVElPTl9MQUc6IDEwMTEsXG4gICAgVFJBTlNBQ1RJT05fV0FJVF9USU1FT1VUOiAxMDEyLFxuICAgIENMT0NLX09VVF9PRl9TWU5DOiAxMDEzLFxuICAgIEFDQ09VTlRfTUlTU0lORzogMTAxNCxcbiAgICBBQ0NPVU5UX0NPREVfTUlTU0lORzogMTAxNSxcbiAgICBBQ0NPVU5UX0JBTEFOQ0VfVE9PX0xPVzogMTAxNixcbiAgICBBQ0NPVU5UX0ZST1pFTl9PUl9ERUxFVEVEOiAxMDE3LFxuXG4gICAgLy8gQ29udHJhY3RzXG5cbiAgICBDT05UUkFDVF9FWEVDVVRJT05fRkFJTEVEOiAzMDI1LFxuXG4gICAgLy8gUXVlcmllc1xuXG4gICAgUVVFUllfRk9SQ0lCTFlfQUJPUlRFRDogNDAwNSxcbn07XG5cbmV4cG9ydCBjb25zdCBUT05Db250cmFjdEV4aXRDb2RlID0ge1xuICAgIFJFUExBWV9QUk9URUNUSU9OOiA1MixcbiAgICBNRVNTQUdFX0VYUElSRUQ6IDU3LFxuICAgIE5PX0dBUzogMTMsXG59O1xuXG5leHBvcnQgY2xhc3MgVE9OQ2xpZW50RXJyb3Ige1xuICAgIHN0YXRpYyBzb3VyY2UgPSBUT05FcnJvclNvdXJjZTtcbiAgICBzdGF0aWMgY29kZSA9IFRPTkVycm9yQ29kZTtcblxuICAgIG1lc3NhZ2U6IHN0cmluZztcbiAgICBzb3VyY2U6IHN0cmluZztcbiAgICBjb2RlOiBudW1iZXI7XG4gICAgZGF0YTogYW55O1xuICAgIGNvcmVWZXJzaW9uOiBzdHJpbmc7XG4gICAgY29uZmlnU2VydmVyOiBzdHJpbmc7XG4gICAgcXVlcnlVcmw6IHN0cmluZztcblxuICAgIGNvbnN0cnVjdG9yKFxuICAgICAgICBjbGllbnRJbmZvOiBUT05DbGllbnRJbmZvLFxuICAgICAgICBtZXNzYWdlOiBzdHJpbmcsXG4gICAgICAgIGNvZGU6IG51bWJlcixcbiAgICAgICAgc291cmNlPzogc3RyaW5nLFxuICAgICAgICBkYXRhPzogYW55LFxuICAgICkge1xuICAgICAgICB0aGlzLm1lc3NhZ2UgPSBtZXNzYWdlO1xuICAgICAgICB0aGlzLmNvZGUgPSBjb2RlO1xuICAgICAgICB0aGlzLnNvdXJjZSA9IHNvdXJjZSB8fCBUT05FcnJvclNvdXJjZS5DTElFTlQ7XG4gICAgICAgIHRoaXMuY29yZVZlcnNpb24gPSBjbGllbnRJbmZvLmNvcmVWZXJzaW9uO1xuICAgICAgICB0aGlzLmNvbmZpZ1NlcnZlciA9IGNsaWVudEluZm8uY29uZmlnU2VydmVyO1xuICAgICAgICB0aGlzLnF1ZXJ5VXJsID0gY2xpZW50SW5mby5xdWVyeVVybDtcbiAgICAgICAgdGhpcy5kYXRhID0gZGF0YTtcbiAgICB9XG5cbiAgICBzdGF0aWMgaXNDbGllbnRFcnJvcihlcnJvcjogYW55LCBjb2RlOiBudW1iZXIpOiBib29sZWFuIHtcbiAgICAgICAgcmV0dXJuIChlcnJvci5zb3VyY2UgPT09IFRPTkNsaWVudEVycm9yLnNvdXJjZS5DTElFTlQpXG4gICAgICAgICAgICAmJiAoZXJyb3IuY29kZSA9PT0gY29kZSk7XG4gICAgfVxuXG4gICAgc3RhdGljIGlzTm9kZUVycm9yKGVycm9yOiBhbnksIGNvZGU6IG51bWJlcik6IGJvb2xlYW4ge1xuICAgICAgICByZXR1cm4gKGVycm9yLnNvdXJjZSA9PT0gVE9OQ2xpZW50RXJyb3Iuc291cmNlLk5PREUpXG4gICAgICAgICAgICAmJiAoZXJyb3IuY29kZSA9PT0gY29kZSk7XG4gICAgfVxuXG4gICAgc3RhdGljIGlzQ29udHJhY3RFcnJvcihlcnJvcjogYW55LCBleGl0Q29kZTogbnVtYmVyKTogYm9vbGVhbiB7XG4gICAgICAgIHJldHVybiAoZXJyb3Iuc291cmNlID09PSBUT05DbGllbnRFcnJvci5zb3VyY2UuTk9ERSlcbiAgICAgICAgICAgICYmIChlcnJvci5jb2RlID09PSBUT05DbGllbnRFcnJvci5jb2RlLkNPTlRSQUNUX0VYRUNVVElPTl9GQUlMRUQpXG4gICAgICAgICAgICAmJiAoZXJyb3IuZGF0YSAmJiBlcnJvci5kYXRhLmV4aXRfY29kZSA9PT0gZXhpdENvZGUpO1xuICAgIH1cblxuICAgIHN0YXRpYyBpc09yaWdpbmFsQ29udHJhY3RFcnJvcihlcnJvcjogYW55LCBleGl0Q29kZTogbnVtYmVyKTogYm9vbGVhbiB7XG4gICAgICAgIHJldHVybiBUT05DbGllbnRFcnJvci5pc0NvbnRyYWN0RXJyb3IoZXJyb3IsIGV4aXRDb2RlKVxuICAgICAgICAgICAgJiYgKCFlcnJvci5kYXRhPy5vcmlnaW5hbF9lcnJvcik7XG4gICAgfVxuXG4gICAgc3RhdGljIGlzUmVzb2x2ZWRDb250cmFjdEVycm9yQWZ0ZXJFeHBpcmUoZXJyb3I6IGFueSwgZXhpdENvZGU6IG51bWJlcik6IGJvb2xlYW4ge1xuICAgICAgICByZXR1cm4gVE9OQ2xpZW50RXJyb3IuaXNDb250cmFjdEVycm9yKGVycm9yLCBleGl0Q29kZSlcbiAgICAgICAgICAgICYmIChlcnJvci5kYXRhICYmIGVycm9yLmRhdGEub3JpZ2luYWxfZXJyb3JcbiAgICAgICAgICAgICAgICAmJiBUT05DbGllbnRFcnJvci5pc01lc3NhZ2VFeHBpcmVkKGVycm9yLmRhdGEub3JpZ2luYWxfZXJyb3IpKTtcbiAgICB9XG5cbiAgICBzdGF0aWMgaW50ZXJuYWxFcnJvcihcbiAgICAgICAgY2xpZW50SW5mbzogVE9OQ2xpZW50SW5mbyxcbiAgICAgICAgbWVzc2FnZTogc3RyaW5nLFxuICAgICk6IFRPTkNsaWVudEVycm9yIHtcbiAgICAgICAgcmV0dXJuIG5ldyBUT05DbGllbnRFcnJvcihcbiAgICAgICAgICAgIGNsaWVudEluZm8sXG4gICAgICAgICAgICBgSW50ZXJuYWwgZXJyb3I6ICR7bWVzc2FnZX1gLFxuICAgICAgICAgICAgVE9ORXJyb3JDb2RlLklOVEVSTkFMX0VSUk9SLFxuICAgICAgICApO1xuICAgIH1cblxuICAgIHN0YXRpYyBpbnZhbGlkQ29ucyhjbGllbnRJbmZvOiBUT05DbGllbnRJbmZvKTogVE9OQ2xpZW50RXJyb3Ige1xuICAgICAgICByZXR1cm4gbmV3IFRPTkNsaWVudEVycm9yKFxuICAgICAgICAgICAgY2xpZW50SW5mbyxcbiAgICAgICAgICAgICdJbnZhbGlkIENPTlMgc3RydWN0dXJlLiBFYWNoIENPTlMgaXRlbSBtdXN0IGNvbnRhaW5zIG9mIHR3byBlbGVtZW50cy4nLFxuICAgICAgICAgICAgVE9ORXJyb3JDb2RlLklOVkFMSURfQ09OUyxcbiAgICAgICAgKTtcbiAgICB9XG5cbiAgICBzdGF0aWMgY2xpZW50RG9lc05vdENvbmZpZ3VyZWQoY2xpZW50SW5mbzogVE9OQ2xpZW50SW5mbyk6IFRPTkNsaWVudEVycm9yIHtcbiAgICAgICAgcmV0dXJuIG5ldyBUT05DbGllbnRFcnJvcihcbiAgICAgICAgICAgIGNsaWVudEluZm8sXG4gICAgICAgICAgICAnVE9OIENsaWVudCBpc25cXCd0IGNvbmZpZ3VyZWQnLFxuICAgICAgICAgICAgVE9ORXJyb3JDb2RlLkNMSUVOVF9ET0VTX05PVF9DT05GSUdVUkVELFxuICAgICAgICApO1xuICAgIH1cblxuICAgIHN0YXRpYyBzZW5kTm9kZVJlcXVlc3RGYWlsZWQoXG4gICAgICAgIGNsaWVudEluZm86IFRPTkNsaWVudEluZm8sXG4gICAgICAgIHJlc3BvbnNlVGV4dDogc3RyaW5nLFxuICAgICk6IFRPTkNsaWVudEVycm9yIHtcbiAgICAgICAgcmV0dXJuIG5ldyBUT05DbGllbnRFcnJvcihcbiAgICAgICAgICAgIGNsaWVudEluZm8sXG4gICAgICAgICAgICBgU2VuZCBub2RlIHJlcXVlc3QgZmFpbGVkOiAke3Jlc3BvbnNlVGV4dH1gLFxuICAgICAgICAgICAgVE9ORXJyb3JDb2RlLlNFTkRfTk9ERV9SRVFVRVNUX0ZBSUxFRCxcbiAgICAgICAgKTtcbiAgICB9XG5cbiAgICBzdGF0aWMgcnVuTG9jYWxBY2NvdW50RG9lc05vdEV4aXN0cyhcbiAgICAgICAgY2xpZW50SW5mbzogVE9OQ2xpZW50SW5mbyxcbiAgICAgICAgZnVuY3Rpb25OYW1lOiBzdHJpbmcsXG4gICAgICAgIGFkZHJlc3M6IHN0cmluZyxcbiAgICApOiBUT05DbGllbnRFcnJvciB7XG4gICAgICAgIHJldHVybiBuZXcgVE9OQ2xpZW50RXJyb3IoXG4gICAgICAgICAgICBjbGllbnRJbmZvLFxuICAgICAgICAgICAgYFske2Z1bmN0aW9uTmFtZX1dIHJ1biBsb2NhbCBmYWlsZWQ6IGFjY291bnQgWyR7YWRkcmVzc31dIGRvZXMgbm90IGV4aXN0c2AsXG4gICAgICAgICAgICBUT05FcnJvckNvZGUuUlVOX0xPQ0FMX0FDQ09VTlRfRE9FU19OT1RfRVhJU1RTLFxuICAgICAgICApO1xuICAgIH1cblxuICAgIHN0YXRpYyB3YWl0Rm9yVGltZW91dChjbGllbnRJbmZvOiBUT05DbGllbnRJbmZvKSB7XG4gICAgICAgIHJldHVybiBuZXcgVE9OQ2xpZW50RXJyb3IoXG4gICAgICAgICAgICBjbGllbnRJbmZvLFxuICAgICAgICAgICAgJ1dhaXQgZm9yIG9wZXJhdGlvbiByZWplY3RlZCBvbiB0aW1lb3V0JyxcbiAgICAgICAgICAgIFRPTkVycm9yQ29kZS5XQUlUX0ZPUl9USU1FT1VULFxuICAgICAgICApO1xuICAgIH1cblxuICAgIHN0YXRpYyBxdWVyeUZhaWxlZChcbiAgICAgICAgY2xpZW50SW5mbzogVE9OQ2xpZW50SW5mbyxcbiAgICAgICAgZXJyb3JzOiBFcnJvcltdLFxuICAgICkge1xuICAgICAgICByZXR1cm4gbmV3IFRPTkNsaWVudEVycm9yKFxuICAgICAgICAgICAgY2xpZW50SW5mbyxcbiAgICAgICAgICAgIGBRdWVyeSBmYWlsZWQ6ICR7ZXJyb3JzLm1hcCh4ID0+IHgubWVzc2FnZSB8fCB4LnRvU3RyaW5nKCkpLmpvaW4oJ1xcbicpfWAsXG4gICAgICAgICAgICBUT05FcnJvckNvZGUuUVVFUllfRkFJTEVELFxuICAgICAgICApO1xuICAgIH1cblxuICAgIHN0YXRpYyBmb3JtYXRUaW1lKHRpbWU6ID9udW1iZXIpOiA/c3RyaW5nIHtcbiAgICAgICAgaWYgKHRpbWUpIHtcbiAgICAgICAgICAgIHJldHVybiBgJHtuZXcgRGF0ZSh0aW1lICogMTAwMCkudG9JU09TdHJpbmcoKX0gKCR7dGltZX0pYDtcbiAgICAgICAgfVxuICAgICAgICByZXR1cm4gbnVsbDtcbiAgICB9XG5cbiAgICBzdGF0aWMgbWVzc2FnZUV4cGlyZWQoXG4gICAgICAgIGNsaWVudEluZm86IFRPTkNsaWVudEluZm8sXG4gICAgICAgIGRhdGE6IHtcbiAgICAgICAgICAgIG1lc3NhZ2VJZDogc3RyaW5nLFxuICAgICAgICAgICAgc2VuZGluZ1RpbWU6IG51bWJlcixcbiAgICAgICAgICAgIGV4cGlyZTogP251bWJlcixcbiAgICAgICAgICAgIGJsb2NrVGltZTogP251bWJlcixcbiAgICAgICAgfSkge1xuICAgICAgICByZXR1cm4gbmV3IFRPTkNsaWVudEVycm9yKFxuICAgICAgICAgICAgY2xpZW50SW5mbyxcbiAgICAgICAgICAgICdNZXNzYWdlIGV4cGlyZWQnLFxuICAgICAgICAgICAgVE9ORXJyb3JDb2RlLk1FU1NBR0VfRVhQSVJFRCxcbiAgICAgICAgICAgIFRPTkVycm9yU291cmNlLkNMSUVOVCxcbiAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICBzZW5kaW5nVGltZTogVE9OQ2xpZW50RXJyb3IuZm9ybWF0VGltZShkYXRhLnNlbmRpbmdUaW1lKSxcbiAgICAgICAgICAgICAgICBleHBpcmF0aW9uVGltZTogVE9OQ2xpZW50RXJyb3IuZm9ybWF0VGltZShkYXRhLmV4cGlyZSksXG4gICAgICAgICAgICAgICAgYmxvY2tUaW1lOiBUT05DbGllbnRFcnJvci5mb3JtYXRUaW1lKGRhdGEuYmxvY2tUaW1lKSxcbiAgICAgICAgICAgIH0sXG4gICAgICAgICk7XG4gICAgfVxuXG4gICAgc3RhdGljIHNlcnZlckRvZXNudFN1cHBvcnRBZ2dyZWdhdGlvbnMoY2xpZW50SW5mbzogVE9OQ2xpZW50SW5mbykge1xuICAgICAgICByZXR1cm4gbmV3IFRPTkNsaWVudEVycm9yKFxuICAgICAgICAgICAgY2xpZW50SW5mbyxcbiAgICAgICAgICAgICdTZXJ2ZXIgZG9lc25cXCd0IHN1cHBvcnQgYWdncmVnYXRpb25zJyxcbiAgICAgICAgICAgIFRPTkVycm9yQ29kZS5TRVJWRVJfRE9FU05UX1NVUFBPUlRfQUdHUkVHQVRJT05TLFxuICAgICAgICApO1xuICAgIH1cblxuICAgIHN0YXRpYyBhZGRyZXNzUmVxdWlyZWRGb3JSdW5Mb2NhbChjbGllbnRJbmZvOiBUT05DbGllbnRJbmZvKSB7XG4gICAgICAgIHJldHVybiBuZXcgVE9OQ2xpZW50RXJyb3IoXG4gICAgICAgICAgICBjbGllbnRJbmZvLFxuICAgICAgICAgICAgJ0FkZHJlc3MgcmVxdWlyZWQgZm9yIHJ1biBsb2NhbC4gWW91IGhhdmVuXFwndCBzcGVjaWZpZWQgY29udHJhY3QgY29kZSBvciBkYXRhICdcbiAgICAgICAgICAgICsgJ3NvIGFkZHJlc3MgaXMgcmVxdWlyZWQgdG8gbG9hZCBtaXNzaW5nIHBhcnRzIGZyb20gbmV0d29yay4nLFxuICAgICAgICAgICAgVE9OQ2xpZW50RXJyb3IuY29kZS5BRERSRVNTX1JFUVVJUkVEX0ZPUl9SVU5fTE9DQUwsXG4gICAgICAgICAgICBUT05DbGllbnRFcnJvci5zb3VyY2UuQ0xJRU5ULFxuICAgICAgICApO1xuICAgIH1cblxuICAgIHN0YXRpYyBuZXR3b3JrU2lsZW50KFxuICAgICAgICBjbGllbnRJbmZvOiBUT05DbGllbnRJbmZvLFxuICAgICAgICBkYXRhOiB7XG4gICAgICAgICAgICBtZXNzYWdlSWQ6IHN0cmluZyxcbiAgICAgICAgICAgIHNlbmRpbmdUaW1lOiBudW1iZXIsXG4gICAgICAgICAgICBleHBpcmU6IG51bWJlcixcbiAgICAgICAgICAgIHRpbWVvdXQ6IG51bWJlcixcbiAgICAgICAgICAgIGJsb2NrSWQ/OiBzdHJpbmcsXG4gICAgICAgICAgICBtZXNzYWdlUHJvY2Vzc2luZ1N0YXRlPzogVE9OTWVzc2FnZVByb2Nlc3NpbmdTdGF0ZSxcbiAgICAgICAgfSkge1xuICAgICAgICByZXR1cm4gbmV3IFRPTkNsaWVudEVycm9yKFxuICAgICAgICAgICAgY2xpZW50SW5mbyxcbiAgICAgICAgICAgICdOZXR3b3JrIHNpbGVudDogbm8gYmxvY2tzIHByb2R1Y2VkIGR1cmluZyB0aW1lb3V0LicsXG4gICAgICAgICAgICBUT05FcnJvckNvZGUuTkVUV09SS19TSUxFTlQsXG4gICAgICAgICAgICBUT05FcnJvclNvdXJjZS5DTElFTlQsXG4gICAgICAgICAgICBkYXRhICYmIHtcbiAgICAgICAgICAgICAgICAuLi5kYXRhLFxuICAgICAgICAgICAgICAgIHNlbmRpbmdUaW1lOiBUT05DbGllbnRFcnJvci5mb3JtYXRUaW1lKGRhdGEuc2VuZGluZ1RpbWUpLFxuICAgICAgICAgICAgICAgIGV4cGlyYXRpb25UaW1lOiBUT05DbGllbnRFcnJvci5mb3JtYXRUaW1lKGRhdGEuZXhwaXJlKSxcbiAgICAgICAgICAgIH0sXG4gICAgICAgICk7XG4gICAgfVxuXG4gICAgc3RhdGljIHRyYW5zYWN0aW9uV2FpdFRpbWVvdXQoXG4gICAgICAgIGNsaWVudEluZm86IFRPTkNsaWVudEluZm8sXG4gICAgICAgIGRhdGE6IHtcbiAgICAgICAgICAgIG1lc3NhZ2VJZDogc3RyaW5nLFxuICAgICAgICAgICAgc2VuZGluZ1RpbWU6IG51bWJlcixcbiAgICAgICAgICAgIHRpbWVvdXQ6IG51bWJlcixcbiAgICAgICAgICAgIG1lc3NhZ2VQcm9jZXNzaW5nU3RhdGU/OiBUT05NZXNzYWdlUHJvY2Vzc2luZ1N0YXRlLFxuICAgICAgICB9KSB7XG4gICAgICAgIHJldHVybiBuZXcgVE9OQ2xpZW50RXJyb3IoXG4gICAgICAgICAgICBjbGllbnRJbmZvLFxuICAgICAgICAgICAgJ1RyYW5zYWN0aW9uIGRpZCBub3QgcHJvZHVjZWQgZHVyaW5nIHNwZWNpZmllZCB0aW1lb3V0JyxcbiAgICAgICAgICAgIFRPTkVycm9yQ29kZS5UUkFOU0FDVElPTl9XQUlUX1RJTUVPVVQsXG4gICAgICAgICAgICBUT05FcnJvclNvdXJjZS5DTElFTlQsXG4gICAgICAgICAgICBkYXRhICYmIHtcbiAgICAgICAgICAgICAgICAuLi5kYXRhLFxuICAgICAgICAgICAgICAgIHNlbmRpbmdUaW1lOiBUT05DbGllbnRFcnJvci5mb3JtYXRUaW1lKGRhdGEuc2VuZGluZ1RpbWUpLFxuICAgICAgICAgICAgfSxcbiAgICAgICAgKTtcbiAgICB9XG5cbiAgICBzdGF0aWMgY2xvY2tPdXRPZlN5bmMoY2xpZW50SW5mbzogVE9OQ2xpZW50SW5mbykge1xuICAgICAgICByZXR1cm4gbmV3IFRPTkNsaWVudEVycm9yKFxuICAgICAgICAgICAgY2xpZW50SW5mbyxcbiAgICAgICAgICAgICdZb3UgbG9jYWwgY2xvY2sgaXMgb3V0IG9mIHN5bmMgd2l0aCB0aGUgc2VydmVyIHRpbWUuICdcbiAgICAgICAgICAgICsgJ0l0IGlzIGEgY3JpdGljYWwgY29uZGl0aW9uIGZvciBzZW5kaW5nIG1lc3NhZ2VzIHRvIHRoZSBibG9ja2NoYWluLiAnXG4gICAgICAgICAgICArICdQbGVhc2Ugc3luYyB5b3UgY2xvY2sgd2l0aCB0aGUgaW50ZXJuZXQgdGltZS4nLFxuICAgICAgICAgICAgVE9ORXJyb3JDb2RlLkNMT0NLX09VVF9PRl9TWU5DLFxuICAgICAgICApO1xuICAgIH1cblxuICAgIHN0YXRpYyBhY2NvdW50TWlzc2luZyhcbiAgICAgICAgY2xpZW50SW5mbzogVE9OQ2xpZW50SW5mbyxcbiAgICAgICAgYWRkcmVzczogc3RyaW5nLFxuICAgICAgICBkYXRhPzogYW55LFxuICAgICkge1xuICAgICAgICByZXR1cm4gbmV3IFRPTkNsaWVudEVycm9yKFxuICAgICAgICAgICAgY2xpZW50SW5mbyxcbiAgICAgICAgICAgIGBBY2NvdW50IHdpdGggYWRkcmVzcyBbJHthZGRyZXNzfV0gZG9lc24ndCBleGlzdHMuIGBcbiAgICAgICAgICAgICsgJ1lvdSBoYXZlIHRvIHByZXBhaWQgdGhpcyBhY2NvdW50IHRvIGhhdmUgYSBwb3NpdGl2ZSBiYWxhbmNlIG9uIHRoZW0gYW5kIHRoZW4gZGVwbG95ICdcbiAgICAgICAgICAgICsgJ2EgY29udHJhY3QgY29kZSBmb3IgdGhpcyBhY2NvdW50LidcbiAgICAgICAgICAgICsgJ1NlZSBTREsgZG9jdW1lbnRhdGlvbiBmb3IgZGV0YWlsZWQgaW5zdHJ1Y3Rpb25zLicsXG4gICAgICAgICAgICBUT05FcnJvckNvZGUuQUNDT1VOVF9NSVNTSU5HLFxuICAgICAgICAgICAgdW5kZWZpbmVkLFxuICAgICAgICAgICAgZGF0YSxcbiAgICAgICAgKTtcbiAgICB9XG5cbiAgICBzdGF0aWMgYWNjb3VudENvZGVNaXNzaW5nKFxuICAgICAgICBjbGllbnRJbmZvOiBUT05DbGllbnRJbmZvLFxuICAgICAgICBhZGRyZXNzOiBzdHJpbmcsXG4gICAgICAgIGJhbGFuY2U6IHN0cmluZyxcbiAgICApIHtcbiAgICAgICAgcmV0dXJuIG5ldyBUT05DbGllbnRFcnJvcihcbiAgICAgICAgICAgIGNsaWVudEluZm8sXG4gICAgICAgICAgICBgQWNjb3VudCB3aXRoIGFkZHJlc3MgWyR7YWRkcmVzc31dIGV4aXN0cyBidXQgaGF2ZW4ndCBhIGNvbnRyYWN0IGNvZGUgeWV0LiBgXG4gICAgICAgICAgICArICdZb3UgaGF2ZSB0byBlbnN1cmUgdGhhdCBhbiBhY2NvdW50IGhhcyBhbiBlbm91Z2ggYmFsYW5jZSBmb3IgZGVwbG95aW5nICdcbiAgICAgICAgICAgICsgJ2EgY29udHJhY3QgY29kZSBhbmQgdGhlbiBkZXBsb3kgYSBjb250cmFjdCBjb2RlIGZvciB0aGlzIGFjY291bnQuICdcbiAgICAgICAgICAgICsgYEN1cnJlbnQgYWNjb3VudCBiYWxhbmNlIGlzIFske2JhbGFuY2V9XS4gYFxuICAgICAgICAgICAgKyAnU2VlIFNESyBkb2N1bWVudGF0aW9uIGZvciBkZXRhaWxlZCBpbnN0cnVjdGlvbnMuJyxcbiAgICAgICAgICAgIFRPTkVycm9yQ29kZS5BQ0NPVU5UX0NPREVfTUlTU0lORyxcbiAgICAgICAgKTtcbiAgICB9XG5cbiAgICBzdGF0aWMgYWNjb3VudEJhbGFuY2VUb29Mb3coXG4gICAgICAgIGNsaWVudEluZm86IFRPTkNsaWVudEluZm8sXG4gICAgICAgIGFkZHJlc3M6IHN0cmluZyxcbiAgICAgICAgYmFsYW5jZTogc3RyaW5nLFxuICAgICkge1xuICAgICAgICByZXR1cm4gbmV3IFRPTkNsaWVudEVycm9yKFxuICAgICAgICAgICAgY2xpZW50SW5mbyxcbiAgICAgICAgICAgIGBBY2NvdW50IHdpdGggYWRkcmVzcyBbJHthZGRyZXNzfV0gaGFzIHRvbyBsb3cgYmFsYW5jZSBbJHtiYWxhbmNlfV0uIGBcbiAgICAgICAgICAgICsgJ1lvdSBoYXZlIHRvIHNlbmQgc29tZSB2YWx1ZSB0byBhY2NvdW50IGJhbGFuY2UgZnJvbSBvdGhlciBjb250cmFjdCAnXG4gICAgICAgICAgICArICcoZS5nLiBXYWxsZXQgY29udHJhY3QpLiAnXG4gICAgICAgICAgICArICdTZWUgU0RLIGRvY3VtZW50YXRpb24gZm9yIGRldGFpbGVkIGluc3RydWN0aW9ucy4nLFxuICAgICAgICAgICAgVE9ORXJyb3JDb2RlLkFDQ09VTlRfQkFMQU5DRV9UT09fTE9XLFxuICAgICAgICApO1xuICAgIH1cblxuICAgIHN0YXRpYyBub0Jsb2NrcyhcbiAgICAgICAgY2xpZW50SW5mbzogVE9OQ2xpZW50SW5mbyxcbiAgICAgICAgd29ya2NoYWluOiBudW1iZXIsXG4gICAgKSB7XG4gICAgICAgIGNvbnN0IHdvcmtjaGFpbk5hbWUgPSB3b3JrY2hhaW4gPT09IC0xID8gJ21hc3RlcmNoYWluJyA6IGB3b3JrY2hhaW4gJHt3b3JrY2hhaW59YDtcbiAgICAgICAgcmV0dXJuIG5ldyBUT05DbGllbnRFcnJvcihcbiAgICAgICAgICAgIGNsaWVudEluZm8sXG4gICAgICAgICAgICBgXCJObyBibG9ja3MgZm9yICR7d29ya2NoYWluTmFtZX0gZm91bmRcIi5gLFxuICAgICAgICAgICAgVE9ORXJyb3JDb2RlLk5FVFdPUktfU0lMRU5ULFxuICAgICAgICApO1xuICAgIH1cblxuICAgIHN0YXRpYyBpbnZhbGlkQmxvY2tjaGFpbihcbiAgICAgICAgY2xpZW50SW5mbzogVE9OQ2xpZW50SW5mbyxcbiAgICAgICAgbWVzc2FnZTogc3RyaW5nLFxuICAgICkge1xuICAgICAgICByZXR1cm4gbmV3IFRPTkNsaWVudEVycm9yKGNsaWVudEluZm8sIG1lc3NhZ2UsIFRPTkVycm9yQ29kZS5ORVRXT1JLX1NJTEVOVCk7XG4gICAgfVxuXG4gICAgc3RhdGljIHF1ZXJ5Rm9yY2libHlBYm9ydGVkKGNsaWVudEluZm86IFRPTkNsaWVudEluZm8pIHtcbiAgICAgICAgcmV0dXJuIG5ldyBUT05DbGllbnRFcnJvcihcbiAgICAgICAgICAgIGNsaWVudEluZm8sXG4gICAgICAgICAgICAnR3JhcGhRTCBxdWVyeSB3YXMgZm9yY2libHkgYWJvcnRlZCBvbiB0aW1lb3V0LicsXG4gICAgICAgICAgICBUT05FcnJvckNvZGUuUVVFUllfRk9SQ0lCTFlfQUJPUlRFRCxcbiAgICAgICAgKTtcbiAgICB9XG5cbiAgICBzdGF0aWMgaXNNZXNzYWdlRXhwaXJlZChlcnJvcjogYW55KTogYm9vbGVhbiB7XG4gICAgICAgIHJldHVybiBUT05DbGllbnRFcnJvci5pc0NsaWVudEVycm9yKGVycm9yLCBUT05DbGllbnRFcnJvci5jb2RlLk1FU1NBR0VfRVhQSVJFRCk7XG4gICAgfVxuXG4gICAgc3RhdGljIGlzV2FpdEZvclRpbWVvdXQoZXJyb3I6IGFueSk6IGJvb2xlYW4ge1xuICAgICAgICByZXR1cm4gVE9OQ2xpZW50RXJyb3IuaXNDbGllbnRFcnJvcihlcnJvciwgVE9OQ2xpZW50RXJyb3IuY29kZS5XQUlUX0ZPUl9USU1FT1VUKTtcbiAgICB9XG59XG4iXX0=