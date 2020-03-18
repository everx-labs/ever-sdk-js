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
                _context3.prev = 7;
                _context3.next = 10;
                return this.detectRedirect(fetch, "".concat(httpUrl, "?query=%7Binfo%7Bversion%7D%7D"));

              case 10:
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

                _context3.next = 17;
                break;

              case 14:
                _context3.prev = 14;
                _context3.t0 = _context3["catch"](7);
                console.error('[getClientConfig] failed', _context3.t0);

              case 17:
                return _context3.abrupt("return", {
                  httpUrl: httpUrl,
                  wsUrl: wsUrl,
                  fetch: fetch,
                  WebSocket: clientPlatform.WebSocket
                });

              case 18:
              case "end":
                return _context3.stop();
            }
          }
        }, _callee3, this, [[7, 14]]);
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
      _regenerator["default"].mark(function _callee17(parentSpan) {
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
                function () {
                  var _ref4 = (0, _asyncToGenerator2["default"])(
                  /*#__PURE__*/
                  _regenerator["default"].mark(function _callee16(span) {
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
      var _createGraphqlClient = (0, _asyncToGenerator2["default"])(
      /*#__PURE__*/
      _regenerator["default"].mark(function _callee19(span) {
        var _this6 = this;

        var useHttp, clientConfig, wsLink, httpLink, subsOptions, subscriptionClient, detectingRedirection, tracerLink, wrapLink, isSubscription, link;
        return _regenerator["default"].wrap(function _callee19$(_context19) {
          while (1) {
            switch (_context19.prev = _context19.next) {
              case 0:
                useHttp = true;
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
                  console.error('>>>', 'WebSocket Reconnected');
                });
                detectingRedirection = false;
                subscriptionClient.onError(function () {
                  console.error('[onError]', 'WebSocket Failed');

                  if (detectingRedirection) {
                    return;
                  }

                  (0, _asyncToGenerator2["default"])(
                  /*#__PURE__*/
                  _regenerator["default"].mark(function _callee18() {
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
                              console.error('[onError]', 'Client config changed');
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
                            console.error('[onError] Detect redirection failed', _context18.t0);

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
      var _close = (0, _asyncToGenerator2["default"])(
      /*#__PURE__*/
      _regenerator["default"].mark(function _callee20() {
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
    this.typeName = "".concat(collectionName[0].toUpperCase()).concat(collectionName.slice(1, -1));
  }

  (0, _createClass2["default"])(TONQueriesModuleCollection, [{
    key: "query",
    value: function () {
      var _query2 = (0, _asyncToGenerator2["default"])(
      /*#__PURE__*/
      _regenerator["default"].mark(function _callee22() {
        var _this7 = this;

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
            _args22 = arguments;

        return _regenerator["default"].wrap(function _callee22$(_context22) {
          while (1) {
            switch (_context22.prev = _context22.next) {
              case 0:
                for (_len = _args22.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
                  args[_key] = _args22[_key];
                }

                params = findParams(args, 'filter');
                filter = params ? params.filter : args[0];
                result = params ? params.result : args[1];
                orderBy = params ? params.orderBy : args[2];
                limit = params ? params.limit : args[3];
                timeout = params ? params.timeout : args[4];
                parentSpan = params ? params.parentSpan : args[5];
                return _context22.abrupt("return", this.module.context.trace("".concat(this.collectionName, ".query"),
                /*#__PURE__*/
                function () {
                  var _ref7 = (0, _asyncToGenerator2["default"])(
                  /*#__PURE__*/
                  _regenerator["default"].mark(function _callee21(span) {
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

              case 9:
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
      _regenerator["default"].mark(function _callee23() {
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
                  console.error('TON Client subscription error', _context23.t0);
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
      var _waitFor = (0, _asyncToGenerator2["default"])(
      /*#__PURE__*/
      _regenerator["default"].mark(function _callee24() {
        var _len3,
            args,
            _key3,
            params,
            filter,
            result,
            timeout,
            parentSpan,
            docs,
            _args24 = arguments;

        return _regenerator["default"].wrap(function _callee24$(_context24) {
          while (1) {
            switch (_context24.prev = _context24.next) {
              case 0:
                for (_len3 = _args24.length, args = new Array(_len3), _key3 = 0; _key3 < _len3; _key3++) {
                  args[_key3] = _args24[_key3];
                }

                params = findParams(args, 'filter');
                filter = params ? params.filter : args[0];
                result = params ? params.result : args[1];
                timeout = (params ? params.timeout : args[2]) || DEFAULT_TIMEOUT;
                parentSpan = params ? params.parentSpan : args[3];
                _context24.next = 8;
                return this.query({
                  filter: filter,
                  result: result,
                  timeout: timeout,
                  parentSpan: parentSpan
                });

              case 8:
                docs = _context24.sent;

                if (!(docs.length > 0)) {
                  _context24.next = 11;
                  break;
                }

                return _context24.abrupt("return", docs[0]);

              case 11:
                throw _TONClient.TONClientError.waitForTimeout();

              case 12:
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy9tb2R1bGVzL1RPTlF1ZXJpZXNNb2R1bGUuanMiXSwibmFtZXMiOlsiTUFYX1RJTUVPVVQiLCJERUZBVUxUX1RJTUVPVVQiLCJmaW5kUGFyYW1zIiwiYXJncyIsInJlcXVpcmVkUGFyYW1OYW1lIiwibGVuZ3RoIiwiVE9OUXVlcmllc01vZHVsZSIsImNvbnRleHQiLCJncmFwaHFsQ2xpZW50Iiwib3ZlcnJpZGVXc1VybCIsImNvbmZpZyIsImdldE1vZHVsZSIsIlRPTkNvbmZpZ01vZHVsZSIsInRyYW5zYWN0aW9ucyIsIlRPTlF1ZXJpZXNNb2R1bGVDb2xsZWN0aW9uIiwibWVzc2FnZXMiLCJibG9ja3MiLCJhY2NvdW50cyIsImZldGNoIiwic291cmNlVXJsIiwicmVzcG9uc2UiLCJyZWRpcmVjdGVkIiwidXJsIiwic291cmNlTG9jYXRpb24iLCJVUkxQYXJ0cyIsImZpeCIsInBhcnRzIiwicXVlcnkiLCJ0b0xvd2VyQ2FzZSIsInJlc3BvbnNlTG9jYXRpb24iLCJjbGllbnRQbGF0Zm9ybSIsIlRPTkNsaWVudCIsImRhdGEiLCJFcnJvciIsImh0dHBVcmwiLCJxdWVyaWVzSHR0cFVybCIsIndzVXJsIiwicXVlcmllc1dzVXJsIiwiZGV0ZWN0UmVkaXJlY3QiLCJsb2NhdGlvbiIsInJlcGxhY2UiLCJjb25zb2xlIiwiZXJyb3IiLCJXZWJTb2NrZXQiLCJwYXJlbnRTcGFuIiwidW5kZWZpbmVkIiwicmVzdWx0IiwiZ2V0QWNjb3VudHNDb3VudCIsImdldFRyYW5zYWN0aW9uc0NvdW50IiwiZ2V0QWNjb3VudHNUb3RhbEJhbGFuY2UiLCJyZXF1ZXN0cyIsInRyYWNlIiwic3BhbiIsImdyYXBocWxNdXRhdGlvbiIsInFsIiwidmFyaWFibGVzIiwic2V0VGFnIiwibXV0YXRpb24iLCJncmFwaHFsUXVlcnkiLCJncmFwaFFsIiwiY2xpZW50IiwibXV0YXRlIiwidHJhY2VTcGFuIiwicmVxdWVzdCIsImdyYXBocWxDbGllbnRSZXF1aXJlZCIsImdxbEVyciIsImdyYXBoUUxFcnJvcnMiLCJjbGllbnRFcnIiLCJtZXNzYWdlIiwiZ3FsRXhjIiwiZXh0ZW5zaW9ucyIsImV4Y2VwdGlvbiIsIm51bWJlciIsImNvZGUiLCJzb3VyY2UiLCJlcnJvcnMiLCJuZXR3b3JrRXJyb3IiLCJUT05DbGllbnRFcnJvciIsInF1ZXJ5RmFpbGVkIiwiY3JlYXRlR3JhcGhxbENsaWVudCIsInVzZUh0dHAiLCJnZXRDbGllbnRDb25maWciLCJjbGllbnRDb25maWciLCJ3c0xpbmsiLCJodHRwTGluayIsInN1YnNPcHRpb25zIiwidHJhY2VyIiwiaW5qZWN0IiwiRk9STUFUX1RFWFRfTUFQIiwic3Vic2NyaXB0aW9uQ2xpZW50IiwiU3Vic2NyaXB0aW9uQ2xpZW50IiwicmVjb25uZWN0IiwiY29ubmVjdGlvblBhcmFtcyIsImFjY2Vzc0tleSIsImhlYWRlcnMiLCJvblJlY29ubmVjdGVkIiwiZGV0ZWN0aW5nUmVkaXJlY3Rpb24iLCJvbkVycm9yIiwibmV3Q29uZmlnIiwiY29uZmlnSXNDaGFuZ2VkIiwidXJpIiwibWF4Q29ubmVjdFRpbWVHZW5lcmF0b3IiLCJkdXJhdGlvbiIsIm1heCIsIl8iLCJyZXEiLCJyZXNvbHZlZFNwYW4iLCJ0cmFjZXJMaW5rIiwid3JhcExpbmsiLCJsaW5rIiwiY29uY2F0IiwiaXNTdWJzY3JpcHRpb24iLCJkZWZpbml0aW9uIiwia2luZCIsIm9wZXJhdGlvbiIsIldlYlNvY2tldExpbmsiLCJIdHRwTGluayIsIkFwb2xsb0NsaWVudCIsImNhY2hlIiwiSW5NZW1vcnlDYWNoZSIsImRlZmF1bHRPcHRpb25zIiwid2F0Y2hRdWVyeSIsImZldGNoUG9saWN5Iiwic3RvcCIsImNsZWFyU3RvcmUiLCJUT05Nb2R1bGUiLCJtb2R1bGUiLCJjb2xsZWN0aW9uTmFtZSIsInR5cGVOYW1lIiwidG9VcHBlckNhc2UiLCJzbGljZSIsInBhcmFtcyIsImZpbHRlciIsIm9yZGVyQnkiLCJsaW1pdCIsInRpbWVvdXQiLCJjIiwidCIsIk1hdGgiLCJtaW4iLCJvbkRvY0V2ZW50Iiwic3RhcnRTcGFuIiwiVGFncyIsIlNQQU5fS0lORCIsInRleHQiLCJzdWJzY3JpcHRpb24iLCJvYnNlcnZhYmxlIiwic3Vic2NyaWJlIiwibG9nIiwiZXZlbnQiLCJwYXlsb2FkIiwidW5zdWJzY3JpYmUiLCJmaW5pc2giLCJkb2NzIiwid2FpdEZvclRpbWVvdXQiLCJtb2R1bGVOYW1lIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQWtCQTs7QUFDQTs7QUFDQTs7QUFDQTs7QUFDQTs7QUFDQTs7QUFDQTs7QUFDQTs7QUFDQTs7QUFDQTs7QUFXQTs7QUFFQTs7QUFDQTs7QUF6Q0E7Ozs7Ozs7Ozs7Ozs7OztBQWlETyxJQUFNQSxXQUFXLEdBQUcsVUFBcEI7O0FBQ0EsSUFBTUMsZUFBZSxHQUFHLEtBQXhCOzs7QUFFUCxTQUFTQyxVQUFULENBQXVCQyxJQUF2QixFQUFvQ0MsaUJBQXBDLEVBQW1FO0FBQy9ELFNBQVFELElBQUksQ0FBQ0UsTUFBTCxLQUFnQixDQUFqQixJQUF3QkQsaUJBQWlCLElBQUlELElBQUksQ0FBQyxDQUFELENBQWpELEdBQXdEQSxJQUFJLENBQUMsQ0FBRCxDQUE1RCxHQUFrRSxJQUF6RTtBQUNIOztJQUVvQkcsZ0I7Ozs7O0FBS2pCLDRCQUFZQyxPQUFaLEVBQXVDO0FBQUE7O0FBQUE7QUFDbkMsNEhBQU1BLE9BQU47QUFEbUM7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFFbkMsVUFBS0MsYUFBTCxHQUFxQixJQUFyQjtBQUNBLFVBQUtDLGFBQUwsR0FBcUIsSUFBckI7QUFIbUM7QUFJdEM7Ozs7Ozs7Ozs7OztBQUdHLHFCQUFLQyxNQUFMLEdBQWMsS0FBS0gsT0FBTCxDQUFhSSxTQUFiLENBQXVCQywyQkFBdkIsQ0FBZDtBQUNBLHFCQUFLQyxZQUFMLEdBQW9CLElBQUlDLDBCQUFKLENBQStCLElBQS9CLEVBQXFDLGNBQXJDLENBQXBCO0FBQ0EscUJBQUtDLFFBQUwsR0FBZ0IsSUFBSUQsMEJBQUosQ0FBK0Is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Q29HLE1BQUw7QUFDSDtBQUNKO0FBTkUsT0FBUDtBQVFIOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OzZDQUdNckosSTtBQUFBQSxrQkFBQUEsSTs7O0FBUUdnSSxnQkFBQUEsTSxHQUFTakksVUFBVSxDQUFtQkMsSUFBbkIsRUFBeUIsUUFBekIsQztBQUNuQmlJLGdCQUFBQSxNLEdBQVNELE1BQU0sR0FBR0EsTUFBTSxDQUFDQyxNQUFWLEdBQW1CakksSUFBSSxDQUFDLENBQUQsQztBQUN0QzJDLGdCQUFBQSxNLEdBQWlCcUYsTUFBTSxHQUFHQSxNQUFNLENBQUNyRixNQUFWLEdBQW9CM0MsSUFBSSxDQUFDLENBQUQsQztBQUMvQ29JLGdCQUFBQSxPLEdBQVUsQ0FBQ0osTUFBTSxHQUFHQSxNQUFNLENBQUNJLE9BQVYsR0FBb0JwSSxJQUFJLENBQUMsQ0FBRCxDQUEvQixLQUF1Q0YsZTtBQUNqRDJDLGdCQUFBQSxVLEdBQWF1RixNQUFNLEdBQUdBLE1BQU0sQ0FBQ3ZGLFVBQVYsR0FBdUJ6QyxJQUFJLENBQUMsQ0FBRCxDOzt1QkFDakMsS0FBS3dCLEtBQUwsQ0FBVztBQUMxQnlHLGtCQUFBQSxNQUFNLEVBQU5BLE1BRDBCO0FBRTFCdEYsa0JBQUFBLE1BQU0sRUFBTkEsTUFGMEI7QUFHMUJ5RixrQkFBQUEsT0FBTyxFQUFQQSxPQUgwQjtBQUkxQjNGLGtCQUFBQSxVQUFVLEVBQVZBO0FBSjBCLGlCQUFYLEM7OztBQUFiNkcsZ0JBQUFBLEk7O3NCQU1GQSxJQUFJLENBQUNwSixNQUFMLEdBQWMsQzs7Ozs7bURBQ1BvSixJQUFJLENBQUMsQ0FBRCxDOzs7c0JBRVQ1RSwwQkFBZTZFLGNBQWYsRTs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFJZHBKLGdCQUFnQixDQUFDcUosVUFBakIsR0FBOEIsa0JBQTlCIiwic291cmNlc0NvbnRlbnQiOlsiLypcbiAqIENvcHlyaWdodCAyMDE4LTIwMjAgVE9OIERFViBTT0xVVElPTlMgTFRELlxuICpcbiAqIExpY2Vuc2VkIHVuZGVyIHRoZSBTT0ZUV0FSRSBFVkFMVUFUSU9OIExpY2Vuc2UgKHRoZSBcIkxpY2Vuc2VcIik7IHlvdSBtYXkgbm90IHVzZVxuICogdGhpcyBmaWxlIGV4Y2VwdCBpbiBjb21wbGlhbmNlIHdpdGggdGhlIExpY2Vuc2UuICBZb3UgbWF5IG9idGFpbiBhIGNvcHkgb2YgdGhlXG4gKiBMaWNlbnNlIGF0OlxuICpcbiAqIGh0dHA6Ly93d3cudG9uLmRldi9saWNlbnNlc1xuICpcbiAqIFVubGVzcyByZXF1aXJlZCBieSBhcHBsaWNhYmxlIGxhdyBvciBhZ3JlZWQgdG8gaW4gd3JpdGluZywgc29mdHdhcmVcbiAqIGRpc3RyaWJ1dGVkIHVuZGVyIHRoZSBMaWNlbnNlIGlzIGRpc3RyaWJ1dGVkIG9uIGFuIFwiQVMgSVNcIiBCQVNJUyxcbiAqIFdJVEhPVVQgV0FSUkFOVElFUyBPUiBDT05ESVRJT05TIE9GIEFOWSBLSU5ELCBlaXRoZXIgZXhwcmVzcyBvciBpbXBsaWVkLlxuICogU2VlIHRoZSBMaWNlbnNlIGZvciB0aGUgc3BlY2lmaWMgVE9OIERFViBzb2Z0d2FyZSBnb3Zlcm5pbmcgcGVybWlzc2lvbnMgYW5kXG4gKiBsaW1pdGF0aW9ucyB1bmRlciB0aGUgTGljZW5zZS5cbiAqL1xuXG4vLyBAZmxvd1xuXG5pbXBvcnQgeyBJbk1lbW9yeUNhY2hlIH0gZnJvbSAnYXBvbGxvLWNhY2hlLWlubWVtb3J5JztcbmltcG9ydCB7IEFwb2xsb0NsaWVudCB9IGZyb20gJ2Fwb2xsby1jbGllbnQnO1xuaW1wb3J0IHsgQXBvbGxvTGluaywgc3BsaXQgfSBmcm9tICdhcG9sbG8tbGluayc7XG5pbXBvcnQgeyBIdHRwTGluayB9IGZyb20gJ2Fwb2xsby1saW5rLWh0dHAnO1xuaW1wb3J0IHsgV2ViU29ja2V0TGluayB9IGZyb20gJ2Fwb2xsby1saW5rLXdzJztcbmltcG9ydCB7IGdldE1haW5EZWZpbml0aW9uIH0gZnJvbSAnYXBvbGxvLXV0aWxpdGllcyc7XG5pbXBvcnQgZ3FsIGZyb20gJ2dyYXBocWwtdGFnJztcbmltcG9ydCB7IFN1YnNjcmlwdGlvbkNsaWVudCB9IGZyb20gJ3N1YnNjcmlwdGlvbnMtdHJhbnNwb3J0LXdzJztcbmltcG9ydCB7IHNldENvbnRleHQgfSBmcm9tICdhcG9sbG8tbGluay1jb250ZXh0JztcbmltcG9ydCB7XG4gICAgRk9STUFUX1RFWFRfTUFQLCBUYWdzLCBTcGFuLCBTcGFuQ29udGV4dCxcbn0gZnJvbSAnb3BlbnRyYWNpbmcnO1xuaW1wb3J0IHR5cGUge1xuICAgIFRPTlF1ZXJpZXMsXG4gICAgVE9OUUNvbGxlY3Rpb24sXG4gICAgU3Vic2NyaXB0aW9uLFxuICAgIFRPTlF1ZXJ5UGFyYW1zLFxuICAgIFRPTlN1YnNjcmliZVBhcmFtcyxcbiAgICBUT05XYWl0Rm9yUGFyYW1zLFxufSBmcm9tICcuLi8uLi90eXBlcyc7XG5pbXBvcnQgeyBUT05DbGllbnQsIFRPTkNsaWVudEVycm9yIH0gZnJvbSAnLi4vVE9OQ2xpZW50JztcbmltcG9ydCB0eXBlIHsgVE9OTW9kdWxlQ29udGV4dCB9IGZyb20gJy4uL1RPTk1vZHVsZSc7XG5pbXBvcnQgeyBUT05Nb2R1bGUgfSBmcm9tICcuLi9UT05Nb2R1bGUnO1xuaW1wb3J0IFRPTkNvbmZpZ01vZHVsZSwgeyBVUkxQYXJ0cyB9IGZyb20gJy4vVE9OQ29uZmlnTW9kdWxlJztcblxuXG5leHBvcnQgdHlwZSBSZXF1ZXN0ID0ge1xuICAgIGlkOiBzdHJpbmcsXG4gICAgYm9keTogc3RyaW5nLFxufVxuXG5leHBvcnQgY29uc3QgTUFYX1RJTUVPVVQgPSAyMTQ3NDgzNjQ3O1xuZXhwb3J0IGNvbnN0IERFRkFVTFRfVElNRU9VVCA9IDQwXzAwMDtcblxuZnVuY3Rpb24gZmluZFBhcmFtczxUPihhcmdzOiBhbnlbXSwgcmVxdWlyZWRQYXJhbU5hbWU6IHN0cmluZyk6ID9UIHtcbiAgICByZXR1cm4gKGFyZ3MubGVuZ3RoID09PSAxKSAmJiAocmVxdWlyZWRQYXJhbU5hbWUgaW4gYXJnc1swXSkgPyBhcmdzWzBdIDogbnVsbDtcbn1cblxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgVE9OUXVlcmllc01vZHVsZSBleHRlbmRzIFRPTk1vZHVsZSBpbXBsZW1lbnRzIFRPTlF1ZXJpZXMge1xuICAgIGNvbmZpZzogVE9OQ29uZmlnTW9kdWxlO1xuXG4gICAgb3ZlcnJpZGVXc1VybDogP3N0cmluZztcblxuICAgIGNvbnN0cnVjdG9yKGNvbnRleHQ6IFRPTk1vZHVsZUNvbnRleHQpIHtcbiAgICAgICAgc3VwZXIoY29udGV4dCk7XG4gICAgICAgIHRoaXMuZ3JhcGhxbENsaWVudCA9IG51bGw7XG4gICAgICAgIHRoaXMub3ZlcnJpZGVXc1VybCA9IG51bGw7XG4gICAgfVxuXG4gICAgYXN5bmMgc2V0dXAoKSB7XG4gICAgICAgIHRoaXMuY29uZmlnID0gdGhpcy5jb250ZXh0LmdldE1vZHVsZShUT05Db25maWdNb2R1bGUpO1xuICAgICAgICB0aGlzLnRyYW5zYWN0aW9ucyA9IG5ldyBUT05RdWVyaWVzTW9kdWxlQ29sbGVjdGlvbih0aGlzLCAndHJhbnNhY3Rpb25zJyk7XG4gICAgICAgIHRoaXMubWVzc2FnZXMgPSBuZXcgVE9OUXVlcmllc01vZHVsZUNvbGxlY3Rpb24odGhpcywgJ21lc3NhZ2VzJyk7XG4gICAgICAgIHRoaXMuYmxvY2tzID0gbmV3IFRPTlF1ZXJpZXNNb2R1bGVDb2xsZWN0aW9uKHRoaXMsICdibG9ja3MnKTtcbiAgICAgICAgdGhpcy5hY2NvdW50cyA9IG5ldyBUT05RdWVyaWVzTW9kdWxlQ29sbGVjdGlvbih0aGlzLCAnYWNjb3VudHMnKTtcbiAgICB9XG5cbiAgICBhc3luYyBkZXRlY3RSZWRpcmVjdChmZXRjaDogYW55LCBzb3VyY2VVcmw6IHN0cmluZyk6IFByb21pc2U8c3RyaW5nPiB7XG4gICAgICAgIGNvbnN0IHJlc3BvbnNlID0gYXdhaXQgZmV0Y2goc291cmNlVXJsKTtcbiAgICAgICAgaWYgKHJlc3BvbnNlLnJlZGlyZWN0ZWQgPT09IHRydWUpIHtcbiAgICAgICAgICAgIHJldHVybiByZXNwb25zZS51cmw7XG4gICAgICAgIH1cbiAgICAgICAgaWYgKHJlc3BvbnNlLnJlZGlyZWN0ZWQgPT09IGZhbHNlKSB7XG4gICAgICAgICAgICByZXR1cm4gJyc7XG4gICAgICAgIH1cbiAgICAgICAgY29uc3Qgc291cmNlTG9jYXRpb24gPSBVUkxQYXJ0cy5maXgoc291cmNlVXJsLCAocGFydHMpID0+IHtcbiAgICAgICAgICAgIHBhcnRzLnF1ZXJ5ID0gJyc7XG4gICAgICAgIH0pLnRvTG93ZXJDYXNlKCk7XG4gICAgICAgIGNvbnN0IHJlc3BvbnNlTG9jYXRpb24gPSBVUkxQYXJ0cy5maXgocmVzcG9uc2UudXJsLCAocGFydHMpID0+IHtcbiAgICAgICAgICAgIHBhcnRzLnF1ZXJ5ID0gJyc7XG4gICAgICAgIH0pLnRvTG93ZXJDYXNlKCk7XG4gICAgICAgIHJldHVybiByZXNwb25zZUxvY2F0aW9uICE9PSBzb3VyY2VMb2NhdGlvbiA/IHJlc3BvbnNlLnVybCA6ICcnO1xuICAgIH1cblxuICAgIGFzeW5jIGdldENsaWVudENvbmZpZygpIHtcbiAgICAgICAgY29uc3QgeyBjb25maWcgfSA9IHRoaXM7XG4gICAgICAgIGNvbnN0IHsgY2xpZW50UGxhdGZvcm0gfSA9IFRPTkNsaWVudDtcbiAgICAgICAgaWYgKCFjb25maWcuZGF0YSB8fCAhY2xpZW50UGxhdGZvcm0pIHtcbiAgICAgICAgICAgIHRocm93IEVycm9yKCdUT04gQ2xpZW50IGRvZXMgbm90IGNvbmZpZ3VyZWQnKTtcbiAgICAgICAgfVxuICAgICAgICBsZXQgaHR0cFVybCA9IGNvbmZpZy5xdWVyaWVzSHR0cFVybCgpO1xuICAgICAgICBsZXQgd3NVcmwgPSBjb25maWcucXVlcmllc1dzVXJsKCk7XG4gICAgICAgIGNvbnN0IHsgZmV0Y2ggfSA9IGNsaWVudFBsYXRmb3JtO1xuICAgICAgICB0cnkge1xuICAgICAgICAgICAgY29uc3QgcmVkaXJlY3RlZCA9IGF3YWl0IHRoaXMuZGV0ZWN0UmVkaXJlY3QoXG4gICAgICAgICAgICAgICAgZmV0Y2gsXG4gICAgICAgICAgICAgICAgYCR7aHR0cFVybH0/cXVlcnk9JTdCaW5mbyU3QnZlcnNpb24lN0QlN0RgLFxuICAgICAgICAgICAgKTtcbiAgICAgICAgICAgIGlmIChyZWRpcmVjdGVkICE9PSAnJykge1xuICAgICAgICAgICAgICAgIGNvbnN0IGxvY2F0aW9uID0gVVJMUGFydHMuZml4KHJlZGlyZWN0ZWQsIChwYXJ0cykgPT4ge1xuICAgICAgICAgICAgICAgICAgICBwYXJ0cy5xdWVyeSA9ICcnO1xuICAgICAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgICAgIGlmIChsb2NhdGlvbikge1xuICAgICAgICAgICAgICAgICAgICBodHRwVXJsID0gbG9jYXRpb247XG4gICAgICAgICAgICAgICAgICAgIHdzVXJsID0gbG9jYXRpb25cbiAgICAgICAgICAgICAgICAgICAgICAgIC5yZXBsYWNlKC9eaHR0cHM6XFwvXFwvL2dpLCAnd3NzOi8vJylcbiAgICAgICAgICAgICAgICAgICAgICAgIC5yZXBsYWNlKC9eaHR0cDpcXC9cXC8vZ2ksICd3czovLycpO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cbiAgICAgICAgfSBjYXRjaCAoZXJyb3IpIHtcbiAgICAgICAgICAgIGNvbnNvbGUuZXJyb3IoJ1tnZXRDbGllbnRDb25maWddIGZhaWxlZCcsIGVycm9yKTtcbiAgICAgICAgfVxuICAgICAgICByZXR1cm4ge1xuICAgICAgICAgICAgaHR0cFVybCxcbiAgICAgICAgICAgIHdzVXJsLFxuICAgICAgICAgICAgZmV0Y2gsXG4gICAgICAgICAgICBXZWJTb2NrZXQ6IGNsaWVudFBsYXRmb3JtLldlYlNvY2tldCxcbiAgICAgICAgfTtcbiAgICB9XG5cbiAgICBhc3luYyBnZXRBY2NvdW50c0NvdW50KHBhcmVudFNwYW4/OiAoU3BhbiB8IFNwYW5Db250ZXh0KSk6IFByb21pc2U8bnVtYmVyPiB7XG4gICAgICAgIGNvbnN0IHJlc3VsdCA9IGF3YWl0IHRoaXMucXVlcnkoJ3F1ZXJ5e2dldEFjY291bnRzQ291bnR9JywgdW5kZWZpbmVkLCBwYXJlbnRTcGFuKTtcbiAgICAgICAgcmV0dXJuIHJlc3VsdC5kYXRhLmdldEFjY291bnRzQ291bnQ7XG4gICAgfVxuXG4gICAgYXN5bmMgZ2V0VHJhbnNhY3Rpb25zQ291bnQocGFyZW50U3Bhbj86IChTcGFuIHwgU3BhbkNvbnRleHQpKTogUHJvbWlzZTxudW1iZXI+IHtcbiAgICAgICAgY29uc3QgcmVzdWx0ID0gYXdhaXQgdGhpcy5xdWVyeSgncXVlcnl7Z2V0VHJhbnNhY3Rpb25zQ291bnR9JywgdW5kZWZpbmVkLCBwYXJlbnRTcGFuKTtcbiAgICAgICAgcmV0dXJuIHJlc3VsdC5kYXRhLmdldFRyYW5zYWN0aW9uc0NvdW50O1xuICAgIH1cblxuICAgIGFzeW5jIGdldEFjY291bnRzVG90YWxCYWxhbmNlKHBhcmVudFNwYW4/OiAoU3BhbiB8IFNwYW5Db250ZXh0KSk6IFByb21pc2U8c3RyaW5nPiB7XG4gICAgICAgIGNvbnN0IHJlc3VsdCA9IGF3YWl0IHRoaXMucXVlcnkoJ3F1ZXJ5e2dldEFjY291bnRzVG90YWxCYWxhbmNlfScsIHVuZGVmaW5lZCwgcGFyZW50U3Bhbik7XG4gICAgICAgIHJldHVybiByZXN1bHQuZGF0YS5nZXRBY2NvdW50c1RvdGFsQmFsYW5jZTtcbiAgICB9XG5cbiAgICBhc3luYyBwb3N0UmVxdWVzdHMocmVxdWVzdHM6IFJlcXVlc3RbXSwgcGFyZW50U3Bhbj86IChTcGFuIHwgU3BhbkNvbnRleHQpKTogUHJvbWlzZTxhbnk+IHtcbiAgICAgICAgcmV0dXJuIHRoaXMuY29udGV4dC50cmFjZSgncXVlcmllcy5wb3N0UmVxdWVzdHMnLCBhc3luYyAoc3BhbikgPT4ge1xuICAgICAgICAgICAgcmV0dXJuIHRoaXMuZ3JhcGhxbE11dGF0aW9uKGBtdXRhdGlvbiBwb3N0UmVxdWVzdHMoJHJlcXVlc3RzOiBbUmVxdWVzdF0pIHtcbiAgICAgICAgICAgICAgICBwb3N0UmVxdWVzdHMocmVxdWVzdHM6ICRyZXF1ZXN0cylcbiAgICAgICAgICAgIH1gLCB7XG4gICAgICAgICAgICAgICAgcmVxdWVzdHMsXG4gICAgICAgICAgICB9LCBzcGFuKTtcbiAgICAgICAgfSwgcGFyZW50U3Bhbik7XG4gICAgfVxuXG4gICAgYXN5bmMgbXV0YXRpb24oXG4gICAgICAgIHFsOiBzdHJpbmcsXG4gICAgICAgIHZhcmlhYmxlczogeyBbc3RyaW5nXTogYW55IH0gPSB7fSxcbiAgICAgICAgcGFyZW50U3Bhbj86IChTcGFuIHwgU3BhbkNvbnRleHQpLFxuICAgICk6IFByb21pc2U8YW55PiB7XG4gICAgICAgIHJldHVybiB0aGlzLmNvbnRleHQudHJhY2UoJ3F1ZXJpZXMubXV0YXRpb24nLCBhc3luYyAoc3BhbjogU3BhbikgPT4ge1xuICAgICAgICAgICAgc3Bhbi5zZXRUYWcoJ3BhcmFtcycsIHtcbiAgICAgICAgICAgICAgICBtdXRhdGlvbjogcWwsXG4gICAgICAgICAgICAgICAgdmFyaWFibGVzLFxuICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICByZXR1cm4gdGhpcy5ncmFwaHFsTXV0YXRpb24ocWwsIHZhcmlhYmxlcywgc3Bhbik7XG4gICAgICAgIH0sIHBhcmVudFNwYW4pO1xuICAgIH1cblxuICAgIGFzeW5jIHF1ZXJ5KFxuICAgICAgICBxbDogc3RyaW5nLFxuICAgICAgICB2YXJpYWJsZXM6IHsgW3N0cmluZ106IGFueSB9ID0ge30sXG4gICAgICAgIHBhcmVudFNwYW4/OiAoU3BhbiB8IFNwYW5Db250ZXh0KSxcbiAgICApOiBQcm9taXNlPGFueT4ge1xuICAgICAgICByZXR1cm4gdGhpcy5jb250ZXh0LnRyYWNlKCdxdWVyaWVzLnF1ZXJ5JywgYXN5bmMgKHNwYW46IFNwYW4pID0+IHtcbiAgICAgICAgICAgIHNwYW4uc2V0VGFnKCdwYXJhbXMnLCB7XG4gICAgICAgICAgICAgICAgcXVlcnk6IHFsLFxuICAgICAgICAgICAgICAgIHZhcmlhYmxlcyxcbiAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgcmV0dXJuIHRoaXMuZ3JhcGhxbFF1ZXJ5KHFsLCB2YXJpYWJsZXMsIHNwYW4pO1xuICAgICAgICB9LCBwYXJlbnRTcGFuKTtcbiAgICB9XG5cbiAgICBhc3luYyBncmFwaHFsTXV0YXRpb24ocWw6IHN0cmluZywgdmFyaWFibGVzOiB7IFtzdHJpbmddOiBhbnkgfSA9IHt9LCBzcGFuOiBTcGFuKTogUHJvbWlzZTxhbnk+IHtcbiAgICAgICAgY29uc3QgbXV0YXRpb24gPSBncWwoW3FsXSk7XG4gICAgICAgIHJldHVybiB0aGlzLmdyYXBoUWwoKGNsaWVudCkgPT4gY2xpZW50Lm11dGF0ZSh7XG4gICAgICAgICAgICBtdXRhdGlvbixcbiAgICAgICAgICAgIHZhcmlhYmxlcyxcbiAgICAgICAgICAgIGNvbnRleHQ6IHtcbiAgICAgICAgICAgICAgICB0cmFjZVNwYW46IHNwYW4sXG4gICAgICAgICAgICB9LFxuICAgICAgICB9KSk7XG4gICAgfVxuXG4gICAgYXN5bmMgZ3JhcGhxbFF1ZXJ5KHFsOiBzdHJpbmcsIHZhcmlhYmxlczogeyBbc3RyaW5nXTogYW55IH0gPSB7fSwgc3BhbjogU3Bhbik6IFByb21pc2U8YW55PiB7XG4gICAgICAgIGNvbnN0IHF1ZXJ5ID0gZ3FsKFtxbF0pO1xuICAgICAgICByZXR1cm4gdGhpcy5ncmFwaFFsKChjbGllbnQpID0+IGNsaWVudC5xdWVyeSh7XG4gICAgICAgICAgICBxdWVyeSxcbiAgICAgICAgICAgIHZhcmlhYmxlcyxcbiAgICAgICAgICAgIGNvbnRleHQ6IHtcbiAgICAgICAgICAgICAgICB0cmFjZVNwYW46IHNwYW4sXG4gICAgICAgICAgICB9LFxuICAgICAgICB9KSwgc3Bhbik7XG4gICAgfVxuXG4gICAgYXN5bmMgZ3JhcGhRbChyZXF1ZXN0OiAoY2xpZW50OiBBcG9sbG9DbGllbnQpID0+IFByb21pc2U8YW55Piwgc3BhbjogU3Bhbik6IFByb21pc2U8YW55PiB7XG4gICAgICAgIGNvbnN0IGNsaWVudCA9IGF3YWl0IHRoaXMuZ3JhcGhxbENsaWVudFJlcXVpcmVkKHNwYW4pO1xuICAgICAgICB0cnkge1xuICAgICAgICAgICAgcmV0dXJuIGF3YWl0IHJlcXVlc3QoY2xpZW50KTtcbiAgICAgICAgfSBjYXRjaCAoZXJyb3IpIHtcbiAgICAgICAgICAgIGNvbnN0IGdxbEVyciA9IGVycm9yLmdyYXBoUUxFcnJvcnMgJiYgZXJyb3IuZ3JhcGhRTEVycm9yc1swXTtcbiAgICAgICAgICAgIGlmIChncWxFcnIpIHtcbiAgICAgICAgICAgICAgICBjb25zdCBjbGllbnRFcnIgPSBuZXcgRXJyb3IoZ3FsRXJyLm1lc3NhZ2UpO1xuICAgICAgICAgICAgICAgIGNvbnN0IGdxbEV4YyA9IChncWxFcnIuZXh0ZW5zaW9ucyAmJiBncWxFcnIuZXh0ZW5zaW9ucy5leGNlcHRpb24pIHx8IHt9O1xuICAgICAgICAgICAgICAgIChjbGllbnRFcnI6IGFueSkubnVtYmVyID0gZ3FsRXhjLmNvZGUgfHwgMDtcbiAgICAgICAgICAgICAgICAoY2xpZW50RXJyOiBhbnkpLmNvZGUgPSBncWxFeGMuY29kZSB8fCAwO1xuICAgICAgICAgICAgICAgIChjbGllbnRFcnI6IGFueSkuc291cmNlID0gZ3FsRXhjLnNvdXJjZSB8fCAnY2xpZW50JztcbiAgICAgICAgICAgICAgICB0aHJvdyBjbGllbnRFcnI7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBjb25zdCBlcnJvcnMgPSBlcnJvclxuICAgICAgICAgICAgICAgICYmIGVycm9yLm5ldHdvcmtFcnJvclxuICAgICAgICAgICAgICAgICYmIGVycm9yLm5ldHdvcmtFcnJvci5yZXN1bHRcbiAgICAgICAgICAgICAgICAmJiBlcnJvci5uZXR3b3JrRXJyb3IucmVzdWx0LmVycm9ycztcbiAgICAgICAgICAgIGlmIChlcnJvcnMpIHtcbiAgICAgICAgICAgICAgICB0aHJvdyBUT05DbGllbnRFcnJvci5xdWVyeUZhaWxlZChlcnJvcnMpO1xuICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgICB0aHJvdyBlcnJvcjtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgIH1cblxuICAgIGFzeW5jIGdyYXBocWxDbGllbnRSZXF1aXJlZChwYXJlbnRTcGFuOiBTcGFuKTogUHJvbWlzZTxBcG9sbG9DbGllbnQ+IHtcbiAgICAgICAgaWYgKHRoaXMuZ3JhcGhxbENsaWVudCkge1xuICAgICAgICAgICAgcmV0dXJuIHRoaXMuZ3JhcGhxbENsaWVudDtcbiAgICAgICAgfVxuICAgICAgICBhd2FpdCB0aGlzLmNvbnRleHQudHJhY2UoJ3NldHVwIGNsaWVudCcsIGFzeW5jIChzcGFuKSA9PiB7XG4gICAgICAgICAgICByZXR1cm4gdGhpcy5jcmVhdGVHcmFwaHFsQ2xpZW50KHNwYW4pO1xuICAgICAgICB9LCBwYXJlbnRTcGFuKTtcbiAgICAgICAgcmV0dXJuIHRoaXMuZ3JhcGhxbENsaWVudDtcbiAgICB9XG5cbiAgICBhc3luYyBjcmVhdGVHcmFwaHFsQ2xpZW50KHNwYW46IFNwYW4gfCBTcGFuQ29udGV4dCkge1xuICAgICAgICBjb25zdCB1c2VIdHRwID0gdHJ1ZTtcbiAgICAgICAgbGV0IGNsaWVudENvbmZpZyA9IGF3YWl0IHRoaXMuZ2V0Q2xpZW50Q29uZmlnKCk7XG4gICAgICAgIGxldCB3c0xpbms6ID9XZWJTb2NrZXRMaW5rID0gbnVsbDtcbiAgICAgICAgbGV0IGh0dHBMaW5rOiA/SHR0cExpbmsgPSBudWxsO1xuXG4gICAgICAgIGNvbnN0IHN1YnNPcHRpb25zID0gdGhpcy5jb25maWcudHJhY2VyLmluamVjdChzcGFuLCBGT1JNQVRfVEVYVF9NQVAsIHt9KTtcbiAgICAgICAgY29uc3Qgc3Vic2NyaXB0aW9uQ2xpZW50ID0gbmV3IFN1YnNjcmlwdGlvbkNsaWVudChcbiAgICAgICAgICAgIGNsaWVudENvbmZpZy53c1VybCxcbiAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICByZWNvbm5lY3Q6IHRydWUsXG4gICAgICAgICAgICAgICAgY29ubmVjdGlvblBhcmFtczogKCkgPT4gKHtcbiAgICAgICAgICAgICAgICAgICAgYWNjZXNzS2V5OiB0aGlzLmNvbmZpZy5kYXRhICYmIHRoaXMuY29uZmlnLmRhdGEuYWNjZXNzS2V5LFxuICAgICAgICAgICAgICAgICAgICBoZWFkZXJzOiBzdWJzT3B0aW9ucyxcbiAgICAgICAgICAgICAgICB9KSxcbiAgICAgICAgICAgIH0sXG4gICAgICAgICAgICBjbGllbnRDb25maWcuV2ViU29ja2V0LFxuICAgICAgICApO1xuICAgICAgICBzdWJzY3JpcHRpb25DbGllbnQub25SZWNvbm5lY3RlZCgoKSA9PiB7XG4gICAgICAgICAgICBjb25zb2xlLmVycm9yKCc+Pj4nLCAnV2ViU29ja2V0IFJlY29ubmVjdGVkJyk7XG4gICAgICAgIH0pO1xuICAgICAgICBsZXQgZGV0ZWN0aW5nUmVkaXJlY3Rpb24gPSBmYWxzZTtcbiAgICAgICAgc3Vic2NyaXB0aW9uQ2xpZW50Lm9uRXJyb3IoKCkgPT4ge1xuICAgICAgICAgICAgY29uc29sZS5lcnJvcignW29uRXJyb3JdJywgJ1dlYlNvY2tldCBGYWlsZWQnKTtcbiAgICAgICAgICAgIGlmIChkZXRlY3RpbmdSZWRpcmVjdGlvbikge1xuICAgICAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIChhc3luYyAoKSA9PiB7XG4gICAgICAgICAgICAgICAgZGV0ZWN0aW5nUmVkaXJlY3Rpb24gPSB0cnVlO1xuICAgICAgICAgICAgICAgIHRyeSB7XG4gICAgICAgICAgICAgICAgICAgIGNvbnN0IG5ld0NvbmZpZyA9IGF3YWl0IHRoaXMuZ2V0Q2xpZW50Q29uZmlnKCk7XG4gICAgICAgICAgICAgICAgICAgIGNvbnN0IGNvbmZpZ0lzQ2hhbmdlZCA9IG5ld0NvbmZpZy5odHRwVXJsICE9PSBjbGllbnRDb25maWcuaHR0cFVybFxuICAgICAgICAgICAgICAgICAgICAgICAgfHwgbmV3Q29uZmlnLndzVXJsICE9PSBjbGllbnRDb25maWcud3NVcmw7XG4gICAgICAgICAgICAgICAgICAgIGlmIChjb25maWdJc0NoYW5nZWQpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIGNvbnNvbGUuZXJyb3IoJ1tvbkVycm9yXScsICdDbGllbnQgY29uZmlnIGNoYW5nZWQnKTtcbiAgICAgICAgICAgICAgICAgICAgICAgIGNsaWVudENvbmZpZyA9IG5ld0NvbmZpZztcbiAgICAgICAgICAgICAgICAgICAgICAgIHN1YnNjcmlwdGlvbkNsaWVudC51cmwgPSBuZXdDb25maWcud3NVcmw7XG4gICAgICAgICAgICAgICAgICAgICAgICBpZiAod3NMaW5rKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgd3NMaW5rLnVybCA9IG5ld0NvbmZpZy53c1VybDtcbiAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICAgIGlmIChodHRwTGluaykge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGh0dHBMaW5rLnVyaSA9IG5ld0NvbmZpZy5odHRwVXJsO1xuICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgfSBjYXRjaCAoZXJyKSB7XG4gICAgICAgICAgICAgICAgICAgIGNvbnNvbGUuZXJyb3IoJ1tvbkVycm9yXSBEZXRlY3QgcmVkaXJlY3Rpb24gZmFpbGVkJywgZXJyKTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgZGV0ZWN0aW5nUmVkaXJlY3Rpb24gPSBmYWxzZTtcbiAgICAgICAgICAgIH0pKCk7XG4gICAgICAgIH0pO1xuICAgICAgICBzdWJzY3JpcHRpb25DbGllbnQubWF4Q29ubmVjdFRpbWVHZW5lcmF0b3IuZHVyYXRpb24gPSAoKSA9PiB7XG4gICAgICAgICAgICByZXR1cm4gc3Vic2NyaXB0aW9uQ2xpZW50Lm1heENvbm5lY3RUaW1lR2VuZXJhdG9yLm1heDtcbiAgICAgICAgfTtcblxuICAgICAgICBjb25zdCB0cmFjZXJMaW5rID0gYXdhaXQgc2V0Q29udGV4dCgoXywgcmVxKSA9PiB7XG4gICAgICAgICAgICBjb25zdCByZXNvbHZlZFNwYW4gPSAocmVxICYmIHJlcS50cmFjZVNwYW4pIHx8IHNwYW47XG4gICAgICAgICAgICByZXEuaGVhZGVycyA9IHt9O1xuICAgICAgICAgICAgdGhpcy5jb25maWcudHJhY2VyLmluamVjdChyZXNvbHZlZFNwYW4sIEZPUk1BVF9URVhUX01BUCwgcmVxLmhlYWRlcnMpO1xuICAgICAgICAgICAgY29uc3QgYWNjZXNzS2V5ID0gdGhpcy5jb25maWcuZGF0YSAmJiB0aGlzLmNvbmZpZy5kYXRhLmFjY2Vzc0tleTtcbiAgICAgICAgICAgIGlmIChhY2Nlc3NLZXkpIHtcbiAgICAgICAgICAgICAgICByZXEuaGVhZGVycy5hY2Nlc3NLZXkgPSBhY2Nlc3NLZXk7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICByZXR1cm4ge1xuICAgICAgICAgICAgICAgIGhlYWRlcnM6IHJlcS5oZWFkZXJzLFxuICAgICAgICAgICAgfTtcbiAgICAgICAgfSk7XG4gICAgICAgIGNvbnN0IHdyYXBMaW5rID0gKGxpbms6IEFwb2xsb0xpbmspOiBBcG9sbG9MaW5rID0+IHRyYWNlckxpbmsuY29uY2F0KGxpbmspO1xuICAgICAgICBjb25zdCBpc1N1YnNjcmlwdGlvbiA9ICh7IHF1ZXJ5IH0pID0+IHtcbiAgICAgICAgICAgIGNvbnN0IGRlZmluaXRpb24gPSBnZXRNYWluRGVmaW5pdGlvbihxdWVyeSk7XG4gICAgICAgICAgICByZXR1cm4gKFxuICAgICAgICAgICAgICAgIGRlZmluaXRpb24ua2luZCA9PT0gJ09wZXJhdGlvbkRlZmluaXRpb24nXG4gICAgICAgICAgICAgICAgJiYgZGVmaW5pdGlvbi5vcGVyYXRpb24gPT09ICdzdWJzY3JpcHRpb24nXG4gICAgICAgICAgICApO1xuICAgICAgICB9O1xuICAgICAgICB3c0xpbmsgPSBuZXcgV2ViU29ja2V0TGluayhzdWJzY3JpcHRpb25DbGllbnQpO1xuICAgICAgICBodHRwTGluayA9IHVzZUh0dHBcbiAgICAgICAgICAgID8gbmV3IEh0dHBMaW5rKHtcbiAgICAgICAgICAgICAgICB1cmk6IGNsaWVudENvbmZpZy5odHRwVXJsLFxuICAgICAgICAgICAgICAgIGZldGNoOiBjbGllbnRDb25maWcuZmV0Y2gsXG4gICAgICAgICAgICB9KVxuICAgICAgICAgICAgOiBudWxsO1xuXG4gICAgICAgIGNvbnN0IGxpbmsgPSBodHRwTGlua1xuICAgICAgICAgICAgPyBzcGxpdChpc1N1YnNjcmlwdGlvbiwgd3JhcExpbmsod3NMaW5rKSwgd3JhcExpbmsoaHR0cExpbmspKVxuICAgICAgICAgICAgOiB3cmFwTGluayh3c0xpbmspO1xuICAgICAgICB0aGlzLmdyYXBocWxDbGllbnQgPSBuZXcgQXBvbGxvQ2xpZW50KHtcbiAgICAgICAgICAgIGNhY2hlOiBuZXcgSW5NZW1vcnlDYWNoZSh7fSksXG4gICAgICAgICAgICBsaW5rLFxuICAgICAgICAgICAgZGVmYXVsdE9wdGlvbnM6IHtcbiAgICAgICAgICAgICAgICB3YXRjaFF1ZXJ5OiB7XG4gICAgICAgICAgICAgICAgICAgIGZldGNoUG9saWN5OiAnbm8tY2FjaGUnLFxuICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgcXVlcnk6IHtcbiAgICAgICAgICAgICAgICAgICAgZmV0Y2hQb2xpY3k6ICduby1jYWNoZScsXG4gICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgIH0sXG4gICAgICAgIH0pO1xuICAgIH1cblxuICAgIGFzeW5jIGNsb3NlKCkge1xuICAgICAgICBpZiAodGhpcy5ncmFwaHFsQ2xpZW50KSB7XG4gICAgICAgICAgICBjb25zdCBjbGllbnQgPSB0aGlzLmdyYXBocWxDbGllbnQ7XG4gICAgICAgICAgICB0aGlzLmdyYXBocWxDbGllbnQgPSBudWxsO1xuICAgICAgICAgICAgY2xpZW50LnN0b3AoKTtcbiAgICAgICAgICAgIGF3YWl0IGNsaWVudC5jbGVhclN0b3JlKCk7XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICB0cmFuc2FjdGlvbnM6IFRPTlFDb2xsZWN0aW9uO1xuXG4gICAgbWVzc2FnZXM6IFRPTlFDb2xsZWN0aW9uO1xuXG4gICAgYmxvY2tzOiBUT05RQ29sbGVjdGlvbjtcblxuICAgIGFjY291bnRzOiBUT05RQ29sbGVjdGlvbjtcblxuICAgIGdyYXBocWxDbGllbnQ6IEFwb2xsb0NsaWVudDtcbn1cblxuXG5jbGFzcyBUT05RdWVyaWVzTW9kdWxlQ29sbGVjdGlvbiBpbXBsZW1lbnRzIFRPTlFDb2xsZWN0aW9uIHtcbiAgICBtb2R1bGU6IFRPTlF1ZXJpZXNNb2R1bGU7XG5cbiAgICBjb2xsZWN0aW9uTmFtZTogc3RyaW5nO1xuXG4gICAgdHlwZU5hbWU6IHN0cmluZztcblxuICAgIGNvbnN0cnVjdG9yKG1vZHVsZTogVE9OUXVlcmllc01vZHVsZSwgY29sbGVjdGlvbk5hbWU6IHN0cmluZykge1xuICAgICAgICB0aGlzLm1vZHVsZSA9IG1vZHVsZTtcbiAgICAgICAgdGhpcy5jb2xsZWN0aW9uTmFtZSA9IGNvbGxlY3Rpb25OYW1lO1xuICAgICAgICB0aGlzLnR5cGVOYW1lID0gYCR7Y29sbGVjdGlvbk5hbWVbMF0udG9VcHBlckNhc2UoKX0ke2NvbGxlY3Rpb25OYW1lLnNsaWNlKDEsIC0xKX1gO1xuICAgIH1cblxuICAgIGFzeW5jIHF1ZXJ5KFxuICAgICAgICAuLi5hcmdzXG4gICAgICAgIC8qXG4gICAgICAgICAgICBmaWx0ZXJPclBhcmFtczogYW55IHwgVE9OUXVlcnlQYXJhbXMsXG4gICAgICAgICAgICByZXN1bHQ6IHN0cmluZyxcbiAgICAgICAgICAgIG9yZGVyQnk/OiBPcmRlckJ5W10sXG4gICAgICAgICAgICBsaW1pdD86IG51bWJlcixcbiAgICAgICAgICAgIHRpbWVvdXQ/OiBudW1iZXIsXG4gICAgICAgICAgICBwYXJlbnRTcGFuPzogKFNwYW4gfCBTcGFuQ29udGV4dClcbiAgICAgICAgICovXG4gICAgKTogUHJvbWlzZTxhbnk+IHtcbiAgICAgICAgY29uc3QgcGFyYW1zID0gZmluZFBhcmFtczxUT05RdWVyeVBhcmFtcz4oYXJncywgJ2ZpbHRlcicpO1xuICAgICAgICBjb25zdCBmaWx0ZXIgPSBwYXJhbXMgPyBwYXJhbXMuZmlsdGVyIDogYXJnc1swXTtcbiAgICAgICAgY29uc3QgcmVzdWx0OiBzdHJpbmcgPSBwYXJhbXMgPyBwYXJhbXMucmVzdWx0IDogKGFyZ3NbMV06IGFueSk7XG4gICAgICAgIGNvbnN0IG9yZGVyQnkgPSBwYXJhbXMgPyBwYXJhbXMub3JkZXJCeSA6IGFyZ3NbMl07XG4gICAgICAgIGNvbnN0IGxpbWl0ID0gcGFyYW1zID8gcGFyYW1zLmxpbWl0IDogYXJnc1szXTtcbiAgICAgICAgY29uc3QgdGltZW91dCA9IHBhcmFtcyA/IHBhcmFtcy50aW1lb3V0IDogKGFyZ3NbNF06IGFueSk7XG4gICAgICAgIGNvbnN0IHBhcmVudFNwYW4gPSBwYXJhbXMgPyBwYXJhbXMucGFyZW50U3BhbiA6IGFyZ3NbNV07XG4gICAgICAgIHJldHVybiB0aGlzLm1vZHVsZS5jb250ZXh0LnRyYWNlKGAke3RoaXMuY29sbGVjdGlvbk5hbWV9LnF1ZXJ5YCwgYXN5bmMgKHNwYW4pID0+IHtcbiAgICAgICAgICAgIHNwYW4uc2V0VGFnKCdwYXJhbXMnLCB7XG4gICAgICAgICAgICAgICAgZmlsdGVyLFxuICAgICAgICAgICAgICAgIHJlc3VsdCxcbiAgICAgICAgICAgICAgICBvcmRlckJ5LFxuICAgICAgICAgICAgICAgIGxpbWl0LFxuICAgICAgICAgICAgICAgIHRpbWVvdXQsXG4gICAgICAgICAgICB9KTtcbiAgICAgICAgICAgIGNvbnN0IGMgPSB0aGlzLmNvbGxlY3Rpb25OYW1lO1xuICAgICAgICAgICAgY29uc3QgdCA9IHRoaXMudHlwZU5hbWU7XG4gICAgICAgICAgICBjb25zdCBxbCA9IGBxdWVyeSAke2N9KCRmaWx0ZXI6ICR7dH1GaWx0ZXIsICRvcmRlckJ5OiBbUXVlcnlPcmRlckJ5XSwgJGxpbWl0OiBJbnQsICR0aW1lb3V0OiBGbG9hdCkge1xuICAgICAgICAgICAgICAgICR7Y30oZmlsdGVyOiAkZmlsdGVyLCBvcmRlckJ5OiAkb3JkZXJCeSwgbGltaXQ6ICRsaW1pdCwgdGltZW91dDogJHRpbWVvdXQpIHsgJHtyZXN1bHR9IH1cbiAgICAgICAgICAgIH1gO1xuICAgICAgICAgICAgY29uc3QgdmFyaWFibGVzOiB7IFtzdHJpbmddOiBhbnkgfSA9IHtcbiAgICAgICAgICAgICAgICBmaWx0ZXIsXG4gICAgICAgICAgICAgICAgb3JkZXJCeSxcbiAgICAgICAgICAgICAgICBsaW1pdCxcbiAgICAgICAgICAgIH07XG4gICAgICAgICAgICBpZiAodGltZW91dCkge1xuICAgICAgICAgICAgICAgIHZhcmlhYmxlcy50aW1lb3V0ID0gTWF0aC5taW4oTUFYX1RJTUVPVVQsIHRpbWVvdXQpO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgcmV0dXJuIChhd2FpdCB0aGlzLm1vZHVsZS5ncmFwaHFsUXVlcnkocWwsIHZhcmlhYmxlcywgc3BhbikpLmRhdGFbY107XG4gICAgICAgIH0sIHBhcmVudFNwYW4pO1xuICAgIH1cblxuICAgIHN1YnNjcmliZShcbiAgICAgICAgLi4uYXJnc1xuICAgICAgICAvKlxuICAgICAgICBmaWx0ZXJPclBhcmFtczogYW55IHwgVE9OU3Vic2NyaWJlUGFyYW1zLFxuICAgICAgICByZXN1bHQ/OiBzdHJpbmcsXG4gICAgICAgIG9uRG9jRXZlbnQ/OiBEb2NFdmVudCxcbiAgICAgICAgb25FcnJvcj86IChlcnI6IEVycm9yKSA9PiB2b2lkXG4gICAgICAgICAqL1xuICAgICk6IFN1YnNjcmlwdGlvbiB7XG4gICAgICAgIGNvbnN0IHBhcmFtcyA9IGZpbmRQYXJhbXM8VE9OU3Vic2NyaWJlUGFyYW1zPihhcmdzLCAnZmlsdGVyJyk7XG4gICAgICAgIGNvbnN0IGZpbHRlciA9IHBhcmFtcyA/IHBhcmFtcy5maWx0ZXIgOiBhcmdzWzBdO1xuICAgICAgICBjb25zdCByZXN1bHQ6IHN0cmluZyA9IHBhcmFtcyA/IHBhcmFtcy5yZXN1bHQgOiAoYXJnc1sxXTogYW55KTtcbiAgICAgICAgY29uc3Qgb25Eb2NFdmVudCA9IHBhcmFtcyA/IHBhcmFtcy5vbkRvY0V2ZW50IDogKGFyZ3NbMl06IGFueSk7XG4gICAgICAgIGNvbnN0IG9uRXJyb3IgPSBwYXJhbXMgPyBwYXJhbXMub25FcnJvciA6IChhcmdzWzNdOiBhbnkpO1xuICAgICAgICBjb25zdCBzcGFuID0gdGhpcy5tb2R1bGUuY29uZmlnLnRyYWNlci5zdGFydFNwYW4oJ1RPTlF1ZXJpZXNNb2R1bGUuanM6c3Vic2NyaWJlICcpO1xuICAgICAgICBzcGFuLnNldFRhZyhUYWdzLlNQQU5fS0lORCwgJ2NsaWVudCcpO1xuICAgICAgICBjb25zdCB0ZXh0ID0gYHN1YnNjcmlwdGlvbiAke3RoaXMuY29sbGVjdGlvbk5hbWV9KCRmaWx0ZXI6ICR7dGhpcy50eXBlTmFtZX1GaWx0ZXIpIHtcbiAgICAgICAgICAgICR7dGhpcy5jb2xsZWN0aW9uTmFtZX0oZmlsdGVyOiAkZmlsdGVyKSB7ICR7cmVzdWx0fSB9XG4gICAgICAgIH1gO1xuICAgICAgICBjb25zdCBxdWVyeSA9IGdxbChbdGV4dF0pO1xuICAgICAgICBsZXQgc3Vic2NyaXB0aW9uID0gbnVsbDtcbiAgICAgICAgKGFzeW5jICgpID0+IHtcbiAgICAgICAgICAgIHRyeSB7XG4gICAgICAgICAgICAgICAgY29uc3QgY2xpZW50ID0gYXdhaXQgdGhpcy5tb2R1bGUuZ3JhcGhxbENsaWVudFJlcXVpcmVkKHNwYW4pO1xuICAgICAgICAgICAgICAgIGNvbnN0IG9ic2VydmFibGUgPSBjbGllbnQuc3Vic2NyaWJlKHtcbiAgICAgICAgICAgICAgICAgICAgcXVlcnksXG4gICAgICAgICAgICAgICAgICAgIHZhcmlhYmxlczoge1xuICAgICAgICAgICAgICAgICAgICAgICAgZmlsdGVyLFxuICAgICAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgICAgIHN1YnNjcmlwdGlvbiA9IG9ic2VydmFibGUuc3Vic2NyaWJlKChtZXNzYWdlKSA9PiB7XG4gICAgICAgICAgICAgICAgICAgIG9uRG9jRXZlbnQoJ2luc2VydC91cGRhdGUnLCBtZXNzYWdlLmRhdGFbdGhpcy5jb2xsZWN0aW9uTmFtZV0pO1xuICAgICAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgfSBjYXRjaCAoZXJyb3IpIHtcbiAgICAgICAgICAgICAgICBzcGFuLmxvZyh7XG4gICAgICAgICAgICAgICAgICAgIGV2ZW50OiAnZmFpbGVkJyxcbiAgICAgICAgICAgICAgICAgICAgcGF5bG9hZDogZXJyb3IsXG4gICAgICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICAgICAgaWYgKG9uRXJyb3IpIHtcbiAgICAgICAgICAgICAgICAgICAgb25FcnJvcihlcnJvcik7XG4gICAgICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgICAgICAgY29uc29sZS5lcnJvcignVE9OIENsaWVudCBzdWJzY3JpcHRpb24gZXJyb3InLCBlcnJvcik7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuICAgICAgICB9KSgpO1xuICAgICAgICByZXR1cm4ge1xuICAgICAgICAgICAgdW5zdWJzY3JpYmU6ICgpID0+IHtcbiAgICAgICAgICAgICAgICBpZiAoc3Vic2NyaXB0aW9uKSB7XG4gICAgICAgICAgICAgICAgICAgIHN1YnNjcmlwdGlvbi51bnN1YnNjcmliZSgpO1xuICAgICAgICAgICAgICAgICAgICBzcGFuLmZpbmlzaCgpO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH0sXG4gICAgICAgIH07XG4gICAgfVxuXG4gICAgYXN5bmMgd2FpdEZvcihcbiAgICAgICAgLi4uYXJnc1xuICAgICAgICAvKlxuICAgICAgICBmaWx0ZXJPclBhcmFtczogYW55IHwgVE9OV2FpdEZvclBhcmFtcyxcbiAgICAgICAgcmVzdWx0OiBzdHJpbmcsXG4gICAgICAgIHRpbWVvdXQ/OiBudW1iZXIsXG4gICAgICAgIHBhcmVudFNwYW4/OiAoU3BhbiB8IFNwYW5Db250ZXh0KVxuICAgICAgICAgKi9cbiAgICApOiBQcm9taXNlPGFueT4ge1xuICAgICAgICBjb25zdCBwYXJhbXMgPSBmaW5kUGFyYW1zPFRPTldhaXRGb3JQYXJhbXM+KGFyZ3MsICdmaWx0ZXInKTtcbiAgICAgICAgY29uc3QgZmlsdGVyID0gcGFyYW1zID8gcGFyYW1zLmZpbHRlciA6IGFyZ3NbMF07XG4gICAgICAgIGNvbnN0IHJlc3VsdDogc3RyaW5nID0gcGFyYW1zID8gcGFyYW1zLnJlc3VsdCA6IChhcmdzWzFdOiBhbnkpO1xuICAgICAgICBjb25zdCB0aW1lb3V0ID0gKHBhcmFtcyA/IHBhcmFtcy50aW1lb3V0IDogYXJnc1syXSkgfHwgREVGQVVMVF9USU1FT1VUO1xuICAgICAgICBjb25zdCBwYXJlbnRTcGFuID0gcGFyYW1zID8gcGFyYW1zLnBhcmVudFNwYW4gOiBhcmdzWzNdO1xuICAgICAgICBjb25zdCBkb2NzID0gYXdhaXQgdGhpcy5xdWVyeSh7XG4gICAgICAgICAgICBmaWx0ZXIsXG4gICAgICAgICAgICByZXN1bHQsXG4gICAgICAgICAgICB0aW1lb3V0LFxuICAgICAgICAgICAgcGFyZW50U3BhbixcbiAgICAgICAgfSk7XG4gICAgICAgIGlmIChkb2NzLmxlbmd0aCA+IDApIHtcbiAgICAgICAgICAgIHJldHVybiBkb2NzWzBdO1xuICAgICAgICB9XG4gICAgICAgIHRocm93IFRPTkNsaWVudEVycm9yLndhaXRGb3JUaW1lb3V0KCk7XG4gICAgfVxufVxuXG5UT05RdWVyaWVzTW9kdWxlLm1vZHVsZU5hbWUgPSAnVE9OUXVlcmllc01vZHVsZSc7XG4iXX0=