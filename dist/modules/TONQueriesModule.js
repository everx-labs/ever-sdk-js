"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = exports.MAX_TIMEOUT = void 0;

var _regenerator = _interopRequireDefault(require("@babel/runtime/regenerator"));

var _apolloCacheInmemory = require("apollo-cache-inmemory");

var _apolloClient = require("apollo-client");

var _apolloLink = require("apollo-link");

var _apolloLinkHttp = require("apollo-link-http");

var _apolloLinkWs = require("apollo-link-ws");

var _apolloUtilities = require("apollo-utilities");

var _graphqlTag = _interopRequireDefault(require("graphql-tag"));

var _subscriptionsTransportWs = require("subscriptions-transport-ws");

var _apolloLinkContext = require("apollo-link-context");

var _opentracing = require("opentracing");

var _TONClient = require("../TONClient");

var _TONClientError = require("../TONClientError");

var _TONModule2 = require("../TONModule");

var _TONConfigModule = _interopRequireWildcard(require("./TONConfigModule"));

function _getRequireWildcardCache() { if (typeof WeakMap !== "function") return null; var cache = new WeakMap(); _getRequireWildcardCache = function _getRequireWildcardCache() { return cache; }; return cache; }

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } if (obj === null || _typeof(obj) !== "object" && typeof obj !== "function") { return { "default": obj }; } var cache = _getRequireWildcardCache(); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj["default"] = obj; if (cache) { cache.set(obj, newObj); } return newObj; }

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _typeof(obj) { "@babel/helpers - typeof"; if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _createForOfIteratorHelper(o, allowArrayLike) { var it; if (typeof Symbol === "undefined" || o[Symbol.iterator] == null) { if (Array.isArray(o) || (it = _unsupportedIterableToArray(o)) || allowArrayLike && o && typeof o.length === "number") { if (it) o = it; var i = 0; var F = function F() {}; return { s: F, n: function n() { if (i >= o.length) return { done: true }; return { done: false, value: o[i++] }; }, e: function e(_e) { throw _e; }, f: F }; } throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); } var normalCompletion = true, didErr = false, err; return { s: function s() { it = o[Symbol.iterator](); }, n: function n() { var step = it.next(); normalCompletion = step.done; return step; }, e: function e(_e2) { didErr = true; err = _e2; }, f: function f() { try { if (!normalCompletion && it["return"] != null) it["return"](); } finally { if (didErr) throw err; } } }; }

function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }

function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }

function asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { Promise.resolve(value).then(_next, _throw); } }

function _asyncToGenerator(fn) { return function () { var self = this, args = arguments; return new Promise(function (resolve, reject) { var gen = fn.apply(self, args); function _next(value) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "next", value); } function _throw(err) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "throw", err); } _next(undefined); }); }; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

