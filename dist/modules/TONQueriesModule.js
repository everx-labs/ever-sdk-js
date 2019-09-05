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

var _TONClient = _interopRequireDefault(require("../TONClient"));

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
                clientPlatform = _TONClient["default"].clientPlatform;

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy9tb2R1bGVzL1RPTlF1ZXJpZXNNb2R1bGUuanMiXSwibmFtZXMiOlsiVE9OUXVlcmllc01vZHVsZSIsImNvbnRleHQiLCJjb25maWciLCJnZXRNb2R1bGUiLCJUT05Db25maWdNb2R1bGUiLCJjb25maWdEYXRhIiwiZGF0YSIsImNsaWVudFBsYXRmb3JtIiwiVE9OQ2xpZW50IiwiRXJyb3IiLCJjYWNoZSIsIkluTWVtb3J5Q2FjaGUiLCJodHRwTGluayIsIkh0dHBMaW5rIiwidXJpIiwicXVlcmllc0h0dHBVcmwiLCJmZXRjaCIsIndzTGluayIsIldlYlNvY2tldExpbmsiLCJxdWVyaWVzV3NVcmwiLCJvcHRpb25zIiwicmVjb25uZWN0Iiwid2ViU29ja2V0SW1wbCIsIldlYlNvY2tldCIsImxpbmsiLCJxdWVyeSIsImRlZmluaXRpb24iLCJraW5kIiwib3BlcmF0aW9uIiwiZGVmYXVsdE9wdGlvbnMiLCJ3YXRjaFF1ZXJ5IiwiZmV0Y2hQb2xpY3kiLCJjbGllbnQiLCJBcG9sbG9DbGllbnQiLCJ0cmFuc2FjdGlvbnMiLCJUT05RQ29sbGVjdGlvbiIsIm1lc3NhZ2VzIiwiYmxvY2tzIiwiYWNjb3VudHMiLCJzdG9wIiwiYmluZFZhcnMiLCJncWxRdWVyeSIsIkpTT04iLCJ2YXJpYWJsZXMiLCJiaW5kVmFyc0pzb24iLCJzdHJpbmdpZnkiLCJzZWxlY3QiLCJwYXJzZSIsIlRPTk1vZHVsZSIsImNvbGxlY3Rpb25OYW1lIiwidHlwZU5hbWUiLCJzdWJzdHIiLCJ0b1VwcGVyQ2FzZSIsImxlbmd0aCIsImZpbHRlciIsInJlc3VsdCIsIm9yZGVyQnkiLCJsaW1pdCIsImMiLCJ0IiwicWwiLCJvbkRvY0V2ZW50IiwidGV4dCIsIm9ic2VydmFibGUiLCJzdWJzY3JpYmUiLCJzdWJzY3JpcHRpb24iLCJuZXh0IiwibWVzc2FnZSIsInVuc3Vic2NyaWJlIiwiZXhpc3RpbmciLCJQcm9taXNlIiwicmVzb2x2ZSIsImludGVydmFsIiwiZG9SZXNvbHZl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Y2xpZW50JztcbmltcG9ydCB7IEluTWVtb3J5Q2FjaGUgfSBmcm9tICdhcG9sbG8tY2FjaGUtaW5tZW1vcnknO1xuaW1wb3J0IHsgSHR0cExpbmsgfSBmcm9tICdhcG9sbG8tbGluay1odHRwJztcbmltcG9ydCB7IFdlYlNvY2tldExpbmsgfSBmcm9tICdhcG9sbG8tbGluay13cyc7XG5pbXBvcnQgeyBzcGxpdCB9IGZyb20gJ2Fwb2xsby1saW5rJztcbmltcG9ydCB7IGdldE1haW5EZWZpbml0aW9uIH0gZnJvbSAnYXBvbGxvLXV0aWxpdGllcyc7XG5pbXBvcnQgZ3FsIGZyb20gJ2dyYXBocWwtdGFnJztcbmltcG9ydCBUT05Db25maWdNb2R1bGUgZnJvbSAnLi9UT05Db25maWdNb2R1bGUnO1xuaW1wb3J0IFRPTkNsaWVudCBmcm9tICcuLi9UT05DbGllbnQnO1xuaW1wb3J0IHsgVE9OTW9kdWxlIH0gZnJvbSAnLi4vVE9OTW9kdWxlJztcbmltcG9ydCB0eXBlIHsgVE9OTW9kdWxlQ29udGV4dCB9IGZyb20gJy4uL1RPTk1vZHVsZSc7XG5cbnR5cGUgU3Vic2NyaXB0aW9uID0ge1xuICAgIHVuc3Vic2NyaWJlOiAoKSA9PiB2b2lkXG59XG5cbmV4cG9ydCBkZWZhdWx0IGNsYXNzIFRPTlF1ZXJpZXNNb2R1bGUgZXh0ZW5kcyBUT05Nb2R1bGUge1xuICAgIGNvbnN0cnVjdG9yKGNvbnRleHQ6IFRPTk1vZHVsZUNvbnRleHQpIHtcbiAgICAgICAgc3VwZXIoY29udGV4dCk7XG4gICAgfVxuXG4gICAgYXN5bmMgc2V0dXAoKSB7XG4gICAgICAgIGNvbnN0IGNvbmZpZzogVE9OQ29uZmlnTW9kdWxlID0gdGhpcy5jb250ZXh0LmdldE1vZHVsZShUT05Db25maWdNb2R1bGUpO1xuICAgICAgICBjb25zdCBjb25maWdEYXRhID0gY29uZmlnLmRhdGE7XG4gICAgICAgIGNvbnN0IHsgY2xpZW50UGxhdGZvcm0gfSA9IFRPTkNsaWVudDtcbiAgICAgICAgaWYgKCFjb25maWdEYXRhIHx8ICFjbGllbnRQbGF0Zm9ybSkge1xuICAgICAgICAgICAgdGhyb3cgRXJyb3IoJ1RPTiBTREsgZG9lcyBub3QgY29uZmlndXJlZCcpO1xuICAgICAgICB9XG4gICAgICAgIGNvbnN0IGNhY2hlID0gbmV3IEluTWVtb3J5Q2FjaGUoKTtcblxuICAgICAgICBjb25zdCBodHRwTGluayA9IG5ldyBIdHRwTGluayh7XG4gICAgICAgICAgICB1cmk6IGNvbmZpZy5xdWVyaWVzSHR0cFVybCgpLFxuICAgICAgICAgICAgZmV0Y2g6IGNsaWVudFBsYXRmb3JtLmZldGNoLFxuICAgICAgICB9KTtcblxuICAgICAgICBjb25zdCB3c0xpbmsgPSBuZXcgV2ViU29ja2V0TGluayh7XG4gICAgICAgICAgICB1cmk6IGNvbmZpZy5xdWVyaWVzV3NVcmwoKSxcbiAgICAgICAgICAgIG9wdGlvbnM6IHtcbiAgICAgICAgICAgICAgICByZWNvbm5lY3Q6IHRydWUsXG4gICAgICAgICAgICB9LFxuICAgICAgICAgICAgd2ViU29ja2V0SW1wbDogY2xpZW50UGxhdGZvcm0uV2ViU29ja2V0LFxuICAgICAgICB9KTtcblxuICAgICAgICBjb25zdCBsaW5rID0gc3BsaXQoXG4gICAgICAgICAgICAoeyBxdWVyeSB9KSA9PiB7XG4gICAgICAgICAgICAgICAgY29uc3QgZGVmaW5pdGlvbiA9IGdldE1haW5EZWZpbml0aW9uKHF1ZXJ5KTtcbiAgICAgICAgICAgICAgICByZXR1cm4gKFxuICAgICAgICAgICAgICAgICAgICBkZWZpbml0aW9uLmtpbmQgPT09ICdPcGVyYXRpb25EZWZpbml0aW9uJ1xuICAgICAgICAgICAgICAgICAgICAmJiBkZWZpbml0aW9uLm9wZXJhdGlvbiA9PT0gJ3N1YnNjcmlwdGlvbidcbiAgICAgICAgICAgICAgICApO1xuICAgICAgICAgICAgfSxcbiAgICAgICAgICAgIHdzTGluayxcbiAgICAgICAgICAgIGh0dHBMaW5rLFxuICAgICAgICApO1xuXG4gICAgICAgIGNvbnN0IGRlZmF1bHRPcHRpb25zID0ge1xuICAgICAgICAgICAgd2F0Y2hRdWVyeToge1xuICAgICAgICAgICAgICAgIGZldGNoUG9saWN5OiAnbm8tY2FjaGUnLFxuICAgICAgICAgICAgfSxcbiAgICAgICAgICAgIHF1ZXJ5OiB7XG4gICAgICAgICAgICAgICAgZmV0Y2hQb2xpY3k6ICduby1jYWNoZScsXG4gICAgICAgICAgICB9LFxuICAgICAgICB9O1xuXG4gICAgICAgIGNvbnN0IGNsaWVudCA9IG5ldyBBcG9sbG9DbGllbnQoe1xuICAgICAgICAgICAgY2FjaGUsXG4gICAgICAgICAgICBsaW5rLFxuICAgICAgICAgICAgZGVmYXVsdE9wdGlvbnMsXG4gICAgICAgIH0pO1xuICAgICAgICB0aGlzLmNsaWVudCA9IGNsaWVudDtcbiAgICAgICAgdGhpcy50cmFuc2FjdGlvbnMgPSBuZXcgVE9OUUNvbGxlY3Rpb24oY2xpZW50LCAndHJhbnNhY3Rpb25zJyk7XG4gICAgICAgIHRoaXMubWVzc2FnZXMgPSBuZXcgVE9OUUNvbGxlY3Rpb24oY2xpZW50LCAnbWVzc2FnZXMnKTtcbiAgICAgICAgdGhpcy5ibG9ja3MgPSBuZXcgVE9OUUNvbGxlY3Rpb24oY2xpZW50LCAnYmxvY2tzJyk7XG4gICAgICAgIHRoaXMuYWNjb3VudHMgPSBuZXcgVE9OUUNvbGxlY3Rpb24oY2xpZW50LCAnYWNjb3VudHMnKTtcbiAgICB9XG5cbiAgICBhc3luYyBjbG9zZSgpIHtcbiAgICAgICAgdGhpcy5jbGllbnQuc3RvcCgpO1xuICAgIH1cblxuICAgIGFzeW5jIHNlbGVjdChxdWVyeTogc3RyaW5nLCBiaW5kVmFyczoge30pIHtcbiAgICAgICAgY29uc3QgZ3FsUXVlcnkgPSBncWwoW2BxdWVyeSBzZWxlY3QoJHF1ZXJ5OiBTdHJpbmchLCAkYmluZFZhcnNKc29uOiBTdHJpbmchKSB7XG4gICAgICAgICAgICBzZWxlY3QocXVlcnk6ICRxdWVyeSwgYmluZFZhcnNKc29uOiAkYmluZFZhcnNKc29uKVxuICAgICAgICB9YF0pO1xuICAgICAgICByZXR1cm4gSlNPTi5wYXJzZSgoYXdhaXQgdGhpcy5jbGllbnQucXVlcnkoe1xuICAgICAgICAgICAgcXVlcnk6IGdxbFF1ZXJ5LFxuICAgICAgICAgICAgdmFyaWFibGVzOiB7XG4gICAgICAgICAgICAgICAgcXVlcnksXG4gICAgICAgICAgICAgICAgYmluZFZhcnNKc29uOiBKU09OLnN0cmluZ2lmeShiaW5kVmFycyksXG4gICAgICAgICAgICB9LFxuICAgICAgICB9KSkuZGF0YS5zZWxlY3QpO1xuICAgIH1cblxuICAgIHRyYW5zYWN0aW9uczogVE9OUUNvbGxlY3Rpb247XG5cbiAgICBtZXNzYWdlczogVE9OUUNvbGxlY3Rpb247XG5cbiAgICBibG9ja3M6IFRPTlFDb2xsZWN0aW9uO1xuXG4gICAgYWNjb3VudHM6IFRPTlFDb2xsZWN0aW9uO1xuXG4gICAgY2xpZW50OiBhbnk7XG59XG5cblxudHlwZSBEb2NFdmVudCA9IChjaGFuZ2VUeXBlOiBzdHJpbmcsIGRvYzogYW55KSA9PiB2b2lkO1xuXG50eXBlIE9yZGVyQnkgPSB7XG4gICAgcGF0aDogc3RyaW5nLFxuICAgIHNvcnQ6ICdBU0MnIHwgJ0RFU0MnXG59XG5cbmNsYXNzIFRPTlFDb2xsZWN0aW9uIHtcbiAgICBjbGllbnQ6IGFueTtcblxuICAgIGNvbGxlY3Rpb25OYW1lOiBzdHJpbmc7XG4gICAgdHlwZU5hbWU6IHN0cmluZztcblxuICAgIGNvbnN0cnVjdG9yKGNsaWVudDogYW55LCBjb2xsZWN0aW9uTmFtZTogc3RyaW5nKSB7XG4gICAgICAgIHRoaXMuY2xpZW50ID0gY2xpZW50O1xuICAgICAgICB0aGlzLmNvbGxlY3Rpb25OYW1lID0gY29sbGVjdGlvbk5hbWU7XG4gICAgICAgIHRoaXMudHlwZU5hbWUgPSBjb2xsZWN0aW9uTmFtZS5zdWJzdHIoMCwgMSkudG9VcHBlckNhc2UoKSArXG4gICAgICAgICAgICBjb2xsZWN0aW9uTmFtZS5zdWJzdHIoMSwgY29sbGVjdGlvbk5hbWUubGVuZ3RoIC0gMik7XG4gICAgfVxuXG5cbiAgICBhc3luYyBxdWVyeShmaWx0ZXI6IGFueSwgcmVzdWx0OiBzdHJpbmcsIG9yZGVyQnk/OiBPcmRlckJ5W10sIGxpbWl0PzogbnVtYmVyKTogUHJvbWlzZTxhbnk+IHtcbiAgICAgICAgY29uc3QgYyA9IHRoaXMuY29sbGVjdGlvbk5hbWU7XG4gICAgICAgIGNvbnN0IHQgPSB0aGlzLnR5cGVOYW1lO1xuICAgICAgICBjb25zdCBxbCA9IGBxdWVyeSAke2N9KCRmaWx0ZXI6ICR7dH1GaWx0ZXIsICRvcmRlckJ5OiBbUXVlcnlPcmRlckJ5XSwgJGxpbWl0OiBJbnQpIHtcbiAgICAgICAgICAgICR7Y30oZmlsdGVyOiAkZmlsdGVyLCBvcmRlckJ5OiAkb3JkZXJCeSwgbGltaXQ6ICRsaW1pdCkgeyAke3Jlc3VsdH0gfVxuICAgICAgICB9YDtcbiAgICAgICAgY29uc3QgcXVlcnkgPSBncWwoW3FsXSk7XG4gICAgICAgIHJldHVybiAoYXdhaXQgdGhpcy5jbGllbnQucXVlcnkoe1xuICAgICAgICAgICAgcXVlcnksXG4gICAgICAgICAgICB2YXJpYWJsZXM6IHtcbiAgICAgICAgICAgICAgICBmaWx0ZXIsXG4gICAgICAgICAgICAgICAgb3JkZXJCeSxcbiAgICAgICAgICAgICAgICBsaW1pdFxuICAgICAgICAgICAgfSxcbiAgICAgICAgfSkpLmRhdGFbY107XG4gICAgfVxuXG5cbiAgICBzdWJzY3JpYmUoZmlsdGVyOiBhbnksIHJlc3VsdDogc3RyaW5nLCBvbkRvY0V2ZW50OiBEb2NFdmVudCk6IFN1YnNjcmlwdGlvbiB7XG4gICAgICAgIGNvbnN0IHRleHQgPSBgc3Vic2NyaXB0aW9uICR7dGhpcy5jb2xsZWN0aW9uTmFtZX0oJGZpbHRlcjogJHt0aGlzLnR5cGVOYW1lfUZpbHRlcikge1xuICAgICAgICBcdCR7dGhpcy5jb2xsZWN0aW9uTmFtZX0oZmlsdGVyOiAkZmlsdGVyKSB7ICR7cmVzdWx0fSB9XG4gICAgICAgIH1gO1xuICAgICAgICBjb25zdCBxdWVyeSA9IGdxbChbdGV4dF0pO1xuICAgICAgICBjb25zdCBvYnNlcnZhYmxlID0gdGhpcy5jbGllbnQuc3Vic2NyaWJlKHtcbiAgICAgICAgICAgIHF1ZXJ5LFxuICAgICAgICAgICAgdmFyaWFibGVzOiB7XG4gICAgICAgICAgICAgICAgZmlsdGVyLFxuICAgICAgICAgICAgfSxcbiAgICAgICAgfSk7XG4gICAgICAgIGNvbnN0IHN1YnNjcmlwdGlvbiA9IG9ic2VydmFibGUuc3Vic2NyaWJlKHtcbiAgICAgICAgICAgIG5leHQ6IChtZXNzYWdlKSA9PiB7XG4gICAgICAgICAgICAgICAgb25Eb2NFdmVudCgnaW5zZXJ0L3VwZGF0ZScsIG1lc3NhZ2UuZGF0YVt0aGlzLmNvbGxlY3Rpb25OYW1lXSk7XG4gICAgICAgICAgICB9LFxuICAgICAgICB9KTtcbiAgICAgICAgcmV0dXJuIHtcbiAgICAgICAgICAgIHVuc3Vic2NyaWJlOiAoKSA9PiB7XG4gICAgICAgICAgICAgICAgc3Vic2NyaXB0aW9uLnVuc3Vic2NyaWJlKCk7XG4gICAgICAgICAgICB9LFxuICAgICAgICB9O1xuICAgIH1cblxuICAgIGFzeW5jIHdhaXRGb3IoZmlsdGVyOiBhbnksIHJlc3VsdDogc3RyaW5nKTogUHJvbWlzZTxhbnk+IHtcbiAgICAgICAgY29uc3QgZXhpc3RpbmcgPSBhd2FpdCB0aGlzLnF1ZXJ5KGZpbHRlciwgcmVzdWx0KTtcbiAgICAgICAgaWYgKGV4aXN0aW5nLmxlbmd0aCA+IDApIHtcbiAgICAgICAgICAgIHJldHVybiBleGlzdGluZ1swXTtcbiAgICAgICAgfVxuICAgICAgICByZXR1cm4gbmV3IFByb21pc2UoKHJlc29sdmUpID0+IHtcbiAgICAgICAgICAgIGxldCBzdWJzY3JpcHRpb246IGFueSA9IG51bGw7XG4gICAgICAgICAgICBsZXQgaW50ZXJ2YWw6IGFueSA9IG51bGw7XG4gICAgICAgICAgICBjb25zdCBkb1Jlc29sdmUgPSAoZG9jKSA9PiB7XG4gICAgICAgICAgICAgICAgaWYgKGludGVydmFsKSB7XG4gICAgICAgICAgICAgICAgICAgIGNsZWFySW50ZXJ2YWwoaW50ZXJ2YWwpO1xuICAgICAgICAgICAgICAgICAgICBpbnRlcnZhbCA9IG51bGw7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIGlmIChzdWJzY3JpcHRpb24pIHtcbiAgICAgICAgICAgICAgICAgICAgc3Vic2NyaXB0aW9uLnVuc3Vic2NyaWJlKCk7XG4gICAgICAgICAgICAgICAgICAgIHN1YnNjcmlwdGlvbiA9IG51bGw7XG4gICAgICAgICAgICAgICAgICAgIHJlc29sdmUoZG9jKTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9O1xuICAgICAgICAgICAgc3Vic2NyaXB0aW9uID0gdGhpcy5zdWJzY3JpYmUoZmlsdGVyLCByZXN1bHQsIChjaGFuZ2UsIGRvYykgPT4ge1xuICAgICAgICAgICAgICAgIGRvUmVzb2x2ZShkb2MpO1xuICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICBpbnRlcnZhbCA9IHNldEludGVydmFsKCgpID0+IHtcbiAgICAgICAgICAgICAgICAoYXN5bmMgKCkgPT4ge1xuICAgICAgICAgICAgICAgICAgICBjb25zdCBleGlzdGluZyA9IGF3YWl0IHRoaXMucXVlcnkoZmlsdGVyLCByZXN1bHQpO1xuICAgICAgICAgICAgICAgICAgICBpZiAoZXhpc3RpbmcubGVuZ3RoID4gMCkge1xuICAgICAgICAgICAgICAgICAgICAgICAgZG9SZXNvbHZlKGV4aXN0aW5nWzBdKTtcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIH0pKCk7XG4gICAgICAgICAgICB9LCAxMDAwKTtcbiAgICAgICAgfSk7XG4gICAgfVxufVxuXG5UT05RdWVyaWVzTW9kdWxlLm1vZHVsZU5hbWUgPSAnVE9OUXVlcmllc01vZHVsZSc7XG4iXX0=