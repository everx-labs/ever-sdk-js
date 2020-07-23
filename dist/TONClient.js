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
  CONTRACT_EXECUTION_FAILED: 3025,
  // Queries
  REQUEST_FORCIBLY_TERMINATED: 4005
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
  }, {
    key: "requestForciblyTerminated",
    value: function requestForciblyTerminated() {
      return new TONClientError("GraphQL query was forcibly terminated on timeout.", TONErrorCode.REQUEST_FORCIBLY_TERMINATED);
    }
  }]);

  return TONClientError;
}();

exports.TONClientError = TONClientError;

_defineProperty(TONClientError, "source", TONErrorSource);

_defineProperty(TONClientError, "code", TONErrorCode);

_defineProperty(TONClientError, "coreVersion", '');
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uL3NyYy9UT05DbGllbnQuanMiXSwibmFtZXMiOlsiVE9OQ2xpZW50IiwiY2xpZW50UGxhdGZvcm0iLCJtb2R1bGVzIiwiTWFwIiwiY29uZmlnIiwiZ2V0TW9kdWxlIiwiVE9OQ29uZmlnTW9kdWxlIiwiY3J5cHRvIiwiVE9OQ3J5cHRvTW9kdWxlIiwiY29udHJhY3RzIiwiVE9OQ29udHJhY3RzTW9kdWxlIiwiX3F1ZXJpZXMiLCJUT05RdWVyaWVzTW9kdWxlIiwicXVlcmllcyIsIl9jb250ZXh0IiwiX2NvcmVCcmlkZ2UiLCJ0cnlDcmVhdGVMaWJyYXJ5IiwicGxhdGZvcm0iLCJ1bmRlZmluZWQiLCJjcmVhdGVMaWJyYXJ5IiwiY29yZUxpYnJhcnkiLCJsaWJyYXJ5IiwiY29yZUNyZWF0ZUNvbnRleHQiLCJQcm9taXNlIiwicmVzb2x2ZSIsInJlcXVlc3QiLCJtZXRob2QiLCJwYXJhbXNKc29uIiwib25SZXN1bHQiLCJjb3JlUmVxdWVzdCIsInZhbHVlcyIsIm1vZHVsZSIsInNldHVwIiwiZ2V0VmVyc2lvbiIsIlRPTkNsaWVudEVycm9yIiwiY29yZVZlcnNpb24iLCJjbG9zZSIsImNvbnRleHQiLCJjb3JlRGVzdHJveUNvbnRleHQiLCJNb2R1bGVDbGFzcyIsIm5hbWUiLCJtb2R1bGVOYW1lIiwiZXhpc3RpbmdNb2R1bGUiLCJnZXQiLCJzZXQiLCJzZXJ2ZXJUaW1lRGVsdGEiLCJzZXJ2ZXJOb3ciLCJxdWVyeSIsInJlc3VsdCIsImRhdGEiLCJnZXRNYW5hZ2VtZW50QWNjZXNzS2V5IiwicGFyYW1zIiwic2lnbmVkTWFuYWdlbWVudEFjY2Vzc0tleSIsInNpZ25LZXlzIiwiYWNjb3VudEtleXMiLCJtYW5hZ2VtZW50QWNjZXNzS2V5IiwibmFjbFNpZ24iLCJ0ZXh0Iiwic2VjcmV0IiwiX3Jlc29sdmVTaWduZWRNYW5hZ2VtZW50QWNjZXNzS2V5IiwibXV0YXRpb24iLCJhY2NvdW50Iiwia2V5cyIsInJlZ2lzdGVyQWNjZXNzS2V5cyIsInJldm9rZUFjY2Vzc0tleXMiLCJ0cmFjZUlkIiwic3BhbklkIiwib3BlcmF0aW9uTmFtZSIsInRyYWNlciIsInNwYW4iLCJfc3RhcnRJbnRlcm5hbFNwYW4iLCJjdHgiLCJleHRyYWN0IiwiRk9STUFUX1RFWFRfTUFQIiwiRGF0ZSIsIm5vdyIsInN0YXJ0U3BhbiIsImYiLCJwYXJlbnRTcGFuIiwiY2hpbGRPZiIsInNldFRhZyIsIlRhZ3MiLCJTUEFOX0tJTkQiLCJmaW5pc2giLCJsb2ciLCJldmVudCIsInBheWxvYWQiLCJjbGllbnQiLCJzZXREYXRhIiwiVE9ORXJyb3JTb3VyY2UiLCJDTElFTlQiLCJOT0RFIiwiVE9ORXJyb3JDb2RlIiwiQ0xJRU5UX0RPRVNfTk9UX0NPTkZJR1VSRUQiLCJTRU5EX05PREVfUkVRVUVTVF9GQUlMRUQiLCJNRVNTQUdFX0FMUkVBRFlfRVhQSVJFRCIsIlJVTl9MT0NBTF9BQ0NPVU5UX0RPRVNfTk9UX0VYSVNUUyIsIldBSVRfRk9SX1RJTUVPVVQiLCJJTlRFUk5BTF9FUlJPUiIsIlFVRVJZX0ZBSUxFRCIsIk1FU1NBR0VfRVhQSVJFRCIsIlNFUlZFUl9ET0VTTlRfU1VQUE9SVF9BR0dSRUdBVElPTlMiLCJJTlZBTElEX0NPTlMiLCJBRERSRVNTX1JFUVVJUkVEX0ZPUl9SVU5fTE9DQUwiLCJORVRXT1JLX1NJTEVOVCIsIlRSQU5TQUNUSU9OX0xBRyIsIlRSQU5TQUNUSU9OX1dBSVRfVElNRU9VVCIsIkNMT0NLX09VVF9PRl9TWU5DIiwiQUNDT1VOVF9NSVNTSU5HIiwiQUNDT1VOVF9DT0RFX01JU1NJTkciLCJBQ0NPVU5UX0JBTEFOQ0VfVE9PX0xPVyIsIkFDQ09VTlRfRlJPWkVOX09SX0RFTEVURUQiLCJDT05UUkFDVF9FWEVDVVRJT05fRkFJTEVEIiwiUkVRVUVTVF9GT1JDSUJMWV9URVJNSU5BVEVEIiwiVE9OQ29udHJhY3RFeGl0Q29kZSIsIlJFUExBWV9QUk9URUNUSU9OIiwiTk9fR0FTIiwibWVzc2FnZSIsImNvZGUiLCJzb3VyY2UiLCJlcnJvciIsImV4aXRDb2RlIiwiZXhpdF9jb2RlIiwicmVzcG9uc2VUZXh0IiwiZnVuY3Rpb25OYW1lIiwiYWRkcmVzcyIsImVycm9ycyIsIm1hcCIsIngiLCJ0b1N0cmluZyIsImpvaW4iLCJ0aW1lIiwidG9JU09TdHJpbmciLCJzZW5kaW5nVGltZSIsImZvcm1hdFRpbWUiLCJleHBpcmF0aW9uVGltZSIsImV4cGlyZSIsImJsb2NrVGltZSIsImJhbGFuY2UiLCJ3b3JrY2hhaW4iLCJ3b3JrY2hhaW5OYW1lIiwiaXNDbGllbnRFcnJvciJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7O0FBS0E7O0FBY0E7O0FBQ0E7O0FBQ0E7O0FBRUE7O0FBT0E7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFxQkE7Ozs7O0lBS2FBLFM7OzsrQkFDU0MsYyxFQUFtQztBQUNqREQsTUFBQUEsU0FBUyxDQUFDQyxjQUFWLEdBQTJCQSxjQUEzQjtBQUNILEssQ0FHRDs7OztBQVNBLHVCQUFjO0FBQUE7O0FBQUE7O0FBQUE7O0FBQUE7O0FBQUE7O0FBQUE7O0FBQUE7O0FBQUE7O0FBQUE7O0FBQ1YsU0FBS0MsT0FBTCxHQUFlLElBQUlDLEdBQUosRUFBZjtBQUNBLFNBQUtDLE1BQUwsR0FBYyxLQUFLQyxTQUFMLENBQWVDLDJCQUFmLENBQWQ7QUFDQSxTQUFLQyxNQUFMLEdBQWMsS0FBS0YsU0FBTCxDQUFlRywyQkFBZixDQUFkO0FBQ0EsU0FBS0MsU0FBTCxHQUFpQixLQUFLSixTQUFMLENBQWVLLDhCQUFmLENBQWpCO0FBQ0EsU0FBS0MsUUFBTCxHQUFnQixLQUFLTixTQUFMLENBQWVPLDRCQUFmLENBQWhCO0FBQ0EsU0FBS0MsT0FBTCxHQUFlLEtBQUtGLFFBQXBCO0FBQ0EsU0FBS0csUUFBTCxHQUFnQixDQUFoQjtBQUNBLFNBQUtDLFdBQUwsR0FBbUIsSUFBbkI7QUFDSDtBQUVEOzs7Ozs7Ozs7O0FBWUE7Ozs7Ozs7Ozs7Ozs7O0FBS1VDLGdCQUFBQSxnQjswRkFBbUI7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQ2ZDLDRCQUFBQSxR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MjAxOC0yMDIwIFRPTiBERVYgU09MVVRJT05TIExURC5cbiAqL1xuLy8gQGZsb3dcblxuaW1wb3J0IHtcbiAgICBUYWdzLCBTcGFuLCBTcGFuQ29udGV4dCwgRk9STUFUX1RFWFRfTUFQLFxufSBmcm9tICdvcGVudHJhY2luZyc7XG5pbXBvcnQgdHlwZSB7XG4gICAgSVRPTkNsaWVudCxcbiAgICBUT05BY2Nlc3NLZXlzTWFuYWdlbWVudFBhcmFtcyxcbiAgICBUT05Db25maWdEYXRhLFxuICAgIFRPTkNvbnRyYWN0cyxcbiAgICBUT05DcnlwdG8sIFRPTk1lc3NhZ2VQcm9jZXNzaW5nU3RhdGUsXG4gICAgVE9OUXVlcmllcyxcbiAgICBUT05SZWdpc3RlckFjY2Vzc0tleXNQYXJhbXMsXG4gICAgVE9OUmV2b2tlQWNjZXNzS2V5c1BhcmFtcyxcbn0gZnJvbSAnLi4vdHlwZXMnO1xuXG5pbXBvcnQgVE9OQ29uZmlnTW9kdWxlIGZyb20gJy4vbW9kdWxlcy9UT05Db25maWdNb2R1bGUnO1xuaW1wb3J0IFRPTkNvbnRyYWN0c01vZHVsZSBmcm9tICcuL21vZHVsZXMvVE9OQ29udHJhY3RzTW9kdWxlJztcbmltcG9ydCBUT05DcnlwdG9Nb2R1bGUgZnJvbSAnLi9tb2R1bGVzL1RPTkNyeXB0b01vZHVsZSc7XG4vKiBlc2xpbnQtZGlzYWJsZSBjbGFzcy1tZXRob2RzLXVzZS10aGlzLCBuby11c2UtYmVmb3JlLWRlZmluZSAqL1xuaW1wb3J0IFRPTlF1ZXJpZXNNb2R1bGUgZnJvbSAnLi9tb2R1bGVzL1RPTlF1ZXJpZXNNb2R1bGUnO1xuXG5pbXBvcnQgdHlwZSB7XG4gICAgVE9OQ2xpZW50Q29yZUxpYnJhcnksXG4gICAgVE9OQ2xpZW50Q29yZUJyaWRnZSxcbiAgICBUT05Nb2R1bGVDb250ZXh0LFxufSBmcm9tICcuL1RPTk1vZHVsZSc7XG5pbXBvcnQgeyBUT05Nb2R1bGUgfSBmcm9tICcuL1RPTk1vZHVsZSc7XG5cbi8qKlxuICogSmF2YVNjcmlwdCBwbGF0Zm9ybSBzcGVjaWZpYyBjb25maWd1cmF0aW9uXG4gKi9cbnR5cGUgVE9OQ2xpZW50UGxhdGZvcm0gPSB7XG4gICAgLyoqXG4gICAgICogUGxhdGZvcm0gc3BlY2lmaWMgYGZldGNoYCBmdW5jdGlvblxuICAgICAqL1xuICAgIGZldGNoOiBhbnksXG4gICAgLyoqXG4gICAgICogUGxhdGZvcm0gc3BlY2lmaWMgYFdlYlNvY2tldGAgaW1wbGVtZW50YXRpb25cbiAgICAgKiBUaGlzIGltcGxlbWVudGF0aW9uIG11c3QgY29uZm9ybXMgdG8gVzNDIFdlYlNvY2tldFxuICAgICAqL1xuICAgIFdlYlNvY2tldDogYW55LFxuICAgIC8qKlxuICAgICAqIFJlcXVlc3QgY3JlYXRpb24gb2YgdGhlIGNsaWVudCBjb3JlXG4gICAgICovXG4gICAgY3JlYXRlTGlicmFyeTogKCkgPT4gUHJvbWlzZTxUT05DbGllbnRDb3JlTGlicmFyeT4sXG59O1xuXG4vKipcbiAqIE1haW4gb2JqZWN0IHByb3ZpZGVkIGZ1bmN0aW9uYWxpdHkgb2YgdGhlIFRPTiBDbGllbnQgTGlicmFyeVxuICogRWFjaCBpbnN0YW5jZSBvZiBUT05DbGllbnQgaGFzIG93biBzZXQgb2YgVE9OIENsaWVudCBtb2R1bGVzXG4gKiBhbmQgaGFzIG93biBwcmVjb25maWd1cmVkIGNsaWVudCBjb250ZXh0XG4gKi9cbmV4cG9ydCBjbGFzcyBUT05DbGllbnQgaW1wbGVtZW50cyBUT05Nb2R1bGVDb250ZXh0LCBJVE9OQ2xpZW50IHtcbiAgICBzdGF0aWMgc2V0TGlicmFyeShjbGllbnRQbGF0Zm9ybTogVE9OQ2xpZW50UGxhdGZvcm0pIHtcbiAgICAgICAgVE9OQ2xpZW50LmNsaWVudFBsYXRmb3JtID0gY2xpZW50UGxhdGZvcm07XG4gICAgfVxuXG5cbiAgICAvLyBQdWJsaWNcbiAgICBjb25maWc6IFRPTkNvbmZpZ01vZHVsZTtcbiAgICBjcnlwdG86IFRPTkNyeXB0bztcbiAgICBjb250cmFjdHM6IFRPTkNvbnRyYWN0cztcbiAgICBxdWVyaWVzOiBUT05RdWVyaWVzO1xuICAgIF9xdWVyaWVzOiBUT05RdWVyaWVzTW9kdWxlO1xuICAgIF9jb250ZXh0OiBudW1iZXI7XG4gICAgX2NvcmVCcmlkZ2U6ID9UT05DbGllbnRDb3JlQnJpZGdlO1xuXG4gICAgY29uc3RydWN0b3IoKSB7XG4gICAgICAgIHRoaXMubW9kdWxlcyA9IG5ldyBNYXAoKTtcbiAgICAgICAgdGhpcy5jb25maWcgPSB0aGlzLmdldE1vZHVsZShUT05Db25maWdNb2R1bGUpO1xuICAgICAgICB0aGlzLmNyeXB0byA9IHRoaXMuZ2V0TW9kdWxlKFRPTkNyeXB0b01vZHVsZSk7XG4gICAgICAgIHRoaXMuY29udHJhY3RzID0gdGhpcy5nZXRNb2R1bGUoVE9OQ29udHJhY3RzTW9kdWxlKTtcbiAgICAgICAgdGhpcy5fcXVlcmllcyA9IHRoaXMuZ2V0TW9kdWxlKFRPTlF1ZXJpZXNNb2R1bGUpO1xuICAgICAgICB0aGlzLnF1ZXJpZXMgPSB0aGlzLl9xdWVyaWVzO1xuICAgICAgICB0aGlzLl9jb250ZXh0ID0gMDtcbiAgICAgICAgdGhpcy5fY29yZUJyaWRnZSA9IG51bGw7XG4gICAgfVxuXG4gICAgLyoqXG4gICAgICogQ29udmVuaWVudCB3YXkgdG8gY3JlYXRlIGNvbmZpZ3VyZWQgaW5zdGFuY2Ugb2YgdGhlIFRPTiBDbGllbnRcbiAgICAgKiBAcGFyYW0ge1RPTkNvbmZpZ0RhdGF9IGNvbmZpZ1xuICAgICAqIEByZXR1cm4ge1Byb21pc2U8VE9OQ2xpZW50Pn1cbiAgICAgKi9cbiAgICBzdGF0aWMgYXN5bmMgY3JlYXRlKGNvbmZpZzogVE9OQ29uZmlnRGF0YSk6IFByb21pc2U8VE9OQ2xpZW50PiB7XG4gICAgICAgIGNvbnN0IGNsaWVudCA9IG5ldyBUT05DbGllbnQoKTtcbiAgICAgICAgY2xpZW50LmNvbmZpZy5zZXREYXRhKGNvbmZpZyk7XG4gICAgICAgIGF3YWl0IGNsaWVudC5zZXR1cCgpO1xuICAgICAgICByZXR1cm4gY2xpZW50O1xuICAgIH1cblxuICAgIC8qKlxuICAgICAqIFNldCB1cCB0aGUgY2xpZW50IGluc3RhbmNlXG4gICAgICogQHJldHVybiB7UHJvbWlzZTx2b2lkPn1cbiAgICAgKi9cbiAgICBhc3luYyBzZXR1cCgpOiBQcm9taXNlPHZvaWQ+IHtcbiAgICAgICAgY29uc3QgdHJ5Q3JlYXRlTGlicmFyeSA9IGFzeW5jICgpID0+IHtcbiAgICAgICAgICAgIGNvbnN0IHBsYXRmb3JtID0gVE9OQ2xpZW50LmNsaWVudFBsYXRmb3JtO1xuICAgICAgICAgICAgaWYgKHBsYXRmb3JtID09PSBudWxsIHx8IHBsYXRmb3JtID09PSB1bmRlZmluZWQpIHtcbiAgICAgICAgICAgICAgICByZXR1cm4gbnVsbDtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIFRPTkNsaWVudC5jb3JlTGlicmFyeSA9IGF3YWl0IHBsYXRmb3JtLmNyZWF0ZUxpYnJhcnkoKTtcbiAgICAgICAgICAgIHJldHVybiBUT05DbGllbnQuY29yZUxpYnJhcnk7XG4gICAgICAgIH07XG4gICAgICAgIGNvbnN0IGxpYnJhcnkgPSBUT05DbGllbnQuY29yZUxpYnJhcnkgfHwgYXdhaXQgdHJ5Q3JlYXRlTGlicmFyeSgpO1xuICAgICAgICBpZiAoIWxpYnJhcnkpIHtcbiAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgfVxuICAgICAgICBpZiAodGhpcy5fY29yZUJyaWRnZSA9PT0gbnVsbCB8fCB0aGlzLl9jb3JlQnJpZGdlID09PSB1bmRlZmluZWQpIHtcbiAgICAgICAgICAgIGlmIChsaWJyYXJ5LmNvcmVDcmVhdGVDb250ZXh0KSB7XG4gICAgICAgICAgICAgICAgdGhpcy5fY29udGV4dCA9IGF3YWl0IG5ldyBQcm9taXNlKChyZXNvbHZlKSA9PiBsaWJyYXJ5LmNvcmVDcmVhdGVDb250ZXh0KHJlc29sdmUpKTtcbiAgICAgICAgICAgICAgICB0aGlzLl9jb3JlQnJpZGdlID0ge1xuICAgICAgICAgICAgICAgICAgICByZXF1ZXN0OiAoXG4gICAgICAgICAgICAgICAgICAgICAgICBtZXRob2Q6IHN0cmluZyxcbiAgICAgICAgICAgICAgICAgICAgICAgIHBhcmFtc0pzb246IHN0cmluZyxcbiAgICAgICAgICAgICAgICAgICAgICAgIG9uUmVzdWx0OiAocmVzdWx0SnNvbjogc3RyaW5nLCBlcnJvckpzb246IHN0cmluZykgPT4gdm9pZCxcbiAgICAgICAgICAgICAgICAgICAgKTogdm9pZCA9PiB7XG4gICAgICAgICAgICAgICAgICAgICAgICBpZiAoVE9OQ2xpZW50LmNvcmVMaWJyYXJ5KSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgVE9OQ2xpZW50LmNvcmVMaWJyYXJ5LmNvcmVSZXF1ZXN0KFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB0aGlzLl9jb250ZXh0LFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBtZXRob2QsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHBhcmFtc0pzb24sXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIG9uUmVzdWx0LFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICk7XG4gICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgfTtcbiAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgICAgdGhpcy5fY29yZUJyaWRnZSA9IGxpYnJhcnk7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgICAgY29uc3QgbW9kdWxlczogVE9OTW9kdWxlW10gPSBbLi4udGhpcy5tb2R1bGVzLnZhbHVlcygpXTtcbiAgICAgICAgZm9yIChjb25zdCBtb2R1bGUgb2YgbW9kdWxlcykge1xuICAgICAgICAgICAgYXdhaXQgbW9kdWxlLnNldHVwKCk7XG4gICAgICAgIH1cbiAgICAgICAgVE9OQ2xpZW50RXJyb3IuY29yZVZlcnNpb24gPSBhd2FpdCB0aGlzLmNvbmZpZy5nZXRWZXJzaW9uKCk7XG4gICAgfVxuXG4gICAgLyoqXG4gICAgICogVGVhciBkb3duIHRoaXMgY2xpZW50IGluc3RhbmNlLlxuICAgICAqIE5vdGUgdGhhdCBhZnRlciB5b3UgaGF2ZSBjYWxsZWQgdGhpcyBtZXRob2QgYWxsIGZ1dHVyZSB1c2Ugb2YgdGhpcyBpbnN0YW5jZSB3aWxsIGZhaWxcbiAgICAgKiBAcmV0dXJuIHtQcm9taXNlPHZvaWQ+fVxuICAgICAqL1xuICAgIGFzeW5jIGNsb3NlKCk6IFByb21pc2U8dm9pZD4ge1xuICAgICAgICBhd2FpdCB0aGlzLnF1ZXJpZXMuY2xvc2UoKTtcbiAgICAgICAgY29uc3QgbGlicmFyeSA9IFRPTkNsaWVudC5jb3JlTGlicmFyeTtcbiAgICAgICAgaWYgKHRoaXMuX2NvbnRleHQgPiAwICYmIGxpYnJhcnkgIT09IG51bGwgJiYgbGlicmFyeSAhPT0gdW5kZWZpbmVkKSB7XG4gICAgICAgICAgICBjb25zdCBjb250ZXh0ID0gdGhpcy5fY29udGV4dDtcbiAgICAgICAgICAgIHRoaXMuX2NvcmVCcmlkZ2UgPSBudWxsO1xuICAgICAgICAgICAgdGhpcy5fY29udGV4dCA9IDA7XG4gICAgICAgICAgICBhd2FpdCBuZXcgUHJvbWlzZShyZXNvbHZlID0+IGxpYnJhcnkuY29yZURlc3Ryb3lDb250ZXh0KGNvbnRleHQsIHJlc29sdmUpKTtcbiAgICAgICAgfVxuICAgIH1cblxuICAgIC8vIFRPTk1vZHVsZUNvbnRleHRcblxuICAgIGdldENvcmVCcmlkZ2UoKTogP1RPTkNsaWVudENvcmVCcmlkZ2Uge1xuICAgICAgICByZXR1cm4gdGhpcy5fY29yZUJyaWRnZTtcbiAgICB9XG5cbiAgICBnZXRNb2R1bGU8VD4oTW9kdWxlQ2xhc3M6IHR5cGVvZiBUT05Nb2R1bGUpOiBUIHtcbiAgICAgICAgY29uc3QgbmFtZSA9IE1vZHVsZUNsYXNzLm1vZHVsZU5hbWU7XG4gICAgICAgIGNvbnN0IGV4aXN0aW5nTW9kdWxlID0gdGhpcy5tb2R1bGVzLmdldChuYW1lKTtcbiAgICAgICAgaWYgKGV4aXN0aW5nTW9kdWxlKSB7XG4gICAgICAgICAgICByZXR1cm4gKGV4aXN0aW5nTW9kdWxlOiBhbnkpO1xuICAgICAgICB9XG4gICAgICAgIGNvbnN0IG1vZHVsZSA9IG5ldyBNb2R1bGVDbGFzcyh0aGlzKTtcbiAgICAgICAgdGhpcy5tb2R1bGVzLnNldChuYW1lLCBtb2R1bGUpO1xuICAgICAgICByZXR1cm4gKG1vZHVsZTogYW55KTtcbiAgICB9XG5cbiAgICBzZXJ2ZXJUaW1lRGVsdGEoKTogUHJvbWlzZTxudW1iZXI+IHtcbiAgICAgICAgcmV0dXJuIHRoaXMuX3F1ZXJpZXMuc2VydmVyVGltZURlbHRhKCk7XG4gICAgfVxuXG4gICAgc2VydmVyTm93KCk6IFByb21pc2U8bnVtYmVyPiB7XG4gICAgICAgIHJldHVybiB0aGlzLl9xdWVyaWVzLnNlcnZlck5vdygpO1xuICAgIH1cblxuICAgIGFzeW5jIGdldE1hbmFnZW1lbnRBY2Nlc3NLZXkoKTogUHJvbWlzZTxzdHJpbmc+IHtcbiAgICAgICAgY29uc3QgcmVzdWx0ID0gYXdhaXQgdGhpcy5fcXVlcmllcy5xdWVyeSgncXVlcnl7Z2V0TWFuYWdlbWVudEFjY2Vzc0tleX0nKTtcbiAgICAgICAgcmV0dXJuIHJlc3VsdC5kYXRhLmdldE1hbmFnZW1lbnRBY2Nlc3NLZXk7XG4gICAgfVxuXG5cbiAgICBhc3luYyBfcmVzb2x2ZVNpZ25lZE1hbmFnZW1lbnRBY2Nlc3NLZXkoXG4gICAgICAgIHBhcmFtczogVE9OQWNjZXNzS2V5c01hbmFnZW1lbnRQYXJhbXMsXG4gICAgKTogUHJvbWlzZTxzdHJpbmc+IHtcbiAgICAgICAgaWYgKHBhcmFtcy5zaWduZWRNYW5hZ2VtZW50QWNjZXNzS2V5KSB7XG4gICAgICAgICAgICByZXR1cm4gcGFyYW1zLnNpZ25lZE1hbmFnZW1lbnRBY2Nlc3NLZXk7XG4gICAgICAgIH1cbiAgICAgICAgY29uc3Qgc2lnbktleXMgPSBwYXJhbXMuYWNjb3VudEtleXM7XG4gICAgICAgIGlmIChzaWduS2V5cykge1xuICAgICAgICAgICAgY29uc3QgbWFuYWdlbWVudEFjY2Vzc0tleSA9IGF3YWl0IHRoaXMuZ2V0TWFuYWdlbWVudEFjY2Vzc0tleSgpO1xuICAgICAgICAgICAgcmV0dXJuIHRoaXMuY3J5cHRvLm5hY2xTaWduKFxuICAgICAgICAgICAgICAgIHsgdGV4dDogbWFuYWdlbWVudEFjY2Vzc0tleSB9LFxuICAgICAgICAgICAgICAgIGAke3NpZ25LZXlzLnNlY3JldH0ke3NpZ25LZXlzLnB1YmxpY31gLFxuICAgICAgICAgICAgICAgICdIZXgnLFxuICAgICAgICAgICAgKTtcbiAgICAgICAgfVxuICAgICAgICByZXR1cm4gJyc7XG4gICAgfVxuXG4gICAgYXN5bmMgcmVnaXN0ZXJBY2Nlc3NLZXlzKFxuICAgICAgICBwYXJhbXM6IFRPTlJlZ2lzdGVyQWNjZXNzS2V5c1BhcmFtcyxcbiAgICApOiBQcm9taXNlPG51bWJlcj4ge1xuICAgICAgICBjb25zdCBzaWduZWRNYW5hZ2VtZW50QWNjZXNzS2V5ID0gYXdhaXQgdGhpcy5fcmVzb2x2ZVNpZ25lZE1hbmFnZW1lbnRBY2Nlc3NLZXkocGFyYW1zKTtcbiAgICAgICAgY29uc3QgcmVzdWx0ID0gYXdhaXQgdGhpcy5fcXVlcmllcy5tdXRhdGlvbihcbiAgICAgICAgICAgIGBtdXRhdGlvbiByZWdpc3RlckFjY2Vzc0tleXMoJGFjY291bnQ6IFN0cmluZywgJGtleXM6IFtBY2Nlc3NLZXldLCAkc2lnbmVkTWFuYWdlbWVudEFjY2Vzc0tleTogU3RyaW5nKSB7XG4gICAgICAgICAgICAgICAgICAgIHJlZ2lzdGVyQWNjZXNzS2V5cyhhY2NvdW50OiAkYWNjb3VudCwga2V5czogJGtleXMsIHNpZ25lZE1hbmFnZW1lbnRBY2Nlc3NLZXk6ICRzaWduZWRNYW5hZ2VtZW50QWNjZXNzS2V5KVxuICAgICAgICAgICAgICAgIH1gLCB7XG4gICAgICAgICAgICAgICAgYWNjb3VudDogcGFyYW1zLmFjY291bnQsXG4gICAgICAgICAgICAgICAga2V5czogcGFyYW1zLmtleXMsXG4gICAgICAgICAgICAgICAgc2lnbmVkTWFuYWdlbWVudEFjY2Vzc0tleSxcbiAgICAgICAgICAgIH0sXG4gICAgICAgICk7XG4gICAgICAgIHJldHVybiByZXN1bHQuZGF0YS5yZWdpc3RlckFjY2Vzc0tleXM7XG4gICAgfVxuXG4gICAgYXN5bmMgcmV2b2tlQWNjZXNzS2V5cyhcbiAgICAgICAgcGFyYW1zOiBUT05SZXZva2VBY2Nlc3NLZXlzUGFyYW1zLFxuICAgICk6IFByb21pc2U8bnVtYmVyPiB7XG4gICAgICAgIGNvbnN0IHNpZ25lZE1hbmFnZW1lbnRBY2Nlc3NLZXkgPSBhd2FpdCB0aGlzLl9yZXNvbHZlU2lnbmVkTWFuYWdlbWVudEFjY2Vzc0tleShwYXJhbXMpO1xuICAgICAgICBjb25zdCByZXN1bHQgPSBhd2FpdCB0aGlzLl9xdWVyaWVzLm11dGF0aW9uKFxuICAgICAgICAgICAgYG11dGF0aW9uIHJldm9rZUFjY2Vzc0tleXMoJGFjY291bnQ6IFN0cmluZywgJGtleXM6IFtTdHJpbmddLCAkc2lnbmVkTWFuYWdlbWVudEFjY2Vzc0tleTogU3RyaW5nKSB7XG4gICAgICAgICAgICAgICAgICAgIHJldm9rZUFjY2Vzc0tleXMoYWNjb3VudDogJGFjY291bnQsIGtleXM6ICRrZXlzLCBzaWduZWRNYW5hZ2VtZW50QWNjZXNzS2V5OiAkc2lnbmVkTWFuYWdlbWVudEFjY2Vzc0tleSlcbiAgICAgICAgICAgICAgICB9YCwge1xuICAgICAgICAgICAgICAgIGFjY291bnQ6IHBhcmFtcy5hY2NvdW50LFxuICAgICAgICAgICAgICAgIGtleXM6IHBhcmFtcy5rZXlzLFxuICAgICAgICAgICAgICAgIHNpZ25lZE1hbmFnZW1lbnRBY2Nlc3NLZXksXG4gICAgICAgICAgICB9LFxuICAgICAgICApO1xuICAgICAgICByZXR1cm4gcmVzdWx0LmRhdGEucmV2b2tlQWNjZXNzS2V5cztcbiAgICB9XG5cbiAgICBzdGFydFJvb3RTcGFuKHRyYWNlSWQ6IHN0cmluZywgc3BhbklkOiBzdHJpbmcsIG9wZXJhdGlvbk5hbWU6IHN0cmluZyk6IFNwYW4ge1xuICAgICAgICBjb25zdCB0cmFjZXIgPSB0aGlzLmNvbmZpZy50cmFjZXI7XG4gICAgICAgIGxldCBzcGFuOiA/U3BhbiA9IG51bGw7XG4gICAgICAgIGlmICh0cmFjZXIuX3N0YXJ0SW50ZXJuYWxTcGFuKSB7XG4gICAgICAgICAgICB0cnkge1xuICAgICAgICAgICAgICAgIGNvbnN0IGN0eCA9IHRyYWNlci5leHRyYWN0KEZPUk1BVF9URVhUX01BUCwge1xuICAgICAgICAgICAgICAgICAgICAndWJlci10cmFjZS1pZCc6IGAke3RyYWNlSWR9OiR7c3BhbklkfTowOjFgLFxuICAgICAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgICAgIGlmIChjdHgpIHtcbiAgICAgICAgICAgICAgICAgICAgc3BhbiA9IHRoaXMuY29uZmlnLnRyYWNlci5fc3RhcnRJbnRlcm5hbFNwYW4oXG4gICAgICAgICAgICAgICAgICAgICAgICBjdHgsXG4gICAgICAgICAgICAgICAgICAgICAgICBvcGVyYXRpb25OYW1lLFxuICAgICAgICAgICAgICAgICAgICAgICAgRGF0ZS5ub3coKSwgLy8gc3RhcnRUaW1lXG4gICAgICAgICAgICAgICAgICAgICAgICB1bmRlZmluZWQsIC8vIHVzZXJUYWdzXG4gICAgICAgICAgICAgICAgICAgICAgICB7fSwgLy8gaW50ZXJuYWxUYWdzXG4gICAgICAgICAgICAgICAgICAgICAgICBbXSwgLy8gcmVmZXJlbmNlc1xuICAgICAgICAgICAgICAgICAgICAgICAgZmFsc2UsIC8vIGhhc1ZhbGlkUGFyZW50XG4gICAgICAgICAgICAgICAgICAgICAgICBmYWxzZSwgLy8gaXNScGNTZXJ2ZXJcbiAgICAgICAgICAgICAgICAgICAgKTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9IGNhdGNoIHtcbiAgICAgICAgICAgICAgICAvLyB0cmFjZXIgY2FuJ3QgY3JlYXRlIG1lc3NhZ2Ugc3BhbiB1c2luZyBwcml2YXRlIG1ldGhvZCxcbiAgICAgICAgICAgICAgICAvLyBzbyB3ZSBhcmUgZmFsbGJhY2sgdG8gY3JlYXRlIHNwYW4gdXNpbmcgcmVndWxhciBtZXRob2RcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgICByZXR1cm4gc3BhbiB8fCB0cmFjZXIuc3RhcnRTcGFuKG9wZXJhdGlvbk5hbWUpO1xuICAgIH1cblxuICAgIGFzeW5jIHRyYWNlPFQ+KFxuICAgICAgICBuYW1lOiBzdHJpbmcsXG4gICAgICAgIGY6IChzcGFuOiBTcGFuKSA9PiBQcm9taXNlPFQ+LFxuICAgICAgICBwYXJlbnRTcGFuPzogKFNwYW4gfCBTcGFuQ29udGV4dCksXG4gICAgKTogUHJvbWlzZTxUPiB7XG4gICAgICAgIGNvbnN0IHNwYW4gPSB0aGlzLmNvbmZpZy50cmFjZXIuc3RhcnRTcGFuKG5hbWUsIHsgY2hpbGRPZjogcGFyZW50U3BhbiB9KTtcbiAgICAgICAgdHJ5IHtcbiAgICAgICAgICAgIHNwYW4uc2V0VGFnKFRhZ3MuU1BBTl9LSU5ELCAnY2xpZW50Jyk7XG4gICAgICAgICAgICBjb25zdCByZXN1bHQgPSBhd2FpdCBmKHNwYW4pO1xuICAgICAgICAgICAgaWYgKHJlc3VsdCAhPT0gdW5kZWZpbmVkKSB7XG4gICAgICAgICAgICAgICAgc3Bhbi5zZXRUYWcoJ3Jlc3VsdCcsIHJlc3VsdCk7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBzcGFuLmZpbmlzaCgpO1xuICAgICAgICAgICAgcmV0dXJuIHJlc3VsdDtcbiAgICAgICAgfSBjYXRjaCAoZXJyb3IpIHtcbiAgICAgICAgICAgIHNwYW4ubG9nKHtcbiAgICAgICAgICAgICAgICBldmVudDogJ2ZhaWxlZCcsXG4gICAgICAgICAgICAgICAgcGF5bG9hZDogZXJyb3IsXG4gICAgICAgICAgICB9KTtcbiAgICAgICAgICAgIHNwYW4uZmluaXNoKCk7XG4gICAgICAgICAgICB0aHJvdyBlcnJvcjtcbiAgICAgICAgfVxuICAgIH1cblxuICAgIC8vIEludGVybmFsc1xuXG4gICAgc3RhdGljIGNsaWVudFBsYXRmb3JtOiA/VE9OQ2xpZW50UGxhdGZvcm0gPSBudWxsO1xuICAgIHN0YXRpYyBjb3JlTGlicmFyeTogP1RPTkNsaWVudENvcmVMaWJyYXJ5ID0gbnVsbDtcblxuICAgIG1vZHVsZXM6IE1hcDxzdHJpbmcsIFRPTk1vZHVsZT47XG59XG5cblxuZXhwb3J0IGNvbnN0IFRPTkVycm9yU291cmNlID0ge1xuICAgIENMSUVOVDogJ2NsaWVudCcsXG4gICAgTk9ERTogJ25vZGUnLFxufTtcblxuZXhwb3J0IGNvbnN0IFRPTkVycm9yQ29kZSA9IHtcbiAgICBDTElFTlRfRE9FU19OT1RfQ09ORklHVVJFRDogMTAwMCxcbiAgICBTRU5EX05PREVfUkVRVUVTVF9GQUlMRUQ6IDEwMDEsXG4gICAgTUVTU0FHRV9BTFJFQURZX0VYUElSRUQ6IDEwMDEsXG4gICAgUlVOX0xPQ0FMX0FDQ09VTlRfRE9FU19OT1RfRVhJU1RTOiAxMDAyLFxuICAgIFdBSVRfRk9SX1RJTUVPVVQ6IDEwMDMsXG4gICAgSU5URVJOQUxfRVJST1I6IDEwMDQsXG4gICAgUVVFUllfRkFJTEVEOiAxMDA1LFxuICAgIE1FU1NBR0VfRVhQSVJFRDogMTAwNixcbiAgICBTRVJWRVJfRE9FU05UX1NVUFBPUlRfQUdHUkVHQVRJT05TOiAxMDA3LFxuICAgIElOVkFMSURfQ09OUzogMTAwOCxcbiAgICBBRERSRVNTX1JFUVVJUkVEX0ZPUl9SVU5fTE9DQUw6IDEwMDksXG4gICAgTkVUV09SS19TSUxFTlQ6IDEwMTAsXG4gICAgVFJBTlNBQ1RJT05fTEFHOiAxMDExLFxuICAgIFRSQU5TQUNUSU9OX1dBSVRfVElNRU9VVDogMTAxMixcbiAgICBDTE9DS19PVVRfT0ZfU1lOQzogMTAxMyxcbiAgICBBQ0NPVU5UX01JU1NJTkc6IDEwMTQsXG4gICAgQUNDT1VOVF9DT0RFX01JU1NJTkc6IDEwMTUsXG4gICAgQUNDT1VOVF9CQUxBTkNFX1RPT19MT1c6IDEwMTYsXG4gICAgQUNDT1VOVF9GUk9aRU5fT1JfREVMRVRFRDogMTAxNyxcblxuICAgIC8vIENvbnRyYWN0c1xuXG4gICAgQ09OVFJBQ1RfRVhFQ1VUSU9OX0ZBSUxFRDogMzAyNSxcblxuICAgIC8vIFF1ZXJpZXNcblxuICAgIFJFUVVFU1RfRk9SQ0lCTFlfVEVSTUlOQVRFRDogNDAwNSxcbn07XG5cbmV4cG9ydCBjb25zdCBUT05Db250cmFjdEV4aXRDb2RlID0ge1xuICAgIFJFUExBWV9QUk9URUNUSU9OOiA1MixcbiAgICBNRVNTQUdFX0VYUElSRUQ6IDU3LFxuICAgIE5PX0dBUzogMTMsXG59O1xuXG5leHBvcnQgY2xhc3MgVE9OQ2xpZW50RXJyb3Ige1xuICAgIHN0YXRpYyBzb3VyY2UgPSBUT05FcnJvclNvdXJjZTtcbiAgICBzdGF0aWMgY29kZSA9IFRPTkVycm9yQ29kZTtcbiAgICBzdGF0aWMgY29yZVZlcnNpb24gPSAnJztcblxuXG4gICAgbWVzc2FnZTogc3RyaW5nO1xuICAgIHNvdXJjZTogc3RyaW5nO1xuICAgIGNvZGU6IG51bWJlcjtcbiAgICBkYXRhOiBhbnk7XG4gICAgY29yZVZlcnNpb246IHN0cmluZztcblxuICAgIGNvbnN0cnVjdG9yKG1lc3NhZ2U6IHN0cmluZywgY29kZTogbnVtYmVyLCBzb3VyY2U/OiBzdHJpbmcsIGRhdGE/OiBhbnkpIHtcbiAgICAgICAgdGhpcy5tZXNzYWdlID0gbWVzc2FnZTtcbiAgICAgICAgdGhpcy5jb2RlID0gY29kZTtcbiAgICAgICAgdGhpcy5zb3VyY2UgPSBzb3VyY2UgfHwgVE9ORXJyb3JTb3VyY2UuQ0xJRU5UO1xuICAgICAgICB0aGlzLmNvcmVWZXJzaW9uID0gVE9OQ2xpZW50RXJyb3IuY29yZVZlcnNpb247XG4gICAgICAgIHRoaXMuZGF0YSA9IGRhdGE7XG4gICAgfVxuXG4gICAgc3RhdGljIGlzQ2xpZW50RXJyb3IoZXJyb3I6IGFueSwgY29kZTogbnVtYmVyKTogYm9vbGVhbiB7XG4gICAgICAgIHJldHVybiAoZXJyb3Iuc291cmNlID09PSBUT05DbGllbnRFcnJvci5zb3VyY2UuQ0xJRU5UKVxuICAgICAgICAgICAgJiYgKGVycm9yLmNvZGUgPT09IGNvZGUpO1xuICAgIH1cblxuICAgIHN0YXRpYyBpc05vZGVFcnJvcihlcnJvcjogYW55LCBjb2RlOiBudW1iZXIpOiBib29sZWFuIHtcbiAgICAgICAgcmV0dXJuIChlcnJvci5zb3VyY2UgPT09IFRPTkNsaWVudEVycm9yLnNvdXJjZS5OT0RFKVxuICAgICAgICAgICAgJiYgKGVycm9yLmNvZGUgPT09IGNvZGUpO1xuICAgIH1cblxuICAgIHN0YXRpYyBpc0NvbnRyYWN0RXJyb3IoZXJyb3I6IGFueSwgZXhpdENvZGU6IG51bWJlcik6IGJvb2xlYW4ge1xuICAgICAgICByZXR1cm4gKGVycm9yLnNvdXJjZSA9PT0gVE9OQ2xpZW50RXJyb3Iuc291cmNlLk5PREUpXG4gICAgICAgICAgICAmJiAoZXJyb3IuY29kZSA9PT0gVE9OQ2xpZW50RXJyb3IuY29kZS5DT05UUkFDVF9FWEVDVVRJT05fRkFJTEVEKVxuICAgICAgICAgICAgJiYgKGVycm9yLmRhdGEgJiYgZXJyb3IuZGF0YS5leGl0X2NvZGUgPT09IGV4aXRDb2RlKTtcbiAgICB9XG5cbiAgICBzdGF0aWMgaW50ZXJuYWxFcnJvcihtZXNzYWdlOiBzdHJpbmcpOiBUT05DbGllbnRFcnJvciB7XG4gICAgICAgIHJldHVybiBuZXcgVE9OQ2xpZW50RXJyb3IoXG4gICAgICAgICAgICBgSW50ZXJuYWwgZXJyb3I6ICR7bWVzc2FnZX1gLFxuICAgICAgICAgICAgVE9ORXJyb3JDb2RlLklOVEVSTkFMX0VSUk9SLFxuICAgICAgICApO1xuICAgIH1cblxuICAgIHN0YXRpYyBpbnZhbGlkQ29ucygpOiBUT05DbGllbnRFcnJvciB7XG4gICAgICAgIHJldHVybiBuZXcgVE9OQ2xpZW50RXJyb3IoXG4gICAgICAgICAgICAnSW52YWxpZCBDT05TIHN0cnVjdHVyZS4gRWFjaCBDT05TIGl0ZW0gbXVzdCBjb250YWlucyBvZiB0d28gZWxlbWVudHMuJyxcbiAgICAgICAgICAgIFRPTkVycm9yQ29kZS5JTlZBTElEX0NPTlMsXG4gICAgICAgICk7XG4gICAgfVxuXG4gICAgc3RhdGljIGNsaWVudERvZXNOb3RDb25maWd1cmVkKCk6IFRPTkNsaWVudEVycm9yIHtcbiAgICAgICAgcmV0dXJuIG5ldyBUT05DbGllbnRFcnJvcihcbiAgICAgICAgICAgICdUT04gQ2xpZW50IGlzblxcJ3QgY29uZmlndXJlZCcsXG4gICAgICAgICAgICBUT05FcnJvckNvZGUuQ0xJRU5UX0RPRVNfTk9UX0NPTkZJR1VSRUQsXG4gICAgICAgICk7XG4gICAgfVxuXG4gICAgc3RhdGljIHNlbmROb2RlUmVxdWVzdEZhaWxlZChyZXNwb25zZVRleHQ6IHN0cmluZyk6IFRPTkNsaWVudEVycm9yIHtcbiAgICAgICAgcmV0dXJuIG5ldyBUT05DbGllbnRFcnJvcihcbiAgICAgICAgICAgIGBTZW5kIG5vZGUgcmVxdWVzdCBmYWlsZWQ6ICR7cmVzcG9uc2VUZXh0fWAsXG4gICAgICAgICAgICBUT05FcnJvckNvZGUuU0VORF9OT0RFX1JFUVVFU1RfRkFJTEVELFxuICAgICAgICApO1xuICAgIH1cblxuICAgIHN0YXRpYyBydW5Mb2NhbEFjY291bnREb2VzTm90RXhpc3RzKGZ1bmN0aW9uTmFtZTogc3RyaW5nLCBhZGRyZXNzOiBzdHJpbmcpOiBUT05DbGllbnRFcnJvciB7XG4gICAgICAgIHJldHVybiBuZXcgVE9OQ2xpZW50RXJyb3IoXG4gICAgICAgICAgICBgWyR7ZnVuY3Rpb25OYW1lfV0gcnVuIGxvY2FsIGZhaWxlZDogYWNjb3VudCBbJHthZGRyZXNzfV0gZG9lcyBub3QgZXhpc3RzYCxcbiAgICAgICAgICAgIFRPTkVycm9yQ29kZS5SVU5fTE9DQUxfQUNDT1VOVF9ET0VTX05PVF9FWElTVFMsXG4gICAgICAgICk7XG4gICAgfVxuXG4gICAgc3RhdGljIHdhaXRGb3JUaW1lb3V0KCkge1xuICAgICAgICByZXR1cm4gbmV3IFRPTkNsaWVudEVycm9yKFxuICAgICAgICAgICAgJ1dhaXQgZm9yIG9wZXJhdGlvbiByZWplY3RlZCBvbiB0aW1lb3V0JyxcbiAgICAgICAgICAgIFRPTkVycm9yQ29kZS5XQUlUX0ZPUl9USU1FT1VULFxuICAgICAgICApO1xuICAgIH1cblxuICAgIHN0YXRpYyBxdWVyeUZhaWxlZChlcnJvcnM6IEVycm9yW10pIHtcbiAgICAgICAgcmV0dXJuIG5ldyBUT05DbGllbnRFcnJvcihcbiAgICAgICAgICAgIGBRdWVyeSBmYWlsZWQ6ICR7ZXJyb3JzLm1hcCh4ID0+IHgubWVzc2FnZSB8fCB4LnRvU3RyaW5nKCkpLmpvaW4oJ1xcbicpfWAsXG4gICAgICAgICAgICBUT05FcnJvckNvZGUuUVVFUllfRkFJTEVELFxuICAgICAgICApO1xuICAgIH1cblxuICAgIHN0YXRpYyBmb3JtYXRUaW1lKHRpbWU6ID9udW1iZXIpOiA/c3RyaW5nIHtcbiAgICAgICAgaWYgKHRpbWUpIHtcbiAgICAgICAgICAgIHJldHVybiBgJHtuZXcgRGF0ZSh0aW1lICogMTAwMCkudG9JU09TdHJpbmcoKX0gKCR7dGltZX0pYDtcbiAgICAgICAgfVxuICAgICAgICByZXR1cm4gbnVsbDtcbiAgICB9XG5cbiAgICBzdGF0aWMgbWVzc2FnZUV4cGlyZWQoZGF0YToge1xuICAgICAgICBtZXNzYWdlSWQ6IHN0cmluZyxcbiAgICAgICAgc2VuZGluZ1RpbWU6IG51bWJlcixcbiAgICAgICAgZXhwaXJlOiA/bnVtYmVyLFxuICAgICAgICBibG9ja1RpbWU6ID9udW1iZXIsXG4gICAgfSkge1xuICAgICAgICByZXR1cm4gbmV3IFRPTkNsaWVudEVycm9yKFxuICAgICAgICAgICAgJ01lc3NhZ2UgZXhwaXJlZCcsXG4gICAgICAgICAgICBUT05FcnJvckNvZGUuTUVTU0FHRV9FWFBJUkVELFxuICAgICAgICAgICAgVE9ORXJyb3JTb3VyY2UuQ0xJRU5ULFxuICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgIHNlbmRpbmdUaW1lOiBUT05DbGllbnRFcnJvci5mb3JtYXRUaW1lKGRhdGEuc2VuZGluZ1RpbWUpLFxuICAgICAgICAgICAgICAgIGV4cGlyYXRpb25UaW1lOiBUT05DbGllbnRFcnJvci5mb3JtYXRUaW1lKGRhdGEuZXhwaXJlKSxcbiAgICAgICAgICAgICAgICBibG9ja1RpbWU6IFRPTkNsaWVudEVycm9yLmZvcm1hdFRpbWUoZGF0YS5ibG9ja1RpbWUpLFxuICAgICAgICAgICAgfSxcbiAgICAgICAgKTtcbiAgICB9XG5cbiAgICBzdGF0aWMgc2VydmVyRG9lc250U3VwcG9ydEFnZ3JlZ2F0aW9ucygpIHtcbiAgICAgICAgcmV0dXJuIG5ldyBUT05DbGllbnRFcnJvcihcbiAgICAgICAgICAgICdTZXJ2ZXIgZG9lc25cXCd0IHN1cHBvcnQgYWdncmVnYXRpb25zJyxcbiAgICAgICAgICAgIFRPTkVycm9yQ29kZS5TRVJWRVJfRE9FU05UX1NVUFBPUlRfQUdHUkVHQVRJT05TLFxuICAgICAgICApO1xuICAgIH1cblxuICAgIHN0YXRpYyBhZGRyZXNzUmVxdWlyZWRGb3JSdW5Mb2NhbCgpIHtcbiAgICAgICAgcmV0dXJuIG5ldyBUT05DbGllbnRFcnJvcihcbiAgICAgICAgICAgICdBZGRyZXNzIHJlcXVpcmVkIGZvciBydW4gbG9jYWwuIFlvdSBoYXZlblxcJ3Qgc3BlY2lmaWVkIGNvbnRyYWN0IGNvZGUgb3IgZGF0YSAnXG4gICAgICAgICAgICArICdzbyBhZGRyZXNzIGlzIHJlcXVpcmVkIHRvIGxvYWQgbWlzc2luZyBwYXJ0cyBmcm9tIG5ldHdvcmsuJyxcbiAgICAgICAgICAgIFRPTkNsaWVudEVycm9yLmNvZGUuQUREUkVTU19SRVFVSVJFRF9GT1JfUlVOX0xPQ0FMLFxuICAgICAgICAgICAgVE9OQ2xpZW50RXJyb3Iuc291cmNlLkNMSUVOVCxcbiAgICAgICAgKTtcbiAgICB9XG5cbiAgICBzdGF0aWMgbmV0d29ya1NpbGVudChkYXRhOiB7XG4gICAgICAgIG1lc3NhZ2VJZDogc3RyaW5nLFxuICAgICAgICBzZW5kaW5nVGltZTogbnVtYmVyLFxuICAgICAgICBleHBpcmU6IG51bWJlcixcbiAgICAgICAgdGltZW91dDogbnVtYmVyLFxuICAgICAgICBibG9ja0lkPzogc3RyaW5nLFxuICAgICAgICBtZXNzYWdlUHJvY2Vzc2luZ1N0YXRlPzogVE9OTWVzc2FnZVByb2Nlc3NpbmdTdGF0ZSxcbiAgICB9KSB7XG4gICAgICAgIHJldHVybiBuZXcgVE9OQ2xpZW50RXJyb3IoXG4gICAgICAgICAgICAnTmV0d29yayBzaWxlbnQ6IG5vIGJsb2NrcyBwcm9kdWNlZCBkdXJpbmcgdGltZW91dC4nLFxuICAgICAgICAgICAgVE9ORXJyb3JDb2RlLk5FVFdPUktfU0lMRU5ULFxuICAgICAgICAgICAgVE9ORXJyb3JTb3VyY2UuQ0xJRU5ULFxuICAgICAgICAgICAgZGF0YSAmJiB7XG4gICAgICAgICAgICAgICAgLi4uZGF0YSxcbiAgICAgICAgICAgICAgICBzZW5kaW5nVGltZTogVE9OQ2xpZW50RXJyb3IuZm9ybWF0VGltZShkYXRhLnNlbmRpbmdUaW1lKSxcbiAgICAgICAgICAgICAgICBleHBpcmF0aW9uVGltZTogVE9OQ2xpZW50RXJyb3IuZm9ybWF0VGltZShkYXRhLmV4cGlyZSksXG4gICAgICAgICAgICB9LFxuICAgICAgICApO1xuICAgIH1cblxuICAgIHN0YXRpYyB0cmFuc2FjdGlvbldhaXRUaW1lb3V0KGRhdGE6IHtcbiAgICAgICAgbWVzc2FnZUlkOiBzdHJpbmcsXG4gICAgICAgIHNlbmRpbmdUaW1lOiBudW1iZXIsXG4gICAgICAgIHRpbWVvdXQ6IG51bWJlcixcbiAgICAgICAgbWVzc2FnZVByb2Nlc3NpbmdTdGF0ZT86IFRPTk1lc3NhZ2VQcm9jZXNzaW5nU3RhdGUsXG4gICAgfSkge1xuICAgICAgICByZXR1cm4gbmV3IFRPTkNsaWVudEVycm9yKFxuICAgICAgICAgICAgJ1RyYW5zYWN0aW9uIGRpZCBub3QgcHJvZHVjZWQgZHVyaW5nIHNwZWNpZmllZCB0aW1lb3V0JyxcbiAgICAgICAgICAgIFRPTkVycm9yQ29kZS5UUkFOU0FDVElPTl9XQUlUX1RJTUVPVVQsXG4gICAgICAgICAgICBUT05FcnJvclNvdXJjZS5DTElFTlQsXG4gICAgICAgICAgICBkYXRhICYmIHtcbiAgICAgICAgICAgICAgICAuLi5kYXRhLFxuICAgICAgICAgICAgICAgIHNlbmRpbmdUaW1lOiBUT05DbGllbnRFcnJvci5mb3JtYXRUaW1lKGRhdGEuc2VuZGluZ1RpbWUpLFxuICAgICAgICAgICAgfSxcbiAgICAgICAgKTtcbiAgICB9XG5cbiAgICBzdGF0aWMgY2xvY2tPdXRPZlN5bmMoKSB7XG4gICAgICAgIHJldHVybiBuZXcgVE9OQ2xpZW50RXJyb3IoXG4gICAgICAgICAgICAnWW91IGxvY2FsIGNsb2NrIGlzIG91dCBvZiBzeW5jIHdpdGggdGhlIHNlcnZlciB0aW1lLiAnXG4gICAgICAgICAgICArICdJdCBpcyBhIGNyaXRpY2FsIGNvbmRpdGlvbiBmb3Igc2VuZGluZyBtZXNzYWdlcyB0byB0aGUgYmxvY2tjaGFpbi4gJ1xuICAgICAgICAgICAgKyAnUGxlYXNlIHN5bmMgeW91IGNsb2NrIHdpdGggdGhlIGludGVybmV0IHRpbWUuJyxcbiAgICAgICAgICAgIFRPTkVycm9yQ29kZS5DTE9DS19PVVRfT0ZfU1lOQyxcbiAgICAgICAgKTtcbiAgICB9XG5cbiAgICBzdGF0aWMgYWNjb3VudE1pc3NpbmcoYWRkcmVzczogc3RyaW5nKSB7XG4gICAgICAgIHJldHVybiBuZXcgVE9OQ2xpZW50RXJyb3IoXG4gICAgICAgICAgICBgQWNjb3VudCB3aXRoIGFkZHJlc3MgWyR7YWRkcmVzc31dIGRvZXNuJ3QgZXhpc3RzLiBgXG4gICAgICAgICAgICArICdZb3UgaGF2ZSB0byBwcmVwYWlkIHRoaXMgYWNjb3VudCB0byBoYXZlIGEgcG9zaXRpdmUgYmFsYW5jZSBvbiB0aGVtIGFuZCB0aGVuIGRlcGxveSAnXG4gICAgICAgICAgICArICdhIGNvbnRyYWN0IGNvZGUgZm9yIHRoaXMgYWNjb3VudC4nXG4gICAgICAgICAgICArICdTZWUgU0RLIGRvY3VtZW50YXRpb24gZm9yIGRldGFpbGVkIGluc3RydWN0aW9ucy4nLFxuICAgICAgICAgICAgVE9ORXJyb3JDb2RlLkFDQ09VTlRfTUlTU0lORyxcbiAgICAgICAgKTtcbiAgICB9XG5cbiAgICBzdGF0aWMgYWNjb3VudENvZGVNaXNzaW5nKGFkZHJlc3M6IHN0cmluZywgYmFsYW5jZTogc3RyaW5nKSB7XG4gICAgICAgIHJldHVybiBuZXcgVE9OQ2xpZW50RXJyb3IoXG4gICAgICAgICAgICBgQWNjb3VudCB3aXRoIGFkZHJlc3MgWyR7YWRkcmVzc31dIGV4aXN0cyBidXQgaGF2ZW4ndCBhIGNvbnRyYWN0IGNvZGUgeWV0LiBgXG4gICAgICAgICAgICArICdZb3UgaGF2ZSB0byBlbnN1cmUgdGhhdCBhbiBhY2NvdW50IGhhcyBhbiBlbm91Z2ggYmFsYW5jZSBmb3IgZGVwbG95aW5nICdcbiAgICAgICAgICAgICsgJ2EgY29udHJhY3QgY29kZSBhbmQgdGhlbiBkZXBsb3kgYSBjb250cmFjdCBjb2RlIGZvciB0aGlzIGFjY291bnQuICdcbiAgICAgICAgICAgICsgYEN1cnJlbnQgYWNjb3VudCBiYWxhbmNlIGlzIFske2JhbGFuY2V9XS4gYFxuICAgICAgICAgICAgKyAnU2VlIFNESyBkb2N1bWVudGF0aW9uIGZvciBkZXRhaWxlZCBpbnN0cnVjdGlvbnMuJyxcbiAgICAgICAgICAgIFRPTkVycm9yQ29kZS5BQ0NPVU5UX0NPREVfTUlTU0lORyxcbiAgICAgICAgKTtcbiAgICB9XG5cbiAgICBzdGF0aWMgYWNjb3VudEJhbGFuY2VUb29Mb3coYWRkcmVzczogc3RyaW5nLCBiYWxhbmNlOiBzdHJpbmcpIHtcbiAgICAgICAgcmV0dXJuIG5ldyBUT05DbGllbnRFcnJvcihcbiAgICAgICAgICAgIGBBY2NvdW50IHdpdGggYWRkcmVzcyBbJHthZGRyZXNzfV0gaGFzIHRvbyBsb3cgYmFsYW5jZSBbJHtiYWxhbmNlfV0uIGBcbiAgICAgICAgICAgICsgJ1lvdSBoYXZlIHRvIHNlbmQgc29tZSB2YWx1ZSB0byBhY2NvdW50IGJhbGFuY2UgZnJvbSBvdGhlciBjb250cmFjdCAnXG4gICAgICAgICAgICArICcoZS5nLiBXYWxsZXQgY29udHJhY3QpLiAnXG4gICAgICAgICAgICArICdTZWUgU0RLIGRvY3VtZW50YXRpb24gZm9yIGRldGFpbGVkIGluc3RydWN0aW9ucy4nLFxuICAgICAgICAgICAgVE9ORXJyb3JDb2RlLkFDQ09VTlRfQkFMQU5DRV9UT09fTE9XLFxuICAgICAgICApO1xuICAgIH1cblxuICAgIHN0YXRpYyBub0Jsb2Nrcyh3b3JrY2hhaW46IG51bWJlcikge1xuICAgICAgICBjb25zdCB3b3JrY2hhaW5OYW1lID0gd29ya2NoYWluID09PSAtMSA/ICdtYXN0ZXJjaGFpbicgOiBgd29ya2NoYWluICR7d29ya2NoYWlufWA7XG4gICAgICAgIHJldHVybiBuZXcgVE9OQ2xpZW50RXJyb3IoXG4gICAgICAgICAgICBgXCJObyBibG9ja3MgZm9yICR7d29ya2NoYWluTmFtZX0gZm91bmRcIi5gLFxuICAgICAgICAgICAgVE9ORXJyb3JDb2RlLk5FVFdPUktfU0lMRU5ULFxuICAgICAgICApO1xuICAgIH1cblxuICAgIHN0YXRpYyBpbnZhbGlkQmxvY2tjaGFpbihtZXNzYWdlOiBzdHJpbmcpIHtcbiAgICAgICAgcmV0dXJuIG5ldyBUT05DbGllbnRFcnJvcihtZXNzYWdlLCBUT05FcnJvckNvZGUuTkVUV09SS19TSUxFTlQpO1xuICAgIH1cblxuICAgIHN0YXRpYyBpc01lc3NhZ2VFeHBpcmVkKGVycm9yOiBhbnkpOiBib29sZWFuIHtcbiAgICAgICAgcmV0dXJuIFRPTkNsaWVudEVycm9yLmlzQ2xpZW50RXJyb3IoZXJyb3IsIFRPTkNsaWVudEVycm9yLmNvZGUuTUVTU0FHRV9FWFBJUkVEKTtcbiAgICB9XG5cbiAgICBzdGF0aWMgaXNXYWl0Rm9yVGltZW91dChlcnJvcjogYW55KTogYm9vbGVhbiB7XG4gICAgICAgIHJldHVybiBUT05DbGllbnRFcnJvci5pc0NsaWVudEVycm9yKGVycm9yLCBUT05DbGllbnRFcnJvci5jb2RlLldBSVRfRk9SX1RJTUVPVVQpO1xuICAgIH1cblxuICAgIHN0YXRpYyByZXF1ZXN0Rm9yY2libHlUZXJtaW5hdGVkKCkge1xuICAgICAgICByZXR1cm4gbmV3IFRPTkNsaWVudEVycm9yKFxuICAgICAgICAgICAgYEdyYXBoUUwgcXVlcnkgd2FzIGZvcmNpYmx5IHRlcm1pbmF0ZWQgb24gdGltZW91dC5gLFxuICAgICAgICAgICAgVE9ORXJyb3JDb2RlLlJFUVVFU1RfRk9SQ0lCTFlfVEVSTUlOQVRFRCxcbiAgICAgICAgKTtcbiAgICB9XG59XG4iXX0=