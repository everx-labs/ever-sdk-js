"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.removeProps = removeProps;
exports["default"] = exports.QBounceType = exports.QSkipReason = exports.QComputeType = exports.QAccountStatusChange = exports.QAccountStatus = exports.QTransactionProcessingStatus = exports.QTransactionType = exports.QAccountType = exports.QSplitType = exports.QBlockProcessingStatus = exports.QMessageProcessingStatus = exports.QMessageType = exports.QOutMsgType = exports.QInMsgType = exports.TONClientStorageStatus = exports.TONClientComputeSkippedStatus = exports.TONClientTransactionPhase = exports.TONAddressStringVariant = void 0;

var _regenerator = _interopRequireDefault(require("@babel/runtime/regenerator"));

var _opentracing = require("opentracing");

var _TONClient = require("../TONClient");

var _TONModule2 = require("../TONModule");

var _TONConfigModule = _interopRequireDefault(require("./TONConfigModule"));

var _TONQueriesModule = _interopRequireWildcard(require("./TONQueriesModule"));

function _getRequireWildcardCache() { if (typeof WeakMap !== "function") return null; var cache = new WeakMap(); _getRequireWildcardCache = function _getRequireWildcardCache() { return cache; }; return cache; }

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } if (obj === null || _typeof(obj) !== "object" && typeof obj !== "function") { return { "default": obj }; } var cache = _getRequireWildcardCache(); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj["default"] = obj; if (cache) { cache.set(obj, newObj); } return newObj; }

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { Promise.resolve(value).then(_next, _throw); } }

function _asyncToGenerator(fn) { return function () { var self = this, args = arguments; return new Promise(function (resolve, reject) { var gen = fn.apply(self, args); function _next(value) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "next", value); } function _throw(err) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "throw", err); } _next(undefined); }); }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

