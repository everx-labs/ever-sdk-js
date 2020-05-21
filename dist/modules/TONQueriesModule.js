"use strict";

var _interopRequireWildcard = require("@babel/runtime/helpers/interopRequireWildcard");

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = exports.MAX_TIMEOUT = void 0;

var _regenerator = _interopRequireDefault(require("@babel/runtime/regenerator"));

var _asyncToGenerator2 = _interopRequireDefault(require("@babel/runtime/helpers/asyncToGenerator"));

var _assertThisInitialized2 = _interopRequireDefault(require("@babel/runtime/helpers/assertThisInitialized"));

var _inherits2 = _interopRequireDefault(require("@babel/runtime/helpers/inherits"));

var _possibleConstructorReturn2 = _interopRequireDefault(require("@babel/runtime/helpers/possibleConstructorReturn"));

var _getPrototypeOf2 = _interopRequireDefault(require("@babel/runtime/helpers/getPrototypeOf"));

var _classCallCheck2 = _interopRequireDefault(require("@babel/runtime/helpers/classCallCheck"));

var _createClass2 = _interopRequireDefault(require("@babel/runtime/helpers/createClass"));

var _defineProperty2 = _interopRequireDefault(require("@babel/runtime/helpers/defineProperty"));

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

function _createForOfIteratorHelper(o) { if (typeof Symbol === "undefined" || o[Symbol.iterator] == null) { if (Array.isArray(o) || (o = _unsupportedIterableToArray(o))) { var i = 0; var F = function F() {}; return { s: F, n: function n() { if (i >= o.length) return { done: true }; return { done: false, value: o[i++] }; }, e: function e(_e) { throw _e; }, f: F }; } throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); } var it, normalCompletion = true, didErr = false, err; return { s: function s() { it = o[Symbol.iterator](); }, n: function n() { var step = it.next(); normalCompletion = step.done; return step; }, e: function e(_e2) { didErr = true; err = _e2; }, f: function f() { try { if (!normalCompletion && it["return"] != null) it["return"](); } finally { if (didErr) throw err; } } }; }

function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }

function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }

