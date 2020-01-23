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
var _require = require('opentracing'),
    Tags = _require.Tags,
    FORMAT_HTTP_HEADERS = _require.FORMAT_HTTP_HEADERS,
    FORMAT_BINARY = _require.FORMAT_BINARY,
    FORMAT_TEXT_MAP = _require.FORMAT_TEXT_MAP;

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
                this.tracer = this.config.tracer;

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
      _regenerator["default"].mark(function _callee3() {
        var span, result;
        return _regenerator["default"].wrap(function _callee3$(_context3) {
          while (1) {
            switch (_context3.prev = _context3.next) {
              case 0:
                _context3.next = 2;
                return this.tracer.startSpan('TONQueriesModule.js:getAccountCount');

              case 2:
                span = _context3.sent;
                _context3.next = 5;
                return this.query('query{getAccountsCount}');

              case 5:
                result = _context3.sent;
                _context3.next = 8;
                return span.finish();

              case 8:
                return _context3.abrupt("return", result.data.getAccountsCount);

              case 9:
              case "end":
                return _context3.stop();
            }
          }
        }, _callee3, this);
      }));

      function getAccountsCount() {
        return _getAccountsCount.apply(this, arguments);
      }

      return getAccountsCount;
    }()
  }, {
    key: "getTransactionsCount",
    value: function () {
      var _getTransactionsCount = (0, _asyncToGenerator2["default"])(
      /*#__PURE__*/
      _regenerator["default"].mark(function _callee4() {
        var span, result;
        return _regenerator["default"].wrap(function _callee4$(_context4) {
          while (1) {
            switch (_context4.prev = _context4.next) {
              case 0:
                _context4.next = 2;
                return this.tracer.startSpan('TONQueriesModule.js:getTransactionCount');

              case 2:
                span = _context4.sent;
                _context4.next = 5;
                return this.query('query{getTransactionsCount}', span);

              case 5:
                result = _context4.sent;
                _context4.next = 8;
                return span.log({
                  event: 'query result',
                  value: "".concat(result)
                });

              case 8:
                _context4.next = 10;
                return span.finish();

              case 10:
                return _context4.abrupt("return", result.data.getTransactionsCount);

              case 11:
              case "end":
                return _context4.stop();
            }
          }
        }, _callee4, this);
      }));

      function getTransactionsCount() {
        return _getTransactionsCount.apply(this, arguments);
      }

      return getTransactionsCount;
    }()
  }, {
    key: "getAccountsTotalBalance",
    value: function () {
      var _getAccountsTotalBalance = (0, _asyncToGenerator2["default"])(
      /*#__PURE__*/
      _regenerator["default"].mark(function _callee5() {
        var span, result;
        return _regenerator["default"].wrap(function _callee5$(_context5) {
          while (1) {
            switch (_context5.prev = _context5.next) {
              case 0:
                _context5.next = 2;
                return this.tracer.startSpan('TONQueriesModule.js:getAccountsTotalBalance');

              case 2:
                span = _context5.sent;
                _context5.next = 5;
                return this.query('query{getAccountsTotalBalance}', span);

              case 5:
                result = _context5.sent;
                _context5.next = 8;
                return span.log({
                  event: 'query result',
                  value: "".concat(result)
                });

              case 8:
                _context5.next = 10;
                return span.finish();

              case 10:
                return _context5.abrupt("return", result.data.getAccountsTotalBalance);

              case 11:
              case "end":
                return _context5.stop();
            }
          }
        }, _callee5, this);
      }));

      function getAccountsTotalBalance() {
        return _getAccountsTotalBalance.apply(this, arguments);
      }

      return getAccountsTotalBalance;
    }()
  }, {
    key: "postRequests",
    value: function () {
      var _postRequests = (0, _asyncToGenerator2["default"])(
      /*#__PURE__*/
      _regenerator["default"].mark(function _callee6(requests, rootSpan) {
        var span, mut;
        return _regenerator["default"].wrap(function _callee6$(_context6) {
          while (1) {
            switch (_context6.prev = _context6.next) {
              case 0:
                _context6.next = 2;
                return this.tracer.startSpan('TONQueriesModule.js:postRequests', {
                  childeOf: rootSpan
                });

              case 2:
                span = _context6.sent;
                mut = this.mutation("mutation postRequests($requests: [Request]) {\n            postRequests(requests: $requests)\n        }", {
                  requests: requests
                }, span);
                _context6.next = 6;
                return span.finish();

              case 6:
                return _context6.abrupt("return", mut);

              case 7:
              case "end":
                return _context6.stop();
            }
          }
        }, _callee6, this);
      }));

      function postRequests(_x, _x2) {
        return _postRequests.apply(this, arguments);
      }

      return postRequests;
    }()
  }, {
    key: "mutation",
    value: function () {
      var _mutation = (0, _asyncToGenerator2["default"])(
      /*#__PURE__*/
      _regenerator["default"].mark(function _callee7(ql) {
        var variables,
            rootSpan,
            span,
            mutation,
            result,
            _args7 = arguments;
        return _regenerator["default"].wrap(function _callee7$(_context7) {
          while (1) {
            switch (_context7.prev = _context7.next) {
              case 0:
                variables = _args7.length > 1 && _args7[1] !== undefined ? _args7[1] : {};
                rootSpan = _args7.length > 2 ? _args7[2] : undefined;
                _context7.next = 4;
                return this.tracer.startSpan('TONQueriesModule.js:mutation', {
                  childOf: rootSpan
                });

              case 4:
                span = _context7.sent;
                mutation = (0, _graphqlTag["default"])([ql]);
                result = this.graphQl(function (client) {
                  return client.mutate({
                    mutation: mutation,
                    variables: variables
                  });
                });
                _context7.next = 9;
                return span.finish();

              case 9:
                return _context7.abrupt("return", result);

              case 10:
              case "end":
                return _context7.stop();
            }
          }
        }, _callee7, this);
      }));

      function mutation(_x3) {
        return _mutation.apply(this, arguments);
      }

      return mutation;
    }()
  }, {
    key: "query",
    value: function () {
      var _query = (0, _asyncToGenerator2["default"])(
      /*#__PURE__*/
      _regenerator["default"].mark(function _callee8(ql) {
        var variables,
            rootSpan,
            span,
            mutation,
            res,
            _args8 = arguments;
        return _regenerator["default"].wrap(function _callee8$(_context8) {
          while (1) {
            switch (_context8.prev = _context8.next) {
              case 0:
                variables = _args8.length > 1 && _args8[1] !== undefined ? _args8[1] : {};
                rootSpan = _args8.length > 2 ? _args8[2] : undefined;
                _context8.t0 = this.tracer;
                _context8.next = 5;
                return rootSpan.context();

              case 5:
                _context8.t1 = _context8.sent;
                _context8.t2 = {
                  childOf: _context8.t1
                };
                _context8.next = 9;
                return _context8.t0.startSpan.call(_context8.t0, 'TONQueriesModule.js:query', _context8.t2);

              case 9:
                span = _context8.sent;
                mutation = (0, _graphqlTag["default"])([ql]);
                _context8.next = 13;
                return span.log({
                  event: 'query mutation',
                  value: mutation
                });

              case 13:
                res = this.graphQl(function (client) {
                  return client.mutate({
                    mutation: mutation,
                    variables: variables
                  });
                }, span);
                _context8.next = 16;
                return span.finish();

              case 16:
                return _context8.abrupt("return", res);

              case 17:
              case "end":
                return _context8.stop();
            }
          }
        }, _callee8, this);
      }));

      function query(_x4) {
        return _query.apply(this, arguments);
      }

      return query;
    }()
  }, {
    key: "graphQl",
    value: function () {
      var _graphQl = (0, _asyncToGenerator2["default"])(
      /*#__PURE__*/
      _regenerator["default"].mark(function _callee9(request, rootSpan) {
        var span, client, r, errors;
        return _regenerator["default"].wrap(function _callee9$(_context9) {
          while (1) {
            switch (_context9.prev = _context9.next) {
              case 0:
                _context9.t0 = this.tracer;
                _context9.next = 3;
                return rootSpan.context();

              case 3:
                _context9.t1 = _context9.sent;
                _context9.t2 = {
                  childOf: _context9.t1
                };
                _context9.next = 7;
                return _context9.t0.startSpan.call(_context9.t0, 'TONQueriesModule.js:graphQl', _context9.t2);

              case 7:
                span = _context9.sent;
                _context9.next = 10;
                return this.ensureClient(span);

              case 10:
                client = _context9.sent;
                _context9.prev = 11;
                r = request(client);
                _context9.next = 15;
                return span.finish();

              case 15:
                return _context9.abrupt("return", r);

              case 18:
                _context9.prev = 18;
                _context9.t3 = _context9["catch"](11);
                _context9.next = 22;
                return span.log({
                  event: 'query failed',
                  value: "".concat(_context9.t3.message)
                });

              case 22:
                errors = _context9.t3 && _context9.t3.networkError && _context9.t3.networkError.result && _context9.t3.networkError.result.errors;

                if (!errors) {
                  _context9.next = 29;
                  break;
                }

                _context9.next = 26;
                return span.finish();

              case 26:
                throw _TONClient.TONClientError.queryFailed(errors);

              case 29:
                _context9.next = 31;
                return span.finish();

              case 31:
                throw _context9.t3;

              case 32:
              case "end":
                return _context9.stop();
            }
          }
        }, _callee9, this, [[11, 18]]);
      }));

      function graphQl(_x5, _x6) {
        return _graphQl.apply(this, arguments);
      }

      return graphQl;
    }()
  }, {
    key: "ensureClient",
    value: function () {
      var _ensureClient = (0, _asyncToGenerator2["default"])(
      /*#__PURE__*/
      _regenerator["default"].mark(function _callee10(rootSpan) {
        var _this2 = this;

        var span, _ref, httpUrl, wsUrl, fetch, WebSocket, jaegerLink, subsOptions;

        return _regenerator["default"].wrap(function _callee10$(_context10) {
          while (1) {
            switch (_context10.prev = _context10.next) {
              case 0:
                if (!this._client) {
                  _context10.next = 2;
                  break;
                }

                return _context10.abrupt("return", this._client);

              case 2:
                _context10.t0 = this.tracer;
                _context10.next = 5;
                return rootSpan.context();

              case 5:
                _context10.t1 = _context10.sent;
                _context10.t2 = {
                  childOf: _context10.t1
                };
                _context10.next = 9;
                return _context10.t0.startSpan.call(_context10.t0, 'TONQueriesModule.js:ensureClient', _context10.t2);

              case 9:
                span = _context10.sent;
                _context10.next = 12;
                return this.getClientConfig();

              case 12:
                _ref = _context10.sent;
                httpUrl = _ref.httpUrl;
                wsUrl = _ref.wsUrl;
                fetch = _ref.fetch;
                WebSocket = _ref.WebSocket;
                _context10.next = 19;
                return (0, _apolloLinkContext.setContext)(function (_, req) {
                  req.headers = {};

                  _this2.tracer.inject(span, FORMAT_TEXT_MAP, req.headers);

                  return {
                    headers: req.headers
                  };
                });

              case 19:
                jaegerLink = _context10.sent;
                subsOptions = this.tracer.inject(span, FORMAT_TEXT_MAP, {});
                _context10.next = 23;
                return console.log(subsOptions);

              case 23:
                this._client = new _apolloClient.ApolloClient({
                  cache: new _apolloCacheInmemory.InMemoryCache({}),
                  link: (0, _apolloLink.split)(function (_ref2) {
                    var query = _ref2.query;
                    var definition = (0, _apolloUtilities.getMainDefinition)(query);
                    return definition.kind === 'OperationDefinition' && definition.operation === 'subscription';
                  }, new _apolloLinkWs.WebSocketLink(new _subscriptionsTransportWs.SubscriptionClient(wsUrl, {
                    reconnect: true,
                    connectionParams: function connectionParams() {
                      return {
                        headers: subsOptions
                      };
                    }
                  }, WebSocket)), jaegerLink.concat(new _apolloLinkHttp.HttpLink({
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
                _context10.next = 26;
                return span.finish();

              case 26:
                return _context10.abrupt("return", this._client);

              case 27:
              case "end":
                return _context10.stop();
            }
          }
        }, _callee10, this);
      }));

      function ensureClient(_x7) {
        return _ensureClient.apply(this, arguments);
      }

      return ensureClient;
    }()
  }, {
    key: "close",
    value: function () {
      var _close = (0, _asyncToGenerator2["default"])(
      /*#__PURE__*/
      _regenerator["default"].mark(function _callee11() {
        var client;
        return _regenerator["default"].wrap(function _callee11$(_context11) {
          while (1) {
            switch (_context11.prev = _context11.next) {
              case 0:
                if (!this._client) {
                  _context11.next = 6;
                  break;
                }

                client = this._client;
                this._client = null;
                client.stop();
                _context11.next = 6;
                return client.clearStore();

              case 6:
              case "end":
                return _context11.stop();
            }
          }
        }, _callee11, this);
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
    this.tracer = module.config.tracer;
  }

  (0, _createClass2["default"])(TONQCollection, [{
    key: "query",
    value: function () {
      var _query2 = (0, _asyncToGenerator2["default"])(
      /*#__PURE__*/
      _regenerator["default"].mark(function _callee12(filter, result, orderBy, limit, timeout, rootSpan) {
        var span, c, t, ql, variables, r;
        return _regenerator["default"].wrap(function _callee12$(_context12) {
          while (1) {
            switch (_context12.prev = _context12.next) {
              case 0:
                _context12.t0 = this.tracer;
                _context12.next = 3;
                return rootSpan.context();

              case 3:
                _context12.t1 = _context12.sent;
                _context12.t2 = {
                  childOf: _context12.t1
                };
                _context12.next = 7;
                return _context12.t0.startSpan.call(_context12.t0, 'TONQueriesModule.js:query public', _context12.t2);

              case 7:
                span = _context12.sent;
                _context12.next = 10;
                return span.setTag(Tags.SPAN_KIND, 'client');

              case 10:
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

                _context12.next = 17;
                return this.module.query(ql, variables, span);

              case 17:
                _context12.t3 = c;
                r = _context12.sent.data[_context12.t3];
                _context12.next = 21;
                return span.finish();

              case 21:
                return _context12.abrupt("return", r);

              case 22:
              case "end":
                return _context12.stop();
            }
          }
        }, _callee12, this);
      }));

      function query(_x8, _x9, _x10, _x11, _x12, _x13) {
        return _query2.apply(this, arguments);
      }

      return query;
    }()
  }, {
    key: "subscribe",
    value: function subscribe(filter, result, onDocEvent, onError) {
      var _this3 = this;

      var span = this.tracer.startSpan('TONQueriesModule.js:subscribe ');
      span.setTag(Tags.SPAN_KIND, 'client');
      var text = "subscription ".concat(this.collectionName, "($filter: ").concat(this.typeName, "Filter) {\n        \t").concat(this.collectionName, "(filter: $filter) { ").concat(result, " }\n        }");
      var query = (0, _graphqlTag["default"])([text]);
      span.log({
        event: 'subscription',
        value: query
      });
      var subscription = null;
      (0, _asyncToGenerator2["default"])(
      /*#__PURE__*/
      _regenerator["default"].mark(function _callee13() {
        var client, observable;
        return _regenerator["default"].wrap(function _callee13$(_context13) {
          while (1) {
            switch (_context13.prev = _context13.next) {
              case 0:
                _context13.prev = 0;
                _context13.next = 3;
                return _this3.module.ensureClient(span);

              case 3:
                client = _context13.sent;
                observable = client.subscribe({
                  query: query,
                  variables: {
                    filter: filter
                  }
                });
                subscription = observable.subscribe(function (message) {
                  onDocEvent('insert/update', message.data[_this3.collectionName]);
                });
                _context13.next = 13;
                break;

              case 8:
                _context13.prev = 8;
                _context13.t0 = _context13["catch"](0);
                _context13.next = 12;
                return span.log({
                  event: 'subscription failed',
                  value: _context13.t0
                });

              case 12:
                if (onError) {
                  onError(_context13.t0);
                } else {
                  console.error('TON Client subscription error', _context13.t0);
                }

              case 13:
              case "end":
                return _context13.stop();
            }
          }
        }, _callee13, null, [[0, 8]]);
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
      _regenerator["default"].mark(function _callee14(filter, result, timeout) {
        var span, docs;
        return _regenerator["default"].wrap(function _callee14$(_context14) {
          while (1) {
            switch (_context14.prev = _context14.next) {
              case 0:
                _context14.next = 2;
                return this.tracer.startSpan('TONQueriesModule.js:waitFor');

              case 2:
                span = _context14.sent;
                _context14.next = 5;
                return span.log({
                  event: 'waitFor',
                  value: "Filter: ".concat(filter, " \n Timeout: ").concat(timeout)
                });

              case 5:
                _context14.next = 7;
                return this.query(filter, result, undefined, undefined, timeout || 40000, span);

              case 7:
                docs = _context14.sent;

                if (!(docs.length > 0)) {
                  _context14.next = 14;
                  break;
                }

                _context14.next = 11;
                return span.log({
                  event: 'waitFor exit',
                  value: "Docs.length - ".concat(docs.length)
                });

              case 11:
                _context14.next = 13;
                return span.finish();

              case 13:
                return _context14.abrupt("return", docs[0]);

              case 14:
                _context14.next = 16;
                return span.log({
                  event: 'waitFor timeout',
                  value: 'exception'
                });

              case 16:
                _context14.next = 18;
                return span.finish();

              case 18:
                throw _TONClient.TONClientError.waitForTimeout();

              case 19:
              case "end":
                return _context14.stop();
            }
          }
        }, _callee14, this);
      }));

      function waitFor(_x14, _x15, _x16) {
        return _waitFor.apply(this, arguments);
      }

      return waitFor;
    }()
  }]);
  return TONQCollection;
}();

TONQueriesModule.moduleName = 'TONQueriesModule';
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy9tb2R1bGVzL1RPTlF1ZXJpZXNNb2R1bGUuanMiXSwibmFtZXMiOlsicmVxdWlyZSIsIlRhZ3MiLCJGT1JNQVRfSFRUUF9IRUFERVJTIiwiRk9STUFUX0JJTkFSWSIsIkZPUk1BVF9URVhUX01BUCIsIlRPTlF1ZXJpZXNNb2R1bGUiLCJjb250ZXh0IiwiX2NsaWVudCIsIm92ZXJyaWRlV3NVcmwiLCJjb25maWciLCJnZXRNb2R1bGUiLCJUT05Db25maWdNb2R1bGUiLCJ0cmFuc2FjdGlvbnMiLCJUT05RQ29sbGVjdGlvbiIsIm1lc3NhZ2VzIiwiYmxvY2tzIiwiYWNjb3VudHMiLCJ0cmFjZXIiLCJjbGllbnRQbGF0Zm9ybSIsIlRPTkNsaWVudCIsImRhdGEiLCJFcnJvciIsImh0dHBVcmwiLCJxdWVyaWVzSHR0cFVybCIsIndzVXJsIiwicXVlcmllc1dzVXJsIiwiZmV0Y2giLCJyZXNwb25zZSIsInJlZGlyZWN0ZWQiLCJsb2NhdGlvbiIsIlVSTFBhcnRzIiwiZml4IiwidXJsIiwicGFydHMiLCJxdWVyeSIsInJlcGxhY2UiLCJXZWJTb2NrZXQiLCJzdGFydFNwYW4iLCJzcGFuIiwicmVzdWx0IiwiZmluaXNoIiwiZ2V0QWNjb3VudHNDb3VudCIsImxvZyIsImV2ZW50IiwidmFsdWUiLCJnZXRUcmFuc2FjdGlvbnNDb3VudCIsImdldEFjY291bnRzVG90YWxCYWxhbmNlIiwicmVxdWVzdHMiLCJyb290U3BhbiIsImNoaWxkZU9mIiwibXV0IiwibXV0YXRpb24iLCJxbCIsInZhcmlhYmxlcyIsImNoaWxkT2YiLCJncmFwaFFsIiwiY2xpZW50IiwibXV0YXRlIiwicmVzIiwicmVxdWVzdCIsImVuc3VyZUNsaWVudCIsInIiLCJtZXNzYWdlIiwiZXJyb3JzIiwibmV0d29ya0Vycm9yIiwiVE9OQ2xpZW50RXJyb3IiLCJxdWVyeUZhaWxlZCIsImdldENsaWVudENvbmZpZyIsIl8iLCJyZXEiLCJoZWFkZXJzIiwiaW5qZWN0IiwiamFlZ2VyTGluayIsInN1YnNPcHRpb25zIiwiY29uc29sZSIsIkFwb2xsb0NsaWVudCIsImNhY2hlIiwiSW5NZW1vcnlDYWNoZSIsImxpbmsiLCJkZWZpbml0aW9uIiwia2luZCIsIm9wZXJhdGlvbiIsIldlYlNvY2tldExpbmsiLCJTdWJzY3JpcHRpb25DbGllbnQiLCJyZWNvbm5lY3QiLCJjb25uZWN0aW9uUGFyYW1zIiwiY29uY2F0IiwiSHR0cExpbmsiLCJ1cmkiLCJkZWZhdWx0T3B0aW9ucyIsIndhdGNoUXVlcnkiLCJmZXRjaFBvbGljeSIsInN0b3AiLCJjbGVhclN0b3JlIiwiVE9OTW9kdWxlIiwibW9kdWxlIiwiY29sbGVjdGlvbk5hbWUiLCJ0eXBlTmFtZSIsInN1YnN0ciIsInRvVXBwZXJDYXNlIiwibGVuZ3RoIiwiZmlsdGVyIiwib3JkZXJCeSIsImxpbWl0IiwidGltZW91dCIsInNldFRhZyIsIlNQQU5fS0lORCIsImMiLCJ0Iiwib25Eb2NFdmVudCIsIm9uRXJyb3IiLCJ0ZXh0Iiwic3Vic2NyaXB0aW9uIiwib2JzZXJ2YWJsZSIsInN1YnNjcmliZSIsImVycm9yIiwidW5zdWJzY3JpYmUiLCJ1bmRlZmluZWQiLCJkb2NzIiwid2FpdEZvclRpbWVvdXQiLCJtb2R1bGVOYW1lIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQWtCQTs7QUFDQTs7QUFDQTs7QUFDQTs7QUFDQTs7QUFDQTs7QUFDQTs7QUFDQTs7QUFDQTs7QUFFQTs7QUFDQTs7QUFFQTs7QUEvQkE7Ozs7Ozs7Ozs7Ozs7OztlQWdDc0VBLE9BQU8sQ0FBQyxhQUFELEM7SUFBckVDLEksWUFBQUEsSTtJQUFNQyxtQixZQUFBQSxtQjtJQUFxQkMsYSxZQUFBQSxhO0lBQWVDLGUsWUFBQUEsZTs7SUFXN0JDLGdCOzs7OztBQUlqQiw0QkFBWUMsT0FBWixFQUF1QztBQUFBOztBQUFBO0FBQ25DLDRIQUFNQSxPQUFOO0FBRG1DO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBRW5DLFVBQUtDLE9BQUws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LEk7O3VCQUNBQSxJQUFJLENBQUNJLEdBQUwsQ0FBUztBQUNYQyxrQkFBQUEsS0FBSyxFQUFFLFNBREk7QUFFWEMsa0JBQUFBLEtBQUssb0JBQWF5RCxNQUFiLDBCQUFtQ0csT0FBbkM7QUFGTSxpQkFBVCxDOzs7O3VCQUlhLEtBQUt0RSxLQUFMLENBQVdtRSxNQUFYLEVBQW1COUQsTUFBbkIsRUFBMkI4RSxTQUEzQixFQUFzQ0EsU0FBdEMsRUFBaURiLE9BQU8sSUFBSSxLQUE1RCxFQUFvRWxFLElBQXBFLEM7OztBQUFiZ0YsZ0JBQUFBLEk7O3NCQUNGQSxJQUFJLENBQUNsQixNQUFMLEdBQWMsQzs7Ozs7O3VCQUNSOUQsSUFBSSxDQUFDSSxHQUFMLENBQVM7QUFDWEMsa0JBQUFBLEtBQUssRUFBRSxjQURJO0FBRVhDLGtCQUFBQSxLQUFLLDBCQUFtQjBFLElBQUksQ0FBQ2xCLE1BQXhCO0FBRk0saUJBQVQsQzs7Ozt1QkFJQTlELElBQUksQ0FBQ0UsTUFBTCxFOzs7bURBQ0M4RSxJQUFJLENBQUMsQ0FBRCxDOzs7O3VCQUVUaEYsSUFBSSxDQUFDSSxHQUFMLENBQVM7QUFDWEMsa0JBQUFBLEtBQUssRUFBRSxpQkFESTtBQUVYQyxrQkFBQUEsS0FBSyxFQUFFO0FBRkksaUJBQVQsQzs7Ozt1QkFJQU4sSUFBSSxDQUFDRSxNQUFMLEU7OztzQkFDQXlCLDBCQUFlc0QsY0FBZixFOzs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUlkbEgsZ0JBQWdCLENBQUNtSCxVQUFqQixHQUE4QixrQkFBOUIiLCJzb3VyY2VzQ29udGVudCI6WyIvKlxuICogQ29weXJpZ2h0IDIwMTgtMjAyMCBUT04gREVWIFNPTFVUSU9OUyBMVEQuXG4gKlxuICogTGljZW5zZWQgdW5kZXIgdGhlIFNPRlRXQVJFIEVWQUxVQVRJT04gTGljZW5zZSAodGhlIFwiTGljZW5zZVwiKTsgeW91IG1heSBub3QgdXNlXG4gKiB0aGlzIGZpbGUgZXhjZXB0IGluIGNvbXBsaWFuY2Ugd2l0aCB0aGUgTGljZW5zZS4gIFlvdSBtYXkgb2J0YWluIGEgY29weSBvZiB0aGVcbiAqIExpY2Vuc2UgYXQ6XG4gKlxuICogaHR0cDovL3d3dy50b24uZGV2L2xpY2Vuc2VzXG4gKlxuICogVW5sZXNzIHJlcXVpcmVkIGJ5IGFwcGxpY2FibGUgbGF3IG9yIGFncmVlZCB0byBpbiB3cml0aW5nLCBzb2Z0d2FyZVxuICogZGlzdHJpYnV0ZWQgdW5kZXIgdGhlIExpY2Vuc2UgaXMgZGlzdHJpYnV0ZWQgb24gYW4gXCJBUyBJU1wiIEJBU0lTLFxuICogV0lUSE9VVCBXQVJSQU5USUVTIE9SIENPTkRJVElPTlMgT0YgQU5ZIEtJTkQsIGVpdGhlciBleHByZXNzIG9yIGltcGxpZWQuXG4gKiBTZWUgdGhlIExpY2Vuc2UgZm9yIHRoZSBzcGVjaWZpYyBUT04gREVWIHNvZnR3YXJlIGdvdmVybmluZyBwZXJtaXNzaW9ucyBhbmRcbiAqIGxpbWl0YXRpb25zIHVuZGVyIHRoZSBMaWNlbnNlLlxuICovXG5cbi8vIEBmbG93XG5cbmltcG9ydCB7IEluTWVtb3J5Q2FjaGUgfSBmcm9tICdhcG9sbG8tY2FjaGUtaW5tZW1vcnknO1xuaW1wb3J0IHsgQXBvbGxvQ2xpZW50IH0gZnJvbSAnYXBvbGxvLWNsaWVudCc7XG5pbXBvcnQgeyBzcGxpdCB9IGZyb20gXCJhcG9sbG8tbGlua1wiO1xuaW1wb3J0IHsgSHR0cExpbmsgfSBmcm9tICdhcG9sbG8tbGluay1odHRwJztcbmltcG9ydCB7IFdlYlNvY2tldExpbmsgfSBmcm9tICdhcG9sbG8tbGluay13cyc7XG5pbXBvcnQgeyBnZXRNYWluRGVmaW5pdGlvbiB9IGZyb20gJ2Fwb2xsby11dGlsaXRpZXMnO1xuaW1wb3J0IGdxbCBmcm9tICdncmFwaHFsLXRhZyc7XG5pbXBvcnQgeyBTdWJzY3JpcHRpb25DbGllbnQgfSBmcm9tIFwic3Vic2NyaXB0aW9ucy10cmFuc3BvcnQtd3NcIjtcbmltcG9ydCB7IFRPTkNsaWVudCwgVE9OQ2xpZW50RXJyb3IgfSBmcm9tICcuLi9UT05DbGllbnQnO1xuaW1wb3J0IHR5cGUgeyBUT05Nb2R1bGVDb250ZXh0IH0gZnJvbSAnLi4vVE9OTW9kdWxlJztcbmltcG9ydCB7IFRPTk1vZHVsZSB9IGZyb20gJy4uL1RPTk1vZHVsZSc7XG5pbXBvcnQgVE9OQ29uZmlnTW9kdWxlLCB7IFVSTFBhcnRzIH0gZnJvbSAnLi9UT05Db25maWdNb2R1bGUnO1xuXG5pbXBvcnQgeyBzZXRDb250ZXh0IH0gZnJvbSAnYXBvbGxvLWxpbmstY29udGV4dCc7XG5jb25zdCB7IFRhZ3MsIEZPUk1BVF9IVFRQX0hFQURFUlMsIEZPUk1BVF9CSU5BUlksIEZPUk1BVF9URVhUX01BUCB9ID0gcmVxdWlyZSgnb3BlbnRyYWNpbmcnKTtcblxudHlwZSBTdWJzY3JpcHRpb24gPSB7XG4gICAgdW5zdWJzY3JpYmU6ICgpID0+IHZvaWRcbn1cblxuZXhwb3J0IHR5cGUgUmVxdWVzdCA9IHtcbiAgICBpZDogc3RyaW5nLFxuICAgIGJvZHk6IHN0cmluZyxcbn1cblxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgVE9OUXVlcmllc01vZHVsZSBleHRlbmRzIFRPTk1vZHVsZSB7XG4gICAgY29uZmlnOiBUT05Db25maWdNb2R1bGU7XG4gICAgb3ZlcnJpZGVXc1VybDogP3N0cmluZztcblxuICAgIGNvbnN0cnVjdG9yKGNvbnRleHQ6IFRPTk1vZHVsZUNvbnRleHQpIHtcbiAgICAgICAgc3VwZXIoY29udGV4dCk7XG4gICAgICAgIHRoaXMuX2NsaWVudCA9IG51bGw7XG4gICAgICAgIHRoaXMub3ZlcnJpZGVXc1VybCA9IG51bGw7XG4gICAgfVxuXG4gICAgYXN5bmMgc2V0dXAoKSB7XG4gICAgICAgIHRoaXMuY29uZmlnID0gdGhpcy5jb250ZXh0LmdldE1vZHVsZShUT05Db25maWdNb2R1bGUpO1xuICAgICAgICB0aGlzLnRyYW5zYWN0aW9ucyA9IG5ldyBUT05RQ29sbGVjdGlvbih0aGlzLCAndHJhbnNhY3Rpb25zJyk7XG4gICAgICAgIHRoaXMubWVzc2FnZXMgPSBuZXcgVE9OUUNvbGxlY3Rpb24odGhpcywgJ21lc3NhZ2VzJyk7XG4gICAgICAgIHRoaXMuYmxvY2tzID0gbmV3IFRPTlFDb2xsZWN0aW9uKHRoaXMsICdibG9ja3MnKTtcbiAgICAgICAgdGhpcy5hY2NvdW50cyA9IG5ldyBUT05RQ29sbGVjdGlvbih0aGlzLCAnYWNjb3VudHMnKTtcbiAgICAgICAgdGhpcy50cmFjZXIgPSB0aGlzLmNvbmZpZy50cmFjZXI7XG4gICAgfVxuXG4gICAgYXN5bmMgZ2V0Q2xpZW50Q29uZmlnKCkge1xuICAgICAgICBjb25zdCBjb25maWcgPSB0aGlzLmNvbmZpZztcbiAgICAgICAgY29uc3QgeyBjbGllbnRQbGF0Zm9ybSB9ID0gVE9OQ2xpZW50O1xuICAgICAgICBpZiAoIWNvbmZpZy5kYXRhIHx8ICFjbGllbnRQbGF0Zm9ybSkge1xuICAgICAgICAgICAgdGhyb3cgRXJyb3IoJ1RPTiBDbGllbnQgZG9lcyBub3QgY29uZmlndXJlZCcpO1xuICAgICAgICB9XG4gICAgICAgIGxldCBodHRwVXJsID0gY29uZmlnLnF1ZXJpZXNIdHRwVXJsKCk7XG4gICAgICAgIGxldCB3c1VybCA9IGNvbmZpZy5xdWVyaWVzV3NVcmwoKTtcbiAgICAgICAgY29uc3QgZmV0Y2ggPSBjbGllbnRQbGF0Zm9ybS5mZXRjaDtcbiAgICAgICAgY29uc3QgcmVzcG9uc2UgPSBhd2FpdCBmZXRjaChgJHtodHRwVXJsfT9xdWVyeT0lN0JpbmZvJTdCdmVyc2lvbiU3RCU3RGApO1xuICAgICAgICBpZiAocmVzcG9uc2UucmVkaXJlY3RlZCkge1xuICAgICAgICAgICAgY29uc3QgbG9jYXRpb24gPSBVUkxQYXJ0cy5maXgocmVzcG9uc2UudXJsLCBwYXJ0cyA9PiB7XG4gICAgICAgICAgICAgICAgcGFydHMucXVlcnkgPSAnJ1xuICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICBpZiAoISFsb2NhdGlvbikge1xuICAgICAgICAgICAgICAgIGh0dHBVcmwgPSBsb2NhdGlvbjtcbiAgICAgICAgICAgICAgICB3c1VybCA9IGxvY2F0aW9uXG4gICAgICAgICAgICAgICAgICAgIC5yZXBsYWNlKC9eaHR0cHM6XFwvXFwvL2dpLCAnd3NzOi8vJylcbiAgICAgICAgICAgICAgICAgICAgLnJlcGxhY2UoL15odHRwOlxcL1xcLy9naSwgJ3dzOi8vJyk7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgICAgcmV0dXJuIHtcbiAgICAgICAgICAgIGh0dHBVcmwsXG4gICAgICAgICAgICB3c1VybCxcbiAgICAgICAgICAgIGZldGNoLFxuICAgICAgICAgICAgV2ViU29ja2V0OiBjbGllbnRQbGF0Zm9ybS5XZWJTb2NrZXQsXG4gICAgICAgIH1cbiAgICB9XG5cbiAgICBhc3luYyBnZXRBY2NvdW50c0NvdW50KCk6IFByb21pc2U8bnVtYmVyPiB7XG4gICAgICAgIGNvbnN0IHNwYW4gPSBhd2FpdCB0aGlzLnRyYWNlci5zdGFydFNwYW4oJ1RPTlF1ZXJpZXNNb2R1bGUuanM6Z2V0QWNjb3VudENvdW50Jyk7XG4gICAgICAgIGNvbnN0IHJlc3VsdCA9IGF3YWl0IHRoaXMucXVlcnkoJ3F1ZXJ5e2dldEFjY291bnRzQ291bnR9Jyk7XG4gICAgICAgIGF3YWl0IHNwYW4uZmluaXNoKCk7XG4gICAgICAgIHJldHVybiByZXN1bHQuZGF0YS5nZXRBY2NvdW50c0NvdW50O1xuICAgIH1cblxuICAgIGFzeW5jIGdldFRyYW5zYWN0aW9uc0NvdW50KCk6IFByb21pc2U8bnVtYmVyPiB7XG4gICAgICAgIGNvbnN0IHNwYW4gPSBhd2FpdCB0aGlzLnRyYWNlci5zdGFydFNwYW4oJ1RPTlF1ZXJpZXNNb2R1bGUuanM6Z2V0VHJhbnNhY3Rpb25Db3VudCcpO1xuICAgICAgICBjb25zdCByZXN1bHQgPSBhd2FpdCB0aGlzLnF1ZXJ5KCdxdWVyeXtnZXRUcmFuc2FjdGlvbnNDb3VudH0nLCBzcGFuKTtcbiAgICAgICAgYXdhaXQgc3Bhbi5sb2coe1xuICAgICAgICAgICAgZXZlbnQ6ICdxdWVyeSByZXN1bHQnLFxuICAgICAgICAgICAgdmFsdWU6IGAke3Jlc3VsdH1gXG4gICAgICAgIH0pO1xuICAgICAgICBhd2FpdCBzcGFuLmZpbmlzaCgpO1xuICAgICAgICByZXR1cm4gcmVzdWx0LmRhdGEuZ2V0VHJhbnNhY3Rpb25zQ291bnQ7XG4gICAgfVxuXG4gICAgYXN5bmMgZ2V0QWNjb3VudHNUb3RhbEJhbGFuY2UoKTogUHJvbWlzZTxzdHJpbmc+IHtcbiAgICAgICAgY29uc3Qgc3BhbiA9IGF3YWl0IHRoaXMudHJhY2VyLnN0YXJ0U3BhbignVE9OUXVlcmllc01vZHVsZS5qczpnZXRBY2NvdW50c1RvdGFsQmFsYW5jZScpO1xuICAgICAgICBjb25zdCByZXN1bHQgPSBhd2FpdCB0aGlzLnF1ZXJ5KCdxdWVyeXtnZXRBY2NvdW50c1RvdGFsQmFsYW5jZX0nLCBzcGFuKTtcbiAgICAgICAgYXdhaXQgc3Bhbi5sb2coe1xuICAgICAgICAgICAgZXZlbnQ6ICdxdWVyeSByZXN1bHQnLFxuICAgICAgICAgICAgdmFsdWU6IGAke3Jlc3VsdH1gXG4gICAgICAgIH0pO1xuICAgICAgICBhd2FpdCBzcGFuLmZpbmlzaCgpO1xuICAgICAgICByZXR1cm4gcmVzdWx0LmRhdGEuZ2V0QWNjb3VudHNUb3RhbEJhbGFuY2U7XG4gICAgfVxuXG4gICAgYXN5bmMgcG9zdFJlcXVlc3RzKHJlcXVlc3RzOiBSZXF1ZXN0W10sIHJvb3RTcGFuOiBhbnkpOiBQcm9taXNlPHZvaWQ+IHtcbiAgICAgICAgY29uc3Qgc3BhbiA9IGF3YWl0IHRoaXMudHJhY2VyLnN0YXJ0U3BhbignVE9OUXVlcmllc01vZHVsZS5qczpwb3N0UmVxdWVzdHMnLCB7IGNoaWxkZU9mOiByb290U3BhbiB9KTtcbiAgICAgICAgY29uc3QgbXV0ID0gdGhpcy5tdXRhdGlvbihgbXV0YXRpb24gcG9zdFJlcXVlc3RzKCRyZXF1ZXN0czogW1JlcXVlc3RdKSB7XG4gICAgICAgICAgICBwb3N0UmVxdWVzdHMocmVxdWVzdHM6ICRyZXF1ZXN0cylcbiAgICAgICAgfWAsIHtcbiAgICAgICAgICAgIHJlcXVlc3RzLFxuICAgICAgICB9LCBzcGFuKTtcbiAgICAgICAgYXdhaXQgc3Bhbi5maW5pc2goKTtcbiAgICAgICAgcmV0dXJuIG11dDtcbiAgICB9XG5cbiAgICBhc3luYyBtdXRhdGlvbihxbDogc3RyaW5nLCB2YXJpYWJsZXM6IHsgW3N0cmluZ106IGFueSB9ID0ge30sIHJvb3RTcGFuOiBhbnkpOiBQcm9taXNlPGFueT4ge1xuICAgICAgICBjb25zdCBzcGFuID0gYXdhaXQgdGhpcy50cmFjZXIuc3RhcnRTcGFuKCdUT05RdWVyaWVzTW9kdWxlLmpzOm11dGF0aW9uJywgeyBjaGlsZE9mOiByb290U3BhbiB9KTtcbiAgICAgICAgY29uc3QgbXV0YXRpb24gPSBncWwoW3FsXSk7XG4gICAgICAgIGNvbnN0IHJlc3VsdCA9IHRoaXMuZ3JhcGhRbChjbGllbnQgPT4gY2xpZW50Lm11dGF0ZSh7XG4gICAgICAgICAgICBtdXRhdGlvbixcbiAgICAgICAgICAgIHZhcmlhYmxlcyxcbiAgICAgICAgfSkpO1xuICAgICAgICBhd2FpdCBzcGFuLmZpbmlzaCgpO1xuICAgICAgICByZXR1cm4gcmVzdWx0O1xuICAgIH1cblxuICAgIGFzeW5jIHF1ZXJ5KHFsOiBzdHJpbmcsIHZhcmlhYmxlczogeyBbc3RyaW5nXTogYW55IH0gPSB7fSwgcm9vdFNwYW46IGFueSk6IFByb21pc2U8YW55PiB7XG4gICAgICAgIGNvbnN0IHNwYW4gPSBhd2FpdCB0aGlzLnRyYWNlci5zdGFydFNwYW4oJ1RPTlF1ZXJpZXNNb2R1bGUuanM6cXVlcnknLCB7IGNoaWxkT2Y6IGF3YWl0IHJvb3RTcGFuLmNvbnRleHQoKSB9KTtcbiAgICAgICAgY29uc3QgbXV0YXRpb24gPSBncWwoW3FsXSk7XG4gICAgICAgIGF3YWl0IHNwYW4ubG9nKHtcbiAgICAgICAgICAgIGV2ZW50OiAncXVlcnkgbXV0YXRpb24nLFxuICAgICAgICAgICAgdmFsdWU6IG11dGF0aW9uXG4gICAgICAgIH0pO1xuICAgICAgICBjb25zdCByZXMgPSB0aGlzLmdyYXBoUWwoY2xpZW50ID0+IGNsaWVudC5tdXRhdGUoe1xuICAgICAgICAgICAgbXV0YXRpb24sXG4gICAgICAgICAgICB2YXJpYWJsZXMsXG4gICAgICAgIH0pLCBzcGFuKTtcbiAgICAgICAgYXdhaXQgc3Bhbi5maW5pc2goKTtcbiAgICAgICAgcmV0dXJuIHJlcztcbiAgICB9XG5cbiAgICBhc3luYyBncmFwaFFsKHJlcXVlc3Q6IChjbGllbnQ6IEFwb2xsb0NsaWVudCkgPT4gUHJvbWlzZTxhbnk+LCByb290U3BhbjogYW55KTogUHJvbWlzZTxhbnk+IHtcbiAgICAgICAgY29uc3Qgc3BhbiA9IGF3YWl0IHRoaXMudHJhY2VyLnN0YXJ0U3BhbignVE9OUXVlcmllc01vZHVsZS5qczpncmFwaFFsJywgeyBjaGlsZE9mOiBhd2FpdCByb290U3Bhbi5jb250ZXh0KCkgfSk7XG4gICAgICAgIGNvbnN0IGNsaWVudCA9IGF3YWl0IHRoaXMuZW5zdXJlQ2xpZW50KHNwYW4pO1xuICAgICAgICB0cnkge1xuICAgICAgICAgICAgY29uc3QgciA9IHJlcXVlc3QoY2xpZW50KTtcbiAgICAgICAgICAgIGF3YWl0IHNwYW4uZmluaXNoKCk7XG4gICAgICAgICAgICByZXR1cm4gcjtcbiAgICAgICAgfSBjYXRjaCAoZXJyb3IpIHtcbiAgICAgICAgICAgIGF3YWl0IHNwYW4ubG9nKHtcbiAgICAgICAgICAgICAgICBldmVudDogJ3F1ZXJ5IGZhaWxlZCcsXG4gICAgICAgICAgICAgICAgdmFsdWU6IGAke2Vycm9yLm1lc3NhZ2V9YFxuICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICBjb25zdCBlcnJvcnMgPSBlcnJvciAmJiBlcnJvci5uZXR3b3JrRXJyb3IgJiYgZXJyb3IubmV0d29ya0Vycm9yLnJlc3VsdCAmJiBlcnJvci5uZXR3b3JrRXJyb3IucmVzdWx0LmVycm9ycztcbiAgICAgICAgICAgIGlmIChlcnJvcnMpIHtcbiAgICAgICAgICAgICAgICBhd2FpdCBzcGFuLmZpbmlzaCgpO1xuICAgICAgICAgICAgICAgIHRocm93IFRPTkNsaWVudEVycm9yLnF1ZXJ5RmFpbGVkKGVycm9ycyk7XG4gICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAgIGF3YWl0IHNwYW4uZmluaXNoKCk7XG4gICAgICAgICAgICAgICAgdGhyb3cgZXJyb3I7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICBhc3luYyBlbnN1cmVDbGllbnQocm9vdFNwYW46IGFueSk6IEFwb2xsb0NsaWVudCB7XG4gICAgICAgIGlmICh0aGlzLl9jbGllbnQpIHtcbiAgICAgICAgICAgIHJldHVybiB0aGlzLl9jbGllbnQ7XG4gICAgICAgIH1cblxuICAgICAgICBjb25zdCBzcGFuID0gYXdhaXQgdGhpcy50cmFjZXIuc3RhcnRTcGFuKCdUT05RdWVyaWVzTW9kdWxlLmpzOmVuc3VyZUNsaWVudCcsIHsgY2hpbGRPZjogYXdhaXQgcm9vdFNwYW4uY29udGV4dCgpIH0pO1xuICAgICAgICBjb25zdCB7IGh0dHBVcmwsIHdzVXJsLCBmZXRjaCwgV2ViU29ja2V0IH0gPSBhd2FpdCB0aGlzLmdldENsaWVudENvbmZpZygpO1xuICAgICAgICBjb25zdCBqYWVnZXJMaW5rID0gYXdhaXQgc2V0Q29udGV4dCgoXywgcmVxKSA9PiB7XG4gICAgICAgICAgICByZXEuaGVhZGVycyA9IHt9O1xuICAgICAgICAgICAgdGhpcy50cmFjZXIuaW5qZWN0KHNwYW4sIEZPUk1BVF9URVhUX01BUCwgcmVxLmhlYWRlcnMpO1xuICAgICAgICAgICAgcmV0dXJuIHtcbiAgICAgICAgICAgICAgICBoZWFkZXJzOiByZXEuaGVhZGVycyxcbiAgICAgICAgICAgIH07XG4gICAgICAgIH0pO1xuICAgICAgICBsZXQgc3Vic09wdGlvbnMgPSB0aGlzLnRyYWNlci5pbmplY3Qoc3BhbiwgRk9STUFUX1RFWFRfTUFQLCB7fSk7XG4gICAgICAgIGF3YWl0IGNvbnNvbGUubG9nKHN1YnNPcHRpb25zKTtcbiAgICAgICAgdGhpcy5fY2xpZW50ID0gbmV3IEFwb2xsb0NsaWVudCh7XG4gICAgICAgICAgICBjYWNoZTogbmV3IEluTWVtb3J5Q2FjaGUoe30pLFxuICAgICAgICAgICAgbGluazogc3BsaXQoXG4gICAgICAgICAgICAgICAgKHsgcXVlcnkgfSkgPT4ge1xuICAgICAgICAgICAgICAgICAgICBjb25zdCBkZWZpbml0aW9uID0gZ2V0TWFpbkRlZmluaXRpb24ocXVlcnkpO1xuICAgICAgICAgICAgICAgICAgICByZXR1cm4gKFxuICAgICAgICAgICAgICAgICAgICAgICAgZGVmaW5pdGlvbi5raW5kID09PSAnT3BlcmF0aW9uRGVmaW5pdGlvbidcbiAgICAgICAgICAgICAgICAgICAgICAgICYmIGRlZmluaXRpb24ub3BlcmF0aW9uID09PSAnc3Vic2NyaXB0aW9uJ1xuICAgICAgICAgICAgICAgICAgICApO1xuICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgbmV3IFdlYlNvY2tldExpbmsobmV3IFN1YnNjcmlwdGlvbkNsaWVudChcbiAgICAgICAgICAgICAgICAgICAgd3NVcmwsXG4gICAgICAgICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIHJlY29ubmVjdDogdHJ1ZSxcbiAgICAgICAgICAgICAgICAgICAgICAgIGNvbm5lY3Rpb25QYXJhbXM6ICgpID0+ICh7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgaGVhZGVyczogc3Vic09wdGlvbnMsXG4gICAgICAgICAgICAgICAgICAgICAgICB9KSxcbiAgICAgICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICAgICAgV2ViU29ja2V0LFxuICAgICAgICAgICAgICAgICkpLFxuICAgICAgICAgICAgICAgIGphZWdlckxpbmsuY29uY2F0KG5ldyBIdHRwTGluayh7XG4gICAgICAgICAgICAgICAgICAgIHVyaTogaHR0cFVybCxcbiAgICAgICAgICAgICAgICAgICAgZmV0Y2gsXG4gICAgICAgICAgICAgICAgfSkpLFxuICAgICAgICAgICAgKSxcbiAgICAgICAgICAgIGRlZmF1bHRPcHRpb25zOiB7XG4gICAgICAgICAgICAgICAgd2F0Y2hRdWVyeToge1xuICAgICAgICAgICAgICAgICAgICBmZXRjaFBvbGljeTogJ25vLWNhY2hlJyxcbiAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgIHF1ZXJ5OiB7XG4gICAgICAgICAgICAgICAgICAgIGZldGNoUG9saWN5OiAnbm8tY2FjaGUnLFxuICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICB9XG4gICAgICAgIH0pO1xuICAgICAgICBhd2FpdCBzcGFuLmZpbmlzaCgpO1xuICAgICAgICByZXR1cm4gdGhpcy5fY2xpZW50O1xuICAgIH1cblxuICAgIGFzeW5jIGNsb3NlKCkge1xuICAgICAgICBpZiAodGhpcy5fY2xpZW50KSB7XG4gICAgICAgICAgICBjb25zdCBjbGllbnQgPSB0aGlzLl9jbGllbnQ7XG4gICAgICAgICAgICB0aGlzLl9jbGllbnQgPSBudWxsO1xuICAgICAgICAgICAgY2xpZW50LnN0b3AoKTtcbiAgICAgICAgICAgIGF3YWl0IGNsaWVudC5jbGVhclN0b3JlKCk7XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICB0cmFuc2FjdGlvbnM6IFRPTlFDb2xsZWN0aW9uO1xuXG4gICAgbWVzc2FnZXM6IFRPTlFDb2xsZWN0aW9uO1xuXG4gICAgYmxvY2tzOiBUT05RQ29sbGVjdGlvbjtcblxuICAgIGFjY291bnRzOiBUT05RQ29sbGVjdGlvbjtcblxuICAgIF9jbGllbnQ6IEFwb2xsb0NsaWVudDtcbn1cblxuXG50eXBlIERvY0V2ZW50ID0gKGNoYW5nZVR5cGU6IHN0cmluZywgZG9jOiBhbnkpID0+IHZvaWQ7XG5cbnR5cGUgT3JkZXJCeSA9IHtcbiAgICBwYXRoOiBzdHJpbmcsXG4gICAgZGlyZWN0aW9uOiAnQVNDJyB8ICdERVNDJ1xufVxuXG5jbGFzcyBUT05RQ29sbGVjdGlvbiB7XG4gICAgbW9kdWxlOiBUT05RdWVyaWVzTW9kdWxlO1xuXG4gICAgY29sbGVjdGlvbk5hbWU6IHN0cmluZztcbiAgICB0eXBlTmFtZTogc3RyaW5nO1xuXG4gICAgY29uc3RydWN0b3IobW9kdWxlOiBUT05RdWVyaWVzTW9kdWxlLCBjb2xsZWN0aW9uTmFtZTogc3RyaW5nKSB7XG4gICAgICAgIHRoaXMubW9kdWxlID0gbW9kdWxlO1xuICAgICAgICB0aGlzLmNvbGxlY3Rpb25OYW1lID0gY29sbGVjdGlvbk5hbWU7XG4gICAgICAgIHRoaXMudHlwZU5hbWUgPSBjb2xsZWN0aW9uTmFtZS5zdWJzdHIoMCwgMSkudG9VcHBlckNhc2UoKSArXG4gICAgICAgICAgICBjb2xsZWN0aW9uTmFtZS5zdWJzdHIoMSwgY29sbGVjdGlvbk5hbWUubGVuZ3RoIC0gMik7XG4gICAgICAgIHRoaXMudHJhY2VyID0gbW9kdWxlLmNvbmZpZy50cmFjZXI7XG4gICAgfVxuXG4gICAgYXN5bmMgcXVlcnkoZmlsdGVyOiBhbnksIHJlc3VsdDogc3RyaW5nLCBvcmRlckJ5PzogT3JkZXJCeVtdLCBsaW1pdD86IG51bWJlciwgdGltZW91dD86IG51bWJlciwgcm9vdFNwYW46IGFueSk6IFByb21pc2U8YW55PiB7XG4gICAgICAgIGNvbnN0IHNwYW4gPSBhd2FpdCB0aGlzLnRyYWNlci5zdGFydFNwYW4oJ1RPTlF1ZXJpZXNNb2R1bGUuanM6cXVlcnkgcHVibGljJywge2NoaWxkT2Y6IGF3YWl0IHJvb3RTcGFuLmNvbnRleHQoKX0pO1xuICAgICAgICBhd2FpdCBzcGFuLnNldFRhZyhUYWdzLlNQQU5fS0lORCwgJ2NsaWVudCcpO1xuXG4gICAgICAgIGNvbnN0IGMgPSB0aGlzLmNvbGxlY3Rpb25OYW1lO1xuICAgICAgICBjb25zdCB0ID0gdGhpcy50eXBlTmFtZTtcbiAgICAgICAgY29uc3QgcWwgPSBgcXVlcnkgJHtjfSgkZmlsdGVyOiAke3R9RmlsdGVyLCAkb3JkZXJCeTogW1F1ZXJ5T3JkZXJCeV0sICRsaW1pdDogSW50LCAkdGltZW91dDogRmxvYXQpIHtcbiAgICAgICAgICAgICR7Y30oZmlsdGVyOiAkZmlsdGVyLCBvcmRlckJ5OiAkb3JkZXJCeSwgbGltaXQ6ICRsaW1pdCwgdGltZW91dDogJHRpbWVvdXQpIHsgJHtyZXN1bHR9IH1cbiAgICAgICAgfWA7XG4gICAgICAgIGNvbnN0IHZhcmlhYmxlczogeyBbc3RyaW5nXTogYW55IH0gPSB7XG4gICAgICAgICAgICBmaWx0ZXIsXG4gICAgICAgICAgICBvcmRlckJ5LFxuICAgICAgICAgICAgbGltaXQsXG4gICAgICAgIH07XG4gICAgICAgIGlmICh0aW1lb3V0KSB7XG4gICAgICAgICAgICB2YXJpYWJsZXMudGltZW91dCA9IHRpbWVvdXQ7XG4gICAgICAgIH1cbiAgICAgICAgY29uc3QgciA9IChhd2FpdCB0aGlzLm1vZHVsZS5xdWVyeShxbCwgdmFyaWFibGVzLCBzcGFuKSkuZGF0YVtjXTtcbiAgICAgICAgYXdhaXQgc3Bhbi5maW5pc2goKTtcbiAgICAgICAgcmV0dXJuIHI7XG4gICAgfVxuXG4gICAgc3Vic2NyaWJlKFxuICAgICAgICBmaWx0ZXI6IGFueSxcbiAgICAgICAgcmVzdWx0OiBzdHJpbmcsXG4gICAgICAgIG9uRG9jRXZlbnQ6IERvY0V2ZW50LFxuICAgICAgICBvbkVycm9yPzogKGVycjogRXJyb3IpID0+IHZvaWRcbiAgICApOiBTdWJzY3JpcHRpb24ge1xuICAgICAgICBjb25zdCBzcGFuID0gdGhpcy50cmFjZXIuc3RhcnRTcGFuKCdUT05RdWVyaWVzTW9kdWxlLmpzOnN1YnNjcmliZSAnKTtcbiAgICAgICAgc3Bhbi5zZXRUYWcoVGFncy5TUEFOX0tJTkQsICdjbGllbnQnKTtcbiAgICAgICAgY29uc3QgdGV4dCA9IGBzdWJzY3JpcHRpb24gJHt0aGlzLmNvbGxlY3Rpb25OYW1lfSgkZmlsdGVyOiAke3RoaXMudHlwZU5hbWV9RmlsdGVyKSB7XG4gICAgICAgIFx0JHt0aGlzLmNvbGxlY3Rpb25OYW1lfShmaWx0ZXI6ICRmaWx0ZXIpIHsgJHtyZXN1bHR9IH1cbiAgICAgICAgfWA7XG4gICAgICAgIGNvbnN0IHF1ZXJ5ID0gZ3FsKFt0ZXh0XSk7XG4gICAgICAgIHNwYW4ubG9nKHtcbiAgICAgICAgICAgIGV2ZW50OiAnc3Vic2NyaXB0aW9uJyxcbiAgICAgICAgICAgIHZhbHVlOiBxdWVyeVxuICAgICAgICB9KTtcbiAgICAgICAgbGV0IHN1YnNjcmlwdGlvbiA9IG51bGw7XG4gICAgICAgIChhc3luYyAoKSA9PiB7XG4gICAgICAgICAgICB0cnkge1xuICAgICAgICAgICAgICAgIGNvbnN0IGNsaWVudCA9IGF3YWl0IHRoaXMubW9kdWxlLmVuc3VyZUNsaWVudChzcGFuKTtcbiAgICAgICAgICAgICAgICBjb25zdCBvYnNlcnZhYmxlID0gY2xpZW50LnN1YnNjcmliZSh7XG4gICAgICAgICAgICAgICAgICAgIHF1ZXJ5LFxuICAgICAgICAgICAgICAgICAgICB2YXJpYWJsZXM6IHtcbiAgICAgICAgICAgICAgICAgICAgICAgIGZpbHRlcixcbiAgICAgICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICB9KTtcbiAgICAgICAgICAgICAgICBzdWJzY3JpcHRpb24gPSBvYnNlcnZhYmxlLnN1YnNjcmliZSgobWVzc2FnZSkgPT4ge1xuICAgICAgICAgICAgICAgICAgICBvbkRvY0V2ZW50KCdpbnNlcnQvdXBkYXRlJywgbWVzc2FnZS5kYXRhW3RoaXMuY29sbGVjdGlvbk5hbWVdKTtcbiAgICAgICAgICAgICAgICB9KTtcbiAgICAgICAgICAgIH0gY2F0Y2ggKGVycm9yKSB7XG4gICAgICAgICAgICAgICAgYXdhaXQgc3Bhbi5sb2coe1xuICAgICAgICAgICAgICAgICAgICBldmVudDogJ3N1YnNjcmlwdGlvbiBmYWlsZWQnLFxuICAgICAgICAgICAgICAgICAgICB2YWx1ZTogZXJyb3JcbiAgICAgICAgICAgICAgICB9KTtcbiAgICAgICAgICAgICAgICBpZiAob25FcnJvcikge1xuICAgICAgICAgICAgICAgICAgICBvbkVycm9yKGVycm9yKTtcbiAgICAgICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAgICAgICBjb25zb2xlLmVycm9yKCdUT04gQ2xpZW50IHN1YnNjcmlwdGlvbiBlcnJvcicsIGVycm9yKTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG4gICAgICAgIH0pKCk7XG4gICAgICAgIHJldHVybiB7XG4gICAgICAgICAgICB1bnN1YnNjcmliZTogKCkgPT4ge1xuICAgICAgICAgICAgICAgIGlmIChzdWJzY3JpcHRpb24pIHtcbiAgICAgICAgICAgICAgICAgICAgc3Vic2NyaXB0aW9uLnVuc3Vic2NyaWJlKCk7XG4gICAgICAgICAgICAgICAgICAgIHNwYW4uZmluaXNoKCk7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfSxcbiAgICAgICAgfTtcbiAgICB9XG5cbiAgICBhc3luYyB3YWl0Rm9yKGZpbHRlcjogYW55LCByZXN1bHQ6IHN0cmluZywgdGltZW91dD86IG51bWJlcik6IFByb21pc2U8YW55PiB7XG4gICAgICAgIGNvbnN0IHNwYW4gPSBhd2FpdCB0aGlzLnRyYWNlci5zdGFydFNwYW4oJ1RPTlF1ZXJpZXNNb2R1bGUuanM6d2FpdEZvcicpO1xuICAgICAgICBhd2FpdCBzcGFuLmxvZyh7XG4gICAgICAgICAgICBldmVudDogJ3dhaXRGb3InLFxuICAgICAgICAgICAgdmFsdWU6IGBGaWx0ZXI6ICR7ZmlsdGVyfSBcXG4gVGltZW91dDogJHt0aW1lb3V0fWBcbiAgICAgICAgfSk7XG4gICAgICAgIGNvbnN0IGRvY3MgPSBhd2FpdCB0aGlzLnF1ZXJ5KGZpbHRlciwgcmVzdWx0LCB1bmRlZmluZWQsIHVuZGVmaW5lZCwgdGltZW91dCB8fCA0MF8wMDAsIHNwYW4pO1xuICAgICAgICBpZiAoZG9jcy5sZW5ndGggPiAwKSB7XG4gICAgICAgICAgICBhd2FpdCBzcGFuLmxvZyh7XG4gICAgICAgICAgICAgICAgZXZlbnQ6ICd3YWl0Rm9yIGV4aXQnLFxuICAgICAgICAgICAgICAgIHZhbHVlOiBgRG9jcy5sZW5ndGggLSAke2RvY3MubGVuZ3RofWBcbiAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgYXdhaXQgc3Bhbi5maW5pc2goKTtcbiAgICAgICAgICAgIHJldHVybiBkb2NzWzBdO1xuICAgICAgICB9XG4gICAgICAgIGF3YWl0IHNwYW4ubG9nKHtcbiAgICAgICAgICAgIGV2ZW50OiAnd2FpdEZvciB0aW1lb3V0JyxcbiAgICAgICAgICAgIHZhbHVlOiAnZXhjZXB0aW9uJ1xuICAgICAgICB9KTtcbiAgICAgICAgYXdhaXQgc3Bhbi5maW5pc2goKTtcbiAgICAgICAgdGhyb3cgVE9OQ2xpZW50RXJyb3Iud2FpdEZvclRpbWVvdXQoKTtcbiAgICB9XG59XG5cblRPTlF1ZXJpZXNNb2R1bGUubW9kdWxlTmFtZSA9ICdUT05RdWVyaWVzTW9kdWxlJztcbiJdfQ==