function _createSuper(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct(); return function () { var Super = _getPrototypeOf(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = _getPrototypeOf(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return _possibleConstructorReturn(this, result); }; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Date.prototype.toString.call(Reflect.construct(Date, [], function () {})); return true; } catch (e) { return false; } }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

function _typeof(obj) { "@babel/helpers - typeof"; if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

var TONAddressStringVariant = {
  AccountId: 'AccountId',
  Hex: 'Hex',
  Base64: 'Base64'
};
exports.TONAddressStringVariant = TONAddressStringVariant;
var TONClientTransactionPhase = {
  storage: 'storage',
  computeSkipped: 'computeSkipped',
  computeVm: 'computeVm',
  action: 'action',
  unknown: 'unknown'
};
exports.TONClientTransactionPhase = TONClientTransactionPhase;
var TONClientComputeSkippedStatus = {
  noState: 0,
  badState: 1,
  noGas: 2
};
exports.TONClientComputeSkippedStatus = TONClientComputeSkippedStatus;
var TONClientStorageStatus = {
  unchanged: 0,
  frozen: 1,
  deleted: 2
};
exports.TONClientStorageStatus = TONClientStorageStatus;
var QInMsgType = {
  external: 0,
  ihr: 1,
  immediately: 2,
  "final": 3,
  transit: 4,
  discardedFinal: 5,
  discardedTransit: 6
};
exports.QInMsgType = QInMsgType;
var QOutMsgType = {
  external: 0,
  immediately: 1,
  outMsgNew: 2,
  transit: 3,
  dequeueImmediately: 4,
  dequeue: 5,
  transitRequired: 6,
  none: -1
};
exports.QOutMsgType = QOutMsgType;
var QMessageType = {
  internal: 0,
  extIn: 1,
  extOut: 2
};
exports.QMessageType = QMessageType;
var QMessageProcessingStatus = {
  unknown: 0,
  queued: 1,
  processing: 2,
  preliminary: 3,
  proposed: 4,
  finalized: 5,
  refused: 6,
  transiting: 7
};
exports.QMessageProcessingStatus = QMessageProcessingStatus;
var QBlockProcessingStatus = {
  unknown: 0,
  proposed: 1,
  finalized: 2,
  refused: 3
};
exports.QBlockProcessingStatus = QBlockProcessingStatus;
var QSplitType = {
  none: 0,
  split: 2,
  merge: 3
};
exports.QSplitType = QSplitType;
var QAccountType = {
  uninit: 0,
  active: 1,
  frozen: 2
};
exports.QAccountType = QAccountType;
var QTransactionType = {
  ordinary: 0,
  storage: 1,
  tick: 2,
  tock: 3,
  splitPrepare: 4,
  splitInstall: 5,
  mergePrepare: 6,
  mergeInstall: 7
};
exports.QTransactionType = QTransactionType;
var QTransactionProcessingStatus = {
  unknown: 0,
  preliminary: 1,
  proposed: 2,
  finalized: 3,
  refused: 4
};
exports.QTransactionProcessingStatus = QTransactionProcessingStatus;
var QAccountStatus = {
  uninit: 0,
  active: 1,
  frozen: 2,
  nonExist: 3
};
exports.QAccountStatus = QAccountStatus;
var QAccountStatusChange = {
  unchanged: 0,
  frozen: 1,
  deleted: 2
};
exports.QAccountStatusChange = QAccountStatusChange;
var QComputeType = {
  skipped: 0,
  vm: 1
};
exports.QComputeType = QComputeType;
var QSkipReason = {
  noState: 0,
  badState: 1,
  noGas: 2
};
exports.QSkipReason = QSkipReason;
var QBounceType = {
  negFunds: 0,
  noFunds: 1,
  ok: 2
};
exports.QBounceType = QBounceType;
var MASTERCHAIN_ID = -1;
var EXTRA_TRANSACTION_WAITING_TIME = 10000;
var BLOCK_TRANSACTION_WAITING_TIME = 5000;

function removeTypeName(obj) {
  if (obj.__typename) {
    delete obj.__typename;
  }

  Object.values(obj).forEach(function (value) {
    if (!!value && _typeof(value) === 'object') {
      removeTypeName(value);
    }
  });
}

function removeProps(obj, paths) {
  var result = obj;
  paths.forEach(function (path) {
    var dotPos = path.indexOf('.');

    if (dotPos < 0) {
      if (path in result) {
        result = _objectSpread({}, result);
        delete result[path];
      }
    } else {
      var name = path.substr(0, dotPos);
      var child = result[name];

      if (child) {
        var reducedChild = removeProps(child, [path.substr(dotPos + 1)]);

        if (reducedChild !== child) {
          result = _objectSpread(_objectSpread({}, result), {}, _defineProperty({}, name, reducedChild));
        }
      }
    }
  });
  return result;
}

function startMessageTraceSpan(tracer, messageId, operationName, tags) {
  if (!messageId) {
    return null;
  }

  var traceId = messageId.substr(0, 16);
  var spanId = messageId.substr(16, 16);
  var rootContext = null;

  try {
    rootContext = tracer.extract(_opentracing.FORMAT_TEXT_MAP, {
      'uber-trace-id': "".concat(traceId, ":").concat(spanId, ":0:1")
    });
  } catch (_unused) {// tracer can't create jaeger compatible span,
    // so we are fallback to return null
  }

  if (!rootContext) {
    return null;
  }

  return tracer.startSpan(operationName, {
    childOf: rootContext,
    tags: tags
  });
}

function traceMessage(tracer, messageId, operationName, tags) {
  var span = startMessageTraceSpan(tracer, messageId, operationName, tags);

  if (span) {
    span.finish();
  }
}

var TONContractsModule = /*#__PURE__*/function (_TONModule) {
  _inherits(TONContractsModule, _TONModule);

  var _super = _createSuper(TONContractsModule);

  function TONContractsModule() {
    var _this;

    _classCallCheck(this, TONContractsModule);

    for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    _this = _super.call.apply(_super, [this].concat(args));

    _defineProperty(_assertThisInitialized(_this), "config", void 0);

    _defineProperty(_assertThisInitialized(_this), "queries", void 0);

    _defineProperty(_assertThisInitialized(_this), "bigBalance", '0x10000000000000');

    return _this;
  }

  _createClass(TONContractsModule, [{
    key: "setup",
    value: function () {
      var _setup = _asyncToGenerator( /*#__PURE__*/_regenerator["default"].mark(function _callee() {
        return _regenerator["default"].wrap(function _callee$(_context) {
          while (1) {
            switch (_context.prev = _context.next) {
              case 0:
                this.config = this.context.getModule(_TONConfigModule["default"]);
                this.queries = this.context.getModule(_TONQueriesModule["default"]);

              case 2:
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
    key: "load",
    value: function () {
      var _load = _asyncToGenerator( /*#__PURE__*/_regenerator["default"].mark(function _callee2(params, parentSpan) {
        var accounts;
        return _regenerator["default"].wrap(function _callee2$(_context2) {
          while (1) {
            switch (_context2.prev = _context2.next) {
              case 0:
                _context2.next = 2;
                return this.queries.accounts.query({
                  filter: {
                    id: {
                      eq: params.address
                    }
                  },
                  result: 'balance',
                  parentSpan: parentSpan
                });

              case 2:
                accounts = _context2.sent;

                if (!(accounts && accounts.length > 0)) {
                  _context2.next = 5;
                  break;
                }

                return _context2.abrupt("return", {
                  id: params.address,
                  balanceGrams: accounts[0].balance
                });

              case 5:
                return _context2.abrupt("return", {
                  id: null,
                  balanceGrams: null
                });

              case 6:
              case "end":
                return _context2.stop();
            }
          }
        }, _callee2, this);
      }));

      function load(_x, _x2) {
        return _load.apply(this, arguments);
      }

      return load;
    }() // Facade functions

  }, {
    key: "deploy",
    value: function () {
      var _deploy = _asyncToGenerator( /*#__PURE__*/_regenerator["default"].mark(function _callee4(params, parentSpan) {
        var _this2 = this;

        return _regenerator["default"].wrap(function _callee4$(_context4) {
          while (1) {
            switch (_context4.prev = _context4.next) {
              case 0:
                return _context4.abrupt("return", this.context.trace('contracts.deploy', /*#__PURE__*/function () {
                  var _ref = _asyncToGenerator( /*#__PURE__*/_regenerator["default"].mark(function _callee3(span) {
                    return _regenerator["default"].wrap(function _callee3$(_context3) {
                      while (1) {
                        switch (_context3.prev = _context3.next) {
                          case 0:
                            span.setTag('params', removeProps(params, ['keyPair.secret']));
                            return _context3.abrupt("return", _this2.internalDeployJs(params, span));

                          case 2:
                          case "end":
                            return _context3.stop();
                        }
                      }
                    }, _callee3);
                  }));

                  return function (_x5) {
                    return _ref.apply(this, arguments);
                  };
                }(), parentSpan));

              case 1:
              case "end":
                return _context4.stop();
            }
          }
        }, _callee4, this);
      }));

      function deploy(_x3, _x4) {
        return _deploy.apply(this, arguments);
      }

      return deploy;
    }()
  }, {
    key: "run",
    value: function () {
      var _run = _asyncToGenerator( /*#__PURE__*/_regenerator["default"].mark(function _callee6(params, parentSpan) {
        var _this3 = this;

        return _regenerator["default"].wrap(function _callee6$(_context6) {
          while (1) {
            switch (_context6.prev = _context6.next) {
              case 0:
                return _context6.abrupt("return", this.context.trace('contracts.run', /*#__PURE__*/function () {
                  var _ref2 = _asyncToGenerator( /*#__PURE__*/_regenerator["default"].mark(function _callee5(span) {
                    return _regenerator["default"].wrap(function _callee5$(_context5) {
                      while (1) {
                        switch (_context5.prev = _context5.next) {
                          case 0:
                            span.setTag('params', removeProps(params, ['keyPair.secret']));
                            return _context5.abrupt("return", _this3.internalRunJs(params, span));

                          case 2:
                          case "end":
                            return _context5.stop();
                        }
                      }
                    }, _callee5);
                  }));

                  return function (_x8) {
                    return _ref2.apply(this, arguments);
                  };
                }(), parentSpan));

              case 1:
              case "end":
                return _context6.stop();
            }
          }
        }, _callee6, this);
      }));

      function run(_x6, _x7) {
        return _run.apply(this, arguments);
      }

      return run;
    }()
  }, {
    key: "runLocal",
    value: function () {
      var _runLocal = _asyncToGenerator( /*#__PURE__*/_regenerator["default"].mark(function _callee8(params, parentSpan) {
        var _this4 = this;

        return _regenerator["default"].wrap(function _callee8$(_context8) {
          while (1) {
            switch (_context8.prev = _context8.next) {
              case 0:
                return _context8.abrupt("return", this.context.trace('contracts.runLocal', /*#__PURE__*/function () {
                  var _ref3 = _asyncToGenerator( /*#__PURE__*/_regenerator["default"].mark(function _callee7(span) {
                    return _regenerator["default"].wrap(function _callee7$(_context7) {
                      while (1) {
                        switch (_context7.prev = _context7.next) {
                          case 0:
                            span.setTag('params', removeProps(params, ['keyPair.secret']));
                            return _context7.abrupt("return", _this4.internalRunLocalJs(params, span));

                          case 2:
                          case "end":
                            return _context7.stop();
                        }
                      }
                    }, _callee7);
                  }));

                  return function (_x11) {
                    return _ref3.apply(this, arguments);
                  };
                }(), parentSpan));

              case 1:
              case "end":
                return _context8.stop();
            }
          }
        }, _callee8, this);
      }));

      function runLocal(_x9, _x10) {
        return _runLocal.apply(this, arguments);
      }

      return runLocal;
    }()
  }, {
    key: "runMessageLocal",
    value: function () {
      var _runMessageLocal = _asyncToGenerator( /*#__PURE__*/_regenerator["default"].mark(function _callee10(params, parentSpan) {
        var _this5 = this;

        return _regenerator["default"].wrap(function _callee10$(_context10) {
          while (1) {
            switch (_context10.prev = _context10.next) {
              case 0:
                return _context10.abrupt("return", this.context.trace('runMessageLocal', /*#__PURE__*/function () {
                  var _ref4 = _asyncToGenerator( /*#__PURE__*/_regenerator["default"].mark(function _callee9(span) {
                    return _regenerator["default"].wrap(function _callee9$(_context9) {
                      while (1) {
                        switch (_context9.prev = _context9.next) {
                          case 0:
                            span.setTag('params', removeProps(params, ['keyPair.secret']));
                            return _context9.abrupt("return", _this5.internalRunMessageLocalJs(params, span));

                          case 2:
                          case "end":
                            return _context9.stop();
                        }
                      }
                    }, _callee9);
                  }));

                  return function (_x14) {
                    return _ref4.apply(this, arguments);
                  };
                }(), parentSpan));

              case 1:
              case "end":
                return _context10.stop();
            }
          }
        }, _callee10, this);
      }));

      function runMessageLocal(_x12, _x13) {
        return _runMessageLocal.apply(this, arguments);
      }

      return runMessageLocal;
    }()
  }, {
    key: "runGet",
    value: function () {
      var _runGet = _asyncToGenerator( /*#__PURE__*/_regenerator["default"].mark(function _callee11(params) {
        var coreParams, hasCode, address, account, paramsFromAccount;
        return _regenerator["default"].wrap(function _callee11$(_context11) {
          while (1) {
            switch (_context11.prev = _context11.next) {
              case 0:
                coreParams = params;
                hasCode = params.bocBase64 || params.codeBase64 && params.dataBase64;

                if (hasCode) {
                  _context11.next = 26;
                  break;
                }

                address = params.address;

                if (address) {
                  _context11.next = 10;
                  break;
                }

                _context11.t0 = _TONClient.TONClientError;
                _context11.next = 8;
                return this.getClientInfo();

              case 8:
                _context11.t1 = _context11.sent;
                throw _context11.t0.addressRequiredForRunLocal.call(_context11.t0, _context11.t1);

              case 10:
                _context11.next = 12;
                return this.getAccount(address, false, {
                  timeout: this.config.waitForTimeout()
                });

              case 12:
                account = _context11.sent;

                if (account.code_hash) {
                  _context11.next = 21;
                  break;
                }

                _context11.t2 = _TONClient.TONClientError;
                _context11.next = 17;
                return this.getClientInfo();

              case 17:
                _context11.t3 = _context11.sent;
                _context11.t4 = address;
                _context11.t5 = account.balance;
                throw _context11.t2.accountCodeMissing.call(_context11.t2, _context11.t3, _context11.t4, _context11.t5);

              case 21:
                paramsFromAccount = {};

                if (account.boc) {
                  paramsFromAccount.bocBase64 = account.boc;
                }

                if (account.last_paid) {
                  paramsFromAccount.last_paid = account.last_paid;
                }

                if (account.balance) {
                  paramsFromAccount.balance = account.balance;
                }

                coreParams = _objectSpread(_objectSpread({}, paramsFromAccount), params);

              case 26:
                return _context11.abrupt("return", this.requestCore('tvm.get', coreParams));

              case 27:
              case "end":
                return _context11.stop();
            }
          }
        }, _callee11, this);
      }));

      function runGet(_x15) {
        return _runGet.apply(this, arguments);
      }

      return runGet;
    }()
  }, {
    key: "arrayFromCONS",
    value: function arrayFromCONS(cons) {
      var result = [];
      var item = cons;

      while (item) {
        if (!item.length === 2) {
          throw _TONClient.TONClientError.invalidCons({
            coreVersion: '',
            configServer: '',
            queryUrl: ''
          });
        }

        result.push(item[0]);
        item = item[1];
      }

      return result;
    } // Message creation

  }, {
    key: "createDeployMessage",
    value: function () {
      var _createDeployMessage = _asyncToGenerator( /*#__PURE__*/_regenerator["default"].mark(function _callee12(params, retryIndex) {
        var message;
        return _regenerator["default"].wrap(function _callee12$(_context12) {
          while (1) {
            switch (_context12.prev = _context12.next) {
              case 0:
                this.config.log('createDeployMessage', params);
                _context12.next = 3;
                return this.requestCore('contracts.deploy.message', {
                  abi: params["package"].abi,
                  constructorHeader: params.constructorHeader,
                  constructorParams: params.constructorParams,
                  initParams: params.initParams,
                  imageBase64: params["package"].imageBase64,
                  keyPair: params.keyPair,
                  workchainId: params.workchainId
                });

              case 3:
                message = _context12.sent;
                return _context12.abrupt("return", {
                  message: message,
                  address: message.address
                });

              case 5:
              case "end":
                return _context12.stop();
            }
          }
        }, _callee12, this);
      }));

      function createDeployMessage(_x16, _x17) {
        return _createDeployMessage.apply(this, arguments);
      }

      return createDeployMessage;
    }()
  }, {
    key: "createRunMessage",
    value: function () {
      var _createRunMessage = _asyncToGenerator( /*#__PURE__*/_regenerator["default"].mark(function _callee13(params, retryIndex) {
        var message;
        return _regenerator["default"].wrap(function _callee13$(_context13) {
          while (1) {
            switch (_context13.prev = _context13.next) {
              case 0:
                this.config.log('createRunMessage', params);
                _context13.next = 3;
                return this.requestCore('contracts.run.message', {
                  address: params.address,
                  abi: params.abi,
                  functionName: params.functionName,
                  header: params.header,
                  tryIndex: retryIndex,
                  input: params.input,
                  keyPair: params.keyPair
                });

              case 3:
                message = _context13.sent;
                return _context13.abrupt("return", {
                  address: params.address,
                  abi: params.abi,
                  functionName: params.functionName,
                  message: message
                });

              case 5:
              case "end":
                return _context13.stop();
            }
          }
        }, _callee13, this);
      }));

      function createRunMessage(_x18, _x19) {
        return _createRunMessage.apply(this, arguments);
      }

      return createRunMessage;
    }()
  }, {
    key: "createUnsignedDeployMessage",
    value: function () {
      var _createUnsignedDeployMessage = _asyncToGenerator( /*#__PURE__*/_regenerator["default"].mark(function _callee14(params, retryIndex) {
        var result;
        return _regenerator["default"].wrap(function _callee14$(_context14) {
          while (1) {
            switch (_context14.prev = _context14.next) {
              case 0:
                _context14.next = 2;
                return this.requestCore('contracts.deploy.encode_unsigned_message', {
                  abi: params["package"].abi,
                  constructorHeader: params.constructorHeader,
                  tryIndex: retryIndex,
                  constructorParams: params.constructorParams,
                  initParams: params.initParams,
                  imageBase64: params["package"].imageBase64,
                  publicKeyHex: params.keyPair["public"],
                  workchainId: params.workchainId
                });

              case 2:
                result = _context14.sent;
                return _context14.abrupt("return", {
                  address: result.addressHex,
                  signParams: _objectSpread(_objectSpread({}, result.encoded), {}, {
                    abi: params["package"].abi
                  })
                });

              case 4:
              case "end":
                return _context14.stop();
            }
          }
        }, _callee14, this);
      }));

      function createUnsignedDeployMessage(_x20, _x21) {
        return _createUnsignedDeployMessage.apply(this, arguments);
      }

      return createUnsignedDeployMessage;
    }()
  }, {
    key: "createUnsignedRunMessage",
    value: function () {
      var _createUnsignedRunMessage = _asyncToGenerator( /*#__PURE__*/_regenerator["default"].mark(function _callee15(params, retryIndex) {
        var signParams;
        return _regenerator["default"].wrap(function _callee15$(_context15) {
          while (1) {
            switch (_context15.prev = _context15.next) {
              case 0:
                _context15.next = 2;
                return this.requestCore('contracts.run.encode_unsigned_message', {
                  address: params.address,
                  abi: params.abi,
                  functionName: params.functionName,
                  header: params.header,
                  tryIndex: retryIndex,
                  input: params.input
                });

              case 2:
                signParams = _context15.sent;
                return _context15.abrupt("return", {
                  address: params.address,
                  functionName: params.functionName,
                  signParams: _objectSpread(_objectSpread({}, signParams), {}, {
                    abi: params.abi
                  })
                });

              case 4:
              case "end":
                return _context15.stop();
            }
          }
        }, _callee15, this);
      }));

      function createUnsignedRunMessage(_x22, _x23) {
        return _createUnsignedRunMessage.apply(this, arguments);
      }

      return createUnsignedRunMessage;
    }()
  }, {
    key: "createSignedMessage",
    value: function () {
      var _createSignedMessage = _asyncToGenerator( /*#__PURE__*/_regenerator["default"].mark(function _callee16(params) {
        return _regenerator["default"].wrap(function _callee16$(_context16) {
          while (1) {
            switch (_context16.prev = _context16.next) {
              case 0:
                return _context16.abrupt("return", this.requestCore('contracts.encode_message_with_sign', params));

              case 1:
              case "end":
                return _context16.stop();
            }
          }
        }, _callee16, this);
      }));

      function createSignedMessage(_x24) {
        return _createSignedMessage.apply(this, arguments);
      }

      return createSignedMessage;
    }()
  }, {
    key: "createSignedDeployMessage",
    value: function () {
      var _createSignedDeployMessage = _asyncToGenerator( /*#__PURE__*/_regenerator["default"].mark(function _callee17(params) {
        var message;
        return _regenerator["default"].wrap(function _callee17$(_context17) {
          while (1) {
            switch (_context17.prev = _context17.next) {
              case 0:
                _context17.next = 2;
                return this.createSignedMessage({
                  abi: params.unsignedMessage.signParams.abi,
                  unsignedBytesBase64: params.unsignedMessage.signParams.unsignedBytesBase64,
                  signBytesBase64: params.signBytesBase64,
                  publicKeyHex: params.publicKeyHex
                });

              case 2:
                message = _context17.sent;
                message.expire = params.unsignedMessage.signParams.expire;
                return _context17.abrupt("return", {
                  address: params.unsignedMessage.address,
                  message: message
                });

              case 5:
              case "end":
                return _context17.stop();
            }
          }
        }, _callee17, this);
      }));

      function createSignedDeployMessage(_x25) {
        return _createSignedDeployMessage.apply(this, arguments);
      }

      return createSignedDeployMessage;
    }()
  }, {
    key: "createSignedRunMessage",
    value: function () {
      var _createSignedRunMessage = _asyncToGenerator( /*#__PURE__*/_regenerator["default"].mark(function _callee18(params) {
        var message;
        return _regenerator["default"].wrap(function _callee18$(_context18) {
          while (1) {
            switch (_context18.prev = _context18.next) {
              case 0:
                _context18.next = 2;
                return this.createSignedMessage({
                  abi: params.unsignedMessage.signParams.abi,
                  unsignedBytesBase64: params.unsignedMessage.signParams.unsignedBytesBase64,
                  signBytesBase64: params.signBytesBase64,
                  publicKeyHex: params.publicKeyHex
                });

              case 2:
                message = _context18.sent;
                message.expire = params.unsignedMessage.signParams.expire;
                return _context18.abrupt("return", {
                  address: params.unsignedMessage.address,
                  abi: params.unsignedMessage.signParams.abi,
                  functionName: params.unsignedMessage.functionName,
                  message: message
                });

              case 5:
              case "end":
                return _context18.stop();
            }
          }
        }, _callee18, this);
      }));

      function createSignedRunMessage(_x26) {
        return _createSignedRunMessage.apply(this, arguments);
      }

      return createSignedRunMessage;
    }()
  }, {
    key: "getCodeFromImage",
    value: function () {
      var _getCodeFromImage = _asyncToGenerator( /*#__PURE__*/_regenerator["default"].mark(function _callee19(params) {
        return _regenerator["default"].wrap(function _callee19$(_context19) {
          while (1) {
            switch (_context19.prev = _context19.next) {
              case 0:
                return _context19.abrupt("return", this.requestCore('contracts.image.code', params));

              case 1:
              case "end":
                return _context19.stop();
            }
          }
        }, _callee19, this);
      }));

      function getCodeFromImage(_x27) {
        return _getCodeFromImage.apply(this, arguments);
      }

      return getCodeFromImage;
    }()
  }, {
    key: "getDeployData",
    value: function () {
      var _getDeployData = _asyncToGenerator( /*#__PURE__*/_regenerator["default"].mark(function _callee20(params) {
        return _regenerator["default"].wrap(function _callee20$(_context20) {
          while (1) {
            switch (_context20.prev = _context20.next) {
              case 0:
                return _context20.abrupt("return", this.requestCore('contracts.deploy.data', params));

              case 1:
              case "end":
                return _context20.stop();
            }
          }
        }, _callee20, this);
      }));

      function getDeployData(_x28) {
        return _getDeployData.apply(this, arguments);
      }

      return getDeployData;
    }()
  }, {
    key: "createRunBody",
    value: function () {
      var _createRunBody = _asyncToGenerator( /*#__PURE__*/_regenerator["default"].mark(function _callee21(params) {
        return _regenerator["default"].wrap(function _callee21$(_context21) {
          while (1) {
            switch (_context21.prev = _context21.next) {
              case 0:
                return _context21.abrupt("return", this.requestCore('contracts.run.body', params));

              case 1:
              case "end":
                return _context21.stop();
            }
          }
        }, _callee21, this);
      }));

      function createRunBody(_x29) {
        return _createRunBody.apply(this, arguments);
      }

      return createRunBody;
    }()
  }, {
    key: "getFunctionId",
    value: function () {
      var _getFunctionId = _asyncToGenerator( /*#__PURE__*/_regenerator["default"].mark(function _callee22(params) {
        return _regenerator["default"].wrap(function _callee22$(_context22) {
          while (1) {
            switch (_context22.prev = _context22.next) {
              case 0:
                return _context22.abrupt("return", this.requestCore('contracts.function.id', params));

              case 1:
              case "end":
                return _context22.stop();
            }
          }
        }, _callee22, this);
      }));

      function getFunctionId(_x30) {
        return _getFunctionId.apply(this, arguments);
      }

      return getFunctionId;
    }()
  }, {
    key: "getBocHash",
    value: function () {
      var _getBocHash = _asyncToGenerator( /*#__PURE__*/_regenerator["default"].mark(function _callee23(params) {
        return _regenerator["default"].wrap(function _callee23$(_context23) {
          while (1) {
            switch (_context23.prev = _context23.next) {
              case 0:
                return _context23.abrupt("return", this.requestCore('contracts.boc.hash', params));

              case 1:
              case "end":
                return _context23.stop();
            }
          }
        }, _callee23, this);
      }));

      function getBocHash(_x31) {
        return _getBocHash.apply(this, arguments);
      }

      return getBocHash;
    }()
  }, {
    key: "parseMessage",
    value: function () {
      var _parseMessage = _asyncToGenerator( /*#__PURE__*/_regenerator["default"].mark(function _callee24(params) {
        return _regenerator["default"].wrap(function _callee24$(_context24) {
          while (1) {
            switch (_context24.prev = _context24.next) {
              case 0:
                return _context24.abrupt("return", this.requestCore('contracts.parse.message', params));

              case 1:
              case "end":
                return _context24.stop();
            }
          }
        }, _callee24, this);
      }));

      function parseMessage(_x32) {
        return _parseMessage.apply(this, arguments);
      }

      return parseMessage;
    }() // Message parsing

  }, {
    key: "decodeRunOutput",
    value: function () {
      var _decodeRunOutput = _asyncToGenerator( /*#__PURE__*/_regenerator["default"].mark(function _callee25(params) {
        return _regenerator["default"].wrap(function _callee25$(_context25) {
          while (1) {
            switch (_context25.prev = _context25.next) {
              case 0:
                return _context25.abrupt("return", this.requestCore('contracts.run.output', params));

              case 1:
              case "end":
                return _context25.stop();
            }
          }
        }, _callee25, this);
      }));

      function decodeRunOutput(_x33) {
        return _decodeRunOutput.apply(this, arguments);
      }

      return decodeRunOutput;
    }()
  }, {
    key: "decodeInputMessageBody",
    value: function () {
      var _decodeInputMessageBody = _asyncToGenerator( /*#__PURE__*/_regenerator["default"].mark(function _callee26(params) {
        return _regenerator["default"].wrap(function _callee26$(_context26) {
          while (1) {
            switch (_context26.prev = _context26.next) {
              case 0:
                return _context26.abrupt("return", this.requestCore('contracts.run.unknown.input', params));

              case 1:
              case "end":
                return _context26.stop();
            }
          }
        }, _callee26, this);
      }));

      function decodeInputMessageBody(_x34) {
        return _decodeInputMessageBody.apply(this, arguments);
      }

      return decodeInputMessageBody;
    }()
  }, {
    key: "decodeOutputMessageBody",
    value: function () {
      var _decodeOutputMessageBody = _asyncToGenerator( /*#__PURE__*/_regenerator["default"].mark(function _callee27(params) {
        return _regenerator["default"].wrap(function _callee27$(_context27) {
          while (1) {
            switch (_context27.prev = _context27.next) {
              case 0:
                return _context27.abrupt("return", this.requestCore('contracts.run.unknown.output', params));

              case 1:
              case "end":
                return _context27.stop();
            }
          }
        }, _callee27, this);
      }));

      function decodeOutputMessageBody(_x35) {
        return _decodeOutputMessageBody.apply(this, arguments);
      }

      return decodeOutputMessageBody;
    }() // Message processing

  }, {
    key: "ensureMessageId",
    value: function () {
      var _ensureMessageId = _asyncToGenerator( /*#__PURE__*/_regenerator["default"].mark(function _callee29(message) {
        var _this6 = this;

        return _regenerator["default"].wrap(function _callee29$(_context29) {
          while (1) {
            switch (_context29.prev = _context29.next) {
              case 0:
                _context29.t0 = message.messageId;

                if (_context29.t0) {
                  _context29.next = 5;
                  break;
                }

                _context29.next = 4;
                return _asyncToGenerator( /*#__PURE__*/_regenerator["default"].mark(function _callee28() {
                  var id;
                  return _regenerator["default"].wrap(function _callee28$(_context28) {
                    while (1) {
                      switch (_context28.prev = _context28.next) {
                        case 0:
                          _context28.next = 2;
                          return _this6.getBocHash({
                            bocBase64: message.messageBodyBase64
                          });

                        case 2:
                          id = _context28.sent.hash;
                          message.messageId = id;
                          return _context28.abrupt("return", id);

                        case 5:
                        case "end":
                          return _context28.stop();
                      }
                    }
                  }, _callee28);
                }))();

              case 4:
                _context29.t0 = _context29.sent;

              case 5:
                return _context29.abrupt("return", _context29.t0);

              case 6:
              case "end":
                return _context29.stop();
            }
          }
        }, _callee29);
      }));

      function ensureMessageId(_x36) {
        return _ensureMessageId.apply(this, arguments);
      }

      return ensureMessageId;
    }()
  }, {
    key: "sendMessage",
    value: function () {
      var _sendMessage = _asyncToGenerator( /*#__PURE__*/_regenerator["default"].mark(function _callee30(params, parentSpan) {
        var expire, serverTimeDelta, lastBlockId, id, idBase64, messageSpan;
        return _regenerator["default"].wrap(function _callee30$(_context30) {
          while (1) {
            switch (_context30.prev = _context30.next) {
              case 0:
                expire = params.expire;

                if (!(expire && Date.now() > expire * 1000)) {
                  _context30.next = 7;
                  break;
                }

                _context30.t0 = _TONClient.TONClientError;
                _context30.next = 5;
                return this.getClientInfo();

              case 5:
                _context30.t1 = _context30.sent;
                throw _context30.t0.sendNodeRequestFailed.call(_context30.t0, _context30.t1, 'Message already expired');

              case 7:
                _context30.t2 = Math;
                _context30.next = 10;
                return this.queries.serverTimeDelta(parentSpan);

              case 10:
                _context30.t3 = _context30.sent;
                serverTimeDelta = _context30.t2.abs.call(_context30.t2, _context30.t3);

                if (!(serverTimeDelta > this.config.outOfSyncThreshold())) {
                  _context30.next = 19;
                  break;
                }

                this.queries.dropServerTimeDelta();
                _context30.t4 = _TONClient.TONClientError;
                _context30.next = 17;
                return this.getClientInfo();

              case 17:
                _context30.t5 = _context30.sent;
                throw _context30.t4.clockOutOfSync.call(_context30.t4, _context30.t5);

              case 19:
                _context30.next = 21;
                return this.findLastShardBlock(params.address);

              case 21:
                lastBlockId = _context30.sent;
                _context30.next = 24;
                return this.ensureMessageId(params);

              case 24:
                id = _context30.sent;
                idBase64 = Buffer.from(id, 'hex').toString('base64');
                messageSpan = this.context.startRootSpan(id.substr(0, 16), id.substr(16, 16), 'messageProcessing');
                messageSpan.addTags({
                  messageId: id,
                  messageSize: Math.ceil(params.messageBodyBase64.length * 3 / 4),
                  address: params.address,
                  expire: params.expire
                });
                _context30.next = 30;
                return this.queries.postRequests([{
                  id: idBase64,
                  body: params.messageBodyBase64
                }], parentSpan);

              case 30:
                messageSpan.finish();
                this.config.log('sendMessage. Request posted', id);
                return _context30.abrupt("return", {
                  lastBlockId: lastBlockId,
                  sendingTime: Math.round(Date.now() / 1000)
                });

              case 33:
              case "end":
                return _context30.stop();
            }
          }
        }, _callee30, this);
      }));

      function sendMessage(_x37, _x38) {
        return _sendMessage.apply(this, arguments);
      }

      return sendMessage;
    }()
  }, {
    key: "processMessage",
    value: function () {
      var _processMessage = _asyncToGenerator( /*#__PURE__*/_regenerator["default"].mark(function _callee31(message, resultFields, parentSpan, retryIndex, address, abi, functionName) {
        var processing, _yield$this$waitForTr, transaction;

        return _regenerator["default"].wrap(function _callee31$(_context31) {
          while (1) {
            switch (_context31.prev = _context31.next) {
              case 0:
                _context31.next = 2;
                return this.sendMessage(message, parentSpan);

              case 2:
                processing = _context31.sent;
                _context31.next = 5;
                return this.waitForTransaction({
                  message: message,
                  messageProcessingState: processing,
                  parentSpan: parentSpan,
                  abi: abi,
                  functionName: functionName
                });

              case 5:
                _yield$this$waitForTr = _context31.sent;
                transaction = _yield$this$waitForTr.transaction;
                return _context31.abrupt("return", transaction);

              case 8:
              case "end":
                return _context31.stop();
            }
          }
        }, _callee31, this);
      }));

      function processMessage(_x39, _x40, _x41, _x42, _x43, _x44, _x45) {
        return _processMessage.apply(this, arguments);
      }

      return processMessage;
    }()
  }, {
    key: "findLastBlock",
    value: function () {
      var _findLastBlock = _asyncToGenerator( /*#__PURE__*/_regenerator["default"].mark(function _callee32(chain, result, additionalFilter) {
        var blocks;
        return _regenerator["default"].wrap(function _callee32$(_context32) {
          while (1) {
            switch (_context32.prev = _context32.next) {
              case 0:
                _context32.next = 2;
                return this.queries.blocks.query({
                  filter: _objectSpread({
                    workchain_id: {
                      eq: chain
                    }
                  }, additionalFilter || {}),
                  result: result,
                  orderBy: [{
                    path: 'seq_no',
                    direction: 'DESC'
                  }],
                  limit: 1
                });

              case 2:
                blocks = _context32.sent;
                return _context32.abrupt("return", blocks.length > 0 ? blocks[0] : null);

              case 4:
              case "end":
                return _context32.stop();
            }
          }
        }, _callee32, this);
      }));

      function findLastBlock(_x46, _x47, _x48) {
        return _findLastBlock.apply(this, arguments);
      }

      return findLastBlock;
    }()
  }, {
    key: "findMatchingShard",
    value: function () {
      var _findMatchingShard = _asyncToGenerator( /*#__PURE__*/_regenerator["default"].mark(function _callee33(shards, address) {
        return _regenerator["default"].wrap(function _callee33$(_context33) {
          while (1) {
            switch (_context33.prev = _context33.next) {
              case 0:
                return _context33.abrupt("return", this.requestCore('contracts.find.shard', {
                  shards: shards,
                  address: address
                }));

              case 1:
              case "end":
                return _context33.stop();
            }
          }
        }, _callee33, this);
      }));

      function findMatchingShard(_x49, _x50) {
        return _findMatchingShard.apply(this, arguments);
      }

      return findMatchingShard;
    }()
  }, {
    key: "findLastShardBlock",
    value: function () {
      var _findLastShardBlock = _asyncToGenerator( /*#__PURE__*/_regenerator["default"].mark(function _callee34(address) {
        var _masterchainLastBlock, _shardBlock$descr;

        var addressParts, workchain, masterchainLastBlock, workchainLastBlock, shards, shardBlock, root_hash;
        return _regenerator["default"].wrap(function _callee34$(_context34) {
          while (1) {
            switch (_context34.prev = _context34.next) {
              case 0:
                addressParts = address.split(':');
                workchain = addressParts.length > 1 ? Number.parseInt(addressParts[0], 10) : 0; // if account resides in master chain then starting point is last master chain block
                // generated before message was sent

                _context34.next = 4;
                return this.findLastBlock(MASTERCHAIN_ID, 'id master { shard_hashes { workchain_id shard descr { root_hash } } }');

              case 4:
                masterchainLastBlock = _context34.sent;

                if (!(workchain === MASTERCHAIN_ID)) {
                  _context34.next = 14;
                  break;
                }

                if (masterchainLastBlock) {
                  _context34.next = 13;
                  break;
                }

                _context34.t0 = _TONClient.TONClientError;
                _context34.next = 10;
                return this.getClientInfo();

              case 10:
                _context34.t1 = _context34.sent;
                _context34.t2 = MASTERCHAIN_ID;
                throw _context34.t0.noBlocks.call(_context34.t0, _context34.t1, _context34.t2);

              case 13:
                return _context34.abrupt("return", masterchainLastBlock.id);

              case 14:
                if (masterchainLastBlock) {
                  _context34.next = 42;
                  break;
                }

                _context34.next = 17;
                return this.findLastBlock(workchain, 'after_merge shard');

              case 17:
                workchainLastBlock = _context34.sent;

                if (workchainLastBlock) {
                  _context34.next = 25;
                  break;
                }

                _context34.t3 = _TONClient.TONClientError;
                _context34.next = 22;
                return this.getClientInfo();

              case 22:
                _context34.t4 = _context34.sent;
                _context34.t5 = workchain;
                throw _context34.t3.noBlocks.call(_context34.t3, _context34.t4, _context34.t5);

              case 25:
                if (!(workchainLastBlock.after_merge || workchainLastBlock.shard !== '8000000000000000')) {
                  _context34.next = 32;
                  break;
                }

                _context34.t6 = _TONClient.TONClientError;
                _context34.next = 29;
                return this.getClientInfo();

              case 29:
                _context34.t7 = _context34.sent;
                _context34.t8 = MASTERCHAIN_ID;
                throw _context34.t6.noBlocks.call(_context34.t6, _context34.t7, _context34.t8);

              case 32:
                _context34.next = 34;
                return this.findLastBlock(workchain, 'id', {
                  shard: {
                    eq: '8000000000000000'
                  }
                });

              case 34:
                workchainLastBlock = _context34.sent;

                if (workchainLastBlock) {
                  _context34.next = 41;
                  break;
                }

                _context34.t9 = _TONClient.TONClientError;
                _context34.next = 39;
                return this.getClientInfo();

              case 39:
                _context34.t10 = _context34.sent;
                throw _context34.t9.invalidBlockchain.call(_context34.t9, _context34.t10, 'No starting Node SE block found');

              case 41:
                return _context34.abrupt("return", workchainLastBlock.id);

              case 42:
                shards = masterchainLastBlock === null || masterchainLastBlock === void 0 ? void 0 : (_masterchainLastBlock = masterchainLastBlock.master) === null || _masterchainLastBlock === void 0 ? void 0 : _masterchainLastBlock.shard_hashes;

                if (!(!shards || shards.length === 0)) {
                  _context34.next = 49;
                  break;
                }

                _context34.t11 = _TONClient.TONClientError;
                _context34.next = 47;
                return this.getClientInfo();

              case 47:
                _context34.t12 = _context34.sent;
                throw _context34.t11.invalidBlockchain.call(_context34.t11, _context34.t12, 'No `shard_hashes` field in masterchain block');

              case 49:
                _context34.next = 51;
                return this.findMatchingShard(shards, address);

              case 51:
                shardBlock = _context34.sent;
                root_hash = shardBlock === null || shardBlock === void 0 ? void 0 : (_shardBlock$descr = shardBlock.descr) === null || _shardBlock$descr === void 0 ? void 0 : _shardBlock$descr.root_hash;

                if (root_hash) {
                  _context34.next = 59;
                  break;
                }

                _context34.t13 = _TONClient.TONClientError;
                _context34.next = 57;
                return this.getClientInfo();

              case 57:
                _context34.t14 = _context34.sent;
                throw _context34.t13.invalidBlockchain.call(_context34.t13, _context34.t14, 'No `root_hash` field in shard descr');

              case 59:
                return _context34.abrupt("return", root_hash);

              case 60:
              case "end":
                return _context34.stop();
            }
          }
        }, _callee34, this);
      }));

      function findLastShardBlock(_x51) {
        return _findLastShardBlock.apply(this, arguments);
      }

      return findLastShardBlock;
    }()
  }, {
    key: "checkShardMatch",
    value: function () {
      var _checkShardMatch = _asyncToGenerator( /*#__PURE__*/_regenerator["default"].mark(function _callee35(block, address) {
        return _regenerator["default"].wrap(function _callee35$(_context35) {
          while (1) {
            switch (_context35.prev = _context35.next) {
              case 0:
                _context35.next = 2;
                return this.findMatchingShard([{
                  workchain_id: block.workchain_id || 0,
                  shard: block.shard || ''
                }], address);

              case 2:
                return _context35.abrupt("return", !!_context35.sent);

              case 3:
              case "end":
                return _context35.stop();
            }
          }
        }, _callee35, this);
      }));

      function checkShardMatch(_x52, _x53) {
        return _checkShardMatch.apply(this, arguments);
      }

      return checkShardMatch;
    }()
  }, {
    key: "waitNextBlock",
    value: function () {
      var _waitNextBlock = _asyncToGenerator( /*#__PURE__*/_regenerator["default"].mark(function _callee36(current, address, timeout) {
        var block;
        return _regenerator["default"].wrap(function _callee36$(_context36) {
          while (1) {
            switch (_context36.prev = _context36.next) {
              case 0:
                _context36.next = 2;
                return this.queries.blocks.waitFor({
                  filter: {
                    prev_ref: {
                      root_hash: {
                        eq: current
                      }
                    },
                    OR: {
                      prev_alt_ref: {
                        root_hash: {
                          eq: current
                        }
                      }
                    }
                  },
                  result: BLOCK_FIELDS,
                  timeout: timeout
                });

              case 2:
                block = _context36.sent;
                _context36.t0 = block === null || block === void 0 ? void 0 : block.after_split;

                if (!_context36.t0) {
                  _context36.next = 8;
                  break;
                }

                _context36.next = 7;
                return this.checkShardMatch(block, address);

              case 7:
                _context36.t0 = !_context36.sent;

              case 8:
                if (!_context36.t0) {
                  _context36.next = 10;
                  break;
                }

                return _context36.abrupt("return", this.queries.blocks.waitFor({
                  filter: {
                    id: {
                      ne: block.id
                    },
                    prev_ref: {
                      root_hash: {
                        eq: current
                      }
                    }
                  },
                  result: BLOCK_FIELDS,
                  timeout: timeout
                }));

              case 10:
                return _context36.abrupt("return", block);

              case 11:
              case "end":
                return _context36.stop();
            }
          }
        }, _callee36, this);
      }));

      function waitNextBlock(_x54, _x55, _x56) {
        return _waitNextBlock.apply(this, arguments);
      }

      return waitNextBlock;
    }()
  }, {
    key: "waitForTransaction",
    value: function () {
      var _waitForTransaction = _asyncToGenerator( /*#__PURE__*/_regenerator["default"].mark(function _callee37(params) {
        var totalStart, expire, messageId, address, processing, transaction, timeReport, stopTime, infiniteWait, addTimeout, now, timeout, block, start, end, resolvedError, inMsg, transactionId, trStart;
        return _regenerator["default"].wrap(function _callee37$(_context37) {
          while (1) {
            switch (_context37.prev = _context37.next) {
              case 0:
                // const legacyStart = Date.now();
                // const result = await this.legacyWaitForTransaction(params);
                // console.log('>>>', `Legacy wait for a: ${Date.now() - legacyStart} ms`);
                // return result;
                totalStart = Date.now();
                expire = params.message.expire || 0;
                _context37.next = 4;
                return this.ensureMessageId(params.message);

              case 4:
                messageId = _context37.sent;
                address = params.message.address;
                processing = _objectSpread({}, params.messageProcessingState);
                transaction = null;
                _context37.prev = 8;
                timeReport = [];
                stopTime = expire || Math.round((Date.now() + this.config.messageProcessingTimeout()) / 1000);
                infiniteWait = params.infiniteWait !== false;
                addTimeout = this.config.messageProcessingTimeout();

              case 13:
                if (transaction) {
                  _context37.next = 76;
                  break;
                }

                now = Date.now();
                timeout = Math.max(stopTime, now) - now + addTimeout;
                block = null;
                _context37.prev = 17;
                start = Date.now();
                _context37.next = 21;
                return this.waitNextBlock(processing.lastBlockId, address, timeout);

              case 21:
                block = _context37.sent;
                end = Date.now();
                timeReport.push("Block [".concat(block.id || '', "] has been received: ").concat(end - start, " ms, client time: ").concat(Math.round(end / 1000), ", gen_utime: ").concat(block.gen_utime || 0));
                _context37.next = 40;
                break;

              case 26:
                _context37.prev = 26;
                _context37.t0 = _context37["catch"](17);
                this.config.log('Block waiting failed: ', _context37.t0);

                if (infiniteWait) {
                  _context37.next = 39;
                  break;
                }

                resolvedError = _context37.t0;

                if (!(_context37.t0.code === _TONClient.TONErrorCode.WAIT_FOR_TIMEOUT)) {
                  _context37.next = 38;
                  break;
                }

                _context37.t1 = _TONClient.TONClientError;
                _context37.next = 35;
                return this.getClientInfo();

              case 35:
                _context37.t2 = _context37.sent;
                _context37.t3 = {
                  messageId: messageId,
                  blockId: processing.lastBlockId,
                  timeout: timeout,
                  messageProcessingState: processing,
                  expire: expire,
                  sendingTime: processing.sendingTime
                };
                resolvedError = _context37.t1.networkSilent.call(_context37.t1, _context37.t2, _context37.t3);

              case 38:
                throw resolvedError;

              case 39:
                this.config.log('Retry waiting.');

              case 40:
                if (!block) {
                  _context37.next = 74;
                  break;
                }

                processing.lastBlockId = block.id || '';
                inMsg = (block.in_msg_descr || []).find(function (x) {
                  return x.msg_id === messageId;
                });

                if (!inMsg) {
                  _context37.next = 59;
                  break;
                }

                transactionId = inMsg.transaction_id;

                if (transactionId) {
                  _context37.next = 51;
                  break;
                }

                _context37.t4 = _TONClient.TONClientError;
                _context37.next = 49;
                return this.getClientInfo();

              case 49:
                _context37.t5 = _context37.sent;
                throw _context37.t4.invalidBlockchain.call(_context37.t4, _context37.t5, 'No field `transaction_id` in block');

              case 51:
                trStart = Date.now();
                _context37.next = 54;
                return this.queries.transactions.waitFor({
                  filter: {
                    id: {
                      eq: transactionId
                    }
                  },
                  result: TRANSACTION_FIELDS_ORDINARY,
                  timeout: _TONQueriesModule.MAX_TIMEOUT
                });

              case 54:
                transaction = _context37.sent;
                traceMessage(this.config.tracer, messageId, 'transactionReceived', {
                  transactionId: transactionId
                });
                timeReport.push("Transaction [".concat(transactionId, "] has been received: ").concat(Date.now() - trStart, " ms"));
                _context37.next = 74;
                break;

              case 59:
                if (!((block.gen_utime || 0) > stopTime)) {
                  _context37.next = 74;
                  break;
                }

                if (!expire) {
                  _context37.next = 68;
                  break;
                }

                traceMessage(this.config.tracer, messageId, 'messageExpired', {});
                _context37.t6 = _TONClient.TONClientError;
                _context37.next = 65;
                return this.getClientInfo();

              case 65:
                _context37.t7 = _context37.sent;
                _context37.t8 = {
                  messageId: messageId,
                  sendingTime: processing.sendingTime,
                  expire: stopTime,
                  blockTime: block.gen_utime,
                  blockId: processing.lastBlockId
                };
                throw _context37.t6.messageExpired.call(_context37.t6, _context37.t7, _context37.t8);

              case 68:
                _context37.t9 = _TONClient.TONClientError;
                _context37.next = 71;
                return this.getClientInfo();

              case 71:
                _context37.t10 = _context37.sent;
                _context37.t11 = {
                  messageId: messageId,
                  sendingTime: processing.sendingTime,
                  timeout: timeout,
                  messageProcessingState: processing
                };
                throw _context37.t9.transactionWaitTimeout.call(_context37.t9, _context37.t10, _context37.t11);

              case 74:
                _context37.next = 13;
                break;

              case 76:
                timeReport.splice(0, 0, "Transaction waiting time: ".concat(Date.now() - totalStart, " ms"));
                this.config.log(timeReport.join('\n'));
                _context37.next = 90;
                break;

              case 80:
                _context37.prev = 80;
                _context37.t12 = _context37["catch"](8);
                this.config.log('[waitForTransaction]', 'FAILED', _context37.t12);

                if (!(_context37.t12.code === _TONClient.TONErrorCode.MESSAGE_EXPIRED || _context37.t12.code === _TONClient.TONErrorCode.TRANSACTION_WAIT_TIMEOUT)) {
                  _context37.next = 89;
                  break;
                }

                _context37.next = 86;
                return this.resolveDetailedError(_context37.t12, params.message.messageBodyBase64, processing.sendingTime, address);

              case 86:
                throw _context37.sent;

              case 89:
                throw _context37.t12;

              case 90:
                return _context37.abrupt("return", this.processTransaction(address, transaction, params.abi, params.functionName));

              case 91:
              case "end":
                return _context37.stop();
            }
          }
        }, _callee37, this, [[8, 80], [17, 26]]);
      }));

      function waitForTransaction(_x57) {
        return _waitForTransaction.apply(this, arguments);
      }

      return waitForTransaction;
    }()
  }, {
    key: "legacyWaitForTransaction",
    value: function () {
      var _legacyWaitForTransaction = _asyncToGenerator( /*#__PURE__*/_regenerator["default"].mark(function _callee40(params) {
        var _this7 = this;

        var message, abi, functionName, parentSpan, messageId, config, processingTimeout, promises, serverInfo, operationId, transaction, sendingTime, blockTime, expire, blockTimeout, waitExpired, transactionNow, _error$data, detailedError, messageProcessingState, _yield$this$processTr, output, fees;

        return _regenerator["default"].wrap(function _callee40$(_context40) {
          while (1) {
            switch (_context40.prev = _context40.next) {
              case 0:
                message = params.message, abi = params.abi, functionName = params.functionName, parentSpan = params.parentSpan;
                _context40.next = 3;
                return this.ensureMessageId(message);

              case 3:
                messageId = _context40.sent;
                config = this.config;
                config.log('[waitForTransaction]', functionName, message);
                processingTimeout = config.messageProcessingTimeout();
                promises = [];
                _context40.next = 10;
                return this.queries.getServerInfo(parentSpan);

              case 10:
                serverInfo = _context40.sent;
                operationId = serverInfo.supportsOperationId ? this.queries.generateOperationId() : undefined;
                transaction = null;
                sendingTime = Math.round(Date.now() / 1000);
                blockTime = null;
                _context40.prev = 15;
                expire = message.expire;

                if (expire) {
                  // calculate timeout according to `expire` value (in seconds)
                  // add processing timeout as master block validation time
                  blockTimeout = expire * 1000 - Date.now() + processingTimeout; // transaction timeout must be greater then block timeout

                  processingTimeout = blockTimeout + EXTRA_TRANSACTION_WAITING_TIME;

                  waitExpired = /*#__PURE__*/function () {
                    var _ref6 = _asyncToGenerator( /*#__PURE__*/_regenerator["default"].mark(function _callee38() {
                      var _block$in_msg_descr$f;

                      var block, transactionId;
                      return _regenerator["default"].wrap(function _callee38$(_context38) {
                        while (1) {
                          switch (_context38.prev = _context38.next) {
                            case 0:
                              // wait for block, produced after `expire` to guarantee that message is rejected
                              block = null;
                              _context38.prev = 1;
                              _context38.next = 4;
                              return _this7.queries.blocks.waitFor({
                                filter: {
                                  master: {
                                    min_shard_gen_utime: {
                                      ge: expire
                                    }
                                  }
                                },
                                result: 'id gen_utime in_msg_descr { transaction_id }',
                                timeout: blockTimeout,
                                parentSpan: parentSpan,
                                operationId: operationId
                              });

                            case 4:
                              block = _context38.sent;
                              _context38.next = 19;
                              break;

                            case 7:
                              _context38.prev = 7;
                              _context38.t0 = _context38["catch"](1);

                              if (!_TONClient.TONClientError.isWaitForTimeout(_context38.t0)) {
                                _context38.next = 18;
                                break;
                              }

                              _context38.t1 = _TONClient.TONClientError;
                              _context38.next = 13;
                              return _this7.getClientInfo();

                            case 13:
                              _context38.t2 = _context38.sent;
                              _context38.t3 = {
                                messageId: messageId,
                                sendingTime: sendingTime,
                                expire: expire,
                                timeout: blockTimeout
                              };
                              throw _context38.t1.networkSilent.call(_context38.t1, _context38.t2, _context38.t3);

                            case 18:
                              throw _context38.t0;

                            case 19:
                              if (!transaction) {
                                _context38.next = 21;
                                break;
                              }

                              return _context38.abrupt("return");

                            case 21:
                              transactionId = block.in_msg_descr && ((_block$in_msg_descr$f = block.in_msg_descr.find(function (msg) {
                                return !!msg.transaction_id;
                              })) === null || _block$in_msg_descr$f === void 0 ? void 0 : _block$in_msg_descr$f.transaction_id);

                              if (transactionId) {
                                _context38.next = 28;
                                break;
                              }

                              _context38.t4 = _TONClient.TONClientError;
                              _context38.next = 26;
                              return _this7.getClientInfo();

                            case 26:
                              _context38.t5 = _context38.sent;
                              throw _context38.t4.internalError.call(_context38.t4, _context38.t5, 'Invalid block received: no transaction ID');

                            case 28:
                              _context38.prev = 28;
                              _context38.next = 31;
                              return _this7.queries.transactions.waitFor({
                                filter: {
                                  id: {
                                    eq: transactionId
                                  }
                                },
                                result: 'id',
                                timeout: BLOCK_TRANSACTION_WAITING_TIME,
                                parentSpan: parentSpan,
                                operationId: operationId
                              });

                            case 31:
                              _context38.next = 45;
                              break;

                            case 33:
                              _context38.prev = 33;
                              _context38.t6 = _context38["catch"](28);

                              if (!_TONClient.TONClientError.isWaitForTimeout(_context38.t6)) {
                                _context38.next = 44;
                                break;
                              }

                              _context38.t7 = _TONClient.TONClientError;
                              _context38.next = 39;
                              return _this7.getClientInfo();

                            case 39:
                              _context38.t8 = _context38.sent;
                              _context38.t9 = {
                                messageId: messageId,
                                blockId: block.id,
                                transactionId: transactionId,
                                timeout: BLOCK_TRANSACTION_WAITING_TIME,
                                sendingTime: sendingTime,
                                expire: expire
                              };
                              throw _context38.t7.networkSilent.call(_context38.t7, _context38.t8, _context38.t9);

                            case 44:
                              throw _context38.t6;

                            case 45:
                              blockTime = block.gen_utime;

                            case 46:
                            case "end":
                              return _context38.stop();
                          }
                        }
                      }, _callee38, null, [[1, 7], [28, 33]]);
                    }));

                    return function waitExpired() {
                      return _ref6.apply(this, arguments);
                    };
                  }();

                  promises.push(waitExpired());
                } // wait for message processing transaction


                promises.push(new Promise(function (resolve, reject) {
                  _asyncToGenerator( /*#__PURE__*/_regenerator["default"].mark(function _callee39() {
                    return _regenerator["default"].wrap(function _callee39$(_context39) {
                      while (1) {
                        switch (_context39.prev = _context39.next) {
                          case 0:
                            _context39.prev = 0;
                            _context39.next = 3;
                            return _this7.queries.transactions.waitFor({
                              filter: {
                                in_msg: {
                                  eq: messageId
                                },
                                status: {
                                  eq: QTransactionProcessingStatus.finalized
                                }
                              },
                              result: transactionDetails,
                              timeout: processingTimeout,
                              operationId: operationId,
                              parentSpan: parentSpan
                            });

                          case 3:
                            transaction = _context39.sent;
                            resolve();
                            _context39.next = 21;
                            break;

                          case 7:
                            _context39.prev = 7;
                            _context39.t0 = _context39["catch"](0);

                            if (!_TONClient.TONClientError.isWaitForTimeout(_context39.t0)) {
                              _context39.next = 20;
                              break;
                            }

                            _context39.t1 = reject;
                            _context39.t2 = _TONClient.TONClientError;
                            _context39.next = 14;
                            return _this7.getClientInfo();

                          case 14:
                            _context39.t3 = _context39.sent;
                            _context39.t4 = {
                              messageId: messageId,
                              sendingTime: sendingTime,
                              timeout: processingTimeout
                            };
                            _context39.t5 = _context39.t2.transactionWaitTimeout.call(_context39.t2, _context39.t3, _context39.t4);
                            (0, _context39.t1)(_context39.t5);
                            _context39.next = 21;
                            break;

                          case 20:
                            reject(_context39.t0);

                          case 21:
                          case "end":
                            return _context39.stop();
                        }
                      }
                    }, _callee39, null, [[0, 7]]);
                  }))();
                }));
                _context40.prev = 19;
                _context40.next = 22;
                return Promise.race(promises);

              case 22:
                _context40.prev = 22;

                if (!(promises.length > 1 && operationId)) {
                  _context40.next = 26;
                  break;
                }

                _context40.next = 26;
                return this.queries.finishOperations([operationId]);

              case 26:
                return _context40.finish(22);

              case 27:
                if (transaction) {
                  _context40.next = 34;
                  break;
                }

                _context40.t0 = _TONClient.TONClientError;
                _context40.next = 31;
                return this.getClientInfo();

              case 31:
                _context40.t1 = _context40.sent;
                _context40.t2 = {
                  messageId: messageId,
                  sendingTime: sendingTime,
                  expire: expire,
                  blockTime: blockTime
                };
                throw _context40.t0.messageExpired.call(_context40.t0, _context40.t1, _context40.t2);

              case 34:
                transactionNow = transaction.now || 0;
                this.config.log('[waitForTransaction]', 'TRANSACTION_RECEIVED', {
                  id: transaction.id,
                  blockId: transaction.block_id,
                  now: "".concat(new Date(transactionNow * 1000).toISOString(), " (").concat(transactionNow, ")")
                });
                _context40.next = 51;
                break;

              case 38:
                _context40.prev = 38;
                _context40.t3 = _context40["catch"](15);
                this.config.log('[waitForTransaction]', 'FAILED', _context40.t3);

                if (!(_TONClient.TONClientError.isMessageExpired(_context40.t3) || _TONClient.TONClientError.isClientError(_context40.t3, _TONClient.TONErrorCode.TRANSACTION_WAIT_TIMEOUT))) {
                  _context40.next = 50;
                  break;
                }

                _context40.next = 44;
                return this.resolveDetailedError(_context40.t3, message.messageBodyBase64, Date.now() / 1000, message.address);

              case 44:
                detailedError = _context40.sent;
                messageProcessingState = (_error$data = _context40.t3.data) === null || _error$data === void 0 ? void 0 : _error$data.messageProcessingState;

                if (messageProcessingState) {
                  if (detailedError.data) {
                    detailedError.data.messageProcessingState = messageProcessingState;
                  } else {
                    detailedError.data = {
                      messageProcessingState: messageProcessingState
                    };
                  }
                }

                throw detailedError;

              case 50:
                throw _context40.t3;

              case 51:
                removeTypeName(transaction);
                _context40.next = 54;
                return this.processTransaction(message.address, transaction, abi, functionName);

              case 54:
                _yield$this$processTr = _context40.sent;
                output = _yield$this$processTr.output;
                fees = _yield$this$processTr.fees;
                return _context40.abrupt("return", {
                  transaction: transaction,
                  output: output,
                  fees: fees
                });

              case 58:
              case "end":
                return _context40.stop();
            }
          }
        }, _callee40, this, [[15, 38], [19,, 22, 27]]);
      }));

      function legacyWaitForTransaction(_x58) {
        return _legacyWaitForTransaction.apply(this, arguments);
      }

      return legacyWaitForTransaction;
    }()
  }, {
    key: "processTransaction",
    value: function () {
      var _processTransaction = _asyncToGenerator( /*#__PURE__*/_regenerator["default"].mark(function _callee41(address, transaction, abi, functionName) {
        var result, accounts;
        return _regenerator["default"].wrap(function _callee41$(_context41) {
          while (1) {
            switch (_context41.prev = _context41.next) {
              case 0:
                _context41.prev = 0;
                _context41.next = 3;
                return this.requestCore('contracts.process.transaction', {
                  transaction: transaction,
                  abi: abi,
                  functionName: functionName,
                  address: address
                });

              case 3:
                result = _context41.sent;
                return _context41.abrupt("return", _objectSpread({
                  transaction: transaction
                }, result));

              case 7:
                _context41.prev = 7;
                _context41.t0 = _context41["catch"](0);
                _context41.next = 11;
                return this.queries.accounts.query({
                  filter: {
                    id: {
                      eq: address
                    }
                  },
                  result: 'acc_type balance',
                  timeout: 1000
                });

              case 11:
                accounts = _context41.sent;

                if (!(accounts.length === 0)) {
                  _context41.next = 20;
                  break;
                }

                _context41.t1 = _TONClient.TONClientError;
                _context41.next = 16;
                return this.getClientInfo();

              case 16:
                _context41.t2 = _context41.sent;
                _context41.t3 = address;
                _context41.t4 = {
                  original_error: _context41.t0
                };
                throw _context41.t1.accountMissing.call(_context41.t1, _context41.t2, _context41.t3, _context41.t4);

              case 20:
                throw _context41.t0;

              case 21:
              case "end":
                return _context41.stop();
            }
          }
        }, _callee41, this, [[0, 7]]);
      }));

      function processTransaction(_x59, _x60, _x61, _x62) {
        return _processTransaction.apply(this, arguments);
      }

      return processTransaction;
    }()
  }, {
    key: "resolveDetailedError",
    value: function () {
      var _resolveDetailedError = _asyncToGenerator( /*#__PURE__*/_regenerator["default"].mark(function _callee42(error, messageBase64, time, address) {
        var accounts, account;
        return _regenerator["default"].wrap(function _callee42$(_context42) {
          while (1) {
            switch (_context42.prev = _context42.next) {
              case 0:
                _context42.next = 2;
                return this.queries.accounts.query({
                  filter: {
                    id: {
                      eq: address
                    }
                  },
                  result: 'id acc_type balance balance_other { currency value } boc code_hash data_hash last_paid',
                  timeout: 1000
                });

              case 2:
                accounts = _context42.sent;

                if (!(accounts.length === 0)) {
                  _context42.next = 11;
                  break;
                }

                _context42.t0 = _TONClient.TONClientError;
                _context42.next = 7;
                return this.getClientInfo();

              case 7:
                _context42.t1 = _context42.sent;
                _context42.t2 = address;
                _context42.t3 = {
                  original_error: error
                };
                return _context42.abrupt("return", _context42.t0.accountMissing.call(_context42.t0, _context42.t1, _context42.t2, _context42.t3));

              case 11:
                account = accounts[0];
                removeTypeName(account);
                _context42.prev = 13;
                _context42.next = 16;
                return this.requestCore('contracts.resolve.error', {
                  address: address,
                  account: account,
                  messageBase64: messageBase64,
                  time: time,
                  mainError: error
                });

              case 16:
                _context42.next = 21;
                break;

              case 18:
                _context42.prev = 18;
                _context42.t4 = _context42["catch"](13);
                return _context42.abrupt("return", _context42.t4);

              case 21:
                return _context42.abrupt("return", error);

              case 22:
              case "end":
                return _context42.stop();
            }
          }
        }, _callee42, this, [[13, 18]]);
      }));

      function resolveDetailedError(_x63, _x64, _x65, _x66) {
        return _resolveDetailedError.apply(this, arguments);
      }

      return resolveDetailedError;
    }()
  }, {
    key: "isDeployed",
    value: function () {
      var _isDeployed = _asyncToGenerator( /*#__PURE__*/_regenerator["default"].mark(function _callee43(address, parentSpan) {
        var account;
        return _regenerator["default"].wrap(function _callee43$(_context43) {
          while (1) {
            switch (_context43.prev = _context43.next) {
              case 0:
                _context43.next = 2;
                return this.queries.accounts.query({
                  filter: {
                    id: {
                      eq: address
                    },
                    acc_type: {
                      eq: QAccountType.active
                    }
                  },
                  result: 'id',
                  parentSpan: parentSpan
                });

              case 2:
                account = _context43.sent;
                return _context43.abrupt("return", account.length > 0);

              case 4:
              case "end":
                return _context43.stop();
            }
          }
        }, _callee43, this);
      }));

      function isDeployed(_x67, _x68) {
        return _isDeployed.apply(this, arguments);
      }

      return isDeployed;
    }()
  }, {
    key: "processDeployMessage",
    value: function () {
      var _processDeployMessage = _asyncToGenerator( /*#__PURE__*/_regenerator["default"].mark(function _callee44(message, parentSpan, retryIndex) {
        var processing;
        return _regenerator["default"].wrap(function _callee44$(_context44) {
          while (1) {
            switch (_context44.prev = _context44.next) {
              case 0:
                this.config.log('processDeployMessage', message);
                _context44.next = 3;
                return this.isDeployed(message.address, parentSpan);

              case 3:
                if (!_context44.sent) {
                  _context44.next = 5;
                  break;
                }

                return _context44.abrupt("return", {
                  address: message.address,
                  alreadyDeployed: true
                });

              case 5:
                _context44.next = 7;
                return this.sendMessage(message.message, parentSpan);

              case 7:
                processing = _context44.sent;
                return _context44.abrupt("return", this.waitForDeployTransaction(message, processing, parentSpan));

              case 9:
              case "end":
                return _context44.stop();
            }
          }
        }, _callee44, this);
      }));

      function processDeployMessage(_x69, _x70, _x71) {
        return _processDeployMessage.apply(this, arguments);
      }

      return processDeployMessage;
    }()
  }, {
    key: "waitForDeployTransaction",
    value: function () {
      var _waitForDeployTransaction = _asyncToGenerator( /*#__PURE__*/_regenerator["default"].mark(function _callee45(deployMessage, messageProcessingState, parentSpan, infiniteWait) {
        var message, result;
        return _regenerator["default"].wrap(function _callee45$(_context45) {
          while (1) {
            switch (_context45.prev = _context45.next) {
              case 0:
                message = deployMessage.message;
                _context45.next = 3;
                return this.waitForTransaction({
                  message: message,
                  messageProcessingState: messageProcessingState,
                  parentSpan: parentSpan,
                  infiniteWait: infiniteWait
                });

              case 3:
                result = _context45.sent;
                return _context45.abrupt("return", _objectSpread(_objectSpread({}, result), {}, {
                  address: message.address,
                  alreadyDeployed: false
                }));

              case 5:
              case "end":
                return _context45.stop();
            }
          }
        }, _callee45, this);
      }));

      function waitForDeployTransaction(_x72, _x73, _x74, _x75) {
        return _waitForDeployTransaction.apply(this, arguments);
      }

      return waitForDeployTransaction;
    }()
  }, {
    key: "processRunMessage",
    value: function () {
      var _processRunMessage = _asyncToGenerator( /*#__PURE__*/_regenerator["default"].mark(function _callee46(runMessage, parentSpan) {
        var processing;
        return _regenerator["default"].wrap(function _callee46$(_context46) {
          while (1) {
            switch (_context46.prev = _context46.next) {
              case 0:
                this.config.log('processRunMessage', runMessage);
                _context46.next = 3;
                return this.sendMessage(runMessage.message, parentSpan);

              case 3:
                processing = _context46.sent;
                return _context46.abrupt("return", this.waitForRunTransaction(runMessage, processing, parentSpan));

              case 5:
              case "end":
                return _context46.stop();
            }
          }
        }, _callee46, this);
      }));

      function processRunMessage(_x76, _x77) {
        return _processRunMessage.apply(this, arguments);
      }

      return processRunMessage;
    }()
  }, {
    key: "waitForRunTransaction",
    value: function () {
      var _waitForRunTransaction = _asyncToGenerator( /*#__PURE__*/_regenerator["default"].mark(function _callee47(runMessage, messageProcessingState, parentSpan, infiniteWait) {
        return _regenerator["default"].wrap(function _callee47$(_context47) {
          while (1) {
            switch (_context47.prev = _context47.next) {
              case 0:
                return _context47.abrupt("return", this.waitForTransaction({
                  message: runMessage.message,
                  messageProcessingState: messageProcessingState,
                  parentSpan: parentSpan,
                  infiniteWait: infiniteWait,
                  abi: runMessage.abi,
                  functionName: runMessage.functionName
                }));

              case 1:
              case "end":
                return _context47.stop();
            }
          }
        }, _callee47, this);
      }));

      function waitForRunTransaction(_x78, _x79, _x80, _x81) {
        return _waitForRunTransaction.apply(this, arguments);
      }

      return waitForRunTransaction;
    }()
    /**
     * Deprecated. Use `runMessageLocal` instead.
     * @param params
     * @param waitParams
     * @param parentSpan
     * @returns {Promise<unknown>}
     */

  }, {
    key: "processRunMessageLocal",
    value: function () {
      var _processRunMessageLocal = _asyncToGenerator( /*#__PURE__*/_regenerator["default"].mark(function _callee48(params, waitParams, parentSpan) {
        var account;
        return _regenerator["default"].wrap(function _callee48$(_context48) {
          while (1) {
            switch (_context48.prev = _context48.next) {
              case 0:
                this.config.log('processRunMessageLocal', params);
                _context48.next = 3;
                return this.getAccount(params.address, true, waitParams, parentSpan);

              case 3:
                account = _context48.sent;
                return _context48.abrupt("return", this.requestCore('contracts.run.local.msg', {
                  address: params.address,
                  account: account,
                  abi: params.abi,
                  functionName: params.functionName,
                  messageBase64: params.message.messageBodyBase64
                }));

              case 5:
              case "end":
                return _context48.stop();
            }
          }
        }, _callee48, this);
      }));

      function processRunMessageLocal(_x82, _x83, _x84) {
        return _processRunMessageLocal.apply(this, arguments);
      }

      return processRunMessageLocal;
    }() // Fee calculation

  }, {
    key: "calcRunFees",
    value: function () {
      var _calcRunFees = _asyncToGenerator( /*#__PURE__*/_regenerator["default"].mark(function _callee49(params, parentSpan) {
        var account;
        return _regenerator["default"].wrap(function _callee49$(_context49) {
          while (1) {
            switch (_context49.prev = _context49.next) {
              case 0:
                this.config.log('calcRunFees', params);
                _context49.next = 3;
                return this.getAccount(params.address, true, params.waitParams, parentSpan);

              case 3:
                account = _context49.sent;

                if (params.emulateBalance) {
                  account.balance = this.bigBalance;
                }

                return _context49.abrupt("return", this.requestCore('contracts.run.fee', {
                  address: params.address,
                  account: account,
                  abi: params.abi,
                  functionName: params.functionName,
                  input: params.input,
                  keyPair: params.keyPair
                }));

              case 6:
              case "end":
                return _context49.stop();
            }
          }
        }, _callee49, this);
      }));

      function calcRunFees(_x85, _x86) {
        return _calcRunFees.apply(this, arguments);
      }

      return calcRunFees;
    }()
  }, {
    key: "calcDeployFees",
    value: function () {
      var _calcDeployFees = _asyncToGenerator( /*#__PURE__*/_regenerator["default"].mark(function _callee50(params, parentSpan) {
        var message;
        return _regenerator["default"].wrap(function _callee50$(_context50) {
          while (1) {
            switch (_context50.prev = _context50.next) {
              case 0:
                this.config.log('calcDeployFees', params);
                _context50.next = 3;
                return this.createDeployMessage(params);

              case 3:
                message = _context50.sent;
                return _context50.abrupt("return", this.calcMsgProcessFees({
                  address: message.address,
                  message: message.message,
                  emulateBalance: params.emulateBalance,
                  newAccount: params.newAccount
                }, parentSpan));

              case 5:
              case "end":
                return _context50.stop();
            }
          }
        }, _callee50, this);
      }));

      function calcDeployFees(_x87, _x88) {
        return _calcDeployFees.apply(this, arguments);
      }

      return calcDeployFees;
    }()
  }, {
    key: "calcMsgProcessFees",
    value: function () {
      var _calcMsgProcessFees = _asyncToGenerator( /*#__PURE__*/_regenerator["default"].mark(function _callee51(params, parentSpan) {
        var account;
        return _regenerator["default"].wrap(function _callee51$(_context51) {
          while (1) {
            switch (_context51.prev = _context51.next) {
              case 0:
                this.config.log('calcMsgProcessFees', params);
                account = {
                  balance: this.bigBalance,
                  id: params.address,
                  last_paid: Math.floor(Date.now() / 1000)
                };

                if (params.newAccount) {
                  _context51.next = 6;
                  break;
                }

                _context51.next = 5;
                return this.getAccount(params.address, false, params.waitParams, parentSpan);

              case 5:
                account = _context51.sent;

              case 6:
                if (params.emulateBalance) {
                  account.balance = this.bigBalance;
                }

                return _context51.abrupt("return", this.requestCore('contracts.run.fee.msg', {
                  address: params.address,
                  account: account,
                  messageBase64: params.message.messageBodyBase64
                }));

              case 8:
              case "end":
                return _context51.stop();
            }
          }
        }, _callee51, this);
      }));

      function calcMsgProcessFees(_x89, _x90) {
        return _calcMsgProcessFees.apply(this, arguments);
      }

      return calcMsgProcessFees;
    }() // Address processing

  }, {
    key: "convertAddress",
    value: function () {
      var _convertAddress = _asyncToGenerator( /*#__PURE__*/_regenerator["default"].mark(function _callee52(params) {
        return _regenerator["default"].wrap(function _callee52$(_context52) {
          while (1) {
            switch (_context52.prev = _context52.next) {
              case 0:
                return _context52.abrupt("return", this.requestCore('contracts.address.convert', params));

              case 1:
              case "end":
                return _context52.stop();
            }
          }
        }, _callee52, this);
      }));

      function convertAddress(_x91) {
        return _convertAddress.apply(this, arguments);
      }

      return convertAddress;
    }() // Internals

  }, {
    key: "internalDeployNative",
    value: function () {
      var _internalDeployNative = _asyncToGenerator( /*#__PURE__*/_regenerator["default"].mark(function _callee53(params) {
        return _regenerator["default"].wrap(function _callee53$(_context53) {
          while (1) {
            switch (_context53.prev = _context53.next) {
              case 0:
                return _context53.abrupt("return", this.requestCore('contracts.deploy', {
                  abi: params["package"].abi,
                  constructorHeader: params.constructorHeader,
                  constructorParams: params.constructorParams,
                  initParams: params.initParams,
                  imageBase64: params["package"].imageBase64,
                  keyPair: params.keyPair
                }));

              case 1:
              case "end":
                return _context53.stop();
            }
          }
        }, _callee53, this);
      }));

      function internalDeployNative(_x92) {
        return _internalDeployNative.apply(this, arguments);
      }

      return internalDeployNative;
    }()
  }, {
    key: "internalRunNative",
    value: function () {
      var _internalRunNative = _asyncToGenerator( /*#__PURE__*/_regenerator["default"].mark(function _callee54(params) {
        return _regenerator["default"].wrap(function _callee54$(_context54) {
          while (1) {
            switch (_context54.prev = _context54.next) {
              case 0:
                return _context54.abrupt("return", this.requestCore('contracts.run', {
                  address: params.address,
                  abi: params.abi,
                  functionName: params.functionName,
                  header: params.header,
                  input: params.input,
                  keyPair: params.keyPair
                }));

              case 1:
              case "end":
                return _context54.stop();
            }
          }
        }, _callee54, this);
      }));

      function internalRunNative(_x93) {
        return _internalRunNative.apply(this, arguments);
      }

      return internalRunNative;
    }()
  }, {
    key: "retryCall",
    value: function () {
      var _retryCall = _asyncToGenerator( /*#__PURE__*/_regenerator["default"].mark(function _callee55(call) {
        var retriesCount, i, useRetry;
        return _regenerator["default"].wrap(function _callee55$(_context55) {
          while (1) {
            switch (_context55.prev = _context55.next) {
              case 0:
                retriesCount = this.config.messageRetriesCount();
                i = 0;

              case 2:
                if (!(i <= retriesCount)) {
                  _context55.next = 18;
                  break;
                }

                if (i > 0) {
                  this.config.log("Retry #".concat(i));
                }

                _context55.prev = 4;
                _context55.next = 7;
                return call(i);

              case 7:
                return _context55.abrupt("return", _context55.sent);

              case 10:
                _context55.prev = 10;
                _context55.t0 = _context55["catch"](4);
                // retry if message expired or if resolving returned that message expired/replay
                // protection error or if transaction with message expired/replay protection error
                // returned
                useRetry = _context55.t0.code === _TONClient.TONErrorCode.MESSAGE_EXPIRED || _TONClient.TONClientError.isOriginalContractError(_context55.t0, _TONClient.TONContractExitCode.REPLAY_PROTECTION) || _TONClient.TONClientError.isOriginalContractError(_context55.t0, _TONClient.TONContractExitCode.MESSAGE_EXPIRED) || _TONClient.TONClientError.isResolvedContractErrorAfterExpire(_context55.t0, _TONClient.TONContractExitCode.REPLAY_PROTECTION) || _TONClient.TONClientError.isResolvedContractErrorAfterExpire(_context55.t0, _TONClient.TONContractExitCode.MESSAGE_EXPIRED);

                if (!(!useRetry || i === retriesCount)) {
                  _context55.next = 15;
                  break;
                }

                throw _context55.t0;

              case 15:
                i += 1;
                _context55.next = 2;
                break;

              case 18:
                _context55.t1 = _TONClient.TONClientError;
                _context55.next = 21;
                return this.getClientInfo();

              case 21:
                _context55.t2 = _context55.sent;
                throw _context55.t1.internalError.call(_context55.t1, _context55.t2, 'All retry attempts failed');

              case 23:
              case "end":
                return _context55.stop();
            }
          }
        }, _callee55, this, [[4, 10]]);
      }));

      function retryCall(_x94) {
        return _retryCall.apply(this, arguments);
      }

      return retryCall;
    }()
  }, {
    key: "internalDeployJs",
    value: function () {
      var _internalDeployJs = _asyncToGenerator( /*#__PURE__*/_regenerator["default"].mark(function _callee57(params, parentSpan) {
        var _this8 = this;

        return _regenerator["default"].wrap(function _callee57$(_context57) {
          while (1) {
            switch (_context57.prev = _context57.next) {
              case 0:
                this.config.log('Deploy start');
                return _context57.abrupt("return", this.retryCall( /*#__PURE__*/function () {
                  var _ref8 = _asyncToGenerator( /*#__PURE__*/_regenerator["default"].mark(function _callee56(retryIndex) {
                    var deployMessage, processing;
                    return _regenerator["default"].wrap(function _callee56$(_context56) {
                      while (1) {
                        switch (_context56.prev = _context56.next) {
                          case 0:
                            _context56.next = 2;
                            return _this8.createDeployMessage(params, retryIndex);

                          case 2:
                            deployMessage = _context56.sent;
                            _context56.next = 5;
                            return _this8.isDeployed(deployMessage.address, parentSpan);

                          case 5:
                            if (!_context56.sent) {
                              _context56.next = 7;
                              break;
                            }

                            return _context56.abrupt("return", {
                              address: deployMessage.address,
                              alreadyDeployed: true
                            });

                          case 7:
                            _context56.next = 9;
                            return _this8.sendMessage(deployMessage.message, parentSpan);

                          case 9:
                            processing = _context56.sent;
                            return _context56.abrupt("return", _this8.waitForDeployTransaction(deployMessage, processing, parentSpan));

                          case 11:
                          case "end":
                            return _context56.stop();
                        }
                      }
                    }, _callee56);
                  }));

                  return function (_x97) {
                    return _ref8.apply(this, arguments);
                  };
                }()));

              case 2:
              case "end":
                return _context57.stop();
            }
          }
        }, _callee57, this);
      }));

      function internalDeployJs(_x95, _x96) {
        return _internalDeployJs.apply(this, arguments);
      }

      return internalDeployJs;
    }()
  }, {
    key: "internalRunJs",
    value: function () {
      var _internalRunJs = _asyncToGenerator( /*#__PURE__*/_regenerator["default"].mark(function _callee59(params, parentSpan) {
        var _this9 = this;

        return _regenerator["default"].wrap(function _callee59$(_context59) {
          while (1) {
            switch (_context59.prev = _context59.next) {
              case 0:
                this.config.log('Run start');
                return _context59.abrupt("return", this.retryCall( /*#__PURE__*/function () {
                  var _ref9 = _asyncToGenerator( /*#__PURE__*/_regenerator["default"].mark(function _callee58(retryIndex) {
                    var runMessage, processing;
                    return _regenerator["default"].wrap(function _callee58$(_context58) {
                      while (1) {
                        switch (_context58.prev = _context58.next) {
                          case 0:
                            _context58.next = 2;
                            return _this9.createRunMessage(params, retryIndex);

                          case 2:
                            runMessage = _context58.sent;
                            _context58.next = 5;
                            return _this9.sendMessage(runMessage.message, parentSpan);

                          case 5:
                            processing = _context58.sent;
                            return _context58.abrupt("return", _this9.waitForRunTransaction(runMessage, processing, parentSpan));

                          case 7:
                          case "end":
                            return _context58.stop();
                        }
                      }
                    }, _callee58);
                  }));

                  return function (_x100) {
                    return _ref9.apply(this, arguments);
                  };
                }()));

              case 2:
              case "end":
                return _context59.stop();
            }
          }
        }, _callee59, this);
      }));

      function internalRunJs(_x98, _x99) {
        return _internalRunJs.apply(this, arguments);
      }

      return internalRunJs;
    }()
  }, {
    key: "getAccount",
    value: function () {
      var _getAccount = _asyncToGenerator( /*#__PURE__*/_regenerator["default"].mark(function _callee60(address, active, waitParams, parentSpan) {
        var filter, accounts, account;
        return _regenerator["default"].wrap(function _callee60$(_context60) {
          while (1) {
            switch (_context60.prev = _context60.next) {
              case 0:
                filter = {
                  id: {
                    eq: address
                  }
                };

                if (waitParams && waitParams.transactionLt) {
                  filter.last_trans_lt = {
                    ge: waitParams.transactionLt
                  };
                }

                if (active) {
                  filter.acc_type = {
                    eq: QAccountType.active
                  };
                }

                this.config.log('getAccount. Filter', filter);
                _context60.next = 6;
                return this.queries.accounts.query(_objectSpread(_objectSpread({
                  filter: filter,
                  result: 'id acc_type boc code_hash data_hash balance balance_other { currency value } last_paid'
                }, waitParams && waitParams.timeout ? {
                  timeout: waitParams.timeout
                } : {}), {}, {
                  parentSpan: parentSpan
                }));

              case 6:
                accounts = _context60.sent;

                if (!(accounts.length === 0)) {
                  _context60.next = 14;
                  break;
                }

                _context60.t0 = _TONClient.TONClientError;
                _context60.next = 11;
                return this.getClientInfo();

              case 11:
                _context60.t1 = _context60.sent;
                _context60.t2 = address;
                throw _context60.t0.accountMissing.call(_context60.t0, _context60.t1, _context60.t2);

              case 14:
                account = accounts[0];
                removeTypeName(account);
                this.config.log('getAccount. Account received', account);
                return _context60.abrupt("return", account);

              case 18:
              case "end":
                return _context60.stop();
            }
          }
        }, _callee60, this);
      }));

      function getAccount(_x101, _x102, _x103, _x104) {
        return _getAccount.apply(this, arguments);
      }

      return getAccount;
    }()
  }, {
    key: "internalRunLocalJs",
    value: function () {
      var _internalRunLocalJs = _asyncToGenerator( /*#__PURE__*/_regenerator["default"].mark(function _callee61(params, parentSpan) {
        var address, account;
        return _regenerator["default"].wrap(function _callee61$(_context61) {
          while (1) {
            switch (_context61.prev = _context61.next) {
              case 0:
                address = params.address;

                if (address) {
                  _context61.next = 7;
                  break;
                }

                _context61.t0 = _TONClient.TONClientError;
                _context61.next = 5;
                return this.getClientInfo();

              case 5:
                _context61.t1 = _context61.sent;
                throw _context61.t0.addressRequiredForRunLocal.call(_context61.t0, _context61.t1);

              case 7:
                _context61.t2 = params.account;

                if (_context61.t2) {
                  _context61.next = 12;
                  break;
                }

                _context61.next = 11;
                return this.getAccount(address, false, params.waitParams, parentSpan);

              case 11:
                _context61.t2 = _context61.sent;

              case 12:
                account = _context61.t2;

                if (account.code_hash) {
                  _context61.next = 21;
                  break;
                }

                _context61.t3 = _TONClient.TONClientError;
                _context61.next = 17;
                return this.getClientInfo();

              case 17:
                _context61.t4 = _context61.sent;
                _context61.t5 = address;
                _context61.t6 = account.balance;
                throw _context61.t3.accountCodeMissing.call(_context61.t3, _context61.t4, _context61.t5, _context61.t6);

              case 21:
                return _context61.abrupt("return", this.requestCore('contracts.run.local', {
                  address: address,
                  account: account,
                  abi: params.abi,
                  functionName: params.functionName,
                  input: params.input,
                  keyPair: params.keyPair,
                  fullRun: params.fullRun
                }));

              case 22:
              case "end":
                return _context61.stop();
            }
          }
        }, _callee61, this);
      }));

      function internalRunLocalJs(_x105, _x106) {
        return _internalRunLocalJs.apply(this, arguments);
      }

      return internalRunLocalJs;
    }()
  }, {
    key: "internalRunMessageLocalJs",
    value: function () {
      var _internalRunMessageLocalJs = _asyncToGenerator( /*#__PURE__*/_regenerator["default"].mark(function _callee62(params, parentSpan) {
        var address, account;
        return _regenerator["default"].wrap(function _callee62$(_context62) {
          while (1) {
            switch (_context62.prev = _context62.next) {
              case 0:
                address = params.address;

                if (address) {
                  _context62.next = 7;
                  break;
                }

                _context62.t0 = _TONClient.TONClientError;
                _context62.next = 5;
                return this.getClientInfo();

              case 5:
                _context62.t1 = _context62.sent;
                throw _context62.t0.addressRequiredForRunLocal.call(_context62.t0, _context62.t1);

              case 7:
                _context62.t2 = params.account;

                if (_context62.t2) {
                  _context62.next = 12;
                  break;
                }

                _context62.next = 11;
                return this.getAccount(address, false, params.waitParams, parentSpan);

              case 11:
                _context62.t2 = _context62.sent;

              case 12:
                account = _context62.t2;

                if (account.code_hash) {
                  _context62.next = 21;
                  break;
                }

                _context62.t3 = _TONClient.TONClientError;
                _context62.next = 17;
                return this.getClientInfo();

              case 17:
                _context62.t4 = _context62.sent;
                _context62.t5 = address;
                _context62.t6 = account.balance;
                throw _context62.t3.accountCodeMissing.call(_context62.t3, _context62.t4, _context62.t5, _context62.t6);

              case 21:
                return _context62.abrupt("return", this.requestCore('contracts.run.local.msg', {
                  address: address,
                  account: account,
                  abi: params.abi,
                  functionName: params.functionName,
                  messageBase64: params.messageBodyBase64,
                  fullRun: params.fullRun
                }));

              case 22:
              case "end":
                return _context62.stop();
            }
          }
        }, _callee62, this);
      }));

      function internalRunMessageLocalJs(_x107, _x108) {
        return _internalRunMessageLocalJs.apply(this, arguments);
      }

      return internalRunMessageLocalJs;
    }()
  }]);

  return TONContractsModule;
}(_TONModule2.TONModule);

exports["default"] = TONContractsModule;
TONContractsModule.moduleName = 'TONContractsModule';
var transactionDetails = "\n    id\n    in_msg\n    tr_type\n    status\n    in_msg\n    out_msgs\n    block_id\n    now\n    aborted\n    lt\n    total_fees\n    storage {\n        status_change\n        storage_fees_collected\n    }\n    compute {\n        compute_type\n        skipped_reason\n        success\n        exit_code\n        gas_fees\n        gas_used\n    }\n    action {\n        success\n        valid\n        result_code\n        no_funds\n        total_fwd_fees\n        total_action_fees\n    }\n    out_messages {\n        id\n        msg_type\n        body\n        value\n    }\n   ";
var BLOCK_FIELDS = "\n    id\n    gen_utime\n    after_split\n    workchain_id\n    shard\n    in_msg_descr {\n        msg_id\n        transaction_id\n    }\n";
var TRANSACTION_FIELDS_ORDINARY = "\n    id\n    aborted\n    compute {\n        skipped_reason\n        exit_code\n        success\n        gas_fees\n    }\n    storage {\n       status_change\n       storage_fees_collected\n    }\n    action {\n        success\n        valid\n        no_funds\n        result_code\n        total_fwd_fees\n        total_action_fees\n    }\n    in_msg\n    now\n    out_msgs\n    out_messages {\n        id\n        body\n        msg_type\n        value\n    }\n    status\n    total_fees\n";
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy9tb2R1bGVzL1RPTkNvbnRyYWN0c01vZHVsZS5qcyJdLCJuYW1lcyI6WyJUT05BZGRyZXNzU3RyaW5nVmFyaWFudCIsIkFjY291bnRJZCIsIkhleCIsIkJhc2U2NCIsIlRPTkNsaWVudFRyYW5zYWN0aW9uUGhhc2UiLCJzdG9yYWdlIiwiY29tcHV0ZVNraXBwZWQiLCJjb21wdXRlVm0iLCJhY3Rpb24iLCJ1bmtub3duIiwiVE9OQ2xpZW50Q29tcHV0ZVNraXBwZWRTdGF0dXMiLCJub1N0YXRlIiwiYmFkU3RhdGUiLCJub0dhcyIsIlRPTkNsaWVudFN0b3JhZ2VTdGF0dXMiLCJ1bmNoYW5nZWQiLCJmcm96ZW4iLCJkZWxldGVkIiwiUUluTXNnVHlwZSIsImV4dGVybmFsIiwiaWhyIiwiaW1tZWRpYXRlbHkiLCJ0cmFuc2l0IiwiZGlzY2FyZGVkRmluYWwiLCJkaXNjYXJkZWRUcmFuc2l0IiwiUU91dE1zZ1R5cGUiLCJvdXRNc2dOZXciLCJkZXF1ZXVlSW1tZWRpYXRlbHkiLCJkZXF1ZXVlIiwidHJhbnNpdFJlcXVpcmVkIiwibm9uZSIsIlFNZXNzYWdlVHlwZSIsImludGVybmFsIiwiZXh0SW4iLCJleHRPdXQiLCJRTWVzc2FnZVByb2Nlc3NpbmdTdGF0dXMiLCJxdWV1ZWQiLCJwcm9jZXNzaW5nIiwicHJlbGltaW5hcnkiLCJwcm9wb3NlZCIsImZpbmFsaXplZCIsInJlZnVzZWQiLCJ0cmFuc2l0aW5nIiwiUUJsb2NrUHJvY2Vzc2luZ1N0YXR1cyIsIlFTcGxpdFR5cGUiLCJzcGxpdCIsIm1lcmdlIiwiUUFjY291bnRUeXBlIiwidW5pbml0IiwiYWN0aXZlIiwiUVRyYW5zYWN0aW9uVHlwZSIsIm9yZGluYXJ5IiwidGljayIsInRvY2siLCJzcGxpdFByZXBhcmUiLCJzcGxpdEluc3RhbGwiLCJtZXJnZVByZXBhcmUiLCJtZXJnZUluc3RhbGwiLCJRVHJhbnNhY3Rpb25Qcm9jZXNzaW5nU3RhdHVzIiwiUUFjY291bnRTdGF0dXMiLCJub25FeGlzdCIsIlFBY2NvdW50U3RhdHVzQ2hhbmdlIiwiUUNvbXB1dGVUeXBlIiwic2tpcHBlZCIsInZtIiwiUVNraXBSZWFzb24iLCJRQm91bmNlVHlwZSIsIm5lZ0Z1bmRzIiwibm9GdW5kcyIsIm9rIiwiTUFTVEVSQ0hBSU5fSUQiLCJFWFRSQV9UUkFOU0FDVElPTl9XQUlUSU5HX1RJTUUiLCJCTE9DS19UUkFOU0FDVElPTl9XQUlUSU5HX1RJTUUiLCJyZW1vdmVUeXBlTmFtZSIsIm9iaiIsIl9fdHlwZW5hbWUiLCJPYmplY3QiLCJ2YWx1ZXMiLCJmb3JFYWNoIiwidmFsdWUiLCJyZW1vdmVQcm9wcyIsInBhdGhzIiwicmVzdWx0IiwicGF0aCIsImRvdFBvcyIsImluZGV4T2YiLCJuYW1lIiwic3Vic3RyIiwiY2hpbGQiLCJyZWR1Y2VkQ2hpbGQiLCJzdGFydE1lc3NhZ2VUcmFjZVNwYW4iLCJ0cmFjZXIiLCJtZXNzYWdlSWQiLCJvcGVyYXRpb25OYW1lIiwidGFncyIsInRyYWNlSWQiLCJzcGFuSWQiLCJyb290Q29udGV4dCIsImV4dHJhY3QiLCJGT1JNQVRfVEVYVF9NQVAiLCJzdGFydFNwYW4iLCJjaGlsZE9mIiwidHJhY2VNZXNzYWdlIiwic3BhbiIsImZpbmlzaCIsIlRPTkNvbnRyYWN0c01vZHVsZSIsImNvbmZpZyIsImNvbnRleHQiLCJnZXRNb2R1bGUiLCJUT05Db25maWdNb2R1bGUiLCJxdWVyaWVzIiwiVE9OUXVlcmllc01vZHVsZSIsInBhcmFtcyIsInBhcmVudFNwYW4iLCJhY2NvdW50cyIsInF1ZXJ5IiwiZmlsdGVyIiwiaWQiLCJlcSIsImFkZHJlc3MiLCJsZW5ndGgiLCJiYWxhbmNlR3JhbXMiLCJiYWxhbmNlIiwidHJhY2UiLCJzZXRUYWciLCJpbnRlcm5hbERlcGxveUpzIiwiaW50ZXJuYWxSdW5KcyIsImludGVybmFsUnVuTG9jYWxKcyIsImludGVybmFsUnVuTWVzc2FnZUxvY2FsSnMiLCJjb3JlUGFyYW1zIiwiaGFzQ29kZSIsImJvY0Jhc2U2NCIsImNvZGVCYXNlNjQiLCJkYXRhQmFzZTY0IiwiVE9OQ2xpZW50RXJyb3IiLCJnZXRDbGllbnRJbmZvIiwiYWRkcmVzc1JlcXVpcmVkRm9yUnVuTG9jYWwiLCJnZXRBY2NvdW50IiwidGltZW91dCIsIndhaXRGb3JUaW1lb3V0IiwiYWNjb3VudCIsImNvZGVfaGFzaCIsImFjY291bnRDb2RlTWlzc2luZyIsInBhcmFtc0Zyb21BY2NvdW50IiwiYm9jIiwibGFzdF9wYWlkIiwicmVxdWVzdENvcmUiLCJjb25zIiwiaXRlbSIsImludmFsaWRDb25zIiwiY29yZVZlcnNpb24iLCJjb25maWdTZXJ2ZXIiLCJxdWVyeVVybCIsInB1c2giLCJyZXRyeUluZGV4IiwibG9nIiwiYWJpIiwiY29uc3RydWN0b3JIZWFkZXIiLCJjb25zdHJ1Y3RvclBhcmFtcyIsImluaXRQYXJhbXMiLCJpbWFnZUJhc2U2NCIsImtleVBhaXIiLCJ3b3JrY2hhaW5JZCIsIm1lc3NhZ2UiLCJmdW5jdGlvbk5hbWUiLCJoZWFkZXIiLCJ0cnlJbmRleCIsImlucHV0IiwicHVibGljS2V5SGV4IiwiYWRkcmVzc0hleCIsInNpZ25QYXJhbXMiLCJlbmNvZGVkIiwiY3JlYXRlU2lnbmVkTWVzc2FnZSIsInVuc2lnbmVkTWVzc2FnZSIsInVuc2lnbmVkQnl0ZXNCYXNlNjQiLCJzaWduQnl0ZXNCYXNlNjQiLCJleHBpcmUiLCJnZXRCb2NIYXNoIiwibWVzc2FnZUJvZHlCYXNlNjQiLCJoYXNoIiwiRGF0ZSIsIm5vdyIsInNlbmROb2RlUmVxdWVzdEZhaWxlZCIsIk1hdGgiLCJzZXJ2ZXJUaW1lRGVsdGEiLCJhYnMiLCJvdXRPZlN5bmNUaHJlc2hvbGQiLCJkcm9wU2VydmVyVGltZURlbHRhIiwiY2xvY2tPdXRPZlN5bmMiLCJmaW5kTGFzdFNoYXJkQmxvY2siLCJsYXN0QmxvY2tJZCIsImVuc3VyZU1lc3NhZ2VJZCIsImlkQmFzZTY0IiwiQnVmZmVyIiwiZnJvbSIsInRvU3RyaW5nIiwibWVzc2FnZVNwYW4iLCJzdGFydFJvb3RTcGFuIiwiYWRkVGFncyIsIm1lc3NhZ2VTaXplIiwiY2VpbCIsInBvc3RSZXF1ZXN0cyIsImJvZHkiLCJzZW5kaW5nVGltZSIsInJvdW5kIiwicmVzdWx0RmllbGRzIiwic2VuZE1lc3NhZ2UiLCJ3YWl0Rm9yVHJhbnNhY3Rpb24iLCJtZXNzYWdlUHJvY2Vzc2luZ1N0YXRlIiwidHJhbnNhY3Rpb24iLCJjaGFpbiIsImFkZGl0aW9uYWxGaWx0ZXIiLCJibG9ja3MiLCJ3b3JrY2hhaW5faWQiLCJvcmRlckJ5IiwiZGlyZWN0aW9uIiwibGltaXQiLCJzaGFyZHMiLCJhZGRyZXNzUGFydHMiLCJ3b3JrY2hhaW4iLCJOdW1iZXIiLCJwYXJzZUludCIsImZpbmRMYXN0QmxvY2siLCJtYXN0ZXJjaGFpbkxhc3RCbG9jayIsIm5vQmxvY2tzIiwid29ya2NoYWluTGFzdEJsb2NrIiwiYWZ0ZXJfbWVyZ2UiLCJzaGFyZCIsImludmFsaWRCbG9ja2NoYWluIiwibWFzdGVyIiwic2hhcmRfaGFzaGVzIiwiZmluZE1hdGNoaW5nU2hhcmQiLCJzaGFyZEJsb2NrIiwicm9vdF9oYXNoIiwiZGVzY3IiLCJibG9jayIsImN1cnJlbnQiLCJ3YWl0Rm9yIiwicHJldl9yZWYiLCJPUiIsInByZXZfYWx0X3JlZiIsIkJMT0NLX0ZJRUxEUyIsImFmdGVyX3NwbGl0IiwiY2hlY2tTaGFyZE1hdGNoIiwibmUiLCJ0b3RhbFN0YXJ0IiwidGltZVJlcG9ydCIsInN0b3BUaW1lIiwibWVzc2FnZVByb2Nlc3NpbmdUaW1lb3V0IiwiaW5maW5pdGVXYWl0IiwiYWRkVGltZW91dCIsIm1heCIsInN0YXJ0Iiwid2FpdE5leHRCbG9jayIsImVuZCIsImdlbl91dGltZSIsInJlc29sdmVkRXJyb3IiLCJjb2RlIiwiVE9ORXJyb3JDb2RlIiwiV0FJVF9GT1JfVElNRU9VVCIsImJsb2NrSWQiLCJuZXR3b3JrU2lsZW50IiwiaW5Nc2ciLCJpbl9tc2dfZGVzY3IiLCJmaW5kIiwieCIsIm1zZ19pZCIsInRyYW5zYWN0aW9uSWQiLCJ0cmFuc2FjdGlvbl9pZCIsInRyU3RhcnQiLCJ0cmFuc2FjdGlvbnMiLCJUUkFOU0FDVElPTl9GSUVMRFNfT1JESU5BUlkiLCJNQVhfVElNRU9VVCIsImJsb2NrVGltZSIsIm1lc3NhZ2VFeHBpcmVkIiwidHJhbnNhY3Rpb25XYWl0VGltZW91dCIsInNwbGljZSIsImpvaW4iLCJNRVNTQUdFX0VYUElSRUQiLCJUUkFOU0FDVElPTl9XQUlUX1RJTUVPVVQiLCJyZXNvbHZlRGV0YWlsZWRFcnJvciIsInByb2Nlc3NUcmFuc2FjdGlvbiIsInByb2Nlc3NpbmdUaW1lb3V0IiwicHJvbWlzZXMiLCJnZXRTZXJ2ZXJJbmZvIiwic2VydmVySW5mbyIsIm9wZXJhdGlvbklkIiwic3VwcG9ydHNPcGVyYXRpb25JZCIsImdlbmVyYXRlT3BlcmF0aW9uSWQiLCJ1bmRlZmluZWQiLCJibG9ja1RpbWVvdXQiLCJ3YWl0RXhwaXJlZCIsIm1pbl9zaGFyZF9nZW5fdXRpbWUiLCJnZSIsImlzV2FpdEZvclRpbWVvdXQiLCJtc2ciLCJpbnRlcm5hbEVycm9yIiwiUHJvbWlzZSIsInJlc29sdmUiLCJyZWplY3QiLCJpbl9tc2ciLCJzdGF0dXMiLCJ0cmFuc2FjdGlvbkRldGFpbHMiLCJyYWNlIiwiZmluaXNoT3BlcmF0aW9ucyIsInRyYW5zYWN0aW9uTm93IiwiYmxvY2tfaWQiLCJ0b0lTT1N0cmluZyIsImlzTWVzc2FnZUV4cGlyZWQiLCJpc0NsaWVudEVycm9yIiwiZGV0YWlsZWRFcnJvciIsImRhdGEiLCJvdXRwdXQiLCJmZWVzIiwib3JpZ2luYWxfZXJyb3IiLCJhY2NvdW50TWlzc2luZyIsImVycm9yIiwibWVzc2FnZUJhc2U2NCIsInRpbWUiLCJtYWluRXJyb3IiLCJhY2NfdHlwZSIsImlzRGVwbG95ZWQiLCJhbHJlYWR5RGVwbG95ZWQiLCJ3YWl0Rm9yRGVwbG95VHJhbnNhY3Rpb24iLCJkZXBsb3lNZXNzYWdlIiwicnVuTWVzc2FnZSIsIndhaXRGb3JSdW5UcmFuc2FjdGlvbiIsIndhaXRQYXJhbXMiLCJlbXVsYXRlQmFsYW5jZSIsImJpZ0JhbGFuY2UiLCJjcmVhdGVEZXBsb3lNZXNzYWdlIiwiY2FsY01zZ1Byb2Nlc3NGZWVzIiwibmV3QWNjb3VudCIsImZsb29yIiwiY2FsbCIsInJldHJpZXNDb3VudCIsIm1lc3NhZ2VSZXRyaWVzQ291bnQiLCJpIiwidXNlUmV0cnkiLCJpc09yaWdpbmFsQ29udHJhY3RFcnJvciIsIlRPTkNvbnRyYWN0RXhpdENvZGUiLCJSRVBMQVlfUFJPVEVDVElPTiIsImlzUmVzb2x2ZWRDb250cmFjdEVycm9yQWZ0ZXJFeHBpcmUiLCJyZXRyeUNhbGwiLCJjcmVhdGVSdW5NZXNzYWdlIiwidHJhbnNhY3Rpb25MdCIsImxhc3RfdHJhbnNfbHQiLCJmdWxsUnVuIiwiVE9OTW9kdWxlIiwibW9kdWxlTmFtZSJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7OztBQUtBOztBQXNEQTs7QUFDQTs7QUFDQTs7QUFDQTs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUVPLElBQU1BLHVCQUF1QixHQUFHO0FBQ25DQyxFQUFBQSxTQUFTLEVBQUUsV0FEd0I7QUFFbkNDLEVBQUFBLEdBQUcsRUFBRSxLQUY4QjtBQUduQ0MsRUFBQUEsTUFBTSxFQUFFO0FBSDJCLENBQWhDOztBQU1BLElBQU1DLHlCQUF5QixHQUFHO0FBQ3JDQyxFQUFBQSxPQUFPLEVBQUUsU0FENEI7QUFFckNDLEVBQUFBLGNBQWMsRUFBRSxnQkFGcUI7QUFHckNDLEVBQUFBLFNBQVMsRUFBRSxXQUgwQjtBQUlyQ0MsRUFBQUEsTUFBTSxFQUFFLFFBSjZCO0FBS3JDQyxFQUFBQSxPQUFPLEVBQUU7QUFMNEIsQ0FBbEM7O0FBUUEsSUFBTUMsNkJBQTZCLEdBQUc7QUFDekNDLEVBQUFBLE9BQU8sRUFBRSxDQURnQztBQUV6Q0MsRUFBQUEsUUFBUSxFQUFFLENBRitCO0FBR3pDQyxFQUFBQSxLQUFLLEVBQUU7QUFIa0MsQ0FBdEM7O0FBTUEsSUFBTUMsc0JBQXNCLEdBQUc7QUFDbENDLEVBQUFBLFNBQVMsRUFBRSxDQUR1QjtBQUVsQ0MsRUFBQUEsTUFBTSxFQUFFLENBRjBCO0FB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Sy9DeUosa0JBQUFBLGFBQWEsRUFBRTdNLE1BQU0sQ0FBQ2tFLGlCQUx5QjtBQU0vQ3lLLGtCQUFBQSxPQUFPLEVBQUUzTyxNQUFNLENBQUMyTztBQU4rQixpQkFBNUMsQzs7Ozs7Ozs7Ozs7Ozs7Ozs7OztFQXh1Q2lDQyxxQjs7O0FBbXZDaERuUCxrQkFBa0IsQ0FBQ29QLFVBQW5CLEdBQWdDLG9CQUFoQztBQUVBLElBQU0vQyxrQkFBa0IsMmtCQUF4QjtBQXdDQSxJQUFNN0QsWUFBWSwrSUFBbEI7QUFZQSxJQUFNOEIsMkJBQTJCLCtlQUFqQyIsInNvdXJjZXNDb250ZW50IjpbIi8qXG4gKiBDb3B5cmlnaHQgMjAxOC0yMDIwIFRPTiBERVYgU09MVVRJT05TIExURC5cbiAqL1xuLy8gQGZsb3dcblxuaW1wb3J0IHsgVHJhY2VyLCBGT1JNQVRfVEVYVF9NQVAsIFNwYW4sIFNwYW5Db250ZXh0IH0gZnJvbSAnb3BlbnRyYWNpbmcnO1xuaW1wb3J0IHR5cGUge1xuICAgIFFBY2NvdW50LFxuICAgIFFCbG9jayxcbiAgICBRTWVzc2FnZSxcbiAgICBRVHJhbnNhY3Rpb24sXG4gICAgVE9OQ29udHJhY3RBQkksXG4gICAgVE9OQ29udHJhY3RBY2NvdW50V2FpdFBhcmFtcyxcbiAgICBUT05Db250cmFjdENvbnZlcnRBZGRyZXNzUGFyYW1zLFxuICAgIFRPTkNvbnRyYWN0Q29udmVydEFkZHJlc3NSZXN1bHQsXG4gICAgVE9OQ29udHJhY3RDcmVhdGVSdW5Cb2R5UGFyYW1zLFxuICAgIFRPTkNvbnRyYWN0Q3JlYXRlUnVuQm9keVJlc3VsdCxcbiAgICBUT05Db250cmFjdENyZWF0ZVNpZ25lZERlcGxveU1lc3NhZ2VQYXJhbXMsXG4gICAgVE9OQ29udHJhY3RDcmVhdGVTaWduZWRNZXNzYWdlUGFyYW1zLFxuICAgIFRPTkNvbnRyYWN0Q3JlYXRlU2lnbmVkUnVuTWVzc2FnZVBhcmFtcyxcbiAgICBUT05Db250cmFjdERlY29kZU1lc3NhZ2VCb2R5UGFyYW1zLFxuICAgIFRPTkNvbnRyYWN0RGVjb2RlTWVzc2FnZUJvZHlSZXN1bHQsXG4gICAgVE9OQ29udHJhY3REZWNvZGVSdW5PdXRwdXRQYXJhbXMsXG4gICAgVE9OQ29udHJhY3REZXBsb3lNZXNzYWdlLFxuICAgIFRPTkNvbnRyYWN0RGVwbG95UGFyYW1zLFxuICAgIFRPTkNvbnRyYWN0RGVwbG95UmVzdWx0LFxuICAgIFRPTkNvbnRyYWN0Q2FsY0RlcGxveUZlZVBhcmFtcyxcbiAgICBUT05Db250cmFjdEJvYyxcbiAgICBUT05Db250cmFjdEdldEJvY0hhc2hSZXN1bHQsXG4gICAgVE9OQ29udHJhY3RHZXRDb2RlRnJvbUltYWdlUGFyYW1zLFxuICAgIFRPTkNvbnRyYWN0R2V0Q29kZUZyb21JbWFnZVJlc3VsdCxcbiAgICBUT05Db250cmFjdEdldERlcGxveURhdGFQYXJhbXMsXG4gICAgVE9OQ29udHJhY3RHZXREZXBsb3lEYXRhUmVzdWx0LFxuICAgIFRPTkNvbnRyYWN0R2V0RnVuY3Rpb25JZFBhcmFtcyxcbiAgICBUT05Db250cmFjdEdldEZ1bmN0aW9uSWRSZXN1bHQsXG4gICAgVE9OQ29udHJhY3RMb2FkUGFyYW1zLFxuICAgIFRPTkNvbnRyYWN0TG9hZFJlc3VsdCxcbiAgICBUT05Db250cmFjdENhbGNSdW5GZWVQYXJhbXMsXG4gICAgVE9OQ29udHJhY3RDYWxjRmVlUmVzdWx0LFxuICAgIFRPTkNvbnRyYWN0Q2FsY01zZ1Byb2Nlc3NpbmdGZWVzUGFyYW1zLFxuICAgIFRPTkNvbnRyYWN0TWVzc2FnZSxcbiAgICBUT05Db250cmFjdFJ1bkxvY2FsUGFyYW1zLFxuICAgIFRPTkNvbnRyYWN0UnVuTWVzc2FnZSxcbiAgICBUT05Db250cmFjdFJ1blBhcmFtcyxcbiAgICBUT05Db250cmFjdFJ1blJlc3VsdCxcbiAgICBUT05Db250cmFjdHMsXG4gICAgVE9OQ29udHJhY3RVbnNpZ25lZERlcGxveU1lc3NhZ2UsXG4gICAgVE9OQ29udHJhY3RVbnNpZ25lZE1lc3NhZ2UsXG4gICAgVE9OQ29udHJhY3RVbnNpZ25lZFJ1bk1lc3NhZ2UsXG4gICAgVE9OQ29udHJhY3RSdW5HZXRQYXJhbXMsXG4gICAgVE9OQ29udHJhY3RSdW5HZXRSZXN1bHQsXG4gICAgVE9OQ29udHJhY3RSdW5NZXNzYWdlTG9jYWxQYXJhbXMsXG4gICAgVE9OQ29udHJhY3RSdW5Mb2NhbFJlc3VsdCxcbiAgICBUT05Db250cmFjdFRyYW5zYWN0aW9uRmVlcyxcbiAgICBUT05XYWl0Rm9yVHJhbnNhY3Rpb25QYXJhbXMsXG4gICAgUVNoYXJkSGFzaCxcbiAgICBUT05NZXNzYWdlUHJvY2Vzc2luZ1N0YXRlLFxufSBmcm9tICcuLi8uLi90eXBlcyc7XG5cbmltcG9ydCB7IFRPTkNsaWVudEVycm9yLCBUT05Db250cmFjdEV4aXRDb2RlLCBUT05FcnJvckNvZGUgfSBmcm9tICcuLi9UT05DbGllbnQnO1xuaW1wb3J0IHsgVE9OTW9kdWxlIH0gZnJvbSAnLi4vVE9OTW9kdWxlJztcbmltcG9ydCBUT05Db25maWdNb2R1bGUgZnJvbSAnLi9UT05Db25maWdNb2R1bGUnO1xuaW1wb3J0IFRPTlF1ZXJpZXNNb2R1bGUsIHsgTUFYX1RJTUVPVVQgfSBmcm9tICcuL1RPTlF1ZXJpZXNNb2R1bGUnO1xuXG5leHBvcnQgY29uc3QgVE9OQWRkcmVzc1N0cmluZ1ZhcmlhbnQgPSB7XG4gICAgQWNjb3VudElkOiAnQWNjb3VudElkJyxcbiAgICBIZXg6ICdIZXgnLFxuICAgIEJhc2U2NDogJ0Jhc2U2NCcsXG59O1xuXG5leHBvcnQgY29uc3QgVE9OQ2xpZW50VHJhbnNhY3Rpb25QaGFzZSA9IHtcbiAgICBzdG9yYWdlOiAnc3RvcmFnZScsXG4gICAgY29tcHV0ZVNraXBwZWQ6ICdjb21wdXRlU2tpcHBlZCcsXG4gICAgY29tcHV0ZVZtOiAnY29tcHV0ZVZtJyxcbiAgICBhY3Rpb246ICdhY3Rpb24nLFxuICAgIHVua25vd246ICd1bmtub3duJyxcbn07XG5cbmV4cG9ydCBjb25zdCBUT05DbGllbnRDb21wdXRlU2tpcHBlZFN0YXR1cyA9IHtcbiAgICBub1N0YXRlOiAwLFxuICAgIGJhZFN0YXRlOiAxLFxuICAgIG5vR2FzOiAyLFxufTtcblxuZXhwb3J0IGNvbnN0IFRPTkNsaWVudFN0b3JhZ2VTdGF0dXMgPSB7XG4gICAgdW5jaGFuZ2VkOiAwLFxuICAgIGZyb3plbjogMSxcbiAgICBkZWxldGVkOiAyLFxufTtcblxuZXhwb3J0IGNvbnN0IFFJbk1zZ1R5cGUgPSB7XG4gICAgZXh0ZXJuYWw6IDAsXG4gICAgaWhyOiAxLFxuICAgIGltbWVkaWF0ZWx5OiAyLFxuICAgIGZpbmFsOiAzLFxuICAgIHRyYW5zaXQ6IDQsXG4gICAgZGlzY2FyZGVkRmluYWw6IDUsXG4gICAgZGlzY2FyZGVkVHJhbnNpdDogNixcbn07XG5cbmV4cG9ydCBjb25zdCBRT3V0TXNnVHlwZSA9IHtcbiAgICBleHRlcm5hbDogMCxcbiAgICBpbW1lZGlhdGVseTogMSxcbiAgICBvdXRNc2dOZXc6IDIsXG4gICAgdHJhbnNpdDogMyxcbiAgICBkZXF1ZXVlSW1tZWRpYXRlbHk6IDQsXG4gICAgZGVxdWV1ZTogNSxcbiAgICB0cmFuc2l0UmVxdWlyZWQ6IDYsXG4gICAgbm9uZTogLTEsXG59O1xuXG5leHBvcnQgY29uc3QgUU1lc3NhZ2VUeXBlID0ge1xuICAgIGludGVybmFsOiAwLFxuICAgIGV4dEluOiAxLFxuICAgIGV4dE91dDogMixcbn07XG5cbmV4cG9ydCBjb25zdCBRTWVzc2FnZVByb2Nlc3NpbmdTdGF0dXMgPSB7XG4gICAgdW5rbm93bjogMCxcbiAgICBxdWV1ZWQ6IDEsXG4gICAgcHJvY2Vzc2luZzogMixcbiAgICBwcmVsaW1pbmFyeTogMyxcbiAgICBwcm9wb3NlZDogNCxcbiAgICBmaW5hbGl6ZWQ6IDUsXG4gICAgcmVmdXNlZDogNixcbiAgICB0cmFuc2l0aW5nOiA3LFxufTtcblxuZXhwb3J0IGNvbnN0IFFCbG9ja1Byb2Nlc3NpbmdTdGF0dXMgPSB7XG4gICAgdW5rbm93bjogMCxcbiAgICBwcm9wb3NlZDogMSxcbiAgICBmaW5hbGl6ZWQ6IDIsXG4gICAgcmVmdXNlZDogMyxcbn07XG5cbmV4cG9ydCBjb25zdCBRU3BsaXRUeXBlID0ge1xuICAgIG5vbmU6IDAsXG4gICAgc3BsaXQ6IDIsXG4gICAgbWVyZ2U6IDMsXG59O1xuXG5leHBvcnQgY29uc3QgUUFjY291bnRUeXBlID0ge1xuICAgIHVuaW5pdDogMCxcbiAgICBhY3RpdmU6IDEsXG4gICAgZnJvemVuOiAyLFxufTtcblxuZXhwb3J0IGNvbnN0IFFUcmFuc2FjdGlvblR5cGUgPSB7XG4gICAgb3JkaW5hcnk6IDAsXG4gICAgc3RvcmFnZTogMSxcbiAgICB0aWNrOiAyLFxuICAgIHRvY2s6IDMsXG4gICAgc3BsaXRQcmVwYXJlOiA0LFxuICAgIHNwbGl0SW5zdGFsbDogNSxcbiAgICBtZXJnZVByZXBhcmU6IDYsXG4gICAgbWVyZ2VJbnN0YWxsOiA3LFxufTtcblxuZXhwb3J0IGNvbnN0IFFUcmFuc2FjdGlvblByb2Nlc3NpbmdTdGF0dXMgPSB7XG4gICAgdW5rbm93bjogMCxcbiAgICBwcmVsaW1pbmFyeTogMSxcbiAgICBwcm9wb3NlZDogMixcbiAgICBmaW5hbGl6ZWQ6IDMsXG4gICAgcmVmdXNlZDogNCxcbn07XG5cbmV4cG9ydCBjb25zdCBRQWNjb3VudFN0YXR1cyA9IHtcbiAgICB1bmluaXQ6IDAsXG4gICAgYWN0aXZlOiAxLFxuICAgIGZyb3plbjogMixcbiAgICBub25FeGlzdDogMyxcbn07XG5cbmV4cG9ydCBjb25zdCBRQWNjb3VudFN0YXR1c0NoYW5nZSA9IHtcbiAgICB1bmNoYW5nZWQ6IDAsXG4gICAgZnJvemVuOiAxLFxuICAgIGRlbGV0ZWQ6IDIsXG59O1xuXG5leHBvcnQgY29uc3QgUUNvbXB1dGVUeXBlID0ge1xuICAgIHNraXBwZWQ6IDAsXG4gICAgdm06IDEsXG59O1xuXG5leHBvcnQgY29uc3QgUVNraXBSZWFzb24gPSB7XG4gICAgbm9TdGF0ZTogMCxcbiAgICBiYWRTdGF0ZTogMSxcbiAgICBub0dhczogMixcbn07XG5cbmV4cG9ydCBjb25zdCBRQm91bmNlVHlwZSA9IHtcbiAgICBuZWdGdW5kczogMCxcbiAgICBub0Z1bmRzOiAxLFxuICAgIG9rOiAyLFxufTtcblxuY29uc3QgTUFTVEVSQ0hBSU5fSUQgPSAtMTtcblxuY29uc3QgRVhUUkFfVFJBTlNBQ1RJT05fV0FJVElOR19USU1FID0gMTAwMDA7XG5jb25zdCBCTE9DS19UUkFOU0FDVElPTl9XQUlUSU5HX1RJTUUgPSA1MDAwO1xuXG5mdW5jdGlvbiByZW1vdmVUeXBlTmFtZShvYmo6IGFueSkge1xuICAgIGlmIChvYmouX190eXBlbmFtZSkge1xuICAgICAgICBkZWxldGUgb2JqLl9fdHlwZW5hbWU7XG4gICAgfVxuICAgIE9iamVjdC52YWx1ZXMob2JqKVxuICAgICAgICAuZm9yRWFjaCgodmFsdWUpID0+IHtcbiAgICAgICAgICAgIGlmICghIXZhbHVlICYmIHR5cGVvZiB2YWx1ZSA9PT0gJ29iamVjdCcpIHtcbiAgICAgICAgICAgICAgICByZW1vdmVUeXBlTmFtZSh2YWx1ZSk7XG4gICAgICAgICAgICB9XG4gICAgICAgIH0pO1xufVxuXG5leHBvcnQgZnVuY3Rpb24gcmVtb3ZlUHJvcHMob2JqOiB7fSwgcGF0aHM6IHN0cmluZ1tdKToge30ge1xuICAgIGxldCByZXN1bHQgPSBvYmo7XG4gICAgcGF0aHMuZm9yRWFjaCgocGF0aCkgPT4ge1xuICAgICAgICBjb25zdCBkb3RQb3MgPSBwYXRoLmluZGV4T2YoJy4nKTtcbiAgICAgICAgaWYgKGRvdFBvcyA8IDApIHtcbiAgICAgICAgICAgIGlmIChwYXRoIGluIHJlc3VsdCkge1xuICAgICAgICAgICAgICAgIHJlc3VsdCA9IHsgLi4ucmVzdWx0IH07XG4gICAgICAgICAgICAgICAgZGVsZXRlIHJlc3VsdFtwYXRoXTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIGNvbnN0IG5hbWUgPSBwYXRoLnN1YnN0cigwLCBkb3RQb3MpO1xuICAgICAgICAgICAgY29uc3QgY2hpbGQgPSByZXN1bHRbbmFtZV07XG4gICAgICAgICAgICBpZiAoY2hpbGQpIHtcbiAgICAgICAgICAgICAgICBjb25zdCByZWR1Y2VkQ2hpbGQgPSByZW1vdmVQcm9wcyhjaGlsZCwgW3BhdGguc3Vic3RyKGRvdFBvcyArIDEpXSk7XG4gICAgICAgICAgICAgICAgaWYgKHJlZHVjZWRDaGlsZCAhPT0gY2hpbGQpIHtcbiAgICAgICAgICAgICAgICAgICAgcmVzdWx0ID0ge1xuICAgICAgICAgICAgICAgICAgICAgICAgLi4ucmVzdWx0LFxuICAgICAgICAgICAgICAgICAgICAgICAgW25hbWVdOiByZWR1Y2VkQ2hpbGQsXG4gICAgICAgICAgICAgICAgICAgIH07XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgfSk7XG4gICAgcmV0dXJuIHJlc3VsdDtcbn1cblxuZnVuY3Rpb24gc3RhcnRNZXNzYWdlVHJhY2VTcGFuKFxuICAgIHRyYWNlcjogVHJhY2VyLFxuICAgIG1lc3NhZ2VJZDogc3RyaW5nLFxuICAgIG9wZXJhdGlvbk5hbWU6IHN0cmluZyxcbiAgICB0YWdzOiB7IFtzdHJpbmddOiBhbnkgfSxcbik6ID9TcGFuIHtcbiAgICBpZiAoIW1lc3NhZ2VJZCkge1xuICAgICAgICByZXR1cm4gbnVsbDtcbiAgICB9XG4gICAgY29uc3QgdHJhY2VJZCA9IG1lc3NhZ2VJZC5zdWJzdHIoMCwgMTYpO1xuICAgIGNvbnN0IHNwYW5JZCA9IG1lc3NhZ2VJZC5zdWJzdHIoMTYsIDE2KTtcbiAgICBsZXQgcm9vdENvbnRleHQ6ID9TcGFuQ29udGV4dCA9IG51bGw7XG4gICAgdHJ5IHtcbiAgICAgICAgcm9vdENvbnRleHQgPSB0cmFjZXIuZXh0cmFjdChGT1JNQVRfVEVYVF9NQVAsIHtcbiAgICAgICAgICAgICd1YmVyLXRyYWNlLWlkJzogYCR7dHJhY2VJZH06JHtzcGFuSWR9OjA6MWAsXG4gICAgICAgIH0pO1xuICAgIH0gY2F0Y2gge1xuICAgICAgICAvLyB0cmFjZXIgY2FuJ3QgY3JlYXRlIGphZWdlciBjb21wYXRpYmxlIHNwYW4sXG4gICAgICAgIC8vIHNvIHdlIGFyZSBmYWxsYmFjayB0byByZXR1cm4gbnVsbFxuICAgIH1cbiAgICBpZiAoIXJvb3RDb250ZXh0KSB7XG4gICAgICAgIHJldHVybiBudWxsO1xuICAgIH1cbiAgICByZXR1cm4gdHJhY2VyLnN0YXJ0U3BhbihvcGVyYXRpb25OYW1lLCB7XG4gICAgICAgIGNoaWxkT2Y6IHJvb3RDb250ZXh0LFxuICAgICAgICB0YWdzLFxuICAgIH0pXG59XG5cbmZ1bmN0aW9uIHRyYWNlTWVzc2FnZShcbiAgICB0cmFjZXI6IFRyYWNlcixcbiAgICBtZXNzYWdlSWQ6IHN0cmluZyxcbiAgICBvcGVyYXRpb25OYW1lOiBzdHJpbmcsXG4gICAgdGFnczogeyBbc3RyaW5nXTogYW55IH0sXG4pIHtcbiAgICBjb25zdCBzcGFuID0gc3RhcnRNZXNzYWdlVHJhY2VTcGFuKHRyYWNlciwgbWVzc2FnZUlkLCBvcGVyYXRpb25OYW1lLCB0YWdzKTtcbiAgICBpZiAoc3Bhbikge1xuICAgICAgICBzcGFuLmZpbmlzaCgpO1xuICAgIH1cbn1cblxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgVE9OQ29udHJhY3RzTW9kdWxlIGV4dGVuZHMgVE9OTW9kdWxlIGltcGxlbWVudHMgVE9OQ29udHJhY3RzIHtcbiAgICBjb25maWc6IFRPTkNvbmZpZ01vZHVsZTtcblxuICAgIHF1ZXJpZXM6IFRPTlF1ZXJpZXNNb2R1bGU7XG5cbiAgICBhc3luYyBzZXR1cCgpOiBQcm9taXNlPCo+IHtcbiAgICAgICAgdGhpcy5jb25maWcgPSB0aGlzLmNvbnRleHQuZ2V0TW9kdWxlKFRPTkNvbmZpZ01vZHVsZSk7XG4gICAgICAgIHRoaXMucXVlcmllcyA9IHRoaXMuY29udGV4dC5nZXRNb2R1bGUoVE9OUXVlcmllc01vZHVsZSk7XG4gICAgfVxuXG4gICAgYXN5bmMgbG9hZChcbiAgICAgICAgcGFyYW1zOiBUT05Db250cmFjdExvYWRQYXJhbXMsXG4gICAgICAgIHBhcmVudFNwYW4/OiAoU3BhbiB8IFNwYW5Db250ZXh0KSxcbiAgICApOiBQcm9taXNlPFRPTkNvbnRyYWN0TG9hZFJlc3VsdD4ge1xuICAgICAgICBjb25zdCBhY2NvdW50czogUUFjY291bnRbXSA9IGF3YWl0IHRoaXMucXVlcmllcy5hY2NvdW50cy5xdWVyeSh7XG4gICAgICAgICAgICBmaWx0ZXI6IHtcbiAgICAgICAgICAgICAgICBpZDogeyBlcTogcGFyYW1zLmFkZHJlc3MgfSxcbiAgICAgICAgICAgIH0sXG4gICAgICAgICAgICByZXN1bHQ6ICdiYWxhbmNlJyxcbiAgICAgICAgICAgIHBhcmVudFNwYW4sXG4gICAgICAgIH0pO1xuICAgICAgICBpZiAoYWNjb3VudHMgJiYgYWNjb3VudHMubGVuZ3RoID4gMCkge1xuICAgICAgICAgICAgcmV0dXJuIHtcbiAgICAgICAgICAgICAgICBpZDogcGFyYW1zLmFkZHJlc3MsXG4gICAgICAgICAgICAgICAgYmFsYW5jZUdyYW1zOiBhY2NvdW50c1swXS5iYWxhbmNlLFxuICAgICAgICAgICAgfTtcbiAgICAgICAgfVxuICAgICAgICByZXR1cm4ge1xuICAgICAgICAgICAgaWQ6IG51bGwsXG4gICAgICAgICAgICBiYWxhbmNlR3JhbXM6IG51bGwsXG4gICAgICAgIH07XG4gICAgfVxuXG5cbiAgICAvLyBGYWNhZGUgZnVuY3Rpb25zXG5cbiAgICBhc3luYyBkZXBsb3koXG4gICAgICAgIHBhcmFtczogVE9OQ29udHJhY3REZXBsb3lQYXJhbXMsXG4gICAgICAgIHBhcmVudFNwYW4/OiAoU3BhbiB8IFNwYW5Db250ZXh0KSxcbiAgICApOiBQcm9taXNlPFRPTkNvbnRyYWN0RGVwbG95UmVzdWx0PiB7XG4gICAgICAgIHJldHVybiB0aGlzLmNvbnRleHQudHJhY2UoJ2NvbnRyYWN0cy5kZXBsb3knLCBhc3luYyAoc3BhbjogU3BhbikgPT4ge1xuICAgICAgICAgICAgc3Bhbi5zZXRUYWcoJ3BhcmFtcycsIHJlbW92ZVByb3BzKHBhcmFtcywgWydrZXlQYWlyLnNlY3JldCddKSk7XG4gICAgICAgICAgICByZXR1cm4gdGhpcy5pbnRlcm5hbERlcGxveUpzKHBhcmFtcywgc3Bhbik7XG4gICAgICAgIH0sIHBhcmVudFNwYW4pO1xuICAgIH1cblxuXG4gICAgYXN5bmMgcnVuKFxuICAgICAgICBwYXJhbXM6IFRPTkNvbnRyYWN0UnVuUGFyYW1zLFxuICAgICAgICBwYXJlbnRTcGFuPzogKFNwYW4gfCBTcGFuQ29udGV4dCksXG4gICAgKTogUHJvbWlzZTxUT05Db250cmFjdFJ1blJlc3VsdD4ge1xuICAgICAgICByZXR1cm4gdGhpcy5jb250ZXh0LnRyYWNlKCdjb250cmFjdHMucnVuJywgYXN5bmMgKHNwYW46IFNwYW4pID0+IHtcbiAgICAgICAgICAgIHNwYW4uc2V0VGFnKCdwYXJhbXMnLCByZW1vdmVQcm9wcyhwYXJhbXMsIFsna2V5UGFpci5zZWNyZXQnXSkpO1xuICAgICAgICAgICAgcmV0dXJuIHRoaXMuaW50ZXJuYWxSdW5KcyhwYXJhbXMsIHNwYW4pO1xuICAgICAgICB9LCBwYXJlbnRTcGFuKTtcbiAgICB9XG5cbiAgICBhc3luYyBydW5Mb2NhbChcbiAgICAgICAgcGFyYW1zOiBUT05Db250cmFjdFJ1bkxvY2FsUGFyYW1zLFxuICAgICAgICBwYXJlbnRTcGFuPzogKFNwYW4gfCBTcGFuQ29udGV4dCksXG4gICAgKTogUHJvbWlzZTxUT05Db250cmFjdFJ1bkxvY2FsUmVzdWx0PiB7XG4gICAgICAgIHJldHVybiB0aGlzLmNvbnRleHQudHJhY2UoJ2NvbnRyYWN0cy5ydW5Mb2NhbCcsIGFzeW5jIChzcGFuOiBTcGFuKSA9PiB7XG4gICAgICAgICAgICBzcGFuLnNldFRhZygncGFyYW1zJywgcmVtb3ZlUHJvcHMocGFyYW1zLCBbJ2tleVBhaXIuc2VjcmV0J10pKTtcbiAgICAgICAgICAgIHJldHVybiB0aGlzLmludGVybmFsUnVuTG9jYWxKcyhwYXJhbXMsIHNwYW4pO1xuICAgICAgICB9LCBwYXJlbnRTcGFuKTtcbiAgICB9XG5cbiAgICBhc3luYyBydW5NZXNzYWdlTG9jYWwoXG4gICAgICAgIHBhcmFtczogVE9OQ29udHJhY3RSdW5NZXNzYWdlTG9jYWxQYXJhbXMsXG4gICAgICAgIHBhcmVudFNwYW4/OiAoU3BhbiB8IFNwYW5Db250ZXh0KSxcbiAgICApOiBQcm9taXNlPFRPTkNvbnRyYWN0UnVuTG9jYWxSZXN1bHQ+IHtcbiAgICAgICAgcmV0dXJuIHRoaXMuY29udGV4dC50cmFjZSgncnVuTWVzc2FnZUxvY2FsJywgYXN5bmMgKHNwYW46IFNwYW4pID0+IHtcbiAgICAgICAgICAgIHNwYW4uc2V0VGFnKCdwYXJhbXMnLCByZW1vdmVQcm9wcyhwYXJhbXMsIFsna2V5UGFpci5zZWNyZXQnXSkpO1xuICAgICAgICAgICAgcmV0dXJuIHRoaXMuaW50ZXJuYWxSdW5NZXNzYWdlTG9jYWxKcyhwYXJhbXMsIHNwYW4pO1xuICAgICAgICB9LCBwYXJlbnRTcGFuKTtcbiAgICB9XG5cbiAgICBhc3luYyBydW5HZXQoXG4gICAgICAgIHBhcmFtczogVE9OQ29udHJhY3RSdW5HZXRQYXJhbXMsXG4gICAgKTogUHJvbWlzZTxUT05Db250cmFjdFJ1bkdldFJlc3VsdD4ge1xuICAgICAgICBsZXQgY29yZVBhcmFtczogVE9OQ29udHJhY3RSdW5HZXRQYXJhbXMgPSBwYXJhbXM7XG4gICAgICAgIGNvbnN0IGhhc0NvZGUgPSBwYXJhbXMuYm9jQmFzZTY0IHx8IChwYXJhbXMuY29kZUJhc2U2NCAmJiBwYXJhbXMuZGF0YUJhc2U2NCk7XG4gICAgICAgIGlmICghaGFzQ29kZSkge1xuICAgICAgICAgICAgY29uc3QgYWRkcmVzcyA9IHBhcmFtcy5hZGRyZXNzO1xuICAgICAgICAgICAgaWYgKCFhZGRyZXNzKSB7XG4gICAgICAgICAgICAgICAgdGhyb3cgVE9OQ2xpZW50RXJyb3IuYWRkcmVzc1JlcXVpcmVkRm9yUnVuTG9jYWwoYXdhaXQgdGhpcy5nZXRDbGllbnRJbmZvKCkpO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgY29uc3QgYWNjb3VudDogYW55ID0gYXdhaXQgdGhpcy5nZXRBY2NvdW50KGFkZHJlc3MsIGZhbHNlLCB7XG4gICAgICAgICAgICAgICAgdGltZW91dDogdGhpcy5jb25maWcud2FpdEZvclRpbWVvdXQoKSxcbiAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgaWYgKCFhY2NvdW50LmNvZGVfaGFzaCkge1xuICAgICAgICAgICAgICAgIHRocm93IFRPTkNsaWVudEVycm9yLmFjY291bnRDb2RlTWlzc2luZyhhd2FpdCB0aGlzLmdldENsaWVudEluZm8oKSwgYWRkcmVzcywgYWNjb3VudC5iYWxhbmNlKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGNvbnN0IHBhcmFtc0Zyb21BY2NvdW50OiAkU2hhcGU8VE9OQ29udHJhY3RSdW5HZXRQYXJhbXM+ID0ge307XG4gICAgICAgICAgICBpZiAoYWNjb3VudC5ib2MpIHtcbiAgICAgICAgICAgICAgICBwYXJhbXNGcm9tQWNjb3VudC5ib2NCYXNlNjQgPSBhY2NvdW50LmJvYztcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGlmIChhY2NvdW50Lmxhc3RfcGFpZCkge1xuICAgICAgICAgICAgICAgIHBhcmFtc0Zyb21BY2NvdW50Lmxhc3RfcGFpZCA9IGFjY291bnQubGFzdF9wYWlkO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgaWYgKGFjY291bnQuYmFsYW5jZSkge1xuICAgICAgICAgICAgICAgIHBhcmFtc0Zyb21BY2NvdW50LmJhbGFuY2UgPSBhY2NvdW50LmJhbGFuY2U7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBjb3JlUGFyYW1zID0ge1xuICAgICAgICAgICAgICAgIC4uLnBhcmFtc0Zyb21BY2NvdW50LFxuICAgICAgICAgICAgICAgIC4uLnBhcmFtcyxcbiAgICAgICAgICAgIH07XG4gICAgICAgIH1cbiAgICAgICAgcmV0dXJuIHRoaXMucmVxdWVzdENvcmUoJ3R2bS5nZXQnLCBjb3JlUGFyYW1zKTtcbiAgICB9XG5cbiAgICBhcnJheUZyb21DT05TKGNvbnM6IGFueVtdKTogYW55W10ge1xuICAgICAgICBjb25zdCByZXN1bHQgPSBbXTtcbiAgICAgICAgbGV0IGl0ZW0gPSBjb25zO1xuICAgICAgICB3aGlsZSAoaXRlbSkge1xuICAgICAgICAgICAgaWYgKCFpdGVtLmxlbmd0aCA9PT0gMikge1xuICAgICAgICAgICAgICAgIHRocm93IFRPTkNsaWVudEVycm9yLmludmFsaWRDb25zKHtcbiAgICAgICAgICAgICAgICAgICAgY29yZVZlcnNpb246ICcnLFxuICAgICAgICAgICAgICAgICAgICBjb25maWdTZXJ2ZXI6ICcnLFxuICAgICAgICAgICAgICAgICAgICBxdWVyeVVybDogJycsXG4gICAgICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICByZXN1bHQucHVzaChpdGVtWzBdKTtcbiAgICAgICAgICAgIGl0ZW0gPSBpdGVtWzFdO1xuICAgICAgICB9XG4gICAgICAgIHJldHVybiByZXN1bHQ7XG4gICAgfVxuXG5cbiAgICAvLyBNZXNzYWdlIGNyZWF0aW9uXG5cbiAgICBhc3luYyBjcmVhdGVEZXBsb3lNZXNzYWdlKFxuICAgICAgICBwYXJhbXM6IFRPTkNvbnRyYWN0RGVwbG95UGFyYW1zLFxuICAgICAgICByZXRyeUluZGV4PzogbnVtYmVyLFxuICAgICk6IFByb21pc2U8VE9OQ29udHJhY3REZXBsb3lNZXNzYWdlPiB7XG4gICAgICAgIHRoaXMuY29uZmlnLmxvZygnY3JlYXRlRGVwbG95TWVzc2FnZScsIHBhcmFtcyk7XG4gICAgICAgIGNvbnN0IG1lc3NhZ2U6IFRPTkNvbnRyYWN0TWVzc2FnZSA9IGF3YWl0IHRoaXMucmVxdWVzdENvcmUoJ2NvbnRyYWN0cy5kZXBsb3kubWVzc2FnZScsIHtcbiAgICAgICAgICAgIGFiaTogcGFyYW1zLnBhY2thZ2UuYWJpLFxuICAgICAgICAgICAgY29uc3RydWN0b3JIZWFkZXI6IHBhcmFtcy5jb25zdHJ1Y3RvckhlYWRlcixcbiAgICAgICAgICAgIGNvbnN0cnVjdG9yUGFyYW1zOiBwYXJhbXMuY29uc3RydWN0b3JQYXJhbXMsXG4gICAgICAgICAgICBpbml0UGFyYW1zOiBwYXJhbXMuaW5pdFBhcmFtcyxcbiAgICAgICAgICAgIGltYWdlQmFzZTY0OiBwYXJhbXMucGFja2FnZS5pbWFnZUJhc2U2NCxcbiAgICAgICAgICAgIGtleVBhaXI6IHBhcmFtcy5rZXlQYWlyLFxuICAgICAgICAgICAgd29ya2NoYWluSWQ6IHBhcmFtcy53b3JrY2hhaW5JZCxcbiAgICAgICAgfSk7XG4gICAgICAgIHJldHVybiB7XG4gICAgICAgICAgICBtZXNzYWdlLFxuICAgICAgICAgICAgYWRkcmVzczogbWVzc2FnZS5hZGRyZXNzLFxuICAgICAgICB9O1xuICAgIH1cblxuXG4gICAgYXN5bmMgY3JlYXRlUnVuTWVzc2FnZShcbiAgICAgICAgcGFyYW1zOiBUT05Db250cmFjdFJ1blBhcmFtcyxcbiAgICAgICAgcmV0cnlJbmRleD86IG51bWJlcixcbiAgICApOiBQcm9taXNlPFRPTkNvbnRyYWN0UnVuTWVzc2FnZT4ge1xuICAgICAgICB0aGlzLmNvbmZpZy5sb2coJ2NyZWF0ZVJ1bk1lc3NhZ2UnLCBwYXJhbXMpO1xuICAgICAgICBjb25zdCBtZXNzYWdlID0gYXdhaXQgdGhpcy5yZXF1ZXN0Q29yZSgnY29udHJhY3RzLnJ1bi5tZXNzYWdlJywge1xuICAgICAgICAgICAgYWRkcmVzczogcGFyYW1zLmFkZHJlc3MsXG4gICAgICAgICAgICBhYmk6IHBhcmFtcy5hYmksXG4gICAgICAgICAgICBmdW5jdGlvbk5hbWU6IHBhcmFtcy5mdW5jdGlvbk5hbWUsXG4gICAgICAgICAgICBoZWFkZXI6IHBhcmFtcy5oZWFkZXIsXG4gICAgICAgICAgICB0cnlJbmRleDogcmV0cnlJbmRleCxcbiAgICAgICAgICAgIGlucHV0OiBwYXJhbXMuaW5wdXQsXG4gICAgICAgICAgICBrZXlQYWlyOiBwYXJhbXMua2V5UGFpcixcbiAgICAgICAgfSk7XG4gICAgICAgIHJldHVybiB7XG4gICAgICAgICAgICBhZGRyZXNzOiBwYXJhbXMuYWRkcmVzcyxcbiAgICAgICAgICAgIGFiaTogcGFyYW1zLmFiaSxcbiAgICAgICAgICAgIGZ1bmN0aW9uTmFtZTogcGFyYW1zLmZ1bmN0aW9uTmFtZSxcbiAgICAgICAgICAgIG1lc3NhZ2UsXG4gICAgICAgIH07XG4gICAgfVxuXG4gICAgYXN5bmMgY3JlYXRlVW5zaWduZWREZXBsb3lNZXNzYWdlKFxuICAgICAgICBwYXJhbXM6IFRPTkNvbnRyYWN0RGVwbG95UGFyYW1zLFxuICAgICAgICByZXRyeUluZGV4PzogbnVtYmVyLFxuICAgICk6IFByb21pc2U8VE9OQ29udHJhY3RVbnNpZ25lZERlcGxveU1lc3NhZ2U+IHtcbiAgICAgICAgY29uc3QgcmVzdWx0OiB7XG4gICAgICAgICAgICBlbmNvZGVkOiBUT05Db250cmFjdFVuc2lnbmVkTWVzc2FnZSxcbiAgICAgICAgICAgIGFkZHJlc3NIZXg6IHN0cmluZyxcbiAgICAgICAgfSA9IGF3YWl0IHRoaXMucmVxdWVzdENvcmUoJ2NvbnRyYWN0cy5kZXBsb3kuZW5jb2RlX3Vuc2lnbmVkX21lc3NhZ2UnLCB7XG4gICAgICAgICAgICBhYmk6IHBhcmFtcy5wYWNrYWdlLmFiaSxcbiAgICAgICAgICAgIGNvbnN0cnVjdG9ySGVhZGVyOiBwYXJhbXMuY29uc3RydWN0b3JIZWFkZXIsXG4gICAgICAgICAgICB0cnlJbmRleDogcmV0cnlJbmRleCxcbiAgICAgICAgICAgIGNvbnN0cnVjdG9yUGFyYW1zOiBwYXJhbXMuY29uc3RydWN0b3JQYXJhbXMsXG4gICAgICAgICAgICBpbml0UGFyYW1zOiBwYXJhbXMuaW5pdFBhcmFtcyxcbiAgICAgICAgICAgIGltYWdlQmFzZTY0OiBwYXJhbXMucGFja2FnZS5pbWFnZUJhc2U2NCxcbiAgICAgICAgICAgIHB1YmxpY0tleUhleDogcGFyYW1zLmtleVBhaXIucHVibGljLFxuICAgICAgICAgICAgd29ya2NoYWluSWQ6IHBhcmFtcy53b3JrY2hhaW5JZCxcbiAgICAgICAgfSk7XG4gICAgICAgIHJldHVybiB7XG4gICAgICAgICAgICBhZGRyZXNzOiByZXN1bHQuYWRkcmVzc0hleCxcbiAgICAgICAgICAgIHNpZ25QYXJhbXM6IHtcbiAgICAgICAgICAgICAgICAuLi5yZXN1bHQuZW5jb2RlZCxcbiAgICAgICAgICAgICAgICBhYmk6IHBhcmFtcy5wYWNrYWdlLmFiaSxcbiAgICAgICAgICAgIH0sXG4gICAgICAgIH07XG4gICAgfVxuXG5cbiAgICBhc3luYyBjcmVhdGVVbnNpZ25lZFJ1bk1lc3NhZ2UoXG4gICAgICAgIHBhcmFtczogVE9OQ29udHJhY3RSdW5QYXJhbXMsXG4gICAgICAgIHJldHJ5SW5kZXg/OiBudW1iZXIsXG4gICAgKTogUHJvbWlzZTxUT05Db250cmFjdFVuc2lnbmVkUnVuTWVzc2FnZT4ge1xuICAgICAgICBjb25zdCBzaWduUGFyYW1zID0gYXdhaXQgdGhpcy5yZXF1ZXN0Q29yZSgnY29udHJhY3RzLnJ1bi5lbmNvZGVfdW5zaWduZWRfbWVzc2FnZScsIHtcbiAgICAgICAgICAgIGFkZHJlc3M6IHBhcmFtcy5hZGRyZXNzLFxuICAgICAgICAgICAgYWJpOiBwYXJhbXMuYWJpLFxuICAgICAgICAgICAgZnVuY3Rpb25OYW1lOiBwYXJhbXMuZnVuY3Rpb25OYW1lLFxuICAgICAgICAgICAgaGVhZGVyOiBwYXJhbXMuaGVhZGVyLFxuICAgICAgICAgICAgdHJ5SW5kZXg6IHJldHJ5SW5kZXgsXG4gICAgICAgICAgICBpbnB1dDogcGFyYW1zLmlucHV0LFxuICAgICAgICB9KTtcbiAgICAgICAgcmV0dXJuIHtcbiAgICAgICAgICAgIGFkZHJlc3M6IHBhcmFtcy5hZGRyZXNzLFxuICAgICAgICAgICAgZnVuY3Rpb25OYW1lOiBwYXJhbXMuZnVuY3Rpb25OYW1lLFxuICAgICAgICAgICAgc2lnblBhcmFtczoge1xuICAgICAgICAgICAgICAgIC4uLnNpZ25QYXJhbXMsXG4gICAgICAgICAgICAgICAgYWJpOiBwYXJhbXMuYWJpLFxuICAgICAgICAgICAgfSxcbiAgICAgICAgfTtcbiAgICB9XG5cblxuICAgIGFzeW5jIGNyZWF0ZVNpZ25lZE1lc3NhZ2UoXG4gICAgICAgIHBhcmFtczogVE9OQ29udHJhY3RDcmVhdGVTaWduZWRNZXNzYWdlUGFyYW1zLFxuICAgICk6IFByb21pc2U8VE9OQ29udHJhY3RNZXNzYWdlPiB7XG4gICAgICAgIHJldHVybiB0aGlzLnJlcXVlc3RDb3JlKCdjb250cmFjdHMuZW5jb2RlX21lc3NhZ2Vfd2l0aF9zaWduJywgcGFyYW1zKTtcbiAgICB9XG5cblxuICAgIGFzeW5jIGNyZWF0ZVNpZ25lZERlcGxveU1lc3NhZ2UoXG4gICAgICAgIHBhcmFtczogVE9OQ29udHJhY3RDcmVhdGVTaWduZWREZXBsb3lNZXNzYWdlUGFyYW1zLFxuICAgICk6IFByb21pc2U8VE9OQ29udHJhY3REZXBsb3lNZXNzYWdlPiB7XG4gICAgICAgIGNvbnN0IG1lc3NhZ2UgPSBhd2FpdCB0aGlzLmNyZWF0ZVNpZ25lZE1lc3NhZ2Uoe1xuICAgICAgICAgICAgYWJpOiBwYXJhbXMudW5zaWduZWRNZXNzYWdlLnNpZ25QYXJhbXMuYWJpLFxuICAgICAgICAgICAgdW5zaWduZWRCeXRlc0Jhc2U2NDogcGFyYW1zLnVuc2lnbmVkTWVzc2FnZS5zaWduUGFyYW1zLnVuc2lnbmVkQnl0ZXNCYXNlNjQsXG4gICAgICAgICAgICBzaWduQnl0ZXNCYXNlNjQ6IHBhcmFtcy5zaWduQnl0ZXNCYXNlNjQsXG4gICAgICAgICAgICBwdWJsaWNLZXlIZXg6IHBhcmFtcy5wdWJsaWNLZXlIZXgsXG4gICAgICAgIH0pO1xuICAgICAgICBtZXNzYWdlLmV4cGlyZSA9IHBhcmFtcy51bnNpZ25lZE1lc3NhZ2Uuc2lnblBhcmFtcy5leHBpcmU7XG4gICAgICAgIHJldHVybiB7XG4gICAgICAgICAgICBhZGRyZXNzOiBwYXJhbXMudW5zaWduZWRNZXNzYWdlLmFkZHJlc3MsXG4gICAgICAgICAgICBtZXNzYWdlLFxuICAgICAgICB9O1xuICAgIH1cblxuXG4gICAgYXN5bmMgY3JlYXRlU2lnbmVkUnVuTWVzc2FnZShcbiAgICAgICAgcGFyYW1zOiBUT05Db250cmFjdENyZWF0ZVNpZ25lZFJ1bk1lc3NhZ2VQYXJhbXMsXG4gICAgKTogUHJvbWlzZTxUT05Db250cmFjdFJ1bk1lc3NhZ2U+IHtcbiAgICAgICAgY29uc3QgbWVzc2FnZSA9IGF3YWl0IHRoaXMuY3JlYXRlU2lnbmVkTWVzc2FnZSh7XG4gICAgICAgICAgICBhYmk6IHBhcmFtcy51bnNpZ25lZE1lc3NhZ2Uuc2lnblBhcmFtcy5hYmksXG4gICAgICAgICAgICB1bnNpZ25lZEJ5dGVzQmFzZTY0OiBwYXJhbXMudW5zaWduZWRNZXNzYWdlLnNpZ25QYXJhbXMudW5zaWduZWRCeXRlc0Jhc2U2NCxcbiAgICAgICAgICAgIHNpZ25CeXRlc0Jhc2U2NDogcGFyYW1zLnNpZ25CeXRlc0Jhc2U2NCxcbiAgICAgICAgICAgIHB1YmxpY0tleUhleDogcGFyYW1zLnB1YmxpY0tleUhleCxcbiAgICAgICAgfSk7XG4gICAgICAgIG1lc3NhZ2UuZXhwaXJlID0gcGFyYW1zLnVuc2lnbmVkTWVzc2FnZS5zaWduUGFyYW1zLmV4cGlyZTtcbiAgICAgICAgcmV0dXJuIHtcbiAgICAgICAgICAgIGFkZHJlc3M6IHBhcmFtcy51bnNpZ25lZE1lc3NhZ2UuYWRkcmVzcyxcbiAgICAgICAgICAgIGFiaTogcGFyYW1zLnVuc2lnbmVkTWVzc2FnZS5zaWduUGFyYW1zLmFiaSxcbiAgICAgICAgICAgIGZ1bmN0aW9uTmFtZTogcGFyYW1zLnVuc2lnbmVkTWVzc2FnZS5mdW5jdGlvbk5hbWUsXG4gICAgICAgICAgICBtZXNzYWdlLFxuICAgICAgICB9O1xuICAgIH1cblxuICAgIGFzeW5jIGdldENvZGVGcm9tSW1hZ2UoXG4gICAgICAgIHBhcmFtczogVE9OQ29udHJhY3RHZXRDb2RlRnJvbUltYWdlUGFyYW1zLFxuICAgICk6IFByb21pc2U8VE9OQ29udHJhY3RHZXRDb2RlRnJvbUltYWdlUmVzdWx0PiB7XG4gICAgICAgIHJldHVybiB0aGlzLnJlcXVlc3RDb3JlKCdjb250cmFjdHMuaW1hZ2UuY29kZScsIHBhcmFtcyk7XG4gICAgfVxuXG4gICAgYXN5bmMgZ2V0RGVwbG95RGF0YShcbiAgICAgICAgcGFyYW1zOiBUT05Db250cmFjdEdldERlcGxveURhdGFQYXJhbXMsXG4gICAgKTogUHJvbWlzZTxUT05Db250cmFjdEdldERlcGxveURhdGFSZXN1bHQ+IHtcbiAgICAgICAgcmV0dXJuIHRoaXMucmVxdWVzdENvcmUoJ2NvbnRyYWN0cy5kZXBsb3kuZGF0YScsIHBhcmFtcyk7XG4gICAgfVxuXG4gICAgYXN5bmMgY3JlYXRlUnVuQm9keShcbiAgICAgICAgcGFyYW1zOiBUT05Db250cmFjdENyZWF0ZVJ1bkJvZHlQYXJhbXMsXG4gICAgKTogUHJvbWlzZTxUT05Db250cmFjdENyZWF0ZVJ1bkJvZHlSZXN1bHQ+IHtcbiAgICAgICAgcmV0dXJuIHRoaXMucmVxdWVzdENvcmUoJ2NvbnRyYWN0cy5ydW4uYm9keScsIHBhcmFtcyk7XG4gICAgfVxuXG4gICAgYXN5bmMgZ2V0RnVuY3Rpb25JZChcbiAgICAgICAgcGFyYW1zOiBUT05Db250cmFjdEdldEZ1bmN0aW9uSWRQYXJhbXMsXG4gICAgKTogUHJvbWlzZTxUT05Db250cmFjdEdldEZ1bmN0aW9uSWRSZXN1bHQ+IHtcbiAgICAgICAgcmV0dXJuIHRoaXMucmVxdWVzdENvcmUoJ2NvbnRyYWN0cy5mdW5jdGlvbi5pZCcsIHBhcmFtcyk7XG4gICAgfVxuXG4gICAgYXN5bmMgZ2V0Qm9jSGFzaChcbiAgICAgICAgcGFyYW1zOiBUT05Db250cmFjdEJvYyxcbiAgICApOiBQcm9taXNlPFRPTkNvbnRyYWN0R2V0Qm9jSGFzaFJlc3VsdD4ge1xuICAgICAgICByZXR1cm4gdGhpcy5yZXF1ZXN0Q29yZSgnY29udHJhY3RzLmJvYy5oYXNoJywgcGFyYW1zKTtcbiAgICB9XG5cbiAgICBhc3luYyBwYXJzZU1lc3NhZ2UoXG4gICAgICAgIHBhcmFtczogVE9OQ29udHJhY3RCb2MsXG4gICAgKTogUHJvbWlzZTxRTWVzc2FnZT4ge1xuICAgICAgICByZXR1cm4gdGhpcy5yZXF1ZXN0Q29yZSgnY29udHJhY3RzLnBhcnNlLm1lc3NhZ2UnLCBwYXJhbXMpO1xuICAgIH1cblxuICAgIC8vIE1lc3NhZ2UgcGFyc2luZ1xuXG4gICAgYXN5bmMgZGVjb2RlUnVuT3V0cHV0KFxuICAgICAgICBwYXJhbXM6IFRPTkNvbnRyYWN0RGVjb2RlUnVuT3V0cHV0UGFyYW1zLFxuICAgICk6IFByb21pc2U8VE9OQ29udHJhY3RSdW5SZXN1bHQ+IHtcbiAgICAgICAgcmV0dXJuIHRoaXMucmVxdWVzdENvcmUoJ2NvbnRyYWN0cy5ydW4ub3V0cHV0JywgcGFyYW1zKTtcbiAgICB9XG5cblxuICAgIGFzeW5jIGRlY29kZUlucHV0TWVzc2FnZUJvZHkoXG4gICAgICAgIHBhcmFtczogVE9OQ29udHJhY3REZWNvZGVNZXNzYWdlQm9keVBhcmFtcyxcbiAgICApOiBQcm9taXNlPFRPTkNvbnRyYWN0RGVjb2RlTWVzc2FnZUJvZHlSZXN1bHQ+IHtcbiAgICAgICAgcmV0dXJuIHRoaXMucmVxdWVzdENvcmUoJ2NvbnRyYWN0cy5ydW4udW5rbm93bi5pbnB1dCcsIHBhcmFtcyk7XG4gICAgfVxuXG5cbiAgICBhc3luYyBkZWNvZGVPdXRwdXRNZXNzYWdlQm9keShcbiAgICAgICAgcGFyYW1zOiBUT05Db250cmFjdERlY29kZU1lc3NhZ2VCb2R5UGFyYW1zLFxuICAgICk6IFByb21pc2U8VE9OQ29udHJhY3REZWNvZGVNZXNzYWdlQm9keVJlc3VsdD4ge1xuICAgICAgICByZXR1cm4gdGhpcy5yZXF1ZXN0Q29yZSgnY29udHJhY3RzLnJ1bi51bmtub3duLm91dHB1dCcsIHBhcmFtcyk7XG4gICAgfVxuXG4gICAgLy8gTWVzc2FnZSBwcm9jZXNzaW5nXG5cbiAgICBhc3luYyBlbnN1cmVNZXNzYWdlSWQobWVzc2FnZTogVE9OQ29udHJhY3RNZXNzYWdlKTogUHJvbWlzZTxzdHJpbmc+IHtcbiAgICAgICAgcmV0dXJuIG1lc3NhZ2UubWVzc2FnZUlkIHx8IGF3YWl0IChhc3luYyAoKSA9PiB7XG4gICAgICAgICAgICBjb25zdCBpZCA9IChhd2FpdCB0aGlzLmdldEJvY0hhc2goe1xuICAgICAgICAgICAgICAgIGJvY0Jhc2U2NDogbWVzc2FnZS5tZXNzYWdlQm9keUJhc2U2NCxcbiAgICAgICAgICAgIH0pKS5oYXNoO1xuICAgICAgICAgICAgbWVzc2FnZS5tZXNzYWdlSWQgPSBpZDtcbiAgICAgICAgICAgIHJldHVybiBpZDtcbiAgICAgICAgfSkoKTtcbiAgICB9XG5cbiAgICBhc3luYyBzZW5kTWVzc2FnZShcbiAgICAgICAgcGFyYW1zOiBUT05Db250cmFjdE1lc3NhZ2UsXG4gICAgICAgIHBhcmVudFNwYW4/OiAoU3BhbiB8IFNwYW5Db250ZXh0KSxcbiAgICApOiBQcm9taXNlPFRPTk1lc3NhZ2VQcm9jZXNzaW5nU3RhdGU+IHtcbiAgICAgICAgY29uc3QgZXhwaXJlID0gcGFyYW1zLmV4cGlyZTtcbiAgICAgICAgaWYgKGV4cGlyZSAmJiAoRGF0ZS5ub3coKSA+IGV4cGlyZSAqIDEwMDApKSB7XG4gICAgICAgICAgICB0aHJvdyBUT05DbGllbnRFcnJvci5zZW5kTm9kZVJlcXVlc3RGYWlsZWQoYXdhaXQgdGhpcy5nZXRDbGllbnRJbmZvKCksICdNZXNzYWdlIGFscmVhZHkgZXhwaXJlZCcpO1xuICAgICAgICB9XG4gICAgICAgIGNvbnN0IHNlcnZlclRpbWVEZWx0YSA9IE1hdGguYWJzKGF3YWl0IHRoaXMucXVlcmllcy5zZXJ2ZXJUaW1lRGVsdGEocGFyZW50U3BhbikpO1xuICAgICAgICBpZiAoc2VydmVyVGltZURlbHRhID4gdGhpcy5jb25maWcub3V0T2ZTeW5jVGhyZXNob2xkKCkpIHtcbiAgICAgICAgICAgIHRoaXMucXVlcmllcy5kcm9wU2VydmVyVGltZURlbHRhKCk7XG4gICAgICAgICAgICB0aHJvdyBUT05DbGllbnRFcnJvci5jbG9ja091dE9mU3luYyhhd2FpdCB0aGlzLmdldENsaWVudEluZm8oKSk7XG4gICAgICAgIH1cbiAgICAgICAgY29uc3QgbGFzdEJsb2NrSWQgPSBhd2FpdCB0aGlzLmZpbmRMYXN0U2hhcmRCbG9jayhwYXJhbXMuYWRkcmVzcyk7XG4gICAgICAgIGNvbnN0IGlkID0gYXdhaXQgdGhpcy5lbnN1cmVNZXNzYWdlSWQocGFyYW1zKTtcbiAgICAgICAgY29uc3QgaWRCYXNlNjQgPSBCdWZmZXIuZnJvbShpZCwgJ2hleCcpLnRvU3RyaW5nKCdiYXNlNjQnKTtcbiAgICAgICAgY29uc3QgbWVzc2FnZVNwYW4gPSB0aGlzLmNvbnRleHQuc3RhcnRSb290U3BhbihcbiAgICAgICAgICAgIGlkLnN1YnN0cigwLCAxNiksXG4gICAgICAgICAgICBpZC5zdWJzdHIoMTYsIDE2KSxcbiAgICAgICAgICAgICdtZXNzYWdlUHJvY2Vzc2luZycsXG4gICAgICAgICk7XG4gICAgICAgIG1lc3NhZ2VTcGFuLmFkZFRhZ3Moe1xuICAgICAgICAgICAgbWVzc2FnZUlkOiBpZCxcbiAgICAgICAgICAgIG1lc3NhZ2VTaXplOiBNYXRoLmNlaWwocGFyYW1zLm1lc3NhZ2VCb2R5QmFzZTY0Lmxlbmd0aCAqIDMgLyA0KSxcbiAgICAgICAgICAgIGFkZHJlc3M6IHBhcmFtcy5hZGRyZXNzLFxuICAgICAgICAgICAgZXhwaXJlOiBwYXJhbXMuZXhwaXJlLFxuICAgICAgICB9KVxuICAgICAgICBhd2FpdCB0aGlzLnF1ZXJpZXMucG9zdFJlcXVlc3RzKFtcbiAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICBpZDogaWRCYXNlNjQsXG4gICAgICAgICAgICAgICAgYm9keTogcGFyYW1zLm1lc3NhZ2VCb2R5QmFzZTY0LFxuICAgICAgICAgICAgfSxcbiAgICAgICAgXSwgcGFyZW50U3Bhbik7XG4gICAgICAgIG1lc3NhZ2VTcGFuLmZpbmlzaCgpO1xuICAgICAgICB0aGlzLmNvbmZpZy5sb2coJ3NlbmRNZXNzYWdlLiBSZXF1ZXN0IHBvc3RlZCcsIGlkKTtcbiAgICAgICAgcmV0dXJuIHtcbiAgICAgICAgICAgIGxhc3RCbG9ja0lkLFxuICAgICAgICAgICAgc2VuZGluZ1RpbWU6IE1hdGgucm91bmQoRGF0ZS5ub3coKSAvIDEwMDApLFxuICAgICAgICB9O1xuICAgIH1cblxuICAgIGFzeW5jIHByb2Nlc3NNZXNzYWdlKFxuICAgICAgICBtZXNzYWdlOiBUT05Db250cmFjdE1lc3NhZ2UsXG4gICAgICAgIHJlc3VsdEZpZWxkczogc3RyaW5nLFxuICAgICAgICBwYXJlbnRTcGFuPzogKFNwYW4gfCBTcGFuQ29udGV4dCksXG4gICAgICAgIHJldHJ5SW5kZXg/OiBudW1iZXIsXG4gICAgICAgIGFkZHJlc3M/OiBzdHJpbmcsXG4gICAgICAgIGFiaT86IFRPTkNvbnRyYWN0QUJJLFxuICAgICAgICBmdW5jdGlvbk5hbWU/OiBzdHJpbmcsXG4gICAgKTogUHJvbWlzZTxRVHJhbnNhY3Rpb24+IHtcbiAgICAgICAgY29uc3QgcHJvY2Vzc2luZyA9IGF3YWl0IHRoaXMuc2VuZE1lc3NhZ2UobWVzc2FnZSwgcGFyZW50U3Bhbik7XG4gICAgICAgIGNvbnN0IHsgdHJhbnNhY3Rpb24gfSA9IGF3YWl0IHRoaXMud2FpdEZvclRyYW5zYWN0aW9uKHtcbiAgICAgICAgICAgIG1lc3NhZ2UsXG4gICAgICAgICAgICBtZXNzYWdlUHJvY2Vzc2luZ1N0YXRlOiBwcm9jZXNzaW5nLFxuICAgICAgICAgICAgcGFyZW50U3BhbixcbiAgICAgICAgICAgIGFiaSxcbiAgICAgICAgICAgIGZ1bmN0aW9uTmFtZSxcbiAgICAgICAgfSk7XG4gICAgICAgIHJldHVybiB0cmFuc2FjdGlvbjtcbiAgICB9XG5cblxuICAgIGFzeW5jIGZpbmRMYXN0QmxvY2soY2hhaW46IG51bWJlciwgcmVzdWx0OiBzdHJpbmcsIGFkZGl0aW9uYWxGaWx0ZXI/OiBhbnkpOiBQcm9taXNlPD9hbnk+IHtcbiAgICAgICAgY29uc3QgYmxvY2tzID0gYXdhaXQgdGhpcy5xdWVyaWVzLmJsb2Nrcy5xdWVyeSh7XG4gICAgICAgICAgICBmaWx0ZXI6IHsgd29ya2NoYWluX2lkOiB7IGVxOiBjaGFpbiB9LCAuLi4oYWRkaXRpb25hbEZpbHRlciB8fCB7fSkgfSxcbiAgICAgICAgICAgIHJlc3VsdCxcbiAgICAgICAgICAgIG9yZGVyQnk6IFtcbiAgICAgICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgICAgIHBhdGg6ICdzZXFfbm8nLFxuICAgICAgICAgICAgICAgICAgICBkaXJlY3Rpb246ICdERVNDJyxcbiAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgXSxcbiAgICAgICAgICAgIGxpbWl0OiAxLFxuICAgICAgICB9KTtcbiAgICAgICAgcmV0dXJuIGJsb2Nrcy5sZW5ndGggPiAwID8gYmxvY2tzWzBdIDogbnVsbDtcbiAgICB9XG5cbiAgICBhc3luYyBmaW5kTWF0Y2hpbmdTaGFyZChzaGFyZHM6IFFTaGFyZEhhc2hbXSwgYWRkcmVzczogc3RyaW5nKTogUHJvbWlzZTw/UVNoYXJkSGFzaD4ge1xuICAgICAgICByZXR1cm4gdGhpcy5yZXF1ZXN0Q29yZSgnY29udHJhY3RzLmZpbmQuc2hhcmQnLCB7XG4gICAgICAgICAgICBzaGFyZHMsXG4gICAgICAgICAgICBhZGRyZXNzLFxuICAgICAgICB9KTtcbiAgICB9XG5cbiAgICBhc3luYyBmaW5kTGFzdFNoYXJkQmxvY2soYWRkcmVzczogc3RyaW5nKTogUHJvbWlzZTxzdHJpbmc+IHtcbiAgICAgICAgY29uc3QgYWRkcmVzc1BhcnRzID0gYWRkcmVzcy5zcGxpdCgnOicpO1xuICAgICAgICBjb25zdCB3b3JrY2hhaW4gPSBhZGRyZXNzUGFydHMubGVuZ3RoID4gMSA/IE51bWJlci5wYXJzZUludChhZGRyZXNzUGFydHNbMF0sIDEwKSA6IDA7XG5cblxuICAgICAgICAvLyBpZiBhY2NvdW50IHJlc2lkZXMgaW4gbWFzdGVyIGNoYWluIHRoZW4gc3RhcnRpbmcgcG9pbnQgaXMgbGFzdCBtYXN0ZXIgY2hhaW4gYmxvY2tcbiAgICAgICAgLy8gZ2VuZXJhdGVkIGJlZm9yZSBtZXNzYWdlIHdhcyBzZW50XG4gICAgICAgIGNvbnN0IG1hc3RlcmNoYWluTGFzdEJsb2NrID0gYXdhaXQgdGhpcy5maW5kTGFzdEJsb2NrKFxuICAgICAgICAgICAgTUFTVEVSQ0hBSU5fSUQsXG4gICAgICAgICAgICAnaWQgbWFzdGVyIHsgc2hhcmRfaGFzaGVzIHsgd29ya2NoYWluX2lkIHNoYXJkIGRlc2NyIHsgcm9vdF9oYXNoIH0gfSB9JyxcbiAgICAgICAgKTtcblxuICAgICAgICAvLyBpZiBhY2NvdW50IHJlc2lkZXMgaW4gbWFzdGVyY2hhaW4gdGhlbiBzdGFydGluZyBwb2ludCBpcyBsYXN0IG1hc3RlcmNoYWluIGJsb2NrXG4gICAgICAgIGlmICh3b3JrY2hhaW4gPT09IE1BU1RFUkNIQUlOX0lEKSB7XG4gICAgICAgICAgICBpZiAoIW1hc3RlcmNoYWluTGFzdEJsb2NrKSB7XG4gICAgICAgICAgICAgICAgdGhyb3cgVE9OQ2xpZW50RXJyb3Iubm9CbG9ja3MoYXdhaXQgdGhpcy5nZXRDbGllbnRJbmZvKCksIE1BU1RFUkNIQUlOX0lEKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIHJldHVybiBtYXN0ZXJjaGFpbkxhc3RCbG9jay5pZDtcbiAgICAgICAgfVxuXG4gICAgICAgIC8vIGlmIGFjY291bnQgaXMgZnJvbSBvdGhlciBjaGFpbnMgdGhlbiBzdGFydGluZyBwb2ludCBpcyBsYXN0IGFjY291bnQncyBzaGFyZCBibG9ja1xuICAgICAgICAvLyBUbyBvYnRhaW4gaXQgd2UgdGFrZSBtYXN0ZXJjaGFpbiBibG9jayB0byBnZXQgc2hhcmRzIGNvbmZpZ3VyYXRpb24gYW5kIHNlbGVjdFxuICAgICAgICAvLyBtYXRjaGluZyBzaGFyZFxuICAgICAgICBpZiAoIW1hc3RlcmNoYWluTGFzdEJsb2NrKSB7XG4gICAgICAgICAgICAvLyBOb2RlIFNFIGNhc2UgLSBubyBtYXN0ZXJjaGFpbiwgbm8gc2hhcmRpbmcuIENoZWNrIHRoYXQgb25seSBvbmUgc2hhcmRcbiAgICAgICAgICAgIGxldCB3b3JrY2hhaW5MYXN0QmxvY2sgPSBhd2FpdCB0aGlzLmZpbmRMYXN0QmxvY2sod29ya2NoYWluLCAnYWZ0ZXJfbWVyZ2Ugc2hhcmQnKTtcbiAgICAgICAgICAgIGlmICghd29ya2NoYWluTGFzdEJsb2NrKSB7XG4gICAgICAgICAgICAgICAgdGhyb3cgVE9OQ2xpZW50RXJyb3Iubm9CbG9ja3MoYXdhaXQgdGhpcy5nZXRDbGllbnRJbmZvKCksIHdvcmtjaGFpbik7XG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICAgIC8vIGlmIHdvcmtjaGFpbiBpcyBzaGFyZGVkIHRoZW4gaXQgaXMgbm90IE5vZGUgU0UgYW5kIG1hc3RlcmNoYWluIGJsb2NrcyBtaXNzaW5nXG4gICAgICAgICAgICAvLyBpcyBlcnJvclxuICAgICAgICAgICAgaWYgKHdvcmtjaGFpbkxhc3RCbG9jay5hZnRlcl9tZXJnZSB8fCB3b3JrY2hhaW5MYXN0QmxvY2suc2hhcmQgIT09ICc4MDAwMDAwMDAwMDAwMDAwJykge1xuICAgICAgICAgICAgICAgIHRocm93IFRPTkNsaWVudEVycm9yLm5vQmxvY2tzKGF3YWl0IHRoaXMuZ2V0Q2xpZW50SW5mbygpLCBNQVNURVJDSEFJTl9JRCk7XG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICAgIC8vIFRha2UgbGFzdCBibG9jayBieSBzZXFfbm9cbiAgICAgICAgICAgIHdvcmtjaGFpbkxhc3RCbG9jayA9IGF3YWl0IHRoaXMuZmluZExhc3RCbG9jayh3b3JrY2hhaW4sICdpZCcsIHtcbiAgICAgICAgICAgICAgICBzaGFyZDogeyBlcTogJzgwMDAwMDAwMDAwMDAwMDAnIH0sXG4gICAgICAgICAgICB9KTtcbiAgICAgICAgICAgIGlmICghd29ya2NoYWluTGFzdEJsb2NrKSB7XG4gICAgICAgICAgICAgICAgdGhyb3cgVE9OQ2xpZW50RXJyb3IuaW52YWxpZEJsb2NrY2hhaW4oYXdhaXQgdGhpcy5nZXRDbGllbnRJbmZvKCksICdObyBzdGFydGluZyBOb2RlIFNFIGJsb2NrIGZvdW5kJyk7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICByZXR1cm4gd29ya2NoYWluTGFzdEJsb2NrLmlkO1xuICAgICAgICB9XG5cbiAgICAgICAgY29uc3Qgc2hhcmRzOiA/UVNoYXJkSGFzaFtdID0gbWFzdGVyY2hhaW5MYXN0QmxvY2s/Lm1hc3Rlcj8uc2hhcmRfaGFzaGVzO1xuICAgICAgICBpZiAoIXNoYXJkcyB8fCBzaGFyZHMubGVuZ3RoID09PSAwKSB7XG4gICAgICAgICAgICB0aHJvdyBUT05DbGllbnRFcnJvci5pbnZhbGlkQmxvY2tjaGFpbihhd2FpdCB0aGlzLmdldENsaWVudEluZm8oKSwgJ05vIGBzaGFyZF9oYXNoZXNgIGZpZWxkIGluIG1hc3RlcmNoYWluIGJsb2NrJyk7XG4gICAgICAgIH1cbiAgICAgICAgY29uc3Qgc2hhcmRCbG9jayA9IGF3YWl0IHRoaXMuZmluZE1hdGNoaW5nU2hhcmQoc2hhcmRzLCBhZGRyZXNzKTtcbiAgICAgICAgY29uc3Qgcm9vdF9oYXNoID0gc2hhcmRCbG9jaz8uZGVzY3I/LnJvb3RfaGFzaDtcbiAgICAgICAgaWYgKCFyb290X2hhc2gpIHtcbiAgICAgICAgICAgIHRocm93IFRPTkNsaWVudEVycm9yLmludmFsaWRCbG9ja2NoYWluKGF3YWl0IHRoaXMuZ2V0Q2xpZW50SW5mbygpLCAnTm8gYHJvb3RfaGFzaGAgZmllbGQgaW4gc2hhcmQgZGVzY3InKTtcbiAgICAgICAgfVxuICAgICAgICByZXR1cm4gcm9vdF9oYXNoO1xuICAgIH1cblxuICAgIGFzeW5jIGNoZWNrU2hhcmRNYXRjaChibG9jazogUUJsb2NrLCBhZGRyZXNzOiBzdHJpbmcpOiBQcm9taXNlPGJvb2xlYW4+IHtcbiAgICAgICAgcmV0dXJuICEhKGF3YWl0IHRoaXMuZmluZE1hdGNoaW5nU2hhcmQoW1xuICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgIHdvcmtjaGFpbl9pZDogYmxvY2sud29ya2NoYWluX2lkIHx8IDAsXG4gICAgICAgICAgICAgICAgc2hhcmQ6IGJsb2NrLnNoYXJkIHx8ICcnLFxuICAgICAgICAgICAgfSxcbiAgICAgICAgXSwgYWRkcmVzcykpO1xuICAgIH1cblxuICAgIGFzeW5jIHdhaXROZXh0QmxvY2soY3VycmVudDogc3RyaW5nLCBhZGRyZXNzOiBzdHJpbmcsIHRpbWVvdXQ/OiBudW1iZXIpOiBQcm9taXNlPFFCbG9jaz4ge1xuICAgICAgICBjb25zdCBibG9jayA9IGF3YWl0IHRoaXMucXVlcmllcy5ibG9ja3Mud2FpdEZvcih7XG4gICAgICAgICAgICBmaWx0ZXI6IHtcbiAgICAgICAgICAgICAgICBwcmV2X3JlZjoge1xuICAgICAgICAgICAgICAgICAgICByb290X2hhc2g6IHsgZXE6IGN1cnJlbnQgfSxcbiAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgIE9SOiB7XG4gICAgICAgICAgICAgICAgICAgIHByZXZfYWx0X3JlZjoge1xuICAgICAgICAgICAgICAgICAgICAgICAgcm9vdF9oYXNoOiB7IGVxOiBjdXJyZW50IH0sXG4gICAgICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgIH0sXG4gICAgICAgICAgICByZXN1bHQ6IEJMT0NLX0ZJRUxEUyxcbiAgICAgICAgICAgIHRpbWVvdXQsXG4gICAgICAgIH0pO1xuXG4gICAgICAgIGlmIChibG9jaz8uYWZ0ZXJfc3BsaXQgJiYgIShhd2FpdCB0aGlzLmNoZWNrU2hhcmRNYXRjaChibG9jaywgYWRkcmVzcykpKSB7XG4gICAgICAgICAgICByZXR1cm4gdGhpcy5xdWVyaWVzLmJsb2Nrcy53YWl0Rm9yKHtcbiAgICAgICAgICAgICAgICBmaWx0ZXI6IHtcbiAgICAgICAgICAgICAgICAgICAgaWQ6IHsgbmU6IGJsb2NrLmlkIH0sXG4gICAgICAgICAgICAgICAgICAgIHByZXZfcmVmOiB7XG4gICAgICAgICAgICAgICAgICAgICAgICByb290X2hhc2g6IHsgZXE6IGN1cnJlbnQgfSxcbiAgICAgICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgIHJlc3VsdDogQkxPQ0tfRklFTERTLFxuICAgICAgICAgICAgICAgIHRpbWVvdXQsXG4gICAgICAgICAgICB9KTtcbiAgICAgICAgfVxuICAgICAgICByZXR1cm4gYmxvY2s7XG4gICAgfVxuXG4gICAgYXN5bmMgd2FpdEZvclRyYW5zYWN0aW9uKHBhcmFtczogVE9OV2FpdEZvclRyYW5zYWN0aW9uUGFyYW1zKTogUHJvbWlzZTxUT05Db250cmFjdFJ1blJlc3VsdD4ge1xuICAgICAgICAvLyBjb25zdCBsZWdhY3lTdGFydCA9IERhdGUubm93KCk7XG4gICAgICAgIC8vIGNvbnN0IHJlc3VsdCA9IGF3YWl0IHRoaXMubGVnYWN5V2FpdEZvclRyYW5zYWN0aW9uKHBhcmFtcyk7XG4gICAgICAgIC8vIGNvbnNvbGUubG9nKCc+Pj4nLCBgTGVnYWN5IHdhaXQgZm9yIGE6ICR7RGF0ZS5ub3coKSAtIGxlZ2FjeVN0YXJ0fSBtc2ApO1xuICAgICAgICAvLyByZXR1cm4gcmVzdWx0O1xuXG4gICAgICAgIGNvbnN0IHRvdGFsU3RhcnQgPSBEYXRlLm5vdygpO1xuICAgICAgICBjb25zdCBleHBpcmUgPSBwYXJhbXMubWVzc2FnZS5leHBpcmUgfHwgMDtcbiAgICAgICAgY29uc3QgbWVzc2FnZUlkID0gYXdhaXQgdGhpcy5lbnN1cmVNZXNzYWdlSWQocGFyYW1zLm1lc3NhZ2UpO1xuICAgICAgICBjb25zdCBhZGRyZXNzID0gcGFyYW1zLm1lc3NhZ2UuYWRkcmVzcztcbiAgICAgICAgY29uc3QgcHJvY2Vzc2luZyA9IHsgLi4ucGFyYW1zLm1lc3NhZ2VQcm9jZXNzaW5nU3RhdGUgfTtcbiAgICAgICAgbGV0IHRyYW5zYWN0aW9uID0gbnVsbDtcbiAgICAgICAgdHJ5IHtcbiAgICAgICAgICAgIGNvbnN0IHRpbWVSZXBvcnQgPSBbXTtcblxuICAgICAgICAgICAgY29uc3Qgc3RvcFRpbWUgPSBleHBpcmVcbiAgICAgICAgICAgICAgICB8fCBNYXRoLnJvdW5kKChEYXRlLm5vdygpICsgdGhpcy5jb25maWcubWVzc2FnZVByb2Nlc3NpbmdUaW1lb3V0KCkpIC8gMTAwMCk7XG5cbiAgICAgICAgICAgIGNvbnN0IGluZmluaXRlV2FpdCA9IHBhcmFtcy5pbmZpbml0ZVdhaXQgIT09IGZhbHNlO1xuICAgICAgICAgICAgY29uc3QgYWRkVGltZW91dCA9IHRoaXMuY29uZmlnLm1lc3NhZ2VQcm9jZXNzaW5nVGltZW91dCgpO1xuICAgICAgICAgICAgd2hpbGUgKCF0cmFuc2FjdGlvbikge1xuICAgICAgICAgICAgICAgIGNvbnN0IG5vdyA9IERhdGUubm93KCk7XG4gICAgICAgICAgICAgICAgY29uc3QgdGltZW91dCA9IE1hdGgubWF4KHN0b3BUaW1lLCBub3cpIC0gbm93ICsgYWRkVGltZW91dDtcbiAgICAgICAgICAgICAgICBsZXQgYmxvY2s6ID9RQmxvY2sgPSBudWxsO1xuICAgICAgICAgICAgICAgIHRyeSB7XG4gICAgICAgICAgICAgICAgICAgIGNvbnN0IHN0YXJ0ID0gRGF0ZS5ub3coKTtcbiAgICAgICAgICAgICAgICAgICAgYmxvY2sgPSBhd2FpdCB0aGlzLndhaXROZXh0QmxvY2socHJvY2Vzc2luZy5sYXN0QmxvY2tJZCwgYWRkcmVzcywgdGltZW91dCk7XG4gICAgICAgICAgICAgICAgICAgIGNvbnN0IGVuZCA9IERhdGUubm93KCk7XG4gICAgICAgICAgICAgICAgICAgIHRpbWVSZXBvcnQucHVzaChgQmxvY2sgWyR7YmxvY2suaWQgfHwgJyd9XSBoYXMgYmVlbiByZWNlaXZlZDogJHtlbmQgLSBzdGFydH0gbXMsIGNsaWVudCB0aW1lOiAke01hdGgucm91bmQoZW5kIC8gMTAwMCl9LCBnZW5fdXRpbWU6ICR7YmxvY2suZ2VuX3V0aW1lIHx8IDB9YCk7XG4gICAgICAgICAgICAgICAgfSBjYXRjaCAoZXJyb3IpIHtcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5jb25maWcubG9nKCdCbG9jayB3YWl0aW5nIGZhaWxlZDogJywgZXJyb3IpO1xuICAgICAgICAgICAgICAgICAgICBpZiAoIWluZmluaXRlV2FpdCkge1xuICAgICAgICAgICAgICAgICAgICAgICAgbGV0IHJlc29sdmVkRXJyb3IgPSBlcnJvcjtcbiAgICAgICAgICAgICAgICAgICAgICAgIGlmIChlcnJvci5jb2RlID09PSBUT05FcnJvckNvZGUuV0FJVF9GT1JfVElNRU9VVCkge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHJlc29sdmVkRXJyb3IgPSBUT05DbGllbnRFcnJvci5uZXR3b3JrU2lsZW50KFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBhd2FpdCB0aGlzLmdldENsaWVudEluZm8oKSwge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgbWVzc2FnZUlkLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgYmxvY2tJZDogcHJvY2Vzc2luZy5sYXN0QmxvY2tJZCxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRpbWVvdXQsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBtZXNzYWdlUHJvY2Vzc2luZ1N0YXRlOiBwcm9jZXNzaW5nLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgZXhwaXJlLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgc2VuZGluZ1RpbWU6IHByb2Nlc3Npbmcuc2VuZGluZ1RpbWUsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgICAgdGhyb3cgcmVzb2x2ZWRFcnJvcjtcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICB0aGlzLmNvbmZpZy5sb2coJ1JldHJ5IHdhaXRpbmcuJyk7XG4gICAgICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICAgICAgaWYgKGJsb2NrKSB7XG4gICAgICAgICAgICAgICAgICAgIHByb2Nlc3NpbmcubGFzdEJsb2NrSWQgPSBibG9jay5pZCB8fCAnJztcblxuICAgICAgICAgICAgICAgICAgICBjb25zdCBpbk1zZyA9IChibG9jay5pbl9tc2dfZGVzY3IgfHwgW10pLmZpbmQoeCA9PiB4Lm1zZ19pZCA9PT0gbWVzc2FnZUlkKTtcbiAgICAgICAgICAgICAgICAgICAgaWYgKGluTXNnKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICBjb25zdCB0cmFuc2FjdGlvbklkID0gaW5Nc2cudHJhbnNhY3Rpb25faWQ7XG4gICAgICAgICAgICAgICAgICAgICAgICBpZiAoIXRyYW5zYWN0aW9uSWQpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB0aHJvdyBUT05DbGllbnRFcnJvci5pbnZhbGlkQmxvY2tjaGFpbihcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgYXdhaXQgdGhpcy5nZXRDbGllbnRJbmZvKCksXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICdObyBmaWVsZCBgdHJhbnNhY3Rpb25faWRgIGluIGJsb2NrJyxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICApO1xuICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgICAgY29uc3QgdHJTdGFydCA9IERhdGUubm93KCk7XG4gICAgICAgICAgICAgICAgICAgICAgICB0cmFuc2FjdGlvbiA9IGF3YWl0IHRoaXMucXVlcmllcy50cmFuc2FjdGlvbnMud2FpdEZvcih7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgZmlsdGVyOiB7IGlkOiB7IGVxOiB0cmFuc2FjdGlvbklkIH0gfSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICByZXN1bHQ6IFRSQU5TQUNUSU9OX0ZJRUxEU19PUkRJTkFSWSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB0aW1lb3V0OiBNQVhfVElNRU9VVCxcbiAgICAgICAgICAgICAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgICAgICAgICAgICAgdHJhY2VNZXNzYWdlKHRoaXMuY29uZmlnLnRyYWNlciwgbWVzc2FnZUlkLCAndHJhbnNhY3Rpb25SZWNlaXZlZCcsIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB0cmFuc2FjdGlvbklkLFxuICAgICAgICAgICAgICAgICAgICAgICAgfSlcbiAgICAgICAgICAgICAgICAgICAgICAgIHRpbWVSZXBvcnQucHVzaChgVHJhbnNhY3Rpb24gWyR7dHJhbnNhY3Rpb25JZH1dIGhhcyBiZWVuIHJlY2VpdmVkOiAke0RhdGUubm93KCkgLSB0clN0YXJ0fSBtc2ApO1xuICAgICAgICAgICAgICAgICAgICB9IGVsc2UgaWYgKChibG9jay5nZW5fdXRpbWUgfHwgMCkgPiBzdG9wVGltZSkge1xuICAgICAgICAgICAgICAgICAgICAgICAgaWYgKGV4cGlyZSkge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRyYWNlTWVzc2FnZSh0aGlzLmNvbmZpZy50cmFjZXIsIG1lc3NhZ2VJZCwgJ21lc3NhZ2VFeHBpcmVkJywge30pO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRocm93IFRPTkNsaWVudEVycm9yLm1lc3NhZ2VFeHBpcmVkKFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBhd2FpdCB0aGlzLmdldENsaWVudEluZm8oKSwge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgbWVzc2FnZUlkLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgc2VuZGluZ1RpbWU6IHByb2Nlc3Npbmcuc2VuZGluZ1RpbWUsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBleHBpcmU6IHN0b3BUaW1lLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgYmxvY2tUaW1lOiBibG9jay5nZW5fdXRpbWUsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBibG9ja0lkOiBwcm9jZXNzaW5nLmxhc3RCbG9ja0lkLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9KTtcbiAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICAgIHRocm93IFRPTkNsaWVudEVycm9yLnRyYW5zYWN0aW9uV2FpdFRpbWVvdXQoXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgYXdhaXQgdGhpcy5nZXRDbGllbnRJbmZvKCksIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgbWVzc2FnZUlkLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBzZW5kaW5nVGltZTogcHJvY2Vzc2luZy5zZW5kaW5nVGltZSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdGltZW91dCxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgbWVzc2FnZVByb2Nlc3NpbmdTdGF0ZTogcHJvY2Vzc2luZyxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB9KTtcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgdGltZVJlcG9ydC5zcGxpY2UoMCwgMCwgYFRyYW5zYWN0aW9uIHdhaXRpbmcgdGltZTogJHtEYXRlLm5vdygpIC0gdG90YWxTdGFydH0gbXNgKTtcbiAgICAgICAgICAgIHRoaXMuY29uZmlnLmxvZyh0aW1lUmVwb3J0LmpvaW4oJ1xcbicpKTtcbiAgICAgICAgfSBjYXRjaCAoZXJyb3IpIHtcbiAgICAgICAgICAgIHRoaXMuY29uZmlnLmxvZygnW3dhaXRGb3JUcmFuc2FjdGlvbl0nLCAnRkFJTEVEJywgZXJyb3IpO1xuICAgICAgICAgICAgaWYgKGVycm9yLmNvZGUgPT09IFRPTkVycm9yQ29kZS5NRVNTQUdFX0VYUElSRURcbiAgICAgICAgICAgICAgICB8fCBlcnJvci5jb2RlID09PSBUT05FcnJvckNvZGUuVFJBTlNBQ1RJT05fV0FJVF9USU1FT1VUKSB7XG4gICAgICAgICAgICAgICAgdGhyb3cgYXdhaXQgdGhpcy5yZXNvbHZlRGV0YWlsZWRFcnJvcihcbiAgICAgICAgICAgICAgICAgICAgZXJyb3IsXG4gICAgICAgICAgICAgICAgICAgIHBhcmFtcy5tZXNzYWdlLm1lc3NhZ2VCb2R5QmFzZTY0LFxuICAgICAgICAgICAgICAgICAgICBwcm9jZXNzaW5nLnNlbmRpbmdUaW1lLFxuICAgICAgICAgICAgICAgICAgICBhZGRyZXNzLFxuICAgICAgICAgICAgICAgICk7XG4gICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAgIHRocm93IGVycm9yO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG5cbiAgICAgICAgcmV0dXJuIHRoaXMucHJvY2Vzc1RyYW5zYWN0aW9uKFxuICAgICAgICAgICAgYWRkcmVzcyxcbiAgICAgICAgICAgIHRyYW5zYWN0aW9uLFxuICAgICAgICAgICAgcGFyYW1zLmFiaSxcbiAgICAgICAgICAgIHBhcmFtcy5mdW5jdGlvbk5hbWUsXG4gICAgICAgICk7XG4gICAgfVxuXG4gICAgYXN5bmMgbGVnYWN5V2FpdEZvclRyYW5zYWN0aW9uKFxuICAgICAgICBwYXJhbXM6IFRPTldhaXRGb3JUcmFuc2FjdGlvblBhcmFtcyxcbiAgICApOiBQcm9taXNlPFRPTkNvbnRyYWN0UnVuUmVzdWx0PiB7XG4gICAgICAgIGNvbnN0IHtcbiAgICAgICAgICAgIG1lc3NhZ2UsXG4gICAgICAgICAgICBhYmksXG4gICAgICAgICAgICBmdW5jdGlvbk5hbWUsXG4gICAgICAgICAgICBwYXJlbnRTcGFuLFxuICAgICAgICB9ID0gcGFyYW1zO1xuICAgICAgICBjb25zdCBtZXNzYWdlSWQgPSBhd2FpdCB0aGlzLmVuc3VyZU1lc3NhZ2VJZChtZXNzYWdlKTtcbiAgICAgICAgY29uc3QgY29uZmlnID0gdGhpcy5jb25maWc7XG4gICAgICAgIGNvbmZpZy5sb2coJ1t3YWl0Rm9yVHJhbnNhY3Rpb25dJywgZnVuY3Rpb25OYW1lLCBtZXNzYWdlKTtcbiAgICAgICAgbGV0IHByb2Nlc3NpbmdUaW1lb3V0ID0gY29uZmlnLm1lc3NhZ2VQcm9jZXNzaW5nVGltZW91dCgpO1xuICAgICAgICBjb25zdCBwcm9taXNlcyA9IFtdO1xuICAgICAgICBjb25zdCBzZXJ2ZXJJbmZvID0gYXdhaXQgdGhpcy5xdWVyaWVzLmdldFNlcnZlckluZm8ocGFyZW50U3Bhbik7XG4gICAgICAgIGNvbnN0IG9wZXJhdGlvbklkID0gc2VydmVySW5mby5zdXBwb3J0c09wZXJhdGlvbklkXG4gICAgICAgICAgICA/IHRoaXMucXVlcmllcy5nZW5lcmF0ZU9wZXJhdGlvbklkKClcbiAgICAgICAgICAgIDogdW5kZWZpbmVkO1xuICAgICAgICBsZXQgdHJhbnNhY3Rpb246ID9RVHJhbnNhY3Rpb24gPSBudWxsO1xuICAgICAgICBjb25zdCBzZW5kaW5nVGltZSA9IE1hdGgucm91bmQoRGF0ZS5ub3coKSAvIDEwMDApO1xuICAgICAgICBsZXQgYmxvY2tUaW1lID0gbnVsbDtcbiAgICAgICAgdHJ5IHtcbiAgICAgICAgICAgIGNvbnN0IGV4cGlyZSA9IG1lc3NhZ2UuZXhwaXJlO1xuICAgICAgICAgICAgaWYgKGV4cGlyZSkge1xuICAgICAgICAgICAgICAgIC8vIGNhbGN1bGF0ZSB0aW1lb3V0IGFjY29yZGluZyB0byBgZXhwaXJlYCB2YWx1ZSAoaW4gc2Vjb25kcylcbiAgICAgICAgICAgICAgICAvLyBhZGQgcHJvY2Vzc2luZyB0aW1lb3V0IGFzIG1hc3RlciBibG9jayB2YWxpZGF0aW9uIHRpbWVcbiAgICAgICAgICAgICAgICBjb25zdCBibG9ja1RpbWVvdXQgPSBleHBpcmUgKiAxMDAwIC0gRGF0ZS5ub3coKSArIHByb2Nlc3NpbmdUaW1lb3V0O1xuICAgICAgICAgICAgICAgIC8vIHRyYW5zYWN0aW9uIHRpbWVvdXQgbXVzdCBiZSBncmVhdGVyIHRoZW4gYmxvY2sgdGltZW91dFxuICAgICAgICAgICAgICAgIHByb2Nlc3NpbmdUaW1lb3V0ID0gYmxvY2tUaW1lb3V0ICsgRVhUUkFfVFJBTlNBQ1RJT05fV0FJVElOR19USU1FO1xuXG5cbiAgICAgICAgICAgICAgICBjb25zdCB3YWl0RXhwaXJlZCA9IGFzeW5jICgpID0+IHtcbiAgICAgICAgICAgICAgICAgICAgLy8gd2FpdCBmb3IgYmxvY2ssIHByb2R1Y2VkIGFmdGVyIGBleHBpcmVgIHRvIGd1YXJhbnRlZSB0aGF0IG1lc3NhZ2UgaXMgcmVqZWN0ZWRcbiAgICAgICAgICAgICAgICAgICAgbGV0IGJsb2NrOiA/UUJsb2NrID0gbnVsbDtcbiAgICAgICAgICAgICAgICAgICAgdHJ5IHtcbiAgICAgICAgICAgICAgICAgICAgICAgIGJsb2NrID0gYXdhaXQgdGhpcy5xdWVyaWVzLmJsb2Nrcy53YWl0Rm9yKHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBmaWx0ZXI6IHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgbWFzdGVyOiB7IG1pbl9zaGFyZF9nZW5fdXRpbWU6IHsgZ2U6IGV4cGlyZSB9IH0sXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICByZXN1bHQ6ICdpZCBnZW5fdXRpbWUgaW5fbXNnX2Rlc2NyIHsgdHJhbnNhY3Rpb25faWQgfScsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgdGltZW91dDogYmxvY2tUaW1lb3V0LFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHBhcmVudFNwYW4sXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgb3BlcmF0aW9uSWQsXG4gICAgICAgICAgICAgICAgICAgICAgICB9KTtcbiAgICAgICAgICAgICAgICAgICAgfSBjYXRjaCAoZXJyb3IpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIGlmIChUT05DbGllbnRFcnJvci5pc1dhaXRGb3JUaW1lb3V0KGVycm9yKSkge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRocm93IFRPTkNsaWVudEVycm9yLm5ldHdvcmtTaWxlbnQoXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGF3YWl0IHRoaXMuZ2V0Q2xpZW50SW5mbygpLCB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBtZXNzYWdlSWQsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBzZW5kaW5nVGltZTogc2VuZGluZ1RpbWUsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBleHBpcmUsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB0aW1lb3V0OiBibG9ja1RpbWVvdXQsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB0aHJvdyBlcnJvcjtcbiAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICAgICAgICAgIGlmICh0cmFuc2FjdGlvbikge1xuICAgICAgICAgICAgICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICAgICAgICAgICAgICB9XG5cbiAgICAgICAgICAgICAgICAgICAgY29uc3QgdHJhbnNhY3Rpb25JZCA9IGJsb2NrLmluX21zZ19kZXNjclxuICAgICAgICAgICAgICAgICAgICAgICAgJiYgYmxvY2suaW5fbXNnX2Rlc2NyLmZpbmQobXNnID0+ICEhbXNnLnRyYW5zYWN0aW9uX2lkKT8udHJhbnNhY3Rpb25faWQ7XG5cbiAgICAgICAgICAgICAgICAgICAgaWYgKCF0cmFuc2FjdGlvbklkKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICB0aHJvdyBUT05DbGllbnRFcnJvci5pbnRlcm5hbEVycm9yKFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGF3YWl0IHRoaXMuZ2V0Q2xpZW50SW5mbygpLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICdJbnZhbGlkIGJsb2NrIHJlY2VpdmVkOiBubyB0cmFuc2FjdGlvbiBJRCcsXG4gICAgICAgICAgICAgICAgICAgICAgICApO1xuICAgICAgICAgICAgICAgICAgICB9XG5cbiAgICAgICAgICAgICAgICAgICAgLy8gY2hlY2sgdGhhdCB0cmFuc2FjdGlvbnMgY29sbGVjdGlvbiBpcyB1cGRhdGVkXG4gICAgICAgICAgICAgICAgICAgIHRyeSB7XG4gICAgICAgICAgICAgICAgICAgICAgICBhd2FpdCB0aGlzLnF1ZXJpZXMudHJhbnNhY3Rpb25zLndhaXRGb3Ioe1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGZpbHRlcjoge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBpZDogeyBlcTogdHJhbnNhY3Rpb25JZCB9LFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgcmVzdWx0OiAnaWQnLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRpbWVvdXQ6IEJMT0NLX1RSQU5TQUNUSU9OX1dBSVRJTkdfVElNRSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBwYXJlbnRTcGFuLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIG9wZXJhdGlvbklkLFxuICAgICAgICAgICAgICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICAgICAgICAgIH0gY2F0Y2ggKGVycm9yKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICBpZiAoVE9OQ2xpZW50RXJyb3IuaXNXYWl0Rm9yVGltZW91dChlcnJvcikpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB0aHJvdyBUT05DbGllbnRFcnJvci5uZXR3b3JrU2lsZW50KFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBhd2FpdCB0aGlzLmdldENsaWVudEluZm8oKSwge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgbWVzc2FnZUlkLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgYmxvY2tJZDogYmxvY2suaWQsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB0cmFuc2FjdGlvbklkLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdGltZW91dDogQkxPQ0tfVFJBTlNBQ1RJT05fV0FJVElOR19USU1FLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgc2VuZGluZ1RpbWU6IHNlbmRpbmdUaW1lLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgZXhwaXJlLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9KTtcbiAgICAgICAgICAgICAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgdGhyb3cgZXJyb3I7XG4gICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgYmxvY2tUaW1lID0gYmxvY2suZ2VuX3V0aW1lO1xuICAgICAgICAgICAgICAgIH07XG5cbiAgICAgICAgICAgICAgICBwcm9taXNlcy5wdXNoKHdhaXRFeHBpcmVkKCkpO1xuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICAvLyB3YWl0IGZvciBtZXNzYWdlIHByb2Nlc3NpbmcgdHJhbnNhY3Rpb25cbiAgICAgICAgICAgIHByb21pc2VzLnB1c2gobmV3IFByb21pc2UoKHJlc29sdmUsIHJlamVjdCkgPT4ge1xuICAgICAgICAgICAgICAgIChhc3luYyAoKSA9PiB7XG4gICAgICAgICAgICAgICAgICAgIHRyeSB7XG4gICAgICAgICAgICAgICAgICAgICAgICB0cmFuc2FjdGlvbiA9IGF3YWl0IHRoaXMucXVlcmllcy50cmFuc2FjdGlvbnMud2FpdEZvcih7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgZmlsdGVyOiB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGluX21zZzogeyBlcTogbWVzc2FnZUlkIH0sXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHN0YXR1czogeyBlcTogUVRyYW5zYWN0aW9uUHJvY2Vzc2luZ1N0YXR1cy5maW5hbGl6ZWQgfSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHJlc3VsdDogdHJhbnNhY3Rpb25EZXRhaWxzLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRpbWVvdXQ6IHByb2Nlc3NpbmdUaW1lb3V0LFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIG9wZXJhdGlvbklkLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHBhcmVudFNwYW4sXG4gICAgICAgICAgICAgICAgICAgICAgICB9KTtcbiAgICAgICAgICAgICAgICAgICAgICAgIHJlc29sdmUoKTtcbiAgICAgICAgICAgICAgICAgICAgfSBjYXRjaCAoZXJyb3IpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIGlmIChUT05DbGllbnRFcnJvci5pc1dhaXRGb3JUaW1lb3V0KGVycm9yKSkge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHJlamVjdChUT05DbGllbnRFcnJvci50cmFuc2FjdGlvbldhaXRUaW1lb3V0KFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBhd2FpdCB0aGlzLmdldENsaWVudEluZm8oKSwge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgbWVzc2FnZUlkLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgc2VuZGluZ1RpbWUsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB0aW1lb3V0OiBwcm9jZXNzaW5nVGltZW91dCxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfSkpO1xuICAgICAgICAgICAgICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICByZWplY3QoZXJyb3IpO1xuICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgfSkoKTtcbiAgICAgICAgICAgIH0pKTtcblxuICAgICAgICAgICAgdHJ5IHtcbiAgICAgICAgICAgICAgICBhd2FpdCBQcm9taXNlLnJhY2UocHJvbWlzZXMpO1xuICAgICAgICAgICAgfSBmaW5hbGx5IHtcbiAgICAgICAgICAgICAgICBpZiAocHJvbWlzZXMubGVuZ3RoID4gMSAmJiBvcGVyYXRpb25JZCkge1xuICAgICAgICAgICAgICAgICAgICBhd2FpdCB0aGlzLnF1ZXJpZXMuZmluaXNoT3BlcmF0aW9ucyhbb3BlcmF0aW9uSWRdKTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICAgIGlmICghdHJhbnNhY3Rpb24pIHtcbiAgICAgICAgICAgICAgICB0aHJvdyBUT05DbGllbnRFcnJvci5tZXNzYWdlRXhwaXJlZChcbiAgICAgICAgICAgICAgICAgICAgYXdhaXQgdGhpcy5nZXRDbGllbnRJbmZvKCksIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIG1lc3NhZ2VJZCxcbiAgICAgICAgICAgICAgICAgICAgICAgIHNlbmRpbmdUaW1lOiBzZW5kaW5nVGltZSxcbiAgICAgICAgICAgICAgICAgICAgICAgIGV4cGlyZSxcbiAgICAgICAgICAgICAgICAgICAgICAgIGJsb2NrVGltZSxcbiAgICAgICAgICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBjb25zdCB0cmFuc2FjdGlvbk5vdyA9IHRyYW5zYWN0aW9uLm5vdyB8fCAwO1xuICAgICAgICAgICAgdGhpcy5jb25maWcubG9nKCdbd2FpdEZvclRyYW5zYWN0aW9uXScsICdUUkFOU0FDVElPTl9SRUNFSVZFRCcsIHtcbiAgICAgICAgICAgICAgICBpZDogdHJhbnNhY3Rpb24uaWQsXG4gICAgICAgICAgICAgICAgYmxvY2tJZDogdHJhbnNhY3Rpb24uYmxvY2tfaWQsXG4gICAgICAgICAgICAgICAgbm93OiBgJHtuZXcgRGF0ZSh0cmFuc2FjdGlvbk5vdyAqIDEwMDApLnRvSVNPU3RyaW5nKCl9ICgke3RyYW5zYWN0aW9uTm93fSlgLFxuICAgICAgICAgICAgfSk7XG4gICAgICAgIH0gY2F0Y2ggKGVycm9yKSB7XG4gICAgICAgICAgICB0aGlzLmNvbmZpZy5sb2coJ1t3YWl0Rm9yVHJhbnNhY3Rpb25dJywgJ0ZBSUxFRCcsIGVycm9yKTtcbiAgICAgICAgICAgIGlmIChUT05DbGllbnRFcnJvci5pc01lc3NhZ2VFeHBpcmVkKGVycm9yKVxuICAgICAgICAgICAgICAgIHx8IFRPTkNsaWVudEVycm9yLmlzQ2xpZW50RXJyb3IoZXJyb3IsIFRPTkVycm9yQ29kZS5UUkFOU0FDVElPTl9XQUlUX1RJTUVPVVQpKSB7XG4gICAgICAgICAgICAgICAgY29uc3QgZGV0YWlsZWRFcnJvcjogYW55ID0gYXdhaXQgdGhpcy5yZXNvbHZlRGV0YWlsZWRFcnJvcihcbiAgICAgICAgICAgICAgICAgICAgZXJyb3IsXG4gICAgICAgICAgICAgICAgICAgIG1lc3NhZ2UubWVzc2FnZUJvZHlCYXNlNjQsXG4gICAgICAgICAgICAgICAgICAgIERhdGUubm93KCkgLyAxMDAwLFxuICAgICAgICAgICAgICAgICAgICBtZXNzYWdlLmFkZHJlc3MsXG4gICAgICAgICAgICAgICAgKTtcbiAgICAgICAgICAgICAgICBjb25zdCBtZXNzYWdlUHJvY2Vzc2luZ1N0YXRlID0gZXJyb3IuZGF0YT8ubWVzc2FnZVByb2Nlc3NpbmdTdGF0ZTtcbiAgICAgICAgICAgICAgICBpZiAobWVzc2FnZVByb2Nlc3NpbmdTdGF0ZSkge1xuICAgICAgICAgICAgICAgICAgICBpZiAoZGV0YWlsZWRFcnJvci5kYXRhKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICBkZXRhaWxlZEVycm9yLmRhdGEubWVzc2FnZVByb2Nlc3NpbmdTdGF0ZSA9IG1lc3NhZ2VQcm9jZXNzaW5nU3RhdGU7XG4gICAgICAgICAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgICAgICAgICAgICBkZXRhaWxlZEVycm9yLmRhdGEgPSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgbWVzc2FnZVByb2Nlc3NpbmdTdGF0ZSxcbiAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICB0aHJvdyBkZXRhaWxlZEVycm9yO1xuICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgICB0aHJvdyBlcnJvcjtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgICByZW1vdmVUeXBlTmFtZSh0cmFuc2FjdGlvbik7XG4gICAgICAgIGNvbnN0IHsgb3V0cHV0LCBmZWVzIH0gPSBhd2FpdCB0aGlzLnByb2Nlc3NUcmFuc2FjdGlvbihcbiAgICAgICAgICAgIG1lc3NhZ2UuYWRkcmVzcyxcbiAgICAgICAgICAgIHRyYW5zYWN0aW9uLFxuICAgICAgICAgICAgYWJpLFxuICAgICAgICAgICAgZnVuY3Rpb25OYW1lLFxuICAgICAgICApO1xuICAgICAgICByZXR1cm4ge1xuICAgICAgICAgICAgdHJhbnNhY3Rpb24sXG4gICAgICAgICAgICBvdXRwdXQsXG4gICAgICAgICAgICBmZWVzLFxuICAgICAgICB9O1xuICAgIH1cblxuICAgIGFzeW5jIHByb2Nlc3NUcmFuc2FjdGlvbihcbiAgICAgICAgYWRkcmVzczogc3RyaW5nLFxuICAgICAgICB0cmFuc2FjdGlvbjogUVRyYW5zYWN0aW9uLFxuICAgICAgICBhYmk6ID9UT05Db250cmFjdEFCSSxcbiAgICAgICAgZnVuY3Rpb25OYW1lOiA/c3RyaW5nLFxuICAgICk6IFByb21pc2U8VE9OQ29udHJhY3RSdW5SZXN1bHQ+IHtcbiAgICAgICAgdHJ5IHtcbiAgICAgICAgICAgIGNvbnN0IHJlc3VsdCA9IGF3YWl0IHRoaXMucmVxdWVzdENvcmUoJ2NvbnRyYWN0cy5wcm9jZXNzLnRyYW5zYWN0aW9uJywge1xuICAgICAgICAgICAgICAgIHRyYW5zYWN0aW9uLFxuICAgICAgICAgICAgICAgIGFiaSxcbiAgICAgICAgICAgICAgICBmdW5jdGlvbk5hbWUsXG4gICAgICAgICAgICAgICAgYWRkcmVzcyxcbiAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgcmV0dXJuIHtcbiAgICAgICAgICAgICAgICB0cmFuc2FjdGlvbixcbiAgICAgICAgICAgICAgICAuLi5yZXN1bHQsXG4gICAgICAgICAgICB9O1xuICAgICAgICB9IGNhdGNoIChlcnJvcikge1xuICAgICAgICAgICAgY29uc3QgYWNjb3VudHMgPSBhd2FpdCB0aGlzLnF1ZXJpZXMuYWNjb3VudHMucXVlcnkoe1xuICAgICAgICAgICAgICAgIGZpbHRlcjogeyBpZDogeyBlcTogYWRkcmVzcyB9IH0sXG4gICAgICAgICAgICAgICAgcmVzdWx0OiAnYWNjX3R5cGUgYmFsYW5jZScsXG4gICAgICAgICAgICAgICAgdGltZW91dDogMTAwMCxcbiAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgaWYgKGFjY291bnRzLmxlbmd0aCA9PT0gMCkge1xuICAgICAgICAgICAgICAgIHRocm93IFRPTkNsaWVudEVycm9yLmFjY291bnRNaXNzaW5nKFxuICAgICAgICAgICAgICAgICAgICBhd2FpdCB0aGlzLmdldENsaWVudEluZm8oKSxcbiAgICAgICAgICAgICAgICAgICAgYWRkcmVzcyxcbiAgICAgICAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgICAgICAgICAgb3JpZ2luYWxfZXJyb3I6IGVycm9yLFxuICAgICAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgICk7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICB0aHJvdyBlcnJvcjtcbiAgICAgICAgfVxuICAgIH1cblxuICAgIGFzeW5jIHJlc29sdmVEZXRhaWxlZEVycm9yKFxuICAgICAgICBlcnJvcjogRXJyb3IsXG4gICAgICAgIG1lc3NhZ2VCYXNlNjQ6IHN0cmluZyxcbiAgICAgICAgdGltZTogbnVtYmVyLFxuICAgICAgICBhZGRyZXNzOiBzdHJpbmcsXG4gICAgKSB7XG4gICAgICAgIGNvbnN0IGFjY291bnRzID0gYXdhaXQgdGhpcy5xdWVyaWVzLmFjY291bnRzLnF1ZXJ5KHtcbiAgICAgICAgICAgIGZpbHRlcjogeyBpZDogeyBlcTogYWRkcmVzcyB9IH0sXG4gICAgICAgICAgICByZXN1bHQ6ICdpZCBhY2NfdHlwZSBiYWxhbmNlIGJhbGFuY2Vfb3RoZXIgeyBjdXJyZW5jeSB2YWx1ZSB9IGJvYyBjb2RlX2hhc2ggZGF0YV9oYXNoIGxhc3RfcGFpZCcsXG4gICAgICAgICAgICB0aW1lb3V0OiAxMDAwLFxuICAgICAgICB9KTtcbiAgICAgICAgaWYgKGFjY291bnRzLmxlbmd0aCA9PT0gMCkge1xuICAgICAgICAgICAgcmV0dXJuIFRPTkNsaWVudEVycm9yLmFjY291bnRNaXNzaW5nKFxuICAgICAgICAgICAgICAgIGF3YWl0IHRoaXMuZ2V0Q2xpZW50SW5mbygpLFxuICAgICAgICAgICAgICAgIGFkZHJlc3MsXG4gICAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgICAgICBvcmlnaW5hbF9lcnJvcjogZXJyb3IsXG4gICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICk7XG4gICAgICAgIH1cbiAgICAgICAgY29uc3QgYWNjb3VudCA9IGFjY291bnRzWzBdO1xuICAgICAgICByZW1vdmVUeXBlTmFtZShhY2NvdW50KTtcbiAgICAgICAgdHJ5IHtcbiAgICAgICAgICAgIGF3YWl0IHRoaXMucmVxdWVzdENvcmUoJ2NvbnRyYWN0cy5yZXNvbHZlLmVycm9yJywge1xuICAgICAgICAgICAgICAgIGFkZHJlc3MsXG4gICAgICAgICAgICAgICAgYWNjb3VudCxcbiAgICAgICAgICAgICAgICBtZXNzYWdlQmFzZTY0LFxuICAgICAgICAgICAgICAgIHRpbWU6IHRpbWUsXG4gICAgICAgICAgICAgICAgbWFpbkVycm9yOiBlcnJvcixcbiAgICAgICAgICAgIH0pO1xuICAgICAgICB9IGNhdGNoIChyZXNvbHZlZCkge1xuICAgICAgICAgICAgcmV0dXJuIHJlc29sdmVkO1xuICAgICAgICB9XG4gICAgICAgIHJldHVybiBlcnJvcjtcbiAgICB9XG5cbiAgICBhc3luYyBpc0RlcGxveWVkKGFkZHJlc3M6IHN0cmluZywgcGFyZW50U3Bhbj86IChTcGFuIHwgU3BhbkNvbnRleHQpKTogUHJvbWlzZTxib29sPiB7XG4gICAgICAgIGNvbnN0IGFjY291bnQgPSBhd2FpdCB0aGlzLnF1ZXJpZXMuYWNjb3VudHMucXVlcnkoe1xuICAgICAgICAgICAgZmlsdGVyOiB7XG4gICAgICAgICAgICAgICAgaWQ6IHsgZXE6IGFkZHJlc3MgfSxcbiAgICAgICAgICAgICAgICBhY2NfdHlwZTogeyBlcTogUUFjY291bnRUeXBlLmFjdGl2ZSB9LFxuICAgICAgICAgICAgfSxcbiAgICAgICAgICAgIHJlc3VsdDogJ2lkJyxcbiAgICAgICAgICAgIHBhcmVudFNwYW4sXG4gICAgICAgIH0pO1xuICAgICAgICByZXR1cm4gYWNjb3VudC5sZW5ndGggPiAwO1xuICAgIH1cblxuICAgIGFzeW5jIHByb2Nlc3NEZXBsb3lNZXNzYWdlKFxuICAgICAgICBtZXNzYWdlOiBUT05Db250cmFjdERlcGxveU1lc3NhZ2UsXG4gICAgICAgIHBhcmVudFNwYW4/OiAoU3BhbiB8IFNwYW5Db250ZXh0KSxcbiAgICAgICAgcmV0cnlJbmRleD86IG51bWJlcixcbiAgICApOiBQcm9taXNlPFRPTkNvbnRyYWN0RGVwbG95UmVzdWx0PiB7XG4gICAgICAgIHRoaXMuY29uZmlnLmxvZygncHJvY2Vzc0RlcGxveU1lc3NhZ2UnLCBtZXNzYWdlKTtcbiAgICAgICAgaWYgKGF3YWl0IHRoaXMuaXNEZXBsb3llZChtZXNzYWdlLmFkZHJlc3MsIHBhcmVudFNwYW4pKSB7XG4gICAgICAgICAgICByZXR1cm4ge1xuICAgICAgICAgICAgICAgIGFkZHJlc3M6IG1lc3NhZ2UuYWRkcmVzcyxcbiAgICAgICAgICAgICAgICBhbHJlYWR5RGVwbG95ZWQ6IHRydWUsXG4gICAgICAgICAgICB9O1xuICAgICAgICB9XG4gICAgICAgIGNvbnN0IHByb2Nlc3NpbmcgPSBhd2FpdCB0aGlzLnNlbmRNZXNzYWdlKG1lc3NhZ2UubWVzc2FnZSwgcGFyZW50U3Bhbik7XG4gICAgICAgIHJldHVybiB0aGlzLndhaXRGb3JEZXBsb3lUcmFuc2FjdGlvbihtZXNzYWdlLCBwcm9jZXNzaW5nLCBwYXJlbnRTcGFuKTtcbiAgICB9XG5cbiAgICBhc3luYyB3YWl0Rm9yRGVwbG95VHJhbnNhY3Rpb24oXG4gICAgICAgIGRlcGxveU1lc3NhZ2U6IFRPTkNvbnRyYWN0RGVwbG95TWVzc2FnZSxcbiAgICAgICAgbWVzc2FnZVByb2Nlc3NpbmdTdGF0ZTogVE9OTWVzc2FnZVByb2Nlc3NpbmdTdGF0ZSxcbiAgICAgICAgcGFyZW50U3Bhbj86IChTcGFuIHwgU3BhbkNvbnRleHQpLFxuICAgICAgICBpbmZpbml0ZVdhaXQ/OiBib29sZWFuLFxuICAgICk6IFByb21pc2U8VE9OQ29udHJhY3REZXBsb3lSZXN1bHQ+IHtcbiAgICAgICAgY29uc3QgbWVzc2FnZSA9IGRlcGxveU1lc3NhZ2UubWVzc2FnZTtcbiAgICAgICAgY29uc3QgcmVzdWx0ID0gYXdhaXQgdGhpcy53YWl0Rm9yVHJhbnNhY3Rpb24oe1xuICAgICAgICAgICAgbWVzc2FnZSxcbiAgICAgICAgICAgIG1lc3NhZ2VQcm9jZXNzaW5nU3RhdGUsXG4gICAgICAgICAgICBwYXJlbnRTcGFuLFxuICAgICAgICAgICAgaW5maW5pdGVXYWl0LFxuICAgICAgICB9KTtcbiAgICAgICAgcmV0dXJuIHtcbiAgICAgICAgICAgIC4uLnJlc3VsdCxcbiAgICAgICAgICAgIGFkZHJlc3M6IG1lc3NhZ2UuYWRkcmVzcyxcbiAgICAgICAgICAgIGFscmVhZHlEZXBsb3llZDogZmFsc2UsXG4gICAgICAgIH07XG4gICAgfVxuXG5cbiAgICBhc3luYyBwcm9jZXNzUnVuTWVzc2FnZShcbiAgICAgICAgcnVuTWVzc2FnZTogVE9OQ29udHJhY3RSdW5NZXNzYWdlLFxuICAgICAgICBwYXJlbnRTcGFuPzogKFNwYW4gfCBTcGFuQ29udGV4dCksXG4gICAgKTogUHJvbWlzZTxUT05Db250cmFjdFJ1blJlc3VsdD4ge1xuICAgICAgICB0aGlzLmNvbmZpZy5sb2coJ3Byb2Nlc3NSdW5NZXNzYWdlJywgcnVuTWVzc2FnZSk7XG4gICAgICAgIGNvbnN0IHByb2Nlc3NpbmcgPSBhd2FpdCB0aGlzLnNlbmRNZXNzYWdlKHJ1bk1lc3NhZ2UubWVzc2FnZSwgcGFyZW50U3Bhbik7XG4gICAgICAgIHJldHVybiB0aGlzLndhaXRGb3JSdW5UcmFuc2FjdGlvbihydW5NZXNzYWdlLCBwcm9jZXNzaW5nLCBwYXJlbnRTcGFuKTtcbiAgICB9XG5cbiAgICBhc3luYyB3YWl0Rm9yUnVuVHJhbnNhY3Rpb24oXG4gICAgICAgIHJ1bk1lc3NhZ2U6IFRPTkNvbnRyYWN0UnVuTWVzc2FnZSxcbiAgICAgICAgbWVzc2FnZVByb2Nlc3NpbmdTdGF0ZTogVE9OTWVzc2FnZVByb2Nlc3NpbmdTdGF0ZSxcbiAgICAgICAgcGFyZW50U3Bhbj86IChTcGFuIHwgU3BhbkNvbnRleHQpLFxuICAgICAgICBpbmZpbml0ZVdhaXQ/OiBib29sZWFuLFxuICAgICk6IFByb21pc2U8VE9OQ29udHJhY3RSdW5SZXN1bHQ+IHtcbiAgICAgICAgcmV0dXJuIHRoaXMud2FpdEZvclRyYW5zYWN0aW9uKHtcbiAgICAgICAgICAgIG1lc3NhZ2U6IHJ1bk1lc3NhZ2UubWVzc2FnZSxcbiAgICAgICAgICAgIG1lc3NhZ2VQcm9jZXNzaW5nU3RhdGUsXG4gICAgICAgICAgICBwYXJlbnRTcGFuLFxuICAgICAgICAgICAgaW5maW5pdGVXYWl0LFxuICAgICAgICAgICAgYWJpOiBydW5NZXNzYWdlLmFiaSxcbiAgICAgICAgICAgIGZ1bmN0aW9uTmFtZTogcnVuTWVzc2FnZS5mdW5jdGlvbk5hbWUsXG4gICAgICAgIH0pO1xuICAgIH1cblxuICAgIC8qKlxuICAgICAqIERlcHJlY2F0ZWQuIFVzZSBgcnVuTWVzc2FnZUxvY2FsYCBpbnN0ZWFkLlxuICAgICAqIEBwYXJhbSBwYXJhbXNcbiAgICAgKiBAcGFyYW0gd2FpdFBhcmFtc1xuICAgICAqIEBwYXJhbSBwYXJlbnRTcGFuXG4gICAgICogQHJldHVybnMge1Byb21pc2U8dW5rbm93bj59XG4gICAgICovXG4gICAgYXN5bmMgcHJvY2Vzc1J1bk1lc3NhZ2VMb2NhbChcbiAgICAgICAgcGFyYW1zOiBUT05Db250cmFjdFJ1bk1lc3NhZ2UsXG4gICAgICAgIHdhaXRQYXJhbXM/OiBUT05Db250cmFjdEFjY291bnRXYWl0UGFyYW1zLFxuICAgICAgICBwYXJlbnRTcGFuPzogKFNwYW4gfCBTcGFuQ29udGV4dCksXG4gICAgKTogUHJvbWlzZTxUT05Db250cmFjdFJ1blJlc3VsdD4ge1xuICAgICAgICB0aGlzLmNvbmZpZy5sb2coJ3Byb2Nlc3NSdW5NZXNzYWdlTG9jYWwnLCBwYXJhbXMpO1xuXG4gICAgICAgIGNvbnN0IGFjY291bnQgPSBhd2FpdCB0aGlzLmdldEFjY291bnQocGFyYW1zLmFkZHJlc3MsIHRydWUsIHdhaXRQYXJhbXMsIHBhcmVudFNwYW4pO1xuXG4gICAgICAgIHJldHVybiB0aGlzLnJlcXVlc3RDb3JlKCdjb250cmFjdHMucnVuLmxvY2FsLm1zZycsIHtcbiAgICAgICAgICAgIGFkZHJlc3M6IHBhcmFtcy5hZGRyZXNzLFxuICAgICAgICAgICAgYWNjb3VudCxcbiAgICAgICAgICAgIGFiaTogcGFyYW1zLmFiaSxcbiAgICAgICAgICAgIGZ1bmN0aW9uTmFtZTogcGFyYW1zLmZ1bmN0aW9uTmFtZSxcbiAgICAgICAgICAgIG1lc3NhZ2VCYXNlNjQ6IHBhcmFtcy5tZXNzYWdlLm1lc3NhZ2VCb2R5QmFzZTY0LFxuICAgICAgICB9KTtcbiAgICB9XG5cbiAgICAvLyBGZWUgY2FsY3VsYXRpb25cblxuICAgIGJpZ0JhbGFuY2UgPSAnMHgxMDAwMDAwMDAwMDAwMCc7XG5cbiAgICBhc3luYyBjYWxjUnVuRmVlcyhcbiAgICAgICAgcGFyYW1zOiBUT05Db250cmFjdENhbGNSdW5GZWVQYXJhbXMsXG4gICAgICAgIHBhcmVudFNwYW4/OiAoU3BhbiB8IFNwYW5Db250ZXh0KSxcbiAgICApOiBQcm9taXNlPFRPTkNvbnRyYWN0Q2FsY0ZlZVJlc3VsdD4ge1xuICAgICAgICB0aGlzLmNvbmZpZy5sb2coJ2NhbGNSdW5GZWVzJywgcGFyYW1zKTtcblxuICAgICAgICBjb25zdCBhY2NvdW50ID0gYXdhaXQgdGhpcy5nZXRBY2NvdW50KHBhcmFtcy5hZGRyZXNzLCB0cnVlLCBwYXJhbXMud2FpdFBhcmFtcywgcGFyZW50U3Bhbik7XG5cbiAgICAgICAgaWYgKHBhcmFtcy5lbXVsYXRlQmFsYW5jZSkge1xuICAgICAgICAgICAgYWNjb3VudC5iYWxhbmNlID0gdGhpcy5iaWdCYWxhbmNlO1xuICAgICAgICB9XG5cbiAgICAgICAgcmV0dXJuIHRoaXMucmVxdWVzdENvcmUoJ2NvbnRyYWN0cy5ydW4uZmVlJywge1xuICAgICAgICAgICAgYWRkcmVzczogcGFyYW1zLmFkZHJlc3MsXG4gICAgICAgICAgICBhY2NvdW50LFxuICAgICAgICAgICAgYWJpOiBwYXJhbXMuYWJpLFxuICAgICAgICAgICAgZnVuY3Rpb25OYW1lOiBwYXJhbXMuZnVuY3Rpb25OYW1lLFxuICAgICAgICAgICAgaW5wdXQ6IHBhcmFtcy5pbnB1dCxcbiAgICAgICAgICAgIGtleVBhaXI6IHBhcmFtcy5rZXlQYWlyLFxuICAgICAgICB9KTtcbiAgICB9XG5cbiAgICBhc3luYyBjYWxjRGVwbG95RmVlcyhcbiAgICAgICAgcGFyYW1zOiBUT05Db250cmFjdENhbGNEZXBsb3lGZWVQYXJhbXMsXG4gICAgICAgIHBhcmVudFNwYW4/OiAoU3BhbiB8IFNwYW5Db250ZXh0KSxcbiAgICApOiBQcm9taXNlPFRPTkNvbnRyYWN0Q2FsY0ZlZVJlc3VsdD4ge1xuICAgICAgICB0aGlzLmNvbmZpZy5sb2coJ2NhbGNEZXBsb3lGZWVzJywgcGFyYW1zKTtcblxuICAgICAgICBjb25zdCBtZXNzYWdlID0gYXdhaXQgdGhpcy5jcmVhdGVEZXBsb3lNZXNzYWdlKHBhcmFtcyk7XG5cbiAgICAgICAgcmV0dXJuIHRoaXMuY2FsY01zZ1Byb2Nlc3NGZWVzKHtcbiAgICAgICAgICAgIGFkZHJlc3M6IG1lc3NhZ2UuYWRkcmVzcyxcbiAgICAgICAgICAgIG1lc3NhZ2U6IG1lc3NhZ2UubWVzc2FnZSxcbiAgICAgICAgICAgIGVtdWxhdGVCYWxhbmNlOiBwYXJhbXMuZW11bGF0ZUJhbGFuY2UsXG4gICAgICAgICAgICBuZXdBY2NvdW50OiBwYXJhbXMubmV3QWNjb3VudCxcbiAgICAgICAgfSwgcGFyZW50U3Bhbik7XG4gICAgfVxuXG4gICAgYXN5bmMgY2FsY01zZ1Byb2Nlc3NGZWVzKFxuICAgICAgICBwYXJhbXM6IFRPTkNvbnRyYWN0Q2FsY01zZ1Byb2Nlc3NpbmdGZWVzUGFyYW1zLFxuICAgICAgICBwYXJlbnRTcGFuPzogKFNwYW4gfCBTcGFuQ29udGV4dCksXG4gICAgKTogUHJvbWlzZTxUT05Db250cmFjdENhbGNGZWVSZXN1bHQ+IHtcbiAgICAgICAgdGhpcy5jb25maWcubG9nKCdjYWxjTXNnUHJvY2Vzc0ZlZXMnLCBwYXJhbXMpO1xuXG4gICAgICAgIGxldCBhY2NvdW50OiBRQWNjb3VudCA9IHtcbiAgICAgICAgICAgIGJhbGFuY2U6IHRoaXMuYmlnQmFsYW5jZSxcbiAgICAgICAgICAgIGlkOiBwYXJhbXMuYWRkcmVzcyxcbiAgICAgICAgICAgIGxhc3RfcGFpZDogTWF0aC5mbG9vcihEYXRlLm5vdygpIC8gMTAwMCksXG4gICAgICAgIH07XG5cbiAgICAgICAgaWYgKCFwYXJhbXMubmV3QWNjb3VudCkge1xuICAgICAgICAgICAgYWNjb3VudCA9IGF3YWl0IHRoaXMuZ2V0QWNjb3VudChwYXJhbXMuYWRkcmVzcywgZmFsc2UsIHBhcmFtcy53YWl0UGFyYW1zLCBwYXJlbnRTcGFuKTtcbiAgICAgICAgfVxuXG4gICAgICAgIGlmIChwYXJhbXMuZW11bGF0ZUJhbGFuY2UpIHtcbiAgICAgICAgICAgIGFjY291bnQuYmFsYW5jZSA9IHRoaXMuYmlnQmFsYW5jZTtcbiAgICAgICAgfVxuXG4gICAgICAgIHJldHVybiB0aGlzLnJlcXVlc3RDb3JlKCdjb250cmFjdHMucnVuLmZlZS5tc2cnLCB7XG4gICAgICAgICAgICBhZGRyZXNzOiBwYXJhbXMuYWRkcmVzcyxcbiAgICAgICAgICAgIGFjY291bnQsXG4gICAgICAgICAgICBtZXNzYWdlQmFzZTY0OiBwYXJhbXMubWVzc2FnZS5tZXNzYWdlQm9keUJhc2U2NCxcbiAgICAgICAgfSk7XG4gICAgfVxuXG4gICAgLy8gQWRkcmVzcyBwcm9jZXNzaW5nXG5cbiAgICBhc3luYyBjb252ZXJ0QWRkcmVzcyhcbiAgICAgICAgcGFyYW1zOiBUT05Db250cmFjdENvbnZlcnRBZGRyZXNzUGFyYW1zLFxuICAgICk6IFByb21pc2U8VE9OQ29udHJhY3RDb252ZXJ0QWRkcmVzc1Jlc3VsdD4ge1xuICAgICAgICByZXR1cm4gdGhpcy5yZXF1ZXN0Q29yZSgnY29udHJhY3RzLmFkZHJlc3MuY29udmVydCcsIHBhcmFtcyk7XG4gICAgfVxuXG4gICAgLy8gSW50ZXJuYWxzXG5cbiAgICBhc3luYyBpbnRlcm5hbERlcGxveU5hdGl2ZShwYXJhbXM6IFRPTkNvbnRyYWN0RGVwbG95UGFyYW1zKTogUHJvbWlzZTxUT05Db250cmFjdERlcGxveVJlc3VsdD4ge1xuICAgICAgICByZXR1cm4gdGhpcy5yZXF1ZXN0Q29yZSgnY29udHJhY3RzLmRlcGxveScsIHtcbiAgICAgICAgICAgIGFiaTogcGFyYW1zLnBhY2thZ2UuYWJpLFxuICAgICAgICAgICAgY29uc3RydWN0b3JIZWFkZXI6IHBhcmFtcy5jb25zdHJ1Y3RvckhlYWRlcixcbiAgICAgICAgICAgIGNvbnN0cnVjdG9yUGFyYW1zOiBwYXJhbXMuY29uc3RydWN0b3JQYXJhbXMsXG4gICAgICAgICAgICBpbml0UGFyYW1zOiBwYXJhbXMuaW5pdFBhcmFtcyxcbiAgICAgICAgICAgIGltYWdlQmFzZTY0OiBwYXJhbXMucGFja2FnZS5pbWFnZUJhc2U2NCxcbiAgICAgICAgICAgIGtleVBhaXI6IHBhcmFtcy5rZXlQYWlyLFxuICAgICAgICB9KTtcbiAgICB9XG5cblxuICAgIGFzeW5jIGludGVybmFsUnVuTmF0aXZlKHBhcmFtczogVE9OQ29udHJhY3RSdW5QYXJhbXMpOiBQcm9taXNlPFRPTkNvbnRyYWN0UnVuUmVzdWx0PiB7XG4gICAgICAgIHJldHVybiB0aGlzLnJlcXVlc3RDb3JlKCdjb250cmFjdHMucnVuJywge1xuICAgICAgICAgICAgYWRkcmVzczogcGFyYW1zLmFkZHJlc3MsXG4gICAgICAgICAgICBhYmk6IHBhcmFtcy5hYmksXG4gICAgICAgICAgICBmdW5jdGlvbk5hbWU6IHBhcmFtcy5mdW5jdGlvbk5hbWUsXG4gICAgICAgICAgICBoZWFkZXI6IHBhcmFtcy5oZWFkZXIsXG4gICAgICAgICAgICBpbnB1dDogcGFyYW1zLmlucHV0LFxuICAgICAgICAgICAga2V5UGFpcjogcGFyYW1zLmtleVBhaXIsXG4gICAgICAgIH0pO1xuICAgIH1cblxuXG4gICAgYXN5bmMgcmV0cnlDYWxsKGNhbGw6IChpbmRleDogbnVtYmVyKSA9PiBQcm9taXNlPGFueT4pOiBQcm9taXNlPGFueT4ge1xuICAgICAgICBjb25zdCByZXRyaWVzQ291bnQgPSB0aGlzLmNvbmZpZy5tZXNzYWdlUmV0cmllc0NvdW50KCk7XG4gICAgICAgIGZvciAobGV0IGkgPSAwOyBpIDw9IHJldHJpZXNDb3VudDsgaSArPSAxKSB7XG4gICAgICAgICAgICBpZiAoaSA+IDApIHtcbiAgICAgICAgICAgICAgICB0aGlzLmNvbmZpZy5sb2coYFJldHJ5ICMke2l9YCk7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICB0cnkge1xuICAgICAgICAgICAgICAgIHJldHVybiBhd2FpdCBjYWxsKGkpO1xuICAgICAgICAgICAgfSBjYXRjaCAoZXJyb3IpIHtcbiAgICAgICAgICAgICAgICAvLyByZXRyeSBpZiBtZXNzYWdlIGV4cGlyZWQgb3IgaWYgcmVzb2x2aW5nIHJldHVybmVkIHRoYXQgbWVzc2FnZSBleHBpcmVkL3JlcGxheVxuICAgICAgICAgICAgICAgIC8vIHByb3RlY3Rpb24gZXJyb3Igb3IgaWYgdHJhbnNhY3Rpb24gd2l0aCBtZXNzYWdlIGV4cGlyZWQvcmVwbGF5IHByb3RlY3Rpb24gZXJyb3JcbiAgICAgICAgICAgICAgICAvLyByZXR1cm5lZFxuICAgICAgICAgICAgICAgIGNvbnN0IHVzZVJldHJ5ID0gZXJyb3IuY29kZSA9PT0gVE9ORXJyb3JDb2RlLk1FU1NBR0VfRVhQSVJFRFxuICAgICAgICAgICAgICAgICAgICB8fCBUT05DbGllbnRFcnJvci5pc09yaWdpbmFsQ29udHJhY3RFcnJvcihlcnJvciwgVE9OQ29udHJhY3RFeGl0Q29kZS5SRVBMQVlfUFJPVEVDVElPTilcbiAgICAgICAgICAgICAgICAgICAgfHwgVE9OQ2xpZW50RXJyb3IuaXNPcmlnaW5hbENvbnRyYWN0RXJyb3IoZXJyb3IsIFRPTkNvbnRyYWN0RXhpdENvZGUuTUVTU0FHRV9FWFBJUkVEKVxuICAgICAgICAgICAgICAgICAgICB8fCBUT05DbGllbnRFcnJvci5pc1Jlc29sdmVkQ29udHJhY3RFcnJvckFmdGVyRXhwaXJlKGVycm9yLCBUT05Db250cmFjdEV4aXRDb2RlLlJFUExBWV9QUk9URUNUSU9OKVxuICAgICAgICAgICAgICAgICAgICB8fCBUT05DbGllbnRFcnJvci5pc1Jlc29sdmVkQ29udHJhY3RFcnJvckFmdGVyRXhwaXJlKGVycm9yLCBUT05Db250cmFjdEV4aXRDb2RlLk1FU1NBR0VfRVhQSVJFRCk7XG4gICAgICAgICAgICAgICAgaWYgKCF1c2VSZXRyeSB8fCBpID09PSByZXRyaWVzQ291bnQpIHtcbiAgICAgICAgICAgICAgICAgICAgdGhyb3cgZXJyb3I7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICAgIHRocm93IFRPTkNsaWVudEVycm9yLmludGVybmFsRXJyb3IoXG4gICAgICAgICAgICBhd2FpdCB0aGlzLmdldENsaWVudEluZm8oKSxcbiAgICAgICAgICAgICdBbGwgcmV0cnkgYXR0ZW1wdHMgZmFpbGVkJyxcbiAgICAgICAgKTtcbiAgICB9XG5cblxuICAgIGFzeW5jIGludGVybmFsRGVwbG95SnMoXG4gICAgICAgIHBhcmFtczogVE9OQ29udHJhY3REZXBsb3lQYXJhbXMsXG4gICAgICAgIHBhcmVudFNwYW4/OiAoU3BhbiB8IFNwYW5Db250ZXh0KSxcbiAgICApOiBQcm9taXNlPFRPTkNvbnRyYWN0RGVwbG95UmVzdWx0PiB7XG4gICAgICAgIHRoaXMuY29uZmlnLmxvZygnRGVwbG95IHN0YXJ0Jyk7XG4gICAgICAgIHJldHVybiB0aGlzLnJldHJ5Q2FsbChhc3luYyAocmV0cnlJbmRleCkgPT4ge1xuICAgICAgICAgICAgY29uc3QgZGVwbG95TWVzc2FnZSA9IGF3YWl0IHRoaXMuY3JlYXRlRGVwbG95TWVzc2FnZShwYXJhbXMsIHJldHJ5SW5kZXgpO1xuICAgICAgICAgICAgaWYgKGF3YWl0IHRoaXMuaXNEZXBsb3llZChkZXBsb3lNZXNzYWdlLmFkZHJlc3MsIHBhcmVudFNwYW4pKSB7XG4gICAgICAgICAgICAgICAgcmV0dXJuIHtcbiAgICAgICAgICAgICAgICAgICAgYWRkcmVzczogZGVwbG95TWVzc2FnZS5hZGRyZXNzLFxuICAgICAgICAgICAgICAgICAgICBhbHJlYWR5RGVwbG95ZWQ6IHRydWUsXG4gICAgICAgICAgICAgICAgfTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGNvbnN0IHByb2Nlc3NpbmcgPSBhd2FpdCB0aGlzLnNlbmRNZXNzYWdlKGRlcGxveU1lc3NhZ2UubWVzc2FnZSwgcGFyZW50U3Bhbik7XG4gICAgICAgICAgICByZXR1cm4gdGhpcy53YWl0Rm9yRGVwbG95VHJhbnNhY3Rpb24oZGVwbG95TWVzc2FnZSwgcHJvY2Vzc2luZywgcGFyZW50U3Bhbik7XG4gICAgICAgIH0pO1xuICAgIH1cblxuXG4gICAgYXN5bmMgaW50ZXJuYWxSdW5KcyhcbiAgICAgICAgcGFyYW1zOiBUT05Db250cmFjdFJ1blBhcmFtcyxcbiAgICAgICAgcGFyZW50U3Bhbj86IChTcGFuIHwgU3BhbkNvbnRleHQpLFxuICAgICk6IFByb21pc2U8VE9OQ29udHJhY3RSdW5SZXN1bHQ+IHtcbiAgICAgICAgdGhpcy5jb25maWcubG9nKCdSdW4gc3RhcnQnKTtcbiAgICAgICAgcmV0dXJuIHRoaXMucmV0cnlDYWxsKGFzeW5jIChyZXRyeUluZGV4KSA9PiB7XG4gICAgICAgICAgICBjb25zdCBydW5NZXNzYWdlID0gYXdhaXQgdGhpcy5jcmVhdGVSdW5NZXNzYWdlKHBhcmFtcywgcmV0cnlJbmRleCk7XG4gICAgICAgICAgICBjb25zdCBwcm9jZXNzaW5nID0gYXdhaXQgdGhpcy5zZW5kTWVzc2FnZShydW5NZXNzYWdlLm1lc3NhZ2UsIHBhcmVudFNwYW4pO1xuICAgICAgICAgICAgcmV0dXJuIHRoaXMud2FpdEZvclJ1blRyYW5zYWN0aW9uKHJ1bk1lc3NhZ2UsIHByb2Nlc3NpbmcsIHBhcmVudFNwYW4pO1xuICAgICAgICB9KTtcbiAgICB9XG5cblxuICAgIGFzeW5jIGdldEFjY291bnQoXG4gICAgICAgIGFkZHJlc3M6IHN0cmluZyxcbiAgICAgICAgYWN0aXZlOiBib29sZWFuLFxuICAgICAgICB3YWl0UGFyYW1zPzogVE9OQ29udHJhY3RBY2NvdW50V2FpdFBhcmFtcyxcbiAgICAgICAgcGFyZW50U3Bhbj86IChTcGFuIHwgU3BhbkNvbnRleHQpLFxuICAgICk6IFByb21pc2U8UUFjY291bnQ+IHtcbiAgICAgICAgY29uc3QgZmlsdGVyOiB7IFtzdHJpbmddOiBhbnkgfSA9IHtcbiAgICAgICAgICAgIGlkOiB7IGVxOiBhZGRyZXNzIH0sXG4gICAgICAgIH07XG4gICAgICAgIGlmICh3YWl0UGFyYW1zICYmIHdhaXRQYXJhbXMudHJhbnNhY3Rpb25MdCkge1xuICAgICAgICAgICAgZmlsdGVyLmxhc3RfdHJhbnNfbHQgPSB7IGdlOiB3YWl0UGFyYW1zLnRyYW5zYWN0aW9uTHQgfTtcbiAgICAgICAgfVxuICAgICAgICBpZiAoYWN0aXZlKSB7XG4gICAgICAgICAgICBmaWx0ZXIuYWNjX3R5cGUgPSB7IGVxOiBRQWNjb3VudFR5cGUuYWN0aXZlIH07XG4gICAgICAgIH1cblxuICAgICAgICB0aGlzLmNvbmZpZy5sb2coJ2dldEFjY291bnQuIEZpbHRlcicsIGZpbHRlcik7XG4gICAgICAgIGNvbnN0IGFjY291bnRzID0gYXdhaXQgdGhpcy5xdWVyaWVzLmFjY291bnRzLnF1ZXJ5KHtcbiAgICAgICAgICAgIGZpbHRlcixcbiAgICAgICAgICAgIHJlc3VsdDogJ2lkIGFjY190eXBlIGJvYyBjb2RlX2hhc2ggZGF0YV9oYXNoIGJhbGFuY2UgYmFsYW5jZV9vdGhlciB7IGN1cnJlbmN5IHZhbHVlIH0gbGFzdF9wYWlkJyxcbiAgICAgICAgICAgIC4uLih3YWl0UGFyYW1zICYmIHdhaXRQYXJhbXMudGltZW91dCA/IHsgdGltZW91dDogd2FpdFBhcmFtcy50aW1lb3V0IH0gOiB7fSksXG4gICAgICAgICAgICBwYXJlbnRTcGFuLFxuICAgICAgICB9KTtcbiAgICAgICAgaWYgKGFjY291bnRzLmxlbmd0aCA9PT0gMCkge1xuICAgICAgICAgICAgdGhyb3cgVE9OQ2xpZW50RXJyb3IuYWNjb3VudE1pc3NpbmcoXG4gICAgICAgICAgICAgICAgYXdhaXQgdGhpcy5nZXRDbGllbnRJbmZvKCksXG4gICAgICAgICAgICAgICAgYWRkcmVzcyxcbiAgICAgICAgICAgICk7XG4gICAgICAgIH1cbiAgICAgICAgY29uc3QgYWNjb3VudCA9IGFjY291bnRzWzBdO1xuICAgICAgICByZW1vdmVUeXBlTmFtZShhY2NvdW50KTtcbiAgICAgICAgdGhpcy5jb25maWcubG9nKCdnZXRBY2NvdW50LiBBY2NvdW50IHJlY2VpdmVkJywgYWNjb3VudCk7XG4gICAgICAgIHJldHVybiBhY2NvdW50O1xuICAgIH1cblxuICAgIGFzeW5jIGludGVybmFsUnVuTG9jYWxKcyhcbiAgICAgICAgcGFyYW1zOiBUT05Db250cmFjdFJ1bkxvY2FsUGFyYW1zLFxuICAgICAgICBwYXJlbnRTcGFuPzogKFNwYW4gfCBTcGFuQ29udGV4dCksXG4gICAgKTogUHJvbWlzZTxUT05Db250cmFjdFJ1bkxvY2FsUmVzdWx0PiB7XG4gICAgICAgIGNvbnN0IGFkZHJlc3MgPSBwYXJhbXMuYWRkcmVzcztcbiAgICAgICAgaWYgKCFhZGRyZXNzKSB7XG4gICAgICAgICAgICB0aHJvdyBUT05DbGllbnRFcnJvci5hZGRyZXNzUmVxdWlyZWRGb3JSdW5Mb2NhbChhd2FpdCB0aGlzLmdldENsaWVudEluZm8oKSk7XG4gICAgICAgIH1cbiAgICAgICAgY29uc3QgYWNjb3VudCA9IHBhcmFtcy5hY2NvdW50IHx8IChhd2FpdCB0aGlzLmdldEFjY291bnQoXG4gICAgICAgICAgICBhZGRyZXNzLFxuICAgICAgICAgICAgZmFsc2UsXG4gICAgICAgICAgICBwYXJhbXMud2FpdFBhcmFtcyxcbiAgICAgICAgICAgIHBhcmVudFNwYW4sXG4gICAgICAgICkpO1xuICAgICAgICBpZiAoIWFjY291bnQuY29kZV9oYXNoKSB7XG4gICAgICAgICAgICB0aHJvdyBUT05DbGllbnRFcnJvci5hY2NvdW50Q29kZU1pc3NpbmcoXG4gICAgICAgICAgICAgICAgYXdhaXQgdGhpcy5nZXRDbGllbnRJbmZvKCksXG4gICAgICAgICAgICAgICAgYWRkcmVzcyxcbiAgICAgICAgICAgICAgICAoYWNjb3VudDogYW55KS5iYWxhbmNlLFxuICAgICAgICAgICAgKTtcbiAgICAgICAgfVxuICAgICAgICByZXR1cm4gdGhpcy5yZXF1ZXN0Q29yZSgnY29udHJhY3RzLnJ1bi5sb2NhbCcsIHtcbiAgICAgICAgICAgIGFkZHJlc3MsXG4gICAgICAgICAgICBhY2NvdW50LFxuICAgICAgICAgICAgYWJpOiBwYXJhbXMuYWJpLFxuICAgICAgICAgICAgZnVuY3Rpb25OYW1lOiBwYXJhbXMuZnVuY3Rpb25OYW1lLFxuICAgICAgICAgICAgaW5wdXQ6IHBhcmFtcy5pbnB1dCxcbiAgICAgICAgICAgIGtleVBhaXI6IHBhcmFtcy5rZXlQYWlyLFxuICAgICAgICAgICAgZnVsbFJ1bjogcGFyYW1zLmZ1bGxSdW4sXG4gICAgICAgIH0pO1xuICAgIH1cblxuICAgIGFzeW5jIGludGVybmFsUnVuTWVzc2FnZUxvY2FsSnMoXG4gICAgICAgIHBhcmFtczogVE9OQ29udHJhY3RSdW5NZXNzYWdlTG9jYWxQYXJhbXMsXG4gICAgICAgIHBhcmVudFNwYW4/OiAoU3BhbiB8IFNwYW5Db250ZXh0KSxcbiAgICApOiBQcm9taXNlPFRPTkNvbnRyYWN0UnVuTG9jYWxSZXN1bHQ+IHtcbiAgICAgICAgY29uc3QgYWRkcmVzcyA9IHBhcmFtcy5hZGRyZXNzO1xuICAgICAgICBpZiAoIWFkZHJlc3MpIHtcbiAgICAgICAgICAgIHRocm93IFRPTkNsaWVudEVycm9yLmFkZHJlc3NSZXF1aXJlZEZvclJ1bkxvY2FsKGF3YWl0IHRoaXMuZ2V0Q2xpZW50SW5mbygpKTtcbiAgICAgICAgfVxuICAgICAgICBjb25zdCBhY2NvdW50ID0gcGFyYW1zLmFjY291bnQgfHwgKGF3YWl0IHRoaXMuZ2V0QWNjb3VudChcbiAgICAgICAgICAgIGFkZHJlc3MsXG4gICAgICAgICAgICBmYWxzZSxcbiAgICAgICAgICAgIHBhcmFtcy53YWl0UGFyYW1zLFxuICAgICAgICAgICAgcGFyZW50U3BhbixcbiAgICAgICAgKSk7XG4gICAgICAgIGlmICghYWNjb3VudC5jb2RlX2hhc2gpIHtcbiAgICAgICAgICAgIHRocm93IFRPTkNsaWVudEVycm9yLmFjY291bnRDb2RlTWlzc2luZyhcbiAgICAgICAgICAgICAgICBhd2FpdCB0aGlzLmdldENsaWVudEluZm8oKSxcbiAgICAgICAgICAgICAgICBhZGRyZXNzLFxuICAgICAgICAgICAgICAgIChhY2NvdW50OiBhbnkpLmJhbGFuY2UsXG4gICAgICAgICAgICApO1xuICAgICAgICB9XG4gICAgICAgIHJldHVybiB0aGlzLnJlcXVlc3RDb3JlKCdjb250cmFjdHMucnVuLmxvY2FsLm1zZycsIHtcbiAgICAgICAgICAgIGFkZHJlc3MsXG4gICAgICAgICAgICBhY2NvdW50LFxuICAgICAgICAgICAgYWJpOiBwYXJhbXMuYWJpLFxuICAgICAgICAgICAgZnVuY3Rpb25OYW1lOiBwYXJhbXMuZnVuY3Rpb25OYW1lLFxuICAgICAgICAgICAgbWVzc2FnZUJhc2U2NDogcGFyYW1zLm1lc3NhZ2VCb2R5QmFzZTY0LFxuICAgICAgICAgICAgZnVsbFJ1bjogcGFyYW1zLmZ1bGxSdW4sXG4gICAgICAgIH0pO1xuICAgIH1cbn1cblxuVE9OQ29udHJhY3RzTW9kdWxlLm1vZHVsZU5hbWUgPSAnVE9OQ29udHJhY3RzTW9kdWxlJztcblxuY29uc3QgdHJhbnNhY3Rpb25EZXRhaWxzID0gYFxuICAgIGlkXG4gICAgaW5fbXNnXG4gICAgdHJfdHlwZVxuICAgIHN0YXR1c1xuICAgIGluX21zZ1xuICAgIG91dF9tc2dzXG4gICAgYmxvY2tfaWRcbiAgICBub3dcbiAgICBhYm9ydGVkXG4gICAgbHRcbiAgICB0b3RhbF9mZWVzXG4gICAgc3RvcmFnZSB7XG4gICAgICAgIHN0YXR1c19jaGFuZ2VcbiAgICAgICAgc3RvcmFnZV9mZWVzX2NvbGxlY3RlZFxuICAgIH1cbiAgICBjb21wdXRlIHtcbiAgICAgICAgY29tcHV0ZV90eXBlXG4gICAgICAgIHNraXBwZWRfcmVhc29uXG4gICAgICAgIHN1Y2Nlc3NcbiAgICAgICAgZXhpdF9jb2RlXG4gICAgICAgIGdhc19mZWVzXG4gICAgICAgIGdhc191c2VkXG4gICAgfVxuICAgIGFjdGlvbiB7XG4gICAgICAgIHN1Y2Nlc3NcbiAgICAgICAgdmFsaWRcbiAgICAgICAgcmVzdWx0X2NvZGVcbiAgICAgICAgbm9fZnVuZHNcbiAgICAgICAgdG90YWxfZndkX2ZlZXNcbiAgICAgICAgdG90YWxfYWN0aW9uX2ZlZXNcbiAgICB9XG4gICAgb3V0X21lc3NhZ2VzIHtcbiAgICAgICAgaWRcbiAgICAgICAgbXNnX3R5cGVcbiAgICAgICAgYm9keVxuICAgICAgICB2YWx1ZVxuICAgIH1cbiAgIGA7XG5cbmNvbnN0IEJMT0NLX0ZJRUxEUyA9IGBcbiAgICBpZFxuICAgIGdlbl91dGltZVxuICAgIGFmdGVyX3NwbGl0XG4gICAgd29ya2NoYWluX2lkXG4gICAgc2hhcmRcbiAgICBpbl9tc2dfZGVzY3Ige1xuICAgICAgICBtc2dfaWRcbiAgICAgICAgdHJhbnNhY3Rpb25faWRcbiAgICB9XG5gO1xuXG5jb25zdCBUUkFOU0FDVElPTl9GSUVMRFNfT1JESU5BUlkgPSBgXG4gICAgaWRcbiAgICBhYm9ydGVkXG4gICAgY29tcHV0ZSB7XG4gICAgICAgIHNraXBwZWRfcmVhc29uXG4gICAgICAgIGV4aXRfY29kZVxuICAgICAgICBzdWNjZXNzXG4gICAgICAgIGdhc19mZWVzXG4gICAgfVxuICAgIHN0b3JhZ2Uge1xuICAgICAgIHN0YXR1c19jaGFuZ2VcbiAgICAgICBzdG9yYWdlX2ZlZXNfY29sbGVjdGVkXG4gICAgfVxuICAgIGFjdGlvbiB7XG4gICAgICAgIHN1Y2Nlc3NcbiAgICAgICAgdmFsaWRcbiAgICAgICAgbm9fZnVuZHNcbiAgICAgICAgcmVzdWx0X2NvZGVcbiAgICAgICAgdG90YWxfZndkX2ZlZXNcbiAgICAgICAgdG90YWxfYWN0aW9uX2ZlZXNcbiAgICB9XG4gICAgaW5fbXNnXG4gICAgbm93XG4gICAgb3V0X21zZ3NcbiAgICBvdXRfbWVzc2FnZXMge1xuICAgICAgICBpZFxuICAgICAgICBib2R5XG4gICAgICAgIG1zZ190eXBlXG4gICAgICAgIHZhbHVlXG4gICAgfVxuICAgIHN0YXR1c1xuICAgIHRvdGFsX2ZlZXNcbmA7XG4iXX0=