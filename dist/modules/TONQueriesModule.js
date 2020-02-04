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
      _regenerator["default"].mark(function _callee3(parentSpan) {
        var result;
        return _regenerator["default"].wrap(function _callee3$(_context3) {
          while (1) {
            switch (_context3.prev = _context3.next) {
              case 0:
                _context3.next = 2;
                return this.query('query{getAccountsCount}', undefined, parentSpan);

              case 2:
                result = _context3.sent;
                return _context3.abrupt("return", result.data.getAccountsCount);

              case 4:
              case "end":
                return _context3.stop();
            }
          }
        }, _callee3, this);
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
      _regenerator["default"].mark(function _callee4(parentSpan) {
        var result;
        return _regenerator["default"].wrap(function _callee4$(_context4) {
          while (1) {
            switch (_context4.prev = _context4.next) {
              case 0:
                _context4.next = 2;
                return this.query('query{getTransactionsCount}', undefined, parentSpan);

              case 2:
                result = _context4.sent;
                return _context4.abrupt("return", result.data.getTransactionsCount);

              case 4:
              case "end":
                return _context4.stop();
            }
          }
        }, _callee4, this);
      }));

      function getTransactionsCount(_x2) {
        return _getTransactionsCount.apply(this, arguments);
      }

      return getTransactionsCount;
    }()
  }, {
    key: "getAccountsTotalBalance",
    value: function () {
      var _getAccountsTotalBalance = (0, _asyncToGenerator2["default"])(
      /*#__PURE__*/
      _regenerator["default"].mark(function _callee5(parentSpan) {
        var result;
        return _regenerator["default"].wrap(function _callee5$(_context5) {
          while (1) {
            switch (_context5.prev = _context5.next) {
              case 0:
                _context5.next = 2;
                return this.query('query{getAccountsTotalBalance}', undefined, parentSpan);

              case 2:
                result = _context5.sent;
                return _context5.abrupt("return", result.data.getAccountsTotalBalance);

              case 4:
              case "end":
                return _context5.stop();
            }
          }
        }, _callee5, this);
      }));

      function getAccountsTotalBalance(_x3) {
        return _getAccountsTotalBalance.apply(this, arguments);
      }

      return getAccountsTotalBalance;
    }()
  }, {
    key: "postRequests",
    value: function () {
      var _postRequests = (0, _asyncToGenerator2["default"])(
      /*#__PURE__*/
      _regenerator["default"].mark(function _callee7(requests, parentSpan) {
        var _this2 = this;

        return _regenerator["default"].wrap(function _callee7$(_context7) {
          while (1) {
            switch (_context7.prev = _context7.next) {
              case 0:
                return _context7.abrupt("return", this.context.trace('queries.postRequests',
                /*#__PURE__*/
                function () {
                  var _ref = (0, _asyncToGenerator2["default"])(
                  /*#__PURE__*/
                  _regenerator["default"].mark(function _callee6(span) {
                    return _regenerator["default"].wrap(function _callee6$(_context6) {
                      while (1) {
                        switch (_context6.prev = _context6.next) {
                          case 0:
                            return _context6.abrupt("return", _this2._mutation("mutation postRequests($requests: [Request]) {\n                postRequests(requests: $requests)\n            }", {
                              requests: requests
                            }, span));

                          case 1:
                          case "end":
                            return _context6.stop();
                        }
                      }
                    }, _callee6);
                  }));

                  return function (_x6) {
                    return _ref.apply(this, arguments);
                  };
                }(), parentSpan));

              case 1:
              case "end":
                return _context7.stop();
            }
          }
        }, _callee7, this);
      }));

      function postRequests(_x4, _x5) {
        return _postRequests.apply(this, arguments);
      }

      return postRequests;
    }()
  }, {
    key: "mutation",
    value: function () {
      var _mutation2 = (0, _asyncToGenerator2["default"])(
      /*#__PURE__*/
      _regenerator["default"].mark(function _callee9(ql) {
        var _this3 = this;

        var variables,
            parentSpan,
            _args9 = arguments;
        return _regenerator["default"].wrap(function _callee9$(_context9) {
          while (1) {
            switch (_context9.prev = _context9.next) {
              case 0:
                variables = _args9.length > 1 && _args9[1] !== undefined ? _args9[1] : {};
                parentSpan = _args9.length > 2 ? _args9[2] : undefined;
                return _context9.abrupt("return", this.context.trace('queries.mutation',
                /*#__PURE__*/
                function () {
                  var _ref2 = (0, _asyncToGenerator2["default"])(
                  /*#__PURE__*/
                  _regenerator["default"].mark(function _callee8(span) {
                    return _regenerator["default"].wrap(function _callee8$(_context8) {
                      while (1) {
                        switch (_context8.prev = _context8.next) {
                          case 0:
                            span.setTag('params', {
                              mutation: ql,
                              variables: variables
                            });
                            return _context8.abrupt("return", _this3._mutation(ql, variables, span));

                          case 2:
                          case "end":
                            return _context8.stop();
                        }
                      }
                    }, _callee8);
                  }));

                  return function (_x8) {
                    return _ref2.apply(this, arguments);
                  };
                }(), parentSpan));

              case 3:
              case "end":
                return _context9.stop();
            }
          }
        }, _callee9, this);
      }));

      function mutation(_x7) {
        return _mutation2.apply(this, arguments);
      }

      return mutation;
    }()
  }, {
    key: "query",
    value: function () {
      var _query2 = (0, _asyncToGenerator2["default"])(
      /*#__PURE__*/
      _regenerator["default"].mark(function _callee11(ql) {
        var _this4 = this;

        var variables,
            parentSpan,
            _args11 = arguments;
        return _regenerator["default"].wrap(function _callee11$(_context11) {
          while (1) {
            switch (_context11.prev = _context11.next) {
              case 0:
                variables = _args11.length > 1 && _args11[1] !== undefined ? _args11[1] : {};
                parentSpan = _args11.length > 2 ? _args11[2] : undefined;
                return _context11.abrupt("return", this.context.trace('queries.query',
                /*#__PURE__*/
                function () {
                  var _ref3 = (0, _asyncToGenerator2["default"])(
                  /*#__PURE__*/
                  _regenerator["default"].mark(function _callee10(span) {
                    return _regenerator["default"].wrap(function _callee10$(_context10) {
                      while (1) {
                        switch (_context10.prev = _context10.next) {
                          case 0:
                            span.setTag('params', {
                              query: ql,
                              variables: variables
                            });
                            return _context10.abrupt("return", _this4._query(ql, variables, span));

                          case 2:
                          case "end":
                            return _context10.stop();
                        }
                      }
                    }, _callee10);
                  }));

                  return function (_x10) {
                    return _ref3.apply(this, arguments);
                  };
                }(), parentSpan));

              case 3:
              case "end":
                return _context11.stop();
            }
          }
        }, _callee11, this);
      }));

      function query(_x9) {
        return _query2.apply(this, arguments);
      }

      return query;
    }()
  }, {
    key: "_mutation",
    value: function () {
      var _mutation3 = (0, _asyncToGenerator2["default"])(
      /*#__PURE__*/
      _regenerator["default"].mark(function _callee12(ql) {
        var variables,
            span,
            mutation,
            _args12 = arguments;
        return _regenerator["default"].wrap(function _callee12$(_context12) {
          while (1) {
            switch (_context12.prev = _context12.next) {
              case 0:
                variables = _args12.length > 1 && _args12[1] !== undefined ? _args12[1] : {};
                span = _args12.length > 2 ? _args12[2] : undefined;
                mutation = (0, _graphqlTag["default"])([ql]);
                return _context12.abrupt("return", this._graphQl(function (client) {
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
                return _context12.stop();
            }
          }
        }, _callee12, this);
      }));

      function _mutation(_x11) {
        return _mutation3.apply(this, arguments);
      }

      return _mutation;
    }()
  }, {
    key: "_query",
    value: function () {
      var _query3 = (0, _asyncToGenerator2["default"])(
      /*#__PURE__*/
      _regenerator["default"].mark(function _callee13(ql) {
        var variables,
            span,
            query,
            _args13 = arguments;
        return _regenerator["default"].wrap(function _callee13$(_context13) {
          while (1) {
            switch (_context13.prev = _context13.next) {
              case 0:
                variables = _args13.length > 1 && _args13[1] !== undefined ? _args13[1] : {};
                span = _args13.length > 2 ? _args13[2] : undefined;
                query = (0, _graphqlTag["default"])([ql]);
                return _context13.abrupt("return", this._graphQl(function (client) {
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
                return _context13.stop();
            }
          }
        }, _callee13, this);
      }));

      function _query(_x12) {
        return _query3.apply(this, arguments);
      }

      return _query;
    }()
  }, {
    key: "_graphQl",
    value: function () {
      var _graphQl2 = (0, _asyncToGenerator2["default"])(
      /*#__PURE__*/
      _regenerator["default"].mark(function _callee14(request, span) {
        var client, errors;
        return _regenerator["default"].wrap(function _callee14$(_context14) {
          while (1) {
            switch (_context14.prev = _context14.next) {
              case 0:
                _context14.next = 2;
                return this.ensureClient(span);

              case 2:
                client = _context14.sent;
                _context14.prev = 3;
                return _context14.abrupt("return", request(client));

              case 7:
                _context14.prev = 7;
                _context14.t0 = _context14["catch"](3);
                errors = _context14.t0 && _context14.t0.networkError && _context14.t0.networkError.result && _context14.t0.networkError.result.errors;

                if (!errors) {
                  _context14.next = 14;
                  break;
                }

                throw _TONClient.TONClientError.queryFailed(errors);

              case 14:
                throw _context14.t0;

              case 15:
              case "end":
                return _context14.stop();
            }
          }
        }, _callee14, this, [[3, 7]]);
      }));

      function _graphQl(_x13, _x14) {
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
        var _this5 = this;

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
                _context16.next = 4;
                return this.context.trace('setup client',
                /*#__PURE__*/
                function () {
                  var _ref4 = (0, _asyncToGenerator2["default"])(
                  /*#__PURE__*/
                  _regenerator["default"].mark(function _callee15(span) {
                    var _ref5, httpUrl, wsUrl, fetch, WebSocket, subsOptions, subscriptionClient, tracerLink;

                    return _regenerator["default"].wrap(function _callee15$(_context15) {
                      while (1) {
                        switch (_context15.prev = _context15.next) {
                          case 0:
                            _context15.next = 2;
                            return _this5.getClientConfig();

                          case 2:
                            _ref5 = _context15.sent;
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

                            _context15.next = 12;
                            return (0, _apolloLinkContext.setContext)(function (_, req) {
                              var resolvedSpan = req && req.traceSpan || span;
                              req.headers = {};

                              _this5.config.tracer.inject(resolvedSpan, _opentracing.FORMAT_TEXT_MAP, req.headers);

                              return {
                                headers: req.headers
                              };
                            });

                          case 12:
                            tracerLink = _context15.sent;
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
                            return _context15.stop();
                        }
                      }
                    }, _callee15);
                  }));

                  return function (_x16) {
                    return _ref4.apply(this, arguments);
                  };
                }(), span);

              case 4:
                return _context16.abrupt("return", this._client);

              case 5:
              case "end":
                return _context16.stop();
            }
          }
        }, _callee16, this);
      }));

      function ensureClient(_x15) {
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
      var _query4 = (0, _asyncToGenerator2["default"])(
      /*#__PURE__*/
      _regenerator["default"].mark(function _callee19(filter, result, orderBy, limit, timeout, parentSpan) {
        var _this6 = this;

        return _regenerator["default"].wrap(function _callee19$(_context19) {
          while (1) {
            switch (_context19.prev = _context19.next) {
              case 0:
                return _context19.abrupt("return", this.module.context.trace("".concat(this.collectionName, ".query"),
                /*#__PURE__*/
                function () {
                  var _ref7 = (0, _asyncToGenerator2["default"])(
                  /*#__PURE__*/
                  _regenerator["default"].mark(function _callee18(span) {
                    var c, t, ql, variables;
                    return _regenerator["default"].wrap(function _callee18$(_context18) {
                      while (1) {
                        switch (_context18.prev = _context18.next) {
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

                            _context18.next = 8;
                            return _this6.module._query(ql, variables, span);

                          case 8:
                            _context18.t0 = c;
                            return _context18.abrupt("return", _context18.sent.data[_context18.t0]);

                          case 10:
                          case "end":
                            return _context18.stop();
                        }
                      }
                    }, _callee18);
                  }));

                  return function (_x23) {
                    return _ref7.apply(this, arguments);
                  };
                }(), parentSpan));

              case 1:
              case "end":
                return _context19.stop();
            }
          }
        }, _callee19, this);
      }));

      function query(_x17, _x18, _x19, _x20, _x21, _x22) {
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
      _regenerator["default"].mark(function _callee20() {
        var client, observable;
        return _regenerator["default"].wrap(function _callee20$(_context20) {
          while (1) {
            switch (_context20.prev = _context20.next) {
              case 0:
                _context20.prev = 0;
                _context20.next = 3;
                return _this7.module.ensureClient(span);

              case 3:
                client = _context20.sent;
                observable = client.subscribe({
                  query: query,
                  variables: {
                    filter: filter
                  }
                });
                subscription = observable.subscribe(function (message) {
                  onDocEvent('insert/update', message.data[_this7.collectionName]);
                });
                _context20.next = 12;
                break;

              case 8:
                _context20.prev = 8;
                _context20.t0 = _context20["catch"](0);
                span.logEvent('failed', _context20.t0);

                if (onError) {
                  onError(_context20.t0);
                } else {
                  console.error('TON Client subscription error', _context20.t0);
                }

              case 12:
              case "end":
                return _context20.stop();
            }
          }
        }, _callee20, null, [[0, 8]]);
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
      _regenerator["default"].mark(function _callee21(filter, result, timeout, parentSpan) {
        var docs;
        return _regenerator["default"].wrap(function _callee21$(_context21) {
          while (1) {
            switch (_context21.prev = _context21.next) {
              case 0:
                _context21.next = 2;
                return this.query(filter, result, undefined, undefined, timeout || 40000, parentSpan);

              case 2:
                docs = _context21.sent;

                if (!(docs.length > 0)) {
                  _context21.next = 5;
                  break;
                }

                return _context21.abrupt("return", docs[0]);

              case 5:
                throw _TONClient.TONClientError.waitForTimeout();

              case 6:
              case "end":
                return _context21.stop();
            }
          }
        }, _callee21, this);
      }));

      function waitFor(_x24, _x25, _x26, _x27) {
        return _waitFor.apply(this, arguments);
      }

      return waitFor;
    }()
  }]);
  return TONQCollection;
}();

