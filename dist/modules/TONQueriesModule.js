"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = exports.MAX_TIMEOUT = void 0;

var _regenerator = _interopRequireDefault(require("@babel/runtime/regenerator"));

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

var _TONClientError = require("../TONClientError");

var _TONModule2 = require("../TONModule");

var _TONConfigModule = _interopRequireWildcard(require("./TONConfigModule"));

function _getRequireWildcardCache() { if (typeof WeakMap !== "function") return null; var cache = new WeakMap(); _getRequireWildcardCache = function _getRequireWildcardCache() { return cache; }; return cache; }

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } if (obj === null || _typeof(obj) !== "object" && typeof obj !== "function") { return { "default": obj }; } var cache = _getRequireWildcardCache(); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj["default"] = obj; if (cache) { cache.set(obj, newObj); } return newObj; }

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _typeof(obj) { "@babel/helpers - typeof"; if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _createForOfIteratorHelper(o) { if (typeof Symbol === "undefined" || o[Symbol.iterator] == null) { if (Array.isArray(o) || (o = _unsupportedIterableToArray(o))) { var i = 0; var F = function F() {}; return { s: F, n: function n() { if (i >= o.length) return { done: true }; return { done: false, value: o[i++] }; }, e: function e(_e) { throw _e; }, f: F }; } throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); } var it, normalCompletion = true, didErr = false, err; return { s: function s() { it = o[Symbol.iterator](); }, n: function n() { var step = it.next(); normalCompletion = step.done; return step; }, e: function e(_e2) { didErr = true; err = _e2; }, f: function f() { try { if (!normalCompletion && it["return"] != null) it["return"](); } finally { if (didErr) throw err; } } }; }

function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }

function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }

function asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { Promise.resolve(value).then(_next, _throw); } }

function _asyncToGenerator(fn) { return function () { var self = this, args = arguments; return new Promise(function (resolve, reject) { var gen = fn.apply(self, args); function _next(value) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "next", value); } function _throw(err) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "throw", err); } _next(undefined); }); }; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

