"use strict";

var _interopRequireWildcard = require("@babel/runtime/helpers/interopRequireWildcard");

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = exports.MAX_TIMEOUT = void 0;

var _regenerator = _interopRequireDefault(require("@babel/runtime/regenerator"));

var _asyncToGenerator2 = _interopRequireDefault(require("@babel/runtime/helpers/asyncToGenerator"));

var _classCallCheck2 = _interopRequireDefault(require("@babel/runtime/helpers/classCallCheck"));

var _createClass2 = _interopRequireDefault(require("@babel/runtime/helpers/createClass"));

var _possibleConstructorReturn2 = _interopRequireDefault(require("@babel/runtime/helpers/possibleConstructorReturn"));

var _getPrototypeOf2 = _interopRequireDefault(require("@babel/runtime/helpers/getPrototypeOf"));

var _assertThisInitialized2 = _interopRequireDefault(require("@babel/runtime/helpers/assertThisInitialized"));

var _inherits2 = _interopRequireDefault(require("@babel/runtime/helpers/inherits"));

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

var TONQueriesModule = /*#__PURE__*/function (_TONModule) {
  (0, _inherits2["default"])(TONQueriesModule, _TONModule);

  function TONQueriesModule(context) {
    var _this;

    (0, _classCallCheck2["default"])(this, TONQueriesModule);
    _this = (0, _possibleConstructorReturn2["default"])(this, (0, _getPrototypeOf2["default"])(TONQueriesModule).call(this, context));
    (0, _defineProperty2["default"])((0, _assertThisInitialized2["default"])(_this), "config", void 0);
    (0, _defineProperty2["default"])((0, _assertThisInitialized2["default"])(_this), "overrideWsUrl", void 0);
    (0, _defineProperty2["default"])((0, _assertThisInitialized2["default"])(_this), "transactions", void 0);
    (0, _defineProperty2["default"])((0, _assertThisInitialized2["default"])(_this), "messages", void 0);
    (0, _defineProperty2["default"])((0, _assertThisInitialized2["default"])(_this), "blocks", void 0);
    (0, _defineProperty2["default"])((0, _assertThisInitialized2["default"])(_this), "accounts", void 0);
    (0, _defineProperty2["default"])((0, _assertThisInitialized2["default"])(_this), "graphqlClient", void 0);
    _this.graphqlClient = null;
    _this.overrideWsUrl = null;
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
                this.transactions = new TONQueriesModuleCollection(this, 'transactions');
                this.messages = new TONQueriesModuleCollection(this, 'messages');
                this.blocks = new TONQueriesModuleCollection(this, 'blocks');
                this.accounts = new TONQueriesModuleCollection(this, 'accounts');

              case 5:
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

                if (!(response.redirected === true)) {
                  _context2.next = 5;
                  break;
                }

                return _context2.abrupt("return", response.url);

              case 5:
                if (!(response.redirected === false)) {
                  _context2.next = 7;
                  break;
                }

                return _context2.abrupt("return", '');

              case 7:
                sourceLocation = _TONConfigModule.URLParts.parse(sourceUrl).fixQuery(function (_) {
                  return '';
                }).toString().toLowerCase();
                responseLocation = _TONConfigModule.URLParts.parse(response.url).fixQuery(function (_) {
                  return '';
                }).toString().toLowerCase();
                return _context2.abrupt("return", responseLocation !== sourceLocation ? response.url : '');

              case 10:
              case "end":
                return _context2.stop();
            }
          }
        }, _callee2);
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
                _context3.prev = 11;
                clientConfig = getConfigForServer(server);
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
                _context3.t0 = _context3["catch"](11);
                console.log("[getClientConfig] for server \"".concat(server, "\" failed"), _context3.t0);

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
        }, _callee3, this, [[7, 27, 30, 33], [11, 20]]);
      }));

      function getClientConfig() {
        return _getClientConfig.apply(this, arguments);
      }

      return getClientConfig;
    }()
  }, {
    key: "getAccountsCount",
    value: function () {
      var _getAccountsCount = (0, _asyncToGenerator2["default"])( /*#__PURE__*/_regenerator["default"].mark(function _callee4(parentSpan) {
        var result;
        return _regenerator["default"].wrap(function _callee4$(_context4) {
          while (1) {
            switch (_context4.prev = _context4.next) {
              case 0:
                _context4.next = 2;
                return this.query('query{getAccountsCount}', undefined, parentSpan);

              case 2:
                result = _context4.sent;
                return _context4.abrupt("return", result.data.getAccountsCount);

              case 4:
              case "end":
                return _context4.stop();
            }
          }
        }, _callee4, this);
      }));

      function getAccountsCount(_x3) {
        return _getAccountsCount.apply(this, arguments);
      }

      return getAccountsCount;
    }()
  }, {
    key: "getTransactionsCount",
    value: function () {
      var _getTransactionsCount = (0, _asyncToGenerator2["default"])( /*#__PURE__*/_regenerator["default"].mark(function _callee5(parentSpan) {
        var result;
        return _regenerator["default"].wrap(function _callee5$(_context5) {
          while (1) {
            switch (_context5.prev = _context5.next) {
              case 0:
                _context5.next = 2;
                return this.query('query{getTransactionsCount}', undefined, parentSpan);

              case 2:
                result = _context5.sent;
                return _context5.abrupt("return", result.data.getTransactionsCount);

              case 4:
              case "end":
                return _context5.stop();
            }
          }
        }, _callee5, this);
      }));

      function getTransactionsCount(_x4) {
        return _getTransactionsCount.apply(this, arguments);
      }

      return getTransactionsCount;
    }()
  }, {
    key: "getAccountsTotalBalance",
    value: function () {
      var _getAccountsTotalBalance = (0, _asyncToGenerator2["default"])( /*#__PURE__*/_regenerator["default"].mark(function _callee6(parentSpan) {
        var result;
        return _regenerator["default"].wrap(function _callee6$(_context6) {
          while (1) {
            switch (_context6.prev = _context6.next) {
              case 0:
                _context6.next = 2;
                return this.query('query{getAccountsTotalBalance}', undefined, parentSpan);

              case 2:
                result = _context6.sent;
                return _context6.abrupt("return", result.data.getAccountsTotalBalance);

              case 4:
              case "end":
                return _context6.stop();
            }
          }
        }, _callee6, this);
      }));

      function getAccountsTotalBalance(_x5) {
        return _getAccountsTotalBalance.apply(this, arguments);
      }

      return getAccountsTotalBalance;
    }()
  }, {
    key: "postRequests",
    value: function () {
      var _postRequests = (0, _asyncToGenerator2["default"])( /*#__PURE__*/_regenerator["default"].mark(function _callee8(requests, parentSpan) {
        var _this2 = this;

        return _regenerator["default"].wrap(function _callee8$(_context8) {
          while (1) {
            switch (_context8.prev = _context8.next) {
              case 0:
                return _context8.abrupt("return", this.context.trace('queries.postRequests', /*#__PURE__*/function () {
                  var _ref = (0, _asyncToGenerator2["default"])( /*#__PURE__*/_regenerator["default"].mark(function _callee7(span) {
                    return _regenerator["default"].wrap(function _callee7$(_context7) {
                      while (1) {
                        switch (_context7.prev = _context7.next) {
                          case 0:
                            return _context7.abrupt("return", _this2.graphqlMutation("mutation postRequests($requests: [Request]) {\n                postRequests(requests: $requests)\n            }", {
                              requests: requests
                            }, span));

                          case 1:
                          case "end":
                            return _context7.stop();
                        }
                      }
                    }, _callee7);
                  }));

                  return function (_x8) {
                    return _ref.apply(this, arguments);
                  };
                }(), parentSpan));

              case 1:
              case "end":
                return _context8.stop();
            }
          }
        }, _callee8, this);
      }));

      function postRequests(_x6, _x7) {
        return _postRequests.apply(this, arguments);
      }

      return postRequests;
    }()
  }, {
    key: "mutation",
    value: function () {
      var _mutation = (0, _asyncToGenerator2["default"])( /*#__PURE__*/_regenerator["default"].mark(function _callee10(ql) {
        var _this3 = this;

        var variables,
            parentSpan,
            _args10 = arguments;
        return _regenerator["default"].wrap(function _callee10$(_context10) {
          while (1) {
            switch (_context10.prev = _context10.next) {
              case 0:
                variables = _args10.length > 1 && _args10[1] !== undefined ? _args10[1] : {};
                parentSpan = _args10.length > 2 ? _args10[2] : undefined;
                return _context10.abrupt("return", this.context.trace('queries.mutation', /*#__PURE__*/function () {
                  var _ref2 = (0, _asyncToGenerator2["default"])( /*#__PURE__*/_regenerator["default"].mark(function _callee9(span) {
                    return _regenerator["default"].wrap(function _callee9$(_context9) {
                      while (1) {
                        switch (_context9.prev = _context9.next) {
                          case 0:
                            span.setTag('params', {
                              mutation: ql,
                              variables: variables
                            });
                            return _context9.abrupt("return", _this3.graphqlMutation(ql, variables, span));

                          case 2:
                          case "end":
                            return _context9.stop();
                        }
                      }
                    }, _callee9);
                  }));

                  return function (_x10) {
                    return _ref2.apply(this, arguments);
                  };
                }(), parentSpan));

              case 3:
              case "end":
                return _context10.stop();
            }
          }
        }, _callee10, this);
      }));

      function mutation(_x9) {
        return _mutation.apply(this, arguments);
      }

      return mutation;
    }()
  }, {
    key: "query",
    value: function () {
      var _query = (0, _asyncToGenerator2["default"])( /*#__PURE__*/_regenerator["default"].mark(function _callee12(ql) {
        var _this4 = this;

        var variables,
            parentSpan,
            _args12 = arguments;
        return _regenerator["default"].wrap(function _callee12$(_context12) {
          while (1) {
            switch (_context12.prev = _context12.next) {
              case 0:
                variables = _args12.length > 1 && _args12[1] !== undefined ? _args12[1] : {};
                parentSpan = _args12.length > 2 ? _args12[2] : undefined;
                return _context12.abrupt("return", this.context.trace('queries.query', /*#__PURE__*/function () {
                  var _ref3 = (0, _asyncToGenerator2["default"])( /*#__PURE__*/_regenerator["default"].mark(function _callee11(span) {
                    return _regenerator["default"].wrap(function _callee11$(_context11) {
                      while (1) {
                        switch (_context11.prev = _context11.next) {
                          case 0:
                            span.setTag('params', {
                              query: ql,
                              variables: variables
                            });
                            return _context11.abrupt("return", _this4.graphqlQuery(ql, variables, span));

                          case 2:
                          case "end":
                            return _context11.stop();
                        }
                      }
                    }, _callee11);
                  }));

                  return function (_x12) {
                    return _ref3.apply(this, arguments);
                  };
                }(), parentSpan));

              case 3:
              case "end":
                return _context12.stop();
            }
          }
        }, _callee12, this);
      }));

      function query(_x11) {
        return _query.apply(this, arguments);
      }

      return query;
    }()
  }, {
    key: "graphqlMutation",
    value: function () {
      var _graphqlMutation = (0, _asyncToGenerator2["default"])( /*#__PURE__*/_regenerator["default"].mark(function _callee13(ql) {
        var variables,
            span,
            mutation,
            _args13 = arguments;
        return _regenerator["default"].wrap(function _callee13$(_context13) {
          while (1) {
            switch (_context13.prev = _context13.next) {
              case 0:
                variables = _args13.length > 1 && _args13[1] !== undefined ? _args13[1] : {};
                span = _args13.length > 2 ? _args13[2] : undefined;
                mutation = (0, _graphqlTag["default"])([ql]);
                return _context13.abrupt("return", this.graphQl(function (client) {
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
                return _context13.stop();
            }
          }
        }, _callee13, this);
      }));

      function graphqlMutation(_x13) {
        return _graphqlMutation.apply(this, arguments);
      }

      return graphqlMutation;
    }()
  }, {
    key: "graphqlQuery",
    value: function () {
      var _graphqlQuery = (0, _asyncToGenerator2["default"])( /*#__PURE__*/_regenerator["default"].mark(function _callee14(ql) {
        var variables,
            span,
            query,
            _args14 = arguments;
        return _regenerator["default"].wrap(function _callee14$(_context14) {
          while (1) {
            switch (_context14.prev = _context14.next) {
              case 0:
                variables = _args14.length > 1 && _args14[1] !== undefined ? _args14[1] : {};
                span = _args14.length > 2 ? _args14[2] : undefined;
                query = (0, _graphqlTag["default"])([ql]);
                return _context14.abrupt("return", this.graphQl(function (client) {
                  return client.query({
                    query: query,
                    variables: variables,
                    context: {
                      traceSpan: span
                    }
                  });
                }, span));

              case 4:
              case "end":
                return _context14.stop();
            }
          }
        }, _callee14, this);
      }));

      function graphqlQuery(_x14) {
        return _graphqlQuery.apply(this, arguments);
      }

      return graphqlQuery;
    }()
  }, {
    key: "graphQl",
    value: function () {
      var _graphQl = (0, _asyncToGenerator2["default"])( /*#__PURE__*/_regenerator["default"].mark(function _callee15(request, span) {
        var client, gqlErr, clientErr, gqlExc, errors;
        return _regenerator["default"].wrap(function _callee15$(_context15) {
          while (1) {
            switch (_context15.prev = _context15.next) {
              case 0:
                _context15.next = 2;
                return this.graphqlClientRequired(span);

              case 2:
                client = _context15.sent;
                _context15.prev = 3;
                _context15.next = 6;
                return request(client);

              case 6:
                return _context15.abrupt("return", _context15.sent);

              case 9:
                _context15.prev = 9;
                _context15.t0 = _context15["catch"](3);
                gqlErr = _context15.t0.graphQLErrors && _context15.t0.graphQLErrors[0];

                if (!gqlErr) {
                  _context15.next = 19;
                  break;
                }

                clientErr = new Error(gqlErr.message);
                gqlExc = gqlErr.extensions && gqlErr.extensions.exception || {};
                clientErr.number = gqlExc.code || 0;
                clientErr.code = gqlExc.code || 0;
                clientErr.source = gqlExc.source || 'client';
                throw clientErr;

              case 19:
                errors = _context15.t0 && _context15.t0.networkError && _context15.t0.networkError.result && _context15.t0.networkError.result.errors;

                if (!errors) {
                  _context15.next = 24;
                  break;
                }

                throw _TONClient.TONClientError.queryFailed(errors);

              case 24:
                throw _context15.t0;

              case 25:
              case "end":
                return _context15.stop();
            }
          }
        }, _callee15, this, [[3, 9]]);
      }));

      function graphQl(_x15, _x16) {
        return _graphQl.apply(this, arguments);
      }

      return graphQl;
    }()
  }, {
    key: "graphqlClientRequired",
    value: function () {
      var _graphqlClientRequired = (0, _asyncToGenerator2["default"])( /*#__PURE__*/_regenerator["default"].mark(function _callee17(parentSpan) {
        var _this5 = this;

        return _regenerator["default"].wrap(function _callee17$(_context17) {
          while (1) {
            switch (_context17.prev = _context17.next) {
              case 0:
                if (!this.graphqlClient) {
                  _context17.next = 2;
                  break;
                }

                return _context17.abrupt("return", this.graphqlClient);

              case 2:
                _context17.next = 4;
                return this.context.trace('setup client', /*#__PURE__*/function () {
                  var _ref4 = (0, _asyncToGenerator2["default"])( /*#__PURE__*/_regenerator["default"].mark(function _callee16(span) {
                    return _regenerator["default"].wrap(function _callee16$(_context16) {
                      while (1) {
                        switch (_context16.prev = _context16.next) {
                          case 0:
                            return _context16.abrupt("return", _this5.createGraphqlClient(span));

                          case 1:
                          case "end":
                            return _context16.stop();
                        }
                      }
                    }, _callee16);
                  }));

                  return function (_x18) {
                    return _ref4.apply(this, arguments);
                  };
                }(), parentSpan);

              case 4:
                return _context17.abrupt("return", this.graphqlClient);

              case 5:
              case "end":
                return _context17.stop();
            }
          }
        }, _callee17, this);
      }));

      function graphqlClientRequired(_x17) {
        return _graphqlClientRequired.apply(this, arguments);
      }

      return graphqlClientRequired;
    }()
  }, {
    key: "createGraphqlClient",
    value: function () {
      var _createGraphqlClient = (0, _asyncToGenerator2["default"])( /*#__PURE__*/_regenerator["default"].mark(function _callee19(span) {
        var _this6 = this;

        var useHttp, clientConfig, wsLink, httpLink, subsOptions, subscriptionClient, detectingRedirection, tracerLink, wrapLink, isSubscription, link;
        return _regenerator["default"].wrap(function _callee19$(_context19) {
          while (1) {
            switch (_context19.prev = _context19.next) {
              case 0:
                useHttp = !this.config.data.useWebSocketForQueries;
                _context19.next = 3;
                return this.getClientConfig();

              case 3:
                clientConfig = _context19.sent;
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

                  (0, _asyncToGenerator2["default"])( /*#__PURE__*/_regenerator["default"].mark(function _callee18() {
                    var newConfig, configIsChanged;
                    return _regenerator["default"].wrap(function _callee18$(_context18) {
                      while (1) {
                        switch (_context18.prev = _context18.next) {
                          case 0:
                            detectingRedirection = true;
                            _context18.prev = 1;
                            _context18.next = 4;
                            return _this6.getClientConfig();

                          case 4:
                            newConfig = _context18.sent;
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

                            _context18.next = 12;
                            break;

                          case 9:
                            _context18.prev = 9;
                            _context18.t0 = _context18["catch"](1);
                            console.log('[TONClient.queries] redirection detector failed', _context18.t0);

                          case 12:
                            detectingRedirection = false;

                          case 13:
                          case "end":
                            return _context18.stop();
                        }
                      }
                    }, _callee18, null, [[1, 9]]);
                  }))();
                });

                subscriptionClient.maxConnectTimeGenerator.duration = function () {
                  return subscriptionClient.maxConnectTimeGenerator.max;
                };

                _context19.next = 14;
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
                tracerLink = _context19.sent;

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
                return _context19.stop();
            }
          }
        }, _callee19, this);
      }));

      function createGraphqlClient(_x19) {
        return _createGraphqlClient.apply(this, arguments);
      }

      return createGraphqlClient;
    }()
  }, {
    key: "close",
    value: function () {
      var _close = (0, _asyncToGenerator2["default"])( /*#__PURE__*/_regenerator["default"].mark(function _callee20() {
        var client;
        return _regenerator["default"].wrap(function _callee20$(_context20) {
          while (1) {
            switch (_context20.prev = _context20.next) {
              case 0:
                if (!this.graphqlClient) {
                  _context20.next = 6;
                  break;
                }

                client = this.graphqlClient;
                this.graphqlClient = null;
                client.stop();
                _context20.next = 6;
                return client.clearStore();

              case 6:
              case "end":
                return _context20.stop();
            }
          }
        }, _callee20, this);
      }));

      function close() {
        return _close.apply(this, arguments);
      }

      return close;
    }()
  }]);
  return TONQueriesModule;
}(_TONModule2.TONModule);