function _createSuper(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct(); return function () { var Super = (0, _getPrototypeOf2["default"])(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = (0, _getPrototypeOf2["default"])(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return (0, _possibleConstructorReturn2["default"])(this, result); }; }

function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Date.prototype.toString.call(Reflect.construct(Date, [], function () {})); return true; } catch (e) { return false; } }

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
    (0, _classCallCheck2["default"])(this, MulticastPromise);
    (0, _defineProperty2["default"])(this, "listeners", void 0);
    (0, _defineProperty2["default"])(this, "onComplete", void 0);
    this.listeners = [];
    this.onComplete = null;
  }

  (0, _createClass2["default"])(MulticastPromise, [{
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
  (0, _inherits2["default"])(TONQueriesModule, _TONModule);

  var _super = _createSuper(TONQueriesModule);

  function TONQueriesModule(context) {
    var _this;

    (0, _classCallCheck2["default"])(this, TONQueriesModule);
    _this = _super.call(this, context);
    (0, _defineProperty2["default"])((0, _assertThisInitialized2["default"])(_this), "transactions", void 0);
    (0, _defineProperty2["default"])((0, _assertThisInitialized2["default"])(_this), "messages", void 0);
    (0, _defineProperty2["default"])((0, _assertThisInitialized2["default"])(_this), "blocks", void 0);
    (0, _defineProperty2["default"])((0, _assertThisInitialized2["default"])(_this), "accounts", void 0);
    (0, _defineProperty2["default"])((0, _assertThisInitialized2["default"])(_this), "blocks_signatures", void 0);
    (0, _defineProperty2["default"])((0, _assertThisInitialized2["default"])(_this), "config", void 0);
    (0, _defineProperty2["default"])((0, _assertThisInitialized2["default"])(_this), "graphqlClientCreation", void 0);
    (0, _defineProperty2["default"])((0, _assertThisInitialized2["default"])(_this), "graphqlClient", void 0);
    (0, _defineProperty2["default"])((0, _assertThisInitialized2["default"])(_this), "graphqlClientConfig", void 0);
    (0, _defineProperty2["default"])((0, _assertThisInitialized2["default"])(_this), "overrideWsUrl", void 0);
    (0, _defineProperty2["default"])((0, _assertThisInitialized2["default"])(_this), "operationIdPrefix", void 0);
    (0, _defineProperty2["default"])((0, _assertThisInitialized2["default"])(_this), "operationIdSuffix", void 0);
    (0, _defineProperty2["default"])((0, _assertThisInitialized2["default"])(_this), "serverInfo", void 0);
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

  (0, _createClass2["default"])(TONQueriesModule, [{
    key: "setup",
    value: function () {
      var _setup = (0, _asyncToGenerator2["default"])( /*#__PURE__*/_regenerator["default"].mark(function _callee() {
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
      var _detectRedirect = (0, _asyncToGenerator2["default"])( /*#__PURE__*/_regenerator["default"].mark(function _callee2(fetch, sourceUrl) {
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
      var _getClientConfig = (0, _asyncToGenerator2["default"])( /*#__PURE__*/_regenerator["default"].mark(function _callee3() {
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
      var _getServerInfo = (0, _asyncToGenerator2["default"])( /*#__PURE__*/_regenerator["default"].mark(function _callee4(span) {
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
      var _serverTimeDelta = (0, _asyncToGenerator2["default"])( /*#__PURE__*/_regenerator["default"].mark(function _callee5(span) {
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
      var _serverNow = (0, _asyncToGenerator2["default"])( /*#__PURE__*/_regenerator["default"].mark(function _callee6(span) {
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
      var _finishOperations = (0, _asyncToGenerator2["default"])( /*#__PURE__*/_regenerator["default"].mark(function _callee7(operationIds) {
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
      var _getAccountsCount = (0, _asyncToGenerator2["default"])( /*#__PURE__*/_regenerator["default"].mark(function _callee8(parentSpan) {
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
      var _getTransactionsCount = (0, _asyncToGenerator2["default"])( /*#__PURE__*/_regenerator["default"].mark(function _callee9(parentSpan) {
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
      var _getAccountsTotalBalance = (0, _asyncToGenerator2["default"])( /*#__PURE__*/_regenerator["default"].mark(function _callee10(parentSpan) {
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
      var _postRequests = (0, _asyncToGenerator2["default"])( /*#__PURE__*/_regenerator["default"].mark(function _callee12(requests, parentSpan) {
        var _this2 = this;

        return _regenerator["default"].wrap(function _callee12$(_context12) {
          while (1) {
            switch (_context12.prev = _context12.next) {
              case 0:
                return _context12.abrupt("return", this.context.trace('queries.postRequests', /*#__PURE__*/function () {
                  var _ref = (0, _asyncToGenerator2["default"])( /*#__PURE__*/_regenerator["default"].mark(function _callee11(span) {
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
      var _mutation = (0, _asyncToGenerator2["default"])( /*#__PURE__*/_regenerator["default"].mark(function _callee14(ql) {
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
                  var _ref2 = (0, _asyncToGenerator2["default"])( /*#__PURE__*/_regenerator["default"].mark(function _callee13(span) {
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
      var _query = (0, _asyncToGenerator2["default"])( /*#__PURE__*/_regenerator["default"].mark(function _callee16(ql) {
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
                  var _ref3 = (0, _asyncToGenerator2["default"])( /*#__PURE__*/_regenerator["default"].mark(function _callee15(span) {
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
      var _graphqlMutation = (0, _asyncToGenerator2["default"])( /*#__PURE__*/_regenerator["default"].mark(function _callee17(ql) {
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
      var _graphqlQuery = (0, _asyncToGenerator2["default"])( /*#__PURE__*/_regenerator["default"].mark(function _callee20(ql) {
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
                  var _ref4 = (0, _asyncToGenerator2["default"])( /*#__PURE__*/_regenerator["default"].mark(function _callee19(client) {
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
      var _graphQl = (0, _asyncToGenerator2["default"])( /*#__PURE__*/_regenerator["default"].mark(function _callee21(request, span) {
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
      var _graphqlClientRequired = (0, _asyncToGenerator2["default"])( /*#__PURE__*/_regenerator["default"].mark(function _callee22(parentSpan) {
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
      var _createGraphqlClient = (0, _asyncToGenerator2["default"])( /*#__PURE__*/_regenerator["default"].mark(function _callee24(span) {
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

                  (0, _asyncToGenerator2["default"])( /*#__PURE__*/_regenerator["default"].mark(function _callee23() {
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
      var _close = (0, _asyncToGenerator2["default"])( /*#__PURE__*/_regenerator["default"].mark(function _callee25() {
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
    (0, _classCallCheck2["default"])(this, TONQueriesModuleCollection);
    (0, _defineProperty2["default"])(this, "module", void 0);
    (0, _defineProperty2["default"])(this, "collectionName", void 0);
    (0, _defineProperty2["default"])(this, "typeName", void 0);
    this.module = module;
    this.collectionName = collectionName;
    this.typeName = typeName;
  }

  (0, _createClass2["default"])(TONQueriesModuleCollection, [{
    key: "query",
    value: function () {
      var _query2 = (0, _asyncToGenerator2["default"])( /*#__PURE__*/_regenerator["default"].mark(function _callee27() {
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
                  var _ref7 = (0, _asyncToGenerator2["default"])( /*#__PURE__*/_regenerator["default"].mark(function _callee26(span) {
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
      var _aggregate = (0, _asyncToGenerator2["default"])( /*#__PURE__*/_regenerator["default"].mark(function _callee29(params) {
        var _this8 = this;

        return _regenerator["default"].wrap(function _callee29$(_context29) {
          while (1) {
            switch (_context29.prev = _context29.next) {
              case 0:
                return _context29.abrupt("return", this.module.context.trace("".concat(this.collectionName, ".aggregate"), /*#__PURE__*/function () {
                  var _ref8 = (0, _asyncToGenerator2["default"])( /*#__PURE__*/_regenerator["default"].mark(function _callee28(span) {
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
      (0, _asyncToGenerator2["default"])( /*#__PURE__*/_regenerator["default"].mark(function _callee30() {
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
      var _waitFor = (0, _asyncToGenerator2["default"])( /*#__PURE__*/_regenerator["default"].mark(function _callee31() {
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy9tb2R1bGVzL1RPTlF1ZXJpZXNNb2R1bGUuanMiXSwibmFtZXMiOlsiS0VFUF9BTElWRV9USU1FT1VUIiwiTUFYX1RJTUVPVVQiLCJyZXNvbHZlUGFyYW1zIiwiYXJncyIsInJlcXVpcmVkUGFyYW1OYW1lIiwicmVzb2x2ZUFyZ3MiLCJsZW5ndGgiLCJNdWx0aWNhc3RQcm9taXNlIiwibGlzdGVuZXJzIiwib25Db21wbGV0ZSIsImxpc3RlbmVyIiwicmVzb2x2ZSIsInJlamVjdCIsInB1c2giLCJQcm9taXNlIiwidmFsdWUiLCJjb21wbGV0ZSIsImVycm9yIiwiY29tcGxldGVMaXN0ZW5lciIsImZvckVhY2giLCJ2ZXJzaW9uVG9OdW1iZXIiLCJzIiwicGFydHMiLCJzcGxpdCIsIm1hcCIsIngiLCJOdW1iZXIiLCJzbGljZSIsInJlc29sdmVTZXJ2ZXJJbmZvIiwidmVyc2lvblN0cmluZyIsInZlcnNpb24iLCJzdXBwb3J0c09wZXJhdGlvbklkIiwic3VwcG9ydHNBZ2dyZWdhdGlvbnMiLCJzdXBwb3J0c1RpbWUiLCJ0aW1lRGVsdGEiLCJUT05RdWVyaWVzTW9kdWxlIiwiY29udGV4dCIsImdyYXBocWxDbGllbnQiLCJncmFwaHFsQ2xpZW50Q3JlYXRpb24iLCJncmFwaHFsQ2xpZW50Q29uZmlnIiwib3ZlcnJpZGVXc1VybCIsIm9wZXJhdGlvbklkUHJlZml4IiwiRGF0ZSIsIm5vdyIsInRvU3RyaW5nIiwiaSIsIk1hdGgiLCJyb3VuZCIsInJhbmRvbSIsIm9wZXJhdGlvbklkU3VmZml4Iiwic2VydmVySW5mbyIsImNvbmZpZyIsImdldE1vZHVsZSIsIlRPTkNvbmZpZ01vZHVsZSIsInRyYW5zYWN0aW9ucyIsIlRPTlF1ZXJpZXNNb2R1bGVDb2xsZWN0aW9uIiwibWVzc2FnZXMiLCJibG9ja3MiLCJhY2NvdW50cyIsImJsb2Nrc19zaWduYXR1cmVzIiwiZmV0Y2giLCJzb3VyY2VVcmwiLCJyZXNwb25zZSIsImpzb24iLCJkYXRhIiwiaW5mbyIsInJlZGlyZWN0ZWQiLCJ1cmwiLCJzb3VyY2VMb2NhdGlvbiIsIlVSTFBhcnRzIiwicGFyc2UiLCJmaXhRdWVyeSIsIl8iLCJ0b0xvd2VyQ2FzZSIsInJlc3BvbnNlTG9jYXRpb24iLCJnZXRDb25maWdGb3JTZXJ2ZXIiLCJzZXJ2ZXIiLCJodHRwUGFydHMiLCJmaXhQcm90b2NvbCIsImZpeFBhdGgiLCJodHRwIiwid3MiLCJodHRwVXJsIiwid3NVcmwiLCJjbGllbnRQbGF0Zm9ybSIsIldlYlNvY2tldCIsIlRPTkNsaWVudCIsIkVycm9yIiwic2VydmVycyIsImNsaWVudENvbmZpZyIsImRldGVjdFJlZGlyZWN0IiwiY29uc29sZSIsImxvZyIsImVycm9yU3RyaW5nIiwic3BhbiIsImdyYXBocWxDbGllbnRSZXF1aXJlZCIsImdldFNlcnZlckluZm8iLCJzdGFydCIsImVuZCIsInJlc3BvbnNlRGF0YSIsInNlcnZlclRpbWUiLCJ0aW1lIiwic2VydmVyVGltZURlbHRhIiwib3BlcmF0aW9uSWRzIiwiZ3JhcGhxbE11dGF0aW9uIiwicGFyZW50U3BhbiIsInF1ZXJ5IiwidW5kZWZpbmVkIiwicmVzdWx0IiwiZ2V0QWNjb3VudHNDb3VudCIsImdldFRyYW5zYWN0aW9uc0NvdW50IiwiZ2V0QWNjb3VudHNUb3RhbEJhbGFuY2UiLCJyZXF1ZXN0cyIsInRyYWNlIiwicWwiLCJ2YXJpYWJsZXMiLCJzZXRUYWciLCJtdXRhdGlvbiIsImdyYXBocWxRdWVyeSIsImdyYXBoUWwiLCJjbGllbnQiLCJtdXRhdGUiLCJ0cmFjZVNwYW4iLCJuZXh0VGltZW91dCIsImlzTmV0d29ya0Vycm9yIiwid2FybiIsIm5ldHdvcmtFcnJvciIsInRpbWVvdXQiLCJzZXRUaW1lb3V0IiwicmVxdWVzdCIsImdxbEVyciIsImdyYXBoUUxFcnJvcnMiLCJjbGllbnRFcnIiLCJtZXNzYWdlIiwiZ3FsRXhjIiwiZXh0ZW5zaW9ucyIsImV4Y2VwdGlvbiIsIm51bWJlciIsImNvZGUiLCJzb3VyY2UiLCJlcnJvcnMiLCJUT05DbGllbnRFcnJvciIsInF1ZXJ5RmFpbGVkIiwibGlzdGVuIiwiY3JlYXRpb24iLCJjcmVhdGVHcmFwaHFsQ2xpZW50IiwidXNlSHR0cCIsInVzZVdlYlNvY2tldEZvclF1ZXJpZXMiLCJnZXRDbGllbnRDb25maWciLCJ3c0xpbmsiLCJodHRwTGluayIsInN1YnNPcHRpb25zIiwidHJhY2VyIiwiaW5qZWN0IiwiRk9STUFUX1RFWFRfTUFQIiwic3Vic2NyaXB0aW9uQ2xpZW50IiwiU3Vic2NyaXB0aW9uQ2xpZW50IiwicmVjb25uZWN0IiwiY29ubmVjdGlvblBhcmFtcyIsImFjY2Vzc0tleSIsImhlYWRlcnMiLCJvblJlY29ubmVjdGVkIiwiZGV0ZWN0aW5nUmVkaXJlY3Rpb24iLCJvbkVycm9yIiwibmV3Q29uZmlnIiwiY29uZmlnSXNDaGFuZ2VkIiwidXJpIiwibWF4Q29ubmVjdFRpbWVHZW5lcmF0b3IiLCJkdXJhdGlvbiIsIm1heCIsInJlcSIsInJlc29sdmVkU3BhbiIsInRyYWNlckxpbmsiLCJ3cmFwTGluayIsImxpbmsiLCJjb25jYXQiLCJpc1N1YnNjcmlwdGlvbiIsImRlZmluaXRpb24iLCJraW5kIiwib3BlcmF0aW9uIiwiV2ViU29ja2V0TGluayIsIkh0dHBMaW5rIiwiQXBvbGxvQ2xpZW50IiwiY2FjaGUiLCJJbk1lbW9yeUNhY2hlIiwiZGVmYXVsdE9wdGlvbnMiLCJ3YXRjaFF1ZXJ5IiwiZmV0Y2hQb2xpY3kiLCJzdG9wIiwiY2xlYXJTdG9yZSIsIlRPTk1vZHVsZSIsIm1vZHVsZSIsImNvbGxlY3Rpb25OYW1lIiwidHlwZU5hbWUiLCJmaWx0ZXIiLCJvcmRlckJ5IiwibGltaXQiLCJvcGVyYXRpb25JZCIsInVzZU9wZXJhdGlvbklkIiwiYyIsInQiLCJtaW4iLCJwYXJhbXMiLCJmaWVsZHMiLCJzZXJ2ZXJEb2VzbnRTdXBwb3J0QWdncmVnYXRpb25zIiwicSIsImVuZHNXaXRoIiwib25Eb2NFdmVudCIsInN0YXJ0U3BhbiIsIlRhZ3MiLCJTUEFOX0tJTkQiLCJ0ZXh0Iiwic3Vic2NyaXB0aW9uIiwib2JzZXJ2YWJsZSIsInN1YnNjcmliZSIsImV2ZW50IiwicGF5bG9hZCIsInVuc3Vic2NyaWJlIiwiZmluaXNoIiwicGFyYW1zVGltZW91dCIsIndhaXRGb3JUaW1lb3V0IiwiZG9jcyIsIm1vZHVsZU5hbWUiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBTUE7O0FBQ0E7O0FBQ0E7O0FBQ0E7O0FBQ0E7O0FBQ0E7O0FBQ0E7O0FBQ0E7O0FBQ0E7O0FBQ0E7O0FBV0E7O0FBRUE7O0FBQ0E7Ozs7Ozs7Ozs7OztBQXVCQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxJQUFNQSxrQkFBa0IsR0FBRyxJQUFJLEtBQS9CO0FBRU8sSUFBTUMsV0FBVyxHQUFHLFVBQXBCOzs7QUFFUCxTQUFTQyxhQUFULENBQTBCQyxJQUExQixFQUF1Q0MsaUJBQXZDLEVBQWtFQyxXQUFsRSxFQUEyRjtBQUN2RixTQUFRRixJQUFJLENBQUNHLE1BQUwsS0FBZ0IsQ0FBakIsSUFBd0JGLGlCQUFpQixJQUFJRCxJQUFJLENBQUMsQ0FBRCxDQUFqRCxHQUF3REEsSUFBSSxDQUFDLENBQUQsQ0FBNUQsR0FBa0VFLFdBQVcsRUFBcEY7QUFDSDs7SUFPS0UsZ0I7QUFJRiw4QkFBYztBQUFBO0FBQUE7QUFBQTtBQUNWLFNBQUtDLFNBQUwsR0FBaUIsRUFBakI7QUFDQSxTQUFLQyxVQUFMLEdBQWtCLElBQWxCO0FBQ0g7Ozs7NkJBRXdCO0FBQ3JCLFVBQU1DLFFBQWtDLEdBQUc7QUFDdkNDLFFBQUFBLE9BQU8sRUFBRSxtQkFBTSxDQUNkLENBRnNDO0FBR3ZDQyxRQUFBQSxNQUFNLEVBQUUsa0JBQU0sQ0FDYjtBQUpzQyxPQUEzQztBQU1BLFdBQUtKLFNBQUwsQ0FBZUssSUFBZixDQUFvQkgsUUFBcEI7QUFDQSxhQUFPLElBQUlJLE9BQUosQ0FBWSxVQUFDSCxPQUFELEVBQVVDLE1BQVYsRUFBcUI7QUFDcENGLFFBQUFBLFFBQVEsQ0FBQ0MsT0FBVCxHQUFtQkEsT0FBbkI7QUFDQUQs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LEVBQVZBLFVBSjBCO0FBSzFCNEYsa0JBQUFBLFdBQVcsRUFBWEE7QUFMMEIsaUJBQVgsQzs7O0FBQWJ3QixnQkFBQUEsSTs7c0JBT0ZBLElBQUksQ0FBQ3ZOLE1BQUwsR0FBYyxDOzs7OzttREFDUHVOLElBQUksQ0FBQyxDQUFELEM7OztzQkFFVGhGLDBCQUFlK0UsY0FBZixFOzs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUlkekwsZ0JBQWdCLENBQUMyTCxVQUFqQixHQUE4QixrQkFBOUIiLCJzb3VyY2VzQ29udGVudCI6WyIvKlxuICogQ29weXJpZ2h0IDIwMTgtMjAyMCBUT04gREVWIFNPTFVUSU9OUyBMVEQuXG4gKi9cblxuLy8gQGZsb3dcblxuaW1wb3J0IHsgSW5NZW1vcnlDYWNoZSB9IGZyb20gJ2Fwb2xsby1jYWNoZS1pbm1lbW9yeSc7XG5pbXBvcnQgeyBBcG9sbG9DbGllbnQgfSBmcm9tICdhcG9sbG8tY2xpZW50JztcbmltcG9ydCB7IEFwb2xsb0xpbmssIHNwbGl0IH0gZnJvbSAnYXBvbGxvLWxpbmsnO1xuaW1wb3J0IHsgSHR0cExpbmsgfSBmcm9tICdhcG9sbG8tbGluay1odHRwJztcbmltcG9ydCB7IFdlYlNvY2tldExpbmsgfSBmcm9tICdhcG9sbG8tbGluay13cyc7XG5pbXBvcnQgeyBnZXRNYWluRGVmaW5pdGlvbiB9IGZyb20gJ2Fwb2xsby11dGlsaXRpZXMnO1xuaW1wb3J0IGdxbCBmcm9tICdncmFwaHFsLXRhZyc7XG5pbXBvcnQgeyBTdWJzY3JpcHRpb25DbGllbnQgfSBmcm9tICdzdWJzY3JpcHRpb25zLXRyYW5zcG9ydC13cyc7XG5pbXBvcnQgeyBzZXRDb250ZXh0IH0gZnJvbSAnYXBvbGxvLWxpbmstY29udGV4dCc7XG5pbXBvcnQge1xuICAgIEZPUk1BVF9URVhUX01BUCwgVGFncywgU3BhbiwgU3BhbkNvbnRleHQsXG59IGZyb20gJ29wZW50cmFjaW5nJztcbmltcG9ydCB0eXBlIHtcbiAgICBUT05RdWVyaWVzLFxuICAgIFRPTlFDb2xsZWN0aW9uLFxuICAgIFN1YnNjcmlwdGlvbixcbiAgICBUT05RdWVyeVBhcmFtcyxcbiAgICBUT05TdWJzY3JpYmVQYXJhbXMsXG4gICAgVE9OV2FpdEZvclBhcmFtcywgVE9OUXVlcnlBZ2dyZWdhdGVQYXJhbXMsXG59IGZyb20gJy4uLy4uL3R5cGVzJztcbmltcG9ydCB7IFRPTkNsaWVudCwgVE9OQ2xpZW50RXJyb3IgfSBmcm9tICcuLi9UT05DbGllbnQnO1xuaW1wb3J0IHR5cGUgeyBUT05Nb2R1bGVDb250ZXh0IH0gZnJvbSAnLi4vVE9OTW9kdWxlJztcbmltcG9ydCB7IFRPTk1vZHVsZSB9IGZyb20gJy4uL1RPTk1vZHVsZSc7XG5pbXBvcnQgVE9OQ29uZmlnTW9kdWxlLCB7IFVSTFBhcnRzIH0gZnJvbSAnLi9UT05Db25maWdNb2R1bGUnO1xuXG5cbmV4cG9ydCB0eXBlIFJlcXVlc3QgPSB7XG4gICAgaWQ6IHN0cmluZyxcbiAgICBib2R5OiBzdHJpbmcsXG59XG5cbmV4cG9ydCB0eXBlIFNlcnZlckluZm8gPSB7XG4gICAgdmVyc2lvbjogbnVtYmVyLFxuICAgIHN1cHBvcnRzT3BlcmF0aW9uSWQ6IGJvb2xlYW4sXG4gICAgc3VwcG9ydHNBZ2dyZWdhdGlvbnM6IGJvb2xlYW4sXG4gICAgc3VwcG9ydHNUaW1lOiBib29sZWFuLFxuICAgIHRpbWVEZWx0YTogP251bWJlcixcbn07XG5cbnR5cGUgR3JhcGhRTENsaWVudENvbmZpZyA9IHtcbiAgICBodHRwVXJsOiBzdHJpbmcsXG4gICAgd3NVcmw6IHN0cmluZyxcbiAgICBmZXRjaDogYW55LFxuICAgIFdlYlNvY2tldDogYW55LFxufTtcblxuLy8gS2VlcC1hbGl2ZSB0aW1lb3V0IHVzZWQgdG8gc3VwcG9ydCBrZWVwLWFsaXZlIGNvbm5lY3Rpb24gY2hlY2tpbmc6XG4vLyAtIEV2ZXJ5IDEgbWludXRlIHNlcnZlciBzZW5kcyBHUUxfQ09OTkVDVElPTl9LRUVQX0FMSVZFIG1lc3NhZ2UuXG4vLyAtIEV2ZXJ5IDIgbWludXRlcyBjbGllbnQgY2hlY2tzIHRoYXQgR1FMX0NPTk5FQ1RJT05fS0VFUF9BTElWRSBtZXNzYWdlIHdhcyByZWNlaXZlZFxuLy8gICB3aXRoaW4gbGFzdCAyIG1pbnV0ZXMuXG4vLyAtIElmIGNsaWVudCBoYWRuJ3QgcmVjZWl2ZWQga2VlcCBhbGl2ZSBtZXNzYWdlIGR1cmluZyBsYXN0IDIgbWludXRlc1xuLy8gICBpdCBjbG9zZXMgY29ubmVjdGlvbiBhbmQgZ29lcyB0byByZWNvbm5lY3QuXG5jb25zdCBLRUVQX0FMSVZFX1RJTUVPVVQgPSAyICogNjAwMDA7XG5cbmV4cG9ydCBjb25zdCBNQVhfVElNRU9VVCA9IDIxNDc0ODM2NDc7XG5cbmZ1bmN0aW9uIHJlc29sdmVQYXJhbXM8VD4oYXJnczogYW55W10sIHJlcXVpcmVkUGFyYW1OYW1lOiBzdHJpbmcsIHJlc29sdmVBcmdzOiAoKSA9PiBUKTogVCB7XG4gICAgcmV0dXJuIChhcmdzLmxlbmd0aCA9PT0gMSkgJiYgKHJlcXVpcmVkUGFyYW1OYW1lIGluIGFyZ3NbMF0pID8gYXJnc1swXSA6IHJlc29sdmVBcmdzKCk7XG59XG5cbnR5cGUgTXVsdGljYXN0TGlzdGVuZXI8VmFsdWU+ID0ge1xuICAgIHJlc29sdmU6ICh2YWx1ZTogVmFsdWUpID0+IHZvaWQ7XG4gICAgcmVqZWN0OiAoZXJyb3I6IEVycm9yKSA9PiB2b2lkO1xufTtcblxuY2xhc3MgTXVsdGljYXN0UHJvbWlzZTxWYWx1ZT4ge1xuICAgIGxpc3RlbmVyczogTXVsdGljYXN0TGlzdGVuZXI8VmFsdWU+W107XG4gICAgb25Db21wbGV0ZTogPygoKSA9PiB2b2lkKTtcblxuICAgIGNvbnN0cnVjdG9yKCkge1xuICAgICAgICB0aGlzLmxpc3RlbmVycyA9IFtdO1xuICAgICAgICB0aGlzLm9uQ29tcGxldGUgPSBudWxsO1xuICAgIH1cblxuICAgIGxpc3RlbigpOiBQcm9taXNlPFZhbHVlPiB7XG4gICAgICAgIGNvbnN0IGxpc3RlbmVyOiBNdWx0aWNhc3RMaXN0ZW5lcjxWYWx1ZT4gPSB7XG4gICAgICAgICAgICByZXNvbHZlOiAoKSA9PiB7XG4gICAgICAgICAgICB9LFxuICAgICAgICAgICAgcmVqZWN0OiAoKSA9PiB7XG4gICAgICAgICAgICB9LFxuICAgICAgICB9O1xuICAgICAgICB0aGlzLmxpc3RlbmVycy5wdXNoKGxpc3RlbmVyKTtcbiAgICAgICAgcmV0dXJuIG5ldyBQcm9taXNlKChyZXNvbHZlLCByZWplY3QpID0+IHtcbiAgICAgICAgICAgIGxpc3RlbmVyLnJlc29sdmUgPSByZXNvbHZlO1xuICAgICAgICAgICAgbGlzdGVuZXIucmVqZWN0ID0gcmVqZWN0O1xuICAgICAgICB9KTtcbiAgICB9XG5cbiAgICByZXNvbHZlKHZhbHVlOiBWYWx1ZSkge1xuICAgICAgICB0aGlzLmNvbXBsZXRlKGxpc3RlbmVyID0+IGxpc3RlbmVyLnJlc29sdmUodmFsdWUpKTtcbiAgICB9XG5cbiAgICByZWplY3QoZXJyb3I6IEVycm9yKSB7XG4gICAgICAgIHRoaXMuY29tcGxldGUobGlzdGVuZXIgPT4gbGlzdGVuZXIucmVqZWN0KGVycm9yKSk7XG4gICAgfVxuXG4gICAgY29tcGxldGUoY29tcGxldGVMaXN0ZW5lcjogKGxpc3RlbmVyOiBNdWx0aWNhc3RMaXN0ZW5lcjxWYWx1ZT4pID0+IHZvaWQpIHtcbiAgICAgICAgY29uc3QgeyBsaXN0ZW5lcnMgfSA9IHRoaXM7XG4gICAgICAgIHRoaXMubGlzdGVuZXJzID0gW107XG4gICAgICAgIGlmICh0aGlzLm9uQ29tcGxldGUpIHtcbiAgICAgICAgICAgIHRoaXMub25Db21wbGV0ZSgpO1xuICAgICAgICB9XG4gICAgICAgIGxpc3RlbmVycy5mb3JFYWNoKGxpc3RlbmVyID0+IGNvbXBsZXRlTGlzdGVuZXIobGlzdGVuZXIpKTtcbiAgICB9XG59XG5cbmZ1bmN0aW9uIHZlcnNpb25Ub051bWJlcihzOiBzdHJpbmcpOiBudW1iZXIge1xuICAgIGNvbnN0IHBhcnRzID0gYCR7cyB8fCAnJ31gLnNwbGl0KCcuJylcbiAgICAgICAgLm1hcCh4ID0+IE51bWJlcih4KSlcbiAgICAgICAgLnNsaWNlKDAsIDMpO1xuICAgIHdoaWxlIChwYXJ0cy5sZW5ndGggPCAzKSB7XG4gICAgICAgIHBhcnRzLnB1c2goMCk7XG4gICAgfVxuICAgIHJldHVybiBwYXJ0c1swXSAqIDEwMDAwMDAgKyBwYXJ0c1sxXSAqIDEwMDAgKyBwYXJ0c1syXTtcbn1cblxuZnVuY3Rpb24gcmVzb2x2ZVNlcnZlckluZm8odmVyc2lvblN0cmluZzogc3RyaW5nIHwgbnVsbCB8IHR5cGVvZiB1bmRlZmluZWQpOiBTZXJ2ZXJJbmZvIHtcbiAgICBjb25zdCB2ZXJzaW9uID0gdmVyc2lvblRvTnVtYmVyKHZlcnNpb25TdHJpbmcgfHwgJzAuMjQuNCcpO1xuICAgIHJldHVybiB7XG4gICAgICAgIHZlcnNpb24sXG4gICAgICAgIHN1cHBvcnRzT3BlcmF0aW9uSWQ6IHZlcnNpb24gPiAyNDAwNCxcbiAgICAgICAgc3VwcG9ydHNBZ2dyZWdhdGlvbnM6IHZlcnNpb24gPj0gMjUwMDAsXG4gICAgICAgIHN1cHBvcnRzVGltZTogdmVyc2lvbiA+PSAyNjAwMyxcbiAgICAgICAgdGltZURlbHRhOiBudWxsLFxuICAgIH07XG59XG5cbmV4cG9ydCBkZWZhdWx0IGNsYXNzIFRPTlF1ZXJpZXNNb2R1bGUgZXh0ZW5kcyBUT05Nb2R1bGUgaW1wbGVtZW50cyBUT05RdWVyaWVzIHtcbiAgICB0cmFuc2FjdGlvbnM6IFRPTlFDb2xsZWN0aW9uO1xuICAgIG1lc3NhZ2VzOiBUT05RQ29sbGVjdGlvbjtcbiAgICBibG9ja3M6IFRPTlFDb2xsZWN0aW9uO1xuICAgIGFjY291bnRzOiBUT05RQ29sbGVjdGlvbjtcbiAgICBibG9ja3Nfc2lnbmF0dXJlczogVE9OUUNvbGxlY3Rpb247XG5cbiAgICBjb25maWc6IFRPTkNvbmZpZ01vZHVsZTtcblxuICAgIGdyYXBocWxDbGllbnRDcmVhdGlvbjogP011bHRpY2FzdFByb21pc2U8QXBvbGxvQ2xpZW50PjtcbiAgICBncmFwaHFsQ2xpZW50OiA/QXBvbGxvQ2xpZW50O1xuICAgIGdyYXBocWxDbGllbnRDb25maWc6ID9HcmFwaFFMQ2xpZW50Q29uZmlnO1xuXG4gICAgb3ZlcnJpZGVXc1VybDogP3N0cmluZztcbiAgICBvcGVyYXRpb25JZFByZWZpeDogc3RyaW5nO1xuICAgIG9wZXJhdGlvbklkU3VmZml4OiBudW1iZXI7XG4gICAgc2VydmVySW5mbzogU2VydmVySW5mbztcblxuICAgIGNvbnN0cnVjdG9yKGNvbnRleHQ6IFRPTk1vZHVsZUNvbnRleHQpIHtcbiAgICAgICAgc3VwZXIoY29udGV4dCk7XG4gICAgICAgIHRoaXMuZ3JhcGhxbENsaWVudCA9IG51bGw7XG4gICAgICAgIHRoaXMuZ3JhcGhxbENsaWVudENyZWF0aW9uID0gbnVsbDtcbiAgICAgICAgdGhpcy5ncmFwaHFsQ2xpZW50Q29uZmlnID0gbnVsbDtcbiAgICAgICAgdGhpcy5vdmVycmlkZVdzVXJsID0gbnVsbDtcbiAgICAgICAgdGhpcy5vcGVyYXRpb25JZFByZWZpeCA9IChEYXRlLm5vdygpICUgNjAwMDApLnRvU3RyaW5nKDE2KTtcbiAgICAgICAgZm9yIChsZXQgaSA9IDA7IGkgPCAxMDsgaSArPSAxKSB7XG4gICAgICAgICAgICB0aGlzLm9wZXJhdGlvbklkUHJlZml4ID1cbiAgICAgICAgICAgICAgICBgJHt0aGlzLm9wZXJhdGlvbklkUHJlZml4fSR7TWF0aC5yb3VuZChNYXRoLnJhbmRvbSgpICogMjU2KVxuICAgICAgICAgICAgICAgICAgICAudG9TdHJpbmcoMTYpfWA7XG4gICAgICAgIH1cbiAgICAgICAgdGhpcy5vcGVyYXRpb25JZFN1ZmZpeCA9IDE7XG4gICAgICAgIHRoaXMuc2VydmVySW5mbyA9IHJlc29sdmVTZXJ2ZXJJbmZvKCk7XG4gICAgfVxuXG4gICAgYXN5bmMgc2V0dXAoKSB7XG4gICAgICAgIHRoaXMuY29uZmlnID0gdGhpcy5jb250ZXh0LmdldE1vZHVsZShUT05Db25maWdNb2R1bGUpO1xuICAgICAgICB0aGlzLnRyYW5zYWN0aW9ucyA9IG5ldyBUT05RdWVyaWVzTW9kdWxlQ29sbGVjdGlvbih0aGlzLCAndHJhbnNhY3Rpb25zJywgJ1RyYW5zYWN0aW9uJyk7XG4gICAgICAgIHRoaXMubWVzc2FnZXMgPSBuZXcgVE9OUXVlcmllc01vZHVsZUNvbGxlY3Rpb24odGhpcywgJ21lc3NhZ2VzJywgJ01lc3NhZ2UnKTtcbiAgICAgICAgdGhpcy5ibG9ja3MgPSBuZXcgVE9OUXVlcmllc01vZHVsZUNvbGxlY3Rpb24odGhpcywgJ2Jsb2NrcycsICdCbG9jaycpO1xuICAgICAgICB0aGlzLmFjY291bnRzID0gbmV3IFRPTlF1ZXJpZXNNb2R1bGVDb2xsZWN0aW9uKHRoaXMsICdhY2NvdW50cycsICdBY2NvdW50Jyk7XG4gICAgICAgIHRoaXMuYmxvY2tzX3NpZ25hdHVyZXMgPSBuZXcgVE9OUXVlcmllc01vZHVsZUNvbGxlY3Rpb24odGhpcywgJ2Jsb2Nrc19zaWduYXR1cmVzJywgJ0Jsb2NrU2lnbmF0dXJlcycpO1xuICAgIH1cblxuICAgIGFzeW5jIGRldGVjdFJlZGlyZWN0KGZldGNoOiBhbnksIHNvdXJjZVVybDogc3RyaW5nKTogUHJvbWlzZTxzdHJpbmc+IHtcbiAgICAgICAgY29uc3QgcmVzcG9uc2UgPSBhd2FpdCBmZXRjaChzb3VyY2VVcmwpO1xuICAgICAgICB0cnkge1xuICAgICAgICAgICAgdGhpcy5zZXJ2ZXJJbmZvID0gcmVzb2x2ZVNlcnZlckluZm8oKGF3YWl0IHJlc3BvbnNlLmpzb24oKSkuZGF0YS5pbmZvLnZlcnNpb24pO1xuICAgICAgICB9IGNhdGNoIHtcbiAgICAgICAgfVxuICAgICAgICBpZiAocmVzcG9uc2UucmVkaXJlY3RlZCA9PT0gdHJ1ZSkge1xuICAgICAgICAgICAgcmV0dXJuIHJlc3BvbnNlLnVybDtcbiAgICAgICAgfVxuICAgICAgICBpZiAocmVzcG9uc2UucmVkaXJlY3RlZCA9PT0gZmFsc2UpIHtcbiAgICAgICAgICAgIHJldHVybiAnJztcbiAgICAgICAgfVxuICAgICAgICBjb25zdCBzb3VyY2VMb2NhdGlvbiA9IFVSTFBhcnRzLnBhcnNlKHNvdXJjZVVybClcbiAgICAgICAgICAgIC5maXhRdWVyeShfID0+ICcnKVxuICAgICAgICAgICAgLnRvU3RyaW5nKClcbiAgICAgICAgICAgIC50b0xvd2VyQ2FzZSgpO1xuICAgICAgICBjb25zdCByZXNwb25zZUxvY2F0aW9uID0gVVJMUGFydHMucGFyc2UocmVzcG9uc2UudXJsKVxuICAgICAgICAgICAgLmZpeFF1ZXJ5KF8gPT4gJycpXG4gICAgICAgICAgICAudG9TdHJpbmcoKVxuICAgICAgICAgICAgLnRvTG93ZXJDYXNlKCk7XG4gICAgICAgIHJldHVybiByZXNwb25zZUxvY2F0aW9uICE9PSBzb3VyY2VMb2NhdGlvbiA/IHJlc3BvbnNlLnVybCA6ICcnO1xuICAgIH1cblxuICAgIGFzeW5jIGdldENsaWVudENvbmZpZygpOiBQcm9taXNlPEdyYXBoUUxDbGllbnRDb25maWc+IHtcbiAgICAgICAgY29uc3QgY29uZmlnID0gdGhpcy5jb25maWc7XG4gICAgICAgIGNvbnN0IGNsaWVudFBsYXRmb3JtID0gVE9OQ2xpZW50LmNsaWVudFBsYXRmb3JtO1xuICAgICAgICBpZiAoIWNsaWVudFBsYXRmb3JtKSB7XG4gICAgICAgICAgICB0aHJvdyBFcnJvcignVE9OIENsaWVudCBkb2VzIG5vdCBjb25maWd1cmVkJyk7XG4gICAgICAgIH1cbiAgICAgICAgY29uc3QgZmV0Y2ggPSBjbGllbnRQbGF0Zm9ybS5mZXRjaDtcblxuICAgICAgICBmdW5jdGlvbiBnZXRDb25maWdGb3JTZXJ2ZXIoc2VydmVyOiBzdHJpbmcpOiBHcmFwaFFMQ2xpZW50Q29uZmlnIHtcbiAgICAgICAgICAgIGNvbnN0IGh0dHBQYXJ0cyA9IFVSTFBhcnRzLnBhcnNlKHNlcnZlcilcbiAgICAgICAgICAgICAgICAuZml4UHJvdG9jb2woeCA9PiAoeCA9PT0gJ2h0dHA6Ly8nID8geCA6ICdodHRwczovLycpKVxuICAgICAgICAgICAgICAgIC5maXhQYXRoKHggPT4gYCR7eH0vZ3JhcGhxbGApO1xuICAgICAgICAgICAgY29uc3QgaHR0cCA9IGh0dHBQYXJ0cy50b1N0cmluZygpO1xuICAgICAgICAgICAgY29uc3Qgd3MgPSBodHRwUGFydHNcbiAgICAgICAgICAgICAgICAuZml4UHJvdG9jb2woeCA9PiAoeCA9PT0gJ2h0dHA6Ly8nID8gJ3dzOi8vJyA6ICd3c3M6Ly8nKSlcbiAgICAgICAgICAgICAgICAudG9TdHJpbmcoKTtcbiAgICAgICAgICAgIHJldHVybiB7XG4gICAgICAgICAgICAgICAgaHR0cFVybDogaHR0cCxcbiAgICAgICAgICAgICAgICB3c1VybDogd3MsXG4gICAgICAgICAgICAgICAgZmV0Y2g6IGNsaWVudFBsYXRmb3JtLmZldGNoLFxuICAgICAgICAgICAgICAgIFdlYlNvY2tldDogY2xpZW50UGxhdGZvcm0uV2ViU29ja2V0LFxuICAgICAgICAgICAgfTtcbiAgICAgICAgfVxuXG4gICAgICAgIGZvciAoY29uc3Qgc2VydmVyIG9mIGNvbmZpZy5kYXRhLnNlcnZlcnMpIHtcbiAgICAgICAgICAgIGNvbnN0IGNsaWVudENvbmZpZyA9IGdldENvbmZpZ0ZvclNlcnZlcihzZXJ2ZXIpO1xuICAgICAgICAgICAgdHJ5IHtcbiAgICAgICAgICAgICAgICAvLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgbm8tYXdhaXQtaW4tbG9vcFxuICAgICAgICAgICAgICAgIGNvbnN0IHJlZGlyZWN0ZWQgPSBhd2FpdCB0aGlzLmRldGVjdFJlZGlyZWN0KFxuICAgICAgICAgICAgICAgICAgICBmZXRjaCxcbiAgICAgICAgICAgICAgICAgICAgYCR7Y2xpZW50Q29uZmlnLmh0dHBVcmx9P3F1ZXJ5PSU3QmluZm8lN0J2ZXJzaW9uJTdEJTdEYCxcbiAgICAgICAgICAgICAgICApO1xuICAgICAgICAgICAgICAgIGlmIChyZWRpcmVjdGVkICE9PSAnJykge1xuICAgICAgICAgICAgICAgICAgICBjb25zdCBodHRwUGFydHMgPSBVUkxQYXJ0cy5wYXJzZShyZWRpcmVjdGVkKVxuICAgICAgICAgICAgICAgICAgICAgICAgLmZpeFF1ZXJ5KF8gPT4gJycpO1xuICAgICAgICAgICAgICAgICAgICBjbGllbnRDb25maWcuaHR0cFVybCA9IGh0dHBQYXJ0cy50b1N0cmluZygpO1xuICAgICAgICAgICAgICAgICAgICBjbGllbnRDb25maWcud3NVcmwgPSBodHRwUGFydHNcbiAgICAgICAgICAgICAgICAgICAgICAgIC5maXhQcm90b2NvbCh4ID0+ICh4ID09PSAnaHR0cDovLycgPyAnd3M6Ly8nIDogJ3dzczovLycpKVxuICAgICAgICAgICAgICAgICAgICAgICAgLnRvU3RyaW5nKCk7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIHJldHVybiBjbGllbnRDb25maWc7XG4gICAgICAgICAgICB9IGNhdGNoIChlcnJvcikge1xuICAgICAgICAgICAgICAgIGNvbnNvbGUubG9nKGBbZ2V0Q2xpZW50Q29uZmlnXSBmb3Igc2VydmVyIFwiJHtzZXJ2ZXJ9XCIgZmFpbGVkYCwge1xuICAgICAgICAgICAgICAgICAgICBjbGllbnRDb25maWc6IHtcbiAgICAgICAgICAgICAgICAgICAgICAgIGh0dHBVcmw6IGNsaWVudENvbmZpZy5odHRwVXJsLFxuICAgICAgICAgICAgICAgICAgICAgICAgd3NVcmw6IGNsaWVudENvbmZpZy53c1VybCxcbiAgICAgICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICAgICAgZXJyb3JTdHJpbmc6IGVycm9yLnRvU3RyaW5nKCksXG4gICAgICAgICAgICAgICAgICAgIGVycm9yLFxuICAgICAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICAgIHJldHVybiBnZXRDb25maWdGb3JTZXJ2ZXIoY29uZmlnLmRhdGEuc2VydmVyc1swXSk7XG4gICAgfVxuXG4gICAgYXN5bmMgZ2V0U2VydmVySW5mbyhzcGFuPzogU3BhbiB8IFNwYW5Db250ZXh0KTogUHJvbWlzZTxTZXJ2ZXJJbmZvPiB7XG4gICAgICAgIGF3YWl0IHRoaXMuZ3JhcGhxbENsaWVudFJlcXVpcmVkKHNwYW4pO1xuICAgICAgICByZXR1cm4gdGhpcy5zZXJ2ZXJJbmZvO1xuICAgIH1cblxuICAgIGFzeW5jIHNlcnZlclRpbWVEZWx0YShzcGFuPzogU3BhbiB8IFNwYW5Db250ZXh0KTogUHJvbWlzZTxudW1iZXI+IHtcbiAgICAgICAgY29uc3Qgc2VydmVySW5mbyA9IGF3YWl0IHRoaXMuZ2V0U2VydmVySW5mbyhzcGFuKTtcbiAgICAgICAgY29uc3QgY2xpZW50Q29uZmlnID0gdGhpcy5ncmFwaHFsQ2xpZW50Q29uZmlnO1xuICAgICAgICBpZiAoY2xpZW50Q29uZmlnICYmIHNlcnZlckluZm8uc3VwcG9ydHNUaW1lICYmIHNlcnZlckluZm8udGltZURlbHRhID09PSBudWxsKSB7XG4gICAgICAgICAgICB0cnkge1xuICAgICAgICAgICAgICAgIGNvbnN0IHN0YXJ0ID0gRGF0ZS5ub3coKTtcbiAgICAgICAgICAgICAgICBjb25zdCByZXNwb25zZSA9IGF3YWl0IGNsaWVudENvbmZpZy5mZXRjaChgJHtjbGllbnRDb25maWcuaHR0cFVybH0/cXVlcnk9JTdCaW5mbyU3QnRpbWUlN0QlN0RgKTtcbiAgICAgICAgICAgICAgICBjb25zdCBlbmQgPSBEYXRlLm5vdygpO1xuICAgICAgICAgICAgICAgIGNvbnN0IHJlc3BvbnNlRGF0YSA9IGF3YWl0IHJlc3BvbnNlLmpzb24oKTtcbiAgICAgICAgICAgICAgICBjb25zdCBzZXJ2ZXJUaW1lID0gcmVzcG9uc2VEYXRhLmRhdGEuaW5mby50aW1lO1xuICAgICAgICAgICAgICAgIHNlcnZlckluZm8udGltZURlbHRhID0gTWF0aC5yb3VuZChzZXJ2ZXJUaW1lIC0gKHN0YXJ0ICsgKGVuZCAtIHN0YXJ0KSAvIDIpKTtcbiAgICAgICAgICAgIH0gY2F0Y2ggKGVycm9yKSB7XG4gICAgICAgICAgICAgICAgY29uc29sZS5sb2coJz4+PicsIGVycm9yKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgICByZXR1cm4gc2VydmVySW5mby50aW1lRGVsdGEgfHwgMDtcbiAgICB9XG5cbiAgICBhc3luYyBzZXJ2ZXJOb3coc3Bhbj86IFNwYW4gfCBTcGFuQ29udGV4dCk6IFByb21pc2U8bnVtYmVyPiB7XG4gICAgICAgIGNvbnN0IHRpbWVEZWx0YSA9IGF3YWl0IHRoaXMuc2VydmVyVGltZURlbHRhKHNwYW4pO1xuICAgICAgICByZXR1cm4gRGF0ZS5ub3coKSArIHRpbWVEZWx0YTtcbiAgICB9XG5cbiAgICBkcm9wU2VydmVyVGltZURlbHRhKCkge1xuICAgICAgICBpZiAodGhpcy5zZXJ2ZXJJbmZvKSB7XG4gICAgICAgICAgICB0aGlzLnNlcnZlckluZm8udGltZURlbHRhID0gbnVsbDtcbiAgICAgICAgfVxuICAgIH1cblxuICAgIGdlbmVyYXRlT3BlcmF0aW9uSWQoKTogc3RyaW5nIHtcbiAgICAgICAgdGhpcy5vcGVyYXRpb25JZFN1ZmZpeCArPSAxO1xuICAgICAgICByZXR1cm4gYCR7dGhpcy5vcGVyYXRpb25JZFByZWZpeH0ke3RoaXMub3BlcmF0aW9uSWRTdWZmaXgudG9TdHJpbmcoMTYpfWA7XG4gICAgfVxuXG4gICAgYXN5bmMgZmluaXNoT3BlcmF0aW9ucyhvcGVyYXRpb25JZHM6IHN0cmluZ1tdKSB7XG4gICAgICAgIGlmIChvcGVyYXRpb25JZHMubGVuZ3RoID09PSAwKSB7XG4gICAgICAgICAgICByZXR1cm47XG4gICAgICAgIH1cbiAgICAgICAgaWYgKCEoYXdhaXQgdGhpcy5nZXRTZXJ2ZXJJbmZvKCkpLnN1cHBvcnRzT3BlcmF0aW9uSWQpIHtcbiAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgfVxuICAgICAgICBhd2FpdCB0aGlzLmdyYXBocWxNdXRhdGlvbihgbXV0YXRpb24gZmluaXNoT3BlcmF0aW9ucygkb3BlcmF0aW9uSWRzOiBbU3RyaW5nXSkge1xuICAgICAgICAgICAgICAgIGZpbmlzaE9wZXJhdGlvbnMob3BlcmF0aW9uSWRzOiAkb3BlcmF0aW9uSWRzKVxuICAgICAgICAgICAgfWAsIHtcbiAgICAgICAgICAgIG9wZXJhdGlvbklkcyxcbiAgICAgICAgfSk7XG4gICAgfVxuXG4gICAgYXN5bmMgZ2V0QWNjb3VudHNDb3VudChwYXJlbnRTcGFuPzogKFNwYW4gfCBTcGFuQ29udGV4dCkpOiBQcm9taXNlPG51bWJlcj4ge1xuICAgICAgICBjb25zdCByZXN1bHQgPSBhd2FpdCB0aGlzLnF1ZXJ5KCdxdWVyeXtnZXRBY2NvdW50c0NvdW50fScsIHVuZGVmaW5lZCwgcGFyZW50U3Bhbik7XG4gICAgICAgIHJldHVybiByZXN1bHQuZGF0YS5nZXRBY2NvdW50c0NvdW50O1xuICAgIH1cblxuICAgIGFzeW5jIGdldFRyYW5zYWN0aW9uc0NvdW50KHBhcmVudFNwYW4/OiAoU3BhbiB8IFNwYW5Db250ZXh0KSk6IFByb21pc2U8bnVtYmVyPiB7XG4gICAgICAgIGNvbnN0IHJlc3VsdCA9IGF3YWl0IHRoaXMucXVlcnkoJ3F1ZXJ5e2dldFRyYW5zYWN0aW9uc0NvdW50fScsIHVuZGVmaW5lZCwgcGFyZW50U3Bhbik7XG4gICAgICAgIHJldHVybiByZXN1bHQuZGF0YS5nZXRUcmFuc2FjdGlvbnNDb3VudDtcbiAgICB9XG5cbiAgICBhc3luYyBnZXRBY2NvdW50c1RvdGFsQmFsYW5jZShwYXJlbnRTcGFuPzogKFNwYW4gfCBTcGFuQ29udGV4dCkpOiBQcm9taXNlPHN0cmluZz4ge1xuICAgICAgICBjb25zdCByZXN1bHQgPSBhd2FpdCB0aGlzLnF1ZXJ5KCdxdWVyeXtnZXRBY2NvdW50c1RvdGFsQmFsYW5jZX0nLCB1bmRlZmluZWQsIHBhcmVudFNwYW4pO1xuICAgICAgICByZXR1cm4gcmVzdWx0LmRhdGEuZ2V0QWNjb3VudHNUb3RhbEJhbGFuY2U7XG4gICAgfVxuXG4gICAgYXN5bmMgcG9zdFJlcXVlc3RzKHJlcXVlc3RzOiBSZXF1ZXN0W10sIHBhcmVudFNwYW4/OiAoU3BhbiB8IFNwYW5Db250ZXh0KSk6IFByb21pc2U8YW55PiB7XG4gICAgICAgIHJldHVybiB0aGlzLmNvbnRleHQudHJhY2UoJ3F1ZXJpZXMucG9zdFJlcXVlc3RzJywgYXN5bmMgKHNwYW4pID0+IHtcbiAgICAgICAgICAgIHJldHVybiB0aGlzLmdyYXBocWxNdXRhdGlvbihgbXV0YXRpb24gcG9zdFJlcXVlc3RzKCRyZXF1ZXN0czogW1JlcXVlc3RdKSB7XG4gICAgICAgICAgICAgICAgcG9zdFJlcXVlc3RzKHJlcXVlc3RzOiAkcmVxdWVzdHMpXG4gICAgICAgICAgICB9YCwge1xuICAgICAgICAgICAgICAgIHJlcXVlc3RzLFxuICAgICAgICAgICAgfSwgc3Bhbik7XG4gICAgICAgIH0sIHBhcmVudFNwYW4pO1xuICAgIH1cblxuICAgIGFzeW5jIG11dGF0aW9uKFxuICAgICAgICBxbDogc3RyaW5nLFxuICAgICAgICB2YXJpYWJsZXM6IHsgW3N0cmluZ106IGFueSB9ID0ge30sXG4gICAgICAgIHBhcmVudFNwYW4/OiAoU3BhbiB8IFNwYW5Db250ZXh0KSxcbiAgICApOiBQcm9taXNlPGFueT4ge1xuICAgICAgICByZXR1cm4gdGhpcy5jb250ZXh0LnRyYWNlKCdxdWVyaWVzLm11dGF0aW9uJywgYXN5bmMgKHNwYW46IFNwYW4pID0+IHtcbiAgICAgICAgICAgIHNwYW4uc2V0VGFnKCdwYXJhbXMnLCB7XG4gICAgICAgICAgICAgICAgbXV0YXRpb246IHFsLFxuICAgICAgICAgICAgICAgIHZhcmlhYmxlcyxcbiAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgcmV0dXJuIHRoaXMuZ3JhcGhxbE11dGF0aW9uKHFsLCB2YXJpYWJsZXMsIHNwYW4pO1xuICAgICAgICB9LCBwYXJlbnRTcGFuKTtcbiAgICB9XG5cbiAgICBhc3luYyBxdWVyeShcbiAgICAgICAgcWw6IHN0cmluZyxcbiAgICAgICAgdmFyaWFibGVzOiB7IFtzdHJpbmddOiBhbnkgfSA9IHt9LFxuICAgICAgICBwYXJlbnRTcGFuPzogKFNwYW4gfCBTcGFuQ29udGV4dCksXG4gICAgKTogUHJvbWlzZTxhbnk+IHtcbiAgICAgICAgcmV0dXJuIHRoaXMuY29udGV4dC50cmFjZSgncXVlcmllcy5xdWVyeScsIGFzeW5jIChzcGFuOiBTcGFuKSA9PiB7XG4gICAgICAgICAgICBzcGFuLnNldFRhZygncGFyYW1zJywge1xuICAgICAgICAgICAgICAgIHF1ZXJ5OiBxbCxcbiAgICAgICAgICAgICAgICB2YXJpYWJsZXMsXG4gICAgICAgICAgICB9KTtcbiAgICAgICAgICAgIHJldHVybiB0aGlzLmdyYXBocWxRdWVyeShxbCwgdmFyaWFibGVzLCBzcGFuKTtcbiAgICAgICAgfSwgcGFyZW50U3Bhbik7XG4gICAgfVxuXG4gICAgYXN5bmMgZ3JhcGhxbE11dGF0aW9uKHFsOiBzdHJpbmcsIHZhcmlhYmxlczogeyBbc3RyaW5nXTogYW55IH0gPSB7fSwgc3BhbjogU3Bhbik6IFByb21pc2U8YW55PiB7XG4gICAgICAgIGNvbnN0IG11dGF0aW9uID0gZ3FsKFtxbF0pO1xuICAgICAgICByZXR1cm4gdGhpcy5ncmFwaFFsKChjbGllbnQpID0+IGNsaWVudC5tdXRhdGUoe1xuICAgICAgICAgICAgbXV0YXRpb24sXG4gICAgICAgICAgICB2YXJpYWJsZXMsXG4gICAgICAgICAgICBjb250ZXh0OiB7XG4gICAgICAgICAgICAgICAgdHJhY2VTcGFuOiBzcGFuLFxuICAgICAgICAgICAgfSxcbiAgICAgICAgfSkpO1xuICAgIH1cblxuICAgIHN0YXRpYyBpc05ldHdvcmtFcnJvcihlcnJvcjogYW55KTogYm9vbGVhbiB7XG4gICAgICAgIGNvbnN0IG5ldHdvcmtFcnJvciA9IGVycm9yLm5ldHdvcmtFcnJvcjtcbiAgICAgICAgaWYgKCFuZXR3b3JrRXJyb3IpIHtcbiAgICAgICAgICAgIHJldHVybiBmYWxzZTtcbiAgICAgICAgfVxuICAgICAgICBpZiAoJ2Vycm5vJyBpbiBuZXR3b3JrRXJyb3IpIHtcbiAgICAgICAgICAgIHJldHVybiB0cnVlO1xuICAgICAgICB9XG4gICAgICAgIHJldHVybiAhKCdyZXNwb25zZScgaW4gbmV0d29ya0Vycm9yIHx8ICdyZXN1bHQnIGluIG5ldHdvcmtFcnJvcik7XG4gICAgfVxuXG4gICAgYXN5bmMgZ3JhcGhxbFF1ZXJ5KHFsOiBzdHJpbmcsIHZhcmlhYmxlczogeyBbc3RyaW5nXTogYW55IH0gPSB7fSwgc3BhbjogU3Bhbik6IFByb21pc2U8YW55PiB7XG4gICAgICAgIGNvbnN0IHF1ZXJ5ID0gZ3FsKFtxbF0pO1xuICAgICAgICByZXR1cm4gdGhpcy5ncmFwaFFsKGFzeW5jIChjbGllbnQpID0+IHtcbiAgICAgICAgICAgIGxldCBuZXh0VGltZW91dCA9IDEwMDtcbiAgICAgICAgICAgIHdoaWxlICh0cnVlKSB7XG4gICAgICAgICAgICAgICAgdHJ5IHtcbiAgICAgICAgICAgICAgICAgICAgcmV0dXJuIGF3YWl0IGNsaWVudC5xdWVyeSh7XG4gICAgICAgICAgICAgICAgICAgICAgICBxdWVyeSxcbiAgICAgICAgICAgICAgICAgICAgICAgIHZhcmlhYmxlcyxcbiAgICAgICAgICAgICAgICAgICAgICAgIGNvbnRleHQ6IHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB0cmFjZVNwYW46IHNwYW4sXG4gICAgICAgICAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgICAgICB9KTtcbiAgICAgICAgICAgICAgICB9IGNhdGNoIChlcnJvcikge1xuICAgICAgICAgICAgICAgICAgICBpZiAoVE9OUXVlcmllc01vZHVsZS5pc05ldHdvcmtFcnJvcihlcnJvcikpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIGNvbnNvbGUud2FybihlcnJvci5uZXR3b3JrRXJyb3IpO1xuICAgICAgICAgICAgICAgICAgICAgICAgY29uc3QgdGltZW91dCA9IG5leHRUaW1lb3V0O1xuICAgICAgICAgICAgICAgICAgICAgICAgYXdhaXQgbmV3IFByb21pc2UoeCA9PiBzZXRUaW1lb3V0KHgsIHRpbWVvdXQpKTtcbiAgICAgICAgICAgICAgICAgICAgICAgIGlmIChuZXh0VGltZW91dCA8IDMyMDApIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBuZXh0VGltZW91dCAqPSAyO1xuICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAgICAgICAgICAgdGhyb3cgZXJyb3I7XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG4gICAgICAgIH0sIHNwYW4pO1xuICAgIH1cblxuICAgIGFzeW5jIGdyYXBoUWwocmVxdWVzdDogKGNsaWVudDogQXBvbGxvQ2xpZW50KSA9PiBQcm9taXNlPGFueT4sIHNwYW46IFNwYW4pOiBQcm9taXNlPGFueT4ge1xuICAgICAgICBjb25zdCBjbGllbnQgPSBhd2FpdCB0aGlzLmdyYXBocWxDbGllbnRSZXF1aXJlZChzcGFuKTtcbiAgICAgICAgdHJ5IHtcbiAgICAgICAgICAgIHJldHVybiBhd2FpdCByZXF1ZXN0KGNsaWVudCk7XG4gICAgICAgIH0gY2F0Y2ggKGVycm9yKSB7XG4gICAgICAgICAgICBjb25zdCBncWxFcnIgPSBlcnJvci5ncmFwaFFMRXJyb3JzICYmIGVycm9yLmdyYXBoUUxFcnJvcnNbMF07XG4gICAgICAgICAgICBpZiAoZ3FsRXJyKSB7XG4gICAgICAgICAgICAgICAgY29uc3QgY2xpZW50RXJyID0gbmV3IEVycm9yKGdxbEVyci5tZXNzYWdlKTtcbiAgICAgICAgICAgICAgICBjb25zdCBncWxFeGMgPSAoZ3FsRXJyLmV4dGVuc2lvbnMgJiYgZ3FsRXJyLmV4dGVuc2lvbnMuZXhjZXB0aW9uKSB8fCB7fTtcbiAgICAgICAgICAgICAgICAoY2xpZW50RXJyOiBhbnkpLm51bWJlciA9IGdxbEV4Yy5jb2RlIHx8IDA7XG4gICAgICAgICAgICAgICAgKGNsaWVudEVycjogYW55KS5jb2RlID0gZ3FsRXhjLmNvZGUgfHwgMDtcbiAgICAgICAgICAgICAgICAoY2xpZW50RXJyOiBhbnkpLnNvdXJjZSA9IGdxbEV4Yy5zb3VyY2UgfHwgJ2NsaWVudCc7XG4gICAgICAgICAgICAgICAgdGhyb3cgY2xpZW50RXJyO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgY29uc3QgZXJyb3JzID0gZXJyb3JcbiAgICAgICAgICAgICAgICAmJiBlcnJvci5uZXR3b3JrRXJyb3JcbiAgICAgICAgICAgICAgICAmJiBlcnJvci5uZXR3b3JrRXJyb3IucmVzdWx0XG4gICAgICAgICAgICAgICAgJiYgZXJyb3IubmV0d29ya0Vycm9yLnJlc3VsdC5lcnJvcnM7XG4gICAgICAgICAgICBpZiAoZXJyb3JzKSB7XG4gICAgICAgICAgICAgICAgdGhyb3cgVE9OQ2xpZW50RXJyb3IucXVlcnlGYWlsZWQoZXJyb3JzKTtcbiAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgICAgdGhyb3cgZXJyb3I7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICBhc3luYyBncmFwaHFsQ2xpZW50UmVxdWlyZWQocGFyZW50U3Bhbj86IFNwYW4gfCBTcGFuQ29udGV4dCk6IFByb21pc2U8QXBvbGxvQ2xpZW50PiB7XG4gICAgICAgIGlmICh0aGlzLmdyYXBocWxDbGllbnQpIHtcbiAgICAgICAgICAgIHJldHVybiB0aGlzLmdyYXBocWxDbGllbnQ7XG4gICAgICAgIH1cbiAgICAgICAgaWYgKHRoaXMuZ3JhcGhxbENsaWVudENyZWF0aW9uKSB7XG4gICAgICAgICAgICBhd2FpdCB0aGlzLmdyYXBocWxDbGllbnRDcmVhdGlvbi5saXN0ZW4oKTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIGNvbnN0IGNyZWF0aW9uID0gbmV3IE11bHRpY2FzdFByb21pc2UoKTtcbiAgICAgICAgICAgIHRoaXMuZ3JhcGhxbENsaWVudENyZWF0aW9uID0gY3JlYXRpb247XG4gICAgICAgICAgICB0cnkge1xuICAgICAgICAgICAgICAgIGF3YWl0IHRoaXMuY29udGV4dC50cmFjZSgnc2V0dXAgY2xpZW50JywgKHNwYW4pID0+IHtcbiAgICAgICAgICAgICAgICAgICAgcmV0dXJuIHRoaXMuY3JlYXRlR3JhcGhxbENsaWVudChzcGFuKTtcbiAgICAgICAgICAgICAgICB9LCBwYXJlbnRTcGFuKTtcbiAgICAgICAgICAgICAgICB0aGlzLmdyYXBocWxDbGllbnRDcmVhdGlvbiA9IG51bGw7XG4gICAgICAgICAgICAgICAgY3JlYXRpb24ucmVzb2x2ZSh0aGlzLmdyYXBocWxDbGllbnQpO1xuICAgICAgICAgICAgfSBjYXRjaCAoZXJyb3IpIHtcbiAgICAgICAgICAgICAgICB0aGlzLmdyYXBocWxDbGllbnRDcmVhdGlvbiA9IG51bGw7XG4gICAgICAgICAgICAgICAgY3JlYXRpb24ucmVqZWN0KGVycm9yKTtcbiAgICAgICAgICAgICAgICB0aHJvdyBlcnJvcjtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgICByZXR1cm4gdGhpcy5ncmFwaHFsQ2xpZW50O1xuICAgIH1cblxuICAgIGFzeW5jIGNyZWF0ZUdyYXBocWxDbGllbnQoc3BhbjogU3BhbiB8IFNwYW5Db250ZXh0KSB7XG4gICAgICAgIGNvbnN0IHVzZUh0dHAgPSAhdGhpcy5jb25maWcuZGF0YS51c2VXZWJTb2NrZXRGb3JRdWVyaWVzO1xuICAgICAgICBsZXQgY2xpZW50Q29uZmlnID0gYXdhaXQgdGhpcy5nZXRDbGllbnRDb25maWcoKTtcbiAgICAgICAgbGV0IHdzTGluazogP1dlYlNvY2tldExpbmsgPSBudWxsO1xuICAgICAgICBsZXQgaHR0cExpbms6ID9IdHRwTGluayA9IG51bGw7XG5cbiAgICAgICAgY29uc3Qgc3Vic09wdGlvbnMgPSB0aGlzLmNvbmZpZy50cmFjZXIuaW5qZWN0KHNwYW4sIEZPUk1BVF9URVhUX01BUCwge30pO1xuICAgICAgICBjb25zdCBzdWJzY3JpcHRpb25DbGllbnQgPSBuZXcgU3Vic2NyaXB0aW9uQ2xpZW50KFxuICAgICAgICAgICAgY2xpZW50Q29uZmlnLndzVXJsLFxuICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgIHRpbWVvdXQ6IEtFRVBfQUxJVkVfVElNRU9VVCxcbiAgICAgICAgICAgICAgICByZWNvbm5lY3Q6IHRydWUsXG4gICAgICAgICAgICAgICAgY29ubmVjdGlvblBhcmFtczogKCkgPT4gKHtcbiAgICAgICAgICAgICAgICAgICAgYWNjZXNzS2V5OiB0aGlzLmNvbmZpZy5kYXRhICYmIHRoaXMuY29uZmlnLmRhdGEuYWNjZXNzS2V5LFxuICAgICAgICAgICAgICAgICAgICBoZWFkZXJzOiBzdWJzT3B0aW9ucyxcbiAgICAgICAgICAgICAgICB9KSxcbiAgICAgICAgICAgIH0sXG4gICAgICAgICAgICBjbGllbnRDb25maWcuV2ViU29ja2V0LFxuICAgICAgICApO1xuICAgICAgICBzdWJzY3JpcHRpb25DbGllbnQub25SZWNvbm5lY3RlZCgoKSA9PiB7XG4gICAgICAgICAgICBjb25zb2xlLmxvZygnW1RPTkNsaWVudC5xdWVyaWVzXScsICdXZWJTb2NrZXQgUmVjb25uZWN0ZWQnKTtcbiAgICAgICAgfSk7XG4gICAgICAgIGxldCBkZXRlY3RpbmdSZWRpcmVjdGlvbiA9IGZhbHNlO1xuICAgICAgICBzdWJzY3JpcHRpb25DbGllbnQub25FcnJvcigoKSA9PiB7XG4gICAgICAgICAgICBjb25zb2xlLmxvZygnW1RPTkNsaWVudC5xdWVyaWVzXScsICdXZWJTb2NrZXQgRmFpbGVkJyk7XG4gICAgICAgICAgICBpZiAoZGV0ZWN0aW5nUmVkaXJlY3Rpb24pIHtcbiAgICAgICAgICAgICAgICByZXR1cm47XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICAoYXN5bmMgKCkgPT4ge1xuICAgICAgICAgICAgICAgIGRldGVjdGluZ1JlZGlyZWN0aW9uID0gdHJ1ZTtcbiAgICAgICAgICAgICAgICB0cnkge1xuICAgICAgICAgICAgICAgICAgICBjb25zdCBuZXdDb25maWcgPSBhd2FpdCB0aGlzLmdldENsaWVudENvbmZpZygpO1xuICAgICAgICAgICAgICAgICAgICBjb25zdCBjb25maWdJc0NoYW5nZWQgPSBuZXdDb25maWcuaHR0cFVybCAhPT0gY2xpZW50Q29uZmlnLmh0dHBVcmxcbiAgICAgICAgICAgICAgICAgICAgICAgIHx8IG5ld0NvbmZpZy53c1VybCAhPT0gY2xpZW50Q29uZmlnLndzVXJsO1xuICAgICAgICAgICAgICAgICAgICBpZiAoY29uZmlnSXNDaGFuZ2VkKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICBjb25zb2xlLmxvZygnW1RPTkNsaWVudC5xdWVyaWVzXScsICdDbGllbnQgY29uZmlnIGNoYW5nZWQnKTtcbiAgICAgICAgICAgICAgICAgICAgICAgIGNsaWVudENvbmZpZyA9IG5ld0NvbmZpZztcbiAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMuZ3JhcGhxbENsaWVudENvbmZpZyA9IGNsaWVudENvbmZpZztcbiAgICAgICAgICAgICAgICAgICAgICAgIHN1YnNjcmlwdGlvbkNsaWVudC51cmwgPSBuZXdDb25maWcud3NVcmw7XG4gICAgICAgICAgICAgICAgICAgICAgICBpZiAod3NMaW5rKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgd3NMaW5rLnVybCA9IG5ld0NvbmZpZy53c1VybDtcbiAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICAgIGlmIChodHRwTGluaykge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGh0dHBMaW5rLnVyaSA9IG5ld0NvbmZpZy5odHRwVXJsO1xuICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgfSBjYXRjaCAoZXJyKSB7XG4gICAgICAgICAgICAgICAgICAgIGNvbnNvbGUubG9nKCdbVE9OQ2xpZW50LnF1ZXJpZXNdIHJlZGlyZWN0aW9uIGRldGVjdG9yIGZhaWxlZCcsIGVycik7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIGRldGVjdGluZ1JlZGlyZWN0aW9uID0gZmFsc2U7XG4gICAgICAgICAgICB9KSgpO1xuICAgICAgICB9KTtcbiAgICAgICAgc3Vic2NyaXB0aW9uQ2xpZW50Lm1heENvbm5lY3RUaW1lR2VuZXJhdG9yLmR1cmF0aW9uID0gKCkgPT4ge1xuICAgICAgICAgICAgcmV0dXJuIHN1YnNjcmlwdGlvbkNsaWVudC5tYXhDb25uZWN0VGltZUdlbmVyYXRvci5tYXg7XG4gICAgICAgIH07XG5cbiAgICAgICAgY29uc3QgdHJhY2VyTGluayA9IGF3YWl0IHNldENvbnRleHQoKF8sIHJlcSkgPT4ge1xuICAgICAgICAgICAgY29uc3QgcmVzb2x2ZWRTcGFuID0gKHJlcSAmJiByZXEudHJhY2VTcGFuKSB8fCBzcGFuO1xuICAgICAgICAgICAgcmVxLmhlYWRlcnMgPSB7fTtcbiAgICAgICAgICAgIHRoaXMuY29uZmlnLnRyYWNlci5pbmplY3QocmVzb2x2ZWRTcGFuLCBGT1JNQVRfVEVYVF9NQVAsIHJlcS5oZWFkZXJzKTtcbiAgICAgICAgICAgIGNvbnN0IGFjY2Vzc0tleSA9IHRoaXMuY29uZmlnLmRhdGEgJiYgdGhpcy5jb25maWcuZGF0YS5hY2Nlc3NLZXk7XG4gICAgICAgICAgICBpZiAoYWNjZXNzS2V5KSB7XG4gICAgICAgICAgICAgICAgcmVxLmhlYWRlcnMuYWNjZXNzS2V5ID0gYWNjZXNzS2V5O1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgcmV0dXJuIHtcbiAgICAgICAgICAgICAgICBoZWFkZXJzOiByZXEuaGVhZGVycyxcbiAgICAgICAgICAgIH07XG4gICAgICAgIH0pO1xuICAgICAgICBjb25zdCB3cmFwTGluayA9IChsaW5rOiBBcG9sbG9MaW5rKTogQXBvbGxvTGluayA9PiB0cmFjZXJMaW5rLmNvbmNhdChsaW5rKTtcbiAgICAgICAgY29uc3QgaXNTdWJzY3JpcHRpb24gPSAoeyBxdWVyeSB9KSA9PiB7XG4gICAgICAgICAgICBjb25zdCBkZWZpbml0aW9uID0gZ2V0TWFpbkRlZmluaXRpb24ocXVlcnkpO1xuICAgICAgICAgICAgcmV0dXJuIChcbiAgICAgICAgICAgICAgICBkZWZpbml0aW9uLmtpbmQgPT09ICdPcGVyYXRpb25EZWZpbml0aW9uJ1xuICAgICAgICAgICAgICAgICYmIGRlZmluaXRpb24ub3BlcmF0aW9uID09PSAnc3Vic2NyaXB0aW9uJ1xuICAgICAgICAgICAgKTtcbiAgICAgICAgfTtcbiAgICAgICAgd3NMaW5rID0gbmV3IFdlYlNvY2tldExpbmsoc3Vic2NyaXB0aW9uQ2xpZW50KTtcbiAgICAgICAgaHR0cExpbmsgPSB1c2VIdHRwXG4gICAgICAgICAgICA/IG5ldyBIdHRwTGluayh7XG4gICAgICAgICAgICAgICAgdXJpOiBjbGllbnRDb25maWcuaHR0cFVybCxcbiAgICAgICAgICAgICAgICBmZXRjaDogY2xpZW50Q29uZmlnLmZldGNoLFxuICAgICAgICAgICAgfSlcbiAgICAgICAgICAgIDogbnVsbDtcblxuICAgICAgICBjb25zdCBsaW5rID0gaHR0cExpbmtcbiAgICAgICAgICAgID8gc3BsaXQoaXNTdWJzY3JpcHRpb24sIHdyYXBMaW5rKHdzTGluayksIHdyYXBMaW5rKGh0dHBMaW5rKSlcbiAgICAgICAgICAgIDogd3JhcExpbmsod3NMaW5rKTtcbiAgICAgICAgdGhpcy5ncmFwaHFsQ2xpZW50Q29uZmlnID0gY2xpZW50Q29uZmlnO1xuICAgICAgICB0aGlzLmdyYXBocWxDbGllbnQgPSBuZXcgQXBvbGxvQ2xpZW50KHtcbiAgICAgICAgICAgIGNhY2hlOiBuZXcgSW5NZW1vcnlDYWNoZSh7fSksXG4gICAgICAgICAgICBsaW5rLFxuICAgICAgICAgICAgZGVmYXVsdE9wdGlvbnM6IHtcbiAgICAgICAgICAgICAgICB3YXRjaFF1ZXJ5OiB7XG4gICAgICAgICAgICAgICAgICAgIGZldGNoUG9saWN5OiAnbm8tY2FjaGUnLFxuICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgcXVlcnk6IHtcbiAgICAgICAgICAgICAgICAgICAgZmV0Y2hQb2xpY3k6ICduby1jYWNoZScsXG4gICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgIH0sXG4gICAgICAgIH0pO1xuICAgIH1cblxuICAgIGFzeW5jIGNsb3NlKCkge1xuICAgICAgICBpZiAodGhpcy5ncmFwaHFsQ2xpZW50KSB7XG4gICAgICAgICAgICBjb25zdCBjbGllbnQgPSB0aGlzLmdyYXBocWxDbGllbnQ7XG4gICAgICAgICAgICB0aGlzLmdyYXBocWxDbGllbnQgPSBudWxsO1xuICAgICAgICAgICAgY2xpZW50LnN0b3AoKTtcbiAgICAgICAgICAgIGF3YWl0IGNsaWVudC5jbGVhclN0b3JlKCk7XG4gICAgICAgIH1cbiAgICB9XG59XG5cblxuY2xhc3MgVE9OUXVlcmllc01vZHVsZUNvbGxlY3Rpb24gaW1wbGVtZW50cyBUT05RQ29sbGVjdGlvbiB7XG4gICAgbW9kdWxlOiBUT05RdWVyaWVzTW9kdWxlO1xuXG4gICAgY29sbGVjdGlvbk5hbWU6IHN0cmluZztcblxuICAgIHR5cGVOYW1lOiBzdHJpbmc7XG5cbiAgICBjb25zdHJ1Y3RvcihcbiAgICAgICAgbW9kdWxlOiBUT05RdWVyaWVzTW9kdWxlLFxuICAgICAgICBjb2xsZWN0aW9uTmFtZTogc3RyaW5nLFxuICAgICAgICB0eXBlTmFtZTogc3RyaW5nLFxuICAgICkge1xuICAgICAgICB0aGlzLm1vZHVsZSA9IG1vZHVsZTtcbiAgICAgICAgdGhpcy5jb2xsZWN0aW9uTmFtZSA9IGNvbGxlY3Rpb25OYW1lO1xuICAgICAgICB0aGlzLnR5cGVOYW1lID0gdHlwZU5hbWU7XG4gICAgfVxuXG4gICAgYXN5bmMgcXVlcnkoXG4gICAgICAgIC4uLmFyZ3NcbiAgICAgICAgLypcbiAgICAgICAgICAgIGZpbHRlck9yUGFyYW1zOiBhbnkgfCBUT05RdWVyeVBhcmFtcyxcbiAgICAgICAgICAgIHJlc3VsdDogc3RyaW5nLFxuICAgICAgICAgICAgb3JkZXJCeT86IE9yZGVyQnlbXSxcbiAgICAgICAgICAgIGxpbWl0PzogbnVtYmVyLFxuICAgICAgICAgICAgdGltZW91dD86IG51bWJlcixcbiAgICAgICAgICAgIHBhcmVudFNwYW4/OiAoU3BhbiB8IFNwYW5Db250ZXh0KVxuICAgICAgICAgKi9cbiAgICApOiBQcm9taXNlPGFueT4ge1xuICAgICAgICBjb25zdCB7XG4gICAgICAgICAgICBmaWx0ZXIsXG4gICAgICAgICAgICByZXN1bHQsXG4gICAgICAgICAgICBvcmRlckJ5LFxuICAgICAgICAgICAgbGltaXQsXG4gICAgICAgICAgICB0aW1lb3V0LFxuICAgICAgICAgICAgb3BlcmF0aW9uSWQsXG4gICAgICAgICAgICBwYXJlbnRTcGFuLFxuICAgICAgICB9ID0gcmVzb2x2ZVBhcmFtczxUT05RdWVyeVBhcmFtcz4oYXJncywgJ2ZpbHRlcicsICgpID0+ICh7XG4gICAgICAgICAgICBmaWx0ZXI6IGFyZ3NbMF0sXG4gICAgICAgICAgICByZXN1bHQ6IChhcmdzWzFdOiBhbnkpLFxuICAgICAgICAgICAgb3JkZXJCeTogKGFyZ3NbMl06IGFueSksXG4gICAgICAgICAgICBsaW1pdDogKGFyZ3NbM106IGFueSksXG4gICAgICAgICAgICB0aW1lb3V0OiAoYXJnc1s0XTogYW55KSxcbiAgICAgICAgICAgIHBhcmVudFNwYW46IGFyZ3NbNV0sXG4gICAgICAgIH0pKTtcbiAgICAgICAgcmV0dXJuIHRoaXMubW9kdWxlLmNvbnRleHQudHJhY2UoYCR7dGhpcy5jb2xsZWN0aW9uTmFtZX0ucXVlcnlgLCBhc3luYyAoc3BhbikgPT4ge1xuICAgICAgICAgICAgc3Bhbi5zZXRUYWcoJ3BhcmFtcycsIHtcbiAgICAgICAgICAgICAgICBmaWx0ZXIsXG4gICAgICAgICAgICAgICAgcmVzdWx0LFxuICAgICAgICAgICAgICAgIG9yZGVyQnksXG4gICAgICAgICAgICAgICAgbGltaXQsXG4gICAgICAgICAgICAgICAgdGltZW91dCxcbiAgICAgICAgICAgICAgICBvcGVyYXRpb25JZCxcbiAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgY29uc3QgdXNlT3BlcmF0aW9uSWQgPSBvcGVyYXRpb25JZFxuICAgICAgICAgICAgICAgICYmIChhd2FpdCB0aGlzLm1vZHVsZS5nZXRTZXJ2ZXJJbmZvKHNwYW4pKS5zdXBwb3J0c09wZXJhdGlvbklkO1xuICAgICAgICAgICAgY29uc3QgYyA9IHRoaXMuY29sbGVjdGlvbk5hbWU7XG4gICAgICAgICAgICBjb25zdCB0ID0gdGhpcy50eXBlTmFtZTtcbiAgICAgICAgICAgIGNvbnN0IHFsID0gYFxuICAgICAgICAgICAgcXVlcnkgJHtjfShcbiAgICAgICAgICAgICAgICAkZmlsdGVyOiAke3R9RmlsdGVyLFxuICAgICAgICAgICAgICAgICRvcmRlckJ5OiBbUXVlcnlPcmRlckJ5XSwgXG4gICAgICAgICAgICAgICAgJGxpbWl0OiBJbnQsIFxuICAgICAgICAgICAgICAgICR0aW1lb3V0OiBGbG9hdFxuICAgICAgICAgICAgICAgICR7dXNlT3BlcmF0aW9uSWQgPyAnLCAkb3BlcmF0aW9uSWQ6IFN0cmluZycgOiAnJ31cbiAgICAgICAgICAgICApIHtcbiAgICAgICAgICAgICAgICAke2N9KFxuICAgICAgICAgICAgICAgICAgICBmaWx0ZXI6ICRmaWx0ZXIsIFxuICAgICAgICAgICAgICAgICAgICBvcmRlckJ5OiAkb3JkZXJCeSwgXG4gICAgICAgICAgICAgICAgICAgIGxpbWl0OiAkbGltaXQsIFxuICAgICAgICAgICAgICAgICAgICB0aW1lb3V0OiAkdGltZW91dFxuICAgICAgICAgICAgICAgICAgICAke3VzZU9wZXJhdGlvbklkID8gJywgb3BlcmF0aW9uSWQ6ICRvcGVyYXRpb25JZCcgOiAnJ31cbiAgICAgICAgICAgICAgICApIHsgJHtyZXN1bHR9IH1cbiAgICAgICAgICAgIH1gO1xuICAgICAgICAgICAgY29uc3QgdmFyaWFibGVzOiB7IFtzdHJpbmddOiBhbnkgfSA9IHtcbiAgICAgICAgICAgICAgICBmaWx0ZXIsXG4gICAgICAgICAgICAgICAgb3JkZXJCeSxcbiAgICAgICAgICAgICAgICBsaW1pdCxcbiAgICAgICAgICAgIH07XG4gICAgICAgICAgICBpZiAodXNlT3BlcmF0aW9uSWQpIHtcbiAgICAgICAgICAgICAgICB2YXJpYWJsZXMub3BlcmF0aW9uSWQgPSBvcGVyYXRpb25JZDtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGlmICh0aW1lb3V0KSB7XG4gICAgICAgICAgICAgICAgdmFyaWFibGVzLnRpbWVvdXQgPSBNYXRoLm1pbihNQVhfVElNRU9VVCwgdGltZW91dCk7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICByZXR1cm4gKGF3YWl0IHRoaXMubW9kdWxlLmdyYXBocWxRdWVyeShxbCwgdmFyaWFibGVzLCBzcGFuKSkuZGF0YVtjXTtcbiAgICAgICAgfSwgcGFyZW50U3Bhbik7XG4gICAgfVxuXG4gICAgYXN5bmMgYWdncmVnYXRlKFxuICAgICAgICBwYXJhbXM6IFRPTlF1ZXJ5QWdncmVnYXRlUGFyYW1zLFxuICAgICk6IFByb21pc2U8c3RyaW5nW10+IHtcbiAgICAgICAgcmV0dXJuIHRoaXMubW9kdWxlLmNvbnRleHQudHJhY2UoYCR7dGhpcy5jb2xsZWN0aW9uTmFtZX0uYWdncmVnYXRlYCwgYXN5bmMgKHNwYW4pID0+IHtcbiAgICAgICAgICAgIHNwYW4uc2V0VGFnKCdwYXJhbXMnLCB7XG4gICAgICAgICAgICAgICAgZmlsdGVyOiBwYXJhbXMuZmlsdGVyLFxuICAgICAgICAgICAgICAgIGZpZWxkczogcGFyYW1zLmZpZWxkcyxcbiAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgaWYgKCEoYXdhaXQgdGhpcy5tb2R1bGUuZ2V0U2VydmVySW5mbyhzcGFuKSkuc3VwcG9ydHNBZ2dyZWdhdGlvbnMpIHtcbiAgICAgICAgICAgICAgICB0aHJvdyBUT05DbGllbnRFcnJvci5zZXJ2ZXJEb2VzbnRTdXBwb3J0QWdncmVnYXRpb25zKCk7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBjb25zdCB0ID0gdGhpcy50eXBlTmFtZTtcbiAgICAgICAgICAgIGNvbnN0IHEgPSB0aGlzLnR5cGVOYW1lLmVuZHNXaXRoKCdzJykgPyBgYWdncmVnYXRlJHt0fWAgOiBgYWdncmVnYXRlJHt0fXNgO1xuICAgICAgICAgICAgY29uc3QgcWwgPSBgXG4gICAgICAgICAgICBxdWVyeSAke3F9KFxuICAgICAgICAgICAgICAgICRmaWx0ZXI6ICR7dH1GaWx0ZXIsXG4gICAgICAgICAgICAgICAgJGZpZWxkczogW0ZpZWxkQWdncmVnYXRpb25dIFxuICAgICAgICAgICAgICkge1xuICAgICAgICAgICAgICAgICR7cX0oXG4gICAgICAgICAgICAgICAgICAgIGZpbHRlcjogJGZpbHRlciwgXG4gICAgICAgICAgICAgICAgICAgIGZpZWxkczogJGZpZWxkcyBcbiAgICAgICAgICAgICAgICApXG4gICAgICAgICAgICB9YDtcbiAgICAgICAgICAgIGNvbnN0IHZhcmlhYmxlczogeyBbc3RyaW5nXTogYW55IH0gPSB7XG4gICAgICAgICAgICAgICAgZmlsdGVyOiBwYXJhbXMuZmlsdGVyLFxuICAgICAgICAgICAgICAgIGZpZWxkczogcGFyYW1zLmZpZWxkcyxcbiAgICAgICAgICAgIH07XG4gICAgICAgICAgICByZXR1cm4gKGF3YWl0IHRoaXMubW9kdWxlLmdyYXBocWxRdWVyeShxbCwgdmFyaWFibGVzLCBzcGFuKSkuZGF0YVtxXTtcbiAgICAgICAgfSwgcGFyYW1zLnBhcmVudFNwYW4pO1xuICAgIH1cblxuICAgIHN1YnNjcmliZShcbiAgICAgICAgLi4uYXJnc1xuICAgICAgICAvKlxuICAgICAgICBmaWx0ZXJPclBhcmFtczogYW55IHwgVE9OU3Vic2NyaWJlUGFyYW1zLFxuICAgICAgICByZXN1bHQ/OiBzdHJpbmcsXG4gICAgICAgIG9uRG9jRXZlbnQ/OiBEb2NFdmVudCxcbiAgICAgICAgb25FcnJvcj86IChlcnI6IEVycm9yKSA9PiB2b2lkXG4gICAgICAgICAqL1xuICAgICk6IFN1YnNjcmlwdGlvbiB7XG4gICAgICAgIGNvbnN0IHtcbiAgICAgICAgICAgIGZpbHRlcixcbiAgICAgICAgICAgIHJlc3VsdCxcbiAgICAgICAgICAgIG9uRG9jRXZlbnQsXG4gICAgICAgICAgICBvbkVycm9yLFxuICAgICAgICB9ID0gcmVzb2x2ZVBhcmFtczxUT05TdWJzY3JpYmVQYXJhbXM+KGFyZ3MsICdmaWx0ZXInLCAoKSA9PiAoe1xuICAgICAgICAgICAgZmlsdGVyOiBhcmdzWzBdLFxuICAgICAgICAgICAgcmVzdWx0OiAoYXJnc1sxXTogYW55KSxcbiAgICAgICAgICAgIG9uRG9jRXZlbnQ6IChhcmdzWzJdOiBhbnkpLFxuICAgICAgICAgICAgb25FcnJvcjogKGFyZ3NbM106IGFueSksXG4gICAgICAgIH0pKTtcbiAgICAgICAgY29uc3Qgc3BhbiA9IHRoaXMubW9kdWxlLmNvbmZpZy50cmFjZXIuc3RhcnRTcGFuKCdUT05RdWVyaWVzTW9kdWxlLmpzOnN1YnNjcmliZSAnKTtcbiAgICAgICAgc3Bhbi5zZXRUYWcoVGFncy5TUEFOX0tJTkQsICdjbGllbnQnKTtcbiAgICAgICAgY29uc3QgdGV4dCA9IGBzdWJzY3JpcHRpb24gJHt0aGlzLmNvbGxlY3Rpb25OYW1lfSgkZmlsdGVyOiAke3RoaXMudHlwZU5hbWV9RmlsdGVyKSB7XG4gICAgICAgICAgICAke3RoaXMuY29sbGVjdGlvbk5hbWV9KGZpbHRlcjogJGZpbHRlcikgeyAke3Jlc3VsdH0gfVxuICAgICAgICB9YDtcbiAgICAgICAgY29uc3QgcXVlcnkgPSBncWwoW3RleHRdKTtcbiAgICAgICAgbGV0IHN1YnNjcmlwdGlvbiA9IG51bGw7XG4gICAgICAgIChhc3luYyAoKSA9PiB7XG4gICAgICAgICAgICB0cnkge1xuICAgICAgICAgICAgICAgIGNvbnN0IGNsaWVudCA9IGF3YWl0IHRoaXMubW9kdWxlLmdyYXBocWxDbGllbnRSZXF1aXJlZChzcGFuKTtcbiAgICAgICAgICAgICAgICBjb25zdCBvYnNlcnZhYmxlID0gY2xpZW50LnN1YnNjcmliZSh7XG4gICAgICAgICAgICAgICAgICAgIHF1ZXJ5LFxuICAgICAgICAgICAgICAgICAgICB2YXJpYWJsZXM6IHtcbiAgICAgICAgICAgICAgICAgICAgICAgIGZpbHRlcixcbiAgICAgICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICB9KTtcbiAgICAgICAgICAgICAgICBzdWJzY3JpcHRpb24gPSBvYnNlcnZhYmxlLnN1YnNjcmliZSgobWVzc2FnZSkgPT4ge1xuICAgICAgICAgICAgICAgICAgICBvbkRvY0V2ZW50KCdpbnNlcnQvdXBkYXRlJywgbWVzc2FnZS5kYXRhW3RoaXMuY29sbGVjdGlvbk5hbWVdKTtcbiAgICAgICAgICAgICAgICB9KTtcbiAgICAgICAgICAgIH0gY2F0Y2ggKGVycm9yKSB7XG4gICAgICAgICAgICAgICAgc3Bhbi5sb2coe1xuICAgICAgICAgICAgICAgICAgICBldmVudDogJ2ZhaWxlZCcsXG4gICAgICAgICAgICAgICAgICAgIHBheWxvYWQ6IGVycm9yLFxuICAgICAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgICAgIGlmIChvbkVycm9yKSB7XG4gICAgICAgICAgICAgICAgICAgIG9uRXJyb3IoZXJyb3IpO1xuICAgICAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgICAgICAgIGNvbnNvbGUubG9nKCdUT04gQ2xpZW50IHN1YnNjcmlwdGlvbiBlcnJvcicsIGVycm9yKTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG4gICAgICAgIH0pKCk7XG4gICAgICAgIHJldHVybiB7XG4gICAgICAgICAgICB1bnN1YnNjcmliZTogKCkgPT4ge1xuICAgICAgICAgICAgICAgIGlmIChzdWJzY3JpcHRpb24pIHtcbiAgICAgICAgICAgICAgICAgICAgc3Vic2NyaXB0aW9uLnVuc3Vic2NyaWJlKCk7XG4gICAgICAgICAgICAgICAgICAgIHNwYW4uZmluaXNoKCk7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfSxcbiAgICAgICAgfTtcbiAgICB9XG5cbiAgICBhc3luYyB3YWl0Rm9yKFxuICAgICAgICAuLi5hcmdzXG4gICAgICAgIC8qXG4gICAgICAgIGZpbHRlck9yUGFyYW1zOiBhbnkgfCBUT05XYWl0Rm9yUGFyYW1zLFxuICAgICAgICByZXN1bHQ6IHN0cmluZyxcbiAgICAgICAgdGltZW91dD86IG51bWJlcixcbiAgICAgICAgcGFyZW50U3Bhbj86IChTcGFuIHwgU3BhbkNvbnRleHQpXG4gICAgICAgICAqL1xuICAgICk6IFByb21pc2U8YW55PiB7XG4gICAgICAgIGNvbnN0IHtcbiAgICAgICAgICAgIGZpbHRlcixcbiAgICAgICAgICAgIHJlc3VsdCxcbiAgICAgICAgICAgIHRpbWVvdXQ6IHBhcmFtc1RpbWVvdXQsXG4gICAgICAgICAgICBwYXJlbnRTcGFuLFxuICAgICAgICAgICAgb3BlcmF0aW9uSWQsXG4gICAgICAgIH0gPSByZXNvbHZlUGFyYW1zPFRPTldhaXRGb3JQYXJhbXM+KGFyZ3MsICdmaWx0ZXInLCAoKSA9PiAoe1xuICAgICAgICAgICAgZmlsdGVyOiBhcmdzWzBdLFxuICAgICAgICAgICAgcmVzdWx0OiAoYXJnc1sxXTogYW55KSxcbiAgICAgICAgICAgIHRpbWVvdXQ6IChhcmdzWzJdOiBhbnkpLFxuICAgICAgICAgICAgcGFyZW50U3BhbjogYXJnc1szXSxcbiAgICAgICAgfSkpO1xuICAgICAgICBjb25zdCB0aW1lb3V0ID0gcGFyYW1zVGltZW91dCB8fCB0aGlzLm1vZHVsZS5jb25maWcud2FpdEZvclRpbWVvdXQoKTtcbiAgICAgICAgY29uc3QgZG9jcyA9IGF3YWl0IHRoaXMucXVlcnkoe1xuICAgICAgICAgICAgZmlsdGVyLFxuICAgICAgICAgICAgcmVzdWx0LFxuICAgICAgICAgICAgdGltZW91dCxcbiAgICAgICAgICAgIHBhcmVudFNwYW4sXG4gICAgICAgICAgICBvcGVyYXRpb25JZCxcbiAgICAgICAgfSk7XG4gICAgICAgIGlmIChkb2NzLmxlbmd0aCA+IDApIHtcbiAgICAgICAgICAgIHJldHVybiBkb2NzWzBdO1xuICAgICAgICB9XG4gICAgICAgIHRocm93IFRPTkNsaWVudEVycm9yLndhaXRGb3JUaW1lb3V0KCk7XG4gICAgfVxufVxuXG5UT05RdWVyaWVzTW9kdWxlLm1vZHVsZU5hbWUgPSAnVE9OUXVlcmllc01vZHVsZSc7XG4iXX0=