function _createSuper(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct(); return function () { var Super = _getPrototypeOf(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = _getPrototypeOf(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return _possibleConstructorReturn(this, result); }; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Date.prototype.toString.call(Reflect.construct(Date, [], function () {})); return true; } catch (e) { return false; } }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

// Keep-alive timeout used to support keep-alive connection checking:
// - Every 1 minute server sends GQL_CONNECTION_KEEP_ALIVE message.
// - Every 2 minutes client checks that GQL_CONNECTION_KEEP_ALIVE message was received
//   within last 2 minutes.
// - If client hadn't received keep alive message during last 2 minutes
//   it closes connection and goes to reconnect.
var KEEP_ALIVE_TIMEOUT = 2 * 60000;
var MAX_TIMEOUT = 2147483647;
exports.MAX_TIMEOUT = MAX_TIMEOUT;

function resolveParams(args, requiredParamName, resolveArgs) {
  return args.length === 1 && requiredParamName in args[0] ? args[0] : resolveArgs();
}

var MulticastPromise = /*#__PURE__*/function () {
  function MulticastPromise() {
    _classCallCheck(this, MulticastPromise);

    _defineProperty(this, "listeners", void 0);

    _defineProperty(this, "onComplete", void 0);

    this.listeners = [];
    this.onComplete = null;
  }

  _createClass(MulticastPromise, [{
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
    supportsAggregations: version >= 25000,
    supportsTime: version >= 26003,
    timeDelta: null
  };
}

function abortableFetch(fetch) {
  return function (input, options) {
    return new Promise(function (resolve, reject) {
      var queryTimeout = options.queryTimeout;
      var fetchOptions = options;

      if (queryTimeout) {
        var controller = global.AbortController ? new global.AbortController() : null;

        if (controller) {
          fetchOptions = _objectSpread(_objectSpread({}, options), {}, {
            signal: controller.signal
          });
        }

        setTimeout(function () {
          reject(_TONClientError.TONClientError.queryForciblyAborted(_TONClientError.emptyTONErrorData));

          if (controller) {
            controller.abort();
          }
        }, queryTimeout);
      }

      fetch(input, fetchOptions).then(resolve, reject);
    });
  };
}

var TONQueriesModule = /*#__PURE__*/function (_TONModule) {
  _inherits(TONQueriesModule, _TONModule);

  var _super = _createSuper(TONQueriesModule);

  function TONQueriesModule(context) {
    var _this;

    _classCallCheck(this, TONQueriesModule);

    _this = _super.call(this, context);

    _defineProperty(_assertThisInitialized(_this), "transactions", void 0);

    _defineProperty(_assertThisInitialized(_this), "messages", void 0);

    _defineProperty(_assertThisInitialized(_this), "blocks", void 0);

    _defineProperty(_assertThisInitialized(_this), "accounts", void 0);

    _defineProperty(_assertThisInitialized(_this), "blocks_signatures", void 0);

    _defineProperty(_assertThisInitialized(_this), "config", void 0);

    _defineProperty(_assertThisInitialized(_this), "graphqlClientCreation", void 0);

    _defineProperty(_assertThisInitialized(_this), "graphqlClient", void 0);

    _defineProperty(_assertThisInitialized(_this), "graphqlClientConfig", void 0);

    _defineProperty(_assertThisInitialized(_this), "wsLink", void 0);

    _defineProperty(_assertThisInitialized(_this), "httpLink", void 0);

    _defineProperty(_assertThisInitialized(_this), "overrideWsUrl", void 0);

    _defineProperty(_assertThisInitialized(_this), "operationIdPrefix", void 0);

    _defineProperty(_assertThisInitialized(_this), "operationIdSuffix", void 0);

    _defineProperty(_assertThisInitialized(_this), "serverInfo", void 0);

    _defineProperty(_assertThisInitialized(_this), "activeQueriesRejects", void 0);

    _this.graphqlClient = null;
    _this.graphqlClientCreation = null;
    _this.graphqlClientConfig = null;
    _this.wsLink = null;
    _this.httpLink = null;
    _this.overrideWsUrl = null;
    _this.operationIdPrefix = (Date.now() % 60000).toString(16);

    for (var i = 0; i < 10; i += 1) {
      var randomPart = Math.round(Math.random() * 256).toString(16);
      _this.operationIdPrefix = "".concat(_this.operationIdPrefix).concat(randomPart);
    }

    _this.operationIdSuffix = 1;
    _this.serverInfo = resolveServerInfo();
    _this.activeQueriesRejects = [];
    return _this;
  }

  _createClass(TONQueriesModule, [{
    key: "registerQueryReject",
    value: function registerQueryReject(reject) {
      this.activeQueriesRejects.push(reject);
    }
  }, {
    key: "unregisterQueryReject",
    value: function unregisterQueryReject(reject) {
      var index = this.activeQueriesRejects.indexOf(reject);

      if (index >= 0) {
        this.activeQueriesRejects.splice(index, 1);
      }
    }
  }, {
    key: "rejectActiveQueries",
    value: function rejectActiveQueries() {
      var rejects = this.activeQueriesRejects;
      this.activeQueriesRejects = [];

      var err = _TONClientError.TONClientError.queryForciblyAborted({});

      rejects.forEach(function (reject) {
        try {
          reject(err);
        } catch (_unused) {}
      });
    }
  }, {
    key: "setup",
    value: function () {
      var _setup = _asyncToGenerator( /*#__PURE__*/_regenerator["default"].mark(function _callee() {
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
    key: "getQueryUrl",
    value: function getQueryUrl() {
      var _this$graphqlClientCo;

      return ((_this$graphqlClientCo = this.graphqlClientConfig) === null || _this$graphqlClientCo === void 0 ? void 0 : _this$graphqlClientCo.httpUrl) || '';
    }
  }, {
    key: "detectRedirect",
    value: function () {
      var _detectRedirect = _asyncToGenerator( /*#__PURE__*/_regenerator["default"].mark(function _callee2(fetch, sourceUrl) {
        var response, responseText, responseJson, sourceLocation, responseLocation;
        return _regenerator["default"].wrap(function _callee2$(_context2) {
          while (1) {
            switch (_context2.prev = _context2.next) {
              case 0:
                _context2.next = 2;
                return fetch(sourceUrl);

              case 2:
                response = _context2.sent;
                _context2.prev = 3;
                _context2.next = 6;
                return response.text();

              case 6:
                responseText = _context2.sent;
                responseJson = JSON.parse(responseText);
                this.serverInfo = resolveServerInfo(responseJson.data.info.version);
                _context2.next = 13;
                break;

              case 11:
                _context2.prev = 11;
                _context2.t0 = _context2["catch"](3);

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
                sourceLocation = _TONConfigModule.URLParts.parse(sourceUrl).fixQuery(function () {
                  return '';
                }).toString().toLowerCase();
                responseLocation = _TONConfigModule.URLParts.parse(response.url).fixQuery(function () {
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
      var _getClientConfig = _asyncToGenerator( /*#__PURE__*/_regenerator["default"].mark(function _callee3() {
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
                clientConfig = getConfigForServer(server);
                _context3.prev = 12;
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
                _context3.t0 = _context3["catch"](12);
                console.log("[getClientConfig] for server \"".concat(server, "\" failed"), {
                  message: _context3.t0.message || _context3.t0.toString(),
                  data: {
                    http_url: clientConfig.httpUrl,
                    ws_url: clientConfig.wsUrl
                  }
                });

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
        }, _callee3, this, [[7, 27, 30, 33], [12, 20]]);
      }));

      function getClientConfig() {
        return _getClientConfig.apply(this, arguments);
      }

      return getClientConfig;
    }()
  }, {
    key: "getServerInfo",
    value: function () {
      var _getServerInfo = _asyncToGenerator( /*#__PURE__*/_regenerator["default"].mark(function _callee4(span) {
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
    key: "serverTimeDelta",
    value: function () {
      var _serverTimeDelta = _asyncToGenerator( /*#__PURE__*/_regenerator["default"].mark(function _callee5(span) {
        var serverInfo, clientConfig, start, response, end, responseData, serverTime;
        return _regenerator["default"].wrap(function _callee5$(_context5) {
          while (1) {
            switch (_context5.prev = _context5.next) {
              case 0:
                _context5.next = 2;
                return this.getServerInfo(span);

              case 2:
                serverInfo = _context5.sent;
                clientConfig = this.graphqlClientConfig;

                if (!(clientConfig && serverInfo.supportsTime && serverInfo.timeDelta === null)) {
                  _context5.next = 21;
                  break;
                }

                _context5.prev = 5;
                start = Date.now(); // noinspection SpellCheckingInspection

                _context5.next = 9;
                return clientConfig.fetch("".concat(clientConfig.httpUrl, "?query=%7Binfo%7Btime%7D%7D"));

              case 9:
                response = _context5.sent;
                end = Date.now();
                _context5.next = 13;
                return response.json();

              case 13:
                responseData = _context5.sent;
                serverTime = responseData.data.info.time;
                serverInfo.timeDelta = Math.round(serverTime - (start + (end - start) / 2));
                _context5.next = 21;
                break;

              case 18:
                _context5.prev = 18;
                _context5.t0 = _context5["catch"](5);
                console.log('>>>', _context5.t0);

              case 21:
                return _context5.abrupt("return", serverInfo.timeDelta || 0);

              case 22:
              case "end":
                return _context5.stop();
            }
          }
        }, _callee5, this, [[5, 18]]);
      }));

      function serverTimeDelta(_x4) {
        return _serverTimeDelta.apply(this, arguments);
      }

      return serverTimeDelta;
    }()
  }, {
    key: "serverNow",
    value: function () {
      var _serverNow = _asyncToGenerator( /*#__PURE__*/_regenerator["default"].mark(function _callee6(span) {
        var timeDelta;
        return _regenerator["default"].wrap(function _callee6$(_context6) {
          while (1) {
            switch (_context6.prev = _context6.next) {
              case 0:
                _context6.next = 2;
                return this.serverTimeDelta(span);

              case 2:
                timeDelta = _context6.sent;
                return _context6.abrupt("return", Date.now() + timeDelta);

              case 4:
              case "end":
                return _context6.stop();
            }
          }
        }, _callee6, this);
      }));

      function serverNow(_x5) {
        return _serverNow.apply(this, arguments);
      }

      return serverNow;
    }()
  }, {
    key: "dropServerTimeDelta",
    value: function dropServerTimeDelta() {
      if (this.serverInfo) {
        this.serverInfo.timeDelta = null;
      }
    }
  }, {
    key: "generateOperationId",
    value: function generateOperationId() {
      this.operationIdSuffix += 1;
      return "".concat(this.operationIdPrefix).concat(this.operationIdSuffix.toString(16));
    }
  }, {
    key: "finishOperations",
    value: function () {
      var _finishOperations = _asyncToGenerator( /*#__PURE__*/_regenerator["default"].mark(function _callee7(operationIds) {
        return _regenerator["default"].wrap(function _callee7$(_context7) {
          while (1) {
            switch (_context7.prev = _context7.next) {
              case 0:
                if (!(operationIds.length === 0)) {
                  _context7.next = 2;
                  break;
                }

                return _context7.abrupt("return");

              case 2:
                _context7.next = 4;
                return this.getServerInfo();

              case 4:
                if (_context7.sent.supportsOperationId) {
                  _context7.next = 6;
                  break;
                }

                return _context7.abrupt("return");

              case 6:
                _context7.next = 8;
                return this.graphqlMutation("mutation finishOperations($operationIds: [String]) {\n                finishOperations(operationIds: $operationIds)\n            }", {
                  operationIds: operationIds
                });

              case 8:
              case "end":
                return _context7.stop();
            }
          }
        }, _callee7, this);
      }));

      function finishOperations(_x6) {
        return _finishOperations.apply(this, arguments);
      }

      return finishOperations;
    }()
  }, {
    key: "getAccountsCount",
    value: function () {
      var _getAccountsCount = _asyncToGenerator( /*#__PURE__*/_regenerator["default"].mark(function _callee8(parentSpan) {
        var result;
        return _regenerator["default"].wrap(function _callee8$(_context8) {
          while (1) {
            switch (_context8.prev = _context8.next) {
              case 0:
                _context8.next = 2;
                return this.query('query{getAccountsCount}', undefined, parentSpan);

              case 2:
                result = _context8.sent;
                return _context8.abrupt("return", result.data.getAccountsCount);

              case 4:
              case "end":
                return _context8.stop();
            }
          }
        }, _callee8, this);
      }));

      function getAccountsCount(_x7) {
        return _getAccountsCount.apply(this, arguments);
      }

      return getAccountsCount;
    }()
  }, {
    key: "getTransactionsCount",
    value: function () {
      var _getTransactionsCount = _asyncToGenerator( /*#__PURE__*/_regenerator["default"].mark(function _callee9(parentSpan) {
        var result;
        return _regenerator["default"].wrap(function _callee9$(_context9) {
          while (1) {
            switch (_context9.prev = _context9.next) {
              case 0:
                _context9.next = 2;
                return this.query('query{getTransactionsCount}', undefined, parentSpan);

              case 2:
                result = _context9.sent;
                return _context9.abrupt("return", result.data.getTransactionsCount);

              case 4:
              case "end":
                return _context9.stop();
            }
          }
        }, _callee9, this);
      }));

      function getTransactionsCount(_x8) {
        return _getTransactionsCount.apply(this, arguments);
      }

      return getTransactionsCount;
    }()
  }, {
    key: "getAccountsTotalBalance",
    value: function () {
      var _getAccountsTotalBalance = _asyncToGenerator( /*#__PURE__*/_regenerator["default"].mark(function _callee10(parentSpan) {
        var result;
        return _regenerator["default"].wrap(function _callee10$(_context10) {
          while (1) {
            switch (_context10.prev = _context10.next) {
              case 0:
                _context10.next = 2;
                return this.query('query{getAccountsTotalBalance}', undefined, parentSpan);

              case 2:
                result = _context10.sent;
                return _context10.abrupt("return", result.data.getAccountsTotalBalance);

              case 4:
              case "end":
                return _context10.stop();
            }
          }
        }, _callee10, this);
      }));

      function getAccountsTotalBalance(_x9) {
        return _getAccountsTotalBalance.apply(this, arguments);
      }

      return getAccountsTotalBalance;
    }()
  }, {
    key: "postRequests",
    value: function () {
      var _postRequests = _asyncToGenerator( /*#__PURE__*/_regenerator["default"].mark(function _callee12(requests, parentSpan) {
        var _this2 = this;

        return _regenerator["default"].wrap(function _callee12$(_context12) {
          while (1) {
            switch (_context12.prev = _context12.next) {
              case 0:
                return _context12.abrupt("return", this.context.trace('queries.postRequests', /*#__PURE__*/function () {
                  var _ref = _asyncToGenerator( /*#__PURE__*/_regenerator["default"].mark(function _callee11(span) {
                    return _regenerator["default"].wrap(function _callee11$(_context11) {
                      while (1) {
                        switch (_context11.prev = _context11.next) {
                          case 0:
                            return _context11.abrupt("return", _this2.graphqlMutation("mutation postRequests($requests: [Request]) {\n                postRequests(requests: $requests)\n            }", {
                              requests: requests
                            }, span));

                          case 1:
                          case "end":
                            return _context11.stop();
                        }
                      }
                    }, _callee11);
                  }));

                  return function (_x12) {
                    return _ref.apply(this, arguments);
                  };
                }(), parentSpan));

              case 1:
              case "end":
                return _context12.stop();
            }
          }
        }, _callee12, this);
      }));

      function postRequests(_x10, _x11) {
        return _postRequests.apply(this, arguments);
      }

      return postRequests;
    }()
  }, {
    key: "mutation",
    value: function () {
      var _mutation = _asyncToGenerator( /*#__PURE__*/_regenerator["default"].mark(function _callee14(ql) {
        var _this3 = this;

        var variables,
            parentSpan,
            _args14 = arguments;
        return _regenerator["default"].wrap(function _callee14$(_context14) {
          while (1) {
            switch (_context14.prev = _context14.next) {
              case 0:
                variables = _args14.length > 1 && _args14[1] !== undefined ? _args14[1] : {};
                parentSpan = _args14.length > 2 ? _args14[2] : undefined;
                return _context14.abrupt("return", this.context.trace('queries.mutation', /*#__PURE__*/function () {
                  var _ref2 = _asyncToGenerator( /*#__PURE__*/_regenerator["default"].mark(function _callee13(span) {
                    return _regenerator["default"].wrap(function _callee13$(_context13) {
                      while (1) {
                        switch (_context13.prev = _context13.next) {
                          case 0:
                            span.setTag('params', {
                              mutation: ql,
                              variables: variables
                            });
                            return _context13.abrupt("return", _this3.graphqlMutation(ql, variables, span));

                          case 2:
                          case "end":
                            return _context13.stop();
                        }
                      }
                    }, _callee13);
                  }));

                  return function (_x14) {
                    return _ref2.apply(this, arguments);
                  };
                }(), parentSpan));

              case 3:
              case "end":
                return _context14.stop();
            }
          }
        }, _callee14, this);
      }));

      function mutation(_x13) {
        return _mutation.apply(this, arguments);
      }

      return mutation;
    }()
  }, {
    key: "query",
    value: function () {
      var _query = _asyncToGenerator( /*#__PURE__*/_regenerator["default"].mark(function _callee16(ql) {
        var _this4 = this;

        var variables,
            parentSpan,
            timeout,
            _args16 = arguments;
        return _regenerator["default"].wrap(function _callee16$(_context16) {
          while (1) {
            switch (_context16.prev = _context16.next) {
              case 0:
                variables = _args16.length > 1 && _args16[1] !== undefined ? _args16[1] : {};
                parentSpan = _args16.length > 2 ? _args16[2] : undefined;
                timeout = _args16.length > 3 ? _args16[3] : undefined;
                return _context16.abrupt("return", this.context.trace('queries.query', /*#__PURE__*/function () {
                  var _ref3 = _asyncToGenerator( /*#__PURE__*/_regenerator["default"].mark(function _callee15(span) {
                    return _regenerator["default"].wrap(function _callee15$(_context15) {
                      while (1) {
                        switch (_context15.prev = _context15.next) {
                          case 0:
                            span.setTag('params', {
                              query: ql,
                              variables: variables
                            });
                            return _context15.abrupt("return", _this4.graphqlQuery(ql, variables, span, timeout));

                          case 2:
                          case "end":
                            return _context15.stop();
                        }
                      }
                    }, _callee15);
                  }));

                  return function (_x16) {
                    return _ref3.apply(this, arguments);
                  };
                }(), parentSpan));

              case 4:
              case "end":
                return _context16.stop();
            }
          }
        }, _callee16, this);
      }));

      function query(_x15) {
        return _query.apply(this, arguments);
      }

      return query;
    }()
  }, {
    key: "graphqlMutation",
    value: function () {
      var _graphqlMutation = _asyncToGenerator( /*#__PURE__*/_regenerator["default"].mark(function _callee17(ql) {
        var variables,
            span,
            mutation,
            _args17 = arguments;
        return _regenerator["default"].wrap(function _callee17$(_context17) {
          while (1) {
            switch (_context17.prev = _context17.next) {
              case 0:
                variables = _args17.length > 1 && _args17[1] !== undefined ? _args17[1] : {};
                span = _args17.length > 2 ? _args17[2] : undefined;
                mutation = (0, _graphqlTag["default"])([ql]);
                return _context17.abrupt("return", this.graphQl(function (client) {
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
                return _context17.stop();
            }
          }
        }, _callee17, this);
      }));

      function graphqlMutation(_x17) {
        return _graphqlMutation.apply(this, arguments);
      }

      return graphqlMutation;
    }()
  }, {
    key: "graphqlQuery",
    value: function () {
      var _graphqlQuery = _asyncToGenerator( /*#__PURE__*/_regenerator["default"].mark(function _callee21(ql) {
        var _this5 = this;

        var variables,
            span,
            timeout,
            query,
            nextTimeout,
            startTime,
            forceTerminateExtraTimeout,
            forceTerminateTimeout,
            _ret,
            resolvedError,
            _args21 = arguments;

        return _regenerator["default"].wrap(function _callee21$(_context21) {
          while (1) {
            switch (_context21.prev = _context21.next) {
              case 0:
                variables = _args21.length > 1 && _args21[1] !== undefined ? _args21[1] : {};
                span = _args21.length > 2 ? _args21[2] : undefined;
                timeout = _args21.length > 3 ? _args21[3] : undefined;
                query = (0, _graphqlTag["default"])([ql]);
                nextTimeout = 100;
                startTime = Date.now();
                forceTerminateExtraTimeout = 5000;
                forceTerminateTimeout = timeout || this.config.waitForTimeout();

              case 8:
                if (!true) {
                  _context21.next = 28;
                  break;
                }

                _context21.prev = 9;
                return _context21.delegateYield( /*#__PURE__*/_regenerator["default"].mark(function _callee19() {
                  var client, context;
                  return _regenerator["default"].wrap(function _callee19$(_context19) {
                    while (1) {
                      switch (_context19.prev = _context19.next) {
                        case 0:
                          _context19.next = 2;
                          return _this5.graphqlClientRequired(span);

                        case 2:
                          client = _context19.sent;
                          context = {
                            traceSpan: span,
                            fetchOptions: {
                              queryTimeout: Math.min(forceTerminateTimeout + forceTerminateExtraTimeout, MAX_TIMEOUT)
                            }
                          };
                          _context19.next = 6;
                          return new Promise(function (resolve, reject) {
                            _asyncToGenerator( /*#__PURE__*/_regenerator["default"].mark(function _callee18() {
                              var isActual, doResolve, doReject;
                              return _regenerator["default"].wrap(function _callee18$(_context18) {
                                while (1) {
                                  switch (_context18.prev = _context18.next) {
                                    case 0:
                                      isActual = true;

                                      doResolve = function doResolve(result) {
                                        if (isActual) {
                                          isActual = false;
                                          resolve(result);
                                        }
                                      };

                                      doReject = function doReject(error) {
                                        if (isActual) {
                                          isActual = false;
                                          reject(error);
                                        }
                                      };

                                      _this5.registerQueryReject(doReject);

                                      _context18.prev = 4;
                                      _context18.t0 = doResolve;
                                      _context18.next = 8;
                                      return client.query({
                                        query: query,
                                        variables: variables,
                                        context: context
                                      });

                                    case 8:
                                      _context18.t1 = _context18.sent;
                                      (0, _context18.t0)(_context18.t1);
                                      _context18.next = 15;
                                      break;

                                    case 12:
                                      _context18.prev = 12;
                                      _context18.t2 = _context18["catch"](4);
                                      doReject(_context18.t2);

                                    case 15:
                                      _context18.prev = 15;

                                      _this5.unregisterQueryReject(doReject);

                                      return _context18.finish(15);

                                    case 18:
                                    case "end":
                                      return _context18.stop();
                                  }
                                }
                              }, _callee18, null, [[4, 12, 15, 18]]);
                            }))();
                          });

                        case 6:
                          _context19.t0 = _context19.sent;
                          return _context19.abrupt("return", {
                            v: _context19.t0
                          });

                        case 8:
                        case "end":
                          return _context19.stop();
                      }
                    }
                  }, _callee19);
                })(), "t0", 11);

              case 11:
                _ret = _context21.t0;

                if (!(_typeof(_ret) === "object")) {
                  _context21.next = 14;
                  break;
                }

                return _context21.abrupt("return", _ret.v);

              case 14:
                _context21.next = 26;
                break;

              case 16:
                _context21.prev = 16;
                _context21.t1 = _context21["catch"](9);
                _context21.next = 20;
                return this.resolveGraphQLError(_context21.t1);

              case 20:
                resolvedError = _context21.sent;

                if (!(TONQueriesModule.isNetworkError(resolvedError) && !this.config.isNetworkTimeoutExpiredSince(startTime))) {
                  _context21.next = 25;
                  break;
                }

                return _context21.delegateYield( /*#__PURE__*/_regenerator["default"].mark(function _callee20() {
                  var retryDelayTimeout;
                  return _regenerator["default"].wrap(function _callee20$(_context20) {
                    while (1) {
                      switch (_context20.prev = _context20.next) {
                        case 0:
                          _this5.config.log(resolvedError);

                          retryDelayTimeout = nextTimeout;
                          _context20.next = 4;
                          return new Promise(function (resolve) {
                            return setTimeout(resolve, retryDelayTimeout);
                          });

                        case 4:
                          if (nextTimeout < 3200) {
                            nextTimeout *= 2;
                          }

                          if (forceTerminateExtraTimeout < _this5.config.waitForTimeout()) {
                            forceTerminateExtraTimeout += 5000;
                          }

                        case 6:
                        case "end":
                          return _context20.stop();
                      }
                    }
                  }, _callee20);
                })(), "t2", 23);

              case 23:
                _context21.next = 26;
                break;

              case 25:
                throw resolvedError;

              case 26:
                _context21.next = 8;
                break;

              case 28:
              case "end":
                return _context21.stop();
            }
          }
        }, _callee21, this, [[9, 16]]);
      }));

      function graphqlQuery(_x18) {
        return _graphqlQuery.apply(this, arguments);
      }

      return graphqlQuery;
    }()
  }, {
    key: "resolveGraphQLError",
    value: function () {
      var _resolveGraphQLError = _asyncToGenerator( /*#__PURE__*/_regenerator["default"].mark(function _callee22(error) {
        var gqlErr, clientErr, gqlExc, errors;
        return _regenerator["default"].wrap(function _callee22$(_context22) {
          while (1) {
            switch (_context22.prev = _context22.next) {
              case 0:
                gqlErr = error.graphQLErrors && error.graphQLErrors[0];

                if (!gqlErr) {
                  _context22.next = 8;
                  break;
                }

                clientErr = new Error(gqlErr.message);
                gqlExc = gqlErr.extensions && gqlErr.extensions.exception || {};
                clientErr.number = gqlExc.code || 0;
                clientErr.code = gqlExc.code || 0;
                clientErr.source = gqlExc.source || 'client';
                return _context22.abrupt("return", clientErr);

              case 8:
                errors = error && error.networkError && error.networkError.result && error.networkError.result.errors;

                if (!errors) {
                  _context22.next = 16;
                  break;
                }

                _context22.t0 = _TONClientError.TONClientError;
                _context22.t1 = errors;
                _context22.next = 14;
                return this.completeErrorData();

              case 14:
                _context22.t2 = _context22.sent;
                return _context22.abrupt("return", _context22.t0.queryFailed.call(_context22.t0, _context22.t1, _context22.t2));

              case 16:
                return _context22.abrupt("return", error);

              case 17:
              case "end":
                return _context22.stop();
            }
          }
        }, _callee22, this);
      }));

      function resolveGraphQLError(_x19) {
        return _resolveGraphQLError.apply(this, arguments);
      }

      return resolveGraphQLError;
    }()
  }, {
    key: "graphQl",
    value: function () {
      var _graphQl = _asyncToGenerator( /*#__PURE__*/_regenerator["default"].mark(function _callee23(request, span) {
        var client;
        return _regenerator["default"].wrap(function _callee23$(_context23) {
          while (1) {
            switch (_context23.prev = _context23.next) {
              case 0:
                _context23.next = 2;
                return this.graphqlClientRequired(span);

              case 2:
                client = _context23.sent;
                _context23.prev = 3;
                _context23.next = 6;
                return request(client);

              case 6:
                return _context23.abrupt("return", _context23.sent);

              case 9:
                _context23.prev = 9;
                _context23.t0 = _context23["catch"](3);
                _context23.next = 13;
                return this.resolveGraphQLError(_context23.t0);

              case 13:
                throw _context23.sent;

              case 14:
              case "end":
                return _context23.stop();
            }
          }
        }, _callee23, this, [[3, 9]]);
      }));

      function graphQl(_x20, _x21) {
        return _graphQl.apply(this, arguments);
      }

      return graphQl;
    }()
  }, {
    key: "graphqlClientRequired",
    value: function () {
      var _graphqlClientRequired = _asyncToGenerator( /*#__PURE__*/_regenerator["default"].mark(function _callee24(parentSpan) {
        var _this6 = this;

        var creation;
        return _regenerator["default"].wrap(function _callee24$(_context24) {
          while (1) {
            switch (_context24.prev = _context24.next) {
              case 0:
                if (!this.graphqlClient) {
                  _context24.next = 2;
                  break;
                }

                return _context24.abrupt("return", this.graphqlClient);

              case 2:
                if (!this.graphqlClientCreation) {
                  _context24.next = 7;
                  break;
                }

                _context24.next = 5;
                return this.graphqlClientCreation.listen();

              case 5:
                _context24.next = 21;
                break;

              case 7:
                creation = new MulticastPromise();
                this.graphqlClientCreation = creation;
                _context24.prev = 9;
                _context24.next = 12;
                return this.context.trace('setup client', function (span) {
                  return _this6.createGraphqlClient(span);
                }, parentSpan);

              case 12:
                this.graphqlClientCreation = null;
                creation.resolve(this.graphqlClient);
                _context24.next = 21;
                break;

              case 16:
                _context24.prev = 16;
                _context24.t0 = _context24["catch"](9);
                this.graphqlClientCreation = null;
                creation.reject(_context24.t0);
                throw _context24.t0;

              case 21:
                return _context24.abrupt("return", this.graphqlClient);

              case 22:
              case "end":
                return _context24.stop();
            }
          }
        }, _callee24, this, [[9, 16]]);
      }));

      function graphqlClientRequired(_x22) {
        return _graphqlClientRequired.apply(this, arguments);
      }

      return graphqlClientRequired;
    }()
  }, {
    key: "createGraphqlClient",
    value: function () {
      var _createGraphqlClient = _asyncToGenerator( /*#__PURE__*/_regenerator["default"].mark(function _callee26(span) {
        var _this7 = this;

        var useHttp, clientConfig, subsOptions, subscriptionClient, guard, tracerLink, wrapLink, isSubscription, link;
        return _regenerator["default"].wrap(function _callee26$(_context26) {
          while (1) {
            switch (_context26.prev = _context26.next) {
              case 0:
                useHttp = !this.config.data.useWebSocketForQueries;
                _context26.next = 3;
                return this.getClientConfig();

              case 3:
                clientConfig = _context26.sent;
                subsOptions = this.config.tracer.inject(span, _opentracing.FORMAT_TEXT_MAP, {});
                subscriptionClient = new _subscriptionsTransportWs.SubscriptionClient(clientConfig.wsUrl, {
                  timeout: KEEP_ALIVE_TIMEOUT,
                  reconnect: true,
                  connectionParams: function connectionParams() {
                    return {
                      accessKey: _this7.config.data && _this7.config.data.accessKey,
                      headers: subsOptions
                    };
                  }
                }, clientConfig.WebSocket);
                subscriptionClient.onReconnected(function () {
                  console.log('[TONClient.queries]', 'WebSocket Reconnected');

                  _this7.rejectActiveQueries();
                });
                guard = {
                  detectingRedirection: false
                };
                subscriptionClient.onError(function () {
                  console.log('[TONClient.queries]', 'WebSocket Failed');

                  if (guard.detectingRedirection) {
                    return;
                  }

                  _asyncToGenerator( /*#__PURE__*/_regenerator["default"].mark(function _callee25() {
                    var newConfig, configIsChanged;
                    return _regenerator["default"].wrap(function _callee25$(_context25) {
                      while (1) {
                        switch (_context25.prev = _context25.next) {
                          case 0:
                            guard.detectingRedirection = true;
                            _context25.prev = 1;
                            _context25.next = 4;
                            return _this7.getClientConfig();

                          case 4:
                            newConfig = _context25.sent;
                            configIsChanged = newConfig.httpUrl !== clientConfig.httpUrl || newConfig.wsUrl !== clientConfig.wsUrl;

                            if (configIsChanged) {
                              console.log('[TONClient.queries]', 'Client config changed');
                              clientConfig = newConfig;
                              _this7.graphqlClientConfig = clientConfig;
                              subscriptionClient.url = newConfig.wsUrl;

                              if (_this7.wsLink) {
                                _this7.wsLink.url = newConfig.wsUrl;
                              }

                              if (_this7.httpLink) {
                                _this7.httpLink.uri = newConfig.httpUrl;
                              }
                            }

                            _context25.next = 12;
                            break;

                          case 9:
                            _context25.prev = 9;
                            _context25.t0 = _context25["catch"](1);
                            console.log('[TONClient.queries] redirection detector failed', _context25.t0);

                          case 12:
                            guard.detectingRedirection = false;

                          case 13:
                          case "end":
                            return _context25.stop();
                        }
                      }
                    }, _callee25, null, [[1, 9]]);
                  }))();
                });

                subscriptionClient.maxConnectTimeGenerator.duration = function () {
                  return subscriptionClient.maxConnectTimeGenerator.max;
                };

                _context26.next = 12;
                return (0, _apolloLinkContext.setContext)(function (_, req) {
                  var resolvedSpan = req && req.traceSpan || span;
                  req.headers = {};

                  _this7.config.tracer.inject(resolvedSpan, _opentracing.FORMAT_TEXT_MAP, req.headers);

                  var accessKey = _this7.config.data && _this7.config.data.accessKey;

                  if (accessKey) {
                    req.headers.accessKey = accessKey;
                  }

                  return {
                    headers: req.headers
                  };
                });

              case 12:
                tracerLink = _context26.sent;

                wrapLink = function wrapLink(link) {
                  return tracerLink.concat(link);
                };

                isSubscription = function isSubscription(_ref6) {
                  var query = _ref6.query;
                  var definition = (0, _apolloUtilities.getMainDefinition)(query);
                  return definition.kind === 'OperationDefinition' && definition.operation === 'subscription';
                };

                this.wsLink = new _apolloLinkWs.WebSocketLink(subscriptionClient);
                this.httpLink = useHttp ? new _apolloLinkHttp.HttpLink({
                  uri: clientConfig.httpUrl,
                  fetch: abortableFetch(clientConfig.fetch)
                }) : null;
                link = this.httpLink ? (0, _apolloLink.split)(isSubscription, wrapLink(this.wsLink), wrapLink(this.httpLink)) : wrapLink(this.wsLink);
                this.graphqlClientConfig = clientConfig;
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

              case 20:
              case "end":
                return _context26.stop();
            }
          }
        }, _callee26, this);
      }));

      function createGraphqlClient(_x23) {
        return _createGraphqlClient.apply(this, arguments);
      }

      return createGraphqlClient;
    }()
  }, {
    key: "close",
    value: function () {
      var _close = _asyncToGenerator( /*#__PURE__*/_regenerator["default"].mark(function _callee27() {
        var client;
        return _regenerator["default"].wrap(function _callee27$(_context27) {
          while (1) {
            switch (_context27.prev = _context27.next) {
              case 0:
                if (!this.graphqlClient) {
                  _context27.next = 6;
                  break;
                }

                client = this.graphqlClient;
                this.graphqlClient = null;
                client.stop();
                _context27.next = 6;
                return client.clearStore();

              case 6:
              case "end":
                return _context27.stop();
            }
          }
        }, _callee27, this);
      }));

      function close() {
        return _close.apply(this, arguments);
      }

      return close;
    }()
  }], [{
    key: "isNetworkError",
    value: function isNetworkError(error) {
      if (error.code === _TONClientError.TONErrorCode.QUERY_FORCIBLY_ABORTED) {
        return true;
      }

      var networkError = error.networkError;

      if (!networkError) {
        return false;
      }

      if ('errno' in networkError) {
        return true;
      }

      return !('response' in networkError || 'result' in networkError);
    }
  }]);

  return TONQueriesModule;
}(_TONModule2.TONModule);

exports["default"] = TONQueriesModule;

var TONQueriesModuleCollection = /*#__PURE__*/function () {
  function TONQueriesModuleCollection(module, collectionName, typeName) {
    _classCallCheck(this, TONQueriesModuleCollection);

    _defineProperty(this, "module", void 0);

    _defineProperty(this, "collectionName", void 0);

    _defineProperty(this, "typeName", void 0);

    this.module = module;
    this.collectionName = collectionName;
    this.typeName = typeName;
  }

  _createClass(TONQueriesModuleCollection, [{
    key: "query",
    value: function () {
      var _query2 = _asyncToGenerator( /*#__PURE__*/_regenerator["default"].mark(function _callee29() {
        var _this8 = this;

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
            _args29 = arguments;

        return _regenerator["default"].wrap(function _callee29$(_context29) {
          while (1) {
            switch (_context29.prev = _context29.next) {
              case 0:
                for (_len = _args29.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
                  args[_key] = _args29[_key];
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
                return _context29.abrupt("return", this.module.context.trace("".concat(this.collectionName, ".query"), /*#__PURE__*/function () {
                  var _ref7 = _asyncToGenerator( /*#__PURE__*/_regenerator["default"].mark(function _callee28(span) {
                    var useOperationId, c, t, ql, variables;
                    return _regenerator["default"].wrap(function _callee28$(_context28) {
                      while (1) {
                        switch (_context28.prev = _context28.next) {
                          case 0:
                            span.setTag('params', {
                              filter: filter,
                              result: result,
                              orderBy: orderBy,
                              limit: limit,
                              timeout: timeout,
                              operationId: operationId
                            });
                            _context28.t0 = operationId;

                            if (!_context28.t0) {
                              _context28.next = 6;
                              break;
                            }

                            _context28.next = 5;
                            return _this8.module.getServerInfo(span);

                          case 5:
                            _context28.t0 = _context28.sent.supportsOperationId;

                          case 6:
                            useOperationId = _context28.t0;
                            c = _this8.collectionName;
                            t = _this8.typeName;
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

                            _context28.next = 15;
                            return _this8.module.graphqlQuery(ql, variables, span, timeout);

                          case 15:
                            _context28.t1 = c;
                            return _context28.abrupt("return", _context28.sent.data[_context28.t1]);

                          case 17:
                          case "end":
                            return _context28.stop();
                        }
                      }
                    }, _callee28);
                  }));

                  return function (_x24) {
                    return _ref7.apply(this, arguments);
                  };
                }(), parentSpan));

              case 3:
              case "end":
                return _context29.stop();
            }
          }
        }, _callee29, this);
      }));

      function query() {
        return _query2.apply(this, arguments);
      }

      return query;
    }()
  }, {
    key: "aggregate",
    value: function () {
      var _aggregate = _asyncToGenerator( /*#__PURE__*/_regenerator["default"].mark(function _callee31(params) {
        var _this9 = this;

        return _regenerator["default"].wrap(function _callee31$(_context31) {
          while (1) {
            switch (_context31.prev = _context31.next) {
              case 0:
                return _context31.abrupt("return", this.module.context.trace("".concat(this.collectionName, ".aggregate"), /*#__PURE__*/function () {
                  var _ref8 = _asyncToGenerator( /*#__PURE__*/_regenerator["default"].mark(function _callee30(span) {
                    var t, q, ql, variables;
                    return _regenerator["default"].wrap(function _callee30$(_context30) {
                      while (1) {
                        switch (_context30.prev = _context30.next) {
                          case 0:
                            span.setTag('params', {
                              filter: params.filter,
                              fields: params.fields
                            });
                            _context30.next = 3;
                            return _this9.module.getServerInfo(span);

                          case 3:
                            if (_context30.sent.supportsAggregations) {
                              _context30.next = 9;
                              break;
                            }

                            _context30.t0 = _TONClientError.TONClientError;
                            _context30.next = 7;
                            return _this9.module.completeErrorData();

                          case 7:
                            _context30.t1 = _context30.sent;
                            throw _context30.t0.serverDoesntSupportAggregations.call(_context30.t0, _context30.t1);

                          case 9:
                            t = _this9.typeName;
                            q = _this9.typeName.endsWith('s') ? "aggregate".concat(t) : "aggregate".concat(t, "s");
                            ql = "\n            query ".concat(q, "(\n                $filter: ").concat(t, "Filter,\n                $fields: [FieldAggregation] \n             ) {\n                ").concat(q, "(\n                    filter: $filter, \n                    fields: $fields \n                )\n            }");
                            variables = {
                              filter: params.filter,
                              fields: params.fields
                            };
                            _context30.next = 15;
                            return _this9.module.graphqlQuery(ql, variables, span);

                          case 15:
                            _context30.t2 = q;
                            return _context30.abrupt("return", _context30.sent.data[_context30.t2]);

                          case 17:
                          case "end":
                            return _context30.stop();
                        }
                      }
                    }, _callee30);
                  }));

                  return function (_x26) {
                    return _ref8.apply(this, arguments);
                  };
                }(), params.parentSpan));

              case 1:
              case "end":
                return _context31.stop();
            }
          }
        }, _callee31, this);
      }));

      function aggregate(_x25) {
        return _aggregate.apply(this, arguments);
      }

      return aggregate;
    }()
  }, {
    key: "subscribe",
    value: function subscribe() {
      var _this10 = this;

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

      _asyncToGenerator( /*#__PURE__*/_regenerator["default"].mark(function _callee32() {
        var client, observable;
        return _regenerator["default"].wrap(function _callee32$(_context32) {
          while (1) {
            switch (_context32.prev = _context32.next) {
              case 0:
                _context32.prev = 0;
                _context32.next = 3;
                return _this10.module.graphqlClientRequired(span);

              case 3:
                client = _context32.sent;
                observable = client.subscribe({
                  query: query,
                  variables: {
                    filter: filter
                  }
                });
                subscription = observable.subscribe(function (message) {
                  onDocEvent('insert/update', message.data[_this10.collectionName]);
                });
                _context32.next = 12;
                break;

              case 8:
                _context32.prev = 8;
                _context32.t0 = _context32["catch"](0);
                span.log({
                  event: 'failed',
                  payload: _context32.t0
                });

                if (onError) {
                  onError(_context32.t0);
                } else {
                  console.log('TON Client subscription error', _context32.t0);
                }

              case 12:
              case "end":
                return _context32.stop();
            }
          }
        }, _callee32, null, [[0, 8]]);
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
      var _waitFor = _asyncToGenerator( /*#__PURE__*/_regenerator["default"].mark(function _callee33() {
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
            _args33 = arguments;

        return _regenerator["default"].wrap(function _callee33$(_context33) {
          while (1) {
            switch (_context33.prev = _context33.next) {
              case 0:
                for (_len3 = _args33.length, args = new Array(_len3), _key3 = 0; _key3 < _len3; _key3++) {
                  args[_key3] = _args33[_key3];
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
                _context33.next = 5;
                return this.query({
                  filter: filter,
                  result: result,
                  timeout: timeout,
                  parentSpan: parentSpan,
                  operationId: operationId
                });

              case 5:
                docs = _context33.sent;

                if (!(docs.length > 0)) {
                  _context33.next = 8;
                  break;
                }

                return _context33.abrupt("return", docs[0]);

              case 8:
                _context33.t0 = _TONClientError.TONClientError;
                _context33.next = 11;
                return this.module.completeErrorData({
                  collection: this.collectionName
                });

              case 11:
                _context33.t1 = _context33.sent;
                throw _context33.t0.waitForTimeout.call(_context33.t0, _context33.t1);

              case 13:
              case "end":
                return _context33.stop();
            }
          }
        }, _callee33, this);
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy9tb2R1bGVzL1RPTlF1ZXJpZXNNb2R1bGUuanMiXSwibmFtZXMiOlsiS0VFUF9BTElWRV9USU1FT1VUIiwiTUFYX1RJTUVPVVQiLCJyZXNvbHZlUGFyYW1zIiwiYXJncyIsInJlcXVpcmVkUGFyYW1OYW1lIiwicmVzb2x2ZUFyZ3MiLCJsZW5ndGgiLCJNdWx0aWNhc3RQcm9taXNlIiwibGlzdGVuZXJzIiwib25Db21wbGV0ZSIsImxpc3RlbmVyIiwicmVzb2x2ZSIsInJlamVjdCIsInB1c2giLCJQcm9taXNlIiwidmFsdWUiLCJjb21wbGV0ZSIsImVycm9yIiwiY29tcGxldGVMaXN0ZW5lciIsImZvckVhY2giLCJ2ZXJzaW9uVG9OdW1iZXIiLCJzIiwicGFydHMiLCJzcGxpdCIsIm1hcCIsIngiLCJOdW1iZXIiLCJzbGljZSIsInJlc29sdmVTZXJ2ZXJJbmZvIiwidmVyc2lvblN0cmluZyIsInZlcnNpb24iLCJzdXBwb3J0c09wZXJhdGlvbklkIiwic3VwcG9ydHNBZ2dyZWdhdGlvbnMiLCJzdXBwb3J0c1RpbWUiLCJ0aW1lRGVsdGEiLCJhYm9ydGFibGVGZXRjaCIsImZldGNoIiwiaW5wdXQiLCJvcHRpb25zIiwicXVlcnlUaW1lb3V0IiwiZmV0Y2hPcHRpb25zIiwiY29udHJvbGxlciIsImdsb2JhbCIsIkFib3J0Q29udHJvbGxlciIsInNpZ25hbCIsInNldFRpbWVvdXQiLCJUT05DbGllbnRFcnJvciIsInF1ZXJ5Rm9yY2libHlBYm9ydGVkIiwiZW1wdHlUT05FcnJvckRhdGEiLCJhYm9ydCIsInRoZW4iLCJUT05RdWVyaWVzTW9kdWxlIiwiY29udGV4dCIsImdyYXBocWxDbGllbnQiLCJncmFwaHFsQ2xpZW50Q3JlYXRpb24iLCJncmFwaHFsQ2xpZW50Q29uZmlnIiwid3NMaW5rIiwiaHR0cExpbmsiLCJvdmVycmlkZVdzVXJsIiwib3BlcmF0aW9uSWRQcmVmaXgiLCJEYXRlIiwibm93IiwidG9TdHJpbmciLCJpIiwicmFuZG9tUGFydCIsIk1hdGgiLCJyb3VuZCIsInJhbmRvbSIsIm9wZXJhdGlvbklkU3VmZml4Iiwic2VydmVySW5mbyIsImFjdGl2ZVF1ZXJpZXNSZWplY3RzIiwiaW5kZXgiLCJpbmRleE9mIiwic3BsaWNlIiwicmVqZWN0cyIsImVyciIsImNvbmZpZyIsImdldE1vZHVsZSIsIlRPTkNvbmZpZ01vZHVsZSIsInRyYW5zYWN0aW9ucyIsIlRPTlF1ZXJpZXNNb2R1bGVDb2xsZWN0aW9uIiwibWVzc2FnZXMiLCJibG9ja3MiLCJhY2NvdW50cyIsImJsb2Nrc19zaWduYXR1cmVzIiwiaHR0cFVybCIsInNvdXJjZVVybCIsInJlc3BvbnNlIiwidGV4dCIsInJlc3BvbnNlVGV4dCIsInJlc3BvbnNlSnNvbiIsIkpTT04iLCJwYXJzZSIsImRhdGEiLCJpbmZvIiwicmVkaXJlY3RlZCIsInVybCIsInNvdXJjZUxvY2F0aW9uIiwiVVJMUGFydHMiLCJmaXhRdWVyeSIsInRvTG93ZXJDYXNlIiwicmVzcG9uc2VMb2NhdGlvbiIsImdldENvbmZpZ0ZvclNlcnZlciIsInNlcnZlciIsImh0dHBQYXJ0cyIsImZpeFByb3RvY29sIiwiZml4UGF0aCIsImh0dHAiLCJ3cyIsIndzVXJsIiwiY2xpZW50UGxhdGZvcm0iLCJXZWJTb2NrZXQiLCJUT05DbGllbnQiLCJFcnJvciIsInNlcnZlcnMiLCJjbGllbnRDb25maWciLCJkZXRlY3RSZWRpcmVjdCIsIl8iLCJjb25zb2xlIiwibG9nIiwibWVzc2FnZSIsImh0dHBfdXJsIiwid3NfdXJsIiwic3BhbiIsImdyYXBocWxDbGllbnRSZXF1aXJlZCIsImdldFNlcnZlckluZm8iLCJzdGFydCIsImVuZCIsImpzb24iLCJyZXNwb25zZURhdGEiLCJzZXJ2ZXJUaW1lIiwidGltZSIsInNlcnZlclRpbWVEZWx0YSIsIm9wZXJhdGlvbklkcyIsImdyYXBocWxNdXRhdGlvbiIsInBhcmVudFNwYW4iLCJxdWVyeSIsInVuZGVmaW5lZCIsInJlc3VsdCIsImdldEFjY291bnRzQ291bnQiLCJnZXRUcmFuc2FjdGlvbnNDb3VudCIsImdldEFjY291bnRzVG90YWxCYWxhbmNlIiwicmVxdWVzdHMiLCJ0cmFjZSIsInFsIiwidmFyaWFibGVzIiwic2V0VGFnIiwibXV0YXRpb24iLCJ0aW1lb3V0IiwiZ3JhcGhxbFF1ZXJ5IiwiZ3JhcGhRbCIsImNsaWVudCIsIm11dGF0ZSIsInRyYWNlU3BhbiIsIm5leHRUaW1lb3V0Iiwic3RhcnRUaW1lIiwiZm9yY2VUZXJtaW5hdGVFeHRyYVRpbWVvdXQiLCJmb3JjZVRlcm1pbmF0ZVRpbWVvdXQiLCJ3YWl0Rm9yVGltZW91dCIsIm1pbiIsImlzQWN0dWFsIiwiZG9SZXNvbHZlIiwiZG9SZWplY3QiLCJyZWdpc3RlclF1ZXJ5UmVqZWN0IiwidW5yZWdpc3RlclF1ZXJ5UmVqZWN0IiwicmVzb2x2ZUdyYXBoUUxFcnJvciIsInJlc29sdmVkRXJyb3IiLCJpc05ldHdvcmtFcnJvciIsImlzTmV0d29ya1RpbWVvdXRFeHBpcmVkU2luY2UiLCJyZXRyeURlbGF5VGltZW91dCIsImdxbEVyciIsImdyYXBoUUxFcnJvcnMiLCJjbGllbnRFcnIiLCJncWxFeGMiLCJleHRlbnNpb25zIiwiZXhjZXB0aW9uIiwibnVtYmVyIiwiY29kZSIsInNvdXJjZSIsImVycm9ycyIsIm5ldHdvcmtFcnJvciIsImNvbXBsZXRlRXJyb3JEYXRhIiwicXVlcnlGYWlsZWQiLCJyZXF1ZXN0IiwibGlzdGVuIiwiY3JlYXRpb24iLCJjcmVhdGVHcmFwaHFsQ2xpZW50IiwidXNlSHR0cCIsInVzZVdlYlNvY2tldEZvclF1ZXJpZXMiLCJnZXRDbGllbnRDb25maWciLCJzdWJzT3B0aW9ucyIsInRyYWNlciIsImluamVjdCIsIkZPUk1BVF9URVhUX01BUCIsInN1YnNjcmlwdGlvbkNsaWVudCIsIlN1YnNjcmlwdGlvbkNsaWVudCIsInJlY29ubmVjdCIsImNvbm5lY3Rpb25QYXJhbXMiLCJhY2Nlc3NLZXkiLCJoZWFkZXJzIiwib25SZWNvbm5lY3RlZCIsInJlamVjdEFjdGl2ZVF1ZXJpZXMiLCJndWFyZCIsImRldGVjdGluZ1JlZGlyZWN0aW9uIiwib25FcnJvciIsIm5ld0NvbmZpZyIsImNvbmZpZ0lzQ2hhbmdlZCIsInVyaSIsIm1heENvbm5lY3RUaW1lR2VuZXJhdG9yIiwiZHVyYXRpb24iLCJtYXgiLCJyZXEiLCJyZXNvbHZlZFNwYW4iLCJ0cmFjZXJMaW5rIiwid3JhcExpbmsiLCJsaW5rIiwiY29uY2F0IiwiaXNTdWJzY3JpcHRpb24iLCJkZWZpbml0aW9uIiwia2luZCIsIm9wZXJhdGlvbiIsIldlYlNvY2tldExpbmsiLCJIdHRwTGluayIsIkFwb2xsb0NsaWVudCIsImNhY2hlIiwiSW5NZW1vcnlDYWNoZSIsImRlZmF1bHRPcHRpb25zIiwid2F0Y2hRdWVyeSIsImZldGNoUG9saWN5Iiwic3RvcCIsImNsZWFyU3RvcmUiLCJUT05FcnJvckNvZGUiLCJRVUVSWV9GT1JDSUJMWV9BQk9SVEVEIiwiVE9OTW9kdWxlIiwibW9kdWxlIiwiY29sbGVjdGlvbk5hbWUiLCJ0eXBlTmFtZSIsImZpbHRlciIsIm9yZGVyQnkiLCJsaW1pdCIsIm9wZXJhdGlvbklkIiwidXNlT3BlcmF0aW9uSWQiLCJjIiwidCIsInBhcmFtcyIsImZpZWxkcyIsInNlcnZlckRvZXNudFN1cHBvcnRBZ2dyZWdhdGlvbnMiLCJxIiwiZW5kc1dpdGgiLCJvbkRvY0V2ZW50Iiwic3RhcnRTcGFuIiwiVGFncyIsIlNQQU5fS0lORCIsInN1YnNjcmlwdGlvbiIsIm9ic2VydmFibGUiLCJzdWJzY3JpYmUiLCJldmVudCIsInBheWxvYWQiLCJ1bnN1YnNjcmliZSIsImZpbmlzaCIsInBhcmFtc1RpbWVvdXQiLCJkb2NzIiwiY29sbGVjdGlvbiIsIm1vZHVsZU5hbWUiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7OztBQU1BOztBQUNBOztBQUNBOztBQUNBOztBQUNBOztBQUNBOztBQUNBOztBQUNBOztBQUNBOztBQUNBOztBQVlBOztBQUNBOztBQUVBOztBQUNBOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FB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LE9BQU8sRUFBUEEsT0FIMEI7QUFJMUJiLGtCQUFBQSxVQUFVLEVBQVZBLFVBSjBCO0FBSzFCeUcsa0JBQUFBLFdBQVcsRUFBWEE7QUFMMEIsaUJBQVgsQzs7O0FBQWJxQixnQkFBQUEsSTs7c0JBT0ZBLElBQUksQ0FBQy9QLE1BQUwsR0FBYyxDOzs7OzttREFDUCtQLElBQUksQ0FBQyxDQUFELEM7OztnQ0FFVHZOLDhCOzt1QkFBb0MsS0FBSzRMLE1BQUwsQ0FBWXJELGlCQUFaLENBQThCO0FBQ3BFaUYsa0JBQUFBLFVBQVUsRUFBRSxLQUFLM0I7QUFEbUQsaUJBQTlCLEM7Ozs7b0NBQXJCN0UsYzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBTTdCM0csZ0JBQWdCLENBQUNvTixVQUFqQixHQUE4QixrQkFBOUIiLCJzb3VyY2VzQ29udGVudCI6WyIvKlxuICogQ29weXJpZ2h0IDIwMTgtMjAyMCBUT04gREVWIFNPTFVUSU9OUyBMVEQuXG4gKi9cblxuLy8gQGZsb3dcblxuaW1wb3J0IHsgSW5NZW1vcnlDYWNoZSB9IGZyb20gJ2Fwb2xsby1jYWNoZS1pbm1lbW9yeSc7XG5pbXBvcnQgeyBBcG9sbG9DbGllbnQgfSBmcm9tICdhcG9sbG8tY2xpZW50JztcbmltcG9ydCB7IEFwb2xsb0xpbmssIHNwbGl0IH0gZnJvbSAnYXBvbGxvLWxpbmsnO1xuaW1wb3J0IHsgSHR0cExpbmsgfSBmcm9tICdhcG9sbG8tbGluay1odHRwJztcbmltcG9ydCB7IFdlYlNvY2tldExpbmsgfSBmcm9tICdhcG9sbG8tbGluay13cyc7XG5pbXBvcnQgeyBnZXRNYWluRGVmaW5pdGlvbiB9IGZyb20gJ2Fwb2xsby11dGlsaXRpZXMnO1xuaW1wb3J0IGdxbCBmcm9tICdncmFwaHFsLXRhZyc7XG5pbXBvcnQgeyBTdWJzY3JpcHRpb25DbGllbnQgfSBmcm9tICdzdWJzY3JpcHRpb25zLXRyYW5zcG9ydC13cyc7XG5pbXBvcnQgeyBzZXRDb250ZXh0IH0gZnJvbSAnYXBvbGxvLWxpbmstY29udGV4dCc7XG5pbXBvcnQge1xuICAgIEZPUk1BVF9URVhUX01BUCwgVGFncywgU3BhbiwgU3BhbkNvbnRleHQsXG59IGZyb20gJ29wZW50cmFjaW5nJztcbmltcG9ydCB0eXBlIHtcbiAgICBUT05RdWVyaWVzLFxuICAgIFRPTlFDb2xsZWN0aW9uLFxuICAgIFN1YnNjcmlwdGlvbixcbiAgICBUT05RdWVyeVBhcmFtcyxcbiAgICBUT05TdWJzY3JpYmVQYXJhbXMsXG4gICAgVE9OV2FpdEZvclBhcmFtcyxcbiAgICBUT05RdWVyeUFnZ3JlZ2F0ZVBhcmFtcyxcbn0gZnJvbSAnLi4vLi4vdHlwZXMnO1xuaW1wb3J0IHsgVE9OQ2xpZW50IH0gZnJvbSAnLi4vVE9OQ2xpZW50JztcbmltcG9ydCB7IGVtcHR5VE9ORXJyb3JEYXRhLCBUT05DbGllbnRFcnJvciwgVE9ORXJyb3JDb2RlIH0gZnJvbSAnLi4vVE9OQ2xpZW50RXJyb3InO1xuaW1wb3J0IHR5cGUgeyBUT05Nb2R1bGVDb250ZXh0IH0gZnJvbSAnLi4vVE9OTW9kdWxlJztcbmltcG9ydCB7IFRPTk1vZHVsZSB9IGZyb20gJy4uL1RPTk1vZHVsZSc7XG5pbXBvcnQgVE9OQ29uZmlnTW9kdWxlLCB7IFVSTFBhcnRzIH0gZnJvbSAnLi9UT05Db25maWdNb2R1bGUnO1xuXG5cbmV4cG9ydCB0eXBlIFJlcXVlc3QgPSB7XG4gICAgaWQ6IHN0cmluZyxcbiAgICBib2R5OiBzdHJpbmcsXG59XG5cbmV4cG9ydCB0eXBlIFNlcnZlckluZm8gPSB7XG4gICAgdmVyc2lvbjogbnVtYmVyLFxuICAgIHN1cHBvcnRzT3BlcmF0aW9uSWQ6IGJvb2xlYW4sXG4gICAgc3VwcG9ydHNBZ2dyZWdhdGlvbnM6IGJvb2xlYW4sXG4gICAgc3VwcG9ydHNUaW1lOiBib29sZWFuLFxuICAgIHRpbWVEZWx0YTogP251bWJlcixcbn07XG5cblxudHlwZSBHcmFwaFFMQ2xpZW50Q29uZmlnID0ge1xuICAgIGh0dHBVcmw6IHN0cmluZyxcbiAgICB3c1VybDogc3RyaW5nLFxuICAgIGZldGNoOiBhbnksXG4gICAgV2ViU29ja2V0OiBhbnksXG59O1xuXG4vLyBLZWVwLWFsaXZlIHRpbWVvdXQgdXNlZCB0byBzdXBwb3J0IGtlZXAtYWxpdmUgY29ubmVjdGlvbiBjaGVja2luZzpcbi8vIC0gRXZlcnkgMSBtaW51dGUgc2VydmVyIHNlbmRzIEdRTF9DT05ORUNUSU9OX0tFRVBfQUxJVkUgbWVzc2FnZS5cbi8vIC0gRXZlcnkgMiBtaW51dGVzIGNsaWVudCBjaGVja3MgdGhhdCBHUUxfQ09OTkVDVElPTl9LRUVQX0FMSVZFIG1lc3NhZ2Ugd2FzIHJlY2VpdmVkXG4vLyAgIHdpdGhpbiBsYXN0IDIgbWludXRlcy5cbi8vIC0gSWYgY2xpZW50IGhhZG4ndCByZWNlaXZlZCBrZWVwIGFsaXZlIG1lc3NhZ2UgZHVyaW5nIGxhc3QgMiBtaW51dGVzXG4vLyAgIGl0IGNsb3NlcyBjb25uZWN0aW9uIGFuZCBnb2VzIHRvIHJlY29ubmVjdC5cbmNvbnN0IEtFRVBfQUxJVkVfVElNRU9VVCA9IDIgKiA2MDAwMDtcblxuZXhwb3J0IGNvbnN0IE1BWF9USU1FT1VUID0gMjE0NzQ4MzY0NztcblxuZnVuY3Rpb24gcmVzb2x2ZVBhcmFtczxUPihhcmdzOiBhbnlbXSwgcmVxdWlyZWRQYXJhbU5hbWU6IHN0cmluZywgcmVzb2x2ZUFyZ3M6ICgpID0+IFQpOiBUIHtcbiAgICByZXR1cm4gKGFyZ3MubGVuZ3RoID09PSAxKSAmJiAocmVxdWlyZWRQYXJhbU5hbWUgaW4gYXJnc1swXSkgPyBhcmdzWzBdIDogcmVzb2x2ZUFyZ3MoKTtcbn1cblxudHlwZSBNdWx0aWNhc3RMaXN0ZW5lcjxWYWx1ZT4gPSB7XG4gICAgcmVzb2x2ZTogKHZhbHVlOiBWYWx1ZSkgPT4gdm9pZDtcbiAgICByZWplY3Q6IChlcnJvcjogRXJyb3IpID0+IHZvaWQ7XG59O1xuXG5jbGFzcyBNdWx0aWNhc3RQcm9taXNlPFZhbHVlPiB7XG4gICAgbGlzdGVuZXJzOiBNdWx0aWNhc3RMaXN0ZW5lcjxWYWx1ZT5bXTtcbiAgICBvbkNvbXBsZXRlOiA/KCgpID0+IHZvaWQpO1xuXG4gICAgY29uc3RydWN0b3IoKSB7XG4gICAgICAgIHRoaXMubGlzdGVuZXJzID0gW107XG4gICAgICAgIHRoaXMub25Db21wbGV0ZSA9IG51bGw7XG4gICAgfVxuXG4gICAgbGlzdGVuKCk6IFByb21pc2U8VmFsdWU+IHtcbiAgICAgICAgY29uc3QgbGlzdGVuZXI6IE11bHRpY2FzdExpc3RlbmVyPFZhbHVlPiA9IHtcbiAgICAgICAgICAgIHJlc29sdmU6ICgpID0+IHtcbiAgICAgICAgICAgIH0sXG4gICAgICAgICAgICByZWplY3Q6ICgpID0+IHtcbiAgICAgICAgICAgIH0sXG4gICAgICAgIH07XG4gICAgICAgIHRoaXMubGlzdGVuZXJzLnB1c2gobGlzdGVuZXIpO1xuICAgICAgICByZXR1cm4gbmV3IFByb21pc2UoKHJlc29sdmUsIHJlamVjdCkgPT4ge1xuICAgICAgICAgICAgbGlzdGVuZXIucmVzb2x2ZSA9IHJlc29sdmU7XG4gICAgICAgICAgICBsaXN0ZW5lci5yZWplY3QgPSByZWplY3Q7XG4gICAgICAgIH0pO1xuICAgIH1cblxuICAgIHJlc29sdmUodmFsdWU6IFZhbHVlKSB7XG4gICAgICAgIHRoaXMuY29tcGxldGUobGlzdGVuZXIgPT4gbGlzdGVuZXIucmVzb2x2ZSh2YWx1ZSkpO1xuICAgIH1cblxuICAgIHJlamVjdChlcnJvcjogRXJyb3IpIHtcbiAgICAgICAgdGhpcy5jb21wbGV0ZShsaXN0ZW5lciA9PiBsaXN0ZW5lci5yZWplY3QoZXJyb3IpKTtcbiAgICB9XG5cbiAgICBjb21wbGV0ZShjb21wbGV0ZUxpc3RlbmVyOiAobGlzdGVuZXI6IE11bHRpY2FzdExpc3RlbmVyPFZhbHVlPikgPT4gdm9pZCkge1xuICAgICAgICBjb25zdCB7IGxpc3RlbmVycyB9ID0gdGhpcztcbiAgICAgICAgdGhpcy5saXN0ZW5lcnMgPSBbXTtcbiAgICAgICAgaWYgKHRoaXMub25Db21wbGV0ZSkge1xuICAgICAgICAgICAgdGhpcy5vbkNvbXBsZXRlKCk7XG4gICAgICAgIH1cbiAgICAgICAgbGlzdGVuZXJzLmZvckVhY2gobGlzdGVuZXIgPT4gY29tcGxldGVMaXN0ZW5lcihsaXN0ZW5lcikpO1xuICAgIH1cbn1cblxuZnVuY3Rpb24gdmVyc2lvblRvTnVtYmVyKHM6IHN0cmluZyk6IG51bWJlciB7XG4gICAgY29uc3QgcGFydHMgPSBgJHtzIHx8ICcnfWAuc3BsaXQoJy4nKVxuICAgICAgICAubWFwKHggPT4gTnVtYmVyKHgpKVxuICAgICAgICAuc2xpY2UoMCwgMyk7XG4gICAgd2hpbGUgKHBhcnRzLmxlbmd0aCA8IDMpIHtcbiAgICAgICAgcGFydHMucHVzaCgwKTtcbiAgICB9XG4gICAgcmV0dXJuIHBhcnRzWzBdICogMTAwMDAwMCArIHBhcnRzWzFdICogMTAwMCArIHBhcnRzWzJdO1xufVxuXG5mdW5jdGlvbiByZXNvbHZlU2VydmVySW5mbyh2ZXJzaW9uU3RyaW5nOiBzdHJpbmcgfCBudWxsIHwgdHlwZW9mIHVuZGVmaW5lZCk6IFNlcnZlckluZm8ge1xuICAgIGNvbnN0IHZlcnNpb24gPSB2ZXJzaW9uVG9OdW1iZXIodmVyc2lvblN0cmluZyB8fCAnMC4yNC40Jyk7XG4gICAgcmV0dXJuIHtcbiAgICAgICAgdmVyc2lvbixcbiAgICAgICAgc3VwcG9ydHNPcGVyYXRpb25JZDogdmVyc2lvbiA+IDI0MDA0LFxuICAgICAgICBzdXBwb3J0c0FnZ3JlZ2F0aW9uczogdmVyc2lvbiA+PSAyNTAwMCxcbiAgICAgICAgc3VwcG9ydHNUaW1lOiB2ZXJzaW9uID49IDI2MDAzLFxuICAgICAgICB0aW1lRGVsdGE6IG51bGwsXG4gICAgfTtcbn1cblxuZnVuY3Rpb24gYWJvcnRhYmxlRmV0Y2goZmV0Y2gpIHtcbiAgICByZXR1cm4gKGlucHV0LCBvcHRpb25zKSA9PiB7XG4gICAgICAgIHJldHVybiBuZXcgUHJvbWlzZSgocmVzb2x2ZSwgcmVqZWN0KSA9PiB7XG4gICAgICAgICAgICBjb25zdCBxdWVyeVRpbWVvdXQ6IG51bWJlciB8IHR5cGVvZiB1bmRlZmluZWQgPSBvcHRpb25zLnF1ZXJ5VGltZW91dDtcbiAgICAgICAgICAgIGxldCBmZXRjaE9wdGlvbnMgPSBvcHRpb25zO1xuICAgICAgICAgICAgaWYgKHF1ZXJ5VGltZW91dCkge1xuICAgICAgICAgICAgICAgIGNvbnN0IGNvbnRyb2xsZXIgPSBnbG9iYWwuQWJvcnRDb250cm9sbGVyID8gbmV3IGdsb2JhbC5BYm9ydENvbnRyb2xsZXIoKSA6IG51bGw7XG4gICAgICAgICAgICAgICAgaWYgKGNvbnRyb2xsZXIpIHtcbiAgICAgICAgICAgICAgICAgICAgZmV0Y2hPcHRpb25zID0ge1xuICAgICAgICAgICAgICAgICAgICAgICAgLi4ub3B0aW9ucyxcbiAgICAgICAgICAgICAgICAgICAgICAgIHNpZ25hbDogY29udHJvbGxlci5zaWduYWwsXG4gICAgICAgICAgICAgICAgICAgIH07XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIHNldFRpbWVvdXQoKCkgPT4ge1xuICAgICAgICAgICAgICAgICAgICByZWplY3QoVE9OQ2xpZW50RXJyb3IucXVlcnlGb3JjaWJseUFib3J0ZWQoZW1wdHlUT05FcnJvckRhdGEpKTtcbiAgICAgICAgICAgICAgICAgICAgaWYgKGNvbnRyb2xsZXIpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIGNvbnRyb2xsZXIuYWJvcnQoKTtcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIH0sIHF1ZXJ5VGltZW91dCk7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBmZXRjaChpbnB1dCwgZmV0Y2hPcHRpb25zKS50aGVuKHJlc29sdmUsIHJlamVjdCk7XG4gICAgICAgIH0pO1xuICAgIH07XG59XG5cblxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgVE9OUXVlcmllc01vZHVsZSBleHRlbmRzIFRPTk1vZHVsZSBpbXBsZW1lbnRzIFRPTlF1ZXJpZXMge1xuICAgIHRyYW5zYWN0aW9uczogVE9OUUNvbGxlY3Rpb247XG4gICAgbWVzc2FnZXM6IFRPTlFDb2xsZWN0aW9uO1xuICAgIGJsb2NrczogVE9OUUNvbGxlY3Rpb247XG4gICAgYWNjb3VudHM6IFRPTlFDb2xsZWN0aW9uO1xuICAgIGJsb2Nrc19zaWduYXR1cmVzOiBUT05RQ29sbGVjdGlvbjtcblxuICAgIGNvbmZpZzogVE9OQ29uZmlnTW9kdWxlO1xuXG4gICAgZ3JhcGhxbENsaWVudENyZWF0aW9uOiA/TXVsdGljYXN0UHJvbWlzZTxBcG9sbG9DbGllbnQ+O1xuICAgIGdyYXBocWxDbGllbnQ6ID9BcG9sbG9DbGllbnQ7XG4gICAgZ3JhcGhxbENsaWVudENvbmZpZzogP0dyYXBoUUxDbGllbnRDb25maWc7XG4gICAgd3NMaW5rOiA/V2ViU29ja2V0TGluaztcbiAgICBodHRwTGluazogP0h0dHBMaW5rO1xuXG4gICAgb3ZlcnJpZGVXc1VybDogP3N0cmluZztcbiAgICBvcGVyYXRpb25JZFByZWZpeDogc3RyaW5nO1xuICAgIG9wZXJhdGlvbklkU3VmZml4OiBudW1iZXI7XG4gICAgc2VydmVySW5mbzogU2VydmVySW5mbztcbiAgICBhY3RpdmVRdWVyaWVzUmVqZWN0czogKChhbnkpID0+IHZvaWQpW107XG5cbiAgICBjb25zdHJ1Y3Rvcihjb250ZXh0OiBUT05Nb2R1bGVDb250ZXh0KSB7XG4gICAgICAgIHN1cGVyKGNvbnRleHQpO1xuICAgICAgICB0aGlzLmdyYXBocWxDbGllbnQgPSBudWxsO1xuICAgICAgICB0aGlzLmdyYXBocWxDbGllbnRDcmVhdGlvbiA9IG51bGw7XG4gICAgICAgIHRoaXMuZ3JhcGhxbENsaWVudENvbmZpZyA9IG51bGw7XG4gICAgICAgIHRoaXMud3NMaW5rID0gbnVsbDtcbiAgICAgICAgdGhpcy5odHRwTGluayA9IG51bGw7XG4gICAgICAgIHRoaXMub3ZlcnJpZGVXc1VybCA9IG51bGw7XG4gICAgICAgIHRoaXMub3BlcmF0aW9uSWRQcmVmaXggPSAoRGF0ZS5ub3coKSAlIDYwMDAwKS50b1N0cmluZygxNik7XG4gICAgICAgIGZvciAobGV0IGkgPSAwOyBpIDwgMTA7IGkgKz0gMSkge1xuICAgICAgICAgICAgY29uc3QgcmFuZG9tUGFydCA9IE1hdGgucm91bmQoTWF0aC5yYW5kb20oKSAqIDI1NikudG9TdHJpbmcoMTYpO1xuICAgICAgICAgICAgdGhpcy5vcGVyYXRpb25JZFByZWZpeCA9IGAke3RoaXMub3BlcmF0aW9uSWRQcmVmaXh9JHtyYW5kb21QYXJ0fWA7XG4gICAgICAgIH1cbiAgICAgICAgdGhpcy5vcGVyYXRpb25JZFN1ZmZpeCA9IDE7XG4gICAgICAgIHRoaXMuc2VydmVySW5mbyA9IHJlc29sdmVTZXJ2ZXJJbmZvKCk7XG4gICAgICAgIHRoaXMuYWN0aXZlUXVlcmllc1JlamVjdHMgPSBbXTtcbiAgICB9XG5cbiAgICByZWdpc3RlclF1ZXJ5UmVqZWN0KHJlamVjdDogKGFueSkgPT4gdm9pZCkge1xuICAgICAgICB0aGlzLmFjdGl2ZVF1ZXJpZXNSZWplY3RzLnB1c2gocmVqZWN0KTtcbiAgICB9XG5cbiAgICB1bnJlZ2lzdGVyUXVlcnlSZWplY3QocmVqZWN0OiAoYW55KSA9PiB2b2lkKSB7XG4gICAgICAgIGNvbnN0IGluZGV4ID0gdGhpcy5hY3RpdmVRdWVyaWVzUmVqZWN0cy5pbmRleE9mKHJlamVjdCk7XG4gICAgICAgIGlmIChpbmRleCA+PSAwKSB7XG4gICAgICAgICAgICB0aGlzLmFjdGl2ZVF1ZXJpZXNSZWplY3RzLnNwbGljZShpbmRleCwgMSk7XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICByZWplY3RBY3RpdmVRdWVyaWVzKCkge1xuICAgICAgICBjb25zdCByZWplY3RzID0gdGhpcy5hY3RpdmVRdWVyaWVzUmVqZWN0cztcbiAgICAgICAgdGhpcy5hY3RpdmVRdWVyaWVzUmVqZWN0cyA9IFtdO1xuICAgICAgICBjb25zdCBlcnIgPSBUT05DbGllbnRFcnJvci5xdWVyeUZvcmNpYmx5QWJvcnRlZCh7fSk7XG4gICAgICAgIHJlamVjdHMuZm9yRWFjaCgocmVqZWN0KSA9PiB7XG4gICAgICAgICAgICB0cnkge1xuICAgICAgICAgICAgICAgIHJlamVjdChlcnIpO1xuICAgICAgICAgICAgfSBjYXRjaCB7XG4gICAgICAgICAgICB9XG4gICAgICAgIH0pXG4gICAgfVxuXG4gICAgYXN5bmMgc2V0dXAoKSB7XG4gICAgICAgIHRoaXMuY29uZmlnID0gdGhpcy5jb250ZXh0LmdldE1vZHVsZShUT05Db25maWdNb2R1bGUpO1xuICAgICAgICB0aGlzLnRyYW5zYWN0aW9ucyA9IG5ldyBUT05RdWVyaWVzTW9kdWxlQ29sbGVjdGlvbih0aGlzLCAndHJhbnNhY3Rpb25zJywgJ1RyYW5zYWN0aW9uJyk7XG4gICAgICAgIHRoaXMubWVzc2FnZXMgPSBuZXcgVE9OUXVlcmllc01vZHVsZUNvbGxlY3Rpb24odGhpcywgJ21lc3NhZ2VzJywgJ01lc3NhZ2UnKTtcbiAgICAgICAgdGhpcy5ibG9ja3MgPSBuZXcgVE9OUXVlcmllc01vZHVsZUNvbGxlY3Rpb24odGhpcywgJ2Jsb2NrcycsICdCbG9jaycpO1xuICAgICAgICB0aGlzLmFjY291bnRzID0gbmV3IFRPTlF1ZXJpZXNNb2R1bGVDb2xsZWN0aW9uKHRoaXMsICdhY2NvdW50cycsICdBY2NvdW50Jyk7XG4gICAgICAgIHRoaXMuYmxvY2tzX3NpZ25hdHVyZXMgPVxuICAgICAgICAgICAgbmV3IFRPTlF1ZXJpZXNNb2R1bGVDb2xsZWN0aW9uKHRoaXMsICdibG9ja3Nfc2lnbmF0dXJlcycsICdCbG9ja1NpZ25hdHVyZXMnKTtcbiAgICB9XG5cbiAgICBnZXRRdWVyeVVybCgpOiBzdHJpbmcge1xuICAgICAgICByZXR1cm4gdGhpcy5ncmFwaHFsQ2xpZW50Q29uZmlnPy5odHRwVXJsIHx8ICcnO1xuICAgIH1cblxuICAgIGFzeW5jIGRldGVjdFJlZGlyZWN0KGZldGNoOiBhbnksIHNvdXJjZVVybDogc3RyaW5nKTogUHJvbWlzZTxzdHJpbmc+IHtcbiAgICAgICAgY29uc3QgcmVzcG9uc2UgPSBhd2FpdCBmZXRjaChzb3VyY2VVcmwpO1xuICAgICAgICB0cnkge1xuICAgICAgICAgICAgY29uc3QgcmVzcG9uc2VUZXh0ID0gYXdhaXQgcmVzcG9uc2UudGV4dCgpO1xuICAgICAgICAgICAgY29uc3QgcmVzcG9uc2VKc29uID0gSlNPTi5wYXJzZShyZXNwb25zZVRleHQpO1xuICAgICAgICAgICAgdGhpcy5zZXJ2ZXJJbmZvID0gcmVzb2x2ZVNlcnZlckluZm8ocmVzcG9uc2VKc29uLmRhdGEuaW5mby52ZXJzaW9uKTtcbiAgICAgICAgfSBjYXRjaCB7XG4gICAgICAgIH1cbiAgICAgICAgaWYgKHJlc3BvbnNlLnJlZGlyZWN0ZWQgPT09IHRydWUpIHtcbiAgICAgICAgICAgIHJldHVybiByZXNwb25zZS51cmw7XG4gICAgICAgIH1cbiAgICAgICAgaWYgKHJlc3BvbnNlLnJlZGlyZWN0ZWQgPT09IGZhbHNlKSB7XG4gICAgICAgICAgICByZXR1cm4gJyc7XG4gICAgICAgIH1cbiAgICAgICAgY29uc3Qgc291cmNlTG9jYXRpb24gPSBVUkxQYXJ0cy5wYXJzZShzb3VyY2VVcmwpXG4gICAgICAgICAgICAuZml4UXVlcnkoKCkgPT4gJycpXG4gICAgICAgICAgICAudG9TdHJpbmcoKVxuICAgICAgICAgICAgLnRvTG93ZXJDYXNlKCk7XG4gICAgICAgIGNvbnN0IHJlc3BvbnNlTG9jYXRpb24gPSBVUkxQYXJ0cy5wYXJzZShyZXNwb25zZS51cmwpXG4gICAgICAgICAgICAuZml4UXVlcnkoKCkgPT4gJycpXG4gICAgICAgICAgICAudG9TdHJpbmcoKVxuICAgICAgICAgICAgLnRvTG93ZXJDYXNlKCk7XG4gICAgICAgIHJldHVybiByZXNwb25zZUxvY2F0aW9uICE9PSBzb3VyY2VMb2NhdGlvbiA/IHJlc3BvbnNlLnVybCA6ICcnO1xuICAgIH1cblxuICAgIGFzeW5jIGdldENsaWVudENvbmZpZygpOiBQcm9taXNlPEdyYXBoUUxDbGllbnRDb25maWc+IHtcbiAgICAgICAgY29uc3QgY29uZmlnID0gdGhpcy5jb25maWc7XG4gICAgICAgIGNvbnN0IGNsaWVudFBsYXRmb3JtID0gVE9OQ2xpZW50LmNsaWVudFBsYXRmb3JtO1xuICAgICAgICBpZiAoIWNsaWVudFBsYXRmb3JtKSB7XG4gICAgICAgICAgICB0aHJvdyBFcnJvcignVE9OIENsaWVudCBkb2VzIG5vdCBjb25maWd1cmVkJyk7XG4gICAgICAgIH1cbiAgICAgICAgY29uc3QgZmV0Y2ggPSBjbGllbnRQbGF0Zm9ybS5mZXRjaDtcblxuICAgICAgICBmdW5jdGlvbiBnZXRDb25maWdGb3JTZXJ2ZXIoc2VydmVyOiBzdHJpbmcpOiBHcmFwaFFMQ2xpZW50Q29uZmlnIHtcbiAgICAgICAgICAgIGNvbnN0IGh0dHBQYXJ0cyA9IFVSTFBhcnRzLnBhcnNlKHNlcnZlcilcbiAgICAgICAgICAgICAgICAuZml4UHJvdG9jb2woeCA9PiAoeCA9PT0gJ2h0dHA6Ly8nID8geCA6ICdodHRwczovLycpKVxuICAgICAgICAgICAgICAgIC5maXhQYXRoKHggPT4gYCR7eH0vZ3JhcGhxbGApO1xuICAgICAgICAgICAgY29uc3QgaHR0cCA9IGh0dHBQYXJ0cy50b1N0cmluZygpO1xuICAgICAgICAgICAgY29uc3Qgd3MgPSBodHRwUGFydHNcbiAgICAgICAgICAgICAgICAuZml4UHJvdG9jb2woeCA9PiAoeCA9PT0gJ2h0dHA6Ly8nID8gJ3dzOi8vJyA6ICd3c3M6Ly8nKSlcbiAgICAgICAgICAgICAgICAudG9TdHJpbmcoKTtcbiAgICAgICAgICAgIHJldHVybiB7XG4gICAgICAgICAgICAgICAgaHR0cFVybDogaHR0cCxcbiAgICAgICAgICAgICAgICB3c1VybDogd3MsXG4gICAgICAgICAgICAgICAgZmV0Y2g6IGNsaWVudFBsYXRmb3JtLmZldGNoLFxuICAgICAgICAgICAgICAgIFdlYlNvY2tldDogY2xpZW50UGxhdGZvcm0uV2ViU29ja2V0LFxuICAgICAgICAgICAgfTtcbiAgICAgICAgfVxuXG4gICAgICAgIGZvciAoY29uc3Qgc2VydmVyIG9mIGNvbmZpZy5kYXRhLnNlcnZlcnMpIHtcbiAgICAgICAgICAgIGNvbnN0IGNsaWVudENvbmZpZyA9IGdldENvbmZpZ0ZvclNlcnZlcihzZXJ2ZXIpO1xuICAgICAgICAgICAgdHJ5IHtcbiAgICAgICAgICAgICAgICAvLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgbm8tYXdhaXQtaW4tbG9vcFxuICAgICAgICAgICAgICAgIC8vIG5vaW5zcGVjdGlvbiBTcGVsbENoZWNraW5nSW5zcGVjdGlvblxuICAgICAgICAgICAgICAgIGNvbnN0IHJlZGlyZWN0ZWQgPSBhd2FpdCB0aGlzLmRldGVjdFJlZGlyZWN0KFxuICAgICAgICAgICAgICAgICAgICBmZXRjaCxcbiAgICAgICAgICAgICAgICAgICAgYCR7Y2xpZW50Q29uZmlnLmh0dHBVcmx9P3F1ZXJ5PSU3QmluZm8lN0J2ZXJzaW9uJTdEJTdEYCxcbiAgICAgICAgICAgICAgICApO1xuICAgICAgICAgICAgICAgIGlmIChyZWRpcmVjdGVkICE9PSAnJykge1xuICAgICAgICAgICAgICAgICAgICBjb25zdCBodHRwUGFydHMgPSBVUkxQYXJ0cy5wYXJzZShyZWRpcmVjdGVkKVxuICAgICAgICAgICAgICAgICAgICAgICAgLmZpeFF1ZXJ5KF8gPT4gJycpO1xuICAgICAgICAgICAgICAgICAgICBjbGllbnRDb25maWcuaHR0cFVybCA9IGh0dHBQYXJ0cy50b1N0cmluZygpO1xuICAgICAgICAgICAgICAgICAgICBjbGllbnRDb25maWcud3NVcmwgPSBodHRwUGFydHNcbiAgICAgICAgICAgICAgICAgICAgICAgIC5maXhQcm90b2NvbCh4ID0+ICh4ID09PSAnaHR0cDovLycgPyAnd3M6Ly8nIDogJ3dzczovLycpKVxuICAgICAgICAgICAgICAgICAgICAgICAgLnRvU3RyaW5nKCk7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIHJldHVybiBjbGllbnRDb25maWc7XG4gICAgICAgICAgICB9IGNhdGNoIChlcnJvcikge1xuICAgICAgICAgICAgICAgIGNvbnNvbGUubG9nKGBbZ2V0Q2xpZW50Q29uZmlnXSBmb3Igc2VydmVyIFwiJHtzZXJ2ZXJ9XCIgZmFpbGVkYCwge1xuICAgICAgICAgICAgICAgICAgICBtZXNzYWdlOiBlcnJvci5tZXNzYWdlIHx8IGVycm9yLnRvU3RyaW5nKCksXG4gICAgICAgICAgICAgICAgICAgIGRhdGE6IHtcbiAgICAgICAgICAgICAgICAgICAgICAgIGh0dHBfdXJsOiBjbGllbnRDb25maWcuaHR0cFVybCxcbiAgICAgICAgICAgICAgICAgICAgICAgIHdzX3VybDogY2xpZW50Q29uZmlnLndzVXJsLFxuICAgICAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICAgIHJldHVybiBnZXRDb25maWdGb3JTZXJ2ZXIoY29uZmlnLmRhdGEuc2VydmVyc1swXSk7XG4gICAgfVxuXG4gICAgYXN5bmMgZ2V0U2VydmVySW5mbyhzcGFuPzogU3BhbiB8IFNwYW5Db250ZXh0KTogUHJvbWlzZTxTZXJ2ZXJJbmZvPiB7XG4gICAgICAgIGF3YWl0IHRoaXMuZ3JhcGhxbENsaWVudFJlcXVpcmVkKHNwYW4pO1xuICAgICAgICByZXR1cm4gdGhpcy5zZXJ2ZXJJbmZvO1xuICAgIH1cblxuICAgIGFzeW5jIHNlcnZlclRpbWVEZWx0YShzcGFuPzogU3BhbiB8IFNwYW5Db250ZXh0KTogUHJvbWlzZTxudW1iZXI+IHtcbiAgICAgICAgY29uc3Qgc2VydmVySW5mbyA9IGF3YWl0IHRoaXMuZ2V0U2VydmVySW5mbyhzcGFuKTtcbiAgICAgICAgY29uc3QgY2xpZW50Q29uZmlnID0gdGhpcy5ncmFwaHFsQ2xpZW50Q29uZmlnO1xuICAgICAgICBpZiAoY2xpZW50Q29uZmlnICYmIHNlcnZlckluZm8uc3VwcG9ydHNUaW1lICYmIHNlcnZlckluZm8udGltZURlbHRhID09PSBudWxsKSB7XG4gICAgICAgICAgICB0cnkge1xuICAgICAgICAgICAgICAgIGNvbnN0IHN0YXJ0ID0gRGF0ZS5ub3coKTtcbiAgICAgICAgICAgICAgICAvLyBub2luc3BlY3Rpb24gU3BlbGxDaGVja2luZ0luc3BlY3Rpb25cbiAgICAgICAgICAgICAgICBjb25zdCByZXNwb25zZSA9IGF3YWl0IGNsaWVudENvbmZpZy5mZXRjaChgJHtjbGllbnRDb25maWcuaHR0cFVybH0/cXVlcnk9JTdCaW5mbyU3QnRpbWUlN0QlN0RgKTtcbiAgICAgICAgICAgICAgICBjb25zdCBlbmQgPSBEYXRlLm5vdygpO1xuICAgICAgICAgICAgICAgIGNvbnN0IHJlc3BvbnNlRGF0YSA9IGF3YWl0IHJlc3BvbnNlLmpzb24oKTtcbiAgICAgICAgICAgICAgICBjb25zdCBzZXJ2ZXJUaW1lID0gcmVzcG9uc2VEYXRhLmRhdGEuaW5mby50aW1lO1xuICAgICAgICAgICAgICAgIHNlcnZlckluZm8udGltZURlbHRhID0gTWF0aC5yb3VuZChzZXJ2ZXJUaW1lIC0gKHN0YXJ0ICsgKGVuZCAtIHN0YXJ0KSAvIDIpKTtcbiAgICAgICAgICAgIH0gY2F0Y2ggKGVycm9yKSB7XG4gICAgICAgICAgICAgICAgY29uc29sZS5sb2coJz4+PicsIGVycm9yKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgICByZXR1cm4gc2VydmVySW5mby50aW1lRGVsdGEgfHwgMDtcbiAgICB9XG5cbiAgICBhc3luYyBzZXJ2ZXJOb3coc3Bhbj86IFNwYW4gfCBTcGFuQ29udGV4dCk6IFByb21pc2U8bnVtYmVyPiB7XG4gICAgICAgIGNvbnN0IHRpbWVEZWx0YSA9IGF3YWl0IHRoaXMuc2VydmVyVGltZURlbHRhKHNwYW4pO1xuICAgICAgICByZXR1cm4gRGF0ZS5ub3coKSArIHRpbWVEZWx0YTtcbiAgICB9XG5cbiAgICBkcm9wU2VydmVyVGltZURlbHRhKCkge1xuICAgICAgICBpZiAodGhpcy5zZXJ2ZXJJbmZvKSB7XG4gICAgICAgICAgICB0aGlzLnNlcnZlckluZm8udGltZURlbHRhID0gbnVsbDtcbiAgICAgICAgfVxuICAgIH1cblxuICAgIGdlbmVyYXRlT3BlcmF0aW9uSWQoKTogc3RyaW5nIHtcbiAgICAgICAgdGhpcy5vcGVyYXRpb25JZFN1ZmZpeCArPSAxO1xuICAgICAgICByZXR1cm4gYCR7dGhpcy5vcGVyYXRpb25JZFByZWZpeH0ke3RoaXMub3BlcmF0aW9uSWRTdWZmaXgudG9TdHJpbmcoMTYpfWA7XG4gICAgfVxuXG4gICAgYXN5bmMgZmluaXNoT3BlcmF0aW9ucyhvcGVyYXRpb25JZHM6IHN0cmluZ1tdKSB7XG4gICAgICAgIGlmIChvcGVyYXRpb25JZHMubGVuZ3RoID09PSAwKSB7XG4gICAgICAgICAgICByZXR1cm47XG4gICAgICAgIH1cbiAgICAgICAgaWYgKCEoYXdhaXQgdGhpcy5nZXRTZXJ2ZXJJbmZvKCkpLnN1cHBvcnRzT3BlcmF0aW9uSWQpIHtcbiAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgfVxuICAgICAgICBhd2FpdCB0aGlzLmdyYXBocWxNdXRhdGlvbihgbXV0YXRpb24gZmluaXNoT3BlcmF0aW9ucygkb3BlcmF0aW9uSWRzOiBbU3RyaW5nXSkge1xuICAgICAgICAgICAgICAgIGZpbmlzaE9wZXJhdGlvbnMob3BlcmF0aW9uSWRzOiAkb3BlcmF0aW9uSWRzKVxuICAgICAgICAgICAgfWAsIHtcbiAgICAgICAgICAgIG9wZXJhdGlvbklkcyxcbiAgICAgICAgfSk7XG4gICAgfVxuXG4gICAgYXN5bmMgZ2V0QWNjb3VudHNDb3VudChwYXJlbnRTcGFuPzogKFNwYW4gfCBTcGFuQ29udGV4dCkpOiBQcm9taXNlPG51bWJlcj4ge1xuICAgICAgICBjb25zdCByZXN1bHQgPSBhd2FpdCB0aGlzLnF1ZXJ5KCdxdWVyeXtnZXRBY2NvdW50c0NvdW50fScsIHVuZGVmaW5lZCwgcGFyZW50U3Bhbik7XG4gICAgICAgIHJldHVybiByZXN1bHQuZGF0YS5nZXRBY2NvdW50c0NvdW50O1xuICAgIH1cblxuICAgIGFzeW5jIGdldFRyYW5zYWN0aW9uc0NvdW50KHBhcmVudFNwYW4/OiAoU3BhbiB8IFNwYW5Db250ZXh0KSk6IFByb21pc2U8bnVtYmVyPiB7XG4gICAgICAgIGNvbnN0IHJlc3VsdCA9IGF3YWl0IHRoaXMucXVlcnkoJ3F1ZXJ5e2dldFRyYW5zYWN0aW9uc0NvdW50fScsIHVuZGVmaW5lZCwgcGFyZW50U3Bhbik7XG4gICAgICAgIHJldHVybiByZXN1bHQuZGF0YS5nZXRUcmFuc2FjdGlvbnNDb3VudDtcbiAgICB9XG5cbiAgICBhc3luYyBnZXRBY2NvdW50c1RvdGFsQmFsYW5jZShwYXJlbnRTcGFuPzogKFNwYW4gfCBTcGFuQ29udGV4dCkpOiBQcm9taXNlPHN0cmluZz4ge1xuICAgICAgICBjb25zdCByZXN1bHQgPSBhd2FpdCB0aGlzLnF1ZXJ5KCdxdWVyeXtnZXRBY2NvdW50c1RvdGFsQmFsYW5jZX0nLCB1bmRlZmluZWQsIHBhcmVudFNwYW4pO1xuICAgICAgICByZXR1cm4gcmVzdWx0LmRhdGEuZ2V0QWNjb3VudHNUb3RhbEJhbGFuY2U7XG4gICAgfVxuXG4gICAgYXN5bmMgcG9zdFJlcXVlc3RzKHJlcXVlc3RzOiBSZXF1ZXN0W10sIHBhcmVudFNwYW4/OiAoU3BhbiB8IFNwYW5Db250ZXh0KSk6IFByb21pc2U8YW55PiB7XG4gICAgICAgIHJldHVybiB0aGlzLmNvbnRleHQudHJhY2UoJ3F1ZXJpZXMucG9zdFJlcXVlc3RzJywgYXN5bmMgKHNwYW4pID0+IHtcbiAgICAgICAgICAgIHJldHVybiB0aGlzLmdyYXBocWxNdXRhdGlvbihgbXV0YXRpb24gcG9zdFJlcXVlc3RzKCRyZXF1ZXN0czogW1JlcXVlc3RdKSB7XG4gICAgICAgICAgICAgICAgcG9zdFJlcXVlc3RzKHJlcXVlc3RzOiAkcmVxdWVzdHMpXG4gICAgICAgICAgICB9YCwge1xuICAgICAgICAgICAgICAgIHJlcXVlc3RzLFxuICAgICAgICAgICAgfSwgc3Bhbik7XG4gICAgICAgIH0sIHBhcmVudFNwYW4pO1xuICAgIH1cblxuICAgIGFzeW5jIG11dGF0aW9uKFxuICAgICAgICBxbDogc3RyaW5nLFxuICAgICAgICB2YXJpYWJsZXM6IHsgW3N0cmluZ106IGFueSB9ID0ge30sXG4gICAgICAgIHBhcmVudFNwYW4/OiAoU3BhbiB8IFNwYW5Db250ZXh0KSxcbiAgICApOiBQcm9taXNlPGFueT4ge1xuICAgICAgICByZXR1cm4gdGhpcy5jb250ZXh0LnRyYWNlKCdxdWVyaWVzLm11dGF0aW9uJywgYXN5bmMgKHNwYW46IFNwYW4pID0+IHtcbiAgICAgICAgICAgIHNwYW4uc2V0VGFnKCdwYXJhbXMnLCB7XG4gICAgICAgICAgICAgICAgbXV0YXRpb246IHFsLFxuICAgICAgICAgICAgICAgIHZhcmlhYmxlcyxcbiAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgcmV0dXJuIHRoaXMuZ3JhcGhxbE11dGF0aW9uKHFsLCB2YXJpYWJsZXMsIHNwYW4pO1xuICAgICAgICB9LCBwYXJlbnRTcGFuKTtcbiAgICB9XG5cbiAgICBhc3luYyBxdWVyeShcbiAgICAgICAgcWw6IHN0cmluZyxcbiAgICAgICAgdmFyaWFibGVzOiB7IFtzdHJpbmddOiBhbnkgfSA9IHt9LFxuICAgICAgICBwYXJlbnRTcGFuPzogKFNwYW4gfCBTcGFuQ29udGV4dCksXG4gICAgICAgIHRpbWVvdXQ/OiBudW1iZXIsXG4gICAgKTogUHJvbWlzZTxhbnk+IHtcbiAgICAgICAgcmV0dXJuIHRoaXMuY29udGV4dC50cmFjZSgncXVlcmllcy5xdWVyeScsIGFzeW5jIChzcGFuOiBTcGFuKSA9PiB7XG4gICAgICAgICAgICBzcGFuLnNldFRhZygncGFyYW1zJywge1xuICAgICAgICAgICAgICAgIHF1ZXJ5OiBxbCxcbiAgICAgICAgICAgICAgICB2YXJpYWJsZXMsXG4gICAgICAgICAgICB9KTtcbiAgICAgICAgICAgIHJldHVybiB0aGlzLmdyYXBocWxRdWVyeShxbCwgdmFyaWFibGVzLCBzcGFuLCB0aW1lb3V0KTtcbiAgICAgICAgfSwgcGFyZW50U3Bhbik7XG4gICAgfVxuXG4gICAgYXN5bmMgZ3JhcGhxbE11dGF0aW9uKHFsOiBzdHJpbmcsIHZhcmlhYmxlczogeyBbc3RyaW5nXTogYW55IH0gPSB7fSwgc3BhbjogU3Bhbik6IFByb21pc2U8YW55PiB7XG4gICAgICAgIGNvbnN0IG11dGF0aW9uID0gZ3FsKFtxbF0pO1xuICAgICAgICByZXR1cm4gdGhpcy5ncmFwaFFsKChjbGllbnQpID0+IGNsaWVudC5tdXRhdGUoe1xuICAgICAgICAgICAgbXV0YXRpb24sXG4gICAgICAgICAgICB2YXJpYWJsZXMsXG4gICAgICAgICAgICBjb250ZXh0OiB7XG4gICAgICAgICAgICAgICAgdHJhY2VTcGFuOiBzcGFuLFxuICAgICAgICAgICAgfSxcbiAgICAgICAgfSkpO1xuICAgIH1cblxuICAgIHN0YXRpYyBpc05ldHdvcmtFcnJvcihlcnJvcjogYW55KTogYm9vbGVhbiB7XG4gICAgICAgIGlmIChlcnJvci5jb2RlID09PSBUT05FcnJvckNvZGUuUVVFUllfRk9SQ0lCTFlfQUJPUlRFRCkge1xuICAgICAgICAgICAgcmV0dXJuIHRydWU7XG4gICAgICAgIH1cbiAgICAgICAgY29uc3QgbmV0d29ya0Vycm9yID0gZXJyb3IubmV0d29ya0Vycm9yO1xuICAgICAgICBpZiAoIW5ldHdvcmtFcnJvcikge1xuICAgICAgICAgICAgcmV0dXJuIGZhbHNlO1xuICAgICAgICB9XG4gICAgICAgIGlmICgnZXJybm8nIGluIG5ldHdvcmtFcnJvcikge1xuICAgICAgICAgICAgcmV0dXJuIHRydWU7XG4gICAgICAgIH1cbiAgICAgICAgcmV0dXJuICEoJ3Jlc3BvbnNlJyBpbiBuZXR3b3JrRXJyb3IgfHwgJ3Jlc3VsdCcgaW4gbmV0d29ya0Vycm9yKTtcbiAgICB9XG5cbiAgICBhc3luYyBncmFwaHFsUXVlcnkoXG4gICAgICAgIHFsOiBzdHJpbmcsXG4gICAgICAgIHZhcmlhYmxlczogeyBbc3RyaW5nXTogYW55IH0gPSB7fSxcbiAgICAgICAgc3BhbjogU3BhbixcbiAgICAgICAgdGltZW91dD86IG51bWJlcixcbiAgICApOiBQcm9taXNlPGFueT4ge1xuICAgICAgICBjb25zdCBxdWVyeSA9IGdxbChbcWxdKTtcbiAgICAgICAgbGV0IG5leHRUaW1lb3V0ID0gMTAwO1xuICAgICAgICBjb25zdCBzdGFydFRpbWUgPSBEYXRlLm5vdygpO1xuICAgICAgICBsZXQgZm9yY2VUZXJtaW5hdGVFeHRyYVRpbWVvdXQgPSA1MDAwO1xuICAgICAgICBjb25zdCBmb3JjZVRlcm1pbmF0ZVRpbWVvdXQgPSB0aW1lb3V0IHx8IHRoaXMuY29uZmlnLndhaXRGb3JUaW1lb3V0KCk7XG4gICAgICAgIHdoaWxlICh0cnVlKSB7XG4gICAgICAgICAgICB0cnkge1xuICAgICAgICAgICAgICAgIGNvbnN0IGNsaWVudCA9IGF3YWl0IHRoaXMuZ3JhcGhxbENsaWVudFJlcXVpcmVkKHNwYW4pO1xuICAgICAgICAgICAgICAgIGNvbnN0IGNvbnRleHQ6IGFueSA9IHtcbiAgICAgICAgICAgICAgICAgICAgdHJhY2VTcGFuOiBzcGFuLFxuICAgICAgICAgICAgICAgICAgICBmZXRjaE9wdGlvbnM6IHtcbiAgICAgICAgICAgICAgICAgICAgICAgIHF1ZXJ5VGltZW91dDogTWF0aC5taW4oXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgZm9yY2VUZXJtaW5hdGVUaW1lb3V0ICsgZm9yY2VUZXJtaW5hdGVFeHRyYVRpbWVvdXQsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgTUFYX1RJTUVPVVQsXG4gICAgICAgICAgICAgICAgICAgICAgICApLFxuICAgICAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgIH07XG4gICAgICAgICAgICAgICAgcmV0dXJuIGF3YWl0IG5ldyBQcm9taXNlKChyZXNvbHZlLCByZWplY3QpID0+IHtcbiAgICAgICAgICAgICAgICAgICAgKGFzeW5jICgpID0+IHtcbiAgICAgICAgICAgICAgICAgICAgICAgIGxldCBpc0FjdHVhbCA9IHRydWU7XG4gICAgICAgICAgICAgICAgICAgICAgICBjb25zdCBkb1Jlc29sdmUgPSAocmVzdWx0KSA9PiB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgaWYgKGlzQWN0dWFsKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGlzQWN0dWFsID0gZmFsc2U7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHJlc29sdmUocmVzdWx0KTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICAgICBjb25zdCBkb1JlamVjdCA9IChlcnJvcikgPT4ge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGlmIChpc0FjdHVhbCkge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBpc0FjdHVhbCA9IGZhbHNlO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICByZWplY3QoZXJyb3IpO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMucmVnaXN0ZXJRdWVyeVJlamVjdChkb1JlamVjdCk7XG4gICAgICAgICAgICAgICAgICAgICAgICB0cnkge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGRvUmVzb2x2ZShhd2FpdCBjbGllbnQucXVlcnkoe1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBxdWVyeSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdmFyaWFibGVzLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBjb250ZXh0LFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIH0pKTtcbiAgICAgICAgICAgICAgICAgICAgICAgIH0gY2F0Y2ggKGVycm9yKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgZG9SZWplY3QoZXJyb3IpO1xuICAgICAgICAgICAgICAgICAgICAgICAgfSBmaW5hbGx5IHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB0aGlzLnVucmVnaXN0ZXJRdWVyeVJlamVjdChkb1JlamVjdCk7XG4gICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgIH0pKCk7XG4gICAgICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICB9IGNhdGNoIChlcnJvcikge1xuICAgICAgICAgICAgICAgIGNvbnN0IHJlc29sdmVkRXJyb3IgPSBhd2FpdCB0aGlzLnJlc29sdmVHcmFwaFFMRXJyb3IoZXJyb3IpO1xuICAgICAgICAgICAgICAgIGlmIChUT05RdWVyaWVzTW9kdWxlLmlzTmV0d29ya0Vycm9yKHJlc29sdmVkRXJyb3IpXG4gICAgICAgICAgICAgICAgICAgICYmICF0aGlzLmNvbmZpZy5pc05ldHdvcmtUaW1lb3V0RXhwaXJlZFNpbmNlKHN0YXJ0VGltZSkpIHtcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5jb25maWcubG9nKHJlc29sdmVkRXJyb3IpO1xuICAgICAgICAgICAgICAgICAgICBjb25zdCByZXRyeURlbGF5VGltZW91dCA9IG5leHRUaW1lb3V0O1xuICAgICAgICAgICAgICAgICAgICBhd2FpdCBuZXcgUHJvbWlzZShyZXNvbHZlID0+IHNldFRpbWVvdXQocmVzb2x2ZSwgcmV0cnlEZWxheVRpbWVvdXQpKTtcbiAgICAgICAgICAgICAgICAgICAgaWYgKG5leHRUaW1lb3V0IDwgMzIwMCkge1xuICAgICAgICAgICAgICAgICAgICAgICAgbmV4dFRpbWVvdXQgKj0gMjtcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICBpZiAoZm9yY2VUZXJtaW5hdGVFeHRyYVRpbWVvdXQgPCB0aGlzLmNvbmZpZy53YWl0Rm9yVGltZW91dCgpKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICBmb3JjZVRlcm1pbmF0ZUV4dHJhVGltZW91dCArPSA1MDAwO1xuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgICAgICAgdGhyb3cgcmVzb2x2ZWRFcnJvcjtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICBhc3luYyByZXNvbHZlR3JhcGhRTEVycm9yKGVycm9yOiBhbnkpIHtcbiAgICAgICAgY29uc3QgZ3FsRXJyID0gZXJyb3IuZ3JhcGhRTEVycm9ycyAmJiBlcnJvci5ncmFwaFFMRXJyb3JzWzBdO1xuICAgICAgICBpZiAoZ3FsRXJyKSB7XG4gICAgICAgICAgICBjb25zdCBjbGllbnRFcnIgPSBuZXcgRXJyb3IoZ3FsRXJyLm1lc3NhZ2UpO1xuICAgICAgICAgICAgY29uc3QgZ3FsRXhjID0gKGdxbEVyci5leHRlbnNpb25zICYmIGdxbEVyci5leHRlbnNpb25zLmV4Y2VwdGlvbikgfHwge307XG4gICAgICAgICAgICAoY2xpZW50RXJyOiBhbnkpLm51bWJlciA9IGdxbEV4Yy5jb2RlIHx8IDA7XG4gICAgICAgICAgICAoY2xpZW50RXJyOiBhbnkpLmNvZGUgPSBncWxFeGMuY29kZSB8fCAwO1xuICAgICAgICAgICAgKGNsaWVudEVycjogYW55KS5zb3VyY2UgPSBncWxFeGMuc291cmNlIHx8ICdjbGllbnQnO1xuICAgICAgICAgICAgcmV0dXJuIGNsaWVudEVycjtcbiAgICAgICAgfVxuICAgICAgICBjb25zdCBlcnJvcnMgPSBlcnJvclxuICAgICAgICAgICAgJiYgZXJyb3IubmV0d29ya0Vycm9yXG4gICAgICAgICAgICAmJiBlcnJvci5uZXR3b3JrRXJyb3IucmVzdWx0XG4gICAgICAgICAgICAmJiBlcnJvci5uZXR3b3JrRXJyb3IucmVzdWx0LmVycm9ycztcbiAgICAgICAgaWYgKGVycm9ycykge1xuICAgICAgICAgICAgcmV0dXJuIFRPTkNsaWVudEVycm9yLnF1ZXJ5RmFpbGVkKGVycm9ycywgYXdhaXQgdGhpcy5jb21wbGV0ZUVycm9yRGF0YSgpKTtcbiAgICAgICAgfVxuICAgICAgICByZXR1cm4gZXJyb3I7XG4gICAgfVxuXG4gICAgYXN5bmMgZ3JhcGhRbChyZXF1ZXN0OiAoY2xpZW50OiBBcG9sbG9DbGllbnQpID0+IFByb21pc2U8YW55Piwgc3BhbjogU3Bhbik6IFByb21pc2U8YW55PiB7XG4gICAgICAgIGNvbnN0IGNsaWVudCA9IGF3YWl0IHRoaXMuZ3JhcGhxbENsaWVudFJlcXVpcmVkKHNwYW4pO1xuICAgICAgICB0cnkge1xuICAgICAgICAgICAgcmV0dXJuIGF3YWl0IHJlcXVlc3QoY2xpZW50KTtcbiAgICAgICAgfSBjYXRjaCAoZXJyb3IpIHtcbiAgICAgICAgICAgIHRocm93IGF3YWl0IHRoaXMucmVzb2x2ZUdyYXBoUUxFcnJvcihlcnJvcik7XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICBhc3luYyBncmFwaHFsQ2xpZW50UmVxdWlyZWQocGFyZW50U3Bhbj86IFNwYW4gfCBTcGFuQ29udGV4dCk6IFByb21pc2U8QXBvbGxvQ2xpZW50PiB7XG4gICAgICAgIGlmICh0aGlzLmdyYXBocWxDbGllbnQpIHtcbiAgICAgICAgICAgIHJldHVybiB0aGlzLmdyYXBocWxDbGllbnQ7XG4gICAgICAgIH1cbiAgICAgICAgaWYgKHRoaXMuZ3JhcGhxbENsaWVudENyZWF0aW9uKSB7XG4gICAgICAgICAgICBhd2FpdCB0aGlzLmdyYXBocWxDbGllbnRDcmVhdGlvbi5saXN0ZW4oKTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIGNvbnN0IGNyZWF0aW9uID0gbmV3IE11bHRpY2FzdFByb21pc2UoKTtcbiAgICAgICAgICAgIHRoaXMuZ3JhcGhxbENsaWVudENyZWF0aW9uID0gY3JlYXRpb247XG4gICAgICAgICAgICB0cnkge1xuICAgICAgICAgICAgICAgIGF3YWl0IHRoaXMuY29udGV4dC50cmFjZSgnc2V0dXAgY2xpZW50JywgKHNwYW4pID0+IHtcbiAgICAgICAgICAgICAgICAgICAgcmV0dXJuIHRoaXMuY3JlYXRlR3JhcGhxbENsaWVudChzcGFuKTtcbiAgICAgICAgICAgICAgICB9LCBwYXJlbnRTcGFuKTtcbiAgICAgICAgICAgICAgICB0aGlzLmdyYXBocWxDbGllbnRDcmVhdGlvbiA9IG51bGw7XG4gICAgICAgICAgICAgICAgY3JlYXRpb24ucmVzb2x2ZSh0aGlzLmdyYXBocWxDbGllbnQpO1xuICAgICAgICAgICAgfSBjYXRjaCAoZXJyb3IpIHtcbiAgICAgICAgICAgICAgICB0aGlzLmdyYXBocWxDbGllbnRDcmVhdGlvbiA9IG51bGw7XG4gICAgICAgICAgICAgICAgY3JlYXRpb24ucmVqZWN0KGVycm9yKTtcbiAgICAgICAgICAgICAgICB0aHJvdyBlcnJvcjtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgICByZXR1cm4gdGhpcy5ncmFwaHFsQ2xpZW50O1xuICAgIH1cblxuICAgIGFzeW5jIGNyZWF0ZUdyYXBocWxDbGllbnQoc3BhbjogU3BhbiB8IFNwYW5Db250ZXh0KSB7XG4gICAgICAgIGNvbnN0IHVzZUh0dHAgPSAhdGhpcy5jb25maWcuZGF0YS51c2VXZWJTb2NrZXRGb3JRdWVyaWVzO1xuICAgICAgICBsZXQgY2xpZW50Q29uZmlnID0gYXdhaXQgdGhpcy5nZXRDbGllbnRDb25maWcoKTtcblxuICAgICAgICBjb25zdCBzdWJzT3B0aW9ucyA9IHRoaXMuY29uZmlnLnRyYWNlci5pbmplY3Qoc3BhbiwgRk9STUFUX1RFWFRfTUFQLCB7fSk7XG4gICAgICAgIGNvbnN0IHN1YnNjcmlwdGlvbkNsaWVudDogU3Vic2NyaXB0aW9uQ2xpZW50ICYgeyB1cmw6IHN0cmluZyB9ID0gbmV3IFN1YnNjcmlwdGlvbkNsaWVudChcbiAgICAgICAgICAgIGNsaWVudENvbmZpZy53c1VybCxcbiAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICB0aW1lb3V0OiBLRUVQX0FMSVZFX1RJTUVPVVQsXG4gICAgICAgICAgICAgICAgcmVjb25uZWN0OiB0cnVlLFxuICAgICAgICAgICAgICAgIGNvbm5lY3Rpb25QYXJhbXM6ICgpID0+ICh7XG4gICAgICAgICAgICAgICAgICAgIGFjY2Vzc0tleTogdGhpcy5jb25maWcuZGF0YSAmJiB0aGlzLmNvbmZpZy5kYXRhLmFjY2Vzc0tleSxcbiAgICAgICAgICAgICAgICAgICAgaGVhZGVyczogc3Vic09wdGlvbnMsXG4gICAgICAgICAgICAgICAgfSksXG4gICAgICAgICAgICB9LFxuICAgICAgICAgICAgY2xpZW50Q29uZmlnLldlYlNvY2tldCxcbiAgICAgICAgKTtcbiAgICAgICAgc3Vic2NyaXB0aW9uQ2xpZW50Lm9uUmVjb25uZWN0ZWQoKCkgPT4ge1xuICAgICAgICAgICAgY29uc29sZS5sb2coJ1tUT05DbGllbnQucXVlcmllc10nLCAnV2ViU29ja2V0IFJlY29ubmVjdGVkJyk7XG4gICAgICAgICAgICB0aGlzLnJlamVjdEFjdGl2ZVF1ZXJpZXMoKTtcbiAgICAgICAgfSk7XG4gICAgICAgIGNvbnN0IGd1YXJkID0ge1xuICAgICAgICAgICAgZGV0ZWN0aW5nUmVkaXJlY3Rpb246IGZhbHNlLFxuICAgICAgICB9O1xuICAgICAgICBzdWJzY3JpcHRpb25DbGllbnQub25FcnJvcigoKSA9PiB7XG4gICAgICAgICAgICBjb25zb2xlLmxvZygnW1RPTkNsaWVudC5xdWVyaWVzXScsICdXZWJTb2NrZXQgRmFpbGVkJyk7XG4gICAgICAgICAgICBpZiAoZ3VhcmQuZGV0ZWN0aW5nUmVkaXJlY3Rpb24pIHtcbiAgICAgICAgICAgICAgICByZXR1cm47XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICAoYXN5bmMgKCkgPT4ge1xuICAgICAgICAgICAgICAgIGd1YXJkLmRldGVjdGluZ1JlZGlyZWN0aW9uID0gdHJ1ZTtcbiAgICAgICAgICAgICAgICB0cnkge1xuICAgICAgICAgICAgICAgICAgICBjb25zdCBuZXdDb25maWcgPSBhd2FpdCB0aGlzLmdldENsaWVudENvbmZpZygpO1xuICAgICAgICAgICAgICAgICAgICBjb25zdCBjb25maWdJc0NoYW5nZWQgPSBuZXdDb25maWcuaHR0cFVybCAhPT0gY2xpZW50Q29uZmlnLmh0dHBVcmxcbiAgICAgICAgICAgICAgICAgICAgICAgIHx8IG5ld0NvbmZpZy53c1VybCAhPT0gY2xpZW50Q29uZmlnLndzVXJsO1xuICAgICAgICAgICAgICAgICAgICBpZiAoY29uZmlnSXNDaGFuZ2VkKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICBjb25zb2xlLmxvZygnW1RPTkNsaWVudC5xdWVyaWVzXScsICdDbGllbnQgY29uZmlnIGNoYW5nZWQnKTtcbiAgICAgICAgICAgICAgICAgICAgICAgIGNsaWVudENvbmZpZyA9IG5ld0NvbmZpZztcbiAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMuZ3JhcGhxbENsaWVudENvbmZpZyA9IGNsaWVudENvbmZpZztcbiAgICAgICAgICAgICAgICAgICAgICAgIHN1YnNjcmlwdGlvbkNsaWVudC51cmwgPSBuZXdDb25maWcud3NVcmw7XG4gICAgICAgICAgICAgICAgICAgICAgICBpZiAodGhpcy53c0xpbmspIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB0aGlzLndzTGluay51cmwgPSBuZXdDb25maWcud3NVcmw7XG4gICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICAgICBpZiAodGhpcy5odHRwTGluaykge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMuaHR0cExpbmsudXJpID0gbmV3Q29uZmlnLmh0dHBVcmw7XG4gICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICB9IGNhdGNoIChlcnIpIHtcbiAgICAgICAgICAgICAgICAgICAgY29uc29sZS5sb2coJ1tUT05DbGllbnQucXVlcmllc10gcmVkaXJlY3Rpb24gZGV0ZWN0b3IgZmFpbGVkJywgZXJyKTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgZ3VhcmQuZGV0ZWN0aW5nUmVkaXJlY3Rpb24gPSBmYWxzZTtcbiAgICAgICAgICAgIH0pKCk7XG4gICAgICAgIH0pO1xuICAgICAgICBzdWJzY3JpcHRpb25DbGllbnQubWF4Q29ubmVjdFRpbWVHZW5lcmF0b3IuZHVyYXRpb24gPSAoKSA9PiB7XG4gICAgICAgICAgICByZXR1cm4gc3Vic2NyaXB0aW9uQ2xpZW50Lm1heENvbm5lY3RUaW1lR2VuZXJhdG9yLm1heDtcbiAgICAgICAgfTtcblxuICAgICAgICBjb25zdCB0cmFjZXJMaW5rID0gYXdhaXQgc2V0Q29udGV4dCgoXywgcmVxKSA9PiB7XG4gICAgICAgICAgICBjb25zdCByZXNvbHZlZFNwYW4gPSAocmVxICYmIHJlcS50cmFjZVNwYW4pIHx8IHNwYW47XG4gICAgICAgICAgICByZXEuaGVhZGVycyA9IHt9O1xuICAgICAgICAgICAgdGhpcy5jb25maWcudHJhY2VyLmluamVjdChyZXNvbHZlZFNwYW4sIEZPUk1BVF9URVhUX01BUCwgcmVxLmhlYWRlcnMpO1xuICAgICAgICAgICAgY29uc3QgYWNjZXNzS2V5ID0gdGhpcy5jb25maWcuZGF0YSAmJiB0aGlzLmNvbmZpZy5kYXRhLmFjY2Vzc0tleTtcbiAgICAgICAgICAgIGlmIChhY2Nlc3NLZXkpIHtcbiAgICAgICAgICAgICAgICByZXEuaGVhZGVycy5hY2Nlc3NLZXkgPSBhY2Nlc3NLZXk7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICByZXR1cm4ge1xuICAgICAgICAgICAgICAgIGhlYWRlcnM6IHJlcS5oZWFkZXJzLFxuICAgICAgICAgICAgfTtcbiAgICAgICAgfSk7XG4gICAgICAgIGNvbnN0IHdyYXBMaW5rID0gKGxpbms6IEFwb2xsb0xpbmspOiBBcG9sbG9MaW5rID0+IHRyYWNlckxpbmsuY29uY2F0KGxpbmspO1xuICAgICAgICBjb25zdCBpc1N1YnNjcmlwdGlvbiA9ICh7IHF1ZXJ5IH0pID0+IHtcbiAgICAgICAgICAgIGNvbnN0IGRlZmluaXRpb24gPSBnZXRNYWluRGVmaW5pdGlvbihxdWVyeSk7XG4gICAgICAgICAgICByZXR1cm4gKFxuICAgICAgICAgICAgICAgIGRlZmluaXRpb24ua2luZCA9PT0gJ09wZXJhdGlvbkRlZmluaXRpb24nXG4gICAgICAgICAgICAgICAgJiYgZGVmaW5pdGlvbi5vcGVyYXRpb24gPT09ICdzdWJzY3JpcHRpb24nXG4gICAgICAgICAgICApO1xuICAgICAgICB9O1xuXG4gICAgICAgIHRoaXMud3NMaW5rID0gbmV3IFdlYlNvY2tldExpbmsoc3Vic2NyaXB0aW9uQ2xpZW50KTtcbiAgICAgICAgdGhpcy5odHRwTGluayA9IHVzZUh0dHBcbiAgICAgICAgICAgID8gbmV3IEh0dHBMaW5rKHtcbiAgICAgICAgICAgICAgICB1cmk6IGNsaWVudENvbmZpZy5odHRwVXJsLFxuICAgICAgICAgICAgICAgIGZldGNoOiBhYm9ydGFibGVGZXRjaChjbGllbnRDb25maWcuZmV0Y2gpLFxuICAgICAgICAgICAgfSlcbiAgICAgICAgICAgIDogbnVsbDtcbiAgICAgICAgY29uc3QgbGluayA9IHRoaXMuaHR0cExpbmtcbiAgICAgICAgICAgID8gc3BsaXQoaXNTdWJzY3JpcHRpb24sIHdyYXBMaW5rKHRoaXMud3NMaW5rKSwgd3JhcExpbmsodGhpcy5odHRwTGluaykpXG4gICAgICAgICAgICA6IHdyYXBMaW5rKHRoaXMud3NMaW5rKTtcbiAgICAgICAgdGhpcy5ncmFwaHFsQ2xpZW50Q29uZmlnID0gY2xpZW50Q29uZmlnO1xuICAgICAgICB0aGlzLmdyYXBocWxDbGllbnQgPSBuZXcgQXBvbGxvQ2xpZW50KHtcbiAgICAgICAgICAgIGNhY2hlOiBuZXcgSW5NZW1vcnlDYWNoZSh7fSksXG4gICAgICAgICAgICBsaW5rLFxuICAgICAgICAgICAgZGVmYXVsdE9wdGlvbnM6IHtcbiAgICAgICAgICAgICAgICB3YXRjaFF1ZXJ5OiB7XG4gICAgICAgICAgICAgICAgICAgIGZldGNoUG9saWN5OiAnbm8tY2FjaGUnLFxuICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgcXVlcnk6IHtcbiAgICAgICAgICAgICAgICAgICAgZmV0Y2hQb2xpY3k6ICduby1jYWNoZScsXG4gICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgIH0sXG4gICAgICAgIH0pO1xuICAgIH1cblxuICAgIGFzeW5jIGNsb3NlKCkge1xuICAgICAgICBpZiAodGhpcy5ncmFwaHFsQ2xpZW50KSB7XG4gICAgICAgICAgICBjb25zdCBjbGllbnQgPSB0aGlzLmdyYXBocWxDbGllbnQ7XG4gICAgICAgICAgICB0aGlzLmdyYXBocWxDbGllbnQgPSBudWxsO1xuICAgICAgICAgICAgY2xpZW50LnN0b3AoKTtcbiAgICAgICAgICAgIGF3YWl0IGNsaWVudC5jbGVhclN0b3JlKCk7XG4gICAgICAgIH1cbiAgICB9XG59XG5cblxuY2xhc3MgVE9OUXVlcmllc01vZHVsZUNvbGxlY3Rpb24gaW1wbGVtZW50cyBUT05RQ29sbGVjdGlvbiB7XG4gICAgbW9kdWxlOiBUT05RdWVyaWVzTW9kdWxlO1xuXG4gICAgY29sbGVjdGlvbk5hbWU6IHN0cmluZztcblxuICAgIHR5cGVOYW1lOiBzdHJpbmc7XG5cbiAgICBjb25zdHJ1Y3RvcihcbiAgICAgICAgbW9kdWxlOiBUT05RdWVyaWVzTW9kdWxlLFxuICAgICAgICBjb2xsZWN0aW9uTmFtZTogc3RyaW5nLFxuICAgICAgICB0eXBlTmFtZTogc3RyaW5nLFxuICAgICkge1xuICAgICAgICB0aGlzLm1vZHVsZSA9IG1vZHVsZTtcbiAgICAgICAgdGhpcy5jb2xsZWN0aW9uTmFtZSA9IGNvbGxlY3Rpb25OYW1lO1xuICAgICAgICB0aGlzLnR5cGVOYW1lID0gdHlwZU5hbWU7XG4gICAgfVxuXG4gICAgYXN5bmMgcXVlcnkoXG4gICAgICAgIC4uLmFyZ3NcbiAgICAgICAgLypcbiAgICAgICAgICAgIGZpbHRlck9yUGFyYW1zOiBhbnkgfCBUT05RdWVyeVBhcmFtcyxcbiAgICAgICAgICAgIHJlc3VsdDogc3RyaW5nLFxuICAgICAgICAgICAgb3JkZXJCeT86IE9yZGVyQnlbXSxcbiAgICAgICAgICAgIGxpbWl0PzogbnVtYmVyLFxuICAgICAgICAgICAgdGltZW91dD86IG51bWJlcixcbiAgICAgICAgICAgIHBhcmVudFNwYW4/OiAoU3BhbiB8IFNwYW5Db250ZXh0KVxuICAgICAgICAgKi9cbiAgICApOiBQcm9taXNlPGFueT4ge1xuICAgICAgICBjb25zdCB7XG4gICAgICAgICAgICBmaWx0ZXIsXG4gICAgICAgICAgICByZXN1bHQsXG4gICAgICAgICAgICBvcmRlckJ5LFxuICAgICAgICAgICAgbGltaXQsXG4gICAgICAgICAgICB0aW1lb3V0LFxuICAgICAgICAgICAgb3BlcmF0aW9uSWQsXG4gICAgICAgICAgICBwYXJlbnRTcGFuLFxuICAgICAgICB9ID0gcmVzb2x2ZVBhcmFtczxUT05RdWVyeVBhcmFtcz4oYXJncywgJ2ZpbHRlcicsICgpID0+ICh7XG4gICAgICAgICAgICBmaWx0ZXI6IGFyZ3NbMF0sXG4gICAgICAgICAgICByZXN1bHQ6IChhcmdzWzFdOiBhbnkpLFxuICAgICAgICAgICAgb3JkZXJCeTogKGFyZ3NbMl06IGFueSksXG4gICAgICAgICAgICBsaW1pdDogKGFyZ3NbM106IGFueSksXG4gICAgICAgICAgICB0aW1lb3V0OiAoYXJnc1s0XTogYW55KSxcbiAgICAgICAgICAgIHBhcmVudFNwYW46IGFyZ3NbNV0sXG4gICAgICAgIH0pKTtcbiAgICAgICAgcmV0dXJuIHRoaXMubW9kdWxlLmNvbnRleHQudHJhY2UoYCR7dGhpcy5jb2xsZWN0aW9uTmFtZX0ucXVlcnlgLCBhc3luYyAoc3BhbikgPT4ge1xuICAgICAgICAgICAgc3Bhbi5zZXRUYWcoJ3BhcmFtcycsIHtcbiAgICAgICAgICAgICAgICBmaWx0ZXIsXG4gICAgICAgICAgICAgICAgcmVzdWx0LFxuICAgICAgICAgICAgICAgIG9yZGVyQnksXG4gICAgICAgICAgICAgICAgbGltaXQsXG4gICAgICAgICAgICAgICAgdGltZW91dCxcbiAgICAgICAgICAgICAgICBvcGVyYXRpb25JZCxcbiAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgY29uc3QgdXNlT3BlcmF0aW9uSWQgPSBvcGVyYXRpb25JZFxuICAgICAgICAgICAgICAgICYmIChhd2FpdCB0aGlzLm1vZHVsZS5nZXRTZXJ2ZXJJbmZvKHNwYW4pKS5zdXBwb3J0c09wZXJhdGlvbklkO1xuICAgICAgICAgICAgY29uc3QgYyA9IHRoaXMuY29sbGVjdGlvbk5hbWU7XG4gICAgICAgICAgICBjb25zdCB0ID0gdGhpcy50eXBlTmFtZTtcbiAgICAgICAgICAgIGNvbnN0IHFsID0gYFxuICAgICAgICAgICAgcXVlcnkgJHtjfShcbiAgICAgICAgICAgICAgICAkZmlsdGVyOiAke3R9RmlsdGVyLFxuICAgICAgICAgICAgICAgICRvcmRlckJ5OiBbUXVlcnlPcmRlckJ5XSwgXG4gICAgICAgICAgICAgICAgJGxpbWl0OiBJbnQsIFxuICAgICAgICAgICAgICAgICR0aW1lb3V0OiBGbG9hdFxuICAgICAgICAgICAgICAgICR7dXNlT3BlcmF0aW9uSWQgPyAnLCAkb3BlcmF0aW9uSWQ6IFN0cmluZycgOiAnJ31cbiAgICAgICAgICAgICApIHtcbiAgICAgICAgICAgICAgICAke2N9KFxuICAgICAgICAgICAgICAgICAgICBmaWx0ZXI6ICRmaWx0ZXIsIFxuICAgICAgICAgICAgICAgICAgICBvcmRlckJ5OiAkb3JkZXJCeSwgXG4gICAgICAgICAgICAgICAgICAgIGxpbWl0OiAkbGltaXQsIFxuICAgICAgICAgICAgICAgICAgICB0aW1lb3V0OiAkdGltZW91dFxuICAgICAgICAgICAgICAgICAgICAke3VzZU9wZXJhdGlvbklkID8gJywgb3BlcmF0aW9uSWQ6ICRvcGVyYXRpb25JZCcgOiAnJ31cbiAgICAgICAgICAgICAgICApIHsgJHtyZXN1bHR9IH1cbiAgICAgICAgICAgIH1gO1xuICAgICAgICAgICAgY29uc3QgdmFyaWFibGVzOiB7IFtzdHJpbmddOiBhbnkgfSA9IHtcbiAgICAgICAgICAgICAgICBmaWx0ZXIsXG4gICAgICAgICAgICAgICAgb3JkZXJCeSxcbiAgICAgICAgICAgICAgICBsaW1pdCxcbiAgICAgICAgICAgIH07XG4gICAgICAgICAgICBpZiAodXNlT3BlcmF0aW9uSWQpIHtcbiAgICAgICAgICAgICAgICB2YXJpYWJsZXMub3BlcmF0aW9uSWQgPSBvcGVyYXRpb25JZDtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGlmICh0aW1lb3V0KSB7XG4gICAgICAgICAgICAgICAgdmFyaWFibGVzLnRpbWVvdXQgPSBNYXRoLm1pbihNQVhfVElNRU9VVCwgdGltZW91dCk7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICByZXR1cm4gKGF3YWl0IHRoaXMubW9kdWxlLmdyYXBocWxRdWVyeShxbCwgdmFyaWFibGVzLCBzcGFuLCB0aW1lb3V0KSkuZGF0YVtjXTtcbiAgICAgICAgfSwgcGFyZW50U3Bhbik7XG4gICAgfVxuXG4gICAgYXN5bmMgYWdncmVnYXRlKFxuICAgICAgICBwYXJhbXM6IFRPTlF1ZXJ5QWdncmVnYXRlUGFyYW1zLFxuICAgICk6IFByb21pc2U8c3RyaW5nW10+IHtcbiAgICAgICAgcmV0dXJuIHRoaXMubW9kdWxlLmNvbnRleHQudHJhY2UoYCR7dGhpcy5jb2xsZWN0aW9uTmFtZX0uYWdncmVnYXRlYCwgYXN5bmMgKHNwYW4pID0+IHtcbiAgICAgICAgICAgIHNwYW4uc2V0VGFnKCdwYXJhbXMnLCB7XG4gICAgICAgICAgICAgICAgZmlsdGVyOiBwYXJhbXMuZmlsdGVyLFxuICAgICAgICAgICAgICAgIGZpZWxkczogcGFyYW1zLmZpZWxkcyxcbiAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgaWYgKCEoYXdhaXQgdGhpcy5tb2R1bGUuZ2V0U2VydmVySW5mbyhzcGFuKSkuc3VwcG9ydHNBZ2dyZWdhdGlvbnMpIHtcbiAgICAgICAgICAgICAgICB0aHJvdyBUT05DbGllbnRFcnJvci5zZXJ2ZXJEb2VzbnRTdXBwb3J0QWdncmVnYXRpb25zKFxuICAgICAgICAgICAgICAgICAgICBhd2FpdCB0aGlzLm1vZHVsZS5jb21wbGV0ZUVycm9yRGF0YSgpLFxuICAgICAgICAgICAgICAgICk7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBjb25zdCB0ID0gdGhpcy50eXBlTmFtZTtcbiAgICAgICAgICAgIGNvbnN0IHEgPSB0aGlzLnR5cGVOYW1lLmVuZHNXaXRoKCdzJykgPyBgYWdncmVnYXRlJHt0fWAgOiBgYWdncmVnYXRlJHt0fXNgO1xuICAgICAgICAgICAgY29uc3QgcWwgPSBgXG4gICAgICAgICAgICBxdWVyeSAke3F9KFxuICAgICAgICAgICAgICAgICRmaWx0ZXI6ICR7dH1GaWx0ZXIsXG4gICAgICAgICAgICAgICAgJGZpZWxkczogW0ZpZWxkQWdncmVnYXRpb25dIFxuICAgICAgICAgICAgICkge1xuICAgICAgICAgICAgICAgICR7cX0oXG4gICAgICAgICAgICAgICAgICAgIGZpbHRlcjogJGZpbHRlciwgXG4gICAgICAgICAgICAgICAgICAgIGZpZWxkczogJGZpZWxkcyBcbiAgICAgICAgICAgICAgICApXG4gICAgICAgICAgICB9YDtcbiAgICAgICAgICAgIGNvbnN0IHZhcmlhYmxlczogeyBbc3RyaW5nXTogYW55IH0gPSB7XG4gICAgICAgICAgICAgICAgZmlsdGVyOiBwYXJhbXMuZmlsdGVyLFxuICAgICAgICAgICAgICAgIGZpZWxkczogcGFyYW1zLmZpZWxkcyxcbiAgICAgICAgICAgIH07XG4gICAgICAgICAgICByZXR1cm4gKGF3YWl0IHRoaXMubW9kdWxlLmdyYXBocWxRdWVyeShxbCwgdmFyaWFibGVzLCBzcGFuKSkuZGF0YVtxXTtcbiAgICAgICAgfSwgcGFyYW1zLnBhcmVudFNwYW4pO1xuICAgIH1cblxuICAgIHN1YnNjcmliZShcbiAgICAgICAgLi4uYXJnc1xuICAgICAgICAvKlxuICAgICAgICBmaWx0ZXJPclBhcmFtczogYW55IHwgVE9OU3Vic2NyaWJlUGFyYW1zLFxuICAgICAgICByZXN1bHQ/OiBzdHJpbmcsXG4gICAgICAgIG9uRG9jRXZlbnQ/OiBEb2NFdmVudCxcbiAgICAgICAgb25FcnJvcj86IChlcnI6IEVycm9yKSA9PiB2b2lkXG4gICAgICAgICAqL1xuICAgICk6IFN1YnNjcmlwdGlvbiB7XG4gICAgICAgIGNvbnN0IHtcbiAgICAgICAgICAgIGZpbHRlcixcbiAgICAgICAgICAgIHJlc3VsdCxcbiAgICAgICAgICAgIG9uRG9jRXZlbnQsXG4gICAgICAgICAgICBvbkVycm9yLFxuICAgICAgICB9ID0gcmVzb2x2ZVBhcmFtczxUT05TdWJzY3JpYmVQYXJhbXM+KGFyZ3MsICdmaWx0ZXInLCAoKSA9PiAoe1xuICAgICAgICAgICAgZmlsdGVyOiBhcmdzWzBdLFxuICAgICAgICAgICAgcmVzdWx0OiAoYXJnc1sxXTogYW55KSxcbiAgICAgICAgICAgIG9uRG9jRXZlbnQ6IChhcmdzWzJdOiBhbnkpLFxuICAgICAgICAgICAgb25FcnJvcjogKGFyZ3NbM106IGFueSksXG4gICAgICAgIH0pKTtcbiAgICAgICAgY29uc3Qgc3BhbiA9IHRoaXMubW9kdWxlLmNvbmZpZy50cmFjZXIuc3RhcnRTcGFuKCdUT05RdWVyaWVzTW9kdWxlLmpzOnN1YnNjcmliZSAnKTtcbiAgICAgICAgc3Bhbi5zZXRUYWcoVGFncy5TUEFOX0tJTkQsICdjbGllbnQnKTtcbiAgICAgICAgY29uc3QgdGV4dCA9IGBzdWJzY3JpcHRpb24gJHt0aGlzLmNvbGxlY3Rpb25OYW1lfSgkZmlsdGVyOiAke3RoaXMudHlwZU5hbWV9RmlsdGVyKSB7XG4gICAgICAgICAgICAke3RoaXMuY29sbGVjdGlvbk5hbWV9KGZpbHRlcjogJGZpbHRlcikgeyAke3Jlc3VsdH0gfVxuICAgICAgICB9YDtcbiAgICAgICAgY29uc3QgcXVlcnkgPSBncWwoW3RleHRdKTtcbiAgICAgICAgbGV0IHN1YnNjcmlwdGlvbiA9IG51bGw7XG4gICAgICAgIChhc3luYyAoKSA9PiB7XG4gICAgICAgICAgICB0cnkge1xuICAgICAgICAgICAgICAgIGNvbnN0IGNsaWVudCA9IGF3YWl0IHRoaXMubW9kdWxlLmdyYXBocWxDbGllbnRSZXF1aXJlZChzcGFuKTtcbiAgICAgICAgICAgICAgICBjb25zdCBvYnNlcnZhYmxlID0gY2xpZW50LnN1YnNjcmliZSh7XG4gICAgICAgICAgICAgICAgICAgIHF1ZXJ5LFxuICAgICAgICAgICAgICAgICAgICB2YXJpYWJsZXM6IHtcbiAgICAgICAgICAgICAgICAgICAgICAgIGZpbHRlcixcbiAgICAgICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICB9KTtcbiAgICAgICAgICAgICAgICBzdWJzY3JpcHRpb24gPSBvYnNlcnZhYmxlLnN1YnNjcmliZSgobWVzc2FnZSkgPT4ge1xuICAgICAgICAgICAgICAgICAgICBvbkRvY0V2ZW50KCdpbnNlcnQvdXBkYXRlJywgbWVzc2FnZS5kYXRhW3RoaXMuY29sbGVjdGlvbk5hbWVdKTtcbiAgICAgICAgICAgICAgICB9KTtcbiAgICAgICAgICAgIH0gY2F0Y2ggKGVycm9yKSB7XG4gICAgICAgICAgICAgICAgc3Bhbi5sb2coe1xuICAgICAgICAgICAgICAgICAgICBldmVudDogJ2ZhaWxlZCcsXG4gICAgICAgICAgICAgICAgICAgIHBheWxvYWQ6IGVycm9yLFxuICAgICAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgICAgIGlmIChvbkVycm9yKSB7XG4gICAgICAgICAgICAgICAgICAgIG9uRXJyb3IoZXJyb3IpO1xuICAgICAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgICAgICAgIGNvbnNvbGUubG9nKCdUT04gQ2xpZW50IHN1YnNjcmlwdGlvbiBlcnJvcicsIGVycm9yKTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG4gICAgICAgIH0pKCk7XG4gICAgICAgIHJldHVybiB7XG4gICAgICAgICAgICB1bnN1YnNjcmliZTogKCkgPT4ge1xuICAgICAgICAgICAgICAgIGlmIChzdWJzY3JpcHRpb24pIHtcbiAgICAgICAgICAgICAgICAgICAgc3Vic2NyaXB0aW9uLnVuc3Vic2NyaWJlKCk7XG4gICAgICAgICAgICAgICAgICAgIHNwYW4uZmluaXNoKCk7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfSxcbiAgICAgICAgfTtcbiAgICB9XG5cbiAgICBhc3luYyB3YWl0Rm9yKFxuICAgICAgICAuLi5hcmdzXG4gICAgICAgIC8qXG4gICAgICAgIGZpbHRlck9yUGFyYW1zOiBhbnkgfCBUT05XYWl0Rm9yUGFyYW1zLFxuICAgICAgICByZXN1bHQ6IHN0cmluZyxcbiAgICAgICAgdGltZW91dD86IG51bWJlcixcbiAgICAgICAgcGFyZW50U3Bhbj86IChTcGFuIHwgU3BhbkNvbnRleHQpXG4gICAgICAgICAqL1xuICAgICk6IFByb21pc2U8YW55PiB7XG4gICAgICAgIGNvbnN0IHtcbiAgICAgICAgICAgIGZpbHRlcixcbiAgICAgICAgICAgIHJlc3VsdCxcbiAgICAgICAgICAgIHRpbWVvdXQ6IHBhcmFtc1RpbWVvdXQsXG4gICAgICAgICAgICBwYXJlbnRTcGFuLFxuICAgICAgICAgICAgb3BlcmF0aW9uSWQsXG4gICAgICAgIH0gPSByZXNvbHZlUGFyYW1zPFRPTldhaXRGb3JQYXJhbXM+KGFyZ3MsICdmaWx0ZXInLCAoKSA9PiAoe1xuICAgICAgICAgICAgZmlsdGVyOiBhcmdzWzBdLFxuICAgICAgICAgICAgcmVzdWx0OiAoYXJnc1sxXTogYW55KSxcbiAgICAgICAgICAgIHRpbWVvdXQ6IChhcmdzWzJdOiBhbnkpLFxuICAgICAgICAgICAgcGFyZW50U3BhbjogYXJnc1szXSxcbiAgICAgICAgfSkpO1xuICAgICAgICBjb25zdCB0aW1lb3V0ID0gcGFyYW1zVGltZW91dCB8fCB0aGlzLm1vZHVsZS5jb25maWcud2FpdEZvclRpbWVvdXQoKTtcbiAgICAgICAgY29uc3QgZG9jcyA9IGF3YWl0IHRoaXMucXVlcnkoe1xuICAgICAgICAgICAgZmlsdGVyLFxuICAgICAgICAgICAgcmVzdWx0LFxuICAgICAgICAgICAgdGltZW91dCxcbiAgICAgICAgICAgIHBhcmVudFNwYW4sXG4gICAgICAgICAgICBvcGVyYXRpb25JZCxcbiAgICAgICAgfSk7XG4gICAgICAgIGlmIChkb2NzLmxlbmd0aCA+IDApIHtcbiAgICAgICAgICAgIHJldHVybiBkb2NzWzBdO1xuICAgICAgICB9XG4gICAgICAgIHRocm93IFRPTkNsaWVudEVycm9yLndhaXRGb3JUaW1lb3V0KGF3YWl0IHRoaXMubW9kdWxlLmNvbXBsZXRlRXJyb3JEYXRhKHtcbiAgICAgICAgICAgIGNvbGxlY3Rpb246IHRoaXMuY29sbGVjdGlvbk5hbWUsXG4gICAgICAgIH0pKTtcbiAgICB9XG59XG5cblRPTlF1ZXJpZXNNb2R1bGUubW9kdWxlTmFtZSA9ICdUT05RdWVyaWVzTW9kdWxlJztcbiJdfQ==