function _createSuper(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct(); return function _createSuperInternal() { var Super = _getPrototypeOf(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = _getPrototypeOf(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return _possibleConstructorReturn(this, result); }; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Date.prototype.toString.call(Reflect.construct(Date, [], function () {})); return true; } catch (e) { return false; } }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

// Keep-alive timeout used to support keep-alive connection checking:
// - Every 1 minute server sends GQL_CONNECTION_KEEP_ALIVE message.
// - Every 2 minutes client checks that GQL_CONNECTION_KEEP_ALIVE message was received
//   within last 2 minutes.
// - If client hadn't received keep alive message during last 2 minutes
//   it closes connection and goes to reconnect.
var KEEP_ALIVE_TIMEOUT = 2 * 60000;
var MAX_TIMEOUT = 2147483647;
exports.MAX_TIMEOUT = MAX_TIMEOUT;

function resolveParams(args, requiredParamName, resolveArgs) {
  return args.length === 1 && requiredParamName in args[0] ? args[0] : resolveArgs();
}

var MulticastPromise = /*#__PURE__*/function () {
  function MulticastPromise() {
    _classCallCheck(this, MulticastPromise);

    _defineProperty(this, "listeners", void 0);

    _defineProperty(this, "onComplete", void 0);

    this.listeners = [];
    this.onComplete = null;
  }

  _createClass(MulticastPromise, [{
    key: "listen",
    value: function listen() {
      var listener = {
        resolve: function resolve() {},
        reject: function reject() {}
      };
      this.listeners.push(listener);
      return new Promise(function (resolve, reject) {
        listener.resolve = resolve;
        listener.reject = reject;
      });
    }
  }, {
    key: "resolve",
    value: function resolve(value) {
      this.complete(function (listener) {
        return listener.resolve(value);
      });
    }
  }, {
    key: "reject",
    value: function reject(error) {
      this.complete(function (listener) {
        return listener.reject(error);
      });
    }
  }, {
    key: "complete",
    value: function complete(completeListener) {
      var listeners = this.listeners;
      this.listeners = [];

      if (this.onComplete) {
        this.onComplete();
      }

      listeners.forEach(function (listener) {
        return completeListener(listener);
      });
    }
  }]);

  return MulticastPromise;
}();

function versionToNumber(s) {
  var parts = "".concat(s || '').split('.').map(function (x) {
    return Number(x);
  }).slice(0, 3);

  while (parts.length < 3) {
    parts.push(0);
  }

  return parts[0] * 1000000 + parts[1] * 1000 + parts[2];
}

function resolveServerInfo(versionString) {
  var version = versionToNumber(versionString || '0.24.4');
  return {
    version: version,
    supportsOperationId: version > 24004,
    supportsAggregations: version >= 25000,
    supportsTime: version >= 26003,
    timeDelta: null
  };
}

function abortableFetch(fetch) {
  return function (input, options) {
    return new Promise(function (resolve, reject) {
      var queryTimeout = options.queryTimeout;
      var fetchOptions = options;

      if (queryTimeout) {
        var controller = global.AbortController ? new global.AbortController() : null;

        if (controller) {
          fetchOptions = _objectSpread(_objectSpread({}, options), {}, {
            signal: controller.signal
          });
        }

        setTimeout(function () {
          reject(_TONClientError.TONClientError.queryForciblyAborted(_TONClientError.emptyTONErrorData));

          if (controller) {
            controller.abort();
          }
        }, queryTimeout);
      }

      fetch(input, fetchOptions).then(resolve, reject);
    });
  };
}

var TONQueriesModule = /*#__PURE__*/function (_TONModule) {
  _inherits(TONQueriesModule, _TONModule);

  var _super = _createSuper(TONQueriesModule);

  function TONQueriesModule(context) {
    var _this;

    _classCallCheck(this, TONQueriesModule);

    _this = _super.call(this, context);

    _defineProperty(_assertThisInitialized(_this), "transactions", void 0);

    _defineProperty(_assertThisInitialized(_this), "messages", void 0);

    _defineProperty(_assertThisInitialized(_this), "blocks", void 0);

    _defineProperty(_assertThisInitialized(_this), "accounts", void 0);

    _defineProperty(_assertThisInitialized(_this), "blocks_signatures", void 0);

    _defineProperty(_assertThisInitialized(_this), "config", void 0);

    _defineProperty(_assertThisInitialized(_this), "graphqlClientCreation", void 0);

    _defineProperty(_assertThisInitialized(_this), "graphqlClient", void 0);

    _defineProperty(_assertThisInitialized(_this), "graphqlClientConfig", void 0);

    _defineProperty(_assertThisInitialized(_this), "wsLink", void 0);

    _defineProperty(_assertThisInitialized(_this), "httpLink", void 0);

    _defineProperty(_assertThisInitialized(_this), "overrideWsUrl", void 0);

    _defineProperty(_assertThisInitialized(_this), "operationIdPrefix", void 0);

    _defineProperty(_assertThisInitialized(_this), "operationIdSuffix", void 0);

    _defineProperty(_assertThisInitialized(_this), "serverInfo", void 0);

    _defineProperty(_assertThisInitialized(_this), "activeQueriesRejects", void 0);

    _this.graphqlClient = null;
    _this.graphqlClientCreation = null;
    _this.graphqlClientConfig = null;
    _this.wsLink = null;
    _this.httpLink = null;
    _this.overrideWsUrl = null;
    _this.operationIdPrefix = (Date.now() % 60000).toString(16);

    for (var i = 0; i < 10; i += 1) {
      var randomPart = Math.round(Math.random() * 256).toString(16);
      _this.operationIdPrefix = "".concat(_this.operationIdPrefix).concat(randomPart);
    }

    _this.operationIdSuffix = 1;
    _this.serverInfo = resolveServerInfo();
    _this.activeQueriesRejects = [];
    return _this;
  }

  _createClass(TONQueriesModule, [{
    key: "registerQueryReject",
    value: function registerQueryReject(reject) {
      this.activeQueriesRejects.push(reject);
    }
  }, {
    key: "unregisterQueryReject",
    value: function unregisterQueryReject(reject) {
      var index = this.activeQueriesRejects.indexOf(reject);

      if (index >= 0) {
        this.activeQueriesRejects.splice(index, 1);
      }
    }
  }, {
    key: "rejectActiveQueries",
    value: function rejectActiveQueries() {
      var rejects = this.activeQueriesRejects;
      this.activeQueriesRejects = [];

      var err = _TONClientError.TONClientError.queryForciblyAborted({});

      rejects.forEach(function (reject) {
        try {
          reject(err);
        } catch (_unused) {}
      });
    }
  }, {
    key: "setup",
    value: function () {
      var _setup = _asyncToGenerator( /*#__PURE__*/_regenerator["default"].mark(function _callee() {
        return _regenerator["default"].wrap(function _callee$(_context) {
          while (1) {
            switch (_context.prev = _context.next) {
              case 0:
                this.config = this.context.getModule(_TONConfigModule["default"]);
                this.transactions = new TONQueriesModuleCollection(this, 'transactions', 'Transaction');
                this.messages = new TONQueriesModuleCollection(this, 'messages', 'Message');
                this.blocks = new TONQueriesModuleCollection(this, 'blocks', 'Block');
                this.accounts = new TONQueriesModuleCollection(this, 'accounts', 'Account');
                this.blocks_signatures = new TONQueriesModuleCollection(this, 'blocks_signatures', 'BlockSignatures');

              case 6:
              case "end":
                return _context.stop();
            }
          }
        }, _callee, this);
      }));

      function setup() {
        return _setup.apply(this, arguments);
      }

      return setup;
    }()
  }, {
    key: "getQueryUrl",
    value: function getQueryUrl() {
      var _this$graphqlClientCo;

      return ((_this$graphqlClientCo = this.graphqlClientConfig) === null || _this$graphqlClientCo === void 0 ? void 0 : _this$graphqlClientCo.httpUrl) || '';
    }
  }, {
    key: "detectRedirect",
    value: function () {
      var _detectRedirect = _asyncToGenerator( /*#__PURE__*/_regenerator["default"].mark(function _callee2(fetch, sourceUrl) {
        var response, responseText, responseJson, sourceLocation, responseLocation;
        return _regenerator["default"].wrap(function _callee2$(_context2) {
          while (1) {
            switch (_context2.prev = _context2.next) {
              case 0:
                _context2.next = 2;
                return fetch(sourceUrl);

              case 2:
                response = _context2.sent;
                _context2.prev = 3;
                _context2.next = 6;
                return response.text();

              case 6:
                responseText = _context2.sent;
                responseJson = JSON.parse(responseText);
                this.serverInfo = resolveServerInfo(responseJson.data.info.version);
                _context2.next = 13;
                break;

              case 11:
                _context2.prev = 11;
                _context2.t0 = _context2["catch"](3);

              case 13:
                if (!(response.redirected === true)) {
                  _context2.next = 15;
                  break;
                }

                return _context2.abrupt("return", response.url);

              case 15:
                if (!(response.redirected === false)) {
                  _context2.next = 17;
                  break;
                }

                return _context2.abrupt("return", '');

              case 17:
                sourceLocation = _TONConfigModule.URLParts.parse(sourceUrl).fixQuery(function () {
                  return '';
                }).toString().toLowerCase();
                responseLocation = _TONConfigModule.URLParts.parse(response.url).fixQuery(function () {
                  return '';
                }).toString().toLowerCase();
                return _context2.abrupt("return", responseLocation !== sourceLocation ? response.url : '');

              case 20:
              case "end":
                return _context2.stop();
            }
          }
        }, _callee2, this, [[3, 11]]);
      }));

      function detectRedirect(_x, _x2) {
        return _detectRedirect.apply(this, arguments);
      }

      return detectRedirect;
    }()
  }, {
    key: "getClientConfig",
    value: function () {
      var _getClientConfig = _asyncToGenerator( /*#__PURE__*/_regenerator["default"].mark(function _callee3() {
        var config, clientPlatform, fetch, getConfigForServer, _iterator, _step, server, clientConfig, redirected, httpParts;

        return _regenerator["default"].wrap(function _callee3$(_context3) {
          while (1) {
            switch (_context3.prev = _context3.next) {
              case 0:
                getConfigForServer = function _getConfigForServer(server) {
                  var httpParts = _TONConfigModule.URLParts.parse(server).fixProtocol(function (x) {
                    return x === 'http://' ? x : 'https://';
                  }).fixPath(function (x) {
                    return "".concat(x, "/graphql");
                  });

                  var http = httpParts.toString();
                  var ws = httpParts.fixProtocol(function (x) {
                    return x === 'http://' ? 'ws://' : 'wss://';
                  }).toString();
                  return {
                    httpUrl: http,
                    wsUrl: ws,
                    fetch: clientPlatform.fetch,
                    WebSocket: clientPlatform.WebSocket
                  };
                };

                config = this.config;
                clientPlatform = _TONClient.TONClient.clientPlatform;

                if (clientPlatform) {
                  _context3.next = 5;
                  break;
                }

                throw Error('TON Client does not configured');

              case 5:
                fetch = clientPlatform.fetch;
                _iterator = _createForOfIteratorHelper(config.data.servers);
                _context3.prev = 7;

                _iterator.s();

              case 9:
                if ((_step = _iterator.n()).done) {
                  _context3.next = 25;
                  break;
                }

                server = _step.value;
                clientConfig = getConfigForServer(server);
                _context3.prev = 12;
                _context3.next = 15;
                return this.detectRedirect(fetch, "".concat(clientConfig.httpUrl, "?query=%7Binfo%7Bversion%7D%7D"));

              case 15:
                redirected = _context3.sent;

                if (redirected !== '') {
                  httpParts = _TONConfigModule.URLParts.parse(redirected).fixQuery(function (_) {
                    return '';
                  });
                  clientConfig.httpUrl = httpParts.toString();
                  clientConfig.wsUrl = httpParts.fixProtocol(function (x) {
                    return x === 'http://' ? 'ws://' : 'wss://';
                  }).toString();
                }

                return _context3.abrupt("return", clientConfig);

              case 20:
                _context3.prev = 20;
                _context3.t0 = _context3["catch"](12);
                if (config._errLogVerbose) console.log("[getClientConfig] for server \"".concat(server, "\" failed"), {
                  message: _context3.t0.message || _context3.t0.toString(),
                  data: {
                    http_url: clientConfig.httpUrl,
                    ws_url: clientConfig.wsUrl
                  }
                });

              case 23:
                _context3.next = 9;
                break;

              case 25:
                _context3.next = 30;
                break;

              case 27:
                _context3.prev = 27;
                _context3.t1 = _context3["catch"](7);

                _iterator.e(_context3.t1);

              case 30:
                _context3.prev = 30;

                _iterator.f();

                return _context3.finish(30);

              case 33:
                return _context3.abrupt("return", getConfigForServer(config.data.servers[0]));

              case 34:
              case "end":
                return _context3.stop();
            }
          }
        }, _callee3, this, [[7, 27, 30, 33], [12, 20]]);
      }));

      function getClientConfig() {
        return _getClientConfig.apply(this, arguments);
      }

      return getClientConfig;
    }()
  }, {
    key: "getServerInfo",
    value: function () {
      var _getServerInfo = _asyncToGenerator( /*#__PURE__*/_regenerator["default"].mark(function _callee4(span) {
        return _regenerator["default"].wrap(function _callee4$(_context4) {
          while (1) {
            switch (_context4.prev = _context4.next) {
              case 0:
                _context4.next = 2;
                return this.graphqlClientRequired(span);

              case 2:
                return _context4.abrupt("return", this.serverInfo);

              case 3:
              case "end":
                return _context4.stop();
            }
          }
        }, _callee4, this);
      }));

      function getServerInfo(_x3) {
        return _getServerInfo.apply(this, arguments);
      }

      return getServerInfo;
    }()
  }, {
    key: "serverTimeDelta",
    value: function () {
      var _serverTimeDelta = _asyncToGenerator( /*#__PURE__*/_regenerator["default"].mark(function _callee5(span) {
        var serverInfo, clientConfig, start, response, end, responseData, serverTime;
        return _regenerator["default"].wrap(function _callee5$(_context5) {
          while (1) {
            switch (_context5.prev = _context5.next) {
              case 0:
                _context5.next = 2;
                return this.getServerInfo(span);

              case 2:
                serverInfo = _context5.sent;
                clientConfig = this.graphqlClientConfig;

                if (!(clientConfig && serverInfo.supportsTime && serverInfo.timeDelta === null)) {
                  _context5.next = 21;
                  break;
                }

                _context5.prev = 5;
                start = Date.now(); // noinspection SpellCheckingInspection

                _context5.next = 9;
                return clientConfig.fetch("".concat(clientConfig.httpUrl, "?query=%7Binfo%7Btime%7D%7D"));

              case 9:
                response = _context5.sent;
                end = Date.now();
                _context5.next = 13;
                return response.json();

              case 13:
                responseData = _context5.sent;
                serverTime = responseData.data.info.time;
                serverInfo.timeDelta = Math.round(serverTime - (start + (end - start) / 2));
                _context5.next = 21;
                break;

              case 18:
                _context5.prev = 18;
                _context5.t0 = _context5["catch"](5);
                if (config._errLogVerbose) console.log('>>>', _context5.t0);

              case 21:
                return _context5.abrupt("return", serverInfo.timeDelta || 0);

              case 22:
              case "end":
                return _context5.stop();
            }
          }
        }, _callee5, this, [[5, 18]]);
      }));

      function serverTimeDelta(_x4) {
        return _serverTimeDelta.apply(this, arguments);
      }

      return serverTimeDelta;
    }()
  }, {
    key: "serverNow",
    value: function () {
      var _serverNow = _asyncToGenerator( /*#__PURE__*/_regenerator["default"].mark(function _callee6(span) {
        var timeDelta;
        return _regenerator["default"].wrap(function _callee6$(_context6) {
          while (1) {
            switch (_context6.prev = _context6.next) {
              case 0:
                _context6.next = 2;
                return this.serverTimeDelta(span);

              case 2:
                timeDelta = _context6.sent;
                return _context6.abrupt("return", Date.now() + timeDelta);

              case 4:
              case "end":
                return _context6.stop();
            }
          }
        }, _callee6, this);
      }));

      function serverNow(_x5) {
        return _serverNow.apply(this, arguments);
      }

      return serverNow;
    }()
  }, {
    key: "dropServerTimeDelta",
    value: function dropServerTimeDelta() {
      if (this.serverInfo) {
        this.serverInfo.timeDelta = null;
      }
    }
  }, {
    key: "generateOperationId",
    value: function generateOperationId() {
      this.operationIdSuffix += 1;
      return "".concat(this.operationIdPrefix).concat(this.operationIdSuffix.toString(16));
    }
  }, {
    key: "finishOperations",
    value: function () {
      var _finishOperations = _asyncToGenerator( /*#__PURE__*/_regenerator["default"].mark(function _callee7(operationIds) {
        return _regenerator["default"].wrap(function _callee7$(_context7) {
          while (1) {
            switch (_context7.prev = _context7.next) {
              case 0:
                if (!(operationIds.length === 0)) {
                  _context7.next = 2;
                  break;
                }

                return _context7.abrupt("return");

              case 2:
                _context7.next = 4;
                return this.getServerInfo();

              case 4:
                if (_context7.sent.supportsOperationId) {
                  _context7.next = 6;
                  break;
                }

                return _context7.abrupt("return");

              case 6:
                _context7.next = 8;
                return this.graphqlMutation("mutation finishOperations($operationIds: [String]) {\n                finishOperations(operationIds: $operationIds)\n            }", {
                  operationIds: operationIds
                });

              case 8:
              case "end":
                return _context7.stop();
            }
          }
        }, _callee7, this);
      }));

      function finishOperations(_x6) {
        return _finishOperations.apply(this, arguments);
      }

      return finishOperations;
    }()
  }, {
    key: "getAccountsCount",
    value: function () {
      var _getAccountsCount = _asyncToGenerator( /*#__PURE__*/_regenerator["default"].mark(function _callee8(parentSpan) {
        var result;
        return _regenerator["default"].wrap(function _callee8$(_context8) {
          while (1) {
            switch (_context8.prev = _context8.next) {
              case 0:
                _context8.next = 2;
                return this.query('query{getAccountsCount}', undefined, parentSpan);

              case 2:
                result = _context8.sent;
                return _context8.abrupt("return", result.data.getAccountsCount);

              case 4:
              case "end":
                return _context8.stop();
            }
          }
        }, _callee8, this);
      }));

      function getAccountsCount(_x7) {
        return _getAccountsCount.apply(this, arguments);
      }

      return getAccountsCount;
    }()
  }, {
    key: "getTransactionsCount",
    value: function () {
      var _getTransactionsCount = _asyncToGenerator( /*#__PURE__*/_regenerator["default"].mark(function _callee9(parentSpan) {
        var result;
        return _regenerator["default"].wrap(function _callee9$(_context9) {
          while (1) {
            switch (_context9.prev = _context9.next) {
              case 0:
                _context9.next = 2;
                return this.query('query{getTransactionsCount}', undefined, parentSpan);

              case 2:
                result = _context9.sent;
                return _context9.abrupt("return", result.data.getTransactionsCount);

              case 4:
              case "end":
                return _context9.stop();
            }
          }
        }, _callee9, this);
      }));

      function getTransactionsCount(_x8) {
        return _getTransactionsCount.apply(this, arguments);
      }

      return getTransactionsCount;
    }()
  }, {
    key: "getAccountsTotalBalance",
    value: function () {
      var _getAccountsTotalBalance = _asyncToGenerator( /*#__PURE__*/_regenerator["default"].mark(function _callee10(parentSpan) {
        var result;
        return _regenerator["default"].wrap(function _callee10$(_context10) {
          while (1) {
            switch (_context10.prev = _context10.next) {
              case 0:
                _context10.next = 2;
                return this.query('query{getAccountsTotalBalance}', undefined, parentSpan);

              case 2:
                result = _context10.sent;
                return _context10.abrupt("return", result.data.getAccountsTotalBalance);

              case 4:
              case "end":
                return _context10.stop();
            }
          }
        }, _callee10, this);
      }));

      function getAccountsTotalBalance(_x9) {
        return _getAccountsTotalBalance.apply(this, arguments);
      }

      return getAccountsTotalBalance;
    }()
  }, {
    key: "postRequests",
    value: function () {
      var _postRequests = _asyncToGenerator( /*#__PURE__*/_regenerator["default"].mark(function _callee12(requests, parentSpan) {
        var _this2 = this;

        return _regenerator["default"].wrap(function _callee12$(_context12) {
          while (1) {
            switch (_context12.prev = _context12.next) {
              case 0:
                return _context12.abrupt("return", this.context.trace('queries.postRequests', /*#__PURE__*/function () {
                  var _ref = _asyncToGenerator( /*#__PURE__*/_regenerator["default"].mark(function _callee11(span) {
                    return _regenerator["default"].wrap(function _callee11$(_context11) {
                      while (1) {
                        switch (_context11.prev = _context11.next) {
                          case 0:
                            return _context11.abrupt("return", _this2.graphqlMutation("mutation postRequests($requests: [Request]) {\n                postRequests(requests: $requests)\n            }", {
                              requests: requests
                            }, span));

                          case 1:
                          case "end":
                            return _context11.stop();
                        }
                      }
                    }, _callee11);
                  }));

                  return function (_x12) {
                    return _ref.apply(this, arguments);
                  };
                }(), parentSpan));

              case 1:
              case "end":
                return _context12.stop();
            }
          }
        }, _callee12, this);
      }));

      function postRequests(_x10, _x11) {
        return _postRequests.apply(this, arguments);
      }

      return postRequests;
    }()
  }, {
    key: "mutation",
    value: function () {
      var _mutation = _asyncToGenerator( /*#__PURE__*/_regenerator["default"].mark(function _callee14(ql) {
        var _this3 = this;

        var variables,
            parentSpan,
            _args14 = arguments;
        return _regenerator["default"].wrap(function _callee14$(_context14) {
          while (1) {
            switch (_context14.prev = _context14.next) {
              case 0:
                variables = _args14.length > 1 && _args14[1] !== undefined ? _args14[1] : {};
                parentSpan = _args14.length > 2 ? _args14[2] : undefined;
                return _context14.abrupt("return", this.context.trace('queries.mutation', /*#__PURE__*/function () {
                  var _ref2 = _asyncToGenerator( /*#__PURE__*/_regenerator["default"].mark(function _callee13(span) {
                    return _regenerator["default"].wrap(function _callee13$(_context13) {
                      while (1) {
                        switch (_context13.prev = _context13.next) {
                          case 0:
                            span.setTag('params', {
                              mutation: ql,
                              variables: variables
                            });
                            return _context13.abrupt("return", _this3.graphqlMutation(ql, variables, span));

                          case 2:
                          case "end":
                            return _context13.stop();
                        }
                      }
                    }, _callee13);
                  }));

                  return function (_x14) {
                    return _ref2.apply(this, arguments);
                  };
                }(), parentSpan));

              case 3:
              case "end":
                return _context14.stop();
            }
          }
        }, _callee14, this);
      }));

      function mutation(_x13) {
        return _mutation.apply(this, arguments);
      }

      return mutation;
    }()
  }, {
    key: "query",
    value: function () {
      var _query = _asyncToGenerator( /*#__PURE__*/_regenerator["default"].mark(function _callee16(ql) {
        var _this4 = this;

        var variables,
            parentSpan,
            timeout,
            _args16 = arguments;
        return _regenerator["default"].wrap(function _callee16$(_context16) {
          while (1) {
            switch (_context16.prev = _context16.next) {
              case 0:
                variables = _args16.length > 1 && _args16[1] !== undefined ? _args16[1] : {};
                parentSpan = _args16.length > 2 ? _args16[2] : undefined;
                timeout = _args16.length > 3 ? _args16[3] : undefined;
                return _context16.abrupt("return", this.context.trace('queries.query', /*#__PURE__*/function () {
                  var _ref3 = _asyncToGenerator( /*#__PURE__*/_regenerator["default"].mark(function _callee15(span) {
                    return _regenerator["default"].wrap(function _callee15$(_context15) {
                      while (1) {
                        switch (_context15.prev = _context15.next) {
                          case 0:
                            span.setTag('params', {
                              query: ql,
                              variables: variables
                            });
                            return _context15.abrupt("return", _this4.graphqlQuery(ql, variables, span, timeout));

                          case 2:
                          case "end":
                            return _context15.stop();
                        }
                      }
                    }, _callee15);
                  }));

                  return function (_x16) {
                    return _ref3.apply(this, arguments);
                  };
                }(), parentSpan));

              case 4:
              case "end":
                return _context16.stop();
            }
          }
        }, _callee16, this);
      }));

      function query(_x15) {
        return _query.apply(this, arguments);
      }

      return query;
    }()
  }, {
    key: "graphqlMutation",
    value: function () {
      var _graphqlMutation = _asyncToGenerator( /*#__PURE__*/_regenerator["default"].mark(function _callee17(ql) {
        var variables,
            span,
            mutation,
            _args17 = arguments;
        return _regenerator["default"].wrap(function _callee17$(_context17) {
          while (1) {
            switch (_context17.prev = _context17.next) {
              case 0:
                variables = _args17.length > 1 && _args17[1] !== undefined ? _args17[1] : {};
                span = _args17.length > 2 ? _args17[2] : undefined;
                mutation = (0, _graphqlTag["default"])([ql]);
                return _context17.abrupt("return", this.graphQl(function (client) {
                  return client.mutate({
                    mutation: mutation,
                    variables: variables,
                    context: {
                      traceSpan: span
                    }
                  });
                }));

              case 4:
              case "end":
                return _context17.stop();
            }
          }
        }, _callee17, this);
      }));

      function graphqlMutation(_x17) {
        return _graphqlMutation.apply(this, arguments);
      }

      return graphqlMutation;
    }()
  }, {
    key: "graphqlQuery",
    value: function () {
      var _graphqlQuery = _asyncToGenerator( /*#__PURE__*/_regenerator["default"].mark(function _callee21(ql) {
        var _this5 = this;

        var variables,
            span,
            timeout,
            query,
            nextTimeout,
            startTime,
            forceTerminateExtraTimeout,
            forceTerminateTimeout,
            _ret,
            resolvedError,
            _args21 = arguments;

        return _regenerator["default"].wrap(function _callee21$(_context21) {
          while (1) {
            switch (_context21.prev = _context21.next) {
              case 0:
                variables = _args21.length > 1 && _args21[1] !== undefined ? _args21[1] : {};
                span = _args21.length > 2 ? _args21[2] : undefined;
                timeout = _args21.length > 3 ? _args21[3] : undefined;
                query = (0, _graphqlTag["default"])([ql]);
                nextTimeout = 100;
                startTime = Date.now();
                forceTerminateExtraTimeout = 5000;
                forceTerminateTimeout = timeout || this.config.waitForTimeout();

              case 8:
                if (!true) {
                  _context21.next = 28;
                  break;
                }

                _context21.prev = 9;
                return _context21.delegateYield( /*#__PURE__*/_regenerator["default"].mark(function _callee19() {
                  var client, context;
                  return _regenerator["default"].wrap(function _callee19$(_context19) {
                    while (1) {
                      switch (_context19.prev = _context19.next) {
                        case 0:
                          _context19.next = 2;
                          return _this5.graphqlClientRequired(span);

                        case 2:
                          client = _context19.sent;
                          context = {
                            traceSpan: span,
                            fetchOptions: {
                              queryTimeout: Math.min(forceTerminateTimeout + forceTerminateExtraTimeout, MAX_TIMEOUT)
                            }
                          };
                          _context19.next = 6;
                          return new Promise(function (resolve, reject) {
                            _asyncToGenerator( /*#__PURE__*/_regenerator["default"].mark(function _callee18() {
                              var isActual, doResolve, doReject;
                              return _regenerator["default"].wrap(function _callee18$(_context18) {
                                while (1) {
                                  switch (_context18.prev = _context18.next) {
                                    case 0:
                                      isActual = true;

                                      doResolve = function doResolve(result) {
                                        if (isActual) {
                                          isActual = false;
                                          resolve(result);
                                        }
                                      };

                                      doReject = function doReject(error) {
                                        if (isActual) {
                                          isActual = false;
                                          reject(error);
                                        }
                                      };

                                      _this5.registerQueryReject(doReject);

                                      _context18.prev = 4;
                                      _context18.t0 = doResolve;
                                      _context18.next = 8;
                                      return client.query({
                                        query: query,
                                        variables: variables,
                                        context: context
                                      });

                                    case 8:
                                      _context18.t1 = _context18.sent;
                                      (0, _context18.t0)(_context18.t1);
                                      _context18.next = 15;
                                      break;

                                    case 12:
                                      _context18.prev = 12;
                                      _context18.t2 = _context18["catch"](4);
                                      doReject(_context18.t2);

                                    case 15:
                                      _context18.prev = 15;

                                      _this5.unregisterQueryReject(doReject);

                                      return _context18.finish(15);

                                    case 18:
                                    case "end":
                                      return _context18.stop();
                                  }
                                }
                              }, _callee18, null, [[4, 12, 15, 18]]);
                            }))();
                          });

                        case 6:
                          _context19.t0 = _context19.sent;
                          return _context19.abrupt("return", {
                            v: _context19.t0
                          });

                        case 8:
                        case "end":
                          return _context19.stop();
                      }
                    }
                  }, _callee19);
                })(), "t0", 11);

              case 11:
                _ret = _context21.t0;

                if (!(_typeof(_ret) === "object")) {
                  _context21.next = 14;
                  break;
                }

                return _context21.abrupt("return", _ret.v);

              case 14:
                _context21.next = 26;
                break;

              case 16:
                _context21.prev = 16;
                _context21.t1 = _context21["catch"](9);
                _context21.next = 20;
                return this.resolveGraphQLError(_context21.t1);

              case 20:
                resolvedError = _context21.sent;

                if (!(TONQueriesModule.isNetworkError(resolvedError) && !this.config.isNetworkTimeoutExpiredSince(startTime))) {
                  _context21.next = 25;
                  break;
                }

                return _context21.delegateYield( /*#__PURE__*/_regenerator["default"].mark(function _callee20() {
                  var retryDelayTimeout;
                  return _regenerator["default"].wrap(function _callee20$(_context20) {
                    while (1) {
                      switch (_context20.prev = _context20.next) {
                        case 0:
                          _this5.config.log(resolvedError);

                          retryDelayTimeout = nextTimeout;
                          _context20.next = 4;
                          return new Promise(function (resolve) {
                            return setTimeout(resolve, retryDelayTimeout);
                          });

                        case 4:
                          if (nextTimeout < 3200) {
                            nextTimeout *= 2;
                          }

                          if (forceTerminateExtraTimeout < _this5.config.waitForTimeout()) {
                            forceTerminateExtraTimeout += 5000;
                          }

                        case 6:
                        case "end":
                          return _context20.stop();
                      }
                    }
                  }, _callee20);
                })(), "t2", 23);

              case 23:
                _context21.next = 26;
                break;

              case 25:
                throw resolvedError;

              case 26:
                _context21.next = 8;
                break;

              case 28:
              case "end":
                return _context21.stop();
            }
          }
        }, _callee21, this, [[9, 16]]);
      }));

      function graphqlQuery(_x18) {
        return _graphqlQuery.apply(this, arguments);
      }

      return graphqlQuery;
    }()
  }, {
    key: "resolveGraphQLError",
    value: function () {
      var _resolveGraphQLError = _asyncToGenerator( /*#__PURE__*/_regenerator["default"].mark(function _callee22(error) {
        var gqlErr, clientErr, gqlExc, errors;
        return _regenerator["default"].wrap(function _callee22$(_context22) {
          while (1) {
            switch (_context22.prev = _context22.next) {
              case 0:
                gqlErr = error.graphQLErrors && error.graphQLErrors[0];

                if (!gqlErr) {
                  _context22.next = 8;
                  break;
                }

                clientErr = new Error(gqlErr.message);
                gqlExc = gqlErr.extensions && gqlErr.extensions.exception || {};
                clientErr.number = gqlExc.code || 0;
                clientErr.code = gqlExc.code || 0;
                clientErr.source = gqlExc.source || 'client';
                return _context22.abrupt("return", clientErr);

              case 8:
                errors = error && error.networkError && error.networkError.result && error.networkError.result.errors;

                if (!errors) {
                  _context22.next = 16;
                  break;
                }

                _context22.t0 = _TONClientError.TONClientError;
                _context22.t1 = errors;
                _context22.next = 14;
                return this.completeErrorData();

              case 14:
                _context22.t2 = _context22.sent;
                return _context22.abrupt("return", _context22.t0.queryFailed.call(_context22.t0, _context22.t1, _context22.t2));

              case 16:
                return _context22.abrupt("return", error);

              case 17:
              case "end":
                return _context22.stop();
            }
          }
        }, _callee22, this);
      }));

      function resolveGraphQLError(_x19) {
        return _resolveGraphQLError.apply(this, arguments);
      }

      return resolveGraphQLError;
    }()
  }, {
    key: "graphQl",
    value: function () {
      var _graphQl = _asyncToGenerator( /*#__PURE__*/_regenerator["default"].mark(function _callee23(request, span) {
        var client;
        return _regenerator["default"].wrap(function _callee23$(_context23) {
          while (1) {
            switch (_context23.prev = _context23.next) {
              case 0:
                _context23.next = 2;
                return this.graphqlClientRequired(span);

              case 2:
                client = _context23.sent;
                _context23.prev = 3;
                _context23.next = 6;
                return request(client);

              case 6:
                return _context23.abrupt("return", _context23.sent);

              case 9:
                _context23.prev = 9;
                _context23.t0 = _context23["catch"](3);
                _context23.next = 13;
                return this.resolveGraphQLError(_context23.t0);

              case 13:
                throw _context23.sent;

              case 14:
              case "end":
                return _context23.stop();
            }
          }
        }, _callee23, this, [[3, 9]]);
      }));

      function graphQl(_x20, _x21) {
        return _graphQl.apply(this, arguments);
      }

      return graphQl;
    }()
  }, {
    key: "graphqlClientRequired",
    value: function () {
      var _graphqlClientRequired = _asyncToGenerator( /*#__PURE__*/_regenerator["default"].mark(function _callee24(parentSpan) {
        var _this6 = this;

        var creation;
        return _regenerator["default"].wrap(function _callee24$(_context24) {
          while (1) {
            switch (_context24.prev = _context24.next) {
              case 0:
                if (!this.graphqlClient) {
                  _context24.next = 2;
                  break;
                }

                return _context24.abrupt("return", this.graphqlClient);

              case 2:
                if (!this.graphqlClientCreation) {
                  _context24.next = 7;
                  break;
                }

                _context24.next = 5;
                return this.graphqlClientCreation.listen();

              case 5:
                _context24.next = 21;
                break;

              case 7:
                creation = new MulticastPromise();
                this.graphqlClientCreation = creation;
                _context24.prev = 9;
                _context24.next = 12;
                return this.context.trace('setup client', function (span) {
                  return _this6.createGraphqlClient(span);
                }, parentSpan);

              case 12:
                this.graphqlClientCreation = null;
                creation.resolve(this.graphqlClient);
                _context24.next = 21;
                break;

              case 16:
                _context24.prev = 16;
                _context24.t0 = _context24["catch"](9);
                this.graphqlClientCreation = null;
                creation.reject(_context24.t0);
                throw _context24.t0;

              case 21:
                return _context24.abrupt("return", this.graphqlClient);

              case 22:
              case "end":
                return _context24.stop();
            }
          }
        }, _callee24, this, [[9, 16]]);
      }));

      function graphqlClientRequired(_x22) {
        return _graphqlClientRequired.apply(this, arguments);
      }

      return graphqlClientRequired;
    }()
  }, {
    key: "createGraphqlClient",
    value: function () {
      var _createGraphqlClient = _asyncToGenerator( /*#__PURE__*/_regenerator["default"].mark(function _callee26(span) {
        var _this7 = this;

        var useHttp, clientConfig, subsOptions, subscriptionClient, guard, tracerLink, wrapLink, isSubscription, link;
        return _regenerator["default"].wrap(function _callee26$(_context26) {
          while (1) {
            switch (_context26.prev = _context26.next) {
              case 0:
                useHttp = !this.config.data.useWebSocketForQueries;
                _context26.next = 3;
                return this.getClientConfig();

              case 3:
                clientConfig = _context26.sent;
                subsOptions = this.config.tracer.inject(span, _opentracing.FORMAT_TEXT_MAP, {});
                subscriptionClient = new _subscriptionsTransportWs.SubscriptionClient(clientConfig.wsUrl, {
                  timeout: KEEP_ALIVE_TIMEOUT,
                  reconnect: true,
                  connectionParams: function connectionParams() {
                    return {
                      accessKey: _this7.config.data && _this7.config.data.accessKey,
                      headers: subsOptions
                    };
                  }
                }, clientConfig.WebSocket);
                subscriptionClient.onReconnected(function () {
                  if (_this7.config._errLogVerbose) console.log('[TONClient.queries]', 'WebSocket Reconnected');

                  _this7.rejectActiveQueries();
                });
                guard = {
                  detectingRedirection: false
                };
                subscriptionClient.onError(function () {
                  if (_this7.config._errLogVerbose) console.log('[TONClient.queries]', 'WebSocket Failed');

                  if (guard.detectingRedirection) {
                    return;
                  }

                  _asyncToGenerator( /*#__PURE__*/_regenerator["default"].mark(function _callee25() {
                    var newConfig, configIsChanged;
                    return _regenerator["default"].wrap(function _callee25$(_context25) {
                      while (1) {
                        switch (_context25.prev = _context25.next) {
                          case 0:
                            guard.detectingRedirection = true;
                            _context25.prev = 1;
                            _context25.next = 4;
                            return _this7.getClientConfig();

                          case 4:
                            newConfig = _context25.sent;
                            configIsChanged = newConfig.httpUrl !== clientConfig.httpUrl || newConfig.wsUrl !== clientConfig.wsUrl;

                            if (configIsChanged) {
                              if (_this7.config._logVerbose) console.log('[TONClient.queries]', 'Client config changed');
                              clientConfig = newConfig;
                              _this7.graphqlClientConfig = clientConfig;
                              subscriptionClient.url = newConfig.wsUrl;

                              if (_this7.wsLink) {
                                _this7.wsLink.url = newConfig.wsUrl;
                              }

                              if (_this7.httpLink) {
                                _this7.httpLink.uri = newConfig.httpUrl;
                              }
                            }

                            _context25.next = 12;
                            break;

                          case 9:
                            _context25.prev = 9;
                            _context25.t0 = _context25["catch"](1);
                            if (_this7.config._errLogVerbose) console.log('[TONClient.queries] redirection detector failed', _context25.t0);

                          case 12:
                            guard.detectingRedirection = false;

                          case 13:
                          case "end":
                            return _context25.stop();
                        }
                      }
                    }, _callee25, null, [[1, 9]]);
                  }))();
                });

                subscriptionClient.maxConnectTimeGenerator.duration = function () {
                  return subscriptionClient.maxConnectTimeGenerator.max;
                };

                _context26.next = 12;
                return (0, _apolloLinkContext.setContext)(function (_, req) {
                  var resolvedSpan = req && req.traceSpan || span;
                  req.headers = {};

                  _this7.config.tracer.inject(resolvedSpan, _opentracing.FORMAT_TEXT_MAP, req.headers);

                  var accessKey = _this7.config.data && _this7.config.data.accessKey;

                  if (accessKey) {
                    req.headers.accessKey = accessKey;
                  }

                  return {
                    headers: req.headers
                  };
                });

              case 12:
                tracerLink = _context26.sent;

                wrapLink = function wrapLink(link) {
                  return tracerLink.concat(link);
                };

                isSubscription = function isSubscription(_ref6) {
                  var query = _ref6.query;
                  var definition = (0, _apolloUtilities.getMainDefinition)(query);
                  return definition.kind === 'OperationDefinition' && definition.operation === 'subscription';
                };

                this.wsLink = new _apolloLinkWs.WebSocketLink(subscriptionClient);
                this.httpLink = useHttp ? new _apolloLinkHttp.HttpLink({
                  uri: clientConfig.httpUrl,
                  fetch: abortableFetch(clientConfig.fetch)
                }) : null;
                link = this.httpLink ? (0, _apolloLink.split)(isSubscription, wrapLink(this.wsLink), wrapLink(this.httpLink)) : wrapLink(this.wsLink);
                this.graphqlClientConfig = clientConfig;
                this.graphqlClient = new _apolloClient.ApolloClient({
                  cache: new _apolloCacheInmemory.InMemoryCache({}),
                  link: link,
                  defaultOptions: {
                    watchQuery: {
                      fetchPolicy: 'no-cache'
                    },
                    query: {
                      fetchPolicy: 'no-cache'
                    }
                  }
                });

              case 20:
              case "end":
                return _context26.stop();
            }
          }
        }, _callee26, this);
      }));

      function createGraphqlClient(_x23) {
        return _createGraphqlClient.apply(this, arguments);
      }

      return createGraphqlClient;
    }()
  }, {
    key: "close",
    value: function () {
      var _close = _asyncToGenerator( /*#__PURE__*/_regenerator["default"].mark(function _callee27() {
        var client;
        return _regenerator["default"].wrap(function _callee27$(_context27) {
          while (1) {
            switch (_context27.prev = _context27.next) {
              case 0:
                if (!this.graphqlClient) {
                  _context27.next = 6;
                  break;
                }

                client = this.graphqlClient;
                this.graphqlClient = null;
                client.stop();
                _context27.next = 6;
                return client.clearStore();

              case 6:
              case "end":
                return _context27.stop();
            }
          }
        }, _callee27, this);
      }));

      function close() {
        return _close.apply(this, arguments);
      }

      return close;
    }()
  }], [{
    key: "isNetworkError",
    value: function isNetworkError(error) {
      if (error.code === _TONClientError.TONErrorCode.QUERY_FORCIBLY_ABORTED) {
        return true;
      }

      var networkError = error.networkError;

      if (!networkError) {
        return false;
      }

      if ('errno' in networkError) {
        return true;
      }

      return !('response' in networkError || 'result' in networkError);
    }
  }]);

  return TONQueriesModule;
}(_TONModule2.TONModule);

exports["default"] = TONQueriesModule;

var TONQueriesModuleCollection = /*#__PURE__*/function () {
  function TONQueriesModuleCollection(module, collectionName, typeName) {
    _classCallCheck(this, TONQueriesModuleCollection);

    _defineProperty(this, "module", void 0);

    _defineProperty(this, "collectionName", void 0);

    _defineProperty(this, "typeName", void 0);

    this.module = module;
    this.collectionName = collectionName;
    this.typeName = typeName;
  }

  _createClass(TONQueriesModuleCollection, [{
    key: "query",
    value: function () {
      var _query2 = _asyncToGenerator( /*#__PURE__*/_regenerator["default"].mark(function _callee29() {
        var _this8 = this;

        var _len,
            args,
            _key,
            _resolveParams,
            filter,
            result,
            orderBy,
            limit,
            timeout,
            operationId,
            parentSpan,
            _args29 = arguments;

        return _regenerator["default"].wrap(function _callee29$(_context29) {
          while (1) {
            switch (_context29.prev = _context29.next) {
              case 0:
                for (_len = _args29.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
                  args[_key] = _args29[_key];
                }

                _resolveParams = resolveParams(args, 'filter', function () {
                  return {
                    filter: args[0],
                    result: args[1],
                    orderBy: args[2],
                    limit: args[3],
                    timeout: args[4],
                    parentSpan: args[5]
                  };
                }), filter = _resolveParams.filter, result = _resolveParams.result, orderBy = _resolveParams.orderBy, limit = _resolveParams.limit, timeout = _resolveParams.timeout, operationId = _resolveParams.operationId, parentSpan = _resolveParams.parentSpan;
                return _context29.abrupt("return", this.module.context.trace("".concat(this.collectionName, ".query"), /*#__PURE__*/function () {
                  var _ref7 = _asyncToGenerator( /*#__PURE__*/_regenerator["default"].mark(function _callee28(span) {
                    var useOperationId, c, t, ql, variables;
                    return _regenerator["default"].wrap(function _callee28$(_context28) {
                      while (1) {
                        switch (_context28.prev = _context28.next) {
                          case 0:
                            span.setTag('params', {
                              filter: filter,
                              result: result,
                              orderBy: orderBy,
                              limit: limit,
                              timeout: timeout,
                              operationId: operationId
                            });
                            _context28.t0 = operationId;

                            if (!_context28.t0) {
                              _context28.next = 6;
                              break;
                            }

                            _context28.next = 5;
                            return _this8.module.getServerInfo(span);

                          case 5:
                            _context28.t0 = _context28.sent.supportsOperationId;

                          case 6:
                            useOperationId = _context28.t0;
                            c = _this8.collectionName;
                            t = _this8.typeName;
                            ql = "\n            query ".concat(c, "(\n                $filter: ").concat(t, "Filter,\n                $orderBy: [QueryOrderBy], \n                $limit: Int, \n                $timeout: Float\n                ").concat(useOperationId ? ', $operationId: String' : '', "\n             ) {\n                ").concat(c, "(\n                    filter: $filter, \n                    orderBy: $orderBy, \n                    limit: $limit, \n                    timeout: $timeout\n                    ").concat(useOperationId ? ', operationId: $operationId' : '', "\n                ) { ").concat(result, " }\n            }");
                            variables = {
                              filter: filter,
                              orderBy: orderBy,
                              limit: limit
                            };

                            if (useOperationId) {
                              variables.operationId = operationId;
                            }

                            if (timeout) {
                              variables.timeout = Math.min(MAX_TIMEOUT, timeout);
                            }

                            _context28.next = 15;
                            return _this8.module.graphqlQuery(ql, variables, span, timeout);

                          case 15:
                            _context28.t1 = c;
                            return _context28.abrupt("return", _context28.sent.data[_context28.t1]);

                          case 17:
                          case "end":
                            return _context28.stop();
                        }
                      }
                    }, _callee28);
                  }));

                  return function (_x24) {
                    return _ref7.apply(this, arguments);
                  };
                }(), parentSpan));

              case 3:
              case "end":
                return _context29.stop();
            }
          }
        }, _callee29, this);
      }));

      function query() {
        return _query2.apply(this, arguments);
      }

      return query;
    }()
  }, {
    key: "aggregate",
    value: function () {
      var _aggregate = _asyncToGenerator( /*#__PURE__*/_regenerator["default"].mark(function _callee31(params) {
        var _this9 = this;

        return _regenerator["default"].wrap(function _callee31$(_context31) {
          while (1) {
            switch (_context31.prev = _context31.next) {
              case 0:
                return _context31.abrupt("return", this.module.context.trace("".concat(this.collectionName, ".aggregate"), /*#__PURE__*/function () {
                  var _ref8 = _asyncToGenerator( /*#__PURE__*/_regenerator["default"].mark(function _callee30(span) {
                    var t, q, ql, variables;
                    return _regenerator["default"].wrap(function _callee30$(_context30) {
                      while (1) {
                        switch (_context30.prev = _context30.next) {
                          case 0:
                            span.setTag('params', {
                              filter: params.filter,
                              fields: params.fields
                            });
                            _context30.next = 3;
                            return _this9.module.getServerInfo(span);

                          case 3:
                            if (_context30.sent.supportsAggregations) {
                              _context30.next = 9;
                              break;
                            }

                            _context30.t0 = _TONClientError.TONClientError;
                            _context30.next = 7;
                            return _this9.module.completeErrorData();

                          case 7:
                            _context30.t1 = _context30.sent;
                            throw _context30.t0.serverDoesntSupportAggregations.call(_context30.t0, _context30.t1);

                          case 9:
                            t = _this9.typeName;
                            q = _this9.typeName.endsWith('s') ? "aggregate".concat(t) : "aggregate".concat(t, "s");
                            ql = "\n            query ".concat(q, "(\n                $filter: ").concat(t, "Filter,\n                $fields: [FieldAggregation] \n             ) {\n                ").concat(q, "(\n                    filter: $filter, \n                    fields: $fields \n                )\n            }");
                            variables = {
                              filter: params.filter,
                              fields: params.fields
                            };
                            _context30.next = 15;
                            return _this9.module.graphqlQuery(ql, variables, span);

                          case 15:
                            _context30.t2 = q;
                            return _context30.abrupt("return", _context30.sent.data[_context30.t2]);

                          case 17:
                          case "end":
                            return _context30.stop();
                        }
                      }
                    }, _callee30);
                  }));

                  return function (_x26) {
                    return _ref8.apply(this, arguments);
                  };
                }(), params.parentSpan));

              case 1:
              case "end":
                return _context31.stop();
            }
          }
        }, _callee31, this);
      }));

      function aggregate(_x25) {
        return _aggregate.apply(this, arguments);
      }

      return aggregate;
    }()
  }, {
    key: "subscribe",
    value: function subscribe() {
      var _this10 = this;

      for (var _len2 = arguments.length, args = new Array(_len2), _key2 = 0; _key2 < _len2; _key2++) {
        args[_key2] = arguments[_key2];
      }

      var _resolveParams2 = resolveParams(args, 'filter', function () {
        return {
          filter: args[0],
          result: args[1],
          onDocEvent: args[2],
          onError: args[3]
        };
      }),
          filter = _resolveParams2.filter,
          result = _resolveParams2.result,
          onDocEvent = _resolveParams2.onDocEvent,
          onError = _resolveParams2.onError;

      var span = this.module.config.tracer.startSpan('TONQueriesModule.js:subscribe ');
      span.setTag(_opentracing.Tags.SPAN_KIND, 'client');
      var text = "subscription ".concat(this.collectionName, "($filter: ").concat(this.typeName, "Filter) {\n            ").concat(this.collectionName, "(filter: $filter) { ").concat(result, " }\n        }");
      var query = (0, _graphqlTag["default"])([text]);
      var subscription = null;

      _asyncToGenerator( /*#__PURE__*/_regenerator["default"].mark(function _callee32() {
        var client, observable;
        return _regenerator["default"].wrap(function _callee32$(_context32) {
          while (1) {
            switch (_context32.prev = _context32.next) {
              case 0:
                _context32.prev = 0;
                _context32.next = 3;
                return _this10.module.graphqlClientRequired(span);

              case 3:
                client = _context32.sent;
                observable = client.subscribe({
                  query: query,
                  variables: {
                    filter: filter
                  }
                });
                subscription = observable.subscribe(function (message) {
                  onDocEvent('insert/update', message.data[_this10.collectionName]);
                });
                _context32.next = 12;
                break;

              case 8:
                _context32.prev = 8;
                _context32.t0 = _context32["catch"](0);
                span.log({
                  event: 'failed',
                  payload: _context32.t0
                });

                if (onError) {
                  onError(_context32.t0);
                } else {
                  if (config._errLogVerbose) console.log('TON Client subscription error', _context32.t0);
                }

              case 12:
              case "end":
                return _context32.stop();
            }
          }
        }, _callee32, null, [[0, 8]]);
      }))();

      return {
        unsubscribe: function unsubscribe() {
          if (subscription) {
            subscription.unsubscribe();
            span.finish();
          }
        }
      };
    }
  }, {
    key: "waitFor",
    value: function () {
      var _waitFor = _asyncToGenerator( /*#__PURE__*/_regenerator["default"].mark(function _callee33() {
        var _len3,
            args,
            _key3,
            _resolveParams3,
            filter,
            result,
            paramsTimeout,
            parentSpan,
            operationId,
            timeout,
            docs,
            _args33 = arguments;

        return _regenerator["default"].wrap(function _callee33$(_context33) {
          while (1) {
            switch (_context33.prev = _context33.next) {
              case 0:
                for (_len3 = _args33.length, args = new Array(_len3), _key3 = 0; _key3 < _len3; _key3++) {
                  args[_key3] = _args33[_key3];
                }

                _resolveParams3 = resolveParams(args, 'filter', function () {
                  return {
                    filter: args[0],
                    result: args[1],
                    timeout: args[2],
                    parentSpan: args[3]
                  };
                }), filter = _resolveParams3.filter, result = _resolveParams3.result, paramsTimeout = _resolveParams3.timeout, parentSpan = _resolveParams3.parentSpan, operationId = _resolveParams3.operationId;
                timeout = paramsTimeout || this.module.config.waitForTimeout();
                _context33.next = 5;
                return this.query({
                  filter: filter,
                  result: result,
                  timeout: timeout,
                  parentSpan: parentSpan,
                  operationId: operationId
                });

              case 5:
                docs = _context33.sent;

                if (!(docs.length > 0)) {
                  _context33.next = 8;
                  break;
                }

                return _context33.abrupt("return", docs[0]);

              case 8:
                _context33.t0 = _TONClientError.TONClientError;
                _context33.next = 11;
                return this.module.completeErrorData({
                  collection: this.collectionName
                });

              case 11:
                _context33.t1 = _context33.sent;
                throw _context33.t0.waitForTimeout.call(_context33.t0, _context33.t1);

              case 13:
              case "end":
                return _context33.stop();
            }
          }
        }, _callee33, this);
      }));

      function waitFor() {
        return _waitFor.apply(this, arguments);
      }

      return waitFor;
    }()
  }]);

  return TONQueriesModuleCollection;
}();

TONQueriesModule.moduleName = 'TONQueriesModule';
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy9tb2R1bGVzL1RPTlF1ZXJpZXNNb2R1bGUuanMiXSwibmFtZXMiOlsiS0VFUF9BTElWRV9USU1FT1VUIiwiTUFYX1RJTUVPVVQiLCJyZXNvbHZlUGFyYW1zIiwiYXJncyIsInJlcXVpcmVkUGFyYW1OYW1lIiwicmVzb2x2ZUFyZ3MiLCJsZW5ndGgiLCJNdWx0aWNhc3RQcm9taXNlIiwibGlzdGVuZXJzIiwib25Db21wbGV0ZSIsImxpc3RlbmVyIiwicmVzb2x2ZSIsInJlamVjdCIsInB1c2giLCJQcm9taXNlIiwidmFsdWUiLCJjb21wbGV0ZSIsImVycm9yIiwiY29tcGxldGVMaXN0ZW5lciIsImZvckVhY2giLCJ2ZXJzaW9uVG9OdW1iZXIiLCJzIiwicGFydHMiLCJzcGxpdCIsIm1hcCIsIngiLCJOdW1iZXIiLCJzbGljZSIsInJlc29sdmVTZXJ2ZXJJbmZvIiwidmVyc2lvblN0cmluZyIsInZlcnNpb24iLCJzdXBwb3J0c09wZXJhdGlvbklkIiwic3VwcG9ydHNBZ2dyZWdhdGlvbnMiLCJzdXBwb3J0c1RpbWUiLCJ0aW1lRGVsdGEiLCJhYm9ydGFibGVGZXRjaCIsImZldGNoIiwiaW5wdXQiLCJvcHRpb25zIiwicXVlcnlUaW1lb3V0IiwiZmV0Y2hPcHRpb25zIiwiY29udHJvbGxlciIsImdsb2JhbCIsIkFib3J0Q29udHJvbGxlciIsInNpZ25hbCIsInNldFRpbWVvdXQiLCJUT05DbGllbnRFcnJvciIsInF1ZXJ5Rm9yY2libHlBYm9ydGVkIiwiZW1wdHlUT05FcnJvckRhdGEiLCJhYm9ydCIsInRoZW4iLCJUT05RdWVyaWVzTW9kdWxlIiwiY29udGV4dCIsImdyYXBocWxDbGllbnQiLCJncmFwaHFsQ2xpZW50Q3JlYXRpb24iLCJncmFwaHFsQ2xpZW50Q29uZmlnIiwid3NMaW5rIiwiaHR0cExpbmsiLCJvdmVycmlkZVdzVXJsIiwib3BlcmF0aW9uSWRQcmVmaXgiLCJEYXRlIiwibm93IiwidG9TdHJpbmciLCJpIiwicmFuZG9tUGFydCIsIk1hdGgiLCJyb3VuZCIsInJhbmRvbSIsIm9wZXJhdGlvbklkU3VmZml4Iiwic2VydmVySW5mbyIsImFjdGl2ZVF1ZXJpZXNSZWplY3RzIiwiaW5kZXgiLCJpbmRleE9mIiwic3BsaWNlIiwicmVqZWN0cyIsImVyciIsImNvbmZpZyIsImdldE1vZHVsZSIsIlRPTkNvbmZpZ01vZHVsZSIsInRyYW5zYWN0aW9ucyIsIlRPTlF1ZXJpZXNNb2R1bGVDb2xsZWN0aW9uIiwibWVzc2FnZXMiLCJibG9ja3MiLCJhY2NvdW50cyIsImJsb2Nrc19zaWduYXR1cmVzIiwiaHR0cFVybCIsInNvdXJjZVVybCIsInJlc3BvbnNlIiwidGV4dCIsInJlc3BvbnNlVGV4dCIsInJlc3BvbnNlSnNvbiIsIkpTT04iLCJwYXJzZSIsImRhdGEiLCJpbmZvIiwicmVkaXJlY3RlZCIsInVybCIsInNvdXJjZUxvY2F0aW9uIiwiVVJMUGFydHMiLCJmaXhRdWVyeSIsInRvTG93ZXJDYXNlIiwicmVzcG9uc2VMb2NhdGlvbiIsImdldENvbmZpZ0ZvclNlcnZlciIsInNlcnZlciIsImh0dHBQYXJ0cyIsImZpeFByb3RvY29sIiwiZml4UGF0aCIsImh0dHAiLCJ3cyIsIndzVXJsIiwiY2xpZW50UGxhdGZvcm0iLCJXZWJTb2NrZXQiLCJUT05DbGllbnQiLCJFcnJvciIsInNlcnZlcnMiLCJjbGllbnRDb25maWciLCJkZXRlY3RSZWRpcmVjdCIsIl8iLCJfZXJyTG9nVmVyYm9zZSIsImNvbnNvbGUiLCJsb2ciLCJtZXNzYWdlIiwiaHR0cF91cmwiLCJ3c191cmwiLCJzcGFuIiwiZ3JhcGhxbENsaWVudFJlcXVpcmVkIiwiZ2V0U2VydmVySW5mbyIsInN0YXJ0IiwiZW5kIiwianNvbiIsInJlc3BvbnNlRGF0YSIsInNlcnZlclRpbWUiLCJ0aW1lIiwic2VydmVyVGltZURlbHRhIiwib3BlcmF0aW9uSWRzIiwiZ3JhcGhxbE11dGF0aW9uIiwicGFyZW50U3BhbiIsInF1ZXJ5IiwidW5kZWZpbmVkIiwicmVzdWx0IiwiZ2V0QWNjb3VudHNDb3VudCIsImdldFRyYW5zYWN0aW9uc0NvdW50IiwiZ2V0QWNjb3VudHNUb3RhbEJhbGFuY2UiLCJyZXF1ZXN0cyIsInRyYWNlIiwicWwiLCJ2YXJpYWJsZXMiLCJzZXRUYWciLCJtdXRhdGlvbiIsInRpbWVvdXQiLCJncmFwaHFsUXVlcnkiLCJncmFwaFFsIiwiY2xpZW50IiwibXV0YXRlIiwidHJhY2VTcGFuIiwibmV4dFRpbWVvdXQiLCJzdGFydFRpbWUiLCJmb3JjZVRlcm1pbmF0ZUV4dHJhVGltZW91dCIsImZvcmNlVGVybWluYXRlVGltZW91dCIsIndhaXRGb3JUaW1lb3V0IiwibWluIiwiaXNBY3R1YWwiLCJkb1Jlc29sdmUiLCJkb1JlamVjdCIsInJlZ2lzdGVyUXVlcnlSZWplY3QiLCJ1bnJlZ2lzdGVyUXVlcnlSZWplY3QiLCJyZXNvbHZlR3JhcGhRTEVycm9yIiwicmVzb2x2ZWRFcnJvciIsImlzTmV0d29ya0Vycm9yIiwiaXNOZXR3b3JrVGltZW91dEV4cGlyZWRTaW5jZSIsInJldHJ5RGVsYXlUaW1lb3V0IiwiZ3FsRXJyIiwiZ3JhcGhRTEVycm9ycyIsImNsaWVudEVyciIsImdxbEV4YyIsImV4dGVuc2lvbnMiLCJleGNlcHRpb24iLCJudW1iZXIiLCJjb2RlIiwic291cmNlIiwiZXJyb3JzIiwibmV0d29ya0Vycm9yIiwiY29tcGxldGVFcnJvckRhdGEiLCJxdWVyeUZhaWxlZCIsInJlcXVlc3QiLCJsaXN0ZW4iLCJjcmVhdGlvbiIsImNyZWF0ZUdyYXBocWxDbGllbnQiLCJ1c2VIdHRwIiwidXNlV2ViU29ja2V0Rm9yUXVlcmllcyIsImdldENsaWVudENvbmZpZyIsInN1YnNPcHRpb25zIiwidHJhY2VyIiwiaW5qZWN0IiwiRk9STUFUX1RFWFRfTUFQIiwic3Vic2NyaXB0aW9uQ2xpZW50IiwiU3Vic2NyaXB0aW9uQ2xpZW50IiwicmVjb25uZWN0IiwiY29ubmVjdGlvblBhcmFtcyIsImFjY2Vzc0tleSIsImhlYWRlcnMiLCJvblJlY29ubmVjdGVkIiwicmVqZWN0QWN0aXZlUXVlcmllcyIsImd1YXJkIiwiZGV0ZWN0aW5nUmVkaXJlY3Rpb24iLCJvbkVycm9yIiwibmV3Q29uZmlnIiwiY29uZmlnSXNDaGFuZ2VkIiwiX2xvZ1ZlcmJvc2UiLCJ1cmkiLCJtYXhDb25uZWN0VGltZUdlbmVyYXRvciIsImR1cmF0aW9uIiwibWF4IiwicmVxIiwicmVzb2x2ZWRTcGFuIiwidHJhY2VyTGluayIsIndyYXBMaW5rIiwibGluayIsImNvbmNhdCIsImlzU3Vic2NyaXB0aW9uIiwiZGVmaW5pdGlvbiIsImtpbmQiLCJvcGVyYXRpb24iLCJXZWJTb2NrZXRMaW5rIiwiSHR0cExpbmsiLCJBcG9sbG9DbGllbnQiLCJjYWNoZSIsIkluTWVtb3J5Q2FjaGUiLCJkZWZhdWx0T3B0aW9ucyIsIndhdGNoUXVlcnkiLCJmZXRjaFBvbGljeSIsInN0b3AiLCJjbGVhclN0b3JlIiwiVE9ORXJyb3JDb2RlIiwiUVVFUllfRk9SQ0lCTFlfQUJPUlRFRCIsIlRPTk1vZHVsZSIsIm1vZHVsZSIsImNvbGxlY3Rpb25OYW1lIiwidHlwZU5hbWUiLCJmaWx0ZXIiLCJvcmRlckJ5IiwibGltaXQiLCJvcGVyYXRpb25JZCIsInVzZU9wZXJhdGlvbklkIiwiYyIsInQiLCJwYXJhbXMiLCJmaWVsZHMiLCJzZXJ2ZXJEb2VzbnRTdXBwb3J0QWdncmVnYXRpb25zIiwicSIsImVuZHNXaXRoIiwib25Eb2NFdmVudCIsInN0YXJ0U3BhbiIsIlRhZ3MiLCJTUEFOX0tJTkQiLCJzdWJzY3JpcHRpb24iLCJvYnNlcnZhYmxlIiwic3Vic2NyaWJlIiwiZXZlbnQiLCJwYXlsb2FkIiwidW5zdWJzY3JpYmUiLCJmaW5pc2giLCJwYXJhbXNUaW1lb3V0IiwiZG9jcyIsImNvbGxlY3Rpb24iLCJtb2R1bGVOYW1lIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7QUFNQTs7QUFDQTs7QUFDQTs7QUFDQTs7QUFDQTs7QUFDQTs7QUFDQTs7QUFDQTs7QUFDQTs7QUFDQTs7QUFZQTs7QUFDQTs7QUFFQTs7QUFDQTs7Ozs7Ozs7Ozs7Ozs7Ozs7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cEcsTSxtQkFBQUEsTSxFQUNTMkgsYSxtQkFBVGpILE8sRUFDQWIsVSxtQkFBQUEsVSxFQUNBMEcsVyxtQkFBQUEsVztBQU9FN0YsZ0JBQUFBLE8sR0FBVWlILGFBQWEsSUFBSSxLQUFLMUIsTUFBTCxDQUFZaEssTUFBWixDQUFtQm1GLGNBQW5CLEU7O3VCQUNkLEtBQUt0QixLQUFMLENBQVc7QUFDMUJzRyxrQkFBQUEsTUFBTSxFQUFOQSxNQUQwQjtBQUUxQnBHLGtCQUFBQSxNQUFNLEVBQU5BLE1BRjBCO0FBRzFCVSxrQkFBQUEsT0FBTyxFQUFQQSxPQUgwQjtBQUkxQmIsa0JBQUFBLFVBQVUsRUFBVkEsVUFKMEI7QUFLMUIwRyxrQkFBQUEsV0FBVyxFQUFYQTtBQUwwQixpQkFBWCxDOzs7QUFBYnFCLGdCQUFBQSxJOztzQkFPRkEsSUFBSSxDQUFDalEsTUFBTCxHQUFjLEM7Ozs7O21EQUNQaVEsSUFBSSxDQUFDLENBQUQsQzs7O2dDQUVUek4sOEI7O3VCQUFvQyxLQUFLOEwsTUFBTCxDQUFZdEQsaUJBQVosQ0FBOEI7QUFDcEVrRixrQkFBQUEsVUFBVSxFQUFFLEtBQUszQjtBQURtRCxpQkFBOUIsQzs7OztvQ0FBckI5RSxjOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFNN0I1RyxnQkFBZ0IsQ0FBQ3NOLFVBQWpCLEdBQThCLGtCQUE5QiIsInNvdXJjZXNDb250ZW50IjpbIi8qXG4gKiBDb3B5cmlnaHQgMjAxOC0yMDIwIFRPTiBERVYgU09MVVRJT05TIExURC5cbiAqL1xuXG4vLyBAZmxvd1xuXG5pbXBvcnQgeyBJbk1lbW9yeUNhY2hlIH0gZnJvbSAnYXBvbGxvLWNhY2hlLWlubWVtb3J5JztcbmltcG9ydCB7IEFwb2xsb0NsaWVudCB9IGZyb20gJ2Fwb2xsby1jbGllbnQnO1xuaW1wb3J0IHsgQXBvbGxvTGluaywgc3BsaXQgfSBmcm9tICdhcG9sbG8tbGluayc7XG5pbXBvcnQgeyBIdHRwTGluayB9IGZyb20gJ2Fwb2xsby1saW5rLWh0dHAnO1xuaW1wb3J0IHsgV2ViU29ja2V0TGluayB9IGZyb20gJ2Fwb2xsby1saW5rLXdzJztcbmltcG9ydCB7IGdldE1haW5EZWZpbml0aW9uIH0gZnJvbSAnYXBvbGxvLXV0aWxpdGllcyc7XG5pbXBvcnQgZ3FsIGZyb20gJ2dyYXBocWwtdGFnJztcbmltcG9ydCB7IFN1YnNjcmlwdGlvbkNsaWVudCB9IGZyb20gJ3N1YnNjcmlwdGlvbnMtdHJhbnNwb3J0LXdzJztcbmltcG9ydCB7IHNldENvbnRleHQgfSBmcm9tICdhcG9sbG8tbGluay1jb250ZXh0JztcbmltcG9ydCB7XG4gICAgRk9STUFUX1RFWFRfTUFQLCBUYWdzLCBTcGFuLCBTcGFuQ29udGV4dCxcbn0gZnJvbSAnb3BlbnRyYWNpbmcnO1xuaW1wb3J0IHR5cGUge1xuICAgIFRPTlF1ZXJpZXMsXG4gICAgVE9OUUNvbGxlY3Rpb24sXG4gICAgU3Vic2NyaXB0aW9uLFxuICAgIFRPTlF1ZXJ5UGFyYW1zLFxuICAgIFRPTlN1YnNjcmliZVBhcmFtcyxcbiAgICBUT05XYWl0Rm9yUGFyYW1zLFxuICAgIFRPTlF1ZXJ5QWdncmVnYXRlUGFyYW1zLFxufSBmcm9tICcuLi8uLi90eXBlcyc7XG5pbXBvcnQgeyBUT05DbGllbnQgfSBmcm9tICcuLi9UT05DbGllbnQnO1xuaW1wb3J0IHsgZW1wdHlUT05FcnJvckRhdGEsIFRPTkNsaWVudEVycm9yLCBUT05FcnJvckNvZGUgfSBmcm9tICcuLi9UT05DbGllbnRFcnJvcic7XG5pbXBvcnQgdHlwZSB7IFRPTk1vZHVsZUNvbnRleHQgfSBmcm9tICcuLi9UT05Nb2R1bGUnO1xuaW1wb3J0IHsgVE9OTW9kdWxlIH0gZnJvbSAnLi4vVE9OTW9kdWxlJztcbmltcG9ydCBUT05Db25maWdNb2R1bGUsIHsgVVJMUGFydHMgfSBmcm9tICcuL1RPTkNvbmZpZ01vZHVsZSc7XG5cblxuZXhwb3J0IHR5cGUgUmVxdWVzdCA9IHtcbiAgICBpZDogc3RyaW5nLFxuICAgIGJvZHk6IHN0cmluZyxcbn1cblxuZXhwb3J0IHR5cGUgU2VydmVySW5mbyA9IHtcbiAgICB2ZXJzaW9uOiBudW1iZXIsXG4gICAgc3VwcG9ydHNPcGVyYXRpb25JZDogYm9vbGVhbixcbiAgICBzdXBwb3J0c0FnZ3JlZ2F0aW9uczogYm9vbGVhbixcbiAgICBzdXBwb3J0c1RpbWU6IGJvb2xlYW4sXG4gICAgdGltZURlbHRhOiA/bnVtYmVyLFxufTtcblxuXG50eXBlIEdyYXBoUUxDbGllbnRDb25maWcgPSB7XG4gICAgaHR0cFVybDogc3RyaW5nLFxuICAgIHdzVXJsOiBzdHJpbmcsXG4gICAgZmV0Y2g6IGFueSxcbiAgICBXZWJTb2NrZXQ6IGFueSxcbn07XG5cbi8vIEtlZXAtYWxpdmUgdGltZW91dCB1c2VkIHRvIHN1cHBvcnQga2VlcC1hbGl2ZSBjb25uZWN0aW9uIGNoZWNraW5nOlxuLy8gLSBFdmVyeSAxIG1pbnV0ZSBzZXJ2ZXIgc2VuZHMgR1FMX0NPTk5FQ1RJT05fS0VFUF9BTElWRSBtZXNzYWdlLlxuLy8gLSBFdmVyeSAyIG1pbnV0ZXMgY2xpZW50IGNoZWNrcyB0aGF0IEdRTF9DT05ORUNUSU9OX0tFRVBfQUxJVkUgbWVzc2FnZSB3YXMgcmVjZWl2ZWRcbi8vICAgd2l0aGluIGxhc3QgMiBtaW51dGVzLlxuLy8gLSBJZiBjbGllbnQgaGFkbid0IHJlY2VpdmVkIGtlZXAgYWxpdmUgbWVzc2FnZSBkdXJpbmcgbGFzdCAyIG1pbnV0ZXNcbi8vICAgaXQgY2xvc2VzIGNvbm5lY3Rpb24gYW5kIGdvZXMgdG8gcmVjb25uZWN0LlxuY29uc3QgS0VFUF9BTElWRV9USU1FT1VUID0gMiAqIDYwMDAwO1xuXG5leHBvcnQgY29uc3QgTUFYX1RJTUVPVVQgPSAyMTQ3NDgzNjQ3O1xuXG5mdW5jdGlvbiByZXNvbHZlUGFyYW1zPFQ+KGFyZ3M6IGFueVtdLCByZXF1aXJlZFBhcmFtTmFtZTogc3RyaW5nLCByZXNvbHZlQXJnczogKCkgPT4gVCk6IFQge1xuICAgIHJldHVybiAoYXJncy5sZW5ndGggPT09IDEpICYmIChyZXF1aXJlZFBhcmFtTmFtZSBpbiBhcmdzWzBdKSA/IGFyZ3NbMF0gOiByZXNvbHZlQXJncygpO1xufVxuXG50eXBlIE11bHRpY2FzdExpc3RlbmVyPFZhbHVlPiA9IHtcbiAgICByZXNvbHZlOiAodmFsdWU6IFZhbHVlKSA9PiB2b2lkO1xuICAgIHJlamVjdDogKGVycm9yOiBFcnJvcikgPT4gdm9pZDtcbn07XG5cbmNsYXNzIE11bHRpY2FzdFByb21pc2U8VmFsdWU+IHtcbiAgICBsaXN0ZW5lcnM6IE11bHRpY2FzdExpc3RlbmVyPFZhbHVlPltdO1xuICAgIG9uQ29tcGxldGU6ID8oKCkgPT4gdm9pZCk7XG5cbiAgICBjb25zdHJ1Y3RvcigpIHtcbiAgICAgICAgdGhpcy5saXN0ZW5lcnMgPSBbXTtcbiAgICAgICAgdGhpcy5vbkNvbXBsZXRlID0gbnVsbDtcbiAgICB9XG5cbiAgICBsaXN0ZW4oKTogUHJvbWlzZTxWYWx1ZT4ge1xuICAgICAgICBjb25zdCBsaXN0ZW5lcjogTXVsdGljYXN0TGlzdGVuZXI8VmFsdWU+ID0ge1xuICAgICAgICAgICAgcmVzb2x2ZTogKCkgPT4ge1xuICAgICAgICAgICAgfSxcbiAgICAgICAgICAgIHJlamVjdDogKCkgPT4ge1xuICAgICAgICAgICAgfSxcbiAgICAgICAgfTtcbiAgICAgICAgdGhpcy5saXN0ZW5lcnMucHVzaChsaXN0ZW5lcik7XG4gICAgICAgIHJldHVybiBuZXcgUHJvbWlzZSgocmVzb2x2ZSwgcmVqZWN0KSA9PiB7XG4gICAgICAgICAgICBsaXN0ZW5lci5yZXNvbHZlID0gcmVzb2x2ZTtcbiAgICAgICAgICAgIGxpc3RlbmVyLnJlamVjdCA9IHJlamVjdDtcbiAgICAgICAgfSk7XG4gICAgfVxuXG4gICAgcmVzb2x2ZSh2YWx1ZTogVmFsdWUpIHtcbiAgICAgICAgdGhpcy5jb21wbGV0ZShsaXN0ZW5lciA9PiBsaXN0ZW5lci5yZXNvbHZlKHZhbHVlKSk7XG4gICAgfVxuXG4gICAgcmVqZWN0KGVycm9yOiBFcnJvcikge1xuICAgICAgICB0aGlzLmNvbXBsZXRlKGxpc3RlbmVyID0+IGxpc3RlbmVyLnJlamVjdChlcnJvcikpO1xuICAgIH1cblxuICAgIGNvbXBsZXRlKGNvbXBsZXRlTGlzdGVuZXI6IChsaXN0ZW5lcjogTXVsdGljYXN0TGlzdGVuZXI8VmFsdWU+KSA9PiB2b2lkKSB7XG4gICAgICAgIGNvbnN0IHsgbGlzdGVuZXJzIH0gPSB0aGlzO1xuICAgICAgICB0aGlzLmxpc3RlbmVycyA9IFtdO1xuICAgICAgICBpZiAodGhpcy5vbkNvbXBsZXRlKSB7XG4gICAgICAgICAgICB0aGlzLm9uQ29tcGxldGUoKTtcbiAgICAgICAgfVxuICAgICAgICBsaXN0ZW5lcnMuZm9yRWFjaChsaXN0ZW5lciA9PiBjb21wbGV0ZUxpc3RlbmVyKGxpc3RlbmVyKSk7XG4gICAgfVxufVxuXG5mdW5jdGlvbiB2ZXJzaW9uVG9OdW1iZXIoczogc3RyaW5nKTogbnVtYmVyIHtcbiAgICBjb25zdCBwYXJ0cyA9IGAke3MgfHwgJyd9YC5zcGxpdCgnLicpXG4gICAgICAgIC5tYXAoeCA9PiBOdW1iZXIoeCkpXG4gICAgICAgIC5zbGljZSgwLCAzKTtcbiAgICB3aGlsZSAocGFydHMubGVuZ3RoIDwgMykge1xuICAgICAgICBwYXJ0cy5wdXNoKDApO1xuICAgIH1cbiAgICByZXR1cm4gcGFydHNbMF0gKiAxMDAwMDAwICsgcGFydHNbMV0gKiAxMDAwICsgcGFydHNbMl07XG59XG5cbmZ1bmN0aW9uIHJlc29sdmVTZXJ2ZXJJbmZvKHZlcnNpb25TdHJpbmc6IHN0cmluZyB8IG51bGwgfCB0eXBlb2YgdW5kZWZpbmVkKTogU2VydmVySW5mbyB7XG4gICAgY29uc3QgdmVyc2lvbiA9IHZlcnNpb25Ub051bWJlcih2ZXJzaW9uU3RyaW5nIHx8ICcwLjI0LjQnKTtcbiAgICByZXR1cm4ge1xuICAgICAgICB2ZXJzaW9uLFxuICAgICAgICBzdXBwb3J0c09wZXJhdGlvbklkOiB2ZXJzaW9uID4gMjQwMDQsXG4gICAgICAgIHN1cHBvcnRzQWdncmVnYXRpb25zOiB2ZXJzaW9uID49IDI1MDAwLFxuICAgICAgICBzdXBwb3J0c1RpbWU6IHZlcnNpb24gPj0gMjYwMDMsXG4gICAgICAgIHRpbWVEZWx0YTogbnVsbCxcbiAgICB9O1xufVxuXG5mdW5jdGlvbiBhYm9ydGFibGVGZXRjaChmZXRjaCkge1xuICAgIHJldHVybiAoaW5wdXQsIG9wdGlvbnMpID0+IHtcbiAgICAgICAgcmV0dXJuIG5ldyBQcm9taXNlKChyZXNvbHZlLCByZWplY3QpID0+IHtcbiAgICAgICAgICAgIGNvbnN0IHF1ZXJ5VGltZW91dDogbnVtYmVyIHwgdHlwZW9mIHVuZGVmaW5lZCA9IG9wdGlvbnMucXVlcnlUaW1lb3V0O1xuICAgICAgICAgICAgbGV0IGZldGNoT3B0aW9ucyA9IG9wdGlvbnM7XG4gICAgICAgICAgICBpZiAocXVlcnlUaW1lb3V0KSB7XG4gICAgICAgICAgICAgICAgY29uc3QgY29udHJvbGxlciA9IGdsb2JhbC5BYm9ydENvbnRyb2xsZXIgPyBuZXcgZ2xvYmFsLkFib3J0Q29udHJvbGxlcigpIDogbnVsbDtcbiAgICAgICAgICAgICAgICBpZiAoY29udHJvbGxlcikge1xuICAgICAgICAgICAgICAgICAgICBmZXRjaE9wdGlvbnMgPSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAuLi5vcHRpb25zLFxuICAgICAgICAgICAgICAgICAgICAgICAgc2lnbmFsOiBjb250cm9sbGVyLnNpZ25hbCxcbiAgICAgICAgICAgICAgICAgICAgfTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgc2V0VGltZW91dCgoKSA9PiB7XG4gICAgICAgICAgICAgICAgICAgIHJlamVjdChUT05DbGllbnRFcnJvci5xdWVyeUZvcmNpYmx5QWJvcnRlZChlbXB0eVRPTkVycm9yRGF0YSkpO1xuICAgICAgICAgICAgICAgICAgICBpZiAoY29udHJvbGxlcikge1xuICAgICAgICAgICAgICAgICAgICAgICAgY29udHJvbGxlci5hYm9ydCgpO1xuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgfSwgcXVlcnlUaW1lb3V0KTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGZldGNoKGlucHV0LCBmZXRjaE9wdGlvbnMpLnRoZW4ocmVzb2x2ZSwgcmVqZWN0KTtcbiAgICAgICAgfSk7XG4gICAgfTtcbn1cblxuXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBUT05RdWVyaWVzTW9kdWxlIGV4dGVuZHMgVE9OTW9kdWxlIGltcGxlbWVudHMgVE9OUXVlcmllcyB7XG4gICAgdHJhbnNhY3Rpb25zOiBUT05RQ29sbGVjdGlvbjtcbiAgICBtZXNzYWdlczogVE9OUUNvbGxlY3Rpb247XG4gICAgYmxvY2tzOiBUT05RQ29sbGVjdGlvbjtcbiAgICBhY2NvdW50czogVE9OUUNvbGxlY3Rpb247XG4gICAgYmxvY2tzX3NpZ25hdHVyZXM6IFRPTlFDb2xsZWN0aW9uO1xuXG4gICAgY29uZmlnOiBUT05Db25maWdNb2R1bGU7XG5cbiAgICBncmFwaHFsQ2xpZW50Q3JlYXRpb246ID9NdWx0aWNhc3RQcm9taXNlPEFwb2xsb0NsaWVudD47XG4gICAgZ3JhcGhxbENsaWVudDogP0Fwb2xsb0NsaWVudDtcbiAgICBncmFwaHFsQ2xpZW50Q29uZmlnOiA/R3JhcGhRTENsaWVudENvbmZpZztcbiAgICB3c0xpbms6ID9XZWJTb2NrZXRMaW5rO1xuICAgIGh0dHBMaW5rOiA/SHR0cExpbms7XG5cbiAgICBvdmVycmlkZVdzVXJsOiA/c3RyaW5nO1xuICAgIG9wZXJhdGlvbklkUHJlZml4OiBzdHJpbmc7XG4gICAgb3BlcmF0aW9uSWRTdWZmaXg6IG51bWJlcjtcbiAgICBzZXJ2ZXJJbmZvOiBTZXJ2ZXJJbmZvO1xuICAgIGFjdGl2ZVF1ZXJpZXNSZWplY3RzOiAoKGFueSkgPT4gdm9pZClbXTtcblxuICAgIGNvbnN0cnVjdG9yKGNvbnRleHQ6IFRPTk1vZHVsZUNvbnRleHQpIHtcbiAgICAgICAgc3VwZXIoY29udGV4dCk7XG4gICAgICAgIHRoaXMuZ3JhcGhxbENsaWVudCA9IG51bGw7XG4gICAgICAgIHRoaXMuZ3JhcGhxbENsaWVudENyZWF0aW9uID0gbnVsbDtcbiAgICAgICAgdGhpcy5ncmFwaHFsQ2xpZW50Q29uZmlnID0gbnVsbDtcbiAgICAgICAgdGhpcy53c0xpbmsgPSBudWxsO1xuICAgICAgICB0aGlzLmh0dHBMaW5rID0gbnVsbDtcbiAgICAgICAgdGhpcy5vdmVycmlkZVdzVXJsID0gbnVsbDtcbiAgICAgICAgdGhpcy5vcGVyYXRpb25JZFByZWZpeCA9IChEYXRlLm5vdygpICUgNjAwMDApLnRvU3RyaW5nKDE2KTtcbiAgICAgICAgZm9yIChsZXQgaSA9IDA7IGkgPCAxMDsgaSArPSAxKSB7XG4gICAgICAgICAgICBjb25zdCByYW5kb21QYXJ0ID0gTWF0aC5yb3VuZChNYXRoLnJhbmRvbSgpICogMjU2KS50b1N0cmluZygxNik7XG4gICAgICAgICAgICB0aGlzLm9wZXJhdGlvbklkUHJlZml4ID0gYCR7dGhpcy5vcGVyYXRpb25JZFByZWZpeH0ke3JhbmRvbVBhcnR9YDtcbiAgICAgICAgfVxuICAgICAgICB0aGlzLm9wZXJhdGlvbklkU3VmZml4ID0gMTtcbiAgICAgICAgdGhpcy5zZXJ2ZXJJbmZvID0gcmVzb2x2ZVNlcnZlckluZm8oKTtcbiAgICAgICAgdGhpcy5hY3RpdmVRdWVyaWVzUmVqZWN0cyA9IFtdO1xuICAgIH1cblxuICAgIHJlZ2lzdGVyUXVlcnlSZWplY3QocmVqZWN0OiAoYW55KSA9PiB2b2lkKSB7XG4gICAgICAgIHRoaXMuYWN0aXZlUXVlcmllc1JlamVjdHMucHVzaChyZWplY3QpO1xuICAgIH1cblxuICAgIHVucmVnaXN0ZXJRdWVyeVJlamVjdChyZWplY3Q6IChhbnkpID0+IHZvaWQpIHtcbiAgICAgICAgY29uc3QgaW5kZXggPSB0aGlzLmFjdGl2ZVF1ZXJpZXNSZWplY3RzLmluZGV4T2YocmVqZWN0KTtcbiAgICAgICAgaWYgKGluZGV4ID49IDApIHtcbiAgICAgICAgICAgIHRoaXMuYWN0aXZlUXVlcmllc1JlamVjdHMuc3BsaWNlKGluZGV4LCAxKTtcbiAgICAgICAgfVxuICAgIH1cblxuICAgIHJlamVjdEFjdGl2ZVF1ZXJpZXMoKSB7XG4gICAgICAgIGNvbnN0IHJlamVjdHMgPSB0aGlzLmFjdGl2ZVF1ZXJpZXNSZWplY3RzO1xuICAgICAgICB0aGlzLmFjdGl2ZVF1ZXJpZXNSZWplY3RzID0gW107XG4gICAgICAgIGNvbnN0IGVyciA9IFRPTkNsaWVudEVycm9yLnF1ZXJ5Rm9yY2libHlBYm9ydGVkKHt9KTtcbiAgICAgICAgcmVqZWN0cy5mb3JFYWNoKChyZWplY3QpID0+IHtcbiAgICAgICAgICAgIHRyeSB7XG4gICAgICAgICAgICAgICAgcmVqZWN0KGVycik7XG4gICAgICAgICAgICB9IGNhdGNoIHtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfSlcbiAgICB9XG5cbiAgICBhc3luYyBzZXR1cCgpIHtcbiAgICAgICAgdGhpcy5jb25maWcgPSB0aGlzLmNvbnRleHQuZ2V0TW9kdWxlKFRPTkNvbmZpZ01vZHVsZSk7XG4gICAgICAgIHRoaXMudHJhbnNhY3Rpb25zID0gbmV3IFRPTlF1ZXJpZXNNb2R1bGVDb2xsZWN0aW9uKHRoaXMsICd0cmFuc2FjdGlvbnMnLCAnVHJhbnNhY3Rpb24nKTtcbiAgICAgICAgdGhpcy5tZXNzYWdlcyA9IG5ldyBUT05RdWVyaWVzTW9kdWxlQ29sbGVjdGlvbih0aGlzLCAnbWVzc2FnZXMnLCAnTWVzc2FnZScpO1xuICAgICAgICB0aGlzLmJsb2NrcyA9IG5ldyBUT05RdWVyaWVzTW9kdWxlQ29sbGVjdGlvbih0aGlzLCAnYmxvY2tzJywgJ0Jsb2NrJyk7XG4gICAgICAgIHRoaXMuYWNjb3VudHMgPSBuZXcgVE9OUXVlcmllc01vZHVsZUNvbGxlY3Rpb24odGhpcywgJ2FjY291bnRzJywgJ0FjY291bnQnKTtcbiAgICAgICAgdGhpcy5ibG9ja3Nfc2lnbmF0dXJlcyA9XG4gICAgICAgICAgICBuZXcgVE9OUXVlcmllc01vZHVsZUNvbGxlY3Rpb24odGhpcywgJ2Jsb2Nrc19zaWduYXR1cmVzJywgJ0Jsb2NrU2lnbmF0dXJlcycpO1xuICAgIH1cblxuICAgIGdldFF1ZXJ5VXJsKCk6IHN0cmluZyB7XG4gICAgICAgIHJldHVybiB0aGlzLmdyYXBocWxDbGllbnRDb25maWc/Lmh0dHBVcmwgfHwgJyc7XG4gICAgfVxuXG4gICAgYXN5bmMgZGV0ZWN0UmVkaXJlY3QoZmV0Y2g6IGFueSwgc291cmNlVXJsOiBzdHJpbmcpOiBQcm9taXNlPHN0cmluZz4ge1xuICAgICAgICBjb25zdCByZXNwb25zZSA9IGF3YWl0IGZldGNoKHNvdXJjZVVybCk7XG4gICAgICAgIHRyeSB7XG4gICAgICAgICAgICBjb25zdCByZXNwb25zZVRleHQgPSBhd2FpdCByZXNwb25zZS50ZXh0KCk7XG4gICAgICAgICAgICBjb25zdCByZXNwb25zZUpzb24gPSBKU09OLnBhcnNlKHJlc3BvbnNlVGV4dCk7XG4gICAgICAgICAgICB0aGlzLnNlcnZlckluZm8gPSByZXNvbHZlU2VydmVySW5mbyhyZXNwb25zZUpzb24uZGF0YS5pbmZvLnZlcnNpb24pO1xuICAgICAgICB9IGNhdGNoIHtcbiAgICAgICAgfVxuICAgICAgICBpZiAocmVzcG9uc2UucmVkaXJlY3RlZCA9PT0gdHJ1ZSkge1xuICAgICAgICAgICAgcmV0dXJuIHJlc3BvbnNlLnVybDtcbiAgICAgICAgfVxuICAgICAgICBpZiAocmVzcG9uc2UucmVkaXJlY3RlZCA9PT0gZmFsc2UpIHtcbiAgICAgICAgICAgIHJldHVybiAnJztcbiAgICAgICAgfVxuICAgICAgICBjb25zdCBzb3VyY2VMb2NhdGlvbiA9IFVSTFBhcnRzLnBhcnNlKHNvdXJjZVVybClcbiAgICAgICAgICAgIC5maXhRdWVyeSgoKSA9PiAnJylcbiAgICAgICAgICAgIC50b1N0cmluZygpXG4gICAgICAgICAgICAudG9Mb3dlckNhc2UoKTtcbiAgICAgICAgY29uc3QgcmVzcG9uc2VMb2NhdGlvbiA9IFVSTFBhcnRzLnBhcnNlKHJlc3BvbnNlLnVybClcbiAgICAgICAgICAgIC5maXhRdWVyeSgoKSA9PiAnJylcbiAgICAgICAgICAgIC50b1N0cmluZygpXG4gICAgICAgICAgICAudG9Mb3dlckNhc2UoKTtcbiAgICAgICAgcmV0dXJuIHJlc3BvbnNlTG9jYXRpb24gIT09IHNvdXJjZUxvY2F0aW9uID8gcmVzcG9uc2UudXJsIDogJyc7XG4gICAgfVxuXG4gICAgYXN5bmMgZ2V0Q2xpZW50Q29uZmlnKCk6IFByb21pc2U8R3JhcGhRTENsaWVudENvbmZpZz4ge1xuICAgICAgICBjb25zdCBjb25maWcgPSB0aGlzLmNvbmZpZztcbiAgICAgICAgY29uc3QgY2xpZW50UGxhdGZvcm0gPSBUT05DbGllbnQuY2xpZW50UGxhdGZvcm07XG4gICAgICAgIGlmICghY2xpZW50UGxhdGZvcm0pIHtcbiAgICAgICAgICAgIHRocm93IEVycm9yKCdUT04gQ2xpZW50IGRvZXMgbm90IGNvbmZpZ3VyZWQnKTtcbiAgICAgICAgfVxuICAgICAgICBjb25zdCBmZXRjaCA9IGNsaWVudFBsYXRmb3JtLmZldGNoO1xuXG4gICAgICAgIGZ1bmN0aW9uIGdldENvbmZpZ0ZvclNlcnZlcihzZXJ2ZXI6IHN0cmluZyk6IEdyYXBoUUxDbGllbnRDb25maWcge1xuICAgICAgICAgICAgY29uc3QgaHR0cFBhcnRzID0gVVJMUGFydHMucGFyc2Uoc2VydmVyKVxuICAgICAgICAgICAgICAgIC5maXhQcm90b2NvbCh4ID0+ICh4ID09PSAnaHR0cDovLycgPyB4IDogJ2h0dHBzOi8vJykpXG4gICAgICAgICAgICAgICAgLmZpeFBhdGgoeCA9PiBgJHt4fS9ncmFwaHFsYCk7XG4gICAgICAgICAgICBjb25zdCBodHRwID0gaHR0cFBhcnRzLnRvU3RyaW5nKCk7XG4gICAgICAgICAgICBjb25zdCB3cyA9IGh0dHBQYXJ0c1xuICAgICAgICAgICAgICAgIC5maXhQcm90b2NvbCh4ID0+ICh4ID09PSAnaHR0cDovLycgPyAnd3M6Ly8nIDogJ3dzczovLycpKVxuICAgICAgICAgICAgICAgIC50b1N0cmluZygpO1xuICAgICAgICAgICAgcmV0dXJuIHtcbiAgICAgICAgICAgICAgICBodHRwVXJsOiBodHRwLFxuICAgICAgICAgICAgICAgIHdzVXJsOiB3cyxcbiAgICAgICAgICAgICAgICBmZXRjaDogY2xpZW50UGxhdGZvcm0uZmV0Y2gsXG4gICAgICAgICAgICAgICAgV2ViU29ja2V0OiBjbGllbnRQbGF0Zm9ybS5XZWJTb2NrZXQsXG4gICAgICAgICAgICB9O1xuICAgICAgICB9XG5cbiAgICAgICAgZm9yIChjb25zdCBzZXJ2ZXIgb2YgY29uZmlnLmRhdGEuc2VydmVycykge1xuICAgICAgICAgICAgY29uc3QgY2xpZW50Q29uZmlnID0gZ2V0Q29uZmlnRm9yU2VydmVyKHNlcnZlcik7XG4gICAgICAgICAgICB0cnkge1xuICAgICAgICAgICAgICAgIC8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSBuby1hd2FpdC1pbi1sb29wXG4gICAgICAgICAgICAgICAgLy8gbm9pbnNwZWN0aW9uIFNwZWxsQ2hlY2tpbmdJbnNwZWN0aW9uXG4gICAgICAgICAgICAgICAgY29uc3QgcmVkaXJlY3RlZCA9IGF3YWl0IHRoaXMuZGV0ZWN0UmVkaXJlY3QoXG4gICAgICAgICAgICAgICAgICAgIGZldGNoLFxuICAgICAgICAgICAgICAgICAgICBgJHtjbGllbnRDb25maWcuaHR0cFVybH0/cXVlcnk9JTdCaW5mbyU3QnZlcnNpb24lN0QlN0RgLFxuICAgICAgICAgICAgICAgICk7XG4gICAgICAgICAgICAgICAgaWYgKHJlZGlyZWN0ZWQgIT09ICcnKSB7XG4gICAgICAgICAgICAgICAgICAgIGNvbnN0IGh0dHBQYXJ0cyA9IFVSTFBhcnRzLnBhcnNlKHJlZGlyZWN0ZWQpXG4gICAgICAgICAgICAgICAgICAgICAgICAuZml4UXVlcnkoXyA9PiAnJyk7XG4gICAgICAgICAgICAgICAgICAgIGNsaWVudENvbmZpZy5odHRwVXJsID0gaHR0cFBhcnRzLnRvU3RyaW5nKCk7XG4gICAgICAgICAgICAgICAgICAgIGNsaWVudENvbmZpZy53c1VybCA9IGh0dHBQYXJ0c1xuICAgICAgICAgICAgICAgICAgICAgICAgLmZpeFByb3RvY29sKHggPT4gKHggPT09ICdodHRwOi8vJyA/ICd3czovLycgOiAnd3NzOi8vJykpXG4gICAgICAgICAgICAgICAgICAgICAgICAudG9TdHJpbmcoKTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgcmV0dXJuIGNsaWVudENvbmZpZztcbiAgICAgICAgICAgIH0gY2F0Y2ggKGVycm9yKSB7XG4gICAgICAgICAgICAgICAgaWYoY29uZmlnLl9lcnJMb2dWZXJib3NlKSBjb25zb2xlLmxvZyhgW2dldENsaWVudENvbmZpZ10gZm9yIHNlcnZlciBcIiR7c2VydmVyfVwiIGZhaWxlZGAsIHtcbiAgICAgICAgICAgICAgICAgICAgbWVzc2FnZTogZXJyb3IubWVzc2FnZSB8fCBlcnJvci50b1N0cmluZygpLFxuICAgICAgICAgICAgICAgICAgICBkYXRhOiB7XG4gICAgICAgICAgICAgICAgICAgICAgICBodHRwX3VybDogY2xpZW50Q29uZmlnLmh0dHBVcmwsXG4gICAgICAgICAgICAgICAgICAgICAgICB3c191cmw6IGNsaWVudENvbmZpZy53c1VybCxcbiAgICAgICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICB9KTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgICByZXR1cm4gZ2V0Q29uZmlnRm9yU2VydmVyKGNvbmZpZy5kYXRhLnNlcnZlcnNbMF0pO1xuICAgIH1cblxuICAgIGFzeW5jIGdldFNlcnZlckluZm8oc3Bhbj86IFNwYW4gfCBTcGFuQ29udGV4dCk6IFByb21pc2U8U2VydmVySW5mbz4ge1xuICAgICAgICBhd2FpdCB0aGlzLmdyYXBocWxDbGllbnRSZXF1aXJlZChzcGFuKTtcbiAgICAgICAgcmV0dXJuIHRoaXMuc2VydmVySW5mbztcbiAgICB9XG5cbiAgICBhc3luYyBzZXJ2ZXJUaW1lRGVsdGEoc3Bhbj86IFNwYW4gfCBTcGFuQ29udGV4dCk6IFByb21pc2U8bnVtYmVyPiB7XG4gICAgICAgIGNvbnN0IHNlcnZlckluZm8gPSBhd2FpdCB0aGlzLmdldFNlcnZlckluZm8oc3Bhbik7XG4gICAgICAgIGNvbnN0IGNsaWVudENvbmZpZyA9IHRoaXMuZ3JhcGhxbENsaWVudENvbmZpZztcbiAgICAgICAgaWYgKGNsaWVudENvbmZpZyAmJiBzZXJ2ZXJJbmZvLnN1cHBvcnRzVGltZSAmJiBzZXJ2ZXJJbmZvLnRpbWVEZWx0YSA9PT0gbnVsbCkge1xuICAgICAgICAgICAgdHJ5IHtcbiAgICAgICAgICAgICAgICBjb25zdCBzdGFydCA9IERhdGUubm93KCk7XG4gICAgICAgICAgICAgICAgLy8gbm9pbnNwZWN0aW9uIFNwZWxsQ2hlY2tpbmdJbnNwZWN0aW9uXG4gICAgICAgICAgICAgICAgY29uc3QgcmVzcG9uc2UgPSBhd2FpdCBjbGllbnRDb25maWcuZmV0Y2goYCR7Y2xpZW50Q29uZmlnLmh0dHBVcmx9P3F1ZXJ5PSU3QmluZm8lN0J0aW1lJTdEJTdEYCk7XG4gICAgICAgICAgICAgICAgY29uc3QgZW5kID0gRGF0ZS5ub3coKTtcbiAgICAgICAgICAgICAgICBjb25zdCByZXNwb25zZURhdGEgPSBhd2FpdCByZXNwb25zZS5qc29uKCk7XG4gICAgICAgICAgICAgICAgY29uc3Qgc2VydmVyVGltZSA9IHJlc3BvbnNlRGF0YS5kYXRhLmluZm8udGltZTtcbiAgICAgICAgICAgICAgICBzZXJ2ZXJJbmZvLnRpbWVEZWx0YSA9IE1hdGgucm91bmQoc2VydmVyVGltZSAtIChzdGFydCArIChlbmQgLSBzdGFydCkgLyAyKSk7XG4gICAgICAgICAgICB9IGNhdGNoIChlcnJvcikge1xuICAgICAgICAgICAgICAgIGlmKGNvbmZpZy5fZXJyTG9nVmVyYm9zZSkgY29uc29sZS5sb2coJz4+PicsIGVycm9yKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgICByZXR1cm4gc2VydmVySW5mby50aW1lRGVsdGEgfHwgMDtcbiAgICB9XG5cbiAgICBhc3luYyBzZXJ2ZXJOb3coc3Bhbj86IFNwYW4gfCBTcGFuQ29udGV4dCk6IFByb21pc2U8bnVtYmVyPiB7XG4gICAgICAgIGNvbnN0IHRpbWVEZWx0YSA9IGF3YWl0IHRoaXMuc2VydmVyVGltZURlbHRhKHNwYW4pO1xuICAgICAgICByZXR1cm4gRGF0ZS5ub3coKSArIHRpbWVEZWx0YTtcbiAgICB9XG5cbiAgICBkcm9wU2VydmVyVGltZURlbHRhKCkge1xuICAgICAgICBpZiAodGhpcy5zZXJ2ZXJJbmZvKSB7XG4gICAgICAgICAgICB0aGlzLnNlcnZlckluZm8udGltZURlbHRhID0gbnVsbDtcbiAgICAgICAgfVxuICAgIH1cblxuICAgIGdlbmVyYXRlT3BlcmF0aW9uSWQoKTogc3RyaW5nIHtcbiAgICAgICAgdGhpcy5vcGVyYXRpb25JZFN1ZmZpeCArPSAxO1xuICAgICAgICByZXR1cm4gYCR7dGhpcy5vcGVyYXRpb25JZFByZWZpeH0ke3RoaXMub3BlcmF0aW9uSWRTdWZmaXgudG9TdHJpbmcoMTYpfWA7XG4gICAgfVxuXG4gICAgYXN5bmMgZmluaXNoT3BlcmF0aW9ucyhvcGVyYXRpb25JZHM6IHN0cmluZ1tdKSB7XG4gICAgICAgIGlmIChvcGVyYXRpb25JZHMubGVuZ3RoID09PSAwKSB7XG4gICAgICAgICAgICByZXR1cm47XG4gICAgICAgIH1cbiAgICAgICAgaWYgKCEoYXdhaXQgdGhpcy5nZXRTZXJ2ZXJJbmZvKCkpLnN1cHBvcnRzT3BlcmF0aW9uSWQpIHtcbiAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgfVxuICAgICAgICBhd2FpdCB0aGlzLmdyYXBocWxNdXRhdGlvbihgbXV0YXRpb24gZmluaXNoT3BlcmF0aW9ucygkb3BlcmF0aW9uSWRzOiBbU3RyaW5nXSkge1xuICAgICAgICAgICAgICAgIGZpbmlzaE9wZXJhdGlvbnMob3BlcmF0aW9uSWRzOiAkb3BlcmF0aW9uSWRzKVxuICAgICAgICAgICAgfWAsIHtcbiAgICAgICAgICAgIG9wZXJhdGlvbklkcyxcbiAgICAgICAgfSk7XG4gICAgfVxuXG4gICAgYXN5bmMgZ2V0QWNjb3VudHNDb3VudChwYXJlbnRTcGFuPzogKFNwYW4gfCBTcGFuQ29udGV4dCkpOiBQcm9taXNlPG51bWJlcj4ge1xuICAgICAgICBjb25zdCByZXN1bHQgPSBhd2FpdCB0aGlzLnF1ZXJ5KCdxdWVyeXtnZXRBY2NvdW50c0NvdW50fScsIHVuZGVmaW5lZCwgcGFyZW50U3Bhbik7XG4gICAgICAgIHJldHVybiByZXN1bHQuZGF0YS5nZXRBY2NvdW50c0NvdW50O1xuICAgIH1cblxuICAgIGFzeW5jIGdldFRyYW5zYWN0aW9uc0NvdW50KHBhcmVudFNwYW4/OiAoU3BhbiB8IFNwYW5Db250ZXh0KSk6IFByb21pc2U8bnVtYmVyPiB7XG4gICAgICAgIGNvbnN0IHJlc3VsdCA9IGF3YWl0IHRoaXMucXVlcnkoJ3F1ZXJ5e2dldFRyYW5zYWN0aW9uc0NvdW50fScsIHVuZGVmaW5lZCwgcGFyZW50U3Bhbik7XG4gICAgICAgIHJldHVybiByZXN1bHQuZGF0YS5nZXRUcmFuc2FjdGlvbnNDb3VudDtcbiAgICB9XG5cbiAgICBhc3luYyBnZXRBY2NvdW50c1RvdGFsQmFsYW5jZShwYXJlbnRTcGFuPzogKFNwYW4gfCBTcGFuQ29udGV4dCkpOiBQcm9taXNlPHN0cmluZz4ge1xuICAgICAgICBjb25zdCByZXN1bHQgPSBhd2FpdCB0aGlzLnF1ZXJ5KCdxdWVyeXtnZXRBY2NvdW50c1RvdGFsQmFsYW5jZX0nLCB1bmRlZmluZWQsIHBhcmVudFNwYW4pO1xuICAgICAgICByZXR1cm4gcmVzdWx0LmRhdGEuZ2V0QWNjb3VudHNUb3RhbEJhbGFuY2U7XG4gICAgfVxuXG4gICAgYXN5bmMgcG9zdFJlcXVlc3RzKHJlcXVlc3RzOiBSZXF1ZXN0W10sIHBhcmVudFNwYW4/OiAoU3BhbiB8IFNwYW5Db250ZXh0KSk6IFByb21pc2U8YW55PiB7XG4gICAgICAgIHJldHVybiB0aGlzLmNvbnRleHQudHJhY2UoJ3F1ZXJpZXMucG9zdFJlcXVlc3RzJywgYXN5bmMgKHNwYW4pID0+IHtcbiAgICAgICAgICAgIHJldHVybiB0aGlzLmdyYXBocWxNdXRhdGlvbihgbXV0YXRpb24gcG9zdFJlcXVlc3RzKCRyZXF1ZXN0czogW1JlcXVlc3RdKSB7XG4gICAgICAgICAgICAgICAgcG9zdFJlcXVlc3RzKHJlcXVlc3RzOiAkcmVxdWVzdHMpXG4gICAgICAgICAgICB9YCwge1xuICAgICAgICAgICAgICAgIHJlcXVlc3RzLFxuICAgICAgICAgICAgfSwgc3Bhbik7XG4gICAgICAgIH0sIHBhcmVudFNwYW4pO1xuICAgIH1cblxuICAgIGFzeW5jIG11dGF0aW9uKFxuICAgICAgICBxbDogc3RyaW5nLFxuICAgICAgICB2YXJpYWJsZXM6IHsgW3N0cmluZ106IGFueSB9ID0ge30sXG4gICAgICAgIHBhcmVudFNwYW4/OiAoU3BhbiB8IFNwYW5Db250ZXh0KSxcbiAgICApOiBQcm9taXNlPGFueT4ge1xuICAgICAgICByZXR1cm4gdGhpcy5jb250ZXh0LnRyYWNlKCdxdWVyaWVzLm11dGF0aW9uJywgYXN5bmMgKHNwYW46IFNwYW4pID0+IHtcbiAgICAgICAgICAgIHNwYW4uc2V0VGFnKCdwYXJhbXMnLCB7XG4gICAgICAgICAgICAgICAgbXV0YXRpb246IHFsLFxuICAgICAgICAgICAgICAgIHZhcmlhYmxlcyxcbiAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgcmV0dXJuIHRoaXMuZ3JhcGhxbE11dGF0aW9uKHFsLCB2YXJpYWJsZXMsIHNwYW4pO1xuICAgICAgICB9LCBwYXJlbnRTcGFuKTtcbiAgICB9XG5cbiAgICBhc3luYyBxdWVyeShcbiAgICAgICAgcWw6IHN0cmluZyxcbiAgICAgICAgdmFyaWFibGVzOiB7IFtzdHJpbmddOiBhbnkgfSA9IHt9LFxuICAgICAgICBwYXJlbnRTcGFuPzogKFNwYW4gfCBTcGFuQ29udGV4dCksXG4gICAgICAgIHRpbWVvdXQ/OiBudW1iZXIsXG4gICAgKTogUHJvbWlzZTxhbnk+IHtcbiAgICAgICAgcmV0dXJuIHRoaXMuY29udGV4dC50cmFjZSgncXVlcmllcy5xdWVyeScsIGFzeW5jIChzcGFuOiBTcGFuKSA9PiB7XG4gICAgICAgICAgICBzcGFuLnNldFRhZygncGFyYW1zJywge1xuICAgICAgICAgICAgICAgIHF1ZXJ5OiBxbCxcbiAgICAgICAgICAgICAgICB2YXJpYWJsZXMsXG4gICAgICAgICAgICB9KTtcbiAgICAgICAgICAgIHJldHVybiB0aGlzLmdyYXBocWxRdWVyeShxbCwgdmFyaWFibGVzLCBzcGFuLCB0aW1lb3V0KTtcbiAgICAgICAgfSwgcGFyZW50U3Bhbik7XG4gICAgfVxuXG4gICAgYXN5bmMgZ3JhcGhxbE11dGF0aW9uKHFsOiBzdHJpbmcsIHZhcmlhYmxlczogeyBbc3RyaW5nXTogYW55IH0gPSB7fSwgc3BhbjogU3Bhbik6IFByb21pc2U8YW55PiB7XG4gICAgICAgIGNvbnN0IG11dGF0aW9uID0gZ3FsKFtxbF0pO1xuICAgICAgICByZXR1cm4gdGhpcy5ncmFwaFFsKChjbGllbnQpID0+IGNsaWVudC5tdXRhdGUoe1xuICAgICAgICAgICAgbXV0YXRpb24sXG4gICAgICAgICAgICB2YXJpYWJsZXMsXG4gICAgICAgICAgICBjb250ZXh0OiB7XG4gICAgICAgICAgICAgICAgdHJhY2VTcGFuOiBzcGFuLFxuICAgICAgICAgICAgfSxcbiAgICAgICAgfSkpO1xuICAgIH1cblxuICAgIHN0YXRpYyBpc05ldHdvcmtFcnJvcihlcnJvcjogYW55KTogYm9vbGVhbiB7XG4gICAgICAgIGlmIChlcnJvci5jb2RlID09PSBUT05FcnJvckNvZGUuUVVFUllfRk9SQ0lCTFlfQUJPUlRFRCkge1xuICAgICAgICAgICAgcmV0dXJuIHRydWU7XG4gICAgICAgIH1cbiAgICAgICAgY29uc3QgbmV0d29ya0Vycm9yID0gZXJyb3IubmV0d29ya0Vycm9yO1xuICAgICAgICBpZiAoIW5ldHdvcmtFcnJvcikge1xuICAgICAgICAgICAgcmV0dXJuIGZhbHNlO1xuICAgICAgICB9XG4gICAgICAgIGlmICgnZXJybm8nIGluIG5ldHdvcmtFcnJvcikge1xuICAgICAgICAgICAgcmV0dXJuIHRydWU7XG4gICAgICAgIH1cbiAgICAgICAgcmV0dXJuICEoJ3Jlc3BvbnNlJyBpbiBuZXR3b3JrRXJyb3IgfHwgJ3Jlc3VsdCcgaW4gbmV0d29ya0Vycm9yKTtcbiAgICB9XG5cbiAgICBhc3luYyBncmFwaHFsUXVlcnkoXG4gICAgICAgIHFsOiBzdHJpbmcsXG4gICAgICAgIHZhcmlhYmxlczogeyBbc3RyaW5nXTogYW55IH0gPSB7fSxcbiAgICAgICAgc3BhbjogU3BhbixcbiAgICAgICAgdGltZW91dD86IG51bWJlcixcbiAgICApOiBQcm9taXNlPGFueT4ge1xuICAgICAgICBjb25zdCBxdWVyeSA9IGdxbChbcWxdKTtcbiAgICAgICAgbGV0IG5leHRUaW1lb3V0ID0gMTAwO1xuICAgICAgICBjb25zdCBzdGFydFRpbWUgPSBEYXRlLm5vdygpO1xuICAgICAgICBsZXQgZm9yY2VUZXJtaW5hdGVFeHRyYVRpbWVvdXQgPSA1MDAwO1xuICAgICAgICBjb25zdCBmb3JjZVRlcm1pbmF0ZVRpbWVvdXQgPSB0aW1lb3V0IHx8IHRoaXMuY29uZmlnLndhaXRGb3JUaW1lb3V0KCk7XG4gICAgICAgIHdoaWxlICh0cnVlKSB7XG4gICAgICAgICAgICB0cnkge1xuICAgICAgICAgICAgICAgIGNvbnN0IGNsaWVudCA9IGF3YWl0IHRoaXMuZ3JhcGhxbENsaWVudFJlcXVpcmVkKHNwYW4pO1xuICAgICAgICAgICAgICAgIGNvbnN0IGNvbnRleHQ6IGFueSA9IHtcbiAgICAgICAgICAgICAgICAgICAgdHJhY2VTcGFuOiBzcGFuLFxuICAgICAgICAgICAgICAgICAgICBmZXRjaE9wdGlvbnM6IHtcbiAgICAgICAgICAgICAgICAgICAgICAgIHF1ZXJ5VGltZW91dDogTWF0aC5taW4oXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgZm9yY2VUZXJtaW5hdGVUaW1lb3V0ICsgZm9yY2VUZXJtaW5hdGVFeHRyYVRpbWVvdXQsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgTUFYX1RJTUVPVVQsXG4gICAgICAgICAgICAgICAgICAgICAgICApLFxuICAgICAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgIH07XG4gICAgICAgICAgICAgICAgcmV0dXJuIGF3YWl0IG5ldyBQcm9taXNlKChyZXNvbHZlLCByZWplY3QpID0+IHtcbiAgICAgICAgICAgICAgICAgICAgKGFzeW5jICgpID0+IHtcbiAgICAgICAgICAgICAgICAgICAgICAgIGxldCBpc0FjdHVhbCA9IHRydWU7XG4gICAgICAgICAgICAgICAgICAgICAgICBjb25zdCBkb1Jlc29sdmUgPSAocmVzdWx0KSA9PiB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgaWYgKGlzQWN0dWFsKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGlzQWN0dWFsID0gZmFsc2U7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHJlc29sdmUocmVzdWx0KTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICAgICBjb25zdCBkb1JlamVjdCA9IChlcnJvcikgPT4ge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGlmIChpc0FjdHVhbCkge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBpc0FjdHVhbCA9IGZhbHNlO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICByZWplY3QoZXJyb3IpO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMucmVnaXN0ZXJRdWVyeVJlamVjdChkb1JlamVjdCk7XG4gICAgICAgICAgICAgICAgICAgICAgICB0cnkge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGRvUmVzb2x2ZShhd2FpdCBjbGllbnQucXVlcnkoe1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBxdWVyeSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdmFyaWFibGVzLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBjb250ZXh0LFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIH0pKTtcbiAgICAgICAgICAgICAgICAgICAgICAgIH0gY2F0Y2ggKGVycm9yKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgZG9SZWplY3QoZXJyb3IpO1xuICAgICAgICAgICAgICAgICAgICAgICAgfSBmaW5hbGx5IHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB0aGlzLnVucmVnaXN0ZXJRdWVyeVJlamVjdChkb1JlamVjdCk7XG4gICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgIH0pKCk7XG4gICAgICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICB9IGNhdGNoIChlcnJvcikge1xuICAgICAgICAgICAgICAgIGNvbnN0IHJlc29sdmVkRXJyb3IgPSBhd2FpdCB0aGlzLnJlc29sdmVHcmFwaFFMRXJyb3IoZXJyb3IpO1xuICAgICAgICAgICAgICAgIGlmIChUT05RdWVyaWVzTW9kdWxlLmlzTmV0d29ya0Vycm9yKHJlc29sdmVkRXJyb3IpXG4gICAgICAgICAgICAgICAgICAgICYmICF0aGlzLmNvbmZpZy5pc05ldHdvcmtUaW1lb3V0RXhwaXJlZFNpbmNlKHN0YXJ0VGltZSkpIHtcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5jb25maWcubG9nKHJlc29sdmVkRXJyb3IpO1xuICAgICAgICAgICAgICAgICAgICBjb25zdCByZXRyeURlbGF5VGltZW91dCA9IG5leHRUaW1lb3V0O1xuICAgICAgICAgICAgICAgICAgICBhd2FpdCBuZXcgUHJvbWlzZShyZXNvbHZlID0+IHNldFRpbWVvdXQocmVzb2x2ZSwgcmV0cnlEZWxheVRpbWVvdXQpKTtcbiAgICAgICAgICAgICAgICAgICAgaWYgKG5leHRUaW1lb3V0IDwgMzIwMCkge1xuICAgICAgICAgICAgICAgICAgICAgICAgbmV4dFRpbWVvdXQgKj0gMjtcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICBpZiAoZm9yY2VUZXJtaW5hdGVFeHRyYVRpbWVvdXQgPCB0aGlzLmNvbmZpZy53YWl0Rm9yVGltZW91dCgpKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICBmb3JjZVRlcm1pbmF0ZUV4dHJhVGltZW91dCArPSA1MDAwO1xuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgICAgICAgdGhyb3cgcmVzb2x2ZWRFcnJvcjtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICBhc3luYyByZXNvbHZlR3JhcGhRTEVycm9yKGVycm9yOiBhbnkpIHtcbiAgICAgICAgY29uc3QgZ3FsRXJyID0gZXJyb3IuZ3JhcGhRTEVycm9ycyAmJiBlcnJvci5ncmFwaFFMRXJyb3JzWzBdO1xuICAgICAgICBpZiAoZ3FsRXJyKSB7XG4gICAgICAgICAgICBjb25zdCBjbGllbnRFcnIgPSBuZXcgRXJyb3IoZ3FsRXJyLm1lc3NhZ2UpO1xuICAgICAgICAgICAgY29uc3QgZ3FsRXhjID0gKGdxbEVyci5leHRlbnNpb25zICYmIGdxbEVyci5leHRlbnNpb25zLmV4Y2VwdGlvbikgfHwge307XG4gICAgICAgICAgICAoY2xpZW50RXJyOiBhbnkpLm51bWJlciA9IGdxbEV4Yy5jb2RlIHx8IDA7XG4gICAgICAgICAgICAoY2xpZW50RXJyOiBhbnkpLmNvZGUgPSBncWxFeGMuY29kZSB8fCAwO1xuICAgICAgICAgICAgKGNsaWVudEVycjogYW55KS5zb3VyY2UgPSBncWxFeGMuc291cmNlIHx8ICdjbGllbnQnO1xuICAgICAgICAgICAgcmV0dXJuIGNsaWVudEVycjtcbiAgICAgICAgfVxuICAgICAgICBjb25zdCBlcnJvcnMgPSBlcnJvclxuICAgICAgICAgICAgJiYgZXJyb3IubmV0d29ya0Vycm9yXG4gICAgICAgICAgICAmJiBlcnJvci5uZXR3b3JrRXJyb3IucmVzdWx0XG4gICAgICAgICAgICAmJiBlcnJvci5uZXR3b3JrRXJyb3IucmVzdWx0LmVycm9ycztcbiAgICAgICAgaWYgKGVycm9ycykge1xuICAgICAgICAgICAgcmV0dXJuIFRPTkNsaWVudEVycm9yLnF1ZXJ5RmFpbGVkKGVycm9ycywgYXdhaXQgdGhpcy5jb21wbGV0ZUVycm9yRGF0YSgpKTtcbiAgICAgICAgfVxuICAgICAgICByZXR1cm4gZXJyb3I7XG4gICAgfVxuXG4gICAgYXN5bmMgZ3JhcGhRbChyZXF1ZXN0OiAoY2xpZW50OiBBcG9sbG9DbGllbnQpID0+IFByb21pc2U8YW55Piwgc3BhbjogU3Bhbik6IFByb21pc2U8YW55PiB7XG4gICAgICAgIGNvbnN0IGNsaWVudCA9IGF3YWl0IHRoaXMuZ3JhcGhxbENsaWVudFJlcXVpcmVkKHNwYW4pO1xuICAgICAgICB0cnkge1xuICAgICAgICAgICAgcmV0dXJuIGF3YWl0IHJlcXVlc3QoY2xpZW50KTtcbiAgICAgICAgfSBjYXRjaCAoZXJyb3IpIHtcbiAgICAgICAgICAgIHRocm93IGF3YWl0IHRoaXMucmVzb2x2ZUdyYXBoUUxFcnJvcihlcnJvcik7XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICBhc3luYyBncmFwaHFsQ2xpZW50UmVxdWlyZWQocGFyZW50U3Bhbj86IFNwYW4gfCBTcGFuQ29udGV4dCk6IFByb21pc2U8QXBvbGxvQ2xpZW50PiB7XG4gICAgICAgIGlmICh0aGlzLmdyYXBocWxDbGllbnQpIHtcbiAgICAgICAgICAgIHJldHVybiB0aGlzLmdyYXBocWxDbGllbnQ7XG4gICAgICAgIH1cbiAgICAgICAgaWYgKHRoaXMuZ3JhcGhxbENsaWVudENyZWF0aW9uKSB7XG4gICAgICAgICAgICBhd2FpdCB0aGlzLmdyYXBocWxDbGllbnRDcmVhdGlvbi5saXN0ZW4oKTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIGNvbnN0IGNyZWF0aW9uID0gbmV3IE11bHRpY2FzdFByb21pc2UoKTtcbiAgICAgICAgICAgIHRoaXMuZ3JhcGhxbENsaWVudENyZWF0aW9uID0gY3JlYXRpb247XG4gICAgICAgICAgICB0cnkge1xuICAgICAgICAgICAgICAgIGF3YWl0IHRoaXMuY29udGV4dC50cmFjZSgnc2V0dXAgY2xpZW50JywgKHNwYW4pID0+IHtcbiAgICAgICAgICAgICAgICAgICAgcmV0dXJuIHRoaXMuY3JlYXRlR3JhcGhxbENsaWVudChzcGFuKTtcbiAgICAgICAgICAgICAgICB9LCBwYXJlbnRTcGFuKTtcbiAgICAgICAgICAgICAgICB0aGlzLmdyYXBocWxDbGllbnRDcmVhdGlvbiA9IG51bGw7XG4gICAgICAgICAgICAgICAgY3JlYXRpb24ucmVzb2x2ZSh0aGlzLmdyYXBocWxDbGllbnQpO1xuICAgICAgICAgICAgfSBjYXRjaCAoZXJyb3IpIHtcbiAgICAgICAgICAgICAgICB0aGlzLmdyYXBocWxDbGllbnRDcmVhdGlvbiA9IG51bGw7XG4gICAgICAgICAgICAgICAgY3JlYXRpb24ucmVqZWN0KGVycm9yKTtcbiAgICAgICAgICAgICAgICB0aHJvdyBlcnJvcjtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgICByZXR1cm4gdGhpcy5ncmFwaHFsQ2xpZW50O1xuICAgIH1cblxuICAgIGFzeW5jIGNyZWF0ZUdyYXBocWxDbGllbnQoc3BhbjogU3BhbiB8IFNwYW5Db250ZXh0KSB7XG4gICAgICAgIGNvbnN0IHVzZUh0dHAgPSAhdGhpcy5jb25maWcuZGF0YS51c2VXZWJTb2NrZXRGb3JRdWVyaWVzO1xuICAgICAgICBsZXQgY2xpZW50Q29uZmlnID0gYXdhaXQgdGhpcy5nZXRDbGllbnRDb25maWcoKTtcblxuICAgICAgICBjb25zdCBzdWJzT3B0aW9ucyA9IHRoaXMuY29uZmlnLnRyYWNlci5pbmplY3Qoc3BhbiwgRk9STUFUX1RFWFRfTUFQLCB7fSk7XG4gICAgICAgIGNvbnN0IHN1YnNjcmlwdGlvbkNsaWVudDogU3Vic2NyaXB0aW9uQ2xpZW50ICYgeyB1cmw6IHN0cmluZyB9ID0gbmV3IFN1YnNjcmlwdGlvbkNsaWVudChcbiAgICAgICAgICAgIGNsaWVudENvbmZpZy53c1VybCxcbiAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICB0aW1lb3V0OiBLRUVQX0FMSVZFX1RJTUVPVVQsXG4gICAgICAgICAgICAgICAgcmVjb25uZWN0OiB0cnVlLFxuICAgICAgICAgICAgICAgIGNvbm5lY3Rpb25QYXJhbXM6ICgpID0+ICh7XG4gICAgICAgICAgICAgICAgICAgIGFjY2Vzc0tleTogdGhpcy5jb25maWcuZGF0YSAmJiB0aGlzLmNvbmZpZy5kYXRhLmFjY2Vzc0tleSxcbiAgICAgICAgICAgICAgICAgICAgaGVhZGVyczogc3Vic09wdGlvbnMsXG4gICAgICAgICAgICAgICAgfSksXG4gICAgICAgICAgICB9LFxuICAgICAgICAgICAgY2xpZW50Q29uZmlnLldlYlNvY2tldCxcbiAgICAgICAgKTtcbiAgICAgICAgc3Vic2NyaXB0aW9uQ2xpZW50Lm9uUmVjb25uZWN0ZWQoKCkgPT4ge1xuICAgICAgICAgICAgaWYodGhpcy5jb25maWcuX2VyckxvZ1ZlcmJvc2UpIGNvbnNvbGUubG9nKCdbVE9OQ2xpZW50LnF1ZXJpZXNdJywgJ1dlYlNvY2tldCBSZWNvbm5lY3RlZCcpO1xuICAgICAgICAgICAgdGhpcy5yZWplY3RBY3RpdmVRdWVyaWVzKCk7XG4gICAgICAgIH0pO1xuICAgICAgICBjb25zdCBndWFyZCA9IHtcbiAgICAgICAgICAgIGRldGVjdGluZ1JlZGlyZWN0aW9uOiBmYWxzZSxcbiAgICAgICAgfTtcbiAgICAgICAgc3Vic2NyaXB0aW9uQ2xpZW50Lm9uRXJyb3IoKCkgPT4ge1xuICAgICAgICAgICAgaWYodGhpcy5jb25maWcuX2VyckxvZ1ZlcmJvc2UpIGNvbnNvbGUubG9nKCdbVE9OQ2xpZW50LnF1ZXJpZXNdJywgJ1dlYlNvY2tldCBGYWlsZWQnKTtcbiAgICAgICAgICAgIGlmIChndWFyZC5kZXRlY3RpbmdSZWRpcmVjdGlvbikge1xuICAgICAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIChhc3luYyAoKSA9PiB7XG4gICAgICAgICAgICAgICAgZ3VhcmQuZGV0ZWN0aW5nUmVkaXJlY3Rpb24gPSB0cnVlO1xuICAgICAgICAgICAgICAgIHRyeSB7XG4gICAgICAgICAgICAgICAgICAgIGNvbnN0IG5ld0NvbmZpZyA9IGF3YWl0IHRoaXMuZ2V0Q2xpZW50Q29uZmlnKCk7XG4gICAgICAgICAgICAgICAgICAgIGNvbnN0IGNvbmZpZ0lzQ2hhbmdlZCA9IG5ld0NvbmZpZy5odHRwVXJsICE9PSBjbGllbnRDb25maWcuaHR0cFVybFxuICAgICAgICAgICAgICAgICAgICAgICAgfHwgbmV3Q29uZmlnLndzVXJsICE9PSBjbGllbnRDb25maWcud3NVcmw7XG4gICAgICAgICAgICAgICAgICAgIGlmIChjb25maWdJc0NoYW5nZWQpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIGlmKHRoaXMuY29uZmlnLl9sb2dWZXJib3NlKSBjb25zb2xlLmxvZygnW1RPTkNsaWVudC5xdWVyaWVzXScsICdDbGllbnQgY29uZmlnIGNoYW5nZWQnKTtcbiAgICAgICAgICAgICAgICAgICAgICAgIGNsaWVudENvbmZpZyA9IG5ld0NvbmZpZztcbiAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMuZ3JhcGhxbENsaWVudENvbmZpZyA9IGNsaWVudENvbmZpZztcbiAgICAgICAgICAgICAgICAgICAgICAgIHN1YnNjcmlwdGlvbkNsaWVudC51cmwgPSBuZXdDb25maWcud3NVcmw7XG4gICAgICAgICAgICAgICAgICAgICAgICBpZiAodGhpcy53c0xpbmspIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB0aGlzLndzTGluay51cmwgPSBuZXdDb25maWcud3NVcmw7XG4gICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICAgICBpZiAodGhpcy5odHRwTGluaykge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMuaHR0cExpbmsudXJpID0gbmV3Q29uZmlnLmh0dHBVcmw7XG4gICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICB9IGNhdGNoIChlcnIpIHtcbiAgICAgICAgICAgICAgICAgICAgaWYodGhpcy5jb25maWcuX2VyckxvZ1ZlcmJvc2UpIGNvbnNvbGUubG9nKCdbVE9OQ2xpZW50LnF1ZXJpZXNdIHJlZGlyZWN0aW9uIGRldGVjdG9yIGZhaWxlZCcsIGVycik7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIGd1YXJkLmRldGVjdGluZ1JlZGlyZWN0aW9uID0gZmFsc2U7XG4gICAgICAgICAgICB9KSgpO1xuICAgICAgICB9KTtcbiAgICAgICAgc3Vic2NyaXB0aW9uQ2xpZW50Lm1heENvbm5lY3RUaW1lR2VuZXJhdG9yLmR1cmF0aW9uID0gKCkgPT4ge1xuICAgICAgICAgICAgcmV0dXJuIHN1YnNjcmlwdGlvbkNsaWVudC5tYXhDb25uZWN0VGltZUdlbmVyYXRvci5tYXg7XG4gICAgICAgIH07XG5cbiAgICAgICAgY29uc3QgdHJhY2VyTGluayA9IGF3YWl0IHNldENvbnRleHQoKF8sIHJlcSkgPT4ge1xuICAgICAgICAgICAgY29uc3QgcmVzb2x2ZWRTcGFuID0gKHJlcSAmJiByZXEudHJhY2VTcGFuKSB8fCBzcGFuO1xuICAgICAgICAgICAgcmVxLmhlYWRlcnMgPSB7fTtcbiAgICAgICAgICAgIHRoaXMuY29uZmlnLnRyYWNlci5pbmplY3QocmVzb2x2ZWRTcGFuLCBGT1JNQVRfVEVYVF9NQVAsIHJlcS5oZWFkZXJzKTtcbiAgICAgICAgICAgIGNvbnN0IGFjY2Vzc0tleSA9IHRoaXMuY29uZmlnLmRhdGEgJiYgdGhpcy5jb25maWcuZGF0YS5hY2Nlc3NLZXk7XG4gICAgICAgICAgICBpZiAoYWNjZXNzS2V5KSB7XG4gICAgICAgICAgICAgICAgcmVxLmhlYWRlcnMuYWNjZXNzS2V5ID0gYWNjZXNzS2V5O1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgcmV0dXJuIHtcbiAgICAgICAgICAgICAgICBoZWFkZXJzOiByZXEuaGVhZGVycyxcbiAgICAgICAgICAgIH07XG4gICAgICAgIH0pO1xuICAgICAgICBjb25zdCB3cmFwTGluayA9IChsaW5rOiBBcG9sbG9MaW5rKTogQXBvbGxvTGluayA9PiB0cmFjZXJMaW5rLmNvbmNhdChsaW5rKTtcbiAgICAgICAgY29uc3QgaXNTdWJzY3JpcHRpb24gPSAoeyBxdWVyeSB9KSA9PiB7XG4gICAgICAgICAgICBjb25zdCBkZWZpbml0aW9uID0gZ2V0TWFpbkRlZmluaXRpb24ocXVlcnkpO1xuICAgICAgICAgICAgcmV0dXJuIChcbiAgICAgICAgICAgICAgICBkZWZpbml0aW9uLmtpbmQgPT09ICdPcGVyYXRpb25EZWZpbml0aW9uJ1xuICAgICAgICAgICAgICAgICYmIGRlZmluaXRpb24ub3BlcmF0aW9uID09PSAnc3Vic2NyaXB0aW9uJ1xuICAgICAgICAgICAgKTtcbiAgICAgICAgfTtcblxuICAgICAgICB0aGlzLndzTGluayA9IG5ldyBXZWJTb2NrZXRMaW5rKHN1YnNjcmlwdGlvbkNsaWVudCk7XG4gICAgICAgIHRoaXMuaHR0cExpbmsgPSB1c2VIdHRwXG4gICAgICAgICAgICA/IG5ldyBIdHRwTGluayh7XG4gICAgICAgICAgICAgICAgdXJpOiBjbGllbnRDb25maWcuaHR0cFVybCxcbiAgICAgICAgICAgICAgICBmZXRjaDogYWJvcnRhYmxlRmV0Y2goY2xpZW50Q29uZmlnLmZldGNoKSxcbiAgICAgICAgICAgIH0pXG4gICAgICAgICAgICA6IG51bGw7XG4gICAgICAgIGNvbnN0IGxpbmsgPSB0aGlzLmh0dHBMaW5rXG4gICAgICAgICAgICA/IHNwbGl0KGlzU3Vic2NyaXB0aW9uLCB3cmFwTGluayh0aGlzLndzTGluayksIHdyYXBMaW5rKHRoaXMuaHR0cExpbmspKVxuICAgICAgICAgICAgOiB3cmFwTGluayh0aGlzLndzTGluayk7XG4gICAgICAgIHRoaXMuZ3JhcGhxbENsaWVudENvbmZpZyA9IGNsaWVudENvbmZpZztcbiAgICAgICAgdGhpcy5ncmFwaHFsQ2xpZW50ID0gbmV3IEFwb2xsb0NsaWVudCh7XG4gICAgICAgICAgICBjYWNoZTogbmV3IEluTWVtb3J5Q2FjaGUoe30pLFxuICAgICAgICAgICAgbGluayxcbiAgICAgICAgICAgIGRlZmF1bHRPcHRpb25zOiB7XG4gICAgICAgICAgICAgICAgd2F0Y2hRdWVyeToge1xuICAgICAgICAgICAgICAgICAgICBmZXRjaFBvbGljeTogJ25vLWNhY2hlJyxcbiAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgIHF1ZXJ5OiB7XG4gICAgICAgICAgICAgICAgICAgIGZldGNoUG9saWN5OiAnbm8tY2FjaGUnLFxuICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICB9LFxuICAgICAgICB9KTtcbiAgICB9XG5cbiAgICBhc3luYyBjbG9zZSgpIHtcbiAgICAgICAgaWYgKHRoaXMuZ3JhcGhxbENsaWVudCkge1xuICAgICAgICAgICAgY29uc3QgY2xpZW50ID0gdGhpcy5ncmFwaHFsQ2xpZW50O1xuICAgICAgICAgICAgdGhpcy5ncmFwaHFsQ2xpZW50ID0gbnVsbDtcbiAgICAgICAgICAgIGNsaWVudC5zdG9wKCk7XG4gICAgICAgICAgICBhd2FpdCBjbGllbnQuY2xlYXJTdG9yZSgpO1xuICAgICAgICB9XG4gICAgfVxufVxuXG5cbmNsYXNzIFRPTlF1ZXJpZXNNb2R1bGVDb2xsZWN0aW9uIGltcGxlbWVudHMgVE9OUUNvbGxlY3Rpb24ge1xuICAgIG1vZHVsZTogVE9OUXVlcmllc01vZHVsZTtcblxuICAgIGNvbGxlY3Rpb25OYW1lOiBzdHJpbmc7XG5cbiAgICB0eXBlTmFtZTogc3RyaW5nO1xuXG4gICAgY29uc3RydWN0b3IoXG4gICAgICAgIG1vZHVsZTogVE9OUXVlcmllc01vZHVsZSxcbiAgICAgICAgY29sbGVjdGlvbk5hbWU6IHN0cmluZyxcbiAgICAgICAgdHlwZU5hbWU6IHN0cmluZyxcbiAgICApIHtcbiAgICAgICAgdGhpcy5tb2R1bGUgPSBtb2R1bGU7XG4gICAgICAgIHRoaXMuY29sbGVjdGlvbk5hbWUgPSBjb2xsZWN0aW9uTmFtZTtcbiAgICAgICAgdGhpcy50eXBlTmFtZSA9IHR5cGVOYW1lO1xuICAgIH1cblxuICAgIGFzeW5jIHF1ZXJ5KFxuICAgICAgICAuLi5hcmdzXG4gICAgICAgIC8qXG4gICAgICAgICAgICBmaWx0ZXJPclBhcmFtczogYW55IHwgVE9OUXVlcnlQYXJhbXMsXG4gICAgICAgICAgICByZXN1bHQ6IHN0cmluZyxcbiAgICAgICAgICAgIG9yZGVyQnk/OiBPcmRlckJ5W10sXG4gICAgICAgICAgICBsaW1pdD86IG51bWJlcixcbiAgICAgICAgICAgIHRpbWVvdXQ/OiBudW1iZXIsXG4gICAgICAgICAgICBwYXJlbnRTcGFuPzogKFNwYW4gfCBTcGFuQ29udGV4dClcbiAgICAgICAgICovXG4gICAgKTogUHJvbWlzZTxhbnk+IHtcbiAgICAgICAgY29uc3Qge1xuICAgICAgICAgICAgZmlsdGVyLFxuICAgICAgICAgICAgcmVzdWx0LFxuICAgICAgICAgICAgb3JkZXJCeSxcbiAgICAgICAgICAgIGxpbWl0LFxuICAgICAgICAgICAgdGltZW91dCxcbiAgICAgICAgICAgIG9wZXJhdGlvbklkLFxuICAgICAgICAgICAgcGFyZW50U3BhbixcbiAgICAgICAgfSA9IHJlc29sdmVQYXJhbXM8VE9OUXVlcnlQYXJhbXM+KGFyZ3MsICdmaWx0ZXInLCAoKSA9PiAoe1xuICAgICAgICAgICAgZmlsdGVyOiBhcmdzWzBdLFxuICAgICAgICAgICAgcmVzdWx0OiAoYXJnc1sxXTogYW55KSxcbiAgICAgICAgICAgIG9yZGVyQnk6IChhcmdzWzJdOiBhbnkpLFxuICAgICAgICAgICAgbGltaXQ6IChhcmdzWzNdOiBhbnkpLFxuICAgICAgICAgICAgdGltZW91dDogKGFyZ3NbNF06IGFueSksXG4gICAgICAgICAgICBwYXJlbnRTcGFuOiBhcmdzWzVdLFxuICAgICAgICB9KSk7XG4gICAgICAgIHJldHVybiB0aGlzLm1vZHVsZS5jb250ZXh0LnRyYWNlKGAke3RoaXMuY29sbGVjdGlvbk5hbWV9LnF1ZXJ5YCwgYXN5bmMgKHNwYW4pID0+IHtcbiAgICAgICAgICAgIHNwYW4uc2V0VGFnKCdwYXJhbXMnLCB7XG4gICAgICAgICAgICAgICAgZmlsdGVyLFxuICAgICAgICAgICAgICAgIHJlc3VsdCxcbiAgICAgICAgICAgICAgICBvcmRlckJ5LFxuICAgICAgICAgICAgICAgIGxpbWl0LFxuICAgICAgICAgICAgICAgIHRpbWVvdXQsXG4gICAgICAgICAgICAgICAgb3BlcmF0aW9uSWQsXG4gICAgICAgICAgICB9KTtcbiAgICAgICAgICAgIGNvbnN0IHVzZU9wZXJhdGlvbklkID0gb3BlcmF0aW9uSWRcbiAgICAgICAgICAgICAgICAmJiAoYXdhaXQgdGhpcy5tb2R1bGUuZ2V0U2VydmVySW5mbyhzcGFuKSkuc3VwcG9ydHNPcGVyYXRpb25JZDtcbiAgICAgICAgICAgIGNvbnN0IGMgPSB0aGlzLmNvbGxlY3Rpb25OYW1lO1xuICAgICAgICAgICAgY29uc3QgdCA9IHRoaXMudHlwZU5hbWU7XG4gICAgICAgICAgICBjb25zdCBxbCA9IGBcbiAgICAgICAgICAgIHF1ZXJ5ICR7Y30oXG4gICAgICAgICAgICAgICAgJGZpbHRlcjogJHt0fUZpbHRlcixcbiAgICAgICAgICAgICAgICAkb3JkZXJCeTogW1F1ZXJ5T3JkZXJCeV0sIFxuICAgICAgICAgICAgICAgICRsaW1pdDogSW50LCBcbiAgICAgICAgICAgICAgICAkdGltZW91dDogRmxvYXRcbiAgICAgICAgICAgICAgICAke3VzZU9wZXJhdGlvbklkID8gJywgJG9wZXJhdGlvbklkOiBTdHJpbmcnIDogJyd9XG4gICAgICAgICAgICAgKSB7XG4gICAgICAgICAgICAgICAgJHtjfShcbiAgICAgICAgICAgICAgICAgICAgZmlsdGVyOiAkZmlsdGVyLCBcbiAgICAgICAgICAgICAgICAgICAgb3JkZXJCeTogJG9yZGVyQnksIFxuICAgICAgICAgICAgICAgICAgICBsaW1pdDogJGxpbWl0LCBcbiAgICAgICAgICAgICAgICAgICAgdGltZW91dDogJHRpbWVvdXRcbiAgICAgICAgICAgICAgICAgICAgJHt1c2VPcGVyYXRpb25JZCA/ICcsIG9wZXJhdGlvbklkOiAkb3BlcmF0aW9uSWQnIDogJyd9XG4gICAgICAgICAgICAgICAgKSB7ICR7cmVzdWx0fSB9XG4gICAgICAgICAgICB9YDtcbiAgICAgICAgICAgIGNvbnN0IHZhcmlhYmxlczogeyBbc3RyaW5nXTogYW55IH0gPSB7XG4gICAgICAgICAgICAgICAgZmlsdGVyLFxuICAgICAgICAgICAgICAgIG9yZGVyQnksXG4gICAgICAgICAgICAgICAgbGltaXQsXG4gICAgICAgICAgICB9O1xuICAgICAgICAgICAgaWYgKHVzZU9wZXJhdGlvbklkKSB7XG4gICAgICAgICAgICAgICAgdmFyaWFibGVzLm9wZXJhdGlvbklkID0gb3BlcmF0aW9uSWQ7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBpZiAodGltZW91dCkge1xuICAgICAgICAgICAgICAgIHZhcmlhYmxlcy50aW1lb3V0ID0gTWF0aC5taW4oTUFYX1RJTUVPVVQsIHRpbWVvdXQpO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgcmV0dXJuIChhd2FpdCB0aGlzLm1vZHVsZS5ncmFwaHFsUXVlcnkocWwsIHZhcmlhYmxlcywgc3BhbiwgdGltZW91dCkpLmRhdGFbY107XG4gICAgICAgIH0sIHBhcmVudFNwYW4pO1xuICAgIH1cblxuICAgIGFzeW5jIGFnZ3JlZ2F0ZShcbiAgICAgICAgcGFyYW1zOiBUT05RdWVyeUFnZ3JlZ2F0ZVBhcmFtcyxcbiAgICApOiBQcm9taXNlPHN0cmluZ1tdPiB7XG4gICAgICAgIHJldHVybiB0aGlzLm1vZHVsZS5jb250ZXh0LnRyYWNlKGAke3RoaXMuY29sbGVjdGlvbk5hbWV9LmFnZ3JlZ2F0ZWAsIGFzeW5jIChzcGFuKSA9PiB7XG4gICAgICAgICAgICBzcGFuLnNldFRhZygncGFyYW1zJywge1xuICAgICAgICAgICAgICAgIGZpbHRlcjogcGFyYW1zLmZpbHRlcixcbiAgICAgICAgICAgICAgICBmaWVsZHM6IHBhcmFtcy5maWVsZHMsXG4gICAgICAgICAgICB9KTtcbiAgICAgICAgICAgIGlmICghKGF3YWl0IHRoaXMubW9kdWxlLmdldFNlcnZlckluZm8oc3BhbikpLnN1cHBvcnRzQWdncmVnYXRpb25zKSB7XG4gICAgICAgICAgICAgICAgdGhyb3cgVE9OQ2xpZW50RXJyb3Iuc2VydmVyRG9lc250U3VwcG9ydEFnZ3JlZ2F0aW9ucyhcbiAgICAgICAgICAgICAgICAgICAgYXdhaXQgdGhpcy5tb2R1bGUuY29tcGxldGVFcnJvckRhdGEoKSxcbiAgICAgICAgICAgICAgICApO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgY29uc3QgdCA9IHRoaXMudHlwZU5hbWU7XG4gICAgICAgICAgICBjb25zdCBxID0gdGhpcy50eXBlTmFtZS5lbmRzV2l0aCgncycpID8gYGFnZ3JlZ2F0ZSR7dH1gIDogYGFnZ3JlZ2F0ZSR7dH1zYDtcbiAgICAgICAgICAgIGNvbnN0IHFsID0gYFxuICAgICAgICAgICAgcXVlcnkgJHtxfShcbiAgICAgICAgICAgICAgICAkZmlsdGVyOiAke3R9RmlsdGVyLFxuICAgICAgICAgICAgICAgICRmaWVsZHM6IFtGaWVsZEFnZ3JlZ2F0aW9uXSBcbiAgICAgICAgICAgICApIHtcbiAgICAgICAgICAgICAgICAke3F9KFxuICAgICAgICAgICAgICAgICAgICBmaWx0ZXI6ICRmaWx0ZXIsIFxuICAgICAgICAgICAgICAgICAgICBmaWVsZHM6ICRmaWVsZHMgXG4gICAgICAgICAgICAgICAgKVxuICAgICAgICAgICAgfWA7XG4gICAgICAgICAgICBjb25zdCB2YXJpYWJsZXM6IHsgW3N0cmluZ106IGFueSB9ID0ge1xuICAgICAgICAgICAgICAgIGZpbHRlcjogcGFyYW1zLmZpbHRlcixcbiAgICAgICAgICAgICAgICBmaWVsZHM6IHBhcmFtcy5maWVsZHMsXG4gICAgICAgICAgICB9O1xuICAgICAgICAgICAgcmV0dXJuIChhd2FpdCB0aGlzLm1vZHVsZS5ncmFwaHFsUXVlcnkocWwsIHZhcmlhYmxlcywgc3BhbikpLmRhdGFbcV07XG4gICAgICAgIH0sIHBhcmFtcy5wYXJlbnRTcGFuKTtcbiAgICB9XG5cbiAgICBzdWJzY3JpYmUoXG4gICAgICAgIC4uLmFyZ3NcbiAgICAgICAgLypcbiAgICAgICAgZmlsdGVyT3JQYXJhbXM6IGFueSB8IFRPTlN1YnNjcmliZVBhcmFtcyxcbiAgICAgICAgcmVzdWx0Pzogc3RyaW5nLFxuICAgICAgICBvbkRvY0V2ZW50PzogRG9jRXZlbnQsXG4gICAgICAgIG9uRXJyb3I/OiAoZXJyOiBFcnJvcikgPT4gdm9pZFxuICAgICAgICAgKi9cbiAgICApOiBTdWJzY3JpcHRpb24ge1xuICAgICAgICBjb25zdCB7XG4gICAgICAgICAgICBmaWx0ZXIsXG4gICAgICAgICAgICByZXN1bHQsXG4gICAgICAgICAgICBvbkRvY0V2ZW50LFxuICAgICAgICAgICAgb25FcnJvcixcbiAgICAgICAgfSA9IHJlc29sdmVQYXJhbXM8VE9OU3Vic2NyaWJlUGFyYW1zPihhcmdzLCAnZmlsdGVyJywgKCkgPT4gKHtcbiAgICAgICAgICAgIGZpbHRlcjogYXJnc1swXSxcbiAgICAgICAgICAgIHJlc3VsdDogKGFyZ3NbMV06IGFueSksXG4gICAgICAgICAgICBvbkRvY0V2ZW50OiAoYXJnc1syXTogYW55KSxcbiAgICAgICAgICAgIG9uRXJyb3I6IChhcmdzWzNdOiBhbnkpLFxuICAgICAgICB9KSk7XG4gICAgICAgIGNvbnN0IHNwYW4gPSB0aGlzLm1vZHVsZS5jb25maWcudHJhY2VyLnN0YXJ0U3BhbignVE9OUXVlcmllc01vZHVsZS5qczpzdWJzY3JpYmUgJyk7XG4gICAgICAgIHNwYW4uc2V0VGFnKFRhZ3MuU1BBTl9LSU5ELCAnY2xpZW50Jyk7XG4gICAgICAgIGNvbnN0IHRleHQgPSBgc3Vic2NyaXB0aW9uICR7dGhpcy5jb2xsZWN0aW9uTmFtZX0oJGZpbHRlcjogJHt0aGlzLnR5cGVOYW1lfUZpbHRlcikge1xuICAgICAgICAgICAgJHt0aGlzLmNvbGxlY3Rpb25OYW1lfShmaWx0ZXI6ICRmaWx0ZXIpIHsgJHtyZXN1bHR9IH1cbiAgICAgICAgfWA7XG4gICAgICAgIGNvbnN0IHF1ZXJ5ID0gZ3FsKFt0ZXh0XSk7XG4gICAgICAgIGxldCBzdWJzY3JpcHRpb24gPSBudWxsO1xuICAgICAgICAoYXN5bmMgKCkgPT4ge1xuICAgICAgICAgICAgdHJ5IHtcbiAgICAgICAgICAgICAgICBjb25zdCBjbGllbnQgPSBhd2FpdCB0aGlzLm1vZHVsZS5ncmFwaHFsQ2xpZW50UmVxdWlyZWQoc3Bhbik7XG4gICAgICAgICAgICAgICAgY29uc3Qgb2JzZXJ2YWJsZSA9IGNsaWVudC5zdWJzY3JpYmUoe1xuICAgICAgICAgICAgICAgICAgICBxdWVyeSxcbiAgICAgICAgICAgICAgICAgICAgdmFyaWFibGVzOiB7XG4gICAgICAgICAgICAgICAgICAgICAgICBmaWx0ZXIsXG4gICAgICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICAgICAgc3Vic2NyaXB0aW9uID0gb2JzZXJ2YWJsZS5zdWJzY3JpYmUoKG1lc3NhZ2UpID0+IHtcbiAgICAgICAgICAgICAgICAgICAgb25Eb2NFdmVudCgnaW5zZXJ0L3VwZGF0ZScsIG1lc3NhZ2UuZGF0YVt0aGlzLmNvbGxlY3Rpb25OYW1lXSk7XG4gICAgICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICB9IGNhdGNoIChlcnJvcikge1xuICAgICAgICAgICAgICAgIHNwYW4ubG9nKHtcbiAgICAgICAgICAgICAgICAgICAgZXZlbnQ6ICdmYWlsZWQnLFxuICAgICAgICAgICAgICAgICAgICBwYXlsb2FkOiBlcnJvcixcbiAgICAgICAgICAgICAgICB9KTtcbiAgICAgICAgICAgICAgICBpZiAob25FcnJvcikge1xuICAgICAgICAgICAgICAgICAgICBvbkVycm9yKGVycm9yKTtcbiAgICAgICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAgICAgICBpZihjb25maWcuX2VyckxvZ1ZlcmJvc2UpIGNvbnNvbGUubG9nKCdUT04gQ2xpZW50IHN1YnNjcmlwdGlvbiBlcnJvcicsIGVycm9yKTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG4gICAgICAgIH0pKCk7XG4gICAgICAgIHJldHVybiB7XG4gICAgICAgICAgICB1bnN1YnNjcmliZTogKCkgPT4ge1xuICAgICAgICAgICAgICAgIGlmIChzdWJzY3JpcHRpb24pIHtcbiAgICAgICAgICAgICAgICAgICAgc3Vic2NyaXB0aW9uLnVuc3Vic2NyaWJlKCk7XG4gICAgICAgICAgICAgICAgICAgIHNwYW4uZmluaXNoKCk7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfSxcbiAgICAgICAgfTtcbiAgICB9XG5cbiAgICBhc3luYyB3YWl0Rm9yKFxuICAgICAgICAuLi5hcmdzXG4gICAgICAgIC8qXG4gICAgICAgIGZpbHRlck9yUGFyYW1zOiBhbnkgfCBUT05XYWl0Rm9yUGFyYW1zLFxuICAgICAgICByZXN1bHQ6IHN0cmluZyxcbiAgICAgICAgdGltZW91dD86IG51bWJlcixcbiAgICAgICAgcGFyZW50U3Bhbj86IChTcGFuIHwgU3BhbkNvbnRleHQpXG4gICAgICAgICAqL1xuICAgICk6IFByb21pc2U8YW55PiB7XG4gICAgICAgIGNvbnN0IHtcbiAgICAgICAgICAgIGZpbHRlcixcbiAgICAgICAgICAgIHJlc3VsdCxcbiAgICAgICAgICAgIHRpbWVvdXQ6IHBhcmFtc1RpbWVvdXQsXG4gICAgICAgICAgICBwYXJlbnRTcGFuLFxuICAgICAgICAgICAgb3BlcmF0aW9uSWQsXG4gICAgICAgIH0gPSByZXNvbHZlUGFyYW1zPFRPTldhaXRGb3JQYXJhbXM+KGFyZ3MsICdmaWx0ZXInLCAoKSA9PiAoe1xuICAgICAgICAgICAgZmlsdGVyOiBhcmdzWzBdLFxuICAgICAgICAgICAgcmVzdWx0OiAoYXJnc1sxXTogYW55KSxcbiAgICAgICAgICAgIHRpbWVvdXQ6IChhcmdzWzJdOiBhbnkpLFxuICAgICAgICAgICAgcGFyZW50U3BhbjogYXJnc1szXSxcbiAgICAgICAgfSkpO1xuICAgICAgICBjb25zdCB0aW1lb3V0ID0gcGFyYW1zVGltZW91dCB8fCB0aGlzLm1vZHVsZS5jb25maWcud2FpdEZvclRpbWVvdXQoKTtcbiAgICAgICAgY29uc3QgZG9jcyA9IGF3YWl0IHRoaXMucXVlcnkoe1xuICAgICAgICAgICAgZmlsdGVyLFxuICAgICAgICAgICAgcmVzdWx0LFxuICAgICAgICAgICAgdGltZW91dCxcbiAgICAgICAgICAgIHBhcmVudFNwYW4sXG4gICAgICAgICAgICBvcGVyYXRpb25JZCxcbiAgICAgICAgfSk7XG4gICAgICAgIGlmIChkb2NzLmxlbmd0aCA+IDApIHtcbiAgICAgICAgICAgIHJldHVybiBkb2NzWzBdO1xuICAgICAgICB9XG4gICAgICAgIHRocm93IFRPTkNsaWVudEVycm9yLndhaXRGb3JUaW1lb3V0KGF3YWl0IHRoaXMubW9kdWxlLmNvbXBsZXRlRXJyb3JEYXRhKHtcbiAgICAgICAgICAgIGNvbGxlY3Rpb246IHRoaXMuY29sbGVjdGlvbk5hbWUsXG4gICAgICAgIH0pKTtcbiAgICB9XG59XG5cblRPTlF1ZXJpZXNNb2R1bGUubW9kdWxlTmFtZSA9ICdUT05RdWVyaWVzTW9kdWxlJztcbiJdfQ==