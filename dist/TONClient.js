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

function _createForOfIteratorHelper(o, allowArrayLike) { var it; if (typeof Symbol === "undefined" || o[Symbol.iterator] == null) { if (Array.isArray(o) || (it = _unsupportedIterableToArray(o)) || allowArrayLike && o && typeof o.length === "number") { if (it) o = it; var i = 0; var F = function F() {}; return { s: F, n: function n() { if (i >= o.length) return { done: true }; return { done: false, value: o[i++] }; }, e: function e(_e) { throw _e; }, f: F }; } throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); } var normalCompletion = true, didErr = false, err; return { s: function s() { it = o[Symbol.iterator](); }, n: function n() { var step = it.next(); normalCompletion = step.done; return step; }, e: function e(_e2) { didErr = true; err = _e2; }, f: function f() { try { if (!normalCompletion && it["return"] != null) it["return"](); } finally { if (didErr) throw err; } } }; }

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

    this.message = message;
    this.code = code;
    this.source = source || TONErrorSource.CLIENT;
    this.data = _objectSpread(_objectSpread({}, data), {}, {
      core_version: clientInfo.coreVersion,
      config_server: clientInfo.configServer,
      query_url: clientInfo.queryUrl
    });
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
        sending_time: TONClientError.formatTime(data.sending_time),
        expiration_time: TONClientError.formatTime(data.expire),
        block_time: TONClientError.formatTime(data.block_time)
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
        sending_time: TONClientError.formatTime(data.sending_time),
        expiration_time: TONClientError.formatTime(data.expire)
      }));
    }
  }, {
    key: "transactionWaitTimeout",
    value: function transactionWaitTimeout(clientInfo, data) {
      return new TONClientError(clientInfo, 'Transaction did not produced during specified timeout', TONErrorCode.TRANSACTION_WAIT_TIMEOUT, TONErrorSource.CLIENT, data && _objectSpread(_objectSpread({}, data), {}, {
        sending_time: TONClientError.formatTime(data.sending_time)
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uL3NyYy9UT05DbGllbnQuanMiXSwibmFtZXMiOlsiVE9OQ2xpZW50IiwiY2xpZW50UGxhdGZvcm0iLCJtb2R1bGVzIiwiTWFwIiwiY29uZmlnIiwiZ2V0TW9kdWxlIiwiVE9OQ29uZmlnTW9kdWxlIiwiY3J5cHRvIiwiVE9OQ3J5cHRvTW9kdWxlIiwiY29udHJhY3RzIiwiVE9OQ29udHJhY3RzTW9kdWxlIiwiX3F1ZXJpZXMiLCJUT05RdWVyaWVzTW9kdWxlIiwicXVlcmllcyIsIl9jb250ZXh0IiwiX2NvcmVCcmlkZ2UiLCJnZXRDb3JlQnJpZGdlIiwidmFsdWVzIiwibW9kdWxlIiwic2V0dXAiLCJjbG9zZSIsImxpYnJhcnkiLCJjb3JlTGlicmFyeSIsInVuZGVmaW5lZCIsImNvbnRleHQiLCJQcm9taXNlIiwicmVzb2x2ZSIsImNvcmVEZXN0cm95Q29udGV4dCIsImdldFZlcnNpb24iLCJnZXRDb25maWdTZXJ2ZXIiLCJnZXRRdWVyeVVybCIsImNvcmVWZXJzaW9uIiwiY29uZmlnU2VydmVyIiwicXVlcnlVcmwiLCJwbGF0Zm9ybSIsImNyZWF0ZUxpYnJhcnkiLCJ0cnlDcmVhdGVMaWJyYXJ5IiwiY29yZUNyZWF0ZUNvbnRleHQiLCJyZXF1ZXN0IiwibWV0aG9kIiwicGFyYW1zSnNvbiIsIm9uUmVzdWx0IiwiY29yZVJlcXVlc3QiLCJ0cnlDcmVhdGVDb3JlQnJpZGdlIiwiTW9kdWxlQ2xhc3MiLCJuYW1lIiwibW9kdWxlTmFtZSIsImV4aXN0aW5nTW9kdWxlIiwiZ2V0Iiwic2V0Iiwic2VydmVyVGltZURlbHRhIiwic2VydmVyTm93IiwicXVlcnkiLCJyZXN1bHQiLCJkYXRhIiwiZ2V0TWFuYWdlbWVudEFjY2Vzc0tleSIsInBhcmFtcyIsInNpZ25lZE1hbmFnZW1lbnRBY2Nlc3NLZXkiLCJzaWduS2V5cyIsImFjY291bnRLZXlzIiwibWFuYWdlbWVudEFjY2Vzc0tleSIsIm5hY2xTaWduIiwidGV4dCIsInNlY3JldCIsIl9yZXNvbHZlU2lnbmVkTWFuYWdlbWVudEFjY2Vzc0tleSIsIm11dGF0aW9uIiwiYWNjb3VudCIsImtleXMiLCJyZWdpc3RlckFjY2Vzc0tleXMiLCJyZXZva2VBY2Nlc3NLZXlzIiwidHJhY2VJZCIsInNwYW5JZCIsIm9wZXJhdGlvbk5hbWUiLCJ0cmFjZXIiLCJzcGFuIiwiX3N0YXJ0SW50ZXJuYWxTcGFuIiwiY3R4IiwiZXh0cmFjdCIsIkZPUk1BVF9URVhUX01BUCIsIkRhdGUiLCJub3ciLCJzdGFydFNwYW4iLCJmIiwicGFyZW50U3BhbiIsImNoaWxkT2YiLCJzZXRUYWciLCJUYWdzIiwiU1BBTl9LSU5EIiwiZmluaXNoIiwibG9nIiwiZXZlbnQiLCJwYXlsb2FkIiwiY2xpZW50Iiwic2V0RGF0YSIsIlRPTkVycm9yU291cmNlIiwiQ0xJRU5UIiwiTk9ERSIsIlRPTkVycm9yQ29kZSIsIkNMSUVOVF9ET0VTX05PVF9DT05GSUdVUkVEIiwiU0VORF9OT0RFX1JFUVVFU1RfRkFJTEVEIiwiTUVTU0FHRV9BTFJFQURZX0VYUElSRUQiLCJSVU5fTE9DQUxfQUNDT1VOVF9ET0VTX05PVF9FWElTVFMiLCJXQUlUX0ZPUl9USU1FT1VUIiwiSU5URVJOQUxfRVJST1IiLCJRVUVSWV9GQUlMRUQiLCJNRVNTQUdFX0VYUElSRUQiLCJTRVJWRVJfRE9FU05UX1NVUFBPUlRfQUdHUkVHQVRJT05TIiwiSU5WQUxJRF9DT05TIiwiQUREUkVTU19SRVFVSVJFRF9GT1JfUlVOX0xPQ0FMIiwiTkVUV09SS19TSUxFTlQiLCJUUkFOU0FDVElPTl9MQUciLCJUUkFOU0FDVElPTl9XQUlUX1RJTUVPVVQiLCJDTE9DS19PVVRfT0ZfU1lOQyIsIkFDQ09VTlRfTUlTU0lORyIsIkFDQ09VTlRfQ09ERV9NSVNTSU5HIiwiQUNDT1VOVF9CQUxBTkNFX1RPT19MT1ciLCJBQ0NPVU5UX0ZST1pFTl9PUl9ERUxFVEVEIiwiQ09OVFJBQ1RfRVhFQ1VUSU9OX0ZBSUxFRCIsIlFVRVJZX0ZPUkNJQkxZX0FCT1JURUQiLCJUT05Db250cmFjdEV4aXRDb2RlIiwiUkVQTEFZX1BST1RFQ1RJT04iLCJOT19HQVMiLCJUT05DbGllbnRFcnJvciIsImNsaWVudEluZm8iLCJtZXNzYWdlIiwiY29kZSIsInNvdXJjZSIsImNvcmVfdmVyc2lvbiIsImNvbmZpZ19zZXJ2ZXIiLCJxdWVyeV91cmwiLCJlcnJvciIsImV4aXRDb2RlIiwiZXhpdF9jb2RlIiwiaXNDb250cmFjdEVycm9yIiwib3JpZ2luYWxfZXJyb3IiLCJpc01lc3NhZ2VFeHBpcmVkIiwicmVzcG9uc2VUZXh0IiwiZnVuY3Rpb25OYW1lIiwiYWRkcmVzcyIsImVycm9ycyIsIm1hcCIsIngiLCJ0b1N0cmluZyIsImpvaW4iLCJ0aW1lIiwidG9JU09TdHJpbmciLCJzZW5kaW5nX3RpbWUiLCJmb3JtYXRUaW1lIiwiZXhwaXJhdGlvbl90aW1lIiwiZXhwaXJlIiwiYmxvY2tfdGltZSIsImJhbGFuY2UiLCJ3b3JrY2hhaW4iLCJ3b3JrY2hhaW5OYW1lIiwiaXNDbGllbnRFcnJvciJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7O0FBS0E7O0FBY0E7O0FBQ0E7O0FBQ0E7O0FBRUE7O0FBT0E7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFxQkE7Ozs7O0lBS2FBLFM7OzsrQkFDU0MsYyxFQUFtQztBQUNqREQsTUFBQUEsU0FBUyxDQUFDQyxjQUFWLEdBQTJCQSxjQUEzQjtBQUNILEssQ0FHRDs7OztBQVNBLHVCQUFjO0FBQUE7O0FBQUE7O0FBQUE7O0FBQUE7O0FBQUE7O0FBQUE7O0FBQUE7O0FBQUE7O0FBQUE7O0FBQ1YsU0FBS0MsT0FBTCxHQUFlLElBQUlDLEdBQUosRUFBZjtBQUNBLFNBQUtDLE1BQUwsR0FBYyxLQUFLQyxTQUFMLENBQWVDLDJCQUFmLENBQWQ7QUFDQSxTQUFLQyxNQUFMLEdBQWMsS0FBS0YsU0FBTCxDQUFlRywyQkFBZixDQUFkO0FBQ0EsU0FBS0MsU0FBTCxHQUFpQixLQUFLSixTQUFMLENBQWVLLDhCQUFmLENBQWpCO0FBQ0EsU0FBS0MsUUFBTCxHQUFnQixLQUFLTixTQUFMLENBQWVPLDRCQUFmLENBQWhCO0FBQ0EsU0FBS0MsT0FBTCxHQUFlLEtBQUtGLFFBQXBCO0FBQ0EsU0FBS0csUUFBTCxHQUFnQixDQUFoQjtBQUNBLFNBQUtDLFdBQUwsR0FBbUIsSUFBbkI7QUFDSDtBQUVEOzs7Ozs7Ozs7O0FBWUE7Ozs7Ozs7Ozs7Ozs7dUJBS1UsS0FBS0MsYUFBTCxFOzs7QUFDQWQsZ0JBQUFBLE8sc0JBQTJCLEtBQUtBLE9BQUwsQ0FBYWUsTUFBYixFO3VEQUNaZixPOzs7Ozs7Ozs7OztBQUFWZ0IsZ0JBQUFBLE07O3VCQUNEQSxNQUFNLENBQUNDLEtBQVAsRTs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUlkOzs7Ozs7Ozs7Ozs7Ozs7O3VCQU1VLEtBQUtOLE9BQUwsQ0FBYU8sS0FBYixFOzs7QUFDQUMsZ0JBQUFBLE8sR0FBVXJCLFNBQVMsQ0FBQ3NCLFc7O3NCQUN0QixLQUFLUixRQUFMLEdBQWdCLENBQWhCLElBQXFCTyxPQUFPLEtBQUssSUFBakMsSUFBeUNBLE9BQU8sS0FBS0UsUzs7Ozs7QUFDL0NDLGdCQUFBQSxPLEdBQVUsS0FBS1YsUTtBQUNyQixxQkFBS0MsV0FBTCxHQUFtQixJQUFuQjtBQUNBLHFCQUFLRCxRQUFMLEdBQWdCLENBQWhCOzt1QkFDTSxJQUFJVyxPQUFKLENBQVksVUFBQUMsT0FBTztBQUFBLHlCQUFJTCxPQUFPLENBQUNNLGtCQUFSLENBQTJCSCxPQUEzQixFQUFvQ0UsT0FBcEMsQ0FBSjtBQUFBLGlCQUFuQixDOzs7Ozs7Ozs7Ozs7Ozs7UUFJZDs7Ozs7Ozs7Ozs7dUJBSTJCLEtBQUt0QixNQUFMLENBQVl3QixVQUFaLEU7Ozs7K0JBQ0wsS0FBS3hCLE1BQUwsQ0FBWXlCLGVBQVosRTsrQkFDSixLQUFLbEIsUUFBTCxDQUFjbUIsV0FBZCxFOztBQUZWQyxrQkFBQUEsVztBQUNBQyxrQkFBQUEsWTtBQUNBQyxrQkFBQUEsUTs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFLRUMsZ0JBQUFBLFEsR0FBV2xDLFNBQVMsQ0FBQ0MsYzs7c0JBQ3ZCaUMsUUFBUSxLQUFLLElBQWIsSUFBcUJBLFFBQVEsS0FBS1gsUzs7Ozs7a0RBQzNCLEk7Ozs7dUJBRW1CVyxRQUFRLENBQUNDLGFBQVQsRTs7O0FBQTlCbkMsZ0JBQUFBLFNBQVMsQ0FBQ3NCLFc7a0RBQ0h0QixTQUFTLENBQUNzQixXOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7K0JBSUR0QixTQUFTLENBQUNzQixXOzs7Ozs7Ozt1QkFBcUIsS0FBS2MsZ0JBQUwsRTs7Ozs7O0FBQXpDZixnQkFBQUEsTzs7b0JBQ0RBLE87Ozs7Ozs7O3FCQUdEQSxPQUFPLENBQUNnQixpQjs7Ozs7O3VCQUNjLElBQUlaLE9BQUosQ0FBWSxVQUFDQyxPQUFEO0FBQUEseUJBQWFMLE9BQU8sQ0FBQ2dCLGlCQUFSLENBQTBCWCxPQUExQixDQUFiO0FBQUEsaUJBQVosQzs7O0FBQXRCLHFCQUFLWixRO0FBQ0wscUJBQUtDLFdBQUwsR0FBbUI7QUFDZnVCLGtCQUFBQSxPQUFPLEVBQUUsaUJBQ0xDLE1BREssRUFFTEMsVUFGSyxFQUdMQyxRQUhLLEVBSUU7QUFDUCx3QkFBSXpDLFNBQVMsQ0FBQ3NCLFdBQWQsRUFBMkI7QUFDdkJ0QixzQkFBQUEsU0FBUyxDQUFDc0IsV0FBVixDQUFzQm9CLFdBQXRCLENBQ0ksS0FBSSxDQUFDNUIsUUFEVCxFQUVJeUIsTUFGSixFQUdJQyxVQUhKLEVBSUlDLFFBSko7QUFNSDtBQUNKO0FBZGMsaUJBQW5COzs7OztBQWlCQSxxQkFBSzFCLFdBQUwsR0FBbUJNLE9BQW5COzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7b0JBS0MsS0FBS04sVzs7Ozs7O3VCQUNBLEtBQUs0QixtQkFBTCxFOzs7a0RBRUgsS0FBSzVCLFc7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs4QkFHSDZCLFcsRUFBa0M7QUFDM0MsVUFBTUMsSUFBSSxHQUFHRCxXQUFXLENBQUNFLFVBQXpCO0FBQ0EsVUFBTUMsY0FBYyxHQUFHLEtBQUs3QyxPQUFMLENBQWE4QyxHQUFiLENBQWlCSCxJQUFqQixDQUF2Qjs7QUFDQSxVQUFJRSxjQUFKLEVBQW9CO0FBQ2hCLGVBQVFBLGNBQVI7QUFDSDs7QUFDRCxVQUFNN0IsTUFBTSxHQUFHLElBQUkwQixXQUFKLENBQWdCLElBQWhCLENBQWY7QUFDQSxXQUFLMUMsT0FBTCxDQUFhK0MsR0FBYixDQUFpQkosSUFBakIsRUFBdUIzQixNQUF2QjtBQUNBLGFBQVFBLE1BQVI7QUFDSDs7O3NDQUVrQztBQUMvQixhQUFPLEtBQUtQLFFBQUwsQ0FBY3VDLGVBQWQsRUFBUDtBQUNIOzs7Z0NBRTRCO0FBQ3pCLGFBQU8sS0FBS3ZDLFFBQUwsQ0FBY3dDLFNBQWQsRUFBUDtBQUNIOzs7Ozs7Ozs7Ozt1QkFHd0IsS0FBS3hDLFFBQUwsQ0FBY3lDLEtBQWQsQ0FBb0IsK0JBQXBCLEM7OztBQUFmQyxnQkFBQUEsTTtrREFDQ0EsTUFBTSxDQUFDQyxJQUFQLENBQVlDLHNCOzs7Ozs7Ozs7Ozs7Ozs7Ozs7OzhIQUtuQkMsTTs7Ozs7O3FCQUVJQSxNQUFNLENBQUNDLHlCOzs7OztrREFDQUQsTUFBTSxDQUFDQyx5Qjs7O0FBRVpDLGdCQUFBQSxRLEdBQVdGLE1BQU0sQ0FBQ0csVzs7cUJBQ3BCRCxROzs7Ozs7dUJBQ2tDLEtBQUtILHNCQUFMLEU7OztBQUE1QkssZ0JBQUFBLG1CO2tEQUNDLEtBQUtyRCxNQUFMLENBQVlzRCxRQUFaLENBQ0g7QUFBRUMsa0JBQUFBLElBQUksRUFBRUY7QUFBUixpQkFERyxZQUVBRixRQUFRLENBQUNLLE1BRlQsU0FFa0JMLFFBQVEsVUFGMUIsR0FHSCxLQUhHLEM7OztrREFNSixFOzs7Ozs7Ozs7Ozs7Ozs7Ozs7OytHQUlQRixNOzs7Ozs7O3VCQUV3QyxLQUFLUSxpQ0FBTCxDQUF1Q1IsTUFBdkMsQzs7O0FBQWxDQyxnQkFBQUEseUI7O3VCQUNlLEtBQUs5QyxRQUFMLENBQWNzRCxRQUFkLDhQQUdUO0FBQ0pDLGtCQUFBQSxPQUFPLEVBQUVWLE1BQU0sQ0FBQ1UsT0FEWjtBQUVKQyxrQkFBQUEsSUFBSSxFQUFFWCxNQUFNLENBQUNXLElBRlQ7QUFHSlYsa0JBQUFBLHlCQUF5QixFQUF6QkE7QUFISSxpQkFIUyxDOzs7QUFBZkosZ0JBQUFBLE07a0RBU0NBLE1BQU0sQ0FBQ0MsSUFBUCxDQUFZYyxrQjs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs4R0FJbkJaLE07Ozs7Ozs7dUJBRXdDLEtBQUtRLGlDQUFMLENBQXVDUixNQUF2QyxDOzs7QUFBbENDLGdCQUFBQSx5Qjs7dUJBQ2UsS0FBSzlDLFFBQUwsQ0FBY3NELFFBQWQsdVBBR1Q7QUFDSkMsa0JBQUFBLE9BQU8sRUFBRVYsTUFBTSxDQUFDVSxPQURaO0FBRUpDLGtCQUFBQSxJQUFJLEVBQUVYLE1BQU0sQ0FBQ1csSUFGVDtBQUdKVixrQkFBQUEseUJBQXlCLEVBQXpCQTtBQUhJLGlCQUhTLEM7OztBQUFmSixnQkFBQUEsTTttREFTQ0EsTUFBTSxDQUFDQyxJQUFQLENBQVllLGdCOzs7Ozs7Ozs7Ozs7Ozs7Ozs7a0NBR1RDLE8sRUFBaUJDLE0sRUFBZ0JDLGEsRUFBNkI7QUFDeEUsVUFBTUMsTUFBTSxHQUFHLEtBQUtyRSxNQUFMLENBQVlxRSxNQUEzQjtBQUNBLFVBQUlDLElBQVcsR0FBRyxJQUFsQjs7QUFDQSxVQUFJRCxNQUFNLENBQUNFLGtCQUFYLEVBQStCO0FBQzNCLFlBQUk7QUFDQSxjQUFNQyxHQUFHLEdBQUdILE1BQU0sQ0FBQ0ksT0FBUCxDQUFlQyw0QkFBZixFQUFnQztBQUN4Qyx1Q0FBb0JSLE9BQXBCLGNBQStCQyxNQUEvQjtBQUR3QyxXQUFoQyxDQUFaOztBQUdBLGNBQUlLLEdBQUosRUFBUztBQUNMRixZQUFBQSxJQUFJLEdBQUcsS0FBS3RFLE1BQUwsQ0FBWXFFLE1BQVosQ0FBbUJFLGtCQUFuQixDQUNIQyxHQURHLEVBRUhKLGFBRkcsRUFHSE8sSUFBSSxDQUFDQyxHQUFMLEVBSEcsRUFHUztBQUNaekQsWUFBQUEsU0FKRyxFQUlRO0FBQ1gsY0FMRyxFQUtDO0FBQ0osY0FORyxFQU1DO0FBQ0osaUJBUEcsRUFPSTtBQUNQLGlCQVJHLENBUUk7QUFSSixhQUFQO0FBVUg7QUFDSixTQWhCRCxDQWdCRSxnQkFBTSxDQUNKO0FBQ0E7QUFDSDtBQUNKOztBQUNELGFBQU9tRCxJQUFJLElBQUlELE1BQU0sQ0FBQ1EsU0FBUCxDQUFpQlQsYUFBakIsQ0FBZjtBQUNIOzs7O21HQUdHM0IsSSxFQUNBcUMsQyxFQUNBQyxVOzs7Ozs7QUFFTVQsZ0JBQUFBLEksR0FBTyxLQUFLdEUsTUFBTCxDQUFZcUUsTUFBWixDQUFtQlEsU0FBbkIsQ0FBNkJwQyxJQUE3QixFQUFtQztBQUFFdUMsa0JBQUFBLE9BQU8sRUFBRUQ7QUFBWCxpQkFBbkMsQzs7QUFFVFQsZ0JBQUFBLElBQUksQ0FBQ1csTUFBTCxDQUFZQyxrQkFBS0MsU0FBakIsRUFBNEIsUUFBNUI7O3VCQUNxQkwsQ0FBQyxDQUFDUixJQUFELEM7OztBQUFoQnJCLGdCQUFBQSxNOztBQUNOLG9CQUFJQSxNQUFNLEtBQUs5QixTQUFmLEVBQTBCO0FBQ3RCbUQsa0JBQUFBLElBQUksQ0FBQ1csTUFBTCxDQUFZLFFBQVosRUFBc0JoQyxNQUF0QjtBQUNIOztBQUNEcUIsZ0JBQUFBLElBQUksQ0FBQ2MsTUFBTDttREFDT25DLE07Ozs7O0FBRVBxQixnQkFBQUEsSUFBSSxDQUFDZSxHQUFMLENBQVM7QUFDTEMsa0JBQUFBLEtBQUssRUFBRSxRQURGO0FBRUxDLGtCQUFBQSxPQUFPO0FBRkYsaUJBQVQ7QUFJQWpCLGdCQUFBQSxJQUFJLENBQUNjLE1BQUw7Ozs7Ozs7Ozs7Ozs7Ozs7UUFLUjs7Ozs7b0dBeE5vQnBGLE07Ozs7OztBQUNWd0YsZ0JBQUFBLE0sR0FBUyxJQUFJNUYsU0FBSixFO0FBQ2Y0RixnQkFBQUEsTUFBTSxDQUFDeEYsTUFBUCxDQUFjeUYsT0FBZCxDQUFzQnpGLE1BQXRCOzt1QkFDTXdGLE1BQU0sQ0FBQ3pFLEtBQVAsRTs7O21EQUNDeUUsTTs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Z0JBbkNGNUYsUyxvQkF5UG1DLEk7O2dCQXpQbkNBLFMsaUJBMFBtQyxJOztBQU16QyxJQUFNOEYsY0FBYyxHQUFHO0FBQzFCQyxFQUFBQSxNQUFNLEVBQUUsUUFEa0I7QUFFMUJDLEVBQUFBLElBQUksRUFBRTtBQUZvQixDQUF2Qjs7QUFLQSxJQUFNQyxZQUFZLEdBQUc7QUFDeEJDLEVBQUFBLDBCQUEwQixFQUFFLElBREo7QUFFeEJDLEVBQUFBLHdCQUF3QixFQUFFLElBRkY7QUFHeEJDLEVBQUFBLHVCQUF1QixFQUFFLElBSEQ7QUFJeEJDLEVBQUFBLGlDQUFpQyxFQUFFLElBSlg7QUFLeEJDLEVBQUFBLGdCQUFnQixFQUFFLElBTE07QUFNeEJDLEVBQUFBLGNBQWMsRUFBRSxJQU5RO0FBT3hCQyxFQUFBQSxZQUFZLEVBQUUsSUFQVTtBQVF4QkMsRUFBQUEsZUFBZSxFQUFFLElBUk87QUFTeEJDLEVBQUFBLGtDQUFrQyxFQUFFLElBVFo7QUFVeEJDLEVBQUFBLFlBQVksRUFBRSxJQVZVO0FBV3hCQyxFQUFBQSw4QkFBOEIsRUFBRSxJQVhSO0FBWXhCQyxFQUFBQSxjQUFjLEVBQUUsSUFaUTtBQWF4QkMsRUFBQUEsZUFBZSxFQUFFLElBYk87QUFjeEJDLEVBQUFBLHdCQUF3QixFQUFFLElBZEY7QUFleEJDLEVBQUFBLGlCQUFpQixFQUFFLElBZks7QUFnQnhCQyxFQUFBQSxlQUFlLEVBQUUsSUFoQk87QUFpQnhCQyxFQUFBQSxvQkFBb0IsRUFBRSxJQWpCRTtBQWtCeEJDLEVBQUFBLHVCQUF1QixFQUFFLElBbEJEO0FBbUJ4QkMsRUFBQUEseUJBQXlCLEVBQUUsSUFuQkg7QUFxQnhCO0FBRUFDLEVBQUFBLHlCQUF5QixFQUFFLElBdkJIO0FBeUJ4QjtBQUVBQyxFQUFBQSxzQkFBc0IsRUFBRTtBQTNCQSxDQUFyQjs7QUE4QkEsSUFBTUMsbUJBQW1CLEdBQUc7QUFDL0JDLEVBQUFBLGlCQUFpQixFQUFFLEVBRFk7QUFFL0JmLEVBQUFBLGVBQWUsRUFBRSxFQUZjO0FBRy9CZ0IsRUFBQUEsTUFBTSxFQUFFO0FBSHVCLENBQTVCOzs7SUFNTUMsYztBQWFULDBCQUNJQyxVQURKLEVBRUlDLE9BRkosRUFHSUMsSUFISixFQUlJQyxNQUpKLEVBS0l4RSxJQUxKLEVBTUU7QUFBQTs7QUFBQTs7QUFBQTs7QUFBQTs7QUFBQTs7QUFDRSxTQUFLc0UsT0FBTCxHQUFlQSxPQUFmO0FBQ0EsU0FBS0MsSUFBTCxHQUFZQSxJQUFaO0FBQ0EsU0FBS0MsTUFBTCxHQUFjQSxNQUFNLElBQUloQyxjQUFjLENBQUNDLE1BQXZDO0FBQ0EsU0FBS3pDLElBQUwsbUNBQ09BLElBRFA7QUFFSXlFLE1BQUFBLFlBQVksRUFBRUosVUFBVSxDQUFDNUYsV0FGN0I7QUFHSWlHLE1BQUFBLGFBQWEsRUFBRUwsVUFBVSxDQUFDM0YsWUFIOUI7QUFJSWlHLE1BQUFBLFNBQVMsRUFBRU4sVUFBVSxDQUFDMUY7QUFKMUI7QUFNSDs7OztrQ0FFb0JpRyxLLEVBQVlMLEksRUFBdUI7QUFDcEQsYUFBUUssS0FBSyxDQUFDSixNQUFOLEtBQWlCSixjQUFjLENBQUNJLE1BQWYsQ0FBc0IvQixNQUF4QyxJQUNDbUMsS0FBSyxDQUFDTCxJQUFOLEtBQWVBLElBRHZCO0FBRUg7OztnQ0FFa0JLLEssRUFBWUwsSSxFQUF1QjtBQUNsRCxhQUFRSyxLQUFLLENBQUNKLE1BQU4sS0FBaUJKLGNBQWMsQ0FBQ0ksTUFBZixDQUFzQjlCLElBQXhDLElBQ0NrQyxLQUFLLENBQUNMLElBQU4sS0FBZUEsSUFEdkI7QUFFSDs7O29DQUVzQkssSyxFQUFZQyxRLEVBQTJCO0FBQzFELGFBQVFELEtBQUssQ0FBQ0osTUFBTixLQUFpQkosY0FBYyxDQUFDSSxNQUFmLENBQXNCOUIsSUFBeEMsSUFDQ2tDLEtBQUssQ0FBQ0wsSUFBTixLQUFlSCxjQUFjLENBQUNHLElBQWYsQ0FBb0JSLHlCQURwQyxJQUVDYSxLQUFLLENBQUM1RSxJQUFOLElBQWM0RSxLQUFLLENBQUM1RSxJQUFOLENBQVc4RSxTQUFYLEtBQXlCRCxRQUYvQztBQUdIOzs7NENBRThCRCxLLEVBQVlDLFEsRUFBMkI7QUFBQTs7QUFDbEUsYUFBT1QsY0FBYyxDQUFDVyxlQUFmLENBQStCSCxLQUEvQixFQUFzQ0MsUUFBdEMsS0FDQyxpQkFBQ0QsS0FBSyxDQUFDNUUsSUFBUCxnREFBQyxZQUFZZ0YsY0FBYixDQURSO0FBRUg7Ozt1REFFeUNKLEssRUFBWUMsUSxFQUEyQjtBQUM3RSxhQUFPVCxjQUFjLENBQUNXLGVBQWYsQ0FBK0JILEtBQS9CLEVBQXNDQyxRQUF0QyxLQUNDRCxLQUFLLENBQUM1RSxJQUFOLElBQWM0RSxLQUFLLENBQUM1RSxJQUFOLENBQVdnRixjQUF6QixJQUNHWixjQUFjLENBQUNhLGdCQUFmLENBQWdDTCxLQUFLLENBQUM1RSxJQUFOLENBQVdnRixjQUEzQyxDQUZYO0FBR0g7OztrQ0FHR1gsVSxFQUNBQyxPLEVBQ2M7QUFDZCxhQUFPLElBQUlGLGNBQUosQ0FDSEMsVUFERyw0QkFFZ0JDLE9BRmhCLEdBR0gzQixZQUFZLENBQUNNLGNBSFYsQ0FBUDtBQUtIOzs7Z0NBRWtCb0IsVSxFQUEyQztBQUMxRCxhQUFPLElBQUlELGNBQUosQ0FDSEMsVUFERyxFQUVILHVFQUZHLEVBR0gxQixZQUFZLENBQUNVLFlBSFYsQ0FBUDtBQUtIOzs7NENBRThCZ0IsVSxFQUEyQztBQUN0RSxhQUFPLElBQUlELGNBQUosQ0FDSEMsVUFERyxFQUVILDhCQUZHLEVBR0gxQixZQUFZLENBQUNDLDBCQUhWLENBQVA7QUFLSDs7OzBDQUdHeUIsVSxFQUNBYSxZLEVBQ2M7QUFDZCxhQUFPLElBQUlkLGNBQUosQ0FDSEMsVUFERyxzQ0FFMEJhLFlBRjFCLEdBR0h2QyxZQUFZLENBQUNFLHdCQUhWLENBQVA7QUFLSDs7O2lEQUdHd0IsVSxFQUNBYyxZLEVBQ0FDLE8sRUFDYztBQUNkLGFBQU8sSUFBSWhCLGNBQUosQ0FDSEMsVUFERyxhQUVDYyxZQUZELDBDQUU2Q0MsT0FGN0Msd0JBR0h6QyxZQUFZLENBQUNJLGlDQUhWLENBQVA7QUFLSDs7O21DQUVxQnNCLFUsRUFBMkI7QUFDN0MsYUFBTyxJQUFJRCxjQUFKLENBQ0hDLFVBREcsRUFFSCx3Q0FGRyxFQUdIMUIsWUFBWSxDQUFDSyxnQkFIVixDQUFQO0FBS0g7OztnQ0FHR3FCLFUsRUFDQWdCLE0sRUFDRjtBQUNFLGFBQU8sSUFBSWpCLGNBQUosQ0FDSEMsVUFERywwQkFFY2dCLE1BQU0sQ0FBQ0MsR0FBUCxDQUFXLFVBQUFDLENBQUM7QUFBQSxlQUFJQSxDQUFDLENBQUNqQixPQUFGLElBQWFpQixDQUFDLENBQUNDLFFBQUYsRUFBakI7QUFBQSxPQUFaLEVBQTJDQyxJQUEzQyxDQUFnRCxJQUFoRCxDQUZkLEdBR0g5QyxZQUFZLENBQUNPLFlBSFYsQ0FBUDtBQUtIOzs7K0JBRWlCd0MsSSxFQUF3QjtBQUN0QyxVQUFJQSxJQUFKLEVBQVU7QUFDTix5QkFBVSxJQUFJakUsSUFBSixDQUFTaUUsSUFBSSxHQUFHLElBQWhCLEVBQXNCQyxXQUF0QixFQUFWLGVBQWtERCxJQUFsRDtBQUNIOztBQUNELGFBQU8sSUFBUDtBQUNIOzs7bUNBR0dyQixVLEVBQ0FyRSxJLEVBT0Y7QUFDRSxhQUFPLElBQUlvRSxjQUFKLENBQ0hDLFVBREcsRUFFSCxpQkFGRyxFQUdIMUIsWUFBWSxDQUFDUSxlQUhWLEVBSUhYLGNBQWMsQ0FBQ0MsTUFKWixFQUtIO0FBQ0ltRCxRQUFBQSxZQUFZLEVBQUV4QixjQUFjLENBQUN5QixVQUFmLENBQTBCN0YsSUFBSSxDQUFDNEYsWUFBL0IsQ0FEbEI7QUFFSUUsUUFBQUEsZUFBZSxFQUFFMUIsY0FBYyxDQUFDeUIsVUFBZixDQUEwQjdGLElBQUksQ0FBQytGLE1BQS9CLENBRnJCO0FBR0lDLFFBQUFBLFVBQVUsRUFBRTVCLGNBQWMsQ0FBQ3lCLFVBQWYsQ0FBMEI3RixJQUFJLENBQUNnRyxVQUEvQjtBQUhoQixPQUxHLENBQVA7QUFXSDs7O29EQUVzQzNCLFUsRUFBMkI7QUFDOUQsYUFBTyxJQUFJRCxjQUFKLENBQ0hDLFVBREcsRUFFSCxzQ0FGRyxFQUdIMUIsWUFBWSxDQUFDUyxrQ0FIVixDQUFQO0FBS0g7OzsrQ0FFaUNpQixVLEVBQTJCO0FBQ3pELGFBQU8sSUFBSUQsY0FBSixDQUNIQyxVQURHLEVBRUgsa0ZBQ0UsNERBSEMsRUFJSEQsY0FBYyxDQUFDRyxJQUFmLENBQW9CakIsOEJBSmpCLEVBS0hjLGNBQWMsQ0FBQ0ksTUFBZixDQUFzQi9CLE1BTG5CLENBQVA7QUFPSDs7O2tDQUdHNEIsVSxFQUNBckUsSSxFQVFGO0FBQ0UsYUFBTyxJQUFJb0UsY0FBSixDQUNIQyxVQURHLEVBRUgsb0RBRkcsRUFHSDFCLFlBQVksQ0FBQ1ksY0FIVixFQUlIZixjQUFjLENBQUNDLE1BSlosRUFLSHpDLElBQUksb0NBQ0dBLElBREg7QUFFQTRGLFFBQUFBLFlBQVksRUFBRXhCLGNBQWMsQ0FBQ3lCLFVBQWYsQ0FBMEI3RixJQUFJLENBQUM0RixZQUEvQixDQUZkO0FBR0FFLFFBQUFBLGVBQWUsRUFBRTFCLGNBQWMsQ0FBQ3lCLFVBQWYsQ0FBMEI3RixJQUFJLENBQUMrRixNQUEvQjtBQUhqQixRQUxELENBQVA7QUFXSDs7OzJDQUdHMUIsVSxFQUNBckUsSSxFQU1GO0FBQ0UsYUFBTyxJQUFJb0UsY0FBSixDQUNIQyxVQURHLEVBRUgsdURBRkcsRUFHSDFCLFlBQVksQ0FBQ2Msd0JBSFYsRUFJSGpCLGNBQWMsQ0FBQ0MsTUFKWixFQUtIekMsSUFBSSxvQ0FDR0EsSUFESDtBQUVBNEYsUUFBQUEsWUFBWSxFQUFFeEIsY0FBYyxDQUFDeUIsVUFBZixDQUEwQjdGLElBQUksQ0FBQzRGLFlBQS9CO0FBRmQsUUFMRCxDQUFQO0FBVUg7OzttQ0FFcUJ2QixVLEVBQTJCO0FBQzdDLGFBQU8sSUFBSUQsY0FBSixDQUNIQyxVQURHLEVBRUgsMERBQ0UscUVBREYsR0FFRSwrQ0FKQyxFQUtIMUIsWUFBWSxDQUFDZSxpQkFMVixDQUFQO0FBT0g7OzttQ0FHR1csVSxFQUNBZSxPLEVBQ0FwRixJLEVBQ0Y7QUFDRSxhQUFPLElBQUlvRSxjQUFKLENBQ0hDLFVBREcsRUFFSCxnQ0FBeUJlLE9BQXpCLDBCQUNFLHNGQURGLEdBRUUsbUNBRkYsR0FHRSxrREFMQyxFQU1IekMsWUFBWSxDQUFDZ0IsZUFOVixFQU9IMUYsU0FQRyxFQVFIK0IsSUFSRyxDQUFQO0FBVUg7Ozt1Q0FHR3FFLFUsRUFDQWUsTyxFQUNBYSxPLEVBQ0Y7QUFDRSxhQUFPLElBQUk3QixjQUFKLENBQ0hDLFVBREcsRUFFSCxnQ0FBeUJlLE9BQXpCLGtEQUNFLHlFQURGLEdBRUUsb0VBRkYseUNBR2lDYSxPQUhqQyxXQUlFLGtEQU5DLEVBT0h0RCxZQUFZLENBQUNpQixvQkFQVixDQUFQO0FBU0g7Ozt5Q0FHR1MsVSxFQUNBZSxPLEVBQ0FhLE8sRUFDRjtBQUNFLGFBQU8sSUFBSTdCLGNBQUosQ0FDSEMsVUFERyxFQUVILGdDQUF5QmUsT0FBekIsb0NBQTBEYSxPQUExRCxXQUNFLHFFQURGLEdBRUUsMEJBRkYsR0FHRSxrREFMQyxFQU1IdEQsWUFBWSxDQUFDa0IsdUJBTlYsQ0FBUDtBQVFIOzs7NkJBR0dRLFUsRUFDQTZCLFMsRUFDRjtBQUNFLFVBQU1DLGFBQWEsR0FBR0QsU0FBUyxLQUFLLENBQUMsQ0FBZixHQUFtQixhQUFuQix1QkFBZ0RBLFNBQWhELENBQXRCO0FBQ0EsYUFBTyxJQUFJOUIsY0FBSixDQUNIQyxVQURHLDRCQUVlOEIsYUFGZixnQkFHSHhELFlBQVksQ0FBQ1ksY0FIVixDQUFQO0FBS0g7OztzQ0FHR2MsVSxFQUNBQyxPLEVBQ0Y7QUFDRSxhQUFPLElBQUlGLGNBQUosQ0FBbUJDLFVBQW5CLEVBQStCQyxPQUEvQixFQUF3QzNCLFlBQVksQ0FBQ1ksY0FBckQsQ0FBUDtBQUNIOzs7eUNBRTJCYyxVLEVBQTJCO0FBQ25ELGFBQU8sSUFBSUQsY0FBSixDQUNIQyxVQURHLEVBRUgsZ0RBRkcsRUFHSDFCLFlBQVksQ0FBQ3FCLHNCQUhWLENBQVA7QUFLSDs7O3FDQUV1QlksSyxFQUFxQjtBQUN6QyxhQUFPUixjQUFjLENBQUNnQyxhQUFmLENBQTZCeEIsS0FBN0IsRUFBb0NSLGNBQWMsQ0FBQ0csSUFBZixDQUFvQnBCLGVBQXhELENBQVA7QUFDSDs7O3FDQUV1QnlCLEssRUFBcUI7QUFDekMsYUFBT1IsY0FBYyxDQUFDZ0MsYUFBZixDQUE2QnhCLEtBQTdCLEVBQW9DUixjQUFjLENBQUNHLElBQWYsQ0FBb0J2QixnQkFBeEQsQ0FBUDtBQUNIOzs7Ozs7OztnQkF2VFFvQixjLFlBQ081QixjOztnQkFEUDRCLGMsVUFFS3pCLFkiLCJzb3VyY2VzQ29udGVudCI6WyIvKlxuICogQ29weXJpZ2h0IDIwMTgtMjAyMCBUT04gREVWIFNPTFVUSU9OUyBMVEQuXG4gKi9cbi8vIEBmbG93XG5cbmltcG9ydCB7XG4gICAgVGFncywgU3BhbiwgU3BhbkNvbnRleHQsIEZPUk1BVF9URVhUX01BUCxcbn0gZnJvbSAnb3BlbnRyYWNpbmcnO1xuaW1wb3J0IHR5cGUge1xuICAgIElUT05DbGllbnQsXG4gICAgVE9OQWNjZXNzS2V5c01hbmFnZW1lbnRQYXJhbXMsXG4gICAgVE9OQ29uZmlnRGF0YSxcbiAgICBUT05Db250cmFjdHMsXG4gICAgVE9OQ3J5cHRvLCBUT05NZXNzYWdlUHJvY2Vzc2luZ1N0YXRlLFxuICAgIFRPTlF1ZXJpZXMsXG4gICAgVE9OUmVnaXN0ZXJBY2Nlc3NLZXlzUGFyYW1zLFxuICAgIFRPTlJldm9rZUFjY2Vzc0tleXNQYXJhbXMsXG59IGZyb20gJy4uL3R5cGVzJztcblxuaW1wb3J0IFRPTkNvbmZpZ01vZHVsZSBmcm9tICcuL21vZHVsZXMvVE9OQ29uZmlnTW9kdWxlJztcbmltcG9ydCBUT05Db250cmFjdHNNb2R1bGUgZnJvbSAnLi9tb2R1bGVzL1RPTkNvbnRyYWN0c01vZHVsZSc7XG5pbXBvcnQgVE9OQ3J5cHRvTW9kdWxlIGZyb20gJy4vbW9kdWxlcy9UT05DcnlwdG9Nb2R1bGUnO1xuLyogZXNsaW50LWRpc2FibGUgY2xhc3MtbWV0aG9kcy11c2UtdGhpcywgbm8tdXNlLWJlZm9yZS1kZWZpbmUgKi9cbmltcG9ydCBUT05RdWVyaWVzTW9kdWxlIGZyb20gJy4vbW9kdWxlcy9UT05RdWVyaWVzTW9kdWxlJztcblxuaW1wb3J0IHR5cGUge1xuICAgIFRPTkNsaWVudENvcmVMaWJyYXJ5LFxuICAgIFRPTkNsaWVudENvcmVCcmlkZ2UsXG4gICAgVE9OTW9kdWxlQ29udGV4dCwgVE9OQ2xpZW50SW5mbyxcbn0gZnJvbSAnLi9UT05Nb2R1bGUnO1xuaW1wb3J0IHsgVE9OTW9kdWxlIH0gZnJvbSAnLi9UT05Nb2R1bGUnO1xuXG4vKipcbiAqIEphdmFTY3JpcHQgcGxhdGZvcm0gc3BlY2lmaWMgY29uZmlndXJhdGlvblxuICovXG50eXBlIFRPTkNsaWVudFBsYXRmb3JtID0ge1xuICAgIC8qKlxuICAgICAqIFBsYXRmb3JtIHNwZWNpZmljIGBmZXRjaGAgZnVuY3Rpb25cbiAgICAgKi9cbiAgICBmZXRjaDogYW55LFxuICAgIC8qKlxuICAgICAqIFBsYXRmb3JtIHNwZWNpZmljIGBXZWJTb2NrZXRgIGltcGxlbWVudGF0aW9uXG4gICAgICogVGhpcyBpbXBsZW1lbnRhdGlvbiBtdXN0IGNvbmZvcm1zIHRvIFczQyBXZWJTb2NrZXRcbiAgICAgKi9cbiAgICBXZWJTb2NrZXQ6IGFueSxcbiAgICAvKipcbiAgICAgKiBSZXF1ZXN0IGNyZWF0aW9uIG9mIHRoZSBjbGllbnQgY29yZVxuICAgICAqL1xuICAgIGNyZWF0ZUxpYnJhcnk6ICgpID0+IFByb21pc2U8VE9OQ2xpZW50Q29yZUxpYnJhcnk+LFxufTtcblxuLyoqXG4gKiBNYWluIG9iamVjdCBwcm92aWRlZCBmdW5jdGlvbmFsaXR5IG9mIHRoZSBUT04gQ2xpZW50IExpYnJhcnlcbiAqIEVhY2ggaW5zdGFuY2Ugb2YgVE9OQ2xpZW50IGhhcyBvd24gc2V0IG9mIFRPTiBDbGllbnQgbW9kdWxlc1xuICogYW5kIGhhcyBvd24gcHJlY29uZmlndXJlZCBjbGllbnQgY29udGV4dFxuICovXG5leHBvcnQgY2xhc3MgVE9OQ2xpZW50IGltcGxlbWVudHMgVE9OTW9kdWxlQ29udGV4dCwgSVRPTkNsaWVudCB7XG4gICAgc3RhdGljIHNldExpYnJhcnkoY2xpZW50UGxhdGZvcm06IFRPTkNsaWVudFBsYXRmb3JtKSB7XG4gICAgICAgIFRPTkNsaWVudC5jbGllbnRQbGF0Zm9ybSA9IGNsaWVudFBsYXRmb3JtO1xuICAgIH1cblxuXG4gICAgLy8gUHVibGljXG4gICAgY29uZmlnOiBUT05Db25maWdNb2R1bGU7XG4gICAgY3J5cHRvOiBUT05DcnlwdG87XG4gICAgY29udHJhY3RzOiBUT05Db250cmFjdHM7XG4gICAgcXVlcmllczogVE9OUXVlcmllcztcbiAgICBfcXVlcmllczogVE9OUXVlcmllc01vZHVsZTtcbiAgICBfY29udGV4dDogbnVtYmVyO1xuICAgIF9jb3JlQnJpZGdlOiA/VE9OQ2xpZW50Q29yZUJyaWRnZTtcblxuICAgIGNvbnN0cnVjdG9yKCkge1xuICAgICAgICB0aGlzLm1vZHVsZXMgPSBuZXcgTWFwKCk7XG4gICAgICAgIHRoaXMuY29uZmlnID0gdGhpcy5nZXRNb2R1bGUoVE9OQ29uZmlnTW9kdWxlKTtcbiAgICAgICAgdGhpcy5jcnlwdG8gPSB0aGlzLmdldE1vZHVsZShUT05DcnlwdG9Nb2R1bGUpO1xuICAgICAgICB0aGlzLmNvbnRyYWN0cyA9IHRoaXMuZ2V0TW9kdWxlKFRPTkNvbnRyYWN0c01vZHVsZSk7XG4gICAgICAgIHRoaXMuX3F1ZXJpZXMgPSB0aGlzLmdldE1vZHVsZShUT05RdWVyaWVzTW9kdWxlKTtcbiAgICAgICAgdGhpcy5xdWVyaWVzID0gdGhpcy5fcXVlcmllcztcbiAgICAgICAgdGhpcy5fY29udGV4dCA9IDA7XG4gICAgICAgIHRoaXMuX2NvcmVCcmlkZ2UgPSBudWxsO1xuICAgIH1cblxuICAgIC8qKlxuICAgICAqIENvbnZlbmllbnQgd2F5IHRvIGNyZWF0ZSBjb25maWd1cmVkIGluc3RhbmNlIG9mIHRoZSBUT04gQ2xpZW50XG4gICAgICogQHBhcmFtIHtUT05Db25maWdEYXRhfSBjb25maWdcbiAgICAgKiBAcmV0dXJuIHtQcm9taXNlPFRPTkNsaWVudD59XG4gICAgICovXG4gICAgc3RhdGljIGFzeW5jIGNyZWF0ZShjb25maWc6IFRPTkNvbmZpZ0RhdGEpOiBQcm9taXNlPFRPTkNsaWVudD4ge1xuICAgICAgICBjb25zdCBjbGllbnQgPSBuZXcgVE9OQ2xpZW50KCk7XG4gICAgICAgIGNsaWVudC5jb25maWcuc2V0RGF0YShjb25maWcpO1xuICAgICAgICBhd2FpdCBjbGllbnQuc2V0dXAoKTtcbiAgICAgICAgcmV0dXJuIGNsaWVudDtcbiAgICB9XG5cbiAgICAvKipcbiAgICAgKiBTZXQgdXAgdGhlIGNsaWVudCBpbnN0YW5jZVxuICAgICAqIEByZXR1cm4ge1Byb21pc2U8dm9pZD59XG4gICAgICovXG4gICAgYXN5bmMgc2V0dXAoKTogUHJvbWlzZTx2b2lkPiB7XG4gICAgICAgIGF3YWl0IHRoaXMuZ2V0Q29yZUJyaWRnZSgpO1xuICAgICAgICBjb25zdCBtb2R1bGVzOiBUT05Nb2R1bGVbXSA9IFsuLi50aGlzLm1vZHVsZXMudmFsdWVzKCldO1xuICAgICAgICBmb3IgKGNvbnN0IG1vZHVsZSBvZiBtb2R1bGVzKSB7XG4gICAgICAgICAgICBhd2FpdCBtb2R1bGUuc2V0dXAoKTtcbiAgICAgICAgfVxuICAgIH1cblxuICAgIC8qKlxuICAgICAqIFRlYXIgZG93biB0aGlzIGNsaWVudCBpbnN0YW5jZS5cbiAgICAgKiBOb3RlIHRoYXQgYWZ0ZXIgeW91IGhhdmUgY2FsbGVkIHRoaXMgbWV0aG9kIGFsbCBmdXR1cmUgdXNlIG9mIHRoaXMgaW5zdGFuY2Ugd2lsbCBmYWlsXG4gICAgICogQHJldHVybiB7UHJvbWlzZTx2b2lkPn1cbiAgICAgKi9cbiAgICBhc3luYyBjbG9zZSgpOiBQcm9taXNlPHZvaWQ+IHtcbiAgICAgICAgYXdhaXQgdGhpcy5xdWVyaWVzLmNsb3NlKCk7XG4gICAgICAgIGNvbnN0IGxpYnJhcnkgPSBUT05DbGllbnQuY29yZUxpYnJhcnk7XG4gICAgICAgIGlmICh0aGlzLl9jb250ZXh0ID4gMCAmJiBsaWJyYXJ5ICE9PSBudWxsICYmIGxpYnJhcnkgIT09IHVuZGVmaW5lZCkge1xuICAgICAgICAgICAgY29uc3QgY29udGV4dCA9IHRoaXMuX2NvbnRleHQ7XG4gICAgICAgICAgICB0aGlzLl9jb3JlQnJpZGdlID0gbnVsbDtcbiAgICAgICAgICAgIHRoaXMuX2NvbnRleHQgPSAwO1xuICAgICAgICAgICAgYXdhaXQgbmV3IFByb21pc2UocmVzb2x2ZSA9PiBsaWJyYXJ5LmNvcmVEZXN0cm95Q29udGV4dChjb250ZXh0LCByZXNvbHZlKSk7XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICAvLyBUT05Nb2R1bGVDb250ZXh0XG5cbiAgICBhc3luYyBnZXRDbGllbnRJbmZvKCk6IFByb21pc2U8VE9OQ2xpZW50SW5mbz4ge1xuICAgICAgICByZXR1cm4ge1xuICAgICAgICAgICAgY29yZVZlcnNpb246IGF3YWl0IHRoaXMuY29uZmlnLmdldFZlcnNpb24oKSxcbiAgICAgICAgICAgIGNvbmZpZ1NlcnZlcjogdGhpcy5jb25maWcuZ2V0Q29uZmlnU2VydmVyKCksXG4gICAgICAgICAgICBxdWVyeVVybDogdGhpcy5fcXVlcmllcy5nZXRRdWVyeVVybCgpLFxuICAgICAgICB9O1xuICAgIH1cblxuICAgIGFzeW5jIHRyeUNyZWF0ZUxpYnJhcnkoKSB7XG4gICAgICAgIGNvbnN0IHBsYXRmb3JtID0gVE9OQ2xpZW50LmNsaWVudFBsYXRmb3JtO1xuICAgICAgICBpZiAocGxhdGZvcm0gPT09IG51bGwgfHwgcGxhdGZvcm0gPT09IHVuZGVmaW5lZCkge1xuICAgICAgICAgICAgcmV0dXJuIG51bGw7XG4gICAgICAgIH1cbiAgICAgICAgVE9OQ2xpZW50LmNvcmVMaWJyYXJ5ID0gYXdhaXQgcGxhdGZvcm0uY3JlYXRlTGlicmFyeSgpO1xuICAgICAgICByZXR1cm4gVE9OQ2xpZW50LmNvcmVMaWJyYXJ5O1xuICAgIH1cblxuICAgIGFzeW5jIHRyeUNyZWF0ZUNvcmVCcmlkZ2UoKSB7XG4gICAgICAgIGNvbnN0IGxpYnJhcnkgPSBUT05DbGllbnQuY29yZUxpYnJhcnkgfHwgYXdhaXQgdGhpcy50cnlDcmVhdGVMaWJyYXJ5KCk7XG4gICAgICAgIGlmICghbGlicmFyeSkge1xuICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICB9XG4gICAgICAgIGlmIChsaWJyYXJ5LmNvcmVDcmVhdGVDb250ZXh0KSB7XG4gICAgICAgICAgICB0aGlzLl9jb250ZXh0ID0gYXdhaXQgbmV3IFByb21pc2UoKHJlc29sdmUpID0+IGxpYnJhcnkuY29yZUNyZWF0ZUNvbnRleHQocmVzb2x2ZSkpO1xuICAgICAgICAgICAgdGhpcy5fY29yZUJyaWRnZSA9IHtcbiAgICAgICAgICAgICAgICByZXF1ZXN0OiAoXG4gICAgICAgICAgICAgICAgICAgIG1ldGhvZDogc3RyaW5nLFxuICAgICAgICAgICAgICAgICAgICBwYXJhbXNKc29uOiBzdHJpbmcsXG4gICAgICAgICAgICAgICAgICAgIG9uUmVzdWx0OiAocmVzdWx0SnNvbjogc3RyaW5nLCBlcnJvckpzb246IHN0cmluZykgPT4gdm9pZCxcbiAgICAgICAgICAgICAgICApOiB2b2lkID0+IHtcbiAgICAgICAgICAgICAgICAgICAgaWYgKFRPTkNsaWVudC5jb3JlTGlicmFyeSkge1xuICAgICAgICAgICAgICAgICAgICAgICAgVE9OQ2xpZW50LmNvcmVMaWJyYXJ5LmNvcmVSZXF1ZXN0KFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMuX2NvbnRleHQsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgbWV0aG9kLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHBhcmFtc0pzb24sXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgb25SZXN1bHQsXG4gICAgICAgICAgICAgICAgICAgICAgICApO1xuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgIH07XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICB0aGlzLl9jb3JlQnJpZGdlID0gbGlicmFyeTtcbiAgICAgICAgfVxuICAgIH1cblxuICAgIGFzeW5jIGdldENvcmVCcmlkZ2UoKTogUHJvbWlzZTw/VE9OQ2xpZW50Q29yZUJyaWRnZT4ge1xuICAgICAgICBpZiAoIXRoaXMuX2NvcmVCcmlkZ2UpIHtcbiAgICAgICAgICAgIGF3YWl0IHRoaXMudHJ5Q3JlYXRlQ29yZUJyaWRnZSgpO1xuICAgICAgICB9XG4gICAgICAgIHJldHVybiB0aGlzLl9jb3JlQnJpZGdlO1xuICAgIH1cblxuICAgIGdldE1vZHVsZTxUPihNb2R1bGVDbGFzczogdHlwZW9mIFRPTk1vZHVsZSk6IFQge1xuICAgICAgICBjb25zdCBuYW1lID0gTW9kdWxlQ2xhc3MubW9kdWxlTmFtZTtcbiAgICAgICAgY29uc3QgZXhpc3RpbmdNb2R1bGUgPSB0aGlzLm1vZHVsZXMuZ2V0KG5hbWUpO1xuICAgICAgICBpZiAoZXhpc3RpbmdNb2R1bGUpIHtcbiAgICAgICAgICAgIHJldHVybiAoZXhpc3RpbmdNb2R1bGU6IGFueSk7XG4gICAgICAgIH1cbiAgICAgICAgY29uc3QgbW9kdWxlID0gbmV3IE1vZHVsZUNsYXNzKHRoaXMpO1xuICAgICAgICB0aGlzLm1vZHVsZXMuc2V0KG5hbWUsIG1vZHVsZSk7XG4gICAgICAgIHJldHVybiAobW9kdWxlOiBhbnkpO1xuICAgIH1cblxuICAgIHNlcnZlclRpbWVEZWx0YSgpOiBQcm9taXNlPG51bWJlcj4ge1xuICAgICAgICByZXR1cm4gdGhpcy5fcXVlcmllcy5zZXJ2ZXJUaW1lRGVsdGEoKTtcbiAgICB9XG5cbiAgICBzZXJ2ZXJOb3coKTogUHJvbWlzZTxudW1iZXI+IHtcbiAgICAgICAgcmV0dXJuIHRoaXMuX3F1ZXJpZXMuc2VydmVyTm93KCk7XG4gICAgfVxuXG4gICAgYXN5bmMgZ2V0TWFuYWdlbWVudEFjY2Vzc0tleSgpOiBQcm9taXNlPHN0cmluZz4ge1xuICAgICAgICBjb25zdCByZXN1bHQgPSBhd2FpdCB0aGlzLl9xdWVyaWVzLnF1ZXJ5KCdxdWVyeXtnZXRNYW5hZ2VtZW50QWNjZXNzS2V5fScpO1xuICAgICAgICByZXR1cm4gcmVzdWx0LmRhdGEuZ2V0TWFuYWdlbWVudEFjY2Vzc0tleTtcbiAgICB9XG5cblxuICAgIGFzeW5jIF9yZXNvbHZlU2lnbmVkTWFuYWdlbWVudEFjY2Vzc0tleShcbiAgICAgICAgcGFyYW1zOiBUT05BY2Nlc3NLZXlzTWFuYWdlbWVudFBhcmFtcyxcbiAgICApOiBQcm9taXNlPHN0cmluZz4ge1xuICAgICAgICBpZiAocGFyYW1zLnNpZ25lZE1hbmFnZW1lbnRBY2Nlc3NLZXkpIHtcbiAgICAgICAgICAgIHJldHVybiBwYXJhbXMuc2lnbmVkTWFuYWdlbWVudEFjY2Vzc0tleTtcbiAgICAgICAgfVxuICAgICAgICBjb25zdCBzaWduS2V5cyA9IHBhcmFtcy5hY2NvdW50S2V5cztcbiAgICAgICAgaWYgKHNpZ25LZXlzKSB7XG4gICAgICAgICAgICBjb25zdCBtYW5hZ2VtZW50QWNjZXNzS2V5ID0gYXdhaXQgdGhpcy5nZXRNYW5hZ2VtZW50QWNjZXNzS2V5KCk7XG4gICAgICAgICAgICByZXR1cm4gdGhpcy5jcnlwdG8ubmFjbFNpZ24oXG4gICAgICAgICAgICAgICAgeyB0ZXh0OiBtYW5hZ2VtZW50QWNjZXNzS2V5IH0sXG4gICAgICAgICAgICAgICAgYCR7c2lnbktleXMuc2VjcmV0fSR7c2lnbktleXMucHVibGljfWAsXG4gICAgICAgICAgICAgICAgJ0hleCcsXG4gICAgICAgICAgICApO1xuICAgICAgICB9XG4gICAgICAgIHJldHVybiAnJztcbiAgICB9XG5cbiAgICBhc3luYyByZWdpc3RlckFjY2Vzc0tleXMoXG4gICAgICAgIHBhcmFtczogVE9OUmVnaXN0ZXJBY2Nlc3NLZXlzUGFyYW1zLFxuICAgICk6IFByb21pc2U8bnVtYmVyPiB7XG4gICAgICAgIGNvbnN0IHNpZ25lZE1hbmFnZW1lbnRBY2Nlc3NLZXkgPSBhd2FpdCB0aGlzLl9yZXNvbHZlU2lnbmVkTWFuYWdlbWVudEFjY2Vzc0tleShwYXJhbXMpO1xuICAgICAgICBjb25zdCByZXN1bHQgPSBhd2FpdCB0aGlzLl9xdWVyaWVzLm11dGF0aW9uKFxuICAgICAgICAgICAgYG11dGF0aW9uIHJlZ2lzdGVyQWNjZXNzS2V5cygkYWNjb3VudDogU3RyaW5nLCAka2V5czogW0FjY2Vzc0tleV0sICRzaWduZWRNYW5hZ2VtZW50QWNjZXNzS2V5OiBTdHJpbmcpIHtcbiAgICAgICAgICAgICAgICAgICAgcmVnaXN0ZXJBY2Nlc3NLZXlzKGFjY291bnQ6ICRhY2NvdW50LCBrZXlzOiAka2V5cywgc2lnbmVkTWFuYWdlbWVudEFjY2Vzc0tleTogJHNpZ25lZE1hbmFnZW1lbnRBY2Nlc3NLZXkpXG4gICAgICAgICAgICAgICAgfWAsIHtcbiAgICAgICAgICAgICAgICBhY2NvdW50OiBwYXJhbXMuYWNjb3VudCxcbiAgICAgICAgICAgICAgICBrZXlzOiBwYXJhbXMua2V5cyxcbiAgICAgICAgICAgICAgICBzaWduZWRNYW5hZ2VtZW50QWNjZXNzS2V5LFxuICAgICAgICAgICAgfSxcbiAgICAgICAgKTtcbiAgICAgICAgcmV0dXJuIHJlc3VsdC5kYXRhLnJlZ2lzdGVyQWNjZXNzS2V5cztcbiAgICB9XG5cbiAgICBhc3luYyByZXZva2VBY2Nlc3NLZXlzKFxuICAgICAgICBwYXJhbXM6IFRPTlJldm9rZUFjY2Vzc0tleXNQYXJhbXMsXG4gICAgKTogUHJvbWlzZTxudW1iZXI+IHtcbiAgICAgICAgY29uc3Qgc2lnbmVkTWFuYWdlbWVudEFjY2Vzc0tleSA9IGF3YWl0IHRoaXMuX3Jlc29sdmVTaWduZWRNYW5hZ2VtZW50QWNjZXNzS2V5KHBhcmFtcyk7XG4gICAgICAgIGNvbnN0IHJlc3VsdCA9IGF3YWl0IHRoaXMuX3F1ZXJpZXMubXV0YXRpb24oXG4gICAgICAgICAgICBgbXV0YXRpb24gcmV2b2tlQWNjZXNzS2V5cygkYWNjb3VudDogU3RyaW5nLCAka2V5czogW1N0cmluZ10sICRzaWduZWRNYW5hZ2VtZW50QWNjZXNzS2V5OiBTdHJpbmcpIHtcbiAgICAgICAgICAgICAgICAgICAgcmV2b2tlQWNjZXNzS2V5cyhhY2NvdW50OiAkYWNjb3VudCwga2V5czogJGtleXMsIHNpZ25lZE1hbmFnZW1lbnRBY2Nlc3NLZXk6ICRzaWduZWRNYW5hZ2VtZW50QWNjZXNzS2V5KVxuICAgICAgICAgICAgICAgIH1gLCB7XG4gICAgICAgICAgICAgICAgYWNjb3VudDogcGFyYW1zLmFjY291bnQsXG4gICAgICAgICAgICAgICAga2V5czogcGFyYW1zLmtleXMsXG4gICAgICAgICAgICAgICAgc2lnbmVkTWFuYWdlbWVudEFjY2Vzc0tleSxcbiAgICAgICAgICAgIH0sXG4gICAgICAgICk7XG4gICAgICAgIHJldHVybiByZXN1bHQuZGF0YS5yZXZva2VBY2Nlc3NLZXlzO1xuICAgIH1cblxuICAgIHN0YXJ0Um9vdFNwYW4odHJhY2VJZDogc3RyaW5nLCBzcGFuSWQ6IHN0cmluZywgb3BlcmF0aW9uTmFtZTogc3RyaW5nKTogU3BhbiB7XG4gICAgICAgIGNvbnN0IHRyYWNlciA9IHRoaXMuY29uZmlnLnRyYWNlcjtcbiAgICAgICAgbGV0IHNwYW46ID9TcGFuID0gbnVsbDtcbiAgICAgICAgaWYgKHRyYWNlci5fc3RhcnRJbnRlcm5hbFNwYW4pIHtcbiAgICAgICAgICAgIHRyeSB7XG4gICAgICAgICAgICAgICAgY29uc3QgY3R4ID0gdHJhY2VyLmV4dHJhY3QoRk9STUFUX1RFWFRfTUFQLCB7XG4gICAgICAgICAgICAgICAgICAgICd1YmVyLXRyYWNlLWlkJzogYCR7dHJhY2VJZH06JHtzcGFuSWR9OjA6MWAsXG4gICAgICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICAgICAgaWYgKGN0eCkge1xuICAgICAgICAgICAgICAgICAgICBzcGFuID0gdGhpcy5jb25maWcudHJhY2VyLl9zdGFydEludGVybmFsU3BhbihcbiAgICAgICAgICAgICAgICAgICAgICAgIGN0eCxcbiAgICAgICAgICAgICAgICAgICAgICAgIG9wZXJhdGlvbk5hbWUsXG4gICAgICAgICAgICAgICAgICAgICAgICBEYXRlLm5vdygpLCAvLyBzdGFydFRpbWVcbiAgICAgICAgICAgICAgICAgICAgICAgIHVuZGVmaW5lZCwgLy8gdXNlclRhZ3NcbiAgICAgICAgICAgICAgICAgICAgICAgIHt9LCAvLyBpbnRlcm5hbFRhZ3NcbiAgICAgICAgICAgICAgICAgICAgICAgIFtdLCAvLyByZWZlcmVuY2VzXG4gICAgICAgICAgICAgICAgICAgICAgICBmYWxzZSwgLy8gaGFzVmFsaWRQYXJlbnRcbiAgICAgICAgICAgICAgICAgICAgICAgIGZhbHNlLCAvLyBpc1JwY1NlcnZlclxuICAgICAgICAgICAgICAgICAgICApO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH0gY2F0Y2gge1xuICAgICAgICAgICAgICAgIC8vIHRyYWNlciBjYW4ndCBjcmVhdGUgbWVzc2FnZSBzcGFuIHVzaW5nIHByaXZhdGUgbWV0aG9kLFxuICAgICAgICAgICAgICAgIC8vIHNvIHdlIGFyZSBmYWxsYmFjayB0byBjcmVhdGUgc3BhbiB1c2luZyByZWd1bGFyIG1ldGhvZFxuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICAgIHJldHVybiBzcGFuIHx8IHRyYWNlci5zdGFydFNwYW4ob3BlcmF0aW9uTmFtZSk7XG4gICAgfVxuXG4gICAgYXN5bmMgdHJhY2U8VD4oXG4gICAgICAgIG5hbWU6IHN0cmluZyxcbiAgICAgICAgZjogKHNwYW46IFNwYW4pID0+IFByb21pc2U8VD4sXG4gICAgICAgIHBhcmVudFNwYW4/OiAoU3BhbiB8IFNwYW5Db250ZXh0KSxcbiAgICApOiBQcm9taXNlPFQ+IHtcbiAgICAgICAgY29uc3Qgc3BhbiA9IHRoaXMuY29uZmlnLnRyYWNlci5zdGFydFNwYW4obmFtZSwgeyBjaGlsZE9mOiBwYXJlbnRTcGFuIH0pO1xuICAgICAgICB0cnkge1xuICAgICAgICAgICAgc3Bhbi5zZXRUYWcoVGFncy5TUEFOX0tJTkQsICdjbGllbnQnKTtcbiAgICAgICAgICAgIGNvbnN0IHJlc3VsdCA9IGF3YWl0IGYoc3Bhbik7XG4gICAgICAgICAgICBpZiAocmVzdWx0ICE9PSB1bmRlZmluZWQpIHtcbiAgICAgICAgICAgICAgICBzcGFuLnNldFRhZygncmVzdWx0JywgcmVzdWx0KTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIHNwYW4uZmluaXNoKCk7XG4gICAgICAgICAgICByZXR1cm4gcmVzdWx0O1xuICAgICAgICB9IGNhdGNoIChlcnJvcikge1xuICAgICAgICAgICAgc3Bhbi5sb2coe1xuICAgICAgICAgICAgICAgIGV2ZW50OiAnZmFpbGVkJyxcbiAgICAgICAgICAgICAgICBwYXlsb2FkOiBlcnJvcixcbiAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgc3Bhbi5maW5pc2goKTtcbiAgICAgICAgICAgIHRocm93IGVycm9yO1xuICAgICAgICB9XG4gICAgfVxuXG4gICAgLy8gSW50ZXJuYWxzXG5cbiAgICBzdGF0aWMgY2xpZW50UGxhdGZvcm06ID9UT05DbGllbnRQbGF0Zm9ybSA9IG51bGw7XG4gICAgc3RhdGljIGNvcmVMaWJyYXJ5OiA/VE9OQ2xpZW50Q29yZUxpYnJhcnkgPSBudWxsO1xuXG4gICAgbW9kdWxlczogTWFwPHN0cmluZywgVE9OTW9kdWxlPjtcbn1cblxuXG5leHBvcnQgY29uc3QgVE9ORXJyb3JTb3VyY2UgPSB7XG4gICAgQ0xJRU5UOiAnY2xpZW50JyxcbiAgICBOT0RFOiAnbm9kZScsXG59O1xuXG5leHBvcnQgY29uc3QgVE9ORXJyb3JDb2RlID0ge1xuICAgIENMSUVOVF9ET0VTX05PVF9DT05GSUdVUkVEOiAxMDAwLFxuICAgIFNFTkRfTk9ERV9SRVFVRVNUX0ZBSUxFRDogMTAwMSxcbiAgICBNRVNTQUdFX0FMUkVBRFlfRVhQSVJFRDogMTAwMSxcbiAgICBSVU5fTE9DQUxfQUNDT1VOVF9ET0VTX05PVF9FWElTVFM6IDEwMDIsXG4gICAgV0FJVF9GT1JfVElNRU9VVDogMTAwMyxcbiAgICBJTlRFUk5BTF9FUlJPUjogMTAwNCxcbiAgICBRVUVSWV9GQUlMRUQ6IDEwMDUsXG4gICAgTUVTU0FHRV9FWFBJUkVEOiAxMDA2LFxuICAgIFNFUlZFUl9ET0VTTlRfU1VQUE9SVF9BR0dSRUdBVElPTlM6IDEwMDcsXG4gICAgSU5WQUxJRF9DT05TOiAxMDA4LFxuICAgIEFERFJFU1NfUkVRVUlSRURfRk9SX1JVTl9MT0NBTDogMTAwOSxcbiAgICBORVRXT1JLX1NJTEVOVDogMTAxMCxcbiAgICBUUkFOU0FDVElPTl9MQUc6IDEwMTEsXG4gICAgVFJBTlNBQ1RJT05fV0FJVF9USU1FT1VUOiAxMDEyLFxuICAgIENMT0NLX09VVF9PRl9TWU5DOiAxMDEzLFxuICAgIEFDQ09VTlRfTUlTU0lORzogMTAxNCxcbiAgICBBQ0NPVU5UX0NPREVfTUlTU0lORzogMTAxNSxcbiAgICBBQ0NPVU5UX0JBTEFOQ0VfVE9PX0xPVzogMTAxNixcbiAgICBBQ0NPVU5UX0ZST1pFTl9PUl9ERUxFVEVEOiAxMDE3LFxuXG4gICAgLy8gQ29udHJhY3RzXG5cbiAgICBDT05UUkFDVF9FWEVDVVRJT05fRkFJTEVEOiAzMDI1LFxuXG4gICAgLy8gUXVlcmllc1xuXG4gICAgUVVFUllfRk9SQ0lCTFlfQUJPUlRFRDogNDAwNSxcbn07XG5cbmV4cG9ydCBjb25zdCBUT05Db250cmFjdEV4aXRDb2RlID0ge1xuICAgIFJFUExBWV9QUk9URUNUSU9OOiA1MixcbiAgICBNRVNTQUdFX0VYUElSRUQ6IDU3LFxuICAgIE5PX0dBUzogMTMsXG59O1xuXG5leHBvcnQgY2xhc3MgVE9OQ2xpZW50RXJyb3Ige1xuICAgIHN0YXRpYyBzb3VyY2UgPSBUT05FcnJvclNvdXJjZTtcbiAgICBzdGF0aWMgY29kZSA9IFRPTkVycm9yQ29kZTtcblxuICAgIG1lc3NhZ2U6IHN0cmluZztcbiAgICBzb3VyY2U6IHN0cmluZztcbiAgICBjb2RlOiBudW1iZXI7XG4gICAgZGF0YToge1xuICAgICAgICBjb3JlX3ZlcnNpb246IHN0cmluZztcbiAgICAgICAgY29uZmlnX3NlcnZlcjogc3RyaW5nO1xuICAgICAgICBxdWVyeV91cmw6IHN0cmluZztcbiAgICB9O1xuXG4gICAgY29uc3RydWN0b3IoXG4gICAgICAgIGNsaWVudEluZm86IFRPTkNsaWVudEluZm8sXG4gICAgICAgIG1lc3NhZ2U6IHN0cmluZyxcbiAgICAgICAgY29kZTogbnVtYmVyLFxuICAgICAgICBzb3VyY2U/OiBzdHJpbmcsXG4gICAgICAgIGRhdGE/OiBhbnksXG4gICAgKSB7XG4gICAgICAgIHRoaXMubWVzc2FnZSA9IG1lc3NhZ2U7XG4gICAgICAgIHRoaXMuY29kZSA9IGNvZGU7XG4gICAgICAgIHRoaXMuc291cmNlID0gc291cmNlIHx8IFRPTkVycm9yU291cmNlLkNMSUVOVDtcbiAgICAgICAgdGhpcy5kYXRhID0ge1xuICAgICAgICAgICAgLi4uZGF0YSxcbiAgICAgICAgICAgIGNvcmVfdmVyc2lvbjogY2xpZW50SW5mby5jb3JlVmVyc2lvbixcbiAgICAgICAgICAgIGNvbmZpZ19zZXJ2ZXI6IGNsaWVudEluZm8uY29uZmlnU2VydmVyLFxuICAgICAgICAgICAgcXVlcnlfdXJsOiBjbGllbnRJbmZvLnF1ZXJ5VXJsLFxuICAgICAgICB9O1xuICAgIH1cblxuICAgIHN0YXRpYyBpc0NsaWVudEVycm9yKGVycm9yOiBhbnksIGNvZGU6IG51bWJlcik6IGJvb2xlYW4ge1xuICAgICAgICByZXR1cm4gKGVycm9yLnNvdXJjZSA9PT0gVE9OQ2xpZW50RXJyb3Iuc291cmNlLkNMSUVOVClcbiAgICAgICAgICAgICYmIChlcnJvci5jb2RlID09PSBjb2RlKTtcbiAgICB9XG5cbiAgICBzdGF0aWMgaXNOb2RlRXJyb3IoZXJyb3I6IGFueSwgY29kZTogbnVtYmVyKTogYm9vbGVhbiB7XG4gICAgICAgIHJldHVybiAoZXJyb3Iuc291cmNlID09PSBUT05DbGllbnRFcnJvci5zb3VyY2UuTk9ERSlcbiAgICAgICAgICAgICYmIChlcnJvci5jb2RlID09PSBjb2RlKTtcbiAgICB9XG5cbiAgICBzdGF0aWMgaXNDb250cmFjdEVycm9yKGVycm9yOiBhbnksIGV4aXRDb2RlOiBudW1iZXIpOiBib29sZWFuIHtcbiAgICAgICAgcmV0dXJuIChlcnJvci5zb3VyY2UgPT09IFRPTkNsaWVudEVycm9yLnNvdXJjZS5OT0RFKVxuICAgICAgICAgICAgJiYgKGVycm9yLmNvZGUgPT09IFRPTkNsaWVudEVycm9yLmNvZGUuQ09OVFJBQ1RfRVhFQ1VUSU9OX0ZBSUxFRClcbiAgICAgICAgICAgICYmIChlcnJvci5kYXRhICYmIGVycm9yLmRhdGEuZXhpdF9jb2RlID09PSBleGl0Q29kZSk7XG4gICAgfVxuXG4gICAgc3RhdGljIGlzT3JpZ2luYWxDb250cmFjdEVycm9yKGVycm9yOiBhbnksIGV4aXRDb2RlOiBudW1iZXIpOiBib29sZWFuIHtcbiAgICAgICAgcmV0dXJuIFRPTkNsaWVudEVycm9yLmlzQ29udHJhY3RFcnJvcihlcnJvciwgZXhpdENvZGUpXG4gICAgICAgICAgICAmJiAoIWVycm9yLmRhdGE/Lm9yaWdpbmFsX2Vycm9yKTtcbiAgICB9XG5cbiAgICBzdGF0aWMgaXNSZXNvbHZlZENvbnRyYWN0RXJyb3JBZnRlckV4cGlyZShlcnJvcjogYW55LCBleGl0Q29kZTogbnVtYmVyKTogYm9vbGVhbiB7XG4gICAgICAgIHJldHVybiBUT05DbGllbnRFcnJvci5pc0NvbnRyYWN0RXJyb3IoZXJyb3IsIGV4aXRDb2RlKVxuICAgICAgICAgICAgJiYgKGVycm9yLmRhdGEgJiYgZXJyb3IuZGF0YS5vcmlnaW5hbF9lcnJvclxuICAgICAgICAgICAgICAgICYmIFRPTkNsaWVudEVycm9yLmlzTWVzc2FnZUV4cGlyZWQoZXJyb3IuZGF0YS5vcmlnaW5hbF9lcnJvcikpO1xuICAgIH1cblxuICAgIHN0YXRpYyBpbnRlcm5hbEVycm9yKFxuICAgICAgICBjbGllbnRJbmZvOiBUT05DbGllbnRJbmZvLFxuICAgICAgICBtZXNzYWdlOiBzdHJpbmcsXG4gICAgKTogVE9OQ2xpZW50RXJyb3Ige1xuICAgICAgICByZXR1cm4gbmV3IFRPTkNsaWVudEVycm9yKFxuICAgICAgICAgICAgY2xpZW50SW5mbyxcbiAgICAgICAgICAgIGBJbnRlcm5hbCBlcnJvcjogJHttZXNzYWdlfWAsXG4gICAgICAgICAgICBUT05FcnJvckNvZGUuSU5URVJOQUxfRVJST1IsXG4gICAgICAgICk7XG4gICAgfVxuXG4gICAgc3RhdGljIGludmFsaWRDb25zKGNsaWVudEluZm86IFRPTkNsaWVudEluZm8pOiBUT05DbGllbnRFcnJvciB7XG4gICAgICAgIHJldHVybiBuZXcgVE9OQ2xpZW50RXJyb3IoXG4gICAgICAgICAgICBjbGllbnRJbmZvLFxuICAgICAgICAgICAgJ0ludmFsaWQgQ09OUyBzdHJ1Y3R1cmUuIEVhY2ggQ09OUyBpdGVtIG11c3QgY29udGFpbnMgb2YgdHdvIGVsZW1lbnRzLicsXG4gICAgICAgICAgICBUT05FcnJvckNvZGUuSU5WQUxJRF9DT05TLFxuICAgICAgICApO1xuICAgIH1cblxuICAgIHN0YXRpYyBjbGllbnREb2VzTm90Q29uZmlndXJlZChjbGllbnRJbmZvOiBUT05DbGllbnRJbmZvKTogVE9OQ2xpZW50RXJyb3Ige1xuICAgICAgICByZXR1cm4gbmV3IFRPTkNsaWVudEVycm9yKFxuICAgICAgICAgICAgY2xpZW50SW5mbyxcbiAgICAgICAgICAgICdUT04gQ2xpZW50IGlzblxcJ3QgY29uZmlndXJlZCcsXG4gICAgICAgICAgICBUT05FcnJvckNvZGUuQ0xJRU5UX0RPRVNfTk9UX0NPTkZJR1VSRUQsXG4gICAgICAgICk7XG4gICAgfVxuXG4gICAgc3RhdGljIHNlbmROb2RlUmVxdWVzdEZhaWxlZChcbiAgICAgICAgY2xpZW50SW5mbzogVE9OQ2xpZW50SW5mbyxcbiAgICAgICAgcmVzcG9uc2VUZXh0OiBzdHJpbmcsXG4gICAgKTogVE9OQ2xpZW50RXJyb3Ige1xuICAgICAgICByZXR1cm4gbmV3IFRPTkNsaWVudEVycm9yKFxuICAgICAgICAgICAgY2xpZW50SW5mbyxcbiAgICAgICAgICAgIGBTZW5kIG5vZGUgcmVxdWVzdCBmYWlsZWQ6ICR7cmVzcG9uc2VUZXh0fWAsXG4gICAgICAgICAgICBUT05FcnJvckNvZGUuU0VORF9OT0RFX1JFUVVFU1RfRkFJTEVELFxuICAgICAgICApO1xuICAgIH1cblxuICAgIHN0YXRpYyBydW5Mb2NhbEFjY291bnREb2VzTm90RXhpc3RzKFxuICAgICAgICBjbGllbnRJbmZvOiBUT05DbGllbnRJbmZvLFxuICAgICAgICBmdW5jdGlvbk5hbWU6IHN0cmluZyxcbiAgICAgICAgYWRkcmVzczogc3RyaW5nLFxuICAgICk6IFRPTkNsaWVudEVycm9yIHtcbiAgICAgICAgcmV0dXJuIG5ldyBUT05DbGllbnRFcnJvcihcbiAgICAgICAgICAgIGNsaWVudEluZm8sXG4gICAgICAgICAgICBgWyR7ZnVuY3Rpb25OYW1lfV0gcnVuIGxvY2FsIGZhaWxlZDogYWNjb3VudCBbJHthZGRyZXNzfV0gZG9lcyBub3QgZXhpc3RzYCxcbiAgICAgICAgICAgIFRPTkVycm9yQ29kZS5SVU5fTE9DQUxfQUNDT1VOVF9ET0VTX05PVF9FWElTVFMsXG4gICAgICAgICk7XG4gICAgfVxuXG4gICAgc3RhdGljIHdhaXRGb3JUaW1lb3V0KGNsaWVudEluZm86IFRPTkNsaWVudEluZm8pIHtcbiAgICAgICAgcmV0dXJuIG5ldyBUT05DbGllbnRFcnJvcihcbiAgICAgICAgICAgIGNsaWVudEluZm8sXG4gICAgICAgICAgICAnV2FpdCBmb3Igb3BlcmF0aW9uIHJlamVjdGVkIG9uIHRpbWVvdXQnLFxuICAgICAgICAgICAgVE9ORXJyb3JDb2RlLldBSVRfRk9SX1RJTUVPVVQsXG4gICAgICAgICk7XG4gICAgfVxuXG4gICAgc3RhdGljIHF1ZXJ5RmFpbGVkKFxuICAgICAgICBjbGllbnRJbmZvOiBUT05DbGllbnRJbmZvLFxuICAgICAgICBlcnJvcnM6IEVycm9yW10sXG4gICAgKSB7XG4gICAgICAgIHJldHVybiBuZXcgVE9OQ2xpZW50RXJyb3IoXG4gICAgICAgICAgICBjbGllbnRJbmZvLFxuICAgICAgICAgICAgYFF1ZXJ5IGZhaWxlZDogJHtlcnJvcnMubWFwKHggPT4geC5tZXNzYWdlIHx8IHgudG9TdHJpbmcoKSkuam9pbignXFxuJyl9YCxcbiAgICAgICAgICAgIFRPTkVycm9yQ29kZS5RVUVSWV9GQUlMRUQsXG4gICAgICAgICk7XG4gICAgfVxuXG4gICAgc3RhdGljIGZvcm1hdFRpbWUodGltZTogP251bWJlcik6ID9zdHJpbmcge1xuICAgICAgICBpZiAodGltZSkge1xuICAgICAgICAgICAgcmV0dXJuIGAke25ldyBEYXRlKHRpbWUgKiAxMDAwKS50b0lTT1N0cmluZygpfSAoJHt0aW1lfSlgO1xuICAgICAgICB9XG4gICAgICAgIHJldHVybiBudWxsO1xuICAgIH1cblxuICAgIHN0YXRpYyBtZXNzYWdlRXhwaXJlZChcbiAgICAgICAgY2xpZW50SW5mbzogVE9OQ2xpZW50SW5mbyxcbiAgICAgICAgZGF0YToge1xuICAgICAgICAgICAgbWVzc2FnZV9pZDogc3RyaW5nLFxuICAgICAgICAgICAgc2VuZGluZ190aW1lOiBudW1iZXIsXG4gICAgICAgICAgICBleHBpcmU/OiBudW1iZXIsXG4gICAgICAgICAgICBibG9ja190aW1lPzogbnVtYmVyLFxuICAgICAgICAgICAgYmxvY2tfaWQ/OiBzdHJpbmcsXG4gICAgICAgIH0sXG4gICAgKSB7XG4gICAgICAgIHJldHVybiBuZXcgVE9OQ2xpZW50RXJyb3IoXG4gICAgICAgICAgICBjbGllbnRJbmZvLFxuICAgICAgICAgICAgJ01lc3NhZ2UgZXhwaXJlZCcsXG4gICAgICAgICAgICBUT05FcnJvckNvZGUuTUVTU0FHRV9FWFBJUkVELFxuICAgICAgICAgICAgVE9ORXJyb3JTb3VyY2UuQ0xJRU5ULFxuICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgIHNlbmRpbmdfdGltZTogVE9OQ2xpZW50RXJyb3IuZm9ybWF0VGltZShkYXRhLnNlbmRpbmdfdGltZSksXG4gICAgICAgICAgICAgICAgZXhwaXJhdGlvbl90aW1lOiBUT05DbGllbnRFcnJvci5mb3JtYXRUaW1lKGRhdGEuZXhwaXJlKSxcbiAgICAgICAgICAgICAgICBibG9ja190aW1lOiBUT05DbGllbnRFcnJvci5mb3JtYXRUaW1lKGRhdGEuYmxvY2tfdGltZSksXG4gICAgICAgICAgICB9LFxuICAgICAgICApO1xuICAgIH1cblxuICAgIHN0YXRpYyBzZXJ2ZXJEb2VzbnRTdXBwb3J0QWdncmVnYXRpb25zKGNsaWVudEluZm86IFRPTkNsaWVudEluZm8pIHtcbiAgICAgICAgcmV0dXJuIG5ldyBUT05DbGllbnRFcnJvcihcbiAgICAgICAgICAgIGNsaWVudEluZm8sXG4gICAgICAgICAgICAnU2VydmVyIGRvZXNuXFwndCBzdXBwb3J0IGFnZ3JlZ2F0aW9ucycsXG4gICAgICAgICAgICBUT05FcnJvckNvZGUuU0VSVkVSX0RPRVNOVF9TVVBQT1JUX0FHR1JFR0FUSU9OUyxcbiAgICAgICAgKTtcbiAgICB9XG5cbiAgICBzdGF0aWMgYWRkcmVzc1JlcXVpcmVkRm9yUnVuTG9jYWwoY2xpZW50SW5mbzogVE9OQ2xpZW50SW5mbykge1xuICAgICAgICByZXR1cm4gbmV3IFRPTkNsaWVudEVycm9yKFxuICAgICAgICAgICAgY2xpZW50SW5mbyxcbiAgICAgICAgICAgICdBZGRyZXNzIHJlcXVpcmVkIGZvciBydW4gbG9jYWwuIFlvdSBoYXZlblxcJ3Qgc3BlY2lmaWVkIGNvbnRyYWN0IGNvZGUgb3IgZGF0YSAnXG4gICAgICAgICAgICArICdzbyBhZGRyZXNzIGlzIHJlcXVpcmVkIHRvIGxvYWQgbWlzc2luZyBwYXJ0cyBmcm9tIG5ldHdvcmsuJyxcbiAgICAgICAgICAgIFRPTkNsaWVudEVycm9yLmNvZGUuQUREUkVTU19SRVFVSVJFRF9GT1JfUlVOX0xPQ0FMLFxuICAgICAgICAgICAgVE9OQ2xpZW50RXJyb3Iuc291cmNlLkNMSUVOVCxcbiAgICAgICAgKTtcbiAgICB9XG5cbiAgICBzdGF0aWMgbmV0d29ya1NpbGVudChcbiAgICAgICAgY2xpZW50SW5mbzogVE9OQ2xpZW50SW5mbyxcbiAgICAgICAgZGF0YToge1xuICAgICAgICAgICAgbWVzc2FnZV9pZDogc3RyaW5nLFxuICAgICAgICAgICAgc2VuZGluZ190aW1lOiBudW1iZXIsXG4gICAgICAgICAgICBleHBpcmU6IG51bWJlcixcbiAgICAgICAgICAgIHRpbWVvdXQ6IG51bWJlcixcbiAgICAgICAgICAgIGJsb2NrX2lkPzogc3RyaW5nLFxuICAgICAgICAgICAgbWVzc2FnZV9wcm9jZXNzaW5nX3N0YXRlPzogVE9OTWVzc2FnZVByb2Nlc3NpbmdTdGF0ZSxcbiAgICAgICAgfSxcbiAgICApIHtcbiAgICAgICAgcmV0dXJuIG5ldyBUT05DbGllbnRFcnJvcihcbiAgICAgICAgICAgIGNsaWVudEluZm8sXG4gICAgICAgICAgICAnTmV0d29yayBzaWxlbnQ6IG5vIGJsb2NrcyBwcm9kdWNlZCBkdXJpbmcgdGltZW91dC4nLFxuICAgICAgICAgICAgVE9ORXJyb3JDb2RlLk5FVFdPUktfU0lMRU5ULFxuICAgICAgICAgICAgVE9ORXJyb3JTb3VyY2UuQ0xJRU5ULFxuICAgICAgICAgICAgZGF0YSAmJiB7XG4gICAgICAgICAgICAgICAgLi4uZGF0YSxcbiAgICAgICAgICAgICAgICBzZW5kaW5nX3RpbWU6IFRPTkNsaWVudEVycm9yLmZvcm1hdFRpbWUoZGF0YS5zZW5kaW5nX3RpbWUpLFxuICAgICAgICAgICAgICAgIGV4cGlyYXRpb25fdGltZTogVE9OQ2xpZW50RXJyb3IuZm9ybWF0VGltZShkYXRhLmV4cGlyZSksXG4gICAgICAgICAgICB9LFxuICAgICAgICApO1xuICAgIH1cblxuICAgIHN0YXRpYyB0cmFuc2FjdGlvbldhaXRUaW1lb3V0KFxuICAgICAgICBjbGllbnRJbmZvOiBUT05DbGllbnRJbmZvLFxuICAgICAgICBkYXRhOiB7XG4gICAgICAgICAgICBtZXNzYWdlX2lkOiBzdHJpbmcsXG4gICAgICAgICAgICBzZW5kaW5nX3RpbWU6IG51bWJlcixcbiAgICAgICAgICAgIHRpbWVvdXQ6IG51bWJlcixcbiAgICAgICAgICAgIG1lc3NhZ2VfcHJvY2Vzc2luZ19zdGF0ZT86IFRPTk1lc3NhZ2VQcm9jZXNzaW5nU3RhdGUsXG4gICAgICAgIH0sXG4gICAgKSB7XG4gICAgICAgIHJldHVybiBuZXcgVE9OQ2xpZW50RXJyb3IoXG4gICAgICAgICAgICBjbGllbnRJbmZvLFxuICAgICAgICAgICAgJ1RyYW5zYWN0aW9uIGRpZCBub3QgcHJvZHVjZWQgZHVyaW5nIHNwZWNpZmllZCB0aW1lb3V0JyxcbiAgICAgICAgICAgIFRPTkVycm9yQ29kZS5UUkFOU0FDVElPTl9XQUlUX1RJTUVPVVQsXG4gICAgICAgICAgICBUT05FcnJvclNvdXJjZS5DTElFTlQsXG4gICAgICAgICAgICBkYXRhICYmIHtcbiAgICAgICAgICAgICAgICAuLi5kYXRhLFxuICAgICAgICAgICAgICAgIHNlbmRpbmdfdGltZTogVE9OQ2xpZW50RXJyb3IuZm9ybWF0VGltZShkYXRhLnNlbmRpbmdfdGltZSksXG4gICAgICAgICAgICB9LFxuICAgICAgICApO1xuICAgIH1cblxuICAgIHN0YXRpYyBjbG9ja091dE9mU3luYyhjbGllbnRJbmZvOiBUT05DbGllbnRJbmZvKSB7XG4gICAgICAgIHJldHVybiBuZXcgVE9OQ2xpZW50RXJyb3IoXG4gICAgICAgICAgICBjbGllbnRJbmZvLFxuICAgICAgICAgICAgJ1lvdSBsb2NhbCBjbG9jayBpcyBvdXQgb2Ygc3luYyB3aXRoIHRoZSBzZXJ2ZXIgdGltZS4gJ1xuICAgICAgICAgICAgKyAnSXQgaXMgYSBjcml0aWNhbCBjb25kaXRpb24gZm9yIHNlbmRpbmcgbWVzc2FnZXMgdG8gdGhlIGJsb2NrY2hhaW4uICdcbiAgICAgICAgICAgICsgJ1BsZWFzZSBzeW5jIHlvdSBjbG9jayB3aXRoIHRoZSBpbnRlcm5ldCB0aW1lLicsXG4gICAgICAgICAgICBUT05FcnJvckNvZGUuQ0xPQ0tfT1VUX09GX1NZTkMsXG4gICAgICAgICk7XG4gICAgfVxuXG4gICAgc3RhdGljIGFjY291bnRNaXNzaW5nKFxuICAgICAgICBjbGllbnRJbmZvOiBUT05DbGllbnRJbmZvLFxuICAgICAgICBhZGRyZXNzOiBzdHJpbmcsXG4gICAgICAgIGRhdGE/OiBhbnksXG4gICAgKSB7XG4gICAgICAgIHJldHVybiBuZXcgVE9OQ2xpZW50RXJyb3IoXG4gICAgICAgICAgICBjbGllbnRJbmZvLFxuICAgICAgICAgICAgYEFjY291bnQgd2l0aCBhZGRyZXNzIFske2FkZHJlc3N9XSBkb2Vzbid0IGV4aXN0cy4gYFxuICAgICAgICAgICAgKyAnWW91IGhhdmUgdG8gcHJlcGFpZCB0aGlzIGFjY291bnQgdG8gaGF2ZSBhIHBvc2l0aXZlIGJhbGFuY2Ugb24gdGhlbSBhbmQgdGhlbiBkZXBsb3kgJ1xuICAgICAgICAgICAgKyAnYSBjb250cmFjdCBjb2RlIGZvciB0aGlzIGFjY291bnQuJ1xuICAgICAgICAgICAgKyAnU2VlIFNESyBkb2N1bWVudGF0aW9uIGZvciBkZXRhaWxlZCBpbnN0cnVjdGlvbnMuJyxcbiAgICAgICAgICAgIFRPTkVycm9yQ29kZS5BQ0NPVU5UX01JU1NJTkcsXG4gICAgICAgICAgICB1bmRlZmluZWQsXG4gICAgICAgICAgICBkYXRhLFxuICAgICAgICApO1xuICAgIH1cblxuICAgIHN0YXRpYyBhY2NvdW50Q29kZU1pc3NpbmcoXG4gICAgICAgIGNsaWVudEluZm86IFRPTkNsaWVudEluZm8sXG4gICAgICAgIGFkZHJlc3M6IHN0cmluZyxcbiAgICAgICAgYmFsYW5jZTogc3RyaW5nLFxuICAgICkge1xuICAgICAgICByZXR1cm4gbmV3IFRPTkNsaWVudEVycm9yKFxuICAgICAgICAgICAgY2xpZW50SW5mbyxcbiAgICAgICAgICAgIGBBY2NvdW50IHdpdGggYWRkcmVzcyBbJHthZGRyZXNzfV0gZXhpc3RzIGJ1dCBoYXZlbid0IGEgY29udHJhY3QgY29kZSB5ZXQuIGBcbiAgICAgICAgICAgICsgJ1lvdSBoYXZlIHRvIGVuc3VyZSB0aGF0IGFuIGFjY291bnQgaGFzIGFuIGVub3VnaCBiYWxhbmNlIGZvciBkZXBsb3lpbmcgJ1xuICAgICAgICAgICAgKyAnYSBjb250cmFjdCBjb2RlIGFuZCB0aGVuIGRlcGxveSBhIGNvbnRyYWN0IGNvZGUgZm9yIHRoaXMgYWNjb3VudC4gJ1xuICAgICAgICAgICAgKyBgQ3VycmVudCBhY2NvdW50IGJhbGFuY2UgaXMgWyR7YmFsYW5jZX1dLiBgXG4gICAgICAgICAgICArICdTZWUgU0RLIGRvY3VtZW50YXRpb24gZm9yIGRldGFpbGVkIGluc3RydWN0aW9ucy4nLFxuICAgICAgICAgICAgVE9ORXJyb3JDb2RlLkFDQ09VTlRfQ09ERV9NSVNTSU5HLFxuICAgICAgICApO1xuICAgIH1cblxuICAgIHN0YXRpYyBhY2NvdW50QmFsYW5jZVRvb0xvdyhcbiAgICAgICAgY2xpZW50SW5mbzogVE9OQ2xpZW50SW5mbyxcbiAgICAgICAgYWRkcmVzczogc3RyaW5nLFxuICAgICAgICBiYWxhbmNlOiBzdHJpbmcsXG4gICAgKSB7XG4gICAgICAgIHJldHVybiBuZXcgVE9OQ2xpZW50RXJyb3IoXG4gICAgICAgICAgICBjbGllbnRJbmZvLFxuICAgICAgICAgICAgYEFjY291bnQgd2l0aCBhZGRyZXNzIFske2FkZHJlc3N9XSBoYXMgdG9vIGxvdyBiYWxhbmNlIFske2JhbGFuY2V9XS4gYFxuICAgICAgICAgICAgKyAnWW91IGhhdmUgdG8gc2VuZCBzb21lIHZhbHVlIHRvIGFjY291bnQgYmFsYW5jZSBmcm9tIG90aGVyIGNvbnRyYWN0ICdcbiAgICAgICAgICAgICsgJyhlLmcuIFdhbGxldCBjb250cmFjdCkuICdcbiAgICAgICAgICAgICsgJ1NlZSBTREsgZG9jdW1lbnRhdGlvbiBmb3IgZGV0YWlsZWQgaW5zdHJ1Y3Rpb25zLicsXG4gICAgICAgICAgICBUT05FcnJvckNvZGUuQUNDT1VOVF9CQUxBTkNFX1RPT19MT1csXG4gICAgICAgICk7XG4gICAgfVxuXG4gICAgc3RhdGljIG5vQmxvY2tzKFxuICAgICAgICBjbGllbnRJbmZvOiBUT05DbGllbnRJbmZvLFxuICAgICAgICB3b3JrY2hhaW46IG51bWJlcixcbiAgICApIHtcbiAgICAgICAgY29uc3Qgd29ya2NoYWluTmFtZSA9IHdvcmtjaGFpbiA9PT0gLTEgPyAnbWFzdGVyY2hhaW4nIDogYHdvcmtjaGFpbiAke3dvcmtjaGFpbn1gO1xuICAgICAgICByZXR1cm4gbmV3IFRPTkNsaWVudEVycm9yKFxuICAgICAgICAgICAgY2xpZW50SW5mbyxcbiAgICAgICAgICAgIGBcIk5vIGJsb2NrcyBmb3IgJHt3b3JrY2hhaW5OYW1lfSBmb3VuZFwiLmAsXG4gICAgICAgICAgICBUT05FcnJvckNvZGUuTkVUV09SS19TSUxFTlQsXG4gICAgICAgICk7XG4gICAgfVxuXG4gICAgc3RhdGljIGludmFsaWRCbG9ja2NoYWluKFxuICAgICAgICBjbGllbnRJbmZvOiBUT05DbGllbnRJbmZvLFxuICAgICAgICBtZXNzYWdlOiBzdHJpbmcsXG4gICAgKSB7XG4gICAgICAgIHJldHVybiBuZXcgVE9OQ2xpZW50RXJyb3IoY2xpZW50SW5mbywgbWVzc2FnZSwgVE9ORXJyb3JDb2RlLk5FVFdPUktfU0lMRU5UKTtcbiAgICB9XG5cbiAgICBzdGF0aWMgcXVlcnlGb3JjaWJseUFib3J0ZWQoY2xpZW50SW5mbzogVE9OQ2xpZW50SW5mbykge1xuICAgICAgICByZXR1cm4gbmV3IFRPTkNsaWVudEVycm9yKFxuICAgICAgICAgICAgY2xpZW50SW5mbyxcbiAgICAgICAgICAgICdHcmFwaFFMIHF1ZXJ5IHdhcyBmb3JjaWJseSBhYm9ydGVkIG9uIHRpbWVvdXQuJyxcbiAgICAgICAgICAgIFRPTkVycm9yQ29kZS5RVUVSWV9GT1JDSUJMWV9BQk9SVEVELFxuICAgICAgICApO1xuICAgIH1cblxuICAgIHN0YXRpYyBpc01lc3NhZ2VFeHBpcmVkKGVycm9yOiBhbnkpOiBib29sZWFuIHtcbiAgICAgICAgcmV0dXJuIFRPTkNsaWVudEVycm9yLmlzQ2xpZW50RXJyb3IoZXJyb3IsIFRPTkNsaWVudEVycm9yLmNvZGUuTUVTU0FHRV9FWFBJUkVEKTtcbiAgICB9XG5cbiAgICBzdGF0aWMgaXNXYWl0Rm9yVGltZW91dChlcnJvcjogYW55KTogYm9vbGVhbiB7XG4gICAgICAgIHJldHVybiBUT05DbGllbnRFcnJvci5pc0NsaWVudEVycm9yKGVycm9yLCBUT05DbGllbnRFcnJvci5jb2RlLldBSVRfRk9SX1RJTUVPVVQpO1xuICAgIH1cbn1cbiJdfQ==