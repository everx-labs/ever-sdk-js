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
    key: "completeErrorData",
    value: function () {
      var _completeErrorData = _asyncToGenerator( /*#__PURE__*/_regenerator["default"].mark(function _callee3(data) {
        return _regenerator["default"].wrap(function _callee3$(_context3) {
          while (1) {
            switch (_context3.prev = _context3.next) {
              case 0:
                _context3.t0 = _objectSpread;
                _context3.t1 = _objectSpread({}, data);
                _context3.t2 = {};
                _context3.next = 5;
                return this.config.getVersion();

              case 5:
                _context3.t3 = _context3.sent;
                _context3.t4 = this.config.getConfigServer();
                _context3.t5 = this._queries.getQueryUrl();
                _context3.t6 = {
                  core_version: _context3.t3,
                  config_server: _context3.t4,
                  query_url: _context3.t5
                };
                return _context3.abrupt("return", (0, _context3.t0)(_context3.t1, _context3.t2, _context3.t6));

              case 10:
              case "end":
                return _context3.stop();
            }
          }
        }, _callee3, this);
      }));

      function completeErrorData(_x) {
        return _completeErrorData.apply(this, arguments);
      }

      return completeErrorData;
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

      function _resolveSignedManagementAccessKey(_x2) {
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

      function registerAccessKeys(_x3) {
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

      function revokeAccessKeys(_x4) {
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

      function trace(_x5, _x6, _x7) {
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

      function create(_x8) {
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
  function TONClientError(code, message, data, source) {
    _classCallCheck(this, TONClientError);

    _defineProperty(this, "message", void 0);

    _defineProperty(this, "source", void 0);

    _defineProperty(this, "code", void 0);

    _defineProperty(this, "data", void 0);

    this.code = code;
    this.message = message;
    this.data = data;
    this.source = source || TONErrorSource.CLIENT;
  }

  _createClass(TONClientError, null, [{
    key: "isClientError",
    value: function isClientError(error, code) {
      return error.source === TONErrorSource.CLIENT && error.code === code;
    }
  }, {
    key: "isNodeError",
    value: function isNodeError(error, code) {
      return error.source === TONErrorSource.NODE && error.code === code;
    }
  }, {
    key: "isContractError",
    value: function isContractError(error, exitCode) {
      return error.source === TONErrorSource.NODE && error.code === TONErrorCode.CONTRACT_EXECUTION_FAILED && error.data && error.data.exit_code === exitCode;
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
    value: function internalError(message, data) {
      return new TONClientError(TONErrorCode.INTERNAL_ERROR, "Internal error: ".concat(message), data);
    }
  }, {
    key: "invalidCons",
    value: function invalidCons(data) {
      return new TONClientError(TONErrorCode.INVALID_CONS, 'Invalid CONS structure. Each CONS item must contains of two elements.', data);
    }
  }, {
    key: "clientDoesNotConfigured",
    value: function clientDoesNotConfigured(data) {
      return new TONClientError(TONErrorCode.CLIENT_DOES_NOT_CONFIGURED, 'TON Client isn\'t configured', data);
    }
  }, {
    key: "sendNodeRequestFailed",
    value: function sendNodeRequestFailed(responseText, data) {
      return new TONClientError(TONErrorCode.SEND_NODE_REQUEST_FAILED, "Send node request failed: ".concat(responseText), data);
    }
  }, {
    key: "runLocalAccountDoesNotExists",
    value: function runLocalAccountDoesNotExists(functionName, address, data) {
      return new TONClientError(TONErrorCode.RUN_LOCAL_ACCOUNT_DOES_NOT_EXISTS, "[".concat(functionName, "] run local failed: account [").concat(address, "] does not exists"), data);
    }
  }, {
    key: "waitForTimeout",
    value: function waitForTimeout(data) {
      return new TONClientError(TONErrorCode.WAIT_FOR_TIMEOUT, 'Wait for operation rejected on timeout', data);
    }
  }, {
    key: "queryFailed",
    value: function queryFailed(errors, data) {
      return new TONClientError(TONErrorCode.QUERY_FAILED, "Query failed: ".concat(errors.map(function (x) {
        return x.message || x.toString();
      }).join('\n')), data);
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
      return new TONClientError(TONErrorCode.MESSAGE_EXPIRED, 'Message expired', _objectSpread(_objectSpread({}, data), {}, {
        sending_time: TONClientError.formatTime(data.sending_time),
        expiration_time: TONClientError.formatTime(data.expire),
        block_time: TONClientError.formatTime(data.block_time)
      }), TONErrorSource.CLIENT);
    }
  }, {
    key: "serverDoesntSupportAggregations",
    value: function serverDoesntSupportAggregations(data) {
      return new TONClientError(TONErrorCode.SERVER_DOESNT_SUPPORT_AGGREGATIONS, 'Server doesn\'t support aggregations', data);
    }
  }, {
    key: "addressRequiredForRunLocal",
    value: function addressRequiredForRunLocal(data) {
      return new TONClientError(TONErrorCode.ADDRESS_REQUIRED_FOR_RUN_LOCAL, 'Address required for run local. You haven\'t specified contract code or data ' + 'so address is required to load missing parts from network.', data);
    }
  }, {
    key: "networkSilent",
    value: function networkSilent(data) {
      return new TONClientError(TONErrorCode.NETWORK_SILENT, 'Network silent: no blocks produced during timeout.', _objectSpread(_objectSpread({}, data), {}, {
        sending_time: TONClientError.formatTime(data.sending_time),
        expiration_time: TONClientError.formatTime(data.expire)
      }));
    }
  }, {
    key: "transactionWaitTimeout",
    value: function transactionWaitTimeout(data) {
      return new TONClientError(TONErrorCode.TRANSACTION_WAIT_TIMEOUT, 'Transaction did not produced during specified timeout', _objectSpread(_objectSpread({}, data), {}, {
        sending_time: TONClientError.formatTime(data.sending_time)
      }));
    }
  }, {
    key: "clockOutOfSync",
    value: function clockOutOfSync(data) {
      return new TONClientError(TONErrorCode.CLOCK_OUT_OF_SYNC, 'You local clock is out of sync with the server time. ' + 'It is a critical condition for sending messages to the blockchain. ' + 'Please sync you clock with the internet time.', data);
    }
  }, {
    key: "accountMissing",
    value: function accountMissing(address, data) {
      return new TONClientError(TONErrorCode.ACCOUNT_MISSING, "Account with address [".concat(address, "] doesn't exists. ") + 'You have to prepaid this account to have a positive balance on them and then deploy ' + 'a contract code for this account.' + 'See SDK documentation for detailed instructions.', data);
    }
  }, {
    key: "accountCodeMissing",
    value: function accountCodeMissing(address, balance, data) {
      return new TONClientError(TONErrorCode.ACCOUNT_CODE_MISSING, "Account with address [".concat(address, "] exists but haven't a contract code yet. ") + 'You have to ensure that an account has an enough balance for deploying ' + 'a contract code and then deploy a contract code for this account. ' + "Current account balance is [".concat(balance, "]. ") + 'See SDK documentation for detailed instructions.', data);
    }
  }, {
    key: "accountBalanceTooLow",
    value: function accountBalanceTooLow(address, balance, data) {
      return new TONClientError(TONErrorCode.ACCOUNT_BALANCE_TOO_LOW, "Account with address [".concat(address, "] has too low balance [").concat(balance, "]. ") + 'You have to send some value to account balance from other contract ' + '(e.g. Wallet contract). ' + 'See SDK documentation for detailed instructions.', data);
    }
  }, {
    key: "noBlocks",
    value: function noBlocks(workchain, data) {
      var workchainName = workchain === -1 ? 'masterchain' : "workchain ".concat(workchain);
      return new TONClientError(TONErrorCode.NETWORK_SILENT, "\"No blocks for ".concat(workchainName, " found\"."), data);
    }
  }, {
    key: "invalidBlockchain",
    value: function invalidBlockchain(message, data) {
      return new TONClientError(TONErrorCode.NETWORK_SILENT, message, data);
    }
  }, {
    key: "queryForciblyAborted",
    value: function queryForciblyAborted(data) {
      return new TONClientError(TONErrorCode.QUERY_FORCIBLY_ABORTED, 'GraphQL query was forcibly aborted on timeout.', data);
    }
  }, {
    key: "isMessageExpired",
    value: function isMessageExpired(error) {
      return TONClientError.isClientError(error, TONErrorCode.MESSAGE_EXPIRED);
    }
  }, {
    key: "isWaitForTimeout",
    value: function isWaitForTimeout(error) {
      return TONClientError.isClientError(error, TONErrorCode.WAIT_FOR_TIMEOUT);
    }
  }]);

  return TONClientError;
}();

exports.TONClientError = TONClientError;

_defineProperty(TONClientError, "source", TONErrorSource);

_defineProperty(TONClientError, "code", TONErrorCode);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uL3NyYy9UT05DbGllbnQuanMiXSwibmFtZXMiOlsiVE9OQ2xpZW50IiwiY2xpZW50UGxhdGZvcm0iLCJtb2R1bGVzIiwiTWFwIiwiY29uZmlnIiwiZ2V0TW9kdWxlIiwiVE9OQ29uZmlnTW9kdWxlIiwiY3J5cHRvIiwiVE9OQ3J5cHRvTW9kdWxlIiwiY29udHJhY3RzIiwiVE9OQ29udHJhY3RzTW9kdWxlIiwiX3F1ZXJpZXMiLCJUT05RdWVyaWVzTW9kdWxlIiwicXVlcmllcyIsIl9jb250ZXh0IiwiX2NvcmVCcmlkZ2UiLCJnZXRDb3JlQnJpZGdlIiwidmFsdWVzIiwibW9kdWxlIiwic2V0dXAiLCJjbG9zZSIsImxpYnJhcnkiLCJjb3JlTGlicmFyeSIsInVuZGVmaW5lZCIsImNvbnRleHQiLCJQcm9taXNlIiwicmVzb2x2ZSIsImNvcmVEZXN0cm95Q29udGV4dCIsImRhdGEiLCJnZXRWZXJzaW9uIiwiZ2V0Q29uZmlnU2VydmVyIiwiZ2V0UXVlcnlVcmwiLCJjb3JlX3ZlcnNpb24iLCJjb25maWdfc2VydmVyIiwicXVlcnlfdXJsIiwicGxhdGZvcm0iLCJjcmVhdGVMaWJyYXJ5IiwidHJ5Q3JlYXRlTGlicmFyeSIsImNvcmVDcmVhdGVDb250ZXh0IiwicmVxdWVzdCIsIm1ldGhvZCIsInBhcmFtc0pzb24iLCJvblJlc3VsdCIsImNvcmVSZXF1ZXN0IiwidHJ5Q3JlYXRlQ29yZUJyaWRnZSIsIk1vZHVsZUNsYXNzIiwibmFtZSIsIm1vZHVsZU5hbWUiLCJleGlzdGluZ01vZHVsZSIsImdldCIsInNldCIsInNlcnZlclRpbWVEZWx0YSIsInNlcnZlck5vdyIsInF1ZXJ5IiwicmVzdWx0IiwiZ2V0TWFuYWdlbWVudEFjY2Vzc0tleSIsInBhcmFtcyIsInNpZ25lZE1hbmFnZW1lbnRBY2Nlc3NLZXkiLCJzaWduS2V5cyIsImFjY291bnRLZXlzIiwibWFuYWdlbWVudEFjY2Vzc0tleSIsIm5hY2xTaWduIiwidGV4dCIsInNlY3JldCIsIl9yZXNvbHZlU2lnbmVkTWFuYWdlbWVudEFjY2Vzc0tleSIsIm11dGF0aW9uIiwiYWNjb3VudCIsImtleXMiLCJyZWdpc3RlckFjY2Vzc0tleXMiLCJyZXZva2VBY2Nlc3NLZXlzIiwidHJhY2VJZCIsInNwYW5JZCIsIm9wZXJhdGlvbk5hbWUiLCJ0cmFjZXIiLCJzcGFuIiwiX3N0YXJ0SW50ZXJuYWxTcGFuIiwiY3R4IiwiZXh0cmFjdCIsIkZPUk1BVF9URVhUX01BUCIsIkRhdGUiLCJub3ciLCJzdGFydFNwYW4iLCJmIiwicGFyZW50U3BhbiIsImNoaWxkT2YiLCJzZXRUYWciLCJUYWdzIiwiU1BBTl9LSU5EIiwiZmluaXNoIiwibG9nIiwiZXZlbnQiLCJwYXlsb2FkIiwiY2xpZW50Iiwic2V0RGF0YSIsIlRPTkVycm9yU291cmNlIiwiQ0xJRU5UIiwiTk9ERSIsIlRPTkVycm9yQ29kZSIsIkNMSUVOVF9ET0VTX05PVF9DT05GSUdVUkVEIiwiU0VORF9OT0RFX1JFUVVFU1RfRkFJTEVEIiwiTUVTU0FHRV9BTFJFQURZX0VYUElSRUQiLCJSVU5fTE9DQUxfQUNDT1VOVF9ET0VTX05PVF9FWElTVFMiLCJXQUlUX0ZPUl9USU1FT1VUIiwiSU5URVJOQUxfRVJST1IiLCJRVUVSWV9GQUlMRUQiLCJNRVNTQUdFX0VYUElSRUQiLCJTRVJWRVJfRE9FU05UX1NVUFBPUlRfQUdHUkVHQVRJT05TIiwiSU5WQUxJRF9DT05TIiwiQUREUkVTU19SRVFVSVJFRF9GT1JfUlVOX0xPQ0FMIiwiTkVUV09SS19TSUxFTlQiLCJUUkFOU0FDVElPTl9MQUciLCJUUkFOU0FDVElPTl9XQUlUX1RJTUVPVVQiLCJDTE9DS19PVVRfT0ZfU1lOQyIsIkFDQ09VTlRfTUlTU0lORyIsIkFDQ09VTlRfQ09ERV9NSVNTSU5HIiwiQUNDT1VOVF9CQUxBTkNFX1RPT19MT1ciLCJBQ0NPVU5UX0ZST1pFTl9PUl9ERUxFVEVEIiwiQ09OVFJBQ1RfRVhFQ1VUSU9OX0ZBSUxFRCIsIlFVRVJZX0ZPUkNJQkxZX0FCT1JURUQiLCJUT05Db250cmFjdEV4aXRDb2RlIiwiUkVQTEFZX1BST1RFQ1RJT04iLCJOT19HQVMiLCJUT05DbGllbnRFcnJvciIsImNvZGUiLCJtZXNzYWdlIiwic291cmNlIiwiZXJyb3IiLCJleGl0Q29kZSIsImV4aXRfY29kZSIsImlzQ29udHJhY3RFcnJvciIsIm9yaWdpbmFsX2Vycm9yIiwiaXNNZXNzYWdlRXhwaXJlZCIsInJlc3BvbnNlVGV4dCIsImZ1bmN0aW9uTmFtZSIsImFkZHJlc3MiLCJlcnJvcnMiLCJtYXAiLCJ4IiwidG9TdHJpbmciLCJqb2luIiwidGltZSIsInRvSVNPU3RyaW5nIiwic2VuZGluZ190aW1lIiwiZm9ybWF0VGltZSIsImV4cGlyYXRpb25fdGltZSIsImV4cGlyZSIsImJsb2NrX3RpbWUiLCJiYWxhbmNlIiwid29ya2NoYWluIiwid29ya2NoYWluTmFtZSIsImlzQ2xpZW50RXJyb3IiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7OztBQUtBOztBQWNBOztBQUNBOztBQUNBOztBQUVBOztBQU9BOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBcUJBOzs7OztJQUthQSxTOzs7K0JBQ1NDLGMsRUFBbUM7QUFDakRELE1BQUFBLFNBQVMsQ0FBQ0MsY0FBVixHQUEyQkEsY0FBM0I7QUFDSCxLLENBR0Q7Ozs7QUFTQSx1QkFBYztBQUFBOztBQUFBOztBQUFBOztBQUFBOztBQUFBOztBQUFBOztBQUFBOztBQUFBOztBQUFBOztBQUNWLFNBQUtDLE9BQUwsR0FBZSxJQUFJQyxHQUFKLEVBQWY7QUFDQSxTQUFLQyxNQUFMLEdBQWMsS0FBS0MsU0FBTCxDQUFlQywyQkFBZixDQUFkO0FBQ0EsU0FBS0MsTUFBTCxHQUFjLEtBQUtGLFNBQUwsQ0FBZUcsMkJBQWYsQ0FBZDtBQUNBLFNBQUtDLFNBQUwsR0FBaUIsS0FBS0osU0FBTCxDQUFlSyw4QkFBZixDQUFqQjtBQUNBLFNBQUtDLFFBQUwsR0FBZ0IsS0FBS04sU0FBTCxDQUFlTyw0QkFBZixDQUFoQjtBQUNBLFNBQUtDLE9BQUwsR0FBZSxLQUFLRixRQUFwQjtBQUNB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QU8sSUFBSTFCLGNBQUosQ0FDSHpCLFlBQVksQ0FBQ1ksY0FEViw0QkFFZXdDLGFBRmYsZ0JBR0h6SCxJQUhHLENBQVA7QUFLSDs7O3NDQUdHZ0csTyxFQUNBaEcsSSxFQUNGO0FBQ0UsYUFBTyxJQUFJOEYsY0FBSixDQUFtQnpCLFlBQVksQ0FBQ1ksY0FBaEMsRUFBZ0RlLE9BQWhELEVBQXlEaEcsSUFBekQsQ0FBUDtBQUNIOzs7eUNBRTJCQSxJLEVBQW9CO0FBQzVDLGFBQU8sSUFBSThGLGNBQUosQ0FDSHpCLFlBQVksQ0FBQ3FCLHNCQURWLEVBRUgsZ0RBRkcsRUFHSDFGLElBSEcsQ0FBUDtBQUtIOzs7cUNBRXVCa0csSyxFQUFxQjtBQUN6QyxhQUFPSixjQUFjLENBQUM0QixhQUFmLENBQTZCeEIsS0FBN0IsRUFBb0M3QixZQUFZLENBQUNRLGVBQWpELENBQVA7QUFDSDs7O3FDQUV1QnFCLEssRUFBcUI7QUFDekMsYUFBT0osY0FBYyxDQUFDNEIsYUFBZixDQUE2QnhCLEtBQTdCLEVBQW9DN0IsWUFBWSxDQUFDSyxnQkFBakQsQ0FBUDtBQUNIOzs7Ozs7OztnQkFsU1FvQixjLFlBQ081QixjOztnQkFEUDRCLGMsVUFFS3pCLFkiLCJzb3VyY2VzQ29udGVudCI6WyIvKlxuICogQ29weXJpZ2h0IDIwMTgtMjAyMCBUT04gREVWIFNPTFVUSU9OUyBMVEQuXG4gKi9cbi8vIEBmbG93XG5cbmltcG9ydCB7XG4gICAgVGFncywgU3BhbiwgU3BhbkNvbnRleHQsIEZPUk1BVF9URVhUX01BUCxcbn0gZnJvbSAnb3BlbnRyYWNpbmcnO1xuaW1wb3J0IHR5cGUge1xuICAgIElUT05DbGllbnQsXG4gICAgVE9OQWNjZXNzS2V5c01hbmFnZW1lbnRQYXJhbXMsXG4gICAgVE9OQ29uZmlnRGF0YSxcbiAgICBUT05Db250cmFjdHMsXG4gICAgVE9OQ3J5cHRvLCBUT05NZXNzYWdlUHJvY2Vzc2luZ1N0YXRlLFxuICAgIFRPTlF1ZXJpZXMsXG4gICAgVE9OUmVnaXN0ZXJBY2Nlc3NLZXlzUGFyYW1zLFxuICAgIFRPTlJldm9rZUFjY2Vzc0tleXNQYXJhbXMsXG59IGZyb20gJy4uL3R5cGVzJztcblxuaW1wb3J0IFRPTkNvbmZpZ01vZHVsZSBmcm9tICcuL21vZHVsZXMvVE9OQ29uZmlnTW9kdWxlJztcbmltcG9ydCBUT05Db250cmFjdHNNb2R1bGUgZnJvbSAnLi9tb2R1bGVzL1RPTkNvbnRyYWN0c01vZHVsZSc7XG5pbXBvcnQgVE9OQ3J5cHRvTW9kdWxlIGZyb20gJy4vbW9kdWxlcy9UT05DcnlwdG9Nb2R1bGUnO1xuLyogZXNsaW50LWRpc2FibGUgY2xhc3MtbWV0aG9kcy11c2UtdGhpcywgbm8tdXNlLWJlZm9yZS1kZWZpbmUgKi9cbmltcG9ydCBUT05RdWVyaWVzTW9kdWxlIGZyb20gJy4vbW9kdWxlcy9UT05RdWVyaWVzTW9kdWxlJztcblxuaW1wb3J0IHR5cGUge1xuICAgIFRPTkNsaWVudENvcmVMaWJyYXJ5LFxuICAgIFRPTkNsaWVudENvcmVCcmlkZ2UsXG4gICAgVE9OTW9kdWxlQ29udGV4dCwgVE9OQ2xpZW50SW5mbywgVE9ORXJyb3JEYXRhLFxufSBmcm9tICcuL1RPTk1vZHVsZSc7XG5pbXBvcnQgeyBUT05Nb2R1bGUgfSBmcm9tICcuL1RPTk1vZHVsZSc7XG5cbi8qKlxuICogSmF2YVNjcmlwdCBwbGF0Zm9ybSBzcGVjaWZpYyBjb25maWd1cmF0aW9uXG4gKi9cbnR5cGUgVE9OQ2xpZW50UGxhdGZvcm0gPSB7XG4gICAgLyoqXG4gICAgICogUGxhdGZvcm0gc3BlY2lmaWMgYGZldGNoYCBmdW5jdGlvblxuICAgICAqL1xuICAgIGZldGNoOiBhbnksXG4gICAgLyoqXG4gICAgICogUGxhdGZvcm0gc3BlY2lmaWMgYFdlYlNvY2tldGAgaW1wbGVtZW50YXRpb25cbiAgICAgKiBUaGlzIGltcGxlbWVudGF0aW9uIG11c3QgY29uZm9ybXMgdG8gVzNDIFdlYlNvY2tldFxuICAgICAqL1xuICAgIFdlYlNvY2tldDogYW55LFxuICAgIC8qKlxuICAgICAqIFJlcXVlc3QgY3JlYXRpb24gb2YgdGhlIGNsaWVudCBjb3JlXG4gICAgICovXG4gICAgY3JlYXRlTGlicmFyeTogKCkgPT4gUHJvbWlzZTxUT05DbGllbnRDb3JlTGlicmFyeT4sXG59O1xuXG4vKipcbiAqIE1haW4gb2JqZWN0IHByb3ZpZGVkIGZ1bmN0aW9uYWxpdHkgb2YgdGhlIFRPTiBDbGllbnQgTGlicmFyeVxuICogRWFjaCBpbnN0YW5jZSBvZiBUT05DbGllbnQgaGFzIG93biBzZXQgb2YgVE9OIENsaWVudCBtb2R1bGVzXG4gKiBhbmQgaGFzIG93biBwcmVjb25maWd1cmVkIGNsaWVudCBjb250ZXh0XG4gKi9cbmV4cG9ydCBjbGFzcyBUT05DbGllbnQgaW1wbGVtZW50cyBUT05Nb2R1bGVDb250ZXh0LCBJVE9OQ2xpZW50IHtcbiAgICBzdGF0aWMgc2V0TGlicmFyeShjbGllbnRQbGF0Zm9ybTogVE9OQ2xpZW50UGxhdGZvcm0pIHtcbiAgICAgICAgVE9OQ2xpZW50LmNsaWVudFBsYXRmb3JtID0gY2xpZW50UGxhdGZvcm07XG4gICAgfVxuXG5cbiAgICAvLyBQdWJsaWNcbiAgICBjb25maWc6IFRPTkNvbmZpZ01vZHVsZTtcbiAgICBjcnlwdG86IFRPTkNyeXB0bztcbiAgICBjb250cmFjdHM6IFRPTkNvbnRyYWN0cztcbiAgICBxdWVyaWVzOiBUT05RdWVyaWVzO1xuICAgIF9xdWVyaWVzOiBUT05RdWVyaWVzTW9kdWxlO1xuICAgIF9jb250ZXh0OiBudW1iZXI7XG4gICAgX2NvcmVCcmlkZ2U6ID9UT05DbGllbnRDb3JlQnJpZGdlO1xuXG4gICAgY29uc3RydWN0b3IoKSB7XG4gICAgICAgIHRoaXMubW9kdWxlcyA9IG5ldyBNYXAoKTtcbiAgICAgICAgdGhpcy5jb25maWcgPSB0aGlzLmdldE1vZHVsZShUT05Db25maWdNb2R1bGUpO1xuICAgICAgICB0aGlzLmNyeXB0byA9IHRoaXMuZ2V0TW9kdWxlKFRPTkNyeXB0b01vZHVsZSk7XG4gICAgICAgIHRoaXMuY29udHJhY3RzID0gdGhpcy5nZXRNb2R1bGUoVE9OQ29udHJhY3RzTW9kdWxlKTtcbiAgICAgICAgdGhpcy5fcXVlcmllcyA9IHRoaXMuZ2V0TW9kdWxlKFRPTlF1ZXJpZXNNb2R1bGUpO1xuICAgICAgICB0aGlzLnF1ZXJpZXMgPSB0aGlzLl9xdWVyaWVzO1xuICAgICAgICB0aGlzLl9jb250ZXh0ID0gMDtcbiAgICAgICAgdGhpcy5fY29yZUJyaWRnZSA9IG51bGw7XG4gICAgfVxuXG4gICAgLyoqXG4gICAgICogQ29udmVuaWVudCB3YXkgdG8gY3JlYXRlIGNvbmZpZ3VyZWQgaW5zdGFuY2Ugb2YgdGhlIFRPTiBDbGllbnRcbiAgICAgKiBAcGFyYW0ge1RPTkNvbmZpZ0RhdGF9IGNvbmZpZ1xuICAgICAqIEByZXR1cm4ge1Byb21pc2U8VE9OQ2xpZW50Pn1cbiAgICAgKi9cbiAgICBzdGF0aWMgYXN5bmMgY3JlYXRlKGNvbmZpZzogVE9OQ29uZmlnRGF0YSk6IFByb21pc2U8VE9OQ2xpZW50PiB7XG4gICAgICAgIGNvbnN0IGNsaWVudCA9IG5ldyBUT05DbGllbnQoKTtcbiAgICAgICAgY2xpZW50LmNvbmZpZy5zZXREYXRhKGNvbmZpZyk7XG4gICAgICAgIGF3YWl0IGNsaWVudC5zZXR1cCgpO1xuICAgICAgICByZXR1cm4gY2xpZW50O1xuICAgIH1cblxuICAgIC8qKlxuICAgICAqIFNldCB1cCB0aGUgY2xpZW50IGluc3RhbmNlXG4gICAgICogQHJldHVybiB7UHJvbWlzZTx2b2lkPn1cbiAgICAgKi9cbiAgICBhc3luYyBzZXR1cCgpOiBQcm9taXNlPHZvaWQ+IHtcbiAgICAgICAgYXdhaXQgdGhpcy5nZXRDb3JlQnJpZGdlKCk7XG4gICAgICAgIGNvbnN0IG1vZHVsZXM6IFRPTk1vZHVsZVtdID0gWy4uLnRoaXMubW9kdWxlcy52YWx1ZXMoKV07XG4gICAgICAgIGZvciAoY29uc3QgbW9kdWxlIG9mIG1vZHVsZXMpIHtcbiAgICAgICAgICAgIGF3YWl0IG1vZHVsZS5zZXR1cCgpO1xuICAgICAgICB9XG4gICAgfVxuXG4gICAgLyoqXG4gICAgICogVGVhciBkb3duIHRoaXMgY2xpZW50IGluc3RhbmNlLlxuICAgICAqIE5vdGUgdGhhdCBhZnRlciB5b3UgaGF2ZSBjYWxsZWQgdGhpcyBtZXRob2QgYWxsIGZ1dHVyZSB1c2Ugb2YgdGhpcyBpbnN0YW5jZSB3aWxsIGZhaWxcbiAgICAgKiBAcmV0dXJuIHtQcm9taXNlPHZvaWQ+fVxuICAgICAqL1xuICAgIGFzeW5jIGNsb3NlKCk6IFByb21pc2U8dm9pZD4ge1xuICAgICAgICBhd2FpdCB0aGlzLnF1ZXJpZXMuY2xvc2UoKTtcbiAgICAgICAgY29uc3QgbGlicmFyeSA9IFRPTkNsaWVudC5jb3JlTGlicmFyeTtcbiAgICAgICAgaWYgKHRoaXMuX2NvbnRleHQgPiAwICYmIGxpYnJhcnkgIT09IG51bGwgJiYgbGlicmFyeSAhPT0gdW5kZWZpbmVkKSB7XG4gICAgICAgICAgICBjb25zdCBjb250ZXh0ID0gdGhpcy5fY29udGV4dDtcbiAgICAgICAgICAgIHRoaXMuX2NvcmVCcmlkZ2UgPSBudWxsO1xuICAgICAgICAgICAgdGhpcy5fY29udGV4dCA9IDA7XG4gICAgICAgICAgICBhd2FpdCBuZXcgUHJvbWlzZShyZXNvbHZlID0+IGxpYnJhcnkuY29yZURlc3Ryb3lDb250ZXh0KGNvbnRleHQsIHJlc29sdmUpKTtcbiAgICAgICAgfVxuICAgIH1cblxuICAgIC8vIFRPTk1vZHVsZUNvbnRleHRcblxuICAgIGFzeW5jIGNvbXBsZXRlRXJyb3JEYXRhKGRhdGE/OiB7IFtzdHJpbmddOiBhbnkgfSk6IFByb21pc2U8VE9ORXJyb3JEYXRhPiB7XG4gICAgICAgIHJldHVybiB7XG4gICAgICAgICAgICAuLi5kYXRhLFxuICAgICAgICAgICAgY29yZV92ZXJzaW9uOiBhd2FpdCB0aGlzLmNvbmZpZy5nZXRWZXJzaW9uKCksXG4gICAgICAgICAgICBjb25maWdfc2VydmVyOiB0aGlzLmNvbmZpZy5nZXRDb25maWdTZXJ2ZXIoKSxcbiAgICAgICAgICAgIHF1ZXJ5X3VybDogdGhpcy5fcXVlcmllcy5nZXRRdWVyeVVybCgpLFxuICAgICAgICB9O1xuICAgIH1cblxuICAgIGFzeW5jIHRyeUNyZWF0ZUxpYnJhcnkoKSB7XG4gICAgICAgIGNvbnN0IHBsYXRmb3JtID0gVE9OQ2xpZW50LmNsaWVudFBsYXRmb3JtO1xuICAgICAgICBpZiAocGxhdGZvcm0gPT09IG51bGwgfHwgcGxhdGZvcm0gPT09IHVuZGVmaW5lZCkge1xuICAgICAgICAgICAgcmV0dXJuIG51bGw7XG4gICAgICAgIH1cbiAgICAgICAgVE9OQ2xpZW50LmNvcmVMaWJyYXJ5ID0gYXdhaXQgcGxhdGZvcm0uY3JlYXRlTGlicmFyeSgpO1xuICAgICAgICByZXR1cm4gVE9OQ2xpZW50LmNvcmVMaWJyYXJ5O1xuICAgIH1cblxuICAgIGFzeW5jIHRyeUNyZWF0ZUNvcmVCcmlkZ2UoKSB7XG4gICAgICAgIGNvbnN0IGxpYnJhcnkgPSBUT05DbGllbnQuY29yZUxpYnJhcnkgfHwgYXdhaXQgdGhpcy50cnlDcmVhdGVMaWJyYXJ5KCk7XG4gICAgICAgIGlmICghbGlicmFyeSkge1xuICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICB9XG4gICAgICAgIGlmIChsaWJyYXJ5LmNvcmVDcmVhdGVDb250ZXh0KSB7XG4gICAgICAgICAgICB0aGlzLl9jb250ZXh0ID0gYXdhaXQgbmV3IFByb21pc2UoKHJlc29sdmUpID0+IGxpYnJhcnkuY29yZUNyZWF0ZUNvbnRleHQocmVzb2x2ZSkpO1xuICAgICAgICAgICAgdGhpcy5fY29yZUJyaWRnZSA9IHtcbiAgICAgICAgICAgICAgICByZXF1ZXN0OiAoXG4gICAgICAgICAgICAgICAgICAgIG1ldGhvZDogc3RyaW5nLFxuICAgICAgICAgICAgICAgICAgICBwYXJhbXNKc29uOiBzdHJpbmcsXG4gICAgICAgICAgICAgICAgICAgIG9uUmVzdWx0OiAocmVzdWx0SnNvbjogc3RyaW5nLCBlcnJvckpzb246IHN0cmluZykgPT4gdm9pZCxcbiAgICAgICAgICAgICAgICApOiB2b2lkID0+IHtcbiAgICAgICAgICAgICAgICAgICAgaWYgKFRPTkNsaWVudC5jb3JlTGlicmFyeSkge1xuICAgICAgICAgICAgICAgICAgICAgICAgVE9OQ2xpZW50LmNvcmVMaWJyYXJ5LmNvcmVSZXF1ZXN0KFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMuX2NvbnRleHQsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgbWV0aG9kLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHBhcmFtc0pzb24sXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgb25SZXN1bHQsXG4gICAgICAgICAgICAgICAgICAgICAgICApO1xuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgIH07XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICB0aGlzLl9jb3JlQnJpZGdlID0gbGlicmFyeTtcbiAgICAgICAgfVxuICAgIH1cblxuICAgIGFzeW5jIGdldENvcmVCcmlkZ2UoKTogUHJvbWlzZTw/VE9OQ2xpZW50Q29yZUJyaWRnZT4ge1xuICAgICAgICBpZiAoIXRoaXMuX2NvcmVCcmlkZ2UpIHtcbiAgICAgICAgICAgIGF3YWl0IHRoaXMudHJ5Q3JlYXRlQ29yZUJyaWRnZSgpO1xuICAgICAgICB9XG4gICAgICAgIHJldHVybiB0aGlzLl9jb3JlQnJpZGdlO1xuICAgIH1cblxuICAgIGdldE1vZHVsZTxUPihNb2R1bGVDbGFzczogdHlwZW9mIFRPTk1vZHVsZSk6IFQge1xuICAgICAgICBjb25zdCBuYW1lID0gTW9kdWxlQ2xhc3MubW9kdWxlTmFtZTtcbiAgICAgICAgY29uc3QgZXhpc3RpbmdNb2R1bGUgPSB0aGlzLm1vZHVsZXMuZ2V0KG5hbWUpO1xuICAgICAgICBpZiAoZXhpc3RpbmdNb2R1bGUpIHtcbiAgICAgICAgICAgIHJldHVybiAoZXhpc3RpbmdNb2R1bGU6IGFueSk7XG4gICAgICAgIH1cbiAgICAgICAgY29uc3QgbW9kdWxlID0gbmV3IE1vZHVsZUNsYXNzKHRoaXMpO1xuICAgICAgICB0aGlzLm1vZHVsZXMuc2V0KG5hbWUsIG1vZHVsZSk7XG4gICAgICAgIHJldHVybiAobW9kdWxlOiBhbnkpO1xuICAgIH1cblxuICAgIHNlcnZlclRpbWVEZWx0YSgpOiBQcm9taXNlPG51bWJlcj4ge1xuICAgICAgICByZXR1cm4gdGhpcy5fcXVlcmllcy5zZXJ2ZXJUaW1lRGVsdGEoKTtcbiAgICB9XG5cbiAgICBzZXJ2ZXJOb3coKTogUHJvbWlzZTxudW1iZXI+IHtcbiAgICAgICAgcmV0dXJuIHRoaXMuX3F1ZXJpZXMuc2VydmVyTm93KCk7XG4gICAgfVxuXG4gICAgYXN5bmMgZ2V0TWFuYWdlbWVudEFjY2Vzc0tleSgpOiBQcm9taXNlPHN0cmluZz4ge1xuICAgICAgICBjb25zdCByZXN1bHQgPSBhd2FpdCB0aGlzLl9xdWVyaWVzLnF1ZXJ5KCdxdWVyeXtnZXRNYW5hZ2VtZW50QWNjZXNzS2V5fScpO1xuICAgICAgICByZXR1cm4gcmVzdWx0LmRhdGEuZ2V0TWFuYWdlbWVudEFjY2Vzc0tleTtcbiAgICB9XG5cblxuICAgIGFzeW5jIF9yZXNvbHZlU2lnbmVkTWFuYWdlbWVudEFjY2Vzc0tleShcbiAgICAgICAgcGFyYW1zOiBUT05BY2Nlc3NLZXlzTWFuYWdlbWVudFBhcmFtcyxcbiAgICApOiBQcm9taXNlPHN0cmluZz4ge1xuICAgICAgICBpZiAocGFyYW1zLnNpZ25lZE1hbmFnZW1lbnRBY2Nlc3NLZXkpIHtcbiAgICAgICAgICAgIHJldHVybiBwYXJhbXMuc2lnbmVkTWFuYWdlbWVudEFjY2Vzc0tleTtcbiAgICAgICAgfVxuICAgICAgICBjb25zdCBzaWduS2V5cyA9IHBhcmFtcy5hY2NvdW50S2V5cztcbiAgICAgICAgaWYgKHNpZ25LZXlzKSB7XG4gICAgICAgICAgICBjb25zdCBtYW5hZ2VtZW50QWNjZXNzS2V5ID0gYXdhaXQgdGhpcy5nZXRNYW5hZ2VtZW50QWNjZXNzS2V5KCk7XG4gICAgICAgICAgICByZXR1cm4gdGhpcy5jcnlwdG8ubmFjbFNpZ24oXG4gICAgICAgICAgICAgICAgeyB0ZXh0OiBtYW5hZ2VtZW50QWNjZXNzS2V5IH0sXG4gICAgICAgICAgICAgICAgYCR7c2lnbktleXMuc2VjcmV0fSR7c2lnbktleXMucHVibGljfWAsXG4gICAgICAgICAgICAgICAgJ0hleCcsXG4gICAgICAgICAgICApO1xuICAgICAgICB9XG4gICAgICAgIHJldHVybiAnJztcbiAgICB9XG5cbiAgICBhc3luYyByZWdpc3RlckFjY2Vzc0tleXMoXG4gICAgICAgIHBhcmFtczogVE9OUmVnaXN0ZXJBY2Nlc3NLZXlzUGFyYW1zLFxuICAgICk6IFByb21pc2U8bnVtYmVyPiB7XG4gICAgICAgIGNvbnN0IHNpZ25lZE1hbmFnZW1lbnRBY2Nlc3NLZXkgPSBhd2FpdCB0aGlzLl9yZXNvbHZlU2lnbmVkTWFuYWdlbWVudEFjY2Vzc0tleShwYXJhbXMpO1xuICAgICAgICBjb25zdCByZXN1bHQgPSBhd2FpdCB0aGlzLl9xdWVyaWVzLm11dGF0aW9uKFxuICAgICAgICAgICAgYG11dGF0aW9uIHJlZ2lzdGVyQWNjZXNzS2V5cygkYWNjb3VudDogU3RyaW5nLCAka2V5czogW0FjY2Vzc0tleV0sICRzaWduZWRNYW5hZ2VtZW50QWNjZXNzS2V5OiBTdHJpbmcpIHtcbiAgICAgICAgICAgICAgICAgICAgcmVnaXN0ZXJBY2Nlc3NLZXlzKGFjY291bnQ6ICRhY2NvdW50LCBrZXlzOiAka2V5cywgc2lnbmVkTWFuYWdlbWVudEFjY2Vzc0tleTogJHNpZ25lZE1hbmFnZW1lbnRBY2Nlc3NLZXkpXG4gICAgICAgICAgICAgICAgfWAsIHtcbiAgICAgICAgICAgICAgICBhY2NvdW50OiBwYXJhbXMuYWNjb3VudCxcbiAgICAgICAgICAgICAgICBrZXlzOiBwYXJhbXMua2V5cyxcbiAgICAgICAgICAgICAgICBzaWduZWRNYW5hZ2VtZW50QWNjZXNzS2V5LFxuICAgICAgICAgICAgfSxcbiAgICAgICAgKTtcbiAgICAgICAgcmV0dXJuIHJlc3VsdC5kYXRhLnJlZ2lzdGVyQWNjZXNzS2V5cztcbiAgICB9XG5cbiAgICBhc3luYyByZXZva2VBY2Nlc3NLZXlzKFxuICAgICAgICBwYXJhbXM6IFRPTlJldm9rZUFjY2Vzc0tleXNQYXJhbXMsXG4gICAgKTogUHJvbWlzZTxudW1iZXI+IHtcbiAgICAgICAgY29uc3Qgc2lnbmVkTWFuYWdlbWVudEFjY2Vzc0tleSA9IGF3YWl0IHRoaXMuX3Jlc29sdmVTaWduZWRNYW5hZ2VtZW50QWNjZXNzS2V5KHBhcmFtcyk7XG4gICAgICAgIGNvbnN0IHJlc3VsdCA9IGF3YWl0IHRoaXMuX3F1ZXJpZXMubXV0YXRpb24oXG4gICAgICAgICAgICBgbXV0YXRpb24gcmV2b2tlQWNjZXNzS2V5cygkYWNjb3VudDogU3RyaW5nLCAka2V5czogW1N0cmluZ10sICRzaWduZWRNYW5hZ2VtZW50QWNjZXNzS2V5OiBTdHJpbmcpIHtcbiAgICAgICAgICAgICAgICAgICAgcmV2b2tlQWNjZXNzS2V5cyhhY2NvdW50OiAkYWNjb3VudCwga2V5czogJGtleXMsIHNpZ25lZE1hbmFnZW1lbnRBY2Nlc3NLZXk6ICRzaWduZWRNYW5hZ2VtZW50QWNjZXNzS2V5KVxuICAgICAgICAgICAgICAgIH1gLCB7XG4gICAgICAgICAgICAgICAgYWNjb3VudDogcGFyYW1zLmFjY291bnQsXG4gICAgICAgICAgICAgICAga2V5czogcGFyYW1zLmtleXMsXG4gICAgICAgICAgICAgICAgc2lnbmVkTWFuYWdlbWVudEFjY2Vzc0tleSxcbiAgICAgICAgICAgIH0sXG4gICAgICAgICk7XG4gICAgICAgIHJldHVybiByZXN1bHQuZGF0YS5yZXZva2VBY2Nlc3NLZXlzO1xuICAgIH1cblxuICAgIHN0YXJ0Um9vdFNwYW4odHJhY2VJZDogc3RyaW5nLCBzcGFuSWQ6IHN0cmluZywgb3BlcmF0aW9uTmFtZTogc3RyaW5nKTogU3BhbiB7XG4gICAgICAgIGNvbnN0IHRyYWNlciA9IHRoaXMuY29uZmlnLnRyYWNlcjtcbiAgICAgICAgbGV0IHNwYW46ID9TcGFuID0gbnVsbDtcbiAgICAgICAgaWYgKHRyYWNlci5fc3RhcnRJbnRlcm5hbFNwYW4pIHtcbiAgICAgICAgICAgIHRyeSB7XG4gICAgICAgICAgICAgICAgY29uc3QgY3R4ID0gdHJhY2VyLmV4dHJhY3QoRk9STUFUX1RFWFRfTUFQLCB7XG4gICAgICAgICAgICAgICAgICAgICd1YmVyLXRyYWNlLWlkJzogYCR7dHJhY2VJZH06JHtzcGFuSWR9OjA6MWAsXG4gICAgICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICAgICAgaWYgKGN0eCkge1xuICAgICAgICAgICAgICAgICAgICBzcGFuID0gdGhpcy5jb25maWcudHJhY2VyLl9zdGFydEludGVybmFsU3BhbihcbiAgICAgICAgICAgICAgICAgICAgICAgIGN0eCxcbiAgICAgICAgICAgICAgICAgICAgICAgIG9wZXJhdGlvbk5hbWUsXG4gICAgICAgICAgICAgICAgICAgICAgICBEYXRlLm5vdygpLCAvLyBzdGFydFRpbWVcbiAgICAgICAgICAgICAgICAgICAgICAgIHVuZGVmaW5lZCwgLy8gdXNlclRhZ3NcbiAgICAgICAgICAgICAgICAgICAgICAgIHt9LCAvLyBpbnRlcm5hbFRhZ3NcbiAgICAgICAgICAgICAgICAgICAgICAgIFtdLCAvLyByZWZlcmVuY2VzXG4gICAgICAgICAgICAgICAgICAgICAgICBmYWxzZSwgLy8gaGFzVmFsaWRQYXJlbnRcbiAgICAgICAgICAgICAgICAgICAgICAgIGZhbHNlLCAvLyBpc1JwY1NlcnZlclxuICAgICAgICAgICAgICAgICAgICApO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH0gY2F0Y2gge1xuICAgICAgICAgICAgICAgIC8vIHRyYWNlciBjYW4ndCBjcmVhdGUgbWVzc2FnZSBzcGFuIHVzaW5nIHByaXZhdGUgbWV0aG9kLFxuICAgICAgICAgICAgICAgIC8vIHNvIHdlIGFyZSBmYWxsYmFjayB0byBjcmVhdGUgc3BhbiB1c2luZyByZWd1bGFyIG1ldGhvZFxuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICAgIHJldHVybiBzcGFuIHx8IHRyYWNlci5zdGFydFNwYW4ob3BlcmF0aW9uTmFtZSk7XG4gICAgfVxuXG4gICAgYXN5bmMgdHJhY2U8VD4oXG4gICAgICAgIG5hbWU6IHN0cmluZyxcbiAgICAgICAgZjogKHNwYW46IFNwYW4pID0+IFByb21pc2U8VD4sXG4gICAgICAgIHBhcmVudFNwYW4/OiAoU3BhbiB8IFNwYW5Db250ZXh0KSxcbiAgICApOiBQcm9taXNlPFQ+IHtcbiAgICAgICAgY29uc3Qgc3BhbiA9IHRoaXMuY29uZmlnLnRyYWNlci5zdGFydFNwYW4obmFtZSwgeyBjaGlsZE9mOiBwYXJlbnRTcGFuIH0pO1xuICAgICAgICB0cnkge1xuICAgICAgICAgICAgc3Bhbi5zZXRUYWcoVGFncy5TUEFOX0tJTkQsICdjbGllbnQnKTtcbiAgICAgICAgICAgIGNvbnN0IHJlc3VsdCA9IGF3YWl0IGYoc3Bhbik7XG4gICAgICAgICAgICBpZiAocmVzdWx0ICE9PSB1bmRlZmluZWQpIHtcbiAgICAgICAgICAgICAgICBzcGFuLnNldFRhZygncmVzdWx0JywgcmVzdWx0KTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIHNwYW4uZmluaXNoKCk7XG4gICAgICAgICAgICByZXR1cm4gcmVzdWx0O1xuICAgICAgICB9IGNhdGNoIChlcnJvcikge1xuICAgICAgICAgICAgc3Bhbi5sb2coe1xuICAgICAgICAgICAgICAgIGV2ZW50OiAnZmFpbGVkJyxcbiAgICAgICAgICAgICAgICBwYXlsb2FkOiBlcnJvcixcbiAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgc3Bhbi5maW5pc2goKTtcbiAgICAgICAgICAgIHRocm93IGVycm9yO1xuICAgICAgICB9XG4gICAgfVxuXG4gICAgLy8gSW50ZXJuYWxzXG5cbiAgICBzdGF0aWMgY2xpZW50UGxhdGZvcm06ID9UT05DbGllbnRQbGF0Zm9ybSA9IG51bGw7XG4gICAgc3RhdGljIGNvcmVMaWJyYXJ5OiA/VE9OQ2xpZW50Q29yZUxpYnJhcnkgPSBudWxsO1xuXG4gICAgbW9kdWxlczogTWFwPHN0cmluZywgVE9OTW9kdWxlPjtcbn1cblxuXG5leHBvcnQgY29uc3QgVE9ORXJyb3JTb3VyY2UgPSB7XG4gICAgQ0xJRU5UOiAnY2xpZW50JyxcbiAgICBOT0RFOiAnbm9kZScsXG59O1xuXG5leHBvcnQgY29uc3QgVE9ORXJyb3JDb2RlID0ge1xuICAgIENMSUVOVF9ET0VTX05PVF9DT05GSUdVUkVEOiAxMDAwLFxuICAgIFNFTkRfTk9ERV9SRVFVRVNUX0ZBSUxFRDogMTAwMSxcbiAgICBNRVNTQUdFX0FMUkVBRFlfRVhQSVJFRDogMTAwMSxcbiAgICBSVU5fTE9DQUxfQUNDT1VOVF9ET0VTX05PVF9FWElTVFM6IDEwMDIsXG4gICAgV0FJVF9GT1JfVElNRU9VVDogMTAwMyxcbiAgICBJTlRFUk5BTF9FUlJPUjogMTAwNCxcbiAgICBRVUVSWV9GQUlMRUQ6IDEwMDUsXG4gICAgTUVTU0FHRV9FWFBJUkVEOiAxMDA2LFxuICAgIFNFUlZFUl9ET0VTTlRfU1VQUE9SVF9BR0dSRUdBVElPTlM6IDEwMDcsXG4gICAgSU5WQUxJRF9DT05TOiAxMDA4LFxuICAgIEFERFJFU1NfUkVRVUlSRURfRk9SX1JVTl9MT0NBTDogMTAwOSxcbiAgICBORVRXT1JLX1NJTEVOVDogMTAxMCxcbiAgICBUUkFOU0FDVElPTl9MQUc6IDEwMTEsXG4gICAgVFJBTlNBQ1RJT05fV0FJVF9USU1FT1VUOiAxMDEyLFxuICAgIENMT0NLX09VVF9PRl9TWU5DOiAxMDEzLFxuICAgIEFDQ09VTlRfTUlTU0lORzogMTAxNCxcbiAgICBBQ0NPVU5UX0NPREVfTUlTU0lORzogMTAxNSxcbiAgICBBQ0NPVU5UX0JBTEFOQ0VfVE9PX0xPVzogMTAxNixcbiAgICBBQ0NPVU5UX0ZST1pFTl9PUl9ERUxFVEVEOiAxMDE3LFxuXG4gICAgLy8gQ29udHJhY3RzXG5cbiAgICBDT05UUkFDVF9FWEVDVVRJT05fRkFJTEVEOiAzMDI1LFxuXG4gICAgLy8gUXVlcmllc1xuXG4gICAgUVVFUllfRk9SQ0lCTFlfQUJPUlRFRDogNDAwNSxcbn07XG5cbmV4cG9ydCBjb25zdCBUT05Db250cmFjdEV4aXRDb2RlID0ge1xuICAgIFJFUExBWV9QUk9URUNUSU9OOiA1MixcbiAgICBNRVNTQUdFX0VYUElSRUQ6IDU3LFxuICAgIE5PX0dBUzogMTMsXG59O1xuXG5leHBvcnQgY2xhc3MgVE9OQ2xpZW50RXJyb3Ige1xuICAgIHN0YXRpYyBzb3VyY2UgPSBUT05FcnJvclNvdXJjZTtcbiAgICBzdGF0aWMgY29kZSA9IFRPTkVycm9yQ29kZTtcblxuICAgIG1lc3NhZ2U6IHN0cmluZztcbiAgICBzb3VyY2U6IHN0cmluZztcbiAgICBjb2RlOiBudW1iZXI7XG4gICAgZGF0YTogVE9ORXJyb3JEYXRhO1xuXG4gICAgY29uc3RydWN0b3IoXG4gICAgICAgIGNvZGU6IG51bWJlcixcbiAgICAgICAgbWVzc2FnZTogc3RyaW5nLFxuICAgICAgICBkYXRhOiBUT05FcnJvckRhdGEsXG4gICAgICAgIHNvdXJjZT86IHN0cmluZyxcbiAgICApIHtcbiAgICAgICAgdGhpcy5jb2RlID0gY29kZTtcbiAgICAgICAgdGhpcy5tZXNzYWdlID0gbWVzc2FnZTtcbiAgICAgICAgdGhpcy5kYXRhID0gZGF0YTtcbiAgICAgICAgdGhpcy5zb3VyY2UgPSBzb3VyY2UgfHwgVE9ORXJyb3JTb3VyY2UuQ0xJRU5UO1xuICAgIH1cblxuICAgIHN0YXRpYyBpc0NsaWVudEVycm9yKGVycm9yOiBhbnksIGNvZGU6IG51bWJlcik6IGJvb2xlYW4ge1xuICAgICAgICByZXR1cm4gKGVycm9yLnNvdXJjZSA9PT0gVE9ORXJyb3JTb3VyY2UuQ0xJRU5UKVxuICAgICAgICAgICAgJiYgKGVycm9yLmNvZGUgPT09IGNvZGUpO1xuICAgIH1cblxuICAgIHN0YXRpYyBpc05vZGVFcnJvcihlcnJvcjogYW55LCBjb2RlOiBudW1iZXIpOiBib29sZWFuIHtcbiAgICAgICAgcmV0dXJuIChlcnJvci5zb3VyY2UgPT09IFRPTkVycm9yU291cmNlLk5PREUpXG4gICAgICAgICAgICAmJiAoZXJyb3IuY29kZSA9PT0gY29kZSk7XG4gICAgfVxuXG4gICAgc3RhdGljIGlzQ29udHJhY3RFcnJvcihlcnJvcjogYW55LCBleGl0Q29kZTogbnVtYmVyKTogYm9vbGVhbiB7XG4gICAgICAgIHJldHVybiAoZXJyb3Iuc291cmNlID09PSBUT05FcnJvclNvdXJjZS5OT0RFKVxuICAgICAgICAgICAgJiYgKGVycm9yLmNvZGUgPT09IFRPTkVycm9yQ29kZS5DT05UUkFDVF9FWEVDVVRJT05fRkFJTEVEKVxuICAgICAgICAgICAgJiYgKGVycm9yLmRhdGEgJiYgZXJyb3IuZGF0YS5leGl0X2NvZGUgPT09IGV4aXRDb2RlKTtcbiAgICB9XG5cbiAgICBzdGF0aWMgaXNPcmlnaW5hbENvbnRyYWN0RXJyb3IoZXJyb3I6IGFueSwgZXhpdENvZGU6IG51bWJlcik6IGJvb2xlYW4ge1xuICAgICAgICByZXR1cm4gVE9OQ2xpZW50RXJyb3IuaXNDb250cmFjdEVycm9yKGVycm9yLCBleGl0Q29kZSlcbiAgICAgICAgICAgICYmICghZXJyb3IuZGF0YT8ub3JpZ2luYWxfZXJyb3IpO1xuICAgIH1cblxuICAgIHN0YXRpYyBpc1Jlc29sdmVkQ29udHJhY3RFcnJvckFmdGVyRXhwaXJlKGVycm9yOiBhbnksIGV4aXRDb2RlOiBudW1iZXIpOiBib29sZWFuIHtcbiAgICAgICAgcmV0dXJuIFRPTkNsaWVudEVycm9yLmlzQ29udHJhY3RFcnJvcihlcnJvciwgZXhpdENvZGUpXG4gICAgICAgICAgICAmJiAoZXJyb3IuZGF0YSAmJiBlcnJvci5kYXRhLm9yaWdpbmFsX2Vycm9yXG4gICAgICAgICAgICAgICAgJiYgVE9OQ2xpZW50RXJyb3IuaXNNZXNzYWdlRXhwaXJlZChlcnJvci5kYXRhLm9yaWdpbmFsX2Vycm9yKSk7XG4gICAgfVxuXG4gICAgc3RhdGljIGludGVybmFsRXJyb3IoXG4gICAgICAgIG1lc3NhZ2U6IHN0cmluZyxcbiAgICAgICAgZGF0YTogVE9ORXJyb3JEYXRhLFxuICAgICk6IFRPTkNsaWVudEVycm9yIHtcbiAgICAgICAgcmV0dXJuIG5ldyBUT05DbGllbnRFcnJvcihcbiAgICAgICAgICAgIFRPTkVycm9yQ29kZS5JTlRFUk5BTF9FUlJPUixcbiAgICAgICAgICAgIGBJbnRlcm5hbCBlcnJvcjogJHttZXNzYWdlfWAsXG4gICAgICAgICAgICBkYXRhLFxuICAgICAgICApO1xuICAgIH1cblxuICAgIHN0YXRpYyBpbnZhbGlkQ29ucyhkYXRhOiBUT05FcnJvckRhdGEpOiBUT05DbGllbnRFcnJvciB7XG4gICAgICAgIHJldHVybiBuZXcgVE9OQ2xpZW50RXJyb3IoXG4gICAgICAgICAgICBUT05FcnJvckNvZGUuSU5WQUxJRF9DT05TLFxuICAgICAgICAgICAgJ0ludmFsaWQgQ09OUyBzdHJ1Y3R1cmUuIEVhY2ggQ09OUyBpdGVtIG11c3QgY29udGFpbnMgb2YgdHdvIGVsZW1lbnRzLicsXG4gICAgICAgICAgICBkYXRhLFxuICAgICAgICApO1xuICAgIH1cblxuICAgIHN0YXRpYyBjbGllbnREb2VzTm90Q29uZmlndXJlZChkYXRhOiBUT05FcnJvckRhdGEpOiBUT05DbGllbnRFcnJvciB7XG4gICAgICAgIHJldHVybiBuZXcgVE9OQ2xpZW50RXJyb3IoXG4gICAgICAgICAgICBUT05FcnJvckNvZGUuQ0xJRU5UX0RPRVNfTk9UX0NPTkZJR1VSRUQsXG4gICAgICAgICAgICAnVE9OIENsaWVudCBpc25cXCd0IGNvbmZpZ3VyZWQnLFxuICAgICAgICAgICAgZGF0YSxcbiAgICAgICAgKTtcbiAgICB9XG5cbiAgICBzdGF0aWMgc2VuZE5vZGVSZXF1ZXN0RmFpbGVkKFxuICAgICAgICByZXNwb25zZVRleHQ6IHN0cmluZyxcbiAgICAgICAgZGF0YTogVE9ORXJyb3JEYXRhLFxuICAgICk6IFRPTkNsaWVudEVycm9yIHtcbiAgICAgICAgcmV0dXJuIG5ldyBUT05DbGllbnRFcnJvcihcbiAgICAgICAgICAgIFRPTkVycm9yQ29kZS5TRU5EX05PREVfUkVRVUVTVF9GQUlMRUQsXG4gICAgICAgICAgICBgU2VuZCBub2RlIHJlcXVlc3QgZmFpbGVkOiAke3Jlc3BvbnNlVGV4dH1gLFxuICAgICAgICAgICAgZGF0YSxcbiAgICAgICAgKTtcbiAgICB9XG5cbiAgICBzdGF0aWMgcnVuTG9jYWxBY2NvdW50RG9lc05vdEV4aXN0cyhcbiAgICAgICAgZnVuY3Rpb25OYW1lOiBzdHJpbmcsXG4gICAgICAgIGFkZHJlc3M6IHN0cmluZyxcbiAgICAgICAgZGF0YTogVE9ORXJyb3JEYXRhLFxuICAgICk6IFRPTkNsaWVudEVycm9yIHtcbiAgICAgICAgcmV0dXJuIG5ldyBUT05DbGllbnRFcnJvcihcbiAgICAgICAgICAgIFRPTkVycm9yQ29kZS5SVU5fTE9DQUxfQUNDT1VOVF9ET0VTX05PVF9FWElTVFMsXG4gICAgICAgICAgICBgWyR7ZnVuY3Rpb25OYW1lfV0gcnVuIGxvY2FsIGZhaWxlZDogYWNjb3VudCBbJHthZGRyZXNzfV0gZG9lcyBub3QgZXhpc3RzYCxcbiAgICAgICAgICAgIGRhdGEsXG4gICAgICAgICk7XG4gICAgfVxuXG4gICAgc3RhdGljIHdhaXRGb3JUaW1lb3V0KGRhdGE6IFRPTkVycm9yRGF0YSkge1xuICAgICAgICByZXR1cm4gbmV3IFRPTkNsaWVudEVycm9yKFxuICAgICAgICAgICAgVE9ORXJyb3JDb2RlLldBSVRfRk9SX1RJTUVPVVQsXG4gICAgICAgICAgICAnV2FpdCBmb3Igb3BlcmF0aW9uIHJlamVjdGVkIG9uIHRpbWVvdXQnLFxuICAgICAgICAgICAgZGF0YSxcbiAgICAgICAgKTtcbiAgICB9XG5cbiAgICBzdGF0aWMgcXVlcnlGYWlsZWQoXG4gICAgICAgIGVycm9yczogRXJyb3JbXSxcbiAgICAgICAgZGF0YTogVE9ORXJyb3JEYXRhLFxuICAgICkge1xuICAgICAgICByZXR1cm4gbmV3IFRPTkNsaWVudEVycm9yKFxuICAgICAgICAgICAgVE9ORXJyb3JDb2RlLlFVRVJZX0ZBSUxFRCxcbiAgICAgICAgICAgIGBRdWVyeSBmYWlsZWQ6ICR7ZXJyb3JzLm1hcCh4ID0+IHgubWVzc2FnZSB8fCB4LnRvU3RyaW5nKCkpLmpvaW4oJ1xcbicpfWAsXG4gICAgICAgICAgICBkYXRhLFxuICAgICAgICApO1xuICAgIH1cblxuICAgIHN0YXRpYyBmb3JtYXRUaW1lKHRpbWU6ID9udW1iZXIpOiA/c3RyaW5nIHtcbiAgICAgICAgaWYgKHRpbWUpIHtcbiAgICAgICAgICAgIHJldHVybiBgJHtuZXcgRGF0ZSh0aW1lICogMTAwMCkudG9JU09TdHJpbmcoKX0gKCR7dGltZX0pYDtcbiAgICAgICAgfVxuICAgICAgICByZXR1cm4gbnVsbDtcbiAgICB9XG5cbiAgICBzdGF0aWMgbWVzc2FnZUV4cGlyZWQoXG4gICAgICAgIGRhdGE6IFRPTkVycm9yRGF0YSAmIHtcbiAgICAgICAgICAgIG1lc3NhZ2VfaWQ6IHN0cmluZyxcbiAgICAgICAgICAgIHNlbmRpbmdfdGltZTogbnVtYmVyLFxuICAgICAgICAgICAgZXhwaXJlPzogbnVtYmVyLFxuICAgICAgICAgICAgYmxvY2tfdGltZT86IG51bWJlcixcbiAgICAgICAgICAgIGJsb2NrX2lkPzogc3RyaW5nLFxuICAgICAgICB9LFxuICAgICkge1xuICAgICAgICByZXR1cm4gbmV3IFRPTkNsaWVudEVycm9yKFxuICAgICAgICAgICAgVE9ORXJyb3JDb2RlLk1FU1NBR0VfRVhQSVJFRCxcbiAgICAgICAgICAgICdNZXNzYWdlIGV4cGlyZWQnLFxuICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgIC4uLmRhdGEsXG4gICAgICAgICAgICAgICAgc2VuZGluZ190aW1lOiBUT05DbGllbnRFcnJvci5mb3JtYXRUaW1lKGRhdGEuc2VuZGluZ190aW1lKSxcbiAgICAgICAgICAgICAgICBleHBpcmF0aW9uX3RpbWU6IFRPTkNsaWVudEVycm9yLmZvcm1hdFRpbWUoZGF0YS5leHBpcmUpLFxuICAgICAgICAgICAgICAgIGJsb2NrX3RpbWU6IFRPTkNsaWVudEVycm9yLmZvcm1hdFRpbWUoZGF0YS5ibG9ja190aW1lKSxcbiAgICAgICAgICAgIH0sXG4gICAgICAgICAgICBUT05FcnJvclNvdXJjZS5DTElFTlQsXG4gICAgICAgICk7XG4gICAgfVxuXG4gICAgc3RhdGljIHNlcnZlckRvZXNudFN1cHBvcnRBZ2dyZWdhdGlvbnMoZGF0YTogVE9ORXJyb3JEYXRhKSB7XG4gICAgICAgIHJldHVybiBuZXcgVE9OQ2xpZW50RXJyb3IoXG4gICAgICAgICAgICBUT05FcnJvckNvZGUuU0VSVkVSX0RPRVNOVF9TVVBQT1JUX0FHR1JFR0FUSU9OUyxcbiAgICAgICAgICAgICdTZXJ2ZXIgZG9lc25cXCd0IHN1cHBvcnQgYWdncmVnYXRpb25zJyxcbiAgICAgICAgICAgIGRhdGEsXG4gICAgICAgICk7XG4gICAgfVxuXG4gICAgc3RhdGljIGFkZHJlc3NSZXF1aXJlZEZvclJ1bkxvY2FsKGRhdGE6IFRPTkVycm9yRGF0YSkge1xuICAgICAgICByZXR1cm4gbmV3IFRPTkNsaWVudEVycm9yKFxuICAgICAgICAgICAgVE9ORXJyb3JDb2RlLkFERFJFU1NfUkVRVUlSRURfRk9SX1JVTl9MT0NBTCxcbiAgICAgICAgICAgICdBZGRyZXNzIHJlcXVpcmVkIGZvciBydW4gbG9jYWwuIFlvdSBoYXZlblxcJ3Qgc3BlY2lmaWVkIGNvbnRyYWN0IGNvZGUgb3IgZGF0YSAnXG4gICAgICAgICAgICArICdzbyBhZGRyZXNzIGlzIHJlcXVpcmVkIHRvIGxvYWQgbWlzc2luZyBwYXJ0cyBmcm9tIG5ldHdvcmsuJyxcbiAgICAgICAgICAgIGRhdGEsXG4gICAgICAgICk7XG4gICAgfVxuXG4gICAgc3RhdGljIG5ldHdvcmtTaWxlbnQoXG4gICAgICAgIGRhdGE6IFRPTkVycm9yRGF0YSAmIHtcbiAgICAgICAgICAgIG1lc3NhZ2VfaWQ6IHN0cmluZyxcbiAgICAgICAgICAgIHNlbmRpbmdfdGltZTogbnVtYmVyLFxuICAgICAgICAgICAgZXhwaXJlOiBudW1iZXIsXG4gICAgICAgICAgICB0aW1lb3V0OiBudW1iZXIsXG4gICAgICAgICAgICBibG9ja19pZD86IHN0cmluZyxcbiAgICAgICAgICAgIG1lc3NhZ2VfcHJvY2Vzc2luZ19zdGF0ZT86IFRPTk1lc3NhZ2VQcm9jZXNzaW5nU3RhdGUsXG4gICAgICAgIH0sXG4gICAgKSB7XG4gICAgICAgIHJldHVybiBuZXcgVE9OQ2xpZW50RXJyb3IoXG4gICAgICAgICAgICBUT05FcnJvckNvZGUuTkVUV09SS19TSUxFTlQsXG4gICAgICAgICAgICAnTmV0d29yayBzaWxlbnQ6IG5vIGJsb2NrcyBwcm9kdWNlZCBkdXJpbmcgdGltZW91dC4nLFxuICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgIC4uLmRhdGEsXG4gICAgICAgICAgICAgICAgc2VuZGluZ190aW1lOiBUT05DbGllbnRFcnJvci5mb3JtYXRUaW1lKGRhdGEuc2VuZGluZ190aW1lKSxcbiAgICAgICAgICAgICAgICBleHBpcmF0aW9uX3RpbWU6IFRPTkNsaWVudEVycm9yLmZvcm1hdFRpbWUoZGF0YS5leHBpcmUpLFxuICAgICAgICAgICAgfSxcbiAgICAgICAgKTtcbiAgICB9XG5cbiAgICBzdGF0aWMgdHJhbnNhY3Rpb25XYWl0VGltZW91dChcbiAgICAgICAgZGF0YTogVE9ORXJyb3JEYXRhICYge1xuICAgICAgICAgICAgbWVzc2FnZV9pZDogc3RyaW5nLFxuICAgICAgICAgICAgc2VuZGluZ190aW1lOiBudW1iZXIsXG4gICAgICAgICAgICB0aW1lb3V0OiBudW1iZXIsXG4gICAgICAgICAgICBtZXNzYWdlX3Byb2Nlc3Npbmdfc3RhdGU/OiBUT05NZXNzYWdlUHJvY2Vzc2luZ1N0YXRlLFxuICAgICAgICB9LFxuICAgICkge1xuICAgICAgICByZXR1cm4gbmV3IFRPTkNsaWVudEVycm9yKFxuICAgICAgICAgICAgVE9ORXJyb3JDb2RlLlRSQU5TQUNUSU9OX1dBSVRfVElNRU9VVCxcbiAgICAgICAgICAgICdUcmFuc2FjdGlvbiBkaWQgbm90IHByb2R1Y2VkIGR1cmluZyBzcGVjaWZpZWQgdGltZW91dCcsXG4gICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgLi4uZGF0YSxcbiAgICAgICAgICAgICAgICBzZW5kaW5nX3RpbWU6IFRPTkNsaWVudEVycm9yLmZvcm1hdFRpbWUoZGF0YS5zZW5kaW5nX3RpbWUpLFxuICAgICAgICAgICAgfSxcbiAgICAgICAgKTtcbiAgICB9XG5cbiAgICBzdGF0aWMgY2xvY2tPdXRPZlN5bmMoZGF0YTogVE9ORXJyb3JEYXRhKSB7XG4gICAgICAgIHJldHVybiBuZXcgVE9OQ2xpZW50RXJyb3IoXG4gICAgICAgICAgICBUT05FcnJvckNvZGUuQ0xPQ0tfT1VUX09GX1NZTkMsXG4gICAgICAgICAgICAnWW91IGxvY2FsIGNsb2NrIGlzIG91dCBvZiBzeW5jIHdpdGggdGhlIHNlcnZlciB0aW1lLiAnXG4gICAgICAgICAgICArICdJdCBpcyBhIGNyaXRpY2FsIGNvbmRpdGlvbiBmb3Igc2VuZGluZyBtZXNzYWdlcyB0byB0aGUgYmxvY2tjaGFpbi4gJ1xuICAgICAgICAgICAgKyAnUGxlYXNlIHN5bmMgeW91IGNsb2NrIHdpdGggdGhlIGludGVybmV0IHRpbWUuJyxcbiAgICAgICAgICAgIGRhdGEsXG4gICAgICAgICk7XG4gICAgfVxuXG4gICAgc3RhdGljIGFjY291bnRNaXNzaW5nKFxuICAgICAgICBhZGRyZXNzOiBzdHJpbmcsXG4gICAgICAgIGRhdGE6IFRPTkVycm9yRGF0YSxcbiAgICApIHtcbiAgICAgICAgcmV0dXJuIG5ldyBUT05DbGllbnRFcnJvcihcbiAgICAgICAgICAgIFRPTkVycm9yQ29kZS5BQ0NPVU5UX01JU1NJTkcsXG4gICAgICAgICAgICBgQWNjb3VudCB3aXRoIGFkZHJlc3MgWyR7YWRkcmVzc31dIGRvZXNuJ3QgZXhpc3RzLiBgXG4gICAgICAgICAgICArICdZb3UgaGF2ZSB0byBwcmVwYWlkIHRoaXMgYWNjb3VudCB0byBoYXZlIGEgcG9zaXRpdmUgYmFsYW5jZSBvbiB0aGVtIGFuZCB0aGVuIGRlcGxveSAnXG4gICAgICAgICAgICArICdhIGNvbnRyYWN0IGNvZGUgZm9yIHRoaXMgYWNjb3VudC4nXG4gICAgICAgICAgICArICdTZWUgU0RLIGRvY3VtZW50YXRpb24gZm9yIGRldGFpbGVkIGluc3RydWN0aW9ucy4nLFxuICAgICAgICAgICAgZGF0YSxcbiAgICAgICAgKTtcbiAgICB9XG5cbiAgICBzdGF0aWMgYWNjb3VudENvZGVNaXNzaW5nKFxuICAgICAgICBhZGRyZXNzOiBzdHJpbmcsXG4gICAgICAgIGJhbGFuY2U6IHN0cmluZyxcbiAgICAgICAgZGF0YTogVE9ORXJyb3JEYXRhLFxuICAgICkge1xuICAgICAgICByZXR1cm4gbmV3IFRPTkNsaWVudEVycm9yKFxuICAgICAgICAgICAgVE9ORXJyb3JDb2RlLkFDQ09VTlRfQ09ERV9NSVNTSU5HLFxuICAgICAgICAgICAgYEFjY291bnQgd2l0aCBhZGRyZXNzIFske2FkZHJlc3N9XSBleGlzdHMgYnV0IGhhdmVuJ3QgYSBjb250cmFjdCBjb2RlIHlldC4gYFxuICAgICAgICAgICAgKyAnWW91IGhhdmUgdG8gZW5zdXJlIHRoYXQgYW4gYWNjb3VudCBoYXMgYW4gZW5vdWdoIGJhbGFuY2UgZm9yIGRlcGxveWluZyAnXG4gICAgICAgICAgICArICdhIGNvbnRyYWN0IGNvZGUgYW5kIHRoZW4gZGVwbG95IGEgY29udHJhY3QgY29kZSBmb3IgdGhpcyBhY2NvdW50LiAnXG4gICAgICAgICAgICArIGBDdXJyZW50IGFjY291bnQgYmFsYW5jZSBpcyBbJHtiYWxhbmNlfV0uIGBcbiAgICAgICAgICAgICsgJ1NlZSBTREsgZG9jdW1lbnRhdGlvbiBmb3IgZGV0YWlsZWQgaW5zdHJ1Y3Rpb25zLicsXG4gICAgICAgICAgICBkYXRhLFxuICAgICAgICApO1xuICAgIH1cblxuICAgIHN0YXRpYyBhY2NvdW50QmFsYW5jZVRvb0xvdyhcbiAgICAgICAgYWRkcmVzczogc3RyaW5nLFxuICAgICAgICBiYWxhbmNlOiBzdHJpbmcsXG4gICAgICAgIGRhdGE6IFRPTkVycm9yRGF0YSxcbiAgICApIHtcbiAgICAgICAgcmV0dXJuIG5ldyBUT05DbGllbnRFcnJvcihcbiAgICAgICAgICAgIFRPTkVycm9yQ29kZS5BQ0NPVU5UX0JBTEFOQ0VfVE9PX0xPVyxcbiAgICAgICAgICAgIGBBY2NvdW50IHdpdGggYWRkcmVzcyBbJHthZGRyZXNzfV0gaGFzIHRvbyBsb3cgYmFsYW5jZSBbJHtiYWxhbmNlfV0uIGBcbiAgICAgICAgICAgICsgJ1lvdSBoYXZlIHRvIHNlbmQgc29tZSB2YWx1ZSB0byBhY2NvdW50IGJhbGFuY2UgZnJvbSBvdGhlciBjb250cmFjdCAnXG4gICAgICAgICAgICArICcoZS5nLiBXYWxsZXQgY29udHJhY3QpLiAnXG4gICAgICAgICAgICArICdTZWUgU0RLIGRvY3VtZW50YXRpb24gZm9yIGRldGFpbGVkIGluc3RydWN0aW9ucy4nLFxuICAgICAgICAgICAgZGF0YSxcbiAgICAgICAgKTtcbiAgICB9XG5cbiAgICBzdGF0aWMgbm9CbG9ja3MoXG4gICAgICAgIHdvcmtjaGFpbjogbnVtYmVyLFxuICAgICAgICBkYXRhOiBUT05FcnJvckRhdGEsXG4gICAgKSB7XG4gICAgICAgIGNvbnN0IHdvcmtjaGFpbk5hbWUgPSB3b3JrY2hhaW4gPT09IC0xID8gJ21hc3RlcmNoYWluJyA6IGB3b3JrY2hhaW4gJHt3b3JrY2hhaW59YDtcbiAgICAgICAgcmV0dXJuIG5ldyBUT05DbGllbnRFcnJvcihcbiAgICAgICAgICAgIFRPTkVycm9yQ29kZS5ORVRXT1JLX1NJTEVOVCxcbiAgICAgICAgICAgIGBcIk5vIGJsb2NrcyBmb3IgJHt3b3JrY2hhaW5OYW1lfSBmb3VuZFwiLmAsXG4gICAgICAgICAgICBkYXRhLFxuICAgICAgICApO1xuICAgIH1cblxuICAgIHN0YXRpYyBpbnZhbGlkQmxvY2tjaGFpbihcbiAgICAgICAgbWVzc2FnZTogc3RyaW5nLFxuICAgICAgICBkYXRhOiBUT05FcnJvckRhdGEsXG4gICAgKSB7XG4gICAgICAgIHJldHVybiBuZXcgVE9OQ2xpZW50RXJyb3IoVE9ORXJyb3JDb2RlLk5FVFdPUktfU0lMRU5ULCBtZXNzYWdlLCBkYXRhKTtcbiAgICB9XG5cbiAgICBzdGF0aWMgcXVlcnlGb3JjaWJseUFib3J0ZWQoZGF0YTogVE9ORXJyb3JEYXRhKSB7XG4gICAgICAgIHJldHVybiBuZXcgVE9OQ2xpZW50RXJyb3IoXG4gICAgICAgICAgICBUT05FcnJvckNvZGUuUVVFUllfRk9SQ0lCTFlfQUJPUlRFRCxcbiAgICAgICAgICAgICdHcmFwaFFMIHF1ZXJ5IHdhcyBmb3JjaWJseSBhYm9ydGVkIG9uIHRpbWVvdXQuJyxcbiAgICAgICAgICAgIGRhdGEsXG4gICAgICAgICk7XG4gICAgfVxuXG4gICAgc3RhdGljIGlzTWVzc2FnZUV4cGlyZWQoZXJyb3I6IGFueSk6IGJvb2xlYW4ge1xuICAgICAgICByZXR1cm4gVE9OQ2xpZW50RXJyb3IuaXNDbGllbnRFcnJvcihlcnJvciwgVE9ORXJyb3JDb2RlLk1FU1NBR0VfRVhQSVJFRCk7XG4gICAgfVxuXG4gICAgc3RhdGljIGlzV2FpdEZvclRpbWVvdXQoZXJyb3I6IGFueSk6IGJvb2xlYW4ge1xuICAgICAgICByZXR1cm4gVE9OQ2xpZW50RXJyb3IuaXNDbGllbnRFcnJvcihlcnJvciwgVE9ORXJyb3JDb2RlLldBSVRfRk9SX1RJTUVPVVQpO1xuICAgIH1cbn1cbiJdfQ==