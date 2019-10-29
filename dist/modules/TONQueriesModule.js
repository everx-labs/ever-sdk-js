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
      _regenerator["default"].mark(function _callee6(filter, result) {
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
                return _context6.abrupt("return", new Promise(function (resolve) {
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

                    resolve(doc);
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

                  subscription = _this3.subscribe(filter, result, function (change, doc) {
                    doResolve(doc);
                  });
                  setTimeout(forceCheck, forceCheckTimeout);
                }));

              case 7:
              case "end":
                return _context6.stop();
            }
          }
        }, _callee6, this);
      }));

      function waitFor(_x7, _x8) {
        return _waitFor.apply(this, arguments);
      }

      return waitFor;
    }()
  }]);
  return TONQCollection;
}();

TONQueriesModule.moduleName = 'TONQueriesModule';
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy9tb2R1bGVzL1RPTlF1ZXJpZXNNb2R1bGUuanMiXSwibmFtZXMiOlsidW5pb25zU2NoZW1lIiwiVE9OUXVlcmllc01vZHVsZSIsImNvbnRleHQiLCJfY2xpZW50IiwiY29uZmlnIiwiZ2V0TW9kdWxlIiwiVE9OQ29uZmlnTW9kdWxlIiwidHJhbnNhY3Rpb25zIiwiVE9OUUNvbGxlY3Rpb24iLCJtZXNzYWdlcyIsImJsb2NrcyIsImFjY291bnRzIiwiY29uZmlnRGF0YSIsImRhdGEiLCJjbGllbnRQbGF0Zm9ybSIsIlRPTkNsaWVudCIsIkVycm9yIiwiZnJhZ21lbnRNYXRjaGVyIiwiSW50cm9zcGVjdGlvbkZyYWdtZW50TWF0Y2hlciIsImludHJvc3BlY3Rpb25RdWVyeVJlc3VsdERhdGEiLCJjYWNoZSIsIkluTWVtb3J5Q2FjaGUiLCJodHRwTGluayIsIkh0dHBMaW5rIiwidXJpIiwicXVlcmllc0h0dHBVcmwiLCJmZXRjaCIsIndzTGluayIsIldlYlNvY2tldExpbmsiLCJxdWVyaWVzV3NVcmwiLCJvcHRpb25zIiwicmVjb25uZWN0Iiwid2ViU29ja2V0SW1wbCIsIldlYlNvY2tldCIsImxpbmsiLCJxdWVyeSIsImRlZmluaXRpb24iLCJraW5kIiwib3BlcmF0aW9uIiwiZGVmYXVsdE9wdGlvbnMiLCJ3YXRjaFF1ZXJ5IiwiZmV0Y2hQb2xpY3kiLCJBcG9sbG9DbGllbnQiLCJjbGllbnQiLCJzdG9wIiwiY2xlYXJTdG9yZSIsImJpbmRWYXJzIiwiZ3FsUXVlcnkiLCJlbnN1cmVDbGllbnQiLCJKU09OIiwidmFyaWFibGVzIiwiYmluZFZhcnNKc29uIiwic3RyaW5naWZ5Iiwic2VsZWN0IiwicGFyc2UiLCJUT05Nb2R1bGUiLCJtb2R1bGUiLCJjb2xsZWN0aW9uTmFtZSIsInR5cGVOYW1lIiwic3Vic3RyIiwidG9VcHBlckNhc2UiLCJsZW5ndGgiLCJmaWx0ZXIiLCJyZXN1bHQiLCJvcmRlckJ5IiwibGltaXQiLCJjIiwidCIsInFsIiwib25Eb2NFdmVudCIsInRleHQiLCJvYnNlcnZhYmxlIiwic3Vic2NyaWJlIiwic3Vic2NyaXB0aW9uIiwibmV4dCIsIm1lc3NhZ2UiLCJ1bnN1YnNjcmliZSIsImV4aXN0aW5nIiwiUHJvbWlzZSIsInJlc29sdmUiLCJmb3JjZUNoZWNrVGltZW91dCIsInJlc29sdmVkIiwiZG9SZXNvbHZlIiwiZG9jIiwiZm9yY2VDaGVjayIsImxvZyIsInNldFRpbWVvdXQiLCJjaGFuZ2UiLCJtb2R1bGVOYW1lIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFrQkE7O0FBQ0E7O0FBQ0E7O0FBQ0E7O0FBQ0E7O0FBQ0E7O0FBQ0E7O0FBQ0E7O0FBRUE7O0FBQ0E7O0FBNUJBOzs7Ozs7Ozs7Ozs7Ozs7QUFrQ0EsSUFBTUEsWUFBWSxHQUFHO0FBQ2pCLFVBQVE7QUFDSixnQkFBWTtBQUNSLGVBQVMsQ0FBQztBQUNOLGdCQUFRLE9BREY7QUFFTixnQkFBUSxlQUZGO0FBR04seUJBQWlCLENBQUM7QUFBRSxrQkFBUTtBQUFWLFNBQUQsRUFBK0M7QUFBRSxrQkFBUTtBQUFWLFNBQS9DLEVBQStGO0FBQUUsa0JBQVE7QUFBVixTQUEvRjtBQUhYLE9BQUQsRUFJTjtBQUNDLGdCQUFRLE9BRFQ7QUFFQyxnQkFBUSxlQUZUO0FBR0MseUJBQWlCLENBQUM7QUFBRSxrQkFBUTtBQUFWLFNBQUQsRUFBNkM7QUFBRSxrQkFBUTtBQUFWLFNBQTdDLEVBQXdGO0FBQUUsa0JBQVE7QUFBVixTQUF4RjtBQUhsQixPQUpNLEVBUU47QUFDQyxnQkFBUSxPQURUO0FBRUMsZ0JBQVEsZUFGVDtBQUdDLHlCQUFpQixDQUFDO0FBQUUsa0JBQVE7QUFBVixTQUFELEVBQTZDO0FBQUUsa0JBQVE7QUFBVixTQUE3QztBQUhsQixPQVJNLEVBWU47QUFDQyxnQkFBUSxPQURUO0FBRUMsZ0JBQVEsT0FGVDtBQUdDLHlCQUFpQixDQUFDO0FBQUUsa0JBQVE7QUFBVixTQUFELEVBQXFDO0FBQUUsa0JBQVE7QUFBVixTQUFyQyxF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Ii8qXG4gKiBDb3B5cmlnaHQgMjAxOC0yMDE5IFRPTiBERVYgU09MVVRJT05TIExURC5cbiAqXG4gKiBMaWNlbnNlZCB1bmRlciB0aGUgU09GVFdBUkUgRVZBTFVBVElPTiBMaWNlbnNlICh0aGUgXCJMaWNlbnNlXCIpOyB5b3UgbWF5IG5vdCB1c2VcbiAqIHRoaXMgZmlsZSBleGNlcHQgaW4gY29tcGxpYW5jZSB3aXRoIHRoZSBMaWNlbnNlLiAgWW91IG1heSBvYnRhaW4gYSBjb3B5IG9mIHRoZVxuICogTGljZW5zZSBhdDpcbiAqXG4gKiBodHRwOi8vd3d3LnRvbi5kZXYvbGljZW5zZXNcbiAqXG4gKiBVbmxlc3MgcmVxdWlyZWQgYnkgYXBwbGljYWJsZSBsYXcgb3IgYWdyZWVkIHRvIGluIHdyaXRpbmcsIHNvZnR3YXJlXG4gKiBkaXN0cmlidXRlZCB1bmRlciB0aGUgTGljZW5zZSBpcyBkaXN0cmlidXRlZCBvbiBhbiBcIkFTIElTXCIgQkFTSVMsXG4gKiBXSVRIT1VUIFdBUlJBTlRJRVMgT1IgQ09ORElUSU9OUyBPRiBBTlkgS0lORCwgZWl0aGVyIGV4cHJlc3Mgb3IgaW1wbGllZC5cbiAqIFNlZSB0aGUgTGljZW5zZSBmb3IgdGhlIHNwZWNpZmljIFRPTiBERVYgc29mdHdhcmUgZ292ZXJuaW5nIHBlcm1pc3Npb25zIGFuZFxuICogbGltaXRhdGlvbnMgdW5kZXIgdGhlIExpY2Vuc2UuXG4gKi9cblxuLy8gQGZsb3dcblxuaW1wb3J0IHsgSW5NZW1vcnlDYWNoZSwgSW50cm9zcGVjdGlvbkZyYWdtZW50TWF0Y2hlciB9IGZyb20gJ2Fwb2xsby1jYWNoZS1pbm1lbW9yeSc7XG5pbXBvcnQgeyBBcG9sbG9DbGllbnQgfSBmcm9tICdhcG9sbG8tY2xpZW50JztcbmltcG9ydCB7IHNwbGl0IH0gZnJvbSAnYXBvbGxvLWxpbmsnO1xuaW1wb3J0IHsgSHR0cExpbmsgfSBmcm9tICdhcG9sbG8tbGluay1odHRwJztcbmltcG9ydCB7IFdlYlNvY2tldExpbmsgfSBmcm9tICdhcG9sbG8tbGluay13cyc7XG5pbXBvcnQgeyBnZXRNYWluRGVmaW5pdGlvbiB9IGZyb20gJ2Fwb2xsby11dGlsaXRpZXMnO1xuaW1wb3J0IGdxbCBmcm9tICdncmFwaHFsLXRhZyc7XG5pbXBvcnQgeyBUT05DbGllbnQgfSBmcm9tICcuLi9UT05DbGllbnQnO1xuaW1wb3J0IHR5cGUgeyBUT05Nb2R1bGVDb250ZXh0IH0gZnJvbSAnLi4vVE9OTW9kdWxlJztcbmltcG9ydCB7IFRPTk1vZHVsZSB9IGZyb20gJy4uL1RPTk1vZHVsZSc7XG5pbXBvcnQgVE9OQ29uZmlnTW9kdWxlIGZyb20gJy4vVE9OQ29uZmlnTW9kdWxlJztcblxudHlwZSBTdWJzY3JpcHRpb24gPSB7XG4gICAgdW5zdWJzY3JpYmU6ICgpID0+IHZvaWRcbn1cblxuY29uc3QgdW5pb25zU2NoZW1lID0ge1xuICAgIFwiZGF0YVwiOiB7XG4gICAgICAgIFwiX19zY2hlbWFcIjoge1xuICAgICAgICAgICAgXCJ0eXBlc1wiOiBbe1xuICAgICAgICAgICAgICAgIFwia2luZFwiOiBcIlVOSU9OXCIsXG4gICAgICAgICAgICAgICAgXCJuYW1lXCI6IFwiTWVzc2FnZUhlYWRlclwiLFxuICAgICAgICAgICAgICAgIFwicG9zc2libGVUeXBlc1wiOiBbeyBcIm5hbWVcIjogXCJNZXNzYWdlSGVhZGVySW50TXNnSW5mb1ZhcmlhbnRcIiB9LCB7IFwibmFtZVwiOiBcIk1lc3NhZ2VIZWFkZXJFeHRJbk1zZ0luZm9WYXJpYW50XCIgfSwgeyBcIm5hbWVcIjogXCJNZXNzYWdlSGVhZGVyRXh0T3V0TXNnSW5mb1ZhcmlhbnRcIiB9XVxuICAgICAgICAgICAgfSwge1xuICAgICAgICAgICAgICAgIFwia2luZFwiOiBcIlVOSU9OXCIsXG4gICAgICAgICAgICAgICAgXCJuYW1lXCI6IFwiTXNnQWRkcmVzc0ludFwiLFxuICAgICAgICAgICAgICAgIFwicG9zc2libGVUeXBlc1wiOiBbeyBcIm5hbWVcIjogXCJNc2dBZGRyZXNzSW50QWRkck5vbmVWYXJpYW50XCIgfSwgeyBcIm5hbWVcIjogXCJNc2dBZGRyZXNzSW50QWRkclN0ZFZhcmlhbnRcIiB9LCB7IFwibmFtZVwiOiBcIk1zZ0FkZHJlc3NJbnRBZGRyVmFyVmFyaWFudFwiIH1dXG4gICAgICAgICAgICB9LCB7XG4gICAgICAgICAgICAgICAgXCJraW5kXCI6IFwiVU5JT05cIixcbiAgICAgICAgICAgICAgICBcIm5hbWVcIjogXCJNc2dBZGRyZXNzRXh0XCIsXG4gICAgICAgICAgICAgICAgXCJwb3NzaWJsZVR5cGVzXCI6IFt7IFwibmFtZVwiOiBcIk1zZ0FkZHJlc3NFeHRBZGRyTm9uZVZhcmlhbnRcIiB9LCB7IFwibmFtZVwiOiBcIk1zZ0FkZHJlc3NFeHRBZGRyRXh0ZXJuVmFyaWFudFwiIH1dXG4gICAgICAgICAgICB9LCB7XG4gICAgICAgICAgICAgICAgXCJraW5kXCI6IFwiVU5JT05cIixcbiAgICAgICAgICAgICAgICBcIm5hbWVcIjogXCJJbk1zZ1wiLFxuICAgICAgICAgICAgICAgIFwicG9zc2libGVUeXBlc1wiOiBbeyBcIm5hbWVcIjogXCJJbk1zZ0V4dGVybmFsVmFyaWFudFwiIH0sIHsgXCJuYW1lXCI6IFwiSW5Nc2dJSFJWYXJpYW50XCIgfSwgeyBcIm5hbWVcIjogXCJJbk1zZ0ltbWVkaWF0ZWxseVZhcmlhbnRcIiB9LCB7IFwibmFtZVwiOiBcIkluTXNnRmluYWxWYXJpYW50XCIgfSwgeyBcIm5hbWVcIjogXCJJbk1zZ1RyYW5zaXRWYXJpYW50XCIgfSwgeyBcIm5hbWVcIjogXCJJbk1zZ0Rpc2NhcmRlZEZpbmFsVmFyaWFudFwiIH0sIHsgXCJuYW1lXCI6IFwiSW5Nc2dEaXNjYXJkZWRUcmFuc2l0VmFyaWFudFwiIH1dXG4gICAgICAgICAgICB9LCB7XG4gICAgICAgICAgICAgICAgXCJraW5kXCI6IFwiVU5JT05cIixcbiAgICAgICAgICAgICAgICBcIm5hbWVcIjogXCJJbnRlcm1lZGlhdGVBZGRyZXNzXCIsXG4gICAgICAgICAgICAgICAgXCJwb3NzaWJsZVR5cGVzXCI6IFt7IFwibmFtZVwiOiBcIkludGVybWVkaWF0ZUFkZHJlc3NSZWd1bGFyVmFyaWFudFwiIH0sIHsgXCJuYW1lXCI6IFwiSW50ZXJtZWRpYXRlQWRkcmVzc1NpbXBsZVZhcmlhbnRcIiB9LCB7IFwibmFtZVwiOiBcIkludGVybWVkaWF0ZUFkZHJlc3NFeHRWYXJpYW50XCIgfV1cbiAgICAgICAgICAgIH0sIHtcbiAgICAgICAgICAgICAgICBcImtpbmRcIjogXCJVTklPTlwiLFxuICAgICAgICAgICAgICAgIFwibmFtZVwiOiBcIk91dE1zZ1wiLFxuICAgICAgICAgICAgICAgIFwicG9zc2libGVUeXBlc1wiOiBbeyBcIm5hbWVcIjogXCJPdXRNc2dOb25lVmFyaWFudFwiIH0sIHsgXCJuYW1lXCI6IFwiT3V0TXNnRXh0ZXJuYWxWYXJpYW50XCIgfSwgeyBcIm5hbWVcIjogXCJPdXRNc2dJbW1lZGlhdGVseVZhcmlhbnRcIiB9LCB7IFwibmFtZVwiOiBcIk91dE1zZ091dE1zZ05ld1ZhcmlhbnRcIiB9LCB7IFwibmFtZVwiOiBcIk91dE1zZ1RyYW5zaXRWYXJpYW50XCIgfSwgeyBcIm5hbWVcIjogXCJPdXRNc2dEZXF1ZXVlVmFyaWFudFwiIH0sIHsgXCJuYW1lXCI6IFwiT3V0TXNnVHJhbnNpdFJlcXVpcmVkVmFyaWFudFwiIH1dXG4gICAgICAgICAgICB9LCB7XG4gICAgICAgICAgICAgICAgXCJraW5kXCI6IFwiVU5JT05cIixcbiAgICAgICAgICAgICAgICBcIm5hbWVcIjogXCJBY2NvdW50U3RvcmFnZVN0YXRlXCIsXG4gICAgICAgICAgICAgICAgXCJwb3NzaWJsZVR5cGVzXCI6IFt7IFwibmFtZVwiOiBcIkFjY291bnRTdG9yYWdlU3RhdGVBY2NvdW50VW5pbml0VmFyaWFudFwiIH0sIHsgXCJuYW1lXCI6IFwiQWNjb3VudFN0b3JhZ2VTdGF0ZUFjY291bnRBY3RpdmVWYXJpYW50XCIgfSwgeyBcIm5hbWVcIjogXCJBY2NvdW50U3RvcmFnZVN0YXRlQWNjb3VudEZyb3plblZhcmlhbnRcIiB9XVxuICAgICAgICAgICAgfSwge1xuICAgICAgICAgICAgICAgIFwia2luZFwiOiBcIlVOSU9OXCIsXG4gICAgICAgICAgICAgICAgXCJuYW1lXCI6IFwiVHJhbnNhY3Rpb25EZXNjcmlwdGlvblwiLFxuICAgICAgICAgICAgICAgIFwicG9zc2libGVUeXBlc1wiOiBbeyBcIm5hbWVcIjogXCJUcmFuc2FjdGlvbkRlc2NyaXB0aW9uT3JkaW5hcnlWYXJpYW50XCIgfSwgeyBcIm5hbWVcIjogXCJUcmFuc2FjdGlvbkRlc2NyaXB0aW9uU3RvcmFnZVZhcmlhbnRcIiB9LCB7IFwibmFtZVwiOiBcIlRyYW5zYWN0aW9uRGVzY3JpcHRpb25UaWNrVG9ja1ZhcmlhbnRcIiB9LCB7IFwibmFtZVwiOiBcIlRyYW5zYWN0aW9uRGVzY3JpcHRpb25TcGxpdFByZXBhcmVWYXJpYW50XCIgfSwgeyBcIm5hbWVcIjogXCJUcmFuc2FjdGlvbkRlc2NyaXB0aW9uU3BsaXRJbnN0YWxsVmFyaWFudFwiIH0sIHsgXCJuYW1lXCI6IFwiVHJhbnNhY3Rpb25EZXNjcmlwdGlvbk1lcmdlUHJlcGFyZVZhcmlhbnRcIiB9LCB7IFwibmFtZVwiOiBcIlRyYW5zYWN0aW9uRGVzY3JpcHRpb25NZXJnZUluc3RhbGxWYXJpYW50XCIgfV1cbiAgICAgICAgICAgIH0sIHtcbiAgICAgICAgICAgICAgICBcImtpbmRcIjogXCJVTklPTlwiLFxuICAgICAgICAgICAgICAgIFwibmFtZVwiOiBcIlRyQ29tcHV0ZVBoYXNlXCIsXG4gICAgICAgICAgICAgICAgXCJwb3NzaWJsZVR5cGVzXCI6IFt7IFwibmFtZVwiOiBcIlRyQ29tcHV0ZVBoYXNlU2tpcHBlZFZhcmlhbnRcIiB9LCB7IFwibmFtZVwiOiBcIlRyQ29tcHV0ZVBoYXNlVm1WYXJpYW50XCIgfV1cbiAgICAgICAgICAgIH0sIHtcbiAgICAgICAgICAgICAgICBcImtpbmRcIjogXCJVTklPTlwiLFxuICAgICAgICAgICAgICAgIFwibmFtZVwiOiBcIlRyQm91bmNlUGhhc2VcIixcbiAgICAgICAgICAgICAgICBcInBvc3NpYmxlVHlwZXNcIjogW3sgXCJuYW1lXCI6IFwiVHJCb3VuY2VQaGFzZU5lZ2Z1bmRzVmFyaWFudFwiIH0sIHsgXCJuYW1lXCI6IFwiVHJCb3VuY2VQaGFzZU5vZnVuZHNWYXJpYW50XCIgfSwgeyBcIm5hbWVcIjogXCJUckJvdW5jZVBoYXNlT2tWYXJpYW50XCIgfV1cbiAgICAgICAgICAgIH1dXG4gICAgICAgIH1cbiAgICB9XG59O1xuXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBUT05RdWVyaWVzTW9kdWxlIGV4dGVuZHMgVE9OTW9kdWxlIHtcbiAgICBjb25maWc6IFRPTkNvbmZpZ01vZHVsZTtcblxuICAgIGNvbnN0cnVjdG9yKGNvbnRleHQ6IFRPTk1vZHVsZUNvbnRleHQpIHtcbiAgICAgICAgc3VwZXIoY29udGV4dCk7XG4gICAgICAgIHRoaXMuX2NsaWVudCA9IG51bGw7XG4gICAgfVxuXG4gICAgYXN5bmMgc2V0dXAoKSB7XG4gICAgICAgIHRoaXMuY29uZmlnID0gdGhpcy5jb250ZXh0LmdldE1vZHVsZShUT05Db25maWdNb2R1bGUpO1xuICAgICAgICB0aGlzLnRyYW5zYWN0aW9ucyA9IG5ldyBUT05RQ29sbGVjdGlvbih0aGlzLCAndHJhbnNhY3Rpb25zJyk7XG4gICAgICAgIHRoaXMubWVzc2FnZXMgPSBuZXcgVE9OUUNvbGxlY3Rpb24odGhpcywgJ21lc3NhZ2VzJyk7XG4gICAgICAgIHRoaXMuYmxvY2tzID0gbmV3IFRPTlFDb2xsZWN0aW9uKHRoaXMsICdibG9ja3MnKTtcbiAgICAgICAgdGhpcy5hY2NvdW50cyA9IG5ldyBUT05RQ29sbGVjdGlvbih0aGlzLCAnYWNjb3VudHMnKTtcbiAgICB9XG5cbiAgICBlbnN1cmVDbGllbnQoKTogQXBvbGxvQ2xpZW50IHtcbiAgICAgICAgaWYgKHRoaXMuX2NsaWVudCkge1xuICAgICAgICAgICAgcmV0dXJuIHRoaXMuX2NsaWVudDtcbiAgICAgICAgfVxuICAgICAgICBjb25zdCBjb25maWcgPSB0aGlzLmNvbmZpZztcbiAgICAgICAgY29uc3QgY29uZmlnRGF0YSA9IGNvbmZpZy5kYXRhO1xuICAgICAgICBjb25zdCB7IGNsaWVudFBsYXRmb3JtIH0gPSBUT05DbGllbnQ7XG4gICAgICAgIGlmICghY29uZmlnRGF0YSB8fCAhY2xpZW50UGxhdGZvcm0pIHtcbiAgICAgICAgICAgIHRocm93IEVycm9yKCdUT04gU0RLIGRvZXMgbm90IGNvbmZpZ3VyZWQnKTtcbiAgICAgICAgfVxuICAgICAgICBjb25zdCBmcmFnbWVudE1hdGNoZXIgPSBuZXcgSW50cm9zcGVjdGlvbkZyYWdtZW50TWF0Y2hlcih7XG4gICAgICAgICAgICBpbnRyb3NwZWN0aW9uUXVlcnlSZXN1bHREYXRhOiB1bmlvbnNTY2hlbWUuZGF0YVxuICAgICAgICB9KTtcblxuICAgICAgICBjb25zdCBjYWNoZSA9IG5ldyBJbk1lbW9yeUNhY2hlKHsgZnJhZ21lbnRNYXRjaGVyIH0pO1xuXG4gICAgICAgIGNvbnN0IGh0dHBMaW5rID0gbmV3IEh0dHBMaW5rKHtcbiAgICAgICAgICAgIHVyaTogY29uZmlnLnF1ZXJpZXNIdHRwVXJsKCksXG4gICAgICAgICAgICBmZXRjaDogY2xpZW50UGxhdGZvcm0uZmV0Y2gsXG4gICAgICAgIH0pO1xuXG4gICAgICAgIGNvbnN0IHdzTGluayA9IG5ldyBXZWJTb2NrZXRMaW5rKHtcbiAgICAgICAgICAgIHVyaTogY29uZmlnLnF1ZXJpZXNXc1VybCgpLFxuICAgICAgICAgICAgb3B0aW9uczoge1xuICAgICAgICAgICAgICAgIHJlY29ubmVjdDogdHJ1ZSxcbiAgICAgICAgICAgIH0sXG4gICAgICAgICAgICB3ZWJTb2NrZXRJbXBsOiBjbGllbnRQbGF0Zm9ybS5XZWJTb2NrZXQsXG4gICAgICAgIH0pO1xuXG4gICAgICAgIGNvbnN0IGxpbmsgPSBzcGxpdChcbiAgICAgICAgICAgICh7IHF1ZXJ5IH0pID0+IHtcbiAgICAgICAgICAgICAgICBjb25zdCBkZWZpbml0aW9uID0gZ2V0TWFpbkRlZmluaXRpb24ocXVlcnkpO1xuICAgICAgICAgICAgICAgIHJldHVybiAoXG4gICAgICAgICAgICAgICAgICAgIGRlZmluaXRpb24ua2luZCA9PT0gJ09wZXJhdGlvbkRlZmluaXRpb24nXG4gICAgICAgICAgICAgICAgICAgICYmIGRlZmluaXRpb24ub3BlcmF0aW9uID09PSAnc3Vic2NyaXB0aW9uJ1xuICAgICAgICAgICAgICAgICk7XG4gICAgICAgICAgICB9LFxuICAgICAgICAgICAgd3NMaW5rLFxuICAgICAgICAgICAgaHR0cExpbmssXG4gICAgICAgICk7XG5cblxuICAgICAgICBjb25zdCBkZWZhdWx0T3B0aW9ucyA9IHtcbiAgICAgICAgICAgIHdhdGNoUXVlcnk6IHtcbiAgICAgICAgICAgICAgICBmZXRjaFBvbGljeTogJ25vLWNhY2hlJyxcbiAgICAgICAgICAgIH0sXG4gICAgICAgICAgICBxdWVyeToge1xuICAgICAgICAgICAgICAgIGZldGNoUG9saWN5OiAnbm8tY2FjaGUnLFxuICAgICAgICAgICAgfSxcbiAgICAgICAgfTtcblxuICAgICAgICB0aGlzLl9jbGllbnQgPSBuZXcgQXBvbGxvQ2xpZW50KHtcbiAgICAgICAgICAgIGNhY2hlLFxuICAgICAgICAgICAgbGluayxcbiAgICAgICAgICAgIGRlZmF1bHRPcHRpb25zLFxuICAgICAgICB9KTtcbiAgICAgICAgcmV0dXJuIHRoaXMuX2NsaWVudDtcbiAgICB9XG5cbiAgICBhc3luYyBjbG9zZSgpIHtcbiAgICAgICAgaWYgKHRoaXMuX2NsaWVudCkge1xuICAgICAgICAgICAgY29uc3QgY2xpZW50ID0gdGhpcy5fY2xpZW50O1xuICAgICAgICAgICAgdGhpcy5fY2xpZW50ID0gbnVsbDtcbiAgICAgICAgICAgIGNsaWVudC5zdG9wKCk7XG4gICAgICAgICAgICBhd2FpdCBjbGllbnQuY2xlYXJTdG9yZSgpO1xuICAgICAgICB9XG4gICAgfVxuXG4gICAgYXN5bmMgc2VsZWN0KHF1ZXJ5OiBzdHJpbmcsIGJpbmRWYXJzOiB7fSkge1xuICAgICAgICBjb25zdCBncWxRdWVyeSA9IGdxbChbYHF1ZXJ5IHNlbGVjdCgkcXVlcnk6IFN0cmluZyEsICRiaW5kVmFyc0pzb246IFN0cmluZyEpIHtcbiAgICAgICAgICAgIHNlbGVjdChxdWVyeTogJHF1ZXJ5LCBiaW5kVmFyc0pzb246ICRiaW5kVmFyc0pzb24pXG4gICAgICAgIH1gXSk7XG4gICAgICAgIGNvbnN0IGNsaWVudCA9IHRoaXMuZW5zdXJlQ2xpZW50KCk7XG4gICAgICAgIHJldHVybiBKU09OLnBhcnNlKChhd2FpdCBjbGllbnQucXVlcnkoe1xuICAgICAgICAgICAgcXVlcnk6IGdxbFF1ZXJ5LFxuICAgICAgICAgICAgdmFyaWFibGVzOiB7XG4gICAgICAgICAgICAgICAgcXVlcnksXG4gICAgICAgICAgICAgICAgYmluZFZhcnNKc29uOiBKU09OLnN0cmluZ2lmeShiaW5kVmFycyksXG4gICAgICAgICAgICB9LFxuICAgICAgICB9KSkuZGF0YS5zZWxlY3QpO1xuICAgIH1cblxuICAgIHRyYW5zYWN0aW9uczogVE9OUUNvbGxlY3Rpb247XG5cbiAgICBtZXNzYWdlczogVE9OUUNvbGxlY3Rpb247XG5cbiAgICBibG9ja3M6IFRPTlFDb2xsZWN0aW9uO1xuXG4gICAgYWNjb3VudHM6IFRPTlFDb2xsZWN0aW9uO1xuXG4gICAgX2NsaWVudDogQXBvbGxvQ2xpZW50O1xufVxuXG5cbnR5cGUgRG9jRXZlbnQgPSAoY2hhbmdlVHlwZTogc3RyaW5nLCBkb2M6IGFueSkgPT4gdm9pZDtcblxudHlwZSBPcmRlckJ5ID0ge1xuICAgIHBhdGg6IHN0cmluZyxcbiAgICBzb3J0OiAnQVNDJyB8ICdERVNDJ1xufVxuXG5jbGFzcyBUT05RQ29sbGVjdGlvbiB7XG4gICAgbW9kdWxlOiBUT05RdWVyaWVzTW9kdWxlO1xuXG4gICAgY29sbGVjdGlvbk5hbWU6IHN0cmluZztcbiAgICB0eXBlTmFtZTogc3RyaW5nO1xuXG4gICAgY29uc3RydWN0b3IobW9kdWxlOiBUT05RdWVyaWVzTW9kdWxlLCBjb2xsZWN0aW9uTmFtZTogc3RyaW5nKSB7XG4gICAgICAgIHRoaXMubW9kdWxlID0gbW9kdWxlO1xuICAgICAgICB0aGlzLmNvbGxlY3Rpb25OYW1lID0gY29sbGVjdGlvbk5hbWU7XG4gICAgICAgIHRoaXMudHlwZU5hbWUgPSBjb2xsZWN0aW9uTmFtZS5zdWJzdHIoMCwgMSkudG9VcHBlckNhc2UoKSArXG4gICAgICAgICAgICBjb2xsZWN0aW9uTmFtZS5zdWJzdHIoMSwgY29sbGVjdGlvbk5hbWUubGVuZ3RoIC0gMik7XG4gICAgfVxuXG5cbiAgICBhc3luYyBxdWVyeShmaWx0ZXI6IGFueSwgcmVzdWx0OiBzdHJpbmcsIG9yZGVyQnk/OiBPcmRlckJ5W10sIGxpbWl0PzogbnVtYmVyKTogUHJvbWlzZTxhbnk+IHtcbiAgICAgICAgY29uc3QgYyA9IHRoaXMuY29sbGVjdGlvbk5hbWU7XG4gICAgICAgIGNvbnN0IHQgPSB0aGlzLnR5cGVOYW1lO1xuICAgICAgICBjb25zdCBxbCA9IGBxdWVyeSAke2N9KCRmaWx0ZXI6ICR7dH1GaWx0ZXIsICRvcmRlckJ5OiBbUXVlcnlPcmRlckJ5XSwgJGxpbWl0OiBJbnQpIHtcbiAgICAgICAgICAgICR7Y30oZmlsdGVyOiAkZmlsdGVyLCBvcmRlckJ5OiAkb3JkZXJCeSwgbGltaXQ6ICRsaW1pdCkgeyAke3Jlc3VsdH0gfVxuICAgICAgICB9YDtcbiAgICAgICAgY29uc3QgcXVlcnkgPSBncWwoW3FsXSk7XG4gICAgICAgIGNvbnN0IGNsaWVudCA9IHRoaXMubW9kdWxlLmVuc3VyZUNsaWVudCgpO1xuICAgICAgICByZXR1cm4gKGF3YWl0IGNsaWVudC5xdWVyeSh7XG4gICAgICAgICAgICBxdWVyeSxcbiAgICAgICAgICAgIHZhcmlhYmxlczoge1xuICAgICAgICAgICAgICAgIGZpbHRlcixcbiAgICAgICAgICAgICAgICBvcmRlckJ5LFxuICAgICAgICAgICAgICAgIGxpbWl0XG4gICAgICAgICAgICB9LFxuICAgICAgICB9KSkuZGF0YVtjXTtcbiAgICB9XG5cblxuICAgIHN1YnNjcmliZShmaWx0ZXI6IGFueSwgcmVzdWx0OiBzdHJpbmcsIG9uRG9jRXZlbnQ6IERvY0V2ZW50KTogU3Vic2NyaXB0aW9uIHtcbiAgICAgICAgY29uc3QgdGV4dCA9IGBzdWJzY3JpcHRpb24gJHt0aGlzLmNvbGxlY3Rpb25OYW1lfSgkZmlsdGVyOiAke3RoaXMudHlwZU5hbWV9RmlsdGVyKSB7XG4gICAgICAgIFx0JHt0aGlzLmNvbGxlY3Rpb25OYW1lfShmaWx0ZXI6ICRmaWx0ZXIpIHsgJHtyZXN1bHR9IH1cbiAgICAgICAgfWA7XG4gICAgICAgIGNvbnN0IHF1ZXJ5ID0gZ3FsKFt0ZXh0XSk7XG4gICAgICAgIGNvbnN0IGNsaWVudCA9IHRoaXMubW9kdWxlLmVuc3VyZUNsaWVudCgpO1xuICAgICAgICBjb25zdCBvYnNlcnZhYmxlID0gY2xpZW50LnN1YnNjcmliZSh7XG4gICAgICAgICAgICBxdWVyeSxcbiAgICAgICAgICAgIHZhcmlhYmxlczoge1xuICAgICAgICAgICAgICAgIGZpbHRlcixcbiAgICAgICAgICAgIH0sXG4gICAgICAgIH0pO1xuICAgICAgICBjb25zdCBzdWJzY3JpcHRpb24gPSBvYnNlcnZhYmxlLnN1YnNjcmliZSh7XG4gICAgICAgICAgICBuZXh0OiAobWVzc2FnZSkgPT4ge1xuICAgICAgICAgICAgICAgIG9uRG9jRXZlbnQoJ2luc2VydC91cGRhdGUnLCBtZXNzYWdlLmRhdGFbdGhpcy5jb2xsZWN0aW9uTmFtZV0pO1xuICAgICAgICAgICAgfSxcbiAgICAgICAgfSk7XG4gICAgICAgIHJldHVybiB7XG4gICAgICAgICAgICB1bnN1YnNjcmliZTogKCkgPT4ge1xuICAgICAgICAgICAgICAgIHN1YnNjcmlwdGlvbi51bnN1YnNjcmliZSgpO1xuICAgICAgICAgICAgfSxcbiAgICAgICAgfTtcbiAgICB9XG5cbiAgICBhc3luYyB3YWl0Rm9yKGZpbHRlcjogYW55LCByZXN1bHQ6IHN0cmluZyk6IFByb21pc2U8YW55PiB7XG4gICAgICAgIGNvbnN0IGNvbmZpZyA9IHRoaXMubW9kdWxlLmNvbmZpZztcbiAgICAgICAgY29uc3QgZXhpc3RpbmcgPSBhd2FpdCB0aGlzLnF1ZXJ5KGZpbHRlciwgcmVzdWx0KTtcbiAgICAgICAgaWYgKGV4aXN0aW5nLmxlbmd0aCA+IDApIHtcbiAgICAgICAgICAgIHJldHVybiBleGlzdGluZ1swXTtcbiAgICAgICAgfVxuICAgICAgICByZXR1cm4gbmV3IFByb21pc2UoKHJlc29sdmUpID0+IHtcbiAgICAgICAgICAgIGNvbnN0IGZvcmNlQ2hlY2tUaW1lb3V0ID0gMTBfMDAwO1xuICAgICAgICAgICAgbGV0IHN1YnNjcmlwdGlvbjogYW55ID0gbnVsbDtcbiAgICAgICAgICAgIGxldCByZXNvbHZlZDogYm9vbGVhbiA9IGZhbHNlO1xuXG4gICAgICAgICAgICBjb25zdCBkb1Jlc29sdmUgPSAoZG9jKSA9PiB7XG4gICAgICAgICAgICAgICAgaWYgKHJlc29sdmVkKSB7XG4gICAgICAgICAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgcmVzb2x2ZWQgPSB0cnVlO1xuICAgICAgICAgICAgICAgIGlmIChzdWJzY3JpcHRpb24pIHtcbiAgICAgICAgICAgICAgICAgICAgc3Vic2NyaXB0aW9uLnVuc3Vic2NyaWJlKCk7XG4gICAgICAgICAgICAgICAgICAgIHN1YnNjcmlwdGlvbiA9IG51bGw7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIHJlc29sdmUoZG9jKTtcblxuICAgICAgICAgICAgfTtcblxuICAgICAgICAgICAgY29uc3QgZm9yY2VDaGVjayA9ICgpID0+IHtcbiAgICAgICAgICAgICAgICAoYXN5bmMgKCkgPT4ge1xuICAgICAgICAgICAgICAgICAgICBpZiAocmVzb2x2ZWQpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICBjb25maWcubG9nKCd3YWl0Rm9yLmZvcmNlQ2hlY2snLCB0aGlzLmNvbGxlY3Rpb25OYW1lLCBmaWx0ZXIpO1xuICAgICAgICAgICAgICAgICAgICBjb25zdCBleGlzdGluZyA9IGF3YWl0IHRoaXMucXVlcnkoZmlsdGVyLCByZXN1bHQpO1xuICAgICAgICAgICAgICAgICAgICBpZiAoZXhpc3RpbmcubGVuZ3RoID4gMCkge1xuICAgICAgICAgICAgICAgICAgICAgICAgZG9SZXNvbHZlKGV4aXN0aW5nWzBdKTtcbiAgICAgICAgICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIHNldFRpbWVvdXQoZm9yY2VDaGVjaywgZm9yY2VDaGVja1RpbWVvdXQpO1xuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgfSkoKTtcbiAgICAgICAgICAgIH07XG5cbiAgICAgICAgICAgIHN1YnNjcmlwdGlvbiA9IHRoaXMuc3Vic2NyaWJlKGZpbHRlciwgcmVzdWx0LCAoY2hhbmdlLCBkb2MpID0+IHtcbiAgICAgICAgICAgICAgICBkb1Jlc29sdmUoZG9jKTtcbiAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgc2V0VGltZW91dChmb3JjZUNoZWNrLCBmb3JjZUNoZWNrVGltZW91dCk7XG4gICAgICAgIH0pO1xuICAgIH1cbn1cblxuVE9OUXVlcmllc01vZHVsZS5tb2R1bGVOYW1lID0gJ1RPTlF1ZXJpZXNNb2R1bGUnO1xuIl19