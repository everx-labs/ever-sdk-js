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

var _apolloClient = require("apollo-client");

var _apolloCacheInmemory = require("apollo-cache-inmemory");

var _apolloLinkHttp = require("apollo-link-http");

var _apolloLinkWs = require("apollo-link-ws");

var _apolloLink = require("apollo-link");

var _apolloUtilities = require("apollo-utilities");

var _graphqlTag = _interopRequireDefault(require("graphql-tag"));

var _TONConfigModule = _interopRequireDefault(require("./TONConfigModule"));

var _TONClient = require("../TONClient");

var _TONModule2 = require("../TONModule");

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
    (0, _defineProperty2["default"])((0, _assertThisInitialized2["default"])(_this), "transactions", void 0);
    (0, _defineProperty2["default"])((0, _assertThisInitialized2["default"])(_this), "messages", void 0);
    (0, _defineProperty2["default"])((0, _assertThisInitialized2["default"])(_this), "blocks", void 0);
    (0, _defineProperty2["default"])((0, _assertThisInitialized2["default"])(_this), "accounts", void 0);
    (0, _defineProperty2["default"])((0, _assertThisInitialized2["default"])(_this), "client", void 0);
    return _this;
  }

  (0, _createClass2["default"])(TONQueriesModule, [{
    key: "setup",
    value: function () {
      var _setup = (0, _asyncToGenerator2["default"])(
      /*#__PURE__*/
      _regenerator["default"].mark(function _callee() {
        var config, configData, clientPlatform, fragmentMatcher, cache, httpLink, wsLink, link, defaultOptions, client;
        return _regenerator["default"].wrap(function _callee$(_context) {
          while (1) {
            switch (_context.prev = _context.next) {
              case 0:
                config = this.context.getModule(_TONConfigModule["default"]);
                configData = config.data;
                clientPlatform = _TONClient.TONClient.clientPlatform;

                if (!(!configData || !clientPlatform)) {
                  _context.next = 5;
                  break;
                }

                throw Error('TON SDK does not configured');

              case 5:
                fragmentMatcher = new _apolloCacheInmemory.IntrospectionFragmentMatcher({
                  introspectionQueryResultData: unionsScheme.data
                });
                cache = new _apolloCacheInmemory.InMemoryCache({
                  fragmentMatcher: fragmentMatcher
                });
                httpLink = new _apolloLinkHttp.HttpLink({
                  uri: config.queriesHttpUrl(),
                  fetch: clientPlatform.fetch
                });
                wsLink = new _apolloLinkWs.WebSocketLink({
                  uri: config.queriesWsUrl(),
                  options: {
                    reconnect: true
                  },
                  webSocketImpl: clientPlatform.WebSocket
                });
                link = (0, _apolloLink.split)(function (_ref) {
                  var query = _ref.query;
                  var definition = (0, _apolloUtilities.getMainDefinition)(query);
                  return definition.kind === 'OperationDefinition' && definition.operation === 'subscription';
                }, wsLink, httpLink);
                defaultOptions = {
                  watchQuery: {
                    fetchPolicy: 'no-cache'
                  },
                  query: {
                    fetchPolicy: 'no-cache'
                  }
                };
                client = new _apolloClient.ApolloClient({
                  cache: cache,
                  link: link,
                  defaultOptions: defaultOptions
                });
                this.client = client;
                this.transactions = new TONQCollection(client, 'transactions');
                this.messages = new TONQCollection(client, 'messages');
                this.blocks = new TONQCollection(client, 'blocks');
                this.accounts = new TONQCollection(client, 'accounts');

              case 17:
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
    key: "close",
    value: function () {
      var _close = (0, _asyncToGenerator2["default"])(
      /*#__PURE__*/
      _regenerator["default"].mark(function _callee2() {
        return _regenerator["default"].wrap(function _callee2$(_context2) {
          while (1) {
            switch (_context2.prev = _context2.next) {
              case 0:
                _context2.next = 2;
                return this.client.clearStore();

              case 2:
                this.client.stop();

              case 3:
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
        var gqlQuery;
        return _regenerator["default"].wrap(function _callee3$(_context3) {
          while (1) {
            switch (_context3.prev = _context3.next) {
              case 0:
                gqlQuery = (0, _graphqlTag["default"])(["query select($query: String!, $bindVarsJson: String!) {\n            select(query: $query, bindVarsJson: $bindVarsJson)\n        }"]);
                _context3.t0 = JSON;
                _context3.next = 4;
                return this.client.query({
                  query: gqlQuery,
                  variables: {
                    query: query,
                    bindVarsJson: JSON.stringify(bindVars)
                  }
                });

              case 4:
                _context3.t1 = _context3.sent.data.select;
                return _context3.abrupt("return", _context3.t0.parse.call(_context3.t0, _context3.t1));

              case 6:
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
  function TONQCollection(client, collectionName) {
    (0, _classCallCheck2["default"])(this, TONQCollection);
    (0, _defineProperty2["default"])(this, "client", void 0);
    (0, _defineProperty2["default"])(this, "collectionName", void 0);
    (0, _defineProperty2["default"])(this, "typeName", void 0);
    this.client = client;
    this.collectionName = collectionName;
    this.typeName = collectionName.substr(0, 1).toUpperCase() + collectionName.substr(1, collectionName.length - 2);
  }

  (0, _createClass2["default"])(TONQCollection, [{
    key: "query",
    value: function () {
      var _query = (0, _asyncToGenerator2["default"])(
      /*#__PURE__*/
      _regenerator["default"].mark(function _callee4(filter, result, orderBy, limit) {
        var c, t, ql, query;
        return _regenerator["default"].wrap(function _callee4$(_context4) {
          while (1) {
            switch (_context4.prev = _context4.next) {
              case 0:
                c = this.collectionName;
                t = this.typeName;
                ql = "query ".concat(c, "($filter: ").concat(t, "Filter, $orderBy: [QueryOrderBy], $limit: Int) {\n            ").concat(c, "(filter: $filter, orderBy: $orderBy, limit: $limit) { ").concat(result, " }\n        }");
                query = (0, _graphqlTag["default"])([ql]);
                _context4.next = 6;
                return this.client.query({
                  query: query,
                  variables: {
                    filter: filter,
                    orderBy: orderBy,
                    limit: limit
                  }
                });

              case 6:
                _context4.t0 = c;
                return _context4.abrupt("return", _context4.sent.data[_context4.t0]);

              case 8:
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
      var observable = this.client.subscribe({
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

        var existing;
        return _regenerator["default"].wrap(function _callee6$(_context6) {
          while (1) {
            switch (_context6.prev = _context6.next) {
              case 0:
                _context6.next = 2;
                return this.query(filter, result);

              case 2:
                existing = _context6.sent;

                if (!(existing.length > 0)) {
                  _context6.next = 5;
                  break;
                }

                return _context6.abrupt("return", existing[0]);

              case 5:
                return _context6.abrupt("return", new Promise(function (resolve) {
                  var subscription = null;
                  var interval = null;

                  var doResolve = function doResolve(doc) {
                    if (interval) {
                      clearInterval(interval);
                      interval = null;
                    }

                    if (subscription) {
                      subscription.unsubscribe();
                      subscription = null;
                      resolve(doc);
                    }
                  };

                  subscription = _this3.subscribe(filter, result, function (change, doc) {
                    doResolve(doc);
                  });
                  interval = setInterval(function () {
                    (0, _asyncToGenerator2["default"])(
                    /*#__PURE__*/
                    _regenerator["default"].mark(function _callee5() {
                      var existing;
                      return _regenerator["default"].wrap(function _callee5$(_context5) {
                        while (1) {
                          switch (_context5.prev = _context5.next) {
                            case 0:
                              _context5.next = 2;
                              return _this3.query(filter, result);

                            case 2:
                              existing = _context5.sent;

                              if (existing.length > 0) {
                                doResolve(existing[0]);
                              }

                            case 4:
                            case "end":
                              return _context5.stop();
                          }
                        }
                      }, _callee5);
                    }))();
                  }, 1000);
                }));

              case 6:
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy9tb2R1bGVzL1RPTlF1ZXJpZXNNb2R1bGUuanMiXSwibmFtZXMiOlsidW5pb25zU2NoZW1lIiwiVE9OUXVlcmllc01vZHVsZSIsImNvbnRleHQiLCJjb25maWciLCJnZXRNb2R1bGUiLCJUT05Db25maWdNb2R1bGUiLCJjb25maWdEYXRhIiwiZGF0YSIsImNsaWVudFBsYXRmb3JtIiwiVE9OQ2xpZW50IiwiRXJyb3IiLCJmcmFnbWVudE1hdGNoZXIiLCJJbnRyb3NwZWN0aW9uRnJhZ21lbnRNYXRjaGVyIiwiaW50cm9zcGVjdGlvblF1ZXJ5UmVzdWx0RGF0YSIsImNhY2hlIiwiSW5NZW1vcnlDYWNoZSIsImh0dHBMaW5rIiwiSHR0cExpbmsiLCJ1cmkiLCJxdWVyaWVzSHR0cFVybCIsImZldGNoIiwid3NMaW5rIiwiV2ViU29ja2V0TGluayIsInF1ZXJpZXNXc1VybCIsIm9wdGlvbnMiLCJyZWNvbm5lY3QiLCJ3ZWJTb2NrZXRJbXBsIiwiV2ViU29ja2V0IiwibGluayIsInF1ZXJ5IiwiZGVmaW5pdGlvbiIsImtpbmQiLCJvcGVyYXRpb24iLCJkZWZhdWx0T3B0aW9ucyIsIndhdGNoUXVlcnkiLCJmZXRjaFBvbGljeSIsImNsaWVudCIsIkFwb2xsb0NsaWVudCIsInRyYW5zYWN0aW9ucyIsIlRPTlFDb2xsZWN0aW9uIiwibWVzc2FnZXMiLCJibG9ja3MiLCJhY2NvdW50cyIsImNsZWFyU3RvcmUiLCJzdG9wIiwiYmluZFZhcnMiLCJncWxRdWVyeSIsIkpTT04iLCJ2YXJpYWJsZXMiLCJiaW5kVmFyc0pzb24iLCJzdHJpbmdpZnkiLCJzZWxlY3QiLCJwYXJzZSIsIlRPTk1vZHVsZSIsImNvbGxlY3Rpb25OYW1lIiwidHlwZU5hbWUiLCJzdWJzdHIiLCJ0b1VwcGVyQ2FzZSIsImxlbmd0aCIsImZpbHRlciIsInJlc3VsdCIsIm9yZGVyQnkiLCJsaW1pdCIsImMiLCJ0IiwicWwiLCJvbkRvY0V2ZW50IiwidGV4dCIsIm9ic2VydmFibGUiLCJzdWJzY3JpYmUiLCJzdWJzY3JpcHRpb24iLCJuZXh0IiwibWVzc2FnZSIsInVuc3Vic2NyaWJlIiwiZXhpc3RpbmciLCJQcm9taXNlIiwicmVzb2x2ZSIsImludGVydmFsIiwiZG9SZXNvbHZlIiwiZG9jIiwiY2xlYXJJbnRlcnZhbCIsImNoYW5nZSIsInNldEludGVydmFsIiwibW9kdWxlTmFtZSJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBaUJBOztBQUNBOztBQUNBOztBQUNBOztBQUNBOztBQUNBOztBQUNBOztBQUNBOztBQUNBOztBQUNBOztBQTFCQTs7Ozs7Ozs7Ozs7Ozs7O0FBaUNBLElBQU1BLFlBQVksR0FBRztBQUNqQixVQUFRO0FBQ0osZ0JBQVk7QUFDUixlQUFTLENBQUM7QUFDTixnQkFBUSxPQURGO0FBRU4sZ0JBQVEsZUFGRjtBQUdOLHlCQUFpQixDQUFDO0FBQUUsa0JBQVE7QUFBVixTQUFELEVBQStDO0FBQUUsa0JBQVE7QUFBVixTQUEvQyxFQUErRjtBQUFFLGtCQUFRO0FBQVYsU0FBL0Y7QUFIWCxPQUFELEVBSU47QUFDQyxnQkFBUSxPQURUO0FBRUMsZ0JBQVEsZUFGVDtBQUdDLHlCQUFpQixDQUFDO0FBQUUsa0JBQVE7QUFBVixTQUFELEVBQTZDO0FBQUUsa0JBQVE7QUFBVixTQUE3QyxFQUF3RjtBQUFFLGtCQUFRO0FBQVYsU0FBeEY7QUFIbEIsT0FKTSxFQVFOO0FBQ0MsZ0JBQVEsT0FEVDtBQUVDLGdCQUFRLGVBRlQ7QUFHQyx5QkFBaUIsQ0FBQztBQUFFLGtCQUFRO0FBQVYsU0FBRCxFQUE2QztBQUFFLGtCQUFRO0FBQVYsU0FBN0M7QUFIbEIsT0FSTSxFQVlOO0FBQ0MsZ0JBQVEsT0FEVDtBQUVDLGdCQUFRLE9BRlQ7QUFHQyx5QkFBaUIsQ0FBQztBQUFFLGtCQUFRO0FBQVYsU0FBRCxFQUFxQztBQUFFLGtCQUFRO0FBQVYsU0FBckMsRUFBb0U7QUFBRSxrQkFBUTtBQUFWLFNBQXBFLEVBQTRHO0FBQUUsa0JBQVE7QUFBVixTQUE1RyxF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QUFULEdBQWtCLENBQXRCLEVBQXlCO0FBQ3JCb0IsZ0NBQUFBLFNBQVMsQ0FBQ0osUUFBUSxDQUFDLENBQUQsQ0FBVCxDQUFUO0FBQ0g7O0FBSko7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEscUJBQUQ7QUFNSCxtQkFQcUIsRUFPbkIsSUFQbUIsQ0FBdEI7QUFRSCxpQkF6Qk0sQzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUE2QmZ6RSxnQkFBZ0IsQ0FBQ2tGLFVBQWpCLEdBQThCLGtCQUE5QiIsInNvdXJjZXNDb250ZW50IjpbIi8qXG4gKiBDb3B5cmlnaHQgMjAxOC0yMDE5IFRPTiBERVYgU09MVVRJT05TIExURC5cbiAqXG4gKiBMaWNlbnNlZCB1bmRlciB0aGUgU09GVFdBUkUgRVZBTFVBVElPTiBMaWNlbnNlICh0aGUgXCJMaWNlbnNlXCIpOyB5b3UgbWF5IG5vdCB1c2VcbiAqIHRoaXMgZmlsZSBleGNlcHQgaW4gY29tcGxpYW5jZSB3aXRoIHRoZSBMaWNlbnNlLiAgWW91IG1heSBvYnRhaW4gYSBjb3B5IG9mIHRoZVxuICogTGljZW5zZSBhdDpcbiAqXG4gKiBodHRwOi8vd3d3LnRvbi5kZXYvbGljZW5zZXNcbiAqXG4gKiBVbmxlc3MgcmVxdWlyZWQgYnkgYXBwbGljYWJsZSBsYXcgb3IgYWdyZWVkIHRvIGluIHdyaXRpbmcsIHNvZnR3YXJlXG4gKiBkaXN0cmlidXRlZCB1bmRlciB0aGUgTGljZW5zZSBpcyBkaXN0cmlidXRlZCBvbiBhbiBcIkFTIElTXCIgQkFTSVMsXG4gKiBXSVRIT1VUIFdBUlJBTlRJRVMgT1IgQ09ORElUSU9OUyBPRiBBTlkgS0lORCwgZWl0aGVyIGV4cHJlc3Mgb3IgaW1wbGllZC5cbiAqIFNlZSB0aGUgTGljZW5zZSBmb3IgdGhlIHNwZWNpZmljIFRPTiBERVYgc29mdHdhcmUgZ292ZXJuaW5nIHBlcm1pc3Npb25zIGFuZFxuICogbGltaXRhdGlvbnMgdW5kZXIgdGhlIExpY2Vuc2UuXG4gKi9cblxuLy8gQGZsb3dcbmltcG9ydCB7IEFwb2xsb0NsaWVudCB9IGZyb20gJ2Fwb2xsby1jbGllbnQnO1xuaW1wb3J0IHsgSW5NZW1vcnlDYWNoZSwgSW50cm9zcGVjdGlvbkZyYWdtZW50TWF0Y2hlciB9IGZyb20gJ2Fwb2xsby1jYWNoZS1pbm1lbW9yeSc7XG5pbXBvcnQgeyBIdHRwTGluayB9IGZyb20gJ2Fwb2xsby1saW5rLWh0dHAnO1xuaW1wb3J0IHsgV2ViU29ja2V0TGluayB9IGZyb20gJ2Fwb2xsby1saW5rLXdzJztcbmltcG9ydCB7IHNwbGl0IH0gZnJvbSAnYXBvbGxvLWxpbmsnO1xuaW1wb3J0IHsgZ2V0TWFpbkRlZmluaXRpb24gfSBmcm9tICdhcG9sbG8tdXRpbGl0aWVzJztcbmltcG9ydCBncWwgZnJvbSAnZ3JhcGhxbC10YWcnO1xuaW1wb3J0IFRPTkNvbmZpZ01vZHVsZSBmcm9tICcuL1RPTkNvbmZpZ01vZHVsZSc7XG5pbXBvcnQgeyBUT05DbGllbnQgfSBmcm9tICcuLi9UT05DbGllbnQnO1xuaW1wb3J0IHsgVE9OTW9kdWxlIH0gZnJvbSAnLi4vVE9OTW9kdWxlJztcbmltcG9ydCB0eXBlIHsgVE9OTW9kdWxlQ29udGV4dCB9IGZyb20gJy4uL1RPTk1vZHVsZSc7XG5cbnR5cGUgU3Vic2NyaXB0aW9uID0ge1xuICAgIHVuc3Vic2NyaWJlOiAoKSA9PiB2b2lkXG59XG5cbmNvbnN0IHVuaW9uc1NjaGVtZSA9IHtcbiAgICBcImRhdGFcIjoge1xuICAgICAgICBcIl9fc2NoZW1hXCI6IHtcbiAgICAgICAgICAgIFwidHlwZXNcIjogW3tcbiAgICAgICAgICAgICAgICBcImtpbmRcIjogXCJVTklPTlwiLFxuICAgICAgICAgICAgICAgIFwibmFtZVwiOiBcIk1lc3NhZ2VIZWFkZXJcIixcbiAgICAgICAgICAgICAgICBcInBvc3NpYmxlVHlwZXNcIjogW3sgXCJuYW1lXCI6IFwiTWVzc2FnZUhlYWRlckludE1zZ0luZm9WYXJpYW50XCIgfSwgeyBcIm5hbWVcIjogXCJNZXNzYWdlSGVhZGVyRXh0SW5Nc2dJbmZvVmFyaWFudFwiIH0sIHsgXCJuYW1lXCI6IFwiTWVzc2FnZUhlYWRlckV4dE91dE1zZ0luZm9WYXJpYW50XCIgfV1cbiAgICAgICAgICAgIH0sIHtcbiAgICAgICAgICAgICAgICBcImtpbmRcIjogXCJVTklPTlwiLFxuICAgICAgICAgICAgICAgIFwibmFtZVwiOiBcIk1zZ0FkZHJlc3NJbnRcIixcbiAgICAgICAgICAgICAgICBcInBvc3NpYmxlVHlwZXNcIjogW3sgXCJuYW1lXCI6IFwiTXNnQWRkcmVzc0ludEFkZHJOb25lVmFyaWFudFwiIH0sIHsgXCJuYW1lXCI6IFwiTXNnQWRkcmVzc0ludEFkZHJTdGRWYXJpYW50XCIgfSwgeyBcIm5hbWVcIjogXCJNc2dBZGRyZXNzSW50QWRkclZhclZhcmlhbnRcIiB9XVxuICAgICAgICAgICAgfSwge1xuICAgICAgICAgICAgICAgIFwia2luZFwiOiBcIlVOSU9OXCIsXG4gICAgICAgICAgICAgICAgXCJuYW1lXCI6IFwiTXNnQWRkcmVzc0V4dFwiLFxuICAgICAgICAgICAgICAgIFwicG9zc2libGVUeXBlc1wiOiBbeyBcIm5hbWVcIjogXCJNc2dBZGRyZXNzRXh0QWRkck5vbmVWYXJpYW50XCIgfSwgeyBcIm5hbWVcIjogXCJNc2dBZGRyZXNzRXh0QWRkckV4dGVyblZhcmlhbnRcIiB9XVxuICAgICAgICAgICAgfSwge1xuICAgICAgICAgICAgICAgIFwia2luZFwiOiBcIlVOSU9OXCIsXG4gICAgICAgICAgICAgICAgXCJuYW1lXCI6IFwiSW5Nc2dcIixcbiAgICAgICAgICAgICAgICBcInBvc3NpYmxlVHlwZXNcIjogW3sgXCJuYW1lXCI6IFwiSW5Nc2dFeHRlcm5hbFZhcmlhbnRcIiB9LCB7IFwibmFtZVwiOiBcIkluTXNnSUhSVmFyaWFudFwiIH0sIHsgXCJuYW1lXCI6IFwiSW5Nc2dJbW1lZGlhdGVsbHlWYXJpYW50XCIgfSwgeyBcIm5hbWVcIjogXCJJbk1zZ0ZpbmFsVmFyaWFudFwiIH0sIHsgXCJuYW1lXCI6IFwiSW5Nc2dUcmFuc2l0VmFyaWFudFwiIH0sIHsgXCJuYW1lXCI6IFwiSW5Nc2dEaXNjYXJkZWRGaW5hbFZhcmlhbnRcIiB9LCB7IFwibmFtZVwiOiBcIkluTXNnRGlzY2FyZGVkVHJhbnNpdFZhcmlhbnRcIiB9XVxuICAgICAgICAgICAgfSwge1xuICAgICAgICAgICAgICAgIFwia2luZFwiOiBcIlVOSU9OXCIsXG4gICAgICAgICAgICAgICAgXCJuYW1lXCI6IFwiSW50ZXJtZWRpYXRlQWRkcmVzc1wiLFxuICAgICAgICAgICAgICAgIFwicG9zc2libGVUeXBlc1wiOiBbeyBcIm5hbWVcIjogXCJJbnRlcm1lZGlhdGVBZGRyZXNzUmVndWxhclZhcmlhbnRcIiB9LCB7IFwibmFtZVwiOiBcIkludGVybWVkaWF0ZUFkZHJlc3NTaW1wbGVWYXJpYW50XCIgfSwgeyBcIm5hbWVcIjogXCJJbnRlcm1lZGlhdGVBZGRyZXNzRXh0VmFyaWFudFwiIH1dXG4gICAgICAgICAgICB9LCB7XG4gICAgICAgICAgICAgICAgXCJraW5kXCI6IFwiVU5JT05cIixcbiAgICAgICAgICAgICAgICBcIm5hbWVcIjogXCJPdXRNc2dcIixcbiAgICAgICAgICAgICAgICBcInBvc3NpYmxlVHlwZXNcIjogW3sgXCJuYW1lXCI6IFwiT3V0TXNnTm9uZVZhcmlhbnRcIiB9LCB7IFwibmFtZVwiOiBcIk91dE1zZ0V4dGVybmFsVmFyaWFudFwiIH0sIHsgXCJuYW1lXCI6IFwiT3V0TXNnSW1tZWRpYXRlbHlWYXJpYW50XCIgfSwgeyBcIm5hbWVcIjogXCJPdXRNc2dPdXRNc2dOZXdWYXJpYW50XCIgfSwgeyBcIm5hbWVcIjogXCJPdXRNc2dUcmFuc2l0VmFyaWFudFwiIH0sIHsgXCJuYW1lXCI6IFwiT3V0TXNnRGVxdWV1ZVZhcmlhbnRcIiB9LCB7IFwibmFtZVwiOiBcIk91dE1zZ1RyYW5zaXRSZXF1aXJlZFZhcmlhbnRcIiB9XVxuICAgICAgICAgICAgfSwge1xuICAgICAgICAgICAgICAgIFwia2luZFwiOiBcIlVOSU9OXCIsXG4gICAgICAgICAgICAgICAgXCJuYW1lXCI6IFwiQWNjb3VudFN0b3JhZ2VTdGF0ZVwiLFxuICAgICAgICAgICAgICAgIFwicG9zc2libGVUeXBlc1wiOiBbeyBcIm5hbWVcIjogXCJBY2NvdW50U3RvcmFnZVN0YXRlQWNjb3VudFVuaW5pdFZhcmlhbnRcIiB9LCB7IFwibmFtZVwiOiBcIkFjY291bnRTdG9yYWdlU3RhdGVBY2NvdW50QWN0aXZlVmFyaWFudFwiIH0sIHsgXCJuYW1lXCI6IFwiQWNjb3VudFN0b3JhZ2VTdGF0ZUFjY291bnRGcm96ZW5WYXJpYW50XCIgfV1cbiAgICAgICAgICAgIH0sIHtcbiAgICAgICAgICAgICAgICBcImtpbmRcIjogXCJVTklPTlwiLFxuICAgICAgICAgICAgICAgIFwibmFtZVwiOiBcIlRyYW5zYWN0aW9uRGVzY3JpcHRpb25cIixcbiAgICAgICAgICAgICAgICBcInBvc3NpYmxlVHlwZXNcIjogW3sgXCJuYW1lXCI6IFwiVHJhbnNhY3Rpb25EZXNjcmlwdGlvbk9yZGluYXJ5VmFyaWFudFwiIH0sIHsgXCJuYW1lXCI6IFwiVHJhbnNhY3Rpb25EZXNjcmlwdGlvblN0b3JhZ2VWYXJpYW50XCIgfSwgeyBcIm5hbWVcIjogXCJUcmFuc2FjdGlvbkRlc2NyaXB0aW9uVGlja1RvY2tWYXJpYW50XCIgfSwgeyBcIm5hbWVcIjogXCJUcmFuc2FjdGlvbkRlc2NyaXB0aW9uU3BsaXRQcmVwYXJlVmFyaWFudFwiIH0sIHsgXCJuYW1lXCI6IFwiVHJhbnNhY3Rpb25EZXNjcmlwdGlvblNwbGl0SW5zdGFsbFZhcmlhbnRcIiB9LCB7IFwibmFtZVwiOiBcIlRyYW5zYWN0aW9uRGVzY3JpcHRpb25NZXJnZVByZXBhcmVWYXJpYW50XCIgfSwgeyBcIm5hbWVcIjogXCJUcmFuc2FjdGlvbkRlc2NyaXB0aW9uTWVyZ2VJbnN0YWxsVmFyaWFudFwiIH1dXG4gICAgICAgICAgICB9LCB7XG4gICAgICAgICAgICAgICAgXCJraW5kXCI6IFwiVU5JT05cIixcbiAgICAgICAgICAgICAgICBcIm5hbWVcIjogXCJUckNvbXB1dGVQaGFzZVwiLFxuICAgICAgICAgICAgICAgIFwicG9zc2libGVUeXBlc1wiOiBbeyBcIm5hbWVcIjogXCJUckNvbXB1dGVQaGFzZVNraXBwZWRWYXJpYW50XCIgfSwgeyBcIm5hbWVcIjogXCJUckNvbXB1dGVQaGFzZVZtVmFyaWFudFwiIH1dXG4gICAgICAgICAgICB9LCB7XG4gICAgICAgICAgICAgICAgXCJraW5kXCI6IFwiVU5JT05cIixcbiAgICAgICAgICAgICAgICBcIm5hbWVcIjogXCJUckJvdW5jZVBoYXNlXCIsXG4gICAgICAgICAgICAgICAgXCJwb3NzaWJsZVR5cGVzXCI6IFt7IFwibmFtZVwiOiBcIlRyQm91bmNlUGhhc2VOZWdmdW5kc1ZhcmlhbnRcIiB9LCB7IFwibmFtZVwiOiBcIlRyQm91bmNlUGhhc2VOb2Z1bmRzVmFyaWFudFwiIH0sIHsgXCJuYW1lXCI6IFwiVHJCb3VuY2VQaGFzZU9rVmFyaWFudFwiIH1dXG4gICAgICAgICAgICB9XVxuICAgICAgICB9XG4gICAgfVxufTtcblxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgVE9OUXVlcmllc01vZHVsZSBleHRlbmRzIFRPTk1vZHVsZSB7XG4gICAgY29uc3RydWN0b3IoY29udGV4dDogVE9OTW9kdWxlQ29udGV4dCkge1xuICAgICAgICBzdXBlcihjb250ZXh0KTtcbiAgICB9XG5cbiAgICBhc3luYyBzZXR1cCgpIHtcbiAgICAgICAgY29uc3QgY29uZmlnOiBUT05Db25maWdNb2R1bGUgPSB0aGlzLmNvbnRleHQuZ2V0TW9kdWxlKFRPTkNvbmZpZ01vZHVsZSk7XG4gICAgICAgIGNvbnN0IGNvbmZpZ0RhdGEgPSBjb25maWcuZGF0YTtcbiAgICAgICAgY29uc3QgeyBjbGllbnRQbGF0Zm9ybSB9ID0gVE9OQ2xpZW50O1xuICAgICAgICBpZiAoIWNvbmZpZ0RhdGEgfHwgIWNsaWVudFBsYXRmb3JtKSB7XG4gICAgICAgICAgICB0aHJvdyBFcnJvcignVE9OIFNESyBkb2VzIG5vdCBjb25maWd1cmVkJyk7XG4gICAgICAgIH1cbiAgICAgICAgY29uc3QgZnJhZ21lbnRNYXRjaGVyID0gbmV3IEludHJvc3BlY3Rpb25GcmFnbWVudE1hdGNoZXIoe1xuICAgICAgICAgICAgaW50cm9zcGVjdGlvblF1ZXJ5UmVzdWx0RGF0YTogdW5pb25zU2NoZW1lLmRhdGFcbiAgICAgICAgfSk7XG5cbiAgICAgICAgY29uc3QgY2FjaGUgPSBuZXcgSW5NZW1vcnlDYWNoZSh7IGZyYWdtZW50TWF0Y2hlciB9KTtcblxuICAgICAgICBjb25zdCBodHRwTGluayA9IG5ldyBIdHRwTGluayh7XG4gICAgICAgICAgICB1cmk6IGNvbmZpZy5xdWVyaWVzSHR0cFVybCgpLFxuICAgICAgICAgICAgZmV0Y2g6IGNsaWVudFBsYXRmb3JtLmZldGNoLFxuICAgICAgICB9KTtcblxuICAgICAgICBjb25zdCB3c0xpbmsgPSBuZXcgV2ViU29ja2V0TGluayh7XG4gICAgICAgICAgICB1cmk6IGNvbmZpZy5xdWVyaWVzV3NVcmwoKSxcbiAgICAgICAgICAgIG9wdGlvbnM6IHtcbiAgICAgICAgICAgICAgICByZWNvbm5lY3Q6IHRydWUsXG4gICAgICAgICAgICB9LFxuICAgICAgICAgICAgd2ViU29ja2V0SW1wbDogY2xpZW50UGxhdGZvcm0uV2ViU29ja2V0LFxuICAgICAgICB9KTtcblxuICAgICAgICBjb25zdCBsaW5rID0gc3BsaXQoXG4gICAgICAgICAgICAoeyBxdWVyeSB9KSA9PiB7XG4gICAgICAgICAgICAgICAgY29uc3QgZGVmaW5pdGlvbiA9IGdldE1haW5EZWZpbml0aW9uKHF1ZXJ5KTtcbiAgICAgICAgICAgICAgICByZXR1cm4gKFxuICAgICAgICAgICAgICAgICAgICBkZWZpbml0aW9uLmtpbmQgPT09ICdPcGVyYXRpb25EZWZpbml0aW9uJ1xuICAgICAgICAgICAgICAgICAgICAmJiBkZWZpbml0aW9uLm9wZXJhdGlvbiA9PT0gJ3N1YnNjcmlwdGlvbidcbiAgICAgICAgICAgICAgICApO1xuICAgICAgICAgICAgfSxcbiAgICAgICAgICAgIHdzTGluayxcbiAgICAgICAgICAgIGh0dHBMaW5rLFxuICAgICAgICApO1xuXG5cblxuICAgICAgICBjb25zdCBkZWZhdWx0T3B0aW9ucyA9IHtcbiAgICAgICAgICAgIHdhdGNoUXVlcnk6IHtcbiAgICAgICAgICAgICAgICBmZXRjaFBvbGljeTogJ25vLWNhY2hlJyxcbiAgICAgICAgICAgIH0sXG4gICAgICAgICAgICBxdWVyeToge1xuICAgICAgICAgICAgICAgIGZldGNoUG9saWN5OiAnbm8tY2FjaGUnLFxuICAgICAgICAgICAgfSxcbiAgICAgICAgfTtcblxuICAgICAgICBjb25zdCBjbGllbnQgPSBuZXcgQXBvbGxvQ2xpZW50KHtcbiAgICAgICAgICAgIGNhY2hlLFxuICAgICAgICAgICAgbGluayxcbiAgICAgICAgICAgIGRlZmF1bHRPcHRpb25zLFxuICAgICAgICB9KTtcbiAgICAgICAgdGhpcy5jbGllbnQgPSBjbGllbnQ7XG4gICAgICAgIHRoaXMudHJhbnNhY3Rpb25zID0gbmV3IFRPTlFDb2xsZWN0aW9uKGNsaWVudCwgJ3RyYW5zYWN0aW9ucycpO1xuICAgICAgICB0aGlzLm1lc3NhZ2VzID0gbmV3IFRPTlFDb2xsZWN0aW9uKGNsaWVudCwgJ21lc3NhZ2VzJyk7XG4gICAgICAgIHRoaXMuYmxvY2tzID0gbmV3IFRPTlFDb2xsZWN0aW9uKGNsaWVudCwgJ2Jsb2NrcycpO1xuICAgICAgICB0aGlzLmFjY291bnRzID0gbmV3IFRPTlFDb2xsZWN0aW9uKGNsaWVudCwgJ2FjY291bnRzJyk7XG4gICAgfVxuXG4gICAgYXN5bmMgY2xvc2UoKSB7XG4gICAgICAgIGF3YWl0IHRoaXMuY2xpZW50LmNsZWFyU3RvcmUoKTtcbiAgICAgICAgdGhpcy5jbGllbnQuc3RvcCgpO1xuICAgIH1cblxuICAgIGFzeW5jIHNlbGVjdChxdWVyeTogc3RyaW5nLCBiaW5kVmFyczoge30pIHtcbiAgICAgICAgY29uc3QgZ3FsUXVlcnkgPSBncWwoW2BxdWVyeSBzZWxlY3QoJHF1ZXJ5OiBTdHJpbmchLCAkYmluZFZhcnNKc29uOiBTdHJpbmchKSB7XG4gICAgICAgICAgICBzZWxlY3QocXVlcnk6ICRxdWVyeSwgYmluZFZhcnNKc29uOiAkYmluZFZhcnNKc29uKVxuICAgICAgICB9YF0pO1xuICAgICAgICByZXR1cm4gSlNPTi5wYXJzZSgoYXdhaXQgdGhpcy5jbGllbnQucXVlcnkoe1xuICAgICAgICAgICAgcXVlcnk6IGdxbFF1ZXJ5LFxuICAgICAgICAgICAgdmFyaWFibGVzOiB7XG4gICAgICAgICAgICAgICAgcXVlcnksXG4gICAgICAgICAgICAgICAgYmluZFZhcnNKc29uOiBKU09OLnN0cmluZ2lmeShiaW5kVmFycyksXG4gICAgICAgICAgICB9LFxuICAgICAgICB9KSkuZGF0YS5zZWxlY3QpO1xuICAgIH1cblxuICAgIHRyYW5zYWN0aW9uczogVE9OUUNvbGxlY3Rpb247XG5cbiAgICBtZXNzYWdlczogVE9OUUNvbGxlY3Rpb247XG5cbiAgICBibG9ja3M6IFRPTlFDb2xsZWN0aW9uO1xuXG4gICAgYWNjb3VudHM6IFRPTlFDb2xsZWN0aW9uO1xuXG4gICAgY2xpZW50OiBBcG9sbG9DbGllbnQ7XG59XG5cblxudHlwZSBEb2NFdmVudCA9IChjaGFuZ2VUeXBlOiBzdHJpbmcsIGRvYzogYW55KSA9PiB2b2lkO1xuXG50eXBlIE9yZGVyQnkgPSB7XG4gICAgcGF0aDogc3RyaW5nLFxuICAgIHNvcnQ6ICdBU0MnIHwgJ0RFU0MnXG59XG5cbmNsYXNzIFRPTlFDb2xsZWN0aW9uIHtcbiAgICBjbGllbnQ6IGFueTtcblxuICAgIGNvbGxlY3Rpb25OYW1lOiBzdHJpbmc7XG4gICAgdHlwZU5hbWU6IHN0cmluZztcblxuICAgIGNvbnN0cnVjdG9yKGNsaWVudDogYW55LCBjb2xsZWN0aW9uTmFtZTogc3RyaW5nKSB7XG4gICAgICAgIHRoaXMuY2xpZW50ID0gY2xpZW50O1xuICAgICAgICB0aGlzLmNvbGxlY3Rpb25OYW1lID0gY29sbGVjdGlvbk5hbWU7XG4gICAgICAgIHRoaXMudHlwZU5hbWUgPSBjb2xsZWN0aW9uTmFtZS5zdWJzdHIoMCwgMSkudG9VcHBlckNhc2UoKSArXG4gICAgICAgICAgICBjb2xsZWN0aW9uTmFtZS5zdWJzdHIoMSwgY29sbGVjdGlvbk5hbWUubGVuZ3RoIC0gMik7XG4gICAgfVxuXG5cbiAgICBhc3luYyBxdWVyeShmaWx0ZXI6IGFueSwgcmVzdWx0OiBzdHJpbmcsIG9yZGVyQnk/OiBPcmRlckJ5W10sIGxpbWl0PzogbnVtYmVyKTogUHJvbWlzZTxhbnk+IHtcbiAgICAgICAgY29uc3QgYyA9IHRoaXMuY29sbGVjdGlvbk5hbWU7XG4gICAgICAgIGNvbnN0IHQgPSB0aGlzLnR5cGVOYW1lO1xuICAgICAgICBjb25zdCBxbCA9IGBxdWVyeSAke2N9KCRmaWx0ZXI6ICR7dH1GaWx0ZXIsICRvcmRlckJ5OiBbUXVlcnlPcmRlckJ5XSwgJGxpbWl0OiBJbnQpIHtcbiAgICAgICAgICAgICR7Y30oZmlsdGVyOiAkZmlsdGVyLCBvcmRlckJ5OiAkb3JkZXJCeSwgbGltaXQ6ICRsaW1pdCkgeyAke3Jlc3VsdH0gfVxuICAgICAgICB9YDtcbiAgICAgICAgY29uc3QgcXVlcnkgPSBncWwoW3FsXSk7XG4gICAgICAgIHJldHVybiAoYXdhaXQgdGhpcy5jbGllbnQucXVlcnkoe1xuICAgICAgICAgICAgcXVlcnksXG4gICAgICAgICAgICB2YXJpYWJsZXM6IHtcbiAgICAgICAgICAgICAgICBmaWx0ZXIsXG4gICAgICAgICAgICAgICAgb3JkZXJCeSxcbiAgICAgICAgICAgICAgICBsaW1pdFxuICAgICAgICAgICAgfSxcbiAgICAgICAgfSkpLmRhdGFbY107XG4gICAgfVxuXG5cbiAgICBzdWJzY3JpYmUoZmlsdGVyOiBhbnksIHJlc3VsdDogc3RyaW5nLCBvbkRvY0V2ZW50OiBEb2NFdmVudCk6IFN1YnNjcmlwdGlvbiB7XG4gICAgICAgIGNvbnN0IHRleHQgPSBgc3Vic2NyaXB0aW9uICR7dGhpcy5jb2xsZWN0aW9uTmFtZX0oJGZpbHRlcjogJHt0aGlzLnR5cGVOYW1lfUZpbHRlcikge1xuICAgICAgICBcdCR7dGhpcy5jb2xsZWN0aW9uTmFtZX0oZmlsdGVyOiAkZmlsdGVyKSB7ICR7cmVzdWx0fSB9XG4gICAgICAgIH1gO1xuICAgICAgICBjb25zdCBxdWVyeSA9IGdxbChbdGV4dF0pO1xuICAgICAgICBjb25zdCBvYnNlcnZhYmxlID0gdGhpcy5jbGllbnQuc3Vic2NyaWJlKHtcbiAgICAgICAgICAgIHF1ZXJ5LFxuICAgICAgICAgICAgdmFyaWFibGVzOiB7XG4gICAgICAgICAgICAgICAgZmlsdGVyLFxuICAgICAgICAgICAgfSxcbiAgICAgICAgfSk7XG4gICAgICAgIGNvbnN0IHN1YnNjcmlwdGlvbiA9IG9ic2VydmFibGUuc3Vic2NyaWJlKHtcbiAgICAgICAgICAgIG5leHQ6IChtZXNzYWdlKSA9PiB7XG4gICAgICAgICAgICAgICAgb25Eb2NFdmVudCgnaW5zZXJ0L3VwZGF0ZScsIG1lc3NhZ2UuZGF0YVt0aGlzLmNvbGxlY3Rpb25OYW1lXSk7XG4gICAgICAgICAgICB9LFxuICAgICAgICB9KTtcbiAgICAgICAgcmV0dXJuIHtcbiAgICAgICAgICAgIHVuc3Vic2NyaWJlOiAoKSA9PiB7XG4gICAgICAgICAgICAgICAgc3Vic2NyaXB0aW9uLnVuc3Vic2NyaWJlKCk7XG4gICAgICAgICAgICB9LFxuICAgICAgICB9O1xuICAgIH1cblxuICAgIGFzeW5jIHdhaXRGb3IoZmlsdGVyOiBhbnksIHJlc3VsdDogc3RyaW5nKTogUHJvbWlzZTxhbnk+IHtcbiAgICAgICAgY29uc3QgZXhpc3RpbmcgPSBhd2FpdCB0aGlzLnF1ZXJ5KGZpbHRlciwgcmVzdWx0KTtcbiAgICAgICAgaWYgKGV4aXN0aW5nLmxlbmd0aCA+IDApIHtcbiAgICAgICAgICAgIHJldHVybiBleGlzdGluZ1swXTtcbiAgICAgICAgfVxuICAgICAgICByZXR1cm4gbmV3IFByb21pc2UoKHJlc29sdmUpID0+IHtcbiAgICAgICAgICAgIGxldCBzdWJzY3JpcHRpb246IGFueSA9IG51bGw7XG4gICAgICAgICAgICBsZXQgaW50ZXJ2YWw6IGFueSA9IG51bGw7XG4gICAgICAgICAgICBjb25zdCBkb1Jlc29sdmUgPSAoZG9jKSA9PiB7XG4gICAgICAgICAgICAgICAgaWYgKGludGVydmFsKSB7XG4gICAgICAgICAgICAgICAgICAgIGNsZWFySW50ZXJ2YWwoaW50ZXJ2YWwpO1xuICAgICAgICAgICAgICAgICAgICBpbnRlcnZhbCA9IG51bGw7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIGlmIChzdWJzY3JpcHRpb24pIHtcbiAgICAgICAgICAgICAgICAgICAgc3Vic2NyaXB0aW9uLnVuc3Vic2NyaWJlKCk7XG4gICAgICAgICAgICAgICAgICAgIHN1YnNjcmlwdGlvbiA9IG51bGw7XG4gICAgICAgICAgICAgICAgICAgIHJlc29sdmUoZG9jKTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9O1xuICAgICAgICAgICAgc3Vic2NyaXB0aW9uID0gdGhpcy5zdWJzY3JpYmUoZmlsdGVyLCByZXN1bHQsIChjaGFuZ2UsIGRvYykgPT4ge1xuICAgICAgICAgICAgICAgIGRvUmVzb2x2ZShkb2MpO1xuICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICBpbnRlcnZhbCA9IHNldEludGVydmFsKCgpID0+IHtcbiAgICAgICAgICAgICAgICAoYXN5bmMgKCkgPT4ge1xuICAgICAgICAgICAgICAgICAgICBjb25zdCBleGlzdGluZyA9IGF3YWl0IHRoaXMucXVlcnkoZmlsdGVyLCByZXN1bHQpO1xuICAgICAgICAgICAgICAgICAgICBpZiAoZXhpc3RpbmcubGVuZ3RoID4gMCkge1xuICAgICAgICAgICAgICAgICAgICAgICAgZG9SZXNvbHZlKGV4aXN0aW5nWzBdKTtcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIH0pKCk7XG4gICAgICAgICAgICB9LCAxMDAwKTtcbiAgICAgICAgfSk7XG4gICAgfVxufVxuXG5UT05RdWVyaWVzTW9kdWxlLm1vZHVsZU5hbWUgPSAnVE9OUXVlcmllc01vZHVsZSc7XG4iXX0=