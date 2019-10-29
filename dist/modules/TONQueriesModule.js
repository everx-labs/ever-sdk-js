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
        throw Error('TON SDK does not configured');
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
      var wsLink = new _apolloLinkWs.WebSocketLink({
        uri: config.queriesWsUrl(),
        options: {
          reconnect: true
        },
        webSocketImpl: clientPlatform.WebSocket
      });
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
        var c, t, ql, query, client;
        return _regenerator["default"].wrap(function _callee4$(_context4) {
          while (1) {
            switch (_context4.prev = _context4.next) {
              case 0:
                c = this.collectionName;
                t = this.typeName;
                ql = "query ".concat(c, "($filter: ").concat(t, "Filter, $orderBy: [QueryOrderBy], $limit: Int) {\n            ").concat(c, "(filter: $filter, orderBy: $orderBy, limit: $limit) { ").concat(result, " }\n        }");
                query = (0, _graphqlTag["default"])([ql]);
                client = this.module.ensureClient();
                _context4.next = 7;
                return client.query({
                  query: query,
                  variables: {
                    filter: filter,
                    orderBy: orderBy,
                    limit: limit
                  }
                });

              case 7:
                _context4.t0 = c;
                return _context4.abrupt("return", _context4.sent.data[_context4.t0]);

              case 9:
              case "end":
                return _context4.stop();
            }
          }
        }, _callee4, this);
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
      var subscription = observable.subscribe({
        next: function next(message) {
          onDocEvent('insert/update', message.data[_this2.collectionName]);
        }
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy9tb2R1bGVzL1RPTlF1ZXJpZXNNb2R1bGUuanMiXSwibmFtZXMiOlsidW5pb25zU2NoZW1lIiwiVE9OUXVlcmllc01vZHVsZSIsImNvbnRleHQiLCJfY2xpZW50IiwiY29uZmlnIiwiZ2V0TW9kdWxlIiwiVE9OQ29uZmlnTW9kdWxlIiwidHJhbnNhY3Rpb25zIiwiVE9OUUNvbGxlY3Rpb24iLCJtZXNzYWdlcyIsImJsb2NrcyIsImFjY291bnRzIiwiY29uZmlnRGF0YSIsImRhdGEiLCJjbGllbnRQbGF0Zm9ybSIsIlRPTkNsaWVudCIsIkVycm9yIiwiZnJhZ21lbnRNYXRjaGVyIiwiSW50cm9zcGVjdGlvbkZyYWdtZW50TWF0Y2hlciIsImludHJvc3BlY3Rpb25RdWVyeVJlc3VsdERhdGEiLCJjYWNoZSIsIkluTWVtb3J5Q2FjaGUiLCJodHRwTGluayIsIkh0dHBMaW5rIiwidXJpIiwicXVlcmllc0h0dHBVcmwiLCJmZXRjaCIsIndzTGluayIsIldlYlNvY2tldExpbmsiLCJxdWVyaWVzV3NVcmwiLCJvcHRpb25zIiwicmVjb25uZWN0Iiwid2ViU29ja2V0SW1wbCIsIldlYlNvY2tldCIsImxpbmsiLCJxdWVyeSIsImRlZmluaXRpb24iLCJraW5kIiwib3BlcmF0aW9uIiwiZGVmYXVsdE9wdGlvbnMiLCJ3YXRjaFF1ZXJ5IiwiZmV0Y2hQb2xpY3kiLCJBcG9sbG9DbGllbnQiLCJjbGllbnQiLCJzdG9wIiwiY2xlYXJTdG9yZSIsImJpbmRWYXJzIiwiZ3FsUXVlcnkiLCJlbnN1cmVDbGllbnQiLCJKU09OIiwidmFyaWFibGVzIiwiYmluZFZhcnNKc29uIiwic3RyaW5naWZ5Iiwic2VsZWN0IiwicGFyc2UiLCJUT05Nb2R1bGUiLCJtb2R1bGUiLCJjb2xsZWN0aW9uTmFtZSIsInR5cGVOYW1lIiwic3Vic3RyIiwidG9VcHBlckNhc2UiLCJsZW5ndGgiLCJmaWx0ZXIiLCJyZXN1bHQiLCJvcmRlckJ5IiwibGltaXQiLCJjIiwidCIsInFsIiwib25Eb2NFdmVudCIsInRleHQiLCJvYnNlcnZhYmxlIiwic3Vic2NyaWJlIiwic3Vic2NyaXB0aW9uIiwibmV4dCIsIm1lc3NhZ2UiLCJ1bnN1YnNjcmliZSIsInRpbWVvdXQiLCJleGlzdGluZyIsIlByb21pc2UiLCJyZXNvbHZlIiwicmVqZWN0IiwiZm9yY2VDaGVja1RpbWVvdXQiLCJyZXNvbHZlZCIsImRvUmVzb2x2ZSIsImRvYyIsIlRPTkNsaWVudEVycm9yIiwid2FpdEZvclRpbWVvdXQiLCJmb3JjZUNoZWNrIiwibG9nIiwic2V0VGltZW91dCIsInJlamVjdE9uVGltZW91dCIsImNoYW5nZSIsIm1vZHVsZU5hbWUiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQWtCQTs7QUFDQTs7QUFDQTs7QUFDQTs7QUFDQTs7QUFDQTs7QUFDQTs7QUFDQTs7QUFFQTs7QUFDQTs7QUE1QkE7Ozs7Ozs7Ozs7Ozs7OztBQWtDQSxJQUFNQSxZQUFZLEdBQUc7QUFDakIsVUFBUTtBQUNKLGdCQUFZO0FBQ1IsZUFBUyxDQUFDO0FBQ04sZ0JBQVEsT0FERjtBQUVOLGdCQUFRLGVBRkY7QUFHTix5QkFBaUIsQ0FBQztBQUFFLGtCQUFRO0FBQVYsU0FBRCxFQUErQztBQUFFLGtCQUFRO0FBQVYsU0FBL0MsRUFBK0Y7QUFBRSxrQkFBUTtBQUFWLFNBQS9GO0FBSFgsT0FBRCxFQUlOO0FBQ0MsZ0JBQVEsT0FEVDtBQUVDLGdCQUFRLGVBRlQ7QUFHQyx5QkFBaUIsQ0FBQztBQUFFLGtCQUFRO0FBQVYsU0FBRCxFQUE2QztBQUFFLGtCQUFRO0FBQVYsU0FBN0MsRUFBd0Y7QUFBRSxrQkFBUTtBQUFWLFNBQXhGO0FBSGxCLE9BSk0sRUFRTjtBQUNDLGdCQUFRLE9BRFQ7QUFFQyxnQkFBUSxlQUZUO0FBR0MseUJBQWlCLENBQUM7QUFBRSxrQkFBUTtBQUFWLFNBQUQsRUFBNkM7QUFBRSxrQkFBUTtBQUFWLFNBQTdDO0FBSGxCLE9BUk0sRUFZTjtBQUNDLGdCQUFRLE9BRFQ7QUFFQyxnQkFBUSxP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QUFQLENBQVcsNkJBQVgsRUFBMEMsTUFBSSxDQUFDaEMsY0FBL0MsRUFBK0RLLE1BQS9EO0FBQ0FzQixzQkFBQUEsU0FBUyxDQUFDLElBQUQsQ0FBVDtBQUNIO0FBQ0osbUJBTEQ7O0FBT0FYLGtCQUFBQSxZQUFZLEdBQUcsTUFBSSxDQUFDRCxTQUFMLENBQWVWLE1BQWYsRUFBdUJDLE1BQXZCLEVBQStCLFVBQUM2QixNQUFELEVBQVNQLEdBQVQsRUFBaUI7QUFDM0RELG9CQUFBQSxTQUFTLENBQUNDLEdBQUQsQ0FBVDtBQUNILG1CQUZjLENBQWY7QUFHQUssa0JBQUFBLFVBQVUsQ0FBQ0YsVUFBRCxFQUFhTixpQkFBYixDQUFWOztBQUNBLHNCQUFJTCxPQUFKLEVBQWE7QUFDVGEsb0JBQUFBLFVBQVUsQ0FBQ0MsZUFBRCxFQUFrQmQsT0FBbEIsQ0FBVjtBQUNIO0FBQ0osaUJBbERNLEM7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBc0RmNUUsZ0JBQWdCLENBQUM0RixVQUFqQixHQUE4QixrQkFBOUIiLCJzb3VyY2VzQ29udGVudCI6WyIvKlxuICogQ29weXJpZ2h0IDIwMTgtMjAxOSBUT04gREVWIFNPTFVUSU9OUyBMVEQuXG4gKlxuICogTGljZW5zZWQgdW5kZXIgdGhlIFNPRlRXQVJFIEVWQUxVQVRJT04gTGljZW5zZSAodGhlIFwiTGljZW5zZVwiKTsgeW91IG1heSBub3QgdXNlXG4gKiB0aGlzIGZpbGUgZXhjZXB0IGluIGNvbXBsaWFuY2Ugd2l0aCB0aGUgTGljZW5zZS4gIFlvdSBtYXkgb2J0YWluIGEgY29weSBvZiB0aGVcbiAqIExpY2Vuc2UgYXQ6XG4gKlxuICogaHR0cDovL3d3dy50b24uZGV2L2xpY2Vuc2VzXG4gKlxuICogVW5sZXNzIHJlcXVpcmVkIGJ5IGFwcGxpY2FibGUgbGF3IG9yIGFncmVlZCB0byBpbiB3cml0aW5nLCBzb2Z0d2FyZVxuICogZGlzdHJpYnV0ZWQgdW5kZXIgdGhlIExpY2Vuc2UgaXMgZGlzdHJpYnV0ZWQgb24gYW4gXCJBUyBJU1wiIEJBU0lTLFxuICogV0lUSE9VVCBXQVJSQU5USUVTIE9SIENPTkRJVElPTlMgT0YgQU5ZIEtJTkQsIGVpdGhlciBleHByZXNzIG9yIGltcGxpZWQuXG4gKiBTZWUgdGhlIExpY2Vuc2UgZm9yIHRoZSBzcGVjaWZpYyBUT04gREVWIHNvZnR3YXJlIGdvdmVybmluZyBwZXJtaXNzaW9ucyBhbmRcbiAqIGxpbWl0YXRpb25zIHVuZGVyIHRoZSBMaWNlbnNlLlxuICovXG5cbi8vIEBmbG93XG5cbmltcG9ydCB7IEluTWVtb3J5Q2FjaGUsIEludHJvc3BlY3Rpb25GcmFnbWVudE1hdGNoZXIgfSBmcm9tICdhcG9sbG8tY2FjaGUtaW5tZW1vcnknO1xuaW1wb3J0IHsgQXBvbGxvQ2xpZW50IH0gZnJvbSAnYXBvbGxvLWNsaWVudCc7XG5pbXBvcnQgeyBzcGxpdCB9IGZyb20gJ2Fwb2xsby1saW5rJztcbmltcG9ydCB7IEh0dHBMaW5rIH0gZnJvbSAnYXBvbGxvLWxpbmstaHR0cCc7XG5pbXBvcnQgeyBXZWJTb2NrZXRMaW5rIH0gZnJvbSAnYXBvbGxvLWxpbmstd3MnO1xuaW1wb3J0IHsgZ2V0TWFpbkRlZmluaXRpb24gfSBmcm9tICdhcG9sbG8tdXRpbGl0aWVzJztcbmltcG9ydCBncWwgZnJvbSAnZ3JhcGhxbC10YWcnO1xuaW1wb3J0IHsgVE9OQ2xpZW50LCBUT05DbGllbnRFcnJvciB9IGZyb20gJy4uL1RPTkNsaWVudCc7XG5pbXBvcnQgdHlwZSB7IFRPTk1vZHVsZUNvbnRleHQgfSBmcm9tICcuLi9UT05Nb2R1bGUnO1xuaW1wb3J0IHsgVE9OTW9kdWxlIH0gZnJvbSAnLi4vVE9OTW9kdWxlJztcbmltcG9ydCBUT05Db25maWdNb2R1bGUgZnJvbSAnLi9UT05Db25maWdNb2R1bGUnO1xuXG50eXBlIFN1YnNjcmlwdGlvbiA9IHtcbiAgICB1bnN1YnNjcmliZTogKCkgPT4gdm9pZFxufVxuXG5jb25zdCB1bmlvbnNTY2hlbWUgPSB7XG4gICAgXCJkYXRhXCI6IHtcbiAgICAgICAgXCJfX3NjaGVtYVwiOiB7XG4gICAgICAgICAgICBcInR5cGVzXCI6IFt7XG4gICAgICAgICAgICAgICAgXCJraW5kXCI6IFwiVU5JT05cIixcbiAgICAgICAgICAgICAgICBcIm5hbWVcIjogXCJNZXNzYWdlSGVhZGVyXCIsXG4gICAgICAgICAgICAgICAgXCJwb3NzaWJsZVR5cGVzXCI6IFt7IFwibmFtZVwiOiBcIk1lc3NhZ2VIZWFkZXJJbnRNc2dJbmZvVmFyaWFudFwiIH0sIHsgXCJuYW1lXCI6IFwiTWVzc2FnZUhlYWRlckV4dEluTXNnSW5mb1ZhcmlhbnRcIiB9LCB7IFwibmFtZVwiOiBcIk1lc3NhZ2VIZWFkZXJFeHRPdXRNc2dJbmZvVmFyaWFudFwiIH1dXG4gICAgICAgICAgICB9LCB7XG4gICAgICAgICAgICAgICAgXCJraW5kXCI6IFwiVU5JT05cIixcbiAgICAgICAgICAgICAgICBcIm5hbWVcIjogXCJNc2dBZGRyZXNzSW50XCIsXG4gICAgICAgICAgICAgICAgXCJwb3NzaWJsZVR5cGVzXCI6IFt7IFwibmFtZVwiOiBcIk1zZ0FkZHJlc3NJbnRBZGRyTm9uZVZhcmlhbnRcIiB9LCB7IFwibmFtZVwiOiBcIk1zZ0FkZHJlc3NJbnRBZGRyU3RkVmFyaWFudFwiIH0sIHsgXCJuYW1lXCI6IFwiTXNnQWRkcmVzc0ludEFkZHJWYXJWYXJpYW50XCIgfV1cbiAgICAgICAgICAgIH0sIHtcbiAgICAgICAgICAgICAgICBcImtpbmRcIjogXCJVTklPTlwiLFxuICAgICAgICAgICAgICAgIFwibmFtZVwiOiBcIk1zZ0FkZHJlc3NFeHRcIixcbiAgICAgICAgICAgICAgICBcInBvc3NpYmxlVHlwZXNcIjogW3sgXCJuYW1lXCI6IFwiTXNnQWRkcmVzc0V4dEFkZHJOb25lVmFyaWFudFwiIH0sIHsgXCJuYW1lXCI6IFwiTXNnQWRkcmVzc0V4dEFkZHJFeHRlcm5WYXJpYW50XCIgfV1cbiAgICAgICAgICAgIH0sIHtcbiAgICAgICAgICAgICAgICBcImtpbmRcIjogXCJVTklPTlwiLFxuICAgICAgICAgICAgICAgIFwibmFtZVwiOiBcIkluTXNnXCIsXG4gICAgICAgICAgICAgICAgXCJwb3NzaWJsZVR5cGVzXCI6IFt7IFwibmFtZVwiOiBcIkluTXNnRXh0ZXJuYWxWYXJpYW50XCIgfSwgeyBcIm5hbWVcIjogXCJJbk1zZ0lIUlZhcmlhbnRcIiB9LCB7IFwibmFtZVwiOiBcIkluTXNnSW1tZWRpYXRlbGx5VmFyaWFudFwiIH0sIHsgXCJuYW1lXCI6IFwiSW5Nc2dGaW5hbFZhcmlhbnRcIiB9LCB7IFwibmFtZVwiOiBcIkluTXNnVHJhbnNpdFZhcmlhbnRcIiB9LCB7IFwibmFtZVwiOiBcIkluTXNnRGlzY2FyZGVkRmluYWxWYXJpYW50XCIgfSwgeyBcIm5hbWVcIjogXCJJbk1zZ0Rpc2NhcmRlZFRyYW5zaXRWYXJpYW50XCIgfV1cbiAgICAgICAgICAgIH0sIHtcbiAgICAgICAgICAgICAgICBcImtpbmRcIjogXCJVTklPTlwiLFxuICAgICAgICAgICAgICAgIFwibmFtZVwiOiBcIkludGVybWVkaWF0ZUFkZHJlc3NcIixcbiAgICAgICAgICAgICAgICBcInBvc3NpYmxlVHlwZXNcIjogW3sgXCJuYW1lXCI6IFwiSW50ZXJtZWRpYXRlQWRkcmVzc1JlZ3VsYXJWYXJpYW50XCIgfSwgeyBcIm5hbWVcIjogXCJJbnRlcm1lZGlhdGVBZGRyZXNzU2ltcGxlVmFyaWFudFwiIH0sIHsgXCJuYW1lXCI6IFwiSW50ZXJtZWRpYXRlQWRkcmVzc0V4dFZhcmlhbnRcIiB9XVxuICAgICAgICAgICAgfSwge1xuICAgICAgICAgICAgICAgIFwia2luZFwiOiBcIlVOSU9OXCIsXG4gICAgICAgICAgICAgICAgXCJuYW1lXCI6IFwiT3V0TXNnXCIsXG4gICAgICAgICAgICAgICAgXCJwb3NzaWJsZVR5cGVzXCI6IFt7IFwibmFtZVwiOiBcIk91dE1zZ05vbmVWYXJpYW50XCIgfSwgeyBcIm5hbWVcIjogXCJPdXRNc2dFeHRlcm5hbFZhcmlhbnRcIiB9LCB7IFwibmFtZVwiOiBcIk91dE1zZ0ltbWVkaWF0ZWx5VmFyaWFudFwiIH0sIHsgXCJuYW1lXCI6IFwiT3V0TXNnT3V0TXNnTmV3VmFyaWFudFwiIH0sIHsgXCJuYW1lXCI6IFwiT3V0TXNnVHJhbnNpdFZhcmlhbnRcIiB9LCB7IFwibmFtZVwiOiBcIk91dE1zZ0RlcXVldWVWYXJpYW50XCIgfSwgeyBcIm5hbWVcIjogXCJPdXRNc2dUcmFuc2l0UmVxdWlyZWRWYXJpYW50XCIgfV1cbiAgICAgICAgICAgIH0sIHtcbiAgICAgICAgICAgICAgICBcImtpbmRcIjogXCJVTklPTlwiLFxuICAgICAgICAgICAgICAgIFwibmFtZVwiOiBcIkFjY291bnRTdG9yYWdlU3RhdGVcIixcbiAgICAgICAgICAgICAgICBcInBvc3NpYmxlVHlwZXNcIjogW3sgXCJuYW1lXCI6IFwiQWNjb3VudFN0b3JhZ2VTdGF0ZUFjY291bnRVbmluaXRWYXJpYW50XCIgfSwgeyBcIm5hbWVcIjogXCJBY2NvdW50U3RvcmFnZVN0YXRlQWNjb3VudEFjdGl2ZVZhcmlhbnRcIiB9LCB7IFwibmFtZVwiOiBcIkFjY291bnRTdG9yYWdlU3RhdGVBY2NvdW50RnJvemVuVmFyaWFudFwiIH1dXG4gICAgICAgICAgICB9LCB7XG4gICAgICAgICAgICAgICAgXCJraW5kXCI6IFwiVU5JT05cIixcbiAgICAgICAgICAgICAgICBcIm5hbWVcIjogXCJUcmFuc2FjdGlvbkRlc2NyaXB0aW9uXCIsXG4gICAgICAgICAgICAgICAgXCJwb3NzaWJsZVR5cGVzXCI6IFt7IFwibmFtZVwiOiBcIlRyYW5zYWN0aW9uRGVzY3JpcHRpb25PcmRpbmFyeVZhcmlhbnRcIiB9LCB7IFwibmFtZVwiOiBcIlRyYW5zYWN0aW9uRGVzY3JpcHRpb25TdG9yYWdlVmFyaWFudFwiIH0sIHsgXCJuYW1lXCI6IFwiVHJhbnNhY3Rpb25EZXNjcmlwdGlvblRpY2tUb2NrVmFyaWFudFwiIH0sIHsgXCJuYW1lXCI6IFwiVHJhbnNhY3Rpb25EZXNjcmlwdGlvblNwbGl0UHJlcGFyZVZhcmlhbnRcIiB9LCB7IFwibmFtZVwiOiBcIlRyYW5zYWN0aW9uRGVzY3JpcHRpb25TcGxpdEluc3RhbGxWYXJpYW50XCIgfSwgeyBcIm5hbWVcIjogXCJUcmFuc2FjdGlvbkRlc2NyaXB0aW9uTWVyZ2VQcmVwYXJlVmFyaWFudFwiIH0sIHsgXCJuYW1lXCI6IFwiVHJhbnNhY3Rpb25EZXNjcmlwdGlvbk1lcmdlSW5zdGFsbFZhcmlhbnRcIiB9XVxuICAgICAgICAgICAgfSwge1xuICAgICAgICAgICAgICAgIFwia2luZFwiOiBcIlVOSU9OXCIsXG4gICAgICAgICAgICAgICAgXCJuYW1lXCI6IFwiVHJDb21wdXRlUGhhc2VcIixcbiAgICAgICAgICAgICAgICBcInBvc3NpYmxlVHlwZXNcIjogW3sgXCJuYW1lXCI6IFwiVHJDb21wdXRlUGhhc2VTa2lwcGVkVmFyaWFudFwiIH0sIHsgXCJuYW1lXCI6IFwiVHJDb21wdXRlUGhhc2VWbVZhcmlhbnRcIiB9XVxuICAgICAgICAgICAgfSwge1xuICAgICAgICAgICAgICAgIFwia2luZFwiOiBcIlVOSU9OXCIsXG4gICAgICAgICAgICAgICAgXCJuYW1lXCI6IFwiVHJCb3VuY2VQaGFzZVwiLFxuICAgICAgICAgICAgICAgIFwicG9zc2libGVUeXBlc1wiOiBbeyBcIm5hbWVcIjogXCJUckJvdW5jZVBoYXNlTmVnZnVuZHNWYXJpYW50XCIgfSwgeyBcIm5hbWVcIjogXCJUckJvdW5jZVBoYXNlTm9mdW5kc1ZhcmlhbnRcIiB9LCB7IFwibmFtZVwiOiBcIlRyQm91bmNlUGhhc2VPa1ZhcmlhbnRcIiB9XVxuICAgICAgICAgICAgfV1cbiAgICAgICAgfVxuICAgIH1cbn07XG5cbmV4cG9ydCBkZWZhdWx0IGNsYXNzIFRPTlF1ZXJpZXNNb2R1bGUgZXh0ZW5kcyBUT05Nb2R1bGUge1xuICAgIGNvbmZpZzogVE9OQ29uZmlnTW9kdWxlO1xuXG4gICAgY29uc3RydWN0b3IoY29udGV4dDogVE9OTW9kdWxlQ29udGV4dCkge1xuICAgICAgICBzdXBlcihjb250ZXh0KTtcbiAgICAgICAgdGhpcy5fY2xpZW50ID0gbnVsbDtcbiAgICB9XG5cbiAgICBhc3luYyBzZXR1cCgpIHtcbiAgICAgICAgdGhpcy5jb25maWcgPSB0aGlzLmNvbnRleHQuZ2V0TW9kdWxlKFRPTkNvbmZpZ01vZHVsZSk7XG4gICAgICAgIHRoaXMudHJhbnNhY3Rpb25zID0gbmV3IFRPTlFDb2xsZWN0aW9uKHRoaXMsICd0cmFuc2FjdGlvbnMnKTtcbiAgICAgICAgdGhpcy5tZXNzYWdlcyA9IG5ldyBUT05RQ29sbGVjdGlvbih0aGlzLCAnbWVzc2FnZXMnKTtcbiAgICAgICAgdGhpcy5ibG9ja3MgPSBuZXcgVE9OUUNvbGxlY3Rpb24odGhpcywgJ2Jsb2NrcycpO1xuICAgICAgICB0aGlzLmFjY291bnRzID0gbmV3IFRPTlFDb2xsZWN0aW9uKHRoaXMsICdhY2NvdW50cycpO1xuICAgIH1cblxuICAgIGVuc3VyZUNsaWVudCgpOiBBcG9sbG9DbGllbnQge1xuICAgICAgICBpZiAodGhpcy5fY2xpZW50KSB7XG4gICAgICAgICAgICByZXR1cm4gdGhpcy5fY2xpZW50O1xuICAgICAgICB9XG4gICAgICAgIGNvbnN0IGNvbmZpZyA9IHRoaXMuY29uZmlnO1xuICAgICAgICBjb25zdCBjb25maWdEYXRhID0gY29uZmlnLmRhdGE7XG4gICAgICAgIGNvbnN0IHsgY2xpZW50UGxhdGZvcm0gfSA9IFRPTkNsaWVudDtcbiAgICAgICAgaWYgKCFjb25maWdEYXRhIHx8ICFjbGllbnRQbGF0Zm9ybSkge1xuICAgICAgICAgICAgdGhyb3cgRXJyb3IoJ1RPTiBTREsgZG9lcyBub3QgY29uZmlndXJlZCcpO1xuICAgICAgICB9XG4gICAgICAgIGNvbnN0IGZyYWdtZW50TWF0Y2hlciA9IG5ldyBJbnRyb3NwZWN0aW9uRnJhZ21lbnRNYXRjaGVyKHtcbiAgICAgICAgICAgIGludHJvc3BlY3Rpb25RdWVyeVJlc3VsdERhdGE6IHVuaW9uc1NjaGVtZS5kYXRhXG4gICAgICAgIH0pO1xuXG4gICAgICAgIGNvbnN0IGNhY2hlID0gbmV3IEluTWVtb3J5Q2FjaGUoeyBmcmFnbWVudE1hdGNoZXIgfSk7XG5cbiAgICAgICAgY29uc3QgaHR0cExpbmsgPSBuZXcgSHR0cExpbmsoe1xuICAgICAgICAgICAgdXJpOiBjb25maWcucXVlcmllc0h0dHBVcmwoKSxcbiAgICAgICAgICAgIGZldGNoOiBjbGllbnRQbGF0Zm9ybS5mZXRjaCxcbiAgICAgICAgfSk7XG5cbiAgICAgICAgY29uc3Qgd3NMaW5rID0gbmV3IFdlYlNvY2tldExpbmsoe1xuICAgICAgICAgICAgdXJpOiBjb25maWcucXVlcmllc1dzVXJsKCksXG4gICAgICAgICAgICBvcHRpb25zOiB7XG4gICAgICAgICAgICAgICAgcmVjb25uZWN0OiB0cnVlLFxuICAgICAgICAgICAgfSxcbiAgICAgICAgICAgIHdlYlNvY2tldEltcGw6IGNsaWVudFBsYXRmb3JtLldlYlNvY2tldCxcbiAgICAgICAgfSk7XG5cbiAgICAgICAgY29uc3QgbGluayA9IHNwbGl0KFxuICAgICAgICAgICAgKHsgcXVlcnkgfSkgPT4ge1xuICAgICAgICAgICAgICAgIGNvbnN0IGRlZmluaXRpb24gPSBnZXRNYWluRGVmaW5pdGlvbihxdWVyeSk7XG4gICAgICAgICAgICAgICAgcmV0dXJuIChcbiAgICAgICAgICAgICAgICAgICAgZGVmaW5pdGlvbi5raW5kID09PSAnT3BlcmF0aW9uRGVmaW5pdGlvbidcbiAgICAgICAgICAgICAgICAgICAgJiYgZGVmaW5pdGlvbi5vcGVyYXRpb24gPT09ICdzdWJzY3JpcHRpb24nXG4gICAgICAgICAgICAgICAgKTtcbiAgICAgICAgICAgIH0sXG4gICAgICAgICAgICB3c0xpbmssXG4gICAgICAgICAgICBodHRwTGluayxcbiAgICAgICAgKTtcblxuXG4gICAgICAgIGNvbnN0IGRlZmF1bHRPcHRpb25zID0ge1xuICAgICAgICAgICAgd2F0Y2hRdWVyeToge1xuICAgICAgICAgICAgICAgIGZldGNoUG9saWN5OiAnbm8tY2FjaGUnLFxuICAgICAgICAgICAgfSxcbiAgICAgICAgICAgIHF1ZXJ5OiB7XG4gICAgICAgICAgICAgICAgZmV0Y2hQb2xpY3k6ICduby1jYWNoZScsXG4gICAgICAgICAgICB9LFxuICAgICAgICB9O1xuXG4gICAgICAgIHRoaXMuX2NsaWVudCA9IG5ldyBBcG9sbG9DbGllbnQoe1xuICAgICAgICAgICAgY2FjaGUsXG4gICAgICAgICAgICBsaW5rLFxuICAgICAgICAgICAgZGVmYXVsdE9wdGlvbnMsXG4gICAgICAgIH0pO1xuICAgICAgICByZXR1cm4gdGhpcy5fY2xpZW50O1xuICAgIH1cblxuICAgIGFzeW5jIGNsb3NlKCkge1xuICAgICAgICBpZiAodGhpcy5fY2xpZW50KSB7XG4gICAgICAgICAgICBjb25zdCBjbGllbnQgPSB0aGlzLl9jbGllbnQ7XG4gICAgICAgICAgICB0aGlzLl9jbGllbnQgPSBudWxsO1xuICAgICAgICAgICAgY2xpZW50LnN0b3AoKTtcbiAgICAgICAgICAgIGF3YWl0IGNsaWVudC5jbGVhclN0b3JlKCk7XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICBhc3luYyBzZWxlY3QocXVlcnk6IHN0cmluZywgYmluZFZhcnM6IHt9KSB7XG4gICAgICAgIGNvbnN0IGdxbFF1ZXJ5ID0gZ3FsKFtgcXVlcnkgc2VsZWN0KCRxdWVyeTogU3RyaW5nISwgJGJpbmRWYXJzSnNvbjogU3RyaW5nISkge1xuICAgICAgICAgICAgc2VsZWN0KHF1ZXJ5OiAkcXVlcnksIGJpbmRWYXJzSnNvbjogJGJpbmRWYXJzSnNvbilcbiAgICAgICAgfWBdKTtcbiAgICAgICAgY29uc3QgY2xpZW50ID0gdGhpcy5lbnN1cmVDbGllbnQoKTtcbiAgICAgICAgcmV0dXJuIEpTT04ucGFyc2UoKGF3YWl0IGNsaWVudC5xdWVyeSh7XG4gICAgICAgICAgICBxdWVyeTogZ3FsUXVlcnksXG4gICAgICAgICAgICB2YXJpYWJsZXM6IHtcbiAgICAgICAgICAgICAgICBxdWVyeSxcbiAgICAgICAgICAgICAgICBiaW5kVmFyc0pzb246IEpTT04uc3RyaW5naWZ5KGJpbmRWYXJzKSxcbiAgICAgICAgICAgIH0sXG4gICAgICAgIH0pKS5kYXRhLnNlbGVjdCk7XG4gICAgfVxuXG4gICAgdHJhbnNhY3Rpb25zOiBUT05RQ29sbGVjdGlvbjtcblxuICAgIG1lc3NhZ2VzOiBUT05RQ29sbGVjdGlvbjtcblxuICAgIGJsb2NrczogVE9OUUNvbGxlY3Rpb247XG5cbiAgICBhY2NvdW50czogVE9OUUNvbGxlY3Rpb247XG5cbiAgICBfY2xpZW50OiBBcG9sbG9DbGllbnQ7XG59XG5cblxudHlwZSBEb2NFdmVudCA9IChjaGFuZ2VUeXBlOiBzdHJpbmcsIGRvYzogYW55KSA9PiB2b2lkO1xuXG50eXBlIE9yZGVyQnkgPSB7XG4gICAgcGF0aDogc3RyaW5nLFxuICAgIHNvcnQ6ICdBU0MnIHwgJ0RFU0MnXG59XG5cbmNsYXNzIFRPTlFDb2xsZWN0aW9uIHtcbiAgICBtb2R1bGU6IFRPTlF1ZXJpZXNNb2R1bGU7XG5cbiAgICBjb2xsZWN0aW9uTmFtZTogc3RyaW5nO1xuICAgIHR5cGVOYW1lOiBzdHJpbmc7XG5cbiAgICBjb25zdHJ1Y3Rvcihtb2R1bGU6IFRPTlF1ZXJpZXNNb2R1bGUsIGNvbGxlY3Rpb25OYW1lOiBzdHJpbmcpIHtcbiAgICAgICAgdGhpcy5tb2R1bGUgPSBtb2R1bGU7XG4gICAgICAgIHRoaXMuY29sbGVjdGlvbk5hbWUgPSBjb2xsZWN0aW9uTmFtZTtcbiAgICAgICAgdGhpcy50eXBlTmFtZSA9IGNvbGxlY3Rpb25OYW1lLnN1YnN0cigwLCAxKS50b1VwcGVyQ2FzZSgpICtcbiAgICAgICAgICAgIGNvbGxlY3Rpb25OYW1lLnN1YnN0cigxLCBjb2xsZWN0aW9uTmFtZS5sZW5ndGggLSAyKTtcbiAgICB9XG5cblxuICAgIGFzeW5jIHF1ZXJ5KGZpbHRlcjogYW55LCByZXN1bHQ6IHN0cmluZywgb3JkZXJCeT86IE9yZGVyQnlbXSwgbGltaXQ/OiBudW1iZXIpOiBQcm9taXNlPGFueT4ge1xuICAgICAgICBjb25zdCBjID0gdGhpcy5jb2xsZWN0aW9uTmFtZTtcbiAgICAgICAgY29uc3QgdCA9IHRoaXMudHlwZU5hbWU7XG4gICAgICAgIGNvbnN0IHFsID0gYHF1ZXJ5ICR7Y30oJGZpbHRlcjogJHt0fUZpbHRlciwgJG9yZGVyQnk6IFtRdWVyeU9yZGVyQnldLCAkbGltaXQ6IEludCkge1xuICAgICAgICAgICAgJHtjfShmaWx0ZXI6ICRmaWx0ZXIsIG9yZGVyQnk6ICRvcmRlckJ5LCBsaW1pdDogJGxpbWl0KSB7ICR7cmVzdWx0fSB9XG4gICAgICAgIH1gO1xuICAgICAgICBjb25zdCBxdWVyeSA9IGdxbChbcWxdKTtcbiAgICAgICAgY29uc3QgY2xpZW50ID0gdGhpcy5tb2R1bGUuZW5zdXJlQ2xpZW50KCk7XG4gICAgICAgIHJldHVybiAoYXdhaXQgY2xpZW50LnF1ZXJ5KHtcbiAgICAgICAgICAgIHF1ZXJ5LFxuICAgICAgICAgICAgdmFyaWFibGVzOiB7XG4gICAgICAgICAgICAgICAgZmlsdGVyLFxuICAgICAgICAgICAgICAgIG9yZGVyQnksXG4gICAgICAgICAgICAgICAgbGltaXRcbiAgICAgICAgICAgIH0sXG4gICAgICAgIH0pKS5kYXRhW2NdO1xuICAgIH1cblxuXG4gICAgc3Vic2NyaWJlKGZpbHRlcjogYW55LCByZXN1bHQ6IHN0cmluZywgb25Eb2NFdmVudDogRG9jRXZlbnQpOiBTdWJzY3JpcHRpb24ge1xuICAgICAgICBjb25zdCB0ZXh0ID0gYHN1YnNjcmlwdGlvbiAke3RoaXMuY29sbGVjdGlvbk5hbWV9KCRmaWx0ZXI6ICR7dGhpcy50eXBlTmFtZX1GaWx0ZXIpIHtcbiAgICAgICAgXHQke3RoaXMuY29sbGVjdGlvbk5hbWV9KGZpbHRlcjogJGZpbHRlcikgeyAke3Jlc3VsdH0gfVxuICAgICAgICB9YDtcbiAgICAgICAgY29uc3QgcXVlcnkgPSBncWwoW3RleHRdKTtcbiAgICAgICAgY29uc3QgY2xpZW50ID0gdGhpcy5tb2R1bGUuZW5zdXJlQ2xpZW50KCk7XG4gICAgICAgIGNvbnN0IG9ic2VydmFibGUgPSBjbGllbnQuc3Vic2NyaWJlKHtcbiAgICAgICAgICAgIHF1ZXJ5LFxuICAgICAgICAgICAgdmFyaWFibGVzOiB7XG4gICAgICAgICAgICAgICAgZmlsdGVyLFxuICAgICAgICAgICAgfSxcbiAgICAgICAgfSk7XG4gICAgICAgIGNvbnN0IHN1YnNjcmlwdGlvbiA9IG9ic2VydmFibGUuc3Vic2NyaWJlKHtcbiAgICAgICAgICAgIG5leHQ6IChtZXNzYWdlKSA9PiB7XG4gICAgICAgICAgICAgICAgb25Eb2NFdmVudCgnaW5zZXJ0L3VwZGF0ZScsIG1lc3NhZ2UuZGF0YVt0aGlzLmNvbGxlY3Rpb25OYW1lXSk7XG4gICAgICAgICAgICB9LFxuICAgICAgICB9KTtcbiAgICAgICAgcmV0dXJuIHtcbiAgICAgICAgICAgIHVuc3Vic2NyaWJlOiAoKSA9PiB7XG4gICAgICAgICAgICAgICAgc3Vic2NyaXB0aW9uLnVuc3Vic2NyaWJlKCk7XG4gICAgICAgICAgICB9LFxuICAgICAgICB9O1xuICAgIH1cblxuICAgIGFzeW5jIHdhaXRGb3IoZmlsdGVyOiBhbnksIHJlc3VsdDogc3RyaW5nLCB0aW1lb3V0PzogbnVtYmVyKTogUHJvbWlzZTxhbnk+IHtcbiAgICAgICAgY29uc3QgY29uZmlnID0gdGhpcy5tb2R1bGUuY29uZmlnO1xuICAgICAgICBjb25zdCBleGlzdGluZyA9IGF3YWl0IHRoaXMucXVlcnkoZmlsdGVyLCByZXN1bHQpO1xuICAgICAgICBpZiAoZXhpc3RpbmcubGVuZ3RoID4gMCkge1xuICAgICAgICAgICAgcmV0dXJuIGV4aXN0aW5nWzBdO1xuICAgICAgICB9XG4gICAgICAgIHJldHVybiBuZXcgUHJvbWlzZSgocmVzb2x2ZSwgcmVqZWN0KSA9PiB7XG4gICAgICAgICAgICBjb25zdCBmb3JjZUNoZWNrVGltZW91dCA9IDEwXzAwMDtcbiAgICAgICAgICAgIGxldCBzdWJzY3JpcHRpb246IGFueSA9IG51bGw7XG4gICAgICAgICAgICBsZXQgcmVzb2x2ZWQ6IGJvb2xlYW4gPSBmYWxzZTtcblxuICAgICAgICAgICAgY29uc3QgZG9SZXNvbHZlID0gKGRvYykgPT4ge1xuICAgICAgICAgICAgICAgIGlmIChyZXNvbHZlZCkge1xuICAgICAgICAgICAgICAgICAgICByZXR1cm47XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIHJlc29sdmVkID0gdHJ1ZTtcbiAgICAgICAgICAgICAgICBpZiAoc3Vic2NyaXB0aW9uKSB7XG4gICAgICAgICAgICAgICAgICAgIHN1YnNjcmlwdGlvbi51bnN1YnNjcmliZSgpO1xuICAgICAgICAgICAgICAgICAgICBzdWJzY3JpcHRpb24gPSBudWxsO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICBpZiAoZG9jICE9PSBudWxsKSB7XG4gICAgICAgICAgICAgICAgICAgIHJlc29sdmUoZG9jKTtcbiAgICAgICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAgICAgICByZWplY3QoVE9OQ2xpZW50RXJyb3Iud2FpdEZvclRpbWVvdXQoKSlcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9O1xuXG4gICAgICAgICAgICBjb25zdCBmb3JjZUNoZWNrID0gKCkgPT4ge1xuICAgICAgICAgICAgICAgIChhc3luYyAoKSA9PiB7XG4gICAgICAgICAgICAgICAgICAgIGlmIChyZXNvbHZlZCkge1xuICAgICAgICAgICAgICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgIGNvbmZpZy5sb2coJ3dhaXRGb3IuZm9yY2VDaGVjaycsIHRoaXMuY29sbGVjdGlvbk5hbWUsIGZpbHRlcik7XG4gICAgICAgICAgICAgICAgICAgIGNvbnN0IGV4aXN0aW5nID0gYXdhaXQgdGhpcy5xdWVyeShmaWx0ZXIsIHJlc3VsdCk7XG4gICAgICAgICAgICAgICAgICAgIGlmIChleGlzdGluZy5sZW5ndGggPiAwKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICBkb1Jlc29sdmUoZXhpc3RpbmdbMF0pO1xuICAgICAgICAgICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAgICAgICAgICAgc2V0VGltZW91dChmb3JjZUNoZWNrLCBmb3JjZUNoZWNrVGltZW91dCk7XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICB9KSgpO1xuICAgICAgICAgICAgfTtcblxuICAgICAgICAgICAgY29uc3QgcmVqZWN0T25UaW1lb3V0ID0gKCkgPT4ge1xuICAgICAgICAgICAgICAgIGlmICghcmVzb2x2ZWQpIHtcbiAgICAgICAgICAgICAgICAgICAgY29uZmlnLmxvZygnd2FpdEZvciByZWplY3RlZCBvbiB0aW1lb3V0JywgdGhpcy5jb2xsZWN0aW9uTmFtZSwgZmlsdGVyKTtcbiAgICAgICAgICAgICAgICAgICAgZG9SZXNvbHZlKG51bGwpO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH07XG5cbiAgICAgICAgICAgIHN1YnNjcmlwdGlvbiA9IHRoaXMuc3Vic2NyaWJlKGZpbHRlciwgcmVzdWx0LCAoY2hhbmdlLCBkb2MpID0+IHtcbiAgICAgICAgICAgICAgICBkb1Jlc29sdmUoZG9jKTtcbiAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgc2V0VGltZW91dChmb3JjZUNoZWNrLCBmb3JjZUNoZWNrVGltZW91dCk7XG4gICAgICAgICAgICBpZiAodGltZW91dCkge1xuICAgICAgICAgICAgICAgIHNldFRpbWVvdXQocmVqZWN0T25UaW1lb3V0LCB0aW1lb3V0KTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfSk7XG4gICAgfVxufVxuXG5UT05RdWVyaWVzTW9kdWxlLm1vZHVsZU5hbWUgPSAnVE9OUXVlcmllc01vZHVsZSc7XG4iXX0=