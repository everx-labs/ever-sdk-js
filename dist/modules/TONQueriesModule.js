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

function _createForOfIteratorHelper(o) { if (typeof Symbol === "undefined" || o[Symbol.iterator] == null) { if (Array.isArray(o) || (o = _unsupportedIterableToArray(o))) { var i = 0; var F = function F() {}; return { s: F, n: function n() { if (i >= o.length) return { done: true }; return { done: false, value: o[i++] }; }, e: function e(_e) { throw _e; }, f: F }; } throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); } var it, normalCompletion = true, didErr = false, err; return { s: function s() { it = o[Symbol.iterator](); }, n: function n() { var step = it.next(); normalCompletion = step.done; return step; }, e: function e(_e2) { didErr = true; err = _e2; }, f: function f() { try { if (!normalCompletion && it["return"] != null) it["return"](); } finally { if (didErr) throw err; } } }; }

function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }

function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }

function asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { Promise.resolve(value).then(_next, _throw); } }

function _asyncToGenerator(fn) { return function () { var self = this, args = arguments; return new Promise(function (resolve, reject) { var gen = fn.apply(self, args); function _next(value) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "next", value); } function _throw(err) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "throw", err); } _next(undefined); }); }; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

function _createSuper(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct(); return function () { var Super = _getPrototypeOf(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = _getPrototypeOf(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return _possibleConstructorReturn(this, result); }; }

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
      var randomPart = Math.round(Math.random() * 256).toString(16);
      _this.operationIdPrefix = "".concat(_this.operationIdPrefix).concat(randomPart);
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
                console.log("[getClientConfig] for server \"".concat(server, "\" failed"), {
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

                _context20.t0 = _TONClientError.TONClientError;
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

                            _context28.t0 = _TONClientError.TONClientError;
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
                _context31.t0 = _TONClientError.TONClientError;
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy9tb2R1bGVzL1RPTlF1ZXJpZXNNb2R1bGUuanMiXSwibmFtZXMiOlsiS0VFUF9BTElWRV9USU1FT1VUIiwiTUFYX1RJTUVPVVQiLCJyZXNvbHZlUGFyYW1zIiwiYXJncyIsInJlcXVpcmVkUGFyYW1OYW1lIiwicmVzb2x2ZUFyZ3MiLCJsZW5ndGgiLCJNdWx0aWNhc3RQcm9taXNlIiwibGlzdGVuZXJzIiwib25Db21wbGV0ZSIsImxpc3RlbmVyIiwicmVzb2x2ZSIsInJlamVjdCIsInB1c2giLCJQcm9taXNlIiwidmFsdWUiLCJjb21wbGV0ZSIsImVycm9yIiwiY29tcGxldGVMaXN0ZW5lciIsImZvckVhY2giLCJ2ZXJzaW9uVG9OdW1iZXIiLCJzIiwicGFydHMiLCJzcGxpdCIsIm1hcCIsIngiLCJOdW1iZXIiLCJzbGljZSIsInJlc29sdmVTZXJ2ZXJJbmZvIiwidmVyc2lvblN0cmluZyIsInZlcnNpb24iLCJzdXBwb3J0c09wZXJhdGlvbklkIiwic3VwcG9ydHNBZ2dyZWdhdGlvbnMiLCJzdXBwb3J0c1RpbWUiLCJ0aW1lRGVsdGEiLCJhYm9ydGFibGVGZXRjaCIsImZldGNoIiwiaW5wdXQiLCJvcHRpb25zIiwicXVlcnlUaW1lb3V0IiwiZmV0Y2hPcHRpb25zIiwiY29udHJvbGxlciIsImdsb2JhbCIsIkFib3J0Q29udHJvbGxlciIsInNpZ25hbCIsInNldFRpbWVvdXQiLCJUT05DbGllbnRFcnJvciIsInF1ZXJ5Rm9yY2libHlBYm9ydGVkIiwiZW1wdHlUT05FcnJvckRhdGEiLCJhYm9ydCIsInRoZW4iLCJUT05RdWVyaWVzTW9kdWxlIiwiY29udGV4dCIsImdyYXBocWxDbGllbnQiLCJncmFwaHFsQ2xpZW50Q3JlYXRpb24iLCJncmFwaHFsQ2xpZW50Q29uZmlnIiwib3ZlcnJpZGVXc1VybCIsIm9wZXJhdGlvbklkUHJlZml4IiwiRGF0ZSIsIm5vdyIsInRvU3RyaW5nIiwiaSIsInJhbmRvbVBhcnQiLCJNYXRoIiwicm91bmQiLCJyYW5kb20iLCJvcGVyYXRpb25JZFN1ZmZpeCIsInNlcnZlckluZm8iLCJjb25maWciLCJnZXRNb2R1bGUiLCJUT05Db25maWdNb2R1bGUiLCJ0cmFuc2FjdGlvbnMiLCJUT05RdWVyaWVzTW9kdWxlQ29sbGVjdGlvbiIsIm1lc3NhZ2VzIiwiYmxvY2tzIiwiYWNjb3VudHMiLCJibG9ja3Nfc2lnbmF0dXJlcyIsImh0dHBVcmwiLCJzb3VyY2VVcmwiLCJyZXNwb25zZSIsInRleHQiLCJyZXNwb25zZVRleHQiLCJyZXNwb25zZUpzb24iLCJKU09OIiwicGFyc2UiLCJkYXRhIiwiaW5mbyIsInJlZGlyZWN0ZWQiLCJ1cmwiLCJzb3VyY2VMb2NhdGlvbiIsIlVSTFBhcnRzIiwiZml4UXVlcnkiLCJ0b0xvd2VyQ2FzZSIsInJlc3BvbnNlTG9jYXRpb24iLCJnZXRDb25maWdGb3JTZXJ2ZXIiLCJzZXJ2ZXIiLCJodHRwUGFydHMiLCJmaXhQcm90b2NvbCIsImZpeFBhdGgiLCJodHRwIiwid3MiLCJ3c1VybCIsImNsaWVudFBsYXRmb3JtIiwiV2ViU29ja2V0IiwiVE9OQ2xpZW50IiwiRXJyb3IiLCJzZXJ2ZXJzIiwiY2xpZW50Q29uZmlnIiwiZGV0ZWN0UmVkaXJlY3QiLCJfIiwiY29uc29sZSIsImxvZyIsIm1lc3NhZ2UiLCJodHRwX3VybCIsIndzX3VybCIsInNwYW4iLCJncmFwaHFsQ2xpZW50UmVxdWlyZWQiLCJnZXRTZXJ2ZXJJbmZvIiwic3RhcnQiLCJlbmQiLCJqc29uIiwicmVzcG9uc2VEYXRhIiwic2VydmVyVGltZSIsInRpbWUiLCJzZXJ2ZXJUaW1lRGVsdGEiLCJvcGVyYXRpb25JZHMiLCJncmFwaHFsTXV0YXRpb24iLCJwYXJlbnRTcGFuIiwicXVlcnkiLCJ1bmRlZmluZWQiLCJyZXN1bHQiLCJnZXRBY2NvdW50c0NvdW50IiwiZ2V0VHJhbnNhY3Rpb25zQ291bnQiLCJnZXRBY2NvdW50c1RvdGFsQmFsYW5jZSIsInJlcXVlc3RzIiwidHJhY2UiLCJxbCIsInZhcmlhYmxlcyIsInNldFRhZyIsIm11dGF0aW9uIiwidGltZW91dCIsImdyYXBocWxRdWVyeSIsImdyYXBoUWwiLCJjbGllbnQiLCJtdXRhdGUiLCJ0cmFjZVNwYW4iLCJuZXh0VGltZW91dCIsInN0YXJ0VGltZSIsImZvcmNlVGVybWluYXRlRXh0cmFUaW1lb3V0IiwiZm9yY2VUZXJtaW5hdGVUaW1lb3V0Iiwid2FpdEZvclRpbWVvdXQiLCJtaW4iLCJyZXNvbHZlR3JhcGhRTEVycm9yIiwicmVzb2x2ZWRFcnJvciIsImlzTmV0d29ya0Vycm9yIiwiaXNOZXR3b3JrVGltZW91dEV4cGlyZWRTaW5jZSIsInJldHJ5RGVsYXlUaW1lb3V0IiwiZ3FsRXJyIiwiZ3JhcGhRTEVycm9ycyIsImNsaWVudEVyciIsImdxbEV4YyIsImV4dGVuc2lvbnMiLCJleGNlcHRpb24iLCJudW1iZXIiLCJjb2RlIiwic291cmNlIiwiZXJyb3JzIiwibmV0d29ya0Vycm9yIiwiY29tcGxldGVFcnJvckRhdGEiLCJxdWVyeUZhaWxlZCIsInJlcXVlc3QiLCJsaXN0ZW4iLCJjcmVhdGlvbiIsImNyZWF0ZUdyYXBocWxDbGllbnQiLCJ1c2VIdHRwIiwidXNlV2ViU29ja2V0Rm9yUXVlcmllcyIsImdldENsaWVudENvbmZpZyIsIndzTGluayIsImh0dHBMaW5rIiwic3Vic09wdGlvbnMiLCJ0cmFjZXIiLCJpbmplY3QiLCJGT1JNQVRfVEVYVF9NQVAiLCJzdWJzY3JpcHRpb25DbGllbnQiLCJTdWJzY3JpcHRpb25DbGllbnQiLCJyZWNvbm5lY3QiLCJjb25uZWN0aW9uUGFyYW1zIiwiYWNjZXNzS2V5IiwiaGVhZGVycyIsIm9uUmVjb25uZWN0ZWQiLCJkZXRlY3RpbmdSZWRpcmVjdGlvbiIsIm9uRXJyb3IiLCJuZXdDb25maWciLCJjb25maWdJc0NoYW5nZWQiLCJ1cmkiLCJtYXhDb25uZWN0VGltZUdlbmVyYXRvciIsImR1cmF0aW9uIiwibWF4IiwicmVxIiwicmVzb2x2ZWRTcGFuIiwidHJhY2VyTGluayIsIndyYXBMaW5rIiwibGluayIsImNvbmNhdCIsImlzU3Vic2NyaXB0aW9uIiwiZGVmaW5pdGlvbiIsImtpbmQiLCJvcGVyYXRpb24iLCJXZWJTb2NrZXRMaW5rIiwiSHR0cExpbmsiLCJBcG9sbG9DbGllbnQiLCJjYWNoZSIsIkluTWVtb3J5Q2FjaGUiLCJkZWZhdWx0T3B0aW9ucyIsIndhdGNoUXVlcnkiLCJmZXRjaFBvbGljeSIsInN0b3AiLCJjbGVhclN0b3JlIiwiVE9ORXJyb3JDb2RlIiwiUVVFUllfRk9SQ0lCTFlfQUJPUlRFRCIsIlRPTk1vZHVsZSIsIm1vZHVsZSIsImNvbGxlY3Rpb25OYW1lIiwidHlwZU5hbWUiLCJmaWx0ZXIiLCJvcmRlckJ5IiwibGltaXQiLCJvcGVyYXRpb25JZCIsInVzZU9wZXJhdGlvbklkIiwiYyIsInQiLCJwYXJhbXMiLCJmaWVsZHMiLCJzZXJ2ZXJEb2VzbnRTdXBwb3J0QWdncmVnYXRpb25zIiwicSIsImVuZHNXaXRoIiwib25Eb2NFdmVudCIsInN0YXJ0U3BhbiIsIlRhZ3MiLCJTUEFOX0tJTkQiLCJzdWJzY3JpcHRpb24iLCJvYnNlcnZhYmxlIiwic3Vic2NyaWJlIiwiZXZlbnQiLCJwYXlsb2FkIiwidW5zdWJzY3JpYmUiLCJmaW5pc2giLCJwYXJhbXNUaW1lb3V0IiwiZG9jcyIsImNvbGxlY3Rpb24iLCJtb2R1bGVOYW1lIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7QUFNQTs7QUFDQTs7QUFDQTs7QUFDQTs7QUFDQTs7QUFDQTs7QUFDQTs7QUFDQTs7QUFDQTs7QUFDQTs7QUFZQTs7QUFDQTs7QUFFQTs7QUFDQTs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQXdCQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxJQUFNQSxrQkFBa0IsR0FBRyxJQUFJLEtBQS9CO0FBRU8sSUFBTUMsV0FBVyxHQUFHLFVBQXBCOzs7QUFFUCxTQUFTQyxhQUFULENBQTBCQyxJQUExQixFQUF1Q0MsaUJBQXZDLEVBQWtFQyxXQUFsRSxFQUEyRjtBQUN2RixTQUFRRixJQUFJLENBQUNHLE1BQUwsS0FBZ0IsQ0FBakIsSUFBd0JGLGlCQUFpQixJQUFJRCxJQUFJLENBQUMsQ0FBRCxDQUFqRCxHQUF3REEsSUFBSSxDQUFDLENBQUQsQ0FBNUQsR0FBa0VFLFdBQVcsRUFBcEY7QUFDSDs7SUFPS0UsZ0I7QUFJRiw4QkFBYztBQUFBOztBQUFBOztBQUFBOztBQUNWLFNBQUtDLFNBQUwsR0FBaUIsRUFBakI7QUFDQSxTQUFLQyxVQUFMLEdBQWtCLElBQWxCO0FBQ0g7Ozs7NkJBRXdCO0FBQ3JCLFVBQU1DLFFBQWtDLEdBQUc7QUFDdkNDLFFBQUFBLE9BQU8sRUFBRSxtQkFBTSxDQUNkLENBRnNDO0FBR3ZDQyxRQUFBQSxNQUFNLEVBQUUsa0JBQU0sQ0FDYjtBQUpzQyxPQUEzQztBQU1BLFdBQUtKLFNBQUwsQ0FBZUssSUFBZixDQUFvQkgsUUFBcEI7QUFDQSxhQUFPLElBQUlJLE9BQUosQ0FBWSxVQUFDSCxPQUFELEVBQVVDLE1BQVYsRUFBcUI7QUFDcENGLFFBQUFBLFFBQVEsQ0FBQ0MsT0FBVCxHQUFtQkEsT0FBbkI7QUFDQUQsUUFBQUEsUUFBUSxDQUFDRSxNQUFULEdBQWtCQSxNQUFsQjtBQUNILE9BSE0sQ0FBUDtBQUlIOzs7NEJBRU9HLEssRUFBYztBQUNsQixXQUFLQyxRQUFMLENBQWMsVUFBQU4sUUFBUTtBQUFBLGVBQUlBLFFBQVEsQ0FBQ0MsT0FBVCxDQUFpQkksS0FBakIsQ0FBSjtBQUFBLE9BQXRCO0FBQ0g7OzsyQkFFTUUsSyxFQUFjO0FBQ2pCLFdBQUtELFFBQUwsQ0FBYyxVQUFBTixRQUFRO0FBQUEsZUFBSUEsUUFBUSxDQUFDRSxNQUFULENBQWdCSyxLQUFoQixDQUFKO0FBQUEsT0FBdEI7QUFDSDs7OzZCQUVRQyxnQixFQUFnRTtBQUFBLFVBQzdEVixTQUQ2RCxHQUMvQyxJQUQrQyxDQUM3REEsU0FENkQ7QUFFckUsV0FBS0EsU0FBTCxHQUFpQixFQUFqQjs7QUFDQSxVQUFJLEtBQUtDLFVBQVQsRUFBcUI7QUFDakIsYUFBS0EsVUFBTDtBQUNIOztBQUNERCxNQUFBQSxTQUFTLENBQUNXLE9BQVYsQ0FBa0IsVUFBQVQsUUFBUTtBQUFBLGVBQUlRLGdCQUFnQixDQUFDUixRQUFELENBQXBCO0FBQUEsT0FBMUI7QUFDSDs7Ozs7O0FBR0wsU0FBU1UsZUFBVCxDQUF5QkMsQ0FBekIsRUFBNEM7QUFDeEMsTUFBTUMsS0FBSyxHQUFHLFVBQUdELENBQUMsSUFBSSxFQUFSLEVBQWFFLEtBQWIsQ0FBbUIsR0FBbkIsRUFDVEMsR0FEUyxDQUNMLFVBQUFDLENBQUM7QUFBQSxXQUFJQyxNQUFNLENBQUNELENBQUQsQ0FBVjtBQUFBLEdBREksRUFFVEUsS0FGUyxDQUVILENBRkcsRUFFQSxDQUZBLENBQWQ7O0FBR0EsU0FBT0wsS0FBSyxDQUFDaEIsTUFBTixHQUFlLENBQXRCLEVBQXlCO0FBQ3JCZ0IsSUFBQUEsS0FBSyxDQUFDVCxJQUFOLENBQVcsQ0FBWDtBQUNIOztBQUNELFNBQU9TLEtBQUssQ0FBQyxDQUFELENBQUwsR0FBVyxPQUFYLEdBQXFCQSxLQUFLLENBQUMsQ0FBRCxDQUFMLEdBQVcsSUFBaEMsR0FBdUNBLEtBQUssQ0FBQyxDQUFELENBQW5EO0FBQ0g7O0FBRUQsU0FBU00saUJBQVQsQ0FBMkJDLGFBQTNCLEVBQXdGO0FBQ3BGLE1BQU1DLE9BQU8sR0FBR1YsZUFBZSxDQUFDUyxhQUFhLElBQUksUUFBbEIsQ0FBL0I7QUFDQSxTQUFPO0FBQ0hDLElBQUFBLE9BQU8sRUFBUEEsT0FERztBQUVIQyxJQUFBQSxtQkFBbUIsRUFBRUQsT0FBTyxHQUFHLEtBRjVCO0FBR0hFLElBQUFBLG9CQUFvQixFQUFFRixPQUFPLElBQUksS0FIOUI7QUFJSEcsSUFBQUEsWUFBWSxFQUFFSCxPQUFPLElBQUksS0FKdEI7QUFLSEksSUFBQUEsU0FBUyxFQUFFO0FBTFIsR0FBUDtBQU9IOztBQUVELFNBQVNDLGNBQVQsQ0FBd0JDLEtBQXhCLEVBQStCO0FBQzNCLFNBQU8sVUFBQ0MsS0FBRCxFQUFRQyxPQUFSLEVBQW9CO0FBQ3ZCLFdBQU8sSUFBSXhCLE9BQUosQ0FBWSxVQUFDSCxPQUFELEVBQVVDLE1BQVYsRUFBcUI7QUFDcEMsVUFBTTJCLFlBQXVDLEdBQUdELE9BQU8sQ0FBQ0MsWUFBeEQ7QUFDQSxVQUFJQyxZQUFZLEdBQUdGLE9BQW5COztBQUNBLFVBQUlDLFlBQUosRUFBa0I7QUFDZCxZQUFNRSxVQUFVLEdBQUdDLE1BQU0sQ0FBQ0MsZUFBUCxHQUF5QixJQUFJRCxNQUFNLENBQUNDLGVBQVgsRUFBekIsR0FBd0QsSUFBM0U7O0FBQ0EsWUFBSUYsVUFBSixFQUFnQjtBQUNaRCxVQUFBQSxZQUFZLG1DQUNMRixPQURLO0FBRVJNLFlBQUFBLE1BQU0sRUFBRUgsVUFBVSxDQUFDRztBQUZYLFlBQVo7QUFJSDs7QUFDREMsUUFBQUEsVUFBVSxDQUFDLFlBQU07QUFDYmpDLFVBQUFBLE1BQU0sQ0FBQ2tDLCtCQUFlQyxvQkFBZixDQUFvQ0MsaUNBQXBDLENBQUQsQ0FBTjs7QUFDQSxjQUFJUCxVQUFKLEVBQWdCO0FBQ1pBLFlBQUFBLFVBQVUsQ0FBQ1EsS0FBWDtBQUNIO0FBQ0osU0FMUyxFQUtQVixZQUxPLENBQVY7QUFNSDs7QUFDREgsTUFBQUEsS0FBSyxDQUFDQyxLQUFELEVBQVFHLFlBQVIsQ0FBTCxDQUEyQlUsSUFBM0IsQ0FBZ0N2QyxPQUFoQyxFQUF5Q0MsTUFBekM7QUFDSCxLQW5CTSxDQUFQO0FBb0JILEdBckJEO0FBc0JIOztJQUVvQnVDLGdCOzs7OztBQWtCakIsNEJBQVlDLE9BQVosRUFBdUM7QUFBQTs7QUFBQTs7QUFDbkMsOEJBQU1BLE9BQU47O0FBRG1DOztBQUFBOztBQUFBOztBQUFBOztBQUFBOztBQUFBOztBQUFBOztBQUFBOztBQUFBOztBQUFBOztBQUFBOztBQUFBOztBQUFBOztBQUVuQyxVQUFLQyxhQUFMLEdBQXFCLElBQXJCO0FBQ0EsVUFBS0MscUJBQUwsR0FBNkIsSUFBN0I7QUFDQSxVQUFLQyxtQkFBTCxHQUEyQixJQUEzQjtBQUNBLFVBQUtDLGFBQUwsR0FBcUIsSUFBckI7QUFDQSxVQUFLQyxpQkFBTCxHQUF5QixDQUFDQyxJQUFJLENBQUNDLEdBQUwsS0FBYSxLQUFkLEVBQXFCQyxRQUFyQixDQUE4QixFQUE5QixDQUF6Qjs7QUFDQSxTQUFLLElBQUlDLENBQUMsR0FBRyxDQUFiLEVBQWdCQSxDQUFDLEdBQUcsRUFBcEIsRUFBd0JBLENBQUMsSUFBSSxDQUE3QixFQUFnQztBQUM1QixVQUFNQyxVQUFVLEdBQUdDLElBQUksQ0FBQ0MsS0FBTCxDQUFXRCxJQUFJLENBQUNFLE1BQUwsS0FBZ0IsR0FBM0IsRUFBZ0NMLFFBQWhDLENBQXlDLEVBQXpDLENBQW5CO0FBQ0EsWUFBS0gsaUJBQUwsYUFBNEIsTUFBS0EsaUJBQWpDLFNBQXFESyxVQUFyRDtBQUNIOztBQUNELFVBQUtJLGlCQUFMLEdBQXlCLENBQXpCO0FBQ0EsVUFBS0MsVUFBTCxHQUFrQnZDLGlCQUFpQixFQUFuQztBQVptQztBQWF0Qzs7Ozs7Ozs7OztBQUdHLHFCQUFLd0MsTUFBTCxHQUFjLEtBQUtoQixPQUFMLENBQWFpQixTQUFiLENBQXVCQywyQkFBdkIsQ0FBZDtBQUNBLHFCQUFLQyxZQUFMLEdBQW9CLElBQUlDLDBCQUFKLENBQStCLElBQS9CLEVBQXFDLGNBQXJDLEVBQXFELGFBQXJELENBQXBCO0FBQ0EscUJBQUtDLFFBQUwsR0FBZ0IsSUFBSUQsMEJBQUosQ0FBK0IsSUFBL0IsRUFBcUMsVUFBckMsRUFBaUQsU0FBakQsQ0FBaEI7QUFDQSxxQkFBS0UsTUFBTCxHQUFjLElBQUlGLDBCQUFKLENBQStCLElBQS9CLEVBQXFDLFFBQXJDLEVBQStDLE9BQS9DLENBQWQ7QUFDQSxxQkFBS0csUUFBTCxHQUFnQixJQUFJSCwwQkFBSixDQUErQixJQUEvQixFQUFxQyxVQUFyQyxFQUFpRCxTQUFqRCxDQUFoQjtBQUNBLHFCQUFLSSxpQkFBTCxHQUNJLElBQUlKLDBCQUFKLENBQStCLElBQS9CLEVBQXFDLG1CQUFyQyxFQUEwRCxpQkFBMUQsQ0FESjs7Ozs7Ozs7Ozs7Ozs7Ozs7O2tDQUlrQjtBQUFBOztBQUNsQixhQUFPLCtCQUFLakIsbUJBQUwsZ0ZBQTBCc0IsT0FBMUIsS0FBcUMsRUFBNUM7QUFDSDs7OzsyR0FFb0J6QyxLLEVBQVkwQyxTOzs7Ozs7O3VCQUNOMUMsS0FBSyxDQUFDMEMsU0FBRCxDOzs7QUFBdEJDLGdCQUFBQSxROzs7dUJBRXlCQSxRQUFRLENBQUNDLElBQVQsRTs7O0FBQXJCQyxnQkFBQUEsWTtBQUNBQyxnQkFBQUEsWSxHQUFlQyxJQUFJLENBQUNDLEtBQUwsQ0FBV0gsWUFBWCxDO0FBQ3JCLHFCQUFLZCxVQUFMLEdBQWtCdkMsaUJBQWlCLENBQUNzRCxZQUFZLENBQUNHLElBQWIsQ0FBa0JDLElBQWxCLENBQXVCeEQsT0FBeEIsQ0FBbkM7Ozs7Ozs7OztzQkFHQWlELFFBQVEsQ0FBQ1EsVUFBVCxLQUF3QixJOzs7OztrREFDakJSLFFBQVEsQ0FBQ1MsRzs7O3NCQUVoQlQsUUFBUSxDQUFDUSxVQUFULEtBQXdCLEs7Ozs7O2tEQUNqQixFOzs7QUFFTEUsZ0JBQUFBLGMsR0FBaUJDLDBCQUFTTixLQUFULENBQWVOLFNBQWYsRUFDbEJhLFFBRGtCLENBQ1Q7QUFBQSx5QkFBTSxFQUFOO0FBQUEsaUJBRFMsRUFFbEIvQixRQUZrQixHQUdsQmdDLFdBSGtCLEU7QUFJakJDLGdCQUFBQSxnQixHQUFtQkgsMEJBQVNOLEtBQVQsQ0FBZUwsUUFBUSxDQUFDUyxHQUF4QixFQUNwQkcsUUFEb0IsQ0FDWDtBQUFBLHlCQUFNLEVBQU47QUFBQSxpQkFEVyxFQUVwQi9CLFFBRm9CLEdBR3BCZ0MsV0FIb0IsRTtrREFJbEJDLGdCQUFnQixLQUFLSixjQUFyQixHQUFzQ1YsUUFBUSxDQUFDUyxHQUEvQyxHQUFxRCxFOzs7Ozs7Ozs7Ozs7Ozs7Ozs7OzsyQ0FXbkRNLGtCOzs7Ozs7QUFBQUEsZ0JBQUFBLGtCLGdDQUFtQkMsTSxFQUFxQztBQUM3RCxzQkFBTUMsU0FBUyxHQUFHTiwwQkFBU04sS0FBVCxDQUFlVyxNQUFmLEVBQ2JFLFdBRGEsQ0FDRCxVQUFBeEUsQ0FBQztBQUFBLDJCQUFLQSxDQUFDLEtBQUssU0FBTixHQUFrQkEsQ0FBbEIsR0FBc0IsVUFBM0I7QUFBQSxtQkFEQSxFQUVieUUsT0FGYSxDQUVMLFVBQUF6RSxDQUFDO0FBQUEscUNBQU9BLENBQVA7QUFBQSxtQkFGSSxDQUFsQjs7QUFHQSxzQkFBTTBFLElBQUksR0FBR0gsU0FBUyxDQUFDcEMsUUFBVixFQUFiO0FBQ0Esc0JBQU13QyxFQUFFLEdBQUdKLFNBQVMsQ0FDZkMsV0FETSxDQUNNLFVBQUF4RSxDQUFDO0FBQUEsMkJBQUtBLENBQUMsS0FBSyxTQUFOLEdBQWtCLE9BQWxCLEdBQTRCLFFBQWpDO0FBQUEsbUJBRFAsRUFFTm1DLFFBRk0sRUFBWDtBQUdBLHlCQUFPO0FBQ0hpQixvQkFBQUEsT0FBTyxFQUFFc0IsSUFETjtBQUVIRSxvQkFBQUEsS0FBSyxFQUFFRCxFQUZKO0FBR0hoRSxvQkFBQUEsS0FBSyxFQUFFa0UsY0FBYyxDQUFDbEUsS0FIbkI7QUFJSG1FLG9CQUFBQSxTQUFTLEVBQUVELGNBQWMsQ0FBQ0M7QUFKdkIsbUJBQVA7QUFNSCxpQjs7QUFyQktuQyxnQkFBQUEsTSxHQUFTLEtBQUtBLE07QUFDZGtDLGdCQUFBQSxjLEdBQWlCRSxxQkFBVUYsYzs7b0JBQzVCQSxjOzs7OztzQkFDS0csS0FBSyxDQUFDLGdDQUFELEM7OztBQUVUckUsZ0JBQUFBLEssR0FBUWtFLGNBQWMsQ0FBQ2xFLEs7dURBa0JSZ0MsTUFBTSxDQUFDaUIsSUFBUCxDQUFZcUIsTzs7Ozs7Ozs7Ozs7QUFBdEJYLGdCQUFBQSxNO0FBQ0RZLGdCQUFBQSxZLEdBQWViLGtCQUFrQixDQUFDQyxNQUFELEM7Ozt1QkFHVixLQUFLYSxjQUFMLENBQ3JCeEUsS0FEcUIsWUFFbEJ1RSxZQUFZLENBQUM5QixPQUZLLG9DOzs7QUFBbkJVLGdCQUFBQSxVOztBQUlOLG9CQUFJQSxVQUFVLEtBQUssRUFBbkIsRUFBdUI7QUFDYlMsa0JBQUFBLFNBRGEsR0FDRE4sMEJBQVNOLEtBQVQsQ0FBZUcsVUFBZixFQUNiSSxRQURhLENBQ0osVUFBQWtCLENBQUM7QUFBQSwyQkFBSSxFQUFKO0FBQUEsbUJBREcsQ0FEQztBQUduQkYsa0JBQUFBLFlBQVksQ0FBQzlCLE9BQWIsR0FBdUJtQixTQUFTLENBQUNwQyxRQUFWLEVBQXZCO0FBQ0ErQyxrQkFBQUEsWUFBWSxDQUFDTixLQUFiLEdBQXFCTCxTQUFTLENBQ3pCQyxXQURnQixDQUNKLFVBQUF4RSxDQUFDO0FBQUEsMkJBQUtBLENBQUMsS0FBSyxTQUFOLEdBQWtCLE9BQWxCLEdBQTRCLFFBQWpDO0FBQUEsbUJBREcsRUFFaEJtQyxRQUZnQixFQUFyQjtBQUdIOztrREFDTStDLFk7Ozs7O0FBRVBHLGdCQUFBQSxPQUFPLENBQUNDLEdBQVIsMENBQTZDaEIsTUFBN0MsZ0JBQStEO0FBQzNEaUIsa0JBQUFBLE9BQU8sRUFBRSxhQUFNQSxPQUFOLElBQWlCLGFBQU1wRCxRQUFOLEVBRGlDO0FBRTNEeUIsa0JBQUFBLElBQUksRUFBRTtBQUNGNEIsb0JBQUFBLFFBQVEsRUFBRU4sWUFBWSxDQUFDOUIsT0FEckI7QUFFRnFDLG9CQUFBQSxNQUFNLEVBQUVQLFlBQVksQ0FBQ047QUFGbkI7QUFGcUQsaUJBQS9EOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7a0RBU0RQLGtCQUFrQixDQUFDMUIsTUFBTSxDQUFDaUIsSUFBUCxDQUFZcUIsT0FBWixDQUFvQixDQUFwQixDQUFELEM7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7MEdBR1RTLEk7Ozs7Ozt1QkFDVixLQUFLQyxxQkFBTCxDQUEyQkQsSUFBM0IsQzs7O2tEQUNDLEtBQUtoRCxVOzs7Ozs7Ozs7Ozs7Ozs7Ozs7OzRHQUdNZ0QsSTs7Ozs7Ozt1QkFDTyxLQUFLRSxhQUFMLENBQW1CRixJQUFuQixDOzs7QUFBbkJoRCxnQkFBQUEsVTtBQUNBd0MsZ0JBQUFBLFksR0FBZSxLQUFLcEQsbUI7O3NCQUN0Qm9ELFlBQVksSUFBSXhDLFVBQVUsQ0FBQ2xDLFlBQTNCLElBQTJDa0MsVUFBVSxDQUFDakMsU0FBWCxLQUF5QixJOzs7Ozs7QUFFMURvRixnQkFBQUEsSyxHQUFRNUQsSUFBSSxDQUFDQyxHQUFMLEU7O3VCQUNTZ0QsWUFBWSxDQUFDdkUsS0FBYixXQUFzQnVFLFlBQVksQ0FBQzlCLE9BQW5DLGlDOzs7QUFBakJFLGdCQUFBQSxRO0FBQ0F3QyxnQkFBQUEsRyxHQUFNN0QsSUFBSSxDQUFDQyxHQUFMLEU7O3VCQUNlb0IsUUFBUSxDQUFDeUMsSUFBVCxFOzs7QUFBckJDLGdCQUFBQSxZO0FBQ0FDLGdCQUFBQSxVLEdBQWFELFlBQVksQ0FBQ3BDLElBQWIsQ0FBa0JDLElBQWxCLENBQXVCcUMsSTtBQUMxQ3hELGdCQUFBQSxVQUFVLENBQUNqQyxTQUFYLEdBQXVCNkIsSUFBSSxDQUFDQyxLQUFMLENBQVcwRCxVQUFVLElBQUlKLEtBQUssR0FBRyxDQUFDQyxHQUFHLEdBQUdELEtBQVAsSUFBZ0IsQ0FBNUIsQ0FBckIsQ0FBdkI7Ozs7Ozs7QUFFQVIsZ0JBQUFBLE9BQU8sQ0FBQ0MsR0FBUixDQUFZLEtBQVo7OztrREFHRDVDLFVBQVUsQ0FBQ2pDLFNBQVgsSUFBd0IsQzs7Ozs7Ozs7Ozs7Ozs7Ozs7OztzR0FHbkJpRixJOzs7Ozs7O3VCQUNZLEtBQUtTLGVBQUwsQ0FBcUJULElBQXJCLEM7OztBQUFsQmpGLGdCQUFBQSxTO2tEQUNDd0IsSUFBSSxDQUFDQyxHQUFMLEtBQWF6QixTOzs7Ozs7Ozs7Ozs7Ozs7Ozs7MENBR0Y7QUFDbEIsVUFBSSxLQUFLaUMsVUFBVCxFQUFxQjtBQUNqQixhQUFLQSxVQUFMLENBQWdCakMsU0FBaEIsR0FBNEIsSUFBNUI7QUFDSDtBQUNKOzs7MENBRTZCO0FBQzFCLFdBQUtnQyxpQkFBTCxJQUEwQixDQUExQjtBQUNBLHVCQUFVLEtBQUtULGlCQUFmLFNBQW1DLEtBQUtTLGlCQUFMLENBQXVCTixRQUF2QixDQUFnQyxFQUFoQyxDQUFuQztBQUNIOzs7OzZHQUVzQmlFLFk7Ozs7O3NCQUNmQSxZQUFZLENBQUN2SCxNQUFiLEtBQXdCLEM7Ozs7Ozs7Ozt1QkFHaEIsS0FBSytHLGFBQUwsRTs7O21DQUFzQnRGLG1COzs7Ozs7Ozs7dUJBRzVCLEtBQUsrRixlQUFMLHVJQUVFO0FBQ0pELGtCQUFBQSxZQUFZLEVBQVpBO0FBREksaUJBRkYsQzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs2R0FPYUUsVTs7Ozs7Ozt1QkFDRSxLQUFLQyxLQUFMLENBQVcseUJBQVgsRUFBc0NDLFNBQXRDLEVBQWlERixVQUFqRCxDOzs7QUFBZkcsZ0JBQUFBLE07a0RBQ0NBLE1BQU0sQ0FBQzdDLElBQVAsQ0FBWThDLGdCOzs7Ozs7Ozs7Ozs7Ozs7Ozs7O2lIQUdJSixVOzs7Ozs7O3VCQUNGLEtBQUtDLEtBQUwsQ0FBVyw2QkFBWCxFQUEwQ0MsU0FBMUMsRUFBcURGLFVBQXJELEM7OztBQUFmRyxnQkFBQUEsTTtrREFDQ0EsTUFBTSxDQUFDN0MsSUFBUCxDQUFZK0Msb0I7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7cUhBR09MLFU7Ozs7Ozs7dUJBQ0wsS0FBS0MsS0FBTCxDQUFXLGdDQUFYLEVBQTZDQyxTQUE3QyxFQUF3REYsVUFBeEQsQzs7O0FBQWZHLGdCQUFBQSxNO21EQUNDQSxNQUFNLENBQUM3QyxJQUFQLENBQVlnRCx1Qjs7Ozs7Ozs7Ozs7Ozs7Ozs7OzswR0FHSkMsUSxFQUFxQlAsVTs7Ozs7OzttREFDN0IsS0FBSzNFLE9BQUwsQ0FBYW1GLEtBQWIsQ0FBbUIsc0JBQW5CO0FBQUEsMEZBQTJDLG1CQUFPcEIsSUFBUDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsK0RBQ3ZDLE1BQUksQ0FBQ1csZUFBTCxvSEFFSDtBQUNBUSw4QkFBQUEsUUFBUSxFQUFSQTtBQURBLDZCQUZHLEVBSUpuQixJQUpJLENBRHVDOztBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLG1CQUEzQzs7QUFBQTtBQUFBO0FBQUE7QUFBQSxxQkFNSlksVUFOSSxDOzs7Ozs7Ozs7Ozs7Ozs7Ozs7O3NHQVVQUyxFOzs7Ozs7Ozs7O0FBQ0FDLGdCQUFBQSxTLGlFQUErQixFO0FBQy9CVixnQkFBQUEsVTttREFFTyxLQUFLM0UsT0FBTCxDQUFhbUYsS0FBYixDQUFtQixrQkFBbkI7QUFBQSwyRkFBdUMsbUJBQU9wQixJQUFQO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFDMUNBLDRCQUFBQSxJQUFJLENBQUN1QixNQUFMLENBQVksUUFBWixFQUFzQjtBQUNsQkMsOEJBQUFBLFFBQVEsRUFBRUgsRUFEUTtBQUVsQkMsOEJBQUFBLFNBQVMsRUFBVEE7QUFGa0IsNkJBQXRCO0FBRDBDLCtEQUtuQyxNQUFJLENBQUNYLGVBQUwsQ0FBcUJVLEVBQXJCLEVBQXlCQyxTQUF6QixFQUFvQ3RCLElBQXBDLENBTG1DOztBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLG1CQUF2Qzs7QUFBQTtBQUFBO0FBQUE7QUFBQSxxQkFNSlksVUFOSSxDOzs7Ozs7Ozs7Ozs7Ozs7Ozs7O21HQVVQUyxFOzs7Ozs7Ozs7OztBQUNBQyxnQkFBQUEsUyxpRUFBK0IsRTtBQUMvQlYsZ0JBQUFBLFU7QUFDQWEsZ0JBQUFBLE87bURBRU8sS0FBS3hGLE9BQUwsQ0FBYW1GLEtBQWIsQ0FBbUIsZUFBbkI7QUFBQSwyRkFBb0MsbUJBQU9wQixJQUFQO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFDdkNBLDRCQUFBQSxJQUFJLENBQUN1QixNQUFMLENBQVksUUFBWixFQUFzQjtBQUNsQlYsOEJBQUFBLEtBQUssRUFBRVEsRUFEVztBQUVsQkMsOEJBQUFBLFNBQVMsRUFBVEE7QUFGa0IsNkJBQXRCO0FBRHVDLCtEQUtoQyxNQUFJLENBQUNJLFlBQUwsQ0FBa0JMLEVBQWxCLEVBQXNCQyxTQUF0QixFQUFpQ3RCLElBQWpDLEVBQXVDeUIsT0FBdkMsQ0FMZ0M7O0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsbUJBQXBDOztBQUFBO0FBQUE7QUFBQTtBQUFBLHFCQU1KYixVQU5JLEM7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7NkdBU1dTLEU7Ozs7Ozs7OztBQUFZQyxnQkFBQUEsUyxpRUFBK0IsRTtBQUFJdEIsZ0JBQUFBLEk7QUFDM0R3QixnQkFBQUEsUSxHQUFXLDRCQUFJLENBQUNILEVBQUQsQ0FBSixDO21EQUNWLEtBQUtNLE9BQUwsQ0FBYSxVQUFDQyxNQUFEO0FBQUEseUJBQVlBLE1BQU0sQ0FBQ0MsTUFBUCxDQUFjO0FBQzFDTCxvQkFBQUEsUUFBUSxFQUFSQSxRQUQwQztBQUUxQ0Ysb0JBQUFBLFNBQVMsRUFBVEEsU0FGMEM7QUFHMUNyRixvQkFBQUEsT0FBTyxFQUFFO0FBQ0w2RixzQkFBQUEsU0FBUyxFQUFFOUI7QUFETjtBQUhpQyxtQkFBZCxDQUFaO0FBQUEsaUJBQWIsQzs7Ozs7Ozs7Ozs7Ozs7Ozs7OzswR0F3QlBxQixFOzs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQ0FDLGdCQUFBQSxTLGlFQUErQixFO0FBQy9CdEIsZ0JBQUFBLEk7QUFDQXlCLGdCQUFBQSxPO0FBRU1aLGdCQUFBQSxLLEdBQVEsNEJBQUksQ0FBQ1EsRUFBRCxDQUFKLEM7QUFDVlUsZ0JBQUFBLFcsR0FBYyxHO0FBQ1pDLGdCQUFBQSxTLEdBQVl6RixJQUFJLENBQUNDLEdBQUwsRTtBQUNkeUYsZ0JBQUFBLDBCLEdBQTZCLEk7QUFDM0JDLGdCQUFBQSxxQixHQUF3QlQsT0FBTyxJQUFJLEtBQUt4RSxNQUFMLENBQVlrRixjQUFaLEU7OztxQkFDbEMsSTs7Ozs7Ozt1QkFFc0IsS0FBS2xDLHFCQUFMLENBQTJCRCxJQUEzQixDOzs7QUFBZjRCLGdCQUFBQSxNO0FBQ0EzRixnQkFBQUEsTyxHQUFlO0FBQ2pCNkYsa0JBQUFBLFNBQVMsRUFBRTlCLElBRE07QUFFakIzRSxrQkFBQUEsWUFBWSxFQUFFO0FBQ1ZELG9CQUFBQSxZQUFZLEVBQUV3QixJQUFJLENBQUN3RixHQUFMLENBQ1ZGLHFCQUFxQixHQUFHRCwwQkFEZCxFQUVWbkosV0FGVTtBQURKO0FBRkcsaUI7O3VCQVNSOEksTUFBTSxDQUFDZixLQUFQLENBQWE7QUFDdEJBLGtCQUFBQSxLQUFLLEVBQUxBLEtBRHNCO0FBRXRCUyxrQkFBQUEsU0FBUyxFQUFUQSxTQUZzQjtBQUd0QnJGLGtCQUFBQSxPQUFPLEVBQVBBO0FBSHNCLGlCQUFiLEM7Ozs7Ozs7Ozt1QkFNZSxLQUFLb0csbUJBQUwsZTs7O0FBQXRCQyxnQkFBQUEsYTs7c0JBQ0Z0RyxnQkFBZ0IsQ0FBQ3VHLGNBQWpCLENBQWdDRCxhQUFoQyxLQUNHLENBQUMsS0FBS3JGLE1BQUwsQ0FBWXVGLDRCQUFaLENBQXlDUixTQUF6QyxDOzs7Ozs7Ozs7OztBQUNKLDBCQUFBLE1BQUksQ0FBQy9FLE1BQUwsQ0FBWTJDLEdBQVosQ0FBZ0IwQyxhQUFoQjs7QUFDTUcsMEJBQUFBLGlCLEdBQW9CVixXOztpQ0FDcEIsSUFBSXBJLE9BQUosQ0FBWSxVQUFBSCxPQUFPO0FBQUEsbUNBQUlrQyxVQUFVLENBQUNsQyxPQUFELEVBQVVpSixpQkFBVixDQUFkO0FBQUEsMkJBQW5CLEM7OztBQUNOLDhCQUFJVixXQUFXLEdBQUcsSUFBbEIsRUFBd0I7QUFDcEJBLDRCQUFBQSxXQUFXLElBQUksQ0FBZjtBQUNIOztBQUNELDhCQUFJRSwwQkFBMEIsR0FBRyxNQUFJLENBQUNoRixNQUFMLENBQVlrRixjQUFaLEVBQWpDLEVBQStEO0FBQzNERiw0QkFBQUEsMEJBQTBCLElBQUksSUFBOUI7QUFDSDs7Ozs7Ozs7Ozs7Ozs7O3NCQUVLSyxhOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztpSEFNSXhJLEs7Ozs7OztBQUNoQjRJLGdCQUFBQSxNLEdBQVM1SSxLQUFLLENBQUM2SSxhQUFOLElBQXVCN0ksS0FBSyxDQUFDNkksYUFBTixDQUFvQixDQUFwQixDOztxQkFDbENELE07Ozs7O0FBQ01FLGdCQUFBQSxTLEdBQVksSUFBSXRELEtBQUosQ0FBVW9ELE1BQU0sQ0FBQzdDLE9BQWpCLEM7QUFDWmdELGdCQUFBQSxNLEdBQVVILE1BQU0sQ0FBQ0ksVUFBUCxJQUFxQkosTUFBTSxDQUFDSSxVQUFQLENBQWtCQyxTQUF4QyxJQUFzRCxFO0FBQ3BFSCxnQkFBQUEsU0FBRCxDQUFpQkksTUFBakIsR0FBMEJILE1BQU0sQ0FBQ0ksSUFBUCxJQUFlLENBQXpDO0FBQ0NMLGdCQUFBQSxTQUFELENBQWlCSyxJQUFqQixHQUF3QkosTUFBTSxDQUFDSSxJQUFQLElBQWUsQ0FBdkM7QUFDQ0wsZ0JBQUFBLFNBQUQsQ0FBaUJNLE1BQWpCLEdBQTBCTCxNQUFNLENBQUNLLE1BQVAsSUFBaUIsUUFBM0M7bURBQ09OLFM7OztBQUVMTyxnQkFBQUEsTSxHQUFTckosS0FBSyxJQUNiQSxLQUFLLENBQUNzSixZQURFLElBRVJ0SixLQUFLLENBQUNzSixZQUFOLENBQW1CckMsTUFGWCxJQUdSakgsS0FBSyxDQUFDc0osWUFBTixDQUFtQnJDLE1BQW5CLENBQTBCb0MsTTs7cUJBQzdCQSxNOzs7OztnQ0FDT3hILDhCO2dDQUEyQndILE07O3VCQUFjLEtBQUtFLGlCQUFMLEU7Ozs7aUVBQTFCQyxXOzs7bURBRW5CeEosSzs7Ozs7Ozs7Ozs7Ozs7Ozs7OztxR0FHR3lKLE8sRUFBaUR2RCxJOzs7Ozs7O3VCQUN0QyxLQUFLQyxxQkFBTCxDQUEyQkQsSUFBM0IsQzs7O0FBQWY0QixnQkFBQUEsTTs7O3VCQUVXMkIsT0FBTyxDQUFDM0IsTUFBRCxDOzs7Ozs7Ozs7dUJBRVIsS0FBS1MsbUJBQUwsZTs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OzttSEFJUXpCLFU7Ozs7Ozs7O3FCQUNwQixLQUFLMUUsYTs7Ozs7bURBQ0UsS0FBS0EsYTs7O3FCQUVaLEtBQUtDLHFCOzs7Ozs7dUJBQ0MsS0FBS0EscUJBQUwsQ0FBMkJxSCxNQUEzQixFOzs7Ozs7O0FBRUFDLGdCQUFBQSxRLEdBQVcsSUFBSXJLLGdCQUFKLEU7QUFDakIscUJBQUsrQyxxQkFBTCxHQUE2QnNILFFBQTdCOzs7dUJBRVUsS0FBS3hILE9BQUwsQ0FBYW1GLEtBQWIsQ0FBbUIsY0FBbkIsRUFBbUMsVUFBQ3BCLElBQUQsRUFBVTtBQUMvQyx5QkFBTyxNQUFJLENBQUMwRCxtQkFBTCxDQUF5QjFELElBQXpCLENBQVA7QUFDSCxpQkFGSyxFQUVIWSxVQUZHLEM7OztBQUdOLHFCQUFLekUscUJBQUwsR0FBNkIsSUFBN0I7QUFDQXNILGdCQUFBQSxRQUFRLENBQUNqSyxPQUFULENBQWlCLEtBQUswQyxhQUF0Qjs7Ozs7OztBQUVBLHFCQUFLQyxxQkFBTCxHQUE2QixJQUE3QjtBQUNBc0gsZ0JBQUFBLFFBQVEsQ0FBQ2hLLE1BQVQ7Ozs7bURBSUQsS0FBS3lDLGE7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7aUhBR1U4RCxJOzs7Ozs7OztBQUNoQjJELGdCQUFBQSxPLEdBQVUsQ0FBQyxLQUFLMUcsTUFBTCxDQUFZaUIsSUFBWixDQUFpQjBGLHNCOzt1QkFDVCxLQUFLQyxlQUFMLEU7OztBQUFyQnJFLGdCQUFBQSxZO0FBQ0FzRSxnQkFBQUEsTSxHQUF5QixJO0FBQ3pCQyxnQkFBQUEsUSxHQUFzQixJO0FBRXBCQyxnQkFBQUEsVyxHQUFjLEtBQUsvRyxNQUFMLENBQVlnSCxNQUFaLENBQW1CQyxNQUFuQixDQUEwQmxFLElBQTFCLEVBQWdDbUUsNEJBQWhDLEVBQWlELEVBQWpELEM7QUFDZEMsZ0JBQUFBLGtCLEdBQXFCLElBQUlDLDRDQUFKLENBQ3ZCN0UsWUFBWSxDQUFDTixLQURVLEVBRXZCO0FBQ0l1QyxrQkFBQUEsT0FBTyxFQUFFNUksa0JBRGI7QUFFSXlMLGtCQUFBQSxTQUFTLEVBQUUsSUFGZjtBQUdJQyxrQkFBQUEsZ0JBQWdCLEVBQUU7QUFBQSwyQkFBTztBQUNyQkMsc0JBQUFBLFNBQVMsRUFBRSxNQUFJLENBQUN2SCxNQUFMLENBQVlpQixJQUFaLElBQW9CLE1BQUksQ0FBQ2pCLE1BQUwsQ0FBWWlCLElBQVosQ0FBaUJzRyxTQUQzQjtBQUVyQkMsc0JBQUFBLE9BQU8sRUFBRVQ7QUFGWSxxQkFBUDtBQUFBO0FBSHRCLGlCQUZ1QixFQVV2QnhFLFlBQVksQ0FBQ0osU0FWVSxDO0FBWTNCZ0YsZ0JBQUFBLGtCQUFrQixDQUFDTSxhQUFuQixDQUFpQyxZQUFNO0FBQ25DL0Usa0JBQUFBLE9BQU8sQ0FBQ0MsR0FBUixDQUFZLHFCQUFaLEVBQW1DLHVCQUFuQztBQUNILGlCQUZEO0FBR0krRSxnQkFBQUEsb0IsR0FBdUIsSztBQUMzQlAsZ0JBQUFBLGtCQUFrQixDQUFDUSxPQUFuQixDQUEyQixZQUFNO0FBQzdCakYsa0JBQUFBLE9BQU8sQ0FBQ0MsR0FBUixDQUFZLHFCQUFaLEVBQW1DLGtCQUFuQzs7QUFDQSxzQkFBSStFLG9CQUFKLEVBQTBCO0FBQ3RCO0FBQ0g7O0FBQ0QsK0VBQUM7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQ0dBLDRCQUFBQSxvQkFBb0IsR0FBRyxJQUF2QjtBQURIO0FBQUE7QUFBQSxtQ0FHK0IsTUFBSSxDQUFDZCxlQUFMLEVBSC9COztBQUFBO0FBR2FnQiw0QkFBQUEsU0FIYjtBQUlhQyw0QkFBQUEsZUFKYixHQUkrQkQsU0FBUyxDQUFDbkgsT0FBVixLQUFzQjhCLFlBQVksQ0FBQzlCLE9BQW5DLElBQ2pCbUgsU0FBUyxDQUFDM0YsS0FBVixLQUFvQk0sWUFBWSxDQUFDTixLQUwvQzs7QUFNTyxnQ0FBSTRGLGVBQUosRUFBcUI7QUFDakJuRiw4QkFBQUEsT0FBTyxDQUFDQyxHQUFSLENBQVkscUJBQVosRUFBbUMsdUJBQW5DO0FBQ0FKLDhCQUFBQSxZQUFZLEdBQUdxRixTQUFmO0FBQ0EsOEJBQUEsTUFBSSxDQUFDekksbUJBQUwsR0FBMkJvRCxZQUEzQjtBQUNBNEUsOEJBQUFBLGtCQUFrQixDQUFDL0YsR0FBbkIsR0FBeUJ3RyxTQUFTLENBQUMzRixLQUFuQzs7QUFDQSxrQ0FBSTRFLE1BQUosRUFBWTtBQUNSQSxnQ0FBQUEsTUFBTSxDQUFDekYsR0FBUCxHQUFhd0csU0FBUyxDQUFDM0YsS0FBdkI7QUFDSDs7QUFDRCxrQ0FBSTZFLFFBQUosRUFBYztBQUNWQSxnQ0FBQUEsUUFBUSxDQUFDZ0IsR0FBVCxHQUFlRixTQUFTLENBQUNuSCxPQUF6QjtBQUNIO0FBQ0o7O0FBakJSO0FBQUE7O0FBQUE7QUFBQTtBQUFBO0FBbUJPaUMsNEJBQUFBLE9BQU8sQ0FBQ0MsR0FBUixDQUFZLGlEQUFaOztBQW5CUDtBQXFCRytFLDRCQUFBQSxvQkFBb0IsR0FBRyxLQUF2Qjs7QUFyQkg7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsbUJBQUQ7QUF1QkgsaUJBNUJEOztBQTZCQVAsZ0JBQUFBLGtCQUFrQixDQUFDWSx1QkFBbkIsQ0FBMkNDLFFBQTNDLEdBQXNELFlBQU07QUFDeEQseUJBQU9iLGtCQUFrQixDQUFDWSx1QkFBbkIsQ0FBMkNFLEdBQWxEO0FBQ0gsaUJBRkQ7Ozt1QkFJeUIsbUNBQVcsVUFBQ3hGLENBQUQsRUFBSXlGLEdBQUosRUFBWTtBQUM1QyxzQkFBTUMsWUFBWSxHQUFJRCxHQUFHLElBQUlBLEdBQUcsQ0FBQ3JELFNBQVosSUFBMEI5QixJQUEvQztBQUNBbUYsa0JBQUFBLEdBQUcsQ0FBQ1YsT0FBSixHQUFjLEVBQWQ7O0FBQ0Esa0JBQUEsTUFBSSxDQUFDeEgsTUFBTCxDQUFZZ0gsTUFBWixDQUFtQkMsTUFBbkIsQ0FBMEJrQixZQUExQixFQUF3Q2pCLDRCQUF4QyxFQUF5RGdCLEdBQUcsQ0FBQ1YsT0FBN0Q7O0FBQ0Esc0JBQU1ELFNBQVMsR0FBRyxNQUFJLENBQUN2SCxNQUFMLENBQVlpQixJQUFaLElBQW9CLE1BQUksQ0FBQ2pCLE1BQUwsQ0FBWWlCLElBQVosQ0FBaUJzRyxTQUF2RDs7QUFDQSxzQkFBSUEsU0FBSixFQUFlO0FBQ1hXLG9CQUFBQSxHQUFHLENBQUNWLE9BQUosQ0FBWUQsU0FBWixHQUF3QkEsU0FBeEI7QUFDSDs7QUFDRCx5QkFBTztBQUNIQyxvQkFBQUEsT0FBTyxFQUFFVSxHQUFHLENBQUNWO0FBRFYsbUJBQVA7QUFHSCxpQkFYd0IsQzs7O0FBQW5CWSxnQkFBQUEsVTs7QUFZQUMsZ0JBQUFBLFEsR0FBVyxTQUFYQSxRQUFXLENBQUNDLElBQUQ7QUFBQSx5QkFBa0NGLFVBQVUsQ0FBQ0csTUFBWCxDQUFrQkQsSUFBbEIsQ0FBbEM7QUFBQSxpQjs7QUFDWEUsZ0JBQUFBLGMsR0FBaUIsU0FBakJBLGNBQWlCLFFBQWU7QUFBQSxzQkFBWjVFLEtBQVksU0FBWkEsS0FBWTtBQUNsQyxzQkFBTTZFLFVBQVUsR0FBRyx3Q0FBa0I3RSxLQUFsQixDQUFuQjtBQUNBLHlCQUNJNkUsVUFBVSxDQUFDQyxJQUFYLEtBQW9CLHFCQUFwQixJQUNHRCxVQUFVLENBQUNFLFNBQVgsS0FBeUIsY0FGaEM7QUFJSCxpQjs7QUFFRDlCLGdCQUFBQSxNQUFNLEdBQUcsSUFBSStCLDJCQUFKLENBQWtCekIsa0JBQWxCLENBQVQ7QUFDQUwsZ0JBQUFBLFFBQVEsR0FBR0osT0FBTyxHQUNaLElBQUltQyx3QkFBSixDQUFhO0FBQ1hmLGtCQUFBQSxHQUFHLEVBQUV2RixZQUFZLENBQUM5QixPQURQO0FBRVh6QyxrQkFBQUEsS0FBSyxFQUFFRCxjQUFjLENBQUN3RSxZQUFZLENBQUN2RSxLQUFkO0FBRlYsaUJBQWIsQ0FEWSxHQUtaLElBTE47QUFNTXNLLGdCQUFBQSxJLEdBQU94QixRQUFRLEdBQ2YsdUJBQU0wQixjQUFOLEVBQXNCSCxRQUFRLENBQUN4QixNQUFELENBQTlCLEVBQXdDd0IsUUFBUSxDQUFDdkIsUUFBRCxDQUFoRCxDQURlLEdBRWZ1QixRQUFRLENBQUN4QixNQUFELEM7QUFDZCxxQkFBSzFILG1CQUFMLEdBQTJCb0QsWUFBM0I7QUFDQSxxQkFBS3RELGFBQUwsR0FBcUIsSUFBSTZKLDBCQUFKLENBQWlCO0FBQ2xDQyxrQkFBQUEsS0FBSyxFQUFFLElBQUlDLGtDQUFKLENBQWtCLEVBQWxCLENBRDJCO0FBRWxDVixrQkFBQUEsSUFBSSxFQUFKQSxJQUZrQztBQUdsQ1csa0JBQUFBLGNBQWMsRUFBRTtBQUNaQyxvQkFBQUEsVUFBVSxFQUFFO0FBQ1JDLHNCQUFBQSxXQUFXLEVBQUU7QUFETCxxQkFEQTtBQUladkYsb0JBQUFBLEtBQUssRUFBRTtBQUNIdUYsc0JBQUFBLFdBQVcsRUFBRTtBQURWO0FBSks7QUFIa0IsaUJBQWpCLENBQXJCOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O3FCQWVJLEtBQUtsSyxhOzs7OztBQUNDMEYsZ0JBQUFBLE0sR0FBUyxLQUFLMUYsYTtBQUNwQixxQkFBS0EsYUFBTCxHQUFxQixJQUFyQjtBQUNBMEYsZ0JBQUFBLE1BQU0sQ0FBQ3lFLElBQVA7O3VCQUNNekUsTUFBTSxDQUFDMEUsVUFBUCxFOzs7Ozs7Ozs7Ozs7Ozs7Ozs7bUNBOU5ReE0sSyxFQUFxQjtBQUN2QyxVQUFJQSxLQUFLLENBQUNtSixJQUFOLEtBQWVzRCw2QkFBYUMsc0JBQWhDLEVBQXdEO0FBQ3BELGVBQU8sSUFBUDtBQUNIOztBQUNELFVBQU1wRCxZQUFZLEdBQUd0SixLQUFLLENBQUNzSixZQUEzQjs7QUFDQSxVQUFJLENBQUNBLFlBQUwsRUFBbUI7QUFDZixlQUFPLEtBQVA7QUFDSDs7QUFDRCxVQUFJLFdBQVdBLFlBQWYsRUFBNkI7QUFDekIsZUFBTyxJQUFQO0FBQ0g7O0FBQ0QsYUFBTyxFQUFFLGNBQWNBLFlBQWQsSUFBOEIsWUFBWUEsWUFBNUMsQ0FBUDtBQUNIOzs7O0VBaFF5Q3FELHFCOzs7O0lBd2R4Q3BKLDBCO0FBT0Ysc0NBQ0lxSixNQURKLEVBRUlDLGNBRkosRUFHSUMsUUFISixFQUlFO0FBQUE7O0FBQUE7O0FBQUE7O0FBQUE7O0FBQ0UsU0FBS0YsTUFBTCxHQUFjQSxNQUFkO0FBQ0EsU0FBS0MsY0FBTCxHQUFzQkEsY0FBdEI7QUFDQSxTQUFLQyxRQUFMLEdBQWdCQSxRQUFoQjtBQUNIOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OzRDQUdNNU4sSTtBQUFBQSxrQkFBQUEsSTs7O2lDQWtCQ0QsYUFBYSxDQUFpQkMsSUFBakIsRUFBdUIsUUFBdkIsRUFBaUM7QUFBQSx5QkFBTztBQUNyRDZOLG9CQUFBQSxNQUFNLEVBQUU3TixJQUFJLENBQUMsQ0FBRCxDQUR5QztBQUVyRCtILG9CQUFBQSxNQUFNLEVBQUcvSCxJQUFJLENBQUMsQ0FBRCxDQUZ3QztBQUdyRDhOLG9CQUFBQSxPQUFPLEVBQUc5TixJQUFJLENBQUMsQ0FBRCxDQUh1QztBQUlyRCtOLG9CQUFBQSxLQUFLLEVBQUcvTixJQUFJLENBQUMsQ0FBRCxDQUp5QztBQUtyRHlJLG9CQUFBQSxPQUFPLEVBQUd6SSxJQUFJLENBQUMsQ0FBRCxDQUx1QztBQU1yRDRILG9CQUFBQSxVQUFVLEVBQUU1SCxJQUFJLENBQUMsQ0FBRDtBQU5xQyxtQkFBUDtBQUFBLGlCQUFqQyxDLEVBUGI2TixNLGtCQUFBQSxNLEVBQ0E5RixNLGtCQUFBQSxNLEVBQ0ErRixPLGtCQUFBQSxPLEVBQ0FDLEssa0JBQUFBLEssRUFDQXRGLE8sa0JBQUFBLE8sRUFDQXVGLFcsa0JBQUFBLFcsRUFDQXBHLFUsa0JBQUFBLFU7bURBU0csS0FBSzhGLE1BQUwsQ0FBWXpLLE9BQVosQ0FBb0JtRixLQUFwQixXQUE2QixLQUFLdUYsY0FBbEM7QUFBQSwyRkFBMEQsbUJBQU8zRyxJQUFQO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUM3REEsNEJBQUFBLElBQUksQ0FBQ3VCLE1BQUwsQ0FBWSxRQUFaLEVBQXNCO0FBQ2xCc0YsOEJBQUFBLE1BQU0sRUFBTkEsTUFEa0I7QUFFbEI5Riw4QkFBQUEsTUFBTSxFQUFOQSxNQUZrQjtBQUdsQitGLDhCQUFBQSxPQUFPLEVBQVBBLE9BSGtCO0FBSWxCQyw4QkFBQUEsS0FBSyxFQUFMQSxLQUprQjtBQUtsQnRGLDhCQUFBQSxPQUFPLEVBQVBBLE9BTGtCO0FBTWxCdUYsOEJBQUFBLFdBQVcsRUFBWEE7QUFOa0IsNkJBQXRCO0FBRDZELDRDQVN0Q0EsV0FUc0M7O0FBQUE7QUFBQTtBQUFBO0FBQUE7O0FBQUE7QUFBQSxtQ0FVL0MsTUFBSSxDQUFDTixNQUFMLENBQVl4RyxhQUFaLENBQTBCRixJQUExQixDQVYrQzs7QUFBQTtBQUFBLDREQVVkcEYsbUJBVmM7O0FBQUE7QUFTdkRxTSw0QkFBQUEsY0FUdUQ7QUFXdkRDLDRCQUFBQSxDQVh1RCxHQVduRCxNQUFJLENBQUNQLGNBWDhDO0FBWXZEUSw0QkFBQUEsQ0FadUQsR0FZbkQsTUFBSSxDQUFDUCxRQVo4QztBQWF2RHZGLDRCQUFBQSxFQWJ1RCxpQ0FjckQ2RixDQWRxRCx5Q0FlOUNDLENBZjhDLGtKQW1CdkRGLGNBQWMsR0FBRyx3QkFBSCxHQUE4QixFQW5CVyxpREFxQnZEQyxDQXJCdUQsZ01BMEJuREQsY0FBYyxHQUFHLDZCQUFILEdBQW1DLEVBMUJFLG1DQTJCbkRsRyxNQTNCbUQ7QUE2QnZETyw0QkFBQUEsU0E3QnVELEdBNkJ4QjtBQUNqQ3VGLDhCQUFBQSxNQUFNLEVBQU5BLE1BRGlDO0FBRWpDQyw4QkFBQUEsT0FBTyxFQUFQQSxPQUZpQztBQUdqQ0MsOEJBQUFBLEtBQUssRUFBTEE7QUFIaUMsNkJBN0J3Qjs7QUFrQzdELGdDQUFJRSxjQUFKLEVBQW9CO0FBQ2hCM0YsOEJBQUFBLFNBQVMsQ0FBQzBGLFdBQVYsR0FBd0JBLFdBQXhCO0FBQ0g7O0FBQ0QsZ0NBQUl2RixPQUFKLEVBQWE7QUFDVEgsOEJBQUFBLFNBQVMsQ0FBQ0csT0FBVixHQUFvQjdFLElBQUksQ0FBQ3dGLEdBQUwsQ0FBU3RKLFdBQVQsRUFBc0IySSxPQUF0QixDQUFwQjtBQUNIOztBQXZDNEQ7QUFBQSxtQ0F3Qy9DLE1BQUksQ0FBQ2lGLE1BQUwsQ0FBWWhGLFlBQVosQ0FBeUJMLEVBQXpCLEVBQTZCQyxTQUE3QixFQUF3Q3RCLElBQXhDLEVBQThDeUIsT0FBOUMsQ0F4QytDOztBQUFBO0FBQUEsNENBd0NjeUYsQ0F4Q2Q7QUFBQSwrRUF3Q1NoSixJQXhDVDs7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxtQkFBMUQ7O0FBQUE7QUFBQTtBQUFBO0FBQUEscUJBeUNKMEMsVUF6Q0ksQzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozt1R0E2Q1B3RyxNOzs7Ozs7O21EQUVPLEtBQUtWLE1BQUwsQ0FBWXpLLE9BQVosQ0FBb0JtRixLQUFwQixXQUE2QixLQUFLdUYsY0FBbEM7QUFBQSwyRkFBOEQsbUJBQU8zRyxJQUFQO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUNqRUEsNEJBQUFBLElBQUksQ0FBQ3VCLE1BQUwsQ0FBWSxRQUFaLEVBQXNCO0FBQ2xCc0YsOEJBQUFBLE1BQU0sRUFBRU8sTUFBTSxDQUFDUCxNQURHO0FBRWxCUSw4QkFBQUEsTUFBTSxFQUFFRCxNQUFNLENBQUNDO0FBRkcsNkJBQXRCO0FBRGlFO0FBQUEsbUNBS3JELE1BQUksQ0FBQ1gsTUFBTCxDQUFZeEcsYUFBWixDQUEwQkYsSUFBMUIsQ0FMcUQ7O0FBQUE7QUFBQSxnREFLcEJuRixvQkFMb0I7QUFBQTtBQUFBO0FBQUE7O0FBQUEsNENBTXZEYyw4QkFOdUQ7QUFBQTtBQUFBLG1DQU9uRCxNQUFJLENBQUMrSyxNQUFMLENBQVlyRCxpQkFBWixFQVBtRDs7QUFBQTtBQUFBO0FBQUEsZ0RBTXhDaUUsK0JBTndDOztBQUFBO0FBVTNESCw0QkFBQUEsQ0FWMkQsR0FVdkQsTUFBSSxDQUFDUCxRQVZrRDtBQVczRFcsNEJBQUFBLENBWDJELEdBV3ZELE1BQUksQ0FBQ1gsUUFBTCxDQUFjWSxRQUFkLENBQXVCLEdBQXZCLHVCQUEwQ0wsQ0FBMUMsdUJBQTREQSxDQUE1RCxNQVh1RDtBQVkzRDlGLDRCQUFBQSxFQVoyRCxpQ0FhekRrRyxDQWJ5RCx5Q0FjbERKLENBZGtELHNHQWlCM0RJLENBakIyRDtBQXNCM0RqRyw0QkFBQUEsU0F0QjJELEdBc0I1QjtBQUNqQ3VGLDhCQUFBQSxNQUFNLEVBQUVPLE1BQU0sQ0FBQ1AsTUFEa0I7QUFFakNRLDhCQUFBQSxNQUFNLEVBQUVELE1BQU0sQ0FBQ0M7QUFGa0IsNkJBdEI0QjtBQUFBO0FBQUEsbUNBMEJuRCxNQUFJLENBQUNYLE1BQUwsQ0FBWWhGLFlBQVosQ0FBeUJMLEVBQXpCLEVBQTZCQyxTQUE3QixFQUF3Q3RCLElBQXhDLENBMUJtRDs7QUFBQTtBQUFBLDRDQTBCQ3VILENBMUJEO0FBQUEsK0VBMEJKckosSUExQkk7O0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsbUJBQTlEOztBQUFBO0FBQUE7QUFBQTtBQUFBLHFCQTJCSmtKLE1BQU0sQ0FBQ3hHLFVBM0JILEM7Ozs7Ozs7Ozs7Ozs7Ozs7OztnQ0FzQ0s7QUFBQTs7QUFBQSx5Q0FQVDVILElBT1M7QUFQVEEsUUFBQUEsSUFPUztBQUFBOztBQUFBLDRCQU1SRCxhQUFhLENBQXFCQyxJQUFyQixFQUEyQixRQUEzQixFQUFxQztBQUFBLGVBQU87QUFDekQ2TixVQUFBQSxNQUFNLEVBQUU3TixJQUFJLENBQUMsQ0FBRCxDQUQ2QztBQUV6RCtILFVBQUFBLE1BQU0sRUFBRy9ILElBQUksQ0FBQyxDQUFELENBRjRDO0FBR3pEeU8sVUFBQUEsVUFBVSxFQUFHek8sSUFBSSxDQUFDLENBQUQsQ0FId0M7QUFJekQ0TCxVQUFBQSxPQUFPLEVBQUc1TCxJQUFJLENBQUMsQ0FBRDtBQUoyQyxTQUFQO0FBQUEsT0FBckMsQ0FOTDtBQUFBLFVBRVI2TixNQUZRLG1CQUVSQSxNQUZRO0FBQUEsVUFHUjlGLE1BSFEsbUJBR1JBLE1BSFE7QUFBQSxVQUlSMEcsVUFKUSxtQkFJUkEsVUFKUTtBQUFBLFVBS1I3QyxPQUxRLG1CQUtSQSxPQUxROztBQVlaLFVBQU01RSxJQUFJLEdBQUcsS0FBSzBHLE1BQUwsQ0FBWXpKLE1BQVosQ0FBbUJnSCxNQUFuQixDQUEwQnlELFNBQTFCLENBQW9DLGdDQUFwQyxDQUFiO0FBQ0ExSCxNQUFBQSxJQUFJLENBQUN1QixNQUFMLENBQVlvRyxrQkFBS0MsU0FBakIsRUFBNEIsUUFBNUI7QUFDQSxVQUFNL0osSUFBSSwwQkFBbUIsS0FBSzhJLGNBQXhCLHVCQUFtRCxLQUFLQyxRQUF4RCxvQ0FDSixLQUFLRCxjQURELGlDQUNzQzVGLE1BRHRDLGtCQUFWO0FBR0EsVUFBTUYsS0FBSyxHQUFHLDRCQUFJLENBQUNoRCxJQUFELENBQUosQ0FBZDtBQUNBLFVBQUlnSyxZQUFZLEdBQUcsSUFBbkI7O0FBQ0EsbUVBQUM7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLHVCQUU0QixPQUFJLENBQUNuQixNQUFMLENBQVl6RyxxQkFBWixDQUFrQ0QsSUFBbEMsQ0FGNUI7O0FBQUE7QUFFYTRCLGdCQUFBQSxNQUZiO0FBR2FrRyxnQkFBQUEsVUFIYixHQUcwQmxHLE1BQU0sQ0FBQ21HLFNBQVAsQ0FBaUI7QUFDaENsSCxrQkFBQUEsS0FBSyxFQUFMQSxLQURnQztBQUVoQ1Msa0JBQUFBLFNBQVMsRUFBRTtBQUNQdUYsb0JBQUFBLE1BQU0sRUFBTkE7QUFETztBQUZxQixpQkFBakIsQ0FIMUI7QUFTT2dCLGdCQUFBQSxZQUFZLEdBQUdDLFVBQVUsQ0FBQ0MsU0FBWCxDQUFxQixVQUFDbEksT0FBRCxFQUFhO0FBQzdDNEgsa0JBQUFBLFVBQVUsQ0FBQyxlQUFELEVBQWtCNUgsT0FBTyxDQUFDM0IsSUFBUixDQUFhLE9BQUksQ0FBQ3lJLGNBQWxCLENBQWxCLENBQVY7QUFDSCxpQkFGYyxDQUFmO0FBVFA7QUFBQTs7QUFBQTtBQUFBO0FBQUE7QUFhTzNHLGdCQUFBQSxJQUFJLENBQUNKLEdBQUwsQ0FBUztBQUNMb0ksa0JBQUFBLEtBQUssRUFBRSxRQURGO0FBRUxDLGtCQUFBQSxPQUFPO0FBRkYsaUJBQVQ7O0FBSUEsb0JBQUlyRCxPQUFKLEVBQWE7QUFDVEEsa0JBQUFBLE9BQU8sZUFBUDtBQUNILGlCQUZELE1BRU87QUFDSGpGLGtCQUFBQSxPQUFPLENBQUNDLEdBQVIsQ0FBWSwrQkFBWjtBQUNIOztBQXJCUjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxPQUFEOztBQXdCQSxhQUFPO0FBQ0hzSSxRQUFBQSxXQUFXLEVBQUUsdUJBQU07QUFDZixjQUFJTCxZQUFKLEVBQWtCO0FBQ2RBLFlBQUFBLFlBQVksQ0FBQ0ssV0FBYjtBQUNBbEksWUFBQUEsSUFBSSxDQUFDbUksTUFBTDtBQUNIO0FBQ0o7QUFORSxPQUFQO0FBUUg7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7NkNBR01uUCxJO0FBQUFBLGtCQUFBQSxJOzs7a0NBY0NELGFBQWEsQ0FBbUJDLElBQW5CLEVBQXlCLFFBQXpCLEVBQW1DO0FBQUEseUJBQU87QUFDdkQ2TixvQkFBQUEsTUFBTSxFQUFFN04sSUFBSSxDQUFDLENBQUQsQ0FEMkM7QUFFdkQrSCxvQkFBQUEsTUFBTSxFQUFHL0gsSUFBSSxDQUFDLENBQUQsQ0FGMEM7QUFHdkR5SSxvQkFBQUEsT0FBTyxFQUFHekksSUFBSSxDQUFDLENBQUQsQ0FIeUM7QUFJdkQ0SCxvQkFBQUEsVUFBVSxFQUFFNUgsSUFBSSxDQUFDLENBQUQ7QUFKdUMsbUJBQVA7QUFBQSxpQkFBbkMsQyxFQUxiNk4sTSxtQkFBQUEsTSxFQUNBOUYsTSxtQkFBQUEsTSxFQUNTcUgsYSxtQkFBVDNHLE8sRUFDQWIsVSxtQkFBQUEsVSxFQUNBb0csVyxtQkFBQUEsVztBQU9FdkYsZ0JBQUFBLE8sR0FBVTJHLGFBQWEsSUFBSSxLQUFLMUIsTUFBTCxDQUFZekosTUFBWixDQUFtQmtGLGNBQW5CLEU7O3VCQUNkLEtBQUt0QixLQUFMLENBQVc7QUFDMUJnRyxrQkFBQUEsTUFBTSxFQUFOQSxNQUQwQjtBQUUxQjlGLGtCQUFBQSxNQUFNLEVBQU5BLE1BRjBCO0FBRzFCVSxrQkFBQUEsT0FBTyxFQUFQQSxPQUgwQjtBQUkxQmIsa0JBQUFBLFVBQVUsRUFBVkEsVUFKMEI7QUFLMUJvRyxrQkFBQUEsV0FBVyxFQUFYQTtBQUwwQixpQkFBWCxDOzs7QUFBYnFCLGdCQUFBQSxJOztzQkFPRkEsSUFBSSxDQUFDbFAsTUFBTCxHQUFjLEM7Ozs7O21EQUNQa1AsSUFBSSxDQUFDLENBQUQsQzs7O2dDQUVUMU0sOEI7O3VCQUFvQyxLQUFLK0ssTUFBTCxDQUFZckQsaUJBQVosQ0FBOEI7QUFDcEVpRixrQkFBQUEsVUFBVSxFQUFFLEtBQUszQjtBQURtRCxpQkFBOUIsQzs7OztvQ0FBckJ4RSxjOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFNN0JuRyxnQkFBZ0IsQ0FBQ3VNLFVBQWpCLEdBQThCLGtCQUE5QiIsInNvdXJjZXNDb250ZW50IjpbIi8qXG4gKiBDb3B5cmlnaHQgMjAxOC0yMDIwIFRPTiBERVYgU09MVVRJT05TIExURC5cbiAqL1xuXG4vLyBAZmxvd1xuXG5pbXBvcnQgeyBJbk1lbW9yeUNhY2hlIH0gZnJvbSAnYXBvbGxvLWNhY2hlLWlubWVtb3J5JztcbmltcG9ydCB7IEFwb2xsb0NsaWVudCB9IGZyb20gJ2Fwb2xsby1jbGllbnQnO1xuaW1wb3J0IHsgQXBvbGxvTGluaywgc3BsaXQgfSBmcm9tICdhcG9sbG8tbGluayc7XG5pbXBvcnQgeyBIdHRwTGluayB9IGZyb20gJ2Fwb2xsby1saW5rLWh0dHAnO1xuaW1wb3J0IHsgV2ViU29ja2V0TGluayB9IGZyb20gJ2Fwb2xsby1saW5rLXdzJztcbmltcG9ydCB7IGdldE1haW5EZWZpbml0aW9uIH0gZnJvbSAnYXBvbGxvLXV0aWxpdGllcyc7XG5pbXBvcnQgZ3FsIGZyb20gJ2dyYXBocWwtdGFnJztcbmltcG9ydCB7IFN1YnNjcmlwdGlvbkNsaWVudCB9IGZyb20gJ3N1YnNjcmlwdGlvbnMtdHJhbnNwb3J0LXdzJztcbmltcG9ydCB7IHNldENvbnRleHQgfSBmcm9tICdhcG9sbG8tbGluay1jb250ZXh0JztcbmltcG9ydCB7XG4gICAgRk9STUFUX1RFWFRfTUFQLCBUYWdzLCBTcGFuLCBTcGFuQ29udGV4dCxcbn0gZnJvbSAnb3BlbnRyYWNpbmcnO1xuaW1wb3J0IHR5cGUge1xuICAgIFRPTlF1ZXJpZXMsXG4gICAgVE9OUUNvbGxlY3Rpb24sXG4gICAgU3Vic2NyaXB0aW9uLFxuICAgIFRPTlF1ZXJ5UGFyYW1zLFxuICAgIFRPTlN1YnNjcmliZVBhcmFtcyxcbiAgICBUT05XYWl0Rm9yUGFyYW1zLFxuICAgIFRPTlF1ZXJ5QWdncmVnYXRlUGFyYW1zLFxufSBmcm9tICcuLi8uLi90eXBlcyc7XG5pbXBvcnQgeyBUT05DbGllbnQgfSBmcm9tICcuLi9UT05DbGllbnQnO1xuaW1wb3J0IHsgZW1wdHlUT05FcnJvckRhdGEsIFRPTkNsaWVudEVycm9yLCBUT05FcnJvckNvZGUgfSBmcm9tICcuLi9UT05DbGllbnRFcnJvcic7XG5pbXBvcnQgdHlwZSB7IFRPTk1vZHVsZUNvbnRleHQgfSBmcm9tICcuLi9UT05Nb2R1bGUnO1xuaW1wb3J0IHsgVE9OTW9kdWxlIH0gZnJvbSAnLi4vVE9OTW9kdWxlJztcbmltcG9ydCBUT05Db25maWdNb2R1bGUsIHsgVVJMUGFydHMgfSBmcm9tICcuL1RPTkNvbmZpZ01vZHVsZSc7XG5cblxuZXhwb3J0IHR5cGUgUmVxdWVzdCA9IHtcbiAgICBpZDogc3RyaW5nLFxuICAgIGJvZHk6IHN0cmluZyxcbn1cblxuZXhwb3J0IHR5cGUgU2VydmVySW5mbyA9IHtcbiAgICB2ZXJzaW9uOiBudW1iZXIsXG4gICAgc3VwcG9ydHNPcGVyYXRpb25JZDogYm9vbGVhbixcbiAgICBzdXBwb3J0c0FnZ3JlZ2F0aW9uczogYm9vbGVhbixcbiAgICBzdXBwb3J0c1RpbWU6IGJvb2xlYW4sXG4gICAgdGltZURlbHRhOiA/bnVtYmVyLFxufTtcblxuXG50eXBlIEdyYXBoUUxDbGllbnRDb25maWcgPSB7XG4gICAgaHR0cFVybDogc3RyaW5nLFxuICAgIHdzVXJsOiBzdHJpbmcsXG4gICAgZmV0Y2g6IGFueSxcbiAgICBXZWJTb2NrZXQ6IGFueSxcbn07XG5cbi8vIEtlZXAtYWxpdmUgdGltZW91dCB1c2VkIHRvIHN1cHBvcnQga2VlcC1hbGl2ZSBjb25uZWN0aW9uIGNoZWNraW5nOlxuLy8gLSBFdmVyeSAxIG1pbnV0ZSBzZXJ2ZXIgc2VuZHMgR1FMX0NPTk5FQ1RJT05fS0VFUF9BTElWRSBtZXNzYWdlLlxuLy8gLSBFdmVyeSAyIG1pbnV0ZXMgY2xpZW50IGNoZWNrcyB0aGF0IEdRTF9DT05ORUNUSU9OX0tFRVBfQUxJVkUgbWVzc2FnZSB3YXMgcmVjZWl2ZWRcbi8vICAgd2l0aGluIGxhc3QgMiBtaW51dGVzLlxuLy8gLSBJZiBjbGllbnQgaGFkbid0IHJlY2VpdmVkIGtlZXAgYWxpdmUgbWVzc2FnZSBkdXJpbmcgbGFzdCAyIG1pbnV0ZXNcbi8vICAgaXQgY2xvc2VzIGNvbm5lY3Rpb24gYW5kIGdvZXMgdG8gcmVjb25uZWN0LlxuY29uc3QgS0VFUF9BTElWRV9USU1FT1VUID0gMiAqIDYwMDAwO1xuXG5leHBvcnQgY29uc3QgTUFYX1RJTUVPVVQgPSAyMTQ3NDgzNjQ3O1xuXG5mdW5jdGlvbiByZXNvbHZlUGFyYW1zPFQ+KGFyZ3M6IGFueVtdLCByZXF1aXJlZFBhcmFtTmFtZTogc3RyaW5nLCByZXNvbHZlQXJnczogKCkgPT4gVCk6IFQge1xuICAgIHJldHVybiAoYXJncy5sZW5ndGggPT09IDEpICYmIChyZXF1aXJlZFBhcmFtTmFtZSBpbiBhcmdzWzBdKSA/IGFyZ3NbMF0gOiByZXNvbHZlQXJncygpO1xufVxuXG50eXBlIE11bHRpY2FzdExpc3RlbmVyPFZhbHVlPiA9IHtcbiAgICByZXNvbHZlOiAodmFsdWU6IFZhbHVlKSA9PiB2b2lkO1xuICAgIHJlamVjdDogKGVycm9yOiBFcnJvcikgPT4gdm9pZDtcbn07XG5cbmNsYXNzIE11bHRpY2FzdFByb21pc2U8VmFsdWU+IHtcbiAgICBsaXN0ZW5lcnM6IE11bHRpY2FzdExpc3RlbmVyPFZhbHVlPltdO1xuICAgIG9uQ29tcGxldGU6ID8oKCkgPT4gdm9pZCk7XG5cbiAgICBjb25zdHJ1Y3RvcigpIHtcbiAgICAgICAgdGhpcy5saXN0ZW5lcnMgPSBbXTtcbiAgICAgICAgdGhpcy5vbkNvbXBsZXRlID0gbnVsbDtcbiAgICB9XG5cbiAgICBsaXN0ZW4oKTogUHJvbWlzZTxWYWx1ZT4ge1xuICAgICAgICBjb25zdCBsaXN0ZW5lcjogTXVsdGljYXN0TGlzdGVuZXI8VmFsdWU+ID0ge1xuICAgICAgICAgICAgcmVzb2x2ZTogKCkgPT4ge1xuICAgICAgICAgICAgfSxcbiAgICAgICAgICAgIHJlamVjdDogKCkgPT4ge1xuICAgICAgICAgICAgfSxcbiAgICAgICAgfTtcbiAgICAgICAgdGhpcy5saXN0ZW5lcnMucHVzaChsaXN0ZW5lcik7XG4gICAgICAgIHJldHVybiBuZXcgUHJvbWlzZSgocmVzb2x2ZSwgcmVqZWN0KSA9PiB7XG4gICAgICAgICAgICBsaXN0ZW5lci5yZXNvbHZlID0gcmVzb2x2ZTtcbiAgICAgICAgICAgIGxpc3RlbmVyLnJlamVjdCA9IHJlamVjdDtcbiAgICAgICAgfSk7XG4gICAgfVxuXG4gICAgcmVzb2x2ZSh2YWx1ZTogVmFsdWUpIHtcbiAgICAgICAgdGhpcy5jb21wbGV0ZShsaXN0ZW5lciA9PiBsaXN0ZW5lci5yZXNvbHZlKHZhbHVlKSk7XG4gICAgfVxuXG4gICAgcmVqZWN0KGVycm9yOiBFcnJvcikge1xuICAgICAgICB0aGlzLmNvbXBsZXRlKGxpc3RlbmVyID0+IGxpc3RlbmVyLnJlamVjdChlcnJvcikpO1xuICAgIH1cblxuICAgIGNvbXBsZXRlKGNvbXBsZXRlTGlzdGVuZXI6IChsaXN0ZW5lcjogTXVsdGljYXN0TGlzdGVuZXI8VmFsdWU+KSA9PiB2b2lkKSB7XG4gICAgICAgIGNvbnN0IHsgbGlzdGVuZXJzIH0gPSB0aGlzO1xuICAgICAgICB0aGlzLmxpc3RlbmVycyA9IFtdO1xuICAgICAgICBpZiAodGhpcy5vbkNvbXBsZXRlKSB7XG4gICAgICAgICAgICB0aGlzLm9uQ29tcGxldGUoKTtcbiAgICAgICAgfVxuICAgICAgICBsaXN0ZW5lcnMuZm9yRWFjaChsaXN0ZW5lciA9PiBjb21wbGV0ZUxpc3RlbmVyKGxpc3RlbmVyKSk7XG4gICAgfVxufVxuXG5mdW5jdGlvbiB2ZXJzaW9uVG9OdW1iZXIoczogc3RyaW5nKTogbnVtYmVyIHtcbiAgICBjb25zdCBwYXJ0cyA9IGAke3MgfHwgJyd9YC5zcGxpdCgnLicpXG4gICAgICAgIC5tYXAoeCA9PiBOdW1iZXIoeCkpXG4gICAgICAgIC5zbGljZSgwLCAzKTtcbiAgICB3aGlsZSAocGFydHMubGVuZ3RoIDwgMykge1xuICAgICAgICBwYXJ0cy5wdXNoKDApO1xuICAgIH1cbiAgICByZXR1cm4gcGFydHNbMF0gKiAxMDAwMDAwICsgcGFydHNbMV0gKiAxMDAwICsgcGFydHNbMl07XG59XG5cbmZ1bmN0aW9uIHJlc29sdmVTZXJ2ZXJJbmZvKHZlcnNpb25TdHJpbmc6IHN0cmluZyB8IG51bGwgfCB0eXBlb2YgdW5kZWZpbmVkKTogU2VydmVySW5mbyB7XG4gICAgY29uc3QgdmVyc2lvbiA9IHZlcnNpb25Ub051bWJlcih2ZXJzaW9uU3RyaW5nIHx8ICcwLjI0LjQnKTtcbiAgICByZXR1cm4ge1xuICAgICAgICB2ZXJzaW9uLFxuICAgICAgICBzdXBwb3J0c09wZXJhdGlvbklkOiB2ZXJzaW9uID4gMjQwMDQsXG4gICAgICAgIHN1cHBvcnRzQWdncmVnYXRpb25zOiB2ZXJzaW9uID49IDI1MDAwLFxuICAgICAgICBzdXBwb3J0c1RpbWU6IHZlcnNpb24gPj0gMjYwMDMsXG4gICAgICAgIHRpbWVEZWx0YTogbnVsbCxcbiAgICB9O1xufVxuXG5mdW5jdGlvbiBhYm9ydGFibGVGZXRjaChmZXRjaCkge1xuICAgIHJldHVybiAoaW5wdXQsIG9wdGlvbnMpID0+IHtcbiAgICAgICAgcmV0dXJuIG5ldyBQcm9taXNlKChyZXNvbHZlLCByZWplY3QpID0+IHtcbiAgICAgICAgICAgIGNvbnN0IHF1ZXJ5VGltZW91dDogbnVtYmVyIHwgdHlwZW9mIHVuZGVmaW5lZCA9IG9wdGlvbnMucXVlcnlUaW1lb3V0O1xuICAgICAgICAgICAgbGV0IGZldGNoT3B0aW9ucyA9IG9wdGlvbnM7XG4gICAgICAgICAgICBpZiAocXVlcnlUaW1lb3V0KSB7XG4gICAgICAgICAgICAgICAgY29uc3QgY29udHJvbGxlciA9IGdsb2JhbC5BYm9ydENvbnRyb2xsZXIgPyBuZXcgZ2xvYmFsLkFib3J0Q29udHJvbGxlcigpIDogbnVsbDtcbiAgICAgICAgICAgICAgICBpZiAoY29udHJvbGxlcikge1xuICAgICAgICAgICAgICAgICAgICBmZXRjaE9wdGlvbnMgPSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAuLi5vcHRpb25zLFxuICAgICAgICAgICAgICAgICAgICAgICAgc2lnbmFsOiBjb250cm9sbGVyLnNpZ25hbCxcbiAgICAgICAgICAgICAgICAgICAgfTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgc2V0VGltZW91dCgoKSA9PiB7XG4gICAgICAgICAgICAgICAgICAgIHJlamVjdChUT05DbGllbnRFcnJvci5xdWVyeUZvcmNpYmx5QWJvcnRlZChlbXB0eVRPTkVycm9yRGF0YSkpO1xuICAgICAgICAgICAgICAgICAgICBpZiAoY29udHJvbGxlcikge1xuICAgICAgICAgICAgICAgICAgICAgICAgY29udHJvbGxlci5hYm9ydCgpO1xuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgfSwgcXVlcnlUaW1lb3V0KTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGZldGNoKGlucHV0LCBmZXRjaE9wdGlvbnMpLnRoZW4ocmVzb2x2ZSwgcmVqZWN0KTtcbiAgICAgICAgfSk7XG4gICAgfTtcbn1cblxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgVE9OUXVlcmllc01vZHVsZSBleHRlbmRzIFRPTk1vZHVsZSBpbXBsZW1lbnRzIFRPTlF1ZXJpZXMge1xuICAgIHRyYW5zYWN0aW9uczogVE9OUUNvbGxlY3Rpb247XG4gICAgbWVzc2FnZXM6IFRPTlFDb2xsZWN0aW9uO1xuICAgIGJsb2NrczogVE9OUUNvbGxlY3Rpb247XG4gICAgYWNjb3VudHM6IFRPTlFDb2xsZWN0aW9uO1xuICAgIGJsb2Nrc19zaWduYXR1cmVzOiBUT05RQ29sbGVjdGlvbjtcblxuICAgIGNvbmZpZzogVE9OQ29uZmlnTW9kdWxlO1xuXG4gICAgZ3JhcGhxbENsaWVudENyZWF0aW9uOiA/TXVsdGljYXN0UHJvbWlzZTxBcG9sbG9DbGllbnQ+O1xuICAgIGdyYXBocWxDbGllbnQ6ID9BcG9sbG9DbGllbnQ7XG4gICAgZ3JhcGhxbENsaWVudENvbmZpZzogP0dyYXBoUUxDbGllbnRDb25maWc7XG5cbiAgICBvdmVycmlkZVdzVXJsOiA/c3RyaW5nO1xuICAgIG9wZXJhdGlvbklkUHJlZml4OiBzdHJpbmc7XG4gICAgb3BlcmF0aW9uSWRTdWZmaXg6IG51bWJlcjtcbiAgICBzZXJ2ZXJJbmZvOiBTZXJ2ZXJJbmZvO1xuXG4gICAgY29uc3RydWN0b3IoY29udGV4dDogVE9OTW9kdWxlQ29udGV4dCkge1xuICAgICAgICBzdXBlcihjb250ZXh0KTtcbiAgICAgICAgdGhpcy5ncmFwaHFsQ2xpZW50ID0gbnVsbDtcbiAgICAgICAgdGhpcy5ncmFwaHFsQ2xpZW50Q3JlYXRpb24gPSBudWxsO1xuICAgICAgICB0aGlzLmdyYXBocWxDbGllbnRDb25maWcgPSBudWxsO1xuICAgICAgICB0aGlzLm92ZXJyaWRlV3NVcmwgPSBudWxsO1xuICAgICAgICB0aGlzLm9wZXJhdGlvbklkUHJlZml4ID0gKERhdGUubm93KCkgJSA2MDAwMCkudG9TdHJpbmcoMTYpO1xuICAgICAgICBmb3IgKGxldCBpID0gMDsgaSA8IDEwOyBpICs9IDEpIHtcbiAgICAgICAgICAgIGNvbnN0IHJhbmRvbVBhcnQgPSBNYXRoLnJvdW5kKE1hdGgucmFuZG9tKCkgKiAyNTYpLnRvU3RyaW5nKDE2KTtcbiAgICAgICAgICAgIHRoaXMub3BlcmF0aW9uSWRQcmVmaXggPSBgJHt0aGlzLm9wZXJhdGlvbklkUHJlZml4fSR7cmFuZG9tUGFydH1gO1xuICAgICAgICB9XG4gICAgICAgIHRoaXMub3BlcmF0aW9uSWRTdWZmaXggPSAxO1xuICAgICAgICB0aGlzLnNlcnZlckluZm8gPSByZXNvbHZlU2VydmVySW5mbygpO1xuICAgIH1cblxuICAgIGFzeW5jIHNldHVwKCkge1xuICAgICAgICB0aGlzLmNvbmZpZyA9IHRoaXMuY29udGV4dC5nZXRNb2R1bGUoVE9OQ29uZmlnTW9kdWxlKTtcbiAgICAgICAgdGhpcy50cmFuc2FjdGlvbnMgPSBuZXcgVE9OUXVlcmllc01vZHVsZUNvbGxlY3Rpb24odGhpcywgJ3RyYW5zYWN0aW9ucycsICdUcmFuc2FjdGlvbicpO1xuICAgICAgICB0aGlzLm1lc3NhZ2VzID0gbmV3IFRPTlF1ZXJpZXNNb2R1bGVDb2xsZWN0aW9uKHRoaXMsICdtZXNzYWdlcycsICdNZXNzYWdlJyk7XG4gICAgICAgIHRoaXMuYmxvY2tzID0gbmV3IFRPTlF1ZXJpZXNNb2R1bGVDb2xsZWN0aW9uKHRoaXMsICdibG9ja3MnLCAnQmxvY2snKTtcbiAgICAgICAgdGhpcy5hY2NvdW50cyA9IG5ldyBUT05RdWVyaWVzTW9kdWxlQ29sbGVjdGlvbih0aGlzLCAnYWNjb3VudHMnLCAnQWNjb3VudCcpO1xuICAgICAgICB0aGlzLmJsb2Nrc19zaWduYXR1cmVzID1cbiAgICAgICAgICAgIG5ldyBUT05RdWVyaWVzTW9kdWxlQ29sbGVjdGlvbih0aGlzLCAnYmxvY2tzX3NpZ25hdHVyZXMnLCAnQmxvY2tTaWduYXR1cmVzJyk7XG4gICAgfVxuXG4gICAgZ2V0UXVlcnlVcmwoKTogc3RyaW5nIHtcbiAgICAgICAgcmV0dXJuIHRoaXMuZ3JhcGhxbENsaWVudENvbmZpZz8uaHR0cFVybCB8fCAnJztcbiAgICB9XG5cbiAgICBhc3luYyBkZXRlY3RSZWRpcmVjdChmZXRjaDogYW55LCBzb3VyY2VVcmw6IHN0cmluZyk6IFByb21pc2U8c3RyaW5nPiB7XG4gICAgICAgIGNvbnN0IHJlc3BvbnNlID0gYXdhaXQgZmV0Y2goc291cmNlVXJsKTtcbiAgICAgICAgdHJ5IHtcbiAgICAgICAgICAgIGNvbnN0IHJlc3BvbnNlVGV4dCA9IGF3YWl0IHJlc3BvbnNlLnRleHQoKTtcbiAgICAgICAgICAgIGNvbnN0IHJlc3BvbnNlSnNvbiA9IEpTT04ucGFyc2UocmVzcG9uc2VUZXh0KTtcbiAgICAgICAgICAgIHRoaXMuc2VydmVySW5mbyA9IHJlc29sdmVTZXJ2ZXJJbmZvKHJlc3BvbnNlSnNvbi5kYXRhLmluZm8udmVyc2lvbik7XG4gICAgICAgIH0gY2F0Y2gge1xuICAgICAgICB9XG4gICAgICAgIGlmIChyZXNwb25zZS5yZWRpcmVjdGVkID09PSB0cnVlKSB7XG4gICAgICAgICAgICByZXR1cm4gcmVzcG9uc2UudXJsO1xuICAgICAgICB9XG4gICAgICAgIGlmIChyZXNwb25zZS5yZWRpcmVjdGVkID09PSBmYWxzZSkge1xuICAgICAgICAgICAgcmV0dXJuICcnO1xuICAgICAgICB9XG4gICAgICAgIGNvbnN0IHNvdXJjZUxvY2F0aW9uID0gVVJMUGFydHMucGFyc2Uoc291cmNlVXJsKVxuICAgICAgICAgICAgLmZpeFF1ZXJ5KCgpID0+ICcnKVxuICAgICAgICAgICAgLnRvU3RyaW5nKClcbiAgICAgICAgICAgIC50b0xvd2VyQ2FzZSgpO1xuICAgICAgICBjb25zdCByZXNwb25zZUxvY2F0aW9uID0gVVJMUGFydHMucGFyc2UocmVzcG9uc2UudXJsKVxuICAgICAgICAgICAgLmZpeFF1ZXJ5KCgpID0+ICcnKVxuICAgICAgICAgICAgLnRvU3RyaW5nKClcbiAgICAgICAgICAgIC50b0xvd2VyQ2FzZSgpO1xuICAgICAgICByZXR1cm4gcmVzcG9uc2VMb2NhdGlvbiAhPT0gc291cmNlTG9jYXRpb24gPyByZXNwb25zZS51cmwgOiAnJztcbiAgICB9XG5cbiAgICBhc3luYyBnZXRDbGllbnRDb25maWcoKTogUHJvbWlzZTxHcmFwaFFMQ2xpZW50Q29uZmlnPiB7XG4gICAgICAgIGNvbnN0IGNvbmZpZyA9IHRoaXMuY29uZmlnO1xuICAgICAgICBjb25zdCBjbGllbnRQbGF0Zm9ybSA9IFRPTkNsaWVudC5jbGllbnRQbGF0Zm9ybTtcbiAgICAgICAgaWYgKCFjbGllbnRQbGF0Zm9ybSkge1xuICAgICAgICAgICAgdGhyb3cgRXJyb3IoJ1RPTiBDbGllbnQgZG9lcyBub3QgY29uZmlndXJlZCcpO1xuICAgICAgICB9XG4gICAgICAgIGNvbnN0IGZldGNoID0gY2xpZW50UGxhdGZvcm0uZmV0Y2g7XG5cbiAgICAgICAgZnVuY3Rpb24gZ2V0Q29uZmlnRm9yU2VydmVyKHNlcnZlcjogc3RyaW5nKTogR3JhcGhRTENsaWVudENvbmZpZyB7XG4gICAgICAgICAgICBjb25zdCBodHRwUGFydHMgPSBVUkxQYXJ0cy5wYXJzZShzZXJ2ZXIpXG4gICAgICAgICAgICAgICAgLmZpeFByb3RvY29sKHggPT4gKHggPT09ICdodHRwOi8vJyA/IHggOiAnaHR0cHM6Ly8nKSlcbiAgICAgICAgICAgICAgICAuZml4UGF0aCh4ID0+IGAke3h9L2dyYXBocWxgKTtcbiAgICAgICAgICAgIGNvbnN0IGh0dHAgPSBodHRwUGFydHMudG9TdHJpbmcoKTtcbiAgICAgICAgICAgIGNvbnN0IHdzID0gaHR0cFBhcnRzXG4gICAgICAgICAgICAgICAgLmZpeFByb3RvY29sKHggPT4gKHggPT09ICdodHRwOi8vJyA/ICd3czovLycgOiAnd3NzOi8vJykpXG4gICAgICAgICAgICAgICAgLnRvU3RyaW5nKCk7XG4gICAgICAgICAgICByZXR1cm4ge1xuICAgICAgICAgICAgICAgIGh0dHBVcmw6IGh0dHAsXG4gICAgICAgICAgICAgICAgd3NVcmw6IHdzLFxuICAgICAgICAgICAgICAgIGZldGNoOiBjbGllbnRQbGF0Zm9ybS5mZXRjaCxcbiAgICAgICAgICAgICAgICBXZWJTb2NrZXQ6IGNsaWVudFBsYXRmb3JtLldlYlNvY2tldCxcbiAgICAgICAgICAgIH07XG4gICAgICAgIH1cblxuICAgICAgICBmb3IgKGNvbnN0IHNlcnZlciBvZiBjb25maWcuZGF0YS5zZXJ2ZXJzKSB7XG4gICAgICAgICAgICBjb25zdCBjbGllbnRDb25maWcgPSBnZXRDb25maWdGb3JTZXJ2ZXIoc2VydmVyKTtcbiAgICAgICAgICAgIHRyeSB7XG4gICAgICAgICAgICAgICAgLy8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIG5vLWF3YWl0LWluLWxvb3BcbiAgICAgICAgICAgICAgICBjb25zdCByZWRpcmVjdGVkID0gYXdhaXQgdGhpcy5kZXRlY3RSZWRpcmVjdChcbiAgICAgICAgICAgICAgICAgICAgZmV0Y2gsXG4gICAgICAgICAgICAgICAgICAgIGAke2NsaWVudENvbmZpZy5odHRwVXJsfT9xdWVyeT0lN0JpbmZvJTdCdmVyc2lvbiU3RCU3RGAsXG4gICAgICAgICAgICAgICAgKTtcbiAgICAgICAgICAgICAgICBpZiAocmVkaXJlY3RlZCAhPT0gJycpIHtcbiAgICAgICAgICAgICAgICAgICAgY29uc3QgaHR0cFBhcnRzID0gVVJMUGFydHMucGFyc2UocmVkaXJlY3RlZClcbiAgICAgICAgICAgICAgICAgICAgICAgIC5maXhRdWVyeShfID0+ICcnKTtcbiAgICAgICAgICAgICAgICAgICAgY2xpZW50Q29uZmlnLmh0dHBVcmwgPSBodHRwUGFydHMudG9TdHJpbmcoKTtcbiAgICAgICAgICAgICAgICAgICAgY2xpZW50Q29uZmlnLndzVXJsID0gaHR0cFBhcnRzXG4gICAgICAgICAgICAgICAgICAgICAgICAuZml4UHJvdG9jb2woeCA9PiAoeCA9PT0gJ2h0dHA6Ly8nID8gJ3dzOi8vJyA6ICd3c3M6Ly8nKSlcbiAgICAgICAgICAgICAgICAgICAgICAgIC50b1N0cmluZygpO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICByZXR1cm4gY2xpZW50Q29uZmlnO1xuICAgICAgICAgICAgfSBjYXRjaCAoZXJyb3IpIHtcbiAgICAgICAgICAgICAgICBjb25zb2xlLmxvZyhgW2dldENsaWVudENvbmZpZ10gZm9yIHNlcnZlciBcIiR7c2VydmVyfVwiIGZhaWxlZGAsIHtcbiAgICAgICAgICAgICAgICAgICAgbWVzc2FnZTogZXJyb3IubWVzc2FnZSB8fCBlcnJvci50b1N0cmluZygpLFxuICAgICAgICAgICAgICAgICAgICBkYXRhOiB7XG4gICAgICAgICAgICAgICAgICAgICAgICBodHRwX3VybDogY2xpZW50Q29uZmlnLmh0dHBVcmwsXG4gICAgICAgICAgICAgICAgICAgICAgICB3c191cmw6IGNsaWVudENvbmZpZy53c1VybCxcbiAgICAgICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICB9KTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgICByZXR1cm4gZ2V0Q29uZmlnRm9yU2VydmVyKGNvbmZpZy5kYXRhLnNlcnZlcnNbMF0pO1xuICAgIH1cblxuICAgIGFzeW5jIGdldFNlcnZlckluZm8oc3Bhbj86IFNwYW4gfCBTcGFuQ29udGV4dCk6IFByb21pc2U8U2VydmVySW5mbz4ge1xuICAgICAgICBhd2FpdCB0aGlzLmdyYXBocWxDbGllbnRSZXF1aXJlZChzcGFuKTtcbiAgICAgICAgcmV0dXJuIHRoaXMuc2VydmVySW5mbztcbiAgICB9XG5cbiAgICBhc3luYyBzZXJ2ZXJUaW1lRGVsdGEoc3Bhbj86IFNwYW4gfCBTcGFuQ29udGV4dCk6IFByb21pc2U8bnVtYmVyPiB7XG4gICAgICAgIGNvbnN0IHNlcnZlckluZm8gPSBhd2FpdCB0aGlzLmdldFNlcnZlckluZm8oc3Bhbik7XG4gICAgICAgIGNvbnN0IGNsaWVudENvbmZpZyA9IHRoaXMuZ3JhcGhxbENsaWVudENvbmZpZztcbiAgICAgICAgaWYgKGNsaWVudENvbmZpZyAmJiBzZXJ2ZXJJbmZvLnN1cHBvcnRzVGltZSAmJiBzZXJ2ZXJJbmZvLnRpbWVEZWx0YSA9PT0gbnVsbCkge1xuICAgICAgICAgICAgdHJ5IHtcbiAgICAgICAgICAgICAgICBjb25zdCBzdGFydCA9IERhdGUubm93KCk7XG4gICAgICAgICAgICAgICAgY29uc3QgcmVzcG9uc2UgPSBhd2FpdCBjbGllbnRDb25maWcuZmV0Y2goYCR7Y2xpZW50Q29uZmlnLmh0dHBVcmx9P3F1ZXJ5PSU3QmluZm8lN0J0aW1lJTdEJTdEYCk7XG4gICAgICAgICAgICAgICAgY29uc3QgZW5kID0gRGF0ZS5ub3coKTtcbiAgICAgICAgICAgICAgICBjb25zdCByZXNwb25zZURhdGEgPSBhd2FpdCByZXNwb25zZS5qc29uKCk7XG4gICAgICAgICAgICAgICAgY29uc3Qgc2VydmVyVGltZSA9IHJlc3BvbnNlRGF0YS5kYXRhLmluZm8udGltZTtcbiAgICAgICAgICAgICAgICBzZXJ2ZXJJbmZvLnRpbWVEZWx0YSA9IE1hdGgucm91bmQoc2VydmVyVGltZSAtIChzdGFydCArIChlbmQgLSBzdGFydCkgLyAyKSk7XG4gICAgICAgICAgICB9IGNhdGNoIChlcnJvcikge1xuICAgICAgICAgICAgICAgIGNvbnNvbGUubG9nKCc+Pj4nLCBlcnJvcik7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgICAgcmV0dXJuIHNlcnZlckluZm8udGltZURlbHRhIHx8IDA7XG4gICAgfVxuXG4gICAgYXN5bmMgc2VydmVyTm93KHNwYW4/OiBTcGFuIHwgU3BhbkNvbnRleHQpOiBQcm9taXNlPG51bWJlcj4ge1xuICAgICAgICBjb25zdCB0aW1lRGVsdGEgPSBhd2FpdCB0aGlzLnNlcnZlclRpbWVEZWx0YShzcGFuKTtcbiAgICAgICAgcmV0dXJuIERhdGUubm93KCkgKyB0aW1lRGVsdGE7XG4gICAgfVxuXG4gICAgZHJvcFNlcnZlclRpbWVEZWx0YSgpIHtcbiAgICAgICAgaWYgKHRoaXMuc2VydmVySW5mbykge1xuICAgICAgICAgICAgdGhpcy5zZXJ2ZXJJbmZvLnRpbWVEZWx0YSA9IG51bGw7XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICBnZW5lcmF0ZU9wZXJhdGlvbklkKCk6IHN0cmluZyB7XG4gICAgICAgIHRoaXMub3BlcmF0aW9uSWRTdWZmaXggKz0gMTtcbiAgICAgICAgcmV0dXJuIGAke3RoaXMub3BlcmF0aW9uSWRQcmVmaXh9JHt0aGlzLm9wZXJhdGlvbklkU3VmZml4LnRvU3RyaW5nKDE2KX1gO1xuICAgIH1cblxuICAgIGFzeW5jIGZpbmlzaE9wZXJhdGlvbnMob3BlcmF0aW9uSWRzOiBzdHJpbmdbXSkge1xuICAgICAgICBpZiAob3BlcmF0aW9uSWRzLmxlbmd0aCA9PT0gMCkge1xuICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICB9XG4gICAgICAgIGlmICghKGF3YWl0IHRoaXMuZ2V0U2VydmVySW5mbygpKS5zdXBwb3J0c09wZXJhdGlvbklkKSB7XG4gICAgICAgICAgICByZXR1cm47XG4gICAgICAgIH1cbiAgICAgICAgYXdhaXQgdGhpcy5ncmFwaHFsTXV0YXRpb24oYG11dGF0aW9uIGZpbmlzaE9wZXJhdGlvbnMoJG9wZXJhdGlvbklkczogW1N0cmluZ10pIHtcbiAgICAgICAgICAgICAgICBmaW5pc2hPcGVyYXRpb25zKG9wZXJhdGlvbklkczogJG9wZXJhdGlvbklkcylcbiAgICAgICAgICAgIH1gLCB7XG4gICAgICAgICAgICBvcGVyYXRpb25JZHMsXG4gICAgICAgIH0pO1xuICAgIH1cblxuICAgIGFzeW5jIGdldEFjY291bnRzQ291bnQocGFyZW50U3Bhbj86IChTcGFuIHwgU3BhbkNvbnRleHQpKTogUHJvbWlzZTxudW1iZXI+IHtcbiAgICAgICAgY29uc3QgcmVzdWx0ID0gYXdhaXQgdGhpcy5xdWVyeSgncXVlcnl7Z2V0QWNjb3VudHNDb3VudH0nLCB1bmRlZmluZWQsIHBhcmVudFNwYW4pO1xuICAgICAgICByZXR1cm4gcmVzdWx0LmRhdGEuZ2V0QWNjb3VudHNDb3VudDtcbiAgICB9XG5cbiAgICBhc3luYyBnZXRUcmFuc2FjdGlvbnNDb3VudChwYXJlbnRTcGFuPzogKFNwYW4gfCBTcGFuQ29udGV4dCkpOiBQcm9taXNlPG51bWJlcj4ge1xuICAgICAgICBjb25zdCByZXN1bHQgPSBhd2FpdCB0aGlzLnF1ZXJ5KCdxdWVyeXtnZXRUcmFuc2FjdGlvbnNDb3VudH0nLCB1bmRlZmluZWQsIHBhcmVudFNwYW4pO1xuICAgICAgICByZXR1cm4gcmVzdWx0LmRhdGEuZ2V0VHJhbnNhY3Rpb25zQ291bnQ7XG4gICAgfVxuXG4gICAgYXN5bmMgZ2V0QWNjb3VudHNUb3RhbEJhbGFuY2UocGFyZW50U3Bhbj86IChTcGFuIHwgU3BhbkNvbnRleHQpKTogUHJvbWlzZTxzdHJpbmc+IHtcbiAgICAgICAgY29uc3QgcmVzdWx0ID0gYXdhaXQgdGhpcy5xdWVyeSgncXVlcnl7Z2V0QWNjb3VudHNUb3RhbEJhbGFuY2V9JywgdW5kZWZpbmVkLCBwYXJlbnRTcGFuKTtcbiAgICAgICAgcmV0dXJuIHJlc3VsdC5kYXRhLmdldEFjY291bnRzVG90YWxCYWxhbmNlO1xuICAgIH1cblxuICAgIGFzeW5jIHBvc3RSZXF1ZXN0cyhyZXF1ZXN0czogUmVxdWVzdFtdLCBwYXJlbnRTcGFuPzogKFNwYW4gfCBTcGFuQ29udGV4dCkpOiBQcm9taXNlPGFueT4ge1xuICAgICAgICByZXR1cm4gdGhpcy5jb250ZXh0LnRyYWNlKCdxdWVyaWVzLnBvc3RSZXF1ZXN0cycsIGFzeW5jIChzcGFuKSA9PiB7XG4gICAgICAgICAgICByZXR1cm4gdGhpcy5ncmFwaHFsTXV0YXRpb24oYG11dGF0aW9uIHBvc3RSZXF1ZXN0cygkcmVxdWVzdHM6IFtSZXF1ZXN0XSkge1xuICAgICAgICAgICAgICAgIHBvc3RSZXF1ZXN0cyhyZXF1ZXN0czogJHJlcXVlc3RzKVxuICAgICAgICAgICAgfWAsIHtcbiAgICAgICAgICAgICAgICByZXF1ZXN0cyxcbiAgICAgICAgICAgIH0sIHNwYW4pO1xuICAgICAgICB9LCBwYXJlbnRTcGFuKTtcbiAgICB9XG5cbiAgICBhc3luYyBtdXRhdGlvbihcbiAgICAgICAgcWw6IHN0cmluZyxcbiAgICAgICAgdmFyaWFibGVzOiB7IFtzdHJpbmddOiBhbnkgfSA9IHt9LFxuICAgICAgICBwYXJlbnRTcGFuPzogKFNwYW4gfCBTcGFuQ29udGV4dCksXG4gICAgKTogUHJvbWlzZTxhbnk+IHtcbiAgICAgICAgcmV0dXJuIHRoaXMuY29udGV4dC50cmFjZSgncXVlcmllcy5tdXRhdGlvbicsIGFzeW5jIChzcGFuOiBTcGFuKSA9PiB7XG4gICAgICAgICAgICBzcGFuLnNldFRhZygncGFyYW1zJywge1xuICAgICAgICAgICAgICAgIG11dGF0aW9uOiBxbCxcbiAgICAgICAgICAgICAgICB2YXJpYWJsZXMsXG4gICAgICAgICAgICB9KTtcbiAgICAgICAgICAgIHJldHVybiB0aGlzLmdyYXBocWxNdXRhdGlvbihxbCwgdmFyaWFibGVzLCBzcGFuKTtcbiAgICAgICAgfSwgcGFyZW50U3Bhbik7XG4gICAgfVxuXG4gICAgYXN5bmMgcXVlcnkoXG4gICAgICAgIHFsOiBzdHJpbmcsXG4gICAgICAgIHZhcmlhYmxlczogeyBbc3RyaW5nXTogYW55IH0gPSB7fSxcbiAgICAgICAgcGFyZW50U3Bhbj86IChTcGFuIHwgU3BhbkNvbnRleHQpLFxuICAgICAgICB0aW1lb3V0PzogbnVtYmVyLFxuICAgICk6IFByb21pc2U8YW55PiB7XG4gICAgICAgIHJldHVybiB0aGlzLmNvbnRleHQudHJhY2UoJ3F1ZXJpZXMucXVlcnknLCBhc3luYyAoc3BhbjogU3BhbikgPT4ge1xuICAgICAgICAgICAgc3Bhbi5zZXRUYWcoJ3BhcmFtcycsIHtcbiAgICAgICAgICAgICAgICBxdWVyeTogcWwsXG4gICAgICAgICAgICAgICAgdmFyaWFibGVzLFxuICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICByZXR1cm4gdGhpcy5ncmFwaHFsUXVlcnkocWwsIHZhcmlhYmxlcywgc3BhbiwgdGltZW91dCk7XG4gICAgICAgIH0sIHBhcmVudFNwYW4pO1xuICAgIH1cblxuICAgIGFzeW5jIGdyYXBocWxNdXRhdGlvbihxbDogc3RyaW5nLCB2YXJpYWJsZXM6IHsgW3N0cmluZ106IGFueSB9ID0ge30sIHNwYW46IFNwYW4pOiBQcm9taXNlPGFueT4ge1xuICAgICAgICBjb25zdCBtdXRhdGlvbiA9IGdxbChbcWxdKTtcbiAgICAgICAgcmV0dXJuIHRoaXMuZ3JhcGhRbCgoY2xpZW50KSA9PiBjbGllbnQubXV0YXRlKHtcbiAgICAgICAgICAgIG11dGF0aW9uLFxuICAgICAgICAgICAgdmFyaWFibGVzLFxuICAgICAgICAgICAgY29udGV4dDoge1xuICAgICAgICAgICAgICAgIHRyYWNlU3Bhbjogc3BhbixcbiAgICAgICAgICAgIH0sXG4gICAgICAgIH0pKTtcbiAgICB9XG5cbiAgICBzdGF0aWMgaXNOZXR3b3JrRXJyb3IoZXJyb3I6IGFueSk6IGJvb2xlYW4ge1xuICAgICAgICBpZiAoZXJyb3IuY29kZSA9PT0gVE9ORXJyb3JDb2RlLlFVRVJZX0ZPUkNJQkxZX0FCT1JURUQpIHtcbiAgICAgICAgICAgIHJldHVybiB0cnVlO1xuICAgICAgICB9XG4gICAgICAgIGNvbnN0IG5ldHdvcmtFcnJvciA9IGVycm9yLm5ldHdvcmtFcnJvcjtcbiAgICAgICAgaWYgKCFuZXR3b3JrRXJyb3IpIHtcbiAgICAgICAgICAgIHJldHVybiBmYWxzZTtcbiAgICAgICAgfVxuICAgICAgICBpZiAoJ2Vycm5vJyBpbiBuZXR3b3JrRXJyb3IpIHtcbiAgICAgICAgICAgIHJldHVybiB0cnVlO1xuICAgICAgICB9XG4gICAgICAgIHJldHVybiAhKCdyZXNwb25zZScgaW4gbmV0d29ya0Vycm9yIHx8ICdyZXN1bHQnIGluIG5ldHdvcmtFcnJvcik7XG4gICAgfVxuXG4gICAgYXN5bmMgZ3JhcGhxbFF1ZXJ5KFxuICAgICAgICBxbDogc3RyaW5nLFxuICAgICAgICB2YXJpYWJsZXM6IHsgW3N0cmluZ106IGFueSB9ID0ge30sXG4gICAgICAgIHNwYW46IFNwYW4sXG4gICAgICAgIHRpbWVvdXQ/OiBudW1iZXIsXG4gICAgKTogUHJvbWlzZTxhbnk+IHtcbiAgICAgICAgY29uc3QgcXVlcnkgPSBncWwoW3FsXSk7XG4gICAgICAgIGxldCBuZXh0VGltZW91dCA9IDEwMDtcbiAgICAgICAgY29uc3Qgc3RhcnRUaW1lID0gRGF0ZS5ub3coKTtcbiAgICAgICAgbGV0IGZvcmNlVGVybWluYXRlRXh0cmFUaW1lb3V0ID0gNTAwMDtcbiAgICAgICAgY29uc3QgZm9yY2VUZXJtaW5hdGVUaW1lb3V0ID0gdGltZW91dCB8fCB0aGlzLmNvbmZpZy53YWl0Rm9yVGltZW91dCgpO1xuICAgICAgICB3aGlsZSAodHJ1ZSkge1xuICAgICAgICAgICAgdHJ5IHtcbiAgICAgICAgICAgICAgICBjb25zdCBjbGllbnQgPSBhd2FpdCB0aGlzLmdyYXBocWxDbGllbnRSZXF1aXJlZChzcGFuKTtcbiAgICAgICAgICAgICAgICBjb25zdCBjb250ZXh0OiBhbnkgPSB7XG4gICAgICAgICAgICAgICAgICAgIHRyYWNlU3Bhbjogc3BhbixcbiAgICAgICAgICAgICAgICAgICAgZmV0Y2hPcHRpb25zOiB7XG4gICAgICAgICAgICAgICAgICAgICAgICBxdWVyeVRpbWVvdXQ6IE1hdGgubWluKFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGZvcmNlVGVybWluYXRlVGltZW91dCArIGZvcmNlVGVybWluYXRlRXh0cmFUaW1lb3V0LFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIE1BWF9USU1FT1VULFxuICAgICAgICAgICAgICAgICAgICAgICAgKSxcbiAgICAgICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICB9O1xuICAgICAgICAgICAgICAgIHJldHVybiBhd2FpdCBjbGllbnQucXVlcnkoe1xuICAgICAgICAgICAgICAgICAgICBxdWVyeSxcbiAgICAgICAgICAgICAgICAgICAgdmFyaWFibGVzLFxuICAgICAgICAgICAgICAgICAgICBjb250ZXh0LFxuICAgICAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgfSBjYXRjaCAoZXJyb3IpIHtcbiAgICAgICAgICAgICAgICBjb25zdCByZXNvbHZlZEVycm9yID0gYXdhaXQgdGhpcy5yZXNvbHZlR3JhcGhRTEVycm9yKGVycm9yKTtcbiAgICAgICAgICAgICAgICBpZiAoVE9OUXVlcmllc01vZHVsZS5pc05ldHdvcmtFcnJvcihyZXNvbHZlZEVycm9yKVxuICAgICAgICAgICAgICAgICAgICAmJiAhdGhpcy5jb25maWcuaXNOZXR3b3JrVGltZW91dEV4cGlyZWRTaW5jZShzdGFydFRpbWUpKSB7XG4gICAgICAgICAgICAgICAgICAgIHRoaXMuY29uZmlnLmxvZyhyZXNvbHZlZEVycm9yKTtcbiAgICAgICAgICAgICAgICAgICAgY29uc3QgcmV0cnlEZWxheVRpbWVvdXQgPSBuZXh0VGltZW91dDtcbiAgICAgICAgICAgICAgICAgICAgYXdhaXQgbmV3IFByb21pc2UocmVzb2x2ZSA9PiBzZXRUaW1lb3V0KHJlc29sdmUsIHJldHJ5RGVsYXlUaW1lb3V0KSk7XG4gICAgICAgICAgICAgICAgICAgIGlmIChuZXh0VGltZW91dCA8IDMyMDApIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIG5leHRUaW1lb3V0ICo9IDI7XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgaWYgKGZvcmNlVGVybWluYXRlRXh0cmFUaW1lb3V0IDwgdGhpcy5jb25maWcud2FpdEZvclRpbWVvdXQoKSkge1xuICAgICAgICAgICAgICAgICAgICAgICAgZm9yY2VUZXJtaW5hdGVFeHRyYVRpbWVvdXQgKz0gNTAwMDtcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgICAgICAgIHRocm93IHJlc29sdmVkRXJyb3I7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgfVxuXG4gICAgYXN5bmMgcmVzb2x2ZUdyYXBoUUxFcnJvcihlcnJvcjogYW55KSB7XG4gICAgICAgIGNvbnN0IGdxbEVyciA9IGVycm9yLmdyYXBoUUxFcnJvcnMgJiYgZXJyb3IuZ3JhcGhRTEVycm9yc1swXTtcbiAgICAgICAgaWYgKGdxbEVycikge1xuICAgICAgICAgICAgY29uc3QgY2xpZW50RXJyID0gbmV3IEVycm9yKGdxbEVyci5tZXNzYWdlKTtcbiAgICAgICAgICAgIGNvbnN0IGdxbEV4YyA9IChncWxFcnIuZXh0ZW5zaW9ucyAmJiBncWxFcnIuZXh0ZW5zaW9ucy5leGNlcHRpb24pIHx8IHt9O1xuICAgICAgICAgICAgKGNsaWVudEVycjogYW55KS5udW1iZXIgPSBncWxFeGMuY29kZSB8fCAwO1xuICAgICAgICAgICAgKGNsaWVudEVycjogYW55KS5jb2RlID0gZ3FsRXhjLmNvZGUgfHwgMDtcbiAgICAgICAgICAgIChjbGllbnRFcnI6IGFueSkuc291cmNlID0gZ3FsRXhjLnNvdXJjZSB8fCAnY2xpZW50JztcbiAgICAgICAgICAgIHJldHVybiBjbGllbnRFcnI7XG4gICAgICAgIH1cbiAgICAgICAgY29uc3QgZXJyb3JzID0gZXJyb3JcbiAgICAgICAgICAgICYmIGVycm9yLm5ldHdvcmtFcnJvclxuICAgICAgICAgICAgJiYgZXJyb3IubmV0d29ya0Vycm9yLnJlc3VsdFxuICAgICAgICAgICAgJiYgZXJyb3IubmV0d29ya0Vycm9yLnJlc3VsdC5lcnJvcnM7XG4gICAgICAgIGlmIChlcnJvcnMpIHtcbiAgICAgICAgICAgIHJldHVybiBUT05DbGllbnRFcnJvci5xdWVyeUZhaWxlZChlcnJvcnMsIGF3YWl0IHRoaXMuY29tcGxldGVFcnJvckRhdGEoKSk7XG4gICAgICAgIH1cbiAgICAgICAgcmV0dXJuIGVycm9yO1xuICAgIH1cblxuICAgIGFzeW5jIGdyYXBoUWwocmVxdWVzdDogKGNsaWVudDogQXBvbGxvQ2xpZW50KSA9PiBQcm9taXNlPGFueT4sIHNwYW46IFNwYW4pOiBQcm9taXNlPGFueT4ge1xuICAgICAgICBjb25zdCBjbGllbnQgPSBhd2FpdCB0aGlzLmdyYXBocWxDbGllbnRSZXF1aXJlZChzcGFuKTtcbiAgICAgICAgdHJ5IHtcbiAgICAgICAgICAgIHJldHVybiBhd2FpdCByZXF1ZXN0KGNsaWVudCk7XG4gICAgICAgIH0gY2F0Y2ggKGVycm9yKSB7XG4gICAgICAgICAgICB0aHJvdyBhd2FpdCB0aGlzLnJlc29sdmVHcmFwaFFMRXJyb3IoZXJyb3IpO1xuICAgICAgICB9XG4gICAgfVxuXG4gICAgYXN5bmMgZ3JhcGhxbENsaWVudFJlcXVpcmVkKHBhcmVudFNwYW4/OiBTcGFuIHwgU3BhbkNvbnRleHQpOiBQcm9taXNlPEFwb2xsb0NsaWVudD4ge1xuICAgICAgICBpZiAodGhpcy5ncmFwaHFsQ2xpZW50KSB7XG4gICAgICAgICAgICByZXR1cm4gdGhpcy5ncmFwaHFsQ2xpZW50O1xuICAgICAgICB9XG4gICAgICAgIGlmICh0aGlzLmdyYXBocWxDbGllbnRDcmVhdGlvbikge1xuICAgICAgICAgICAgYXdhaXQgdGhpcy5ncmFwaHFsQ2xpZW50Q3JlYXRpb24ubGlzdGVuKCk7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICBjb25zdCBjcmVhdGlvbiA9IG5ldyBNdWx0aWNhc3RQcm9taXNlKCk7XG4gICAgICAgICAgICB0aGlzLmdyYXBocWxDbGllbnRDcmVhdGlvbiA9IGNyZWF0aW9uO1xuICAgICAgICAgICAgdHJ5IHtcbiAgICAgICAgICAgICAgICBhd2FpdCB0aGlzLmNvbnRleHQudHJhY2UoJ3NldHVwIGNsaWVudCcsIChzcGFuKSA9PiB7XG4gICAgICAgICAgICAgICAgICAgIHJldHVybiB0aGlzLmNyZWF0ZUdyYXBocWxDbGllbnQoc3Bhbik7XG4gICAgICAgICAgICAgICAgfSwgcGFyZW50U3Bhbik7XG4gICAgICAgICAgICAgICAgdGhpcy5ncmFwaHFsQ2xpZW50Q3JlYXRpb24gPSBudWxsO1xuICAgICAgICAgICAgICAgIGNyZWF0aW9uLnJlc29sdmUodGhpcy5ncmFwaHFsQ2xpZW50KTtcbiAgICAgICAgICAgIH0gY2F0Y2ggKGVycm9yKSB7XG4gICAgICAgICAgICAgICAgdGhpcy5ncmFwaHFsQ2xpZW50Q3JlYXRpb24gPSBudWxsO1xuICAgICAgICAgICAgICAgIGNyZWF0aW9uLnJlamVjdChlcnJvcik7XG4gICAgICAgICAgICAgICAgdGhyb3cgZXJyb3I7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgICAgcmV0dXJuIHRoaXMuZ3JhcGhxbENsaWVudDtcbiAgICB9XG5cbiAgICBhc3luYyBjcmVhdGVHcmFwaHFsQ2xpZW50KHNwYW46IFNwYW4gfCBTcGFuQ29udGV4dCkge1xuICAgICAgICBjb25zdCB1c2VIdHRwID0gIXRoaXMuY29uZmlnLmRhdGEudXNlV2ViU29ja2V0Rm9yUXVlcmllcztcbiAgICAgICAgbGV0IGNsaWVudENvbmZpZyA9IGF3YWl0IHRoaXMuZ2V0Q2xpZW50Q29uZmlnKCk7XG4gICAgICAgIGxldCB3c0xpbms6ID9XZWJTb2NrZXRMaW5rID0gbnVsbDtcbiAgICAgICAgbGV0IGh0dHBMaW5rOiA/SHR0cExpbmsgPSBudWxsO1xuXG4gICAgICAgIGNvbnN0IHN1YnNPcHRpb25zID0gdGhpcy5jb25maWcudHJhY2VyLmluamVjdChzcGFuLCBGT1JNQVRfVEVYVF9NQVAsIHt9KTtcbiAgICAgICAgY29uc3Qgc3Vic2NyaXB0aW9uQ2xpZW50ID0gbmV3IFN1YnNjcmlwdGlvbkNsaWVudChcbiAgICAgICAgICAgIGNsaWVudENvbmZpZy53c1VybCxcbiAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICB0aW1lb3V0OiBLRUVQX0FMSVZFX1RJTUVPVVQsXG4gICAgICAgICAgICAgICAgcmVjb25uZWN0OiB0cnVlLFxuICAgICAgICAgICAgICAgIGNvbm5lY3Rpb25QYXJhbXM6ICgpID0+ICh7XG4gICAgICAgICAgICAgICAgICAgIGFjY2Vzc0tleTogdGhpcy5jb25maWcuZGF0YSAmJiB0aGlzLmNvbmZpZy5kYXRhLmFjY2Vzc0tleSxcbiAgICAgICAgICAgICAgICAgICAgaGVhZGVyczogc3Vic09wdGlvbnMsXG4gICAgICAgICAgICAgICAgfSksXG4gICAgICAgICAgICB9LFxuICAgICAgICAgICAgY2xpZW50Q29uZmlnLldlYlNvY2tldCxcbiAgICAgICAgKTtcbiAgICAgICAgc3Vic2NyaXB0aW9uQ2xpZW50Lm9uUmVjb25uZWN0ZWQoKCkgPT4ge1xuICAgICAgICAgICAgY29uc29sZS5sb2coJ1tUT05DbGllbnQucXVlcmllc10nLCAnV2ViU29ja2V0IFJlY29ubmVjdGVkJyk7XG4gICAgICAgIH0pO1xuICAgICAgICBsZXQgZGV0ZWN0aW5nUmVkaXJlY3Rpb24gPSBmYWxzZTtcbiAgICAgICAgc3Vic2NyaXB0aW9uQ2xpZW50Lm9uRXJyb3IoKCkgPT4ge1xuICAgICAgICAgICAgY29uc29sZS5sb2coJ1tUT05DbGllbnQucXVlcmllc10nLCAnV2ViU29ja2V0IEZhaWxlZCcpO1xuICAgICAgICAgICAgaWYgKGRldGVjdGluZ1JlZGlyZWN0aW9uKSB7XG4gICAgICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgKGFzeW5jICgpID0+IHtcbiAgICAgICAgICAgICAgICBkZXRlY3RpbmdSZWRpcmVjdGlvbiA9IHRydWU7XG4gICAgICAgICAgICAgICAgdHJ5IHtcbiAgICAgICAgICAgICAgICAgICAgY29uc3QgbmV3Q29uZmlnID0gYXdhaXQgdGhpcy5nZXRDbGllbnRDb25maWcoKTtcbiAgICAgICAgICAgICAgICAgICAgY29uc3QgY29uZmlnSXNDaGFuZ2VkID0gbmV3Q29uZmlnLmh0dHBVcmwgIT09IGNsaWVudENvbmZpZy5odHRwVXJsXG4gICAgICAgICAgICAgICAgICAgICAgICB8fCBuZXdDb25maWcud3NVcmwgIT09IGNsaWVudENvbmZpZy53c1VybDtcbiAgICAgICAgICAgICAgICAgICAgaWYgKGNvbmZpZ0lzQ2hhbmdlZCkge1xuICAgICAgICAgICAgICAgICAgICAgICAgY29uc29sZS5sb2coJ1tUT05DbGllbnQucXVlcmllc10nLCAnQ2xpZW50IGNvbmZpZyBjaGFuZ2VkJyk7XG4gICAgICAgICAgICAgICAgICAgICAgICBjbGllbnRDb25maWcgPSBuZXdDb25maWc7XG4gICAgICAgICAgICAgICAgICAgICAgICB0aGlzLmdyYXBocWxDbGllbnRDb25maWcgPSBjbGllbnRDb25maWc7XG4gICAgICAgICAgICAgICAgICAgICAgICBzdWJzY3JpcHRpb25DbGllbnQudXJsID0gbmV3Q29uZmlnLndzVXJsO1xuICAgICAgICAgICAgICAgICAgICAgICAgaWYgKHdzTGluaykge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHdzTGluay51cmwgPSBuZXdDb25maWcud3NVcmw7XG4gICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICAgICBpZiAoaHR0cExpbmspIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBodHRwTGluay51cmkgPSBuZXdDb25maWcuaHR0cFVybDtcbiAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIH0gY2F0Y2ggKGVycikge1xuICAgICAgICAgICAgICAgICAgICBjb25zb2xlLmxvZygnW1RPTkNsaWVudC5xdWVyaWVzXSByZWRpcmVjdGlvbiBkZXRlY3RvciBmYWlsZWQnLCBlcnIpO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICBkZXRlY3RpbmdSZWRpcmVjdGlvbiA9IGZhbHNlO1xuICAgICAgICAgICAgfSkoKTtcbiAgICAgICAgfSk7XG4gICAgICAgIHN1YnNjcmlwdGlvbkNsaWVudC5tYXhDb25uZWN0VGltZUdlbmVyYXRvci5kdXJhdGlvbiA9ICgpID0+IHtcbiAgICAgICAgICAgIHJldHVybiBzdWJzY3JpcHRpb25DbGllbnQubWF4Q29ubmVjdFRpbWVHZW5lcmF0b3IubWF4O1xuICAgICAgICB9O1xuXG4gICAgICAgIGNvbnN0IHRyYWNlckxpbmsgPSBhd2FpdCBzZXRDb250ZXh0KChfLCByZXEpID0+IHtcbiAgICAgICAgICAgIGNvbnN0IHJlc29sdmVkU3BhbiA9IChyZXEgJiYgcmVxLnRyYWNlU3BhbikgfHwgc3BhbjtcbiAgICAgICAgICAgIHJlcS5oZWFkZXJzID0ge307XG4gICAgICAgICAgICB0aGlzLmNvbmZpZy50cmFjZXIuaW5qZWN0KHJlc29sdmVkU3BhbiwgRk9STUFUX1RFWFRfTUFQLCByZXEuaGVhZGVycyk7XG4gICAgICAgICAgICBjb25zdCBhY2Nlc3NLZXkgPSB0aGlzLmNvbmZpZy5kYXRhICYmIHRoaXMuY29uZmlnLmRhdGEuYWNjZXNzS2V5O1xuICAgICAgICAgICAgaWYgKGFjY2Vzc0tleSkge1xuICAgICAgICAgICAgICAgIHJlcS5oZWFkZXJzLmFjY2Vzc0tleSA9IGFjY2Vzc0tleTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIHJldHVybiB7XG4gICAgICAgICAgICAgICAgaGVhZGVyczogcmVxLmhlYWRlcnMsXG4gICAgICAgICAgICB9O1xuICAgICAgICB9KTtcbiAgICAgICAgY29uc3Qgd3JhcExpbmsgPSAobGluazogQXBvbGxvTGluayk6IEFwb2xsb0xpbmsgPT4gdHJhY2VyTGluay5jb25jYXQobGluayk7XG4gICAgICAgIGNvbnN0IGlzU3Vic2NyaXB0aW9uID0gKHsgcXVlcnkgfSkgPT4ge1xuICAgICAgICAgICAgY29uc3QgZGVmaW5pdGlvbiA9IGdldE1haW5EZWZpbml0aW9uKHF1ZXJ5KTtcbiAgICAgICAgICAgIHJldHVybiAoXG4gICAgICAgICAgICAgICAgZGVmaW5pdGlvbi5raW5kID09PSAnT3BlcmF0aW9uRGVmaW5pdGlvbidcbiAgICAgICAgICAgICAgICAmJiBkZWZpbml0aW9uLm9wZXJhdGlvbiA9PT0gJ3N1YnNjcmlwdGlvbidcbiAgICAgICAgICAgICk7XG4gICAgICAgIH07XG5cbiAgICAgICAgd3NMaW5rID0gbmV3IFdlYlNvY2tldExpbmsoc3Vic2NyaXB0aW9uQ2xpZW50KTtcbiAgICAgICAgaHR0cExpbmsgPSB1c2VIdHRwXG4gICAgICAgICAgICA/IG5ldyBIdHRwTGluayh7XG4gICAgICAgICAgICAgICAgdXJpOiBjbGllbnRDb25maWcuaHR0cFVybCxcbiAgICAgICAgICAgICAgICBmZXRjaDogYWJvcnRhYmxlRmV0Y2goY2xpZW50Q29uZmlnLmZldGNoKSxcbiAgICAgICAgICAgIH0pXG4gICAgICAgICAgICA6IG51bGw7XG4gICAgICAgIGNvbnN0IGxpbmsgPSBodHRwTGlua1xuICAgICAgICAgICAgPyBzcGxpdChpc1N1YnNjcmlwdGlvbiwgd3JhcExpbmsod3NMaW5rKSwgd3JhcExpbmsoaHR0cExpbmspKVxuICAgICAgICAgICAgOiB3cmFwTGluayh3c0xpbmspO1xuICAgICAgICB0aGlzLmdyYXBocWxDbGllbnRDb25maWcgPSBjbGllbnRDb25maWc7XG4gICAgICAgIHRoaXMuZ3JhcGhxbENsaWVudCA9IG5ldyBBcG9sbG9DbGllbnQoe1xuICAgICAgICAgICAgY2FjaGU6IG5ldyBJbk1lbW9yeUNhY2hlKHt9KSxcbiAgICAgICAgICAgIGxpbmssXG4gICAgICAgICAgICBkZWZhdWx0T3B0aW9uczoge1xuICAgICAgICAgICAgICAgIHdhdGNoUXVlcnk6IHtcbiAgICAgICAgICAgICAgICAgICAgZmV0Y2hQb2xpY3k6ICduby1jYWNoZScsXG4gICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICBxdWVyeToge1xuICAgICAgICAgICAgICAgICAgICBmZXRjaFBvbGljeTogJ25vLWNhY2hlJyxcbiAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgfSxcbiAgICAgICAgfSk7XG4gICAgfVxuXG4gICAgYXN5bmMgY2xvc2UoKSB7XG4gICAgICAgIGlmICh0aGlzLmdyYXBocWxDbGllbnQpIHtcbiAgICAgICAgICAgIGNvbnN0IGNsaWVudCA9IHRoaXMuZ3JhcGhxbENsaWVudDtcbiAgICAgICAgICAgIHRoaXMuZ3JhcGhxbENsaWVudCA9IG51bGw7XG4gICAgICAgICAgICBjbGllbnQuc3RvcCgpO1xuICAgICAgICAgICAgYXdhaXQgY2xpZW50LmNsZWFyU3RvcmUoKTtcbiAgICAgICAgfVxuICAgIH1cbn1cblxuXG5jbGFzcyBUT05RdWVyaWVzTW9kdWxlQ29sbGVjdGlvbiBpbXBsZW1lbnRzIFRPTlFDb2xsZWN0aW9uIHtcbiAgICBtb2R1bGU6IFRPTlF1ZXJpZXNNb2R1bGU7XG5cbiAgICBjb2xsZWN0aW9uTmFtZTogc3RyaW5nO1xuXG4gICAgdHlwZU5hbWU6IHN0cmluZztcblxuICAgIGNvbnN0cnVjdG9yKFxuICAgICAgICBtb2R1bGU6IFRPTlF1ZXJpZXNNb2R1bGUsXG4gICAgICAgIGNvbGxlY3Rpb25OYW1lOiBzdHJpbmcsXG4gICAgICAgIHR5cGVOYW1lOiBzdHJpbmcsXG4gICAgKSB7XG4gICAgICAgIHRoaXMubW9kdWxlID0gbW9kdWxlO1xuICAgICAgICB0aGlzLmNvbGxlY3Rpb25OYW1lID0gY29sbGVjdGlvbk5hbWU7XG4gICAgICAgIHRoaXMudHlwZU5hbWUgPSB0eXBlTmFtZTtcbiAgICB9XG5cbiAgICBhc3luYyBxdWVyeShcbiAgICAgICAgLi4uYXJnc1xuICAgICAgICAvKlxuICAgICAgICAgICAgZmlsdGVyT3JQYXJhbXM6IGFueSB8IFRPTlF1ZXJ5UGFyYW1zLFxuICAgICAgICAgICAgcmVzdWx0OiBzdHJpbmcsXG4gICAgICAgICAgICBvcmRlckJ5PzogT3JkZXJCeVtdLFxuICAgICAgICAgICAgbGltaXQ/OiBudW1iZXIsXG4gICAgICAgICAgICB0aW1lb3V0PzogbnVtYmVyLFxuICAgICAgICAgICAgcGFyZW50U3Bhbj86IChTcGFuIHwgU3BhbkNvbnRleHQpXG4gICAgICAgICAqL1xuICAgICk6IFByb21pc2U8YW55PiB7XG4gICAgICAgIGNvbnN0IHtcbiAgICAgICAgICAgIGZpbHRlcixcbiAgICAgICAgICAgIHJlc3VsdCxcbiAgICAgICAgICAgIG9yZGVyQnksXG4gICAgICAgICAgICBsaW1pdCxcbiAgICAgICAgICAgIHRpbWVvdXQsXG4gICAgICAgICAgICBvcGVyYXRpb25JZCxcbiAgICAgICAgICAgIHBhcmVudFNwYW4sXG4gICAgICAgIH0gPSByZXNvbHZlUGFyYW1zPFRPTlF1ZXJ5UGFyYW1zPihhcmdzLCAnZmlsdGVyJywgKCkgPT4gKHtcbiAgICAgICAgICAgIGZpbHRlcjogYXJnc1swXSxcbiAgICAgICAgICAgIHJlc3VsdDogKGFyZ3NbMV06IGFueSksXG4gICAgICAgICAgICBvcmRlckJ5OiAoYXJnc1syXTogYW55KSxcbiAgICAgICAgICAgIGxpbWl0OiAoYXJnc1szXTogYW55KSxcbiAgICAgICAgICAgIHRpbWVvdXQ6IChhcmdzWzRdOiBhbnkpLFxuICAgICAgICAgICAgcGFyZW50U3BhbjogYXJnc1s1XSxcbiAgICAgICAgfSkpO1xuICAgICAgICByZXR1cm4gdGhpcy5tb2R1bGUuY29udGV4dC50cmFjZShgJHt0aGlzLmNvbGxlY3Rpb25OYW1lfS5xdWVyeWAsIGFzeW5jIChzcGFuKSA9PiB7XG4gICAgICAgICAgICBzcGFuLnNldFRhZygncGFyYW1zJywge1xuICAgICAgICAgICAgICAgIGZpbHRlcixcbiAgICAgICAgICAgICAgICByZXN1bHQsXG4gICAgICAgICAgICAgICAgb3JkZXJCeSxcbiAgICAgICAgICAgICAgICBsaW1pdCxcbiAgICAgICAgICAgICAgICB0aW1lb3V0LFxuICAgICAgICAgICAgICAgIG9wZXJhdGlvbklkLFxuICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICBjb25zdCB1c2VPcGVyYXRpb25JZCA9IG9wZXJhdGlvbklkXG4gICAgICAgICAgICAgICAgJiYgKGF3YWl0IHRoaXMubW9kdWxlLmdldFNlcnZlckluZm8oc3BhbikpLnN1cHBvcnRzT3BlcmF0aW9uSWQ7XG4gICAgICAgICAgICBjb25zdCBjID0gdGhpcy5jb2xsZWN0aW9uTmFtZTtcbiAgICAgICAgICAgIGNvbnN0IHQgPSB0aGlzLnR5cGVOYW1lO1xuICAgICAgICAgICAgY29uc3QgcWwgPSBgXG4gICAgICAgICAgICBxdWVyeSAke2N9KFxuICAgICAgICAgICAgICAgICRmaWx0ZXI6ICR7dH1GaWx0ZXIsXG4gICAgICAgICAgICAgICAgJG9yZGVyQnk6IFtRdWVyeU9yZGVyQnldLCBcbiAgICAgICAgICAgICAgICAkbGltaXQ6IEludCwgXG4gICAgICAgICAgICAgICAgJHRpbWVvdXQ6IEZsb2F0XG4gICAgICAgICAgICAgICAgJHt1c2VPcGVyYXRpb25JZCA/ICcsICRvcGVyYXRpb25JZDogU3RyaW5nJyA6ICcnfVxuICAgICAgICAgICAgICkge1xuICAgICAgICAgICAgICAgICR7Y30oXG4gICAgICAgICAgICAgICAgICAgIGZpbHRlcjogJGZpbHRlciwgXG4gICAgICAgICAgICAgICAgICAgIG9yZGVyQnk6ICRvcmRlckJ5LCBcbiAgICAgICAgICAgICAgICAgICAgbGltaXQ6ICRsaW1pdCwgXG4gICAgICAgICAgICAgICAgICAgIHRpbWVvdXQ6ICR0aW1lb3V0XG4gICAgICAgICAgICAgICAgICAgICR7dXNlT3BlcmF0aW9uSWQgPyAnLCBvcGVyYXRpb25JZDogJG9wZXJhdGlvbklkJyA6ICcnfVxuICAgICAgICAgICAgICAgICkgeyAke3Jlc3VsdH0gfVxuICAgICAgICAgICAgfWA7XG4gICAgICAgICAgICBjb25zdCB2YXJpYWJsZXM6IHsgW3N0cmluZ106IGFueSB9ID0ge1xuICAgICAgICAgICAgICAgIGZpbHRlcixcbiAgICAgICAgICAgICAgICBvcmRlckJ5LFxuICAgICAgICAgICAgICAgIGxpbWl0LFxuICAgICAgICAgICAgfTtcbiAgICAgICAgICAgIGlmICh1c2VPcGVyYXRpb25JZCkge1xuICAgICAgICAgICAgICAgIHZhcmlhYmxlcy5vcGVyYXRpb25JZCA9IG9wZXJhdGlvbklkO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgaWYgKHRpbWVvdXQpIHtcbiAgICAgICAgICAgICAgICB2YXJpYWJsZXMudGltZW91dCA9IE1hdGgubWluKE1BWF9USU1FT1VULCB0aW1lb3V0KTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIHJldHVybiAoYXdhaXQgdGhpcy5tb2R1bGUuZ3JhcGhxbFF1ZXJ5KHFsLCB2YXJpYWJsZXMsIHNwYW4sIHRpbWVvdXQpKS5kYXRhW2NdO1xuICAgICAgICB9LCBwYXJlbnRTcGFuKTtcbiAgICB9XG5cbiAgICBhc3luYyBhZ2dyZWdhdGUoXG4gICAgICAgIHBhcmFtczogVE9OUXVlcnlBZ2dyZWdhdGVQYXJhbXMsXG4gICAgKTogUHJvbWlzZTxzdHJpbmdbXT4ge1xuICAgICAgICByZXR1cm4gdGhpcy5tb2R1bGUuY29udGV4dC50cmFjZShgJHt0aGlzLmNvbGxlY3Rpb25OYW1lfS5hZ2dyZWdhdGVgLCBhc3luYyAoc3BhbikgPT4ge1xuICAgICAgICAgICAgc3Bhbi5zZXRUYWcoJ3BhcmFtcycsIHtcbiAgICAgICAgICAgICAgICBmaWx0ZXI6IHBhcmFtcy5maWx0ZXIsXG4gICAgICAgICAgICAgICAgZmllbGRzOiBwYXJhbXMuZmllbGRzLFxuICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICBpZiAoIShhd2FpdCB0aGlzLm1vZHVsZS5nZXRTZXJ2ZXJJbmZvKHNwYW4pKS5zdXBwb3J0c0FnZ3JlZ2F0aW9ucykge1xuICAgICAgICAgICAgICAgIHRocm93IFRPTkNsaWVudEVycm9yLnNlcnZlckRvZXNudFN1cHBvcnRBZ2dyZWdhdGlvbnMoXG4gICAgICAgICAgICAgICAgICAgIGF3YWl0IHRoaXMubW9kdWxlLmNvbXBsZXRlRXJyb3JEYXRhKCksXG4gICAgICAgICAgICAgICAgKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGNvbnN0IHQgPSB0aGlzLnR5cGVOYW1lO1xuICAgICAgICAgICAgY29uc3QgcSA9IHRoaXMudHlwZU5hbWUuZW5kc1dpdGgoJ3MnKSA/IGBhZ2dyZWdhdGUke3R9YCA6IGBhZ2dyZWdhdGUke3R9c2A7XG4gICAgICAgICAgICBjb25zdCBxbCA9IGBcbiAgICAgICAgICAgIHF1ZXJ5ICR7cX0oXG4gICAgICAgICAgICAgICAgJGZpbHRlcjogJHt0fUZpbHRlcixcbiAgICAgICAgICAgICAgICAkZmllbGRzOiBbRmllbGRBZ2dyZWdhdGlvbl0gXG4gICAgICAgICAgICAgKSB7XG4gICAgICAgICAgICAgICAgJHtxfShcbiAgICAgICAgICAgICAgICAgICAgZmlsdGVyOiAkZmlsdGVyLCBcbiAgICAgICAgICAgICAgICAgICAgZmllbGRzOiAkZmllbGRzIFxuICAgICAgICAgICAgICAgIClcbiAgICAgICAgICAgIH1gO1xuICAgICAgICAgICAgY29uc3QgdmFyaWFibGVzOiB7IFtzdHJpbmddOiBhbnkgfSA9IHtcbiAgICAgICAgICAgICAgICBmaWx0ZXI6IHBhcmFtcy5maWx0ZXIsXG4gICAgICAgICAgICAgICAgZmllbGRzOiBwYXJhbXMuZmllbGRzLFxuICAgICAgICAgICAgfTtcbiAgICAgICAgICAgIHJldHVybiAoYXdhaXQgdGhpcy5tb2R1bGUuZ3JhcGhxbFF1ZXJ5KHFsLCB2YXJpYWJsZXMsIHNwYW4pKS5kYXRhW3FdO1xuICAgICAgICB9LCBwYXJhbXMucGFyZW50U3Bhbik7XG4gICAgfVxuXG4gICAgc3Vic2NyaWJlKFxuICAgICAgICAuLi5hcmdzXG4gICAgICAgIC8qXG4gICAgICAgIGZpbHRlck9yUGFyYW1zOiBhbnkgfCBUT05TdWJzY3JpYmVQYXJhbXMsXG4gICAgICAgIHJlc3VsdD86IHN0cmluZyxcbiAgICAgICAgb25Eb2NFdmVudD86IERvY0V2ZW50LFxuICAgICAgICBvbkVycm9yPzogKGVycjogRXJyb3IpID0+IHZvaWRcbiAgICAgICAgICovXG4gICAgKTogU3Vic2NyaXB0aW9uIHtcbiAgICAgICAgY29uc3Qge1xuICAgICAgICAgICAgZmlsdGVyLFxuICAgICAgICAgICAgcmVzdWx0LFxuICAgICAgICAgICAgb25Eb2NFdmVudCxcbiAgICAgICAgICAgIG9uRXJyb3IsXG4gICAgICAgIH0gPSByZXNvbHZlUGFyYW1zPFRPTlN1YnNjcmliZVBhcmFtcz4oYXJncywgJ2ZpbHRlcicsICgpID0+ICh7XG4gICAgICAgICAgICBmaWx0ZXI6IGFyZ3NbMF0sXG4gICAgICAgICAgICByZXN1bHQ6IChhcmdzWzFdOiBhbnkpLFxuICAgICAgICAgICAgb25Eb2NFdmVudDogKGFyZ3NbMl06IGFueSksXG4gICAgICAgICAgICBvbkVycm9yOiAoYXJnc1szXTogYW55KSxcbiAgICAgICAgfSkpO1xuICAgICAgICBjb25zdCBzcGFuID0gdGhpcy5tb2R1bGUuY29uZmlnLnRyYWNlci5zdGFydFNwYW4oJ1RPTlF1ZXJpZXNNb2R1bGUuanM6c3Vic2NyaWJlICcpO1xuICAgICAgICBzcGFuLnNldFRhZyhUYWdzLlNQQU5fS0lORCwgJ2NsaWVudCcpO1xuICAgICAgICBjb25zdCB0ZXh0ID0gYHN1YnNjcmlwdGlvbiAke3RoaXMuY29sbGVjdGlvbk5hbWV9KCRmaWx0ZXI6ICR7dGhpcy50eXBlTmFtZX1GaWx0ZXIpIHtcbiAgICAgICAgICAgICR7dGhpcy5jb2xsZWN0aW9uTmFtZX0oZmlsdGVyOiAkZmlsdGVyKSB7ICR7cmVzdWx0fSB9XG4gICAgICAgIH1gO1xuICAgICAgICBjb25zdCBxdWVyeSA9IGdxbChbdGV4dF0pO1xuICAgICAgICBsZXQgc3Vic2NyaXB0aW9uID0gbnVsbDtcbiAgICAgICAgKGFzeW5jICgpID0+IHtcbiAgICAgICAgICAgIHRyeSB7XG4gICAgICAgICAgICAgICAgY29uc3QgY2xpZW50ID0gYXdhaXQgdGhpcy5tb2R1bGUuZ3JhcGhxbENsaWVudFJlcXVpcmVkKHNwYW4pO1xuICAgICAgICAgICAgICAgIGNvbnN0IG9ic2VydmFibGUgPSBjbGllbnQuc3Vic2NyaWJlKHtcbiAgICAgICAgICAgICAgICAgICAgcXVlcnksXG4gICAgICAgICAgICAgICAgICAgIHZhcmlhYmxlczoge1xuICAgICAgICAgICAgICAgICAgICAgICAgZmlsdGVyLFxuICAgICAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgICAgIHN1YnNjcmlwdGlvbiA9IG9ic2VydmFibGUuc3Vic2NyaWJlKChtZXNzYWdlKSA9PiB7XG4gICAgICAgICAgICAgICAgICAgIG9uRG9jRXZlbnQoJ2luc2VydC91cGRhdGUnLCBtZXNzYWdlLmRhdGFbdGhpcy5jb2xsZWN0aW9uTmFtZV0pO1xuICAgICAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgfSBjYXRjaCAoZXJyb3IpIHtcbiAgICAgICAgICAgICAgICBzcGFuLmxvZyh7XG4gICAgICAgICAgICAgICAgICAgIGV2ZW50OiAnZmFpbGVkJyxcbiAgICAgICAgICAgICAgICAgICAgcGF5bG9hZDogZXJyb3IsXG4gICAgICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICAgICAgaWYgKG9uRXJyb3IpIHtcbiAgICAgICAgICAgICAgICAgICAgb25FcnJvcihlcnJvcik7XG4gICAgICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgICAgICAgY29uc29sZS5sb2coJ1RPTiBDbGllbnQgc3Vic2NyaXB0aW9uIGVycm9yJywgZXJyb3IpO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cbiAgICAgICAgfSkoKTtcbiAgICAgICAgcmV0dXJuIHtcbiAgICAgICAgICAgIHVuc3Vic2NyaWJlOiAoKSA9PiB7XG4gICAgICAgICAgICAgICAgaWYgKHN1YnNjcmlwdGlvbikge1xuICAgICAgICAgICAgICAgICAgICBzdWJzY3JpcHRpb24udW5zdWJzY3JpYmUoKTtcbiAgICAgICAgICAgICAgICAgICAgc3Bhbi5maW5pc2goKTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9LFxuICAgICAgICB9O1xuICAgIH1cblxuICAgIGFzeW5jIHdhaXRGb3IoXG4gICAgICAgIC4uLmFyZ3NcbiAgICAgICAgLypcbiAgICAgICAgZmlsdGVyT3JQYXJhbXM6IGFueSB8IFRPTldhaXRGb3JQYXJhbXMsXG4gICAgICAgIHJlc3VsdDogc3RyaW5nLFxuICAgICAgICB0aW1lb3V0PzogbnVtYmVyLFxuICAgICAgICBwYXJlbnRTcGFuPzogKFNwYW4gfCBTcGFuQ29udGV4dClcbiAgICAgICAgICovXG4gICAgKTogUHJvbWlzZTxhbnk+IHtcbiAgICAgICAgY29uc3Qge1xuICAgICAgICAgICAgZmlsdGVyLFxuICAgICAgICAgICAgcmVzdWx0LFxuICAgICAgICAgICAgdGltZW91dDogcGFyYW1zVGltZW91dCxcbiAgICAgICAgICAgIHBhcmVudFNwYW4sXG4gICAgICAgICAgICBvcGVyYXRpb25JZCxcbiAgICAgICAgfSA9IHJlc29sdmVQYXJhbXM8VE9OV2FpdEZvclBhcmFtcz4oYXJncywgJ2ZpbHRlcicsICgpID0+ICh7XG4gICAgICAgICAgICBmaWx0ZXI6IGFyZ3NbMF0sXG4gICAgICAgICAgICByZXN1bHQ6IChhcmdzWzFdOiBhbnkpLFxuICAgICAgICAgICAgdGltZW91dDogKGFyZ3NbMl06IGFueSksXG4gICAgICAgICAgICBwYXJlbnRTcGFuOiBhcmdzWzNdLFxuICAgICAgICB9KSk7XG4gICAgICAgIGNvbnN0IHRpbWVvdXQgPSBwYXJhbXNUaW1lb3V0IHx8IHRoaXMubW9kdWxlLmNvbmZpZy53YWl0Rm9yVGltZW91dCgpO1xuICAgICAgICBjb25zdCBkb2NzID0gYXdhaXQgdGhpcy5xdWVyeSh7XG4gICAgICAgICAgICBmaWx0ZXIsXG4gICAgICAgICAgICByZXN1bHQsXG4gICAgICAgICAgICB0aW1lb3V0LFxuICAgICAgICAgICAgcGFyZW50U3BhbixcbiAgICAgICAgICAgIG9wZXJhdGlvbklkLFxuICAgICAgICB9KTtcbiAgICAgICAgaWYgKGRvY3MubGVuZ3RoID4gMCkge1xuICAgICAgICAgICAgcmV0dXJuIGRvY3NbMF07XG4gICAgICAgIH1cbiAgICAgICAgdGhyb3cgVE9OQ2xpZW50RXJyb3Iud2FpdEZvclRpbWVvdXQoYXdhaXQgdGhpcy5tb2R1bGUuY29tcGxldGVFcnJvckRhdGEoe1xuICAgICAgICAgICAgY29sbGVjdGlvbjogdGhpcy5jb2xsZWN0aW9uTmFtZSxcbiAgICAgICAgfSkpO1xuICAgIH1cbn1cblxuVE9OUXVlcmllc01vZHVsZS5tb2R1bGVOYW1lID0gJ1RPTlF1ZXJpZXNNb2R1bGUnO1xuIl19