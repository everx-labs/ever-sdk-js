"use strict";

var _interopRequireWildcard = require("@babel/runtime/helpers/interopRequireWildcard");

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

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

var _TONClient = require("../TONClient");

var _TONModule2 = require("../TONModule");

var _TONConfigModule = _interopRequireWildcard(require("./TONConfigModule"));

var _apolloLinkContext = require("apollo-link-context");

var _opentracing = require("opentracing");

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
    (0, _defineProperty2["default"])((0, _assertThisInitialized2["default"])(_this), "_client", void 0);
    _this._client = null;
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
                this.transactions = new TONQCollection(this, 'transactions');
                this.messages = new TONQCollection(this, 'messages');
                this.blocks = new TONQCollection(this, 'blocks');
                this.accounts = new TONQCollection(this, 'accounts');

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

                  if (!!location) {
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
                            return _context7.abrupt("return", _this2._mutation("mutation postRequests($requests: [Request]) {\n                postRequests(requests: $requests)\n            }", {
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
      var _mutation2 = (0, _asyncToGenerator2["default"])(
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
                            return _context9.abrupt("return", _this3._mutation(ql, variables, span));

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
        return _mutation2.apply(this, arguments);
      }

      return mutation;
    }()
  }, {
    key: "query",
    value: function () {
      var _query2 = (0, _asyncToGenerator2["default"])(
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
                            return _context11.abrupt("return", _this4._query(ql, variables, span));

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
        return _query2.apply(this, arguments);
      }

      return query;
    }()
  }, {
    key: "_mutation",
    value: function () {
      var _mutation3 = (0, _asyncToGenerator2["default"])(
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
                return _context13.abrupt("return", this._graphQl(function (client) {
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

      function _mutation(_x13) {
        return _mutation3.apply(this, arguments);
      }

      return _mutation;
    }()
  }, {
    key: "_query",
    value: function () {
      var _query3 = (0, _asyncToGenerator2["default"])(
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
                return _context14.abrupt("return", this._graphQl(function (client) {
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

      function _query(_x14) {
        return _query3.apply(this, arguments);
      }

      return _query;
    }()
  }, {
    key: "_graphQl",
    value: function () {
      var _graphQl2 = (0, _asyncToGenerator2["default"])(
      /*#__PURE__*/
      _regenerator["default"].mark(function _callee15(request, span) {
        var client, errors;
        return _regenerator["default"].wrap(function _callee15$(_context15) {
          while (1) {
            switch (_context15.prev = _context15.next) {
              case 0:
                _context15.next = 2;
                return this.ensureClient(span);

              case 2:
                client = _context15.sent;
                _context15.prev = 3;
                return _context15.abrupt("return", request(client));

              case 7:
                _context15.prev = 7;
                _context15.t0 = _context15["catch"](3);
                errors = _context15.t0 && _context15.t0.networkError && _context15.t0.networkError.result && _context15.t0.networkError.result.errors;

                if (!errors) {
                  _context15.next = 14;
                  break;
                }

                throw _TONClient.TONClientError.queryFailed(errors);

              case 14:
                throw _context15.t0;

              case 15:
              case "end":
                return _context15.stop();
            }
          }
        }, _callee15, this, [[3, 7]]);
      }));

      function _graphQl(_x15, _x16) {
        return _graphQl2.apply(this, arguments);
      }

      return _graphQl;
    }()
  }, {
    key: "ensureClient",
    value: function () {
      var _ensureClient = (0, _asyncToGenerator2["default"])(
      /*#__PURE__*/
      _regenerator["default"].mark(function _callee17(span) {
        var _this5 = this;

        return _regenerator["default"].wrap(function _callee17$(_context17) {
          while (1) {
            switch (_context17.prev = _context17.next) {
              case 0:
                if (!this._client) {
                  _context17.next = 2;
                  break;
                }

                return _context17.abrupt("return", this._client);

              case 2:
                _context17.next = 4;
                return this.context.trace('setup client',
                /*#__PURE__*/
                function () {
                  var _ref4 = (0, _asyncToGenerator2["default"])(
                  /*#__PURE__*/
                  _regenerator["default"].mark(function _callee16(span) {
                    var _ref5, httpUrl, wsUrl, fetch, WebSocket, subsOptions, subscriptionClient, tracerLink;

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
                                  headers: subsOptions
                                };
                              }
                            }, WebSocket);

                            subscriptionClient.maxConnectTimeGenerator.duration = function () {
                              return subscriptionClient.maxConnectTimeGenerator.max;
                            };

                            _context16.next = 12;
                            return (0, _apolloLinkContext.setContext)(function (_, req) {
                              var resolvedSpan = req && req.traceSpan || span;
                              req.headers = {};

                              _this5.config.tracer.inject(resolvedSpan, _opentracing.FORMAT_TEXT_MAP, req.headers);

                              return {
                                headers: req.headers
                              };
                            });

                          case 12:
                            tracerLink = _context16.sent;
                            _this5._client = new _apolloClient.ApolloClient({
                              cache: new _apolloCacheInmemory.InMemoryCache({}),
                              link: (0, _apolloLink.split)(function (_ref6) {
                                var query = _ref6.query;
                                var definition = (0, _apolloUtilities.getMainDefinition)(query);
                                return definition.kind === 'OperationDefinition' && definition.operation === 'subscription';
                              }, new _apolloLinkWs.WebSocketLink(subscriptionClient), tracerLink.concat(new _apolloLinkHttp.HttpLink({
                                uri: httpUrl,
                                fetch: fetch
                              }))),
                              defaultOptions: {
                                watchQuery: {
                                  fetchPolicy: 'no-cache'
                                },
                                query: {
                                  fetchPolicy: 'no-cache'
                                }
                              }
                            });

                          case 14:
                          case "end":
                            return _context16.stop();
                        }
                      }
                    }, _callee16);
                  }));

                  return function (_x18) {
                    return _ref4.apply(this, arguments);
                  };
                }(), span);

              case 4:
                return _context17.abrupt("return", this._client);

              case 5:
              case "end":
                return _context17.stop();
            }
          }
        }, _callee17, this);
      }));

      function ensureClient(_x17) {
        return _ensureClient.apply(this, arguments);
      }

      return ensureClient;
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
                if (!this._client) {
                  _context18.next = 6;
                  break;
                }

                client = this._client;
                this._client = null;
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

var TONQCollection =
/*#__PURE__*/
function () {
  function TONQCollection(module, collectionName) {
    (0, _classCallCheck2["default"])(this, TONQCollection);
    (0, _defineProperty2["default"])(this, "module", void 0);
    (0, _defineProperty2["default"])(this, "collectionName", void 0);
    (0, _defineProperty2["default"])(this, "typeName", void 0);
    this.module = module;
    this.collectionName = collectionName;
    this.typeName = collectionName.substr(0, 1).toUpperCase() + collectionName.substr(1, collectionName.length - 2);
  }

  (0, _createClass2["default"])(TONQCollection, [{
    key: "query",
    value: function () {
      var _query4 = (0, _asyncToGenerator2["default"])(
      /*#__PURE__*/
      _regenerator["default"].mark(function _callee20(filter, result, orderBy, limit, timeout, parentSpan) {
        var _this6 = this;

        return _regenerator["default"].wrap(function _callee20$(_context20) {
          while (1) {
            switch (_context20.prev = _context20.next) {
              case 0:
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
                              variables.timeout = timeout;
                            }

                            _context19.next = 8;
                            return _this6.module._query(ql, variables, span);

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

                  return function (_x25) {
                    return _ref7.apply(this, arguments);
                  };
                }(), parentSpan));

              case 1:
              case "end":
                return _context20.stop();
            }
          }
        }, _callee20, this);
      }));

      function query(_x19, _x20, _x21, _x22, _x23, _x24) {
        return _query4.apply(this, arguments);
      }

      return query;
    }()
  }, {
    key: "subscribe",
    value: function subscribe(filter, result, onDocEvent, onError) {
      var _this7 = this;

      var span = this.module.config.tracer.startSpan('TONQueriesModule.js:subscribe ');
      span.setTag(_opentracing.Tags.SPAN_KIND, 'client');
      var text = "subscription ".concat(this.collectionName, "($filter: ").concat(this.typeName, "Filter) {\n        \t").concat(this.collectionName, "(filter: $filter) { ").concat(result, " }\n        }");
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
                return _this7.module.ensureClient(span);

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
                span.logEvent('failed', _context21.t0);

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
      _regenerator["default"].mark(function _callee22(filter, result, timeout, parentSpan) {
        var docs;
        return _regenerator["default"].wrap(function _callee22$(_context22) {
          while (1) {
            switch (_context22.prev = _context22.next) {
              case 0:
                _context22.next = 2;
                return this.query(filter, result, undefined, undefined, timeout || 40000, parentSpan);

              case 2:
                docs = _context22.sent;

                if (!(docs.length > 0)) {
                  _context22.next = 5;
                  break;
                }

                return _context22.abrupt("return", docs[0]);

              case 5:
                throw _TONClient.TONClientError.waitForTimeout();

              case 6:
              case "end":
                return _context22.stop();
            }
          }
        }, _callee22, this);
      }));

      function waitFor(_x26, _x27, _x28, _x29) {
        return _waitFor.apply(this, arguments);
      }

      return waitFor;
    }()
  }]);
  return TONQCollection;
}();

