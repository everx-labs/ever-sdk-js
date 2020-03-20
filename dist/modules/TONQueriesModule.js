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

function resolveParams(args, requiredParamName, resolveArgs) {
  return args.length === 1 && requiredParamName in args[0] ? args[0] : resolveArgs();
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
      var _getClientConfig = (0, _asyncToGenerator2["default"])(
      /*#__PURE__*/
      _regenerator["default"].mark(function _callee3() {
        var config, clientPlatform, fetch, getConfigForServer, _iteratorNormalCompletion, _didIteratorError, _iteratorError, _iterator, _step, _server, clientConfig, redirected, httpParts;

        return _regenerator["default"].wrap(function _callee3$(_context3) {
          while (1) {
            switch (_context3.prev = _context3.next) {
              case 0:
                getConfigForServer = function _ref(server) {
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
                _iteratorNormalCompletion = true;
                _didIteratorError = false;
                _iteratorError = undefined;
                _context3.prev = 9;
                _iterator = config.data.servers[Symbol.iterator]();

              case 11:
                if (_iteratorNormalCompletion = (_step = _iterator.next()).done) {
                  _context3.next = 28;
                  break;
                }

                _server = _step.value;
                _context3.prev = 13;
                clientConfig = getConfigForServer(_server);
                _context3.next = 17;
                return this.detectRedirect(fetch, "".concat(clientConfig.httpUrl, "?query=%7Binfo%7Bversion%7D%7D"));

              case 17:
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

              case 22:
                _context3.prev = 22;
                _context3.t0 = _context3["catch"](13);
                console.error("[getClientConfig] for server \"".concat(_server, "\" failed"), _context3.t0);

              case 25:
                _iteratorNormalCompletion = true;
                _context3.next = 11;
                break;

              case 28:
                _context3.next = 34;
                break;

              case 30:
                _context3.prev = 30;
                _context3.t1 = _context3["catch"](9);
                _didIteratorError = true;
                _iteratorError = _context3.t1;

              case 34:
                _context3.prev = 34;
                _context3.prev = 35;

                if (!_iteratorNormalCompletion && _iterator["return"] != null) {
                  _iterator["return"]();
                }

              case 37:
                _context3.prev = 37;

                if (!_didIteratorError) {
                  _context3.next = 40;
                  break;
                }

                throw _iteratorError;

              case 40:
                return _context3.finish(37);

              case 41:
                return _context3.finish(34);

              case 42:
                return _context3.abrupt("return", getConfigForServer(config.data.servers[0]));

              case 43:
              case "end":
                return _context3.stop();
            }
          }
        }, _callee3, this, [[9, 30, 34, 42], [13, 22], [35,, 37, 41]]);
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
                  var _ref2 = (0, _asyncToGenerator2["default"])(
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
                    return _ref2.apply(this, arguments);
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
                  var _ref3 = (0, _asyncToGenerator2["default"])(
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
                    return _ref3.apply(this, arguments);
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
                  var _ref4 = (0, _asyncToGenerator2["default"])(
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
                    return _ref4.apply(this, arguments);
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
                  var _ref5 = (0, _asyncToGenerator2["default"])(
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
                    return _ref5.apply(this, arguments);
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
                  console.error('[TONClient.queries]', 'WebSocket Reconnected');
                });
                detectingRedirection = false;
                subscriptionClient.onError(function () {
                  console.error('[TONClient.queries]', 'WebSocket Failed');

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
                              console.error('[TONClient.queries]', 'Client config changed');
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
                            console.error('[TONClient.queries] redirection detector failed', _context18.t0);

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

                isSubscription = function isSubscription(_ref7) {
                  var query = _ref7.query;
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
                return _context22.abrupt("return", this.module.context.trace("".concat(this.collectionName, ".query"),
                /*#__PURE__*/
                function () {
                  var _ref8 = (0, _asyncToGenerator2["default"])(
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
                    return _ref8.apply(this, arguments);
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy9tb2R1bGVzL1RPTlF1ZXJpZXNNb2R1bGUuanMiXSwibmFtZXMiOlsiTUFYX1RJTUVPVVQiLCJyZXNvbHZlUGFyYW1zIiwiYXJncyIsInJlcXVpcmVkUGFyYW1OYW1lIiwicmVzb2x2ZUFyZ3MiLCJsZW5ndGgiLCJUT05RdWVyaWVzTW9kdWxlIiwiY29udGV4dCIsImdyYXBocWxDbGllbnQiLCJvdmVycmlkZVdzVXJsIiwiY29uZmlnIiwiZ2V0TW9kdWxlIiwiVE9OQ29uZmlnTW9kdWxlIiwidHJhbnNhY3Rpb25zIiwiVE9OUXVlcmllc01vZHVsZUNvbGxlY3Rpb24iLCJtZXNzYWdlcyIsImJsb2NrcyIsImFjY291bnRzIiwiZmV0Y2giLCJzb3VyY2VVcmwiLCJyZXNwb25zZSIsInJlZGlyZWN0ZWQiLCJ1cmwiLCJzb3VyY2VMb2NhdGlvbiIsIlVSTFBhcnRzIiwicGFyc2UiLCJmaXhRdWVyeSIsIl8iLCJ0b1N0cmluZyIsInRvTG93ZXJDYXNlIiwicmVzcG9uc2VMb2NhdGlvbiIsImdldENvbmZpZ0ZvclNlcnZlciIsInNlcnZlciIsImh0dHBQYXJ0cyIsImZpeFByb3RvY29sIiwieCIsImZpeFBhdGgiLCJodHRwIiwid3MiLCJodHRwVXJsIiwid3NVcmwiLCJjbGllbnRQbGF0Zm9ybSIsIldlYlNvY2tldCIsIlRPTkNsaWVudCIsIkVycm9yIiwiZGF0YSIsInNlcnZlcnMiLCJjbGllbnRDb25maWciLCJkZXRlY3RSZWRpcmVjdCIsImNvbnNvbGUiLCJlcnJvciIsInBhcmVudFNwYW4iLCJxdWVyeSIsInVuZGVmaW5lZCIsInJlc3VsdCIsImdldEFjY291bnRzQ291bnQiLCJnZXRUcmFuc2FjdGlvbnNDb3VudCIsImdldEFjY291bnRzVG90YWxCYWxhbmNlIiwicmVxdWVzdHMiLCJ0cmFjZSIsInNwYW4iLCJncmFwaHFsTXV0YXRpb24iLCJxbCIsInZhcmlhYmxlcyIsInNldFRhZyIsIm11dGF0aW9uIiwiZ3JhcGhxbFF1ZXJ5IiwiZ3JhcGhRbCIsImNsaWVudCIsIm11dGF0ZSIsInRyYWNlU3BhbiIsInJlcXVlc3QiLCJncmFwaHFsQ2xpZW50UmVxdWlyZWQiLCJncWxFcnIiLCJncmFwaFFMRXJyb3JzIiwiY2xpZW50RXJyIiwibWVzc2FnZSIsImdxbEV4YyIsImV4dGVuc2lvbnMiLCJleGNlcHRpb24iLCJudW1iZXIiLCJjb2RlIiwic291cmNlIiwiZXJyb3JzIiwibmV0d29ya0Vycm9yIiwiVE9OQ2xpZW50RXJyb3IiLCJxdWVyeUZhaWxlZCIsImNyZWF0ZUdyYXBocWxDbGllbnQiLCJ1c2VIdHRwIiwiZ2V0Q2xpZW50Q29uZmlnIiwid3NMaW5rIiwiaHR0cExpbmsiLCJzdWJzT3B0aW9ucyIsInRyYWNlciIsImluamVjdCIsIkZPUk1BVF9URVhUX01BUCIsInN1YnNjcmlwdGlvbkNsaWVudCIsIlN1YnNjcmlwdGlvbkNsaWVudCIsInJlY29ubmVjdCIsImNvbm5lY3Rpb25QYXJhbXMiLCJhY2Nlc3NLZXkiLCJoZWFkZXJzIiwib25SZWNvbm5lY3RlZCIsImRldGVjdGluZ1JlZGlyZWN0aW9uIiwib25FcnJvciIsIm5ld0NvbmZpZyIsImNvbmZpZ0lzQ2hhbmdlZCIsInVyaSIsIm1heENvbm5lY3RUaW1lR2VuZXJhdG9yIiwiZHVyYXRpb24iLCJtYXgiLCJyZXEiLCJyZXNvbHZlZFNwYW4iLCJ0cmFjZXJMaW5rIiwid3JhcExpbmsiLCJsaW5rIiwiY29uY2F0IiwiaXNTdWJzY3JpcHRpb24iLCJkZWZpbml0aW9uIiwia2luZCIsIm9wZXJhdGlvbiIsIldlYlNvY2tldExpbmsiLCJIdHRwTGluayIsIkFwb2xsb0NsaWVudCIsImNhY2hlIiwiSW5NZW1vcnlDYWNoZSIsImRlZmF1bHRPcHRpb25zIiwid2F0Y2hRdWVyeSIsImZldGNoUG9saWN5Iiwic3RvcCIsImNsZWFyU3RvcmUiLCJUT05Nb2R1bGUiLCJtb2R1bGUiLCJjb2xsZWN0aW9uTmFtZSIsInR5cGVOYW1lIiwidG9VcHBlckNhc2UiLCJzbGljZSIsImZpbHRlciIsIm9yZGVyQnkiLCJsaW1pdCIsInRpbWVvdXQiLCJjIiwidCIsIk1hdGgiLCJtaW4iLCJvbkRvY0V2ZW50Iiwic3RhcnRTcGFuIiwiVGFncyIsIlNQQU5fS0lORCIsInRleHQiLCJzdWJzY3JpcHRpb24iLCJvYnNlcnZhYmxlIiwic3Vic2NyaWJlIiwibG9nIiwiZXZlbnQiLCJwYXlsb2FkIiwidW5zdWJzY3JpYmUiLCJmaW5pc2giLCJwYXJhbXNUaW1lb3V0Iiwid2FpdEZvclRpbWVvdXQiLCJkb2NzIiwibW9kdWxlTmFtZSJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFrQkE7O0FBQ0E7O0FBQ0E7O0FBQ0E7O0FBQ0E7O0FBQ0E7O0FBQ0E7O0FBQ0E7O0FBQ0E7O0FBQ0E7O0FBV0E7O0FBRUE7O0FBQ0E7O0FBekNBOzs7Ozs7Ozs7Ozs7Ozs7QUFpRE8sSUFBTUEsV0FBVyxHQUFHLFVBQXBCOzs7QUFFUCxTQUFTQyxhQUFULENBQTBCQyxJQUExQixFQUF1Q0MsaUJBQXZDLEVBQWtFQyxXQUFsRSxFQUEyRjtBQUN2RixTQUFRRixJQUFJLENBQUNHLE1BQUwsS0FBZ0IsQ0FBakIsSUFBd0JGLGlCQUFpQixJQUFJRCxJQUFJLENBQUMsQ0FBRCxDQUFqRCxHQUF3REEsSUFBSSxDQUFDLENBQUQsQ0FBNUQsR0FBa0VFLFdBQVcsRUFBcEY7QUFDSDs7SUFFb0JFLGdCOzs7OztBQUtqQiw0QkFBWUMsT0FBWixFQUF1QztBQUFBOztBQUFBO0FBQ25DLDRIQUFNQSxPQUFOO0FBRG1DO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBRW5DLFVBQUtDLGFBQUwsR0FBcUIsSUFBckI7QUFDQSxVQUFLQyxhQUFMLEdBQXFCLElBQXJCO0FBSG1DO0FBSXRDOzs7Ozs7Ozs7Ozs7QUFHRyxxQkFBS0MsTUFBTCxHQUFjLEtBQUtILE9BQUwsQ0FBYUksU0FBYixDQUF1QkMsMkJBQXZCLENBQWQ7QUFDQSxxQkFBS0MsWUFBTCxHQUFvQixJQUFJQywwQkFBSixDQUErQixJQUEvQixFQUFxQyxj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SUFBSSxDQUFDLENBQUQ7QUFKdUMsbUJBQVA7QUFBQSxpQkFBbkMsQyxFQUpidUksTSxtQkFBQUEsTSxFQUNBbkYsTSxtQkFBQUEsTSxFQUNTd0csYSxtQkFBVGxCLE8sRUFDQXpGLFUsbUJBQUFBLFU7QUFPRXlGLGdCQUFBQSxPLEdBQVVrQixhQUFhLElBQUksS0FBSzFCLE1BQUwsQ0FBWTFILE1BQVosQ0FBbUJxSixjQUFuQixFOzt1QkFDZCxLQUFLM0csS0FBTCxDQUFXO0FBQzFCcUYsa0JBQUFBLE1BQU0sRUFBTkEsTUFEMEI7QUFFMUJuRixrQkFBQUEsTUFBTSxFQUFOQSxNQUYwQjtBQUcxQnNGLGtCQUFBQSxPQUFPLEVBQVBBLE9BSDBCO0FBSTFCekYsa0JBQUFBLFVBQVUsRUFBVkE7QUFKMEIsaUJBQVgsQzs7O0FBQWI2RyxnQkFBQUEsSTs7c0JBTUZBLElBQUksQ0FBQzNKLE1BQUwsR0FBYyxDOzs7OzttREFDUDJKLElBQUksQ0FBQyxDQUFELEM7OztzQkFFVDNFLDBCQUFlMEUsY0FBZixFOzs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUlkekosZ0JBQWdCLENBQUMySixVQUFqQixHQUE4QixrQkFBOUIiLCJzb3VyY2VzQ29udGVudCI6WyIvKlxuICogQ29weXJpZ2h0IDIwMTgtMjAyMCBUT04gREVWIFNPTFVUSU9OUyBMVEQuXG4gKlxuICogTGljZW5zZWQgdW5kZXIgdGhlIFNPRlRXQVJFIEVWQUxVQVRJT04gTGljZW5zZSAodGhlIFwiTGljZW5zZVwiKTsgeW91IG1heSBub3QgdXNlXG4gKiB0aGlzIGZpbGUgZXhjZXB0IGluIGNvbXBsaWFuY2Ugd2l0aCB0aGUgTGljZW5zZS4gIFlvdSBtYXkgb2J0YWluIGEgY29weSBvZiB0aGVcbiAqIExpY2Vuc2UgYXQ6XG4gKlxuICogaHR0cDovL3d3dy50b24uZGV2L2xpY2Vuc2VzXG4gKlxuICogVW5sZXNzIHJlcXVpcmVkIGJ5IGFwcGxpY2FibGUgbGF3IG9yIGFncmVlZCB0byBpbiB3cml0aW5nLCBzb2Z0d2FyZVxuICogZGlzdHJpYnV0ZWQgdW5kZXIgdGhlIExpY2Vuc2UgaXMgZGlzdHJpYnV0ZWQgb24gYW4gXCJBUyBJU1wiIEJBU0lTLFxuICogV0lUSE9VVCBXQVJSQU5USUVTIE9SIENPTkRJVElPTlMgT0YgQU5ZIEtJTkQsIGVpdGhlciBleHByZXNzIG9yIGltcGxpZWQuXG4gKiBTZWUgdGhlIExpY2Vuc2UgZm9yIHRoZSBzcGVjaWZpYyBUT04gREVWIHNvZnR3YXJlIGdvdmVybmluZyBwZXJtaXNzaW9ucyBhbmRcbiAqIGxpbWl0YXRpb25zIHVuZGVyIHRoZSBMaWNlbnNlLlxuICovXG5cbi8vIEBmbG93XG5cbmltcG9ydCB7IEluTWVtb3J5Q2FjaGUgfSBmcm9tICdhcG9sbG8tY2FjaGUtaW5tZW1vcnknO1xuaW1wb3J0IHsgQXBvbGxvQ2xpZW50IH0gZnJvbSAnYXBvbGxvLWNsaWVudCc7XG5pbXBvcnQgeyBBcG9sbG9MaW5rLCBzcGxpdCB9IGZyb20gJ2Fwb2xsby1saW5rJztcbmltcG9ydCB7IEh0dHBMaW5rIH0gZnJvbSAnYXBvbGxvLWxpbmstaHR0cCc7XG5pbXBvcnQgeyBXZWJTb2NrZXRMaW5rIH0gZnJvbSAnYXBvbGxvLWxpbmstd3MnO1xuaW1wb3J0IHsgZ2V0TWFpbkRlZmluaXRpb24gfSBmcm9tICdhcG9sbG8tdXRpbGl0aWVzJztcbmltcG9ydCBncWwgZnJvbSAnZ3JhcGhxbC10YWcnO1xuaW1wb3J0IHsgU3Vic2NyaXB0aW9uQ2xpZW50IH0gZnJvbSAnc3Vic2NyaXB0aW9ucy10cmFuc3BvcnQtd3MnO1xuaW1wb3J0IHsgc2V0Q29udGV4dCB9IGZyb20gJ2Fwb2xsby1saW5rLWNvbnRleHQnO1xuaW1wb3J0IHtcbiAgICBGT1JNQVRfVEVYVF9NQVAsIFRhZ3MsIFNwYW4sIFNwYW5Db250ZXh0LFxufSBmcm9tICdvcGVudHJhY2luZyc7XG5pbXBvcnQgdHlwZSB7XG4gICAgVE9OUXVlcmllcyxcbiAgICBUT05RQ29sbGVjdGlvbixcbiAgICBTdWJzY3JpcHRpb24sXG4gICAgVE9OUXVlcnlQYXJhbXMsXG4gICAgVE9OU3Vic2NyaWJlUGFyYW1zLFxuICAgIFRPTldhaXRGb3JQYXJhbXMsXG59IGZyb20gJy4uLy4uL3R5cGVzJztcbmltcG9ydCB7IFRPTkNsaWVudCwgVE9OQ2xpZW50RXJyb3IgfSBmcm9tICcuLi9UT05DbGllbnQnO1xuaW1wb3J0IHR5cGUgeyBUT05Nb2R1bGVDb250ZXh0IH0gZnJvbSAnLi4vVE9OTW9kdWxlJztcbmltcG9ydCB7IFRPTk1vZHVsZSB9IGZyb20gJy4uL1RPTk1vZHVsZSc7XG5pbXBvcnQgVE9OQ29uZmlnTW9kdWxlLCB7IFVSTFBhcnRzIH0gZnJvbSAnLi9UT05Db25maWdNb2R1bGUnO1xuXG5cbmV4cG9ydCB0eXBlIFJlcXVlc3QgPSB7XG4gICAgaWQ6IHN0cmluZyxcbiAgICBib2R5OiBzdHJpbmcsXG59XG5cbmV4cG9ydCBjb25zdCBNQVhfVElNRU9VVCA9IDIxNDc0ODM2NDc7XG5cbmZ1bmN0aW9uIHJlc29sdmVQYXJhbXM8VD4oYXJnczogYW55W10sIHJlcXVpcmVkUGFyYW1OYW1lOiBzdHJpbmcsIHJlc29sdmVBcmdzOiAoKSA9PiBUKTogVCB7XG4gICAgcmV0dXJuIChhcmdzLmxlbmd0aCA9PT0gMSkgJiYgKHJlcXVpcmVkUGFyYW1OYW1lIGluIGFyZ3NbMF0pID8gYXJnc1swXSA6IHJlc29sdmVBcmdzKCk7XG59XG5cbmV4cG9ydCBkZWZhdWx0IGNsYXNzIFRPTlF1ZXJpZXNNb2R1bGUgZXh0ZW5kcyBUT05Nb2R1bGUgaW1wbGVtZW50cyBUT05RdWVyaWVzIHtcbiAgICBjb25maWc6IFRPTkNvbmZpZ01vZHVsZTtcblxuICAgIG92ZXJyaWRlV3NVcmw6ID9zdHJpbmc7XG5cbiAgICBjb25zdHJ1Y3Rvcihjb250ZXh0OiBUT05Nb2R1bGVDb250ZXh0KSB7XG4gICAgICAgIHN1cGVyKGNvbnRleHQpO1xuICAgICAgICB0aGlzLmdyYXBocWxDbGllbnQgPSBudWxsO1xuICAgICAgICB0aGlzLm92ZXJyaWRlV3NVcmwgPSBudWxsO1xuICAgIH1cblxuICAgIGFzeW5jIHNldHVwKCkge1xuICAgICAgICB0aGlzLmNvbmZpZyA9IHRoaXMuY29udGV4dC5nZXRNb2R1bGUoVE9OQ29uZmlnTW9kdWxlKTtcbiAgICAgICAgdGhpcy50cmFuc2FjdGlvbnMgPSBuZXcgVE9OUXVlcmllc01vZHVsZUNvbGxlY3Rpb24odGhpcywgJ3RyYW5zYWN0aW9ucycpO1xuICAgICAgICB0aGlzLm1lc3NhZ2VzID0gbmV3IFRPTlF1ZXJpZXNNb2R1bGVDb2xsZWN0aW9uKHRoaXMsICdtZXNzYWdlcycpO1xuICAgICAgICB0aGlzLmJsb2NrcyA9IG5ldyBUT05RdWVyaWVzTW9kdWxlQ29sbGVjdGlvbih0aGlzLCAnYmxvY2tzJyk7XG4gICAgICAgIHRoaXMuYWNjb3VudHMgPSBuZXcgVE9OUXVlcmllc01vZHVsZUNvbGxlY3Rpb24odGhpcywgJ2FjY291bnRzJyk7XG4gICAgfVxuXG4gICAgYXN5bmMgZGV0ZWN0UmVkaXJlY3QoZmV0Y2g6IGFueSwgc291cmNlVXJsOiBzdHJpbmcpOiBQcm9taXNlPHN0cmluZz4ge1xuICAgICAgICBjb25zdCByZXNwb25zZSA9IGF3YWl0IGZldGNoKHNvdXJjZVVybCk7XG4gICAgICAgIGlmIChyZXNwb25zZS5yZWRpcmVjdGVkID09PSB0cnVlKSB7XG4gICAgICAgICAgICByZXR1cm4gcmVzcG9uc2UudXJsO1xuICAgICAgICB9XG4gICAgICAgIGlmIChyZXNwb25zZS5yZWRpcmVjdGVkID09PSBmYWxzZSkge1xuICAgICAgICAgICAgcmV0dXJuICcnO1xuICAgICAgICB9XG4gICAgICAgIGNvbnN0IHNvdXJjZUxvY2F0aW9uID0gVVJMUGFydHMucGFyc2Uoc291cmNlVXJsKVxuICAgICAgICAgICAgLmZpeFF1ZXJ5KF8gPT4gJycpXG4gICAgICAgICAgICAudG9TdHJpbmcoKVxuICAgICAgICAgICAgLnRvTG93ZXJDYXNlKCk7XG4gICAgICAgIGNvbnN0IHJlc3BvbnNlTG9jYXRpb24gPSBVUkxQYXJ0cy5wYXJzZShyZXNwb25zZS51cmwpXG4gICAgICAgICAgICAuZml4UXVlcnkoXyA9PiAnJylcbiAgICAgICAgICAgIC50b1N0cmluZygpXG4gICAgICAgICAgICAudG9Mb3dlckNhc2UoKTtcbiAgICAgICAgcmV0dXJuIHJlc3BvbnNlTG9jYXRpb24gIT09IHNvdXJjZUxvY2F0aW9uID8gcmVzcG9uc2UudXJsIDogJyc7XG4gICAgfVxuXG4gICAgYXN5bmMgZ2V0Q2xpZW50Q29uZmlnKCkge1xuICAgICAgICBjb25zdCBjb25maWcgPSB0aGlzLmNvbmZpZztcbiAgICAgICAgY29uc3QgY2xpZW50UGxhdGZvcm0gPSBUT05DbGllbnQuY2xpZW50UGxhdGZvcm07XG4gICAgICAgIGlmICghY2xpZW50UGxhdGZvcm0pIHtcbiAgICAgICAgICAgIHRocm93IEVycm9yKCdUT04gQ2xpZW50IGRvZXMgbm90IGNvbmZpZ3VyZWQnKTtcbiAgICAgICAgfVxuICAgICAgICBjb25zdCBmZXRjaCA9IGNsaWVudFBsYXRmb3JtLmZldGNoO1xuXG4gICAgICAgIGZ1bmN0aW9uIGdldENvbmZpZ0ZvclNlcnZlcihzZXJ2ZXI6IHN0cmluZykge1xuICAgICAgICAgICAgY29uc3QgaHR0cFBhcnRzID0gVVJMUGFydHMucGFyc2Uoc2VydmVyKVxuICAgICAgICAgICAgICAgIC5maXhQcm90b2NvbCh4ID0+IHggPT09ICdodHRwOi8vJyA/IHggOiAnaHR0cHM6Ly8nKVxuICAgICAgICAgICAgICAgIC5maXhQYXRoKHggPT4gYCR7eH0vZ3JhcGhxbGApO1xuICAgICAgICAgICAgY29uc3QgaHR0cCA9IGh0dHBQYXJ0cy50b1N0cmluZygpO1xuICAgICAgICAgICAgY29uc3Qgd3MgPSBodHRwUGFydHNcbiAgICAgICAgICAgICAgICAuZml4UHJvdG9jb2woeCA9PiB4ID09PSAnaHR0cDovLycgPyAnd3M6Ly8nIDogJ3dzczovLycpXG4gICAgICAgICAgICAgICAgLnRvU3RyaW5nKCk7XG4gICAgICAgICAgICByZXR1cm4ge1xuICAgICAgICAgICAgICAgIGh0dHBVcmw6IGh0dHAsXG4gICAgICAgICAgICAgICAgd3NVcmw6IHdzLFxuICAgICAgICAgICAgICAgIGZldGNoOiBjbGllbnRQbGF0Zm9ybS5mZXRjaCxcbiAgICAgICAgICAgICAgICBXZWJTb2NrZXQ6IGNsaWVudFBsYXRmb3JtLldlYlNvY2tldCxcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuXG4gICAgICAgIGZvciAoY29uc3Qgc2VydmVyIG9mIGNvbmZpZy5kYXRhLnNlcnZlcnMpIHtcbiAgICAgICAgICAgIHRyeSB7XG4gICAgICAgICAgICAgICAgY29uc3QgY2xpZW50Q29uZmlnID0gZ2V0Q29uZmlnRm9yU2VydmVyKHNlcnZlcik7XG4gICAgICAgICAgICAgICAgY29uc3QgcmVkaXJlY3RlZCA9IGF3YWl0IHRoaXMuZGV0ZWN0UmVkaXJlY3QoXG4gICAgICAgICAgICAgICAgICAgIGZldGNoLFxuICAgICAgICAgICAgICAgICAgICBgJHtjbGllbnRDb25maWcuaHR0cFVybH0/cXVlcnk9JTdCaW5mbyU3QnZlcnNpb24lN0QlN0RgLFxuICAgICAgICAgICAgICAgICk7XG4gICAgICAgICAgICAgICAgaWYgKHJlZGlyZWN0ZWQgIT09ICcnKSB7XG4gICAgICAgICAgICAgICAgICAgIGNvbnN0IGh0dHBQYXJ0cyA9IFVSTFBhcnRzLnBhcnNlKHJlZGlyZWN0ZWQpLmZpeFF1ZXJ5KF8gPT4gJycpO1xuICAgICAgICAgICAgICAgICAgICBjbGllbnRDb25maWcuaHR0cFVybCA9IGh0dHBQYXJ0cy50b1N0cmluZygpO1xuICAgICAgICAgICAgICAgICAgICBjbGllbnRDb25maWcud3NVcmwgPSBodHRwUGFydHNcbiAgICAgICAgICAgICAgICAgICAgICAgIC5maXhQcm90b2NvbCh4ID0+IHggPT09ICdodHRwOi8vJyA/ICd3czovLycgOiAnd3NzOi8vJylcbiAgICAgICAgICAgICAgICAgICAgICAgIC50b1N0cmluZygpO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICByZXR1cm4gY2xpZW50Q29uZmlnO1xuICAgICAgICAgICAgfSBjYXRjaCAoZXJyb3IpIHtcbiAgICAgICAgICAgICAgICBjb25zb2xlLmVycm9yKGBbZ2V0Q2xpZW50Q29uZmlnXSBmb3Igc2VydmVyIFwiJHtzZXJ2ZXJ9XCIgZmFpbGVkYCwgZXJyb3IpO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICAgIHJldHVybiBnZXRDb25maWdGb3JTZXJ2ZXIoY29uZmlnLmRhdGEuc2VydmVyc1swXSk7XG4gICAgfVxuXG4gICAgYXN5bmMgZ2V0QWNjb3VudHNDb3VudChwYXJlbnRTcGFuPzogKFNwYW4gfCBTcGFuQ29udGV4dCkpOiBQcm9taXNlPG51bWJlcj4ge1xuICAgICAgICBjb25zdCByZXN1bHQgPSBhd2FpdCB0aGlzLnF1ZXJ5KCdxdWVyeXtnZXRBY2NvdW50c0NvdW50fScsIHVuZGVmaW5lZCwgcGFyZW50U3Bhbik7XG4gICAgICAgIHJldHVybiByZXN1bHQuZGF0YS5nZXRBY2NvdW50c0NvdW50O1xuICAgIH1cblxuICAgIGFzeW5jIGdldFRyYW5zYWN0aW9uc0NvdW50KHBhcmVudFNwYW4/OiAoU3BhbiB8IFNwYW5Db250ZXh0KSk6IFByb21pc2U8bnVtYmVyPiB7XG4gICAgICAgIGNvbnN0IHJlc3VsdCA9IGF3YWl0IHRoaXMucXVlcnkoJ3F1ZXJ5e2dldFRyYW5zYWN0aW9uc0NvdW50fScsIHVuZGVmaW5lZCwgcGFyZW50U3Bhbik7XG4gICAgICAgIHJldHVybiByZXN1bHQuZGF0YS5nZXRUcmFuc2FjdGlvbnNDb3VudDtcbiAgICB9XG5cbiAgICBhc3luYyBnZXRBY2NvdW50c1RvdGFsQmFsYW5jZShwYXJlbnRTcGFuPzogKFNwYW4gfCBTcGFuQ29udGV4dCkpOiBQcm9taXNlPHN0cmluZz4ge1xuICAgICAgICBjb25zdCByZXN1bHQgPSBhd2FpdCB0aGlzLnF1ZXJ5KCdxdWVyeXtnZXRBY2NvdW50c1RvdGFsQmFsYW5jZX0nLCB1bmRlZmluZWQsIHBhcmVudFNwYW4pO1xuICAgICAgICByZXR1cm4gcmVzdWx0LmRhdGEuZ2V0QWNjb3VudHNUb3RhbEJhbGFuY2U7XG4gICAgfVxuXG4gICAgYXN5bmMgcG9zdFJlcXVlc3RzKHJlcXVlc3RzOiBSZXF1ZXN0W10sIHBhcmVudFNwYW4/OiAoU3BhbiB8IFNwYW5Db250ZXh0KSk6IFByb21pc2U8YW55PiB7XG4gICAgICAgIHJldHVybiB0aGlzLmNvbnRleHQudHJhY2UoJ3F1ZXJpZXMucG9zdFJlcXVlc3RzJywgYXN5bmMgKHNwYW4pID0+IHtcbiAgICAgICAgICAgIHJldHVybiB0aGlzLmdyYXBocWxNdXRhdGlvbihgbXV0YXRpb24gcG9zdFJlcXVlc3RzKCRyZXF1ZXN0czogW1JlcXVlc3RdKSB7XG4gICAgICAgICAgICAgICAgcG9zdFJlcXVlc3RzKHJlcXVlc3RzOiAkcmVxdWVzdHMpXG4gICAgICAgICAgICB9YCwge1xuICAgICAgICAgICAgICAgIHJlcXVlc3RzLFxuICAgICAgICAgICAgfSwgc3Bhbik7XG4gICAgICAgIH0sIHBhcmVudFNwYW4pO1xuICAgIH1cblxuICAgIGFzeW5jIG11dGF0aW9uKFxuICAgICAgICBxbDogc3RyaW5nLFxuICAgICAgICB2YXJpYWJsZXM6IHsgW3N0cmluZ106IGFueSB9ID0ge30sXG4gICAgICAgIHBhcmVudFNwYW4/OiAoU3BhbiB8IFNwYW5Db250ZXh0KSxcbiAgICApOiBQcm9taXNlPGFueT4ge1xuICAgICAgICByZXR1cm4gdGhpcy5jb250ZXh0LnRyYWNlKCdxdWVyaWVzLm11dGF0aW9uJywgYXN5bmMgKHNwYW46IFNwYW4pID0+IHtcbiAgICAgICAgICAgIHNwYW4uc2V0VGFnKCdwYXJhbXMnLCB7XG4gICAgICAgICAgICAgICAgbXV0YXRpb246IHFsLFxuICAgICAgICAgICAgICAgIHZhcmlhYmxlcyxcbiAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgcmV0dXJuIHRoaXMuZ3JhcGhxbE11dGF0aW9uKHFsLCB2YXJpYWJsZXMsIHNwYW4pO1xuICAgICAgICB9LCBwYXJlbnRTcGFuKTtcbiAgICB9XG5cbiAgICBhc3luYyBxdWVyeShcbiAgICAgICAgcWw6IHN0cmluZyxcbiAgICAgICAgdmFyaWFibGVzOiB7IFtzdHJpbmddOiBhbnkgfSA9IHt9LFxuICAgICAgICBwYXJlbnRTcGFuPzogKFNwYW4gfCBTcGFuQ29udGV4dCksXG4gICAgKTogUHJvbWlzZTxhbnk+IHtcbiAgICAgICAgcmV0dXJuIHRoaXMuY29udGV4dC50cmFjZSgncXVlcmllcy5xdWVyeScsIGFzeW5jIChzcGFuOiBTcGFuKSA9PiB7XG4gICAgICAgICAgICBzcGFuLnNldFRhZygncGFyYW1zJywge1xuICAgICAgICAgICAgICAgIHF1ZXJ5OiBxbCxcbiAgICAgICAgICAgICAgICB2YXJpYWJsZXMsXG4gICAgICAgICAgICB9KTtcbiAgICAgICAgICAgIHJldHVybiB0aGlzLmdyYXBocWxRdWVyeShxbCwgdmFyaWFibGVzLCBzcGFuKTtcbiAgICAgICAgfSwgcGFyZW50U3Bhbik7XG4gICAgfVxuXG4gICAgYXN5bmMgZ3JhcGhxbE11dGF0aW9uKHFsOiBzdHJpbmcsIHZhcmlhYmxlczogeyBbc3RyaW5nXTogYW55IH0gPSB7fSwgc3BhbjogU3Bhbik6IFByb21pc2U8YW55PiB7XG4gICAgICAgIGNvbnN0IG11dGF0aW9uID0gZ3FsKFtxbF0pO1xuICAgICAgICByZXR1cm4gdGhpcy5ncmFwaFFsKChjbGllbnQpID0+IGNsaWVudC5tdXRhdGUoe1xuICAgICAgICAgICAgbXV0YXRpb24sXG4gICAgICAgICAgICB2YXJpYWJsZXMsXG4gICAgICAgICAgICBjb250ZXh0OiB7XG4gICAgICAgICAgICAgICAgdHJhY2VTcGFuOiBzcGFuLFxuICAgICAgICAgICAgfSxcbiAgICAgICAgfSkpO1xuICAgIH1cblxuICAgIGFzeW5jIGdyYXBocWxRdWVyeShxbDogc3RyaW5nLCB2YXJpYWJsZXM6IHsgW3N0cmluZ106IGFueSB9ID0ge30sIHNwYW46IFNwYW4pOiBQcm9taXNlPGFueT4ge1xuICAgICAgICBjb25zdCBxdWVyeSA9IGdxbChbcWxdKTtcbiAgICAgICAgcmV0dXJuIHRoaXMuZ3JhcGhRbCgoY2xpZW50KSA9PiBjbGllbnQucXVlcnkoe1xuICAgICAgICAgICAgcXVlcnksXG4gICAgICAgICAgICB2YXJpYWJsZXMsXG4gICAgICAgICAgICBjb250ZXh0OiB7XG4gICAgICAgICAgICAgICAgdHJhY2VTcGFuOiBzcGFuLFxuICAgICAgICAgICAgfSxcbiAgICAgICAgfSksIHNwYW4pO1xuICAgIH1cblxuICAgIGFzeW5jIGdyYXBoUWwocmVxdWVzdDogKGNsaWVudDogQXBvbGxvQ2xpZW50KSA9PiBQcm9taXNlPGFueT4sIHNwYW46IFNwYW4pOiBQcm9taXNlPGFueT4ge1xuICAgICAgICBjb25zdCBjbGllbnQgPSBhd2FpdCB0aGlzLmdyYXBocWxDbGllbnRSZXF1aXJlZChzcGFuKTtcbiAgICAgICAgdHJ5IHtcbiAgICAgICAgICAgIHJldHVybiBhd2FpdCByZXF1ZXN0KGNsaWVudCk7XG4gICAgICAgIH0gY2F0Y2ggKGVycm9yKSB7XG4gICAgICAgICAgICBjb25zdCBncWxFcnIgPSBlcnJvci5ncmFwaFFMRXJyb3JzICYmIGVycm9yLmdyYXBoUUxFcnJvcnNbMF07XG4gICAgICAgICAgICBpZiAoZ3FsRXJyKSB7XG4gICAgICAgICAgICAgICAgY29uc3QgY2xpZW50RXJyID0gbmV3IEVycm9yKGdxbEVyci5tZXNzYWdlKTtcbiAgICAgICAgICAgICAgICBjb25zdCBncWxFeGMgPSAoZ3FsRXJyLmV4dGVuc2lvbnMgJiYgZ3FsRXJyLmV4dGVuc2lvbnMuZXhjZXB0aW9uKSB8fCB7fTtcbiAgICAgICAgICAgICAgICAoY2xpZW50RXJyOiBhbnkpLm51bWJlciA9IGdxbEV4Yy5jb2RlIHx8IDA7XG4gICAgICAgICAgICAgICAgKGNsaWVudEVycjogYW55KS5jb2RlID0gZ3FsRXhjLmNvZGUgfHwgMDtcbiAgICAgICAgICAgICAgICAoY2xpZW50RXJyOiBhbnkpLnNvdXJjZSA9IGdxbEV4Yy5zb3VyY2UgfHwgJ2NsaWVudCc7XG4gICAgICAgICAgICAgICAgdGhyb3cgY2xpZW50RXJyO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgY29uc3QgZXJyb3JzID0gZXJyb3JcbiAgICAgICAgICAgICAgICAmJiBlcnJvci5uZXR3b3JrRXJyb3JcbiAgICAgICAgICAgICAgICAmJiBlcnJvci5uZXR3b3JrRXJyb3IucmVzdWx0XG4gICAgICAgICAgICAgICAgJiYgZXJyb3IubmV0d29ya0Vycm9yLnJlc3VsdC5lcnJvcnM7XG4gICAgICAgICAgICBpZiAoZXJyb3JzKSB7XG4gICAgICAgICAgICAgICAgdGhyb3cgVE9OQ2xpZW50RXJyb3IucXVlcnlGYWlsZWQoZXJyb3JzKTtcbiAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgICAgdGhyb3cgZXJyb3I7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICBhc3luYyBncmFwaHFsQ2xpZW50UmVxdWlyZWQocGFyZW50U3BhbjogU3Bhbik6IFByb21pc2U8QXBvbGxvQ2xpZW50PiB7XG4gICAgICAgIGlmICh0aGlzLmdyYXBocWxDbGllbnQpIHtcbiAgICAgICAgICAgIHJldHVybiB0aGlzLmdyYXBocWxDbGllbnQ7XG4gICAgICAgIH1cbiAgICAgICAgYXdhaXQgdGhpcy5jb250ZXh0LnRyYWNlKCdzZXR1cCBjbGllbnQnLCBhc3luYyAoc3BhbikgPT4ge1xuICAgICAgICAgICAgcmV0dXJuIHRoaXMuY3JlYXRlR3JhcGhxbENsaWVudChzcGFuKTtcbiAgICAgICAgfSwgcGFyZW50U3Bhbik7XG4gICAgICAgIHJldHVybiB0aGlzLmdyYXBocWxDbGllbnQ7XG4gICAgfVxuXG4gICAgYXN5bmMgY3JlYXRlR3JhcGhxbENsaWVudChzcGFuOiBTcGFuIHwgU3BhbkNvbnRleHQpIHtcbiAgICAgICAgY29uc3QgdXNlSHR0cCA9IHRydWU7XG4gICAgICAgIGxldCBjbGllbnRDb25maWcgPSBhd2FpdCB0aGlzLmdldENsaWVudENvbmZpZygpO1xuICAgICAgICBsZXQgd3NMaW5rOiA/V2ViU29ja2V0TGluayA9IG51bGw7XG4gICAgICAgIGxldCBodHRwTGluazogP0h0dHBMaW5rID0gbnVsbDtcblxuICAgICAgICBjb25zdCBzdWJzT3B0aW9ucyA9IHRoaXMuY29uZmlnLnRyYWNlci5pbmplY3Qoc3BhbiwgRk9STUFUX1RFWFRfTUFQLCB7fSk7XG4gICAgICAgIGNvbnN0IHN1YnNjcmlwdGlvbkNsaWVudCA9IG5ldyBTdWJzY3JpcHRpb25DbGllbnQoXG4gICAgICAgICAgICBjbGllbnRDb25maWcud3NVcmwsXG4gICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgcmVjb25uZWN0OiB0cnVlLFxuICAgICAgICAgICAgICAgIGNvbm5lY3Rpb25QYXJhbXM6ICgpID0+ICh7XG4gICAgICAgICAgICAgICAgICAgIGFjY2Vzc0tleTogdGhpcy5jb25maWcuZGF0YSAmJiB0aGlzLmNvbmZpZy5kYXRhLmFjY2Vzc0tleSxcbiAgICAgICAgICAgICAgICAgICAgaGVhZGVyczogc3Vic09wdGlvbnMsXG4gICAgICAgICAgICAgICAgfSksXG4gICAgICAgICAgICB9LFxuICAgICAgICAgICAgY2xpZW50Q29uZmlnLldlYlNvY2tldCxcbiAgICAgICAgKTtcbiAgICAgICAgc3Vic2NyaXB0aW9uQ2xpZW50Lm9uUmVjb25uZWN0ZWQoKCkgPT4ge1xuICAgICAgICAgICAgY29uc29sZS5lcnJvcignW1RPTkNsaWVudC5xdWVyaWVzXScsICdXZWJTb2NrZXQgUmVjb25uZWN0ZWQnKTtcbiAgICAgICAgfSk7XG4gICAgICAgIGxldCBkZXRlY3RpbmdSZWRpcmVjdGlvbiA9IGZhbHNlO1xuICAgICAgICBzdWJzY3JpcHRpb25DbGllbnQub25FcnJvcigoKSA9PiB7XG4gICAgICAgICAgICBjb25zb2xlLmVycm9yKCdbVE9OQ2xpZW50LnF1ZXJpZXNdJywgJ1dlYlNvY2tldCBGYWlsZWQnKTtcbiAgICAgICAgICAgIGlmIChkZXRlY3RpbmdSZWRpcmVjdGlvbikge1xuICAgICAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIChhc3luYyAoKSA9PiB7XG4gICAgICAgICAgICAgICAgZGV0ZWN0aW5nUmVkaXJlY3Rpb24gPSB0cnVlO1xuICAgICAgICAgICAgICAgIHRyeSB7XG4gICAgICAgICAgICAgICAgICAgIGNvbnN0IG5ld0NvbmZpZyA9IGF3YWl0IHRoaXMuZ2V0Q2xpZW50Q29uZmlnKCk7XG4gICAgICAgICAgICAgICAgICAgIGNvbnN0IGNvbmZpZ0lzQ2hhbmdlZCA9IG5ld0NvbmZpZy5odHRwVXJsICE9PSBjbGllbnRDb25maWcuaHR0cFVybFxuICAgICAgICAgICAgICAgICAgICAgICAgfHwgbmV3Q29uZmlnLndzVXJsICE9PSBjbGllbnRDb25maWcud3NVcmw7XG4gICAgICAgICAgICAgICAgICAgIGlmIChjb25maWdJc0NoYW5nZWQpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIGNvbnNvbGUuZXJyb3IoJ1tUT05DbGllbnQucXVlcmllc10nLCAnQ2xpZW50IGNvbmZpZyBjaGFuZ2VkJyk7XG4gICAgICAgICAgICAgICAgICAgICAgICBjbGllbnRDb25maWcgPSBuZXdDb25maWc7XG4gICAgICAgICAgICAgICAgICAgICAgICBzdWJzY3JpcHRpb25DbGllbnQudXJsID0gbmV3Q29uZmlnLndzVXJsO1xuICAgICAgICAgICAgICAgICAgICAgICAgaWYgKHdzTGluaykge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHdzTGluay51cmwgPSBuZXdDb25maWcud3NVcmw7XG4gICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICAgICBpZiAoaHR0cExpbmspIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBodHRwTGluay51cmkgPSBuZXdDb25maWcuaHR0cFVybDtcbiAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIH0gY2F0Y2ggKGVycikge1xuICAgICAgICAgICAgICAgICAgICBjb25zb2xlLmVycm9yKCdbVE9OQ2xpZW50LnF1ZXJpZXNdIHJlZGlyZWN0aW9uIGRldGVjdG9yIGZhaWxlZCcsIGVycik7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIGRldGVjdGluZ1JlZGlyZWN0aW9uID0gZmFsc2U7XG4gICAgICAgICAgICB9KSgpO1xuICAgICAgICB9KTtcbiAgICAgICAgc3Vic2NyaXB0aW9uQ2xpZW50Lm1heENvbm5lY3RUaW1lR2VuZXJhdG9yLmR1cmF0aW9uID0gKCkgPT4ge1xuICAgICAgICAgICAgcmV0dXJuIHN1YnNjcmlwdGlvbkNsaWVudC5tYXhDb25uZWN0VGltZUdlbmVyYXRvci5tYXg7XG4gICAgICAgIH07XG5cbiAgICAgICAgY29uc3QgdHJhY2VyTGluayA9IGF3YWl0IHNldENvbnRleHQoKF8sIHJlcSkgPT4ge1xuICAgICAgICAgICAgY29uc3QgcmVzb2x2ZWRTcGFuID0gKHJlcSAmJiByZXEudHJhY2VTcGFuKSB8fCBzcGFuO1xuICAgICAgICAgICAgcmVxLmhlYWRlcnMgPSB7fTtcbiAgICAgICAgICAgIHRoaXMuY29uZmlnLnRyYWNlci5pbmplY3QocmVzb2x2ZWRTcGFuLCBGT1JNQVRfVEVYVF9NQVAsIHJlcS5oZWFkZXJzKTtcbiAgICAgICAgICAgIGNvbnN0IGFjY2Vzc0tleSA9IHRoaXMuY29uZmlnLmRhdGEgJiYgdGhpcy5jb25maWcuZGF0YS5hY2Nlc3NLZXk7XG4gICAgICAgICAgICBpZiAoYWNjZXNzS2V5KSB7XG4gICAgICAgICAgICAgICAgcmVxLmhlYWRlcnMuYWNjZXNzS2V5ID0gYWNjZXNzS2V5O1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgcmV0dXJuIHtcbiAgICAgICAgICAgICAgICBoZWFkZXJzOiByZXEuaGVhZGVycyxcbiAgICAgICAgICAgIH07XG4gICAgICAgIH0pO1xuICAgICAgICBjb25zdCB3cmFwTGluayA9IChsaW5rOiBBcG9sbG9MaW5rKTogQXBvbGxvTGluayA9PiB0cmFjZXJMaW5rLmNvbmNhdChsaW5rKTtcbiAgICAgICAgY29uc3QgaXNTdWJzY3JpcHRpb24gPSAoeyBxdWVyeSB9KSA9PiB7XG4gICAgICAgICAgICBjb25zdCBkZWZpbml0aW9uID0gZ2V0TWFpbkRlZmluaXRpb24ocXVlcnkpO1xuICAgICAgICAgICAgcmV0dXJuIChcbiAgICAgICAgICAgICAgICBkZWZpbml0aW9uLmtpbmQgPT09ICdPcGVyYXRpb25EZWZpbml0aW9uJ1xuICAgICAgICAgICAgICAgICYmIGRlZmluaXRpb24ub3BlcmF0aW9uID09PSAnc3Vic2NyaXB0aW9uJ1xuICAgICAgICAgICAgKTtcbiAgICAgICAgfTtcbiAgICAgICAgd3NMaW5rID0gbmV3IFdlYlNvY2tldExpbmsoc3Vic2NyaXB0aW9uQ2xpZW50KTtcbiAgICAgICAgaHR0cExpbmsgPSB1c2VIdHRwXG4gICAgICAgICAgICA/IG5ldyBIdHRwTGluayh7XG4gICAgICAgICAgICAgICAgdXJpOiBjbGllbnRDb25maWcuaHR0cFVybCxcbiAgICAgICAgICAgICAgICBmZXRjaDogY2xpZW50Q29uZmlnLmZldGNoLFxuICAgICAgICAgICAgfSlcbiAgICAgICAgICAgIDogbnVsbDtcblxuICAgICAgICBjb25zdCBsaW5rID0gaHR0cExpbmtcbiAgICAgICAgICAgID8gc3BsaXQoaXNTdWJzY3JpcHRpb24sIHdyYXBMaW5rKHdzTGluayksIHdyYXBMaW5rKGh0dHBMaW5rKSlcbiAgICAgICAgICAgIDogd3JhcExpbmsod3NMaW5rKTtcbiAgICAgICAgdGhpcy5ncmFwaHFsQ2xpZW50ID0gbmV3IEFwb2xsb0NsaWVudCh7XG4gICAgICAgICAgICBjYWNoZTogbmV3IEluTWVtb3J5Q2FjaGUoe30pLFxuICAgICAgICAgICAgbGluayxcbiAgICAgICAgICAgIGRlZmF1bHRPcHRpb25zOiB7XG4gICAgICAgICAgICAgICAgd2F0Y2hRdWVyeToge1xuICAgICAgICAgICAgICAgICAgICBmZXRjaFBvbGljeTogJ25vLWNhY2hlJyxcbiAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgIHF1ZXJ5OiB7XG4gICAgICAgICAgICAgICAgICAgIGZldGNoUG9saWN5OiAnbm8tY2FjaGUnLFxuICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICB9LFxuICAgICAgICB9KTtcbiAgICB9XG5cbiAgICBhc3luYyBjbG9zZSgpIHtcbiAgICAgICAgaWYgKHRoaXMuZ3JhcGhxbENsaWVudCkge1xuICAgICAgICAgICAgY29uc3QgY2xpZW50ID0gdGhpcy5ncmFwaHFsQ2xpZW50O1xuICAgICAgICAgICAgdGhpcy5ncmFwaHFsQ2xpZW50ID0gbnVsbDtcbiAgICAgICAgICAgIGNsaWVudC5zdG9wKCk7XG4gICAgICAgICAgICBhd2FpdCBjbGllbnQuY2xlYXJTdG9yZSgpO1xuICAgICAgICB9XG4gICAgfVxuXG4gICAgdHJhbnNhY3Rpb25zOiBUT05RQ29sbGVjdGlvbjtcblxuICAgIG1lc3NhZ2VzOiBUT05RQ29sbGVjdGlvbjtcblxuICAgIGJsb2NrczogVE9OUUNvbGxlY3Rpb247XG5cbiAgICBhY2NvdW50czogVE9OUUNvbGxlY3Rpb247XG5cbiAgICBncmFwaHFsQ2xpZW50OiBBcG9sbG9DbGllbnQ7XG59XG5cblxuY2xhc3MgVE9OUXVlcmllc01vZHVsZUNvbGxlY3Rpb24gaW1wbGVtZW50cyBUT05RQ29sbGVjdGlvbiB7XG4gICAgbW9kdWxlOiBUT05RdWVyaWVzTW9kdWxlO1xuXG4gICAgY29sbGVjdGlvbk5hbWU6IHN0cmluZztcblxuICAgIHR5cGVOYW1lOiBzdHJpbmc7XG5cbiAgICBjb25zdHJ1Y3Rvcihtb2R1bGU6IFRPTlF1ZXJpZXNNb2R1bGUsIGNvbGxlY3Rpb25OYW1lOiBzdHJpbmcpIHtcbiAgICAgICAgdGhpcy5tb2R1bGUgPSBtb2R1bGU7XG4gICAgICAgIHRoaXMuY29sbGVjdGlvbk5hbWUgPSBjb2xsZWN0aW9uTmFtZTtcbiAgICAgICAgdGhpcy50eXBlTmFtZSA9IGAke2NvbGxlY3Rpb25OYW1lWzBdLnRvVXBwZXJDYXNlKCl9JHtjb2xsZWN0aW9uTmFtZS5zbGljZSgxLCAtMSl9YDtcbiAgICB9XG5cbiAgICBhc3luYyBxdWVyeShcbiAgICAgICAgLi4uYXJnc1xuICAgICAgICAvKlxuICAgICAgICAgICAgZmlsdGVyT3JQYXJhbXM6IGFueSB8IFRPTlF1ZXJ5UGFyYW1zLFxuICAgICAgICAgICAgcmVzdWx0OiBzdHJpbmcsXG4gICAgICAgICAgICBvcmRlckJ5PzogT3JkZXJCeVtdLFxuICAgICAgICAgICAgbGltaXQ/OiBudW1iZXIsXG4gICAgICAgICAgICB0aW1lb3V0PzogbnVtYmVyLFxuICAgICAgICAgICAgcGFyZW50U3Bhbj86IChTcGFuIHwgU3BhbkNvbnRleHQpXG4gICAgICAgICAqL1xuICAgICk6IFByb21pc2U8YW55PiB7XG4gICAgICAgIGNvbnN0IHtcbiAgICAgICAgICAgIGZpbHRlcixcbiAgICAgICAgICAgIHJlc3VsdCxcbiAgICAgICAgICAgIG9yZGVyQnksXG4gICAgICAgICAgICBsaW1pdCxcbiAgICAgICAgICAgIHRpbWVvdXQsXG4gICAgICAgICAgICBwYXJlbnRTcGFuLFxuICAgICAgICB9ID0gcmVzb2x2ZVBhcmFtczxUT05RdWVyeVBhcmFtcz4oYXJncywgJ2ZpbHRlcicsICgpID0+ICh7XG4gICAgICAgICAgICBmaWx0ZXI6IGFyZ3NbMF0sXG4gICAgICAgICAgICByZXN1bHQ6IChhcmdzWzFdOiBhbnkpLFxuICAgICAgICAgICAgb3JkZXJCeTogKGFyZ3NbMl06IGFueSksXG4gICAgICAgICAgICBsaW1pdDogKGFyZ3NbM106IGFueSksXG4gICAgICAgICAgICB0aW1lb3V0OiAoYXJnc1s0XTogYW55KSxcbiAgICAgICAgICAgIHBhcmVudFNwYW46IGFyZ3NbNV0sXG4gICAgICAgIH0pKTtcbiAgICAgICAgcmV0dXJuIHRoaXMubW9kdWxlLmNvbnRleHQudHJhY2UoYCR7dGhpcy5jb2xsZWN0aW9uTmFtZX0ucXVlcnlgLCBhc3luYyAoc3BhbikgPT4ge1xuICAgICAgICAgICAgc3Bhbi5zZXRUYWcoJ3BhcmFtcycsIHtcbiAgICAgICAgICAgICAgICBmaWx0ZXIsXG4gICAgICAgICAgICAgICAgcmVzdWx0LFxuICAgICAgICAgICAgICAgIG9yZGVyQnksXG4gICAgICAgICAgICAgICAgbGltaXQsXG4gICAgICAgICAgICAgICAgdGltZW91dCxcbiAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgY29uc3QgYyA9IHRoaXMuY29sbGVjdGlvbk5hbWU7XG4gICAgICAgICAgICBjb25zdCB0ID0gdGhpcy50eXBlTmFtZTtcbiAgICAgICAgICAgIGNvbnN0IHFsID0gYHF1ZXJ5ICR7Y30oJGZpbHRlcjogJHt0fUZpbHRlciwgJG9yZGVyQnk6IFtRdWVyeU9yZGVyQnldLCAkbGltaXQ6IEludCwgJHRpbWVvdXQ6IEZsb2F0KSB7XG4gICAgICAgICAgICAgICAgJHtjfShmaWx0ZXI6ICRmaWx0ZXIsIG9yZGVyQnk6ICRvcmRlckJ5LCBsaW1pdDogJGxpbWl0LCB0aW1lb3V0OiAkdGltZW91dCkgeyAke3Jlc3VsdH0gfVxuICAgICAgICAgICAgfWA7XG4gICAgICAgICAgICBjb25zdCB2YXJpYWJsZXM6IHsgW3N0cmluZ106IGFueSB9ID0ge1xuICAgICAgICAgICAgICAgIGZpbHRlcixcbiAgICAgICAgICAgICAgICBvcmRlckJ5LFxuICAgICAgICAgICAgICAgIGxpbWl0LFxuICAgICAgICAgICAgfTtcbiAgICAgICAgICAgIGlmICh0aW1lb3V0KSB7XG4gICAgICAgICAgICAgICAgdmFyaWFibGVzLnRpbWVvdXQgPSBNYXRoLm1pbihNQVhfVElNRU9VVCwgdGltZW91dCk7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICByZXR1cm4gKGF3YWl0IHRoaXMubW9kdWxlLmdyYXBocWxRdWVyeShxbCwgdmFyaWFibGVzLCBzcGFuKSkuZGF0YVtjXTtcbiAgICAgICAgfSwgcGFyZW50U3Bhbik7XG4gICAgfVxuXG4gICAgc3Vic2NyaWJlKFxuICAgICAgICAuLi5hcmdzXG4gICAgICAgIC8qXG4gICAgICAgIGZpbHRlck9yUGFyYW1zOiBhbnkgfCBUT05TdWJzY3JpYmVQYXJhbXMsXG4gICAgICAgIHJlc3VsdD86IHN0cmluZyxcbiAgICAgICAgb25Eb2NFdmVudD86IERvY0V2ZW50LFxuICAgICAgICBvbkVycm9yPzogKGVycjogRXJyb3IpID0+IHZvaWRcbiAgICAgICAgICovXG4gICAgKTogU3Vic2NyaXB0aW9uIHtcbiAgICAgICAgY29uc3Qge1xuICAgICAgICAgICAgZmlsdGVyLFxuICAgICAgICAgICAgcmVzdWx0LFxuICAgICAgICAgICAgb25Eb2NFdmVudCxcbiAgICAgICAgICAgIG9uRXJyb3IsXG4gICAgICAgIH0gPSByZXNvbHZlUGFyYW1zPFRPTlN1YnNjcmliZVBhcmFtcz4oYXJncywgJ2ZpbHRlcicsICgpID0+ICh7XG4gICAgICAgICAgICBmaWx0ZXI6IGFyZ3NbMF0sXG4gICAgICAgICAgICByZXN1bHQ6IChhcmdzWzFdOiBhbnkpLFxuICAgICAgICAgICAgb25Eb2NFdmVudDogKGFyZ3NbMl06IGFueSksXG4gICAgICAgICAgICBvbkVycm9yOiAoYXJnc1szXTogYW55KSxcbiAgICAgICAgfSkpO1xuICAgICAgICBjb25zdCBzcGFuID0gdGhpcy5tb2R1bGUuY29uZmlnLnRyYWNlci5zdGFydFNwYW4oJ1RPTlF1ZXJpZXNNb2R1bGUuanM6c3Vic2NyaWJlICcpO1xuICAgICAgICBzcGFuLnNldFRhZyhUYWdzLlNQQU5fS0lORCwgJ2NsaWVudCcpO1xuICAgICAgICBjb25zdCB0ZXh0ID0gYHN1YnNjcmlwdGlvbiAke3RoaXMuY29sbGVjdGlvbk5hbWV9KCRmaWx0ZXI6ICR7dGhpcy50eXBlTmFtZX1GaWx0ZXIpIHtcbiAgICAgICAgICAgICR7dGhpcy5jb2xsZWN0aW9uTmFtZX0oZmlsdGVyOiAkZmlsdGVyKSB7ICR7cmVzdWx0fSB9XG4gICAgICAgIH1gO1xuICAgICAgICBjb25zdCBxdWVyeSA9IGdxbChbdGV4dF0pO1xuICAgICAgICBsZXQgc3Vic2NyaXB0aW9uID0gbnVsbDtcbiAgICAgICAgKGFzeW5jICgpID0+IHtcbiAgICAgICAgICAgIHRyeSB7XG4gICAgICAgICAgICAgICAgY29uc3QgY2xpZW50ID0gYXdhaXQgdGhpcy5tb2R1bGUuZ3JhcGhxbENsaWVudFJlcXVpcmVkKHNwYW4pO1xuICAgICAgICAgICAgICAgIGNvbnN0IG9ic2VydmFibGUgPSBjbGllbnQuc3Vic2NyaWJlKHtcbiAgICAgICAgICAgICAgICAgICAgcXVlcnksXG4gICAgICAgICAgICAgICAgICAgIHZhcmlhYmxlczoge1xuICAgICAgICAgICAgICAgICAgICAgICAgZmlsdGVyLFxuICAgICAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgICAgIHN1YnNjcmlwdGlvbiA9IG9ic2VydmFibGUuc3Vic2NyaWJlKChtZXNzYWdlKSA9PiB7XG4gICAgICAgICAgICAgICAgICAgIG9uRG9jRXZlbnQoJ2luc2VydC91cGRhdGUnLCBtZXNzYWdlLmRhdGFbdGhpcy5jb2xsZWN0aW9uTmFtZV0pO1xuICAgICAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgfSBjYXRjaCAoZXJyb3IpIHtcbiAgICAgICAgICAgICAgICBzcGFuLmxvZyh7XG4gICAgICAgICAgICAgICAgICAgIGV2ZW50OiAnZmFpbGVkJyxcbiAgICAgICAgICAgICAgICAgICAgcGF5bG9hZDogZXJyb3IsXG4gICAgICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICAgICAgaWYgKG9uRXJyb3IpIHtcbiAgICAgICAgICAgICAgICAgICAgb25FcnJvcihlcnJvcik7XG4gICAgICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgICAgICAgY29uc29sZS5lcnJvcignVE9OIENsaWVudCBzdWJzY3JpcHRpb24gZXJyb3InLCBlcnJvcik7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuICAgICAgICB9KSgpO1xuICAgICAgICByZXR1cm4ge1xuICAgICAgICAgICAgdW5zdWJzY3JpYmU6ICgpID0+IHtcbiAgICAgICAgICAgICAgICBpZiAoc3Vic2NyaXB0aW9uKSB7XG4gICAgICAgICAgICAgICAgICAgIHN1YnNjcmlwdGlvbi51bnN1YnNjcmliZSgpO1xuICAgICAgICAgICAgICAgICAgICBzcGFuLmZpbmlzaCgpO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH0sXG4gICAgICAgIH07XG4gICAgfVxuXG4gICAgYXN5bmMgd2FpdEZvcihcbiAgICAgICAgLi4uYXJnc1xuICAgICAgICAvKlxuICAgICAgICBmaWx0ZXJPclBhcmFtczogYW55IHwgVE9OV2FpdEZvclBhcmFtcyxcbiAgICAgICAgcmVzdWx0OiBzdHJpbmcsXG4gICAgICAgIHRpbWVvdXQ/OiBudW1iZXIsXG4gICAgICAgIHBhcmVudFNwYW4/OiAoU3BhbiB8IFNwYW5Db250ZXh0KVxuICAgICAgICAgKi9cbiAgICApOiBQcm9taXNlPGFueT4ge1xuICAgICAgICBjb25zdCB7XG4gICAgICAgICAgICBmaWx0ZXIsXG4gICAgICAgICAgICByZXN1bHQsXG4gICAgICAgICAgICB0aW1lb3V0OiBwYXJhbXNUaW1lb3V0LFxuICAgICAgICAgICAgcGFyZW50U3BhbixcbiAgICAgICAgfSA9IHJlc29sdmVQYXJhbXM8VE9OV2FpdEZvclBhcmFtcz4oYXJncywgJ2ZpbHRlcicsICgpID0+ICh7XG4gICAgICAgICAgICBmaWx0ZXI6IGFyZ3NbMF0sXG4gICAgICAgICAgICByZXN1bHQ6IChhcmdzWzFdOiBhbnkpLFxuICAgICAgICAgICAgdGltZW91dDogKGFyZ3NbMl06IGFueSksXG4gICAgICAgICAgICBwYXJlbnRTcGFuOiBhcmdzWzNdLFxuICAgICAgICB9KSk7XG4gICAgICAgIGNvbnN0IHRpbWVvdXQgPSBwYXJhbXNUaW1lb3V0IHx8IHRoaXMubW9kdWxlLmNvbmZpZy53YWl0Rm9yVGltZW91dCgpO1xuICAgICAgICBjb25zdCBkb2NzID0gYXdhaXQgdGhpcy5xdWVyeSh7XG4gICAgICAgICAgICBmaWx0ZXIsXG4gICAgICAgICAgICByZXN1bHQsXG4gICAgICAgICAgICB0aW1lb3V0LFxuICAgICAgICAgICAgcGFyZW50U3BhbixcbiAgICAgICAgfSk7XG4gICAgICAgIGlmIChkb2NzLmxlbmd0aCA+IDApIHtcbiAgICAgICAgICAgIHJldHVybiBkb2NzWzBdO1xuICAgICAgICB9XG4gICAgICAgIHRocm93IFRPTkNsaWVudEVycm9yLndhaXRGb3JUaW1lb3V0KCk7XG4gICAgfVxufVxuXG5UT05RdWVyaWVzTW9kdWxlLm1vZHVsZU5hbWUgPSAnVE9OUXVlcmllc01vZHVsZSc7XG4iXX0=