"use strict";

var _interopRequireWildcard = require("@babel/runtime/helpers/interopRequireWildcard");

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = exports.MAX_TIMEOUT = void 0;

var _regenerator = _interopRequireDefault(require("@babel/runtime/regenerator"));

var _asyncToGenerator2 = _interopRequireDefault(require("@babel/runtime/helpers/asyncToGenerator"));

var _possibleConstructorReturn2 = _interopRequireDefault(require("@babel/runtime/helpers/possibleConstructorReturn"));

var _getPrototypeOf2 = _interopRequireDefault(require("@babel/runtime/helpers/getPrototypeOf"));

var _assertThisInitialized2 = _interopRequireDefault(require("@babel/runtime/helpers/assertThisInitialized"));

var _inherits2 = _interopRequireDefault(require("@babel/runtime/helpers/inherits"));

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

function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(n); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }

function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }

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
    supportsAggregations: version >= 25000
  };
}

var TONQueriesModule = /*#__PURE__*/function (_TONModule) {
  (0, _inherits2["default"])(TONQueriesModule, _TONModule);

  function TONQueriesModule(context) {
    var _this;

    (0, _classCallCheck2["default"])(this, TONQueriesModule);
    _this = (0, _possibleConstructorReturn2["default"])(this, (0, _getPrototypeOf2["default"])(TONQueriesModule).call(this, context));
    (0, _defineProperty2["default"])((0, _assertThisInitialized2["default"])(_this), "config", void 0);
    (0, _defineProperty2["default"])((0, _assertThisInitialized2["default"])(_this), "overrideWsUrl", void 0);
    (0, _defineProperty2["default"])((0, _assertThisInitialized2["default"])(_this), "graphqlClientCreation", void 0);
    (0, _defineProperty2["default"])((0, _assertThisInitialized2["default"])(_this), "operationIdPrefix", void 0);
    (0, _defineProperty2["default"])((0, _assertThisInitialized2["default"])(_this), "operationIdSuffix", void 0);
    (0, _defineProperty2["default"])((0, _assertThisInitialized2["default"])(_this), "serverInfo", void 0);
    (0, _defineProperty2["default"])((0, _assertThisInitialized2["default"])(_this), "transactions", void 0);
    (0, _defineProperty2["default"])((0, _assertThisInitialized2["default"])(_this), "messages", void 0);
    (0, _defineProperty2["default"])((0, _assertThisInitialized2["default"])(_this), "blocks", void 0);
    (0, _defineProperty2["default"])((0, _assertThisInitialized2["default"])(_this), "accounts", void 0);
    (0, _defineProperty2["default"])((0, _assertThisInitialized2["default"])(_this), "blocks_signatures", void 0);
    (0, _defineProperty2["default"])((0, _assertThisInitialized2["default"])(_this), "graphqlClient", void 0);
    _this.graphqlClient = null;
    _this.overrideWsUrl = null;
    _this.graphqlClientCreation = null;
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
    key: "generateOperationId",
    value: function generateOperationId() {
      this.operationIdSuffix += 1;
      return "".concat(this.operationIdPrefix).concat(this.operationIdSuffix.toString(16));
    }
  }, {
    key: "finishOperations",
    value: function () {
      var _finishOperations = (0, _asyncToGenerator2["default"])( /*#__PURE__*/_regenerator["default"].mark(function _callee5(operationIds) {
        return _regenerator["default"].wrap(function _callee5$(_context5) {
          while (1) {
            switch (_context5.prev = _context5.next) {
              case 0:
                if (!(operationIds.length === 0)) {
                  _context5.next = 2;
                  break;
                }

                return _context5.abrupt("return");

              case 2:
                _context5.next = 4;
                return this.getServerInfo();

              case 4:
                if (_context5.sent.supportsOperationId) {
                  _context5.next = 6;
                  break;
                }

                return _context5.abrupt("return");

              case 6:
                _context5.next = 8;
                return this.graphqlMutation("mutation finishOperations($operationIds: [String]) {\n                finishOperations(operationIds: $operationIds)\n            }", {
                  operationIds: operationIds
                });

              case 8:
              case "end":
                return _context5.stop();
            }
          }
        }, _callee5, this);
      }));

      function finishOperations(_x4) {
        return _finishOperations.apply(this, arguments);
      }

      return finishOperations;
    }()
  }, {
    key: "getAccountsCount",
    value: function () {
      var _getAccountsCount = (0, _asyncToGenerator2["default"])( /*#__PURE__*/_regenerator["default"].mark(function _callee6(parentSpan) {
        var result;
        return _regenerator["default"].wrap(function _callee6$(_context6) {
          while (1) {
            switch (_context6.prev = _context6.next) {
              case 0:
                _context6.next = 2;
                return this.query('query{getAccountsCount}', undefined, parentSpan);

              case 2:
                result = _context6.sent;
                return _context6.abrupt("return", result.data.getAccountsCount);

              case 4:
              case "end":
                return _context6.stop();
            }
          }
        }, _callee6, this);
      }));

      function getAccountsCount(_x5) {
        return _getAccountsCount.apply(this, arguments);
      }

      return getAccountsCount;
    }()
  }, {
    key: "getTransactionsCount",
    value: function () {
      var _getTransactionsCount = (0, _asyncToGenerator2["default"])( /*#__PURE__*/_regenerator["default"].mark(function _callee7(parentSpan) {
        var result;
        return _regenerator["default"].wrap(function _callee7$(_context7) {
          while (1) {
            switch (_context7.prev = _context7.next) {
              case 0:
                _context7.next = 2;
                return this.query('query{getTransactionsCount}', undefined, parentSpan);

              case 2:
                result = _context7.sent;
                return _context7.abrupt("return", result.data.getTransactionsCount);

              case 4:
              case "end":
                return _context7.stop();
            }
          }
        }, _callee7, this);
      }));

      function getTransactionsCount(_x6) {
        return _getTransactionsCount.apply(this, arguments);
      }

      return getTransactionsCount;
    }()
  }, {
    key: "getAccountsTotalBalance",
    value: function () {
      var _getAccountsTotalBalance = (0, _asyncToGenerator2["default"])( /*#__PURE__*/_regenerator["default"].mark(function _callee8(parentSpan) {
        var result;
        return _regenerator["default"].wrap(function _callee8$(_context8) {
          while (1) {
            switch (_context8.prev = _context8.next) {
              case 0:
                _context8.next = 2;
                return this.query('query{getAccountsTotalBalance}', undefined, parentSpan);

              case 2:
                result = _context8.sent;
                return _context8.abrupt("return", result.data.getAccountsTotalBalance);

              case 4:
              case "end":
                return _context8.stop();
            }
          }
        }, _callee8, this);
      }));

      function getAccountsTotalBalance(_x7) {
        return _getAccountsTotalBalance.apply(this, arguments);
      }

      return getAccountsTotalBalance;
    }()
  }, {
    key: "postRequests",
    value: function () {
      var _postRequests = (0, _asyncToGenerator2["default"])( /*#__PURE__*/_regenerator["default"].mark(function _callee10(requests, parentSpan) {
        var _this2 = this;

        return _regenerator["default"].wrap(function _callee10$(_context10) {
          while (1) {
            switch (_context10.prev = _context10.next) {
              case 0:
                return _context10.abrupt("return", this.context.trace('queries.postRequests', /*#__PURE__*/function () {
                  var _ref = (0, _asyncToGenerator2["default"])( /*#__PURE__*/_regenerator["default"].mark(function _callee9(span) {
                    return _regenerator["default"].wrap(function _callee9$(_context9) {
                      while (1) {
                        switch (_context9.prev = _context9.next) {
                          case 0:
                            return _context9.abrupt("return", _this2.graphqlMutation("mutation postRequests($requests: [Request]) {\n                postRequests(requests: $requests)\n            }", {
                              requests: requests
                            }, span));

                          case 1:
                          case "end":
                            return _context9.stop();
                        }
                      }
                    }, _callee9);
                  }));

                  return function (_x10) {
                    return _ref.apply(this, arguments);
                  };
                }(), parentSpan));

              case 1:
              case "end":
                return _context10.stop();
            }
          }
        }, _callee10, this);
      }));

      function postRequests(_x8, _x9) {
        return _postRequests.apply(this, arguments);
      }

      return postRequests;
    }()
  }, {
    key: "mutation",
    value: function () {
      var _mutation = (0, _asyncToGenerator2["default"])( /*#__PURE__*/_regenerator["default"].mark(function _callee12(ql) {
        var _this3 = this;

        var variables,
            parentSpan,
            _args12 = arguments;
        return _regenerator["default"].wrap(function _callee12$(_context12) {
          while (1) {
            switch (_context12.prev = _context12.next) {
              case 0:
                variables = _args12.length > 1 && _args12[1] !== undefined ? _args12[1] : {};
                parentSpan = _args12.length > 2 ? _args12[2] : undefined;
                return _context12.abrupt("return", this.context.trace('queries.mutation', /*#__PURE__*/function () {
                  var _ref2 = (0, _asyncToGenerator2["default"])( /*#__PURE__*/_regenerator["default"].mark(function _callee11(span) {
                    return _regenerator["default"].wrap(function _callee11$(_context11) {
                      while (1) {
                        switch (_context11.prev = _context11.next) {
                          case 0:
                            span.setTag('params', {
                              mutation: ql,
                              variables: variables
                            });
                            return _context11.abrupt("return", _this3.graphqlMutation(ql, variables, span));

                          case 2:
                          case "end":
                            return _context11.stop();
                        }
                      }
                    }, _callee11);
                  }));

                  return function (_x12) {
                    return _ref2.apply(this, arguments);
                  };
                }(), parentSpan));

              case 3:
              case "end":
                return _context12.stop();
            }
          }
        }, _callee12, this);
      }));

      function mutation(_x11) {
        return _mutation.apply(this, arguments);
      }

      return mutation;
    }()
  }, {
    key: "query",
    value: function () {
      var _query = (0, _asyncToGenerator2["default"])( /*#__PURE__*/_regenerator["default"].mark(function _callee14(ql) {
        var _this4 = this;

        var variables,
            parentSpan,
            _args14 = arguments;
        return _regenerator["default"].wrap(function _callee14$(_context14) {
          while (1) {
            switch (_context14.prev = _context14.next) {
              case 0:
                variables = _args14.length > 1 && _args14[1] !== undefined ? _args14[1] : {};
                parentSpan = _args14.length > 2 ? _args14[2] : undefined;
                return _context14.abrupt("return", this.context.trace('queries.query', /*#__PURE__*/function () {
                  var _ref3 = (0, _asyncToGenerator2["default"])( /*#__PURE__*/_regenerator["default"].mark(function _callee13(span) {
                    return _regenerator["default"].wrap(function _callee13$(_context13) {
                      while (1) {
                        switch (_context13.prev = _context13.next) {
                          case 0:
                            span.setTag('params', {
                              query: ql,
                              variables: variables
                            });
                            return _context13.abrupt("return", _this4.graphqlQuery(ql, variables, span));

                          case 2:
                          case "end":
                            return _context13.stop();
                        }
                      }
                    }, _callee13);
                  }));

                  return function (_x14) {
                    return _ref3.apply(this, arguments);
                  };
                }(), parentSpan));

              case 3:
              case "end":
                return _context14.stop();
            }
          }
        }, _callee14, this);
      }));

      function query(_x13) {
        return _query.apply(this, arguments);
      }

      return query;
    }()
  }, {
    key: "graphqlMutation",
    value: function () {
      var _graphqlMutation = (0, _asyncToGenerator2["default"])( /*#__PURE__*/_regenerator["default"].mark(function _callee15(ql) {
        var variables,
            span,
            mutation,
            _args15 = arguments;
        return _regenerator["default"].wrap(function _callee15$(_context15) {
          while (1) {
            switch (_context15.prev = _context15.next) {
              case 0:
                variables = _args15.length > 1 && _args15[1] !== undefined ? _args15[1] : {};
                span = _args15.length > 2 ? _args15[2] : undefined;
                mutation = (0, _graphqlTag["default"])([ql]);
                return _context15.abrupt("return", this.graphQl(function (client) {
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
                return _context15.stop();
            }
          }
        }, _callee15, this);
      }));

      function graphqlMutation(_x15) {
        return _graphqlMutation.apply(this, arguments);
      }

      return graphqlMutation;
    }()
  }, {
    key: "graphqlQuery",
    value: function () {
      var _graphqlQuery = (0, _asyncToGenerator2["default"])( /*#__PURE__*/_regenerator["default"].mark(function _callee18(ql) {
        var variables,
            span,
            query,
            _args18 = arguments;
        return _regenerator["default"].wrap(function _callee18$(_context18) {
          while (1) {
            switch (_context18.prev = _context18.next) {
              case 0:
                variables = _args18.length > 1 && _args18[1] !== undefined ? _args18[1] : {};
                span = _args18.length > 2 ? _args18[2] : undefined;
                query = (0, _graphqlTag["default"])([ql]);
                return _context18.abrupt("return", this.graphQl( /*#__PURE__*/function () {
                  var _ref4 = (0, _asyncToGenerator2["default"])( /*#__PURE__*/_regenerator["default"].mark(function _callee17(client) {
                    var nextTimeout;
                    return _regenerator["default"].wrap(function _callee17$(_context17) {
                      while (1) {
                        switch (_context17.prev = _context17.next) {
                          case 0:
                            nextTimeout = 100;

                          case 1:
                            if (!true) {
                              _context17.next = 17;
                              break;
                            }

                            _context17.prev = 2;
                            _context17.next = 5;
                            return client.query({
                              query: query,
                              variables: variables,
                              context: {
                                traceSpan: span
                              }
                            });

                          case 5:
                            return _context17.abrupt("return", _context17.sent);

                          case 8:
                            _context17.prev = 8;
                            _context17.t0 = _context17["catch"](2);

                            if (!TONQueriesModule.isNetworkError(_context17.t0)) {
                              _context17.next = 14;
                              break;
                            }

                            return _context17.delegateYield( /*#__PURE__*/_regenerator["default"].mark(function _callee16() {
                              var timeout;
                              return _regenerator["default"].wrap(function _callee16$(_context16) {
                                while (1) {
                                  switch (_context16.prev = _context16.next) {
                                    case 0:
                                      console.warn(_context17.t0.networkError);
                                      timeout = nextTimeout;
                                      _context16.next = 4;
                                      return new Promise(function (x) {
                                        return setTimeout(x, timeout);
                                      });

                                    case 4:
                                      if (nextTimeout < 3200) {
                                        nextTimeout *= 2;
                                      }

                                    case 5:
                                    case "end":
                                      return _context16.stop();
                                  }
                                }
                              }, _callee16);
                            })(), "t1", 12);

                          case 12:
                            _context17.next = 15;
                            break;

                          case 14:
                            throw _context17.t0;

                          case 15:
                            _context17.next = 1;
                            break;

                          case 17:
                          case "end":
                            return _context17.stop();
                        }
                      }
                    }, _callee17, null, [[2, 8]]);
                  }));

                  return function (_x17) {
                    return _ref4.apply(this, arguments);
                  };
                }(), span));

              case 4:
              case "end":
                return _context18.stop();
            }
          }
        }, _callee18, this);
      }));

      function graphqlQuery(_x16) {
        return _graphqlQuery.apply(this, arguments);
      }

      return graphqlQuery;
    }()
  }, {
    key: "graphQl",
    value: function () {
      var _graphQl = (0, _asyncToGenerator2["default"])( /*#__PURE__*/_regenerator["default"].mark(function _callee19(request, span) {
        var client, gqlErr, clientErr, gqlExc, errors;
        return _regenerator["default"].wrap(function _callee19$(_context19) {
          while (1) {
            switch (_context19.prev = _context19.next) {
              case 0:
                _context19.next = 2;
                return this.graphqlClientRequired(span);

              case 2:
                client = _context19.sent;
                _context19.prev = 3;
                _context19.next = 6;
                return request(client);

              case 6:
                return _context19.abrupt("return", _context19.sent);

              case 9:
                _context19.prev = 9;
                _context19.t0 = _context19["catch"](3);
                gqlErr = _context19.t0.graphQLErrors && _context19.t0.graphQLErrors[0];

                if (!gqlErr) {
                  _context19.next = 19;
                  break;
                }

                clientErr = new Error(gqlErr.message);
                gqlExc = gqlErr.extensions && gqlErr.extensions.exception || {};
                clientErr.number = gqlExc.code || 0;
                clientErr.code = gqlExc.code || 0;
                clientErr.source = gqlExc.source || 'client';
                throw clientErr;

              case 19:
                errors = _context19.t0 && _context19.t0.networkError && _context19.t0.networkError.result && _context19.t0.networkError.result.errors;

                if (!errors) {
                  _context19.next = 24;
                  break;
                }

                throw _TONClient.TONClientError.queryFailed(errors);

              case 24:
                throw _context19.t0;

              case 25:
              case "end":
                return _context19.stop();
            }
          }
        }, _callee19, this, [[3, 9]]);
      }));

      function graphQl(_x18, _x19) {
        return _graphQl.apply(this, arguments);
      }

      return graphQl;
    }()
  }, {
    key: "graphqlClientRequired",
    value: function () {
      var _graphqlClientRequired = (0, _asyncToGenerator2["default"])( /*#__PURE__*/_regenerator["default"].mark(function _callee20(parentSpan) {
        var _this5 = this;

        var creation;
        return _regenerator["default"].wrap(function _callee20$(_context20) {
          while (1) {
            switch (_context20.prev = _context20.next) {
              case 0:
                if (!this.graphqlClient) {
                  _context20.next = 2;
                  break;
                }

                return _context20.abrupt("return", this.graphqlClient);

              case 2:
                if (!this.graphqlClientCreation) {
                  _context20.next = 7;
                  break;
                }

                _context20.next = 5;
                return this.graphqlClientCreation.listen();

              case 5:
                _context20.next = 21;
                break;

              case 7:
                creation = new MulticastPromise();
                this.graphqlClientCreation = creation;
                _context20.prev = 9;
                _context20.next = 12;
                return this.context.trace('setup client', function (span) {
                  return _this5.createGraphqlClient(span);
                }, parentSpan);

              case 12:
                this.graphqlClientCreation = null;
                creation.resolve(this.graphqlClient);
                _context20.next = 21;
                break;

              case 16:
                _context20.prev = 16;
                _context20.t0 = _context20["catch"](9);
                this.graphqlClientCreation = null;
                creation.reject(_context20.t0);
                throw _context20.t0;

              case 21:
                return _context20.abrupt("return", this.graphqlClient);

              case 22:
              case "end":
                return _context20.stop();
            }
          }
        }, _callee20, this, [[9, 16]]);
      }));

      function graphqlClientRequired(_x20) {
        return _graphqlClientRequired.apply(this, arguments);
      }

      return graphqlClientRequired;
    }()
  }, {
    key: "createGraphqlClient",
    value: function () {
      var _createGraphqlClient = (0, _asyncToGenerator2["default"])( /*#__PURE__*/_regenerator["default"].mark(function _callee22(span) {
        var _this6 = this;

        var useHttp, clientConfig, wsLink, httpLink, subsOptions, subscriptionClient, detectingRedirection, tracerLink, wrapLink, isSubscription, link;
        return _regenerator["default"].wrap(function _callee22$(_context22) {
          while (1) {
            switch (_context22.prev = _context22.next) {
              case 0:
                useHttp = !this.config.data.useWebSocketForQueries;
                _context22.next = 3;
                return this.getClientConfig();

              case 3:
                clientConfig = _context22.sent;
                wsLink = null;
                httpLink = null;
                subsOptions = this.config.tracer.inject(span, _opentracing.FORMAT_TEXT_MAP, {});
                subscriptionClient = new _subscriptionsTransportWs.SubscriptionClient(clientConfig.wsUrl, {
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

                  (0, _asyncToGenerator2["default"])( /*#__PURE__*/_regenerator["default"].mark(function _callee21() {
                    var newConfig, configIsChanged;
                    return _regenerator["default"].wrap(function _callee21$(_context21) {
                      while (1) {
                        switch (_context21.prev = _context21.next) {
                          case 0:
                            detectingRedirection = true;
                            _context21.prev = 1;
                            _context21.next = 4;
                            return _this6.getClientConfig();

                          case 4:
                            newConfig = _context21.sent;
                            configIsChanged = newConfig.httpUrl !== clientConfig.httpUrl || newConfig.wsUrl !== clientConfig.wsUrl;

                            if (configIsChanged) {
                              console.log('[TONClient.queries]', 'Client config changed');
                              clientConfig = newConfig;
                              subscriptionClient.url = newConfig.wsUrl;

                              if (wsLink) {
                                wsLink.url = newConfig.wsUrl;
                              }

                              if (httpLink) {
                                httpLink.uri = newConfig.httpUrl;
                              }
                            }

                            _context21.next = 12;
                            break;

                          case 9:
                            _context21.prev = 9;
                            _context21.t0 = _context21["catch"](1);
                            console.log('[TONClient.queries] redirection detector failed', _context21.t0);

                          case 12:
                            detectingRedirection = false;

                          case 13:
                          case "end":
                            return _context21.stop();
                        }
                      }
                    }, _callee21, null, [[1, 9]]);
                  }))();
                });

                subscriptionClient.maxConnectTimeGenerator.duration = function () {
                  return subscriptionClient.maxConnectTimeGenerator.max;
                };

                _context22.next = 14;
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
                tracerLink = _context22.sent;

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

              case 21:
              case "end":
                return _context22.stop();
            }
          }
        }, _callee22, this);
      }));

      function createGraphqlClient(_x21) {
        return _createGraphqlClient.apply(this, arguments);
      }

      return createGraphqlClient;
    }()
  }, {
    key: "close",
    value: function () {
      var _close = (0, _asyncToGenerator2["default"])( /*#__PURE__*/_regenerator["default"].mark(function _callee23() {
        var client;
        return _regenerator["default"].wrap(function _callee23$(_context23) {
          while (1) {
            switch (_context23.prev = _context23.next) {
              case 0:
                if (!this.graphqlClient) {
                  _context23.next = 6;
                  break;
                }

                client = this.graphqlClient;
                this.graphqlClient = null;
                client.stop();
                _context23.next = 6;
                return client.clearStore();

              case 6:
              case "end":
                return _context23.stop();
            }
          }
        }, _callee23, this);
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
      var _query2 = (0, _asyncToGenerator2["default"])( /*#__PURE__*/_regenerator["default"].mark(function _callee25() {
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
            _args25 = arguments;

        return _regenerator["default"].wrap(function _callee25$(_context25) {
          while (1) {
            switch (_context25.prev = _context25.next) {
              case 0:
                for (_len = _args25.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
                  args[_key] = _args25[_key];
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
                return _context25.abrupt("return", this.module.context.trace("".concat(this.collectionName, ".query"), /*#__PURE__*/function () {
                  var _ref7 = (0, _asyncToGenerator2["default"])( /*#__PURE__*/_regenerator["default"].mark(function _callee24(span) {
                    var useOperationId, c, t, ql, variables;
                    return _regenerator["default"].wrap(function _callee24$(_context24) {
                      while (1) {
                        switch (_context24.prev = _context24.next) {
                          case 0:
                            span.setTag('params', {
                              filter: filter,
                              result: result,
                              orderBy: orderBy,
                              limit: limit,
                              timeout: timeout,
                              operationId: operationId
                            });
                            _context24.t0 = operationId;

                            if (!_context24.t0) {
                              _context24.next = 6;
                              break;
                            }

                            _context24.next = 5;
                            return _this7.module.getServerInfo(span);

                          case 5:
                            _context24.t0 = _context24.sent.supportsOperationId;

                          case 6:
                            useOperationId = _context24.t0;
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

                            _context24.next = 15;
                            return _this7.module.graphqlQuery(ql, variables, span);

                          case 15:
                            _context24.t1 = c;
                            return _context24.abrupt("return", _context24.sent.data[_context24.t1]);

                          case 17:
                          case "end":
                            return _context24.stop();
                        }
                      }
                    }, _callee24);
                  }));

                  return function (_x22) {
                    return _ref7.apply(this, arguments);
                  };
                }(), parentSpan));

              case 3:
              case "end":
                return _context25.stop();
            }
          }
        }, _callee25, this);
      }));

      function query() {
        return _query2.apply(this, arguments);
      }

      return query;
    }()
  }, {
    key: "aggregate",
    value: function () {
      var _aggregate = (0, _asyncToGenerator2["default"])( /*#__PURE__*/_regenerator["default"].mark(function _callee27(params) {
        var _this8 = this;

        return _regenerator["default"].wrap(function _callee27$(_context27) {
          while (1) {
            switch (_context27.prev = _context27.next) {
              case 0:
                return _context27.abrupt("return", this.module.context.trace("".concat(this.collectionName, ".aggregate"), /*#__PURE__*/function () {
                  var _ref8 = (0, _asyncToGenerator2["default"])( /*#__PURE__*/_regenerator["default"].mark(function _callee26(span) {
                    var t, q, ql, variables;
                    return _regenerator["default"].wrap(function _callee26$(_context26) {
                      while (1) {
                        switch (_context26.prev = _context26.next) {
                          case 0:
                            span.setTag('params', {
                              filter: params.filter,
                              fields: params.fields
                            });
                            _context26.next = 3;
                            return _this8.module.getServerInfo(span);

                          case 3:
                            if (_context26.sent.supportsAggregations) {
                              _context26.next = 5;
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
                            _context26.next = 11;
                            return _this8.module.graphqlQuery(ql, variables, span);

                          case 11:
                            _context26.t0 = q;
                            return _context26.abrupt("return", _context26.sent.data[_context26.t0]);

                          case 13:
                          case "end":
                            return _context26.stop();
                        }
                      }
                    }, _callee26);
                  }));

                  return function (_x24) {
                    return _ref8.apply(this, arguments);
                  };
                }(), params.parentSpan));

              case 1:
              case "end":
                return _context27.stop();
            }
          }
        }, _callee27, this);
      }));

      function aggregate(_x23) {
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
      (0, _asyncToGenerator2["default"])( /*#__PURE__*/_regenerator["default"].mark(function _callee28() {
        var client, observable;
        return _regenerator["default"].wrap(function _callee28$(_context28) {
          while (1) {
            switch (_context28.prev = _context28.next) {
              case 0:
                _context28.prev = 0;
                _context28.next = 3;
                return _this9.module.graphqlClientRequired(span);

              case 3:
                client = _context28.sent;
                observable = client.subscribe({
                  query: query,
                  variables: {
                    filter: filter
                  }
                });
                subscription = observable.subscribe(function (message) {
                  onDocEvent('insert/update', message.data[_this9.collectionName]);
                });
                _context28.next = 12;
                break;

              case 8:
                _context28.prev = 8;
                _context28.t0 = _context28["catch"](0);
                span.log({
                  event: 'failed',
                  payload: _context28.t0
                });

                if (onError) {
                  onError(_context28.t0);
                } else {
                  console.log('TON Client subscription error', _context28.t0);
                }

              case 12:
              case "end":
                return _context28.stop();
            }
          }
        }, _callee28, null, [[0, 8]]);
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
      var _waitFor = (0, _asyncToGenerator2["default"])( /*#__PURE__*/_regenerator["default"].mark(function _callee29() {
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
            _args29 = arguments;

        return _regenerator["default"].wrap(function _callee29$(_context29) {
          while (1) {
            switch (_context29.prev = _context29.next) {
              case 0:
                for (_len3 = _args29.length, args = new Array(_len3), _key3 = 0; _key3 < _len3; _key3++) {
                  args[_key3] = _args29[_key3];
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
                _context29.next = 5;
                return this.query({
                  filter: filter,
                  result: result,
                  timeout: timeout,
                  parentSpan: parentSpan,
                  operationId: operationId
                });

              case 5:
                docs = _context29.sent;

                if (!(docs.length > 0)) {
                  _context29.next = 8;
                  break;
                }

                return _context29.abrupt("return", docs[0]);

              case 8:
                throw _TONClient.TONClientError.waitForTimeout();

              case 9:
              case "end":
                return _context29.stop();
            }
          }
        }, _callee29, this);
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy9tb2R1bGVzL1RPTlF1ZXJpZXNNb2R1bGUuanMiXSwibmFtZXMiOlsiTUFYX1RJTUVPVVQiLCJyZXNvbHZlUGFyYW1zIiwiYXJncyIsInJlcXVpcmVkUGFyYW1OYW1lIiwicmVzb2x2ZUFyZ3MiLCJsZW5ndGgiLCJNdWx0aWNhc3RQcm9taXNlIiwibGlzdGVuZXJzIiwib25Db21wbGV0ZSIsImxpc3RlbmVyIiwicmVzb2x2ZSIsInJlamVjdCIsInB1c2giLCJQcm9taXNlIiwidmFsdWUiLCJjb21wbGV0ZSIsImVycm9yIiwiY29tcGxldGVMaXN0ZW5lciIsImZvckVhY2giLCJ2ZXJzaW9uVG9OdW1iZXIiLCJzIiwicGFydHMiLCJzcGxpdCIsIm1hcCIsIngiLCJOdW1iZXIiLCJzbGljZSIsInJlc29sdmVTZXJ2ZXJJbmZvIiwidmVyc2lvblN0cmluZyIsInZlcnNpb24iLCJzdXBwb3J0c09wZXJhdGlvbklkIiwic3VwcG9ydHNBZ2dyZWdhdGlvbnMiLCJUT05RdWVyaWVzTW9kdWxlIiwiY29udGV4dCIsImdyYXBocWxDbGllbnQiLCJvdmVycmlkZVdzVXJsIiwiZ3JhcGhxbENsaWVudENyZWF0aW9uIiwib3BlcmF0aW9uSWRQcmVmaXgiLCJEYXRlIiwibm93IiwidG9TdHJpbmciLCJpIiwiTWF0aCIsInJvdW5kIiwicmFuZG9tIiwib3BlcmF0aW9uSWRTdWZmaXgiLCJzZXJ2ZXJJbmZvIiwiY29uZmlnIiwiZ2V0TW9kdWxlIiwiVE9OQ29uZmlnTW9kdWxlIiwidHJhbnNhY3Rpb25zIiwiVE9OUXVlcmllc01vZHVsZUNvbGxlY3Rpb24iLCJtZXNzYWdlcyIsImJsb2NrcyIsImFjY291bnRzIiwiYmxvY2tzX3NpZ25hdHVyZXMiLCJmZXRjaCIsInNvdXJjZVVybCIsInJlc3BvbnNlIiwianNvbiIsImRhdGEiLCJpbmZvIiwicmVkaXJlY3RlZCIsInVybCIsInNvdXJjZUxvY2F0aW9uIiwiVVJMUGFydHMiLCJwYXJzZSIsImZpeFF1ZXJ5IiwiXyIsInRvTG93ZXJDYXNlIiwicmVzcG9uc2VMb2NhdGlvbiIsImdldENvbmZpZ0ZvclNlcnZlciIsInNlcnZlciIsImh0dHBQYXJ0cyIsImZpeFByb3RvY29sIiwiZml4UGF0aCIsImh0dHAiLCJ3cyIsImh0dHBVcmwiLCJ3c1VybCIsImNsaWVudFBsYXRmb3JtIiwiV2ViU29ja2V0IiwiVE9OQ2xpZW50IiwiRXJyb3IiLCJzZXJ2ZXJzIiwiY2xpZW50Q29uZmlnIiwiZGV0ZWN0UmVkaXJlY3QiLCJjb25zb2xlIiwibG9nIiwiZXJyb3JTdHJpbmciLCJzcGFuIiwiZ3JhcGhxbENsaWVudFJlcXVpcmVkIiwib3BlcmF0aW9uSWRzIiwiZ2V0U2VydmVySW5mbyIsImdyYXBocWxNdXRhdGlvbiIsInBhcmVudFNwYW4iLCJxdWVyeSIsInVuZGVmaW5lZCIsInJlc3VsdCIsImdldEFjY291bnRzQ291bnQiLCJnZXRUcmFuc2FjdGlvbnNDb3VudCIsImdldEFjY291bnRzVG90YWxCYWxhbmNlIiwicmVxdWVzdHMiLCJ0cmFjZSIsInFsIiwidmFyaWFibGVzIiwic2V0VGFnIiwibXV0YXRpb24iLCJncmFwaHFsUXVlcnkiLCJncmFwaFFsIiwiY2xpZW50IiwibXV0YXRlIiwidHJhY2VTcGFuIiwibmV4dFRpbWVvdXQiLCJpc05ldHdvcmtFcnJvciIsIndhcm4iLCJuZXR3b3JrRXJyb3IiLCJ0aW1lb3V0Iiwic2V0VGltZW91dCIsInJlcXVlc3QiLCJncWxFcnIiLCJncmFwaFFMRXJyb3JzIiwiY2xpZW50RXJyIiwibWVzc2FnZSIsImdxbEV4YyIsImV4dGVuc2lvbnMiLCJleGNlcHRpb24iLCJudW1iZXIiLCJjb2RlIiwic291cmNlIiwiZXJyb3JzIiwiVE9OQ2xpZW50RXJyb3IiLCJxdWVyeUZhaWxlZCIsImxpc3RlbiIsImNyZWF0aW9uIiwiY3JlYXRlR3JhcGhxbENsaWVudCIsInVzZUh0dHAiLCJ1c2VXZWJTb2NrZXRGb3JRdWVyaWVzIiwiZ2V0Q2xpZW50Q29uZmlnIiwid3NMaW5rIiwiaHR0cExpbmsiLCJzdWJzT3B0aW9ucyIsInRyYWNlciIsImluamVjdCIsIkZPUk1BVF9URVhUX01BUCIsInN1YnNjcmlwdGlvbkNsaWVudCIsIlN1YnNjcmlwdGlvbkNsaWVudCIsInJlY29ubmVjdCIsImNvbm5lY3Rpb25QYXJhbXMiLCJhY2Nlc3NLZXkiLCJoZWFkZXJzIiwib25SZWNvbm5lY3RlZCIsImRldGVjdGluZ1JlZGlyZWN0aW9uIiwib25FcnJvciIsIm5ld0NvbmZpZyIsImNvbmZpZ0lzQ2hhbmdlZCIsInVyaSIsIm1heENvbm5lY3RUaW1lR2VuZXJhdG9yIiwiZHVyYXRpb24iLCJtYXgiLCJyZXEiLCJyZXNvbHZlZFNwYW4iLCJ0cmFjZXJMaW5rIiwid3JhcExpbmsiLCJsaW5rIiwiY29uY2F0IiwiaXNTdWJzY3JpcHRpb24iLCJkZWZpbml0aW9uIiwia2luZCIsIm9wZXJhdGlvbiIsIldlYlNvY2tldExpbmsiLCJIdHRwTGluayIsIkFwb2xsb0NsaWVudCIsImNhY2hlIiwiSW5NZW1vcnlDYWNoZSIsImRlZmF1bHRPcHRpb25zIiwid2F0Y2hRdWVyeSIsImZldGNoUG9saWN5Iiwic3RvcCIsImNsZWFyU3RvcmUiLCJUT05Nb2R1bGUiLCJtb2R1bGUiLCJjb2xsZWN0aW9uTmFtZSIsInR5cGVOYW1lIiwiZmlsdGVyIiwib3JkZXJCeSIsImxpbWl0Iiwib3BlcmF0aW9uSWQiLCJ1c2VPcGVyYXRpb25JZCIsImMiLCJ0IiwibWluIiwicGFyYW1zIiwiZmllbGRzIiwic2VydmVyRG9lc250U3VwcG9ydEFnZ3JlZ2F0aW9ucyIsInEiLCJlbmRzV2l0aCIsIm9uRG9jRXZlbnQiLCJzdGFydFNwYW4iLCJUYWdzIiwiU1BBTl9LSU5EIiwidGV4dCIsInN1YnNjcmlwdGlvbiIsIm9ic2VydmFibGUiLCJzdWJzY3JpYmUiLCJldmVudCIsInBheWxvYWQiLCJ1bnN1YnNjcmliZSIsImZpbmlzaCIsInBhcmFtc1RpbWVvdXQiLCJ3YWl0Rm9yVGltZW91dCIsImRvY3MiLCJtb2R1bGVOYW1lIl0sIm1hcHBpbmdzIjoi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LEVBQUV0TCxJQUFJLENBQUMsQ0FBRCxDQUQyQztBQUV2RGdHLG9CQUFBQSxNQUFNLEVBQUdoRyxJQUFJLENBQUMsQ0FBRCxDQUYwQztBQUd2RG1ILG9CQUFBQSxPQUFPLEVBQUduSCxJQUFJLENBQUMsQ0FBRCxDQUh5QztBQUl2RDZGLG9CQUFBQSxVQUFVLEVBQUU3RixJQUFJLENBQUMsQ0FBRDtBQUp1QyxtQkFBUDtBQUFBLGlCQUFuQyxDLEVBTGJzTCxNLG1CQUFBQSxNLEVBQ0F0RixNLG1CQUFBQSxNLEVBQ1MrRyxhLG1CQUFUNUYsTyxFQUNBdEIsVSxtQkFBQUEsVSxFQUNBNEYsVyxtQkFBQUEsVztBQU9FdEUsZ0JBQUFBLE8sR0FBVTRGLGFBQWEsSUFBSSxLQUFLNUIsTUFBTCxDQUFZdEksTUFBWixDQUFtQm1LLGNBQW5CLEU7O3VCQUNkLEtBQUtsSCxLQUFMLENBQVc7QUFDMUJ3RixrQkFBQUEsTUFBTSxFQUFOQSxNQUQwQjtBQUUxQnRGLGtCQUFBQSxNQUFNLEVBQU5BLE1BRjBCO0FBRzFCbUIsa0JBQUFBLE9BQU8sRUFBUEEsT0FIMEI7QUFJMUJ0QixrQkFBQUEsVUFBVSxFQUFWQSxVQUowQjtBQUsxQjRGLGtCQUFBQSxXQUFXLEVBQVhBO0FBTDBCLGlCQUFYLEM7OztBQUFid0IsZ0JBQUFBLEk7O3NCQU9GQSxJQUFJLENBQUM5TSxNQUFMLEdBQWMsQzs7Ozs7bURBQ1A4TSxJQUFJLENBQUMsQ0FBRCxDOzs7c0JBRVRoRiwwQkFBZStFLGNBQWYsRTs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFJZGxMLGdCQUFnQixDQUFDb0wsVUFBakIsR0FBOEIsa0JBQTlCIiwic291cmNlc0NvbnRlbnQiOlsiLypcbiAqIENvcHlyaWdodCAyMDE4LTIwMjAgVE9OIERFViBTT0xVVElPTlMgTFRELlxuICpcbiAqIExpY2Vuc2VkIHVuZGVyIHRoZSBTT0ZUV0FSRSBFVkFMVUFUSU9OIExpY2Vuc2UgKHRoZSBcIkxpY2Vuc2VcIik7IHlvdSBtYXkgbm90IHVzZVxuICogdGhpcyBmaWxlIGV4Y2VwdCBpbiBjb21wbGlhbmNlIHdpdGggdGhlIExpY2Vuc2UuICBZb3UgbWF5IG9idGFpbiBhIGNvcHkgb2YgdGhlXG4gKiBMaWNlbnNlIGF0OlxuICpcbiAqIGh0dHA6Ly93d3cudG9uLmRldi9saWNlbnNlc1xuICpcbiAqIFVubGVzcyByZXF1aXJlZCBieSBhcHBsaWNhYmxlIGxhdyBvciBhZ3JlZWQgdG8gaW4gd3JpdGluZywgc29mdHdhcmVcbiAqIGRpc3RyaWJ1dGVkIHVuZGVyIHRoZSBMaWNlbnNlIGlzIGRpc3RyaWJ1dGVkIG9uIGFuIFwiQVMgSVNcIiBCQVNJUyxcbiAqIFdJVEhPVVQgV0FSUkFOVElFUyBPUiBDT05ESVRJT05TIE9GIEFOWSBLSU5ELCBlaXRoZXIgZXhwcmVzcyBvciBpbXBsaWVkLlxuICogU2VlIHRoZSBMaWNlbnNlIGZvciB0aGUgc3BlY2lmaWMgVE9OIERFViBzb2Z0d2FyZSBnb3Zlcm5pbmcgcGVybWlzc2lvbnMgYW5kXG4gKiBsaW1pdGF0aW9ucyB1bmRlciB0aGUgTGljZW5zZS5cbiAqL1xuXG4vLyBAZmxvd1xuXG5pbXBvcnQgeyBJbk1lbW9yeUNhY2hlIH0gZnJvbSAnYXBvbGxvLWNhY2hlLWlubWVtb3J5JztcbmltcG9ydCB7IEFwb2xsb0NsaWVudCB9IGZyb20gJ2Fwb2xsby1jbGllbnQnO1xuaW1wb3J0IHsgQXBvbGxvTGluaywgc3BsaXQgfSBmcm9tICdhcG9sbG8tbGluayc7XG5pbXBvcnQgeyBIdHRwTGluayB9IGZyb20gJ2Fwb2xsby1saW5rLWh0dHAnO1xuaW1wb3J0IHsgV2ViU29ja2V0TGluayB9IGZyb20gJ2Fwb2xsby1saW5rLXdzJztcbmltcG9ydCB7IGdldE1haW5EZWZpbml0aW9uIH0gZnJvbSAnYXBvbGxvLXV0aWxpdGllcyc7XG5pbXBvcnQgZ3FsIGZyb20gJ2dyYXBocWwtdGFnJztcbmltcG9ydCB7IFN1YnNjcmlwdGlvbkNsaWVudCB9IGZyb20gJ3N1YnNjcmlwdGlvbnMtdHJhbnNwb3J0LXdzJztcbmltcG9ydCB7IHNldENvbnRleHQgfSBmcm9tICdhcG9sbG8tbGluay1jb250ZXh0JztcbmltcG9ydCB7XG4gICAgRk9STUFUX1RFWFRfTUFQLCBUYWdzLCBTcGFuLCBTcGFuQ29udGV4dCxcbn0gZnJvbSAnb3BlbnRyYWNpbmcnO1xuaW1wb3J0IHR5cGUge1xuICAgIFRPTlF1ZXJpZXMsXG4gICAgVE9OUUNvbGxlY3Rpb24sXG4gICAgU3Vic2NyaXB0aW9uLFxuICAgIFRPTlF1ZXJ5UGFyYW1zLFxuICAgIFRPTlN1YnNjcmliZVBhcmFtcyxcbiAgICBUT05XYWl0Rm9yUGFyYW1zLCBUT05RdWVyeUFnZ3JlZ2F0ZVBhcmFtcyxcbn0gZnJvbSAnLi4vLi4vdHlwZXMnO1xuaW1wb3J0IHsgVE9OQ2xpZW50LCBUT05DbGllbnRFcnJvciB9IGZyb20gJy4uL1RPTkNsaWVudCc7XG5pbXBvcnQgdHlwZSB7IFRPTk1vZHVsZUNvbnRleHQgfSBmcm9tICcuLi9UT05Nb2R1bGUnO1xuaW1wb3J0IHsgVE9OTW9kdWxlIH0gZnJvbSAnLi4vVE9OTW9kdWxlJztcbmltcG9ydCBUT05Db25maWdNb2R1bGUsIHsgVVJMUGFydHMgfSBmcm9tICcuL1RPTkNvbmZpZ01vZHVsZSc7XG5cblxuZXhwb3J0IHR5cGUgUmVxdWVzdCA9IHtcbiAgICBpZDogc3RyaW5nLFxuICAgIGJvZHk6IHN0cmluZyxcbn1cblxuZXhwb3J0IHR5cGUgU2VydmVySW5mbyA9IHtcbiAgICB2ZXJzaW9uOiBudW1iZXIsXG4gICAgc3VwcG9ydHNPcGVyYXRpb25JZDogYm9vbGVhbixcbiAgICBzdXBwb3J0c0FnZ3JlZ2F0aW9uczogYm9vbGVhbixcbn07XG5cbmV4cG9ydCBjb25zdCBNQVhfVElNRU9VVCA9IDIxNDc0ODM2NDc7XG5cbmZ1bmN0aW9uIHJlc29sdmVQYXJhbXM8VD4oYXJnczogYW55W10sIHJlcXVpcmVkUGFyYW1OYW1lOiBzdHJpbmcsIHJlc29sdmVBcmdzOiAoKSA9PiBUKTogVCB7XG4gICAgcmV0dXJuIChhcmdzLmxlbmd0aCA9PT0gMSkgJiYgKHJlcXVpcmVkUGFyYW1OYW1lIGluIGFyZ3NbMF0pID8gYXJnc1swXSA6IHJlc29sdmVBcmdzKCk7XG59XG5cbnR5cGUgTXVsdGljYXN0TGlzdGVuZXI8VmFsdWU+ID0ge1xuICAgIHJlc29sdmU6ICh2YWx1ZTogVmFsdWUpID0+IHZvaWQ7XG4gICAgcmVqZWN0OiAoZXJyb3I6IEVycm9yKSA9PiB2b2lkO1xufTtcblxuY2xhc3MgTXVsdGljYXN0UHJvbWlzZTxWYWx1ZT4ge1xuICAgIGxpc3RlbmVyczogTXVsdGljYXN0TGlzdGVuZXI8VmFsdWU+W107XG4gICAgb25Db21wbGV0ZTogPygoKSA9PiB2b2lkKTtcblxuICAgIGNvbnN0cnVjdG9yKCkge1xuICAgICAgICB0aGlzLmxpc3RlbmVycyA9IFtdO1xuICAgICAgICB0aGlzLm9uQ29tcGxldGUgPSBudWxsO1xuICAgIH1cblxuICAgIGxpc3RlbigpOiBQcm9taXNlPFZhbHVlPiB7XG4gICAgICAgIGNvbnN0IGxpc3RlbmVyOiBNdWx0aWNhc3RMaXN0ZW5lcjxWYWx1ZT4gPSB7XG4gICAgICAgICAgICByZXNvbHZlOiAoKSA9PiB7XG4gICAgICAgICAgICB9LFxuICAgICAgICAgICAgcmVqZWN0OiAoKSA9PiB7XG4gICAgICAgICAgICB9LFxuICAgICAgICB9O1xuICAgICAgICB0aGlzLmxpc3RlbmVycy5wdXNoKGxpc3RlbmVyKTtcbiAgICAgICAgcmV0dXJuIG5ldyBQcm9taXNlKChyZXNvbHZlLCByZWplY3QpID0+IHtcbiAgICAgICAgICAgIGxpc3RlbmVyLnJlc29sdmUgPSByZXNvbHZlO1xuICAgICAgICAgICAgbGlzdGVuZXIucmVqZWN0ID0gcmVqZWN0O1xuICAgICAgICB9KTtcbiAgICB9XG5cbiAgICByZXNvbHZlKHZhbHVlOiBWYWx1ZSkge1xuICAgICAgICB0aGlzLmNvbXBsZXRlKGxpc3RlbmVyID0+IGxpc3RlbmVyLnJlc29sdmUodmFsdWUpKTtcbiAgICB9XG5cbiAgICByZWplY3QoZXJyb3I6IEVycm9yKSB7XG4gICAgICAgIHRoaXMuY29tcGxldGUobGlzdGVuZXIgPT4gbGlzdGVuZXIucmVqZWN0KGVycm9yKSk7XG4gICAgfVxuXG4gICAgY29tcGxldGUoY29tcGxldGVMaXN0ZW5lcjogKGxpc3RlbmVyOiBNdWx0aWNhc3RMaXN0ZW5lcjxWYWx1ZT4pID0+IHZvaWQpIHtcbiAgICAgICAgY29uc3QgeyBsaXN0ZW5lcnMgfSA9IHRoaXM7XG4gICAgICAgIHRoaXMubGlzdGVuZXJzID0gW107XG4gICAgICAgIGlmICh0aGlzLm9uQ29tcGxldGUpIHtcbiAgICAgICAgICAgIHRoaXMub25Db21wbGV0ZSgpO1xuICAgICAgICB9XG4gICAgICAgIGxpc3RlbmVycy5mb3JFYWNoKGxpc3RlbmVyID0+IGNvbXBsZXRlTGlzdGVuZXIobGlzdGVuZXIpKTtcbiAgICB9XG59XG5cbmZ1bmN0aW9uIHZlcnNpb25Ub051bWJlcihzOiBzdHJpbmcpOiBudW1iZXIge1xuICAgIGNvbnN0IHBhcnRzID0gYCR7cyB8fCAnJ31gLnNwbGl0KCcuJylcbiAgICAgICAgLm1hcCh4ID0+IE51bWJlcih4KSlcbiAgICAgICAgLnNsaWNlKDAsIDMpO1xuICAgIHdoaWxlIChwYXJ0cy5sZW5ndGggPCAzKSB7XG4gICAgICAgIHBhcnRzLnB1c2goMCk7XG4gICAgfVxuICAgIHJldHVybiBwYXJ0c1swXSAqIDEwMDAwMDAgKyBwYXJ0c1sxXSAqIDEwMDAgKyBwYXJ0c1syXTtcbn1cblxuZnVuY3Rpb24gcmVzb2x2ZVNlcnZlckluZm8odmVyc2lvblN0cmluZzogc3RyaW5nIHwgbnVsbCB8IHR5cGVvZiB1bmRlZmluZWQpOiBTZXJ2ZXJJbmZvIHtcbiAgICBjb25zdCB2ZXJzaW9uID0gdmVyc2lvblRvTnVtYmVyKHZlcnNpb25TdHJpbmcgfHwgJzAuMjQuNCcpO1xuICAgIHJldHVybiB7XG4gICAgICAgIHZlcnNpb24sXG4gICAgICAgIHN1cHBvcnRzT3BlcmF0aW9uSWQ6IHZlcnNpb24gPiAyNDAwNCxcbiAgICAgICAgc3VwcG9ydHNBZ2dyZWdhdGlvbnM6IHZlcnNpb24gPj0gMjUwMDAsXG4gICAgfTtcbn1cblxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgVE9OUXVlcmllc01vZHVsZSBleHRlbmRzIFRPTk1vZHVsZSBpbXBsZW1lbnRzIFRPTlF1ZXJpZXMge1xuICAgIGNvbmZpZzogVE9OQ29uZmlnTW9kdWxlO1xuXG4gICAgb3ZlcnJpZGVXc1VybDogP3N0cmluZztcbiAgICBncmFwaHFsQ2xpZW50Q3JlYXRpb246ID9NdWx0aWNhc3RQcm9taXNlPEFwb2xsb0NsaWVudD47XG4gICAgb3BlcmF0aW9uSWRQcmVmaXg6IHN0cmluZztcbiAgICBvcGVyYXRpb25JZFN1ZmZpeDogbnVtYmVyO1xuICAgIHNlcnZlckluZm86IFNlcnZlckluZm87XG5cbiAgICBjb25zdHJ1Y3Rvcihjb250ZXh0OiBUT05Nb2R1bGVDb250ZXh0KSB7XG4gICAgICAgIHN1cGVyKGNvbnRleHQpO1xuICAgICAgICB0aGlzLmdyYXBocWxDbGllbnQgPSBudWxsO1xuICAgICAgICB0aGlzLm92ZXJyaWRlV3NVcmwgPSBudWxsO1xuICAgICAgICB0aGlzLmdyYXBocWxDbGllbnRDcmVhdGlvbiA9IG51bGw7XG4gICAgICAgIHRoaXMub3BlcmF0aW9uSWRQcmVmaXggPSAoRGF0ZS5ub3coKSAlIDYwMDAwKS50b1N0cmluZygxNik7XG4gICAgICAgIGZvciAobGV0IGkgPSAwOyBpIDwgMTA7IGkgKz0gMSkge1xuICAgICAgICAgICAgdGhpcy5vcGVyYXRpb25JZFByZWZpeCA9XG4gICAgICAgICAgICAgICAgYCR7dGhpcy5vcGVyYXRpb25JZFByZWZpeH0ke01hdGgucm91bmQoTWF0aC5yYW5kb20oKSAqIDI1NilcbiAgICAgICAgICAgICAgICAgICAgLnRvU3RyaW5nKDE2KX1gO1xuICAgICAgICB9XG4gICAgICAgIHRoaXMub3BlcmF0aW9uSWRTdWZmaXggPSAxO1xuICAgICAgICB0aGlzLnNlcnZlckluZm8gPSByZXNvbHZlU2VydmVySW5mbygpO1xuICAgIH1cblxuICAgIGFzeW5jIHNldHVwKCkge1xuICAgICAgICB0aGlzLmNvbmZpZyA9IHRoaXMuY29udGV4dC5nZXRNb2R1bGUoVE9OQ29uZmlnTW9kdWxlKTtcbiAgICAgICAgdGhpcy50cmFuc2FjdGlvbnMgPSBuZXcgVE9OUXVlcmllc01vZHVsZUNvbGxlY3Rpb24odGhpcywgJ3RyYW5zYWN0aW9ucycsICdUcmFuc2FjdGlvbicpO1xuICAgICAgICB0aGlzLm1lc3NhZ2VzID0gbmV3IFRPTlF1ZXJpZXNNb2R1bGVDb2xsZWN0aW9uKHRoaXMsICdtZXNzYWdlcycsICdNZXNzYWdlJyk7XG4gICAgICAgIHRoaXMuYmxvY2tzID0gbmV3IFRPTlF1ZXJpZXNNb2R1bGVDb2xsZWN0aW9uKHRoaXMsICdibG9ja3MnLCAnQmxvY2snKTtcbiAgICAgICAgdGhpcy5hY2NvdW50cyA9IG5ldyBUT05RdWVyaWVzTW9kdWxlQ29sbGVjdGlvbih0aGlzLCAnYWNjb3VudHMnLCAnQWNjb3VudCcpO1xuICAgICAgICB0aGlzLmJsb2Nrc19zaWduYXR1cmVzID0gbmV3IFRPTlF1ZXJpZXNNb2R1bGVDb2xsZWN0aW9uKHRoaXMsICdibG9ja3Nfc2lnbmF0dXJlcycsICdCbG9ja1NpZ25hdHVyZXMnKTtcbiAgICB9XG5cbiAgICBhc3luYyBkZXRlY3RSZWRpcmVjdChmZXRjaDogYW55LCBzb3VyY2VVcmw6IHN0cmluZyk6IFByb21pc2U8c3RyaW5nPiB7XG4gICAgICAgIGNvbnN0IHJlc3BvbnNlID0gYXdhaXQgZmV0Y2goc291cmNlVXJsKTtcbiAgICAgICAgdHJ5IHtcbiAgICAgICAgICAgIHRoaXMuc2VydmVySW5mbyA9IHJlc29sdmVTZXJ2ZXJJbmZvKChhd2FpdCByZXNwb25zZS5qc29uKCkpLmRhdGEuaW5mby52ZXJzaW9uKTtcbiAgICAgICAgfSBjYXRjaCB7XG4gICAgICAgIH1cbiAgICAgICAgaWYgKHJlc3BvbnNlLnJlZGlyZWN0ZWQgPT09IHRydWUpIHtcbiAgICAgICAgICAgIHJldHVybiByZXNwb25zZS51cmw7XG4gICAgICAgIH1cbiAgICAgICAgaWYgKHJlc3BvbnNlLnJlZGlyZWN0ZWQgPT09IGZhbHNlKSB7XG4gICAgICAgICAgICByZXR1cm4gJyc7XG4gICAgICAgIH1cbiAgICAgICAgY29uc3Qgc291cmNlTG9jYXRpb24gPSBVUkxQYXJ0cy5wYXJzZShzb3VyY2VVcmwpXG4gICAgICAgICAgICAuZml4UXVlcnkoXyA9PiAnJylcbiAgICAgICAgICAgIC50b1N0cmluZygpXG4gICAgICAgICAgICAudG9Mb3dlckNhc2UoKTtcbiAgICAgICAgY29uc3QgcmVzcG9uc2VMb2NhdGlvbiA9IFVSTFBhcnRzLnBhcnNlKHJlc3BvbnNlLnVybClcbiAgICAgICAgICAgIC5maXhRdWVyeShfID0+ICcnKVxuICAgICAgICAgICAgLnRvU3RyaW5nKClcbiAgICAgICAgICAgIC50b0xvd2VyQ2FzZSgpO1xuICAgICAgICByZXR1cm4gcmVzcG9uc2VMb2NhdGlvbiAhPT0gc291cmNlTG9jYXRpb24gPyByZXNwb25zZS51cmwgOiAnJztcbiAgICB9XG5cbiAgICBhc3luYyBnZXRDbGllbnRDb25maWcoKSB7XG4gICAgICAgIGNvbnN0IGNvbmZpZyA9IHRoaXMuY29uZmlnO1xuICAgICAgICBjb25zdCBjbGllbnRQbGF0Zm9ybSA9IFRPTkNsaWVudC5jbGllbnRQbGF0Zm9ybTtcbiAgICAgICAgaWYgKCFjbGllbnRQbGF0Zm9ybSkge1xuICAgICAgICAgICAgdGhyb3cgRXJyb3IoJ1RPTiBDbGllbnQgZG9lcyBub3QgY29uZmlndXJlZCcpO1xuICAgICAgICB9XG4gICAgICAgIGNvbnN0IGZldGNoID0gY2xpZW50UGxhdGZvcm0uZmV0Y2g7XG5cbiAgICAgICAgZnVuY3Rpb24gZ2V0Q29uZmlnRm9yU2VydmVyKHNlcnZlcjogc3RyaW5nKSB7XG4gICAgICAgICAgICBjb25zdCBodHRwUGFydHMgPSBVUkxQYXJ0cy5wYXJzZShzZXJ2ZXIpXG4gICAgICAgICAgICAgICAgLmZpeFByb3RvY29sKHggPT4gKHggPT09ICdodHRwOi8vJyA/IHggOiAnaHR0cHM6Ly8nKSlcbiAgICAgICAgICAgICAgICAuZml4UGF0aCh4ID0+IGAke3h9L2dyYXBocWxgKTtcbiAgICAgICAgICAgIGNvbnN0IGh0dHAgPSBodHRwUGFydHMudG9TdHJpbmcoKTtcbiAgICAgICAgICAgIGNvbnN0IHdzID0gaHR0cFBhcnRzXG4gICAgICAgICAgICAgICAgLmZpeFByb3RvY29sKHggPT4gKHggPT09ICdodHRwOi8vJyA/ICd3czovLycgOiAnd3NzOi8vJykpXG4gICAgICAgICAgICAgICAgLnRvU3RyaW5nKCk7XG4gICAgICAgICAgICByZXR1cm4ge1xuICAgICAgICAgICAgICAgIGh0dHBVcmw6IGh0dHAsXG4gICAgICAgICAgICAgICAgd3NVcmw6IHdzLFxuICAgICAgICAgICAgICAgIGZldGNoOiBjbGllbnRQbGF0Zm9ybS5mZXRjaCxcbiAgICAgICAgICAgICAgICBXZWJTb2NrZXQ6IGNsaWVudFBsYXRmb3JtLldlYlNvY2tldCxcbiAgICAgICAgICAgIH07XG4gICAgICAgIH1cblxuICAgICAgICBmb3IgKGNvbnN0IHNlcnZlciBvZiBjb25maWcuZGF0YS5zZXJ2ZXJzKSB7XG4gICAgICAgICAgICBjb25zdCBjbGllbnRDb25maWcgPSBnZXRDb25maWdGb3JTZXJ2ZXIoc2VydmVyKTtcbiAgICAgICAgICAgIHRyeSB7XG4gICAgICAgICAgICAgICAgLy8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIG5vLWF3YWl0LWluLWxvb3BcbiAgICAgICAgICAgICAgICBjb25zdCByZWRpcmVjdGVkID0gYXdhaXQgdGhpcy5kZXRlY3RSZWRpcmVjdChcbiAgICAgICAgICAgICAgICAgICAgZmV0Y2gsXG4gICAgICAgICAgICAgICAgICAgIGAke2NsaWVudENvbmZpZy5odHRwVXJsfT9xdWVyeT0lN0JpbmZvJTdCdmVyc2lvbiU3RCU3RGAsXG4gICAgICAgICAgICAgICAgKTtcbiAgICAgICAgICAgICAgICBpZiAocmVkaXJlY3RlZCAhPT0gJycpIHtcbiAgICAgICAgICAgICAgICAgICAgY29uc3QgaHR0cFBhcnRzID0gVVJMUGFydHMucGFyc2UocmVkaXJlY3RlZClcbiAgICAgICAgICAgICAgICAgICAgICAgIC5maXhRdWVyeShfID0+ICcnKTtcbiAgICAgICAgICAgICAgICAgICAgY2xpZW50Q29uZmlnLmh0dHBVcmwgPSBodHRwUGFydHMudG9TdHJpbmcoKTtcbiAgICAgICAgICAgICAgICAgICAgY2xpZW50Q29uZmlnLndzVXJsID0gaHR0cFBhcnRzXG4gICAgICAgICAgICAgICAgICAgICAgICAuZml4UHJvdG9jb2woeCA9PiAoeCA9PT0gJ2h0dHA6Ly8nID8gJ3dzOi8vJyA6ICd3c3M6Ly8nKSlcbiAgICAgICAgICAgICAgICAgICAgICAgIC50b1N0cmluZygpO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICByZXR1cm4gY2xpZW50Q29uZmlnO1xuICAgICAgICAgICAgfSBjYXRjaCAoZXJyb3IpIHtcbiAgICAgICAgICAgICAgICBjb25zb2xlLmxvZyhgW2dldENsaWVudENvbmZpZ10gZm9yIHNlcnZlciBcIiR7c2VydmVyfVwiIGZhaWxlZGAsIHtcbiAgICAgICAgICAgICAgICAgICAgY2xpZW50Q29uZmlnOiB7XG4gICAgICAgICAgICAgICAgICAgICAgICBodHRwVXJsOiBjbGllbnRDb25maWcuaHR0cFVybCxcbiAgICAgICAgICAgICAgICAgICAgICAgIHdzVXJsOiBjbGllbnRDb25maWcud3NVcmwsXG4gICAgICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgICAgIGVycm9yU3RyaW5nOiBlcnJvci50b1N0cmluZygpLFxuICAgICAgICAgICAgICAgICAgICBlcnJvcixcbiAgICAgICAgICAgICAgICB9KTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgICByZXR1cm4gZ2V0Q29uZmlnRm9yU2VydmVyKGNvbmZpZy5kYXRhLnNlcnZlcnNbMF0pO1xuICAgIH1cblxuICAgIGFzeW5jIGdldFNlcnZlckluZm8oc3Bhbj86IFNwYW4gfCBTcGFuQ29udGV4dCk6IFByb21pc2U8U2VydmVySW5mbz4ge1xuICAgICAgICBhd2FpdCB0aGlzLmdyYXBocWxDbGllbnRSZXF1aXJlZChzcGFuKTtcbiAgICAgICAgcmV0dXJuIHRoaXMuc2VydmVySW5mbztcbiAgICB9XG5cbiAgICBnZW5lcmF0ZU9wZXJhdGlvbklkKCk6IHN0cmluZyB7XG4gICAgICAgIHRoaXMub3BlcmF0aW9uSWRTdWZmaXggKz0gMTtcbiAgICAgICAgcmV0dXJuIGAke3RoaXMub3BlcmF0aW9uSWRQcmVmaXh9JHt0aGlzLm9wZXJhdGlvbklkU3VmZml4LnRvU3RyaW5nKDE2KX1gO1xuICAgIH1cblxuICAgIGFzeW5jIGZpbmlzaE9wZXJhdGlvbnMob3BlcmF0aW9uSWRzOiBzdHJpbmdbXSkge1xuICAgICAgICBpZiAob3BlcmF0aW9uSWRzLmxlbmd0aCA9PT0gMCkge1xuICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICB9XG4gICAgICAgIGlmICghKGF3YWl0IHRoaXMuZ2V0U2VydmVySW5mbygpKS5zdXBwb3J0c09wZXJhdGlvbklkKSB7XG4gICAgICAgICAgICByZXR1cm47XG4gICAgICAgIH1cbiAgICAgICAgYXdhaXQgdGhpcy5ncmFwaHFsTXV0YXRpb24oYG11dGF0aW9uIGZpbmlzaE9wZXJhdGlvbnMoJG9wZXJhdGlvbklkczogW1N0cmluZ10pIHtcbiAgICAgICAgICAgICAgICBmaW5pc2hPcGVyYXRpb25zKG9wZXJhdGlvbklkczogJG9wZXJhdGlvbklkcylcbiAgICAgICAgICAgIH1gLCB7XG4gICAgICAgICAgICBvcGVyYXRpb25JZHMsXG4gICAgICAgIH0pO1xuICAgIH1cblxuICAgIGFzeW5jIGdldEFjY291bnRzQ291bnQocGFyZW50U3Bhbj86IChTcGFuIHwgU3BhbkNvbnRleHQpKTogUHJvbWlzZTxudW1iZXI+IHtcbiAgICAgICAgY29uc3QgcmVzdWx0ID0gYXdhaXQgdGhpcy5xdWVyeSgncXVlcnl7Z2V0QWNjb3VudHNDb3VudH0nLCB1bmRlZmluZWQsIHBhcmVudFNwYW4pO1xuICAgICAgICByZXR1cm4gcmVzdWx0LmRhdGEuZ2V0QWNjb3VudHNDb3VudDtcbiAgICB9XG5cbiAgICBhc3luYyBnZXRUcmFuc2FjdGlvbnNDb3VudChwYXJlbnRTcGFuPzogKFNwYW4gfCBTcGFuQ29udGV4dCkpOiBQcm9taXNlPG51bWJlcj4ge1xuICAgICAgICBjb25zdCByZXN1bHQgPSBhd2FpdCB0aGlzLnF1ZXJ5KCdxdWVyeXtnZXRUcmFuc2FjdGlvbnNDb3VudH0nLCB1bmRlZmluZWQsIHBhcmVudFNwYW4pO1xuICAgICAgICByZXR1cm4gcmVzdWx0LmRhdGEuZ2V0VHJhbnNhY3Rpb25zQ291bnQ7XG4gICAgfVxuXG4gICAgYXN5bmMgZ2V0QWNjb3VudHNUb3RhbEJhbGFuY2UocGFyZW50U3Bhbj86IChTcGFuIHwgU3BhbkNvbnRleHQpKTogUHJvbWlzZTxzdHJpbmc+IHtcbiAgICAgICAgY29uc3QgcmVzdWx0ID0gYXdhaXQgdGhpcy5xdWVyeSgncXVlcnl7Z2V0QWNjb3VudHNUb3RhbEJhbGFuY2V9JywgdW5kZWZpbmVkLCBwYXJlbnRTcGFuKTtcbiAgICAgICAgcmV0dXJuIHJlc3VsdC5kYXRhLmdldEFjY291bnRzVG90YWxCYWxhbmNlO1xuICAgIH1cblxuICAgIGFzeW5jIHBvc3RSZXF1ZXN0cyhyZXF1ZXN0czogUmVxdWVzdFtdLCBwYXJlbnRTcGFuPzogKFNwYW4gfCBTcGFuQ29udGV4dCkpOiBQcm9taXNlPGFueT4ge1xuICAgICAgICByZXR1cm4gdGhpcy5jb250ZXh0LnRyYWNlKCdxdWVyaWVzLnBvc3RSZXF1ZXN0cycsIGFzeW5jIChzcGFuKSA9PiB7XG4gICAgICAgICAgICByZXR1cm4gdGhpcy5ncmFwaHFsTXV0YXRpb24oYG11dGF0aW9uIHBvc3RSZXF1ZXN0cygkcmVxdWVzdHM6IFtSZXF1ZXN0XSkge1xuICAgICAgICAgICAgICAgIHBvc3RSZXF1ZXN0cyhyZXF1ZXN0czogJHJlcXVlc3RzKVxuICAgICAgICAgICAgfWAsIHtcbiAgICAgICAgICAgICAgICByZXF1ZXN0cyxcbiAgICAgICAgICAgIH0sIHNwYW4pO1xuICAgICAgICB9LCBwYXJlbnRTcGFuKTtcbiAgICB9XG5cbiAgICBhc3luYyBtdXRhdGlvbihcbiAgICAgICAgcWw6IHN0cmluZyxcbiAgICAgICAgdmFyaWFibGVzOiB7IFtzdHJpbmddOiBhbnkgfSA9IHt9LFxuICAgICAgICBwYXJlbnRTcGFuPzogKFNwYW4gfCBTcGFuQ29udGV4dCksXG4gICAgKTogUHJvbWlzZTxhbnk+IHtcbiAgICAgICAgcmV0dXJuIHRoaXMuY29udGV4dC50cmFjZSgncXVlcmllcy5tdXRhdGlvbicsIGFzeW5jIChzcGFuOiBTcGFuKSA9PiB7XG4gICAgICAgICAgICBzcGFuLnNldFRhZygncGFyYW1zJywge1xuICAgICAgICAgICAgICAgIG11dGF0aW9uOiBxbCxcbiAgICAgICAgICAgICAgICB2YXJpYWJsZXMsXG4gICAgICAgICAgICB9KTtcbiAgICAgICAgICAgIHJldHVybiB0aGlzLmdyYXBocWxNdXRhdGlvbihxbCwgdmFyaWFibGVzLCBzcGFuKTtcbiAgICAgICAgfSwgcGFyZW50U3Bhbik7XG4gICAgfVxuXG4gICAgYXN5bmMgcXVlcnkoXG4gICAgICAgIHFsOiBzdHJpbmcsXG4gICAgICAgIHZhcmlhYmxlczogeyBbc3RyaW5nXTogYW55IH0gPSB7fSxcbiAgICAgICAgcGFyZW50U3Bhbj86IChTcGFuIHwgU3BhbkNvbnRleHQpLFxuICAgICk6IFByb21pc2U8YW55PiB7XG4gICAgICAgIHJldHVybiB0aGlzLmNvbnRleHQudHJhY2UoJ3F1ZXJpZXMucXVlcnknLCBhc3luYyAoc3BhbjogU3BhbikgPT4ge1xuICAgICAgICAgICAgc3Bhbi5zZXRUYWcoJ3BhcmFtcycsIHtcbiAgICAgICAgICAgICAgICBxdWVyeTogcWwsXG4gICAgICAgICAgICAgICAgdmFyaWFibGVzLFxuICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICByZXR1cm4gdGhpcy5ncmFwaHFsUXVlcnkocWwsIHZhcmlhYmxlcywgc3Bhbik7XG4gICAgICAgIH0sIHBhcmVudFNwYW4pO1xuICAgIH1cblxuICAgIGFzeW5jIGdyYXBocWxNdXRhdGlvbihxbDogc3RyaW5nLCB2YXJpYWJsZXM6IHsgW3N0cmluZ106IGFueSB9ID0ge30sIHNwYW46IFNwYW4pOiBQcm9taXNlPGFueT4ge1xuICAgICAgICBjb25zdCBtdXRhdGlvbiA9IGdxbChbcWxdKTtcbiAgICAgICAgcmV0dXJuIHRoaXMuZ3JhcGhRbCgoY2xpZW50KSA9PiBjbGllbnQubXV0YXRlKHtcbiAgICAgICAgICAgIG11dGF0aW9uLFxuICAgICAgICAgICAgdmFyaWFibGVzLFxuICAgICAgICAgICAgY29udGV4dDoge1xuICAgICAgICAgICAgICAgIHRyYWNlU3Bhbjogc3BhbixcbiAgICAgICAgICAgIH0sXG4gICAgICAgIH0pKTtcbiAgICB9XG5cbiAgICBzdGF0aWMgaXNOZXR3b3JrRXJyb3IoZXJyb3I6IGFueSk6IGJvb2xlYW4ge1xuICAgICAgICBjb25zdCBuZXR3b3JrRXJyb3IgPSBlcnJvci5uZXR3b3JrRXJyb3I7XG4gICAgICAgIGlmICghbmV0d29ya0Vycm9yKSB7XG4gICAgICAgICAgICByZXR1cm4gZmFsc2U7XG4gICAgICAgIH1cbiAgICAgICAgaWYgKCdlcnJubycgaW4gbmV0d29ya0Vycm9yKSB7XG4gICAgICAgICAgICByZXR1cm4gdHJ1ZTtcbiAgICAgICAgfVxuICAgICAgICByZXR1cm4gISgncmVzcG9uc2UnIGluIG5ldHdvcmtFcnJvciB8fCAncmVzdWx0JyBpbiBuZXR3b3JrRXJyb3IpO1xuICAgIH1cblxuICAgIGFzeW5jIGdyYXBocWxRdWVyeShxbDogc3RyaW5nLCB2YXJpYWJsZXM6IHsgW3N0cmluZ106IGFueSB9ID0ge30sIHNwYW46IFNwYW4pOiBQcm9taXNlPGFueT4ge1xuICAgICAgICBjb25zdCBxdWVyeSA9IGdxbChbcWxdKTtcbiAgICAgICAgcmV0dXJuIHRoaXMuZ3JhcGhRbChhc3luYyAoY2xpZW50KSA9PiB7XG4gICAgICAgICAgICBsZXQgbmV4dFRpbWVvdXQgPSAxMDA7XG4gICAgICAgICAgICB3aGlsZSAodHJ1ZSkge1xuICAgICAgICAgICAgICAgIHRyeSB7XG4gICAgICAgICAgICAgICAgICAgIHJldHVybiBhd2FpdCBjbGllbnQucXVlcnkoe1xuICAgICAgICAgICAgICAgICAgICAgICAgcXVlcnksXG4gICAgICAgICAgICAgICAgICAgICAgICB2YXJpYWJsZXMsXG4gICAgICAgICAgICAgICAgICAgICAgICBjb250ZXh0OiB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgdHJhY2VTcGFuOiBzcGFuLFxuICAgICAgICAgICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICAgICAgfSBjYXRjaCAoZXJyb3IpIHtcbiAgICAgICAgICAgICAgICAgICAgaWYgKFRPTlF1ZXJpZXNNb2R1bGUuaXNOZXR3b3JrRXJyb3IoZXJyb3IpKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICBjb25zb2xlLndhcm4oZXJyb3IubmV0d29ya0Vycm9yKTtcbiAgICAgICAgICAgICAgICAgICAgICAgIGNvbnN0IHRpbWVvdXQgPSBuZXh0VGltZW91dDtcbiAgICAgICAgICAgICAgICAgICAgICAgIGF3YWl0IG5ldyBQcm9taXNlKHggPT4gc2V0VGltZW91dCh4LCB0aW1lb3V0KSk7XG4gICAgICAgICAgICAgICAgICAgICAgICBpZiAobmV4dFRpbWVvdXQgPCAzMjAwKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgbmV4dFRpbWVvdXQgKj0gMjtcbiAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIHRocm93IGVycm9yO1xuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuICAgICAgICB9LCBzcGFuKTtcbiAgICB9XG5cbiAgICBhc3luYyBncmFwaFFsKHJlcXVlc3Q6IChjbGllbnQ6IEFwb2xsb0NsaWVudCkgPT4gUHJvbWlzZTxhbnk+LCBzcGFuOiBTcGFuKTogUHJvbWlzZTxhbnk+IHtcbiAgICAgICAgY29uc3QgY2xpZW50ID0gYXdhaXQgdGhpcy5ncmFwaHFsQ2xpZW50UmVxdWlyZWQoc3Bhbik7XG4gICAgICAgIHRyeSB7XG4gICAgICAgICAgICByZXR1cm4gYXdhaXQgcmVxdWVzdChjbGllbnQpO1xuICAgICAgICB9IGNhdGNoIChlcnJvcikge1xuICAgICAgICAgICAgY29uc3QgZ3FsRXJyID0gZXJyb3IuZ3JhcGhRTEVycm9ycyAmJiBlcnJvci5ncmFwaFFMRXJyb3JzWzBdO1xuICAgICAgICAgICAgaWYgKGdxbEVycikge1xuICAgICAgICAgICAgICAgIGNvbnN0IGNsaWVudEVyciA9IG5ldyBFcnJvcihncWxFcnIubWVzc2FnZSk7XG4gICAgICAgICAgICAgICAgY29uc3QgZ3FsRXhjID0gKGdxbEVyci5leHRlbnNpb25zICYmIGdxbEVyci5leHRlbnNpb25zLmV4Y2VwdGlvbikgfHwge307XG4gICAgICAgICAgICAgICAgKGNsaWVudEVycjogYW55KS5udW1iZXIgPSBncWxFeGMuY29kZSB8fCAwO1xuICAgICAgICAgICAgICAgIChjbGllbnRFcnI6IGFueSkuY29kZSA9IGdxbEV4Yy5jb2RlIHx8IDA7XG4gICAgICAgICAgICAgICAgKGNsaWVudEVycjogYW55KS5zb3VyY2UgPSBncWxFeGMuc291cmNlIHx8ICdjbGllbnQnO1xuICAgICAgICAgICAgICAgIHRocm93IGNsaWVudEVycjtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGNvbnN0IGVycm9ycyA9IGVycm9yXG4gICAgICAgICAgICAgICAgJiYgZXJyb3IubmV0d29ya0Vycm9yXG4gICAgICAgICAgICAgICAgJiYgZXJyb3IubmV0d29ya0Vycm9yLnJlc3VsdFxuICAgICAgICAgICAgICAgICYmIGVycm9yLm5ldHdvcmtFcnJvci5yZXN1bHQuZXJyb3JzO1xuICAgICAgICAgICAgaWYgKGVycm9ycykge1xuICAgICAgICAgICAgICAgIHRocm93IFRPTkNsaWVudEVycm9yLnF1ZXJ5RmFpbGVkKGVycm9ycyk7XG4gICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAgIHRocm93IGVycm9yO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgfVxuXG4gICAgYXN5bmMgZ3JhcGhxbENsaWVudFJlcXVpcmVkKHBhcmVudFNwYW4/OiBTcGFuIHwgU3BhbkNvbnRleHQpOiBQcm9taXNlPEFwb2xsb0NsaWVudD4ge1xuICAgICAgICBpZiAodGhpcy5ncmFwaHFsQ2xpZW50KSB7XG4gICAgICAgICAgICByZXR1cm4gdGhpcy5ncmFwaHFsQ2xpZW50O1xuICAgICAgICB9XG4gICAgICAgIGlmICh0aGlzLmdyYXBocWxDbGllbnRDcmVhdGlvbikge1xuICAgICAgICAgICAgYXdhaXQgdGhpcy5ncmFwaHFsQ2xpZW50Q3JlYXRpb24ubGlzdGVuKCk7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICBjb25zdCBjcmVhdGlvbiA9IG5ldyBNdWx0aWNhc3RQcm9taXNlKCk7XG4gICAgICAgICAgICB0aGlzLmdyYXBocWxDbGllbnRDcmVhdGlvbiA9IGNyZWF0aW9uO1xuICAgICAgICAgICAgdHJ5IHtcbiAgICAgICAgICAgICAgICBhd2FpdCB0aGlzLmNvbnRleHQudHJhY2UoJ3NldHVwIGNsaWVudCcsIChzcGFuKSA9PiB7XG4gICAgICAgICAgICAgICAgICAgIHJldHVybiB0aGlzLmNyZWF0ZUdyYXBocWxDbGllbnQoc3Bhbik7XG4gICAgICAgICAgICAgICAgfSwgcGFyZW50U3Bhbik7XG4gICAgICAgICAgICAgICAgdGhpcy5ncmFwaHFsQ2xpZW50Q3JlYXRpb24gPSBudWxsO1xuICAgICAgICAgICAgICAgIGNyZWF0aW9uLnJlc29sdmUodGhpcy5ncmFwaHFsQ2xpZW50KTtcbiAgICAgICAgICAgIH0gY2F0Y2ggKGVycm9yKSB7XG4gICAgICAgICAgICAgICAgdGhpcy5ncmFwaHFsQ2xpZW50Q3JlYXRpb24gPSBudWxsO1xuICAgICAgICAgICAgICAgIGNyZWF0aW9uLnJlamVjdChlcnJvcik7XG4gICAgICAgICAgICAgICAgdGhyb3cgZXJyb3I7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgICAgcmV0dXJuIHRoaXMuZ3JhcGhxbENsaWVudDtcbiAgICB9XG5cbiAgICBhc3luYyBjcmVhdGVHcmFwaHFsQ2xpZW50KHNwYW46IFNwYW4gfCBTcGFuQ29udGV4dCkge1xuICAgICAgICBjb25zdCB1c2VIdHRwID0gIXRoaXMuY29uZmlnLmRhdGEudXNlV2ViU29ja2V0Rm9yUXVlcmllcztcbiAgICAgICAgbGV0IGNsaWVudENvbmZpZyA9IGF3YWl0IHRoaXMuZ2V0Q2xpZW50Q29uZmlnKCk7XG4gICAgICAgIGxldCB3c0xpbms6ID9XZWJTb2NrZXRMaW5rID0gbnVsbDtcbiAgICAgICAgbGV0IGh0dHBMaW5rOiA/SHR0cExpbmsgPSBudWxsO1xuXG4gICAgICAgIGNvbnN0IHN1YnNPcHRpb25zID0gdGhpcy5jb25maWcudHJhY2VyLmluamVjdChzcGFuLCBGT1JNQVRfVEVYVF9NQVAsIHt9KTtcbiAgICAgICAgY29uc3Qgc3Vic2NyaXB0aW9uQ2xpZW50ID0gbmV3IFN1YnNjcmlwdGlvbkNsaWVudChcbiAgICAgICAgICAgIGNsaWVudENvbmZpZy53c1VybCxcbiAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICByZWNvbm5lY3Q6IHRydWUsXG4gICAgICAgICAgICAgICAgY29ubmVjdGlvblBhcmFtczogKCkgPT4gKHtcbiAgICAgICAgICAgICAgICAgICAgYWNjZXNzS2V5OiB0aGlzLmNvbmZpZy5kYXRhICYmIHRoaXMuY29uZmlnLmRhdGEuYWNjZXNzS2V5LFxuICAgICAgICAgICAgICAgICAgICBoZWFkZXJzOiBzdWJzT3B0aW9ucyxcbiAgICAgICAgICAgICAgICB9KSxcbiAgICAgICAgICAgIH0sXG4gICAgICAgICAgICBjbGllbnRDb25maWcuV2ViU29ja2V0LFxuICAgICAgICApO1xuICAgICAgICBzdWJzY3JpcHRpb25DbGllbnQub25SZWNvbm5lY3RlZCgoKSA9PiB7XG4gICAgICAgICAgICBjb25zb2xlLmxvZygnW1RPTkNsaWVudC5xdWVyaWVzXScsICdXZWJTb2NrZXQgUmVjb25uZWN0ZWQnKTtcbiAgICAgICAgfSk7XG4gICAgICAgIGxldCBkZXRlY3RpbmdSZWRpcmVjdGlvbiA9IGZhbHNlO1xuICAgICAgICBzdWJzY3JpcHRpb25DbGllbnQub25FcnJvcigoKSA9PiB7XG4gICAgICAgICAgICBjb25zb2xlLmxvZygnW1RPTkNsaWVudC5xdWVyaWVzXScsICdXZWJTb2NrZXQgRmFpbGVkJyk7XG4gICAgICAgICAgICBpZiAoZGV0ZWN0aW5nUmVkaXJlY3Rpb24pIHtcbiAgICAgICAgICAgICAgICByZXR1cm47XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICAoYXN5bmMgKCkgPT4ge1xuICAgICAgICAgICAgICAgIGRldGVjdGluZ1JlZGlyZWN0aW9uID0gdHJ1ZTtcbiAgICAgICAgICAgICAgICB0cnkge1xuICAgICAgICAgICAgICAgICAgICBjb25zdCBuZXdDb25maWcgPSBhd2FpdCB0aGlzLmdldENsaWVudENvbmZpZygpO1xuICAgICAgICAgICAgICAgICAgICBjb25zdCBjb25maWdJc0NoYW5nZWQgPSBuZXdDb25maWcuaHR0cFVybCAhPT0gY2xpZW50Q29uZmlnLmh0dHBVcmxcbiAgICAgICAgICAgICAgICAgICAgICAgIHx8IG5ld0NvbmZpZy53c1VybCAhPT0gY2xpZW50Q29uZmlnLndzVXJsO1xuICAgICAgICAgICAgICAgICAgICBpZiAoY29uZmlnSXNDaGFuZ2VkKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICBjb25zb2xlLmxvZygnW1RPTkNsaWVudC5xdWVyaWVzXScsICdDbGllbnQgY29uZmlnIGNoYW5nZWQnKTtcbiAgICAgICAgICAgICAgICAgICAgICAgIGNsaWVudENvbmZpZyA9IG5ld0NvbmZpZztcbiAgICAgICAgICAgICAgICAgICAgICAgIHN1YnNjcmlwdGlvbkNsaWVudC51cmwgPSBuZXdDb25maWcud3NVcmw7XG4gICAgICAgICAgICAgICAgICAgICAgICBpZiAod3NMaW5rKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgd3NMaW5rLnVybCA9IG5ld0NvbmZpZy53c1VybDtcbiAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICAgIGlmIChodHRwTGluaykge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGh0dHBMaW5rLnVyaSA9IG5ld0NvbmZpZy5odHRwVXJsO1xuICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgfSBjYXRjaCAoZXJyKSB7XG4gICAgICAgICAgICAgICAgICAgIGNvbnNvbGUubG9nKCdbVE9OQ2xpZW50LnF1ZXJpZXNdIHJlZGlyZWN0aW9uIGRldGVjdG9yIGZhaWxlZCcsIGVycik7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIGRldGVjdGluZ1JlZGlyZWN0aW9uID0gZmFsc2U7XG4gICAgICAgICAgICB9KSgpO1xuICAgICAgICB9KTtcbiAgICAgICAgc3Vic2NyaXB0aW9uQ2xpZW50Lm1heENvbm5lY3RUaW1lR2VuZXJhdG9yLmR1cmF0aW9uID0gKCkgPT4ge1xuICAgICAgICAgICAgcmV0dXJuIHN1YnNjcmlwdGlvbkNsaWVudC5tYXhDb25uZWN0VGltZUdlbmVyYXRvci5tYXg7XG4gICAgICAgIH07XG5cbiAgICAgICAgY29uc3QgdHJhY2VyTGluayA9IGF3YWl0IHNldENvbnRleHQoKF8sIHJlcSkgPT4ge1xuICAgICAgICAgICAgY29uc3QgcmVzb2x2ZWRTcGFuID0gKHJlcSAmJiByZXEudHJhY2VTcGFuKSB8fCBzcGFuO1xuICAgICAgICAgICAgcmVxLmhlYWRlcnMgPSB7fTtcbiAgICAgICAgICAgIHRoaXMuY29uZmlnLnRyYWNlci5pbmplY3QocmVzb2x2ZWRTcGFuLCBGT1JNQVRfVEVYVF9NQVAsIHJlcS5oZWFkZXJzKTtcbiAgICAgICAgICAgIGNvbnN0IGFjY2Vzc0tleSA9IHRoaXMuY29uZmlnLmRhdGEgJiYgdGhpcy5jb25maWcuZGF0YS5hY2Nlc3NLZXk7XG4gICAgICAgICAgICBpZiAoYWNjZXNzS2V5KSB7XG4gICAgICAgICAgICAgICAgcmVxLmhlYWRlcnMuYWNjZXNzS2V5ID0gYWNjZXNzS2V5O1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgcmV0dXJuIHtcbiAgICAgICAgICAgICAgICBoZWFkZXJzOiByZXEuaGVhZGVycyxcbiAgICAgICAgICAgIH07XG4gICAgICAgIH0pO1xuICAgICAgICBjb25zdCB3cmFwTGluayA9IChsaW5rOiBBcG9sbG9MaW5rKTogQXBvbGxvTGluayA9PiB0cmFjZXJMaW5rLmNvbmNhdChsaW5rKTtcbiAgICAgICAgY29uc3QgaXNTdWJzY3JpcHRpb24gPSAoeyBxdWVyeSB9KSA9PiB7XG4gICAgICAgICAgICBjb25zdCBkZWZpbml0aW9uID0gZ2V0TWFpbkRlZmluaXRpb24ocXVlcnkpO1xuICAgICAgICAgICAgcmV0dXJuIChcbiAgICAgICAgICAgICAgICBkZWZpbml0aW9uLmtpbmQgPT09ICdPcGVyYXRpb25EZWZpbml0aW9uJ1xuICAgICAgICAgICAgICAgICYmIGRlZmluaXRpb24ub3BlcmF0aW9uID09PSAnc3Vic2NyaXB0aW9uJ1xuICAgICAgICAgICAgKTtcbiAgICAgICAgfTtcbiAgICAgICAgd3NMaW5rID0gbmV3IFdlYlNvY2tldExpbmsoc3Vic2NyaXB0aW9uQ2xpZW50KTtcbiAgICAgICAgaHR0cExpbmsgPSB1c2VIdHRwXG4gICAgICAgICAgICA/IG5ldyBIdHRwTGluayh7XG4gICAgICAgICAgICAgICAgdXJpOiBjbGllbnRDb25maWcuaHR0cFVybCxcbiAgICAgICAgICAgICAgICBmZXRjaDogY2xpZW50Q29uZmlnLmZldGNoLFxuICAgICAgICAgICAgfSlcbiAgICAgICAgICAgIDogbnVsbDtcblxuICAgICAgICBjb25zdCBsaW5rID0gaHR0cExpbmtcbiAgICAgICAgICAgID8gc3BsaXQoaXNTdWJzY3JpcHRpb24sIHdyYXBMaW5rKHdzTGluayksIHdyYXBMaW5rKGh0dHBMaW5rKSlcbiAgICAgICAgICAgIDogd3JhcExpbmsod3NMaW5rKTtcbiAgICAgICAgdGhpcy5ncmFwaHFsQ2xpZW50ID0gbmV3IEFwb2xsb0NsaWVudCh7XG4gICAgICAgICAgICBjYWNoZTogbmV3IEluTWVtb3J5Q2FjaGUoe30pLFxuICAgICAgICAgICAgbGluayxcbiAgICAgICAgICAgIGRlZmF1bHRPcHRpb25zOiB7XG4gICAgICAgICAgICAgICAgd2F0Y2hRdWVyeToge1xuICAgICAgICAgICAgICAgICAgICBmZXRjaFBvbGljeTogJ25vLWNhY2hlJyxcbiAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgIHF1ZXJ5OiB7XG4gICAgICAgICAgICAgICAgICAgIGZldGNoUG9saWN5OiAnbm8tY2FjaGUnLFxuICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICB9LFxuICAgICAgICB9KTtcbiAgICB9XG5cbiAgICBhc3luYyBjbG9zZSgpIHtcbiAgICAgICAgaWYgKHRoaXMuZ3JhcGhxbENsaWVudCkge1xuICAgICAgICAgICAgY29uc3QgY2xpZW50ID0gdGhpcy5ncmFwaHFsQ2xpZW50O1xuICAgICAgICAgICAgdGhpcy5ncmFwaHFsQ2xpZW50ID0gbnVsbDtcbiAgICAgICAgICAgIGNsaWVudC5zdG9wKCk7XG4gICAgICAgICAgICBhd2FpdCBjbGllbnQuY2xlYXJTdG9yZSgpO1xuICAgICAgICB9XG4gICAgfVxuXG4gICAgdHJhbnNhY3Rpb25zOiBUT05RQ29sbGVjdGlvbjtcblxuICAgIG1lc3NhZ2VzOiBUT05RQ29sbGVjdGlvbjtcblxuICAgIGJsb2NrczogVE9OUUNvbGxlY3Rpb247XG5cbiAgICBhY2NvdW50czogVE9OUUNvbGxlY3Rpb247XG5cbiAgICBibG9ja3Nfc2lnbmF0dXJlczogVE9OUUNvbGxlY3Rpb247XG5cbiAgICBncmFwaHFsQ2xpZW50OiBBcG9sbG9DbGllbnQ7XG59XG5cblxuY2xhc3MgVE9OUXVlcmllc01vZHVsZUNvbGxlY3Rpb24gaW1wbGVtZW50cyBUT05RQ29sbGVjdGlvbiB7XG4gICAgbW9kdWxlOiBUT05RdWVyaWVzTW9kdWxlO1xuXG4gICAgY29sbGVjdGlvbk5hbWU6IHN0cmluZztcblxuICAgIHR5cGVOYW1lOiBzdHJpbmc7XG5cbiAgICBjb25zdHJ1Y3RvcihcbiAgICAgICAgbW9kdWxlOiBUT05RdWVyaWVzTW9kdWxlLFxuICAgICAgICBjb2xsZWN0aW9uTmFtZTogc3RyaW5nLFxuICAgICAgICB0eXBlTmFtZTogc3RyaW5nLFxuICAgICkge1xuICAgICAgICB0aGlzLm1vZHVsZSA9IG1vZHVsZTtcbiAgICAgICAgdGhpcy5jb2xsZWN0aW9uTmFtZSA9IGNvbGxlY3Rpb25OYW1lO1xuICAgICAgICB0aGlzLnR5cGVOYW1lID0gdHlwZU5hbWU7XG4gICAgfVxuXG4gICAgYXN5bmMgcXVlcnkoXG4gICAgICAgIC4uLmFyZ3NcbiAgICAgICAgLypcbiAgICAgICAgICAgIGZpbHRlck9yUGFyYW1zOiBhbnkgfCBUT05RdWVyeVBhcmFtcyxcbiAgICAgICAgICAgIHJlc3VsdDogc3RyaW5nLFxuICAgICAgICAgICAgb3JkZXJCeT86IE9yZGVyQnlbXSxcbiAgICAgICAgICAgIGxpbWl0PzogbnVtYmVyLFxuICAgICAgICAgICAgdGltZW91dD86IG51bWJlcixcbiAgICAgICAgICAgIHBhcmVudFNwYW4/OiAoU3BhbiB8IFNwYW5Db250ZXh0KVxuICAgICAgICAgKi9cbiAgICApOiBQcm9taXNlPGFueT4ge1xuICAgICAgICBjb25zdCB7XG4gICAgICAgICAgICBmaWx0ZXIsXG4gICAgICAgICAgICByZXN1bHQsXG4gICAgICAgICAgICBvcmRlckJ5LFxuICAgICAgICAgICAgbGltaXQsXG4gICAgICAgICAgICB0aW1lb3V0LFxuICAgICAgICAgICAgb3BlcmF0aW9uSWQsXG4gICAgICAgICAgICBwYXJlbnRTcGFuLFxuICAgICAgICB9ID0gcmVzb2x2ZVBhcmFtczxUT05RdWVyeVBhcmFtcz4oYXJncywgJ2ZpbHRlcicsICgpID0+ICh7XG4gICAgICAgICAgICBmaWx0ZXI6IGFyZ3NbMF0sXG4gICAgICAgICAgICByZXN1bHQ6IChhcmdzWzFdOiBhbnkpLFxuICAgICAgICAgICAgb3JkZXJCeTogKGFyZ3NbMl06IGFueSksXG4gICAgICAgICAgICBsaW1pdDogKGFyZ3NbM106IGFueSksXG4gICAgICAgICAgICB0aW1lb3V0OiAoYXJnc1s0XTogYW55KSxcbiAgICAgICAgICAgIHBhcmVudFNwYW46IGFyZ3NbNV0sXG4gICAgICAgIH0pKTtcbiAgICAgICAgcmV0dXJuIHRoaXMubW9kdWxlLmNvbnRleHQudHJhY2UoYCR7dGhpcy5jb2xsZWN0aW9uTmFtZX0ucXVlcnlgLCBhc3luYyAoc3BhbikgPT4ge1xuICAgICAgICAgICAgc3Bhbi5zZXRUYWcoJ3BhcmFtcycsIHtcbiAgICAgICAgICAgICAgICBmaWx0ZXIsXG4gICAgICAgICAgICAgICAgcmVzdWx0LFxuICAgICAgICAgICAgICAgIG9yZGVyQnksXG4gICAgICAgICAgICAgICAgbGltaXQsXG4gICAgICAgICAgICAgICAgdGltZW91dCxcbiAgICAgICAgICAgICAgICBvcGVyYXRpb25JZCxcbiAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgY29uc3QgdXNlT3BlcmF0aW9uSWQgPSBvcGVyYXRpb25JZFxuICAgICAgICAgICAgICAgICYmIChhd2FpdCB0aGlzLm1vZHVsZS5nZXRTZXJ2ZXJJbmZvKHNwYW4pKS5zdXBwb3J0c09wZXJhdGlvbklkO1xuICAgICAgICAgICAgY29uc3QgYyA9IHRoaXMuY29sbGVjdGlvbk5hbWU7XG4gICAgICAgICAgICBjb25zdCB0ID0gdGhpcy50eXBlTmFtZTtcbiAgICAgICAgICAgIGNvbnN0IHFsID0gYFxuICAgICAgICAgICAgcXVlcnkgJHtjfShcbiAgICAgICAgICAgICAgICAkZmlsdGVyOiAke3R9RmlsdGVyLFxuICAgICAgICAgICAgICAgICRvcmRlckJ5OiBbUXVlcnlPcmRlckJ5XSwgXG4gICAgICAgICAgICAgICAgJGxpbWl0OiBJbnQsIFxuICAgICAgICAgICAgICAgICR0aW1lb3V0OiBGbG9hdFxuICAgICAgICAgICAgICAgICR7dXNlT3BlcmF0aW9uSWQgPyAnLCAkb3BlcmF0aW9uSWQ6IFN0cmluZycgOiAnJ31cbiAgICAgICAgICAgICApIHtcbiAgICAgICAgICAgICAgICAke2N9KFxuICAgICAgICAgICAgICAgICAgICBmaWx0ZXI6ICRmaWx0ZXIsIFxuICAgICAgICAgICAgICAgICAgICBvcmRlckJ5OiAkb3JkZXJCeSwgXG4gICAgICAgICAgICAgICAgICAgIGxpbWl0OiAkbGltaXQsIFxuICAgICAgICAgICAgICAgICAgICB0aW1lb3V0OiAkdGltZW91dFxuICAgICAgICAgICAgICAgICAgICAke3VzZU9wZXJhdGlvbklkID8gJywgb3BlcmF0aW9uSWQ6ICRvcGVyYXRpb25JZCcgOiAnJ31cbiAgICAgICAgICAgICAgICApIHsgJHtyZXN1bHR9IH1cbiAgICAgICAgICAgIH1gO1xuICAgICAgICAgICAgY29uc3QgdmFyaWFibGVzOiB7IFtzdHJpbmddOiBhbnkgfSA9IHtcbiAgICAgICAgICAgICAgICBmaWx0ZXIsXG4gICAgICAgICAgICAgICAgb3JkZXJCeSxcbiAgICAgICAgICAgICAgICBsaW1pdCxcbiAgICAgICAgICAgIH07XG4gICAgICAgICAgICBpZiAodXNlT3BlcmF0aW9uSWQpIHtcbiAgICAgICAgICAgICAgICB2YXJpYWJsZXMub3BlcmF0aW9uSWQgPSBvcGVyYXRpb25JZDtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGlmICh0aW1lb3V0KSB7XG4gICAgICAgICAgICAgICAgdmFyaWFibGVzLnRpbWVvdXQgPSBNYXRoLm1pbihNQVhfVElNRU9VVCwgdGltZW91dCk7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICByZXR1cm4gKGF3YWl0IHRoaXMubW9kdWxlLmdyYXBocWxRdWVyeShxbCwgdmFyaWFibGVzLCBzcGFuKSkuZGF0YVtjXTtcbiAgICAgICAgfSwgcGFyZW50U3Bhbik7XG4gICAgfVxuXG4gICAgYXN5bmMgYWdncmVnYXRlKFxuICAgICAgICBwYXJhbXM6IFRPTlF1ZXJ5QWdncmVnYXRlUGFyYW1zLFxuICAgICk6IFByb21pc2U8c3RyaW5nW10+IHtcbiAgICAgICAgcmV0dXJuIHRoaXMubW9kdWxlLmNvbnRleHQudHJhY2UoYCR7dGhpcy5jb2xsZWN0aW9uTmFtZX0uYWdncmVnYXRlYCwgYXN5bmMgKHNwYW4pID0+IHtcbiAgICAgICAgICAgIHNwYW4uc2V0VGFnKCdwYXJhbXMnLCB7XG4gICAgICAgICAgICAgICAgZmlsdGVyOiBwYXJhbXMuZmlsdGVyLFxuICAgICAgICAgICAgICAgIGZpZWxkczogcGFyYW1zLmZpZWxkcyxcbiAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgaWYgKCEoYXdhaXQgdGhpcy5tb2R1bGUuZ2V0U2VydmVySW5mbyhzcGFuKSkuc3VwcG9ydHNBZ2dyZWdhdGlvbnMpIHtcbiAgICAgICAgICAgICAgICB0aHJvdyBUT05DbGllbnRFcnJvci5zZXJ2ZXJEb2VzbnRTdXBwb3J0QWdncmVnYXRpb25zKCk7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBjb25zdCB0ID0gdGhpcy50eXBlTmFtZTtcbiAgICAgICAgICAgIGNvbnN0IHEgPSB0aGlzLnR5cGVOYW1lLmVuZHNXaXRoKCdzJykgPyBgYWdncmVnYXRlJHt0fWAgOiBgYWdncmVnYXRlJHt0fXNgO1xuICAgICAgICAgICAgY29uc3QgcWwgPSBgXG4gICAgICAgICAgICBxdWVyeSAke3F9KFxuICAgICAgICAgICAgICAgICRmaWx0ZXI6ICR7dH1GaWx0ZXIsXG4gICAgICAgICAgICAgICAgJGZpZWxkczogW0ZpZWxkQWdncmVnYXRpb25dIFxuICAgICAgICAgICAgICkge1xuICAgICAgICAgICAgICAgICR7cX0oXG4gICAgICAgICAgICAgICAgICAgIGZpbHRlcjogJGZpbHRlciwgXG4gICAgICAgICAgICAgICAgICAgIGZpZWxkczogJGZpZWxkcyBcbiAgICAgICAgICAgICAgICApXG4gICAgICAgICAgICB9YDtcbiAgICAgICAgICAgIGNvbnN0IHZhcmlhYmxlczogeyBbc3RyaW5nXTogYW55IH0gPSB7XG4gICAgICAgICAgICAgICAgZmlsdGVyOiBwYXJhbXMuZmlsdGVyLFxuICAgICAgICAgICAgICAgIGZpZWxkczogcGFyYW1zLmZpZWxkcyxcbiAgICAgICAgICAgIH07XG4gICAgICAgICAgICByZXR1cm4gKGF3YWl0IHRoaXMubW9kdWxlLmdyYXBocWxRdWVyeShxbCwgdmFyaWFibGVzLCBzcGFuKSkuZGF0YVtxXTtcbiAgICAgICAgfSwgcGFyYW1zLnBhcmVudFNwYW4pO1xuICAgIH1cblxuICAgIHN1YnNjcmliZShcbiAgICAgICAgLi4uYXJnc1xuICAgICAgICAvKlxuICAgICAgICBmaWx0ZXJPclBhcmFtczogYW55IHwgVE9OU3Vic2NyaWJlUGFyYW1zLFxuICAgICAgICByZXN1bHQ/OiBzdHJpbmcsXG4gICAgICAgIG9uRG9jRXZlbnQ/OiBEb2NFdmVudCxcbiAgICAgICAgb25FcnJvcj86IChlcnI6IEVycm9yKSA9PiB2b2lkXG4gICAgICAgICAqL1xuICAgICk6IFN1YnNjcmlwdGlvbiB7XG4gICAgICAgIGNvbnN0IHtcbiAgICAgICAgICAgIGZpbHRlcixcbiAgICAgICAgICAgIHJlc3VsdCxcbiAgICAgICAgICAgIG9uRG9jRXZlbnQsXG4gICAgICAgICAgICBvbkVycm9yLFxuICAgICAgICB9ID0gcmVzb2x2ZVBhcmFtczxUT05TdWJzY3JpYmVQYXJhbXM+KGFyZ3MsICdmaWx0ZXInLCAoKSA9PiAoe1xuICAgICAgICAgICAgZmlsdGVyOiBhcmdzWzBdLFxuICAgICAgICAgICAgcmVzdWx0OiAoYXJnc1sxXTogYW55KSxcbiAgICAgICAgICAgIG9uRG9jRXZlbnQ6IChhcmdzWzJdOiBhbnkpLFxuICAgICAgICAgICAgb25FcnJvcjogKGFyZ3NbM106IGFueSksXG4gICAgICAgIH0pKTtcbiAgICAgICAgY29uc3Qgc3BhbiA9IHRoaXMubW9kdWxlLmNvbmZpZy50cmFjZXIuc3RhcnRTcGFuKCdUT05RdWVyaWVzTW9kdWxlLmpzOnN1YnNjcmliZSAnKTtcbiAgICAgICAgc3Bhbi5zZXRUYWcoVGFncy5TUEFOX0tJTkQsICdjbGllbnQnKTtcbiAgICAgICAgY29uc3QgdGV4dCA9IGBzdWJzY3JpcHRpb24gJHt0aGlzLmNvbGxlY3Rpb25OYW1lfSgkZmlsdGVyOiAke3RoaXMudHlwZU5hbWV9RmlsdGVyKSB7XG4gICAgICAgICAgICAke3RoaXMuY29sbGVjdGlvbk5hbWV9KGZpbHRlcjogJGZpbHRlcikgeyAke3Jlc3VsdH0gfVxuICAgICAgICB9YDtcbiAgICAgICAgY29uc3QgcXVlcnkgPSBncWwoW3RleHRdKTtcbiAgICAgICAgbGV0IHN1YnNjcmlwdGlvbiA9IG51bGw7XG4gICAgICAgIChhc3luYyAoKSA9PiB7XG4gICAgICAgICAgICB0cnkge1xuICAgICAgICAgICAgICAgIGNvbnN0IGNsaWVudCA9IGF3YWl0IHRoaXMubW9kdWxlLmdyYXBocWxDbGllbnRSZXF1aXJlZChzcGFuKTtcbiAgICAgICAgICAgICAgICBjb25zdCBvYnNlcnZhYmxlID0gY2xpZW50LnN1YnNjcmliZSh7XG4gICAgICAgICAgICAgICAgICAgIHF1ZXJ5LFxuICAgICAgICAgICAgICAgICAgICB2YXJpYWJsZXM6IHtcbiAgICAgICAgICAgICAgICAgICAgICAgIGZpbHRlcixcbiAgICAgICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICB9KTtcbiAgICAgICAgICAgICAgICBzdWJzY3JpcHRpb24gPSBvYnNlcnZhYmxlLnN1YnNjcmliZSgobWVzc2FnZSkgPT4ge1xuICAgICAgICAgICAgICAgICAgICBvbkRvY0V2ZW50KCdpbnNlcnQvdXBkYXRlJywgbWVzc2FnZS5kYXRhW3RoaXMuY29sbGVjdGlvbk5hbWVdKTtcbiAgICAgICAgICAgICAgICB9KTtcbiAgICAgICAgICAgIH0gY2F0Y2ggKGVycm9yKSB7XG4gICAgICAgICAgICAgICAgc3Bhbi5sb2coe1xuICAgICAgICAgICAgICAgICAgICBldmVudDogJ2ZhaWxlZCcsXG4gICAgICAgICAgICAgICAgICAgIHBheWxvYWQ6IGVycm9yLFxuICAgICAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgICAgIGlmIChvbkVycm9yKSB7XG4gICAgICAgICAgICAgICAgICAgIG9uRXJyb3IoZXJyb3IpO1xuICAgICAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgICAgICAgIGNvbnNvbGUubG9nKCdUT04gQ2xpZW50IHN1YnNjcmlwdGlvbiBlcnJvcicsIGVycm9yKTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG4gICAgICAgIH0pKCk7XG4gICAgICAgIHJldHVybiB7XG4gICAgICAgICAgICB1bnN1YnNjcmliZTogKCkgPT4ge1xuICAgICAgICAgICAgICAgIGlmIChzdWJzY3JpcHRpb24pIHtcbiAgICAgICAgICAgICAgICAgICAgc3Vic2NyaXB0aW9uLnVuc3Vic2NyaWJlKCk7XG4gICAgICAgICAgICAgICAgICAgIHNwYW4uZmluaXNoKCk7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfSxcbiAgICAgICAgfTtcbiAgICB9XG5cbiAgICBhc3luYyB3YWl0Rm9yKFxuICAgICAgICAuLi5hcmdzXG4gICAgICAgIC8qXG4gICAgICAgIGZpbHRlck9yUGFyYW1zOiBhbnkgfCBUT05XYWl0Rm9yUGFyYW1zLFxuICAgICAgICByZXN1bHQ6IHN0cmluZyxcbiAgICAgICAgdGltZW91dD86IG51bWJlcixcbiAgICAgICAgcGFyZW50U3Bhbj86IChTcGFuIHwgU3BhbkNvbnRleHQpXG4gICAgICAgICAqL1xuICAgICk6IFByb21pc2U8YW55PiB7XG4gICAgICAgIGNvbnN0IHtcbiAgICAgICAgICAgIGZpbHRlcixcbiAgICAgICAgICAgIHJlc3VsdCxcbiAgICAgICAgICAgIHRpbWVvdXQ6IHBhcmFtc1RpbWVvdXQsXG4gICAgICAgICAgICBwYXJlbnRTcGFuLFxuICAgICAgICAgICAgb3BlcmF0aW9uSWQsXG4gICAgICAgIH0gPSByZXNvbHZlUGFyYW1zPFRPTldhaXRGb3JQYXJhbXM+KGFyZ3MsICdmaWx0ZXInLCAoKSA9PiAoe1xuICAgICAgICAgICAgZmlsdGVyOiBhcmdzWzBdLFxuICAgICAgICAgICAgcmVzdWx0OiAoYXJnc1sxXTogYW55KSxcbiAgICAgICAgICAgIHRpbWVvdXQ6IChhcmdzWzJdOiBhbnkpLFxuICAgICAgICAgICAgcGFyZW50U3BhbjogYXJnc1szXSxcbiAgICAgICAgfSkpO1xuICAgICAgICBjb25zdCB0aW1lb3V0ID0gcGFyYW1zVGltZW91dCB8fCB0aGlzLm1vZHVsZS5jb25maWcud2FpdEZvclRpbWVvdXQoKTtcbiAgICAgICAgY29uc3QgZG9jcyA9IGF3YWl0IHRoaXMucXVlcnkoe1xuICAgICAgICAgICAgZmlsdGVyLFxuICAgICAgICAgICAgcmVzdWx0LFxuICAgICAgICAgICAgdGltZW91dCxcbiAgICAgICAgICAgIHBhcmVudFNwYW4sXG4gICAgICAgICAgICBvcGVyYXRpb25JZCxcbiAgICAgICAgfSk7XG4gICAgICAgIGlmIChkb2NzLmxlbmd0aCA+IDApIHtcbiAgICAgICAgICAgIHJldHVybiBkb2NzWzBdO1xuICAgICAgICB9XG4gICAgICAgIHRocm93IFRPTkNsaWVudEVycm9yLndhaXRGb3JUaW1lb3V0KCk7XG4gICAgfVxufVxuXG5UT05RdWVyaWVzTW9kdWxlLm1vZHVsZU5hbWUgPSAnVE9OUXVlcmllc01vZHVsZSc7XG4iXX0=