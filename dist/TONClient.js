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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uL3NyYy9UT05DbGllbnQuanMiXSwibmFtZXMiOlsiVE9OQ2xpZW50IiwiY2xpZW50UGxhdGZvcm0iLCJtb2R1bGVzIiwiTWFwIiwiY29uZmlnIiwiZ2V0TW9kdWxlIiwiVE9OQ29uZmlnTW9kdWxlIiwiY3J5cHRvIiwiVE9OQ3J5cHRvTW9kdWxlIiwiY29udHJhY3RzIiwiVE9OQ29udHJhY3RzTW9kdWxlIiwiX3F1ZXJpZXMiLCJUT05RdWVyaWVzTW9kdWxlIiwicXVlcmllcyIsIl9jb250ZXh0IiwiX2NvcmVCcmlkZ2UiLCJnZXRDb3JlQnJpZGdlIiwidmFsdWVzIiwibW9kdWxlIiwic2V0dXAiLCJjbG9zZSIsImxpYnJhcnkiLCJjb3JlTGlicmFyeSIsInVuZGVmaW5lZCIsImNvbnRleHQiLCJQcm9taXNlIiwicmVzb2x2ZSIsImNvcmVEZXN0cm95Q29udGV4dCIsImRhdGEiLCJnZXRWZXJzaW9uIiwiZ2V0Q29uZmlnU2VydmVyIiwiZ2V0UXVlcnlVcmwiLCJjb3JlX3ZlcnNpb24iLCJjb25maWdfc2VydmVyIiwicXVlcnlfdXJsIiwicGxhdGZvcm0iLCJjcmVhdGVMaWJyYXJ5IiwidHJ5Q3JlYXRlTGlicmFyeSIsImNvcmVDcmVhdGVDb250ZXh0IiwicmVxdWVzdCIsIm1ldGhvZCIsInBhcmFtc0pzb24iLCJvblJlc3VsdCIsImNvcmVSZXF1ZXN0IiwidHJ5Q3JlYXRlQ29yZUJyaWRnZSIsIk1vZHVsZUNsYXNzIiwibmFtZSIsIm1vZHVsZU5hbWUiLCJleGlzdGluZ01vZHVsZSIsImdldCIsInNldCIsInNlcnZlclRpbWVEZWx0YSIsInNlcnZlck5vdyIsInF1ZXJ5IiwicmVzdWx0IiwiZ2V0TWFuYWdlbWVudEFjY2Vzc0tleSIsInBhcmFtcyIsInNpZ25lZE1hbmFnZW1lbnRBY2Nlc3NLZXkiLCJzaWduS2V5cyIsImFjY291bnRLZXlzIiwibWFuYWdlbWVudEFjY2Vzc0tleSIsIm5hY2xTaWduIiwidGV4dCIsInNlY3JldCIsIl9yZXNvbHZlU2lnbmVkTWFuYWdlbWVudEFjY2Vzc0tleSIsIm11dGF0aW9uIiwiYWNjb3VudCIsImtleXMiLCJyZWdpc3RlckFjY2Vzc0tleXMiLCJyZXZva2VBY2Nlc3NLZXlzIiwidHJhY2VJZCIsInNwYW5JZCIsIm9wZXJhdGlvbk5hbWUiLCJ0cmFjZXIiLCJzcGFuIiwiX3N0YXJ0SW50ZXJuYWxTcGFuIiwiY3R4IiwiZXh0cmFjdCIsIkZPUk1BVF9URVhUX01BUCIsIkRhdGUiLCJub3ciLCJzdGFydFNwYW4iLCJmIiwicGFyZW50U3BhbiIsImNoaWxkT2YiLCJzZXRUYWciLCJUYWdzIiwiU1BBTl9LSU5EIiwiZmluaXNoIiwibG9nIiwiZXZlbnQiLCJwYXlsb2FkIiwiY2xpZW50Iiwic2V0RGF0YSJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7O0FBS0E7O0FBZ0JBOztBQUNBOztBQUNBOztBQUVBOztBQVFBOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBcUJBOzs7OztJQUthQSxTOzs7K0JBQ1NDLGMsRUFBbUM7QUFDakRELE1BQUFBLFNBQVMsQ0FBQ0MsY0FBVixHQUEyQkEsY0FBM0I7QUFDSCxLLENBR0Q7Ozs7QUFTQSx1QkFBYztBQUFBOztBQUFBOztBQUFBOztBQUFBOztBQUFBOztBQUFBOztBQUFBOztBQUFBOztBQUFBOztBQUNWLFNBQUtDLE9BQUwsR0FBZSxJQUFJQyxHQUFKLEVBQWY7QUFDQSxTQUFLQyxNQUFMLEdBQWMsS0FBS0MsU0FBTCxDQUFlQywyQkFBZixDQUFkO0FBQ0EsU0FBS0MsTUFBTCxHQUFjLEtBQUtGLFNBQUwsQ0FBZUcsMkJBQWYsQ0FBZDtBQUNBLFNBQUtDLFNBQUwsR0FBaUIsS0FBS0osU0FBTCxDQUFlSyw4QkFBZixDQUFqQjtBQUNBLFNBQUtDLFFBQUwsR0FBZ0IsS0FBS04sU0FBTCxDQUFlTyw0QkFBZixDQUFoQjtBQUNBLFNBQUtDLE9BQUwsR0FBZSxLQUFLRixRQUFwQjtBQUNBLFNBQUtHLFFBQUwsR0FBZ0IsQ0FBaEI7QUFDQSxTQUFLQyxXQUFMLEdBQW1CLElB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QixDQUFmO0FBQ0g7Ozs7bUdBR0cxQixJLEVBQ0FvQyxDLEVBQ0FDLFU7Ozs7OztBQUVNVCxnQkFBQUEsSSxHQUFPLEtBQUt0RSxNQUFMLENBQVlxRSxNQUFaLENBQW1CUSxTQUFuQixDQUE2Qm5DLElBQTdCLEVBQW1DO0FBQUVzQyxrQkFBQUEsT0FBTyxFQUFFRDtBQUFYLGlCQUFuQyxDOztBQUVUVCxnQkFBQUEsSUFBSSxDQUFDVyxNQUFMLENBQVlDLGtCQUFLQyxTQUFqQixFQUE0QixRQUE1Qjs7dUJBQ3FCTCxDQUFDLENBQUNSLElBQUQsQzs7O0FBQWhCcEIsZ0JBQUFBLE07O0FBQ04sb0JBQUlBLE1BQU0sS0FBSy9CLFNBQWYsRUFBMEI7QUFDdEJtRCxrQkFBQUEsSUFBSSxDQUFDVyxNQUFMLENBQVksUUFBWixFQUFzQi9CLE1BQXRCO0FBQ0g7O0FBQ0RvQixnQkFBQUEsSUFBSSxDQUFDYyxNQUFMO21EQUNPbEMsTTs7Ozs7QUFFUG9CLGdCQUFBQSxJQUFJLENBQUNlLEdBQUwsQ0FBUztBQUNMQyxrQkFBQUEsS0FBSyxFQUFFLFFBREY7QUFFTEMsa0JBQUFBLE9BQU87QUFGRixpQkFBVDtBQUlBakIsZ0JBQUFBLElBQUksQ0FBQ2MsTUFBTDs7Ozs7Ozs7Ozs7Ozs7OztRQUtSOzs7OztvR0F6Tm9CcEYsTTs7Ozs7O0FBQ1Z3RixnQkFBQUEsTSxHQUFTLElBQUk1RixTQUFKLEU7QUFDZjRGLGdCQUFBQSxNQUFNLENBQUN4RixNQUFQLENBQWN5RixPQUFkLENBQXNCekYsTUFBdEI7O3VCQUNNd0YsTUFBTSxDQUFDekUsS0FBUCxFOzs7bURBQ0N5RSxNOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztnQkFuQ0Y1RixTLG9CQTBQbUMsSTs7Z0JBMVBuQ0EsUyxpQkEyUG1DLEkiLCJzb3VyY2VzQ29udGVudCI6WyIvKlxuICogQ29weXJpZ2h0IDIwMTgtMjAyMCBUT04gREVWIFNPTFVUSU9OUyBMVEQuXG4gKi9cbi8vIEBmbG93XG5cbmltcG9ydCB7XG4gICAgVGFncywgU3BhbiwgU3BhbkNvbnRleHQsIEZPUk1BVF9URVhUX01BUCxcbn0gZnJvbSAnb3BlbnRyYWNpbmcnO1xuaW1wb3J0IHR5cGUge1xuICAgIElUT05DbGllbnQsXG4gICAgVE9OQWNjZXNzS2V5c01hbmFnZW1lbnRQYXJhbXMsXG4gICAgVE9OQ29uZmlnRGF0YSxcbiAgICBUT05Db250cmFjdHMsXG4gICAgVE9OQ3J5cHRvLFxuICAgIFRPTklucHV0TWVzc2FnZSxcbiAgICBUT05NZXNzYWdlUHJvY2Vzc2luZ1N0YXRlLFxuICAgIFRPTlF1ZXJpZXMsXG4gICAgVE9OUmVnaXN0ZXJBY2Nlc3NLZXlzUGFyYW1zLFxuICAgIFRPTlJldm9rZUFjY2Vzc0tleXNQYXJhbXMsXG59IGZyb20gJy4uL3R5cGVzJztcblxuaW1wb3J0IFRPTkNvbmZpZ01vZHVsZSBmcm9tICcuL21vZHVsZXMvVE9OQ29uZmlnTW9kdWxlJztcbmltcG9ydCBUT05Db250cmFjdHNNb2R1bGUgZnJvbSAnLi9tb2R1bGVzL1RPTkNvbnRyYWN0c01vZHVsZSc7XG5pbXBvcnQgVE9OQ3J5cHRvTW9kdWxlIGZyb20gJy4vbW9kdWxlcy9UT05DcnlwdG9Nb2R1bGUnO1xuLyogZXNsaW50LWRpc2FibGUgY2xhc3MtbWV0aG9kcy11c2UtdGhpcywgbm8tdXNlLWJlZm9yZS1kZWZpbmUgKi9cbmltcG9ydCBUT05RdWVyaWVzTW9kdWxlIGZyb20gJy4vbW9kdWxlcy9UT05RdWVyaWVzTW9kdWxlJztcbmltcG9ydCB0eXBlIHsgVE9ORXJyb3JEYXRhIH0gZnJvbSAnLi9UT05DbGllbnRFcnJvcic7XG5cbmltcG9ydCB0eXBlIHtcbiAgICBUT05DbGllbnRDb3JlTGlicmFyeSxcbiAgICBUT05DbGllbnRDb3JlQnJpZGdlLFxuICAgIFRPTk1vZHVsZUNvbnRleHQsXG59IGZyb20gJy4vVE9OTW9kdWxlJztcbmltcG9ydCB7IFRPTk1vZHVsZSB9IGZyb20gJy4vVE9OTW9kdWxlJztcblxuLyoqXG4gKiBKYXZhU2NyaXB0IHBsYXRmb3JtIHNwZWNpZmljIGNvbmZpZ3VyYXRpb25cbiAqL1xudHlwZSBUT05DbGllbnRQbGF0Zm9ybSA9IHtcbiAgICAvKipcbiAgICAgKiBQbGF0Zm9ybSBzcGVjaWZpYyBgZmV0Y2hgIGZ1bmN0aW9uXG4gICAgICovXG4gICAgZmV0Y2g6IGFueSxcbiAgICAvKipcbiAgICAgKiBQbGF0Zm9ybSBzcGVjaWZpYyBgV2ViU29ja2V0YCBpbXBsZW1lbnRhdGlvblxuICAgICAqIFRoaXMgaW1wbGVtZW50YXRpb24gbXVzdCBjb25mb3JtcyB0byBXM0MgV2ViU29ja2V0XG4gICAgICovXG4gICAgV2ViU29ja2V0OiBhbnksXG4gICAgLyoqXG4gICAgICogUmVxdWVzdCBjcmVhdGlvbiBvZiB0aGUgY2xpZW50IGNvcmVcbiAgICAgKi9cbiAgICBjcmVhdGVMaWJyYXJ5OiAoKSA9PiBQcm9taXNlPFRPTkNsaWVudENvcmVMaWJyYXJ5Pixcbn07XG5cbi8qKlxuICogTWFpbiBvYmplY3QgcHJvdmlkZWQgZnVuY3Rpb25hbGl0eSBvZiB0aGUgVE9OIENsaWVudCBMaWJyYXJ5XG4gKiBFYWNoIGluc3RhbmNlIG9mIFRPTkNsaWVudCBoYXMgb3duIHNldCBvZiBUT04gQ2xpZW50IG1vZHVsZXNcbiAqIGFuZCBoYXMgb3duIHByZWNvbmZpZ3VyZWQgY2xpZW50IGNvbnRleHRcbiAqL1xuZXhwb3J0IGNsYXNzIFRPTkNsaWVudCBpbXBsZW1lbnRzIFRPTk1vZHVsZUNvbnRleHQsIElUT05DbGllbnQge1xuICAgIHN0YXRpYyBzZXRMaWJyYXJ5KGNsaWVudFBsYXRmb3JtOiBUT05DbGllbnRQbGF0Zm9ybSkge1xuICAgICAgICBUT05DbGllbnQuY2xpZW50UGxhdGZvcm0gPSBjbGllbnRQbGF0Zm9ybTtcbiAgICB9XG5cblxuICAgIC8vIFB1YmxpY1xuICAgIGNvbmZpZzogVE9OQ29uZmlnTW9kdWxlO1xuICAgIGNyeXB0bzogVE9OQ3J5cHRvO1xuICAgIGNvbnRyYWN0czogVE9OQ29udHJhY3RzO1xuICAgIHF1ZXJpZXM6IFRPTlF1ZXJpZXM7XG4gICAgX3F1ZXJpZXM6IFRPTlF1ZXJpZXNNb2R1bGU7XG4gICAgX2NvbnRleHQ6IG51bWJlcjtcbiAgICBfY29yZUJyaWRnZTogP1RPTkNsaWVudENvcmVCcmlkZ2U7XG5cbiAgICBjb25zdHJ1Y3RvcigpIHtcbiAgICAgICAgdGhpcy5tb2R1bGVzID0gbmV3IE1hcCgpO1xuICAgICAgICB0aGlzLmNvbmZpZyA9IHRoaXMuZ2V0TW9kdWxlKFRPTkNvbmZpZ01vZHVsZSk7XG4gICAgICAgIHRoaXMuY3J5cHRvID0gdGhpcy5nZXRNb2R1bGUoVE9OQ3J5cHRvTW9kdWxlKTtcbiAgICAgICAgdGhpcy5jb250cmFjdHMgPSB0aGlzLmdldE1vZHVsZShUT05Db250cmFjdHNNb2R1bGUpO1xuICAgICAgICB0aGlzLl9xdWVyaWVzID0gdGhpcy5nZXRNb2R1bGUoVE9OUXVlcmllc01vZHVsZSk7XG4gICAgICAgIHRoaXMucXVlcmllcyA9IHRoaXMuX3F1ZXJpZXM7XG4gICAgICAgIHRoaXMuX2NvbnRleHQgPSAwO1xuICAgICAgICB0aGlzLl9jb3JlQnJpZGdlID0gbnVsbDtcbiAgICB9XG5cbiAgICAvKipcbiAgICAgKiBDb252ZW5pZW50IHdheSB0byBjcmVhdGUgY29uZmlndXJlZCBpbnN0YW5jZSBvZiB0aGUgVE9OIENsaWVudFxuICAgICAqIEBwYXJhbSB7VE9OQ29uZmlnRGF0YX0gY29uZmlnXG4gICAgICogQHJldHVybiB7UHJvbWlzZTxUT05DbGllbnQ+fVxuICAgICAqL1xuICAgIHN0YXRpYyBhc3luYyBjcmVhdGUoY29uZmlnOiBUT05Db25maWdEYXRhKTogUHJvbWlzZTxUT05DbGllbnQ+IHtcbiAgICAgICAgY29uc3QgY2xpZW50ID0gbmV3IFRPTkNsaWVudCgpO1xuICAgICAgICBjbGllbnQuY29uZmlnLnNldERhdGEoY29uZmlnKTtcbiAgICAgICAgYXdhaXQgY2xpZW50LnNldHVwKCk7XG4gICAgICAgIHJldHVybiBjbGllbnQ7XG4gICAgfVxuXG4gICAgLyoqXG4gICAgICogU2V0IHVwIHRoZSBjbGllbnQgaW5zdGFuY2VcbiAgICAgKiBAcmV0dXJuIHtQcm9taXNlPHZvaWQ+fVxuICAgICAqL1xuICAgIGFzeW5jIHNldHVwKCk6IFByb21pc2U8dm9pZD4ge1xuICAgICAgICBhd2FpdCB0aGlzLmdldENvcmVCcmlkZ2UoKTtcbiAgICAgICAgY29uc3QgbW9kdWxlczogVE9OTW9kdWxlW10gPSBbLi4udGhpcy5tb2R1bGVzLnZhbHVlcygpXTtcbiAgICAgICAgZm9yIChjb25zdCBtb2R1bGUgb2YgbW9kdWxlcykge1xuICAgICAgICAgICAgYXdhaXQgbW9kdWxlLnNldHVwKCk7XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICAvKipcbiAgICAgKiBUZWFyIGRvd24gdGhpcyBjbGllbnQgaW5zdGFuY2UuXG4gICAgICogTm90ZSB0aGF0IGFmdGVyIHlvdSBoYXZlIGNhbGxlZCB0aGlzIG1ldGhvZCBhbGwgZnV0dXJlIHVzZSBvZiB0aGlzIGluc3RhbmNlIHdpbGwgZmFpbFxuICAgICAqIEByZXR1cm4ge1Byb21pc2U8dm9pZD59XG4gICAgICovXG4gICAgYXN5bmMgY2xvc2UoKTogUHJvbWlzZTx2b2lkPiB7XG4gICAgICAgIGF3YWl0IHRoaXMucXVlcmllcy5jbG9zZSgpO1xuICAgICAgICBjb25zdCBsaWJyYXJ5ID0gVE9OQ2xpZW50LmNvcmVMaWJyYXJ5O1xuICAgICAgICBpZiAodGhpcy5fY29udGV4dCA+IDAgJiYgbGlicmFyeSAhPT0gbnVsbCAmJiBsaWJyYXJ5ICE9PSB1bmRlZmluZWQpIHtcbiAgICAgICAgICAgIGNvbnN0IGNvbnRleHQgPSB0aGlzLl9jb250ZXh0O1xuICAgICAgICAgICAgdGhpcy5fY29yZUJyaWRnZSA9IG51bGw7XG4gICAgICAgICAgICB0aGlzLl9jb250ZXh0ID0gMDtcbiAgICAgICAgICAgIGF3YWl0IG5ldyBQcm9taXNlKHJlc29sdmUgPT4gbGlicmFyeS5jb3JlRGVzdHJveUNvbnRleHQoY29udGV4dCwgcmVzb2x2ZSkpO1xuICAgICAgICB9XG4gICAgfVxuXG4gICAgLy8gVE9OTW9kdWxlQ29udGV4dFxuXG4gICAgYXN5bmMgY29tcGxldGVFcnJvckRhdGEoZGF0YT86IHsgW3N0cmluZ106IGFueSB9KTogUHJvbWlzZTxUT05FcnJvckRhdGE+IHtcbiAgICAgICAgcmV0dXJuIHtcbiAgICAgICAgICAgIC4uLmRhdGEsXG4gICAgICAgICAgICBjb3JlX3ZlcnNpb246IGF3YWl0IHRoaXMuY29uZmlnLmdldFZlcnNpb24oKSxcbiAgICAgICAgICAgIGNvbmZpZ19zZXJ2ZXI6IHRoaXMuY29uZmlnLmdldENvbmZpZ1NlcnZlcigpLFxuICAgICAgICAgICAgcXVlcnlfdXJsOiB0aGlzLl9xdWVyaWVzLmdldFF1ZXJ5VXJsKCksXG4gICAgICAgIH07XG4gICAgfVxuXG4gICAgYXN5bmMgdHJ5Q3JlYXRlTGlicmFyeSgpIHtcbiAgICAgICAgY29uc3QgcGxhdGZvcm0gPSBUT05DbGllbnQuY2xpZW50UGxhdGZvcm07XG4gICAgICAgIGlmIChwbGF0Zm9ybSA9PT0gbnVsbCB8fCBwbGF0Zm9ybSA9PT0gdW5kZWZpbmVkKSB7XG4gICAgICAgICAgICByZXR1cm4gbnVsbDtcbiAgICAgICAgfVxuICAgICAgICBUT05DbGllbnQuY29yZUxpYnJhcnkgPSBhd2FpdCBwbGF0Zm9ybS5jcmVhdGVMaWJyYXJ5KCk7XG4gICAgICAgIHJldHVybiBUT05DbGllbnQuY29yZUxpYnJhcnk7XG4gICAgfVxuXG4gICAgYXN5bmMgdHJ5Q3JlYXRlQ29yZUJyaWRnZSgpIHtcbiAgICAgICAgY29uc3QgbGlicmFyeSA9IFRPTkNsaWVudC5jb3JlTGlicmFyeSB8fCBhd2FpdCB0aGlzLnRyeUNyZWF0ZUxpYnJhcnkoKTtcbiAgICAgICAgaWYgKCFsaWJyYXJ5KSB7XG4gICAgICAgICAgICByZXR1cm47XG4gICAgICAgIH1cbiAgICAgICAgaWYgKGxpYnJhcnkuY29yZUNyZWF0ZUNvbnRleHQpIHtcbiAgICAgICAgICAgIHRoaXMuX2NvbnRleHQgPSBhd2FpdCBuZXcgUHJvbWlzZSgocmVzb2x2ZSkgPT4gbGlicmFyeS5jb3JlQ3JlYXRlQ29udGV4dChyZXNvbHZlKSk7XG4gICAgICAgICAgICB0aGlzLl9jb3JlQnJpZGdlID0ge1xuICAgICAgICAgICAgICAgIHJlcXVlc3Q6IChcbiAgICAgICAgICAgICAgICAgICAgbWV0aG9kOiBzdHJpbmcsXG4gICAgICAgICAgICAgICAgICAgIHBhcmFtc0pzb246IHN0cmluZyxcbiAgICAgICAgICAgICAgICAgICAgb25SZXN1bHQ6IChyZXN1bHRKc29uOiBzdHJpbmcsIGVycm9ySnNvbjogc3RyaW5nKSA9PiB2b2lkLFxuICAgICAgICAgICAgICAgICk6IHZvaWQgPT4ge1xuICAgICAgICAgICAgICAgICAgICBpZiAoVE9OQ2xpZW50LmNvcmVMaWJyYXJ5KSB7XG4gICAgICAgICAgICAgICAgICAgICAgICBUT05DbGllbnQuY29yZUxpYnJhcnkuY29yZVJlcXVlc3QoXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5fY29udGV4dCxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBtZXRob2QsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgcGFyYW1zSnNvbixcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBvblJlc3VsdCxcbiAgICAgICAgICAgICAgICAgICAgICAgICk7XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgfTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIHRoaXMuX2NvcmVCcmlkZ2UgPSBsaWJyYXJ5O1xuICAgICAgICB9XG4gICAgfVxuXG4gICAgYXN5bmMgZ2V0Q29yZUJyaWRnZSgpOiBQcm9taXNlPD9UT05DbGllbnRDb3JlQnJpZGdlPiB7XG4gICAgICAgIGlmICghdGhpcy5fY29yZUJyaWRnZSkge1xuICAgICAgICAgICAgYXdhaXQgdGhpcy50cnlDcmVhdGVDb3JlQnJpZGdlKCk7XG4gICAgICAgIH1cbiAgICAgICAgcmV0dXJuIHRoaXMuX2NvcmVCcmlkZ2U7XG4gICAgfVxuXG4gICAgZ2V0TW9kdWxlPFQ+KE1vZHVsZUNsYXNzOiB0eXBlb2YgVE9OTW9kdWxlKTogVCB7XG4gICAgICAgIGNvbnN0IG5hbWUgPSBNb2R1bGVDbGFzcy5tb2R1bGVOYW1lO1xuICAgICAgICBjb25zdCBleGlzdGluZ01vZHVsZSA9IHRoaXMubW9kdWxlcy5nZXQobmFtZSk7XG4gICAgICAgIGlmIChleGlzdGluZ01vZHVsZSkge1xuICAgICAgICAgICAgcmV0dXJuIChleGlzdGluZ01vZHVsZTogYW55KTtcbiAgICAgICAgfVxuICAgICAgICBjb25zdCBtb2R1bGUgPSBuZXcgTW9kdWxlQ2xhc3ModGhpcyk7XG4gICAgICAgIHRoaXMubW9kdWxlcy5zZXQobmFtZSwgbW9kdWxlKTtcbiAgICAgICAgcmV0dXJuIChtb2R1bGU6IGFueSk7XG4gICAgfVxuXG4gICAgc2VydmVyVGltZURlbHRhKCk6IFByb21pc2U8bnVtYmVyPiB7XG4gICAgICAgIHJldHVybiB0aGlzLl9xdWVyaWVzLnNlcnZlclRpbWVEZWx0YSgpO1xuICAgIH1cblxuICAgIHNlcnZlck5vdygpOiBQcm9taXNlPG51bWJlcj4ge1xuICAgICAgICByZXR1cm4gdGhpcy5fcXVlcmllcy5zZXJ2ZXJOb3coKTtcbiAgICB9XG5cbiAgICBhc3luYyBnZXRNYW5hZ2VtZW50QWNjZXNzS2V5KCk6IFByb21pc2U8c3RyaW5nPiB7XG4gICAgICAgIGNvbnN0IHJlc3VsdCA9IGF3YWl0IHRoaXMuX3F1ZXJpZXMucXVlcnkoJ3F1ZXJ5e2dldE1hbmFnZW1lbnRBY2Nlc3NLZXl9Jyk7XG4gICAgICAgIHJldHVybiByZXN1bHQuZGF0YS5nZXRNYW5hZ2VtZW50QWNjZXNzS2V5O1xuICAgIH1cblxuXG4gICAgYXN5bmMgX3Jlc29sdmVTaWduZWRNYW5hZ2VtZW50QWNjZXNzS2V5KFxuICAgICAgICBwYXJhbXM6IFRPTkFjY2Vzc0tleXNNYW5hZ2VtZW50UGFyYW1zLFxuICAgICk6IFByb21pc2U8c3RyaW5nPiB7XG4gICAgICAgIGlmIChwYXJhbXMuc2lnbmVkTWFuYWdlbWVudEFjY2Vzc0tleSkge1xuICAgICAgICAgICAgcmV0dXJuIHBhcmFtcy5zaWduZWRNYW5hZ2VtZW50QWNjZXNzS2V5O1xuICAgICAgICB9XG4gICAgICAgIGNvbnN0IHNpZ25LZXlzID0gcGFyYW1zLmFjY291bnRLZXlzO1xuICAgICAgICBpZiAoc2lnbktleXMpIHtcbiAgICAgICAgICAgIGNvbnN0IG1hbmFnZW1lbnRBY2Nlc3NLZXkgPSBhd2FpdCB0aGlzLmdldE1hbmFnZW1lbnRBY2Nlc3NLZXkoKTtcbiAgICAgICAgICAgIHJldHVybiB0aGlzLmNyeXB0by5uYWNsU2lnbihcbiAgICAgICAgICAgICAgICB7IHRleHQ6IG1hbmFnZW1lbnRBY2Nlc3NLZXkgfSxcbiAgICAgICAgICAgICAgICBgJHtzaWduS2V5cy5zZWNyZXR9JHtzaWduS2V5cy5wdWJsaWN9YCxcbiAgICAgICAgICAgICAgICAnSGV4JyxcbiAgICAgICAgICAgICk7XG4gICAgICAgIH1cbiAgICAgICAgcmV0dXJuICcnO1xuICAgIH1cblxuICAgIGFzeW5jIHJlZ2lzdGVyQWNjZXNzS2V5cyhcbiAgICAgICAgcGFyYW1zOiBUT05SZWdpc3RlckFjY2Vzc0tleXNQYXJhbXMsXG4gICAgKTogUHJvbWlzZTxudW1iZXI+IHtcbiAgICAgICAgY29uc3Qgc2lnbmVkTWFuYWdlbWVudEFjY2Vzc0tleSA9IGF3YWl0IHRoaXMuX3Jlc29sdmVTaWduZWRNYW5hZ2VtZW50QWNjZXNzS2V5KHBhcmFtcyk7XG4gICAgICAgIGNvbnN0IHJlc3VsdCA9IGF3YWl0IHRoaXMuX3F1ZXJpZXMubXV0YXRpb24oXG4gICAgICAgICAgICBgbXV0YXRpb24gcmVnaXN0ZXJBY2Nlc3NLZXlzKCRhY2NvdW50OiBTdHJpbmcsICRrZXlzOiBbQWNjZXNzS2V5XSwgJHNpZ25lZE1hbmFnZW1lbnRBY2Nlc3NLZXk6IFN0cmluZykge1xuICAgICAgICAgICAgICAgICAgICByZWdpc3RlckFjY2Vzc0tleXMoYWNjb3VudDogJGFjY291bnQsIGtleXM6ICRrZXlzLCBzaWduZWRNYW5hZ2VtZW50QWNjZXNzS2V5OiAkc2lnbmVkTWFuYWdlbWVudEFjY2Vzc0tleSlcbiAgICAgICAgICAgICAgICB9YCwge1xuICAgICAgICAgICAgICAgIGFjY291bnQ6IHBhcmFtcy5hY2NvdW50LFxuICAgICAgICAgICAgICAgIGtleXM6IHBhcmFtcy5rZXlzLFxuICAgICAgICAgICAgICAgIHNpZ25lZE1hbmFnZW1lbnRBY2Nlc3NLZXksXG4gICAgICAgICAgICB9LFxuICAgICAgICApO1xuICAgICAgICByZXR1cm4gcmVzdWx0LmRhdGEucmVnaXN0ZXJBY2Nlc3NLZXlzO1xuICAgIH1cblxuICAgIGFzeW5jIHJldm9rZUFjY2Vzc0tleXMoXG4gICAgICAgIHBhcmFtczogVE9OUmV2b2tlQWNjZXNzS2V5c1BhcmFtcyxcbiAgICApOiBQcm9taXNlPG51bWJlcj4ge1xuICAgICAgICBjb25zdCBzaWduZWRNYW5hZ2VtZW50QWNjZXNzS2V5ID0gYXdhaXQgdGhpcy5fcmVzb2x2ZVNpZ25lZE1hbmFnZW1lbnRBY2Nlc3NLZXkocGFyYW1zKTtcbiAgICAgICAgY29uc3QgcmVzdWx0ID0gYXdhaXQgdGhpcy5fcXVlcmllcy5tdXRhdGlvbihcbiAgICAgICAgICAgIGBtdXRhdGlvbiByZXZva2VBY2Nlc3NLZXlzKCRhY2NvdW50OiBTdHJpbmcsICRrZXlzOiBbU3RyaW5nXSwgJHNpZ25lZE1hbmFnZW1lbnRBY2Nlc3NLZXk6IFN0cmluZykge1xuICAgICAgICAgICAgICAgICAgICByZXZva2VBY2Nlc3NLZXlzKGFjY291bnQ6ICRhY2NvdW50LCBrZXlzOiAka2V5cywgc2lnbmVkTWFuYWdlbWVudEFjY2Vzc0tleTogJHNpZ25lZE1hbmFnZW1lbnRBY2Nlc3NLZXkpXG4gICAgICAgICAgICAgICAgfWAsIHtcbiAgICAgICAgICAgICAgICBhY2NvdW50OiBwYXJhbXMuYWNjb3VudCxcbiAgICAgICAgICAgICAgICBrZXlzOiBwYXJhbXMua2V5cyxcbiAgICAgICAgICAgICAgICBzaWduZWRNYW5hZ2VtZW50QWNjZXNzS2V5LFxuICAgICAgICAgICAgfSxcbiAgICAgICAgKTtcbiAgICAgICAgcmV0dXJuIHJlc3VsdC5kYXRhLnJldm9rZUFjY2Vzc0tleXM7XG4gICAgfVxuXG4gICAgc3RhcnRSb290U3Bhbih0cmFjZUlkOiBzdHJpbmcsIHNwYW5JZDogc3RyaW5nLCBvcGVyYXRpb25OYW1lOiBzdHJpbmcpOiBTcGFuIHtcbiAgICAgICAgY29uc3QgdHJhY2VyID0gdGhpcy5jb25maWcudHJhY2VyO1xuICAgICAgICBsZXQgc3BhbjogP1NwYW4gPSBudWxsO1xuICAgICAgICBpZiAodHJhY2VyLl9zdGFydEludGVybmFsU3Bhbikge1xuICAgICAgICAgICAgdHJ5IHtcbiAgICAgICAgICAgICAgICBjb25zdCBjdHggPSB0cmFjZXIuZXh0cmFjdChGT1JNQVRfVEVYVF9NQVAsIHtcbiAgICAgICAgICAgICAgICAgICAgJ3ViZXItdHJhY2UtaWQnOiBgJHt0cmFjZUlkfToke3NwYW5JZH06MDoxYCxcbiAgICAgICAgICAgICAgICB9KTtcbiAgICAgICAgICAgICAgICBpZiAoY3R4KSB7XG4gICAgICAgICAgICAgICAgICAgIHNwYW4gPSB0aGlzLmNvbmZpZy50cmFjZXIuX3N0YXJ0SW50ZXJuYWxTcGFuKFxuICAgICAgICAgICAgICAgICAgICAgICAgY3R4LFxuICAgICAgICAgICAgICAgICAgICAgICAgb3BlcmF0aW9uTmFtZSxcbiAgICAgICAgICAgICAgICAgICAgICAgIERhdGUubm93KCksIC8vIHN0YXJ0VGltZVxuICAgICAgICAgICAgICAgICAgICAgICAgdW5kZWZpbmVkLCAvLyB1c2VyVGFnc1xuICAgICAgICAgICAgICAgICAgICAgICAge30sIC8vIGludGVybmFsVGFnc1xuICAgICAgICAgICAgICAgICAgICAgICAgW10sIC8vIHJlZmVyZW5jZXNcbiAgICAgICAgICAgICAgICAgICAgICAgIGZhbHNlLCAvLyBoYXNWYWxpZFBhcmVudFxuICAgICAgICAgICAgICAgICAgICAgICAgZmFsc2UsIC8vIGlzUnBjU2VydmVyXG4gICAgICAgICAgICAgICAgICAgICk7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfSBjYXRjaCB7XG4gICAgICAgICAgICAgICAgLy8gdHJhY2VyIGNhbid0IGNyZWF0ZSBtZXNzYWdlIHNwYW4gdXNpbmcgcHJpdmF0ZSBtZXRob2QsXG4gICAgICAgICAgICAgICAgLy8gc28gd2UgYXJlIGZhbGxiYWNrIHRvIGNyZWF0ZSBzcGFuIHVzaW5nIHJlZ3VsYXIgbWV0aG9kXG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgICAgcmV0dXJuIHNwYW4gfHwgdHJhY2VyLnN0YXJ0U3BhbihvcGVyYXRpb25OYW1lKTtcbiAgICB9XG5cbiAgICBhc3luYyB0cmFjZTxUPihcbiAgICAgICAgbmFtZTogc3RyaW5nLFxuICAgICAgICBmOiAoc3BhbjogU3BhbikgPT4gUHJvbWlzZTxUPixcbiAgICAgICAgcGFyZW50U3Bhbj86IChTcGFuIHwgU3BhbkNvbnRleHQpLFxuICAgICk6IFByb21pc2U8VD4ge1xuICAgICAgICBjb25zdCBzcGFuID0gdGhpcy5jb25maWcudHJhY2VyLnN0YXJ0U3BhbihuYW1lLCB7IGNoaWxkT2Y6IHBhcmVudFNwYW4gfSk7XG4gICAgICAgIHRyeSB7XG4gICAgICAgICAgICBzcGFuLnNldFRhZyhUYWdzLlNQQU5fS0lORCwgJ2NsaWVudCcpO1xuICAgICAgICAgICAgY29uc3QgcmVzdWx0ID0gYXdhaXQgZihzcGFuKTtcbiAgICAgICAgICAgIGlmIChyZXN1bHQgIT09IHVuZGVmaW5lZCkge1xuICAgICAgICAgICAgICAgIHNwYW4uc2V0VGFnKCdyZXN1bHQnLCByZXN1bHQpO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgc3Bhbi5maW5pc2goKTtcbiAgICAgICAgICAgIHJldHVybiByZXN1bHQ7XG4gICAgICAgIH0gY2F0Y2ggKGVycm9yKSB7XG4gICAgICAgICAgICBzcGFuLmxvZyh7XG4gICAgICAgICAgICAgICAgZXZlbnQ6ICdmYWlsZWQnLFxuICAgICAgICAgICAgICAgIHBheWxvYWQ6IGVycm9yLFxuICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICBzcGFuLmZpbmlzaCgpO1xuICAgICAgICAgICAgdGhyb3cgZXJyb3I7XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICAvLyBJbnRlcm5hbHNcblxuICAgIHN0YXRpYyBjbGllbnRQbGF0Zm9ybTogP1RPTkNsaWVudFBsYXRmb3JtID0gbnVsbDtcbiAgICBzdGF0aWMgY29yZUxpYnJhcnk6ID9UT05DbGllbnRDb3JlTGlicmFyeSA9IG51bGw7XG5cbiAgICBtb2R1bGVzOiBNYXA8c3RyaW5nLCBUT05Nb2R1bGU+O1xufVxuIl19