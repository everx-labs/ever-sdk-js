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
        var client, gqlErr, clientErr, gqlExc, errors;
        return _regenerator["default"].wrap(function _callee15$(_context15) {
          while (1) {
            switch (_context15.prev = _context15.next) {
              case 0:
                _context15.next = 2;
                return this.ensureClient(span);

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
                                  accessKey: _this5.config.data && _this5.config.data.accessKey,
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

                              var accessKey = _this5.config.data && _this5.config.data.accessKey;

                              if (accessKey) {
                                req.headers.accessKey = accessKey;
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
                              }, tracerLink.concat(new _apolloLinkWs.WebSocketLink(subscriptionClient)), tracerLink.concat(new _apolloLinkHttp.HttpLink({
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
    this.typeName = collectionName.substr(0, 1).toUpperCase() + collectionName.substr(1, collectionName.length - 2);
  }

  (0, _createClass2["default"])(TONQueriesModuleCollection, [{
    key: "query",
    value: function () {
      var _query4 = (0, _asyncToGenerator2["default"])(
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

                  return function (_x19) {
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
        return _query4.apply(this, arguments);
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy9tb2R1bGVzL1RPTlF1ZXJpZXNNb2R1bGUuanMiXSwibmFtZXMiOlsiTUFYX1RJTUVPVVQiLCJERUZBVUxUX1RJTUVPVVQiLCJmaW5kUGFyYW1zIiwiYXJncyIsInJlcXVpcmVkUGFyYW1OYW1lIiwibGVuZ3RoIiwiVE9OUXVlcmllc01vZHVsZSIsImNvbnRleHQiLCJfY2xpZW50Iiwib3ZlcnJpZGVXc1VybCIsImNvbmZpZyIsImdldE1vZHVsZSIsIlRPTkNvbmZpZ01vZHVsZSIsInRyYW5zYWN0aW9ucyIsIlRPTlF1ZXJpZXNNb2R1bGVDb2xsZWN0aW9uIiwibWVzc2FnZXMiLCJibG9ja3MiLCJhY2NvdW50cyIsImZldGNoIiwic291cmNlVXJsIiwicmVzcG9uc2UiLCJyZWRpcmVjdGVkIiwidXJsIiwic291cmNlTG9jYXRpb24iLCJVUkxQYXJ0cyIsImZpeCIsInBhcnRzIiwicXVlcnkiLCJ0b0xvd2VyQ2FzZSIsInJlc3BvbnNlTG9jYXRpb24iLCJjbGllbnRQbGF0Zm9ybSIsIlRPTkNsaWVudCIsImRhdGEiLCJFcnJvciIsImh0dHBVcmwiLCJxdWVyaWVzSHR0cFVybCIsIndzVXJsIiwicXVlcmllc1dzVXJsIiwiZGV0ZWN0UmVkaXJlY3QiLCJsb2NhdGlvbiIsInJlcGxhY2UiLCJXZWJTb2NrZXQiLCJwYXJlbnRTcGFuIiwidW5kZWZpbmVkIiwicmVzdWx0IiwiZ2V0QWNjb3VudHNDb3VudCIsImdldFRyYW5zYWN0aW9uc0NvdW50IiwiZ2V0QWNjb3VudHNUb3RhbEJhbGFuY2UiLCJyZXF1ZXN0cyIsInRyYWNlIiwic3BhbiIsIl9tdXRhdGlvbiIsInFsIiwidmFyaWFibGVzIiwic2V0VGFnIiwibXV0YXRpb24iLCJfcXVlcnkiLCJfZ3JhcGhRbCIsImNsaWVudCIsIm11dGF0ZSIsInRyYWNlU3BhbiIsInJlcXVlc3QiLCJlbnN1cmVDbGllbnQiLCJncWxFcnIiLCJncmFwaFFMRXJyb3JzIiwiY2xpZW50RXJyIiwibWVzc2FnZSIsImdxbEV4YyIsImV4dGVuc2lvbnMiLCJleGNlcHRpb24iLCJudW1iZXIiLCJjb2RlIiwic291cmNlIiwiZXJyb3JzIiwibmV0d29ya0Vycm9yIiwiVE9OQ2xpZW50RXJyb3IiLCJxdWVyeUZhaWxlZCIsImdldENsaWVudENvbmZpZyIsInN1YnNPcHRpb25zIiwidHJhY2VyIiwiaW5qZWN0IiwiRk9STUFUX1RFWFRfTUFQIiwic3Vic2NyaXB0aW9uQ2xpZW50IiwiU3Vic2NyaXB0aW9uQ2xpZW50IiwicmVjb25uZWN0IiwiY29ubmVjdGlvblBhcmFtcyIsImFjY2Vzc0tleSIsImhlYWRlcnMiLCJtYXhDb25uZWN0VGltZUdlbmVyYXRvciIsImR1cmF0aW9uIiwibWF4IiwiXyIsInJlcSIsInJlc29sdmVkU3BhbiIsInRyYWNlckxpbmsiLCJBcG9sbG9DbGllbnQiLCJjYWNoZSIsIkluTWVtb3J5Q2FjaGUiLCJsaW5rIiwiZGVmaW5pdGlvbiIsImtpbmQiLCJvcGVyYXRpb24iLCJjb25jYXQiLCJXZWJTb2NrZXRMaW5rIiwiSHR0cExpbmsiLCJ1cmkiLCJkZWZhdWx0T3B0aW9ucyIsIndhdGNoUXVlcnkiLCJmZXRjaFBvbGljeSIsInN0b3AiLCJjbGVhclN0b3JlIiwiVE9OTW9kdWxlIiwibW9kdWxlIiwiY29sbGVjdGlvbk5hbWUiLCJ0eXBlTmFtZSIsInN1YnN0ciIsInRvVXBwZXJDYXNlIiwicGFyYW1zIiwiZmlsdGVyIiwib3JkZXJCeSIsImxpbWl0IiwidGltZW91dCIsImMiLCJ0IiwiTWF0aCIsIm1pbiIsIm9uRG9jRXZlbnQiLCJvbkVycm9yIiwic3RhcnRTcGFuIiwiVGFncyIsIlNQQU5fS0lORCIsInRleHQiLCJzdWJzY3JpcHRpb24iLCJvYnNlcnZhYmxlIiwic3Vic2NyaWJlIiwibG9nIiwiZXZlbnQiLCJwYXlsb2FkIiwiY29uc29sZSIsImVycm9yIiwidW5zdWJzY3JpYmUiLCJmaW5pc2giLCJkb2NzIiwid2FpdEZvclRpbWVvdXQiLCJtb2R1bGVOYW1lIl0sIm1hcHBpbmdzIjoiOzs7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STs7c0JBQ0ZBLElBQUksQ0FBQ3pJLE1BQUwsR0FBYyxDOzs7OzttREFDUHlJLElBQUksQ0FBQyxDQUFELEM7OztzQkFFVG5FLDBCQUFlb0UsY0FBZixFOzs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUlkekksZ0JBQWdCLENBQUMwSSxVQUFqQixHQUE4QixrQkFBOUIiLCJzb3VyY2VzQ29udGVudCI6WyIvKlxuICogQ29weXJpZ2h0IDIwMTgtMjAyMCBUT04gREVWIFNPTFVUSU9OUyBMVEQuXG4gKlxuICogTGljZW5zZWQgdW5kZXIgdGhlIFNPRlRXQVJFIEVWQUxVQVRJT04gTGljZW5zZSAodGhlIFwiTGljZW5zZVwiKTsgeW91IG1heSBub3QgdXNlXG4gKiB0aGlzIGZpbGUgZXhjZXB0IGluIGNvbXBsaWFuY2Ugd2l0aCB0aGUgTGljZW5zZS4gIFlvdSBtYXkgb2J0YWluIGEgY29weSBvZiB0aGVcbiAqIExpY2Vuc2UgYXQ6XG4gKlxuICogaHR0cDovL3d3dy50b24uZGV2L2xpY2Vuc2VzXG4gKlxuICogVW5sZXNzIHJlcXVpcmVkIGJ5IGFwcGxpY2FibGUgbGF3IG9yIGFncmVlZCB0byBpbiB3cml0aW5nLCBzb2Z0d2FyZVxuICogZGlzdHJpYnV0ZWQgdW5kZXIgdGhlIExpY2Vuc2UgaXMgZGlzdHJpYnV0ZWQgb24gYW4gXCJBUyBJU1wiIEJBU0lTLFxuICogV0lUSE9VVCBXQVJSQU5USUVTIE9SIENPTkRJVElPTlMgT0YgQU5ZIEtJTkQsIGVpdGhlciBleHByZXNzIG9yIGltcGxpZWQuXG4gKiBTZWUgdGhlIExpY2Vuc2UgZm9yIHRoZSBzcGVjaWZpYyBUT04gREVWIHNvZnR3YXJlIGdvdmVybmluZyBwZXJtaXNzaW9ucyBhbmRcbiAqIGxpbWl0YXRpb25zIHVuZGVyIHRoZSBMaWNlbnNlLlxuICovXG5cbi8vIEBmbG93XG5cbmltcG9ydCB7IEluTWVtb3J5Q2FjaGUgfSBmcm9tICdhcG9sbG8tY2FjaGUtaW5tZW1vcnknO1xuaW1wb3J0IHsgQXBvbGxvQ2xpZW50IH0gZnJvbSAnYXBvbGxvLWNsaWVudCc7XG5pbXBvcnQgeyBzcGxpdCB9IGZyb20gXCJhcG9sbG8tbGlua1wiO1xuaW1wb3J0IHsgSHR0cExpbmsgfSBmcm9tICdhcG9sbG8tbGluay1odHRwJztcbmltcG9ydCB7IFdlYlNvY2tldExpbmsgfSBmcm9tICdhcG9sbG8tbGluay13cyc7XG5pbXBvcnQgeyBnZXRNYWluRGVmaW5pdGlvbiB9IGZyb20gJ2Fwb2xsby11dGlsaXRpZXMnO1xuaW1wb3J0IGdxbCBmcm9tICdncmFwaHFsLXRhZyc7XG5pbXBvcnQgeyBTdWJzY3JpcHRpb25DbGllbnQgfSBmcm9tIFwic3Vic2NyaXB0aW9ucy10cmFuc3BvcnQtd3NcIjtcbmltcG9ydCB0eXBlIHtcbiAgICBUT05RdWVyaWVzLFxuICAgIFRPTlFDb2xsZWN0aW9uLFxuICAgIFN1YnNjcmlwdGlvbixcbiAgICBUT05RdWVyeVBhcmFtcyxcbiAgICBUT05TdWJzY3JpYmVQYXJhbXMsXG4gICAgVE9OV2FpdEZvclBhcmFtc1xufSBmcm9tIFwiLi4vLi4vdHlwZXNcIjtcbmltcG9ydCB7IFRPTkNsaWVudCwgVE9OQ2xpZW50RXJyb3IgfSBmcm9tICcuLi9UT05DbGllbnQnO1xuaW1wb3J0IHR5cGUgeyBUT05Nb2R1bGVDb250ZXh0IH0gZnJvbSAnLi4vVE9OTW9kdWxlJztcbmltcG9ydCB7IFRPTk1vZHVsZSB9IGZyb20gJy4uL1RPTk1vZHVsZSc7XG5pbXBvcnQgVE9OQ29uZmlnTW9kdWxlLCB7IFVSTFBhcnRzIH0gZnJvbSAnLi9UT05Db25maWdNb2R1bGUnO1xuXG5pbXBvcnQgeyBzZXRDb250ZXh0IH0gZnJvbSAnYXBvbGxvLWxpbmstY29udGV4dCc7XG5pbXBvcnQgeyBGT1JNQVRfVEVYVF9NQVAsIFRhZ3MsIFNwYW4sIFNwYW5Db250ZXh0IH0gZnJvbSAnb3BlbnRyYWNpbmcnO1xuXG5leHBvcnQgdHlwZSBSZXF1ZXN0ID0ge1xuICAgIGlkOiBzdHJpbmcsXG4gICAgYm9keTogc3RyaW5nLFxufVxuXG5leHBvcnQgY29uc3QgTUFYX1RJTUVPVVQgPSAyMTQ3NDgzNjQ3O1xuZXhwb3J0IGNvbnN0IERFRkFVTFRfVElNRU9VVCA9IDQwXzAwMDtcbmZ1bmN0aW9uIGZpbmRQYXJhbXM8VD4oYXJnczogYW55W10sIHJlcXVpcmVkUGFyYW1OYW1lOiBzdHJpbmcpOiA/VCB7XG4gICAgcmV0dXJuIChhcmdzLmxlbmd0aCA9PT0gMSkgJiYgKHJlcXVpcmVkUGFyYW1OYW1lIGluIGFyZ3NbMF0pID8gYXJnc1swXSA6IG51bGw7XG59XG5cbmV4cG9ydCBkZWZhdWx0IGNsYXNzIFRPTlF1ZXJpZXNNb2R1bGUgZXh0ZW5kcyBUT05Nb2R1bGUgaW1wbGVtZW50cyBUT05RdWVyaWVzIHtcbiAgICBjb25maWc6IFRPTkNvbmZpZ01vZHVsZTtcbiAgICBvdmVycmlkZVdzVXJsOiA/c3RyaW5nO1xuXG4gICAgY29uc3RydWN0b3IoY29udGV4dDogVE9OTW9kdWxlQ29udGV4dCkge1xuICAgICAgICBzdXBlcihjb250ZXh0KTtcbiAgICAgICAgdGhpcy5fY2xpZW50ID0gbnVsbDtcbiAgICAgICAgdGhpcy5vdmVycmlkZVdzVXJsID0gbnVsbDtcbiAgICB9XG5cbiAgICBhc3luYyBzZXR1cCgpIHtcbiAgICAgICAgdGhpcy5jb25maWcgPSB0aGlzLmNvbnRleHQuZ2V0TW9kdWxlKFRPTkNvbmZpZ01vZHVsZSk7XG4gICAgICAgIHRoaXMudHJhbnNhY3Rpb25zID0gbmV3IFRPTlF1ZXJpZXNNb2R1bGVDb2xsZWN0aW9uKHRoaXMsICd0cmFuc2FjdGlvbnMnKTtcbiAgICAgICAgdGhpcy5tZXNzYWdlcyA9IG5ldyBUT05RdWVyaWVzTW9kdWxlQ29sbGVjdGlvbih0aGlzLCAnbWVzc2FnZXMnKTtcbiAgICAgICAgdGhpcy5ibG9ja3MgPSBuZXcgVE9OUXVlcmllc01vZHVsZUNvbGxlY3Rpb24odGhpcywgJ2Jsb2NrcycpO1xuICAgICAgICB0aGlzLmFjY291bnRzID0gbmV3IFRPTlF1ZXJpZXNNb2R1bGVDb2xsZWN0aW9uKHRoaXMsICdhY2NvdW50cycpO1xuICAgIH1cblxuICAgIGFzeW5jIGRldGVjdFJlZGlyZWN0KGZldGNoOiBhbnksIHNvdXJjZVVybDogc3RyaW5nKTogUHJvbWlzZTxzdHJpbmc+IHtcbiAgICAgICAgY29uc3QgcmVzcG9uc2UgPSBhd2FpdCBmZXRjaChzb3VyY2VVcmwpO1xuICAgICAgICBpZiAocmVzcG9uc2UucmVkaXJlY3RlZCA9PT0gdHJ1ZSkge1xuICAgICAgICAgICAgcmV0dXJuIHJlc3BvbnNlLnVybDtcbiAgICAgICAgfVxuICAgICAgICBpZiAocmVzcG9uc2UucmVkaXJlY3RlZCA9PT0gZmFsc2UpIHtcbiAgICAgICAgICAgIHJldHVybiAnJztcbiAgICAgICAgfVxuICAgICAgICBjb25zdCBzb3VyY2VMb2NhdGlvbiA9IFVSTFBhcnRzLmZpeChzb3VyY2VVcmwsIHBhcnRzID0+IHtcbiAgICAgICAgICAgIHBhcnRzLnF1ZXJ5ID0gJydcbiAgICAgICAgfSkudG9Mb3dlckNhc2UoKTtcbiAgICAgICAgY29uc3QgcmVzcG9uc2VMb2NhdGlvbiA9IFVSTFBhcnRzLmZpeChyZXNwb25zZS51cmwsIHBhcnRzID0+IHtcbiAgICAgICAgICAgIHBhcnRzLnF1ZXJ5ID0gJydcbiAgICAgICAgfSkudG9Mb3dlckNhc2UoKTtcbiAgICAgICAgcmV0dXJuIHJlc3BvbnNlTG9jYXRpb24gIT09IHNvdXJjZUxvY2F0aW9uID8gcmVzcG9uc2UudXJsIDogJyc7XG4gICAgfVxuXG4gICAgYXN5bmMgZ2V0Q2xpZW50Q29uZmlnKCkge1xuICAgICAgICBjb25zdCBjb25maWcgPSB0aGlzLmNvbmZpZztcbiAgICAgICAgY29uc3QgeyBjbGllbnRQbGF0Zm9ybSB9ID0gVE9OQ2xpZW50O1xuICAgICAgICBpZiAoIWNvbmZpZy5kYXRhIHx8ICFjbGllbnRQbGF0Zm9ybSkge1xuICAgICAgICAgICAgdGhyb3cgRXJyb3IoJ1RPTiBDbGllbnQgZG9lcyBub3QgY29uZmlndXJlZCcpO1xuICAgICAgICB9XG4gICAgICAgIGxldCBodHRwVXJsID0gY29uZmlnLnF1ZXJpZXNIdHRwVXJsKCk7XG4gICAgICAgIGxldCB3c1VybCA9IGNvbmZpZy5xdWVyaWVzV3NVcmwoKTtcbiAgICAgICAgY29uc3QgZmV0Y2ggPSBjbGllbnRQbGF0Zm9ybS5mZXRjaDtcbiAgICAgICAgY29uc3QgcmVkaXJlY3RlZCA9IGF3YWl0IHRoaXMuZGV0ZWN0UmVkaXJlY3QoZmV0Y2gsIGAke2h0dHBVcmx9P3F1ZXJ5PSU3QmluZm8lN0J2ZXJzaW9uJTdEJTdEYCk7XG4gICAgICAgIGlmIChyZWRpcmVjdGVkICE9PSAnJykge1xuICAgICAgICAgICAgY29uc3QgbG9jYXRpb24gPSBVUkxQYXJ0cy5maXgocmVkaXJlY3RlZCwgcGFydHMgPT4ge1xuICAgICAgICAgICAgICAgIHBhcnRzLnF1ZXJ5ID0gJydcbiAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgaWYgKCEhbG9jYXRpb24pIHtcbiAgICAgICAgICAgICAgICBodHRwVXJsID0gbG9jYXRpb247XG4gICAgICAgICAgICAgICAgd3NVcmwgPSBsb2NhdGlvblxuICAgICAgICAgICAgICAgICAgICAucmVwbGFjZSgvXmh0dHBzOlxcL1xcLy9naSwgJ3dzczovLycpXG4gICAgICAgICAgICAgICAgICAgIC5yZXBsYWNlKC9eaHR0cDpcXC9cXC8vZ2ksICd3czovLycpO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICAgIHJldHVybiB7XG4gICAgICAgICAgICBodHRwVXJsLFxuICAgICAgICAgICAgd3NVcmwsXG4gICAgICAgICAgICBmZXRjaCxcbiAgICAgICAgICAgIFdlYlNvY2tldDogY2xpZW50UGxhdGZvcm0uV2ViU29ja2V0LFxuICAgICAgICB9XG4gICAgfVxuXG4gICAgYXN5bmMgZ2V0QWNjb3VudHNDb3VudChwYXJlbnRTcGFuPzogKFNwYW4gfCBTcGFuQ29udGV4dCkpOiBQcm9taXNlPG51bWJlcj4ge1xuICAgICAgICBjb25zdCByZXN1bHQgPSBhd2FpdCB0aGlzLnF1ZXJ5KCdxdWVyeXtnZXRBY2NvdW50c0NvdW50fScsIHVuZGVmaW5lZCwgcGFyZW50U3Bhbik7XG4gICAgICAgIHJldHVybiByZXN1bHQuZGF0YS5nZXRBY2NvdW50c0NvdW50O1xuICAgIH1cblxuICAgIGFzeW5jIGdldFRyYW5zYWN0aW9uc0NvdW50KHBhcmVudFNwYW4/OiAoU3BhbiB8IFNwYW5Db250ZXh0KSk6IFByb21pc2U8bnVtYmVyPiB7XG4gICAgICAgIGNvbnN0IHJlc3VsdCA9IGF3YWl0IHRoaXMucXVlcnkoJ3F1ZXJ5e2dldFRyYW5zYWN0aW9uc0NvdW50fScsIHVuZGVmaW5lZCwgcGFyZW50U3Bhbik7XG4gICAgICAgIHJldHVybiByZXN1bHQuZGF0YS5nZXRUcmFuc2FjdGlvbnNDb3VudDtcbiAgICB9XG5cbiAgICBhc3luYyBnZXRBY2NvdW50c1RvdGFsQmFsYW5jZShwYXJlbnRTcGFuPzogKFNwYW4gfCBTcGFuQ29udGV4dCkpOiBQcm9taXNlPHN0cmluZz4ge1xuICAgICAgICBjb25zdCByZXN1bHQgPSBhd2FpdCB0aGlzLnF1ZXJ5KCdxdWVyeXtnZXRBY2NvdW50c1RvdGFsQmFsYW5jZX0nLCB1bmRlZmluZWQsIHBhcmVudFNwYW4pO1xuICAgICAgICByZXR1cm4gcmVzdWx0LmRhdGEuZ2V0QWNjb3VudHNUb3RhbEJhbGFuY2U7XG4gICAgfVxuXG4gICAgYXN5bmMgcG9zdFJlcXVlc3RzKHJlcXVlc3RzOiBSZXF1ZXN0W10sIHBhcmVudFNwYW4/OiAoU3BhbiB8IFNwYW5Db250ZXh0KSk6IFByb21pc2U8YW55PiB7XG4gICAgICAgIHJldHVybiB0aGlzLmNvbnRleHQudHJhY2UoJ3F1ZXJpZXMucG9zdFJlcXVlc3RzJywgYXN5bmMgKHNwYW4pID0+IHtcbiAgICAgICAgICAgIHJldHVybiB0aGlzLl9tdXRhdGlvbihgbXV0YXRpb24gcG9zdFJlcXVlc3RzKCRyZXF1ZXN0czogW1JlcXVlc3RdKSB7XG4gICAgICAgICAgICAgICAgcG9zdFJlcXVlc3RzKHJlcXVlc3RzOiAkcmVxdWVzdHMpXG4gICAgICAgICAgICB9YCwge1xuICAgICAgICAgICAgICAgIHJlcXVlc3RzLFxuICAgICAgICAgICAgfSwgc3Bhbik7XG4gICAgICAgIH0sIHBhcmVudFNwYW4pO1xuICAgIH1cblxuICAgIGFzeW5jIG11dGF0aW9uKHFsOiBzdHJpbmcsIHZhcmlhYmxlczogeyBbc3RyaW5nXTogYW55IH0gPSB7fSwgcGFyZW50U3Bhbj86IChTcGFuIHwgU3BhbkNvbnRleHQpKTogUHJvbWlzZTxhbnk+IHtcbiAgICAgICAgcmV0dXJuIHRoaXMuY29udGV4dC50cmFjZSgncXVlcmllcy5tdXRhdGlvbicsIGFzeW5jIChzcGFuOiBTcGFuKSA9PiB7XG4gICAgICAgICAgICBzcGFuLnNldFRhZygncGFyYW1zJywge1xuICAgICAgICAgICAgICAgIG11dGF0aW9uOiBxbCxcbiAgICAgICAgICAgICAgICB2YXJpYWJsZXMsXG4gICAgICAgICAgICB9KTtcbiAgICAgICAgICAgIHJldHVybiB0aGlzLl9tdXRhdGlvbihxbCwgdmFyaWFibGVzLCBzcGFuKTtcbiAgICAgICAgfSwgcGFyZW50U3Bhbik7XG4gICAgfVxuXG4gICAgYXN5bmMgcXVlcnkocWw6IHN0cmluZywgdmFyaWFibGVzOiB7IFtzdHJpbmddOiBhbnkgfSA9IHt9LCBwYXJlbnRTcGFuPzogKFNwYW4gfCBTcGFuQ29udGV4dCkpOiBQcm9taXNlPGFueT4ge1xuICAgICAgICByZXR1cm4gdGhpcy5jb250ZXh0LnRyYWNlKCdxdWVyaWVzLnF1ZXJ5JywgYXN5bmMgKHNwYW46IFNwYW4pID0+IHtcbiAgICAgICAgICAgIHNwYW4uc2V0VGFnKCdwYXJhbXMnLCB7XG4gICAgICAgICAgICAgICAgcXVlcnk6IHFsLFxuICAgICAgICAgICAgICAgIHZhcmlhYmxlcyxcbiAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgcmV0dXJuIHRoaXMuX3F1ZXJ5KHFsLCB2YXJpYWJsZXMsIHNwYW4pO1xuICAgICAgICB9LCBwYXJlbnRTcGFuKTtcbiAgICB9XG5cbiAgICBhc3luYyBfbXV0YXRpb24ocWw6IHN0cmluZywgdmFyaWFibGVzOiB7IFtzdHJpbmddOiBhbnkgfSA9IHt9LCBzcGFuOiBTcGFuKTogUHJvbWlzZTxhbnk+IHtcbiAgICAgICAgY29uc3QgbXV0YXRpb24gPSBncWwoW3FsXSk7XG4gICAgICAgIHJldHVybiB0aGlzLl9ncmFwaFFsKGNsaWVudCA9PiBjbGllbnQubXV0YXRlKHtcbiAgICAgICAgICAgIG11dGF0aW9uLFxuICAgICAgICAgICAgdmFyaWFibGVzLFxuICAgICAgICAgICAgY29udGV4dDoge1xuICAgICAgICAgICAgICAgIHRyYWNlU3Bhbjogc3BhbixcbiAgICAgICAgICAgIH1cbiAgICAgICAgfSkpO1xuICAgIH1cblxuICAgIGFzeW5jIF9xdWVyeShxbDogc3RyaW5nLCB2YXJpYWJsZXM6IHsgW3N0cmluZ106IGFueSB9ID0ge30sIHNwYW46IFNwYW4pOiBQcm9taXNlPGFueT4ge1xuICAgICAgICBjb25zdCBxdWVyeSA9IGdxbChbcWxdKTtcbiAgICAgICAgcmV0dXJuIHRoaXMuX2dyYXBoUWwoY2xpZW50ID0+IGNsaWVudC5xdWVyeSh7XG4gICAgICAgICAgICBxdWVyeSxcbiAgICAgICAgICAgIHZhcmlhYmxlcyxcbiAgICAgICAgICAgIGNvbnRleHQ6IHtcbiAgICAgICAgICAgICAgICB0cmFjZVNwYW46IHNwYW4sXG4gICAgICAgICAgICB9XG4gICAgICAgIH0pLCBzcGFuKTtcbiAgICB9XG5cbiAgICBhc3luYyBfZ3JhcGhRbChyZXF1ZXN0OiAoY2xpZW50OiBBcG9sbG9DbGllbnQpID0+IFByb21pc2U8YW55Piwgc3BhbjogU3Bhbik6IFByb21pc2U8YW55PiB7XG4gICAgICAgIGNvbnN0IGNsaWVudCA9IGF3YWl0IHRoaXMuZW5zdXJlQ2xpZW50KHNwYW4pO1xuICAgICAgICB0cnkge1xuICAgICAgICAgICAgcmV0dXJuIGF3YWl0IHJlcXVlc3QoY2xpZW50KTtcbiAgICAgICAgfSBjYXRjaCAoZXJyb3IpIHtcbiAgICAgICAgICAgIGNvbnN0IGdxbEVyciA9IGVycm9yLmdyYXBoUUxFcnJvcnMgJiYgZXJyb3IuZ3JhcGhRTEVycm9yc1swXTtcbiAgICAgICAgICAgIGlmIChncWxFcnIpIHtcbiAgICAgICAgICAgICAgICBjb25zdCBjbGllbnRFcnIgPSBuZXcgRXJyb3IoZ3FsRXJyLm1lc3NhZ2UpO1xuICAgICAgICAgICAgICAgIGNvbnN0IGdxbEV4YyA9IGdxbEVyci5leHRlbnNpb25zICYmIGdxbEVyci5leHRlbnNpb25zLmV4Y2VwdGlvbiB8fCB7fTtcbiAgICAgICAgICAgICAgICAoY2xpZW50RXJyOiBhbnkpLm51bWJlciA9IGdxbEV4Yy5jb2RlIHx8IDA7XG4gICAgICAgICAgICAgICAgKGNsaWVudEVycjogYW55KS5jb2RlID0gZ3FsRXhjLmNvZGUgfHwgMDtcbiAgICAgICAgICAgICAgICAoY2xpZW50RXJyOiBhbnkpLnNvdXJjZSA9IGdxbEV4Yy5zb3VyY2UgfHwgJ2NsaWVudCc7XG4gICAgICAgICAgICAgICAgdGhyb3cgY2xpZW50RXJyO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgY29uc3QgZXJyb3JzID0gZXJyb3IgJiYgZXJyb3IubmV0d29ya0Vycm9yICYmIGVycm9yLm5ldHdvcmtFcnJvci5yZXN1bHQgJiYgZXJyb3IubmV0d29ya0Vycm9yLnJlc3VsdC5lcnJvcnM7XG4gICAgICAgICAgICBpZiAoZXJyb3JzKSB7XG4gICAgICAgICAgICAgICAgdGhyb3cgVE9OQ2xpZW50RXJyb3IucXVlcnlGYWlsZWQoZXJyb3JzKTtcbiAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgICAgdGhyb3cgZXJyb3I7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICBhc3luYyBlbnN1cmVDbGllbnQoc3BhbjogU3Bhbik6IFByb21pc2U8QXBvbGxvQ2xpZW50PiB7XG4gICAgICAgIGlmICh0aGlzLl9jbGllbnQpIHtcbiAgICAgICAgICAgIHJldHVybiB0aGlzLl9jbGllbnQ7XG4gICAgICAgIH1cbiAgICAgICAgYXdhaXQgdGhpcy5jb250ZXh0LnRyYWNlKCdzZXR1cCBjbGllbnQnLCBhc3luYyAoc3BhbikgPT4ge1xuICAgICAgICAgICAgY29uc3QgeyBodHRwVXJsLCB3c1VybCwgZmV0Y2gsIFdlYlNvY2tldCB9ID0gYXdhaXQgdGhpcy5nZXRDbGllbnRDb25maWcoKTtcbiAgICAgICAgICAgIGxldCBzdWJzT3B0aW9ucyA9IHRoaXMuY29uZmlnLnRyYWNlci5pbmplY3Qoc3BhbiwgRk9STUFUX1RFWFRfTUFQLCB7fSk7XG4gICAgICAgICAgICBjb25zdCBzdWJzY3JpcHRpb25DbGllbnQgPSBuZXcgU3Vic2NyaXB0aW9uQ2xpZW50KFxuICAgICAgICAgICAgICAgIHdzVXJsLFxuICAgICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICAgICAgcmVjb25uZWN0OiB0cnVlLFxuICAgICAgICAgICAgICAgICAgICBjb25uZWN0aW9uUGFyYW1zOiAoKSA9PiAoe1xuICAgICAgICAgICAgICAgICAgICAgICAgYWNjZXNzS2V5OiB0aGlzLmNvbmZpZy5kYXRhICYmIHRoaXMuY29uZmlnLmRhdGEuYWNjZXNzS2V5LFxuICAgICAgICAgICAgICAgICAgICAgICAgaGVhZGVyczogc3Vic09wdGlvbnMsXG4gICAgICAgICAgICAgICAgICAgIH0pLFxuICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgV2ViU29ja2V0XG4gICAgICAgICAgICApO1xuICAgICAgICAgICAgc3Vic2NyaXB0aW9uQ2xpZW50Lm1heENvbm5lY3RUaW1lR2VuZXJhdG9yLmR1cmF0aW9uID0gKCkgPT4gc3Vic2NyaXB0aW9uQ2xpZW50Lm1heENvbm5lY3RUaW1lR2VuZXJhdG9yLm1heDtcbiAgICAgICAgICAgIGNvbnN0IHRyYWNlckxpbmsgPSBhd2FpdCBzZXRDb250ZXh0KChfLCByZXEpID0+IHtcbiAgICAgICAgICAgICAgICBjb25zdCByZXNvbHZlZFNwYW4gPSAocmVxICYmIHJlcS50cmFjZVNwYW4pIHx8IHNwYW47XG4gICAgICAgICAgICAgICAgcmVxLmhlYWRlcnMgPSB7fTtcbiAgICAgICAgICAgICAgICB0aGlzLmNvbmZpZy50cmFjZXIuaW5qZWN0KHJlc29sdmVkU3BhbiwgRk9STUFUX1RFWFRfTUFQLCByZXEuaGVhZGVycyk7XG4gICAgICAgICAgICAgICAgY29uc3QgYWNjZXNzS2V5ID0gdGhpcy5jb25maWcuZGF0YSAmJiB0aGlzLmNvbmZpZy5kYXRhLmFjY2Vzc0tleTtcbiAgICAgICAgICAgICAgICBpZiAoYWNjZXNzS2V5KSB7XG4gICAgICAgICAgICAgICAgICAgIHJlcS5oZWFkZXJzLmFjY2Vzc0tleSA9IGFjY2Vzc0tleTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgcmV0dXJuIHtcbiAgICAgICAgICAgICAgICAgICAgaGVhZGVyczogcmVxLmhlYWRlcnMsXG4gICAgICAgICAgICAgICAgfTtcbiAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgdGhpcy5fY2xpZW50ID0gbmV3IEFwb2xsb0NsaWVudCh7XG4gICAgICAgICAgICAgICAgY2FjaGU6IG5ldyBJbk1lbW9yeUNhY2hlKHt9KSxcbiAgICAgICAgICAgICAgICBsaW5rOiBzcGxpdChcbiAgICAgICAgICAgICAgICAgICAgKHsgcXVlcnkgfSkgPT4ge1xuICAgICAgICAgICAgICAgICAgICAgICAgY29uc3QgZGVmaW5pdGlvbiA9IGdldE1haW5EZWZpbml0aW9uKHF1ZXJ5KTtcbiAgICAgICAgICAgICAgICAgICAgICAgIHJldHVybiAoXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgZGVmaW5pdGlvbi5raW5kID09PSAnT3BlcmF0aW9uRGVmaW5pdGlvbidcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAmJiBkZWZpbml0aW9uLm9wZXJhdGlvbiA9PT0gJ3N1YnNjcmlwdGlvbidcbiAgICAgICAgICAgICAgICAgICAgICAgICk7XG4gICAgICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgICAgIHRyYWNlckxpbmsuY29uY2F0KG5ldyBXZWJTb2NrZXRMaW5rKHN1YnNjcmlwdGlvbkNsaWVudCkpLFxuICAgICAgICAgICAgICAgICAgICB0cmFjZXJMaW5rLmNvbmNhdChuZXcgSHR0cExpbmsoe1xuICAgICAgICAgICAgICAgICAgICAgICAgdXJpOiBodHRwVXJsLFxuICAgICAgICAgICAgICAgICAgICAgICAgZmV0Y2gsXG4gICAgICAgICAgICAgICAgICAgIH0pKSxcbiAgICAgICAgICAgICAgICApLFxuICAgICAgICAgICAgICAgIGRlZmF1bHRPcHRpb25zOiB7XG4gICAgICAgICAgICAgICAgICAgIHdhdGNoUXVlcnk6IHtcbiAgICAgICAgICAgICAgICAgICAgICAgIGZldGNoUG9saWN5OiAnbm8tY2FjaGUnLFxuICAgICAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgICAgICBxdWVyeToge1xuICAgICAgICAgICAgICAgICAgICAgICAgZmV0Y2hQb2xpY3k6ICduby1jYWNoZScsXG4gICAgICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfSk7XG4gICAgICAgIH0sIHNwYW4pO1xuICAgICAgICByZXR1cm4gdGhpcy5fY2xpZW50O1xuICAgIH1cblxuICAgIGFzeW5jIGNsb3NlKCkge1xuICAgICAgICBpZiAodGhpcy5fY2xpZW50KSB7XG4gICAgICAgICAgICBjb25zdCBjbGllbnQgPSB0aGlzLl9jbGllbnQ7XG4gICAgICAgICAgICB0aGlzLl9jbGllbnQgPSBudWxsO1xuICAgICAgICAgICAgY2xpZW50LnN0b3AoKTtcbiAgICAgICAgICAgIGF3YWl0IGNsaWVudC5jbGVhclN0b3JlKCk7XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICB0cmFuc2FjdGlvbnM6IFRPTlFDb2xsZWN0aW9uO1xuXG4gICAgbWVzc2FnZXM6IFRPTlFDb2xsZWN0aW9uO1xuXG4gICAgYmxvY2tzOiBUT05RQ29sbGVjdGlvbjtcblxuICAgIGFjY291bnRzOiBUT05RQ29sbGVjdGlvbjtcblxuICAgIF9jbGllbnQ6IEFwb2xsb0NsaWVudDtcbn1cblxuXG5jbGFzcyBUT05RdWVyaWVzTW9kdWxlQ29sbGVjdGlvbiBpbXBsZW1lbnRzIFRPTlFDb2xsZWN0aW9uIHtcbiAgICBtb2R1bGU6IFRPTlF1ZXJpZXNNb2R1bGU7XG5cbiAgICBjb2xsZWN0aW9uTmFtZTogc3RyaW5nO1xuICAgIHR5cGVOYW1lOiBzdHJpbmc7XG5cbiAgICBjb25zdHJ1Y3Rvcihtb2R1bGU6IFRPTlF1ZXJpZXNNb2R1bGUsIGNvbGxlY3Rpb25OYW1lOiBzdHJpbmcpIHtcbiAgICAgICAgdGhpcy5tb2R1bGUgPSBtb2R1bGU7XG4gICAgICAgIHRoaXMuY29sbGVjdGlvbk5hbWUgPSBjb2xsZWN0aW9uTmFtZTtcbiAgICAgICAgdGhpcy50eXBlTmFtZSA9IGNvbGxlY3Rpb25OYW1lLnN1YnN0cigwLCAxKS50b1VwcGVyQ2FzZSgpICtcbiAgICAgICAgICAgIGNvbGxlY3Rpb25OYW1lLnN1YnN0cigxLCBjb2xsZWN0aW9uTmFtZS5sZW5ndGggLSAyKTtcbiAgICB9XG5cbiAgICBhc3luYyBxdWVyeShcbiAgICAgICAgLi4uYXJnc1xuICAgICAgICAvKlxuICAgICAgICAgICAgZmlsdGVyT3JQYXJhbXM6IGFueSB8IFRPTlF1ZXJ5UGFyYW1zLFxuICAgICAgICAgICAgcmVzdWx0OiBzdHJpbmcsXG4gICAgICAgICAgICBvcmRlckJ5PzogT3JkZXJCeVtdLFxuICAgICAgICAgICAgbGltaXQ/OiBudW1iZXIsXG4gICAgICAgICAgICB0aW1lb3V0PzogbnVtYmVyLFxuICAgICAgICAgICAgcGFyZW50U3Bhbj86IChTcGFuIHwgU3BhbkNvbnRleHQpXG4gICAgICAgICAqL1xuICAgICk6IFByb21pc2U8YW55PiB7XG4gICAgICAgIGNvbnN0IHBhcmFtcyA9IGZpbmRQYXJhbXM8VE9OUXVlcnlQYXJhbXM+KGFyZ3MsICdmaWx0ZXInKTtcbiAgICAgICAgY29uc3QgZmlsdGVyID0gcGFyYW1zID8gcGFyYW1zLmZpbHRlciA6IGFyZ3NbMF07XG4gICAgICAgIGNvbnN0IHJlc3VsdDogc3RyaW5nID0gcGFyYW1zID8gcGFyYW1zLnJlc3VsdCA6IChhcmdzWzFdOiBhbnkpO1xuICAgICAgICBjb25zdCBvcmRlckJ5ID0gcGFyYW1zID8gcGFyYW1zLm9yZGVyQnkgOiBhcmdzWzJdO1xuICAgICAgICBjb25zdCBsaW1pdCA9IHBhcmFtcyA/IHBhcmFtcy5saW1pdCA6IGFyZ3NbM107XG4gICAgICAgIGNvbnN0IHRpbWVvdXQgPSBwYXJhbXMgPyBwYXJhbXMudGltZW91dCA6IChhcmdzWzRdOiBhbnkpO1xuICAgICAgICBjb25zdCBwYXJlbnRTcGFuID0gcGFyYW1zID8gcGFyYW1zLnBhcmVudFNwYW4gOiBhcmdzWzVdO1xuICAgICAgICByZXR1cm4gdGhpcy5tb2R1bGUuY29udGV4dC50cmFjZShgJHt0aGlzLmNvbGxlY3Rpb25OYW1lfS5xdWVyeWAsIGFzeW5jIChzcGFuKSA9PiB7XG4gICAgICAgICAgICBzcGFuLnNldFRhZygncGFyYW1zJywge1xuICAgICAgICAgICAgICAgIGZpbHRlciwgcmVzdWx0LCBvcmRlckJ5LCBsaW1pdCwgdGltZW91dFxuICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICBjb25zdCBjID0gdGhpcy5jb2xsZWN0aW9uTmFtZTtcbiAgICAgICAgICAgIGNvbnN0IHQgPSB0aGlzLnR5cGVOYW1lO1xuICAgICAgICAgICAgY29uc3QgcWwgPSBgcXVlcnkgJHtjfSgkZmlsdGVyOiAke3R9RmlsdGVyLCAkb3JkZXJCeTogW1F1ZXJ5T3JkZXJCeV0sICRsaW1pdDogSW50LCAkdGltZW91dDogRmxvYXQpIHtcbiAgICAgICAgICAgICAgICAke2N9KGZpbHRlcjogJGZpbHRlciwgb3JkZXJCeTogJG9yZGVyQnksIGxpbWl0OiAkbGltaXQsIHRpbWVvdXQ6ICR0aW1lb3V0KSB7ICR7cmVzdWx0fSB9XG4gICAgICAgICAgICB9YDtcbiAgICAgICAgICAgIGNvbnN0IHZhcmlhYmxlczogeyBbc3RyaW5nXTogYW55IH0gPSB7XG4gICAgICAgICAgICAgICAgZmlsdGVyLFxuICAgICAgICAgICAgICAgIG9yZGVyQnksXG4gICAgICAgICAgICAgICAgbGltaXQsXG4gICAgICAgICAgICB9O1xuICAgICAgICAgICAgaWYgKHRpbWVvdXQpIHtcbiAgICAgICAgICAgICAgICB2YXJpYWJsZXMudGltZW91dCA9IE1hdGgubWluKE1BWF9USU1FT1VULCB0aW1lb3V0KTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIHJldHVybiAoYXdhaXQgdGhpcy5tb2R1bGUuX3F1ZXJ5KHFsLCB2YXJpYWJsZXMsIHNwYW4pKS5kYXRhW2NdO1xuICAgICAgICB9LCBwYXJlbnRTcGFuKTtcbiAgICB9XG5cbiAgICBzdWJzY3JpYmUoXG4gICAgICAgIC4uLmFyZ3NcbiAgICAgICAgLypcbiAgICAgICAgZmlsdGVyT3JQYXJhbXM6IGFueSB8IFRPTlN1YnNjcmliZVBhcmFtcyxcbiAgICAgICAgcmVzdWx0Pzogc3RyaW5nLFxuICAgICAgICBvbkRvY0V2ZW50PzogRG9jRXZlbnQsXG4gICAgICAgIG9uRXJyb3I/OiAoZXJyOiBFcnJvcikgPT4gdm9pZFxuICAgICAgICAgKi9cbiAgICApOiBTdWJzY3JpcHRpb24ge1xuICAgICAgICBjb25zdCBwYXJhbXMgPSBmaW5kUGFyYW1zPFRPTlN1YnNjcmliZVBhcmFtcz4oYXJncywgJ2ZpbHRlcicpO1xuICAgICAgICBjb25zdCBmaWx0ZXIgPSBwYXJhbXMgPyBwYXJhbXMuZmlsdGVyIDogYXJnc1swXTtcbiAgICAgICAgY29uc3QgcmVzdWx0OiBzdHJpbmcgPSBwYXJhbXMgPyBwYXJhbXMucmVzdWx0IDogKGFyZ3NbMV06IGFueSk7XG4gICAgICAgIGNvbnN0IG9uRG9jRXZlbnQgPSBwYXJhbXMgPyBwYXJhbXMub25Eb2NFdmVudCA6IChhcmdzWzJdOiBhbnkpO1xuICAgICAgICBjb25zdCBvbkVycm9yID0gcGFyYW1zID8gcGFyYW1zLm9uRXJyb3IgOiAoYXJnc1szXTogYW55KTtcbiAgICAgICAgY29uc3Qgc3BhbiA9IHRoaXMubW9kdWxlLmNvbmZpZy50cmFjZXIuc3RhcnRTcGFuKCdUT05RdWVyaWVzTW9kdWxlLmpzOnN1YnNjcmliZSAnKTtcbiAgICAgICAgc3Bhbi5zZXRUYWcoVGFncy5TUEFOX0tJTkQsICdjbGllbnQnKTtcbiAgICAgICAgY29uc3QgdGV4dCA9IGBzdWJzY3JpcHRpb24gJHt0aGlzLmNvbGxlY3Rpb25OYW1lfSgkZmlsdGVyOiAke3RoaXMudHlwZU5hbWV9RmlsdGVyKSB7XG4gICAgICAgIFx0JHt0aGlzLmNvbGxlY3Rpb25OYW1lfShmaWx0ZXI6ICRmaWx0ZXIpIHsgJHtyZXN1bHR9IH1cbiAgICAgICAgfWA7XG4gICAgICAgIGNvbnN0IHF1ZXJ5ID0gZ3FsKFt0ZXh0XSk7XG4gICAgICAgIGxldCBzdWJzY3JpcHRpb24gPSBudWxsO1xuICAgICAgICAoYXN5bmMgKCkgPT4ge1xuICAgICAgICAgICAgdHJ5IHtcbiAgICAgICAgICAgICAgICBjb25zdCBjbGllbnQgPSBhd2FpdCB0aGlzLm1vZHVsZS5lbnN1cmVDbGllbnQoc3Bhbik7XG4gICAgICAgICAgICAgICAgY29uc3Qgb2JzZXJ2YWJsZSA9IGNsaWVudC5zdWJzY3JpYmUoe1xuICAgICAgICAgICAgICAgICAgICBxdWVyeSxcbiAgICAgICAgICAgICAgICAgICAgdmFyaWFibGVzOiB7XG4gICAgICAgICAgICAgICAgICAgICAgICBmaWx0ZXIsXG4gICAgICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICAgICAgc3Vic2NyaXB0aW9uID0gb2JzZXJ2YWJsZS5zdWJzY3JpYmUoKG1lc3NhZ2UpID0+IHtcbiAgICAgICAgICAgICAgICAgICAgb25Eb2NFdmVudCgnaW5zZXJ0L3VwZGF0ZScsIG1lc3NhZ2UuZGF0YVt0aGlzLmNvbGxlY3Rpb25OYW1lXSk7XG4gICAgICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICB9IGNhdGNoIChlcnJvcikge1xuICAgICAgICAgICAgICAgIHNwYW4ubG9nKHsgZXZlbnQ6ICdmYWlsZWQnLCBwYXlsb2FkOiBlcnJvciB9KTtcbiAgICAgICAgICAgICAgICBpZiAob25FcnJvcikge1xuICAgICAgICAgICAgICAgICAgICBvbkVycm9yKGVycm9yKTtcbiAgICAgICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAgICAgICBjb25zb2xlLmVycm9yKCdUT04gQ2xpZW50IHN1YnNjcmlwdGlvbiBlcnJvcicsIGVycm9yKTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG4gICAgICAgIH0pKCk7XG4gICAgICAgIHJldHVybiB7XG4gICAgICAgICAgICB1bnN1YnNjcmliZTogKCkgPT4ge1xuICAgICAgICAgICAgICAgIGlmIChzdWJzY3JpcHRpb24pIHtcbiAgICAgICAgICAgICAgICAgICAgc3Vic2NyaXB0aW9uLnVuc3Vic2NyaWJlKCk7XG4gICAgICAgICAgICAgICAgICAgIHNwYW4uZmluaXNoKCk7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfSxcbiAgICAgICAgfTtcbiAgICB9XG5cbiAgICBhc3luYyB3YWl0Rm9yKFxuICAgICAgICAuLi5hcmdzXG4gICAgICAgIC8qXG4gICAgICAgIGZpbHRlck9yUGFyYW1zOiBhbnkgfCBUT05XYWl0Rm9yUGFyYW1zLFxuICAgICAgICByZXN1bHQ6IHN0cmluZyxcbiAgICAgICAgdGltZW91dD86IG51bWJlcixcbiAgICAgICAgcGFyZW50U3Bhbj86IChTcGFuIHwgU3BhbkNvbnRleHQpXG4gICAgICAgICAqL1xuICAgICk6IFByb21pc2U8YW55PiB7XG4gICAgICAgIGNvbnN0IHBhcmFtcyA9IGZpbmRQYXJhbXM8VE9OV2FpdEZvclBhcmFtcz4oYXJncywgJ2ZpbHRlcicpO1xuICAgICAgICBjb25zdCBmaWx0ZXIgPSBwYXJhbXMgPyBwYXJhbXMuZmlsdGVyIDogYXJnc1swXTtcbiAgICAgICAgY29uc3QgcmVzdWx0OiBzdHJpbmcgPSBwYXJhbXMgPyBwYXJhbXMucmVzdWx0IDogKGFyZ3NbMV06IGFueSk7XG4gICAgICAgIGNvbnN0IHRpbWVvdXQgPSAocGFyYW1zID8gcGFyYW1zLnRpbWVvdXQgOiBhcmdzWzJdKSB8fCBERUZBVUxUX1RJTUVPVVQ7XG4gICAgICAgIGNvbnN0IHBhcmVudFNwYW4gPSBwYXJhbXMgPyBwYXJhbXMucGFyZW50U3BhbiA6IGFyZ3NbM107XG4gICAgICAgIGNvbnN0IGRvY3MgPSBhd2FpdCB0aGlzLnF1ZXJ5KHsgZmlsdGVyLCByZXN1bHQsIHRpbWVvdXQsIHBhcmVudFNwYW4gfSk7XG4gICAgICAgIGlmIChkb2NzLmxlbmd0aCA+IDApIHtcbiAgICAgICAgICAgIHJldHVybiBkb2NzWzBdO1xuICAgICAgICB9XG4gICAgICAgIHRocm93IFRPTkNsaWVudEVycm9yLndhaXRGb3JUaW1lb3V0KCk7XG4gICAgfVxufVxuXG5UT05RdWVyaWVzTW9kdWxlLm1vZHVsZU5hbWUgPSAnVE9OUXVlcmllc01vZHVsZSc7XG4iXX0=