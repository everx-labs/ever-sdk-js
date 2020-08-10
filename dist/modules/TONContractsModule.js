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

function _createSuper(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct(); return function _createSuperInternal() { var Super = _getPrototypeOf(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = _getPrototypeOf(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return _possibleConstructorReturn(this, result); }; }

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
                  message_id: messageId,
                  block_id: processing.lastBlockId,
                  timeout: timeout,
                  message_processing_state: processing,
                  expire: expire,
                  sending_time: processing.sendingTime
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
                  message_id: messageId,
                  sending_time: processing.sendingTime,
                  expire: stopTime,
                  block_time: block.gen_utime,
                  block_id: processing.lastBlockId
                };
                throw _context37.t6.messageExpired.call(_context37.t6, _context37.t7, _context37.t8);

              case 68:
                _context37.t9 = _TONClient.TONClientError;
                _context37.next = 71;
                return this.getClientInfo();

              case 71:
                _context37.t10 = _context37.sent;
                _context37.t11 = {
                  message_id: messageId,
                  sending_time: processing.sendingTime,
                  timeout: timeout,
                  message_processing_state: processing
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
                _context40.prev = 14;
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
                                message_id: messageId,
                                sending_time: sendingTime,
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
                                message_id: messageId,
                                block_id: block.id,
                                transaction_id: transactionId,
                                timeout: BLOCK_TRANSACTION_WAITING_TIME,
                                sending_time: sendingTime,
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
                              message_id: messageId,
                              sending_time: sendingTime,
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
                _context40.prev = 18;
                _context40.next = 21;
                return Promise.race(promises);

              case 21:
                _context40.prev = 21;

                if (!(promises.length > 1 && operationId)) {
                  _context40.next = 25;
                  break;
                }

                _context40.next = 25;
                return this.queries.finishOperations([operationId]);

              case 25:
                return _context40.finish(21);

              case 26:
                if (transaction) {
                  _context40.next = 33;
                  break;
                }

                _context40.t0 = _TONClient.TONClientError;
                _context40.next = 30;
                return this.getClientInfo();

              case 30:
                _context40.t1 = _context40.sent;
                _context40.t2 = {
                  message_id: messageId,
                  sending_time: sendingTime,
                  expire: expire,
                  block_time: blockTime
                };
                throw _context40.t0.messageExpired.call(_context40.t0, _context40.t1, _context40.t2);

              case 33:
                transactionNow = transaction.now || 0;
                this.config.log('[waitForTransaction]', 'TRANSACTION_RECEIVED', {
                  id: transaction.id,
                  blockId: transaction.block_id,
                  now: "".concat(new Date(transactionNow * 1000).toISOString(), " (").concat(transactionNow, ")")
                });
                _context40.next = 50;
                break;

              case 37:
                _context40.prev = 37;
                _context40.t3 = _context40["catch"](14);
                this.config.log('[waitForTransaction]', 'FAILED', _context40.t3);

                if (!(_TONClient.TONClientError.isMessageExpired(_context40.t3) || _TONClient.TONClientError.isClientError(_context40.t3, _TONClient.TONErrorCode.TRANSACTION_WAIT_TIMEOUT))) {
                  _context40.next = 49;
                  break;
                }

                _context40.next = 43;
                return this.resolveDetailedError(_context40.t3, message.messageBodyBase64, Date.now() / 1000, message.address);

              case 43:
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

              case 49:
                throw _context40.t3;

              case 50:
                removeTypeName(transaction);
                _context40.next = 53;
                return this.processTransaction(message.address, transaction, abi, functionName);

              case 53:
                _yield$this$processTr = _context40.sent;
                output = _yield$this$processTr.output;
                fees = _yield$this$processTr.fees;
                return _context40.abrupt("return", {
                  transaction: transaction,
                  output: output,
                  fees: fees
                });

              case 57:
              case "end":
                return _context40.stop();
            }
          }
        }, _callee40, this, [[14, 37], [18,, 21, 26]]);
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy9tb2R1bGVzL1RPTkNvbnRyYWN0c01vZHVsZS5qcyJdLCJuYW1lcyI6WyJUT05BZGRyZXNzU3RyaW5nVmFyaWFudCIsIkFjY291bnRJZCIsIkhleCIsIkJhc2U2NCIsIlRPTkNsaWVudFRyYW5zYWN0aW9uUGhhc2UiLCJzdG9yYWdlIiwiY29tcHV0ZVNraXBwZWQiLCJjb21wdXRlVm0iLCJhY3Rpb24iLCJ1bmtub3duIiwiVE9OQ2xpZW50Q29tcHV0ZVNraXBwZWRTdGF0dXMiLCJub1N0YXRlIiwiYmFkU3RhdGUiLCJub0dhcyIsIlRPTkNsaWVudFN0b3JhZ2VTdGF0dXMiLCJ1bmNoYW5nZWQiLCJmcm96ZW4iLCJkZWxldGVkIiwiUUluTXNnVHlwZSIsImV4dGVybmFsIiwiaWhyIiwiaW1tZWRpYXRlbHkiLCJ0cmFuc2l0IiwiZGlzY2FyZGVkRmluYWwiLCJkaXNjYXJkZWRUcmFuc2l0IiwiUU91dE1zZ1R5cGUiLCJvdXRNc2dOZXciLCJkZXF1ZXVlSW1tZWRpYXRlbHkiLCJkZXF1ZXVlIiwidHJhbnNpdFJlcXVpcmVkIiwibm9uZSIsIlFNZXNzYWdlVHlwZSIsImludGVybmFsIiwiZXh0SW4iLCJleHRPdXQiLCJRTWVzc2FnZVByb2Nlc3NpbmdTdGF0dXMiLCJxdWV1ZWQiLCJwcm9jZXNzaW5nIiwicHJlbGltaW5hcnkiLCJwcm9wb3NlZCIsImZpbmFsaXplZCIsInJlZnVzZWQiLCJ0cmFuc2l0aW5nIiwiUUJsb2NrUHJvY2Vzc2luZ1N0YXR1cyIsIlFTcGxpdFR5cGUiLCJzcGxpdCIsIm1lcmdlIiwiUUFjY291bnRUeXBlIiwidW5pbml0IiwiYWN0aXZlIiwiUVRyYW5zYWN0aW9uVHlwZSIsIm9yZGluYXJ5IiwidGljayIsInRvY2siLCJzcGxpdFByZXBhcmUiLCJzcGxpdEluc3RhbGwiLCJtZXJnZVByZXBhcmUiLCJtZXJnZUluc3RhbGwiLCJRVHJhbnNhY3Rpb25Qcm9jZXNzaW5nU3RhdHVzIiwiUUFjY291bnRTdGF0dXMiLCJub25FeGlzdCIsIlFBY2NvdW50U3RhdHVzQ2hhbmdlIiwiUUNvbXB1dGVUeXBlIiwic2tpcHBlZCIsInZtIiwiUVNraXBSZWFzb24iLCJRQm91bmNlVHlwZSIsIm5lZ0Z1bmRzIiwibm9GdW5kcyIsIm9rIiwiTUFTVEVSQ0hBSU5fSUQiLCJFWFRSQV9UUkFOU0FDVElPTl9XQUlUSU5HX1RJTUUiLCJCTE9DS19UUkFOU0FDVElPTl9XQUlUSU5HX1RJTUUiLCJyZW1vdmVUeXBlTmFtZSIsIm9iaiIsIl9fdHlwZW5hbWUiLCJPYmplY3QiLCJ2YWx1ZXMiLCJmb3JFYWNoIiwidmFsdWUiLCJyZW1vdmVQcm9wcyIsInBhdGhzIiwicmVzdWx0IiwicGF0aCIsImRvdFBvcyIsImluZGV4T2YiLCJuYW1lIiwic3Vic3RyIiwiY2hpbGQiLCJyZWR1Y2VkQ2hpbGQiLCJzdGFydE1lc3NhZ2VUcmFjZVNwYW4iLCJ0cmFjZXIiLCJtZXNzYWdlSWQiLCJvcGVyYXRpb25OYW1lIiwidGFncyIsInRyYWNlSWQiLCJzcGFuSWQiLCJyb290Q29udGV4dCIsImV4dHJhY3QiLCJGT1JNQVRfVEVYVF9NQVAiLCJzdGFydFNwYW4iLCJjaGlsZE9mIiwidHJhY2VNZXNzYWdlIiwic3BhbiIsImZpbmlzaCIsIlRPTkNvbnRyYWN0c01vZHVsZSIsImNvbmZpZyIsImNvbnRleHQiLCJnZXRNb2R1bGUiLCJUT05Db25maWdNb2R1bGUiLCJxdWVyaWVzIiwiVE9OUXVlcmllc01vZHVsZSIsInBhcmFtcyIsInBhcmVudFNwYW4iLCJhY2NvdW50cyIsInF1ZXJ5IiwiZmlsdGVyIiwiaWQiLCJlcSIsImFkZHJlc3MiLCJsZW5ndGgiLCJiYWxhbmNlR3JhbXMiLCJiYWxhbmNlIiwidHJhY2UiLCJzZXRUYWciLCJpbnRlcm5hbERlcGxveUpzIiwiaW50ZXJuYWxSdW5KcyIsImludGVybmFsUnVuTG9jYWxKcyIsImludGVybmFsUnVuTWVzc2FnZUxvY2FsSnMiLCJjb3JlUGFyYW1zIiwiaGFzQ29kZSIsImJvY0Jhc2U2NCIsImNvZGVCYXNlNjQiLCJkYXRhQmFzZTY0IiwiVE9OQ2xpZW50RXJyb3IiLCJnZXRDbGllbnRJbmZvIiwiYWRkcmVzc1JlcXVpcmVkRm9yUnVuTG9jYWwiLCJnZXRBY2NvdW50IiwidGltZW91dCIsIndhaXRGb3JUaW1lb3V0IiwiYWNjb3VudCIsImNvZGVfaGFzaCIsImFjY291bnRDb2RlTWlzc2luZyIsInBhcmFtc0Zyb21BY2NvdW50IiwiYm9jIiwibGFzdF9wYWlkIiwicmVxdWVzdENvcmUiLCJjb25zIiwiaXRlbSIsImludmFsaWRDb25zIiwiY29yZVZlcnNpb24iLCJjb25maWdTZXJ2ZXIiLCJxdWVyeVVybCIsInB1c2giLCJyZXRyeUluZGV4IiwibG9nIiwiYWJpIiwiY29uc3RydWN0b3JIZWFkZXIiLCJjb25zdHJ1Y3RvclBhcmFtcyIsImluaXRQYXJhbXMiLCJpbWFnZUJhc2U2NCIsImtleVBhaXIiLCJ3b3JrY2hhaW5JZCIsIm1lc3NhZ2UiLCJmdW5jdGlvbk5hbWUiLCJoZWFkZXIiLCJ0cnlJbmRleCIsImlucHV0IiwicHVibGljS2V5SGV4IiwiYWRkcmVzc0hleCIsInNpZ25QYXJhbXMiLCJlbmNvZGVkIiwiY3JlYXRlU2lnbmVkTWVzc2FnZSIsInVuc2lnbmVkTWVzc2FnZSIsInVuc2lnbmVkQnl0ZXNCYXNlNjQiLCJzaWduQnl0ZXNCYXNlNjQiLCJleHBpcmUiLCJnZXRCb2NIYXNoIiwibWVzc2FnZUJvZHlCYXNlNjQiLCJoYXNoIiwiRGF0ZSIsIm5vdyIsInNlbmROb2RlUmVxdWVzdEZhaWxlZCIsIk1hdGgiLCJzZXJ2ZXJUaW1lRGVsdGEiLCJhYnMiLCJvdXRPZlN5bmNUaHJlc2hvbGQiLCJkcm9wU2VydmVyVGltZURlbHRhIiwiY2xvY2tPdXRPZlN5bmMiLCJmaW5kTGFzdFNoYXJkQmxvY2siLCJsYXN0QmxvY2tJZCIsImVuc3VyZU1lc3NhZ2VJZCIsImlkQmFzZTY0IiwiQnVmZmVyIiwiZnJvbSIsInRvU3RyaW5nIiwibWVzc2FnZVNwYW4iLCJzdGFydFJvb3RTcGFuIiwiYWRkVGFncyIsIm1lc3NhZ2VTaXplIiwiY2VpbCIsInBvc3RSZXF1ZXN0cyIsImJvZHkiLCJzZW5kaW5nVGltZSIsInJvdW5kIiwicmVzdWx0RmllbGRzIiwic2VuZE1lc3NhZ2UiLCJ3YWl0Rm9yVHJhbnNhY3Rpb24iLCJtZXNzYWdlUHJvY2Vzc2luZ1N0YXRlIiwidHJhbnNhY3Rpb24iLCJjaGFpbiIsImFkZGl0aW9uYWxGaWx0ZXIiLCJibG9ja3MiLCJ3b3JrY2hhaW5faWQiLCJvcmRlckJ5IiwiZGlyZWN0aW9uIiwibGltaXQiLCJzaGFyZHMiLCJhZGRyZXNzUGFydHMiLCJ3b3JrY2hhaW4iLCJOdW1iZXIiLCJwYXJzZUludCIsImZpbmRMYXN0QmxvY2siLCJtYXN0ZXJjaGFpbkxhc3RCbG9jayIsIm5vQmxvY2tzIiwid29ya2NoYWluTGFzdEJsb2NrIiwiYWZ0ZXJfbWVyZ2UiLCJzaGFyZCIsImludmFsaWRCbG9ja2NoYWluIiwibWFzdGVyIiwic2hhcmRfaGFzaGVzIiwiZmluZE1hdGNoaW5nU2hhcmQiLCJzaGFyZEJsb2NrIiwicm9vdF9oYXNoIiwiZGVzY3IiLCJibG9jayIsImN1cnJlbnQiLCJ3YWl0Rm9yIiwicHJldl9yZWYiLCJPUiIsInByZXZfYWx0X3JlZiIsIkJMT0NLX0ZJRUxEUyIsImFmdGVyX3NwbGl0IiwiY2hlY2tTaGFyZE1hdGNoIiwibmUiLCJ0b3RhbFN0YXJ0IiwidGltZVJlcG9ydCIsInN0b3BUaW1lIiwibWVzc2FnZVByb2Nlc3NpbmdUaW1lb3V0IiwiaW5maW5pdGVXYWl0IiwiYWRkVGltZW91dCIsIm1heCIsInN0YXJ0Iiwid2FpdE5leHRCbG9jayIsImVuZCIsImdlbl91dGltZSIsInJlc29sdmVkRXJyb3IiLCJjb2RlIiwiVE9ORXJyb3JDb2RlIiwiV0FJVF9GT1JfVElNRU9VVCIsIm1lc3NhZ2VfaWQiLCJibG9ja19pZCIsIm1lc3NhZ2VfcHJvY2Vzc2luZ19zdGF0ZSIsInNlbmRpbmdfdGltZSIsIm5ldHdvcmtTaWxlbnQiLCJpbk1zZyIsImluX21zZ19kZXNjciIsImZpbmQiLCJ4IiwibXNnX2lkIiwidHJhbnNhY3Rpb25JZCIsInRyYW5zYWN0aW9uX2lkIiwidHJTdGFydCIsInRyYW5zYWN0aW9ucyIsIlRSQU5TQUNUSU9OX0ZJRUxEU19PUkRJTkFSWSIsIk1BWF9USU1FT1VUIiwiYmxvY2tfdGltZSIsIm1lc3NhZ2VFeHBpcmVkIiwidHJhbnNhY3Rpb25XYWl0VGltZW91dCIsInNwbGljZSIsImpvaW4iLCJNRVNTQUdFX0VYUElSRUQiLCJUUkFOU0FDVElPTl9XQUlUX1RJTUVPVVQiLCJyZXNvbHZlRGV0YWlsZWRFcnJvciIsInByb2Nlc3NUcmFuc2FjdGlvbiIsInByb2Nlc3NpbmdUaW1lb3V0IiwicHJvbWlzZXMiLCJnZXRTZXJ2ZXJJbmZvIiwic2VydmVySW5mbyIsIm9wZXJhdGlvbklkIiwic3VwcG9ydHNPcGVyYXRpb25JZCIsImdlbmVyYXRlT3BlcmF0aW9uSWQiLCJ1bmRlZmluZWQiLCJibG9ja1RpbWVvdXQiLCJ3YWl0RXhwaXJlZCIsIm1pbl9zaGFyZF9nZW5fdXRpbWUiLCJnZSIsImlzV2FpdEZvclRpbWVvdXQiLCJtc2ciLCJpbnRlcm5hbEVycm9yIiwiYmxvY2tUaW1lIiwiUHJvbWlzZSIsInJlc29sdmUiLCJyZWplY3QiLCJpbl9tc2ciLCJzdGF0dXMiLCJ0cmFuc2FjdGlvbkRldGFpbHMiLCJyYWNlIiwiZmluaXNoT3BlcmF0aW9ucyIsInRyYW5zYWN0aW9uTm93IiwiYmxvY2tJZCIsInRvSVNPU3RyaW5nIiwiaXNNZXNzYWdlRXhwaXJlZCIsImlzQ2xpZW50RXJyb3IiLCJkZXRhaWxlZEVycm9yIiwiZGF0YSIsIm91dHB1dCIsImZlZXMiLCJvcmlnaW5hbF9lcnJvciIsImFjY291bnRNaXNzaW5nIiwiZXJyb3IiLCJtZXNzYWdlQmFzZTY0IiwidGltZSIsIm1haW5FcnJvciIsImFjY190eXBlIiwiaXNEZXBsb3llZCIsImFscmVhZHlEZXBsb3llZCIsIndhaXRGb3JEZXBsb3lUcmFuc2FjdGlvbiIsImRlcGxveU1lc3NhZ2UiLCJydW5NZXNzYWdlIiwid2FpdEZvclJ1blRyYW5zYWN0aW9uIiwid2FpdFBhcmFtcyIsImVtdWxhdGVCYWxhbmNlIiwiYmlnQmFsYW5jZSIsImNyZWF0ZURlcGxveU1lc3NhZ2UiLCJjYWxjTXNnUHJvY2Vzc0ZlZXMiLCJuZXdBY2NvdW50IiwiZmxvb3IiLCJjYWxsIiwicmV0cmllc0NvdW50IiwibWVzc2FnZVJldHJpZXNDb3VudCIsImkiLCJ1c2VSZXRyeSIsImlzT3JpZ2luYWxDb250cmFjdEVycm9yIiwiVE9OQ29udHJhY3RFeGl0Q29kZSIsIlJFUExBWV9QUk9URUNUSU9OIiwiaXNSZXNvbHZlZENvbnRyYWN0RXJyb3JBZnRlckV4cGlyZSIsInJldHJ5Q2FsbCIsImNyZWF0ZVJ1bk1lc3NhZ2UiLCJ0cmFuc2FjdGlvbkx0IiwibGFzdF90cmFuc19sdCIsImZ1bGxSdW4iLCJUT05Nb2R1bGUiLCJtb2R1bGVOYW1lIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7O0FBS0E7O0FBc0RBOztBQUNBOztBQUNBOztBQUNBOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBRU8sSUFBTUEsdUJBQXVCLEdBQUc7QUFDbkNDLEVBQUFBLFNBQVMsRUFBRSxXQUR3QjtBQUVuQ0MsRUFBQUEsR0FBRyxFQUFFLEtBRjhCO0FBR25DQyxFQUFBQSxNQUFNLEVBQUU7QUFIMkIsQ0FBaEM7O0FBTUEsSUFBTUMseUJBQXlCLEdBQUc7QUFDckNDLEVBQUFBLE9BQU8sRUFBRSxTQUQ0QjtBQUVyQ0MsRUFBQUEsY0FBYyxFQUFFLGdCQUZxQjtBQUdyQ0MsRUFBQUEsU0FBUyxFQUFFLFdBSDBCO0FBSXJDQyxFQUFBQSxNQUFNLEVBQUUsUUFKNkI7QUFLckNDLEVBQUFBLE9BQU8sRUFBRTtBQUw0QixDQUFsQzs7QUFRQSxJQUFNQyw2QkFBNkIsR0FBRztBQUN6Q0MsRUFBQUEsT0FBTyxFQUFFLENBRGdDO0FBRXpDQyxFQUFBQSxRQUFRLEVBQUUsQ0FGK0I7QUFHekNDLEVBQUFBLEtBQUssRUFBRTtBQUhrQyxDQUF0Qzs7QUFNQSxJQUFNQyxzQkFB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QUFFcEQsTUFBTSxDQUFDb0QsWUFKMEI7QUFLL0M2SixrQkFBQUEsYUFBYSxFQUFFak4sTUFBTSxDQUFDa0UsaUJBTHlCO0FBTS9DNkssa0JBQUFBLE9BQU8sRUFBRS9PLE1BQU0sQ0FBQytPO0FBTitCLGlCQUE1QyxDOzs7Ozs7Ozs7Ozs7Ozs7Ozs7O0VBN3dDaUNDLHFCOzs7QUF3eENoRHZQLGtCQUFrQixDQUFDd1AsVUFBbkIsR0FBZ0Msb0JBQWhDO0FBRUEsSUFBTS9DLGtCQUFrQiwya0JBQXhCO0FBd0NBLElBQU1qRSxZQUFZLCtJQUFsQjtBQVlBLElBQU1pQywyQkFBMkIsK2VBQWpDIiwic291cmNlc0NvbnRlbnQiOlsiLypcbiAqIENvcHlyaWdodCAyMDE4LTIwMjAgVE9OIERFViBTT0xVVElPTlMgTFRELlxuICovXG4vLyBAZmxvd1xuXG5pbXBvcnQgeyBUcmFjZXIsIEZPUk1BVF9URVhUX01BUCwgU3BhbiwgU3BhbkNvbnRleHQgfSBmcm9tICdvcGVudHJhY2luZyc7XG5pbXBvcnQgdHlwZSB7XG4gICAgUUFjY291bnQsXG4gICAgUUJsb2NrLFxuICAgIFFNZXNzYWdlLFxuICAgIFFUcmFuc2FjdGlvbixcbiAgICBUT05Db250cmFjdEFCSSxcbiAgICBUT05Db250cmFjdEFjY291bnRXYWl0UGFyYW1zLFxuICAgIFRPTkNvbnRyYWN0Q29udmVydEFkZHJlc3NQYXJhbXMsXG4gICAgVE9OQ29udHJhY3RDb252ZXJ0QWRkcmVzc1Jlc3VsdCxcbiAgICBUT05Db250cmFjdENyZWF0ZVJ1bkJvZHlQYXJhbXMsXG4gICAgVE9OQ29udHJhY3RDcmVhdGVSdW5Cb2R5UmVzdWx0LFxuICAgIFRPTkNvbnRyYWN0Q3JlYXRlU2lnbmVkRGVwbG95TWVzc2FnZVBhcmFtcyxcbiAgICBUT05Db250cmFjdENyZWF0ZVNpZ25lZE1lc3NhZ2VQYXJhbXMsXG4gICAgVE9OQ29udHJhY3RDcmVhdGVTaWduZWRSdW5NZXNzYWdlUGFyYW1zLFxuICAgIFRPTkNvbnRyYWN0RGVjb2RlTWVzc2FnZUJvZHlQYXJhbXMsXG4gICAgVE9OQ29udHJhY3REZWNvZGVNZXNzYWdlQm9keVJlc3VsdCxcbiAgICBUT05Db250cmFjdERlY29kZVJ1bk91dHB1dFBhcmFtcyxcbiAgICBUT05Db250cmFjdERlcGxveU1lc3NhZ2UsXG4gICAgVE9OQ29udHJhY3REZXBsb3lQYXJhbXMsXG4gICAgVE9OQ29udHJhY3REZXBsb3lSZXN1bHQsXG4gICAgVE9OQ29udHJhY3RDYWxjRGVwbG95RmVlUGFyYW1zLFxuICAgIFRPTkNvbnRyYWN0Qm9jLFxuICAgIFRPTkNvbnRyYWN0R2V0Qm9jSGFzaFJlc3VsdCxcbiAgICBUT05Db250cmFjdEdldENvZGVGcm9tSW1hZ2VQYXJhbXMsXG4gICAgVE9OQ29udHJhY3RHZXRDb2RlRnJvbUltYWdlUmVzdWx0LFxuICAgIFRPTkNvbnRyYWN0R2V0RGVwbG95RGF0YVBhcmFtcyxcbiAgICBUT05Db250cmFjdEdldERlcGxveURhdGFSZXN1bHQsXG4gICAgVE9OQ29udHJhY3RHZXRGdW5jdGlvbklkUGFyYW1zLFxuICAgIFRPTkNvbnRyYWN0R2V0RnVuY3Rpb25JZFJlc3VsdCxcbiAgICBUT05Db250cmFjdExvYWRQYXJhbXMsXG4gICAgVE9OQ29udHJhY3RMb2FkUmVzdWx0LFxuICAgIFRPTkNvbnRyYWN0Q2FsY1J1bkZlZVBhcmFtcyxcbiAgICBUT05Db250cmFjdENhbGNGZWVSZXN1bHQsXG4gICAgVE9OQ29udHJhY3RDYWxjTXNnUHJvY2Vzc2luZ0ZlZXNQYXJhbXMsXG4gICAgVE9OQ29udHJhY3RNZXNzYWdlLFxuICAgIFRPTkNvbnRyYWN0UnVuTG9jYWxQYXJhbXMsXG4gICAgVE9OQ29udHJhY3RSdW5NZXNzYWdlLFxuICAgIFRPTkNvbnRyYWN0UnVuUGFyYW1zLFxuICAgIFRPTkNvbnRyYWN0UnVuUmVzdWx0LFxuICAgIFRPTkNvbnRyYWN0cyxcbiAgICBUT05Db250cmFjdFVuc2lnbmVkRGVwbG95TWVzc2FnZSxcbiAgICBUT05Db250cmFjdFVuc2lnbmVkTWVzc2FnZSxcbiAgICBUT05Db250cmFjdFVuc2lnbmVkUnVuTWVzc2FnZSxcbiAgICBUT05Db250cmFjdFJ1bkdldFBhcmFtcyxcbiAgICBUT05Db250cmFjdFJ1bkdldFJlc3VsdCxcbiAgICBUT05Db250cmFjdFJ1bk1lc3NhZ2VMb2NhbFBhcmFtcyxcbiAgICBUT05Db250cmFjdFJ1bkxvY2FsUmVzdWx0LFxuICAgIFRPTkNvbnRyYWN0VHJhbnNhY3Rpb25GZWVzLFxuICAgIFRPTldhaXRGb3JUcmFuc2FjdGlvblBhcmFtcyxcbiAgICBRU2hhcmRIYXNoLFxuICAgIFRPTk1lc3NhZ2VQcm9jZXNzaW5nU3RhdGUsXG59IGZyb20gJy4uLy4uL3R5cGVzJztcblxuaW1wb3J0IHsgVE9OQ2xpZW50RXJyb3IsIFRPTkNvbnRyYWN0RXhpdENvZGUsIFRPTkVycm9yQ29kZSB9IGZyb20gJy4uL1RPTkNsaWVudCc7XG5pbXBvcnQgeyBUT05Nb2R1bGUgfSBmcm9tICcuLi9UT05Nb2R1bGUnO1xuaW1wb3J0IFRPTkNvbmZpZ01vZHVsZSBmcm9tICcuL1RPTkNvbmZpZ01vZHVsZSc7XG5pbXBvcnQgVE9OUXVlcmllc01vZHVsZSwgeyBNQVhfVElNRU9VVCB9IGZyb20gJy4vVE9OUXVlcmllc01vZHVsZSc7XG5cbmV4cG9ydCBjb25zdCBUT05BZGRyZXNzU3RyaW5nVmFyaWFudCA9IHtcbiAgICBBY2NvdW50SWQ6ICdBY2NvdW50SWQnLFxuICAgIEhleDogJ0hleCcsXG4gICAgQmFzZTY0OiAnQmFzZTY0Jyxcbn07XG5cbmV4cG9ydCBjb25zdCBUT05DbGllbnRUcmFuc2FjdGlvblBoYXNlID0ge1xuICAgIHN0b3JhZ2U6ICdzdG9yYWdlJyxcbiAgICBjb21wdXRlU2tpcHBlZDogJ2NvbXB1dGVTa2lwcGVkJyxcbiAgICBjb21wdXRlVm06ICdjb21wdXRlVm0nLFxuICAgIGFjdGlvbjogJ2FjdGlvbicsXG4gICAgdW5rbm93bjogJ3Vua25vd24nLFxufTtcblxuZXhwb3J0IGNvbnN0IFRPTkNsaWVudENvbXB1dGVTa2lwcGVkU3RhdHVzID0ge1xuICAgIG5vU3RhdGU6IDAsXG4gICAgYmFkU3RhdGU6IDEsXG4gICAgbm9HYXM6IDIsXG59O1xuXG5leHBvcnQgY29uc3QgVE9OQ2xpZW50U3RvcmFnZVN0YXR1cyA9IHtcbiAgICB1bmNoYW5nZWQ6IDAsXG4gICAgZnJvemVuOiAxLFxuICAgIGRlbGV0ZWQ6IDIsXG59O1xuXG5leHBvcnQgY29uc3QgUUluTXNnVHlwZSA9IHtcbiAgICBleHRlcm5hbDogMCxcbiAgICBpaHI6IDEsXG4gICAgaW1tZWRpYXRlbHk6IDIsXG4gICAgZmluYWw6IDMsXG4gICAgdHJhbnNpdDogNCxcbiAgICBkaXNjYXJkZWRGaW5hbDogNSxcbiAgICBkaXNjYXJkZWRUcmFuc2l0OiA2LFxufTtcblxuZXhwb3J0IGNvbnN0IFFPdXRNc2dUeXBlID0ge1xuICAgIGV4dGVybmFsOiAwLFxuICAgIGltbWVkaWF0ZWx5OiAxLFxuICAgIG91dE1zZ05ldzogMixcbiAgICB0cmFuc2l0OiAzLFxuICAgIGRlcXVldWVJbW1lZGlhdGVseTogNCxcbiAgICBkZXF1ZXVlOiA1LFxuICAgIHRyYW5zaXRSZXF1aXJlZDogNixcbiAgICBub25lOiAtMSxcbn07XG5cbmV4cG9ydCBjb25zdCBRTWVzc2FnZVR5cGUgPSB7XG4gICAgaW50ZXJuYWw6IDAsXG4gICAgZXh0SW46IDEsXG4gICAgZXh0T3V0OiAyLFxufTtcblxuZXhwb3J0IGNvbnN0IFFNZXNzYWdlUHJvY2Vzc2luZ1N0YXR1cyA9IHtcbiAgICB1bmtub3duOiAwLFxuICAgIHF1ZXVlZDogMSxcbiAgICBwcm9jZXNzaW5nOiAyLFxuICAgIHByZWxpbWluYXJ5OiAzLFxuICAgIHByb3Bvc2VkOiA0LFxuICAgIGZpbmFsaXplZDogNSxcbiAgICByZWZ1c2VkOiA2LFxuICAgIHRyYW5zaXRpbmc6IDcsXG59O1xuXG5leHBvcnQgY29uc3QgUUJsb2NrUHJvY2Vzc2luZ1N0YXR1cyA9IHtcbiAgICB1bmtub3duOiAwLFxuICAgIHByb3Bvc2VkOiAxLFxuICAgIGZpbmFsaXplZDogMixcbiAgICByZWZ1c2VkOiAzLFxufTtcblxuZXhwb3J0IGNvbnN0IFFTcGxpdFR5cGUgPSB7XG4gICAgbm9uZTogMCxcbiAgICBzcGxpdDogMixcbiAgICBtZXJnZTogMyxcbn07XG5cbmV4cG9ydCBjb25zdCBRQWNjb3VudFR5cGUgPSB7XG4gICAgdW5pbml0OiAwLFxuICAgIGFjdGl2ZTogMSxcbiAgICBmcm96ZW46IDIsXG59O1xuXG5leHBvcnQgY29uc3QgUVRyYW5zYWN0aW9uVHlwZSA9IHtcbiAgICBvcmRpbmFyeTogMCxcbiAgICBzdG9yYWdlOiAxLFxuICAgIHRpY2s6IDIsXG4gICAgdG9jazogMyxcbiAgICBzcGxpdFByZXBhcmU6IDQsXG4gICAgc3BsaXRJbnN0YWxsOiA1LFxuICAgIG1lcmdlUHJlcGFyZTogNixcbiAgICBtZXJnZUluc3RhbGw6IDcsXG59O1xuXG5leHBvcnQgY29uc3QgUVRyYW5zYWN0aW9uUHJvY2Vzc2luZ1N0YXR1cyA9IHtcbiAgICB1bmtub3duOiAwLFxuICAgIHByZWxpbWluYXJ5OiAxLFxuICAgIHByb3Bvc2VkOiAyLFxuICAgIGZpbmFsaXplZDogMyxcbiAgICByZWZ1c2VkOiA0LFxufTtcblxuZXhwb3J0IGNvbnN0IFFBY2NvdW50U3RhdHVzID0ge1xuICAgIHVuaW5pdDogMCxcbiAgICBhY3RpdmU6IDEsXG4gICAgZnJvemVuOiAyLFxuICAgIG5vbkV4aXN0OiAzLFxufTtcblxuZXhwb3J0IGNvbnN0IFFBY2NvdW50U3RhdHVzQ2hhbmdlID0ge1xuICAgIHVuY2hhbmdlZDogMCxcbiAgICBmcm96ZW46IDEsXG4gICAgZGVsZXRlZDogMixcbn07XG5cbmV4cG9ydCBjb25zdCBRQ29tcHV0ZVR5cGUgPSB7XG4gICAgc2tpcHBlZDogMCxcbiAgICB2bTogMSxcbn07XG5cbmV4cG9ydCBjb25zdCBRU2tpcFJlYXNvbiA9IHtcbiAgICBub1N0YXRlOiAwLFxuICAgIGJhZFN0YXRlOiAxLFxuICAgIG5vR2FzOiAyLFxufTtcblxuZXhwb3J0IGNvbnN0IFFCb3VuY2VUeXBlID0ge1xuICAgIG5lZ0Z1bmRzOiAwLFxuICAgIG5vRnVuZHM6IDEsXG4gICAgb2s6IDIsXG59O1xuXG5jb25zdCBNQVNURVJDSEFJTl9JRCA9IC0xO1xuXG5jb25zdCBFWFRSQV9UUkFOU0FDVElPTl9XQUlUSU5HX1RJTUUgPSAxMDAwMDtcbmNvbnN0IEJMT0NLX1RSQU5TQUNUSU9OX1dBSVRJTkdfVElNRSA9IDUwMDA7XG5cbmZ1bmN0aW9uIHJlbW92ZVR5cGVOYW1lKG9iajogYW55KSB7XG4gICAgaWYgKG9iai5fX3R5cGVuYW1lKSB7XG4gICAgICAgIGRlbGV0ZSBvYmouX190eXBlbmFtZTtcbiAgICB9XG4gICAgT2JqZWN0LnZhbHVlcyhvYmopXG4gICAgICAgIC5mb3JFYWNoKCh2YWx1ZSkgPT4ge1xuICAgICAgICAgICAgaWYgKCEhdmFsdWUgJiYgdHlwZW9mIHZhbHVlID09PSAnb2JqZWN0Jykge1xuICAgICAgICAgICAgICAgIHJlbW92ZVR5cGVOYW1lKHZhbHVlKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfSk7XG59XG5cbmV4cG9ydCBmdW5jdGlvbiByZW1vdmVQcm9wcyhvYmo6IHt9LCBwYXRoczogc3RyaW5nW10pOiB7fSB7XG4gICAgbGV0IHJlc3VsdCA9IG9iajtcbiAgICBwYXRocy5mb3JFYWNoKChwYXRoKSA9PiB7XG4gICAgICAgIGNvbnN0IGRvdFBvcyA9IHBhdGguaW5kZXhPZignLicpO1xuICAgICAgICBpZiAoZG90UG9zIDwgMCkge1xuICAgICAgICAgICAgaWYgKHBhdGggaW4gcmVzdWx0KSB7XG4gICAgICAgICAgICAgICAgcmVzdWx0ID0geyAuLi5yZXN1bHQgfTtcbiAgICAgICAgICAgICAgICBkZWxldGUgcmVzdWx0W3BhdGhdO1xuICAgICAgICAgICAgfVxuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgY29uc3QgbmFtZSA9IHBhdGguc3Vic3RyKDAsIGRvdFBvcyk7XG4gICAgICAgICAgICBjb25zdCBjaGlsZCA9IHJlc3VsdFtuYW1lXTtcbiAgICAgICAgICAgIGlmIChjaGlsZCkge1xuICAgICAgICAgICAgICAgIGNvbnN0IHJlZHVjZWRDaGlsZCA9IHJlbW92ZVByb3BzKGNoaWxkLCBbcGF0aC5zdWJzdHIoZG90UG9zICsgMSldKTtcbiAgICAgICAgICAgICAgICBpZiAocmVkdWNlZENoaWxkICE9PSBjaGlsZCkge1xuICAgICAgICAgICAgICAgICAgICByZXN1bHQgPSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAuLi5yZXN1bHQsXG4gICAgICAgICAgICAgICAgICAgICAgICBbbmFtZV06IHJlZHVjZWRDaGlsZCxcbiAgICAgICAgICAgICAgICAgICAgfTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICB9KTtcbiAgICByZXR1cm4gcmVzdWx0O1xufVxuXG5mdW5jdGlvbiBzdGFydE1lc3NhZ2VUcmFjZVNwYW4oXG4gICAgdHJhY2VyOiBUcmFjZXIsXG4gICAgbWVzc2FnZUlkOiBzdHJpbmcsXG4gICAgb3BlcmF0aW9uTmFtZTogc3RyaW5nLFxuICAgIHRhZ3M6IHsgW3N0cmluZ106IGFueSB9LFxuKTogP1NwYW4ge1xuICAgIGlmICghbWVzc2FnZUlkKSB7XG4gICAgICAgIHJldHVybiBudWxsO1xuICAgIH1cbiAgICBjb25zdCB0cmFjZUlkID0gbWVzc2FnZUlkLnN1YnN0cigwLCAxNik7XG4gICAgY29uc3Qgc3BhbklkID0gbWVzc2FnZUlkLnN1YnN0cigxNiwgMTYpO1xuICAgIGxldCByb290Q29udGV4dDogP1NwYW5Db250ZXh0ID0gbnVsbDtcbiAgICB0cnkge1xuICAgICAgICByb290Q29udGV4dCA9IHRyYWNlci5leHRyYWN0KEZPUk1BVF9URVhUX01BUCwge1xuICAgICAgICAgICAgJ3ViZXItdHJhY2UtaWQnOiBgJHt0cmFjZUlkfToke3NwYW5JZH06MDoxYCxcbiAgICAgICAgfSk7XG4gICAgfSBjYXRjaCB7XG4gICAgICAgIC8vIHRyYWNlciBjYW4ndCBjcmVhdGUgamFlZ2VyIGNvbXBhdGlibGUgc3BhbixcbiAgICAgICAgLy8gc28gd2UgYXJlIGZhbGxiYWNrIHRvIHJldHVybiBudWxsXG4gICAgfVxuICAgIGlmICghcm9vdENvbnRleHQpIHtcbiAgICAgICAgcmV0dXJuIG51bGw7XG4gICAgfVxuICAgIHJldHVybiB0cmFjZXIuc3RhcnRTcGFuKG9wZXJhdGlvbk5hbWUsIHtcbiAgICAgICAgY2hpbGRPZjogcm9vdENvbnRleHQsXG4gICAgICAgIHRhZ3MsXG4gICAgfSk7XG59XG5cbmZ1bmN0aW9uIHRyYWNlTWVzc2FnZShcbiAgICB0cmFjZXI6IFRyYWNlcixcbiAgICBtZXNzYWdlSWQ6IHN0cmluZyxcbiAgICBvcGVyYXRpb25OYW1lOiBzdHJpbmcsXG4gICAgdGFnczogeyBbc3RyaW5nXTogYW55IH0sXG4pIHtcbiAgICBjb25zdCBzcGFuID0gc3RhcnRNZXNzYWdlVHJhY2VTcGFuKHRyYWNlciwgbWVzc2FnZUlkLCBvcGVyYXRpb25OYW1lLCB0YWdzKTtcbiAgICBpZiAoc3Bhbikge1xuICAgICAgICBzcGFuLmZpbmlzaCgpO1xuICAgIH1cbn1cblxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgVE9OQ29udHJhY3RzTW9kdWxlIGV4dGVuZHMgVE9OTW9kdWxlIGltcGxlbWVudHMgVE9OQ29udHJhY3RzIHtcbiAgICBjb25maWc6IFRPTkNvbmZpZ01vZHVsZTtcblxuICAgIHF1ZXJpZXM6IFRPTlF1ZXJpZXNNb2R1bGU7XG5cbiAgICBhc3luYyBzZXR1cCgpOiBQcm9taXNlPCo+IHtcbiAgICAgICAgdGhpcy5jb25maWcgPSB0aGlzLmNvbnRleHQuZ2V0TW9kdWxlKFRPTkNvbmZpZ01vZHVsZSk7XG4gICAgICAgIHRoaXMucXVlcmllcyA9IHRoaXMuY29udGV4dC5nZXRNb2R1bGUoVE9OUXVlcmllc01vZHVsZSk7XG4gICAgfVxuXG4gICAgYXN5bmMgbG9hZChcbiAgICAgICAgcGFyYW1zOiBUT05Db250cmFjdExvYWRQYXJhbXMsXG4gICAgICAgIHBhcmVudFNwYW4/OiAoU3BhbiB8IFNwYW5Db250ZXh0KSxcbiAgICApOiBQcm9taXNlPFRPTkNvbnRyYWN0TG9hZFJlc3VsdD4ge1xuICAgICAgICBjb25zdCBhY2NvdW50czogUUFjY291bnRbXSA9IGF3YWl0IHRoaXMucXVlcmllcy5hY2NvdW50cy5xdWVyeSh7XG4gICAgICAgICAgICBmaWx0ZXI6IHtcbiAgICAgICAgICAgICAgICBpZDogeyBlcTogcGFyYW1zLmFkZHJlc3MgfSxcbiAgICAgICAgICAgIH0sXG4gICAgICAgICAgICByZXN1bHQ6ICdiYWxhbmNlJyxcbiAgICAgICAgICAgIHBhcmVudFNwYW4sXG4gICAgICAgIH0pO1xuICAgICAgICBpZiAoYWNjb3VudHMgJiYgYWNjb3VudHMubGVuZ3RoID4gMCkge1xuICAgICAgICAgICAgcmV0dXJuIHtcbiAgICAgICAgICAgICAgICBpZDogcGFyYW1zLmFkZHJlc3MsXG4gICAgICAgICAgICAgICAgYmFsYW5jZUdyYW1zOiBhY2NvdW50c1swXS5iYWxhbmNlLFxuICAgICAgICAgICAgfTtcbiAgICAgICAgfVxuICAgICAgICByZXR1cm4ge1xuICAgICAgICAgICAgaWQ6IG51bGwsXG4gICAgICAgICAgICBiYWxhbmNlR3JhbXM6IG51bGwsXG4gICAgICAgIH07XG4gICAgfVxuXG5cbiAgICAvLyBGYWNhZGUgZnVuY3Rpb25zXG5cbiAgICBhc3luYyBkZXBsb3koXG4gICAgICAgIHBhcmFtczogVE9OQ29udHJhY3REZXBsb3lQYXJhbXMsXG4gICAgICAgIHBhcmVudFNwYW4/OiAoU3BhbiB8IFNwYW5Db250ZXh0KSxcbiAgICApOiBQcm9taXNlPFRPTkNvbnRyYWN0RGVwbG95UmVzdWx0PiB7XG4gICAgICAgIHJldHVybiB0aGlzLmNvbnRleHQudHJhY2UoJ2NvbnRyYWN0cy5kZXBsb3knLCBhc3luYyAoc3BhbjogU3BhbikgPT4ge1xuICAgICAgICAgICAgc3Bhbi5zZXRUYWcoJ3BhcmFtcycsIHJlbW92ZVByb3BzKHBhcmFtcywgWydrZXlQYWlyLnNlY3JldCddKSk7XG4gICAgICAgICAgICByZXR1cm4gdGhpcy5pbnRlcm5hbERlcGxveUpzKHBhcmFtcywgc3Bhbik7XG4gICAgICAgIH0sIHBhcmVudFNwYW4pO1xuICAgIH1cblxuXG4gICAgYXN5bmMgcnVuKFxuICAgICAgICBwYXJhbXM6IFRPTkNvbnRyYWN0UnVuUGFyYW1zLFxuICAgICAgICBwYXJlbnRTcGFuPzogKFNwYW4gfCBTcGFuQ29udGV4dCksXG4gICAgKTogUHJvbWlzZTxUT05Db250cmFjdFJ1blJlc3VsdD4ge1xuICAgICAgICByZXR1cm4gdGhpcy5jb250ZXh0LnRyYWNlKCdjb250cmFjdHMucnVuJywgYXN5bmMgKHNwYW46IFNwYW4pID0+IHtcbiAgICAgICAgICAgIHNwYW4uc2V0VGFnKCdwYXJhbXMnLCByZW1vdmVQcm9wcyhwYXJhbXMsIFsna2V5UGFpci5zZWNyZXQnXSkpO1xuICAgICAgICAgICAgcmV0dXJuIHRoaXMuaW50ZXJuYWxSdW5KcyhwYXJhbXMsIHNwYW4pO1xuICAgICAgICB9LCBwYXJlbnRTcGFuKTtcbiAgICB9XG5cbiAgICBhc3luYyBydW5Mb2NhbChcbiAgICAgICAgcGFyYW1zOiBUT05Db250cmFjdFJ1bkxvY2FsUGFyYW1zLFxuICAgICAgICBwYXJlbnRTcGFuPzogKFNwYW4gfCBTcGFuQ29udGV4dCksXG4gICAgKTogUHJvbWlzZTxUT05Db250cmFjdFJ1bkxvY2FsUmVzdWx0PiB7XG4gICAgICAgIHJldHVybiB0aGlzLmNvbnRleHQudHJhY2UoJ2NvbnRyYWN0cy5ydW5Mb2NhbCcsIGFzeW5jIChzcGFuOiBTcGFuKSA9PiB7XG4gICAgICAgICAgICBzcGFuLnNldFRhZygncGFyYW1zJywgcmVtb3ZlUHJvcHMocGFyYW1zLCBbJ2tleVBhaXIuc2VjcmV0J10pKTtcbiAgICAgICAgICAgIHJldHVybiB0aGlzLmludGVybmFsUnVuTG9jYWxKcyhwYXJhbXMsIHNwYW4pO1xuICAgICAgICB9LCBwYXJlbnRTcGFuKTtcbiAgICB9XG5cbiAgICBhc3luYyBydW5NZXNzYWdlTG9jYWwoXG4gICAgICAgIHBhcmFtczogVE9OQ29udHJhY3RSdW5NZXNzYWdlTG9jYWxQYXJhbXMsXG4gICAgICAgIHBhcmVudFNwYW4/OiAoU3BhbiB8IFNwYW5Db250ZXh0KSxcbiAgICApOiBQcm9taXNlPFRPTkNvbnRyYWN0UnVuTG9jYWxSZXN1bHQ+IHtcbiAgICAgICAgcmV0dXJuIHRoaXMuY29udGV4dC50cmFjZSgncnVuTWVzc2FnZUxvY2FsJywgYXN5bmMgKHNwYW46IFNwYW4pID0+IHtcbiAgICAgICAgICAgIHNwYW4uc2V0VGFnKCdwYXJhbXMnLCByZW1vdmVQcm9wcyhwYXJhbXMsIFsna2V5UGFpci5zZWNyZXQnXSkpO1xuICAgICAgICAgICAgcmV0dXJuIHRoaXMuaW50ZXJuYWxSdW5NZXNzYWdlTG9jYWxKcyhwYXJhbXMsIHNwYW4pO1xuICAgICAgICB9LCBwYXJlbnRTcGFuKTtcbiAgICB9XG5cbiAgICBhc3luYyBydW5HZXQoXG4gICAgICAgIHBhcmFtczogVE9OQ29udHJhY3RSdW5HZXRQYXJhbXMsXG4gICAgKTogUHJvbWlzZTxUT05Db250cmFjdFJ1bkdldFJlc3VsdD4ge1xuICAgICAgICBsZXQgY29yZVBhcmFtczogVE9OQ29udHJhY3RSdW5HZXRQYXJhbXMgPSBwYXJhbXM7XG4gICAgICAgIGNvbnN0IGhhc0NvZGUgPSBwYXJhbXMuYm9jQmFzZTY0IHx8IChwYXJhbXMuY29kZUJhc2U2NCAmJiBwYXJhbXMuZGF0YUJhc2U2NCk7XG4gICAgICAgIGlmICghaGFzQ29kZSkge1xuICAgICAgICAgICAgY29uc3QgYWRkcmVzcyA9IHBhcmFtcy5hZGRyZXNzO1xuICAgICAgICAgICAgaWYgKCFhZGRyZXNzKSB7XG4gICAgICAgICAgICAgICAgdGhyb3cgVE9OQ2xpZW50RXJyb3IuYWRkcmVzc1JlcXVpcmVkRm9yUnVuTG9jYWwoYXdhaXQgdGhpcy5nZXRDbGllbnRJbmZvKCkpO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgY29uc3QgYWNjb3VudDogYW55ID0gYXdhaXQgdGhpcy5nZXRBY2NvdW50KGFkZHJlc3MsIGZhbHNlLCB7XG4gICAgICAgICAgICAgICAgdGltZW91dDogdGhpcy5jb25maWcud2FpdEZvclRpbWVvdXQoKSxcbiAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgaWYgKCFhY2NvdW50LmNvZGVfaGFzaCkge1xuICAgICAgICAgICAgICAgIHRocm93IFRPTkNsaWVudEVycm9yLmFjY291bnRDb2RlTWlzc2luZyhcbiAgICAgICAgICAgICAgICAgICAgYXdhaXQgdGhpcy5nZXRDbGllbnRJbmZvKCksXG4gICAgICAgICAgICAgICAgICAgIGFkZHJlc3MsXG4gICAgICAgICAgICAgICAgICAgIGFjY291bnQuYmFsYW5jZSxcbiAgICAgICAgICAgICAgICApO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgY29uc3QgcGFyYW1zRnJvbUFjY291bnQ6ICRTaGFwZTxUT05Db250cmFjdFJ1bkdldFBhcmFtcz4gPSB7fTtcbiAgICAgICAgICAgIGlmIChhY2NvdW50LmJvYykge1xuICAgICAgICAgICAgICAgIHBhcmFtc0Zyb21BY2NvdW50LmJvY0Jhc2U2NCA9IGFjY291bnQuYm9jO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgaWYgKGFjY291bnQubGFzdF9wYWlkKSB7XG4gICAgICAgICAgICAgICAgcGFyYW1zRnJvbUFjY291bnQubGFzdF9wYWlkID0gYWNjb3VudC5sYXN0X3BhaWQ7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBpZiAoYWNjb3VudC5iYWxhbmNlKSB7XG4gICAgICAgICAgICAgICAgcGFyYW1zRnJvbUFjY291bnQuYmFsYW5jZSA9IGFjY291bnQuYmFsYW5jZTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGNvcmVQYXJhbXMgPSB7XG4gICAgICAgICAgICAgICAgLi4ucGFyYW1zRnJvbUFjY291bnQsXG4gICAgICAgICAgICAgICAgLi4ucGFyYW1zLFxuICAgICAgICAgICAgfTtcbiAgICAgICAgfVxuICAgICAgICByZXR1cm4gdGhpcy5yZXF1ZXN0Q29yZSgndHZtLmdldCcsIGNvcmVQYXJhbXMpO1xuICAgIH1cblxuICAgIGFycmF5RnJvbUNPTlMoY29uczogYW55W10pOiBhbnlbXSB7XG4gICAgICAgIGNvbnN0IHJlc3VsdCA9IFtdO1xuICAgICAgICBsZXQgaXRlbSA9IGNvbnM7XG4gICAgICAgIHdoaWxlIChpdGVtKSB7XG4gICAgICAgICAgICBpZiAoIWl0ZW0ubGVuZ3RoID09PSAyKSB7XG4gICAgICAgICAgICAgICAgdGhyb3cgVE9OQ2xpZW50RXJyb3IuaW52YWxpZENvbnMoe1xuICAgICAgICAgICAgICAgICAgICBjb3JlVmVyc2lvbjogJycsXG4gICAgICAgICAgICAgICAgICAgIGNvbmZpZ1NlcnZlcjogJycsXG4gICAgICAgICAgICAgICAgICAgIHF1ZXJ5VXJsOiAnJyxcbiAgICAgICAgICAgICAgICB9KTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIHJlc3VsdC5wdXNoKGl0ZW1bMF0pO1xuICAgICAgICAgICAgaXRlbSA9IGl0ZW1bMV07XG4gICAgICAgIH1cbiAgICAgICAgcmV0dXJuIHJlc3VsdDtcbiAgICB9XG5cblxuICAgIC8vIE1lc3NhZ2UgY3JlYXRpb25cblxuICAgIGFzeW5jIGNyZWF0ZURlcGxveU1lc3NhZ2UoXG4gICAgICAgIHBhcmFtczogVE9OQ29udHJhY3REZXBsb3lQYXJhbXMsXG4gICAgICAgIHJldHJ5SW5kZXg/OiBudW1iZXIsXG4gICAgKTogUHJvbWlzZTxUT05Db250cmFjdERlcGxveU1lc3NhZ2U+IHtcbiAgICAgICAgdGhpcy5jb25maWcubG9nKCdjcmVhdGVEZXBsb3lNZXNzYWdlJywgcGFyYW1zKTtcbiAgICAgICAgY29uc3QgbWVzc2FnZTogVE9OQ29udHJhY3RNZXNzYWdlID0gYXdhaXQgdGhpcy5yZXF1ZXN0Q29yZSgnY29udHJhY3RzLmRlcGxveS5tZXNzYWdlJywge1xuICAgICAgICAgICAgYWJpOiBwYXJhbXMucGFja2FnZS5hYmksXG4gICAgICAgICAgICBjb25zdHJ1Y3RvckhlYWRlcjogcGFyYW1zLmNvbnN0cnVjdG9ySGVhZGVyLFxuICAgICAgICAgICAgY29uc3RydWN0b3JQYXJhbXM6IHBhcmFtcy5jb25zdHJ1Y3RvclBhcmFtcyxcbiAgICAgICAgICAgIGluaXRQYXJhbXM6IHBhcmFtcy5pbml0UGFyYW1zLFxuICAgICAgICAgICAgaW1hZ2VCYXNlNjQ6IHBhcmFtcy5wYWNrYWdlLmltYWdlQmFzZTY0LFxuICAgICAgICAgICAga2V5UGFpcjogcGFyYW1zLmtleVBhaXIsXG4gICAgICAgICAgICB3b3JrY2hhaW5JZDogcGFyYW1zLndvcmtjaGFpbklkLFxuICAgICAgICB9KTtcbiAgICAgICAgcmV0dXJuIHtcbiAgICAgICAgICAgIG1lc3NhZ2UsXG4gICAgICAgICAgICBhZGRyZXNzOiBtZXNzYWdlLmFkZHJlc3MsXG4gICAgICAgIH07XG4gICAgfVxuXG5cbiAgICBhc3luYyBjcmVhdGVSdW5NZXNzYWdlKFxuICAgICAgICBwYXJhbXM6IFRPTkNvbnRyYWN0UnVuUGFyYW1zLFxuICAgICAgICByZXRyeUluZGV4PzogbnVtYmVyLFxuICAgICk6IFByb21pc2U8VE9OQ29udHJhY3RSdW5NZXNzYWdlPiB7XG4gICAgICAgIHRoaXMuY29uZmlnLmxvZygnY3JlYXRlUnVuTWVzc2FnZScsIHBhcmFtcyk7XG4gICAgICAgIGNvbnN0IG1lc3NhZ2UgPSBhd2FpdCB0aGlzLnJlcXVlc3RDb3JlKCdjb250cmFjdHMucnVuLm1lc3NhZ2UnLCB7XG4gICAgICAgICAgICBhZGRyZXNzOiBwYXJhbXMuYWRkcmVzcyxcbiAgICAgICAgICAgIGFiaTogcGFyYW1zLmFiaSxcbiAgICAgICAgICAgIGZ1bmN0aW9uTmFtZTogcGFyYW1zLmZ1bmN0aW9uTmFtZSxcbiAgICAgICAgICAgIGhlYWRlcjogcGFyYW1zLmhlYWRlcixcbiAgICAgICAgICAgIHRyeUluZGV4OiByZXRyeUluZGV4LFxuICAgICAgICAgICAgaW5wdXQ6IHBhcmFtcy5pbnB1dCxcbiAgICAgICAgICAgIGtleVBhaXI6IHBhcmFtcy5rZXlQYWlyLFxuICAgICAgICB9KTtcbiAgICAgICAgcmV0dXJuIHtcbiAgICAgICAgICAgIGFkZHJlc3M6IHBhcmFtcy5hZGRyZXNzLFxuICAgICAgICAgICAgYWJpOiBwYXJhbXMuYWJpLFxuICAgICAgICAgICAgZnVuY3Rpb25OYW1lOiBwYXJhbXMuZnVuY3Rpb25OYW1lLFxuICAgICAgICAgICAgbWVzc2FnZSxcbiAgICAgICAgfTtcbiAgICB9XG5cbiAgICBhc3luYyBjcmVhdGVVbnNpZ25lZERlcGxveU1lc3NhZ2UoXG4gICAgICAgIHBhcmFtczogVE9OQ29udHJhY3REZXBsb3lQYXJhbXMsXG4gICAgICAgIHJldHJ5SW5kZXg/OiBudW1iZXIsXG4gICAgKTogUHJvbWlzZTxUT05Db250cmFjdFVuc2lnbmVkRGVwbG95TWVzc2FnZT4ge1xuICAgICAgICBjb25zdCByZXN1bHQ6IHtcbiAgICAgICAgICAgIGVuY29kZWQ6IFRPTkNvbnRyYWN0VW5zaWduZWRNZXNzYWdlLFxuICAgICAgICAgICAgYWRkcmVzc0hleDogc3RyaW5nLFxuICAgICAgICB9ID0gYXdhaXQgdGhpcy5yZXF1ZXN0Q29yZSgnY29udHJhY3RzLmRlcGxveS5lbmNvZGVfdW5zaWduZWRfbWVzc2FnZScsIHtcbiAgICAgICAgICAgIGFiaTogcGFyYW1zLnBhY2thZ2UuYWJpLFxuICAgICAgICAgICAgY29uc3RydWN0b3JIZWFkZXI6IHBhcmFtcy5jb25zdHJ1Y3RvckhlYWRlcixcbiAgICAgICAgICAgIHRyeUluZGV4OiByZXRyeUluZGV4LFxuICAgICAgICAgICAgY29uc3RydWN0b3JQYXJhbXM6IHBhcmFtcy5jb25zdHJ1Y3RvclBhcmFtcyxcbiAgICAgICAgICAgIGluaXRQYXJhbXM6IHBhcmFtcy5pbml0UGFyYW1zLFxuICAgICAgICAgICAgaW1hZ2VCYXNlNjQ6IHBhcmFtcy5wYWNrYWdlLmltYWdlQmFzZTY0LFxuICAgICAgICAgICAgcHVibGljS2V5SGV4OiBwYXJhbXMua2V5UGFpci5wdWJsaWMsXG4gICAgICAgICAgICB3b3JrY2hhaW5JZDogcGFyYW1zLndvcmtjaGFpbklkLFxuICAgICAgICB9KTtcbiAgICAgICAgcmV0dXJuIHtcbiAgICAgICAgICAgIGFkZHJlc3M6IHJlc3VsdC5hZGRyZXNzSGV4LFxuICAgICAgICAgICAgc2lnblBhcmFtczoge1xuICAgICAgICAgICAgICAgIC4uLnJlc3VsdC5lbmNvZGVkLFxuICAgICAgICAgICAgICAgIGFiaTogcGFyYW1zLnBhY2thZ2UuYWJpLFxuICAgICAgICAgICAgfSxcbiAgICAgICAgfTtcbiAgICB9XG5cblxuICAgIGFzeW5jIGNyZWF0ZVVuc2lnbmVkUnVuTWVzc2FnZShcbiAgICAgICAgcGFyYW1zOiBUT05Db250cmFjdFJ1blBhcmFtcyxcbiAgICAgICAgcmV0cnlJbmRleD86IG51bWJlcixcbiAgICApOiBQcm9taXNlPFRPTkNvbnRyYWN0VW5zaWduZWRSdW5NZXNzYWdlPiB7XG4gICAgICAgIGNvbnN0IHNpZ25QYXJhbXMgPSBhd2FpdCB0aGlzLnJlcXVlc3RDb3JlKCdjb250cmFjdHMucnVuLmVuY29kZV91bnNpZ25lZF9tZXNzYWdlJywge1xuICAgICAgICAgICAgYWRkcmVzczogcGFyYW1zLmFkZHJlc3MsXG4gICAgICAgICAgICBhYmk6IHBhcmFtcy5hYmksXG4gICAgICAgICAgICBmdW5jdGlvbk5hbWU6IHBhcmFtcy5mdW5jdGlvbk5hbWUsXG4gICAgICAgICAgICBoZWFkZXI6IHBhcmFtcy5oZWFkZXIsXG4gICAgICAgICAgICB0cnlJbmRleDogcmV0cnlJbmRleCxcbiAgICAgICAgICAgIGlucHV0OiBwYXJhbXMuaW5wdXQsXG4gICAgICAgIH0pO1xuICAgICAgICByZXR1cm4ge1xuICAgICAgICAgICAgYWRkcmVzczogcGFyYW1zLmFkZHJlc3MsXG4gICAgICAgICAgICBmdW5jdGlvbk5hbWU6IHBhcmFtcy5mdW5jdGlvbk5hbWUsXG4gICAgICAgICAgICBzaWduUGFyYW1zOiB7XG4gICAgICAgICAgICAgICAgLi4uc2lnblBhcmFtcyxcbiAgICAgICAgICAgICAgICBhYmk6IHBhcmFtcy5hYmksXG4gICAgICAgICAgICB9LFxuICAgICAgICB9O1xuICAgIH1cblxuXG4gICAgYXN5bmMgY3JlYXRlU2lnbmVkTWVzc2FnZShcbiAgICAgICAgcGFyYW1zOiBUT05Db250cmFjdENyZWF0ZVNpZ25lZE1lc3NhZ2VQYXJhbXMsXG4gICAgKTogUHJvbWlzZTxUT05Db250cmFjdE1lc3NhZ2U+IHtcbiAgICAgICAgcmV0dXJuIHRoaXMucmVxdWVzdENvcmUoJ2NvbnRyYWN0cy5lbmNvZGVfbWVzc2FnZV93aXRoX3NpZ24nLCBwYXJhbXMpO1xuICAgIH1cblxuXG4gICAgYXN5bmMgY3JlYXRlU2lnbmVkRGVwbG95TWVzc2FnZShcbiAgICAgICAgcGFyYW1zOiBUT05Db250cmFjdENyZWF0ZVNpZ25lZERlcGxveU1lc3NhZ2VQYXJhbXMsXG4gICAgKTogUHJvbWlzZTxUT05Db250cmFjdERlcGxveU1lc3NhZ2U+IHtcbiAgICAgICAgY29uc3QgbWVzc2FnZSA9IGF3YWl0IHRoaXMuY3JlYXRlU2lnbmVkTWVzc2FnZSh7XG4gICAgICAgICAgICBhYmk6IHBhcmFtcy51bnNpZ25lZE1lc3NhZ2Uuc2lnblBhcmFtcy5hYmksXG4gICAgICAgICAgICB1bnNpZ25lZEJ5dGVzQmFzZTY0OiBwYXJhbXMudW5zaWduZWRNZXNzYWdlLnNpZ25QYXJhbXMudW5zaWduZWRCeXRlc0Jhc2U2NCxcbiAgICAgICAgICAgIHNpZ25CeXRlc0Jhc2U2NDogcGFyYW1zLnNpZ25CeXRlc0Jhc2U2NCxcbiAgICAgICAgICAgIHB1YmxpY0tleUhleDogcGFyYW1zLnB1YmxpY0tleUhleCxcbiAgICAgICAgfSk7XG4gICAgICAgIG1lc3NhZ2UuZXhwaXJlID0gcGFyYW1zLnVuc2lnbmVkTWVzc2FnZS5zaWduUGFyYW1zLmV4cGlyZTtcbiAgICAgICAgcmV0dXJuIHtcbiAgICAgICAgICAgIGFkZHJlc3M6IHBhcmFtcy51bnNpZ25lZE1lc3NhZ2UuYWRkcmVzcyxcbiAgICAgICAgICAgIG1lc3NhZ2UsXG4gICAgICAgIH07XG4gICAgfVxuXG5cbiAgICBhc3luYyBjcmVhdGVTaWduZWRSdW5NZXNzYWdlKFxuICAgICAgICBwYXJhbXM6IFRPTkNvbnRyYWN0Q3JlYXRlU2lnbmVkUnVuTWVzc2FnZVBhcmFtcyxcbiAgICApOiBQcm9taXNlPFRPTkNvbnRyYWN0UnVuTWVzc2FnZT4ge1xuICAgICAgICBjb25zdCBtZXNzYWdlID0gYXdhaXQgdGhpcy5jcmVhdGVTaWduZWRNZXNzYWdlKHtcbiAgICAgICAgICAgIGFiaTogcGFyYW1zLnVuc2lnbmVkTWVzc2FnZS5zaWduUGFyYW1zLmFiaSxcbiAgICAgICAgICAgIHVuc2lnbmVkQnl0ZXNCYXNlNjQ6IHBhcmFtcy51bnNpZ25lZE1lc3NhZ2Uuc2lnblBhcmFtcy51bnNpZ25lZEJ5dGVzQmFzZTY0LFxuICAgICAgICAgICAgc2lnbkJ5dGVzQmFzZTY0OiBwYXJhbXMuc2lnbkJ5dGVzQmFzZTY0LFxuICAgICAgICAgICAgcHVibGljS2V5SGV4OiBwYXJhbXMucHVibGljS2V5SGV4LFxuICAgICAgICB9KTtcbiAgICAgICAgbWVzc2FnZS5leHBpcmUgPSBwYXJhbXMudW5zaWduZWRNZXNzYWdlLnNpZ25QYXJhbXMuZXhwaXJlO1xuICAgICAgICByZXR1cm4ge1xuICAgICAgICAgICAgYWRkcmVzczogcGFyYW1zLnVuc2lnbmVkTWVzc2FnZS5hZGRyZXNzLFxuICAgICAgICAgICAgYWJpOiBwYXJhbXMudW5zaWduZWRNZXNzYWdlLnNpZ25QYXJhbXMuYWJpLFxuICAgICAgICAgICAgZnVuY3Rpb25OYW1lOiBwYXJhbXMudW5zaWduZWRNZXNzYWdlLmZ1bmN0aW9uTmFtZSxcbiAgICAgICAgICAgIG1lc3NhZ2UsXG4gICAgICAgIH07XG4gICAgfVxuXG4gICAgYXN5bmMgZ2V0Q29kZUZyb21JbWFnZShcbiAgICAgICAgcGFyYW1zOiBUT05Db250cmFjdEdldENvZGVGcm9tSW1hZ2VQYXJhbXMsXG4gICAgKTogUHJvbWlzZTxUT05Db250cmFjdEdldENvZGVGcm9tSW1hZ2VSZXN1bHQ+IHtcbiAgICAgICAgcmV0dXJuIHRoaXMucmVxdWVzdENvcmUoJ2NvbnRyYWN0cy5pbWFnZS5jb2RlJywgcGFyYW1zKTtcbiAgICB9XG5cbiAgICBhc3luYyBnZXREZXBsb3lEYXRhKFxuICAgICAgICBwYXJhbXM6IFRPTkNvbnRyYWN0R2V0RGVwbG95RGF0YVBhcmFtcyxcbiAgICApOiBQcm9taXNlPFRPTkNvbnRyYWN0R2V0RGVwbG95RGF0YVJlc3VsdD4ge1xuICAgICAgICByZXR1cm4gdGhpcy5yZXF1ZXN0Q29yZSgnY29udHJhY3RzLmRlcGxveS5kYXRhJywgcGFyYW1zKTtcbiAgICB9XG5cbiAgICBhc3luYyBjcmVhdGVSdW5Cb2R5KFxuICAgICAgICBwYXJhbXM6IFRPTkNvbnRyYWN0Q3JlYXRlUnVuQm9keVBhcmFtcyxcbiAgICApOiBQcm9taXNlPFRPTkNvbnRyYWN0Q3JlYXRlUnVuQm9keVJlc3VsdD4ge1xuICAgICAgICByZXR1cm4gdGhpcy5yZXF1ZXN0Q29yZSgnY29udHJhY3RzLnJ1bi5ib2R5JywgcGFyYW1zKTtcbiAgICB9XG5cbiAgICBhc3luYyBnZXRGdW5jdGlvbklkKFxuICAgICAgICBwYXJhbXM6IFRPTkNvbnRyYWN0R2V0RnVuY3Rpb25JZFBhcmFtcyxcbiAgICApOiBQcm9taXNlPFRPTkNvbnRyYWN0R2V0RnVuY3Rpb25JZFJlc3VsdD4ge1xuICAgICAgICByZXR1cm4gdGhpcy5yZXF1ZXN0Q29yZSgnY29udHJhY3RzLmZ1bmN0aW9uLmlkJywgcGFyYW1zKTtcbiAgICB9XG5cbiAgICBhc3luYyBnZXRCb2NIYXNoKFxuICAgICAgICBwYXJhbXM6IFRPTkNvbnRyYWN0Qm9jLFxuICAgICk6IFByb21pc2U8VE9OQ29udHJhY3RHZXRCb2NIYXNoUmVzdWx0PiB7XG4gICAgICAgIHJldHVybiB0aGlzLnJlcXVlc3RDb3JlKCdjb250cmFjdHMuYm9jLmhhc2gnLCBwYXJhbXMpO1xuICAgIH1cblxuICAgIGFzeW5jIHBhcnNlTWVzc2FnZShcbiAgICAgICAgcGFyYW1zOiBUT05Db250cmFjdEJvYyxcbiAgICApOiBQcm9taXNlPFFNZXNzYWdlPiB7XG4gICAgICAgIHJldHVybiB0aGlzLnJlcXVlc3RDb3JlKCdjb250cmFjdHMucGFyc2UubWVzc2FnZScsIHBhcmFtcyk7XG4gICAgfVxuXG4gICAgLy8gTWVzc2FnZSBwYXJzaW5nXG5cbiAgICBhc3luYyBkZWNvZGVSdW5PdXRwdXQoXG4gICAgICAgIHBhcmFtczogVE9OQ29udHJhY3REZWNvZGVSdW5PdXRwdXRQYXJhbXMsXG4gICAgKTogUHJvbWlzZTxUT05Db250cmFjdFJ1blJlc3VsdD4ge1xuICAgICAgICByZXR1cm4gdGhpcy5yZXF1ZXN0Q29yZSgnY29udHJhY3RzLnJ1bi5vdXRwdXQnLCBwYXJhbXMpO1xuICAgIH1cblxuXG4gICAgYXN5bmMgZGVjb2RlSW5wdXRNZXNzYWdlQm9keShcbiAgICAgICAgcGFyYW1zOiBUT05Db250cmFjdERlY29kZU1lc3NhZ2VCb2R5UGFyYW1zLFxuICAgICk6IFByb21pc2U8VE9OQ29udHJhY3REZWNvZGVNZXNzYWdlQm9keVJlc3VsdD4ge1xuICAgICAgICByZXR1cm4gdGhpcy5yZXF1ZXN0Q29yZSgnY29udHJhY3RzLnJ1bi51bmtub3duLmlucHV0JywgcGFyYW1zKTtcbiAgICB9XG5cblxuICAgIGFzeW5jIGRlY29kZU91dHB1dE1lc3NhZ2VCb2R5KFxuICAgICAgICBwYXJhbXM6IFRPTkNvbnRyYWN0RGVjb2RlTWVzc2FnZUJvZHlQYXJhbXMsXG4gICAgKTogUHJvbWlzZTxUT05Db250cmFjdERlY29kZU1lc3NhZ2VCb2R5UmVzdWx0PiB7XG4gICAgICAgIHJldHVybiB0aGlzLnJlcXVlc3RDb3JlKCdjb250cmFjdHMucnVuLnVua25vd24ub3V0cHV0JywgcGFyYW1zKTtcbiAgICB9XG5cbiAgICAvLyBNZXNzYWdlIHByb2Nlc3NpbmdcblxuICAgIGFzeW5jIGVuc3VyZU1lc3NhZ2VJZChtZXNzYWdlOiBUT05Db250cmFjdE1lc3NhZ2UpOiBQcm9taXNlPHN0cmluZz4ge1xuICAgICAgICByZXR1cm4gbWVzc2FnZS5tZXNzYWdlSWQgfHwgYXdhaXQgKGFzeW5jICgpID0+IHtcbiAgICAgICAgICAgIGNvbnN0IGlkID0gKGF3YWl0IHRoaXMuZ2V0Qm9jSGFzaCh7XG4gICAgICAgICAgICAgICAgYm9jQmFzZTY0OiBtZXNzYWdlLm1lc3NhZ2VCb2R5QmFzZTY0LFxuICAgICAgICAgICAgfSkpLmhhc2g7XG4gICAgICAgICAgICBtZXNzYWdlLm1lc3NhZ2VJZCA9IGlkO1xuICAgICAgICAgICAgcmV0dXJuIGlkO1xuICAgICAgICB9KSgpO1xuICAgIH1cblxuICAgIGFzeW5jIHNlbmRNZXNzYWdlKFxuICAgICAgICBwYXJhbXM6IFRPTkNvbnRyYWN0TWVzc2FnZSxcbiAgICAgICAgcGFyZW50U3Bhbj86IChTcGFuIHwgU3BhbkNvbnRleHQpLFxuICAgICk6IFByb21pc2U8VE9OTWVzc2FnZVByb2Nlc3NpbmdTdGF0ZT4ge1xuICAgICAgICBjb25zdCBleHBpcmUgPSBwYXJhbXMuZXhwaXJlO1xuICAgICAgICBpZiAoZXhwaXJlICYmIChEYXRlLm5vdygpID4gZXhwaXJlICogMTAwMCkpIHtcbiAgICAgICAgICAgIHRocm93IFRPTkNsaWVudEVycm9yLnNlbmROb2RlUmVxdWVzdEZhaWxlZChcbiAgICAgICAgICAgICAgICBhd2FpdCB0aGlzLmdldENsaWVudEluZm8oKSxcbiAgICAgICAgICAgICAgICAnTWVzc2FnZSBhbHJlYWR5IGV4cGlyZWQnLFxuICAgICAgICAgICAgKTtcbiAgICAgICAgfVxuICAgICAgICBjb25zdCBzZXJ2ZXJUaW1lRGVsdGEgPSBNYXRoLmFicyhhd2FpdCB0aGlzLnF1ZXJpZXMuc2VydmVyVGltZURlbHRhKHBhcmVudFNwYW4pKTtcbiAgICAgICAgaWYgKHNlcnZlclRpbWVEZWx0YSA+IHRoaXMuY29uZmlnLm91dE9mU3luY1RocmVzaG9sZCgpKSB7XG4gICAgICAgICAgICB0aGlzLnF1ZXJpZXMuZHJvcFNlcnZlclRpbWVEZWx0YSgpO1xuICAgICAgICAgICAgdGhyb3cgVE9OQ2xpZW50RXJyb3IuY2xvY2tPdXRPZlN5bmMoYXdhaXQgdGhpcy5nZXRDbGllbnRJbmZvKCkpO1xuICAgICAgICB9XG4gICAgICAgIGNvbnN0IGxhc3RCbG9ja0lkID0gYXdhaXQgdGhpcy5maW5kTGFzdFNoYXJkQmxvY2socGFyYW1zLmFkZHJlc3MpO1xuICAgICAgICBjb25zdCBpZCA9IGF3YWl0IHRoaXMuZW5zdXJlTWVzc2FnZUlkKHBhcmFtcyk7XG4gICAgICAgIGNvbnN0IGlkQmFzZTY0ID0gQnVmZmVyLmZyb20oaWQsICdoZXgnKS50b1N0cmluZygnYmFzZTY0Jyk7XG4gICAgICAgIGNvbnN0IG1lc3NhZ2VTcGFuID0gdGhpcy5jb250ZXh0LnN0YXJ0Um9vdFNwYW4oXG4gICAgICAgICAgICBpZC5zdWJzdHIoMCwgMTYpLFxuICAgICAgICAgICAgaWQuc3Vic3RyKDE2LCAxNiksXG4gICAgICAgICAgICAnbWVzc2FnZVByb2Nlc3NpbmcnLFxuICAgICAgICApO1xuICAgICAgICBtZXNzYWdlU3Bhbi5hZGRUYWdzKHtcbiAgICAgICAgICAgIG1lc3NhZ2VJZDogaWQsXG4gICAgICAgICAgICBtZXNzYWdlU2l6ZTogTWF0aC5jZWlsKHBhcmFtcy5tZXNzYWdlQm9keUJhc2U2NC5sZW5ndGggKiAzIC8gNCksXG4gICAgICAgICAgICBhZGRyZXNzOiBwYXJhbXMuYWRkcmVzcyxcbiAgICAgICAgICAgIGV4cGlyZTogcGFyYW1zLmV4cGlyZSxcbiAgICAgICAgfSk7XG4gICAgICAgIGF3YWl0IHRoaXMucXVlcmllcy5wb3N0UmVxdWVzdHMoW1xuICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgIGlkOiBpZEJhc2U2NCxcbiAgICAgICAgICAgICAgICBib2R5OiBwYXJhbXMubWVzc2FnZUJvZHlCYXNlNjQsXG4gICAgICAgICAgICB9LFxuICAgICAgICBdLCBwYXJlbnRTcGFuKTtcbiAgICAgICAgbWVzc2FnZVNwYW4uZmluaXNoKCk7XG4gICAgICAgIHRoaXMuY29uZmlnLmxvZygnc2VuZE1lc3NhZ2UuIFJlcXVlc3QgcG9zdGVkJywgaWQpO1xuICAgICAgICByZXR1cm4ge1xuICAgICAgICAgICAgbGFzdEJsb2NrSWQsXG4gICAgICAgICAgICBzZW5kaW5nVGltZTogTWF0aC5yb3VuZChEYXRlLm5vdygpIC8gMTAwMCksXG4gICAgICAgIH07XG4gICAgfVxuXG4gICAgYXN5bmMgcHJvY2Vzc01lc3NhZ2UoXG4gICAgICAgIG1lc3NhZ2U6IFRPTkNvbnRyYWN0TWVzc2FnZSxcbiAgICAgICAgcmVzdWx0RmllbGRzOiBzdHJpbmcsXG4gICAgICAgIHBhcmVudFNwYW4/OiAoU3BhbiB8IFNwYW5Db250ZXh0KSxcbiAgICAgICAgcmV0cnlJbmRleD86IG51bWJlcixcbiAgICAgICAgYWRkcmVzcz86IHN0cmluZyxcbiAgICAgICAgYWJpPzogVE9OQ29udHJhY3RBQkksXG4gICAgICAgIGZ1bmN0aW9uTmFtZT86IHN0cmluZyxcbiAgICApOiBQcm9taXNlPFFUcmFuc2FjdGlvbj4ge1xuICAgICAgICBjb25zdCBwcm9jZXNzaW5nID0gYXdhaXQgdGhpcy5zZW5kTWVzc2FnZShtZXNzYWdlLCBwYXJlbnRTcGFuKTtcbiAgICAgICAgY29uc3QgeyB0cmFuc2FjdGlvbiB9ID0gYXdhaXQgdGhpcy53YWl0Rm9yVHJhbnNhY3Rpb24oe1xuICAgICAgICAgICAgbWVzc2FnZSxcbiAgICAgICAgICAgIG1lc3NhZ2VQcm9jZXNzaW5nU3RhdGU6IHByb2Nlc3NpbmcsXG4gICAgICAgICAgICBwYXJlbnRTcGFuLFxuICAgICAgICAgICAgYWJpLFxuICAgICAgICAgICAgZnVuY3Rpb25OYW1lLFxuICAgICAgICB9KTtcbiAgICAgICAgcmV0dXJuIHRyYW5zYWN0aW9uO1xuICAgIH1cblxuXG4gICAgYXN5bmMgZmluZExhc3RCbG9jayhjaGFpbjogbnVtYmVyLCByZXN1bHQ6IHN0cmluZywgYWRkaXRpb25hbEZpbHRlcj86IGFueSk6IFByb21pc2U8P2FueT4ge1xuICAgICAgICBjb25zdCBibG9ja3MgPSBhd2FpdCB0aGlzLnF1ZXJpZXMuYmxvY2tzLnF1ZXJ5KHtcbiAgICAgICAgICAgIGZpbHRlcjogeyB3b3JrY2hhaW5faWQ6IHsgZXE6IGNoYWluIH0sIC4uLihhZGRpdGlvbmFsRmlsdGVyIHx8IHt9KSB9LFxuICAgICAgICAgICAgcmVzdWx0LFxuICAgICAgICAgICAgb3JkZXJCeTogW1xuICAgICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICAgICAgcGF0aDogJ3NlcV9ubycsXG4gICAgICAgICAgICAgICAgICAgIGRpcmVjdGlvbjogJ0RFU0MnLFxuICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICBdLFxuICAgICAgICAgICAgbGltaXQ6IDEsXG4gICAgICAgIH0pO1xuICAgICAgICByZXR1cm4gYmxvY2tzLmxlbmd0aCA+IDAgPyBibG9ja3NbMF0gOiBudWxsO1xuICAgIH1cblxuICAgIGFzeW5jIGZpbmRNYXRjaGluZ1NoYXJkKHNoYXJkczogUVNoYXJkSGFzaFtdLCBhZGRyZXNzOiBzdHJpbmcpOiBQcm9taXNlPD9RU2hhcmRIYXNoPiB7XG4gICAgICAgIHJldHVybiB0aGlzLnJlcXVlc3RDb3JlKCdjb250cmFjdHMuZmluZC5zaGFyZCcsIHtcbiAgICAgICAgICAgIHNoYXJkcyxcbiAgICAgICAgICAgIGFkZHJlc3MsXG4gICAgICAgIH0pO1xuICAgIH1cblxuICAgIGFzeW5jIGZpbmRMYXN0U2hhcmRCbG9jayhhZGRyZXNzOiBzdHJpbmcpOiBQcm9taXNlPHN0cmluZz4ge1xuICAgICAgICBjb25zdCBhZGRyZXNzUGFydHMgPSBhZGRyZXNzLnNwbGl0KCc6Jyk7XG4gICAgICAgIGNvbnN0IHdvcmtjaGFpbiA9IGFkZHJlc3NQYXJ0cy5sZW5ndGggPiAxID8gTnVtYmVyLnBhcnNlSW50KGFkZHJlc3NQYXJ0c1swXSwgMTApIDogMDtcblxuXG4gICAgICAgIC8vIGlmIGFjY291bnQgcmVzaWRlcyBpbiBtYXN0ZXIgY2hhaW4gdGhlbiBzdGFydGluZyBwb2ludCBpcyBsYXN0IG1hc3RlciBjaGFpbiBibG9ja1xuICAgICAgICAvLyBnZW5lcmF0ZWQgYmVmb3JlIG1lc3NhZ2Ugd2FzIHNlbnRcbiAgICAgICAgY29uc3QgbWFzdGVyY2hhaW5MYXN0QmxvY2sgPSBhd2FpdCB0aGlzLmZpbmRMYXN0QmxvY2soXG4gICAgICAgICAgICBNQVNURVJDSEFJTl9JRCxcbiAgICAgICAgICAgICdpZCBtYXN0ZXIgeyBzaGFyZF9oYXNoZXMgeyB3b3JrY2hhaW5faWQgc2hhcmQgZGVzY3IgeyByb290X2hhc2ggfSB9IH0nLFxuICAgICAgICApO1xuXG4gICAgICAgIC8vIGlmIGFjY291bnQgcmVzaWRlcyBpbiBtYXN0ZXJjaGFpbiB0aGVuIHN0YXJ0aW5nIHBvaW50IGlzIGxhc3QgbWFzdGVyY2hhaW4gYmxvY2tcbiAgICAgICAgaWYgKHdvcmtjaGFpbiA9PT0gTUFTVEVSQ0hBSU5fSUQpIHtcbiAgICAgICAgICAgIGlmICghbWFzdGVyY2hhaW5MYXN0QmxvY2spIHtcbiAgICAgICAgICAgICAgICB0aHJvdyBUT05DbGllbnRFcnJvci5ub0Jsb2Nrcyhhd2FpdCB0aGlzLmdldENsaWVudEluZm8oKSwgTUFTVEVSQ0hBSU5fSUQpO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgcmV0dXJuIG1hc3RlcmNoYWluTGFzdEJsb2NrLmlkO1xuICAgICAgICB9XG5cbiAgICAgICAgLy8gaWYgYWNjb3VudCBpcyBmcm9tIG90aGVyIGNoYWlucyB0aGVuIHN0YXJ0aW5nIHBvaW50IGlzIGxhc3QgYWNjb3VudCdzIHNoYXJkIGJsb2NrXG4gICAgICAgIC8vIFRvIG9idGFpbiBpdCB3ZSB0YWtlIG1hc3RlcmNoYWluIGJsb2NrIHRvIGdldCBzaGFyZHMgY29uZmlndXJhdGlvbiBhbmQgc2VsZWN0XG4gICAgICAgIC8vIG1hdGNoaW5nIHNoYXJkXG4gICAgICAgIGlmICghbWFzdGVyY2hhaW5MYXN0QmxvY2spIHtcbiAgICAgICAgICAgIC8vIE5vZGUgU0UgY2FzZSAtIG5vIG1hc3RlcmNoYWluLCBubyBzaGFyZGluZy4gQ2hlY2sgdGhhdCBvbmx5IG9uZSBzaGFyZFxuICAgICAgICAgICAgbGV0IHdvcmtjaGFpbkxhc3RCbG9jayA9IGF3YWl0IHRoaXMuZmluZExhc3RCbG9jayh3b3JrY2hhaW4sICdhZnRlcl9tZXJnZSBzaGFyZCcpO1xuICAgICAgICAgICAgaWYgKCF3b3JrY2hhaW5MYXN0QmxvY2spIHtcbiAgICAgICAgICAgICAgICB0aHJvdyBUT05DbGllbnRFcnJvci5ub0Jsb2Nrcyhhd2FpdCB0aGlzLmdldENsaWVudEluZm8oKSwgd29ya2NoYWluKTtcbiAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgLy8gaWYgd29ya2NoYWluIGlzIHNoYXJkZWQgdGhlbiBpdCBpcyBub3QgTm9kZSBTRSBhbmQgbWFzdGVyY2hhaW4gYmxvY2tzIG1pc3NpbmdcbiAgICAgICAgICAgIC8vIGlzIGVycm9yXG4gICAgICAgICAgICBpZiAod29ya2NoYWluTGFzdEJsb2NrLmFmdGVyX21lcmdlIHx8IHdvcmtjaGFpbkxhc3RCbG9jay5zaGFyZCAhPT0gJzgwMDAwMDAwMDAwMDAwMDAnKSB7XG4gICAgICAgICAgICAgICAgdGhyb3cgVE9OQ2xpZW50RXJyb3Iubm9CbG9ja3MoYXdhaXQgdGhpcy5nZXRDbGllbnRJbmZvKCksIE1BU1RFUkNIQUlOX0lEKTtcbiAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgLy8gVGFrZSBsYXN0IGJsb2NrIGJ5IHNlcV9ub1xuICAgICAgICAgICAgd29ya2NoYWluTGFzdEJsb2NrID0gYXdhaXQgdGhpcy5maW5kTGFzdEJsb2NrKHdvcmtjaGFpbiwgJ2lkJywge1xuICAgICAgICAgICAgICAgIHNoYXJkOiB7IGVxOiAnODAwMDAwMDAwMDAwMDAwMCcgfSxcbiAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgaWYgKCF3b3JrY2hhaW5MYXN0QmxvY2spIHtcbiAgICAgICAgICAgICAgICB0aHJvdyBUT05DbGllbnRFcnJvci5pbnZhbGlkQmxvY2tjaGFpbihcbiAgICAgICAgICAgICAgICAgICAgYXdhaXQgdGhpcy5nZXRDbGllbnRJbmZvKCksXG4gICAgICAgICAgICAgICAgICAgICdObyBzdGFydGluZyBOb2RlIFNFIGJsb2NrIGZvdW5kJyxcbiAgICAgICAgICAgICAgICApO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgcmV0dXJuIHdvcmtjaGFpbkxhc3RCbG9jay5pZDtcbiAgICAgICAgfVxuXG4gICAgICAgIGNvbnN0IHNoYXJkczogP1FTaGFyZEhhc2hbXSA9IG1hc3RlcmNoYWluTGFzdEJsb2NrPy5tYXN0ZXI/LnNoYXJkX2hhc2hlcztcbiAgICAgICAgaWYgKCFzaGFyZHMgfHwgc2hhcmRzLmxlbmd0aCA9PT0gMCkge1xuICAgICAgICAgICAgdGhyb3cgVE9OQ2xpZW50RXJyb3IuaW52YWxpZEJsb2NrY2hhaW4oXG4gICAgICAgICAgICAgICAgYXdhaXQgdGhpcy5nZXRDbGllbnRJbmZvKCksXG4gICAgICAgICAgICAgICAgJ05vIGBzaGFyZF9oYXNoZXNgIGZpZWxkIGluIG1hc3RlcmNoYWluIGJsb2NrJyxcbiAgICAgICAgICAgICk7XG4gICAgICAgIH1cbiAgICAgICAgY29uc3Qgc2hhcmRCbG9jayA9IGF3YWl0IHRoaXMuZmluZE1hdGNoaW5nU2hhcmQoc2hhcmRzLCBhZGRyZXNzKTtcbiAgICAgICAgY29uc3Qgcm9vdF9oYXNoID0gc2hhcmRCbG9jaz8uZGVzY3I/LnJvb3RfaGFzaDtcbiAgICAgICAgaWYgKCFyb290X2hhc2gpIHtcbiAgICAgICAgICAgIHRocm93IFRPTkNsaWVudEVycm9yLmludmFsaWRCbG9ja2NoYWluKFxuICAgICAgICAgICAgICAgIGF3YWl0IHRoaXMuZ2V0Q2xpZW50SW5mbygpLFxuICAgICAgICAgICAgICAgICdObyBgcm9vdF9oYXNoYCBmaWVsZCBpbiBzaGFyZCBkZXNjcicsXG4gICAgICAgICAgICApO1xuICAgICAgICB9XG4gICAgICAgIHJldHVybiByb290X2hhc2g7XG4gICAgfVxuXG4gICAgYXN5bmMgY2hlY2tTaGFyZE1hdGNoKGJsb2NrOiBRQmxvY2ssIGFkZHJlc3M6IHN0cmluZyk6IFByb21pc2U8Ym9vbGVhbj4ge1xuICAgICAgICByZXR1cm4gISEoYXdhaXQgdGhpcy5maW5kTWF0Y2hpbmdTaGFyZChbXG4gICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgd29ya2NoYWluX2lkOiBibG9jay53b3JrY2hhaW5faWQgfHwgMCxcbiAgICAgICAgICAgICAgICBzaGFyZDogYmxvY2suc2hhcmQgfHwgJycsXG4gICAgICAgICAgICB9LFxuICAgICAgICBdLCBhZGRyZXNzKSk7XG4gICAgfVxuXG4gICAgYXN5bmMgd2FpdE5leHRCbG9jayhjdXJyZW50OiBzdHJpbmcsIGFkZHJlc3M6IHN0cmluZywgdGltZW91dD86IG51bWJlcik6IFByb21pc2U8UUJsb2NrPiB7XG4gICAgICAgIGNvbnN0IGJsb2NrID0gYXdhaXQgdGhpcy5xdWVyaWVzLmJsb2Nrcy53YWl0Rm9yKHtcbiAgICAgICAgICAgIGZpbHRlcjoge1xuICAgICAgICAgICAgICAgIHByZXZfcmVmOiB7XG4gICAgICAgICAgICAgICAgICAgIHJvb3RfaGFzaDogeyBlcTogY3VycmVudCB9LFxuICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgT1I6IHtcbiAgICAgICAgICAgICAgICAgICAgcHJldl9hbHRfcmVmOiB7XG4gICAgICAgICAgICAgICAgICAgICAgICByb290X2hhc2g6IHsgZXE6IGN1cnJlbnQgfSxcbiAgICAgICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgfSxcbiAgICAgICAgICAgIHJlc3VsdDogQkxPQ0tfRklFTERTLFxuICAgICAgICAgICAgdGltZW91dCxcbiAgICAgICAgfSk7XG5cbiAgICAgICAgaWYgKGJsb2NrPy5hZnRlcl9zcGxpdCAmJiAhKGF3YWl0IHRoaXMuY2hlY2tTaGFyZE1hdGNoKGJsb2NrLCBhZGRyZXNzKSkpIHtcbiAgICAgICAgICAgIHJldHVybiB0aGlzLnF1ZXJpZXMuYmxvY2tzLndhaXRGb3Ioe1xuICAgICAgICAgICAgICAgIGZpbHRlcjoge1xuICAgICAgICAgICAgICAgICAgICBpZDogeyBuZTogYmxvY2suaWQgfSxcbiAgICAgICAgICAgICAgICAgICAgcHJldl9yZWY6IHtcbiAgICAgICAgICAgICAgICAgICAgICAgIHJvb3RfaGFzaDogeyBlcTogY3VycmVudCB9LFxuICAgICAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgcmVzdWx0OiBCTE9DS19GSUVMRFMsXG4gICAgICAgICAgICAgICAgdGltZW91dCxcbiAgICAgICAgICAgIH0pO1xuICAgICAgICB9XG4gICAgICAgIHJldHVybiBibG9jaztcbiAgICB9XG5cbiAgICBhc3luYyB3YWl0Rm9yVHJhbnNhY3Rpb24ocGFyYW1zOiBUT05XYWl0Rm9yVHJhbnNhY3Rpb25QYXJhbXMpOiBQcm9taXNlPFRPTkNvbnRyYWN0UnVuUmVzdWx0PiB7XG4gICAgICAgIC8vIGNvbnN0IGxlZ2FjeVN0YXJ0ID0gRGF0ZS5ub3coKTtcbiAgICAgICAgLy8gY29uc3QgcmVzdWx0ID0gYXdhaXQgdGhpcy5sZWdhY3lXYWl0Rm9yVHJhbnNhY3Rpb24ocGFyYW1zKTtcbiAgICAgICAgLy8gY29uc29sZS5sb2coJz4+PicsIGBMZWdhY3kgd2FpdCBmb3IgYTogJHtEYXRlLm5vdygpIC0gbGVnYWN5U3RhcnR9IG1zYCk7XG4gICAgICAgIC8vIHJldHVybiByZXN1bHQ7XG5cbiAgICAgICAgY29uc3QgdG90YWxTdGFydCA9IERhdGUubm93KCk7XG4gICAgICAgIGNvbnN0IGV4cGlyZSA9IHBhcmFtcy5tZXNzYWdlLmV4cGlyZSB8fCAwO1xuICAgICAgICBjb25zdCBtZXNzYWdlSWQgPSBhd2FpdCB0aGlzLmVuc3VyZU1lc3NhZ2VJZChwYXJhbXMubWVzc2FnZSk7XG4gICAgICAgIGNvbnN0IGFkZHJlc3MgPSBwYXJhbXMubWVzc2FnZS5hZGRyZXNzO1xuICAgICAgICBjb25zdCBwcm9jZXNzaW5nID0geyAuLi5wYXJhbXMubWVzc2FnZVByb2Nlc3NpbmdTdGF0ZSB9O1xuICAgICAgICBsZXQgdHJhbnNhY3Rpb24gPSBudWxsO1xuICAgICAgICB0cnkge1xuICAgICAgICAgICAgY29uc3QgdGltZVJlcG9ydCA9IFtdO1xuXG4gICAgICAgICAgICBjb25zdCBzdG9wVGltZSA9IGV4cGlyZVxuICAgICAgICAgICAgICAgIHx8IE1hdGgucm91bmQoKERhdGUubm93KCkgKyB0aGlzLmNvbmZpZy5tZXNzYWdlUHJvY2Vzc2luZ1RpbWVvdXQoKSkgLyAxMDAwKTtcblxuICAgICAgICAgICAgY29uc3QgaW5maW5pdGVXYWl0ID0gcGFyYW1zLmluZmluaXRlV2FpdCAhPT0gZmFsc2U7XG4gICAgICAgICAgICBjb25zdCBhZGRUaW1lb3V0ID0gdGhpcy5jb25maWcubWVzc2FnZVByb2Nlc3NpbmdUaW1lb3V0KCk7XG4gICAgICAgICAgICB3aGlsZSAoIXRyYW5zYWN0aW9uKSB7XG4gICAgICAgICAgICAgICAgY29uc3Qgbm93ID0gRGF0ZS5ub3coKTtcbiAgICAgICAgICAgICAgICBjb25zdCB0aW1lb3V0ID0gTWF0aC5tYXgoc3RvcFRpbWUsIG5vdykgLSBub3cgKyBhZGRUaW1lb3V0O1xuICAgICAgICAgICAgICAgIGxldCBibG9jazogP1FCbG9jayA9IG51bGw7XG4gICAgICAgICAgICAgICAgdHJ5IHtcbiAgICAgICAgICAgICAgICAgICAgY29uc3Qgc3RhcnQgPSBEYXRlLm5vdygpO1xuICAgICAgICAgICAgICAgICAgICBibG9jayA9IGF3YWl0IHRoaXMud2FpdE5leHRCbG9jayhwcm9jZXNzaW5nLmxhc3RCbG9ja0lkLCBhZGRyZXNzLCB0aW1lb3V0KTtcbiAgICAgICAgICAgICAgICAgICAgY29uc3QgZW5kID0gRGF0ZS5ub3coKTtcbiAgICAgICAgICAgICAgICAgICAgdGltZVJlcG9ydC5wdXNoKGBCbG9jayBbJHtibG9jay5pZCB8fCAnJ31dIGhhcyBiZWVuIHJlY2VpdmVkOiAke2VuZCAtIHN0YXJ0fSBtcywgY2xpZW50IHRpbWU6ICR7TWF0aC5yb3VuZChcbiAgICAgICAgICAgICAgICAgICAgICAgIGVuZCAvIDEwMDApfSwgZ2VuX3V0aW1lOiAke2Jsb2NrLmdlbl91dGltZSB8fCAwfWApO1xuICAgICAgICAgICAgICAgIH0gY2F0Y2ggKGVycm9yKSB7XG4gICAgICAgICAgICAgICAgICAgIHRoaXMuY29uZmlnLmxvZygnQmxvY2sgd2FpdGluZyBmYWlsZWQ6ICcsIGVycm9yKTtcbiAgICAgICAgICAgICAgICAgICAgaWYgKCFpbmZpbml0ZVdhaXQpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIGxldCByZXNvbHZlZEVycm9yID0gZXJyb3I7XG4gICAgICAgICAgICAgICAgICAgICAgICBpZiAoZXJyb3IuY29kZSA9PT0gVE9ORXJyb3JDb2RlLldBSVRfRk9SX1RJTUVPVVQpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICByZXNvbHZlZEVycm9yID0gVE9OQ2xpZW50RXJyb3IubmV0d29ya1NpbGVudChcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgYXdhaXQgdGhpcy5nZXRDbGllbnRJbmZvKCksXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIG1lc3NhZ2VfaWQ6IG1lc3NhZ2VJZCxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGJsb2NrX2lkOiBwcm9jZXNzaW5nLmxhc3RCbG9ja0lkLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdGltZW91dCxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIG1lc3NhZ2VfcHJvY2Vzc2luZ19zdGF0ZTogcHJvY2Vzc2luZyxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGV4cGlyZSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHNlbmRpbmdfdGltZTogcHJvY2Vzc2luZy5zZW5kaW5nVGltZSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICApO1xuICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgICAgdGhyb3cgcmVzb2x2ZWRFcnJvcjtcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICB0aGlzLmNvbmZpZy5sb2coJ1JldHJ5IHdhaXRpbmcuJyk7XG4gICAgICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICAgICAgaWYgKGJsb2NrKSB7XG4gICAgICAgICAgICAgICAgICAgIHByb2Nlc3NpbmcubGFzdEJsb2NrSWQgPSBibG9jay5pZCB8fCAnJztcblxuICAgICAgICAgICAgICAgICAgICBjb25zdCBpbk1zZyA9IChibG9jay5pbl9tc2dfZGVzY3IgfHwgW10pLmZpbmQoeCA9PiB4Lm1zZ19pZCA9PT0gbWVzc2FnZUlkKTtcbiAgICAgICAgICAgICAgICAgICAgaWYgKGluTXNnKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICBjb25zdCB0cmFuc2FjdGlvbklkID0gaW5Nc2cudHJhbnNhY3Rpb25faWQ7XG4gICAgICAgICAgICAgICAgICAgICAgICBpZiAoIXRyYW5zYWN0aW9uSWQpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB0aHJvdyBUT05DbGllbnRFcnJvci5pbnZhbGlkQmxvY2tjaGFpbihcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgYXdhaXQgdGhpcy5nZXRDbGllbnRJbmZvKCksXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICdObyBmaWVsZCBgdHJhbnNhY3Rpb25faWRgIGluIGJsb2NrJyxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICApO1xuICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgICAgY29uc3QgdHJTdGFydCA9IERhdGUubm93KCk7XG4gICAgICAgICAgICAgICAgICAgICAgICB0cmFuc2FjdGlvbiA9IGF3YWl0IHRoaXMucXVlcmllcy50cmFuc2FjdGlvbnMud2FpdEZvcih7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgZmlsdGVyOiB7IGlkOiB7IGVxOiB0cmFuc2FjdGlvbklkIH0gfSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICByZXN1bHQ6IFRSQU5TQUNUSU9OX0ZJRUxEU19PUkRJTkFSWSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB0aW1lb3V0OiBNQVhfVElNRU9VVCxcbiAgICAgICAgICAgICAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgICAgICAgICAgICAgdHJhY2VNZXNzYWdlKHRoaXMuY29uZmlnLnRyYWNlciwgbWVzc2FnZUlkLCAndHJhbnNhY3Rpb25SZWNlaXZlZCcsIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB0cmFuc2FjdGlvbklkLFxuICAgICAgICAgICAgICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICAgICAgICAgICAgICB0aW1lUmVwb3J0LnB1c2goYFRyYW5zYWN0aW9uIFske3RyYW5zYWN0aW9uSWR9XSBoYXMgYmVlbiByZWNlaXZlZDogJHtEYXRlLm5vdygpIC0gdHJTdGFydH0gbXNgKTtcbiAgICAgICAgICAgICAgICAgICAgfSBlbHNlIGlmICgoYmxvY2suZ2VuX3V0aW1lIHx8IDApID4gc3RvcFRpbWUpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIGlmIChleHBpcmUpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB0cmFjZU1lc3NhZ2UodGhpcy5jb25maWcudHJhY2VyLCBtZXNzYWdlSWQsICdtZXNzYWdlRXhwaXJlZCcsIHt9KTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB0aHJvdyBUT05DbGllbnRFcnJvci5tZXNzYWdlRXhwaXJlZChcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgYXdhaXQgdGhpcy5nZXRDbGllbnRJbmZvKCksIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIG1lc3NhZ2VfaWQ6IG1lc3NhZ2VJZCxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHNlbmRpbmdfdGltZTogcHJvY2Vzc2luZy5zZW5kaW5nVGltZSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGV4cGlyZTogc3RvcFRpbWUsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBibG9ja190aW1lOiBibG9jay5nZW5fdXRpbWUsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBibG9ja19pZDogcHJvY2Vzc2luZy5sYXN0QmxvY2tJZCxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICApO1xuICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgICAgdGhyb3cgVE9OQ2xpZW50RXJyb3IudHJhbnNhY3Rpb25XYWl0VGltZW91dChcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBhd2FpdCB0aGlzLmdldENsaWVudEluZm8oKSwge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBtZXNzYWdlX2lkOiBtZXNzYWdlSWQsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHNlbmRpbmdfdGltZTogcHJvY2Vzc2luZy5zZW5kaW5nVGltZSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdGltZW91dCxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgbWVzc2FnZV9wcm9jZXNzaW5nX3N0YXRlOiBwcm9jZXNzaW5nLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgICAgICAgICApO1xuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICB0aW1lUmVwb3J0LnNwbGljZSgwLCAwLCBgVHJhbnNhY3Rpb24gd2FpdGluZyB0aW1lOiAke0RhdGUubm93KCkgLSB0b3RhbFN0YXJ0fSBtc2ApO1xuICAgICAgICAgICAgdGhpcy5jb25maWcubG9nKHRpbWVSZXBvcnQuam9pbignXFxuJykpO1xuICAgICAgICB9IGNhdGNoIChlcnJvcikge1xuICAgICAgICAgICAgdGhpcy5jb25maWcubG9nKCdbd2FpdEZvclRyYW5zYWN0aW9uXScsICdGQUlMRUQnLCBlcnJvcik7XG4gICAgICAgICAgICBpZiAoZXJyb3IuY29kZSA9PT0gVE9ORXJyb3JDb2RlLk1FU1NBR0VfRVhQSVJFRFxuICAgICAgICAgICAgICAgIHx8IGVycm9yLmNvZGUgPT09IFRPTkVycm9yQ29kZS5UUkFOU0FDVElPTl9XQUlUX1RJTUVPVVQpIHtcbiAgICAgICAgICAgICAgICB0aHJvdyBhd2FpdCB0aGlzLnJlc29sdmVEZXRhaWxlZEVycm9yKFxuICAgICAgICAgICAgICAgICAgICBlcnJvcixcbiAgICAgICAgICAgICAgICAgICAgcGFyYW1zLm1lc3NhZ2UubWVzc2FnZUJvZHlCYXNlNjQsXG4gICAgICAgICAgICAgICAgICAgIHByb2Nlc3Npbmcuc2VuZGluZ1RpbWUsXG4gICAgICAgICAgICAgICAgICAgIGFkZHJlc3MsXG4gICAgICAgICAgICAgICAgKTtcbiAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgICAgdGhyb3cgZXJyb3I7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cblxuICAgICAgICByZXR1cm4gdGhpcy5wcm9jZXNzVHJhbnNhY3Rpb24oXG4gICAgICAgICAgICBhZGRyZXNzLFxuICAgICAgICAgICAgdHJhbnNhY3Rpb24sXG4gICAgICAgICAgICBwYXJhbXMuYWJpLFxuICAgICAgICAgICAgcGFyYW1zLmZ1bmN0aW9uTmFtZSxcbiAgICAgICAgKTtcbiAgICB9XG5cbiAgICBhc3luYyBsZWdhY3lXYWl0Rm9yVHJhbnNhY3Rpb24oXG4gICAgICAgIHBhcmFtczogVE9OV2FpdEZvclRyYW5zYWN0aW9uUGFyYW1zLFxuICAgICk6IFByb21pc2U8VE9OQ29udHJhY3RSdW5SZXN1bHQ+IHtcbiAgICAgICAgY29uc3Qge1xuICAgICAgICAgICAgbWVzc2FnZSxcbiAgICAgICAgICAgIGFiaSxcbiAgICAgICAgICAgIGZ1bmN0aW9uTmFtZSxcbiAgICAgICAgICAgIHBhcmVudFNwYW4sXG4gICAgICAgIH0gPSBwYXJhbXM7XG4gICAgICAgIGNvbnN0IG1lc3NhZ2VJZCA9IGF3YWl0IHRoaXMuZW5zdXJlTWVzc2FnZUlkKG1lc3NhZ2UpO1xuICAgICAgICBjb25zdCBjb25maWcgPSB0aGlzLmNvbmZpZztcbiAgICAgICAgY29uZmlnLmxvZygnW3dhaXRGb3JUcmFuc2FjdGlvbl0nLCBmdW5jdGlvbk5hbWUsIG1lc3NhZ2UpO1xuICAgICAgICBsZXQgcHJvY2Vzc2luZ1RpbWVvdXQgPSBjb25maWcubWVzc2FnZVByb2Nlc3NpbmdUaW1lb3V0KCk7XG4gICAgICAgIGNvbnN0IHByb21pc2VzID0gW107XG4gICAgICAgIGNvbnN0IHNlcnZlckluZm8gPSBhd2FpdCB0aGlzLnF1ZXJpZXMuZ2V0U2VydmVySW5mbyhwYXJlbnRTcGFuKTtcbiAgICAgICAgY29uc3Qgb3BlcmF0aW9uSWQgPSBzZXJ2ZXJJbmZvLnN1cHBvcnRzT3BlcmF0aW9uSWRcbiAgICAgICAgICAgID8gdGhpcy5xdWVyaWVzLmdlbmVyYXRlT3BlcmF0aW9uSWQoKVxuICAgICAgICAgICAgOiB1bmRlZmluZWQ7XG4gICAgICAgIGxldCB0cmFuc2FjdGlvbjogP1FUcmFuc2FjdGlvbiA9IG51bGw7XG4gICAgICAgIGNvbnN0IHNlbmRpbmdUaW1lID0gTWF0aC5yb3VuZChEYXRlLm5vdygpIC8gMTAwMCk7XG4gICAgICAgIGxldCBibG9ja1RpbWU7XG4gICAgICAgIHRyeSB7XG4gICAgICAgICAgICBjb25zdCBleHBpcmUgPSBtZXNzYWdlLmV4cGlyZTtcbiAgICAgICAgICAgIGlmIChleHBpcmUpIHtcbiAgICAgICAgICAgICAgICAvLyBjYWxjdWxhdGUgdGltZW91dCBhY2NvcmRpbmcgdG8gYGV4cGlyZWAgdmFsdWUgKGluIHNlY29uZHMpXG4gICAgICAgICAgICAgICAgLy8gYWRkIHByb2Nlc3NpbmcgdGltZW91dCBhcyBtYXN0ZXIgYmxvY2sgdmFsaWRhdGlvbiB0aW1lXG4gICAgICAgICAgICAgICAgY29uc3QgYmxvY2tUaW1lb3V0ID0gZXhwaXJlICogMTAwMCAtIERhdGUubm93KCkgKyBwcm9jZXNzaW5nVGltZW91dDtcbiAgICAgICAgICAgICAgICAvLyB0cmFuc2FjdGlvbiB0aW1lb3V0IG11c3QgYmUgZ3JlYXRlciB0aGVuIGJsb2NrIHRpbWVvdXRcbiAgICAgICAgICAgICAgICBwcm9jZXNzaW5nVGltZW91dCA9IGJsb2NrVGltZW91dCArIEVYVFJBX1RSQU5TQUNUSU9OX1dBSVRJTkdfVElNRTtcblxuXG4gICAgICAgICAgICAgICAgY29uc3Qgd2FpdEV4cGlyZWQgPSBhc3luYyAoKSA9PiB7XG4gICAgICAgICAgICAgICAgICAgIC8vIHdhaXQgZm9yIGJsb2NrLCBwcm9kdWNlZCBhZnRlciBgZXhwaXJlYCB0byBndWFyYW50ZWUgdGhhdCBtZXNzYWdlIGlzIHJlamVjdGVkXG4gICAgICAgICAgICAgICAgICAgIGxldCBibG9jazogP1FCbG9jayA9IG51bGw7XG4gICAgICAgICAgICAgICAgICAgIHRyeSB7XG4gICAgICAgICAgICAgICAgICAgICAgICBibG9jayA9IGF3YWl0IHRoaXMucXVlcmllcy5ibG9ja3Mud2FpdEZvcih7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgZmlsdGVyOiB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIG1hc3RlcjogeyBtaW5fc2hhcmRfZ2VuX3V0aW1lOiB7IGdlOiBleHBpcmUgfSB9LFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgcmVzdWx0OiAnaWQgZ2VuX3V0aW1lIGluX21zZ19kZXNjciB7IHRyYW5zYWN0aW9uX2lkIH0nLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRpbWVvdXQ6IGJsb2NrVGltZW91dCxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBwYXJlbnRTcGFuLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIG9wZXJhdGlvbklkLFxuICAgICAgICAgICAgICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICAgICAgICAgIH0gY2F0Y2ggKGVycm9yKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICBpZiAoVE9OQ2xpZW50RXJyb3IuaXNXYWl0Rm9yVGltZW91dChlcnJvcikpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB0aHJvdyBUT05DbGllbnRFcnJvci5uZXR3b3JrU2lsZW50KFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBhd2FpdCB0aGlzLmdldENsaWVudEluZm8oKSwge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgbWVzc2FnZV9pZDogbWVzc2FnZUlkLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgc2VuZGluZ190aW1lOiBzZW5kaW5nVGltZSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGV4cGlyZSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRpbWVvdXQ6IGJsb2NrVGltZW91dCxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICApO1xuICAgICAgICAgICAgICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB0aHJvdyBlcnJvcjtcbiAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICAgICAgICAgIGlmICh0cmFuc2FjdGlvbikge1xuICAgICAgICAgICAgICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICAgICAgICAgICAgICB9XG5cbiAgICAgICAgICAgICAgICAgICAgY29uc3QgdHJhbnNhY3Rpb25JZCA9IGJsb2NrLmluX21zZ19kZXNjclxuICAgICAgICAgICAgICAgICAgICAgICAgJiYgYmxvY2suaW5fbXNnX2Rlc2NyLmZpbmQobXNnID0+ICEhbXNnLnRyYW5zYWN0aW9uX2lkKT8udHJhbnNhY3Rpb25faWQ7XG5cbiAgICAgICAgICAgICAgICAgICAgaWYgKCF0cmFuc2FjdGlvbklkKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICB0aHJvdyBUT05DbGllbnRFcnJvci5pbnRlcm5hbEVycm9yKFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGF3YWl0IHRoaXMuZ2V0Q2xpZW50SW5mbygpLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICdJbnZhbGlkIGJsb2NrIHJlY2VpdmVkOiBubyB0cmFuc2FjdGlvbiBJRCcsXG4gICAgICAgICAgICAgICAgICAgICAgICApO1xuICAgICAgICAgICAgICAgICAgICB9XG5cbiAgICAgICAgICAgICAgICAgICAgLy8gY2hlY2sgdGhhdCB0cmFuc2FjdGlvbnMgY29sbGVjdGlvbiBpcyB1cGRhdGVkXG4gICAgICAgICAgICAgICAgICAgIHRyeSB7XG4gICAgICAgICAgICAgICAgICAgICAgICBhd2FpdCB0aGlzLnF1ZXJpZXMudHJhbnNhY3Rpb25zLndhaXRGb3Ioe1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGZpbHRlcjoge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBpZDogeyBlcTogdHJhbnNhY3Rpb25JZCB9LFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgcmVzdWx0OiAnaWQnLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRpbWVvdXQ6IEJMT0NLX1RSQU5TQUNUSU9OX1dBSVRJTkdfVElNRSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBwYXJlbnRTcGFuLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIG9wZXJhdGlvbklkLFxuICAgICAgICAgICAgICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICAgICAgICAgIH0gY2F0Y2ggKGVycm9yKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICBpZiAoVE9OQ2xpZW50RXJyb3IuaXNXYWl0Rm9yVGltZW91dChlcnJvcikpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB0aHJvdyBUT05DbGllbnRFcnJvci5uZXR3b3JrU2lsZW50KFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBhd2FpdCB0aGlzLmdldENsaWVudEluZm8oKSwge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgbWVzc2FnZV9pZDogbWVzc2FnZUlkLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgYmxvY2tfaWQ6IGJsb2NrLmlkLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdHJhbnNhY3Rpb25faWQ6IHRyYW5zYWN0aW9uSWQsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB0aW1lb3V0OiBCTE9DS19UUkFOU0FDVElPTl9XQUlUSU5HX1RJTUUsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBzZW5kaW5nX3RpbWU6IHNlbmRpbmdUaW1lLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgZXhwaXJlLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICk7XG4gICAgICAgICAgICAgICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRocm93IGVycm9yO1xuICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgIGJsb2NrVGltZSA9IGJsb2NrLmdlbl91dGltZTtcbiAgICAgICAgICAgICAgICB9O1xuXG4gICAgICAgICAgICAgICAgcHJvbWlzZXMucHVzaCh3YWl0RXhwaXJlZCgpKTtcbiAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgLy8gd2FpdCBmb3IgbWVzc2FnZSBwcm9jZXNzaW5nIHRyYW5zYWN0aW9uXG4gICAgICAgICAgICBwcm9taXNlcy5wdXNoKG5ldyBQcm9taXNlKChyZXNvbHZlLCByZWplY3QpID0+IHtcbiAgICAgICAgICAgICAgICAoYXN5bmMgKCkgPT4ge1xuICAgICAgICAgICAgICAgICAgICB0cnkge1xuICAgICAgICAgICAgICAgICAgICAgICAgdHJhbnNhY3Rpb24gPSBhd2FpdCB0aGlzLnF1ZXJpZXMudHJhbnNhY3Rpb25zLndhaXRGb3Ioe1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGZpbHRlcjoge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBpbl9tc2c6IHsgZXE6IG1lc3NhZ2VJZCB9LFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBzdGF0dXM6IHsgZXE6IFFUcmFuc2FjdGlvblByb2Nlc3NpbmdTdGF0dXMuZmluYWxpemVkIH0sXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICByZXN1bHQ6IHRyYW5zYWN0aW9uRGV0YWlscyxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB0aW1lb3V0OiBwcm9jZXNzaW5nVGltZW91dCxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBvcGVyYXRpb25JZCxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBwYXJlbnRTcGFuLFxuICAgICAgICAgICAgICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICAgICAgICAgICAgICByZXNvbHZlKCk7XG4gICAgICAgICAgICAgICAgICAgIH0gY2F0Y2ggKGVycm9yKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICBpZiAoVE9OQ2xpZW50RXJyb3IuaXNXYWl0Rm9yVGltZW91dChlcnJvcikpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICByZWplY3QoVE9OQ2xpZW50RXJyb3IudHJhbnNhY3Rpb25XYWl0VGltZW91dChcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgYXdhaXQgdGhpcy5nZXRDbGllbnRJbmZvKCksIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIG1lc3NhZ2VfaWQ6IG1lc3NhZ2VJZCxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHNlbmRpbmdfdGltZTogc2VuZGluZ1RpbWUsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB0aW1lb3V0OiBwcm9jZXNzaW5nVGltZW91dCxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICApKTtcbiAgICAgICAgICAgICAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgcmVqZWN0KGVycm9yKTtcbiAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIH0pKCk7XG4gICAgICAgICAgICB9KSk7XG5cbiAgICAgICAgICAgIHRyeSB7XG4gICAgICAgICAgICAgICAgYXdhaXQgUHJvbWlzZS5yYWNlKHByb21pc2VzKTtcbiAgICAgICAgICAgIH0gZmluYWxseSB7XG4gICAgICAgICAgICAgICAgaWYgKHByb21pc2VzLmxlbmd0aCA+IDEgJiYgb3BlcmF0aW9uSWQpIHtcbiAgICAgICAgICAgICAgICAgICAgYXdhaXQgdGhpcy5xdWVyaWVzLmZpbmlzaE9wZXJhdGlvbnMoW29wZXJhdGlvbklkXSk7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICBpZiAoIXRyYW5zYWN0aW9uKSB7XG4gICAgICAgICAgICAgICAgdGhyb3cgVE9OQ2xpZW50RXJyb3IubWVzc2FnZUV4cGlyZWQoXG4gICAgICAgICAgICAgICAgICAgIGF3YWl0IHRoaXMuZ2V0Q2xpZW50SW5mbygpLCB7XG4gICAgICAgICAgICAgICAgICAgICAgICBtZXNzYWdlX2lkOiBtZXNzYWdlSWQsXG4gICAgICAgICAgICAgICAgICAgICAgICBzZW5kaW5nX3RpbWU6IHNlbmRpbmdUaW1lLFxuICAgICAgICAgICAgICAgICAgICAgICAgZXhwaXJlLFxuICAgICAgICAgICAgICAgICAgICAgICAgYmxvY2tfdGltZTogYmxvY2tUaW1lLFxuICAgICAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgICk7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBjb25zdCB0cmFuc2FjdGlvbk5vdyA9IHRyYW5zYWN0aW9uLm5vdyB8fCAwO1xuICAgICAgICAgICAgdGhpcy5jb25maWcubG9nKCdbd2FpdEZvclRyYW5zYWN0aW9uXScsICdUUkFOU0FDVElPTl9SRUNFSVZFRCcsIHtcbiAgICAgICAgICAgICAgICBpZDogdHJhbnNhY3Rpb24uaWQsXG4gICAgICAgICAgICAgICAgYmxvY2tJZDogdHJhbnNhY3Rpb24uYmxvY2tfaWQsXG4gICAgICAgICAgICAgICAgbm93OiBgJHtuZXcgRGF0ZSh0cmFuc2FjdGlvbk5vdyAqIDEwMDApLnRvSVNPU3RyaW5nKCl9ICgke3RyYW5zYWN0aW9uTm93fSlgLFxuICAgICAgICAgICAgfSk7XG4gICAgICAgIH0gY2F0Y2ggKGVycm9yKSB7XG4gICAgICAgICAgICB0aGlzLmNvbmZpZy5sb2coJ1t3YWl0Rm9yVHJhbnNhY3Rpb25dJywgJ0ZBSUxFRCcsIGVycm9yKTtcbiAgICAgICAgICAgIGlmIChUT05DbGllbnRFcnJvci5pc01lc3NhZ2VFeHBpcmVkKGVycm9yKVxuICAgICAgICAgICAgICAgIHx8IFRPTkNsaWVudEVycm9yLmlzQ2xpZW50RXJyb3IoZXJyb3IsIFRPTkVycm9yQ29kZS5UUkFOU0FDVElPTl9XQUlUX1RJTUVPVVQpKSB7XG4gICAgICAgICAgICAgICAgY29uc3QgZGV0YWlsZWRFcnJvcjogYW55ID0gYXdhaXQgdGhpcy5yZXNvbHZlRGV0YWlsZWRFcnJvcihcbiAgICAgICAgICAgICAgICAgICAgZXJyb3IsXG4gICAgICAgICAgICAgICAgICAgIG1lc3NhZ2UubWVzc2FnZUJvZHlCYXNlNjQsXG4gICAgICAgICAgICAgICAgICAgIERhdGUubm93KCkgLyAxMDAwLFxuICAgICAgICAgICAgICAgICAgICBtZXNzYWdlLmFkZHJlc3MsXG4gICAgICAgICAgICAgICAgKTtcbiAgICAgICAgICAgICAgICBjb25zdCBtZXNzYWdlUHJvY2Vzc2luZ1N0YXRlID0gZXJyb3IuZGF0YT8ubWVzc2FnZVByb2Nlc3NpbmdTdGF0ZTtcbiAgICAgICAgICAgICAgICBpZiAobWVzc2FnZVByb2Nlc3NpbmdTdGF0ZSkge1xuICAgICAgICAgICAgICAgICAgICBpZiAoZGV0YWlsZWRFcnJvci5kYXRhKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICBkZXRhaWxlZEVycm9yLmRhdGEubWVzc2FnZVByb2Nlc3NpbmdTdGF0ZSA9IG1lc3NhZ2VQcm9jZXNzaW5nU3RhdGU7XG4gICAgICAgICAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgICAgICAgICAgICBkZXRhaWxlZEVycm9yLmRhdGEgPSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgbWVzc2FnZVByb2Nlc3NpbmdTdGF0ZSxcbiAgICAgICAgICAgICAgICAgICAgICAgIH07XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgdGhyb3cgZGV0YWlsZWRFcnJvcjtcbiAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgICAgdGhyb3cgZXJyb3I7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgICAgcmVtb3ZlVHlwZU5hbWUodHJhbnNhY3Rpb24pO1xuICAgICAgICBjb25zdCB7IG91dHB1dCwgZmVlcyB9ID0gYXdhaXQgdGhpcy5wcm9jZXNzVHJhbnNhY3Rpb24oXG4gICAgICAgICAgICBtZXNzYWdlLmFkZHJlc3MsXG4gICAgICAgICAgICB0cmFuc2FjdGlvbixcbiAgICAgICAgICAgIGFiaSxcbiAgICAgICAgICAgIGZ1bmN0aW9uTmFtZSxcbiAgICAgICAgKTtcbiAgICAgICAgcmV0dXJuIHtcbiAgICAgICAgICAgIHRyYW5zYWN0aW9uLFxuICAgICAgICAgICAgb3V0cHV0LFxuICAgICAgICAgICAgZmVlcyxcbiAgICAgICAgfTtcbiAgICB9XG5cbiAgICBhc3luYyBwcm9jZXNzVHJhbnNhY3Rpb24oXG4gICAgICAgIGFkZHJlc3M6IHN0cmluZyxcbiAgICAgICAgdHJhbnNhY3Rpb246IFFUcmFuc2FjdGlvbixcbiAgICAgICAgYWJpOiA/VE9OQ29udHJhY3RBQkksXG4gICAgICAgIGZ1bmN0aW9uTmFtZTogP3N0cmluZyxcbiAgICApOiBQcm9taXNlPFRPTkNvbnRyYWN0UnVuUmVzdWx0PiB7XG4gICAgICAgIHRyeSB7XG4gICAgICAgICAgICBjb25zdCByZXN1bHQgPSBhd2FpdCB0aGlzLnJlcXVlc3RDb3JlKCdjb250cmFjdHMucHJvY2Vzcy50cmFuc2FjdGlvbicsIHtcbiAgICAgICAgICAgICAgICB0cmFuc2FjdGlvbixcbiAgICAgICAgICAgICAgICBhYmksXG4gICAgICAgICAgICAgICAgZnVuY3Rpb25OYW1lLFxuICAgICAgICAgICAgICAgIGFkZHJlc3MsXG4gICAgICAgICAgICB9KTtcbiAgICAgICAgICAgIHJldHVybiB7XG4gICAgICAgICAgICAgICAgdHJhbnNhY3Rpb24sXG4gICAgICAgICAgICAgICAgLi4ucmVzdWx0LFxuICAgICAgICAgICAgfTtcbiAgICAgICAgfSBjYXRjaCAoZXJyb3IpIHtcbiAgICAgICAgICAgIGNvbnN0IGFjY291bnRzID0gYXdhaXQgdGhpcy5xdWVyaWVzLmFjY291bnRzLnF1ZXJ5KHtcbiAgICAgICAgICAgICAgICBmaWx0ZXI6IHsgaWQ6IHsgZXE6IGFkZHJlc3MgfSB9LFxuICAgICAgICAgICAgICAgIHJlc3VsdDogJ2FjY190eXBlIGJhbGFuY2UnLFxuICAgICAgICAgICAgICAgIHRpbWVvdXQ6IDEwMDAsXG4gICAgICAgICAgICB9KTtcbiAgICAgICAgICAgIGlmIChhY2NvdW50cy5sZW5ndGggPT09IDApIHtcbiAgICAgICAgICAgICAgICB0aHJvdyBUT05DbGllbnRFcnJvci5hY2NvdW50TWlzc2luZyhcbiAgICAgICAgICAgICAgICAgICAgYXdhaXQgdGhpcy5nZXRDbGllbnRJbmZvKCksXG4gICAgICAgICAgICAgICAgICAgIGFkZHJlc3MsXG4gICAgICAgICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIG9yaWdpbmFsX2Vycm9yOiBlcnJvcixcbiAgICAgICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICApO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgdGhyb3cgZXJyb3I7XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICBhc3luYyByZXNvbHZlRGV0YWlsZWRFcnJvcihcbiAgICAgICAgZXJyb3I6IEVycm9yLFxuICAgICAgICBtZXNzYWdlQmFzZTY0OiBzdHJpbmcsXG4gICAgICAgIHRpbWU6IG51bWJlcixcbiAgICAgICAgYWRkcmVzczogc3RyaW5nLFxuICAgICkge1xuICAgICAgICBjb25zdCBhY2NvdW50cyA9IGF3YWl0IHRoaXMucXVlcmllcy5hY2NvdW50cy5xdWVyeSh7XG4gICAgICAgICAgICBmaWx0ZXI6IHsgaWQ6IHsgZXE6IGFkZHJlc3MgfSB9LFxuICAgICAgICAgICAgcmVzdWx0OiAnaWQgYWNjX3R5cGUgYmFsYW5jZSBiYWxhbmNlX290aGVyIHsgY3VycmVuY3kgdmFsdWUgfSBib2MgY29kZV9oYXNoIGRhdGFfaGFzaCBsYXN0X3BhaWQnLFxuICAgICAgICAgICAgdGltZW91dDogMTAwMCxcbiAgICAgICAgfSk7XG4gICAgICAgIGlmIChhY2NvdW50cy5sZW5ndGggPT09IDApIHtcbiAgICAgICAgICAgIHJldHVybiBUT05DbGllbnRFcnJvci5hY2NvdW50TWlzc2luZyhcbiAgICAgICAgICAgICAgICBhd2FpdCB0aGlzLmdldENsaWVudEluZm8oKSxcbiAgICAgICAgICAgICAgICBhZGRyZXNzLFxuICAgICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICAgICAgb3JpZ2luYWxfZXJyb3I6IGVycm9yLFxuICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICApO1xuICAgICAgICB9XG4gICAgICAgIGNvbnN0IGFjY291bnQgPSBhY2NvdW50c1swXTtcbiAgICAgICAgcmVtb3ZlVHlwZU5hbWUoYWNjb3VudCk7XG4gICAgICAgIHRyeSB7XG4gICAgICAgICAgICBhd2FpdCB0aGlzLnJlcXVlc3RDb3JlKCdjb250cmFjdHMucmVzb2x2ZS5lcnJvcicsIHtcbiAgICAgICAgICAgICAgICBhZGRyZXNzLFxuICAgICAgICAgICAgICAgIGFjY291bnQsXG4gICAgICAgICAgICAgICAgbWVzc2FnZUJhc2U2NCxcbiAgICAgICAgICAgICAgICB0aW1lLFxuICAgICAgICAgICAgICAgIG1haW5FcnJvcjogZXJyb3IsXG4gICAgICAgICAgICB9KTtcbiAgICAgICAgfSBjYXRjaCAocmVzb2x2ZWQpIHtcbiAgICAgICAgICAgIHJldHVybiByZXNvbHZlZDtcbiAgICAgICAgfVxuICAgICAgICByZXR1cm4gZXJyb3I7XG4gICAgfVxuXG4gICAgYXN5bmMgaXNEZXBsb3llZChhZGRyZXNzOiBzdHJpbmcsIHBhcmVudFNwYW4/OiAoU3BhbiB8IFNwYW5Db250ZXh0KSk6IFByb21pc2U8Ym9vbD4ge1xuICAgICAgICBjb25zdCBhY2NvdW50ID0gYXdhaXQgdGhpcy5xdWVyaWVzLmFjY291bnRzLnF1ZXJ5KHtcbiAgICAgICAgICAgIGZpbHRlcjoge1xuICAgICAgICAgICAgICAgIGlkOiB7IGVxOiBhZGRyZXNzIH0sXG4gICAgICAgICAgICAgICAgYWNjX3R5cGU6IHsgZXE6IFFBY2NvdW50VHlwZS5hY3RpdmUgfSxcbiAgICAgICAgICAgIH0sXG4gICAgICAgICAgICByZXN1bHQ6ICdpZCcsXG4gICAgICAgICAgICBwYXJlbnRTcGFuLFxuICAgICAgICB9KTtcbiAgICAgICAgcmV0dXJuIGFjY291bnQubGVuZ3RoID4gMDtcbiAgICB9XG5cbiAgICBhc3luYyBwcm9jZXNzRGVwbG95TWVzc2FnZShcbiAgICAgICAgbWVzc2FnZTogVE9OQ29udHJhY3REZXBsb3lNZXNzYWdlLFxuICAgICAgICBwYXJlbnRTcGFuPzogKFNwYW4gfCBTcGFuQ29udGV4dCksXG4gICAgICAgIHJldHJ5SW5kZXg/OiBudW1iZXIsXG4gICAgKTogUHJvbWlzZTxUT05Db250cmFjdERlcGxveVJlc3VsdD4ge1xuICAgICAgICB0aGlzLmNvbmZpZy5sb2coJ3Byb2Nlc3NEZXBsb3lNZXNzYWdlJywgbWVzc2FnZSk7XG4gICAgICAgIGlmIChhd2FpdCB0aGlzLmlzRGVwbG95ZWQobWVzc2FnZS5hZGRyZXNzLCBwYXJlbnRTcGFuKSkge1xuICAgICAgICAgICAgcmV0dXJuIHtcbiAgICAgICAgICAgICAgICBhZGRyZXNzOiBtZXNzYWdlLmFkZHJlc3MsXG4gICAgICAgICAgICAgICAgYWxyZWFkeURlcGxveWVkOiB0cnVlLFxuICAgICAgICAgICAgfTtcbiAgICAgICAgfVxuICAgICAgICBjb25zdCBwcm9jZXNzaW5nID0gYXdhaXQgdGhpcy5zZW5kTWVzc2FnZShtZXNzYWdlLm1lc3NhZ2UsIHBhcmVudFNwYW4pO1xuICAgICAgICByZXR1cm4gdGhpcy53YWl0Rm9yRGVwbG95VHJhbnNhY3Rpb24obWVzc2FnZSwgcHJvY2Vzc2luZywgcGFyZW50U3Bhbik7XG4gICAgfVxuXG4gICAgYXN5bmMgd2FpdEZvckRlcGxveVRyYW5zYWN0aW9uKFxuICAgICAgICBkZXBsb3lNZXNzYWdlOiBUT05Db250cmFjdERlcGxveU1lc3NhZ2UsXG4gICAgICAgIG1lc3NhZ2VQcm9jZXNzaW5nU3RhdGU6IFRPTk1lc3NhZ2VQcm9jZXNzaW5nU3RhdGUsXG4gICAgICAgIHBhcmVudFNwYW4/OiAoU3BhbiB8IFNwYW5Db250ZXh0KSxcbiAgICAgICAgaW5maW5pdGVXYWl0PzogYm9vbGVhbixcbiAgICApOiBQcm9taXNlPFRPTkNvbnRyYWN0RGVwbG95UmVzdWx0PiB7XG4gICAgICAgIGNvbnN0IG1lc3NhZ2UgPSBkZXBsb3lNZXNzYWdlLm1lc3NhZ2U7XG4gICAgICAgIGNvbnN0IHJlc3VsdCA9IGF3YWl0IHRoaXMud2FpdEZvclRyYW5zYWN0aW9uKHtcbiAgICAgICAgICAgIG1lc3NhZ2UsXG4gICAgICAgICAgICBtZXNzYWdlUHJvY2Vzc2luZ1N0YXRlLFxuICAgICAgICAgICAgcGFyZW50U3BhbixcbiAgICAgICAgICAgIGluZmluaXRlV2FpdCxcbiAgICAgICAgfSk7XG4gICAgICAgIHJldHVybiB7XG4gICAgICAgICAgICAuLi5yZXN1bHQsXG4gICAgICAgICAgICBhZGRyZXNzOiBtZXNzYWdlLmFkZHJlc3MsXG4gICAgICAgICAgICBhbHJlYWR5RGVwbG95ZWQ6IGZhbHNlLFxuICAgICAgICB9O1xuICAgIH1cblxuXG4gICAgYXN5bmMgcHJvY2Vzc1J1bk1lc3NhZ2UoXG4gICAgICAgIHJ1bk1lc3NhZ2U6IFRPTkNvbnRyYWN0UnVuTWVzc2FnZSxcbiAgICAgICAgcGFyZW50U3Bhbj86IChTcGFuIHwgU3BhbkNvbnRleHQpLFxuICAgICk6IFByb21pc2U8VE9OQ29udHJhY3RSdW5SZXN1bHQ+IHtcbiAgICAgICAgdGhpcy5jb25maWcubG9nKCdwcm9jZXNzUnVuTWVzc2FnZScsIHJ1bk1lc3NhZ2UpO1xuICAgICAgICBjb25zdCBwcm9jZXNzaW5nID0gYXdhaXQgdGhpcy5zZW5kTWVzc2FnZShydW5NZXNzYWdlLm1lc3NhZ2UsIHBhcmVudFNwYW4pO1xuICAgICAgICByZXR1cm4gdGhpcy53YWl0Rm9yUnVuVHJhbnNhY3Rpb24ocnVuTWVzc2FnZSwgcHJvY2Vzc2luZywgcGFyZW50U3Bhbik7XG4gICAgfVxuXG4gICAgYXN5bmMgd2FpdEZvclJ1blRyYW5zYWN0aW9uKFxuICAgICAgICBydW5NZXNzYWdlOiBUT05Db250cmFjdFJ1bk1lc3NhZ2UsXG4gICAgICAgIG1lc3NhZ2VQcm9jZXNzaW5nU3RhdGU6IFRPTk1lc3NhZ2VQcm9jZXNzaW5nU3RhdGUsXG4gICAgICAgIHBhcmVudFNwYW4/OiAoU3BhbiB8IFNwYW5Db250ZXh0KSxcbiAgICAgICAgaW5maW5pdGVXYWl0PzogYm9vbGVhbixcbiAgICApOiBQcm9taXNlPFRPTkNvbnRyYWN0UnVuUmVzdWx0PiB7XG4gICAgICAgIHJldHVybiB0aGlzLndhaXRGb3JUcmFuc2FjdGlvbih7XG4gICAgICAgICAgICBtZXNzYWdlOiBydW5NZXNzYWdlLm1lc3NhZ2UsXG4gICAgICAgICAgICBtZXNzYWdlUHJvY2Vzc2luZ1N0YXRlLFxuICAgICAgICAgICAgcGFyZW50U3BhbixcbiAgICAgICAgICAgIGluZmluaXRlV2FpdCxcbiAgICAgICAgICAgIGFiaTogcnVuTWVzc2FnZS5hYmksXG4gICAgICAgICAgICBmdW5jdGlvbk5hbWU6IHJ1bk1lc3NhZ2UuZnVuY3Rpb25OYW1lLFxuICAgICAgICB9KTtcbiAgICB9XG5cbiAgICAvKipcbiAgICAgKiBEZXByZWNhdGVkLiBVc2UgYHJ1bk1lc3NhZ2VMb2NhbGAgaW5zdGVhZC5cbiAgICAgKiBAcGFyYW0gcGFyYW1zXG4gICAgICogQHBhcmFtIHdhaXRQYXJhbXNcbiAgICAgKiBAcGFyYW0gcGFyZW50U3BhblxuICAgICAqIEByZXR1cm5zIHtQcm9taXNlPHVua25vd24+fVxuICAgICAqL1xuICAgIGFzeW5jIHByb2Nlc3NSdW5NZXNzYWdlTG9jYWwoXG4gICAgICAgIHBhcmFtczogVE9OQ29udHJhY3RSdW5NZXNzYWdlLFxuICAgICAgICB3YWl0UGFyYW1zPzogVE9OQ29udHJhY3RBY2NvdW50V2FpdFBhcmFtcyxcbiAgICAgICAgcGFyZW50U3Bhbj86IChTcGFuIHwgU3BhbkNvbnRleHQpLFxuICAgICk6IFByb21pc2U8VE9OQ29udHJhY3RSdW5SZXN1bHQ+IHtcbiAgICAgICAgdGhpcy5jb25maWcubG9nKCdwcm9jZXNzUnVuTWVzc2FnZUxvY2FsJywgcGFyYW1zKTtcblxuICAgICAgICBjb25zdCBhY2NvdW50ID0gYXdhaXQgdGhpcy5nZXRBY2NvdW50KHBhcmFtcy5hZGRyZXNzLCB0cnVlLCB3YWl0UGFyYW1zLCBwYXJlbnRTcGFuKTtcblxuICAgICAgICByZXR1cm4gdGhpcy5yZXF1ZXN0Q29yZSgnY29udHJhY3RzLnJ1bi5sb2NhbC5tc2cnLCB7XG4gICAgICAgICAgICBhZGRyZXNzOiBwYXJhbXMuYWRkcmVzcyxcbiAgICAgICAgICAgIGFjY291bnQsXG4gICAgICAgICAgICBhYmk6IHBhcmFtcy5hYmksXG4gICAgICAgICAgICBmdW5jdGlvbk5hbWU6IHBhcmFtcy5mdW5jdGlvbk5hbWUsXG4gICAgICAgICAgICBtZXNzYWdlQmFzZTY0OiBwYXJhbXMubWVzc2FnZS5tZXNzYWdlQm9keUJhc2U2NCxcbiAgICAgICAgfSk7XG4gICAgfVxuXG4gICAgLy8gRmVlIGNhbGN1bGF0aW9uXG5cbiAgICBiaWdCYWxhbmNlID0gJzB4MTAwMDAwMDAwMDAwMDAnO1xuXG4gICAgYXN5bmMgY2FsY1J1bkZlZXMoXG4gICAgICAgIHBhcmFtczogVE9OQ29udHJhY3RDYWxjUnVuRmVlUGFyYW1zLFxuICAgICAgICBwYXJlbnRTcGFuPzogKFNwYW4gfCBTcGFuQ29udGV4dCksXG4gICAgKTogUHJvbWlzZTxUT05Db250cmFjdENhbGNGZWVSZXN1bHQ+IHtcbiAgICAgICAgdGhpcy5jb25maWcubG9nKCdjYWxjUnVuRmVlcycsIHBhcmFtcyk7XG5cbiAgICAgICAgY29uc3QgYWNjb3VudCA9IGF3YWl0IHRoaXMuZ2V0QWNjb3VudChwYXJhbXMuYWRkcmVzcywgdHJ1ZSwgcGFyYW1zLndhaXRQYXJhbXMsIHBhcmVudFNwYW4pO1xuXG4gICAgICAgIGlmIChwYXJhbXMuZW11bGF0ZUJhbGFuY2UpIHtcbiAgICAgICAgICAgIGFjY291bnQuYmFsYW5jZSA9IHRoaXMuYmlnQmFsYW5jZTtcbiAgICAgICAgfVxuXG4gICAgICAgIHJldHVybiB0aGlzLnJlcXVlc3RDb3JlKCdjb250cmFjdHMucnVuLmZlZScsIHtcbiAgICAgICAgICAgIGFkZHJlc3M6IHBhcmFtcy5hZGRyZXNzLFxuICAgICAgICAgICAgYWNjb3VudCxcbiAgICAgICAgICAgIGFiaTogcGFyYW1zLmFiaSxcbiAgICAgICAgICAgIGZ1bmN0aW9uTmFtZTogcGFyYW1zLmZ1bmN0aW9uTmFtZSxcbiAgICAgICAgICAgIGlucHV0OiBwYXJhbXMuaW5wdXQsXG4gICAgICAgICAgICBrZXlQYWlyOiBwYXJhbXMua2V5UGFpcixcbiAgICAgICAgfSk7XG4gICAgfVxuXG4gICAgYXN5bmMgY2FsY0RlcGxveUZlZXMoXG4gICAgICAgIHBhcmFtczogVE9OQ29udHJhY3RDYWxjRGVwbG95RmVlUGFyYW1zLFxuICAgICAgICBwYXJlbnRTcGFuPzogKFNwYW4gfCBTcGFuQ29udGV4dCksXG4gICAgKTogUHJvbWlzZTxUT05Db250cmFjdENhbGNGZWVSZXN1bHQ+IHtcbiAgICAgICAgdGhpcy5jb25maWcubG9nKCdjYWxjRGVwbG95RmVlcycsIHBhcmFtcyk7XG5cbiAgICAgICAgY29uc3QgbWVzc2FnZSA9IGF3YWl0IHRoaXMuY3JlYXRlRGVwbG95TWVzc2FnZShwYXJhbXMpO1xuXG4gICAgICAgIHJldHVybiB0aGlzLmNhbGNNc2dQcm9jZXNzRmVlcyh7XG4gICAgICAgICAgICBhZGRyZXNzOiBtZXNzYWdlLmFkZHJlc3MsXG4gICAgICAgICAgICBtZXNzYWdlOiBtZXNzYWdlLm1lc3NhZ2UsXG4gICAgICAgICAgICBlbXVsYXRlQmFsYW5jZTogcGFyYW1zLmVtdWxhdGVCYWxhbmNlLFxuICAgICAgICAgICAgbmV3QWNjb3VudDogcGFyYW1zLm5ld0FjY291bnQsXG4gICAgICAgIH0sIHBhcmVudFNwYW4pO1xuICAgIH1cblxuICAgIGFzeW5jIGNhbGNNc2dQcm9jZXNzRmVlcyhcbiAgICAgICAgcGFyYW1zOiBUT05Db250cmFjdENhbGNNc2dQcm9jZXNzaW5nRmVlc1BhcmFtcyxcbiAgICAgICAgcGFyZW50U3Bhbj86IChTcGFuIHwgU3BhbkNvbnRleHQpLFxuICAgICk6IFByb21pc2U8VE9OQ29udHJhY3RDYWxjRmVlUmVzdWx0PiB7XG4gICAgICAgIHRoaXMuY29uZmlnLmxvZygnY2FsY01zZ1Byb2Nlc3NGZWVzJywgcGFyYW1zKTtcblxuICAgICAgICBsZXQgYWNjb3VudDogUUFjY291bnQgPSB7XG4gICAgICAgICAgICBiYWxhbmNlOiB0aGlzLmJpZ0JhbGFuY2UsXG4gICAgICAgICAgICBpZDogcGFyYW1zLmFkZHJlc3MsXG4gICAgICAgICAgICBsYXN0X3BhaWQ6IE1hdGguZmxvb3IoRGF0ZS5ub3coKSAvIDEwMDApLFxuICAgICAgICB9O1xuXG4gICAgICAgIGlmICghcGFyYW1zLm5ld0FjY291bnQpIHtcbiAgICAgICAgICAgIGFjY291bnQgPSBhd2FpdCB0aGlzLmdldEFjY291bnQocGFyYW1zLmFkZHJlc3MsIGZhbHNlLCBwYXJhbXMud2FpdFBhcmFtcywgcGFyZW50U3Bhbik7XG4gICAgICAgIH1cblxuICAgICAgICBpZiAocGFyYW1zLmVtdWxhdGVCYWxhbmNlKSB7XG4gICAgICAgICAgICBhY2NvdW50LmJhbGFuY2UgPSB0aGlzLmJpZ0JhbGFuY2U7XG4gICAgICAgIH1cblxuICAgICAgICByZXR1cm4gdGhpcy5yZXF1ZXN0Q29yZSgnY29udHJhY3RzLnJ1bi5mZWUubXNnJywge1xuICAgICAgICAgICAgYWRkcmVzczogcGFyYW1zLmFkZHJlc3MsXG4gICAgICAgICAgICBhY2NvdW50LFxuICAgICAgICAgICAgbWVzc2FnZUJhc2U2NDogcGFyYW1zLm1lc3NhZ2UubWVzc2FnZUJvZHlCYXNlNjQsXG4gICAgICAgIH0pO1xuICAgIH1cblxuICAgIC8vIEFkZHJlc3MgcHJvY2Vzc2luZ1xuXG4gICAgYXN5bmMgY29udmVydEFkZHJlc3MoXG4gICAgICAgIHBhcmFtczogVE9OQ29udHJhY3RDb252ZXJ0QWRkcmVzc1BhcmFtcyxcbiAgICApOiBQcm9taXNlPFRPTkNvbnRyYWN0Q29udmVydEFkZHJlc3NSZXN1bHQ+IHtcbiAgICAgICAgcmV0dXJuIHRoaXMucmVxdWVzdENvcmUoJ2NvbnRyYWN0cy5hZGRyZXNzLmNvbnZlcnQnLCBwYXJhbXMpO1xuICAgIH1cblxuICAgIC8vIEludGVybmFsc1xuXG4gICAgYXN5bmMgaW50ZXJuYWxEZXBsb3lOYXRpdmUocGFyYW1zOiBUT05Db250cmFjdERlcGxveVBhcmFtcyk6IFByb21pc2U8VE9OQ29udHJhY3REZXBsb3lSZXN1bHQ+IHtcbiAgICAgICAgcmV0dXJuIHRoaXMucmVxdWVzdENvcmUoJ2NvbnRyYWN0cy5kZXBsb3knLCB7XG4gICAgICAgICAgICBhYmk6IHBhcmFtcy5wYWNrYWdlLmFiaSxcbiAgICAgICAgICAgIGNvbnN0cnVjdG9ySGVhZGVyOiBwYXJhbXMuY29uc3RydWN0b3JIZWFkZXIsXG4gICAgICAgICAgICBjb25zdHJ1Y3RvclBhcmFtczogcGFyYW1zLmNvbnN0cnVjdG9yUGFyYW1zLFxuICAgICAgICAgICAgaW5pdFBhcmFtczogcGFyYW1zLmluaXRQYXJhbXMsXG4gICAgICAgICAgICBpbWFnZUJhc2U2NDogcGFyYW1zLnBhY2thZ2UuaW1hZ2VCYXNlNjQsXG4gICAgICAgICAgICBrZXlQYWlyOiBwYXJhbXMua2V5UGFpcixcbiAgICAgICAgfSk7XG4gICAgfVxuXG5cbiAgICBhc3luYyBpbnRlcm5hbFJ1bk5hdGl2ZShwYXJhbXM6IFRPTkNvbnRyYWN0UnVuUGFyYW1zKTogUHJvbWlzZTxUT05Db250cmFjdFJ1blJlc3VsdD4ge1xuICAgICAgICByZXR1cm4gdGhpcy5yZXF1ZXN0Q29yZSgnY29udHJhY3RzLnJ1bicsIHtcbiAgICAgICAgICAgIGFkZHJlc3M6IHBhcmFtcy5hZGRyZXNzLFxuICAgICAgICAgICAgYWJpOiBwYXJhbXMuYWJpLFxuICAgICAgICAgICAgZnVuY3Rpb25OYW1lOiBwYXJhbXMuZnVuY3Rpb25OYW1lLFxuICAgICAgICAgICAgaGVhZGVyOiBwYXJhbXMuaGVhZGVyLFxuICAgICAgICAgICAgaW5wdXQ6IHBhcmFtcy5pbnB1dCxcbiAgICAgICAgICAgIGtleVBhaXI6IHBhcmFtcy5rZXlQYWlyLFxuICAgICAgICB9KTtcbiAgICB9XG5cblxuICAgIGFzeW5jIHJldHJ5Q2FsbChjYWxsOiAoaW5kZXg6IG51bWJlcikgPT4gUHJvbWlzZTxhbnk+KTogUHJvbWlzZTxhbnk+IHtcbiAgICAgICAgY29uc3QgcmV0cmllc0NvdW50ID0gdGhpcy5jb25maWcubWVzc2FnZVJldHJpZXNDb3VudCgpO1xuICAgICAgICBmb3IgKGxldCBpID0gMDsgaSA8PSByZXRyaWVzQ291bnQ7IGkgKz0gMSkge1xuICAgICAgICAgICAgaWYgKGkgPiAwKSB7XG4gICAgICAgICAgICAgICAgdGhpcy5jb25maWcubG9nKGBSZXRyeSAjJHtpfWApO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgdHJ5IHtcbiAgICAgICAgICAgICAgICByZXR1cm4gYXdhaXQgY2FsbChpKTtcbiAgICAgICAgICAgIH0gY2F0Y2ggKGVycm9yKSB7XG4gICAgICAgICAgICAgICAgLy8gcmV0cnkgaWYgbWVzc2FnZSBleHBpcmVkIG9yIGlmIHJlc29sdmluZyByZXR1cm5lZCB0aGF0IG1lc3NhZ2UgZXhwaXJlZC9yZXBsYXlcbiAgICAgICAgICAgICAgICAvLyBwcm90ZWN0aW9uIGVycm9yIG9yIGlmIHRyYW5zYWN0aW9uIHdpdGggbWVzc2FnZSBleHBpcmVkL3JlcGxheSBwcm90ZWN0aW9uIGVycm9yXG4gICAgICAgICAgICAgICAgLy8gcmV0dXJuZWRcbiAgICAgICAgICAgICAgICBjb25zdCB1c2VSZXRyeSA9IGVycm9yLmNvZGUgPT09IFRPTkVycm9yQ29kZS5NRVNTQUdFX0VYUElSRURcbiAgICAgICAgICAgICAgICAgICAgfHwgVE9OQ2xpZW50RXJyb3IuaXNPcmlnaW5hbENvbnRyYWN0RXJyb3IoXG4gICAgICAgICAgICAgICAgICAgICAgICBlcnJvcixcbiAgICAgICAgICAgICAgICAgICAgICAgIFRPTkNvbnRyYWN0RXhpdENvZGUuUkVQTEFZX1BST1RFQ1RJT04sXG4gICAgICAgICAgICAgICAgICAgIClcbiAgICAgICAgICAgICAgICAgICAgfHwgVE9OQ2xpZW50RXJyb3IuaXNPcmlnaW5hbENvbnRyYWN0RXJyb3IoXG4gICAgICAgICAgICAgICAgICAgICAgICBlcnJvcixcbiAgICAgICAgICAgICAgICAgICAgICAgIFRPTkNvbnRyYWN0RXhpdENvZGUuTUVTU0FHRV9FWFBJUkVELFxuICAgICAgICAgICAgICAgICAgICApXG4gICAgICAgICAgICAgICAgICAgIHx8IFRPTkNsaWVudEVycm9yLmlzUmVzb2x2ZWRDb250cmFjdEVycm9yQWZ0ZXJFeHBpcmUoXG4gICAgICAgICAgICAgICAgICAgICAgICBlcnJvcixcbiAgICAgICAgICAgICAgICAgICAgICAgIFRPTkNvbnRyYWN0RXhpdENvZGUuUkVQTEFZX1BST1RFQ1RJT04sXG4gICAgICAgICAgICAgICAgICAgIClcbiAgICAgICAgICAgICAgICAgICAgfHwgVE9OQ2xpZW50RXJyb3IuaXNSZXNvbHZlZENvbnRyYWN0RXJyb3JBZnRlckV4cGlyZShcbiAgICAgICAgICAgICAgICAgICAgICAgIGVycm9yLFxuICAgICAgICAgICAgICAgICAgICAgICAgVE9OQ29udHJhY3RFeGl0Q29kZS5NRVNTQUdFX0VYUElSRUQsXG4gICAgICAgICAgICAgICAgICAgICk7XG4gICAgICAgICAgICAgICAgaWYgKCF1c2VSZXRyeSB8fCBpID09PSByZXRyaWVzQ291bnQpIHtcbiAgICAgICAgICAgICAgICAgICAgdGhyb3cgZXJyb3I7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICAgIHRocm93IFRPTkNsaWVudEVycm9yLmludGVybmFsRXJyb3IoXG4gICAgICAgICAgICBhd2FpdCB0aGlzLmdldENsaWVudEluZm8oKSxcbiAgICAgICAgICAgICdBbGwgcmV0cnkgYXR0ZW1wdHMgZmFpbGVkJyxcbiAgICAgICAgKTtcbiAgICB9XG5cblxuICAgIGFzeW5jIGludGVybmFsRGVwbG95SnMoXG4gICAgICAgIHBhcmFtczogVE9OQ29udHJhY3REZXBsb3lQYXJhbXMsXG4gICAgICAgIHBhcmVudFNwYW4/OiAoU3BhbiB8IFNwYW5Db250ZXh0KSxcbiAgICApOiBQcm9taXNlPFRPTkNvbnRyYWN0RGVwbG95UmVzdWx0PiB7XG4gICAgICAgIHRoaXMuY29uZmlnLmxvZygnRGVwbG95IHN0YXJ0Jyk7XG4gICAgICAgIHJldHVybiB0aGlzLnJldHJ5Q2FsbChhc3luYyAocmV0cnlJbmRleCkgPT4ge1xuICAgICAgICAgICAgY29uc3QgZGVwbG95TWVzc2FnZSA9IGF3YWl0IHRoaXMuY3JlYXRlRGVwbG95TWVzc2FnZShwYXJhbXMsIHJldHJ5SW5kZXgpO1xuICAgICAgICAgICAgaWYgKGF3YWl0IHRoaXMuaXNEZXBsb3llZChkZXBsb3lNZXNzYWdlLmFkZHJlc3MsIHBhcmVudFNwYW4pKSB7XG4gICAgICAgICAgICAgICAgcmV0dXJuIHtcbiAgICAgICAgICAgICAgICAgICAgYWRkcmVzczogZGVwbG95TWVzc2FnZS5hZGRyZXNzLFxuICAgICAgICAgICAgICAgICAgICBhbHJlYWR5RGVwbG95ZWQ6IHRydWUsXG4gICAgICAgICAgICAgICAgfTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGNvbnN0IHByb2Nlc3NpbmcgPSBhd2FpdCB0aGlzLnNlbmRNZXNzYWdlKGRlcGxveU1lc3NhZ2UubWVzc2FnZSwgcGFyZW50U3Bhbik7XG4gICAgICAgICAgICByZXR1cm4gdGhpcy53YWl0Rm9yRGVwbG95VHJhbnNhY3Rpb24oZGVwbG95TWVzc2FnZSwgcHJvY2Vzc2luZywgcGFyZW50U3Bhbik7XG4gICAgICAgIH0pO1xuICAgIH1cblxuXG4gICAgYXN5bmMgaW50ZXJuYWxSdW5KcyhcbiAgICAgICAgcGFyYW1zOiBUT05Db250cmFjdFJ1blBhcmFtcyxcbiAgICAgICAgcGFyZW50U3Bhbj86IChTcGFuIHwgU3BhbkNvbnRleHQpLFxuICAgICk6IFByb21pc2U8VE9OQ29udHJhY3RSdW5SZXN1bHQ+IHtcbiAgICAgICAgdGhpcy5jb25maWcubG9nKCdSdW4gc3RhcnQnKTtcbiAgICAgICAgcmV0dXJuIHRoaXMucmV0cnlDYWxsKGFzeW5jIChyZXRyeUluZGV4KSA9PiB7XG4gICAgICAgICAgICBjb25zdCBydW5NZXNzYWdlID0gYXdhaXQgdGhpcy5jcmVhdGVSdW5NZXNzYWdlKHBhcmFtcywgcmV0cnlJbmRleCk7XG4gICAgICAgICAgICBjb25zdCBwcm9jZXNzaW5nID0gYXdhaXQgdGhpcy5zZW5kTWVzc2FnZShydW5NZXNzYWdlLm1lc3NhZ2UsIHBhcmVudFNwYW4pO1xuICAgICAgICAgICAgcmV0dXJuIHRoaXMud2FpdEZvclJ1blRyYW5zYWN0aW9uKHJ1bk1lc3NhZ2UsIHByb2Nlc3NpbmcsIHBhcmVudFNwYW4pO1xuICAgICAgICB9KTtcbiAgICB9XG5cblxuICAgIGFzeW5jIGdldEFjY291bnQoXG4gICAgICAgIGFkZHJlc3M6IHN0cmluZyxcbiAgICAgICAgYWN0aXZlOiBib29sZWFuLFxuICAgICAgICB3YWl0UGFyYW1zPzogVE9OQ29udHJhY3RBY2NvdW50V2FpdFBhcmFtcyxcbiAgICAgICAgcGFyZW50U3Bhbj86IChTcGFuIHwgU3BhbkNvbnRleHQpLFxuICAgICk6IFByb21pc2U8UUFjY291bnQ+IHtcbiAgICAgICAgY29uc3QgZmlsdGVyOiB7IFtzdHJpbmddOiBhbnkgfSA9IHtcbiAgICAgICAgICAgIGlkOiB7IGVxOiBhZGRyZXNzIH0sXG4gICAgICAgIH07XG4gICAgICAgIGlmICh3YWl0UGFyYW1zICYmIHdhaXRQYXJhbXMudHJhbnNhY3Rpb25MdCkge1xuICAgICAgICAgICAgZmlsdGVyLmxhc3RfdHJhbnNfbHQgPSB7IGdlOiB3YWl0UGFyYW1zLnRyYW5zYWN0aW9uTHQgfTtcbiAgICAgICAgfVxuICAgICAgICBpZiAoYWN0aXZlKSB7XG4gICAgICAgICAgICBmaWx0ZXIuYWNjX3R5cGUgPSB7IGVxOiBRQWNjb3VudFR5cGUuYWN0aXZlIH07XG4gICAgICAgIH1cblxuICAgICAgICB0aGlzLmNvbmZpZy5sb2coJ2dldEFjY291bnQuIEZpbHRlcicsIGZpbHRlcik7XG4gICAgICAgIGNvbnN0IGFjY291bnRzID0gYXdhaXQgdGhpcy5xdWVyaWVzLmFjY291bnRzLnF1ZXJ5KHtcbiAgICAgICAgICAgIGZpbHRlcixcbiAgICAgICAgICAgIHJlc3VsdDogJ2lkIGFjY190eXBlIGJvYyBjb2RlX2hhc2ggZGF0YV9oYXNoIGJhbGFuY2UgYmFsYW5jZV9vdGhlciB7IGN1cnJlbmN5IHZhbHVlIH0gbGFzdF9wYWlkJyxcbiAgICAgICAgICAgIC4uLih3YWl0UGFyYW1zICYmIHdhaXRQYXJhbXMudGltZW91dCA/IHsgdGltZW91dDogd2FpdFBhcmFtcy50aW1lb3V0IH0gOiB7fSksXG4gICAgICAgICAgICBwYXJlbnRTcGFuLFxuICAgICAgICB9KTtcbiAgICAgICAgaWYgKGFjY291bnRzLmxlbmd0aCA9PT0gMCkge1xuICAgICAgICAgICAgdGhyb3cgVE9OQ2xpZW50RXJyb3IuYWNjb3VudE1pc3NpbmcoXG4gICAgICAgICAgICAgICAgYXdhaXQgdGhpcy5nZXRDbGllbnRJbmZvKCksXG4gICAgICAgICAgICAgICAgYWRkcmVzcyxcbiAgICAgICAgICAgICk7XG4gICAgICAgIH1cbiAgICAgICAgY29uc3QgYWNjb3VudCA9IGFjY291bnRzWzBdO1xuICAgICAgICByZW1vdmVUeXBlTmFtZShhY2NvdW50KTtcbiAgICAgICAgdGhpcy5jb25maWcubG9nKCdnZXRBY2NvdW50LiBBY2NvdW50IHJlY2VpdmVkJywgYWNjb3VudCk7XG4gICAgICAgIHJldHVybiBhY2NvdW50O1xuICAgIH1cblxuICAgIGFzeW5jIGludGVybmFsUnVuTG9jYWxKcyhcbiAgICAgICAgcGFyYW1zOiBUT05Db250cmFjdFJ1bkxvY2FsUGFyYW1zLFxuICAgICAgICBwYXJlbnRTcGFuPzogKFNwYW4gfCBTcGFuQ29udGV4dCksXG4gICAgKTogUHJvbWlzZTxUT05Db250cmFjdFJ1bkxvY2FsUmVzdWx0PiB7XG4gICAgICAgIGNvbnN0IGFkZHJlc3MgPSBwYXJhbXMuYWRkcmVzcztcbiAgICAgICAgaWYgKCFhZGRyZXNzKSB7XG4gICAgICAgICAgICB0aHJvdyBUT05DbGllbnRFcnJvci5hZGRyZXNzUmVxdWlyZWRGb3JSdW5Mb2NhbChhd2FpdCB0aGlzLmdldENsaWVudEluZm8oKSk7XG4gICAgICAgIH1cbiAgICAgICAgY29uc3QgYWNjb3VudCA9IHBhcmFtcy5hY2NvdW50IHx8IChhd2FpdCB0aGlzLmdldEFjY291bnQoXG4gICAgICAgICAgICBhZGRyZXNzLFxuICAgICAgICAgICAgZmFsc2UsXG4gICAgICAgICAgICBwYXJhbXMud2FpdFBhcmFtcyxcbiAgICAgICAgICAgIHBhcmVudFNwYW4sXG4gICAgICAgICkpO1xuICAgICAgICBpZiAoIWFjY291bnQuY29kZV9oYXNoKSB7XG4gICAgICAgICAgICB0aHJvdyBUT05DbGllbnRFcnJvci5hY2NvdW50Q29kZU1pc3NpbmcoXG4gICAgICAgICAgICAgICAgYXdhaXQgdGhpcy5nZXRDbGllbnRJbmZvKCksXG4gICAgICAgICAgICAgICAgYWRkcmVzcyxcbiAgICAgICAgICAgICAgICAoYWNjb3VudDogYW55KS5iYWxhbmNlLFxuICAgICAgICAgICAgKTtcbiAgICAgICAgfVxuICAgICAgICByZXR1cm4gdGhpcy5yZXF1ZXN0Q29yZSgnY29udHJhY3RzLnJ1bi5sb2NhbCcsIHtcbiAgICAgICAgICAgIGFkZHJlc3MsXG4gICAgICAgICAgICBhY2NvdW50LFxuICAgICAgICAgICAgYWJpOiBwYXJhbXMuYWJpLFxuICAgICAgICAgICAgZnVuY3Rpb25OYW1lOiBwYXJhbXMuZnVuY3Rpb25OYW1lLFxuICAgICAgICAgICAgaW5wdXQ6IHBhcmFtcy5pbnB1dCxcbiAgICAgICAgICAgIGtleVBhaXI6IHBhcmFtcy5rZXlQYWlyLFxuICAgICAgICAgICAgZnVsbFJ1bjogcGFyYW1zLmZ1bGxSdW4sXG4gICAgICAgIH0pO1xuICAgIH1cblxuICAgIGFzeW5jIGludGVybmFsUnVuTWVzc2FnZUxvY2FsSnMoXG4gICAgICAgIHBhcmFtczogVE9OQ29udHJhY3RSdW5NZXNzYWdlTG9jYWxQYXJhbXMsXG4gICAgICAgIHBhcmVudFNwYW4/OiAoU3BhbiB8IFNwYW5Db250ZXh0KSxcbiAgICApOiBQcm9taXNlPFRPTkNvbnRyYWN0UnVuTG9jYWxSZXN1bHQ+IHtcbiAgICAgICAgY29uc3QgYWRkcmVzcyA9IHBhcmFtcy5hZGRyZXNzO1xuICAgICAgICBpZiAoIWFkZHJlc3MpIHtcbiAgICAgICAgICAgIHRocm93IFRPTkNsaWVudEVycm9yLmFkZHJlc3NSZXF1aXJlZEZvclJ1bkxvY2FsKGF3YWl0IHRoaXMuZ2V0Q2xpZW50SW5mbygpKTtcbiAgICAgICAgfVxuICAgICAgICBjb25zdCBhY2NvdW50ID0gcGFyYW1zLmFjY291bnQgfHwgKGF3YWl0IHRoaXMuZ2V0QWNjb3VudChcbiAgICAgICAgICAgIGFkZHJlc3MsXG4gICAgICAgICAgICBmYWxzZSxcbiAgICAgICAgICAgIHBhcmFtcy53YWl0UGFyYW1zLFxuICAgICAgICAgICAgcGFyZW50U3BhbixcbiAgICAgICAgKSk7XG4gICAgICAgIGlmICghYWNjb3VudC5jb2RlX2hhc2gpIHtcbiAgICAgICAgICAgIHRocm93IFRPTkNsaWVudEVycm9yLmFjY291bnRDb2RlTWlzc2luZyhcbiAgICAgICAgICAgICAgICBhd2FpdCB0aGlzLmdldENsaWVudEluZm8oKSxcbiAgICAgICAgICAgICAgICBhZGRyZXNzLFxuICAgICAgICAgICAgICAgIChhY2NvdW50OiBhbnkpLmJhbGFuY2UsXG4gICAgICAgICAgICApO1xuICAgICAgICB9XG4gICAgICAgIHJldHVybiB0aGlzLnJlcXVlc3RDb3JlKCdjb250cmFjdHMucnVuLmxvY2FsLm1zZycsIHtcbiAgICAgICAgICAgIGFkZHJlc3MsXG4gICAgICAgICAgICBhY2NvdW50LFxuICAgICAgICAgICAgYWJpOiBwYXJhbXMuYWJpLFxuICAgICAgICAgICAgZnVuY3Rpb25OYW1lOiBwYXJhbXMuZnVuY3Rpb25OYW1lLFxuICAgICAgICAgICAgbWVzc2FnZUJhc2U2NDogcGFyYW1zLm1lc3NhZ2VCb2R5QmFzZTY0LFxuICAgICAgICAgICAgZnVsbFJ1bjogcGFyYW1zLmZ1bGxSdW4sXG4gICAgICAgIH0pO1xuICAgIH1cbn1cblxuVE9OQ29udHJhY3RzTW9kdWxlLm1vZHVsZU5hbWUgPSAnVE9OQ29udHJhY3RzTW9kdWxlJztcblxuY29uc3QgdHJhbnNhY3Rpb25EZXRhaWxzID0gYFxuICAgIGlkXG4gICAgaW5fbXNnXG4gICAgdHJfdHlwZVxuICAgIHN0YXR1c1xuICAgIGluX21zZ1xuICAgIG91dF9tc2dzXG4gICAgYmxvY2tfaWRcbiAgICBub3dcbiAgICBhYm9ydGVkXG4gICAgbHRcbiAgICB0b3RhbF9mZWVzXG4gICAgc3RvcmFnZSB7XG4gICAgICAgIHN0YXR1c19jaGFuZ2VcbiAgICAgICAgc3RvcmFnZV9mZWVzX2NvbGxlY3RlZFxuICAgIH1cbiAgICBjb21wdXRlIHtcbiAgICAgICAgY29tcHV0ZV90eXBlXG4gICAgICAgIHNraXBwZWRfcmVhc29uXG4gICAgICAgIHN1Y2Nlc3NcbiAgICAgICAgZXhpdF9jb2RlXG4gICAgICAgIGdhc19mZWVzXG4gICAgICAgIGdhc191c2VkXG4gICAgfVxuICAgIGFjdGlvbiB7XG4gICAgICAgIHN1Y2Nlc3NcbiAgICAgICAgdmFsaWRcbiAgICAgICAgcmVzdWx0X2NvZGVcbiAgICAgICAgbm9fZnVuZHNcbiAgICAgICAgdG90YWxfZndkX2ZlZXNcbiAgICAgICAgdG90YWxfYWN0aW9uX2ZlZXNcbiAgICB9XG4gICAgb3V0X21lc3NhZ2VzIHtcbiAgICAgICAgaWRcbiAgICAgICAgbXNnX3R5cGVcbiAgICAgICAgYm9keVxuICAgICAgICB2YWx1ZVxuICAgIH1cbiAgIGA7XG5cbmNvbnN0IEJMT0NLX0ZJRUxEUyA9IGBcbiAgICBpZFxuICAgIGdlbl91dGltZVxuICAgIGFmdGVyX3NwbGl0XG4gICAgd29ya2NoYWluX2lkXG4gICAgc2hhcmRcbiAgICBpbl9tc2dfZGVzY3Ige1xuICAgICAgICBtc2dfaWRcbiAgICAgICAgdHJhbnNhY3Rpb25faWRcbiAgICB9XG5gO1xuXG5jb25zdCBUUkFOU0FDVElPTl9GSUVMRFNfT1JESU5BUlkgPSBgXG4gICAgaWRcbiAgICBhYm9ydGVkXG4gICAgY29tcHV0ZSB7XG4gICAgICAgIHNraXBwZWRfcmVhc29uXG4gICAgICAgIGV4aXRfY29kZVxuICAgICAgICBzdWNjZXNzXG4gICAgICAgIGdhc19mZWVzXG4gICAgfVxuICAgIHN0b3JhZ2Uge1xuICAgICAgIHN0YXR1c19jaGFuZ2VcbiAgICAgICBzdG9yYWdlX2ZlZXNfY29sbGVjdGVkXG4gICAgfVxuICAgIGFjdGlvbiB7XG4gICAgICAgIHN1Y2Nlc3NcbiAgICAgICAgdmFsaWRcbiAgICAgICAgbm9fZnVuZHNcbiAgICAgICAgcmVzdWx0X2NvZGVcbiAgICAgICAgdG90YWxfZndkX2ZlZXNcbiAgICAgICAgdG90YWxfYWN0aW9uX2ZlZXNcbiAgICB9XG4gICAgaW5fbXNnXG4gICAgbm93XG4gICAgb3V0X21zZ3NcbiAgICBvdXRfbWVzc2FnZXMge1xuICAgICAgICBpZFxuICAgICAgICBib2R5XG4gICAgICAgIG1zZ190eXBlXG4gICAgICAgIHZhbHVlXG4gICAgfVxuICAgIHN0YXR1c1xuICAgIHRvdGFsX2ZlZXNcbmA7XG4iXX0=