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
        var config, configData, clientPlatform, cache, httpLink, wsLink, link, defaultOptions, client;
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
                cache = new _apolloCacheInmemory.InMemoryCache();
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

              case 16:
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
                this.client.stop();

              case 1:
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy9tb2R1bGVzL1RPTlF1ZXJpZXNNb2R1bGUuanMiXSwibmFtZXMiOlsiVE9OUXVlcmllc01vZHVsZSIsImNvbnRleHQiLCJjb25maWciLCJnZXRNb2R1bGUiLCJUT05Db25maWdNb2R1bGUiLCJjb25maWdEYXRhIiwiZGF0YSIsImNsaWVudFBsYXRmb3JtIiwiVE9OQ2xpZW50IiwiRXJyb3IiLCJjYWNoZSIsIkluTWVtb3J5Q2FjaGUiLCJodHRwTGluayIsIkh0dHBMaW5rIiwidXJpIiwicXVlcmllc0h0dHBVcmwiLCJmZXRjaCIsIndzTGluayIsIldlYlNvY2tldExpbmsiLCJxdWVyaWVzV3NVcmwiLCJvcHRpb25zIiwicmVjb25uZWN0Iiwid2ViU29ja2V0SW1wbCIsIldlYlNvY2tldCIsImxpbmsiLCJxdWVyeSIsImRlZmluaXRpb24iLCJraW5kIiwib3BlcmF0aW9uIiwiZGVmYXVsdE9wdGlvbnMiLCJ3YXRjaFF1ZXJ5IiwiZmV0Y2hQb2xpY3kiLCJjbGllbnQiLCJBcG9sbG9DbGllbnQiLCJ0cmFuc2FjdGlvbnMiLCJUT05RQ29sbGVjdGlvbiIsIm1lc3NhZ2VzIiwiYmxvY2tzIiwiYWNjb3VudHMiLCJzdG9wIiwiYmluZFZhcnMiLCJncWxRdWVyeSIsIkpTT04iLCJ2YXJpYWJsZXMiLCJiaW5kVmFyc0pzb24iLCJzdHJpbmdpZnkiLCJzZWxlY3QiLCJwYXJzZSIsIlRPTk1vZHVsZSIsImNvbGxlY3Rpb25OYW1lIiwidHlwZU5hbWUiLCJzdWJzdHIiLCJ0b1VwcGVyQ2FzZSIsImxlbmd0aCIsImZpbHRlciIsInJlc3VsdCIsIm9yZGVyQnkiLCJsaW1pdCIsImMiLCJ0IiwicWwiLCJvbkRvY0V2ZW50IiwidGV4dCIsIm9ic2VydmFibGUiLCJzdWJzY3JpYmUiLCJzdWJzY3JpcHRpb24iLCJuZXh0IiwibWVzc2FnZSIsInVuc3Vic2NyaWJlIiwiZXhpc3RpbmciLCJQcm9taXNlIiwicmVzb2x2ZSIsImludGVydmFsIiwiZG9SZXNvbHZlIiwiZG9jIiwiY2xlYXJJbnRlcnZhbCIsImNoYW5nZSIsInNldEludGVydmFsIiwibW9kdWxlTmFtZSJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQ0E7O0FBQ0E7O0FBQ0E7O0FBQ0E7O0FBQ0E7O0FBQ0E7O0FBQ0E7O0FBQ0E7O0FBQ0E7O0FBQ0E7O0lBT3FCQSxnQjs7Ozs7QUFDakIsNEJBQVlDLE9BQVosRUFBdUM7QUFBQTs7QUFBQTtBQUNuQyw0SEFBTUEsT0FBTjtBQURtQztBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFFdEM7Ozs7Ozs7Ozs7Ozs7QUFHU0MsZ0JBQUFBLE0sR0FBMEIsS0FBS0QsT0FBTCxDQUFhRSxTQUFiLENBQXVCQywyQkFBdkIsQztBQUMxQkMsZ0JBQUFBLFUsR0FBYUgsTUFBTSxDQUFDSSxJO0FBQ2xCQyxnQkFBQUEsYyxHQUFtQkMsb0IsQ0FBbkJELGM7O3NCQUNKLENBQUNGLFVBQUQsSUFBZSxDQUFDRSxjOzs7OztzQkFDVkUsS0FBSyxDQUFDLDZCQUFELEM7OztBQUVUQyxnQkFBQUEsSyxHQUFRLElBQUlDLGtDQUFKLEU7QUFFUkMsZ0JBQUFBLFEsR0FBVyxJQUFJQyx3QkFBSixDQUFhO0FBQzFCQyxrQkFBQUEsR0FBRyxFQUFFWixNQUFNLENBQUNhLGNBQVAsRUFEcUI7QUFFMUJDLGtCQUFBQSxLQUFLLEVBQUVULGNBQWMsQ0FBQ1M7QUFGSSxpQkFBYixDO0FBS1hDLGdCQUFBQSxNLEdBQVMsSUFBSUMsMkJBQUosQ0FBa0I7QUFDN0JKLGtCQUFBQSxHQUFHLEVBQUVaLE1BQU0sQ0FBQ2lCLFlBQVAsRUFEd0I7QUFFN0JDLGtCQUFBQSxPQUFPLEVBQUU7QUFDTEMsb0JBQUFBLFNBQVMsRUFBRTtBQUROLG1CQUZvQjtBQUs3QkMsa0JBQUFBLGFBQWEsRUFBRWYsY0FBYyxDQUFDZ0I7QUFMRCxpQkFBbEIsQztBQVFUQyxnQkFBQUEsSSxHQUFPLHVCQUNULGdCQUFlO0FBQUEsc0JBQVpDLEtBQVksUUFBWkEsS0FBWTtBQUNYLHNCQUFNQyxVQUFVLEdBQUcsd0NBQWtCRCxLQUFsQixDQUFuQjtBQUNBLHlCQUNJQyxVQUFVLENBQUNDLElBQVgsS0FBb0IscUJBQXBCLElBQ0dELFVBQVUsQ0FBQ0UsU0FBWCxLQUF5QixjQUZoQztBQUlILGlCQVBRLEVBUVRYLE1BUlMsRUFTVEwsUUFUUyxDO0FBWVBpQixnQkFBQUEsYyxHQUFpQjtBQUNuQkMsa0JBQUFBLFVBQVUsRUFBRTtBQUNSQyxvQkFBQUEsV0FBVyxFQUFFO0FBREwsbUJBRE87QUFJbkJOLGtCQUFBQSxLQUFLLEVBQUU7QUFDSE0sb0JBQUFBLFdBQVcsRUFBRTtBQURWO0FBSlksaUI7QUFTakJDLGdCQUFBQSxNLEdBQVMsSUFBSUMsMEJBQUosQ0FBaUI7QUFDNUJ2QixrQkFBQUEsS0FBSyxFQUFMQSxLQUQ0QjtBQUU1QmMsa0JBQUFBLElBQUksRUFBSkEsSUFGNEI7QUFHNUJLLGtCQUFBQSxjQUFjLEVBQWRBO0FBSDRCLGlCQUFqQixDO0FBS2YscUJBQUtHLE1BQUwsR0FBY0EsTUFBZDtBQUNBLHFCQUFLRSxZQUFMLEdBQW9CLElBQUlDLGNBQUosQ0FBbUJILE1BQW5CLEVBQTJCLGNBQTNCLENBQXBCO0FBQ0EscUJBQUtJLFFBQUwsR0FBZ0IsSUFBSUQsY0FBSixDQUFtQkgsTUFBbkIsRUFBMkIsVUFBM0IsQ0FBaEI7QUFDQSxxQkFBS0ssTUFBTCxHQUFjLElBQUlGLGNBQUosQ0FBbUJILE1BQW5CLEVBQTJCLFFBQTNCLENBQWQ7QUFDQSxxQkFBS00sUUFBTCxHQUFnQixJQUFJSCxjQUFKLENBQW1CSCxNQUFuQixFQUEyQixVQUEzQixDQUFoQjs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFJQSxxQkFBS0EsTUFBTCxDQUFZTyxJQUFaOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7cURBR1NkLEssRUFBZWUsUTs7Ozs7O0FBQ2xCQyxnQkFBQUEsUSxHQUFXLDRCQUFJLHNJQUFKLEM7K0JBR1ZDLEk7O3VCQUFrQixLQUFLVixNQUFMLENBQVlQLEtBQVosQ0FBa0I7QUFDdkNBLGtCQUFBQSxLQUFLLEVBQUVnQixRQURnQztBQUV2Q0Usa0JBQUFBLFNBQVMsRUFBRTtBQUNQbEIsb0JBQUFBLEtBQUssRUFBTEEsS0FETztBQUVQbUIsb0JBQUFBLFlBQVksRUFBRUYsSUFBSSxDQUFDRyxTQUFMLENBQWVMLFFBQWY7QUFGUDtBQUY0QixpQkFBbEIsQzs7OzhDQU1yQmxDLEksQ0FBS3dDLE07K0RBTkdDLEs7Ozs7Ozs7Ozs7Ozs7Ozs7OztFQXBFMEJDLHFCOzs7O0lBZ0d4Q2IsYzs7O0FBTUYsMEJBQVlILE1BQVosRUFBeUJpQixjQUF6QixFQUFpRDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQzdDLFNBQUtqQixNQUFMLEdBQWNBLE1BQWQ7QUFDQSxTQUFLaUIsY0FBTCxHQUFzQkEsY0FBdEI7QUFDQSxTQUFLQyxRQUFMLEdBQWdCRCxjQUFjLENBQUNFLE1BQWYsQ0FBc0IsQ0FBdEIsRUFBeUIsQ0FBekIsRUFBNEJDLFdBQTVCLEtBQ1pILGNBQWMsQ0FBQ0UsTUFBZixDQUFzQixDQUF0QixFQUF5QkYsY0FBYyxDQUFDSSxNQUFmLEdBQXdCLENBQWpELENBREo7QUFFSDs7Ozs7OztxREFHV0MsTSxFQUFhQyxNLEVBQWdCQyxPLEVBQXFCQyxLOzs7Ozs7QUFDcERDLGdCQUFBQSxDLEdBQUksS0FBS1QsYztBQUNUVSxnQkFBQUEsQyxHQUFJLEtBQUtULFE7QUFDVFUsZ0JBQUFBLEUsbUJBQWNGLEMsdUJBQWNDLEMsMkVBQzVCRCxDLG1FQUEwREgsTTtBQUUxRDlCLGdCQUFBQSxLLEdBQVEsNEJBQUksQ0FBQ21DLEVBQUQsQ0FBSixDOzt1QkFDQSxLQUFLNUIsTUFBTCxDQUFZUCxLQUFaLENBQWtCO0FBQzVCQSxrQkFBQUEsS0FBSyxFQUFMQSxLQUQ0QjtBQUU1QmtCLGtCQUFBQSxTQUFTLEVBQUU7QUFDUFcsb0JBQUFBLE1BQU0sRUFBTkEsTUFETztBQUVQRSxvQkFBQUEsT0FBTyxFQUFQQSxPQUZPO0FBR1BDLG9CQUFBQSxLQUFLLEVBQUxBO0FBSE87QUFGaUIsaUJBQWxCLEM7OzsrQkFPTEMsQztpRUFBTHBELEk7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs4QkFJRWdELE0sRUFBYUMsTSxFQUFnQk0sVSxFQUFvQztBQUFBOztBQUN2RSxVQUFNQyxJQUFJLDBCQUFtQixLQUFLYixjQUF4Qix1QkFBbUQsS0FBS0MsUUFBeEQsa0NBQ1AsS0FBS0QsY0FERSxpQ0FDbUNNLE1BRG5DLGtCQUFWO0FBR0EsVUFBTTlCLEtBQUssR0FBRyw0QkFBSSxDQUFDcUMsSUFBRCxDQUFKLENBQWQ7QUFDQSxVQUFNQyxVQUFVLEdBQUcsS0FBSy9CLE1BQUwsQ0FBWWdDLFNBQVosQ0FBc0I7QUFDckN2QyxRQUFBQSxLQUFLLEVBQUxBLEtBRHFDO0FBRXJDa0IsUUFBQUEsU0FBUyxFQUFFO0FBQ1BXLFVBQUFBLE1BQU0sRUFBTkE7QUFETztBQUYwQixPQUF0QixDQUFuQjtBQU1BLFVBQU1XLFlBQVksR0FBR0YsVUFBVSxDQUFDQyxTQUFYLENBQXFCO0FBQ3RDRSxRQUFBQSxJQUFJLEVBQUUsY0FBQ0MsT0FBRCxFQUFhO0FBQ2ZOLFVBQUFBLFVBQVUsQ0FBQyxlQUFELEVBQWtCTSxPQUFPLENBQUM3RCxJQUFSLENBQWEsTUFBSSxDQUFDMkMsY0FBbEIsQ0FBbEIsQ0FBVjtBQUNIO0FBSHFDLE9BQXJCLENBQXJCO0FBS0EsYUFBTztBQUNIbUIsUUFBQUEsV0FBVyxFQUFFLHVCQUFNO0FBQ2ZILFVBQUFBLFlBQVksQ0FBQ0csV0FBYjtBQUNIO0FBSEUsT0FBUDtBQUtIOzs7Ozs7cURBRWFkLE0sRUFBYUMsTTs7Ozs7Ozs7O3VCQUNBLEtBQUs5QixLQUFMLENBQVc2QixNQUFYLEVBQW1CQyxNQUFuQixDOzs7QUFBakJjLGdCQUFBQSxROztzQkFDRkEsUUFBUSxDQUFDaEIsTUFBVCxHQUFrQixDOzs7OztrREFDWGdCLFFBQVEsQ0FBQyxDQUFELEM7OztrREFFWixJQUFJQyxPQUFKLENBQVksVUFBQ0MsT0FBRCxFQUFhO0FBQzVCLHNCQUFJTixZQUFpQixHQUFHLElBQXhCO0FBQ0Esc0JBQUlPLFFBQWEsR0FBRyxJQUFwQjs7QUFDQSxzQkFBTUMsU0FBUyxHQUFHLFNBQVpBLFNBQVksQ0FBQ0MsR0FBRCxFQUFTO0FBQ3ZCLHdCQUFJRixRQUFKLEVBQWM7QUFDVkcsc0JBQUFBLGFBQWEsQ0FBQ0gsUUFBRCxDQUFiO0FBQ0FBLHNCQUFBQSxRQUFRLEdBQUcsSUFBWDtBQUNIOztBQUNELHdCQUFJUCxZQUFKLEVBQWtCO0FBQ2RBLHNCQUFBQSxZQUFZLENBQUNHLFdBQWI7QUFDQUgsc0JBQUFBLFlBQVksR0FBRyxJQUFmO0FBQ0FNLHNCQUFBQSxPQUFPLENBQUNHLEdBQUQsQ0FBUDtBQUNIO0FBQ0osbUJBVkQ7O0FBV0FULGtCQUFBQSxZQUFZLEdBQUcsTUFBSSxDQUFDRCxTQUFMLENBQWVWLE1BQWYsRUFBdUJDLE1BQXZCLEVBQStCLFVBQUNxQixNQUFELEVBQVNGLEdBQVQsRUFBaUI7QUFDM0RELG9CQUFBQSxTQUFTLENBQUNDLEdBQUQsQ0FBVDtBQUNILG1CQUZjLENBQWY7QUFHQUYsa0JBQUFBLFFBQVEsR0FBR0ssV0FBVyxDQUFDLFlBQU07QUFDekI7QUFBQTtBQUFBLGlEQUFDO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEscUNBQzBCLE1BQUksQ0FBQ3BELEtBQUwsQ0FBVzZCLE1BQVgsRUFBbUJDLE1BQW5CLENBRDFCOztBQUFBO0FBQ1NjLDhCQUFBQSxRQURUOztBQUVHLGtDQUFJQSxRQUFRLENBQUNoQixNQUFULEdBQWtCLENBQXRCLEVBQXlCO0FBQ3JCb0IsZ0NBQUFBLFNBQVMsQ0FBQ0osUUFBUSxDQUFDLENBQUQsQ0FBVCxDQUFUO0FBQ0g7O0FBSko7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEscUJBQUQ7QUFNSCxtQkFQcUIsRUFPbkIsSUFQbUIsQ0FBdEI7QUFRSCxpQkF6Qk0sQzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUE2QmZyRSxnQkFBZ0IsQ0FBQzhFLFVBQWpCLEdBQThCLGtCQUE5QiIsInNvdXJjZXNDb250ZW50IjpbIi8vIEBmbG93XG5pbXBvcnQgeyBBcG9sbG9DbGllbnQgfSBmcm9tICdhcG9sbG8tY2xpZW50JztcbmltcG9ydCB7IEluTWVtb3J5Q2FjaGUgfSBmcm9tICdhcG9sbG8tY2FjaGUtaW5tZW1vcnknO1xuaW1wb3J0IHsgSHR0cExpbmsgfSBmcm9tICdhcG9sbG8tbGluay1odHRwJztcbmltcG9ydCB7IFdlYlNvY2tldExpbmsgfSBmcm9tICdhcG9sbG8tbGluay13cyc7XG5pbXBvcnQgeyBzcGxpdCB9IGZyb20gJ2Fwb2xsby1saW5rJztcbmltcG9ydCB7IGdldE1haW5EZWZpbml0aW9uIH0gZnJvbSAnYXBvbGxvLXV0aWxpdGllcyc7XG5pbXBvcnQgZ3FsIGZyb20gJ2dyYXBocWwtdGFnJztcbmltcG9ydCBUT05Db25maWdNb2R1bGUgZnJvbSAnLi9UT05Db25maWdNb2R1bGUnO1xuaW1wb3J0IHsgVE9OQ2xpZW50IH0gZnJvbSAnLi4vVE9OQ2xpZW50JztcbmltcG9ydCB7IFRPTk1vZHVsZSB9IGZyb20gJy4uL1RPTk1vZHVsZSc7XG5pbXBvcnQgdHlwZSB7IFRPTk1vZHVsZUNvbnRleHQgfSBmcm9tICcuLi9UT05Nb2R1bGUnO1xuXG50eXBlIFN1YnNjcmlwdGlvbiA9IHtcbiAgICB1bnN1YnNjcmliZTogKCkgPT4gdm9pZFxufVxuXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBUT05RdWVyaWVzTW9kdWxlIGV4dGVuZHMgVE9OTW9kdWxlIHtcbiAgICBjb25zdHJ1Y3Rvcihjb250ZXh0OiBUT05Nb2R1bGVDb250ZXh0KSB7XG4gICAgICAgIHN1cGVyKGNvbnRleHQpO1xuICAgIH1cblxuICAgIGFzeW5jIHNldHVwKCkge1xuICAgICAgICBjb25zdCBjb25maWc6IFRPTkNvbmZpZ01vZHVsZSA9IHRoaXMuY29udGV4dC5nZXRNb2R1bGUoVE9OQ29uZmlnTW9kdWxlKTtcbiAgICAgICAgY29uc3QgY29uZmlnRGF0YSA9IGNvbmZpZy5kYXRhO1xuICAgICAgICBjb25zdCB7IGNsaWVudFBsYXRmb3JtIH0gPSBUT05DbGllbnQ7XG4gICAgICAgIGlmICghY29uZmlnRGF0YSB8fCAhY2xpZW50UGxhdGZvcm0pIHtcbiAgICAgICAgICAgIHRocm93IEVycm9yKCdUT04gU0RLIGRvZXMgbm90IGNvbmZpZ3VyZWQnKTtcbiAgICAgICAgfVxuICAgICAgICBjb25zdCBjYWNoZSA9IG5ldyBJbk1lbW9yeUNhY2hlKCk7XG5cbiAgICAgICAgY29uc3QgaHR0cExpbmsgPSBuZXcgSHR0cExpbmsoe1xuICAgICAgICAgICAgdXJpOiBjb25maWcucXVlcmllc0h0dHBVcmwoKSxcbiAgICAgICAgICAgIGZldGNoOiBjbGllbnRQbGF0Zm9ybS5mZXRjaCxcbiAgICAgICAgfSk7XG5cbiAgICAgICAgY29uc3Qgd3NMaW5rID0gbmV3IFdlYlNvY2tldExpbmsoe1xuICAgICAgICAgICAgdXJpOiBjb25maWcucXVlcmllc1dzVXJsKCksXG4gICAgICAgICAgICBvcHRpb25zOiB7XG4gICAgICAgICAgICAgICAgcmVjb25uZWN0OiB0cnVlLFxuICAgICAgICAgICAgfSxcbiAgICAgICAgICAgIHdlYlNvY2tldEltcGw6IGNsaWVudFBsYXRmb3JtLldlYlNvY2tldCxcbiAgICAgICAgfSk7XG5cbiAgICAgICAgY29uc3QgbGluayA9IHNwbGl0KFxuICAgICAgICAgICAgKHsgcXVlcnkgfSkgPT4ge1xuICAgICAgICAgICAgICAgIGNvbnN0IGRlZmluaXRpb24gPSBnZXRNYWluRGVmaW5pdGlvbihxdWVyeSk7XG4gICAgICAgICAgICAgICAgcmV0dXJuIChcbiAgICAgICAgICAgICAgICAgICAgZGVmaW5pdGlvbi5raW5kID09PSAnT3BlcmF0aW9uRGVmaW5pdGlvbidcbiAgICAgICAgICAgICAgICAgICAgJiYgZGVmaW5pdGlvbi5vcGVyYXRpb24gPT09ICdzdWJzY3JpcHRpb24nXG4gICAgICAgICAgICAgICAgKTtcbiAgICAgICAgICAgIH0sXG4gICAgICAgICAgICB3c0xpbmssXG4gICAgICAgICAgICBodHRwTGluayxcbiAgICAgICAgKTtcblxuICAgICAgICBjb25zdCBkZWZhdWx0T3B0aW9ucyA9IHtcbiAgICAgICAgICAgIHdhdGNoUXVlcnk6IHtcbiAgICAgICAgICAgICAgICBmZXRjaFBvbGljeTogJ25vLWNhY2hlJyxcbiAgICAgICAgICAgIH0sXG4gICAgICAgICAgICBxdWVyeToge1xuICAgICAgICAgICAgICAgIGZldGNoUG9saWN5OiAnbm8tY2FjaGUnLFxuICAgICAgICAgICAgfSxcbiAgICAgICAgfTtcblxuICAgICAgICBjb25zdCBjbGllbnQgPSBuZXcgQXBvbGxvQ2xpZW50KHtcbiAgICAgICAgICAgIGNhY2hlLFxuICAgICAgICAgICAgbGluayxcbiAgICAgICAgICAgIGRlZmF1bHRPcHRpb25zLFxuICAgICAgICB9KTtcbiAgICAgICAgdGhpcy5jbGllbnQgPSBjbGllbnQ7XG4gICAgICAgIHRoaXMudHJhbnNhY3Rpb25zID0gbmV3IFRPTlFDb2xsZWN0aW9uKGNsaWVudCwgJ3RyYW5zYWN0aW9ucycpO1xuICAgICAgICB0aGlzLm1lc3NhZ2VzID0gbmV3IFRPTlFDb2xsZWN0aW9uKGNsaWVudCwgJ21lc3NhZ2VzJyk7XG4gICAgICAgIHRoaXMuYmxvY2tzID0gbmV3IFRPTlFDb2xsZWN0aW9uKGNsaWVudCwgJ2Jsb2NrcycpO1xuICAgICAgICB0aGlzLmFjY291bnRzID0gbmV3IFRPTlFDb2xsZWN0aW9uKGNsaWVudCwgJ2FjY291bnRzJyk7XG4gICAgfVxuXG4gICAgYXN5bmMgY2xvc2UoKSB7XG4gICAgICAgIHRoaXMuY2xpZW50LnN0b3AoKTtcbiAgICB9XG5cbiAgICBhc3luYyBzZWxlY3QocXVlcnk6IHN0cmluZywgYmluZFZhcnM6IHt9KSB7XG4gICAgICAgIGNvbnN0IGdxbFF1ZXJ5ID0gZ3FsKFtgcXVlcnkgc2VsZWN0KCRxdWVyeTogU3RyaW5nISwgJGJpbmRWYXJzSnNvbjogU3RyaW5nISkge1xuICAgICAgICAgICAgc2VsZWN0KHF1ZXJ5OiAkcXVlcnksIGJpbmRWYXJzSnNvbjogJGJpbmRWYXJzSnNvbilcbiAgICAgICAgfWBdKTtcbiAgICAgICAgcmV0dXJuIEpTT04ucGFyc2UoKGF3YWl0IHRoaXMuY2xpZW50LnF1ZXJ5KHtcbiAgICAgICAgICAgIHF1ZXJ5OiBncWxRdWVyeSxcbiAgICAgICAgICAgIHZhcmlhYmxlczoge1xuICAgICAgICAgICAgICAgIHF1ZXJ5LFxuICAgICAgICAgICAgICAgIGJpbmRWYXJzSnNvbjogSlNPTi5zdHJpbmdpZnkoYmluZFZhcnMpLFxuICAgICAgICAgICAgfSxcbiAgICAgICAgfSkpLmRhdGEuc2VsZWN0KTtcbiAgICB9XG5cbiAgICB0cmFuc2FjdGlvbnM6IFRPTlFDb2xsZWN0aW9uO1xuXG4gICAgbWVzc2FnZXM6IFRPTlFDb2xsZWN0aW9uO1xuXG4gICAgYmxvY2tzOiBUT05RQ29sbGVjdGlvbjtcblxuICAgIGFjY291bnRzOiBUT05RQ29sbGVjdGlvbjtcblxuICAgIGNsaWVudDogYW55O1xufVxuXG5cbnR5cGUgRG9jRXZlbnQgPSAoY2hhbmdlVHlwZTogc3RyaW5nLCBkb2M6IGFueSkgPT4gdm9pZDtcblxudHlwZSBPcmRlckJ5ID0ge1xuICAgIHBhdGg6IHN0cmluZyxcbiAgICBzb3J0OiAnQVNDJyB8ICdERVNDJ1xufVxuXG5jbGFzcyBUT05RQ29sbGVjdGlvbiB7XG4gICAgY2xpZW50OiBhbnk7XG5cbiAgICBjb2xsZWN0aW9uTmFtZTogc3RyaW5nO1xuICAgIHR5cGVOYW1lOiBzdHJpbmc7XG5cbiAgICBjb25zdHJ1Y3RvcihjbGllbnQ6IGFueSwgY29sbGVjdGlvbk5hbWU6IHN0cmluZykge1xuICAgICAgICB0aGlzLmNsaWVudCA9IGNsaWVudDtcbiAgICAgICAgdGhpcy5jb2xsZWN0aW9uTmFtZSA9IGNvbGxlY3Rpb25OYW1lO1xuICAgICAgICB0aGlzLnR5cGVOYW1lID0gY29sbGVjdGlvbk5hbWUuc3Vic3RyKDAsIDEpLnRvVXBwZXJDYXNlKCkgK1xuICAgICAgICAgICAgY29sbGVjdGlvbk5hbWUuc3Vic3RyKDEsIGNvbGxlY3Rpb25OYW1lLmxlbmd0aCAtIDIpO1xuICAgIH1cblxuXG4gICAgYXN5bmMgcXVlcnkoZmlsdGVyOiBhbnksIHJlc3VsdDogc3RyaW5nLCBvcmRlckJ5PzogT3JkZXJCeVtdLCBsaW1pdD86IG51bWJlcik6IFByb21pc2U8YW55PiB7XG4gICAgICAgIGNvbnN0IGMgPSB0aGlzLmNvbGxlY3Rpb25OYW1lO1xuICAgICAgICBjb25zdCB0ID0gdGhpcy50eXBlTmFtZTtcbiAgICAgICAgY29uc3QgcWwgPSBgcXVlcnkgJHtjfSgkZmlsdGVyOiAke3R9RmlsdGVyLCAkb3JkZXJCeTogW1F1ZXJ5T3JkZXJCeV0sICRsaW1pdDogSW50KSB7XG4gICAgICAgICAgICAke2N9KGZpbHRlcjogJGZpbHRlciwgb3JkZXJCeTogJG9yZGVyQnksIGxpbWl0OiAkbGltaXQpIHsgJHtyZXN1bHR9IH1cbiAgICAgICAgfWA7XG4gICAgICAgIGNvbnN0IHF1ZXJ5ID0gZ3FsKFtxbF0pO1xuICAgICAgICByZXR1cm4gKGF3YWl0IHRoaXMuY2xpZW50LnF1ZXJ5KHtcbiAgICAgICAgICAgIHF1ZXJ5LFxuICAgICAgICAgICAgdmFyaWFibGVzOiB7XG4gICAgICAgICAgICAgICAgZmlsdGVyLFxuICAgICAgICAgICAgICAgIG9yZGVyQnksXG4gICAgICAgICAgICAgICAgbGltaXRcbiAgICAgICAgICAgIH0sXG4gICAgICAgIH0pKS5kYXRhW2NdO1xuICAgIH1cblxuXG4gICAgc3Vic2NyaWJlKGZpbHRlcjogYW55LCByZXN1bHQ6IHN0cmluZywgb25Eb2NFdmVudDogRG9jRXZlbnQpOiBTdWJzY3JpcHRpb24ge1xuICAgICAgICBjb25zdCB0ZXh0ID0gYHN1YnNjcmlwdGlvbiAke3RoaXMuY29sbGVjdGlvbk5hbWV9KCRmaWx0ZXI6ICR7dGhpcy50eXBlTmFtZX1GaWx0ZXIpIHtcbiAgICAgICAgXHQke3RoaXMuY29sbGVjdGlvbk5hbWV9KGZpbHRlcjogJGZpbHRlcikgeyAke3Jlc3VsdH0gfVxuICAgICAgICB9YDtcbiAgICAgICAgY29uc3QgcXVlcnkgPSBncWwoW3RleHRdKTtcbiAgICAgICAgY29uc3Qgb2JzZXJ2YWJsZSA9IHRoaXMuY2xpZW50LnN1YnNjcmliZSh7XG4gICAgICAgICAgICBxdWVyeSxcbiAgICAgICAgICAgIHZhcmlhYmxlczoge1xuICAgICAgICAgICAgICAgIGZpbHRlcixcbiAgICAgICAgICAgIH0sXG4gICAgICAgIH0pO1xuICAgICAgICBjb25zdCBzdWJzY3JpcHRpb24gPSBvYnNlcnZhYmxlLnN1YnNjcmliZSh7XG4gICAgICAgICAgICBuZXh0OiAobWVzc2FnZSkgPT4ge1xuICAgICAgICAgICAgICAgIG9uRG9jRXZlbnQoJ2luc2VydC91cGRhdGUnLCBtZXNzYWdlLmRhdGFbdGhpcy5jb2xsZWN0aW9uTmFtZV0pO1xuICAgICAgICAgICAgfSxcbiAgICAgICAgfSk7XG4gICAgICAgIHJldHVybiB7XG4gICAgICAgICAgICB1bnN1YnNjcmliZTogKCkgPT4ge1xuICAgICAgICAgICAgICAgIHN1YnNjcmlwdGlvbi51bnN1YnNjcmliZSgpO1xuICAgICAgICAgICAgfSxcbiAgICAgICAgfTtcbiAgICB9XG5cbiAgICBhc3luYyB3YWl0Rm9yKGZpbHRlcjogYW55LCByZXN1bHQ6IHN0cmluZyk6IFByb21pc2U8YW55PiB7XG4gICAgICAgIGNvbnN0IGV4aXN0aW5nID0gYXdhaXQgdGhpcy5xdWVyeShmaWx0ZXIsIHJlc3VsdCk7XG4gICAgICAgIGlmIChleGlzdGluZy5sZW5ndGggPiAwKSB7XG4gICAgICAgICAgICByZXR1cm4gZXhpc3RpbmdbMF07XG4gICAgICAgIH1cbiAgICAgICAgcmV0dXJuIG5ldyBQcm9taXNlKChyZXNvbHZlKSA9PiB7XG4gICAgICAgICAgICBsZXQgc3Vic2NyaXB0aW9uOiBhbnkgPSBudWxsO1xuICAgICAgICAgICAgbGV0IGludGVydmFsOiBhbnkgPSBudWxsO1xuICAgICAgICAgICAgY29uc3QgZG9SZXNvbHZlID0gKGRvYykgPT4ge1xuICAgICAgICAgICAgICAgIGlmIChpbnRlcnZhbCkge1xuICAgICAgICAgICAgICAgICAgICBjbGVhckludGVydmFsKGludGVydmFsKTtcbiAgICAgICAgICAgICAgICAgICAgaW50ZXJ2YWwgPSBudWxsO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICBpZiAoc3Vic2NyaXB0aW9uKSB7XG4gICAgICAgICAgICAgICAgICAgIHN1YnNjcmlwdGlvbi51bnN1YnNjcmliZSgpO1xuICAgICAgICAgICAgICAgICAgICBzdWJzY3JpcHRpb24gPSBudWxsO1xuICAgICAgICAgICAgICAgICAgICByZXNvbHZlKGRvYyk7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfTtcbiAgICAgICAgICAgIHN1YnNjcmlwdGlvbiA9IHRoaXMuc3Vic2NyaWJlKGZpbHRlciwgcmVzdWx0LCAoY2hhbmdlLCBkb2MpID0+IHtcbiAgICAgICAgICAgICAgICBkb1Jlc29sdmUoZG9jKTtcbiAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgaW50ZXJ2YWwgPSBzZXRJbnRlcnZhbCgoKSA9PiB7XG4gICAgICAgICAgICAgICAgKGFzeW5jICgpID0+IHtcbiAgICAgICAgICAgICAgICAgICAgY29uc3QgZXhpc3RpbmcgPSBhd2FpdCB0aGlzLnF1ZXJ5KGZpbHRlciwgcmVzdWx0KTtcbiAgICAgICAgICAgICAgICAgICAgaWYgKGV4aXN0aW5nLmxlbmd0aCA+IDApIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIGRvUmVzb2x2ZShleGlzdGluZ1swXSk7XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICB9KSgpO1xuICAgICAgICAgICAgfSwgMTAwMCk7XG4gICAgICAgIH0pO1xuICAgIH1cbn1cblxuVE9OUXVlcmllc01vZHVsZS5tb2R1bGVOYW1lID0gJ1RPTlF1ZXJpZXNNb2R1bGUnO1xuIl19