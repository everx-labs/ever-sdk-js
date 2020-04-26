"use strict";

var _interopRequireWildcard = require("@babel/runtime/helpers/interopRequireWildcard");

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = exports.MAX_TIMEOUT = void 0;

var _regenerator = _interopRequireDefault(require("@babel/runtime/regenerator"));

var _asyncToGenerator2 = _interopRequireDefault(require("@babel/runtime/helpers/asyncToGenerator"));

var _possibleConstructorReturn2 = _interopRequireDefault(require("@babel/runtime/helpers/possibleConstructorReturn"));

var _getPrototypeOf2 = _interopRequireDefault(require("@babel/runtime/helpers/getPrototypeOf"));

var _assertThisInitialized2 = _interopRequireDefault(require("@babel/runtime/helpers/assertThisInitialized"));

var _inherits2 = _interopRequireDefault(require("@babel/runtime/helpers/inherits"));

var _classCallCheck2 = _interopRequireDefault(require("@babel/runtime/helpers/classCallCheck"));

var _createClass2 = _interopRequireDefault(require("@babel/runtime/helpers/createClass"));

var _defineProperty2 = _interopRequireDefault(require("@babel/runtime/helpers/defineProperty"));

var _apolloCacheInmemory = require("apollo-cache-inmemory");

var _apolloClient = require("apollo-client");

var _apolloLink = require("apollo-link");

var _apolloLinkHttp = require("apollo-link-http");

var _apolloLinkWs = require("apollo-link-ws");

var _apolloUtilities = require("apollo-utilities");

var _graphqlTag = _interopRequireDefault(require("graphql-tag"));

var _subscriptionsTransportWs = require("subscriptions-transport-ws");

var _apolloLinkContext = require("apollo-link-context");

var _opentracing = require("opentracing");

var _TONClient = require("../TONClient");

var _TONModule2 = require("../TONModule");

var _TONConfigModule = _interopRequireWildcard(require("./TONConfigModule"));

function _createForOfIteratorHelper(o) { if (typeof Symbol === "undefined" || o[Symbol.iterator] == null) { if (Array.isArray(o) || (o = _unsupportedIterableToArray(o))) { var i = 0; var F = function F() {}; return { s: F, n: function n() { if (i >= o.length) return { done: true }; return { done: false, value: o[i++] }; }, e: function e(_e) { throw _e; }, f: F }; } throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); } var it, normalCompletion = true, didErr = false, err; return { s: function s() { it = o[Symbol.iterator](); }, n: function n() { var step = it.next(); normalCompletion = step.done; return step; }, e: function e(_e2) { didErr = true; err = _e2; }, f: function f() { try { if (!normalCompletion && it["return"] != null) it["return"](); } finally { if (didErr) throw err; } } }; }

function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(n); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }

function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }

var MAX_TIMEOUT = 2147483647;
exports.MAX_TIMEOUT = MAX_TIMEOUT;

function resolveParams(args, requiredParamName, resolveArgs) {
  return args.length === 1 && requiredParamName in args[0] ? args[0] : resolveArgs();
}

var MulticastPromise = /*#__PURE__*/function () {
  function MulticastPromise() {
    (0, _classCallCheck2["default"])(this, MulticastPromise);
    (0, _defineProperty2["default"])(this, "listeners", void 0);
    (0, _defineProperty2["default"])(this, "onComplete", void 0);
    this.listeners = [];
    this.onComplete = null;
  }

  (0, _createClass2["default"])(MulticastPromise, [{
    key: "listen",
    value: function listen() {
      var listener = {
        resolve: function resolve() {},
        reject: function reject() {}
      };
      this.listeners.push(listener);
      return new Promise(function (resolve, reject) {
        listener.resolve = resolve;
        listener.reject = reject;
      });
    }
  }, {
    key: "resolve",
    value: function resolve(value) {
      this.complete(function (listener) {
        return listener.resolve(value);
      });
    }
  }, {
    key: "reject",
    value: function reject(error) {
      this.complete(function (listener) {
        return listener.reject(error);
      });
    }
  }, {
    key: "complete",
    value: function complete(completeListener) {
      var listeners = this.listeners;
      this.listeners = [];

      if (this.onComplete) {
        this.onComplete();
      }

      listeners.forEach(function (listener) {
        return completeListener(listener);
      });
    }
  }]);
  return MulticastPromise;
}();

function versionToNumber(s) {
  var parts = "".concat(s || '').split('.').map(function (x) {
    return Number(x);
  }).slice(0, 3);

  while (parts.length < 3) {
    parts.push(0);
  }

  return parts[0] * 1000000 + parts[1] * 1000 + parts[2];
}

function resolveServerInfo(versionString) {
  var version = versionToNumber(versionString || '0.24.4');
  return {
    version: version,
    supportsOperationId: version > 24004,
    supportsAggregations: version >= 25000
  };
}

