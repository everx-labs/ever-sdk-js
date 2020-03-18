"use strict";

var _interopRequireWildcard = require("@babel/runtime/helpers/interopRequireWildcard");

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = exports.DEFAULT_TIMEOUT = exports.MAX_TIMEOUT = void 0;

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

/*
 * Copyright 2018-2020 TON DEV SOLUTIONS LTD.
 *
 * Licensed under the SOFTWARE EVALUATION License (the "License"); you may not use
 * this file except in compliance with the License.  You may obtain a copy of the
 * License at:
 *
 * http://www.ton.dev/licenses
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific TON DEV software governing permissions and
 * limitations under the License.
 */
var MAX_TIMEOUT = 2147483647;
exports.MAX_TIMEOUT = MAX_TIMEOUT;
var DEFAULT_TIMEOUT = 40000;
exports.DEFAULT_TIMEOUT = DEFAULT_TIMEOUT;

function findParams(args, requiredParamName) {
  return args.length === 1 && requiredParamName in args[0] ? args[0] : null;
}

var TONQueriesModule =
/*#__PURE__*/
function (_TONModule) {
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
      var _setup = (0, _asyncToGenerator2["default"])(
      /*#__PURE__*/
      _regenerator["default"].mark(function _callee() {
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
      var _detectRedirect = (0, _asyncToGenerator2["default"])(
      /*#__PURE__*/
      _regenerator["default"].mark(function _callee2(fetch, sourceUrl) {
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
                sourceLocation = _TONConfigModule.URLParts.fix(sourceUrl, function (parts) {
                  parts.query = '';
                }).toLowerCase();
                responseLocation = _TONConfigModule.URLParts.fix(response.url, function (parts) {
                  parts.query = '';
                }).toLowerCase();
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
      var _getClientConfig = (0, _asyncToGenerator2["default"])(
      /*#__PURE__*/
      _regenerator["default"].mark(function _callee3() {
        var config, clientPlatform, httpUrl, wsUrl, fetch, redirected, location;
        return _regenerator["default"].wrap(function _callee3$(_context3) {
          while (1) {
            switch (_context3.prev = _context3.next) {
              case 0:
                config = this.config;
                clientPlatform = _TONClient.TONClient.clientPlatform;

                if (!(!config.data || !clientPlatform)) {
                  _context3.next = 4;
                  break;
                }

                throw Error('TON Client does not configured');

              case 4:
                httpUrl = config.queriesHttpUrl();
                wsUrl = config.queriesWsUrl();
                fetch = clientPlatform.fetch;
                _context3.next = 9;
                return this.detectRedirect(fetch, "".concat(httpUrl, "?query=%7Binfo%7Bversion%7D%7D"));

              case 9:
                redirected = _context3.sent;

                if (redirected !== '') {
                  location = _TONConfigModule.URLParts.fix(redirected, function (parts) {
                    parts.query = '';
                  });

                  if (location) {
                    httpUrl = location;
                    wsUrl = location.replace(/^https:\/\//gi, 'wss://').replace(/^http:\/\//gi, 'ws://');
                  }
                }

                return _context3.abrupt("return", {
                  httpUrl: httpUrl,
                  wsUrl: wsUrl,
                  fetch: fetch,
                  WebSocket: clientPlatform.WebSocket
                });

              case 12:
              case "end":
                return _context3.stop();
            }
          }
        }, _callee3, this);
      }));

      function getClientConfig() {
        return _getClientConfig.apply(this, arguments);
      }

      return getClientConfig;
    }()
  }, {
    key: "getAccountsCount",
    value: function () {
      var _getAccountsCount = (0, _asyncToGenerator2["default"])(
      /*#__PURE__*/
      _regenerator["default"].mark(function _callee4(parentSpan) {
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
      var _getTransactionsCount = (0, _asyncToGenerator2["default"])(
      /*#__PURE__*/
      _regenerator["default"].mark(function _callee5(parentSpan) {
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
      var _getAccountsTotalBalance = (0, _asyncToGenerator2["default"])(
      /*#__PURE__*/
      _regenerator["default"].mark(function _callee6(parentSpan) {
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
      var _postRequests = (0, _asyncToGenerator2["default"])(
      /*#__PURE__*/
      _regenerator["default"].mark(function _callee8(requests, parentSpan) {
        var _this2 = this;

        return _regenerator["default"].wrap(function _callee8$(_context8) {
          while (1) {
            switch (_context8.prev = _context8.next) {
              case 0:
                return _context8.abrupt("return", this.context.trace('queries.postRequests',
                /*#__PURE__*/
                function () {
                  var _ref = (0, _asyncToGenerator2["default"])(
                  /*#__PURE__*/
                  _regenerator["default"].mark(function _callee7(span) {
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
      var _mutation = (0, _asyncToGenerator2["default"])(
      /*#__PURE__*/
      _regenerator["default"].mark(function _callee10(ql) {
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
                return _context10.abrupt("return", this.context.trace('queries.mutation',
                /*#__PURE__*/
                function () {
                  var _ref2 = (0, _asyncToGenerator2["default"])(
                  /*#__PURE__*/
                  _regenerator["default"].mark(function _callee9(span) {
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
      var _query = (0, _asyncToGenerator2["default"])(
      /*#__PURE__*/
      _regenerator["default"].mark(function _callee12(ql) {
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
                return _context12.abrupt("return", this.context.trace('queries.query',
                /*#__PURE__*/
                function () {
                  var _ref3 = (0, _asyncToGenerator2["default"])(
                  /*#__PURE__*/
                  _regenerator["default"].mark(function _callee11(span) {
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
      var _graphqlMutation = (0, _asyncToGenerator2["default"])(
      /*#__PURE__*/
      _regenerator["default"].mark(function _callee13(ql) {
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
      var _graphqlQuery = (0, _asyncToGenerator2["default"])(
      /*#__PURE__*/
      _regenerator["default"].mark(function _callee14(ql) {
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
      var _graphQl = (0, _asyncToGenerator2["default"])(
      /*#__PURE__*/
      _regenerator["default"].mark(function _callee15(request, span) {
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
      var _graphqlClientRequired = (0, _asyncToGenerator2["default"])(
      /*#__PURE__*/
      _regenerator["default"].mark(function _callee17(span) {
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
                return this.context.trace('setup client',
                /*#__PURE__*/
                (0, _asyncToGenerator2["default"])(
                /*#__PURE__*/
                _regenerator["default"].mark(function _callee16() {
                  var _ref5, httpUrl, wsUrl, fetch, WebSocket, subsOptions, subscriptionClient, tracerLink, useHttp, isSubscription, wsLink, createHttpLink;

                  return _regenerator["default"].wrap(function _callee16$(_context16) {
                    while (1) {
                      switch (_context16.prev = _context16.next) {
                        case 0:
                          _context16.next = 2;
                          return _this5.getClientConfig();

                        case 2:
                          _ref5 = _context16.sent;
                          httpUrl = _ref5.httpUrl;
                          wsUrl = _ref5.wsUrl;
                          fetch = _ref5.fetch;
                          WebSocket = _ref5.WebSocket;
                          subsOptions = _this5.config.tracer.inject(span, _opentracing.FORMAT_TEXT_MAP, {});
                          subscriptionClient = new _subscriptionsTransportWs.SubscriptionClient(wsUrl, {
                            reconnect: true,
                            connectionParams: function connectionParams() {
                              return {
                                accessKey: _this5.config.data && _this5.config.data.accessKey,
                                headers: subsOptions
                              };
                            }
                          }, WebSocket);
                          subscriptionClient.onReconnected(function () {
                            console.log('>>>', 'WebSocket Reconnected');
                          });
                          subscriptionClient.onError(function (evt) {
                            console.log('>>>', 'WebSocket Error');
                            console.log('>>>', evt.target.url); // (async () => {
                            //     try {
                            //         // const newWsUrl = (await this.getClientConfig()).wsUrl;
                            //     } catch (err) {
                            //         console.log('>>>', err);
                            //     }
                            // })();
                          });

                          subscriptionClient.maxConnectTimeGenerator.duration = function () {
                            return subscriptionClient.maxConnectTimeGenerator.max;
                          };

                          _context16.next = 14;
                          return (0, _apolloLinkContext.setContext)(function (_, req) {
                            var resolvedSpan = req && req.traceSpan || span;
                            req.headers = {};

                            _this5.config.tracer.inject(resolvedSpan, _opentracing.FORMAT_TEXT_MAP, req.headers);

                            var accessKey = _this5.config.data && _this5.config.data.accessKey;

                            if (accessKey) {
                              req.headers.accessKey = accessKey;
                            }

                            return {
                              headers: req.headers
                            };
                          });

                        case 14:
                          tracerLink = _context16.sent;
                          useHttp = true;

                          isSubscription = function isSubscription(_ref6) {
                            var query = _ref6.query;
                            var definition = (0, _apolloUtilities.getMainDefinition)(query);
                            return definition.kind === 'OperationDefinition' && definition.operation === 'subscription';
                          };

                          wsLink = tracerLink.concat(new _apolloLinkWs.WebSocketLink(subscriptionClient));

                          createHttpLink = function createHttpLink() {
                            return tracerLink.concat(new _apolloLinkHttp.HttpLink({
                              uri: httpUrl,
                              fetch: fetch
                            }));
                          };

                          _this5.graphqlClient = new _apolloClient.ApolloClient({
                            cache: new _apolloCacheInmemory.InMemoryCache({}),
                            link: useHttp ? (0, _apolloLink.split)(isSubscription, wsLink, createHttpLink()) : wsLink,
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
                          return _context16.stop();
                      }
                    }
                  }, _callee16);
                })), span);

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
    key: "close",
    value: function () {
      var _close = (0, _asyncToGenerator2["default"])(
      /*#__PURE__*/
      _regenerator["default"].mark(function _callee18() {
        var client;
        return _regenerator["default"].wrap(function _callee18$(_context18) {
          while (1) {
            switch (_context18.prev = _context18.next) {
              case 0:
                if (!this.graphqlClient) {
                  _context18.next = 6;
                  break;
                }

                client = this.graphqlClient;
                this.graphqlClient = null;
                client.stop();
                _context18.next = 6;
                return client.clearStore();

              case 6:
              case "end":
                return _context18.stop();
            }
          }
        }, _callee18, this);
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

var TONQueriesModuleCollection =
/*#__PURE__*/
function () {
  function TONQueriesModuleCollection(module, collectionName) {
    (0, _classCallCheck2["default"])(this, TONQueriesModuleCollection);
    (0, _defineProperty2["default"])(this, "module", void 0);
    (0, _defineProperty2["default"])(this, "collectionName", void 0);
    (0, _defineProperty2["default"])(this, "typeName", void 0);
    this.module = module;
    this.collectionName = collectionName;
    this.typeName = "".concat(collectionName[0].toUpperCase()).concat(collectionName.slice(1));
  }

  (0, _createClass2["default"])(TONQueriesModuleCollection, [{
    key: "query",
    value: function () {
      var _query2 = (0, _asyncToGenerator2["default"])(
      /*#__PURE__*/
      _regenerator["default"].mark(function _callee20() {
        var _this6 = this;

        var _len,
            args,
            _key,
            params,
            filter,
            result,
            orderBy,
            limit,
            timeout,
            parentSpan,
            _args20 = arguments;

        return _regenerator["default"].wrap(function _callee20$(_context20) {
          while (1) {
            switch (_context20.prev = _context20.next) {
              case 0:
                for (_len = _args20.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
                  args[_key] = _args20[_key];
                }

                params = findParams(args, 'filter');
                filter = params ? params.filter : args[0];
                result = params ? params.result : args[1];
                orderBy = params ? params.orderBy : args[2];
                limit = params ? params.limit : args[3];
                timeout = params ? params.timeout : args[4];
                parentSpan = params ? params.parentSpan : args[5];
                return _context20.abrupt("return", this.module.context.trace("".concat(this.collectionName, ".query"),
                /*#__PURE__*/
                function () {
                  var _ref7 = (0, _asyncToGenerator2["default"])(
                  /*#__PURE__*/
                  _regenerator["default"].mark(function _callee19(span) {
                    var c, t, ql, variables;
                    return _regenerator["default"].wrap(function _callee19$(_context19) {
                      while (1) {
                        switch (_context19.prev = _context19.next) {
                          case 0:
                            span.setTag('params', {
                              filter: filter,
                              result: result,
                              orderBy: orderBy,
                              limit: limit,
                              timeout: timeout
                            });
                            c = _this6.collectionName;
                            t = _this6.typeName;
                            ql = "query ".concat(c, "($filter: ").concat(t, "Filter, $orderBy: [QueryOrderBy], $limit: Int, $timeout: Float) {\n                ").concat(c, "(filter: $filter, orderBy: $orderBy, limit: $limit, timeout: $timeout) { ").concat(result, " }\n            }");
                            variables = {
                              filter: filter,
                              orderBy: orderBy,
                              limit: limit
                            };

                            if (timeout) {
                              variables.timeout = Math.min(MAX_TIMEOUT, timeout);
                            }

                            _context19.next = 8;
                            return _this6.module.graphqlQuery(ql, variables, span);

                          case 8:
                            _context19.t0 = c;
                            return _context19.abrupt("return", _context19.sent.data[_context19.t0]);

                          case 10:
                          case "end":
                            return _context19.stop();
                        }
                      }
                    }, _callee19);
                  }));

                  return function (_x18) {
                    return _ref7.apply(this, arguments);
                  };
                }(), parentSpan));

              case 9:
              case "end":
                return _context20.stop();
            }
          }
        }, _callee20, this);
      }));

      function query() {
        return _query2.apply(this, arguments);
      }

      return query;
    }()
  }, {
    key: "subscribe",
    value: function subscribe() {
      var _this7 = this;

      for (var _len2 = arguments.length, args = new Array(_len2), _key2 = 0; _key2 < _len2; _key2++) {
        args[_key2] = arguments[_key2];
      }

      var params = findParams(args, 'filter');
      var filter = params ? params.filter : args[0];
      var result = params ? params.result : args[1];
      var onDocEvent = params ? params.onDocEvent : args[2];
      var onError = params ? params.onError : args[3];
      var span = this.module.config.tracer.startSpan('TONQueriesModule.js:subscribe ');
      span.setTag(_opentracing.Tags.SPAN_KIND, 'client');
      var text = "subscription ".concat(this.collectionName, "($filter: ").concat(this.typeName, "Filter) {\n            ").concat(this.collectionName, "(filter: $filter) { ").concat(result, " }\n        }");
      var query = (0, _graphqlTag["default"])([text]);
      var subscription = null;
      (0, _asyncToGenerator2["default"])(
      /*#__PURE__*/
      _regenerator["default"].mark(function _callee21() {
        var client, observable;
        return _regenerator["default"].wrap(function _callee21$(_context21) {
          while (1) {
            switch (_context21.prev = _context21.next) {
              case 0:
                _context21.prev = 0;
                _context21.next = 3;
                return _this7.module.graphqlClientRequired(span);

              case 3:
                client = _context21.sent;
                observable = client.subscribe({
                  query: query,
                  variables: {
                    filter: filter
                  }
                });
                subscription = observable.subscribe(function (message) {
                  onDocEvent('insert/update', message.data[_this7.collectionName]);
                });
                _context21.next = 12;
                break;

              case 8:
                _context21.prev = 8;
                _context21.t0 = _context21["catch"](0);
                span.log({
                  event: 'failed',
                  payload: _context21.t0
                });

                if (onError) {
                  onError(_context21.t0);
                } else {
                  console.error('TON Client subscription error', _context21.t0);
                }

              case 12:
              case "end":
                return _context21.stop();
            }
          }
        }, _callee21, null, [[0, 8]]);
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
      var _waitFor = (0, _asyncToGenerator2["default"])(
      /*#__PURE__*/
      _regenerator["default"].mark(function _callee22() {
        var _len3,
            args,
            _key3,
            params,
            filter,
            result,
            timeout,
            parentSpan,
            docs,
            _args22 = arguments;

        return _regenerator["default"].wrap(function _callee22$(_context22) {
          while (1) {
            switch (_context22.prev = _context22.next) {
              case 0:
                for (_len3 = _args22.length, args = new Array(_len3), _key3 = 0; _key3 < _len3; _key3++) {
                  args[_key3] = _args22[_key3];
                }

                params = findParams(args, 'filter');
                filter = params ? params.filter : args[0];
                result = params ? params.result : args[1];
                timeout = (params ? params.timeout : args[2]) || DEFAULT_TIMEOUT;
                parentSpan = params ? params.parentSpan : args[3];
                _context22.next = 8;
                return this.query({
                  filter: filter,
                  result: result,
                  timeout: timeout,
                  parentSpan: parentSpan
                });

              case 8:
                docs = _context22.sent;

                if (!(docs.length > 0)) {
                  _context22.next = 11;
                  break;
                }

                return _context22.abrupt("return", docs[0]);

              case 11:
                throw _TONClient.TONClientError.waitForTimeout();

              case 12:
              case "end":
                return _context22.stop();
            }
          }
        }, _callee22, this);
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy9tb2R1bGVzL1RPTlF1ZXJpZXNNb2R1bGUuanMiXSwibmFtZXMiOlsiTUFYX1RJTUVPVVQiLCJERUZBVUxUX1RJTUVPVVQiLCJmaW5kUGFyYW1zIiwiYXJncyIsInJlcXVpcmVkUGFyYW1OYW1lIiwibGVuZ3RoIiwiVE9OUXVlcmllc01vZHVsZSIsImNvbnRleHQiLCJncmFwaHFsQ2xpZW50Iiwib3ZlcnJpZGVXc1VybCIsImNvbmZpZyIsImdldE1vZHVsZSIsIlRPTkNvbmZpZ01vZHVsZSIsInRyYW5zYWN0aW9ucyIsIlRPTlF1ZXJpZXNNb2R1bGVDb2xsZWN0aW9uIiwibWVzc2FnZXMiLCJibG9ja3MiLCJhY2NvdW50cyIsImZldGNoIiwic291cmNlVXJsIiwicmVzcG9uc2UiLCJyZWRpcmVjdGVkIiwidXJsIiwic291cmNlTG9jYXRpb24iLCJVUkxQYXJ0cyIsImZpeCIsInBhcnRzIiwicXVlcnkiLCJ0b0xvd2VyQ2FzZSIsInJlc3BvbnNlTG9jYXRpb24iLCJjbGllbnRQbGF0Zm9ybSIsIlRPTkNsaWVudCIsImRhdGEiLCJFcnJvciIsImh0dHBVcmwiLCJxdWVyaWVzSHR0cFVybCIsIndzVXJsIiwicXVlcmllc1dzVXJsIiwiZGV0ZWN0UmVkaXJlY3QiLCJsb2NhdGlvbiIsInJlcGxhY2UiLCJXZWJTb2NrZXQiLCJwYXJlbnRTcGFuIiwidW5kZWZpbmVkIiwicmVzdWx0IiwiZ2V0QWNjb3VudHNDb3VudCIsImdldFRyYW5zYWN0aW9uc0NvdW50IiwiZ2V0QWNjb3VudHNUb3RhbEJhbGFuY2UiLCJyZXF1ZXN0cyIsInRyYWNlIiwic3BhbiIsImdyYXBocWxNdXRhdGlvbiIsInFsIiwidmFyaWFibGVzIiwic2V0VGFnIiwibXV0YXRpb24iLCJncmFwaHFsUXVlcnkiLCJncmFwaFFsIiwiY2xpZW50IiwibXV0YXRlIiwidHJhY2VTcGFuIiwicmVxdWVzdCIsImdyYXBocWxDbGllbnRSZXF1aXJlZCIsImdxbEVyciIsImdyYXBoUUxFcnJvcnMiLCJjbGllbnRFcnIiLCJtZXNzYWdlIiwiZ3FsRXhjIiwiZXh0ZW5zaW9ucyIsImV4Y2VwdGlvbiIsIm51bWJlciIsImNvZGUiLCJzb3VyY2UiLCJlcnJvcnMiLCJuZXR3b3JrRXJyb3IiLCJUT05DbGllbnRFcnJvciIsInF1ZXJ5RmFpbGVkIiwiZ2V0Q2xpZW50Q29uZmlnIiwic3Vic09wdGlvbnMiLCJ0cmFjZXIiLCJpbmplY3QiLCJGT1JNQVRfVEVYVF9NQVAiLCJzdWJzY3JpcHRpb25DbGllbnQiLCJTdWJzY3JpcHRpb25DbGllbnQiLCJyZWNvbm5lY3QiLCJjb25uZWN0aW9uUGFyYW1zIiwiYWNjZXNzS2V5IiwiaGVhZGVycyIsIm9uUmVjb25uZWN0ZWQiLCJjb25zb2xlIiwibG9nIiwib25FcnJvciIsImV2dCIsInRhcmdldCIsIm1heENvbm5lY3RUaW1lR2VuZXJhdG9yIiwiZHVyYXRpb24iLCJtYXgiLCJfIiwicmVxIiwicmVzb2x2ZWRTcGFuIiwidHJhY2VyTGluayIsInVzZUh0dHAiLCJpc1N1YnNjcmlwdGlvbiIsImRlZmluaXRpb24iLCJraW5kIiwib3BlcmF0aW9uIiwid3NMaW5rIiwiY29uY2F0IiwiV2ViU29ja2V0TGluayIsImNyZWF0ZUh0dHBMaW5rIiwiSHR0cExpbmsiLCJ1cmkiLCJBcG9sbG9DbGllbnQiLCJjYWNoZSIsIkluTWVtb3J5Q2FjaGUiLCJsaW5rIiwiZGVmYXVsdE9wdGlvbnMiLCJ3YXRjaFF1ZXJ5IiwiZmV0Y2hQb2xpY3kiLCJzdG9wIiwiY2xlYXJTdG9yZSIsIlRPTk1vZHVsZSIsIm1vZHVsZSIsImNvbGxlY3Rpb25OYW1lIiwidHlwZU5hbWUiLCJ0b1VwcGVyQ2FzZSIsInNsaWNlIiwicGFyYW1zIiwiZmlsdGVyIiwib3JkZXJCeSIsImxpbWl0IiwidGltZW91dCIsImMiLCJ0IiwiTWF0aCIsIm1pbiIsIm9uRG9jRXZlbnQiLCJzdGFydFNwYW4iLCJUYWdzIiwiU1BBTl9LSU5EIiwidGV4dCIsInN1YnNjcmlwdGlvbiIsIm9ic2VydmFibGUiLCJzdWJzY3JpYmUiLCJldmVudCIsInBheWxvYWQiLCJlcnJvciIsInVuc3Vic2NyaWJlIiwiZmluaXNoIiwiZG9jcyIsIndhaXRGb3JUaW1lb3V0IiwibW9kdWxlTmFtZSJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFrQkE7O0FBQ0E7O0FBQ0E7O0FBQ0E7O0FBQ0E7O0FBQ0E7O0FBQ0E7O0FBQ0E7O0FBQ0E7O0FBQ0E7O0FBV0E7O0FBRUE7O0FBQ0E7O0FBekNBOzs7Ozs7Ozs7Ozs7Ozs7QUFpRE8sSUFBTUEsV0FBVyxHQUFHLFVBQXBCOztBQUNBLElBQU1DLGVBQWUsR0FBRyxLQUF4Qjs7O0FBRVAsU0FBU0MsVUFBVCxDQUF1QkMsSUFBdkIsRUFBb0NDLGlCQUFwQyxFQUFtRTtBQUMvRCxTQUFRRCxJQUFJLENBQUNFLE1BQUwsS0FBZ0IsQ0FBakIsSUFBd0JELGlCQUFpQixJQUFJRCxJQUFJLENBQUMsQ0FBRCxDQUFqRCxHQUF3REEsSUFBSSxDQUFDLENBQUQsQ0FBNUQsR0FBa0UsSUFBekU7QUFDSDs7SUFFb0JHLGdCOzs7OztBQUtqQiw0QkFBWUMsT0FBWixFQUF1QztBQUFBOztBQUFBO0FBQ25DLDRIQUFNQSxPQUFOO0FBRG1DO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBRW5DLFVBQUtDLGFBQUwsR0FBcUIsSUFBckI7QUFDQSxVQUFLQyxhQUFMLEdBQXFCLElBQXJCO0FBSG1DO0FBSXRDOzs7Ozs7Ozs7Ozs7QUFHRyxxQkFBS0MsTUFBTCxHQUFjLEtBQUtILE9BQUwsQ0FBYUksU0FBYixDQUF1QkMsMkJBQXZCLENBQWQ7QUFDQSxxQkFBS0MsWUFBTCxHQUFvQixJQUFJQywwQkFBSixDQUErQixJQUEvQixFQUFxQyxjQUFyQyxDQUFwQjtBQUNBLHFCQUFLQyxRQUFMLEdBQWdCLElBQUlELDBCQUFKLENBQStCLElBQS9CLEVBQXFDLFVBQXJDLENBQWhCO0FBQ0EscUJBQUtFLE1BQUwsR0FBYyxJQUFJRiwwQkFBSixDQUErQixJQUEvQixFQUFxQyxRQUFyQyxDQUFkO0FBQ0EscUJBQUtHLFFBQUwsR0FBZ0IsSUFBSUgsMEJBQUosQ0FBK0IsSUFBL0IsRUFBcUMsVUFBckMsQ0FBaEI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztxREFHaUJJLEssRUFBWUMsUzs7Ozs7Ozt1QkFDTkQsS0FBSyxDQUFDQyxTQUFELEM7OztBQUF0QkMsZ0JBQUFBLFE7O3NCQUNGQSxRQUFRLENBQUNDLFVBQVQsS0FBd0IsSTs7Ozs7a0RBQ2pCRCxRQUFRLENBQUNFLEc7OztzQkFFaEJGLFFBQVEsQ0FBQ0MsVUFBVCxLQUF3QixLOzs7OztrREFDakIsRTs7O0FBRUxFLGdCQUFBQSxjLEdBQWlCQywwQkFBU0MsR0FBVCxDQUFhTixTQUFiLEVBQXdCLFVBQUNPLEtBQUQsRUFBVztBQUN0REEsa0JBQUFBLEtBQUssQ0FBQ0MsS0FBTixHQUFjLEVBQWQ7QUFDSCxpQkFGc0IsRUFHbEJDLFdBSGtCLEU7QUFJakJDLGdCQUFBQSxnQixHQUFtQkwsMEJBQVNDLEdBQVQsQ0FBYUwsUUFBUSxDQUFDRSxHQUF0QixFQUEyQixVQUFDSSxLQUFELEVBQVc7QUFDM0RBLGtCQUFBQSxLQUFLLENBQUNDLEtBQU4sR0FBYyxFQUFkO0FBQ0gsaUJBRndCLEVBR3BCQyxXQUhvQixFO2tEQUlsQkMsZ0JBQWdCLEtBQUtOLGNBQXJCLEdBQXNDSCxRQUFRLENBQUNFLEdBQS9DLEdBQXFELEU7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUlwRFosZ0JBQUFBLE0sR0FBVyxJLENBQVhBLE07QUFDQW9CLGdCQUFBQSxjLEdBQW1CQyxvQixDQUFuQkQsYzs7c0JBQ0osQ0FBQ3BCLE1BQU0sQ0FBQ3NCLElBQVIsSUFBZ0IsQ0FBQ0YsYzs7Ozs7c0JBQ1hHLEtBQUssQ0FBQyxnQ0FBRCxDOzs7QUFFWEMsZ0JBQUFBLE8sR0FBVXhCLE1BQU0sQ0FBQ3lCLGNBQVAsRTtBQUNWQyxnQkFBQUEsSyxHQUFRMUIsTUFBTSxDQUFDMkIsWUFBUCxFO0FBQ0puQixnQkFBQUEsSyxHQUFVWSxjLENBQVZaLEs7O3VCQUNpQixLQUFLb0IsY0FBTCxDQUNyQnBCLEtBRHFCLFlBRWxCZ0IsT0FGa0Isb0M7OztBQUFuQmIsZ0JBQUFBLFU7O0FBSU4sb0JBQUlBLFVBQVUsS0FBSyxFQUFuQixFQUF1QjtBQUNia0Isa0JBQUFBLFFBRGEsR0FDRmYsMEJBQVNDLEdBQVQsQ0FBYUosVUFBYixFQUF5QixVQUFDSyxLQUFELEVBQVc7QUFDakRBLG9CQUFBQSxLQUFLLENBQUNDLEtBQU4sR0FBYyxFQUFkO0FBQ0gsbUJBRmdCLENBREU7O0FBSW5CLHNCQUFJWSxRQUFKLEVBQWM7QUFDVkwsb0JBQUFBLE9BQU8sR0FBR0ssUUFBVjtBQUNBSCxvQkFBQUEsS0FBSyxHQUFHRyxRQUFRLENBQ1hDLE9BREcsQ0FDSyxlQURMLEVBQ3NCLFFBRHRCLEVBRUhBLE9BRkcsQ0FFSyxjQUZMLEVBRXFCLE9BRnJCLENBQVI7QUFHSDtBQUNKOztrREFDTTtBQUNITixrQkFBQUEsT0FBTyxFQUFQQSxPQURHO0FBRUhFLGtCQUFBQSxLQUFLLEVBQUxBLEtBRkc7QUFHSGxCLGtCQUFBQSxLQUFLLEVBQUxBLEtBSEc7QUFJSHVCLGtCQUFBQSxTQUFTLEVBQUVYLGNBQWMsQ0FBQ1c7QUFKdkIsaUI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztxREFRWUMsVTs7Ozs7Ozt1QkFDRSxLQUFLZixLQUFMLENBQVcseUJBQVgsRUFBc0NnQixTQUF0QyxFQUFpREQsVUFBakQsQzs7O0FBQWZFLGdCQUFBQSxNO2tEQUNDQSxNQUFNLENBQUNaLElBQVAsQ0FBWWEsZ0I7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztxREFHSUgsVTs7Ozs7Ozt1QkFDRixLQUFLZixLQUFMLENBQVcsNkJBQVgsRUFBMENnQixTQUExQyxFQUFxREQsVUFBckQsQzs7O0FBQWZFLGdCQUFBQSxNO2tEQUNDQSxNQUFNLENBQUNaLElBQVAsQ0FBWWMsb0I7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztxREFHT0osVTs7Ozs7Ozt1QkFDTCxLQUFLZixLQUFMLENBQVcsZ0NBQVgsRUFBNkNnQixTQUE3QyxFQUF3REQsVUFBeEQsQzs7O0FBQWZFLGdCQUFBQSxNO2tEQUNDQSxNQUFNLENBQUNaLElBQVAsQ0FBWWUsdUI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztxREFHSkMsUSxFQUFxQk4sVTs7Ozs7OztrREFDN0IsS0FBS25DLE9BQUwsQ0FBYTBDLEtBQWIsQ0FBbUIsc0JBQW5CO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSwrQ0FBMkMsa0JBQU9DLElBQVA7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLDhEQUN2QyxNQUFJLENBQUNDLGVBQUwsb0hBRUg7QUFDQUgsOEJBQUFBLFFBQVEsRUFBUkE7QUFEQSw2QkFGRyxFQUlKRSxJQUpJLENBRHVDOztBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLG1CQUEzQzs7QUFBQTtBQUFBO0FBQUE7QUFBQSxxQkFNSlIsVUFOSSxDOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7c0RBVVBVLEU7Ozs7Ozs7Ozs7QUFDQUMsZ0JBQUFBLFMsaUVBQStCLEU7QUFDL0JYLGdCQUFBQSxVO21EQUVPLEtBQUtuQyxPQUFMLENBQWEwQyxLQUFiLENBQW1CLGtCQUFuQjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsK0NBQXVDLGtCQUFPQyxJQUFQO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFDMUNBLDRCQUFBQSxJQUFJLENBQUNJLE1BQUwsQ0FBWSxRQUFaLEVBQXNCO0FBQ2xCQyw4QkFBQUEsUUFBUSxFQUFFSCxFQURRO0FBRWxCQyw4QkFBQUEsU0FBUyxFQUFUQTtBQUZrQiw2QkFBdEI7QUFEMEMsOERBS25DLE1BQUksQ0FBQ0YsZUFBTCxDQUFxQkMsRUFBckIsRUFBeUJDLFNBQXpCLEVBQW9DSCxJQUFwQyxDQUxtQzs7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxtQkFBdkM7O0FBQUE7QUFBQTtBQUFBO0FBQUEscUJBTUpSLFVBTkksQzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O3NEQVVQVSxFOzs7Ozs7Ozs7O0FBQ0FDLGdCQUFBQSxTLGlFQUErQixFO0FBQy9CWCxnQkFBQUEsVTttREFFTyxLQUFLbkMsT0FBTCxDQUFhMEMsS0FBYixDQUFtQixlQUFuQjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsK0NBQW9DLG1CQUFPQyxJQUFQO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFDdkNBLDRCQUFBQSxJQUFJLENBQUNJLE1BQUwsQ0FBWSxRQUFaLEVBQXNCO0FBQ2xCM0IsOEJBQUFBLEtBQUssRUFBRXlCLEVBRFc7QUFFbEJDLDhCQUFBQSxTQUFTLEVBQVRBO0FBRmtCLDZCQUF0QjtBQUR1QywrREFLaEMsTUFBSSxDQUFDRyxZQUFMLENBQWtCSixFQUFsQixFQUFzQkMsU0FBdEIsRUFBaUNILElBQWpDLENBTGdDOztBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLG1CQUFwQzs7QUFBQTtBQUFBO0FBQUE7QUFBQSxxQkFNSlIsVUFOSSxDOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7c0RBU1dVLEU7Ozs7Ozs7OztBQUFZQyxnQkFBQUEsUyxpRUFBK0IsRTtBQUFJSCxnQkFBQUEsSTtBQUMzREssZ0JBQUFBLFEsR0FBVyw0QkFBSSxDQUFDSCxFQUFELENBQUosQzttREFDVixLQUFLSyxPQUFMLENBQWEsVUFBQ0MsTUFBRDtBQUFBLHlCQUFZQSxNQUFNLENBQUNDLE1BQVAsQ0FBYztBQUMxQ0osb0JBQUFBLFFBQVEsRUFBUkEsUUFEMEM7QUFFMUNGLG9CQUFBQSxTQUFTLEVBQVRBLFNBRjBDO0FBRzFDOUMsb0JBQUFBLE9BQU8sRUFBRTtBQUNMcUQsc0JBQUFBLFNBQVMsRUFBRVY7QUFETjtBQUhpQyxtQkFBZCxDQUFaO0FBQUEsaUJBQWIsQzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O3NEQVNRRSxFOzs7Ozs7Ozs7QUFBWUMsZ0JBQUFBLFMsaUVBQStCLEU7QUFBSUgsZ0JBQUFBLEk7QUFDeER2QixnQkFBQUEsSyxHQUFRLDRCQUFJLENBQUN5QixFQUFELENBQUosQzttREFDUCxLQUFLSyxPQUFMLENBQWEsVUFBQ0MsTUFBRDtBQUFBLHlCQUFZQSxNQUFNLENBQUMvQixLQUFQLENBQWE7QUFDekNBLG9CQUFBQSxLQUFLLEVBQUxBLEtBRHlDO0FBRXpDMEIsb0JBQUFBLFNBQVMsRUFBVEEsU0FGeUM7QUFHekM5QyxvQkFBQUEsT0FBTyxFQUFFO0FBQ0xxRCxzQkFBQUEsU0FBUyxFQUFFVjtBQUROO0FBSGdDLG1CQUFiLENBQVo7QUFBQSxpQkFBYixFQU1IQSxJQU5HLEM7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztzREFTR1csTyxFQUFpRFgsSTs7Ozs7Ozt1QkFDdEMsS0FBS1kscUJBQUwsQ0FBMkJaLElBQTNCLEM7OztBQUFmUSxnQkFBQUEsTTs7O3VCQUVXRyxPQUFPLENBQUNILE1BQUQsQzs7Ozs7Ozs7QUFFZEssZ0JBQUFBLE0sR0FBUyxjQUFNQyxhQUFOLElBQXVCLGNBQU1BLGFBQU4sQ0FBb0IsQ0FBcEIsQzs7cUJBQ2xDRCxNOzs7OztBQUNNRSxnQkFBQUEsUyxHQUFZLElBQUloQyxLQUFKLENBQVU4QixNQUFNLENBQUNHLE9BQWpCLEM7QUFDWkMsZ0JBQUFBLE0sR0FBVUosTUFBTSxDQUFDSyxVQUFQLElBQXFCTCxNQUFNLENBQUNLLFVBQVAsQ0FBa0JDLFNBQXhDLElBQXNELEU7QUFDcEVKLGdCQUFBQSxTQUFELENBQWlCSyxNQUFqQixHQUEwQkgsTUFBTSxDQUFDSSxJQUFQLElBQWUsQ0FBekM7QUFDQ04sZ0JBQUFBLFNBQUQsQ0FBaUJNLElBQWpCLEdBQXdCSixNQUFNLENBQUNJLElBQVAsSUFBZSxDQUF2QztBQUNDTixnQkFBQUEsU0FBRCxDQUFpQk8sTUFBakIsR0FBMEJMLE1BQU0sQ0FBQ0ssTUFBUCxJQUFpQixRQUEzQztzQkFDTVAsUzs7O0FBRUpRLGdCQUFBQSxNLEdBQVMsaUJBQ1IsY0FBTUMsWUFERSxJQUVSLGNBQU1BLFlBQU4sQ0FBbUI5QixNQUZYLElBR1IsY0FBTThCLFlBQU4sQ0FBbUI5QixNQUFuQixDQUEwQjZCLE07O3FCQUM3QkEsTTs7Ozs7c0JBQ01FLDBCQUFlQyxXQUFmLENBQTJCSCxNQUEzQixDOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7c0RBT1V2QixJOzs7Ozs7O3FCQUNwQixLQUFLMUMsYTs7Ozs7bURBQ0UsS0FBS0EsYTs7Ozt1QkFFVixLQUFLRCxPQUFMLENBQWEwQyxLQUFiLENBQW1CLGNBQW5CO0FBQUE7QUFBQTtBQUFBO0FBQUEsNkNBQW1DO0FBQUE7O0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLGlDQU0zQixNQUFJLENBQUM0QixlQUFMLEVBTjJCOztBQUFBO0FBQUE7QUFFakMzQywwQkFBQUEsT0FGaUMsU0FFakNBLE9BRmlDO0FBR2pDRSwwQkFBQUEsS0FIaUMsU0FHakNBLEtBSGlDO0FBSWpDbEIsMEJBQUFBLEtBSmlDLFNBSWpDQSxLQUppQztBQUtqQ3VCLDBCQUFBQSxTQUxpQyxTQUtqQ0EsU0FMaUM7QUFPL0JxQywwQkFBQUEsV0FQK0IsR0FPakIsTUFBSSxDQUFDcEUsTUFBTCxDQUFZcUUsTUFBWixDQUFtQkMsTUFBbkIsQ0FBMEI5QixJQUExQixFQUFnQytCLDRCQUFoQyxFQUFpRCxFQUFqRCxDQVBpQjtBQVEvQkMsMEJBQUFBLGtCQVIrQixHQVFWLElBQUlDLDRDQUFKLENBQ3ZCL0MsS0FEdUIsRUFFdkI7QUFDSWdELDRCQUFBQSxTQUFTLEVBQUUsSUFEZjtBQUVJQyw0QkFBQUEsZ0JBQWdCLEVBQUU7QUFBQSxxQ0FBTztBQUNyQkMsZ0NBQUFBLFNBQVMsRUFBRSxNQUFJLENBQUM1RSxNQUFMLENBQVlzQixJQUFaLElBQW9CLE1BQUksQ0FBQ3RCLE1BQUwsQ0FBWXNCLElBQVosQ0FBaUJzRCxTQUQzQjtBQUVyQkMsZ0NBQUFBLE9BQU8sRUFBRVQ7QUFGWSwrQkFBUDtBQUFBO0FBRnRCLDJCQUZ1QixFQVN2QnJDLFNBVHVCLENBUlU7QUFtQnJDeUMsMEJBQUFBLGtCQUFrQixDQUFDTSxhQUFuQixDQUFpQyxZQUFNO0FBQ25DQyw0QkFBQUEsT0FBTyxDQUFDQyxHQUFSLENBQVksS0FBWixFQUFtQix1QkFBbkI7QUFDSCwyQkFGRDtBQUdBUiwwQkFBQUEsa0JBQWtCLENBQUNTLE9BQW5CLENBQTJCLFVBQUNDLEdBQUQsRUFBUztBQUNoQ0gsNEJBQUFBLE9BQU8sQ0FBQ0MsR0FBUixDQUFZLEtBQVosRUFBbUIsaUJBQW5CO0FBQ0FELDRCQUFBQSxPQUFPLENBQUNDLEdBQVIsQ0FBWSxLQUFaLEVBQW1CRSxHQUFHLENBQUNDLE1BQUosQ0FBV3ZFLEdBQTlCLEVBRmdDLENBR2hDO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0gsMkJBVkQ7O0FBV0E0RCwwQkFBQUEsa0JBQWtCLENBQUNZLHVCQUFuQixDQUEyQ0MsUUFBM0MsR0FBc0QsWUFBTTtBQUN4RCxtQ0FBT2Isa0JBQWtCLENBQUNZLHVCQUFuQixDQUEyQ0UsR0FBbEQ7QUFDSCwyQkFGRDs7QUFqQ3FDO0FBQUEsaUNBcUNaLG1DQUFXLFVBQUNDLENBQUQsRUFBSUMsR0FBSixFQUFZO0FBQzVDLGdDQUFNQyxZQUFZLEdBQUlELEdBQUcsSUFBSUEsR0FBRyxDQUFDdEMsU0FBWixJQUEwQlYsSUFBL0M7QUFDQWdELDRCQUFBQSxHQUFHLENBQUNYLE9BQUosR0FBYyxFQUFkOztBQUNBLDRCQUFBLE1BQUksQ0FBQzdFLE1BQUwsQ0FBWXFFLE1BQVosQ0FBbUJDLE1BQW5CLENBQTBCbUIsWUFBMUIsRUFBd0NsQiw0QkFBeEMsRUFBeURpQixHQUFHLENBQUNYLE9BQTdEOztBQUNBLGdDQUFNRCxTQUFTLEdBQUcsTUFBSSxDQUFDNUUsTUFBTCxDQUFZc0IsSUFBWixJQUFvQixNQUFJLENBQUN0QixNQUFMLENBQVlzQixJQUFaLENBQWlCc0QsU0FBdkQ7O0FBQ0EsZ0NBQUlBLFNBQUosRUFBZTtBQUNYWSw4QkFBQUEsR0FBRyxDQUFDWCxPQUFKLENBQVlELFNBQVosR0FBd0JBLFNBQXhCO0FBQ0g7O0FBQ0QsbUNBQU87QUFDSEMsOEJBQUFBLE9BQU8sRUFBRVcsR0FBRyxDQUFDWDtBQURWLDZCQUFQO0FBR0gsMkJBWHdCLENBckNZOztBQUFBO0FBcUMvQmEsMEJBQUFBLFVBckMrQjtBQWlEL0JDLDBCQUFBQSxPQWpEK0IsR0FpRHJCLElBakRxQjs7QUFrRC9CQywwQkFBQUEsY0FsRCtCLEdBa0RkLFNBQWpCQSxjQUFpQixRQUFlO0FBQUEsZ0NBQVozRSxLQUFZLFNBQVpBLEtBQVk7QUFDbEMsZ0NBQU00RSxVQUFVLEdBQUcsd0NBQWtCNUUsS0FBbEIsQ0FBbkI7QUFDQSxtQ0FDSTRFLFVBQVUsQ0FBQ0MsSUFBWCxLQUFvQixxQkFBcEIsSUFDR0QsVUFBVSxDQUFDRSxTQUFYLEtBQXlCLGNBRmhDO0FBSUgsMkJBeERvQzs7QUF5RC9CQywwQkFBQUEsTUF6RCtCLEdBeUR0Qk4sVUFBVSxDQUFDTyxNQUFYLENBQWtCLElBQUlDLDJCQUFKLENBQWtCMUIsa0JBQWxCLENBQWxCLENBekRzQjs7QUEwRC9CMkIsMEJBQUFBLGNBMUQrQixHQTBEZCxTQUFqQkEsY0FBaUI7QUFBQSxtQ0FBTVQsVUFBVSxDQUFDTyxNQUFYLENBQWtCLElBQUlHLHdCQUFKLENBQWE7QUFDeERDLDhCQUFBQSxHQUFHLEVBQUU3RSxPQURtRDtBQUV4RGhCLDhCQUFBQSxLQUFLLEVBQUxBO0FBRndELDZCQUFiLENBQWxCLENBQU47QUFBQSwyQkExRGM7O0FBK0RyQywwQkFBQSxNQUFJLENBQUNWLGFBQUwsR0FBcUIsSUFBSXdHLDBCQUFKLENBQWlCO0FBQ2xDQyw0QkFBQUEsS0FBSyxFQUFFLElBQUlDLGtDQUFKLENBQWtCLEVBQWxCLENBRDJCO0FBRWxDQyw0QkFBQUEsSUFBSSxFQUFFZCxPQUFPLEdBQUcsdUJBQU1DLGNBQU4sRUFBc0JJLE1BQXRCLEVBQThCRyxjQUFjLEVBQTVDLENBQUgsR0FBcURILE1BRmhDO0FBR2xDVSw0QkFBQUEsY0FBYyxFQUFFO0FBQ1pDLDhCQUFBQSxVQUFVLEVBQUU7QUFDUkMsZ0NBQUFBLFdBQVcsRUFBRTtBQURMLCtCQURBO0FBSVozRiw4QkFBQUEsS0FBSyxFQUFFO0FBQ0gyRixnQ0FBQUEsV0FBVyxFQUFFO0FBRFY7QUFKSztBQUhrQiwyQkFBakIsQ0FBckI7O0FBL0RxQztBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxpQkFBbkMsSUEyRUhwRSxJQTNFRyxDOzs7bURBNEVDLEtBQUsxQyxhOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7cUJBSVIsS0FBS0EsYTs7Ozs7QUFDQ2tELGdCQUFBQSxNLEdBQVMsS0FBS2xELGE7QUFDcEIscUJBQUtBLGFBQUwsR0FBcUIsSUFBckI7QUFDQWtELGdCQUFBQSxNQUFNLENBQUM2RCxJQUFQOzt1QkFDTTdELE1BQU0sQ0FBQzhELFVBQVAsRTs7Ozs7Ozs7Ozs7Ozs7Ozs7O0VBblE0QkMscUI7Ozs7SUFtUnhDM0csMEI7OztBQU9GLHNDQUFZNEcsTUFBWixFQUFzQ0MsY0FBdEMsRUFBOEQ7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUMxRCxTQUFLRCxNQUFMLEdBQWNBLE1BQWQ7QUFDQSxTQUFLQyxjQUFMLEdBQXNCQSxjQUF0QjtBQUNBLFNBQUtDLFFBQUwsYUFBbUJELGNBQWMsQ0FBQyxDQUFELENBQWQsQ0FBa0JFLFdBQWxCLEVBQW5CLFNBQXFERixjQUFjLENBQUNHLEtBQWYsQ0FBcUIsQ0FBckIsQ0FBckQ7QUFDSDs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7NENBR00zSCxJO0FBQUFBLGtCQUFBQSxJOzs7QUFVRzRILGdCQUFBQSxNLEdBQVM3SCxVQUFVLENBQWlCQyxJQUFqQixFQUF1QixRQUF2QixDO0FBQ25CNkgsZ0JBQUFBLE0sR0FBU0QsTUFBTSxHQUFHQSxNQUFNLENBQUNDLE1BQVYsR0FBbUI3SCxJQUFJLENBQUMsQ0FBRCxDO0FBQ3RDeUMsZ0JBQUFBLE0sR0FBaUJtRixNQUFNLEdBQUdBLE1BQU0sQ0FBQ25GLE1BQVYsR0FBb0J6QyxJQUFJLENBQUMsQ0FBRCxDO0FBQy9DOEgsZ0JBQUFBLE8sR0FBVUYsTUFBTSxHQUFHQSxNQUFNLENBQUNFLE9BQVYsR0FBb0I5SCxJQUFJLENBQUMsQ0FBRCxDO0FBQ3hDK0gsZ0JBQUFBLEssR0FBUUgsTUFBTSxHQUFHQSxNQUFNLENBQUNHLEtBQVYsR0FBa0IvSCxJQUFJLENBQUMsQ0FBRCxDO0FBQ3BDZ0ksZ0JBQUFBLE8sR0FBVUosTUFBTSxHQUFHQSxNQUFNLENBQUNJLE9BQVYsR0FBcUJoSSxJQUFJLENBQUMsQ0FBRCxDO0FBQ3pDdUMsZ0JBQUFBLFUsR0FBYXFGLE1BQU0sR0FBR0EsTUFBTSxDQUFDckYsVUFBVixHQUF1QnZDLElBQUksQ0FBQyxDQUFELEM7bURBQzdDLEtBQUt1SCxNQUFMLENBQVluSCxPQUFaLENBQW9CMEMsS0FBcEIsV0FBNkIsS0FBSzBFLGNBQWxDO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSwrQ0FBMEQsbUJBQU96RSxJQUFQO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUM3REEsNEJBQUFBLElBQUksQ0FBQ0ksTUFBTCxDQUFZLFFBQVosRUFBc0I7QUFDbEIwRSw4QkFBQUEsTUFBTSxFQUFOQSxNQURrQjtBQUVsQnBGLDhCQUFBQSxNQUFNLEVBQU5BLE1BRmtCO0FBR2xCcUYsOEJBQUFBLE9BQU8sRUFBUEEsT0FIa0I7QUFJbEJDLDhCQUFBQSxLQUFLLEVBQUxBLEtBSmtCO0FBS2xCQyw4QkFBQUEsT0FBTyxFQUFQQTtBQUxrQiw2QkFBdEI7QUFPTUMsNEJBQUFBLENBUnVELEdBUW5ELE1BQUksQ0FBQ1QsY0FSOEM7QUFTdkRVLDRCQUFBQSxDQVR1RCxHQVNuRCxNQUFJLENBQUNULFFBVDhDO0FBVXZEeEUsNEJBQUFBLEVBVnVELG1CQVV6Q2dGLENBVnlDLHVCQVUzQkMsQ0FWMkIsZ0dBV3ZERCxDQVh1RCxzRkFXc0J4RixNQVh0QjtBQWF2RFMsNEJBQUFBLFNBYnVELEdBYXhCO0FBQ2pDMkUsOEJBQUFBLE1BQU0sRUFBTkEsTUFEaUM7QUFFakNDLDhCQUFBQSxPQUFPLEVBQVBBLE9BRmlDO0FBR2pDQyw4QkFBQUEsS0FBSyxFQUFMQTtBQUhpQyw2QkFid0I7O0FBa0I3RCxnQ0FBSUMsT0FBSixFQUFhO0FBQ1Q5RSw4QkFBQUEsU0FBUyxDQUFDOEUsT0FBVixHQUFvQkcsSUFBSSxDQUFDQyxHQUFMLENBQVN2SSxXQUFULEVBQXNCbUksT0FBdEIsQ0FBcEI7QUFDSDs7QUFwQjREO0FBQUEsbUNBcUIvQyxNQUFJLENBQUNULE1BQUwsQ0FBWWxFLFlBQVosQ0FBeUJKLEVBQXpCLEVBQTZCQyxTQUE3QixFQUF3Q0gsSUFBeEMsQ0FyQitDOztBQUFBO0FBQUEsNENBcUJLa0YsQ0FyQkw7QUFBQSwrRUFxQkFwRyxJQXJCQTs7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxtQkFBMUQ7O0FBQUE7QUFBQTtBQUFBO0FBQUEscUJBc0JKVSxVQXRCSSxDOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Z0NBaUNLO0FBQUE7O0FBQUEseUNBUFR2QyxJQU9TO0FBUFRBLFFBQUFBLElBT1M7QUFBQTs7QUFDWixVQUFNNEgsTUFBTSxHQUFHN0gsVUFBVSxDQUFxQkMsSUFBckIsRUFBMkIsUUFBM0IsQ0FBekI7QUFDQSxVQUFNNkgsTUFBTSxHQUFHRCxNQUFNLEdBQUdBLE1BQU0sQ0FBQ0MsTUFBVixHQUFtQjdILElBQUksQ0FBQyxDQUFELENBQTVDO0FBQ0EsVUFBTXlDLE1BQWMsR0FBR21GLE1BQU0sR0FBR0EsTUFBTSxDQUFDbkYsTUFBVixHQUFvQnpDLElBQUksQ0FBQyxDQUFELENBQXJEO0FBQ0EsVUFBTXFJLFVBQVUsR0FBR1QsTUFBTSxHQUFHQSxNQUFNLENBQUNTLFVBQVYsR0FBd0JySSxJQUFJLENBQUMsQ0FBRCxDQUFyRDtBQUNBLFVBQU13RixPQUFPLEdBQUdvQyxNQUFNLEdBQUdBLE1BQU0sQ0FBQ3BDLE9BQVYsR0FBcUJ4RixJQUFJLENBQUMsQ0FBRCxDQUEvQztBQUNBLFVBQU0rQyxJQUFJLEdBQUcsS0FBS3dFLE1BQUwsQ0FBWWhILE1BQVosQ0FBbUJxRSxNQUFuQixDQUEwQjBELFNBQTFCLENBQW9DLGdDQUFwQyxDQUFiO0FBQ0F2RixNQUFBQSxJQUFJLENBQUNJLE1BQUwsQ0FBWW9GLGtCQUFLQyxTQUFqQixFQUE0QixRQUE1QjtBQUNBLFVBQU1DLElBQUksMEJBQW1CLEtBQUtqQixjQUF4Qix1QkFBbUQsS0FBS0MsUUFBeEQsb0NBQ0osS0FBS0QsY0FERCxpQ0FDc0MvRSxNQUR0QyxrQkFBVjtBQUdBLFVBQU1qQixLQUFLLEdBQUcsNEJBQUksQ0FBQ2lILElBQUQsQ0FBSixDQUFkO0FBQ0EsVUFBSUMsWUFBWSxHQUFHLElBQW5CO0FBQ0E7QUFBQTtBQUFBLG1DQUFDO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSx1QkFFNEIsTUFBSSxDQUFDbkIsTUFBTCxDQUFZNUQscUJBQVosQ0FBa0NaLElBQWxDLENBRjVCOztBQUFBO0FBRWFRLGdCQUFBQSxNQUZiO0FBR2FvRixnQkFBQUEsVUFIYixHQUcwQnBGLE1BQU0sQ0FBQ3FGLFNBQVAsQ0FBaUI7QUFDaENwSCxrQkFBQUEsS0FBSyxFQUFMQSxLQURnQztBQUVoQzBCLGtCQUFBQSxTQUFTLEVBQUU7QUFDUDJFLG9CQUFBQSxNQUFNLEVBQU5BO0FBRE87QUFGcUIsaUJBQWpCLENBSDFCO0FBU09hLGdCQUFBQSxZQUFZLEdBQUdDLFVBQVUsQ0FBQ0MsU0FBWCxDQUFxQixVQUFDN0UsT0FBRCxFQUFhO0FBQzdDc0Usa0JBQUFBLFVBQVUsQ0FBQyxlQUFELEVBQWtCdEUsT0FBTyxDQUFDbEMsSUFBUixDQUFhLE1BQUksQ0FBQzJGLGNBQWxCLENBQWxCLENBQVY7QUFDSCxpQkFGYyxDQUFmO0FBVFA7QUFBQTs7QUFBQTtBQUFBO0FBQUE7QUFhT3pFLGdCQUFBQSxJQUFJLENBQUN3QyxHQUFMLENBQVM7QUFDTHNELGtCQUFBQSxLQUFLLEVBQUUsUUFERjtBQUVMQyxrQkFBQUEsT0FBTztBQUZGLGlCQUFUOztBQUlBLG9CQUFJdEQsT0FBSixFQUFhO0FBQ1RBLGtCQUFBQSxPQUFPLGVBQVA7QUFDSCxpQkFGRCxNQUVPO0FBQ0hGLGtCQUFBQSxPQUFPLENBQUN5RCxLQUFSLENBQWMsK0JBQWQ7QUFDSDs7QUFyQlI7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsT0FBRDtBQXdCQSxhQUFPO0FBQ0hDLFFBQUFBLFdBQVcsRUFBRSx1QkFBTTtBQUNmLGNBQUlOLFlBQUosRUFBa0I7QUFDZEEsWUFBQUEsWUFBWSxDQUFDTSxXQUFiO0FBQ0FqRyxZQUFBQSxJQUFJLENBQUNrRyxNQUFMO0FBQ0g7QUFDSjtBQU5FLE9BQVA7QUFRSDs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs2Q0FHTWpKLEk7QUFBQUEsa0JBQUFBLEk7OztBQVFHNEgsZ0JBQUFBLE0sR0FBUzdILFVBQVUsQ0FBbUJDLElBQW5CLEVBQXlCLFFBQXpCLEM7QUFDbkI2SCxnQkFBQUEsTSxHQUFTRCxNQUFNLEdBQUdBLE1BQU0sQ0FBQ0MsTUFBVixHQUFtQjdILElBQUksQ0FBQyxDQUFELEM7QUFDdEN5QyxnQkFBQUEsTSxHQUFpQm1GLE1BQU0sR0FBR0EsTUFBTSxDQUFDbkYsTUFBVixHQUFvQnpDLElBQUksQ0FBQyxDQUFELEM7QUFDL0NnSSxnQkFBQUEsTyxHQUFVLENBQUNKLE1BQU0sR0FBR0EsTUFBTSxDQUFDSSxPQUFWLEdBQW9CaEksSUFBSSxDQUFDLENBQUQsQ0FBL0IsS0FBdUNGLGU7QUFDakR5QyxnQkFBQUEsVSxHQUFhcUYsTUFBTSxHQUFHQSxNQUFNLENBQUNyRixVQUFWLEdBQXVCdkMsSUFBSSxDQUFDLENBQUQsQzs7dUJBQ2pDLEtBQUt3QixLQUFMLENBQVc7QUFDMUJxRyxrQkFBQUEsTUFBTSxFQUFOQSxNQUQwQjtBQUUxQnBGLGtCQUFBQSxNQUFNLEVBQU5BLE1BRjBCO0FBRzFCdUYsa0JBQUFBLE9BQU8sRUFBUEEsT0FIMEI7QUFJMUJ6RixrQkFBQUEsVUFBVSxFQUFWQTtBQUowQixpQkFBWCxDOzs7QUFBYjJHLGdCQUFBQSxJOztzQkFNRkEsSUFBSSxDQUFDaEosTUFBTCxHQUFjLEM7Ozs7O21EQUNQZ0osSUFBSSxDQUFDLENBQUQsQzs7O3NCQUVUMUUsMEJBQWUyRSxjQUFmLEU7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBSWRoSixnQkFBZ0IsQ0FBQ2lKLFVBQWpCLEdBQThCLGtCQUE5QiIsInNvdXJjZXNDb250ZW50IjpbIi8qXG4gKiBDb3B5cmlnaHQgMjAxOC0yMDIwIFRPTiBERVYgU09MVVRJT05TIExURC5cbiAqXG4gKiBMaWNlbnNlZCB1bmRlciB0aGUgU09GVFdBUkUgRVZBTFVBVElPTiBMaWNlbnNlICh0aGUgXCJMaWNlbnNlXCIpOyB5b3UgbWF5IG5vdCB1c2VcbiAqIHRoaXMgZmlsZSBleGNlcHQgaW4gY29tcGxpYW5jZSB3aXRoIHRoZSBMaWNlbnNlLiAgWW91IG1heSBvYnRhaW4gYSBjb3B5IG9mIHRoZVxuICogTGljZW5zZSBhdDpcbiAqXG4gKiBodHRwOi8vd3d3LnRvbi5kZXYvbGljZW5zZXNcbiAqXG4gKiBVbmxlc3MgcmVxdWlyZWQgYnkgYXBwbGljYWJsZSBsYXcgb3IgYWdyZWVkIHRvIGluIHdyaXRpbmcsIHNvZnR3YXJlXG4gKiBkaXN0cmlidXRlZCB1bmRlciB0aGUgTGljZW5zZSBpcyBkaXN0cmlidXRlZCBvbiBhbiBcIkFTIElTXCIgQkFTSVMsXG4gKiBXSVRIT1VUIFdBUlJBTlRJRVMgT1IgQ09ORElUSU9OUyBPRiBBTlkgS0lORCwgZWl0aGVyIGV4cHJlc3Mgb3IgaW1wbGllZC5cbiAqIFNlZSB0aGUgTGljZW5zZSBmb3IgdGhlIHNwZWNpZmljIFRPTiBERVYgc29mdHdhcmUgZ292ZXJuaW5nIHBlcm1pc3Npb25zIGFuZFxuICogbGltaXRhdGlvbnMgdW5kZXIgdGhlIExpY2Vuc2UuXG4gKi9cblxuLy8gQGZsb3dcblxuaW1wb3J0IHsgSW5NZW1vcnlDYWNoZSB9IGZyb20gJ2Fwb2xsby1jYWNoZS1pbm1lbW9yeSc7XG5pbXBvcnQgeyBBcG9sbG9DbGllbnQgfSBmcm9tICdhcG9sbG8tY2xpZW50JztcbmltcG9ydCB7IHNwbGl0IH0gZnJvbSAnYXBvbGxvLWxpbmsnO1xuaW1wb3J0IHsgSHR0cExpbmsgfSBmcm9tICdhcG9sbG8tbGluay1odHRwJztcbmltcG9ydCB7IFdlYlNvY2tldExpbmsgfSBmcm9tICdhcG9sbG8tbGluay13cyc7XG5pbXBvcnQgeyBnZXRNYWluRGVmaW5pdGlvbiB9IGZyb20gJ2Fwb2xsby11dGlsaXRpZXMnO1xuaW1wb3J0IGdxbCBmcm9tICdncmFwaHFsLXRhZyc7XG5pbXBvcnQgeyBTdWJzY3JpcHRpb25DbGllbnQgfSBmcm9tICdzdWJzY3JpcHRpb25zLXRyYW5zcG9ydC13cyc7XG5pbXBvcnQgeyBzZXRDb250ZXh0IH0gZnJvbSAnYXBvbGxvLWxpbmstY29udGV4dCc7XG5pbXBvcnQge1xuICAgIEZPUk1BVF9URVhUX01BUCwgVGFncywgU3BhbiwgU3BhbkNvbnRleHQsXG59IGZyb20gJ29wZW50cmFjaW5nJztcbmltcG9ydCB0eXBlIHtcbiAgICBUT05RdWVyaWVzLFxuICAgIFRPTlFDb2xsZWN0aW9uLFxuICAgIFN1YnNjcmlwdGlvbixcbiAgICBUT05RdWVyeVBhcmFtcyxcbiAgICBUT05TdWJzY3JpYmVQYXJhbXMsXG4gICAgVE9OV2FpdEZvclBhcmFtcyxcbn0gZnJvbSAnLi4vLi4vdHlwZXMnO1xuaW1wb3J0IHsgVE9OQ2xpZW50LCBUT05DbGllbnRFcnJvciB9IGZyb20gJy4uL1RPTkNsaWVudCc7XG5pbXBvcnQgdHlwZSB7IFRPTk1vZHVsZUNvbnRleHQgfSBmcm9tICcuLi9UT05Nb2R1bGUnO1xuaW1wb3J0IHsgVE9OTW9kdWxlIH0gZnJvbSAnLi4vVE9OTW9kdWxlJztcbmltcG9ydCBUT05Db25maWdNb2R1bGUsIHsgVVJMUGFydHMgfSBmcm9tICcuL1RPTkNvbmZpZ01vZHVsZSc7XG5cblxuZXhwb3J0IHR5cGUgUmVxdWVzdCA9IHtcbiAgICBpZDogc3RyaW5nLFxuICAgIGJvZHk6IHN0cmluZyxcbn1cblxuZXhwb3J0IGNvbnN0IE1BWF9USU1FT1VUID0gMjE0NzQ4MzY0NztcbmV4cG9ydCBjb25zdCBERUZBVUxUX1RJTUVPVVQgPSA0MF8wMDA7XG5cbmZ1bmN0aW9uIGZpbmRQYXJhbXM8VD4oYXJnczogYW55W10sIHJlcXVpcmVkUGFyYW1OYW1lOiBzdHJpbmcpOiA/VCB7XG4gICAgcmV0dXJuIChhcmdzLmxlbmd0aCA9PT0gMSkgJiYgKHJlcXVpcmVkUGFyYW1OYW1lIGluIGFyZ3NbMF0pID8gYXJnc1swXSA6IG51bGw7XG59XG5cbmV4cG9ydCBkZWZhdWx0IGNsYXNzIFRPTlF1ZXJpZXNNb2R1bGUgZXh0ZW5kcyBUT05Nb2R1bGUgaW1wbGVtZW50cyBUT05RdWVyaWVzIHtcbiAgICBjb25maWc6IFRPTkNvbmZpZ01vZHVsZTtcblxuICAgIG92ZXJyaWRlV3NVcmw6ID9zdHJpbmc7XG5cbiAgICBjb25zdHJ1Y3Rvcihjb250ZXh0OiBUT05Nb2R1bGVDb250ZXh0KSB7XG4gICAgICAgIHN1cGVyKGNvbnRleHQpO1xuICAgICAgICB0aGlzLmdyYXBocWxDbGllbnQgPSBudWxsO1xuICAgICAgICB0aGlzLm92ZXJyaWRlV3NVcmwgPSBudWxsO1xuICAgIH1cblxuICAgIGFzeW5jIHNldHVwKCkge1xuICAgICAgICB0aGlzLmNvbmZpZyA9IHRoaXMuY29udGV4dC5nZXRNb2R1bGUoVE9OQ29uZmlnTW9kdWxlKTtcbiAgICAgICAgdGhpcy50cmFuc2FjdGlvbnMgPSBuZXcgVE9OUXVlcmllc01vZHVsZUNvbGxlY3Rpb24odGhpcywgJ3RyYW5zYWN0aW9ucycpO1xuICAgICAgICB0aGlzLm1lc3NhZ2VzID0gbmV3IFRPTlF1ZXJpZXNNb2R1bGVDb2xsZWN0aW9uKHRoaXMsICdtZXNzYWdlcycpO1xuICAgICAgICB0aGlzLmJsb2NrcyA9IG5ldyBUT05RdWVyaWVzTW9kdWxlQ29sbGVjdGlvbih0aGlzLCAnYmxvY2tzJyk7XG4gICAgICAgIHRoaXMuYWNjb3VudHMgPSBuZXcgVE9OUXVlcmllc01vZHVsZUNvbGxlY3Rpb24odGhpcywgJ2FjY291bnRzJyk7XG4gICAgfVxuXG4gICAgYXN5bmMgZGV0ZWN0UmVkaXJlY3QoZmV0Y2g6IGFueSwgc291cmNlVXJsOiBzdHJpbmcpOiBQcm9taXNlPHN0cmluZz4ge1xuICAgICAgICBjb25zdCByZXNwb25zZSA9IGF3YWl0IGZldGNoKHNvdXJjZVVybCk7XG4gICAgICAgIGlmIChyZXNwb25zZS5yZWRpcmVjdGVkID09PSB0cnVlKSB7XG4gICAgICAgICAgICByZXR1cm4gcmVzcG9uc2UudXJsO1xuICAgICAgICB9XG4gICAgICAgIGlmIChyZXNwb25zZS5yZWRpcmVjdGVkID09PSBmYWxzZSkge1xuICAgICAgICAgICAgcmV0dXJuICcnO1xuICAgICAgICB9XG4gICAgICAgIGNvbnN0IHNvdXJjZUxvY2F0aW9uID0gVVJMUGFydHMuZml4KHNvdXJjZVVybCwgKHBhcnRzKSA9PiB7XG4gICAgICAgICAgICBwYXJ0cy5xdWVyeSA9ICcnO1xuICAgICAgICB9KVxuICAgICAgICAgICAgLnRvTG93ZXJDYXNlKCk7XG4gICAgICAgIGNvbnN0IHJlc3BvbnNlTG9jYXRpb24gPSBVUkxQYXJ0cy5maXgocmVzcG9uc2UudXJsLCAocGFydHMpID0+IHtcbiAgICAgICAgICAgIHBhcnRzLnF1ZXJ5ID0gJyc7XG4gICAgICAgIH0pXG4gICAgICAgICAgICAudG9Mb3dlckNhc2UoKTtcbiAgICAgICAgcmV0dXJuIHJlc3BvbnNlTG9jYXRpb24gIT09IHNvdXJjZUxvY2F0aW9uID8gcmVzcG9uc2UudXJsIDogJyc7XG4gICAgfVxuXG4gICAgYXN5bmMgZ2V0Q2xpZW50Q29uZmlnKCkge1xuICAgICAgICBjb25zdCB7IGNvbmZpZyB9ID0gdGhpcztcbiAgICAgICAgY29uc3QgeyBjbGllbnRQbGF0Zm9ybSB9ID0gVE9OQ2xpZW50O1xuICAgICAgICBpZiAoIWNvbmZpZy5kYXRhIHx8ICFjbGllbnRQbGF0Zm9ybSkge1xuICAgICAgICAgICAgdGhyb3cgRXJyb3IoJ1RPTiBDbGllbnQgZG9lcyBub3QgY29uZmlndXJlZCcpO1xuICAgICAgICB9XG4gICAgICAgIGxldCBodHRwVXJsID0gY29uZmlnLnF1ZXJpZXNIdHRwVXJsKCk7XG4gICAgICAgIGxldCB3c1VybCA9IGNvbmZpZy5xdWVyaWVzV3NVcmwoKTtcbiAgICAgICAgY29uc3QgeyBmZXRjaCB9ID0gY2xpZW50UGxhdGZvcm07XG4gICAgICAgIGNvbnN0IHJlZGlyZWN0ZWQgPSBhd2FpdCB0aGlzLmRldGVjdFJlZGlyZWN0KFxuICAgICAgICAgICAgZmV0Y2gsXG4gICAgICAgICAgICBgJHtodHRwVXJsfT9xdWVyeT0lN0JpbmZvJTdCdmVyc2lvbiU3RCU3RGAsXG4gICAgICAgICk7XG4gICAgICAgIGlmIChyZWRpcmVjdGVkICE9PSAnJykge1xuICAgICAgICAgICAgY29uc3QgbG9jYXRpb24gPSBVUkxQYXJ0cy5maXgocmVkaXJlY3RlZCwgKHBhcnRzKSA9PiB7XG4gICAgICAgICAgICAgICAgcGFydHMucXVlcnkgPSAnJztcbiAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgaWYgKGxvY2F0aW9uKSB7XG4gICAgICAgICAgICAgICAgaHR0cFVybCA9IGxvY2F0aW9uO1xuICAgICAgICAgICAgICAgIHdzVXJsID0gbG9jYXRpb25cbiAgICAgICAgICAgICAgICAgICAgLnJlcGxhY2UoL15odHRwczpcXC9cXC8vZ2ksICd3c3M6Ly8nKVxuICAgICAgICAgICAgICAgICAgICAucmVwbGFjZSgvXmh0dHA6XFwvXFwvL2dpLCAnd3M6Ly8nKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgICByZXR1cm4ge1xuICAgICAgICAgICAgaHR0cFVybCxcbiAgICAgICAgICAgIHdzVXJsLFxuICAgICAgICAgICAgZmV0Y2gsXG4gICAgICAgICAgICBXZWJTb2NrZXQ6IGNsaWVudFBsYXRmb3JtLldlYlNvY2tldCxcbiAgICAgICAgfTtcbiAgICB9XG5cbiAgICBhc3luYyBnZXRBY2NvdW50c0NvdW50KHBhcmVudFNwYW4/OiAoU3BhbiB8IFNwYW5Db250ZXh0KSk6IFByb21pc2U8bnVtYmVyPiB7XG4gICAgICAgIGNvbnN0IHJlc3VsdCA9IGF3YWl0IHRoaXMucXVlcnkoJ3F1ZXJ5e2dldEFjY291bnRzQ291bnR9JywgdW5kZWZpbmVkLCBwYXJlbnRTcGFuKTtcbiAgICAgICAgcmV0dXJuIHJlc3VsdC5kYXRhLmdldEFjY291bnRzQ291bnQ7XG4gICAgfVxuXG4gICAgYXN5bmMgZ2V0VHJhbnNhY3Rpb25zQ291bnQocGFyZW50U3Bhbj86IChTcGFuIHwgU3BhbkNvbnRleHQpKTogUHJvbWlzZTxudW1iZXI+IHtcbiAgICAgICAgY29uc3QgcmVzdWx0ID0gYXdhaXQgdGhpcy5xdWVyeSgncXVlcnl7Z2V0VHJhbnNhY3Rpb25zQ291bnR9JywgdW5kZWZpbmVkLCBwYXJlbnRTcGFuKTtcbiAgICAgICAgcmV0dXJuIHJlc3VsdC5kYXRhLmdldFRyYW5zYWN0aW9uc0NvdW50O1xuICAgIH1cblxuICAgIGFzeW5jIGdldEFjY291bnRzVG90YWxCYWxhbmNlKHBhcmVudFNwYW4/OiAoU3BhbiB8IFNwYW5Db250ZXh0KSk6IFByb21pc2U8c3RyaW5nPiB7XG4gICAgICAgIGNvbnN0IHJlc3VsdCA9IGF3YWl0IHRoaXMucXVlcnkoJ3F1ZXJ5e2dldEFjY291bnRzVG90YWxCYWxhbmNlfScsIHVuZGVmaW5lZCwgcGFyZW50U3Bhbik7XG4gICAgICAgIHJldHVybiByZXN1bHQuZGF0YS5nZXRBY2NvdW50c1RvdGFsQmFsYW5jZTtcbiAgICB9XG5cbiAgICBhc3luYyBwb3N0UmVxdWVzdHMocmVxdWVzdHM6IFJlcXVlc3RbXSwgcGFyZW50U3Bhbj86IChTcGFuIHwgU3BhbkNvbnRleHQpKTogUHJvbWlzZTxhbnk+IHtcbiAgICAgICAgcmV0dXJuIHRoaXMuY29udGV4dC50cmFjZSgncXVlcmllcy5wb3N0UmVxdWVzdHMnLCBhc3luYyAoc3BhbikgPT4ge1xuICAgICAgICAgICAgcmV0dXJuIHRoaXMuZ3JhcGhxbE11dGF0aW9uKGBtdXRhdGlvbiBwb3N0UmVxdWVzdHMoJHJlcXVlc3RzOiBbUmVxdWVzdF0pIHtcbiAgICAgICAgICAgICAgICBwb3N0UmVxdWVzdHMocmVxdWVzdHM6ICRyZXF1ZXN0cylcbiAgICAgICAgICAgIH1gLCB7XG4gICAgICAgICAgICAgICAgcmVxdWVzdHMsXG4gICAgICAgICAgICB9LCBzcGFuKTtcbiAgICAgICAgfSwgcGFyZW50U3Bhbik7XG4gICAgfVxuXG4gICAgYXN5bmMgbXV0YXRpb24oXG4gICAgICAgIHFsOiBzdHJpbmcsXG4gICAgICAgIHZhcmlhYmxlczogeyBbc3RyaW5nXTogYW55IH0gPSB7fSxcbiAgICAgICAgcGFyZW50U3Bhbj86IChTcGFuIHwgU3BhbkNvbnRleHQpLFxuICAgICk6IFByb21pc2U8YW55PiB7XG4gICAgICAgIHJldHVybiB0aGlzLmNvbnRleHQudHJhY2UoJ3F1ZXJpZXMubXV0YXRpb24nLCBhc3luYyAoc3BhbjogU3BhbikgPT4ge1xuICAgICAgICAgICAgc3Bhbi5zZXRUYWcoJ3BhcmFtcycsIHtcbiAgICAgICAgICAgICAgICBtdXRhdGlvbjogcWwsXG4gICAgICAgICAgICAgICAgdmFyaWFibGVzLFxuICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICByZXR1cm4gdGhpcy5ncmFwaHFsTXV0YXRpb24ocWwsIHZhcmlhYmxlcywgc3Bhbik7XG4gICAgICAgIH0sIHBhcmVudFNwYW4pO1xuICAgIH1cblxuICAgIGFzeW5jIHF1ZXJ5KFxuICAgICAgICBxbDogc3RyaW5nLFxuICAgICAgICB2YXJpYWJsZXM6IHsgW3N0cmluZ106IGFueSB9ID0ge30sXG4gICAgICAgIHBhcmVudFNwYW4/OiAoU3BhbiB8IFNwYW5Db250ZXh0KSxcbiAgICApOiBQcm9taXNlPGFueT4ge1xuICAgICAgICByZXR1cm4gdGhpcy5jb250ZXh0LnRyYWNlKCdxdWVyaWVzLnF1ZXJ5JywgYXN5bmMgKHNwYW46IFNwYW4pID0+IHtcbiAgICAgICAgICAgIHNwYW4uc2V0VGFnKCdwYXJhbXMnLCB7XG4gICAgICAgICAgICAgICAgcXVlcnk6IHFsLFxuICAgICAgICAgICAgICAgIHZhcmlhYmxlcyxcbiAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgcmV0dXJuIHRoaXMuZ3JhcGhxbFF1ZXJ5KHFsLCB2YXJpYWJsZXMsIHNwYW4pO1xuICAgICAgICB9LCBwYXJlbnRTcGFuKTtcbiAgICB9XG5cbiAgICBhc3luYyBncmFwaHFsTXV0YXRpb24ocWw6IHN0cmluZywgdmFyaWFibGVzOiB7IFtzdHJpbmddOiBhbnkgfSA9IHt9LCBzcGFuOiBTcGFuKTogUHJvbWlzZTxhbnk+IHtcbiAgICAgICAgY29uc3QgbXV0YXRpb24gPSBncWwoW3FsXSk7XG4gICAgICAgIHJldHVybiB0aGlzLmdyYXBoUWwoKGNsaWVudCkgPT4gY2xpZW50Lm11dGF0ZSh7XG4gICAgICAgICAgICBtdXRhdGlvbixcbiAgICAgICAgICAgIHZhcmlhYmxlcyxcbiAgICAgICAgICAgIGNvbnRleHQ6IHtcbiAgICAgICAgICAgICAgICB0cmFjZVNwYW46IHNwYW4sXG4gICAgICAgICAgICB9LFxuICAgICAgICB9KSk7XG4gICAgfVxuXG4gICAgYXN5bmMgZ3JhcGhxbFF1ZXJ5KHFsOiBzdHJpbmcsIHZhcmlhYmxlczogeyBbc3RyaW5nXTogYW55IH0gPSB7fSwgc3BhbjogU3Bhbik6IFByb21pc2U8YW55PiB7XG4gICAgICAgIGNvbnN0IHF1ZXJ5ID0gZ3FsKFtxbF0pO1xuICAgICAgICByZXR1cm4gdGhpcy5ncmFwaFFsKChjbGllbnQpID0+IGNsaWVudC5xdWVyeSh7XG4gICAgICAgICAgICBxdWVyeSxcbiAgICAgICAgICAgIHZhcmlhYmxlcyxcbiAgICAgICAgICAgIGNvbnRleHQ6IHtcbiAgICAgICAgICAgICAgICB0cmFjZVNwYW46IHNwYW4sXG4gICAgICAgICAgICB9LFxuICAgICAgICB9KSwgc3Bhbik7XG4gICAgfVxuXG4gICAgYXN5bmMgZ3JhcGhRbChyZXF1ZXN0OiAoY2xpZW50OiBBcG9sbG9DbGllbnQpID0+IFByb21pc2U8YW55Piwgc3BhbjogU3Bhbik6IFByb21pc2U8YW55PiB7XG4gICAgICAgIGNvbnN0IGNsaWVudCA9IGF3YWl0IHRoaXMuZ3JhcGhxbENsaWVudFJlcXVpcmVkKHNwYW4pO1xuICAgICAgICB0cnkge1xuICAgICAgICAgICAgcmV0dXJuIGF3YWl0IHJlcXVlc3QoY2xpZW50KTtcbiAgICAgICAgfSBjYXRjaCAoZXJyb3IpIHtcbiAgICAgICAgICAgIGNvbnN0IGdxbEVyciA9IGVycm9yLmdyYXBoUUxFcnJvcnMgJiYgZXJyb3IuZ3JhcGhRTEVycm9yc1swXTtcbiAgICAgICAgICAgIGlmIChncWxFcnIpIHtcbiAgICAgICAgICAgICAgICBjb25zdCBjbGllbnRFcnIgPSBuZXcgRXJyb3IoZ3FsRXJyLm1lc3NhZ2UpO1xuICAgICAgICAgICAgICAgIGNvbnN0IGdxbEV4YyA9IChncWxFcnIuZXh0ZW5zaW9ucyAmJiBncWxFcnIuZXh0ZW5zaW9ucy5leGNlcHRpb24pIHx8IHt9O1xuICAgICAgICAgICAgICAgIChjbGllbnRFcnI6IGFueSkubnVtYmVyID0gZ3FsRXhjLmNvZGUgfHwgMDtcbiAgICAgICAgICAgICAgICAoY2xpZW50RXJyOiBhbnkpLmNvZGUgPSBncWxFeGMuY29kZSB8fCAwO1xuICAgICAgICAgICAgICAgIChjbGllbnRFcnI6IGFueSkuc291cmNlID0gZ3FsRXhjLnNvdXJjZSB8fCAnY2xpZW50JztcbiAgICAgICAgICAgICAgICB0aHJvdyBjbGllbnRFcnI7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBjb25zdCBlcnJvcnMgPSBlcnJvclxuICAgICAgICAgICAgICAgICYmIGVycm9yLm5ldHdvcmtFcnJvclxuICAgICAgICAgICAgICAgICYmIGVycm9yLm5ldHdvcmtFcnJvci5yZXN1bHRcbiAgICAgICAgICAgICAgICAmJiBlcnJvci5uZXR3b3JrRXJyb3IucmVzdWx0LmVycm9ycztcbiAgICAgICAgICAgIGlmIChlcnJvcnMpIHtcbiAgICAgICAgICAgICAgICB0aHJvdyBUT05DbGllbnRFcnJvci5xdWVyeUZhaWxlZChlcnJvcnMpO1xuICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgICB0aHJvdyBlcnJvcjtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgIH1cblxuICAgIGFzeW5jIGdyYXBocWxDbGllbnRSZXF1aXJlZChzcGFuOiBTcGFuKTogUHJvbWlzZTxBcG9sbG9DbGllbnQ+IHtcbiAgICAgICAgaWYgKHRoaXMuZ3JhcGhxbENsaWVudCkge1xuICAgICAgICAgICAgcmV0dXJuIHRoaXMuZ3JhcGhxbENsaWVudDtcbiAgICAgICAgfVxuICAgICAgICBhd2FpdCB0aGlzLmNvbnRleHQudHJhY2UoJ3NldHVwIGNsaWVudCcsIGFzeW5jICgpID0+IHtcbiAgICAgICAgICAgIGNvbnN0IHtcbiAgICAgICAgICAgICAgICBodHRwVXJsLFxuICAgICAgICAgICAgICAgIHdzVXJsLFxuICAgICAgICAgICAgICAgIGZldGNoLFxuICAgICAgICAgICAgICAgIFdlYlNvY2tldCxcbiAgICAgICAgICAgIH0gPSBhd2FpdCB0aGlzLmdldENsaWVudENvbmZpZygpO1xuICAgICAgICAgICAgY29uc3Qgc3Vic09wdGlvbnMgPSB0aGlzLmNvbmZpZy50cmFjZXIuaW5qZWN0KHNwYW4sIEZPUk1BVF9URVhUX01BUCwge30pO1xuICAgICAgICAgICAgY29uc3Qgc3Vic2NyaXB0aW9uQ2xpZW50ID0gbmV3IFN1YnNjcmlwdGlvbkNsaWVudChcbiAgICAgICAgICAgICAgICB3c1VybCxcbiAgICAgICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgICAgIHJlY29ubmVjdDogdHJ1ZSxcbiAgICAgICAgICAgICAgICAgICAgY29ubmVjdGlvblBhcmFtczogKCkgPT4gKHtcbiAgICAgICAgICAgICAgICAgICAgICAgIGFjY2Vzc0tleTogdGhpcy5jb25maWcuZGF0YSAmJiB0aGlzLmNvbmZpZy5kYXRhLmFjY2Vzc0tleSxcbiAgICAgICAgICAgICAgICAgICAgICAgIGhlYWRlcnM6IHN1YnNPcHRpb25zLFxuICAgICAgICAgICAgICAgICAgICB9KSxcbiAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgIFdlYlNvY2tldCxcbiAgICAgICAgICAgICk7XG4gICAgICAgICAgICBzdWJzY3JpcHRpb25DbGllbnQub25SZWNvbm5lY3RlZCgoKSA9PiB7XG4gICAgICAgICAgICAgICAgY29uc29sZS5sb2coJz4+PicsICdXZWJTb2NrZXQgUmVjb25uZWN0ZWQnKTtcbiAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgc3Vic2NyaXB0aW9uQ2xpZW50Lm9uRXJyb3IoKGV2dCkgPT4ge1xuICAgICAgICAgICAgICAgIGNvbnNvbGUubG9nKCc+Pj4nLCAnV2ViU29ja2V0IEVycm9yJyk7XG4gICAgICAgICAgICAgICAgY29uc29sZS5sb2coJz4+PicsIGV2dC50YXJnZXQudXJsKTtcbiAgICAgICAgICAgICAgICAvLyAoYXN5bmMgKCkgPT4ge1xuICAgICAgICAgICAgICAgIC8vICAgICB0cnkge1xuICAgICAgICAgICAgICAgIC8vICAgICAgICAgLy8gY29uc3QgbmV3V3NVcmwgPSAoYXdhaXQgdGhpcy5nZXRDbGllbnRDb25maWcoKSkud3NVcmw7XG4gICAgICAgICAgICAgICAgLy8gICAgIH0gY2F0Y2ggKGVycikge1xuICAgICAgICAgICAgICAgIC8vICAgICAgICAgY29uc29sZS5sb2coJz4+PicsIGVycik7XG4gICAgICAgICAgICAgICAgLy8gICAgIH1cbiAgICAgICAgICAgICAgICAvLyB9KSgpO1xuICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICBzdWJzY3JpcHRpb25DbGllbnQubWF4Q29ubmVjdFRpbWVHZW5lcmF0b3IuZHVyYXRpb24gPSAoKSA9PiB7XG4gICAgICAgICAgICAgICAgcmV0dXJuIHN1YnNjcmlwdGlvbkNsaWVudC5tYXhDb25uZWN0VGltZUdlbmVyYXRvci5tYXg7XG4gICAgICAgICAgICB9O1xuXG4gICAgICAgICAgICBjb25zdCB0cmFjZXJMaW5rID0gYXdhaXQgc2V0Q29udGV4dCgoXywgcmVxKSA9PiB7XG4gICAgICAgICAgICAgICAgY29uc3QgcmVzb2x2ZWRTcGFuID0gKHJlcSAmJiByZXEudHJhY2VTcGFuKSB8fCBzcGFuO1xuICAgICAgICAgICAgICAgIHJlcS5oZWFkZXJzID0ge307XG4gICAgICAgICAgICAgICAgdGhpcy5jb25maWcudHJhY2VyLmluamVjdChyZXNvbHZlZFNwYW4sIEZPUk1BVF9URVhUX01BUCwgcmVxLmhlYWRlcnMpO1xuICAgICAgICAgICAgICAgIGNvbnN0IGFjY2Vzc0tleSA9IHRoaXMuY29uZmlnLmRhdGEgJiYgdGhpcy5jb25maWcuZGF0YS5hY2Nlc3NLZXk7XG4gICAgICAgICAgICAgICAgaWYgKGFjY2Vzc0tleSkge1xuICAgICAgICAgICAgICAgICAgICByZXEuaGVhZGVycy5hY2Nlc3NLZXkgPSBhY2Nlc3NLZXk7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIHJldHVybiB7XG4gICAgICAgICAgICAgICAgICAgIGhlYWRlcnM6IHJlcS5oZWFkZXJzLFxuICAgICAgICAgICAgICAgIH07XG4gICAgICAgICAgICB9KTtcbiAgICAgICAgICAgIGNvbnN0IHVzZUh0dHAgPSB0cnVlO1xuICAgICAgICAgICAgY29uc3QgaXNTdWJzY3JpcHRpb24gPSAoeyBxdWVyeSB9KSA9PiB7XG4gICAgICAgICAgICAgICAgY29uc3QgZGVmaW5pdGlvbiA9IGdldE1haW5EZWZpbml0aW9uKHF1ZXJ5KTtcbiAgICAgICAgICAgICAgICByZXR1cm4gKFxuICAgICAgICAgICAgICAgICAgICBkZWZpbml0aW9uLmtpbmQgPT09ICdPcGVyYXRpb25EZWZpbml0aW9uJ1xuICAgICAgICAgICAgICAgICAgICAmJiBkZWZpbml0aW9uLm9wZXJhdGlvbiA9PT0gJ3N1YnNjcmlwdGlvbidcbiAgICAgICAgICAgICAgICApO1xuICAgICAgICAgICAgfTtcbiAgICAgICAgICAgIGNvbnN0IHdzTGluayA9IHRyYWNlckxpbmsuY29uY2F0KG5ldyBXZWJTb2NrZXRMaW5rKHN1YnNjcmlwdGlvbkNsaWVudCkpO1xuICAgICAgICAgICAgY29uc3QgY3JlYXRlSHR0cExpbmsgPSAoKSA9PiB0cmFjZXJMaW5rLmNvbmNhdChuZXcgSHR0cExpbmsoe1xuICAgICAgICAgICAgICAgIHVyaTogaHR0cFVybCxcbiAgICAgICAgICAgICAgICBmZXRjaCxcbiAgICAgICAgICAgIH0pKTtcblxuICAgICAgICAgICAgdGhpcy5ncmFwaHFsQ2xpZW50ID0gbmV3IEFwb2xsb0NsaWVudCh7XG4gICAgICAgICAgICAgICAgY2FjaGU6IG5ldyBJbk1lbW9yeUNhY2hlKHt9KSxcbiAgICAgICAgICAgICAgICBsaW5rOiB1c2VIdHRwID8gc3BsaXQoaXNTdWJzY3JpcHRpb24sIHdzTGluaywgY3JlYXRlSHR0cExpbmsoKSkgOiB3c0xpbmssXG4gICAgICAgICAgICAgICAgZGVmYXVsdE9wdGlvbnM6IHtcbiAgICAgICAgICAgICAgICAgICAgd2F0Y2hRdWVyeToge1xuICAgICAgICAgICAgICAgICAgICAgICAgZmV0Y2hQb2xpY3k6ICduby1jYWNoZScsXG4gICAgICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgICAgIHF1ZXJ5OiB7XG4gICAgICAgICAgICAgICAgICAgICAgICBmZXRjaFBvbGljeTogJ25vLWNhY2hlJyxcbiAgICAgICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgfSk7XG4gICAgICAgIH0sIHNwYW4pO1xuICAgICAgICByZXR1cm4gdGhpcy5ncmFwaHFsQ2xpZW50O1xuICAgIH1cblxuICAgIGFzeW5jIGNsb3NlKCkge1xuICAgICAgICBpZiAodGhpcy5ncmFwaHFsQ2xpZW50KSB7XG4gICAgICAgICAgICBjb25zdCBjbGllbnQgPSB0aGlzLmdyYXBocWxDbGllbnQ7XG4gICAgICAgICAgICB0aGlzLmdyYXBocWxDbGllbnQgPSBudWxsO1xuICAgICAgICAgICAgY2xpZW50LnN0b3AoKTtcbiAgICAgICAgICAgIGF3YWl0IGNsaWVudC5jbGVhclN0b3JlKCk7XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICB0cmFuc2FjdGlvbnM6IFRPTlFDb2xsZWN0aW9uO1xuXG4gICAgbWVzc2FnZXM6IFRPTlFDb2xsZWN0aW9uO1xuXG4gICAgYmxvY2tzOiBUT05RQ29sbGVjdGlvbjtcblxuICAgIGFjY291bnRzOiBUT05RQ29sbGVjdGlvbjtcblxuICAgIGdyYXBocWxDbGllbnQ6IEFwb2xsb0NsaWVudDtcbn1cblxuXG5jbGFzcyBUT05RdWVyaWVzTW9kdWxlQ29sbGVjdGlvbiBpbXBsZW1lbnRzIFRPTlFDb2xsZWN0aW9uIHtcbiAgICBtb2R1bGU6IFRPTlF1ZXJpZXNNb2R1bGU7XG5cbiAgICBjb2xsZWN0aW9uTmFtZTogc3RyaW5nO1xuXG4gICAgdHlwZU5hbWU6IHN0cmluZztcblxuICAgIGNvbnN0cnVjdG9yKG1vZHVsZTogVE9OUXVlcmllc01vZHVsZSwgY29sbGVjdGlvbk5hbWU6IHN0cmluZykge1xuICAgICAgICB0aGlzLm1vZHVsZSA9IG1vZHVsZTtcbiAgICAgICAgdGhpcy5jb2xsZWN0aW9uTmFtZSA9IGNvbGxlY3Rpb25OYW1lO1xuICAgICAgICB0aGlzLnR5cGVOYW1lID0gYCR7Y29sbGVjdGlvbk5hbWVbMF0udG9VcHBlckNhc2UoKX0ke2NvbGxlY3Rpb25OYW1lLnNsaWNlKDEpfWA7XG4gICAgfVxuXG4gICAgYXN5bmMgcXVlcnkoXG4gICAgICAgIC4uLmFyZ3NcbiAgICAgICAgLypcbiAgICAgICAgICAgIGZpbHRlck9yUGFyYW1zOiBhbnkgfCBUT05RdWVyeVBhcmFtcyxcbiAgICAgICAgICAgIHJlc3VsdDogc3RyaW5nLFxuICAgICAgICAgICAgb3JkZXJCeT86IE9yZGVyQnlbXSxcbiAgICAgICAgICAgIGxpbWl0PzogbnVtYmVyLFxuICAgICAgICAgICAgdGltZW91dD86IG51bWJlcixcbiAgICAgICAgICAgIHBhcmVudFNwYW4/OiAoU3BhbiB8IFNwYW5Db250ZXh0KVxuICAgICAgICAgKi9cbiAgICApOiBQcm9taXNlPGFueT4ge1xuICAgICAgICBjb25zdCBwYXJhbXMgPSBmaW5kUGFyYW1zPFRPTlF1ZXJ5UGFyYW1zPihhcmdzLCAnZmlsdGVyJyk7XG4gICAgICAgIGNvbnN0IGZpbHRlciA9IHBhcmFtcyA/IHBhcmFtcy5maWx0ZXIgOiBhcmdzWzBdO1xuICAgICAgICBjb25zdCByZXN1bHQ6IHN0cmluZyA9IHBhcmFtcyA/IHBhcmFtcy5yZXN1bHQgOiAoYXJnc1sxXTogYW55KTtcbiAgICAgICAgY29uc3Qgb3JkZXJCeSA9IHBhcmFtcyA/IHBhcmFtcy5vcmRlckJ5IDogYXJnc1syXTtcbiAgICAgICAgY29uc3QgbGltaXQgPSBwYXJhbXMgPyBwYXJhbXMubGltaXQgOiBhcmdzWzNdO1xuICAgICAgICBjb25zdCB0aW1lb3V0ID0gcGFyYW1zID8gcGFyYW1zLnRpbWVvdXQgOiAoYXJnc1s0XTogYW55KTtcbiAgICAgICAgY29uc3QgcGFyZW50U3BhbiA9IHBhcmFtcyA/IHBhcmFtcy5wYXJlbnRTcGFuIDogYXJnc1s1XTtcbiAgICAgICAgcmV0dXJuIHRoaXMubW9kdWxlLmNvbnRleHQudHJhY2UoYCR7dGhpcy5jb2xsZWN0aW9uTmFtZX0ucXVlcnlgLCBhc3luYyAoc3BhbikgPT4ge1xuICAgICAgICAgICAgc3Bhbi5zZXRUYWcoJ3BhcmFtcycsIHtcbiAgICAgICAgICAgICAgICBmaWx0ZXIsXG4gICAgICAgICAgICAgICAgcmVzdWx0LFxuICAgICAgICAgICAgICAgIG9yZGVyQnksXG4gICAgICAgICAgICAgICAgbGltaXQsXG4gICAgICAgICAgICAgICAgdGltZW91dCxcbiAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgY29uc3QgYyA9IHRoaXMuY29sbGVjdGlvbk5hbWU7XG4gICAgICAgICAgICBjb25zdCB0ID0gdGhpcy50eXBlTmFtZTtcbiAgICAgICAgICAgIGNvbnN0IHFsID0gYHF1ZXJ5ICR7Y30oJGZpbHRlcjogJHt0fUZpbHRlciwgJG9yZGVyQnk6IFtRdWVyeU9yZGVyQnldLCAkbGltaXQ6IEludCwgJHRpbWVvdXQ6IEZsb2F0KSB7XG4gICAgICAgICAgICAgICAgJHtjfShmaWx0ZXI6ICRmaWx0ZXIsIG9yZGVyQnk6ICRvcmRlckJ5LCBsaW1pdDogJGxpbWl0LCB0aW1lb3V0OiAkdGltZW91dCkgeyAke3Jlc3VsdH0gfVxuICAgICAgICAgICAgfWA7XG4gICAgICAgICAgICBjb25zdCB2YXJpYWJsZXM6IHsgW3N0cmluZ106IGFueSB9ID0ge1xuICAgICAgICAgICAgICAgIGZpbHRlcixcbiAgICAgICAgICAgICAgICBvcmRlckJ5LFxuICAgICAgICAgICAgICAgIGxpbWl0LFxuICAgICAgICAgICAgfTtcbiAgICAgICAgICAgIGlmICh0aW1lb3V0KSB7XG4gICAgICAgICAgICAgICAgdmFyaWFibGVzLnRpbWVvdXQgPSBNYXRoLm1pbihNQVhfVElNRU9VVCwgdGltZW91dCk7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICByZXR1cm4gKGF3YWl0IHRoaXMubW9kdWxlLmdyYXBocWxRdWVyeShxbCwgdmFyaWFibGVzLCBzcGFuKSkuZGF0YVtjXTtcbiAgICAgICAgfSwgcGFyZW50U3Bhbik7XG4gICAgfVxuXG4gICAgc3Vic2NyaWJlKFxuICAgICAgICAuLi5hcmdzXG4gICAgICAgIC8qXG4gICAgICAgIGZpbHRlck9yUGFyYW1zOiBhbnkgfCBUT05TdWJzY3JpYmVQYXJhbXMsXG4gICAgICAgIHJlc3VsdD86IHN0cmluZyxcbiAgICAgICAgb25Eb2NFdmVudD86IERvY0V2ZW50LFxuICAgICAgICBvbkVycm9yPzogKGVycjogRXJyb3IpID0+IHZvaWRcbiAgICAgICAgICovXG4gICAgKTogU3Vic2NyaXB0aW9uIHtcbiAgICAgICAgY29uc3QgcGFyYW1zID0gZmluZFBhcmFtczxUT05TdWJzY3JpYmVQYXJhbXM+KGFyZ3MsICdmaWx0ZXInKTtcbiAgICAgICAgY29uc3QgZmlsdGVyID0gcGFyYW1zID8gcGFyYW1zLmZpbHRlciA6IGFyZ3NbMF07XG4gICAgICAgIGNvbnN0IHJlc3VsdDogc3RyaW5nID0gcGFyYW1zID8gcGFyYW1zLnJlc3VsdCA6IChhcmdzWzFdOiBhbnkpO1xuICAgICAgICBjb25zdCBvbkRvY0V2ZW50ID0gcGFyYW1zID8gcGFyYW1zLm9uRG9jRXZlbnQgOiAoYXJnc1syXTogYW55KTtcbiAgICAgICAgY29uc3Qgb25FcnJvciA9IHBhcmFtcyA/IHBhcmFtcy5vbkVycm9yIDogKGFyZ3NbM106IGFueSk7XG4gICAgICAgIGNvbnN0IHNwYW4gPSB0aGlzLm1vZHVsZS5jb25maWcudHJhY2VyLnN0YXJ0U3BhbignVE9OUXVlcmllc01vZHVsZS5qczpzdWJzY3JpYmUgJyk7XG4gICAgICAgIHNwYW4uc2V0VGFnKFRhZ3MuU1BBTl9LSU5ELCAnY2xpZW50Jyk7XG4gICAgICAgIGNvbnN0IHRleHQgPSBgc3Vic2NyaXB0aW9uICR7dGhpcy5jb2xsZWN0aW9uTmFtZX0oJGZpbHRlcjogJHt0aGlzLnR5cGVOYW1lfUZpbHRlcikge1xuICAgICAgICAgICAgJHt0aGlzLmNvbGxlY3Rpb25OYW1lfShmaWx0ZXI6ICRmaWx0ZXIpIHsgJHtyZXN1bHR9IH1cbiAgICAgICAgfWA7XG4gICAgICAgIGNvbnN0IHF1ZXJ5ID0gZ3FsKFt0ZXh0XSk7XG4gICAgICAgIGxldCBzdWJzY3JpcHRpb24gPSBudWxsO1xuICAgICAgICAoYXN5bmMgKCkgPT4ge1xuICAgICAgICAgICAgdHJ5IHtcbiAgICAgICAgICAgICAgICBjb25zdCBjbGllbnQgPSBhd2FpdCB0aGlzLm1vZHVsZS5ncmFwaHFsQ2xpZW50UmVxdWlyZWQoc3Bhbik7XG4gICAgICAgICAgICAgICAgY29uc3Qgb2JzZXJ2YWJsZSA9IGNsaWVudC5zdWJzY3JpYmUoe1xuICAgICAgICAgICAgICAgICAgICBxdWVyeSxcbiAgICAgICAgICAgICAgICAgICAgdmFyaWFibGVzOiB7XG4gICAgICAgICAgICAgICAgICAgICAgICBmaWx0ZXIsXG4gICAgICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICAgICAgc3Vic2NyaXB0aW9uID0gb2JzZXJ2YWJsZS5zdWJzY3JpYmUoKG1lc3NhZ2UpID0+IHtcbiAgICAgICAgICAgICAgICAgICAgb25Eb2NFdmVudCgnaW5zZXJ0L3VwZGF0ZScsIG1lc3NhZ2UuZGF0YVt0aGlzLmNvbGxlY3Rpb25OYW1lXSk7XG4gICAgICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICB9IGNhdGNoIChlcnJvcikge1xuICAgICAgICAgICAgICAgIHNwYW4ubG9nKHtcbiAgICAgICAgICAgICAgICAgICAgZXZlbnQ6ICdmYWlsZWQnLFxuICAgICAgICAgICAgICAgICAgICBwYXlsb2FkOiBlcnJvcixcbiAgICAgICAgICAgICAgICB9KTtcbiAgICAgICAgICAgICAgICBpZiAob25FcnJvcikge1xuICAgICAgICAgICAgICAgICAgICBvbkVycm9yKGVycm9yKTtcbiAgICAgICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAgICAgICBjb25zb2xlLmVycm9yKCdUT04gQ2xpZW50IHN1YnNjcmlwdGlvbiBlcnJvcicsIGVycm9yKTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG4gICAgICAgIH0pKCk7XG4gICAgICAgIHJldHVybiB7XG4gICAgICAgICAgICB1bnN1YnNjcmliZTogKCkgPT4ge1xuICAgICAgICAgICAgICAgIGlmIChzdWJzY3JpcHRpb24pIHtcbiAgICAgICAgICAgICAgICAgICAgc3Vic2NyaXB0aW9uLnVuc3Vic2NyaWJlKCk7XG4gICAgICAgICAgICAgICAgICAgIHNwYW4uZmluaXNoKCk7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfSxcbiAgICAgICAgfTtcbiAgICB9XG5cbiAgICBhc3luYyB3YWl0Rm9yKFxuICAgICAgICAuLi5hcmdzXG4gICAgICAgIC8qXG4gICAgICAgIGZpbHRlck9yUGFyYW1zOiBhbnkgfCBUT05XYWl0Rm9yUGFyYW1zLFxuICAgICAgICByZXN1bHQ6IHN0cmluZyxcbiAgICAgICAgdGltZW91dD86IG51bWJlcixcbiAgICAgICAgcGFyZW50U3Bhbj86IChTcGFuIHwgU3BhbkNvbnRleHQpXG4gICAgICAgICAqL1xuICAgICk6IFByb21pc2U8YW55PiB7XG4gICAgICAgIGNvbnN0IHBhcmFtcyA9IGZpbmRQYXJhbXM8VE9OV2FpdEZvclBhcmFtcz4oYXJncywgJ2ZpbHRlcicpO1xuICAgICAgICBjb25zdCBmaWx0ZXIgPSBwYXJhbXMgPyBwYXJhbXMuZmlsdGVyIDogYXJnc1swXTtcbiAgICAgICAgY29uc3QgcmVzdWx0OiBzdHJpbmcgPSBwYXJhbXMgPyBwYXJhbXMucmVzdWx0IDogKGFyZ3NbMV06IGFueSk7XG4gICAgICAgIGNvbnN0IHRpbWVvdXQgPSAocGFyYW1zID8gcGFyYW1zLnRpbWVvdXQgOiBhcmdzWzJdKSB8fCBERUZBVUxUX1RJTUVPVVQ7XG4gICAgICAgIGNvbnN0IHBhcmVudFNwYW4gPSBwYXJhbXMgPyBwYXJhbXMucGFyZW50U3BhbiA6IGFyZ3NbM107XG4gICAgICAgIGNvbnN0IGRvY3MgPSBhd2FpdCB0aGlzLnF1ZXJ5KHtcbiAgICAgICAgICAgIGZpbHRlcixcbiAgICAgICAgICAgIHJlc3VsdCxcbiAgICAgICAgICAgIHRpbWVvdXQsXG4gICAgICAgICAgICBwYXJlbnRTcGFuLFxuICAgICAgICB9KTtcbiAgICAgICAgaWYgKGRvY3MubGVuZ3RoID4gMCkge1xuICAgICAgICAgICAgcmV0dXJuIGRvY3NbMF07XG4gICAgICAgIH1cbiAgICAgICAgdGhyb3cgVE9OQ2xpZW50RXJyb3Iud2FpdEZvclRpbWVvdXQoKTtcbiAgICB9XG59XG5cblRPTlF1ZXJpZXNNb2R1bGUubW9kdWxlTmFtZSA9ICdUT05RdWVyaWVzTW9kdWxlJztcbiJdfQ==