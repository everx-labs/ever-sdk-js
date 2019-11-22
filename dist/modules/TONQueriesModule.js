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
var unionsScheme = {
  "data": {
    "__schema": {
      "types": [{
        "kind": "UNION",
        "name": "MessageHeader",
        "possibleTypes": [{
          "name": "MessageHeaderIntMsgInfoVariant"
        }, {
          "name": "MessageHeaderExtInMsgInfoVariant"
        }, {
          "name": "MessageHeaderExtOutMsgInfoVariant"
        }]
      }, {
        "kind": "UNION",
        "name": "MsgAddressInt",
        "possibleTypes": [{
          "name": "MsgAddressIntAddrNoneVariant"
        }, {
          "name": "MsgAddressIntAddrStdVariant"
        }, {
          "name": "MsgAddressIntAddrVarVariant"
        }]
      }, {
        "kind": "UNION",
        "name": "MsgAddressExt",
        "possibleTypes": [{
          "name": "MsgAddressExtAddrNoneVariant"
        }, {
          "name": "MsgAddressExtAddrExternVariant"
        }]
      }, {
        "kind": "UNION",
        "name": "InMsg",
        "possibleTypes": [{
          "name": "InMsgExternalVariant"
        }, {
          "name": "InMsgIHRVariant"
        }, {
          "name": "InMsgImmediatellyVariant"
        }, {
          "name": "InMsgFinalVariant"
        }, {
          "name": "InMsgTransitVariant"
        }, {
          "name": "InMsgDiscardedFinalVariant"
        }, {
          "name": "InMsgDiscardedTransitVariant"
        }]
      }, {
        "kind": "UNION",
        "name": "IntermediateAddress",
        "possibleTypes": [{
          "name": "IntermediateAddressRegularVariant"
        }, {
          "name": "IntermediateAddressSimpleVariant"
        }, {
          "name": "IntermediateAddressExtVariant"
        }]
      }, {
        "kind": "UNION",
        "name": "OutMsg",
        "possibleTypes": [{
          "name": "OutMsgNoneVariant"
        }, {
          "name": "OutMsgExternalVariant"
        }, {
          "name": "OutMsgImmediatelyVariant"
        }, {
          "name": "OutMsgOutMsgNewVariant"
        }, {
          "name": "OutMsgTransitVariant"
        }, {
          "name": "OutMsgDequeueVariant"
        }, {
          "name": "OutMsgTransitRequiredVariant"
        }]
      }, {
        "kind": "UNION",
        "name": "AccountStorageState",
        "possibleTypes": [{
          "name": "AccountStorageStateAccountUninitVariant"
        }, {
          "name": "AccountStorageStateAccountActiveVariant"
        }, {
          "name": "AccountStorageStateAccountFrozenVariant"
        }]
      }, {
        "kind": "UNION",
        "name": "TransactionDescription",
        "possibleTypes": [{
          "name": "TransactionDescriptionOrdinaryVariant"
        }, {
          "name": "TransactionDescriptionStorageVariant"
        }, {
          "name": "TransactionDescriptionTickTockVariant"
        }, {
          "name": "TransactionDescriptionSplitPrepareVariant"
        }, {
          "name": "TransactionDescriptionSplitInstallVariant"
        }, {
          "name": "TransactionDescriptionMergePrepareVariant"
        }, {
          "name": "TransactionDescriptionMergeInstallVariant"
        }]
      }, {
        "kind": "UNION",
        "name": "TrComputePhase",
        "possibleTypes": [{
          "name": "TrComputePhaseSkippedVariant"
        }, {
          "name": "TrComputePhaseVmVariant"
        }]
      }, {
        "kind": "UNION",
        "name": "TrBouncePhase",
        "possibleTypes": [{
          "name": "TrBouncePhaseNegfundsVariant"
        }, {
          "name": "TrBouncePhaseNofundsVariant"
        }, {
          "name": "TrBouncePhaseOkVariant"
        }]
      }]
    }
  }
};

