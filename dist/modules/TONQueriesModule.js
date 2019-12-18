"use strict";

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

var _TONConfigModule = _interopRequireDefault(require("./TONConfigModule"));

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
                return fetch(httpUrl);

              case 9:
                response = _context2.sent;

                if (response.redirected) {
                  location = response.url;

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
      _regenerator["default"].mark(function _callee12(filter, result, orderBy, limit) {
        var c, t;
        return _regenerator["default"].wrap(function _callee12$(_context12) {
          while (1) {
            switch (_context12.prev = _context12.next) {
              case 0:
                c = this.collectionName;
                t = this.typeName;
                _context12.next = 4;
                return this.module.query("query ".concat(c, "($filter: ").concat(t, "Filter, $orderBy: [QueryOrderBy], $limit: Int) {\n                    ").concat(c, "(filter: $filter, orderBy: $orderBy, limit: $limit) { ").concat(result, " }\n                }"), {
                  filter: filter,
                  orderBy: orderBy,
                  limit: limit
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

      function query(_x5, _x6, _x7, _x8) {
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
      _regenerator["default"].mark(function _callee15(filter, result, timeout) {
        var _this3 = this;

        var config, existing;
        return _regenerator["default"].wrap(function _callee15$(_context15) {
          while (1) {
            switch (_context15.prev = _context15.next) {
              case 0:
                config = this.module.config;
                _context15.next = 3;
                return this.query(filter, result);

              case 3:
                existing = _context15.sent;

                if (!(existing.length > 0)) {
                  _context15.next = 6;
                  break;
                }

                return _context15.abrupt("return", existing[0]);

              case 6:
                return _context15.abrupt("return", new Promise(function (resolve, reject) {
                  var forceCheckTimeout = 10000;
                  var subscription = null;
                  var resolved = false;

                  var doResolve = function doResolve(doc) {
                    if (resolved) {
                      return;
                    }

                    resolved = true;

                    if (subscription) {
                      subscription.unsubscribe();
                      subscription = null;
                    }

                    if (doc !== null) {
                      resolve(doc);
                    } else {
                      reject(_TONClient.TONClientError.waitForTimeout());
                    }
                  };

                  var forceCheck = function forceCheck() {
                    (0, _asyncToGenerator2["default"])(
                    /*#__PURE__*/
                    _regenerator["default"].mark(function _callee14() {
                      var existing;
                      return _regenerator["default"].wrap(function _callee14$(_context14) {
                        while (1) {
                          switch (_context14.prev = _context14.next) {
                            case 0:
                              if (!resolved) {
                                _context14.next = 2;
                                break;
                              }

                              return _context14.abrupt("return");

                            case 2:
                              config.log('waitFor.forceCheck', _this3.collectionName, filter);
                              _context14.next = 5;
                              return _this3.query(filter, result);

                            case 5:
                              existing = _context14.sent;

                              if (existing.length > 0) {
                                doResolve(existing[0]);
                              } else {
                                setTimeout(forceCheck, forceCheckTimeout);
                              }

                            case 7:
                            case "end":
                              return _context14.stop();
                          }
                        }
                      }, _callee14);
                    }))();
                  };

                  var rejectOnTimeout = function rejectOnTimeout() {
                    if (!resolved) {
                      config.log('waitFor rejected on timeout', _this3.collectionName, filter);
                      doResolve(null);
                    }
                  };

                  subscription = _this3.subscribe(filter, result, function (change, doc) {
                    doResolve(doc);
                  });
                  setTimeout(forceCheck, forceCheckTimeout);

                  if (timeout) {
                    setTimeout(rejectOnTimeout, timeout);
                  }
                }));

              case 7:
              case "end":
                return _context15.stop();
            }
          }
        }, _callee15, this);
      }));

      function waitFor(_x9, _x10, _x11) {
        return _waitFor.apply(this, arguments);
      }

      return waitFor;
    }()
  }]);
  return TONQCollection;
}();

TONQueriesModule.moduleName = 'TONQueriesModule';
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy9tb2R1bGVzL1RPTlF1ZXJpZXNNb2R1bGUuanMiXSwibmFtZXMiOlsiVE9OUXVlcmllc01vZHVsZSIsImNvbnRleHQiLCJfY2xpZW50Iiwib3ZlcnJpZGVXc1VybCIsImNvbmZpZyIsImdldE1vZHVsZSIsIlRPTkNvbmZpZ01vZHVsZSIsInRyYW5zYWN0aW9ucyIsIlRPTlFDb2xsZWN0aW9uIiwibWVzc2FnZXMiLCJibG9ja3MiLCJhY2NvdW50cyIsImNsaWVudFBsYXRmb3JtIiwiVE9OQ2xpZW50IiwiZGF0YSIsIkVycm9yIiwiaHR0cFVybCIsInF1ZXJpZXNIdHRwVXJsIiwid3NVcmwiLCJxdWVyaWVzV3NVcmwiLCJmZXRjaCIsInJlc3BvbnNlIiwicmVkaXJlY3RlZCIsImxvY2F0aW9uIiwidXJsIiwicmVwbGFjZSIsIldlYlNvY2tldCIsInF1ZXJ5IiwicmVzdWx0IiwiZ2V0QWNjb3VudHNDb3VudCIsImdldFRyYW5zYWN0aW9uc0NvdW50IiwiZ2V0QWNjb3VudHNUb3RhbEJhbGFuY2UiLCJyZXF1ZXN0cyIsIm11dGF0aW9uIiwicWwiLCJ2YXJpYWJsZXMiLCJncmFwaFFsIiwiY2xpZW50IiwibXV0YXRlIiwicmVxdWVzdCIsImVuc3VyZUNsaWVudCIsImVycm9ycyIsIm5ldHdvcmtFcnJvciIsIlRPTkNsaWVudEVycm9yIiwicXVlcnlGYWlsZWQiLCJnZXRDbGllbnRDb25maWciLCJBcG9sbG9DbGllbnQiLCJjYWNoZSIsIkluTWVtb3J5Q2FjaGUiLCJsaW5rIiwiZGVmaW5pdGlvbiIsImtpbmQiLCJvcGVyYXRpb24iLCJXZWJTb2NrZXRMaW5rIiwiU3Vic2NyaXB0aW9uQ2xpZW50IiwicmVjb25uZWN0IiwiSHR0cExpbmsiLCJ1cmkiLCJkZWZhdWx0T3B0aW9ucyIsIndhdGNoUXVlcnkiLCJmZXRjaFBvbGljeSIsInN0b3AiLCJjbGVhclN0b3JlIiwiVE9OTW9kdWxlIiwibW9kdWxlIiwiY29sbGVjdGlvbk5hbWUiLCJ0eXBlTmFtZSIsInN1YnN0ciIsInRvVXBwZXJDYXNlIiwibGVuZ3RoIiwiZmlsdGVyIiwib3JkZXJCeSIsImxpbWl0IiwiYyIsInQiLCJvbkRvY0V2ZW50Iiwib25FcnJvciIsInRleHQiLCJzdWJzY3JpcHRpb24iLCJvYnNlcnZhYmxlIiwic3Vic2NyaWJlIiwibWVzc2FnZSIsImNvbnNvbGUiLCJlcnJvciIsInVuc3Vic2NyaWJlIiwidGltZW91dCIsImV4aXN0aW5nIiwiUHJvbWlzZSIsInJlc29sdmUiLCJyZWplY3QiLCJmb3JjZUNoZWNrVGltZW91dCIsInJlc29sdmVkIiwiZG9SZXNvbHZlIiwiZG9jIiwid2FpdEZvclRpbWVvdXQiLCJmb3JjZUNoZWNrIiwibG9nIiwic2V0VGltZW91dCIsInJlamVjdE9uVGltZW91dCIsImNoYW5nZSIsIm1vZHVsZU5hbWUiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQWtCQTs7QUFDQTs7QUFDQTs7QUFDQTs7QUFDQTs7QUFDQTs7QUFDQTs7QUFDQTs7QUFDQTs7QUFFQTs7QUFDQTs7QUE3QkE7Ozs7Ozs7Ozs7Ozs7OztJQXdDcUJBLGdCOzs7OztBQUlqQiw0QkFBWUMsT0FBWixFQUF1QztBQUFBOztBQUFBO0FBQ25DLDRIQUFNQSxPQUFOO0FBRG1DO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBRW5DLFVBQUtDLE9BQUwsR0FBZSxJQUFmO0FBQ0EsVUFBS0MsYUFBTCxHQUFxQixJQUFyQjtBQUhtQztBQUl0Qzs7Ozs7Ozs7Ozs7O0FBR0cscUJBQUtDLE1BQUwsR0FBYyxLQUFLSCxPQUFMLENBQWFJLFNBQWIsQ0FBdUJDLDJCQUF2QixDQUFkO0FBQ0EscUJBQUtDLFlBQUwsR0FBb0IsSUFBSUMsY0FBSixDQUFtQixJQUFuQixFQUF5QixjQUF6QixDQUFwQjtBQUNBLHFCQUFLQyxRQUFMLEdBQWdCLElBQUlELGNBQUosQ0FBbUIsSUFBbkIsRUFBeUIsVUFBekIsQ0FBaEI7QUFDQSxxQkFBS0UsTUFBTCxHQUFjLElBQUlGLGNB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Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBc0RmckYsZ0JBQWdCLENBQUNvRyxVQUFqQixHQUE4QixrQkFBOUIiLCJzb3VyY2VzQ29udGVudCI6WyIvKlxuICogQ29weXJpZ2h0IDIwMTgtMjAxOSBUT04gREVWIFNPTFVUSU9OUyBMVEQuXG4gKlxuICogTGljZW5zZWQgdW5kZXIgdGhlIFNPRlRXQVJFIEVWQUxVQVRJT04gTGljZW5zZSAodGhlIFwiTGljZW5zZVwiKTsgeW91IG1heSBub3QgdXNlXG4gKiB0aGlzIGZpbGUgZXhjZXB0IGluIGNvbXBsaWFuY2Ugd2l0aCB0aGUgTGljZW5zZS4gIFlvdSBtYXkgb2J0YWluIGEgY29weSBvZiB0aGVcbiAqIExpY2Vuc2UgYXQ6XG4gKlxuICogaHR0cDovL3d3dy50b24uZGV2L2xpY2Vuc2VzXG4gKlxuICogVW5sZXNzIHJlcXVpcmVkIGJ5IGFwcGxpY2FibGUgbGF3IG9yIGFncmVlZCB0byBpbiB3cml0aW5nLCBzb2Z0d2FyZVxuICogZGlzdHJpYnV0ZWQgdW5kZXIgdGhlIExpY2Vuc2UgaXMgZGlzdHJpYnV0ZWQgb24gYW4gXCJBUyBJU1wiIEJBU0lTLFxuICogV0lUSE9VVCBXQVJSQU5USUVTIE9SIENPTkRJVElPTlMgT0YgQU5ZIEtJTkQsIGVpdGhlciBleHByZXNzIG9yIGltcGxpZWQuXG4gKiBTZWUgdGhlIExpY2Vuc2UgZm9yIHRoZSBzcGVjaWZpYyBUT04gREVWIHNvZnR3YXJlIGdvdmVybmluZyBwZXJtaXNzaW9ucyBhbmRcbiAqIGxpbWl0YXRpb25zIHVuZGVyIHRoZSBMaWNlbnNlLlxuICovXG5cbi8vIEBmbG93XG5cbmltcG9ydCB7IEluTWVtb3J5Q2FjaGUgfSBmcm9tICdhcG9sbG8tY2FjaGUtaW5tZW1vcnknO1xuaW1wb3J0IHsgQXBvbGxvQ2xpZW50IH0gZnJvbSAnYXBvbGxvLWNsaWVudCc7XG5pbXBvcnQgeyBzcGxpdCB9IGZyb20gXCJhcG9sbG8tbGlua1wiO1xuaW1wb3J0IHsgSHR0cExpbmsgfSBmcm9tICdhcG9sbG8tbGluay1odHRwJztcbmltcG9ydCB7IFdlYlNvY2tldExpbmsgfSBmcm9tICdhcG9sbG8tbGluay13cyc7XG5pbXBvcnQgeyBnZXRNYWluRGVmaW5pdGlvbiB9IGZyb20gJ2Fwb2xsby11dGlsaXRpZXMnO1xuaW1wb3J0IGdxbCBmcm9tICdncmFwaHFsLXRhZyc7XG5pbXBvcnQgeyBTdWJzY3JpcHRpb25DbGllbnQgfSBmcm9tIFwic3Vic2NyaXB0aW9ucy10cmFuc3BvcnQtd3NcIjtcbmltcG9ydCB7IFRPTkNsaWVudCwgVE9OQ2xpZW50RXJyb3IgfSBmcm9tICcuLi9UT05DbGllbnQnO1xuaW1wb3J0IHR5cGUgeyBUT05Nb2R1bGVDb250ZXh0IH0gZnJvbSAnLi4vVE9OTW9kdWxlJztcbmltcG9ydCB7IFRPTk1vZHVsZSB9IGZyb20gJy4uL1RPTk1vZHVsZSc7XG5pbXBvcnQgVE9OQ29uZmlnTW9kdWxlIGZyb20gJy4vVE9OQ29uZmlnTW9kdWxlJztcblxudHlwZSBTdWJzY3JpcHRpb24gPSB7XG4gICAgdW5zdWJzY3JpYmU6ICgpID0+IHZvaWRcbn1cblxuZXhwb3J0IHR5cGUgUmVxdWVzdCA9IHtcbiAgICBpZDogc3RyaW5nLFxuICAgIGJvZHk6IHN0cmluZyxcbn1cblxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgVE9OUXVlcmllc01vZHVsZSBleHRlbmRzIFRPTk1vZHVsZSB7XG4gICAgY29uZmlnOiBUT05Db25maWdNb2R1bGU7XG4gICAgb3ZlcnJpZGVXc1VybDogP3N0cmluZztcblxuICAgIGNvbnN0cnVjdG9yKGNvbnRleHQ6IFRPTk1vZHVsZUNvbnRleHQpIHtcbiAgICAgICAgc3VwZXIoY29udGV4dCk7XG4gICAgICAgIHRoaXMuX2NsaWVudCA9IG51bGw7XG4gICAgICAgIHRoaXMub3ZlcnJpZGVXc1VybCA9IG51bGw7XG4gICAgfVxuXG4gICAgYXN5bmMgc2V0dXAoKSB7XG4gICAgICAgIHRoaXMuY29uZmlnID0gdGhpcy5jb250ZXh0LmdldE1vZHVsZShUT05Db25maWdNb2R1bGUpO1xuICAgICAgICB0aGlzLnRyYW5zYWN0aW9ucyA9IG5ldyBUT05RQ29sbGVjdGlvbih0aGlzLCAndHJhbnNhY3Rpb25zJyk7XG4gICAgICAgIHRoaXMubWVzc2FnZXMgPSBuZXcgVE9OUUNvbGxlY3Rpb24odGhpcywgJ21lc3NhZ2VzJyk7XG4gICAgICAgIHRoaXMuYmxvY2tzID0gbmV3IFRPTlFDb2xsZWN0aW9uKHRoaXMsICdibG9ja3MnKTtcbiAgICAgICAgdGhpcy5hY2NvdW50cyA9IG5ldyBUT05RQ29sbGVjdGlvbih0aGlzLCAnYWNjb3VudHMnKTtcbiAgICB9XG5cbiAgICBhc3luYyBnZXRDbGllbnRDb25maWcoKSB7XG4gICAgICAgIGNvbnN0IGNvbmZpZyA9IHRoaXMuY29uZmlnO1xuICAgICAgICBjb25zdCB7IGNsaWVudFBsYXRmb3JtIH0gPSBUT05DbGllbnQ7XG4gICAgICAgIGlmICghY29uZmlnLmRhdGEgfHwgIWNsaWVudFBsYXRmb3JtKSB7XG4gICAgICAgICAgICB0aHJvdyBFcnJvcignVE9OIENsaWVudCBkb2VzIG5vdCBjb25maWd1cmVkJyk7XG4gICAgICAgIH1cbiAgICAgICAgbGV0IGh0dHBVcmwgPSBjb25maWcucXVlcmllc0h0dHBVcmwoKTtcbiAgICAgICAgbGV0IHdzVXJsID0gY29uZmlnLnF1ZXJpZXNXc1VybCgpO1xuICAgICAgICBjb25zdCBmZXRjaCA9IGNsaWVudFBsYXRmb3JtLmZldGNoO1xuICAgICAgICBjb25zdCByZXNwb25zZSA9IGF3YWl0IGZldGNoKGh0dHBVcmwpO1xuICAgICAgICBpZiAocmVzcG9uc2UucmVkaXJlY3RlZCkge1xuICAgICAgICAgICAgY29uc3QgbG9jYXRpb24gPSByZXNwb25zZS51cmw7XG4gICAgICAgICAgICBpZiAoISFsb2NhdGlvbikge1xuICAgICAgICAgICAgICAgIGh0dHBVcmwgPSBsb2NhdGlvbjtcbiAgICAgICAgICAgICAgICB3c1VybCA9IGxvY2F0aW9uXG4gICAgICAgICAgICAgICAgICAgIC5yZXBsYWNlKC9eaHR0cHM6XFwvXFwvL2dpLCAnd3NzOi8vJylcbiAgICAgICAgICAgICAgICAgICAgLnJlcGxhY2UoL15odHRwOlxcL1xcLy9naSwgJ3dzOi8vJyk7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgICAgcmV0dXJuIHtcbiAgICAgICAgICAgIGh0dHBVcmwsXG4gICAgICAgICAgICB3c1VybCxcbiAgICAgICAgICAgIGZldGNoLFxuICAgICAgICAgICAgV2ViU29ja2V0OiBjbGllbnRQbGF0Zm9ybS5XZWJTb2NrZXQsXG4gICAgICAgIH1cbiAgICB9XG5cbiAgICBhc3luYyBnZXRBY2NvdW50c0NvdW50KCk6IFByb21pc2U8bnVtYmVyPiB7XG4gICAgICAgIGNvbnN0IHJlc3VsdCA9IGF3YWl0IHRoaXMucXVlcnkoJ3F1ZXJ5e2dldEFjY291bnRzQ291bnR9Jyk7XG4gICAgICAgIHJldHVybiByZXN1bHQuZGF0YS5nZXRBY2NvdW50c0NvdW50O1xuICAgIH1cblxuICAgIGFzeW5jIGdldFRyYW5zYWN0aW9uc0NvdW50KCk6IFByb21pc2U8bnVtYmVyPiB7XG4gICAgICAgIGNvbnN0IHJlc3VsdCA9IGF3YWl0IHRoaXMucXVlcnkoJ3F1ZXJ5e2dldFRyYW5zYWN0aW9uc0NvdW50fScpO1xuICAgICAgICByZXR1cm4gcmVzdWx0LmRhdGEuZ2V0VHJhbnNhY3Rpb25zQ291bnQ7XG4gICAgfVxuXG4gICAgYXN5bmMgZ2V0QWNjb3VudHNUb3RhbEJhbGFuY2UoKTogUHJvbWlzZTxzdHJpbmc+IHtcbiAgICAgICAgY29uc3QgcmVzdWx0ID0gYXdhaXQgdGhpcy5xdWVyeSgncXVlcnl7Z2V0QWNjb3VudHNUb3RhbEJhbGFuY2V9Jyk7XG4gICAgICAgIHJldHVybiByZXN1bHQuZGF0YS5nZXRBY2NvdW50c1RvdGFsQmFsYW5jZTtcbiAgICB9XG5cbiAgICBhc3luYyBwb3N0UmVxdWVzdHMocmVxdWVzdHM6IFJlcXVlc3RbXSk6IFByb21pc2U8dm9pZD4ge1xuICAgICAgICByZXR1cm4gdGhpcy5tdXRhdGlvbihgbXV0YXRpb24gcG9zdFJlcXVlc3RzKCRyZXF1ZXN0czogW1JlcXVlc3RdKSB7XG4gICAgICAgICAgICBwb3N0UmVxdWVzdHMocmVxdWVzdHM6ICRyZXF1ZXN0cylcbiAgICAgICAgfWAsIHtcbiAgICAgICAgICAgIHJlcXVlc3RzLFxuICAgICAgICB9KTtcbiAgICB9XG5cbiAgICBhc3luYyBtdXRhdGlvbihxbDogc3RyaW5nLCB2YXJpYWJsZXM6IHsgW3N0cmluZ106IGFueSB9ID0ge30pOiBQcm9taXNlPGFueT4ge1xuICAgICAgICBjb25zdCBtdXRhdGlvbiA9IGdxbChbcWxdKTtcbiAgICAgICAgcmV0dXJuIHRoaXMuZ3JhcGhRbChjbGllbnQgPT4gY2xpZW50Lm11dGF0ZSh7XG4gICAgICAgICAgICBtdXRhdGlvbixcbiAgICAgICAgICAgIHZhcmlhYmxlcyxcbiAgICAgICAgfSkpO1xuICAgIH1cblxuICAgIGFzeW5jIHF1ZXJ5KHFsOiBzdHJpbmcsIHZhcmlhYmxlczogeyBbc3RyaW5nXTogYW55IH0gPSB7fSk6IFByb21pc2U8YW55PiB7XG4gICAgICAgIGNvbnN0IG11dGF0aW9uID0gZ3FsKFtxbF0pO1xuICAgICAgICByZXR1cm4gdGhpcy5ncmFwaFFsKGNsaWVudCA9PiBjbGllbnQubXV0YXRlKHtcbiAgICAgICAgICAgIG11dGF0aW9uLFxuICAgICAgICAgICAgdmFyaWFibGVzLFxuICAgICAgICB9KSk7XG4gICAgfVxuXG4gICAgYXN5bmMgZ3JhcGhRbChyZXF1ZXN0OiAoY2xpZW50OiBBcG9sbG9DbGllbnQpID0+IFByb21pc2U8YW55Pik6IFByb21pc2U8YW55PiB7XG4gICAgICAgIGNvbnN0IGNsaWVudCA9IGF3YWl0IHRoaXMuZW5zdXJlQ2xpZW50KCk7XG4gICAgICAgIHRyeSB7XG4gICAgICAgICAgICByZXR1cm4gcmVxdWVzdChjbGllbnQpO1xuICAgICAgICB9IGNhdGNoIChlcnJvcikge1xuICAgICAgICAgICAgY29uc3QgZXJyb3JzID0gZXJyb3IgJiYgZXJyb3IubmV0d29ya0Vycm9yICYmIGVycm9yLm5ldHdvcmtFcnJvci5yZXN1bHQgJiYgZXJyb3IubmV0d29ya0Vycm9yLnJlc3VsdC5lcnJvcnM7XG4gICAgICAgICAgICBpZiAoZXJyb3JzKSB7XG4gICAgICAgICAgICAgICAgdGhyb3cgVE9OQ2xpZW50RXJyb3IucXVlcnlGYWlsZWQoZXJyb3JzKTtcbiAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgICAgdGhyb3cgZXJyb3I7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICBhc3luYyBlbnN1cmVDbGllbnQoKTogQXBvbGxvQ2xpZW50IHtcbiAgICAgICAgaWYgKHRoaXMuX2NsaWVudCkge1xuICAgICAgICAgICAgcmV0dXJuIHRoaXMuX2NsaWVudDtcbiAgICAgICAgfVxuICAgICAgICBjb25zdCB7IGh0dHBVcmwsIHdzVXJsLCBmZXRjaCwgV2ViU29ja2V0IH0gPSBhd2FpdCB0aGlzLmdldENsaWVudENvbmZpZygpO1xuICAgICAgICB0aGlzLl9jbGllbnQgPSBuZXcgQXBvbGxvQ2xpZW50KHtcbiAgICAgICAgICAgIGNhY2hlOiBuZXcgSW5NZW1vcnlDYWNoZSh7fSksXG4gICAgICAgICAgICBsaW5rOiBzcGxpdChcbiAgICAgICAgICAgICAgICAoeyBxdWVyeSB9KSA9PiB7XG4gICAgICAgICAgICAgICAgICAgIGNvbnN0IGRlZmluaXRpb24gPSBnZXRNYWluRGVmaW5pdGlvbihxdWVyeSk7XG4gICAgICAgICAgICAgICAgICAgIHJldHVybiAoXG4gICAgICAgICAgICAgICAgICAgICAgICBkZWZpbml0aW9uLmtpbmQgPT09ICdPcGVyYXRpb25EZWZpbml0aW9uJ1xuICAgICAgICAgICAgICAgICAgICAgICAgJiYgZGVmaW5pdGlvbi5vcGVyYXRpb24gPT09ICdzdWJzY3JpcHRpb24nXG4gICAgICAgICAgICAgICAgICAgICk7XG4gICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICBuZXcgV2ViU29ja2V0TGluayhuZXcgU3Vic2NyaXB0aW9uQ2xpZW50KFxuICAgICAgICAgICAgICAgICAgICB3c1VybCxcbiAgICAgICAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgICAgICAgICAgcmVjb25uZWN0OiB0cnVlXG4gICAgICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgICAgIFdlYlNvY2tldFxuICAgICAgICAgICAgICAgICkpLFxuICAgICAgICAgICAgICAgIG5ldyBIdHRwTGluayh7XG4gICAgICAgICAgICAgICAgICAgIHVyaTogaHR0cFVybCxcbiAgICAgICAgICAgICAgICAgICAgZmV0Y2gsXG4gICAgICAgICAgICAgICAgfSksXG4gICAgICAgICAgICApLFxuICAgICAgICAgICAgZGVmYXVsdE9wdGlvbnM6IHtcbiAgICAgICAgICAgICAgICB3YXRjaFF1ZXJ5OiB7XG4gICAgICAgICAgICAgICAgICAgIGZldGNoUG9saWN5OiAnbm8tY2FjaGUnLFxuICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgcXVlcnk6IHtcbiAgICAgICAgICAgICAgICAgICAgZmV0Y2hQb2xpY3k6ICduby1jYWNoZScsXG4gICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgIH1cbiAgICAgICAgfSk7XG4gICAgICAgIHJldHVybiB0aGlzLl9jbGllbnQ7XG4gICAgfVxuXG4gICAgYXN5bmMgY2xvc2UoKSB7XG4gICAgICAgIGlmICh0aGlzLl9jbGllbnQpIHtcbiAgICAgICAgICAgIGNvbnN0IGNsaWVudCA9IHRoaXMuX2NsaWVudDtcbiAgICAgICAgICAgIHRoaXMuX2NsaWVudCA9IG51bGw7XG4gICAgICAgICAgICBjbGllbnQuc3RvcCgpO1xuICAgICAgICAgICAgYXdhaXQgY2xpZW50LmNsZWFyU3RvcmUoKTtcbiAgICAgICAgfVxuICAgIH1cblxuICAgIHRyYW5zYWN0aW9uczogVE9OUUNvbGxlY3Rpb247XG5cbiAgICBtZXNzYWdlczogVE9OUUNvbGxlY3Rpb247XG5cbiAgICBibG9ja3M6IFRPTlFDb2xsZWN0aW9uO1xuXG4gICAgYWNjb3VudHM6IFRPTlFDb2xsZWN0aW9uO1xuXG4gICAgX2NsaWVudDogQXBvbGxvQ2xpZW50O1xufVxuXG5cbnR5cGUgRG9jRXZlbnQgPSAoY2hhbmdlVHlwZTogc3RyaW5nLCBkb2M6IGFueSkgPT4gdm9pZDtcblxudHlwZSBPcmRlckJ5ID0ge1xuICAgIHBhdGg6IHN0cmluZyxcbiAgICBkaXJlY3Rpb246ICdBU0MnIHwgJ0RFU0MnXG59XG5cbmNsYXNzIFRPTlFDb2xsZWN0aW9uIHtcbiAgICBtb2R1bGU6IFRPTlF1ZXJpZXNNb2R1bGU7XG5cbiAgICBjb2xsZWN0aW9uTmFtZTogc3RyaW5nO1xuICAgIHR5cGVOYW1lOiBzdHJpbmc7XG5cbiAgICBjb25zdHJ1Y3Rvcihtb2R1bGU6IFRPTlF1ZXJpZXNNb2R1bGUsIGNvbGxlY3Rpb25OYW1lOiBzdHJpbmcpIHtcbiAgICAgICAgdGhpcy5tb2R1bGUgPSBtb2R1bGU7XG4gICAgICAgIHRoaXMuY29sbGVjdGlvbk5hbWUgPSBjb2xsZWN0aW9uTmFtZTtcbiAgICAgICAgdGhpcy50eXBlTmFtZSA9IGNvbGxlY3Rpb25OYW1lLnN1YnN0cigwLCAxKS50b1VwcGVyQ2FzZSgpICtcbiAgICAgICAgICAgIGNvbGxlY3Rpb25OYW1lLnN1YnN0cigxLCBjb2xsZWN0aW9uTmFtZS5sZW5ndGggLSAyKTtcbiAgICB9XG5cbiAgICBhc3luYyBxdWVyeShmaWx0ZXI6IGFueSwgcmVzdWx0OiBzdHJpbmcsIG9yZGVyQnk/OiBPcmRlckJ5W10sIGxpbWl0PzogbnVtYmVyKTogUHJvbWlzZTxhbnk+IHtcbiAgICAgICAgY29uc3QgYyA9IHRoaXMuY29sbGVjdGlvbk5hbWU7XG4gICAgICAgIGNvbnN0IHQgPSB0aGlzLnR5cGVOYW1lO1xuICAgICAgICByZXR1cm4gKGF3YWl0IHRoaXMubW9kdWxlLnF1ZXJ5KFxuICAgICAgICAgICAgYHF1ZXJ5ICR7Y30oJGZpbHRlcjogJHt0fUZpbHRlciwgJG9yZGVyQnk6IFtRdWVyeU9yZGVyQnldLCAkbGltaXQ6IEludCkge1xuICAgICAgICAgICAgICAgICAgICAke2N9KGZpbHRlcjogJGZpbHRlciwgb3JkZXJCeTogJG9yZGVyQnksIGxpbWl0OiAkbGltaXQpIHsgJHtyZXN1bHR9IH1cbiAgICAgICAgICAgICAgICB9YCwge1xuICAgICAgICAgICAgICAgIGZpbHRlcixcbiAgICAgICAgICAgICAgICBvcmRlckJ5LFxuICAgICAgICAgICAgICAgIGxpbWl0XG4gICAgICAgICAgICB9KSkuZGF0YVtjXTtcbiAgICB9XG5cbiAgICBzdWJzY3JpYmUoXG4gICAgICAgIGZpbHRlcjogYW55LFxuICAgICAgICByZXN1bHQ6IHN0cmluZyxcbiAgICAgICAgb25Eb2NFdmVudDogRG9jRXZlbnQsXG4gICAgICAgIG9uRXJyb3I/OiAoZXJyOiBFcnJvcikgPT4gdm9pZFxuICAgICk6IFN1YnNjcmlwdGlvbiB7XG4gICAgICAgIGNvbnN0IHRleHQgPSBgc3Vic2NyaXB0aW9uICR7dGhpcy5jb2xsZWN0aW9uTmFtZX0oJGZpbHRlcjogJHt0aGlzLnR5cGVOYW1lfUZpbHRlcikge1xuICAgICAgICBcdCR7dGhpcy5jb2xsZWN0aW9uTmFtZX0oZmlsdGVyOiAkZmlsdGVyKSB7ICR7cmVzdWx0fSB9XG4gICAgICAgIH1gO1xuICAgICAgICBjb25zdCBxdWVyeSA9IGdxbChbdGV4dF0pO1xuICAgICAgICBsZXQgc3Vic2NyaXB0aW9uID0gbnVsbDtcbiAgICAgICAgKGFzeW5jICgpID0+IHtcbiAgICAgICAgICAgIHRyeSB7XG4gICAgICAgICAgICAgICAgY29uc3QgY2xpZW50ID0gYXdhaXQgdGhpcy5tb2R1bGUuZW5zdXJlQ2xpZW50KCk7XG4gICAgICAgICAgICAgICAgY29uc3Qgb2JzZXJ2YWJsZSA9IGNsaWVudC5zdWJzY3JpYmUoe1xuICAgICAgICAgICAgICAgICAgICBxdWVyeSxcbiAgICAgICAgICAgICAgICAgICAgdmFyaWFibGVzOiB7XG4gICAgICAgICAgICAgICAgICAgICAgICBmaWx0ZXIsXG4gICAgICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICAgICAgc3Vic2NyaXB0aW9uID0gb2JzZXJ2YWJsZS5zdWJzY3JpYmUoKG1lc3NhZ2UpID0+IHtcbiAgICAgICAgICAgICAgICAgICAgb25Eb2NFdmVudCgnaW5zZXJ0L3VwZGF0ZScsIG1lc3NhZ2UuZGF0YVt0aGlzLmNvbGxlY3Rpb25OYW1lXSk7XG4gICAgICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICB9IGNhdGNoIChlcnJvcikge1xuICAgICAgICAgICAgICAgIGlmIChvbkVycm9yKSB7XG4gICAgICAgICAgICAgICAgICAgIG9uRXJyb3IoZXJyb3IpO1xuICAgICAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgICAgICAgIGNvbnNvbGUuZXJyb3IoJ1RPTiBDbGllbnQgc3Vic2NyaXB0aW9uIGVycm9yJywgZXJyb3IpO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cbiAgICAgICAgfSkoKTtcbiAgICAgICAgcmV0dXJuIHtcbiAgICAgICAgICAgIHVuc3Vic2NyaWJlOiAoKSA9PiB7XG4gICAgICAgICAgICAgICAgaWYgKHN1YnNjcmlwdGlvbikge1xuICAgICAgICAgICAgICAgICAgICBzdWJzY3JpcHRpb24udW5zdWJzY3JpYmUoKTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9LFxuICAgICAgICB9O1xuICAgIH1cblxuICAgIGFzeW5jIHdhaXRGb3IoZmlsdGVyOiBhbnksIHJlc3VsdDogc3RyaW5nLCB0aW1lb3V0PzogbnVtYmVyKTogUHJvbWlzZTxhbnk+IHtcbiAgICAgICAgY29uc3QgY29uZmlnID0gdGhpcy5tb2R1bGUuY29uZmlnO1xuICAgICAgICBjb25zdCBleGlzdGluZyA9IGF3YWl0IHRoaXMucXVlcnkoZmlsdGVyLCByZXN1bHQpO1xuICAgICAgICBpZiAoZXhpc3RpbmcubGVuZ3RoID4gMCkge1xuICAgICAgICAgICAgcmV0dXJuIGV4aXN0aW5nWzBdO1xuICAgICAgICB9XG4gICAgICAgIHJldHVybiBuZXcgUHJvbWlzZSgocmVzb2x2ZSwgcmVqZWN0KSA9PiB7XG4gICAgICAgICAgICBjb25zdCBmb3JjZUNoZWNrVGltZW91dCA9IDEwXzAwMDtcbiAgICAgICAgICAgIGxldCBzdWJzY3JpcHRpb246IGFueSA9IG51bGw7XG4gICAgICAgICAgICBsZXQgcmVzb2x2ZWQ6IGJvb2xlYW4gPSBmYWxzZTtcblxuICAgICAgICAgICAgY29uc3QgZG9SZXNvbHZlID0gKGRvYykgPT4ge1xuICAgICAgICAgICAgICAgIGlmIChyZXNvbHZlZCkge1xuICAgICAgICAgICAgICAgICAgICByZXR1cm47XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIHJlc29sdmVkID0gdHJ1ZTtcbiAgICAgICAgICAgICAgICBpZiAoc3Vic2NyaXB0aW9uKSB7XG4gICAgICAgICAgICAgICAgICAgIHN1YnNjcmlwdGlvbi51bnN1YnNjcmliZSgpO1xuICAgICAgICAgICAgICAgICAgICBzdWJzY3JpcHRpb24gPSBudWxsO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICBpZiAoZG9jICE9PSBudWxsKSB7XG4gICAgICAgICAgICAgICAgICAgIHJlc29sdmUoZG9jKTtcbiAgICAgICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAgICAgICByZWplY3QoVE9OQ2xpZW50RXJyb3Iud2FpdEZvclRpbWVvdXQoKSlcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9O1xuXG4gICAgICAgICAgICBjb25zdCBmb3JjZUNoZWNrID0gKCkgPT4ge1xuICAgICAgICAgICAgICAgIChhc3luYyAoKSA9PiB7XG4gICAgICAgICAgICAgICAgICAgIGlmIChyZXNvbHZlZCkge1xuICAgICAgICAgICAgICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgIGNvbmZpZy5sb2coJ3dhaXRGb3IuZm9yY2VDaGVjaycsIHRoaXMuY29sbGVjdGlvbk5hbWUsIGZpbHRlcik7XG4gICAgICAgICAgICAgICAgICAgIGNvbnN0IGV4aXN0aW5nID0gYXdhaXQgdGhpcy5xdWVyeShmaWx0ZXIsIHJlc3VsdCk7XG4gICAgICAgICAgICAgICAgICAgIGlmIChleGlzdGluZy5sZW5ndGggPiAwKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICBkb1Jlc29sdmUoZXhpc3RpbmdbMF0pO1xuICAgICAgICAgICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAgICAgICAgICAgc2V0VGltZW91dChmb3JjZUNoZWNrLCBmb3JjZUNoZWNrVGltZW91dCk7XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICB9KSgpO1xuICAgICAgICAgICAgfTtcblxuICAgICAgICAgICAgY29uc3QgcmVqZWN0T25UaW1lb3V0ID0gKCkgPT4ge1xuICAgICAgICAgICAgICAgIGlmICghcmVzb2x2ZWQpIHtcbiAgICAgICAgICAgICAgICAgICAgY29uZmlnLmxvZygnd2FpdEZvciByZWplY3RlZCBvbiB0aW1lb3V0JywgdGhpcy5jb2xsZWN0aW9uTmFtZSwgZmlsdGVyKTtcbiAgICAgICAgICAgICAgICAgICAgZG9SZXNvbHZlKG51bGwpO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH07XG5cbiAgICAgICAgICAgIHN1YnNjcmlwdGlvbiA9IHRoaXMuc3Vic2NyaWJlKGZpbHRlciwgcmVzdWx0LCAoY2hhbmdlLCBkb2MpID0+IHtcbiAgICAgICAgICAgICAgICBkb1Jlc29sdmUoZG9jKTtcbiAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgc2V0VGltZW91dChmb3JjZUNoZWNrLCBmb3JjZUNoZWNrVGltZW91dCk7XG4gICAgICAgICAgICBpZiAodGltZW91dCkge1xuICAgICAgICAgICAgICAgIHNldFRpbWVvdXQocmVqZWN0T25UaW1lb3V0LCB0aW1lb3V0KTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfSk7XG4gICAgfVxufVxuXG5UT05RdWVyaWVzTW9kdWxlLm1vZHVsZU5hbWUgPSAnVE9OUXVlcmllc01vZHVsZSc7XG4iXX0=