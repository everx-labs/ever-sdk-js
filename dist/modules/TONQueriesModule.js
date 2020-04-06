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
    supportsOperationId: version > 24004
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
                this.transactions = new TONQueriesModuleCollection(this, 'transactions');
                this.messages = new TONQueriesModuleCollection(this, 'messages');
                this.blocks = new TONQueriesModuleCollection(this, 'blocks');
                this.accounts = new TONQueriesModuleCollection(this, 'accounts');
                this.blocks_signatures = new TONQueriesModuleCollection(this, 'blocks_signatures');

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
  function TONQueriesModuleCollection(module, collectionName) {
    (0, _classCallCheck2["default"])(this, TONQueriesModuleCollection);
    (0, _defineProperty2["default"])(this, "module", void 0);
    (0, _defineProperty2["default"])(this, "collectionName", void 0);
    (0, _defineProperty2["default"])(this, "typeName", void 0);
    this.module = module;
    this.collectionName = collectionName;
    this.typeName = "".concat(collectionName[0].toUpperCase()).concat(collectionName.slice(1, -1));
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
    key: "subscribe",
    value: function subscribe() {
      var _this8 = this;

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
      (0, _asyncToGenerator2["default"])( /*#__PURE__*/_regenerator["default"].mark(function _callee24() {
        var client, observable;
        return _regenerator["default"].wrap(function _callee24$(_context24) {
          while (1) {
            switch (_context24.prev = _context24.next) {
              case 0:
                _context24.prev = 0;
                _context24.next = 3;
                return _this8.module.graphqlClientRequired(span);

              case 3:
                client = _context24.sent;
                observable = client.subscribe({
                  query: query,
                  variables: {
                    filter: filter
                  }
                });
                subscription = observable.subscribe(function (message) {
                  onDocEvent('insert/update', message.data[_this8.collectionName]);
                });
                _context24.next = 12;
                break;

              case 8:
                _context24.prev = 8;
                _context24.t0 = _context24["catch"](0);
                span.log({
                  event: 'failed',
                  payload: _context24.t0
                });

                if (onError) {
                  onError(_context24.t0);
                } else {
                  console.log('TON Client subscription error', _context24.t0);
                }

              case 12:
              case "end":
                return _context24.stop();
            }
          }
        }, _callee24, null, [[0, 8]]);
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
      var _waitFor = (0, _asyncToGenerator2["default"])( /*#__PURE__*/_regenerator["default"].mark(function _callee25() {
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
            _args25 = arguments;

        return _regenerator["default"].wrap(function _callee25$(_context25) {
          while (1) {
            switch (_context25.prev = _context25.next) {
              case 0:
                for (_len3 = _args25.length, args = new Array(_len3), _key3 = 0; _key3 < _len3; _key3++) {
                  args[_key3] = _args25[_key3];
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
                _context25.next = 5;
                return this.query({
                  filter: filter,
                  result: result,
                  timeout: timeout,
                  parentSpan: parentSpan,
                  operationId: operationId
                });

              case 5:
                docs = _context25.sent;

                if (!(docs.length > 0)) {
                  _context25.next = 8;
                  break;
                }

                return _context25.abrupt("return", docs[0]);

              case 8:
                throw _TONClient.TONClientError.waitForTimeout();

              case 9:
              case "end":
                return _context25.stop();
            }
          }
        }, _callee25, this);
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy9tb2R1bGVzL1RPTlF1ZXJpZXNNb2R1bGUuanMiXSwibmFtZXMiOlsiTUFYX1RJTUVPVVQiLCJyZXNvbHZlUGFyYW1zIiwiYXJncyIsInJlcXVpcmVkUGFyYW1OYW1lIiwicmVzb2x2ZUFyZ3MiLCJsZW5ndGgiLCJNdWx0aWNhc3RQcm9taXNlIiwibGlzdGVuZXJzIiwib25Db21wbGV0ZSIsImxpc3RlbmVyIiwicmVzb2x2ZSIsInJlamVjdCIsInB1c2giLCJQcm9taXNlIiwidmFsdWUiLCJjb21wbGV0ZSIsImVycm9yIiwiY29tcGxldGVMaXN0ZW5lciIsImZvckVhY2giLCJ2ZXJzaW9uVG9OdW1iZXIiLCJzIiwicGFydHMiLCJzcGxpdCIsIm1hcCIsIngiLCJOdW1iZXIiLCJzbGljZSIsInJlc29sdmVTZXJ2ZXJJbmZvIiwidmVyc2lvblN0cmluZyIsInZlcnNpb24iLCJzdXBwb3J0c09wZXJhdGlvbklkIiwiVE9OUXVlcmllc01vZHVsZSIsImNvbnRleHQiLCJncmFwaHFsQ2xpZW50Iiwib3ZlcnJpZGVXc1VybCIsImdyYXBocWxDbGllbnRDcmVhdGlvbiIsIm9wZXJhdGlvbklkUHJlZml4IiwiRGF0ZSIsIm5vdyIsInRvU3RyaW5nIiwiaSIsIk1hdGgiLCJyb3VuZCIsInJhbmRvbSIsIm9wZXJhdGlvbklkU3VmZml4Iiwic2VydmVySW5mbyIsImNvbmZpZyIsImdldE1vZHVsZSIsIlRPTkNvbmZpZ01vZHVsZSIsInRyYW5zYWN0aW9ucyIsIlRPTlF1ZXJpZXNNb2R1bGVDb2xsZWN0aW9uIiwibWVzc2FnZXMiLCJibG9ja3MiLCJhY2NvdW50cyIsImJsb2Nrc19zaWduYXR1cmVzIiwiZmV0Y2giLCJzb3VyY2VVcmwiLCJyZXNwb25zZSIsImpzb24iLCJkYXRhIiwiaW5mbyIsInJlZGlyZWN0ZWQiLCJ1cmwiLCJzb3VyY2VMb2NhdGlvbiIsIlVSTFBhcnRzIiwicGFyc2UiLCJmaXhRdWVyeSIsIl8iLCJ0b0xvd2VyQ2FzZSIsInJlc3BvbnNlTG9jYXRpb24iLCJnZXRDb25maWdGb3JTZXJ2ZXIiLCJzZXJ2ZXIiLCJodHRwUGFydHMiLCJmaXhQcm90b2NvbCIsImZpeFBhdGgiLCJodHRwIiwid3MiLCJodHRwVXJsIiwid3NVcmwiLCJjbGllbnRQbGF0Zm9ybSIsIldlYlNvY2tldCIsIlRPTkNsaWVudCIsIkVycm9yIiwic2VydmVycyIsImNsaWVudENvbmZpZyIsImRldGVjdFJlZGlyZWN0IiwiY29uc29sZSIsImxvZyIsInNwYW4iLCJncmFwaHFsQ2xpZW50UmVxdWlyZWQiLCJvcGVyYXRpb25JZHMiLCJnZXRTZXJ2ZXJJbmZvIiwiZ3JhcGhxbE11dGF0aW9uIiwicGFyZW50U3BhbiIsInF1ZXJ5IiwidW5kZWZpbmVkIiwicmVzdWx0IiwiZ2V0QWNjb3VudHNDb3VudCIsImdldFRyYW5zYWN0aW9uc0NvdW50IiwiZ2V0QWNjb3VudHNUb3RhbEJhbGFuY2UiLCJyZXF1ZXN0cyIsInRyYWNlIiwicWwiLCJ2YXJpYWJsZXMiLCJzZXRUYWciLCJtdXRhdGlvbiIsImdyYXBocWxRdWVyeSIsImdyYXBoUWwiLCJjbGllbnQiLCJtdXRhdGUiLCJ0cmFjZVNwYW4iLCJyZXF1ZXN0IiwiZ3FsRXJyIiwiZ3JhcGhRTEVycm9ycyIsImNsaWVudEVyciIsIm1lc3NhZ2UiLCJncWxFeGMiLCJleHRlbnNpb25zIiwiZXhjZXB0aW9uIiwibnVtYmVyIiwiY29kZSIsInNvdXJjZSIsImVycm9ycyIsIm5ldHdvcmtFcnJvciIsIlRPTkNsaWVudEVycm9yIiwicXVlcnlGYWlsZWQiLCJsaXN0ZW4iLCJjcmVhdGlvbiIsImNyZWF0ZUdyYXBocWxDbGllbnQiLCJ1c2VIdHRwIiwidXNlV2ViU29ja2V0Rm9yUXVlcmllcyIsImdldENsaWVudENvbmZpZyIsIndzTGluayIsImh0dHBMaW5rIiwic3Vic09wdGlvbnMiLCJ0cmFjZXIiLCJpbmplY3QiLCJGT1JNQVRfVEVYVF9NQVAiLCJzdWJzY3JpcHRpb25DbGllbnQiLCJTdWJzY3JpcHRpb25DbGllbnQiLCJyZWNvbm5lY3QiLCJjb25uZWN0aW9uUGFyYW1zIiwiYWNjZXNzS2V5IiwiaGVhZGVycyIsIm9uUmVjb25uZWN0ZWQiLCJkZXRlY3RpbmdSZWRpcmVjdGlvbiIsIm9uRXJyb3IiLCJuZXdDb25maWciLCJjb25maWdJc0NoYW5nZWQiLCJ1cmkiLCJtYXhDb25uZWN0VGltZUdlbmVyYXRvciIsImR1cmF0aW9uIiwibWF4IiwicmVxIiwicmVzb2x2ZWRTcGFuIiwidHJhY2VyTGluayIsIndyYXBMaW5rIiwibGluayIsImNvbmNhdCIsImlzU3Vic2NyaXB0aW9uIiwiZGVmaW5pdGlvbiIsImtpbmQiLCJvcGVyYXRpb24iLCJXZWJTb2NrZXRMaW5rIiwiSHR0cExpbmsiLCJBcG9sbG9DbGllbnQiLCJjYWNoZSIsIkluTWVtb3J5Q2FjaGUiLCJkZWZhdWx0T3B0aW9ucyIsIndhdGNoUXVlcnkiLCJmZXRjaFBvbGljeSIsInN0b3AiLCJjbGVhclN0b3JlIiwiVE9OTW9kdWxlIiwibW9kdWxlIiwiY29sbGVjdGlvbk5hbWUiLCJ0eXBlTmFtZSIsInRvVXBwZXJDYXNlIiwiZmlsdGVyIiwib3JkZXJCeSIsImxpbWl0IiwidGltZW91dCIsIm9wZXJhdGlvbklkIiwidXNlT3BlcmF0aW9uSWQiLCJjIiwidCIsIm1pbiIsIm9uRG9jRXZlbnQiLCJzdGFydFNwYW4iLCJUYWdzIiwiU1BBTl9LSU5EIiwidGV4dCIsInN1YnNjcmlwdGlvbiIsIm9ic2VydmFibGUiLCJzdWJzY3JpYmUiLCJldmVudCIsInBheWxvYWQiLCJ1bnN1YnNjcmliZSIsImZpbmlzaCIsInBhcmFtc1RpbWVvdXQiLCJ3YWl0Rm9yVGltZW91dCIsImRvY3MiLCJtb2R1bGVOYW1lIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQWtCQTs7QUFDQTs7QUFDQTs7QUFDQTs7QUFDQTs7QUFDQTs7QUFDQTs7QUFDQTs7QUFDQTs7QUFDQTs7QUFXQTs7QUFFQTs7QUFDQTs7Ozs7Ozs7QUFhTyxJQUFNQSxXQUFXLEdBQUcsVUFBcEI7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TCxDQUFXO0FBQzFCb0Ysa0JBQUFBLE1BQU0sRUFBTkEsTUFEMEI7QUFFMUJsRixrQkFBQUEsTUFBTSxFQUFOQSxNQUYwQjtBQUcxQnFGLGtCQUFBQSxPQUFPLEVBQVBBLE9BSDBCO0FBSTFCeEYsa0JBQUFBLFVBQVUsRUFBVkEsVUFKMEI7QUFLMUJ5RixrQkFBQUEsV0FBVyxFQUFFQTtBQUxhLGlCQUFYLEM7OztBQUFibUIsZ0JBQUFBLEk7O3NCQU9GQSxJQUFJLENBQUNwTSxNQUFMLEdBQWMsQzs7Ozs7bURBQ1BvTSxJQUFJLENBQUMsQ0FBRCxDOzs7c0JBRVQ3RSwwQkFBZTRFLGNBQWYsRTs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFJZHpLLGdCQUFnQixDQUFDMkssVUFBakIsR0FBOEIsa0JBQTlCIiwic291cmNlc0NvbnRlbnQiOlsiLypcbiAqIENvcHlyaWdodCAyMDE4LTIwMjAgVE9OIERFViBTT0xVVElPTlMgTFRELlxuICpcbiAqIExpY2Vuc2VkIHVuZGVyIHRoZSBTT0ZUV0FSRSBFVkFMVUFUSU9OIExpY2Vuc2UgKHRoZSBcIkxpY2Vuc2VcIik7IHlvdSBtYXkgbm90IHVzZVxuICogdGhpcyBmaWxlIGV4Y2VwdCBpbiBjb21wbGlhbmNlIHdpdGggdGhlIExpY2Vuc2UuICBZb3UgbWF5IG9idGFpbiBhIGNvcHkgb2YgdGhlXG4gKiBMaWNlbnNlIGF0OlxuICpcbiAqIGh0dHA6Ly93d3cudG9uLmRldi9saWNlbnNlc1xuICpcbiAqIFVubGVzcyByZXF1aXJlZCBieSBhcHBsaWNhYmxlIGxhdyBvciBhZ3JlZWQgdG8gaW4gd3JpdGluZywgc29mdHdhcmVcbiAqIGRpc3RyaWJ1dGVkIHVuZGVyIHRoZSBMaWNlbnNlIGlzIGRpc3RyaWJ1dGVkIG9uIGFuIFwiQVMgSVNcIiBCQVNJUyxcbiAqIFdJVEhPVVQgV0FSUkFOVElFUyBPUiBDT05ESVRJT05TIE9GIEFOWSBLSU5ELCBlaXRoZXIgZXhwcmVzcyBvciBpbXBsaWVkLlxuICogU2VlIHRoZSBMaWNlbnNlIGZvciB0aGUgc3BlY2lmaWMgVE9OIERFViBzb2Z0d2FyZSBnb3Zlcm5pbmcgcGVybWlzc2lvbnMgYW5kXG4gKiBsaW1pdGF0aW9ucyB1bmRlciB0aGUgTGljZW5zZS5cbiAqL1xuXG4vLyBAZmxvd1xuXG5pbXBvcnQgeyBJbk1lbW9yeUNhY2hlIH0gZnJvbSAnYXBvbGxvLWNhY2hlLWlubWVtb3J5JztcbmltcG9ydCB7IEFwb2xsb0NsaWVudCB9IGZyb20gJ2Fwb2xsby1jbGllbnQnO1xuaW1wb3J0IHsgQXBvbGxvTGluaywgc3BsaXQgfSBmcm9tICdhcG9sbG8tbGluayc7XG5pbXBvcnQgeyBIdHRwTGluayB9IGZyb20gJ2Fwb2xsby1saW5rLWh0dHAnO1xuaW1wb3J0IHsgV2ViU29ja2V0TGluayB9IGZyb20gJ2Fwb2xsby1saW5rLXdzJztcbmltcG9ydCB7IGdldE1haW5EZWZpbml0aW9uIH0gZnJvbSAnYXBvbGxvLXV0aWxpdGllcyc7XG5pbXBvcnQgZ3FsIGZyb20gJ2dyYXBocWwtdGFnJztcbmltcG9ydCB7IFN1YnNjcmlwdGlvbkNsaWVudCB9IGZyb20gJ3N1YnNjcmlwdGlvbnMtdHJhbnNwb3J0LXdzJztcbmltcG9ydCB7IHNldENvbnRleHQgfSBmcm9tICdhcG9sbG8tbGluay1jb250ZXh0JztcbmltcG9ydCB7XG4gICAgRk9STUFUX1RFWFRfTUFQLCBUYWdzLCBTcGFuLCBTcGFuQ29udGV4dCxcbn0gZnJvbSAnb3BlbnRyYWNpbmcnO1xuaW1wb3J0IHR5cGUge1xuICAgIFRPTlF1ZXJpZXMsXG4gICAgVE9OUUNvbGxlY3Rpb24sXG4gICAgU3Vic2NyaXB0aW9uLFxuICAgIFRPTlF1ZXJ5UGFyYW1zLFxuICAgIFRPTlN1YnNjcmliZVBhcmFtcyxcbiAgICBUT05XYWl0Rm9yUGFyYW1zLFxufSBmcm9tICcuLi8uLi90eXBlcyc7XG5pbXBvcnQgeyBUT05DbGllbnQsIFRPTkNsaWVudEVycm9yIH0gZnJvbSAnLi4vVE9OQ2xpZW50JztcbmltcG9ydCB0eXBlIHsgVE9OTW9kdWxlQ29udGV4dCB9IGZyb20gJy4uL1RPTk1vZHVsZSc7XG5pbXBvcnQgeyBUT05Nb2R1bGUgfSBmcm9tICcuLi9UT05Nb2R1bGUnO1xuaW1wb3J0IFRPTkNvbmZpZ01vZHVsZSwgeyBVUkxQYXJ0cyB9IGZyb20gJy4vVE9OQ29uZmlnTW9kdWxlJztcblxuXG5leHBvcnQgdHlwZSBSZXF1ZXN0ID0ge1xuICAgIGlkOiBzdHJpbmcsXG4gICAgYm9keTogc3RyaW5nLFxufVxuXG5leHBvcnQgdHlwZSBTZXJ2ZXJJbmZvID0ge1xuICAgIHZlcnNpb246IG51bWJlcixcbiAgICBzdXBwb3J0c09wZXJhdGlvbklkOiBib29sZWFuLFxufTtcblxuZXhwb3J0IGNvbnN0IE1BWF9USU1FT1VUID0gMjE0NzQ4MzY0NztcblxuZnVuY3Rpb24gcmVzb2x2ZVBhcmFtczxUPihhcmdzOiBhbnlbXSwgcmVxdWlyZWRQYXJhbU5hbWU6IHN0cmluZywgcmVzb2x2ZUFyZ3M6ICgpID0+IFQpOiBUIHtcbiAgICByZXR1cm4gKGFyZ3MubGVuZ3RoID09PSAxKSAmJiAocmVxdWlyZWRQYXJhbU5hbWUgaW4gYXJnc1swXSkgPyBhcmdzWzBdIDogcmVzb2x2ZUFyZ3MoKTtcbn1cblxudHlwZSBNdWx0aWNhc3RMaXN0ZW5lcjxWYWx1ZT4gPSB7XG4gICAgcmVzb2x2ZTogKHZhbHVlOiBWYWx1ZSkgPT4gdm9pZDtcbiAgICByZWplY3Q6IChlcnJvcjogRXJyb3IpID0+IHZvaWQ7XG59O1xuXG5jbGFzcyBNdWx0aWNhc3RQcm9taXNlPFZhbHVlPiB7XG4gICAgbGlzdGVuZXJzOiBNdWx0aWNhc3RMaXN0ZW5lcjxWYWx1ZT5bXTtcbiAgICBvbkNvbXBsZXRlOiA/KCgpID0+IHZvaWQpO1xuXG4gICAgY29uc3RydWN0b3IoKSB7XG4gICAgICAgIHRoaXMubGlzdGVuZXJzID0gW107XG4gICAgICAgIHRoaXMub25Db21wbGV0ZSA9IG51bGw7XG4gICAgfVxuXG4gICAgbGlzdGVuKCk6IFByb21pc2U8VmFsdWU+IHtcbiAgICAgICAgY29uc3QgbGlzdGVuZXI6IE11bHRpY2FzdExpc3RlbmVyPFZhbHVlPiA9IHtcbiAgICAgICAgICAgIHJlc29sdmU6ICgpID0+IHtcbiAgICAgICAgICAgIH0sXG4gICAgICAgICAgICByZWplY3Q6ICgpID0+IHtcbiAgICAgICAgICAgIH0sXG4gICAgICAgIH07XG4gICAgICAgIHRoaXMubGlzdGVuZXJzLnB1c2gobGlzdGVuZXIpO1xuICAgICAgICByZXR1cm4gbmV3IFByb21pc2UoKHJlc29sdmUsIHJlamVjdCkgPT4ge1xuICAgICAgICAgICAgbGlzdGVuZXIucmVzb2x2ZSA9IHJlc29sdmU7XG4gICAgICAgICAgICBsaXN0ZW5lci5yZWplY3QgPSByZWplY3Q7XG4gICAgICAgIH0pO1xuICAgIH1cblxuICAgIHJlc29sdmUodmFsdWU6IFZhbHVlKSB7XG4gICAgICAgIHRoaXMuY29tcGxldGUobGlzdGVuZXIgPT4gbGlzdGVuZXIucmVzb2x2ZSh2YWx1ZSkpO1xuICAgIH1cblxuICAgIHJlamVjdChlcnJvcjogRXJyb3IpIHtcbiAgICAgICAgdGhpcy5jb21wbGV0ZShsaXN0ZW5lciA9PiBsaXN0ZW5lci5yZWplY3QoZXJyb3IpKTtcbiAgICB9XG5cbiAgICBjb21wbGV0ZShjb21wbGV0ZUxpc3RlbmVyOiAobGlzdGVuZXI6IE11bHRpY2FzdExpc3RlbmVyPFZhbHVlPikgPT4gdm9pZCkge1xuICAgICAgICBjb25zdCB7IGxpc3RlbmVycyB9ID0gdGhpcztcbiAgICAgICAgdGhpcy5saXN0ZW5lcnMgPSBbXTtcbiAgICAgICAgaWYgKHRoaXMub25Db21wbGV0ZSkge1xuICAgICAgICAgICAgdGhpcy5vbkNvbXBsZXRlKCk7XG4gICAgICAgIH1cbiAgICAgICAgbGlzdGVuZXJzLmZvckVhY2gobGlzdGVuZXIgPT4gY29tcGxldGVMaXN0ZW5lcihsaXN0ZW5lcikpO1xuICAgIH1cbn1cblxuZnVuY3Rpb24gdmVyc2lvblRvTnVtYmVyKHM6IHN0cmluZyk6IG51bWJlciB7XG4gICAgY29uc3QgcGFydHMgPSBgJHtzIHx8ICcnfWAuc3BsaXQoJy4nKVxuICAgICAgICAubWFwKHggPT4gTnVtYmVyKHgpKVxuICAgICAgICAuc2xpY2UoMCwgMyk7XG4gICAgd2hpbGUgKHBhcnRzLmxlbmd0aCA8IDMpIHtcbiAgICAgICAgcGFydHMucHVzaCgwKTtcbiAgICB9XG4gICAgcmV0dXJuIHBhcnRzWzBdICogMTAwMDAwMCArIHBhcnRzWzFdICogMTAwMCArIHBhcnRzWzJdO1xufVxuXG5mdW5jdGlvbiByZXNvbHZlU2VydmVySW5mbyh2ZXJzaW9uU3RyaW5nOiBzdHJpbmcgfCBudWxsIHwgdHlwZW9mIHVuZGVmaW5lZCk6IFNlcnZlckluZm8ge1xuICAgIGNvbnN0IHZlcnNpb24gPSB2ZXJzaW9uVG9OdW1iZXIodmVyc2lvblN0cmluZyB8fCAnMC4yNC40Jyk7XG4gICAgcmV0dXJuIHtcbiAgICAgICAgdmVyc2lvbixcbiAgICAgICAgc3VwcG9ydHNPcGVyYXRpb25JZDogdmVyc2lvbiA+IDI0MDA0LFxuICAgIH07XG59XG5cbmV4cG9ydCBkZWZhdWx0IGNsYXNzIFRPTlF1ZXJpZXNNb2R1bGUgZXh0ZW5kcyBUT05Nb2R1bGUgaW1wbGVtZW50cyBUT05RdWVyaWVzIHtcbiAgICBjb25maWc6IFRPTkNvbmZpZ01vZHVsZTtcblxuICAgIG92ZXJyaWRlV3NVcmw6ID9zdHJpbmc7XG4gICAgZ3JhcGhxbENsaWVudENyZWF0aW9uOiA/TXVsdGljYXN0UHJvbWlzZTxBcG9sbG9DbGllbnQ+O1xuICAgIG9wZXJhdGlvbklkUHJlZml4OiBzdHJpbmc7XG4gICAgb3BlcmF0aW9uSWRTdWZmaXg6IG51bWJlcjtcbiAgICBzZXJ2ZXJJbmZvOiBTZXJ2ZXJJbmZvO1xuXG4gICAgY29uc3RydWN0b3IoY29udGV4dDogVE9OTW9kdWxlQ29udGV4dCkge1xuICAgICAgICBzdXBlcihjb250ZXh0KTtcbiAgICAgICAgdGhpcy5ncmFwaHFsQ2xpZW50ID0gbnVsbDtcbiAgICAgICAgdGhpcy5vdmVycmlkZVdzVXJsID0gbnVsbDtcbiAgICAgICAgdGhpcy5ncmFwaHFsQ2xpZW50Q3JlYXRpb24gPSBudWxsO1xuICAgICAgICB0aGlzLm9wZXJhdGlvbklkUHJlZml4ID0gKERhdGUubm93KCkgJSA2MDAwMCkudG9TdHJpbmcoMTYpO1xuICAgICAgICBmb3IgKGxldCBpID0gMDsgaSA8IDEwOyBpICs9IDEpIHtcbiAgICAgICAgICAgIHRoaXMub3BlcmF0aW9uSWRQcmVmaXggPVxuICAgICAgICAgICAgICAgIGAke3RoaXMub3BlcmF0aW9uSWRQcmVmaXh9JHtNYXRoLnJvdW5kKE1hdGgucmFuZG9tKCkgKiAyNTYpXG4gICAgICAgICAgICAgICAgICAgIC50b1N0cmluZygxNil9YDtcbiAgICAgICAgfVxuICAgICAgICB0aGlzLm9wZXJhdGlvbklkU3VmZml4ID0gMTtcbiAgICAgICAgdGhpcy5zZXJ2ZXJJbmZvID0gcmVzb2x2ZVNlcnZlckluZm8oKTtcbiAgICB9XG5cbiAgICBhc3luYyBzZXR1cCgpIHtcbiAgICAgICAgdGhpcy5jb25maWcgPSB0aGlzLmNvbnRleHQuZ2V0TW9kdWxlKFRPTkNvbmZpZ01vZHVsZSk7XG4gICAgICAgIHRoaXMudHJhbnNhY3Rpb25zID0gbmV3IFRPTlF1ZXJpZXNNb2R1bGVDb2xsZWN0aW9uKHRoaXMsICd0cmFuc2FjdGlvbnMnKTtcbiAgICAgICAgdGhpcy5tZXNzYWdlcyA9IG5ldyBUT05RdWVyaWVzTW9kdWxlQ29sbGVjdGlvbih0aGlzLCAnbWVzc2FnZXMnKTtcbiAgICAgICAgdGhpcy5ibG9ja3MgPSBuZXcgVE9OUXVlcmllc01vZHVsZUNvbGxlY3Rpb24odGhpcywgJ2Jsb2NrcycpO1xuICAgICAgICB0aGlzLmFjY291bnRzID0gbmV3IFRPTlF1ZXJpZXNNb2R1bGVDb2xsZWN0aW9uKHRoaXMsICdhY2NvdW50cycpO1xuICAgICAgICB0aGlzLmJsb2Nrc19zaWduYXR1cmVzID0gbmV3IFRPTlF1ZXJpZXNNb2R1bGVDb2xsZWN0aW9uKHRoaXMsICdibG9ja3Nfc2lnbmF0dXJlcycpO1xuICAgIH1cblxuICAgIGFzeW5jIGRldGVjdFJlZGlyZWN0KGZldGNoOiBhbnksIHNvdXJjZVVybDogc3RyaW5nKTogUHJvbWlzZTxzdHJpbmc+IHtcbiAgICAgICAgY29uc3QgcmVzcG9uc2UgPSBhd2FpdCBmZXRjaChzb3VyY2VVcmwpO1xuICAgICAgICB0cnkge1xuICAgICAgICAgICAgdGhpcy5zZXJ2ZXJJbmZvID0gcmVzb2x2ZVNlcnZlckluZm8oKGF3YWl0IHJlc3BvbnNlLmpzb24oKSkuZGF0YS5pbmZvLnZlcnNpb24pO1xuICAgICAgICB9IGNhdGNoIHtcbiAgICAgICAgfVxuICAgICAgICBpZiAocmVzcG9uc2UucmVkaXJlY3RlZCA9PT0gdHJ1ZSkge1xuICAgICAgICAgICAgcmV0dXJuIHJlc3BvbnNlLnVybDtcbiAgICAgICAgfVxuICAgICAgICBpZiAocmVzcG9uc2UucmVkaXJlY3RlZCA9PT0gZmFsc2UpIHtcbiAgICAgICAgICAgIHJldHVybiAnJztcbiAgICAgICAgfVxuICAgICAgICBjb25zdCBzb3VyY2VMb2NhdGlvbiA9IFVSTFBhcnRzLnBhcnNlKHNvdXJjZVVybClcbiAgICAgICAgICAgIC5maXhRdWVyeShfID0+ICcnKVxuICAgICAgICAgICAgLnRvU3RyaW5nKClcbiAgICAgICAgICAgIC50b0xvd2VyQ2FzZSgpO1xuICAgICAgICBjb25zdCByZXNwb25zZUxvY2F0aW9uID0gVVJMUGFydHMucGFyc2UocmVzcG9uc2UudXJsKVxuICAgICAgICAgICAgLmZpeFF1ZXJ5KF8gPT4gJycpXG4gICAgICAgICAgICAudG9TdHJpbmcoKVxuICAgICAgICAgICAgLnRvTG93ZXJDYXNlKCk7XG4gICAgICAgIHJldHVybiByZXNwb25zZUxvY2F0aW9uICE9PSBzb3VyY2VMb2NhdGlvbiA/IHJlc3BvbnNlLnVybCA6ICcnO1xuICAgIH1cblxuICAgIGFzeW5jIGdldENsaWVudENvbmZpZygpIHtcbiAgICAgICAgY29uc3QgY29uZmlnID0gdGhpcy5jb25maWc7XG4gICAgICAgIGNvbnN0IGNsaWVudFBsYXRmb3JtID0gVE9OQ2xpZW50LmNsaWVudFBsYXRmb3JtO1xuICAgICAgICBpZiAoIWNsaWVudFBsYXRmb3JtKSB7XG4gICAgICAgICAgICB0aHJvdyBFcnJvcignVE9OIENsaWVudCBkb2VzIG5vdCBjb25maWd1cmVkJyk7XG4gICAgICAgIH1cbiAgICAgICAgY29uc3QgZmV0Y2ggPSBjbGllbnRQbGF0Zm9ybS5mZXRjaDtcblxuICAgICAgICBmdW5jdGlvbiBnZXRDb25maWdGb3JTZXJ2ZXIoc2VydmVyOiBzdHJpbmcpIHtcbiAgICAgICAgICAgIGNvbnN0IGh0dHBQYXJ0cyA9IFVSTFBhcnRzLnBhcnNlKHNlcnZlcilcbiAgICAgICAgICAgICAgICAuZml4UHJvdG9jb2woeCA9PiAoeCA9PT0gJ2h0dHA6Ly8nID8geCA6ICdodHRwczovLycpKVxuICAgICAgICAgICAgICAgIC5maXhQYXRoKHggPT4gYCR7eH0vZ3JhcGhxbGApO1xuICAgICAgICAgICAgY29uc3QgaHR0cCA9IGh0dHBQYXJ0cy50b1N0cmluZygpO1xuICAgICAgICAgICAgY29uc3Qgd3MgPSBodHRwUGFydHNcbiAgICAgICAgICAgICAgICAuZml4UHJvdG9jb2woeCA9PiAoeCA9PT0gJ2h0dHA6Ly8nID8gJ3dzOi8vJyA6ICd3c3M6Ly8nKSlcbiAgICAgICAgICAgICAgICAudG9TdHJpbmcoKTtcbiAgICAgICAgICAgIHJldHVybiB7XG4gICAgICAgICAgICAgICAgaHR0cFVybDogaHR0cCxcbiAgICAgICAgICAgICAgICB3c1VybDogd3MsXG4gICAgICAgICAgICAgICAgZmV0Y2g6IGNsaWVudFBsYXRmb3JtLmZldGNoLFxuICAgICAgICAgICAgICAgIFdlYlNvY2tldDogY2xpZW50UGxhdGZvcm0uV2ViU29ja2V0LFxuICAgICAgICAgICAgfTtcbiAgICAgICAgfVxuXG4gICAgICAgIGZvciAoY29uc3Qgc2VydmVyIG9mIGNvbmZpZy5kYXRhLnNlcnZlcnMpIHtcbiAgICAgICAgICAgIHRyeSB7XG4gICAgICAgICAgICAgICAgY29uc3QgY2xpZW50Q29uZmlnID0gZ2V0Q29uZmlnRm9yU2VydmVyKHNlcnZlcik7XG4gICAgICAgICAgICAgICAgLy8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIG5vLWF3YWl0LWluLWxvb3BcbiAgICAgICAgICAgICAgICBjb25zdCByZWRpcmVjdGVkID0gYXdhaXQgdGhpcy5kZXRlY3RSZWRpcmVjdChcbiAgICAgICAgICAgICAgICAgICAgZmV0Y2gsXG4gICAgICAgICAgICAgICAgICAgIGAke2NsaWVudENvbmZpZy5odHRwVXJsfT9xdWVyeT0lN0JpbmZvJTdCdmVyc2lvbiU3RCU3RGAsXG4gICAgICAgICAgICAgICAgKTtcbiAgICAgICAgICAgICAgICBpZiAocmVkaXJlY3RlZCAhPT0gJycpIHtcbiAgICAgICAgICAgICAgICAgICAgY29uc3QgaHR0cFBhcnRzID0gVVJMUGFydHMucGFyc2UocmVkaXJlY3RlZClcbiAgICAgICAgICAgICAgICAgICAgICAgIC5maXhRdWVyeShfID0+ICcnKTtcbiAgICAgICAgICAgICAgICAgICAgY2xpZW50Q29uZmlnLmh0dHBVcmwgPSBodHRwUGFydHMudG9TdHJpbmcoKTtcbiAgICAgICAgICAgICAgICAgICAgY2xpZW50Q29uZmlnLndzVXJsID0gaHR0cFBhcnRzXG4gICAgICAgICAgICAgICAgICAgICAgICAuZml4UHJvdG9jb2woeCA9PiAoeCA9PT0gJ2h0dHA6Ly8nID8gJ3dzOi8vJyA6ICd3c3M6Ly8nKSlcbiAgICAgICAgICAgICAgICAgICAgICAgIC50b1N0cmluZygpO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICByZXR1cm4gY2xpZW50Q29uZmlnO1xuICAgICAgICAgICAgfSBjYXRjaCAoZXJyb3IpIHtcbiAgICAgICAgICAgICAgICBjb25zb2xlLmxvZyhgW2dldENsaWVudENvbmZpZ10gZm9yIHNlcnZlciBcIiR7c2VydmVyfVwiIGZhaWxlZGAsIGVycm9yKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgICByZXR1cm4gZ2V0Q29uZmlnRm9yU2VydmVyKGNvbmZpZy5kYXRhLnNlcnZlcnNbMF0pO1xuICAgIH1cblxuICAgIGFzeW5jIGdldFNlcnZlckluZm8oc3Bhbj86IFNwYW4gfCBTcGFuQ29udGV4dCk6IFByb21pc2U8U2VydmVySW5mbz4ge1xuICAgICAgICBhd2FpdCB0aGlzLmdyYXBocWxDbGllbnRSZXF1aXJlZChzcGFuKTtcbiAgICAgICAgcmV0dXJuIHRoaXMuc2VydmVySW5mbztcbiAgICB9XG5cbiAgICBnZW5lcmF0ZU9wZXJhdGlvbklkKCk6IHN0cmluZyB7XG4gICAgICAgIHRoaXMub3BlcmF0aW9uSWRTdWZmaXggKz0gMTtcbiAgICAgICAgcmV0dXJuIGAke3RoaXMub3BlcmF0aW9uSWRQcmVmaXh9JHt0aGlzLm9wZXJhdGlvbklkU3VmZml4LnRvU3RyaW5nKDE2KX1gO1xuICAgIH1cblxuICAgIGFzeW5jIGZpbmlzaE9wZXJhdGlvbnMob3BlcmF0aW9uSWRzOiBzdHJpbmdbXSkge1xuICAgICAgICBpZiAob3BlcmF0aW9uSWRzLmxlbmd0aCA9PT0gMCkge1xuICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICB9XG4gICAgICAgIGlmICghKGF3YWl0IHRoaXMuZ2V0U2VydmVySW5mbygpKS5zdXBwb3J0c09wZXJhdGlvbklkKSB7XG4gICAgICAgICAgICByZXR1cm47XG4gICAgICAgIH1cbiAgICAgICAgYXdhaXQgdGhpcy5ncmFwaHFsTXV0YXRpb24oYG11dGF0aW9uIGZpbmlzaE9wZXJhdGlvbnMoJG9wZXJhdGlvbklkczogW1N0cmluZ10pIHtcbiAgICAgICAgICAgICAgICBmaW5pc2hPcGVyYXRpb25zKG9wZXJhdGlvbklkczogJG9wZXJhdGlvbklkcylcbiAgICAgICAgICAgIH1gLCB7XG4gICAgICAgICAgICBvcGVyYXRpb25JZHMsXG4gICAgICAgIH0pO1xuICAgIH1cblxuICAgIGFzeW5jIGdldEFjY291bnRzQ291bnQocGFyZW50U3Bhbj86IChTcGFuIHwgU3BhbkNvbnRleHQpKTogUHJvbWlzZTxudW1iZXI+IHtcbiAgICAgICAgY29uc3QgcmVzdWx0ID0gYXdhaXQgdGhpcy5xdWVyeSgncXVlcnl7Z2V0QWNjb3VudHNDb3VudH0nLCB1bmRlZmluZWQsIHBhcmVudFNwYW4pO1xuICAgICAgICByZXR1cm4gcmVzdWx0LmRhdGEuZ2V0QWNjb3VudHNDb3VudDtcbiAgICB9XG5cbiAgICBhc3luYyBnZXRUcmFuc2FjdGlvbnNDb3VudChwYXJlbnRTcGFuPzogKFNwYW4gfCBTcGFuQ29udGV4dCkpOiBQcm9taXNlPG51bWJlcj4ge1xuICAgICAgICBjb25zdCByZXN1bHQgPSBhd2FpdCB0aGlzLnF1ZXJ5KCdxdWVyeXtnZXRUcmFuc2FjdGlvbnNDb3VudH0nLCB1bmRlZmluZWQsIHBhcmVudFNwYW4pO1xuICAgICAgICByZXR1cm4gcmVzdWx0LmRhdGEuZ2V0VHJhbnNhY3Rpb25zQ291bnQ7XG4gICAgfVxuXG4gICAgYXN5bmMgZ2V0QWNjb3VudHNUb3RhbEJhbGFuY2UocGFyZW50U3Bhbj86IChTcGFuIHwgU3BhbkNvbnRleHQpKTogUHJvbWlzZTxzdHJpbmc+IHtcbiAgICAgICAgY29uc3QgcmVzdWx0ID0gYXdhaXQgdGhpcy5xdWVyeSgncXVlcnl7Z2V0QWNjb3VudHNUb3RhbEJhbGFuY2V9JywgdW5kZWZpbmVkLCBwYXJlbnRTcGFuKTtcbiAgICAgICAgcmV0dXJuIHJlc3VsdC5kYXRhLmdldEFjY291bnRzVG90YWxCYWxhbmNlO1xuICAgIH1cblxuICAgIGFzeW5jIHBvc3RSZXF1ZXN0cyhyZXF1ZXN0czogUmVxdWVzdFtdLCBwYXJlbnRTcGFuPzogKFNwYW4gfCBTcGFuQ29udGV4dCkpOiBQcm9taXNlPGFueT4ge1xuICAgICAgICByZXR1cm4gdGhpcy5jb250ZXh0LnRyYWNlKCdxdWVyaWVzLnBvc3RSZXF1ZXN0cycsIGFzeW5jIChzcGFuKSA9PiB7XG4gICAgICAgICAgICByZXR1cm4gdGhpcy5ncmFwaHFsTXV0YXRpb24oYG11dGF0aW9uIHBvc3RSZXF1ZXN0cygkcmVxdWVzdHM6IFtSZXF1ZXN0XSkge1xuICAgICAgICAgICAgICAgIHBvc3RSZXF1ZXN0cyhyZXF1ZXN0czogJHJlcXVlc3RzKVxuICAgICAgICAgICAgfWAsIHtcbiAgICAgICAgICAgICAgICByZXF1ZXN0cyxcbiAgICAgICAgICAgIH0sIHNwYW4pO1xuICAgICAgICB9LCBwYXJlbnRTcGFuKTtcbiAgICB9XG5cbiAgICBhc3luYyBtdXRhdGlvbihcbiAgICAgICAgcWw6IHN0cmluZyxcbiAgICAgICAgdmFyaWFibGVzOiB7IFtzdHJpbmddOiBhbnkgfSA9IHt9LFxuICAgICAgICBwYXJlbnRTcGFuPzogKFNwYW4gfCBTcGFuQ29udGV4dCksXG4gICAgKTogUHJvbWlzZTxhbnk+IHtcbiAgICAgICAgcmV0dXJuIHRoaXMuY29udGV4dC50cmFjZSgncXVlcmllcy5tdXRhdGlvbicsIGFzeW5jIChzcGFuOiBTcGFuKSA9PiB7XG4gICAgICAgICAgICBzcGFuLnNldFRhZygncGFyYW1zJywge1xuICAgICAgICAgICAgICAgIG11dGF0aW9uOiBxbCxcbiAgICAgICAgICAgICAgICB2YXJpYWJsZXMsXG4gICAgICAgICAgICB9KTtcbiAgICAgICAgICAgIHJldHVybiB0aGlzLmdyYXBocWxNdXRhdGlvbihxbCwgdmFyaWFibGVzLCBzcGFuKTtcbiAgICAgICAgfSwgcGFyZW50U3Bhbik7XG4gICAgfVxuXG4gICAgYXN5bmMgcXVlcnkoXG4gICAgICAgIHFsOiBzdHJpbmcsXG4gICAgICAgIHZhcmlhYmxlczogeyBbc3RyaW5nXTogYW55IH0gPSB7fSxcbiAgICAgICAgcGFyZW50U3Bhbj86IChTcGFuIHwgU3BhbkNvbnRleHQpLFxuICAgICk6IFByb21pc2U8YW55PiB7XG4gICAgICAgIHJldHVybiB0aGlzLmNvbnRleHQudHJhY2UoJ3F1ZXJpZXMucXVlcnknLCBhc3luYyAoc3BhbjogU3BhbikgPT4ge1xuICAgICAgICAgICAgc3Bhbi5zZXRUYWcoJ3BhcmFtcycsIHtcbiAgICAgICAgICAgICAgICBxdWVyeTogcWwsXG4gICAgICAgICAgICAgICAgdmFyaWFibGVzLFxuICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICByZXR1cm4gdGhpcy5ncmFwaHFsUXVlcnkocWwsIHZhcmlhYmxlcywgc3Bhbik7XG4gICAgICAgIH0sIHBhcmVudFNwYW4pO1xuICAgIH1cblxuICAgIGFzeW5jIGdyYXBocWxNdXRhdGlvbihxbDogc3RyaW5nLCB2YXJpYWJsZXM6IHsgW3N0cmluZ106IGFueSB9ID0ge30sIHNwYW46IFNwYW4pOiBQcm9taXNlPGFueT4ge1xuICAgICAgICBjb25zdCBtdXRhdGlvbiA9IGdxbChbcWxdKTtcbiAgICAgICAgcmV0dXJuIHRoaXMuZ3JhcGhRbCgoY2xpZW50KSA9PiBjbGllbnQubXV0YXRlKHtcbiAgICAgICAgICAgIG11dGF0aW9uLFxuICAgICAgICAgICAgdmFyaWFibGVzLFxuICAgICAgICAgICAgY29udGV4dDoge1xuICAgICAgICAgICAgICAgIHRyYWNlU3Bhbjogc3BhbixcbiAgICAgICAgICAgIH0sXG4gICAgICAgIH0pKTtcbiAgICB9XG5cbiAgICBhc3luYyBncmFwaHFsUXVlcnkocWw6IHN0cmluZywgdmFyaWFibGVzOiB7IFtzdHJpbmddOiBhbnkgfSA9IHt9LCBzcGFuOiBTcGFuKTogUHJvbWlzZTxhbnk+IHtcbiAgICAgICAgY29uc3QgcXVlcnkgPSBncWwoW3FsXSk7XG4gICAgICAgIHJldHVybiB0aGlzLmdyYXBoUWwoKGNsaWVudCkgPT4gY2xpZW50LnF1ZXJ5KHtcbiAgICAgICAgICAgIHF1ZXJ5LFxuICAgICAgICAgICAgdmFyaWFibGVzLFxuICAgICAgICAgICAgY29udGV4dDoge1xuICAgICAgICAgICAgICAgIHRyYWNlU3Bhbjogc3BhbixcbiAgICAgICAgICAgIH0sXG4gICAgICAgIH0pLCBzcGFuKTtcbiAgICB9XG5cbiAgICBhc3luYyBncmFwaFFsKHJlcXVlc3Q6IChjbGllbnQ6IEFwb2xsb0NsaWVudCkgPT4gUHJvbWlzZTxhbnk+LCBzcGFuOiBTcGFuKTogUHJvbWlzZTxhbnk+IHtcbiAgICAgICAgY29uc3QgY2xpZW50ID0gYXdhaXQgdGhpcy5ncmFwaHFsQ2xpZW50UmVxdWlyZWQoc3Bhbik7XG4gICAgICAgIHRyeSB7XG4gICAgICAgICAgICByZXR1cm4gYXdhaXQgcmVxdWVzdChjbGllbnQpO1xuICAgICAgICB9IGNhdGNoIChlcnJvcikge1xuICAgICAgICAgICAgY29uc3QgZ3FsRXJyID0gZXJyb3IuZ3JhcGhRTEVycm9ycyAmJiBlcnJvci5ncmFwaFFMRXJyb3JzWzBdO1xuICAgICAgICAgICAgaWYgKGdxbEVycikge1xuICAgICAgICAgICAgICAgIGNvbnN0IGNsaWVudEVyciA9IG5ldyBFcnJvcihncWxFcnIubWVzc2FnZSk7XG4gICAgICAgICAgICAgICAgY29uc3QgZ3FsRXhjID0gKGdxbEVyci5leHRlbnNpb25zICYmIGdxbEVyci5leHRlbnNpb25zLmV4Y2VwdGlvbikgfHwge307XG4gICAgICAgICAgICAgICAgKGNsaWVudEVycjogYW55KS5udW1iZXIgPSBncWxFeGMuY29kZSB8fCAwO1xuICAgICAgICAgICAgICAgIChjbGllbnRFcnI6IGFueSkuY29kZSA9IGdxbEV4Yy5jb2RlIHx8IDA7XG4gICAgICAgICAgICAgICAgKGNsaWVudEVycjogYW55KS5zb3VyY2UgPSBncWxFeGMuc291cmNlIHx8ICdjbGllbnQnO1xuICAgICAgICAgICAgICAgIHRocm93IGNsaWVudEVycjtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGNvbnN0IGVycm9ycyA9IGVycm9yXG4gICAgICAgICAgICAgICAgJiYgZXJyb3IubmV0d29ya0Vycm9yXG4gICAgICAgICAgICAgICAgJiYgZXJyb3IubmV0d29ya0Vycm9yLnJlc3VsdFxuICAgICAgICAgICAgICAgICYmIGVycm9yLm5ldHdvcmtFcnJvci5yZXN1bHQuZXJyb3JzO1xuICAgICAgICAgICAgaWYgKGVycm9ycykge1xuICAgICAgICAgICAgICAgIHRocm93IFRPTkNsaWVudEVycm9yLnF1ZXJ5RmFpbGVkKGVycm9ycyk7XG4gICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAgIHRocm93IGVycm9yO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgfVxuXG4gICAgYXN5bmMgZ3JhcGhxbENsaWVudFJlcXVpcmVkKHBhcmVudFNwYW4/OiBTcGFuIHwgU3BhbkNvbnRleHQpOiBQcm9taXNlPEFwb2xsb0NsaWVudD4ge1xuICAgICAgICBpZiAodGhpcy5ncmFwaHFsQ2xpZW50KSB7XG4gICAgICAgICAgICByZXR1cm4gdGhpcy5ncmFwaHFsQ2xpZW50O1xuICAgICAgICB9XG4gICAgICAgIGlmICh0aGlzLmdyYXBocWxDbGllbnRDcmVhdGlvbikge1xuICAgICAgICAgICAgYXdhaXQgdGhpcy5ncmFwaHFsQ2xpZW50Q3JlYXRpb24ubGlzdGVuKCk7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICBjb25zdCBjcmVhdGlvbiA9IG5ldyBNdWx0aWNhc3RQcm9taXNlKCk7XG4gICAgICAgICAgICB0aGlzLmdyYXBocWxDbGllbnRDcmVhdGlvbiA9IGNyZWF0aW9uO1xuICAgICAgICAgICAgdHJ5IHtcbiAgICAgICAgICAgICAgICBhd2FpdCB0aGlzLmNvbnRleHQudHJhY2UoJ3NldHVwIGNsaWVudCcsIChzcGFuKSA9PiB7XG4gICAgICAgICAgICAgICAgICAgIHJldHVybiB0aGlzLmNyZWF0ZUdyYXBocWxDbGllbnQoc3Bhbik7XG4gICAgICAgICAgICAgICAgfSwgcGFyZW50U3Bhbik7XG4gICAgICAgICAgICAgICAgdGhpcy5ncmFwaHFsQ2xpZW50Q3JlYXRpb24gPSBudWxsO1xuICAgICAgICAgICAgICAgIGNyZWF0aW9uLnJlc29sdmUodGhpcy5ncmFwaHFsQ2xpZW50KTtcbiAgICAgICAgICAgIH0gY2F0Y2ggKGVycm9yKSB7XG4gICAgICAgICAgICAgICAgdGhpcy5ncmFwaHFsQ2xpZW50Q3JlYXRpb24gPSBudWxsO1xuICAgICAgICAgICAgICAgIGNyZWF0aW9uLnJlamVjdChlcnJvcik7XG4gICAgICAgICAgICAgICAgdGhyb3cgZXJyb3I7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgICAgcmV0dXJuIHRoaXMuZ3JhcGhxbENsaWVudDtcbiAgICB9XG5cbiAgICBhc3luYyBjcmVhdGVHcmFwaHFsQ2xpZW50KHNwYW46IFNwYW4gfCBTcGFuQ29udGV4dCkge1xuICAgICAgICBjb25zdCB1c2VIdHRwID0gIXRoaXMuY29uZmlnLmRhdGEudXNlV2ViU29ja2V0Rm9yUXVlcmllcztcbiAgICAgICAgbGV0IGNsaWVudENvbmZpZyA9IGF3YWl0IHRoaXMuZ2V0Q2xpZW50Q29uZmlnKCk7XG4gICAgICAgIGxldCB3c0xpbms6ID9XZWJTb2NrZXRMaW5rID0gbnVsbDtcbiAgICAgICAgbGV0IGh0dHBMaW5rOiA/SHR0cExpbmsgPSBudWxsO1xuXG4gICAgICAgIGNvbnN0IHN1YnNPcHRpb25zID0gdGhpcy5jb25maWcudHJhY2VyLmluamVjdChzcGFuLCBGT1JNQVRfVEVYVF9NQVAsIHt9KTtcbiAgICAgICAgY29uc3Qgc3Vic2NyaXB0aW9uQ2xpZW50ID0gbmV3IFN1YnNjcmlwdGlvbkNsaWVudChcbiAgICAgICAgICAgIGNsaWVudENvbmZpZy53c1VybCxcbiAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICByZWNvbm5lY3Q6IHRydWUsXG4gICAgICAgICAgICAgICAgY29ubmVjdGlvblBhcmFtczogKCkgPT4gKHtcbiAgICAgICAgICAgICAgICAgICAgYWNjZXNzS2V5OiB0aGlzLmNvbmZpZy5kYXRhICYmIHRoaXMuY29uZmlnLmRhdGEuYWNjZXNzS2V5LFxuICAgICAgICAgICAgICAgICAgICBoZWFkZXJzOiBzdWJzT3B0aW9ucyxcbiAgICAgICAgICAgICAgICB9KSxcbiAgICAgICAgICAgIH0sXG4gICAgICAgICAgICBjbGllbnRDb25maWcuV2ViU29ja2V0LFxuICAgICAgICApO1xuICAgICAgICBzdWJzY3JpcHRpb25DbGllbnQub25SZWNvbm5lY3RlZCgoKSA9PiB7XG4gICAgICAgICAgICBjb25zb2xlLmxvZygnW1RPTkNsaWVudC5xdWVyaWVzXScsICdXZWJTb2NrZXQgUmVjb25uZWN0ZWQnKTtcbiAgICAgICAgfSk7XG4gICAgICAgIGxldCBkZXRlY3RpbmdSZWRpcmVjdGlvbiA9IGZhbHNlO1xuICAgICAgICBzdWJzY3JpcHRpb25DbGllbnQub25FcnJvcigoKSA9PiB7XG4gICAgICAgICAgICBjb25zb2xlLmxvZygnW1RPTkNsaWVudC5xdWVyaWVzXScsICdXZWJTb2NrZXQgRmFpbGVkJyk7XG4gICAgICAgICAgICBpZiAoZGV0ZWN0aW5nUmVkaXJlY3Rpb24pIHtcbiAgICAgICAgICAgICAgICByZXR1cm47XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICAoYXN5bmMgKCkgPT4ge1xuICAgICAgICAgICAgICAgIGRldGVjdGluZ1JlZGlyZWN0aW9uID0gdHJ1ZTtcbiAgICAgICAgICAgICAgICB0cnkge1xuICAgICAgICAgICAgICAgICAgICBjb25zdCBuZXdDb25maWcgPSBhd2FpdCB0aGlzLmdldENsaWVudENvbmZpZygpO1xuICAgICAgICAgICAgICAgICAgICBjb25zdCBjb25maWdJc0NoYW5nZWQgPSBuZXdDb25maWcuaHR0cFVybCAhPT0gY2xpZW50Q29uZmlnLmh0dHBVcmxcbiAgICAgICAgICAgICAgICAgICAgICAgIHx8IG5ld0NvbmZpZy53c1VybCAhPT0gY2xpZW50Q29uZmlnLndzVXJsO1xuICAgICAgICAgICAgICAgICAgICBpZiAoY29uZmlnSXNDaGFuZ2VkKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICBjb25zb2xlLmxvZygnW1RPTkNsaWVudC5xdWVyaWVzXScsICdDbGllbnQgY29uZmlnIGNoYW5nZWQnKTtcbiAgICAgICAgICAgICAgICAgICAgICAgIGNsaWVudENvbmZpZyA9IG5ld0NvbmZpZztcbiAgICAgICAgICAgICAgICAgICAgICAgIHN1YnNjcmlwdGlvbkNsaWVudC51cmwgPSBuZXdDb25maWcud3NVcmw7XG4gICAgICAgICAgICAgICAgICAgICAgICBpZiAod3NMaW5rKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgd3NMaW5rLnVybCA9IG5ld0NvbmZpZy53c1VybDtcbiAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICAgIGlmIChodHRwTGluaykge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGh0dHBMaW5rLnVyaSA9IG5ld0NvbmZpZy5odHRwVXJsO1xuICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgfSBjYXRjaCAoZXJyKSB7XG4gICAgICAgICAgICAgICAgICAgIGNvbnNvbGUubG9nKCdbVE9OQ2xpZW50LnF1ZXJpZXNdIHJlZGlyZWN0aW9uIGRldGVjdG9yIGZhaWxlZCcsIGVycik7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIGRldGVjdGluZ1JlZGlyZWN0aW9uID0gZmFsc2U7XG4gICAgICAgICAgICB9KSgpO1xuICAgICAgICB9KTtcbiAgICAgICAgc3Vic2NyaXB0aW9uQ2xpZW50Lm1heENvbm5lY3RUaW1lR2VuZXJhdG9yLmR1cmF0aW9uID0gKCkgPT4ge1xuICAgICAgICAgICAgcmV0dXJuIHN1YnNjcmlwdGlvbkNsaWVudC5tYXhDb25uZWN0VGltZUdlbmVyYXRvci5tYXg7XG4gICAgICAgIH07XG5cbiAgICAgICAgY29uc3QgdHJhY2VyTGluayA9IGF3YWl0IHNldENvbnRleHQoKF8sIHJlcSkgPT4ge1xuICAgICAgICAgICAgY29uc3QgcmVzb2x2ZWRTcGFuID0gKHJlcSAmJiByZXEudHJhY2VTcGFuKSB8fCBzcGFuO1xuICAgICAgICAgICAgcmVxLmhlYWRlcnMgPSB7fTtcbiAgICAgICAgICAgIHRoaXMuY29uZmlnLnRyYWNlci5pbmplY3QocmVzb2x2ZWRTcGFuLCBGT1JNQVRfVEVYVF9NQVAsIHJlcS5oZWFkZXJzKTtcbiAgICAgICAgICAgIGNvbnN0IGFjY2Vzc0tleSA9IHRoaXMuY29uZmlnLmRhdGEgJiYgdGhpcy5jb25maWcuZGF0YS5hY2Nlc3NLZXk7XG4gICAgICAgICAgICBpZiAoYWNjZXNzS2V5KSB7XG4gICAgICAgICAgICAgICAgcmVxLmhlYWRlcnMuYWNjZXNzS2V5ID0gYWNjZXNzS2V5O1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgcmV0dXJuIHtcbiAgICAgICAgICAgICAgICBoZWFkZXJzOiByZXEuaGVhZGVycyxcbiAgICAgICAgICAgIH07XG4gICAgICAgIH0pO1xuICAgICAgICBjb25zdCB3cmFwTGluayA9IChsaW5rOiBBcG9sbG9MaW5rKTogQXBvbGxvTGluayA9PiB0cmFjZXJMaW5rLmNvbmNhdChsaW5rKTtcbiAgICAgICAgY29uc3QgaXNTdWJzY3JpcHRpb24gPSAoeyBxdWVyeSB9KSA9PiB7XG4gICAgICAgICAgICBjb25zdCBkZWZpbml0aW9uID0gZ2V0TWFpbkRlZmluaXRpb24ocXVlcnkpO1xuICAgICAgICAgICAgcmV0dXJuIChcbiAgICAgICAgICAgICAgICBkZWZpbml0aW9uLmtpbmQgPT09ICdPcGVyYXRpb25EZWZpbml0aW9uJ1xuICAgICAgICAgICAgICAgICYmIGRlZmluaXRpb24ub3BlcmF0aW9uID09PSAnc3Vic2NyaXB0aW9uJ1xuICAgICAgICAgICAgKTtcbiAgICAgICAgfTtcbiAgICAgICAgd3NMaW5rID0gbmV3IFdlYlNvY2tldExpbmsoc3Vic2NyaXB0aW9uQ2xpZW50KTtcbiAgICAgICAgaHR0cExpbmsgPSB1c2VIdHRwXG4gICAgICAgICAgICA/IG5ldyBIdHRwTGluayh7XG4gICAgICAgICAgICAgICAgdXJpOiBjbGllbnRDb25maWcuaHR0cFVybCxcbiAgICAgICAgICAgICAgICBmZXRjaDogY2xpZW50Q29uZmlnLmZldGNoLFxuICAgICAgICAgICAgfSlcbiAgICAgICAgICAgIDogbnVsbDtcblxuICAgICAgICBjb25zdCBsaW5rID0gaHR0cExpbmtcbiAgICAgICAgICAgID8gc3BsaXQoaXNTdWJzY3JpcHRpb24sIHdyYXBMaW5rKHdzTGluayksIHdyYXBMaW5rKGh0dHBMaW5rKSlcbiAgICAgICAgICAgIDogd3JhcExpbmsod3NMaW5rKTtcbiAgICAgICAgdGhpcy5ncmFwaHFsQ2xpZW50ID0gbmV3IEFwb2xsb0NsaWVudCh7XG4gICAgICAgICAgICBjYWNoZTogbmV3IEluTWVtb3J5Q2FjaGUoe30pLFxuICAgICAgICAgICAgbGluayxcbiAgICAgICAgICAgIGRlZmF1bHRPcHRpb25zOiB7XG4gICAgICAgICAgICAgICAgd2F0Y2hRdWVyeToge1xuICAgICAgICAgICAgICAgICAgICBmZXRjaFBvbGljeTogJ25vLWNhY2hlJyxcbiAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgIHF1ZXJ5OiB7XG4gICAgICAgICAgICAgICAgICAgIGZldGNoUG9saWN5OiAnbm8tY2FjaGUnLFxuICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICB9LFxuICAgICAgICB9KTtcbiAgICB9XG5cbiAgICBhc3luYyBjbG9zZSgpIHtcbiAgICAgICAgaWYgKHRoaXMuZ3JhcGhxbENsaWVudCkge1xuICAgICAgICAgICAgY29uc3QgY2xpZW50ID0gdGhpcy5ncmFwaHFsQ2xpZW50O1xuICAgICAgICAgICAgdGhpcy5ncmFwaHFsQ2xpZW50ID0gbnVsbDtcbiAgICAgICAgICAgIGNsaWVudC5zdG9wKCk7XG4gICAgICAgICAgICBhd2FpdCBjbGllbnQuY2xlYXJTdG9yZSgpO1xuICAgICAgICB9XG4gICAgfVxuXG4gICAgdHJhbnNhY3Rpb25zOiBUT05RQ29sbGVjdGlvbjtcblxuICAgIG1lc3NhZ2VzOiBUT05RQ29sbGVjdGlvbjtcblxuICAgIGJsb2NrczogVE9OUUNvbGxlY3Rpb247XG5cbiAgICBhY2NvdW50czogVE9OUUNvbGxlY3Rpb247XG5cbiAgICBibG9ja3Nfc2lnbmF0dXJlczogVE9OUUNvbGxlY3Rpb247XG5cbiAgICBncmFwaHFsQ2xpZW50OiBBcG9sbG9DbGllbnQ7XG59XG5cblxuY2xhc3MgVE9OUXVlcmllc01vZHVsZUNvbGxlY3Rpb24gaW1wbGVtZW50cyBUT05RQ29sbGVjdGlvbiB7XG4gICAgbW9kdWxlOiBUT05RdWVyaWVzTW9kdWxlO1xuXG4gICAgY29sbGVjdGlvbk5hbWU6IHN0cmluZztcblxuICAgIHR5cGVOYW1lOiBzdHJpbmc7XG5cbiAgICBjb25zdHJ1Y3Rvcihtb2R1bGU6IFRPTlF1ZXJpZXNNb2R1bGUsIGNvbGxlY3Rpb25OYW1lOiBzdHJpbmcpIHtcbiAgICAgICAgdGhpcy5tb2R1bGUgPSBtb2R1bGU7XG4gICAgICAgIHRoaXMuY29sbGVjdGlvbk5hbWUgPSBjb2xsZWN0aW9uTmFtZTtcbiAgICAgICAgdGhpcy50eXBlTmFtZSA9IGAke2NvbGxlY3Rpb25OYW1lWzBdLnRvVXBwZXJDYXNlKCl9JHtjb2xsZWN0aW9uTmFtZS5zbGljZSgxLCAtMSl9YDtcbiAgICB9XG5cbiAgICBhc3luYyBxdWVyeShcbiAgICAgICAgLi4uYXJnc1xuICAgICAgICAvKlxuICAgICAgICAgICAgZmlsdGVyT3JQYXJhbXM6IGFueSB8IFRPTlF1ZXJ5UGFyYW1zLFxuICAgICAgICAgICAgcmVzdWx0OiBzdHJpbmcsXG4gICAgICAgICAgICBvcmRlckJ5PzogT3JkZXJCeVtdLFxuICAgICAgICAgICAgbGltaXQ/OiBudW1iZXIsXG4gICAgICAgICAgICB0aW1lb3V0PzogbnVtYmVyLFxuICAgICAgICAgICAgcGFyZW50U3Bhbj86IChTcGFuIHwgU3BhbkNvbnRleHQpXG4gICAgICAgICAqL1xuICAgICk6IFByb21pc2U8YW55PiB7XG4gICAgICAgIGNvbnN0IHtcbiAgICAgICAgICAgIGZpbHRlcixcbiAgICAgICAgICAgIHJlc3VsdCxcbiAgICAgICAgICAgIG9yZGVyQnksXG4gICAgICAgICAgICBsaW1pdCxcbiAgICAgICAgICAgIHRpbWVvdXQsXG4gICAgICAgICAgICBvcGVyYXRpb25JZCxcbiAgICAgICAgICAgIHBhcmVudFNwYW4sXG4gICAgICAgIH0gPSByZXNvbHZlUGFyYW1zPFRPTlF1ZXJ5UGFyYW1zPihhcmdzLCAnZmlsdGVyJywgKCkgPT4gKHtcbiAgICAgICAgICAgIGZpbHRlcjogYXJnc1swXSxcbiAgICAgICAgICAgIHJlc3VsdDogKGFyZ3NbMV06IGFueSksXG4gICAgICAgICAgICBvcmRlckJ5OiAoYXJnc1syXTogYW55KSxcbiAgICAgICAgICAgIGxpbWl0OiAoYXJnc1szXTogYW55KSxcbiAgICAgICAgICAgIHRpbWVvdXQ6IChhcmdzWzRdOiBhbnkpLFxuICAgICAgICAgICAgcGFyZW50U3BhbjogYXJnc1s1XSxcbiAgICAgICAgfSkpO1xuICAgICAgICByZXR1cm4gdGhpcy5tb2R1bGUuY29udGV4dC50cmFjZShgJHt0aGlzLmNvbGxlY3Rpb25OYW1lfS5xdWVyeWAsIGFzeW5jIChzcGFuKSA9PiB7XG4gICAgICAgICAgICBzcGFuLnNldFRhZygncGFyYW1zJywge1xuICAgICAgICAgICAgICAgIGZpbHRlcixcbiAgICAgICAgICAgICAgICByZXN1bHQsXG4gICAgICAgICAgICAgICAgb3JkZXJCeSxcbiAgICAgICAgICAgICAgICBsaW1pdCxcbiAgICAgICAgICAgICAgICB0aW1lb3V0LFxuICAgICAgICAgICAgICAgIG9wZXJhdGlvbklkOiBvcGVyYXRpb25JZCxcbiAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgY29uc3QgdXNlT3BlcmF0aW9uSWQgPSBvcGVyYXRpb25JZCAmJiAoYXdhaXQgdGhpcy5tb2R1bGUuZ2V0U2VydmVySW5mbyhzcGFuKSkuc3VwcG9ydHNPcGVyYXRpb25JZDtcbiAgICAgICAgICAgIGNvbnN0IGMgPSB0aGlzLmNvbGxlY3Rpb25OYW1lO1xuICAgICAgICAgICAgY29uc3QgdCA9IHRoaXMudHlwZU5hbWU7XG4gICAgICAgICAgICBjb25zdCBxbCA9IGBcbiAgICAgICAgICAgIHF1ZXJ5ICR7Y30oXG4gICAgICAgICAgICAgICAgJGZpbHRlcjogJHt0fUZpbHRlcixcbiAgICAgICAgICAgICAgICAkb3JkZXJCeTogW1F1ZXJ5T3JkZXJCeV0sIFxuICAgICAgICAgICAgICAgICRsaW1pdDogSW50LCBcbiAgICAgICAgICAgICAgICAkdGltZW91dDogRmxvYXRcbiAgICAgICAgICAgICAgICAke3VzZU9wZXJhdGlvbklkID8gJywgJG9wZXJhdGlvbklkOiBTdHJpbmcnIDogJyd9XG4gICAgICAgICAgICAgKSB7XG4gICAgICAgICAgICAgICAgJHtjfShcbiAgICAgICAgICAgICAgICAgICAgZmlsdGVyOiAkZmlsdGVyLCBcbiAgICAgICAgICAgICAgICAgICAgb3JkZXJCeTogJG9yZGVyQnksIFxuICAgICAgICAgICAgICAgICAgICBsaW1pdDogJGxpbWl0LCBcbiAgICAgICAgICAgICAgICAgICAgdGltZW91dDogJHRpbWVvdXRcbiAgICAgICAgICAgICAgICAgICAgJHt1c2VPcGVyYXRpb25JZCA/ICcsIG9wZXJhdGlvbklkOiAkb3BlcmF0aW9uSWQnIDogJyd9XG4gICAgICAgICAgICAgICAgKSB7ICR7cmVzdWx0fSB9XG4gICAgICAgICAgICB9YDtcbiAgICAgICAgICAgIGNvbnN0IHZhcmlhYmxlczogeyBbc3RyaW5nXTogYW55IH0gPSB7XG4gICAgICAgICAgICAgICAgZmlsdGVyLFxuICAgICAgICAgICAgICAgIG9yZGVyQnksXG4gICAgICAgICAgICAgICAgbGltaXQsXG4gICAgICAgICAgICB9O1xuICAgICAgICAgICAgaWYgKHVzZU9wZXJhdGlvbklkKSB7XG4gICAgICAgICAgICAgICAgdmFyaWFibGVzLm9wZXJhdGlvbklkID0gb3BlcmF0aW9uSWQ7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBpZiAodGltZW91dCkge1xuICAgICAgICAgICAgICAgIHZhcmlhYmxlcy50aW1lb3V0ID0gTWF0aC5taW4oTUFYX1RJTUVPVVQsIHRpbWVvdXQpO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgcmV0dXJuIChhd2FpdCB0aGlzLm1vZHVsZS5ncmFwaHFsUXVlcnkocWwsIHZhcmlhYmxlcywgc3BhbikpLmRhdGFbY107XG4gICAgICAgIH0sIHBhcmVudFNwYW4pO1xuICAgIH1cblxuICAgIHN1YnNjcmliZShcbiAgICAgICAgLi4uYXJnc1xuICAgICAgICAvKlxuICAgICAgICBmaWx0ZXJPclBhcmFtczogYW55IHwgVE9OU3Vic2NyaWJlUGFyYW1zLFxuICAgICAgICByZXN1bHQ/OiBzdHJpbmcsXG4gICAgICAgIG9uRG9jRXZlbnQ/OiBEb2NFdmVudCxcbiAgICAgICAgb25FcnJvcj86IChlcnI6IEVycm9yKSA9PiB2b2lkXG4gICAgICAgICAqL1xuICAgICk6IFN1YnNjcmlwdGlvbiB7XG4gICAgICAgIGNvbnN0IHtcbiAgICAgICAgICAgIGZpbHRlcixcbiAgICAgICAgICAgIHJlc3VsdCxcbiAgICAgICAgICAgIG9uRG9jRXZlbnQsXG4gICAgICAgICAgICBvbkVycm9yLFxuICAgICAgICB9ID0gcmVzb2x2ZVBhcmFtczxUT05TdWJzY3JpYmVQYXJhbXM+KGFyZ3MsICdmaWx0ZXInLCAoKSA9PiAoe1xuICAgICAgICAgICAgZmlsdGVyOiBhcmdzWzBdLFxuICAgICAgICAgICAgcmVzdWx0OiAoYXJnc1sxXTogYW55KSxcbiAgICAgICAgICAgIG9uRG9jRXZlbnQ6IChhcmdzWzJdOiBhbnkpLFxuICAgICAgICAgICAgb25FcnJvcjogKGFyZ3NbM106IGFueSksXG4gICAgICAgIH0pKTtcbiAgICAgICAgY29uc3Qgc3BhbiA9IHRoaXMubW9kdWxlLmNvbmZpZy50cmFjZXIuc3RhcnRTcGFuKCdUT05RdWVyaWVzTW9kdWxlLmpzOnN1YnNjcmliZSAnKTtcbiAgICAgICAgc3Bhbi5zZXRUYWcoVGFncy5TUEFOX0tJTkQsICdjbGllbnQnKTtcbiAgICAgICAgY29uc3QgdGV4dCA9IGBzdWJzY3JpcHRpb24gJHt0aGlzLmNvbGxlY3Rpb25OYW1lfSgkZmlsdGVyOiAke3RoaXMudHlwZU5hbWV9RmlsdGVyKSB7XG4gICAgICAgICAgICAke3RoaXMuY29sbGVjdGlvbk5hbWV9KGZpbHRlcjogJGZpbHRlcikgeyAke3Jlc3VsdH0gfVxuICAgICAgICB9YDtcbiAgICAgICAgY29uc3QgcXVlcnkgPSBncWwoW3RleHRdKTtcbiAgICAgICAgbGV0IHN1YnNjcmlwdGlvbiA9IG51bGw7XG4gICAgICAgIChhc3luYyAoKSA9PiB7XG4gICAgICAgICAgICB0cnkge1xuICAgICAgICAgICAgICAgIGNvbnN0IGNsaWVudCA9IGF3YWl0IHRoaXMubW9kdWxlLmdyYXBocWxDbGllbnRSZXF1aXJlZChzcGFuKTtcbiAgICAgICAgICAgICAgICBjb25zdCBvYnNlcnZhYmxlID0gY2xpZW50LnN1YnNjcmliZSh7XG4gICAgICAgICAgICAgICAgICAgIHF1ZXJ5LFxuICAgICAgICAgICAgICAgICAgICB2YXJpYWJsZXM6IHtcbiAgICAgICAgICAgICAgICAgICAgICAgIGZpbHRlcixcbiAgICAgICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICB9KTtcbiAgICAgICAgICAgICAgICBzdWJzY3JpcHRpb24gPSBvYnNlcnZhYmxlLnN1YnNjcmliZSgobWVzc2FnZSkgPT4ge1xuICAgICAgICAgICAgICAgICAgICBvbkRvY0V2ZW50KCdpbnNlcnQvdXBkYXRlJywgbWVzc2FnZS5kYXRhW3RoaXMuY29sbGVjdGlvbk5hbWVdKTtcbiAgICAgICAgICAgICAgICB9KTtcbiAgICAgICAgICAgIH0gY2F0Y2ggKGVycm9yKSB7XG4gICAgICAgICAgICAgICAgc3Bhbi5sb2coe1xuICAgICAgICAgICAgICAgICAgICBldmVudDogJ2ZhaWxlZCcsXG4gICAgICAgICAgICAgICAgICAgIHBheWxvYWQ6IGVycm9yLFxuICAgICAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgICAgIGlmIChvbkVycm9yKSB7XG4gICAgICAgICAgICAgICAgICAgIG9uRXJyb3IoZXJyb3IpO1xuICAgICAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgICAgICAgIGNvbnNvbGUubG9nKCdUT04gQ2xpZW50IHN1YnNjcmlwdGlvbiBlcnJvcicsIGVycm9yKTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG4gICAgICAgIH0pKCk7XG4gICAgICAgIHJldHVybiB7XG4gICAgICAgICAgICB1bnN1YnNjcmliZTogKCkgPT4ge1xuICAgICAgICAgICAgICAgIGlmIChzdWJzY3JpcHRpb24pIHtcbiAgICAgICAgICAgICAgICAgICAgc3Vic2NyaXB0aW9uLnVuc3Vic2NyaWJlKCk7XG4gICAgICAgICAgICAgICAgICAgIHNwYW4uZmluaXNoKCk7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfSxcbiAgICAgICAgfTtcbiAgICB9XG5cbiAgICBhc3luYyB3YWl0Rm9yKFxuICAgICAgICAuLi5hcmdzXG4gICAgICAgIC8qXG4gICAgICAgIGZpbHRlck9yUGFyYW1zOiBhbnkgfCBUT05XYWl0Rm9yUGFyYW1zLFxuICAgICAgICByZXN1bHQ6IHN0cmluZyxcbiAgICAgICAgdGltZW91dD86IG51bWJlcixcbiAgICAgICAgcGFyZW50U3Bhbj86IChTcGFuIHwgU3BhbkNvbnRleHQpXG4gICAgICAgICAqL1xuICAgICk6IFByb21pc2U8YW55PiB7XG4gICAgICAgIGNvbnN0IHtcbiAgICAgICAgICAgIGZpbHRlcixcbiAgICAgICAgICAgIHJlc3VsdCxcbiAgICAgICAgICAgIHRpbWVvdXQ6IHBhcmFtc1RpbWVvdXQsXG4gICAgICAgICAgICBwYXJlbnRTcGFuLFxuICAgICAgICAgICAgb3BlcmF0aW9uSWQsXG4gICAgICAgIH0gPSByZXNvbHZlUGFyYW1zPFRPTldhaXRGb3JQYXJhbXM+KGFyZ3MsICdmaWx0ZXInLCAoKSA9PiAoe1xuICAgICAgICAgICAgZmlsdGVyOiBhcmdzWzBdLFxuICAgICAgICAgICAgcmVzdWx0OiAoYXJnc1sxXTogYW55KSxcbiAgICAgICAgICAgIHRpbWVvdXQ6IChhcmdzWzJdOiBhbnkpLFxuICAgICAgICAgICAgcGFyZW50U3BhbjogYXJnc1szXSxcbiAgICAgICAgfSkpO1xuICAgICAgICBjb25zdCB0aW1lb3V0ID0gcGFyYW1zVGltZW91dCB8fCB0aGlzLm1vZHVsZS5jb25maWcud2FpdEZvclRpbWVvdXQoKTtcbiAgICAgICAgY29uc3QgZG9jcyA9IGF3YWl0IHRoaXMucXVlcnkoe1xuICAgICAgICAgICAgZmlsdGVyLFxuICAgICAgICAgICAgcmVzdWx0LFxuICAgICAgICAgICAgdGltZW91dCxcbiAgICAgICAgICAgIHBhcmVudFNwYW4sXG4gICAgICAgICAgICBvcGVyYXRpb25JZDogb3BlcmF0aW9uSWQsXG4gICAgICAgIH0pO1xuICAgICAgICBpZiAoZG9jcy5sZW5ndGggPiAwKSB7XG4gICAgICAgICAgICByZXR1cm4gZG9jc1swXTtcbiAgICAgICAgfVxuICAgICAgICB0aHJvdyBUT05DbGllbnRFcnJvci53YWl0Rm9yVGltZW91dCgpO1xuICAgIH1cbn1cblxuVE9OUXVlcmllc01vZHVsZS5tb2R1bGVOYW1lID0gJ1RPTlF1ZXJpZXNNb2R1bGUnO1xuIl19