exports["default"] = TONQueriesModule;

var TONQueriesModuleCollection = /*#__PURE__*/function () {
  function TONQueriesModuleCollection(module, collectionName) {
    (0, _classCallCheck2["default"])(this, TONQueriesModuleCollection);
    (0, _defineProperty2["default"])(this, "module", void 0);
    (0, _defineProperty2["default"])(this, "collectionName", void 0);
    (0, _defineProperty2["default"])(this, "typeName", void 0);
    this.module = module;
    this.collectionName = collectionName;
    this.typeName = "".concat(collectionName[0].toUpperCase()).concat(collectionName.slice(1, -1));
  }

  (0, _createClass2["default"])(TONQueriesModuleCollection, [{
    key: "query",
    value: function () {
      var _query2 = (0, _asyncToGenerator2["default"])( /*#__PURE__*/_regenerator["default"].mark(function _callee22() {
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
            parentSpan,
            _args22 = arguments;

        return _regenerator["default"].wrap(function _callee22$(_context22) {
          while (1) {
            switch (_context22.prev = _context22.next) {
              case 0:
                for (_len = _args22.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
                  args[_key] = _args22[_key];
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
                }), filter = _resolveParams.filter, result = _resolveParams.result, orderBy = _resolveParams.orderBy, limit = _resolveParams.limit, timeout = _resolveParams.timeout, parentSpan = _resolveParams.parentSpan;
                return _context22.abrupt("return", this.module.context.trace("".concat(this.collectionName, ".query"), /*#__PURE__*/function () {
                  var _ref7 = (0, _asyncToGenerator2["default"])( /*#__PURE__*/_regenerator["default"].mark(function _callee21(span) {
                    var c, t, ql, variables;
                    return _regenerator["default"].wrap(function _callee21$(_context21) {
                      while (1) {
                        switch (_context21.prev = _context21.next) {
                          case 0:
                            span.setTag('params', {
                              filter: filter,
                              result: result,
                              orderBy: orderBy,
                              limit: limit,
                              timeout: timeout
                            });
                            c = _this7.collectionName;
                            t = _this7.typeName;
                            ql = "query ".concat(c, "($filter: ").concat(t, "Filter, $orderBy: [QueryOrderBy], $limit: Int, $timeout: Float) {\n                ").concat(c, "(filter: $filter, orderBy: $orderBy, limit: $limit, timeout: $timeout) { ").concat(result, " }\n            }");
                            variables = {
                              filter: filter,
                              orderBy: orderBy,
                              limit: limit
                            };

                            if (timeout) {
                              variables.timeout = Math.min(MAX_TIMEOUT, timeout);
                            }

                            _context21.next = 8;
                            return _this7.module.graphqlQuery(ql, variables, span);

                          case 8:
                            _context21.t0 = c;
                            return _context21.abrupt("return", _context21.sent.data[_context21.t0]);

                          case 10:
                          case "end":
                            return _context21.stop();
                        }
                      }
                    }, _callee21);
                  }));

                  return function (_x20) {
                    return _ref7.apply(this, arguments);
                  };
                }(), parentSpan));

              case 3:
              case "end":
                return _context22.stop();
            }
          }
        }, _callee22, this);
      }));

      function query() {
        return _query2.apply(this, arguments);
      }

      return query;
    }()
  }, {
    key: "subscribe",
    value: function subscribe() {
      var _this8 = this;

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
      (0, _asyncToGenerator2["default"])( /*#__PURE__*/_regenerator["default"].mark(function _callee23() {
        var client, observable;
        return _regenerator["default"].wrap(function _callee23$(_context23) {
          while (1) {
            switch (_context23.prev = _context23.next) {
              case 0:
                _context23.prev = 0;
                _context23.next = 3;
                return _this8.module.graphqlClientRequired(span);

              case 3:
                client = _context23.sent;
                observable = client.subscribe({
                  query: query,
                  variables: {
                    filter: filter
                  }
                });
                subscription = observable.subscribe(function (message) {
                  onDocEvent('insert/update', message.data[_this8.collectionName]);
                });
                _context23.next = 12;
                break;

              case 8:
                _context23.prev = 8;
                _context23.t0 = _context23["catch"](0);
                span.log({
                  event: 'failed',
                  payload: _context23.t0
                });

                if (onError) {
                  onError(_context23.t0);
                } else {
                  console.log('TON Client subscription error', _context23.t0);
                }

              case 12:
              case "end":
                return _context23.stop();
            }
          }
        }, _callee23, null, [[0, 8]]);
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
      var _waitFor = (0, _asyncToGenerator2["default"])( /*#__PURE__*/_regenerator["default"].mark(function _callee24() {
        var _len3,
            args,
            _key3,
            _resolveParams3,
            filter,
            result,
            paramsTimeout,
            parentSpan,
            timeout,
            docs,
            _args24 = arguments;

        return _regenerator["default"].wrap(function _callee24$(_context24) {
          while (1) {
            switch (_context24.prev = _context24.next) {
              case 0:
                for (_len3 = _args24.length, args = new Array(_len3), _key3 = 0; _key3 < _len3; _key3++) {
                  args[_key3] = _args24[_key3];
                }

                _resolveParams3 = resolveParams(args, 'filter', function () {
                  return {
                    filter: args[0],
                    result: args[1],
                    timeout: args[2],
                    parentSpan: args[3]
                  };
                }), filter = _resolveParams3.filter, result = _resolveParams3.result, paramsTimeout = _resolveParams3.timeout, parentSpan = _resolveParams3.parentSpan;
                timeout = paramsTimeout || this.module.config.waitForTimeout();
                _context24.next = 5;
                return this.query({
                  filter: filter,
                  result: result,
                  timeout: timeout,
                  parentSpan: parentSpan
                });

              case 5:
                docs = _context24.sent;

                if (!(docs.length > 0)) {
                  _context24.next = 8;
                  break;
                }

                return _context24.abrupt("return", docs[0]);

              case 8:
                throw _TONClient.TONClientError.waitForTimeout();

              case 9:
              case "end":
                return _context24.stop();
            }
          }
        }, _callee24, this);
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy9tb2R1bGVzL1RPTlF1ZXJpZXNNb2R1bGUuanMiXSwibmFtZXMiOlsiTUFYX1RJTUVPVVQiLCJyZXNvbHZlUGFyYW1zIiwiYXJncyIsInJlcXVpcmVkUGFyYW1OYW1lIiwicmVzb2x2ZUFyZ3MiLCJsZW5ndGgiLCJUT05RdWVyaWVzTW9kdWxlIiwiY29udGV4dCIsImdyYXBocWxDbGllbnQiLCJvdmVycmlkZVdzVXJsIiwiY29uZmlnIiwiZ2V0TW9kdWxlIiwiVE9OQ29uZmlnTW9kdWxlIiwidHJhbnNhY3Rpb25zIiwiVE9OUXVlcmllc01vZHVsZUNvbGxlY3Rpb24iLCJtZXNzYWdlcyIsImJsb2NrcyIsImFjY291bnRzIiwiZmV0Y2giLCJzb3VyY2VVcmwiLCJyZXNwb25zZSIsInJlZGlyZWN0ZWQiLCJ1cmwiLCJzb3VyY2VMb2NhdGlvbiIsIlVSTFBhcnRzIiwicGFyc2UiLCJmaXhRdWVyeSIsIl8iLCJ0b1N0cmluZyIsInRvTG93ZXJDYXNlIiwicmVzcG9uc2VMb2NhdGlvbiIsImdldENvbmZpZ0ZvclNlcnZlciIsInNlcnZlciIsImh0dHBQYXJ0cyIsImZpeFByb3RvY29sIiwieCIsImZpeFBhdGgiLCJodHRwIiwid3MiLCJodHRwVXJsIiwid3NVcmwiLCJjbGllbnRQbGF0Zm9ybSIsIldlYlNvY2tldCIsIlRPTkNsaWVudCIsIkVycm9yIiwiZGF0YSIsInNlcnZlcnMiLCJjbGllbnRDb25maWciLCJkZXRlY3RSZWRpcmVjdCIsImNvbnNvbGUiLCJsb2ciLCJwYXJlbnRTcGFuIiwicXVlcnkiLCJ1bmRlZmluZWQiLCJyZXN1bHQiLCJnZXRBY2NvdW50c0NvdW50IiwiZ2V0VHJhbnNhY3Rpb25zQ291bnQiLCJnZXRBY2NvdW50c1RvdGFsQmFsYW5jZSIsInJlcXVlc3RzIiwidHJhY2UiLCJzcGFuIiwiZ3JhcGhxbE11dGF0aW9uIiwicWwiLCJ2YXJpYWJsZXMiLCJzZXRUYWciLCJtdXRhdGlvbiIsImdyYXBocWxRdWVyeSIsImdyYXBoUWwiLCJjbGllbnQiLCJtdXRhdGUiLCJ0cmFjZVNwYW4iLCJyZXF1ZXN0IiwiZ3JhcGhxbENsaWVudFJlcXVpcmVkIiwiZ3FsRXJyIiwiZ3JhcGhRTEVycm9ycyIsImNsaWVudEVyciIsIm1lc3NhZ2UiLCJncWxFeGMiLCJleHRlbnNpb25zIiwiZXhjZXB0aW9uIiwibnVtYmVyIiwiY29kZSIsInNvdXJjZSIsImVycm9ycyIsIm5ldHdvcmtFcnJvciIsIlRPTkNsaWVudEVycm9yIiwicXVlcnlGYWlsZWQiLCJjcmVhdGVHcmFwaHFsQ2xpZW50IiwidXNlSHR0cCIsInVzZVdlYlNvY2tldEZvclF1ZXJpZXMiLCJnZXRDbGllbnRDb25maWciLCJ3c0xpbmsiLCJodHRwTGluayIsInN1YnNPcHRpb25zIiwidHJhY2VyIiwiaW5qZWN0IiwiRk9STUFUX1RFWFRfTUFQIiwic3Vic2NyaXB0aW9uQ2xpZW50IiwiU3Vic2NyaXB0aW9uQ2xpZW50IiwicmVjb25uZWN0IiwiY29ubmVjdGlvblBhcmFtcyIsImFjY2Vzc0tleSIsImhlYWRlcnMiLCJvblJlY29ubmVjdGVkIiwiZGV0ZWN0aW5nUmVkaXJlY3Rpb24iLCJvbkVycm9yIiwibmV3Q29uZmlnIiwiY29uZmlnSXNDaGFuZ2VkIiwidXJpIiwibWF4Q29ubmVjdFRpbWVHZW5lcmF0b3IiLCJkdXJhdGlvbiIsIm1heCIsInJlcSIsInJlc29sdmVkU3BhbiIsInRyYWNlckxpbmsiLCJ3cmFwTGluayIsImxpbmsiLCJjb25jYXQiLCJpc1N1YnNjcmlwdGlvbiIsImRlZmluaXRpb24iLCJraW5kIiwib3BlcmF0aW9uIiwiV2ViU29ja2V0TGluayIsIkh0dHBMaW5rIiwiQXBvbGxvQ2xpZW50IiwiY2FjaGUiLCJJbk1lbW9yeUNhY2hlIiwiZGVmYXVsdE9wdGlvbnMiLCJ3YXRjaFF1ZXJ5IiwiZmV0Y2hQb2xpY3kiLCJzdG9wIiwiY2xlYXJTdG9yZSIsIlRPTk1vZHVsZSIsIm1vZHVsZSIsImNvbGxlY3Rpb25OYW1lIiwidHlwZU5hbWUiLCJ0b1VwcGVyQ2FzZSIsInNsaWNlIiwiZmlsdGVyIiwib3JkZXJCeSIsImxpbWl0IiwidGltZW91dCIsImMiLCJ0IiwiTWF0aCIsIm1pbiIsIm9uRG9jRXZlbnQiLCJzdGFydFNwYW4iLCJUYWdzIiwiU1BBTl9LSU5EIiwidGV4dCIsInN1YnNjcmlwdGlvbiIsIm9ic2VydmFibGUiLCJzdWJzY3JpYmUiLCJldmVudCIsInBheWxvYWQiLCJ1bnN1YnNjcmliZSIsImZpbmlzaCIsInBhcmFtc1RpbWVvdXQiLCJ3YWl0Rm9yVGltZW91dCIsImRvY3MiLCJtb2R1bGVOYW1lIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQWtCQTs7QUFDQTs7QUFDQTs7QUFDQTs7QUFDQTs7QUFDQTs7QUFDQTs7QUFDQTs7QUFDQTs7QUFDQTs7QUFXQTs7QUFFQTs7QUFDQTs7Ozs7Ozs7QUFRTyxJQUFNQSxXQUFXLEdBQUcsVUFBcEI7OztBQUVQLFNBQVNDLGFBQVQsQ0FBMEJDLElBQTFCLEVBQXVDQyxpQkFBdkMsRUFBa0VDLFdBQWxFLEVBQTJGO0FBQ3ZGLFNBQVFGLElBQUksQ0FBQ0csTUFBTCxLQUFnQixDQUFqQixJQUF3QkYsaUJBQWlCLElBQUlELElBQUksQ0FBQyxDQUFELENBQWpELEdBQXdEQSxJQUFJLENBQUMsQ0FBRCxDQUE1RCxHQUFrRUUsV0FBVyxFQUFwRjtBQUNIOztJQUVvQkUsZ0I7OztBQUtqQiw0QkFBWUMsT0FBWixFQUF1QztBQUFBOztBQUFBO0FBQ25DLDRIQUFNQSxPQUFOO0FBRG1DO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBRW5DLFVBQUtDLGFBQUwsR0FBcUIsSUFBckI7QUFDQSxVQUFLQyxhQUFMLEdBQXFCLElBQXJCO0FBSG1DO0FBSXRDOzs7Ozs7Ozs7O0FBR0cscUJBQUtDLE1BQUwsR0FBYyxLQUFLSCxPQUFMLENBQWFJLFNBQWIsQ0FBdUJDLDJCQUF2QixDQUFkO0FBQ0EscUJBQUtDLFlBQUwsR0FBb0IsSUFBSUMsMEJBQUosQ0FBK0IsSUFBL0IsRUFBcUMsY0FB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YUFBYSxJQUFJLEtBQUt6QixNQUFMLENBQVkzSCxNQUFaLENBQW1CcUosY0FBbkIsRTs7dUJBQ2QsS0FBSzNHLEtBQUwsQ0FBVztBQUMxQnNGLGtCQUFBQSxNQUFNLEVBQU5BLE1BRDBCO0FBRTFCcEYsa0JBQUFBLE1BQU0sRUFBTkEsTUFGMEI7QUFHMUJ1RixrQkFBQUEsT0FBTyxFQUFQQSxPQUgwQjtBQUkxQjFGLGtCQUFBQSxVQUFVLEVBQVZBO0FBSjBCLGlCQUFYLEM7OztBQUFiNkcsZ0JBQUFBLEk7O3NCQU1GQSxJQUFJLENBQUMzSixNQUFMLEdBQWMsQzs7Ozs7bURBQ1AySixJQUFJLENBQUMsQ0FBRCxDOzs7c0JBRVQzRSwwQkFBZTBFLGNBQWYsRTs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFJZHpKLGdCQUFnQixDQUFDMkosVUFBakIsR0FBOEIsa0JBQTlCIiwic291cmNlc0NvbnRlbnQiOlsiLypcbiAqIENvcHlyaWdodCAyMDE4LTIwMjAgVE9OIERFViBTT0xVVElPTlMgTFRELlxuICpcbiAqIExpY2Vuc2VkIHVuZGVyIHRoZSBTT0ZUV0FSRSBFVkFMVUFUSU9OIExpY2Vuc2UgKHRoZSBcIkxpY2Vuc2VcIik7IHlvdSBtYXkgbm90IHVzZVxuICogdGhpcyBmaWxlIGV4Y2VwdCBpbiBjb21wbGlhbmNlIHdpdGggdGhlIExpY2Vuc2UuICBZb3UgbWF5IG9idGFpbiBhIGNvcHkgb2YgdGhlXG4gKiBMaWNlbnNlIGF0OlxuICpcbiAqIGh0dHA6Ly93d3cudG9uLmRldi9saWNlbnNlc1xuICpcbiAqIFVubGVzcyByZXF1aXJlZCBieSBhcHBsaWNhYmxlIGxhdyBvciBhZ3JlZWQgdG8gaW4gd3JpdGluZywgc29mdHdhcmVcbiAqIGRpc3RyaWJ1dGVkIHVuZGVyIHRoZSBMaWNlbnNlIGlzIGRpc3RyaWJ1dGVkIG9uIGFuIFwiQVMgSVNcIiBCQVNJUyxcbiAqIFdJVEhPVVQgV0FSUkFOVElFUyBPUiBDT05ESVRJT05TIE9GIEFOWSBLSU5ELCBlaXRoZXIgZXhwcmVzcyBvciBpbXBsaWVkLlxuICogU2VlIHRoZSBMaWNlbnNlIGZvciB0aGUgc3BlY2lmaWMgVE9OIERFViBzb2Z0d2FyZSBnb3Zlcm5pbmcgcGVybWlzc2lvbnMgYW5kXG4gKiBsaW1pdGF0aW9ucyB1bmRlciB0aGUgTGljZW5zZS5cbiAqL1xuXG4vLyBAZmxvd1xuXG5pbXBvcnQgeyBJbk1lbW9yeUNhY2hlIH0gZnJvbSAnYXBvbGxvLWNhY2hlLWlubWVtb3J5JztcbmltcG9ydCB7IEFwb2xsb0NsaWVudCB9IGZyb20gJ2Fwb2xsby1jbGllbnQnO1xuaW1wb3J0IHsgQXBvbGxvTGluaywgc3BsaXQgfSBmcm9tICdhcG9sbG8tbGluayc7XG5pbXBvcnQgeyBIdHRwTGluayB9IGZyb20gJ2Fwb2xsby1saW5rLWh0dHAnO1xuaW1wb3J0IHsgV2ViU29ja2V0TGluayB9IGZyb20gJ2Fwb2xsby1saW5rLXdzJztcbmltcG9ydCB7IGdldE1haW5EZWZpbml0aW9uIH0gZnJvbSAnYXBvbGxvLXV0aWxpdGllcyc7XG5pbXBvcnQgZ3FsIGZyb20gJ2dyYXBocWwtdGFnJztcbmltcG9ydCB7IFN1YnNjcmlwdGlvbkNsaWVudCB9IGZyb20gJ3N1YnNjcmlwdGlvbnMtdHJhbnNwb3J0LXdzJztcbmltcG9ydCB7IHNldENvbnRleHQgfSBmcm9tICdhcG9sbG8tbGluay1jb250ZXh0JztcbmltcG9ydCB7XG4gICAgRk9STUFUX1RFWFRfTUFQLCBUYWdzLCBTcGFuLCBTcGFuQ29udGV4dCxcbn0gZnJvbSAnb3BlbnRyYWNpbmcnO1xuaW1wb3J0IHR5cGUge1xuICAgIFRPTlF1ZXJpZXMsXG4gICAgVE9OUUNvbGxlY3Rpb24sXG4gICAgU3Vic2NyaXB0aW9uLFxuICAgIFRPTlF1ZXJ5UGFyYW1zLFxuICAgIFRPTlN1YnNjcmliZVBhcmFtcyxcbiAgICBUT05XYWl0Rm9yUGFyYW1zLFxufSBmcm9tICcuLi8uLi90eXBlcyc7XG5pbXBvcnQgeyBUT05DbGllbnQsIFRPTkNsaWVudEVycm9yIH0gZnJvbSAnLi4vVE9OQ2xpZW50JztcbmltcG9ydCB0eXBlIHsgVE9OTW9kdWxlQ29udGV4dCB9IGZyb20gJy4uL1RPTk1vZHVsZSc7XG5pbXBvcnQgeyBUT05Nb2R1bGUgfSBmcm9tICcuLi9UT05Nb2R1bGUnO1xuaW1wb3J0IFRPTkNvbmZpZ01vZHVsZSwgeyBVUkxQYXJ0cyB9IGZyb20gJy4vVE9OQ29uZmlnTW9kdWxlJztcblxuXG5leHBvcnQgdHlwZSBSZXF1ZXN0ID0ge1xuICAgIGlkOiBzdHJpbmcsXG4gICAgYm9keTogc3RyaW5nLFxufVxuXG5leHBvcnQgY29uc3QgTUFYX1RJTUVPVVQgPSAyMTQ3NDgzNjQ3O1xuXG5mdW5jdGlvbiByZXNvbHZlUGFyYW1zPFQ+KGFyZ3M6IGFueVtdLCByZXF1aXJlZFBhcmFtTmFtZTogc3RyaW5nLCByZXNvbHZlQXJnczogKCkgPT4gVCk6IFQge1xuICAgIHJldHVybiAoYXJncy5sZW5ndGggPT09IDEpICYmIChyZXF1aXJlZFBhcmFtTmFtZSBpbiBhcmdzWzBdKSA/IGFyZ3NbMF0gOiByZXNvbHZlQXJncygpO1xufVxuXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBUT05RdWVyaWVzTW9kdWxlIGV4dGVuZHMgVE9OTW9kdWxlIGltcGxlbWVudHMgVE9OUXVlcmllcyB7XG4gICAgY29uZmlnOiBUT05Db25maWdNb2R1bGU7XG5cbiAgICBvdmVycmlkZVdzVXJsOiA/c3RyaW5nO1xuXG4gICAgY29uc3RydWN0b3IoY29udGV4dDogVE9OTW9kdWxlQ29udGV4dCkge1xuICAgICAgICBzdXBlcihjb250ZXh0KTtcbiAgICAgICAgdGhpcy5ncmFwaHFsQ2xpZW50ID0gbnVsbDtcbiAgICAgICAgdGhpcy5vdmVycmlkZVdzVXJsID0gbnVsbDtcbiAgICB9XG5cbiAgICBhc3luYyBzZXR1cCgpIHtcbiAgICAgICAgdGhpcy5jb25maWcgPSB0aGlzLmNvbnRleHQuZ2V0TW9kdWxlKFRPTkNvbmZpZ01vZHVsZSk7XG4gICAgICAgIHRoaXMudHJhbnNhY3Rpb25zID0gbmV3IFRPTlF1ZXJpZXNNb2R1bGVDb2xsZWN0aW9uKHRoaXMsICd0cmFuc2FjdGlvbnMnKTtcbiAgICAgICAgdGhpcy5tZXNzYWdlcyA9IG5ldyBUT05RdWVyaWVzTW9kdWxlQ29sbGVjdGlvbih0aGlzLCAnbWVzc2FnZXMnKTtcbiAgICAgICAgdGhpcy5ibG9ja3MgPSBuZXcgVE9OUXVlcmllc01vZHVsZUNvbGxlY3Rpb24odGhpcywgJ2Jsb2NrcycpO1xuICAgICAgICB0aGlzLmFjY291bnRzID0gbmV3IFRPTlF1ZXJpZXNNb2R1bGVDb2xsZWN0aW9uKHRoaXMsICdhY2NvdW50cycpO1xuICAgIH1cblxuICAgIGFzeW5jIGRldGVjdFJlZGlyZWN0KGZldGNoOiBhbnksIHNvdXJjZVVybDogc3RyaW5nKTogUHJvbWlzZTxzdHJpbmc+IHtcbiAgICAgICAgY29uc3QgcmVzcG9uc2UgPSBhd2FpdCBmZXRjaChzb3VyY2VVcmwpO1xuICAgICAgICBpZiAocmVzcG9uc2UucmVkaXJlY3RlZCA9PT0gdHJ1ZSkge1xuICAgICAgICAgICAgcmV0dXJuIHJlc3BvbnNlLnVybDtcbiAgICAgICAgfVxuICAgICAgICBpZiAocmVzcG9uc2UucmVkaXJlY3RlZCA9PT0gZmFsc2UpIHtcbiAgICAgICAgICAgIHJldHVybiAnJztcbiAgICAgICAgfVxuICAgICAgICBjb25zdCBzb3VyY2VMb2NhdGlvbiA9IFVSTFBhcnRzLnBhcnNlKHNvdXJjZVVybClcbiAgICAgICAgICAgIC5maXhRdWVyeShfID0+ICcnKVxuICAgICAgICAgICAgLnRvU3RyaW5nKClcbiAgICAgICAgICAgIC50b0xvd2VyQ2FzZSgpO1xuICAgICAgICBjb25zdCByZXNwb25zZUxvY2F0aW9uID0gVVJMUGFydHMucGFyc2UocmVzcG9uc2UudXJsKVxuICAgICAgICAgICAgLmZpeFF1ZXJ5KF8gPT4gJycpXG4gICAgICAgICAgICAudG9TdHJpbmcoKVxuICAgICAgICAgICAgLnRvTG93ZXJDYXNlKCk7XG4gICAgICAgIHJldHVybiByZXNwb25zZUxvY2F0aW9uICE9PSBzb3VyY2VMb2NhdGlvbiA/IHJlc3BvbnNlLnVybCA6ICcnO1xuICAgIH1cblxuICAgIGFzeW5jIGdldENsaWVudENvbmZpZygpIHtcbiAgICAgICAgY29uc3QgY29uZmlnID0gdGhpcy5jb25maWc7XG4gICAgICAgIGNvbnN0IGNsaWVudFBsYXRmb3JtID0gVE9OQ2xpZW50LmNsaWVudFBsYXRmb3JtO1xuICAgICAgICBpZiAoIWNsaWVudFBsYXRmb3JtKSB7XG4gICAgICAgICAgICB0aHJvdyBFcnJvcignVE9OIENsaWVudCBkb2VzIG5vdCBjb25maWd1cmVkJyk7XG4gICAgICAgIH1cbiAgICAgICAgY29uc3QgZmV0Y2ggPSBjbGllbnRQbGF0Zm9ybS5mZXRjaDtcblxuICAgICAgICBmdW5jdGlvbiBnZXRDb25maWdGb3JTZXJ2ZXIoc2VydmVyOiBzdHJpbmcpIHtcbiAgICAgICAgICAgIGNvbnN0IGh0dHBQYXJ0cyA9IFVSTFBhcnRzLnBhcnNlKHNlcnZlcilcbiAgICAgICAgICAgICAgICAuZml4UHJvdG9jb2woeCA9PiB4ID09PSAnaHR0cDovLycgPyB4IDogJ2h0dHBzOi8vJylcbiAgICAgICAgICAgICAgICAuZml4UGF0aCh4ID0+IGAke3h9L2dyYXBocWxgKTtcbiAgICAgICAgICAgIGNvbnN0IGh0dHAgPSBodHRwUGFydHMudG9TdHJpbmcoKTtcbiAgICAgICAgICAgIGNvbnN0IHdzID0gaHR0cFBhcnRzXG4gICAgICAgICAgICAgICAgLmZpeFByb3RvY29sKHggPT4geCA9PT0gJ2h0dHA6Ly8nID8gJ3dzOi8vJyA6ICd3c3M6Ly8nKVxuICAgICAgICAgICAgICAgIC50b1N0cmluZygpO1xuICAgICAgICAgICAgcmV0dXJuIHtcbiAgICAgICAgICAgICAgICBodHRwVXJsOiBodHRwLFxuICAgICAgICAgICAgICAgIHdzVXJsOiB3cyxcbiAgICAgICAgICAgICAgICBmZXRjaDogY2xpZW50UGxhdGZvcm0uZmV0Y2gsXG4gICAgICAgICAgICAgICAgV2ViU29ja2V0OiBjbGllbnRQbGF0Zm9ybS5XZWJTb2NrZXQsXG4gICAgICAgICAgICB9XG4gICAgICAgIH1cblxuICAgICAgICBmb3IgKGNvbnN0IHNlcnZlciBvZiBjb25maWcuZGF0YS5zZXJ2ZXJzKSB7XG4gICAgICAgICAgICB0cnkge1xuICAgICAgICAgICAgICAgIGNvbnN0IGNsaWVudENvbmZpZyA9IGdldENvbmZpZ0ZvclNlcnZlcihzZXJ2ZXIpO1xuICAgICAgICAgICAgICAgIGNvbnN0IHJlZGlyZWN0ZWQgPSBhd2FpdCB0aGlzLmRldGVjdFJlZGlyZWN0KFxuICAgICAgICAgICAgICAgICAgICBmZXRjaCxcbiAgICAgICAgICAgICAgICAgICAgYCR7Y2xpZW50Q29uZmlnLmh0dHBVcmx9P3F1ZXJ5PSU3QmluZm8lN0J2ZXJzaW9uJTdEJTdEYCxcbiAgICAgICAgICAgICAgICApO1xuICAgICAgICAgICAgICAgIGlmIChyZWRpcmVjdGVkICE9PSAnJykge1xuICAgICAgICAgICAgICAgICAgICBjb25zdCBodHRwUGFydHMgPSBVUkxQYXJ0cy5wYXJzZShyZWRpcmVjdGVkKS5maXhRdWVyeShfID0+ICcnKTtcbiAgICAgICAgICAgICAgICAgICAgY2xpZW50Q29uZmlnLmh0dHBVcmwgPSBodHRwUGFydHMudG9TdHJpbmcoKTtcbiAgICAgICAgICAgICAgICAgICAgY2xpZW50Q29uZmlnLndzVXJsID0gaHR0cFBhcnRzXG4gICAgICAgICAgICAgICAgICAgICAgICAuZml4UHJvdG9jb2woeCA9PiB4ID09PSAnaHR0cDovLycgPyAnd3M6Ly8nIDogJ3dzczovLycpXG4gICAgICAgICAgICAgICAgICAgICAgICAudG9TdHJpbmcoKTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgcmV0dXJuIGNsaWVudENvbmZpZztcbiAgICAgICAgICAgIH0gY2F0Y2ggKGVycm9yKSB7XG4gICAgICAgICAgICAgICAgY29uc29sZS5sb2coYFtnZXRDbGllbnRDb25maWddIGZvciBzZXJ2ZXIgXCIke3NlcnZlcn1cIiBmYWlsZWRgLCBlcnJvcik7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgICAgcmV0dXJuIGdldENvbmZpZ0ZvclNlcnZlcihjb25maWcuZGF0YS5zZXJ2ZXJzWzBdKTtcbiAgICB9XG5cbiAgICBhc3luYyBnZXRBY2NvdW50c0NvdW50KHBhcmVudFNwYW4/OiAoU3BhbiB8IFNwYW5Db250ZXh0KSk6IFByb21pc2U8bnVtYmVyPiB7XG4gICAgICAgIGNvbnN0IHJlc3VsdCA9IGF3YWl0IHRoaXMucXVlcnkoJ3F1ZXJ5e2dldEFjY291bnRzQ291bnR9JywgdW5kZWZpbmVkLCBwYXJlbnRTcGFuKTtcbiAgICAgICAgcmV0dXJuIHJlc3VsdC5kYXRhLmdldEFjY291bnRzQ291bnQ7XG4gICAgfVxuXG4gICAgYXN5bmMgZ2V0VHJhbnNhY3Rpb25zQ291bnQocGFyZW50U3Bhbj86IChTcGFuIHwgU3BhbkNvbnRleHQpKTogUHJvbWlzZTxudW1iZXI+IHtcbiAgICAgICAgY29uc3QgcmVzdWx0ID0gYXdhaXQgdGhpcy5xdWVyeSgncXVlcnl7Z2V0VHJhbnNhY3Rpb25zQ291bnR9JywgdW5kZWZpbmVkLCBwYXJlbnRTcGFuKTtcbiAgICAgICAgcmV0dXJuIHJlc3VsdC5kYXRhLmdldFRyYW5zYWN0aW9uc0NvdW50O1xuICAgIH1cblxuICAgIGFzeW5jIGdldEFjY291bnRzVG90YWxCYWxhbmNlKHBhcmVudFNwYW4/OiAoU3BhbiB8IFNwYW5Db250ZXh0KSk6IFByb21pc2U8c3RyaW5nPiB7XG4gICAgICAgIGNvbnN0IHJlc3VsdCA9IGF3YWl0IHRoaXMucXVlcnkoJ3F1ZXJ5e2dldEFjY291bnRzVG90YWxCYWxhbmNlfScsIHVuZGVmaW5lZCwgcGFyZW50U3Bhbik7XG4gICAgICAgIHJldHVybiByZXN1bHQuZGF0YS5nZXRBY2NvdW50c1RvdGFsQmFsYW5jZTtcbiAgICB9XG5cbiAgICBhc3luYyBwb3N0UmVxdWVzdHMocmVxdWVzdHM6IFJlcXVlc3RbXSwgcGFyZW50U3Bhbj86IChTcGFuIHwgU3BhbkNvbnRleHQpKTogUHJvbWlzZTxhbnk+IHtcbiAgICAgICAgcmV0dXJuIHRoaXMuY29udGV4dC50cmFjZSgncXVlcmllcy5wb3N0UmVxdWVzdHMnLCBhc3luYyAoc3BhbikgPT4ge1xuICAgICAgICAgICAgcmV0dXJuIHRoaXMuZ3JhcGhxbE11dGF0aW9uKGBtdXRhdGlvbiBwb3N0UmVxdWVzdHMoJHJlcXVlc3RzOiBbUmVxdWVzdF0pIHtcbiAgICAgICAgICAgICAgICBwb3N0UmVxdWVzdHMocmVxdWVzdHM6ICRyZXF1ZXN0cylcbiAgICAgICAgICAgIH1gLCB7XG4gICAgICAgICAgICAgICAgcmVxdWVzdHMsXG4gICAgICAgICAgICB9LCBzcGFuKTtcbiAgICAgICAgfSwgcGFyZW50U3Bhbik7XG4gICAgfVxuXG4gICAgYXN5bmMgbXV0YXRpb24oXG4gICAgICAgIHFsOiBzdHJpbmcsXG4gICAgICAgIHZhcmlhYmxlczogeyBbc3RyaW5nXTogYW55IH0gPSB7fSxcbiAgICAgICAgcGFyZW50U3Bhbj86IChTcGFuIHwgU3BhbkNvbnRleHQpLFxuICAgICk6IFByb21pc2U8YW55PiB7XG4gICAgICAgIHJldHVybiB0aGlzLmNvbnRleHQudHJhY2UoJ3F1ZXJpZXMubXV0YXRpb24nLCBhc3luYyAoc3BhbjogU3BhbikgPT4ge1xuICAgICAgICAgICAgc3Bhbi5zZXRUYWcoJ3BhcmFtcycsIHtcbiAgICAgICAgICAgICAgICBtdXRhdGlvbjogcWwsXG4gICAgICAgICAgICAgICAgdmFyaWFibGVzLFxuICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICByZXR1cm4gdGhpcy5ncmFwaHFsTXV0YXRpb24ocWwsIHZhcmlhYmxlcywgc3Bhbik7XG4gICAgICAgIH0sIHBhcmVudFNwYW4pO1xuICAgIH1cblxuICAgIGFzeW5jIHF1ZXJ5KFxuICAgICAgICBxbDogc3RyaW5nLFxuICAgICAgICB2YXJpYWJsZXM6IHsgW3N0cmluZ106IGFueSB9ID0ge30sXG4gICAgICAgIHBhcmVudFNwYW4/OiAoU3BhbiB8IFNwYW5Db250ZXh0KSxcbiAgICApOiBQcm9taXNlPGFueT4ge1xuICAgICAgICByZXR1cm4gdGhpcy5jb250ZXh0LnRyYWNlKCdxdWVyaWVzLnF1ZXJ5JywgYXN5bmMgKHNwYW46IFNwYW4pID0+IHtcbiAgICAgICAgICAgIHNwYW4uc2V0VGFnKCdwYXJhbXMnLCB7XG4gICAgICAgICAgICAgICAgcXVlcnk6IHFsLFxuICAgICAgICAgICAgICAgIHZhcmlhYmxlcyxcbiAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgcmV0dXJuIHRoaXMuZ3JhcGhxbFF1ZXJ5KHFsLCB2YXJpYWJsZXMsIHNwYW4pO1xuICAgICAgICB9LCBwYXJlbnRTcGFuKTtcbiAgICB9XG5cbiAgICBhc3luYyBncmFwaHFsTXV0YXRpb24ocWw6IHN0cmluZywgdmFyaWFibGVzOiB7IFtzdHJpbmddOiBhbnkgfSA9IHt9LCBzcGFuOiBTcGFuKTogUHJvbWlzZTxhbnk+IHtcbiAgICAgICAgY29uc3QgbXV0YXRpb24gPSBncWwoW3FsXSk7XG4gICAgICAgIHJldHVybiB0aGlzLmdyYXBoUWwoKGNsaWVudCkgPT4gY2xpZW50Lm11dGF0ZSh7XG4gICAgICAgICAgICBtdXRhdGlvbixcbiAgICAgICAgICAgIHZhcmlhYmxlcyxcbiAgICAgICAgICAgIGNvbnRleHQ6IHtcbiAgICAgICAgICAgICAgICB0cmFjZVNwYW46IHNwYW4sXG4gICAgICAgICAgICB9LFxuICAgICAgICB9KSk7XG4gICAgfVxuXG4gICAgYXN5bmMgZ3JhcGhxbFF1ZXJ5KHFsOiBzdHJpbmcsIHZhcmlhYmxlczogeyBbc3RyaW5nXTogYW55IH0gPSB7fSwgc3BhbjogU3Bhbik6IFByb21pc2U8YW55PiB7XG4gICAgICAgIGNvbnN0IHF1ZXJ5ID0gZ3FsKFtxbF0pO1xuICAgICAgICByZXR1cm4gdGhpcy5ncmFwaFFsKChjbGllbnQpID0+IGNsaWVudC5xdWVyeSh7XG4gICAgICAgICAgICBxdWVyeSxcbiAgICAgICAgICAgIHZhcmlhYmxlcyxcbiAgICAgICAgICAgIGNvbnRleHQ6IHtcbiAgICAgICAgICAgICAgICB0cmFjZVNwYW46IHNwYW4sXG4gICAgICAgICAgICB9LFxuICAgICAgICB9KSwgc3Bhbik7XG4gICAgfVxuXG4gICAgYXN5bmMgZ3JhcGhRbChyZXF1ZXN0OiAoY2xpZW50OiBBcG9sbG9DbGllbnQpID0+IFByb21pc2U8YW55Piwgc3BhbjogU3Bhbik6IFByb21pc2U8YW55PiB7XG4gICAgICAgIGNvbnN0IGNsaWVudCA9IGF3YWl0IHRoaXMuZ3JhcGhxbENsaWVudFJlcXVpcmVkKHNwYW4pO1xuICAgICAgICB0cnkge1xuICAgICAgICAgICAgcmV0dXJuIGF3YWl0IHJlcXVlc3QoY2xpZW50KTtcbiAgICAgICAgfSBjYXRjaCAoZXJyb3IpIHtcbiAgICAgICAgICAgIGNvbnN0IGdxbEVyciA9IGVycm9yLmdyYXBoUUxFcnJvcnMgJiYgZXJyb3IuZ3JhcGhRTEVycm9yc1swXTtcbiAgICAgICAgICAgIGlmIChncWxFcnIpIHtcbiAgICAgICAgICAgICAgICBjb25zdCBjbGllbnRFcnIgPSBuZXcgRXJyb3IoZ3FsRXJyLm1lc3NhZ2UpO1xuICAgICAgICAgICAgICAgIGNvbnN0IGdxbEV4YyA9IChncWxFcnIuZXh0ZW5zaW9ucyAmJiBncWxFcnIuZXh0ZW5zaW9ucy5leGNlcHRpb24pIHx8IHt9O1xuICAgICAgICAgICAgICAgIChjbGllbnRFcnI6IGFueSkubnVtYmVyID0gZ3FsRXhjLmNvZGUgfHwgMDtcbiAgICAgICAgICAgICAgICAoY2xpZW50RXJyOiBhbnkpLmNvZGUgPSBncWxFeGMuY29kZSB8fCAwO1xuICAgICAgICAgICAgICAgIChjbGllbnRFcnI6IGFueSkuc291cmNlID0gZ3FsRXhjLnNvdXJjZSB8fCAnY2xpZW50JztcbiAgICAgICAgICAgICAgICB0aHJvdyBjbGllbnRFcnI7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBjb25zdCBlcnJvcnMgPSBlcnJvclxuICAgICAgICAgICAgICAgICYmIGVycm9yLm5ldHdvcmtFcnJvclxuICAgICAgICAgICAgICAgICYmIGVycm9yLm5ldHdvcmtFcnJvci5yZXN1bHRcbiAgICAgICAgICAgICAgICAmJiBlcnJvci5uZXR3b3JrRXJyb3IucmVzdWx0LmVycm9ycztcbiAgICAgICAgICAgIGlmIChlcnJvcnMpIHtcbiAgICAgICAgICAgICAgICB0aHJvdyBUT05DbGllbnRFcnJvci5xdWVyeUZhaWxlZChlcnJvcnMpO1xuICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgICB0aHJvdyBlcnJvcjtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgIH1cblxuICAgIGFzeW5jIGdyYXBocWxDbGllbnRSZXF1aXJlZChwYXJlbnRTcGFuOiBTcGFuKTogUHJvbWlzZTxBcG9sbG9DbGllbnQ+IHtcbiAgICAgICAgaWYgKHRoaXMuZ3JhcGhxbENsaWVudCkge1xuICAgICAgICAgICAgcmV0dXJuIHRoaXMuZ3JhcGhxbENsaWVudDtcbiAgICAgICAgfVxuICAgICAgICBhd2FpdCB0aGlzLmNvbnRleHQudHJhY2UoJ3NldHVwIGNsaWVudCcsIGFzeW5jIChzcGFuKSA9PiB7XG4gICAgICAgICAgICByZXR1cm4gdGhpcy5jcmVhdGVHcmFwaHFsQ2xpZW50KHNwYW4pO1xuICAgICAgICB9LCBwYXJlbnRTcGFuKTtcbiAgICAgICAgcmV0dXJuIHRoaXMuZ3JhcGhxbENsaWVudDtcbiAgICB9XG5cbiAgICBhc3luYyBjcmVhdGVHcmFwaHFsQ2xpZW50KHNwYW46IFNwYW4gfCBTcGFuQ29udGV4dCkge1xuICAgICAgICBjb25zdCB1c2VIdHRwID0gIXRoaXMuY29uZmlnLmRhdGEudXNlV2ViU29ja2V0Rm9yUXVlcmllcztcbiAgICAgICAgbGV0IGNsaWVudENvbmZpZyA9IGF3YWl0IHRoaXMuZ2V0Q2xpZW50Q29uZmlnKCk7XG4gICAgICAgIGxldCB3c0xpbms6ID9XZWJTb2NrZXRMaW5rID0gbnVsbDtcbiAgICAgICAgbGV0IGh0dHBMaW5rOiA/SHR0cExpbmsgPSBudWxsO1xuXG4gICAgICAgIGNvbnN0IHN1YnNPcHRpb25zID0gdGhpcy5jb25maWcudHJhY2VyLmluamVjdChzcGFuLCBGT1JNQVRfVEVYVF9NQVAsIHt9KTtcbiAgICAgICAgY29uc3Qgc3Vic2NyaXB0aW9uQ2xpZW50ID0gbmV3IFN1YnNjcmlwdGlvbkNsaWVudChcbiAgICAgICAgICAgIGNsaWVudENvbmZpZy53c1VybCxcbiAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICByZWNvbm5lY3Q6IHRydWUsXG4gICAgICAgICAgICAgICAgY29ubmVjdGlvblBhcmFtczogKCkgPT4gKHtcbiAgICAgICAgICAgICAgICAgICAgYWNjZXNzS2V5OiB0aGlzLmNvbmZpZy5kYXRhICYmIHRoaXMuY29uZmlnLmRhdGEuYWNjZXNzS2V5LFxuICAgICAgICAgICAgICAgICAgICBoZWFkZXJzOiBzdWJzT3B0aW9ucyxcbiAgICAgICAgICAgICAgICB9KSxcbiAgICAgICAgICAgIH0sXG4gICAgICAgICAgICBjbGllbnRDb25maWcuV2ViU29ja2V0LFxuICAgICAgICApO1xuICAgICAgICBzdWJzY3JpcHRpb25DbGllbnQub25SZWNvbm5lY3RlZCgoKSA9PiB7XG4gICAgICAgICAgICBjb25zb2xlLmxvZygnW1RPTkNsaWVudC5xdWVyaWVzXScsICdXZWJTb2NrZXQgUmVjb25uZWN0ZWQnKTtcbiAgICAgICAgfSk7XG4gICAgICAgIGxldCBkZXRlY3RpbmdSZWRpcmVjdGlvbiA9IGZhbHNlO1xuICAgICAgICBzdWJzY3JpcHRpb25DbGllbnQub25FcnJvcigoKSA9PiB7XG4gICAgICAgICAgICBjb25zb2xlLmxvZygnW1RPTkNsaWVudC5xdWVyaWVzXScsICdXZWJTb2NrZXQgRmFpbGVkJyk7XG4gICAgICAgICAgICBpZiAoZGV0ZWN0aW5nUmVkaXJlY3Rpb24pIHtcbiAgICAgICAgICAgICAgICByZXR1cm47XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICAoYXN5bmMgKCkgPT4ge1xuICAgICAgICAgICAgICAgIGRldGVjdGluZ1JlZGlyZWN0aW9uID0gdHJ1ZTtcbiAgICAgICAgICAgICAgICB0cnkge1xuICAgICAgICAgICAgICAgICAgICBjb25zdCBuZXdDb25maWcgPSBhd2FpdCB0aGlzLmdldENsaWVudENvbmZpZygpO1xuICAgICAgICAgICAgICAgICAgICBjb25zdCBjb25maWdJc0NoYW5nZWQgPSBuZXdDb25maWcuaHR0cFVybCAhPT0gY2xpZW50Q29uZmlnLmh0dHBVcmxcbiAgICAgICAgICAgICAgICAgICAgICAgIHx8IG5ld0NvbmZpZy53c1VybCAhPT0gY2xpZW50Q29uZmlnLndzVXJsO1xuICAgICAgICAgICAgICAgICAgICBpZiAoY29uZmlnSXNDaGFuZ2VkKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICBjb25zb2xlLmxvZygnW1RPTkNsaWVudC5xdWVyaWVzXScsICdDbGllbnQgY29uZmlnIGNoYW5nZWQnKTtcbiAgICAgICAgICAgICAgICAgICAgICAgIGNsaWVudENvbmZpZyA9IG5ld0NvbmZpZztcbiAgICAgICAgICAgICAgICAgICAgICAgIHN1YnNjcmlwdGlvbkNsaWVudC51cmwgPSBuZXdDb25maWcud3NVcmw7XG4gICAgICAgICAgICAgICAgICAgICAgICBpZiAod3NMaW5rKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgd3NMaW5rLnVybCA9IG5ld0NvbmZpZy53c1VybDtcbiAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICAgIGlmIChodHRwTGluaykge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGh0dHBMaW5rLnVyaSA9IG5ld0NvbmZpZy5odHRwVXJsO1xuICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgfSBjYXRjaCAoZXJyKSB7XG4gICAgICAgICAgICAgICAgICAgIGNvbnNvbGUubG9nKCdbVE9OQ2xpZW50LnF1ZXJpZXNdIHJlZGlyZWN0aW9uIGRldGVjdG9yIGZhaWxlZCcsIGVycik7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIGRldGVjdGluZ1JlZGlyZWN0aW9uID0gZmFsc2U7XG4gICAgICAgICAgICB9KSgpO1xuICAgICAgICB9KTtcbiAgICAgICAgc3Vic2NyaXB0aW9uQ2xpZW50Lm1heENvbm5lY3RUaW1lR2VuZXJhdG9yLmR1cmF0aW9uID0gKCkgPT4ge1xuICAgICAgICAgICAgcmV0dXJuIHN1YnNjcmlwdGlvbkNsaWVudC5tYXhDb25uZWN0VGltZUdlbmVyYXRvci5tYXg7XG4gICAgICAgIH07XG5cbiAgICAgICAgY29uc3QgdHJhY2VyTGluayA9IGF3YWl0IHNldENvbnRleHQoKF8sIHJlcSkgPT4ge1xuICAgICAgICAgICAgY29uc3QgcmVzb2x2ZWRTcGFuID0gKHJlcSAmJiByZXEudHJhY2VTcGFuKSB8fCBzcGFuO1xuICAgICAgICAgICAgcmVxLmhlYWRlcnMgPSB7fTtcbiAgICAgICAgICAgIHRoaXMuY29uZmlnLnRyYWNlci5pbmplY3QocmVzb2x2ZWRTcGFuLCBGT1JNQVRfVEVYVF9NQVAsIHJlcS5oZWFkZXJzKTtcbiAgICAgICAgICAgIGNvbnN0IGFjY2Vzc0tleSA9IHRoaXMuY29uZmlnLmRhdGEgJiYgdGhpcy5jb25maWcuZGF0YS5hY2Nlc3NLZXk7XG4gICAgICAgICAgICBpZiAoYWNjZXNzS2V5KSB7XG4gICAgICAgICAgICAgICAgcmVxLmhlYWRlcnMuYWNjZXNzS2V5ID0gYWNjZXNzS2V5O1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgcmV0dXJuIHtcbiAgICAgICAgICAgICAgICBoZWFkZXJzOiByZXEuaGVhZGVycyxcbiAgICAgICAgICAgIH07XG4gICAgICAgIH0pO1xuICAgICAgICBjb25zdCB3cmFwTGluayA9IChsaW5rOiBBcG9sbG9MaW5rKTogQXBvbGxvTGluayA9PiB0cmFjZXJMaW5rLmNvbmNhdChsaW5rKTtcbiAgICAgICAgY29uc3QgaXNTdWJzY3JpcHRpb24gPSAoeyBxdWVyeSB9KSA9PiB7XG4gICAgICAgICAgICBjb25zdCBkZWZpbml0aW9uID0gZ2V0TWFpbkRlZmluaXRpb24ocXVlcnkpO1xuICAgICAgICAgICAgcmV0dXJuIChcbiAgICAgICAgICAgICAgICBkZWZpbml0aW9uLmtpbmQgPT09ICdPcGVyYXRpb25EZWZpbml0aW9uJ1xuICAgICAgICAgICAgICAgICYmIGRlZmluaXRpb24ub3BlcmF0aW9uID09PSAnc3Vic2NyaXB0aW9uJ1xuICAgICAgICAgICAgKTtcbiAgICAgICAgfTtcbiAgICAgICAgd3NMaW5rID0gbmV3IFdlYlNvY2tldExpbmsoc3Vic2NyaXB0aW9uQ2xpZW50KTtcbiAgICAgICAgaHR0cExpbmsgPSB1c2VIdHRwXG4gICAgICAgICAgICA/IG5ldyBIdHRwTGluayh7XG4gICAgICAgICAgICAgICAgdXJpOiBjbGllbnRDb25maWcuaHR0cFVybCxcbiAgICAgICAgICAgICAgICBmZXRjaDogY2xpZW50Q29uZmlnLmZldGNoLFxuICAgICAgICAgICAgfSlcbiAgICAgICAgICAgIDogbnVsbDtcblxuICAgICAgICBjb25zdCBsaW5rID0gaHR0cExpbmtcbiAgICAgICAgICAgID8gc3BsaXQoaXNTdWJzY3JpcHRpb24sIHdyYXBMaW5rKHdzTGluayksIHdyYXBMaW5rKGh0dHBMaW5rKSlcbiAgICAgICAgICAgIDogd3JhcExpbmsod3NMaW5rKTtcbiAgICAgICAgdGhpcy5ncmFwaHFsQ2xpZW50ID0gbmV3IEFwb2xsb0NsaWVudCh7XG4gICAgICAgICAgICBjYWNoZTogbmV3IEluTWVtb3J5Q2FjaGUoe30pLFxuICAgICAgICAgICAgbGluayxcbiAgICAgICAgICAgIGRlZmF1bHRPcHRpb25zOiB7XG4gICAgICAgICAgICAgICAgd2F0Y2hRdWVyeToge1xuICAgICAgICAgICAgICAgICAgICBmZXRjaFBvbGljeTogJ25vLWNhY2hlJyxcbiAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgIHF1ZXJ5OiB7XG4gICAgICAgICAgICAgICAgICAgIGZldGNoUG9saWN5OiAnbm8tY2FjaGUnLFxuICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICB9LFxuICAgICAgICB9KTtcbiAgICB9XG5cbiAgICBhc3luYyBjbG9zZSgpIHtcbiAgICAgICAgaWYgKHRoaXMuZ3JhcGhxbENsaWVudCkge1xuICAgICAgICAgICAgY29uc3QgY2xpZW50ID0gdGhpcy5ncmFwaHFsQ2xpZW50O1xuICAgICAgICAgICAgdGhpcy5ncmFwaHFsQ2xpZW50ID0gbnVsbDtcbiAgICAgICAgICAgIGNsaWVudC5zdG9wKCk7XG4gICAgICAgICAgICBhd2FpdCBjbGllbnQuY2xlYXJTdG9yZSgpO1xuICAgICAgICB9XG4gICAgfVxuXG4gICAgdHJhbnNhY3Rpb25zOiBUT05RQ29sbGVjdGlvbjtcblxuICAgIG1lc3NhZ2VzOiBUT05RQ29sbGVjdGlvbjtcblxuICAgIGJsb2NrczogVE9OUUNvbGxlY3Rpb247XG5cbiAgICBhY2NvdW50czogVE9OUUNvbGxlY3Rpb247XG5cbiAgICBncmFwaHFsQ2xpZW50OiBBcG9sbG9DbGllbnQ7XG59XG5cblxuY2xhc3MgVE9OUXVlcmllc01vZHVsZUNvbGxlY3Rpb24gaW1wbGVtZW50cyBUT05RQ29sbGVjdGlvbiB7XG4gICAgbW9kdWxlOiBUT05RdWVyaWVzTW9kdWxlO1xuXG4gICAgY29sbGVjdGlvbk5hbWU6IHN0cmluZztcblxuICAgIHR5cGVOYW1lOiBzdHJpbmc7XG5cbiAgICBjb25zdHJ1Y3Rvcihtb2R1bGU6IFRPTlF1ZXJpZXNNb2R1bGUsIGNvbGxlY3Rpb25OYW1lOiBzdHJpbmcpIHtcbiAgICAgICAgdGhpcy5tb2R1bGUgPSBtb2R1bGU7XG4gICAgICAgIHRoaXMuY29sbGVjdGlvbk5hbWUgPSBjb2xsZWN0aW9uTmFtZTtcbiAgICAgICAgdGhpcy50eXBlTmFtZSA9IGAke2NvbGxlY3Rpb25OYW1lWzBdLnRvVXBwZXJDYXNlKCl9JHtjb2xsZWN0aW9uTmFtZS5zbGljZSgxLCAtMSl9YDtcbiAgICB9XG5cbiAgICBhc3luYyBxdWVyeShcbiAgICAgICAgLi4uYXJnc1xuICAgICAgICAvKlxuICAgICAgICAgICAgZmlsdGVyT3JQYXJhbXM6IGFueSB8IFRPTlF1ZXJ5UGFyYW1zLFxuICAgICAgICAgICAgcmVzdWx0OiBzdHJpbmcsXG4gICAgICAgICAgICBvcmRlckJ5PzogT3JkZXJCeVtdLFxuICAgICAgICAgICAgbGltaXQ/OiBudW1iZXIsXG4gICAgICAgICAgICB0aW1lb3V0PzogbnVtYmVyLFxuICAgICAgICAgICAgcGFyZW50U3Bhbj86IChTcGFuIHwgU3BhbkNvbnRleHQpXG4gICAgICAgICAqL1xuICAgICk6IFByb21pc2U8YW55PiB7XG4gICAgICAgIGNvbnN0IHtcbiAgICAgICAgICAgIGZpbHRlcixcbiAgICAgICAgICAgIHJlc3VsdCxcbiAgICAgICAgICAgIG9yZGVyQnksXG4gICAgICAgICAgICBsaW1pdCxcbiAgICAgICAgICAgIHRpbWVvdXQsXG4gICAgICAgICAgICBwYXJlbnRTcGFuLFxuICAgICAgICB9ID0gcmVzb2x2ZVBhcmFtczxUT05RdWVyeVBhcmFtcz4oYXJncywgJ2ZpbHRlcicsICgpID0+ICh7XG4gICAgICAgICAgICBmaWx0ZXI6IGFyZ3NbMF0sXG4gICAgICAgICAgICByZXN1bHQ6IChhcmdzWzFdOiBhbnkpLFxuICAgICAgICAgICAgb3JkZXJCeTogKGFyZ3NbMl06IGFueSksXG4gICAgICAgICAgICBsaW1pdDogKGFyZ3NbM106IGFueSksXG4gICAgICAgICAgICB0aW1lb3V0OiAoYXJnc1s0XTogYW55KSxcbiAgICAgICAgICAgIHBhcmVudFNwYW46IGFyZ3NbNV0sXG4gICAgICAgIH0pKTtcbiAgICAgICAgcmV0dXJuIHRoaXMubW9kdWxlLmNvbnRleHQudHJhY2UoYCR7dGhpcy5jb2xsZWN0aW9uTmFtZX0ucXVlcnlgLCBhc3luYyAoc3BhbikgPT4ge1xuICAgICAgICAgICAgc3Bhbi5zZXRUYWcoJ3BhcmFtcycsIHtcbiAgICAgICAgICAgICAgICBmaWx0ZXIsXG4gICAgICAgICAgICAgICAgcmVzdWx0LFxuICAgICAgICAgICAgICAgIG9yZGVyQnksXG4gICAgICAgICAgICAgICAgbGltaXQsXG4gICAgICAgICAgICAgICAgdGltZW91dCxcbiAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgY29uc3QgYyA9IHRoaXMuY29sbGVjdGlvbk5hbWU7XG4gICAgICAgICAgICBjb25zdCB0ID0gdGhpcy50eXBlTmFtZTtcbiAgICAgICAgICAgIGNvbnN0IHFsID0gYHF1ZXJ5ICR7Y30oJGZpbHRlcjogJHt0fUZpbHRlciwgJG9yZGVyQnk6IFtRdWVyeU9yZGVyQnldLCAkbGltaXQ6IEludCwgJHRpbWVvdXQ6IEZsb2F0KSB7XG4gICAgICAgICAgICAgICAgJHtjfShmaWx0ZXI6ICRmaWx0ZXIsIG9yZGVyQnk6ICRvcmRlckJ5LCBsaW1pdDogJGxpbWl0LCB0aW1lb3V0OiAkdGltZW91dCkgeyAke3Jlc3VsdH0gfVxuICAgICAgICAgICAgfWA7XG4gICAgICAgICAgICBjb25zdCB2YXJpYWJsZXM6IHsgW3N0cmluZ106IGFueSB9ID0ge1xuICAgICAgICAgICAgICAgIGZpbHRlcixcbiAgICAgICAgICAgICAgICBvcmRlckJ5LFxuICAgICAgICAgICAgICAgIGxpbWl0LFxuICAgICAgICAgICAgfTtcbiAgICAgICAgICAgIGlmICh0aW1lb3V0KSB7XG4gICAgICAgICAgICAgICAgdmFyaWFibGVzLnRpbWVvdXQgPSBNYXRoLm1pbihNQVhfVElNRU9VVCwgdGltZW91dCk7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICByZXR1cm4gKGF3YWl0IHRoaXMubW9kdWxlLmdyYXBocWxRdWVyeShxbCwgdmFyaWFibGVzLCBzcGFuKSkuZGF0YVtjXTtcbiAgICAgICAgfSwgcGFyZW50U3Bhbik7XG4gICAgfVxuXG4gICAgc3Vic2NyaWJlKFxuICAgICAgICAuLi5hcmdzXG4gICAgICAgIC8qXG4gICAgICAgIGZpbHRlck9yUGFyYW1zOiBhbnkgfCBUT05TdWJzY3JpYmVQYXJhbXMsXG4gICAgICAgIHJlc3VsdD86IHN0cmluZyxcbiAgICAgICAgb25Eb2NFdmVudD86IERvY0V2ZW50LFxuICAgICAgICBvbkVycm9yPzogKGVycjogRXJyb3IpID0+IHZvaWRcbiAgICAgICAgICovXG4gICAgKTogU3Vic2NyaXB0aW9uIHtcbiAgICAgICAgY29uc3Qge1xuICAgICAgICAgICAgZmlsdGVyLFxuICAgICAgICAgICAgcmVzdWx0LFxuICAgICAgICAgICAgb25Eb2NFdmVudCxcbiAgICAgICAgICAgIG9uRXJyb3IsXG4gICAgICAgIH0gPSByZXNvbHZlUGFyYW1zPFRPTlN1YnNjcmliZVBhcmFtcz4oYXJncywgJ2ZpbHRlcicsICgpID0+ICh7XG4gICAgICAgICAgICBmaWx0ZXI6IGFyZ3NbMF0sXG4gICAgICAgICAgICByZXN1bHQ6IChhcmdzWzFdOiBhbnkpLFxuICAgICAgICAgICAgb25Eb2NFdmVudDogKGFyZ3NbMl06IGFueSksXG4gICAgICAgICAgICBvbkVycm9yOiAoYXJnc1szXTogYW55KSxcbiAgICAgICAgfSkpO1xuICAgICAgICBjb25zdCBzcGFuID0gdGhpcy5tb2R1bGUuY29uZmlnLnRyYWNlci5zdGFydFNwYW4oJ1RPTlF1ZXJpZXNNb2R1bGUuanM6c3Vic2NyaWJlICcpO1xuICAgICAgICBzcGFuLnNldFRhZyhUYWdzLlNQQU5fS0lORCwgJ2NsaWVudCcpO1xuICAgICAgICBjb25zdCB0ZXh0ID0gYHN1YnNjcmlwdGlvbiAke3RoaXMuY29sbGVjdGlvbk5hbWV9KCRmaWx0ZXI6ICR7dGhpcy50eXBlTmFtZX1GaWx0ZXIpIHtcbiAgICAgICAgICAgICR7dGhpcy5jb2xsZWN0aW9uTmFtZX0oZmlsdGVyOiAkZmlsdGVyKSB7ICR7cmVzdWx0fSB9XG4gICAgICAgIH1gO1xuICAgICAgICBjb25zdCBxdWVyeSA9IGdxbChbdGV4dF0pO1xuICAgICAgICBsZXQgc3Vic2NyaXB0aW9uID0gbnVsbDtcbiAgICAgICAgKGFzeW5jICgpID0+IHtcbiAgICAgICAgICAgIHRyeSB7XG4gICAgICAgICAgICAgICAgY29uc3QgY2xpZW50ID0gYXdhaXQgdGhpcy5tb2R1bGUuZ3JhcGhxbENsaWVudFJlcXVpcmVkKHNwYW4pO1xuICAgICAgICAgICAgICAgIGNvbnN0IG9ic2VydmFibGUgPSBjbGllbnQuc3Vic2NyaWJlKHtcbiAgICAgICAgICAgICAgICAgICAgcXVlcnksXG4gICAgICAgICAgICAgICAgICAgIHZhcmlhYmxlczoge1xuICAgICAgICAgICAgICAgICAgICAgICAgZmlsdGVyLFxuICAgICAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgICAgIHN1YnNjcmlwdGlvbiA9IG9ic2VydmFibGUuc3Vic2NyaWJlKChtZXNzYWdlKSA9PiB7XG4gICAgICAgICAgICAgICAgICAgIG9uRG9jRXZlbnQoJ2luc2VydC91cGRhdGUnLCBtZXNzYWdlLmRhdGFbdGhpcy5jb2xsZWN0aW9uTmFtZV0pO1xuICAgICAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgfSBjYXRjaCAoZXJyb3IpIHtcbiAgICAgICAgICAgICAgICBzcGFuLmxvZyh7XG4gICAgICAgICAgICAgICAgICAgIGV2ZW50OiAnZmFpbGVkJyxcbiAgICAgICAgICAgICAgICAgICAgcGF5bG9hZDogZXJyb3IsXG4gICAgICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICAgICAgaWYgKG9uRXJyb3IpIHtcbiAgICAgICAgICAgICAgICAgICAgb25FcnJvcihlcnJvcik7XG4gICAgICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgICAgICAgY29uc29sZS5sb2coJ1RPTiBDbGllbnQgc3Vic2NyaXB0aW9uIGVycm9yJywgZXJyb3IpO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cbiAgICAgICAgfSkoKTtcbiAgICAgICAgcmV0dXJuIHtcbiAgICAgICAgICAgIHVuc3Vic2NyaWJlOiAoKSA9PiB7XG4gICAgICAgICAgICAgICAgaWYgKHN1YnNjcmlwdGlvbikge1xuICAgICAgICAgICAgICAgICAgICBzdWJzY3JpcHRpb24udW5zdWJzY3JpYmUoKTtcbiAgICAgICAgICAgICAgICAgICAgc3Bhbi5maW5pc2goKTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9LFxuICAgICAgICB9O1xuICAgIH1cblxuICAgIGFzeW5jIHdhaXRGb3IoXG4gICAgICAgIC4uLmFyZ3NcbiAgICAgICAgLypcbiAgICAgICAgZmlsdGVyT3JQYXJhbXM6IGFueSB8IFRPTldhaXRGb3JQYXJhbXMsXG4gICAgICAgIHJlc3VsdDogc3RyaW5nLFxuICAgICAgICB0aW1lb3V0PzogbnVtYmVyLFxuICAgICAgICBwYXJlbnRTcGFuPzogKFNwYW4gfCBTcGFuQ29udGV4dClcbiAgICAgICAgICovXG4gICAgKTogUHJvbWlzZTxhbnk+IHtcbiAgICAgICAgY29uc3Qge1xuICAgICAgICAgICAgZmlsdGVyLFxuICAgICAgICAgICAgcmVzdWx0LFxuICAgICAgICAgICAgdGltZW91dDogcGFyYW1zVGltZW91dCxcbiAgICAgICAgICAgIHBhcmVudFNwYW4sXG4gICAgICAgIH0gPSByZXNvbHZlUGFyYW1zPFRPTldhaXRGb3JQYXJhbXM+KGFyZ3MsICdmaWx0ZXInLCAoKSA9PiAoe1xuICAgICAgICAgICAgZmlsdGVyOiBhcmdzWzBdLFxuICAgICAgICAgICAgcmVzdWx0OiAoYXJnc1sxXTogYW55KSxcbiAgICAgICAgICAgIHRpbWVvdXQ6IChhcmdzWzJdOiBhbnkpLFxuICAgICAgICAgICAgcGFyZW50U3BhbjogYXJnc1szXSxcbiAgICAgICAgfSkpO1xuICAgICAgICBjb25zdCB0aW1lb3V0ID0gcGFyYW1zVGltZW91dCB8fCB0aGlzLm1vZHVsZS5jb25maWcud2FpdEZvclRpbWVvdXQoKTtcbiAgICAgICAgY29uc3QgZG9jcyA9IGF3YWl0IHRoaXMucXVlcnkoe1xuICAgICAgICAgICAgZmlsdGVyLFxuICAgICAgICAgICAgcmVzdWx0LFxuICAgICAgICAgICAgdGltZW91dCxcbiAgICAgICAgICAgIHBhcmVudFNwYW4sXG4gICAgICAgIH0pO1xuICAgICAgICBpZiAoZG9jcy5sZW5ndGggPiAwKSB7XG4gICAgICAgICAgICByZXR1cm4gZG9jc1swXTtcbiAgICAgICAgfVxuICAgICAgICB0aHJvdyBUT05DbGllbnRFcnJvci53YWl0Rm9yVGltZW91dCgpO1xuICAgIH1cbn1cblxuVE9OUXVlcmllc01vZHVsZS5tb2R1bGVOYW1lID0gJ1RPTlF1ZXJpZXNNb2R1bGUnO1xuIl19