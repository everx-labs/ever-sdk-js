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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy9tb2R1bGVzL1RPTlF1ZXJpZXNNb2R1bGUuanMiXSwibmFtZXMiOlsiS0VFUF9BTElWRV9USU1FT1VUIiwiTUFYX1RJTUVPVVQiLCJyZXNvbHZlUGFyYW1zIiwiYXJncyIsInJlcXVpcmVkUGFyYW1OYW1lIiwicmVzb2x2ZUFyZ3MiLCJsZW5ndGgiLCJNdWx0aWNhc3RQcm9taXNlIiwibGlzdGVuZXJzIiwib25Db21wbGV0ZSIsImxpc3RlbmVyIiwicmVzb2x2ZSIsInJlamVjdCIsInB1c2giLCJQcm9taXNlIiwidmFsdWUiLCJjb21wbGV0ZSIsImVycm9yIiwiY29tcGxldGVMaXN0ZW5lciIsImZvckVhY2giLCJ2ZXJzaW9uVG9OdW1iZXIiLCJzIiwicGFydHMiLCJzcGxpdCIsIm1hcCIsIngiLCJOdW1iZXIiLCJzbGljZSIsInJlc29sdmVTZXJ2ZXJJbmZvIiwidmVyc2lvblN0cmluZyIsInZlcnNpb24iLCJzdXBwb3J0c09wZXJhdGlvbklkIiwic3VwcG9ydHNBZ2dyZWdhdGlvbnMiLCJzdXBwb3J0c1RpbWUiLCJ0aW1lRGVsdGEiLCJUT05RdWVyaWVzTW9kdWxlIiwiY29udGV4dCIsImdyYXBocWxDbGllbnQiLCJncmFwaHFsQ2xpZW50Q3JlYXRpb24iLCJncmFwaHFsQ2xpZW50Q29uZmlnIiwib3ZlcnJpZGVXc1VybCIsIm9wZXJhdGlvbklkUHJlZml4IiwiRGF0ZSIsIm5vdyIsInRvU3RyaW5nIiwiaSIsIk1hdGgiLCJyb3VuZCIsInJhbmRvbSIsIm9wZXJhdGlvbklkU3VmZml4Iiwic2VydmVySW5mbyIsImNvbmZpZyIsImdldE1vZHVsZSIsIlRPTkNvbmZpZ01vZHVsZSIsInRyYW5zYWN0aW9ucyIsIlRPTlF1ZXJpZXNNb2R1bGVDb2xsZWN0aW9uIiwibWVzc2FnZXMiLCJibG9ja3MiLCJhY2NvdW50cyIsImJsb2Nrc19zaWduYXR1cmVzIiwiZmV0Y2giLCJzb3VyY2VVcmwiLCJyZXNwb25zZSIsImpzb24iLCJkYXRhIiwiaW5mbyIsInJlZGlyZWN0ZWQiLCJ1cmwiLCJzb3VyY2VMb2NhdGlvbiIsIlVSTFBhcnRzIiwicGFyc2UiLCJmaXhRdWVyeSIsIl8iLCJ0b0xvd2VyQ2FzZSIsInJlc3BvbnNlTG9jYXRpb24iLCJnZXRDb25maWdGb3JTZXJ2ZXIiLCJzZXJ2ZXIiLCJodHRwUGFydHMiLCJmaXhQcm90b2NvbCIsImZpeFBhdGgiLCJodHRwIiwid3MiLCJodHRwVXJsIiwid3NVcmwiLCJjbGllbnRQbGF0Zm9ybSIsIldlYlNvY2tldCIsIlRPTkNsaWVudCIsIkVycm9yIiwic2VydmVycyIsImNsaWVudENvbmZpZyIsImRldGVjdFJlZGlyZWN0IiwiY29uc29sZSIsImxvZyIsImVycm9yU3RyaW5nIiwic3BhbiIsImdyYXBocWxDbGllbnRSZXF1aXJlZCIsImdldFNlcnZlckluZm8iLCJzdGFydCIsImVuZCIsInJlc3BvbnNlRGF0YSIsInNlcnZlclRpbWUiLCJ0aW1lIiwic2VydmVyVGltZURlbHRhIiwib3BlcmF0aW9uSWRzIiwiZ3JhcGhxbE11dGF0aW9uIiwicGFyZW50U3BhbiIsInF1ZXJ5IiwidW5kZWZpbmVkIiwicmVzdWx0IiwiZ2V0QWNjb3VudHNDb3VudCIsImdldFRyYW5zYWN0aW9uc0NvdW50IiwiZ2V0QWNjb3VudHNUb3RhbEJhbGFuY2UiLCJyZXF1ZXN0cyIsInRyYWNlIiwicWwiLCJ2YXJpYWJsZXMiLCJzZXRUYWciLCJtdXRhdGlvbiIsImdyYXBocWxRdWVyeSIsImdyYXBoUWwiLCJjbGllbnQiLCJtdXRhdGUiLCJ0cmFjZVNwYW4iLCJuZXh0VGltZW91dCIsImlzTmV0d29ya0Vycm9yIiwid2FybiIsIm5ldHdvcmtFcnJvciIsInRpbWVvdXQiLCJzZXRUaW1lb3V0IiwicmVxdWVzdCIsImdxbEVyciIsImdyYXBoUUxFcnJvcnMiLCJjbGllbnRFcnIiLCJtZXNzYWdlIiwiZ3FsRXhjIiwiZXh0ZW5zaW9ucyIsImV4Y2VwdGlvbiIsIm51bWJlciIsImNvZGUiLCJzb3VyY2UiLCJlcnJvcnMiLCJUT05DbGllbnRFcnJvciIsInF1ZXJ5RmFpbGVkIiwibGlzdGVuIiwiY3JlYXRpb24iLCJjcmVhdGVHcmFwaHFsQ2xpZW50IiwidXNlSHR0cCIsInVzZVdlYlNvY2tldEZvclF1ZXJpZXMiLCJnZXRDbGllbnRDb25maWciLCJ3c0xpbmsiLCJodHRwTGluayIsInN1YnNPcHRpb25zIiwidHJhY2VyIiwiaW5qZWN0IiwiRk9STUFUX1RFWFRfTUFQIiwic3Vic2NyaXB0aW9uQ2xpZW50IiwiU3Vic2NyaXB0aW9uQ2xpZW50IiwicmVjb25uZWN0IiwiY29ubmVjdGlvblBhcmFtcyIsImFjY2Vzc0tleSIsImhlYWRlcnMiLCJvblJlY29ubmVjdGVkIiwiZGV0ZWN0aW5nUmVkaXJlY3Rpb24iLCJvbkVycm9yIiwibmV3Q29uZmlnIiwiY29uZmlnSXNDaGFuZ2VkIiwidXJpIiwibWF4Q29ubmVjdFRpbWVHZW5lcmF0b3IiLCJkdXJhdGlvbiIsIm1heCIsInJlcSIsInJlc29sdmVkU3BhbiIsInRyYWNlckxpbmsiLCJ3cmFwTGluayIsImxpbmsiLCJjb25jYXQiLCJpc1N1YnNjcmlwdGlvbiIsImRlZmluaXRpb24iLCJraW5kIiwib3BlcmF0aW9uIiwiV2ViU29ja2V0TGluayIsIkh0dHBMaW5rIiwiQXBvbGxvQ2xpZW50IiwiY2FjaGUiLCJJbk1lbW9yeUNhY2hlIiwiZGVmYXVsdE9wdGlvbnMiLCJ3YXRjaFF1ZXJ5IiwiZmV0Y2hQb2xpY3kiLCJzdG9wIiwiY2xlYXJTdG9yZSIsIlRPTk1vZHVsZSIsIm1vZHVsZSIsImNvbGxlY3Rpb25OYW1lIiwidHlwZU5hbWUiLCJmaWx0ZXIiLCJvcmRlckJ5IiwibGltaXQiLCJvcGVyYXRpb25JZCIsInVzZU9wZXJhdGlvbklkIiwiYyIsInQiLCJtaW4iLCJwYXJhbXMiLCJmaWVsZHMiLCJzZXJ2ZXJEb2VzbnRTdXBwb3J0QWdncmVnYXRpb25zIiwicSIsImVuZHNXaXRoIiwib25Eb2NFdmVudCIsInN0YXJ0U3BhbiIsIlRhZ3MiLCJTUEFOX0tJTkQiLCJ0ZXh0Iiwic3Vic2NyaXB0aW9uIiwib2JzZXJ2YWJsZSIsInN1YnNjcmliZSIsImV2ZW50IiwicGF5bG9hZCIsInVuc3Vic2NyaWJlIiwiZmluaXNoIiwicGFyYW1zVGltZW91dCIsIndhaXRGb3JUaW1lb3V0IiwiZG9jcyIsIm1vZHVsZU5hbWUiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBa0JBOztBQUNBOztBQUNBOztBQUNBOztBQUNBOztBQUNBOztBQUNBOztBQUNBOztBQUNBOztBQUNBOztBQVdBOztBQUVBOztBQUNBOzs7Ozs7Ozs7Ozs7QUF1QkE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsSUFBTUEsa0JBQWtCLEdBQUcsSUFBSSxLQUEvQjtBQUVPLElBQU1DLFdBQVcsR0FBRyxVQUFwQjs7O0FBRVAsU0FBU0MsYUFBVCxDQUEwQkMsSUFBMUIsRUFBdUNDLGlCQUF2QyxFQUFrRUMsV0FBbEUsRUFBMkY7QUFDdkYsU0FBUUYsSUFBSSxDQUFDRyxNQUFMLEtBQWdCLENBQWpCLElBQXdCRixpQkFBaUIsSUFBSUQsSUFBSSxDQUFDLENBQUQsQ0FBakQsR0FBd0RBLElBQUksQ0FBQyxDQUFELENBQTVELEdBQWtFRSxXQUFXLEVBQXBGO0FBQ0g7O0lBT0tFLGdCO0FBSUYsOEJBQWM7QUFBQTtBQUFBO0FBQUE7QUFDVixTQUFLQyxTQUFMLEdBQWlCLEVBQWpCO0FBQ0EsU0FBS0MsVUFBTCxHQUFrQixJQUFsQjtBQUNIOzs7OzZCQUV3QjtBQUNyQixVQUFNQyxRQUFrQyxHQUFHO0FBQ3ZDQyxRQUFBQSxPQUFPLEVBQUUsbUJBQU0sQ0FDZCxDQUZzQztBQUd2Q0MsUUFBQUEsTUFBTSxFQUFFLGtCQUFNLENBQ2I7QUFKc0MsT0FBM0M7QUFNQSxXQUFLSixTQUFMLENBQWVLLElBQWYsQ0FBb0JILFFBQXBCO0FBQ0EsYUFBTyxJQUFJSSxPQUFKLENBQVksVUFBQ0gsT0FBRCxFQUFVQyxNQUFWLEVBQXFCO0FBQ3BDRixRQUFBQSxRQUFRLENBQUNDLE9BQVQsR0FBbUJBLE9BQW5CO0FBQ0FE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VSxFQUFWQSxVQUowQjtBQUsxQjRGLGtCQUFBQSxXQUFXLEVBQVhBO0FBTDBCLGlCQUFYLEM7OztBQUFid0IsZ0JBQUFBLEk7O3NCQU9GQSxJQUFJLENBQUN2TixNQUFMLEdBQWMsQzs7Ozs7bURBQ1B1TixJQUFJLENBQUMsQ0FBRCxDOzs7c0JBRVRoRiwwQkFBZStFLGNBQWYsRTs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFJZHpMLGdCQUFnQixDQUFDMkwsVUFBakIsR0FBOEIsa0JBQTlCIiwic291cmNlc0NvbnRlbnQiOlsiLypcbiAqIENvcHlyaWdodCAyMDE4LTIwMjAgVE9OIERFViBTT0xVVElPTlMgTFRELlxuICpcbiAqIExpY2Vuc2VkIHVuZGVyIHRoZSBTT0ZUV0FSRSBFVkFMVUFUSU9OIExpY2Vuc2UgKHRoZSBcIkxpY2Vuc2VcIik7IHlvdSBtYXkgbm90IHVzZVxuICogdGhpcyBmaWxlIGV4Y2VwdCBpbiBjb21wbGlhbmNlIHdpdGggdGhlIExpY2Vuc2UuICBZb3UgbWF5IG9idGFpbiBhIGNvcHkgb2YgdGhlXG4gKiBMaWNlbnNlIGF0OlxuICpcbiAqIGh0dHA6Ly93d3cudG9uLmRldi9saWNlbnNlc1xuICpcbiAqIFVubGVzcyByZXF1aXJlZCBieSBhcHBsaWNhYmxlIGxhdyBvciBhZ3JlZWQgdG8gaW4gd3JpdGluZywgc29mdHdhcmVcbiAqIGRpc3RyaWJ1dGVkIHVuZGVyIHRoZSBMaWNlbnNlIGlzIGRpc3RyaWJ1dGVkIG9uIGFuIFwiQVMgSVNcIiBCQVNJUyxcbiAqIFdJVEhPVVQgV0FSUkFOVElFUyBPUiBDT05ESVRJT05TIE9GIEFOWSBLSU5ELCBlaXRoZXIgZXhwcmVzcyBvciBpbXBsaWVkLlxuICogU2VlIHRoZSBMaWNlbnNlIGZvciB0aGUgc3BlY2lmaWMgVE9OIERFViBzb2Z0d2FyZSBnb3Zlcm5pbmcgcGVybWlzc2lvbnMgYW5kXG4gKiBsaW1pdGF0aW9ucyB1bmRlciB0aGUgTGljZW5zZS5cbiAqL1xuXG4vLyBAZmxvd1xuXG5pbXBvcnQgeyBJbk1lbW9yeUNhY2hlIH0gZnJvbSAnYXBvbGxvLWNhY2hlLWlubWVtb3J5JztcbmltcG9ydCB7IEFwb2xsb0NsaWVudCB9IGZyb20gJ2Fwb2xsby1jbGllbnQnO1xuaW1wb3J0IHsgQXBvbGxvTGluaywgc3BsaXQgfSBmcm9tICdhcG9sbG8tbGluayc7XG5pbXBvcnQgeyBIdHRwTGluayB9IGZyb20gJ2Fwb2xsby1saW5rLWh0dHAnO1xuaW1wb3J0IHsgV2ViU29ja2V0TGluayB9IGZyb20gJ2Fwb2xsby1saW5rLXdzJztcbmltcG9ydCB7IGdldE1haW5EZWZpbml0aW9uIH0gZnJvbSAnYXBvbGxvLXV0aWxpdGllcyc7XG5pbXBvcnQgZ3FsIGZyb20gJ2dyYXBocWwtdGFnJztcbmltcG9ydCB7IFN1YnNjcmlwdGlvbkNsaWVudCB9IGZyb20gJ3N1YnNjcmlwdGlvbnMtdHJhbnNwb3J0LXdzJztcbmltcG9ydCB7IHNldENvbnRleHQgfSBmcm9tICdhcG9sbG8tbGluay1jb250ZXh0JztcbmltcG9ydCB7XG4gICAgRk9STUFUX1RFWFRfTUFQLCBUYWdzLCBTcGFuLCBTcGFuQ29udGV4dCxcbn0gZnJvbSAnb3BlbnRyYWNpbmcnO1xuaW1wb3J0IHR5cGUge1xuICAgIFRPTlF1ZXJpZXMsXG4gICAgVE9OUUNvbGxlY3Rpb24sXG4gICAgU3Vic2NyaXB0aW9uLFxuICAgIFRPTlF1ZXJ5UGFyYW1zLFxuICAgIFRPTlN1YnNjcmliZVBhcmFtcyxcbiAgICBUT05XYWl0Rm9yUGFyYW1zLCBUT05RdWVyeUFnZ3JlZ2F0ZVBhcmFtcyxcbn0gZnJvbSAnLi4vLi4vdHlwZXMnO1xuaW1wb3J0IHsgVE9OQ2xpZW50LCBUT05DbGllbnRFcnJvciB9IGZyb20gJy4uL1RPTkNsaWVudCc7XG5pbXBvcnQgdHlwZSB7IFRPTk1vZHVsZUNvbnRleHQgfSBmcm9tICcuLi9UT05Nb2R1bGUnO1xuaW1wb3J0IHsgVE9OTW9kdWxlIH0gZnJvbSAnLi4vVE9OTW9kdWxlJztcbmltcG9ydCBUT05Db25maWdNb2R1bGUsIHsgVVJMUGFydHMgfSBmcm9tICcuL1RPTkNvbmZpZ01vZHVsZSc7XG5cblxuZXhwb3J0IHR5cGUgUmVxdWVzdCA9IHtcbiAgICBpZDogc3RyaW5nLFxuICAgIGJvZHk6IHN0cmluZyxcbn1cblxuZXhwb3J0IHR5cGUgU2VydmVySW5mbyA9IHtcbiAgICB2ZXJzaW9uOiBudW1iZXIsXG4gICAgc3VwcG9ydHNPcGVyYXRpb25JZDogYm9vbGVhbixcbiAgICBzdXBwb3J0c0FnZ3JlZ2F0aW9uczogYm9vbGVhbixcbiAgICBzdXBwb3J0c1RpbWU6IGJvb2xlYW4sXG4gICAgdGltZURlbHRhOiA/bnVtYmVyLFxufTtcblxudHlwZSBHcmFwaFFMQ2xpZW50Q29uZmlnID0ge1xuICAgIGh0dHBVcmw6IHN0cmluZyxcbiAgICB3c1VybDogc3RyaW5nLFxuICAgIGZldGNoOiBhbnksXG4gICAgV2ViU29ja2V0OiBhbnksXG59O1xuXG4vLyBLZWVwLWFsaXZlIHRpbWVvdXQgdXNlZCB0byBzdXBwb3J0IGtlZXAtYWxpdmUgY29ubmVjdGlvbiBjaGVja2luZzpcbi8vIC0gRXZlcnkgMSBtaW51dGUgc2VydmVyIHNlbmRzIEdRTF9DT05ORUNUSU9OX0tFRVBfQUxJVkUgbWVzc2FnZS5cbi8vIC0gRXZlcnkgMiBtaW51dGVzIGNsaWVudCBjaGVja3MgdGhhdCBHUUxfQ09OTkVDVElPTl9LRUVQX0FMSVZFIG1lc3NhZ2Ugd2FzIHJlY2VpdmVkXG4vLyAgIHdpdGhpbiBsYXN0IDIgbWludXRlcy5cbi8vIC0gSWYgY2xpZW50IGhhZG4ndCByZWNlaXZlZCBrZWVwIGFsaXZlIG1lc3NhZ2UgZHVyaW5nIGxhc3QgMiBtaW51dGVzXG4vLyAgIGl0IGNsb3NlcyBjb25uZWN0aW9uIGFuZCBnb2VzIHRvIHJlY29ubmVjdC5cbmNvbnN0IEtFRVBfQUxJVkVfVElNRU9VVCA9IDIgKiA2MDAwMDtcblxuZXhwb3J0IGNvbnN0IE1BWF9USU1FT1VUID0gMjE0NzQ4MzY0NztcblxuZnVuY3Rpb24gcmVzb2x2ZVBhcmFtczxUPihhcmdzOiBhbnlbXSwgcmVxdWlyZWRQYXJhbU5hbWU6IHN0cmluZywgcmVzb2x2ZUFyZ3M6ICgpID0+IFQpOiBUIHtcbiAgICByZXR1cm4gKGFyZ3MubGVuZ3RoID09PSAxKSAmJiAocmVxdWlyZWRQYXJhbU5hbWUgaW4gYXJnc1swXSkgPyBhcmdzWzBdIDogcmVzb2x2ZUFyZ3MoKTtcbn1cblxudHlwZSBNdWx0aWNhc3RMaXN0ZW5lcjxWYWx1ZT4gPSB7XG4gICAgcmVzb2x2ZTogKHZhbHVlOiBWYWx1ZSkgPT4gdm9pZDtcbiAgICByZWplY3Q6IChlcnJvcjogRXJyb3IpID0+IHZvaWQ7XG59O1xuXG5jbGFzcyBNdWx0aWNhc3RQcm9taXNlPFZhbHVlPiB7XG4gICAgbGlzdGVuZXJzOiBNdWx0aWNhc3RMaXN0ZW5lcjxWYWx1ZT5bXTtcbiAgICBvbkNvbXBsZXRlOiA/KCgpID0+IHZvaWQpO1xuXG4gICAgY29uc3RydWN0b3IoKSB7XG4gICAgICAgIHRoaXMubGlzdGVuZXJzID0gW107XG4gICAgICAgIHRoaXMub25Db21wbGV0ZSA9IG51bGw7XG4gICAgfVxuXG4gICAgbGlzdGVuKCk6IFByb21pc2U8VmFsdWU+IHtcbiAgICAgICAgY29uc3QgbGlzdGVuZXI6IE11bHRpY2FzdExpc3RlbmVyPFZhbHVlPiA9IHtcbiAgICAgICAgICAgIHJlc29sdmU6ICgpID0+IHtcbiAgICAgICAgICAgIH0sXG4gICAgICAgICAgICByZWplY3Q6ICgpID0+IHtcbiAgICAgICAgICAgIH0sXG4gICAgICAgIH07XG4gICAgICAgIHRoaXMubGlzdGVuZXJzLnB1c2gobGlzdGVuZXIpO1xuICAgICAgICByZXR1cm4gbmV3IFByb21pc2UoKHJlc29sdmUsIHJlamVjdCkgPT4ge1xuICAgICAgICAgICAgbGlzdGVuZXIucmVzb2x2ZSA9IHJlc29sdmU7XG4gICAgICAgICAgICBsaXN0ZW5lci5yZWplY3QgPSByZWplY3Q7XG4gICAgICAgIH0pO1xuICAgIH1cblxuICAgIHJlc29sdmUodmFsdWU6IFZhbHVlKSB7XG4gICAgICAgIHRoaXMuY29tcGxldGUobGlzdGVuZXIgPT4gbGlzdGVuZXIucmVzb2x2ZSh2YWx1ZSkpO1xuICAgIH1cblxuICAgIHJlamVjdChlcnJvcjogRXJyb3IpIHtcbiAgICAgICAgdGhpcy5jb21wbGV0ZShsaXN0ZW5lciA9PiBsaXN0ZW5lci5yZWplY3QoZXJyb3IpKTtcbiAgICB9XG5cbiAgICBjb21wbGV0ZShjb21wbGV0ZUxpc3RlbmVyOiAobGlzdGVuZXI6IE11bHRpY2FzdExpc3RlbmVyPFZhbHVlPikgPT4gdm9pZCkge1xuICAgICAgICBjb25zdCB7IGxpc3RlbmVycyB9ID0gdGhpcztcbiAgICAgICAgdGhpcy5saXN0ZW5lcnMgPSBbXTtcbiAgICAgICAgaWYgKHRoaXMub25Db21wbGV0ZSkge1xuICAgICAgICAgICAgdGhpcy5vbkNvbXBsZXRlKCk7XG4gICAgICAgIH1cbiAgICAgICAgbGlzdGVuZXJzLmZvckVhY2gobGlzdGVuZXIgPT4gY29tcGxldGVMaXN0ZW5lcihsaXN0ZW5lcikpO1xuICAgIH1cbn1cblxuZnVuY3Rpb24gdmVyc2lvblRvTnVtYmVyKHM6IHN0cmluZyk6IG51bWJlciB7XG4gICAgY29uc3QgcGFydHMgPSBgJHtzIHx8ICcnfWAuc3BsaXQoJy4nKVxuICAgICAgICAubWFwKHggPT4gTnVtYmVyKHgpKVxuICAgICAgICAuc2xpY2UoMCwgMyk7XG4gICAgd2hpbGUgKHBhcnRzLmxlbmd0aCA8IDMpIHtcbiAgICAgICAgcGFydHMucHVzaCgwKTtcbiAgICB9XG4gICAgcmV0dXJuIHBhcnRzWzBdICogMTAwMDAwMCArIHBhcnRzWzFdICogMTAwMCArIHBhcnRzWzJdO1xufVxuXG5mdW5jdGlvbiByZXNvbHZlU2VydmVySW5mbyh2ZXJzaW9uU3RyaW5nOiBzdHJpbmcgfCBudWxsIHwgdHlwZW9mIHVuZGVmaW5lZCk6IFNlcnZlckluZm8ge1xuICAgIGNvbnN0IHZlcnNpb24gPSB2ZXJzaW9uVG9OdW1iZXIodmVyc2lvblN0cmluZyB8fCAnMC4yNC40Jyk7XG4gICAgcmV0dXJuIHtcbiAgICAgICAgdmVyc2lvbixcbiAgICAgICAgc3VwcG9ydHNPcGVyYXRpb25JZDogdmVyc2lvbiA+IDI0MDA0LFxuICAgICAgICBzdXBwb3J0c0FnZ3JlZ2F0aW9uczogdmVyc2lvbiA+PSAyNTAwMCxcbiAgICAgICAgc3VwcG9ydHNUaW1lOiB2ZXJzaW9uID49IDI2MDAzLFxuICAgICAgICB0aW1lRGVsdGE6IG51bGwsXG4gICAgfTtcbn1cblxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgVE9OUXVlcmllc01vZHVsZSBleHRlbmRzIFRPTk1vZHVsZSBpbXBsZW1lbnRzIFRPTlF1ZXJpZXMge1xuICAgIHRyYW5zYWN0aW9uczogVE9OUUNvbGxlY3Rpb247XG4gICAgbWVzc2FnZXM6IFRPTlFDb2xsZWN0aW9uO1xuICAgIGJsb2NrczogVE9OUUNvbGxlY3Rpb247XG4gICAgYWNjb3VudHM6IFRPTlFDb2xsZWN0aW9uO1xuICAgIGJsb2Nrc19zaWduYXR1cmVzOiBUT05RQ29sbGVjdGlvbjtcblxuICAgIGNvbmZpZzogVE9OQ29uZmlnTW9kdWxlO1xuXG4gICAgZ3JhcGhxbENsaWVudENyZWF0aW9uOiA/TXVsdGljYXN0UHJvbWlzZTxBcG9sbG9DbGllbnQ+O1xuICAgIGdyYXBocWxDbGllbnQ6ID9BcG9sbG9DbGllbnQ7XG4gICAgZ3JhcGhxbENsaWVudENvbmZpZzogP0dyYXBoUUxDbGllbnRDb25maWc7XG5cbiAgICBvdmVycmlkZVdzVXJsOiA/c3RyaW5nO1xuICAgIG9wZXJhdGlvbklkUHJlZml4OiBzdHJpbmc7XG4gICAgb3BlcmF0aW9uSWRTdWZmaXg6IG51bWJlcjtcbiAgICBzZXJ2ZXJJbmZvOiBTZXJ2ZXJJbmZvO1xuXG4gICAgY29uc3RydWN0b3IoY29udGV4dDogVE9OTW9kdWxlQ29udGV4dCkge1xuICAgICAgICBzdXBlcihjb250ZXh0KTtcbiAgICAgICAgdGhpcy5ncmFwaHFsQ2xpZW50ID0gbnVsbDtcbiAgICAgICAgdGhpcy5ncmFwaHFsQ2xpZW50Q3JlYXRpb24gPSBudWxsO1xuICAgICAgICB0aGlzLmdyYXBocWxDbGllbnRDb25maWcgPSBudWxsO1xuICAgICAgICB0aGlzLm92ZXJyaWRlV3NVcmwgPSBudWxsO1xuICAgICAgICB0aGlzLm9wZXJhdGlvbklkUHJlZml4ID0gKERhdGUubm93KCkgJSA2MDAwMCkudG9TdHJpbmcoMTYpO1xuICAgICAgICBmb3IgKGxldCBpID0gMDsgaSA8IDEwOyBpICs9IDEpIHtcbiAgICAgICAgICAgIHRoaXMub3BlcmF0aW9uSWRQcmVmaXggPVxuICAgICAgICAgICAgICAgIGAke3RoaXMub3BlcmF0aW9uSWRQcmVmaXh9JHtNYXRoLnJvdW5kKE1hdGgucmFuZG9tKCkgKiAyNTYpXG4gICAgICAgICAgICAgICAgICAgIC50b1N0cmluZygxNil9YDtcbiAgICAgICAgfVxuICAgICAgICB0aGlzLm9wZXJhdGlvbklkU3VmZml4ID0gMTtcbiAgICAgICAgdGhpcy5zZXJ2ZXJJbmZvID0gcmVzb2x2ZVNlcnZlckluZm8oKTtcbiAgICB9XG5cbiAgICBhc3luYyBzZXR1cCgpIHtcbiAgICAgICAgdGhpcy5jb25maWcgPSB0aGlzLmNvbnRleHQuZ2V0TW9kdWxlKFRPTkNvbmZpZ01vZHVsZSk7XG4gICAgICAgIHRoaXMudHJhbnNhY3Rpb25zID0gbmV3IFRPTlF1ZXJpZXNNb2R1bGVDb2xsZWN0aW9uKHRoaXMsICd0cmFuc2FjdGlvbnMnLCAnVHJhbnNhY3Rpb24nKTtcbiAgICAgICAgdGhpcy5tZXNzYWdlcyA9IG5ldyBUT05RdWVyaWVzTW9kdWxlQ29sbGVjdGlvbih0aGlzLCAnbWVzc2FnZXMnLCAnTWVzc2FnZScpO1xuICAgICAgICB0aGlzLmJsb2NrcyA9IG5ldyBUT05RdWVyaWVzTW9kdWxlQ29sbGVjdGlvbih0aGlzLCAnYmxvY2tzJywgJ0Jsb2NrJyk7XG4gICAgICAgIHRoaXMuYWNjb3VudHMgPSBuZXcgVE9OUXVlcmllc01vZHVsZUNvbGxlY3Rpb24odGhpcywgJ2FjY291bnRzJywgJ0FjY291bnQnKTtcbiAgICAgICAgdGhpcy5ibG9ja3Nfc2lnbmF0dXJlcyA9IG5ldyBUT05RdWVyaWVzTW9kdWxlQ29sbGVjdGlvbih0aGlzLCAnYmxvY2tzX3NpZ25hdHVyZXMnLCAnQmxvY2tTaWduYXR1cmVzJyk7XG4gICAgfVxuXG4gICAgYXN5bmMgZGV0ZWN0UmVkaXJlY3QoZmV0Y2g6IGFueSwgc291cmNlVXJsOiBzdHJpbmcpOiBQcm9taXNlPHN0cmluZz4ge1xuICAgICAgICBjb25zdCByZXNwb25zZSA9IGF3YWl0IGZldGNoKHNvdXJjZVVybCk7XG4gICAgICAgIHRyeSB7XG4gICAgICAgICAgICB0aGlzLnNlcnZlckluZm8gPSByZXNvbHZlU2VydmVySW5mbygoYXdhaXQgcmVzcG9uc2UuanNvbigpKS5kYXRhLmluZm8udmVyc2lvbik7XG4gICAgICAgIH0gY2F0Y2gge1xuICAgICAgICB9XG4gICAgICAgIGlmIChyZXNwb25zZS5yZWRpcmVjdGVkID09PSB0cnVlKSB7XG4gICAgICAgICAgICByZXR1cm4gcmVzcG9uc2UudXJsO1xuICAgICAgICB9XG4gICAgICAgIGlmIChyZXNwb25zZS5yZWRpcmVjdGVkID09PSBmYWxzZSkge1xuICAgICAgICAgICAgcmV0dXJuICcnO1xuICAgICAgICB9XG4gICAgICAgIGNvbnN0IHNvdXJjZUxvY2F0aW9uID0gVVJMUGFydHMucGFyc2Uoc291cmNlVXJsKVxuICAgICAgICAgICAgLmZpeFF1ZXJ5KF8gPT4gJycpXG4gICAgICAgICAgICAudG9TdHJpbmcoKVxuICAgICAgICAgICAgLnRvTG93ZXJDYXNlKCk7XG4gICAgICAgIGNvbnN0IHJlc3BvbnNlTG9jYXRpb24gPSBVUkxQYXJ0cy5wYXJzZShyZXNwb25zZS51cmwpXG4gICAgICAgICAgICAuZml4UXVlcnkoXyA9PiAnJylcbiAgICAgICAgICAgIC50b1N0cmluZygpXG4gICAgICAgICAgICAudG9Mb3dlckNhc2UoKTtcbiAgICAgICAgcmV0dXJuIHJlc3BvbnNlTG9jYXRpb24gIT09IHNvdXJjZUxvY2F0aW9uID8gcmVzcG9uc2UudXJsIDogJyc7XG4gICAgfVxuXG4gICAgYXN5bmMgZ2V0Q2xpZW50Q29uZmlnKCk6IFByb21pc2U8R3JhcGhRTENsaWVudENvbmZpZz4ge1xuICAgICAgICBjb25zdCBjb25maWcgPSB0aGlzLmNvbmZpZztcbiAgICAgICAgY29uc3QgY2xpZW50UGxhdGZvcm0gPSBUT05DbGllbnQuY2xpZW50UGxhdGZvcm07XG4gICAgICAgIGlmICghY2xpZW50UGxhdGZvcm0pIHtcbiAgICAgICAgICAgIHRocm93IEVycm9yKCdUT04gQ2xpZW50IGRvZXMgbm90IGNvbmZpZ3VyZWQnKTtcbiAgICAgICAgfVxuICAgICAgICBjb25zdCBmZXRjaCA9IGNsaWVudFBsYXRmb3JtLmZldGNoO1xuXG4gICAgICAgIGZ1bmN0aW9uIGdldENvbmZpZ0ZvclNlcnZlcihzZXJ2ZXI6IHN0cmluZyk6IEdyYXBoUUxDbGllbnRDb25maWcge1xuICAgICAgICAgICAgY29uc3QgaHR0cFBhcnRzID0gVVJMUGFydHMucGFyc2Uoc2VydmVyKVxuICAgICAgICAgICAgICAgIC5maXhQcm90b2NvbCh4ID0+ICh4ID09PSAnaHR0cDovLycgPyB4IDogJ2h0dHBzOi8vJykpXG4gICAgICAgICAgICAgICAgLmZpeFBhdGgoeCA9PiBgJHt4fS9ncmFwaHFsYCk7XG4gICAgICAgICAgICBjb25zdCBodHRwID0gaHR0cFBhcnRzLnRvU3RyaW5nKCk7XG4gICAgICAgICAgICBjb25zdCB3cyA9IGh0dHBQYXJ0c1xuICAgICAgICAgICAgICAgIC5maXhQcm90b2NvbCh4ID0+ICh4ID09PSAnaHR0cDovLycgPyAnd3M6Ly8nIDogJ3dzczovLycpKVxuICAgICAgICAgICAgICAgIC50b1N0cmluZygpO1xuICAgICAgICAgICAgcmV0dXJuIHtcbiAgICAgICAgICAgICAgICBodHRwVXJsOiBodHRwLFxuICAgICAgICAgICAgICAgIHdzVXJsOiB3cyxcbiAgICAgICAgICAgICAgICBmZXRjaDogY2xpZW50UGxhdGZvcm0uZmV0Y2gsXG4gICAgICAgICAgICAgICAgV2ViU29ja2V0OiBjbGllbnRQbGF0Zm9ybS5XZWJTb2NrZXQsXG4gICAgICAgICAgICB9O1xuICAgICAgICB9XG5cbiAgICAgICAgZm9yIChjb25zdCBzZXJ2ZXIgb2YgY29uZmlnLmRhdGEuc2VydmVycykge1xuICAgICAgICAgICAgY29uc3QgY2xpZW50Q29uZmlnID0gZ2V0Q29uZmlnRm9yU2VydmVyKHNlcnZlcik7XG4gICAgICAgICAgICB0cnkge1xuICAgICAgICAgICAgICAgIC8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSBuby1hd2FpdC1pbi1sb29wXG4gICAgICAgICAgICAgICAgY29uc3QgcmVkaXJlY3RlZCA9IGF3YWl0IHRoaXMuZGV0ZWN0UmVkaXJlY3QoXG4gICAgICAgICAgICAgICAgICAgIGZldGNoLFxuICAgICAgICAgICAgICAgICAgICBgJHtjbGllbnRDb25maWcuaHR0cFVybH0/cXVlcnk9JTdCaW5mbyU3QnZlcnNpb24lN0QlN0RgLFxuICAgICAgICAgICAgICAgICk7XG4gICAgICAgICAgICAgICAgaWYgKHJlZGlyZWN0ZWQgIT09ICcnKSB7XG4gICAgICAgICAgICAgICAgICAgIGNvbnN0IGh0dHBQYXJ0cyA9IFVSTFBhcnRzLnBhcnNlKHJlZGlyZWN0ZWQpXG4gICAgICAgICAgICAgICAgICAgICAgICAuZml4UXVlcnkoXyA9PiAnJyk7XG4gICAgICAgICAgICAgICAgICAgIGNsaWVudENvbmZpZy5odHRwVXJsID0gaHR0cFBhcnRzLnRvU3RyaW5nKCk7XG4gICAgICAgICAgICAgICAgICAgIGNsaWVudENvbmZpZy53c1VybCA9IGh0dHBQYXJ0c1xuICAgICAgICAgICAgICAgICAgICAgICAgLmZpeFByb3RvY29sKHggPT4gKHggPT09ICdodHRwOi8vJyA/ICd3czovLycgOiAnd3NzOi8vJykpXG4gICAgICAgICAgICAgICAgICAgICAgICAudG9TdHJpbmcoKTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgcmV0dXJuIGNsaWVudENvbmZpZztcbiAgICAgICAgICAgIH0gY2F0Y2ggKGVycm9yKSB7XG4gICAgICAgICAgICAgICAgY29uc29sZS5sb2coYFtnZXRDbGllbnRDb25maWddIGZvciBzZXJ2ZXIgXCIke3NlcnZlcn1cIiBmYWlsZWRgLCB7XG4gICAgICAgICAgICAgICAgICAgIGNsaWVudENvbmZpZzoge1xuICAgICAgICAgICAgICAgICAgICAgICAgaHR0cFVybDogY2xpZW50Q29uZmlnLmh0dHBVcmwsXG4gICAgICAgICAgICAgICAgICAgICAgICB3c1VybDogY2xpZW50Q29uZmlnLndzVXJsLFxuICAgICAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgICAgICBlcnJvclN0cmluZzogZXJyb3IudG9TdHJpbmcoKSxcbiAgICAgICAgICAgICAgICAgICAgZXJyb3IsXG4gICAgICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgICAgcmV0dXJuIGdldENvbmZpZ0ZvclNlcnZlcihjb25maWcuZGF0YS5zZXJ2ZXJzWzBdKTtcbiAgICB9XG5cbiAgICBhc3luYyBnZXRTZXJ2ZXJJbmZvKHNwYW4/OiBTcGFuIHwgU3BhbkNvbnRleHQpOiBQcm9taXNlPFNlcnZlckluZm8+IHtcbiAgICAgICAgYXdhaXQgdGhpcy5ncmFwaHFsQ2xpZW50UmVxdWlyZWQoc3Bhbik7XG4gICAgICAgIHJldHVybiB0aGlzLnNlcnZlckluZm87XG4gICAgfVxuXG4gICAgYXN5bmMgc2VydmVyVGltZURlbHRhKHNwYW4/OiBTcGFuIHwgU3BhbkNvbnRleHQpOiBQcm9taXNlPG51bWJlcj4ge1xuICAgICAgICBjb25zdCBzZXJ2ZXJJbmZvID0gYXdhaXQgdGhpcy5nZXRTZXJ2ZXJJbmZvKHNwYW4pO1xuICAgICAgICBjb25zdCBjbGllbnRDb25maWcgPSB0aGlzLmdyYXBocWxDbGllbnRDb25maWc7XG4gICAgICAgIGlmIChjbGllbnRDb25maWcgJiYgc2VydmVySW5mby5zdXBwb3J0c1RpbWUgJiYgc2VydmVySW5mby50aW1lRGVsdGEgPT09IG51bGwpIHtcbiAgICAgICAgICAgIHRyeSB7XG4gICAgICAgICAgICAgICAgY29uc3Qgc3RhcnQgPSBEYXRlLm5vdygpO1xuICAgICAgICAgICAgICAgIGNvbnN0IHJlc3BvbnNlID0gYXdhaXQgY2xpZW50Q29uZmlnLmZldGNoKGAke2NsaWVudENvbmZpZy5odHRwVXJsfT9xdWVyeT0lN0JpbmZvJTdCdGltZSU3RCU3RGApO1xuICAgICAgICAgICAgICAgIGNvbnN0IGVuZCA9IERhdGUubm93KCk7XG4gICAgICAgICAgICAgICAgY29uc3QgcmVzcG9uc2VEYXRhID0gYXdhaXQgcmVzcG9uc2UuanNvbigpO1xuICAgICAgICAgICAgICAgIGNvbnN0IHNlcnZlclRpbWUgPSByZXNwb25zZURhdGEuZGF0YS5pbmZvLnRpbWU7XG4gICAgICAgICAgICAgICAgc2VydmVySW5mby50aW1lRGVsdGEgPSBNYXRoLnJvdW5kKHNlcnZlclRpbWUgLSAoc3RhcnQgKyAoZW5kIC0gc3RhcnQpIC8gMikpO1xuICAgICAgICAgICAgfSBjYXRjaCAoZXJyb3IpIHtcbiAgICAgICAgICAgICAgICBjb25zb2xlLmxvZygnPj4+JywgZXJyb3IpO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICAgIHJldHVybiBzZXJ2ZXJJbmZvLnRpbWVEZWx0YSB8fCAwO1xuICAgIH1cblxuICAgIGFzeW5jIHNlcnZlck5vdyhzcGFuPzogU3BhbiB8IFNwYW5Db250ZXh0KTogUHJvbWlzZTxudW1iZXI+IHtcbiAgICAgICAgY29uc3QgdGltZURlbHRhID0gYXdhaXQgdGhpcy5zZXJ2ZXJUaW1lRGVsdGEoc3Bhbik7XG4gICAgICAgIHJldHVybiBEYXRlLm5vdygpICsgdGltZURlbHRhO1xuICAgIH1cblxuICAgIGRyb3BTZXJ2ZXJUaW1lRGVsdGEoKSB7XG4gICAgICAgIGlmICh0aGlzLnNlcnZlckluZm8pIHtcbiAgICAgICAgICAgIHRoaXMuc2VydmVySW5mby50aW1lRGVsdGEgPSBudWxsO1xuICAgICAgICB9XG4gICAgfVxuXG4gICAgZ2VuZXJhdGVPcGVyYXRpb25JZCgpOiBzdHJpbmcge1xuICAgICAgICB0aGlzLm9wZXJhdGlvbklkU3VmZml4ICs9IDE7XG4gICAgICAgIHJldHVybiBgJHt0aGlzLm9wZXJhdGlvbklkUHJlZml4fSR7dGhpcy5vcGVyYXRpb25JZFN1ZmZpeC50b1N0cmluZygxNil9YDtcbiAgICB9XG5cbiAgICBhc3luYyBmaW5pc2hPcGVyYXRpb25zKG9wZXJhdGlvbklkczogc3RyaW5nW10pIHtcbiAgICAgICAgaWYgKG9wZXJhdGlvbklkcy5sZW5ndGggPT09IDApIHtcbiAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgfVxuICAgICAgICBpZiAoIShhd2FpdCB0aGlzLmdldFNlcnZlckluZm8oKSkuc3VwcG9ydHNPcGVyYXRpb25JZCkge1xuICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICB9XG4gICAgICAgIGF3YWl0IHRoaXMuZ3JhcGhxbE11dGF0aW9uKGBtdXRhdGlvbiBmaW5pc2hPcGVyYXRpb25zKCRvcGVyYXRpb25JZHM6IFtTdHJpbmddKSB7XG4gICAgICAgICAgICAgICAgZmluaXNoT3BlcmF0aW9ucyhvcGVyYXRpb25JZHM6ICRvcGVyYXRpb25JZHMpXG4gICAgICAgICAgICB9YCwge1xuICAgICAgICAgICAgb3BlcmF0aW9uSWRzLFxuICAgICAgICB9KTtcbiAgICB9XG5cbiAgICBhc3luYyBnZXRBY2NvdW50c0NvdW50KHBhcmVudFNwYW4/OiAoU3BhbiB8IFNwYW5Db250ZXh0KSk6IFByb21pc2U8bnVtYmVyPiB7XG4gICAgICAgIGNvbnN0IHJlc3VsdCA9IGF3YWl0IHRoaXMucXVlcnkoJ3F1ZXJ5e2dldEFjY291bnRzQ291bnR9JywgdW5kZWZpbmVkLCBwYXJlbnRTcGFuKTtcbiAgICAgICAgcmV0dXJuIHJlc3VsdC5kYXRhLmdldEFjY291bnRzQ291bnQ7XG4gICAgfVxuXG4gICAgYXN5bmMgZ2V0VHJhbnNhY3Rpb25zQ291bnQocGFyZW50U3Bhbj86IChTcGFuIHwgU3BhbkNvbnRleHQpKTogUHJvbWlzZTxudW1iZXI+IHtcbiAgICAgICAgY29uc3QgcmVzdWx0ID0gYXdhaXQgdGhpcy5xdWVyeSgncXVlcnl7Z2V0VHJhbnNhY3Rpb25zQ291bnR9JywgdW5kZWZpbmVkLCBwYXJlbnRTcGFuKTtcbiAgICAgICAgcmV0dXJuIHJlc3VsdC5kYXRhLmdldFRyYW5zYWN0aW9uc0NvdW50O1xuICAgIH1cblxuICAgIGFzeW5jIGdldEFjY291bnRzVG90YWxCYWxhbmNlKHBhcmVudFNwYW4/OiAoU3BhbiB8IFNwYW5Db250ZXh0KSk6IFByb21pc2U8c3RyaW5nPiB7XG4gICAgICAgIGNvbnN0IHJlc3VsdCA9IGF3YWl0IHRoaXMucXVlcnkoJ3F1ZXJ5e2dldEFjY291bnRzVG90YWxCYWxhbmNlfScsIHVuZGVmaW5lZCwgcGFyZW50U3Bhbik7XG4gICAgICAgIHJldHVybiByZXN1bHQuZGF0YS5nZXRBY2NvdW50c1RvdGFsQmFsYW5jZTtcbiAgICB9XG5cbiAgICBhc3luYyBwb3N0UmVxdWVzdHMocmVxdWVzdHM6IFJlcXVlc3RbXSwgcGFyZW50U3Bhbj86IChTcGFuIHwgU3BhbkNvbnRleHQpKTogUHJvbWlzZTxhbnk+IHtcbiAgICAgICAgcmV0dXJuIHRoaXMuY29udGV4dC50cmFjZSgncXVlcmllcy5wb3N0UmVxdWVzdHMnLCBhc3luYyAoc3BhbikgPT4ge1xuICAgICAgICAgICAgcmV0dXJuIHRoaXMuZ3JhcGhxbE11dGF0aW9uKGBtdXRhdGlvbiBwb3N0UmVxdWVzdHMoJHJlcXVlc3RzOiBbUmVxdWVzdF0pIHtcbiAgICAgICAgICAgICAgICBwb3N0UmVxdWVzdHMocmVxdWVzdHM6ICRyZXF1ZXN0cylcbiAgICAgICAgICAgIH1gLCB7XG4gICAgICAgICAgICAgICAgcmVxdWVzdHMsXG4gICAgICAgICAgICB9LCBzcGFuKTtcbiAgICAgICAgfSwgcGFyZW50U3Bhbik7XG4gICAgfVxuXG4gICAgYXN5bmMgbXV0YXRpb24oXG4gICAgICAgIHFsOiBzdHJpbmcsXG4gICAgICAgIHZhcmlhYmxlczogeyBbc3RyaW5nXTogYW55IH0gPSB7fSxcbiAgICAgICAgcGFyZW50U3Bhbj86IChTcGFuIHwgU3BhbkNvbnRleHQpLFxuICAgICk6IFByb21pc2U8YW55PiB7XG4gICAgICAgIHJldHVybiB0aGlzLmNvbnRleHQudHJhY2UoJ3F1ZXJpZXMubXV0YXRpb24nLCBhc3luYyAoc3BhbjogU3BhbikgPT4ge1xuICAgICAgICAgICAgc3Bhbi5zZXRUYWcoJ3BhcmFtcycsIHtcbiAgICAgICAgICAgICAgICBtdXRhdGlvbjogcWwsXG4gICAgICAgICAgICAgICAgdmFyaWFibGVzLFxuICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICByZXR1cm4gdGhpcy5ncmFwaHFsTXV0YXRpb24ocWwsIHZhcmlhYmxlcywgc3Bhbik7XG4gICAgICAgIH0sIHBhcmVudFNwYW4pO1xuICAgIH1cblxuICAgIGFzeW5jIHF1ZXJ5KFxuICAgICAgICBxbDogc3RyaW5nLFxuICAgICAgICB2YXJpYWJsZXM6IHsgW3N0cmluZ106IGFueSB9ID0ge30sXG4gICAgICAgIHBhcmVudFNwYW4/OiAoU3BhbiB8IFNwYW5Db250ZXh0KSxcbiAgICApOiBQcm9taXNlPGFueT4ge1xuICAgICAgICByZXR1cm4gdGhpcy5jb250ZXh0LnRyYWNlKCdxdWVyaWVzLnF1ZXJ5JywgYXN5bmMgKHNwYW46IFNwYW4pID0+IHtcbiAgICAgICAgICAgIHNwYW4uc2V0VGFnKCdwYXJhbXMnLCB7XG4gICAgICAgICAgICAgICAgcXVlcnk6IHFsLFxuICAgICAgICAgICAgICAgIHZhcmlhYmxlcyxcbiAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgcmV0dXJuIHRoaXMuZ3JhcGhxbFF1ZXJ5KHFsLCB2YXJpYWJsZXMsIHNwYW4pO1xuICAgICAgICB9LCBwYXJlbnRTcGFuKTtcbiAgICB9XG5cbiAgICBhc3luYyBncmFwaHFsTXV0YXRpb24ocWw6IHN0cmluZywgdmFyaWFibGVzOiB7IFtzdHJpbmddOiBhbnkgfSA9IHt9LCBzcGFuOiBTcGFuKTogUHJvbWlzZTxhbnk+IHtcbiAgICAgICAgY29uc3QgbXV0YXRpb24gPSBncWwoW3FsXSk7XG4gICAgICAgIHJldHVybiB0aGlzLmdyYXBoUWwoKGNsaWVudCkgPT4gY2xpZW50Lm11dGF0ZSh7XG4gICAgICAgICAgICBtdXRhdGlvbixcbiAgICAgICAgICAgIHZhcmlhYmxlcyxcbiAgICAgICAgICAgIGNvbnRleHQ6IHtcbiAgICAgICAgICAgICAgICB0cmFjZVNwYW46IHNwYW4sXG4gICAgICAgICAgICB9LFxuICAgICAgICB9KSk7XG4gICAgfVxuXG4gICAgc3RhdGljIGlzTmV0d29ya0Vycm9yKGVycm9yOiBhbnkpOiBib29sZWFuIHtcbiAgICAgICAgY29uc3QgbmV0d29ya0Vycm9yID0gZXJyb3IubmV0d29ya0Vycm9yO1xuICAgICAgICBpZiAoIW5ldHdvcmtFcnJvcikge1xuICAgICAgICAgICAgcmV0dXJuIGZhbHNlO1xuICAgICAgICB9XG4gICAgICAgIGlmICgnZXJybm8nIGluIG5ldHdvcmtFcnJvcikge1xuICAgICAgICAgICAgcmV0dXJuIHRydWU7XG4gICAgICAgIH1cbiAgICAgICAgcmV0dXJuICEoJ3Jlc3BvbnNlJyBpbiBuZXR3b3JrRXJyb3IgfHwgJ3Jlc3VsdCcgaW4gbmV0d29ya0Vycm9yKTtcbiAgICB9XG5cbiAgICBhc3luYyBncmFwaHFsUXVlcnkocWw6IHN0cmluZywgdmFyaWFibGVzOiB7IFtzdHJpbmddOiBhbnkgfSA9IHt9LCBzcGFuOiBTcGFuKTogUHJvbWlzZTxhbnk+IHtcbiAgICAgICAgY29uc3QgcXVlcnkgPSBncWwoW3FsXSk7XG4gICAgICAgIHJldHVybiB0aGlzLmdyYXBoUWwoYXN5bmMgKGNsaWVudCkgPT4ge1xuICAgICAgICAgICAgbGV0IG5leHRUaW1lb3V0ID0gMTAwO1xuICAgICAgICAgICAgd2hpbGUgKHRydWUpIHtcbiAgICAgICAgICAgICAgICB0cnkge1xuICAgICAgICAgICAgICAgICAgICByZXR1cm4gYXdhaXQgY2xpZW50LnF1ZXJ5KHtcbiAgICAgICAgICAgICAgICAgICAgICAgIHF1ZXJ5LFxuICAgICAgICAgICAgICAgICAgICAgICAgdmFyaWFibGVzLFxuICAgICAgICAgICAgICAgICAgICAgICAgY29udGV4dDoge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRyYWNlU3Bhbjogc3BhbixcbiAgICAgICAgICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgICAgIH0gY2F0Y2ggKGVycm9yKSB7XG4gICAgICAgICAgICAgICAgICAgIGlmIChUT05RdWVyaWVzTW9kdWxlLmlzTmV0d29ya0Vycm9yKGVycm9yKSkge1xuICAgICAgICAgICAgICAgICAgICAgICAgY29uc29sZS53YXJuKGVycm9yLm5ldHdvcmtFcnJvcik7XG4gICAgICAgICAgICAgICAgICAgICAgICBjb25zdCB0aW1lb3V0ID0gbmV4dFRpbWVvdXQ7XG4gICAgICAgICAgICAgICAgICAgICAgICBhd2FpdCBuZXcgUHJvbWlzZSh4ID0+IHNldFRpbWVvdXQoeCwgdGltZW91dCkpO1xuICAgICAgICAgICAgICAgICAgICAgICAgaWYgKG5leHRUaW1lb3V0IDwgMzIwMCkge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIG5leHRUaW1lb3V0ICo9IDI7XG4gICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgICAgICAgICAgICB0aHJvdyBlcnJvcjtcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cbiAgICAgICAgfSwgc3Bhbik7XG4gICAgfVxuXG4gICAgYXN5bmMgZ3JhcGhRbChyZXF1ZXN0OiAoY2xpZW50OiBBcG9sbG9DbGllbnQpID0+IFByb21pc2U8YW55Piwgc3BhbjogU3Bhbik6IFByb21pc2U8YW55PiB7XG4gICAgICAgIGNvbnN0IGNsaWVudCA9IGF3YWl0IHRoaXMuZ3JhcGhxbENsaWVudFJlcXVpcmVkKHNwYW4pO1xuICAgICAgICB0cnkge1xuICAgICAgICAgICAgcmV0dXJuIGF3YWl0IHJlcXVlc3QoY2xpZW50KTtcbiAgICAgICAgfSBjYXRjaCAoZXJyb3IpIHtcbiAgICAgICAgICAgIGNvbnN0IGdxbEVyciA9IGVycm9yLmdyYXBoUUxFcnJvcnMgJiYgZXJyb3IuZ3JhcGhRTEVycm9yc1swXTtcbiAgICAgICAgICAgIGlmIChncWxFcnIpIHtcbiAgICAgICAgICAgICAgICBjb25zdCBjbGllbnRFcnIgPSBuZXcgRXJyb3IoZ3FsRXJyLm1lc3NhZ2UpO1xuICAgICAgICAgICAgICAgIGNvbnN0IGdxbEV4YyA9IChncWxFcnIuZXh0ZW5zaW9ucyAmJiBncWxFcnIuZXh0ZW5zaW9ucy5leGNlcHRpb24pIHx8IHt9O1xuICAgICAgICAgICAgICAgIChjbGllbnRFcnI6IGFueSkubnVtYmVyID0gZ3FsRXhjLmNvZGUgfHwgMDtcbiAgICAgICAgICAgICAgICAoY2xpZW50RXJyOiBhbnkpLmNvZGUgPSBncWxFeGMuY29kZSB8fCAwO1xuICAgICAgICAgICAgICAgIChjbGllbnRFcnI6IGFueSkuc291cmNlID0gZ3FsRXhjLnNvdXJjZSB8fCAnY2xpZW50JztcbiAgICAgICAgICAgICAgICB0aHJvdyBjbGllbnRFcnI7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBjb25zdCBlcnJvcnMgPSBlcnJvclxuICAgICAgICAgICAgICAgICYmIGVycm9yLm5ldHdvcmtFcnJvclxuICAgICAgICAgICAgICAgICYmIGVycm9yLm5ldHdvcmtFcnJvci5yZXN1bHRcbiAgICAgICAgICAgICAgICAmJiBlcnJvci5uZXR3b3JrRXJyb3IucmVzdWx0LmVycm9ycztcbiAgICAgICAgICAgIGlmIChlcnJvcnMpIHtcbiAgICAgICAgICAgICAgICB0aHJvdyBUT05DbGllbnRFcnJvci5xdWVyeUZhaWxlZChlcnJvcnMpO1xuICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgICB0aHJvdyBlcnJvcjtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgIH1cblxuICAgIGFzeW5jIGdyYXBocWxDbGllbnRSZXF1aXJlZChwYXJlbnRTcGFuPzogU3BhbiB8IFNwYW5Db250ZXh0KTogUHJvbWlzZTxBcG9sbG9DbGllbnQ+IHtcbiAgICAgICAgaWYgKHRoaXMuZ3JhcGhxbENsaWVudCkge1xuICAgICAgICAgICAgcmV0dXJuIHRoaXMuZ3JhcGhxbENsaWVudDtcbiAgICAgICAgfVxuICAgICAgICBpZiAodGhpcy5ncmFwaHFsQ2xpZW50Q3JlYXRpb24pIHtcbiAgICAgICAgICAgIGF3YWl0IHRoaXMuZ3JhcGhxbENsaWVudENyZWF0aW9uLmxpc3RlbigpO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgY29uc3QgY3JlYXRpb24gPSBuZXcgTXVsdGljYXN0UHJvbWlzZSgpO1xuICAgICAgICAgICAgdGhpcy5ncmFwaHFsQ2xpZW50Q3JlYXRpb24gPSBjcmVhdGlvbjtcbiAgICAgICAgICAgIHRyeSB7XG4gICAgICAgICAgICAgICAgYXdhaXQgdGhpcy5jb250ZXh0LnRyYWNlKCdzZXR1cCBjbGllbnQnLCAoc3BhbikgPT4ge1xuICAgICAgICAgICAgICAgICAgICByZXR1cm4gdGhpcy5jcmVhdGVHcmFwaHFsQ2xpZW50KHNwYW4pO1xuICAgICAgICAgICAgICAgIH0sIHBhcmVudFNwYW4pO1xuICAgICAgICAgICAgICAgIHRoaXMuZ3JhcGhxbENsaWVudENyZWF0aW9uID0gbnVsbDtcbiAgICAgICAgICAgICAgICBjcmVhdGlvbi5yZXNvbHZlKHRoaXMuZ3JhcGhxbENsaWVudCk7XG4gICAgICAgICAgICB9IGNhdGNoIChlcnJvcikge1xuICAgICAgICAgICAgICAgIHRoaXMuZ3JhcGhxbENsaWVudENyZWF0aW9uID0gbnVsbDtcbiAgICAgICAgICAgICAgICBjcmVhdGlvbi5yZWplY3QoZXJyb3IpO1xuICAgICAgICAgICAgICAgIHRocm93IGVycm9yO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICAgIHJldHVybiB0aGlzLmdyYXBocWxDbGllbnQ7XG4gICAgfVxuXG4gICAgYXN5bmMgY3JlYXRlR3JhcGhxbENsaWVudChzcGFuOiBTcGFuIHwgU3BhbkNvbnRleHQpIHtcbiAgICAgICAgY29uc3QgdXNlSHR0cCA9ICF0aGlzLmNvbmZpZy5kYXRhLnVzZVdlYlNvY2tldEZvclF1ZXJpZXM7XG4gICAgICAgIGxldCBjbGllbnRDb25maWcgPSBhd2FpdCB0aGlzLmdldENsaWVudENvbmZpZygpO1xuICAgICAgICBsZXQgd3NMaW5rOiA/V2ViU29ja2V0TGluayA9IG51bGw7XG4gICAgICAgIGxldCBodHRwTGluazogP0h0dHBMaW5rID0gbnVsbDtcblxuICAgICAgICBjb25zdCBzdWJzT3B0aW9ucyA9IHRoaXMuY29uZmlnLnRyYWNlci5pbmplY3Qoc3BhbiwgRk9STUFUX1RFWFRfTUFQLCB7fSk7XG4gICAgICAgIGNvbnN0IHN1YnNjcmlwdGlvbkNsaWVudCA9IG5ldyBTdWJzY3JpcHRpb25DbGllbnQoXG4gICAgICAgICAgICBjbGllbnRDb25maWcud3NVcmwsXG4gICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgdGltZW91dDogS0VFUF9BTElWRV9USU1FT1VULFxuICAgICAgICAgICAgICAgIHJlY29ubmVjdDogdHJ1ZSxcbiAgICAgICAgICAgICAgICBjb25uZWN0aW9uUGFyYW1zOiAoKSA9PiAoe1xuICAgICAgICAgICAgICAgICAgICBhY2Nlc3NLZXk6IHRoaXMuY29uZmlnLmRhdGEgJiYgdGhpcy5jb25maWcuZGF0YS5hY2Nlc3NLZXksXG4gICAgICAgICAgICAgICAgICAgIGhlYWRlcnM6IHN1YnNPcHRpb25zLFxuICAgICAgICAgICAgICAgIH0pLFxuICAgICAgICAgICAgfSxcbiAgICAgICAgICAgIGNsaWVudENvbmZpZy5XZWJTb2NrZXQsXG4gICAgICAgICk7XG4gICAgICAgIHN1YnNjcmlwdGlvbkNsaWVudC5vblJlY29ubmVjdGVkKCgpID0+IHtcbiAgICAgICAgICAgIGNvbnNvbGUubG9nKCdbVE9OQ2xpZW50LnF1ZXJpZXNdJywgJ1dlYlNvY2tldCBSZWNvbm5lY3RlZCcpO1xuICAgICAgICB9KTtcbiAgICAgICAgbGV0IGRldGVjdGluZ1JlZGlyZWN0aW9uID0gZmFsc2U7XG4gICAgICAgIHN1YnNjcmlwdGlvbkNsaWVudC5vbkVycm9yKCgpID0+IHtcbiAgICAgICAgICAgIGNvbnNvbGUubG9nKCdbVE9OQ2xpZW50LnF1ZXJpZXNdJywgJ1dlYlNvY2tldCBGYWlsZWQnKTtcbiAgICAgICAgICAgIGlmIChkZXRlY3RpbmdSZWRpcmVjdGlvbikge1xuICAgICAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIChhc3luYyAoKSA9PiB7XG4gICAgICAgICAgICAgICAgZGV0ZWN0aW5nUmVkaXJlY3Rpb24gPSB0cnVlO1xuICAgICAgICAgICAgICAgIHRyeSB7XG4gICAgICAgICAgICAgICAgICAgIGNvbnN0IG5ld0NvbmZpZyA9IGF3YWl0IHRoaXMuZ2V0Q2xpZW50Q29uZmlnKCk7XG4gICAgICAgICAgICAgICAgICAgIGNvbnN0IGNvbmZpZ0lzQ2hhbmdlZCA9IG5ld0NvbmZpZy5odHRwVXJsICE9PSBjbGllbnRDb25maWcuaHR0cFVybFxuICAgICAgICAgICAgICAgICAgICAgICAgfHwgbmV3Q29uZmlnLndzVXJsICE9PSBjbGllbnRDb25maWcud3NVcmw7XG4gICAgICAgICAgICAgICAgICAgIGlmIChjb25maWdJc0NoYW5nZWQpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIGNvbnNvbGUubG9nKCdbVE9OQ2xpZW50LnF1ZXJpZXNdJywgJ0NsaWVudCBjb25maWcgY2hhbmdlZCcpO1xuICAgICAgICAgICAgICAgICAgICAgICAgY2xpZW50Q29uZmlnID0gbmV3Q29uZmlnO1xuICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5ncmFwaHFsQ2xpZW50Q29uZmlnID0gY2xpZW50Q29uZmlnO1xuICAgICAgICAgICAgICAgICAgICAgICAgc3Vic2NyaXB0aW9uQ2xpZW50LnVybCA9IG5ld0NvbmZpZy53c1VybDtcbiAgICAgICAgICAgICAgICAgICAgICAgIGlmICh3c0xpbmspIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB3c0xpbmsudXJsID0gbmV3Q29uZmlnLndzVXJsO1xuICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgICAgaWYgKGh0dHBMaW5rKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgaHR0cExpbmsudXJpID0gbmV3Q29uZmlnLmh0dHBVcmw7XG4gICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICB9IGNhdGNoIChlcnIpIHtcbiAgICAgICAgICAgICAgICAgICAgY29uc29sZS5sb2coJ1tUT05DbGllbnQucXVlcmllc10gcmVkaXJlY3Rpb24gZGV0ZWN0b3IgZmFpbGVkJywgZXJyKTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgZGV0ZWN0aW5nUmVkaXJlY3Rpb24gPSBmYWxzZTtcbiAgICAgICAgICAgIH0pKCk7XG4gICAgICAgIH0pO1xuICAgICAgICBzdWJzY3JpcHRpb25DbGllbnQubWF4Q29ubmVjdFRpbWVHZW5lcmF0b3IuZHVyYXRpb24gPSAoKSA9PiB7XG4gICAgICAgICAgICByZXR1cm4gc3Vic2NyaXB0aW9uQ2xpZW50Lm1heENvbm5lY3RUaW1lR2VuZXJhdG9yLm1heDtcbiAgICAgICAgfTtcblxuICAgICAgICBjb25zdCB0cmFjZXJMaW5rID0gYXdhaXQgc2V0Q29udGV4dCgoXywgcmVxKSA9PiB7XG4gICAgICAgICAgICBjb25zdCByZXNvbHZlZFNwYW4gPSAocmVxICYmIHJlcS50cmFjZVNwYW4pIHx8IHNwYW47XG4gICAgICAgICAgICByZXEuaGVhZGVycyA9IHt9O1xuICAgICAgICAgICAgdGhpcy5jb25maWcudHJhY2VyLmluamVjdChyZXNvbHZlZFNwYW4sIEZPUk1BVF9URVhUX01BUCwgcmVxLmhlYWRlcnMpO1xuICAgICAgICAgICAgY29uc3QgYWNjZXNzS2V5ID0gdGhpcy5jb25maWcuZGF0YSAmJiB0aGlzLmNvbmZpZy5kYXRhLmFjY2Vzc0tleTtcbiAgICAgICAgICAgIGlmIChhY2Nlc3NLZXkpIHtcbiAgICAgICAgICAgICAgICByZXEuaGVhZGVycy5hY2Nlc3NLZXkgPSBhY2Nlc3NLZXk7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICByZXR1cm4ge1xuICAgICAgICAgICAgICAgIGhlYWRlcnM6IHJlcS5oZWFkZXJzLFxuICAgICAgICAgICAgfTtcbiAgICAgICAgfSk7XG4gICAgICAgIGNvbnN0IHdyYXBMaW5rID0gKGxpbms6IEFwb2xsb0xpbmspOiBBcG9sbG9MaW5rID0+IHRyYWNlckxpbmsuY29uY2F0KGxpbmspO1xuICAgICAgICBjb25zdCBpc1N1YnNjcmlwdGlvbiA9ICh7IHF1ZXJ5IH0pID0+IHtcbiAgICAgICAgICAgIGNvbnN0IGRlZmluaXRpb24gPSBnZXRNYWluRGVmaW5pdGlvbihxdWVyeSk7XG4gICAgICAgICAgICByZXR1cm4gKFxuICAgICAgICAgICAgICAgIGRlZmluaXRpb24ua2luZCA9PT0gJ09wZXJhdGlvbkRlZmluaXRpb24nXG4gICAgICAgICAgICAgICAgJiYgZGVmaW5pdGlvbi5vcGVyYXRpb24gPT09ICdzdWJzY3JpcHRpb24nXG4gICAgICAgICAgICApO1xuICAgICAgICB9O1xuICAgICAgICB3c0xpbmsgPSBuZXcgV2ViU29ja2V0TGluayhzdWJzY3JpcHRpb25DbGllbnQpO1xuICAgICAgICBodHRwTGluayA9IHVzZUh0dHBcbiAgICAgICAgICAgID8gbmV3IEh0dHBMaW5rKHtcbiAgICAgICAgICAgICAgICB1cmk6IGNsaWVudENvbmZpZy5odHRwVXJsLFxuICAgICAgICAgICAgICAgIGZldGNoOiBjbGllbnRDb25maWcuZmV0Y2gsXG4gICAgICAgICAgICB9KVxuICAgICAgICAgICAgOiBudWxsO1xuXG4gICAgICAgIGNvbnN0IGxpbmsgPSBodHRwTGlua1xuICAgICAgICAgICAgPyBzcGxpdChpc1N1YnNjcmlwdGlvbiwgd3JhcExpbmsod3NMaW5rKSwgd3JhcExpbmsoaHR0cExpbmspKVxuICAgICAgICAgICAgOiB3cmFwTGluayh3c0xpbmspO1xuICAgICAgICB0aGlzLmdyYXBocWxDbGllbnRDb25maWcgPSBjbGllbnRDb25maWc7XG4gICAgICAgIHRoaXMuZ3JhcGhxbENsaWVudCA9IG5ldyBBcG9sbG9DbGllbnQoe1xuICAgICAgICAgICAgY2FjaGU6IG5ldyBJbk1lbW9yeUNhY2hlKHt9KSxcbiAgICAgICAgICAgIGxpbmssXG4gICAgICAgICAgICBkZWZhdWx0T3B0aW9uczoge1xuICAgICAgICAgICAgICAgIHdhdGNoUXVlcnk6IHtcbiAgICAgICAgICAgICAgICAgICAgZmV0Y2hQb2xpY3k6ICduby1jYWNoZScsXG4gICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICBxdWVyeToge1xuICAgICAgICAgICAgICAgICAgICBmZXRjaFBvbGljeTogJ25vLWNhY2hlJyxcbiAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgfSxcbiAgICAgICAgfSk7XG4gICAgfVxuXG4gICAgYXN5bmMgY2xvc2UoKSB7XG4gICAgICAgIGlmICh0aGlzLmdyYXBocWxDbGllbnQpIHtcbiAgICAgICAgICAgIGNvbnN0IGNsaWVudCA9IHRoaXMuZ3JhcGhxbENsaWVudDtcbiAgICAgICAgICAgIHRoaXMuZ3JhcGhxbENsaWVudCA9IG51bGw7XG4gICAgICAgICAgICBjbGllbnQuc3RvcCgpO1xuICAgICAgICAgICAgYXdhaXQgY2xpZW50LmNsZWFyU3RvcmUoKTtcbiAgICAgICAgfVxuICAgIH1cbn1cblxuXG5jbGFzcyBUT05RdWVyaWVzTW9kdWxlQ29sbGVjdGlvbiBpbXBsZW1lbnRzIFRPTlFDb2xsZWN0aW9uIHtcbiAgICBtb2R1bGU6IFRPTlF1ZXJpZXNNb2R1bGU7XG5cbiAgICBjb2xsZWN0aW9uTmFtZTogc3RyaW5nO1xuXG4gICAgdHlwZU5hbWU6IHN0cmluZztcblxuICAgIGNvbnN0cnVjdG9yKFxuICAgICAgICBtb2R1bGU6IFRPTlF1ZXJpZXNNb2R1bGUsXG4gICAgICAgIGNvbGxlY3Rpb25OYW1lOiBzdHJpbmcsXG4gICAgICAgIHR5cGVOYW1lOiBzdHJpbmcsXG4gICAgKSB7XG4gICAgICAgIHRoaXMubW9kdWxlID0gbW9kdWxlO1xuICAgICAgICB0aGlzLmNvbGxlY3Rpb25OYW1lID0gY29sbGVjdGlvbk5hbWU7XG4gICAgICAgIHRoaXMudHlwZU5hbWUgPSB0eXBlTmFtZTtcbiAgICB9XG5cbiAgICBhc3luYyBxdWVyeShcbiAgICAgICAgLi4uYXJnc1xuICAgICAgICAvKlxuICAgICAgICAgICAgZmlsdGVyT3JQYXJhbXM6IGFueSB8IFRPTlF1ZXJ5UGFyYW1zLFxuICAgICAgICAgICAgcmVzdWx0OiBzdHJpbmcsXG4gICAgICAgICAgICBvcmRlckJ5PzogT3JkZXJCeVtdLFxuICAgICAgICAgICAgbGltaXQ/OiBudW1iZXIsXG4gICAgICAgICAgICB0aW1lb3V0PzogbnVtYmVyLFxuICAgICAgICAgICAgcGFyZW50U3Bhbj86IChTcGFuIHwgU3BhbkNvbnRleHQpXG4gICAgICAgICAqL1xuICAgICk6IFByb21pc2U8YW55PiB7XG4gICAgICAgIGNvbnN0IHtcbiAgICAgICAgICAgIGZpbHRlcixcbiAgICAgICAgICAgIHJlc3VsdCxcbiAgICAgICAgICAgIG9yZGVyQnksXG4gICAgICAgICAgICBsaW1pdCxcbiAgICAgICAgICAgIHRpbWVvdXQsXG4gICAgICAgICAgICBvcGVyYXRpb25JZCxcbiAgICAgICAgICAgIHBhcmVudFNwYW4sXG4gICAgICAgIH0gPSByZXNvbHZlUGFyYW1zPFRPTlF1ZXJ5UGFyYW1zPihhcmdzLCAnZmlsdGVyJywgKCkgPT4gKHtcbiAgICAgICAgICAgIGZpbHRlcjogYXJnc1swXSxcbiAgICAgICAgICAgIHJlc3VsdDogKGFyZ3NbMV06IGFueSksXG4gICAgICAgICAgICBvcmRlckJ5OiAoYXJnc1syXTogYW55KSxcbiAgICAgICAgICAgIGxpbWl0OiAoYXJnc1szXTogYW55KSxcbiAgICAgICAgICAgIHRpbWVvdXQ6IChhcmdzWzRdOiBhbnkpLFxuICAgICAgICAgICAgcGFyZW50U3BhbjogYXJnc1s1XSxcbiAgICAgICAgfSkpO1xuICAgICAgICByZXR1cm4gdGhpcy5tb2R1bGUuY29udGV4dC50cmFjZShgJHt0aGlzLmNvbGxlY3Rpb25OYW1lfS5xdWVyeWAsIGFzeW5jIChzcGFuKSA9PiB7XG4gICAgICAgICAgICBzcGFuLnNldFRhZygncGFyYW1zJywge1xuICAgICAgICAgICAgICAgIGZpbHRlcixcbiAgICAgICAgICAgICAgICByZXN1bHQsXG4gICAgICAgICAgICAgICAgb3JkZXJCeSxcbiAgICAgICAgICAgICAgICBsaW1pdCxcbiAgICAgICAgICAgICAgICB0aW1lb3V0LFxuICAgICAgICAgICAgICAgIG9wZXJhdGlvbklkLFxuICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICBjb25zdCB1c2VPcGVyYXRpb25JZCA9IG9wZXJhdGlvbklkXG4gICAgICAgICAgICAgICAgJiYgKGF3YWl0IHRoaXMubW9kdWxlLmdldFNlcnZlckluZm8oc3BhbikpLnN1cHBvcnRzT3BlcmF0aW9uSWQ7XG4gICAgICAgICAgICBjb25zdCBjID0gdGhpcy5jb2xsZWN0aW9uTmFtZTtcbiAgICAgICAgICAgIGNvbnN0IHQgPSB0aGlzLnR5cGVOYW1lO1xuICAgICAgICAgICAgY29uc3QgcWwgPSBgXG4gICAgICAgICAgICBxdWVyeSAke2N9KFxuICAgICAgICAgICAgICAgICRmaWx0ZXI6ICR7dH1GaWx0ZXIsXG4gICAgICAgICAgICAgICAgJG9yZGVyQnk6IFtRdWVyeU9yZGVyQnldLCBcbiAgICAgICAgICAgICAgICAkbGltaXQ6IEludCwgXG4gICAgICAgICAgICAgICAgJHRpbWVvdXQ6IEZsb2F0XG4gICAgICAgICAgICAgICAgJHt1c2VPcGVyYXRpb25JZCA/ICcsICRvcGVyYXRpb25JZDogU3RyaW5nJyA6ICcnfVxuICAgICAgICAgICAgICkge1xuICAgICAgICAgICAgICAgICR7Y30oXG4gICAgICAgICAgICAgICAgICAgIGZpbHRlcjogJGZpbHRlciwgXG4gICAgICAgICAgICAgICAgICAgIG9yZGVyQnk6ICRvcmRlckJ5LCBcbiAgICAgICAgICAgICAgICAgICAgbGltaXQ6ICRsaW1pdCwgXG4gICAgICAgICAgICAgICAgICAgIHRpbWVvdXQ6ICR0aW1lb3V0XG4gICAgICAgICAgICAgICAgICAgICR7dXNlT3BlcmF0aW9uSWQgPyAnLCBvcGVyYXRpb25JZDogJG9wZXJhdGlvbklkJyA6ICcnfVxuICAgICAgICAgICAgICAgICkgeyAke3Jlc3VsdH0gfVxuICAgICAgICAgICAgfWA7XG4gICAgICAgICAgICBjb25zdCB2YXJpYWJsZXM6IHsgW3N0cmluZ106IGFueSB9ID0ge1xuICAgICAgICAgICAgICAgIGZpbHRlcixcbiAgICAgICAgICAgICAgICBvcmRlckJ5LFxuICAgICAgICAgICAgICAgIGxpbWl0LFxuICAgICAgICAgICAgfTtcbiAgICAgICAgICAgIGlmICh1c2VPcGVyYXRpb25JZCkge1xuICAgICAgICAgICAgICAgIHZhcmlhYmxlcy5vcGVyYXRpb25JZCA9IG9wZXJhdGlvbklkO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgaWYgKHRpbWVvdXQpIHtcbiAgICAgICAgICAgICAgICB2YXJpYWJsZXMudGltZW91dCA9IE1hdGgubWluKE1BWF9USU1FT1VULCB0aW1lb3V0KTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIHJldHVybiAoYXdhaXQgdGhpcy5tb2R1bGUuZ3JhcGhxbFF1ZXJ5KHFsLCB2YXJpYWJsZXMsIHNwYW4pKS5kYXRhW2NdO1xuICAgICAgICB9LCBwYXJlbnRTcGFuKTtcbiAgICB9XG5cbiAgICBhc3luYyBhZ2dyZWdhdGUoXG4gICAgICAgIHBhcmFtczogVE9OUXVlcnlBZ2dyZWdhdGVQYXJhbXMsXG4gICAgKTogUHJvbWlzZTxzdHJpbmdbXT4ge1xuICAgICAgICByZXR1cm4gdGhpcy5tb2R1bGUuY29udGV4dC50cmFjZShgJHt0aGlzLmNvbGxlY3Rpb25OYW1lfS5hZ2dyZWdhdGVgLCBhc3luYyAoc3BhbikgPT4ge1xuICAgICAgICAgICAgc3Bhbi5zZXRUYWcoJ3BhcmFtcycsIHtcbiAgICAgICAgICAgICAgICBmaWx0ZXI6IHBhcmFtcy5maWx0ZXIsXG4gICAgICAgICAgICAgICAgZmllbGRzOiBwYXJhbXMuZmllbGRzLFxuICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICBpZiAoIShhd2FpdCB0aGlzLm1vZHVsZS5nZXRTZXJ2ZXJJbmZvKHNwYW4pKS5zdXBwb3J0c0FnZ3JlZ2F0aW9ucykge1xuICAgICAgICAgICAgICAgIHRocm93IFRPTkNsaWVudEVycm9yLnNlcnZlckRvZXNudFN1cHBvcnRBZ2dyZWdhdGlvbnMoKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGNvbnN0IHQgPSB0aGlzLnR5cGVOYW1lO1xuICAgICAgICAgICAgY29uc3QgcSA9IHRoaXMudHlwZU5hbWUuZW5kc1dpdGgoJ3MnKSA/IGBhZ2dyZWdhdGUke3R9YCA6IGBhZ2dyZWdhdGUke3R9c2A7XG4gICAgICAgICAgICBjb25zdCBxbCA9IGBcbiAgICAgICAgICAgIHF1ZXJ5ICR7cX0oXG4gICAgICAgICAgICAgICAgJGZpbHRlcjogJHt0fUZpbHRlcixcbiAgICAgICAgICAgICAgICAkZmllbGRzOiBbRmllbGRBZ2dyZWdhdGlvbl0gXG4gICAgICAgICAgICAgKSB7XG4gICAgICAgICAgICAgICAgJHtxfShcbiAgICAgICAgICAgICAgICAgICAgZmlsdGVyOiAkZmlsdGVyLCBcbiAgICAgICAgICAgICAgICAgICAgZmllbGRzOiAkZmllbGRzIFxuICAgICAgICAgICAgICAgIClcbiAgICAgICAgICAgIH1gO1xuICAgICAgICAgICAgY29uc3QgdmFyaWFibGVzOiB7IFtzdHJpbmddOiBhbnkgfSA9IHtcbiAgICAgICAgICAgICAgICBmaWx0ZXI6IHBhcmFtcy5maWx0ZXIsXG4gICAgICAgICAgICAgICAgZmllbGRzOiBwYXJhbXMuZmllbGRzLFxuICAgICAgICAgICAgfTtcbiAgICAgICAgICAgIHJldHVybiAoYXdhaXQgdGhpcy5tb2R1bGUuZ3JhcGhxbFF1ZXJ5KHFsLCB2YXJpYWJsZXMsIHNwYW4pKS5kYXRhW3FdO1xuICAgICAgICB9LCBwYXJhbXMucGFyZW50U3Bhbik7XG4gICAgfVxuXG4gICAgc3Vic2NyaWJlKFxuICAgICAgICAuLi5hcmdzXG4gICAgICAgIC8qXG4gICAgICAgIGZpbHRlck9yUGFyYW1zOiBhbnkgfCBUT05TdWJzY3JpYmVQYXJhbXMsXG4gICAgICAgIHJlc3VsdD86IHN0cmluZyxcbiAgICAgICAgb25Eb2NFdmVudD86IERvY0V2ZW50LFxuICAgICAgICBvbkVycm9yPzogKGVycjogRXJyb3IpID0+IHZvaWRcbiAgICAgICAgICovXG4gICAgKTogU3Vic2NyaXB0aW9uIHtcbiAgICAgICAgY29uc3Qge1xuICAgICAgICAgICAgZmlsdGVyLFxuICAgICAgICAgICAgcmVzdWx0LFxuICAgICAgICAgICAgb25Eb2NFdmVudCxcbiAgICAgICAgICAgIG9uRXJyb3IsXG4gICAgICAgIH0gPSByZXNvbHZlUGFyYW1zPFRPTlN1YnNjcmliZVBhcmFtcz4oYXJncywgJ2ZpbHRlcicsICgpID0+ICh7XG4gICAgICAgICAgICBmaWx0ZXI6IGFyZ3NbMF0sXG4gICAgICAgICAgICByZXN1bHQ6IChhcmdzWzFdOiBhbnkpLFxuICAgICAgICAgICAgb25Eb2NFdmVudDogKGFyZ3NbMl06IGFueSksXG4gICAgICAgICAgICBvbkVycm9yOiAoYXJnc1szXTogYW55KSxcbiAgICAgICAgfSkpO1xuICAgICAgICBjb25zdCBzcGFuID0gdGhpcy5tb2R1bGUuY29uZmlnLnRyYWNlci5zdGFydFNwYW4oJ1RPTlF1ZXJpZXNNb2R1bGUuanM6c3Vic2NyaWJlICcpO1xuICAgICAgICBzcGFuLnNldFRhZyhUYWdzLlNQQU5fS0lORCwgJ2NsaWVudCcpO1xuICAgICAgICBjb25zdCB0ZXh0ID0gYHN1YnNjcmlwdGlvbiAke3RoaXMuY29sbGVjdGlvbk5hbWV9KCRmaWx0ZXI6ICR7dGhpcy50eXBlTmFtZX1GaWx0ZXIpIHtcbiAgICAgICAgICAgICR7dGhpcy5jb2xsZWN0aW9uTmFtZX0oZmlsdGVyOiAkZmlsdGVyKSB7ICR7cmVzdWx0fSB9XG4gICAgICAgIH1gO1xuICAgICAgICBjb25zdCBxdWVyeSA9IGdxbChbdGV4dF0pO1xuICAgICAgICBsZXQgc3Vic2NyaXB0aW9uID0gbnVsbDtcbiAgICAgICAgKGFzeW5jICgpID0+IHtcbiAgICAgICAgICAgIHRyeSB7XG4gICAgICAgICAgICAgICAgY29uc3QgY2xpZW50ID0gYXdhaXQgdGhpcy5tb2R1bGUuZ3JhcGhxbENsaWVudFJlcXVpcmVkKHNwYW4pO1xuICAgICAgICAgICAgICAgIGNvbnN0IG9ic2VydmFibGUgPSBjbGllbnQuc3Vic2NyaWJlKHtcbiAgICAgICAgICAgICAgICAgICAgcXVlcnksXG4gICAgICAgICAgICAgICAgICAgIHZhcmlhYmxlczoge1xuICAgICAgICAgICAgICAgICAgICAgICAgZmlsdGVyLFxuICAgICAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgICAgIHN1YnNjcmlwdGlvbiA9IG9ic2VydmFibGUuc3Vic2NyaWJlKChtZXNzYWdlKSA9PiB7XG4gICAgICAgICAgICAgICAgICAgIG9uRG9jRXZlbnQoJ2luc2VydC91cGRhdGUnLCBtZXNzYWdlLmRhdGFbdGhpcy5jb2xsZWN0aW9uTmFtZV0pO1xuICAgICAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgfSBjYXRjaCAoZXJyb3IpIHtcbiAgICAgICAgICAgICAgICBzcGFuLmxvZyh7XG4gICAgICAgICAgICAgICAgICAgIGV2ZW50OiAnZmFpbGVkJyxcbiAgICAgICAgICAgICAgICAgICAgcGF5bG9hZDogZXJyb3IsXG4gICAgICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICAgICAgaWYgKG9uRXJyb3IpIHtcbiAgICAgICAgICAgICAgICAgICAgb25FcnJvcihlcnJvcik7XG4gICAgICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgICAgICAgY29uc29sZS5sb2coJ1RPTiBDbGllbnQgc3Vic2NyaXB0aW9uIGVycm9yJywgZXJyb3IpO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cbiAgICAgICAgfSkoKTtcbiAgICAgICAgcmV0dXJuIHtcbiAgICAgICAgICAgIHVuc3Vic2NyaWJlOiAoKSA9PiB7XG4gICAgICAgICAgICAgICAgaWYgKHN1YnNjcmlwdGlvbikge1xuICAgICAgICAgICAgICAgICAgICBzdWJzY3JpcHRpb24udW5zdWJzY3JpYmUoKTtcbiAgICAgICAgICAgICAgICAgICAgc3Bhbi5maW5pc2goKTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9LFxuICAgICAgICB9O1xuICAgIH1cblxuICAgIGFzeW5jIHdhaXRGb3IoXG4gICAgICAgIC4uLmFyZ3NcbiAgICAgICAgLypcbiAgICAgICAgZmlsdGVyT3JQYXJhbXM6IGFueSB8IFRPTldhaXRGb3JQYXJhbXMsXG4gICAgICAgIHJlc3VsdDogc3RyaW5nLFxuICAgICAgICB0aW1lb3V0PzogbnVtYmVyLFxuICAgICAgICBwYXJlbnRTcGFuPzogKFNwYW4gfCBTcGFuQ29udGV4dClcbiAgICAgICAgICovXG4gICAgKTogUHJvbWlzZTxhbnk+IHtcbiAgICAgICAgY29uc3Qge1xuICAgICAgICAgICAgZmlsdGVyLFxuICAgICAgICAgICAgcmVzdWx0LFxuICAgICAgICAgICAgdGltZW91dDogcGFyYW1zVGltZW91dCxcbiAgICAgICAgICAgIHBhcmVudFNwYW4sXG4gICAgICAgICAgICBvcGVyYXRpb25JZCxcbiAgICAgICAgfSA9IHJlc29sdmVQYXJhbXM8VE9OV2FpdEZvclBhcmFtcz4oYXJncywgJ2ZpbHRlcicsICgpID0+ICh7XG4gICAgICAgICAgICBmaWx0ZXI6IGFyZ3NbMF0sXG4gICAgICAgICAgICByZXN1bHQ6IChhcmdzWzFdOiBhbnkpLFxuICAgICAgICAgICAgdGltZW91dDogKGFyZ3NbMl06IGFueSksXG4gICAgICAgICAgICBwYXJlbnRTcGFuOiBhcmdzWzNdLFxuICAgICAgICB9KSk7XG4gICAgICAgIGNvbnN0IHRpbWVvdXQgPSBwYXJhbXNUaW1lb3V0IHx8IHRoaXMubW9kdWxlLmNvbmZpZy53YWl0Rm9yVGltZW91dCgpO1xuICAgICAgICBjb25zdCBkb2NzID0gYXdhaXQgdGhpcy5xdWVyeSh7XG4gICAgICAgICAgICBmaWx0ZXIsXG4gICAgICAgICAgICByZXN1bHQsXG4gICAgICAgICAgICB0aW1lb3V0LFxuICAgICAgICAgICAgcGFyZW50U3BhbixcbiAgICAgICAgICAgIG9wZXJhdGlvbklkLFxuICAgICAgICB9KTtcbiAgICAgICAgaWYgKGRvY3MubGVuZ3RoID4gMCkge1xuICAgICAgICAgICAgcmV0dXJuIGRvY3NbMF07XG4gICAgICAgIH1cbiAgICAgICAgdGhyb3cgVE9OQ2xpZW50RXJyb3Iud2FpdEZvclRpbWVvdXQoKTtcbiAgICB9XG59XG5cblRPTlF1ZXJpZXNNb2R1bGUubW9kdWxlTmFtZSA9ICdUT05RdWVyaWVzTW9kdWxlJztcbiJdfQ==