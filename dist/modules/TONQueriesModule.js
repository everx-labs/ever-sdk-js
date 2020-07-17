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
        var _this5 = this;

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
                    var nextTimeout, startTime;
                    return _regenerator["default"].wrap(function _callee19$(_context19) {
                      while (1) {
                        switch (_context19.prev = _context19.next) {
                          case 0:
                            nextTimeout = 100;
                            startTime = Date.now();

                          case 2:
                            if (!true) {
                              _context19.next = 18;
                              break;
                            }

                            _context19.prev = 3;
                            _context19.next = 6;
                            return client.query({
                              query: query,
                              variables: variables,
                              context: {
                                traceSpan: span
                              }
                            });

                          case 6:
                            return _context19.abrupt("return", _context19.sent);

                          case 9:
                            _context19.prev = 9;
                            _context19.t0 = _context19["catch"](3);

                            if (!(TONQueriesModule.isNetworkError(_context19.t0) && !_this5.config.isNetworkTimeoutExpiredSince(startTime))) {
                              _context19.next = 15;
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
                            })(), "t1", 13);

                          case 13:
                            _context19.next = 16;
                            break;

                          case 15:
                            throw _context19.t0;

                          case 16:
                            _context19.next = 2;
                            break;

                          case 18:
                          case "end":
                            return _context19.stop();
                        }
                      }
                    }, _callee19, null, [[3, 9]]);
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
                            return _this8.module.graphqlQuery(ql, variables, span);

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
        var _this9 = this;

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy9tb2R1bGVzL1RPTlF1ZXJpZXNNb2R1bGUuanMiXSwibmFtZXMiOlsiS0VFUF9BTElWRV9USU1FT1VUIiwiTUFYX1RJTUVPVVQiLCJyZXNvbHZlUGFyYW1zIiwiYXJncyIsInJlcXVpcmVkUGFyYW1OYW1lIiwicmVzb2x2ZUFyZ3MiLCJsZW5ndGgiLCJNdWx0aWNhc3RQcm9taXNlIiwibGlzdGVuZXJzIiwib25Db21wbGV0ZSIsImxpc3RlbmVyIiwicmVzb2x2ZSIsInJlamVjdCIsInB1c2giLCJQcm9taXNlIiwidmFsdWUiLCJjb21wbGV0ZSIsImVycm9yIiwiY29tcGxldGVMaXN0ZW5lciIsImZvckVhY2giLCJ2ZXJzaW9uVG9OdW1iZXIiLCJzIiwicGFydHMiLCJzcGxpdCIsIm1hcCIsIngiLCJOdW1iZXIiLCJzbGljZSIsInJlc29sdmVTZXJ2ZXJJbmZvIiwidmVyc2lvblN0cmluZyIsInZlcnNpb24iLCJzdXBwb3J0c09wZXJhdGlvbklkIiwic3VwcG9ydHNBZ2dyZWdhdGlvbnMiLCJzdXBwb3J0c1RpbWUiLCJ0aW1lRGVsdGEiLCJUT05RdWVyaWVzTW9kdWxlIiwiY29udGV4dCIsImdyYXBocWxDbGllbnQiLCJncmFwaHFsQ2xpZW50Q3JlYXRpb24iLCJncmFwaHFsQ2xpZW50Q29uZmlnIiwib3ZlcnJpZGVXc1VybCIsIm9wZXJhdGlvbklkUHJlZml4IiwiRGF0ZSIsIm5vdyIsInRvU3RyaW5nIiwiaSIsIk1hdGgiLCJyb3VuZCIsInJhbmRvbSIsIm9wZXJhdGlvbklkU3VmZml4Iiwic2VydmVySW5mbyIsImNvbmZpZyIsImdldE1vZHVsZSIsIlRPTkNvbmZpZ01vZHVsZSIsInRyYW5zYWN0aW9ucyIsIlRPTlF1ZXJpZXNNb2R1bGVDb2xsZWN0aW9uIiwibWVzc2FnZXMiLCJibG9ja3MiLCJhY2NvdW50cyIsImJsb2Nrc19zaWduYXR1cmVzIiwiZmV0Y2giLCJzb3VyY2VVcmwiLCJyZXNwb25zZSIsInRleHQiLCJyZXNwb25zZVRleHQiLCJyZXNwb25zZUpzb24iLCJKU09OIiwicGFyc2UiLCJkYXRhIiwiaW5mbyIsInJlZGlyZWN0ZWQiLCJ1cmwiLCJzb3VyY2VMb2NhdGlvbiIsIlVSTFBhcnRzIiwiZml4UXVlcnkiLCJfIiwidG9Mb3dlckNhc2UiLCJyZXNwb25zZUxvY2F0aW9uIiwiZ2V0Q29uZmlnRm9yU2VydmVyIiwic2VydmVyIiwiaHR0cFBhcnRzIiwiZml4UHJvdG9jb2wiLCJmaXhQYXRoIiwiaHR0cCIsIndzIiwiaHR0cFVybCIsIndzVXJsIiwiY2xpZW50UGxhdGZvcm0iLCJXZWJTb2NrZXQiLCJUT05DbGllbnQiLCJFcnJvciIsInNlcnZlcnMiLCJjbGllbnRDb25maWciLCJkZXRlY3RSZWRpcmVjdCIsImNvbnNvbGUiLCJsb2ciLCJlcnJvclN0cmluZyIsInNwYW4iLCJncmFwaHFsQ2xpZW50UmVxdWlyZWQiLCJnZXRTZXJ2ZXJJbmZvIiwic3RhcnQiLCJlbmQiLCJqc29uIiwicmVzcG9uc2VEYXRhIiwic2VydmVyVGltZSIsInRpbWUiLCJzZXJ2ZXJUaW1lRGVsdGEiLCJvcGVyYXRpb25JZHMiLCJncmFwaHFsTXV0YXRpb24iLCJwYXJlbnRTcGFuIiwicXVlcnkiLCJ1bmRlZmluZWQiLCJyZXN1bHQiLCJnZXRBY2NvdW50c0NvdW50IiwiZ2V0VHJhbnNhY3Rpb25zQ291bnQiLCJnZXRBY2NvdW50c1RvdGFsQmFsYW5jZSIsInJlcXVlc3RzIiwidHJhY2UiLCJxbCIsInZhcmlhYmxlcyIsInNldFRhZyIsIm11dGF0aW9uIiwiZ3JhcGhxbFF1ZXJ5IiwiZ3JhcGhRbCIsImNsaWVudCIsIm11dGF0ZSIsInRyYWNlU3BhbiIsIm5leHRUaW1lb3V0Iiwic3RhcnRUaW1lIiwiaXNOZXR3b3JrRXJyb3IiLCJpc05ldHdvcmtUaW1lb3V0RXhwaXJlZFNpbmNlIiwid2FybiIsIm5ldHdvcmtFcnJvciIsInRpbWVvdXQiLCJzZXRUaW1lb3V0IiwicmVxdWVzdCIsImdxbEVyciIsImdyYXBoUUxFcnJvcnMiLCJjbGllbnRFcnIiLCJtZXNzYWdlIiwiZ3FsRXhjIiwiZXh0ZW5zaW9ucyIsImV4Y2VwdGlvbiIsIm51bWJlciIsImNvZGUiLCJzb3VyY2UiLCJlcnJvcnMiLCJUT05DbGllbnRFcnJvciIsInF1ZXJ5RmFpbGVkIiwibGlzdGVuIiwiY3JlYXRpb24iLCJjcmVhdGVHcmFwaHFsQ2xpZW50IiwidXNlSHR0cCIsInVzZVdlYlNvY2tldEZvclF1ZXJpZXMiLCJnZXRDbGllbnRDb25maWciLCJ3c0xpbmsiLCJodHRwTGluayIsInN1YnNPcHRpb25zIiwidHJhY2VyIiwiaW5qZWN0IiwiRk9STUFUX1RFWFRfTUFQIiwic3Vic2NyaXB0aW9uQ2xpZW50IiwiU3Vic2NyaXB0aW9uQ2xpZW50IiwicmVjb25uZWN0IiwiY29ubmVjdGlvblBhcmFtcyIsImFjY2Vzc0tleSIsImhlYWRlcnMiLCJvblJlY29ubmVjdGVkIiwiZGV0ZWN0aW5nUmVkaXJlY3Rpb24iLCJvbkVycm9yIiwibmV3Q29uZmlnIiwiY29uZmlnSXNDaGFuZ2VkIiwidXJpIiwibWF4Q29ubmVjdFRpbWVHZW5lcmF0b3IiLCJkdXJhdGlvbiIsIm1heCIsInJlcSIsInJlc29sdmVkU3BhbiIsInRyYWNlckxpbmsiLCJ3cmFwTGluayIsImxpbmsiLCJjb25jYXQiLCJpc1N1YnNjcmlwdGlvbiIsImRlZmluaXRpb24iLCJraW5kIiwib3BlcmF0aW9uIiwiV2ViU29ja2V0TGluayIsIkh0dHBMaW5rIiwiQXBvbGxvQ2xpZW50IiwiY2FjaGUiLCJJbk1lbW9yeUNhY2hlIiwiZGVmYXVsdE9wdGlvbnMiLCJ3YXRjaFF1ZXJ5IiwiZmV0Y2hQb2xpY3kiLCJzdG9wIiwiY2xlYXJTdG9yZSIsIlRPTk1vZHVsZSIsIm1vZHVsZSIsImNvbGxlY3Rpb25OYW1lIiwidHlwZU5hbWUiLCJmaWx0ZXIiLCJvcmRlckJ5IiwibGltaXQiLCJvcGVyYXRpb25JZCIsInVzZU9wZXJhdGlvbklkIiwiYyIsInQiLCJtaW4iLCJwYXJhbXMiLCJmaWVsZHMiLCJzZXJ2ZXJEb2VzbnRTdXBwb3J0QWdncmVnYXRpb25zIiwicSIsImVuZHNXaXRoIiwib25Eb2NFdmVudCIsInN0YXJ0U3BhbiIsIlRhZ3MiLCJTUEFOX0tJTkQiLCJzdWJzY3JpcHRpb24iLCJvYnNlcnZhYmxlIiwic3Vic2NyaWJlIiwiZXZlbnQiLCJwYXlsb2FkIiwidW5zdWJzY3JpYmUiLCJmaW5pc2giLCJwYXJhbXNUaW1lb3V0Iiwid2FpdEZvclRpbWVvdXQiLCJkb2NzIiwibW9kdWxlTmFtZSJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7O0FBTUE7O0FBQ0E7O0FBQ0E7O0FBQ0E7O0FBQ0E7O0FBQ0E7O0FBQ0E7O0FBQ0E7O0FBQ0E7O0FBQ0E7O0FBWUE7O0FBRUE7O0FBQ0E7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQXVCQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxJQUFNQSxrQkFBa0IsR0FBRyxJQUFJLEtBQS9CO0FBRU8sSUFBTUMsV0FBVyxHQUFHLFVBQXBCOzs7QUFFUCxTQUFTQyxhQUFULENBQTBCQyxJQUExQixFQUF1Q0MsaUJBQXZDLEVBQWtFQyxXQUFsRSxFQUEyRjtBQUN2RixTQUFRRixJQUFJLENBQUNHLE1BQUwsS0FBZ0IsQ0FBakIsSUFBd0JGLGlCQUFpQixJQUFJRCxJQUFJLENBQUMsQ0FBRCxDQUFqRCxHQUF3REEsSUFBSSxDQUFDLENBQUQsQ0FBNUQsR0FBa0VFLFdBQVcsRUFBcEY7QUFDSDs7SUFPS0UsZ0I7QUFJRiw4QkFBYztBQUFBOztBQUFBOztBQUFBOztBQUNWLFNBQUtDLFNBQUwsR0FBaUIsRUFBakI7QUFDQSxTQUFLQyxVQUFMLEdBQWtCLElBQWxCO0FBQ0g7Ozs7NkJBRXdCO0FBQ3JCLFVBQU1DLFFBQWtDLEdBQUc7QUFDdkNDLFFBQUFBLE9BQU8sRUFBRSxtQkFBTSxDQUNkLENBRnNDO0FBR3ZDQyxRQUFBQSxNQUFNLEVBQUUsa0JBQU0sQ0FDYjtBQUpzQyxPQUEzQztBQU1BLFdBQUtKLFNBQUwsQ0FBZUssSUFBZixDQUFvQkgsUUFBcEI7QUFDQSxhQUFP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Q0FBRDtBQUp1QyxtQkFBUDtBQUFBLGlCQUFuQyxDLEVBTGJxTSxNLG1CQUFBQSxNLEVBQ0F4RixNLG1CQUFBQSxNLEVBQ1NnSCxhLG1CQUFUM0YsTyxFQUNBeEIsVSxtQkFBQUEsVSxFQUNBOEYsVyxtQkFBQUEsVztBQU9FdEUsZ0JBQUFBLE8sR0FBVTJGLGFBQWEsSUFBSSxLQUFLM0IsTUFBTCxDQUFZbEosTUFBWixDQUFtQjhLLGNBQW5CLEU7O3VCQUNkLEtBQUtuSCxLQUFMLENBQVc7QUFDMUIwRixrQkFBQUEsTUFBTSxFQUFOQSxNQUQwQjtBQUUxQnhGLGtCQUFBQSxNQUFNLEVBQU5BLE1BRjBCO0FBRzFCcUIsa0JBQUFBLE9BQU8sRUFBUEEsT0FIMEI7QUFJMUJ4QixrQkFBQUEsVUFBVSxFQUFWQSxVQUowQjtBQUsxQjhGLGtCQUFBQSxXQUFXLEVBQVhBO0FBTDBCLGlCQUFYLEM7OztBQUFidUIsZ0JBQUFBLEk7O3NCQU9GQSxJQUFJLENBQUM1TixNQUFMLEdBQWMsQzs7Ozs7bURBQ1A0TixJQUFJLENBQUMsQ0FBRCxDOzs7c0JBRVQvRSwwQkFBZThFLGNBQWYsRTs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBSWQ5TCxnQkFBZ0IsQ0FBQ2dNLFVBQWpCLEdBQThCLGtCQUE5QiIsInNvdXJjZXNDb250ZW50IjpbIi8qXG4gKiBDb3B5cmlnaHQgMjAxOC0yMDIwIFRPTiBERVYgU09MVVRJT05TIExURC5cbiAqL1xuXG4vLyBAZmxvd1xuXG5pbXBvcnQgeyBJbk1lbW9yeUNhY2hlIH0gZnJvbSAnYXBvbGxvLWNhY2hlLWlubWVtb3J5JztcbmltcG9ydCB7IEFwb2xsb0NsaWVudCB9IGZyb20gJ2Fwb2xsby1jbGllbnQnO1xuaW1wb3J0IHsgQXBvbGxvTGluaywgc3BsaXQgfSBmcm9tICdhcG9sbG8tbGluayc7XG5pbXBvcnQgeyBIdHRwTGluayB9IGZyb20gJ2Fwb2xsby1saW5rLWh0dHAnO1xuaW1wb3J0IHsgV2ViU29ja2V0TGluayB9IGZyb20gJ2Fwb2xsby1saW5rLXdzJztcbmltcG9ydCB7IGdldE1haW5EZWZpbml0aW9uIH0gZnJvbSAnYXBvbGxvLXV0aWxpdGllcyc7XG5pbXBvcnQgZ3FsIGZyb20gJ2dyYXBocWwtdGFnJztcbmltcG9ydCB7IFN1YnNjcmlwdGlvbkNsaWVudCB9IGZyb20gJ3N1YnNjcmlwdGlvbnMtdHJhbnNwb3J0LXdzJztcbmltcG9ydCB7IHNldENvbnRleHQgfSBmcm9tICdhcG9sbG8tbGluay1jb250ZXh0JztcbmltcG9ydCB7XG4gICAgRk9STUFUX1RFWFRfTUFQLCBUYWdzLCBTcGFuLCBTcGFuQ29udGV4dCxcbn0gZnJvbSAnb3BlbnRyYWNpbmcnO1xuaW1wb3J0IHR5cGUge1xuICAgIFRPTlF1ZXJpZXMsXG4gICAgVE9OUUNvbGxlY3Rpb24sXG4gICAgU3Vic2NyaXB0aW9uLFxuICAgIFRPTlF1ZXJ5UGFyYW1zLFxuICAgIFRPTlN1YnNjcmliZVBhcmFtcyxcbiAgICBUT05XYWl0Rm9yUGFyYW1zLFxuICAgIFRPTlF1ZXJ5QWdncmVnYXRlUGFyYW1zLFxufSBmcm9tICcuLi8uLi90eXBlcyc7XG5pbXBvcnQgeyBUT05DbGllbnQsIFRPTkNsaWVudEVycm9yIH0gZnJvbSAnLi4vVE9OQ2xpZW50JztcbmltcG9ydCB0eXBlIHsgVE9OTW9kdWxlQ29udGV4dCB9IGZyb20gJy4uL1RPTk1vZHVsZSc7XG5pbXBvcnQgeyBUT05Nb2R1bGUgfSBmcm9tICcuLi9UT05Nb2R1bGUnO1xuaW1wb3J0IFRPTkNvbmZpZ01vZHVsZSwgeyBVUkxQYXJ0cyB9IGZyb20gJy4vVE9OQ29uZmlnTW9kdWxlJztcblxuXG5leHBvcnQgdHlwZSBSZXF1ZXN0ID0ge1xuICAgIGlkOiBzdHJpbmcsXG4gICAgYm9keTogc3RyaW5nLFxufVxuXG5leHBvcnQgdHlwZSBTZXJ2ZXJJbmZvID0ge1xuICAgIHZlcnNpb246IG51bWJlcixcbiAgICBzdXBwb3J0c09wZXJhdGlvbklkOiBib29sZWFuLFxuICAgIHN1cHBvcnRzQWdncmVnYXRpb25zOiBib29sZWFuLFxuICAgIHN1cHBvcnRzVGltZTogYm9vbGVhbixcbiAgICB0aW1lRGVsdGE6ID9udW1iZXIsXG59O1xuXG50eXBlIEdyYXBoUUxDbGllbnRDb25maWcgPSB7XG4gICAgaHR0cFVybDogc3RyaW5nLFxuICAgIHdzVXJsOiBzdHJpbmcsXG4gICAgZmV0Y2g6IGFueSxcbiAgICBXZWJTb2NrZXQ6IGFueSxcbn07XG5cbi8vIEtlZXAtYWxpdmUgdGltZW91dCB1c2VkIHRvIHN1cHBvcnQga2VlcC1hbGl2ZSBjb25uZWN0aW9uIGNoZWNraW5nOlxuLy8gLSBFdmVyeSAxIG1pbnV0ZSBzZXJ2ZXIgc2VuZHMgR1FMX0NPTk5FQ1RJT05fS0VFUF9BTElWRSBtZXNzYWdlLlxuLy8gLSBFdmVyeSAyIG1pbnV0ZXMgY2xpZW50IGNoZWNrcyB0aGF0IEdRTF9DT05ORUNUSU9OX0tFRVBfQUxJVkUgbWVzc2FnZSB3YXMgcmVjZWl2ZWRcbi8vICAgd2l0aGluIGxhc3QgMiBtaW51dGVzLlxuLy8gLSBJZiBjbGllbnQgaGFkbid0IHJlY2VpdmVkIGtlZXAgYWxpdmUgbWVzc2FnZSBkdXJpbmcgbGFzdCAyIG1pbnV0ZXNcbi8vICAgaXQgY2xvc2VzIGNvbm5lY3Rpb24gYW5kIGdvZXMgdG8gcmVjb25uZWN0LlxuY29uc3QgS0VFUF9BTElWRV9USU1FT1VUID0gMiAqIDYwMDAwO1xuXG5leHBvcnQgY29uc3QgTUFYX1RJTUVPVVQgPSAyMTQ3NDgzNjQ3O1xuXG5mdW5jdGlvbiByZXNvbHZlUGFyYW1zPFQ+KGFyZ3M6IGFueVtdLCByZXF1aXJlZFBhcmFtTmFtZTogc3RyaW5nLCByZXNvbHZlQXJnczogKCkgPT4gVCk6IFQge1xuICAgIHJldHVybiAoYXJncy5sZW5ndGggPT09IDEpICYmIChyZXF1aXJlZFBhcmFtTmFtZSBpbiBhcmdzWzBdKSA/IGFyZ3NbMF0gOiByZXNvbHZlQXJncygpO1xufVxuXG50eXBlIE11bHRpY2FzdExpc3RlbmVyPFZhbHVlPiA9IHtcbiAgICByZXNvbHZlOiAodmFsdWU6IFZhbHVlKSA9PiB2b2lkO1xuICAgIHJlamVjdDogKGVycm9yOiBFcnJvcikgPT4gdm9pZDtcbn07XG5cbmNsYXNzIE11bHRpY2FzdFByb21pc2U8VmFsdWU+IHtcbiAgICBsaXN0ZW5lcnM6IE11bHRpY2FzdExpc3RlbmVyPFZhbHVlPltdO1xuICAgIG9uQ29tcGxldGU6ID8oKCkgPT4gdm9pZCk7XG5cbiAgICBjb25zdHJ1Y3RvcigpIHtcbiAgICAgICAgdGhpcy5saXN0ZW5lcnMgPSBbXTtcbiAgICAgICAgdGhpcy5vbkNvbXBsZXRlID0gbnVsbDtcbiAgICB9XG5cbiAgICBsaXN0ZW4oKTogUHJvbWlzZTxWYWx1ZT4ge1xuICAgICAgICBjb25zdCBsaXN0ZW5lcjogTXVsdGljYXN0TGlzdGVuZXI8VmFsdWU+ID0ge1xuICAgICAgICAgICAgcmVzb2x2ZTogKCkgPT4ge1xuICAgICAgICAgICAgfSxcbiAgICAgICAgICAgIHJlamVjdDogKCkgPT4ge1xuICAgICAgICAgICAgfSxcbiAgICAgICAgfTtcbiAgICAgICAgdGhpcy5saXN0ZW5lcnMucHVzaChsaXN0ZW5lcik7XG4gICAgICAgIHJldHVybiBuZXcgUHJvbWlzZSgocmVzb2x2ZSwgcmVqZWN0KSA9PiB7XG4gICAgICAgICAgICBsaXN0ZW5lci5yZXNvbHZlID0gcmVzb2x2ZTtcbiAgICAgICAgICAgIGxpc3RlbmVyLnJlamVjdCA9IHJlamVjdDtcbiAgICAgICAgfSk7XG4gICAgfVxuXG4gICAgcmVzb2x2ZSh2YWx1ZTogVmFsdWUpIHtcbiAgICAgICAgdGhpcy5jb21wbGV0ZShsaXN0ZW5lciA9PiBsaXN0ZW5lci5yZXNvbHZlKHZhbHVlKSk7XG4gICAgfVxuXG4gICAgcmVqZWN0KGVycm9yOiBFcnJvcikge1xuICAgICAgICB0aGlzLmNvbXBsZXRlKGxpc3RlbmVyID0+IGxpc3RlbmVyLnJlamVjdChlcnJvcikpO1xuICAgIH1cblxuICAgIGNvbXBsZXRlKGNvbXBsZXRlTGlzdGVuZXI6IChsaXN0ZW5lcjogTXVsdGljYXN0TGlzdGVuZXI8VmFsdWU+KSA9PiB2b2lkKSB7XG4gICAgICAgIGNvbnN0IHsgbGlzdGVuZXJzIH0gPSB0aGlzO1xuICAgICAgICB0aGlzLmxpc3RlbmVycyA9IFtdO1xuICAgICAgICBpZiAodGhpcy5vbkNvbXBsZXRlKSB7XG4gICAgICAgICAgICB0aGlzLm9uQ29tcGxldGUoKTtcbiAgICAgICAgfVxuICAgICAgICBsaXN0ZW5lcnMuZm9yRWFjaChsaXN0ZW5lciA9PiBjb21wbGV0ZUxpc3RlbmVyKGxpc3RlbmVyKSk7XG4gICAgfVxufVxuXG5mdW5jdGlvbiB2ZXJzaW9uVG9OdW1iZXIoczogc3RyaW5nKTogbnVtYmVyIHtcbiAgICBjb25zdCBwYXJ0cyA9IGAke3MgfHwgJyd9YC5zcGxpdCgnLicpXG4gICAgICAgIC5tYXAoeCA9PiBOdW1iZXIoeCkpXG4gICAgICAgIC5zbGljZSgwLCAzKTtcbiAgICB3aGlsZSAocGFydHMubGVuZ3RoIDwgMykge1xuICAgICAgICBwYXJ0cy5wdXNoKDApO1xuICAgIH1cbiAgICByZXR1cm4gcGFydHNbMF0gKiAxMDAwMDAwICsgcGFydHNbMV0gKiAxMDAwICsgcGFydHNbMl07XG59XG5cbmZ1bmN0aW9uIHJlc29sdmVTZXJ2ZXJJbmZvKHZlcnNpb25TdHJpbmc6IHN0cmluZyB8IG51bGwgfCB0eXBlb2YgdW5kZWZpbmVkKTogU2VydmVySW5mbyB7XG4gICAgY29uc3QgdmVyc2lvbiA9IHZlcnNpb25Ub051bWJlcih2ZXJzaW9uU3RyaW5nIHx8ICcwLjI0LjQnKTtcbiAgICByZXR1cm4ge1xuICAgICAgICB2ZXJzaW9uLFxuICAgICAgICBzdXBwb3J0c09wZXJhdGlvbklkOiB2ZXJzaW9uID4gMjQwMDQsXG4gICAgICAgIHN1cHBvcnRzQWdncmVnYXRpb25zOiB2ZXJzaW9uID49IDI1MDAwLFxuICAgICAgICBzdXBwb3J0c1RpbWU6IHZlcnNpb24gPj0gMjYwMDMsXG4gICAgICAgIHRpbWVEZWx0YTogbnVsbCxcbiAgICB9O1xufVxuXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBUT05RdWVyaWVzTW9kdWxlIGV4dGVuZHMgVE9OTW9kdWxlIGltcGxlbWVudHMgVE9OUXVlcmllcyB7XG4gICAgdHJhbnNhY3Rpb25zOiBUT05RQ29sbGVjdGlvbjtcbiAgICBtZXNzYWdlczogVE9OUUNvbGxlY3Rpb247XG4gICAgYmxvY2tzOiBUT05RQ29sbGVjdGlvbjtcbiAgICBhY2NvdW50czogVE9OUUNvbGxlY3Rpb247XG4gICAgYmxvY2tzX3NpZ25hdHVyZXM6IFRPTlFDb2xsZWN0aW9uO1xuXG4gICAgY29uZmlnOiBUT05Db25maWdNb2R1bGU7XG5cbiAgICBncmFwaHFsQ2xpZW50Q3JlYXRpb246ID9NdWx0aWNhc3RQcm9taXNlPEFwb2xsb0NsaWVudD47XG4gICAgZ3JhcGhxbENsaWVudDogP0Fwb2xsb0NsaWVudDtcbiAgICBncmFwaHFsQ2xpZW50Q29uZmlnOiA/R3JhcGhRTENsaWVudENvbmZpZztcblxuICAgIG92ZXJyaWRlV3NVcmw6ID9zdHJpbmc7XG4gICAgb3BlcmF0aW9uSWRQcmVmaXg6IHN0cmluZztcbiAgICBvcGVyYXRpb25JZFN1ZmZpeDogbnVtYmVyO1xuICAgIHNlcnZlckluZm86IFNlcnZlckluZm87XG5cbiAgICBjb25zdHJ1Y3Rvcihjb250ZXh0OiBUT05Nb2R1bGVDb250ZXh0KSB7XG4gICAgICAgIHN1cGVyKGNvbnRleHQpO1xuICAgICAgICB0aGlzLmdyYXBocWxDbGllbnQgPSBudWxsO1xuICAgICAgICB0aGlzLmdyYXBocWxDbGllbnRDcmVhdGlvbiA9IG51bGw7XG4gICAgICAgIHRoaXMuZ3JhcGhxbENsaWVudENvbmZpZyA9IG51bGw7XG4gICAgICAgIHRoaXMub3ZlcnJpZGVXc1VybCA9IG51bGw7XG4gICAgICAgIHRoaXMub3BlcmF0aW9uSWRQcmVmaXggPSAoRGF0ZS5ub3coKSAlIDYwMDAwKS50b1N0cmluZygxNik7XG4gICAgICAgIGZvciAobGV0IGkgPSAwOyBpIDwgMTA7IGkgKz0gMSkge1xuICAgICAgICAgICAgdGhpcy5vcGVyYXRpb25JZFByZWZpeCA9XG4gICAgICAgICAgICAgICAgYCR7dGhpcy5vcGVyYXRpb25JZFByZWZpeH0ke01hdGgucm91bmQoTWF0aC5yYW5kb20oKSAqIDI1NilcbiAgICAgICAgICAgICAgICAgICAgLnRvU3RyaW5nKDE2KX1gO1xuICAgICAgICB9XG4gICAgICAgIHRoaXMub3BlcmF0aW9uSWRTdWZmaXggPSAxO1xuICAgICAgICB0aGlzLnNlcnZlckluZm8gPSByZXNvbHZlU2VydmVySW5mbygpO1xuICAgIH1cblxuICAgIGFzeW5jIHNldHVwKCkge1xuICAgICAgICB0aGlzLmNvbmZpZyA9IHRoaXMuY29udGV4dC5nZXRNb2R1bGUoVE9OQ29uZmlnTW9kdWxlKTtcbiAgICAgICAgdGhpcy50cmFuc2FjdGlvbnMgPSBuZXcgVE9OUXVlcmllc01vZHVsZUNvbGxlY3Rpb24odGhpcywgJ3RyYW5zYWN0aW9ucycsICdUcmFuc2FjdGlvbicpO1xuICAgICAgICB0aGlzLm1lc3NhZ2VzID0gbmV3IFRPTlF1ZXJpZXNNb2R1bGVDb2xsZWN0aW9uKHRoaXMsICdtZXNzYWdlcycsICdNZXNzYWdlJyk7XG4gICAgICAgIHRoaXMuYmxvY2tzID0gbmV3IFRPTlF1ZXJpZXNNb2R1bGVDb2xsZWN0aW9uKHRoaXMsICdibG9ja3MnLCAnQmxvY2snKTtcbiAgICAgICAgdGhpcy5hY2NvdW50cyA9IG5ldyBUT05RdWVyaWVzTW9kdWxlQ29sbGVjdGlvbih0aGlzLCAnYWNjb3VudHMnLCAnQWNjb3VudCcpO1xuICAgICAgICB0aGlzLmJsb2Nrc19zaWduYXR1cmVzID0gbmV3IFRPTlF1ZXJpZXNNb2R1bGVDb2xsZWN0aW9uKHRoaXMsICdibG9ja3Nfc2lnbmF0dXJlcycsICdCbG9ja1NpZ25hdHVyZXMnKTtcbiAgICB9XG5cbiAgICBhc3luYyBkZXRlY3RSZWRpcmVjdChmZXRjaDogYW55LCBzb3VyY2VVcmw6IHN0cmluZyk6IFByb21pc2U8c3RyaW5nPiB7XG4gICAgICAgIGNvbnN0IHJlc3BvbnNlID0gYXdhaXQgZmV0Y2goc291cmNlVXJsKTtcbiAgICAgICAgdHJ5IHtcbiAgICAgICAgICAgIGNvbnN0IHJlc3BvbnNlVGV4dCA9IGF3YWl0IHJlc3BvbnNlLnRleHQoKTtcbiAgICAgICAgICAgIGNvbnN0IHJlc3BvbnNlSnNvbiA9IEpTT04ucGFyc2UocmVzcG9uc2VUZXh0KTtcbiAgICAgICAgICAgIHRoaXMuc2VydmVySW5mbyA9IHJlc29sdmVTZXJ2ZXJJbmZvKHJlc3BvbnNlSnNvbi5kYXRhLmluZm8udmVyc2lvbik7XG4gICAgICAgIH0gY2F0Y2gge1xuICAgICAgICB9XG4gICAgICAgIGlmIChyZXNwb25zZS5yZWRpcmVjdGVkID09PSB0cnVlKSB7XG4gICAgICAgICAgICByZXR1cm4gcmVzcG9uc2UudXJsO1xuICAgICAgICB9XG4gICAgICAgIGlmIChyZXNwb25zZS5yZWRpcmVjdGVkID09PSBmYWxzZSkge1xuICAgICAgICAgICAgcmV0dXJuICcnO1xuICAgICAgICB9XG4gICAgICAgIGNvbnN0IHNvdXJjZUxvY2F0aW9uID0gVVJMUGFydHMucGFyc2Uoc291cmNlVXJsKVxuICAgICAgICAgICAgLmZpeFF1ZXJ5KF8gPT4gJycpXG4gICAgICAgICAgICAudG9TdHJpbmcoKVxuICAgICAgICAgICAgLnRvTG93ZXJDYXNlKCk7XG4gICAgICAgIGNvbnN0IHJlc3BvbnNlTG9jYXRpb24gPSBVUkxQYXJ0cy5wYXJzZShyZXNwb25zZS51cmwpXG4gICAgICAgICAgICAuZml4UXVlcnkoXyA9PiAnJylcbiAgICAgICAgICAgIC50b1N0cmluZygpXG4gICAgICAgICAgICAudG9Mb3dlckNhc2UoKTtcbiAgICAgICAgcmV0dXJuIHJlc3BvbnNlTG9jYXRpb24gIT09IHNvdXJjZUxvY2F0aW9uID8gcmVzcG9uc2UudXJsIDogJyc7XG4gICAgfVxuXG4gICAgYXN5bmMgZ2V0Q2xpZW50Q29uZmlnKCk6IFByb21pc2U8R3JhcGhRTENsaWVudENvbmZpZz4ge1xuICAgICAgICBjb25zdCBjb25maWcgPSB0aGlzLmNvbmZpZztcbiAgICAgICAgY29uc3QgY2xpZW50UGxhdGZvcm0gPSBUT05DbGllbnQuY2xpZW50UGxhdGZvcm07XG4gICAgICAgIGlmICghY2xpZW50UGxhdGZvcm0pIHtcbiAgICAgICAgICAgIHRocm93IEVycm9yKCdUT04gQ2xpZW50IGRvZXMgbm90IGNvbmZpZ3VyZWQnKTtcbiAgICAgICAgfVxuICAgICAgICBjb25zdCBmZXRjaCA9IGNsaWVudFBsYXRmb3JtLmZldGNoO1xuXG4gICAgICAgIGZ1bmN0aW9uIGdldENvbmZpZ0ZvclNlcnZlcihzZXJ2ZXI6IHN0cmluZyk6IEdyYXBoUUxDbGllbnRDb25maWcge1xuICAgICAgICAgICAgY29uc3QgaHR0cFBhcnRzID0gVVJMUGFydHMucGFyc2Uoc2VydmVyKVxuICAgICAgICAgICAgICAgIC5maXhQcm90b2NvbCh4ID0+ICh4ID09PSAnaHR0cDovLycgPyB4IDogJ2h0dHBzOi8vJykpXG4gICAgICAgICAgICAgICAgLmZpeFBhdGgoeCA9PiBgJHt4fS9ncmFwaHFsYCk7XG4gICAgICAgICAgICBjb25zdCBodHRwID0gaHR0cFBhcnRzLnRvU3RyaW5nKCk7XG4gICAgICAgICAgICBjb25zdCB3cyA9IGh0dHBQYXJ0c1xuICAgICAgICAgICAgICAgIC5maXhQcm90b2NvbCh4ID0+ICh4ID09PSAnaHR0cDovLycgPyAnd3M6Ly8nIDogJ3dzczovLycpKVxuICAgICAgICAgICAgICAgIC50b1N0cmluZygpO1xuICAgICAgICAgICAgcmV0dXJuIHtcbiAgICAgICAgICAgICAgICBodHRwVXJsOiBodHRwLFxuICAgICAgICAgICAgICAgIHdzVXJsOiB3cyxcbiAgICAgICAgICAgICAgICBmZXRjaDogY2xpZW50UGxhdGZvcm0uZmV0Y2gsXG4gICAgICAgICAgICAgICAgV2ViU29ja2V0OiBjbGllbnRQbGF0Zm9ybS5XZWJTb2NrZXQsXG4gICAgICAgICAgICB9O1xuICAgICAgICB9XG5cbiAgICAgICAgZm9yIChjb25zdCBzZXJ2ZXIgb2YgY29uZmlnLmRhdGEuc2VydmVycykge1xuICAgICAgICAgICAgY29uc3QgY2xpZW50Q29uZmlnID0gZ2V0Q29uZmlnRm9yU2VydmVyKHNlcnZlcik7XG4gICAgICAgICAgICB0cnkge1xuICAgICAgICAgICAgICAgIC8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSBuby1hd2FpdC1pbi1sb29wXG4gICAgICAgICAgICAgICAgY29uc3QgcmVkaXJlY3RlZCA9IGF3YWl0IHRoaXMuZGV0ZWN0UmVkaXJlY3QoXG4gICAgICAgICAgICAgICAgICAgIGZldGNoLFxuICAgICAgICAgICAgICAgICAgICBgJHtjbGllbnRDb25maWcuaHR0cFVybH0/cXVlcnk9JTdCaW5mbyU3QnZlcnNpb24lN0QlN0RgLFxuICAgICAgICAgICAgICAgICk7XG4gICAgICAgICAgICAgICAgaWYgKHJlZGlyZWN0ZWQgIT09ICcnKSB7XG4gICAgICAgICAgICAgICAgICAgIGNvbnN0IGh0dHBQYXJ0cyA9IFVSTFBhcnRzLnBhcnNlKHJlZGlyZWN0ZWQpXG4gICAgICAgICAgICAgICAgICAgICAgICAuZml4UXVlcnkoXyA9PiAnJyk7XG4gICAgICAgICAgICAgICAgICAgIGNsaWVudENvbmZpZy5odHRwVXJsID0gaHR0cFBhcnRzLnRvU3RyaW5nKCk7XG4gICAgICAgICAgICAgICAgICAgIGNsaWVudENvbmZpZy53c1VybCA9IGh0dHBQYXJ0c1xuICAgICAgICAgICAgICAgICAgICAgICAgLmZpeFByb3RvY29sKHggPT4gKHggPT09ICdodHRwOi8vJyA/ICd3czovLycgOiAnd3NzOi8vJykpXG4gICAgICAgICAgICAgICAgICAgICAgICAudG9TdHJpbmcoKTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgcmV0dXJuIGNsaWVudENvbmZpZztcbiAgICAgICAgICAgIH0gY2F0Y2ggKGVycm9yKSB7XG4gICAgICAgICAgICAgICAgY29uc29sZS5sb2coYFtnZXRDbGllbnRDb25maWddIGZvciBzZXJ2ZXIgXCIke3NlcnZlcn1cIiBmYWlsZWRgLCB7XG4gICAgICAgICAgICAgICAgICAgIGNsaWVudENvbmZpZzoge1xuICAgICAgICAgICAgICAgICAgICAgICAgaHR0cFVybDogY2xpZW50Q29uZmlnLmh0dHBVcmwsXG4gICAgICAgICAgICAgICAgICAgICAgICB3c1VybDogY2xpZW50Q29uZmlnLndzVXJsLFxuICAgICAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgICAgICBlcnJvclN0cmluZzogZXJyb3IudG9TdHJpbmcoKSxcbiAgICAgICAgICAgICAgICAgICAgZXJyb3IsXG4gICAgICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgICAgcmV0dXJuIGdldENvbmZpZ0ZvclNlcnZlcihjb25maWcuZGF0YS5zZXJ2ZXJzWzBdKTtcbiAgICB9XG5cbiAgICBhc3luYyBnZXRTZXJ2ZXJJbmZvKHNwYW4/OiBTcGFuIHwgU3BhbkNvbnRleHQpOiBQcm9taXNlPFNlcnZlckluZm8+IHtcbiAgICAgICAgYXdhaXQgdGhpcy5ncmFwaHFsQ2xpZW50UmVxdWlyZWQoc3Bhbik7XG4gICAgICAgIHJldHVybiB0aGlzLnNlcnZlckluZm87XG4gICAgfVxuXG4gICAgYXN5bmMgc2VydmVyVGltZURlbHRhKHNwYW4/OiBTcGFuIHwgU3BhbkNvbnRleHQpOiBQcm9taXNlPG51bWJlcj4ge1xuICAgICAgICBjb25zdCBzZXJ2ZXJJbmZvID0gYXdhaXQgdGhpcy5nZXRTZXJ2ZXJJbmZvKHNwYW4pO1xuICAgICAgICBjb25zdCBjbGllbnRDb25maWcgPSB0aGlzLmdyYXBocWxDbGllbnRDb25maWc7XG4gICAgICAgIGlmIChjbGllbnRDb25maWcgJiYgc2VydmVySW5mby5zdXBwb3J0c1RpbWUgJiYgc2VydmVySW5mby50aW1lRGVsdGEgPT09IG51bGwpIHtcbiAgICAgICAgICAgIHRyeSB7XG4gICAgICAgICAgICAgICAgY29uc3Qgc3RhcnQgPSBEYXRlLm5vdygpO1xuICAgICAgICAgICAgICAgIGNvbnN0IHJlc3BvbnNlID0gYXdhaXQgY2xpZW50Q29uZmlnLmZldGNoKGAke2NsaWVudENvbmZpZy5odHRwVXJsfT9xdWVyeT0lN0JpbmZvJTdCdGltZSU3RCU3RGApO1xuICAgICAgICAgICAgICAgIGNvbnN0IGVuZCA9IERhdGUubm93KCk7XG4gICAgICAgICAgICAgICAgY29uc3QgcmVzcG9uc2VEYXRhID0gYXdhaXQgcmVzcG9uc2UuanNvbigpO1xuICAgICAgICAgICAgICAgIGNvbnN0IHNlcnZlclRpbWUgPSByZXNwb25zZURhdGEuZGF0YS5pbmZvLnRpbWU7XG4gICAgICAgICAgICAgICAgc2VydmVySW5mby50aW1lRGVsdGEgPSBNYXRoLnJvdW5kKHNlcnZlclRpbWUgLSAoc3RhcnQgKyAoZW5kIC0gc3RhcnQpIC8gMikpO1xuICAgICAgICAgICAgfSBjYXRjaCAoZXJyb3IpIHtcbiAgICAgICAgICAgICAgICBjb25zb2xlLmxvZygnPj4+JywgZXJyb3IpO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICAgIHJldHVybiBzZXJ2ZXJJbmZvLnRpbWVEZWx0YSB8fCAwO1xuICAgIH1cblxuICAgIGFzeW5jIHNlcnZlck5vdyhzcGFuPzogU3BhbiB8IFNwYW5Db250ZXh0KTogUHJvbWlzZTxudW1iZXI+IHtcbiAgICAgICAgY29uc3QgdGltZURlbHRhID0gYXdhaXQgdGhpcy5zZXJ2ZXJUaW1lRGVsdGEoc3Bhbik7XG4gICAgICAgIHJldHVybiBEYXRlLm5vdygpICsgdGltZURlbHRhO1xuICAgIH1cblxuICAgIGRyb3BTZXJ2ZXJUaW1lRGVsdGEoKSB7XG4gICAgICAgIGlmICh0aGlzLnNlcnZlckluZm8pIHtcbiAgICAgICAgICAgIHRoaXMuc2VydmVySW5mby50aW1lRGVsdGEgPSBudWxsO1xuICAgICAgICB9XG4gICAgfVxuXG4gICAgZ2VuZXJhdGVPcGVyYXRpb25JZCgpOiBzdHJpbmcge1xuICAgICAgICB0aGlzLm9wZXJhdGlvbklkU3VmZml4ICs9IDE7XG4gICAgICAgIHJldHVybiBgJHt0aGlzLm9wZXJhdGlvbklkUHJlZml4fSR7dGhpcy5vcGVyYXRpb25JZFN1ZmZpeC50b1N0cmluZygxNil9YDtcbiAgICB9XG5cbiAgICBhc3luYyBmaW5pc2hPcGVyYXRpb25zKG9wZXJhdGlvbklkczogc3RyaW5nW10pIHtcbiAgICAgICAgaWYgKG9wZXJhdGlvbklkcy5sZW5ndGggPT09IDApIHtcbiAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgfVxuICAgICAgICBpZiAoIShhd2FpdCB0aGlzLmdldFNlcnZlckluZm8oKSkuc3VwcG9ydHNPcGVyYXRpb25JZCkge1xuICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICB9XG4gICAgICAgIGF3YWl0IHRoaXMuZ3JhcGhxbE11dGF0aW9uKGBtdXRhdGlvbiBmaW5pc2hPcGVyYXRpb25zKCRvcGVyYXRpb25JZHM6IFtTdHJpbmddKSB7XG4gICAgICAgICAgICAgICAgZmluaXNoT3BlcmF0aW9ucyhvcGVyYXRpb25JZHM6ICRvcGVyYXRpb25JZHMpXG4gICAgICAgICAgICB9YCwge1xuICAgICAgICAgICAgb3BlcmF0aW9uSWRzLFxuICAgICAgICB9KTtcbiAgICB9XG5cbiAgICBhc3luYyBnZXRBY2NvdW50c0NvdW50KHBhcmVudFNwYW4/OiAoU3BhbiB8IFNwYW5Db250ZXh0KSk6IFByb21pc2U8bnVtYmVyPiB7XG4gICAgICAgIGNvbnN0IHJlc3VsdCA9IGF3YWl0IHRoaXMucXVlcnkoJ3F1ZXJ5e2dldEFjY291bnRzQ291bnR9JywgdW5kZWZpbmVkLCBwYXJlbnRTcGFuKTtcbiAgICAgICAgcmV0dXJuIHJlc3VsdC5kYXRhLmdldEFjY291bnRzQ291bnQ7XG4gICAgfVxuXG4gICAgYXN5bmMgZ2V0VHJhbnNhY3Rpb25zQ291bnQocGFyZW50U3Bhbj86IChTcGFuIHwgU3BhbkNvbnRleHQpKTogUHJvbWlzZTxudW1iZXI+IHtcbiAgICAgICAgY29uc3QgcmVzdWx0ID0gYXdhaXQgdGhpcy5xdWVyeSgncXVlcnl7Z2V0VHJhbnNhY3Rpb25zQ291bnR9JywgdW5kZWZpbmVkLCBwYXJlbnRTcGFuKTtcbiAgICAgICAgcmV0dXJuIHJlc3VsdC5kYXRhLmdldFRyYW5zYWN0aW9uc0NvdW50O1xuICAgIH1cblxuICAgIGFzeW5jIGdldEFjY291bnRzVG90YWxCYWxhbmNlKHBhcmVudFNwYW4/OiAoU3BhbiB8IFNwYW5Db250ZXh0KSk6IFByb21pc2U8c3RyaW5nPiB7XG4gICAgICAgIGNvbnN0IHJlc3VsdCA9IGF3YWl0IHRoaXMucXVlcnkoJ3F1ZXJ5e2dldEFjY291bnRzVG90YWxCYWxhbmNlfScsIHVuZGVmaW5lZCwgcGFyZW50U3Bhbik7XG4gICAgICAgIHJldHVybiByZXN1bHQuZGF0YS5nZXRBY2NvdW50c1RvdGFsQmFsYW5jZTtcbiAgICB9XG5cbiAgICBhc3luYyBwb3N0UmVxdWVzdHMocmVxdWVzdHM6IFJlcXVlc3RbXSwgcGFyZW50U3Bhbj86IChTcGFuIHwgU3BhbkNvbnRleHQpKTogUHJvbWlzZTxhbnk+IHtcbiAgICAgICAgcmV0dXJuIHRoaXMuY29udGV4dC50cmFjZSgncXVlcmllcy5wb3N0UmVxdWVzdHMnLCBhc3luYyAoc3BhbikgPT4ge1xuICAgICAgICAgICAgcmV0dXJuIHRoaXMuZ3JhcGhxbE11dGF0aW9uKGBtdXRhdGlvbiBwb3N0UmVxdWVzdHMoJHJlcXVlc3RzOiBbUmVxdWVzdF0pIHtcbiAgICAgICAgICAgICAgICBwb3N0UmVxdWVzdHMocmVxdWVzdHM6ICRyZXF1ZXN0cylcbiAgICAgICAgICAgIH1gLCB7XG4gICAgICAgICAgICAgICAgcmVxdWVzdHMsXG4gICAgICAgICAgICB9LCBzcGFuKTtcbiAgICAgICAgfSwgcGFyZW50U3Bhbik7XG4gICAgfVxuXG4gICAgYXN5bmMgbXV0YXRpb24oXG4gICAgICAgIHFsOiBzdHJpbmcsXG4gICAgICAgIHZhcmlhYmxlczogeyBbc3RyaW5nXTogYW55IH0gPSB7fSxcbiAgICAgICAgcGFyZW50U3Bhbj86IChTcGFuIHwgU3BhbkNvbnRleHQpLFxuICAgICk6IFByb21pc2U8YW55PiB7XG4gICAgICAgIHJldHVybiB0aGlzLmNvbnRleHQudHJhY2UoJ3F1ZXJpZXMubXV0YXRpb24nLCBhc3luYyAoc3BhbjogU3BhbikgPT4ge1xuICAgICAgICAgICAgc3Bhbi5zZXRUYWcoJ3BhcmFtcycsIHtcbiAgICAgICAgICAgICAgICBtdXRhdGlvbjogcWwsXG4gICAgICAgICAgICAgICAgdmFyaWFibGVzLFxuICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICByZXR1cm4gdGhpcy5ncmFwaHFsTXV0YXRpb24ocWwsIHZhcmlhYmxlcywgc3Bhbik7XG4gICAgICAgIH0sIHBhcmVudFNwYW4pO1xuICAgIH1cblxuICAgIGFzeW5jIHF1ZXJ5KFxuICAgICAgICBxbDogc3RyaW5nLFxuICAgICAgICB2YXJpYWJsZXM6IHsgW3N0cmluZ106IGFueSB9ID0ge30sXG4gICAgICAgIHBhcmVudFNwYW4/OiAoU3BhbiB8IFNwYW5Db250ZXh0KSxcbiAgICApOiBQcm9taXNlPGFueT4ge1xuICAgICAgICByZXR1cm4gdGhpcy5jb250ZXh0LnRyYWNlKCdxdWVyaWVzLnF1ZXJ5JywgYXN5bmMgKHNwYW46IFNwYW4pID0+IHtcbiAgICAgICAgICAgIHNwYW4uc2V0VGFnKCdwYXJhbXMnLCB7XG4gICAgICAgICAgICAgICAgcXVlcnk6IHFsLFxuICAgICAgICAgICAgICAgIHZhcmlhYmxlcyxcbiAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgcmV0dXJuIHRoaXMuZ3JhcGhxbFF1ZXJ5KHFsLCB2YXJpYWJsZXMsIHNwYW4pO1xuICAgICAgICB9LCBwYXJlbnRTcGFuKTtcbiAgICB9XG5cbiAgICBhc3luYyBncmFwaHFsTXV0YXRpb24ocWw6IHN0cmluZywgdmFyaWFibGVzOiB7IFtzdHJpbmddOiBhbnkgfSA9IHt9LCBzcGFuOiBTcGFuKTogUHJvbWlzZTxhbnk+IHtcbiAgICAgICAgY29uc3QgbXV0YXRpb24gPSBncWwoW3FsXSk7XG4gICAgICAgIHJldHVybiB0aGlzLmdyYXBoUWwoKGNsaWVudCkgPT4gY2xpZW50Lm11dGF0ZSh7XG4gICAgICAgICAgICBtdXRhdGlvbixcbiAgICAgICAgICAgIHZhcmlhYmxlcyxcbiAgICAgICAgICAgIGNvbnRleHQ6IHtcbiAgICAgICAgICAgICAgICB0cmFjZVNwYW46IHNwYW4sXG4gICAgICAgICAgICB9LFxuICAgICAgICB9KSk7XG4gICAgfVxuXG4gICAgc3RhdGljIGlzTmV0d29ya0Vycm9yKGVycm9yOiBhbnkpOiBib29sZWFuIHtcbiAgICAgICAgY29uc3QgbmV0d29ya0Vycm9yID0gZXJyb3IubmV0d29ya0Vycm9yO1xuICAgICAgICBpZiAoIW5ldHdvcmtFcnJvcikge1xuICAgICAgICAgICAgcmV0dXJuIGZhbHNlO1xuICAgICAgICB9XG4gICAgICAgIGlmICgnZXJybm8nIGluIG5ldHdvcmtFcnJvcikge1xuICAgICAgICAgICAgcmV0dXJuIHRydWU7XG4gICAgICAgIH1cbiAgICAgICAgcmV0dXJuICEoJ3Jlc3BvbnNlJyBpbiBuZXR3b3JrRXJyb3IgfHwgJ3Jlc3VsdCcgaW4gbmV0d29ya0Vycm9yKTtcbiAgICB9XG5cbiAgICBhc3luYyBncmFwaHFsUXVlcnkocWw6IHN0cmluZywgdmFyaWFibGVzOiB7IFtzdHJpbmddOiBhbnkgfSA9IHt9LCBzcGFuOiBTcGFuKTogUHJvbWlzZTxhbnk+IHtcbiAgICAgICAgY29uc3QgcXVlcnkgPSBncWwoW3FsXSk7XG4gICAgICAgIHJldHVybiB0aGlzLmdyYXBoUWwoYXN5bmMgKGNsaWVudCkgPT4ge1xuICAgICAgICAgICAgbGV0IG5leHRUaW1lb3V0ID0gMTAwO1xuICAgICAgICAgICAgY29uc3Qgc3RhcnRUaW1lID0gRGF0ZS5ub3coKTtcbiAgICAgICAgICAgIHdoaWxlICh0cnVlKSB7XG4gICAgICAgICAgICAgICAgdHJ5IHtcbiAgICAgICAgICAgICAgICAgICAgcmV0dXJuIGF3YWl0IGNsaWVudC5xdWVyeSh7XG4gICAgICAgICAgICAgICAgICAgICAgICBxdWVyeSxcbiAgICAgICAgICAgICAgICAgICAgICAgIHZhcmlhYmxlcyxcbiAgICAgICAgICAgICAgICAgICAgICAgIGNvbnRleHQ6IHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB0cmFjZVNwYW46IHNwYW4sXG4gICAgICAgICAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgICAgICB9KTtcbiAgICAgICAgICAgICAgICB9IGNhdGNoIChlcnJvcikge1xuICAgICAgICAgICAgICAgICAgICBpZiAoVE9OUXVlcmllc01vZHVsZS5pc05ldHdvcmtFcnJvcihlcnJvcilcbiAgICAgICAgICAgICAgICAgICAgICAgICYmICF0aGlzLmNvbmZpZy5pc05ldHdvcmtUaW1lb3V0RXhwaXJlZFNpbmNlKHN0YXJ0VGltZSkpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIGNvbnNvbGUud2FybihlcnJvci5uZXR3b3JrRXJyb3IpO1xuICAgICAgICAgICAgICAgICAgICAgICAgY29uc3QgdGltZW91dCA9IG5leHRUaW1lb3V0O1xuICAgICAgICAgICAgICAgICAgICAgICAgYXdhaXQgbmV3IFByb21pc2UoeCA9PiBzZXRUaW1lb3V0KHgsIHRpbWVvdXQpKTtcbiAgICAgICAgICAgICAgICAgICAgICAgIGlmIChuZXh0VGltZW91dCA8IDMyMDApIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBuZXh0VGltZW91dCAqPSAyO1xuICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAgICAgICAgICAgdGhyb3cgZXJyb3I7XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG4gICAgICAgIH0sIHNwYW4pO1xuICAgIH1cblxuICAgIGFzeW5jIGdyYXBoUWwocmVxdWVzdDogKGNsaWVudDogQXBvbGxvQ2xpZW50KSA9PiBQcm9taXNlPGFueT4sIHNwYW46IFNwYW4pOiBQcm9taXNlPGFueT4ge1xuICAgICAgICBjb25zdCBjbGllbnQgPSBhd2FpdCB0aGlzLmdyYXBocWxDbGllbnRSZXF1aXJlZChzcGFuKTtcbiAgICAgICAgdHJ5IHtcbiAgICAgICAgICAgIHJldHVybiBhd2FpdCByZXF1ZXN0KGNsaWVudCk7XG4gICAgICAgIH0gY2F0Y2ggKGVycm9yKSB7XG4gICAgICAgICAgICBjb25zdCBncWxFcnIgPSBlcnJvci5ncmFwaFFMRXJyb3JzICYmIGVycm9yLmdyYXBoUUxFcnJvcnNbMF07XG4gICAgICAgICAgICBpZiAoZ3FsRXJyKSB7XG4gICAgICAgICAgICAgICAgY29uc3QgY2xpZW50RXJyID0gbmV3IEVycm9yKGdxbEVyci5tZXNzYWdlKTtcbiAgICAgICAgICAgICAgICBjb25zdCBncWxFeGMgPSAoZ3FsRXJyLmV4dGVuc2lvbnMgJiYgZ3FsRXJyLmV4dGVuc2lvbnMuZXhjZXB0aW9uKSB8fCB7fTtcbiAgICAgICAgICAgICAgICAoY2xpZW50RXJyOiBhbnkpLm51bWJlciA9IGdxbEV4Yy5jb2RlIHx8IDA7XG4gICAgICAgICAgICAgICAgKGNsaWVudEVycjogYW55KS5jb2RlID0gZ3FsRXhjLmNvZGUgfHwgMDtcbiAgICAgICAgICAgICAgICAoY2xpZW50RXJyOiBhbnkpLnNvdXJjZSA9IGdxbEV4Yy5zb3VyY2UgfHwgJ2NsaWVudCc7XG4gICAgICAgICAgICAgICAgdGhyb3cgY2xpZW50RXJyO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgY29uc3QgZXJyb3JzID0gZXJyb3JcbiAgICAgICAgICAgICAgICAmJiBlcnJvci5uZXR3b3JrRXJyb3JcbiAgICAgICAgICAgICAgICAmJiBlcnJvci5uZXR3b3JrRXJyb3IucmVzdWx0XG4gICAgICAgICAgICAgICAgJiYgZXJyb3IubmV0d29ya0Vycm9yLnJlc3VsdC5lcnJvcnM7XG4gICAgICAgICAgICBpZiAoZXJyb3JzKSB7XG4gICAgICAgICAgICAgICAgdGhyb3cgVE9OQ2xpZW50RXJyb3IucXVlcnlGYWlsZWQoZXJyb3JzKTtcbiAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgICAgdGhyb3cgZXJyb3I7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICBhc3luYyBncmFwaHFsQ2xpZW50UmVxdWlyZWQocGFyZW50U3Bhbj86IFNwYW4gfCBTcGFuQ29udGV4dCk6IFByb21pc2U8QXBvbGxvQ2xpZW50PiB7XG4gICAgICAgIGlmICh0aGlzLmdyYXBocWxDbGllbnQpIHtcbiAgICAgICAgICAgIHJldHVybiB0aGlzLmdyYXBocWxDbGllbnQ7XG4gICAgICAgIH1cbiAgICAgICAgaWYgKHRoaXMuZ3JhcGhxbENsaWVudENyZWF0aW9uKSB7XG4gICAgICAgICAgICBhd2FpdCB0aGlzLmdyYXBocWxDbGllbnRDcmVhdGlvbi5saXN0ZW4oKTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIGNvbnN0IGNyZWF0aW9uID0gbmV3IE11bHRpY2FzdFByb21pc2UoKTtcbiAgICAgICAgICAgIHRoaXMuZ3JhcGhxbENsaWVudENyZWF0aW9uID0gY3JlYXRpb247XG4gICAgICAgICAgICB0cnkge1xuICAgICAgICAgICAgICAgIGF3YWl0IHRoaXMuY29udGV4dC50cmFjZSgnc2V0dXAgY2xpZW50JywgKHNwYW4pID0+IHtcbiAgICAgICAgICAgICAgICAgICAgcmV0dXJuIHRoaXMuY3JlYXRlR3JhcGhxbENsaWVudChzcGFuKTtcbiAgICAgICAgICAgICAgICB9LCBwYXJlbnRTcGFuKTtcbiAgICAgICAgICAgICAgICB0aGlzLmdyYXBocWxDbGllbnRDcmVhdGlvbiA9IG51bGw7XG4gICAgICAgICAgICAgICAgY3JlYXRpb24ucmVzb2x2ZSh0aGlzLmdyYXBocWxDbGllbnQpO1xuICAgICAgICAgICAgfSBjYXRjaCAoZXJyb3IpIHtcbiAgICAgICAgICAgICAgICB0aGlzLmdyYXBocWxDbGllbnRDcmVhdGlvbiA9IG51bGw7XG4gICAgICAgICAgICAgICAgY3JlYXRpb24ucmVqZWN0KGVycm9yKTtcbiAgICAgICAgICAgICAgICB0aHJvdyBlcnJvcjtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgICByZXR1cm4gdGhpcy5ncmFwaHFsQ2xpZW50O1xuICAgIH1cblxuICAgIGFzeW5jIGNyZWF0ZUdyYXBocWxDbGllbnQoc3BhbjogU3BhbiB8IFNwYW5Db250ZXh0KSB7XG4gICAgICAgIGNvbnN0IHVzZUh0dHAgPSAhdGhpcy5jb25maWcuZGF0YS51c2VXZWJTb2NrZXRGb3JRdWVyaWVzO1xuICAgICAgICBsZXQgY2xpZW50Q29uZmlnID0gYXdhaXQgdGhpcy5nZXRDbGllbnRDb25maWcoKTtcbiAgICAgICAgbGV0IHdzTGluazogP1dlYlNvY2tldExpbmsgPSBudWxsO1xuICAgICAgICBsZXQgaHR0cExpbms6ID9IdHRwTGluayA9IG51bGw7XG5cbiAgICAgICAgY29uc3Qgc3Vic09wdGlvbnMgPSB0aGlzLmNvbmZpZy50cmFjZXIuaW5qZWN0KHNwYW4sIEZPUk1BVF9URVhUX01BUCwge30pO1xuICAgICAgICBjb25zdCBzdWJzY3JpcHRpb25DbGllbnQgPSBuZXcgU3Vic2NyaXB0aW9uQ2xpZW50KFxuICAgICAgICAgICAgY2xpZW50Q29uZmlnLndzVXJsLFxuICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgIHRpbWVvdXQ6IEtFRVBfQUxJVkVfVElNRU9VVCxcbiAgICAgICAgICAgICAgICByZWNvbm5lY3Q6IHRydWUsXG4gICAgICAgICAgICAgICAgY29ubmVjdGlvblBhcmFtczogKCkgPT4gKHtcbiAgICAgICAgICAgICAgICAgICAgYWNjZXNzS2V5OiB0aGlzLmNvbmZpZy5kYXRhICYmIHRoaXMuY29uZmlnLmRhdGEuYWNjZXNzS2V5LFxuICAgICAgICAgICAgICAgICAgICBoZWFkZXJzOiBzdWJzT3B0aW9ucyxcbiAgICAgICAgICAgICAgICB9KSxcbiAgICAgICAgICAgIH0sXG4gICAgICAgICAgICBjbGllbnRDb25maWcuV2ViU29ja2V0LFxuICAgICAgICApO1xuICAgICAgICBzdWJzY3JpcHRpb25DbGllbnQub25SZWNvbm5lY3RlZCgoKSA9PiB7XG4gICAgICAgICAgICBjb25zb2xlLmxvZygnW1RPTkNsaWVudC5xdWVyaWVzXScsICdXZWJTb2NrZXQgUmVjb25uZWN0ZWQnKTtcbiAgICAgICAgfSk7XG4gICAgICAgIGxldCBkZXRlY3RpbmdSZWRpcmVjdGlvbiA9IGZhbHNlO1xuICAgICAgICBzdWJzY3JpcHRpb25DbGllbnQub25FcnJvcigoKSA9PiB7XG4gICAgICAgICAgICBjb25zb2xlLmxvZygnW1RPTkNsaWVudC5xdWVyaWVzXScsICdXZWJTb2NrZXQgRmFpbGVkJyk7XG4gICAgICAgICAgICBpZiAoZGV0ZWN0aW5nUmVkaXJlY3Rpb24pIHtcbiAgICAgICAgICAgICAgICByZXR1cm47XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICAoYXN5bmMgKCkgPT4ge1xuICAgICAgICAgICAgICAgIGRldGVjdGluZ1JlZGlyZWN0aW9uID0gdHJ1ZTtcbiAgICAgICAgICAgICAgICB0cnkge1xuICAgICAgICAgICAgICAgICAgICBjb25zdCBuZXdDb25maWcgPSBhd2FpdCB0aGlzLmdldENsaWVudENvbmZpZygpO1xuICAgICAgICAgICAgICAgICAgICBjb25zdCBjb25maWdJc0NoYW5nZWQgPSBuZXdDb25maWcuaHR0cFVybCAhPT0gY2xpZW50Q29uZmlnLmh0dHBVcmxcbiAgICAgICAgICAgICAgICAgICAgICAgIHx8IG5ld0NvbmZpZy53c1VybCAhPT0gY2xpZW50Q29uZmlnLndzVXJsO1xuICAgICAgICAgICAgICAgICAgICBpZiAoY29uZmlnSXNDaGFuZ2VkKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICBjb25zb2xlLmxvZygnW1RPTkNsaWVudC5xdWVyaWVzXScsICdDbGllbnQgY29uZmlnIGNoYW5nZWQnKTtcbiAgICAgICAgICAgICAgICAgICAgICAgIGNsaWVudENvbmZpZyA9IG5ld0NvbmZpZztcbiAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMuZ3JhcGhxbENsaWVudENvbmZpZyA9IGNsaWVudENvbmZpZztcbiAgICAgICAgICAgICAgICAgICAgICAgIHN1YnNjcmlwdGlvbkNsaWVudC51cmwgPSBuZXdDb25maWcud3NVcmw7XG4gICAgICAgICAgICAgICAgICAgICAgICBpZiAod3NMaW5rKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgd3NMaW5rLnVybCA9IG5ld0NvbmZpZy53c1VybDtcbiAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICAgIGlmIChodHRwTGluaykge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGh0dHBMaW5rLnVyaSA9IG5ld0NvbmZpZy5odHRwVXJsO1xuICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgfSBjYXRjaCAoZXJyKSB7XG4gICAgICAgICAgICAgICAgICAgIGNvbnNvbGUubG9nKCdbVE9OQ2xpZW50LnF1ZXJpZXNdIHJlZGlyZWN0aW9uIGRldGVjdG9yIGZhaWxlZCcsIGVycik7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIGRldGVjdGluZ1JlZGlyZWN0aW9uID0gZmFsc2U7XG4gICAgICAgICAgICB9KSgpO1xuICAgICAgICB9KTtcbiAgICAgICAgc3Vic2NyaXB0aW9uQ2xpZW50Lm1heENvbm5lY3RUaW1lR2VuZXJhdG9yLmR1cmF0aW9uID0gKCkgPT4ge1xuICAgICAgICAgICAgcmV0dXJuIHN1YnNjcmlwdGlvbkNsaWVudC5tYXhDb25uZWN0VGltZUdlbmVyYXRvci5tYXg7XG4gICAgICAgIH07XG5cbiAgICAgICAgY29uc3QgdHJhY2VyTGluayA9IGF3YWl0IHNldENvbnRleHQoKF8sIHJlcSkgPT4ge1xuICAgICAgICAgICAgY29uc3QgcmVzb2x2ZWRTcGFuID0gKHJlcSAmJiByZXEudHJhY2VTcGFuKSB8fCBzcGFuO1xuICAgICAgICAgICAgcmVxLmhlYWRlcnMgPSB7fTtcbiAgICAgICAgICAgIHRoaXMuY29uZmlnLnRyYWNlci5pbmplY3QocmVzb2x2ZWRTcGFuLCBGT1JNQVRfVEVYVF9NQVAsIHJlcS5oZWFkZXJzKTtcbiAgICAgICAgICAgIGNvbnN0IGFjY2Vzc0tleSA9IHRoaXMuY29uZmlnLmRhdGEgJiYgdGhpcy5jb25maWcuZGF0YS5hY2Nlc3NLZXk7XG4gICAgICAgICAgICBpZiAoYWNjZXNzS2V5KSB7XG4gICAgICAgICAgICAgICAgcmVxLmhlYWRlcnMuYWNjZXNzS2V5ID0gYWNjZXNzS2V5O1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgcmV0dXJuIHtcbiAgICAgICAgICAgICAgICBoZWFkZXJzOiByZXEuaGVhZGVycyxcbiAgICAgICAgICAgIH07XG4gICAgICAgIH0pO1xuICAgICAgICBjb25zdCB3cmFwTGluayA9IChsaW5rOiBBcG9sbG9MaW5rKTogQXBvbGxvTGluayA9PiB0cmFjZXJMaW5rLmNvbmNhdChsaW5rKTtcbiAgICAgICAgY29uc3QgaXNTdWJzY3JpcHRpb24gPSAoeyBxdWVyeSB9KSA9PiB7XG4gICAgICAgICAgICBjb25zdCBkZWZpbml0aW9uID0gZ2V0TWFpbkRlZmluaXRpb24ocXVlcnkpO1xuICAgICAgICAgICAgcmV0dXJuIChcbiAgICAgICAgICAgICAgICBkZWZpbml0aW9uLmtpbmQgPT09ICdPcGVyYXRpb25EZWZpbml0aW9uJ1xuICAgICAgICAgICAgICAgICYmIGRlZmluaXRpb24ub3BlcmF0aW9uID09PSAnc3Vic2NyaXB0aW9uJ1xuICAgICAgICAgICAgKTtcbiAgICAgICAgfTtcbiAgICAgICAgd3NMaW5rID0gbmV3IFdlYlNvY2tldExpbmsoc3Vic2NyaXB0aW9uQ2xpZW50KTtcbiAgICAgICAgaHR0cExpbmsgPSB1c2VIdHRwXG4gICAgICAgICAgICA/IG5ldyBIdHRwTGluayh7XG4gICAgICAgICAgICAgICAgdXJpOiBjbGllbnRDb25maWcuaHR0cFVybCxcbiAgICAgICAgICAgICAgICBmZXRjaDogY2xpZW50Q29uZmlnLmZldGNoLFxuICAgICAgICAgICAgfSlcbiAgICAgICAgICAgIDogbnVsbDtcblxuICAgICAgICBjb25zdCBsaW5rID0gaHR0cExpbmtcbiAgICAgICAgICAgID8gc3BsaXQoaXNTdWJzY3JpcHRpb24sIHdyYXBMaW5rKHdzTGluayksIHdyYXBMaW5rKGh0dHBMaW5rKSlcbiAgICAgICAgICAgIDogd3JhcExpbmsod3NMaW5rKTtcbiAgICAgICAgdGhpcy5ncmFwaHFsQ2xpZW50Q29uZmlnID0gY2xpZW50Q29uZmlnO1xuICAgICAgICB0aGlzLmdyYXBocWxDbGllbnQgPSBuZXcgQXBvbGxvQ2xpZW50KHtcbiAgICAgICAgICAgIGNhY2hlOiBuZXcgSW5NZW1vcnlDYWNoZSh7fSksXG4gICAgICAgICAgICBsaW5rLFxuICAgICAgICAgICAgZGVmYXVsdE9wdGlvbnM6IHtcbiAgICAgICAgICAgICAgICB3YXRjaFF1ZXJ5OiB7XG4gICAgICAgICAgICAgICAgICAgIGZldGNoUG9saWN5OiAnbm8tY2FjaGUnLFxuICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgcXVlcnk6IHtcbiAgICAgICAgICAgICAgICAgICAgZmV0Y2hQb2xpY3k6ICduby1jYWNoZScsXG4gICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgIH0sXG4gICAgICAgIH0pO1xuICAgIH1cblxuICAgIGFzeW5jIGNsb3NlKCkge1xuICAgICAgICBpZiAodGhpcy5ncmFwaHFsQ2xpZW50KSB7XG4gICAgICAgICAgICBjb25zdCBjbGllbnQgPSB0aGlzLmdyYXBocWxDbGllbnQ7XG4gICAgICAgICAgICB0aGlzLmdyYXBocWxDbGllbnQgPSBudWxsO1xuICAgICAgICAgICAgY2xpZW50LnN0b3AoKTtcbiAgICAgICAgICAgIGF3YWl0IGNsaWVudC5jbGVhclN0b3JlKCk7XG4gICAgICAgIH1cbiAgICB9XG59XG5cblxuY2xhc3MgVE9OUXVlcmllc01vZHVsZUNvbGxlY3Rpb24gaW1wbGVtZW50cyBUT05RQ29sbGVjdGlvbiB7XG4gICAgbW9kdWxlOiBUT05RdWVyaWVzTW9kdWxlO1xuXG4gICAgY29sbGVjdGlvbk5hbWU6IHN0cmluZztcblxuICAgIHR5cGVOYW1lOiBzdHJpbmc7XG5cbiAgICBjb25zdHJ1Y3RvcihcbiAgICAgICAgbW9kdWxlOiBUT05RdWVyaWVzTW9kdWxlLFxuICAgICAgICBjb2xsZWN0aW9uTmFtZTogc3RyaW5nLFxuICAgICAgICB0eXBlTmFtZTogc3RyaW5nLFxuICAgICkge1xuICAgICAgICB0aGlzLm1vZHVsZSA9IG1vZHVsZTtcbiAgICAgICAgdGhpcy5jb2xsZWN0aW9uTmFtZSA9IGNvbGxlY3Rpb25OYW1lO1xuICAgICAgICB0aGlzLnR5cGVOYW1lID0gdHlwZU5hbWU7XG4gICAgfVxuXG4gICAgYXN5bmMgcXVlcnkoXG4gICAgICAgIC4uLmFyZ3NcbiAgICAgICAgLypcbiAgICAgICAgICAgIGZpbHRlck9yUGFyYW1zOiBhbnkgfCBUT05RdWVyeVBhcmFtcyxcbiAgICAgICAgICAgIHJlc3VsdDogc3RyaW5nLFxuICAgICAgICAgICAgb3JkZXJCeT86IE9yZGVyQnlbXSxcbiAgICAgICAgICAgIGxpbWl0PzogbnVtYmVyLFxuICAgICAgICAgICAgdGltZW91dD86IG51bWJlcixcbiAgICAgICAgICAgIHBhcmVudFNwYW4/OiAoU3BhbiB8IFNwYW5Db250ZXh0KVxuICAgICAgICAgKi9cbiAgICApOiBQcm9taXNlPGFueT4ge1xuICAgICAgICBjb25zdCB7XG4gICAgICAgICAgICBmaWx0ZXIsXG4gICAgICAgICAgICByZXN1bHQsXG4gICAgICAgICAgICBvcmRlckJ5LFxuICAgICAgICAgICAgbGltaXQsXG4gICAgICAgICAgICB0aW1lb3V0LFxuICAgICAgICAgICAgb3BlcmF0aW9uSWQsXG4gICAgICAgICAgICBwYXJlbnRTcGFuLFxuICAgICAgICB9ID0gcmVzb2x2ZVBhcmFtczxUT05RdWVyeVBhcmFtcz4oYXJncywgJ2ZpbHRlcicsICgpID0+ICh7XG4gICAgICAgICAgICBmaWx0ZXI6IGFyZ3NbMF0sXG4gICAgICAgICAgICByZXN1bHQ6IChhcmdzWzFdOiBhbnkpLFxuICAgICAgICAgICAgb3JkZXJCeTogKGFyZ3NbMl06IGFueSksXG4gICAgICAgICAgICBsaW1pdDogKGFyZ3NbM106IGFueSksXG4gICAgICAgICAgICB0aW1lb3V0OiAoYXJnc1s0XTogYW55KSxcbiAgICAgICAgICAgIHBhcmVudFNwYW46IGFyZ3NbNV0sXG4gICAgICAgIH0pKTtcbiAgICAgICAgcmV0dXJuIHRoaXMubW9kdWxlLmNvbnRleHQudHJhY2UoYCR7dGhpcy5jb2xsZWN0aW9uTmFtZX0ucXVlcnlgLCBhc3luYyAoc3BhbikgPT4ge1xuICAgICAgICAgICAgc3Bhbi5zZXRUYWcoJ3BhcmFtcycsIHtcbiAgICAgICAgICAgICAgICBmaWx0ZXIsXG4gICAgICAgICAgICAgICAgcmVzdWx0LFxuICAgICAgICAgICAgICAgIG9yZGVyQnksXG4gICAgICAgICAgICAgICAgbGltaXQsXG4gICAgICAgICAgICAgICAgdGltZW91dCxcbiAgICAgICAgICAgICAgICBvcGVyYXRpb25JZCxcbiAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgY29uc3QgdXNlT3BlcmF0aW9uSWQgPSBvcGVyYXRpb25JZFxuICAgICAgICAgICAgICAgICYmIChhd2FpdCB0aGlzLm1vZHVsZS5nZXRTZXJ2ZXJJbmZvKHNwYW4pKS5zdXBwb3J0c09wZXJhdGlvbklkO1xuICAgICAgICAgICAgY29uc3QgYyA9IHRoaXMuY29sbGVjdGlvbk5hbWU7XG4gICAgICAgICAgICBjb25zdCB0ID0gdGhpcy50eXBlTmFtZTtcbiAgICAgICAgICAgIGNvbnN0IHFsID0gYFxuICAgICAgICAgICAgcXVlcnkgJHtjfShcbiAgICAgICAgICAgICAgICAkZmlsdGVyOiAke3R9RmlsdGVyLFxuICAgICAgICAgICAgICAgICRvcmRlckJ5OiBbUXVlcnlPcmRlckJ5XSwgXG4gICAgICAgICAgICAgICAgJGxpbWl0OiBJbnQsIFxuICAgICAgICAgICAgICAgICR0aW1lb3V0OiBGbG9hdFxuICAgICAgICAgICAgICAgICR7dXNlT3BlcmF0aW9uSWQgPyAnLCAkb3BlcmF0aW9uSWQ6IFN0cmluZycgOiAnJ31cbiAgICAgICAgICAgICApIHtcbiAgICAgICAgICAgICAgICAke2N9KFxuICAgICAgICAgICAgICAgICAgICBmaWx0ZXI6ICRmaWx0ZXIsIFxuICAgICAgICAgICAgICAgICAgICBvcmRlckJ5OiAkb3JkZXJCeSwgXG4gICAgICAgICAgICAgICAgICAgIGxpbWl0OiAkbGltaXQsIFxuICAgICAgICAgICAgICAgICAgICB0aW1lb3V0OiAkdGltZW91dFxuICAgICAgICAgICAgICAgICAgICAke3VzZU9wZXJhdGlvbklkID8gJywgb3BlcmF0aW9uSWQ6ICRvcGVyYXRpb25JZCcgOiAnJ31cbiAgICAgICAgICAgICAgICApIHsgJHtyZXN1bHR9IH1cbiAgICAgICAgICAgIH1gO1xuICAgICAgICAgICAgY29uc3QgdmFyaWFibGVzOiB7IFtzdHJpbmddOiBhbnkgfSA9IHtcbiAgICAgICAgICAgICAgICBmaWx0ZXIsXG4gICAgICAgICAgICAgICAgb3JkZXJCeSxcbiAgICAgICAgICAgICAgICBsaW1pdCxcbiAgICAgICAgICAgIH07XG4gICAgICAgICAgICBpZiAodXNlT3BlcmF0aW9uSWQpIHtcbiAgICAgICAgICAgICAgICB2YXJpYWJsZXMub3BlcmF0aW9uSWQgPSBvcGVyYXRpb25JZDtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGlmICh0aW1lb3V0KSB7XG4gICAgICAgICAgICAgICAgdmFyaWFibGVzLnRpbWVvdXQgPSBNYXRoLm1pbihNQVhfVElNRU9VVCwgdGltZW91dCk7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICByZXR1cm4gKGF3YWl0IHRoaXMubW9kdWxlLmdyYXBocWxRdWVyeShxbCwgdmFyaWFibGVzLCBzcGFuKSkuZGF0YVtjXTtcbiAgICAgICAgfSwgcGFyZW50U3Bhbik7XG4gICAgfVxuXG4gICAgYXN5bmMgYWdncmVnYXRlKFxuICAgICAgICBwYXJhbXM6IFRPTlF1ZXJ5QWdncmVnYXRlUGFyYW1zLFxuICAgICk6IFByb21pc2U8c3RyaW5nW10+IHtcbiAgICAgICAgcmV0dXJuIHRoaXMubW9kdWxlLmNvbnRleHQudHJhY2UoYCR7dGhpcy5jb2xsZWN0aW9uTmFtZX0uYWdncmVnYXRlYCwgYXN5bmMgKHNwYW4pID0+IHtcbiAgICAgICAgICAgIHNwYW4uc2V0VGFnKCdwYXJhbXMnLCB7XG4gICAgICAgICAgICAgICAgZmlsdGVyOiBwYXJhbXMuZmlsdGVyLFxuICAgICAgICAgICAgICAgIGZpZWxkczogcGFyYW1zLmZpZWxkcyxcbiAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgaWYgKCEoYXdhaXQgdGhpcy5tb2R1bGUuZ2V0U2VydmVySW5mbyhzcGFuKSkuc3VwcG9ydHNBZ2dyZWdhdGlvbnMpIHtcbiAgICAgICAgICAgICAgICB0aHJvdyBUT05DbGllbnRFcnJvci5zZXJ2ZXJEb2VzbnRTdXBwb3J0QWdncmVnYXRpb25zKCk7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBjb25zdCB0ID0gdGhpcy50eXBlTmFtZTtcbiAgICAgICAgICAgIGNvbnN0IHEgPSB0aGlzLnR5cGVOYW1lLmVuZHNXaXRoKCdzJykgPyBgYWdncmVnYXRlJHt0fWAgOiBgYWdncmVnYXRlJHt0fXNgO1xuICAgICAgICAgICAgY29uc3QgcWwgPSBgXG4gICAgICAgICAgICBxdWVyeSAke3F9KFxuICAgICAgICAgICAgICAgICRmaWx0ZXI6ICR7dH1GaWx0ZXIsXG4gICAgICAgICAgICAgICAgJGZpZWxkczogW0ZpZWxkQWdncmVnYXRpb25dIFxuICAgICAgICAgICAgICkge1xuICAgICAgICAgICAgICAgICR7cX0oXG4gICAgICAgICAgICAgICAgICAgIGZpbHRlcjogJGZpbHRlciwgXG4gICAgICAgICAgICAgICAgICAgIGZpZWxkczogJGZpZWxkcyBcbiAgICAgICAgICAgICAgICApXG4gICAgICAgICAgICB9YDtcbiAgICAgICAgICAgIGNvbnN0IHZhcmlhYmxlczogeyBbc3RyaW5nXTogYW55IH0gPSB7XG4gICAgICAgICAgICAgICAgZmlsdGVyOiBwYXJhbXMuZmlsdGVyLFxuICAgICAgICAgICAgICAgIGZpZWxkczogcGFyYW1zLmZpZWxkcyxcbiAgICAgICAgICAgIH07XG4gICAgICAgICAgICByZXR1cm4gKGF3YWl0IHRoaXMubW9kdWxlLmdyYXBocWxRdWVyeShxbCwgdmFyaWFibGVzLCBzcGFuKSkuZGF0YVtxXTtcbiAgICAgICAgfSwgcGFyYW1zLnBhcmVudFNwYW4pO1xuICAgIH1cblxuICAgIHN1YnNjcmliZShcbiAgICAgICAgLi4uYXJnc1xuICAgICAgICAvKlxuICAgICAgICBmaWx0ZXJPclBhcmFtczogYW55IHwgVE9OU3Vic2NyaWJlUGFyYW1zLFxuICAgICAgICByZXN1bHQ/OiBzdHJpbmcsXG4gICAgICAgIG9uRG9jRXZlbnQ/OiBEb2NFdmVudCxcbiAgICAgICAgb25FcnJvcj86IChlcnI6IEVycm9yKSA9PiB2b2lkXG4gICAgICAgICAqL1xuICAgICk6IFN1YnNjcmlwdGlvbiB7XG4gICAgICAgIGNvbnN0IHtcbiAgICAgICAgICAgIGZpbHRlcixcbiAgICAgICAgICAgIHJlc3VsdCxcbiAgICAgICAgICAgIG9uRG9jRXZlbnQsXG4gICAgICAgICAgICBvbkVycm9yLFxuICAgICAgICB9ID0gcmVzb2x2ZVBhcmFtczxUT05TdWJzY3JpYmVQYXJhbXM+KGFyZ3MsICdmaWx0ZXInLCAoKSA9PiAoe1xuICAgICAgICAgICAgZmlsdGVyOiBhcmdzWzBdLFxuICAgICAgICAgICAgcmVzdWx0OiAoYXJnc1sxXTogYW55KSxcbiAgICAgICAgICAgIG9uRG9jRXZlbnQ6IChhcmdzWzJdOiBhbnkpLFxuICAgICAgICAgICAgb25FcnJvcjogKGFyZ3NbM106IGFueSksXG4gICAgICAgIH0pKTtcbiAgICAgICAgY29uc3Qgc3BhbiA9IHRoaXMubW9kdWxlLmNvbmZpZy50cmFjZXIuc3RhcnRTcGFuKCdUT05RdWVyaWVzTW9kdWxlLmpzOnN1YnNjcmliZSAnKTtcbiAgICAgICAgc3Bhbi5zZXRUYWcoVGFncy5TUEFOX0tJTkQsICdjbGllbnQnKTtcbiAgICAgICAgY29uc3QgdGV4dCA9IGBzdWJzY3JpcHRpb24gJHt0aGlzLmNvbGxlY3Rpb25OYW1lfSgkZmlsdGVyOiAke3RoaXMudHlwZU5hbWV9RmlsdGVyKSB7XG4gICAgICAgICAgICAke3RoaXMuY29sbGVjdGlvbk5hbWV9KGZpbHRlcjogJGZpbHRlcikgeyAke3Jlc3VsdH0gfVxuICAgICAgICB9YDtcbiAgICAgICAgY29uc3QgcXVlcnkgPSBncWwoW3RleHRdKTtcbiAgICAgICAgbGV0IHN1YnNjcmlwdGlvbiA9IG51bGw7XG4gICAgICAgIChhc3luYyAoKSA9PiB7XG4gICAgICAgICAgICB0cnkge1xuICAgICAgICAgICAgICAgIGNvbnN0IGNsaWVudCA9IGF3YWl0IHRoaXMubW9kdWxlLmdyYXBocWxDbGllbnRSZXF1aXJlZChzcGFuKTtcbiAgICAgICAgICAgICAgICBjb25zdCBvYnNlcnZhYmxlID0gY2xpZW50LnN1YnNjcmliZSh7XG4gICAgICAgICAgICAgICAgICAgIHF1ZXJ5LFxuICAgICAgICAgICAgICAgICAgICB2YXJpYWJsZXM6IHtcbiAgICAgICAgICAgICAgICAgICAgICAgIGZpbHRlcixcbiAgICAgICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICB9KTtcbiAgICAgICAgICAgICAgICBzdWJzY3JpcHRpb24gPSBvYnNlcnZhYmxlLnN1YnNjcmliZSgobWVzc2FnZSkgPT4ge1xuICAgICAgICAgICAgICAgICAgICBvbkRvY0V2ZW50KCdpbnNlcnQvdXBkYXRlJywgbWVzc2FnZS5kYXRhW3RoaXMuY29sbGVjdGlvbk5hbWVdKTtcbiAgICAgICAgICAgICAgICB9KTtcbiAgICAgICAgICAgIH0gY2F0Y2ggKGVycm9yKSB7XG4gICAgICAgICAgICAgICAgc3Bhbi5sb2coe1xuICAgICAgICAgICAgICAgICAgICBldmVudDogJ2ZhaWxlZCcsXG4gICAgICAgICAgICAgICAgICAgIHBheWxvYWQ6IGVycm9yLFxuICAgICAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgICAgIGlmIChvbkVycm9yKSB7XG4gICAgICAgICAgICAgICAgICAgIG9uRXJyb3IoZXJyb3IpO1xuICAgICAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgICAgICAgIGNvbnNvbGUubG9nKCdUT04gQ2xpZW50IHN1YnNjcmlwdGlvbiBlcnJvcicsIGVycm9yKTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG4gICAgICAgIH0pKCk7XG4gICAgICAgIHJldHVybiB7XG4gICAgICAgICAgICB1bnN1YnNjcmliZTogKCkgPT4ge1xuICAgICAgICAgICAgICAgIGlmIChzdWJzY3JpcHRpb24pIHtcbiAgICAgICAgICAgICAgICAgICAgc3Vic2NyaXB0aW9uLnVuc3Vic2NyaWJlKCk7XG4gICAgICAgICAgICAgICAgICAgIHNwYW4uZmluaXNoKCk7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfSxcbiAgICAgICAgfTtcbiAgICB9XG5cbiAgICBhc3luYyB3YWl0Rm9yKFxuICAgICAgICAuLi5hcmdzXG4gICAgICAgIC8qXG4gICAgICAgIGZpbHRlck9yUGFyYW1zOiBhbnkgfCBUT05XYWl0Rm9yUGFyYW1zLFxuICAgICAgICByZXN1bHQ6IHN0cmluZyxcbiAgICAgICAgdGltZW91dD86IG51bWJlcixcbiAgICAgICAgcGFyZW50U3Bhbj86IChTcGFuIHwgU3BhbkNvbnRleHQpXG4gICAgICAgICAqL1xuICAgICk6IFByb21pc2U8YW55PiB7XG4gICAgICAgIGNvbnN0IHtcbiAgICAgICAgICAgIGZpbHRlcixcbiAgICAgICAgICAgIHJlc3VsdCxcbiAgICAgICAgICAgIHRpbWVvdXQ6IHBhcmFtc1RpbWVvdXQsXG4gICAgICAgICAgICBwYXJlbnRTcGFuLFxuICAgICAgICAgICAgb3BlcmF0aW9uSWQsXG4gICAgICAgIH0gPSByZXNvbHZlUGFyYW1zPFRPTldhaXRGb3JQYXJhbXM+KGFyZ3MsICdmaWx0ZXInLCAoKSA9PiAoe1xuICAgICAgICAgICAgZmlsdGVyOiBhcmdzWzBdLFxuICAgICAgICAgICAgcmVzdWx0OiAoYXJnc1sxXTogYW55KSxcbiAgICAgICAgICAgIHRpbWVvdXQ6IChhcmdzWzJdOiBhbnkpLFxuICAgICAgICAgICAgcGFyZW50U3BhbjogYXJnc1szXSxcbiAgICAgICAgfSkpO1xuICAgICAgICBjb25zdCB0aW1lb3V0ID0gcGFyYW1zVGltZW91dCB8fCB0aGlzLm1vZHVsZS5jb25maWcud2FpdEZvclRpbWVvdXQoKTtcbiAgICAgICAgY29uc3QgZG9jcyA9IGF3YWl0IHRoaXMucXVlcnkoe1xuICAgICAgICAgICAgZmlsdGVyLFxuICAgICAgICAgICAgcmVzdWx0LFxuICAgICAgICAgICAgdGltZW91dCxcbiAgICAgICAgICAgIHBhcmVudFNwYW4sXG4gICAgICAgICAgICBvcGVyYXRpb25JZCxcbiAgICAgICAgfSk7XG4gICAgICAgIGlmIChkb2NzLmxlbmd0aCA+IDApIHtcbiAgICAgICAgICAgIHJldHVybiBkb2NzWzBdO1xuICAgICAgICB9XG4gICAgICAgIHRocm93IFRPTkNsaWVudEVycm9yLndhaXRGb3JUaW1lb3V0KCk7XG4gICAgfVxufVxuXG5UT05RdWVyaWVzTW9kdWxlLm1vZHVsZU5hbWUgPSAnVE9OUXVlcmllc01vZHVsZSc7XG4iXX0=