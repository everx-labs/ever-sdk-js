"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.TONClient = void 0;

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uL3NyYy9UT05DbGllbnQuanMiXSwibmFtZXMiOlsiVE9OQ2xpZW50IiwiY2xpZW50UGxhdGZvcm0iLCJtb2R1bGVzIiwiTWFwIiwiY29uZmlnIiwiZ2V0TW9kdWxlIiwiVE9OQ29uZmlnTW9kdWxlIiwiY3J5cHRvIiwiVE9OQ3J5cHRvTW9kdWxlIiwiY29udHJhY3RzIiwiVE9OQ29udHJhY3RzTW9kdWxlIiwiX3F1ZXJpZXMiLCJUT05RdWVyaWVzTW9kdWxlIiwicXVlcmllcyIsIl9jb250ZXh0IiwiX2NvcmVCcmlkZ2UiLCJnZXRDb3JlQnJpZGdlIiwidmFsdWVzIiwibW9kdWxlIiwic2V0dXAiLCJjbG9zZSIsImxpYnJhcnkiLCJjb3JlTGlicmFyeSIsInVuZGVmaW5lZCIsImNvbnRleHQiLCJQcm9taXNlIiwicmVzb2x2ZSIsImNvcmVEZXN0cm95Q29udGV4dCIsImRhdGEiLCJnZXRWZXJzaW9uIiwiZ2V0Q29uZmlnU2VydmVyIiwiZ2V0UXVlcnlVcmwiLCJjb3JlX3ZlcnNpb24iLCJjb25maWdfc2VydmVyIiwicXVlcnlfdXJsIiwicGxhdGZvcm0iLCJjcmVhdGVMaWJyYXJ5IiwidHJ5Q3JlYXRlTGlicmFyeSIsImNvcmVDcmVhdGVDb250ZXh0IiwicmVxdWVzdCIsIm1ldGhvZCIsInBhcmFtc0pzb24iLCJvblJlc3VsdCIsImNvcmVSZXF1ZXN0IiwidHJ5Q3JlYXRlQ29yZUJyaWRnZSIsIk1vZHVsZUNsYXNzIiwibmFtZSIsIm1vZHVsZU5hbWUiLCJleGlzdGluZ01vZHVsZSIsImdldCIsInNldCIsInNlcnZlclRpbWVEZWx0YSIsInNlcnZlck5vdyIsInF1ZXJ5IiwicmVzdWx0IiwiZ2V0TWFuYWdlbWVudEFjY2Vzc0tleSIsInBhcmFtcyIsInNpZ25lZE1hbmFnZW1lbnRBY2Nlc3NLZXkiLCJzaWduS2V5cyIsImFjY291bnRLZXlzIiwibWFuYWdlbWVudEFjY2Vzc0tleSIsIm5hY2xTaWduIiwidGV4dCIsInNlY3JldCIsIl9yZXNvbHZlU2lnbmVkTWFuYWdlbWVudEFjY2Vzc0tleSIsIm11dGF0aW9uIiwiYWNjb3VudCIsImtleXMiLCJyZWdpc3RlckFjY2Vzc0tleXMiLCJyZXZva2VBY2Nlc3NLZXlzIiwidHJhY2VJZCIsInNwYW5JZCIsIm9wZXJhdGlvbk5hbWUiLCJ0cmFjZXIiLCJzcGFuIiwiX3N0YXJ0SW50ZXJuYWxTcGFuIiwiY3R4IiwiZXh0cmFjdCIsIkZPUk1BVF9URVhUX01BUCIsIkRhdGUiLCJub3ciLCJzdGFydFNwYW4iLCJmIiwicGFyZW50U3BhbiIsImNoaWxkT2YiLCJzZXRUYWciLCJUYWdzIiwiU1BBTl9LSU5EIiwiZmluaXNoIiwibG9nIiwiZXZlbnQiLCJwYXlsb2FkIiwiY2xpZW50Iiwic2V0RGF0YSJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7O0FBS0E7O0FBY0E7O0FBQ0E7O0FBQ0E7O0FBRUE7O0FBUUE7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFxQkE7Ozs7O0lBS2FBLFM7OzsrQkFDU0MsYyxFQUFtQztBQUNqREQsTUFBQUEsU0FBUyxDQUFDQyxjQUFWLEdBQTJCQSxjQUEzQjtBQUNILEssQ0FHRDs7OztBQVNBLHVCQUFjO0FBQUE7O0FBQUE7O0FBQUE7O0FBQUE7O0FBQUE7O0FBQUE7O0FBQUE7O0FBQUE7O0FBQUE7O0FBQ1YsU0FBS0MsT0FBTCxHQUFlLElBQUlDLEdBQUosRUFBZjtBQUNBLFNBQUtDLE1BQUwsR0FBYyxLQUFLQyxTQUFMLENBQWVDLDJCQUFmLENBQWQ7QUFDQSxTQUFLQyxNQUFMLEdBQWMsS0FBS0YsU0FBTCxDQUFlRywyQkFBZixDQUFkO0FBQ0EsU0FBS0MsU0FBTCxHQUFpQixLQUFLSixTQUFMLENBQWVLLDhCQUFmLENBQWpCO0FBQ0EsU0FBS0MsUUFBTCxHQUFnQixLQUFLTixTQUFMLENBQWVPLDRCQUFmLENBQWhCO0FBQ0EsU0FBS0MsT0FBTCxHQUFlLEtBQUtGLFFBQXBCO0FBQ0EsU0FBS0csUUFBTCxHQUFnQixDQUFoQjtBQUNBLFNBQUtDLFdBQUwsR0FBbUIsSUFB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LENBQWY7QUFDSDs7OzttR0FHRzFCLEksRUFDQW9DLEMsRUFDQUMsVTs7Ozs7O0FBRU1ULGdCQUFBQSxJLEdBQU8sS0FBS3RFLE1BQUwsQ0FBWXFFLE1BQVosQ0FBbUJRLFNBQW5CLENBQTZCbkMsSUFBN0IsRUFBbUM7QUFBRXNDLGtCQUFBQSxPQUFPLEVBQUVEO0FBQVgsaUJBQW5DLEM7O0FBRVRULGdCQUFBQSxJQUFJLENBQUNXLE1BQUwsQ0FBWUMsa0JBQUtDLFNBQWpCLEVBQTRCLFFBQTVCOzt1QkFDcUJMLENBQUMsQ0FBQ1IsSUFBRCxDOzs7QUFBaEJwQixnQkFBQUEsTTs7QUFDTixvQkFBSUEsTUFBTSxLQUFLL0IsU0FBZixFQUEwQjtBQUN0Qm1ELGtCQUFBQSxJQUFJLENBQUNXLE1BQUwsQ0FBWSxRQUFaLEVBQXNCL0IsTUFBdEI7QUFDSDs7QUFDRG9CLGdCQUFBQSxJQUFJLENBQUNjLE1BQUw7bURBQ09sQyxNOzs7OztBQUVQb0IsZ0JBQUFBLElBQUksQ0FBQ2UsR0FBTCxDQUFTO0FBQ0xDLGtCQUFBQSxLQUFLLEVBQUUsUUFERjtBQUVMQyxrQkFBQUEsT0FBTztBQUZGLGlCQUFUO0FBSUFqQixnQkFBQUEsSUFBSSxDQUFDYyxNQUFMOzs7Ozs7Ozs7Ozs7Ozs7O1FBS1I7Ozs7O29HQXpOb0JwRixNOzs7Ozs7QUFDVndGLGdCQUFBQSxNLEdBQVMsSUFBSTVGLFNBQUosRTtBQUNmNEYsZ0JBQUFBLE1BQU0sQ0FBQ3hGLE1BQVAsQ0FBY3lGLE9BQWQsQ0FBc0J6RixNQUF0Qjs7dUJBQ013RixNQUFNLENBQUN6RSxLQUFQLEU7OzttREFDQ3lFLE07Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O2dCQW5DRjVGLFMsb0JBMFBtQyxJOztnQkExUG5DQSxTLGlCQTJQbUMsSSIsInNvdXJjZXNDb250ZW50IjpbIi8qXG4gKiBDb3B5cmlnaHQgMjAxOC0yMDIwIFRPTiBERVYgU09MVVRJT05TIExURC5cbiAqL1xuLy8gQGZsb3dcblxuaW1wb3J0IHtcbiAgICBUYWdzLCBTcGFuLCBTcGFuQ29udGV4dCwgRk9STUFUX1RFWFRfTUFQLFxufSBmcm9tICdvcGVudHJhY2luZyc7XG5pbXBvcnQgdHlwZSB7XG4gICAgSVRPTkNsaWVudCxcbiAgICBUT05BY2Nlc3NLZXlzTWFuYWdlbWVudFBhcmFtcyxcbiAgICBUT05Db25maWdEYXRhLFxuICAgIFRPTkNvbnRyYWN0cyxcbiAgICBUT05DcnlwdG8sXG4gICAgVE9OUXVlcmllcyxcbiAgICBUT05SZWdpc3RlckFjY2Vzc0tleXNQYXJhbXMsXG4gICAgVE9OUmV2b2tlQWNjZXNzS2V5c1BhcmFtcyxcbn0gZnJvbSAnLi4vdHlwZXMnO1xuXG5pbXBvcnQgVE9OQ29uZmlnTW9kdWxlIGZyb20gJy4vbW9kdWxlcy9UT05Db25maWdNb2R1bGUnO1xuaW1wb3J0IFRPTkNvbnRyYWN0c01vZHVsZSBmcm9tICcuL21vZHVsZXMvVE9OQ29udHJhY3RzTW9kdWxlJztcbmltcG9ydCBUT05DcnlwdG9Nb2R1bGUgZnJvbSAnLi9tb2R1bGVzL1RPTkNyeXB0b01vZHVsZSc7XG4vKiBlc2xpbnQtZGlzYWJsZSBjbGFzcy1tZXRob2RzLXVzZS10aGlzLCBuby11c2UtYmVmb3JlLWRlZmluZSAqL1xuaW1wb3J0IFRPTlF1ZXJpZXNNb2R1bGUgZnJvbSAnLi9tb2R1bGVzL1RPTlF1ZXJpZXNNb2R1bGUnO1xuaW1wb3J0IHR5cGUgeyBUT05FcnJvckRhdGEgfSBmcm9tICcuL1RPTkNsaWVudEVycm9yJztcblxuaW1wb3J0IHR5cGUge1xuICAgIFRPTkNsaWVudENvcmVMaWJyYXJ5LFxuICAgIFRPTkNsaWVudENvcmVCcmlkZ2UsXG4gICAgVE9OTW9kdWxlQ29udGV4dCxcbn0gZnJvbSAnLi9UT05Nb2R1bGUnO1xuaW1wb3J0IHsgVE9OTW9kdWxlIH0gZnJvbSAnLi9UT05Nb2R1bGUnO1xuXG4vKipcbiAqIEphdmFTY3JpcHQgcGxhdGZvcm0gc3BlY2lmaWMgY29uZmlndXJhdGlvblxuICovXG50eXBlIFRPTkNsaWVudFBsYXRmb3JtID0ge1xuICAgIC8qKlxuICAgICAqIFBsYXRmb3JtIHNwZWNpZmljIGBmZXRjaGAgZnVuY3Rpb25cbiAgICAgKi9cbiAgICBmZXRjaDogYW55LFxuICAgIC8qKlxuICAgICAqIFBsYXRmb3JtIHNwZWNpZmljIGBXZWJTb2NrZXRgIGltcGxlbWVudGF0aW9uXG4gICAgICogVGhpcyBpbXBsZW1lbnRhdGlvbiBtdXN0IGNvbmZvcm1zIHRvIFczQyBXZWJTb2NrZXRcbiAgICAgKi9cbiAgICBXZWJTb2NrZXQ6IGFueSxcbiAgICAvKipcbiAgICAgKiBSZXF1ZXN0IGNyZWF0aW9uIG9mIHRoZSBjbGllbnQgY29yZVxuICAgICAqL1xuICAgIGNyZWF0ZUxpYnJhcnk6ICgpID0+IFByb21pc2U8VE9OQ2xpZW50Q29yZUxpYnJhcnk+LFxufTtcblxuLyoqXG4gKiBNYWluIG9iamVjdCBwcm92aWRlZCBmdW5jdGlvbmFsaXR5IG9mIHRoZSBUT04gQ2xpZW50IExpYnJhcnlcbiAqIEVhY2ggaW5zdGFuY2Ugb2YgVE9OQ2xpZW50IGhhcyBvd24gc2V0IG9mIFRPTiBDbGllbnQgbW9kdWxlc1xuICogYW5kIGhhcyBvd24gcHJlY29uZmlndXJlZCBjbGllbnQgY29udGV4dFxuICovXG5leHBvcnQgY2xhc3MgVE9OQ2xpZW50IGltcGxlbWVudHMgVE9OTW9kdWxlQ29udGV4dCwgSVRPTkNsaWVudCB7XG4gICAgc3RhdGljIHNldExpYnJhcnkoY2xpZW50UGxhdGZvcm06IFRPTkNsaWVudFBsYXRmb3JtKSB7XG4gICAgICAgIFRPTkNsaWVudC5jbGllbnRQbGF0Zm9ybSA9IGNsaWVudFBsYXRmb3JtO1xuICAgIH1cblxuXG4gICAgLy8gUHVibGljXG4gICAgY29uZmlnOiBUT05Db25maWdNb2R1bGU7XG4gICAgY3J5cHRvOiBUT05DcnlwdG87XG4gICAgY29udHJhY3RzOiBUT05Db250cmFjdHM7XG4gICAgcXVlcmllczogVE9OUXVlcmllcztcbiAgICBfcXVlcmllczogVE9OUXVlcmllc01vZHVsZTtcbiAgICBfY29udGV4dDogbnVtYmVyO1xuICAgIF9jb3JlQnJpZGdlOiA/VE9OQ2xpZW50Q29yZUJyaWRnZTtcblxuICAgIGNvbnN0cnVjdG9yKCkge1xuICAgICAgICB0aGlzLm1vZHVsZXMgPSBuZXcgTWFwKCk7XG4gICAgICAgIHRoaXMuY29uZmlnID0gdGhpcy5nZXRNb2R1bGUoVE9OQ29uZmlnTW9kdWxlKTtcbiAgICAgICAgdGhpcy5jcnlwdG8gPSB0aGlzLmdldE1vZHVsZShUT05DcnlwdG9Nb2R1bGUpO1xuICAgICAgICB0aGlzLmNvbnRyYWN0cyA9IHRoaXMuZ2V0TW9kdWxlKFRPTkNvbnRyYWN0c01vZHVsZSk7XG4gICAgICAgIHRoaXMuX3F1ZXJpZXMgPSB0aGlzLmdldE1vZHVsZShUT05RdWVyaWVzTW9kdWxlKTtcbiAgICAgICAgdGhpcy5xdWVyaWVzID0gdGhpcy5fcXVlcmllcztcbiAgICAgICAgdGhpcy5fY29udGV4dCA9IDA7XG4gICAgICAgIHRoaXMuX2NvcmVCcmlkZ2UgPSBudWxsO1xuICAgIH1cblxuICAgIC8qKlxuICAgICAqIENvbnZlbmllbnQgd2F5IHRvIGNyZWF0ZSBjb25maWd1cmVkIGluc3RhbmNlIG9mIHRoZSBUT04gQ2xpZW50XG4gICAgICogQHBhcmFtIHtUT05Db25maWdEYXRhfSBjb25maWdcbiAgICAgKiBAcmV0dXJuIHtQcm9taXNlPFRPTkNsaWVudD59XG4gICAgICovXG4gICAgc3RhdGljIGFzeW5jIGNyZWF0ZShjb25maWc6IFRPTkNvbmZpZ0RhdGEpOiBQcm9taXNlPFRPTkNsaWVudD4ge1xuICAgICAgICBjb25zdCBjbGllbnQgPSBuZXcgVE9OQ2xpZW50KCk7XG4gICAgICAgIGNsaWVudC5jb25maWcuc2V0RGF0YShjb25maWcpO1xuICAgICAgICBhd2FpdCBjbGllbnQuc2V0dXAoKTtcbiAgICAgICAgcmV0dXJuIGNsaWVudDtcbiAgICB9XG5cbiAgICAvKipcbiAgICAgKiBTZXQgdXAgdGhlIGNsaWVudCBpbnN0YW5jZVxuICAgICAqIEByZXR1cm4ge1Byb21pc2U8dm9pZD59XG4gICAgICovXG4gICAgYXN5bmMgc2V0dXAoKTogUHJvbWlzZTx2b2lkPiB7XG4gICAgICAgIGF3YWl0IHRoaXMuZ2V0Q29yZUJyaWRnZSgpO1xuICAgICAgICBjb25zdCBtb2R1bGVzOiBUT05Nb2R1bGVbXSA9IFsuLi50aGlzLm1vZHVsZXMudmFsdWVzKCldO1xuICAgICAgICBmb3IgKGNvbnN0IG1vZHVsZSBvZiBtb2R1bGVzKSB7XG4gICAgICAgICAgICBhd2FpdCBtb2R1bGUuc2V0dXAoKTtcbiAgICAgICAgfVxuICAgIH1cblxuICAgIC8qKlxuICAgICAqIFRlYXIgZG93biB0aGlzIGNsaWVudCBpbnN0YW5jZS5cbiAgICAgKiBOb3RlIHRoYXQgYWZ0ZXIgeW91IGhhdmUgY2FsbGVkIHRoaXMgbWV0aG9kIGFsbCBmdXR1cmUgdXNlIG9mIHRoaXMgaW5zdGFuY2Ugd2lsbCBmYWlsXG4gICAgICogQHJldHVybiB7UHJvbWlzZTx2b2lkPn1cbiAgICAgKi9cbiAgICBhc3luYyBjbG9zZSgpOiBQcm9taXNlPHZvaWQ+IHtcbiAgICAgICAgYXdhaXQgdGhpcy5xdWVyaWVzLmNsb3NlKCk7XG4gICAgICAgIGNvbnN0IGxpYnJhcnkgPSBUT05DbGllbnQuY29yZUxpYnJhcnk7XG4gICAgICAgIGlmICh0aGlzLl9jb250ZXh0ID4gMCAmJiBsaWJyYXJ5ICE9PSBudWxsICYmIGxpYnJhcnkgIT09IHVuZGVmaW5lZCkge1xuICAgICAgICAgICAgY29uc3QgY29udGV4dCA9IHRoaXMuX2NvbnRleHQ7XG4gICAgICAgICAgICB0aGlzLl9jb3JlQnJpZGdlID0gbnVsbDtcbiAgICAgICAgICAgIHRoaXMuX2NvbnRleHQgPSAwO1xuICAgICAgICAgICAgYXdhaXQgbmV3IFByb21pc2UocmVzb2x2ZSA9PiBsaWJyYXJ5LmNvcmVEZXN0cm95Q29udGV4dChjb250ZXh0LCByZXNvbHZlKSk7XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICAvLyBUT05Nb2R1bGVDb250ZXh0XG5cbiAgICBhc3luYyBjb21wbGV0ZUVycm9yRGF0YShkYXRhPzogeyBbc3RyaW5nXTogYW55IH0pOiBQcm9taXNlPFRPTkVycm9yRGF0YT4ge1xuICAgICAgICByZXR1cm4ge1xuICAgICAgICAgICAgLi4uZGF0YSxcbiAgICAgICAgICAgIGNvcmVfdmVyc2lvbjogYXdhaXQgdGhpcy5jb25maWcuZ2V0VmVyc2lvbigpLFxuICAgICAgICAgICAgY29uZmlnX3NlcnZlcjogdGhpcy5jb25maWcuZ2V0Q29uZmlnU2VydmVyKCksXG4gICAgICAgICAgICBxdWVyeV91cmw6IHRoaXMuX3F1ZXJpZXMuZ2V0UXVlcnlVcmwoKSxcbiAgICAgICAgfTtcbiAgICB9XG5cbiAgICBhc3luYyB0cnlDcmVhdGVMaWJyYXJ5KCkge1xuICAgICAgICBjb25zdCBwbGF0Zm9ybSA9IFRPTkNsaWVudC5jbGllbnRQbGF0Zm9ybTtcbiAgICAgICAgaWYgKHBsYXRmb3JtID09PSBudWxsIHx8IHBsYXRmb3JtID09PSB1bmRlZmluZWQpIHtcbiAgICAgICAgICAgIHJldHVybiBudWxsO1xuICAgICAgICB9XG4gICAgICAgIFRPTkNsaWVudC5jb3JlTGlicmFyeSA9IGF3YWl0IHBsYXRmb3JtLmNyZWF0ZUxpYnJhcnkoKTtcbiAgICAgICAgcmV0dXJuIFRPTkNsaWVudC5jb3JlTGlicmFyeTtcbiAgICB9XG5cbiAgICBhc3luYyB0cnlDcmVhdGVDb3JlQnJpZGdlKCkge1xuICAgICAgICBjb25zdCBsaWJyYXJ5ID0gVE9OQ2xpZW50LmNvcmVMaWJyYXJ5IHx8IGF3YWl0IHRoaXMudHJ5Q3JlYXRlTGlicmFyeSgpO1xuICAgICAgICBpZiAoIWxpYnJhcnkpIHtcbiAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgfVxuICAgICAgICBpZiAobGlicmFyeS5jb3JlQ3JlYXRlQ29udGV4dCkge1xuICAgICAgICAgICAgdGhpcy5fY29udGV4dCA9IGF3YWl0IG5ldyBQcm9taXNlKChyZXNvbHZlKSA9PiBsaWJyYXJ5LmNvcmVDcmVhdGVDb250ZXh0KHJlc29sdmUpKTtcbiAgICAgICAgICAgIHRoaXMuX2NvcmVCcmlkZ2UgPSB7XG4gICAgICAgICAgICAgICAgcmVxdWVzdDogKFxuICAgICAgICAgICAgICAgICAgICBtZXRob2Q6IHN0cmluZyxcbiAgICAgICAgICAgICAgICAgICAgcGFyYW1zSnNvbjogc3RyaW5nLFxuICAgICAgICAgICAgICAgICAgICBvblJlc3VsdDogKHJlc3VsdEpzb246IHN0cmluZywgZXJyb3JKc29uOiBzdHJpbmcpID0+IHZvaWQsXG4gICAgICAgICAgICAgICAgKTogdm9pZCA9PiB7XG4gICAgICAgICAgICAgICAgICAgIGlmIChUT05DbGllbnQuY29yZUxpYnJhcnkpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIFRPTkNsaWVudC5jb3JlTGlicmFyeS5jb3JlUmVxdWVzdChcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB0aGlzLl9jb250ZXh0LFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIG1ldGhvZCxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBwYXJhbXNKc29uLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIG9uUmVzdWx0LFxuICAgICAgICAgICAgICAgICAgICAgICAgKTtcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICB9O1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgdGhpcy5fY29yZUJyaWRnZSA9IGxpYnJhcnk7XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICBhc3luYyBnZXRDb3JlQnJpZGdlKCk6IFByb21pc2U8P1RPTkNsaWVudENvcmVCcmlkZ2U+IHtcbiAgICAgICAgaWYgKCF0aGlzLl9jb3JlQnJpZGdlKSB7XG4gICAgICAgICAgICBhd2FpdCB0aGlzLnRyeUNyZWF0ZUNvcmVCcmlkZ2UoKTtcbiAgICAgICAgfVxuICAgICAgICByZXR1cm4gdGhpcy5fY29yZUJyaWRnZTtcbiAgICB9XG5cbiAgICBnZXRNb2R1bGU8VD4oTW9kdWxlQ2xhc3M6IHR5cGVvZiBUT05Nb2R1bGUpOiBUIHtcbiAgICAgICAgY29uc3QgbmFtZSA9IE1vZHVsZUNsYXNzLm1vZHVsZU5hbWU7XG4gICAgICAgIGNvbnN0IGV4aXN0aW5nTW9kdWxlID0gdGhpcy5tb2R1bGVzLmdldChuYW1lKTtcbiAgICAgICAgaWYgKGV4aXN0aW5nTW9kdWxlKSB7XG4gICAgICAgICAgICByZXR1cm4gKGV4aXN0aW5nTW9kdWxlOiBhbnkpO1xuICAgICAgICB9XG4gICAgICAgIGNvbnN0IG1vZHVsZSA9IG5ldyBNb2R1bGVDbGFzcyh0aGlzKTtcbiAgICAgICAgdGhpcy5tb2R1bGVzLnNldChuYW1lLCBtb2R1bGUpO1xuICAgICAgICByZXR1cm4gKG1vZHVsZTogYW55KTtcbiAgICB9XG5cbiAgICBzZXJ2ZXJUaW1lRGVsdGEoKTogUHJvbWlzZTxudW1iZXI+IHtcbiAgICAgICAgcmV0dXJuIHRoaXMuX3F1ZXJpZXMuc2VydmVyVGltZURlbHRhKCk7XG4gICAgfVxuXG4gICAgc2VydmVyTm93KCk6IFByb21pc2U8bnVtYmVyPiB7XG4gICAgICAgIHJldHVybiB0aGlzLl9xdWVyaWVzLnNlcnZlck5vdygpO1xuICAgIH1cblxuICAgIGFzeW5jIGdldE1hbmFnZW1lbnRBY2Nlc3NLZXkoKTogUHJvbWlzZTxzdHJpbmc+IHtcbiAgICAgICAgY29uc3QgcmVzdWx0ID0gYXdhaXQgdGhpcy5fcXVlcmllcy5xdWVyeSgncXVlcnl7Z2V0TWFuYWdlbWVudEFjY2Vzc0tleX0nKTtcbiAgICAgICAgcmV0dXJuIHJlc3VsdC5kYXRhLmdldE1hbmFnZW1lbnRBY2Nlc3NLZXk7XG4gICAgfVxuXG5cbiAgICBhc3luYyBfcmVzb2x2ZVNpZ25lZE1hbmFnZW1lbnRBY2Nlc3NLZXkoXG4gICAgICAgIHBhcmFtczogVE9OQWNjZXNzS2V5c01hbmFnZW1lbnRQYXJhbXMsXG4gICAgKTogUHJvbWlzZTxzdHJpbmc+IHtcbiAgICAgICAgaWYgKHBhcmFtcy5zaWduZWRNYW5hZ2VtZW50QWNjZXNzS2V5KSB7XG4gICAgICAgICAgICByZXR1cm4gcGFyYW1zLnNpZ25lZE1hbmFnZW1lbnRBY2Nlc3NLZXk7XG4gICAgICAgIH1cbiAgICAgICAgY29uc3Qgc2lnbktleXMgPSBwYXJhbXMuYWNjb3VudEtleXM7XG4gICAgICAgIGlmIChzaWduS2V5cykge1xuICAgICAgICAgICAgY29uc3QgbWFuYWdlbWVudEFjY2Vzc0tleSA9IGF3YWl0IHRoaXMuZ2V0TWFuYWdlbWVudEFjY2Vzc0tleSgpO1xuICAgICAgICAgICAgcmV0dXJuIHRoaXMuY3J5cHRvLm5hY2xTaWduKFxuICAgICAgICAgICAgICAgIHsgdGV4dDogbWFuYWdlbWVudEFjY2Vzc0tleSB9LFxuICAgICAgICAgICAgICAgIGAke3NpZ25LZXlzLnNlY3JldH0ke3NpZ25LZXlzLnB1YmxpY31gLFxuICAgICAgICAgICAgICAgICdIZXgnLFxuICAgICAgICAgICAgKTtcbiAgICAgICAgfVxuICAgICAgICByZXR1cm4gJyc7XG4gICAgfVxuXG4gICAgYXN5bmMgcmVnaXN0ZXJBY2Nlc3NLZXlzKFxuICAgICAgICBwYXJhbXM6IFRPTlJlZ2lzdGVyQWNjZXNzS2V5c1BhcmFtcyxcbiAgICApOiBQcm9taXNlPG51bWJlcj4ge1xuICAgICAgICBjb25zdCBzaWduZWRNYW5hZ2VtZW50QWNjZXNzS2V5ID0gYXdhaXQgdGhpcy5fcmVzb2x2ZVNpZ25lZE1hbmFnZW1lbnRBY2Nlc3NLZXkocGFyYW1zKTtcbiAgICAgICAgY29uc3QgcmVzdWx0ID0gYXdhaXQgdGhpcy5fcXVlcmllcy5tdXRhdGlvbihcbiAgICAgICAgICAgIGBtdXRhdGlvbiByZWdpc3RlckFjY2Vzc0tleXMoJGFjY291bnQ6IFN0cmluZywgJGtleXM6IFtBY2Nlc3NLZXldLCAkc2lnbmVkTWFuYWdlbWVudEFjY2Vzc0tleTogU3RyaW5nKSB7XG4gICAgICAgICAgICAgICAgICAgIHJlZ2lzdGVyQWNjZXNzS2V5cyhhY2NvdW50OiAkYWNjb3VudCwga2V5czogJGtleXMsIHNpZ25lZE1hbmFnZW1lbnRBY2Nlc3NLZXk6ICRzaWduZWRNYW5hZ2VtZW50QWNjZXNzS2V5KVxuICAgICAgICAgICAgICAgIH1gLCB7XG4gICAgICAgICAgICAgICAgYWNjb3VudDogcGFyYW1zLmFjY291bnQsXG4gICAgICAgICAgICAgICAga2V5czogcGFyYW1zLmtleXMsXG4gICAgICAgICAgICAgICAgc2lnbmVkTWFuYWdlbWVudEFjY2Vzc0tleSxcbiAgICAgICAgICAgIH0sXG4gICAgICAgICk7XG4gICAgICAgIHJldHVybiByZXN1bHQuZGF0YS5yZWdpc3RlckFjY2Vzc0tleXM7XG4gICAgfVxuXG4gICAgYXN5bmMgcmV2b2tlQWNjZXNzS2V5cyhcbiAgICAgICAgcGFyYW1zOiBUT05SZXZva2VBY2Nlc3NLZXlzUGFyYW1zLFxuICAgICk6IFByb21pc2U8bnVtYmVyPiB7XG4gICAgICAgIGNvbnN0IHNpZ25lZE1hbmFnZW1lbnRBY2Nlc3NLZXkgPSBhd2FpdCB0aGlzLl9yZXNvbHZlU2lnbmVkTWFuYWdlbWVudEFjY2Vzc0tleShwYXJhbXMpO1xuICAgICAgICBjb25zdCByZXN1bHQgPSBhd2FpdCB0aGlzLl9xdWVyaWVzLm11dGF0aW9uKFxuICAgICAgICAgICAgYG11dGF0aW9uIHJldm9rZUFjY2Vzc0tleXMoJGFjY291bnQ6IFN0cmluZywgJGtleXM6IFtTdHJpbmddLCAkc2lnbmVkTWFuYWdlbWVudEFjY2Vzc0tleTogU3RyaW5nKSB7XG4gICAgICAgICAgICAgICAgICAgIHJldm9rZUFjY2Vzc0tleXMoYWNjb3VudDogJGFjY291bnQsIGtleXM6ICRrZXlzLCBzaWduZWRNYW5hZ2VtZW50QWNjZXNzS2V5OiAkc2lnbmVkTWFuYWdlbWVudEFjY2Vzc0tleSlcbiAgICAgICAgICAgICAgICB9YCwge1xuICAgICAgICAgICAgICAgIGFjY291bnQ6IHBhcmFtcy5hY2NvdW50LFxuICAgICAgICAgICAgICAgIGtleXM6IHBhcmFtcy5rZXlzLFxuICAgICAgICAgICAgICAgIHNpZ25lZE1hbmFnZW1lbnRBY2Nlc3NLZXksXG4gICAgICAgICAgICB9LFxuICAgICAgICApO1xuICAgICAgICByZXR1cm4gcmVzdWx0LmRhdGEucmV2b2tlQWNjZXNzS2V5cztcbiAgICB9XG5cbiAgICBzdGFydFJvb3RTcGFuKHRyYWNlSWQ6IHN0cmluZywgc3BhbklkOiBzdHJpbmcsIG9wZXJhdGlvbk5hbWU6IHN0cmluZyk6IFNwYW4ge1xuICAgICAgICBjb25zdCB0cmFjZXIgPSB0aGlzLmNvbmZpZy50cmFjZXI7XG4gICAgICAgIGxldCBzcGFuOiA/U3BhbiA9IG51bGw7XG4gICAgICAgIGlmICh0cmFjZXIuX3N0YXJ0SW50ZXJuYWxTcGFuKSB7XG4gICAgICAgICAgICB0cnkge1xuICAgICAgICAgICAgICAgIGNvbnN0IGN0eCA9IHRyYWNlci5leHRyYWN0KEZPUk1BVF9URVhUX01BUCwge1xuICAgICAgICAgICAgICAgICAgICAndWJlci10cmFjZS1pZCc6IGAke3RyYWNlSWR9OiR7c3BhbklkfTowOjFgLFxuICAgICAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgICAgIGlmIChjdHgpIHtcbiAgICAgICAgICAgICAgICAgICAgc3BhbiA9IHRoaXMuY29uZmlnLnRyYWNlci5fc3RhcnRJbnRlcm5hbFNwYW4oXG4gICAgICAgICAgICAgICAgICAgICAgICBjdHgsXG4gICAgICAgICAgICAgICAgICAgICAgICBvcGVyYXRpb25OYW1lLFxuICAgICAgICAgICAgICAgICAgICAgICAgRGF0ZS5ub3coKSwgLy8gc3RhcnRUaW1lXG4gICAgICAgICAgICAgICAgICAgICAgICB1bmRlZmluZWQsIC8vIHVzZXJUYWdzXG4gICAgICAgICAgICAgICAgICAgICAgICB7fSwgLy8gaW50ZXJuYWxUYWdzXG4gICAgICAgICAgICAgICAgICAgICAgICBbXSwgLy8gcmVmZXJlbmNlc1xuICAgICAgICAgICAgICAgICAgICAgICAgZmFsc2UsIC8vIGhhc1ZhbGlkUGFyZW50XG4gICAgICAgICAgICAgICAgICAgICAgICBmYWxzZSwgLy8gaXNScGNTZXJ2ZXJcbiAgICAgICAgICAgICAgICAgICAgKTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9IGNhdGNoIHtcbiAgICAgICAgICAgICAgICAvLyB0cmFjZXIgY2FuJ3QgY3JlYXRlIG1lc3NhZ2Ugc3BhbiB1c2luZyBwcml2YXRlIG1ldGhvZCxcbiAgICAgICAgICAgICAgICAvLyBzbyB3ZSBhcmUgZmFsbGJhY2sgdG8gY3JlYXRlIHNwYW4gdXNpbmcgcmVndWxhciBtZXRob2RcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgICByZXR1cm4gc3BhbiB8fCB0cmFjZXIuc3RhcnRTcGFuKG9wZXJhdGlvbk5hbWUpO1xuICAgIH1cblxuICAgIGFzeW5jIHRyYWNlPFQ+KFxuICAgICAgICBuYW1lOiBzdHJpbmcsXG4gICAgICAgIGY6IChzcGFuOiBTcGFuKSA9PiBQcm9taXNlPFQ+LFxuICAgICAgICBwYXJlbnRTcGFuPzogKFNwYW4gfCBTcGFuQ29udGV4dCksXG4gICAgKTogUHJvbWlzZTxUPiB7XG4gICAgICAgIGNvbnN0IHNwYW4gPSB0aGlzLmNvbmZpZy50cmFjZXIuc3RhcnRTcGFuKG5hbWUsIHsgY2hpbGRPZjogcGFyZW50U3BhbiB9KTtcbiAgICAgICAgdHJ5IHtcbiAgICAgICAgICAgIHNwYW4uc2V0VGFnKFRhZ3MuU1BBTl9LSU5ELCAnY2xpZW50Jyk7XG4gICAgICAgICAgICBjb25zdCByZXN1bHQgPSBhd2FpdCBmKHNwYW4pO1xuICAgICAgICAgICAgaWYgKHJlc3VsdCAhPT0gdW5kZWZpbmVkKSB7XG4gICAgICAgICAgICAgICAgc3Bhbi5zZXRUYWcoJ3Jlc3VsdCcsIHJlc3VsdCk7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBzcGFuLmZpbmlzaCgpO1xuICAgICAgICAgICAgcmV0dXJuIHJlc3VsdDtcbiAgICAgICAgfSBjYXRjaCAoZXJyb3IpIHtcbiAgICAgICAgICAgIHNwYW4ubG9nKHtcbiAgICAgICAgICAgICAgICBldmVudDogJ2ZhaWxlZCcsXG4gICAgICAgICAgICAgICAgcGF5bG9hZDogZXJyb3IsXG4gICAgICAgICAgICB9KTtcbiAgICAgICAgICAgIHNwYW4uZmluaXNoKCk7XG4gICAgICAgICAgICB0aHJvdyBlcnJvcjtcbiAgICAgICAgfVxuICAgIH1cblxuICAgIC8vIEludGVybmFsc1xuXG4gICAgc3RhdGljIGNsaWVudFBsYXRmb3JtOiA/VE9OQ2xpZW50UGxhdGZvcm0gPSBudWxsO1xuICAgIHN0YXRpYyBjb3JlTGlicmFyeTogP1RPTkNsaWVudENvcmVMaWJyYXJ5ID0gbnVsbDtcblxuICAgIG1vZHVsZXM6IE1hcDxzdHJpbmcsIFRPTk1vZHVsZT47XG59XG4iXX0=