var TONQueriesModule =
/*#__PURE__*/
function (_TONModule) {
  (0, _inherits2["default"])(TONQueriesModule, _TONModule);

  function TONQueriesModule(context) {
    var _this;

    (0, _classCallCheck2["default"])(this, TONQueriesModule);
    _this = (0, _possibleConstructorReturn2["default"])(this, (0, _getPrototypeOf2["default"])(TONQueriesModule).call(this, context));
    (0, _defineProperty2["default"])((0, _assertThisInitialized2["default"])(_this), "config", void 0);
    (0, _defineProperty2["default"])((0, _assertThisInitialized2["default"])(_this), "transactions", void 0);
    (0, _defineProperty2["default"])((0, _assertThisInitialized2["default"])(_this), "messages", void 0);
    (0, _defineProperty2["default"])((0, _assertThisInitialized2["default"])(_this), "blocks", void 0);
    (0, _defineProperty2["default"])((0, _assertThisInitialized2["default"])(_this), "accounts", void 0);
    (0, _defineProperty2["default"])((0, _assertThisInitialized2["default"])(_this), "_client", void 0);
    _this._client = null;
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
    key: "ensureClient",
    value: function ensureClient() {
      if (this._client) {
        return this._client;
      }

      var config = this.config;
      var configData = config.data;
      var clientPlatform = _TONClient.TONClient.clientPlatform;

      if (!configData || !clientPlatform) {
        throw Error('TON Client does not configured');
      }

      var fragmentMatcher = new _apolloCacheInmemory.IntrospectionFragmentMatcher({
        introspectionQueryResultData: unionsScheme.data
      });
      var cache = new _apolloCacheInmemory.InMemoryCache({
        fragmentMatcher: fragmentMatcher
      });
      var httpLink = new _apolloLinkHttp.HttpLink({
        uri: config.queriesHttpUrl(),
        fetch: clientPlatform.fetch
      });
      var subscriptionClient = new _subscriptionsTransportWs.SubscriptionClient(config.queriesWsUrl(), {
        reconnect: true
      }, clientPlatform.WebSocket);
      var wsLink = new _apolloLinkWs.WebSocketLink(subscriptionClient);
      var link = (0, _apolloLink.split)(function (_ref) {
        var query = _ref.query;
        var definition = (0, _apolloUtilities.getMainDefinition)(query);
        return definition.kind === 'OperationDefinition' && definition.operation === 'subscription';
      }, wsLink, httpLink);
      var defaultOptions = {
        watchQuery: {
          fetchPolicy: 'no-cache'
        },
        query: {
          fetchPolicy: 'no-cache'
        }
      };
      this._client = new _apolloClient.ApolloClient({
        cache: cache,
        link: link,
        defaultOptions: defaultOptions
      });
      return this._client;
    }
  }, {
    key: "close",
    value: function () {
      var _close = (0, _asyncToGenerator2["default"])(
      /*#__PURE__*/
      _regenerator["default"].mark(function _callee2() {
        var client;
        return _regenerator["default"].wrap(function _callee2$(_context2) {
          while (1) {
            switch (_context2.prev = _context2.next) {
              case 0:
                if (!this._client) {
                  _context2.next = 6;
                  break;
                }

                client = this._client;
                this._client = null;
                client.stop();
                _context2.next = 6;
                return client.clearStore();

              case 6:
              case "end":
                return _context2.stop();
            }
          }
        }, _callee2, this);
      }));

      function close() {
        return _close.apply(this, arguments);
      }

      return close;
    }()
  }, {
    key: "select",
    value: function () {
      var _select = (0, _asyncToGenerator2["default"])(
      /*#__PURE__*/
      _regenerator["default"].mark(function _callee3(query, bindVars) {
        var gqlQuery, client;
        return _regenerator["default"].wrap(function _callee3$(_context3) {
          while (1) {
            switch (_context3.prev = _context3.next) {
              case 0:
                gqlQuery = (0, _graphqlTag["default"])(["query select($query: String!, $bindVarsJson: String!) {\n            select(query: $query, bindVarsJson: $bindVarsJson)\n        }"]);
                client = this.ensureClient();
                _context3.t0 = JSON;
                _context3.next = 5;
                return client.query({
                  query: gqlQuery,
                  variables: {
                    query: query,
                    bindVarsJson: JSON.stringify(bindVars)
                  }
                });

              case 5:
                _context3.t1 = _context3.sent.data.select;
                return _context3.abrupt("return", _context3.t0.parse.call(_context3.t0, _context3.t1));

              case 7:
              case "end":
                return _context3.stop();
            }
          }
        }, _callee3, this);
      }));

      function select(_x, _x2) {
        return _select.apply(this, arguments);
      }

      return select;
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
      _regenerator["default"].mark(function _callee4(filter, result, orderBy, limit) {
        var c, t, ql, query, client, errors;
        return _regenerator["default"].wrap(function _callee4$(_context4) {
          while (1) {
            switch (_context4.prev = _context4.next) {
              case 0:
                c = this.collectionName;
                t = this.typeName;
                ql = "query ".concat(c, "($filter: ").concat(t, "Filter, $orderBy: [QueryOrderBy], $limit: Int) {\n            ").concat(c, "(filter: $filter, orderBy: $orderBy, limit: $limit) { ").concat(result, " }\n        }");
                query = (0, _graphqlTag["default"])([ql]);
                client = this.module.ensureClient();
                _context4.prev = 5;
                _context4.next = 8;
                return client.query({
                  query: query,
                  variables: {
                    filter: filter,
                    orderBy: orderBy,
                    limit: limit
                  }
                });

              case 8:
                _context4.t0 = c;
                return _context4.abrupt("return", _context4.sent.data[_context4.t0]);

              case 12:
                _context4.prev = 12;
                _context4.t1 = _context4["catch"](5);
                errors = _context4.t1 && _context4.t1.networkError && _context4.t1.networkError.result && _context4.t1.networkError.result.errors;

                if (!errors) {
                  _context4.next = 19;
                  break;
                }

                throw _TONClient.TONClientError.queryFailed(errors);

              case 19:
                throw _context4.t1;

              case 20:
              case "end":
                return _context4.stop();
            }
          }
        }, _callee4, this, [[5, 12]]);
      }));

      function query(_x3, _x4, _x5, _x6) {
        return _query.apply(this, arguments);
      }

      return query;
    }()
  }, {
    key: "subscribe",
    value: function subscribe(filter, result, onDocEvent) {
      var _this2 = this;

      var text = "subscription ".concat(this.collectionName, "($filter: ").concat(this.typeName, "Filter) {\n        \t").concat(this.collectionName, "(filter: $filter) { ").concat(result, " }\n        }");
      var query = (0, _graphqlTag["default"])([text]);
      var client = this.module.ensureClient();
      var observable = client.subscribe({
        query: query,
        variables: {
          filter: filter
        }
      });
      var subscription = observable.subscribe(function (message) {
        onDocEvent('insert/update', message.data[_this2.collectionName]);
      });
      return {
        unsubscribe: function unsubscribe() {
          subscription.unsubscribe();
        }
      };
    }
  }, {
    key: "waitFor",
    value: function () {
      var _waitFor = (0, _asyncToGenerator2["default"])(
      /*#__PURE__*/
      _regenerator["default"].mark(function _callee6(filter, result, timeout) {
        var _this3 = this;

        var config, existing;
        return _regenerator["default"].wrap(function _callee6$(_context6) {
          while (1) {
            switch (_context6.prev = _context6.next) {
              case 0:
                config = this.module.config;
                _context6.next = 3;
                return this.query(filter, result);

              case 3:
                existing = _context6.sent;

                if (!(existing.length > 0)) {
                  _context6.next = 6;
                  break;
                }

                return _context6.abrupt("return", existing[0]);

              case 6:
                return _context6.abrupt("return", new Promise(function (resolve, reject) {
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
                    _regenerator["default"].mark(function _callee5() {
                      var existing;
                      return _regenerator["default"].wrap(function _callee5$(_context5) {
                        while (1) {
                          switch (_context5.prev = _context5.next) {
                            case 0:
                              if (!resolved) {
                                _context5.next = 2;
                                break;
                              }

                              return _context5.abrupt("return");

                            case 2:
                              config.log('waitFor.forceCheck', _this3.collectionName, filter);
                              _context5.next = 5;
                              return _this3.query(filter, result);

                            case 5:
                              existing = _context5.sent;

                              if (existing.length > 0) {
                                doResolve(existing[0]);
                              } else {
                                setTimeout(forceCheck, forceCheckTimeout);
                              }

                            case 7:
                            case "end":
                              return _context5.stop();
                          }
                        }
                      }, _callee5);
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
                return _context6.stop();
            }
          }
        }, _callee6, this);
      }));

      function waitFor(_x7, _x8, _x9) {
        return _waitFor.apply(this, arguments);
      }

      return waitFor;
    }()
  }]);
  return TONQCollection;
}();

TONQueriesModule.moduleName = 'TONQueriesModule';
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy9tb2R1bGVzL1RPTlF1ZXJpZXNNb2R1bGUuanMiXSwibmFtZXMiOlsidW5pb25zU2NoZW1lIiwiVE9OUXVlcmllc01vZHVsZSIsImNvbnRleHQiLCJfY2xpZW50IiwiY29uZmlnIiwiZ2V0TW9kdWxlIiwiVE9OQ29uZmlnTW9kdWxlIiwidHJhbnNhY3Rpb25zIiwiVE9OUUNvbGxlY3Rpb24iLCJtZXNzYWdlcyIsImJsb2NrcyIsImFjY291bnRzIiwiY29uZmlnRGF0YSIsImRhdGEiLCJjbGllbnRQbGF0Zm9ybSIsIlRPTkNsaWVudCIsIkVycm9yIiwiZnJhZ21lbnRNYXRjaGVyIiwiSW50cm9zcGVjdGlvbkZyYWdtZW50TWF0Y2hlciIsImludHJvc3BlY3Rpb25RdWVyeVJlc3VsdERhdGEiLCJjYWNoZSIsIkluTWVtb3J5Q2FjaGUiLCJodHRwTGluayIsIkh0dHBMaW5rIiwidXJpIiwicXVlcmllc0h0dHBVcmwiLCJmZXRjaCIsInN1YnNjcmlwdGlvbkNsaWVudCIsIlN1YnNjcmlwdGlvbkNsaWVudCIsInF1ZXJpZXNXc1VybCIsInJlY29ubmVjdCIsIldlYlNvY2tldCIsIndzTGluayIsIldlYlNvY2tldExpbmsiLCJsaW5rIiwicXVlcnkiLCJkZWZpbml0aW9uIiwia2luZCIsIm9wZXJhdGlvbiIsImRlZmF1bHRPcHRpb25zIiwid2F0Y2hRdWVyeSIsImZldGNoUG9saWN5IiwiQXBvbGxvQ2xpZW50IiwiY2xpZW50Iiwic3RvcCIsImNsZWFyU3RvcmUiLCJiaW5kVmFycyIsImdxbFF1ZXJ5IiwiZW5zdXJlQ2xpZW50IiwiSlNPTiIsInZhcmlhYmxlcyIsImJpbmRWYXJzSnNvbiIsInN0cmluZ2lmeSIsInNlbGVjdCIsInBhcnNlIiwiVE9OTW9kdWxlIiwibW9kdWxlIiwiY29sbGVjdGlvbk5hbWUiLCJ0eXBlTmFtZSIsInN1YnN0ciIsInRvVXBwZXJDYXNlIiwibGVuZ3RoIiwiZmlsdGVyIiwicmVzdWx0Iiwib3JkZXJCeSIsImxpbWl0IiwiYyIsInQiLCJxbCIsImVycm9ycyIsIm5ldHdvcmtFcnJvciIsIlRPTkNsaWVudEVycm9yIiwicXVlcnlGYWlsZWQiLCJvbkRvY0V2ZW50IiwidGV4dCIsIm9ic2VydmFibGUiLCJzdWJzY3JpYmUiLCJzdWJzY3JpcHRpb24iLCJtZXNzYWdlIiwidW5zdWJzY3JpYmUiLCJ0aW1lb3V0IiwiZXhpc3RpbmciLCJQcm9taXNlIiwicmVzb2x2ZSIsInJlamVjdCIsImZvcmNlQ2hlY2tUaW1lb3V0IiwicmVzb2x2ZWQiLCJkb1Jlc29sdmUiLCJkb2MiLCJ3YWl0Rm9yVGltZW91dCIsImZvcmNlQ2hlY2siLCJsb2ciLCJzZXRUaW1lb3V0IiwicmVqZWN0T25UaW1lb3V0IiwiY2hhbmdlIiwibW9kdWxlTmFtZSJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBa0JBOztBQUNBOztBQUNBOztBQUNBOztBQUNBOztBQUNBOztBQUNBOztBQUNBOztBQUNBOztBQUVBOztBQUNBOztBQTdCQTs7Ozs7Ozs7Ozs7Ozs7O0FBbUNBLElBQU1BLFlBQVksR0FBRztBQUNqQixVQUFRO0FBQ0osZ0JBQVk7QUFDUixlQUFTLENBQUM7QUFDTixnQkFBUSxPQURGO0FBRU4sZ0JBQVEsZUFGRjtBQUdOLHlCQUFpQixDQUFDO0FBQUUsa0JBQVE7QUFBVixTQUFELEVBQStDO0FBQUUsa0JBQVE7QUFBVixTQUEvQyxFQUErRjtBQUFFLGtCQUFRO0FBQVYsU0FBL0Y7QUFIWCxPQUFELEVBSU47QUFDQyxnQkFBUSxPQURUO0FBRUMsZ0JBQVEsZUFGVDtBQUdDLHlCQUFpQixDQUFDO0FBQUUsa0JBQVE7QUFBVixTQUFELEVBQTZDO0FBQUUsa0JBQVE7QUFBVixTQUE3QyxFQUF3RjtBQUFFLGtCQUFRO0FBQVYsU0FBeEY7QUFIbEIsT0FKTSxFQVFOO0FBQ0MsZ0JBQVEsT0FEVDtBQUVDLGdCQUFRLGVBRlQ7QUFHQyx5QkFBaUIsQ0FBQztBQUFFLGtCQUFRO0FBQVYsU0FBRCxFQUE2QztBQUFFLGtCQUFRO0FB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LFVBQVUsQ0FBQ0YsVUFBRCxFQUFhTCxpQkFBYixDQUFWO0FBQ0g7O0FBVko7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEscUJBQUQ7QUFZSCxtQkFiRDs7QUFlQSxzQkFBTVEsZUFBZSxHQUFHLFNBQWxCQSxlQUFrQixHQUFNO0FBQzFCLHdCQUFJLENBQUNQLFFBQUwsRUFBZTtBQUNYbEYsc0JBQUFBLE1BQU0sQ0FBQ3VGLEdBQVAsQ0FBVyw2QkFBWCxFQUEwQyxNQUFJLENBQUNsQyxjQUEvQyxFQUErREssTUFBL0Q7QUFDQXlCLHNCQUFBQSxTQUFTLENBQUMsSUFBRCxDQUFUO0FBQ0g7QUFDSixtQkFMRDs7QUFPQVYsa0JBQUFBLFlBQVksR0FBRyxNQUFJLENBQUNELFNBQUwsQ0FBZWQsTUFBZixFQUF1QkMsTUFBdkIsRUFBK0IsVUFBQytCLE1BQUQsRUFBU04sR0FBVCxFQUFpQjtBQUMzREQsb0JBQUFBLFNBQVMsQ0FBQ0MsR0FBRCxDQUFUO0FBQ0gsbUJBRmMsQ0FBZjtBQUdBSSxrQkFBQUEsVUFBVSxDQUFDRixVQUFELEVBQWFMLGlCQUFiLENBQVY7O0FBQ0Esc0JBQUlMLE9BQUosRUFBYTtBQUNUWSxvQkFBQUEsVUFBVSxDQUFDQyxlQUFELEVBQWtCYixPQUFsQixDQUFWO0FBQ0g7QUFDSixpQkFsRE0sQzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFzRGYvRSxnQkFBZ0IsQ0FBQzhGLFVBQWpCLEdBQThCLGtCQUE5QiIsInNvdXJjZXNDb250ZW50IjpbIi8qXG4gKiBDb3B5cmlnaHQgMjAxOC0yMDE5IFRPTiBERVYgU09MVVRJT05TIExURC5cbiAqXG4gKiBMaWNlbnNlZCB1bmRlciB0aGUgU09GVFdBUkUgRVZBTFVBVElPTiBMaWNlbnNlICh0aGUgXCJMaWNlbnNlXCIpOyB5b3UgbWF5IG5vdCB1c2VcbiAqIHRoaXMgZmlsZSBleGNlcHQgaW4gY29tcGxpYW5jZSB3aXRoIHRoZSBMaWNlbnNlLiAgWW91IG1heSBvYnRhaW4gYSBjb3B5IG9mIHRoZVxuICogTGljZW5zZSBhdDpcbiAqXG4gKiBodHRwOi8vd3d3LnRvbi5kZXYvbGljZW5zZXNcbiAqXG4gKiBVbmxlc3MgcmVxdWlyZWQgYnkgYXBwbGljYWJsZSBsYXcgb3IgYWdyZWVkIHRvIGluIHdyaXRpbmcsIHNvZnR3YXJlXG4gKiBkaXN0cmlidXRlZCB1bmRlciB0aGUgTGljZW5zZSBpcyBkaXN0cmlidXRlZCBvbiBhbiBcIkFTIElTXCIgQkFTSVMsXG4gKiBXSVRIT1VUIFdBUlJBTlRJRVMgT1IgQ09ORElUSU9OUyBPRiBBTlkgS0lORCwgZWl0aGVyIGV4cHJlc3Mgb3IgaW1wbGllZC5cbiAqIFNlZSB0aGUgTGljZW5zZSBmb3IgdGhlIHNwZWNpZmljIFRPTiBERVYgc29mdHdhcmUgZ292ZXJuaW5nIHBlcm1pc3Npb25zIGFuZFxuICogbGltaXRhdGlvbnMgdW5kZXIgdGhlIExpY2Vuc2UuXG4gKi9cblxuLy8gQGZsb3dcblxuaW1wb3J0IHsgSW5NZW1vcnlDYWNoZSwgSW50cm9zcGVjdGlvbkZyYWdtZW50TWF0Y2hlciB9IGZyb20gJ2Fwb2xsby1jYWNoZS1pbm1lbW9yeSc7XG5pbXBvcnQgeyBBcG9sbG9DbGllbnQgfSBmcm9tICdhcG9sbG8tY2xpZW50JztcbmltcG9ydCB7IHNwbGl0IH0gZnJvbSBcImFwb2xsby1saW5rXCI7XG5pbXBvcnQgeyBIdHRwTGluayB9IGZyb20gJ2Fwb2xsby1saW5rLWh0dHAnO1xuaW1wb3J0IHsgV2ViU29ja2V0TGluayB9IGZyb20gJ2Fwb2xsby1saW5rLXdzJztcbmltcG9ydCB7IGdldE1haW5EZWZpbml0aW9uIH0gZnJvbSAnYXBvbGxvLXV0aWxpdGllcyc7XG5pbXBvcnQgZ3FsIGZyb20gJ2dyYXBocWwtdGFnJztcbmltcG9ydCB7IFN1YnNjcmlwdGlvbkNsaWVudCB9IGZyb20gXCJzdWJzY3JpcHRpb25zLXRyYW5zcG9ydC13c1wiO1xuaW1wb3J0IHsgVE9OQ2xpZW50LCBUT05DbGllbnRFcnJvciB9IGZyb20gJy4uL1RPTkNsaWVudCc7XG5pbXBvcnQgdHlwZSB7IFRPTk1vZHVsZUNvbnRleHQgfSBmcm9tICcuLi9UT05Nb2R1bGUnO1xuaW1wb3J0IHsgVE9OTW9kdWxlIH0gZnJvbSAnLi4vVE9OTW9kdWxlJztcbmltcG9ydCBUT05Db25maWdNb2R1bGUgZnJvbSAnLi9UT05Db25maWdNb2R1bGUnO1xuXG50eXBlIFN1YnNjcmlwdGlvbiA9IHtcbiAgICB1bnN1YnNjcmliZTogKCkgPT4gdm9pZFxufVxuXG5jb25zdCB1bmlvbnNTY2hlbWUgPSB7XG4gICAgXCJkYXRhXCI6IHtcbiAgICAgICAgXCJfX3NjaGVtYVwiOiB7XG4gICAgICAgICAgICBcInR5cGVzXCI6IFt7XG4gICAgICAgICAgICAgICAgXCJraW5kXCI6IFwiVU5JT05cIixcbiAgICAgICAgICAgICAgICBcIm5hbWVcIjogXCJNZXNzYWdlSGVhZGVyXCIsXG4gICAgICAgICAgICAgICAgXCJwb3NzaWJsZVR5cGVzXCI6IFt7IFwibmFtZVwiOiBcIk1lc3NhZ2VIZWFkZXJJbnRNc2dJbmZvVmFyaWFudFwiIH0sIHsgXCJuYW1lXCI6IFwiTWVzc2FnZUhlYWRlckV4dEluTXNnSW5mb1ZhcmlhbnRcIiB9LCB7IFwibmFtZVwiOiBcIk1lc3NhZ2VIZWFkZXJFeHRPdXRNc2dJbmZvVmFyaWFudFwiIH1dXG4gICAgICAgICAgICB9LCB7XG4gICAgICAgICAgICAgICAgXCJraW5kXCI6IFwiVU5JT05cIixcbiAgICAgICAgICAgICAgICBcIm5hbWVcIjogXCJNc2dBZGRyZXNzSW50XCIsXG4gICAgICAgICAgICAgICAgXCJwb3NzaWJsZVR5cGVzXCI6IFt7IFwibmFtZVwiOiBcIk1zZ0FkZHJlc3NJbnRBZGRyTm9uZVZhcmlhbnRcIiB9LCB7IFwibmFtZVwiOiBcIk1zZ0FkZHJlc3NJbnRBZGRyU3RkVmFyaWFudFwiIH0sIHsgXCJuYW1lXCI6IFwiTXNnQWRkcmVzc0ludEFkZHJWYXJWYXJpYW50XCIgfV1cbiAgICAgICAgICAgIH0sIHtcbiAgICAgICAgICAgICAgICBcImtpbmRcIjogXCJVTklPTlwiLFxuICAgICAgICAgICAgICAgIFwibmFtZVwiOiBcIk1zZ0FkZHJlc3NFeHRcIixcbiAgICAgICAgICAgICAgICBcInBvc3NpYmxlVHlwZXNcIjogW3sgXCJuYW1lXCI6IFwiTXNnQWRkcmVzc0V4dEFkZHJOb25lVmFyaWFudFwiIH0sIHsgXCJuYW1lXCI6IFwiTXNnQWRkcmVzc0V4dEFkZHJFeHRlcm5WYXJpYW50XCIgfV1cbiAgICAgICAgICAgIH0sIHtcbiAgICAgICAgICAgICAgICBcImtpbmRcIjogXCJVTklPTlwiLFxuICAgICAgICAgICAgICAgIFwibmFtZVwiOiBcIkluTXNnXCIsXG4gICAgICAgICAgICAgICAgXCJwb3NzaWJsZVR5cGVzXCI6IFt7IFwibmFtZVwiOiBcIkluTXNnRXh0ZXJuYWxWYXJpYW50XCIgfSwgeyBcIm5hbWVcIjogXCJJbk1zZ0lIUlZhcmlhbnRcIiB9LCB7IFwibmFtZVwiOiBcIkluTXNnSW1tZWRpYXRlbGx5VmFyaWFudFwiIH0sIHsgXCJuYW1lXCI6IFwiSW5Nc2dGaW5hbFZhcmlhbnRcIiB9LCB7IFwibmFtZVwiOiBcIkluTXNnVHJhbnNpdFZhcmlhbnRcIiB9LCB7IFwibmFtZVwiOiBcIkluTXNnRGlzY2FyZGVkRmluYWxWYXJpYW50XCIgfSwgeyBcIm5hbWVcIjogXCJJbk1zZ0Rpc2NhcmRlZFRyYW5zaXRWYXJpYW50XCIgfV1cbiAgICAgICAgICAgIH0sIHtcbiAgICAgICAgICAgICAgICBcImtpbmRcIjogXCJVTklPTlwiLFxuICAgICAgICAgICAgICAgIFwibmFtZVwiOiBcIkludGVybWVkaWF0ZUFkZHJlc3NcIixcbiAgICAgICAgICAgICAgICBcInBvc3NpYmxlVHlwZXNcIjogW3sgXCJuYW1lXCI6IFwiSW50ZXJtZWRpYXRlQWRkcmVzc1JlZ3VsYXJWYXJpYW50XCIgfSwgeyBcIm5hbWVcIjogXCJJbnRlcm1lZGlhdGVBZGRyZXNzU2ltcGxlVmFyaWFudFwiIH0sIHsgXCJuYW1lXCI6IFwiSW50ZXJtZWRpYXRlQWRkcmVzc0V4dFZhcmlhbnRcIiB9XVxuICAgICAgICAgICAgfSwge1xuICAgICAgICAgICAgICAgIFwia2luZFwiOiBcIlVOSU9OXCIsXG4gICAgICAgICAgICAgICAgXCJuYW1lXCI6IFwiT3V0TXNnXCIsXG4gICAgICAgICAgICAgICAgXCJwb3NzaWJsZVR5cGVzXCI6IFt7IFwibmFtZVwiOiBcIk91dE1zZ05vbmVWYXJpYW50XCIgfSwgeyBcIm5hbWVcIjogXCJPdXRNc2dFeHRlcm5hbFZhcmlhbnRcIiB9LCB7IFwibmFtZVwiOiBcIk91dE1zZ0ltbWVkaWF0ZWx5VmFyaWFudFwiIH0sIHsgXCJuYW1lXCI6IFwiT3V0TXNnT3V0TXNnTmV3VmFyaWFudFwiIH0sIHsgXCJuYW1lXCI6IFwiT3V0TXNnVHJhbnNpdFZhcmlhbnRcIiB9LCB7IFwibmFtZVwiOiBcIk91dE1zZ0RlcXVldWVWYXJpYW50XCIgfSwgeyBcIm5hbWVcIjogXCJPdXRNc2dUcmFuc2l0UmVxdWlyZWRWYXJpYW50XCIgfV1cbiAgICAgICAgICAgIH0sIHtcbiAgICAgICAgICAgICAgICBcImtpbmRcIjogXCJVTklPTlwiLFxuICAgICAgICAgICAgICAgIFwibmFtZVwiOiBcIkFjY291bnRTdG9yYWdlU3RhdGVcIixcbiAgICAgICAgICAgICAgICBcInBvc3NpYmxlVHlwZXNcIjogW3sgXCJuYW1lXCI6IFwiQWNjb3VudFN0b3JhZ2VTdGF0ZUFjY291bnRVbmluaXRWYXJpYW50XCIgfSwgeyBcIm5hbWVcIjogXCJBY2NvdW50U3RvcmFnZVN0YXRlQWNjb3VudEFjdGl2ZVZhcmlhbnRcIiB9LCB7IFwibmFtZVwiOiBcIkFjY291bnRTdG9yYWdlU3RhdGVBY2NvdW50RnJvemVuVmFyaWFudFwiIH1dXG4gICAgICAgICAgICB9LCB7XG4gICAgICAgICAgICAgICAgXCJraW5kXCI6IFwiVU5JT05cIixcbiAgICAgICAgICAgICAgICBcIm5hbWVcIjogXCJUcmFuc2FjdGlvbkRlc2NyaXB0aW9uXCIsXG4gICAgICAgICAgICAgICAgXCJwb3NzaWJsZVR5cGVzXCI6IFt7IFwibmFtZVwiOiBcIlRyYW5zYWN0aW9uRGVzY3JpcHRpb25PcmRpbmFyeVZhcmlhbnRcIiB9LCB7IFwibmFtZVwiOiBcIlRyYW5zYWN0aW9uRGVzY3JpcHRpb25TdG9yYWdlVmFyaWFudFwiIH0sIHsgXCJuYW1lXCI6IFwiVHJhbnNhY3Rpb25EZXNjcmlwdGlvblRpY2tUb2NrVmFyaWFudFwiIH0sIHsgXCJuYW1lXCI6IFwiVHJhbnNhY3Rpb25EZXNjcmlwdGlvblNwbGl0UHJlcGFyZVZhcmlhbnRcIiB9LCB7IFwibmFtZVwiOiBcIlRyYW5zYWN0aW9uRGVzY3JpcHRpb25TcGxpdEluc3RhbGxWYXJpYW50XCIgfSwgeyBcIm5hbWVcIjogXCJUcmFuc2FjdGlvbkRlc2NyaXB0aW9uTWVyZ2VQcmVwYXJlVmFyaWFudFwiIH0sIHsgXCJuYW1lXCI6IFwiVHJhbnNhY3Rpb25EZXNjcmlwdGlvbk1lcmdlSW5zdGFsbFZhcmlhbnRcIiB9XVxuICAgICAgICAgICAgfSwge1xuICAgICAgICAgICAgICAgIFwia2luZFwiOiBcIlVOSU9OXCIsXG4gICAgICAgICAgICAgICAgXCJuYW1lXCI6IFwiVHJDb21wdXRlUGhhc2VcIixcbiAgICAgICAgICAgICAgICBcInBvc3NpYmxlVHlwZXNcIjogW3sgXCJuYW1lXCI6IFwiVHJDb21wdXRlUGhhc2VTa2lwcGVkVmFyaWFudFwiIH0sIHsgXCJuYW1lXCI6IFwiVHJDb21wdXRlUGhhc2VWbVZhcmlhbnRcIiB9XVxuICAgICAgICAgICAgfSwge1xuICAgICAgICAgICAgICAgIFwia2luZFwiOiBcIlVOSU9OXCIsXG4gICAgICAgICAgICAgICAgXCJuYW1lXCI6IFwiVHJCb3VuY2VQaGFzZVwiLFxuICAgICAgICAgICAgICAgIFwicG9zc2libGVUeXBlc1wiOiBbeyBcIm5hbWVcIjogXCJUckJvdW5jZVBoYXNlTmVnZnVuZHNWYXJpYW50XCIgfSwgeyBcIm5hbWVcIjogXCJUckJvdW5jZVBoYXNlTm9mdW5kc1ZhcmlhbnRcIiB9LCB7IFwibmFtZVwiOiBcIlRyQm91bmNlUGhhc2VPa1ZhcmlhbnRcIiB9XVxuICAgICAgICAgICAgfV1cbiAgICAgICAgfVxuICAgIH1cbn07XG5cbmV4cG9ydCBkZWZhdWx0IGNsYXNzIFRPTlF1ZXJpZXNNb2R1bGUgZXh0ZW5kcyBUT05Nb2R1bGUge1xuICAgIGNvbmZpZzogVE9OQ29uZmlnTW9kdWxlO1xuXG4gICAgY29uc3RydWN0b3IoY29udGV4dDogVE9OTW9kdWxlQ29udGV4dCkge1xuICAgICAgICBzdXBlcihjb250ZXh0KTtcbiAgICAgICAgdGhpcy5fY2xpZW50ID0gbnVsbDtcbiAgICB9XG5cbiAgICBhc3luYyBzZXR1cCgpIHtcbiAgICAgICAgdGhpcy5jb25maWcgPSB0aGlzLmNvbnRleHQuZ2V0TW9kdWxlKFRPTkNvbmZpZ01vZHVsZSk7XG4gICAgICAgIHRoaXMudHJhbnNhY3Rpb25zID0gbmV3IFRPTlFDb2xsZWN0aW9uKHRoaXMsICd0cmFuc2FjdGlvbnMnKTtcbiAgICAgICAgdGhpcy5tZXNzYWdlcyA9IG5ldyBUT05RQ29sbGVjdGlvbih0aGlzLCAnbWVzc2FnZXMnKTtcbiAgICAgICAgdGhpcy5ibG9ja3MgPSBuZXcgVE9OUUNvbGxlY3Rpb24odGhpcywgJ2Jsb2NrcycpO1xuICAgICAgICB0aGlzLmFjY291bnRzID0gbmV3IFRPTlFDb2xsZWN0aW9uKHRoaXMsICdhY2NvdW50cycpO1xuICAgIH1cblxuICAgIGVuc3VyZUNsaWVudCgpOiBBcG9sbG9DbGllbnQge1xuICAgICAgICBpZiAodGhpcy5fY2xpZW50KSB7XG4gICAgICAgICAgICByZXR1cm4gdGhpcy5fY2xpZW50O1xuICAgICAgICB9XG4gICAgICAgIGNvbnN0IGNvbmZpZyA9IHRoaXMuY29uZmlnO1xuICAgICAgICBjb25zdCBjb25maWdEYXRhID0gY29uZmlnLmRhdGE7XG4gICAgICAgIGNvbnN0IHsgY2xpZW50UGxhdGZvcm0gfSA9IFRPTkNsaWVudDtcbiAgICAgICAgaWYgKCFjb25maWdEYXRhIHx8ICFjbGllbnRQbGF0Zm9ybSkge1xuICAgICAgICAgICAgdGhyb3cgRXJyb3IoJ1RPTiBDbGllbnQgZG9lcyBub3QgY29uZmlndXJlZCcpO1xuICAgICAgICB9XG4gICAgICAgIGNvbnN0IGZyYWdtZW50TWF0Y2hlciA9IG5ldyBJbnRyb3NwZWN0aW9uRnJhZ21lbnRNYXRjaGVyKHtcbiAgICAgICAgICAgIGludHJvc3BlY3Rpb25RdWVyeVJlc3VsdERhdGE6IHVuaW9uc1NjaGVtZS5kYXRhXG4gICAgICAgIH0pO1xuXG4gICAgICAgIGNvbnN0IGNhY2hlID0gbmV3IEluTWVtb3J5Q2FjaGUoeyBmcmFnbWVudE1hdGNoZXIgfSk7XG5cbiAgICAgICAgY29uc3QgaHR0cExpbmsgPSBuZXcgSHR0cExpbmsoe1xuICAgICAgICAgICAgdXJpOiBjb25maWcucXVlcmllc0h0dHBVcmwoKSxcbiAgICAgICAgICAgIGZldGNoOiBjbGllbnRQbGF0Zm9ybS5mZXRjaCxcbiAgICAgICAgfSk7XG5cbiAgICAgICAgY29uc3Qgc3Vic2NyaXB0aW9uQ2xpZW50ID0gbmV3IFN1YnNjcmlwdGlvbkNsaWVudChjb25maWcucXVlcmllc1dzVXJsKCksIHtcbiAgICAgICAgICAgIHJlY29ubmVjdDogdHJ1ZSxcbiAgICAgICAgfSwgY2xpZW50UGxhdGZvcm0uV2ViU29ja2V0KTtcblxuICAgICAgICBjb25zdCB3c0xpbmsgPSBuZXcgV2ViU29ja2V0TGluayhzdWJzY3JpcHRpb25DbGllbnQpO1xuXG4gICAgICAgIGNvbnN0IGxpbmsgPSBzcGxpdChcbiAgICAgICAgICAgICh7IHF1ZXJ5IH0pID0+IHtcbiAgICAgICAgICAgICAgICBjb25zdCBkZWZpbml0aW9uID0gZ2V0TWFpbkRlZmluaXRpb24ocXVlcnkpO1xuICAgICAgICAgICAgICAgIHJldHVybiAoXG4gICAgICAgICAgICAgICAgICAgIGRlZmluaXRpb24ua2luZCA9PT0gJ09wZXJhdGlvbkRlZmluaXRpb24nXG4gICAgICAgICAgICAgICAgICAgICYmIGRlZmluaXRpb24ub3BlcmF0aW9uID09PSAnc3Vic2NyaXB0aW9uJ1xuICAgICAgICAgICAgICAgICk7XG4gICAgICAgICAgICB9LFxuICAgICAgICAgICAgd3NMaW5rLFxuICAgICAgICAgICAgaHR0cExpbmssXG4gICAgICAgICk7XG5cblxuICAgICAgICBjb25zdCBkZWZhdWx0T3B0aW9ucyA9IHtcbiAgICAgICAgICAgIHdhdGNoUXVlcnk6IHtcbiAgICAgICAgICAgICAgICBmZXRjaFBvbGljeTogJ25vLWNhY2hlJyxcbiAgICAgICAgICAgIH0sXG4gICAgICAgICAgICBxdWVyeToge1xuICAgICAgICAgICAgICAgIGZldGNoUG9saWN5OiAnbm8tY2FjaGUnLFxuICAgICAgICAgICAgfSxcbiAgICAgICAgfTtcblxuXG4gICAgICAgIHRoaXMuX2NsaWVudCA9IG5ldyBBcG9sbG9DbGllbnQoe1xuICAgICAgICAgICAgY2FjaGUsXG4gICAgICAgICAgICBsaW5rLFxuICAgICAgICAgICAgZGVmYXVsdE9wdGlvbnMsXG4gICAgICAgIH0pO1xuICAgICAgICByZXR1cm4gdGhpcy5fY2xpZW50O1xuICAgIH1cblxuICAgIGFzeW5jIGNsb3NlKCkge1xuICAgICAgICBpZiAodGhpcy5fY2xpZW50KSB7XG4gICAgICAgICAgICBjb25zdCBjbGllbnQgPSB0aGlzLl9jbGllbnQ7XG4gICAgICAgICAgICB0aGlzLl9jbGllbnQgPSBudWxsO1xuICAgICAgICAgICAgY2xpZW50LnN0b3AoKTtcbiAgICAgICAgICAgIGF3YWl0IGNsaWVudC5jbGVhclN0b3JlKCk7XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICBhc3luYyBzZWxlY3QocXVlcnk6IHN0cmluZywgYmluZFZhcnM6IHt9KSB7XG4gICAgICAgIGNvbnN0IGdxbFF1ZXJ5ID0gZ3FsKFtgcXVlcnkgc2VsZWN0KCRxdWVyeTogU3RyaW5nISwgJGJpbmRWYXJzSnNvbjogU3RyaW5nISkge1xuICAgICAgICAgICAgc2VsZWN0KHF1ZXJ5OiAkcXVlcnksIGJpbmRWYXJzSnNvbjogJGJpbmRWYXJzSnNvbilcbiAgICAgICAgfWBdKTtcbiAgICAgICAgY29uc3QgY2xpZW50ID0gdGhpcy5lbnN1cmVDbGllbnQoKTtcbiAgICAgICAgcmV0dXJuIEpTT04ucGFyc2UoKGF3YWl0IGNsaWVudC5xdWVyeSh7XG4gICAgICAgICAgICBxdWVyeTogZ3FsUXVlcnksXG4gICAgICAgICAgICB2YXJpYWJsZXM6IHtcbiAgICAgICAgICAgICAgICBxdWVyeSxcbiAgICAgICAgICAgICAgICBiaW5kVmFyc0pzb246IEpTT04uc3RyaW5naWZ5KGJpbmRWYXJzKSxcbiAgICAgICAgICAgIH0sXG4gICAgICAgIH0pKS5kYXRhLnNlbGVjdCk7XG4gICAgfVxuXG4gICAgdHJhbnNhY3Rpb25zOiBUT05RQ29sbGVjdGlvbjtcblxuICAgIG1lc3NhZ2VzOiBUT05RQ29sbGVjdGlvbjtcblxuICAgIGJsb2NrczogVE9OUUNvbGxlY3Rpb247XG5cbiAgICBhY2NvdW50czogVE9OUUNvbGxlY3Rpb247XG5cbiAgICBfY2xpZW50OiBBcG9sbG9DbGllbnQ7XG59XG5cblxudHlwZSBEb2NFdmVudCA9IChjaGFuZ2VUeXBlOiBzdHJpbmcsIGRvYzogYW55KSA9PiB2b2lkO1xuXG50eXBlIE9yZGVyQnkgPSB7XG4gICAgcGF0aDogc3RyaW5nLFxuICAgIHNvcnQ6ICdBU0MnIHwgJ0RFU0MnXG59XG5cbmNsYXNzIFRPTlFDb2xsZWN0aW9uIHtcbiAgICBtb2R1bGU6IFRPTlF1ZXJpZXNNb2R1bGU7XG5cbiAgICBjb2xsZWN0aW9uTmFtZTogc3RyaW5nO1xuICAgIHR5cGVOYW1lOiBzdHJpbmc7XG5cbiAgICBjb25zdHJ1Y3Rvcihtb2R1bGU6IFRPTlF1ZXJpZXNNb2R1bGUsIGNvbGxlY3Rpb25OYW1lOiBzdHJpbmcpIHtcbiAgICAgICAgdGhpcy5tb2R1bGUgPSBtb2R1bGU7XG4gICAgICAgIHRoaXMuY29sbGVjdGlvbk5hbWUgPSBjb2xsZWN0aW9uTmFtZTtcbiAgICAgICAgdGhpcy50eXBlTmFtZSA9IGNvbGxlY3Rpb25OYW1lLnN1YnN0cigwLCAxKS50b1VwcGVyQ2FzZSgpICtcbiAgICAgICAgICAgIGNvbGxlY3Rpb25OYW1lLnN1YnN0cigxLCBjb2xsZWN0aW9uTmFtZS5sZW5ndGggLSAyKTtcbiAgICB9XG5cblxuICAgIGFzeW5jIHF1ZXJ5KGZpbHRlcjogYW55LCByZXN1bHQ6IHN0cmluZywgb3JkZXJCeT86IE9yZGVyQnlbXSwgbGltaXQ/OiBudW1iZXIpOiBQcm9taXNlPGFueT4ge1xuICAgICAgICBjb25zdCBjID0gdGhpcy5jb2xsZWN0aW9uTmFtZTtcbiAgICAgICAgY29uc3QgdCA9IHRoaXMudHlwZU5hbWU7XG4gICAgICAgIGNvbnN0IHFsID0gYHF1ZXJ5ICR7Y30oJGZpbHRlcjogJHt0fUZpbHRlciwgJG9yZGVyQnk6IFtRdWVyeU9yZGVyQnldLCAkbGltaXQ6IEludCkge1xuICAgICAgICAgICAgJHtjfShmaWx0ZXI6ICRmaWx0ZXIsIG9yZGVyQnk6ICRvcmRlckJ5LCBsaW1pdDogJGxpbWl0KSB7ICR7cmVzdWx0fSB9XG4gICAgICAgIH1gO1xuICAgICAgICBjb25zdCBxdWVyeSA9IGdxbChbcWxdKTtcbiAgICAgICAgY29uc3QgY2xpZW50ID0gdGhpcy5tb2R1bGUuZW5zdXJlQ2xpZW50KCk7XG4gICAgICAgIHRyeSB7XG4gICAgICAgICAgICByZXR1cm4gKGF3YWl0IGNsaWVudC5xdWVyeSh7XG4gICAgICAgICAgICAgICAgcXVlcnksXG4gICAgICAgICAgICAgICAgdmFyaWFibGVzOiB7XG4gICAgICAgICAgICAgICAgICAgIGZpbHRlcixcbiAgICAgICAgICAgICAgICAgICAgb3JkZXJCeSxcbiAgICAgICAgICAgICAgICAgICAgbGltaXRcbiAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgfSkpLmRhdGFbY107XG4gICAgICAgIH0gY2F0Y2ggKGVycm9yKSB7XG4gICAgICAgICAgICBjb25zdCBlcnJvcnMgPSBlcnJvciAmJiBlcnJvci5uZXR3b3JrRXJyb3IgJiYgZXJyb3IubmV0d29ya0Vycm9yLnJlc3VsdCAmJiBlcnJvci5uZXR3b3JrRXJyb3IucmVzdWx0LmVycm9ycztcbiAgICAgICAgICAgIGlmIChlcnJvcnMpIHtcbiAgICAgICAgICAgICAgICB0aHJvdyBUT05DbGllbnRFcnJvci5xdWVyeUZhaWxlZChlcnJvcnMpO1xuICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgICB0aHJvdyBlcnJvcjtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgIH1cblxuXG4gICAgc3Vic2NyaWJlKGZpbHRlcjogYW55LCByZXN1bHQ6IHN0cmluZywgb25Eb2NFdmVudDogRG9jRXZlbnQpOiBTdWJzY3JpcHRpb24ge1xuICAgICAgICBjb25zdCB0ZXh0ID0gYHN1YnNjcmlwdGlvbiAke3RoaXMuY29sbGVjdGlvbk5hbWV9KCRmaWx0ZXI6ICR7dGhpcy50eXBlTmFtZX1GaWx0ZXIpIHtcbiAgICAgICAgXHQke3RoaXMuY29sbGVjdGlvbk5hbWV9KGZpbHRlcjogJGZpbHRlcikgeyAke3Jlc3VsdH0gfVxuICAgICAgICB9YDtcbiAgICAgICAgY29uc3QgcXVlcnkgPSBncWwoW3RleHRdKTtcbiAgICAgICAgY29uc3QgY2xpZW50ID0gdGhpcy5tb2R1bGUuZW5zdXJlQ2xpZW50KCk7XG4gICAgICAgIGNvbnN0IG9ic2VydmFibGUgPSBjbGllbnQuc3Vic2NyaWJlKHtcbiAgICAgICAgICAgIHF1ZXJ5LFxuICAgICAgICAgICAgdmFyaWFibGVzOiB7XG4gICAgICAgICAgICAgICAgZmlsdGVyLFxuICAgICAgICAgICAgfSxcbiAgICAgICAgfSk7XG4gICAgICAgIGNvbnN0IHN1YnNjcmlwdGlvbiA9IG9ic2VydmFibGUuc3Vic2NyaWJlKChtZXNzYWdlKSA9PiB7XG4gICAgICAgICAgICBvbkRvY0V2ZW50KCdpbnNlcnQvdXBkYXRlJywgbWVzc2FnZS5kYXRhW3RoaXMuY29sbGVjdGlvbk5hbWVdKTtcbiAgICAgICAgfSk7XG4gICAgICAgIHJldHVybiB7XG4gICAgICAgICAgICB1bnN1YnNjcmliZTogKCkgPT4ge1xuICAgICAgICAgICAgICAgIHN1YnNjcmlwdGlvbi51bnN1YnNjcmliZSgpO1xuICAgICAgICAgICAgfSxcbiAgICAgICAgfTtcbiAgICB9XG5cbiAgICBhc3luYyB3YWl0Rm9yKGZpbHRlcjogYW55LCByZXN1bHQ6IHN0cmluZywgdGltZW91dD86IG51bWJlcik6IFByb21pc2U8YW55PiB7XG4gICAgICAgIGNvbnN0IGNvbmZpZyA9IHRoaXMubW9kdWxlLmNvbmZpZztcbiAgICAgICAgY29uc3QgZXhpc3RpbmcgPSBhd2FpdCB0aGlzLnF1ZXJ5KGZpbHRlciwgcmVzdWx0KTtcbiAgICAgICAgaWYgKGV4aXN0aW5nLmxlbmd0aCA+IDApIHtcbiAgICAgICAgICAgIHJldHVybiBleGlzdGluZ1swXTtcbiAgICAgICAgfVxuICAgICAgICByZXR1cm4gbmV3IFByb21pc2UoKHJlc29sdmUsIHJlamVjdCkgPT4ge1xuICAgICAgICAgICAgY29uc3QgZm9yY2VDaGVja1RpbWVvdXQgPSAxMF8wMDA7XG4gICAgICAgICAgICBsZXQgc3Vic2NyaXB0aW9uOiBhbnkgPSBudWxsO1xuICAgICAgICAgICAgbGV0IHJlc29sdmVkOiBib29sZWFuID0gZmFsc2U7XG5cbiAgICAgICAgICAgIGNvbnN0IGRvUmVzb2x2ZSA9IChkb2MpID0+IHtcbiAgICAgICAgICAgICAgICBpZiAocmVzb2x2ZWQpIHtcbiAgICAgICAgICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICByZXNvbHZlZCA9IHRydWU7XG4gICAgICAgICAgICAgICAgaWYgKHN1YnNjcmlwdGlvbikge1xuICAgICAgICAgICAgICAgICAgICBzdWJzY3JpcHRpb24udW5zdWJzY3JpYmUoKTtcbiAgICAgICAgICAgICAgICAgICAgc3Vic2NyaXB0aW9uID0gbnVsbDtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgaWYgKGRvYyAhPT0gbnVsbCkge1xuICAgICAgICAgICAgICAgICAgICByZXNvbHZlKGRvYyk7XG4gICAgICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgICAgICAgcmVqZWN0KFRPTkNsaWVudEVycm9yLndhaXRGb3JUaW1lb3V0KCkpXG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfTtcblxuICAgICAgICAgICAgY29uc3QgZm9yY2VDaGVjayA9ICgpID0+IHtcbiAgICAgICAgICAgICAgICAoYXN5bmMgKCkgPT4ge1xuICAgICAgICAgICAgICAgICAgICBpZiAocmVzb2x2ZWQpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICBjb25maWcubG9nKCd3YWl0Rm9yLmZvcmNlQ2hlY2snLCB0aGlzLmNvbGxlY3Rpb25OYW1lLCBmaWx0ZXIpO1xuICAgICAgICAgICAgICAgICAgICBjb25zdCBleGlzdGluZyA9IGF3YWl0IHRoaXMucXVlcnkoZmlsdGVyLCByZXN1bHQpO1xuICAgICAgICAgICAgICAgICAgICBpZiAoZXhpc3RpbmcubGVuZ3RoID4gMCkge1xuICAgICAgICAgICAgICAgICAgICAgICAgZG9SZXNvbHZlKGV4aXN0aW5nWzBdKTtcbiAgICAgICAgICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIHNldFRpbWVvdXQoZm9yY2VDaGVjaywgZm9yY2VDaGVja1RpbWVvdXQpO1xuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgfSkoKTtcbiAgICAgICAgICAgIH07XG5cbiAgICAgICAgICAgIGNvbnN0IHJlamVjdE9uVGltZW91dCA9ICgpID0+IHtcbiAgICAgICAgICAgICAgICBpZiAoIXJlc29sdmVkKSB7XG4gICAgICAgICAgICAgICAgICAgIGNvbmZpZy5sb2coJ3dhaXRGb3IgcmVqZWN0ZWQgb24gdGltZW91dCcsIHRoaXMuY29sbGVjdGlvbk5hbWUsIGZpbHRlcik7XG4gICAgICAgICAgICAgICAgICAgIGRvUmVzb2x2ZShudWxsKTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9O1xuXG4gICAgICAgICAgICBzdWJzY3JpcHRpb24gPSB0aGlzLnN1YnNjcmliZShmaWx0ZXIsIHJlc3VsdCwgKGNoYW5nZSwgZG9jKSA9PiB7XG4gICAgICAgICAgICAgICAgZG9SZXNvbHZlKGRvYyk7XG4gICAgICAgICAgICB9KTtcbiAgICAgICAgICAgIHNldFRpbWVvdXQoZm9yY2VDaGVjaywgZm9yY2VDaGVja1RpbWVvdXQpO1xuICAgICAgICAgICAgaWYgKHRpbWVvdXQpIHtcbiAgICAgICAgICAgICAgICBzZXRUaW1lb3V0KHJlamVjdE9uVGltZW91dCwgdGltZW91dCk7XG4gICAgICAgICAgICB9XG4gICAgICAgIH0pO1xuICAgIH1cbn1cblxuVE9OUXVlcmllc01vZHVsZS5tb2R1bGVOYW1lID0gJ1RPTlF1ZXJpZXNNb2R1bGUnO1xuIl19