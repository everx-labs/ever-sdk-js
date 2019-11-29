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
    key: "postRequests",
    value: function () {
      var _postRequests = (0, _asyncToGenerator2["default"])(
      /*#__PURE__*/
      _regenerator["default"].mark(function _callee3(requests) {
        var ql, mutation, client, errors;
        return _regenerator["default"].wrap(function _callee3$(_context3) {
          while (1) {
            switch (_context3.prev = _context3.next) {
              case 0:
                ql = "mutation postRequests($requests: [Request]) {\n            postRequests(requests: $requests)\n        }";
                mutation = (0, _graphqlTag["default"])([ql]);
                _context3.next = 4;
                return this.ensureClient();

              case 4:
                client = _context3.sent;
                _context3.prev = 5;
                _context3.next = 8;
                return client.mutate({
                  mutation: mutation,
                  variables: {
                    requests: requests
                  }
                });

              case 8:
                _context3.next = 18;
                break;

              case 10:
                _context3.prev = 10;
                _context3.t0 = _context3["catch"](5);
                errors = _context3.t0 && _context3.t0.networkError && _context3.t0.networkError.result && _context3.t0.networkError.result.errors;

                if (!errors) {
                  _context3.next = 17;
                  break;
                }

                throw _TONClient.TONClientError.queryFailed(errors);

              case 17:
                throw _context3.t0;

              case 18:
              case "end":
                return _context3.stop();
            }
          }
        }, _callee3, this, [[5, 10]]);
      }));

      function postRequests(_x) {
        return _postRequests.apply(this, arguments);
      }

      return postRequests;
    }()
  }, {
    key: "ensureClient",
    value: function () {
      var _ensureClient = (0, _asyncToGenerator2["default"])(
      /*#__PURE__*/
      _regenerator["default"].mark(function _callee4() {
        var _ref, httpUrl, wsUrl, fetch, WebSocket;

        return _regenerator["default"].wrap(function _callee4$(_context4) {
          while (1) {
            switch (_context4.prev = _context4.next) {
              case 0:
                if (!this._client) {
                  _context4.next = 2;
                  break;
                }

                return _context4.abrupt("return", this._client);

              case 2:
                _context4.next = 4;
                return this.getClientConfig();

              case 4:
                _ref = _context4.sent;
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
                return _context4.abrupt("return", this._client);

              case 11:
              case "end":
                return _context4.stop();
            }
          }
        }, _callee4, this);
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
      _regenerator["default"].mark(function _callee5() {
        var client;
        return _regenerator["default"].wrap(function _callee5$(_context5) {
          while (1) {
            switch (_context5.prev = _context5.next) {
              case 0:
                if (!this._client) {
                  _context5.next = 6;
                  break;
                }

                client = this._client;
                this._client = null;
                client.stop();
                _context5.next = 6;
                return client.clearStore();

              case 6:
              case "end":
                return _context5.stop();
            }
          }
        }, _callee5, this);
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
      var _query = (0, _asyncToGenerator2["default"])(
      /*#__PURE__*/
      _regenerator["default"].mark(function _callee6(filter, result, orderBy, limit) {
        var c, t, ql, query, client, errors;
        return _regenerator["default"].wrap(function _callee6$(_context6) {
          while (1) {
            switch (_context6.prev = _context6.next) {
              case 0:
                c = this.collectionName;
                t = this.typeName;
                ql = "query ".concat(c, "($filter: ").concat(t, "Filter, $orderBy: [QueryOrderBy], $limit: Int) {\n            ").concat(c, "(filter: $filter, orderBy: $orderBy, limit: $limit) { ").concat(result, " }\n        }");
                query = (0, _graphqlTag["default"])([ql]);
                _context6.next = 6;
                return this.module.ensureClient();

              case 6:
                client = _context6.sent;
                _context6.prev = 7;
                _context6.next = 10;
                return client.query({
                  query: query,
                  variables: {
                    filter: filter,
                    orderBy: orderBy,
                    limit: limit
                  }
                });

              case 10:
                _context6.t0 = c;
                return _context6.abrupt("return", _context6.sent.data[_context6.t0]);

              case 14:
                _context6.prev = 14;
                _context6.t1 = _context6["catch"](7);
                errors = _context6.t1 && _context6.t1.networkError && _context6.t1.networkError.result && _context6.t1.networkError.result.errors;

                if (!errors) {
                  _context6.next = 21;
                  break;
                }

                throw _TONClient.TONClientError.queryFailed(errors);

              case 21:
                throw _context6.t1;

              case 22:
              case "end":
                return _context6.stop();
            }
          }
        }, _callee6, this, [[7, 14]]);
      }));

      function query(_x2, _x3, _x4, _x5) {
        return _query.apply(this, arguments);
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
      _regenerator["default"].mark(function _callee7() {
        var client, observable;
        return _regenerator["default"].wrap(function _callee7$(_context7) {
          while (1) {
            switch (_context7.prev = _context7.next) {
              case 0:
                _context7.prev = 0;
                _context7.next = 3;
                return _this2.module.ensureClient();

              case 3:
                client = _context7.sent;
                observable = client.subscribe({
                  query: query,
                  variables: {
                    filter: filter
                  }
                });
                subscription = observable.subscribe(function (message) {
                  onDocEvent('insert/update', message.data[_this2.collectionName]);
                });
                _context7.next = 11;
                break;

              case 8:
                _context7.prev = 8;
                _context7.t0 = _context7["catch"](0);

                if (onError) {
                  onError(_context7.t0);
                } else {
                  console.error('TON Client subscription error', _context7.t0);
                }

              case 11:
              case "end":
                return _context7.stop();
            }
          }
        }, _callee7, null, [[0, 8]]);
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
      _regenerator["default"].mark(function _callee9(filter, result, timeout) {
        var _this3 = this;

        var config, existing;
        return _regenerator["default"].wrap(function _callee9$(_context9) {
          while (1) {
            switch (_context9.prev = _context9.next) {
              case 0:
                config = this.module.config;
                _context9.next = 3;
                return this.query(filter, result);

              case 3:
                existing = _context9.sent;

                if (!(existing.length > 0)) {
                  _context9.next = 6;
                  break;
                }

                return _context9.abrupt("return", existing[0]);

              case 6:
                return _context9.abrupt("return", new Promise(function (resolve, reject) {
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
                    _regenerator["default"].mark(function _callee8() {
                      var existing;
                      return _regenerator["default"].wrap(function _callee8$(_context8) {
                        while (1) {
                          switch (_context8.prev = _context8.next) {
                            case 0:
                              if (!resolved) {
                                _context8.next = 2;
                                break;
                              }

                              return _context8.abrupt("return");

                            case 2:
                              config.log('waitFor.forceCheck', _this3.collectionName, filter);
                              _context8.next = 5;
                              return _this3.query(filter, result);

                            case 5:
                              existing = _context8.sent;

                              if (existing.length > 0) {
                                doResolve(existing[0]);
                              } else {
                                setTimeout(forceCheck, forceCheckTimeout);
                              }

                            case 7:
                            case "end":
                              return _context8.stop();
                          }
                        }
                      }, _callee8);
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
                return _context9.stop();
            }
          }
        }, _callee9, this);
      }));

      function waitFor(_x6, _x7, _x8) {
        return _waitFor.apply(this, arguments);
      }

      return waitFor;
    }()
  }]);
  return TONQCollection;
}();

TONQueriesModule.moduleName = 'TONQueriesModule';
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy9tb2R1bGVzL1RPTlF1ZXJpZXNNb2R1bGUuanMiXSwibmFtZXMiOlsiVE9OUXVlcmllc01vZHVsZSIsImNvbnRleHQiLCJfY2xpZW50Iiwib3ZlcnJpZGVXc1VybCIsImNvbmZpZyIsImdldE1vZHVsZSIsIlRPTkNvbmZpZ01vZHVsZSIsInRyYW5zYWN0aW9ucyIsIlRPTlFDb2xsZWN0aW9uIiwibWVzc2FnZXMiLCJibG9ja3MiLCJhY2NvdW50cyIsImNsaWVudFBsYXRmb3JtIiwiVE9OQ2xpZW50IiwiZGF0YSIsIkVycm9yIiwiaHR0cFVybCIsInF1ZXJpZXNIdHRwVXJsIiwid3NVcmwiLCJxdWVyaWVzV3NVcmwiLCJmZXRjaCIsInJlc3BvbnNlIiwicmVkaXJlY3RlZCIsImxvY2F0aW9uIiwidXJsIiwicmVwbGFjZSIsIldlYlNvY2tldCIsInJlcXVlc3RzIiwicWwiLCJtdXRhdGlvbiIsImVuc3VyZUNsaWVudCIsImNsaWVudCIsIm11dGF0ZSIsInZhcmlhYmxlcyIsImVycm9ycyIsIm5ldHdvcmtFcnJvciIsInJlc3VsdCIsIlRPTkNsaWVudEVycm9yIiwicXVlcnlGYWlsZWQiLCJnZXRDbGllbnRDb25maWciLCJBcG9sbG9DbGllbnQiLCJjYWNoZSIsIkluTWVtb3J5Q2FjaGUiLCJsaW5rIiwicXVlcnkiLCJkZWZpbml0aW9uIiwia2luZCIsIm9wZXJhdGlvbiIsIldlYlNvY2tldExpbmsiLCJTdWJzY3JpcHRpb25DbGllbnQiLCJyZWNvbm5lY3QiLCJIdHRwTGluayIsInVyaSIsImRlZmF1bHRPcHRpb25zIiwid2F0Y2hRdWVyeSIsImZldGNoUG9saWN5Iiwic3RvcCIsImNsZWFyU3RvcmUiLCJUT05Nb2R1bGUiLCJtb2R1bGUiLCJjb2xsZWN0aW9uTmFtZSIsInR5cGVOYW1lIiwic3Vic3RyIiwidG9VcHBlckNhc2UiLCJsZW5ndGgiLCJmaWx0ZXIiLCJvcmRlckJ5IiwibGltaXQiLCJjIiwidCIsIm9uRG9jRXZlbnQiLCJvbkVycm9yIiwidGV4dCIsInN1YnNjcmlwdGlvbiIsIm9ic2VydmFibGUiLCJzdWJzY3JpYmUiLCJtZXNzYWdlIiwiY29uc29sZSIsImVycm9yIiwidW5zdWJzY3JpYmUiLCJ0aW1lb3V0IiwiZXhpc3RpbmciLCJQcm9taXNlIiwicmVzb2x2ZSIsInJlamVjdCIsImZvcmNlQ2hlY2tUaW1lb3V0IiwicmVzb2x2ZWQiLCJkb1Jlc29sdmUiLCJkb2MiLCJ3YWl0Rm9yVGltZW91dCIsImZvcmNlQ2hlY2siLCJsb2ciLCJzZXRUaW1lb3V0IiwicmVqZWN0T25UaW1lb3V0IiwiY2hhbmdlIiwibW9kdWxlTmFtZSJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBa0JBOztBQUNBOztBQUNBOztBQUNBOztBQUNBOztBQUNBOztBQUNBOztBQUNBOztBQUNBOztBQUVBOztBQUNBOztBQTdCQTs7Ozs7Ozs7Ozs7Ozs7O0lBd0NxQkEsZ0I7Ozs7O0FBSWpCLDRCQUFZQyxPQUFaLEVBQXVDO0FBQUE7O0FBQUE7QUFDbkMsNEhBQU1BLE9BQU47QUFEbUM7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFFbkMsVUFBS0MsT0FBTCxHQUFlLElBQWY7QUFDQSxVQUFLQyxhQUFMLEdBQXFCLElBQXJCO0FBSG1DO0FBSXRDOzs7Ozs7Ozs7Ozs7QUFHRyxxQkFBS0MsTUFBTCxHQUFjLEtBQUtILE9BQUwsQ0FBYUksU0FBYixDQUF1QkMsMkJBQXZCLENBQWQ7QUFDQSxxQkFBS0MsWUFBTCxHQUFvQixJQUFJQyxjQUFKLENBQW1CLElBQW5CLEVBQXlCLGNBQXpCLENBQXBCO0FBQ0EscUJBQUtDLFFBQUwsR0FBZ0IsSUFBSUQsY0FBSixDQUFtQixJQUFuQixFQUF5QixVQUF6QixDQUFoQjtBQUNBLHFCQUFLRSxNQUFMLEdBQWMsSUFBSUYsY0FBSixDQUFtQixJQUFuQixFQUF5QixRQUF6QixDQUFkO0FBQ0EscUJBQUtHLFFBQUwsR0FBZ0IsSUFBSUgsY0FBSixDQUFtQixJQUFuQixFQUF5QixVQUF6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L0IsY0FBL0MsRUFBK0RLLE1BQS9EO0FBQ0FzQixzQkFBQUEsU0FBUyxDQUFDLElBQUQsQ0FBVDtBQUNIO0FBQ0osbUJBTEQ7O0FBT0FkLGtCQUFBQSxZQUFZLEdBQUcsTUFBSSxDQUFDRSxTQUFMLENBQWVWLE1BQWYsRUFBdUI3QixNQUF2QixFQUErQixVQUFDMEQsTUFBRCxFQUFTTixHQUFULEVBQWlCO0FBQzNERCxvQkFBQUEsU0FBUyxDQUFDQyxHQUFELENBQVQ7QUFDSCxtQkFGYyxDQUFmO0FBR0FJLGtCQUFBQSxVQUFVLENBQUNGLFVBQUQsRUFBYUwsaUJBQWIsQ0FBVjs7QUFDQSxzQkFBSUwsT0FBSixFQUFhO0FBQ1RZLG9CQUFBQSxVQUFVLENBQUNDLGVBQUQsRUFBa0JiLE9BQWxCLENBQVY7QUFDSDtBQUNKLGlCQWxETSxDOzs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQXNEZmhGLGdCQUFnQixDQUFDK0YsVUFBakIsR0FBOEIsa0JBQTlCIiwic291cmNlc0NvbnRlbnQiOlsiLypcbiAqIENvcHlyaWdodCAyMDE4LTIwMTkgVE9OIERFViBTT0xVVElPTlMgTFRELlxuICpcbiAqIExpY2Vuc2VkIHVuZGVyIHRoZSBTT0ZUV0FSRSBFVkFMVUFUSU9OIExpY2Vuc2UgKHRoZSBcIkxpY2Vuc2VcIik7IHlvdSBtYXkgbm90IHVzZVxuICogdGhpcyBmaWxlIGV4Y2VwdCBpbiBjb21wbGlhbmNlIHdpdGggdGhlIExpY2Vuc2UuICBZb3UgbWF5IG9idGFpbiBhIGNvcHkgb2YgdGhlXG4gKiBMaWNlbnNlIGF0OlxuICpcbiAqIGh0dHA6Ly93d3cudG9uLmRldi9saWNlbnNlc1xuICpcbiAqIFVubGVzcyByZXF1aXJlZCBieSBhcHBsaWNhYmxlIGxhdyBvciBhZ3JlZWQgdG8gaW4gd3JpdGluZywgc29mdHdhcmVcbiAqIGRpc3RyaWJ1dGVkIHVuZGVyIHRoZSBMaWNlbnNlIGlzIGRpc3RyaWJ1dGVkIG9uIGFuIFwiQVMgSVNcIiBCQVNJUyxcbiAqIFdJVEhPVVQgV0FSUkFOVElFUyBPUiBDT05ESVRJT05TIE9GIEFOWSBLSU5ELCBlaXRoZXIgZXhwcmVzcyBvciBpbXBsaWVkLlxuICogU2VlIHRoZSBMaWNlbnNlIGZvciB0aGUgc3BlY2lmaWMgVE9OIERFViBzb2Z0d2FyZSBnb3Zlcm5pbmcgcGVybWlzc2lvbnMgYW5kXG4gKiBsaW1pdGF0aW9ucyB1bmRlciB0aGUgTGljZW5zZS5cbiAqL1xuXG4vLyBAZmxvd1xuXG5pbXBvcnQgeyBJbk1lbW9yeUNhY2hlIH0gZnJvbSAnYXBvbGxvLWNhY2hlLWlubWVtb3J5JztcbmltcG9ydCB7IEFwb2xsb0NsaWVudCB9IGZyb20gJ2Fwb2xsby1jbGllbnQnO1xuaW1wb3J0IHsgc3BsaXQgfSBmcm9tIFwiYXBvbGxvLWxpbmtcIjtcbmltcG9ydCB7IEh0dHBMaW5rIH0gZnJvbSAnYXBvbGxvLWxpbmstaHR0cCc7XG5pbXBvcnQgeyBXZWJTb2NrZXRMaW5rIH0gZnJvbSAnYXBvbGxvLWxpbmstd3MnO1xuaW1wb3J0IHsgZ2V0TWFpbkRlZmluaXRpb24gfSBmcm9tICdhcG9sbG8tdXRpbGl0aWVzJztcbmltcG9ydCBncWwgZnJvbSAnZ3JhcGhxbC10YWcnO1xuaW1wb3J0IHsgU3Vic2NyaXB0aW9uQ2xpZW50IH0gZnJvbSBcInN1YnNjcmlwdGlvbnMtdHJhbnNwb3J0LXdzXCI7XG5pbXBvcnQgeyBUT05DbGllbnQsIFRPTkNsaWVudEVycm9yIH0gZnJvbSAnLi4vVE9OQ2xpZW50JztcbmltcG9ydCB0eXBlIHsgVE9OTW9kdWxlQ29udGV4dCB9IGZyb20gJy4uL1RPTk1vZHVsZSc7XG5pbXBvcnQgeyBUT05Nb2R1bGUgfSBmcm9tICcuLi9UT05Nb2R1bGUnO1xuaW1wb3J0IFRPTkNvbmZpZ01vZHVsZSBmcm9tICcuL1RPTkNvbmZpZ01vZHVsZSc7XG5cbnR5cGUgU3Vic2NyaXB0aW9uID0ge1xuICAgIHVuc3Vic2NyaWJlOiAoKSA9PiB2b2lkXG59XG5cbmV4cG9ydCB0eXBlIFJlcXVlc3QgPSB7XG4gICAgaWQ6IHN0cmluZyxcbiAgICBib2R5OiBzdHJpbmcsXG59XG5cbmV4cG9ydCBkZWZhdWx0IGNsYXNzIFRPTlF1ZXJpZXNNb2R1bGUgZXh0ZW5kcyBUT05Nb2R1bGUge1xuICAgIGNvbmZpZzogVE9OQ29uZmlnTW9kdWxlO1xuICAgIG92ZXJyaWRlV3NVcmw6ID9zdHJpbmc7XG5cbiAgICBjb25zdHJ1Y3Rvcihjb250ZXh0OiBUT05Nb2R1bGVDb250ZXh0KSB7XG4gICAgICAgIHN1cGVyKGNvbnRleHQpO1xuICAgICAgICB0aGlzLl9jbGllbnQgPSBudWxsO1xuICAgICAgICB0aGlzLm92ZXJyaWRlV3NVcmwgPSBudWxsO1xuICAgIH1cblxuICAgIGFzeW5jIHNldHVwKCkge1xuICAgICAgICB0aGlzLmNvbmZpZyA9IHRoaXMuY29udGV4dC5nZXRNb2R1bGUoVE9OQ29uZmlnTW9kdWxlKTtcbiAgICAgICAgdGhpcy50cmFuc2FjdGlvbnMgPSBuZXcgVE9OUUNvbGxlY3Rpb24odGhpcywgJ3RyYW5zYWN0aW9ucycpO1xuICAgICAgICB0aGlzLm1lc3NhZ2VzID0gbmV3IFRPTlFDb2xsZWN0aW9uKHRoaXMsICdtZXNzYWdlcycpO1xuICAgICAgICB0aGlzLmJsb2NrcyA9IG5ldyBUT05RQ29sbGVjdGlvbih0aGlzLCAnYmxvY2tzJyk7XG4gICAgICAgIHRoaXMuYWNjb3VudHMgPSBuZXcgVE9OUUNvbGxlY3Rpb24odGhpcywgJ2FjY291bnRzJyk7XG4gICAgfVxuXG4gICAgYXN5bmMgZ2V0Q2xpZW50Q29uZmlnKCkge1xuICAgICAgICBjb25zdCBjb25maWcgPSB0aGlzLmNvbmZpZztcbiAgICAgICAgY29uc3QgeyBjbGllbnRQbGF0Zm9ybSB9ID0gVE9OQ2xpZW50O1xuICAgICAgICBpZiAoIWNvbmZpZy5kYXRhIHx8ICFjbGllbnRQbGF0Zm9ybSkge1xuICAgICAgICAgICAgdGhyb3cgRXJyb3IoJ1RPTiBDbGllbnQgZG9lcyBub3QgY29uZmlndXJlZCcpO1xuICAgICAgICB9XG4gICAgICAgIGxldCBodHRwVXJsID0gY29uZmlnLnF1ZXJpZXNIdHRwVXJsKCk7XG4gICAgICAgIGxldCB3c1VybCA9IGNvbmZpZy5xdWVyaWVzV3NVcmwoKTtcbiAgICAgICAgY29uc3QgZmV0Y2ggPSBjbGllbnRQbGF0Zm9ybS5mZXRjaDtcbiAgICAgICAgY29uc3QgcmVzcG9uc2UgPSBhd2FpdCBmZXRjaChodHRwVXJsKTtcbiAgICAgICAgaWYgKHJlc3BvbnNlLnJlZGlyZWN0ZWQpIHtcbiAgICAgICAgICAgIGNvbnN0IGxvY2F0aW9uID0gcmVzcG9uc2UudXJsO1xuICAgICAgICAgICAgaWYgKCEhbG9jYXRpb24pIHtcbiAgICAgICAgICAgICAgICBodHRwVXJsID0gbG9jYXRpb247XG4gICAgICAgICAgICAgICAgd3NVcmwgPSBsb2NhdGlvblxuICAgICAgICAgICAgICAgICAgICAucmVwbGFjZSgvXmh0dHBzOlxcL1xcLy9naSwgJ3dzczovLycpXG4gICAgICAgICAgICAgICAgICAgIC5yZXBsYWNlKC9eaHR0cDpcXC9cXC8vZ2ksICd3czovLycpO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICAgIHJldHVybiB7XG4gICAgICAgICAgICBodHRwVXJsLFxuICAgICAgICAgICAgd3NVcmwsXG4gICAgICAgICAgICBmZXRjaCxcbiAgICAgICAgICAgIFdlYlNvY2tldDogY2xpZW50UGxhdGZvcm0uV2ViU29ja2V0LFxuICAgICAgICB9XG4gICAgfVxuXG4gICAgYXN5bmMgcG9zdFJlcXVlc3RzKHJlcXVlc3RzOiBSZXF1ZXN0W10pOiBQcm9taXNlPHZvaWQ+IHtcbiAgICAgICAgY29uc3QgcWwgPSBgbXV0YXRpb24gcG9zdFJlcXVlc3RzKCRyZXF1ZXN0czogW1JlcXVlc3RdKSB7XG4gICAgICAgICAgICBwb3N0UmVxdWVzdHMocmVxdWVzdHM6ICRyZXF1ZXN0cylcbiAgICAgICAgfWA7XG4gICAgICAgIGNvbnN0IG11dGF0aW9uID0gZ3FsKFtxbF0pO1xuICAgICAgICBjb25zdCBjbGllbnQgPSBhd2FpdCB0aGlzLmVuc3VyZUNsaWVudCgpO1xuICAgICAgICB0cnkge1xuICAgICAgICAgICAgYXdhaXQgY2xpZW50Lm11dGF0ZSh7XG4gICAgICAgICAgICAgICAgbXV0YXRpb24sXG4gICAgICAgICAgICAgICAgdmFyaWFibGVzOiB7XG4gICAgICAgICAgICAgICAgICAgIHJlcXVlc3RzLFxuICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICB9KTtcbiAgICAgICAgfSBjYXRjaCAoZXJyb3IpIHtcbiAgICAgICAgICAgIGNvbnN0IGVycm9ycyA9IGVycm9yICYmIGVycm9yLm5ldHdvcmtFcnJvciAmJiBlcnJvci5uZXR3b3JrRXJyb3IucmVzdWx0ICYmIGVycm9yLm5ldHdvcmtFcnJvci5yZXN1bHQuZXJyb3JzO1xuICAgICAgICAgICAgaWYgKGVycm9ycykge1xuICAgICAgICAgICAgICAgIHRocm93IFRPTkNsaWVudEVycm9yLnF1ZXJ5RmFpbGVkKGVycm9ycyk7XG4gICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAgIHRocm93IGVycm9yO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgfVxuXG4gICAgYXN5bmMgZW5zdXJlQ2xpZW50KCk6IEFwb2xsb0NsaWVudCB7XG4gICAgICAgIGlmICh0aGlzLl9jbGllbnQpIHtcbiAgICAgICAgICAgIHJldHVybiB0aGlzLl9jbGllbnQ7XG4gICAgICAgIH1cbiAgICAgICAgY29uc3QgeyBodHRwVXJsLCB3c1VybCwgZmV0Y2gsIFdlYlNvY2tldCB9ID0gYXdhaXQgdGhpcy5nZXRDbGllbnRDb25maWcoKTtcbiAgICAgICAgdGhpcy5fY2xpZW50ID0gbmV3IEFwb2xsb0NsaWVudCh7XG4gICAgICAgICAgICBjYWNoZTogbmV3IEluTWVtb3J5Q2FjaGUoe30pLFxuICAgICAgICAgICAgbGluazogc3BsaXQoXG4gICAgICAgICAgICAgICAgKHsgcXVlcnkgfSkgPT4ge1xuICAgICAgICAgICAgICAgICAgICBjb25zdCBkZWZpbml0aW9uID0gZ2V0TWFpbkRlZmluaXRpb24ocXVlcnkpO1xuICAgICAgICAgICAgICAgICAgICByZXR1cm4gKFxuICAgICAgICAgICAgICAgICAgICAgICAgZGVmaW5pdGlvbi5raW5kID09PSAnT3BlcmF0aW9uRGVmaW5pdGlvbidcbiAgICAgICAgICAgICAgICAgICAgICAgICYmIGRlZmluaXRpb24ub3BlcmF0aW9uID09PSAnc3Vic2NyaXB0aW9uJ1xuICAgICAgICAgICAgICAgICAgICApO1xuICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgbmV3IFdlYlNvY2tldExpbmsobmV3IFN1YnNjcmlwdGlvbkNsaWVudChcbiAgICAgICAgICAgICAgICAgICAgd3NVcmwsXG4gICAgICAgICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIHJlY29ubmVjdDogdHJ1ZVxuICAgICAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgICAgICBXZWJTb2NrZXRcbiAgICAgICAgICAgICAgICApKSxcbiAgICAgICAgICAgICAgICBuZXcgSHR0cExpbmsoe1xuICAgICAgICAgICAgICAgICAgICB1cmk6IGh0dHBVcmwsXG4gICAgICAgICAgICAgICAgICAgIGZldGNoLFxuICAgICAgICAgICAgICAgIH0pLFxuICAgICAgICAgICAgKSxcbiAgICAgICAgICAgIGRlZmF1bHRPcHRpb25zOiB7XG4gICAgICAgICAgICAgICAgd2F0Y2hRdWVyeToge1xuICAgICAgICAgICAgICAgICAgICBmZXRjaFBvbGljeTogJ25vLWNhY2hlJyxcbiAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgIHF1ZXJ5OiB7XG4gICAgICAgICAgICAgICAgICAgIGZldGNoUG9saWN5OiAnbm8tY2FjaGUnLFxuICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICB9XG4gICAgICAgIH0pO1xuICAgICAgICByZXR1cm4gdGhpcy5fY2xpZW50O1xuICAgIH1cblxuICAgIGFzeW5jIGNsb3NlKCkge1xuICAgICAgICBpZiAodGhpcy5fY2xpZW50KSB7XG4gICAgICAgICAgICBjb25zdCBjbGllbnQgPSB0aGlzLl9jbGllbnQ7XG4gICAgICAgICAgICB0aGlzLl9jbGllbnQgPSBudWxsO1xuICAgICAgICAgICAgY2xpZW50LnN0b3AoKTtcbiAgICAgICAgICAgIGF3YWl0IGNsaWVudC5jbGVhclN0b3JlKCk7XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICB0cmFuc2FjdGlvbnM6IFRPTlFDb2xsZWN0aW9uO1xuXG4gICAgbWVzc2FnZXM6IFRPTlFDb2xsZWN0aW9uO1xuXG4gICAgYmxvY2tzOiBUT05RQ29sbGVjdGlvbjtcblxuICAgIGFjY291bnRzOiBUT05RQ29sbGVjdGlvbjtcblxuICAgIF9jbGllbnQ6IEFwb2xsb0NsaWVudDtcbn1cblxuXG50eXBlIERvY0V2ZW50ID0gKGNoYW5nZVR5cGU6IHN0cmluZywgZG9jOiBhbnkpID0+IHZvaWQ7XG5cbnR5cGUgT3JkZXJCeSA9IHtcbiAgICBwYXRoOiBzdHJpbmcsXG4gICAgZGlyZWN0aW9uOiAnQVNDJyB8ICdERVNDJ1xufVxuXG5jbGFzcyBUT05RQ29sbGVjdGlvbiB7XG4gICAgbW9kdWxlOiBUT05RdWVyaWVzTW9kdWxlO1xuXG4gICAgY29sbGVjdGlvbk5hbWU6IHN0cmluZztcbiAgICB0eXBlTmFtZTogc3RyaW5nO1xuXG4gICAgY29uc3RydWN0b3IobW9kdWxlOiBUT05RdWVyaWVzTW9kdWxlLCBjb2xsZWN0aW9uTmFtZTogc3RyaW5nKSB7XG4gICAgICAgIHRoaXMubW9kdWxlID0gbW9kdWxlO1xuICAgICAgICB0aGlzLmNvbGxlY3Rpb25OYW1lID0gY29sbGVjdGlvbk5hbWU7XG4gICAgICAgIHRoaXMudHlwZU5hbWUgPSBjb2xsZWN0aW9uTmFtZS5zdWJzdHIoMCwgMSkudG9VcHBlckNhc2UoKSArXG4gICAgICAgICAgICBjb2xsZWN0aW9uTmFtZS5zdWJzdHIoMSwgY29sbGVjdGlvbk5hbWUubGVuZ3RoIC0gMik7XG4gICAgfVxuXG4gICAgYXN5bmMgcXVlcnkoZmlsdGVyOiBhbnksIHJlc3VsdDogc3RyaW5nLCBvcmRlckJ5PzogT3JkZXJCeVtdLCBsaW1pdD86IG51bWJlcik6IFByb21pc2U8YW55PiB7XG4gICAgICAgIGNvbnN0IGMgPSB0aGlzLmNvbGxlY3Rpb25OYW1lO1xuICAgICAgICBjb25zdCB0ID0gdGhpcy50eXBlTmFtZTtcbiAgICAgICAgY29uc3QgcWwgPSBgcXVlcnkgJHtjfSgkZmlsdGVyOiAke3R9RmlsdGVyLCAkb3JkZXJCeTogW1F1ZXJ5T3JkZXJCeV0sICRsaW1pdDogSW50KSB7XG4gICAgICAgICAgICAke2N9KGZpbHRlcjogJGZpbHRlciwgb3JkZXJCeTogJG9yZGVyQnksIGxpbWl0OiAkbGltaXQpIHsgJHtyZXN1bHR9IH1cbiAgICAgICAgfWA7XG4gICAgICAgIGNvbnN0IHF1ZXJ5ID0gZ3FsKFtxbF0pO1xuICAgICAgICBjb25zdCBjbGllbnQgPSBhd2FpdCB0aGlzLm1vZHVsZS5lbnN1cmVDbGllbnQoKTtcbiAgICAgICAgdHJ5IHtcbiAgICAgICAgICAgIHJldHVybiAoYXdhaXQgY2xpZW50LnF1ZXJ5KHtcbiAgICAgICAgICAgICAgICBxdWVyeSxcbiAgICAgICAgICAgICAgICB2YXJpYWJsZXM6IHtcbiAgICAgICAgICAgICAgICAgICAgZmlsdGVyLFxuICAgICAgICAgICAgICAgICAgICBvcmRlckJ5LFxuICAgICAgICAgICAgICAgICAgICBsaW1pdFxuICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICB9KSkuZGF0YVtjXTtcbiAgICAgICAgfSBjYXRjaCAoZXJyb3IpIHtcbiAgICAgICAgICAgIGNvbnN0IGVycm9ycyA9IGVycm9yICYmIGVycm9yLm5ldHdvcmtFcnJvciAmJiBlcnJvci5uZXR3b3JrRXJyb3IucmVzdWx0ICYmIGVycm9yLm5ldHdvcmtFcnJvci5yZXN1bHQuZXJyb3JzO1xuICAgICAgICAgICAgaWYgKGVycm9ycykge1xuICAgICAgICAgICAgICAgIHRocm93IFRPTkNsaWVudEVycm9yLnF1ZXJ5RmFpbGVkKGVycm9ycyk7XG4gICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAgIHRocm93IGVycm9yO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgfVxuXG4gICAgc3Vic2NyaWJlKFxuICAgICAgICBmaWx0ZXI6IGFueSxcbiAgICAgICAgcmVzdWx0OiBzdHJpbmcsXG4gICAgICAgIG9uRG9jRXZlbnQ6IERvY0V2ZW50LFxuICAgICAgICBvbkVycm9yPzogKGVycjogRXJyb3IpID0+IHZvaWRcbiAgICApOiBTdWJzY3JpcHRpb24ge1xuICAgICAgICBjb25zdCB0ZXh0ID0gYHN1YnNjcmlwdGlvbiAke3RoaXMuY29sbGVjdGlvbk5hbWV9KCRmaWx0ZXI6ICR7dGhpcy50eXBlTmFtZX1GaWx0ZXIpIHtcbiAgICAgICAgXHQke3RoaXMuY29sbGVjdGlvbk5hbWV9KGZpbHRlcjogJGZpbHRlcikgeyAke3Jlc3VsdH0gfVxuICAgICAgICB9YDtcbiAgICAgICAgY29uc3QgcXVlcnkgPSBncWwoW3RleHRdKTtcbiAgICAgICAgbGV0IHN1YnNjcmlwdGlvbiA9IG51bGw7XG4gICAgICAgIChhc3luYyAoKSA9PiB7XG4gICAgICAgICAgICB0cnkge1xuICAgICAgICAgICAgICAgIGNvbnN0IGNsaWVudCA9IGF3YWl0IHRoaXMubW9kdWxlLmVuc3VyZUNsaWVudCgpO1xuICAgICAgICAgICAgICAgIGNvbnN0IG9ic2VydmFibGUgPSBjbGllbnQuc3Vic2NyaWJlKHtcbiAgICAgICAgICAgICAgICAgICAgcXVlcnksXG4gICAgICAgICAgICAgICAgICAgIHZhcmlhYmxlczoge1xuICAgICAgICAgICAgICAgICAgICAgICAgZmlsdGVyLFxuICAgICAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgICAgIHN1YnNjcmlwdGlvbiA9IG9ic2VydmFibGUuc3Vic2NyaWJlKChtZXNzYWdlKSA9PiB7XG4gICAgICAgICAgICAgICAgICAgIG9uRG9jRXZlbnQoJ2luc2VydC91cGRhdGUnLCBtZXNzYWdlLmRhdGFbdGhpcy5jb2xsZWN0aW9uTmFtZV0pO1xuICAgICAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgfSBjYXRjaCAoZXJyb3IpIHtcbiAgICAgICAgICAgICAgICBpZiAob25FcnJvcikge1xuICAgICAgICAgICAgICAgICAgICBvbkVycm9yKGVycm9yKTtcbiAgICAgICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAgICAgICBjb25zb2xlLmVycm9yKCdUT04gQ2xpZW50IHN1YnNjcmlwdGlvbiBlcnJvcicsIGVycm9yKTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG4gICAgICAgIH0pKCk7XG4gICAgICAgIHJldHVybiB7XG4gICAgICAgICAgICB1bnN1YnNjcmliZTogKCkgPT4ge1xuICAgICAgICAgICAgICAgIGlmIChzdWJzY3JpcHRpb24pIHtcbiAgICAgICAgICAgICAgICAgICAgc3Vic2NyaXB0aW9uLnVuc3Vic2NyaWJlKCk7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfSxcbiAgICAgICAgfTtcbiAgICB9XG5cbiAgICBhc3luYyB3YWl0Rm9yKGZpbHRlcjogYW55LCByZXN1bHQ6IHN0cmluZywgdGltZW91dD86IG51bWJlcik6IFByb21pc2U8YW55PiB7XG4gICAgICAgIGNvbnN0IGNvbmZpZyA9IHRoaXMubW9kdWxlLmNvbmZpZztcbiAgICAgICAgY29uc3QgZXhpc3RpbmcgPSBhd2FpdCB0aGlzLnF1ZXJ5KGZpbHRlciwgcmVzdWx0KTtcbiAgICAgICAgaWYgKGV4aXN0aW5nLmxlbmd0aCA+IDApIHtcbiAgICAgICAgICAgIHJldHVybiBleGlzdGluZ1swXTtcbiAgICAgICAgfVxuICAgICAgICByZXR1cm4gbmV3IFByb21pc2UoKHJlc29sdmUsIHJlamVjdCkgPT4ge1xuICAgICAgICAgICAgY29uc3QgZm9yY2VDaGVja1RpbWVvdXQgPSAxMF8wMDA7XG4gICAgICAgICAgICBsZXQgc3Vic2NyaXB0aW9uOiBhbnkgPSBudWxsO1xuICAgICAgICAgICAgbGV0IHJlc29sdmVkOiBib29sZWFuID0gZmFsc2U7XG5cbiAgICAgICAgICAgIGNvbnN0IGRvUmVzb2x2ZSA9IChkb2MpID0+IHtcbiAgICAgICAgICAgICAgICBpZiAocmVzb2x2ZWQpIHtcbiAgICAgICAgICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICByZXNvbHZlZCA9IHRydWU7XG4gICAgICAgICAgICAgICAgaWYgKHN1YnNjcmlwdGlvbikge1xuICAgICAgICAgICAgICAgICAgICBzdWJzY3JpcHRpb24udW5zdWJzY3JpYmUoKTtcbiAgICAgICAgICAgICAgICAgICAgc3Vic2NyaXB0aW9uID0gbnVsbDtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgaWYgKGRvYyAhPT0gbnVsbCkge1xuICAgICAgICAgICAgICAgICAgICByZXNvbHZlKGRvYyk7XG4gICAgICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgICAgICAgcmVqZWN0KFRPTkNsaWVudEVycm9yLndhaXRGb3JUaW1lb3V0KCkpXG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfTtcblxuICAgICAgICAgICAgY29uc3QgZm9yY2VDaGVjayA9ICgpID0+IHtcbiAgICAgICAgICAgICAgICAoYXN5bmMgKCkgPT4ge1xuICAgICAgICAgICAgICAgICAgICBpZiAocmVzb2x2ZWQpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICBjb25maWcubG9nKCd3YWl0Rm9yLmZvcmNlQ2hlY2snLCB0aGlzLmNvbGxlY3Rpb25OYW1lLCBmaWx0ZXIpO1xuICAgICAgICAgICAgICAgICAgICBjb25zdCBleGlzdGluZyA9IGF3YWl0IHRoaXMucXVlcnkoZmlsdGVyLCByZXN1bHQpO1xuICAgICAgICAgICAgICAgICAgICBpZiAoZXhpc3RpbmcubGVuZ3RoID4gMCkge1xuICAgICAgICAgICAgICAgICAgICAgICAgZG9SZXNvbHZlKGV4aXN0aW5nWzBdKTtcbiAgICAgICAgICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIHNldFRpbWVvdXQoZm9yY2VDaGVjaywgZm9yY2VDaGVja1RpbWVvdXQpO1xuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgfSkoKTtcbiAgICAgICAgICAgIH07XG5cbiAgICAgICAgICAgIGNvbnN0IHJlamVjdE9uVGltZW91dCA9ICgpID0+IHtcbiAgICAgICAgICAgICAgICBpZiAoIXJlc29sdmVkKSB7XG4gICAgICAgICAgICAgICAgICAgIGNvbmZpZy5sb2coJ3dhaXRGb3IgcmVqZWN0ZWQgb24gdGltZW91dCcsIHRoaXMuY29sbGVjdGlvbk5hbWUsIGZpbHRlcik7XG4gICAgICAgICAgICAgICAgICAgIGRvUmVzb2x2ZShudWxsKTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9O1xuXG4gICAgICAgICAgICBzdWJzY3JpcHRpb24gPSB0aGlzLnN1YnNjcmliZShmaWx0ZXIsIHJlc3VsdCwgKGNoYW5nZSwgZG9jKSA9PiB7XG4gICAgICAgICAgICAgICAgZG9SZXNvbHZlKGRvYyk7XG4gICAgICAgICAgICB9KTtcbiAgICAgICAgICAgIHNldFRpbWVvdXQoZm9yY2VDaGVjaywgZm9yY2VDaGVja1RpbWVvdXQpO1xuICAgICAgICAgICAgaWYgKHRpbWVvdXQpIHtcbiAgICAgICAgICAgICAgICBzZXRUaW1lb3V0KHJlamVjdE9uVGltZW91dCwgdGltZW91dCk7XG4gICAgICAgICAgICB9XG4gICAgICAgIH0pO1xuICAgIH1cbn1cblxuVE9OUXVlcmllc01vZHVsZS5tb2R1bGVOYW1lID0gJ1RPTlF1ZXJpZXNNb2R1bGUnO1xuIl19