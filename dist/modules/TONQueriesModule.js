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
          reject(_TONClient.TONClientError.queryForciblyAborted({
            core_version: '',
            config_server: '',
            query_url: ''
          }));

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

    _defineProperty(_assertThisInitialized(_this), "overrideWsUrl", void 0);

    _defineProperty(_assertThisInitialized(_this), "operationIdPrefix", void 0);

    _defineProperty(_assertThisInitialized(_this), "operationIdSuffix", void 0);

    _defineProperty(_assertThisInitialized(_this), "serverInfo", void 0);

    _this.graphqlClient = null;
    _this.graphqlClientCreation = null;
    _this.graphqlClientConfig = null;
    _this.overrideWsUrl = null;
    _this.operationIdPrefix = (Date.now() % 60000).toString(16);

    for (var i = 0; i < 10; i += 1) {
      _this.operationIdPrefix = "".concat(_this.operationIdPrefix).concat(Math.round(Math.random() * 256).toString(16));
    }

    _this.operationIdSuffix = 1;
    _this.serverInfo = resolveServerInfo();
    return _this;
  }

  _createClass(TONQueriesModule, [{
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
                sourceLocation = _TONConfigModule.URLParts.parse(sourceUrl).fixQuery(function (_) {
                  return '';
                }).toString().toLowerCase();
                responseLocation = _TONConfigModule.URLParts.parse(response.url).fixQuery(function (_) {
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
                console.log("[getClientConfig] for server \"".concat(server, "\" failed"), {
                  clientConfig: {
                    httpUrl: clientConfig.httpUrl,
                    wsUrl: clientConfig.wsUrl
                  },
                  errorString: _context3.t0.toString(),
                  error: _context3.t0
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
                start = Date.now();
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
                console.log('>>>', _context5.t0);

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
      var _graphqlQuery = _asyncToGenerator( /*#__PURE__*/_regenerator["default"].mark(function _callee19(ql) {
        var _this5 = this;

        var variables,
            span,
            timeout,
            query,
            nextTimeout,
            startTime,
            forceTerminateExtraTimeout,
            forceTerminateTimeout,
            client,
            context,
            resolvedError,
            _args19 = arguments;
        return _regenerator["default"].wrap(function _callee19$(_context19) {
          while (1) {
            switch (_context19.prev = _context19.next) {
              case 0:
                variables = _args19.length > 1 && _args19[1] !== undefined ? _args19[1] : {};
                span = _args19.length > 2 ? _args19[2] : undefined;
                timeout = _args19.length > 3 ? _args19[3] : undefined;
                query = (0, _graphqlTag["default"])([ql]);
                nextTimeout = 100;
                startTime = Date.now();
                forceTerminateExtraTimeout = 5000;
                forceTerminateTimeout = timeout || this.config.waitForTimeout();

              case 8:
                if (!true) {
                  _context19.next = 31;
                  break;
                }

                _context19.prev = 9;
                _context19.next = 12;
                return this.graphqlClientRequired(span);

              case 12:
                client = _context19.sent;
                context = {
                  traceSpan: span,
                  fetchOptions: {
                    queryTimeout: Math.min(forceTerminateTimeout + forceTerminateExtraTimeout, MAX_TIMEOUT)
                  }
                };
                _context19.next = 16;
                return client.query({
                  query: query,
                  variables: variables,
                  context: context
                });

              case 16:
                return _context19.abrupt("return", _context19.sent);

              case 19:
                _context19.prev = 19;
                _context19.t0 = _context19["catch"](9);
                _context19.next = 23;
                return this.resolveGraphQLError(_context19.t0);

              case 23:
                resolvedError = _context19.sent;

                if (!(TONQueriesModule.isNetworkError(resolvedError) && !this.config.isNetworkTimeoutExpiredSince(startTime))) {
                  _context19.next = 28;
                  break;
                }

                return _context19.delegateYield( /*#__PURE__*/_regenerator["default"].mark(function _callee18() {
                  var retryDelayTimeout;
                  return _regenerator["default"].wrap(function _callee18$(_context18) {
                    while (1) {
                      switch (_context18.prev = _context18.next) {
                        case 0:
                          _this5.config.log(resolvedError);

                          retryDelayTimeout = nextTimeout;
                          _context18.next = 4;
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
                          return _context18.stop();
                      }
                    }
                  }, _callee18);
                })(), "t1", 26);

              case 26:
                _context19.next = 29;
                break;

              case 28:
                throw resolvedError;

              case 29:
                _context19.next = 8;
                break;

              case 31:
              case "end":
                return _context19.stop();
            }
          }
        }, _callee19, this, [[9, 19]]);
      }));

      function graphqlQuery(_x18) {
        return _graphqlQuery.apply(this, arguments);
      }

      return graphqlQuery;
    }()
  }, {
    key: "resolveGraphQLError",
    value: function () {
      var _resolveGraphQLError = _asyncToGenerator( /*#__PURE__*/_regenerator["default"].mark(function _callee20(error) {
        var gqlErr, clientErr, gqlExc, errors;
        return _regenerator["default"].wrap(function _callee20$(_context20) {
          while (1) {
            switch (_context20.prev = _context20.next) {
              case 0:
                gqlErr = error.graphQLErrors && error.graphQLErrors[0];

                if (!gqlErr) {
                  _context20.next = 8;
                  break;
                }

                clientErr = new Error(gqlErr.message);
                gqlExc = gqlErr.extensions && gqlErr.extensions.exception || {};
                clientErr.number = gqlExc.code || 0;
                clientErr.code = gqlExc.code || 0;
                clientErr.source = gqlExc.source || 'client';
                return _context20.abrupt("return", clientErr);

              case 8:
                errors = error && error.networkError && error.networkError.result && error.networkError.result.errors;

                if (!errors) {
                  _context20.next = 16;
                  break;
                }

                _context20.t0 = _TONClient.TONClientError;
                _context20.t1 = errors;
                _context20.next = 14;
                return this.completeErrorData();

              case 14:
                _context20.t2 = _context20.sent;
                return _context20.abrupt("return", _context20.t0.queryFailed.call(_context20.t0, _context20.t1, _context20.t2));

              case 16:
                return _context20.abrupt("return", error);

              case 17:
              case "end":
                return _context20.stop();
            }
          }
        }, _callee20, this);
      }));

      function resolveGraphQLError(_x19) {
        return _resolveGraphQLError.apply(this, arguments);
      }

      return resolveGraphQLError;
    }()
  }, {
    key: "graphQl",
    value: function () {
      var _graphQl = _asyncToGenerator( /*#__PURE__*/_regenerator["default"].mark(function _callee21(request, span) {
        var client;
        return _regenerator["default"].wrap(function _callee21$(_context21) {
          while (1) {
            switch (_context21.prev = _context21.next) {
              case 0:
                _context21.next = 2;
                return this.graphqlClientRequired(span);

              case 2:
                client = _context21.sent;
                _context21.prev = 3;
                _context21.next = 6;
                return request(client);

              case 6:
                return _context21.abrupt("return", _context21.sent);

              case 9:
                _context21.prev = 9;
                _context21.t0 = _context21["catch"](3);
                _context21.next = 13;
                return this.resolveGraphQLError(_context21.t0);

              case 13:
                throw _context21.sent;

              case 14:
              case "end":
                return _context21.stop();
            }
          }
        }, _callee21, this, [[3, 9]]);
      }));

      function graphQl(_x20, _x21) {
        return _graphQl.apply(this, arguments);
      }

      return graphQl;
    }()
  }, {
    key: "graphqlClientRequired",
    value: function () {
      var _graphqlClientRequired = _asyncToGenerator( /*#__PURE__*/_regenerator["default"].mark(function _callee22(parentSpan) {
        var _this6 = this;

        var creation;
        return _regenerator["default"].wrap(function _callee22$(_context22) {
          while (1) {
            switch (_context22.prev = _context22.next) {
              case 0:
                if (!this.graphqlClient) {
                  _context22.next = 2;
                  break;
                }

                return _context22.abrupt("return", this.graphqlClient);

              case 2:
                if (!this.graphqlClientCreation) {
                  _context22.next = 7;
                  break;
                }

                _context22.next = 5;
                return this.graphqlClientCreation.listen();

              case 5:
                _context22.next = 21;
                break;

              case 7:
                creation = new MulticastPromise();
                this.graphqlClientCreation = creation;
                _context22.prev = 9;
                _context22.next = 12;
                return this.context.trace('setup client', function (span) {
                  return _this6.createGraphqlClient(span);
                }, parentSpan);

              case 12:
                this.graphqlClientCreation = null;
                creation.resolve(this.graphqlClient);
                _context22.next = 21;
                break;

              case 16:
                _context22.prev = 16;
                _context22.t0 = _context22["catch"](9);
                this.graphqlClientCreation = null;
                creation.reject(_context22.t0);
                throw _context22.t0;

              case 21:
                return _context22.abrupt("return", this.graphqlClient);

              case 22:
              case "end":
                return _context22.stop();
            }
          }
        }, _callee22, this, [[9, 16]]);
      }));

      function graphqlClientRequired(_x22) {
        return _graphqlClientRequired.apply(this, arguments);
      }

      return graphqlClientRequired;
    }()
  }, {
    key: "createGraphqlClient",
    value: function () {
      var _createGraphqlClient = _asyncToGenerator( /*#__PURE__*/_regenerator["default"].mark(function _callee24(span) {
        var _this7 = this;

        var useHttp, clientConfig, wsLink, httpLink, subsOptions, subscriptionClient, detectingRedirection, tracerLink, wrapLink, isSubscription, link;
        return _regenerator["default"].wrap(function _callee24$(_context24) {
          while (1) {
            switch (_context24.prev = _context24.next) {
              case 0:
                useHttp = !this.config.data.useWebSocketForQueries;
                _context24.next = 3;
                return this.getClientConfig();

              case 3:
                clientConfig = _context24.sent;
                wsLink = null;
                httpLink = null;
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
                  console.log('[TONClient.queries]', 'WebSocket Reconnected');
                });
                detectingRedirection = false;
                subscriptionClient.onError(function () {
                  console.log('[TONClient.queries]', 'WebSocket Failed');

                  if (detectingRedirection) {
                    return;
                  }

                  _asyncToGenerator( /*#__PURE__*/_regenerator["default"].mark(function _callee23() {
                    var newConfig, configIsChanged;
                    return _regenerator["default"].wrap(function _callee23$(_context23) {
                      while (1) {
                        switch (_context23.prev = _context23.next) {
                          case 0:
                            detectingRedirection = true;
                            _context23.prev = 1;
                            _context23.next = 4;
                            return _this7.getClientConfig();

                          case 4:
                            newConfig = _context23.sent;
                            configIsChanged = newConfig.httpUrl !== clientConfig.httpUrl || newConfig.wsUrl !== clientConfig.wsUrl;

                            if (configIsChanged) {
                              console.log('[TONClient.queries]', 'Client config changed');
                              clientConfig = newConfig;
                              _this7.graphqlClientConfig = clientConfig;
                              subscriptionClient.url = newConfig.wsUrl;

                              if (wsLink) {
                                wsLink.url = newConfig.wsUrl;
                              }

                              if (httpLink) {
                                httpLink.uri = newConfig.httpUrl;
                              }
                            }

                            _context23.next = 12;
                            break;

                          case 9:
                            _context23.prev = 9;
                            _context23.t0 = _context23["catch"](1);
                            console.log('[TONClient.queries] redirection detector failed', _context23.t0);

                          case 12:
                            detectingRedirection = false;

                          case 13:
                          case "end":
                            return _context23.stop();
                        }
                      }
                    }, _callee23, null, [[1, 9]]);
                  }))();
                });

                subscriptionClient.maxConnectTimeGenerator.duration = function () {
                  return subscriptionClient.maxConnectTimeGenerator.max;
                };

                _context24.next = 14;
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

              case 14:
                tracerLink = _context24.sent;

                wrapLink = function wrapLink(link) {
                  return tracerLink.concat(link);
                };

                isSubscription = function isSubscription(_ref5) {
                  var query = _ref5.query;
                  var definition = (0, _apolloUtilities.getMainDefinition)(query);
                  return definition.kind === 'OperationDefinition' && definition.operation === 'subscription';
                };

                wsLink = new _apolloLinkWs.WebSocketLink(subscriptionClient);
                httpLink = useHttp ? new _apolloLinkHttp.HttpLink({
                  uri: clientConfig.httpUrl,
                  fetch: abortableFetch(clientConfig.fetch)
                }) : null;
                link = httpLink ? (0, _apolloLink.split)(isSubscription, wrapLink(wsLink), wrapLink(httpLink)) : wrapLink(wsLink);
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

              case 22:
              case "end":
                return _context24.stop();
            }
          }
        }, _callee24, this);
      }));

      function createGraphqlClient(_x23) {
        return _createGraphqlClient.apply(this, arguments);
      }

      return createGraphqlClient;
    }()
  }, {
    key: "close",
    value: function () {
      var _close = _asyncToGenerator( /*#__PURE__*/_regenerator["default"].mark(function _callee25() {
        var client;
        return _regenerator["default"].wrap(function _callee25$(_context25) {
          while (1) {
            switch (_context25.prev = _context25.next) {
              case 0:
                if (!this.graphqlClient) {
                  _context25.next = 6;
                  break;
                }

                client = this.graphqlClient;
                this.graphqlClient = null;
                client.stop();
                _context25.next = 6;
                return client.clearStore();

              case 6:
              case "end":
                return _context25.stop();
            }
          }
        }, _callee25, this);
      }));

      function close() {
        return _close.apply(this, arguments);
      }

      return close;
    }()
  }], [{
    key: "isNetworkError",
    value: function isNetworkError(error) {
      if (error.code === _TONClient.TONErrorCode.QUERY_FORCIBLY_ABORTED) {
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
      var _query2 = _asyncToGenerator( /*#__PURE__*/_regenerator["default"].mark(function _callee27() {
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
            _args27 = arguments;

        return _regenerator["default"].wrap(function _callee27$(_context27) {
          while (1) {
            switch (_context27.prev = _context27.next) {
              case 0:
                for (_len = _args27.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
                  args[_key] = _args27[_key];
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
                return _context27.abrupt("return", this.module.context.trace("".concat(this.collectionName, ".query"), /*#__PURE__*/function () {
                  var _ref6 = _asyncToGenerator( /*#__PURE__*/_regenerator["default"].mark(function _callee26(span) {
                    var useOperationId, c, t, ql, variables;
                    return _regenerator["default"].wrap(function _callee26$(_context26) {
                      while (1) {
                        switch (_context26.prev = _context26.next) {
                          case 0:
                            span.setTag('params', {
                              filter: filter,
                              result: result,
                              orderBy: orderBy,
                              limit: limit,
                              timeout: timeout,
                              operationId: operationId
                            });
                            _context26.t0 = operationId;

                            if (!_context26.t0) {
                              _context26.next = 6;
                              break;
                            }

                            _context26.next = 5;
                            return _this8.module.getServerInfo(span);

                          case 5:
                            _context26.t0 = _context26.sent.supportsOperationId;

                          case 6:
                            useOperationId = _context26.t0;
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

                            _context26.next = 15;
                            return _this8.module.graphqlQuery(ql, variables, span, timeout);

                          case 15:
                            _context26.t1 = c;
                            return _context26.abrupt("return", _context26.sent.data[_context26.t1]);

                          case 17:
                          case "end":
                            return _context26.stop();
                        }
                      }
                    }, _callee26);
                  }));

                  return function (_x24) {
                    return _ref6.apply(this, arguments);
                  };
                }(), parentSpan));

              case 3:
              case "end":
                return _context27.stop();
            }
          }
        }, _callee27, this);
      }));

      function query() {
        return _query2.apply(this, arguments);
      }

      return query;
    }()
  }, {
    key: "aggregate",
    value: function () {
      var _aggregate = _asyncToGenerator( /*#__PURE__*/_regenerator["default"].mark(function _callee29(params) {
        var _this9 = this;

        return _regenerator["default"].wrap(function _callee29$(_context29) {
          while (1) {
            switch (_context29.prev = _context29.next) {
              case 0:
                return _context29.abrupt("return", this.module.context.trace("".concat(this.collectionName, ".aggregate"), /*#__PURE__*/function () {
                  var _ref7 = _asyncToGenerator( /*#__PURE__*/_regenerator["default"].mark(function _callee28(span) {
                    var t, q, ql, variables;
                    return _regenerator["default"].wrap(function _callee28$(_context28) {
                      while (1) {
                        switch (_context28.prev = _context28.next) {
                          case 0:
                            span.setTag('params', {
                              filter: params.filter,
                              fields: params.fields
                            });
                            _context28.next = 3;
                            return _this9.module.getServerInfo(span);

                          case 3:
                            if (_context28.sent.supportsAggregations) {
                              _context28.next = 9;
                              break;
                            }

                            _context28.t0 = _TONClient.TONClientError;
                            _context28.next = 7;
                            return _this9.module.completeErrorData();

                          case 7:
                            _context28.t1 = _context28.sent;
                            throw _context28.t0.serverDoesntSupportAggregations.call(_context28.t0, _context28.t1);

                          case 9:
                            t = _this9.typeName;
                            q = _this9.typeName.endsWith('s') ? "aggregate".concat(t) : "aggregate".concat(t, "s");
                            ql = "\n            query ".concat(q, "(\n                $filter: ").concat(t, "Filter,\n                $fields: [FieldAggregation] \n             ) {\n                ").concat(q, "(\n                    filter: $filter, \n                    fields: $fields \n                )\n            }");
                            variables = {
                              filter: params.filter,
                              fields: params.fields
                            };
                            _context28.next = 15;
                            return _this9.module.graphqlQuery(ql, variables, span);

                          case 15:
                            _context28.t2 = q;
                            return _context28.abrupt("return", _context28.sent.data[_context28.t2]);

                          case 17:
                          case "end":
                            return _context28.stop();
                        }
                      }
                    }, _callee28);
                  }));

                  return function (_x26) {
                    return _ref7.apply(this, arguments);
                  };
                }(), params.parentSpan));

              case 1:
              case "end":
                return _context29.stop();
            }
          }
        }, _callee29, this);
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

      _asyncToGenerator( /*#__PURE__*/_regenerator["default"].mark(function _callee30() {
        var client, observable;
        return _regenerator["default"].wrap(function _callee30$(_context30) {
          while (1) {
            switch (_context30.prev = _context30.next) {
              case 0:
                _context30.prev = 0;
                _context30.next = 3;
                return _this10.module.graphqlClientRequired(span);

              case 3:
                client = _context30.sent;
                observable = client.subscribe({
                  query: query,
                  variables: {
                    filter: filter
                  }
                });
                subscription = observable.subscribe(function (message) {
                  onDocEvent('insert/update', message.data[_this10.collectionName]);
                });
                _context30.next = 12;
                break;

              case 8:
                _context30.prev = 8;
                _context30.t0 = _context30["catch"](0);
                span.log({
                  event: 'failed',
                  payload: _context30.t0
                });

                if (onError) {
                  onError(_context30.t0);
                } else {
                  console.log('TON Client subscription error', _context30.t0);
                }

              case 12:
              case "end":
                return _context30.stop();
            }
          }
        }, _callee30, null, [[0, 8]]);
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
      var _waitFor = _asyncToGenerator( /*#__PURE__*/_regenerator["default"].mark(function _callee31() {
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
            _args31 = arguments;

        return _regenerator["default"].wrap(function _callee31$(_context31) {
          while (1) {
            switch (_context31.prev = _context31.next) {
              case 0:
                for (_len3 = _args31.length, args = new Array(_len3), _key3 = 0; _key3 < _len3; _key3++) {
                  args[_key3] = _args31[_key3];
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
                _context31.next = 5;
                return this.query({
                  filter: filter,
                  result: result,
                  timeout: timeout,
                  parentSpan: parentSpan,
                  operationId: operationId
                });

              case 5:
                docs = _context31.sent;

                if (!(docs.length > 0)) {
                  _context31.next = 8;
                  break;
                }

                return _context31.abrupt("return", docs[0]);

              case 8:
                _context31.t0 = _TONClient.TONClientError;
                _context31.next = 11;
                return this.module.completeErrorData({
                  collection: this.collectionName
                });

              case 11:
                _context31.t1 = _context31.sent;
                throw _context31.t0.waitForTimeout.call(_context31.t0, _context31.t1);

              case 13:
              case "end":
                return _context31.stop();
            }
          }
        }, _callee31, this);
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy9tb2R1bGVzL1RPTlF1ZXJpZXNNb2R1bGUuanMiXSwibmFtZXMiOlsiS0VFUF9BTElWRV9USU1FT1VUIiwiTUFYX1RJTUVPVVQiLCJyZXNvbHZlUGFyYW1zIiwiYXJncyIsInJlcXVpcmVkUGFyYW1OYW1lIiwicmVzb2x2ZUFyZ3MiLCJsZW5ndGgiLCJNdWx0aWNhc3RQcm9taXNlIiwibGlzdGVuZXJzIiwib25Db21wbGV0ZSIsImxpc3RlbmVyIiwicmVzb2x2ZSIsInJlamVjdCIsInB1c2giLCJQcm9taXNlIiwidmFsdWUiLCJjb21wbGV0ZSIsImVycm9yIiwiY29tcGxldGVMaXN0ZW5lciIsImZvckVhY2giLCJ2ZXJzaW9uVG9OdW1iZXIiLCJzIiwicGFydHMiLCJzcGxpdCIsIm1hcCIsIngiLCJOdW1iZXIiLCJzbGljZSIsInJlc29sdmVTZXJ2ZXJJbmZvIiwidmVyc2lvblN0cmluZyIsInZlcnNpb24iLCJzdXBwb3J0c09wZXJhdGlvbklkIiwic3VwcG9ydHNBZ2dyZWdhdGlvbnMiLCJzdXBwb3J0c1RpbWUiLCJ0aW1lRGVsdGEiLCJhYm9ydGFibGVGZXRjaCIsImZldGNoIiwiaW5wdXQiLCJvcHRpb25zIiwicXVlcnlUaW1lb3V0IiwiZmV0Y2hPcHRpb25zIiwiY29udHJvbGxlciIsImdsb2JhbCIsIkFib3J0Q29udHJvbGxlciIsInNpZ25hbCIsInNldFRpbWVvdXQiLCJUT05DbGllbnRFcnJvciIsInF1ZXJ5Rm9yY2libHlBYm9ydGVkIiwiY29yZV92ZXJzaW9uIiwiY29uZmlnX3NlcnZlciIsInF1ZXJ5X3VybCIsImFib3J0IiwidGhlbiIsIlRPTlF1ZXJpZXNNb2R1bGUiLCJjb250ZXh0IiwiZ3JhcGhxbENsaWVudCIsImdyYXBocWxDbGllbnRDcmVhdGlvbiIsImdyYXBocWxDbGllbnRDb25maWciLCJvdmVycmlkZVdzVXJsIiwib3BlcmF0aW9uSWRQcmVmaXgiLCJEYXRlIiwibm93IiwidG9TdHJpbmciLCJpIiwiTWF0aCIsInJvdW5kIiwicmFuZG9tIiwib3BlcmF0aW9uSWRTdWZmaXgiLCJzZXJ2ZXJJbmZvIiwiY29uZmlnIiwiZ2V0TW9kdWxlIiwiVE9OQ29uZmlnTW9kdWxlIiwidHJhbnNhY3Rpb25zIiwiVE9OUXVlcmllc01vZHVsZUNvbGxlY3Rpb24iLCJtZXNzYWdlcyIsImJsb2NrcyIsImFjY291bnRzIiwiYmxvY2tzX3NpZ25hdHVyZXMiLCJodHRwVXJsIiwic291cmNlVXJsIiwicmVzcG9uc2UiLCJ0ZXh0IiwicmVzcG9uc2VUZXh0IiwicmVzcG9uc2VKc29uIiwiSlNPTiIsInBhcnNlIiwiZGF0YSIsImluZm8iLCJyZWRpcmVjdGVkIiwidXJsIiwic291cmNlTG9jYXRpb24iLCJVUkxQYXJ0cyIsImZpeFF1ZXJ5IiwiXyIsInRvTG93ZXJDYXNlIiwicmVzcG9uc2VMb2NhdGlvbiIsImdldENvbmZpZ0ZvclNlcnZlciIsInNlcnZlciIsImh0dHBQYXJ0cyIsImZpeFByb3RvY29sIiwiZml4UGF0aCIsImh0dHAiLCJ3cyIsIndzVXJsIiwiY2xpZW50UGxhdGZvcm0iLCJXZWJTb2NrZXQiLCJUT05DbGllbnQiLCJFcnJvciIsInNlcnZlcnMiLCJjbGllbnRDb25maWciLCJkZXRlY3RSZWRpcmVjdCIsImNvbnNvbGUiLCJsb2ciLCJlcnJvclN0cmluZyIsInNwYW4iLCJncmFwaHFsQ2xpZW50UmVxdWlyZWQiLCJnZXRTZXJ2ZXJJbmZvIiwic3RhcnQiLCJlbmQiLCJqc29uIiwicmVzcG9uc2VEYXRhIiwic2VydmVyVGltZSIsInRpbWUiLCJzZXJ2ZXJUaW1lRGVsdGEiLCJvcGVyYXRpb25JZHMiLCJncmFwaHFsTXV0YXRpb24iLCJwYXJlbnRTcGFuIiwicXVlcnkiLCJ1bmRlZmluZWQiLCJyZXN1bHQiLCJnZXRBY2NvdW50c0NvdW50IiwiZ2V0VHJhbnNhY3Rpb25zQ291bnQiLCJnZXRBY2NvdW50c1RvdGFsQmFsYW5jZSIsInJlcXVlc3RzIiwidHJhY2UiLCJxbCIsInZhcmlhYmxlcyIsInNldFRhZyIsIm11dGF0aW9uIiwidGltZW91dCIsImdyYXBocWxRdWVyeSIsImdyYXBoUWwiLCJjbGllbnQiLCJtdXRhdGUiLCJ0cmFjZVNwYW4iLCJuZXh0VGltZW91dCIsInN0YXJ0VGltZSIsImZvcmNlVGVybWluYXRlRXh0cmFUaW1lb3V0IiwiZm9yY2VUZXJtaW5hdGVUaW1lb3V0Iiwid2FpdEZvclRpbWVvdXQiLCJtaW4iLCJyZXNvbHZlR3JhcGhRTEVycm9yIiwicmVzb2x2ZWRFcnJvciIsImlzTmV0d29ya0Vycm9yIiwiaXNOZXR3b3JrVGltZW91dEV4cGlyZWRTaW5jZSIsInJldHJ5RGVsYXlUaW1lb3V0IiwiZ3FsRXJyIiwiZ3JhcGhRTEVycm9ycyIsImNsaWVudEVyciIsIm1lc3NhZ2UiLCJncWxFeGMiLCJleHRlbnNpb25zIiwiZXhjZXB0aW9uIiwibnVtYmVyIiwiY29kZSIsInNvdXJjZSIsImVycm9ycyIsIm5ldHdvcmtFcnJvciIsImNvbXBsZXRlRXJyb3JEYXRhIiwicXVlcnlGYWlsZWQiLCJyZXF1ZXN0IiwibGlzdGVuIiwiY3JlYXRpb24iLCJjcmVhdGVHcmFwaHFsQ2xpZW50IiwidXNlSHR0cCIsInVzZVdlYlNvY2tldEZvclF1ZXJpZXMiLCJnZXRDbGllbnRDb25maWciLCJ3c0xpbmsiLCJodHRwTGluayIsInN1YnNPcHRpb25zIiwidHJhY2VyIiwiaW5qZWN0IiwiRk9STUFUX1RFWFRfTUFQIiwic3Vic2NyaXB0aW9uQ2xpZW50IiwiU3Vic2NyaXB0aW9uQ2xpZW50IiwicmVjb25uZWN0IiwiY29ubmVjdGlvblBhcmFtcyIsImFjY2Vzc0tleSIsImhlYWRlcnMiLCJvblJlY29ubmVjdGVkIiwiZGV0ZWN0aW5nUmVkaXJlY3Rpb24iLCJvbkVycm9yIiwibmV3Q29uZmlnIiwiY29uZmlnSXNDaGFuZ2VkIiwidXJpIiwibWF4Q29ubmVjdFRpbWVHZW5lcmF0b3IiLCJkdXJhdGlvbiIsIm1heCIsInJlcSIsInJlc29sdmVkU3BhbiIsInRyYWNlckxpbmsiLCJ3cmFwTGluayIsImxpbmsiLCJjb25jYXQiLCJpc1N1YnNjcmlwdGlvbiIsImRlZmluaXRpb24iLCJraW5kIiwib3BlcmF0aW9uIiwiV2ViU29ja2V0TGluayIsIkh0dHBMaW5rIiwiQXBvbGxvQ2xpZW50IiwiY2FjaGUiLCJJbk1lbW9yeUNhY2hlIiwiZGVmYXVsdE9wdGlvbnMiLCJ3YXRjaFF1ZXJ5IiwiZmV0Y2hQb2xpY3kiLCJzdG9wIiwiY2xlYXJTdG9yZSIsIlRPTkVycm9yQ29kZSIsIlFVRVJZX0ZPUkNJQkxZX0FCT1JURUQiLCJUT05Nb2R1bGUiLCJtb2R1bGUiLCJjb2xsZWN0aW9uTmFtZSIsInR5cGVOYW1lIiwiZmlsdGVyIiwib3JkZXJCeSIsImxpbWl0Iiwib3BlcmF0aW9uSWQiLCJ1c2VPcGVyYXRpb25JZCIsImMiLCJ0IiwicGFyYW1zIiwiZmllbGRzIiwic2VydmVyRG9lc250U3VwcG9ydEFnZ3JlZ2F0aW9ucyIsInEiLCJlbmRzV2l0aCIsIm9uRG9jRXZlbnQiLCJzdGFydFNwYW4iLCJUYWdzIiwiU1BBTl9LSU5EIiwic3Vic2NyaXB0aW9uIiwib2JzZXJ2YWJsZSIsInN1YnNjcmliZSIsImV2ZW50IiwicGF5bG9hZCIsInVuc3Vic2NyaWJlIiwiZmluaXNoIiwicGFyYW1zVGltZW91dCIsImRvY3MiLCJjb2xsZWN0aW9uIiwibW9kdWxlTmFtZSJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7O0FBTUE7O0FBQ0E7O0FBQ0E7O0FBQ0E7O0FBQ0E7O0FBQ0E7O0FBQ0E7O0FBQ0E7O0FBQ0E7O0FBQ0E7O0FBWUE7O0FBRUE7O0FBQ0E7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUF3QkE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsSUFBTUEsa0JBQWtCLEdBQUcsSUFBSSxLQUEvQjtBQUVPLElBQU1DLFdBQVcsR0FBRyxVQUFwQjs7O0FBRVAsU0FBU0MsYUFBVCxDQUEwQkMsSUFBMUIsRUFBdUNDLGlCQUF2QyxFQUFrRUMsV0FBbEUsRUFBMkY7QUFDdkYsU0FBUUYsSUFBSSxDQUFDRyxNQUFMLEtBQWdCLENBQWpCLElBQXdCRixpQkFBaUIsSUFBSUQsSUFBSSxDQUFDLENBQUQsQ0FBakQsR0FBd0RBLElBQUksQ0FBQyxDQUFELENBQTVELEdBQWtFRSxXQUFXLEVBQXBGO0FBQ0g7O0lBT0tFLGdCO0FBSUYsOEJBQWM7QUFBQTs7QUFBQTs7QUFBQTs7QUFDVixTQUFLQyxTQUFMLEdBQWlCLEVBQWpCO0FBQ0EsU0FBS0MsVUFBTCxHQUFrQixJQUFsQjtBQUNIOzs7OzZCQUV3QjtBQUNyQixVQUFNQyxRQUFrQyxHQUFHO0FBQ3ZDQyxRQUFBQSxPQUFPLEVBQUUsbUJBQU0sQ0FDZCxDQUZzQztBQUd2Q0MsUUFBQUEsTUFBTSxFQUFFLGtCQUFNLENBQ2I7QUFKc0MsT0FBM0M7QUFNQSxXQUFLSixTQUFMLENBQWVLLElBQWYsQ0FBb0JILFFBQXBCO0FBQ0EsYUFBTyxJQUFJSSxPQUFKLENBQVksVUFBQ0gsT0FBRCxFQUFVQyxNQUFWLEVBQXFCO0FBQ3BDRixRQUFBQSxRQUFRLENBQUNDLE9BQVQsR0FBbUJBLE9BQW5CO0FBQ0FELFFBQUFBLFFBQVEsQ0FBQ0UsTUFBVCxHQUFrQkEsTUFBbEI7QUFDSCxPQUhNLENBQVA7QUFJSDs7OzRCQUVPRyxLLEVBQWM7QUFDbEIsV0FBS0MsUUFBTCxDQUFjLFVBQUFOLFFBQVE7QUFBQSxlQUFJQSxRQUFRLENBQUNDLE9BQVQsQ0FBaUJJLEtBQWpCLENBQUo7QUFBQSxPQUF0QjtBQUNIOzs7MkJBRU1FLEssRUFBYztBQUNqQixXQUFLRCxRQUFMLENBQWMsVUFBQU4sUUFBUTtBQUFBLGVBQUlBLFFBQVEsQ0FBQ0UsTUFBVCxDQUFnQkssS0FBaEIsQ0FBSjtBQUFBLE9BQXRCO0FBQ0g7Ozs2QkFFUUMsZ0IsRUFBZ0U7QUFBQSxVQUM3RFYsU0FENkQsR0FDL0MsSUFEK0MsQ0FDN0RBLFNBRDZEO0FBRXJFLFdBQUtBLFNBQUwsR0FBaUIsRUFBakI7O0FBQ0EsVUFBSSxLQUFLQyxVQUFULEVBQXFCO0FBQ2pCLGFBQUtBLFVBQUw7QUFDSDs7QUFDREQsTUFBQUEsU0FBUyxDQUFDVyxPQUFWLENBQWtCLFVBQUFULFFBQVE7QUFBQSxlQUFJUSxnQkFBZ0IsQ0FBQ1IsUUFBRCxDQUFwQjtBQUFBLE9BQTFCO0FBQ0g7Ozs7OztBQUdMLFNBQVNVLGVBQVQsQ0FBeUJDLENBQXpCLEVBQTRDO0FBQ3hDLE1BQU1DLEtBQUssR0FBRyxVQUFHRCxDQUFDLElBQUksRUFBUixFQUFhRSxLQUFiLENBQW1CLEdBQW5CLEVBQ1RDLEdBRFMsQ0FDTCxVQUFBQyxDQUFDO0FBQUEsV0FBSUMsTUFBTSxDQUFDRCxDQUFELENBQVY7QUFBQSxHQURJLEVBRVRFLEtBRlMsQ0FFSCxDQUZHLEVBRUEsQ0FGQSxDQUFkOztBQUdBLFNBQU9MLEtBQUssQ0FBQ2hCLE1BQU4sR0FBZSxDQUF0QixFQUF5QjtBQUNyQmdCLElBQUFBLEtBQUssQ0FBQ1QsSUFBTixDQUFXLENBQVg7QUFDSDs7QUFDRCxTQUFPUyxLQUFLLENBQUMsQ0FBRCxDQUFMLEdBQVcsT0FBWCxHQUFxQkEsS0FBSyxDQUFDLENBQUQsQ0FBTCxHQUFXLElBQWhDLEdBQXVDQSxLQUFLLENBQUMsQ0FBRCxDQUFuRDtBQUNIOztBQUVELFNBQVNNLGlCQUFULENBQTJCQyxhQUEzQixFQUF3RjtBQUNwRixNQUFNQyxPQUFPLEdBQUdWLGVBQWUsQ0FBQ1MsYUFBYSxJQUFJLFFBQWxCLENBQS9CO0FBQ0EsU0FBTztBQUNIQyxJQUFBQSxPQUFPLEVBQVBBLE9BREc7QUFFSEMsSUFBQUEsbUJBQW1CLEVBQUVELE9BQU8sR0FBRyxLQUY1QjtBQUdIRSxJQUFBQSxvQkFBb0IsRUFBRUYsT0FBTyxJQUFJLEtBSDlCO0FBSUhHLElBQUFBLFlBQVksRUFBRUgsT0FBTyxJQUFJLEtBSnRCO0FBS0hJLElBQUFBLFNBQVMsRUFBRTtBQUxSLEdBQVA7QUFPSDs7QUFFRCxTQUFTQyxjQUFULENBQXdCQyxLQUF4QixFQUErQjtBQUMzQixTQUFPLFVBQUNDLEtBQUQsRUFBUUMsT0FBUixFQUFvQjtBQUN2QixXQUFPLElBQUl4QixPQUFKLENBQVksVUFBQ0gsT0FBRCxFQUFVQyxNQUFWLEVBQXFCO0FBQ3BDLFVBQU0yQixZQUF1QyxHQUFHRCxPQUFPLENBQUNDLFlBQXhEO0FBQ0EsVUFBSUMsWUFBWSxHQUFHRixPQUFuQjs7QUFDQSxVQUFJQyxZQUFKLEVBQWtCO0FBQ2QsWUFBTUUsVUFBVSxHQUFHQyxNQUFNLENBQUNDLGVBQVAsR0FBeUIsSUFBSUQsTUFBTSxDQUFDQyxlQUFYLEVBQXpCLEdBQXdELElBQTNFOztBQUNBLFlBQUlGLFVBQUosRUFBZ0I7QUFDWkQsVUFBQUEsWUFBWSxtQ0FDTEYsT0FESztBQUVSTSxZQUFBQSxNQUFNLEVBQUVILFVBQVUsQ0FBQ0c7QUFGWCxZQUFaO0FBSUg7O0FBQ0RDLFFBQUFBLFVBQVUsQ0FBQyxZQUFNO0FBQ2JqQyxVQUFBQSxNQUFNLENBQUNrQywwQkFBZUMsb0JBQWYsQ0FBb0M7QUFDdkNDLFlBQUFBLFlBQVksRUFBRSxFQUR5QjtBQUV2Q0MsWUFBQUEsYUFBYSxFQUFFLEVBRndCO0FBR3ZDQyxZQUFBQSxTQUFTLEVBQUU7QUFINEIsV0FBcEMsQ0FBRCxDQUFOOztBQUtBLGNBQUlULFVBQUosRUFBZ0I7QUFDWkEsWUFBQUEsVUFBVSxDQUFDVSxLQUFYO0FBQ0g7QUFDSixTQVRTLEVBU1BaLFlBVE8sQ0FBVjtBQVVIOztBQUNESCxNQUFBQSxLQUFLLENBQUNDLEtBQUQsRUFBUUcsWUFBUixDQUFMLENBQTJCWSxJQUEzQixDQUFnQ3pDLE9BQWhDLEVBQXlDQyxNQUF6QztBQUNILEtBdkJNLENBQVA7QUF3QkgsR0F6QkQ7QUEwQkg7O0lBRW9CeUMsZ0I7Ozs7O0FBa0JqQiw0QkFBWUMsT0FBWixFQUF1QztBQUFBOztBQUFBOztBQUNuQyw4QkFBTUEsT0FBTjs7QUFEbUM7O0FBQUE7O0FBQUE7O0FBQUE7O0FBQUE7O0FBQUE7O0FBQUE7O0FBQUE7O0FBQUE7O0FBQUE7O0FBQUE7O0FBQUE7O0FBQUE7O0FBRW5DLFVBQUtDLGFBQUwsR0FBcUIsSUFBckI7QUFDQSxVQUFLQyxxQkFBTCxHQUE2QixJQUE3QjtBQUNBLFVBQUtDLG1CQUFMLEdBQTJCLElBQTNCO0FBQ0EsVUFBS0MsYUFBTCxHQUFxQixJQUFyQjtBQUNBLFVBQUtDLGlCQUFMLEdBQXlCLENBQUNDLElBQUksQ0FBQ0MsR0FBTCxLQUFhLEtBQWQsRUFBcUJDLFFBQXJCLENBQThCLEVBQTlCLENBQXpCOztBQUNBLFNBQUssSUFBSUMsQ0FBQyxHQUFHLENBQWIsRUFBZ0JBLENBQUMsR0FBRyxFQUFwQixFQUF3QkEsQ0FBQyxJQUFJLENBQTdCLEVBQWdDO0FBQzVCLFlBQUtKLGlCQUFMLGFBQ08sTUFBS0EsaUJBRFosU0FDZ0NLLElBQUksQ0FBQ0MsS0FBTCxDQUFXRCxJQUFJLENBQUNFLE1BQUwsS0FBZ0IsR0FBM0IsRUFDdkJKLFFBRHVCLENBQ2QsRUFEYyxDQURoQztBQUdIOztBQUNELFVBQUtLLGlCQUFMLEdBQXlCLENBQXpCO0FBQ0EsVUFBS0MsVUFBTCxHQUFrQnhDLGlCQUFpQixFQUFuQztBQWJtQztBQWN0Qzs7Ozs7Ozs7OztBQUdHLHFCQUFLeUMsTUFBTCxHQUFjLEtBQUtmLE9BQUwsQ0FBYWdCLFNBQWIsQ0FBdUJDLDJCQUF2QixDQUFkO0FBQ0EscUJBQUtDLFlBQUwsR0FBb0IsSUFBSUMsMEJBQUosQ0FBK0IsSUFBL0IsRUFBcUMsY0FBckMsRUFBcUQsYUFBckQsQ0FBcEI7QUFDQSxxQkFBS0MsUUFBTCxHQUFnQixJQUFJRCwwQkFBSixDQUErQixJQUEvQixFQUFxQyxVQUFyQyxFQUFpRCxTQUFqRCxDQUFoQjtBQUNBLHFCQUFLRSxNQUFMLEdBQWMsSUFBSUYsMEJBQUosQ0FBK0IsSUFBL0IsRUFBcUMsUUFBckMsRUFBK0MsT0FBL0MsQ0FBZDtBQUNBLHFCQUFLRyxRQUFMLEdBQWdCLElBQUlILDBCQUFKLENBQStCLElBQS9CLEVBQXFDLFVBQXJDLEVBQWlELFNBQWpELENBQWhCO0FBQ0EscUJBQUtJLGlCQUFMLEdBQ0ksSUFBSUosMEJBQUosQ0FBK0IsSUFBL0IsRUFBcUMsbUJBQXJDLEVBQTBELGlCQUExRCxDQURKOzs7Ozs7Ozs7Ozs7Ozs7Ozs7a0NBSWtCO0FBQUE7O0FBQ2xCLGFBQU8sK0JBQUtoQixtQkFBTCxnRkFBMEJxQixPQUExQixLQUFxQyxFQUE1QztBQUNIOzs7OzJHQUVvQjFDLEssRUFBWTJDLFM7Ozs7Ozs7dUJBQ04zQyxLQUFLLENBQUMyQyxTQUFELEM7OztBQUF0QkMsZ0JBQUFBLFE7Ozt1QkFFeUJBLFFBQVEsQ0FBQ0MsSUFBVCxFOzs7QUFBckJDLGdCQUFBQSxZO0FBQ0FDLGdCQUFBQSxZLEdBQWVDLElBQUksQ0FBQ0MsS0FBTCxDQUFXSCxZQUFYLEM7QUFDckIscUJBQUtkLFVBQUwsR0FBa0J4QyxpQkFBaUIsQ0FBQ3VELFlBQVksQ0FBQ0csSUFBYixDQUFrQkMsSUFBbEIsQ0FBdUJ6RCxPQUF4QixDQUFuQzs7Ozs7Ozs7O3NCQUdBa0QsUUFBUSxDQUFDUSxVQUFULEtBQXdCLEk7Ozs7O2tEQUNqQlIsUUFBUSxDQUFDUyxHOzs7c0JBRWhCVCxRQUFRLENBQUNRLFVBQVQsS0FBd0IsSzs7Ozs7a0RBQ2pCLEU7OztBQUVMRSxnQkFBQUEsYyxHQUFpQkMsMEJBQVNOLEtBQVQsQ0FBZU4sU0FBZixFQUNsQmEsUUFEa0IsQ0FDVCxVQUFBQyxDQUFDO0FBQUEseUJBQUksRUFBSjtBQUFBLGlCQURRLEVBRWxCL0IsUUFGa0IsR0FHbEJnQyxXQUhrQixFO0FBSWpCQyxnQkFBQUEsZ0IsR0FBbUJKLDBCQUFTTixLQUFULENBQWVMLFFBQVEsQ0FBQ1MsR0FBeEIsRUFDcEJHLFFBRG9CLENBQ1gsVUFBQUMsQ0FBQztBQUFBLHlCQUFJLEVBQUo7QUFBQSxpQkFEVSxFQUVwQi9CLFFBRm9CLEdBR3BCZ0MsV0FIb0IsRTtrREFJbEJDLGdCQUFnQixLQUFLTCxjQUFyQixHQUFzQ1YsUUFBUSxDQUFDUyxHQUEvQyxHQUFxRCxFOzs7Ozs7Ozs7Ozs7Ozs7Ozs7OzsyQ0FXbkRPLGtCOzs7Ozs7QUFBQUEsZ0JBQUFBLGtCLGdDQUFtQkMsTSxFQUFxQztBQUM3RCxzQkFBTUMsU0FBUyxHQUFHUCwwQkFBU04sS0FBVCxDQUFlWSxNQUFmLEVBQ2JFLFdBRGEsQ0FDRCxVQUFBMUUsQ0FBQztBQUFBLDJCQUFLQSxDQUFDLEtBQUssU0FBTixHQUFrQkEsQ0FBbEIsR0FBc0IsVUFBM0I7QUFBQSxtQkFEQSxFQUViMkUsT0FGYSxDQUVMLFVBQUEzRSxDQUFDO0FBQUEscUNBQU9BLENBQVA7QUFBQSxtQkFGSSxDQUFsQjs7QUFHQSxzQkFBTTRFLElBQUksR0FBR0gsU0FBUyxDQUFDcEMsUUFBVixFQUFiO0FBQ0Esc0JBQU13QyxFQUFFLEdBQUdKLFNBQVMsQ0FDZkMsV0FETSxDQUNNLFVBQUExRSxDQUFDO0FBQUEsMkJBQUtBLENBQUMsS0FBSyxTQUFOLEdBQWtCLE9BQWxCLEdBQTRCLFFBQWpDO0FBQUEsbUJBRFAsRUFFTnFDLFFBRk0sRUFBWDtBQUdBLHlCQUFPO0FBQ0hnQixvQkFBQUEsT0FBTyxFQUFFdUIsSUFETjtBQUVIRSxvQkFBQUEsS0FBSyxFQUFFRCxFQUZKO0FBR0hsRSxvQkFBQUEsS0FBSyxFQUFFb0UsY0FBYyxDQUFDcEUsS0FIbkI7QUFJSHFFLG9CQUFBQSxTQUFTLEVBQUVELGNBQWMsQ0FBQ0M7QUFKdkIsbUJBQVA7QUFNSCxpQjs7QUFyQktwQyxnQkFBQUEsTSxHQUFTLEtBQUtBLE07QUFDZG1DLGdCQUFBQSxjLEdBQWlCRSxxQkFBVUYsYzs7b0JBQzVCQSxjOzs7OztzQkFDS0csS0FBSyxDQUFDLGdDQUFELEM7OztBQUVUdkUsZ0JBQUFBLEssR0FBUW9FLGNBQWMsQ0FBQ3BFLEs7dURBa0JSaUMsTUFBTSxDQUFDaUIsSUFBUCxDQUFZc0IsTzs7Ozs7Ozs7Ozs7QUFBdEJYLGdCQUFBQSxNO0FBQ0RZLGdCQUFBQSxZLEdBQWViLGtCQUFrQixDQUFDQyxNQUFELEM7Ozt1QkFHVixLQUFLYSxjQUFMLENBQ3JCMUUsS0FEcUIsWUFFbEJ5RSxZQUFZLENBQUMvQixPQUZLLG9DOzs7QUFBbkJVLGdCQUFBQSxVOztBQUlOLG9CQUFJQSxVQUFVLEtBQUssRUFBbkIsRUFBdUI7QUFDYlUsa0JBQUFBLFNBRGEsR0FDRFAsMEJBQVNOLEtBQVQsQ0FBZUcsVUFBZixFQUNiSSxRQURhLENBQ0osVUFBQUMsQ0FBQztBQUFBLDJCQUFJLEVBQUo7QUFBQSxtQkFERyxDQURDO0FBR25CZ0Isa0JBQUFBLFlBQVksQ0FBQy9CLE9BQWIsR0FBdUJvQixTQUFTLENBQUNwQyxRQUFWLEVBQXZCO0FBQ0ErQyxrQkFBQUEsWUFBWSxDQUFDTixLQUFiLEdBQXFCTCxTQUFTLENBQ3pCQyxXQURnQixDQUNKLFVBQUExRSxDQUFDO0FBQUEsMkJBQUtBLENBQUMsS0FBSyxTQUFOLEdBQWtCLE9BQWxCLEdBQTRCLFFBQWpDO0FBQUEsbUJBREcsRUFFaEJxQyxRQUZnQixFQUFyQjtBQUdIOztrREFDTStDLFk7Ozs7O0FBRVBFLGdCQUFBQSxPQUFPLENBQUNDLEdBQVIsMENBQTZDZixNQUE3QyxnQkFBK0Q7QUFDM0RZLGtCQUFBQSxZQUFZLEVBQUU7QUFDVi9CLG9CQUFBQSxPQUFPLEVBQUUrQixZQUFZLENBQUMvQixPQURaO0FBRVZ5QixvQkFBQUEsS0FBSyxFQUFFTSxZQUFZLENBQUNOO0FBRlYsbUJBRDZDO0FBSzNEVSxrQkFBQUEsV0FBVyxFQUFFLGFBQU1uRCxRQUFOLEVBTDhDO0FBTTNEN0Msa0JBQUFBLEtBQUs7QUFOc0QsaUJBQS9EOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7a0RBVUQrRSxrQkFBa0IsQ0FBQzNCLE1BQU0sQ0FBQ2lCLElBQVAsQ0FBWXNCLE9BQVosQ0FBb0IsQ0FBcEIsQ0FBRCxDOzs7Ozs7Ozs7Ozs7Ozs7Ozs7OzBHQUdUTSxJOzs7Ozs7dUJBQ1YsS0FBS0MscUJBQUwsQ0FBMkJELElBQTNCLEM7OztrREFDQyxLQUFLOUMsVTs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs0R0FHTThDLEk7Ozs7Ozs7dUJBQ08sS0FBS0UsYUFBTCxDQUFtQkYsSUFBbkIsQzs7O0FBQW5COUMsZ0JBQUFBLFU7QUFDQXlDLGdCQUFBQSxZLEdBQWUsS0FBS3BELG1COztzQkFDdEJvRCxZQUFZLElBQUl6QyxVQUFVLENBQUNuQyxZQUEzQixJQUEyQ21DLFVBQVUsQ0FBQ2xDLFNBQVgsS0FBeUIsSTs7Ozs7O0FBRTFEbUYsZ0JBQUFBLEssR0FBUXpELElBQUksQ0FBQ0MsR0FBTCxFOzt1QkFDU2dELFlBQVksQ0FBQ3pFLEtBQWIsV0FBc0J5RSxZQUFZLENBQUMvQixPQUFuQyxpQzs7O0FBQWpCRSxnQkFBQUEsUTtBQUNBc0MsZ0JBQUFBLEcsR0FBTTFELElBQUksQ0FBQ0MsR0FBTCxFOzt1QkFDZW1CLFFBQVEsQ0FBQ3VDLElBQVQsRTs7O0FBQXJCQyxnQkFBQUEsWTtBQUNBQyxnQkFBQUEsVSxHQUFhRCxZQUFZLENBQUNsQyxJQUFiLENBQWtCQyxJQUFsQixDQUF1Qm1DLEk7QUFDMUN0RCxnQkFBQUEsVUFBVSxDQUFDbEMsU0FBWCxHQUF1QjhCLElBQUksQ0FBQ0MsS0FBTCxDQUFXd0QsVUFBVSxJQUFJSixLQUFLLEdBQUcsQ0FBQ0MsR0FBRyxHQUFHRCxLQUFQLElBQWdCLENBQTVCLENBQXJCLENBQXZCOzs7Ozs7O0FBRUFOLGdCQUFBQSxPQUFPLENBQUNDLEdBQVIsQ0FBWSxLQUFaOzs7a0RBR0Q1QyxVQUFVLENBQUNsQyxTQUFYLElBQXdCLEM7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7c0dBR25CZ0YsSTs7Ozs7Ozt1QkFDWSxLQUFLUyxlQUFMLENBQXFCVCxJQUFyQixDOzs7QUFBbEJoRixnQkFBQUEsUztrREFDQzBCLElBQUksQ0FBQ0MsR0FBTCxLQUFhM0IsUzs7Ozs7Ozs7Ozs7Ozs7Ozs7OzBDQUdGO0FBQ2xCLFVBQUksS0FBS2tDLFVBQVQsRUFBcUI7QUFDakIsYUFBS0EsVUFBTCxDQUFnQmxDLFNBQWhCLEdBQTRCLElBQTVCO0FBQ0g7QUFDSjs7OzBDQUU2QjtBQUMxQixXQUFLaUMsaUJBQUwsSUFBMEIsQ0FBMUI7QUFDQSx1QkFBVSxLQUFLUixpQkFBZixTQUFtQyxLQUFLUSxpQkFBTCxDQUF1QkwsUUFBdkIsQ0FBZ0MsRUFBaEMsQ0FBbkM7QUFDSDs7Ozs2R0FFc0I4RCxZOzs7OztzQkFDZkEsWUFBWSxDQUFDdEgsTUFBYixLQUF3QixDOzs7Ozs7Ozs7dUJBR2hCLEtBQUs4RyxhQUFMLEU7OzttQ0FBc0JyRixtQjs7Ozs7Ozs7O3VCQUc1QixLQUFLOEYsZUFBTCx1SUFFRTtBQUNKRCxrQkFBQUEsWUFBWSxFQUFaQTtBQURJLGlCQUZGLEM7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7NkdBT2FFLFU7Ozs7Ozs7dUJBQ0UsS0FBS0MsS0FBTCxDQUFXLHlCQUFYLEVBQXNDQyxTQUF0QyxFQUFpREYsVUFBakQsQzs7O0FBQWZHLGdCQUFBQSxNO2tEQUNDQSxNQUFNLENBQUMzQyxJQUFQLENBQVk0QyxnQjs7Ozs7Ozs7Ozs7Ozs7Ozs7OztpSEFHSUosVTs7Ozs7Ozt1QkFDRixLQUFLQyxLQUFMLENBQVcsNkJBQVgsRUFBMENDLFNBQTFDLEVBQXFERixVQUFyRCxDOzs7QUFBZkcsZ0JBQUFBLE07a0RBQ0NBLE1BQU0sQ0FBQzNDLElBQVAsQ0FBWTZDLG9COzs7Ozs7Ozs7Ozs7Ozs7Ozs7O3FIQUdPTCxVOzs7Ozs7O3VCQUNMLEtBQUtDLEtBQUwsQ0FBVyxnQ0FBWCxFQUE2Q0MsU0FBN0MsRUFBd0RGLFVBQXhELEM7OztBQUFmRyxnQkFBQUEsTTttREFDQ0EsTUFBTSxDQUFDM0MsSUFBUCxDQUFZOEMsdUI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7MEdBR0pDLFEsRUFBcUJQLFU7Ozs7Ozs7bURBQzdCLEtBQUt4RSxPQUFMLENBQWFnRixLQUFiLENBQW1CLHNCQUFuQjtBQUFBLDBGQUEyQyxtQkFBT3BCLElBQVA7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLCtEQUN2QyxNQUFJLENBQUNXLGVBQUwsb0hBRUg7QUFDQVEsOEJBQUFBLFFBQVEsRUFBUkE7QUFEQSw2QkFGRyxFQUlKbkIsSUFKSSxDQUR1Qzs7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxtQkFBM0M7O0FBQUE7QUFBQTtBQUFBO0FBQUEscUJBTUpZLFVBTkksQzs7Ozs7Ozs7Ozs7Ozs7Ozs7OztzR0FVUFMsRTs7Ozs7Ozs7OztBQUNBQyxnQkFBQUEsUyxpRUFBK0IsRTtBQUMvQlYsZ0JBQUFBLFU7bURBRU8sS0FBS3hFLE9BQUwsQ0FBYWdGLEtBQWIsQ0FBbUIsa0JBQW5CO0FBQUEsMkZBQXVDLG1CQUFPcEIsSUFBUDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQzFDQSw0QkFBQUEsSUFBSSxDQUFDdUIsTUFBTCxDQUFZLFFBQVosRUFBc0I7QUFDbEJDLDhCQUFBQSxRQUFRLEVBQUVILEVBRFE7QUFFbEJDLDhCQUFBQSxTQUFTLEVBQVRBO0FBRmtCLDZCQUF0QjtBQUQwQywrREFLbkMsTUFBSSxDQUFDWCxlQUFMLENBQXFCVSxFQUFyQixFQUF5QkMsU0FBekIsRUFBb0N0QixJQUFwQyxDQUxtQzs7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxtQkFBdkM7O0FBQUE7QUFBQTtBQUFBO0FBQUEscUJBTUpZLFVBTkksQzs7Ozs7Ozs7Ozs7Ozs7Ozs7OzttR0FVUFMsRTs7Ozs7Ozs7Ozs7QUFDQUMsZ0JBQUFBLFMsaUVBQStCLEU7QUFDL0JWLGdCQUFBQSxVO0FBQ0FhLGdCQUFBQSxPO21EQUVPLEtBQUtyRixPQUFMLENBQWFnRixLQUFiLENBQW1CLGVBQW5CO0FBQUEsMkZBQW9DLG1CQUFPcEIsSUFBUDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQ3ZDQSw0QkFBQUEsSUFBSSxDQUFDdUIsTUFBTCxDQUFZLFFBQVosRUFBc0I7QUFDbEJWLDhCQUFBQSxLQUFLLEVBQUVRLEVBRFc7QUFFbEJDLDhCQUFBQSxTQUFTLEVBQVRBO0FBRmtCLDZCQUF0QjtBQUR1QywrREFLaEMsTUFBSSxDQUFDSSxZQUFMLENBQWtCTCxFQUFsQixFQUFzQkMsU0FBdEIsRUFBaUN0QixJQUFqQyxFQUF1Q3lCLE9BQXZDLENBTGdDOztBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLG1CQUFwQzs7QUFBQTtBQUFBO0FBQUE7QUFBQSxxQkFNSmIsVUFOSSxDOzs7Ozs7Ozs7Ozs7Ozs7Ozs7OzZHQVNXUyxFOzs7Ozs7Ozs7QUFBWUMsZ0JBQUFBLFMsaUVBQStCLEU7QUFBSXRCLGdCQUFBQSxJO0FBQzNEd0IsZ0JBQUFBLFEsR0FBVyw0QkFBSSxDQUFDSCxFQUFELENBQUosQzttREFDVixLQUFLTSxPQUFMLENBQWEsVUFBQ0MsTUFBRDtBQUFBLHlCQUFZQSxNQUFNLENBQUNDLE1BQVAsQ0FBYztBQUMxQ0wsb0JBQUFBLFFBQVEsRUFBUkEsUUFEMEM7QUFFMUNGLG9CQUFBQSxTQUFTLEVBQVRBLFNBRjBDO0FBRzFDbEYsb0JBQUFBLE9BQU8sRUFBRTtBQUNMMEYsc0JBQUFBLFNBQVMsRUFBRTlCO0FBRE47QUFIaUMsbUJBQWQsQ0FBWjtBQUFBLGlCQUFiLEM7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7MEdBd0JQcUIsRTs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUNBQyxnQkFBQUEsUyxpRUFBK0IsRTtBQUMvQnRCLGdCQUFBQSxJO0FBQ0F5QixnQkFBQUEsTztBQUVNWixnQkFBQUEsSyxHQUFRLDRCQUFJLENBQUNRLEVBQUQsQ0FBSixDO0FBQ1ZVLGdCQUFBQSxXLEdBQWMsRztBQUNaQyxnQkFBQUEsUyxHQUFZdEYsSUFBSSxDQUFDQyxHQUFMLEU7QUFDZHNGLGdCQUFBQSwwQixHQUE2QixJO0FBQzNCQyxnQkFBQUEscUIsR0FBd0JULE9BQU8sSUFBSSxLQUFLdEUsTUFBTCxDQUFZZ0YsY0FBWixFOzs7cUJBQ2xDLEk7Ozs7Ozs7dUJBRXNCLEtBQUtsQyxxQkFBTCxDQUEyQkQsSUFBM0IsQzs7O0FBQWY0QixnQkFBQUEsTTtBQUNBeEYsZ0JBQUFBLE8sR0FBZTtBQUNqQjBGLGtCQUFBQSxTQUFTLEVBQUU5QixJQURNO0FBRWpCMUUsa0JBQUFBLFlBQVksRUFBRTtBQUNWRCxvQkFBQUEsWUFBWSxFQUFFeUIsSUFBSSxDQUFDc0YsR0FBTCxDQUNWRixxQkFBcUIsR0FBR0QsMEJBRGQsRUFFVmxKLFdBRlU7QUFESjtBQUZHLGlCOzt1QkFTUjZJLE1BQU0sQ0FBQ2YsS0FBUCxDQUFhO0FBQ3RCQSxrQkFBQUEsS0FBSyxFQUFMQSxLQURzQjtBQUV0QlMsa0JBQUFBLFNBQVMsRUFBVEEsU0FGc0I7QUFHdEJsRixrQkFBQUEsT0FBTyxFQUFQQTtBQUhzQixpQkFBYixDOzs7Ozs7Ozs7dUJBTWEsS0FBS2lHLG1CQUFMLGU7OztBQUF0QkMsZ0JBQUFBLGE7O3NCQUNBbkcsZ0JBQWdCLENBQUNvRyxjQUFqQixDQUFnQ0QsYUFBaEMsS0FDRyxDQUFDLEtBQUtuRixNQUFMLENBQVlxRiw0QkFBWixDQUF5Q1IsU0FBekMsQzs7Ozs7Ozs7Ozs7QUFDSiwwQkFBQSxNQUFJLENBQUM3RSxNQUFMLENBQVkyQyxHQUFaLENBQWdCd0MsYUFBaEI7O0FBQ01HLDBCQUFBQSxpQixHQUFvQlYsVzs7aUNBQ3BCLElBQUluSSxPQUFKLENBQVksVUFBQUgsT0FBTztBQUFBLG1DQUFJa0MsVUFBVSxDQUFDbEMsT0FBRCxFQUFVZ0osaUJBQVYsQ0FBZDtBQUFBLDJCQUFuQixDOzs7QUFDTiw4QkFBSVYsV0FBVyxHQUFHLElBQWxCLEVBQXdCO0FBQ3BCQSw0QkFBQUEsV0FBVyxJQUFJLENBQWY7QUFDSDs7QUFDRCw4QkFBSUUsMEJBQTBCLEdBQUcsTUFBSSxDQUFDOUUsTUFBTCxDQUFZZ0YsY0FBWixFQUFqQyxFQUErRDtBQUMzREYsNEJBQUFBLDBCQUEwQixJQUFJLElBQTlCO0FBQ0g7Ozs7Ozs7Ozs7Ozs7OztzQkFFS0ssYTs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7aUhBTUl2SSxLOzs7Ozs7QUFDaEIySSxnQkFBQUEsTSxHQUFTM0ksS0FBSyxDQUFDNEksYUFBTixJQUF1QjVJLEtBQUssQ0FBQzRJLGFBQU4sQ0FBb0IsQ0FBcEIsQzs7cUJBQ2xDRCxNOzs7OztBQUNNRSxnQkFBQUEsUyxHQUFZLElBQUluRCxLQUFKLENBQVVpRCxNQUFNLENBQUNHLE9BQWpCLEM7QUFDWkMsZ0JBQUFBLE0sR0FBVUosTUFBTSxDQUFDSyxVQUFQLElBQXFCTCxNQUFNLENBQUNLLFVBQVAsQ0FBa0JDLFNBQXhDLElBQXNELEU7QUFDcEVKLGdCQUFBQSxTQUFELENBQWlCSyxNQUFqQixHQUEwQkgsTUFBTSxDQUFDSSxJQUFQLElBQWUsQ0FBekM7QUFDQ04sZ0JBQUFBLFNBQUQsQ0FBaUJNLElBQWpCLEdBQXdCSixNQUFNLENBQUNJLElBQVAsSUFBZSxDQUF2QztBQUNDTixnQkFBQUEsU0FBRCxDQUFpQk8sTUFBakIsR0FBMEJMLE1BQU0sQ0FBQ0ssTUFBUCxJQUFpQixRQUEzQzttREFDT1AsUzs7O0FBRUxRLGdCQUFBQSxNLEdBQVNySixLQUFLLElBQ2JBLEtBQUssQ0FBQ3NKLFlBREUsSUFFUnRKLEtBQUssQ0FBQ3NKLFlBQU4sQ0FBbUJ0QyxNQUZYLElBR1JoSCxLQUFLLENBQUNzSixZQUFOLENBQW1CdEMsTUFBbkIsQ0FBMEJxQyxNOztxQkFDN0JBLE07Ozs7O2dDQUNPeEgseUI7Z0NBQTJCd0gsTTs7dUJBQWMsS0FBS0UsaUJBQUwsRTs7OztpRUFBMUJDLFc7OzttREFFbkJ4SixLOzs7Ozs7Ozs7Ozs7Ozs7Ozs7O3FHQUdHeUosTyxFQUFpRHhELEk7Ozs7Ozs7dUJBQ3RDLEtBQUtDLHFCQUFMLENBQTJCRCxJQUEzQixDOzs7QUFBZjRCLGdCQUFBQSxNOzs7dUJBRVc0QixPQUFPLENBQUM1QixNQUFELEM7Ozs7Ozs7Ozt1QkFFUixLQUFLUyxtQkFBTCxlOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O21IQUlRekIsVTs7Ozs7Ozs7cUJBQ3BCLEtBQUt2RSxhOzs7OzttREFDRSxLQUFLQSxhOzs7cUJBRVosS0FBS0MscUI7Ozs7Ozt1QkFDQyxLQUFLQSxxQkFBTCxDQUEyQm1ILE1BQTNCLEU7Ozs7Ozs7QUFFQUMsZ0JBQUFBLFEsR0FBVyxJQUFJckssZ0JBQUosRTtBQUNqQixxQkFBS2lELHFCQUFMLEdBQTZCb0gsUUFBN0I7Ozt1QkFFVSxLQUFLdEgsT0FBTCxDQUFhZ0YsS0FBYixDQUFtQixjQUFuQixFQUFtQyxVQUFDcEIsSUFBRCxFQUFVO0FBQy9DLHlCQUFPLE1BQUksQ0FBQzJELG1CQUFMLENBQXlCM0QsSUFBekIsQ0FBUDtBQUNILGlCQUZLLEVBRUhZLFVBRkcsQzs7O0FBR04scUJBQUt0RSxxQkFBTCxHQUE2QixJQUE3QjtBQUNBb0gsZ0JBQUFBLFFBQVEsQ0FBQ2pLLE9BQVQsQ0FBaUIsS0FBSzRDLGFBQXRCOzs7Ozs7O0FBRUEscUJBQUtDLHFCQUFMLEdBQTZCLElBQTdCO0FBQ0FvSCxnQkFBQUEsUUFBUSxDQUFDaEssTUFBVDs7OzttREFJRCxLQUFLMkMsYTs7Ozs7Ozs7Ozs7Ozs7Ozs7OztpSEFHVTJELEk7Ozs7Ozs7O0FBQ2hCNEQsZ0JBQUFBLE8sR0FBVSxDQUFDLEtBQUt6RyxNQUFMLENBQVlpQixJQUFaLENBQWlCeUYsc0I7O3VCQUNULEtBQUtDLGVBQUwsRTs7O0FBQXJCbkUsZ0JBQUFBLFk7QUFDQW9FLGdCQUFBQSxNLEdBQXlCLEk7QUFDekJDLGdCQUFBQSxRLEdBQXNCLEk7QUFFcEJDLGdCQUFBQSxXLEdBQWMsS0FBSzlHLE1BQUwsQ0FBWStHLE1BQVosQ0FBbUJDLE1BQW5CLENBQTBCbkUsSUFBMUIsRUFBZ0NvRSw0QkFBaEMsRUFBaUQsRUFBakQsQztBQUNkQyxnQkFBQUEsa0IsR0FBcUIsSUFBSUMsNENBQUosQ0FDdkIzRSxZQUFZLENBQUNOLEtBRFUsRUFFdkI7QUFDSW9DLGtCQUFBQSxPQUFPLEVBQUUzSSxrQkFEYjtBQUVJeUwsa0JBQUFBLFNBQVMsRUFBRSxJQUZmO0FBR0lDLGtCQUFBQSxnQkFBZ0IsRUFBRTtBQUFBLDJCQUFPO0FBQ3JCQyxzQkFBQUEsU0FBUyxFQUFFLE1BQUksQ0FBQ3RILE1BQUwsQ0FBWWlCLElBQVosSUFBb0IsTUFBSSxDQUFDakIsTUFBTCxDQUFZaUIsSUFBWixDQUFpQnFHLFNBRDNCO0FBRXJCQyxzQkFBQUEsT0FBTyxFQUFFVDtBQUZZLHFCQUFQO0FBQUE7QUFIdEIsaUJBRnVCLEVBVXZCdEUsWUFBWSxDQUFDSixTQVZVLEM7QUFZM0I4RSxnQkFBQUEsa0JBQWtCLENBQUNNLGFBQW5CLENBQWlDLFlBQU07QUFDbkM5RSxrQkFBQUEsT0FBTyxDQUFDQyxHQUFSLENBQVkscUJBQVosRUFBbUMsdUJBQW5DO0FBQ0gsaUJBRkQ7QUFHSThFLGdCQUFBQSxvQixHQUF1QixLO0FBQzNCUCxnQkFBQUEsa0JBQWtCLENBQUNRLE9BQW5CLENBQTJCLFlBQU07QUFDN0JoRixrQkFBQUEsT0FBTyxDQUFDQyxHQUFSLENBQVkscUJBQVosRUFBbUMsa0JBQW5DOztBQUNBLHNCQUFJOEUsb0JBQUosRUFBMEI7QUFDdEI7QUFDSDs7QUFDRCwrRUFBQztBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFDR0EsNEJBQUFBLG9CQUFvQixHQUFHLElBQXZCO0FBREg7QUFBQTtBQUFBLG1DQUcrQixNQUFJLENBQUNkLGVBQUwsRUFIL0I7O0FBQUE7QUFHYWdCLDRCQUFBQSxTQUhiO0FBSWFDLDRCQUFBQSxlQUpiLEdBSStCRCxTQUFTLENBQUNsSCxPQUFWLEtBQXNCK0IsWUFBWSxDQUFDL0IsT0FBbkMsSUFDakJrSCxTQUFTLENBQUN6RixLQUFWLEtBQW9CTSxZQUFZLENBQUNOLEtBTC9DOztBQU1PLGdDQUFJMEYsZUFBSixFQUFxQjtBQUNqQmxGLDhCQUFBQSxPQUFPLENBQUNDLEdBQVIsQ0FBWSxxQkFBWixFQUFtQyx1QkFBbkM7QUFDQUgsOEJBQUFBLFlBQVksR0FBR21GLFNBQWY7QUFDQSw4QkFBQSxNQUFJLENBQUN2SSxtQkFBTCxHQUEyQm9ELFlBQTNCO0FBQ0EwRSw4QkFBQUEsa0JBQWtCLENBQUM5RixHQUFuQixHQUF5QnVHLFNBQVMsQ0FBQ3pGLEtBQW5DOztBQUNBLGtDQUFJMEUsTUFBSixFQUFZO0FBQ1JBLGdDQUFBQSxNQUFNLENBQUN4RixHQUFQLEdBQWF1RyxTQUFTLENBQUN6RixLQUF2QjtBQUNIOztBQUNELGtDQUFJMkUsUUFBSixFQUFjO0FBQ1ZBLGdDQUFBQSxRQUFRLENBQUNnQixHQUFULEdBQWVGLFNBQVMsQ0FBQ2xILE9BQXpCO0FBQ0g7QUFDSjs7QUFqQlI7QUFBQTs7QUFBQTtBQUFBO0FBQUE7QUFtQk9pQyw0QkFBQUEsT0FBTyxDQUFDQyxHQUFSLENBQVksaURBQVo7O0FBbkJQO0FBcUJHOEUsNEJBQUFBLG9CQUFvQixHQUFHLEtBQXZCOztBQXJCSDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxtQkFBRDtBQXVCSCxpQkE1QkQ7O0FBNkJBUCxnQkFBQUEsa0JBQWtCLENBQUNZLHVCQUFuQixDQUEyQ0MsUUFBM0MsR0FBc0QsWUFBTTtBQUN4RCx5QkFBT2Isa0JBQWtCLENBQUNZLHVCQUFuQixDQUEyQ0UsR0FBbEQ7QUFDSCxpQkFGRDs7O3VCQUl5QixtQ0FBVyxVQUFDeEcsQ0FBRCxFQUFJeUcsR0FBSixFQUFZO0FBQzVDLHNCQUFNQyxZQUFZLEdBQUlELEdBQUcsSUFBSUEsR0FBRyxDQUFDdEQsU0FBWixJQUEwQjlCLElBQS9DO0FBQ0FvRixrQkFBQUEsR0FBRyxDQUFDVixPQUFKLEdBQWMsRUFBZDs7QUFDQSxrQkFBQSxNQUFJLENBQUN2SCxNQUFMLENBQVkrRyxNQUFaLENBQW1CQyxNQUFuQixDQUEwQmtCLFlBQTFCLEVBQXdDakIsNEJBQXhDLEVBQXlEZ0IsR0FBRyxDQUFDVixPQUE3RDs7QUFDQSxzQkFBTUQsU0FBUyxHQUFHLE1BQUksQ0FBQ3RILE1BQUwsQ0FBWWlCLElBQVosSUFBb0IsTUFBSSxDQUFDakIsTUFBTCxDQUFZaUIsSUFBWixDQUFpQnFHLFNBQXZEOztBQUNBLHNCQUFJQSxTQUFKLEVBQWU7QUFDWFcsb0JBQUFBLEdBQUcsQ0FBQ1YsT0FBSixDQUFZRCxTQUFaLEdBQXdCQSxTQUF4QjtBQUNIOztBQUNELHlCQUFPO0FBQ0hDLG9CQUFBQSxPQUFPLEVBQUVVLEdBQUcsQ0FBQ1Y7QUFEVixtQkFBUDtBQUdILGlCQVh3QixDOzs7QUFBbkJZLGdCQUFBQSxVOztBQVlBQyxnQkFBQUEsUSxHQUFXLFNBQVhBLFFBQVcsQ0FBQ0MsSUFBRDtBQUFBLHlCQUFrQ0YsVUFBVSxDQUFDRyxNQUFYLENBQWtCRCxJQUFsQixDQUFsQztBQUFBLGlCOztBQUNYRSxnQkFBQUEsYyxHQUFpQixTQUFqQkEsY0FBaUIsUUFBZTtBQUFBLHNCQUFaN0UsS0FBWSxTQUFaQSxLQUFZO0FBQ2xDLHNCQUFNOEUsVUFBVSxHQUFHLHdDQUFrQjlFLEtBQWxCLENBQW5CO0FBQ0EseUJBQ0k4RSxVQUFVLENBQUNDLElBQVgsS0FBb0IscUJBQXBCLElBQ0dELFVBQVUsQ0FBQ0UsU0FBWCxLQUF5QixjQUZoQztBQUlILGlCOztBQUVEOUIsZ0JBQUFBLE1BQU0sR0FBRyxJQUFJK0IsMkJBQUosQ0FBa0J6QixrQkFBbEIsQ0FBVDtBQUNBTCxnQkFBQUEsUUFBUSxHQUFHSixPQUFPLEdBQ1osSUFBSW1DLHdCQUFKLENBQWE7QUFDWGYsa0JBQUFBLEdBQUcsRUFBRXJGLFlBQVksQ0FBQy9CLE9BRFA7QUFFWDFDLGtCQUFBQSxLQUFLLEVBQUVELGNBQWMsQ0FBQzBFLFlBQVksQ0FBQ3pFLEtBQWQ7QUFGVixpQkFBYixDQURZLEdBS1osSUFMTjtBQU1Nc0ssZ0JBQUFBLEksR0FBT3hCLFFBQVEsR0FDZix1QkFBTTBCLGNBQU4sRUFBc0JILFFBQVEsQ0FBQ3hCLE1BQUQsQ0FBOUIsRUFBd0N3QixRQUFRLENBQUN2QixRQUFELENBQWhELENBRGUsR0FFZnVCLFFBQVEsQ0FBQ3hCLE1BQUQsQztBQUNkLHFCQUFLeEgsbUJBQUwsR0FBMkJvRCxZQUEzQjtBQUNBLHFCQUFLdEQsYUFBTCxHQUFxQixJQUFJMkosMEJBQUosQ0FBaUI7QUFDbENDLGtCQUFBQSxLQUFLLEVBQUUsSUFBSUMsa0NBQUosQ0FBa0IsRUFBbEIsQ0FEMkI7QUFFbENWLGtCQUFBQSxJQUFJLEVBQUpBLElBRmtDO0FBR2xDVyxrQkFBQUEsY0FBYyxFQUFFO0FBQ1pDLG9CQUFBQSxVQUFVLEVBQUU7QUFDUkMsc0JBQUFBLFdBQVcsRUFBRTtBQURMLHFCQURBO0FBSVp4RixvQkFBQUEsS0FBSyxFQUFFO0FBQ0h3RixzQkFBQUEsV0FBVyxFQUFFO0FBRFY7QUFKSztBQUhrQixpQkFBakIsQ0FBckI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7cUJBZUksS0FBS2hLLGE7Ozs7O0FBQ0N1RixnQkFBQUEsTSxHQUFTLEtBQUt2RixhO0FBQ3BCLHFCQUFLQSxhQUFMLEdBQXFCLElBQXJCO0FBQ0F1RixnQkFBQUEsTUFBTSxDQUFDMEUsSUFBUDs7dUJBQ00xRSxNQUFNLENBQUMyRSxVQUFQLEU7Ozs7Ozs7Ozs7Ozs7Ozs7OzttQ0E5TlF4TSxLLEVBQXFCO0FBQ3ZDLFVBQUlBLEtBQUssQ0FBQ21KLElBQU4sS0FBZXNELHdCQUFhQyxzQkFBaEMsRUFBd0Q7QUFDcEQsZUFBTyxJQUFQO0FBQ0g7O0FBQ0QsVUFBTXBELFlBQVksR0FBR3RKLEtBQUssQ0FBQ3NKLFlBQTNCOztBQUNBLFVBQUksQ0FBQ0EsWUFBTCxFQUFtQjtBQUNmLGVBQU8sS0FBUDtBQUNIOztBQUNELFVBQUksV0FBV0EsWUFBZixFQUE2QjtBQUN6QixlQUFPLElBQVA7QUFDSDs7QUFDRCxhQUFPLEVBQUUsY0FBY0EsWUFBZCxJQUE4QixZQUFZQSxZQUE1QyxDQUFQO0FBQ0g7Ozs7RUFsUXlDcUQscUI7Ozs7SUEwZHhDbkosMEI7QUFPRixzQ0FDSW9KLE1BREosRUFFSUMsY0FGSixFQUdJQyxRQUhKLEVBSUU7QUFBQTs7QUFBQTs7QUFBQTs7QUFBQTs7QUFDRSxTQUFLRixNQUFMLEdBQWNBLE1BQWQ7QUFDQSxTQUFLQyxjQUFMLEdBQXNCQSxjQUF0QjtBQUNBLFNBQUtDLFFBQUwsR0FBZ0JBLFFBQWhCO0FBQ0g7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7NENBR001TixJO0FBQUFBLGtCQUFBQSxJOzs7aUNBa0JDRCxhQUFhLENBQWlCQyxJQUFqQixFQUF1QixRQUF2QixFQUFpQztBQUFBLHlCQUFPO0FBQ3JENk4sb0JBQUFBLE1BQU0sRUFBRTdOLElBQUksQ0FBQyxDQUFELENBRHlDO0FBRXJEOEgsb0JBQUFBLE1BQU0sRUFBRzlILElBQUksQ0FBQyxDQUFELENBRndDO0FBR3JEOE4sb0JBQUFBLE9BQU8sRUFBRzlOLElBQUksQ0FBQyxDQUFELENBSHVDO0FBSXJEK04sb0JBQUFBLEtBQUssRUFBRy9OLElBQUksQ0FBQyxDQUFELENBSnlDO0FBS3JEd0ksb0JBQUFBLE9BQU8sRUFBR3hJLElBQUksQ0FBQyxDQUFELENBTHVDO0FBTXJEMkgsb0JBQUFBLFVBQVUsRUFBRTNILElBQUksQ0FBQyxDQUFEO0FBTnFDLG1CQUFQO0FBQUEsaUJBQWpDLEMsRUFQYjZOLE0sa0JBQUFBLE0sRUFDQS9GLE0sa0JBQUFBLE0sRUFDQWdHLE8sa0JBQUFBLE8sRUFDQUMsSyxrQkFBQUEsSyxFQUNBdkYsTyxrQkFBQUEsTyxFQUNBd0YsVyxrQkFBQUEsVyxFQUNBckcsVSxrQkFBQUEsVTttREFTRyxLQUFLK0YsTUFBTCxDQUFZdkssT0FBWixDQUFvQmdGLEtBQXBCLFdBQTZCLEtBQUt3RixjQUFsQztBQUFBLDJGQUEwRCxtQkFBTzVHLElBQVA7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQzdEQSw0QkFBQUEsSUFBSSxDQUFDdUIsTUFBTCxDQUFZLFFBQVosRUFBc0I7QUFDbEJ1Riw4QkFBQUEsTUFBTSxFQUFOQSxNQURrQjtBQUVsQi9GLDhCQUFBQSxNQUFNLEVBQU5BLE1BRmtCO0FBR2xCZ0csOEJBQUFBLE9BQU8sRUFBUEEsT0FIa0I7QUFJbEJDLDhCQUFBQSxLQUFLLEVBQUxBLEtBSmtCO0FBS2xCdkYsOEJBQUFBLE9BQU8sRUFBUEEsT0FMa0I7QUFNbEJ3Riw4QkFBQUEsV0FBVyxFQUFYQTtBQU5rQiw2QkFBdEI7QUFENkQsNENBU3RDQSxXQVRzQzs7QUFBQTtBQUFBO0FBQUE7QUFBQTs7QUFBQTtBQUFBLG1DQVUvQyxNQUFJLENBQUNOLE1BQUwsQ0FBWXpHLGFBQVosQ0FBMEJGLElBQTFCLENBVitDOztBQUFBO0FBQUEsNERBVWRuRixtQkFWYzs7QUFBQTtBQVN2RHFNLDRCQUFBQSxjQVR1RDtBQVd2REMsNEJBQUFBLENBWHVELEdBV25ELE1BQUksQ0FBQ1AsY0FYOEM7QUFZdkRRLDRCQUFBQSxDQVp1RCxHQVluRCxNQUFJLENBQUNQLFFBWjhDO0FBYXZEeEYsNEJBQUFBLEVBYnVELGlDQWNyRDhGLENBZHFELHlDQWU5Q0MsQ0FmOEMsa0pBbUJ2REYsY0FBYyxHQUFHLHdCQUFILEdBQThCLEVBbkJXLGlEQXFCdkRDLENBckJ1RCxnTUEwQm5ERCxjQUFjLEdBQUcsNkJBQUgsR0FBbUMsRUExQkUsbUNBMkJuRG5HLE1BM0JtRDtBQTZCdkRPLDRCQUFBQSxTQTdCdUQsR0E2QnhCO0FBQ2pDd0YsOEJBQUFBLE1BQU0sRUFBTkEsTUFEaUM7QUFFakNDLDhCQUFBQSxPQUFPLEVBQVBBLE9BRmlDO0FBR2pDQyw4QkFBQUEsS0FBSyxFQUFMQTtBQUhpQyw2QkE3QndCOztBQWtDN0QsZ0NBQUlFLGNBQUosRUFBb0I7QUFDaEI1Riw4QkFBQUEsU0FBUyxDQUFDMkYsV0FBVixHQUF3QkEsV0FBeEI7QUFDSDs7QUFDRCxnQ0FBSXhGLE9BQUosRUFBYTtBQUNUSCw4QkFBQUEsU0FBUyxDQUFDRyxPQUFWLEdBQW9CM0UsSUFBSSxDQUFDc0YsR0FBTCxDQUFTckosV0FBVCxFQUFzQjBJLE9BQXRCLENBQXBCO0FBQ0g7O0FBdkM0RDtBQUFBLG1DQXdDL0MsTUFBSSxDQUFDa0YsTUFBTCxDQUFZakYsWUFBWixDQUF5QkwsRUFBekIsRUFBNkJDLFNBQTdCLEVBQXdDdEIsSUFBeEMsRUFBOEN5QixPQUE5QyxDQXhDK0M7O0FBQUE7QUFBQSw0Q0F3Q2MwRixDQXhDZDtBQUFBLCtFQXdDUy9JLElBeENUOztBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLG1CQUExRDs7QUFBQTtBQUFBO0FBQUE7QUFBQSxxQkF5Q0p3QyxVQXpDSSxDOzs7Ozs7Ozs7Ozs7Ozs7Ozs7O3VHQTZDUHlHLE07Ozs7Ozs7bURBRU8sS0FBS1YsTUFBTCxDQUFZdkssT0FBWixDQUFvQmdGLEtBQXBCLFdBQTZCLEtBQUt3RixjQUFsQztBQUFBLDJGQUE4RCxtQkFBTzVHLElBQVA7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQ2pFQSw0QkFBQUEsSUFBSSxDQUFDdUIsTUFBTCxDQUFZLFFBQVosRUFBc0I7QUFDbEJ1Riw4QkFBQUEsTUFBTSxFQUFFTyxNQUFNLENBQUNQLE1BREc7QUFFbEJRLDhCQUFBQSxNQUFNLEVBQUVELE1BQU0sQ0FBQ0M7QUFGRyw2QkFBdEI7QUFEaUU7QUFBQSxtQ0FLckQsTUFBSSxDQUFDWCxNQUFMLENBQVl6RyxhQUFaLENBQTBCRixJQUExQixDQUxxRDs7QUFBQTtBQUFBLGdEQUtwQmxGLG9CQUxvQjtBQUFBO0FBQUE7QUFBQTs7QUFBQSw0Q0FNdkRjLHlCQU51RDtBQUFBO0FBQUEsbUNBT25ELE1BQUksQ0FBQytLLE1BQUwsQ0FBWXJELGlCQUFaLEVBUG1EOztBQUFBO0FBQUE7QUFBQSxnREFNeENpRSwrQkFOd0M7O0FBQUE7QUFVM0RILDRCQUFBQSxDQVYyRCxHQVV2RCxNQUFJLENBQUNQLFFBVmtEO0FBVzNEVyw0QkFBQUEsQ0FYMkQsR0FXdkQsTUFBSSxDQUFDWCxRQUFMLENBQWNZLFFBQWQsQ0FBdUIsR0FBdkIsdUJBQTBDTCxDQUExQyx1QkFBNERBLENBQTVELE1BWHVEO0FBWTNEL0YsNEJBQUFBLEVBWjJELGlDQWF6RG1HLENBYnlELHlDQWNsREosQ0Fka0Qsc0dBaUIzREksQ0FqQjJEO0FBc0IzRGxHLDRCQUFBQSxTQXRCMkQsR0FzQjVCO0FBQ2pDd0YsOEJBQUFBLE1BQU0sRUFBRU8sTUFBTSxDQUFDUCxNQURrQjtBQUVqQ1EsOEJBQUFBLE1BQU0sRUFBRUQsTUFBTSxDQUFDQztBQUZrQiw2QkF0QjRCO0FBQUE7QUFBQSxtQ0EwQm5ELE1BQUksQ0FBQ1gsTUFBTCxDQUFZakYsWUFBWixDQUF5QkwsRUFBekIsRUFBNkJDLFNBQTdCLEVBQXdDdEIsSUFBeEMsQ0ExQm1EOztBQUFBO0FBQUEsNENBMEJDd0gsQ0ExQkQ7QUFBQSwrRUEwQkpwSixJQTFCSTs7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxtQkFBOUQ7O0FBQUE7QUFBQTtBQUFBO0FBQUEscUJBMkJKaUosTUFBTSxDQUFDekcsVUEzQkgsQzs7Ozs7Ozs7Ozs7Ozs7Ozs7O2dDQXNDSztBQUFBOztBQUFBLHlDQVBUM0gsSUFPUztBQVBUQSxRQUFBQSxJQU9TO0FBQUE7O0FBQUEsNEJBTVJELGFBQWEsQ0FBcUJDLElBQXJCLEVBQTJCLFFBQTNCLEVBQXFDO0FBQUEsZUFBTztBQUN6RDZOLFVBQUFBLE1BQU0sRUFBRTdOLElBQUksQ0FBQyxDQUFELENBRDZDO0FBRXpEOEgsVUFBQUEsTUFBTSxFQUFHOUgsSUFBSSxDQUFDLENBQUQsQ0FGNEM7QUFHekR5TyxVQUFBQSxVQUFVLEVBQUd6TyxJQUFJLENBQUMsQ0FBRCxDQUh3QztBQUl6RDRMLFVBQUFBLE9BQU8sRUFBRzVMLElBQUksQ0FBQyxDQUFEO0FBSjJDLFNBQVA7QUFBQSxPQUFyQyxDQU5MO0FBQUEsVUFFUjZOLE1BRlEsbUJBRVJBLE1BRlE7QUFBQSxVQUdSL0YsTUFIUSxtQkFHUkEsTUFIUTtBQUFBLFVBSVIyRyxVQUpRLG1CQUlSQSxVQUpRO0FBQUEsVUFLUjdDLE9BTFEsbUJBS1JBLE9BTFE7O0FBWVosVUFBTTdFLElBQUksR0FBRyxLQUFLMkcsTUFBTCxDQUFZeEosTUFBWixDQUFtQitHLE1BQW5CLENBQTBCeUQsU0FBMUIsQ0FBb0MsZ0NBQXBDLENBQWI7QUFDQTNILE1BQUFBLElBQUksQ0FBQ3VCLE1BQUwsQ0FBWXFHLGtCQUFLQyxTQUFqQixFQUE0QixRQUE1QjtBQUNBLFVBQU05SixJQUFJLDBCQUFtQixLQUFLNkksY0FBeEIsdUJBQW1ELEtBQUtDLFFBQXhELG9DQUNKLEtBQUtELGNBREQsaUNBQ3NDN0YsTUFEdEMsa0JBQVY7QUFHQSxVQUFNRixLQUFLLEdBQUcsNEJBQUksQ0FBQzlDLElBQUQsQ0FBSixDQUFkO0FBQ0EsVUFBSStKLFlBQVksR0FBRyxJQUFuQjs7QUFDQSxtRUFBQztBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsdUJBRTRCLE9BQUksQ0FBQ25CLE1BQUwsQ0FBWTFHLHFCQUFaLENBQWtDRCxJQUFsQyxDQUY1Qjs7QUFBQTtBQUVhNEIsZ0JBQUFBLE1BRmI7QUFHYW1HLGdCQUFBQSxVQUhiLEdBRzBCbkcsTUFBTSxDQUFDb0csU0FBUCxDQUFpQjtBQUNoQ25ILGtCQUFBQSxLQUFLLEVBQUxBLEtBRGdDO0FBRWhDUyxrQkFBQUEsU0FBUyxFQUFFO0FBQ1B3RixvQkFBQUEsTUFBTSxFQUFOQTtBQURPO0FBRnFCLGlCQUFqQixDQUgxQjtBQVNPZ0IsZ0JBQUFBLFlBQVksR0FBR0MsVUFBVSxDQUFDQyxTQUFYLENBQXFCLFVBQUNuRixPQUFELEVBQWE7QUFDN0M2RSxrQkFBQUEsVUFBVSxDQUFDLGVBQUQsRUFBa0I3RSxPQUFPLENBQUN6RSxJQUFSLENBQWEsT0FBSSxDQUFDd0ksY0FBbEIsQ0FBbEIsQ0FBVjtBQUNILGlCQUZjLENBQWY7QUFUUDtBQUFBOztBQUFBO0FBQUE7QUFBQTtBQWFPNUcsZ0JBQUFBLElBQUksQ0FBQ0YsR0FBTCxDQUFTO0FBQ0xtSSxrQkFBQUEsS0FBSyxFQUFFLFFBREY7QUFFTEMsa0JBQUFBLE9BQU87QUFGRixpQkFBVDs7QUFJQSxvQkFBSXJELE9BQUosRUFBYTtBQUNUQSxrQkFBQUEsT0FBTyxlQUFQO0FBQ0gsaUJBRkQsTUFFTztBQUNIaEYsa0JBQUFBLE9BQU8sQ0FBQ0MsR0FBUixDQUFZLCtCQUFaO0FBQ0g7O0FBckJSO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLE9BQUQ7O0FBd0JBLGFBQU87QUFDSHFJLFFBQUFBLFdBQVcsRUFBRSx1QkFBTTtBQUNmLGNBQUlMLFlBQUosRUFBa0I7QUFDZEEsWUFBQUEsWUFBWSxDQUFDSyxXQUFiO0FBQ0FuSSxZQUFBQSxJQUFJLENBQUNvSSxNQUFMO0FBQ0g7QUFDSjtBQU5FLE9BQVA7QUFRSDs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs2Q0FHTW5QLEk7QUFBQUEsa0JBQUFBLEk7OztrQ0FjQ0QsYUFBYSxDQUFtQkMsSUFBbkIsRUFBeUIsUUFBekIsRUFBbUM7QUFBQSx5QkFBTztBQUN2RDZOLG9CQUFBQSxNQUFNLEVBQUU3TixJQUFJLENBQUMsQ0FBRCxDQUQyQztBQUV2RDhILG9CQUFBQSxNQUFNLEVBQUc5SCxJQUFJLENBQUMsQ0FBRCxDQUYwQztBQUd2RHdJLG9CQUFBQSxPQUFPLEVBQUd4SSxJQUFJLENBQUMsQ0FBRCxDQUh5QztBQUl2RDJILG9CQUFBQSxVQUFVLEVBQUUzSCxJQUFJLENBQUMsQ0FBRDtBQUp1QyxtQkFBUDtBQUFBLGlCQUFuQyxDLEVBTGI2TixNLG1CQUFBQSxNLEVBQ0EvRixNLG1CQUFBQSxNLEVBQ1NzSCxhLG1CQUFUNUcsTyxFQUNBYixVLG1CQUFBQSxVLEVBQ0FxRyxXLG1CQUFBQSxXO0FBT0V4RixnQkFBQUEsTyxHQUFVNEcsYUFBYSxJQUFJLEtBQUsxQixNQUFMLENBQVl4SixNQUFaLENBQW1CZ0YsY0FBbkIsRTs7dUJBQ2QsS0FBS3RCLEtBQUwsQ0FBVztBQUMxQmlHLGtCQUFBQSxNQUFNLEVBQU5BLE1BRDBCO0FBRTFCL0Ysa0JBQUFBLE1BQU0sRUFBTkEsTUFGMEI7QUFHMUJVLGtCQUFBQSxPQUFPLEVBQVBBLE9BSDBCO0FBSTFCYixrQkFBQUEsVUFBVSxFQUFWQSxVQUowQjtBQUsxQnFHLGtCQUFBQSxXQUFXLEVBQVhBO0FBTDBCLGlCQUFYLEM7OztBQUFicUIsZ0JBQUFBLEk7O3NCQU9GQSxJQUFJLENBQUNsUCxNQUFMLEdBQWMsQzs7Ozs7bURBQ1BrUCxJQUFJLENBQUMsQ0FBRCxDOzs7Z0NBRVQxTSx5Qjs7dUJBQW9DLEtBQUsrSyxNQUFMLENBQVlyRCxpQkFBWixDQUE4QjtBQUNwRWlGLGtCQUFBQSxVQUFVLEVBQUUsS0FBSzNCO0FBRG1ELGlCQUE5QixDOzs7O29DQUFyQnpFLGM7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQU03QmhHLGdCQUFnQixDQUFDcU0sVUFBakIsR0FBOEIsa0JBQTlCIiwic291cmNlc0NvbnRlbnQiOlsiLypcbiAqIENvcHlyaWdodCAyMDE4LTIwMjAgVE9OIERFViBTT0xVVElPTlMgTFRELlxuICovXG5cbi8vIEBmbG93XG5cbmltcG9ydCB7IEluTWVtb3J5Q2FjaGUgfSBmcm9tICdhcG9sbG8tY2FjaGUtaW5tZW1vcnknO1xuaW1wb3J0IHsgQXBvbGxvQ2xpZW50IH0gZnJvbSAnYXBvbGxvLWNsaWVudCc7XG5pbXBvcnQgeyBBcG9sbG9MaW5rLCBzcGxpdCB9IGZyb20gJ2Fwb2xsby1saW5rJztcbmltcG9ydCB7IEh0dHBMaW5rIH0gZnJvbSAnYXBvbGxvLWxpbmstaHR0cCc7XG5pbXBvcnQgeyBXZWJTb2NrZXRMaW5rIH0gZnJvbSAnYXBvbGxvLWxpbmstd3MnO1xuaW1wb3J0IHsgZ2V0TWFpbkRlZmluaXRpb24gfSBmcm9tICdhcG9sbG8tdXRpbGl0aWVzJztcbmltcG9ydCBncWwgZnJvbSAnZ3JhcGhxbC10YWcnO1xuaW1wb3J0IHsgU3Vic2NyaXB0aW9uQ2xpZW50IH0gZnJvbSAnc3Vic2NyaXB0aW9ucy10cmFuc3BvcnQtd3MnO1xuaW1wb3J0IHsgc2V0Q29udGV4dCB9IGZyb20gJ2Fwb2xsby1saW5rLWNvbnRleHQnO1xuaW1wb3J0IHtcbiAgICBGT1JNQVRfVEVYVF9NQVAsIFRhZ3MsIFNwYW4sIFNwYW5Db250ZXh0LFxufSBmcm9tICdvcGVudHJhY2luZyc7XG5pbXBvcnQgdHlwZSB7XG4gICAgVE9OUXVlcmllcyxcbiAgICBUT05RQ29sbGVjdGlvbixcbiAgICBTdWJzY3JpcHRpb24sXG4gICAgVE9OUXVlcnlQYXJhbXMsXG4gICAgVE9OU3Vic2NyaWJlUGFyYW1zLFxuICAgIFRPTldhaXRGb3JQYXJhbXMsXG4gICAgVE9OUXVlcnlBZ2dyZWdhdGVQYXJhbXMsXG59IGZyb20gJy4uLy4uL3R5cGVzJztcbmltcG9ydCB7IFRPTkNsaWVudCwgVE9OQ2xpZW50RXJyb3IsIFRPTkVycm9yQ29kZSB9IGZyb20gJy4uL1RPTkNsaWVudCc7XG5pbXBvcnQgdHlwZSB7IFRPTk1vZHVsZUNvbnRleHQgfSBmcm9tICcuLi9UT05Nb2R1bGUnO1xuaW1wb3J0IHsgVE9OTW9kdWxlIH0gZnJvbSAnLi4vVE9OTW9kdWxlJztcbmltcG9ydCBUT05Db25maWdNb2R1bGUsIHsgVVJMUGFydHMgfSBmcm9tICcuL1RPTkNvbmZpZ01vZHVsZSc7XG5cblxuZXhwb3J0IHR5cGUgUmVxdWVzdCA9IHtcbiAgICBpZDogc3RyaW5nLFxuICAgIGJvZHk6IHN0cmluZyxcbn1cblxuZXhwb3J0IHR5cGUgU2VydmVySW5mbyA9IHtcbiAgICB2ZXJzaW9uOiBudW1iZXIsXG4gICAgc3VwcG9ydHNPcGVyYXRpb25JZDogYm9vbGVhbixcbiAgICBzdXBwb3J0c0FnZ3JlZ2F0aW9uczogYm9vbGVhbixcbiAgICBzdXBwb3J0c1RpbWU6IGJvb2xlYW4sXG4gICAgdGltZURlbHRhOiA/bnVtYmVyLFxufTtcblxuXG50eXBlIEdyYXBoUUxDbGllbnRDb25maWcgPSB7XG4gICAgaHR0cFVybDogc3RyaW5nLFxuICAgIHdzVXJsOiBzdHJpbmcsXG4gICAgZmV0Y2g6IGFueSxcbiAgICBXZWJTb2NrZXQ6IGFueSxcbn07XG5cbi8vIEtlZXAtYWxpdmUgdGltZW91dCB1c2VkIHRvIHN1cHBvcnQga2VlcC1hbGl2ZSBjb25uZWN0aW9uIGNoZWNraW5nOlxuLy8gLSBFdmVyeSAxIG1pbnV0ZSBzZXJ2ZXIgc2VuZHMgR1FMX0NPTk5FQ1RJT05fS0VFUF9BTElWRSBtZXNzYWdlLlxuLy8gLSBFdmVyeSAyIG1pbnV0ZXMgY2xpZW50IGNoZWNrcyB0aGF0IEdRTF9DT05ORUNUSU9OX0tFRVBfQUxJVkUgbWVzc2FnZSB3YXMgcmVjZWl2ZWRcbi8vICAgd2l0aGluIGxhc3QgMiBtaW51dGVzLlxuLy8gLSBJZiBjbGllbnQgaGFkbid0IHJlY2VpdmVkIGtlZXAgYWxpdmUgbWVzc2FnZSBkdXJpbmcgbGFzdCAyIG1pbnV0ZXNcbi8vICAgaXQgY2xvc2VzIGNvbm5lY3Rpb24gYW5kIGdvZXMgdG8gcmVjb25uZWN0LlxuY29uc3QgS0VFUF9BTElWRV9USU1FT1VUID0gMiAqIDYwMDAwO1xuXG5leHBvcnQgY29uc3QgTUFYX1RJTUVPVVQgPSAyMTQ3NDgzNjQ3O1xuXG5mdW5jdGlvbiByZXNvbHZlUGFyYW1zPFQ+KGFyZ3M6IGFueVtdLCByZXF1aXJlZFBhcmFtTmFtZTogc3RyaW5nLCByZXNvbHZlQXJnczogKCkgPT4gVCk6IFQge1xuICAgIHJldHVybiAoYXJncy5sZW5ndGggPT09IDEpICYmIChyZXF1aXJlZFBhcmFtTmFtZSBpbiBhcmdzWzBdKSA/IGFyZ3NbMF0gOiByZXNvbHZlQXJncygpO1xufVxuXG50eXBlIE11bHRpY2FzdExpc3RlbmVyPFZhbHVlPiA9IHtcbiAgICByZXNvbHZlOiAodmFsdWU6IFZhbHVlKSA9PiB2b2lkO1xuICAgIHJlamVjdDogKGVycm9yOiBFcnJvcikgPT4gdm9pZDtcbn07XG5cbmNsYXNzIE11bHRpY2FzdFByb21pc2U8VmFsdWU+IHtcbiAgICBsaXN0ZW5lcnM6IE11bHRpY2FzdExpc3RlbmVyPFZhbHVlPltdO1xuICAgIG9uQ29tcGxldGU6ID8oKCkgPT4gdm9pZCk7XG5cbiAgICBjb25zdHJ1Y3RvcigpIHtcbiAgICAgICAgdGhpcy5saXN0ZW5lcnMgPSBbXTtcbiAgICAgICAgdGhpcy5vbkNvbXBsZXRlID0gbnVsbDtcbiAgICB9XG5cbiAgICBsaXN0ZW4oKTogUHJvbWlzZTxWYWx1ZT4ge1xuICAgICAgICBjb25zdCBsaXN0ZW5lcjogTXVsdGljYXN0TGlzdGVuZXI8VmFsdWU+ID0ge1xuICAgICAgICAgICAgcmVzb2x2ZTogKCkgPT4ge1xuICAgICAgICAgICAgfSxcbiAgICAgICAgICAgIHJlamVjdDogKCkgPT4ge1xuICAgICAgICAgICAgfSxcbiAgICAgICAgfTtcbiAgICAgICAgdGhpcy5saXN0ZW5lcnMucHVzaChsaXN0ZW5lcik7XG4gICAgICAgIHJldHVybiBuZXcgUHJvbWlzZSgocmVzb2x2ZSwgcmVqZWN0KSA9PiB7XG4gICAgICAgICAgICBsaXN0ZW5lci5yZXNvbHZlID0gcmVzb2x2ZTtcbiAgICAgICAgICAgIGxpc3RlbmVyLnJlamVjdCA9IHJlamVjdDtcbiAgICAgICAgfSk7XG4gICAgfVxuXG4gICAgcmVzb2x2ZSh2YWx1ZTogVmFsdWUpIHtcbiAgICAgICAgdGhpcy5jb21wbGV0ZShsaXN0ZW5lciA9PiBsaXN0ZW5lci5yZXNvbHZlKHZhbHVlKSk7XG4gICAgfVxuXG4gICAgcmVqZWN0KGVycm9yOiBFcnJvcikge1xuICAgICAgICB0aGlzLmNvbXBsZXRlKGxpc3RlbmVyID0+IGxpc3RlbmVyLnJlamVjdChlcnJvcikpO1xuICAgIH1cblxuICAgIGNvbXBsZXRlKGNvbXBsZXRlTGlzdGVuZXI6IChsaXN0ZW5lcjogTXVsdGljYXN0TGlzdGVuZXI8VmFsdWU+KSA9PiB2b2lkKSB7XG4gICAgICAgIGNvbnN0IHsgbGlzdGVuZXJzIH0gPSB0aGlzO1xuICAgICAgICB0aGlzLmxpc3RlbmVycyA9IFtdO1xuICAgICAgICBpZiAodGhpcy5vbkNvbXBsZXRlKSB7XG4gICAgICAgICAgICB0aGlzLm9uQ29tcGxldGUoKTtcbiAgICAgICAgfVxuICAgICAgICBsaXN0ZW5lcnMuZm9yRWFjaChsaXN0ZW5lciA9PiBjb21wbGV0ZUxpc3RlbmVyKGxpc3RlbmVyKSk7XG4gICAgfVxufVxuXG5mdW5jdGlvbiB2ZXJzaW9uVG9OdW1iZXIoczogc3RyaW5nKTogbnVtYmVyIHtcbiAgICBjb25zdCBwYXJ0cyA9IGAke3MgfHwgJyd9YC5zcGxpdCgnLicpXG4gICAgICAgIC5tYXAoeCA9PiBOdW1iZXIoeCkpXG4gICAgICAgIC5zbGljZSgwLCAzKTtcbiAgICB3aGlsZSAocGFydHMubGVuZ3RoIDwgMykge1xuICAgICAgICBwYXJ0cy5wdXNoKDApO1xuICAgIH1cbiAgICByZXR1cm4gcGFydHNbMF0gKiAxMDAwMDAwICsgcGFydHNbMV0gKiAxMDAwICsgcGFydHNbMl07XG59XG5cbmZ1bmN0aW9uIHJlc29sdmVTZXJ2ZXJJbmZvKHZlcnNpb25TdHJpbmc6IHN0cmluZyB8IG51bGwgfCB0eXBlb2YgdW5kZWZpbmVkKTogU2VydmVySW5mbyB7XG4gICAgY29uc3QgdmVyc2lvbiA9IHZlcnNpb25Ub051bWJlcih2ZXJzaW9uU3RyaW5nIHx8ICcwLjI0LjQnKTtcbiAgICByZXR1cm4ge1xuICAgICAgICB2ZXJzaW9uLFxuICAgICAgICBzdXBwb3J0c09wZXJhdGlvbklkOiB2ZXJzaW9uID4gMjQwMDQsXG4gICAgICAgIHN1cHBvcnRzQWdncmVnYXRpb25zOiB2ZXJzaW9uID49IDI1MDAwLFxuICAgICAgICBzdXBwb3J0c1RpbWU6IHZlcnNpb24gPj0gMjYwMDMsXG4gICAgICAgIHRpbWVEZWx0YTogbnVsbCxcbiAgICB9O1xufVxuXG5mdW5jdGlvbiBhYm9ydGFibGVGZXRjaChmZXRjaCkge1xuICAgIHJldHVybiAoaW5wdXQsIG9wdGlvbnMpID0+IHtcbiAgICAgICAgcmV0dXJuIG5ldyBQcm9taXNlKChyZXNvbHZlLCByZWplY3QpID0+IHtcbiAgICAgICAgICAgIGNvbnN0IHF1ZXJ5VGltZW91dDogbnVtYmVyIHwgdHlwZW9mIHVuZGVmaW5lZCA9IG9wdGlvbnMucXVlcnlUaW1lb3V0O1xuICAgICAgICAgICAgbGV0IGZldGNoT3B0aW9ucyA9IG9wdGlvbnM7XG4gICAgICAgICAgICBpZiAocXVlcnlUaW1lb3V0KSB7XG4gICAgICAgICAgICAgICAgY29uc3QgY29udHJvbGxlciA9IGdsb2JhbC5BYm9ydENvbnRyb2xsZXIgPyBuZXcgZ2xvYmFsLkFib3J0Q29udHJvbGxlcigpIDogbnVsbDtcbiAgICAgICAgICAgICAgICBpZiAoY29udHJvbGxlcikge1xuICAgICAgICAgICAgICAgICAgICBmZXRjaE9wdGlvbnMgPSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAuLi5vcHRpb25zLFxuICAgICAgICAgICAgICAgICAgICAgICAgc2lnbmFsOiBjb250cm9sbGVyLnNpZ25hbCxcbiAgICAgICAgICAgICAgICAgICAgfTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgc2V0VGltZW91dCgoKSA9PiB7XG4gICAgICAgICAgICAgICAgICAgIHJlamVjdChUT05DbGllbnRFcnJvci5xdWVyeUZvcmNpYmx5QWJvcnRlZCh7XG4gICAgICAgICAgICAgICAgICAgICAgICBjb3JlX3ZlcnNpb246ICcnLFxuICAgICAgICAgICAgICAgICAgICAgICAgY29uZmlnX3NlcnZlcjogJycsXG4gICAgICAgICAgICAgICAgICAgICAgICBxdWVyeV91cmw6ICcnLFxuICAgICAgICAgICAgICAgICAgICB9KSk7XG4gICAgICAgICAgICAgICAgICAgIGlmIChjb250cm9sbGVyKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICBjb250cm9sbGVyLmFib3J0KCk7XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICB9LCBxdWVyeVRpbWVvdXQpO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgZmV0Y2goaW5wdXQsIGZldGNoT3B0aW9ucykudGhlbihyZXNvbHZlLCByZWplY3QpO1xuICAgICAgICB9KTtcbiAgICB9O1xufVxuXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBUT05RdWVyaWVzTW9kdWxlIGV4dGVuZHMgVE9OTW9kdWxlIGltcGxlbWVudHMgVE9OUXVlcmllcyB7XG4gICAgdHJhbnNhY3Rpb25zOiBUT05RQ29sbGVjdGlvbjtcbiAgICBtZXNzYWdlczogVE9OUUNvbGxlY3Rpb247XG4gICAgYmxvY2tzOiBUT05RQ29sbGVjdGlvbjtcbiAgICBhY2NvdW50czogVE9OUUNvbGxlY3Rpb247XG4gICAgYmxvY2tzX3NpZ25hdHVyZXM6IFRPTlFDb2xsZWN0aW9uO1xuXG4gICAgY29uZmlnOiBUT05Db25maWdNb2R1bGU7XG5cbiAgICBncmFwaHFsQ2xpZW50Q3JlYXRpb246ID9NdWx0aWNhc3RQcm9taXNlPEFwb2xsb0NsaWVudD47XG4gICAgZ3JhcGhxbENsaWVudDogP0Fwb2xsb0NsaWVudDtcbiAgICBncmFwaHFsQ2xpZW50Q29uZmlnOiA/R3JhcGhRTENsaWVudENvbmZpZztcblxuICAgIG92ZXJyaWRlV3NVcmw6ID9zdHJpbmc7XG4gICAgb3BlcmF0aW9uSWRQcmVmaXg6IHN0cmluZztcbiAgICBvcGVyYXRpb25JZFN1ZmZpeDogbnVtYmVyO1xuICAgIHNlcnZlckluZm86IFNlcnZlckluZm87XG5cbiAgICBjb25zdHJ1Y3Rvcihjb250ZXh0OiBUT05Nb2R1bGVDb250ZXh0KSB7XG4gICAgICAgIHN1cGVyKGNvbnRleHQpO1xuICAgICAgICB0aGlzLmdyYXBocWxDbGllbnQgPSBudWxsO1xuICAgICAgICB0aGlzLmdyYXBocWxDbGllbnRDcmVhdGlvbiA9IG51bGw7XG4gICAgICAgIHRoaXMuZ3JhcGhxbENsaWVudENvbmZpZyA9IG51bGw7XG4gICAgICAgIHRoaXMub3ZlcnJpZGVXc1VybCA9IG51bGw7XG4gICAgICAgIHRoaXMub3BlcmF0aW9uSWRQcmVmaXggPSAoRGF0ZS5ub3coKSAlIDYwMDAwKS50b1N0cmluZygxNik7XG4gICAgICAgIGZvciAobGV0IGkgPSAwOyBpIDwgMTA7IGkgKz0gMSkge1xuICAgICAgICAgICAgdGhpcy5vcGVyYXRpb25JZFByZWZpeCA9XG4gICAgICAgICAgICAgICAgYCR7dGhpcy5vcGVyYXRpb25JZFByZWZpeH0ke01hdGgucm91bmQoTWF0aC5yYW5kb20oKSAqIDI1NilcbiAgICAgICAgICAgICAgICAgICAgLnRvU3RyaW5nKDE2KX1gO1xuICAgICAgICB9XG4gICAgICAgIHRoaXMub3BlcmF0aW9uSWRTdWZmaXggPSAxO1xuICAgICAgICB0aGlzLnNlcnZlckluZm8gPSByZXNvbHZlU2VydmVySW5mbygpO1xuICAgIH1cblxuICAgIGFzeW5jIHNldHVwKCkge1xuICAgICAgICB0aGlzLmNvbmZpZyA9IHRoaXMuY29udGV4dC5nZXRNb2R1bGUoVE9OQ29uZmlnTW9kdWxlKTtcbiAgICAgICAgdGhpcy50cmFuc2FjdGlvbnMgPSBuZXcgVE9OUXVlcmllc01vZHVsZUNvbGxlY3Rpb24odGhpcywgJ3RyYW5zYWN0aW9ucycsICdUcmFuc2FjdGlvbicpO1xuICAgICAgICB0aGlzLm1lc3NhZ2VzID0gbmV3IFRPTlF1ZXJpZXNNb2R1bGVDb2xsZWN0aW9uKHRoaXMsICdtZXNzYWdlcycsICdNZXNzYWdlJyk7XG4gICAgICAgIHRoaXMuYmxvY2tzID0gbmV3IFRPTlF1ZXJpZXNNb2R1bGVDb2xsZWN0aW9uKHRoaXMsICdibG9ja3MnLCAnQmxvY2snKTtcbiAgICAgICAgdGhpcy5hY2NvdW50cyA9IG5ldyBUT05RdWVyaWVzTW9kdWxlQ29sbGVjdGlvbih0aGlzLCAnYWNjb3VudHMnLCAnQWNjb3VudCcpO1xuICAgICAgICB0aGlzLmJsb2Nrc19zaWduYXR1cmVzID1cbiAgICAgICAgICAgIG5ldyBUT05RdWVyaWVzTW9kdWxlQ29sbGVjdGlvbih0aGlzLCAnYmxvY2tzX3NpZ25hdHVyZXMnLCAnQmxvY2tTaWduYXR1cmVzJyk7XG4gICAgfVxuXG4gICAgZ2V0UXVlcnlVcmwoKTogc3RyaW5nIHtcbiAgICAgICAgcmV0dXJuIHRoaXMuZ3JhcGhxbENsaWVudENvbmZpZz8uaHR0cFVybCB8fCAnJztcbiAgICB9XG5cbiAgICBhc3luYyBkZXRlY3RSZWRpcmVjdChmZXRjaDogYW55LCBzb3VyY2VVcmw6IHN0cmluZyk6IFByb21pc2U8c3RyaW5nPiB7XG4gICAgICAgIGNvbnN0IHJlc3BvbnNlID0gYXdhaXQgZmV0Y2goc291cmNlVXJsKTtcbiAgICAgICAgdHJ5IHtcbiAgICAgICAgICAgIGNvbnN0IHJlc3BvbnNlVGV4dCA9IGF3YWl0IHJlc3BvbnNlLnRleHQoKTtcbiAgICAgICAgICAgIGNvbnN0IHJlc3BvbnNlSnNvbiA9IEpTT04ucGFyc2UocmVzcG9uc2VUZXh0KTtcbiAgICAgICAgICAgIHRoaXMuc2VydmVySW5mbyA9IHJlc29sdmVTZXJ2ZXJJbmZvKHJlc3BvbnNlSnNvbi5kYXRhLmluZm8udmVyc2lvbik7XG4gICAgICAgIH0gY2F0Y2gge1xuICAgICAgICB9XG4gICAgICAgIGlmIChyZXNwb25zZS5yZWRpcmVjdGVkID09PSB0cnVlKSB7XG4gICAgICAgICAgICByZXR1cm4gcmVzcG9uc2UudXJsO1xuICAgICAgICB9XG4gICAgICAgIGlmIChyZXNwb25zZS5yZWRpcmVjdGVkID09PSBmYWxzZSkge1xuICAgICAgICAgICAgcmV0dXJuICcnO1xuICAgICAgICB9XG4gICAgICAgIGNvbnN0IHNvdXJjZUxvY2F0aW9uID0gVVJMUGFydHMucGFyc2Uoc291cmNlVXJsKVxuICAgICAgICAgICAgLmZpeFF1ZXJ5KF8gPT4gJycpXG4gICAgICAgICAgICAudG9TdHJpbmcoKVxuICAgICAgICAgICAgLnRvTG93ZXJDYXNlKCk7XG4gICAgICAgIGNvbnN0IHJlc3BvbnNlTG9jYXRpb24gPSBVUkxQYXJ0cy5wYXJzZShyZXNwb25zZS51cmwpXG4gICAgICAgICAgICAuZml4UXVlcnkoXyA9PiAnJylcbiAgICAgICAgICAgIC50b1N0cmluZygpXG4gICAgICAgICAgICAudG9Mb3dlckNhc2UoKTtcbiAgICAgICAgcmV0dXJuIHJlc3BvbnNlTG9jYXRpb24gIT09IHNvdXJjZUxvY2F0aW9uID8gcmVzcG9uc2UudXJsIDogJyc7XG4gICAgfVxuXG4gICAgYXN5bmMgZ2V0Q2xpZW50Q29uZmlnKCk6IFByb21pc2U8R3JhcGhRTENsaWVudENvbmZpZz4ge1xuICAgICAgICBjb25zdCBjb25maWcgPSB0aGlzLmNvbmZpZztcbiAgICAgICAgY29uc3QgY2xpZW50UGxhdGZvcm0gPSBUT05DbGllbnQuY2xpZW50UGxhdGZvcm07XG4gICAgICAgIGlmICghY2xpZW50UGxhdGZvcm0pIHtcbiAgICAgICAgICAgIHRocm93IEVycm9yKCdUT04gQ2xpZW50IGRvZXMgbm90IGNvbmZpZ3VyZWQnKTtcbiAgICAgICAgfVxuICAgICAgICBjb25zdCBmZXRjaCA9IGNsaWVudFBsYXRmb3JtLmZldGNoO1xuXG4gICAgICAgIGZ1bmN0aW9uIGdldENvbmZpZ0ZvclNlcnZlcihzZXJ2ZXI6IHN0cmluZyk6IEdyYXBoUUxDbGllbnRDb25maWcge1xuICAgICAgICAgICAgY29uc3QgaHR0cFBhcnRzID0gVVJMUGFydHMucGFyc2Uoc2VydmVyKVxuICAgICAgICAgICAgICAgIC5maXhQcm90b2NvbCh4ID0+ICh4ID09PSAnaHR0cDovLycgPyB4IDogJ2h0dHBzOi8vJykpXG4gICAgICAgICAgICAgICAgLmZpeFBhdGgoeCA9PiBgJHt4fS9ncmFwaHFsYCk7XG4gICAgICAgICAgICBjb25zdCBodHRwID0gaHR0cFBhcnRzLnRvU3RyaW5nKCk7XG4gICAgICAgICAgICBjb25zdCB3cyA9IGh0dHBQYXJ0c1xuICAgICAgICAgICAgICAgIC5maXhQcm90b2NvbCh4ID0+ICh4ID09PSAnaHR0cDovLycgPyAnd3M6Ly8nIDogJ3dzczovLycpKVxuICAgICAgICAgICAgICAgIC50b1N0cmluZygpO1xuICAgICAgICAgICAgcmV0dXJuIHtcbiAgICAgICAgICAgICAgICBodHRwVXJsOiBodHRwLFxuICAgICAgICAgICAgICAgIHdzVXJsOiB3cyxcbiAgICAgICAgICAgICAgICBmZXRjaDogY2xpZW50UGxhdGZvcm0uZmV0Y2gsXG4gICAgICAgICAgICAgICAgV2ViU29ja2V0OiBjbGllbnRQbGF0Zm9ybS5XZWJTb2NrZXQsXG4gICAgICAgICAgICB9O1xuICAgICAgICB9XG5cbiAgICAgICAgZm9yIChjb25zdCBzZXJ2ZXIgb2YgY29uZmlnLmRhdGEuc2VydmVycykge1xuICAgICAgICAgICAgY29uc3QgY2xpZW50Q29uZmlnID0gZ2V0Q29uZmlnRm9yU2VydmVyKHNlcnZlcik7XG4gICAgICAgICAgICB0cnkge1xuICAgICAgICAgICAgICAgIC8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSBuby1hd2FpdC1pbi1sb29wXG4gICAgICAgICAgICAgICAgY29uc3QgcmVkaXJlY3RlZCA9IGF3YWl0IHRoaXMuZGV0ZWN0UmVkaXJlY3QoXG4gICAgICAgICAgICAgICAgICAgIGZldGNoLFxuICAgICAgICAgICAgICAgICAgICBgJHtjbGllbnRDb25maWcuaHR0cFVybH0/cXVlcnk9JTdCaW5mbyU3QnZlcnNpb24lN0QlN0RgLFxuICAgICAgICAgICAgICAgICk7XG4gICAgICAgICAgICAgICAgaWYgKHJlZGlyZWN0ZWQgIT09ICcnKSB7XG4gICAgICAgICAgICAgICAgICAgIGNvbnN0IGh0dHBQYXJ0cyA9IFVSTFBhcnRzLnBhcnNlKHJlZGlyZWN0ZWQpXG4gICAgICAgICAgICAgICAgICAgICAgICAuZml4UXVlcnkoXyA9PiAnJyk7XG4gICAgICAgICAgICAgICAgICAgIGNsaWVudENvbmZpZy5odHRwVXJsID0gaHR0cFBhcnRzLnRvU3RyaW5nKCk7XG4gICAgICAgICAgICAgICAgICAgIGNsaWVudENvbmZpZy53c1VybCA9IGh0dHBQYXJ0c1xuICAgICAgICAgICAgICAgICAgICAgICAgLmZpeFByb3RvY29sKHggPT4gKHggPT09ICdodHRwOi8vJyA/ICd3czovLycgOiAnd3NzOi8vJykpXG4gICAgICAgICAgICAgICAgICAgICAgICAudG9TdHJpbmcoKTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgcmV0dXJuIGNsaWVudENvbmZpZztcbiAgICAgICAgICAgIH0gY2F0Y2ggKGVycm9yKSB7XG4gICAgICAgICAgICAgICAgY29uc29sZS5sb2coYFtnZXRDbGllbnRDb25maWddIGZvciBzZXJ2ZXIgXCIke3NlcnZlcn1cIiBmYWlsZWRgLCB7XG4gICAgICAgICAgICAgICAgICAgIGNsaWVudENvbmZpZzoge1xuICAgICAgICAgICAgICAgICAgICAgICAgaHR0cFVybDogY2xpZW50Q29uZmlnLmh0dHBVcmwsXG4gICAgICAgICAgICAgICAgICAgICAgICB3c1VybDogY2xpZW50Q29uZmlnLndzVXJsLFxuICAgICAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgICAgICBlcnJvclN0cmluZzogZXJyb3IudG9TdHJpbmcoKSxcbiAgICAgICAgICAgICAgICAgICAgZXJyb3IsXG4gICAgICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgICAgcmV0dXJuIGdldENvbmZpZ0ZvclNlcnZlcihjb25maWcuZGF0YS5zZXJ2ZXJzWzBdKTtcbiAgICB9XG5cbiAgICBhc3luYyBnZXRTZXJ2ZXJJbmZvKHNwYW4/OiBTcGFuIHwgU3BhbkNvbnRleHQpOiBQcm9taXNlPFNlcnZlckluZm8+IHtcbiAgICAgICAgYXdhaXQgdGhpcy5ncmFwaHFsQ2xpZW50UmVxdWlyZWQoc3Bhbik7XG4gICAgICAgIHJldHVybiB0aGlzLnNlcnZlckluZm87XG4gICAgfVxuXG4gICAgYXN5bmMgc2VydmVyVGltZURlbHRhKHNwYW4/OiBTcGFuIHwgU3BhbkNvbnRleHQpOiBQcm9taXNlPG51bWJlcj4ge1xuICAgICAgICBjb25zdCBzZXJ2ZXJJbmZvID0gYXdhaXQgdGhpcy5nZXRTZXJ2ZXJJbmZvKHNwYW4pO1xuICAgICAgICBjb25zdCBjbGllbnRDb25maWcgPSB0aGlzLmdyYXBocWxDbGllbnRDb25maWc7XG4gICAgICAgIGlmIChjbGllbnRDb25maWcgJiYgc2VydmVySW5mby5zdXBwb3J0c1RpbWUgJiYgc2VydmVySW5mby50aW1lRGVsdGEgPT09IG51bGwpIHtcbiAgICAgICAgICAgIHRyeSB7XG4gICAgICAgICAgICAgICAgY29uc3Qgc3RhcnQgPSBEYXRlLm5vdygpO1xuICAgICAgICAgICAgICAgIGNvbnN0IHJlc3BvbnNlID0gYXdhaXQgY2xpZW50Q29uZmlnLmZldGNoKGAke2NsaWVudENvbmZpZy5odHRwVXJsfT9xdWVyeT0lN0JpbmZvJTdCdGltZSU3RCU3RGApO1xuICAgICAgICAgICAgICAgIGNvbnN0IGVuZCA9IERhdGUubm93KCk7XG4gICAgICAgICAgICAgICAgY29uc3QgcmVzcG9uc2VEYXRhID0gYXdhaXQgcmVzcG9uc2UuanNvbigpO1xuICAgICAgICAgICAgICAgIGNvbnN0IHNlcnZlclRpbWUgPSByZXNwb25zZURhdGEuZGF0YS5pbmZvLnRpbWU7XG4gICAgICAgICAgICAgICAgc2VydmVySW5mby50aW1lRGVsdGEgPSBNYXRoLnJvdW5kKHNlcnZlclRpbWUgLSAoc3RhcnQgKyAoZW5kIC0gc3RhcnQpIC8gMikpO1xuICAgICAgICAgICAgfSBjYXRjaCAoZXJyb3IpIHtcbiAgICAgICAgICAgICAgICBjb25zb2xlLmxvZygnPj4+JywgZXJyb3IpO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICAgIHJldHVybiBzZXJ2ZXJJbmZvLnRpbWVEZWx0YSB8fCAwO1xuICAgIH1cblxuICAgIGFzeW5jIHNlcnZlck5vdyhzcGFuPzogU3BhbiB8IFNwYW5Db250ZXh0KTogUHJvbWlzZTxudW1iZXI+IHtcbiAgICAgICAgY29uc3QgdGltZURlbHRhID0gYXdhaXQgdGhpcy5zZXJ2ZXJUaW1lRGVsdGEoc3Bhbik7XG4gICAgICAgIHJldHVybiBEYXRlLm5vdygpICsgdGltZURlbHRhO1xuICAgIH1cblxuICAgIGRyb3BTZXJ2ZXJUaW1lRGVsdGEoKSB7XG4gICAgICAgIGlmICh0aGlzLnNlcnZlckluZm8pIHtcbiAgICAgICAgICAgIHRoaXMuc2VydmVySW5mby50aW1lRGVsdGEgPSBudWxsO1xuICAgICAgICB9XG4gICAgfVxuXG4gICAgZ2VuZXJhdGVPcGVyYXRpb25JZCgpOiBzdHJpbmcge1xuICAgICAgICB0aGlzLm9wZXJhdGlvbklkU3VmZml4ICs9IDE7XG4gICAgICAgIHJldHVybiBgJHt0aGlzLm9wZXJhdGlvbklkUHJlZml4fSR7dGhpcy5vcGVyYXRpb25JZFN1ZmZpeC50b1N0cmluZygxNil9YDtcbiAgICB9XG5cbiAgICBhc3luYyBmaW5pc2hPcGVyYXRpb25zKG9wZXJhdGlvbklkczogc3RyaW5nW10pIHtcbiAgICAgICAgaWYgKG9wZXJhdGlvbklkcy5sZW5ndGggPT09IDApIHtcbiAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgfVxuICAgICAgICBpZiAoIShhd2FpdCB0aGlzLmdldFNlcnZlckluZm8oKSkuc3VwcG9ydHNPcGVyYXRpb25JZCkge1xuICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICB9XG4gICAgICAgIGF3YWl0IHRoaXMuZ3JhcGhxbE11dGF0aW9uKGBtdXRhdGlvbiBmaW5pc2hPcGVyYXRpb25zKCRvcGVyYXRpb25JZHM6IFtTdHJpbmddKSB7XG4gICAgICAgICAgICAgICAgZmluaXNoT3BlcmF0aW9ucyhvcGVyYXRpb25JZHM6ICRvcGVyYXRpb25JZHMpXG4gICAgICAgICAgICB9YCwge1xuICAgICAgICAgICAgb3BlcmF0aW9uSWRzLFxuICAgICAgICB9KTtcbiAgICB9XG5cbiAgICBhc3luYyBnZXRBY2NvdW50c0NvdW50KHBhcmVudFNwYW4/OiAoU3BhbiB8IFNwYW5Db250ZXh0KSk6IFByb21pc2U8bnVtYmVyPiB7XG4gICAgICAgIGNvbnN0IHJlc3VsdCA9IGF3YWl0IHRoaXMucXVlcnkoJ3F1ZXJ5e2dldEFjY291bnRzQ291bnR9JywgdW5kZWZpbmVkLCBwYXJlbnRTcGFuKTtcbiAgICAgICAgcmV0dXJuIHJlc3VsdC5kYXRhLmdldEFjY291bnRzQ291bnQ7XG4gICAgfVxuXG4gICAgYXN5bmMgZ2V0VHJhbnNhY3Rpb25zQ291bnQocGFyZW50U3Bhbj86IChTcGFuIHwgU3BhbkNvbnRleHQpKTogUHJvbWlzZTxudW1iZXI+IHtcbiAgICAgICAgY29uc3QgcmVzdWx0ID0gYXdhaXQgdGhpcy5xdWVyeSgncXVlcnl7Z2V0VHJhbnNhY3Rpb25zQ291bnR9JywgdW5kZWZpbmVkLCBwYXJlbnRTcGFuKTtcbiAgICAgICAgcmV0dXJuIHJlc3VsdC5kYXRhLmdldFRyYW5zYWN0aW9uc0NvdW50O1xuICAgIH1cblxuICAgIGFzeW5jIGdldEFjY291bnRzVG90YWxCYWxhbmNlKHBhcmVudFNwYW4/OiAoU3BhbiB8IFNwYW5Db250ZXh0KSk6IFByb21pc2U8c3RyaW5nPiB7XG4gICAgICAgIGNvbnN0IHJlc3VsdCA9IGF3YWl0IHRoaXMucXVlcnkoJ3F1ZXJ5e2dldEFjY291bnRzVG90YWxCYWxhbmNlfScsIHVuZGVmaW5lZCwgcGFyZW50U3Bhbik7XG4gICAgICAgIHJldHVybiByZXN1bHQuZGF0YS5nZXRBY2NvdW50c1RvdGFsQmFsYW5jZTtcbiAgICB9XG5cbiAgICBhc3luYyBwb3N0UmVxdWVzdHMocmVxdWVzdHM6IFJlcXVlc3RbXSwgcGFyZW50U3Bhbj86IChTcGFuIHwgU3BhbkNvbnRleHQpKTogUHJvbWlzZTxhbnk+IHtcbiAgICAgICAgcmV0dXJuIHRoaXMuY29udGV4dC50cmFjZSgncXVlcmllcy5wb3N0UmVxdWVzdHMnLCBhc3luYyAoc3BhbikgPT4ge1xuICAgICAgICAgICAgcmV0dXJuIHRoaXMuZ3JhcGhxbE11dGF0aW9uKGBtdXRhdGlvbiBwb3N0UmVxdWVzdHMoJHJlcXVlc3RzOiBbUmVxdWVzdF0pIHtcbiAgICAgICAgICAgICAgICBwb3N0UmVxdWVzdHMocmVxdWVzdHM6ICRyZXF1ZXN0cylcbiAgICAgICAgICAgIH1gLCB7XG4gICAgICAgICAgICAgICAgcmVxdWVzdHMsXG4gICAgICAgICAgICB9LCBzcGFuKTtcbiAgICAgICAgfSwgcGFyZW50U3Bhbik7XG4gICAgfVxuXG4gICAgYXN5bmMgbXV0YXRpb24oXG4gICAgICAgIHFsOiBzdHJpbmcsXG4gICAgICAgIHZhcmlhYmxlczogeyBbc3RyaW5nXTogYW55IH0gPSB7fSxcbiAgICAgICAgcGFyZW50U3Bhbj86IChTcGFuIHwgU3BhbkNvbnRleHQpLFxuICAgICk6IFByb21pc2U8YW55PiB7XG4gICAgICAgIHJldHVybiB0aGlzLmNvbnRleHQudHJhY2UoJ3F1ZXJpZXMubXV0YXRpb24nLCBhc3luYyAoc3BhbjogU3BhbikgPT4ge1xuICAgICAgICAgICAgc3Bhbi5zZXRUYWcoJ3BhcmFtcycsIHtcbiAgICAgICAgICAgICAgICBtdXRhdGlvbjogcWwsXG4gICAgICAgICAgICAgICAgdmFyaWFibGVzLFxuICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICByZXR1cm4gdGhpcy5ncmFwaHFsTXV0YXRpb24ocWwsIHZhcmlhYmxlcywgc3Bhbik7XG4gICAgICAgIH0sIHBhcmVudFNwYW4pO1xuICAgIH1cblxuICAgIGFzeW5jIHF1ZXJ5KFxuICAgICAgICBxbDogc3RyaW5nLFxuICAgICAgICB2YXJpYWJsZXM6IHsgW3N0cmluZ106IGFueSB9ID0ge30sXG4gICAgICAgIHBhcmVudFNwYW4/OiAoU3BhbiB8IFNwYW5Db250ZXh0KSxcbiAgICAgICAgdGltZW91dD86IG51bWJlcixcbiAgICApOiBQcm9taXNlPGFueT4ge1xuICAgICAgICByZXR1cm4gdGhpcy5jb250ZXh0LnRyYWNlKCdxdWVyaWVzLnF1ZXJ5JywgYXN5bmMgKHNwYW46IFNwYW4pID0+IHtcbiAgICAgICAgICAgIHNwYW4uc2V0VGFnKCdwYXJhbXMnLCB7XG4gICAgICAgICAgICAgICAgcXVlcnk6IHFsLFxuICAgICAgICAgICAgICAgIHZhcmlhYmxlcyxcbiAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgcmV0dXJuIHRoaXMuZ3JhcGhxbFF1ZXJ5KHFsLCB2YXJpYWJsZXMsIHNwYW4sIHRpbWVvdXQpO1xuICAgICAgICB9LCBwYXJlbnRTcGFuKTtcbiAgICB9XG5cbiAgICBhc3luYyBncmFwaHFsTXV0YXRpb24ocWw6IHN0cmluZywgdmFyaWFibGVzOiB7IFtzdHJpbmddOiBhbnkgfSA9IHt9LCBzcGFuOiBTcGFuKTogUHJvbWlzZTxhbnk+IHtcbiAgICAgICAgY29uc3QgbXV0YXRpb24gPSBncWwoW3FsXSk7XG4gICAgICAgIHJldHVybiB0aGlzLmdyYXBoUWwoKGNsaWVudCkgPT4gY2xpZW50Lm11dGF0ZSh7XG4gICAgICAgICAgICBtdXRhdGlvbixcbiAgICAgICAgICAgIHZhcmlhYmxlcyxcbiAgICAgICAgICAgIGNvbnRleHQ6IHtcbiAgICAgICAgICAgICAgICB0cmFjZVNwYW46IHNwYW4sXG4gICAgICAgICAgICB9LFxuICAgICAgICB9KSk7XG4gICAgfVxuXG4gICAgc3RhdGljIGlzTmV0d29ya0Vycm9yKGVycm9yOiBhbnkpOiBib29sZWFuIHtcbiAgICAgICAgaWYgKGVycm9yLmNvZGUgPT09IFRPTkVycm9yQ29kZS5RVUVSWV9GT1JDSUJMWV9BQk9SVEVEKSB7XG4gICAgICAgICAgICByZXR1cm4gdHJ1ZTtcbiAgICAgICAgfVxuICAgICAgICBjb25zdCBuZXR3b3JrRXJyb3IgPSBlcnJvci5uZXR3b3JrRXJyb3I7XG4gICAgICAgIGlmICghbmV0d29ya0Vycm9yKSB7XG4gICAgICAgICAgICByZXR1cm4gZmFsc2U7XG4gICAgICAgIH1cbiAgICAgICAgaWYgKCdlcnJubycgaW4gbmV0d29ya0Vycm9yKSB7XG4gICAgICAgICAgICByZXR1cm4gdHJ1ZTtcbiAgICAgICAgfVxuICAgICAgICByZXR1cm4gISgncmVzcG9uc2UnIGluIG5ldHdvcmtFcnJvciB8fCAncmVzdWx0JyBpbiBuZXR3b3JrRXJyb3IpO1xuICAgIH1cblxuICAgIGFzeW5jIGdyYXBocWxRdWVyeShcbiAgICAgICAgcWw6IHN0cmluZyxcbiAgICAgICAgdmFyaWFibGVzOiB7IFtzdHJpbmddOiBhbnkgfSA9IHt9LFxuICAgICAgICBzcGFuOiBTcGFuLFxuICAgICAgICB0aW1lb3V0PzogbnVtYmVyLFxuICAgICk6IFByb21pc2U8YW55PiB7XG4gICAgICAgIGNvbnN0IHF1ZXJ5ID0gZ3FsKFtxbF0pO1xuICAgICAgICBsZXQgbmV4dFRpbWVvdXQgPSAxMDA7XG4gICAgICAgIGNvbnN0IHN0YXJ0VGltZSA9IERhdGUubm93KCk7XG4gICAgICAgIGxldCBmb3JjZVRlcm1pbmF0ZUV4dHJhVGltZW91dCA9IDUwMDA7XG4gICAgICAgIGNvbnN0IGZvcmNlVGVybWluYXRlVGltZW91dCA9IHRpbWVvdXQgfHwgdGhpcy5jb25maWcud2FpdEZvclRpbWVvdXQoKTtcbiAgICAgICAgd2hpbGUgKHRydWUpIHtcbiAgICAgICAgICAgIHRyeSB7XG4gICAgICAgICAgICAgICAgY29uc3QgY2xpZW50ID0gYXdhaXQgdGhpcy5ncmFwaHFsQ2xpZW50UmVxdWlyZWQoc3Bhbik7XG4gICAgICAgICAgICAgICAgY29uc3QgY29udGV4dDogYW55ID0ge1xuICAgICAgICAgICAgICAgICAgICB0cmFjZVNwYW46IHNwYW4sXG4gICAgICAgICAgICAgICAgICAgIGZldGNoT3B0aW9uczoge1xuICAgICAgICAgICAgICAgICAgICAgICAgcXVlcnlUaW1lb3V0OiBNYXRoLm1pbihcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBmb3JjZVRlcm1pbmF0ZVRpbWVvdXQgKyBmb3JjZVRlcm1pbmF0ZUV4dHJhVGltZW91dCxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBNQVhfVElNRU9VVCxcbiAgICAgICAgICAgICAgICAgICAgICAgICksXG4gICAgICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgfTtcbiAgICAgICAgICAgICAgICByZXR1cm4gYXdhaXQgY2xpZW50LnF1ZXJ5KHtcbiAgICAgICAgICAgICAgICAgICAgcXVlcnksXG4gICAgICAgICAgICAgICAgICAgIHZhcmlhYmxlcyxcbiAgICAgICAgICAgICAgICAgICAgY29udGV4dCxcbiAgICAgICAgICAgICAgICB9KTtcbiAgICAgICAgICAgIH0gY2F0Y2ggKGVycm9yKSB7XG4gICAgICAgICAgICAgICAgbGV0IHJlc29sdmVkRXJyb3IgPSBhd2FpdCB0aGlzLnJlc29sdmVHcmFwaFFMRXJyb3IoZXJyb3IpO1xuICAgICAgICAgICAgICAgIGlmIChUT05RdWVyaWVzTW9kdWxlLmlzTmV0d29ya0Vycm9yKHJlc29sdmVkRXJyb3IpXG4gICAgICAgICAgICAgICAgICAgICYmICF0aGlzLmNvbmZpZy5pc05ldHdvcmtUaW1lb3V0RXhwaXJlZFNpbmNlKHN0YXJ0VGltZSkpIHtcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5jb25maWcubG9nKHJlc29sdmVkRXJyb3IpO1xuICAgICAgICAgICAgICAgICAgICBjb25zdCByZXRyeURlbGF5VGltZW91dCA9IG5leHRUaW1lb3V0O1xuICAgICAgICAgICAgICAgICAgICBhd2FpdCBuZXcgUHJvbWlzZShyZXNvbHZlID0+IHNldFRpbWVvdXQocmVzb2x2ZSwgcmV0cnlEZWxheVRpbWVvdXQpKTtcbiAgICAgICAgICAgICAgICAgICAgaWYgKG5leHRUaW1lb3V0IDwgMzIwMCkge1xuICAgICAgICAgICAgICAgICAgICAgICAgbmV4dFRpbWVvdXQgKj0gMjtcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICBpZiAoZm9yY2VUZXJtaW5hdGVFeHRyYVRpbWVvdXQgPCB0aGlzLmNvbmZpZy53YWl0Rm9yVGltZW91dCgpKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICBmb3JjZVRlcm1pbmF0ZUV4dHJhVGltZW91dCArPSA1MDAwO1xuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgICAgICAgdGhyb3cgcmVzb2x2ZWRFcnJvcjtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICBhc3luYyByZXNvbHZlR3JhcGhRTEVycm9yKGVycm9yOiBhbnkpIHtcbiAgICAgICAgY29uc3QgZ3FsRXJyID0gZXJyb3IuZ3JhcGhRTEVycm9ycyAmJiBlcnJvci5ncmFwaFFMRXJyb3JzWzBdO1xuICAgICAgICBpZiAoZ3FsRXJyKSB7XG4gICAgICAgICAgICBjb25zdCBjbGllbnRFcnIgPSBuZXcgRXJyb3IoZ3FsRXJyLm1lc3NhZ2UpO1xuICAgICAgICAgICAgY29uc3QgZ3FsRXhjID0gKGdxbEVyci5leHRlbnNpb25zICYmIGdxbEVyci5leHRlbnNpb25zLmV4Y2VwdGlvbikgfHwge307XG4gICAgICAgICAgICAoY2xpZW50RXJyOiBhbnkpLm51bWJlciA9IGdxbEV4Yy5jb2RlIHx8IDA7XG4gICAgICAgICAgICAoY2xpZW50RXJyOiBhbnkpLmNvZGUgPSBncWxFeGMuY29kZSB8fCAwO1xuICAgICAgICAgICAgKGNsaWVudEVycjogYW55KS5zb3VyY2UgPSBncWxFeGMuc291cmNlIHx8ICdjbGllbnQnO1xuICAgICAgICAgICAgcmV0dXJuIGNsaWVudEVycjtcbiAgICAgICAgfVxuICAgICAgICBjb25zdCBlcnJvcnMgPSBlcnJvclxuICAgICAgICAgICAgJiYgZXJyb3IubmV0d29ya0Vycm9yXG4gICAgICAgICAgICAmJiBlcnJvci5uZXR3b3JrRXJyb3IucmVzdWx0XG4gICAgICAgICAgICAmJiBlcnJvci5uZXR3b3JrRXJyb3IucmVzdWx0LmVycm9ycztcbiAgICAgICAgaWYgKGVycm9ycykge1xuICAgICAgICAgICAgcmV0dXJuIFRPTkNsaWVudEVycm9yLnF1ZXJ5RmFpbGVkKGVycm9ycywgYXdhaXQgdGhpcy5jb21wbGV0ZUVycm9yRGF0YSgpKTtcbiAgICAgICAgfVxuICAgICAgICByZXR1cm4gZXJyb3I7XG4gICAgfVxuXG4gICAgYXN5bmMgZ3JhcGhRbChyZXF1ZXN0OiAoY2xpZW50OiBBcG9sbG9DbGllbnQpID0+IFByb21pc2U8YW55Piwgc3BhbjogU3Bhbik6IFByb21pc2U8YW55PiB7XG4gICAgICAgIGNvbnN0IGNsaWVudCA9IGF3YWl0IHRoaXMuZ3JhcGhxbENsaWVudFJlcXVpcmVkKHNwYW4pO1xuICAgICAgICB0cnkge1xuICAgICAgICAgICAgcmV0dXJuIGF3YWl0IHJlcXVlc3QoY2xpZW50KTtcbiAgICAgICAgfSBjYXRjaCAoZXJyb3IpIHtcbiAgICAgICAgICAgIHRocm93IGF3YWl0IHRoaXMucmVzb2x2ZUdyYXBoUUxFcnJvcihlcnJvcik7XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICBhc3luYyBncmFwaHFsQ2xpZW50UmVxdWlyZWQocGFyZW50U3Bhbj86IFNwYW4gfCBTcGFuQ29udGV4dCk6IFByb21pc2U8QXBvbGxvQ2xpZW50PiB7XG4gICAgICAgIGlmICh0aGlzLmdyYXBocWxDbGllbnQpIHtcbiAgICAgICAgICAgIHJldHVybiB0aGlzLmdyYXBocWxDbGllbnQ7XG4gICAgICAgIH1cbiAgICAgICAgaWYgKHRoaXMuZ3JhcGhxbENsaWVudENyZWF0aW9uKSB7XG4gICAgICAgICAgICBhd2FpdCB0aGlzLmdyYXBocWxDbGllbnRDcmVhdGlvbi5saXN0ZW4oKTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIGNvbnN0IGNyZWF0aW9uID0gbmV3IE11bHRpY2FzdFByb21pc2UoKTtcbiAgICAgICAgICAgIHRoaXMuZ3JhcGhxbENsaWVudENyZWF0aW9uID0gY3JlYXRpb247XG4gICAgICAgICAgICB0cnkge1xuICAgICAgICAgICAgICAgIGF3YWl0IHRoaXMuY29udGV4dC50cmFjZSgnc2V0dXAgY2xpZW50JywgKHNwYW4pID0+IHtcbiAgICAgICAgICAgICAgICAgICAgcmV0dXJuIHRoaXMuY3JlYXRlR3JhcGhxbENsaWVudChzcGFuKTtcbiAgICAgICAgICAgICAgICB9LCBwYXJlbnRTcGFuKTtcbiAgICAgICAgICAgICAgICB0aGlzLmdyYXBocWxDbGllbnRDcmVhdGlvbiA9IG51bGw7XG4gICAgICAgICAgICAgICAgY3JlYXRpb24ucmVzb2x2ZSh0aGlzLmdyYXBocWxDbGllbnQpO1xuICAgICAgICAgICAgfSBjYXRjaCAoZXJyb3IpIHtcbiAgICAgICAgICAgICAgICB0aGlzLmdyYXBocWxDbGllbnRDcmVhdGlvbiA9IG51bGw7XG4gICAgICAgICAgICAgICAgY3JlYXRpb24ucmVqZWN0KGVycm9yKTtcbiAgICAgICAgICAgICAgICB0aHJvdyBlcnJvcjtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgICByZXR1cm4gdGhpcy5ncmFwaHFsQ2xpZW50O1xuICAgIH1cblxuICAgIGFzeW5jIGNyZWF0ZUdyYXBocWxDbGllbnQoc3BhbjogU3BhbiB8IFNwYW5Db250ZXh0KSB7XG4gICAgICAgIGNvbnN0IHVzZUh0dHAgPSAhdGhpcy5jb25maWcuZGF0YS51c2VXZWJTb2NrZXRGb3JRdWVyaWVzO1xuICAgICAgICBsZXQgY2xpZW50Q29uZmlnID0gYXdhaXQgdGhpcy5nZXRDbGllbnRDb25maWcoKTtcbiAgICAgICAgbGV0IHdzTGluazogP1dlYlNvY2tldExpbmsgPSBudWxsO1xuICAgICAgICBsZXQgaHR0cExpbms6ID9IdHRwTGluayA9IG51bGw7XG5cbiAgICAgICAgY29uc3Qgc3Vic09wdGlvbnMgPSB0aGlzLmNvbmZpZy50cmFjZXIuaW5qZWN0KHNwYW4sIEZPUk1BVF9URVhUX01BUCwge30pO1xuICAgICAgICBjb25zdCBzdWJzY3JpcHRpb25DbGllbnQgPSBuZXcgU3Vic2NyaXB0aW9uQ2xpZW50KFxuICAgICAgICAgICAgY2xpZW50Q29uZmlnLndzVXJsLFxuICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgIHRpbWVvdXQ6IEtFRVBfQUxJVkVfVElNRU9VVCxcbiAgICAgICAgICAgICAgICByZWNvbm5lY3Q6IHRydWUsXG4gICAgICAgICAgICAgICAgY29ubmVjdGlvblBhcmFtczogKCkgPT4gKHtcbiAgICAgICAgICAgICAgICAgICAgYWNjZXNzS2V5OiB0aGlzLmNvbmZpZy5kYXRhICYmIHRoaXMuY29uZmlnLmRhdGEuYWNjZXNzS2V5LFxuICAgICAgICAgICAgICAgICAgICBoZWFkZXJzOiBzdWJzT3B0aW9ucyxcbiAgICAgICAgICAgICAgICB9KSxcbiAgICAgICAgICAgIH0sXG4gICAgICAgICAgICBjbGllbnRDb25maWcuV2ViU29ja2V0LFxuICAgICAgICApO1xuICAgICAgICBzdWJzY3JpcHRpb25DbGllbnQub25SZWNvbm5lY3RlZCgoKSA9PiB7XG4gICAgICAgICAgICBjb25zb2xlLmxvZygnW1RPTkNsaWVudC5xdWVyaWVzXScsICdXZWJTb2NrZXQgUmVjb25uZWN0ZWQnKTtcbiAgICAgICAgfSk7XG4gICAgICAgIGxldCBkZXRlY3RpbmdSZWRpcmVjdGlvbiA9IGZhbHNlO1xuICAgICAgICBzdWJzY3JpcHRpb25DbGllbnQub25FcnJvcigoKSA9PiB7XG4gICAgICAgICAgICBjb25zb2xlLmxvZygnW1RPTkNsaWVudC5xdWVyaWVzXScsICdXZWJTb2NrZXQgRmFpbGVkJyk7XG4gICAgICAgICAgICBpZiAoZGV0ZWN0aW5nUmVkaXJlY3Rpb24pIHtcbiAgICAgICAgICAgICAgICByZXR1cm47XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICAoYXN5bmMgKCkgPT4ge1xuICAgICAgICAgICAgICAgIGRldGVjdGluZ1JlZGlyZWN0aW9uID0gdHJ1ZTtcbiAgICAgICAgICAgICAgICB0cnkge1xuICAgICAgICAgICAgICAgICAgICBjb25zdCBuZXdDb25maWcgPSBhd2FpdCB0aGlzLmdldENsaWVudENvbmZpZygpO1xuICAgICAgICAgICAgICAgICAgICBjb25zdCBjb25maWdJc0NoYW5nZWQgPSBuZXdDb25maWcuaHR0cFVybCAhPT0gY2xpZW50Q29uZmlnLmh0dHBVcmxcbiAgICAgICAgICAgICAgICAgICAgICAgIHx8IG5ld0NvbmZpZy53c1VybCAhPT0gY2xpZW50Q29uZmlnLndzVXJsO1xuICAgICAgICAgICAgICAgICAgICBpZiAoY29uZmlnSXNDaGFuZ2VkKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICBjb25zb2xlLmxvZygnW1RPTkNsaWVudC5xdWVyaWVzXScsICdDbGllbnQgY29uZmlnIGNoYW5nZWQnKTtcbiAgICAgICAgICAgICAgICAgICAgICAgIGNsaWVudENvbmZpZyA9IG5ld0NvbmZpZztcbiAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMuZ3JhcGhxbENsaWVudENvbmZpZyA9IGNsaWVudENvbmZpZztcbiAgICAgICAgICAgICAgICAgICAgICAgIHN1YnNjcmlwdGlvbkNsaWVudC51cmwgPSBuZXdDb25maWcud3NVcmw7XG4gICAgICAgICAgICAgICAgICAgICAgICBpZiAod3NMaW5rKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgd3NMaW5rLnVybCA9IG5ld0NvbmZpZy53c1VybDtcbiAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICAgIGlmIChodHRwTGluaykge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGh0dHBMaW5rLnVyaSA9IG5ld0NvbmZpZy5odHRwVXJsO1xuICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgfSBjYXRjaCAoZXJyKSB7XG4gICAgICAgICAgICAgICAgICAgIGNvbnNvbGUubG9nKCdbVE9OQ2xpZW50LnF1ZXJpZXNdIHJlZGlyZWN0aW9uIGRldGVjdG9yIGZhaWxlZCcsIGVycik7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIGRldGVjdGluZ1JlZGlyZWN0aW9uID0gZmFsc2U7XG4gICAgICAgICAgICB9KSgpO1xuICAgICAgICB9KTtcbiAgICAgICAgc3Vic2NyaXB0aW9uQ2xpZW50Lm1heENvbm5lY3RUaW1lR2VuZXJhdG9yLmR1cmF0aW9uID0gKCkgPT4ge1xuICAgICAgICAgICAgcmV0dXJuIHN1YnNjcmlwdGlvbkNsaWVudC5tYXhDb25uZWN0VGltZUdlbmVyYXRvci5tYXg7XG4gICAgICAgIH07XG5cbiAgICAgICAgY29uc3QgdHJhY2VyTGluayA9IGF3YWl0IHNldENvbnRleHQoKF8sIHJlcSkgPT4ge1xuICAgICAgICAgICAgY29uc3QgcmVzb2x2ZWRTcGFuID0gKHJlcSAmJiByZXEudHJhY2VTcGFuKSB8fCBzcGFuO1xuICAgICAgICAgICAgcmVxLmhlYWRlcnMgPSB7fTtcbiAgICAgICAgICAgIHRoaXMuY29uZmlnLnRyYWNlci5pbmplY3QocmVzb2x2ZWRTcGFuLCBGT1JNQVRfVEVYVF9NQVAsIHJlcS5oZWFkZXJzKTtcbiAgICAgICAgICAgIGNvbnN0IGFjY2Vzc0tleSA9IHRoaXMuY29uZmlnLmRhdGEgJiYgdGhpcy5jb25maWcuZGF0YS5hY2Nlc3NLZXk7XG4gICAgICAgICAgICBpZiAoYWNjZXNzS2V5KSB7XG4gICAgICAgICAgICAgICAgcmVxLmhlYWRlcnMuYWNjZXNzS2V5ID0gYWNjZXNzS2V5O1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgcmV0dXJuIHtcbiAgICAgICAgICAgICAgICBoZWFkZXJzOiByZXEuaGVhZGVycyxcbiAgICAgICAgICAgIH07XG4gICAgICAgIH0pO1xuICAgICAgICBjb25zdCB3cmFwTGluayA9IChsaW5rOiBBcG9sbG9MaW5rKTogQXBvbGxvTGluayA9PiB0cmFjZXJMaW5rLmNvbmNhdChsaW5rKTtcbiAgICAgICAgY29uc3QgaXNTdWJzY3JpcHRpb24gPSAoeyBxdWVyeSB9KSA9PiB7XG4gICAgICAgICAgICBjb25zdCBkZWZpbml0aW9uID0gZ2V0TWFpbkRlZmluaXRpb24ocXVlcnkpO1xuICAgICAgICAgICAgcmV0dXJuIChcbiAgICAgICAgICAgICAgICBkZWZpbml0aW9uLmtpbmQgPT09ICdPcGVyYXRpb25EZWZpbml0aW9uJ1xuICAgICAgICAgICAgICAgICYmIGRlZmluaXRpb24ub3BlcmF0aW9uID09PSAnc3Vic2NyaXB0aW9uJ1xuICAgICAgICAgICAgKTtcbiAgICAgICAgfTtcblxuICAgICAgICB3c0xpbmsgPSBuZXcgV2ViU29ja2V0TGluayhzdWJzY3JpcHRpb25DbGllbnQpO1xuICAgICAgICBodHRwTGluayA9IHVzZUh0dHBcbiAgICAgICAgICAgID8gbmV3IEh0dHBMaW5rKHtcbiAgICAgICAgICAgICAgICB1cmk6IGNsaWVudENvbmZpZy5odHRwVXJsLFxuICAgICAgICAgICAgICAgIGZldGNoOiBhYm9ydGFibGVGZXRjaChjbGllbnRDb25maWcuZmV0Y2gpLFxuICAgICAgICAgICAgfSlcbiAgICAgICAgICAgIDogbnVsbDtcbiAgICAgICAgY29uc3QgbGluayA9IGh0dHBMaW5rXG4gICAgICAgICAgICA/IHNwbGl0KGlzU3Vic2NyaXB0aW9uLCB3cmFwTGluayh3c0xpbmspLCB3cmFwTGluayhodHRwTGluaykpXG4gICAgICAgICAgICA6IHdyYXBMaW5rKHdzTGluayk7XG4gICAgICAgIHRoaXMuZ3JhcGhxbENsaWVudENvbmZpZyA9IGNsaWVudENvbmZpZztcbiAgICAgICAgdGhpcy5ncmFwaHFsQ2xpZW50ID0gbmV3IEFwb2xsb0NsaWVudCh7XG4gICAgICAgICAgICBjYWNoZTogbmV3IEluTWVtb3J5Q2FjaGUoe30pLFxuICAgICAgICAgICAgbGluayxcbiAgICAgICAgICAgIGRlZmF1bHRPcHRpb25zOiB7XG4gICAgICAgICAgICAgICAgd2F0Y2hRdWVyeToge1xuICAgICAgICAgICAgICAgICAgICBmZXRjaFBvbGljeTogJ25vLWNhY2hlJyxcbiAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgIHF1ZXJ5OiB7XG4gICAgICAgICAgICAgICAgICAgIGZldGNoUG9saWN5OiAnbm8tY2FjaGUnLFxuICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICB9LFxuICAgICAgICB9KTtcbiAgICB9XG5cbiAgICBhc3luYyBjbG9zZSgpIHtcbiAgICAgICAgaWYgKHRoaXMuZ3JhcGhxbENsaWVudCkge1xuICAgICAgICAgICAgY29uc3QgY2xpZW50ID0gdGhpcy5ncmFwaHFsQ2xpZW50O1xuICAgICAgICAgICAgdGhpcy5ncmFwaHFsQ2xpZW50ID0gbnVsbDtcbiAgICAgICAgICAgIGNsaWVudC5zdG9wKCk7XG4gICAgICAgICAgICBhd2FpdCBjbGllbnQuY2xlYXJTdG9yZSgpO1xuICAgICAgICB9XG4gICAgfVxufVxuXG5cbmNsYXNzIFRPTlF1ZXJpZXNNb2R1bGVDb2xsZWN0aW9uIGltcGxlbWVudHMgVE9OUUNvbGxlY3Rpb24ge1xuICAgIG1vZHVsZTogVE9OUXVlcmllc01vZHVsZTtcblxuICAgIGNvbGxlY3Rpb25OYW1lOiBzdHJpbmc7XG5cbiAgICB0eXBlTmFtZTogc3RyaW5nO1xuXG4gICAgY29uc3RydWN0b3IoXG4gICAgICAgIG1vZHVsZTogVE9OUXVlcmllc01vZHVsZSxcbiAgICAgICAgY29sbGVjdGlvbk5hbWU6IHN0cmluZyxcbiAgICAgICAgdHlwZU5hbWU6IHN0cmluZyxcbiAgICApIHtcbiAgICAgICAgdGhpcy5tb2R1bGUgPSBtb2R1bGU7XG4gICAgICAgIHRoaXMuY29sbGVjdGlvbk5hbWUgPSBjb2xsZWN0aW9uTmFtZTtcbiAgICAgICAgdGhpcy50eXBlTmFtZSA9IHR5cGVOYW1lO1xuICAgIH1cblxuICAgIGFzeW5jIHF1ZXJ5KFxuICAgICAgICAuLi5hcmdzXG4gICAgICAgIC8qXG4gICAgICAgICAgICBmaWx0ZXJPclBhcmFtczogYW55IHwgVE9OUXVlcnlQYXJhbXMsXG4gICAgICAgICAgICByZXN1bHQ6IHN0cmluZyxcbiAgICAgICAgICAgIG9yZGVyQnk/OiBPcmRlckJ5W10sXG4gICAgICAgICAgICBsaW1pdD86IG51bWJlcixcbiAgICAgICAgICAgIHRpbWVvdXQ/OiBudW1iZXIsXG4gICAgICAgICAgICBwYXJlbnRTcGFuPzogKFNwYW4gfCBTcGFuQ29udGV4dClcbiAgICAgICAgICovXG4gICAgKTogUHJvbWlzZTxhbnk+IHtcbiAgICAgICAgY29uc3Qge1xuICAgICAgICAgICAgZmlsdGVyLFxuICAgICAgICAgICAgcmVzdWx0LFxuICAgICAgICAgICAgb3JkZXJCeSxcbiAgICAgICAgICAgIGxpbWl0LFxuICAgICAgICAgICAgdGltZW91dCxcbiAgICAgICAgICAgIG9wZXJhdGlvbklkLFxuICAgICAgICAgICAgcGFyZW50U3BhbixcbiAgICAgICAgfSA9IHJlc29sdmVQYXJhbXM8VE9OUXVlcnlQYXJhbXM+KGFyZ3MsICdmaWx0ZXInLCAoKSA9PiAoe1xuICAgICAgICAgICAgZmlsdGVyOiBhcmdzWzBdLFxuICAgICAgICAgICAgcmVzdWx0OiAoYXJnc1sxXTogYW55KSxcbiAgICAgICAgICAgIG9yZGVyQnk6IChhcmdzWzJdOiBhbnkpLFxuICAgICAgICAgICAgbGltaXQ6IChhcmdzWzNdOiBhbnkpLFxuICAgICAgICAgICAgdGltZW91dDogKGFyZ3NbNF06IGFueSksXG4gICAgICAgICAgICBwYXJlbnRTcGFuOiBhcmdzWzVdLFxuICAgICAgICB9KSk7XG4gICAgICAgIHJldHVybiB0aGlzLm1vZHVsZS5jb250ZXh0LnRyYWNlKGAke3RoaXMuY29sbGVjdGlvbk5hbWV9LnF1ZXJ5YCwgYXN5bmMgKHNwYW4pID0+IHtcbiAgICAgICAgICAgIHNwYW4uc2V0VGFnKCdwYXJhbXMnLCB7XG4gICAgICAgICAgICAgICAgZmlsdGVyLFxuICAgICAgICAgICAgICAgIHJlc3VsdCxcbiAgICAgICAgICAgICAgICBvcmRlckJ5LFxuICAgICAgICAgICAgICAgIGxpbWl0LFxuICAgICAgICAgICAgICAgIHRpbWVvdXQsXG4gICAgICAgICAgICAgICAgb3BlcmF0aW9uSWQsXG4gICAgICAgICAgICB9KTtcbiAgICAgICAgICAgIGNvbnN0IHVzZU9wZXJhdGlvbklkID0gb3BlcmF0aW9uSWRcbiAgICAgICAgICAgICAgICAmJiAoYXdhaXQgdGhpcy5tb2R1bGUuZ2V0U2VydmVySW5mbyhzcGFuKSkuc3VwcG9ydHNPcGVyYXRpb25JZDtcbiAgICAgICAgICAgIGNvbnN0IGMgPSB0aGlzLmNvbGxlY3Rpb25OYW1lO1xuICAgICAgICAgICAgY29uc3QgdCA9IHRoaXMudHlwZU5hbWU7XG4gICAgICAgICAgICBjb25zdCBxbCA9IGBcbiAgICAgICAgICAgIHF1ZXJ5ICR7Y30oXG4gICAgICAgICAgICAgICAgJGZpbHRlcjogJHt0fUZpbHRlcixcbiAgICAgICAgICAgICAgICAkb3JkZXJCeTogW1F1ZXJ5T3JkZXJCeV0sIFxuICAgICAgICAgICAgICAgICRsaW1pdDogSW50LCBcbiAgICAgICAgICAgICAgICAkdGltZW91dDogRmxvYXRcbiAgICAgICAgICAgICAgICAke3VzZU9wZXJhdGlvbklkID8gJywgJG9wZXJhdGlvbklkOiBTdHJpbmcnIDogJyd9XG4gICAgICAgICAgICAgKSB7XG4gICAgICAgICAgICAgICAgJHtjfShcbiAgICAgICAgICAgICAgICAgICAgZmlsdGVyOiAkZmlsdGVyLCBcbiAgICAgICAgICAgICAgICAgICAgb3JkZXJCeTogJG9yZGVyQnksIFxuICAgICAgICAgICAgICAgICAgICBsaW1pdDogJGxpbWl0LCBcbiAgICAgICAgICAgICAgICAgICAgdGltZW91dDogJHRpbWVvdXRcbiAgICAgICAgICAgICAgICAgICAgJHt1c2VPcGVyYXRpb25JZCA/ICcsIG9wZXJhdGlvbklkOiAkb3BlcmF0aW9uSWQnIDogJyd9XG4gICAgICAgICAgICAgICAgKSB7ICR7cmVzdWx0fSB9XG4gICAgICAgICAgICB9YDtcbiAgICAgICAgICAgIGNvbnN0IHZhcmlhYmxlczogeyBbc3RyaW5nXTogYW55IH0gPSB7XG4gICAgICAgICAgICAgICAgZmlsdGVyLFxuICAgICAgICAgICAgICAgIG9yZGVyQnksXG4gICAgICAgICAgICAgICAgbGltaXQsXG4gICAgICAgICAgICB9O1xuICAgICAgICAgICAgaWYgKHVzZU9wZXJhdGlvbklkKSB7XG4gICAgICAgICAgICAgICAgdmFyaWFibGVzLm9wZXJhdGlvbklkID0gb3BlcmF0aW9uSWQ7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBpZiAodGltZW91dCkge1xuICAgICAgICAgICAgICAgIHZhcmlhYmxlcy50aW1lb3V0ID0gTWF0aC5taW4oTUFYX1RJTUVPVVQsIHRpbWVvdXQpO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgcmV0dXJuIChhd2FpdCB0aGlzLm1vZHVsZS5ncmFwaHFsUXVlcnkocWwsIHZhcmlhYmxlcywgc3BhbiwgdGltZW91dCkpLmRhdGFbY107XG4gICAgICAgIH0sIHBhcmVudFNwYW4pO1xuICAgIH1cblxuICAgIGFzeW5jIGFnZ3JlZ2F0ZShcbiAgICAgICAgcGFyYW1zOiBUT05RdWVyeUFnZ3JlZ2F0ZVBhcmFtcyxcbiAgICApOiBQcm9taXNlPHN0cmluZ1tdPiB7XG4gICAgICAgIHJldHVybiB0aGlzLm1vZHVsZS5jb250ZXh0LnRyYWNlKGAke3RoaXMuY29sbGVjdGlvbk5hbWV9LmFnZ3JlZ2F0ZWAsIGFzeW5jIChzcGFuKSA9PiB7XG4gICAgICAgICAgICBzcGFuLnNldFRhZygncGFyYW1zJywge1xuICAgICAgICAgICAgICAgIGZpbHRlcjogcGFyYW1zLmZpbHRlcixcbiAgICAgICAgICAgICAgICBmaWVsZHM6IHBhcmFtcy5maWVsZHMsXG4gICAgICAgICAgICB9KTtcbiAgICAgICAgICAgIGlmICghKGF3YWl0IHRoaXMubW9kdWxlLmdldFNlcnZlckluZm8oc3BhbikpLnN1cHBvcnRzQWdncmVnYXRpb25zKSB7XG4gICAgICAgICAgICAgICAgdGhyb3cgVE9OQ2xpZW50RXJyb3Iuc2VydmVyRG9lc250U3VwcG9ydEFnZ3JlZ2F0aW9ucyhcbiAgICAgICAgICAgICAgICAgICAgYXdhaXQgdGhpcy5tb2R1bGUuY29tcGxldGVFcnJvckRhdGEoKSxcbiAgICAgICAgICAgICAgICApO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgY29uc3QgdCA9IHRoaXMudHlwZU5hbWU7XG4gICAgICAgICAgICBjb25zdCBxID0gdGhpcy50eXBlTmFtZS5lbmRzV2l0aCgncycpID8gYGFnZ3JlZ2F0ZSR7dH1gIDogYGFnZ3JlZ2F0ZSR7dH1zYDtcbiAgICAgICAgICAgIGNvbnN0IHFsID0gYFxuICAgICAgICAgICAgcXVlcnkgJHtxfShcbiAgICAgICAgICAgICAgICAkZmlsdGVyOiAke3R9RmlsdGVyLFxuICAgICAgICAgICAgICAgICRmaWVsZHM6IFtGaWVsZEFnZ3JlZ2F0aW9uXSBcbiAgICAgICAgICAgICApIHtcbiAgICAgICAgICAgICAgICAke3F9KFxuICAgICAgICAgICAgICAgICAgICBmaWx0ZXI6ICRmaWx0ZXIsIFxuICAgICAgICAgICAgICAgICAgICBmaWVsZHM6ICRmaWVsZHMgXG4gICAgICAgICAgICAgICAgKVxuICAgICAgICAgICAgfWA7XG4gICAgICAgICAgICBjb25zdCB2YXJpYWJsZXM6IHsgW3N0cmluZ106IGFueSB9ID0ge1xuICAgICAgICAgICAgICAgIGZpbHRlcjogcGFyYW1zLmZpbHRlcixcbiAgICAgICAgICAgICAgICBmaWVsZHM6IHBhcmFtcy5maWVsZHMsXG4gICAgICAgICAgICB9O1xuICAgICAgICAgICAgcmV0dXJuIChhd2FpdCB0aGlzLm1vZHVsZS5ncmFwaHFsUXVlcnkocWwsIHZhcmlhYmxlcywgc3BhbikpLmRhdGFbcV07XG4gICAgICAgIH0sIHBhcmFtcy5wYXJlbnRTcGFuKTtcbiAgICB9XG5cbiAgICBzdWJzY3JpYmUoXG4gICAgICAgIC4uLmFyZ3NcbiAgICAgICAgLypcbiAgICAgICAgZmlsdGVyT3JQYXJhbXM6IGFueSB8IFRPTlN1YnNjcmliZVBhcmFtcyxcbiAgICAgICAgcmVzdWx0Pzogc3RyaW5nLFxuICAgICAgICBvbkRvY0V2ZW50PzogRG9jRXZlbnQsXG4gICAgICAgIG9uRXJyb3I/OiAoZXJyOiBFcnJvcikgPT4gdm9pZFxuICAgICAgICAgKi9cbiAgICApOiBTdWJzY3JpcHRpb24ge1xuICAgICAgICBjb25zdCB7XG4gICAgICAgICAgICBmaWx0ZXIsXG4gICAgICAgICAgICByZXN1bHQsXG4gICAgICAgICAgICBvbkRvY0V2ZW50LFxuICAgICAgICAgICAgb25FcnJvcixcbiAgICAgICAgfSA9IHJlc29sdmVQYXJhbXM8VE9OU3Vic2NyaWJlUGFyYW1zPihhcmdzLCAnZmlsdGVyJywgKCkgPT4gKHtcbiAgICAgICAgICAgIGZpbHRlcjogYXJnc1swXSxcbiAgICAgICAgICAgIHJlc3VsdDogKGFyZ3NbMV06IGFueSksXG4gICAgICAgICAgICBvbkRvY0V2ZW50OiAoYXJnc1syXTogYW55KSxcbiAgICAgICAgICAgIG9uRXJyb3I6IChhcmdzWzNdOiBhbnkpLFxuICAgICAgICB9KSk7XG4gICAgICAgIGNvbnN0IHNwYW4gPSB0aGlzLm1vZHVsZS5jb25maWcudHJhY2VyLnN0YXJ0U3BhbignVE9OUXVlcmllc01vZHVsZS5qczpzdWJzY3JpYmUgJyk7XG4gICAgICAgIHNwYW4uc2V0VGFnKFRhZ3MuU1BBTl9LSU5ELCAnY2xpZW50Jyk7XG4gICAgICAgIGNvbnN0IHRleHQgPSBgc3Vic2NyaXB0aW9uICR7dGhpcy5jb2xsZWN0aW9uTmFtZX0oJGZpbHRlcjogJHt0aGlzLnR5cGVOYW1lfUZpbHRlcikge1xuICAgICAgICAgICAgJHt0aGlzLmNvbGxlY3Rpb25OYW1lfShmaWx0ZXI6ICRmaWx0ZXIpIHsgJHtyZXN1bHR9IH1cbiAgICAgICAgfWA7XG4gICAgICAgIGNvbnN0IHF1ZXJ5ID0gZ3FsKFt0ZXh0XSk7XG4gICAgICAgIGxldCBzdWJzY3JpcHRpb24gPSBudWxsO1xuICAgICAgICAoYXN5bmMgKCkgPT4ge1xuICAgICAgICAgICAgdHJ5IHtcbiAgICAgICAgICAgICAgICBjb25zdCBjbGllbnQgPSBhd2FpdCB0aGlzLm1vZHVsZS5ncmFwaHFsQ2xpZW50UmVxdWlyZWQoc3Bhbik7XG4gICAgICAgICAgICAgICAgY29uc3Qgb2JzZXJ2YWJsZSA9IGNsaWVudC5zdWJzY3JpYmUoe1xuICAgICAgICAgICAgICAgICAgICBxdWVyeSxcbiAgICAgICAgICAgICAgICAgICAgdmFyaWFibGVzOiB7XG4gICAgICAgICAgICAgICAgICAgICAgICBmaWx0ZXIsXG4gICAgICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICAgICAgc3Vic2NyaXB0aW9uID0gb2JzZXJ2YWJsZS5zdWJzY3JpYmUoKG1lc3NhZ2UpID0+IHtcbiAgICAgICAgICAgICAgICAgICAgb25Eb2NFdmVudCgnaW5zZXJ0L3VwZGF0ZScsIG1lc3NhZ2UuZGF0YVt0aGlzLmNvbGxlY3Rpb25OYW1lXSk7XG4gICAgICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICB9IGNhdGNoIChlcnJvcikge1xuICAgICAgICAgICAgICAgIHNwYW4ubG9nKHtcbiAgICAgICAgICAgICAgICAgICAgZXZlbnQ6ICdmYWlsZWQnLFxuICAgICAgICAgICAgICAgICAgICBwYXlsb2FkOiBlcnJvcixcbiAgICAgICAgICAgICAgICB9KTtcbiAgICAgICAgICAgICAgICBpZiAob25FcnJvcikge1xuICAgICAgICAgICAgICAgICAgICBvbkVycm9yKGVycm9yKTtcbiAgICAgICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAgICAgICBjb25zb2xlLmxvZygnVE9OIENsaWVudCBzdWJzY3JpcHRpb24gZXJyb3InLCBlcnJvcik7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuICAgICAgICB9KSgpO1xuICAgICAgICByZXR1cm4ge1xuICAgICAgICAgICAgdW5zdWJzY3JpYmU6ICgpID0+IHtcbiAgICAgICAgICAgICAgICBpZiAoc3Vic2NyaXB0aW9uKSB7XG4gICAgICAgICAgICAgICAgICAgIHN1YnNjcmlwdGlvbi51bnN1YnNjcmliZSgpO1xuICAgICAgICAgICAgICAgICAgICBzcGFuLmZpbmlzaCgpO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH0sXG4gICAgICAgIH07XG4gICAgfVxuXG4gICAgYXN5bmMgd2FpdEZvcihcbiAgICAgICAgLi4uYXJnc1xuICAgICAgICAvKlxuICAgICAgICBmaWx0ZXJPclBhcmFtczogYW55IHwgVE9OV2FpdEZvclBhcmFtcyxcbiAgICAgICAgcmVzdWx0OiBzdHJpbmcsXG4gICAgICAgIHRpbWVvdXQ/OiBudW1iZXIsXG4gICAgICAgIHBhcmVudFNwYW4/OiAoU3BhbiB8IFNwYW5Db250ZXh0KVxuICAgICAgICAgKi9cbiAgICApOiBQcm9taXNlPGFueT4ge1xuICAgICAgICBjb25zdCB7XG4gICAgICAgICAgICBmaWx0ZXIsXG4gICAgICAgICAgICByZXN1bHQsXG4gICAgICAgICAgICB0aW1lb3V0OiBwYXJhbXNUaW1lb3V0LFxuICAgICAgICAgICAgcGFyZW50U3BhbixcbiAgICAgICAgICAgIG9wZXJhdGlvbklkLFxuICAgICAgICB9ID0gcmVzb2x2ZVBhcmFtczxUT05XYWl0Rm9yUGFyYW1zPihhcmdzLCAnZmlsdGVyJywgKCkgPT4gKHtcbiAgICAgICAgICAgIGZpbHRlcjogYXJnc1swXSxcbiAgICAgICAgICAgIHJlc3VsdDogKGFyZ3NbMV06IGFueSksXG4gICAgICAgICAgICB0aW1lb3V0OiAoYXJnc1syXTogYW55KSxcbiAgICAgICAgICAgIHBhcmVudFNwYW46IGFyZ3NbM10sXG4gICAgICAgIH0pKTtcbiAgICAgICAgY29uc3QgdGltZW91dCA9IHBhcmFtc1RpbWVvdXQgfHwgdGhpcy5tb2R1bGUuY29uZmlnLndhaXRGb3JUaW1lb3V0KCk7XG4gICAgICAgIGNvbnN0IGRvY3MgPSBhd2FpdCB0aGlzLnF1ZXJ5KHtcbiAgICAgICAgICAgIGZpbHRlcixcbiAgICAgICAgICAgIHJlc3VsdCxcbiAgICAgICAgICAgIHRpbWVvdXQsXG4gICAgICAgICAgICBwYXJlbnRTcGFuLFxuICAgICAgICAgICAgb3BlcmF0aW9uSWQsXG4gICAgICAgIH0pO1xuICAgICAgICBpZiAoZG9jcy5sZW5ndGggPiAwKSB7XG4gICAgICAgICAgICByZXR1cm4gZG9jc1swXTtcbiAgICAgICAgfVxuICAgICAgICB0aHJvdyBUT05DbGllbnRFcnJvci53YWl0Rm9yVGltZW91dChhd2FpdCB0aGlzLm1vZHVsZS5jb21wbGV0ZUVycm9yRGF0YSh7XG4gICAgICAgICAgICBjb2xsZWN0aW9uOiB0aGlzLmNvbGxlY3Rpb25OYW1lLFxuICAgICAgICB9KSk7XG4gICAgfVxufVxuXG5UT05RdWVyaWVzTW9kdWxlLm1vZHVsZU5hbWUgPSAnVE9OUXVlcmllc01vZHVsZSc7XG4iXX0=