TONQueriesModule.moduleName = 'TONQueriesModule';
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy9tb2R1bGVzL1RPTlF1ZXJpZXNNb2R1bGUuanMiXSwibmFtZXMiOlsiVE9OUXVlcmllc01vZHVsZSIsImNvbnRleHQiLCJfY2xpZW50Iiwib3ZlcnJpZGVXc1VybCIsImNvbmZpZyIsImdldE1vZHVsZSIsIlRPTkNvbmZpZ01vZHVsZSIsInRyYW5zYWN0aW9ucyIsIlRPTlFDb2xsZWN0aW9uIiwibWVzc2FnZXMiLCJibG9ja3MiLCJhY2NvdW50cyIsImZldGNoIiwic291cmNlVXJsIiwicmVzcG9uc2UiLCJyZWRpcmVjdGVkIiwidXJsIiwic291cmNlTG9jYXRpb24iLCJVUkxQYXJ0cyIsImZpeCIsInBhcnRzIiwicXVlcnkiLCJ0b0xvd2VyQ2FzZSIsInJlc3BvbnNlTG9jYXRpb24iLCJjbGllbnRQbGF0Zm9ybSIsIlRPTkNsaWVudCIsImRhdGEiLCJFcnJvciIsImh0dHBVcmwiLCJxdWVyaWVzSHR0cFVybCIsIndzVXJsIiwicXVlcmllc1dzVXJsIiwiZGV0ZWN0UmVkaXJlY3QiLCJsb2NhdGlvbiIsInJlcGxhY2UiLCJXZWJTb2NrZXQiLCJwYXJlbnRTcGFuIiwidW5kZWZpbmVkIiwicmVzdWx0IiwiZ2V0QWNjb3VudHNDb3VudCIsImdldFRyYW5zYWN0aW9uc0NvdW50IiwiZ2V0QWNjb3VudHNUb3RhbEJhbGFuY2UiLCJyZXF1ZXN0cyIsInRyYWNlIiwic3BhbiIsIl9tdXRhdGlvbiIsInFsIiwidmFyaWFibGVzIiwic2V0VGFnIiwibXV0YXRpb24iLCJfcXVlcnkiLCJfZ3JhcGhRbCIsImNsaWVudCIsIm11dGF0ZSIsInRyYWNlU3BhbiIsInJlcXVlc3QiLCJlbnN1cmVDbGllbnQiLCJlcnJvcnMiLCJuZXR3b3JrRXJyb3IiLCJUT05DbGllbnRFcnJvciIsInF1ZXJ5RmFpbGVkIiwiZ2V0Q2xpZW50Q29uZmlnIiwic3Vic09wdGlvbnMiLCJ0cmFjZXIiLCJpbmplY3QiLCJGT1JNQVRfVEVYVF9NQVAiLCJzdWJzY3JpcHRpb25DbGllbnQiLCJTdWJzY3JpcHRpb25DbGllbnQiLCJyZWNvbm5lY3QiLCJjb25uZWN0aW9uUGFyYW1zIiwiaGVhZGVycyIsIm1heENvbm5lY3RUaW1lR2VuZXJhdG9yIiwiZHVyYXRpb24iLCJtYXgiLCJfIiwicmVxIiwicmVzb2x2ZWRTcGFuIiwidHJhY2VyTGluayIsIkFwb2xsb0NsaWVudCIsImNhY2hlIiwiSW5NZW1vcnlDYWNoZSIsImxpbmsiLCJkZWZpbml0aW9uIiwia2luZCIsIm9wZXJhdGlvbiIsIldlYlNvY2tldExpbmsiLCJjb25jYXQiLCJIdHRwTGluayIsInVyaSIsImRlZmF1bHRPcHRpb25zIiwid2F0Y2hRdWVyeSIsImZldGNoUG9saWN5Iiwic3RvcCIsImNsZWFyU3RvcmUiLCJUT05Nb2R1bGUiLCJtb2R1bGUiLCJjb2xsZWN0aW9uTmFtZSIsInR5cGVOYW1lIiwic3Vic3RyIiwidG9VcHBlckNhc2UiLCJsZW5ndGgiLCJmaWx0ZXIiLCJvcmRlckJ5IiwibGltaXQiLCJ0aW1lb3V0IiwiYyIsInQiLCJvbkRvY0V2ZW50Iiwib25FcnJvciIsInN0YXJ0U3BhbiIsIlRhZ3MiLCJTUEFOX0tJTkQiLCJ0ZXh0Iiwic3Vic2NyaXB0aW9uIiwib2JzZXJ2YWJsZSIsInN1YnNjcmliZSIsIm1lc3NhZ2UiLCJsb2dFdmVudCIsImNvbnNvbGUiLCJlcnJvciIsInVuc3Vic2NyaWJlIiwiZmluaXNoIiwiZG9jcyIsIndhaXRGb3JUaW1lb3V0IiwibW9kdWxlTmFtZSJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFrQkE7O0FBQ0E7O0FBQ0E7O0FBQ0E7O0FBQ0E7O0FBQ0E7O0FBQ0E7O0FBQ0E7O0FBQ0E7O0FBRUE7O0FBQ0E7O0FBRUE7O0FBQ0E7O0FBaENBOzs7Ozs7Ozs7Ozs7Ozs7SUEyQ3FCQSxnQjs7Ozs7QUFJakIsNEJBQVlDLE9BQVosRUFBdUM7QUFBQTs7QUFBQTtBQUNuQyw0SEFBTUEsT0FBTjtBQURtQztBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFB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bUIvRCxNQUFuQixFQUEyQkQsU0FBM0IsRUFBc0NBLFNBQXRDLEVBQWlEbUUsT0FBTyxJQUFJLEtBQTVELEVBQW9FcEUsVUFBcEUsQzs7O0FBQWJzRixnQkFBQUEsSTs7c0JBQ0ZBLElBQUksQ0FBQ3RCLE1BQUwsR0FBYyxDOzs7OzttREFDUHNCLElBQUksQ0FBQyxDQUFELEM7OztzQkFFVC9ELDBCQUFlZ0UsY0FBZixFOzs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUlkM0gsZ0JBQWdCLENBQUM0SCxVQUFqQixHQUE4QixrQkFBOUIiLCJzb3VyY2VzQ29udGVudCI6WyIvKlxuICogQ29weXJpZ2h0IDIwMTgtMjAyMCBUT04gREVWIFNPTFVUSU9OUyBMVEQuXG4gKlxuICogTGljZW5zZWQgdW5kZXIgdGhlIFNPRlRXQVJFIEVWQUxVQVRJT04gTGljZW5zZSAodGhlIFwiTGljZW5zZVwiKTsgeW91IG1heSBub3QgdXNlXG4gKiB0aGlzIGZpbGUgZXhjZXB0IGluIGNvbXBsaWFuY2Ugd2l0aCB0aGUgTGljZW5zZS4gIFlvdSBtYXkgb2J0YWluIGEgY29weSBvZiB0aGVcbiAqIExpY2Vuc2UgYXQ6XG4gKlxuICogaHR0cDovL3d3dy50b24uZGV2L2xpY2Vuc2VzXG4gKlxuICogVW5sZXNzIHJlcXVpcmVkIGJ5IGFwcGxpY2FibGUgbGF3IG9yIGFncmVlZCB0byBpbiB3cml0aW5nLCBzb2Z0d2FyZVxuICogZGlzdHJpYnV0ZWQgdW5kZXIgdGhlIExpY2Vuc2UgaXMgZGlzdHJpYnV0ZWQgb24gYW4gXCJBUyBJU1wiIEJBU0lTLFxuICogV0lUSE9VVCBXQVJSQU5USUVTIE9SIENPTkRJVElPTlMgT0YgQU5ZIEtJTkQsIGVpdGhlciBleHByZXNzIG9yIGltcGxpZWQuXG4gKiBTZWUgdGhlIExpY2Vuc2UgZm9yIHRoZSBzcGVjaWZpYyBUT04gREVWIHNvZnR3YXJlIGdvdmVybmluZyBwZXJtaXNzaW9ucyBhbmRcbiAqIGxpbWl0YXRpb25zIHVuZGVyIHRoZSBMaWNlbnNlLlxuICovXG5cbi8vIEBmbG93XG5cbmltcG9ydCB7IEluTWVtb3J5Q2FjaGUgfSBmcm9tICdhcG9sbG8tY2FjaGUtaW5tZW1vcnknO1xuaW1wb3J0IHsgQXBvbGxvQ2xpZW50IH0gZnJvbSAnYXBvbGxvLWNsaWVudCc7XG5pbXBvcnQgeyBzcGxpdCB9IGZyb20gXCJhcG9sbG8tbGlua1wiO1xuaW1wb3J0IHsgSHR0cExpbmsgfSBmcm9tICdhcG9sbG8tbGluay1odHRwJztcbmltcG9ydCB7IFdlYlNvY2tldExpbmsgfSBmcm9tICdhcG9sbG8tbGluay13cyc7XG5pbXBvcnQgeyBnZXRNYWluRGVmaW5pdGlvbiB9IGZyb20gJ2Fwb2xsby11dGlsaXRpZXMnO1xuaW1wb3J0IGdxbCBmcm9tICdncmFwaHFsLXRhZyc7XG5pbXBvcnQgeyBTdWJzY3JpcHRpb25DbGllbnQgfSBmcm9tIFwic3Vic2NyaXB0aW9ucy10cmFuc3BvcnQtd3NcIjtcbmltcG9ydCB7IFRPTkNsaWVudCwgVE9OQ2xpZW50RXJyb3IgfSBmcm9tICcuLi9UT05DbGllbnQnO1xuaW1wb3J0IHR5cGUgeyBUT05Nb2R1bGVDb250ZXh0IH0gZnJvbSAnLi4vVE9OTW9kdWxlJztcbmltcG9ydCB7IFRPTk1vZHVsZSB9IGZyb20gJy4uL1RPTk1vZHVsZSc7XG5pbXBvcnQgVE9OQ29uZmlnTW9kdWxlLCB7IFVSTFBhcnRzIH0gZnJvbSAnLi9UT05Db25maWdNb2R1bGUnO1xuXG5pbXBvcnQgeyBzZXRDb250ZXh0IH0gZnJvbSAnYXBvbGxvLWxpbmstY29udGV4dCc7XG5pbXBvcnQgeyBGT1JNQVRfVEVYVF9NQVAsIFRhZ3MsIFNwYW4sIFNwYW5Db250ZXh0IH0gZnJvbSAnb3BlbnRyYWNpbmcnO1xuXG50eXBlIFN1YnNjcmlwdGlvbiA9IHtcbiAgICB1bnN1YnNjcmliZTogKCkgPT4gdm9pZFxufVxuXG5leHBvcnQgdHlwZSBSZXF1ZXN0ID0ge1xuICAgIGlkOiBzdHJpbmcsXG4gICAgYm9keTogc3RyaW5nLFxufVxuXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBUT05RdWVyaWVzTW9kdWxlIGV4dGVuZHMgVE9OTW9kdWxlIHtcbiAgICBjb25maWc6IFRPTkNvbmZpZ01vZHVsZTtcbiAgICBvdmVycmlkZVdzVXJsOiA/c3RyaW5nO1xuXG4gICAgY29uc3RydWN0b3IoY29udGV4dDogVE9OTW9kdWxlQ29udGV4dCkge1xuICAgICAgICBzdXBlcihjb250ZXh0KTtcbiAgICAgICAgdGhpcy5fY2xpZW50ID0gbnVsbDtcbiAgICAgICAgdGhpcy5vdmVycmlkZVdzVXJsID0gbnVsbDtcbiAgICB9XG5cbiAgICBhc3luYyBzZXR1cCgpIHtcbiAgICAgICAgdGhpcy5jb25maWcgPSB0aGlzLmNvbnRleHQuZ2V0TW9kdWxlKFRPTkNvbmZpZ01vZHVsZSk7XG4gICAgICAgIHRoaXMudHJhbnNhY3Rpb25zID0gbmV3IFRPTlFDb2xsZWN0aW9uKHRoaXMsICd0cmFuc2FjdGlvbnMnKTtcbiAgICAgICAgdGhpcy5tZXNzYWdlcyA9IG5ldyBUT05RQ29sbGVjdGlvbih0aGlzLCAnbWVzc2FnZXMnKTtcbiAgICAgICAgdGhpcy5ibG9ja3MgPSBuZXcgVE9OUUNvbGxlY3Rpb24odGhpcywgJ2Jsb2NrcycpO1xuICAgICAgICB0aGlzLmFjY291bnRzID0gbmV3IFRPTlFDb2xsZWN0aW9uKHRoaXMsICdhY2NvdW50cycpO1xuICAgIH1cblxuICAgIGFzeW5jIGRldGVjdFJlZGlyZWN0KGZldGNoOiBhbnksIHNvdXJjZVVybDogc3RyaW5nKTogUHJvbWlzZTxzdHJpbmc+IHtcbiAgICAgICAgY29uc3QgcmVzcG9uc2UgPSBhd2FpdCBmZXRjaChzb3VyY2VVcmwpO1xuICAgICAgICBpZiAocmVzcG9uc2UucmVkaXJlY3RlZCA9PT0gdHJ1ZSkge1xuICAgICAgICAgICAgcmV0dXJuIHJlc3BvbnNlLnVybDtcbiAgICAgICAgfVxuICAgICAgICBpZiAocmVzcG9uc2UucmVkaXJlY3RlZCA9PT0gZmFsc2UpIHtcbiAgICAgICAgICAgIHJldHVybiAnJztcbiAgICAgICAgfVxuICAgICAgICBjb25zdCBzb3VyY2VMb2NhdGlvbiA9IFVSTFBhcnRzLmZpeChzb3VyY2VVcmwsIHBhcnRzID0+IHtcbiAgICAgICAgICAgIHBhcnRzLnF1ZXJ5ID0gJydcbiAgICAgICAgfSkudG9Mb3dlckNhc2UoKTtcbiAgICAgICAgY29uc3QgcmVzcG9uc2VMb2NhdGlvbiA9IFVSTFBhcnRzLmZpeChyZXNwb25zZS51cmwsIHBhcnRzID0+IHtcbiAgICAgICAgICAgIHBhcnRzLnF1ZXJ5ID0gJydcbiAgICAgICAgfSkudG9Mb3dlckNhc2UoKTtcbiAgICAgICAgcmV0dXJuIHJlc3BvbnNlTG9jYXRpb24gIT09IHNvdXJjZUxvY2F0aW9uID8gcmVzcG9uc2UudXJsIDogJyc7XG4gICAgfVxuXG4gICAgYXN5bmMgZ2V0Q2xpZW50Q29uZmlnKCkge1xuICAgICAgICBjb25zdCBjb25maWcgPSB0aGlzLmNvbmZpZztcbiAgICAgICAgY29uc3QgeyBjbGllbnRQbGF0Zm9ybSB9ID0gVE9OQ2xpZW50O1xuICAgICAgICBpZiAoIWNvbmZpZy5kYXRhIHx8ICFjbGllbnRQbGF0Zm9ybSkge1xuICAgICAgICAgICAgdGhyb3cgRXJyb3IoJ1RPTiBDbGllbnQgZG9lcyBub3QgY29uZmlndXJlZCcpO1xuICAgICAgICB9XG4gICAgICAgIGxldCBodHRwVXJsID0gY29uZmlnLnF1ZXJpZXNIdHRwVXJsKCk7XG4gICAgICAgIGxldCB3c1VybCA9IGNvbmZpZy5xdWVyaWVzV3NVcmwoKTtcbiAgICAgICAgY29uc3QgZmV0Y2ggPSBjbGllbnRQbGF0Zm9ybS5mZXRjaDtcbiAgICAgICAgY29uc3QgcmVkaXJlY3RlZCA9IGF3YWl0IHRoaXMuZGV0ZWN0UmVkaXJlY3QoZmV0Y2gsIGAke2h0dHBVcmx9P3F1ZXJ5PSU3QmluZm8lN0J2ZXJzaW9uJTdEJTdEYCk7XG4gICAgICAgIGlmIChyZWRpcmVjdGVkICE9PSAnJykge1xuICAgICAgICAgICAgY29uc3QgbG9jYXRpb24gPSBVUkxQYXJ0cy5maXgocmVkaXJlY3RlZCwgcGFydHMgPT4ge1xuICAgICAgICAgICAgICAgIHBhcnRzLnF1ZXJ5ID0gJydcbiAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgaWYgKCEhbG9jYXRpb24pIHtcbiAgICAgICAgICAgICAgICBodHRwVXJsID0gbG9jYXRpb247XG4gICAgICAgICAgICAgICAgd3NVcmwgPSBsb2NhdGlvblxuICAgICAgICAgICAgICAgICAgICAucmVwbGFjZSgvXmh0dHBzOlxcL1xcLy9naSwgJ3dzczovLycpXG4gICAgICAgICAgICAgICAgICAgIC5yZXBsYWNlKC9eaHR0cDpcXC9cXC8vZ2ksICd3czovLycpO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICAgIHJldHVybiB7XG4gICAgICAgICAgICBodHRwVXJsLFxuICAgICAgICAgICAgd3NVcmwsXG4gICAgICAgICAgICBmZXRjaCxcbiAgICAgICAgICAgIFdlYlNvY2tldDogY2xpZW50UGxhdGZvcm0uV2ViU29ja2V0LFxuICAgICAgICB9XG4gICAgfVxuXG4gICAgYXN5bmMgZ2V0QWNjb3VudHNDb3VudChwYXJlbnRTcGFuPzogKFNwYW4gfCBTcGFuQ29udGV4dCkpOiBQcm9taXNlPG51bWJlcj4ge1xuICAgICAgICBjb25zdCByZXN1bHQgPSBhd2FpdCB0aGlzLnF1ZXJ5KCdxdWVyeXtnZXRBY2NvdW50c0NvdW50fScsIHVuZGVmaW5lZCwgcGFyZW50U3Bhbik7XG4gICAgICAgIHJldHVybiByZXN1bHQuZGF0YS5nZXRBY2NvdW50c0NvdW50O1xuICAgIH1cblxuICAgIGFzeW5jIGdldFRyYW5zYWN0aW9uc0NvdW50KHBhcmVudFNwYW4/OiAoU3BhbiB8IFNwYW5Db250ZXh0KSk6IFByb21pc2U8bnVtYmVyPiB7XG4gICAgICAgIGNvbnN0IHJlc3VsdCA9IGF3YWl0IHRoaXMucXVlcnkoJ3F1ZXJ5e2dldFRyYW5zYWN0aW9uc0NvdW50fScsIHVuZGVmaW5lZCwgcGFyZW50U3Bhbik7XG4gICAgICAgIHJldHVybiByZXN1bHQuZGF0YS5nZXRUcmFuc2FjdGlvbnNDb3VudDtcbiAgICB9XG5cbiAgICBhc3luYyBnZXRBY2NvdW50c1RvdGFsQmFsYW5jZShwYXJlbnRTcGFuPzogKFNwYW4gfCBTcGFuQ29udGV4dCkpOiBQcm9taXNlPHN0cmluZz4ge1xuICAgICAgICBjb25zdCByZXN1bHQgPSBhd2FpdCB0aGlzLnF1ZXJ5KCdxdWVyeXtnZXRBY2NvdW50c1RvdGFsQmFsYW5jZX0nLCB1bmRlZmluZWQsIHBhcmVudFNwYW4pO1xuICAgICAgICByZXR1cm4gcmVzdWx0LmRhdGEuZ2V0QWNjb3VudHNUb3RhbEJhbGFuY2U7XG4gICAgfVxuXG4gICAgYXN5bmMgcG9zdFJlcXVlc3RzKHJlcXVlc3RzOiBSZXF1ZXN0W10sIHBhcmVudFNwYW4/OiAoU3BhbiB8IFNwYW5Db250ZXh0KSk6IFByb21pc2U8YW55PiB7XG4gICAgICAgIHJldHVybiB0aGlzLmNvbnRleHQudHJhY2UoJ3F1ZXJpZXMucG9zdFJlcXVlc3RzJywgYXN5bmMgKHNwYW4pID0+IHtcbiAgICAgICAgICAgIHJldHVybiB0aGlzLl9tdXRhdGlvbihgbXV0YXRpb24gcG9zdFJlcXVlc3RzKCRyZXF1ZXN0czogW1JlcXVlc3RdKSB7XG4gICAgICAgICAgICAgICAgcG9zdFJlcXVlc3RzKHJlcXVlc3RzOiAkcmVxdWVzdHMpXG4gICAgICAgICAgICB9YCwge1xuICAgICAgICAgICAgICAgIHJlcXVlc3RzLFxuICAgICAgICAgICAgfSwgc3Bhbik7XG4gICAgICAgIH0sIHBhcmVudFNwYW4pO1xuICAgIH1cblxuICAgIGFzeW5jIG11dGF0aW9uKHFsOiBzdHJpbmcsIHZhcmlhYmxlczogeyBbc3RyaW5nXTogYW55IH0gPSB7fSwgcGFyZW50U3Bhbj86IChTcGFuIHwgU3BhbkNvbnRleHQpKTogUHJvbWlzZTxhbnk+IHtcbiAgICAgICAgcmV0dXJuIHRoaXMuY29udGV4dC50cmFjZSgncXVlcmllcy5tdXRhdGlvbicsIGFzeW5jIChzcGFuOiBTcGFuKSA9PiB7XG4gICAgICAgICAgICBzcGFuLnNldFRhZygncGFyYW1zJywge1xuICAgICAgICAgICAgICAgIG11dGF0aW9uOiBxbCxcbiAgICAgICAgICAgICAgICB2YXJpYWJsZXMsXG4gICAgICAgICAgICB9KTtcbiAgICAgICAgICAgIHJldHVybiB0aGlzLl9tdXRhdGlvbihxbCwgdmFyaWFibGVzLCBzcGFuKTtcbiAgICAgICAgfSwgcGFyZW50U3Bhbik7XG4gICAgfVxuXG4gICAgYXN5bmMgcXVlcnkocWw6IHN0cmluZywgdmFyaWFibGVzOiB7IFtzdHJpbmddOiBhbnkgfSA9IHt9LCBwYXJlbnRTcGFuPzogKFNwYW4gfCBTcGFuQ29udGV4dCkpOiBQcm9taXNlPGFueT4ge1xuICAgICAgICByZXR1cm4gdGhpcy5jb250ZXh0LnRyYWNlKCdxdWVyaWVzLnF1ZXJ5JywgYXN5bmMgKHNwYW46IFNwYW4pID0+IHtcbiAgICAgICAgICAgIHNwYW4uc2V0VGFnKCdwYXJhbXMnLCB7XG4gICAgICAgICAgICAgICAgcXVlcnk6IHFsLFxuICAgICAgICAgICAgICAgIHZhcmlhYmxlcyxcbiAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgcmV0dXJuIHRoaXMuX3F1ZXJ5KHFsLCB2YXJpYWJsZXMsIHNwYW4pO1xuICAgICAgICB9LCBwYXJlbnRTcGFuKTtcbiAgICB9XG5cbiAgICBhc3luYyBfbXV0YXRpb24ocWw6IHN0cmluZywgdmFyaWFibGVzOiB7IFtzdHJpbmddOiBhbnkgfSA9IHt9LCBzcGFuOiBTcGFuKTogUHJvbWlzZTxhbnk+IHtcbiAgICAgICAgY29uc3QgbXV0YXRpb24gPSBncWwoW3FsXSk7XG4gICAgICAgIHJldHVybiB0aGlzLl9ncmFwaFFsKGNsaWVudCA9PiBjbGllbnQubXV0YXRlKHtcbiAgICAgICAgICAgIG11dGF0aW9uLFxuICAgICAgICAgICAgdmFyaWFibGVzLFxuICAgICAgICAgICAgY29udGV4dDoge1xuICAgICAgICAgICAgICAgIHRyYWNlU3Bhbjogc3BhbixcbiAgICAgICAgICAgIH1cbiAgICAgICAgfSkpO1xuICAgIH1cblxuICAgIGFzeW5jIF9xdWVyeShxbDogc3RyaW5nLCB2YXJpYWJsZXM6IHsgW3N0cmluZ106IGFueSB9ID0ge30sIHNwYW46IFNwYW4pOiBQcm9taXNlPGFueT4ge1xuICAgICAgICBjb25zdCBxdWVyeSA9IGdxbChbcWxdKTtcbiAgICAgICAgcmV0dXJuIHRoaXMuX2dyYXBoUWwoY2xpZW50ID0+IGNsaWVudC5xdWVyeSh7XG4gICAgICAgICAgICBxdWVyeSxcbiAgICAgICAgICAgIHZhcmlhYmxlcyxcbiAgICAgICAgICAgIGNvbnRleHQ6IHtcbiAgICAgICAgICAgICAgICB0cmFjZVNwYW46IHNwYW4sXG4gICAgICAgICAgICB9XG4gICAgICAgIH0pLCBzcGFuKTtcbiAgICB9XG5cbiAgICBhc3luYyBfZ3JhcGhRbChyZXF1ZXN0OiAoY2xpZW50OiBBcG9sbG9DbGllbnQpID0+IFByb21pc2U8YW55Piwgc3BhbjogU3Bhbik6IFByb21pc2U8YW55PiB7XG4gICAgICAgIGNvbnN0IGNsaWVudCA9IGF3YWl0IHRoaXMuZW5zdXJlQ2xpZW50KHNwYW4pO1xuICAgICAgICB0cnkge1xuICAgICAgICAgICAgcmV0dXJuIHJlcXVlc3QoY2xpZW50KTtcbiAgICAgICAgfSBjYXRjaCAoZXJyb3IpIHtcbiAgICAgICAgICAgIGNvbnN0IGVycm9ycyA9IGVycm9yICYmIGVycm9yLm5ldHdvcmtFcnJvciAmJiBlcnJvci5uZXR3b3JrRXJyb3IucmVzdWx0ICYmIGVycm9yLm5ldHdvcmtFcnJvci5yZXN1bHQuZXJyb3JzO1xuICAgICAgICAgICAgaWYgKGVycm9ycykge1xuICAgICAgICAgICAgICAgIHRocm93IFRPTkNsaWVudEVycm9yLnF1ZXJ5RmFpbGVkKGVycm9ycyk7XG4gICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAgIHRocm93IGVycm9yO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgfVxuXG4gICAgYXN5bmMgZW5zdXJlQ2xpZW50KHNwYW46IFNwYW4pOiBQcm9taXNlPEFwb2xsb0NsaWVudD4ge1xuICAgICAgICBpZiAodGhpcy5fY2xpZW50KSB7XG4gICAgICAgICAgICByZXR1cm4gdGhpcy5fY2xpZW50O1xuICAgICAgICB9XG4gICAgICAgIGF3YWl0IHRoaXMuY29udGV4dC50cmFjZSgnc2V0dXAgY2xpZW50JywgYXN5bmMgKHNwYW4pID0+IHtcbiAgICAgICAgICAgIGNvbnN0IHsgaHR0cFVybCwgd3NVcmwsIGZldGNoLCBXZWJTb2NrZXQgfSA9IGF3YWl0IHRoaXMuZ2V0Q2xpZW50Q29uZmlnKCk7XG4gICAgICAgICAgICBsZXQgc3Vic09wdGlvbnMgPSB0aGlzLmNvbmZpZy50cmFjZXIuaW5qZWN0KHNwYW4sIEZPUk1BVF9URVhUX01BUCwge30pO1xuICAgICAgICAgICAgY29uc3Qgc3Vic2NyaXB0aW9uQ2xpZW50ID0gbmV3IFN1YnNjcmlwdGlvbkNsaWVudChcbiAgICAgICAgICAgICAgICB3c1VybCxcbiAgICAgICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgICAgIHJlY29ubmVjdDogdHJ1ZSxcbiAgICAgICAgICAgICAgICAgICAgY29ubmVjdGlvblBhcmFtczogKCkgPT4gKHtcbiAgICAgICAgICAgICAgICAgICAgICAgIGhlYWRlcnM6IHN1YnNPcHRpb25zLFxuICAgICAgICAgICAgICAgICAgICB9KSxcbiAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgIFdlYlNvY2tldFxuICAgICAgICAgICAgKTtcbiAgICAgICAgICAgIHN1YnNjcmlwdGlvbkNsaWVudC5tYXhDb25uZWN0VGltZUdlbmVyYXRvci5kdXJhdGlvbiA9ICgpID0+IHN1YnNjcmlwdGlvbkNsaWVudC5tYXhDb25uZWN0VGltZUdlbmVyYXRvci5tYXg7XG4gICAgICAgICAgICBjb25zdCB0cmFjZXJMaW5rID0gYXdhaXQgc2V0Q29udGV4dCgoXywgcmVxKSA9PiB7XG4gICAgICAgICAgICAgICAgY29uc3QgcmVzb2x2ZWRTcGFuID0gKHJlcSAmJiByZXEudHJhY2VTcGFuKSB8fCBzcGFuO1xuICAgICAgICAgICAgICAgIHJlcS5oZWFkZXJzID0ge307XG4gICAgICAgICAgICAgICAgdGhpcy5jb25maWcudHJhY2VyLmluamVjdChyZXNvbHZlZFNwYW4sIEZPUk1BVF9URVhUX01BUCwgcmVxLmhlYWRlcnMpO1xuICAgICAgICAgICAgICAgIHJldHVybiB7XG4gICAgICAgICAgICAgICAgICAgIGhlYWRlcnM6IHJlcS5oZWFkZXJzLFxuICAgICAgICAgICAgICAgIH07XG4gICAgICAgICAgICB9KTtcbiAgICAgICAgICAgIHRoaXMuX2NsaWVudCA9IG5ldyBBcG9sbG9DbGllbnQoe1xuICAgICAgICAgICAgICAgIGNhY2hlOiBuZXcgSW5NZW1vcnlDYWNoZSh7fSksXG4gICAgICAgICAgICAgICAgbGluazogc3BsaXQoXG4gICAgICAgICAgICAgICAgICAgICh7IHF1ZXJ5IH0pID0+IHtcbiAgICAgICAgICAgICAgICAgICAgICAgIGNvbnN0IGRlZmluaXRpb24gPSBnZXRNYWluRGVmaW5pdGlvbihxdWVyeSk7XG4gICAgICAgICAgICAgICAgICAgICAgICByZXR1cm4gKFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGRlZmluaXRpb24ua2luZCA9PT0gJ09wZXJhdGlvbkRlZmluaXRpb24nXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgJiYgZGVmaW5pdGlvbi5vcGVyYXRpb24gPT09ICdzdWJzY3JpcHRpb24nXG4gICAgICAgICAgICAgICAgICAgICAgICApO1xuICAgICAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgICAgICBuZXcgV2ViU29ja2V0TGluayhzdWJzY3JpcHRpb25DbGllbnQpLFxuICAgICAgICAgICAgICAgICAgICB0cmFjZXJMaW5rLmNvbmNhdChuZXcgSHR0cExpbmsoe1xuICAgICAgICAgICAgICAgICAgICAgICAgdXJpOiBodHRwVXJsLFxuICAgICAgICAgICAgICAgICAgICAgICAgZmV0Y2gsXG4gICAgICAgICAgICAgICAgICAgIH0pKSxcbiAgICAgICAgICAgICAgICApLFxuICAgICAgICAgICAgICAgIGRlZmF1bHRPcHRpb25zOiB7XG4gICAgICAgICAgICAgICAgICAgIHdhdGNoUXVlcnk6IHtcbiAgICAgICAgICAgICAgICAgICAgICAgIGZldGNoUG9saWN5OiAnbm8tY2FjaGUnLFxuICAgICAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgICAgICBxdWVyeToge1xuICAgICAgICAgICAgICAgICAgICAgICAgZmV0Y2hQb2xpY3k6ICduby1jYWNoZScsXG4gICAgICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfSk7XG4gICAgICAgIH0sIHNwYW4pO1xuICAgICAgICByZXR1cm4gdGhpcy5fY2xpZW50O1xuICAgIH1cblxuICAgIGFzeW5jIGNsb3NlKCkge1xuICAgICAgICBpZiAodGhpcy5fY2xpZW50KSB7XG4gICAgICAgICAgICBjb25zdCBjbGllbnQgPSB0aGlzLl9jbGllbnQ7XG4gICAgICAgICAgICB0aGlzLl9jbGllbnQgPSBudWxsO1xuICAgICAgICAgICAgY2xpZW50LnN0b3AoKTtcbiAgICAgICAgICAgIGF3YWl0IGNsaWVudC5jbGVhclN0b3JlKCk7XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICB0cmFuc2FjdGlvbnM6IFRPTlFDb2xsZWN0aW9uO1xuXG4gICAgbWVzc2FnZXM6IFRPTlFDb2xsZWN0aW9uO1xuXG4gICAgYmxvY2tzOiBUT05RQ29sbGVjdGlvbjtcblxuICAgIGFjY291bnRzOiBUT05RQ29sbGVjdGlvbjtcblxuICAgIF9jbGllbnQ6IEFwb2xsb0NsaWVudDtcbn1cblxuXG50eXBlIERvY0V2ZW50ID0gKGNoYW5nZVR5cGU6IHN0cmluZywgZG9jOiBhbnkpID0+IHZvaWQ7XG5cbnR5cGUgT3JkZXJCeSA9IHtcbiAgICBwYXRoOiBzdHJpbmcsXG4gICAgZGlyZWN0aW9uOiAnQVNDJyB8ICdERVNDJ1xufVxuXG5jbGFzcyBUT05RQ29sbGVjdGlvbiB7XG4gICAgbW9kdWxlOiBUT05RdWVyaWVzTW9kdWxlO1xuXG4gICAgY29sbGVjdGlvbk5hbWU6IHN0cmluZztcbiAgICB0eXBlTmFtZTogc3RyaW5nO1xuXG4gICAgY29uc3RydWN0b3IobW9kdWxlOiBUT05RdWVyaWVzTW9kdWxlLCBjb2xsZWN0aW9uTmFtZTogc3RyaW5nKSB7XG4gICAgICAgIHRoaXMubW9kdWxlID0gbW9kdWxlO1xuICAgICAgICB0aGlzLmNvbGxlY3Rpb25OYW1lID0gY29sbGVjdGlvbk5hbWU7XG4gICAgICAgIHRoaXMudHlwZU5hbWUgPSBjb2xsZWN0aW9uTmFtZS5zdWJzdHIoMCwgMSkudG9VcHBlckNhc2UoKSArXG4gICAgICAgICAgICBjb2xsZWN0aW9uTmFtZS5zdWJzdHIoMSwgY29sbGVjdGlvbk5hbWUubGVuZ3RoIC0gMik7XG4gICAgfVxuXG4gICAgYXN5bmMgcXVlcnkoZmlsdGVyOiBhbnksIHJlc3VsdDogc3RyaW5nLCBvcmRlckJ5PzogT3JkZXJCeVtdLCBsaW1pdD86IG51bWJlciwgdGltZW91dD86IG51bWJlciwgcGFyZW50U3Bhbj86IChTcGFuIHwgU3BhbkNvbnRleHQpKTogUHJvbWlzZTxhbnk+IHtcbiAgICAgICAgcmV0dXJuIHRoaXMubW9kdWxlLmNvbnRleHQudHJhY2UoYCR7dGhpcy5jb2xsZWN0aW9uTmFtZX0ucXVlcnlgLCBhc3luYyAoc3BhbikgPT4ge1xuICAgICAgICAgICAgc3Bhbi5zZXRUYWcoJ3BhcmFtcycsIHtcbiAgICAgICAgICAgICAgICBmaWx0ZXIsIHJlc3VsdCwgb3JkZXJCeSwgbGltaXQsIHRpbWVvdXRcbiAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgY29uc3QgYyA9IHRoaXMuY29sbGVjdGlvbk5hbWU7XG4gICAgICAgICAgICBjb25zdCB0ID0gdGhpcy50eXBlTmFtZTtcbiAgICAgICAgICAgIGNvbnN0IHFsID0gYHF1ZXJ5ICR7Y30oJGZpbHRlcjogJHt0fUZpbHRlciwgJG9yZGVyQnk6IFtRdWVyeU9yZGVyQnldLCAkbGltaXQ6IEludCwgJHRpbWVvdXQ6IEZsb2F0KSB7XG4gICAgICAgICAgICAgICAgJHtjfShmaWx0ZXI6ICRmaWx0ZXIsIG9yZGVyQnk6ICRvcmRlckJ5LCBsaW1pdDogJGxpbWl0LCB0aW1lb3V0OiAkdGltZW91dCkgeyAke3Jlc3VsdH0gfVxuICAgICAgICAgICAgfWA7XG4gICAgICAgICAgICBjb25zdCB2YXJpYWJsZXM6IHsgW3N0cmluZ106IGFueSB9ID0ge1xuICAgICAgICAgICAgICAgIGZpbHRlcixcbiAgICAgICAgICAgICAgICBvcmRlckJ5LFxuICAgICAgICAgICAgICAgIGxpbWl0LFxuICAgICAgICAgICAgfTtcbiAgICAgICAgICAgIGlmICh0aW1lb3V0KSB7XG4gICAgICAgICAgICAgICAgdmFyaWFibGVzLnRpbWVvdXQgPSB0aW1lb3V0O1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgcmV0dXJuIChhd2FpdCB0aGlzLm1vZHVsZS5fcXVlcnkocWwsIHZhcmlhYmxlcywgc3BhbikpLmRhdGFbY107XG4gICAgICAgIH0sIHBhcmVudFNwYW4pO1xuICAgIH1cblxuICAgIHN1YnNjcmliZShcbiAgICAgICAgZmlsdGVyOiBhbnksXG4gICAgICAgIHJlc3VsdDogc3RyaW5nLFxuICAgICAgICBvbkRvY0V2ZW50OiBEb2NFdmVudCxcbiAgICAgICAgb25FcnJvcj86IChlcnI6IEVycm9yKSA9PiB2b2lkXG4gICAgKTogU3Vic2NyaXB0aW9uIHtcbiAgICAgICAgY29uc3Qgc3BhbiA9IHRoaXMubW9kdWxlLmNvbmZpZy50cmFjZXIuc3RhcnRTcGFuKCdUT05RdWVyaWVzTW9kdWxlLmpzOnN1YnNjcmliZSAnKTtcbiAgICAgICAgc3Bhbi5zZXRUYWcoVGFncy5TUEFOX0tJTkQsICdjbGllbnQnKTtcbiAgICAgICAgY29uc3QgdGV4dCA9IGBzdWJzY3JpcHRpb24gJHt0aGlzLmNvbGxlY3Rpb25OYW1lfSgkZmlsdGVyOiAke3RoaXMudHlwZU5hbWV9RmlsdGVyKSB7XG4gICAgICAgIFx0JHt0aGlzLmNvbGxlY3Rpb25OYW1lfShmaWx0ZXI6ICRmaWx0ZXIpIHsgJHtyZXN1bHR9IH1cbiAgICAgICAgfWA7XG4gICAgICAgIGNvbnN0IHF1ZXJ5ID0gZ3FsKFt0ZXh0XSk7XG4gICAgICAgIGxldCBzdWJzY3JpcHRpb24gPSBudWxsO1xuICAgICAgICAoYXN5bmMgKCkgPT4ge1xuICAgICAgICAgICAgdHJ5IHtcbiAgICAgICAgICAgICAgICBjb25zdCBjbGllbnQgPSBhd2FpdCB0aGlzLm1vZHVsZS5lbnN1cmVDbGllbnQoc3Bhbik7XG4gICAgICAgICAgICAgICAgY29uc3Qgb2JzZXJ2YWJsZSA9IGNsaWVudC5zdWJzY3JpYmUoe1xuICAgICAgICAgICAgICAgICAgICBxdWVyeSxcbiAgICAgICAgICAgICAgICAgICAgdmFyaWFibGVzOiB7XG4gICAgICAgICAgICAgICAgICAgICAgICBmaWx0ZXIsXG4gICAgICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICAgICAgc3Vic2NyaXB0aW9uID0gb2JzZXJ2YWJsZS5zdWJzY3JpYmUoKG1lc3NhZ2UpID0+IHtcbiAgICAgICAgICAgICAgICAgICAgb25Eb2NFdmVudCgnaW5zZXJ0L3VwZGF0ZScsIG1lc3NhZ2UuZGF0YVt0aGlzLmNvbGxlY3Rpb25OYW1lXSk7XG4gICAgICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICB9IGNhdGNoIChlcnJvcikge1xuICAgICAgICAgICAgICAgIHNwYW4ubG9nRXZlbnQoJ2ZhaWxlZCcsIGVycm9yKTtcbiAgICAgICAgICAgICAgICBpZiAob25FcnJvcikge1xuICAgICAgICAgICAgICAgICAgICBvbkVycm9yKGVycm9yKTtcbiAgICAgICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAgICAgICBjb25zb2xlLmVycm9yKCdUT04gQ2xpZW50IHN1YnNjcmlwdGlvbiBlcnJvcicsIGVycm9yKTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG4gICAgICAgIH0pKCk7XG4gICAgICAgIHJldHVybiB7XG4gICAgICAgICAgICB1bnN1YnNjcmliZTogKCkgPT4ge1xuICAgICAgICAgICAgICAgIGlmIChzdWJzY3JpcHRpb24pIHtcbiAgICAgICAgICAgICAgICAgICAgc3Vic2NyaXB0aW9uLnVuc3Vic2NyaWJlKCk7XG4gICAgICAgICAgICAgICAgICAgIHNwYW4uZmluaXNoKCk7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfSxcbiAgICAgICAgfTtcbiAgICB9XG5cbiAgICBhc3luYyB3YWl0Rm9yKGZpbHRlcjogYW55LCByZXN1bHQ6IHN0cmluZywgdGltZW91dD86IG51bWJlciwgcGFyZW50U3Bhbj86IChTcGFuIHwgU3BhbkNvbnRleHQpKTogUHJvbWlzZTxhbnk+IHtcbiAgICAgICAgY29uc3QgZG9jcyA9IGF3YWl0IHRoaXMucXVlcnkoZmlsdGVyLCByZXN1bHQsIHVuZGVmaW5lZCwgdW5kZWZpbmVkLCB0aW1lb3V0IHx8IDQwXzAwMCwgcGFyZW50U3Bhbik7XG4gICAgICAgIGlmIChkb2NzLmxlbmd0aCA+IDApIHtcbiAgICAgICAgICAgIHJldHVybiBkb2NzWzBdO1xuICAgICAgICB9XG4gICAgICAgIHRocm93IFRPTkNsaWVudEVycm9yLndhaXRGb3JUaW1lb3V0KCk7XG4gICAgfVxufVxuXG5UT05RdWVyaWVzTW9kdWxlLm1vZHVsZU5hbWUgPSAnVE9OUXVlcmllc01vZHVsZSc7XG4iXX0=