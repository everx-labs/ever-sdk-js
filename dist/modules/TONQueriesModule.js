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

                              var authToken = _this5.config.data && _this5.config.data.authorization;

                              if (authToken) {
                                req.headers.authorization = authToken;
                              }

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy9tb2R1bGVzL1RPTlF1ZXJpZXNNb2R1bGUuanMiXSwibmFtZXMiOlsiVE9OUXVlcmllc01vZHVsZSIsImNvbnRleHQiLCJfY2xpZW50Iiwib3ZlcnJpZGVXc1VybCIsImNvbmZpZyIsImdldE1vZHVsZSIsIlRPTkNvbmZpZ01vZHVsZSIsInRyYW5zYWN0aW9ucyIsIlRPTlFDb2xsZWN0aW9uIiwibWVzc2FnZXMiLCJibG9ja3MiLCJhY2NvdW50cyIsImZldGNoIiwic291cmNlVXJsIiwicmVzcG9uc2UiLCJyZWRpcmVjdGVkIiwidXJsIiwic291cmNlTG9jYXRpb24iLCJVUkxQYXJ0cyIsImZpeCIsInBhcnRzIiwicXVlcnkiLCJ0b0xvd2VyQ2FzZSIsInJlc3BvbnNlTG9jYXRpb24iLCJjbGllbnRQbGF0Zm9ybSIsIlRPTkNsaWVudCIsImRhdGEiLCJFcnJvciIsImh0dHBVcmwiLCJxdWVyaWVzSHR0cFVybCIsIndzVXJsIiwicXVlcmllc1dzVXJsIiwiZGV0ZWN0UmVkaXJlY3QiLCJsb2NhdGlvbiIsInJlcGxhY2UiLCJXZWJTb2NrZXQiLCJwYXJlbnRTcGFuIiwidW5kZWZpbmVkIiwicmVzdWx0IiwiZ2V0QWNjb3VudHNDb3VudCIsImdldFRyYW5zYWN0aW9uc0NvdW50IiwiZ2V0QWNjb3VudHNUb3RhbEJhbGFuY2UiLCJyZXF1ZXN0cyIsInRyYWNlIiwic3BhbiIsIl9tdXRhdGlvbiIsInFsIiwidmFyaWFibGVzIiwic2V0VGFnIiwibXV0YXRpb24iLCJfcXVlcnkiLCJfZ3JhcGhRbCIsImNsaWVudCIsIm11dGF0ZSIsInRyYWNlU3BhbiIsInJlcXVlc3QiLCJlbnN1cmVDbGllbnQiLCJlcnJvcnMiLCJuZXR3b3JrRXJyb3IiLCJUT05DbGllbnRFcnJvciIsInF1ZXJ5RmFpbGVkIiwiZ2V0Q2xpZW50Q29uZmlnIiwic3Vic09wdGlvbnMiLCJ0cmFjZXIiLCJpbmplY3QiLCJGT1JNQVRfVEVYVF9NQVAiLCJzdWJzY3JpcHRpb25DbGllbnQiLCJTdWJzY3JpcHRpb25DbGllbnQiLCJyZWNvbm5lY3QiLCJjb25uZWN0aW9uUGFyYW1zIiwiaGVhZGVycyIsIm1heENvbm5lY3RUaW1lR2VuZXJhdG9yIiwiZHVyYXRpb24iLCJtYXgiLCJfIiwicmVxIiwicmVzb2x2ZWRTcGFuIiwiYXV0aFRva2VuIiwiYXV0aG9yaXphdGlvbiIsInRyYWNlckxpbmsiLCJBcG9sbG9DbGllbnQiLCJjYWNoZSIsIkluTWVtb3J5Q2FjaGUiLCJsaW5rIiwiZGVmaW5pdGlvbiIsImtpbmQiLCJvcGVyYXRpb24iLCJXZWJTb2NrZXRMaW5rIiwiY29uY2F0IiwiSHR0cExpbmsiLCJ1cmkiLCJkZWZhdWx0T3B0aW9ucyIsIndhdGNoUXVlcnkiLCJmZXRjaFBvbGljeSIsInN0b3AiLCJjbGVhclN0b3JlIiwiVE9OTW9kdWxlIiwibW9kdWxlIiwiY29sbGVjdGlvbk5hbWUiLCJ0eXBlTmFtZSIsInN1YnN0ciIsInRvVXBwZXJDYXNlIiwibGVuZ3RoIiwiZmlsdGVyIiwib3JkZXJCeSIsImxpbWl0IiwidGltZW91dCIsImMiLCJ0Iiwib25Eb2NFdmVudCIsIm9uRXJyb3IiLCJzdGFydFNwYW4iLCJUYWdzIiwiU1BBTl9LSU5EIiwidGV4dCIsInN1YnNjcmlwdGlvbiIsIm9ic2VydmFibGUiLCJzdWJzY3JpYmUiLCJtZXNzYWdlIiwibG9nIiwiZXZlbnQiLCJwYXlsb2FkIiwiY29uc29sZSIsImVycm9yIiwidW5zdWJzY3JpYmUiLCJmaW5pc2giLCJkb2NzIiwid2FpdEZvclRpbWVvdXQiLCJtb2R1bGVOYW1lIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQWtCQTs7QUFDQTs7QUFDQTs7QUFDQTs7QUFDQTs7QUFDQTs7QUFDQTs7QUFDQTs7QUFDQTs7QUFFQTs7QUFDQTs7QUFFQTs7QUFDQTs7QUFoQ0E7Ozs7Ozs7Ozs7Ozs7OztJQTJDcUJBLGdCOzs7OztBQUlqQiw0QkFBWUMsT0FBWixFQUF1QztBQUFBOztBQUFBO0FBQ25DLDRIQUFN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QWQ7QUFDSDs7QUFsQlI7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsT0FBRDtBQXFCQSxhQUFPO0FBQ0hDLFFBQUFBLFdBQVcsRUFBRSx1QkFBTTtBQUNmLGNBQUlULFlBQUosRUFBa0I7QUFDZEEsWUFBQUEsWUFBWSxDQUFDUyxXQUFiO0FBQ0FoRixZQUFBQSxJQUFJLENBQUNpRixNQUFMO0FBQ0g7QUFDSjtBQU5FLE9BQVA7QUFRSDs7Ozs7O3NEQUVhdEIsTSxFQUFhakUsTSxFQUFnQm9FLE8sRUFBa0J0RSxVOzs7Ozs7O3VCQUN0QyxLQUFLZixLQUFMLENBQVdrRixNQUFYLEVBQW1CakUsTUFBbkIsRUFBMkJELFNBQTNCLEVBQXNDQSxTQUF0QyxFQUFpRHFFLE9BQU8sSUFBSSxLQUE1RCxFQUFvRXRFLFVBQXBFLEM7OztBQUFiMEYsZ0JBQUFBLEk7O3NCQUNGQSxJQUFJLENBQUN4QixNQUFMLEdBQWMsQzs7Ozs7bURBQ1B3QixJQUFJLENBQUMsQ0FBRCxDOzs7c0JBRVRuRSwwQkFBZW9FLGNBQWYsRTs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFJZC9ILGdCQUFnQixDQUFDZ0ksVUFBakIsR0FBOEIsa0JBQTlCIiwic291cmNlc0NvbnRlbnQiOlsiLypcbiAqIENvcHlyaWdodCAyMDE4LTIwMjAgVE9OIERFViBTT0xVVElPTlMgTFRELlxuICpcbiAqIExpY2Vuc2VkIHVuZGVyIHRoZSBTT0ZUV0FSRSBFVkFMVUFUSU9OIExpY2Vuc2UgKHRoZSBcIkxpY2Vuc2VcIik7IHlvdSBtYXkgbm90IHVzZVxuICogdGhpcyBmaWxlIGV4Y2VwdCBpbiBjb21wbGlhbmNlIHdpdGggdGhlIExpY2Vuc2UuICBZb3UgbWF5IG9idGFpbiBhIGNvcHkgb2YgdGhlXG4gKiBMaWNlbnNlIGF0OlxuICpcbiAqIGh0dHA6Ly93d3cudG9uLmRldi9saWNlbnNlc1xuICpcbiAqIFVubGVzcyByZXF1aXJlZCBieSBhcHBsaWNhYmxlIGxhdyBvciBhZ3JlZWQgdG8gaW4gd3JpdGluZywgc29mdHdhcmVcbiAqIGRpc3RyaWJ1dGVkIHVuZGVyIHRoZSBMaWNlbnNlIGlzIGRpc3RyaWJ1dGVkIG9uIGFuIFwiQVMgSVNcIiBCQVNJUyxcbiAqIFdJVEhPVVQgV0FSUkFOVElFUyBPUiBDT05ESVRJT05TIE9GIEFOWSBLSU5ELCBlaXRoZXIgZXhwcmVzcyBvciBpbXBsaWVkLlxuICogU2VlIHRoZSBMaWNlbnNlIGZvciB0aGUgc3BlY2lmaWMgVE9OIERFViBzb2Z0d2FyZSBnb3Zlcm5pbmcgcGVybWlzc2lvbnMgYW5kXG4gKiBsaW1pdGF0aW9ucyB1bmRlciB0aGUgTGljZW5zZS5cbiAqL1xuXG4vLyBAZmxvd1xuXG5pbXBvcnQgeyBJbk1lbW9yeUNhY2hlIH0gZnJvbSAnYXBvbGxvLWNhY2hlLWlubWVtb3J5JztcbmltcG9ydCB7IEFwb2xsb0NsaWVudCB9IGZyb20gJ2Fwb2xsby1jbGllbnQnO1xuaW1wb3J0IHsgc3BsaXQgfSBmcm9tIFwiYXBvbGxvLWxpbmtcIjtcbmltcG9ydCB7IEh0dHBMaW5rIH0gZnJvbSAnYXBvbGxvLWxpbmstaHR0cCc7XG5pbXBvcnQgeyBXZWJTb2NrZXRMaW5rIH0gZnJvbSAnYXBvbGxvLWxpbmstd3MnO1xuaW1wb3J0IHsgZ2V0TWFpbkRlZmluaXRpb24gfSBmcm9tICdhcG9sbG8tdXRpbGl0aWVzJztcbmltcG9ydCBncWwgZnJvbSAnZ3JhcGhxbC10YWcnO1xuaW1wb3J0IHsgU3Vic2NyaXB0aW9uQ2xpZW50IH0gZnJvbSBcInN1YnNjcmlwdGlvbnMtdHJhbnNwb3J0LXdzXCI7XG5pbXBvcnQgeyBUT05DbGllbnQsIFRPTkNsaWVudEVycm9yIH0gZnJvbSAnLi4vVE9OQ2xpZW50JztcbmltcG9ydCB0eXBlIHsgVE9OTW9kdWxlQ29udGV4dCB9IGZyb20gJy4uL1RPTk1vZHVsZSc7XG5pbXBvcnQgeyBUT05Nb2R1bGUgfSBmcm9tICcuLi9UT05Nb2R1bGUnO1xuaW1wb3J0IFRPTkNvbmZpZ01vZHVsZSwgeyBVUkxQYXJ0cyB9IGZyb20gJy4vVE9OQ29uZmlnTW9kdWxlJztcblxuaW1wb3J0IHsgc2V0Q29udGV4dCB9IGZyb20gJ2Fwb2xsby1saW5rLWNvbnRleHQnO1xuaW1wb3J0IHsgRk9STUFUX1RFWFRfTUFQLCBUYWdzLCBTcGFuLCBTcGFuQ29udGV4dCB9IGZyb20gJ29wZW50cmFjaW5nJztcblxudHlwZSBTdWJzY3JpcHRpb24gPSB7XG4gICAgdW5zdWJzY3JpYmU6ICgpID0+IHZvaWRcbn1cblxuZXhwb3J0IHR5cGUgUmVxdWVzdCA9IHtcbiAgICBpZDogc3RyaW5nLFxuICAgIGJvZHk6IHN0cmluZyxcbn1cblxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgVE9OUXVlcmllc01vZHVsZSBleHRlbmRzIFRPTk1vZHVsZSB7XG4gICAgY29uZmlnOiBUT05Db25maWdNb2R1bGU7XG4gICAgb3ZlcnJpZGVXc1VybDogP3N0cmluZztcblxuICAgIGNvbnN0cnVjdG9yKGNvbnRleHQ6IFRPTk1vZHVsZUNvbnRleHQpIHtcbiAgICAgICAgc3VwZXIoY29udGV4dCk7XG4gICAgICAgIHRoaXMuX2NsaWVudCA9IG51bGw7XG4gICAgICAgIHRoaXMub3ZlcnJpZGVXc1VybCA9IG51bGw7XG4gICAgfVxuXG4gICAgYXN5bmMgc2V0dXAoKSB7XG4gICAgICAgIHRoaXMuY29uZmlnID0gdGhpcy5jb250ZXh0LmdldE1vZHVsZShUT05Db25maWdNb2R1bGUpO1xuICAgICAgICB0aGlzLnRyYW5zYWN0aW9ucyA9IG5ldyBUT05RQ29sbGVjdGlvbih0aGlzLCAndHJhbnNhY3Rpb25zJyk7XG4gICAgICAgIHRoaXMubWVzc2FnZXMgPSBuZXcgVE9OUUNvbGxlY3Rpb24odGhpcywgJ21lc3NhZ2VzJyk7XG4gICAgICAgIHRoaXMuYmxvY2tzID0gbmV3IFRPTlFDb2xsZWN0aW9uKHRoaXMsICdibG9ja3MnKTtcbiAgICAgICAgdGhpcy5hY2NvdW50cyA9IG5ldyBUT05RQ29sbGVjdGlvbih0aGlzLCAnYWNjb3VudHMnKTtcbiAgICB9XG5cbiAgICBhc3luYyBkZXRlY3RSZWRpcmVjdChmZXRjaDogYW55LCBzb3VyY2VVcmw6IHN0cmluZyk6IFByb21pc2U8c3RyaW5nPiB7XG4gICAgICAgIGNvbnN0IHJlc3BvbnNlID0gYXdhaXQgZmV0Y2goc291cmNlVXJsKTtcbiAgICAgICAgaWYgKHJlc3BvbnNlLnJlZGlyZWN0ZWQgPT09IHRydWUpIHtcbiAgICAgICAgICAgIHJldHVybiByZXNwb25zZS51cmw7XG4gICAgICAgIH1cbiAgICAgICAgaWYgKHJlc3BvbnNlLnJlZGlyZWN0ZWQgPT09IGZhbHNlKSB7XG4gICAgICAgICAgICByZXR1cm4gJyc7XG4gICAgICAgIH1cbiAgICAgICAgY29uc3Qgc291cmNlTG9jYXRpb24gPSBVUkxQYXJ0cy5maXgoc291cmNlVXJsLCBwYXJ0cyA9PiB7XG4gICAgICAgICAgICBwYXJ0cy5xdWVyeSA9ICcnXG4gICAgICAgIH0pLnRvTG93ZXJDYXNlKCk7XG4gICAgICAgIGNvbnN0IHJlc3BvbnNlTG9jYXRpb24gPSBVUkxQYXJ0cy5maXgocmVzcG9uc2UudXJsLCBwYXJ0cyA9PiB7XG4gICAgICAgICAgICBwYXJ0cy5xdWVyeSA9ICcnXG4gICAgICAgIH0pLnRvTG93ZXJDYXNlKCk7XG4gICAgICAgIHJldHVybiByZXNwb25zZUxvY2F0aW9uICE9PSBzb3VyY2VMb2NhdGlvbiA/IHJlc3BvbnNlLnVybCA6ICcnO1xuICAgIH1cblxuICAgIGFzeW5jIGdldENsaWVudENvbmZpZygpIHtcbiAgICAgICAgY29uc3QgY29uZmlnID0gdGhpcy5jb25maWc7XG4gICAgICAgIGNvbnN0IHsgY2xpZW50UGxhdGZvcm0gfSA9IFRPTkNsaWVudDtcbiAgICAgICAgaWYgKCFjb25maWcuZGF0YSB8fCAhY2xpZW50UGxhdGZvcm0pIHtcbiAgICAgICAgICAgIHRocm93IEVycm9yKCdUT04gQ2xpZW50IGRvZXMgbm90IGNvbmZpZ3VyZWQnKTtcbiAgICAgICAgfVxuICAgICAgICBsZXQgaHR0cFVybCA9IGNvbmZpZy5xdWVyaWVzSHR0cFVybCgpO1xuICAgICAgICBsZXQgd3NVcmwgPSBjb25maWcucXVlcmllc1dzVXJsKCk7XG4gICAgICAgIGNvbnN0IGZldGNoID0gY2xpZW50UGxhdGZvcm0uZmV0Y2g7XG4gICAgICAgIGNvbnN0IHJlZGlyZWN0ZWQgPSBhd2FpdCB0aGlzLmRldGVjdFJlZGlyZWN0KGZldGNoLCBgJHtodHRwVXJsfT9xdWVyeT0lN0JpbmZvJTdCdmVyc2lvbiU3RCU3RGApO1xuICAgICAgICBpZiAocmVkaXJlY3RlZCAhPT0gJycpIHtcbiAgICAgICAgICAgIGNvbnN0IGxvY2F0aW9uID0gVVJMUGFydHMuZml4KHJlZGlyZWN0ZWQsIHBhcnRzID0+IHtcbiAgICAgICAgICAgICAgICBwYXJ0cy5xdWVyeSA9ICcnXG4gICAgICAgICAgICB9KTtcbiAgICAgICAgICAgIGlmICghIWxvY2F0aW9uKSB7XG4gICAgICAgICAgICAgICAgaHR0cFVybCA9IGxvY2F0aW9uO1xuICAgICAgICAgICAgICAgIHdzVXJsID0gbG9jYXRpb25cbiAgICAgICAgICAgICAgICAgICAgLnJlcGxhY2UoL15odHRwczpcXC9cXC8vZ2ksICd3c3M6Ly8nKVxuICAgICAgICAgICAgICAgICAgICAucmVwbGFjZSgvXmh0dHA6XFwvXFwvL2dpLCAnd3M6Ly8nKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgICByZXR1cm4ge1xuICAgICAgICAgICAgaHR0cFVybCxcbiAgICAgICAgICAgIHdzVXJsLFxuICAgICAgICAgICAgZmV0Y2gsXG4gICAgICAgICAgICBXZWJTb2NrZXQ6IGNsaWVudFBsYXRmb3JtLldlYlNvY2tldCxcbiAgICAgICAgfVxuICAgIH1cblxuICAgIGFzeW5jIGdldEFjY291bnRzQ291bnQocGFyZW50U3Bhbj86IChTcGFuIHwgU3BhbkNvbnRleHQpKTogUHJvbWlzZTxudW1iZXI+IHtcbiAgICAgICAgY29uc3QgcmVzdWx0ID0gYXdhaXQgdGhpcy5xdWVyeSgncXVlcnl7Z2V0QWNjb3VudHNDb3VudH0nLCB1bmRlZmluZWQsIHBhcmVudFNwYW4pO1xuICAgICAgICByZXR1cm4gcmVzdWx0LmRhdGEuZ2V0QWNjb3VudHNDb3VudDtcbiAgICB9XG5cbiAgICBhc3luYyBnZXRUcmFuc2FjdGlvbnNDb3VudChwYXJlbnRTcGFuPzogKFNwYW4gfCBTcGFuQ29udGV4dCkpOiBQcm9taXNlPG51bWJlcj4ge1xuICAgICAgICBjb25zdCByZXN1bHQgPSBhd2FpdCB0aGlzLnF1ZXJ5KCdxdWVyeXtnZXRUcmFuc2FjdGlvbnNDb3VudH0nLCB1bmRlZmluZWQsIHBhcmVudFNwYW4pO1xuICAgICAgICByZXR1cm4gcmVzdWx0LmRhdGEuZ2V0VHJhbnNhY3Rpb25zQ291bnQ7XG4gICAgfVxuXG4gICAgYXN5bmMgZ2V0QWNjb3VudHNUb3RhbEJhbGFuY2UocGFyZW50U3Bhbj86IChTcGFuIHwgU3BhbkNvbnRleHQpKTogUHJvbWlzZTxzdHJpbmc+IHtcbiAgICAgICAgY29uc3QgcmVzdWx0ID0gYXdhaXQgdGhpcy5xdWVyeSgncXVlcnl7Z2V0QWNjb3VudHNUb3RhbEJhbGFuY2V9JywgdW5kZWZpbmVkLCBwYXJlbnRTcGFuKTtcbiAgICAgICAgcmV0dXJuIHJlc3VsdC5kYXRhLmdldEFjY291bnRzVG90YWxCYWxhbmNlO1xuICAgIH1cblxuICAgIGFzeW5jIHBvc3RSZXF1ZXN0cyhyZXF1ZXN0czogUmVxdWVzdFtdLCBwYXJlbnRTcGFuPzogKFNwYW4gfCBTcGFuQ29udGV4dCkpOiBQcm9taXNlPGFueT4ge1xuICAgICAgICByZXR1cm4gdGhpcy5jb250ZXh0LnRyYWNlKCdxdWVyaWVzLnBvc3RSZXF1ZXN0cycsIGFzeW5jIChzcGFuKSA9PiB7XG4gICAgICAgICAgICByZXR1cm4gdGhpcy5fbXV0YXRpb24oYG11dGF0aW9uIHBvc3RSZXF1ZXN0cygkcmVxdWVzdHM6IFtSZXF1ZXN0XSkge1xuICAgICAgICAgICAgICAgIHBvc3RSZXF1ZXN0cyhyZXF1ZXN0czogJHJlcXVlc3RzKVxuICAgICAgICAgICAgfWAsIHtcbiAgICAgICAgICAgICAgICByZXF1ZXN0cyxcbiAgICAgICAgICAgIH0sIHNwYW4pO1xuICAgICAgICB9LCBwYXJlbnRTcGFuKTtcbiAgICB9XG5cbiAgICBhc3luYyBtdXRhdGlvbihxbDogc3RyaW5nLCB2YXJpYWJsZXM6IHsgW3N0cmluZ106IGFueSB9ID0ge30sIHBhcmVudFNwYW4/OiAoU3BhbiB8IFNwYW5Db250ZXh0KSk6IFByb21pc2U8YW55PiB7XG4gICAgICAgIHJldHVybiB0aGlzLmNvbnRleHQudHJhY2UoJ3F1ZXJpZXMubXV0YXRpb24nLCBhc3luYyAoc3BhbjogU3BhbikgPT4ge1xuICAgICAgICAgICAgc3Bhbi5zZXRUYWcoJ3BhcmFtcycsIHtcbiAgICAgICAgICAgICAgICBtdXRhdGlvbjogcWwsXG4gICAgICAgICAgICAgICAgdmFyaWFibGVzLFxuICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICByZXR1cm4gdGhpcy5fbXV0YXRpb24ocWwsIHZhcmlhYmxlcywgc3Bhbik7XG4gICAgICAgIH0sIHBhcmVudFNwYW4pO1xuICAgIH1cblxuICAgIGFzeW5jIHF1ZXJ5KHFsOiBzdHJpbmcsIHZhcmlhYmxlczogeyBbc3RyaW5nXTogYW55IH0gPSB7fSwgcGFyZW50U3Bhbj86IChTcGFuIHwgU3BhbkNvbnRleHQpKTogUHJvbWlzZTxhbnk+IHtcbiAgICAgICAgcmV0dXJuIHRoaXMuY29udGV4dC50cmFjZSgncXVlcmllcy5xdWVyeScsIGFzeW5jIChzcGFuOiBTcGFuKSA9PiB7XG4gICAgICAgICAgICBzcGFuLnNldFRhZygncGFyYW1zJywge1xuICAgICAgICAgICAgICAgIHF1ZXJ5OiBxbCxcbiAgICAgICAgICAgICAgICB2YXJpYWJsZXMsXG4gICAgICAgICAgICB9KTtcbiAgICAgICAgICAgIHJldHVybiB0aGlzLl9xdWVyeShxbCwgdmFyaWFibGVzLCBzcGFuKTtcbiAgICAgICAgfSwgcGFyZW50U3Bhbik7XG4gICAgfVxuXG4gICAgYXN5bmMgX211dGF0aW9uKHFsOiBzdHJpbmcsIHZhcmlhYmxlczogeyBbc3RyaW5nXTogYW55IH0gPSB7fSwgc3BhbjogU3Bhbik6IFByb21pc2U8YW55PiB7XG4gICAgICAgIGNvbnN0IG11dGF0aW9uID0gZ3FsKFtxbF0pO1xuICAgICAgICByZXR1cm4gdGhpcy5fZ3JhcGhRbChjbGllbnQgPT4gY2xpZW50Lm11dGF0ZSh7XG4gICAgICAgICAgICBtdXRhdGlvbixcbiAgICAgICAgICAgIHZhcmlhYmxlcyxcbiAgICAgICAgICAgIGNvbnRleHQ6IHtcbiAgICAgICAgICAgICAgICB0cmFjZVNwYW46IHNwYW4sXG4gICAgICAgICAgICB9XG4gICAgICAgIH0pKTtcbiAgICB9XG5cbiAgICBhc3luYyBfcXVlcnkocWw6IHN0cmluZywgdmFyaWFibGVzOiB7IFtzdHJpbmddOiBhbnkgfSA9IHt9LCBzcGFuOiBTcGFuKTogUHJvbWlzZTxhbnk+IHtcbiAgICAgICAgY29uc3QgcXVlcnkgPSBncWwoW3FsXSk7XG4gICAgICAgIHJldHVybiB0aGlzLl9ncmFwaFFsKGNsaWVudCA9PiBjbGllbnQucXVlcnkoe1xuICAgICAgICAgICAgcXVlcnksXG4gICAgICAgICAgICB2YXJpYWJsZXMsXG4gICAgICAgICAgICBjb250ZXh0OiB7XG4gICAgICAgICAgICAgICAgdHJhY2VTcGFuOiBzcGFuLFxuICAgICAgICAgICAgfVxuICAgICAgICB9KSwgc3Bhbik7XG4gICAgfVxuXG4gICAgYXN5bmMgX2dyYXBoUWwocmVxdWVzdDogKGNsaWVudDogQXBvbGxvQ2xpZW50KSA9PiBQcm9taXNlPGFueT4sIHNwYW46IFNwYW4pOiBQcm9taXNlPGFueT4ge1xuICAgICAgICBjb25zdCBjbGllbnQgPSBhd2FpdCB0aGlzLmVuc3VyZUNsaWVudChzcGFuKTtcbiAgICAgICAgdHJ5IHtcbiAgICAgICAgICAgIHJldHVybiByZXF1ZXN0KGNsaWVudCk7XG4gICAgICAgIH0gY2F0Y2ggKGVycm9yKSB7XG4gICAgICAgICAgICBjb25zdCBlcnJvcnMgPSBlcnJvciAmJiBlcnJvci5uZXR3b3JrRXJyb3IgJiYgZXJyb3IubmV0d29ya0Vycm9yLnJlc3VsdCAmJiBlcnJvci5uZXR3b3JrRXJyb3IucmVzdWx0LmVycm9ycztcbiAgICAgICAgICAgIGlmIChlcnJvcnMpIHtcbiAgICAgICAgICAgICAgICB0aHJvdyBUT05DbGllbnRFcnJvci5xdWVyeUZhaWxlZChlcnJvcnMpO1xuICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgICB0aHJvdyBlcnJvcjtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgIH1cblxuICAgIGFzeW5jIGVuc3VyZUNsaWVudChzcGFuOiBTcGFuKTogUHJvbWlzZTxBcG9sbG9DbGllbnQ+IHtcbiAgICAgICAgaWYgKHRoaXMuX2NsaWVudCkge1xuICAgICAgICAgICAgcmV0dXJuIHRoaXMuX2NsaWVudDtcbiAgICAgICAgfVxuICAgICAgICBhd2FpdCB0aGlzLmNvbnRleHQudHJhY2UoJ3NldHVwIGNsaWVudCcsIGFzeW5jIChzcGFuKSA9PiB7XG4gICAgICAgICAgICBjb25zdCB7IGh0dHBVcmwsIHdzVXJsLCBmZXRjaCwgV2ViU29ja2V0IH0gPSBhd2FpdCB0aGlzLmdldENsaWVudENvbmZpZygpO1xuICAgICAgICAgICAgbGV0IHN1YnNPcHRpb25zID0gdGhpcy5jb25maWcudHJhY2VyLmluamVjdChzcGFuLCBGT1JNQVRfVEVYVF9NQVAsIHt9KTtcbiAgICAgICAgICAgIGNvbnN0IHN1YnNjcmlwdGlvbkNsaWVudCA9IG5ldyBTdWJzY3JpcHRpb25DbGllbnQoXG4gICAgICAgICAgICAgICAgd3NVcmwsXG4gICAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgICAgICByZWNvbm5lY3Q6IHRydWUsXG4gICAgICAgICAgICAgICAgICAgIGNvbm5lY3Rpb25QYXJhbXM6ICgpID0+ICh7XG4gICAgICAgICAgICAgICAgICAgICAgICBoZWFkZXJzOiBzdWJzT3B0aW9ucyxcbiAgICAgICAgICAgICAgICAgICAgfSksXG4gICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICBXZWJTb2NrZXRcbiAgICAgICAgICAgICk7XG4gICAgICAgICAgICBzdWJzY3JpcHRpb25DbGllbnQubWF4Q29ubmVjdFRpbWVHZW5lcmF0b3IuZHVyYXRpb24gPSAoKSA9PiBzdWJzY3JpcHRpb25DbGllbnQubWF4Q29ubmVjdFRpbWVHZW5lcmF0b3IubWF4O1xuICAgICAgICAgICAgY29uc3QgdHJhY2VyTGluayA9IGF3YWl0IHNldENvbnRleHQoKF8sIHJlcSkgPT4ge1xuICAgICAgICAgICAgICAgIGNvbnN0IHJlc29sdmVkU3BhbiA9IChyZXEgJiYgcmVxLnRyYWNlU3BhbikgfHwgc3BhbjtcbiAgICAgICAgICAgICAgICByZXEuaGVhZGVycyA9IHt9O1xuICAgICAgICAgICAgICAgIHRoaXMuY29uZmlnLnRyYWNlci5pbmplY3QocmVzb2x2ZWRTcGFuLCBGT1JNQVRfVEVYVF9NQVAsIHJlcS5oZWFkZXJzKTtcbiAgICAgICAgICAgICAgICBjb25zdCBhdXRoVG9rZW4gPSB0aGlzLmNvbmZpZy5kYXRhICYmIHRoaXMuY29uZmlnLmRhdGEuYXV0aG9yaXphdGlvbjtcbiAgICAgICAgICAgICAgICBpZiAoYXV0aFRva2VuKSB7XG4gICAgICAgICAgICAgICAgICAgIHJlcS5oZWFkZXJzLmF1dGhvcml6YXRpb24gPSBhdXRoVG9rZW47XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIHJldHVybiB7XG4gICAgICAgICAgICAgICAgICAgIGhlYWRlcnM6IHJlcS5oZWFkZXJzLFxuICAgICAgICAgICAgICAgIH07XG4gICAgICAgICAgICB9KTtcbiAgICAgICAgICAgIHRoaXMuX2NsaWVudCA9IG5ldyBBcG9sbG9DbGllbnQoe1xuICAgICAgICAgICAgICAgIGNhY2hlOiBuZXcgSW5NZW1vcnlDYWNoZSh7fSksXG4gICAgICAgICAgICAgICAgbGluazogc3BsaXQoXG4gICAgICAgICAgICAgICAgICAgICh7IHF1ZXJ5IH0pID0+IHtcbiAgICAgICAgICAgICAgICAgICAgICAgIGNvbnN0IGRlZmluaXRpb24gPSBnZXRNYWluRGVmaW5pdGlvbihxdWVyeSk7XG4gICAgICAgICAgICAgICAgICAgICAgICByZXR1cm4gKFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGRlZmluaXRpb24ua2luZCA9PT0gJ09wZXJhdGlvbkRlZmluaXRpb24nXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgJiYgZGVmaW5pdGlvbi5vcGVyYXRpb24gPT09ICdzdWJzY3JpcHRpb24nXG4gICAgICAgICAgICAgICAgICAgICAgICApO1xuICAgICAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgICAgICBuZXcgV2ViU29ja2V0TGluayhzdWJzY3JpcHRpb25DbGllbnQpLFxuICAgICAgICAgICAgICAgICAgICB0cmFjZXJMaW5rLmNvbmNhdChuZXcgSHR0cExpbmsoe1xuICAgICAgICAgICAgICAgICAgICAgICAgdXJpOiBodHRwVXJsLFxuICAgICAgICAgICAgICAgICAgICAgICAgZmV0Y2gsXG4gICAgICAgICAgICAgICAgICAgIH0pKSxcbiAgICAgICAgICAgICAgICApLFxuICAgICAgICAgICAgICAgIGRlZmF1bHRPcHRpb25zOiB7XG4gICAgICAgICAgICAgICAgICAgIHdhdGNoUXVlcnk6IHtcbiAgICAgICAgICAgICAgICAgICAgICAgIGZldGNoUG9saWN5OiAnbm8tY2FjaGUnLFxuICAgICAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgICAgICBxdWVyeToge1xuICAgICAgICAgICAgICAgICAgICAgICAgZmV0Y2hQb2xpY3k6ICduby1jYWNoZScsXG4gICAgICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfSk7XG4gICAgICAgIH0sIHNwYW4pO1xuICAgICAgICByZXR1cm4gdGhpcy5fY2xpZW50O1xuICAgIH1cblxuICAgIGFzeW5jIGNsb3NlKCkge1xuICAgICAgICBpZiAodGhpcy5fY2xpZW50KSB7XG4gICAgICAgICAgICBjb25zdCBjbGllbnQgPSB0aGlzLl9jbGllbnQ7XG4gICAgICAgICAgICB0aGlzLl9jbGllbnQgPSBudWxsO1xuICAgICAgICAgICAgY2xpZW50LnN0b3AoKTtcbiAgICAgICAgICAgIGF3YWl0IGNsaWVudC5jbGVhclN0b3JlKCk7XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICB0cmFuc2FjdGlvbnM6IFRPTlFDb2xsZWN0aW9uO1xuXG4gICAgbWVzc2FnZXM6IFRPTlFDb2xsZWN0aW9uO1xuXG4gICAgYmxvY2tzOiBUT05RQ29sbGVjdGlvbjtcblxuICAgIGFjY291bnRzOiBUT05RQ29sbGVjdGlvbjtcblxuICAgIF9jbGllbnQ6IEFwb2xsb0NsaWVudDtcbn1cblxuXG50eXBlIERvY0V2ZW50ID0gKGNoYW5nZVR5cGU6IHN0cmluZywgZG9jOiBhbnkpID0+IHZvaWQ7XG5cbnR5cGUgT3JkZXJCeSA9IHtcbiAgICBwYXRoOiBzdHJpbmcsXG4gICAgZGlyZWN0aW9uOiAnQVNDJyB8ICdERVNDJ1xufVxuXG5jbGFzcyBUT05RQ29sbGVjdGlvbiB7XG4gICAgbW9kdWxlOiBUT05RdWVyaWVzTW9kdWxlO1xuXG4gICAgY29sbGVjdGlvbk5hbWU6IHN0cmluZztcbiAgICB0eXBlTmFtZTogc3RyaW5nO1xuXG4gICAgY29uc3RydWN0b3IobW9kdWxlOiBUT05RdWVyaWVzTW9kdWxlLCBjb2xsZWN0aW9uTmFtZTogc3RyaW5nKSB7XG4gICAgICAgIHRoaXMubW9kdWxlID0gbW9kdWxlO1xuICAgICAgICB0aGlzLmNvbGxlY3Rpb25OYW1lID0gY29sbGVjdGlvbk5hbWU7XG4gICAgICAgIHRoaXMudHlwZU5hbWUgPSBjb2xsZWN0aW9uTmFtZS5zdWJzdHIoMCwgMSkudG9VcHBlckNhc2UoKSArXG4gICAgICAgICAgICBjb2xsZWN0aW9uTmFtZS5zdWJzdHIoMSwgY29sbGVjdGlvbk5hbWUubGVuZ3RoIC0gMik7XG4gICAgfVxuXG4gICAgYXN5bmMgcXVlcnkoZmlsdGVyOiBhbnksIHJlc3VsdDogc3RyaW5nLCBvcmRlckJ5PzogT3JkZXJCeVtdLCBsaW1pdD86IG51bWJlciwgdGltZW91dD86IG51bWJlciwgcGFyZW50U3Bhbj86IChTcGFuIHwgU3BhbkNvbnRleHQpKTogUHJvbWlzZTxhbnk+IHtcbiAgICAgICAgcmV0dXJuIHRoaXMubW9kdWxlLmNvbnRleHQudHJhY2UoYCR7dGhpcy5jb2xsZWN0aW9uTmFtZX0ucXVlcnlgLCBhc3luYyAoc3BhbikgPT4ge1xuICAgICAgICAgICAgc3Bhbi5zZXRUYWcoJ3BhcmFtcycsIHtcbiAgICAgICAgICAgICAgICBmaWx0ZXIsIHJlc3VsdCwgb3JkZXJCeSwgbGltaXQsIHRpbWVvdXRcbiAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgY29uc3QgYyA9IHRoaXMuY29sbGVjdGlvbk5hbWU7XG4gICAgICAgICAgICBjb25zdCB0ID0gdGhpcy50eXBlTmFtZTtcbiAgICAgICAgICAgIGNvbnN0IHFsID0gYHF1ZXJ5ICR7Y30oJGZpbHRlcjogJHt0fUZpbHRlciwgJG9yZGVyQnk6IFtRdWVyeU9yZGVyQnldLCAkbGltaXQ6IEludCwgJHRpbWVvdXQ6IEZsb2F0KSB7XG4gICAgICAgICAgICAgICAgJHtjfShmaWx0ZXI6ICRmaWx0ZXIsIG9yZGVyQnk6ICRvcmRlckJ5LCBsaW1pdDogJGxpbWl0LCB0aW1lb3V0OiAkdGltZW91dCkgeyAke3Jlc3VsdH0gfVxuICAgICAgICAgICAgfWA7XG4gICAgICAgICAgICBjb25zdCB2YXJpYWJsZXM6IHsgW3N0cmluZ106IGFueSB9ID0ge1xuICAgICAgICAgICAgICAgIGZpbHRlcixcbiAgICAgICAgICAgICAgICBvcmRlckJ5LFxuICAgICAgICAgICAgICAgIGxpbWl0LFxuICAgICAgICAgICAgfTtcbiAgICAgICAgICAgIGlmICh0aW1lb3V0KSB7XG4gICAgICAgICAgICAgICAgdmFyaWFibGVzLnRpbWVvdXQgPSB0aW1lb3V0O1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgcmV0dXJuIChhd2FpdCB0aGlzLm1vZHVsZS5fcXVlcnkocWwsIHZhcmlhYmxlcywgc3BhbikpLmRhdGFbY107XG4gICAgICAgIH0sIHBhcmVudFNwYW4pO1xuICAgIH1cblxuICAgIHN1YnNjcmliZShcbiAgICAgICAgZmlsdGVyOiBhbnksXG4gICAgICAgIHJlc3VsdDogc3RyaW5nLFxuICAgICAgICBvbkRvY0V2ZW50OiBEb2NFdmVudCxcbiAgICAgICAgb25FcnJvcj86IChlcnI6IEVycm9yKSA9PiB2b2lkXG4gICAgKTogU3Vic2NyaXB0aW9uIHtcbiAgICAgICAgY29uc3Qgc3BhbiA9IHRoaXMubW9kdWxlLmNvbmZpZy50cmFjZXIuc3RhcnRTcGFuKCdUT05RdWVyaWVzTW9kdWxlLmpzOnN1YnNjcmliZSAnKTtcbiAgICAgICAgc3Bhbi5zZXRUYWcoVGFncy5TUEFOX0tJTkQsICdjbGllbnQnKTtcbiAgICAgICAgY29uc3QgdGV4dCA9IGBzdWJzY3JpcHRpb24gJHt0aGlzLmNvbGxlY3Rpb25OYW1lfSgkZmlsdGVyOiAke3RoaXMudHlwZU5hbWV9RmlsdGVyKSB7XG4gICAgICAgIFx0JHt0aGlzLmNvbGxlY3Rpb25OYW1lfShmaWx0ZXI6ICRmaWx0ZXIpIHsgJHtyZXN1bHR9IH1cbiAgICAgICAgfWA7XG4gICAgICAgIGNvbnN0IHF1ZXJ5ID0gZ3FsKFt0ZXh0XSk7XG4gICAgICAgIGxldCBzdWJzY3JpcHRpb24gPSBudWxsO1xuICAgICAgICAoYXN5bmMgKCkgPT4ge1xuICAgICAgICAgICAgdHJ5IHtcbiAgICAgICAgICAgICAgICBjb25zdCBjbGllbnQgPSBhd2FpdCB0aGlzLm1vZHVsZS5lbnN1cmVDbGllbnQoc3Bhbik7XG4gICAgICAgICAgICAgICAgY29uc3Qgb2JzZXJ2YWJsZSA9IGNsaWVudC5zdWJzY3JpYmUoe1xuICAgICAgICAgICAgICAgICAgICBxdWVyeSxcbiAgICAgICAgICAgICAgICAgICAgdmFyaWFibGVzOiB7XG4gICAgICAgICAgICAgICAgICAgICAgICBmaWx0ZXIsXG4gICAgICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICAgICAgc3Vic2NyaXB0aW9uID0gb2JzZXJ2YWJsZS5zdWJzY3JpYmUoKG1lc3NhZ2UpID0+IHtcbiAgICAgICAgICAgICAgICAgICAgb25Eb2NFdmVudCgnaW5zZXJ0L3VwZGF0ZScsIG1lc3NhZ2UuZGF0YVt0aGlzLmNvbGxlY3Rpb25OYW1lXSk7XG4gICAgICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICB9IGNhdGNoIChlcnJvcikge1xuICAgICAgICAgICAgICAgIHNwYW4ubG9nKHsgZXZlbnQ6ICdmYWlsZWQnLCBwYXlsb2FkOiBlcnJvciB9KTtcbiAgICAgICAgICAgICAgICBpZiAob25FcnJvcikge1xuICAgICAgICAgICAgICAgICAgICBvbkVycm9yKGVycm9yKTtcbiAgICAgICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAgICAgICBjb25zb2xlLmVycm9yKCdUT04gQ2xpZW50IHN1YnNjcmlwdGlvbiBlcnJvcicsIGVycm9yKTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG4gICAgICAgIH0pKCk7XG4gICAgICAgIHJldHVybiB7XG4gICAgICAgICAgICB1bnN1YnNjcmliZTogKCkgPT4ge1xuICAgICAgICAgICAgICAgIGlmIChzdWJzY3JpcHRpb24pIHtcbiAgICAgICAgICAgICAgICAgICAgc3Vic2NyaXB0aW9uLnVuc3Vic2NyaWJlKCk7XG4gICAgICAgICAgICAgICAgICAgIHNwYW4uZmluaXNoKCk7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfSxcbiAgICAgICAgfTtcbiAgICB9XG5cbiAgICBhc3luYyB3YWl0Rm9yKGZpbHRlcjogYW55LCByZXN1bHQ6IHN0cmluZywgdGltZW91dD86IG51bWJlciwgcGFyZW50U3Bhbj86IChTcGFuIHwgU3BhbkNvbnRleHQpKTogUHJvbWlzZTxhbnk+IHtcbiAgICAgICAgY29uc3QgZG9jcyA9IGF3YWl0IHRoaXMucXVlcnkoZmlsdGVyLCByZXN1bHQsIHVuZGVmaW5lZCwgdW5kZWZpbmVkLCB0aW1lb3V0IHx8IDQwXzAwMCwgcGFyZW50U3Bhbik7XG4gICAgICAgIGlmIChkb2NzLmxlbmd0aCA+IDApIHtcbiAgICAgICAgICAgIHJldHVybiBkb2NzWzBdO1xuICAgICAgICB9XG4gICAgICAgIHRocm93IFRPTkNsaWVudEVycm9yLndhaXRGb3JUaW1lb3V0KCk7XG4gICAgfVxufVxuXG5UT05RdWVyaWVzTW9kdWxlLm1vZHVsZU5hbWUgPSAnVE9OUXVlcmllc01vZHVsZSc7XG4iXX0=