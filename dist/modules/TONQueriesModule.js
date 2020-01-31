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
    key: "getClientConfig",
    value: function () {
      var _getClientConfig = (0, _asyncToGenerator2["default"])(
      /*#__PURE__*/
      _regenerator["default"].mark(function _callee2() {
        var config, clientPlatform, httpUrl, wsUrl, fetch, response, location;
        return _regenerator["default"].wrap(function _callee2$(_context2) {
          while (1) {
            switch (_context2.prev = _context2.next) {
              case 0:
                config = this.config;
                clientPlatform = _TONClient.TONClient.clientPlatform;

                if (!(!config.data || !clientPlatform)) {
                  _context2.next = 4;
                  break;
                }

                throw Error('TON Client does not configured');

              case 4:
                httpUrl = config.queriesHttpUrl();
                wsUrl = config.queriesWsUrl();
                fetch = clientPlatform.fetch;
                _context2.next = 9;
                return fetch("".concat(httpUrl, "?query=%7Binfo%7Bversion%7D%7D"));

              case 9:
                response = _context2.sent;

                if (response.redirected) {
                  location = _TONConfigModule.URLParts.fix(response.url, function (parts) {
                    parts.query = '';
                  });

                  if (!!location) {
                    httpUrl = location;
                    wsUrl = location.replace(/^https:\/\//gi, 'wss://').replace(/^http:\/\//gi, 'ws://');
                  }
                }

                return _context2.abrupt("return", {
                  httpUrl: httpUrl,
                  wsUrl: wsUrl,
                  fetch: fetch,
                  WebSocket: clientPlatform.WebSocket
                });

              case 12:
              case "end":
                return _context2.stop();
            }
          }
        }, _callee2, this);
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
        var _this2 = this;

        return _regenerator["default"].wrap(function _callee4$(_context4) {
          while (1) {
            switch (_context4.prev = _context4.next) {
              case 0:
                return _context4.abrupt("return", this.context.trace('TONQueriesModule.js:getAccountCount',
                /*#__PURE__*/
                function () {
                  var _ref = (0, _asyncToGenerator2["default"])(
                  /*#__PURE__*/
                  _regenerator["default"].mark(function _callee3(span) {
                    var result;
                    return _regenerator["default"].wrap(function _callee3$(_context3) {
                      while (1) {
                        switch (_context3.prev = _context3.next) {
                          case 0:
                            _context3.next = 2;
                            return _this2.query('query{getAccountsCount}', undefined, span);

                          case 2:
                            result = _context3.sent;
                            return _context3.abrupt("return", result.data.getAccountsCount);

                          case 4:
                          case "end":
                            return _context3.stop();
                        }
                      }
                    }, _callee3);
                  }));

                  return function (_x2) {
                    return _ref.apply(this, arguments);
                  };
                }(), parentSpan));

              case 1:
              case "end":
                return _context4.stop();
            }
          }
        }, _callee4, this);
      }));

      function getAccountsCount(_x) {
        return _getAccountsCount.apply(this, arguments);
      }

      return getAccountsCount;
    }()
  }, {
    key: "getTransactionsCount",
    value: function () {
      var _getTransactionsCount = (0, _asyncToGenerator2["default"])(
      /*#__PURE__*/
      _regenerator["default"].mark(function _callee6(parentSpan) {
        var _this3 = this;

        return _regenerator["default"].wrap(function _callee6$(_context6) {
          while (1) {
            switch (_context6.prev = _context6.next) {
              case 0:
                return _context6.abrupt("return", this.context.trace('TONQueriesModule.js:getTransactionCount',
                /*#__PURE__*/
                function () {
                  var _ref2 = (0, _asyncToGenerator2["default"])(
                  /*#__PURE__*/
                  _regenerator["default"].mark(function _callee5(span) {
                    var result;
                    return _regenerator["default"].wrap(function _callee5$(_context5) {
                      while (1) {
                        switch (_context5.prev = _context5.next) {
                          case 0:
                            _context5.next = 2;
                            return _this3.query('query{getTransactionsCount}', undefined, span);

                          case 2:
                            result = _context5.sent;
                            return _context5.abrupt("return", result.data.getTransactionsCount);

                          case 4:
                          case "end":
                            return _context5.stop();
                        }
                      }
                    }, _callee5);
                  }));

                  return function (_x4) {
                    return _ref2.apply(this, arguments);
                  };
                }(), parentSpan));

              case 1:
              case "end":
                return _context6.stop();
            }
          }
        }, _callee6, this);
      }));

      function getTransactionsCount(_x3) {
        return _getTransactionsCount.apply(this, arguments);
      }

      return getTransactionsCount;
    }()
  }, {
    key: "getAccountsTotalBalance",
    value: function () {
      var _getAccountsTotalBalance = (0, _asyncToGenerator2["default"])(
      /*#__PURE__*/
      _regenerator["default"].mark(function _callee8(parentSpan) {
        var _this4 = this;

        return _regenerator["default"].wrap(function _callee8$(_context8) {
          while (1) {
            switch (_context8.prev = _context8.next) {
              case 0:
                return _context8.abrupt("return", this.context.trace('TONQueriesModule.js:getAccountsTotalBalance',
                /*#__PURE__*/
                function () {
                  var _ref3 = (0, _asyncToGenerator2["default"])(
                  /*#__PURE__*/
                  _regenerator["default"].mark(function _callee7(span) {
                    var result;
                    return _regenerator["default"].wrap(function _callee7$(_context7) {
                      while (1) {
                        switch (_context7.prev = _context7.next) {
                          case 0:
                            _context7.next = 2;
                            return _this4.query('query{getAccountsTotalBalance}', undefined, span);

                          case 2:
                            result = _context7.sent;
                            return _context7.abrupt("return", result.data.getAccountsTotalBalance);

                          case 4:
                          case "end":
                            return _context7.stop();
                        }
                      }
                    }, _callee7);
                  }));

                  return function (_x6) {
                    return _ref3.apply(this, arguments);
                  };
                }(), parentSpan));

              case 1:
              case "end":
                return _context8.stop();
            }
          }
        }, _callee8, this);
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
      _regenerator["default"].mark(function _callee10(requests, parentSpan) {
        var _this5 = this;

        return _regenerator["default"].wrap(function _callee10$(_context10) {
          while (1) {
            switch (_context10.prev = _context10.next) {
              case 0:
                return _context10.abrupt("return", this.context.trace('TONQueriesModule.js:postRequests',
                /*#__PURE__*/
                function () {
                  var _ref4 = (0, _asyncToGenerator2["default"])(
                  /*#__PURE__*/
                  _regenerator["default"].mark(function _callee9(span) {
                    return _regenerator["default"].wrap(function _callee9$(_context9) {
                      while (1) {
                        switch (_context9.prev = _context9.next) {
                          case 0:
                            return _context9.abrupt("return", _this5.mutation("mutation postRequests($requests: [Request]) {\n                postRequests(requests: $requests)\n            }", {
                              requests: requests
                            }, span));

                          case 1:
                          case "end":
                            return _context9.stop();
                        }
                      }
                    }, _callee9);
                  }));

                  return function (_x9) {
                    return _ref4.apply(this, arguments);
                  };
                }(), parentSpan));

              case 1:
              case "end":
                return _context10.stop();
            }
          }
        }, _callee10, this);
      }));

      function postRequests(_x7, _x8) {
        return _postRequests.apply(this, arguments);
      }

      return postRequests;
    }()
  }, {
    key: "mutation",
    value: function () {
      var _mutation = (0, _asyncToGenerator2["default"])(
      /*#__PURE__*/
      _regenerator["default"].mark(function _callee12(ql) {
        var _this6 = this;

        var variables,
            parentSpan,
            _args12 = arguments;
        return _regenerator["default"].wrap(function _callee12$(_context12) {
          while (1) {
            switch (_context12.prev = _context12.next) {
              case 0:
                variables = _args12.length > 1 && _args12[1] !== undefined ? _args12[1] : {};
                parentSpan = _args12.length > 2 ? _args12[2] : undefined;
                return _context12.abrupt("return", this.context.trace('TONQueriesModule.js:mutation',
                /*#__PURE__*/
                function () {
                  var _ref5 = (0, _asyncToGenerator2["default"])(
                  /*#__PURE__*/
                  _regenerator["default"].mark(function _callee11(span) {
                    var mutation;
                    return _regenerator["default"].wrap(function _callee11$(_context11) {
                      while (1) {
                        switch (_context11.prev = _context11.next) {
                          case 0:
                            mutation = (0, _graphqlTag["default"])([ql]);
                            span.log({
                              event: 'TONQueriesModule.js:query args',
                              value: {
                                mutation: ql,
                                variables: variables
                              }
                            });
                            return _context11.abrupt("return", _this6._graphQl(function (client) {
                              return client.mutate({
                                mutation: mutation,
                                variables: variables,
                                context: {
                                  traceSpan: span
                                }
                              });
                            }));

                          case 3:
                          case "end":
                            return _context11.stop();
                        }
                      }
                    }, _callee11);
                  }));

                  return function (_x11) {
                    return _ref5.apply(this, arguments);
                  };
                }(), parentSpan));

              case 3:
              case "end":
                return _context12.stop();
            }
          }
        }, _callee12, this);
      }));

      function mutation(_x10) {
        return _mutation.apply(this, arguments);
      }

      return mutation;
    }()
  }, {
    key: "query",
    value: function () {
      var _query = (0, _asyncToGenerator2["default"])(
      /*#__PURE__*/
      _regenerator["default"].mark(function _callee14(ql) {
        var _this7 = this;

        var variables,
            parentSpan,
            _args14 = arguments;
        return _regenerator["default"].wrap(function _callee14$(_context14) {
          while (1) {
            switch (_context14.prev = _context14.next) {
              case 0:
                variables = _args14.length > 1 && _args14[1] !== undefined ? _args14[1] : {};
                parentSpan = _args14.length > 2 ? _args14[2] : undefined;
                return _context14.abrupt("return", this.context.trace('TONQueriesModule.js:query',
                /*#__PURE__*/
                function () {
                  var _ref6 = (0, _asyncToGenerator2["default"])(
                  /*#__PURE__*/
                  _regenerator["default"].mark(function _callee13(span) {
                    var query;
                    return _regenerator["default"].wrap(function _callee13$(_context13) {
                      while (1) {
                        switch (_context13.prev = _context13.next) {
                          case 0:
                            query = (0, _graphqlTag["default"])([ql]);
                            span.log({
                              event: 'TONQueriesModule.js:query args',
                              value: {
                                query: ql,
                                variables: variables
                              }
                            });
                            return _context13.abrupt("return", _this7._graphQl(function (client) {
                              return client.query({
                                query: query,
                                variables: variables,
                                context: {
                                  traceSpan: span
                                }
                              });
                            }, span));

                          case 3:
                          case "end":
                            return _context13.stop();
                        }
                      }
                    }, _callee13);
                  }));

                  return function (_x13) {
                    return _ref6.apply(this, arguments);
                  };
                }(), parentSpan));

              case 3:
              case "end":
                return _context14.stop();
            }
          }
        }, _callee14, this);
      }));

      function query(_x12) {
        return _query.apply(this, arguments);
      }

      return query;
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

      function _graphQl(_x14, _x15) {
        return _graphQl2.apply(this, arguments);
      }

      return _graphQl;
    }()
  }, {
    key: "ensureClient",
    value: function () {
      var _ensureClient = (0, _asyncToGenerator2["default"])(
      /*#__PURE__*/
      _regenerator["default"].mark(function _callee16(span) {
        var _this8 = this;

        var _ref7, httpUrl, wsUrl, fetch, WebSocket, subsOptions, subscriptionClient, tracerLink;

        return _regenerator["default"].wrap(function _callee16$(_context16) {
          while (1) {
            switch (_context16.prev = _context16.next) {
              case 0:
                if (!this._client) {
                  _context16.next = 2;
                  break;
                }

                return _context16.abrupt("return", this._client);

              case 2:
                span.log({
                  event: 'TONQueriesModule.ensureClient before setup'
                });
                _context16.next = 5;
                return this.getClientConfig();

              case 5:
                _ref7 = _context16.sent;
                httpUrl = _ref7.httpUrl;
                wsUrl = _ref7.wsUrl;
                fetch = _ref7.fetch;
                WebSocket = _ref7.WebSocket;
                subsOptions = this.config.tracer.inject(span, _opentracing.FORMAT_TEXT_MAP, {});
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

                _context16.next = 15;
                return (0, _apolloLinkContext.setContext)(function (qlReq, req) {
                  var resolvedSpan = qlReq.context && qlReq.context.traceSpan || span;
                  req.headers = {};

                  _this8.config.tracer.inject(resolvedSpan, _opentracing.FORMAT_TEXT_MAP, req.headers);

                  return {
                    headers: req.headers
                  };
                });

              case 15:
                tracerLink = _context16.sent;
                this._client = new _apolloClient.ApolloClient({
                  cache: new _apolloCacheInmemory.InMemoryCache({}),
                  link: (0, _apolloLink.split)(function (_ref8) {
                    var query = _ref8.query;
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
                span.log({
                  event: 'TONQueriesModule.ensureClient after setup'
                });
                return _context16.abrupt("return", this._client);

              case 19:
              case "end":
                return _context16.stop();
            }
          }
        }, _callee16, this);
      }));

      function ensureClient(_x16) {
        return _ensureClient.apply(this, arguments);
      }

      return ensureClient;
    }()
  }, {
    key: "close",
    value: function () {
      var _close = (0, _asyncToGenerator2["default"])(
      /*#__PURE__*/
      _regenerator["default"].mark(function _callee17() {
        var client;
        return _regenerator["default"].wrap(function _callee17$(_context17) {
          while (1) {
            switch (_context17.prev = _context17.next) {
              case 0:
                if (!this._client) {
                  _context17.next = 6;
                  break;
                }

                client = this._client;
                this._client = null;
                client.stop();
                _context17.next = 6;
                return client.clearStore();

              case 6:
              case "end":
                return _context17.stop();
            }
          }
        }, _callee17, this);
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
      var _query2 = (0, _asyncToGenerator2["default"])(
      /*#__PURE__*/
      _regenerator["default"].mark(function _callee18(filter, result, orderBy, limit, timeout, parentSpan) {
        var c, t, ql, variables;
        return _regenerator["default"].wrap(function _callee18$(_context18) {
          while (1) {
            switch (_context18.prev = _context18.next) {
              case 0:
                c = this.collectionName;
                t = this.typeName;
                ql = "query ".concat(c, "($filter: ").concat(t, "Filter, $orderBy: [QueryOrderBy], $limit: Int, $timeout: Float) {\n            ").concat(c, "(filter: $filter, orderBy: $orderBy, limit: $limit, timeout: $timeout) { ").concat(result, " }\n        }");
                variables = {
                  filter: filter,
                  orderBy: orderBy,
                  limit: limit
                };

                if (timeout) {
                  variables.timeout = timeout;
                }

                _context18.next = 7;
                return this.module.query(ql, variables, parentSpan);

              case 7:
                _context18.t0 = c;
                return _context18.abrupt("return", _context18.sent.data[_context18.t0]);

              case 9:
              case "end":
                return _context18.stop();
            }
          }
        }, _callee18, this);
      }));

      function query(_x17, _x18, _x19, _x20, _x21, _x22) {
        return _query2.apply(this, arguments);
      }

      return query;
    }()
  }, {
    key: "subscribe",
    value: function subscribe(filter, result, onDocEvent, onError) {
      var _this9 = this;

      var span = this.module.config.tracer.startSpan('TONQueriesModule.js:subscribe ');
      span.setTag(_opentracing.Tags.SPAN_KIND, 'client');
      var text = "subscription ".concat(this.collectionName, "($filter: ").concat(this.typeName, "Filter) {\n        \t").concat(this.collectionName, "(filter: $filter) { ").concat(result, " }\n        }");
      var query = (0, _graphqlTag["default"])([text]);
      span.log({
        event: 'subscription',
        value: query
      });
      var subscription = null;
      (0, _asyncToGenerator2["default"])(
      /*#__PURE__*/
      _regenerator["default"].mark(function _callee19() {
        var client, observable;
        return _regenerator["default"].wrap(function _callee19$(_context19) {
          while (1) {
            switch (_context19.prev = _context19.next) {
              case 0:
                _context19.prev = 0;
                _context19.next = 3;
                return _this9.module.ensureClient(span);

              case 3:
                client = _context19.sent;
                observable = client.subscribe({
                  query: query,
                  variables: {
                    filter: filter
                  }
                });
                subscription = observable.subscribe(function (message) {
                  onDocEvent('insert/update', message.data[_this9.collectionName]);
                });
                _context19.next = 13;
                break;

              case 8:
                _context19.prev = 8;
                _context19.t0 = _context19["catch"](0);
                _context19.next = 12;
                return span.log({
                  event: 'subscription failed',
                  value: _context19.t0
                });

              case 12:
                if (onError) {
                  onError(_context19.t0);
                } else {
                  console.error('TON Client subscription error', _context19.t0);
                }

              case 13:
              case "end":
                return _context19.stop();
            }
          }
        }, _callee19, null, [[0, 8]]);
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
      _regenerator["default"].mark(function _callee20(filter, result, timeout, parentSpan) {
        var docs;
        return _regenerator["default"].wrap(function _callee20$(_context20) {
          while (1) {
            switch (_context20.prev = _context20.next) {
              case 0:
                _context20.next = 2;
                return this.query(filter, result, undefined, undefined, timeout || 40000, parentSpan);

              case 2:
                docs = _context20.sent;

                if (!(docs.length > 0)) {
                  _context20.next = 5;
                  break;
                }

                return _context20.abrupt("return", docs[0]);

              case 5:
                throw _TONClient.TONClientError.waitForTimeout();

              case 6:
              case "end":
                return _context20.stop();
            }
          }
        }, _callee20, this);
      }));

      function waitFor(_x23, _x24, _x25, _x26) {
        return _waitFor.apply(this, arguments);
      }

      return waitFor;
    }()
  }]);
  return TONQCollection;
}();

TONQueriesModule.moduleName = 'TONQueriesModule';
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy9tb2R1bGVzL1RPTlF1ZXJpZXNNb2R1bGUuanMiXSwibmFtZXMiOlsiVE9OUXVlcmllc01vZHVsZSIsImNvbnRleHQiLCJfY2xpZW50Iiwib3ZlcnJpZGVXc1VybCIsImNvbmZpZyIsImdldE1vZHVsZSIsIlRPTkNvbmZpZ01vZHVsZSIsInRyYW5zYWN0aW9ucyIsIlRPTlFDb2xsZWN0aW9uIiwibWVzc2FnZXMiLCJibG9ja3MiLCJhY2NvdW50cyIsImNsaWVudFBsYXRmb3JtIiwiVE9OQ2xpZW50IiwiZGF0YSIsIkVycm9yIiwiaHR0cFVybCIsInF1ZXJpZXNIdHRwVXJsIiwid3NVcmwiLCJxdWVyaWVzV3NVcmwiLCJmZXRjaCIsInJlc3BvbnNlIiwicmVkaXJlY3RlZCIsImxvY2F0aW9uIiwiVVJMUGFydHMiLCJmaXgiLCJ1cmwiLCJwYXJ0cyIsInF1ZXJ5IiwicmVwbGFjZSIsIldlYlNvY2tldCIsInBhcmVudFNwYW4iLCJ0cmFjZSIsInNwYW4iLCJ1bmRlZmluZWQiLCJyZXN1bHQiLCJnZXRBY2NvdW50c0NvdW50IiwiZ2V0VHJhbnNhY3Rpb25zQ291bnQiLCJnZXRBY2NvdW50c1RvdGFsQmFsYW5jZSIsInJlcXVlc3RzIiwibXV0YXRpb24iLCJxbCIsInZhcmlhYmxlcyIsImxvZyIsImV2ZW50IiwidmFsdWUiLCJfZ3JhcGhRbCIsImNsaWVudCIsIm11dGF0ZSIsInRyYWNlU3BhbiIsInJlcXVlc3QiLCJlbnN1cmVDbGllbnQiLCJlcnJvcnMiLCJuZXR3b3JrRXJyb3IiLCJUT05DbGllbnRFcnJvciIsInF1ZXJ5RmFpbGVkIiwiZ2V0Q2xpZW50Q29uZmlnIiwic3Vic09wdGlvbnMiLCJ0cmFjZXIiLCJpbmplY3QiLCJGT1JNQVRfVEVYVF9NQVAiLCJzdWJzY3JpcHRpb25DbGllbnQiLCJTdWJzY3JpcHRpb25DbGllbnQiLCJyZWNvbm5lY3QiLCJjb25uZWN0aW9uUGFyYW1zIiwiaGVhZGVycyIsIm1heENvbm5lY3RUaW1lR2VuZXJhdG9yIiwiZHVyYXRpb24iLCJtYXgiLCJxbFJlcSIsInJlcSIsInJlc29sdmVkU3BhbiIsInRyYWNlckxpbmsiLCJBcG9sbG9DbGllbnQiLCJjYWNoZSIsIkluTWVtb3J5Q2FjaGUiLCJsaW5rIiwiZGVmaW5pdGlvbiIsImtpbmQiLCJvcGVyYXRpb24iLCJXZWJTb2NrZXRMaW5rIiwiY29uY2F0IiwiSHR0cExpbmsiLCJ1cmkiLCJkZWZhdWx0T3B0aW9ucyIsIndhdGNoUXVlcnkiLCJmZXRjaFBvbGljeSIsInN0b3AiLCJjbGVhclN0b3JlIiwiVE9OTW9kdWxlIiwibW9kdWxlIiwiY29sbGVjdGlvbk5hbWUiLCJ0eXBlTmFtZSIsInN1YnN0ciIsInRvVXBwZXJDYXNlIiwibGVuZ3RoIiwiZmlsdGVyIiwib3JkZXJCeSIsImxpbWl0IiwidGltZW91dCIsImMiLCJ0Iiwib25Eb2NFdmVudCIsIm9uRXJyb3IiLCJzdGFydFNwYW4iLCJzZXRUYWciLCJUYWdzIiwiU1BBTl9LSU5EIiwidGV4dCIsInN1YnNjcmlwdGlvbiIsIm9ic2VydmFibGUiLCJzdWJzY3JpYmUiLCJtZXNzYWdlIiwiY29uc29sZSIsImVycm9yIiwidW5zdWJzY3JpYmUiLCJmaW5pc2giLCJkb2NzIiwid2FpdEZvclRpbWVvdXQiLCJtb2R1bGVOYW1lIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQWtCQTs7QUFDQTs7QUFDQTs7QUFDQTs7QUFDQTs7QUFDQTs7QUFDQTs7QUFDQTs7QUFDQTs7QUFFQTs7QUFDQTs7QUFFQTs7QUFDQTs7QUFoQ0E7Ozs7Ozs7Ozs7Ozs7OztJQTJDcUJBLGdCOzs7OztBQUlqQiw0QkFBWUMsT0FBWixFQUF1QztBQUFBOztBQUFBO0FBQ25DLDRIQUFNQSxPQUFOO0FBRG1DO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBRW5DLFVBQUtDLE9BQUwsR0FBZSxJQUFmO0FBQ0EsVUFBS0MsYUFBTCxHQUFxQixJQUFyQjtBQUhtQztBQUl0Qzs7Ozs7Ozs7Ozs7O0FBR0cs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QUFDSFUsa0JBQUFBLE9BQU8sQ0FBQ0MsS0FBUixDQUFjLCtCQUFkO0FBQ0g7O0FBckJSO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLE9BQUQ7QUF3QkEsYUFBTztBQUNIQyxRQUFBQSxXQUFXLEVBQUUsdUJBQU07QUFDZixjQUFJTixZQUFKLEVBQWtCO0FBQ2RBLFlBQUFBLFlBQVksQ0FBQ00sV0FBYjtBQUNBbEYsWUFBQUEsSUFBSSxDQUFDbUYsTUFBTDtBQUNIO0FBQ0o7QUFORSxPQUFQO0FBUUg7Ozs7OztzREFFYXBCLE0sRUFBYTdELE0sRUFBZ0JnRSxPLEVBQWtCcEUsVTs7Ozs7Ozt1QkFDdEMsS0FBS0gsS0FBTCxDQUFXb0UsTUFBWCxFQUFtQjdELE1BQW5CLEVBQTJCRCxTQUEzQixFQUFzQ0EsU0FBdEMsRUFBaURpRSxPQUFPLElBQUksS0FBNUQsRUFBb0VwRSxVQUFwRSxDOzs7QUFBYnNGLGdCQUFBQSxJOztzQkFDRkEsSUFBSSxDQUFDdEIsTUFBTCxHQUFjLEM7Ozs7O21EQUNQc0IsSUFBSSxDQUFDLENBQUQsQzs7O3NCQUVUL0QsMEJBQWVnRSxjQUFmLEU7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBSWR0SCxnQkFBZ0IsQ0FBQ3VILFVBQWpCLEdBQThCLGtCQUE5QiIsInNvdXJjZXNDb250ZW50IjpbIi8qXG4gKiBDb3B5cmlnaHQgMjAxOC0yMDIwIFRPTiBERVYgU09MVVRJT05TIExURC5cbiAqXG4gKiBMaWNlbnNlZCB1bmRlciB0aGUgU09GVFdBUkUgRVZBTFVBVElPTiBMaWNlbnNlICh0aGUgXCJMaWNlbnNlXCIpOyB5b3UgbWF5IG5vdCB1c2VcbiAqIHRoaXMgZmlsZSBleGNlcHQgaW4gY29tcGxpYW5jZSB3aXRoIHRoZSBMaWNlbnNlLiAgWW91IG1heSBvYnRhaW4gYSBjb3B5IG9mIHRoZVxuICogTGljZW5zZSBhdDpcbiAqXG4gKiBodHRwOi8vd3d3LnRvbi5kZXYvbGljZW5zZXNcbiAqXG4gKiBVbmxlc3MgcmVxdWlyZWQgYnkgYXBwbGljYWJsZSBsYXcgb3IgYWdyZWVkIHRvIGluIHdyaXRpbmcsIHNvZnR3YXJlXG4gKiBkaXN0cmlidXRlZCB1bmRlciB0aGUgTGljZW5zZSBpcyBkaXN0cmlidXRlZCBvbiBhbiBcIkFTIElTXCIgQkFTSVMsXG4gKiBXSVRIT1VUIFdBUlJBTlRJRVMgT1IgQ09ORElUSU9OUyBPRiBBTlkgS0lORCwgZWl0aGVyIGV4cHJlc3Mgb3IgaW1wbGllZC5cbiAqIFNlZSB0aGUgTGljZW5zZSBmb3IgdGhlIHNwZWNpZmljIFRPTiBERVYgc29mdHdhcmUgZ292ZXJuaW5nIHBlcm1pc3Npb25zIGFuZFxuICogbGltaXRhdGlvbnMgdW5kZXIgdGhlIExpY2Vuc2UuXG4gKi9cblxuLy8gQGZsb3dcblxuaW1wb3J0IHsgSW5NZW1vcnlDYWNoZSB9IGZyb20gJ2Fwb2xsby1jYWNoZS1pbm1lbW9yeSc7XG5pbXBvcnQgeyBBcG9sbG9DbGllbnQgfSBmcm9tICdhcG9sbG8tY2xpZW50JztcbmltcG9ydCB7IHNwbGl0IH0gZnJvbSBcImFwb2xsby1saW5rXCI7XG5pbXBvcnQgeyBIdHRwTGluayB9IGZyb20gJ2Fwb2xsby1saW5rLWh0dHAnO1xuaW1wb3J0IHsgV2ViU29ja2V0TGluayB9IGZyb20gJ2Fwb2xsby1saW5rLXdzJztcbmltcG9ydCB7IGdldE1haW5EZWZpbml0aW9uIH0gZnJvbSAnYXBvbGxvLXV0aWxpdGllcyc7XG5pbXBvcnQgZ3FsIGZyb20gJ2dyYXBocWwtdGFnJztcbmltcG9ydCB7IFN1YnNjcmlwdGlvbkNsaWVudCB9IGZyb20gXCJzdWJzY3JpcHRpb25zLXRyYW5zcG9ydC13c1wiO1xuaW1wb3J0IHsgVE9OQ2xpZW50LCBUT05DbGllbnRFcnJvciB9IGZyb20gJy4uL1RPTkNsaWVudCc7XG5pbXBvcnQgdHlwZSB7IFRPTk1vZHVsZUNvbnRleHQgfSBmcm9tICcuLi9UT05Nb2R1bGUnO1xuaW1wb3J0IHsgVE9OTW9kdWxlIH0gZnJvbSAnLi4vVE9OTW9kdWxlJztcbmltcG9ydCBUT05Db25maWdNb2R1bGUsIHsgVVJMUGFydHMgfSBmcm9tICcuL1RPTkNvbmZpZ01vZHVsZSc7XG5cbmltcG9ydCB7IHNldENvbnRleHQgfSBmcm9tICdhcG9sbG8tbGluay1jb250ZXh0JztcbmltcG9ydCB7IEZPUk1BVF9URVhUX01BUCwgVGFncywgU3BhbiwgU3BhbkNvbnRleHQgfSBmcm9tICdvcGVudHJhY2luZyc7XG5cbnR5cGUgU3Vic2NyaXB0aW9uID0ge1xuICAgIHVuc3Vic2NyaWJlOiAoKSA9PiB2b2lkXG59XG5cbmV4cG9ydCB0eXBlIFJlcXVlc3QgPSB7XG4gICAgaWQ6IHN0cmluZyxcbiAgICBib2R5OiBzdHJpbmcsXG59XG5cbmV4cG9ydCBkZWZhdWx0IGNsYXNzIFRPTlF1ZXJpZXNNb2R1bGUgZXh0ZW5kcyBUT05Nb2R1bGUge1xuICAgIGNvbmZpZzogVE9OQ29uZmlnTW9kdWxlO1xuICAgIG92ZXJyaWRlV3NVcmw6ID9zdHJpbmc7XG5cbiAgICBjb25zdHJ1Y3Rvcihjb250ZXh0OiBUT05Nb2R1bGVDb250ZXh0KSB7XG4gICAgICAgIHN1cGVyKGNvbnRleHQpO1xuICAgICAgICB0aGlzLl9jbGllbnQgPSBudWxsO1xuICAgICAgICB0aGlzLm92ZXJyaWRlV3NVcmwgPSBudWxsO1xuICAgIH1cblxuICAgIGFzeW5jIHNldHVwKCkge1xuICAgICAgICB0aGlzLmNvbmZpZyA9IHRoaXMuY29udGV4dC5nZXRNb2R1bGUoVE9OQ29uZmlnTW9kdWxlKTtcbiAgICAgICAgdGhpcy50cmFuc2FjdGlvbnMgPSBuZXcgVE9OUUNvbGxlY3Rpb24odGhpcywgJ3RyYW5zYWN0aW9ucycpO1xuICAgICAgICB0aGlzLm1lc3NhZ2VzID0gbmV3IFRPTlFDb2xsZWN0aW9uKHRoaXMsICdtZXNzYWdlcycpO1xuICAgICAgICB0aGlzLmJsb2NrcyA9IG5ldyBUT05RQ29sbGVjdGlvbih0aGlzLCAnYmxvY2tzJyk7XG4gICAgICAgIHRoaXMuYWNjb3VudHMgPSBuZXcgVE9OUUNvbGxlY3Rpb24odGhpcywgJ2FjY291bnRzJyk7XG4gICAgfVxuXG4gICAgYXN5bmMgZ2V0Q2xpZW50Q29uZmlnKCkge1xuICAgICAgICBjb25zdCBjb25maWcgPSB0aGlzLmNvbmZpZztcbiAgICAgICAgY29uc3QgeyBjbGllbnRQbGF0Zm9ybSB9ID0gVE9OQ2xpZW50O1xuICAgICAgICBpZiAoIWNvbmZpZy5kYXRhIHx8ICFjbGllbnRQbGF0Zm9ybSkge1xuICAgICAgICAgICAgdGhyb3cgRXJyb3IoJ1RPTiBDbGllbnQgZG9lcyBub3QgY29uZmlndXJlZCcpO1xuICAgICAgICB9XG4gICAgICAgIGxldCBodHRwVXJsID0gY29uZmlnLnF1ZXJpZXNIdHRwVXJsKCk7XG4gICAgICAgIGxldCB3c1VybCA9IGNvbmZpZy5xdWVyaWVzV3NVcmwoKTtcbiAgICAgICAgY29uc3QgZmV0Y2ggPSBjbGllbnRQbGF0Zm9ybS5mZXRjaDtcbiAgICAgICAgY29uc3QgcmVzcG9uc2UgPSBhd2FpdCBmZXRjaChgJHtodHRwVXJsfT9xdWVyeT0lN0JpbmZvJTdCdmVyc2lvbiU3RCU3RGApO1xuICAgICAgICBpZiAocmVzcG9uc2UucmVkaXJlY3RlZCkge1xuICAgICAgICAgICAgY29uc3QgbG9jYXRpb24gPSBVUkxQYXJ0cy5maXgocmVzcG9uc2UudXJsLCBwYXJ0cyA9PiB7XG4gICAgICAgICAgICAgICAgcGFydHMucXVlcnkgPSAnJ1xuICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICBpZiAoISFsb2NhdGlvbikge1xuICAgICAgICAgICAgICAgIGh0dHBVcmwgPSBsb2NhdGlvbjtcbiAgICAgICAgICAgICAgICB3c1VybCA9IGxvY2F0aW9uXG4gICAgICAgICAgICAgICAgICAgIC5yZXBsYWNlKC9eaHR0cHM6XFwvXFwvL2dpLCAnd3NzOi8vJylcbiAgICAgICAgICAgICAgICAgICAgLnJlcGxhY2UoL15odHRwOlxcL1xcLy9naSwgJ3dzOi8vJyk7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgICAgcmV0dXJuIHtcbiAgICAgICAgICAgIGh0dHBVcmwsXG4gICAgICAgICAgICB3c1VybCxcbiAgICAgICAgICAgIGZldGNoLFxuICAgICAgICAgICAgV2ViU29ja2V0OiBjbGllbnRQbGF0Zm9ybS5XZWJTb2NrZXQsXG4gICAgICAgIH1cbiAgICB9XG5cbiAgICBhc3luYyBnZXRBY2NvdW50c0NvdW50KHBhcmVudFNwYW4/OiAoU3BhbiB8IFNwYW5Db250ZXh0KSk6IFByb21pc2U8bnVtYmVyPiB7XG4gICAgICAgIHJldHVybiB0aGlzLmNvbnRleHQudHJhY2UoJ1RPTlF1ZXJpZXNNb2R1bGUuanM6Z2V0QWNjb3VudENvdW50JywgYXN5bmMgKHNwYW46IFNwYW4pID0+IHtcbiAgICAgICAgICAgIGNvbnN0IHJlc3VsdCA9IGF3YWl0IHRoaXMucXVlcnkoJ3F1ZXJ5e2dldEFjY291bnRzQ291bnR9JywgdW5kZWZpbmVkLCBzcGFuKTtcbiAgICAgICAgICAgIHJldHVybiByZXN1bHQuZGF0YS5nZXRBY2NvdW50c0NvdW50O1xuICAgICAgICB9LCBwYXJlbnRTcGFuKTtcbiAgICB9XG5cbiAgICBhc3luYyBnZXRUcmFuc2FjdGlvbnNDb3VudChwYXJlbnRTcGFuPzogKFNwYW4gfCBTcGFuQ29udGV4dCkpOiBQcm9taXNlPG51bWJlcj4ge1xuICAgICAgICByZXR1cm4gdGhpcy5jb250ZXh0LnRyYWNlKCdUT05RdWVyaWVzTW9kdWxlLmpzOmdldFRyYW5zYWN0aW9uQ291bnQnLCBhc3luYyAoc3BhbjogU3BhbikgPT4ge1xuICAgICAgICAgICAgY29uc3QgcmVzdWx0ID0gYXdhaXQgdGhpcy5xdWVyeSgncXVlcnl7Z2V0VHJhbnNhY3Rpb25zQ291bnR9JywgdW5kZWZpbmVkLCBzcGFuKTtcbiAgICAgICAgICAgIHJldHVybiByZXN1bHQuZGF0YS5nZXRUcmFuc2FjdGlvbnNDb3VudDtcbiAgICAgICAgfSwgcGFyZW50U3Bhbik7XG4gICAgfVxuXG4gICAgYXN5bmMgZ2V0QWNjb3VudHNUb3RhbEJhbGFuY2UocGFyZW50U3Bhbj86IChTcGFuIHwgU3BhbkNvbnRleHQpKTogUHJvbWlzZTxzdHJpbmc+IHtcbiAgICAgICAgcmV0dXJuIHRoaXMuY29udGV4dC50cmFjZSgnVE9OUXVlcmllc01vZHVsZS5qczpnZXRBY2NvdW50c1RvdGFsQmFsYW5jZScsIGFzeW5jIChzcGFuOiBTcGFuKSA9PiB7XG4gICAgICAgICAgICBjb25zdCByZXN1bHQgPSBhd2FpdCB0aGlzLnF1ZXJ5KCdxdWVyeXtnZXRBY2NvdW50c1RvdGFsQmFsYW5jZX0nLCB1bmRlZmluZWQsIHNwYW4pO1xuICAgICAgICAgICAgcmV0dXJuIHJlc3VsdC5kYXRhLmdldEFjY291bnRzVG90YWxCYWxhbmNlO1xuICAgICAgICB9LCBwYXJlbnRTcGFuKTtcbiAgICB9XG5cbiAgICBhc3luYyBwb3N0UmVxdWVzdHMocmVxdWVzdHM6IFJlcXVlc3RbXSwgcGFyZW50U3Bhbj86IChTcGFuIHwgU3BhbkNvbnRleHQpKTogUHJvbWlzZTxhbnk+IHtcbiAgICAgICAgcmV0dXJuIHRoaXMuY29udGV4dC50cmFjZSgnVE9OUXVlcmllc01vZHVsZS5qczpwb3N0UmVxdWVzdHMnLCBhc3luYyAoc3BhbjogU3BhbikgPT4ge1xuICAgICAgICAgICAgcmV0dXJuIHRoaXMubXV0YXRpb24oYG11dGF0aW9uIHBvc3RSZXF1ZXN0cygkcmVxdWVzdHM6IFtSZXF1ZXN0XSkge1xuICAgICAgICAgICAgICAgIHBvc3RSZXF1ZXN0cyhyZXF1ZXN0czogJHJlcXVlc3RzKVxuICAgICAgICAgICAgfWAsIHtcbiAgICAgICAgICAgICAgICByZXF1ZXN0cyxcbiAgICAgICAgICAgIH0sIHNwYW4pO1xuICAgICAgICB9LCBwYXJlbnRTcGFuKTtcbiAgICB9XG5cbiAgICBhc3luYyBtdXRhdGlvbihxbDogc3RyaW5nLCB2YXJpYWJsZXM6IHsgW3N0cmluZ106IGFueSB9ID0ge30sIHBhcmVudFNwYW4/OiAoU3BhbiB8IFNwYW5Db250ZXh0KSk6IFByb21pc2U8YW55PiB7XG4gICAgICAgIHJldHVybiB0aGlzLmNvbnRleHQudHJhY2UoJ1RPTlF1ZXJpZXNNb2R1bGUuanM6bXV0YXRpb24nLCBhc3luYyAoc3BhbjogU3BhbikgPT4ge1xuICAgICAgICAgICAgY29uc3QgbXV0YXRpb24gPSBncWwoW3FsXSk7XG4gICAgICAgICAgICBzcGFuLmxvZyh7XG4gICAgICAgICAgICAgICAgZXZlbnQ6ICdUT05RdWVyaWVzTW9kdWxlLmpzOnF1ZXJ5IGFyZ3MnLFxuICAgICAgICAgICAgICAgIHZhbHVlOiB7XG4gICAgICAgICAgICAgICAgICAgIG11dGF0aW9uOiBxbCxcbiAgICAgICAgICAgICAgICAgICAgdmFyaWFibGVzLFxuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgcmV0dXJuIHRoaXMuX2dyYXBoUWwoY2xpZW50ID0+IGNsaWVudC5tdXRhdGUoe1xuICAgICAgICAgICAgICAgIG11dGF0aW9uLFxuICAgICAgICAgICAgICAgIHZhcmlhYmxlcyxcbiAgICAgICAgICAgICAgICBjb250ZXh0OiB7XG4gICAgICAgICAgICAgICAgICAgIHRyYWNlU3Bhbjogc3BhbixcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9KSk7XG4gICAgICAgIH0sIHBhcmVudFNwYW4pO1xuICAgIH1cblxuICAgIGFzeW5jIHF1ZXJ5KHFsOiBzdHJpbmcsIHZhcmlhYmxlczogeyBbc3RyaW5nXTogYW55IH0gPSB7fSwgcGFyZW50U3Bhbj86IChTcGFuIHwgU3BhbkNvbnRleHQpKTogUHJvbWlzZTxhbnk+IHtcbiAgICAgICAgcmV0dXJuIHRoaXMuY29udGV4dC50cmFjZSgnVE9OUXVlcmllc01vZHVsZS5qczpxdWVyeScsIGFzeW5jIChzcGFuOiBTcGFuKSA9PiB7XG4gICAgICAgICAgICBjb25zdCBxdWVyeSA9IGdxbChbcWxdKTtcbiAgICAgICAgICAgIHNwYW4ubG9nKHtcbiAgICAgICAgICAgICAgICBldmVudDogJ1RPTlF1ZXJpZXNNb2R1bGUuanM6cXVlcnkgYXJncycsXG4gICAgICAgICAgICAgICAgdmFsdWU6IHtcbiAgICAgICAgICAgICAgICAgICAgcXVlcnk6IHFsLFxuICAgICAgICAgICAgICAgICAgICB2YXJpYWJsZXMsXG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICByZXR1cm4gdGhpcy5fZ3JhcGhRbChjbGllbnQgPT4gY2xpZW50LnF1ZXJ5KHtcbiAgICAgICAgICAgICAgICBxdWVyeSxcbiAgICAgICAgICAgICAgICB2YXJpYWJsZXMsXG4gICAgICAgICAgICAgICAgY29udGV4dDoge1xuICAgICAgICAgICAgICAgICAgICB0cmFjZVNwYW46IHNwYW4sXG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfSksIHNwYW4pO1xuXG4gICAgICAgIH0sIHBhcmVudFNwYW4pO1xuICAgIH1cblxuICAgIGFzeW5jIF9ncmFwaFFsKHJlcXVlc3Q6IChjbGllbnQ6IEFwb2xsb0NsaWVudCkgPT4gUHJvbWlzZTxhbnk+LCBzcGFuOiBTcGFuKTogUHJvbWlzZTxhbnk+IHtcbiAgICAgICAgY29uc3QgY2xpZW50ID0gYXdhaXQgdGhpcy5lbnN1cmVDbGllbnQoc3Bhbik7XG4gICAgICAgIHRyeSB7XG4gICAgICAgICAgICByZXR1cm4gcmVxdWVzdChjbGllbnQpO1xuICAgICAgICB9IGNhdGNoIChlcnJvcikge1xuICAgICAgICAgICAgY29uc3QgZXJyb3JzID0gZXJyb3IgJiYgZXJyb3IubmV0d29ya0Vycm9yICYmIGVycm9yLm5ldHdvcmtFcnJvci5yZXN1bHQgJiYgZXJyb3IubmV0d29ya0Vycm9yLnJlc3VsdC5lcnJvcnM7XG4gICAgICAgICAgICBpZiAoZXJyb3JzKSB7XG4gICAgICAgICAgICAgICAgdGhyb3cgVE9OQ2xpZW50RXJyb3IucXVlcnlGYWlsZWQoZXJyb3JzKTtcbiAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgICAgdGhyb3cgZXJyb3I7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICBhc3luYyBlbnN1cmVDbGllbnQoc3BhbjogU3Bhbik6IEFwb2xsb0NsaWVudCB7XG4gICAgICAgIGlmICh0aGlzLl9jbGllbnQpIHtcbiAgICAgICAgICAgIHJldHVybiB0aGlzLl9jbGllbnQ7XG4gICAgICAgIH1cbiAgICAgICAgc3Bhbi5sb2coe1xuICAgICAgICAgICAgZXZlbnQ6ICdUT05RdWVyaWVzTW9kdWxlLmVuc3VyZUNsaWVudCBiZWZvcmUgc2V0dXAnLFxuICAgICAgICB9KTtcbiAgICAgICAgY29uc3QgeyBodHRwVXJsLCB3c1VybCwgZmV0Y2gsIFdlYlNvY2tldCB9ID0gYXdhaXQgdGhpcy5nZXRDbGllbnRDb25maWcoKTtcbiAgICAgICAgbGV0IHN1YnNPcHRpb25zID0gdGhpcy5jb25maWcudHJhY2VyLmluamVjdChzcGFuLCBGT1JNQVRfVEVYVF9NQVAsIHt9KTtcbiAgICAgICAgY29uc3Qgc3Vic2NyaXB0aW9uQ2xpZW50ID0gbmV3IFN1YnNjcmlwdGlvbkNsaWVudChcbiAgICAgICAgICAgIHdzVXJsLFxuICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgIHJlY29ubmVjdDogdHJ1ZSxcbiAgICAgICAgICAgICAgICBjb25uZWN0aW9uUGFyYW1zOiAoKSA9PiAoe1xuICAgICAgICAgICAgICAgICAgICBoZWFkZXJzOiBzdWJzT3B0aW9ucyxcbiAgICAgICAgICAgICAgICB9KSxcbiAgICAgICAgICAgIH0sXG4gICAgICAgICAgICBXZWJTb2NrZXRcbiAgICAgICAgKTtcbiAgICAgICAgc3Vic2NyaXB0aW9uQ2xpZW50Lm1heENvbm5lY3RUaW1lR2VuZXJhdG9yLmR1cmF0aW9uID0gKCkgPT4gc3Vic2NyaXB0aW9uQ2xpZW50Lm1heENvbm5lY3RUaW1lR2VuZXJhdG9yLm1heDtcbiAgICAgICAgY29uc3QgdHJhY2VyTGluayA9IGF3YWl0IHNldENvbnRleHQoKHFsUmVxLCByZXEpID0+IHtcbiAgICAgICAgICAgIGNvbnN0IHJlc29sdmVkU3BhbiA9IChxbFJlcS5jb250ZXh0ICYmIHFsUmVxLmNvbnRleHQudHJhY2VTcGFuKSB8fCBzcGFuO1xuICAgICAgICAgICAgcmVxLmhlYWRlcnMgPSB7fTtcbiAgICAgICAgICAgIHRoaXMuY29uZmlnLnRyYWNlci5pbmplY3QocmVzb2x2ZWRTcGFuLCBGT1JNQVRfVEVYVF9NQVAsIHJlcS5oZWFkZXJzKTtcbiAgICAgICAgICAgIHJldHVybiB7XG4gICAgICAgICAgICAgICAgaGVhZGVyczogcmVxLmhlYWRlcnMsXG4gICAgICAgICAgICB9O1xuICAgICAgICB9KTtcbiAgICAgICAgdGhpcy5fY2xpZW50ID0gbmV3IEFwb2xsb0NsaWVudCh7XG4gICAgICAgICAgICBjYWNoZTogbmV3IEluTWVtb3J5Q2FjaGUoe30pLFxuICAgICAgICAgICAgbGluazogc3BsaXQoXG4gICAgICAgICAgICAgICAgKHsgcXVlcnkgfSkgPT4ge1xuICAgICAgICAgICAgICAgICAgICBjb25zdCBkZWZpbml0aW9uID0gZ2V0TWFpbkRlZmluaXRpb24ocXVlcnkpO1xuICAgICAgICAgICAgICAgICAgICByZXR1cm4gKFxuICAgICAgICAgICAgICAgICAgICAgICAgZGVmaW5pdGlvbi5raW5kID09PSAnT3BlcmF0aW9uRGVmaW5pdGlvbidcbiAgICAgICAgICAgICAgICAgICAgICAgICYmIGRlZmluaXRpb24ub3BlcmF0aW9uID09PSAnc3Vic2NyaXB0aW9uJ1xuICAgICAgICAgICAgICAgICAgICApO1xuICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgbmV3IFdlYlNvY2tldExpbmsoc3Vic2NyaXB0aW9uQ2xpZW50KSxcbiAgICAgICAgICAgICAgICB0cmFjZXJMaW5rLmNvbmNhdChuZXcgSHR0cExpbmsoe1xuICAgICAgICAgICAgICAgICAgICB1cmk6IGh0dHBVcmwsXG4gICAgICAgICAgICAgICAgICAgIGZldGNoLFxuICAgICAgICAgICAgICAgIH0pKSxcbiAgICAgICAgICAgICksXG4gICAgICAgICAgICBkZWZhdWx0T3B0aW9uczoge1xuICAgICAgICAgICAgICAgIHdhdGNoUXVlcnk6IHtcbiAgICAgICAgICAgICAgICAgICAgZmV0Y2hQb2xpY3k6ICduby1jYWNoZScsXG4gICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICBxdWVyeToge1xuICAgICAgICAgICAgICAgICAgICBmZXRjaFBvbGljeTogJ25vLWNhY2hlJyxcbiAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgfVxuICAgICAgICB9KTtcbiAgICAgICAgc3Bhbi5sb2coe1xuICAgICAgICAgICAgZXZlbnQ6ICdUT05RdWVyaWVzTW9kdWxlLmVuc3VyZUNsaWVudCBhZnRlciBzZXR1cCcsXG4gICAgICAgIH0pO1xuICAgICAgICByZXR1cm4gdGhpcy5fY2xpZW50O1xuICAgIH1cblxuICAgIGFzeW5jIGNsb3NlKCkge1xuICAgICAgICBpZiAodGhpcy5fY2xpZW50KSB7XG4gICAgICAgICAgICBjb25zdCBjbGllbnQgPSB0aGlzLl9jbGllbnQ7XG4gICAgICAgICAgICB0aGlzLl9jbGllbnQgPSBudWxsO1xuICAgICAgICAgICAgY2xpZW50LnN0b3AoKTtcbiAgICAgICAgICAgIGF3YWl0IGNsaWVudC5jbGVhclN0b3JlKCk7XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICB0cmFuc2FjdGlvbnM6IFRPTlFDb2xsZWN0aW9uO1xuXG4gICAgbWVzc2FnZXM6IFRPTlFDb2xsZWN0aW9uO1xuXG4gICAgYmxvY2tzOiBUT05RQ29sbGVjdGlvbjtcblxuICAgIGFjY291bnRzOiBUT05RQ29sbGVjdGlvbjtcblxuICAgIF9jbGllbnQ6IEFwb2xsb0NsaWVudDtcbn1cblxuXG50eXBlIERvY0V2ZW50ID0gKGNoYW5nZVR5cGU6IHN0cmluZywgZG9jOiBhbnkpID0+IHZvaWQ7XG5cbnR5cGUgT3JkZXJCeSA9IHtcbiAgICBwYXRoOiBzdHJpbmcsXG4gICAgZGlyZWN0aW9uOiAnQVNDJyB8ICdERVNDJ1xufVxuXG5jbGFzcyBUT05RQ29sbGVjdGlvbiB7XG4gICAgbW9kdWxlOiBUT05RdWVyaWVzTW9kdWxlO1xuXG4gICAgY29sbGVjdGlvbk5hbWU6IHN0cmluZztcbiAgICB0eXBlTmFtZTogc3RyaW5nO1xuXG4gICAgY29uc3RydWN0b3IobW9kdWxlOiBUT05RdWVyaWVzTW9kdWxlLCBjb2xsZWN0aW9uTmFtZTogc3RyaW5nKSB7XG4gICAgICAgIHRoaXMubW9kdWxlID0gbW9kdWxlO1xuICAgICAgICB0aGlzLmNvbGxlY3Rpb25OYW1lID0gY29sbGVjdGlvbk5hbWU7XG4gICAgICAgIHRoaXMudHlwZU5hbWUgPSBjb2xsZWN0aW9uTmFtZS5zdWJzdHIoMCwgMSkudG9VcHBlckNhc2UoKSArXG4gICAgICAgICAgICBjb2xsZWN0aW9uTmFtZS5zdWJzdHIoMSwgY29sbGVjdGlvbk5hbWUubGVuZ3RoIC0gMik7XG4gICAgfVxuXG4gICAgYXN5bmMgcXVlcnkoZmlsdGVyOiBhbnksIHJlc3VsdDogc3RyaW5nLCBvcmRlckJ5PzogT3JkZXJCeVtdLCBsaW1pdD86IG51bWJlciwgdGltZW91dD86IG51bWJlciwgcGFyZW50U3Bhbj86IChTcGFuIHwgU3BhbkNvbnRleHQpKTogUHJvbWlzZTxhbnk+IHtcbiAgICAgICAgY29uc3QgYyA9IHRoaXMuY29sbGVjdGlvbk5hbWU7XG4gICAgICAgIGNvbnN0IHQgPSB0aGlzLnR5cGVOYW1lO1xuICAgICAgICBjb25zdCBxbCA9IGBxdWVyeSAke2N9KCRmaWx0ZXI6ICR7dH1GaWx0ZXIsICRvcmRlckJ5OiBbUXVlcnlPcmRlckJ5XSwgJGxpbWl0OiBJbnQsICR0aW1lb3V0OiBGbG9hdCkge1xuICAgICAgICAgICAgJHtjfShmaWx0ZXI6ICRmaWx0ZXIsIG9yZGVyQnk6ICRvcmRlckJ5LCBsaW1pdDogJGxpbWl0LCB0aW1lb3V0OiAkdGltZW91dCkgeyAke3Jlc3VsdH0gfVxuICAgICAgICB9YDtcbiAgICAgICAgY29uc3QgdmFyaWFibGVzOiB7IFtzdHJpbmddOiBhbnkgfSA9IHtcbiAgICAgICAgICAgIGZpbHRlcixcbiAgICAgICAgICAgIG9yZGVyQnksXG4gICAgICAgICAgICBsaW1pdCxcbiAgICAgICAgfTtcbiAgICAgICAgaWYgKHRpbWVvdXQpIHtcbiAgICAgICAgICAgIHZhcmlhYmxlcy50aW1lb3V0ID0gdGltZW91dDtcbiAgICAgICAgfVxuICAgICAgICByZXR1cm4gKGF3YWl0IHRoaXMubW9kdWxlLnF1ZXJ5KHFsLCB2YXJpYWJsZXMsIHBhcmVudFNwYW4pKS5kYXRhW2NdO1xuICAgIH1cblxuICAgIHN1YnNjcmliZShcbiAgICAgICAgZmlsdGVyOiBhbnksXG4gICAgICAgIHJlc3VsdDogc3RyaW5nLFxuICAgICAgICBvbkRvY0V2ZW50OiBEb2NFdmVudCxcbiAgICAgICAgb25FcnJvcj86IChlcnI6IEVycm9yKSA9PiB2b2lkXG4gICAgKTogU3Vic2NyaXB0aW9uIHtcbiAgICAgICAgY29uc3Qgc3BhbiA9IHRoaXMubW9kdWxlLmNvbmZpZy50cmFjZXIuc3RhcnRTcGFuKCdUT05RdWVyaWVzTW9kdWxlLmpzOnN1YnNjcmliZSAnKTtcbiAgICAgICAgc3Bhbi5zZXRUYWcoVGFncy5TUEFOX0tJTkQsICdjbGllbnQnKTtcbiAgICAgICAgY29uc3QgdGV4dCA9IGBzdWJzY3JpcHRpb24gJHt0aGlzLmNvbGxlY3Rpb25OYW1lfSgkZmlsdGVyOiAke3RoaXMudHlwZU5hbWV9RmlsdGVyKSB7XG4gICAgICAgIFx0JHt0aGlzLmNvbGxlY3Rpb25OYW1lfShmaWx0ZXI6ICRmaWx0ZXIpIHsgJHtyZXN1bHR9IH1cbiAgICAgICAgfWA7XG4gICAgICAgIGNvbnN0IHF1ZXJ5ID0gZ3FsKFt0ZXh0XSk7XG4gICAgICAgIHNwYW4ubG9nKHtcbiAgICAgICAgICAgIGV2ZW50OiAnc3Vic2NyaXB0aW9uJyxcbiAgICAgICAgICAgIHZhbHVlOiBxdWVyeVxuICAgICAgICB9KTtcbiAgICAgICAgbGV0IHN1YnNjcmlwdGlvbiA9IG51bGw7XG4gICAgICAgIChhc3luYyAoKSA9PiB7XG4gICAgICAgICAgICB0cnkge1xuICAgICAgICAgICAgICAgIGNvbnN0IGNsaWVudCA9IGF3YWl0IHRoaXMubW9kdWxlLmVuc3VyZUNsaWVudChzcGFuKTtcbiAgICAgICAgICAgICAgICBjb25zdCBvYnNlcnZhYmxlID0gY2xpZW50LnN1YnNjcmliZSh7XG4gICAgICAgICAgICAgICAgICAgIHF1ZXJ5LFxuICAgICAgICAgICAgICAgICAgICB2YXJpYWJsZXM6IHtcbiAgICAgICAgICAgICAgICAgICAgICAgIGZpbHRlcixcbiAgICAgICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICB9KTtcbiAgICAgICAgICAgICAgICBzdWJzY3JpcHRpb24gPSBvYnNlcnZhYmxlLnN1YnNjcmliZSgobWVzc2FnZSkgPT4ge1xuICAgICAgICAgICAgICAgICAgICBvbkRvY0V2ZW50KCdpbnNlcnQvdXBkYXRlJywgbWVzc2FnZS5kYXRhW3RoaXMuY29sbGVjdGlvbk5hbWVdKTtcbiAgICAgICAgICAgICAgICB9KTtcbiAgICAgICAgICAgIH0gY2F0Y2ggKGVycm9yKSB7XG4gICAgICAgICAgICAgICAgYXdhaXQgc3Bhbi5sb2coe1xuICAgICAgICAgICAgICAgICAgICBldmVudDogJ3N1YnNjcmlwdGlvbiBmYWlsZWQnLFxuICAgICAgICAgICAgICAgICAgICB2YWx1ZTogZXJyb3JcbiAgICAgICAgICAgICAgICB9KTtcbiAgICAgICAgICAgICAgICBpZiAob25FcnJvcikge1xuICAgICAgICAgICAgICAgICAgICBvbkVycm9yKGVycm9yKTtcbiAgICAgICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAgICAgICBjb25zb2xlLmVycm9yKCdUT04gQ2xpZW50IHN1YnNjcmlwdGlvbiBlcnJvcicsIGVycm9yKTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG4gICAgICAgIH0pKCk7XG4gICAgICAgIHJldHVybiB7XG4gICAgICAgICAgICB1bnN1YnNjcmliZTogKCkgPT4ge1xuICAgICAgICAgICAgICAgIGlmIChzdWJzY3JpcHRpb24pIHtcbiAgICAgICAgICAgICAgICAgICAgc3Vic2NyaXB0aW9uLnVuc3Vic2NyaWJlKCk7XG4gICAgICAgICAgICAgICAgICAgIHNwYW4uZmluaXNoKCk7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfSxcbiAgICAgICAgfTtcbiAgICB9XG5cbiAgICBhc3luYyB3YWl0Rm9yKGZpbHRlcjogYW55LCByZXN1bHQ6IHN0cmluZywgdGltZW91dD86IG51bWJlciwgcGFyZW50U3Bhbj86IChTcGFuIHwgU3BhbkNvbnRleHQpKTogUHJvbWlzZTxhbnk+IHtcbiAgICAgICAgY29uc3QgZG9jcyA9IGF3YWl0IHRoaXMucXVlcnkoZmlsdGVyLCByZXN1bHQsIHVuZGVmaW5lZCwgdW5kZWZpbmVkLCB0aW1lb3V0IHx8IDQwXzAwMCwgcGFyZW50U3Bhbik7XG4gICAgICAgIGlmIChkb2NzLmxlbmd0aCA+IDApIHtcbiAgICAgICAgICAgIHJldHVybiBkb2NzWzBdO1xuICAgICAgICB9XG4gICAgICAgIHRocm93IFRPTkNsaWVudEVycm9yLndhaXRGb3JUaW1lb3V0KCk7XG4gICAgfVxufVxuXG5UT05RdWVyaWVzTW9kdWxlLm1vZHVsZU5hbWUgPSAnVE9OUXVlcmllc01vZHVsZSc7XG4iXX0=