TONQueriesModule.moduleName = 'TONQueriesModule';
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy9tb2R1bGVzL1RPTlF1ZXJpZXNNb2R1bGUuanMiXSwibmFtZXMiOlsiVE9OUXVlcmllc01vZHVsZSIsImNvbnRleHQiLCJfY2xpZW50Iiwib3ZlcnJpZGVXc1VybCIsImNvbmZpZyIsImdldE1vZHVsZSIsIlRPTkNvbmZpZ01vZHVsZSIsInRyYW5zYWN0aW9ucyIsIlRPTlFDb2xsZWN0aW9uIiwibWVzc2FnZXMiLCJibG9ja3MiLCJhY2NvdW50cyIsImNsaWVudFBsYXRmb3JtIiwiVE9OQ2xpZW50IiwiZGF0YSIsIkVycm9yIiwiaHR0cFVybCIsInF1ZXJpZXNIdHRwVXJsIiwid3NVcmwiLCJxdWVyaWVzV3NVcmwiLCJmZXRjaCIsInJlc3BvbnNlIiwicmVkaXJlY3RlZCIsImxvY2F0aW9uIiwiVVJMUGFydHMiLCJmaXgiLCJ1cmwiLCJwYXJ0cyIsInF1ZXJ5IiwicmVwbGFjZSIsIldlYlNvY2tldCIsInBhcmVudFNwYW4iLCJ1bmRlZmluZWQiLCJyZXN1bHQiLCJnZXRBY2NvdW50c0NvdW50IiwiZ2V0VHJhbnNhY3Rpb25zQ291bnQiLCJnZXRBY2NvdW50c1RvdGFsQmFsYW5jZSIsInJlcXVlc3RzIiwidHJhY2UiLCJzcGFuIiwiX211dGF0aW9uIiwicWwiLCJ2YXJpYWJsZXMiLCJzZXRUYWciLCJtdXRhdGlvbiIsIl9xdWVyeSIsIl9ncmFwaFFsIiwiY2xpZW50IiwibXV0YXRlIiwidHJhY2VTcGFuIiwicmVxdWVzdCIsImVuc3VyZUNsaWVudCIsImVycm9ycyIsIm5ldHdvcmtFcnJvciIsIlRPTkNsaWVudEVycm9yIiwicXVlcnlGYWlsZWQiLCJnZXRDbGllbnRDb25maWciLCJzdWJzT3B0aW9ucyIsInRyYWNlciIsImluamVjdCIsIkZPUk1BVF9URVhUX01BUCIsInN1YnNjcmlwdGlvbkNsaWVudCIsIlN1YnNjcmlwdGlvbkNsaWVudCIsInJlY29ubmVjdCIsImNvbm5lY3Rpb25QYXJhbXMiLCJoZWFkZXJzIiwibWF4Q29ubmVjdFRpbWVHZW5lcmF0b3IiLCJkdXJhdGlvbiIsIm1heCIsIl8iLCJyZXEiLCJyZXNvbHZlZFNwYW4iLCJ0cmFjZXJMaW5rIiwiQXBvbGxvQ2xpZW50IiwiY2FjaGUiLCJJbk1lbW9yeUNhY2hlIiwibGluayIsImRlZmluaXRpb24iLCJraW5kIiwib3BlcmF0aW9uIiwiV2ViU29ja2V0TGluayIsImNvbmNhdCIsIkh0dHBMaW5rIiwidXJpIiwiZGVmYXVsdE9wdGlvbnMiLCJ3YXRjaFF1ZXJ5IiwiZmV0Y2hQb2xpY3kiLCJzdG9wIiwiY2xlYXJTdG9yZSIsIlRPTk1vZHVsZSIsIm1vZHVsZSIsImNvbGxlY3Rpb25OYW1lIiwidHlwZU5hbWUiLCJzdWJzdHIiLCJ0b1VwcGVyQ2FzZSIsImxlbmd0aCIsImZpbHRlciIsIm9yZGVyQnkiLCJsaW1pdCIsInRpbWVvdXQiLCJjIiwidCIsIm9uRG9jRXZlbnQiLCJvbkVycm9yIiwic3RhcnRTcGFuIiwiVGFncyIsIlNQQU5fS0lORCIsInRleHQiLCJzdWJzY3JpcHRpb24iLCJvYnNlcnZhYmxlIiwic3Vic2NyaWJlIiwibWVzc2FnZSIsImxvZ0V2ZW50IiwiY29uc29sZSIsImVycm9yIiwidW5zdWJzY3JpYmUiLCJmaW5pc2giLCJkb2NzIiwid2FpdEZvclRpbWVvdXQiLCJtb2R1bGVOYW1lIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQWtCQTs7QUFDQTs7QUFDQTs7QUFDQTs7QUFDQTs7QUFDQTs7QUFDQTs7QUFDQTs7QUFDQTs7QUFFQTs7QUFDQTs7QUFFQTs7QUFDQTs7QUFoQ0E7Ozs7Ozs7Ozs7Ozs7OztJQTJDcUJBLGdCOzs7OztBQUlqQiw0QkFBWUMsT0FBWixFQUF1QztBQUFBOztBQUFBO0FBQ25DLDRIQUFNQSxPQUFOO0FBRG1DO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBRW5DLFVBQUtDLE9BQUwsR0FBZSxJQUFmO0FBQ0EsVUFBS0MsYUFBTCxHQUFxQixJQUFyQjtBQUhtQztBQUl0Qzs7Ozs7Ozs7Ozs7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QUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLE9BQUQ7QUFxQkEsYUFBTztBQUNIQyxRQUFBQSxXQUFXLEVBQUUsdUJBQU07QUFDZixjQUFJUCxZQUFKLEVBQWtCO0FBQ2RBLFlBQUFBLFlBQVksQ0FBQ08sV0FBYjtBQUNBNUUsWUFBQUEsSUFBSSxDQUFDNkUsTUFBTDtBQUNIO0FBQ0o7QUFORSxPQUFQO0FBUUg7Ozs7OztzREFFYXBCLE0sRUFBYS9ELE0sRUFBZ0JrRSxPLEVBQWtCcEUsVTs7Ozs7Ozt1QkFDdEMsS0FBS0gsS0FBTCxDQUFXb0UsTUFBWCxFQUFtQi9ELE1BQW5CLEVBQTJCRCxTQUEzQixFQUFzQ0EsU0FBdEMsRUFBaURtRSxPQUFPLElBQUksS0FBNUQsRUFBb0VwRSxVQUFwRSxDOzs7QUFBYnNGLGdCQUFBQSxJOztzQkFDRkEsSUFBSSxDQUFDdEIsTUFBTCxHQUFjLEM7Ozs7O21EQUNQc0IsSUFBSSxDQUFDLENBQUQsQzs7O3NCQUVUL0QsMEJBQWVnRSxjQUFmLEU7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBSWR0SCxnQkFBZ0IsQ0FBQ3VILFVBQWpCLEdBQThCLGtCQUE5QiIsInNvdXJjZXNDb250ZW50IjpbIi8qXG4gKiBDb3B5cmlnaHQgMjAxOC0yMDIwIFRPTiBERVYgU09MVVRJT05TIExURC5cbiAqXG4gKiBMaWNlbnNlZCB1bmRlciB0aGUgU09GVFdBUkUgRVZBTFVBVElPTiBMaWNlbnNlICh0aGUgXCJMaWNlbnNlXCIpOyB5b3UgbWF5IG5vdCB1c2VcbiAqIHRoaXMgZmlsZSBleGNlcHQgaW4gY29tcGxpYW5jZSB3aXRoIHRoZSBMaWNlbnNlLiAgWW91IG1heSBvYnRhaW4gYSBjb3B5IG9mIHRoZVxuICogTGljZW5zZSBhdDpcbiAqXG4gKiBodHRwOi8vd3d3LnRvbi5kZXYvbGljZW5zZXNcbiAqXG4gKiBVbmxlc3MgcmVxdWlyZWQgYnkgYXBwbGljYWJsZSBsYXcgb3IgYWdyZWVkIHRvIGluIHdyaXRpbmcsIHNvZnR3YXJlXG4gKiBkaXN0cmlidXRlZCB1bmRlciB0aGUgTGljZW5zZSBpcyBkaXN0cmlidXRlZCBvbiBhbiBcIkFTIElTXCIgQkFTSVMsXG4gKiBXSVRIT1VUIFdBUlJBTlRJRVMgT1IgQ09ORElUSU9OUyBPRiBBTlkgS0lORCwgZWl0aGVyIGV4cHJlc3Mgb3IgaW1wbGllZC5cbiAqIFNlZSB0aGUgTGljZW5zZSBmb3IgdGhlIHNwZWNpZmljIFRPTiBERVYgc29mdHdhcmUgZ292ZXJuaW5nIHBlcm1pc3Npb25zIGFuZFxuICogbGltaXRhdGlvbnMgdW5kZXIgdGhlIExpY2Vuc2UuXG4gKi9cblxuLy8gQGZsb3dcblxuaW1wb3J0IHsgSW5NZW1vcnlDYWNoZSB9IGZyb20gJ2Fwb2xsby1jYWNoZS1pbm1lbW9yeSc7XG5pbXBvcnQgeyBBcG9sbG9DbGllbnQgfSBmcm9tICdhcG9sbG8tY2xpZW50JztcbmltcG9ydCB7IHNwbGl0IH0gZnJvbSBcImFwb2xsby1saW5rXCI7XG5pbXBvcnQgeyBIdHRwTGluayB9IGZyb20gJ2Fwb2xsby1saW5rLWh0dHAnO1xuaW1wb3J0IHsgV2ViU29ja2V0TGluayB9IGZyb20gJ2Fwb2xsby1saW5rLXdzJztcbmltcG9ydCB7IGdldE1haW5EZWZpbml0aW9uIH0gZnJvbSAnYXBvbGxvLXV0aWxpdGllcyc7XG5pbXBvcnQgZ3FsIGZyb20gJ2dyYXBocWwtdGFnJztcbmltcG9ydCB7IFN1YnNjcmlwdGlvbkNsaWVudCB9IGZyb20gXCJzdWJzY3JpcHRpb25zLXRyYW5zcG9ydC13c1wiO1xuaW1wb3J0IHsgVE9OQ2xpZW50LCBUT05DbGllbnRFcnJvciB9IGZyb20gJy4uL1RPTkNsaWVudCc7XG5pbXBvcnQgdHlwZSB7IFRPTk1vZHVsZUNvbnRleHQgfSBmcm9tICcuLi9UT05Nb2R1bGUnO1xuaW1wb3J0IHsgVE9OTW9kdWxlIH0gZnJvbSAnLi4vVE9OTW9kdWxlJztcbmltcG9ydCBUT05Db25maWdNb2R1bGUsIHsgVVJMUGFydHMgfSBmcm9tICcuL1RPTkNvbmZpZ01vZHVsZSc7XG5cbmltcG9ydCB7IHNldENvbnRleHQgfSBmcm9tICdhcG9sbG8tbGluay1jb250ZXh0JztcbmltcG9ydCB7IEZPUk1BVF9URVhUX01BUCwgVGFncywgU3BhbiwgU3BhbkNvbnRleHQgfSBmcm9tICdvcGVudHJhY2luZyc7XG5cbnR5cGUgU3Vic2NyaXB0aW9uID0ge1xuICAgIHVuc3Vic2NyaWJlOiAoKSA9PiB2b2lkXG59XG5cbmV4cG9ydCB0eXBlIFJlcXVlc3QgPSB7XG4gICAgaWQ6IHN0cmluZyxcbiAgICBib2R5OiBzdHJpbmcsXG59XG5cbmV4cG9ydCBkZWZhdWx0IGNsYXNzIFRPTlF1ZXJpZXNNb2R1bGUgZXh0ZW5kcyBUT05Nb2R1bGUge1xuICAgIGNvbmZpZzogVE9OQ29uZmlnTW9kdWxlO1xuICAgIG92ZXJyaWRlV3NVcmw6ID9zdHJpbmc7XG5cbiAgICBjb25zdHJ1Y3Rvcihjb250ZXh0OiBUT05Nb2R1bGVDb250ZXh0KSB7XG4gICAgICAgIHN1cGVyKGNvbnRleHQpO1xuICAgICAgICB0aGlzLl9jbGllbnQgPSBudWxsO1xuICAgICAgICB0aGlzLm92ZXJyaWRlV3NVcmwgPSBudWxsO1xuICAgIH1cblxuICAgIGFzeW5jIHNldHVwKCkge1xuICAgICAgICB0aGlzLmNvbmZpZyA9IHRoaXMuY29udGV4dC5nZXRNb2R1bGUoVE9OQ29uZmlnTW9kdWxlKTtcbiAgICAgICAgdGhpcy50cmFuc2FjdGlvbnMgPSBuZXcgVE9OUUNvbGxlY3Rpb24odGhpcywgJ3RyYW5zYWN0aW9ucycpO1xuICAgICAgICB0aGlzLm1lc3NhZ2VzID0gbmV3IFRPTlFDb2xsZWN0aW9uKHRoaXMsICdtZXNzYWdlcycpO1xuICAgICAgICB0aGlzLmJsb2NrcyA9IG5ldyBUT05RQ29sbGVjdGlvbih0aGlzLCAnYmxvY2tzJyk7XG4gICAgICAgIHRoaXMuYWNjb3VudHMgPSBuZXcgVE9OUUNvbGxlY3Rpb24odGhpcywgJ2FjY291bnRzJyk7XG4gICAgfVxuXG4gICAgYXN5bmMgZ2V0Q2xpZW50Q29uZmlnKCkge1xuICAgICAgICBjb25zdCBjb25maWcgPSB0aGlzLmNvbmZpZztcbiAgICAgICAgY29uc3QgeyBjbGllbnRQbGF0Zm9ybSB9ID0gVE9OQ2xpZW50O1xuICAgICAgICBpZiAoIWNvbmZpZy5kYXRhIHx8ICFjbGllbnRQbGF0Zm9ybSkge1xuICAgICAgICAgICAgdGhyb3cgRXJyb3IoJ1RPTiBDbGllbnQgZG9lcyBub3QgY29uZmlndXJlZCcpO1xuICAgICAgICB9XG4gICAgICAgIGxldCBodHRwVXJsID0gY29uZmlnLnF1ZXJpZXNIdHRwVXJsKCk7XG4gICAgICAgIGxldCB3c1VybCA9IGNvbmZpZy5xdWVyaWVzV3NVcmwoKTtcbiAgICAgICAgY29uc3QgZmV0Y2ggPSBjbGllbnRQbGF0Zm9ybS5mZXRjaDtcbiAgICAgICAgY29uc3QgcmVzcG9uc2UgPSBhd2FpdCBmZXRjaChgJHtodHRwVXJsfT9xdWVyeT0lN0JpbmZvJTdCdmVyc2lvbiU3RCU3RGApO1xuICAgICAgICBpZiAocmVzcG9uc2UucmVkaXJlY3RlZCkge1xuICAgICAgICAgICAgY29uc3QgbG9jYXRpb24gPSBVUkxQYXJ0cy5maXgocmVzcG9uc2UudXJsLCBwYXJ0cyA9PiB7XG4gICAgICAgICAgICAgICAgcGFydHMucXVlcnkgPSAnJ1xuICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICBpZiAoISFsb2NhdGlvbikge1xuICAgICAgICAgICAgICAgIGh0dHBVcmwgPSBsb2NhdGlvbjtcbiAgICAgICAgICAgICAgICB3c1VybCA9IGxvY2F0aW9uXG4gICAgICAgICAgICAgICAgICAgIC5yZXBsYWNlKC9eaHR0cHM6XFwvXFwvL2dpLCAnd3NzOi8vJylcbiAgICAgICAgICAgICAgICAgICAgLnJlcGxhY2UoL15odHRwOlxcL1xcLy9naSwgJ3dzOi8vJyk7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgICAgcmV0dXJuIHtcbiAgICAgICAgICAgIGh0dHBVcmwsXG4gICAgICAgICAgICB3c1VybCxcbiAgICAgICAgICAgIGZldGNoLFxuICAgICAgICAgICAgV2ViU29ja2V0OiBjbGllbnRQbGF0Zm9ybS5XZWJTb2NrZXQsXG4gICAgICAgIH1cbiAgICB9XG5cbiAgICBhc3luYyBnZXRBY2NvdW50c0NvdW50KHBhcmVudFNwYW4/OiAoU3BhbiB8IFNwYW5Db250ZXh0KSk6IFByb21pc2U8bnVtYmVyPiB7XG4gICAgICAgIGNvbnN0IHJlc3VsdCA9IGF3YWl0IHRoaXMucXVlcnkoJ3F1ZXJ5e2dldEFjY291bnRzQ291bnR9JywgdW5kZWZpbmVkLCBwYXJlbnRTcGFuKTtcbiAgICAgICAgcmV0dXJuIHJlc3VsdC5kYXRhLmdldEFjY291bnRzQ291bnQ7XG4gICAgfVxuXG4gICAgYXN5bmMgZ2V0VHJhbnNhY3Rpb25zQ291bnQocGFyZW50U3Bhbj86IChTcGFuIHwgU3BhbkNvbnRleHQpKTogUHJvbWlzZTxudW1iZXI+IHtcbiAgICAgICAgY29uc3QgcmVzdWx0ID0gYXdhaXQgdGhpcy5xdWVyeSgncXVlcnl7Z2V0VHJhbnNhY3Rpb25zQ291bnR9JywgdW5kZWZpbmVkLCBwYXJlbnRTcGFuKTtcbiAgICAgICAgcmV0dXJuIHJlc3VsdC5kYXRhLmdldFRyYW5zYWN0aW9uc0NvdW50O1xuICAgIH1cblxuICAgIGFzeW5jIGdldEFjY291bnRzVG90YWxCYWxhbmNlKHBhcmVudFNwYW4/OiAoU3BhbiB8IFNwYW5Db250ZXh0KSk6IFByb21pc2U8c3RyaW5nPiB7XG4gICAgICAgIGNvbnN0IHJlc3VsdCA9IGF3YWl0IHRoaXMucXVlcnkoJ3F1ZXJ5e2dldEFjY291bnRzVG90YWxCYWxhbmNlfScsIHVuZGVmaW5lZCwgcGFyZW50U3Bhbik7XG4gICAgICAgIHJldHVybiByZXN1bHQuZGF0YS5nZXRBY2NvdW50c1RvdGFsQmFsYW5jZTtcbiAgICB9XG5cbiAgICBhc3luYyBwb3N0UmVxdWVzdHMocmVxdWVzdHM6IFJlcXVlc3RbXSwgcGFyZW50U3Bhbj86IChTcGFuIHwgU3BhbkNvbnRleHQpKTogUHJvbWlzZTxhbnk+IHtcbiAgICAgICAgcmV0dXJuIHRoaXMuY29udGV4dC50cmFjZSgncXVlcmllcy5wb3N0UmVxdWVzdHMnLCBhc3luYyAoc3BhbikgPT4ge1xuICAgICAgICAgICAgcmV0dXJuIHRoaXMuX211dGF0aW9uKGBtdXRhdGlvbiBwb3N0UmVxdWVzdHMoJHJlcXVlc3RzOiBbUmVxdWVzdF0pIHtcbiAgICAgICAgICAgICAgICBwb3N0UmVxdWVzdHMocmVxdWVzdHM6ICRyZXF1ZXN0cylcbiAgICAgICAgICAgIH1gLCB7XG4gICAgICAgICAgICAgICAgcmVxdWVzdHMsXG4gICAgICAgICAgICB9LCBzcGFuKTtcbiAgICAgICAgfSwgcGFyZW50U3Bhbik7XG4gICAgfVxuXG4gICAgYXN5bmMgbXV0YXRpb24ocWw6IHN0cmluZywgdmFyaWFibGVzOiB7IFtzdHJpbmddOiBhbnkgfSA9IHt9LCBwYXJlbnRTcGFuPzogKFNwYW4gfCBTcGFuQ29udGV4dCkpOiBQcm9taXNlPGFueT4ge1xuICAgICAgICByZXR1cm4gdGhpcy5jb250ZXh0LnRyYWNlKCdxdWVyaWVzLm11dGF0aW9uJywgYXN5bmMgKHNwYW46IFNwYW4pID0+IHtcbiAgICAgICAgICAgIHNwYW4uc2V0VGFnKCdwYXJhbXMnLCB7XG4gICAgICAgICAgICAgICAgbXV0YXRpb246IHFsLFxuICAgICAgICAgICAgICAgIHZhcmlhYmxlcyxcbiAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgcmV0dXJuIHRoaXMuX211dGF0aW9uKHFsLCB2YXJpYWJsZXMsIHNwYW4pO1xuICAgICAgICB9LCBwYXJlbnRTcGFuKTtcbiAgICB9XG5cbiAgICBhc3luYyBxdWVyeShxbDogc3RyaW5nLCB2YXJpYWJsZXM6IHsgW3N0cmluZ106IGFueSB9ID0ge30sIHBhcmVudFNwYW4/OiAoU3BhbiB8IFNwYW5Db250ZXh0KSk6IFByb21pc2U8YW55PiB7XG4gICAgICAgIHJldHVybiB0aGlzLmNvbnRleHQudHJhY2UoJ3F1ZXJpZXMucXVlcnknLCBhc3luYyAoc3BhbjogU3BhbikgPT4ge1xuICAgICAgICAgICAgc3Bhbi5zZXRUYWcoJ3BhcmFtcycsIHtcbiAgICAgICAgICAgICAgICBxdWVyeTogcWwsXG4gICAgICAgICAgICAgICAgdmFyaWFibGVzLFxuICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICByZXR1cm4gdGhpcy5fcXVlcnkocWwsIHZhcmlhYmxlcywgc3Bhbik7XG4gICAgICAgIH0sIHBhcmVudFNwYW4pO1xuICAgIH1cblxuICAgIGFzeW5jIF9tdXRhdGlvbihxbDogc3RyaW5nLCB2YXJpYWJsZXM6IHsgW3N0cmluZ106IGFueSB9ID0ge30sIHNwYW46IFNwYW4pOiBQcm9taXNlPGFueT4ge1xuICAgICAgICBjb25zdCBtdXRhdGlvbiA9IGdxbChbcWxdKTtcbiAgICAgICAgcmV0dXJuIHRoaXMuX2dyYXBoUWwoY2xpZW50ID0+IGNsaWVudC5tdXRhdGUoe1xuICAgICAgICAgICAgbXV0YXRpb24sXG4gICAgICAgICAgICB2YXJpYWJsZXMsXG4gICAgICAgICAgICBjb250ZXh0OiB7XG4gICAgICAgICAgICAgICAgdHJhY2VTcGFuOiBzcGFuLFxuICAgICAgICAgICAgfVxuICAgICAgICB9KSk7XG4gICAgfVxuXG4gICAgYXN5bmMgX3F1ZXJ5KHFsOiBzdHJpbmcsIHZhcmlhYmxlczogeyBbc3RyaW5nXTogYW55IH0gPSB7fSwgc3BhbjogU3Bhbik6IFByb21pc2U8YW55PiB7XG4gICAgICAgIGNvbnN0IHF1ZXJ5ID0gZ3FsKFtxbF0pO1xuICAgICAgICByZXR1cm4gdGhpcy5fZ3JhcGhRbChjbGllbnQgPT4gY2xpZW50LnF1ZXJ5KHtcbiAgICAgICAgICAgIHF1ZXJ5LFxuICAgICAgICAgICAgdmFyaWFibGVzLFxuICAgICAgICAgICAgY29udGV4dDoge1xuICAgICAgICAgICAgICAgIHRyYWNlU3Bhbjogc3BhbixcbiAgICAgICAgICAgIH1cbiAgICAgICAgfSksIHNwYW4pO1xuICAgIH1cblxuICAgIGFzeW5jIF9ncmFwaFFsKHJlcXVlc3Q6IChjbGllbnQ6IEFwb2xsb0NsaWVudCkgPT4gUHJvbWlzZTxhbnk+LCBzcGFuOiBTcGFuKTogUHJvbWlzZTxhbnk+IHtcbiAgICAgICAgY29uc3QgY2xpZW50ID0gYXdhaXQgdGhpcy5lbnN1cmVDbGllbnQoc3Bhbik7XG4gICAgICAgIHRyeSB7XG4gICAgICAgICAgICByZXR1cm4gcmVxdWVzdChjbGllbnQpO1xuICAgICAgICB9IGNhdGNoIChlcnJvcikge1xuICAgICAgICAgICAgY29uc3QgZXJyb3JzID0gZXJyb3IgJiYgZXJyb3IubmV0d29ya0Vycm9yICYmIGVycm9yLm5ldHdvcmtFcnJvci5yZXN1bHQgJiYgZXJyb3IubmV0d29ya0Vycm9yLnJlc3VsdC5lcnJvcnM7XG4gICAgICAgICAgICBpZiAoZXJyb3JzKSB7XG4gICAgICAgICAgICAgICAgdGhyb3cgVE9OQ2xpZW50RXJyb3IucXVlcnlGYWlsZWQoZXJyb3JzKTtcbiAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgICAgdGhyb3cgZXJyb3I7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICBhc3luYyBlbnN1cmVDbGllbnQoc3BhbjogU3Bhbik6IFByb21pc2U8QXBvbGxvQ2xpZW50PiB7XG4gICAgICAgIGlmICh0aGlzLl9jbGllbnQpIHtcbiAgICAgICAgICAgIHJldHVybiB0aGlzLl9jbGllbnQ7XG4gICAgICAgIH1cbiAgICAgICAgYXdhaXQgdGhpcy5jb250ZXh0LnRyYWNlKCdzZXR1cCBjbGllbnQnLCBhc3luYyAoc3BhbikgPT4ge1xuICAgICAgICAgICAgY29uc3QgeyBodHRwVXJsLCB3c1VybCwgZmV0Y2gsIFdlYlNvY2tldCB9ID0gYXdhaXQgdGhpcy5nZXRDbGllbnRDb25maWcoKTtcbiAgICAgICAgICAgIGxldCBzdWJzT3B0aW9ucyA9IHRoaXMuY29uZmlnLnRyYWNlci5pbmplY3Qoc3BhbiwgRk9STUFUX1RFWFRfTUFQLCB7fSk7XG4gICAgICAgICAgICBjb25zdCBzdWJzY3JpcHRpb25DbGllbnQgPSBuZXcgU3Vic2NyaXB0aW9uQ2xpZW50KFxuICAgICAgICAgICAgICAgIHdzVXJsLFxuICAgICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICAgICAgcmVjb25uZWN0OiB0cnVlLFxuICAgICAgICAgICAgICAgICAgICBjb25uZWN0aW9uUGFyYW1zOiAoKSA9PiAoe1xuICAgICAgICAgICAgICAgICAgICAgICAgaGVhZGVyczogc3Vic09wdGlvbnMsXG4gICAgICAgICAgICAgICAgICAgIH0pLFxuICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgV2ViU29ja2V0XG4gICAgICAgICAgICApO1xuICAgICAgICAgICAgc3Vic2NyaXB0aW9uQ2xpZW50Lm1heENvbm5lY3RUaW1lR2VuZXJhdG9yLmR1cmF0aW9uID0gKCkgPT4gc3Vic2NyaXB0aW9uQ2xpZW50Lm1heENvbm5lY3RUaW1lR2VuZXJhdG9yLm1heDtcbiAgICAgICAgICAgIGNvbnN0IHRyYWNlckxpbmsgPSBhd2FpdCBzZXRDb250ZXh0KChfLCByZXEpID0+IHtcbiAgICAgICAgICAgICAgICBjb25zdCByZXNvbHZlZFNwYW4gPSAocmVxICYmIHJlcS50cmFjZVNwYW4pIHx8IHNwYW47XG4gICAgICAgICAgICAgICAgcmVxLmhlYWRlcnMgPSB7fTtcbiAgICAgICAgICAgICAgICB0aGlzLmNvbmZpZy50cmFjZXIuaW5qZWN0KHJlc29sdmVkU3BhbiwgRk9STUFUX1RFWFRfTUFQLCByZXEuaGVhZGVycyk7XG4gICAgICAgICAgICAgICAgcmV0dXJuIHtcbiAgICAgICAgICAgICAgICAgICAgaGVhZGVyczogcmVxLmhlYWRlcnMsXG4gICAgICAgICAgICAgICAgfTtcbiAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgdGhpcy5fY2xpZW50ID0gbmV3IEFwb2xsb0NsaWVudCh7XG4gICAgICAgICAgICAgICAgY2FjaGU6IG5ldyBJbk1lbW9yeUNhY2hlKHt9KSxcbiAgICAgICAgICAgICAgICBsaW5rOiBzcGxpdChcbiAgICAgICAgICAgICAgICAgICAgKHsgcXVlcnkgfSkgPT4ge1xuICAgICAgICAgICAgICAgICAgICAgICAgY29uc3QgZGVmaW5pdGlvbiA9IGdldE1haW5EZWZpbml0aW9uKHF1ZXJ5KTtcbiAgICAgICAgICAgICAgICAgICAgICAgIHJldHVybiAoXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgZGVmaW5pdGlvbi5raW5kID09PSAnT3BlcmF0aW9uRGVmaW5pdGlvbidcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAmJiBkZWZpbml0aW9uLm9wZXJhdGlvbiA9PT0gJ3N1YnNjcmlwdGlvbidcbiAgICAgICAgICAgICAgICAgICAgICAgICk7XG4gICAgICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgICAgIG5ldyBXZWJTb2NrZXRMaW5rKHN1YnNjcmlwdGlvbkNsaWVudCksXG4gICAgICAgICAgICAgICAgICAgIHRyYWNlckxpbmsuY29uY2F0KG5ldyBIdHRwTGluayh7XG4gICAgICAgICAgICAgICAgICAgICAgICB1cmk6IGh0dHBVcmwsXG4gICAgICAgICAgICAgICAgICAgICAgICBmZXRjaCxcbiAgICAgICAgICAgICAgICAgICAgfSkpLFxuICAgICAgICAgICAgICAgICksXG4gICAgICAgICAgICAgICAgZGVmYXVsdE9wdGlvbnM6IHtcbiAgICAgICAgICAgICAgICAgICAgd2F0Y2hRdWVyeToge1xuICAgICAgICAgICAgICAgICAgICAgICAgZmV0Y2hQb2xpY3k6ICduby1jYWNoZScsXG4gICAgICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgICAgIHF1ZXJ5OiB7XG4gICAgICAgICAgICAgICAgICAgICAgICBmZXRjaFBvbGljeTogJ25vLWNhY2hlJyxcbiAgICAgICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9KTtcbiAgICAgICAgfSwgc3Bhbik7XG4gICAgICAgIHJldHVybiB0aGlzLl9jbGllbnQ7XG4gICAgfVxuXG4gICAgYXN5bmMgY2xvc2UoKSB7XG4gICAgICAgIGlmICh0aGlzLl9jbGllbnQpIHtcbiAgICAgICAgICAgIGNvbnN0IGNsaWVudCA9IHRoaXMuX2NsaWVudDtcbiAgICAgICAgICAgIHRoaXMuX2NsaWVudCA9IG51bGw7XG4gICAgICAgICAgICBjbGllbnQuc3RvcCgpO1xuICAgICAgICAgICAgYXdhaXQgY2xpZW50LmNsZWFyU3RvcmUoKTtcbiAgICAgICAgfVxuICAgIH1cblxuICAgIHRyYW5zYWN0aW9uczogVE9OUUNvbGxlY3Rpb247XG5cbiAgICBtZXNzYWdlczogVE9OUUNvbGxlY3Rpb247XG5cbiAgICBibG9ja3M6IFRPTlFDb2xsZWN0aW9uO1xuXG4gICAgYWNjb3VudHM6IFRPTlFDb2xsZWN0aW9uO1xuXG4gICAgX2NsaWVudDogQXBvbGxvQ2xpZW50O1xufVxuXG5cbnR5cGUgRG9jRXZlbnQgPSAoY2hhbmdlVHlwZTogc3RyaW5nLCBkb2M6IGFueSkgPT4gdm9pZDtcblxudHlwZSBPcmRlckJ5ID0ge1xuICAgIHBhdGg6IHN0cmluZyxcbiAgICBkaXJlY3Rpb246ICdBU0MnIHwgJ0RFU0MnXG59XG5cbmNsYXNzIFRPTlFDb2xsZWN0aW9uIHtcbiAgICBtb2R1bGU6IFRPTlF1ZXJpZXNNb2R1bGU7XG5cbiAgICBjb2xsZWN0aW9uTmFtZTogc3RyaW5nO1xuICAgIHR5cGVOYW1lOiBzdHJpbmc7XG5cbiAgICBjb25zdHJ1Y3Rvcihtb2R1bGU6IFRPTlF1ZXJpZXNNb2R1bGUsIGNvbGxlY3Rpb25OYW1lOiBzdHJpbmcpIHtcbiAgICAgICAgdGhpcy5tb2R1bGUgPSBtb2R1bGU7XG4gICAgICAgIHRoaXMuY29sbGVjdGlvbk5hbWUgPSBjb2xsZWN0aW9uTmFtZTtcbiAgICAgICAgdGhpcy50eXBlTmFtZSA9IGNvbGxlY3Rpb25OYW1lLnN1YnN0cigwLCAxKS50b1VwcGVyQ2FzZSgpICtcbiAgICAgICAgICAgIGNvbGxlY3Rpb25OYW1lLnN1YnN0cigxLCBjb2xsZWN0aW9uTmFtZS5sZW5ndGggLSAyKTtcbiAgICB9XG5cbiAgICBhc3luYyBxdWVyeShmaWx0ZXI6IGFueSwgcmVzdWx0OiBzdHJpbmcsIG9yZGVyQnk/OiBPcmRlckJ5W10sIGxpbWl0PzogbnVtYmVyLCB0aW1lb3V0PzogbnVtYmVyLCBwYXJlbnRTcGFuPzogKFNwYW4gfCBTcGFuQ29udGV4dCkpOiBQcm9taXNlPGFueT4ge1xuICAgICAgICByZXR1cm4gdGhpcy5tb2R1bGUuY29udGV4dC50cmFjZShgJHt0aGlzLmNvbGxlY3Rpb25OYW1lfS5xdWVyeWAsIGFzeW5jIChzcGFuKSA9PiB7XG4gICAgICAgICAgICBzcGFuLnNldFRhZygncGFyYW1zJywge1xuICAgICAgICAgICAgICAgIGZpbHRlciwgcmVzdWx0LCBvcmRlckJ5LCBsaW1pdCwgdGltZW91dFxuICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICBjb25zdCBjID0gdGhpcy5jb2xsZWN0aW9uTmFtZTtcbiAgICAgICAgICAgIGNvbnN0IHQgPSB0aGlzLnR5cGVOYW1lO1xuICAgICAgICAgICAgY29uc3QgcWwgPSBgcXVlcnkgJHtjfSgkZmlsdGVyOiAke3R9RmlsdGVyLCAkb3JkZXJCeTogW1F1ZXJ5T3JkZXJCeV0sICRsaW1pdDogSW50LCAkdGltZW91dDogRmxvYXQpIHtcbiAgICAgICAgICAgICAgICAke2N9KGZpbHRlcjogJGZpbHRlciwgb3JkZXJCeTogJG9yZGVyQnksIGxpbWl0OiAkbGltaXQsIHRpbWVvdXQ6ICR0aW1lb3V0KSB7ICR7cmVzdWx0fSB9XG4gICAgICAgICAgICB9YDtcbiAgICAgICAgICAgIGNvbnN0IHZhcmlhYmxlczogeyBbc3RyaW5nXTogYW55IH0gPSB7XG4gICAgICAgICAgICAgICAgZmlsdGVyLFxuICAgICAgICAgICAgICAgIG9yZGVyQnksXG4gICAgICAgICAgICAgICAgbGltaXQsXG4gICAgICAgICAgICB9O1xuICAgICAgICAgICAgaWYgKHRpbWVvdXQpIHtcbiAgICAgICAgICAgICAgICB2YXJpYWJsZXMudGltZW91dCA9IHRpbWVvdXQ7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICByZXR1cm4gKGF3YWl0IHRoaXMubW9kdWxlLl9xdWVyeShxbCwgdmFyaWFibGVzLCBzcGFuKSkuZGF0YVtjXTtcbiAgICAgICAgfSwgcGFyZW50U3Bhbik7XG4gICAgfVxuXG4gICAgc3Vic2NyaWJlKFxuICAgICAgICBmaWx0ZXI6IGFueSxcbiAgICAgICAgcmVzdWx0OiBzdHJpbmcsXG4gICAgICAgIG9uRG9jRXZlbnQ6IERvY0V2ZW50LFxuICAgICAgICBvbkVycm9yPzogKGVycjogRXJyb3IpID0+IHZvaWRcbiAgICApOiBTdWJzY3JpcHRpb24ge1xuICAgICAgICBjb25zdCBzcGFuID0gdGhpcy5tb2R1bGUuY29uZmlnLnRyYWNlci5zdGFydFNwYW4oJ1RPTlF1ZXJpZXNNb2R1bGUuanM6c3Vic2NyaWJlICcpO1xuICAgICAgICBzcGFuLnNldFRhZyhUYWdzLlNQQU5fS0lORCwgJ2NsaWVudCcpO1xuICAgICAgICBjb25zdCB0ZXh0ID0gYHN1YnNjcmlwdGlvbiAke3RoaXMuY29sbGVjdGlvbk5hbWV9KCRmaWx0ZXI6ICR7dGhpcy50eXBlTmFtZX1GaWx0ZXIpIHtcbiAgICAgICAgXHQke3RoaXMuY29sbGVjdGlvbk5hbWV9KGZpbHRlcjogJGZpbHRlcikgeyAke3Jlc3VsdH0gfVxuICAgICAgICB9YDtcbiAgICAgICAgY29uc3QgcXVlcnkgPSBncWwoW3RleHRdKTtcbiAgICAgICAgbGV0IHN1YnNjcmlwdGlvbiA9IG51bGw7XG4gICAgICAgIChhc3luYyAoKSA9PiB7XG4gICAgICAgICAgICB0cnkge1xuICAgICAgICAgICAgICAgIGNvbnN0IGNsaWVudCA9IGF3YWl0IHRoaXMubW9kdWxlLmVuc3VyZUNsaWVudChzcGFuKTtcbiAgICAgICAgICAgICAgICBjb25zdCBvYnNlcnZhYmxlID0gY2xpZW50LnN1YnNjcmliZSh7XG4gICAgICAgICAgICAgICAgICAgIHF1ZXJ5LFxuICAgICAgICAgICAgICAgICAgICB2YXJpYWJsZXM6IHtcbiAgICAgICAgICAgICAgICAgICAgICAgIGZpbHRlcixcbiAgICAgICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICB9KTtcbiAgICAgICAgICAgICAgICBzdWJzY3JpcHRpb24gPSBvYnNlcnZhYmxlLnN1YnNjcmliZSgobWVzc2FnZSkgPT4ge1xuICAgICAgICAgICAgICAgICAgICBvbkRvY0V2ZW50KCdpbnNlcnQvdXBkYXRlJywgbWVzc2FnZS5kYXRhW3RoaXMuY29sbGVjdGlvbk5hbWVdKTtcbiAgICAgICAgICAgICAgICB9KTtcbiAgICAgICAgICAgIH0gY2F0Y2ggKGVycm9yKSB7XG4gICAgICAgICAgICAgICAgc3Bhbi5sb2dFdmVudCgnZmFpbGVkJywgZXJyb3IpO1xuICAgICAgICAgICAgICAgIGlmIChvbkVycm9yKSB7XG4gICAgICAgICAgICAgICAgICAgIG9uRXJyb3IoZXJyb3IpO1xuICAgICAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgICAgICAgIGNvbnNvbGUuZXJyb3IoJ1RPTiBDbGllbnQgc3Vic2NyaXB0aW9uIGVycm9yJywgZXJyb3IpO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cbiAgICAgICAgfSkoKTtcbiAgICAgICAgcmV0dXJuIHtcbiAgICAgICAgICAgIHVuc3Vic2NyaWJlOiAoKSA9PiB7XG4gICAgICAgICAgICAgICAgaWYgKHN1YnNjcmlwdGlvbikge1xuICAgICAgICAgICAgICAgICAgICBzdWJzY3JpcHRpb24udW5zdWJzY3JpYmUoKTtcbiAgICAgICAgICAgICAgICAgICAgc3Bhbi5maW5pc2goKTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9LFxuICAgICAgICB9O1xuICAgIH1cblxuICAgIGFzeW5jIHdhaXRGb3IoZmlsdGVyOiBhbnksIHJlc3VsdDogc3RyaW5nLCB0aW1lb3V0PzogbnVtYmVyLCBwYXJlbnRTcGFuPzogKFNwYW4gfCBTcGFuQ29udGV4dCkpOiBQcm9taXNlPGFueT4ge1xuICAgICAgICBjb25zdCBkb2NzID0gYXdhaXQgdGhpcy5xdWVyeShmaWx0ZXIsIHJlc3VsdCwgdW5kZWZpbmVkLCB1bmRlZmluZWQsIHRpbWVvdXQgfHwgNDBfMDAwLCBwYXJlbnRTcGFuKTtcbiAgICAgICAgaWYgKGRvY3MubGVuZ3RoID4gMCkge1xuICAgICAgICAgICAgcmV0dXJuIGRvY3NbMF07XG4gICAgICAgIH1cbiAgICAgICAgdGhyb3cgVE9OQ2xpZW50RXJyb3Iud2FpdEZvclRpbWVvdXQoKTtcbiAgICB9XG59XG5cblRPTlF1ZXJpZXNNb2R1bGUubW9kdWxlTmFtZSA9ICdUT05RdWVyaWVzTW9kdWxlJztcbiJdfQ==