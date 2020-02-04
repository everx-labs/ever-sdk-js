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
      _regenerator["default"].mark(function _callee4() {
        var result;
        return _regenerator["default"].wrap(function _callee4$(_context4) {
          while (1) {
            switch (_context4.prev = _context4.next) {
              case 0:
                _context4.next = 2;
                return this.query('query{getAccountsCount}');

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
      _regenerator["default"].mark(function _callee5() {
        var result;
        return _regenerator["default"].wrap(function _callee5$(_context5) {
          while (1) {
            switch (_context5.prev = _context5.next) {
              case 0:
                _context5.next = 2;
                return this.query('query{getTransactionsCount}');

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
      _regenerator["default"].mark(function _callee6() {
        var result;
        return _regenerator["default"].wrap(function _callee6$(_context6) {
          while (1) {
            switch (_context6.prev = _context6.next) {
              case 0:
                _context6.next = 2;
                return this.query('query{getAccountsTotalBalance}');

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
      _regenerator["default"].mark(function _callee7(requests) {
        return _regenerator["default"].wrap(function _callee7$(_context7) {
          while (1) {
            switch (_context7.prev = _context7.next) {
              case 0:
                return _context7.abrupt("return", this.mutation("mutation postRequests($requests: [Request]) {\n            postRequests(requests: $requests)\n        }", {
                  requests: requests
                }));

              case 1:
              case "end":
                return _context7.stop();
            }
          }
        }, _callee7, this);
      }));

      function postRequests(_x3) {
        return _postRequests.apply(this, arguments);
      }

      return postRequests;
    }()
  }, {
    key: "mutation",
    value: function () {
      var _mutation = (0, _asyncToGenerator2["default"])(
      /*#__PURE__*/
      _regenerator["default"].mark(function _callee8(ql) {
        var variables,
            mutation,
            _args8 = arguments;
        return _regenerator["default"].wrap(function _callee8$(_context8) {
          while (1) {
            switch (_context8.prev = _context8.next) {
              case 0:
                variables = _args8.length > 1 && _args8[1] !== undefined ? _args8[1] : {};
                mutation = (0, _graphqlTag["default"])([ql]);
                return _context8.abrupt("return", this.graphQl(function (client) {
                  return client.mutate({
                    mutation: mutation,
                    variables: variables
                  });
                }));

              case 3:
              case "end":
                return _context8.stop();
            }
          }
        }, _callee8, this);
      }));

      function mutation(_x4) {
        return _mutation.apply(this, arguments);
      }

      return mutation;
    }()
  }, {
    key: "query",
    value: function () {
      var _query = (0, _asyncToGenerator2["default"])(
      /*#__PURE__*/
      _regenerator["default"].mark(function _callee9(ql) {
        var variables,
            mutation,
            _args9 = arguments;
        return _regenerator["default"].wrap(function _callee9$(_context9) {
          while (1) {
            switch (_context9.prev = _context9.next) {
              case 0:
                variables = _args9.length > 1 && _args9[1] !== undefined ? _args9[1] : {};
                mutation = (0, _graphqlTag["default"])([ql]);
                return _context9.abrupt("return", this.graphQl(function (client) {
                  return client.mutate({
                    mutation: mutation,
                    variables: variables
                  });
                }));

              case 3:
              case "end":
                return _context9.stop();
            }
          }
        }, _callee9, this);
      }));

      function query(_x5) {
        return _query.apply(this, arguments);
      }

      return query;
    }()
  }, {
    key: "graphQl",
    value: function () {
      var _graphQl = (0, _asyncToGenerator2["default"])(
      /*#__PURE__*/
      _regenerator["default"].mark(function _callee10(request) {
        var client, errors;
        return _regenerator["default"].wrap(function _callee10$(_context10) {
          while (1) {
            switch (_context10.prev = _context10.next) {
              case 0:
                _context10.next = 2;
                return this.ensureClient();

              case 2:
                client = _context10.sent;
                _context10.prev = 3;
                return _context10.abrupt("return", request(client));

              case 7:
                _context10.prev = 7;
                _context10.t0 = _context10["catch"](3);
                errors = _context10.t0 && _context10.t0.networkError && _context10.t0.networkError.result && _context10.t0.networkError.result.errors;

                if (!errors) {
                  _context10.next = 14;
                  break;
                }

                throw _TONClient.TONClientError.queryFailed(errors);

              case 14:
                throw _context10.t0;

              case 15:
              case "end":
                return _context10.stop();
            }
          }
        }, _callee10, this, [[3, 7]]);
      }));

      function graphQl(_x6) {
        return _graphQl.apply(this, arguments);
      }

      return graphQl;
    }()
  }, {
    key: "ensureClient",
    value: function () {
      var _ensureClient = (0, _asyncToGenerator2["default"])(
      /*#__PURE__*/
      _regenerator["default"].mark(function _callee11() {
        var _ref, httpUrl, wsUrl, fetch, WebSocket, subscriptionClient;

        return _regenerator["default"].wrap(function _callee11$(_context11) {
          while (1) {
            switch (_context11.prev = _context11.next) {
              case 0:
                if (!this._client) {
                  _context11.next = 2;
                  break;
                }

                return _context11.abrupt("return", this._client);

              case 2:
                _context11.next = 4;
                return this.getClientConfig();

              case 4:
                _ref = _context11.sent;
                httpUrl = _ref.httpUrl;
                wsUrl = _ref.wsUrl;
                fetch = _ref.fetch;
                WebSocket = _ref.WebSocket;
                subscriptionClient = new _subscriptionsTransportWs.SubscriptionClient(wsUrl, {
                  reconnect: true
                }, WebSocket);

                subscriptionClient.maxConnectTimeGenerator.duration = function () {
                  return subscriptionClient.maxConnectTimeGenerator.max;
                };

                this._client = new _apolloClient.ApolloClient({
                  cache: new _apolloCacheInmemory.InMemoryCache({}),
                  link: (0, _apolloLink.split)(function (_ref2) {
                    var query = _ref2.query;
                    var definition = (0, _apolloUtilities.getMainDefinition)(query);
                    return definition.kind === 'OperationDefinition' && definition.operation === 'subscription';
                  }, new _apolloLinkWs.WebSocketLink(subscriptionClient), new _apolloLinkHttp.HttpLink({
                    uri: httpUrl,
                    fetch: fetch
                  })),
                  defaultOptions: {
                    watchQuery: {
                      fetchPolicy: 'no-cache'
                    },
                    query: {
                      fetchPolicy: 'no-cache'
                    }
                  }
                });
                return _context11.abrupt("return", this._client);

              case 13:
              case "end":
                return _context11.stop();
            }
          }
        }, _callee11, this);
      }));

      function ensureClient() {
        return _ensureClient.apply(this, arguments);
      }

      return ensureClient;
    }()
  }, {
    key: "close",
    value: function () {
      var _close = (0, _asyncToGenerator2["default"])(
      /*#__PURE__*/
      _regenerator["default"].mark(function _callee12() {
        var client;
        return _regenerator["default"].wrap(function _callee12$(_context12) {
          while (1) {
            switch (_context12.prev = _context12.next) {
              case 0:
                if (!this._client) {
                  _context12.next = 6;
                  break;
                }

                client = this._client;
                this._client = null;
                client.stop();
                _context12.next = 6;
                return client.clearStore();

              case 6:
              case "end":
                return _context12.stop();
            }
          }
        }, _callee12, this);
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
      _regenerator["default"].mark(function _callee13(filter, result, orderBy, limit, timeout) {
        var c, t, ql, variables;
        return _regenerator["default"].wrap(function _callee13$(_context13) {
          while (1) {
            switch (_context13.prev = _context13.next) {
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

                _context13.next = 7;
                return this.module.query(ql, variables);

              case 7:
                _context13.t0 = c;
                return _context13.abrupt("return", _context13.sent.data[_context13.t0]);

              case 9:
              case "end":
                return _context13.stop();
            }
          }
        }, _callee13, this);
      }));

      function query(_x7, _x8, _x9, _x10, _x11) {
        return _query2.apply(this, arguments);
      }

      return query;
    }()
  }, {
    key: "subscribe",
    value: function subscribe(filter, result, onDocEvent, onError) {
      var _this2 = this;

      var text = "subscription ".concat(this.collectionName, "($filter: ").concat(this.typeName, "Filter) {\n        \t").concat(this.collectionName, "(filter: $filter) { ").concat(result, " }\n        }");
      var query = (0, _graphqlTag["default"])([text]);
      var subscription = null;
      (0, _asyncToGenerator2["default"])(
      /*#__PURE__*/
      _regenerator["default"].mark(function _callee14() {
        var client, observable;
        return _regenerator["default"].wrap(function _callee14$(_context14) {
          while (1) {
            switch (_context14.prev = _context14.next) {
              case 0:
                _context14.prev = 0;
                _context14.next = 3;
                return _this2.module.ensureClient();

              case 3:
                client = _context14.sent;
                observable = client.subscribe({
                  query: query,
                  variables: {
                    filter: filter
                  }
                });
                subscription = observable.subscribe(function (message) {
                  onDocEvent('insert/update', message.data[_this2.collectionName]);
                });
                _context14.next = 11;
                break;

              case 8:
                _context14.prev = 8;
                _context14.t0 = _context14["catch"](0);

                if (onError) {
                  onError(_context14.t0);
                } else {
                  console.error('TON Client subscription error', _context14.t0);
                }

              case 11:
              case "end":
                return _context14.stop();
            }
          }
        }, _callee14, null, [[0, 8]]);
      }))();
      return {
        unsubscribe: function unsubscribe() {
          if (subscription) {
            subscription.unsubscribe();
          }
        }
      };
    }
  }, {
    key: "waitFor",
    value: function () {
      var _waitFor = (0, _asyncToGenerator2["default"])(
      /*#__PURE__*/
      _regenerator["default"].mark(function _callee15(filter, result, timeout) {
        var docs;
        return _regenerator["default"].wrap(function _callee15$(_context15) {
          while (1) {
            switch (_context15.prev = _context15.next) {
              case 0:
                _context15.next = 2;
                return this.query(filter, result, undefined, undefined, timeout || 40000);

              case 2:
                docs = _context15.sent;

                if (!(docs.length > 0)) {
                  _context15.next = 5;
                  break;
                }

                return _context15.abrupt("return", docs[0]);

              case 5:
                throw _TONClient.TONClientError.waitForTimeout();

              case 6:
              case "end":
                return _context15.stop();
            }
          }
        }, _callee15, this);
      }));

      function waitFor(_x12, _x13, _x14) {
        return _waitFor.apply(this, arguments);
      }

      return waitFor;
    }()
  }]);
  return TONQCollection;
}();

TONQueriesModule.moduleName = 'TONQueriesModule';
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy9tb2R1bGVzL1RPTlF1ZXJpZXNNb2R1bGUuanMiXSwibmFtZXMiOlsiVE9OUXVlcmllc01vZHVsZSIsImNvbnRleHQiLCJfY2xpZW50Iiwib3ZlcnJpZGVXc1VybCIsImNvbmZpZyIsImdldE1vZHVsZSIsIlRPTkNvbmZpZ01vZHVsZSIsInRyYW5zYWN0aW9ucyIsIlRPTlFDb2xsZWN0aW9uIiwibWVzc2FnZXMiLCJibG9ja3MiLCJhY2NvdW50cyIsImZldGNoIiwic291cmNlVXJsIiwicmVzcG9uc2UiLCJyZWRpcmVjdGVkIiwidXJsIiwic291cmNlTG9jYXRpb24iLCJVUkxQYXJ0cyIsImZpeCIsInBhcnRzIiwicXVlcnkiLCJ0b0xvd2VyQ2FzZSIsInJlc3BvbnNlTG9jYXRpb24iLCJjbGllbnRQbGF0Zm9ybSIsIlRPTkNsaWVudCIsImRhdGEiLCJFcnJvciIsImh0dHBVcmwiLCJxdWVyaWVzSHR0cFVybCIsIndzVXJsIiwicXVlcmllc1dzVXJsIiwiZGV0ZWN0UmVkaXJlY3QiLCJsb2NhdGlvbiIsInJlcGxhY2UiLCJXZWJTb2NrZXQiLCJyZXN1bHQiLCJnZXRBY2NvdW50c0NvdW50IiwiZ2V0VHJhbnNhY3Rpb25zQ291bnQiLCJnZXRBY2NvdW50c1RvdGFsQmFsYW5jZSIsInJlcXVlc3RzIiwibXV0YXRpb24iLCJxbCIsInZhcmlhYmxlcyIsImdyYXBoUWwiLCJjbGllbnQiLCJtdXRhdGUiLCJyZXF1ZXN0IiwiZW5zdXJlQ2xpZW50IiwiZXJyb3JzIiwibmV0d29ya0Vycm9yIiwiVE9OQ2xpZW50RXJyb3IiLCJxdWVyeUZhaWxlZCIsImdldENsaWVudENvbmZpZyIsInN1YnNjcmlwdGlvbkNsaWVudCIsIlN1YnNjcmlwdGlvbkNsaWVudCIsInJlY29ubmVjdCIsIm1heENvbm5lY3RUaW1lR2VuZXJhdG9yIiwiZHVyYXRpb24iLCJtYXgiLCJBcG9sbG9DbGllbnQiLCJjYWNoZSIsIkluTWVtb3J5Q2FjaGUiLCJsaW5rIiwiZGVmaW5pdGlvbiIsImtpbmQiLCJvcGVyYXRpb24iLCJXZWJTb2NrZXRMaW5rIiwiSHR0cExpbmsiLCJ1cmkiLCJkZWZhdWx0T3B0aW9ucyIsIndhdGNoUXVlcnkiLCJmZXRjaFBvbGljeSIsInN0b3AiLCJjbGVhclN0b3JlIiwiVE9OTW9kdWxlIiwibW9kdWxlIiwiY29sbGVjdGlvbk5hbWUiLCJ0eXBlTmFtZSIsInN1YnN0ciIsInRvVXBwZXJDYXNlIiwibGVuZ3RoIiwiZmlsdGVyIiwib3JkZXJCeSIsImxpbWl0IiwidGltZW91dCIsImMiLCJ0Iiwib25Eb2NFdmVudCIsIm9uRXJyb3IiLCJ0ZXh0Iiwic3Vic2NyaXB0aW9uIiwib2JzZXJ2YWJsZSIsInN1YnNjcmliZSIsIm1lc3NhZ2UiLCJjb25zb2xlIiwiZXJyb3IiLCJ1bnN1YnNjcmliZSIsInVuZGVmaW5lZCIsImRvY3MiLCJ3YWl0Rm9yVGltZW91dCIsIm1vZHVsZU5hbWUiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBa0JBOztBQUNBOztBQUNBOztBQUNBOztBQUNBOztBQUNBOztBQUNBOztBQUNBOztBQUNBOztBQUVBOztBQUNBOztBQTdCQTs7Ozs7Ozs7Ozs7Ozs7O0lBd0NxQkEsZ0I7Ozs7O0FBSWpCLDRCQUFZQyxPQUFaLEVBQXVDO0FBQUE7O0FBQUE7QUFDbkMsNEhBQU1BLE9BQU47QUFEbUM7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFFbkMsVUFBS0MsT0FBTCxHQUFlLElBQWY7QUFDQSxVQUFLQyxhQUFMLEdBQXFCLElBQXJCO0FBSG1DO0FBSXRDOzs7Ozs7Ozs7Ozs7QUFHRyxxQkFBS0MsTUFBTCxHQUFjLEtBQUtILE9BQUwsQ0FBYUksU0FBYixDQUF1QkMsMkJBQXZCLENBQWQ7QUFDQSxxQkFBS0MsWUFBTCxHQUFvQixJQUFJQyxjQUFKLENBQW1CLElBQW5CLEVBQXlCLGNBQXpCLENBQXBCO0FBQ0EscUJBQUtDLFFBQUwsR0FBZ0IsSUFBSUQsY0FBSixDQUFtQixJQUFuQixFQUF5QixV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Q0MsS0FBUixDQUFjLCtCQUFkO0FBQ0g7O0FBakJSO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLE9BQUQ7QUFvQkEsYUFBTztBQUNIQyxRQUFBQSxXQUFXLEVBQUUsdUJBQU07QUFDZixjQUFJTixZQUFKLEVBQWtCO0FBQ2RBLFlBQUFBLFlBQVksQ0FBQ00sV0FBYjtBQUNIO0FBQ0o7QUFMRSxPQUFQO0FBT0g7Ozs7OztzREFFYWYsTSxFQUFhOUMsTSxFQUFnQmlELE87Ozs7Ozs7dUJBQ3BCLEtBQUtoRSxLQUFMLENBQVc2RCxNQUFYLEVBQW1COUMsTUFBbkIsRUFBMkI4RCxTQUEzQixFQUFzQ0EsU0FBdEMsRUFBaURiLE9BQU8sSUFBSSxLQUE1RCxDOzs7QUFBYmMsZ0JBQUFBLEk7O3NCQUNGQSxJQUFJLENBQUNsQixNQUFMLEdBQWMsQzs7Ozs7bURBQ1BrQixJQUFJLENBQUMsQ0FBRCxDOzs7c0JBRVRoRCwwQkFBZWlELGNBQWYsRTs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFJZHBHLGdCQUFnQixDQUFDcUcsVUFBakIsR0FBOEIsa0JBQTlCIiwic291cmNlc0NvbnRlbnQiOlsiLypcbiAqIENvcHlyaWdodCAyMDE4LTIwMjAgVE9OIERFViBTT0xVVElPTlMgTFRELlxuICpcbiAqIExpY2Vuc2VkIHVuZGVyIHRoZSBTT0ZUV0FSRSBFVkFMVUFUSU9OIExpY2Vuc2UgKHRoZSBcIkxpY2Vuc2VcIik7IHlvdSBtYXkgbm90IHVzZVxuICogdGhpcyBmaWxlIGV4Y2VwdCBpbiBjb21wbGlhbmNlIHdpdGggdGhlIExpY2Vuc2UuICBZb3UgbWF5IG9idGFpbiBhIGNvcHkgb2YgdGhlXG4gKiBMaWNlbnNlIGF0OlxuICpcbiAqIGh0dHA6Ly93d3cudG9uLmRldi9saWNlbnNlc1xuICpcbiAqIFVubGVzcyByZXF1aXJlZCBieSBhcHBsaWNhYmxlIGxhdyBvciBhZ3JlZWQgdG8gaW4gd3JpdGluZywgc29mdHdhcmVcbiAqIGRpc3RyaWJ1dGVkIHVuZGVyIHRoZSBMaWNlbnNlIGlzIGRpc3RyaWJ1dGVkIG9uIGFuIFwiQVMgSVNcIiBCQVNJUyxcbiAqIFdJVEhPVVQgV0FSUkFOVElFUyBPUiBDT05ESVRJT05TIE9GIEFOWSBLSU5ELCBlaXRoZXIgZXhwcmVzcyBvciBpbXBsaWVkLlxuICogU2VlIHRoZSBMaWNlbnNlIGZvciB0aGUgc3BlY2lmaWMgVE9OIERFViBzb2Z0d2FyZSBnb3Zlcm5pbmcgcGVybWlzc2lvbnMgYW5kXG4gKiBsaW1pdGF0aW9ucyB1bmRlciB0aGUgTGljZW5zZS5cbiAqL1xuXG4vLyBAZmxvd1xuXG5pbXBvcnQgeyBJbk1lbW9yeUNhY2hlIH0gZnJvbSAnYXBvbGxvLWNhY2hlLWlubWVtb3J5JztcbmltcG9ydCB7IEFwb2xsb0NsaWVudCB9IGZyb20gJ2Fwb2xsby1jbGllbnQnO1xuaW1wb3J0IHsgc3BsaXQgfSBmcm9tIFwiYXBvbGxvLWxpbmtcIjtcbmltcG9ydCB7IEh0dHBMaW5rIH0gZnJvbSAnYXBvbGxvLWxpbmstaHR0cCc7XG5pbXBvcnQgeyBXZWJTb2NrZXRMaW5rIH0gZnJvbSAnYXBvbGxvLWxpbmstd3MnO1xuaW1wb3J0IHsgZ2V0TWFpbkRlZmluaXRpb24gfSBmcm9tICdhcG9sbG8tdXRpbGl0aWVzJztcbmltcG9ydCBncWwgZnJvbSAnZ3JhcGhxbC10YWcnO1xuaW1wb3J0IHsgU3Vic2NyaXB0aW9uQ2xpZW50IH0gZnJvbSBcInN1YnNjcmlwdGlvbnMtdHJhbnNwb3J0LXdzXCI7XG5pbXBvcnQgeyBUT05DbGllbnQsIFRPTkNsaWVudEVycm9yIH0gZnJvbSAnLi4vVE9OQ2xpZW50JztcbmltcG9ydCB0eXBlIHsgVE9OTW9kdWxlQ29udGV4dCB9IGZyb20gJy4uL1RPTk1vZHVsZSc7XG5pbXBvcnQgeyBUT05Nb2R1bGUgfSBmcm9tICcuLi9UT05Nb2R1bGUnO1xuaW1wb3J0IFRPTkNvbmZpZ01vZHVsZSwgeyBVUkxQYXJ0cyB9IGZyb20gJy4vVE9OQ29uZmlnTW9kdWxlJztcblxudHlwZSBTdWJzY3JpcHRpb24gPSB7XG4gICAgdW5zdWJzY3JpYmU6ICgpID0+IHZvaWRcbn1cblxuZXhwb3J0IHR5cGUgUmVxdWVzdCA9IHtcbiAgICBpZDogc3RyaW5nLFxuICAgIGJvZHk6IHN0cmluZyxcbn1cblxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgVE9OUXVlcmllc01vZHVsZSBleHRlbmRzIFRPTk1vZHVsZSB7XG4gICAgY29uZmlnOiBUT05Db25maWdNb2R1bGU7XG4gICAgb3ZlcnJpZGVXc1VybDogP3N0cmluZztcblxuICAgIGNvbnN0cnVjdG9yKGNvbnRleHQ6IFRPTk1vZHVsZUNvbnRleHQpIHtcbiAgICAgICAgc3VwZXIoY29udGV4dCk7XG4gICAgICAgIHRoaXMuX2NsaWVudCA9IG51bGw7XG4gICAgICAgIHRoaXMub3ZlcnJpZGVXc1VybCA9IG51bGw7XG4gICAgfVxuXG4gICAgYXN5bmMgc2V0dXAoKSB7XG4gICAgICAgIHRoaXMuY29uZmlnID0gdGhpcy5jb250ZXh0LmdldE1vZHVsZShUT05Db25maWdNb2R1bGUpO1xuICAgICAgICB0aGlzLnRyYW5zYWN0aW9ucyA9IG5ldyBUT05RQ29sbGVjdGlvbih0aGlzLCAndHJhbnNhY3Rpb25zJyk7XG4gICAgICAgIHRoaXMubWVzc2FnZXMgPSBuZXcgVE9OUUNvbGxlY3Rpb24odGhpcywgJ21lc3NhZ2VzJyk7XG4gICAgICAgIHRoaXMuYmxvY2tzID0gbmV3IFRPTlFDb2xsZWN0aW9uKHRoaXMsICdibG9ja3MnKTtcbiAgICAgICAgdGhpcy5hY2NvdW50cyA9IG5ldyBUT05RQ29sbGVjdGlvbih0aGlzLCAnYWNjb3VudHMnKTtcbiAgICB9XG5cbiAgICBhc3luYyBkZXRlY3RSZWRpcmVjdChmZXRjaDogYW55LCBzb3VyY2VVcmw6IHN0cmluZyk6IFByb21pc2U8c3RyaW5nPiB7XG4gICAgICAgIGNvbnN0IHJlc3BvbnNlID0gYXdhaXQgZmV0Y2goc291cmNlVXJsKTtcbiAgICAgICAgaWYgKHJlc3BvbnNlLnJlZGlyZWN0ZWQgPT09IHRydWUpIHtcbiAgICAgICAgICAgIHJldHVybiByZXNwb25zZS51cmw7XG4gICAgICAgIH1cbiAgICAgICAgaWYgKHJlc3BvbnNlLnJlZGlyZWN0ZWQgPT09IGZhbHNlKSB7XG4gICAgICAgICAgICByZXR1cm4gJyc7XG4gICAgICAgIH1cbiAgICAgICAgY29uc3Qgc291cmNlTG9jYXRpb24gPSBVUkxQYXJ0cy5maXgoc291cmNlVXJsLCBwYXJ0cyA9PiB7XG4gICAgICAgICAgICBwYXJ0cy5xdWVyeSA9ICcnXG4gICAgICAgIH0pLnRvTG93ZXJDYXNlKCk7XG4gICAgICAgIGNvbnN0IHJlc3BvbnNlTG9jYXRpb24gPSBVUkxQYXJ0cy5maXgocmVzcG9uc2UudXJsLCBwYXJ0cyA9PiB7XG4gICAgICAgICAgICBwYXJ0cy5xdWVyeSA9ICcnXG4gICAgICAgIH0pLnRvTG93ZXJDYXNlKCk7XG4gICAgICAgIHJldHVybiByZXNwb25zZUxvY2F0aW9uICE9PSBzb3VyY2VMb2NhdGlvbiA/IHJlc3BvbnNlLnVybCA6ICcnO1xuICAgIH1cblxuICAgIGFzeW5jIGdldENsaWVudENvbmZpZygpIHtcbiAgICAgICAgY29uc3QgY29uZmlnID0gdGhpcy5jb25maWc7XG4gICAgICAgIGNvbnN0IHsgY2xpZW50UGxhdGZvcm0gfSA9IFRPTkNsaWVudDtcbiAgICAgICAgaWYgKCFjb25maWcuZGF0YSB8fCAhY2xpZW50UGxhdGZvcm0pIHtcbiAgICAgICAgICAgIHRocm93IEVycm9yKCdUT04gQ2xpZW50IGRvZXMgbm90IGNvbmZpZ3VyZWQnKTtcbiAgICAgICAgfVxuICAgICAgICBsZXQgaHR0cFVybCA9IGNvbmZpZy5xdWVyaWVzSHR0cFVybCgpO1xuICAgICAgICBsZXQgd3NVcmwgPSBjb25maWcucXVlcmllc1dzVXJsKCk7XG4gICAgICAgIGNvbnN0IGZldGNoID0gY2xpZW50UGxhdGZvcm0uZmV0Y2g7XG4gICAgICAgIGNvbnN0IHJlZGlyZWN0ZWQgPSBhd2FpdCB0aGlzLmRldGVjdFJlZGlyZWN0KGZldGNoLCBgJHtodHRwVXJsfT9xdWVyeT0lN0JpbmZvJTdCdmVyc2lvbiU3RCU3RGApO1xuICAgICAgICBpZiAocmVkaXJlY3RlZCAhPT0gJycpIHtcbiAgICAgICAgICAgIGNvbnN0IGxvY2F0aW9uID0gVVJMUGFydHMuZml4KHJlZGlyZWN0ZWQsIHBhcnRzID0+IHtcbiAgICAgICAgICAgICAgICBwYXJ0cy5xdWVyeSA9ICcnXG4gICAgICAgICAgICB9KTtcbiAgICAgICAgICAgIGlmICghIWxvY2F0aW9uKSB7XG4gICAgICAgICAgICAgICAgaHR0cFVybCA9IGxvY2F0aW9uO1xuICAgICAgICAgICAgICAgIHdzVXJsID0gbG9jYXRpb25cbiAgICAgICAgICAgICAgICAgICAgLnJlcGxhY2UoL15odHRwczpcXC9cXC8vZ2ksICd3c3M6Ly8nKVxuICAgICAgICAgICAgICAgICAgICAucmVwbGFjZSgvXmh0dHA6XFwvXFwvL2dpLCAnd3M6Ly8nKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgICByZXR1cm4ge1xuICAgICAgICAgICAgaHR0cFVybCxcbiAgICAgICAgICAgIHdzVXJsLFxuICAgICAgICAgICAgZmV0Y2gsXG4gICAgICAgICAgICBXZWJTb2NrZXQ6IGNsaWVudFBsYXRmb3JtLldlYlNvY2tldCxcbiAgICAgICAgfVxuICAgIH1cblxuICAgIGFzeW5jIGdldEFjY291bnRzQ291bnQoKTogUHJvbWlzZTxudW1iZXI+IHtcbiAgICAgICAgY29uc3QgcmVzdWx0ID0gYXdhaXQgdGhpcy5xdWVyeSgncXVlcnl7Z2V0QWNjb3VudHNDb3VudH0nKTtcbiAgICAgICAgcmV0dXJuIHJlc3VsdC5kYXRhLmdldEFjY291bnRzQ291bnQ7XG4gICAgfVxuXG4gICAgYXN5bmMgZ2V0VHJhbnNhY3Rpb25zQ291bnQoKTogUHJvbWlzZTxudW1iZXI+IHtcbiAgICAgICAgY29uc3QgcmVzdWx0ID0gYXdhaXQgdGhpcy5xdWVyeSgncXVlcnl7Z2V0VHJhbnNhY3Rpb25zQ291bnR9Jyk7XG4gICAgICAgIHJldHVybiByZXN1bHQuZGF0YS5nZXRUcmFuc2FjdGlvbnNDb3VudDtcbiAgICB9XG5cbiAgICBhc3luYyBnZXRBY2NvdW50c1RvdGFsQmFsYW5jZSgpOiBQcm9taXNlPHN0cmluZz4ge1xuICAgICAgICBjb25zdCByZXN1bHQgPSBhd2FpdCB0aGlzLnF1ZXJ5KCdxdWVyeXtnZXRBY2NvdW50c1RvdGFsQmFsYW5jZX0nKTtcbiAgICAgICAgcmV0dXJuIHJlc3VsdC5kYXRhLmdldEFjY291bnRzVG90YWxCYWxhbmNlO1xuICAgIH1cblxuICAgIGFzeW5jIHBvc3RSZXF1ZXN0cyhyZXF1ZXN0czogUmVxdWVzdFtdKTogUHJvbWlzZTx2b2lkPiB7XG4gICAgICAgIHJldHVybiB0aGlzLm11dGF0aW9uKGBtdXRhdGlvbiBwb3N0UmVxdWVzdHMoJHJlcXVlc3RzOiBbUmVxdWVzdF0pIHtcbiAgICAgICAgICAgIHBvc3RSZXF1ZXN0cyhyZXF1ZXN0czogJHJlcXVlc3RzKVxuICAgICAgICB9YCwge1xuICAgICAgICAgICAgcmVxdWVzdHMsXG4gICAgICAgIH0pO1xuICAgIH1cblxuICAgIGFzeW5jIG11dGF0aW9uKHFsOiBzdHJpbmcsIHZhcmlhYmxlczogeyBbc3RyaW5nXTogYW55IH0gPSB7fSk6IFByb21pc2U8YW55PiB7XG4gICAgICAgIGNvbnN0IG11dGF0aW9uID0gZ3FsKFtxbF0pO1xuICAgICAgICByZXR1cm4gdGhpcy5ncmFwaFFsKGNsaWVudCA9PiBjbGllbnQubXV0YXRlKHtcbiAgICAgICAgICAgIG11dGF0aW9uLFxuICAgICAgICAgICAgdmFyaWFibGVzLFxuICAgICAgICB9KSk7XG4gICAgfVxuXG4gICAgYXN5bmMgcXVlcnkocWw6IHN0cmluZywgdmFyaWFibGVzOiB7IFtzdHJpbmddOiBhbnkgfSA9IHt9KTogUHJvbWlzZTxhbnk+IHtcbiAgICAgICAgY29uc3QgbXV0YXRpb24gPSBncWwoW3FsXSk7XG4gICAgICAgIHJldHVybiB0aGlzLmdyYXBoUWwoY2xpZW50ID0+IGNsaWVudC5tdXRhdGUoe1xuICAgICAgICAgICAgbXV0YXRpb24sXG4gICAgICAgICAgICB2YXJpYWJsZXMsXG4gICAgICAgIH0pKTtcbiAgICB9XG5cbiAgICBhc3luYyBncmFwaFFsKHJlcXVlc3Q6IChjbGllbnQ6IEFwb2xsb0NsaWVudCkgPT4gUHJvbWlzZTxhbnk+KTogUHJvbWlzZTxhbnk+IHtcbiAgICAgICAgY29uc3QgY2xpZW50ID0gYXdhaXQgdGhpcy5lbnN1cmVDbGllbnQoKTtcbiAgICAgICAgdHJ5IHtcbiAgICAgICAgICAgIHJldHVybiByZXF1ZXN0KGNsaWVudCk7XG4gICAgICAgIH0gY2F0Y2ggKGVycm9yKSB7XG4gICAgICAgICAgICBjb25zdCBlcnJvcnMgPSBlcnJvciAmJiBlcnJvci5uZXR3b3JrRXJyb3IgJiYgZXJyb3IubmV0d29ya0Vycm9yLnJlc3VsdCAmJiBlcnJvci5uZXR3b3JrRXJyb3IucmVzdWx0LmVycm9ycztcbiAgICAgICAgICAgIGlmIChlcnJvcnMpIHtcbiAgICAgICAgICAgICAgICB0aHJvdyBUT05DbGllbnRFcnJvci5xdWVyeUZhaWxlZChlcnJvcnMpO1xuICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgICB0aHJvdyBlcnJvcjtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgIH1cblxuICAgIGFzeW5jIGVuc3VyZUNsaWVudCgpOiBBcG9sbG9DbGllbnQge1xuICAgICAgICBpZiAodGhpcy5fY2xpZW50KSB7XG4gICAgICAgICAgICByZXR1cm4gdGhpcy5fY2xpZW50O1xuICAgICAgICB9XG4gICAgICAgIGNvbnN0IHsgaHR0cFVybCwgd3NVcmwsIGZldGNoLCBXZWJTb2NrZXQgfSA9IGF3YWl0IHRoaXMuZ2V0Q2xpZW50Q29uZmlnKCk7XG4gICAgICAgIGNvbnN0IHN1YnNjcmlwdGlvbkNsaWVudCA9IG5ldyBTdWJzY3JpcHRpb25DbGllbnQoXG4gICAgICAgICAgICB3c1VybCxcbiAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICByZWNvbm5lY3Q6IHRydWVcbiAgICAgICAgICAgIH0sXG4gICAgICAgICAgICBXZWJTb2NrZXRcbiAgICAgICAgKTtcbiAgICAgICAgc3Vic2NyaXB0aW9uQ2xpZW50Lm1heENvbm5lY3RUaW1lR2VuZXJhdG9yLmR1cmF0aW9uID0gKCkgPT4gc3Vic2NyaXB0aW9uQ2xpZW50Lm1heENvbm5lY3RUaW1lR2VuZXJhdG9yLm1heDtcbiAgICAgICAgdGhpcy5fY2xpZW50ID0gbmV3IEFwb2xsb0NsaWVudCh7XG4gICAgICAgICAgICBjYWNoZTogbmV3IEluTWVtb3J5Q2FjaGUoe30pLFxuICAgICAgICAgICAgbGluazogc3BsaXQoXG4gICAgICAgICAgICAgICAgKHsgcXVlcnkgfSkgPT4ge1xuICAgICAgICAgICAgICAgICAgICBjb25zdCBkZWZpbml0aW9uID0gZ2V0TWFpbkRlZmluaXRpb24ocXVlcnkpO1xuICAgICAgICAgICAgICAgICAgICByZXR1cm4gKFxuICAgICAgICAgICAgICAgICAgICAgICAgZGVmaW5pdGlvbi5raW5kID09PSAnT3BlcmF0aW9uRGVmaW5pdGlvbidcbiAgICAgICAgICAgICAgICAgICAgICAgICYmIGRlZmluaXRpb24ub3BlcmF0aW9uID09PSAnc3Vic2NyaXB0aW9uJ1xuICAgICAgICAgICAgICAgICAgICApO1xuICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgbmV3IFdlYlNvY2tldExpbmsoc3Vic2NyaXB0aW9uQ2xpZW50KSxcbiAgICAgICAgICAgICAgICBuZXcgSHR0cExpbmsoe1xuICAgICAgICAgICAgICAgICAgICB1cmk6IGh0dHBVcmwsXG4gICAgICAgICAgICAgICAgICAgIGZldGNoLFxuICAgICAgICAgICAgICAgIH0pLFxuICAgICAgICAgICAgKSxcbiAgICAgICAgICAgIGRlZmF1bHRPcHRpb25zOiB7XG4gICAgICAgICAgICAgICAgd2F0Y2hRdWVyeToge1xuICAgICAgICAgICAgICAgICAgICBmZXRjaFBvbGljeTogJ25vLWNhY2hlJyxcbiAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgIHF1ZXJ5OiB7XG4gICAgICAgICAgICAgICAgICAgIGZldGNoUG9saWN5OiAnbm8tY2FjaGUnLFxuICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICB9XG4gICAgICAgIH0pO1xuICAgICAgICByZXR1cm4gdGhpcy5fY2xpZW50O1xuICAgIH1cblxuICAgIGFzeW5jIGNsb3NlKCkge1xuICAgICAgICBpZiAodGhpcy5fY2xpZW50KSB7XG4gICAgICAgICAgICBjb25zdCBjbGllbnQgPSB0aGlzLl9jbGllbnQ7XG4gICAgICAgICAgICB0aGlzLl9jbGllbnQgPSBudWxsO1xuICAgICAgICAgICAgY2xpZW50LnN0b3AoKTtcbiAgICAgICAgICAgIGF3YWl0IGNsaWVudC5jbGVhclN0b3JlKCk7XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICB0cmFuc2FjdGlvbnM6IFRPTlFDb2xsZWN0aW9uO1xuXG4gICAgbWVzc2FnZXM6IFRPTlFDb2xsZWN0aW9uO1xuXG4gICAgYmxvY2tzOiBUT05RQ29sbGVjdGlvbjtcblxuICAgIGFjY291bnRzOiBUT05RQ29sbGVjdGlvbjtcblxuICAgIF9jbGllbnQ6IEFwb2xsb0NsaWVudDtcbn1cblxuXG50eXBlIERvY0V2ZW50ID0gKGNoYW5nZVR5cGU6IHN0cmluZywgZG9jOiBhbnkpID0+IHZvaWQ7XG5cbnR5cGUgT3JkZXJCeSA9IHtcbiAgICBwYXRoOiBzdHJpbmcsXG4gICAgZGlyZWN0aW9uOiAnQVNDJyB8ICdERVNDJ1xufVxuXG5jbGFzcyBUT05RQ29sbGVjdGlvbiB7XG4gICAgbW9kdWxlOiBUT05RdWVyaWVzTW9kdWxlO1xuXG4gICAgY29sbGVjdGlvbk5hbWU6IHN0cmluZztcbiAgICB0eXBlTmFtZTogc3RyaW5nO1xuXG4gICAgY29uc3RydWN0b3IobW9kdWxlOiBUT05RdWVyaWVzTW9kdWxlLCBjb2xsZWN0aW9uTmFtZTogc3RyaW5nKSB7XG4gICAgICAgIHRoaXMubW9kdWxlID0gbW9kdWxlO1xuICAgICAgICB0aGlzLmNvbGxlY3Rpb25OYW1lID0gY29sbGVjdGlvbk5hbWU7XG4gICAgICAgIHRoaXMudHlwZU5hbWUgPSBjb2xsZWN0aW9uTmFtZS5zdWJzdHIoMCwgMSkudG9VcHBlckNhc2UoKSArXG4gICAgICAgICAgICBjb2xsZWN0aW9uTmFtZS5zdWJzdHIoMSwgY29sbGVjdGlvbk5hbWUubGVuZ3RoIC0gMik7XG4gICAgfVxuXG4gICAgYXN5bmMgcXVlcnkoZmlsdGVyOiBhbnksIHJlc3VsdDogc3RyaW5nLCBvcmRlckJ5PzogT3JkZXJCeVtdLCBsaW1pdD86IG51bWJlciwgdGltZW91dD86IG51bWJlcik6IFByb21pc2U8YW55PiB7XG4gICAgICAgIGNvbnN0IGMgPSB0aGlzLmNvbGxlY3Rpb25OYW1lO1xuICAgICAgICBjb25zdCB0ID0gdGhpcy50eXBlTmFtZTtcbiAgICAgICAgY29uc3QgcWwgPSBgcXVlcnkgJHtjfSgkZmlsdGVyOiAke3R9RmlsdGVyLCAkb3JkZXJCeTogW1F1ZXJ5T3JkZXJCeV0sICRsaW1pdDogSW50LCAkdGltZW91dDogRmxvYXQpIHtcbiAgICAgICAgICAgICR7Y30oZmlsdGVyOiAkZmlsdGVyLCBvcmRlckJ5OiAkb3JkZXJCeSwgbGltaXQ6ICRsaW1pdCwgdGltZW91dDogJHRpbWVvdXQpIHsgJHtyZXN1bHR9IH1cbiAgICAgICAgfWA7XG4gICAgICAgIGNvbnN0IHZhcmlhYmxlczogeyBbc3RyaW5nXTogYW55IH0gPSB7XG4gICAgICAgICAgICBmaWx0ZXIsXG4gICAgICAgICAgICBvcmRlckJ5LFxuICAgICAgICAgICAgbGltaXQsXG4gICAgICAgIH07XG4gICAgICAgIGlmICh0aW1lb3V0KSB7XG4gICAgICAgICAgICB2YXJpYWJsZXMudGltZW91dCA9IHRpbWVvdXQ7XG4gICAgICAgIH1cbiAgICAgICAgcmV0dXJuIChhd2FpdCB0aGlzLm1vZHVsZS5xdWVyeShxbCwgdmFyaWFibGVzKSkuZGF0YVtjXTtcbiAgICB9XG5cbiAgICBzdWJzY3JpYmUoXG4gICAgICAgIGZpbHRlcjogYW55LFxuICAgICAgICByZXN1bHQ6IHN0cmluZyxcbiAgICAgICAgb25Eb2NFdmVudDogRG9jRXZlbnQsXG4gICAgICAgIG9uRXJyb3I/OiAoZXJyOiBFcnJvcikgPT4gdm9pZFxuICAgICk6IFN1YnNjcmlwdGlvbiB7XG4gICAgICAgIGNvbnN0IHRleHQgPSBgc3Vic2NyaXB0aW9uICR7dGhpcy5jb2xsZWN0aW9uTmFtZX0oJGZpbHRlcjogJHt0aGlzLnR5cGVOYW1lfUZpbHRlcikge1xuICAgICAgICBcdCR7dGhpcy5jb2xsZWN0aW9uTmFtZX0oZmlsdGVyOiAkZmlsdGVyKSB7ICR7cmVzdWx0fSB9XG4gICAgICAgIH1gO1xuICAgICAgICBjb25zdCBxdWVyeSA9IGdxbChbdGV4dF0pO1xuICAgICAgICBsZXQgc3Vic2NyaXB0aW9uID0gbnVsbDtcbiAgICAgICAgKGFzeW5jICgpID0+IHtcbiAgICAgICAgICAgIHRyeSB7XG4gICAgICAgICAgICAgICAgY29uc3QgY2xpZW50ID0gYXdhaXQgdGhpcy5tb2R1bGUuZW5zdXJlQ2xpZW50KCk7XG4gICAgICAgICAgICAgICAgY29uc3Qgb2JzZXJ2YWJsZSA9IGNsaWVudC5zdWJzY3JpYmUoe1xuICAgICAgICAgICAgICAgICAgICBxdWVyeSxcbiAgICAgICAgICAgICAgICAgICAgdmFyaWFibGVzOiB7XG4gICAgICAgICAgICAgICAgICAgICAgICBmaWx0ZXIsXG4gICAgICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICAgICAgc3Vic2NyaXB0aW9uID0gb2JzZXJ2YWJsZS5zdWJzY3JpYmUoKG1lc3NhZ2UpID0+IHtcbiAgICAgICAgICAgICAgICAgICAgb25Eb2NFdmVudCgnaW5zZXJ0L3VwZGF0ZScsIG1lc3NhZ2UuZGF0YVt0aGlzLmNvbGxlY3Rpb25OYW1lXSk7XG4gICAgICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICB9IGNhdGNoIChlcnJvcikge1xuICAgICAgICAgICAgICAgIGlmIChvbkVycm9yKSB7XG4gICAgICAgICAgICAgICAgICAgIG9uRXJyb3IoZXJyb3IpO1xuICAgICAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgICAgICAgIGNvbnNvbGUuZXJyb3IoJ1RPTiBDbGllbnQgc3Vic2NyaXB0aW9uIGVycm9yJywgZXJyb3IpO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cbiAgICAgICAgfSkoKTtcbiAgICAgICAgcmV0dXJuIHtcbiAgICAgICAgICAgIHVuc3Vic2NyaWJlOiAoKSA9PiB7XG4gICAgICAgICAgICAgICAgaWYgKHN1YnNjcmlwdGlvbikge1xuICAgICAgICAgICAgICAgICAgICBzdWJzY3JpcHRpb24udW5zdWJzY3JpYmUoKTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9LFxuICAgICAgICB9O1xuICAgIH1cblxuICAgIGFzeW5jIHdhaXRGb3IoZmlsdGVyOiBhbnksIHJlc3VsdDogc3RyaW5nLCB0aW1lb3V0PzogbnVtYmVyKTogUHJvbWlzZTxhbnk+IHtcbiAgICAgICAgY29uc3QgZG9jcyA9IGF3YWl0IHRoaXMucXVlcnkoZmlsdGVyLCByZXN1bHQsIHVuZGVmaW5lZCwgdW5kZWZpbmVkLCB0aW1lb3V0IHx8IDQwXzAwMCk7XG4gICAgICAgIGlmIChkb2NzLmxlbmd0aCA+IDApIHtcbiAgICAgICAgICAgIHJldHVybiBkb2NzWzBdO1xuICAgICAgICB9XG4gICAgICAgIHRocm93IFRPTkNsaWVudEVycm9yLndhaXRGb3JUaW1lb3V0KCk7XG4gICAgfVxufVxuXG5UT05RdWVyaWVzTW9kdWxlLm1vZHVsZU5hbWUgPSAnVE9OUXVlcmllc01vZHVsZSc7XG4iXX0=