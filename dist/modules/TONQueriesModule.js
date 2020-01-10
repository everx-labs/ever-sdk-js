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
 * Copyright 2018-2019 TON DEV SOLUTIONS LTD.
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
                    return parts.query = '';
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
        var result;
        return _regenerator["default"].wrap(function _callee3$(_context3) {
          while (1) {
            switch (_context3.prev = _context3.next) {
              case 0:
                _context3.next = 2;
                return this.query('query{getAccountsCount}');

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
        var result;
        return _regenerator["default"].wrap(function _callee4$(_context4) {
          while (1) {
            switch (_context4.prev = _context4.next) {
              case 0:
                _context4.next = 2;
                return this.query('query{getTransactionsCount}');

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
        var result;
        return _regenerator["default"].wrap(function _callee5$(_context5) {
          while (1) {
            switch (_context5.prev = _context5.next) {
              case 0:
                _context5.next = 2;
                return this.query('query{getAccountsTotalBalance}');

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
      _regenerator["default"].mark(function _callee6(requests) {
        return _regenerator["default"].wrap(function _callee6$(_context6) {
          while (1) {
            switch (_context6.prev = _context6.next) {
              case 0:
                return _context6.abrupt("return", this.mutation("mutation postRequests($requests: [Request]) {\n            postRequests(requests: $requests)\n        }", {
                  requests: requests
                }));

              case 1:
              case "end":
                return _context6.stop();
            }
          }
        }, _callee6, this);
      }));

      function postRequests(_x) {
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
            mutation,
            _args7 = arguments;
        return _regenerator["default"].wrap(function _callee7$(_context7) {
          while (1) {
            switch (_context7.prev = _context7.next) {
              case 0:
                variables = _args7.length > 1 && _args7[1] !== undefined ? _args7[1] : {};
                mutation = (0, _graphqlTag["default"])([ql]);
                return _context7.abrupt("return", this.graphQl(function (client) {
                  return client.mutate({
                    mutation: mutation,
                    variables: variables
                  });
                }));

              case 3:
              case "end":
                return _context7.stop();
            }
          }
        }, _callee7, this);
      }));

      function mutation(_x2) {
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

      function query(_x3) {
        return _query.apply(this, arguments);
      }

      return query;
    }()
  }, {
    key: "graphQl",
    value: function () {
      var _graphQl = (0, _asyncToGenerator2["default"])(
      /*#__PURE__*/
      _regenerator["default"].mark(function _callee9(request) {
        var client, errors;
        return _regenerator["default"].wrap(function _callee9$(_context9) {
          while (1) {
            switch (_context9.prev = _context9.next) {
              case 0:
                _context9.next = 2;
                return this.ensureClient();

              case 2:
                client = _context9.sent;
                _context9.prev = 3;
                return _context9.abrupt("return", request(client));

              case 7:
                _context9.prev = 7;
                _context9.t0 = _context9["catch"](3);
                errors = _context9.t0 && _context9.t0.networkError && _context9.t0.networkError.result && _context9.t0.networkError.result.errors;

                if (!errors) {
                  _context9.next = 14;
                  break;
                }

                throw _TONClient.TONClientError.queryFailed(errors);

              case 14:
                throw _context9.t0;

              case 15:
              case "end":
                return _context9.stop();
            }
          }
        }, _callee9, this, [[3, 7]]);
      }));

      function graphQl(_x4) {
        return _graphQl.apply(this, arguments);
      }

      return graphQl;
    }()
  }, {
    key: "ensureClient",
    value: function () {
      var _ensureClient = (0, _asyncToGenerator2["default"])(
      /*#__PURE__*/
      _regenerator["default"].mark(function _callee10() {
        var _ref, httpUrl, wsUrl, fetch, WebSocket;

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
                _context10.next = 4;
                return this.getClientConfig();

              case 4:
                _ref = _context10.sent;
                httpUrl = _ref.httpUrl;
                wsUrl = _ref.wsUrl;
                fetch = _ref.fetch;
                WebSocket = _ref.WebSocket;
                this._client = new _apolloClient.ApolloClient({
                  cache: new _apolloCacheInmemory.InMemoryCache({}),
                  link: (0, _apolloLink.split)(function (_ref2) {
                    var query = _ref2.query;
                    var definition = (0, _apolloUtilities.getMainDefinition)(query);
                    return definition.kind === 'OperationDefinition' && definition.operation === 'subscription';
                  }, new _apolloLinkWs.WebSocketLink(new _subscriptionsTransportWs.SubscriptionClient(wsUrl, {
                    reconnect: true
                  }, WebSocket)), new _apolloLinkHttp.HttpLink({
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
                return _context10.abrupt("return", this._client);

              case 11:
              case "end":
                return _context10.stop();
            }
          }
        }, _callee10, this);
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
  }

  (0, _createClass2["default"])(TONQCollection, [{
    key: "query",
    value: function () {
      var _query2 = (0, _asyncToGenerator2["default"])(
      /*#__PURE__*/
      _regenerator["default"].mark(function _callee12(filter, result, orderBy, limit, timeout) {
        var c, t;
        return _regenerator["default"].wrap(function _callee12$(_context12) {
          while (1) {
            switch (_context12.prev = _context12.next) {
              case 0:
                c = this.collectionName;
                t = this.typeName;
                _context12.next = 4;
                return this.module.query("query ".concat(c, "($filter: ").concat(t, "Filter, $orderBy: [QueryOrderBy], $limit: Int, $timeout: Float) {\n                    ").concat(c, "(filter: $filter, orderBy: $orderBy, limit: $limit, timeout: $timeout) { ").concat(result, " }\n                }"), {
                  filter: filter,
                  orderBy: orderBy,
                  limit: limit,
                  timeout: timeout
                });

              case 4:
                _context12.t0 = c;
                return _context12.abrupt("return", _context12.sent.data[_context12.t0]);

              case 6:
              case "end":
                return _context12.stop();
            }
          }
        }, _callee12, this);
      }));

      function query(_x5, _x6, _x7, _x8, _x9) {
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
      _regenerator["default"].mark(function _callee13() {
        var client, observable;
        return _regenerator["default"].wrap(function _callee13$(_context13) {
          while (1) {
            switch (_context13.prev = _context13.next) {
              case 0:
                _context13.prev = 0;
                _context13.next = 3;
                return _this2.module.ensureClient();

              case 3:
                client = _context13.sent;
                observable = client.subscribe({
                  query: query,
                  variables: {
                    filter: filter
                  }
                });
                subscription = observable.subscribe(function (message) {
                  onDocEvent('insert/update', message.data[_this2.collectionName]);
                });
                _context13.next = 11;
                break;

              case 8:
                _context13.prev = 8;
                _context13.t0 = _context13["catch"](0);

                if (onError) {
                  onError(_context13.t0);
                } else {
                  console.error('TON Client subscription error', _context13.t0);
                }

              case 11:
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
        var docs;
        return _regenerator["default"].wrap(function _callee14$(_context14) {
          while (1) {
            switch (_context14.prev = _context14.next) {
              case 0:
                _context14.next = 2;
                return this.query(filter, result, undefined, undefined, (timeout || 40000) / 1000);

              case 2:
                docs = _context14.sent;

                if (!(docs.length > 0)) {
                  _context14.next = 5;
                  break;
                }

                return _context14.abrupt("return", docs[0]);

              case 5:
                throw _TONClient.TONClientError.waitForTimeout();

              case 6:
              case "end":
                return _context14.stop();
            }
          }
        }, _callee14, this);
      }));

      function waitFor(_x10, _x11, _x12) {
        return _waitFor.apply(this, arguments);
      }

      return waitFor;
    }()
  }]);
  return TONQCollection;
}();

TONQueriesModule.moduleName = 'TONQueriesModule';
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy9tb2R1bGVzL1RPTlF1ZXJpZXNNb2R1bGUuanMiXSwibmFtZXMiOlsiVE9OUXVlcmllc01vZHVsZSIsImNvbnRleHQiLCJfY2xpZW50Iiwib3ZlcnJpZGVXc1VybCIsImNvbmZpZyIsImdldE1vZHVsZSIsIlRPTkNvbmZpZ01vZHVsZSIsInRyYW5zYWN0aW9ucyIsIlRPTlFDb2xsZWN0aW9uIiwibWVzc2FnZXMiLCJibG9ja3MiLCJhY2NvdW50cyIsImNsaWVudFBsYXRmb3JtIiwiVE9OQ2xpZW50IiwiZGF0YSIsIkVycm9yIiwiaHR0cFVybCIsInF1ZXJpZXNIdHRwVXJsIiwid3NVcmwiLCJxdWVyaWVzV3NVcmwiLCJmZXRjaCIsInJlc3BvbnNlIiwicmVkaXJlY3RlZCIsImxvY2F0aW9uIiwiVVJMUGFydHMiLCJmaXgiLCJ1cmwiLCJwYXJ0cyIsInF1ZXJ5IiwicmVwbGFjZSIsIldlYlNvY2tldCIsInJlc3VsdCIsImdldEFjY291bnRzQ291bnQiLCJnZXRUcmFuc2FjdGlvbnNDb3VudCIsImdldEFjY291bnRzVG90YWxCYWxhbmNlIiwicmVxdWVzdHMiLCJtdXRhdGlvbiIsInFsIiwidmFyaWFibGVzIiwiZ3JhcGhRbCIsImNsaWVudCIsIm11dGF0ZSIsInJlcXVlc3QiLCJlbnN1cmVDbGllbnQiLCJlcnJvcnMiLCJuZXR3b3JrRXJyb3IiLCJUT05DbGllbnRFcnJvciIsInF1ZXJ5RmFpbGVkIiwiZ2V0Q2xpZW50Q29uZmlnIiwiQXBvbGxvQ2xpZW50IiwiY2FjaGUiLCJJbk1lbW9yeUNhY2hlIiwibGluayIsImRlZmluaXRpb24iLCJraW5kIiwib3BlcmF0aW9uIiwiV2ViU29ja2V0TGluayIsIlN1YnNjcmlwdGlvbkNsaWVudCIsInJlY29ubmVjdCIsIkh0dHBMaW5rIiwidXJpIiwiZGVmYXVsdE9wdGlvbnMiLCJ3YXRjaFF1ZXJ5IiwiZmV0Y2hQb2xpY3kiLCJzdG9wIiwiY2xlYXJTdG9yZSIsIlRPTk1vZHVsZSIsIm1vZHVsZSIsImNvbGxlY3Rpb25OYW1lIiwidHlwZU5hbWUiLCJzdWJzdHIiLCJ0b1VwcGVyQ2FzZSIsImxlbmd0aCIsImZpbHRlciIsIm9yZGVyQnkiLCJsaW1pdCIsInRpbWVvdXQiLCJjIiwidCIsIm9uRG9jRXZlbnQiLCJvbkVycm9yIiwidGV4dCIsInN1YnNjcmlwdGlvbiIsIm9ic2VydmFibGUiLCJzdWJzY3JpYmUiLCJtZXNzYWdlIiwiY29uc29sZSIsImVycm9yIiwidW5zdWJzY3JpYmUiLCJ1bmRlZmluZWQiLCJkb2NzIiwid2FpdEZvclRpbWVvdXQiLCJtb2R1bGVOYW1lIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQWtCQTs7QUFDQTs7QUFDQTs7QUFDQTs7QUFDQTs7QUFDQTs7QUFDQTs7QUFDQTs7QUFDQTs7QUFFQTs7QUFDQTs7QUE3QkE7Ozs7Ozs7Ozs7Ozs7OztJQXdDcUJBLGdCOzs7OztBQUlqQiw0QkFBWUMsT0FBWixFQUF1QztBQUFBOztBQUFBO0FBQ25DLDRIQUFNQSxPQUFOO0FBRG1DO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBRW5DLFVBQUtDLE9BQUwsR0FBZSxJQUFmO0FBQ0EsVUFBS0MsYUFBTCxHQUFxQixJQUFyQjtBQUhtQztBQUl0Qzs7Ozs7Ozs7Ozs7O0FBR0cscUJBQUtDLE1BQUwsR0FBYyxLQUFLSCxPQUFMLENBQWFJLFNBQWIsQ0FBdUJDLDJCQUF2QixDQUFkO0FBQ0EscUJBQUtDLFlBQUwsR0FBb0IsSUFBSUMsY0FBSixDQUFtQixJQUFuQixFQUF5QixjQUF6QixDQUFwQjtBQUNBLHFCQUFLQyxRQUFMLEdBQWdCLElBQUlELGNBQUosQ0FBbUIsSUFBbkIsRUFBeUIsVUFBekIsQ0FBaEI7QUFDQSxxQkFBS0UsTUFBTCxHQUFjLElBQUlGLGNBQUosQ0FBbUIsSUFBbkIsRUFBeUIsUUFBekIsQ0FBZDtBQUNBLHFCQUFLRyxRQUFMLEdBQWdCLElBQUlILGNBQUosQ0FBbUIsSUFBbkIsRUFBeUIsVUFBekIsQ0FBaEI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUlNSixnQkFBQUEsTSxHQUFTLEtBQUtBLE07QUFDWlEsZ0JBQUFBLGMsR0FBbUJDLG9CLENBQW5CRCxjOztzQkFDSixDQUFDUixNQUFNLENBQUNVLElBQVIsSUFBZ0IsQ0FBQ0YsYzs7Ozs7c0JBQ1hHLEtBQUssQ0FBQyxnQ0FBRCxDOzs7QUFFWEMsZ0JBQUFBLE8sR0FBVVosTUFBTSxDQUFDYSxjQUFQLEU7QUFDVkMsZ0JBQUFBLEssR0FBUWQsTUFBTSxDQUFDZSxZQUFQLEU7QUFDTkMsZ0JBQUFBLEssR0FBUVIsY0FBYyxDQUFDUSxLOzt1QkFDTkEsS0FBSyxXQUFJSixPQUFKLG9DOzs7QUFBdEJLLGdCQUFBQSxROztBQUNOLG9CQUFJQSxRQUFRLENBQUNDLFVBQWIsRUFBeUI7QUFDZkMsa0JBQUFBLFFBRGUsR0FDSkMsMEJBQVNDLEdBQVQsQ0FBYUosUUFBUSxDQUFDSyxHQUF0QixFQUEyQixVQUFBQyxLQUFLO0FBQUEsMkJBQUlBLEtBQUssQ0FBQ0MsS0FBTixHQUFjLEVBQWxCO0FBQUEsbUJBQWhDLENBREk7O0FBRXJCLHNCQUFJLENBQUMsQ0FBQ0wsUUFBTixFQUFnQjtBQUNaUCxvQkFBQUEsT0FBTyxHQUFHTyxRQUFWO0FBQ0FMLG9CQUFBQSxLQUFLLEdBQUdLLFFBQVEsQ0FDWE0sT0FERyxDQUNLLGVBREwsRUFDc0IsUUFEdEIsRUFFSEEsT0FGRyxDQUVLLGNBRkwsRUFFcUIsT0FGckIsQ0FBUjtBQUdIO0FBQ0o7O2tEQUNNO0FBQ0hiLGtCQUFBQSxPQUFPLEVBQVBBLE9BREc7QUFFSEUsa0JBQUFBLEtBQUssRUFBTEEsS0FGRztBQUdIRSxrQkFBQUEsS0FBSyxFQUFMQSxLQUhHO0FBSUhVLGtCQUFBQSxTQUFTLEVBQUVsQixjQUFjLENBQUNrQjtBQUp2QixpQjs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozt1QkFTYyxLQUFLRixLQUFMLENBQVcseUJBQVgsQzs7O0FBQWZHLGdCQUFBQSxNO2tEQUNDQSxNQUFNLENBQUNqQixJQUFQLENBQVlrQixnQjs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozt1QkFJRSxLQUFLSixLQUFMLENBQVcsNkJBQVgsQzs7O0FBQWZHLGdCQUFBQSxNO2tEQUNDQSxNQUFNLENBQUNqQixJQUFQLENBQVltQixvQjs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozt1QkFJRSxLQUFLTCxLQUFMLENBQVcsZ0NBQVgsQzs7O0FBQWZHLGdCQUFBQSxNO2tEQUNDQSxNQUFNLENBQUNqQixJQUFQLENBQVlvQix1Qjs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O3FEQUdKQyxROzs7OztrREFDUixLQUFLQyxRQUFMLDRHQUVIO0FBQ0FELGtCQUFBQSxRQUFRLEVBQVJBO0FBREEsaUJBRkcsQzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O3FEQU9JRSxFOzs7Ozs7OztBQUFZQyxnQkFBQUEsUyw4REFBK0IsRTtBQUNoREYsZ0JBQUFBLFEsR0FBVyw0QkFBSSxDQUFDQyxFQUFELENBQUosQztrREFDVixLQUFLRSxPQUFMLENBQWEsVUFBQUMsTUFBTTtBQUFBLHlCQUFJQSxNQUFNLENBQUNDLE1BQVAsQ0FBYztBQUN4Q0wsb0JBQUFBLFFBQVEsRUFBUkEsUUFEd0M7QUFFeENFLG9CQUFBQSxTQUFTLEVBQVRBO0FBRndDLG1CQUFkLENBQUo7QUFBQSxpQkFBbkIsQzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O3FEQU1DRCxFOzs7Ozs7OztBQUFZQyxnQkFBQUEsUyw4REFBK0IsRTtBQUM3Q0YsZ0JBQUFBLFEsR0FBVyw0QkFBSSxDQUFDQyxFQUFELENBQUosQztrREFDVixLQUFLRSxPQUFMLENBQWEsVUFBQUMsTUFBTTtBQUFBLHlCQUFJQSxNQUFNLENBQUNDLE1BQVAsQ0FBYztBQUN4Q0wsb0JBQUFBLFFBQVEsRUFBUkEsUUFEd0M7QUFFeENFLG9CQUFBQSxTQUFTLEVBQVRBO0FBRndDLG1CQUFkLENBQUo7QUFBQSxpQkFBbkIsQzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O3FEQU1HSSxPOzs7Ozs7O3VCQUNXLEtBQUtDLFlBQUwsRTs7O0FBQWZILGdCQUFBQSxNOztrREFFS0UsT0FBTyxDQUFDRixNQUFELEM7Ozs7O0FBRVJJLGdCQUFBQSxNLEdBQVMsZ0JBQVMsYUFBTUMsWUFBZixJQUErQixhQUFNQSxZQUFOLENBQW1CZCxNQUFsRCxJQUE0RCxhQUFNYyxZQUFOLENBQW1CZCxNQUFuQixDQUEwQmEsTTs7cUJBQ2pHQSxNOzs7OztzQkFDTUUsMEJBQWVDLFdBQWYsQ0FBMkJILE1BQTNCLEM7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7cUJBUVYsS0FBSzFDLE87Ozs7O21EQUNFLEtBQUtBLE87Ozs7dUJBRW1DLEtBQUs4QyxlQUFMLEU7Ozs7QUFBM0NoQyxnQkFBQUEsTyxRQUFBQSxPO0FBQVNFLGdCQUFBQSxLLFFBQUFBLEs7QUFBT0UsZ0JBQUFBLEssUUFBQUEsSztBQUFPVSxnQkFBQUEsUyxRQUFBQSxTO0FBQy9CLHFCQUFLNUIsT0FBTCxHQUFlLElBQUkrQywwQkFBSixDQUFpQjtBQUM1QkMsa0JBQUFBLEtBQUssRUFBRSxJQUFJQyxrQ0FBSixDQUFrQixFQUFsQixDQURxQjtBQUU1QkMsa0JBQUFBLElBQUksRUFBRSx1QkFDRixpQkFBZTtBQUFBLHdCQUFaeEIsS0FBWSxTQUFaQSxLQUFZO0FBQ1gsd0JBQU15QixVQUFVLEdBQUcsd0NBQWtCekIsS0FBbEIsQ0FBbkI7QUFDQSwyQkFDSXlCLFVBQVUsQ0FBQ0MsSUFBWCxLQUFvQixxQkFBcEIsSUFDR0QsVUFBVSxDQUFDRSxTQUFYLEtBQXlCLGNBRmhDO0FBSUgsbUJBUEMsRUFRRixJQUFJQywyQkFBSixDQUFrQixJQUFJQyw0Q0FBSixDQUNkdkMsS0FEYyxFQUVkO0FBQ0l3QyxvQkFBQUEsU0FBUyxFQUFFO0FBRGYsbUJBRmMsRUFLZDVCLFNBTGMsQ0FBbEIsQ0FSRSxFQWVGLElBQUk2Qix3QkFBSixDQUFhO0FBQ1RDLG9CQUFBQSxHQUFHLEVBQUU1QyxPQURJO0FBRVRJLG9CQUFBQSxLQUFLLEVBQUxBO0FBRlMsbUJBQWIsQ0FmRSxDQUZzQjtBQXNCNUJ5QyxrQkFBQUEsY0FBYyxFQUFFO0FBQ1pDLG9CQUFBQSxVQUFVLEVBQUU7QUFDUkMsc0JBQUFBLFdBQVcsRUFBRTtBQURMLHFCQURBO0FBSVpuQyxvQkFBQUEsS0FBSyxFQUFFO0FBQ0htQyxzQkFBQUEsV0FBVyxFQUFFO0FBRFY7QUFKSztBQXRCWSxpQkFBakIsQ0FBZjttREErQk8sS0FBSzdELE87Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztxQkFJUixLQUFLQSxPOzs7OztBQUNDc0MsZ0JBQUFBLE0sR0FBUyxLQUFLdEMsTztBQUNwQixxQkFBS0EsT0FBTCxHQUFlLElBQWY7QUFDQXNDLGdCQUFBQSxNQUFNLENBQUN3QixJQUFQOzt1QkFDTXhCLE1BQU0sQ0FBQ3lCLFVBQVAsRTs7Ozs7Ozs7Ozs7Ozs7Ozs7O0VBOUk0QkMscUI7Ozs7SUFxS3hDMUQsYzs7O0FBTUYsMEJBQVkyRCxNQUFaLEVBQXNDQyxjQUF0QyxFQUE4RDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQzFELFNBQUtELE1BQUwsR0FBY0EsTUFBZDtBQUNBLFNBQUtDLGNBQUwsR0FBc0JBLGNBQXRCO0FBQ0EsU0FBS0MsUUFBTCxHQUFnQkQsY0FBYyxDQUFDRSxNQUFmLENBQXNCLENBQXRCLEVBQXlCLENBQXpCLEVBQTRCQyxXQUE1QixLQUNaSCxjQUFjLENBQUNFLE1BQWYsQ0FBc0IsQ0FBdEIsRUFBeUJGLGNBQWMsQ0FBQ0ksTUFBZixHQUF3QixDQUFqRCxDQURKO0FBRUg7Ozs7Ozs7c0RBRVdDLE0sRUFBYTFDLE0sRUFBZ0IyQyxPLEVBQXFCQyxLLEVBQWdCQyxPOzs7Ozs7QUFDcEVDLGdCQUFBQSxDLEdBQUksS0FBS1QsYztBQUNUVSxnQkFBQUEsQyxHQUFJLEtBQUtULFE7O3VCQUNELEtBQUtGLE1BQUwsQ0FBWXZDLEtBQVosaUJBQ0RpRCxDQURDLHVCQUNhQyxDQURiLG9HQUVBRCxDQUZBLHNGQUU2RTlDLE1BRjdFLDRCQUdGO0FBQ0owQyxrQkFBQUEsTUFBTSxFQUFOQSxNQURJO0FBRUpDLGtCQUFBQSxPQUFPLEVBQVBBLE9BRkk7QUFHSkMsa0JBQUFBLEtBQUssRUFBTEEsS0FISTtBQUlKQyxrQkFBQUEsT0FBTyxFQUFQQTtBQUpJLGlCQUhFLEM7OztnQ0FRREMsQzttRUFBTC9ELEk7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs4QkFJUjJELE0sRUFDQTFDLE0sRUFDQWdELFUsRUFDQUMsTyxFQUNZO0FBQUE7O0FBQ1osVUFBTUMsSUFBSSwwQkFBbUIsS0FBS2IsY0FBeEIsdUJBQW1ELEtBQUtDLFFBQXhELGtDQUNQLEtBQUtELGNBREUsaUNBQ21DckMsTUFEbkMsa0JBQVY7QUFHQSxVQUFNSCxLQUFLLEdBQUcsNEJBQUksQ0FBQ3FELElBQUQsQ0FBSixDQUFkO0FBQ0EsVUFBSUMsWUFBWSxHQUFHLElBQW5CO0FBQ0E7QUFBQTtBQUFBLG1DQUFDO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSx1QkFFNEIsTUFBSSxDQUFDZixNQUFMLENBQVl4QixZQUFaLEVBRjVCOztBQUFBO0FBRWFILGdCQUFBQSxNQUZiO0FBR2EyQyxnQkFBQUEsVUFIYixHQUcwQjNDLE1BQU0sQ0FBQzRDLFNBQVAsQ0FBaUI7QUFDaEN4RCxrQkFBQUEsS0FBSyxFQUFMQSxLQURnQztBQUVoQ1Usa0JBQUFBLFNBQVMsRUFBRTtBQUNQbUMsb0JBQUFBLE1BQU0sRUFBTkE7QUFETztBQUZxQixpQkFBakIsQ0FIMUI7QUFTT1MsZ0JBQUFBLFlBQVksR0FBR0MsVUFBVSxDQUFDQyxTQUFYLENBQXFCLFVBQUNDLE9BQUQsRUFBYTtBQUM3Q04sa0JBQUFBLFVBQVUsQ0FBQyxlQUFELEVBQWtCTSxPQUFPLENBQUN2RSxJQUFSLENBQWEsTUFBSSxDQUFDc0QsY0FBbEIsQ0FBbEIsQ0FBVjtBQUNILGlCQUZjLENBQWY7QUFUUDtBQUFBOztBQUFBO0FBQUE7QUFBQTs7QUFhTyxvQkFBSVksT0FBSixFQUFhO0FBQ1RBLGtCQUFBQSxPQUFPLGVBQVA7QUFDSCxpQkFGRCxNQUVPO0FBQ0hNLGtCQUFBQSxPQUFPLENBQUNDLEtBQVIsQ0FBYywrQkFBZDtBQUNIOztBQWpCUjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxPQUFEO0FBb0JBLGFBQU87QUFDSEMsUUFBQUEsV0FBVyxFQUFFLHVCQUFNO0FBQ2YsY0FBSU4sWUFBSixFQUFrQjtBQUNkQSxZQUFBQSxZQUFZLENBQUNNLFdBQWI7QUFDSDtBQUNKO0FBTEUsT0FBUDtBQU9IOzs7Ozs7c0RBRWFmLE0sRUFBYTFDLE0sRUFBZ0I2QyxPOzs7Ozs7O3VCQUNwQixLQUFLaEQsS0FBTCxDQUFXNkMsTUFBWCxFQUFtQjFDLE1BQW5CLEVBQTJCMEQsU0FBM0IsRUFBc0NBLFNBQXRDLEVBQWlELENBQUNiLE9BQU8sSUFBSSxLQUFaLElBQXNCLElBQXZFLEM7OztBQUFiYyxnQkFBQUEsSTs7c0JBQ0ZBLElBQUksQ0FBQ2xCLE1BQUwsR0FBYyxDOzs7OzttREFDUGtCLElBQUksQ0FBQyxDQUFELEM7OztzQkFFVDVDLDBCQUFlNkMsY0FBZixFOzs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQStEZDNGLGdCQUFnQixDQUFDNEYsVUFBakIsR0FBOEIsa0JBQTlCIiwic291cmNlc0NvbnRlbnQiOlsiLypcbiAqIENvcHlyaWdodCAyMDE4LTIwMTkgVE9OIERFViBTT0xVVElPTlMgTFRELlxuICpcbiAqIExpY2Vuc2VkIHVuZGVyIHRoZSBTT0ZUV0FSRSBFVkFMVUFUSU9OIExpY2Vuc2UgKHRoZSBcIkxpY2Vuc2VcIik7IHlvdSBtYXkgbm90IHVzZVxuICogdGhpcyBmaWxlIGV4Y2VwdCBpbiBjb21wbGlhbmNlIHdpdGggdGhlIExpY2Vuc2UuICBZb3UgbWF5IG9idGFpbiBhIGNvcHkgb2YgdGhlXG4gKiBMaWNlbnNlIGF0OlxuICpcbiAqIGh0dHA6Ly93d3cudG9uLmRldi9saWNlbnNlc1xuICpcbiAqIFVubGVzcyByZXF1aXJlZCBieSBhcHBsaWNhYmxlIGxhdyBvciBhZ3JlZWQgdG8gaW4gd3JpdGluZywgc29mdHdhcmVcbiAqIGRpc3RyaWJ1dGVkIHVuZGVyIHRoZSBMaWNlbnNlIGlzIGRpc3RyaWJ1dGVkIG9uIGFuIFwiQVMgSVNcIiBCQVNJUyxcbiAqIFdJVEhPVVQgV0FSUkFOVElFUyBPUiBDT05ESVRJT05TIE9GIEFOWSBLSU5ELCBlaXRoZXIgZXhwcmVzcyBvciBpbXBsaWVkLlxuICogU2VlIHRoZSBMaWNlbnNlIGZvciB0aGUgc3BlY2lmaWMgVE9OIERFViBzb2Z0d2FyZSBnb3Zlcm5pbmcgcGVybWlzc2lvbnMgYW5kXG4gKiBsaW1pdGF0aW9ucyB1bmRlciB0aGUgTGljZW5zZS5cbiAqL1xuXG4vLyBAZmxvd1xuXG5pbXBvcnQgeyBJbk1lbW9yeUNhY2hlIH0gZnJvbSAnYXBvbGxvLWNhY2hlLWlubWVtb3J5JztcbmltcG9ydCB7IEFwb2xsb0NsaWVudCB9IGZyb20gJ2Fwb2xsby1jbGllbnQnO1xuaW1wb3J0IHsgc3BsaXQgfSBmcm9tIFwiYXBvbGxvLWxpbmtcIjtcbmltcG9ydCB7IEh0dHBMaW5rIH0gZnJvbSAnYXBvbGxvLWxpbmstaHR0cCc7XG5pbXBvcnQgeyBXZWJTb2NrZXRMaW5rIH0gZnJvbSAnYXBvbGxvLWxpbmstd3MnO1xuaW1wb3J0IHsgZ2V0TWFpbkRlZmluaXRpb24gfSBmcm9tICdhcG9sbG8tdXRpbGl0aWVzJztcbmltcG9ydCBncWwgZnJvbSAnZ3JhcGhxbC10YWcnO1xuaW1wb3J0IHsgU3Vic2NyaXB0aW9uQ2xpZW50IH0gZnJvbSBcInN1YnNjcmlwdGlvbnMtdHJhbnNwb3J0LXdzXCI7XG5pbXBvcnQgeyBUT05DbGllbnQsIFRPTkNsaWVudEVycm9yIH0gZnJvbSAnLi4vVE9OQ2xpZW50JztcbmltcG9ydCB0eXBlIHsgVE9OTW9kdWxlQ29udGV4dCB9IGZyb20gJy4uL1RPTk1vZHVsZSc7XG5pbXBvcnQgeyBUT05Nb2R1bGUgfSBmcm9tICcuLi9UT05Nb2R1bGUnO1xuaW1wb3J0IFRPTkNvbmZpZ01vZHVsZSwgeyBVUkxQYXJ0cyB9IGZyb20gJy4vVE9OQ29uZmlnTW9kdWxlJztcblxudHlwZSBTdWJzY3JpcHRpb24gPSB7XG4gICAgdW5zdWJzY3JpYmU6ICgpID0+IHZvaWRcbn1cblxuZXhwb3J0IHR5cGUgUmVxdWVzdCA9IHtcbiAgICBpZDogc3RyaW5nLFxuICAgIGJvZHk6IHN0cmluZyxcbn1cblxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgVE9OUXVlcmllc01vZHVsZSBleHRlbmRzIFRPTk1vZHVsZSB7XG4gICAgY29uZmlnOiBUT05Db25maWdNb2R1bGU7XG4gICAgb3ZlcnJpZGVXc1VybDogP3N0cmluZztcblxuICAgIGNvbnN0cnVjdG9yKGNvbnRleHQ6IFRPTk1vZHVsZUNvbnRleHQpIHtcbiAgICAgICAgc3VwZXIoY29udGV4dCk7XG4gICAgICAgIHRoaXMuX2NsaWVudCA9IG51bGw7XG4gICAgICAgIHRoaXMub3ZlcnJpZGVXc1VybCA9IG51bGw7XG4gICAgfVxuXG4gICAgYXN5bmMgc2V0dXAoKSB7XG4gICAgICAgIHRoaXMuY29uZmlnID0gdGhpcy5jb250ZXh0LmdldE1vZHVsZShUT05Db25maWdNb2R1bGUpO1xuICAgICAgICB0aGlzLnRyYW5zYWN0aW9ucyA9IG5ldyBUT05RQ29sbGVjdGlvbih0aGlzLCAndHJhbnNhY3Rpb25zJyk7XG4gICAgICAgIHRoaXMubWVzc2FnZXMgPSBuZXcgVE9OUUNvbGxlY3Rpb24odGhpcywgJ21lc3NhZ2VzJyk7XG4gICAgICAgIHRoaXMuYmxvY2tzID0gbmV3IFRPTlFDb2xsZWN0aW9uKHRoaXMsICdibG9ja3MnKTtcbiAgICAgICAgdGhpcy5hY2NvdW50cyA9IG5ldyBUT05RQ29sbGVjdGlvbih0aGlzLCAnYWNjb3VudHMnKTtcbiAgICB9XG5cbiAgICBhc3luYyBnZXRDbGllbnRDb25maWcoKSB7XG4gICAgICAgIGNvbnN0IGNvbmZpZyA9IHRoaXMuY29uZmlnO1xuICAgICAgICBjb25zdCB7IGNsaWVudFBsYXRmb3JtIH0gPSBUT05DbGllbnQ7XG4gICAgICAgIGlmICghY29uZmlnLmRhdGEgfHwgIWNsaWVudFBsYXRmb3JtKSB7XG4gICAgICAgICAgICB0aHJvdyBFcnJvcignVE9OIENsaWVudCBkb2VzIG5vdCBjb25maWd1cmVkJyk7XG4gICAgICAgIH1cbiAgICAgICAgbGV0IGh0dHBVcmwgPSBjb25maWcucXVlcmllc0h0dHBVcmwoKTtcbiAgICAgICAgbGV0IHdzVXJsID0gY29uZmlnLnF1ZXJpZXNXc1VybCgpO1xuICAgICAgICBjb25zdCBmZXRjaCA9IGNsaWVudFBsYXRmb3JtLmZldGNoO1xuICAgICAgICBjb25zdCByZXNwb25zZSA9IGF3YWl0IGZldGNoKGAke2h0dHBVcmx9P3F1ZXJ5PSU3QmluZm8lN0J2ZXJzaW9uJTdEJTdEYCk7XG4gICAgICAgIGlmIChyZXNwb25zZS5yZWRpcmVjdGVkKSB7XG4gICAgICAgICAgICBjb25zdCBsb2NhdGlvbiA9IFVSTFBhcnRzLmZpeChyZXNwb25zZS51cmwsIHBhcnRzID0+IHBhcnRzLnF1ZXJ5ID0gJycpO1xuICAgICAgICAgICAgaWYgKCEhbG9jYXRpb24pIHtcbiAgICAgICAgICAgICAgICBodHRwVXJsID0gbG9jYXRpb247XG4gICAgICAgICAgICAgICAgd3NVcmwgPSBsb2NhdGlvblxuICAgICAgICAgICAgICAgICAgICAucmVwbGFjZSgvXmh0dHBzOlxcL1xcLy9naSwgJ3dzczovLycpXG4gICAgICAgICAgICAgICAgICAgIC5yZXBsYWNlKC9eaHR0cDpcXC9cXC8vZ2ksICd3czovLycpO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICAgIHJldHVybiB7XG4gICAgICAgICAgICBodHRwVXJsLFxuICAgICAgICAgICAgd3NVcmwsXG4gICAgICAgICAgICBmZXRjaCxcbiAgICAgICAgICAgIFdlYlNvY2tldDogY2xpZW50UGxhdGZvcm0uV2ViU29ja2V0LFxuICAgICAgICB9XG4gICAgfVxuXG4gICAgYXN5bmMgZ2V0QWNjb3VudHNDb3VudCgpOiBQcm9taXNlPG51bWJlcj4ge1xuICAgICAgICBjb25zdCByZXN1bHQgPSBhd2FpdCB0aGlzLnF1ZXJ5KCdxdWVyeXtnZXRBY2NvdW50c0NvdW50fScpO1xuICAgICAgICByZXR1cm4gcmVzdWx0LmRhdGEuZ2V0QWNjb3VudHNDb3VudDtcbiAgICB9XG5cbiAgICBhc3luYyBnZXRUcmFuc2FjdGlvbnNDb3VudCgpOiBQcm9taXNlPG51bWJlcj4ge1xuICAgICAgICBjb25zdCByZXN1bHQgPSBhd2FpdCB0aGlzLnF1ZXJ5KCdxdWVyeXtnZXRUcmFuc2FjdGlvbnNDb3VudH0nKTtcbiAgICAgICAgcmV0dXJuIHJlc3VsdC5kYXRhLmdldFRyYW5zYWN0aW9uc0NvdW50O1xuICAgIH1cblxuICAgIGFzeW5jIGdldEFjY291bnRzVG90YWxCYWxhbmNlKCk6IFByb21pc2U8c3RyaW5nPiB7XG4gICAgICAgIGNvbnN0IHJlc3VsdCA9IGF3YWl0IHRoaXMucXVlcnkoJ3F1ZXJ5e2dldEFjY291bnRzVG90YWxCYWxhbmNlfScpO1xuICAgICAgICByZXR1cm4gcmVzdWx0LmRhdGEuZ2V0QWNjb3VudHNUb3RhbEJhbGFuY2U7XG4gICAgfVxuXG4gICAgYXN5bmMgcG9zdFJlcXVlc3RzKHJlcXVlc3RzOiBSZXF1ZXN0W10pOiBQcm9taXNlPHZvaWQ+IHtcbiAgICAgICAgcmV0dXJuIHRoaXMubXV0YXRpb24oYG11dGF0aW9uIHBvc3RSZXF1ZXN0cygkcmVxdWVzdHM6IFtSZXF1ZXN0XSkge1xuICAgICAgICAgICAgcG9zdFJlcXVlc3RzKHJlcXVlc3RzOiAkcmVxdWVzdHMpXG4gICAgICAgIH1gLCB7XG4gICAgICAgICAgICByZXF1ZXN0cyxcbiAgICAgICAgfSk7XG4gICAgfVxuXG4gICAgYXN5bmMgbXV0YXRpb24ocWw6IHN0cmluZywgdmFyaWFibGVzOiB7IFtzdHJpbmddOiBhbnkgfSA9IHt9KTogUHJvbWlzZTxhbnk+IHtcbiAgICAgICAgY29uc3QgbXV0YXRpb24gPSBncWwoW3FsXSk7XG4gICAgICAgIHJldHVybiB0aGlzLmdyYXBoUWwoY2xpZW50ID0+IGNsaWVudC5tdXRhdGUoe1xuICAgICAgICAgICAgbXV0YXRpb24sXG4gICAgICAgICAgICB2YXJpYWJsZXMsXG4gICAgICAgIH0pKTtcbiAgICB9XG5cbiAgICBhc3luYyBxdWVyeShxbDogc3RyaW5nLCB2YXJpYWJsZXM6IHsgW3N0cmluZ106IGFueSB9ID0ge30pOiBQcm9taXNlPGFueT4ge1xuICAgICAgICBjb25zdCBtdXRhdGlvbiA9IGdxbChbcWxdKTtcbiAgICAgICAgcmV0dXJuIHRoaXMuZ3JhcGhRbChjbGllbnQgPT4gY2xpZW50Lm11dGF0ZSh7XG4gICAgICAgICAgICBtdXRhdGlvbixcbiAgICAgICAgICAgIHZhcmlhYmxlcyxcbiAgICAgICAgfSkpO1xuICAgIH1cblxuICAgIGFzeW5jIGdyYXBoUWwocmVxdWVzdDogKGNsaWVudDogQXBvbGxvQ2xpZW50KSA9PiBQcm9taXNlPGFueT4pOiBQcm9taXNlPGFueT4ge1xuICAgICAgICBjb25zdCBjbGllbnQgPSBhd2FpdCB0aGlzLmVuc3VyZUNsaWVudCgpO1xuICAgICAgICB0cnkge1xuICAgICAgICAgICAgcmV0dXJuIHJlcXVlc3QoY2xpZW50KTtcbiAgICAgICAgfSBjYXRjaCAoZXJyb3IpIHtcbiAgICAgICAgICAgIGNvbnN0IGVycm9ycyA9IGVycm9yICYmIGVycm9yLm5ldHdvcmtFcnJvciAmJiBlcnJvci5uZXR3b3JrRXJyb3IucmVzdWx0ICYmIGVycm9yLm5ldHdvcmtFcnJvci5yZXN1bHQuZXJyb3JzO1xuICAgICAgICAgICAgaWYgKGVycm9ycykge1xuICAgICAgICAgICAgICAgIHRocm93IFRPTkNsaWVudEVycm9yLnF1ZXJ5RmFpbGVkKGVycm9ycyk7XG4gICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAgIHRocm93IGVycm9yO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgfVxuXG4gICAgYXN5bmMgZW5zdXJlQ2xpZW50KCk6IEFwb2xsb0NsaWVudCB7XG4gICAgICAgIGlmICh0aGlzLl9jbGllbnQpIHtcbiAgICAgICAgICAgIHJldHVybiB0aGlzLl9jbGllbnQ7XG4gICAgICAgIH1cbiAgICAgICAgY29uc3QgeyBodHRwVXJsLCB3c1VybCwgZmV0Y2gsIFdlYlNvY2tldCB9ID0gYXdhaXQgdGhpcy5nZXRDbGllbnRDb25maWcoKTtcbiAgICAgICAgdGhpcy5fY2xpZW50ID0gbmV3IEFwb2xsb0NsaWVudCh7XG4gICAgICAgICAgICBjYWNoZTogbmV3IEluTWVtb3J5Q2FjaGUoe30pLFxuICAgICAgICAgICAgbGluazogc3BsaXQoXG4gICAgICAgICAgICAgICAgKHsgcXVlcnkgfSkgPT4ge1xuICAgICAgICAgICAgICAgICAgICBjb25zdCBkZWZpbml0aW9uID0gZ2V0TWFpbkRlZmluaXRpb24ocXVlcnkpO1xuICAgICAgICAgICAgICAgICAgICByZXR1cm4gKFxuICAgICAgICAgICAgICAgICAgICAgICAgZGVmaW5pdGlvbi5raW5kID09PSAnT3BlcmF0aW9uRGVmaW5pdGlvbidcbiAgICAgICAgICAgICAgICAgICAgICAgICYmIGRlZmluaXRpb24ub3BlcmF0aW9uID09PSAnc3Vic2NyaXB0aW9uJ1xuICAgICAgICAgICAgICAgICAgICApO1xuICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgbmV3IFdlYlNvY2tldExpbmsobmV3IFN1YnNjcmlwdGlvbkNsaWVudChcbiAgICAgICAgICAgICAgICAgICAgd3NVcmwsXG4gICAgICAgICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIHJlY29ubmVjdDogdHJ1ZVxuICAgICAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgICAgICBXZWJTb2NrZXRcbiAgICAgICAgICAgICAgICApKSxcbiAgICAgICAgICAgICAgICBuZXcgSHR0cExpbmsoe1xuICAgICAgICAgICAgICAgICAgICB1cmk6IGh0dHBVcmwsXG4gICAgICAgICAgICAgICAgICAgIGZldGNoLFxuICAgICAgICAgICAgICAgIH0pLFxuICAgICAgICAgICAgKSxcbiAgICAgICAgICAgIGRlZmF1bHRPcHRpb25zOiB7XG4gICAgICAgICAgICAgICAgd2F0Y2hRdWVyeToge1xuICAgICAgICAgICAgICAgICAgICBmZXRjaFBvbGljeTogJ25vLWNhY2hlJyxcbiAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgIHF1ZXJ5OiB7XG4gICAgICAgICAgICAgICAgICAgIGZldGNoUG9saWN5OiAnbm8tY2FjaGUnLFxuICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICB9XG4gICAgICAgIH0pO1xuICAgICAgICByZXR1cm4gdGhpcy5fY2xpZW50O1xuICAgIH1cblxuICAgIGFzeW5jIGNsb3NlKCkge1xuICAgICAgICBpZiAodGhpcy5fY2xpZW50KSB7XG4gICAgICAgICAgICBjb25zdCBjbGllbnQgPSB0aGlzLl9jbGllbnQ7XG4gICAgICAgICAgICB0aGlzLl9jbGllbnQgPSBudWxsO1xuICAgICAgICAgICAgY2xpZW50LnN0b3AoKTtcbiAgICAgICAgICAgIGF3YWl0IGNsaWVudC5jbGVhclN0b3JlKCk7XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICB0cmFuc2FjdGlvbnM6IFRPTlFDb2xsZWN0aW9uO1xuXG4gICAgbWVzc2FnZXM6IFRPTlFDb2xsZWN0aW9uO1xuXG4gICAgYmxvY2tzOiBUT05RQ29sbGVjdGlvbjtcblxuICAgIGFjY291bnRzOiBUT05RQ29sbGVjdGlvbjtcblxuICAgIF9jbGllbnQ6IEFwb2xsb0NsaWVudDtcbn1cblxuXG50eXBlIERvY0V2ZW50ID0gKGNoYW5nZVR5cGU6IHN0cmluZywgZG9jOiBhbnkpID0+IHZvaWQ7XG5cbnR5cGUgT3JkZXJCeSA9IHtcbiAgICBwYXRoOiBzdHJpbmcsXG4gICAgZGlyZWN0aW9uOiAnQVNDJyB8ICdERVNDJ1xufVxuXG5jbGFzcyBUT05RQ29sbGVjdGlvbiB7XG4gICAgbW9kdWxlOiBUT05RdWVyaWVzTW9kdWxlO1xuXG4gICAgY29sbGVjdGlvbk5hbWU6IHN0cmluZztcbiAgICB0eXBlTmFtZTogc3RyaW5nO1xuXG4gICAgY29uc3RydWN0b3IobW9kdWxlOiBUT05RdWVyaWVzTW9kdWxlLCBjb2xsZWN0aW9uTmFtZTogc3RyaW5nKSB7XG4gICAgICAgIHRoaXMubW9kdWxlID0gbW9kdWxlO1xuICAgICAgICB0aGlzLmNvbGxlY3Rpb25OYW1lID0gY29sbGVjdGlvbk5hbWU7XG4gICAgICAgIHRoaXMudHlwZU5hbWUgPSBjb2xsZWN0aW9uTmFtZS5zdWJzdHIoMCwgMSkudG9VcHBlckNhc2UoKSArXG4gICAgICAgICAgICBjb2xsZWN0aW9uTmFtZS5zdWJzdHIoMSwgY29sbGVjdGlvbk5hbWUubGVuZ3RoIC0gMik7XG4gICAgfVxuXG4gICAgYXN5bmMgcXVlcnkoZmlsdGVyOiBhbnksIHJlc3VsdDogc3RyaW5nLCBvcmRlckJ5PzogT3JkZXJCeVtdLCBsaW1pdD86IG51bWJlciwgdGltZW91dD86IG51bWJlcik6IFByb21pc2U8YW55PiB7XG4gICAgICAgIGNvbnN0IGMgPSB0aGlzLmNvbGxlY3Rpb25OYW1lO1xuICAgICAgICBjb25zdCB0ID0gdGhpcy50eXBlTmFtZTtcbiAgICAgICAgcmV0dXJuIChhd2FpdCB0aGlzLm1vZHVsZS5xdWVyeShcbiAgICAgICAgICAgIGBxdWVyeSAke2N9KCRmaWx0ZXI6ICR7dH1GaWx0ZXIsICRvcmRlckJ5OiBbUXVlcnlPcmRlckJ5XSwgJGxpbWl0OiBJbnQsICR0aW1lb3V0OiBGbG9hdCkge1xuICAgICAgICAgICAgICAgICAgICAke2N9KGZpbHRlcjogJGZpbHRlciwgb3JkZXJCeTogJG9yZGVyQnksIGxpbWl0OiAkbGltaXQsIHRpbWVvdXQ6ICR0aW1lb3V0KSB7ICR7cmVzdWx0fSB9XG4gICAgICAgICAgICAgICAgfWAsIHtcbiAgICAgICAgICAgICAgICBmaWx0ZXIsXG4gICAgICAgICAgICAgICAgb3JkZXJCeSxcbiAgICAgICAgICAgICAgICBsaW1pdCxcbiAgICAgICAgICAgICAgICB0aW1lb3V0XG4gICAgICAgICAgICB9KSkuZGF0YVtjXTtcbiAgICB9XG5cbiAgICBzdWJzY3JpYmUoXG4gICAgICAgIGZpbHRlcjogYW55LFxuICAgICAgICByZXN1bHQ6IHN0cmluZyxcbiAgICAgICAgb25Eb2NFdmVudDogRG9jRXZlbnQsXG4gICAgICAgIG9uRXJyb3I/OiAoZXJyOiBFcnJvcikgPT4gdm9pZFxuICAgICk6IFN1YnNjcmlwdGlvbiB7XG4gICAgICAgIGNvbnN0IHRleHQgPSBgc3Vic2NyaXB0aW9uICR7dGhpcy5jb2xsZWN0aW9uTmFtZX0oJGZpbHRlcjogJHt0aGlzLnR5cGVOYW1lfUZpbHRlcikge1xuICAgICAgICBcdCR7dGhpcy5jb2xsZWN0aW9uTmFtZX0oZmlsdGVyOiAkZmlsdGVyKSB7ICR7cmVzdWx0fSB9XG4gICAgICAgIH1gO1xuICAgICAgICBjb25zdCBxdWVyeSA9IGdxbChbdGV4dF0pO1xuICAgICAgICBsZXQgc3Vic2NyaXB0aW9uID0gbnVsbDtcbiAgICAgICAgKGFzeW5jICgpID0+IHtcbiAgICAgICAgICAgIHRyeSB7XG4gICAgICAgICAgICAgICAgY29uc3QgY2xpZW50ID0gYXdhaXQgdGhpcy5tb2R1bGUuZW5zdXJlQ2xpZW50KCk7XG4gICAgICAgICAgICAgICAgY29uc3Qgb2JzZXJ2YWJsZSA9IGNsaWVudC5zdWJzY3JpYmUoe1xuICAgICAgICAgICAgICAgICAgICBxdWVyeSxcbiAgICAgICAgICAgICAgICAgICAgdmFyaWFibGVzOiB7XG4gICAgICAgICAgICAgICAgICAgICAgICBmaWx0ZXIsXG4gICAgICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICAgICAgc3Vic2NyaXB0aW9uID0gb2JzZXJ2YWJsZS5zdWJzY3JpYmUoKG1lc3NhZ2UpID0+IHtcbiAgICAgICAgICAgICAgICAgICAgb25Eb2NFdmVudCgnaW5zZXJ0L3VwZGF0ZScsIG1lc3NhZ2UuZGF0YVt0aGlzLmNvbGxlY3Rpb25OYW1lXSk7XG4gICAgICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICB9IGNhdGNoIChlcnJvcikge1xuICAgICAgICAgICAgICAgIGlmIChvbkVycm9yKSB7XG4gICAgICAgICAgICAgICAgICAgIG9uRXJyb3IoZXJyb3IpO1xuICAgICAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgICAgICAgIGNvbnNvbGUuZXJyb3IoJ1RPTiBDbGllbnQgc3Vic2NyaXB0aW9uIGVycm9yJywgZXJyb3IpO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cbiAgICAgICAgfSkoKTtcbiAgICAgICAgcmV0dXJuIHtcbiAgICAgICAgICAgIHVuc3Vic2NyaWJlOiAoKSA9PiB7XG4gICAgICAgICAgICAgICAgaWYgKHN1YnNjcmlwdGlvbikge1xuICAgICAgICAgICAgICAgICAgICBzdWJzY3JpcHRpb24udW5zdWJzY3JpYmUoKTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9LFxuICAgICAgICB9O1xuICAgIH1cblxuICAgIGFzeW5jIHdhaXRGb3IoZmlsdGVyOiBhbnksIHJlc3VsdDogc3RyaW5nLCB0aW1lb3V0PzogbnVtYmVyKTogUHJvbWlzZTxhbnk+IHtcbiAgICAgICAgY29uc3QgZG9jcyA9IGF3YWl0IHRoaXMucXVlcnkoZmlsdGVyLCByZXN1bHQsIHVuZGVmaW5lZCwgdW5kZWZpbmVkLCAodGltZW91dCB8fCA0MF8wMDApIC8gMTAwMCk7XG4gICAgICAgIGlmIChkb2NzLmxlbmd0aCA+IDApIHtcbiAgICAgICAgICAgIHJldHVybiBkb2NzWzBdO1xuICAgICAgICB9XG4gICAgICAgIHRocm93IFRPTkNsaWVudEVycm9yLndhaXRGb3JUaW1lb3V0KCk7XG4gICAgICAgIC8qIFRPRE86IGJlbG93IGlzIGEgbGVnYWN5IGNvZGUuXG4gICAgICAgICAgICBXaGVuIG5ldyBtb2RlbCB3aXRoIHNlcnZlciBzaWRlIHdhaXQgZm9yIHdpbGwgaGF2ZSBiZWVuIHRlc3RlZCBlbm91Z2ggd2UgY2FuIGdldCByaWQgb2YgdGhpcyBjb2RlLlxuICAgICAgICBjb25zdCBjb25maWcgPSB0aGlzLm1vZHVsZS5jb25maWc7XG4gICAgICAgIGNvbnN0IGV4aXN0aW5nID0gYXdhaXQgdGhpcy5xdWVyeShmaWx0ZXIsIHJlc3VsdCk7XG4gICAgICAgIGlmIChleGlzdGluZy5sZW5ndGggPiAwKSB7XG4gICAgICAgICAgICByZXR1cm4gZXhpc3RpbmdbMF07XG4gICAgICAgIH1cbiAgICAgICAgcmV0dXJuIG5ldyBQcm9taXNlKChyZXNvbHZlLCByZWplY3QpID0+IHtcbiAgICAgICAgICAgIGNvbnN0IGZvcmNlQ2hlY2tUaW1lb3V0ID0gMTBfMDAwO1xuICAgICAgICAgICAgbGV0IHN1YnNjcmlwdGlvbjogYW55ID0gbnVsbDtcbiAgICAgICAgICAgIGxldCByZXNvbHZlZDogYm9vbGVhbiA9IGZhbHNlO1xuXG4gICAgICAgICAgICBjb25zdCBkb1Jlc29sdmUgPSAoZG9jKSA9PiB7XG4gICAgICAgICAgICAgICAgaWYgKHJlc29sdmVkKSB7XG4gICAgICAgICAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgcmVzb2x2ZWQgPSB0cnVlO1xuICAgICAgICAgICAgICAgIGlmIChzdWJzY3JpcHRpb24pIHtcbiAgICAgICAgICAgICAgICAgICAgc3Vic2NyaXB0aW9uLnVuc3Vic2NyaWJlKCk7XG4gICAgICAgICAgICAgICAgICAgIHN1YnNjcmlwdGlvbiA9IG51bGw7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIGlmIChkb2MgIT09IG51bGwpIHtcbiAgICAgICAgICAgICAgICAgICAgcmVzb2x2ZShkb2MpO1xuICAgICAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgICAgICAgIHJlamVjdChUT05DbGllbnRFcnJvci53YWl0Rm9yVGltZW91dCgpKVxuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH07XG5cbiAgICAgICAgICAgIGNvbnN0IGZvcmNlQ2hlY2sgPSAoKSA9PiB7XG4gICAgICAgICAgICAgICAgKGFzeW5jICgpID0+IHtcbiAgICAgICAgICAgICAgICAgICAgaWYgKHJlc29sdmVkKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICByZXR1cm47XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgY29uZmlnLmxvZygnd2FpdEZvci5mb3JjZUNoZWNrJywgdGhpcy5jb2xsZWN0aW9uTmFtZSwgZmlsdGVyKTtcbiAgICAgICAgICAgICAgICAgICAgY29uc3QgZXhpc3RpbmcgPSBhd2FpdCB0aGlzLnF1ZXJ5KGZpbHRlciwgcmVzdWx0KTtcbiAgICAgICAgICAgICAgICAgICAgaWYgKGV4aXN0aW5nLmxlbmd0aCA+IDApIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIGRvUmVzb2x2ZShleGlzdGluZ1swXSk7XG4gICAgICAgICAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgICAgICAgICAgICBzZXRUaW1lb3V0KGZvcmNlQ2hlY2ssIGZvcmNlQ2hlY2tUaW1lb3V0KTtcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIH0pKCk7XG4gICAgICAgICAgICB9O1xuXG4gICAgICAgICAgICBjb25zdCByZWplY3RPblRpbWVvdXQgPSAoKSA9PiB7XG4gICAgICAgICAgICAgICAgaWYgKCFyZXNvbHZlZCkge1xuICAgICAgICAgICAgICAgICAgICBjb25maWcubG9nKCd3YWl0Rm9yIHJlamVjdGVkIG9uIHRpbWVvdXQnLCB0aGlzLmNvbGxlY3Rpb25OYW1lLCBmaWx0ZXIpO1xuICAgICAgICAgICAgICAgICAgICBkb1Jlc29sdmUobnVsbCk7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfTtcblxuICAgICAgICAgICAgc3Vic2NyaXB0aW9uID0gdGhpcy5zdWJzY3JpYmUoZmlsdGVyLCByZXN1bHQsIChjaGFuZ2UsIGRvYykgPT4ge1xuICAgICAgICAgICAgICAgIGRvUmVzb2x2ZShkb2MpO1xuICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICBzZXRUaW1lb3V0KGZvcmNlQ2hlY2ssIGZvcmNlQ2hlY2tUaW1lb3V0KTtcbiAgICAgICAgICAgIGlmICh0aW1lb3V0KSB7XG4gICAgICAgICAgICAgICAgc2V0VGltZW91dChyZWplY3RPblRpbWVvdXQsIHRpbWVvdXQpO1xuICAgICAgICAgICAgfVxuICAgICAgICB9KTtcbiAgICAgICAgICovXG4gICAgfVxufVxuXG5UT05RdWVyaWVzTW9kdWxlLm1vZHVsZU5hbWUgPSAnVE9OUXVlcmllc01vZHVsZSc7XG4iXX0=