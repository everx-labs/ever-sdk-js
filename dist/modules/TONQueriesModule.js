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
      var _graphqlQuery = _asyncToGenerator( /*#__PURE__*/_regenerator["default"].mark(function _callee20(ql) {
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
            _args20 = arguments;

        return _regenerator["default"].wrap(function _callee20$(_context20) {
          while (1) {
            switch (_context20.prev = _context20.next) {
              case 0:
                variables = _args20.length > 1 && _args20[1] !== undefined ? _args20[1] : {};
                span = _args20.length > 2 ? _args20[2] : undefined;
                timeout = _args20.length > 3 ? _args20[3] : undefined;
                query = (0, _graphqlTag["default"])([ql]);
                nextTimeout = 100;
                startTime = Date.now();
                forceTerminateExtraTimeout = 5000;
                forceTerminateTimeout = timeout || this.config.waitForTimeout();

              case 8:
                if (!true) {
                  _context20.next = 26;
                  break;
                }

                _context20.prev = 9;
                return _context20.delegateYield( /*#__PURE__*/_regenerator["default"].mark(function _callee18() {
                  var client, abortController, promises;
                  return _regenerator["default"].wrap(function _callee18$(_context18) {
                    while (1) {
                      switch (_context18.prev = _context18.next) {
                        case 0:
                          _context18.next = 2;
                          return _this5.graphqlClientRequired(span);

                        case 2:
                          client = _context18.sent;
                          abortController = AbortController ? new AbortController() : null;
                          promises = [client.query({
                            query: query,
                            variables: variables,
                            context: {
                              traceSpan: span,
                              fetchOptions: {
                                signal: abortController.signal
                              }
                            },
                            fetchPolicy: 'standby'
                          })];

                          if (timeout) {
                            promises.push(new Promise(function (resolve, reject) {
                              setTimeout(function () {
                                abortController === null || abortController === void 0 ? void 0 : abortController.abort();
                                reject(_TONClient.TONClientError.requestForciblyTerminated());
                              }, forceTerminateTimeout + forceTerminateExtraTimeout);
                            }));
                          }

                          _context18.next = 8;
                          return Promise.race(promises);

                        case 8:
                          _context18.t0 = _context18.sent;
                          return _context18.abrupt("return", {
                            v: _context18.t0
                          });

                        case 10:
                        case "end":
                          return _context18.stop();
                      }
                    }
                  }, _callee18);
                })(), "t0", 11);

              case 11:
                _ret = _context20.t0;

                if (!(_typeof(_ret) === "object")) {
                  _context20.next = 14;
                  break;
                }

                return _context20.abrupt("return", _ret.v);

              case 14:
                _context20.next = 24;
                break;

              case 16:
                _context20.prev = 16;
                _context20.t1 = _context20["catch"](9);
                resolvedError = this.resolveGraphQLError(_context20.t1);

                if (!(TONQueriesModule.isNetworkError(resolvedError) && !this.config.isNetworkTimeoutExpiredSince(startTime))) {
                  _context20.next = 23;
                  break;
                }

                return _context20.delegateYield( /*#__PURE__*/_regenerator["default"].mark(function _callee19() {
                  var retryDelayTimeout;
                  return _regenerator["default"].wrap(function _callee19$(_context19) {
                    while (1) {
                      switch (_context19.prev = _context19.next) {
                        case 0:
                          _this5.config.log(resolvedError);

                          retryDelayTimeout = nextTimeout;
                          _context19.next = 4;
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
                          return _context19.stop();
                      }
                    }
                  }, _callee19);
                })(), "t2", 21);

              case 21:
                _context20.next = 24;
                break;

              case 23:
                throw resolvedError;

              case 24:
                _context20.next = 8;
                break;

              case 26:
              case "end":
                return _context20.stop();
            }
          }
        }, _callee20, this, [[9, 16]]);
      }));

      function graphqlQuery(_x18) {
        return _graphqlQuery.apply(this, arguments);
      }

      return graphqlQuery;
    }()
  }, {
    key: "resolveGraphQLError",
    value: function resolveGraphQLError(error) {
      var gqlErr = error.graphQLErrors && error.graphQLErrors[0];

      if (gqlErr) {
        var clientErr = new Error(gqlErr.message);
        var gqlExc = gqlErr.extensions && gqlErr.extensions.exception || {};
        clientErr.number = gqlExc.code || 0;
        clientErr.code = gqlExc.code || 0;
        clientErr.source = gqlExc.source || 'client';
        return clientErr;
      }

      var errors = error && error.networkError && error.networkError.result && error.networkError.result.errors;

      if (errors) {
        return _TONClient.TONClientError.queryFailed(errors);
      } else {
        return error;
      }
    }
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
                throw this.resolveGraphQLError(_context21.t0);

              case 12:
              case "end":
                return _context21.stop();
            }
          }
        }, _callee21, this, [[3, 9]]);
      }));

      function graphQl(_x19, _x20) {
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

      function graphqlClientRequired(_x21) {
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

      function createGraphqlClient(_x22) {
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
      if (error.code === _TONClient.TONErrorCode.REQUEST_FORCIBLY_TERMINATED) {
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

                  return function (_x23) {
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
                              _context28.next = 5;
                              break;
                            }

                            throw _TONClient.TONClientError.serverDoesntSupportAggregations();

                          case 5:
                            t = _this9.typeName;
                            q = _this9.typeName.endsWith('s') ? "aggregate".concat(t) : "aggregate".concat(t, "s");
                            ql = "\n            query ".concat(q, "(\n                $filter: ").concat(t, "Filter,\n                $fields: [FieldAggregation] \n             ) {\n                ").concat(q, "(\n                    filter: $filter, \n                    fields: $fields \n                )\n            }");
                            variables = {
                              filter: params.filter,
                              fields: params.fields
                            };
                            _context28.next = 11;
                            return _this9.module.graphqlQuery(ql, variables, span);

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

                  return function (_x25) {
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

      function aggregate(_x24) {
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy9tb2R1bGVzL1RPTlF1ZXJpZXNNb2R1bGUuanMiXSwibmFtZXMiOlsiS0VFUF9BTElWRV9USU1FT1VUIiwiTUFYX1RJTUVPVVQiLCJyZXNvbHZlUGFyYW1zIiwiYXJncyIsInJlcXVpcmVkUGFyYW1OYW1lIiwicmVzb2x2ZUFyZ3MiLCJsZW5ndGgiLCJNdWx0aWNhc3RQcm9taXNlIiwibGlzdGVuZXJzIiwib25Db21wbGV0ZSIsImxpc3RlbmVyIiwicmVzb2x2ZSIsInJlamVjdCIsInB1c2giLCJQcm9taXNlIiwidmFsdWUiLCJjb21wbGV0ZSIsImVycm9yIiwiY29tcGxldGVMaXN0ZW5lciIsImZvckVhY2giLCJ2ZXJzaW9uVG9OdW1iZXIiLCJzIiwicGFydHMiLCJzcGxpdCIsIm1hcCIsIngiLCJOdW1iZXIiLCJzbGljZSIsInJlc29sdmVTZXJ2ZXJJbmZvIiwidmVyc2lvblN0cmluZyIsInZlcnNpb24iLCJzdXBwb3J0c09wZXJhdGlvbklkIiwic3VwcG9ydHNBZ2dyZWdhdGlvbnMiLCJzdXBwb3J0c1RpbWUiLCJ0aW1lRGVsdGEiLCJUT05RdWVyaWVzTW9kdWxlIiwiY29udGV4dCIsImdyYXBocWxDbGllbnQiLCJncmFwaHFsQ2xpZW50Q3JlYXRpb24iLCJncmFwaHFsQ2xpZW50Q29uZmlnIiwib3ZlcnJpZGVXc1VybCIsIm9wZXJhdGlvbklkUHJlZml4IiwiRGF0ZSIsIm5vdyIsInRvU3RyaW5nIiwiaSIsIk1hdGgiLCJyb3VuZCIsInJhbmRvbSIsIm9wZXJhdGlvbklkU3VmZml4Iiwic2VydmVySW5mbyIsImNvbmZpZyIsImdldE1vZHVsZSIsIlRPTkNvbmZpZ01vZHVsZSIsInRyYW5zYWN0aW9ucyIsIlRPTlF1ZXJpZXNNb2R1bGVDb2xsZWN0aW9uIiwibWVzc2FnZXMiLCJibG9ja3MiLCJhY2NvdW50cyIsImJsb2Nrc19zaWduYXR1cmVzIiwiZmV0Y2giLCJzb3VyY2VVcmwiLCJyZXNwb25zZSIsInRleHQiLCJyZXNwb25zZVRleHQiLCJyZXNwb25zZUpzb24iLCJKU09OIiwicGFyc2UiLCJkYXRhIiwiaW5mbyIsInJlZGlyZWN0ZWQiLCJ1cmwiLCJzb3VyY2VMb2NhdGlvbiIsIlVSTFBhcnRzIiwiZml4UXVlcnkiLCJfIiwidG9Mb3dlckNhc2UiLCJyZXNwb25zZUxvY2F0aW9uIiwiZ2V0Q29uZmlnRm9yU2VydmVyIiwic2VydmVyIiwiaHR0cFBhcnRzIiwiZml4UHJvdG9jb2wiLCJmaXhQYXRoIiwiaHR0cCIsIndzIiwiaHR0cFVybCIsIndzVXJsIiwiY2xpZW50UGxhdGZvcm0iLCJXZWJTb2NrZXQiLCJUT05DbGllbnQiLCJFcnJvciIsInNlcnZlcnMiLCJjbGllbnRDb25maWciLCJkZXRlY3RSZWRpcmVjdCIsImNvbnNvbGUiLCJsb2ciLCJlcnJvclN0cmluZyIsInNwYW4iLCJncmFwaHFsQ2xpZW50UmVxdWlyZWQiLCJnZXRTZXJ2ZXJJbmZvIiwic3RhcnQiLCJlbmQiLCJqc29uIiwicmVzcG9uc2VEYXRhIiwic2VydmVyVGltZSIsInRpbWUiLCJzZXJ2ZXJUaW1lRGVsdGEiLCJvcGVyYXRpb25JZHMiLCJncmFwaHFsTXV0YXRpb24iLCJwYXJlbnRTcGFuIiwicXVlcnkiLCJ1bmRlZmluZWQiLCJyZXN1bHQiLCJnZXRBY2NvdW50c0NvdW50IiwiZ2V0VHJhbnNhY3Rpb25zQ291bnQiLCJnZXRBY2NvdW50c1RvdGFsQmFsYW5jZSIsInJlcXVlc3RzIiwidHJhY2UiLCJxbCIsInZhcmlhYmxlcyIsInNldFRhZyIsIm11dGF0aW9uIiwidGltZW91dCIsImdyYXBocWxRdWVyeSIsImdyYXBoUWwiLCJjbGllbnQiLCJtdXRhdGUiLCJ0cmFjZVNwYW4iLCJuZXh0VGltZW91dCIsInN0YXJ0VGltZSIsImZvcmNlVGVybWluYXRlRXh0cmFUaW1lb3V0IiwiZm9yY2VUZXJtaW5hdGVUaW1lb3V0Iiwid2FpdEZvclRpbWVvdXQiLCJhYm9ydENvbnRyb2xsZXIiLCJBYm9ydENvbnRyb2xsZXIiLCJwcm9taXNlcyIsImZldGNoT3B0aW9ucyIsInNpZ25hbCIsImZldGNoUG9saWN5Iiwic2V0VGltZW91dCIsImFib3J0IiwiVE9OQ2xpZW50RXJyb3IiLCJyZXF1ZXN0Rm9yY2libHlUZXJtaW5hdGVkIiwicmFjZSIsInJlc29sdmVkRXJyb3IiLCJyZXNvbHZlR3JhcGhRTEVycm9yIiwiaXNOZXR3b3JrRXJyb3IiLCJpc05ldHdvcmtUaW1lb3V0RXhwaXJlZFNpbmNlIiwicmV0cnlEZWxheVRpbWVvdXQiLCJncWxFcnIiLCJncmFwaFFMRXJyb3JzIiwiY2xpZW50RXJyIiwibWVzc2FnZSIsImdxbEV4YyIsImV4dGVuc2lvbnMiLCJleGNlcHRpb24iLCJudW1iZXIiLCJjb2RlIiwic291cmNlIiwiZXJyb3JzIiwibmV0d29ya0Vycm9yIiwicXVlcnlGYWlsZWQiLCJyZXF1ZXN0IiwibGlzdGVuIiwiY3JlYXRpb24iLCJjcmVhdGVHcmFwaHFsQ2xpZW50IiwidXNlSHR0cCIsInVzZVdlYlNvY2tldEZvclF1ZXJpZXMiLCJnZXRDbGllbnRDb25maWciLCJ3c0xpbmsiLCJodHRwTGluayIsInN1YnNPcHRpb25zIiwidHJhY2VyIiwiaW5qZWN0IiwiRk9STUFUX1RFWFRfTUFQIiwic3Vic2NyaXB0aW9uQ2xpZW50IiwiU3Vic2NyaXB0aW9uQ2xpZW50IiwicmVjb25uZWN0IiwiY29ubmVjdGlvblBhcmFtcyIsImFjY2Vzc0tleSIsImhlYWRlcnMiLCJvblJlY29ubmVjdGVkIiwiZGV0ZWN0aW5nUmVkaXJlY3Rpb24iLCJvbkVycm9yIiwibmV3Q29uZmlnIiwiY29uZmlnSXNDaGFuZ2VkIiwidXJpIiwibWF4Q29ubmVjdFRpbWVHZW5lcmF0b3IiLCJkdXJhdGlvbiIsIm1heCIsInJlcSIsInJlc29sdmVkU3BhbiIsInRyYWNlckxpbmsiLCJ3cmFwTGluayIsImxpbmsiLCJjb25jYXQiLCJpc1N1YnNjcmlwdGlvbiIsImRlZmluaXRpb24iLCJraW5kIiwib3BlcmF0aW9uIiwiV2ViU29ja2V0TGluayIsIkh0dHBMaW5rIiwiQXBvbGxvQ2xpZW50IiwiY2FjaGUiLCJJbk1lbW9yeUNhY2hlIiwiZGVmYXVsdE9wdGlvbnMiLCJ3YXRjaFF1ZXJ5Iiwic3RvcCIsImNsZWFyU3RvcmUiLCJUT05FcnJvckNvZGUiLCJSRVFVRVNUX0ZPUkNJQkxZX1RFUk1JTkFURUQiLCJUT05Nb2R1bGUiLCJtb2R1bGUiLCJjb2xsZWN0aW9uTmFtZSIsInR5cGVOYW1lIiwiZmlsdGVyIiwib3JkZXJCeSIsImxpbWl0Iiwib3BlcmF0aW9uSWQiLCJ1c2VPcGVyYXRpb25JZCIsImMiLCJ0IiwibWluIiwicGFyYW1zIiwiZmllbGRzIiwic2VydmVyRG9lc250U3VwcG9ydEFnZ3JlZ2F0aW9ucyIsInEiLCJlbmRzV2l0aCIsIm9uRG9jRXZlbnQiLCJzdGFydFNwYW4iLCJUYWdzIiwiU1BBTl9LSU5EIiwic3Vic2NyaXB0aW9uIiwib2JzZXJ2YWJsZSIsInN1YnNjcmliZSIsImV2ZW50IiwicGF5bG9hZCIsInVuc3Vic2NyaWJlIiwiZmluaXNoIiwicGFyYW1zVGltZW91dCIsImRvY3MiLCJtb2R1bGVOYW1lIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7QUFNQTs7QUFDQTs7QUFDQTs7QUFDQTs7QUFDQTs7QUFDQTs7QUFDQTs7QUFDQTs7QUFDQTs7QUFDQTs7QUFZQTs7QUFFQTs7QUFDQTs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBdUJBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLElBQU1BLGtCQUFrQixHQUFHLElBQUksS0FBL0I7QUFFTyxJQUFNQyxXQUFXLEdBQUcsVUFBcEI7OztBQUVQLFNBQVNDLGFBQVQsQ0FBMEJDLElBQTFCLEVBQXVDQyxpQkFBdkMsRUFBa0VDLFdBQWxFLEVBQTJGO0FBQ3ZGLFNBQVFGLElBQUksQ0FBQ0csTUFBTCxLQUFnQixDQUFqQixJQUF3QkYsaUJBQWlCLElBQUlELElBQUksQ0FBQyxDQUFELENBQWpELEdBQXdEQSxJQUFJLENBQUMsQ0FBRCxDQUE1RCxHQUFrRUUsV0FBVyxFQUFwRjtBQUNIOztJQU9L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eUIsUUFBekIsRUFBbUM7QUFBQSx5QkFBTztBQUN2RG9OLG9CQUFBQSxNQUFNLEVBQUVwTixJQUFJLENBQUMsQ0FBRCxDQUQyQztBQUV2RDZHLG9CQUFBQSxNQUFNLEVBQUc3RyxJQUFJLENBQUMsQ0FBRCxDQUYwQztBQUd2RHVILG9CQUFBQSxPQUFPLEVBQUd2SCxJQUFJLENBQUMsQ0FBRCxDQUh5QztBQUl2RDBHLG9CQUFBQSxVQUFVLEVBQUUxRyxJQUFJLENBQUMsQ0FBRDtBQUp1QyxtQkFBUDtBQUFBLGlCQUFuQyxDLEVBTGJvTixNLG1CQUFBQSxNLEVBQ0F2RyxNLG1CQUFBQSxNLEVBQ1MrSCxhLG1CQUFUckgsTyxFQUNBYixVLG1CQUFBQSxVLEVBQ0E2RyxXLG1CQUFBQSxXO0FBT0VoRyxnQkFBQUEsTyxHQUFVcUgsYUFBYSxJQUFJLEtBQUszQixNQUFMLENBQVlqSyxNQUFaLENBQW1CaUYsY0FBbkIsRTs7dUJBQ2QsS0FBS3RCLEtBQUwsQ0FBVztBQUMxQnlHLGtCQUFBQSxNQUFNLEVBQU5BLE1BRDBCO0FBRTFCdkcsa0JBQUFBLE1BQU0sRUFBTkEsTUFGMEI7QUFHMUJVLGtCQUFBQSxPQUFPLEVBQVBBLE9BSDBCO0FBSTFCYixrQkFBQUEsVUFBVSxFQUFWQSxVQUowQjtBQUsxQjZHLGtCQUFBQSxXQUFXLEVBQVhBO0FBTDBCLGlCQUFYLEM7OztBQUFic0IsZ0JBQUFBLEk7O3NCQU9GQSxJQUFJLENBQUMxTyxNQUFMLEdBQWMsQzs7Ozs7bURBQ1AwTyxJQUFJLENBQUMsQ0FBRCxDOzs7c0JBRVRuRywwQkFBZVQsY0FBZixFOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFJZGpHLGdCQUFnQixDQUFDOE0sVUFBakIsR0FBOEIsa0JBQTlCIiwic291cmNlc0NvbnRlbnQiOlsiLypcbiAqIENvcHlyaWdodCAyMDE4LTIwMjAgVE9OIERFViBTT0xVVElPTlMgTFRELlxuICovXG5cbi8vIEBmbG93XG5cbmltcG9ydCB7IEluTWVtb3J5Q2FjaGUgfSBmcm9tICdhcG9sbG8tY2FjaGUtaW5tZW1vcnknO1xuaW1wb3J0IHsgQXBvbGxvQ2xpZW50IH0gZnJvbSAnYXBvbGxvLWNsaWVudCc7XG5pbXBvcnQgeyBBcG9sbG9MaW5rLCBzcGxpdCB9IGZyb20gJ2Fwb2xsby1saW5rJztcbmltcG9ydCB7IEh0dHBMaW5rIH0gZnJvbSAnYXBvbGxvLWxpbmstaHR0cCc7XG5pbXBvcnQgeyBXZWJTb2NrZXRMaW5rIH0gZnJvbSAnYXBvbGxvLWxpbmstd3MnO1xuaW1wb3J0IHsgZ2V0TWFpbkRlZmluaXRpb24gfSBmcm9tICdhcG9sbG8tdXRpbGl0aWVzJztcbmltcG9ydCBncWwgZnJvbSAnZ3JhcGhxbC10YWcnO1xuaW1wb3J0IHsgU3Vic2NyaXB0aW9uQ2xpZW50IH0gZnJvbSAnc3Vic2NyaXB0aW9ucy10cmFuc3BvcnQtd3MnO1xuaW1wb3J0IHsgc2V0Q29udGV4dCB9IGZyb20gJ2Fwb2xsby1saW5rLWNvbnRleHQnO1xuaW1wb3J0IHtcbiAgICBGT1JNQVRfVEVYVF9NQVAsIFRhZ3MsIFNwYW4sIFNwYW5Db250ZXh0LFxufSBmcm9tICdvcGVudHJhY2luZyc7XG5pbXBvcnQgdHlwZSB7XG4gICAgVE9OUXVlcmllcyxcbiAgICBUT05RQ29sbGVjdGlvbixcbiAgICBTdWJzY3JpcHRpb24sXG4gICAgVE9OUXVlcnlQYXJhbXMsXG4gICAgVE9OU3Vic2NyaWJlUGFyYW1zLFxuICAgIFRPTldhaXRGb3JQYXJhbXMsXG4gICAgVE9OUXVlcnlBZ2dyZWdhdGVQYXJhbXMsXG59IGZyb20gJy4uLy4uL3R5cGVzJztcbmltcG9ydCB7IFRPTkNsaWVudCwgVE9OQ2xpZW50RXJyb3IsIFRPTkVycm9yQ29kZSB9IGZyb20gJy4uL1RPTkNsaWVudCc7XG5pbXBvcnQgdHlwZSB7IFRPTk1vZHVsZUNvbnRleHQgfSBmcm9tICcuLi9UT05Nb2R1bGUnO1xuaW1wb3J0IHsgVE9OTW9kdWxlIH0gZnJvbSAnLi4vVE9OTW9kdWxlJztcbmltcG9ydCBUT05Db25maWdNb2R1bGUsIHsgVVJMUGFydHMgfSBmcm9tICcuL1RPTkNvbmZpZ01vZHVsZSc7XG5cblxuZXhwb3J0IHR5cGUgUmVxdWVzdCA9IHtcbiAgICBpZDogc3RyaW5nLFxuICAgIGJvZHk6IHN0cmluZyxcbn1cblxuZXhwb3J0IHR5cGUgU2VydmVySW5mbyA9IHtcbiAgICB2ZXJzaW9uOiBudW1iZXIsXG4gICAgc3VwcG9ydHNPcGVyYXRpb25JZDogYm9vbGVhbixcbiAgICBzdXBwb3J0c0FnZ3JlZ2F0aW9uczogYm9vbGVhbixcbiAgICBzdXBwb3J0c1RpbWU6IGJvb2xlYW4sXG4gICAgdGltZURlbHRhOiA/bnVtYmVyLFxufTtcblxudHlwZSBHcmFwaFFMQ2xpZW50Q29uZmlnID0ge1xuICAgIGh0dHBVcmw6IHN0cmluZyxcbiAgICB3c1VybDogc3RyaW5nLFxuICAgIGZldGNoOiBhbnksXG4gICAgV2ViU29ja2V0OiBhbnksXG59O1xuXG4vLyBLZWVwLWFsaXZlIHRpbWVvdXQgdXNlZCB0byBzdXBwb3J0IGtlZXAtYWxpdmUgY29ubmVjdGlvbiBjaGVja2luZzpcbi8vIC0gRXZlcnkgMSBtaW51dGUgc2VydmVyIHNlbmRzIEdRTF9DT05ORUNUSU9OX0tFRVBfQUxJVkUgbWVzc2FnZS5cbi8vIC0gRXZlcnkgMiBtaW51dGVzIGNsaWVudCBjaGVja3MgdGhhdCBHUUxfQ09OTkVDVElPTl9LRUVQX0FMSVZFIG1lc3NhZ2Ugd2FzIHJlY2VpdmVkXG4vLyAgIHdpdGhpbiBsYXN0IDIgbWludXRlcy5cbi8vIC0gSWYgY2xpZW50IGhhZG4ndCByZWNlaXZlZCBrZWVwIGFsaXZlIG1lc3NhZ2UgZHVyaW5nIGxhc3QgMiBtaW51dGVzXG4vLyAgIGl0IGNsb3NlcyBjb25uZWN0aW9uIGFuZCBnb2VzIHRvIHJlY29ubmVjdC5cbmNvbnN0IEtFRVBfQUxJVkVfVElNRU9VVCA9IDIgKiA2MDAwMDtcblxuZXhwb3J0IGNvbnN0IE1BWF9USU1FT1VUID0gMjE0NzQ4MzY0NztcblxuZnVuY3Rpb24gcmVzb2x2ZVBhcmFtczxUPihhcmdzOiBhbnlbXSwgcmVxdWlyZWRQYXJhbU5hbWU6IHN0cmluZywgcmVzb2x2ZUFyZ3M6ICgpID0+IFQpOiBUIHtcbiAgICByZXR1cm4gKGFyZ3MubGVuZ3RoID09PSAxKSAmJiAocmVxdWlyZWRQYXJhbU5hbWUgaW4gYXJnc1swXSkgPyBhcmdzWzBdIDogcmVzb2x2ZUFyZ3MoKTtcbn1cblxudHlwZSBNdWx0aWNhc3RMaXN0ZW5lcjxWYWx1ZT4gPSB7XG4gICAgcmVzb2x2ZTogKHZhbHVlOiBWYWx1ZSkgPT4gdm9pZDtcbiAgICByZWplY3Q6IChlcnJvcjogRXJyb3IpID0+IHZvaWQ7XG59O1xuXG5jbGFzcyBNdWx0aWNhc3RQcm9taXNlPFZhbHVlPiB7XG4gICAgbGlzdGVuZXJzOiBNdWx0aWNhc3RMaXN0ZW5lcjxWYWx1ZT5bXTtcbiAgICBvbkNvbXBsZXRlOiA/KCgpID0+IHZvaWQpO1xuXG4gICAgY29uc3RydWN0b3IoKSB7XG4gICAgICAgIHRoaXMubGlzdGVuZXJzID0gW107XG4gICAgICAgIHRoaXMub25Db21wbGV0ZSA9IG51bGw7XG4gICAgfVxuXG4gICAgbGlzdGVuKCk6IFByb21pc2U8VmFsdWU+IHtcbiAgICAgICAgY29uc3QgbGlzdGVuZXI6IE11bHRpY2FzdExpc3RlbmVyPFZhbHVlPiA9IHtcbiAgICAgICAgICAgIHJlc29sdmU6ICgpID0+IHtcbiAgICAgICAgICAgIH0sXG4gICAgICAgICAgICByZWplY3Q6ICgpID0+IHtcbiAgICAgICAgICAgIH0sXG4gICAgICAgIH07XG4gICAgICAgIHRoaXMubGlzdGVuZXJzLnB1c2gobGlzdGVuZXIpO1xuICAgICAgICByZXR1cm4gbmV3IFByb21pc2UoKHJlc29sdmUsIHJlamVjdCkgPT4ge1xuICAgICAgICAgICAgbGlzdGVuZXIucmVzb2x2ZSA9IHJlc29sdmU7XG4gICAgICAgICAgICBsaXN0ZW5lci5yZWplY3QgPSByZWplY3Q7XG4gICAgICAgIH0pO1xuICAgIH1cblxuICAgIHJlc29sdmUodmFsdWU6IFZhbHVlKSB7XG4gICAgICAgIHRoaXMuY29tcGxldGUobGlzdGVuZXIgPT4gbGlzdGVuZXIucmVzb2x2ZSh2YWx1ZSkpO1xuICAgIH1cblxuICAgIHJlamVjdChlcnJvcjogRXJyb3IpIHtcbiAgICAgICAgdGhpcy5jb21wbGV0ZShsaXN0ZW5lciA9PiBsaXN0ZW5lci5yZWplY3QoZXJyb3IpKTtcbiAgICB9XG5cbiAgICBjb21wbGV0ZShjb21wbGV0ZUxpc3RlbmVyOiAobGlzdGVuZXI6IE11bHRpY2FzdExpc3RlbmVyPFZhbHVlPikgPT4gdm9pZCkge1xuICAgICAgICBjb25zdCB7IGxpc3RlbmVycyB9ID0gdGhpcztcbiAgICAgICAgdGhpcy5saXN0ZW5lcnMgPSBbXTtcbiAgICAgICAgaWYgKHRoaXMub25Db21wbGV0ZSkge1xuICAgICAgICAgICAgdGhpcy5vbkNvbXBsZXRlKCk7XG4gICAgICAgIH1cbiAgICAgICAgbGlzdGVuZXJzLmZvckVhY2gobGlzdGVuZXIgPT4gY29tcGxldGVMaXN0ZW5lcihsaXN0ZW5lcikpO1xuICAgIH1cbn1cblxuZnVuY3Rpb24gdmVyc2lvblRvTnVtYmVyKHM6IHN0cmluZyk6IG51bWJlciB7XG4gICAgY29uc3QgcGFydHMgPSBgJHtzIHx8ICcnfWAuc3BsaXQoJy4nKVxuICAgICAgICAubWFwKHggPT4gTnVtYmVyKHgpKVxuICAgICAgICAuc2xpY2UoMCwgMyk7XG4gICAgd2hpbGUgKHBhcnRzLmxlbmd0aCA8IDMpIHtcbiAgICAgICAgcGFydHMucHVzaCgwKTtcbiAgICB9XG4gICAgcmV0dXJuIHBhcnRzWzBdICogMTAwMDAwMCArIHBhcnRzWzFdICogMTAwMCArIHBhcnRzWzJdO1xufVxuXG5mdW5jdGlvbiByZXNvbHZlU2VydmVySW5mbyh2ZXJzaW9uU3RyaW5nOiBzdHJpbmcgfCBudWxsIHwgdHlwZW9mIHVuZGVmaW5lZCk6IFNlcnZlckluZm8ge1xuICAgIGNvbnN0IHZlcnNpb24gPSB2ZXJzaW9uVG9OdW1iZXIodmVyc2lvblN0cmluZyB8fCAnMC4yNC40Jyk7XG4gICAgcmV0dXJuIHtcbiAgICAgICAgdmVyc2lvbixcbiAgICAgICAgc3VwcG9ydHNPcGVyYXRpb25JZDogdmVyc2lvbiA+IDI0MDA0LFxuICAgICAgICBzdXBwb3J0c0FnZ3JlZ2F0aW9uczogdmVyc2lvbiA+PSAyNTAwMCxcbiAgICAgICAgc3VwcG9ydHNUaW1lOiB2ZXJzaW9uID49IDI2MDAzLFxuICAgICAgICB0aW1lRGVsdGE6IG51bGwsXG4gICAgfTtcbn1cblxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgVE9OUXVlcmllc01vZHVsZSBleHRlbmRzIFRPTk1vZHVsZSBpbXBsZW1lbnRzIFRPTlF1ZXJpZXMge1xuICAgIHRyYW5zYWN0aW9uczogVE9OUUNvbGxlY3Rpb247XG4gICAgbWVzc2FnZXM6IFRPTlFDb2xsZWN0aW9uO1xuICAgIGJsb2NrczogVE9OUUNvbGxlY3Rpb247XG4gICAgYWNjb3VudHM6IFRPTlFDb2xsZWN0aW9uO1xuICAgIGJsb2Nrc19zaWduYXR1cmVzOiBUT05RQ29sbGVjdGlvbjtcblxuICAgIGNvbmZpZzogVE9OQ29uZmlnTW9kdWxlO1xuXG4gICAgZ3JhcGhxbENsaWVudENyZWF0aW9uOiA/TXVsdGljYXN0UHJvbWlzZTxBcG9sbG9DbGllbnQ+O1xuICAgIGdyYXBocWxDbGllbnQ6ID9BcG9sbG9DbGllbnQ7XG4gICAgZ3JhcGhxbENsaWVudENvbmZpZzogP0dyYXBoUUxDbGllbnRDb25maWc7XG5cbiAgICBvdmVycmlkZVdzVXJsOiA/c3RyaW5nO1xuICAgIG9wZXJhdGlvbklkUHJlZml4OiBzdHJpbmc7XG4gICAgb3BlcmF0aW9uSWRTdWZmaXg6IG51bWJlcjtcbiAgICBzZXJ2ZXJJbmZvOiBTZXJ2ZXJJbmZvO1xuXG4gICAgY29uc3RydWN0b3IoY29udGV4dDogVE9OTW9kdWxlQ29udGV4dCkge1xuICAgICAgICBzdXBlcihjb250ZXh0KTtcbiAgICAgICAgdGhpcy5ncmFwaHFsQ2xpZW50ID0gbnVsbDtcbiAgICAgICAgdGhpcy5ncmFwaHFsQ2xpZW50Q3JlYXRpb24gPSBudWxsO1xuICAgICAgICB0aGlzLmdyYXBocWxDbGllbnRDb25maWcgPSBudWxsO1xuICAgICAgICB0aGlzLm92ZXJyaWRlV3NVcmwgPSBudWxsO1xuICAgICAgICB0aGlzLm9wZXJhdGlvbklkUHJlZml4ID0gKERhdGUubm93KCkgJSA2MDAwMCkudG9TdHJpbmcoMTYpO1xuICAgICAgICBmb3IgKGxldCBpID0gMDsgaSA8IDEwOyBpICs9IDEpIHtcbiAgICAgICAgICAgIHRoaXMub3BlcmF0aW9uSWRQcmVmaXggPVxuICAgICAgICAgICAgICAgIGAke3RoaXMub3BlcmF0aW9uSWRQcmVmaXh9JHtNYXRoLnJvdW5kKE1hdGgucmFuZG9tKCkgKiAyNTYpXG4gICAgICAgICAgICAgICAgICAgIC50b1N0cmluZygxNil9YDtcbiAgICAgICAgfVxuICAgICAgICB0aGlzLm9wZXJhdGlvbklkU3VmZml4ID0gMTtcbiAgICAgICAgdGhpcy5zZXJ2ZXJJbmZvID0gcmVzb2x2ZVNlcnZlckluZm8oKTtcbiAgICB9XG5cbiAgICBhc3luYyBzZXR1cCgpIHtcbiAgICAgICAgdGhpcy5jb25maWcgPSB0aGlzLmNvbnRleHQuZ2V0TW9kdWxlKFRPTkNvbmZpZ01vZHVsZSk7XG4gICAgICAgIHRoaXMudHJhbnNhY3Rpb25zID0gbmV3IFRPTlF1ZXJpZXNNb2R1bGVDb2xsZWN0aW9uKHRoaXMsICd0cmFuc2FjdGlvbnMnLCAnVHJhbnNhY3Rpb24nKTtcbiAgICAgICAgdGhpcy5tZXNzYWdlcyA9IG5ldyBUT05RdWVyaWVzTW9kdWxlQ29sbGVjdGlvbih0aGlzLCAnbWVzc2FnZXMnLCAnTWVzc2FnZScpO1xuICAgICAgICB0aGlzLmJsb2NrcyA9IG5ldyBUT05RdWVyaWVzTW9kdWxlQ29sbGVjdGlvbih0aGlzLCAnYmxvY2tzJywgJ0Jsb2NrJyk7XG4gICAgICAgIHRoaXMuYWNjb3VudHMgPSBuZXcgVE9OUXVlcmllc01vZHVsZUNvbGxlY3Rpb24odGhpcywgJ2FjY291bnRzJywgJ0FjY291bnQnKTtcbiAgICAgICAgdGhpcy5ibG9ja3Nfc2lnbmF0dXJlcyA9IG5ldyBUT05RdWVyaWVzTW9kdWxlQ29sbGVjdGlvbih0aGlzLCAnYmxvY2tzX3NpZ25hdHVyZXMnLCAnQmxvY2tTaWduYXR1cmVzJyk7XG4gICAgfVxuXG4gICAgYXN5bmMgZGV0ZWN0UmVkaXJlY3QoZmV0Y2g6IGFueSwgc291cmNlVXJsOiBzdHJpbmcpOiBQcm9taXNlPHN0cmluZz4ge1xuICAgICAgICBjb25zdCByZXNwb25zZSA9IGF3YWl0IGZldGNoKHNvdXJjZVVybCk7XG4gICAgICAgIHRyeSB7XG4gICAgICAgICAgICBjb25zdCByZXNwb25zZVRleHQgPSBhd2FpdCByZXNwb25zZS50ZXh0KCk7XG4gICAgICAgICAgICBjb25zdCByZXNwb25zZUpzb24gPSBKU09OLnBhcnNlKHJlc3BvbnNlVGV4dCk7XG4gICAgICAgICAgICB0aGlzLnNlcnZlckluZm8gPSByZXNvbHZlU2VydmVySW5mbyhyZXNwb25zZUpzb24uZGF0YS5pbmZvLnZlcnNpb24pO1xuICAgICAgICB9IGNhdGNoIHtcbiAgICAgICAgfVxuICAgICAgICBpZiAocmVzcG9uc2UucmVkaXJlY3RlZCA9PT0gdHJ1ZSkge1xuICAgICAgICAgICAgcmV0dXJuIHJlc3BvbnNlLnVybDtcbiAgICAgICAgfVxuICAgICAgICBpZiAocmVzcG9uc2UucmVkaXJlY3RlZCA9PT0gZmFsc2UpIHtcbiAgICAgICAgICAgIHJldHVybiAnJztcbiAgICAgICAgfVxuICAgICAgICBjb25zdCBzb3VyY2VMb2NhdGlvbiA9IFVSTFBhcnRzLnBhcnNlKHNvdXJjZVVybClcbiAgICAgICAgICAgIC5maXhRdWVyeShfID0+ICcnKVxuICAgICAgICAgICAgLnRvU3RyaW5nKClcbiAgICAgICAgICAgIC50b0xvd2VyQ2FzZSgpO1xuICAgICAgICBjb25zdCByZXNwb25zZUxvY2F0aW9uID0gVVJMUGFydHMucGFyc2UocmVzcG9uc2UudXJsKVxuICAgICAgICAgICAgLmZpeFF1ZXJ5KF8gPT4gJycpXG4gICAgICAgICAgICAudG9TdHJpbmcoKVxuICAgICAgICAgICAgLnRvTG93ZXJDYXNlKCk7XG4gICAgICAgIHJldHVybiByZXNwb25zZUxvY2F0aW9uICE9PSBzb3VyY2VMb2NhdGlvbiA/IHJlc3BvbnNlLnVybCA6ICcnO1xuICAgIH1cblxuICAgIGFzeW5jIGdldENsaWVudENvbmZpZygpOiBQcm9taXNlPEdyYXBoUUxDbGllbnRDb25maWc+IHtcbiAgICAgICAgY29uc3QgY29uZmlnID0gdGhpcy5jb25maWc7XG4gICAgICAgIGNvbnN0IGNsaWVudFBsYXRmb3JtID0gVE9OQ2xpZW50LmNsaWVudFBsYXRmb3JtO1xuICAgICAgICBpZiAoIWNsaWVudFBsYXRmb3JtKSB7XG4gICAgICAgICAgICB0aHJvdyBFcnJvcignVE9OIENsaWVudCBkb2VzIG5vdCBjb25maWd1cmVkJyk7XG4gICAgICAgIH1cbiAgICAgICAgY29uc3QgZmV0Y2ggPSBjbGllbnRQbGF0Zm9ybS5mZXRjaDtcblxuICAgICAgICBmdW5jdGlvbiBnZXRDb25maWdGb3JTZXJ2ZXIoc2VydmVyOiBzdHJpbmcpOiBHcmFwaFFMQ2xpZW50Q29uZmlnIHtcbiAgICAgICAgICAgIGNvbnN0IGh0dHBQYXJ0cyA9IFVSTFBhcnRzLnBhcnNlKHNlcnZlcilcbiAgICAgICAgICAgICAgICAuZml4UHJvdG9jb2woeCA9PiAoeCA9PT0gJ2h0dHA6Ly8nID8geCA6ICdodHRwczovLycpKVxuICAgICAgICAgICAgICAgIC5maXhQYXRoKHggPT4gYCR7eH0vZ3JhcGhxbGApO1xuICAgICAgICAgICAgY29uc3QgaHR0cCA9IGh0dHBQYXJ0cy50b1N0cmluZygpO1xuICAgICAgICAgICAgY29uc3Qgd3MgPSBodHRwUGFydHNcbiAgICAgICAgICAgICAgICAuZml4UHJvdG9jb2woeCA9PiAoeCA9PT0gJ2h0dHA6Ly8nID8gJ3dzOi8vJyA6ICd3c3M6Ly8nKSlcbiAgICAgICAgICAgICAgICAudG9TdHJpbmcoKTtcbiAgICAgICAgICAgIHJldHVybiB7XG4gICAgICAgICAgICAgICAgaHR0cFVybDogaHR0cCxcbiAgICAgICAgICAgICAgICB3c1VybDogd3MsXG4gICAgICAgICAgICAgICAgZmV0Y2g6IGNsaWVudFBsYXRmb3JtLmZldGNoLFxuICAgICAgICAgICAgICAgIFdlYlNvY2tldDogY2xpZW50UGxhdGZvcm0uV2ViU29ja2V0LFxuICAgICAgICAgICAgfTtcbiAgICAgICAgfVxuXG4gICAgICAgIGZvciAoY29uc3Qgc2VydmVyIG9mIGNvbmZpZy5kYXRhLnNlcnZlcnMpIHtcbiAgICAgICAgICAgIGNvbnN0IGNsaWVudENvbmZpZyA9IGdldENvbmZpZ0ZvclNlcnZlcihzZXJ2ZXIpO1xuICAgICAgICAgICAgdHJ5IHtcbiAgICAgICAgICAgICAgICAvLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgbm8tYXdhaXQtaW4tbG9vcFxuICAgICAgICAgICAgICAgIGNvbnN0IHJlZGlyZWN0ZWQgPSBhd2FpdCB0aGlzLmRldGVjdFJlZGlyZWN0KFxuICAgICAgICAgICAgICAgICAgICBmZXRjaCxcbiAgICAgICAgICAgICAgICAgICAgYCR7Y2xpZW50Q29uZmlnLmh0dHBVcmx9P3F1ZXJ5PSU3QmluZm8lN0J2ZXJzaW9uJTdEJTdEYCxcbiAgICAgICAgICAgICAgICApO1xuICAgICAgICAgICAgICAgIGlmIChyZWRpcmVjdGVkICE9PSAnJykge1xuICAgICAgICAgICAgICAgICAgICBjb25zdCBodHRwUGFydHMgPSBVUkxQYXJ0cy5wYXJzZShyZWRpcmVjdGVkKVxuICAgICAgICAgICAgICAgICAgICAgICAgLmZpeFF1ZXJ5KF8gPT4gJycpO1xuICAgICAgICAgICAgICAgICAgICBjbGllbnRDb25maWcuaHR0cFVybCA9IGh0dHBQYXJ0cy50b1N0cmluZygpO1xuICAgICAgICAgICAgICAgICAgICBjbGllbnRDb25maWcud3NVcmwgPSBodHRwUGFydHNcbiAgICAgICAgICAgICAgICAgICAgICAgIC5maXhQcm90b2NvbCh4ID0+ICh4ID09PSAnaHR0cDovLycgPyAnd3M6Ly8nIDogJ3dzczovLycpKVxuICAgICAgICAgICAgICAgICAgICAgICAgLnRvU3RyaW5nKCk7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIHJldHVybiBjbGllbnRDb25maWc7XG4gICAgICAgICAgICB9IGNhdGNoIChlcnJvcikge1xuICAgICAgICAgICAgICAgIGNvbnNvbGUubG9nKGBbZ2V0Q2xpZW50Q29uZmlnXSBmb3Igc2VydmVyIFwiJHtzZXJ2ZXJ9XCIgZmFpbGVkYCwge1xuICAgICAgICAgICAgICAgICAgICBjbGllbnRDb25maWc6IHtcbiAgICAgICAgICAgICAgICAgICAgICAgIGh0dHBVcmw6IGNsaWVudENvbmZpZy5odHRwVXJsLFxuICAgICAgICAgICAgICAgICAgICAgICAgd3NVcmw6IGNsaWVudENvbmZpZy53c1VybCxcbiAgICAgICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICAgICAgZXJyb3JTdHJpbmc6IGVycm9yLnRvU3RyaW5nKCksXG4gICAgICAgICAgICAgICAgICAgIGVycm9yLFxuICAgICAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICAgIHJldHVybiBnZXRDb25maWdGb3JTZXJ2ZXIoY29uZmlnLmRhdGEuc2VydmVyc1swXSk7XG4gICAgfVxuXG4gICAgYXN5bmMgZ2V0U2VydmVySW5mbyhzcGFuPzogU3BhbiB8IFNwYW5Db250ZXh0KTogUHJvbWlzZTxTZXJ2ZXJJbmZvPiB7XG4gICAgICAgIGF3YWl0IHRoaXMuZ3JhcGhxbENsaWVudFJlcXVpcmVkKHNwYW4pO1xuICAgICAgICByZXR1cm4gdGhpcy5zZXJ2ZXJJbmZvO1xuICAgIH1cblxuICAgIGFzeW5jIHNlcnZlclRpbWVEZWx0YShzcGFuPzogU3BhbiB8IFNwYW5Db250ZXh0KTogUHJvbWlzZTxudW1iZXI+IHtcbiAgICAgICAgY29uc3Qgc2VydmVySW5mbyA9IGF3YWl0IHRoaXMuZ2V0U2VydmVySW5mbyhzcGFuKTtcbiAgICAgICAgY29uc3QgY2xpZW50Q29uZmlnID0gdGhpcy5ncmFwaHFsQ2xpZW50Q29uZmlnO1xuICAgICAgICBpZiAoY2xpZW50Q29uZmlnICYmIHNlcnZlckluZm8uc3VwcG9ydHNUaW1lICYmIHNlcnZlckluZm8udGltZURlbHRhID09PSBudWxsKSB7XG4gICAgICAgICAgICB0cnkge1xuICAgICAgICAgICAgICAgIGNvbnN0IHN0YXJ0ID0gRGF0ZS5ub3coKTtcbiAgICAgICAgICAgICAgICBjb25zdCByZXNwb25zZSA9IGF3YWl0IGNsaWVudENvbmZpZy5mZXRjaChgJHtjbGllbnRDb25maWcuaHR0cFVybH0/cXVlcnk9JTdCaW5mbyU3QnRpbWUlN0QlN0RgKTtcbiAgICAgICAgICAgICAgICBjb25zdCBlbmQgPSBEYXRlLm5vdygpO1xuICAgICAgICAgICAgICAgIGNvbnN0IHJlc3BvbnNlRGF0YSA9IGF3YWl0IHJlc3BvbnNlLmpzb24oKTtcbiAgICAgICAgICAgICAgICBjb25zdCBzZXJ2ZXJUaW1lID0gcmVzcG9uc2VEYXRhLmRhdGEuaW5mby50aW1lO1xuICAgICAgICAgICAgICAgIHNlcnZlckluZm8udGltZURlbHRhID0gTWF0aC5yb3VuZChzZXJ2ZXJUaW1lIC0gKHN0YXJ0ICsgKGVuZCAtIHN0YXJ0KSAvIDIpKTtcbiAgICAgICAgICAgIH0gY2F0Y2ggKGVycm9yKSB7XG4gICAgICAgICAgICAgICAgY29uc29sZS5sb2coJz4+PicsIGVycm9yKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgICByZXR1cm4gc2VydmVySW5mby50aW1lRGVsdGEgfHwgMDtcbiAgICB9XG5cbiAgICBhc3luYyBzZXJ2ZXJOb3coc3Bhbj86IFNwYW4gfCBTcGFuQ29udGV4dCk6IFByb21pc2U8bnVtYmVyPiB7XG4gICAgICAgIGNvbnN0IHRpbWVEZWx0YSA9IGF3YWl0IHRoaXMuc2VydmVyVGltZURlbHRhKHNwYW4pO1xuICAgICAgICByZXR1cm4gRGF0ZS5ub3coKSArIHRpbWVEZWx0YTtcbiAgICB9XG5cbiAgICBkcm9wU2VydmVyVGltZURlbHRhKCkge1xuICAgICAgICBpZiAodGhpcy5zZXJ2ZXJJbmZvKSB7XG4gICAgICAgICAgICB0aGlzLnNlcnZlckluZm8udGltZURlbHRhID0gbnVsbDtcbiAgICAgICAgfVxuICAgIH1cblxuICAgIGdlbmVyYXRlT3BlcmF0aW9uSWQoKTogc3RyaW5nIHtcbiAgICAgICAgdGhpcy5vcGVyYXRpb25JZFN1ZmZpeCArPSAxO1xuICAgICAgICByZXR1cm4gYCR7dGhpcy5vcGVyYXRpb25JZFByZWZpeH0ke3RoaXMub3BlcmF0aW9uSWRTdWZmaXgudG9TdHJpbmcoMTYpfWA7XG4gICAgfVxuXG4gICAgYXN5bmMgZmluaXNoT3BlcmF0aW9ucyhvcGVyYXRpb25JZHM6IHN0cmluZ1tdKSB7XG4gICAgICAgIGlmIChvcGVyYXRpb25JZHMubGVuZ3RoID09PSAwKSB7XG4gICAgICAgICAgICByZXR1cm47XG4gICAgICAgIH1cbiAgICAgICAgaWYgKCEoYXdhaXQgdGhpcy5nZXRTZXJ2ZXJJbmZvKCkpLnN1cHBvcnRzT3BlcmF0aW9uSWQpIHtcbiAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgfVxuICAgICAgICBhd2FpdCB0aGlzLmdyYXBocWxNdXRhdGlvbihgbXV0YXRpb24gZmluaXNoT3BlcmF0aW9ucygkb3BlcmF0aW9uSWRzOiBbU3RyaW5nXSkge1xuICAgICAgICAgICAgICAgIGZpbmlzaE9wZXJhdGlvbnMob3BlcmF0aW9uSWRzOiAkb3BlcmF0aW9uSWRzKVxuICAgICAgICAgICAgfWAsIHtcbiAgICAgICAgICAgIG9wZXJhdGlvbklkcyxcbiAgICAgICAgfSk7XG4gICAgfVxuXG4gICAgYXN5bmMgZ2V0QWNjb3VudHNDb3VudChwYXJlbnRTcGFuPzogKFNwYW4gfCBTcGFuQ29udGV4dCkpOiBQcm9taXNlPG51bWJlcj4ge1xuICAgICAgICBjb25zdCByZXN1bHQgPSBhd2FpdCB0aGlzLnF1ZXJ5KCdxdWVyeXtnZXRBY2NvdW50c0NvdW50fScsIHVuZGVmaW5lZCwgcGFyZW50U3Bhbik7XG4gICAgICAgIHJldHVybiByZXN1bHQuZGF0YS5nZXRBY2NvdW50c0NvdW50O1xuICAgIH1cblxuICAgIGFzeW5jIGdldFRyYW5zYWN0aW9uc0NvdW50KHBhcmVudFNwYW4/OiAoU3BhbiB8IFNwYW5Db250ZXh0KSk6IFByb21pc2U8bnVtYmVyPiB7XG4gICAgICAgIGNvbnN0IHJlc3VsdCA9IGF3YWl0IHRoaXMucXVlcnkoJ3F1ZXJ5e2dldFRyYW5zYWN0aW9uc0NvdW50fScsIHVuZGVmaW5lZCwgcGFyZW50U3Bhbik7XG4gICAgICAgIHJldHVybiByZXN1bHQuZGF0YS5nZXRUcmFuc2FjdGlvbnNDb3VudDtcbiAgICB9XG5cbiAgICBhc3luYyBnZXRBY2NvdW50c1RvdGFsQmFsYW5jZShwYXJlbnRTcGFuPzogKFNwYW4gfCBTcGFuQ29udGV4dCkpOiBQcm9taXNlPHN0cmluZz4ge1xuICAgICAgICBjb25zdCByZXN1bHQgPSBhd2FpdCB0aGlzLnF1ZXJ5KCdxdWVyeXtnZXRBY2NvdW50c1RvdGFsQmFsYW5jZX0nLCB1bmRlZmluZWQsIHBhcmVudFNwYW4pO1xuICAgICAgICByZXR1cm4gcmVzdWx0LmRhdGEuZ2V0QWNjb3VudHNUb3RhbEJhbGFuY2U7XG4gICAgfVxuXG4gICAgYXN5bmMgcG9zdFJlcXVlc3RzKHJlcXVlc3RzOiBSZXF1ZXN0W10sIHBhcmVudFNwYW4/OiAoU3BhbiB8IFNwYW5Db250ZXh0KSk6IFByb21pc2U8YW55PiB7XG4gICAgICAgIHJldHVybiB0aGlzLmNvbnRleHQudHJhY2UoJ3F1ZXJpZXMucG9zdFJlcXVlc3RzJywgYXN5bmMgKHNwYW4pID0+IHtcbiAgICAgICAgICAgIHJldHVybiB0aGlzLmdyYXBocWxNdXRhdGlvbihgbXV0YXRpb24gcG9zdFJlcXVlc3RzKCRyZXF1ZXN0czogW1JlcXVlc3RdKSB7XG4gICAgICAgICAgICAgICAgcG9zdFJlcXVlc3RzKHJlcXVlc3RzOiAkcmVxdWVzdHMpXG4gICAgICAgICAgICB9YCwge1xuICAgICAgICAgICAgICAgIHJlcXVlc3RzLFxuICAgICAgICAgICAgfSwgc3Bhbik7XG4gICAgICAgIH0sIHBhcmVudFNwYW4pO1xuICAgIH1cblxuICAgIGFzeW5jIG11dGF0aW9uKFxuICAgICAgICBxbDogc3RyaW5nLFxuICAgICAgICB2YXJpYWJsZXM6IHsgW3N0cmluZ106IGFueSB9ID0ge30sXG4gICAgICAgIHBhcmVudFNwYW4/OiAoU3BhbiB8IFNwYW5Db250ZXh0KSxcbiAgICApOiBQcm9taXNlPGFueT4ge1xuICAgICAgICByZXR1cm4gdGhpcy5jb250ZXh0LnRyYWNlKCdxdWVyaWVzLm11dGF0aW9uJywgYXN5bmMgKHNwYW46IFNwYW4pID0+IHtcbiAgICAgICAgICAgIHNwYW4uc2V0VGFnKCdwYXJhbXMnLCB7XG4gICAgICAgICAgICAgICAgbXV0YXRpb246IHFsLFxuICAgICAgICAgICAgICAgIHZhcmlhYmxlcyxcbiAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgcmV0dXJuIHRoaXMuZ3JhcGhxbE11dGF0aW9uKHFsLCB2YXJpYWJsZXMsIHNwYW4pO1xuICAgICAgICB9LCBwYXJlbnRTcGFuKTtcbiAgICB9XG5cbiAgICBhc3luYyBxdWVyeShcbiAgICAgICAgcWw6IHN0cmluZyxcbiAgICAgICAgdmFyaWFibGVzOiB7IFtzdHJpbmddOiBhbnkgfSA9IHt9LFxuICAgICAgICBwYXJlbnRTcGFuPzogKFNwYW4gfCBTcGFuQ29udGV4dCksXG4gICAgICAgIHRpbWVvdXQ/OiBudW1iZXIsXG4gICAgKTogUHJvbWlzZTxhbnk+IHtcbiAgICAgICAgcmV0dXJuIHRoaXMuY29udGV4dC50cmFjZSgncXVlcmllcy5xdWVyeScsIGFzeW5jIChzcGFuOiBTcGFuKSA9PiB7XG4gICAgICAgICAgICBzcGFuLnNldFRhZygncGFyYW1zJywge1xuICAgICAgICAgICAgICAgIHF1ZXJ5OiBxbCxcbiAgICAgICAgICAgICAgICB2YXJpYWJsZXMsXG4gICAgICAgICAgICB9KTtcbiAgICAgICAgICAgIHJldHVybiB0aGlzLmdyYXBocWxRdWVyeShxbCwgdmFyaWFibGVzLCBzcGFuLCB0aW1lb3V0KTtcbiAgICAgICAgfSwgcGFyZW50U3Bhbik7XG4gICAgfVxuXG4gICAgYXN5bmMgZ3JhcGhxbE11dGF0aW9uKHFsOiBzdHJpbmcsIHZhcmlhYmxlczogeyBbc3RyaW5nXTogYW55IH0gPSB7fSwgc3BhbjogU3Bhbik6IFByb21pc2U8YW55PiB7XG4gICAgICAgIGNvbnN0IG11dGF0aW9uID0gZ3FsKFtxbF0pO1xuICAgICAgICByZXR1cm4gdGhpcy5ncmFwaFFsKChjbGllbnQpID0+IGNsaWVudC5tdXRhdGUoe1xuICAgICAgICAgICAgbXV0YXRpb24sXG4gICAgICAgICAgICB2YXJpYWJsZXMsXG4gICAgICAgICAgICBjb250ZXh0OiB7XG4gICAgICAgICAgICAgICAgdHJhY2VTcGFuOiBzcGFuLFxuICAgICAgICAgICAgfSxcbiAgICAgICAgfSkpO1xuICAgIH1cblxuICAgIHN0YXRpYyBpc05ldHdvcmtFcnJvcihlcnJvcjogYW55KTogYm9vbGVhbiB7XG4gICAgICAgIGlmIChlcnJvci5jb2RlID09PSBUT05FcnJvckNvZGUuUkVRVUVTVF9GT1JDSUJMWV9URVJNSU5BVEVEKSB7XG4gICAgICAgICAgICByZXR1cm4gdHJ1ZTtcbiAgICAgICAgfVxuICAgICAgICBjb25zdCBuZXR3b3JrRXJyb3IgPSBlcnJvci5uZXR3b3JrRXJyb3I7XG4gICAgICAgIGlmICghbmV0d29ya0Vycm9yKSB7XG4gICAgICAgICAgICByZXR1cm4gZmFsc2U7XG4gICAgICAgIH1cbiAgICAgICAgaWYgKCdlcnJubycgaW4gbmV0d29ya0Vycm9yKSB7XG4gICAgICAgICAgICByZXR1cm4gdHJ1ZTtcbiAgICAgICAgfVxuICAgICAgICByZXR1cm4gISgncmVzcG9uc2UnIGluIG5ldHdvcmtFcnJvciB8fCAncmVzdWx0JyBpbiBuZXR3b3JrRXJyb3IpO1xuICAgIH1cblxuICAgIGFzeW5jIGdyYXBocWxRdWVyeShcbiAgICAgICAgcWw6IHN0cmluZyxcbiAgICAgICAgdmFyaWFibGVzOiB7IFtzdHJpbmddOiBhbnkgfSA9IHt9LFxuICAgICAgICBzcGFuOiBTcGFuLFxuICAgICAgICB0aW1lb3V0PzogbnVtYmVyLFxuICAgICk6IFByb21pc2U8YW55PiB7XG4gICAgICAgIGNvbnN0IHF1ZXJ5ID0gZ3FsKFtxbF0pO1xuICAgICAgICBsZXQgbmV4dFRpbWVvdXQgPSAxMDA7XG4gICAgICAgIGNvbnN0IHN0YXJ0VGltZSA9IERhdGUubm93KCk7XG4gICAgICAgIGxldCBmb3JjZVRlcm1pbmF0ZUV4dHJhVGltZW91dCA9IDUwMDA7XG4gICAgICAgIGNvbnN0IGZvcmNlVGVybWluYXRlVGltZW91dCA9IHRpbWVvdXQgfHwgdGhpcy5jb25maWcud2FpdEZvclRpbWVvdXQoKTtcbiAgICAgICAgd2hpbGUgKHRydWUpIHtcbiAgICAgICAgICAgIHRyeSB7XG4gICAgICAgICAgICAgICAgY29uc3QgY2xpZW50ID0gYXdhaXQgdGhpcy5ncmFwaHFsQ2xpZW50UmVxdWlyZWQoc3Bhbik7XG4gICAgICAgICAgICAgICAgY29uc3QgYWJvcnRDb250cm9sbGVyID0gQWJvcnRDb250cm9sbGVyID8gbmV3IEFib3J0Q29udHJvbGxlcigpIDogbnVsbDtcbiAgICAgICAgICAgICAgICBjb25zdCBwcm9taXNlczogUHJvbWlzZTxhbnk+W10gPSBbY2xpZW50LnF1ZXJ5KHtcbiAgICAgICAgICAgICAgICAgICAgcXVlcnksXG4gICAgICAgICAgICAgICAgICAgIHZhcmlhYmxlcyxcbiAgICAgICAgICAgICAgICAgICAgY29udGV4dDoge1xuICAgICAgICAgICAgICAgICAgICAgICAgdHJhY2VTcGFuOiBzcGFuLFxuICAgICAgICAgICAgICAgICAgICAgICAgZmV0Y2hPcHRpb25zOiB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgc2lnbmFsOiBhYm9ydENvbnRyb2xsZXIuc2lnbmFsLFxuICAgICAgICAgICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICAgICAgZmV0Y2hQb2xpY3k6ICdzdGFuZGJ5JyxcbiAgICAgICAgICAgICAgICB9KV07XG4gICAgICAgICAgICAgICAgaWYgKHRpbWVvdXQpIHtcbiAgICAgICAgICAgICAgICAgICAgcHJvbWlzZXMucHVzaChuZXcgUHJvbWlzZSgocmVzb2x2ZSwgcmVqZWN0KSA9PiB7XG4gICAgICAgICAgICAgICAgICAgICAgICBzZXRUaW1lb3V0KFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICgpID0+IHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgYWJvcnRDb250cm9sbGVyPy5hYm9ydCgpO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICByZWplY3QoVE9OQ2xpZW50RXJyb3IucmVxdWVzdEZvcmNpYmx5VGVybWluYXRlZCgpKTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGZvcmNlVGVybWluYXRlVGltZW91dCArIGZvcmNlVGVybWluYXRlRXh0cmFUaW1lb3V0LFxuICAgICAgICAgICAgICAgICAgICAgICAgKTtcbiAgICAgICAgICAgICAgICAgICAgfSkpO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICByZXR1cm4gYXdhaXQgUHJvbWlzZS5yYWNlKHByb21pc2VzKTtcbiAgICAgICAgICAgIH0gY2F0Y2ggKGVycm9yKSB7XG4gICAgICAgICAgICAgICAgbGV0IHJlc29sdmVkRXJyb3IgPSB0aGlzLnJlc29sdmVHcmFwaFFMRXJyb3IoZXJyb3IpO1xuICAgICAgICAgICAgICAgIGlmIChUT05RdWVyaWVzTW9kdWxlLmlzTmV0d29ya0Vycm9yKHJlc29sdmVkRXJyb3IpXG4gICAgICAgICAgICAgICAgICAgICYmICF0aGlzLmNvbmZpZy5pc05ldHdvcmtUaW1lb3V0RXhwaXJlZFNpbmNlKHN0YXJ0VGltZSkpIHtcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5jb25maWcubG9nKHJlc29sdmVkRXJyb3IpO1xuICAgICAgICAgICAgICAgICAgICBjb25zdCByZXRyeURlbGF5VGltZW91dCA9IG5leHRUaW1lb3V0O1xuICAgICAgICAgICAgICAgICAgICBhd2FpdCBuZXcgUHJvbWlzZShyZXNvbHZlID0+IHNldFRpbWVvdXQocmVzb2x2ZSwgcmV0cnlEZWxheVRpbWVvdXQpKTtcbiAgICAgICAgICAgICAgICAgICAgaWYgKG5leHRUaW1lb3V0IDwgMzIwMCkge1xuICAgICAgICAgICAgICAgICAgICAgICAgbmV4dFRpbWVvdXQgKj0gMjtcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICBpZiAoZm9yY2VUZXJtaW5hdGVFeHRyYVRpbWVvdXQgPCB0aGlzLmNvbmZpZy53YWl0Rm9yVGltZW91dCgpKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICBmb3JjZVRlcm1pbmF0ZUV4dHJhVGltZW91dCArPSA1MDAwO1xuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgICAgICAgdGhyb3cgcmVzb2x2ZWRFcnJvcjtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICByZXNvbHZlR3JhcGhRTEVycm9yKGVycm9yOiBhbnkpIHtcbiAgICAgICAgY29uc3QgZ3FsRXJyID0gZXJyb3IuZ3JhcGhRTEVycm9ycyAmJiBlcnJvci5ncmFwaFFMRXJyb3JzWzBdO1xuICAgICAgICBpZiAoZ3FsRXJyKSB7XG4gICAgICAgICAgICBjb25zdCBjbGllbnRFcnIgPSBuZXcgRXJyb3IoZ3FsRXJyLm1lc3NhZ2UpO1xuICAgICAgICAgICAgY29uc3QgZ3FsRXhjID0gKGdxbEVyci5leHRlbnNpb25zICYmIGdxbEVyci5leHRlbnNpb25zLmV4Y2VwdGlvbikgfHwge307XG4gICAgICAgICAgICAoY2xpZW50RXJyOiBhbnkpLm51bWJlciA9IGdxbEV4Yy5jb2RlIHx8IDA7XG4gICAgICAgICAgICAoY2xpZW50RXJyOiBhbnkpLmNvZGUgPSBncWxFeGMuY29kZSB8fCAwO1xuICAgICAgICAgICAgKGNsaWVudEVycjogYW55KS5zb3VyY2UgPSBncWxFeGMuc291cmNlIHx8ICdjbGllbnQnO1xuICAgICAgICAgICAgcmV0dXJuIGNsaWVudEVycjtcbiAgICAgICAgfVxuICAgICAgICBjb25zdCBlcnJvcnMgPSBlcnJvclxuICAgICAgICAgICAgJiYgZXJyb3IubmV0d29ya0Vycm9yXG4gICAgICAgICAgICAmJiBlcnJvci5uZXR3b3JrRXJyb3IucmVzdWx0XG4gICAgICAgICAgICAmJiBlcnJvci5uZXR3b3JrRXJyb3IucmVzdWx0LmVycm9ycztcbiAgICAgICAgaWYgKGVycm9ycykge1xuICAgICAgICAgICAgcmV0dXJuIFRPTkNsaWVudEVycm9yLnF1ZXJ5RmFpbGVkKGVycm9ycyk7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICByZXR1cm4gZXJyb3I7XG4gICAgICAgIH1cblxuICAgIH1cblxuICAgIGFzeW5jIGdyYXBoUWwocmVxdWVzdDogKGNsaWVudDogQXBvbGxvQ2xpZW50KSA9PiBQcm9taXNlPGFueT4sIHNwYW46IFNwYW4pOiBQcm9taXNlPGFueT4ge1xuICAgICAgICBjb25zdCBjbGllbnQgPSBhd2FpdCB0aGlzLmdyYXBocWxDbGllbnRSZXF1aXJlZChzcGFuKTtcbiAgICAgICAgdHJ5IHtcbiAgICAgICAgICAgIHJldHVybiBhd2FpdCByZXF1ZXN0KGNsaWVudCk7XG4gICAgICAgIH0gY2F0Y2ggKGVycm9yKSB7XG4gICAgICAgICAgICB0aHJvdyB0aGlzLnJlc29sdmVHcmFwaFFMRXJyb3IoZXJyb3IpO1xuICAgICAgICB9XG4gICAgfVxuXG4gICAgYXN5bmMgZ3JhcGhxbENsaWVudFJlcXVpcmVkKHBhcmVudFNwYW4/OiBTcGFuIHwgU3BhbkNvbnRleHQpOiBQcm9taXNlPEFwb2xsb0NsaWVudD4ge1xuICAgICAgICBpZiAodGhpcy5ncmFwaHFsQ2xpZW50KSB7XG4gICAgICAgICAgICByZXR1cm4gdGhpcy5ncmFwaHFsQ2xpZW50O1xuICAgICAgICB9XG4gICAgICAgIGlmICh0aGlzLmdyYXBocWxDbGllbnRDcmVhdGlvbikge1xuICAgICAgICAgICAgYXdhaXQgdGhpcy5ncmFwaHFsQ2xpZW50Q3JlYXRpb24ubGlzdGVuKCk7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICBjb25zdCBjcmVhdGlvbiA9IG5ldyBNdWx0aWNhc3RQcm9taXNlKCk7XG4gICAgICAgICAgICB0aGlzLmdyYXBocWxDbGllbnRDcmVhdGlvbiA9IGNyZWF0aW9uO1xuICAgICAgICAgICAgdHJ5IHtcbiAgICAgICAgICAgICAgICBhd2FpdCB0aGlzLmNvbnRleHQudHJhY2UoJ3NldHVwIGNsaWVudCcsIChzcGFuKSA9PiB7XG4gICAgICAgICAgICAgICAgICAgIHJldHVybiB0aGlzLmNyZWF0ZUdyYXBocWxDbGllbnQoc3Bhbik7XG4gICAgICAgICAgICAgICAgfSwgcGFyZW50U3Bhbik7XG4gICAgICAgICAgICAgICAgdGhpcy5ncmFwaHFsQ2xpZW50Q3JlYXRpb24gPSBudWxsO1xuICAgICAgICAgICAgICAgIGNyZWF0aW9uLnJlc29sdmUodGhpcy5ncmFwaHFsQ2xpZW50KTtcbiAgICAgICAgICAgIH0gY2F0Y2ggKGVycm9yKSB7XG4gICAgICAgICAgICAgICAgdGhpcy5ncmFwaHFsQ2xpZW50Q3JlYXRpb24gPSBudWxsO1xuICAgICAgICAgICAgICAgIGNyZWF0aW9uLnJlamVjdChlcnJvcik7XG4gICAgICAgICAgICAgICAgdGhyb3cgZXJyb3I7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgICAgcmV0dXJuIHRoaXMuZ3JhcGhxbENsaWVudDtcbiAgICB9XG5cbiAgICBhc3luYyBjcmVhdGVHcmFwaHFsQ2xpZW50KHNwYW46IFNwYW4gfCBTcGFuQ29udGV4dCkge1xuICAgICAgICBjb25zdCB1c2VIdHRwID0gIXRoaXMuY29uZmlnLmRhdGEudXNlV2ViU29ja2V0Rm9yUXVlcmllcztcbiAgICAgICAgbGV0IGNsaWVudENvbmZpZyA9IGF3YWl0IHRoaXMuZ2V0Q2xpZW50Q29uZmlnKCk7XG4gICAgICAgIGxldCB3c0xpbms6ID9XZWJTb2NrZXRMaW5rID0gbnVsbDtcbiAgICAgICAgbGV0IGh0dHBMaW5rOiA/SHR0cExpbmsgPSBudWxsO1xuXG4gICAgICAgIGNvbnN0IHN1YnNPcHRpb25zID0gdGhpcy5jb25maWcudHJhY2VyLmluamVjdChzcGFuLCBGT1JNQVRfVEVYVF9NQVAsIHt9KTtcbiAgICAgICAgY29uc3Qgc3Vic2NyaXB0aW9uQ2xpZW50ID0gbmV3IFN1YnNjcmlwdGlvbkNsaWVudChcbiAgICAgICAgICAgIGNsaWVudENvbmZpZy53c1VybCxcbiAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICB0aW1lb3V0OiBLRUVQX0FMSVZFX1RJTUVPVVQsXG4gICAgICAgICAgICAgICAgcmVjb25uZWN0OiB0cnVlLFxuICAgICAgICAgICAgICAgIGNvbm5lY3Rpb25QYXJhbXM6ICgpID0+ICh7XG4gICAgICAgICAgICAgICAgICAgIGFjY2Vzc0tleTogdGhpcy5jb25maWcuZGF0YSAmJiB0aGlzLmNvbmZpZy5kYXRhLmFjY2Vzc0tleSxcbiAgICAgICAgICAgICAgICAgICAgaGVhZGVyczogc3Vic09wdGlvbnMsXG4gICAgICAgICAgICAgICAgfSksXG4gICAgICAgICAgICB9LFxuICAgICAgICAgICAgY2xpZW50Q29uZmlnLldlYlNvY2tldCxcbiAgICAgICAgKTtcbiAgICAgICAgc3Vic2NyaXB0aW9uQ2xpZW50Lm9uUmVjb25uZWN0ZWQoKCkgPT4ge1xuICAgICAgICAgICAgY29uc29sZS5sb2coJ1tUT05DbGllbnQucXVlcmllc10nLCAnV2ViU29ja2V0IFJlY29ubmVjdGVkJyk7XG4gICAgICAgIH0pO1xuICAgICAgICBsZXQgZGV0ZWN0aW5nUmVkaXJlY3Rpb24gPSBmYWxzZTtcbiAgICAgICAgc3Vic2NyaXB0aW9uQ2xpZW50Lm9uRXJyb3IoKCkgPT4ge1xuICAgICAgICAgICAgY29uc29sZS5sb2coJ1tUT05DbGllbnQucXVlcmllc10nLCAnV2ViU29ja2V0IEZhaWxlZCcpO1xuICAgICAgICAgICAgaWYgKGRldGVjdGluZ1JlZGlyZWN0aW9uKSB7XG4gICAgICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgKGFzeW5jICgpID0+IHtcbiAgICAgICAgICAgICAgICBkZXRlY3RpbmdSZWRpcmVjdGlvbiA9IHRydWU7XG4gICAgICAgICAgICAgICAgdHJ5IHtcbiAgICAgICAgICAgICAgICAgICAgY29uc3QgbmV3Q29uZmlnID0gYXdhaXQgdGhpcy5nZXRDbGllbnRDb25maWcoKTtcbiAgICAgICAgICAgICAgICAgICAgY29uc3QgY29uZmlnSXNDaGFuZ2VkID0gbmV3Q29uZmlnLmh0dHBVcmwgIT09IGNsaWVudENvbmZpZy5odHRwVXJsXG4gICAgICAgICAgICAgICAgICAgICAgICB8fCBuZXdDb25maWcud3NVcmwgIT09IGNsaWVudENvbmZpZy53c1VybDtcbiAgICAgICAgICAgICAgICAgICAgaWYgKGNvbmZpZ0lzQ2hhbmdlZCkge1xuICAgICAgICAgICAgICAgICAgICAgICAgY29uc29sZS5sb2coJ1tUT05DbGllbnQucXVlcmllc10nLCAnQ2xpZW50IGNvbmZpZyBjaGFuZ2VkJyk7XG4gICAgICAgICAgICAgICAgICAgICAgICBjbGllbnRDb25maWcgPSBuZXdDb25maWc7XG4gICAgICAgICAgICAgICAgICAgICAgICB0aGlzLmdyYXBocWxDbGllbnRDb25maWcgPSBjbGllbnRDb25maWc7XG4gICAgICAgICAgICAgICAgICAgICAgICBzdWJzY3JpcHRpb25DbGllbnQudXJsID0gbmV3Q29uZmlnLndzVXJsO1xuICAgICAgICAgICAgICAgICAgICAgICAgaWYgKHdzTGluaykge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHdzTGluay51cmwgPSBuZXdDb25maWcud3NVcmw7XG4gICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICAgICBpZiAoaHR0cExpbmspIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBodHRwTGluay51cmkgPSBuZXdDb25maWcuaHR0cFVybDtcbiAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIH0gY2F0Y2ggKGVycikge1xuICAgICAgICAgICAgICAgICAgICBjb25zb2xlLmxvZygnW1RPTkNsaWVudC5xdWVyaWVzXSByZWRpcmVjdGlvbiBkZXRlY3RvciBmYWlsZWQnLCBlcnIpO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICBkZXRlY3RpbmdSZWRpcmVjdGlvbiA9IGZhbHNlO1xuICAgICAgICAgICAgfSkoKTtcbiAgICAgICAgfSk7XG4gICAgICAgIHN1YnNjcmlwdGlvbkNsaWVudC5tYXhDb25uZWN0VGltZUdlbmVyYXRvci5kdXJhdGlvbiA9ICgpID0+IHtcbiAgICAgICAgICAgIHJldHVybiBzdWJzY3JpcHRpb25DbGllbnQubWF4Q29ubmVjdFRpbWVHZW5lcmF0b3IubWF4O1xuICAgICAgICB9O1xuXG4gICAgICAgIGNvbnN0IHRyYWNlckxpbmsgPSBhd2FpdCBzZXRDb250ZXh0KChfLCByZXEpID0+IHtcbiAgICAgICAgICAgIGNvbnN0IHJlc29sdmVkU3BhbiA9IChyZXEgJiYgcmVxLnRyYWNlU3BhbikgfHwgc3BhbjtcbiAgICAgICAgICAgIHJlcS5oZWFkZXJzID0ge307XG4gICAgICAgICAgICB0aGlzLmNvbmZpZy50cmFjZXIuaW5qZWN0KHJlc29sdmVkU3BhbiwgRk9STUFUX1RFWFRfTUFQLCByZXEuaGVhZGVycyk7XG4gICAgICAgICAgICBjb25zdCBhY2Nlc3NLZXkgPSB0aGlzLmNvbmZpZy5kYXRhICYmIHRoaXMuY29uZmlnLmRhdGEuYWNjZXNzS2V5O1xuICAgICAgICAgICAgaWYgKGFjY2Vzc0tleSkge1xuICAgICAgICAgICAgICAgIHJlcS5oZWFkZXJzLmFjY2Vzc0tleSA9IGFjY2Vzc0tleTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIHJldHVybiB7XG4gICAgICAgICAgICAgICAgaGVhZGVyczogcmVxLmhlYWRlcnMsXG4gICAgICAgICAgICB9O1xuICAgICAgICB9KTtcbiAgICAgICAgY29uc3Qgd3JhcExpbmsgPSAobGluazogQXBvbGxvTGluayk6IEFwb2xsb0xpbmsgPT4gdHJhY2VyTGluay5jb25jYXQobGluayk7XG4gICAgICAgIGNvbnN0IGlzU3Vic2NyaXB0aW9uID0gKHsgcXVlcnkgfSkgPT4ge1xuICAgICAgICAgICAgY29uc3QgZGVmaW5pdGlvbiA9IGdldE1haW5EZWZpbml0aW9uKHF1ZXJ5KTtcbiAgICAgICAgICAgIHJldHVybiAoXG4gICAgICAgICAgICAgICAgZGVmaW5pdGlvbi5raW5kID09PSAnT3BlcmF0aW9uRGVmaW5pdGlvbidcbiAgICAgICAgICAgICAgICAmJiBkZWZpbml0aW9uLm9wZXJhdGlvbiA9PT0gJ3N1YnNjcmlwdGlvbidcbiAgICAgICAgICAgICk7XG4gICAgICAgIH07XG4gICAgICAgIHdzTGluayA9IG5ldyBXZWJTb2NrZXRMaW5rKHN1YnNjcmlwdGlvbkNsaWVudCk7XG4gICAgICAgIGh0dHBMaW5rID0gdXNlSHR0cFxuICAgICAgICAgICAgPyBuZXcgSHR0cExpbmsoe1xuICAgICAgICAgICAgICAgIHVyaTogY2xpZW50Q29uZmlnLmh0dHBVcmwsXG4gICAgICAgICAgICAgICAgZmV0Y2g6IGNsaWVudENvbmZpZy5mZXRjaCxcbiAgICAgICAgICAgIH0pXG4gICAgICAgICAgICA6IG51bGw7XG4gICAgICAgIGNvbnN0IGxpbmsgPSBodHRwTGlua1xuICAgICAgICAgICAgPyBzcGxpdChpc1N1YnNjcmlwdGlvbiwgd3JhcExpbmsod3NMaW5rKSwgd3JhcExpbmsoaHR0cExpbmspKVxuICAgICAgICAgICAgOiB3cmFwTGluayh3c0xpbmspO1xuICAgICAgICB0aGlzLmdyYXBocWxDbGllbnRDb25maWcgPSBjbGllbnRDb25maWc7XG4gICAgICAgIHRoaXMuZ3JhcGhxbENsaWVudCA9IG5ldyBBcG9sbG9DbGllbnQoe1xuICAgICAgICAgICAgY2FjaGU6IG5ldyBJbk1lbW9yeUNhY2hlKHt9KSxcbiAgICAgICAgICAgIGxpbmssXG4gICAgICAgICAgICBkZWZhdWx0T3B0aW9uczoge1xuICAgICAgICAgICAgICAgIHdhdGNoUXVlcnk6IHtcbiAgICAgICAgICAgICAgICAgICAgZmV0Y2hQb2xpY3k6ICduby1jYWNoZScsXG4gICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICBxdWVyeToge1xuICAgICAgICAgICAgICAgICAgICBmZXRjaFBvbGljeTogJ25vLWNhY2hlJyxcbiAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgfSxcbiAgICAgICAgfSk7XG4gICAgfVxuXG4gICAgYXN5bmMgY2xvc2UoKSB7XG4gICAgICAgIGlmICh0aGlzLmdyYXBocWxDbGllbnQpIHtcbiAgICAgICAgICAgIGNvbnN0IGNsaWVudCA9IHRoaXMuZ3JhcGhxbENsaWVudDtcbiAgICAgICAgICAgIHRoaXMuZ3JhcGhxbENsaWVudCA9IG51bGw7XG4gICAgICAgICAgICBjbGllbnQuc3RvcCgpO1xuICAgICAgICAgICAgYXdhaXQgY2xpZW50LmNsZWFyU3RvcmUoKTtcbiAgICAgICAgfVxuICAgIH1cbn1cblxuXG5jbGFzcyBUT05RdWVyaWVzTW9kdWxlQ29sbGVjdGlvbiBpbXBsZW1lbnRzIFRPTlFDb2xsZWN0aW9uIHtcbiAgICBtb2R1bGU6IFRPTlF1ZXJpZXNNb2R1bGU7XG5cbiAgICBjb2xsZWN0aW9uTmFtZTogc3RyaW5nO1xuXG4gICAgdHlwZU5hbWU6IHN0cmluZztcblxuICAgIGNvbnN0cnVjdG9yKFxuICAgICAgICBtb2R1bGU6IFRPTlF1ZXJpZXNNb2R1bGUsXG4gICAgICAgIGNvbGxlY3Rpb25OYW1lOiBzdHJpbmcsXG4gICAgICAgIHR5cGVOYW1lOiBzdHJpbmcsXG4gICAgKSB7XG4gICAgICAgIHRoaXMubW9kdWxlID0gbW9kdWxlO1xuICAgICAgICB0aGlzLmNvbGxlY3Rpb25OYW1lID0gY29sbGVjdGlvbk5hbWU7XG4gICAgICAgIHRoaXMudHlwZU5hbWUgPSB0eXBlTmFtZTtcbiAgICB9XG5cbiAgICBhc3luYyBxdWVyeShcbiAgICAgICAgLi4uYXJnc1xuICAgICAgICAvKlxuICAgICAgICAgICAgZmlsdGVyT3JQYXJhbXM6IGFueSB8IFRPTlF1ZXJ5UGFyYW1zLFxuICAgICAgICAgICAgcmVzdWx0OiBzdHJpbmcsXG4gICAgICAgICAgICBvcmRlckJ5PzogT3JkZXJCeVtdLFxuICAgICAgICAgICAgbGltaXQ/OiBudW1iZXIsXG4gICAgICAgICAgICB0aW1lb3V0PzogbnVtYmVyLFxuICAgICAgICAgICAgcGFyZW50U3Bhbj86IChTcGFuIHwgU3BhbkNvbnRleHQpXG4gICAgICAgICAqL1xuICAgICk6IFByb21pc2U8YW55PiB7XG4gICAgICAgIGNvbnN0IHtcbiAgICAgICAgICAgIGZpbHRlcixcbiAgICAgICAgICAgIHJlc3VsdCxcbiAgICAgICAgICAgIG9yZGVyQnksXG4gICAgICAgICAgICBsaW1pdCxcbiAgICAgICAgICAgIHRpbWVvdXQsXG4gICAgICAgICAgICBvcGVyYXRpb25JZCxcbiAgICAgICAgICAgIHBhcmVudFNwYW4sXG4gICAgICAgIH0gPSByZXNvbHZlUGFyYW1zPFRPTlF1ZXJ5UGFyYW1zPihhcmdzLCAnZmlsdGVyJywgKCkgPT4gKHtcbiAgICAgICAgICAgIGZpbHRlcjogYXJnc1swXSxcbiAgICAgICAgICAgIHJlc3VsdDogKGFyZ3NbMV06IGFueSksXG4gICAgICAgICAgICBvcmRlckJ5OiAoYXJnc1syXTogYW55KSxcbiAgICAgICAgICAgIGxpbWl0OiAoYXJnc1szXTogYW55KSxcbiAgICAgICAgICAgIHRpbWVvdXQ6IChhcmdzWzRdOiBhbnkpLFxuICAgICAgICAgICAgcGFyZW50U3BhbjogYXJnc1s1XSxcbiAgICAgICAgfSkpO1xuICAgICAgICByZXR1cm4gdGhpcy5tb2R1bGUuY29udGV4dC50cmFjZShgJHt0aGlzLmNvbGxlY3Rpb25OYW1lfS5xdWVyeWAsIGFzeW5jIChzcGFuKSA9PiB7XG4gICAgICAgICAgICBzcGFuLnNldFRhZygncGFyYW1zJywge1xuICAgICAgICAgICAgICAgIGZpbHRlcixcbiAgICAgICAgICAgICAgICByZXN1bHQsXG4gICAgICAgICAgICAgICAgb3JkZXJCeSxcbiAgICAgICAgICAgICAgICBsaW1pdCxcbiAgICAgICAgICAgICAgICB0aW1lb3V0LFxuICAgICAgICAgICAgICAgIG9wZXJhdGlvbklkLFxuICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICBjb25zdCB1c2VPcGVyYXRpb25JZCA9IG9wZXJhdGlvbklkXG4gICAgICAgICAgICAgICAgJiYgKGF3YWl0IHRoaXMubW9kdWxlLmdldFNlcnZlckluZm8oc3BhbikpLnN1cHBvcnRzT3BlcmF0aW9uSWQ7XG4gICAgICAgICAgICBjb25zdCBjID0gdGhpcy5jb2xsZWN0aW9uTmFtZTtcbiAgICAgICAgICAgIGNvbnN0IHQgPSB0aGlzLnR5cGVOYW1lO1xuICAgICAgICAgICAgY29uc3QgcWwgPSBgXG4gICAgICAgICAgICBxdWVyeSAke2N9KFxuICAgICAgICAgICAgICAgICRmaWx0ZXI6ICR7dH1GaWx0ZXIsXG4gICAgICAgICAgICAgICAgJG9yZGVyQnk6IFtRdWVyeU9yZGVyQnldLCBcbiAgICAgICAgICAgICAgICAkbGltaXQ6IEludCwgXG4gICAgICAgICAgICAgICAgJHRpbWVvdXQ6IEZsb2F0XG4gICAgICAgICAgICAgICAgJHt1c2VPcGVyYXRpb25JZCA/ICcsICRvcGVyYXRpb25JZDogU3RyaW5nJyA6ICcnfVxuICAgICAgICAgICAgICkge1xuICAgICAgICAgICAgICAgICR7Y30oXG4gICAgICAgICAgICAgICAgICAgIGZpbHRlcjogJGZpbHRlciwgXG4gICAgICAgICAgICAgICAgICAgIG9yZGVyQnk6ICRvcmRlckJ5LCBcbiAgICAgICAgICAgICAgICAgICAgbGltaXQ6ICRsaW1pdCwgXG4gICAgICAgICAgICAgICAgICAgIHRpbWVvdXQ6ICR0aW1lb3V0XG4gICAgICAgICAgICAgICAgICAgICR7dXNlT3BlcmF0aW9uSWQgPyAnLCBvcGVyYXRpb25JZDogJG9wZXJhdGlvbklkJyA6ICcnfVxuICAgICAgICAgICAgICAgICkgeyAke3Jlc3VsdH0gfVxuICAgICAgICAgICAgfWA7XG4gICAgICAgICAgICBjb25zdCB2YXJpYWJsZXM6IHsgW3N0cmluZ106IGFueSB9ID0ge1xuICAgICAgICAgICAgICAgIGZpbHRlcixcbiAgICAgICAgICAgICAgICBvcmRlckJ5LFxuICAgICAgICAgICAgICAgIGxpbWl0LFxuICAgICAgICAgICAgfTtcbiAgICAgICAgICAgIGlmICh1c2VPcGVyYXRpb25JZCkge1xuICAgICAgICAgICAgICAgIHZhcmlhYmxlcy5vcGVyYXRpb25JZCA9IG9wZXJhdGlvbklkO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgaWYgKHRpbWVvdXQpIHtcbiAgICAgICAgICAgICAgICB2YXJpYWJsZXMudGltZW91dCA9IE1hdGgubWluKE1BWF9USU1FT1VULCB0aW1lb3V0KTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIHJldHVybiAoYXdhaXQgdGhpcy5tb2R1bGUuZ3JhcGhxbFF1ZXJ5KHFsLCB2YXJpYWJsZXMsIHNwYW4sIHRpbWVvdXQpKS5kYXRhW2NdO1xuICAgICAgICB9LCBwYXJlbnRTcGFuKTtcbiAgICB9XG5cbiAgICBhc3luYyBhZ2dyZWdhdGUoXG4gICAgICAgIHBhcmFtczogVE9OUXVlcnlBZ2dyZWdhdGVQYXJhbXMsXG4gICAgKTogUHJvbWlzZTxzdHJpbmdbXT4ge1xuICAgICAgICByZXR1cm4gdGhpcy5tb2R1bGUuY29udGV4dC50cmFjZShgJHt0aGlzLmNvbGxlY3Rpb25OYW1lfS5hZ2dyZWdhdGVgLCBhc3luYyAoc3BhbikgPT4ge1xuICAgICAgICAgICAgc3Bhbi5zZXRUYWcoJ3BhcmFtcycsIHtcbiAgICAgICAgICAgICAgICBmaWx0ZXI6IHBhcmFtcy5maWx0ZXIsXG4gICAgICAgICAgICAgICAgZmllbGRzOiBwYXJhbXMuZmllbGRzLFxuICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICBpZiAoIShhd2FpdCB0aGlzLm1vZHVsZS5nZXRTZXJ2ZXJJbmZvKHNwYW4pKS5zdXBwb3J0c0FnZ3JlZ2F0aW9ucykge1xuICAgICAgICAgICAgICAgIHRocm93IFRPTkNsaWVudEVycm9yLnNlcnZlckRvZXNudFN1cHBvcnRBZ2dyZWdhdGlvbnMoKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGNvbnN0IHQgPSB0aGlzLnR5cGVOYW1lO1xuICAgICAgICAgICAgY29uc3QgcSA9IHRoaXMudHlwZU5hbWUuZW5kc1dpdGgoJ3MnKSA/IGBhZ2dyZWdhdGUke3R9YCA6IGBhZ2dyZWdhdGUke3R9c2A7XG4gICAgICAgICAgICBjb25zdCBxbCA9IGBcbiAgICAgICAgICAgIHF1ZXJ5ICR7cX0oXG4gICAgICAgICAgICAgICAgJGZpbHRlcjogJHt0fUZpbHRlcixcbiAgICAgICAgICAgICAgICAkZmllbGRzOiBbRmllbGRBZ2dyZWdhdGlvbl0gXG4gICAgICAgICAgICAgKSB7XG4gICAgICAgICAgICAgICAgJHtxfShcbiAgICAgICAgICAgICAgICAgICAgZmlsdGVyOiAkZmlsdGVyLCBcbiAgICAgICAgICAgICAgICAgICAgZmllbGRzOiAkZmllbGRzIFxuICAgICAgICAgICAgICAgIClcbiAgICAgICAgICAgIH1gO1xuICAgICAgICAgICAgY29uc3QgdmFyaWFibGVzOiB7IFtzdHJpbmddOiBhbnkgfSA9IHtcbiAgICAgICAgICAgICAgICBmaWx0ZXI6IHBhcmFtcy5maWx0ZXIsXG4gICAgICAgICAgICAgICAgZmllbGRzOiBwYXJhbXMuZmllbGRzLFxuICAgICAgICAgICAgfTtcbiAgICAgICAgICAgIHJldHVybiAoYXdhaXQgdGhpcy5tb2R1bGUuZ3JhcGhxbFF1ZXJ5KHFsLCB2YXJpYWJsZXMsIHNwYW4pKS5kYXRhW3FdO1xuICAgICAgICB9LCBwYXJhbXMucGFyZW50U3Bhbik7XG4gICAgfVxuXG4gICAgc3Vic2NyaWJlKFxuICAgICAgICAuLi5hcmdzXG4gICAgICAgIC8qXG4gICAgICAgIGZpbHRlck9yUGFyYW1zOiBhbnkgfCBUT05TdWJzY3JpYmVQYXJhbXMsXG4gICAgICAgIHJlc3VsdD86IHN0cmluZyxcbiAgICAgICAgb25Eb2NFdmVudD86IERvY0V2ZW50LFxuICAgICAgICBvbkVycm9yPzogKGVycjogRXJyb3IpID0+IHZvaWRcbiAgICAgICAgICovXG4gICAgKTogU3Vic2NyaXB0aW9uIHtcbiAgICAgICAgY29uc3Qge1xuICAgICAgICAgICAgZmlsdGVyLFxuICAgICAgICAgICAgcmVzdWx0LFxuICAgICAgICAgICAgb25Eb2NFdmVudCxcbiAgICAgICAgICAgIG9uRXJyb3IsXG4gICAgICAgIH0gPSByZXNvbHZlUGFyYW1zPFRPTlN1YnNjcmliZVBhcmFtcz4oYXJncywgJ2ZpbHRlcicsICgpID0+ICh7XG4gICAgICAgICAgICBmaWx0ZXI6IGFyZ3NbMF0sXG4gICAgICAgICAgICByZXN1bHQ6IChhcmdzWzFdOiBhbnkpLFxuICAgICAgICAgICAgb25Eb2NFdmVudDogKGFyZ3NbMl06IGFueSksXG4gICAgICAgICAgICBvbkVycm9yOiAoYXJnc1szXTogYW55KSxcbiAgICAgICAgfSkpO1xuICAgICAgICBjb25zdCBzcGFuID0gdGhpcy5tb2R1bGUuY29uZmlnLnRyYWNlci5zdGFydFNwYW4oJ1RPTlF1ZXJpZXNNb2R1bGUuanM6c3Vic2NyaWJlICcpO1xuICAgICAgICBzcGFuLnNldFRhZyhUYWdzLlNQQU5fS0lORCwgJ2NsaWVudCcpO1xuICAgICAgICBjb25zdCB0ZXh0ID0gYHN1YnNjcmlwdGlvbiAke3RoaXMuY29sbGVjdGlvbk5hbWV9KCRmaWx0ZXI6ICR7dGhpcy50eXBlTmFtZX1GaWx0ZXIpIHtcbiAgICAgICAgICAgICR7dGhpcy5jb2xsZWN0aW9uTmFtZX0oZmlsdGVyOiAkZmlsdGVyKSB7ICR7cmVzdWx0fSB9XG4gICAgICAgIH1gO1xuICAgICAgICBjb25zdCBxdWVyeSA9IGdxbChbdGV4dF0pO1xuICAgICAgICBsZXQgc3Vic2NyaXB0aW9uID0gbnVsbDtcbiAgICAgICAgKGFzeW5jICgpID0+IHtcbiAgICAgICAgICAgIHRyeSB7XG4gICAgICAgICAgICAgICAgY29uc3QgY2xpZW50ID0gYXdhaXQgdGhpcy5tb2R1bGUuZ3JhcGhxbENsaWVudFJlcXVpcmVkKHNwYW4pO1xuICAgICAgICAgICAgICAgIGNvbnN0IG9ic2VydmFibGUgPSBjbGllbnQuc3Vic2NyaWJlKHtcbiAgICAgICAgICAgICAgICAgICAgcXVlcnksXG4gICAgICAgICAgICAgICAgICAgIHZhcmlhYmxlczoge1xuICAgICAgICAgICAgICAgICAgICAgICAgZmlsdGVyLFxuICAgICAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgICAgIHN1YnNjcmlwdGlvbiA9IG9ic2VydmFibGUuc3Vic2NyaWJlKChtZXNzYWdlKSA9PiB7XG4gICAgICAgICAgICAgICAgICAgIG9uRG9jRXZlbnQoJ2luc2VydC91cGRhdGUnLCBtZXNzYWdlLmRhdGFbdGhpcy5jb2xsZWN0aW9uTmFtZV0pO1xuICAgICAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgfSBjYXRjaCAoZXJyb3IpIHtcbiAgICAgICAgICAgICAgICBzcGFuLmxvZyh7XG4gICAgICAgICAgICAgICAgICAgIGV2ZW50OiAnZmFpbGVkJyxcbiAgICAgICAgICAgICAgICAgICAgcGF5bG9hZDogZXJyb3IsXG4gICAgICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICAgICAgaWYgKG9uRXJyb3IpIHtcbiAgICAgICAgICAgICAgICAgICAgb25FcnJvcihlcnJvcik7XG4gICAgICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgICAgICAgY29uc29sZS5sb2coJ1RPTiBDbGllbnQgc3Vic2NyaXB0aW9uIGVycm9yJywgZXJyb3IpO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cbiAgICAgICAgfSkoKTtcbiAgICAgICAgcmV0dXJuIHtcbiAgICAgICAgICAgIHVuc3Vic2NyaWJlOiAoKSA9PiB7XG4gICAgICAgICAgICAgICAgaWYgKHN1YnNjcmlwdGlvbikge1xuICAgICAgICAgICAgICAgICAgICBzdWJzY3JpcHRpb24udW5zdWJzY3JpYmUoKTtcbiAgICAgICAgICAgICAgICAgICAgc3Bhbi5maW5pc2goKTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9LFxuICAgICAgICB9O1xuICAgIH1cblxuICAgIGFzeW5jIHdhaXRGb3IoXG4gICAgICAgIC4uLmFyZ3NcbiAgICAgICAgLypcbiAgICAgICAgZmlsdGVyT3JQYXJhbXM6IGFueSB8IFRPTldhaXRGb3JQYXJhbXMsXG4gICAgICAgIHJlc3VsdDogc3RyaW5nLFxuICAgICAgICB0aW1lb3V0PzogbnVtYmVyLFxuICAgICAgICBwYXJlbnRTcGFuPzogKFNwYW4gfCBTcGFuQ29udGV4dClcbiAgICAgICAgICovXG4gICAgKTogUHJvbWlzZTxhbnk+IHtcbiAgICAgICAgY29uc3Qge1xuICAgICAgICAgICAgZmlsdGVyLFxuICAgICAgICAgICAgcmVzdWx0LFxuICAgICAgICAgICAgdGltZW91dDogcGFyYW1zVGltZW91dCxcbiAgICAgICAgICAgIHBhcmVudFNwYW4sXG4gICAgICAgICAgICBvcGVyYXRpb25JZCxcbiAgICAgICAgfSA9IHJlc29sdmVQYXJhbXM8VE9OV2FpdEZvclBhcmFtcz4oYXJncywgJ2ZpbHRlcicsICgpID0+ICh7XG4gICAgICAgICAgICBmaWx0ZXI6IGFyZ3NbMF0sXG4gICAgICAgICAgICByZXN1bHQ6IChhcmdzWzFdOiBhbnkpLFxuICAgICAgICAgICAgdGltZW91dDogKGFyZ3NbMl06IGFueSksXG4gICAgICAgICAgICBwYXJlbnRTcGFuOiBhcmdzWzNdLFxuICAgICAgICB9KSk7XG4gICAgICAgIGNvbnN0IHRpbWVvdXQgPSBwYXJhbXNUaW1lb3V0IHx8IHRoaXMubW9kdWxlLmNvbmZpZy53YWl0Rm9yVGltZW91dCgpO1xuICAgICAgICBjb25zdCBkb2NzID0gYXdhaXQgdGhpcy5xdWVyeSh7XG4gICAgICAgICAgICBmaWx0ZXIsXG4gICAgICAgICAgICByZXN1bHQsXG4gICAgICAgICAgICB0aW1lb3V0LFxuICAgICAgICAgICAgcGFyZW50U3BhbixcbiAgICAgICAgICAgIG9wZXJhdGlvbklkLFxuICAgICAgICB9KTtcbiAgICAgICAgaWYgKGRvY3MubGVuZ3RoID4gMCkge1xuICAgICAgICAgICAgcmV0dXJuIGRvY3NbMF07XG4gICAgICAgIH1cbiAgICAgICAgdGhyb3cgVE9OQ2xpZW50RXJyb3Iud2FpdEZvclRpbWVvdXQoKTtcbiAgICB9XG59XG5cblRPTlF1ZXJpZXNNb2R1bGUubW9kdWxlTmFtZSA9ICdUT05RdWVyaWVzTW9kdWxlJztcbiJdfQ==