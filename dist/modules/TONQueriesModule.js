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
    key: "detectRedirect",
    value: function () {
      var _detectRedirect = _asyncToGenerator( /*#__PURE__*/_regenerator["default"].mark(function _callee2(fetch, sourceUrl) {
        var response, sourceLocation, responseLocation;
        return _regenerator["default"].wrap(function _callee2$(_context2) {
          while (1) {
            switch (_context2.prev = _context2.next) {
              case 0:
                _context2.next = 2;
                return fetch(sourceUrl);

              case 2:
                response = _context2.sent;
                _context2.prev = 3;
                _context2.t0 = resolveServerInfo;
                _context2.next = 7;
                return response.json();

              case 7:
                _context2.t1 = _context2.sent.data.info.version;
                this.serverInfo = (0, _context2.t0)(_context2.t1);
                _context2.next = 13;
                break;

              case 11:
                _context2.prev = 11;
                _context2.t2 = _context2["catch"](3);

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
            _args16 = arguments;
        return _regenerator["default"].wrap(function _callee16$(_context16) {
          while (1) {
            switch (_context16.prev = _context16.next) {
              case 0:
                variables = _args16.length > 1 && _args16[1] !== undefined ? _args16[1] : {};
                parentSpan = _args16.length > 2 ? _args16[2] : undefined;
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
                            return _context15.abrupt("return", _this4.graphqlQuery(ql, variables, span));

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

              case 3:
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
      var _graphqlQuery = _asyncToGenerator( /*#__PURE__*/_regenerator["default"].mark(function _callee20(ql) {
        var variables,
            span,
            query,
            _args20 = arguments;
        return _regenerator["default"].wrap(function _callee20$(_context20) {
          while (1) {
            switch (_context20.prev = _context20.next) {
              case 0:
                variables = _args20.length > 1 && _args20[1] !== undefined ? _args20[1] : {};
                span = _args20.length > 2 ? _args20[2] : undefined;
                query = (0, _graphqlTag["default"])([ql]);
                return _context20.abrupt("return", this.graphQl( /*#__PURE__*/function () {
                  var _ref4 = _asyncToGenerator( /*#__PURE__*/_regenerator["default"].mark(function _callee19(client) {
                    var nextTimeout;
                    return _regenerator["default"].wrap(function _callee19$(_context19) {
                      while (1) {
                        switch (_context19.prev = _context19.next) {
                          case 0:
                            nextTimeout = 100;

                          case 1:
                            if (!true) {
                              _context19.next = 17;
                              break;
                            }

                            _context19.prev = 2;
                            _context19.next = 5;
                            return client.query({
                              query: query,
                              variables: variables,
                              context: {
                                traceSpan: span
                              }
                            });

                          case 5:
                            return _context19.abrupt("return", _context19.sent);

                          case 8:
                            _context19.prev = 8;
                            _context19.t0 = _context19["catch"](2);

                            if (!TONQueriesModule.isNetworkError(_context19.t0)) {
                              _context19.next = 14;
                              break;
                            }

                            return _context19.delegateYield( /*#__PURE__*/_regenerator["default"].mark(function _callee18() {
                              var timeout;
                              return _regenerator["default"].wrap(function _callee18$(_context18) {
                                while (1) {
                                  switch (_context18.prev = _context18.next) {
                                    case 0:
                                      console.warn(_context19.t0.networkError);
                                      timeout = nextTimeout;
                                      _context18.next = 4;
                                      return new Promise(function (x) {
                                        return setTimeout(x, timeout);
                                      });

                                    case 4:
                                      if (nextTimeout < 3200) {
                                        nextTimeout *= 2;
                                      }

                                    case 5:
                                    case "end":
                                      return _context18.stop();
                                  }
                                }
                              }, _callee18);
                            })(), "t1", 12);

                          case 12:
                            _context19.next = 15;
                            break;

                          case 14:
                            throw _context19.t0;

                          case 15:
                            _context19.next = 1;
                            break;

                          case 17:
                          case "end":
                            return _context19.stop();
                        }
                      }
                    }, _callee19, null, [[2, 8]]);
                  }));

                  return function (_x19) {
                    return _ref4.apply(this, arguments);
                  };
                }(), span));

              case 4:
              case "end":
                return _context20.stop();
            }
          }
        }, _callee20, this);
      }));

      function graphqlQuery(_x18) {
        return _graphqlQuery.apply(this, arguments);
      }

      return graphqlQuery;
    }()
  }, {
    key: "graphQl",
    value: function () {
      var _graphQl = _asyncToGenerator( /*#__PURE__*/_regenerator["default"].mark(function _callee21(request, span) {
        var client, gqlErr, clientErr, gqlExc, errors;
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
                gqlErr = _context21.t0.graphQLErrors && _context21.t0.graphQLErrors[0];

                if (!gqlErr) {
                  _context21.next = 19;
                  break;
                }

                clientErr = new Error(gqlErr.message);
                gqlExc = gqlErr.extensions && gqlErr.extensions.exception || {};
                clientErr.number = gqlExc.code || 0;
                clientErr.code = gqlExc.code || 0;
                clientErr.source = gqlExc.source || 'client';
                throw clientErr;

              case 19:
                errors = _context21.t0 && _context21.t0.networkError && _context21.t0.networkError.result && _context21.t0.networkError.result.errors;

                if (!errors) {
                  _context21.next = 24;
                  break;
                }

                throw _TONClient.TONClientError.queryFailed(errors);

              case 24:
                throw _context21.t0;

              case 25:
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
        var _this5 = this;

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
                  return _this5.createGraphqlClient(span);
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
        var _this6 = this;

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
                      accessKey: _this6.config.data && _this6.config.data.accessKey,
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
                            return _this6.getClientConfig();

                          case 4:
                            newConfig = _context23.sent;
                            configIsChanged = newConfig.httpUrl !== clientConfig.httpUrl || newConfig.wsUrl !== clientConfig.wsUrl;

                            if (configIsChanged) {
                              console.log('[TONClient.queries]', 'Client config changed');
                              clientConfig = newConfig;
                              _this6.graphqlClientConfig = clientConfig;
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

                  _this6.config.tracer.inject(resolvedSpan, _opentracing.FORMAT_TEXT_MAP, req.headers);

                  var accessKey = _this6.config.data && _this6.config.data.accessKey;

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

                isSubscription = function isSubscription(_ref6) {
                  var query = _ref6.query;
                  var definition = (0, _apolloUtilities.getMainDefinition)(query);
                  return definition.kind === 'OperationDefinition' && definition.operation === 'subscription';
                };

                wsLink = new _apolloLinkWs.WebSocketLink(subscriptionClient);
                httpLink = useHttp ? new _apolloLinkHttp.HttpLink({
                  uri: clientConfig.httpUrl,
                  fetch: clientConfig.fetch
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
        var _this7 = this;

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
                  var _ref7 = _asyncToGenerator( /*#__PURE__*/_regenerator["default"].mark(function _callee26(span) {
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
                            return _this7.module.getServerInfo(span);

                          case 5:
                            _context26.t0 = _context26.sent.supportsOperationId;

                          case 6:
                            useOperationId = _context26.t0;
                            c = _this7.collectionName;
                            t = _this7.typeName;
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
                            return _this7.module.graphqlQuery(ql, variables, span);

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
                    return _ref7.apply(this, arguments);
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
        var _this8 = this;

        return _regenerator["default"].wrap(function _callee29$(_context29) {
          while (1) {
            switch (_context29.prev = _context29.next) {
              case 0:
                return _context29.abrupt("return", this.module.context.trace("".concat(this.collectionName, ".aggregate"), /*#__PURE__*/function () {
                  var _ref8 = _asyncToGenerator( /*#__PURE__*/_regenerator["default"].mark(function _callee28(span) {
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
                            return _this8.module.getServerInfo(span);

                          case 3:
                            if (_context28.sent.supportsAggregations) {
                              _context28.next = 5;
                              break;
                            }

                            throw _TONClient.TONClientError.serverDoesntSupportAggregations();

                          case 5:
                            t = _this8.typeName;
                            q = _this8.typeName.endsWith('s') ? "aggregate".concat(t) : "aggregate".concat(t, "s");
                            ql = "\n            query ".concat(q, "(\n                $filter: ").concat(t, "Filter,\n                $fields: [FieldAggregation] \n             ) {\n                ").concat(q, "(\n                    filter: $filter, \n                    fields: $fields \n                )\n            }");
                            variables = {
                              filter: params.filter,
                              fields: params.fields
                            };
                            _context28.next = 11;
                            return _this8.module.graphqlQuery(ql, variables, span);

                          case 11:
                            _context28.t0 = q;
                            return _context28.abrupt("return", _context28.sent.data[_context28.t0]);

                          case 13:
                          case "end":
                            return _context28.stop();
                        }
                      }
                    }, _callee28);
                  }));

                  return function (_x26) {
                    return _ref8.apply(this, arguments);
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
      var _this9 = this;

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
                return _this9.module.graphqlClientRequired(span);

              case 3:
                client = _context30.sent;
                observable = client.subscribe({
                  query: query,
                  variables: {
                    filter: filter
                  }
                });
                subscription = observable.subscribe(function (message) {
                  onDocEvent('insert/update', message.data[_this9.collectionName]);
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
                throw _TONClient.TONClientError.waitForTimeout();

              case 9:
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy9tb2R1bGVzL1RPTlF1ZXJpZXNNb2R1bGUuanMiXSwibmFtZXMiOlsiS0VFUF9BTElWRV9USU1FT1VUIiwiTUFYX1RJTUVPVVQiLCJyZXNvbHZlUGFyYW1zIiwiYXJncyIsInJlcXVpcmVkUGFyYW1OYW1lIiwicmVzb2x2ZUFyZ3MiLCJsZW5ndGgiLCJNdWx0aWNhc3RQcm9taXNlIiwibGlzdGVuZXJzIiwib25Db21wbGV0ZSIsImxpc3RlbmVyIiwicmVzb2x2ZSIsInJlamVjdCIsInB1c2giLCJQcm9taXNlIiwidmFsdWUiLCJjb21wbGV0ZSIsImVycm9yIiwiY29tcGxldGVMaXN0ZW5lciIsImZvckVhY2giLCJ2ZXJzaW9uVG9OdW1iZXIiLCJzIiwicGFydHMiLCJzcGxpdCIsIm1hcCIsIngiLCJOdW1iZXIiLCJzbGljZSIsInJlc29sdmVTZXJ2ZXJJbmZvIiwidmVyc2lvblN0cmluZyIsInZlcnNpb24iLCJzdXBwb3J0c09wZXJhdGlvbklkIiwic3VwcG9ydHNBZ2dyZWdhdGlvbnMiLCJzdXBwb3J0c1RpbWUiLCJ0aW1lRGVsdGEiLCJUT05RdWVyaWVzTW9kdWxlIiwiY29udGV4dCIsImdyYXBocWxDbGllbnQiLCJncmFwaHFsQ2xpZW50Q3JlYXRpb24iLCJncmFwaHFsQ2xpZW50Q29uZmlnIiwib3ZlcnJpZGVXc1VybCIsIm9wZXJhdGlvbklkUHJlZml4IiwiRGF0ZSIsIm5vdyIsInRvU3RyaW5nIiwiaSIsIk1hdGgiLCJyb3VuZCIsInJhbmRvbSIsIm9wZXJhdGlvbklkU3VmZml4Iiwic2VydmVySW5mbyIsImNvbmZpZyIsImdldE1vZHVsZSIsIlRPTkNvbmZpZ01vZHVsZSIsInRyYW5zYWN0aW9ucyIsIlRPTlF1ZXJpZXNNb2R1bGVDb2xsZWN0aW9uIiwibWVzc2FnZXMiLCJibG9ja3MiLCJhY2NvdW50cyIsImJsb2Nrc19zaWduYXR1cmVzIiwiZmV0Y2giLCJzb3VyY2VVcmwiLCJyZXNwb25zZSIsImpzb24iLCJkYXRhIiwiaW5mbyIsInJlZGlyZWN0ZWQiLCJ1cmwiLCJzb3VyY2VMb2NhdGlvbiIsIlVSTFBhcnRzIiwicGFyc2UiLCJmaXhRdWVyeSIsIl8iLCJ0b0xvd2VyQ2FzZSIsInJlc3BvbnNlTG9jYXRpb24iLCJnZXRDb25maWdGb3JTZXJ2ZXIiLCJzZXJ2ZXIiLCJodHRwUGFydHMiLCJmaXhQcm90b2NvbCIsImZpeFBhdGgiLCJodHRwIiwid3MiLCJodHRwVXJsIiwid3NVcmwiLCJjbGllbnRQbGF0Zm9ybSIsIldlYlNvY2tldCIsIlRPTkNsaWVudCIsIkVycm9yIiwic2VydmVycyIsImNsaWVudENvbmZpZyIsImRldGVjdFJlZGlyZWN0IiwiY29uc29sZSIsImxvZyIsImVycm9yU3RyaW5nIiwic3BhbiIsImdyYXBocWxDbGllbnRSZXF1aXJlZCIsImdldFNlcnZlckluZm8iLCJzdGFydCIsImVuZCIsInJlc3BvbnNlRGF0YSIsInNlcnZlclRpbWUiLCJ0aW1lIiwic2VydmVyVGltZURlbHRhIiwib3BlcmF0aW9uSWRzIiwiZ3JhcGhxbE11dGF0aW9uIiwicGFyZW50U3BhbiIsInF1ZXJ5IiwidW5kZWZpbmVkIiwicmVzdWx0IiwiZ2V0QWNjb3VudHNDb3VudCIsImdldFRyYW5zYWN0aW9uc0NvdW50IiwiZ2V0QWNjb3VudHNUb3RhbEJhbGFuY2UiLCJyZXF1ZXN0cyIsInRyYWNlIiwicWwiLCJ2YXJpYWJsZXMiLCJzZXRUYWciLCJtdXRhdGlvbiIsImdyYXBocWxRdWVyeSIsImdyYXBoUWwiLCJjbGllbnQiLCJtdXRhdGUiLCJ0cmFjZVNwYW4iLCJuZXh0VGltZW91dCIsImlzTmV0d29ya0Vycm9yIiwid2FybiIsIm5ldHdvcmtFcnJvciIsInRpbWVvdXQiLCJzZXRUaW1lb3V0IiwicmVxdWVzdCIsImdxbEVyciIsImdyYXBoUUxFcnJvcnMiLCJjbGllbnRFcnIiLCJtZXNzYWdlIiwiZ3FsRXhjIiwiZXh0ZW5zaW9ucyIsImV4Y2VwdGlvbiIsIm51bWJlciIsImNvZGUiLCJzb3VyY2UiLCJlcnJvcnMiLCJUT05DbGllbnRFcnJvciIsInF1ZXJ5RmFpbGVkIiwibGlzdGVuIiwiY3JlYXRpb24iLCJjcmVhdGVHcmFwaHFsQ2xpZW50IiwidXNlSHR0cCIsInVzZVdlYlNvY2tldEZvclF1ZXJpZXMiLCJnZXRDbGllbnRDb25maWciLCJ3c0xpbmsiLCJodHRwTGluayIsInN1YnNPcHRpb25zIiwidHJhY2VyIiwiaW5qZWN0IiwiRk9STUFUX1RFWFRfTUFQIiwic3Vic2NyaXB0aW9uQ2xpZW50IiwiU3Vic2NyaXB0aW9uQ2xpZW50IiwicmVjb25uZWN0IiwiY29ubmVjdGlvblBhcmFtcyIsImFjY2Vzc0tleSIsImhlYWRlcnMiLCJvblJlY29ubmVjdGVkIiwiZGV0ZWN0aW5nUmVkaXJlY3Rpb24iLCJvbkVycm9yIiwibmV3Q29uZmlnIiwiY29uZmlnSXNDaGFuZ2VkIiwidXJpIiwibWF4Q29ubmVjdFRpbWVHZW5lcmF0b3IiLCJkdXJhdGlvbiIsIm1heCIsInJlcSIsInJlc29sdmVkU3BhbiIsInRyYWNlckxpbmsiLCJ3cmFwTGluayIsImxpbmsiLCJjb25jYXQiLCJpc1N1YnNjcmlwdGlvbiIsImRlZmluaXRpb24iLCJraW5kIiwib3BlcmF0aW9uIiwiV2ViU29ja2V0TGluayIsIkh0dHBMaW5rIiwiQXBvbGxvQ2xpZW50IiwiY2FjaGUiLCJJbk1lbW9yeUNhY2hlIiwiZGVmYXVsdE9wdGlvbnMiLCJ3YXRjaFF1ZXJ5IiwiZmV0Y2hQb2xpY3kiLCJzdG9wIiwiY2xlYXJTdG9yZSIsIlRPTk1vZHVsZSIsIm1vZHVsZSIsImNvbGxlY3Rpb25OYW1lIiwidHlwZU5hbWUiLCJmaWx0ZXIiLCJvcmRlckJ5IiwibGltaXQiLCJvcGVyYXRpb25JZCIsInVzZU9wZXJhdGlvbklkIiwiYyIsInQiLCJtaW4iLCJwYXJhbXMiLCJmaWVsZHMiLCJzZXJ2ZXJEb2VzbnRTdXBwb3J0QWdncmVnYXRpb25zIiwicSIsImVuZHNXaXRoIiwib25Eb2NFdmVudCIsInN0YXJ0U3BhbiIsIlRhZ3MiLCJTUEFOX0tJTkQiLCJ0ZXh0Iiwic3Vic2NyaXB0aW9uIiwib2JzZXJ2YWJsZSIsInN1YnNjcmliZSIsImV2ZW50IiwicGF5bG9hZCIsInVuc3Vic2NyaWJlIiwiZmluaXNoIiwicGFyYW1zVGltZW91dCIsIndhaXRGb3JUaW1lb3V0IiwiZG9jcyIsIm1vZHVsZU5hbWUiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7OztBQU1BOztBQUNBOztBQUNBOztBQUNBOztBQUNBOztBQUNBOztBQUNBOztBQUNBOztBQUNBOztBQUNBOztBQVdBOztBQUVBOztBQUNBOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUF1QkE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsSUFBTUEsa0JBQWtCLEdBQUcsSUFBSSxLQUEvQjtBQUVPLElBQU1DLFdBQVcsR0FBRyxVQUFwQjs7O0FBRVAsU0FBU0MsYUFBVCxDQUEwQkMsSUFBMUIsRUFBdUNDLGlCQUF2QyxFQUFrRUMsV0FBbEUsRUFBMkY7QUFDdkYsU0FBUUYsSUFBSSxDQUFDRyxNQUFMLEtBQWdCLENBQWpCLElBQXdCRixpQkFBaUIsSUFBSUQsSUFBSSxDQUFDLENBQUQsQ0FBakQsR0FBd0RBLElBQUksQ0FBQyxDQUFELENBQTVELEdBQWtFRSxXQUFXLEVBQXBGO0FBQ0g7O0lBT0tFLGdCO0FBSUYsOEJBQWM7QUFBQTs7QUFBQTs7QUFBQTs7QUFDVixTQUFLQyxTQUFMLEdBQWlCLEVBQWpCO0FBQ0EsU0FBS0MsVUFBTCxHQUFrQixJQUFsQjtBQUNIOzs7OzZCQUV3QjtBQUNyQixVQUFNQyxRQUFrQyxHQUFHO0FBQ3ZDQyxRQUFBQSxPQUFPLEVBQUUsbUJBQU0sQ0FDZCxDQUZzQztBQUd2Q0MsUUFBQUEsTUFBTSxFQUFFLGtCQUFNLENBQ2I7QUFKc0MsT0FBM0M7QUFNQSxXQUFLSixTQUFMLENBQWVLLElBQWYsQ0FBb0JILFFBQXBCO0FBQ0EsYUFBTyxJQUFJSSxPQUFKLENBQVksVUFBQ0gsT0FBRCxFQUFVQyxNQUFWLEVBQXFCO0FBQ3BDRixRQUFBQSxRQUFRLENBQUNDLE9BQVQsR0FBbUJB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T0FBTyxFQUFQQSxPQUgwQjtBQUkxQnRCLGtCQUFBQSxVQUFVLEVBQVZBLFVBSjBCO0FBSzFCNEYsa0JBQUFBLFdBQVcsRUFBWEE7QUFMMEIsaUJBQVgsQzs7O0FBQWJ3QixnQkFBQUEsSTs7c0JBT0ZBLElBQUksQ0FBQ3ZOLE1BQUwsR0FBYyxDOzs7OzttREFDUHVOLElBQUksQ0FBQyxDQUFELEM7OztzQkFFVGhGLDBCQUFlK0UsY0FBZixFOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFJZHpMLGdCQUFnQixDQUFDMkwsVUFBakIsR0FBOEIsa0JBQTlCIiwic291cmNlc0NvbnRlbnQiOlsiLypcbiAqIENvcHlyaWdodCAyMDE4LTIwMjAgVE9OIERFViBTT0xVVElPTlMgTFRELlxuICovXG5cbi8vIEBmbG93XG5cbmltcG9ydCB7IEluTWVtb3J5Q2FjaGUgfSBmcm9tICdhcG9sbG8tY2FjaGUtaW5tZW1vcnknO1xuaW1wb3J0IHsgQXBvbGxvQ2xpZW50IH0gZnJvbSAnYXBvbGxvLWNsaWVudCc7XG5pbXBvcnQgeyBBcG9sbG9MaW5rLCBzcGxpdCB9IGZyb20gJ2Fwb2xsby1saW5rJztcbmltcG9ydCB7IEh0dHBMaW5rIH0gZnJvbSAnYXBvbGxvLWxpbmstaHR0cCc7XG5pbXBvcnQgeyBXZWJTb2NrZXRMaW5rIH0gZnJvbSAnYXBvbGxvLWxpbmstd3MnO1xuaW1wb3J0IHsgZ2V0TWFpbkRlZmluaXRpb24gfSBmcm9tICdhcG9sbG8tdXRpbGl0aWVzJztcbmltcG9ydCBncWwgZnJvbSAnZ3JhcGhxbC10YWcnO1xuaW1wb3J0IHsgU3Vic2NyaXB0aW9uQ2xpZW50IH0gZnJvbSAnc3Vic2NyaXB0aW9ucy10cmFuc3BvcnQtd3MnO1xuaW1wb3J0IHsgc2V0Q29udGV4dCB9IGZyb20gJ2Fwb2xsby1saW5rLWNvbnRleHQnO1xuaW1wb3J0IHtcbiAgICBGT1JNQVRfVEVYVF9NQVAsIFRhZ3MsIFNwYW4sIFNwYW5Db250ZXh0LFxufSBmcm9tICdvcGVudHJhY2luZyc7XG5pbXBvcnQgdHlwZSB7XG4gICAgVE9OUXVlcmllcyxcbiAgICBUT05RQ29sbGVjdGlvbixcbiAgICBTdWJzY3JpcHRpb24sXG4gICAgVE9OUXVlcnlQYXJhbXMsXG4gICAgVE9OU3Vic2NyaWJlUGFyYW1zLFxuICAgIFRPTldhaXRGb3JQYXJhbXMsIFRPTlF1ZXJ5QWdncmVnYXRlUGFyYW1zLFxufSBmcm9tICcuLi8uLi90eXBlcyc7XG5pbXBvcnQgeyBUT05DbGllbnQsIFRPTkNsaWVudEVycm9yIH0gZnJvbSAnLi4vVE9OQ2xpZW50JztcbmltcG9ydCB0eXBlIHsgVE9OTW9kdWxlQ29udGV4dCB9IGZyb20gJy4uL1RPTk1vZHVsZSc7XG5pbXBvcnQgeyBUT05Nb2R1bGUgfSBmcm9tICcuLi9UT05Nb2R1bGUnO1xuaW1wb3J0IFRPTkNvbmZpZ01vZHVsZSwgeyBVUkxQYXJ0cyB9IGZyb20gJy4vVE9OQ29uZmlnTW9kdWxlJztcblxuXG5leHBvcnQgdHlwZSBSZXF1ZXN0ID0ge1xuICAgIGlkOiBzdHJpbmcsXG4gICAgYm9keTogc3RyaW5nLFxufVxuXG5leHBvcnQgdHlwZSBTZXJ2ZXJJbmZvID0ge1xuICAgIHZlcnNpb246IG51bWJlcixcbiAgICBzdXBwb3J0c09wZXJhdGlvbklkOiBib29sZWFuLFxuICAgIHN1cHBvcnRzQWdncmVnYXRpb25zOiBib29sZWFuLFxuICAgIHN1cHBvcnRzVGltZTogYm9vbGVhbixcbiAgICB0aW1lRGVsdGE6ID9udW1iZXIsXG59O1xuXG50eXBlIEdyYXBoUUxDbGllbnRDb25maWcgPSB7XG4gICAgaHR0cFVybDogc3RyaW5nLFxuICAgIHdzVXJsOiBzdHJpbmcsXG4gICAgZmV0Y2g6IGFueSxcbiAgICBXZWJTb2NrZXQ6IGFueSxcbn07XG5cbi8vIEtlZXAtYWxpdmUgdGltZW91dCB1c2VkIHRvIHN1cHBvcnQga2VlcC1hbGl2ZSBjb25uZWN0aW9uIGNoZWNraW5nOlxuLy8gLSBFdmVyeSAxIG1pbnV0ZSBzZXJ2ZXIgc2VuZHMgR1FMX0NPTk5FQ1RJT05fS0VFUF9BTElWRSBtZXNzYWdlLlxuLy8gLSBFdmVyeSAyIG1pbnV0ZXMgY2xpZW50IGNoZWNrcyB0aGF0IEdRTF9DT05ORUNUSU9OX0tFRVBfQUxJVkUgbWVzc2FnZSB3YXMgcmVjZWl2ZWRcbi8vICAgd2l0aGluIGxhc3QgMiBtaW51dGVzLlxuLy8gLSBJZiBjbGllbnQgaGFkbid0IHJlY2VpdmVkIGtlZXAgYWxpdmUgbWVzc2FnZSBkdXJpbmcgbGFzdCAyIG1pbnV0ZXNcbi8vICAgaXQgY2xvc2VzIGNvbm5lY3Rpb24gYW5kIGdvZXMgdG8gcmVjb25uZWN0LlxuY29uc3QgS0VFUF9BTElWRV9USU1FT1VUID0gMiAqIDYwMDAwO1xuXG5leHBvcnQgY29uc3QgTUFYX1RJTUVPVVQgPSAyMTQ3NDgzNjQ3O1xuXG5mdW5jdGlvbiByZXNvbHZlUGFyYW1zPFQ+KGFyZ3M6IGFueVtdLCByZXF1aXJlZFBhcmFtTmFtZTogc3RyaW5nLCByZXNvbHZlQXJnczogKCkgPT4gVCk6IFQge1xuICAgIHJldHVybiAoYXJncy5sZW5ndGggPT09IDEpICYmIChyZXF1aXJlZFBhcmFtTmFtZSBpbiBhcmdzWzBdKSA/IGFyZ3NbMF0gOiByZXNvbHZlQXJncygpO1xufVxuXG50eXBlIE11bHRpY2FzdExpc3RlbmVyPFZhbHVlPiA9IHtcbiAgICByZXNvbHZlOiAodmFsdWU6IFZhbHVlKSA9PiB2b2lkO1xuICAgIHJlamVjdDogKGVycm9yOiBFcnJvcikgPT4gdm9pZDtcbn07XG5cbmNsYXNzIE11bHRpY2FzdFByb21pc2U8VmFsdWU+IHtcbiAgICBsaXN0ZW5lcnM6IE11bHRpY2FzdExpc3RlbmVyPFZhbHVlPltdO1xuICAgIG9uQ29tcGxldGU6ID8oKCkgPT4gdm9pZCk7XG5cbiAgICBjb25zdHJ1Y3RvcigpIHtcbiAgICAgICAgdGhpcy5saXN0ZW5lcnMgPSBbXTtcbiAgICAgICAgdGhpcy5vbkNvbXBsZXRlID0gbnVsbDtcbiAgICB9XG5cbiAgICBsaXN0ZW4oKTogUHJvbWlzZTxWYWx1ZT4ge1xuICAgICAgICBjb25zdCBsaXN0ZW5lcjogTXVsdGljYXN0TGlzdGVuZXI8VmFsdWU+ID0ge1xuICAgICAgICAgICAgcmVzb2x2ZTogKCkgPT4ge1xuICAgICAgICAgICAgfSxcbiAgICAgICAgICAgIHJlamVjdDogKCkgPT4ge1xuICAgICAgICAgICAgfSxcbiAgICAgICAgfTtcbiAgICAgICAgdGhpcy5saXN0ZW5lcnMucHVzaChsaXN0ZW5lcik7XG4gICAgICAgIHJldHVybiBuZXcgUHJvbWlzZSgocmVzb2x2ZSwgcmVqZWN0KSA9PiB7XG4gICAgICAgICAgICBsaXN0ZW5lci5yZXNvbHZlID0gcmVzb2x2ZTtcbiAgICAgICAgICAgIGxpc3RlbmVyLnJlamVjdCA9IHJlamVjdDtcbiAgICAgICAgfSk7XG4gICAgfVxuXG4gICAgcmVzb2x2ZSh2YWx1ZTogVmFsdWUpIHtcbiAgICAgICAgdGhpcy5jb21wbGV0ZShsaXN0ZW5lciA9PiBsaXN0ZW5lci5yZXNvbHZlKHZhbHVlKSk7XG4gICAgfVxuXG4gICAgcmVqZWN0KGVycm9yOiBFcnJvcikge1xuICAgICAgICB0aGlzLmNvbXBsZXRlKGxpc3RlbmVyID0+IGxpc3RlbmVyLnJlamVjdChlcnJvcikpO1xuICAgIH1cblxuICAgIGNvbXBsZXRlKGNvbXBsZXRlTGlzdGVuZXI6IChsaXN0ZW5lcjogTXVsdGljYXN0TGlzdGVuZXI8VmFsdWU+KSA9PiB2b2lkKSB7XG4gICAgICAgIGNvbnN0IHsgbGlzdGVuZXJzIH0gPSB0aGlzO1xuICAgICAgICB0aGlzLmxpc3RlbmVycyA9IFtdO1xuICAgICAgICBpZiAodGhpcy5vbkNvbXBsZXRlKSB7XG4gICAgICAgICAgICB0aGlzLm9uQ29tcGxldGUoKTtcbiAgICAgICAgfVxuICAgICAgICBsaXN0ZW5lcnMuZm9yRWFjaChsaXN0ZW5lciA9PiBjb21wbGV0ZUxpc3RlbmVyKGxpc3RlbmVyKSk7XG4gICAgfVxufVxuXG5mdW5jdGlvbiB2ZXJzaW9uVG9OdW1iZXIoczogc3RyaW5nKTogbnVtYmVyIHtcbiAgICBjb25zdCBwYXJ0cyA9IGAke3MgfHwgJyd9YC5zcGxpdCgnLicpXG4gICAgICAgIC5tYXAoeCA9PiBOdW1iZXIoeCkpXG4gICAgICAgIC5zbGljZSgwLCAzKTtcbiAgICB3aGlsZSAocGFydHMubGVuZ3RoIDwgMykge1xuICAgICAgICBwYXJ0cy5wdXNoKDApO1xuICAgIH1cbiAgICByZXR1cm4gcGFydHNbMF0gKiAxMDAwMDAwICsgcGFydHNbMV0gKiAxMDAwICsgcGFydHNbMl07XG59XG5cbmZ1bmN0aW9uIHJlc29sdmVTZXJ2ZXJJbmZvKHZlcnNpb25TdHJpbmc6IHN0cmluZyB8IG51bGwgfCB0eXBlb2YgdW5kZWZpbmVkKTogU2VydmVySW5mbyB7XG4gICAgY29uc3QgdmVyc2lvbiA9IHZlcnNpb25Ub051bWJlcih2ZXJzaW9uU3RyaW5nIHx8ICcwLjI0LjQnKTtcbiAgICByZXR1cm4ge1xuICAgICAgICB2ZXJzaW9uLFxuICAgICAgICBzdXBwb3J0c09wZXJhdGlvbklkOiB2ZXJzaW9uID4gMjQwMDQsXG4gICAgICAgIHN1cHBvcnRzQWdncmVnYXRpb25zOiB2ZXJzaW9uID49IDI1MDAwLFxuICAgICAgICBzdXBwb3J0c1RpbWU6IHZlcnNpb24gPj0gMjYwMDMsXG4gICAgICAgIHRpbWVEZWx0YTogbnVsbCxcbiAgICB9O1xufVxuXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBUT05RdWVyaWVzTW9kdWxlIGV4dGVuZHMgVE9OTW9kdWxlIGltcGxlbWVudHMgVE9OUXVlcmllcyB7XG4gICAgdHJhbnNhY3Rpb25zOiBUT05RQ29sbGVjdGlvbjtcbiAgICBtZXNzYWdlczogVE9OUUNvbGxlY3Rpb247XG4gICAgYmxvY2tzOiBUT05RQ29sbGVjdGlvbjtcbiAgICBhY2NvdW50czogVE9OUUNvbGxlY3Rpb247XG4gICAgYmxvY2tzX3NpZ25hdHVyZXM6IFRPTlFDb2xsZWN0aW9uO1xuXG4gICAgY29uZmlnOiBUT05Db25maWdNb2R1bGU7XG5cbiAgICBncmFwaHFsQ2xpZW50Q3JlYXRpb246ID9NdWx0aWNhc3RQcm9taXNlPEFwb2xsb0NsaWVudD47XG4gICAgZ3JhcGhxbENsaWVudDogP0Fwb2xsb0NsaWVudDtcbiAgICBncmFwaHFsQ2xpZW50Q29uZmlnOiA/R3JhcGhRTENsaWVudENvbmZpZztcblxuICAgIG92ZXJyaWRlV3NVcmw6ID9zdHJpbmc7XG4gICAgb3BlcmF0aW9uSWRQcmVmaXg6IHN0cmluZztcbiAgICBvcGVyYXRpb25JZFN1ZmZpeDogbnVtYmVyO1xuICAgIHNlcnZlckluZm86IFNlcnZlckluZm87XG5cbiAgICBjb25zdHJ1Y3Rvcihjb250ZXh0OiBUT05Nb2R1bGVDb250ZXh0KSB7XG4gICAgICAgIHN1cGVyKGNvbnRleHQpO1xuICAgICAgICB0aGlzLmdyYXBocWxDbGllbnQgPSBudWxsO1xuICAgICAgICB0aGlzLmdyYXBocWxDbGllbnRDcmVhdGlvbiA9IG51bGw7XG4gICAgICAgIHRoaXMuZ3JhcGhxbENsaWVudENvbmZpZyA9IG51bGw7XG4gICAgICAgIHRoaXMub3ZlcnJpZGVXc1VybCA9IG51bGw7XG4gICAgICAgIHRoaXMub3BlcmF0aW9uSWRQcmVmaXggPSAoRGF0ZS5ub3coKSAlIDYwMDAwKS50b1N0cmluZygxNik7XG4gICAgICAgIGZvciAobGV0IGkgPSAwOyBpIDwgMTA7IGkgKz0gMSkge1xuICAgICAgICAgICAgdGhpcy5vcGVyYXRpb25JZFByZWZpeCA9XG4gICAgICAgICAgICAgICAgYCR7dGhpcy5vcGVyYXRpb25JZFByZWZpeH0ke01hdGgucm91bmQoTWF0aC5yYW5kb20oKSAqIDI1NilcbiAgICAgICAgICAgICAgICAgICAgLnRvU3RyaW5nKDE2KX1gO1xuICAgICAgICB9XG4gICAgICAgIHRoaXMub3BlcmF0aW9uSWRTdWZmaXggPSAxO1xuICAgICAgICB0aGlzLnNlcnZlckluZm8gPSByZXNvbHZlU2VydmVySW5mbygpO1xuICAgIH1cblxuICAgIGFzeW5jIHNldHVwKCkge1xuICAgICAgICB0aGlzLmNvbmZpZyA9IHRoaXMuY29udGV4dC5nZXRNb2R1bGUoVE9OQ29uZmlnTW9kdWxlKTtcbiAgICAgICAgdGhpcy50cmFuc2FjdGlvbnMgPSBuZXcgVE9OUXVlcmllc01vZHVsZUNvbGxlY3Rpb24odGhpcywgJ3RyYW5zYWN0aW9ucycsICdUcmFuc2FjdGlvbicpO1xuICAgICAgICB0aGlzLm1lc3NhZ2VzID0gbmV3IFRPTlF1ZXJpZXNNb2R1bGVDb2xsZWN0aW9uKHRoaXMsICdtZXNzYWdlcycsICdNZXNzYWdlJyk7XG4gICAgICAgIHRoaXMuYmxvY2tzID0gbmV3IFRPTlF1ZXJpZXNNb2R1bGVDb2xsZWN0aW9uKHRoaXMsICdibG9ja3MnLCAnQmxvY2snKTtcbiAgICAgICAgdGhpcy5hY2NvdW50cyA9IG5ldyBUT05RdWVyaWVzTW9kdWxlQ29sbGVjdGlvbih0aGlzLCAnYWNjb3VudHMnLCAnQWNjb3VudCcpO1xuICAgICAgICB0aGlzLmJsb2Nrc19zaWduYXR1cmVzID0gbmV3IFRPTlF1ZXJpZXNNb2R1bGVDb2xsZWN0aW9uKHRoaXMsICdibG9ja3Nfc2lnbmF0dXJlcycsICdCbG9ja1NpZ25hdHVyZXMnKTtcbiAgICB9XG5cbiAgICBhc3luYyBkZXRlY3RSZWRpcmVjdChmZXRjaDogYW55LCBzb3VyY2VVcmw6IHN0cmluZyk6IFByb21pc2U8c3RyaW5nPiB7XG4gICAgICAgIGNvbnN0IHJlc3BvbnNlID0gYXdhaXQgZmV0Y2goc291cmNlVXJsKTtcbiAgICAgICAgdHJ5IHtcbiAgICAgICAgICAgIHRoaXMuc2VydmVySW5mbyA9IHJlc29sdmVTZXJ2ZXJJbmZvKChhd2FpdCByZXNwb25zZS5qc29uKCkpLmRhdGEuaW5mby52ZXJzaW9uKTtcbiAgICAgICAgfSBjYXRjaCB7XG4gICAgICAgIH1cbiAgICAgICAgaWYgKHJlc3BvbnNlLnJlZGlyZWN0ZWQgPT09IHRydWUpIHtcbiAgICAgICAgICAgIHJldHVybiByZXNwb25zZS51cmw7XG4gICAgICAgIH1cbiAgICAgICAgaWYgKHJlc3BvbnNlLnJlZGlyZWN0ZWQgPT09IGZhbHNlKSB7XG4gICAgICAgICAgICByZXR1cm4gJyc7XG4gICAgICAgIH1cbiAgICAgICAgY29uc3Qgc291cmNlTG9jYXRpb24gPSBVUkxQYXJ0cy5wYXJzZShzb3VyY2VVcmwpXG4gICAgICAgICAgICAuZml4UXVlcnkoXyA9PiAnJylcbiAgICAgICAgICAgIC50b1N0cmluZygpXG4gICAgICAgICAgICAudG9Mb3dlckNhc2UoKTtcbiAgICAgICAgY29uc3QgcmVzcG9uc2VMb2NhdGlvbiA9IFVSTFBhcnRzLnBhcnNlKHJlc3BvbnNlLnVybClcbiAgICAgICAgICAgIC5maXhRdWVyeShfID0+ICcnKVxuICAgICAgICAgICAgLnRvU3RyaW5nKClcbiAgICAgICAgICAgIC50b0xvd2VyQ2FzZSgpO1xuICAgICAgICByZXR1cm4gcmVzcG9uc2VMb2NhdGlvbiAhPT0gc291cmNlTG9jYXRpb24gPyByZXNwb25zZS51cmwgOiAnJztcbiAgICB9XG5cbiAgICBhc3luYyBnZXRDbGllbnRDb25maWcoKTogUHJvbWlzZTxHcmFwaFFMQ2xpZW50Q29uZmlnPiB7XG4gICAgICAgIGNvbnN0IGNvbmZpZyA9IHRoaXMuY29uZmlnO1xuICAgICAgICBjb25zdCBjbGllbnRQbGF0Zm9ybSA9IFRPTkNsaWVudC5jbGllbnRQbGF0Zm9ybTtcbiAgICAgICAgaWYgKCFjbGllbnRQbGF0Zm9ybSkge1xuICAgICAgICAgICAgdGhyb3cgRXJyb3IoJ1RPTiBDbGllbnQgZG9lcyBub3QgY29uZmlndXJlZCcpO1xuICAgICAgICB9XG4gICAgICAgIGNvbnN0IGZldGNoID0gY2xpZW50UGxhdGZvcm0uZmV0Y2g7XG5cbiAgICAgICAgZnVuY3Rpb24gZ2V0Q29uZmlnRm9yU2VydmVyKHNlcnZlcjogc3RyaW5nKTogR3JhcGhRTENsaWVudENvbmZpZyB7XG4gICAgICAgICAgICBjb25zdCBodHRwUGFydHMgPSBVUkxQYXJ0cy5wYXJzZShzZXJ2ZXIpXG4gICAgICAgICAgICAgICAgLmZpeFByb3RvY29sKHggPT4gKHggPT09ICdodHRwOi8vJyA/IHggOiAnaHR0cHM6Ly8nKSlcbiAgICAgICAgICAgICAgICAuZml4UGF0aCh4ID0+IGAke3h9L2dyYXBocWxgKTtcbiAgICAgICAgICAgIGNvbnN0IGh0dHAgPSBodHRwUGFydHMudG9TdHJpbmcoKTtcbiAgICAgICAgICAgIGNvbnN0IHdzID0gaHR0cFBhcnRzXG4gICAgICAgICAgICAgICAgLmZpeFByb3RvY29sKHggPT4gKHggPT09ICdodHRwOi8vJyA/ICd3czovLycgOiAnd3NzOi8vJykpXG4gICAgICAgICAgICAgICAgLnRvU3RyaW5nKCk7XG4gICAgICAgICAgICByZXR1cm4ge1xuICAgICAgICAgICAgICAgIGh0dHBVcmw6IGh0dHAsXG4gICAgICAgICAgICAgICAgd3NVcmw6IHdzLFxuICAgICAgICAgICAgICAgIGZldGNoOiBjbGllbnRQbGF0Zm9ybS5mZXRjaCxcbiAgICAgICAgICAgICAgICBXZWJTb2NrZXQ6IGNsaWVudFBsYXRmb3JtLldlYlNvY2tldCxcbiAgICAgICAgICAgIH07XG4gICAgICAgIH1cblxuICAgICAgICBmb3IgKGNvbnN0IHNlcnZlciBvZiBjb25maWcuZGF0YS5zZXJ2ZXJzKSB7XG4gICAgICAgICAgICBjb25zdCBjbGllbnRDb25maWcgPSBnZXRDb25maWdGb3JTZXJ2ZXIoc2VydmVyKTtcbiAgICAgICAgICAgIHRyeSB7XG4gICAgICAgICAgICAgICAgLy8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIG5vLWF3YWl0LWluLWxvb3BcbiAgICAgICAgICAgICAgICBjb25zdCByZWRpcmVjdGVkID0gYXdhaXQgdGhpcy5kZXRlY3RSZWRpcmVjdChcbiAgICAgICAgICAgICAgICAgICAgZmV0Y2gsXG4gICAgICAgICAgICAgICAgICAgIGAke2NsaWVudENvbmZpZy5odHRwVXJsfT9xdWVyeT0lN0JpbmZvJTdCdmVyc2lvbiU3RCU3RGAsXG4gICAgICAgICAgICAgICAgKTtcbiAgICAgICAgICAgICAgICBpZiAocmVkaXJlY3RlZCAhPT0gJycpIHtcbiAgICAgICAgICAgICAgICAgICAgY29uc3QgaHR0cFBhcnRzID0gVVJMUGFydHMucGFyc2UocmVkaXJlY3RlZClcbiAgICAgICAgICAgICAgICAgICAgICAgIC5maXhRdWVyeShfID0+ICcnKTtcbiAgICAgICAgICAgICAgICAgICAgY2xpZW50Q29uZmlnLmh0dHBVcmwgPSBodHRwUGFydHMudG9TdHJpbmcoKTtcbiAgICAgICAgICAgICAgICAgICAgY2xpZW50Q29uZmlnLndzVXJsID0gaHR0cFBhcnRzXG4gICAgICAgICAgICAgICAgICAgICAgICAuZml4UHJvdG9jb2woeCA9PiAoeCA9PT0gJ2h0dHA6Ly8nID8gJ3dzOi8vJyA6ICd3c3M6Ly8nKSlcbiAgICAgICAgICAgICAgICAgICAgICAgIC50b1N0cmluZygpO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICByZXR1cm4gY2xpZW50Q29uZmlnO1xuICAgICAgICAgICAgfSBjYXRjaCAoZXJyb3IpIHtcbiAgICAgICAgICAgICAgICBjb25zb2xlLmxvZyhgW2dldENsaWVudENvbmZpZ10gZm9yIHNlcnZlciBcIiR7c2VydmVyfVwiIGZhaWxlZGAsIHtcbiAgICAgICAgICAgICAgICAgICAgY2xpZW50Q29uZmlnOiB7XG4gICAgICAgICAgICAgICAgICAgICAgICBodHRwVXJsOiBjbGllbnRDb25maWcuaHR0cFVybCxcbiAgICAgICAgICAgICAgICAgICAgICAgIHdzVXJsOiBjbGllbnRDb25maWcud3NVcmwsXG4gICAgICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgICAgIGVycm9yU3RyaW5nOiBlcnJvci50b1N0cmluZygpLFxuICAgICAgICAgICAgICAgICAgICBlcnJvcixcbiAgICAgICAgICAgICAgICB9KTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgICByZXR1cm4gZ2V0Q29uZmlnRm9yU2VydmVyKGNvbmZpZy5kYXRhLnNlcnZlcnNbMF0pO1xuICAgIH1cblxuICAgIGFzeW5jIGdldFNlcnZlckluZm8oc3Bhbj86IFNwYW4gfCBTcGFuQ29udGV4dCk6IFByb21pc2U8U2VydmVySW5mbz4ge1xuICAgICAgICBhd2FpdCB0aGlzLmdyYXBocWxDbGllbnRSZXF1aXJlZChzcGFuKTtcbiAgICAgICAgcmV0dXJuIHRoaXMuc2VydmVySW5mbztcbiAgICB9XG5cbiAgICBhc3luYyBzZXJ2ZXJUaW1lRGVsdGEoc3Bhbj86IFNwYW4gfCBTcGFuQ29udGV4dCk6IFByb21pc2U8bnVtYmVyPiB7XG4gICAgICAgIGNvbnN0IHNlcnZlckluZm8gPSBhd2FpdCB0aGlzLmdldFNlcnZlckluZm8oc3Bhbik7XG4gICAgICAgIGNvbnN0IGNsaWVudENvbmZpZyA9IHRoaXMuZ3JhcGhxbENsaWVudENvbmZpZztcbiAgICAgICAgaWYgKGNsaWVudENvbmZpZyAmJiBzZXJ2ZXJJbmZvLnN1cHBvcnRzVGltZSAmJiBzZXJ2ZXJJbmZvLnRpbWVEZWx0YSA9PT0gbnVsbCkge1xuICAgICAgICAgICAgdHJ5IHtcbiAgICAgICAgICAgICAgICBjb25zdCBzdGFydCA9IERhdGUubm93KCk7XG4gICAgICAgICAgICAgICAgY29uc3QgcmVzcG9uc2UgPSBhd2FpdCBjbGllbnRDb25maWcuZmV0Y2goYCR7Y2xpZW50Q29uZmlnLmh0dHBVcmx9P3F1ZXJ5PSU3QmluZm8lN0J0aW1lJTdEJTdEYCk7XG4gICAgICAgICAgICAgICAgY29uc3QgZW5kID0gRGF0ZS5ub3coKTtcbiAgICAgICAgICAgICAgICBjb25zdCByZXNwb25zZURhdGEgPSBhd2FpdCByZXNwb25zZS5qc29uKCk7XG4gICAgICAgICAgICAgICAgY29uc3Qgc2VydmVyVGltZSA9IHJlc3BvbnNlRGF0YS5kYXRhLmluZm8udGltZTtcbiAgICAgICAgICAgICAgICBzZXJ2ZXJJbmZvLnRpbWVEZWx0YSA9IE1hdGgucm91bmQoc2VydmVyVGltZSAtIChzdGFydCArIChlbmQgLSBzdGFydCkgLyAyKSk7XG4gICAgICAgICAgICB9IGNhdGNoIChlcnJvcikge1xuICAgICAgICAgICAgICAgIGNvbnNvbGUubG9nKCc+Pj4nLCBlcnJvcik7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgICAgcmV0dXJuIHNlcnZlckluZm8udGltZURlbHRhIHx8IDA7XG4gICAgfVxuXG4gICAgYXN5bmMgc2VydmVyTm93KHNwYW4/OiBTcGFuIHwgU3BhbkNvbnRleHQpOiBQcm9taXNlPG51bWJlcj4ge1xuICAgICAgICBjb25zdCB0aW1lRGVsdGEgPSBhd2FpdCB0aGlzLnNlcnZlclRpbWVEZWx0YShzcGFuKTtcbiAgICAgICAgcmV0dXJuIERhdGUubm93KCkgKyB0aW1lRGVsdGE7XG4gICAgfVxuXG4gICAgZHJvcFNlcnZlclRpbWVEZWx0YSgpIHtcbiAgICAgICAgaWYgKHRoaXMuc2VydmVySW5mbykge1xuICAgICAgICAgICAgdGhpcy5zZXJ2ZXJJbmZvLnRpbWVEZWx0YSA9IG51bGw7XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICBnZW5lcmF0ZU9wZXJhdGlvbklkKCk6IHN0cmluZyB7XG4gICAgICAgIHRoaXMub3BlcmF0aW9uSWRTdWZmaXggKz0gMTtcbiAgICAgICAgcmV0dXJuIGAke3RoaXMub3BlcmF0aW9uSWRQcmVmaXh9JHt0aGlzLm9wZXJhdGlvbklkU3VmZml4LnRvU3RyaW5nKDE2KX1gO1xuICAgIH1cblxuICAgIGFzeW5jIGZpbmlzaE9wZXJhdGlvbnMob3BlcmF0aW9uSWRzOiBzdHJpbmdbXSkge1xuICAgICAgICBpZiAob3BlcmF0aW9uSWRzLmxlbmd0aCA9PT0gMCkge1xuICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICB9XG4gICAgICAgIGlmICghKGF3YWl0IHRoaXMuZ2V0U2VydmVySW5mbygpKS5zdXBwb3J0c09wZXJhdGlvbklkKSB7XG4gICAgICAgICAgICByZXR1cm47XG4gICAgICAgIH1cbiAgICAgICAgYXdhaXQgdGhpcy5ncmFwaHFsTXV0YXRpb24oYG11dGF0aW9uIGZpbmlzaE9wZXJhdGlvbnMoJG9wZXJhdGlvbklkczogW1N0cmluZ10pIHtcbiAgICAgICAgICAgICAgICBmaW5pc2hPcGVyYXRpb25zKG9wZXJhdGlvbklkczogJG9wZXJhdGlvbklkcylcbiAgICAgICAgICAgIH1gLCB7XG4gICAgICAgICAgICBvcGVyYXRpb25JZHMsXG4gICAgICAgIH0pO1xuICAgIH1cblxuICAgIGFzeW5jIGdldEFjY291bnRzQ291bnQocGFyZW50U3Bhbj86IChTcGFuIHwgU3BhbkNvbnRleHQpKTogUHJvbWlzZTxudW1iZXI+IHtcbiAgICAgICAgY29uc3QgcmVzdWx0ID0gYXdhaXQgdGhpcy5xdWVyeSgncXVlcnl7Z2V0QWNjb3VudHNDb3VudH0nLCB1bmRlZmluZWQsIHBhcmVudFNwYW4pO1xuICAgICAgICByZXR1cm4gcmVzdWx0LmRhdGEuZ2V0QWNjb3VudHNDb3VudDtcbiAgICB9XG5cbiAgICBhc3luYyBnZXRUcmFuc2FjdGlvbnNDb3VudChwYXJlbnRTcGFuPzogKFNwYW4gfCBTcGFuQ29udGV4dCkpOiBQcm9taXNlPG51bWJlcj4ge1xuICAgICAgICBjb25zdCByZXN1bHQgPSBhd2FpdCB0aGlzLnF1ZXJ5KCdxdWVyeXtnZXRUcmFuc2FjdGlvbnNDb3VudH0nLCB1bmRlZmluZWQsIHBhcmVudFNwYW4pO1xuICAgICAgICByZXR1cm4gcmVzdWx0LmRhdGEuZ2V0VHJhbnNhY3Rpb25zQ291bnQ7XG4gICAgfVxuXG4gICAgYXN5bmMgZ2V0QWNjb3VudHNUb3RhbEJhbGFuY2UocGFyZW50U3Bhbj86IChTcGFuIHwgU3BhbkNvbnRleHQpKTogUHJvbWlzZTxzdHJpbmc+IHtcbiAgICAgICAgY29uc3QgcmVzdWx0ID0gYXdhaXQgdGhpcy5xdWVyeSgncXVlcnl7Z2V0QWNjb3VudHNUb3RhbEJhbGFuY2V9JywgdW5kZWZpbmVkLCBwYXJlbnRTcGFuKTtcbiAgICAgICAgcmV0dXJuIHJlc3VsdC5kYXRhLmdldEFjY291bnRzVG90YWxCYWxhbmNlO1xuICAgIH1cblxuICAgIGFzeW5jIHBvc3RSZXF1ZXN0cyhyZXF1ZXN0czogUmVxdWVzdFtdLCBwYXJlbnRTcGFuPzogKFNwYW4gfCBTcGFuQ29udGV4dCkpOiBQcm9taXNlPGFueT4ge1xuICAgICAgICByZXR1cm4gdGhpcy5jb250ZXh0LnRyYWNlKCdxdWVyaWVzLnBvc3RSZXF1ZXN0cycsIGFzeW5jIChzcGFuKSA9PiB7XG4gICAgICAgICAgICByZXR1cm4gdGhpcy5ncmFwaHFsTXV0YXRpb24oYG11dGF0aW9uIHBvc3RSZXF1ZXN0cygkcmVxdWVzdHM6IFtSZXF1ZXN0XSkge1xuICAgICAgICAgICAgICAgIHBvc3RSZXF1ZXN0cyhyZXF1ZXN0czogJHJlcXVlc3RzKVxuICAgICAgICAgICAgfWAsIHtcbiAgICAgICAgICAgICAgICByZXF1ZXN0cyxcbiAgICAgICAgICAgIH0sIHNwYW4pO1xuICAgICAgICB9LCBwYXJlbnRTcGFuKTtcbiAgICB9XG5cbiAgICBhc3luYyBtdXRhdGlvbihcbiAgICAgICAgcWw6IHN0cmluZyxcbiAgICAgICAgdmFyaWFibGVzOiB7IFtzdHJpbmddOiBhbnkgfSA9IHt9LFxuICAgICAgICBwYXJlbnRTcGFuPzogKFNwYW4gfCBTcGFuQ29udGV4dCksXG4gICAgKTogUHJvbWlzZTxhbnk+IHtcbiAgICAgICAgcmV0dXJuIHRoaXMuY29udGV4dC50cmFjZSgncXVlcmllcy5tdXRhdGlvbicsIGFzeW5jIChzcGFuOiBTcGFuKSA9PiB7XG4gICAgICAgICAgICBzcGFuLnNldFRhZygncGFyYW1zJywge1xuICAgICAgICAgICAgICAgIG11dGF0aW9uOiBxbCxcbiAgICAgICAgICAgICAgICB2YXJpYWJsZXMsXG4gICAgICAgICAgICB9KTtcbiAgICAgICAgICAgIHJldHVybiB0aGlzLmdyYXBocWxNdXRhdGlvbihxbCwgdmFyaWFibGVzLCBzcGFuKTtcbiAgICAgICAgfSwgcGFyZW50U3Bhbik7XG4gICAgfVxuXG4gICAgYXN5bmMgcXVlcnkoXG4gICAgICAgIHFsOiBzdHJpbmcsXG4gICAgICAgIHZhcmlhYmxlczogeyBbc3RyaW5nXTogYW55IH0gPSB7fSxcbiAgICAgICAgcGFyZW50U3Bhbj86IChTcGFuIHwgU3BhbkNvbnRleHQpLFxuICAgICk6IFByb21pc2U8YW55PiB7XG4gICAgICAgIHJldHVybiB0aGlzLmNvbnRleHQudHJhY2UoJ3F1ZXJpZXMucXVlcnknLCBhc3luYyAoc3BhbjogU3BhbikgPT4ge1xuICAgICAgICAgICAgc3Bhbi5zZXRUYWcoJ3BhcmFtcycsIHtcbiAgICAgICAgICAgICAgICBxdWVyeTogcWwsXG4gICAgICAgICAgICAgICAgdmFyaWFibGVzLFxuICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICByZXR1cm4gdGhpcy5ncmFwaHFsUXVlcnkocWwsIHZhcmlhYmxlcywgc3Bhbik7XG4gICAgICAgIH0sIHBhcmVudFNwYW4pO1xuICAgIH1cblxuICAgIGFzeW5jIGdyYXBocWxNdXRhdGlvbihxbDogc3RyaW5nLCB2YXJpYWJsZXM6IHsgW3N0cmluZ106IGFueSB9ID0ge30sIHNwYW46IFNwYW4pOiBQcm9taXNlPGFueT4ge1xuICAgICAgICBjb25zdCBtdXRhdGlvbiA9IGdxbChbcWxdKTtcbiAgICAgICAgcmV0dXJuIHRoaXMuZ3JhcGhRbCgoY2xpZW50KSA9PiBjbGllbnQubXV0YXRlKHtcbiAgICAgICAgICAgIG11dGF0aW9uLFxuICAgICAgICAgICAgdmFyaWFibGVzLFxuICAgICAgICAgICAgY29udGV4dDoge1xuICAgICAgICAgICAgICAgIHRyYWNlU3Bhbjogc3BhbixcbiAgICAgICAgICAgIH0sXG4gICAgICAgIH0pKTtcbiAgICB9XG5cbiAgICBzdGF0aWMgaXNOZXR3b3JrRXJyb3IoZXJyb3I6IGFueSk6IGJvb2xlYW4ge1xuICAgICAgICBjb25zdCBuZXR3b3JrRXJyb3IgPSBlcnJvci5uZXR3b3JrRXJyb3I7XG4gICAgICAgIGlmICghbmV0d29ya0Vycm9yKSB7XG4gICAgICAgICAgICByZXR1cm4gZmFsc2U7XG4gICAgICAgIH1cbiAgICAgICAgaWYgKCdlcnJubycgaW4gbmV0d29ya0Vycm9yKSB7XG4gICAgICAgICAgICByZXR1cm4gdHJ1ZTtcbiAgICAgICAgfVxuICAgICAgICByZXR1cm4gISgncmVzcG9uc2UnIGluIG5ldHdvcmtFcnJvciB8fCAncmVzdWx0JyBpbiBuZXR3b3JrRXJyb3IpO1xuICAgIH1cblxuICAgIGFzeW5jIGdyYXBocWxRdWVyeShxbDogc3RyaW5nLCB2YXJpYWJsZXM6IHsgW3N0cmluZ106IGFueSB9ID0ge30sIHNwYW46IFNwYW4pOiBQcm9taXNlPGFueT4ge1xuICAgICAgICBjb25zdCBxdWVyeSA9IGdxbChbcWxdKTtcbiAgICAgICAgcmV0dXJuIHRoaXMuZ3JhcGhRbChhc3luYyAoY2xpZW50KSA9PiB7XG4gICAgICAgICAgICBsZXQgbmV4dFRpbWVvdXQgPSAxMDA7XG4gICAgICAgICAgICB3aGlsZSAodHJ1ZSkge1xuICAgICAgICAgICAgICAgIHRyeSB7XG4gICAgICAgICAgICAgICAgICAgIHJldHVybiBhd2FpdCBjbGllbnQucXVlcnkoe1xuICAgICAgICAgICAgICAgICAgICAgICAgcXVlcnksXG4gICAgICAgICAgICAgICAgICAgICAgICB2YXJpYWJsZXMsXG4gICAgICAgICAgICAgICAgICAgICAgICBjb250ZXh0OiB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgdHJhY2VTcGFuOiBzcGFuLFxuICAgICAgICAgICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICAgICAgfSBjYXRjaCAoZXJyb3IpIHtcbiAgICAgICAgICAgICAgICAgICAgaWYgKFRPTlF1ZXJpZXNNb2R1bGUuaXNOZXR3b3JrRXJyb3IoZXJyb3IpKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICBjb25zb2xlLndhcm4oZXJyb3IubmV0d29ya0Vycm9yKTtcbiAgICAgICAgICAgICAgICAgICAgICAgIGNvbnN0IHRpbWVvdXQgPSBuZXh0VGltZW91dDtcbiAgICAgICAgICAgICAgICAgICAgICAgIGF3YWl0IG5ldyBQcm9taXNlKHggPT4gc2V0VGltZW91dCh4LCB0aW1lb3V0KSk7XG4gICAgICAgICAgICAgICAgICAgICAgICBpZiAobmV4dFRpbWVvdXQgPCAzMjAwKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgbmV4dFRpbWVvdXQgKj0gMjtcbiAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIHRocm93IGVycm9yO1xuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuICAgICAgICB9LCBzcGFuKTtcbiAgICB9XG5cbiAgICBhc3luYyBncmFwaFFsKHJlcXVlc3Q6IChjbGllbnQ6IEFwb2xsb0NsaWVudCkgPT4gUHJvbWlzZTxhbnk+LCBzcGFuOiBTcGFuKTogUHJvbWlzZTxhbnk+IHtcbiAgICAgICAgY29uc3QgY2xpZW50ID0gYXdhaXQgdGhpcy5ncmFwaHFsQ2xpZW50UmVxdWlyZWQoc3Bhbik7XG4gICAgICAgIHRyeSB7XG4gICAgICAgICAgICByZXR1cm4gYXdhaXQgcmVxdWVzdChjbGllbnQpO1xuICAgICAgICB9IGNhdGNoIChlcnJvcikge1xuICAgICAgICAgICAgY29uc3QgZ3FsRXJyID0gZXJyb3IuZ3JhcGhRTEVycm9ycyAmJiBlcnJvci5ncmFwaFFMRXJyb3JzWzBdO1xuICAgICAgICAgICAgaWYgKGdxbEVycikge1xuICAgICAgICAgICAgICAgIGNvbnN0IGNsaWVudEVyciA9IG5ldyBFcnJvcihncWxFcnIubWVzc2FnZSk7XG4gICAgICAgICAgICAgICAgY29uc3QgZ3FsRXhjID0gKGdxbEVyci5leHRlbnNpb25zICYmIGdxbEVyci5leHRlbnNpb25zLmV4Y2VwdGlvbikgfHwge307XG4gICAgICAgICAgICAgICAgKGNsaWVudEVycjogYW55KS5udW1iZXIgPSBncWxFeGMuY29kZSB8fCAwO1xuICAgICAgICAgICAgICAgIChjbGllbnRFcnI6IGFueSkuY29kZSA9IGdxbEV4Yy5jb2RlIHx8IDA7XG4gICAgICAgICAgICAgICAgKGNsaWVudEVycjogYW55KS5zb3VyY2UgPSBncWxFeGMuc291cmNlIHx8ICdjbGllbnQnO1xuICAgICAgICAgICAgICAgIHRocm93IGNsaWVudEVycjtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGNvbnN0IGVycm9ycyA9IGVycm9yXG4gICAgICAgICAgICAgICAgJiYgZXJyb3IubmV0d29ya0Vycm9yXG4gICAgICAgICAgICAgICAgJiYgZXJyb3IubmV0d29ya0Vycm9yLnJlc3VsdFxuICAgICAgICAgICAgICAgICYmIGVycm9yLm5ldHdvcmtFcnJvci5yZXN1bHQuZXJyb3JzO1xuICAgICAgICAgICAgaWYgKGVycm9ycykge1xuICAgICAgICAgICAgICAgIHRocm93IFRPTkNsaWVudEVycm9yLnF1ZXJ5RmFpbGVkKGVycm9ycyk7XG4gICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAgIHRocm93IGVycm9yO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgfVxuXG4gICAgYXN5bmMgZ3JhcGhxbENsaWVudFJlcXVpcmVkKHBhcmVudFNwYW4/OiBTcGFuIHwgU3BhbkNvbnRleHQpOiBQcm9taXNlPEFwb2xsb0NsaWVudD4ge1xuICAgICAgICBpZiAodGhpcy5ncmFwaHFsQ2xpZW50KSB7XG4gICAgICAgICAgICByZXR1cm4gdGhpcy5ncmFwaHFsQ2xpZW50O1xuICAgICAgICB9XG4gICAgICAgIGlmICh0aGlzLmdyYXBocWxDbGllbnRDcmVhdGlvbikge1xuICAgICAgICAgICAgYXdhaXQgdGhpcy5ncmFwaHFsQ2xpZW50Q3JlYXRpb24ubGlzdGVuKCk7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICBjb25zdCBjcmVhdGlvbiA9IG5ldyBNdWx0aWNhc3RQcm9taXNlKCk7XG4gICAgICAgICAgICB0aGlzLmdyYXBocWxDbGllbnRDcmVhdGlvbiA9IGNyZWF0aW9uO1xuICAgICAgICAgICAgdHJ5IHtcbiAgICAgICAgICAgICAgICBhd2FpdCB0aGlzLmNvbnRleHQudHJhY2UoJ3NldHVwIGNsaWVudCcsIChzcGFuKSA9PiB7XG4gICAgICAgICAgICAgICAgICAgIHJldHVybiB0aGlzLmNyZWF0ZUdyYXBocWxDbGllbnQoc3Bhbik7XG4gICAgICAgICAgICAgICAgfSwgcGFyZW50U3Bhbik7XG4gICAgICAgICAgICAgICAgdGhpcy5ncmFwaHFsQ2xpZW50Q3JlYXRpb24gPSBudWxsO1xuICAgICAgICAgICAgICAgIGNyZWF0aW9uLnJlc29sdmUodGhpcy5ncmFwaHFsQ2xpZW50KTtcbiAgICAgICAgICAgIH0gY2F0Y2ggKGVycm9yKSB7XG4gICAgICAgICAgICAgICAgdGhpcy5ncmFwaHFsQ2xpZW50Q3JlYXRpb24gPSBudWxsO1xuICAgICAgICAgICAgICAgIGNyZWF0aW9uLnJlamVjdChlcnJvcik7XG4gICAgICAgICAgICAgICAgdGhyb3cgZXJyb3I7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgICAgcmV0dXJuIHRoaXMuZ3JhcGhxbENsaWVudDtcbiAgICB9XG5cbiAgICBhc3luYyBjcmVhdGVHcmFwaHFsQ2xpZW50KHNwYW46IFNwYW4gfCBTcGFuQ29udGV4dCkge1xuICAgICAgICBjb25zdCB1c2VIdHRwID0gIXRoaXMuY29uZmlnLmRhdGEudXNlV2ViU29ja2V0Rm9yUXVlcmllcztcbiAgICAgICAgbGV0IGNsaWVudENvbmZpZyA9IGF3YWl0IHRoaXMuZ2V0Q2xpZW50Q29uZmlnKCk7XG4gICAgICAgIGxldCB3c0xpbms6ID9XZWJTb2NrZXRMaW5rID0gbnVsbDtcbiAgICAgICAgbGV0IGh0dHBMaW5rOiA/SHR0cExpbmsgPSBudWxsO1xuXG4gICAgICAgIGNvbnN0IHN1YnNPcHRpb25zID0gdGhpcy5jb25maWcudHJhY2VyLmluamVjdChzcGFuLCBGT1JNQVRfVEVYVF9NQVAsIHt9KTtcbiAgICAgICAgY29uc3Qgc3Vic2NyaXB0aW9uQ2xpZW50ID0gbmV3IFN1YnNjcmlwdGlvbkNsaWVudChcbiAgICAgICAgICAgIGNsaWVudENvbmZpZy53c1VybCxcbiAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICB0aW1lb3V0OiBLRUVQX0FMSVZFX1RJTUVPVVQsXG4gICAgICAgICAgICAgICAgcmVjb25uZWN0OiB0cnVlLFxuICAgICAgICAgICAgICAgIGNvbm5lY3Rpb25QYXJhbXM6ICgpID0+ICh7XG4gICAgICAgICAgICAgICAgICAgIGFjY2Vzc0tleTogdGhpcy5jb25maWcuZGF0YSAmJiB0aGlzLmNvbmZpZy5kYXRhLmFjY2Vzc0tleSxcbiAgICAgICAgICAgICAgICAgICAgaGVhZGVyczogc3Vic09wdGlvbnMsXG4gICAgICAgICAgICAgICAgfSksXG4gICAgICAgICAgICB9LFxuICAgICAgICAgICAgY2xpZW50Q29uZmlnLldlYlNvY2tldCxcbiAgICAgICAgKTtcbiAgICAgICAgc3Vic2NyaXB0aW9uQ2xpZW50Lm9uUmVjb25uZWN0ZWQoKCkgPT4ge1xuICAgICAgICAgICAgY29uc29sZS5sb2coJ1tUT05DbGllbnQucXVlcmllc10nLCAnV2ViU29ja2V0IFJlY29ubmVjdGVkJyk7XG4gICAgICAgIH0pO1xuICAgICAgICBsZXQgZGV0ZWN0aW5nUmVkaXJlY3Rpb24gPSBmYWxzZTtcbiAgICAgICAgc3Vic2NyaXB0aW9uQ2xpZW50Lm9uRXJyb3IoKCkgPT4ge1xuICAgICAgICAgICAgY29uc29sZS5sb2coJ1tUT05DbGllbnQucXVlcmllc10nLCAnV2ViU29ja2V0IEZhaWxlZCcpO1xuICAgICAgICAgICAgaWYgKGRldGVjdGluZ1JlZGlyZWN0aW9uKSB7XG4gICAgICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgKGFzeW5jICgpID0+IHtcbiAgICAgICAgICAgICAgICBkZXRlY3RpbmdSZWRpcmVjdGlvbiA9IHRydWU7XG4gICAgICAgICAgICAgICAgdHJ5IHtcbiAgICAgICAgICAgICAgICAgICAgY29uc3QgbmV3Q29uZmlnID0gYXdhaXQgdGhpcy5nZXRDbGllbnRDb25maWcoKTtcbiAgICAgICAgICAgICAgICAgICAgY29uc3QgY29uZmlnSXNDaGFuZ2VkID0gbmV3Q29uZmlnLmh0dHBVcmwgIT09IGNsaWVudENvbmZpZy5odHRwVXJsXG4gICAgICAgICAgICAgICAgICAgICAgICB8fCBuZXdDb25maWcud3NVcmwgIT09IGNsaWVudENvbmZpZy53c1VybDtcbiAgICAgICAgICAgICAgICAgICAgaWYgKGNvbmZpZ0lzQ2hhbmdlZCkge1xuICAgICAgICAgICAgICAgICAgICAgICAgY29uc29sZS5sb2coJ1tUT05DbGllbnQucXVlcmllc10nLCAnQ2xpZW50IGNvbmZpZyBjaGFuZ2VkJyk7XG4gICAgICAgICAgICAgICAgICAgICAgICBjbGllbnRDb25maWcgPSBuZXdDb25maWc7XG4gICAgICAgICAgICAgICAgICAgICAgICB0aGlzLmdyYXBocWxDbGllbnRDb25maWcgPSBjbGllbnRDb25maWc7XG4gICAgICAgICAgICAgICAgICAgICAgICBzdWJzY3JpcHRpb25DbGllbnQudXJsID0gbmV3Q29uZmlnLndzVXJsO1xuICAgICAgICAgICAgICAgICAgICAgICAgaWYgKHdzTGluaykge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHdzTGluay51cmwgPSBuZXdDb25maWcud3NVcmw7XG4gICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICAgICBpZiAoaHR0cExpbmspIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBodHRwTGluay51cmkgPSBuZXdDb25maWcuaHR0cFVybDtcbiAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIH0gY2F0Y2ggKGVycikge1xuICAgICAgICAgICAgICAgICAgICBjb25zb2xlLmxvZygnW1RPTkNsaWVudC5xdWVyaWVzXSByZWRpcmVjdGlvbiBkZXRlY3RvciBmYWlsZWQnLCBlcnIpO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICBkZXRlY3RpbmdSZWRpcmVjdGlvbiA9IGZhbHNlO1xuICAgICAgICAgICAgfSkoKTtcbiAgICAgICAgfSk7XG4gICAgICAgIHN1YnNjcmlwdGlvbkNsaWVudC5tYXhDb25uZWN0VGltZUdlbmVyYXRvci5kdXJhdGlvbiA9ICgpID0+IHtcbiAgICAgICAgICAgIHJldHVybiBzdWJzY3JpcHRpb25DbGllbnQubWF4Q29ubmVjdFRpbWVHZW5lcmF0b3IubWF4O1xuICAgICAgICB9O1xuXG4gICAgICAgIGNvbnN0IHRyYWNlckxpbmsgPSBhd2FpdCBzZXRDb250ZXh0KChfLCByZXEpID0+IHtcbiAgICAgICAgICAgIGNvbnN0IHJlc29sdmVkU3BhbiA9IChyZXEgJiYgcmVxLnRyYWNlU3BhbikgfHwgc3BhbjtcbiAgICAgICAgICAgIHJlcS5oZWFkZXJzID0ge307XG4gICAgICAgICAgICB0aGlzLmNvbmZpZy50cmFjZXIuaW5qZWN0KHJlc29sdmVkU3BhbiwgRk9STUFUX1RFWFRfTUFQLCByZXEuaGVhZGVycyk7XG4gICAgICAgICAgICBjb25zdCBhY2Nlc3NLZXkgPSB0aGlzLmNvbmZpZy5kYXRhICYmIHRoaXMuY29uZmlnLmRhdGEuYWNjZXNzS2V5O1xuICAgICAgICAgICAgaWYgKGFjY2Vzc0tleSkge1xuICAgICAgICAgICAgICAgIHJlcS5oZWFkZXJzLmFjY2Vzc0tleSA9IGFjY2Vzc0tleTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIHJldHVybiB7XG4gICAgICAgICAgICAgICAgaGVhZGVyczogcmVxLmhlYWRlcnMsXG4gICAgICAgICAgICB9O1xuICAgICAgICB9KTtcbiAgICAgICAgY29uc3Qgd3JhcExpbmsgPSAobGluazogQXBvbGxvTGluayk6IEFwb2xsb0xpbmsgPT4gdHJhY2VyTGluay5jb25jYXQobGluayk7XG4gICAgICAgIGNvbnN0IGlzU3Vic2NyaXB0aW9uID0gKHsgcXVlcnkgfSkgPT4ge1xuICAgICAgICAgICAgY29uc3QgZGVmaW5pdGlvbiA9IGdldE1haW5EZWZpbml0aW9uKHF1ZXJ5KTtcbiAgICAgICAgICAgIHJldHVybiAoXG4gICAgICAgICAgICAgICAgZGVmaW5pdGlvbi5raW5kID09PSAnT3BlcmF0aW9uRGVmaW5pdGlvbidcbiAgICAgICAgICAgICAgICAmJiBkZWZpbml0aW9uLm9wZXJhdGlvbiA9PT0gJ3N1YnNjcmlwdGlvbidcbiAgICAgICAgICAgICk7XG4gICAgICAgIH07XG4gICAgICAgIHdzTGluayA9IG5ldyBXZWJTb2NrZXRMaW5rKHN1YnNjcmlwdGlvbkNsaWVudCk7XG4gICAgICAgIGh0dHBMaW5rID0gdXNlSHR0cFxuICAgICAgICAgICAgPyBuZXcgSHR0cExpbmsoe1xuICAgICAgICAgICAgICAgIHVyaTogY2xpZW50Q29uZmlnLmh0dHBVcmwsXG4gICAgICAgICAgICAgICAgZmV0Y2g6IGNsaWVudENvbmZpZy5mZXRjaCxcbiAgICAgICAgICAgIH0pXG4gICAgICAgICAgICA6IG51bGw7XG5cbiAgICAgICAgY29uc3QgbGluayA9IGh0dHBMaW5rXG4gICAgICAgICAgICA/IHNwbGl0KGlzU3Vic2NyaXB0aW9uLCB3cmFwTGluayh3c0xpbmspLCB3cmFwTGluayhodHRwTGluaykpXG4gICAgICAgICAgICA6IHdyYXBMaW5rKHdzTGluayk7XG4gICAgICAgIHRoaXMuZ3JhcGhxbENsaWVudENvbmZpZyA9IGNsaWVudENvbmZpZztcbiAgICAgICAgdGhpcy5ncmFwaHFsQ2xpZW50ID0gbmV3IEFwb2xsb0NsaWVudCh7XG4gICAgICAgICAgICBjYWNoZTogbmV3IEluTWVtb3J5Q2FjaGUoe30pLFxuICAgICAgICAgICAgbGluayxcbiAgICAgICAgICAgIGRlZmF1bHRPcHRpb25zOiB7XG4gICAgICAgICAgICAgICAgd2F0Y2hRdWVyeToge1xuICAgICAgICAgICAgICAgICAgICBmZXRjaFBvbGljeTogJ25vLWNhY2hlJyxcbiAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgIHF1ZXJ5OiB7XG4gICAgICAgICAgICAgICAgICAgIGZldGNoUG9saWN5OiAnbm8tY2FjaGUnLFxuICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICB9LFxuICAgICAgICB9KTtcbiAgICB9XG5cbiAgICBhc3luYyBjbG9zZSgpIHtcbiAgICAgICAgaWYgKHRoaXMuZ3JhcGhxbENsaWVudCkge1xuICAgICAgICAgICAgY29uc3QgY2xpZW50ID0gdGhpcy5ncmFwaHFsQ2xpZW50O1xuICAgICAgICAgICAgdGhpcy5ncmFwaHFsQ2xpZW50ID0gbnVsbDtcbiAgICAgICAgICAgIGNsaWVudC5zdG9wKCk7XG4gICAgICAgICAgICBhd2FpdCBjbGllbnQuY2xlYXJTdG9yZSgpO1xuICAgICAgICB9XG4gICAgfVxufVxuXG5cbmNsYXNzIFRPTlF1ZXJpZXNNb2R1bGVDb2xsZWN0aW9uIGltcGxlbWVudHMgVE9OUUNvbGxlY3Rpb24ge1xuICAgIG1vZHVsZTogVE9OUXVlcmllc01vZHVsZTtcblxuICAgIGNvbGxlY3Rpb25OYW1lOiBzdHJpbmc7XG5cbiAgICB0eXBlTmFtZTogc3RyaW5nO1xuXG4gICAgY29uc3RydWN0b3IoXG4gICAgICAgIG1vZHVsZTogVE9OUXVlcmllc01vZHVsZSxcbiAgICAgICAgY29sbGVjdGlvbk5hbWU6IHN0cmluZyxcbiAgICAgICAgdHlwZU5hbWU6IHN0cmluZyxcbiAgICApIHtcbiAgICAgICAgdGhpcy5tb2R1bGUgPSBtb2R1bGU7XG4gICAgICAgIHRoaXMuY29sbGVjdGlvbk5hbWUgPSBjb2xsZWN0aW9uTmFtZTtcbiAgICAgICAgdGhpcy50eXBlTmFtZSA9IHR5cGVOYW1lO1xuICAgIH1cblxuICAgIGFzeW5jIHF1ZXJ5KFxuICAgICAgICAuLi5hcmdzXG4gICAgICAgIC8qXG4gICAgICAgICAgICBmaWx0ZXJPclBhcmFtczogYW55IHwgVE9OUXVlcnlQYXJhbXMsXG4gICAgICAgICAgICByZXN1bHQ6IHN0cmluZyxcbiAgICAgICAgICAgIG9yZGVyQnk/OiBPcmRlckJ5W10sXG4gICAgICAgICAgICBsaW1pdD86IG51bWJlcixcbiAgICAgICAgICAgIHRpbWVvdXQ/OiBudW1iZXIsXG4gICAgICAgICAgICBwYXJlbnRTcGFuPzogKFNwYW4gfCBTcGFuQ29udGV4dClcbiAgICAgICAgICovXG4gICAgKTogUHJvbWlzZTxhbnk+IHtcbiAgICAgICAgY29uc3Qge1xuICAgICAgICAgICAgZmlsdGVyLFxuICAgICAgICAgICAgcmVzdWx0LFxuICAgICAgICAgICAgb3JkZXJCeSxcbiAgICAgICAgICAgIGxpbWl0LFxuICAgICAgICAgICAgdGltZW91dCxcbiAgICAgICAgICAgIG9wZXJhdGlvbklkLFxuICAgICAgICAgICAgcGFyZW50U3BhbixcbiAgICAgICAgfSA9IHJlc29sdmVQYXJhbXM8VE9OUXVlcnlQYXJhbXM+KGFyZ3MsICdmaWx0ZXInLCAoKSA9PiAoe1xuICAgICAgICAgICAgZmlsdGVyOiBhcmdzWzBdLFxuICAgICAgICAgICAgcmVzdWx0OiAoYXJnc1sxXTogYW55KSxcbiAgICAgICAgICAgIG9yZGVyQnk6IChhcmdzWzJdOiBhbnkpLFxuICAgICAgICAgICAgbGltaXQ6IChhcmdzWzNdOiBhbnkpLFxuICAgICAgICAgICAgdGltZW91dDogKGFyZ3NbNF06IGFueSksXG4gICAgICAgICAgICBwYXJlbnRTcGFuOiBhcmdzWzVdLFxuICAgICAgICB9KSk7XG4gICAgICAgIHJldHVybiB0aGlzLm1vZHVsZS5jb250ZXh0LnRyYWNlKGAke3RoaXMuY29sbGVjdGlvbk5hbWV9LnF1ZXJ5YCwgYXN5bmMgKHNwYW4pID0+IHtcbiAgICAgICAgICAgIHNwYW4uc2V0VGFnKCdwYXJhbXMnLCB7XG4gICAgICAgICAgICAgICAgZmlsdGVyLFxuICAgICAgICAgICAgICAgIHJlc3VsdCxcbiAgICAgICAgICAgICAgICBvcmRlckJ5LFxuICAgICAgICAgICAgICAgIGxpbWl0LFxuICAgICAgICAgICAgICAgIHRpbWVvdXQsXG4gICAgICAgICAgICAgICAgb3BlcmF0aW9uSWQsXG4gICAgICAgICAgICB9KTtcbiAgICAgICAgICAgIGNvbnN0IHVzZU9wZXJhdGlvbklkID0gb3BlcmF0aW9uSWRcbiAgICAgICAgICAgICAgICAmJiAoYXdhaXQgdGhpcy5tb2R1bGUuZ2V0U2VydmVySW5mbyhzcGFuKSkuc3VwcG9ydHNPcGVyYXRpb25JZDtcbiAgICAgICAgICAgIGNvbnN0IGMgPSB0aGlzLmNvbGxlY3Rpb25OYW1lO1xuICAgICAgICAgICAgY29uc3QgdCA9IHRoaXMudHlwZU5hbWU7XG4gICAgICAgICAgICBjb25zdCBxbCA9IGBcbiAgICAgICAgICAgIHF1ZXJ5ICR7Y30oXG4gICAgICAgICAgICAgICAgJGZpbHRlcjogJHt0fUZpbHRlcixcbiAgICAgICAgICAgICAgICAkb3JkZXJCeTogW1F1ZXJ5T3JkZXJCeV0sIFxuICAgICAgICAgICAgICAgICRsaW1pdDogSW50LCBcbiAgICAgICAgICAgICAgICAkdGltZW91dDogRmxvYXRcbiAgICAgICAgICAgICAgICAke3VzZU9wZXJhdGlvbklkID8gJywgJG9wZXJhdGlvbklkOiBTdHJpbmcnIDogJyd9XG4gICAgICAgICAgICAgKSB7XG4gICAgICAgICAgICAgICAgJHtjfShcbiAgICAgICAgICAgICAgICAgICAgZmlsdGVyOiAkZmlsdGVyLCBcbiAgICAgICAgICAgICAgICAgICAgb3JkZXJCeTogJG9yZGVyQnksIFxuICAgICAgICAgICAgICAgICAgICBsaW1pdDogJGxpbWl0LCBcbiAgICAgICAgICAgICAgICAgICAgdGltZW91dDogJHRpbWVvdXRcbiAgICAgICAgICAgICAgICAgICAgJHt1c2VPcGVyYXRpb25JZCA/ICcsIG9wZXJhdGlvbklkOiAkb3BlcmF0aW9uSWQnIDogJyd9XG4gICAgICAgICAgICAgICAgKSB7ICR7cmVzdWx0fSB9XG4gICAgICAgICAgICB9YDtcbiAgICAgICAgICAgIGNvbnN0IHZhcmlhYmxlczogeyBbc3RyaW5nXTogYW55IH0gPSB7XG4gICAgICAgICAgICAgICAgZmlsdGVyLFxuICAgICAgICAgICAgICAgIG9yZGVyQnksXG4gICAgICAgICAgICAgICAgbGltaXQsXG4gICAgICAgICAgICB9O1xuICAgICAgICAgICAgaWYgKHVzZU9wZXJhdGlvbklkKSB7XG4gICAgICAgICAgICAgICAgdmFyaWFibGVzLm9wZXJhdGlvbklkID0gb3BlcmF0aW9uSWQ7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBpZiAodGltZW91dCkge1xuICAgICAgICAgICAgICAgIHZhcmlhYmxlcy50aW1lb3V0ID0gTWF0aC5taW4oTUFYX1RJTUVPVVQsIHRpbWVvdXQpO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgcmV0dXJuIChhd2FpdCB0aGlzLm1vZHVsZS5ncmFwaHFsUXVlcnkocWwsIHZhcmlhYmxlcywgc3BhbikpLmRhdGFbY107XG4gICAgICAgIH0sIHBhcmVudFNwYW4pO1xuICAgIH1cblxuICAgIGFzeW5jIGFnZ3JlZ2F0ZShcbiAgICAgICAgcGFyYW1zOiBUT05RdWVyeUFnZ3JlZ2F0ZVBhcmFtcyxcbiAgICApOiBQcm9taXNlPHN0cmluZ1tdPiB7XG4gICAgICAgIHJldHVybiB0aGlzLm1vZHVsZS5jb250ZXh0LnRyYWNlKGAke3RoaXMuY29sbGVjdGlvbk5hbWV9LmFnZ3JlZ2F0ZWAsIGFzeW5jIChzcGFuKSA9PiB7XG4gICAgICAgICAgICBzcGFuLnNldFRhZygncGFyYW1zJywge1xuICAgICAgICAgICAgICAgIGZpbHRlcjogcGFyYW1zLmZpbHRlcixcbiAgICAgICAgICAgICAgICBmaWVsZHM6IHBhcmFtcy5maWVsZHMsXG4gICAgICAgICAgICB9KTtcbiAgICAgICAgICAgIGlmICghKGF3YWl0IHRoaXMubW9kdWxlLmdldFNlcnZlckluZm8oc3BhbikpLnN1cHBvcnRzQWdncmVnYXRpb25zKSB7XG4gICAgICAgICAgICAgICAgdGhyb3cgVE9OQ2xpZW50RXJyb3Iuc2VydmVyRG9lc250U3VwcG9ydEFnZ3JlZ2F0aW9ucygpO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgY29uc3QgdCA9IHRoaXMudHlwZU5hbWU7XG4gICAgICAgICAgICBjb25zdCBxID0gdGhpcy50eXBlTmFtZS5lbmRzV2l0aCgncycpID8gYGFnZ3JlZ2F0ZSR7dH1gIDogYGFnZ3JlZ2F0ZSR7dH1zYDtcbiAgICAgICAgICAgIGNvbnN0IHFsID0gYFxuICAgICAgICAgICAgcXVlcnkgJHtxfShcbiAgICAgICAgICAgICAgICAkZmlsdGVyOiAke3R9RmlsdGVyLFxuICAgICAgICAgICAgICAgICRmaWVsZHM6IFtGaWVsZEFnZ3JlZ2F0aW9uXSBcbiAgICAgICAgICAgICApIHtcbiAgICAgICAgICAgICAgICAke3F9KFxuICAgICAgICAgICAgICAgICAgICBmaWx0ZXI6ICRmaWx0ZXIsIFxuICAgICAgICAgICAgICAgICAgICBmaWVsZHM6ICRmaWVsZHMgXG4gICAgICAgICAgICAgICAgKVxuICAgICAgICAgICAgfWA7XG4gICAgICAgICAgICBjb25zdCB2YXJpYWJsZXM6IHsgW3N0cmluZ106IGFueSB9ID0ge1xuICAgICAgICAgICAgICAgIGZpbHRlcjogcGFyYW1zLmZpbHRlcixcbiAgICAgICAgICAgICAgICBmaWVsZHM6IHBhcmFtcy5maWVsZHMsXG4gICAgICAgICAgICB9O1xuICAgICAgICAgICAgcmV0dXJuIChhd2FpdCB0aGlzLm1vZHVsZS5ncmFwaHFsUXVlcnkocWwsIHZhcmlhYmxlcywgc3BhbikpLmRhdGFbcV07XG4gICAgICAgIH0sIHBhcmFtcy5wYXJlbnRTcGFuKTtcbiAgICB9XG5cbiAgICBzdWJzY3JpYmUoXG4gICAgICAgIC4uLmFyZ3NcbiAgICAgICAgLypcbiAgICAgICAgZmlsdGVyT3JQYXJhbXM6IGFueSB8IFRPTlN1YnNjcmliZVBhcmFtcyxcbiAgICAgICAgcmVzdWx0Pzogc3RyaW5nLFxuICAgICAgICBvbkRvY0V2ZW50PzogRG9jRXZlbnQsXG4gICAgICAgIG9uRXJyb3I/OiAoZXJyOiBFcnJvcikgPT4gdm9pZFxuICAgICAgICAgKi9cbiAgICApOiBTdWJzY3JpcHRpb24ge1xuICAgICAgICBjb25zdCB7XG4gICAgICAgICAgICBmaWx0ZXIsXG4gICAgICAgICAgICByZXN1bHQsXG4gICAgICAgICAgICBvbkRvY0V2ZW50LFxuICAgICAgICAgICAgb25FcnJvcixcbiAgICAgICAgfSA9IHJlc29sdmVQYXJhbXM8VE9OU3Vic2NyaWJlUGFyYW1zPihhcmdzLCAnZmlsdGVyJywgKCkgPT4gKHtcbiAgICAgICAgICAgIGZpbHRlcjogYXJnc1swXSxcbiAgICAgICAgICAgIHJlc3VsdDogKGFyZ3NbMV06IGFueSksXG4gICAgICAgICAgICBvbkRvY0V2ZW50OiAoYXJnc1syXTogYW55KSxcbiAgICAgICAgICAgIG9uRXJyb3I6IChhcmdzWzNdOiBhbnkpLFxuICAgICAgICB9KSk7XG4gICAgICAgIGNvbnN0IHNwYW4gPSB0aGlzLm1vZHVsZS5jb25maWcudHJhY2VyLnN0YXJ0U3BhbignVE9OUXVlcmllc01vZHVsZS5qczpzdWJzY3JpYmUgJyk7XG4gICAgICAgIHNwYW4uc2V0VGFnKFRhZ3MuU1BBTl9LSU5ELCAnY2xpZW50Jyk7XG4gICAgICAgIGNvbnN0IHRleHQgPSBgc3Vic2NyaXB0aW9uICR7dGhpcy5jb2xsZWN0aW9uTmFtZX0oJGZpbHRlcjogJHt0aGlzLnR5cGVOYW1lfUZpbHRlcikge1xuICAgICAgICAgICAgJHt0aGlzLmNvbGxlY3Rpb25OYW1lfShmaWx0ZXI6ICRmaWx0ZXIpIHsgJHtyZXN1bHR9IH1cbiAgICAgICAgfWA7XG4gICAgICAgIGNvbnN0IHF1ZXJ5ID0gZ3FsKFt0ZXh0XSk7XG4gICAgICAgIGxldCBzdWJzY3JpcHRpb24gPSBudWxsO1xuICAgICAgICAoYXN5bmMgKCkgPT4ge1xuICAgICAgICAgICAgdHJ5IHtcbiAgICAgICAgICAgICAgICBjb25zdCBjbGllbnQgPSBhd2FpdCB0aGlzLm1vZHVsZS5ncmFwaHFsQ2xpZW50UmVxdWlyZWQoc3Bhbik7XG4gICAgICAgICAgICAgICAgY29uc3Qgb2JzZXJ2YWJsZSA9IGNsaWVudC5zdWJzY3JpYmUoe1xuICAgICAgICAgICAgICAgICAgICBxdWVyeSxcbiAgICAgICAgICAgICAgICAgICAgdmFyaWFibGVzOiB7XG4gICAgICAgICAgICAgICAgICAgICAgICBmaWx0ZXIsXG4gICAgICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICAgICAgc3Vic2NyaXB0aW9uID0gb2JzZXJ2YWJsZS5zdWJzY3JpYmUoKG1lc3NhZ2UpID0+IHtcbiAgICAgICAgICAgICAgICAgICAgb25Eb2NFdmVudCgnaW5zZXJ0L3VwZGF0ZScsIG1lc3NhZ2UuZGF0YVt0aGlzLmNvbGxlY3Rpb25OYW1lXSk7XG4gICAgICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICB9IGNhdGNoIChlcnJvcikge1xuICAgICAgICAgICAgICAgIHNwYW4ubG9nKHtcbiAgICAgICAgICAgICAgICAgICAgZXZlbnQ6ICdmYWlsZWQnLFxuICAgICAgICAgICAgICAgICAgICBwYXlsb2FkOiBlcnJvcixcbiAgICAgICAgICAgICAgICB9KTtcbiAgICAgICAgICAgICAgICBpZiAob25FcnJvcikge1xuICAgICAgICAgICAgICAgICAgICBvbkVycm9yKGVycm9yKTtcbiAgICAgICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAgICAgICBjb25zb2xlLmxvZygnVE9OIENsaWVudCBzdWJzY3JpcHRpb24gZXJyb3InLCBlcnJvcik7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuICAgICAgICB9KSgpO1xuICAgICAgICByZXR1cm4ge1xuICAgICAgICAgICAgdW5zdWJzY3JpYmU6ICgpID0+IHtcbiAgICAgICAgICAgICAgICBpZiAoc3Vic2NyaXB0aW9uKSB7XG4gICAgICAgICAgICAgICAgICAgIHN1YnNjcmlwdGlvbi51bnN1YnNjcmliZSgpO1xuICAgICAgICAgICAgICAgICAgICBzcGFuLmZpbmlzaCgpO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH0sXG4gICAgICAgIH07XG4gICAgfVxuXG4gICAgYXN5bmMgd2FpdEZvcihcbiAgICAgICAgLi4uYXJnc1xuICAgICAgICAvKlxuICAgICAgICBmaWx0ZXJPclBhcmFtczogYW55IHwgVE9OV2FpdEZvclBhcmFtcyxcbiAgICAgICAgcmVzdWx0OiBzdHJpbmcsXG4gICAgICAgIHRpbWVvdXQ/OiBudW1iZXIsXG4gICAgICAgIHBhcmVudFNwYW4/OiAoU3BhbiB8IFNwYW5Db250ZXh0KVxuICAgICAgICAgKi9cbiAgICApOiBQcm9taXNlPGFueT4ge1xuICAgICAgICBjb25zdCB7XG4gICAgICAgICAgICBmaWx0ZXIsXG4gICAgICAgICAgICByZXN1bHQsXG4gICAgICAgICAgICB0aW1lb3V0OiBwYXJhbXNUaW1lb3V0LFxuICAgICAgICAgICAgcGFyZW50U3BhbixcbiAgICAgICAgICAgIG9wZXJhdGlvbklkLFxuICAgICAgICB9ID0gcmVzb2x2ZVBhcmFtczxUT05XYWl0Rm9yUGFyYW1zPihhcmdzLCAnZmlsdGVyJywgKCkgPT4gKHtcbiAgICAgICAgICAgIGZpbHRlcjogYXJnc1swXSxcbiAgICAgICAgICAgIHJlc3VsdDogKGFyZ3NbMV06IGFueSksXG4gICAgICAgICAgICB0aW1lb3V0OiAoYXJnc1syXTogYW55KSxcbiAgICAgICAgICAgIHBhcmVudFNwYW46IGFyZ3NbM10sXG4gICAgICAgIH0pKTtcbiAgICAgICAgY29uc3QgdGltZW91dCA9IHBhcmFtc1RpbWVvdXQgfHwgdGhpcy5tb2R1bGUuY29uZmlnLndhaXRGb3JUaW1lb3V0KCk7XG4gICAgICAgIGNvbnN0IGRvY3MgPSBhd2FpdCB0aGlzLnF1ZXJ5KHtcbiAgICAgICAgICAgIGZpbHRlcixcbiAgICAgICAgICAgIHJlc3VsdCxcbiAgICAgICAgICAgIHRpbWVvdXQsXG4gICAgICAgICAgICBwYXJlbnRTcGFuLFxuICAgICAgICAgICAgb3BlcmF0aW9uSWQsXG4gICAgICAgIH0pO1xuICAgICAgICBpZiAoZG9jcy5sZW5ndGggPiAwKSB7XG4gICAgICAgICAgICByZXR1cm4gZG9jc1swXTtcbiAgICAgICAgfVxuICAgICAgICB0aHJvdyBUT05DbGllbnRFcnJvci53YWl0Rm9yVGltZW91dCgpO1xuICAgIH1cbn1cblxuVE9OUXVlcmllc01vZHVsZS5tb2R1bGVOYW1lID0gJ1RPTlF1ZXJpZXNNb2R1bGUnO1xuIl19