var TONQueriesModule = /*#__PURE__*/function (_TONModule) {
  (0, _inherits2["default"])(TONQueriesModule, _TONModule);

  function TONQueriesModule(context) {
    var _this;

    (0, _classCallCheck2["default"])(this, TONQueriesModule);
    _this = (0, _possibleConstructorReturn2["default"])(this, (0, _getPrototypeOf2["default"])(TONQueriesModule).call(this, context));
    (0, _defineProperty2["default"])((0, _assertThisInitialized2["default"])(_this), "config", void 0);
    (0, _defineProperty2["default"])((0, _assertThisInitialized2["default"])(_this), "overrideWsUrl", void 0);
    (0, _defineProperty2["default"])((0, _assertThisInitialized2["default"])(_this), "graphqlClientCreation", void 0);
    (0, _defineProperty2["default"])((0, _assertThisInitialized2["default"])(_this), "operationIdPrefix", void 0);
    (0, _defineProperty2["default"])((0, _assertThisInitialized2["default"])(_this), "operationIdSuffix", void 0);
    (0, _defineProperty2["default"])((0, _assertThisInitialized2["default"])(_this), "serverInfo", void 0);
    (0, _defineProperty2["default"])((0, _assertThisInitialized2["default"])(_this), "transactions", void 0);
    (0, _defineProperty2["default"])((0, _assertThisInitialized2["default"])(_this), "messages", void 0);
    (0, _defineProperty2["default"])((0, _assertThisInitialized2["default"])(_this), "blocks", void 0);
    (0, _defineProperty2["default"])((0, _assertThisInitialized2["default"])(_this), "accounts", void 0);
    (0, _defineProperty2["default"])((0, _assertThisInitialized2["default"])(_this), "blocks_signatures", void 0);
    (0, _defineProperty2["default"])((0, _assertThisInitialized2["default"])(_this), "graphqlClient", void 0);
    _this.graphqlClient = null;
    _this.overrideWsUrl = null;
    _this.graphqlClientCreation = null;
    _this.operationIdPrefix = (Date.now() % 60000).toString(16);

    for (var i = 0; i < 10; i += 1) {
      _this.operationIdPrefix = "".concat(_this.operationIdPrefix).concat(Math.round(Math.random() * 256).toString(16));
    }

    _this.operationIdSuffix = 1;
    _this.serverInfo = resolveServerInfo();
    return _this;
  }

  (0, _createClass2["default"])(TONQueriesModule, [{
    key: "setup",
    value: function () {
      var _setup = (0, _asyncToGenerator2["default"])( /*#__PURE__*/_regenerator["default"].mark(function _callee() {
        return _regenerator["default"].wrap(function _callee$(_context) {
          while (1) {
            switch (_context.prev = _context.next) {
              case 0:
                this.config = this.context.getModule(_TONConfigModule["default"]);
                this.transactions = new TONQueriesModuleCollection(this, 'transactions', 'Transaction');
                this.messages = new TONQueriesModuleCollection(this, 'messages', 'Message');
                this.blocks = new TONQueriesModuleCollection(this, 'blocks', 'Block');
                this.accounts = new TONQueriesModuleCollection(this, 'accounts', 'Account');
                this.blocks_signatures = new TONQueriesModuleCollection(this, 'blocks_signatures', 'BlockSignatures');

              case 6:
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
      var _detectRedirect = (0, _asyncToGenerator2["default"])( /*#__PURE__*/_regenerator["default"].mark(function _callee2(fetch, sourceUrl) {
        var response, sourceLocation, responseLocation;
        return _regenerator["default"].wrap(function _callee2$(_context2) {
          while (1) {
            switch (_context2.prev = _context2.next) {
              case 0:
                _context2.next = 2;
                return fetch(sourceUrl);

              case 2:
                response = _context2.sent;
                _context2.prev = 3;
                _context2.t0 = resolveServerInfo;
                _context2.next = 7;
                return response.json();

              case 7:
                _context2.t1 = _context2.sent.data.info.version;
                this.serverInfo = (0, _context2.t0)(_context2.t1);
                _context2.next = 13;
                break;

              case 11:
                _context2.prev = 11;
                _context2.t2 = _context2["catch"](3);

              case 13:
                if (!(response.redirected === true)) {
                  _context2.next = 15;
                  break;
                }

                return _context2.abrupt("return", response.url);

              case 15:
                if (!(response.redirected === false)) {
                  _context2.next = 17;
                  break;
                }

                return _context2.abrupt("return", '');

              case 17:
                sourceLocation = _TONConfigModule.URLParts.parse(sourceUrl).fixQuery(function (_) {
                  return '';
                }).toString().toLowerCase();
                responseLocation = _TONConfigModule.URLParts.parse(response.url).fixQuery(function (_) {
                  return '';
                }).toString().toLowerCase();
                return _context2.abrupt("return", responseLocation !== sourceLocation ? response.url : '');

              case 20:
              case "end":
                return _context2.stop();
            }
          }
        }, _callee2, this, [[3, 11]]);
      }));

      function detectRedirect(_x, _x2) {
        return _detectRedirect.apply(this, arguments);
      }

      return detectRedirect;
    }()
  }, {
    key: "getClientConfig",
    value: function () {
      var _getClientConfig = (0, _asyncToGenerator2["default"])( /*#__PURE__*/_regenerator["default"].mark(function _callee3() {
        var config, clientPlatform, fetch, getConfigForServer, _iterator, _step, server, clientConfig, redirected, httpParts;

        return _regenerator["default"].wrap(function _callee3$(_context3) {
          while (1) {
            switch (_context3.prev = _context3.next) {
              case 0:
                getConfigForServer = function _getConfigForServer(server) {
                  var httpParts = _TONConfigModule.URLParts.parse(server).fixProtocol(function (x) {
                    return x === 'http://' ? x : 'https://';
                  }).fixPath(function (x) {
                    return "".concat(x, "/graphql");
                  });

                  var http = httpParts.toString();
                  var ws = httpParts.fixProtocol(function (x) {
                    return x === 'http://' ? 'ws://' : 'wss://';
                  }).toString();
                  return {
                    httpUrl: http,
                    wsUrl: ws,
                    fetch: clientPlatform.fetch,
                    WebSocket: clientPlatform.WebSocket
                  };
                };

                config = this.config;
                clientPlatform = _TONClient.TONClient.clientPlatform;

                if (clientPlatform) {
                  _context3.next = 5;
                  break;
                }

                throw Error('TON Client does not configured');

              case 5:
                fetch = clientPlatform.fetch;
                _iterator = _createForOfIteratorHelper(config.data.servers);
                _context3.prev = 7;

                _iterator.s();

              case 9:
                if ((_step = _iterator.n()).done) {
                  _context3.next = 25;
                  break;
                }

                server = _step.value;
                _context3.prev = 11;
                clientConfig = getConfigForServer(server); // eslint-disable-next-line no-await-in-loop

                _context3.next = 15;
                return this.detectRedirect(fetch, "".concat(clientConfig.httpUrl, "?query=%7Binfo%7Bversion%7D%7D"));

              case 15:
                redirected = _context3.sent;

                if (redirected !== '') {
                  httpParts = _TONConfigModule.URLParts.parse(redirected).fixQuery(function (_) {
                    return '';
                  });
                  clientConfig.httpUrl = httpParts.toString();
                  clientConfig.wsUrl = httpParts.fixProtocol(function (x) {
                    return x === 'http://' ? 'ws://' : 'wss://';
                  }).toString();
                }

                return _context3.abrupt("return", clientConfig);

              case 20:
                _context3.prev = 20;
                _context3.t0 = _context3["catch"](11);
                console.log("[getClientConfig] for server \"".concat(server, "\" failed"), _context3.t0);

              case 23:
                _context3.next = 9;
                break;

              case 25:
                _context3.next = 30;
                break;

              case 27:
                _context3.prev = 27;
                _context3.t1 = _context3["catch"](7);

                _iterator.e(_context3.t1);

              case 30:
                _context3.prev = 30;

                _iterator.f();

                return _context3.finish(30);

              case 33:
                return _context3.abrupt("return", getConfigForServer(config.data.servers[0]));

              case 34:
              case "end":
                return _context3.stop();
            }
          }
        }, _callee3, this, [[7, 27, 30, 33], [11, 20]]);
      }));

      function getClientConfig() {
        return _getClientConfig.apply(this, arguments);
      }

      return getClientConfig;
    }()
  }, {
    key: "getServerInfo",
    value: function () {
      var _getServerInfo = (0, _asyncToGenerator2["default"])( /*#__PURE__*/_regenerator["default"].mark(function _callee4(span) {
        return _regenerator["default"].wrap(function _callee4$(_context4) {
          while (1) {
            switch (_context4.prev = _context4.next) {
              case 0:
                _context4.next = 2;
                return this.graphqlClientRequired(span);

              case 2:
                return _context4.abrupt("return", this.serverInfo);

              case 3:
              case "end":
                return _context4.stop();
            }
          }
        }, _callee4, this);
      }));

      function getServerInfo(_x3) {
        return _getServerInfo.apply(this, arguments);
      }

      return getServerInfo;
    }()
  }, {
    key: "generateOperationId",
    value: function generateOperationId() {
      this.operationIdSuffix += 1;
      return "".concat(this.operationIdPrefix).concat(this.operationIdSuffix.toString(16));
    }
  }, {
    key: "finishOperations",
    value: function () {
      var _finishOperations = (0, _asyncToGenerator2["default"])( /*#__PURE__*/_regenerator["default"].mark(function _callee5(operationIds) {
        return _regenerator["default"].wrap(function _callee5$(_context5) {
          while (1) {
            switch (_context5.prev = _context5.next) {
              case 0:
                if (!(operationIds.length === 0)) {
                  _context5.next = 2;
                  break;
                }

                return _context5.abrupt("return");

              case 2:
                _context5.next = 4;
                return this.getServerInfo();

              case 4:
                if (_context5.sent.supportsOperationId) {
                  _context5.next = 6;
                  break;
                }

                return _context5.abrupt("return");

              case 6:
                _context5.next = 8;
                return this.graphqlMutation("mutation finishOperations($operationIds: [String]) {\n                finishOperations(operationIds: $operationIds)\n            }", {
                  operationIds: operationIds
                });

              case 8:
              case "end":
                return _context5.stop();
            }
          }
        }, _callee5, this);
      }));

      function finishOperations(_x4) {
        return _finishOperations.apply(this, arguments);
      }

      return finishOperations;
    }()
  }, {
    key: "getAccountsCount",
    value: function () {
      var _getAccountsCount = (0, _asyncToGenerator2["default"])( /*#__PURE__*/_regenerator["default"].mark(function _callee6(parentSpan) {
        var result;
        return _regenerator["default"].wrap(function _callee6$(_context6) {
          while (1) {
            switch (_context6.prev = _context6.next) {
              case 0:
                _context6.next = 2;
                return this.query('query{getAccountsCount}', undefined, parentSpan);

              case 2:
                result = _context6.sent;
                return _context6.abrupt("return", result.data.getAccountsCount);

              case 4:
              case "end":
                return _context6.stop();
            }
          }
        }, _callee6, this);
      }));

      function getAccountsCount(_x5) {
        return _getAccountsCount.apply(this, arguments);
      }

      return getAccountsCount;
    }()
  }, {
    key: "getTransactionsCount",
    value: function () {
      var _getTransactionsCount = (0, _asyncToGenerator2["default"])( /*#__PURE__*/_regenerator["default"].mark(function _callee7(parentSpan) {
        var result;
        return _regenerator["default"].wrap(function _callee7$(_context7) {
          while (1) {
            switch (_context7.prev = _context7.next) {
              case 0:
                _context7.next = 2;
                return this.query('query{getTransactionsCount}', undefined, parentSpan);

              case 2:
                result = _context7.sent;
                return _context7.abrupt("return", result.data.getTransactionsCount);

              case 4:
              case "end":
                return _context7.stop();
            }
          }
        }, _callee7, this);
      }));

      function getTransactionsCount(_x6) {
        return _getTransactionsCount.apply(this, arguments);
      }

      return getTransactionsCount;
    }()
  }, {
    key: "getAccountsTotalBalance",
    value: function () {
      var _getAccountsTotalBalance = (0, _asyncToGenerator2["default"])( /*#__PURE__*/_regenerator["default"].mark(function _callee8(parentSpan) {
        var result;
        return _regenerator["default"].wrap(function _callee8$(_context8) {
          while (1) {
            switch (_context8.prev = _context8.next) {
              case 0:
                _context8.next = 2;
                return this.query('query{getAccountsTotalBalance}', undefined, parentSpan);

              case 2:
                result = _context8.sent;
                return _context8.abrupt("return", result.data.getAccountsTotalBalance);

              case 4:
              case "end":
                return _context8.stop();
            }
          }
        }, _callee8, this);
      }));

      function getAccountsTotalBalance(_x7) {
        return _getAccountsTotalBalance.apply(this, arguments);
      }

      return getAccountsTotalBalance;
    }()
  }, {
    key: "postRequests",
    value: function () {
      var _postRequests = (0, _asyncToGenerator2["default"])( /*#__PURE__*/_regenerator["default"].mark(function _callee10(requests, parentSpan) {
        var _this2 = this;

        return _regenerator["default"].wrap(function _callee10$(_context10) {
          while (1) {
            switch (_context10.prev = _context10.next) {
              case 0:
                return _context10.abrupt("return", this.context.trace('queries.postRequests', /*#__PURE__*/function () {
                  var _ref = (0, _asyncToGenerator2["default"])( /*#__PURE__*/_regenerator["default"].mark(function _callee9(span) {
                    return _regenerator["default"].wrap(function _callee9$(_context9) {
                      while (1) {
                        switch (_context9.prev = _context9.next) {
                          case 0:
                            return _context9.abrupt("return", _this2.graphqlMutation("mutation postRequests($requests: [Request]) {\n                postRequests(requests: $requests)\n            }", {
                              requests: requests
                            }, span));

                          case 1:
                          case "end":
                            return _context9.stop();
                        }
                      }
                    }, _callee9);
                  }));

                  return function (_x10) {
                    return _ref.apply(this, arguments);
                  };
                }(), parentSpan));

              case 1:
              case "end":
                return _context10.stop();
            }
          }
        }, _callee10, this);
      }));

      function postRequests(_x8, _x9) {
        return _postRequests.apply(this, arguments);
      }

      return postRequests;
    }()
  }, {
    key: "mutation",
    value: function () {
      var _mutation = (0, _asyncToGenerator2["default"])( /*#__PURE__*/_regenerator["default"].mark(function _callee12(ql) {
        var _this3 = this;

        var variables,
            parentSpan,
            _args12 = arguments;
        return _regenerator["default"].wrap(function _callee12$(_context12) {
          while (1) {
            switch (_context12.prev = _context12.next) {
              case 0:
                variables = _args12.length > 1 && _args12[1] !== undefined ? _args12[1] : {};
                parentSpan = _args12.length > 2 ? _args12[2] : undefined;
                return _context12.abrupt("return", this.context.trace('queries.mutation', /*#__PURE__*/function () {
                  var _ref2 = (0, _asyncToGenerator2["default"])( /*#__PURE__*/_regenerator["default"].mark(function _callee11(span) {
                    return _regenerator["default"].wrap(function _callee11$(_context11) {
                      while (1) {
                        switch (_context11.prev = _context11.next) {
                          case 0:
                            span.setTag('params', {
                              mutation: ql,
                              variables: variables
                            });
                            return _context11.abrupt("return", _this3.graphqlMutation(ql, variables, span));

                          case 2:
                          case "end":
                            return _context11.stop();
                        }
                      }
                    }, _callee11);
                  }));

                  return function (_x12) {
                    return _ref2.apply(this, arguments);
                  };
                }(), parentSpan));

              case 3:
              case "end":
                return _context12.stop();
            }
          }
        }, _callee12, this);
      }));

      function mutation(_x11) {
        return _mutation.apply(this, arguments);
      }

      return mutation;
    }()
  }, {
    key: "query",
    value: function () {
      var _query = (0, _asyncToGenerator2["default"])( /*#__PURE__*/_regenerator["default"].mark(function _callee14(ql) {
        var _this4 = this;

        var variables,
            parentSpan,
            _args14 = arguments;
        return _regenerator["default"].wrap(function _callee14$(_context14) {
          while (1) {
            switch (_context14.prev = _context14.next) {
              case 0:
                variables = _args14.length > 1 && _args14[1] !== undefined ? _args14[1] : {};
                parentSpan = _args14.length > 2 ? _args14[2] : undefined;
                return _context14.abrupt("return", this.context.trace('queries.query', /*#__PURE__*/function () {
                  var _ref3 = (0, _asyncToGenerator2["default"])( /*#__PURE__*/_regenerator["default"].mark(function _callee13(span) {
                    return _regenerator["default"].wrap(function _callee13$(_context13) {
                      while (1) {
                        switch (_context13.prev = _context13.next) {
                          case 0:
                            span.setTag('params', {
                              query: ql,
                              variables: variables
                            });
                            return _context13.abrupt("return", _this4.graphqlQuery(ql, variables, span));

                          case 2:
                          case "end":
                            return _context13.stop();
                        }
                      }
                    }, _callee13);
                  }));

                  return function (_x14) {
                    return _ref3.apply(this, arguments);
                  };
                }(), parentSpan));

              case 3:
              case "end":
                return _context14.stop();
            }
          }
        }, _callee14, this);
      }));

      function query(_x13) {
        return _query.apply(this, arguments);
      }

      return query;
    }()
  }, {
    key: "graphqlMutation",
    value: function () {
      var _graphqlMutation = (0, _asyncToGenerator2["default"])( /*#__PURE__*/_regenerator["default"].mark(function _callee15(ql) {
        var variables,
            span,
            mutation,
            _args15 = arguments;
        return _regenerator["default"].wrap(function _callee15$(_context15) {
          while (1) {
            switch (_context15.prev = _context15.next) {
              case 0:
                variables = _args15.length > 1 && _args15[1] !== undefined ? _args15[1] : {};
                span = _args15.length > 2 ? _args15[2] : undefined;
                mutation = (0, _graphqlTag["default"])([ql]);
                return _context15.abrupt("return", this.graphQl(function (client) {
                  return client.mutate({
                    mutation: mutation,
                    variables: variables,
                    context: {
                      traceSpan: span
                    }
                  });
                }));

              case 4:
              case "end":
                return _context15.stop();
            }
          }
        }, _callee15, this);
      }));

      function graphqlMutation(_x15) {
        return _graphqlMutation.apply(this, arguments);
      }

      return graphqlMutation;
    }()
  }, {
    key: "graphqlQuery",
    value: function () {
      var _graphqlQuery = (0, _asyncToGenerator2["default"])( /*#__PURE__*/_regenerator["default"].mark(function _callee16(ql) {
        var variables,
            span,
            query,
            _args16 = arguments;
        return _regenerator["default"].wrap(function _callee16$(_context16) {
          while (1) {
            switch (_context16.prev = _context16.next) {
              case 0:
                variables = _args16.length > 1 && _args16[1] !== undefined ? _args16[1] : {};
                span = _args16.length > 2 ? _args16[2] : undefined;
                query = (0, _graphqlTag["default"])([ql]);
                return _context16.abrupt("return", this.graphQl(function (client) {
                  return client.query({
                    query: query,
                    variables: variables,
                    context: {
                      traceSpan: span
                    }
                  });
                }, span));

              case 4:
              case "end":
                return _context16.stop();
            }
          }
        }, _callee16, this);
      }));

      function graphqlQuery(_x16) {
        return _graphqlQuery.apply(this, arguments);
      }

      return graphqlQuery;
    }()
  }, {
    key: "graphQl",
    value: function () {
      var _graphQl = (0, _asyncToGenerator2["default"])( /*#__PURE__*/_regenerator["default"].mark(function _callee17(request, span) {
        var client, gqlErr, clientErr, gqlExc, errors;
        return _regenerator["default"].wrap(function _callee17$(_context17) {
          while (1) {
            switch (_context17.prev = _context17.next) {
              case 0:
                _context17.next = 2;
                return this.graphqlClientRequired(span);

              case 2:
                client = _context17.sent;
                _context17.prev = 3;
                _context17.next = 6;
                return request(client);

              case 6:
                return _context17.abrupt("return", _context17.sent);

              case 9:
                _context17.prev = 9;
                _context17.t0 = _context17["catch"](3);
                gqlErr = _context17.t0.graphQLErrors && _context17.t0.graphQLErrors[0];

                if (!gqlErr) {
                  _context17.next = 19;
                  break;
                }

                clientErr = new Error(gqlErr.message);
                gqlExc = gqlErr.extensions && gqlErr.extensions.exception || {};
                clientErr.number = gqlExc.code || 0;
                clientErr.code = gqlExc.code || 0;
                clientErr.source = gqlExc.source || 'client';
                throw clientErr;

              case 19:
                errors = _context17.t0 && _context17.t0.networkError && _context17.t0.networkError.result && _context17.t0.networkError.result.errors;

                if (!errors) {
                  _context17.next = 24;
                  break;
                }

                throw _TONClient.TONClientError.queryFailed(errors);

              case 24:
                throw _context17.t0;

              case 25:
              case "end":
                return _context17.stop();
            }
          }
        }, _callee17, this, [[3, 9]]);
      }));

      function graphQl(_x17, _x18) {
        return _graphQl.apply(this, arguments);
      }

      return graphQl;
    }()
  }, {
    key: "graphqlClientRequired",
    value: function () {
      var _graphqlClientRequired = (0, _asyncToGenerator2["default"])( /*#__PURE__*/_regenerator["default"].mark(function _callee18(parentSpan) {
        var _this5 = this;

        var creation;
        return _regenerator["default"].wrap(function _callee18$(_context18) {
          while (1) {
            switch (_context18.prev = _context18.next) {
              case 0:
                if (!this.graphqlClient) {
                  _context18.next = 2;
                  break;
                }

                return _context18.abrupt("return", this.graphqlClient);

              case 2:
                if (!this.graphqlClientCreation) {
                  _context18.next = 7;
                  break;
                }

                _context18.next = 5;
                return this.graphqlClientCreation.listen();

              case 5:
                _context18.next = 21;
                break;

              case 7:
                creation = new MulticastPromise();
                this.graphqlClientCreation = creation;
                _context18.prev = 9;
                _context18.next = 12;
                return this.context.trace('setup client', function (span) {
                  return _this5.createGraphqlClient(span);
                }, parentSpan);

              case 12:
                this.graphqlClientCreation = null;
                creation.resolve(this.graphqlClient);
                _context18.next = 21;
                break;

              case 16:
                _context18.prev = 16;
                _context18.t0 = _context18["catch"](9);
                this.graphqlClientCreation = null;
                creation.reject(_context18.t0);
                throw _context18.t0;

              case 21:
                return _context18.abrupt("return", this.graphqlClient);

              case 22:
              case "end":
                return _context18.stop();
            }
          }
        }, _callee18, this, [[9, 16]]);
      }));

      function graphqlClientRequired(_x19) {
        return _graphqlClientRequired.apply(this, arguments);
      }

      return graphqlClientRequired;
    }()
  }, {
    key: "createGraphqlClient",
    value: function () {
      var _createGraphqlClient = (0, _asyncToGenerator2["default"])( /*#__PURE__*/_regenerator["default"].mark(function _callee20(span) {
        var _this6 = this;

        var useHttp, clientConfig, wsLink, httpLink, subsOptions, subscriptionClient, detectingRedirection, tracerLink, wrapLink, isSubscription, link;
        return _regenerator["default"].wrap(function _callee20$(_context20) {
          while (1) {
            switch (_context20.prev = _context20.next) {
              case 0:
                useHttp = !this.config.data.useWebSocketForQueries;
                _context20.next = 3;
                return this.getClientConfig();

              case 3:
                clientConfig = _context20.sent;
                wsLink = null;
                httpLink = null;
                subsOptions = this.config.tracer.inject(span, _opentracing.FORMAT_TEXT_MAP, {});
                subscriptionClient = new _subscriptionsTransportWs.SubscriptionClient(clientConfig.wsUrl, {
                  reconnect: true,
                  connectionParams: function connectionParams() {
                    return {
                      accessKey: _this6.config.data && _this6.config.data.accessKey,
                      headers: subsOptions
                    };
                  }
                }, clientConfig.WebSocket);
                subscriptionClient.onReconnected(function () {
                  console.log('[TONClient.queries]', 'WebSocket Reconnected');
                });
                detectingRedirection = false;
                subscriptionClient.onError(function () {
                  console.log('[TONClient.queries]', 'WebSocket Failed');

                  if (detectingRedirection) {
                    return;
                  }

                  (0, _asyncToGenerator2["default"])( /*#__PURE__*/_regenerator["default"].mark(function _callee19() {
                    var newConfig, configIsChanged;
                    return _regenerator["default"].wrap(function _callee19$(_context19) {
                      while (1) {
                        switch (_context19.prev = _context19.next) {
                          case 0:
                            detectingRedirection = true;
                            _context19.prev = 1;
                            _context19.next = 4;
                            return _this6.getClientConfig();

                          case 4:
                            newConfig = _context19.sent;
                            configIsChanged = newConfig.httpUrl !== clientConfig.httpUrl || newConfig.wsUrl !== clientConfig.wsUrl;

                            if (configIsChanged) {
                              console.log('[TONClient.queries]', 'Client config changed');
                              clientConfig = newConfig;
                              subscriptionClient.url = newConfig.wsUrl;

                              if (wsLink) {
                                wsLink.url = newConfig.wsUrl;
                              }

                              if (httpLink) {
                                httpLink.uri = newConfig.httpUrl;
                              }
                            }

                            _context19.next = 12;
                            break;

                          case 9:
                            _context19.prev = 9;
                            _context19.t0 = _context19["catch"](1);
                            console.log('[TONClient.queries] redirection detector failed', _context19.t0);

                          case 12:
                            detectingRedirection = false;

                          case 13:
                          case "end":
                            return _context19.stop();
                        }
                      }
                    }, _callee19, null, [[1, 9]]);
                  }))();
                });

                subscriptionClient.maxConnectTimeGenerator.duration = function () {
                  return subscriptionClient.maxConnectTimeGenerator.max;
                };

                _context20.next = 14;
                return (0, _apolloLinkContext.setContext)(function (_, req) {
                  var resolvedSpan = req && req.traceSpan || span;
                  req.headers = {};

                  _this6.config.tracer.inject(resolvedSpan, _opentracing.FORMAT_TEXT_MAP, req.headers);

                  var accessKey = _this6.config.data && _this6.config.data.accessKey;

                  if (accessKey) {
                    req.headers.accessKey = accessKey;
                  }

                  return {
                    headers: req.headers
                  };
                });

              case 14:
                tracerLink = _context20.sent;

                wrapLink = function wrapLink(link) {
                  return tracerLink.concat(link);
                };

                isSubscription = function isSubscription(_ref5) {
                  var query = _ref5.query;
                  var definition = (0, _apolloUtilities.getMainDefinition)(query);
                  return definition.kind === 'OperationDefinition' && definition.operation === 'subscription';
                };

                wsLink = new _apolloLinkWs.WebSocketLink(subscriptionClient);
                httpLink = useHttp ? new _apolloLinkHttp.HttpLink({
                  uri: clientConfig.httpUrl,
                  fetch: clientConfig.fetch
                }) : null;
                link = httpLink ? (0, _apolloLink.split)(isSubscription, wrapLink(wsLink), wrapLink(httpLink)) : wrapLink(wsLink);
                this.graphqlClient = new _apolloClient.ApolloClient({
                  cache: new _apolloCacheInmemory.InMemoryCache({}),
                  link: link,
                  defaultOptions: {
                    watchQuery: {
                      fetchPolicy: 'no-cache'
                    },
                    query: {
                      fetchPolicy: 'no-cache'
                    }
                  }
                });

              case 21:
              case "end":
                return _context20.stop();
            }
          }
        }, _callee20, this);
      }));

      function createGraphqlClient(_x20) {
        return _createGraphqlClient.apply(this, arguments);
      }

      return createGraphqlClient;
    }()
  }, {
    key: "close",
    value: function () {
      var _close = (0, _asyncToGenerator2["default"])( /*#__PURE__*/_regenerator["default"].mark(function _callee21() {
        var client;
        return _regenerator["default"].wrap(function _callee21$(_context21) {
          while (1) {
            switch (_context21.prev = _context21.next) {
              case 0:
                if (!this.graphqlClient) {
                  _context21.next = 6;
                  break;
                }

                client = this.graphqlClient;
                this.graphqlClient = null;
                client.stop();
                _context21.next = 6;
                return client.clearStore();

              case 6:
              case "end":
                return _context21.stop();
            }
          }
        }, _callee21, this);
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

var TONQueriesModuleCollection = /*#__PURE__*/function () {
  function TONQueriesModuleCollection(module, collectionName, typeName) {
    (0, _classCallCheck2["default"])(this, TONQueriesModuleCollection);
    (0, _defineProperty2["default"])(this, "module", void 0);
    (0, _defineProperty2["default"])(this, "collectionName", void 0);
    (0, _defineProperty2["default"])(this, "typeName", void 0);
    this.module = module;
    this.collectionName = collectionName;
    this.typeName = typeName;
  }

  (0, _createClass2["default"])(TONQueriesModuleCollection, [{
    key: "query",
    value: function () {
      var _query2 = (0, _asyncToGenerator2["default"])( /*#__PURE__*/_regenerator["default"].mark(function _callee23() {
        var _this7 = this;

        var _len,
            args,
            _key,
            _resolveParams,
            filter,
            result,
            orderBy,
            limit,
            timeout,
            operationId,
            parentSpan,
            _args23 = arguments;

        return _regenerator["default"].wrap(function _callee23$(_context23) {
          while (1) {
            switch (_context23.prev = _context23.next) {
              case 0:
                for (_len = _args23.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
                  args[_key] = _args23[_key];
                }

                _resolveParams = resolveParams(args, 'filter', function () {
                  return {
                    filter: args[0],
                    result: args[1],
                    orderBy: args[2],
                    limit: args[3],
                    timeout: args[4],
                    parentSpan: args[5]
                  };
                }), filter = _resolveParams.filter, result = _resolveParams.result, orderBy = _resolveParams.orderBy, limit = _resolveParams.limit, timeout = _resolveParams.timeout, operationId = _resolveParams.operationId, parentSpan = _resolveParams.parentSpan;
                return _context23.abrupt("return", this.module.context.trace("".concat(this.collectionName, ".query"), /*#__PURE__*/function () {
                  var _ref6 = (0, _asyncToGenerator2["default"])( /*#__PURE__*/_regenerator["default"].mark(function _callee22(span) {
                    var useOperationId, c, t, ql, variables;
                    return _regenerator["default"].wrap(function _callee22$(_context22) {
                      while (1) {
                        switch (_context22.prev = _context22.next) {
                          case 0:
                            span.setTag('params', {
                              filter: filter,
                              result: result,
                              orderBy: orderBy,
                              limit: limit,
                              timeout: timeout,
                              operationId: operationId
                            });
                            _context22.t0 = operationId;

                            if (!_context22.t0) {
                              _context22.next = 6;
                              break;
                            }

                            _context22.next = 5;
                            return _this7.module.getServerInfo(span);

                          case 5:
                            _context22.t0 = _context22.sent.supportsOperationId;

                          case 6:
                            useOperationId = _context22.t0;
                            c = _this7.collectionName;
                            t = _this7.typeName;
                            ql = "\n            query ".concat(c, "(\n                $filter: ").concat(t, "Filter,\n                $orderBy: [QueryOrderBy], \n                $limit: Int, \n                $timeout: Float\n                ").concat(useOperationId ? ', $operationId: String' : '', "\n             ) {\n                ").concat(c, "(\n                    filter: $filter, \n                    orderBy: $orderBy, \n                    limit: $limit, \n                    timeout: $timeout\n                    ").concat(useOperationId ? ', operationId: $operationId' : '', "\n                ) { ").concat(result, " }\n            }");
                            variables = {
                              filter: filter,
                              orderBy: orderBy,
                              limit: limit
                            };

                            if (useOperationId) {
                              variables.operationId = operationId;
                            }

                            if (timeout) {
                              variables.timeout = Math.min(MAX_TIMEOUT, timeout);
                            }

                            _context22.next = 15;
                            return _this7.module.graphqlQuery(ql, variables, span);

                          case 15:
                            _context22.t1 = c;
                            return _context22.abrupt("return", _context22.sent.data[_context22.t1]);

                          case 17:
                          case "end":
                            return _context22.stop();
                        }
                      }
                    }, _callee22);
                  }));

                  return function (_x21) {
                    return _ref6.apply(this, arguments);
                  };
                }(), parentSpan));

              case 3:
              case "end":
                return _context23.stop();
            }
          }
        }, _callee23, this);
      }));

      function query() {
        return _query2.apply(this, arguments);
      }

      return query;
    }()
  }, {
    key: "aggregate",
    value: function () {
      var _aggregate = (0, _asyncToGenerator2["default"])( /*#__PURE__*/_regenerator["default"].mark(function _callee25(params) {
        var _this8 = this;

        return _regenerator["default"].wrap(function _callee25$(_context25) {
          while (1) {
            switch (_context25.prev = _context25.next) {
              case 0:
                return _context25.abrupt("return", this.module.context.trace("".concat(this.collectionName, ".aggregate"), /*#__PURE__*/function () {
                  var _ref7 = (0, _asyncToGenerator2["default"])( /*#__PURE__*/_regenerator["default"].mark(function _callee24(span) {
                    var t, q, ql, variables;
                    return _regenerator["default"].wrap(function _callee24$(_context24) {
                      while (1) {
                        switch (_context24.prev = _context24.next) {
                          case 0:
                            span.setTag('params', {
                              filter: params.filter,
                              fields: params.fields
                            });
                            _context24.next = 3;
                            return _this8.module.getServerInfo(span);

                          case 3:
                            if (_context24.sent.supportsAggregations) {
                              _context24.next = 5;
                              break;
                            }

                            throw _TONClient.TONClientError.serverDoesntSupportAggregations();

                          case 5:
                            t = _this8.typeName;
                            q = _this8.typeName.endsWith('s') ? "aggregate".concat(t) : "aggregate".concat(t, "s");
                            ql = "\n            query ".concat(q, "(\n                $filter: ").concat(t, "Filter,\n                $fields: [FieldAggregation] \n             ) {\n                ").concat(q, "(\n                    filter: $filter, \n                    fields: $fields \n                )\n            }");
                            variables = {
                              filter: params.filter,
                              fields: params.fields
                            };
                            _context24.next = 11;
                            return _this8.module.graphqlQuery(ql, variables, span);

                          case 11:
                            _context24.t0 = q;
                            return _context24.abrupt("return", _context24.sent.data[_context24.t0]);

                          case 13:
                          case "end":
                            return _context24.stop();
                        }
                      }
                    }, _callee24);
                  }));

                  return function (_x23) {
                    return _ref7.apply(this, arguments);
                  };
                }(), params.parentSpan));

              case 1:
              case "end":
                return _context25.stop();
            }
          }
        }, _callee25, this);
      }));

      function aggregate(_x22) {
        return _aggregate.apply(this, arguments);
      }

      return aggregate;
    }()
  }, {
    key: "subscribe",
    value: function subscribe() {
      var _this9 = this;

      for (var _len2 = arguments.length, args = new Array(_len2), _key2 = 0; _key2 < _len2; _key2++) {
        args[_key2] = arguments[_key2];
      }

      var _resolveParams2 = resolveParams(args, 'filter', function () {
        return {
          filter: args[0],
          result: args[1],
          onDocEvent: args[2],
          onError: args[3]
        };
      }),
          filter = _resolveParams2.filter,
          result = _resolveParams2.result,
          onDocEvent = _resolveParams2.onDocEvent,
          onError = _resolveParams2.onError;

      var span = this.module.config.tracer.startSpan('TONQueriesModule.js:subscribe ');
      span.setTag(_opentracing.Tags.SPAN_KIND, 'client');
      var text = "subscription ".concat(this.collectionName, "($filter: ").concat(this.typeName, "Filter) {\n            ").concat(this.collectionName, "(filter: $filter) { ").concat(result, " }\n        }");
      var query = (0, _graphqlTag["default"])([text]);
      var subscription = null;
      (0, _asyncToGenerator2["default"])( /*#__PURE__*/_regenerator["default"].mark(function _callee26() {
        var client, observable;
        return _regenerator["default"].wrap(function _callee26$(_context26) {
          while (1) {
            switch (_context26.prev = _context26.next) {
              case 0:
                _context26.prev = 0;
                _context26.next = 3;
                return _this9.module.graphqlClientRequired(span);

              case 3:
                client = _context26.sent;
                observable = client.subscribe({
                  query: query,
                  variables: {
                    filter: filter
                  }
                });
                subscription = observable.subscribe(function (message) {
                  onDocEvent('insert/update', message.data[_this9.collectionName]);
                });
                _context26.next = 12;
                break;

              case 8:
                _context26.prev = 8;
                _context26.t0 = _context26["catch"](0);
                span.log({
                  event: 'failed',
                  payload: _context26.t0
                });

                if (onError) {
                  onError(_context26.t0);
                } else {
                  console.log('TON Client subscription error', _context26.t0);
                }

              case 12:
              case "end":
                return _context26.stop();
            }
          }
        }, _callee26, null, [[0, 8]]);
      }))();
      return {
        unsubscribe: function unsubscribe() {
          if (subscription) {
            subscription.unsubscribe();
            span.finish();
          }
        }
      };
    }
  }, {
    key: "waitFor",
    value: function () {
      var _waitFor = (0, _asyncToGenerator2["default"])( /*#__PURE__*/_regenerator["default"].mark(function _callee27() {
        var _len3,
            args,
            _key3,
            _resolveParams3,
            filter,
            result,
            paramsTimeout,
            parentSpan,
            operationId,
            timeout,
            docs,
            _args27 = arguments;

        return _regenerator["default"].wrap(function _callee27$(_context27) {
          while (1) {
            switch (_context27.prev = _context27.next) {
              case 0:
                for (_len3 = _args27.length, args = new Array(_len3), _key3 = 0; _key3 < _len3; _key3++) {
                  args[_key3] = _args27[_key3];
                }

                _resolveParams3 = resolveParams(args, 'filter', function () {
                  return {
                    filter: args[0],
                    result: args[1],
                    timeout: args[2],
                    parentSpan: args[3]
                  };
                }), filter = _resolveParams3.filter, result = _resolveParams3.result, paramsTimeout = _resolveParams3.timeout, parentSpan = _resolveParams3.parentSpan, operationId = _resolveParams3.operationId;
                timeout = paramsTimeout || this.module.config.waitForTimeout();
                _context27.next = 5;
                return this.query({
                  filter: filter,
                  result: result,
                  timeout: timeout,
                  parentSpan: parentSpan,
                  operationId: operationId
                });

              case 5:
                docs = _context27.sent;

                if (!(docs.length > 0)) {
                  _context27.next = 8;
                  break;
                }

                return _context27.abrupt("return", docs[0]);

              case 8:
                throw _TONClient.TONClientError.waitForTimeout();

              case 9:
              case "end":
                return _context27.stop();
            }
          }
        }, _callee27, this);
      }));

      function waitFor() {
        return _waitFor.apply(this, arguments);
      }

      return waitFor;
    }()
  }]);
  return TONQueriesModuleCollection;
}();

TONQueriesModule.moduleName = 'TONQueriesModule';
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy9tb2R1bGVzL1RPTlF1ZXJpZXNNb2R1bGUuanMiXSwibmFtZXMiOlsiTUFYX1RJTUVPVVQiLCJyZXNvbHZlUGFyYW1zIiwiYXJncyIsInJlcXVpcmVkUGFyYW1OYW1lIiwicmVzb2x2ZUFyZ3MiLCJsZW5ndGgiLCJNdWx0aWNhc3RQcm9taXNlIiwibGlzdGVuZXJzIiwib25Db21wbGV0ZSIsImxpc3RlbmVyIiwicmVzb2x2ZSIsInJlamVjdCIsInB1c2giLCJQcm9taXNlIiwidmFsdWUiLCJjb21wbGV0ZSIsImVycm9yIiwiY29tcGxldGVMaXN0ZW5lciIsImZvckVhY2giLCJ2ZXJzaW9uVG9OdW1iZXIiLCJzIiwicGFydHMiLCJzcGxpdCIsIm1hcCIsIngiLCJOdW1iZXIiLCJzbGljZSIsInJlc29sdmVTZXJ2ZXJJbmZvIiwidmVyc2lvblN0cmluZyIsInZlcnNpb24iLCJzdXBwb3J0c09wZXJhdGlvbklkIiwic3VwcG9ydHNBZ2dyZWdhdGlvbnMiLCJUT05RdWVyaWVzTW9kdWxlIiwiY29udGV4dCIsImdyYXBocWxDbGllbnQiLCJvdmVycmlkZVdzVXJsIiwiZ3JhcGhxbENsaWVudENyZWF0aW9uIiwib3BlcmF0aW9uSWRQcmVmaXgiLCJEYXRlIiwibm93IiwidG9TdHJpbmciLCJpIiwiTWF0aCIsInJvdW5kIiwicmFuZG9tIiwib3BlcmF0aW9uSWRTdWZmaXgiLCJzZXJ2ZXJJbmZvIiwiY29uZmlnIiwiZ2V0TW9kdWxlIiwiVE9OQ29uZmlnTW9kdWxlIiwidHJhbnNhY3Rpb25zIiwiVE9OUXVlcmllc01vZHVsZUNvbGxlY3Rpb24iLCJtZXNzYWdlcyIsImJsb2NrcyIsImFjY291bnRzIiwiYmxvY2tzX3NpZ25hdHVyZXMiLCJmZXRjaCIsInNvdXJjZVVybCIsInJlc3BvbnNlIiwianNvbiIsImRhdGEiLCJpbmZvIiwicmVkaXJlY3RlZCIsInVybCIsInNvdXJjZUxvY2F0aW9uIiwiVVJMUGFydHMiLCJwYXJzZSIsImZpeFF1ZXJ5IiwiXyIsInRvTG93ZXJDYXNlIiwicmVzcG9uc2VMb2NhdGlvbiIsImdldENvbmZpZ0ZvclNlcnZlciIsInNlcnZlciIsImh0dHBQYXJ0cyIsImZpeFByb3RvY29sIiwiZml4UGF0aCIsImh0dHAiLCJ3cyIsImh0dHBVcmwiLCJ3c1VybCIsImNsaWVudFBsYXRmb3JtIiwiV2ViU29ja2V0IiwiVE9OQ2xpZW50IiwiRXJyb3IiLCJzZXJ2ZXJzIiwiY2xpZW50Q29uZmlnIiwiZGV0ZWN0UmVkaXJlY3QiLCJjb25zb2xlIiwibG9nIiwic3BhbiIsImdyYXBocWxDbGllbnRSZXF1aXJlZCIsIm9wZXJhdGlvbklkcyIsImdldFNlcnZlckluZm8iLCJncmFwaHFsTXV0YXRpb24iLCJwYXJlbnRTcGFuIiwicXVlcnkiLCJ1bmRlZmluZWQiLCJyZXN1bHQiLCJnZXRBY2NvdW50c0NvdW50IiwiZ2V0VHJhbnNhY3Rpb25zQ291bnQiLCJnZXRBY2NvdW50c1RvdGFsQmFsYW5jZSIsInJlcXVlc3RzIiwidHJhY2UiLCJxbCIsInZhcmlhYmxlcyIsInNldFRhZyIsIm11dGF0aW9uIiwiZ3JhcGhxbFF1ZXJ5IiwiZ3JhcGhRbCIsImNsaWVudCIsIm11dGF0ZSIsInRyYWNlU3BhbiIsInJlcXVlc3QiLCJncWxFcnIiLCJncmFwaFFMRXJyb3JzIiwiY2xpZW50RXJyIiwibWVzc2FnZSIsImdxbEV4YyIsImV4dGVuc2lvbnMiLCJleGNlcHRpb24iLCJudW1iZXIiLCJjb2RlIiwic291cmNlIiwiZXJyb3JzIiwibmV0d29ya0Vycm9yIiwiVE9OQ2xpZW50RXJyb3IiLCJxdWVyeUZhaWxlZCIsImxpc3RlbiIsImNyZWF0aW9uIiwiY3JlYXRlR3JhcGhxbENsaWVudCIsInVzZUh0dHAiLCJ1c2VXZWJTb2NrZXRGb3JRdWVyaWVzIiwiZ2V0Q2xpZW50Q29uZmlnIiwid3NMaW5rIiwiaHR0cExpbmsiLCJzdWJzT3B0aW9ucyIsInRyYWNlciIsImluamVjdCIsIkZPUk1BVF9URVhUX01BUCIsInN1YnNjcmlwdGlvbkNsaWVudCIsIlN1YnNjcmlwdGlvbkNsaWVudCIsInJlY29ubmVjdCIsImNvbm5lY3Rpb25QYXJhbXMiLCJhY2Nlc3NLZXkiLCJoZWFkZXJzIiwib25SZWNvbm5lY3RlZCIsImRldGVjdGluZ1JlZGlyZWN0aW9uIiwib25FcnJvciIsIm5ld0NvbmZpZyIsImNvbmZpZ0lzQ2hhbmdlZCIsInVyaSIsIm1heENvbm5lY3RUaW1lR2VuZXJhdG9yIiwiZHVyYXRpb24iLCJtYXgiLCJyZXEiLCJyZXNvbHZlZFNwYW4iLCJ0cmFjZXJMaW5rIiwid3JhcExpbmsiLCJsaW5rIiwiY29uY2F0IiwiaXNTdWJzY3JpcHRpb24iLCJkZWZpbml0aW9uIiwia2luZCIsIm9wZXJhdGlvbiIsIldlYlNvY2tldExpbmsiLCJIdHRwTGluayIsIkFwb2xsb0NsaWVudCIsImNhY2hlIiwiSW5NZW1vcnlDYWNoZSIsImRlZmF1bHRPcHRpb25zIiwid2F0Y2hRdWVyeSIsImZldGNoUG9saWN5Iiwic3RvcCIsImNsZWFyU3RvcmUiLCJUT05Nb2R1bGUiLCJtb2R1bGUiLCJjb2xsZWN0aW9uTmFtZSIsInR5cGVOYW1lIiwiZmlsdGVyIiwib3JkZXJCeSIsImxpbWl0IiwidGltZW91dCIsIm9wZXJhdGlvbklkIiwidXNlT3BlcmF0aW9uSWQiLCJjIiwidCIsIm1pbiIsInBhcmFtcyIsImZpZWxkcyIsInNlcnZlckRvZXNudFN1cHBvcnRBZ2dyZWdhdGlvbnMiLCJxIiwiZW5kc1dpdGgiLCJvbkRvY0V2ZW50Iiwic3RhcnRTcGFuIiwiVGFncyIsIlNQQU5fS0lORCIsInRleHQiLCJzdWJzY3JpcHRpb24iLCJvYnNlcnZhYmxlIiwic3Vic2NyaWJlIiwiZXZlbnQiLCJwYXlsb2FkIiwidW5zdWJzY3JpYmUiLCJmaW5pc2giLCJwYXJhbXNUaW1lb3V0Iiwid2FpdEZvclRpbWVvdXQiLCJkb2NzIiwibW9kdWxlTmFtZSJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFrQkE7O0FBQ0E7O0FBQ0E7O0FBQ0E7O0FBQ0E7O0FBQ0E7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QUFuQyxDLEVBTGJnTCxNLG1CQUFBQSxNLEVBQ0FqRixNLG1CQUFBQSxNLEVBQ1MyRyxhLG1CQUFUdkIsTyxFQUNBdkYsVSxtQkFBQUEsVSxFQUNBd0YsVyxtQkFBQUEsVztBQU9FRCxnQkFBQUEsTyxHQUFVdUIsYUFBYSxJQUFJLEtBQUs3QixNQUFMLENBQVloSSxNQUFaLENBQW1COEosY0FBbkIsRTs7dUJBQ2QsS0FBSzlHLEtBQUwsQ0FBVztBQUMxQm1GLGtCQUFBQSxNQUFNLEVBQU5BLE1BRDBCO0FBRTFCakYsa0JBQUFBLE1BQU0sRUFBTkEsTUFGMEI7QUFHMUJvRixrQkFBQUEsT0FBTyxFQUFQQSxPQUgwQjtBQUkxQnZGLGtCQUFBQSxVQUFVLEVBQVZBLFVBSjBCO0FBSzFCd0Ysa0JBQUFBLFdBQVcsRUFBWEE7QUFMMEIsaUJBQVgsQzs7O0FBQWJ3QixnQkFBQUEsSTs7c0JBT0ZBLElBQUksQ0FBQ3pNLE1BQUwsR0FBYyxDOzs7OzttREFDUHlNLElBQUksQ0FBQyxDQUFELEM7OztzQkFFVGpGLDBCQUFlZ0YsY0FBZixFOzs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUlkN0ssZ0JBQWdCLENBQUMrSyxVQUFqQixHQUE4QixrQkFBOUIiLCJzb3VyY2VzQ29udGVudCI6WyIvKlxuICogQ29weXJpZ2h0IDIwMTgtMjAyMCBUT04gREVWIFNPTFVUSU9OUyBMVEQuXG4gKlxuICogTGljZW5zZWQgdW5kZXIgdGhlIFNPRlRXQVJFIEVWQUxVQVRJT04gTGljZW5zZSAodGhlIFwiTGljZW5zZVwiKTsgeW91IG1heSBub3QgdXNlXG4gKiB0aGlzIGZpbGUgZXhjZXB0IGluIGNvbXBsaWFuY2Ugd2l0aCB0aGUgTGljZW5zZS4gIFlvdSBtYXkgb2J0YWluIGEgY29weSBvZiB0aGVcbiAqIExpY2Vuc2UgYXQ6XG4gKlxuICogaHR0cDovL3d3dy50b24uZGV2L2xpY2Vuc2VzXG4gKlxuICogVW5sZXNzIHJlcXVpcmVkIGJ5IGFwcGxpY2FibGUgbGF3IG9yIGFncmVlZCB0byBpbiB3cml0aW5nLCBzb2Z0d2FyZVxuICogZGlzdHJpYnV0ZWQgdW5kZXIgdGhlIExpY2Vuc2UgaXMgZGlzdHJpYnV0ZWQgb24gYW4gXCJBUyBJU1wiIEJBU0lTLFxuICogV0lUSE9VVCBXQVJSQU5USUVTIE9SIENPTkRJVElPTlMgT0YgQU5ZIEtJTkQsIGVpdGhlciBleHByZXNzIG9yIGltcGxpZWQuXG4gKiBTZWUgdGhlIExpY2Vuc2UgZm9yIHRoZSBzcGVjaWZpYyBUT04gREVWIHNvZnR3YXJlIGdvdmVybmluZyBwZXJtaXNzaW9ucyBhbmRcbiAqIGxpbWl0YXRpb25zIHVuZGVyIHRoZSBMaWNlbnNlLlxuICovXG5cbi8vIEBmbG93XG5cbmltcG9ydCB7IEluTWVtb3J5Q2FjaGUgfSBmcm9tICdhcG9sbG8tY2FjaGUtaW5tZW1vcnknO1xuaW1wb3J0IHsgQXBvbGxvQ2xpZW50IH0gZnJvbSAnYXBvbGxvLWNsaWVudCc7XG5pbXBvcnQgeyBBcG9sbG9MaW5rLCBzcGxpdCB9IGZyb20gJ2Fwb2xsby1saW5rJztcbmltcG9ydCB7IEh0dHBMaW5rIH0gZnJvbSAnYXBvbGxvLWxpbmstaHR0cCc7XG5pbXBvcnQgeyBXZWJTb2NrZXRMaW5rIH0gZnJvbSAnYXBvbGxvLWxpbmstd3MnO1xuaW1wb3J0IHsgZ2V0TWFpbkRlZmluaXRpb24gfSBmcm9tICdhcG9sbG8tdXRpbGl0aWVzJztcbmltcG9ydCBncWwgZnJvbSAnZ3JhcGhxbC10YWcnO1xuaW1wb3J0IHsgU3Vic2NyaXB0aW9uQ2xpZW50IH0gZnJvbSAnc3Vic2NyaXB0aW9ucy10cmFuc3BvcnQtd3MnO1xuaW1wb3J0IHsgc2V0Q29udGV4dCB9IGZyb20gJ2Fwb2xsby1saW5rLWNvbnRleHQnO1xuaW1wb3J0IHtcbiAgICBGT1JNQVRfVEVYVF9NQVAsIFRhZ3MsIFNwYW4sIFNwYW5Db250ZXh0LFxufSBmcm9tICdvcGVudHJhY2luZyc7XG5pbXBvcnQgdHlwZSB7XG4gICAgVE9OUXVlcmllcyxcbiAgICBUT05RQ29sbGVjdGlvbixcbiAgICBTdWJzY3JpcHRpb24sXG4gICAgVE9OUXVlcnlQYXJhbXMsXG4gICAgVE9OU3Vic2NyaWJlUGFyYW1zLFxuICAgIFRPTldhaXRGb3JQYXJhbXMsIFRPTlF1ZXJ5QWdncmVnYXRlUGFyYW1zLFxufSBmcm9tICcuLi8uLi90eXBlcyc7XG5pbXBvcnQgeyBUT05DbGllbnQsIFRPTkNsaWVudEVycm9yIH0gZnJvbSAnLi4vVE9OQ2xpZW50JztcbmltcG9ydCB0eXBlIHsgVE9OTW9kdWxlQ29udGV4dCB9IGZyb20gJy4uL1RPTk1vZHVsZSc7XG5pbXBvcnQgeyBUT05Nb2R1bGUgfSBmcm9tICcuLi9UT05Nb2R1bGUnO1xuaW1wb3J0IFRPTkNvbmZpZ01vZHVsZSwgeyBVUkxQYXJ0cyB9IGZyb20gJy4vVE9OQ29uZmlnTW9kdWxlJztcblxuXG5leHBvcnQgdHlwZSBSZXF1ZXN0ID0ge1xuICAgIGlkOiBzdHJpbmcsXG4gICAgYm9keTogc3RyaW5nLFxufVxuXG5leHBvcnQgdHlwZSBTZXJ2ZXJJbmZvID0ge1xuICAgIHZlcnNpb246IG51bWJlcixcbiAgICBzdXBwb3J0c09wZXJhdGlvbklkOiBib29sZWFuLFxuICAgIHN1cHBvcnRzQWdncmVnYXRpb25zOiBib29sZWFuLFxufTtcblxuZXhwb3J0IGNvbnN0IE1BWF9USU1FT1VUID0gMjE0NzQ4MzY0NztcblxuZnVuY3Rpb24gcmVzb2x2ZVBhcmFtczxUPihhcmdzOiBhbnlbXSwgcmVxdWlyZWRQYXJhbU5hbWU6IHN0cmluZywgcmVzb2x2ZUFyZ3M6ICgpID0+IFQpOiBUIHtcbiAgICByZXR1cm4gKGFyZ3MubGVuZ3RoID09PSAxKSAmJiAocmVxdWlyZWRQYXJhbU5hbWUgaW4gYXJnc1swXSkgPyBhcmdzWzBdIDogcmVzb2x2ZUFyZ3MoKTtcbn1cblxudHlwZSBNdWx0aWNhc3RMaXN0ZW5lcjxWYWx1ZT4gPSB7XG4gICAgcmVzb2x2ZTogKHZhbHVlOiBWYWx1ZSkgPT4gdm9pZDtcbiAgICByZWplY3Q6IChlcnJvcjogRXJyb3IpID0+IHZvaWQ7XG59O1xuXG5jbGFzcyBNdWx0aWNhc3RQcm9taXNlPFZhbHVlPiB7XG4gICAgbGlzdGVuZXJzOiBNdWx0aWNhc3RMaXN0ZW5lcjxWYWx1ZT5bXTtcbiAgICBvbkNvbXBsZXRlOiA/KCgpID0+IHZvaWQpO1xuXG4gICAgY29uc3RydWN0b3IoKSB7XG4gICAgICAgIHRoaXMubGlzdGVuZXJzID0gW107XG4gICAgICAgIHRoaXMub25Db21wbGV0ZSA9IG51bGw7XG4gICAgfVxuXG4gICAgbGlzdGVuKCk6IFByb21pc2U8VmFsdWU+IHtcbiAgICAgICAgY29uc3QgbGlzdGVuZXI6IE11bHRpY2FzdExpc3RlbmVyPFZhbHVlPiA9IHtcbiAgICAgICAgICAgIHJlc29sdmU6ICgpID0+IHtcbiAgICAgICAgICAgIH0sXG4gICAgICAgICAgICByZWplY3Q6ICgpID0+IHtcbiAgICAgICAgICAgIH0sXG4gICAgICAgIH07XG4gICAgICAgIHRoaXMubGlzdGVuZXJzLnB1c2gobGlzdGVuZXIpO1xuICAgICAgICByZXR1cm4gbmV3IFByb21pc2UoKHJlc29sdmUsIHJlamVjdCkgPT4ge1xuICAgICAgICAgICAgbGlzdGVuZXIucmVzb2x2ZSA9IHJlc29sdmU7XG4gICAgICAgICAgICBsaXN0ZW5lci5yZWplY3QgPSByZWplY3Q7XG4gICAgICAgIH0pO1xuICAgIH1cblxuICAgIHJlc29sdmUodmFsdWU6IFZhbHVlKSB7XG4gICAgICAgIHRoaXMuY29tcGxldGUobGlzdGVuZXIgPT4gbGlzdGVuZXIucmVzb2x2ZSh2YWx1ZSkpO1xuICAgIH1cblxuICAgIHJlamVjdChlcnJvcjogRXJyb3IpIHtcbiAgICAgICAgdGhpcy5jb21wbGV0ZShsaXN0ZW5lciA9PiBsaXN0ZW5lci5yZWplY3QoZXJyb3IpKTtcbiAgICB9XG5cbiAgICBjb21wbGV0ZShjb21wbGV0ZUxpc3RlbmVyOiAobGlzdGVuZXI6IE11bHRpY2FzdExpc3RlbmVyPFZhbHVlPikgPT4gdm9pZCkge1xuICAgICAgICBjb25zdCB7IGxpc3RlbmVycyB9ID0gdGhpcztcbiAgICAgICAgdGhpcy5saXN0ZW5lcnMgPSBbXTtcbiAgICAgICAgaWYgKHRoaXMub25Db21wbGV0ZSkge1xuICAgICAgICAgICAgdGhpcy5vbkNvbXBsZXRlKCk7XG4gICAgICAgIH1cbiAgICAgICAgbGlzdGVuZXJzLmZvckVhY2gobGlzdGVuZXIgPT4gY29tcGxldGVMaXN0ZW5lcihsaXN0ZW5lcikpO1xuICAgIH1cbn1cblxuZnVuY3Rpb24gdmVyc2lvblRvTnVtYmVyKHM6IHN0cmluZyk6IG51bWJlciB7XG4gICAgY29uc3QgcGFydHMgPSBgJHtzIHx8ICcnfWAuc3BsaXQoJy4nKVxuICAgICAgICAubWFwKHggPT4gTnVtYmVyKHgpKVxuICAgICAgICAuc2xpY2UoMCwgMyk7XG4gICAgd2hpbGUgKHBhcnRzLmxlbmd0aCA8IDMpIHtcbiAgICAgICAgcGFydHMucHVzaCgwKTtcbiAgICB9XG4gICAgcmV0dXJuIHBhcnRzWzBdICogMTAwMDAwMCArIHBhcnRzWzFdICogMTAwMCArIHBhcnRzWzJdO1xufVxuXG5mdW5jdGlvbiByZXNvbHZlU2VydmVySW5mbyh2ZXJzaW9uU3RyaW5nOiBzdHJpbmcgfCBudWxsIHwgdHlwZW9mIHVuZGVmaW5lZCk6IFNlcnZlckluZm8ge1xuICAgIGNvbnN0IHZlcnNpb24gPSB2ZXJzaW9uVG9OdW1iZXIodmVyc2lvblN0cmluZyB8fCAnMC4yNC40Jyk7XG4gICAgcmV0dXJuIHtcbiAgICAgICAgdmVyc2lvbixcbiAgICAgICAgc3VwcG9ydHNPcGVyYXRpb25JZDogdmVyc2lvbiA+IDI0MDA0LFxuICAgICAgICBzdXBwb3J0c0FnZ3JlZ2F0aW9uczogdmVyc2lvbiA+PSAyNTAwMCxcbiAgICB9O1xufVxuXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBUT05RdWVyaWVzTW9kdWxlIGV4dGVuZHMgVE9OTW9kdWxlIGltcGxlbWVudHMgVE9OUXVlcmllcyB7XG4gICAgY29uZmlnOiBUT05Db25maWdNb2R1bGU7XG5cbiAgICBvdmVycmlkZVdzVXJsOiA/c3RyaW5nO1xuICAgIGdyYXBocWxDbGllbnRDcmVhdGlvbjogP011bHRpY2FzdFByb21pc2U8QXBvbGxvQ2xpZW50PjtcbiAgICBvcGVyYXRpb25JZFByZWZpeDogc3RyaW5nO1xuICAgIG9wZXJhdGlvbklkU3VmZml4OiBudW1iZXI7XG4gICAgc2VydmVySW5mbzogU2VydmVySW5mbztcblxuICAgIGNvbnN0cnVjdG9yKGNvbnRleHQ6IFRPTk1vZHVsZUNvbnRleHQpIHtcbiAgICAgICAgc3VwZXIoY29udGV4dCk7XG4gICAgICAgIHRoaXMuZ3JhcGhxbENsaWVudCA9IG51bGw7XG4gICAgICAgIHRoaXMub3ZlcnJpZGVXc1VybCA9IG51bGw7XG4gICAgICAgIHRoaXMuZ3JhcGhxbENsaWVudENyZWF0aW9uID0gbnVsbDtcbiAgICAgICAgdGhpcy5vcGVyYXRpb25JZFByZWZpeCA9IChEYXRlLm5vdygpICUgNjAwMDApLnRvU3RyaW5nKDE2KTtcbiAgICAgICAgZm9yIChsZXQgaSA9IDA7IGkgPCAxMDsgaSArPSAxKSB7XG4gICAgICAgICAgICB0aGlzLm9wZXJhdGlvbklkUHJlZml4ID1cbiAgICAgICAgICAgICAgICBgJHt0aGlzLm9wZXJhdGlvbklkUHJlZml4fSR7TWF0aC5yb3VuZChNYXRoLnJhbmRvbSgpICogMjU2KVxuICAgICAgICAgICAgICAgICAgICAudG9TdHJpbmcoMTYpfWA7XG4gICAgICAgIH1cbiAgICAgICAgdGhpcy5vcGVyYXRpb25JZFN1ZmZpeCA9IDE7XG4gICAgICAgIHRoaXMuc2VydmVySW5mbyA9IHJlc29sdmVTZXJ2ZXJJbmZvKCk7XG4gICAgfVxuXG4gICAgYXN5bmMgc2V0dXAoKSB7XG4gICAgICAgIHRoaXMuY29uZmlnID0gdGhpcy5jb250ZXh0LmdldE1vZHVsZShUT05Db25maWdNb2R1bGUpO1xuICAgICAgICB0aGlzLnRyYW5zYWN0aW9ucyA9IG5ldyBUT05RdWVyaWVzTW9kdWxlQ29sbGVjdGlvbih0aGlzLCAndHJhbnNhY3Rpb25zJywgJ1RyYW5zYWN0aW9uJyk7XG4gICAgICAgIHRoaXMubWVzc2FnZXMgPSBuZXcgVE9OUXVlcmllc01vZHVsZUNvbGxlY3Rpb24odGhpcywgJ21lc3NhZ2VzJywgJ01lc3NhZ2UnKTtcbiAgICAgICAgdGhpcy5ibG9ja3MgPSBuZXcgVE9OUXVlcmllc01vZHVsZUNvbGxlY3Rpb24odGhpcywgJ2Jsb2NrcycsICdCbG9jaycpO1xuICAgICAgICB0aGlzLmFjY291bnRzID0gbmV3IFRPTlF1ZXJpZXNNb2R1bGVDb2xsZWN0aW9uKHRoaXMsICdhY2NvdW50cycsICdBY2NvdW50Jyk7XG4gICAgICAgIHRoaXMuYmxvY2tzX3NpZ25hdHVyZXMgPSBuZXcgVE9OUXVlcmllc01vZHVsZUNvbGxlY3Rpb24odGhpcywgJ2Jsb2Nrc19zaWduYXR1cmVzJywgJ0Jsb2NrU2lnbmF0dXJlcycpO1xuICAgIH1cblxuICAgIGFzeW5jIGRldGVjdFJlZGlyZWN0KGZldGNoOiBhbnksIHNvdXJjZVVybDogc3RyaW5nKTogUHJvbWlzZTxzdHJpbmc+IHtcbiAgICAgICAgY29uc3QgcmVzcG9uc2UgPSBhd2FpdCBmZXRjaChzb3VyY2VVcmwpO1xuICAgICAgICB0cnkge1xuICAgICAgICAgICAgdGhpcy5zZXJ2ZXJJbmZvID0gcmVzb2x2ZVNlcnZlckluZm8oKGF3YWl0IHJlc3BvbnNlLmpzb24oKSkuZGF0YS5pbmZvLnZlcnNpb24pO1xuICAgICAgICB9IGNhdGNoIHtcbiAgICAgICAgfVxuICAgICAgICBpZiAocmVzcG9uc2UucmVkaXJlY3RlZCA9PT0gdHJ1ZSkge1xuICAgICAgICAgICAgcmV0dXJuIHJlc3BvbnNlLnVybDtcbiAgICAgICAgfVxuICAgICAgICBpZiAocmVzcG9uc2UucmVkaXJlY3RlZCA9PT0gZmFsc2UpIHtcbiAgICAgICAgICAgIHJldHVybiAnJztcbiAgICAgICAgfVxuICAgICAgICBjb25zdCBzb3VyY2VMb2NhdGlvbiA9IFVSTFBhcnRzLnBhcnNlKHNvdXJjZVVybClcbiAgICAgICAgICAgIC5maXhRdWVyeShfID0+ICcnKVxuICAgICAgICAgICAgLnRvU3RyaW5nKClcbiAgICAgICAgICAgIC50b0xvd2VyQ2FzZSgpO1xuICAgICAgICBjb25zdCByZXNwb25zZUxvY2F0aW9uID0gVVJMUGFydHMucGFyc2UocmVzcG9uc2UudXJsKVxuICAgICAgICAgICAgLmZpeFF1ZXJ5KF8gPT4gJycpXG4gICAgICAgICAgICAudG9TdHJpbmcoKVxuICAgICAgICAgICAgLnRvTG93ZXJDYXNlKCk7XG4gICAgICAgIHJldHVybiByZXNwb25zZUxvY2F0aW9uICE9PSBzb3VyY2VMb2NhdGlvbiA/IHJlc3BvbnNlLnVybCA6ICcnO1xuICAgIH1cblxuICAgIGFzeW5jIGdldENsaWVudENvbmZpZygpIHtcbiAgICAgICAgY29uc3QgY29uZmlnID0gdGhpcy5jb25maWc7XG4gICAgICAgIGNvbnN0IGNsaWVudFBsYXRmb3JtID0gVE9OQ2xpZW50LmNsaWVudFBsYXRmb3JtO1xuICAgICAgICBpZiAoIWNsaWVudFBsYXRmb3JtKSB7XG4gICAgICAgICAgICB0aHJvdyBFcnJvcignVE9OIENsaWVudCBkb2VzIG5vdCBjb25maWd1cmVkJyk7XG4gICAgICAgIH1cbiAgICAgICAgY29uc3QgZmV0Y2ggPSBjbGllbnRQbGF0Zm9ybS5mZXRjaDtcblxuICAgICAgICBmdW5jdGlvbiBnZXRDb25maWdGb3JTZXJ2ZXIoc2VydmVyOiBzdHJpbmcpIHtcbiAgICAgICAgICAgIGNvbnN0IGh0dHBQYXJ0cyA9IFVSTFBhcnRzLnBhcnNlKHNlcnZlcilcbiAgICAgICAgICAgICAgICAuZml4UHJvdG9jb2woeCA9PiAoeCA9PT0gJ2h0dHA6Ly8nID8geCA6ICdodHRwczovLycpKVxuICAgICAgICAgICAgICAgIC5maXhQYXRoKHggPT4gYCR7eH0vZ3JhcGhxbGApO1xuICAgICAgICAgICAgY29uc3QgaHR0cCA9IGh0dHBQYXJ0cy50b1N0cmluZygpO1xuICAgICAgICAgICAgY29uc3Qgd3MgPSBodHRwUGFydHNcbiAgICAgICAgICAgICAgICAuZml4UHJvdG9jb2woeCA9PiAoeCA9PT0gJ2h0dHA6Ly8nID8gJ3dzOi8vJyA6ICd3c3M6Ly8nKSlcbiAgICAgICAgICAgICAgICAudG9TdHJpbmcoKTtcbiAgICAgICAgICAgIHJldHVybiB7XG4gICAgICAgICAgICAgICAgaHR0cFVybDogaHR0cCxcbiAgICAgICAgICAgICAgICB3c1VybDogd3MsXG4gICAgICAgICAgICAgICAgZmV0Y2g6IGNsaWVudFBsYXRmb3JtLmZldGNoLFxuICAgICAgICAgICAgICAgIFdlYlNvY2tldDogY2xpZW50UGxhdGZvcm0uV2ViU29ja2V0LFxuICAgICAgICAgICAgfTtcbiAgICAgICAgfVxuXG4gICAgICAgIGZvciAoY29uc3Qgc2VydmVyIG9mIGNvbmZpZy5kYXRhLnNlcnZlcnMpIHtcbiAgICAgICAgICAgIHRyeSB7XG4gICAgICAgICAgICAgICAgY29uc3QgY2xpZW50Q29uZmlnID0gZ2V0Q29uZmlnRm9yU2VydmVyKHNlcnZlcik7XG4gICAgICAgICAgICAgICAgLy8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIG5vLWF3YWl0LWluLWxvb3BcbiAgICAgICAgICAgICAgICBjb25zdCByZWRpcmVjdGVkID0gYXdhaXQgdGhpcy5kZXRlY3RSZWRpcmVjdChcbiAgICAgICAgICAgICAgICAgICAgZmV0Y2gsXG4gICAgICAgICAgICAgICAgICAgIGAke2NsaWVudENvbmZpZy5odHRwVXJsfT9xdWVyeT0lN0JpbmZvJTdCdmVyc2lvbiU3RCU3RGAsXG4gICAgICAgICAgICAgICAgKTtcbiAgICAgICAgICAgICAgICBpZiAocmVkaXJlY3RlZCAhPT0gJycpIHtcbiAgICAgICAgICAgICAgICAgICAgY29uc3QgaHR0cFBhcnRzID0gVVJMUGFydHMucGFyc2UocmVkaXJlY3RlZClcbiAgICAgICAgICAgICAgICAgICAgICAgIC5maXhRdWVyeShfID0+ICcnKTtcbiAgICAgICAgICAgICAgICAgICAgY2xpZW50Q29uZmlnLmh0dHBVcmwgPSBodHRwUGFydHMudG9TdHJpbmcoKTtcbiAgICAgICAgICAgICAgICAgICAgY2xpZW50Q29uZmlnLndzVXJsID0gaHR0cFBhcnRzXG4gICAgICAgICAgICAgICAgICAgICAgICAuZml4UHJvdG9jb2woeCA9PiAoeCA9PT0gJ2h0dHA6Ly8nID8gJ3dzOi8vJyA6ICd3c3M6Ly8nKSlcbiAgICAgICAgICAgICAgICAgICAgICAgIC50b1N0cmluZygpO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICByZXR1cm4gY2xpZW50Q29uZmlnO1xuICAgICAgICAgICAgfSBjYXRjaCAoZXJyb3IpIHtcbiAgICAgICAgICAgICAgICBjb25zb2xlLmxvZyhgW2dldENsaWVudENvbmZpZ10gZm9yIHNlcnZlciBcIiR7c2VydmVyfVwiIGZhaWxlZGAsIGVycm9yKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgICByZXR1cm4gZ2V0Q29uZmlnRm9yU2VydmVyKGNvbmZpZy5kYXRhLnNlcnZlcnNbMF0pO1xuICAgIH1cblxuICAgIGFzeW5jIGdldFNlcnZlckluZm8oc3Bhbj86IFNwYW4gfCBTcGFuQ29udGV4dCk6IFByb21pc2U8U2VydmVySW5mbz4ge1xuICAgICAgICBhd2FpdCB0aGlzLmdyYXBocWxDbGllbnRSZXF1aXJlZChzcGFuKTtcbiAgICAgICAgcmV0dXJuIHRoaXMuc2VydmVySW5mbztcbiAgICB9XG5cbiAgICBnZW5lcmF0ZU9wZXJhdGlvbklkKCk6IHN0cmluZyB7XG4gICAgICAgIHRoaXMub3BlcmF0aW9uSWRTdWZmaXggKz0gMTtcbiAgICAgICAgcmV0dXJuIGAke3RoaXMub3BlcmF0aW9uSWRQcmVmaXh9JHt0aGlzLm9wZXJhdGlvbklkU3VmZml4LnRvU3RyaW5nKDE2KX1gO1xuICAgIH1cblxuICAgIGFzeW5jIGZpbmlzaE9wZXJhdGlvbnMob3BlcmF0aW9uSWRzOiBzdHJpbmdbXSkge1xuICAgICAgICBpZiAob3BlcmF0aW9uSWRzLmxlbmd0aCA9PT0gMCkge1xuICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICB9XG4gICAgICAgIGlmICghKGF3YWl0IHRoaXMuZ2V0U2VydmVySW5mbygpKS5zdXBwb3J0c09wZXJhdGlvbklkKSB7XG4gICAgICAgICAgICByZXR1cm47XG4gICAgICAgIH1cbiAgICAgICAgYXdhaXQgdGhpcy5ncmFwaHFsTXV0YXRpb24oYG11dGF0aW9uIGZpbmlzaE9wZXJhdGlvbnMoJG9wZXJhdGlvbklkczogW1N0cmluZ10pIHtcbiAgICAgICAgICAgICAgICBmaW5pc2hPcGVyYXRpb25zKG9wZXJhdGlvbklkczogJG9wZXJhdGlvbklkcylcbiAgICAgICAgICAgIH1gLCB7XG4gICAgICAgICAgICBvcGVyYXRpb25JZHMsXG4gICAgICAgIH0pO1xuICAgIH1cblxuICAgIGFzeW5jIGdldEFjY291bnRzQ291bnQocGFyZW50U3Bhbj86IChTcGFuIHwgU3BhbkNvbnRleHQpKTogUHJvbWlzZTxudW1iZXI+IHtcbiAgICAgICAgY29uc3QgcmVzdWx0ID0gYXdhaXQgdGhpcy5xdWVyeSgncXVlcnl7Z2V0QWNjb3VudHNDb3VudH0nLCB1bmRlZmluZWQsIHBhcmVudFNwYW4pO1xuICAgICAgICByZXR1cm4gcmVzdWx0LmRhdGEuZ2V0QWNjb3VudHNDb3VudDtcbiAgICB9XG5cbiAgICBhc3luYyBnZXRUcmFuc2FjdGlvbnNDb3VudChwYXJlbnRTcGFuPzogKFNwYW4gfCBTcGFuQ29udGV4dCkpOiBQcm9taXNlPG51bWJlcj4ge1xuICAgICAgICBjb25zdCByZXN1bHQgPSBhd2FpdCB0aGlzLnF1ZXJ5KCdxdWVyeXtnZXRUcmFuc2FjdGlvbnNDb3VudH0nLCB1bmRlZmluZWQsIHBhcmVudFNwYW4pO1xuICAgICAgICByZXR1cm4gcmVzdWx0LmRhdGEuZ2V0VHJhbnNhY3Rpb25zQ291bnQ7XG4gICAgfVxuXG4gICAgYXN5bmMgZ2V0QWNjb3VudHNUb3RhbEJhbGFuY2UocGFyZW50U3Bhbj86IChTcGFuIHwgU3BhbkNvbnRleHQpKTogUHJvbWlzZTxzdHJpbmc+IHtcbiAgICAgICAgY29uc3QgcmVzdWx0ID0gYXdhaXQgdGhpcy5xdWVyeSgncXVlcnl7Z2V0QWNjb3VudHNUb3RhbEJhbGFuY2V9JywgdW5kZWZpbmVkLCBwYXJlbnRTcGFuKTtcbiAgICAgICAgcmV0dXJuIHJlc3VsdC5kYXRhLmdldEFjY291bnRzVG90YWxCYWxhbmNlO1xuICAgIH1cblxuICAgIGFzeW5jIHBvc3RSZXF1ZXN0cyhyZXF1ZXN0czogUmVxdWVzdFtdLCBwYXJlbnRTcGFuPzogKFNwYW4gfCBTcGFuQ29udGV4dCkpOiBQcm9taXNlPGFueT4ge1xuICAgICAgICByZXR1cm4gdGhpcy5jb250ZXh0LnRyYWNlKCdxdWVyaWVzLnBvc3RSZXF1ZXN0cycsIGFzeW5jIChzcGFuKSA9PiB7XG4gICAgICAgICAgICByZXR1cm4gdGhpcy5ncmFwaHFsTXV0YXRpb24oYG11dGF0aW9uIHBvc3RSZXF1ZXN0cygkcmVxdWVzdHM6IFtSZXF1ZXN0XSkge1xuICAgICAgICAgICAgICAgIHBvc3RSZXF1ZXN0cyhyZXF1ZXN0czogJHJlcXVlc3RzKVxuICAgICAgICAgICAgfWAsIHtcbiAgICAgICAgICAgICAgICByZXF1ZXN0cyxcbiAgICAgICAgICAgIH0sIHNwYW4pO1xuICAgICAgICB9LCBwYXJlbnRTcGFuKTtcbiAgICB9XG5cbiAgICBhc3luYyBtdXRhdGlvbihcbiAgICAgICAgcWw6IHN0cmluZyxcbiAgICAgICAgdmFyaWFibGVzOiB7IFtzdHJpbmddOiBhbnkgfSA9IHt9LFxuICAgICAgICBwYXJlbnRTcGFuPzogKFNwYW4gfCBTcGFuQ29udGV4dCksXG4gICAgKTogUHJvbWlzZTxhbnk+IHtcbiAgICAgICAgcmV0dXJuIHRoaXMuY29udGV4dC50cmFjZSgncXVlcmllcy5tdXRhdGlvbicsIGFzeW5jIChzcGFuOiBTcGFuKSA9PiB7XG4gICAgICAgICAgICBzcGFuLnNldFRhZygncGFyYW1zJywge1xuICAgICAgICAgICAgICAgIG11dGF0aW9uOiBxbCxcbiAgICAgICAgICAgICAgICB2YXJpYWJsZXMsXG4gICAgICAgICAgICB9KTtcbiAgICAgICAgICAgIHJldHVybiB0aGlzLmdyYXBocWxNdXRhdGlvbihxbCwgdmFyaWFibGVzLCBzcGFuKTtcbiAgICAgICAgfSwgcGFyZW50U3Bhbik7XG4gICAgfVxuXG4gICAgYXN5bmMgcXVlcnkoXG4gICAgICAgIHFsOiBzdHJpbmcsXG4gICAgICAgIHZhcmlhYmxlczogeyBbc3RyaW5nXTogYW55IH0gPSB7fSxcbiAgICAgICAgcGFyZW50U3Bhbj86IChTcGFuIHwgU3BhbkNvbnRleHQpLFxuICAgICk6IFByb21pc2U8YW55PiB7XG4gICAgICAgIHJldHVybiB0aGlzLmNvbnRleHQudHJhY2UoJ3F1ZXJpZXMucXVlcnknLCBhc3luYyAoc3BhbjogU3BhbikgPT4ge1xuICAgICAgICAgICAgc3Bhbi5zZXRUYWcoJ3BhcmFtcycsIHtcbiAgICAgICAgICAgICAgICBxdWVyeTogcWwsXG4gICAgICAgICAgICAgICAgdmFyaWFibGVzLFxuICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICByZXR1cm4gdGhpcy5ncmFwaHFsUXVlcnkocWwsIHZhcmlhYmxlcywgc3Bhbik7XG4gICAgICAgIH0sIHBhcmVudFNwYW4pO1xuICAgIH1cblxuICAgIGFzeW5jIGdyYXBocWxNdXRhdGlvbihxbDogc3RyaW5nLCB2YXJpYWJsZXM6IHsgW3N0cmluZ106IGFueSB9ID0ge30sIHNwYW46IFNwYW4pOiBQcm9taXNlPGFueT4ge1xuICAgICAgICBjb25zdCBtdXRhdGlvbiA9IGdxbChbcWxdKTtcbiAgICAgICAgcmV0dXJuIHRoaXMuZ3JhcGhRbCgoY2xpZW50KSA9PiBjbGllbnQubXV0YXRlKHtcbiAgICAgICAgICAgIG11dGF0aW9uLFxuICAgICAgICAgICAgdmFyaWFibGVzLFxuICAgICAgICAgICAgY29udGV4dDoge1xuICAgICAgICAgICAgICAgIHRyYWNlU3Bhbjogc3BhbixcbiAgICAgICAgICAgIH0sXG4gICAgICAgIH0pKTtcbiAgICB9XG5cbiAgICBhc3luYyBncmFwaHFsUXVlcnkocWw6IHN0cmluZywgdmFyaWFibGVzOiB7IFtzdHJpbmddOiBhbnkgfSA9IHt9LCBzcGFuOiBTcGFuKTogUHJvbWlzZTxhbnk+IHtcbiAgICAgICAgY29uc3QgcXVlcnkgPSBncWwoW3FsXSk7XG4gICAgICAgIHJldHVybiB0aGlzLmdyYXBoUWwoKGNsaWVudCkgPT4gY2xpZW50LnF1ZXJ5KHtcbiAgICAgICAgICAgIHF1ZXJ5LFxuICAgICAgICAgICAgdmFyaWFibGVzLFxuICAgICAgICAgICAgY29udGV4dDoge1xuICAgICAgICAgICAgICAgIHRyYWNlU3Bhbjogc3BhbixcbiAgICAgICAgICAgIH0sXG4gICAgICAgIH0pLCBzcGFuKTtcbiAgICB9XG5cbiAgICBhc3luYyBncmFwaFFsKHJlcXVlc3Q6IChjbGllbnQ6IEFwb2xsb0NsaWVudCkgPT4gUHJvbWlzZTxhbnk+LCBzcGFuOiBTcGFuKTogUHJvbWlzZTxhbnk+IHtcbiAgICAgICAgY29uc3QgY2xpZW50ID0gYXdhaXQgdGhpcy5ncmFwaHFsQ2xpZW50UmVxdWlyZWQoc3Bhbik7XG4gICAgICAgIHRyeSB7XG4gICAgICAgICAgICByZXR1cm4gYXdhaXQgcmVxdWVzdChjbGllbnQpO1xuICAgICAgICB9IGNhdGNoIChlcnJvcikge1xuICAgICAgICAgICAgY29uc3QgZ3FsRXJyID0gZXJyb3IuZ3JhcGhRTEVycm9ycyAmJiBlcnJvci5ncmFwaFFMRXJyb3JzWzBdO1xuICAgICAgICAgICAgaWYgKGdxbEVycikge1xuICAgICAgICAgICAgICAgIGNvbnN0IGNsaWVudEVyciA9IG5ldyBFcnJvcihncWxFcnIubWVzc2FnZSk7XG4gICAgICAgICAgICAgICAgY29uc3QgZ3FsRXhjID0gKGdxbEVyci5leHRlbnNpb25zICYmIGdxbEVyci5leHRlbnNpb25zLmV4Y2VwdGlvbikgfHwge307XG4gICAgICAgICAgICAgICAgKGNsaWVudEVycjogYW55KS5udW1iZXIgPSBncWxFeGMuY29kZSB8fCAwO1xuICAgICAgICAgICAgICAgIChjbGllbnRFcnI6IGFueSkuY29kZSA9IGdxbEV4Yy5jb2RlIHx8IDA7XG4gICAgICAgICAgICAgICAgKGNsaWVudEVycjogYW55KS5zb3VyY2UgPSBncWxFeGMuc291cmNlIHx8ICdjbGllbnQnO1xuICAgICAgICAgICAgICAgIHRocm93IGNsaWVudEVycjtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGNvbnN0IGVycm9ycyA9IGVycm9yXG4gICAgICAgICAgICAgICAgJiYgZXJyb3IubmV0d29ya0Vycm9yXG4gICAgICAgICAgICAgICAgJiYgZXJyb3IubmV0d29ya0Vycm9yLnJlc3VsdFxuICAgICAgICAgICAgICAgICYmIGVycm9yLm5ldHdvcmtFcnJvci5yZXN1bHQuZXJyb3JzO1xuICAgICAgICAgICAgaWYgKGVycm9ycykge1xuICAgICAgICAgICAgICAgIHRocm93IFRPTkNsaWVudEVycm9yLnF1ZXJ5RmFpbGVkKGVycm9ycyk7XG4gICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAgIHRocm93IGVycm9yO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgfVxuXG4gICAgYXN5bmMgZ3JhcGhxbENsaWVudFJlcXVpcmVkKHBhcmVudFNwYW4/OiBTcGFuIHwgU3BhbkNvbnRleHQpOiBQcm9taXNlPEFwb2xsb0NsaWVudD4ge1xuICAgICAgICBpZiAodGhpcy5ncmFwaHFsQ2xpZW50KSB7XG4gICAgICAgICAgICByZXR1cm4gdGhpcy5ncmFwaHFsQ2xpZW50O1xuICAgICAgICB9XG4gICAgICAgIGlmICh0aGlzLmdyYXBocWxDbGllbnRDcmVhdGlvbikge1xuICAgICAgICAgICAgYXdhaXQgdGhpcy5ncmFwaHFsQ2xpZW50Q3JlYXRpb24ubGlzdGVuKCk7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICBjb25zdCBjcmVhdGlvbiA9IG5ldyBNdWx0aWNhc3RQcm9taXNlKCk7XG4gICAgICAgICAgICB0aGlzLmdyYXBocWxDbGllbnRDcmVhdGlvbiA9IGNyZWF0aW9uO1xuICAgICAgICAgICAgdHJ5IHtcbiAgICAgICAgICAgICAgICBhd2FpdCB0aGlzLmNvbnRleHQudHJhY2UoJ3NldHVwIGNsaWVudCcsIChzcGFuKSA9PiB7XG4gICAgICAgICAgICAgICAgICAgIHJldHVybiB0aGlzLmNyZWF0ZUdyYXBocWxDbGllbnQoc3Bhbik7XG4gICAgICAgICAgICAgICAgfSwgcGFyZW50U3Bhbik7XG4gICAgICAgICAgICAgICAgdGhpcy5ncmFwaHFsQ2xpZW50Q3JlYXRpb24gPSBudWxsO1xuICAgICAgICAgICAgICAgIGNyZWF0aW9uLnJlc29sdmUodGhpcy5ncmFwaHFsQ2xpZW50KTtcbiAgICAgICAgICAgIH0gY2F0Y2ggKGVycm9yKSB7XG4gICAgICAgICAgICAgICAgdGhpcy5ncmFwaHFsQ2xpZW50Q3JlYXRpb24gPSBudWxsO1xuICAgICAgICAgICAgICAgIGNyZWF0aW9uLnJlamVjdChlcnJvcik7XG4gICAgICAgICAgICAgICAgdGhyb3cgZXJyb3I7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgICAgcmV0dXJuIHRoaXMuZ3JhcGhxbENsaWVudDtcbiAgICB9XG5cbiAgICBhc3luYyBjcmVhdGVHcmFwaHFsQ2xpZW50KHNwYW46IFNwYW4gfCBTcGFuQ29udGV4dCkge1xuICAgICAgICBjb25zdCB1c2VIdHRwID0gIXRoaXMuY29uZmlnLmRhdGEudXNlV2ViU29ja2V0Rm9yUXVlcmllcztcbiAgICAgICAgbGV0IGNsaWVudENvbmZpZyA9IGF3YWl0IHRoaXMuZ2V0Q2xpZW50Q29uZmlnKCk7XG4gICAgICAgIGxldCB3c0xpbms6ID9XZWJTb2NrZXRMaW5rID0gbnVsbDtcbiAgICAgICAgbGV0IGh0dHBMaW5rOiA/SHR0cExpbmsgPSBudWxsO1xuXG4gICAgICAgIGNvbnN0IHN1YnNPcHRpb25zID0gdGhpcy5jb25maWcudHJhY2VyLmluamVjdChzcGFuLCBGT1JNQVRfVEVYVF9NQVAsIHt9KTtcbiAgICAgICAgY29uc3Qgc3Vic2NyaXB0aW9uQ2xpZW50ID0gbmV3IFN1YnNjcmlwdGlvbkNsaWVudChcbiAgICAgICAgICAgIGNsaWVudENvbmZpZy53c1VybCxcbiAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICByZWNvbm5lY3Q6IHRydWUsXG4gICAgICAgICAgICAgICAgY29ubmVjdGlvblBhcmFtczogKCkgPT4gKHtcbiAgICAgICAgICAgICAgICAgICAgYWNjZXNzS2V5OiB0aGlzLmNvbmZpZy5kYXRhICYmIHRoaXMuY29uZmlnLmRhdGEuYWNjZXNzS2V5LFxuICAgICAgICAgICAgICAgICAgICBoZWFkZXJzOiBzdWJzT3B0aW9ucyxcbiAgICAgICAgICAgICAgICB9KSxcbiAgICAgICAgICAgIH0sXG4gICAgICAgICAgICBjbGllbnRDb25maWcuV2ViU29ja2V0LFxuICAgICAgICApO1xuICAgICAgICBzdWJzY3JpcHRpb25DbGllbnQub25SZWNvbm5lY3RlZCgoKSA9PiB7XG4gICAgICAgICAgICBjb25zb2xlLmxvZygnW1RPTkNsaWVudC5xdWVyaWVzXScsICdXZWJTb2NrZXQgUmVjb25uZWN0ZWQnKTtcbiAgICAgICAgfSk7XG4gICAgICAgIGxldCBkZXRlY3RpbmdSZWRpcmVjdGlvbiA9IGZhbHNlO1xuICAgICAgICBzdWJzY3JpcHRpb25DbGllbnQub25FcnJvcigoKSA9PiB7XG4gICAgICAgICAgICBjb25zb2xlLmxvZygnW1RPTkNsaWVudC5xdWVyaWVzXScsICdXZWJTb2NrZXQgRmFpbGVkJyk7XG4gICAgICAgICAgICBpZiAoZGV0ZWN0aW5nUmVkaXJlY3Rpb24pIHtcbiAgICAgICAgICAgICAgICByZXR1cm47XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICAoYXN5bmMgKCkgPT4ge1xuICAgICAgICAgICAgICAgIGRldGVjdGluZ1JlZGlyZWN0aW9uID0gdHJ1ZTtcbiAgICAgICAgICAgICAgICB0cnkge1xuICAgICAgICAgICAgICAgICAgICBjb25zdCBuZXdDb25maWcgPSBhd2FpdCB0aGlzLmdldENsaWVudENvbmZpZygpO1xuICAgICAgICAgICAgICAgICAgICBjb25zdCBjb25maWdJc0NoYW5nZWQgPSBuZXdDb25maWcuaHR0cFVybCAhPT0gY2xpZW50Q29uZmlnLmh0dHBVcmxcbiAgICAgICAgICAgICAgICAgICAgICAgIHx8IG5ld0NvbmZpZy53c1VybCAhPT0gY2xpZW50Q29uZmlnLndzVXJsO1xuICAgICAgICAgICAgICAgICAgICBpZiAoY29uZmlnSXNDaGFuZ2VkKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICBjb25zb2xlLmxvZygnW1RPTkNsaWVudC5xdWVyaWVzXScsICdDbGllbnQgY29uZmlnIGNoYW5nZWQnKTtcbiAgICAgICAgICAgICAgICAgICAgICAgIGNsaWVudENvbmZpZyA9IG5ld0NvbmZpZztcbiAgICAgICAgICAgICAgICAgICAgICAgIHN1YnNjcmlwdGlvbkNsaWVudC51cmwgPSBuZXdDb25maWcud3NVcmw7XG4gICAgICAgICAgICAgICAgICAgICAgICBpZiAod3NMaW5rKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgd3NMaW5rLnVybCA9IG5ld0NvbmZpZy53c1VybDtcbiAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICAgIGlmIChodHRwTGluaykge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGh0dHBMaW5rLnVyaSA9IG5ld0NvbmZpZy5odHRwVXJsO1xuICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgfSBjYXRjaCAoZXJyKSB7XG4gICAgICAgICAgICAgICAgICAgIGNvbnNvbGUubG9nKCdbVE9OQ2xpZW50LnF1ZXJpZXNdIHJlZGlyZWN0aW9uIGRldGVjdG9yIGZhaWxlZCcsIGVycik7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIGRldGVjdGluZ1JlZGlyZWN0aW9uID0gZmFsc2U7XG4gICAgICAgICAgICB9KSgpO1xuICAgICAgICB9KTtcbiAgICAgICAgc3Vic2NyaXB0aW9uQ2xpZW50Lm1heENvbm5lY3RUaW1lR2VuZXJhdG9yLmR1cmF0aW9uID0gKCkgPT4ge1xuICAgICAgICAgICAgcmV0dXJuIHN1YnNjcmlwdGlvbkNsaWVudC5tYXhDb25uZWN0VGltZUdlbmVyYXRvci5tYXg7XG4gICAgICAgIH07XG5cbiAgICAgICAgY29uc3QgdHJhY2VyTGluayA9IGF3YWl0IHNldENvbnRleHQoKF8sIHJlcSkgPT4ge1xuICAgICAgICAgICAgY29uc3QgcmVzb2x2ZWRTcGFuID0gKHJlcSAmJiByZXEudHJhY2VTcGFuKSB8fCBzcGFuO1xuICAgICAgICAgICAgcmVxLmhlYWRlcnMgPSB7fTtcbiAgICAgICAgICAgIHRoaXMuY29uZmlnLnRyYWNlci5pbmplY3QocmVzb2x2ZWRTcGFuLCBGT1JNQVRfVEVYVF9NQVAsIHJlcS5oZWFkZXJzKTtcbiAgICAgICAgICAgIGNvbnN0IGFjY2Vzc0tleSA9IHRoaXMuY29uZmlnLmRhdGEgJiYgdGhpcy5jb25maWcuZGF0YS5hY2Nlc3NLZXk7XG4gICAgICAgICAgICBpZiAoYWNjZXNzS2V5KSB7XG4gICAgICAgICAgICAgICAgcmVxLmhlYWRlcnMuYWNjZXNzS2V5ID0gYWNjZXNzS2V5O1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgcmV0dXJuIHtcbiAgICAgICAgICAgICAgICBoZWFkZXJzOiByZXEuaGVhZGVycyxcbiAgICAgICAgICAgIH07XG4gICAgICAgIH0pO1xuICAgICAgICBjb25zdCB3cmFwTGluayA9IChsaW5rOiBBcG9sbG9MaW5rKTogQXBvbGxvTGluayA9PiB0cmFjZXJMaW5rLmNvbmNhdChsaW5rKTtcbiAgICAgICAgY29uc3QgaXNTdWJzY3JpcHRpb24gPSAoeyBxdWVyeSB9KSA9PiB7XG4gICAgICAgICAgICBjb25zdCBkZWZpbml0aW9uID0gZ2V0TWFpbkRlZmluaXRpb24ocXVlcnkpO1xuICAgICAgICAgICAgcmV0dXJuIChcbiAgICAgICAgICAgICAgICBkZWZpbml0aW9uLmtpbmQgPT09ICdPcGVyYXRpb25EZWZpbml0aW9uJ1xuICAgICAgICAgICAgICAgICYmIGRlZmluaXRpb24ub3BlcmF0aW9uID09PSAnc3Vic2NyaXB0aW9uJ1xuICAgICAgICAgICAgKTtcbiAgICAgICAgfTtcbiAgICAgICAgd3NMaW5rID0gbmV3IFdlYlNvY2tldExpbmsoc3Vic2NyaXB0aW9uQ2xpZW50KTtcbiAgICAgICAgaHR0cExpbmsgPSB1c2VIdHRwXG4gICAgICAgICAgICA/IG5ldyBIdHRwTGluayh7XG4gICAgICAgICAgICAgICAgdXJpOiBjbGllbnRDb25maWcuaHR0cFVybCxcbiAgICAgICAgICAgICAgICBmZXRjaDogY2xpZW50Q29uZmlnLmZldGNoLFxuICAgICAgICAgICAgfSlcbiAgICAgICAgICAgIDogbnVsbDtcblxuICAgICAgICBjb25zdCBsaW5rID0gaHR0cExpbmtcbiAgICAgICAgICAgID8gc3BsaXQoaXNTdWJzY3JpcHRpb24sIHdyYXBMaW5rKHdzTGluayksIHdyYXBMaW5rKGh0dHBMaW5rKSlcbiAgICAgICAgICAgIDogd3JhcExpbmsod3NMaW5rKTtcbiAgICAgICAgdGhpcy5ncmFwaHFsQ2xpZW50ID0gbmV3IEFwb2xsb0NsaWVudCh7XG4gICAgICAgICAgICBjYWNoZTogbmV3IEluTWVtb3J5Q2FjaGUoe30pLFxuICAgICAgICAgICAgbGluayxcbiAgICAgICAgICAgIGRlZmF1bHRPcHRpb25zOiB7XG4gICAgICAgICAgICAgICAgd2F0Y2hRdWVyeToge1xuICAgICAgICAgICAgICAgICAgICBmZXRjaFBvbGljeTogJ25vLWNhY2hlJyxcbiAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgIHF1ZXJ5OiB7XG4gICAgICAgICAgICAgICAgICAgIGZldGNoUG9saWN5OiAnbm8tY2FjaGUnLFxuICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICB9LFxuICAgICAgICB9KTtcbiAgICB9XG5cbiAgICBhc3luYyBjbG9zZSgpIHtcbiAgICAgICAgaWYgKHRoaXMuZ3JhcGhxbENsaWVudCkge1xuICAgICAgICAgICAgY29uc3QgY2xpZW50ID0gdGhpcy5ncmFwaHFsQ2xpZW50O1xuICAgICAgICAgICAgdGhpcy5ncmFwaHFsQ2xpZW50ID0gbnVsbDtcbiAgICAgICAgICAgIGNsaWVudC5zdG9wKCk7XG4gICAgICAgICAgICBhd2FpdCBjbGllbnQuY2xlYXJTdG9yZSgpO1xuICAgICAgICB9XG4gICAgfVxuXG4gICAgdHJhbnNhY3Rpb25zOiBUT05RQ29sbGVjdGlvbjtcblxuICAgIG1lc3NhZ2VzOiBUT05RQ29sbGVjdGlvbjtcblxuICAgIGJsb2NrczogVE9OUUNvbGxlY3Rpb247XG5cbiAgICBhY2NvdW50czogVE9OUUNvbGxlY3Rpb247XG5cbiAgICBibG9ja3Nfc2lnbmF0dXJlczogVE9OUUNvbGxlY3Rpb247XG5cbiAgICBncmFwaHFsQ2xpZW50OiBBcG9sbG9DbGllbnQ7XG59XG5cblxuY2xhc3MgVE9OUXVlcmllc01vZHVsZUNvbGxlY3Rpb24gaW1wbGVtZW50cyBUT05RQ29sbGVjdGlvbiB7XG4gICAgbW9kdWxlOiBUT05RdWVyaWVzTW9kdWxlO1xuXG4gICAgY29sbGVjdGlvbk5hbWU6IHN0cmluZztcblxuICAgIHR5cGVOYW1lOiBzdHJpbmc7XG5cbiAgICBjb25zdHJ1Y3RvcihcbiAgICAgICAgbW9kdWxlOiBUT05RdWVyaWVzTW9kdWxlLFxuICAgICAgICBjb2xsZWN0aW9uTmFtZTogc3RyaW5nLFxuICAgICAgICB0eXBlTmFtZTogc3RyaW5nLFxuICAgICkge1xuICAgICAgICB0aGlzLm1vZHVsZSA9IG1vZHVsZTtcbiAgICAgICAgdGhpcy5jb2xsZWN0aW9uTmFtZSA9IGNvbGxlY3Rpb25OYW1lO1xuICAgICAgICB0aGlzLnR5cGVOYW1lID0gdHlwZU5hbWU7XG4gICAgfVxuXG4gICAgYXN5bmMgcXVlcnkoXG4gICAgICAgIC4uLmFyZ3NcbiAgICAgICAgLypcbiAgICAgICAgICAgIGZpbHRlck9yUGFyYW1zOiBhbnkgfCBUT05RdWVyeVBhcmFtcyxcbiAgICAgICAgICAgIHJlc3VsdDogc3RyaW5nLFxuICAgICAgICAgICAgb3JkZXJCeT86IE9yZGVyQnlbXSxcbiAgICAgICAgICAgIGxpbWl0PzogbnVtYmVyLFxuICAgICAgICAgICAgdGltZW91dD86IG51bWJlcixcbiAgICAgICAgICAgIHBhcmVudFNwYW4/OiAoU3BhbiB8IFNwYW5Db250ZXh0KVxuICAgICAgICAgKi9cbiAgICApOiBQcm9taXNlPGFueT4ge1xuICAgICAgICBjb25zdCB7XG4gICAgICAgICAgICBmaWx0ZXIsXG4gICAgICAgICAgICByZXN1bHQsXG4gICAgICAgICAgICBvcmRlckJ5LFxuICAgICAgICAgICAgbGltaXQsXG4gICAgICAgICAgICB0aW1lb3V0LFxuICAgICAgICAgICAgb3BlcmF0aW9uSWQsXG4gICAgICAgICAgICBwYXJlbnRTcGFuLFxuICAgICAgICB9ID0gcmVzb2x2ZVBhcmFtczxUT05RdWVyeVBhcmFtcz4oYXJncywgJ2ZpbHRlcicsICgpID0+ICh7XG4gICAgICAgICAgICBmaWx0ZXI6IGFyZ3NbMF0sXG4gICAgICAgICAgICByZXN1bHQ6IChhcmdzWzFdOiBhbnkpLFxuICAgICAgICAgICAgb3JkZXJCeTogKGFyZ3NbMl06IGFueSksXG4gICAgICAgICAgICBsaW1pdDogKGFyZ3NbM106IGFueSksXG4gICAgICAgICAgICB0aW1lb3V0OiAoYXJnc1s0XTogYW55KSxcbiAgICAgICAgICAgIHBhcmVudFNwYW46IGFyZ3NbNV0sXG4gICAgICAgIH0pKTtcbiAgICAgICAgcmV0dXJuIHRoaXMubW9kdWxlLmNvbnRleHQudHJhY2UoYCR7dGhpcy5jb2xsZWN0aW9uTmFtZX0ucXVlcnlgLCBhc3luYyAoc3BhbikgPT4ge1xuICAgICAgICAgICAgc3Bhbi5zZXRUYWcoJ3BhcmFtcycsIHtcbiAgICAgICAgICAgICAgICBmaWx0ZXIsXG4gICAgICAgICAgICAgICAgcmVzdWx0LFxuICAgICAgICAgICAgICAgIG9yZGVyQnksXG4gICAgICAgICAgICAgICAgbGltaXQsXG4gICAgICAgICAgICAgICAgdGltZW91dCxcbiAgICAgICAgICAgICAgICBvcGVyYXRpb25JZCxcbiAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgY29uc3QgdXNlT3BlcmF0aW9uSWQgPSBvcGVyYXRpb25JZFxuICAgICAgICAgICAgICAgICYmIChhd2FpdCB0aGlzLm1vZHVsZS5nZXRTZXJ2ZXJJbmZvKHNwYW4pKS5zdXBwb3J0c09wZXJhdGlvbklkO1xuICAgICAgICAgICAgY29uc3QgYyA9IHRoaXMuY29sbGVjdGlvbk5hbWU7XG4gICAgICAgICAgICBjb25zdCB0ID0gdGhpcy50eXBlTmFtZTtcbiAgICAgICAgICAgIGNvbnN0IHFsID0gYFxuICAgICAgICAgICAgcXVlcnkgJHtjfShcbiAgICAgICAgICAgICAgICAkZmlsdGVyOiAke3R9RmlsdGVyLFxuICAgICAgICAgICAgICAgICRvcmRlckJ5OiBbUXVlcnlPcmRlckJ5XSwgXG4gICAgICAgICAgICAgICAgJGxpbWl0OiBJbnQsIFxuICAgICAgICAgICAgICAgICR0aW1lb3V0OiBGbG9hdFxuICAgICAgICAgICAgICAgICR7dXNlT3BlcmF0aW9uSWQgPyAnLCAkb3BlcmF0aW9uSWQ6IFN0cmluZycgOiAnJ31cbiAgICAgICAgICAgICApIHtcbiAgICAgICAgICAgICAgICAke2N9KFxuICAgICAgICAgICAgICAgICAgICBmaWx0ZXI6ICRmaWx0ZXIsIFxuICAgICAgICAgICAgICAgICAgICBvcmRlckJ5OiAkb3JkZXJCeSwgXG4gICAgICAgICAgICAgICAgICAgIGxpbWl0OiAkbGltaXQsIFxuICAgICAgICAgICAgICAgICAgICB0aW1lb3V0OiAkdGltZW91dFxuICAgICAgICAgICAgICAgICAgICAke3VzZU9wZXJhdGlvbklkID8gJywgb3BlcmF0aW9uSWQ6ICRvcGVyYXRpb25JZCcgOiAnJ31cbiAgICAgICAgICAgICAgICApIHsgJHtyZXN1bHR9IH1cbiAgICAgICAgICAgIH1gO1xuICAgICAgICAgICAgY29uc3QgdmFyaWFibGVzOiB7IFtzdHJpbmddOiBhbnkgfSA9IHtcbiAgICAgICAgICAgICAgICBmaWx0ZXIsXG4gICAgICAgICAgICAgICAgb3JkZXJCeSxcbiAgICAgICAgICAgICAgICBsaW1pdCxcbiAgICAgICAgICAgIH07XG4gICAgICAgICAgICBpZiAodXNlT3BlcmF0aW9uSWQpIHtcbiAgICAgICAgICAgICAgICB2YXJpYWJsZXMub3BlcmF0aW9uSWQgPSBvcGVyYXRpb25JZDtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGlmICh0aW1lb3V0KSB7XG4gICAgICAgICAgICAgICAgdmFyaWFibGVzLnRpbWVvdXQgPSBNYXRoLm1pbihNQVhfVElNRU9VVCwgdGltZW91dCk7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICByZXR1cm4gKGF3YWl0IHRoaXMubW9kdWxlLmdyYXBocWxRdWVyeShxbCwgdmFyaWFibGVzLCBzcGFuKSkuZGF0YVtjXTtcbiAgICAgICAgfSwgcGFyZW50U3Bhbik7XG4gICAgfVxuXG4gICAgYXN5bmMgYWdncmVnYXRlKFxuICAgICAgICBwYXJhbXM6IFRPTlF1ZXJ5QWdncmVnYXRlUGFyYW1zXG4gICAgKTogUHJvbWlzZTxzdHJpbmdbXT4ge1xuICAgICAgICByZXR1cm4gdGhpcy5tb2R1bGUuY29udGV4dC50cmFjZShgJHt0aGlzLmNvbGxlY3Rpb25OYW1lfS5hZ2dyZWdhdGVgLCBhc3luYyAoc3BhbikgPT4ge1xuICAgICAgICAgICAgc3Bhbi5zZXRUYWcoJ3BhcmFtcycsIHtcbiAgICAgICAgICAgICAgICBmaWx0ZXI6IHBhcmFtcy5maWx0ZXIsXG4gICAgICAgICAgICAgICAgZmllbGRzOiBwYXJhbXMuZmllbGRzLFxuICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICBpZiAoIShhd2FpdCB0aGlzLm1vZHVsZS5nZXRTZXJ2ZXJJbmZvKHNwYW4pKS5zdXBwb3J0c0FnZ3JlZ2F0aW9ucykge1xuICAgICAgICAgICAgICAgIHRocm93IFRPTkNsaWVudEVycm9yLnNlcnZlckRvZXNudFN1cHBvcnRBZ2dyZWdhdGlvbnMoKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGNvbnN0IHQgPSB0aGlzLnR5cGVOYW1lO1xuICAgICAgICAgICAgY29uc3QgcSA9IHRoaXMudHlwZU5hbWUuZW5kc1dpdGgoJ3MnKSA/IGBhZ2dyZWdhdGUke3R9YCA6IGBhZ2dyZWdhdGUke3R9c2A7XG4gICAgICAgICAgICBjb25zdCBxbCA9IGBcbiAgICAgICAgICAgIHF1ZXJ5ICR7cX0oXG4gICAgICAgICAgICAgICAgJGZpbHRlcjogJHt0fUZpbHRlcixcbiAgICAgICAgICAgICAgICAkZmllbGRzOiBbRmllbGRBZ2dyZWdhdGlvbl0gXG4gICAgICAgICAgICAgKSB7XG4gICAgICAgICAgICAgICAgJHtxfShcbiAgICAgICAgICAgICAgICAgICAgZmlsdGVyOiAkZmlsdGVyLCBcbiAgICAgICAgICAgICAgICAgICAgZmllbGRzOiAkZmllbGRzIFxuICAgICAgICAgICAgICAgIClcbiAgICAgICAgICAgIH1gO1xuICAgICAgICAgICAgY29uc3QgdmFyaWFibGVzOiB7IFtzdHJpbmddOiBhbnkgfSA9IHtcbiAgICAgICAgICAgICAgICBmaWx0ZXI6IHBhcmFtcy5maWx0ZXIsXG4gICAgICAgICAgICAgICAgZmllbGRzOiBwYXJhbXMuZmllbGRzLFxuICAgICAgICAgICAgfTtcbiAgICAgICAgICAgIHJldHVybiAoYXdhaXQgdGhpcy5tb2R1bGUuZ3JhcGhxbFF1ZXJ5KHFsLCB2YXJpYWJsZXMsIHNwYW4pKS5kYXRhW3FdO1xuICAgICAgICB9LCBwYXJhbXMucGFyZW50U3Bhbik7XG4gICAgfVxuXG4gICAgc3Vic2NyaWJlKFxuICAgICAgICAuLi5hcmdzXG4gICAgICAgIC8qXG4gICAgICAgIGZpbHRlck9yUGFyYW1zOiBhbnkgfCBUT05TdWJzY3JpYmVQYXJhbXMsXG4gICAgICAgIHJlc3VsdD86IHN0cmluZyxcbiAgICAgICAgb25Eb2NFdmVudD86IERvY0V2ZW50LFxuICAgICAgICBvbkVycm9yPzogKGVycjogRXJyb3IpID0+IHZvaWRcbiAgICAgICAgICovXG4gICAgKTogU3Vic2NyaXB0aW9uIHtcbiAgICAgICAgY29uc3Qge1xuICAgICAgICAgICAgZmlsdGVyLFxuICAgICAgICAgICAgcmVzdWx0LFxuICAgICAgICAgICAgb25Eb2NFdmVudCxcbiAgICAgICAgICAgIG9uRXJyb3IsXG4gICAgICAgIH0gPSByZXNvbHZlUGFyYW1zPFRPTlN1YnNjcmliZVBhcmFtcz4oYXJncywgJ2ZpbHRlcicsICgpID0+ICh7XG4gICAgICAgICAgICBmaWx0ZXI6IGFyZ3NbMF0sXG4gICAgICAgICAgICByZXN1bHQ6IChhcmdzWzFdOiBhbnkpLFxuICAgICAgICAgICAgb25Eb2NFdmVudDogKGFyZ3NbMl06IGFueSksXG4gICAgICAgICAgICBvbkVycm9yOiAoYXJnc1szXTogYW55KSxcbiAgICAgICAgfSkpO1xuICAgICAgICBjb25zdCBzcGFuID0gdGhpcy5tb2R1bGUuY29uZmlnLnRyYWNlci5zdGFydFNwYW4oJ1RPTlF1ZXJpZXNNb2R1bGUuanM6c3Vic2NyaWJlICcpO1xuICAgICAgICBzcGFuLnNldFRhZyhUYWdzLlNQQU5fS0lORCwgJ2NsaWVudCcpO1xuICAgICAgICBjb25zdCB0ZXh0ID0gYHN1YnNjcmlwdGlvbiAke3RoaXMuY29sbGVjdGlvbk5hbWV9KCRmaWx0ZXI6ICR7dGhpcy50eXBlTmFtZX1GaWx0ZXIpIHtcbiAgICAgICAgICAgICR7dGhpcy5jb2xsZWN0aW9uTmFtZX0oZmlsdGVyOiAkZmlsdGVyKSB7ICR7cmVzdWx0fSB9XG4gICAgICAgIH1gO1xuICAgICAgICBjb25zdCBxdWVyeSA9IGdxbChbdGV4dF0pO1xuICAgICAgICBsZXQgc3Vic2NyaXB0aW9uID0gbnVsbDtcbiAgICAgICAgKGFzeW5jICgpID0+IHtcbiAgICAgICAgICAgIHRyeSB7XG4gICAgICAgICAgICAgICAgY29uc3QgY2xpZW50ID0gYXdhaXQgdGhpcy5tb2R1bGUuZ3JhcGhxbENsaWVudFJlcXVpcmVkKHNwYW4pO1xuICAgICAgICAgICAgICAgIGNvbnN0IG9ic2VydmFibGUgPSBjbGllbnQuc3Vic2NyaWJlKHtcbiAgICAgICAgICAgICAgICAgICAgcXVlcnksXG4gICAgICAgICAgICAgICAgICAgIHZhcmlhYmxlczoge1xuICAgICAgICAgICAgICAgICAgICAgICAgZmlsdGVyLFxuICAgICAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgICAgIHN1YnNjcmlwdGlvbiA9IG9ic2VydmFibGUuc3Vic2NyaWJlKChtZXNzYWdlKSA9PiB7XG4gICAgICAgICAgICAgICAgICAgIG9uRG9jRXZlbnQoJ2luc2VydC91cGRhdGUnLCBtZXNzYWdlLmRhdGFbdGhpcy5jb2xsZWN0aW9uTmFtZV0pO1xuICAgICAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgfSBjYXRjaCAoZXJyb3IpIHtcbiAgICAgICAgICAgICAgICBzcGFuLmxvZyh7XG4gICAgICAgICAgICAgICAgICAgIGV2ZW50OiAnZmFpbGVkJyxcbiAgICAgICAgICAgICAgICAgICAgcGF5bG9hZDogZXJyb3IsXG4gICAgICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICAgICAgaWYgKG9uRXJyb3IpIHtcbiAgICAgICAgICAgICAgICAgICAgb25FcnJvcihlcnJvcik7XG4gICAgICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgICAgICAgY29uc29sZS5sb2coJ1RPTiBDbGllbnQgc3Vic2NyaXB0aW9uIGVycm9yJywgZXJyb3IpO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cbiAgICAgICAgfSkoKTtcbiAgICAgICAgcmV0dXJuIHtcbiAgICAgICAgICAgIHVuc3Vic2NyaWJlOiAoKSA9PiB7XG4gICAgICAgICAgICAgICAgaWYgKHN1YnNjcmlwdGlvbikge1xuICAgICAgICAgICAgICAgICAgICBzdWJzY3JpcHRpb24udW5zdWJzY3JpYmUoKTtcbiAgICAgICAgICAgICAgICAgICAgc3Bhbi5maW5pc2goKTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9LFxuICAgICAgICB9O1xuICAgIH1cblxuICAgIGFzeW5jIHdhaXRGb3IoXG4gICAgICAgIC4uLmFyZ3NcbiAgICAgICAgLypcbiAgICAgICAgZmlsdGVyT3JQYXJhbXM6IGFueSB8IFRPTldhaXRGb3JQYXJhbXMsXG4gICAgICAgIHJlc3VsdDogc3RyaW5nLFxuICAgICAgICB0aW1lb3V0PzogbnVtYmVyLFxuICAgICAgICBwYXJlbnRTcGFuPzogKFNwYW4gfCBTcGFuQ29udGV4dClcbiAgICAgICAgICovXG4gICAgKTogUHJvbWlzZTxhbnk+IHtcbiAgICAgICAgY29uc3Qge1xuICAgICAgICAgICAgZmlsdGVyLFxuICAgICAgICAgICAgcmVzdWx0LFxuICAgICAgICAgICAgdGltZW91dDogcGFyYW1zVGltZW91dCxcbiAgICAgICAgICAgIHBhcmVudFNwYW4sXG4gICAgICAgICAgICBvcGVyYXRpb25JZCxcbiAgICAgICAgfSA9IHJlc29sdmVQYXJhbXM8VE9OV2FpdEZvclBhcmFtcz4oYXJncywgJ2ZpbHRlcicsICgpID0+ICh7XG4gICAgICAgICAgICBmaWx0ZXI6IGFyZ3NbMF0sXG4gICAgICAgICAgICByZXN1bHQ6IChhcmdzWzFdOiBhbnkpLFxuICAgICAgICAgICAgdGltZW91dDogKGFyZ3NbMl06IGFueSksXG4gICAgICAgICAgICBwYXJlbnRTcGFuOiBhcmdzWzNdLFxuICAgICAgICB9KSk7XG4gICAgICAgIGNvbnN0IHRpbWVvdXQgPSBwYXJhbXNUaW1lb3V0IHx8IHRoaXMubW9kdWxlLmNvbmZpZy53YWl0Rm9yVGltZW91dCgpO1xuICAgICAgICBjb25zdCBkb2NzID0gYXdhaXQgdGhpcy5xdWVyeSh7XG4gICAgICAgICAgICBmaWx0ZXIsXG4gICAgICAgICAgICByZXN1bHQsXG4gICAgICAgICAgICB0aW1lb3V0LFxuICAgICAgICAgICAgcGFyZW50U3BhbixcbiAgICAgICAgICAgIG9wZXJhdGlvbklkLFxuICAgICAgICB9KTtcbiAgICAgICAgaWYgKGRvY3MubGVuZ3RoID4gMCkge1xuICAgICAgICAgICAgcmV0dXJuIGRvY3NbMF07XG4gICAgICAgIH1cbiAgICAgICAgdGhyb3cgVE9OQ2xpZW50RXJyb3Iud2FpdEZvclRpbWVvdXQoKTtcbiAgICB9XG59XG5cblRPTlF1ZXJpZXNNb2R1bGUubW9kdWxlTmFtZSA9ICdUT05RdWVyaWVzTW9kdWxlJztcbiJdfQ==