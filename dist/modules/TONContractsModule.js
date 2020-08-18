"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.removeProps = removeProps;
exports["default"] = exports.QBounceType = exports.QSkipReason = exports.QComputeType = exports.QAccountStatusChange = exports.QAccountStatus = exports.QTransactionProcessingStatus = exports.QTransactionType = exports.QAccountType = exports.QSplitType = exports.QBlockProcessingStatus = exports.QMessageProcessingStatus = exports.QMessageType = exports.QOutMsgType = exports.QInMsgType = exports.TONClientStorageStatus = exports.TONClientComputeSkippedStatus = exports.TONClientTransactionPhase = exports.TONAddressStringVariant = void 0;

var _regenerator = _interopRequireDefault(require("@babel/runtime/regenerator"));

var _opentracing = require("opentracing");

var _TONClientError = require("../TONClientError");

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

                _context11.t0 = _TONClientError.TONClientError;
                _context11.next = 8;
                return this.completeErrorData();

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

                _context11.t2 = _TONClientError.TONClientError;
                _context11.t3 = address;
                _context11.t4 = account.balance;
                _context11.next = 19;
                return this.completeErrorData();

              case 19:
                _context11.t5 = _context11.sent;
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
          throw _TONClientError.TONClientError.invalidCons(_TONClientError.emptyTONErrorData);
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

                _context30.t0 = _TONClientError.TONClientError;
                _context30.next = 5;
                return this.completeErrorData({
                  address: params.address,
                  message_id: params.messageId
                });

              case 5:
                _context30.t1 = _context30.sent;
                throw _context30.t0.sendNodeRequestFailed.call(_context30.t0, 'Message already expired', _context30.t1);

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
                _context30.t4 = _TONClientError.TONClientError;
                _context30.next = 17;
                return this.completeErrorData();

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

                _context34.t0 = _TONClientError.TONClientError;
                _context34.t1 = MASTERCHAIN_ID;
                _context34.next = 11;
                return this.completeErrorData({
                  address: address
                });

              case 11:
                _context34.t2 = _context34.sent;
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

                _context34.t3 = _TONClientError.TONClientError;
                _context34.t4 = workchain;
                _context34.next = 23;
                return this.completeErrorData({
                  address: address
                });

              case 23:
                _context34.t5 = _context34.sent;
                throw _context34.t3.noBlocks.call(_context34.t3, _context34.t4, _context34.t5);

              case 25:
                if (!(workchainLastBlock.after_merge || workchainLastBlock.shard !== '8000000000000000')) {
                  _context34.next = 32;
                  break;
                }

                _context34.t6 = _TONClientError.TONClientError;
                _context34.t7 = MASTERCHAIN_ID;
                _context34.next = 30;
                return this.completeErrorData({
                  address: address
                });

              case 30:
                _context34.t8 = _context34.sent;
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

                _context34.t9 = _TONClientError.TONClientError;
                _context34.next = 39;
                return this.completeErrorData({
                  address: address
                });

              case 39:
                _context34.t10 = _context34.sent;
                throw _context34.t9.invalidBlockchain.call(_context34.t9, 'No starting Node SE block found', _context34.t10);

              case 41:
                return _context34.abrupt("return", workchainLastBlock.id);

              case 42:
                shards = masterchainLastBlock === null || masterchainLastBlock === void 0 ? void 0 : (_masterchainLastBlock = masterchainLastBlock.master) === null || _masterchainLastBlock === void 0 ? void 0 : _masterchainLastBlock.shard_hashes;

                if (!(!shards || shards.length === 0)) {
                  _context34.next = 49;
                  break;
                }

                _context34.t11 = _TONClientError.TONClientError;
                _context34.next = 47;
                return this.completeErrorData({
                  address: address
                });

              case 47:
                _context34.t12 = _context34.sent;
                throw _context34.t11.invalidBlockchain.call(_context34.t11, 'No `shard_hashes` field in masterchain block', _context34.t12);

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

                _context34.t13 = _TONClientError.TONClientError;
                _context34.next = 57;
                return this.completeErrorData({
                  address: address
                });

              case 57:
                _context34.t14 = _context34.sent;
                throw _context34.t13.invalidBlockchain.call(_context34.t13, 'No `root_hash` field in shard descr', _context34.t14);

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
                  _context37.next = 73;
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
                timeReport.push("Block [".concat(block.id || '', "] ") + "has been received: ".concat(end - start, " ms, ") + "client time: ".concat(Math.round(end / 1000), ", ") + "gen_utime: ".concat(block.gen_utime || 0));
                _context37.next = 39;
                break;

              case 26:
                _context37.prev = 26;
                _context37.t0 = _context37["catch"](17);
                this.config.log('Block waiting failed: ', _context37.t0);

                if (infiniteWait) {
                  _context37.next = 38;
                  break;
                }

                resolvedError = _context37.t0;

                if (!(_context37.t0.code === _TONClientError.TONErrorCode.WAIT_FOR_TIMEOUT)) {
                  _context37.next = 37;
                  break;
                }

                _context37.t1 = _TONClientError.TONClientError;
                _context37.next = 35;
                return this.completeErrorData({
                  address: address,
                  message_id: messageId,
                  block_id: processing.lastBlockId,
                  timeout: timeout,
                  message_processing_state: processing,
                  expire: expire,
                  sending_time: processing.sendingTime
                });

              case 35:
                _context37.t2 = _context37.sent;
                resolvedError = _context37.t1.networkSilent.call(_context37.t1, _context37.t2);

              case 37:
                throw resolvedError;

              case 38:
                this.config.log('Retry waiting.');

              case 39:
                if (!block) {
                  _context37.next = 71;
                  break;
                }

                processing.lastBlockId = block.id || '';
                inMsg = (block.in_msg_descr || []).find(function (x) {
                  return x.msg_id === messageId;
                });

                if (!inMsg) {
                  _context37.next = 58;
                  break;
                }

                transactionId = inMsg.transaction_id;

                if (transactionId) {
                  _context37.next = 50;
                  break;
                }

                _context37.t3 = _TONClientError.TONClientError;
                _context37.next = 48;
                return this.completeErrorData({
                  address: address,
                  message_id: messageId
                });

              case 48:
                _context37.t4 = _context37.sent;
                throw _context37.t3.invalidBlockchain.call(_context37.t3, 'No field `transaction_id` in block', _context37.t4);

              case 50:
                trStart = Date.now();
                _context37.next = 53;
                return this.queries.transactions.waitFor({
                  filter: {
                    id: {
                      eq: transactionId
                    }
                  },
                  result: TRANSACTION_FIELDS_ORDINARY,
                  timeout: _TONQueriesModule.MAX_TIMEOUT
                });

              case 53:
                transaction = _context37.sent;
                traceMessage(this.config.tracer, messageId, 'transactionReceived', {
                  transactionId: transactionId
                });
                timeReport.push("Transaction [".concat(transactionId, "] has been received: ").concat(Date.now() - trStart, " ms"));
                _context37.next = 71;
                break;

              case 58:
                if (!((block.gen_utime || 0) > stopTime)) {
                  _context37.next = 71;
                  break;
                }

                if (!expire) {
                  _context37.next = 66;
                  break;
                }

                traceMessage(this.config.tracer, messageId, 'messageExpired', {});
                _context37.t5 = _TONClientError.TONClientError;
                _context37.next = 64;
                return this.completeErrorData({
                  address: address,
                  message_id: messageId,
                  sending_time: processing.sendingTime,
                  expire: stopTime,
                  block_time: block.gen_utime,
                  block_id: processing.lastBlockId
                });

              case 64:
                _context37.t6 = _context37.sent;
                throw _context37.t5.messageExpired.call(_context37.t5, _context37.t6);

              case 66:
                _context37.t7 = _TONClientError.TONClientError;
                _context37.next = 69;
                return this.completeErrorData({
                  address: address,
                  message_id: messageId,
                  sending_time: processing.sendingTime,
                  timeout: timeout,
                  message_processing_state: processing
                });

              case 69:
                _context37.t8 = _context37.sent;
                throw _context37.t7.transactionWaitTimeout.call(_context37.t7, _context37.t8);

              case 71:
                _context37.next = 13;
                break;

              case 73:
                timeReport.splice(0, 0, "Transaction waiting time: ".concat(Date.now() - totalStart, " ms"));
                this.config.log(timeReport.join('\n'));
                _context37.next = 87;
                break;

              case 77:
                _context37.prev = 77;
                _context37.t9 = _context37["catch"](8);
                this.config.log('[waitForTransaction]', 'FAILED', _context37.t9);

                if (!(_context37.t9.code === _TONClientError.TONErrorCode.MESSAGE_EXPIRED || _context37.t9.code === _TONClientError.TONErrorCode.TRANSACTION_WAIT_TIMEOUT)) {
                  _context37.next = 86;
                  break;
                }

                _context37.next = 83;
                return this.resolveDetailedError(_context37.t9, params.message.messageBodyBase64, processing.sendingTime, address);

              case 83:
                throw _context37.sent;

              case 86:
                throw _context37.t9;

              case 87:
                return _context37.abrupt("return", this.processTransaction(address, transaction, params.abi, params.functionName));

              case 88:
              case "end":
                return _context37.stop();
            }
          }
        }, _callee37, this, [[8, 77], [17, 26]]);
      }));

      function waitForTransaction(_x57) {
        return _waitForTransaction.apply(this, arguments);
      }

      return waitForTransaction;
    }()
  }, {
    key: "processTransaction",
    value: function () {
      var _processTransaction = _asyncToGenerator( /*#__PURE__*/_regenerator["default"].mark(function _callee38(address, transaction, abi, functionName) {
        var result, accounts;
        return _regenerator["default"].wrap(function _callee38$(_context38) {
          while (1) {
            switch (_context38.prev = _context38.next) {
              case 0:
                _context38.prev = 0;
                _context38.next = 3;
                return this.requestCore('contracts.process.transaction', {
                  transaction: transaction,
                  abi: abi,
                  functionName: functionName,
                  address: address
                });

              case 3:
                result = _context38.sent;
                return _context38.abrupt("return", _objectSpread({
                  transaction: transaction
                }, result));

              case 7:
                _context38.prev = 7;
                _context38.t0 = _context38["catch"](0);
                _context38.next = 11;
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
                accounts = _context38.sent;

                if (!(accounts.length === 0)) {
                  _context38.next = 19;
                  break;
                }

                _context38.t1 = _TONClientError.TONClientError;
                _context38.t2 = address;
                _context38.next = 17;
                return this.completeErrorData({
                  original_error: _context38.t0,
                  address: address,
                  function_name: functionName
                });

              case 17:
                _context38.t3 = _context38.sent;
                throw _context38.t1.accountMissing.call(_context38.t1, _context38.t2, _context38.t3);

              case 19:
                throw _context38.t0;

              case 20:
              case "end":
                return _context38.stop();
            }
          }
        }, _callee38, this, [[0, 7]]);
      }));

      function processTransaction(_x58, _x59, _x60, _x61) {
        return _processTransaction.apply(this, arguments);
      }

      return processTransaction;
    }()
  }, {
    key: "resolveDetailedError",
    value: function () {
      var _resolveDetailedError = _asyncToGenerator( /*#__PURE__*/_regenerator["default"].mark(function _callee39(error, messageBase64, time, address) {
        var accounts, account;
        return _regenerator["default"].wrap(function _callee39$(_context39) {
          while (1) {
            switch (_context39.prev = _context39.next) {
              case 0:
                _context39.next = 2;
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
                accounts = _context39.sent;

                if (!(accounts.length === 0)) {
                  _context39.next = 10;
                  break;
                }

                _context39.t0 = _TONClientError.TONClientError;
                _context39.t1 = address;
                _context39.next = 8;
                return this.completeErrorData({
                  address: address,
                  original_error: error
                });

              case 8:
                _context39.t2 = _context39.sent;
                return _context39.abrupt("return", _context39.t0.accountMissing.call(_context39.t0, _context39.t1, _context39.t2));

              case 10:
                account = accounts[0];
                removeTypeName(account);
                _context39.prev = 12;
                _context39.next = 15;
                return this.requestCore('contracts.resolve.error', {
                  address: address,
                  account: account,
                  messageBase64: messageBase64,
                  time: time,
                  mainError: error
                });

              case 15:
                _context39.next = 20;
                break;

              case 17:
                _context39.prev = 17;
                _context39.t3 = _context39["catch"](12);
                return _context39.abrupt("return", _context39.t3);

              case 20:
                return _context39.abrupt("return", error);

              case 21:
              case "end":
                return _context39.stop();
            }
          }
        }, _callee39, this, [[12, 17]]);
      }));

      function resolveDetailedError(_x62, _x63, _x64, _x65) {
        return _resolveDetailedError.apply(this, arguments);
      }

      return resolveDetailedError;
    }()
  }, {
    key: "isDeployed",
    value: function () {
      var _isDeployed = _asyncToGenerator( /*#__PURE__*/_regenerator["default"].mark(function _callee40(address, parentSpan) {
        var account;
        return _regenerator["default"].wrap(function _callee40$(_context40) {
          while (1) {
            switch (_context40.prev = _context40.next) {
              case 0:
                _context40.next = 2;
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
                account = _context40.sent;
                return _context40.abrupt("return", account.length > 0);

              case 4:
              case "end":
                return _context40.stop();
            }
          }
        }, _callee40, this);
      }));

      function isDeployed(_x66, _x67) {
        return _isDeployed.apply(this, arguments);
      }

      return isDeployed;
    }()
  }, {
    key: "processDeployMessage",
    value: function () {
      var _processDeployMessage = _asyncToGenerator( /*#__PURE__*/_regenerator["default"].mark(function _callee41(message, parentSpan, retryIndex) {
        var processing;
        return _regenerator["default"].wrap(function _callee41$(_context41) {
          while (1) {
            switch (_context41.prev = _context41.next) {
              case 0:
                this.config.log('processDeployMessage', message);
                _context41.next = 3;
                return this.isDeployed(message.address, parentSpan);

              case 3:
                if (!_context41.sent) {
                  _context41.next = 5;
                  break;
                }

                return _context41.abrupt("return", {
                  address: message.address,
                  alreadyDeployed: true
                });

              case 5:
                _context41.next = 7;
                return this.sendMessage(message.message, parentSpan);

              case 7:
                processing = _context41.sent;
                return _context41.abrupt("return", this.waitForDeployTransaction(message, processing, parentSpan));

              case 9:
              case "end":
                return _context41.stop();
            }
          }
        }, _callee41, this);
      }));

      function processDeployMessage(_x68, _x69, _x70) {
        return _processDeployMessage.apply(this, arguments);
      }

      return processDeployMessage;
    }()
  }, {
    key: "waitForDeployTransaction",
    value: function () {
      var _waitForDeployTransaction = _asyncToGenerator( /*#__PURE__*/_regenerator["default"].mark(function _callee42(deployMessage, messageProcessingState, parentSpan, infiniteWait) {
        var message, result;
        return _regenerator["default"].wrap(function _callee42$(_context42) {
          while (1) {
            switch (_context42.prev = _context42.next) {
              case 0:
                message = deployMessage.message;
                _context42.next = 3;
                return this.waitForTransaction({
                  message: message,
                  messageProcessingState: messageProcessingState,
                  parentSpan: parentSpan,
                  infiniteWait: infiniteWait
                });

              case 3:
                result = _context42.sent;
                return _context42.abrupt("return", _objectSpread(_objectSpread({}, result), {}, {
                  address: message.address,
                  alreadyDeployed: false
                }));

              case 5:
              case "end":
                return _context42.stop();
            }
          }
        }, _callee42, this);
      }));

      function waitForDeployTransaction(_x71, _x72, _x73, _x74) {
        return _waitForDeployTransaction.apply(this, arguments);
      }

      return waitForDeployTransaction;
    }()
  }, {
    key: "processRunMessage",
    value: function () {
      var _processRunMessage = _asyncToGenerator( /*#__PURE__*/_regenerator["default"].mark(function _callee43(runMessage, parentSpan) {
        var processing;
        return _regenerator["default"].wrap(function _callee43$(_context43) {
          while (1) {
            switch (_context43.prev = _context43.next) {
              case 0:
                this.config.log('processRunMessage', runMessage);
                _context43.next = 3;
                return this.sendMessage(runMessage.message, parentSpan);

              case 3:
                processing = _context43.sent;
                return _context43.abrupt("return", this.waitForRunTransaction(runMessage, processing, parentSpan));

              case 5:
              case "end":
                return _context43.stop();
            }
          }
        }, _callee43, this);
      }));

      function processRunMessage(_x75, _x76) {
        return _processRunMessage.apply(this, arguments);
      }

      return processRunMessage;
    }()
  }, {
    key: "waitForRunTransaction",
    value: function () {
      var _waitForRunTransaction = _asyncToGenerator( /*#__PURE__*/_regenerator["default"].mark(function _callee44(runMessage, messageProcessingState, parentSpan, infiniteWait) {
        return _regenerator["default"].wrap(function _callee44$(_context44) {
          while (1) {
            switch (_context44.prev = _context44.next) {
              case 0:
                return _context44.abrupt("return", this.waitForTransaction({
                  message: runMessage.message,
                  messageProcessingState: messageProcessingState,
                  parentSpan: parentSpan,
                  infiniteWait: infiniteWait,
                  abi: runMessage.abi,
                  functionName: runMessage.functionName
                }));

              case 1:
              case "end":
                return _context44.stop();
            }
          }
        }, _callee44, this);
      }));

      function waitForRunTransaction(_x77, _x78, _x79, _x80) {
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
      var _processRunMessageLocal = _asyncToGenerator( /*#__PURE__*/_regenerator["default"].mark(function _callee45(params, waitParams, parentSpan) {
        var account;
        return _regenerator["default"].wrap(function _callee45$(_context45) {
          while (1) {
            switch (_context45.prev = _context45.next) {
              case 0:
                this.config.log('processRunMessageLocal', params);
                _context45.next = 3;
                return this.getAccount(params.address, true, waitParams, parentSpan);

              case 3:
                account = _context45.sent;
                return _context45.abrupt("return", this.requestCore('contracts.run.local.msg', {
                  address: params.address,
                  account: account,
                  abi: params.abi,
                  functionName: params.functionName,
                  messageBase64: params.message.messageBodyBase64
                }));

              case 5:
              case "end":
                return _context45.stop();
            }
          }
        }, _callee45, this);
      }));

      function processRunMessageLocal(_x81, _x82, _x83) {
        return _processRunMessageLocal.apply(this, arguments);
      }

      return processRunMessageLocal;
    }() // Fee calculation

  }, {
    key: "calcRunFees",
    value: function () {
      var _calcRunFees = _asyncToGenerator( /*#__PURE__*/_regenerator["default"].mark(function _callee46(params, parentSpan) {
        var account;
        return _regenerator["default"].wrap(function _callee46$(_context46) {
          while (1) {
            switch (_context46.prev = _context46.next) {
              case 0:
                this.config.log('calcRunFees', params);
                _context46.next = 3;
                return this.getAccount(params.address, true, params.waitParams, parentSpan);

              case 3:
                account = _context46.sent;

                if (params.emulateBalance) {
                  account.balance = this.bigBalance;
                }

                return _context46.abrupt("return", this.requestCore('contracts.run.fee', {
                  address: params.address,
                  account: account,
                  abi: params.abi,
                  functionName: params.functionName,
                  input: params.input,
                  keyPair: params.keyPair
                }));

              case 6:
              case "end":
                return _context46.stop();
            }
          }
        }, _callee46, this);
      }));

      function calcRunFees(_x84, _x85) {
        return _calcRunFees.apply(this, arguments);
      }

      return calcRunFees;
    }()
  }, {
    key: "calcDeployFees",
    value: function () {
      var _calcDeployFees = _asyncToGenerator( /*#__PURE__*/_regenerator["default"].mark(function _callee47(params, parentSpan) {
        var message;
        return _regenerator["default"].wrap(function _callee47$(_context47) {
          while (1) {
            switch (_context47.prev = _context47.next) {
              case 0:
                this.config.log('calcDeployFees', params);
                _context47.next = 3;
                return this.createDeployMessage(params);

              case 3:
                message = _context47.sent;
                return _context47.abrupt("return", this.calcMsgProcessFees({
                  address: message.address,
                  message: message.message,
                  emulateBalance: params.emulateBalance,
                  newAccount: params.newAccount
                }, parentSpan));

              case 5:
              case "end":
                return _context47.stop();
            }
          }
        }, _callee47, this);
      }));

      function calcDeployFees(_x86, _x87) {
        return _calcDeployFees.apply(this, arguments);
      }

      return calcDeployFees;
    }()
  }, {
    key: "calcMsgProcessFees",
    value: function () {
      var _calcMsgProcessFees = _asyncToGenerator( /*#__PURE__*/_regenerator["default"].mark(function _callee48(params, parentSpan) {
        var account;
        return _regenerator["default"].wrap(function _callee48$(_context48) {
          while (1) {
            switch (_context48.prev = _context48.next) {
              case 0:
                this.config.log('calcMsgProcessFees', params);
                account = {
                  balance: this.bigBalance,
                  id: params.address,
                  last_paid: Math.floor(Date.now() / 1000)
                };

                if (params.newAccount) {
                  _context48.next = 6;
                  break;
                }

                _context48.next = 5;
                return this.getAccount(params.address, false, params.waitParams, parentSpan);

              case 5:
                account = _context48.sent;

              case 6:
                if (params.emulateBalance) {
                  account.balance = this.bigBalance;
                }

                return _context48.abrupt("return", this.requestCore('contracts.run.fee.msg', {
                  address: params.address,
                  account: account,
                  messageBase64: params.message.messageBodyBase64
                }));

              case 8:
              case "end":
                return _context48.stop();
            }
          }
        }, _callee48, this);
      }));

      function calcMsgProcessFees(_x88, _x89) {
        return _calcMsgProcessFees.apply(this, arguments);
      }

      return calcMsgProcessFees;
    }() // Address processing

  }, {
    key: "convertAddress",
    value: function () {
      var _convertAddress = _asyncToGenerator( /*#__PURE__*/_regenerator["default"].mark(function _callee49(params) {
        return _regenerator["default"].wrap(function _callee49$(_context49) {
          while (1) {
            switch (_context49.prev = _context49.next) {
              case 0:
                return _context49.abrupt("return", this.requestCore('contracts.address.convert', params));

              case 1:
              case "end":
                return _context49.stop();
            }
          }
        }, _callee49, this);
      }));

      function convertAddress(_x90) {
        return _convertAddress.apply(this, arguments);
      }

      return convertAddress;
    }() // Internals

  }, {
    key: "internalDeployNative",
    value: function () {
      var _internalDeployNative = _asyncToGenerator( /*#__PURE__*/_regenerator["default"].mark(function _callee50(params) {
        return _regenerator["default"].wrap(function _callee50$(_context50) {
          while (1) {
            switch (_context50.prev = _context50.next) {
              case 0:
                return _context50.abrupt("return", this.requestCore('contracts.deploy', {
                  abi: params["package"].abi,
                  constructorHeader: params.constructorHeader,
                  constructorParams: params.constructorParams,
                  initParams: params.initParams,
                  imageBase64: params["package"].imageBase64,
                  keyPair: params.keyPair
                }));

              case 1:
              case "end":
                return _context50.stop();
            }
          }
        }, _callee50, this);
      }));

      function internalDeployNative(_x91) {
        return _internalDeployNative.apply(this, arguments);
      }

      return internalDeployNative;
    }()
  }, {
    key: "internalRunNative",
    value: function () {
      var _internalRunNative = _asyncToGenerator( /*#__PURE__*/_regenerator["default"].mark(function _callee51(params) {
        return _regenerator["default"].wrap(function _callee51$(_context51) {
          while (1) {
            switch (_context51.prev = _context51.next) {
              case 0:
                return _context51.abrupt("return", this.requestCore('contracts.run', {
                  address: params.address,
                  abi: params.abi,
                  functionName: params.functionName,
                  header: params.header,
                  input: params.input,
                  keyPair: params.keyPair
                }));

              case 1:
              case "end":
                return _context51.stop();
            }
          }
        }, _callee51, this);
      }));

      function internalRunNative(_x92) {
        return _internalRunNative.apply(this, arguments);
      }

      return internalRunNative;
    }()
  }, {
    key: "retryCall",
    value: function () {
      var _retryCall = _asyncToGenerator( /*#__PURE__*/_regenerator["default"].mark(function _callee52(call) {
        var retriesCount, i, useRetry;
        return _regenerator["default"].wrap(function _callee52$(_context52) {
          while (1) {
            switch (_context52.prev = _context52.next) {
              case 0:
                retriesCount = this.config.messageRetriesCount();
                i = 0;

              case 2:
                if (!(i <= retriesCount)) {
                  _context52.next = 18;
                  break;
                }

                if (i > 0) {
                  this.config.log("Retry #".concat(i));
                }

                _context52.prev = 4;
                _context52.next = 7;
                return call(i);

              case 7:
                return _context52.abrupt("return", _context52.sent);

              case 10:
                _context52.prev = 10;
                _context52.t0 = _context52["catch"](4);
                // retry if message expired or if resolving returned that message expired/replay
                // protection error or if transaction with message expired/replay protection error
                // returned
                useRetry = _context52.t0.code === _TONClientError.TONErrorCode.MESSAGE_EXPIRED || _TONClientError.TONClientError.isOriginalContractError(_context52.t0, _TONClientError.TONContractExitCode.REPLAY_PROTECTION) || _TONClientError.TONClientError.isOriginalContractError(_context52.t0, _TONClientError.TONContractExitCode.MESSAGE_EXPIRED) || _TONClientError.TONClientError.isResolvedContractErrorAfterExpire(_context52.t0, _TONClientError.TONContractExitCode.REPLAY_PROTECTION) || _TONClientError.TONClientError.isResolvedContractErrorAfterExpire(_context52.t0, _TONClientError.TONContractExitCode.MESSAGE_EXPIRED);

                if (!(!useRetry || i === retriesCount)) {
                  _context52.next = 15;
                  break;
                }

                throw _context52.t0;

              case 15:
                i += 1;
                _context52.next = 2;
                break;

              case 18:
                _context52.t1 = _TONClientError.TONClientError;
                _context52.next = 21;
                return this.completeErrorData();

              case 21:
                _context52.t2 = _context52.sent;
                throw _context52.t1.internalError.call(_context52.t1, 'All retry attempts failed', _context52.t2);

              case 23:
              case "end":
                return _context52.stop();
            }
          }
        }, _callee52, this, [[4, 10]]);
      }));

      function retryCall(_x93) {
        return _retryCall.apply(this, arguments);
      }

      return retryCall;
    }()
  }, {
    key: "internalDeployJs",
    value: function () {
      var _internalDeployJs = _asyncToGenerator( /*#__PURE__*/_regenerator["default"].mark(function _callee54(params, parentSpan) {
        var _this7 = this;

        return _regenerator["default"].wrap(function _callee54$(_context54) {
          while (1) {
            switch (_context54.prev = _context54.next) {
              case 0:
                this.config.log('Deploy start');
                return _context54.abrupt("return", this.retryCall( /*#__PURE__*/function () {
                  var _ref6 = _asyncToGenerator( /*#__PURE__*/_regenerator["default"].mark(function _callee53(retryIndex) {
                    var deployMessage, processing;
                    return _regenerator["default"].wrap(function _callee53$(_context53) {
                      while (1) {
                        switch (_context53.prev = _context53.next) {
                          case 0:
                            _context53.next = 2;
                            return _this7.createDeployMessage(params, retryIndex);

                          case 2:
                            deployMessage = _context53.sent;
                            _context53.next = 5;
                            return _this7.isDeployed(deployMessage.address, parentSpan);

                          case 5:
                            if (!_context53.sent) {
                              _context53.next = 7;
                              break;
                            }

                            return _context53.abrupt("return", {
                              address: deployMessage.address,
                              alreadyDeployed: true
                            });

                          case 7:
                            _context53.next = 9;
                            return _this7.sendMessage(deployMessage.message, parentSpan);

                          case 9:
                            processing = _context53.sent;
                            return _context53.abrupt("return", _this7.waitForDeployTransaction(deployMessage, processing, parentSpan));

                          case 11:
                          case "end":
                            return _context53.stop();
                        }
                      }
                    }, _callee53);
                  }));

                  return function (_x96) {
                    return _ref6.apply(this, arguments);
                  };
                }()));

              case 2:
              case "end":
                return _context54.stop();
            }
          }
        }, _callee54, this);
      }));

      function internalDeployJs(_x94, _x95) {
        return _internalDeployJs.apply(this, arguments);
      }

      return internalDeployJs;
    }()
  }, {
    key: "internalRunJs",
    value: function () {
      var _internalRunJs = _asyncToGenerator( /*#__PURE__*/_regenerator["default"].mark(function _callee56(params, parentSpan) {
        var _this8 = this;

        return _regenerator["default"].wrap(function _callee56$(_context56) {
          while (1) {
            switch (_context56.prev = _context56.next) {
              case 0:
                this.config.log('Run start');
                return _context56.abrupt("return", this.retryCall( /*#__PURE__*/function () {
                  var _ref7 = _asyncToGenerator( /*#__PURE__*/_regenerator["default"].mark(function _callee55(retryIndex) {
                    var runMessage, processing;
                    return _regenerator["default"].wrap(function _callee55$(_context55) {
                      while (1) {
                        switch (_context55.prev = _context55.next) {
                          case 0:
                            _context55.next = 2;
                            return _this8.createRunMessage(params, retryIndex);

                          case 2:
                            runMessage = _context55.sent;
                            _context55.next = 5;
                            return _this8.sendMessage(runMessage.message, parentSpan);

                          case 5:
                            processing = _context55.sent;
                            return _context55.abrupt("return", _this8.waitForRunTransaction(runMessage, processing, parentSpan));

                          case 7:
                          case "end":
                            return _context55.stop();
                        }
                      }
                    }, _callee55);
                  }));

                  return function (_x99) {
                    return _ref7.apply(this, arguments);
                  };
                }()));

              case 2:
              case "end":
                return _context56.stop();
            }
          }
        }, _callee56, this);
      }));

      function internalRunJs(_x97, _x98) {
        return _internalRunJs.apply(this, arguments);
      }

      return internalRunJs;
    }()
  }, {
    key: "getAccount",
    value: function () {
      var _getAccount = _asyncToGenerator( /*#__PURE__*/_regenerator["default"].mark(function _callee57(address, active, waitParams, parentSpan) {
        var filter, accounts, account;
        return _regenerator["default"].wrap(function _callee57$(_context57) {
          while (1) {
            switch (_context57.prev = _context57.next) {
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
                _context57.next = 6;
                return this.queries.accounts.query(_objectSpread(_objectSpread({
                  filter: filter,
                  result: 'id acc_type boc code_hash data_hash balance balance_other { currency value } last_paid'
                }, waitParams && waitParams.timeout ? {
                  timeout: waitParams.timeout
                } : {}), {}, {
                  parentSpan: parentSpan
                }));

              case 6:
                accounts = _context57.sent;

                if (!(accounts.length === 0)) {
                  _context57.next = 14;
                  break;
                }

                _context57.t0 = _TONClientError.TONClientError;
                _context57.t1 = address;
                _context57.next = 12;
                return this.completeErrorData({
                  address: address
                });

              case 12:
                _context57.t2 = _context57.sent;
                throw _context57.t0.accountMissing.call(_context57.t0, _context57.t1, _context57.t2);

              case 14:
                account = accounts[0];
                removeTypeName(account);
                this.config.log('getAccount. Account received', account);
                return _context57.abrupt("return", account);

              case 18:
              case "end":
                return _context57.stop();
            }
          }
        }, _callee57, this);
      }));

      function getAccount(_x100, _x101, _x102, _x103) {
        return _getAccount.apply(this, arguments);
      }

      return getAccount;
    }()
  }, {
    key: "internalRunLocalJs",
    value: function () {
      var _internalRunLocalJs = _asyncToGenerator( /*#__PURE__*/_regenerator["default"].mark(function _callee58(params, parentSpan) {
        var address, account;
        return _regenerator["default"].wrap(function _callee58$(_context58) {
          while (1) {
            switch (_context58.prev = _context58.next) {
              case 0:
                address = params.address;

                if (address) {
                  _context58.next = 7;
                  break;
                }

                _context58.t0 = _TONClientError.TONClientError;
                _context58.next = 5;
                return this.completeErrorData({
                  address: address,
                  function_name: params.functionName
                });

              case 5:
                _context58.t1 = _context58.sent;

                _context58.t0.addressRequiredForRunLocal.call(_context58.t0, _context58.t1);

              case 7:
                _context58.t2 = params.account;

                if (_context58.t2) {
                  _context58.next = 12;
                  break;
                }

                _context58.next = 11;
                return this.getAccount(address, false, params.waitParams, parentSpan);

              case 11:
                _context58.t2 = _context58.sent;

              case 12:
                account = _context58.t2;

                if (account.code_hash) {
                  _context58.next = 21;
                  break;
                }

                _context58.t3 = _TONClientError.TONClientError;
                _context58.t4 = address;
                _context58.t5 = account.balance;
                _context58.next = 19;
                return this.completeErrorData({
                  address: address,
                  function_name: params.functionName
                });

              case 19:
                _context58.t6 = _context58.sent;
                throw _context58.t3.accountCodeMissing.call(_context58.t3, _context58.t4, _context58.t5, _context58.t6);

              case 21:
                return _context58.abrupt("return", this.requestCore('contracts.run.local', {
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
                return _context58.stop();
            }
          }
        }, _callee58, this);
      }));

      function internalRunLocalJs(_x104, _x105) {
        return _internalRunLocalJs.apply(this, arguments);
      }

      return internalRunLocalJs;
    }()
  }, {
    key: "internalRunMessageLocalJs",
    value: function () {
      var _internalRunMessageLocalJs = _asyncToGenerator( /*#__PURE__*/_regenerator["default"].mark(function _callee59(params, parentSpan) {
        var address, account;
        return _regenerator["default"].wrap(function _callee59$(_context59) {
          while (1) {
            switch (_context59.prev = _context59.next) {
              case 0:
                address = params.address;

                if (address) {
                  _context59.next = 7;
                  break;
                }

                _context59.t0 = _TONClientError.TONClientError;
                _context59.next = 5;
                return this.completeErrorData({
                  address: address,
                  function_name: params.functionName
                });

              case 5:
                _context59.t1 = _context59.sent;
                throw _context59.t0.addressRequiredForRunLocal.call(_context59.t0, _context59.t1);

              case 7:
                _context59.t2 = params.account;

                if (_context59.t2) {
                  _context59.next = 12;
                  break;
                }

                _context59.next = 11;
                return this.getAccount(address, false, params.waitParams, parentSpan);

              case 11:
                _context59.t2 = _context59.sent;

              case 12:
                account = _context59.t2;

                if (account.code_hash) {
                  _context59.next = 21;
                  break;
                }

                _context59.t3 = _TONClientError.TONClientError;
                _context59.t4 = address;
                _context59.t5 = account.balance;
                _context59.next = 19;
                return this.completeErrorData({
                  address: address,
                  function_name: params.functionName
                });

              case 19:
                _context59.t6 = _context59.sent;
                throw _context59.t3.accountCodeMissing.call(_context59.t3, _context59.t4, _context59.t5, _context59.t6);

              case 21:
                return _context59.abrupt("return", this.requestCore('contracts.run.local.msg', {
                  address: address,
                  account: account,
                  abi: params.abi,
                  functionName: params.functionName,
                  messageBase64: params.messageBodyBase64,
                  fullRun: params.fullRun
                }));

              case 22:
              case "end":
                return _context59.stop();
            }
          }
        }, _callee59, this);
      }));

      function internalRunMessageLocalJs(_x106, _x107) {
        return _internalRunMessageLocalJs.apply(this, arguments);
      }

      return internalRunMessageLocalJs;
    }()
  }]);

  return TONContractsModule;
}(_TONModule2.TONModule);

exports["default"] = TONContractsModule;
TONContractsModule.moduleName = 'TONContractsModule';
var BLOCK_FIELDS = "\n    id\n    gen_utime\n    after_split\n    workchain_id\n    shard\n    in_msg_descr {\n        msg_id\n        transaction_id\n    }\n";
var TRANSACTION_FIELDS_ORDINARY = "\n    id\n    aborted\n    compute {\n        skipped_reason\n        exit_code\n        success\n        gas_fees\n    }\n    storage {\n       status_change\n       storage_fees_collected\n    }\n    action {\n        success\n        valid\n        no_funds\n        result_code\n        total_fwd_fees\n        total_action_fees\n    }\n    in_msg\n    now\n    out_msgs\n    out_messages {\n        id\n        body\n        msg_type\n        value\n    }\n    status\n    total_fees\n";
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy9tb2R1bGVzL1RPTkNvbnRyYWN0c01vZHVsZS5qcyJdLCJuYW1lcyI6WyJUT05BZGRyZXNzU3RyaW5nVmFyaWFudCIsIkFjY291bnRJZCIsIkhleCIsIkJhc2U2NCIsIlRPTkNsaWVudFRyYW5zYWN0aW9uUGhhc2UiLCJzdG9yYWdlIiwiY29tcHV0ZVNraXBwZWQiLCJjb21wdXRlVm0iLCJhY3Rpb24iLCJ1bmtub3duIiwiVE9OQ2xpZW50Q29tcHV0ZVNraXBwZWRTdGF0dXMiLCJub1N0YXRlIiwiYmFkU3RhdGUiLCJub0dhcyIsIlRPTkNsaWVudFN0b3JhZ2VTdGF0dXMiLCJ1bmNoYW5nZWQiLCJmcm96ZW4iLCJkZWxldGVkIiwiUUluTXNnVHlwZSIsImV4dGVybmFsIiwiaWhyIiwiaW1tZWRpYXRlbHkiLCJ0cmFuc2l0IiwiZGlzY2FyZGVkRmluYWwiLCJkaXNjYXJkZWRUcmFuc2l0IiwiUU91dE1zZ1R5cGUiLCJvdXRNc2dOZXciLCJkZXF1ZXVlSW1tZWRpYXRlbHkiLCJkZXF1ZXVlIiwidHJhbnNpdFJlcXVpcmVkIiwibm9uZSIsIlFNZXNzYWdlVHlwZSIsImludGVybmFsIiwiZXh0SW4iLCJleHRPdXQiLCJRTWVzc2FnZVByb2Nlc3NpbmdTdGF0dXMiLCJxdWV1ZWQiLCJwcm9jZXNzaW5nIiwicHJlbGltaW5hcnkiLCJwcm9wb3NlZCIsImZpbmFsaXplZCIsInJlZnVzZWQiLCJ0cmFuc2l0aW5nIiwiUUJsb2NrUHJvY2Vzc2luZ1N0YXR1cyIsIlFTcGxpdFR5cGUiLCJzcGxpdCIsIm1lcmdlIiwiUUFjY291bnRUeXBlIiwidW5pbml0IiwiYWN0aXZlIiwiUVRyYW5zYWN0aW9uVHlwZSIsIm9yZGluYXJ5IiwidGljayIsInRvY2siLCJzcGxpdFByZXBhcmUiLCJzcGxpdEluc3RhbGwiLCJtZXJnZVByZXBhcmUiLCJtZXJnZUluc3RhbGwiLCJRVHJhbnNhY3Rpb25Qcm9jZXNzaW5nU3RhdHVzIiwiUUFjY291bnRTdGF0dXMiLCJub25FeGlzdCIsIlFBY2NvdW50U3RhdHVzQ2hhbmdlIiwiUUNvbXB1dGVUeXBlIiwic2tpcHBlZCIsInZtIiwiUVNraXBSZWFzb24iLCJRQm91bmNlVHlwZSIsIm5lZ0Z1bmRzIiwibm9GdW5kcyIsIm9rIiwiTUFTVEVSQ0hBSU5fSUQiLCJFWFRSQV9UUkFOU0FDVElPTl9XQUlUSU5HX1RJTUUiLCJCTE9DS19UUkFOU0FDVElPTl9XQUlUSU5HX1RJTUUiLCJyZW1vdmVUeXBlTmFtZSIsIm9iaiIsIl9fdHlwZW5hbWUiLCJPYmplY3QiLCJ2YWx1ZXMiLCJmb3JFYWNoIiwidmFsdWUiLCJyZW1vdmVQcm9wcyIsInBhdGhzIiwicmVzdWx0IiwicGF0aCIsImRvdFBvcyIsImluZGV4T2YiLCJuYW1lIiwic3Vic3RyIiwiY2hpbGQiLCJyZWR1Y2VkQ2hpbGQiLCJzdGFydE1lc3NhZ2VUcmFjZVNwYW4iLCJ0cmFjZXIiLCJtZXNzYWdlSWQiLCJvcGVyYXRpb25OYW1lIiwidGFncyIsInRyYWNlSWQiLCJzcGFuSWQiLCJyb290Q29udGV4dCIsImV4dHJhY3QiLCJGT1JNQVRfVEVYVF9NQVAiLCJzdGFydFNwYW4iLCJjaGlsZE9mIiwidHJhY2VNZXNzYWdlIiwic3BhbiIsImZpbmlzaCIsIlRPTkNvbnRyYWN0c01vZHVsZSIsImNvbmZpZyIsImNvbnRleHQiLCJnZXRNb2R1bGUiLCJUT05Db25maWdNb2R1bGUiLCJxdWVyaWVzIiwiVE9OUXVlcmllc01vZHVsZSIsInBhcmFtcyIsInBhcmVudFNwYW4iLCJhY2NvdW50cyIsInF1ZXJ5IiwiZmlsdGVyIiwiaWQiLCJlcSIsImFkZHJlc3MiLCJsZW5ndGgiLCJiYWxhbmNlR3JhbXMiLCJiYWxhbmNlIiwidHJhY2UiLCJzZXRUYWciLCJpbnRlcm5hbERlcGxveUpzIiwiaW50ZXJuYWxSdW5KcyIsImludGVybmFsUnVuTG9jYWxKcyIsImludGVybmFsUnVuTWVzc2FnZUxvY2FsSnMiLCJjb3JlUGFyYW1zIiwiaGFzQ29kZSIsImJvY0Jhc2U2NCIsImNvZGVCYXNlNjQiLCJkYXRhQmFzZTY0IiwiVE9OQ2xpZW50RXJyb3IiLCJjb21wbGV0ZUVycm9yRGF0YSIsImFkZHJlc3NSZXF1aXJlZEZvclJ1bkxvY2FsIiwiZ2V0QWNjb3VudCIsInRpbWVvdXQiLCJ3YWl0Rm9yVGltZW91dCIsImFjY291bnQiLCJjb2RlX2hhc2giLCJhY2NvdW50Q29kZU1pc3NpbmciLCJwYXJhbXNGcm9tQWNjb3VudCIsImJvYyIsImxhc3RfcGFpZCIsInJlcXVlc3RDb3JlIiwiY29ucyIsIml0ZW0iLCJpbnZhbGlkQ29ucyIsImVtcHR5VE9ORXJyb3JEYXRhIiwicHVzaCIsInJldHJ5SW5kZXgiLCJsb2ciLCJhYmkiLCJjb25zdHJ1Y3RvckhlYWRlciIsImNvbnN0cnVjdG9yUGFyYW1zIiwiaW5pdFBhcmFtcyIsImltYWdlQmFzZTY0Iiwia2V5UGFpciIsIndvcmtjaGFpbklkIiwibWVzc2FnZSIsImZ1bmN0aW9uTmFtZSIsImhlYWRlciIsInRyeUluZGV4IiwiaW5wdXQiLCJwdWJsaWNLZXlIZXgiLCJhZGRyZXNzSGV4Iiwic2lnblBhcmFtcyIsImVuY29kZWQiLCJjcmVhdGVTaWduZWRNZXNzYWdlIiwidW5zaWduZWRNZXNzYWdlIiwidW5zaWduZWRCeXRlc0Jhc2U2NCIsInNpZ25CeXRlc0Jhc2U2NCIsImV4cGlyZSIsImdldEJvY0hhc2giLCJtZXNzYWdlQm9keUJhc2U2NCIsImhhc2giLCJEYXRlIiwibm93IiwibWVzc2FnZV9pZCIsInNlbmROb2RlUmVxdWVzdEZhaWxlZCIsIk1hdGgiLCJzZXJ2ZXJUaW1lRGVsdGEiLCJhYnMiLCJvdXRPZlN5bmNUaHJlc2hvbGQiLCJkcm9wU2VydmVyVGltZURlbHRhIiwiY2xvY2tPdXRPZlN5bmMiLCJmaW5kTGFzdFNoYXJkQmxvY2siLCJsYXN0QmxvY2tJZCIsImVuc3VyZU1lc3NhZ2VJZCIsImlkQmFzZTY0IiwiQnVmZmVyIiwiZnJvbSIsInRvU3RyaW5nIiwibWVzc2FnZVNwYW4iLCJzdGFydFJvb3RTcGFuIiwiYWRkVGFncyIsIm1lc3NhZ2VTaXplIiwiY2VpbCIsInBvc3RSZXF1ZXN0cyIsImJvZHkiLCJzZW5kaW5nVGltZSIsInJvdW5kIiwicmVzdWx0RmllbGRzIiwic2VuZE1lc3NhZ2UiLCJ3YWl0Rm9yVHJhbnNhY3Rpb24iLCJtZXNzYWdlUHJvY2Vzc2luZ1N0YXRlIiwidHJhbnNhY3Rpb24iLCJjaGFpbiIsImFkZGl0aW9uYWxGaWx0ZXIiLCJibG9ja3MiLCJ3b3JrY2hhaW5faWQiLCJvcmRlckJ5IiwiZGlyZWN0aW9uIiwibGltaXQiLCJzaGFyZHMiLCJhZGRyZXNzUGFydHMiLCJ3b3JrY2hhaW4iLCJOdW1iZXIiLCJwYXJzZUludCIsImZpbmRMYXN0QmxvY2siLCJtYXN0ZXJjaGFpbkxhc3RCbG9jayIsIm5vQmxvY2tzIiwid29ya2NoYWluTGFzdEJsb2NrIiwiYWZ0ZXJfbWVyZ2UiLCJzaGFyZCIsImludmFsaWRCbG9ja2NoYWluIiwibWFzdGVyIiwic2hhcmRfaGFzaGVzIiwiZmluZE1hdGNoaW5nU2hhcmQiLCJzaGFyZEJsb2NrIiwicm9vdF9oYXNoIiwiZGVzY3IiLCJibG9jayIsImN1cnJlbnQiLCJ3YWl0Rm9yIiwicHJldl9yZWYiLCJPUiIsInByZXZfYWx0X3JlZiIsIkJMT0NLX0ZJRUxEUyIsImFmdGVyX3NwbGl0IiwiY2hlY2tTaGFyZE1hdGNoIiwibmUiLCJ0b3RhbFN0YXJ0IiwidGltZVJlcG9ydCIsInN0b3BUaW1lIiwibWVzc2FnZVByb2Nlc3NpbmdUaW1lb3V0IiwiaW5maW5pdGVXYWl0IiwiYWRkVGltZW91dCIsIm1heCIsInN0YXJ0Iiwid2FpdE5leHRCbG9jayIsImVuZCIsImdlbl91dGltZSIsInJlc29sdmVkRXJyb3IiLCJjb2RlIiwiVE9ORXJyb3JDb2RlIiwiV0FJVF9GT1JfVElNRU9VVCIsImJsb2NrX2lkIiwibWVzc2FnZV9wcm9jZXNzaW5nX3N0YXRlIiwic2VuZGluZ190aW1lIiwibmV0d29ya1NpbGVudCIsImluTXNnIiwiaW5fbXNnX2Rlc2NyIiwiZmluZCIsIngiLCJtc2dfaWQiLCJ0cmFuc2FjdGlvbklkIiwidHJhbnNhY3Rpb25faWQiLCJ0clN0YXJ0IiwidHJhbnNhY3Rpb25zIiwiVFJBTlNBQ1RJT05fRklFTERTX09SRElOQVJZIiwiTUFYX1RJTUVPVVQiLCJibG9ja190aW1lIiwibWVzc2FnZUV4cGlyZWQiLCJ0cmFuc2FjdGlvbldhaXRUaW1lb3V0Iiwic3BsaWNlIiwiam9pbiIsIk1FU1NBR0VfRVhQSVJFRCIsIlRSQU5TQUNUSU9OX1dBSVRfVElNRU9VVCIsInJlc29sdmVEZXRhaWxlZEVycm9yIiwicHJvY2Vzc1RyYW5zYWN0aW9uIiwib3JpZ2luYWxfZXJyb3IiLCJmdW5jdGlvbl9uYW1lIiwiYWNjb3VudE1pc3NpbmciLCJlcnJvciIsIm1lc3NhZ2VCYXNlNjQiLCJ0aW1lIiwibWFpbkVycm9yIiwiYWNjX3R5cGUiLCJpc0RlcGxveWVkIiwiYWxyZWFkeURlcGxveWVkIiwid2FpdEZvckRlcGxveVRyYW5zYWN0aW9uIiwiZGVwbG95TWVzc2FnZSIsInJ1bk1lc3NhZ2UiLCJ3YWl0Rm9yUnVuVHJhbnNhY3Rpb24iLCJ3YWl0UGFyYW1zIiwiZW11bGF0ZUJhbGFuY2UiLCJiaWdCYWxhbmNlIiwiY3JlYXRlRGVwbG95TWVzc2FnZSIsImNhbGNNc2dQcm9jZXNzRmVlcyIsIm5ld0FjY291bnQiLCJmbG9vciIsImNhbGwiLCJyZXRyaWVzQ291bnQiLCJtZXNzYWdlUmV0cmllc0NvdW50IiwiaSIsInVzZVJldHJ5IiwiaXNPcmlnaW5hbENvbnRyYWN0RXJyb3IiLCJUT05Db250cmFjdEV4aXRDb2RlIiwiUkVQTEFZX1BST1RFQ1RJT04iLCJpc1Jlc29sdmVkQ29udHJhY3RFcnJvckFmdGVyRXhwaXJlIiwiaW50ZXJuYWxFcnJvciIsInJldHJ5Q2FsbCIsImNyZWF0ZVJ1bk1lc3NhZ2UiLCJ0cmFuc2FjdGlvbkx0IiwibGFzdF90cmFuc19sdCIsImdlIiwiZnVsbFJ1biIsIlRPTk1vZHVsZSIsIm1vZHVsZU5hbWUiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7QUFLQTs7QUF1REE7O0FBQ0E7O0FB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IENvcHlyaWdodCAyMDE4LTIwMjAgVE9OIERFViBTT0xVVElPTlMgTFRELlxuICovXG4vLyBAZmxvd1xuXG5pbXBvcnQge1xuICAgIFRyYWNlciwgRk9STUFUX1RFWFRfTUFQLCBTcGFuLCBTcGFuQ29udGV4dCxcbn0gZnJvbSAnb3BlbnRyYWNpbmcnO1xuaW1wb3J0IHR5cGUge1xuICAgIFFBY2NvdW50LFxuICAgIFFCbG9jayxcbiAgICBRTWVzc2FnZSxcbiAgICBRVHJhbnNhY3Rpb24sXG4gICAgVE9OQ29udHJhY3RBQkksXG4gICAgVE9OQ29udHJhY3RBY2NvdW50V2FpdFBhcmFtcyxcbiAgICBUT05Db250cmFjdENvbnZlcnRBZGRyZXNzUGFyYW1zLFxuICAgIFRPTkNvbnRyYWN0Q29udmVydEFkZHJlc3NSZXN1bHQsXG4gICAgVE9OQ29udHJhY3RDcmVhdGVSdW5Cb2R5UGFyYW1zLFxuICAgIFRPTkNvbnRyYWN0Q3JlYXRlUnVuQm9keVJlc3VsdCxcbiAgICBUT05Db250cmFjdENyZWF0ZVNpZ25lZERlcGxveU1lc3NhZ2VQYXJhbXMsXG4gICAgVE9OQ29udHJhY3RDcmVhdGVTaWduZWRNZXNzYWdlUGFyYW1zLFxuICAgIFRPTkNvbnRyYWN0Q3JlYXRlU2lnbmVkUnVuTWVzc2FnZVBhcmFtcyxcbiAgICBUT05Db250cmFjdERlY29kZU1lc3NhZ2VCb2R5UGFyYW1zLFxuICAgIFRPTkNvbnRyYWN0RGVjb2RlTWVzc2FnZUJvZHlSZXN1bHQsXG4gICAgVE9OQ29udHJhY3REZWNvZGVSdW5PdXRwdXRQYXJhbXMsXG4gICAgVE9OQ29udHJhY3REZXBsb3lNZXNzYWdlLFxuICAgIFRPTkNvbnRyYWN0RGVwbG95UGFyYW1zLFxuICAgIFRPTkNvbnRyYWN0RGVwbG95UmVzdWx0LFxuICAgIFRPTkNvbnRyYWN0Q2FsY0RlcGxveUZlZVBhcmFtcyxcbiAgICBUT05Db250cmFjdEJvYyxcbiAgICBUT05Db250cmFjdEdldEJvY0hhc2hSZXN1bHQsXG4gICAgVE9OQ29udHJhY3RHZXRDb2RlRnJvbUltYWdlUGFyYW1zLFxuICAgIFRPTkNvbnRyYWN0R2V0Q29kZUZyb21JbWFnZVJlc3VsdCxcbiAgICBUT05Db250cmFjdEdldERlcGxveURhdGFQYXJhbXMsXG4gICAgVE9OQ29udHJhY3RHZXREZXBsb3lEYXRhUmVzdWx0LFxuICAgIFRPTkNvbnRyYWN0R2V0RnVuY3Rpb25JZFBhcmFtcyxcbiAgICBUT05Db250cmFjdEdldEZ1bmN0aW9uSWRSZXN1bHQsXG4gICAgVE9OQ29udHJhY3RMb2FkUGFyYW1zLFxuICAgIFRPTkNvbnRyYWN0TG9hZFJlc3VsdCxcbiAgICBUT05Db250cmFjdENhbGNSdW5GZWVQYXJhbXMsXG4gICAgVE9OQ29udHJhY3RDYWxjRmVlUmVzdWx0LFxuICAgIFRPTkNvbnRyYWN0Q2FsY01zZ1Byb2Nlc3NpbmdGZWVzUGFyYW1zLFxuICAgIFRPTkNvbnRyYWN0TWVzc2FnZSxcbiAgICBUT05Db250cmFjdFJ1bkxvY2FsUGFyYW1zLFxuICAgIFRPTkNvbnRyYWN0UnVuTWVzc2FnZSxcbiAgICBUT05Db250cmFjdFJ1blBhcmFtcyxcbiAgICBUT05Db250cmFjdFJ1blJlc3VsdCxcbiAgICBUT05Db250cmFjdHMsXG4gICAgVE9OQ29udHJhY3RVbnNpZ25lZERlcGxveU1lc3NhZ2UsXG4gICAgVE9OQ29udHJhY3RVbnNpZ25lZE1lc3NhZ2UsXG4gICAgVE9OQ29udHJhY3RVbnNpZ25lZFJ1bk1lc3NhZ2UsXG4gICAgVE9OQ29udHJhY3RSdW5HZXRQYXJhbXMsXG4gICAgVE9OQ29udHJhY3RSdW5HZXRSZXN1bHQsXG4gICAgVE9OQ29udHJhY3RSdW5NZXNzYWdlTG9jYWxQYXJhbXMsXG4gICAgVE9OQ29udHJhY3RSdW5Mb2NhbFJlc3VsdCxcbiAgICBUT05XYWl0Rm9yVHJhbnNhY3Rpb25QYXJhbXMsXG4gICAgUVNoYXJkSGFzaCxcbiAgICBUT05NZXNzYWdlUHJvY2Vzc2luZ1N0YXRlLFxufSBmcm9tICcuLi8uLi90eXBlcyc7XG5cbmltcG9ydCB7IGVtcHR5VE9ORXJyb3JEYXRhLCBUT05DbGllbnRFcnJvciwgVE9OQ29udHJhY3RFeGl0Q29kZSwgVE9ORXJyb3JDb2RlIH0gZnJvbSAnLi4vVE9OQ2xpZW50RXJyb3InO1xuaW1wb3J0IHsgVE9OTW9kdWxlIH0gZnJvbSAnLi4vVE9OTW9kdWxlJztcbmltcG9ydCBUT05Db25maWdNb2R1bGUgZnJvbSAnLi9UT05Db25maWdNb2R1bGUnO1xuaW1wb3J0IFRPTlF1ZXJpZXNNb2R1bGUsIHsgTUFYX1RJTUVPVVQgfSBmcm9tICcuL1RPTlF1ZXJpZXNNb2R1bGUnO1xuXG5leHBvcnQgY29uc3QgVE9OQWRkcmVzc1N0cmluZ1ZhcmlhbnQgPSB7XG4gICAgQWNjb3VudElkOiAnQWNjb3VudElkJyxcbiAgICBIZXg6ICdIZXgnLFxuICAgIEJhc2U2NDogJ0Jhc2U2NCcsXG59O1xuXG5leHBvcnQgY29uc3QgVE9OQ2xpZW50VHJhbnNhY3Rpb25QaGFzZSA9IHtcbiAgICBzdG9yYWdlOiAnc3RvcmFnZScsXG4gICAgY29tcHV0ZVNraXBwZWQ6ICdjb21wdXRlU2tpcHBlZCcsXG4gICAgY29tcHV0ZVZtOiAnY29tcHV0ZVZtJyxcbiAgICBhY3Rpb246ICdhY3Rpb24nLFxuICAgIHVua25vd246ICd1bmtub3duJyxcbn07XG5cbmV4cG9ydCBjb25zdCBUT05DbGllbnRDb21wdXRlU2tpcHBlZFN0YXR1cyA9IHtcbiAgICBub1N0YXRlOiAwLFxuICAgIGJhZFN0YXRlOiAxLFxuICAgIG5vR2FzOiAyLFxufTtcblxuZXhwb3J0IGNvbnN0IFRPTkNsaWVudFN0b3JhZ2VTdGF0dXMgPSB7XG4gICAgdW5jaGFuZ2VkOiAwLFxuICAgIGZyb3plbjogMSxcbiAgICBkZWxldGVkOiAyLFxufTtcblxuZXhwb3J0IGNvbnN0IFFJbk1zZ1R5cGUgPSB7XG4gICAgZXh0ZXJuYWw6IDAsXG4gICAgaWhyOiAxLFxuICAgIGltbWVkaWF0ZWx5OiAyLFxuICAgIGZpbmFsOiAzLFxuICAgIHRyYW5zaXQ6IDQsXG4gICAgZGlzY2FyZGVkRmluYWw6IDUsXG4gICAgZGlzY2FyZGVkVHJhbnNpdDogNixcbn07XG5cbmV4cG9ydCBjb25zdCBRT3V0TXNnVHlwZSA9IHtcbiAgICBleHRlcm5hbDogMCxcbiAgICBpbW1lZGlhdGVseTogMSxcbiAgICBvdXRNc2dOZXc6IDIsXG4gICAgdHJhbnNpdDogMyxcbiAgICBkZXF1ZXVlSW1tZWRpYXRlbHk6IDQsXG4gICAgZGVxdWV1ZTogNSxcbiAgICB0cmFuc2l0UmVxdWlyZWQ6IDYsXG4gICAgbm9uZTogLTEsXG59O1xuXG5leHBvcnQgY29uc3QgUU1lc3NhZ2VUeXBlID0ge1xuICAgIGludGVybmFsOiAwLFxuICAgIGV4dEluOiAxLFxuICAgIGV4dE91dDogMixcbn07XG5cbmV4cG9ydCBjb25zdCBRTWVzc2FnZVByb2Nlc3NpbmdTdGF0dXMgPSB7XG4gICAgdW5rbm93bjogMCxcbiAgICBxdWV1ZWQ6IDEsXG4gICAgcHJvY2Vzc2luZzogMixcbiAgICBwcmVsaW1pbmFyeTogMyxcbiAgICBwcm9wb3NlZDogNCxcbiAgICBmaW5hbGl6ZWQ6IDUsXG4gICAgcmVmdXNlZDogNixcbiAgICB0cmFuc2l0aW5nOiA3LFxufTtcblxuZXhwb3J0IGNvbnN0IFFCbG9ja1Byb2Nlc3NpbmdTdGF0dXMgPSB7XG4gICAgdW5rbm93bjogMCxcbiAgICBwcm9wb3NlZDogMSxcbiAgICBmaW5hbGl6ZWQ6IDIsXG4gICAgcmVmdXNlZDogMyxcbn07XG5cbmV4cG9ydCBjb25zdCBRU3BsaXRUeXBlID0ge1xuICAgIG5vbmU6IDAsXG4gICAgc3BsaXQ6IDIsXG4gICAgbWVyZ2U6IDMsXG59O1xuXG5leHBvcnQgY29uc3QgUUFjY291bnRUeXBlID0ge1xuICAgIHVuaW5pdDogMCxcbiAgICBhY3RpdmU6IDEsXG4gICAgZnJvemVuOiAyLFxufTtcblxuZXhwb3J0IGNvbnN0IFFUcmFuc2FjdGlvblR5cGUgPSB7XG4gICAgb3JkaW5hcnk6IDAsXG4gICAgc3RvcmFnZTogMSxcbiAgICB0aWNrOiAyLFxuICAgIHRvY2s6IDMsXG4gICAgc3BsaXRQcmVwYXJlOiA0LFxuICAgIHNwbGl0SW5zdGFsbDogNSxcbiAgICBtZXJnZVByZXBhcmU6IDYsXG4gICAgbWVyZ2VJbnN0YWxsOiA3LFxufTtcblxuZXhwb3J0IGNvbnN0IFFUcmFuc2FjdGlvblByb2Nlc3NpbmdTdGF0dXMgPSB7XG4gICAgdW5rbm93bjogMCxcbiAgICBwcmVsaW1pbmFyeTogMSxcbiAgICBwcm9wb3NlZDogMixcbiAgICBmaW5hbGl6ZWQ6IDMsXG4gICAgcmVmdXNlZDogNCxcbn07XG5cbmV4cG9ydCBjb25zdCBRQWNjb3VudFN0YXR1cyA9IHtcbiAgICB1bmluaXQ6IDAsXG4gICAgYWN0aXZlOiAxLFxuICAgIGZyb3plbjogMixcbiAgICBub25FeGlzdDogMyxcbn07XG5cbmV4cG9ydCBjb25zdCBRQWNjb3VudFN0YXR1c0NoYW5nZSA9IHtcbiAgICB1bmNoYW5nZWQ6IDAsXG4gICAgZnJvemVuOiAxLFxuICAgIGRlbGV0ZWQ6IDIsXG59O1xuXG5leHBvcnQgY29uc3QgUUNvbXB1dGVUeXBlID0ge1xuICAgIHNraXBwZWQ6IDAsXG4gICAgdm06IDEsXG59O1xuXG5leHBvcnQgY29uc3QgUVNraXBSZWFzb24gPSB7XG4gICAgbm9TdGF0ZTogMCxcbiAgICBiYWRTdGF0ZTogMSxcbiAgICBub0dhczogMixcbn07XG5cbmV4cG9ydCBjb25zdCBRQm91bmNlVHlwZSA9IHtcbiAgICBuZWdGdW5kczogMCxcbiAgICBub0Z1bmRzOiAxLFxuICAgIG9rOiAyLFxufTtcblxuY29uc3QgTUFTVEVSQ0hBSU5fSUQgPSAtMTtcblxuY29uc3QgRVhUUkFfVFJBTlNBQ1RJT05fV0FJVElOR19USU1FID0gMTAwMDA7XG5jb25zdCBCTE9DS19UUkFOU0FDVElPTl9XQUlUSU5HX1RJTUUgPSA1MDAwO1xuXG5mdW5jdGlvbiByZW1vdmVUeXBlTmFtZShvYmo6IGFueSkge1xuICAgIGlmIChvYmouX190eXBlbmFtZSkge1xuICAgICAgICBkZWxldGUgb2JqLl9fdHlwZW5hbWU7XG4gICAgfVxuICAgIE9iamVjdC52YWx1ZXMob2JqKVxuICAgICAgICAuZm9yRWFjaCgodmFsdWUpID0+IHtcbiAgICAgICAgICAgIGlmICghIXZhbHVlICYmIHR5cGVvZiB2YWx1ZSA9PT0gJ29iamVjdCcpIHtcbiAgICAgICAgICAgICAgICByZW1vdmVUeXBlTmFtZSh2YWx1ZSk7XG4gICAgICAgICAgICB9XG4gICAgICAgIH0pO1xufVxuXG5leHBvcnQgZnVuY3Rpb24gcmVtb3ZlUHJvcHMob2JqOiB7fSwgcGF0aHM6IHN0cmluZ1tdKToge30ge1xuICAgIGxldCByZXN1bHQgPSBvYmo7XG4gICAgcGF0aHMuZm9yRWFjaCgocGF0aCkgPT4ge1xuICAgICAgICBjb25zdCBkb3RQb3MgPSBwYXRoLmluZGV4T2YoJy4nKTtcbiAgICAgICAgaWYgKGRvdFBvcyA8IDApIHtcbiAgICAgICAgICAgIGlmIChwYXRoIGluIHJlc3VsdCkge1xuICAgICAgICAgICAgICAgIHJlc3VsdCA9IHsgLi4ucmVzdWx0IH07XG4gICAgICAgICAgICAgICAgZGVsZXRlIHJlc3VsdFtwYXRoXTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIGNvbnN0IG5hbWUgPSBwYXRoLnN1YnN0cigwLCBkb3RQb3MpO1xuICAgICAgICAgICAgY29uc3QgY2hpbGQgPSByZXN1bHRbbmFtZV07XG4gICAgICAgICAgICBpZiAoY2hpbGQpIHtcbiAgICAgICAgICAgICAgICBjb25zdCByZWR1Y2VkQ2hpbGQgPSByZW1vdmVQcm9wcyhjaGlsZCwgW3BhdGguc3Vic3RyKGRvdFBvcyArIDEpXSk7XG4gICAgICAgICAgICAgICAgaWYgKHJlZHVjZWRDaGlsZCAhPT0gY2hpbGQpIHtcbiAgICAgICAgICAgICAgICAgICAgcmVzdWx0ID0ge1xuICAgICAgICAgICAgICAgICAgICAgICAgLi4ucmVzdWx0LFxuICAgICAgICAgICAgICAgICAgICAgICAgW25hbWVdOiByZWR1Y2VkQ2hpbGQsXG4gICAgICAgICAgICAgICAgICAgIH07XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgfSk7XG4gICAgcmV0dXJuIHJlc3VsdDtcbn1cblxuZnVuY3Rpb24gc3RhcnRNZXNzYWdlVHJhY2VTcGFuKFxuICAgIHRyYWNlcjogVHJhY2VyLFxuICAgIG1lc3NhZ2VJZDogc3RyaW5nLFxuICAgIG9wZXJhdGlvbk5hbWU6IHN0cmluZyxcbiAgICB0YWdzOiB7IFtzdHJpbmddOiBhbnkgfSxcbik6ID9TcGFuIHtcbiAgICBpZiAoIW1lc3NhZ2VJZCkge1xuICAgICAgICByZXR1cm4gbnVsbDtcbiAgICB9XG4gICAgY29uc3QgdHJhY2VJZCA9IG1lc3NhZ2VJZC5zdWJzdHIoMCwgMTYpO1xuICAgIGNvbnN0IHNwYW5JZCA9IG1lc3NhZ2VJZC5zdWJzdHIoMTYsIDE2KTtcbiAgICBsZXQgcm9vdENvbnRleHQ6ID9TcGFuQ29udGV4dCA9IG51bGw7XG4gICAgdHJ5IHtcbiAgICAgICAgcm9vdENvbnRleHQgPSB0cmFjZXIuZXh0cmFjdChGT1JNQVRfVEVYVF9NQVAsIHtcbiAgICAgICAgICAgICd1YmVyLXRyYWNlLWlkJzogYCR7dHJhY2VJZH06JHtzcGFuSWR9OjA6MWAsXG4gICAgICAgIH0pO1xuICAgIH0gY2F0Y2gge1xuICAgICAgICAvLyB0cmFjZXIgY2FuJ3QgY3JlYXRlIGphZWdlciBjb21wYXRpYmxlIHNwYW4sXG4gICAgICAgIC8vIHNvIHdlIGFyZSBmYWxsYmFjayB0byByZXR1cm4gbnVsbFxuICAgIH1cbiAgICBpZiAoIXJvb3RDb250ZXh0KSB7XG4gICAgICAgIHJldHVybiBudWxsO1xuICAgIH1cbiAgICByZXR1cm4gdHJhY2VyLnN0YXJ0U3BhbihvcGVyYXRpb25OYW1lLCB7XG4gICAgICAgIGNoaWxkT2Y6IHJvb3RDb250ZXh0LFxuICAgICAgICB0YWdzLFxuICAgIH0pO1xufVxuXG5mdW5jdGlvbiB0cmFjZU1lc3NhZ2UoXG4gICAgdHJhY2VyOiBUcmFjZXIsXG4gICAgbWVzc2FnZUlkOiBzdHJpbmcsXG4gICAgb3BlcmF0aW9uTmFtZTogc3RyaW5nLFxuICAgIHRhZ3M6IHsgW3N0cmluZ106IGFueSB9LFxuKSB7XG4gICAgY29uc3Qgc3BhbiA9IHN0YXJ0TWVzc2FnZVRyYWNlU3Bhbih0cmFjZXIsIG1lc3NhZ2VJZCwgb3BlcmF0aW9uTmFtZSwgdGFncyk7XG4gICAgaWYgKHNwYW4pIHtcbiAgICAgICAgc3Bhbi5maW5pc2goKTtcbiAgICB9XG59XG5cbmV4cG9ydCBkZWZhdWx0IGNsYXNzIFRPTkNvbnRyYWN0c01vZHVsZSBleHRlbmRzIFRPTk1vZHVsZSBpbXBsZW1lbnRzIFRPTkNvbnRyYWN0cyB7XG4gICAgY29uZmlnOiBUT05Db25maWdNb2R1bGU7XG5cbiAgICBxdWVyaWVzOiBUT05RdWVyaWVzTW9kdWxlO1xuXG4gICAgYXN5bmMgc2V0dXAoKTogUHJvbWlzZTwqPiB7XG4gICAgICAgIHRoaXMuY29uZmlnID0gdGhpcy5jb250ZXh0LmdldE1vZHVsZShUT05Db25maWdNb2R1bGUpO1xuICAgICAgICB0aGlzLnF1ZXJpZXMgPSB0aGlzLmNvbnRleHQuZ2V0TW9kdWxlKFRPTlF1ZXJpZXNNb2R1bGUpO1xuICAgIH1cblxuICAgIGFzeW5jIGxvYWQoXG4gICAgICAgIHBhcmFtczogVE9OQ29udHJhY3RMb2FkUGFyYW1zLFxuICAgICAgICBwYXJlbnRTcGFuPzogKFNwYW4gfCBTcGFuQ29udGV4dCksXG4gICAgKTogUHJvbWlzZTxUT05Db250cmFjdExvYWRSZXN1bHQ+IHtcbiAgICAgICAgY29uc3QgYWNjb3VudHM6IFFBY2NvdW50W10gPSBhd2FpdCB0aGlzLnF1ZXJpZXMuYWNjb3VudHMucXVlcnkoe1xuICAgICAgICAgICAgZmlsdGVyOiB7XG4gICAgICAgICAgICAgICAgaWQ6IHsgZXE6IHBhcmFtcy5hZGRyZXNzIH0sXG4gICAgICAgICAgICB9LFxuICAgICAgICAgICAgcmVzdWx0OiAnYmFsYW5jZScsXG4gICAgICAgICAgICBwYXJlbnRTcGFuLFxuICAgICAgICB9KTtcbiAgICAgICAgaWYgKGFjY291bnRzICYmIGFjY291bnRzLmxlbmd0aCA+IDApIHtcbiAgICAgICAgICAgIHJldHVybiB7XG4gICAgICAgICAgICAgICAgaWQ6IHBhcmFtcy5hZGRyZXNzLFxuICAgICAgICAgICAgICAgIGJhbGFuY2VHcmFtczogYWNjb3VudHNbMF0uYmFsYW5jZSxcbiAgICAgICAgICAgIH07XG4gICAgICAgIH1cbiAgICAgICAgcmV0dXJuIHtcbiAgICAgICAgICAgIGlkOiBudWxsLFxuICAgICAgICAgICAgYmFsYW5jZUdyYW1zOiBudWxsLFxuICAgICAgICB9O1xuICAgIH1cblxuXG4gICAgLy8gRmFjYWRlIGZ1bmN0aW9uc1xuXG4gICAgYXN5bmMgZGVwbG95KFxuICAgICAgICBwYXJhbXM6IFRPTkNvbnRyYWN0RGVwbG95UGFyYW1zLFxuICAgICAgICBwYXJlbnRTcGFuPzogKFNwYW4gfCBTcGFuQ29udGV4dCksXG4gICAgKTogUHJvbWlzZTxUT05Db250cmFjdERlcGxveVJlc3VsdD4ge1xuICAgICAgICByZXR1cm4gdGhpcy5jb250ZXh0LnRyYWNlKCdjb250cmFjdHMuZGVwbG95JywgYXN5bmMgKHNwYW46IFNwYW4pID0+IHtcbiAgICAgICAgICAgIHNwYW4uc2V0VGFnKCdwYXJhbXMnLCByZW1vdmVQcm9wcyhwYXJhbXMsIFsna2V5UGFpci5zZWNyZXQnXSkpO1xuICAgICAgICAgICAgcmV0dXJuIHRoaXMuaW50ZXJuYWxEZXBsb3lKcyhwYXJhbXMsIHNwYW4pO1xuICAgICAgICB9LCBwYXJlbnRTcGFuKTtcbiAgICB9XG5cblxuICAgIGFzeW5jIHJ1bihcbiAgICAgICAgcGFyYW1zOiBUT05Db250cmFjdFJ1blBhcmFtcyxcbiAgICAgICAgcGFyZW50U3Bhbj86IChTcGFuIHwgU3BhbkNvbnRleHQpLFxuICAgICk6IFByb21pc2U8VE9OQ29udHJhY3RSdW5SZXN1bHQ+IHtcbiAgICAgICAgcmV0dXJuIHRoaXMuY29udGV4dC50cmFjZSgnY29udHJhY3RzLnJ1bicsIGFzeW5jIChzcGFuOiBTcGFuKSA9PiB7XG4gICAgICAgICAgICBzcGFuLnNldFRhZygncGFyYW1zJywgcmVtb3ZlUHJvcHMocGFyYW1zLCBbJ2tleVBhaXIuc2VjcmV0J10pKTtcbiAgICAgICAgICAgIHJldHVybiB0aGlzLmludGVybmFsUnVuSnMocGFyYW1zLCBzcGFuKTtcbiAgICAgICAgfSwgcGFyZW50U3Bhbik7XG4gICAgfVxuXG4gICAgYXN5bmMgcnVuTG9jYWwoXG4gICAgICAgIHBhcmFtczogVE9OQ29udHJhY3RSdW5Mb2NhbFBhcmFtcyxcbiAgICAgICAgcGFyZW50U3Bhbj86IChTcGFuIHwgU3BhbkNvbnRleHQpLFxuICAgICk6IFByb21pc2U8VE9OQ29udHJhY3RSdW5Mb2NhbFJlc3VsdD4ge1xuICAgICAgICByZXR1cm4gdGhpcy5jb250ZXh0LnRyYWNlKCdjb250cmFjdHMucnVuTG9jYWwnLCBhc3luYyAoc3BhbjogU3BhbikgPT4ge1xuICAgICAgICAgICAgc3Bhbi5zZXRUYWcoJ3BhcmFtcycsIHJlbW92ZVByb3BzKHBhcmFtcywgWydrZXlQYWlyLnNlY3JldCddKSk7XG4gICAgICAgICAgICByZXR1cm4gdGhpcy5pbnRlcm5hbFJ1bkxvY2FsSnMocGFyYW1zLCBzcGFuKTtcbiAgICAgICAgfSwgcGFyZW50U3Bhbik7XG4gICAgfVxuXG4gICAgYXN5bmMgcnVuTWVzc2FnZUxvY2FsKFxuICAgICAgICBwYXJhbXM6IFRPTkNvbnRyYWN0UnVuTWVzc2FnZUxvY2FsUGFyYW1zLFxuICAgICAgICBwYXJlbnRTcGFuPzogKFNwYW4gfCBTcGFuQ29udGV4dCksXG4gICAgKTogUHJvbWlzZTxUT05Db250cmFjdFJ1bkxvY2FsUmVzdWx0PiB7XG4gICAgICAgIHJldHVybiB0aGlzLmNvbnRleHQudHJhY2UoJ3J1bk1lc3NhZ2VMb2NhbCcsIGFzeW5jIChzcGFuOiBTcGFuKSA9PiB7XG4gICAgICAgICAgICBzcGFuLnNldFRhZygncGFyYW1zJywgcmVtb3ZlUHJvcHMocGFyYW1zLCBbJ2tleVBhaXIuc2VjcmV0J10pKTtcbiAgICAgICAgICAgIHJldHVybiB0aGlzLmludGVybmFsUnVuTWVzc2FnZUxvY2FsSnMocGFyYW1zLCBzcGFuKTtcbiAgICAgICAgfSwgcGFyZW50U3Bhbik7XG4gICAgfVxuXG4gICAgYXN5bmMgcnVuR2V0KFxuICAgICAgICBwYXJhbXM6IFRPTkNvbnRyYWN0UnVuR2V0UGFyYW1zLFxuICAgICk6IFByb21pc2U8VE9OQ29udHJhY3RSdW5HZXRSZXN1bHQ+IHtcbiAgICAgICAgbGV0IGNvcmVQYXJhbXM6IFRPTkNvbnRyYWN0UnVuR2V0UGFyYW1zID0gcGFyYW1zO1xuICAgICAgICBjb25zdCBoYXNDb2RlID0gcGFyYW1zLmJvY0Jhc2U2NCB8fCAocGFyYW1zLmNvZGVCYXNlNjQgJiYgcGFyYW1zLmRhdGFCYXNlNjQpO1xuICAgICAgICBpZiAoIWhhc0NvZGUpIHtcbiAgICAgICAgICAgIGNvbnN0IGFkZHJlc3MgPSBwYXJhbXMuYWRkcmVzcztcbiAgICAgICAgICAgIGlmICghYWRkcmVzcykge1xuICAgICAgICAgICAgICAgIHRocm93IFRPTkNsaWVudEVycm9yLmFkZHJlc3NSZXF1aXJlZEZvclJ1bkxvY2FsKGF3YWl0IHRoaXMuY29tcGxldGVFcnJvckRhdGEoKSk7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBjb25zdCBhY2NvdW50OiBhbnkgPSBhd2FpdCB0aGlzLmdldEFjY291bnQoYWRkcmVzcywgZmFsc2UsIHtcbiAgICAgICAgICAgICAgICB0aW1lb3V0OiB0aGlzLmNvbmZpZy53YWl0Rm9yVGltZW91dCgpLFxuICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICBpZiAoIWFjY291bnQuY29kZV9oYXNoKSB7XG4gICAgICAgICAgICAgICAgdGhyb3cgVE9OQ2xpZW50RXJyb3IuYWNjb3VudENvZGVNaXNzaW5nKFxuICAgICAgICAgICAgICAgICAgICBhZGRyZXNzLFxuICAgICAgICAgICAgICAgICAgICBhY2NvdW50LmJhbGFuY2UsXG4gICAgICAgICAgICAgICAgICAgIGF3YWl0IHRoaXMuY29tcGxldGVFcnJvckRhdGEoKSxcbiAgICAgICAgICAgICAgICApO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgY29uc3QgcGFyYW1zRnJvbUFjY291bnQ6ICRTaGFwZTxUT05Db250cmFjdFJ1bkdldFBhcmFtcz4gPSB7fTtcbiAgICAgICAgICAgIGlmIChhY2NvdW50LmJvYykge1xuICAgICAgICAgICAgICAgIHBhcmFtc0Zyb21BY2NvdW50LmJvY0Jhc2U2NCA9IGFjY291bnQuYm9jO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgaWYgKGFjY291bnQubGFzdF9wYWlkKSB7XG4gICAgICAgICAgICAgICAgcGFyYW1zRnJvbUFjY291bnQubGFzdF9wYWlkID0gYWNjb3VudC5sYXN0X3BhaWQ7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBpZiAoYWNjb3VudC5iYWxhbmNlKSB7XG4gICAgICAgICAgICAgICAgcGFyYW1zRnJvbUFjY291bnQuYmFsYW5jZSA9IGFjY291bnQuYmFsYW5jZTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGNvcmVQYXJhbXMgPSB7XG4gICAgICAgICAgICAgICAgLi4ucGFyYW1zRnJvbUFjY291bnQsXG4gICAgICAgICAgICAgICAgLi4ucGFyYW1zLFxuICAgICAgICAgICAgfTtcbiAgICAgICAgfVxuICAgICAgICByZXR1cm4gdGhpcy5yZXF1ZXN0Q29yZSgndHZtLmdldCcsIGNvcmVQYXJhbXMpO1xuICAgIH1cblxuICAgIGFycmF5RnJvbUNPTlMoY29uczogYW55W10pOiBhbnlbXSB7XG4gICAgICAgIGNvbnN0IHJlc3VsdCA9IFtdO1xuICAgICAgICBsZXQgaXRlbSA9IGNvbnM7XG4gICAgICAgIHdoaWxlIChpdGVtKSB7XG4gICAgICAgICAgICBpZiAoIWl0ZW0ubGVuZ3RoID09PSAyKSB7XG4gICAgICAgICAgICAgICAgdGhyb3cgVE9OQ2xpZW50RXJyb3IuaW52YWxpZENvbnMoZW1wdHlUT05FcnJvckRhdGEpO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgcmVzdWx0LnB1c2goaXRlbVswXSk7XG4gICAgICAgICAgICBpdGVtID0gaXRlbVsxXTtcbiAgICAgICAgfVxuICAgICAgICByZXR1cm4gcmVzdWx0O1xuICAgIH1cblxuXG4gICAgLy8gTWVzc2FnZSBjcmVhdGlvblxuXG4gICAgYXN5bmMgY3JlYXRlRGVwbG95TWVzc2FnZShcbiAgICAgICAgcGFyYW1zOiBUT05Db250cmFjdERlcGxveVBhcmFtcyxcbiAgICAgICAgcmV0cnlJbmRleD86IG51bWJlcixcbiAgICApOiBQcm9taXNlPFRPTkNvbnRyYWN0RGVwbG95TWVzc2FnZT4ge1xuICAgICAgICB0aGlzLmNvbmZpZy5sb2coJ2NyZWF0ZURlcGxveU1lc3NhZ2UnLCBwYXJhbXMpO1xuICAgICAgICBjb25zdCBtZXNzYWdlOiBUT05Db250cmFjdE1lc3NhZ2UgPSBhd2FpdCB0aGlzLnJlcXVlc3RDb3JlKCdjb250cmFjdHMuZGVwbG95Lm1lc3NhZ2UnLCB7XG4gICAgICAgICAgICBhYmk6IHBhcmFtcy5wYWNrYWdlLmFiaSxcbiAgICAgICAgICAgIGNvbnN0cnVjdG9ySGVhZGVyOiBwYXJhbXMuY29uc3RydWN0b3JIZWFkZXIsXG4gICAgICAgICAgICBjb25zdHJ1Y3RvclBhcmFtczogcGFyYW1zLmNvbnN0cnVjdG9yUGFyYW1zLFxuICAgICAgICAgICAgaW5pdFBhcmFtczogcGFyYW1zLmluaXRQYXJhbXMsXG4gICAgICAgICAgICBpbWFnZUJhc2U2NDogcGFyYW1zLnBhY2thZ2UuaW1hZ2VCYXNlNjQsXG4gICAgICAgICAgICBrZXlQYWlyOiBwYXJhbXMua2V5UGFpcixcbiAgICAgICAgICAgIHdvcmtjaGFpbklkOiBwYXJhbXMud29ya2NoYWluSWQsXG4gICAgICAgIH0pO1xuICAgICAgICByZXR1cm4ge1xuICAgICAgICAgICAgbWVzc2FnZSxcbiAgICAgICAgICAgIGFkZHJlc3M6IG1lc3NhZ2UuYWRkcmVzcyxcbiAgICAgICAgfTtcbiAgICB9XG5cblxuICAgIGFzeW5jIGNyZWF0ZVJ1bk1lc3NhZ2UoXG4gICAgICAgIHBhcmFtczogVE9OQ29udHJhY3RSdW5QYXJhbXMsXG4gICAgICAgIHJldHJ5SW5kZXg/OiBudW1iZXIsXG4gICAgKTogUHJvbWlzZTxUT05Db250cmFjdFJ1bk1lc3NhZ2U+IHtcbiAgICAgICAgdGhpcy5jb25maWcubG9nKCdjcmVhdGVSdW5NZXNzYWdlJywgcGFyYW1zKTtcbiAgICAgICAgY29uc3QgbWVzc2FnZSA9IGF3YWl0IHRoaXMucmVxdWVzdENvcmUoJ2NvbnRyYWN0cy5ydW4ubWVzc2FnZScsIHtcbiAgICAgICAgICAgIGFkZHJlc3M6IHBhcmFtcy5hZGRyZXNzLFxuICAgICAgICAgICAgYWJpOiBwYXJhbXMuYWJpLFxuICAgICAgICAgICAgZnVuY3Rpb25OYW1lOiBwYXJhbXMuZnVuY3Rpb25OYW1lLFxuICAgICAgICAgICAgaGVhZGVyOiBwYXJhbXMuaGVhZGVyLFxuICAgICAgICAgICAgdHJ5SW5kZXg6IHJldHJ5SW5kZXgsXG4gICAgICAgICAgICBpbnB1dDogcGFyYW1zLmlucHV0LFxuICAgICAgICAgICAga2V5UGFpcjogcGFyYW1zLmtleVBhaXIsXG4gICAgICAgIH0pO1xuICAgICAgICByZXR1cm4ge1xuICAgICAgICAgICAgYWRkcmVzczogcGFyYW1zLmFkZHJlc3MsXG4gICAgICAgICAgICBhYmk6IHBhcmFtcy5hYmksXG4gICAgICAgICAgICBmdW5jdGlvbk5hbWU6IHBhcmFtcy5mdW5jdGlvbk5hbWUsXG4gICAgICAgICAgICBtZXNzYWdlLFxuICAgICAgICB9O1xuICAgIH1cblxuICAgIGFzeW5jIGNyZWF0ZVVuc2lnbmVkRGVwbG95TWVzc2FnZShcbiAgICAgICAgcGFyYW1zOiBUT05Db250cmFjdERlcGxveVBhcmFtcyxcbiAgICAgICAgcmV0cnlJbmRleD86IG51bWJlcixcbiAgICApOiBQcm9taXNlPFRPTkNvbnRyYWN0VW5zaWduZWREZXBsb3lNZXNzYWdlPiB7XG4gICAgICAgIGNvbnN0IHJlc3VsdDoge1xuICAgICAgICAgICAgZW5jb2RlZDogVE9OQ29udHJhY3RVbnNpZ25lZE1lc3NhZ2UsXG4gICAgICAgICAgICBhZGRyZXNzSGV4OiBzdHJpbmcsXG4gICAgICAgIH0gPSBhd2FpdCB0aGlzLnJlcXVlc3RDb3JlKCdjb250cmFjdHMuZGVwbG95LmVuY29kZV91bnNpZ25lZF9tZXNzYWdlJywge1xuICAgICAgICAgICAgYWJpOiBwYXJhbXMucGFja2FnZS5hYmksXG4gICAgICAgICAgICBjb25zdHJ1Y3RvckhlYWRlcjogcGFyYW1zLmNvbnN0cnVjdG9ySGVhZGVyLFxuICAgICAgICAgICAgdHJ5SW5kZXg6IHJldHJ5SW5kZXgsXG4gICAgICAgICAgICBjb25zdHJ1Y3RvclBhcmFtczogcGFyYW1zLmNvbnN0cnVjdG9yUGFyYW1zLFxuICAgICAgICAgICAgaW5pdFBhcmFtczogcGFyYW1zLmluaXRQYXJhbXMsXG4gICAgICAgICAgICBpbWFnZUJhc2U2NDogcGFyYW1zLnBhY2thZ2UuaW1hZ2VCYXNlNjQsXG4gICAgICAgICAgICBwdWJsaWNLZXlIZXg6IHBhcmFtcy5rZXlQYWlyLnB1YmxpYyxcbiAgICAgICAgICAgIHdvcmtjaGFpbklkOiBwYXJhbXMud29ya2NoYWluSWQsXG4gICAgICAgIH0pO1xuICAgICAgICByZXR1cm4ge1xuICAgICAgICAgICAgYWRkcmVzczogcmVzdWx0LmFkZHJlc3NIZXgsXG4gICAgICAgICAgICBzaWduUGFyYW1zOiB7XG4gICAgICAgICAgICAgICAgLi4ucmVzdWx0LmVuY29kZWQsXG4gICAgICAgICAgICAgICAgYWJpOiBwYXJhbXMucGFja2FnZS5hYmksXG4gICAgICAgICAgICB9LFxuICAgICAgICB9O1xuICAgIH1cblxuXG4gICAgYXN5bmMgY3JlYXRlVW5zaWduZWRSdW5NZXNzYWdlKFxuICAgICAgICBwYXJhbXM6IFRPTkNvbnRyYWN0UnVuUGFyYW1zLFxuICAgICAgICByZXRyeUluZGV4PzogbnVtYmVyLFxuICAgICk6IFByb21pc2U8VE9OQ29udHJhY3RVbnNpZ25lZFJ1bk1lc3NhZ2U+IHtcbiAgICAgICAgY29uc3Qgc2lnblBhcmFtcyA9IGF3YWl0IHRoaXMucmVxdWVzdENvcmUoJ2NvbnRyYWN0cy5ydW4uZW5jb2RlX3Vuc2lnbmVkX21lc3NhZ2UnLCB7XG4gICAgICAgICAgICBhZGRyZXNzOiBwYXJhbXMuYWRkcmVzcyxcbiAgICAgICAgICAgIGFiaTogcGFyYW1zLmFiaSxcbiAgICAgICAgICAgIGZ1bmN0aW9uTmFtZTogcGFyYW1zLmZ1bmN0aW9uTmFtZSxcbiAgICAgICAgICAgIGhlYWRlcjogcGFyYW1zLmhlYWRlcixcbiAgICAgICAgICAgIHRyeUluZGV4OiByZXRyeUluZGV4LFxuICAgICAgICAgICAgaW5wdXQ6IHBhcmFtcy5pbnB1dCxcbiAgICAgICAgfSk7XG4gICAgICAgIHJldHVybiB7XG4gICAgICAgICAgICBhZGRyZXNzOiBwYXJhbXMuYWRkcmVzcyxcbiAgICAgICAgICAgIGZ1bmN0aW9uTmFtZTogcGFyYW1zLmZ1bmN0aW9uTmFtZSxcbiAgICAgICAgICAgIHNpZ25QYXJhbXM6IHtcbiAgICAgICAgICAgICAgICAuLi5zaWduUGFyYW1zLFxuICAgICAgICAgICAgICAgIGFiaTogcGFyYW1zLmFiaSxcbiAgICAgICAgICAgIH0sXG4gICAgICAgIH07XG4gICAgfVxuXG5cbiAgICBhc3luYyBjcmVhdGVTaWduZWRNZXNzYWdlKFxuICAgICAgICBwYXJhbXM6IFRPTkNvbnRyYWN0Q3JlYXRlU2lnbmVkTWVzc2FnZVBhcmFtcyxcbiAgICApOiBQcm9taXNlPFRPTkNvbnRyYWN0TWVzc2FnZT4ge1xuICAgICAgICByZXR1cm4gdGhpcy5yZXF1ZXN0Q29yZSgnY29udHJhY3RzLmVuY29kZV9tZXNzYWdlX3dpdGhfc2lnbicsIHBhcmFtcyk7XG4gICAgfVxuXG5cbiAgICBhc3luYyBjcmVhdGVTaWduZWREZXBsb3lNZXNzYWdlKFxuICAgICAgICBwYXJhbXM6IFRPTkNvbnRyYWN0Q3JlYXRlU2lnbmVkRGVwbG95TWVzc2FnZVBhcmFtcyxcbiAgICApOiBQcm9taXNlPFRPTkNvbnRyYWN0RGVwbG95TWVzc2FnZT4ge1xuICAgICAgICBjb25zdCBtZXNzYWdlID0gYXdhaXQgdGhpcy5jcmVhdGVTaWduZWRNZXNzYWdlKHtcbiAgICAgICAgICAgIGFiaTogcGFyYW1zLnVuc2lnbmVkTWVzc2FnZS5zaWduUGFyYW1zLmFiaSxcbiAgICAgICAgICAgIHVuc2lnbmVkQnl0ZXNCYXNlNjQ6IHBhcmFtcy51bnNpZ25lZE1lc3NhZ2Uuc2lnblBhcmFtcy51bnNpZ25lZEJ5dGVzQmFzZTY0LFxuICAgICAgICAgICAgc2lnbkJ5dGVzQmFzZTY0OiBwYXJhbXMuc2lnbkJ5dGVzQmFzZTY0LFxuICAgICAgICAgICAgcHVibGljS2V5SGV4OiBwYXJhbXMucHVibGljS2V5SGV4LFxuICAgICAgICB9KTtcbiAgICAgICAgbWVzc2FnZS5leHBpcmUgPSBwYXJhbXMudW5zaWduZWRNZXNzYWdlLnNpZ25QYXJhbXMuZXhwaXJlO1xuICAgICAgICByZXR1cm4ge1xuICAgICAgICAgICAgYWRkcmVzczogcGFyYW1zLnVuc2lnbmVkTWVzc2FnZS5hZGRyZXNzLFxuICAgICAgICAgICAgbWVzc2FnZSxcbiAgICAgICAgfTtcbiAgICB9XG5cblxuICAgIGFzeW5jIGNyZWF0ZVNpZ25lZFJ1bk1lc3NhZ2UoXG4gICAgICAgIHBhcmFtczogVE9OQ29udHJhY3RDcmVhdGVTaWduZWRSdW5NZXNzYWdlUGFyYW1zLFxuICAgICk6IFByb21pc2U8VE9OQ29udHJhY3RSdW5NZXNzYWdlPiB7XG4gICAgICAgIGNvbnN0IG1lc3NhZ2UgPSBhd2FpdCB0aGlzLmNyZWF0ZVNpZ25lZE1lc3NhZ2Uoe1xuICAgICAgICAgICAgYWJpOiBwYXJhbXMudW5zaWduZWRNZXNzYWdlLnNpZ25QYXJhbXMuYWJpLFxuICAgICAgICAgICAgdW5zaWduZWRCeXRlc0Jhc2U2NDogcGFyYW1zLnVuc2lnbmVkTWVzc2FnZS5zaWduUGFyYW1zLnVuc2lnbmVkQnl0ZXNCYXNlNjQsXG4gICAgICAgICAgICBzaWduQnl0ZXNCYXNlNjQ6IHBhcmFtcy5zaWduQnl0ZXNCYXNlNjQsXG4gICAgICAgICAgICBwdWJsaWNLZXlIZXg6IHBhcmFtcy5wdWJsaWNLZXlIZXgsXG4gICAgICAgIH0pO1xuICAgICAgICBtZXNzYWdlLmV4cGlyZSA9IHBhcmFtcy51bnNpZ25lZE1lc3NhZ2Uuc2lnblBhcmFtcy5leHBpcmU7XG4gICAgICAgIHJldHVybiB7XG4gICAgICAgICAgICBhZGRyZXNzOiBwYXJhbXMudW5zaWduZWRNZXNzYWdlLmFkZHJlc3MsXG4gICAgICAgICAgICBhYmk6IHBhcmFtcy51bnNpZ25lZE1lc3NhZ2Uuc2lnblBhcmFtcy5hYmksXG4gICAgICAgICAgICBmdW5jdGlvbk5hbWU6IHBhcmFtcy51bnNpZ25lZE1lc3NhZ2UuZnVuY3Rpb25OYW1lLFxuICAgICAgICAgICAgbWVzc2FnZSxcbiAgICAgICAgfTtcbiAgICB9XG5cbiAgICBhc3luYyBnZXRDb2RlRnJvbUltYWdlKFxuICAgICAgICBwYXJhbXM6IFRPTkNvbnRyYWN0R2V0Q29kZUZyb21JbWFnZVBhcmFtcyxcbiAgICApOiBQcm9taXNlPFRPTkNvbnRyYWN0R2V0Q29kZUZyb21JbWFnZVJlc3VsdD4ge1xuICAgICAgICByZXR1cm4gdGhpcy5yZXF1ZXN0Q29yZSgnY29udHJhY3RzLmltYWdlLmNvZGUnLCBwYXJhbXMpO1xuICAgIH1cblxuICAgIGFzeW5jIGdldERlcGxveURhdGEoXG4gICAgICAgIHBhcmFtczogVE9OQ29udHJhY3RHZXREZXBsb3lEYXRhUGFyYW1zLFxuICAgICk6IFByb21pc2U8VE9OQ29udHJhY3RHZXREZXBsb3lEYXRhUmVzdWx0PiB7XG4gICAgICAgIHJldHVybiB0aGlzLnJlcXVlc3RDb3JlKCdjb250cmFjdHMuZGVwbG95LmRhdGEnLCBwYXJhbXMpO1xuICAgIH1cblxuICAgIGFzeW5jIGNyZWF0ZVJ1bkJvZHkoXG4gICAgICAgIHBhcmFtczogVE9OQ29udHJhY3RDcmVhdGVSdW5Cb2R5UGFyYW1zLFxuICAgICk6IFByb21pc2U8VE9OQ29udHJhY3RDcmVhdGVSdW5Cb2R5UmVzdWx0PiB7XG4gICAgICAgIHJldHVybiB0aGlzLnJlcXVlc3RDb3JlKCdjb250cmFjdHMucnVuLmJvZHknLCBwYXJhbXMpO1xuICAgIH1cblxuICAgIGFzeW5jIGdldEZ1bmN0aW9uSWQoXG4gICAgICAgIHBhcmFtczogVE9OQ29udHJhY3RHZXRGdW5jdGlvbklkUGFyYW1zLFxuICAgICk6IFByb21pc2U8VE9OQ29udHJhY3RHZXRGdW5jdGlvbklkUmVzdWx0PiB7XG4gICAgICAgIHJldHVybiB0aGlzLnJlcXVlc3RDb3JlKCdjb250cmFjdHMuZnVuY3Rpb24uaWQnLCBwYXJhbXMpO1xuICAgIH1cblxuICAgIGFzeW5jIGdldEJvY0hhc2goXG4gICAgICAgIHBhcmFtczogVE9OQ29udHJhY3RCb2MsXG4gICAgKTogUHJvbWlzZTxUT05Db250cmFjdEdldEJvY0hhc2hSZXN1bHQ+IHtcbiAgICAgICAgcmV0dXJuIHRoaXMucmVxdWVzdENvcmUoJ2NvbnRyYWN0cy5ib2MuaGFzaCcsIHBhcmFtcyk7XG4gICAgfVxuXG4gICAgYXN5bmMgcGFyc2VNZXNzYWdlKFxuICAgICAgICBwYXJhbXM6IFRPTkNvbnRyYWN0Qm9jLFxuICAgICk6IFByb21pc2U8UU1lc3NhZ2U+IHtcbiAgICAgICAgcmV0dXJuIHRoaXMucmVxdWVzdENvcmUoJ2NvbnRyYWN0cy5wYXJzZS5tZXNzYWdlJywgcGFyYW1zKTtcbiAgICB9XG5cbiAgICAvLyBNZXNzYWdlIHBhcnNpbmdcblxuICAgIGFzeW5jIGRlY29kZVJ1bk91dHB1dChcbiAgICAgICAgcGFyYW1zOiBUT05Db250cmFjdERlY29kZVJ1bk91dHB1dFBhcmFtcyxcbiAgICApOiBQcm9taXNlPFRPTkNvbnRyYWN0UnVuUmVzdWx0PiB7XG4gICAgICAgIHJldHVybiB0aGlzLnJlcXVlc3RDb3JlKCdjb250cmFjdHMucnVuLm91dHB1dCcsIHBhcmFtcyk7XG4gICAgfVxuXG5cbiAgICBhc3luYyBkZWNvZGVJbnB1dE1lc3NhZ2VCb2R5KFxuICAgICAgICBwYXJhbXM6IFRPTkNvbnRyYWN0RGVjb2RlTWVzc2FnZUJvZHlQYXJhbXMsXG4gICAgKTogUHJvbWlzZTxUT05Db250cmFjdERlY29kZU1lc3NhZ2VCb2R5UmVzdWx0PiB7XG4gICAgICAgIHJldHVybiB0aGlzLnJlcXVlc3RDb3JlKCdjb250cmFjdHMucnVuLnVua25vd24uaW5wdXQnLCBwYXJhbXMpO1xuICAgIH1cblxuXG4gICAgYXN5bmMgZGVjb2RlT3V0cHV0TWVzc2FnZUJvZHkoXG4gICAgICAgIHBhcmFtczogVE9OQ29udHJhY3REZWNvZGVNZXNzYWdlQm9keVBhcmFtcyxcbiAgICApOiBQcm9taXNlPFRPTkNvbnRyYWN0RGVjb2RlTWVzc2FnZUJvZHlSZXN1bHQ+IHtcbiAgICAgICAgcmV0dXJuIHRoaXMucmVxdWVzdENvcmUoJ2NvbnRyYWN0cy5ydW4udW5rbm93bi5vdXRwdXQnLCBwYXJhbXMpO1xuICAgIH1cblxuICAgIC8vIE1lc3NhZ2UgcHJvY2Vzc2luZ1xuXG4gICAgYXN5bmMgZW5zdXJlTWVzc2FnZUlkKG1lc3NhZ2U6IFRPTkNvbnRyYWN0TWVzc2FnZSk6IFByb21pc2U8c3RyaW5nPiB7XG4gICAgICAgIHJldHVybiBtZXNzYWdlLm1lc3NhZ2VJZCB8fCBhd2FpdCAoYXN5bmMgKCkgPT4ge1xuICAgICAgICAgICAgY29uc3QgaWQgPSAoYXdhaXQgdGhpcy5nZXRCb2NIYXNoKHtcbiAgICAgICAgICAgICAgICBib2NCYXNlNjQ6IG1lc3NhZ2UubWVzc2FnZUJvZHlCYXNlNjQsXG4gICAgICAgICAgICB9KSkuaGFzaDtcbiAgICAgICAgICAgIG1lc3NhZ2UubWVzc2FnZUlkID0gaWQ7XG4gICAgICAgICAgICByZXR1cm4gaWQ7XG4gICAgICAgIH0pKCk7XG4gICAgfVxuXG4gICAgYXN5bmMgc2VuZE1lc3NhZ2UoXG4gICAgICAgIHBhcmFtczogVE9OQ29udHJhY3RNZXNzYWdlLFxuICAgICAgICBwYXJlbnRTcGFuPzogKFNwYW4gfCBTcGFuQ29udGV4dCksXG4gICAgKTogUHJvbWlzZTxUT05NZXNzYWdlUHJvY2Vzc2luZ1N0YXRlPiB7XG4gICAgICAgIGNvbnN0IGV4cGlyZSA9IHBhcmFtcy5leHBpcmU7XG4gICAgICAgIGlmIChleHBpcmUgJiYgKERhdGUubm93KCkgPiBleHBpcmUgKiAxMDAwKSkge1xuICAgICAgICAgICAgdGhyb3cgVE9OQ2xpZW50RXJyb3Iuc2VuZE5vZGVSZXF1ZXN0RmFpbGVkKFxuICAgICAgICAgICAgICAgICdNZXNzYWdlIGFscmVhZHkgZXhwaXJlZCcsXG4gICAgICAgICAgICAgICAgYXdhaXQgdGhpcy5jb21wbGV0ZUVycm9yRGF0YSh7XG4gICAgICAgICAgICAgICAgICAgIGFkZHJlc3M6IHBhcmFtcy5hZGRyZXNzLFxuICAgICAgICAgICAgICAgICAgICBtZXNzYWdlX2lkOiBwYXJhbXMubWVzc2FnZUlkLFxuICAgICAgICAgICAgICAgIH0pLFxuICAgICAgICAgICAgKTtcbiAgICAgICAgfVxuICAgICAgICBjb25zdCBzZXJ2ZXJUaW1lRGVsdGEgPSBNYXRoLmFicyhhd2FpdCB0aGlzLnF1ZXJpZXMuc2VydmVyVGltZURlbHRhKHBhcmVudFNwYW4pKTtcbiAgICAgICAgaWYgKHNlcnZlclRpbWVEZWx0YSA+IHRoaXMuY29uZmlnLm91dE9mU3luY1RocmVzaG9sZCgpKSB7XG4gICAgICAgICAgICB0aGlzLnF1ZXJpZXMuZHJvcFNlcnZlclRpbWVEZWx0YSgpO1xuICAgICAgICAgICAgdGhyb3cgVE9OQ2xpZW50RXJyb3IuY2xvY2tPdXRPZlN5bmMoYXdhaXQgdGhpcy5jb21wbGV0ZUVycm9yRGF0YSgpKTtcbiAgICAgICAgfVxuICAgICAgICBjb25zdCBsYXN0QmxvY2tJZCA9IGF3YWl0IHRoaXMuZmluZExhc3RTaGFyZEJsb2NrKHBhcmFtcy5hZGRyZXNzKTtcbiAgICAgICAgY29uc3QgaWQgPSBhd2FpdCB0aGlzLmVuc3VyZU1lc3NhZ2VJZChwYXJhbXMpO1xuICAgICAgICBjb25zdCBpZEJhc2U2NCA9IEJ1ZmZlci5mcm9tKGlkLCAnaGV4JykudG9TdHJpbmcoJ2Jhc2U2NCcpO1xuICAgICAgICBjb25zdCBtZXNzYWdlU3BhbiA9IHRoaXMuY29udGV4dC5zdGFydFJvb3RTcGFuKFxuICAgICAgICAgICAgaWQuc3Vic3RyKDAsIDE2KSxcbiAgICAgICAgICAgIGlkLnN1YnN0cigxNiwgMTYpLFxuICAgICAgICAgICAgJ21lc3NhZ2VQcm9jZXNzaW5nJyxcbiAgICAgICAgKTtcbiAgICAgICAgbWVzc2FnZVNwYW4uYWRkVGFncyh7XG4gICAgICAgICAgICBtZXNzYWdlSWQ6IGlkLFxuICAgICAgICAgICAgbWVzc2FnZVNpemU6IE1hdGguY2VpbChwYXJhbXMubWVzc2FnZUJvZHlCYXNlNjQubGVuZ3RoICogMyAvIDQpLFxuICAgICAgICAgICAgYWRkcmVzczogcGFyYW1zLmFkZHJlc3MsXG4gICAgICAgICAgICBleHBpcmU6IHBhcmFtcy5leHBpcmUsXG4gICAgICAgIH0pO1xuICAgICAgICBhd2FpdCB0aGlzLnF1ZXJpZXMucG9zdFJlcXVlc3RzKFtcbiAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICBpZDogaWRCYXNlNjQsXG4gICAgICAgICAgICAgICAgYm9keTogcGFyYW1zLm1lc3NhZ2VCb2R5QmFzZTY0LFxuICAgICAgICAgICAgfSxcbiAgICAgICAgXSwgcGFyZW50U3Bhbik7XG4gICAgICAgIG1lc3NhZ2VTcGFuLmZpbmlzaCgpO1xuICAgICAgICB0aGlzLmNvbmZpZy5sb2coJ3NlbmRNZXNzYWdlLiBSZXF1ZXN0IHBvc3RlZCcsIGlkKTtcbiAgICAgICAgcmV0dXJuIHtcbiAgICAgICAgICAgIGxhc3RCbG9ja0lkLFxuICAgICAgICAgICAgc2VuZGluZ1RpbWU6IE1hdGgucm91bmQoRGF0ZS5ub3coKSAvIDEwMDApLFxuICAgICAgICB9O1xuICAgIH1cblxuICAgIGFzeW5jIHByb2Nlc3NNZXNzYWdlKFxuICAgICAgICBtZXNzYWdlOiBUT05Db250cmFjdE1lc3NhZ2UsXG4gICAgICAgIHJlc3VsdEZpZWxkczogc3RyaW5nLFxuICAgICAgICBwYXJlbnRTcGFuPzogKFNwYW4gfCBTcGFuQ29udGV4dCksXG4gICAgICAgIHJldHJ5SW5kZXg/OiBudW1iZXIsXG4gICAgICAgIGFkZHJlc3M/OiBzdHJpbmcsXG4gICAgICAgIGFiaT86IFRPTkNvbnRyYWN0QUJJLFxuICAgICAgICBmdW5jdGlvbk5hbWU/OiBzdHJpbmcsXG4gICAgKTogUHJvbWlzZTxRVHJhbnNhY3Rpb24+IHtcbiAgICAgICAgY29uc3QgcHJvY2Vzc2luZyA9IGF3YWl0IHRoaXMuc2VuZE1lc3NhZ2UobWVzc2FnZSwgcGFyZW50U3Bhbik7XG4gICAgICAgIGNvbnN0IHsgdHJhbnNhY3Rpb24gfSA9IGF3YWl0IHRoaXMud2FpdEZvclRyYW5zYWN0aW9uKHtcbiAgICAgICAgICAgIG1lc3NhZ2UsXG4gICAgICAgICAgICBtZXNzYWdlUHJvY2Vzc2luZ1N0YXRlOiBwcm9jZXNzaW5nLFxuICAgICAgICAgICAgcGFyZW50U3BhbixcbiAgICAgICAgICAgIGFiaSxcbiAgICAgICAgICAgIGZ1bmN0aW9uTmFtZSxcbiAgICAgICAgfSk7XG4gICAgICAgIHJldHVybiB0cmFuc2FjdGlvbjtcbiAgICB9XG5cblxuICAgIGFzeW5jIGZpbmRMYXN0QmxvY2soY2hhaW46IG51bWJlciwgcmVzdWx0OiBzdHJpbmcsIGFkZGl0aW9uYWxGaWx0ZXI/OiBhbnkpOiBQcm9taXNlPD9hbnk+IHtcbiAgICAgICAgY29uc3QgYmxvY2tzID0gYXdhaXQgdGhpcy5xdWVyaWVzLmJsb2Nrcy5xdWVyeSh7XG4gICAgICAgICAgICBmaWx0ZXI6IHsgd29ya2NoYWluX2lkOiB7IGVxOiBjaGFpbiB9LCAuLi4oYWRkaXRpb25hbEZpbHRlciB8fCB7fSkgfSxcbiAgICAgICAgICAgIHJlc3VsdCxcbiAgICAgICAgICAgIG9yZGVyQnk6IFtcbiAgICAgICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgICAgIHBhdGg6ICdzZXFfbm8nLFxuICAgICAgICAgICAgICAgICAgICBkaXJlY3Rpb246ICdERVNDJyxcbiAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgXSxcbiAgICAgICAgICAgIGxpbWl0OiAxLFxuICAgICAgICB9KTtcbiAgICAgICAgcmV0dXJuIGJsb2Nrcy5sZW5ndGggPiAwID8gYmxvY2tzWzBdIDogbnVsbDtcbiAgICB9XG5cbiAgICBhc3luYyBmaW5kTWF0Y2hpbmdTaGFyZChzaGFyZHM6IFFTaGFyZEhhc2hbXSwgYWRkcmVzczogc3RyaW5nKTogUHJvbWlzZTw/UVNoYXJkSGFzaD4ge1xuICAgICAgICByZXR1cm4gdGhpcy5yZXF1ZXN0Q29yZSgnY29udHJhY3RzLmZpbmQuc2hhcmQnLCB7XG4gICAgICAgICAgICBzaGFyZHMsXG4gICAgICAgICAgICBhZGRyZXNzLFxuICAgICAgICB9KTtcbiAgICB9XG5cbiAgICBhc3luYyBmaW5kTGFzdFNoYXJkQmxvY2soYWRkcmVzczogc3RyaW5nKTogUHJvbWlzZTxzdHJpbmc+IHtcbiAgICAgICAgY29uc3QgYWRkcmVzc1BhcnRzID0gYWRkcmVzcy5zcGxpdCgnOicpO1xuICAgICAgICBjb25zdCB3b3JrY2hhaW4gPSBhZGRyZXNzUGFydHMubGVuZ3RoID4gMSA/IE51bWJlci5wYXJzZUludChhZGRyZXNzUGFydHNbMF0sIDEwKSA6IDA7XG5cblxuICAgICAgICAvLyBpZiBhY2NvdW50IHJlc2lkZXMgaW4gbWFzdGVyIGNoYWluIHRoZW4gc3RhcnRpbmcgcG9pbnQgaXMgbGFzdCBtYXN0ZXIgY2hhaW4gYmxvY2tcbiAgICAgICAgLy8gZ2VuZXJhdGVkIGJlZm9yZSBtZXNzYWdlIHdhcyBzZW50XG4gICAgICAgIGNvbnN0IG1hc3RlcmNoYWluTGFzdEJsb2NrID0gYXdhaXQgdGhpcy5maW5kTGFzdEJsb2NrKFxuICAgICAgICAgICAgTUFTVEVSQ0hBSU5fSUQsXG4gICAgICAgICAgICAnaWQgbWFzdGVyIHsgc2hhcmRfaGFzaGVzIHsgd29ya2NoYWluX2lkIHNoYXJkIGRlc2NyIHsgcm9vdF9oYXNoIH0gfSB9JyxcbiAgICAgICAgKTtcblxuICAgICAgICAvLyBpZiBhY2NvdW50IHJlc2lkZXMgaW4gbWFzdGVyY2hhaW4gdGhlbiBzdGFydGluZyBwb2ludCBpcyBsYXN0IG1hc3RlcmNoYWluIGJsb2NrXG4gICAgICAgIGlmICh3b3JrY2hhaW4gPT09IE1BU1RFUkNIQUlOX0lEKSB7XG4gICAgICAgICAgICBpZiAoIW1hc3RlcmNoYWluTGFzdEJsb2NrKSB7XG4gICAgICAgICAgICAgICAgdGhyb3cgVE9OQ2xpZW50RXJyb3Iubm9CbG9ja3MoTUFTVEVSQ0hBSU5fSUQsIGF3YWl0IHRoaXMuY29tcGxldGVFcnJvckRhdGEoe1xuICAgICAgICAgICAgICAgICAgICBhZGRyZXNzLFxuICAgICAgICAgICAgICAgIH0pKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIHJldHVybiBtYXN0ZXJjaGFpbkxhc3RCbG9jay5pZDtcbiAgICAgICAgfVxuXG4gICAgICAgIC8vIGlmIGFjY291bnQgaXMgZnJvbSBvdGhlciBjaGFpbnMgdGhlbiBzdGFydGluZyBwb2ludCBpcyBsYXN0IGFjY291bnQncyBzaGFyZCBibG9ja1xuICAgICAgICAvLyBUbyBvYnRhaW4gaXQgd2UgdGFrZSBtYXN0ZXJjaGFpbiBibG9jayB0byBnZXQgc2hhcmRzIGNvbmZpZ3VyYXRpb24gYW5kIHNlbGVjdFxuICAgICAgICAvLyBtYXRjaGluZyBzaGFyZFxuICAgICAgICBpZiAoIW1hc3RlcmNoYWluTGFzdEJsb2NrKSB7XG4gICAgICAgICAgICAvLyBOb2RlIFNFIGNhc2UgLSBubyBtYXN0ZXJjaGFpbiwgbm8gc2hhcmRpbmcuIENoZWNrIHRoYXQgb25seSBvbmUgc2hhcmRcbiAgICAgICAgICAgIGxldCB3b3JrY2hhaW5MYXN0QmxvY2sgPSBhd2FpdCB0aGlzLmZpbmRMYXN0QmxvY2sod29ya2NoYWluLCAnYWZ0ZXJfbWVyZ2Ugc2hhcmQnKTtcbiAgICAgICAgICAgIGlmICghd29ya2NoYWluTGFzdEJsb2NrKSB7XG4gICAgICAgICAgICAgICAgdGhyb3cgVE9OQ2xpZW50RXJyb3Iubm9CbG9ja3Mod29ya2NoYWluLCBhd2FpdCB0aGlzLmNvbXBsZXRlRXJyb3JEYXRhKHtcbiAgICAgICAgICAgICAgICAgICAgYWRkcmVzcyxcbiAgICAgICAgICAgICAgICB9KSk7XG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICAgIC8vIGlmIHdvcmtjaGFpbiBpcyBzaGFyZGVkIHRoZW4gaXQgaXMgbm90IE5vZGUgU0UgYW5kIG1hc3RlcmNoYWluIGJsb2NrcyBtaXNzaW5nXG4gICAgICAgICAgICAvLyBpcyBlcnJvclxuICAgICAgICAgICAgaWYgKHdvcmtjaGFpbkxhc3RCbG9jay5hZnRlcl9tZXJnZSB8fCB3b3JrY2hhaW5MYXN0QmxvY2suc2hhcmQgIT09ICc4MDAwMDAwMDAwMDAwMDAwJykge1xuICAgICAgICAgICAgICAgIHRocm93IFRPTkNsaWVudEVycm9yLm5vQmxvY2tzKE1BU1RFUkNIQUlOX0lELCBhd2FpdCB0aGlzLmNvbXBsZXRlRXJyb3JEYXRhKHtcbiAgICAgICAgICAgICAgICAgICAgYWRkcmVzcyxcbiAgICAgICAgICAgICAgICB9KSk7XG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICAgIC8vIFRha2UgbGFzdCBibG9jayBieSBzZXFfbm9cbiAgICAgICAgICAgIHdvcmtjaGFpbkxhc3RCbG9jayA9IGF3YWl0IHRoaXMuZmluZExhc3RCbG9jayh3b3JrY2hhaW4sICdpZCcsIHtcbiAgICAgICAgICAgICAgICBzaGFyZDogeyBlcTogJzgwMDAwMDAwMDAwMDAwMDAnIH0sXG4gICAgICAgICAgICB9KTtcbiAgICAgICAgICAgIGlmICghd29ya2NoYWluTGFzdEJsb2NrKSB7XG4gICAgICAgICAgICAgICAgdGhyb3cgVE9OQ2xpZW50RXJyb3IuaW52YWxpZEJsb2NrY2hhaW4oXG4gICAgICAgICAgICAgICAgICAgICdObyBzdGFydGluZyBOb2RlIFNFIGJsb2NrIGZvdW5kJyxcbiAgICAgICAgICAgICAgICAgICAgYXdhaXQgdGhpcy5jb21wbGV0ZUVycm9yRGF0YSh7XG4gICAgICAgICAgICAgICAgICAgICAgICBhZGRyZXNzLFxuICAgICAgICAgICAgICAgICAgICB9KSxcbiAgICAgICAgICAgICAgICApO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgcmV0dXJuIHdvcmtjaGFpbkxhc3RCbG9jay5pZDtcbiAgICAgICAgfVxuXG4gICAgICAgIGNvbnN0IHNoYXJkczogP1FTaGFyZEhhc2hbXSA9IG1hc3RlcmNoYWluTGFzdEJsb2NrPy5tYXN0ZXI/LnNoYXJkX2hhc2hlcztcbiAgICAgICAgaWYgKCFzaGFyZHMgfHwgc2hhcmRzLmxlbmd0aCA9PT0gMCkge1xuICAgICAgICAgICAgdGhyb3cgVE9OQ2xpZW50RXJyb3IuaW52YWxpZEJsb2NrY2hhaW4oXG4gICAgICAgICAgICAgICAgJ05vIGBzaGFyZF9oYXNoZXNgIGZpZWxkIGluIG1hc3RlcmNoYWluIGJsb2NrJyxcbiAgICAgICAgICAgICAgICBhd2FpdCB0aGlzLmNvbXBsZXRlRXJyb3JEYXRhKHtcbiAgICAgICAgICAgICAgICAgICAgYWRkcmVzcyxcbiAgICAgICAgICAgICAgICB9KSxcbiAgICAgICAgICAgICk7XG4gICAgICAgIH1cbiAgICAgICAgY29uc3Qgc2hhcmRCbG9jayA9IGF3YWl0IHRoaXMuZmluZE1hdGNoaW5nU2hhcmQoc2hhcmRzLCBhZGRyZXNzKTtcbiAgICAgICAgY29uc3Qgcm9vdF9oYXNoID0gc2hhcmRCbG9jaz8uZGVzY3I/LnJvb3RfaGFzaDtcbiAgICAgICAgaWYgKCFyb290X2hhc2gpIHtcbiAgICAgICAgICAgIHRocm93IFRPTkNsaWVudEVycm9yLmludmFsaWRCbG9ja2NoYWluKFxuICAgICAgICAgICAgICAgICdObyBgcm9vdF9oYXNoYCBmaWVsZCBpbiBzaGFyZCBkZXNjcicsXG4gICAgICAgICAgICAgICAgYXdhaXQgdGhpcy5jb21wbGV0ZUVycm9yRGF0YSh7XG4gICAgICAgICAgICAgICAgICAgIGFkZHJlc3MsXG4gICAgICAgICAgICAgICAgfSksXG4gICAgICAgICAgICApO1xuICAgICAgICB9XG4gICAgICAgIHJldHVybiByb290X2hhc2g7XG4gICAgfVxuXG4gICAgYXN5bmMgY2hlY2tTaGFyZE1hdGNoKGJsb2NrOiBRQmxvY2ssIGFkZHJlc3M6IHN0cmluZyk6IFByb21pc2U8Ym9vbGVhbj4ge1xuICAgICAgICByZXR1cm4gISEoYXdhaXQgdGhpcy5maW5kTWF0Y2hpbmdTaGFyZChbXG4gICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgd29ya2NoYWluX2lkOiBibG9jay53b3JrY2hhaW5faWQgfHwgMCxcbiAgICAgICAgICAgICAgICBzaGFyZDogYmxvY2suc2hhcmQgfHwgJycsXG4gICAgICAgICAgICB9LFxuICAgICAgICBdLCBhZGRyZXNzKSk7XG4gICAgfVxuXG4gICAgYXN5bmMgd2FpdE5leHRCbG9jayhjdXJyZW50OiBzdHJpbmcsIGFkZHJlc3M6IHN0cmluZywgdGltZW91dD86IG51bWJlcik6IFByb21pc2U8UUJsb2NrPiB7XG4gICAgICAgIGNvbnN0IGJsb2NrID0gYXdhaXQgdGhpcy5xdWVyaWVzLmJsb2Nrcy53YWl0Rm9yKHtcbiAgICAgICAgICAgIGZpbHRlcjoge1xuICAgICAgICAgICAgICAgIHByZXZfcmVmOiB7XG4gICAgICAgICAgICAgICAgICAgIHJvb3RfaGFzaDogeyBlcTogY3VycmVudCB9LFxuICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgT1I6IHtcbiAgICAgICAgICAgICAgICAgICAgcHJldl9hbHRfcmVmOiB7XG4gICAgICAgICAgICAgICAgICAgICAgICByb290X2hhc2g6IHsgZXE6IGN1cnJlbnQgfSxcbiAgICAgICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgfSxcbiAgICAgICAgICAgIHJlc3VsdDogQkxPQ0tfRklFTERTLFxuICAgICAgICAgICAgdGltZW91dCxcbiAgICAgICAgfSk7XG5cbiAgICAgICAgaWYgKGJsb2NrPy5hZnRlcl9zcGxpdCAmJiAhKGF3YWl0IHRoaXMuY2hlY2tTaGFyZE1hdGNoKGJsb2NrLCBhZGRyZXNzKSkpIHtcbiAgICAgICAgICAgIHJldHVybiB0aGlzLnF1ZXJpZXMuYmxvY2tzLndhaXRGb3Ioe1xuICAgICAgICAgICAgICAgIGZpbHRlcjoge1xuICAgICAgICAgICAgICAgICAgICBpZDogeyBuZTogYmxvY2suaWQgfSxcbiAgICAgICAgICAgICAgICAgICAgcHJldl9yZWY6IHtcbiAgICAgICAgICAgICAgICAgICAgICAgIHJvb3RfaGFzaDogeyBlcTogY3VycmVudCB9LFxuICAgICAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgcmVzdWx0OiBCTE9DS19GSUVMRFMsXG4gICAgICAgICAgICAgICAgdGltZW91dCxcbiAgICAgICAgICAgIH0pO1xuICAgICAgICB9XG4gICAgICAgIHJldHVybiBibG9jaztcbiAgICB9XG5cbiAgICBhc3luYyB3YWl0Rm9yVHJhbnNhY3Rpb24ocGFyYW1zOiBUT05XYWl0Rm9yVHJhbnNhY3Rpb25QYXJhbXMpOiBQcm9taXNlPFRPTkNvbnRyYWN0UnVuUmVzdWx0PiB7XG4gICAgICAgIGNvbnN0IHRvdGFsU3RhcnQgPSBEYXRlLm5vdygpO1xuICAgICAgICBjb25zdCBleHBpcmUgPSBwYXJhbXMubWVzc2FnZS5leHBpcmUgfHwgMDtcbiAgICAgICAgY29uc3QgbWVzc2FnZUlkID0gYXdhaXQgdGhpcy5lbnN1cmVNZXNzYWdlSWQocGFyYW1zLm1lc3NhZ2UpO1xuICAgICAgICBjb25zdCBhZGRyZXNzID0gcGFyYW1zLm1lc3NhZ2UuYWRkcmVzcztcbiAgICAgICAgY29uc3QgcHJvY2Vzc2luZyA9IHsgLi4ucGFyYW1zLm1lc3NhZ2VQcm9jZXNzaW5nU3RhdGUgfTtcbiAgICAgICAgbGV0IHRyYW5zYWN0aW9uID0gbnVsbDtcbiAgICAgICAgdHJ5IHtcbiAgICAgICAgICAgIGNvbnN0IHRpbWVSZXBvcnQgPSBbXTtcblxuICAgICAgICAgICAgY29uc3Qgc3RvcFRpbWUgPSBleHBpcmVcbiAgICAgICAgICAgICAgICB8fCBNYXRoLnJvdW5kKChEYXRlLm5vdygpICsgdGhpcy5jb25maWcubWVzc2FnZVByb2Nlc3NpbmdUaW1lb3V0KCkpIC8gMTAwMCk7XG5cbiAgICAgICAgICAgIGNvbnN0IGluZmluaXRlV2FpdCA9IHBhcmFtcy5pbmZpbml0ZVdhaXQgIT09IGZhbHNlO1xuICAgICAgICAgICAgY29uc3QgYWRkVGltZW91dCA9IHRoaXMuY29uZmlnLm1lc3NhZ2VQcm9jZXNzaW5nVGltZW91dCgpO1xuICAgICAgICAgICAgd2hpbGUgKCF0cmFuc2FjdGlvbikge1xuICAgICAgICAgICAgICAgIGNvbnN0IG5vdyA9IERhdGUubm93KCk7XG4gICAgICAgICAgICAgICAgY29uc3QgdGltZW91dCA9IE1hdGgubWF4KHN0b3BUaW1lLCBub3cpIC0gbm93ICsgYWRkVGltZW91dDtcbiAgICAgICAgICAgICAgICBsZXQgYmxvY2s6ID9RQmxvY2sgPSBudWxsO1xuICAgICAgICAgICAgICAgIHRyeSB7XG4gICAgICAgICAgICAgICAgICAgIGNvbnN0IHN0YXJ0ID0gRGF0ZS5ub3coKTtcbiAgICAgICAgICAgICAgICAgICAgYmxvY2sgPSBhd2FpdCB0aGlzLndhaXROZXh0QmxvY2socHJvY2Vzc2luZy5sYXN0QmxvY2tJZCwgYWRkcmVzcywgdGltZW91dCk7XG4gICAgICAgICAgICAgICAgICAgIGNvbnN0IGVuZCA9IERhdGUubm93KCk7XG4gICAgICAgICAgICAgICAgICAgIHRpbWVSZXBvcnQucHVzaChcbiAgICAgICAgICAgICAgICAgICAgICAgIGBCbG9jayBbJHtibG9jay5pZCB8fCAnJ31dIGBcbiAgICAgICAgICAgICAgICAgICAgICAgICsgYGhhcyBiZWVuIHJlY2VpdmVkOiAke2VuZCAtIHN0YXJ0fSBtcywgYFxuICAgICAgICAgICAgICAgICAgICAgICAgKyBgY2xpZW50IHRpbWU6ICR7TWF0aC5yb3VuZChlbmQgLyAxMDAwKX0sIGBcbiAgICAgICAgICAgICAgICAgICAgICAgICsgYGdlbl91dGltZTogJHtibG9jay5nZW5fdXRpbWUgfHwgMH1gLFxuICAgICAgICAgICAgICAgICAgICApO1xuICAgICAgICAgICAgICAgIH0gY2F0Y2ggKGVycm9yKSB7XG4gICAgICAgICAgICAgICAgICAgIHRoaXMuY29uZmlnLmxvZygnQmxvY2sgd2FpdGluZyBmYWlsZWQ6ICcsIGVycm9yKTtcbiAgICAgICAgICAgICAgICAgICAgaWYgKCFpbmZpbml0ZVdhaXQpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIGxldCByZXNvbHZlZEVycm9yID0gZXJyb3I7XG4gICAgICAgICAgICAgICAgICAgICAgICBpZiAoZXJyb3IuY29kZSA9PT0gVE9ORXJyb3JDb2RlLldBSVRfRk9SX1RJTUVPVVQpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICByZXNvbHZlZEVycm9yID0gVE9OQ2xpZW50RXJyb3IubmV0d29ya1NpbGVudChcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgYXdhaXQgdGhpcy5jb21wbGV0ZUVycm9yRGF0YSh7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBhZGRyZXNzLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgbWVzc2FnZV9pZDogbWVzc2FnZUlkLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgYmxvY2tfaWQ6IHByb2Nlc3NpbmcubGFzdEJsb2NrSWQsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB0aW1lb3V0LFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgbWVzc2FnZV9wcm9jZXNzaW5nX3N0YXRlOiBwcm9jZXNzaW5nLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgZXhwaXJlLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgc2VuZGluZ190aW1lOiBwcm9jZXNzaW5nLnNlbmRpbmdUaW1lLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9KSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICApO1xuICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgICAgdGhyb3cgcmVzb2x2ZWRFcnJvcjtcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICB0aGlzLmNvbmZpZy5sb2coJ1JldHJ5IHdhaXRpbmcuJyk7XG4gICAgICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICAgICAgaWYgKGJsb2NrKSB7XG4gICAgICAgICAgICAgICAgICAgIHByb2Nlc3NpbmcubGFzdEJsb2NrSWQgPSBibG9jay5pZCB8fCAnJztcblxuICAgICAgICAgICAgICAgICAgICBjb25zdCBpbk1zZyA9IChibG9jay5pbl9tc2dfZGVzY3IgfHwgW10pLmZpbmQoeCA9PiB4Lm1zZ19pZCA9PT0gbWVzc2FnZUlkKTtcbiAgICAgICAgICAgICAgICAgICAgaWYgKGluTXNnKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICBjb25zdCB0cmFuc2FjdGlvbklkID0gaW5Nc2cudHJhbnNhY3Rpb25faWQ7XG4gICAgICAgICAgICAgICAgICAgICAgICBpZiAoIXRyYW5zYWN0aW9uSWQpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB0aHJvdyBUT05DbGllbnRFcnJvci5pbnZhbGlkQmxvY2tjaGFpbihcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgJ05vIGZpZWxkIGB0cmFuc2FjdGlvbl9pZGAgaW4gYmxvY2snLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBhd2FpdCB0aGlzLmNvbXBsZXRlRXJyb3JEYXRhKHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGFkZHJlc3MsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBtZXNzYWdlX2lkOiBtZXNzYWdlSWQsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH0pLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICk7XG4gICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICAgICBjb25zdCB0clN0YXJ0ID0gRGF0ZS5ub3coKTtcbiAgICAgICAgICAgICAgICAgICAgICAgIHRyYW5zYWN0aW9uID0gYXdhaXQgdGhpcy5xdWVyaWVzLnRyYW5zYWN0aW9ucy53YWl0Rm9yKHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBmaWx0ZXI6IHsgaWQ6IHsgZXE6IHRyYW5zYWN0aW9uSWQgfSB9LFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHJlc3VsdDogVFJBTlNBQ1RJT05fRklFTERTX09SRElOQVJZLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRpbWVvdXQ6IE1BWF9USU1FT1VULFxuICAgICAgICAgICAgICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICAgICAgICAgICAgICB0cmFjZU1lc3NhZ2UodGhpcy5jb25maWcudHJhY2VyLCBtZXNzYWdlSWQsICd0cmFuc2FjdGlvblJlY2VpdmVkJywge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRyYW5zYWN0aW9uSWQsXG4gICAgICAgICAgICAgICAgICAgICAgICB9KTtcbiAgICAgICAgICAgICAgICAgICAgICAgIHRpbWVSZXBvcnQucHVzaChgVHJhbnNhY3Rpb24gWyR7dHJhbnNhY3Rpb25JZH1dIGhhcyBiZWVuIHJlY2VpdmVkOiAke0RhdGUubm93KCkgLSB0clN0YXJ0fSBtc2ApO1xuICAgICAgICAgICAgICAgICAgICB9IGVsc2UgaWYgKChibG9jay5nZW5fdXRpbWUgfHwgMCkgPiBzdG9wVGltZSkge1xuICAgICAgICAgICAgICAgICAgICAgICAgaWYgKGV4cGlyZSkge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRyYWNlTWVzc2FnZSh0aGlzLmNvbmZpZy50cmFjZXIsIG1lc3NhZ2VJZCwgJ21lc3NhZ2VFeHBpcmVkJywge30pO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRocm93IFRPTkNsaWVudEVycm9yLm1lc3NhZ2VFeHBpcmVkKFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBhd2FpdCB0aGlzLmNvbXBsZXRlRXJyb3JEYXRhKHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGFkZHJlc3MsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBtZXNzYWdlX2lkOiBtZXNzYWdlSWQsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBzZW5kaW5nX3RpbWU6IHByb2Nlc3Npbmcuc2VuZGluZ1RpbWUsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBleHBpcmU6IHN0b3BUaW1lLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgYmxvY2tfdGltZTogYmxvY2suZ2VuX3V0aW1lLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgYmxvY2tfaWQ6IHByb2Nlc3NpbmcubGFzdEJsb2NrSWQsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH0pLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICk7XG4gICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICAgICB0aHJvdyBUT05DbGllbnRFcnJvci50cmFuc2FjdGlvbldhaXRUaW1lb3V0KFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGF3YWl0IHRoaXMuY29tcGxldGVFcnJvckRhdGEoe1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBhZGRyZXNzLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBtZXNzYWdlX2lkOiBtZXNzYWdlSWQsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHNlbmRpbmdfdGltZTogcHJvY2Vzc2luZy5zZW5kaW5nVGltZSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdGltZW91dCxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgbWVzc2FnZV9wcm9jZXNzaW5nX3N0YXRlOiBwcm9jZXNzaW5nLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIH0pLFxuICAgICAgICAgICAgICAgICAgICAgICAgKTtcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgdGltZVJlcG9ydC5zcGxpY2UoMCwgMCwgYFRyYW5zYWN0aW9uIHdhaXRpbmcgdGltZTogJHtEYXRlLm5vdygpIC0gdG90YWxTdGFydH0gbXNgKTtcbiAgICAgICAgICAgIHRoaXMuY29uZmlnLmxvZyh0aW1lUmVwb3J0LmpvaW4oJ1xcbicpKTtcbiAgICAgICAgfSBjYXRjaCAoZXJyb3IpIHtcbiAgICAgICAgICAgIHRoaXMuY29uZmlnLmxvZygnW3dhaXRGb3JUcmFuc2FjdGlvbl0nLCAnRkFJTEVEJywgZXJyb3IpO1xuICAgICAgICAgICAgaWYgKGVycm9yLmNvZGUgPT09IFRPTkVycm9yQ29kZS5NRVNTQUdFX0VYUElSRURcbiAgICAgICAgICAgICAgICB8fCBlcnJvci5jb2RlID09PSBUT05FcnJvckNvZGUuVFJBTlNBQ1RJT05fV0FJVF9USU1FT1VUKSB7XG4gICAgICAgICAgICAgICAgdGhyb3cgYXdhaXQgdGhpcy5yZXNvbHZlRGV0YWlsZWRFcnJvcihcbiAgICAgICAgICAgICAgICAgICAgZXJyb3IsXG4gICAgICAgICAgICAgICAgICAgIHBhcmFtcy5tZXNzYWdlLm1lc3NhZ2VCb2R5QmFzZTY0LFxuICAgICAgICAgICAgICAgICAgICBwcm9jZXNzaW5nLnNlbmRpbmdUaW1lLFxuICAgICAgICAgICAgICAgICAgICBhZGRyZXNzLFxuICAgICAgICAgICAgICAgICk7XG4gICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAgIHRocm93IGVycm9yO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG5cbiAgICAgICAgcmV0dXJuIHRoaXMucHJvY2Vzc1RyYW5zYWN0aW9uKFxuICAgICAgICAgICAgYWRkcmVzcyxcbiAgICAgICAgICAgIHRyYW5zYWN0aW9uLFxuICAgICAgICAgICAgcGFyYW1zLmFiaSxcbiAgICAgICAgICAgIHBhcmFtcy5mdW5jdGlvbk5hbWUsXG4gICAgICAgICk7XG4gICAgfVxuXG5cbiAgICBhc3luYyBwcm9jZXNzVHJhbnNhY3Rpb24oXG4gICAgICAgIGFkZHJlc3M6IHN0cmluZyxcbiAgICAgICAgdHJhbnNhY3Rpb246IFFUcmFuc2FjdGlvbixcbiAgICAgICAgYWJpOiA/VE9OQ29udHJhY3RBQkksXG4gICAgICAgIGZ1bmN0aW9uTmFtZTogP3N0cmluZyxcbiAgICApOiBQcm9taXNlPFRPTkNvbnRyYWN0UnVuUmVzdWx0PiB7XG4gICAgICAgIHRyeSB7XG4gICAgICAgICAgICBjb25zdCByZXN1bHQgPSBhd2FpdCB0aGlzLnJlcXVlc3RDb3JlKCdjb250cmFjdHMucHJvY2Vzcy50cmFuc2FjdGlvbicsIHtcbiAgICAgICAgICAgICAgICB0cmFuc2FjdGlvbixcbiAgICAgICAgICAgICAgICBhYmksXG4gICAgICAgICAgICAgICAgZnVuY3Rpb25OYW1lLFxuICAgICAgICAgICAgICAgIGFkZHJlc3MsXG4gICAgICAgICAgICB9KTtcbiAgICAgICAgICAgIHJldHVybiB7XG4gICAgICAgICAgICAgICAgdHJhbnNhY3Rpb24sXG4gICAgICAgICAgICAgICAgLi4ucmVzdWx0LFxuICAgICAgICAgICAgfTtcbiAgICAgICAgfSBjYXRjaCAoZXJyb3IpIHtcbiAgICAgICAgICAgIGNvbnN0IGFjY291bnRzID0gYXdhaXQgdGhpcy5xdWVyaWVzLmFjY291bnRzLnF1ZXJ5KHtcbiAgICAgICAgICAgICAgICBmaWx0ZXI6IHsgaWQ6IHsgZXE6IGFkZHJlc3MgfSB9LFxuICAgICAgICAgICAgICAgIHJlc3VsdDogJ2FjY190eXBlIGJhbGFuY2UnLFxuICAgICAgICAgICAgICAgIHRpbWVvdXQ6IDEwMDAsXG4gICAgICAgICAgICB9KTtcbiAgICAgICAgICAgIGlmIChhY2NvdW50cy5sZW5ndGggPT09IDApIHtcbiAgICAgICAgICAgICAgICB0aHJvdyBUT05DbGllbnRFcnJvci5hY2NvdW50TWlzc2luZyhcbiAgICAgICAgICAgICAgICAgICAgYWRkcmVzcyxcbiAgICAgICAgICAgICAgICAgICAgYXdhaXQgdGhpcy5jb21wbGV0ZUVycm9yRGF0YSh7XG4gICAgICAgICAgICAgICAgICAgICAgICBvcmlnaW5hbF9lcnJvcjogZXJyb3IsXG4gICAgICAgICAgICAgICAgICAgICAgICBhZGRyZXNzLFxuICAgICAgICAgICAgICAgICAgICAgICAgZnVuY3Rpb25fbmFtZTogZnVuY3Rpb25OYW1lLFxuICAgICAgICAgICAgICAgICAgICB9KSxcbiAgICAgICAgICAgICAgICApO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgdGhyb3cgZXJyb3I7XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICBhc3luYyByZXNvbHZlRGV0YWlsZWRFcnJvcihcbiAgICAgICAgZXJyb3I6IEVycm9yLFxuICAgICAgICBtZXNzYWdlQmFzZTY0OiBzdHJpbmcsXG4gICAgICAgIHRpbWU6IG51bWJlcixcbiAgICAgICAgYWRkcmVzczogc3RyaW5nLFxuICAgICkge1xuICAgICAgICBjb25zdCBhY2NvdW50cyA9IGF3YWl0IHRoaXMucXVlcmllcy5hY2NvdW50cy5xdWVyeSh7XG4gICAgICAgICAgICBmaWx0ZXI6IHsgaWQ6IHsgZXE6IGFkZHJlc3MgfSB9LFxuICAgICAgICAgICAgcmVzdWx0OiAnaWQgYWNjX3R5cGUgYmFsYW5jZSBiYWxhbmNlX290aGVyIHsgY3VycmVuY3kgdmFsdWUgfSBib2MgY29kZV9oYXNoIGRhdGFfaGFzaCBsYXN0X3BhaWQnLFxuICAgICAgICAgICAgdGltZW91dDogMTAwMCxcbiAgICAgICAgfSk7XG4gICAgICAgIGlmIChhY2NvdW50cy5sZW5ndGggPT09IDApIHtcbiAgICAgICAgICAgIHJldHVybiBUT05DbGllbnRFcnJvci5hY2NvdW50TWlzc2luZyhcbiAgICAgICAgICAgICAgICBhZGRyZXNzLFxuICAgICAgICAgICAgICAgIGF3YWl0IHRoaXMuY29tcGxldGVFcnJvckRhdGEoe1xuICAgICAgICAgICAgICAgICAgICBhZGRyZXNzLFxuICAgICAgICAgICAgICAgICAgICBvcmlnaW5hbF9lcnJvcjogZXJyb3IsXG4gICAgICAgICAgICAgICAgfSksXG4gICAgICAgICAgICApO1xuICAgICAgICB9XG4gICAgICAgIGNvbnN0IGFjY291bnQgPSBhY2NvdW50c1swXTtcbiAgICAgICAgcmVtb3ZlVHlwZU5hbWUoYWNjb3VudCk7XG4gICAgICAgIHRyeSB7XG4gICAgICAgICAgICBhd2FpdCB0aGlzLnJlcXVlc3RDb3JlKCdjb250cmFjdHMucmVzb2x2ZS5lcnJvcicsIHtcbiAgICAgICAgICAgICAgICBhZGRyZXNzLFxuICAgICAgICAgICAgICAgIGFjY291bnQsXG4gICAgICAgICAgICAgICAgbWVzc2FnZUJhc2U2NCxcbiAgICAgICAgICAgICAgICB0aW1lLFxuICAgICAgICAgICAgICAgIG1haW5FcnJvcjogZXJyb3IsXG4gICAgICAgICAgICB9KTtcbiAgICAgICAgfSBjYXRjaCAocmVzb2x2ZWQpIHtcbiAgICAgICAgICAgIHJldHVybiByZXNvbHZlZDtcbiAgICAgICAgfVxuICAgICAgICByZXR1cm4gZXJyb3I7XG4gICAgfVxuXG4gICAgYXN5bmMgaXNEZXBsb3llZChhZGRyZXNzOiBzdHJpbmcsIHBhcmVudFNwYW4/OiAoU3BhbiB8IFNwYW5Db250ZXh0KSk6IFByb21pc2U8Ym9vbD4ge1xuICAgICAgICBjb25zdCBhY2NvdW50ID0gYXdhaXQgdGhpcy5xdWVyaWVzLmFjY291bnRzLnF1ZXJ5KHtcbiAgICAgICAgICAgIGZpbHRlcjoge1xuICAgICAgICAgICAgICAgIGlkOiB7IGVxOiBhZGRyZXNzIH0sXG4gICAgICAgICAgICAgICAgYWNjX3R5cGU6IHsgZXE6IFFBY2NvdW50VHlwZS5hY3RpdmUgfSxcbiAgICAgICAgICAgIH0sXG4gICAgICAgICAgICByZXN1bHQ6ICdpZCcsXG4gICAgICAgICAgICBwYXJlbnRTcGFuLFxuICAgICAgICB9KTtcbiAgICAgICAgcmV0dXJuIGFjY291bnQubGVuZ3RoID4gMDtcbiAgICB9XG5cbiAgICBhc3luYyBwcm9jZXNzRGVwbG95TWVzc2FnZShcbiAgICAgICAgbWVzc2FnZTogVE9OQ29udHJhY3REZXBsb3lNZXNzYWdlLFxuICAgICAgICBwYXJlbnRTcGFuPzogKFNwYW4gfCBTcGFuQ29udGV4dCksXG4gICAgICAgIHJldHJ5SW5kZXg/OiBudW1iZXIsXG4gICAgKTogUHJvbWlzZTxUT05Db250cmFjdERlcGxveVJlc3VsdD4ge1xuICAgICAgICB0aGlzLmNvbmZpZy5sb2coJ3Byb2Nlc3NEZXBsb3lNZXNzYWdlJywgbWVzc2FnZSk7XG4gICAgICAgIGlmIChhd2FpdCB0aGlzLmlzRGVwbG95ZWQobWVzc2FnZS5hZGRyZXNzLCBwYXJlbnRTcGFuKSkge1xuICAgICAgICAgICAgcmV0dXJuIHtcbiAgICAgICAgICAgICAgICBhZGRyZXNzOiBtZXNzYWdlLmFkZHJlc3MsXG4gICAgICAgICAgICAgICAgYWxyZWFkeURlcGxveWVkOiB0cnVlLFxuICAgICAgICAgICAgfTtcbiAgICAgICAgfVxuICAgICAgICBjb25zdCBwcm9jZXNzaW5nID0gYXdhaXQgdGhpcy5zZW5kTWVzc2FnZShtZXNzYWdlLm1lc3NhZ2UsIHBhcmVudFNwYW4pO1xuICAgICAgICByZXR1cm4gdGhpcy53YWl0Rm9yRGVwbG95VHJhbnNhY3Rpb24obWVzc2FnZSwgcHJvY2Vzc2luZywgcGFyZW50U3Bhbik7XG4gICAgfVxuXG4gICAgYXN5bmMgd2FpdEZvckRlcGxveVRyYW5zYWN0aW9uKFxuICAgICAgICBkZXBsb3lNZXNzYWdlOiBUT05Db250cmFjdERlcGxveU1lc3NhZ2UsXG4gICAgICAgIG1lc3NhZ2VQcm9jZXNzaW5nU3RhdGU6IFRPTk1lc3NhZ2VQcm9jZXNzaW5nU3RhdGUsXG4gICAgICAgIHBhcmVudFNwYW4/OiAoU3BhbiB8IFNwYW5Db250ZXh0KSxcbiAgICAgICAgaW5maW5pdGVXYWl0PzogYm9vbGVhbixcbiAgICApOiBQcm9taXNlPFRPTkNvbnRyYWN0RGVwbG95UmVzdWx0PiB7XG4gICAgICAgIGNvbnN0IG1lc3NhZ2UgPSBkZXBsb3lNZXNzYWdlLm1lc3NhZ2U7XG4gICAgICAgIGNvbnN0IHJlc3VsdCA9IGF3YWl0IHRoaXMud2FpdEZvclRyYW5zYWN0aW9uKHtcbiAgICAgICAgICAgIG1lc3NhZ2UsXG4gICAgICAgICAgICBtZXNzYWdlUHJvY2Vzc2luZ1N0YXRlLFxuICAgICAgICAgICAgcGFyZW50U3BhbixcbiAgICAgICAgICAgIGluZmluaXRlV2FpdCxcbiAgICAgICAgfSk7XG4gICAgICAgIHJldHVybiB7XG4gICAgICAgICAgICAuLi5yZXN1bHQsXG4gICAgICAgICAgICBhZGRyZXNzOiBtZXNzYWdlLmFkZHJlc3MsXG4gICAgICAgICAgICBhbHJlYWR5RGVwbG95ZWQ6IGZhbHNlLFxuICAgICAgICB9O1xuICAgIH1cblxuXG4gICAgYXN5bmMgcHJvY2Vzc1J1bk1lc3NhZ2UoXG4gICAgICAgIHJ1bk1lc3NhZ2U6IFRPTkNvbnRyYWN0UnVuTWVzc2FnZSxcbiAgICAgICAgcGFyZW50U3Bhbj86IChTcGFuIHwgU3BhbkNvbnRleHQpLFxuICAgICk6IFByb21pc2U8VE9OQ29udHJhY3RSdW5SZXN1bHQ+IHtcbiAgICAgICAgdGhpcy5jb25maWcubG9nKCdwcm9jZXNzUnVuTWVzc2FnZScsIHJ1bk1lc3NhZ2UpO1xuICAgICAgICBjb25zdCBwcm9jZXNzaW5nID0gYXdhaXQgdGhpcy5zZW5kTWVzc2FnZShydW5NZXNzYWdlLm1lc3NhZ2UsIHBhcmVudFNwYW4pO1xuICAgICAgICByZXR1cm4gdGhpcy53YWl0Rm9yUnVuVHJhbnNhY3Rpb24ocnVuTWVzc2FnZSwgcHJvY2Vzc2luZywgcGFyZW50U3Bhbik7XG4gICAgfVxuXG4gICAgYXN5bmMgd2FpdEZvclJ1blRyYW5zYWN0aW9uKFxuICAgICAgICBydW5NZXNzYWdlOiBUT05Db250cmFjdFJ1bk1lc3NhZ2UsXG4gICAgICAgIG1lc3NhZ2VQcm9jZXNzaW5nU3RhdGU6IFRPTk1lc3NhZ2VQcm9jZXNzaW5nU3RhdGUsXG4gICAgICAgIHBhcmVudFNwYW4/OiAoU3BhbiB8IFNwYW5Db250ZXh0KSxcbiAgICAgICAgaW5maW5pdGVXYWl0PzogYm9vbGVhbixcbiAgICApOiBQcm9taXNlPFRPTkNvbnRyYWN0UnVuUmVzdWx0PiB7XG4gICAgICAgIHJldHVybiB0aGlzLndhaXRGb3JUcmFuc2FjdGlvbih7XG4gICAgICAgICAgICBtZXNzYWdlOiBydW5NZXNzYWdlLm1lc3NhZ2UsXG4gICAgICAgICAgICBtZXNzYWdlUHJvY2Vzc2luZ1N0YXRlLFxuICAgICAgICAgICAgcGFyZW50U3BhbixcbiAgICAgICAgICAgIGluZmluaXRlV2FpdCxcbiAgICAgICAgICAgIGFiaTogcnVuTWVzc2FnZS5hYmksXG4gICAgICAgICAgICBmdW5jdGlvbk5hbWU6IHJ1bk1lc3NhZ2UuZnVuY3Rpb25OYW1lLFxuICAgICAgICB9KTtcbiAgICB9XG5cbiAgICAvKipcbiAgICAgKiBEZXByZWNhdGVkLiBVc2UgYHJ1bk1lc3NhZ2VMb2NhbGAgaW5zdGVhZC5cbiAgICAgKiBAcGFyYW0gcGFyYW1zXG4gICAgICogQHBhcmFtIHdhaXRQYXJhbXNcbiAgICAgKiBAcGFyYW0gcGFyZW50U3BhblxuICAgICAqIEByZXR1cm5zIHtQcm9taXNlPHVua25vd24+fVxuICAgICAqL1xuICAgIGFzeW5jIHByb2Nlc3NSdW5NZXNzYWdlTG9jYWwoXG4gICAgICAgIHBhcmFtczogVE9OQ29udHJhY3RSdW5NZXNzYWdlLFxuICAgICAgICB3YWl0UGFyYW1zPzogVE9OQ29udHJhY3RBY2NvdW50V2FpdFBhcmFtcyxcbiAgICAgICAgcGFyZW50U3Bhbj86IChTcGFuIHwgU3BhbkNvbnRleHQpLFxuICAgICk6IFByb21pc2U8VE9OQ29udHJhY3RSdW5SZXN1bHQ+IHtcbiAgICAgICAgdGhpcy5jb25maWcubG9nKCdwcm9jZXNzUnVuTWVzc2FnZUxvY2FsJywgcGFyYW1zKTtcblxuICAgICAgICBjb25zdCBhY2NvdW50ID0gYXdhaXQgdGhpcy5nZXRBY2NvdW50KHBhcmFtcy5hZGRyZXNzLCB0cnVlLCB3YWl0UGFyYW1zLCBwYXJlbnRTcGFuKTtcblxuICAgICAgICByZXR1cm4gdGhpcy5yZXF1ZXN0Q29yZSgnY29udHJhY3RzLnJ1bi5sb2NhbC5tc2cnLCB7XG4gICAgICAgICAgICBhZGRyZXNzOiBwYXJhbXMuYWRkcmVzcyxcbiAgICAgICAgICAgIGFjY291bnQsXG4gICAgICAgICAgICBhYmk6IHBhcmFtcy5hYmksXG4gICAgICAgICAgICBmdW5jdGlvbk5hbWU6IHBhcmFtcy5mdW5jdGlvbk5hbWUsXG4gICAgICAgICAgICBtZXNzYWdlQmFzZTY0OiBwYXJhbXMubWVzc2FnZS5tZXNzYWdlQm9keUJhc2U2NCxcbiAgICAgICAgfSk7XG4gICAgfVxuXG4gICAgLy8gRmVlIGNhbGN1bGF0aW9uXG5cbiAgICBiaWdCYWxhbmNlID0gJzB4MTAwMDAwMDAwMDAwMDAnO1xuXG4gICAgYXN5bmMgY2FsY1J1bkZlZXMoXG4gICAgICAgIHBhcmFtczogVE9OQ29udHJhY3RDYWxjUnVuRmVlUGFyYW1zLFxuICAgICAgICBwYXJlbnRTcGFuPzogKFNwYW4gfCBTcGFuQ29udGV4dCksXG4gICAgKTogUHJvbWlzZTxUT05Db250cmFjdENhbGNGZWVSZXN1bHQ+IHtcbiAgICAgICAgdGhpcy5jb25maWcubG9nKCdjYWxjUnVuRmVlcycsIHBhcmFtcyk7XG5cbiAgICAgICAgY29uc3QgYWNjb3VudCA9IGF3YWl0IHRoaXMuZ2V0QWNjb3VudChwYXJhbXMuYWRkcmVzcywgdHJ1ZSwgcGFyYW1zLndhaXRQYXJhbXMsIHBhcmVudFNwYW4pO1xuXG4gICAgICAgIGlmIChwYXJhbXMuZW11bGF0ZUJhbGFuY2UpIHtcbiAgICAgICAgICAgIGFjY291bnQuYmFsYW5jZSA9IHRoaXMuYmlnQmFsYW5jZTtcbiAgICAgICAgfVxuXG4gICAgICAgIHJldHVybiB0aGlzLnJlcXVlc3RDb3JlKCdjb250cmFjdHMucnVuLmZlZScsIHtcbiAgICAgICAgICAgIGFkZHJlc3M6IHBhcmFtcy5hZGRyZXNzLFxuICAgICAgICAgICAgYWNjb3VudCxcbiAgICAgICAgICAgIGFiaTogcGFyYW1zLmFiaSxcbiAgICAgICAgICAgIGZ1bmN0aW9uTmFtZTogcGFyYW1zLmZ1bmN0aW9uTmFtZSxcbiAgICAgICAgICAgIGlucHV0OiBwYXJhbXMuaW5wdXQsXG4gICAgICAgICAgICBrZXlQYWlyOiBwYXJhbXMua2V5UGFpcixcbiAgICAgICAgfSk7XG4gICAgfVxuXG4gICAgYXN5bmMgY2FsY0RlcGxveUZlZXMoXG4gICAgICAgIHBhcmFtczogVE9OQ29udHJhY3RDYWxjRGVwbG95RmVlUGFyYW1zLFxuICAgICAgICBwYXJlbnRTcGFuPzogKFNwYW4gfCBTcGFuQ29udGV4dCksXG4gICAgKTogUHJvbWlzZTxUT05Db250cmFjdENhbGNGZWVSZXN1bHQ+IHtcbiAgICAgICAgdGhpcy5jb25maWcubG9nKCdjYWxjRGVwbG95RmVlcycsIHBhcmFtcyk7XG5cbiAgICAgICAgY29uc3QgbWVzc2FnZSA9IGF3YWl0IHRoaXMuY3JlYXRlRGVwbG95TWVzc2FnZShwYXJhbXMpO1xuXG4gICAgICAgIHJldHVybiB0aGlzLmNhbGNNc2dQcm9jZXNzRmVlcyh7XG4gICAgICAgICAgICBhZGRyZXNzOiBtZXNzYWdlLmFkZHJlc3MsXG4gICAgICAgICAgICBtZXNzYWdlOiBtZXNzYWdlLm1lc3NhZ2UsXG4gICAgICAgICAgICBlbXVsYXRlQmFsYW5jZTogcGFyYW1zLmVtdWxhdGVCYWxhbmNlLFxuICAgICAgICAgICAgbmV3QWNjb3VudDogcGFyYW1zLm5ld0FjY291bnQsXG4gICAgICAgIH0sIHBhcmVudFNwYW4pO1xuICAgIH1cblxuICAgIGFzeW5jIGNhbGNNc2dQcm9jZXNzRmVlcyhcbiAgICAgICAgcGFyYW1zOiBUT05Db250cmFjdENhbGNNc2dQcm9jZXNzaW5nRmVlc1BhcmFtcyxcbiAgICAgICAgcGFyZW50U3Bhbj86IChTcGFuIHwgU3BhbkNvbnRleHQpLFxuICAgICk6IFByb21pc2U8VE9OQ29udHJhY3RDYWxjRmVlUmVzdWx0PiB7XG4gICAgICAgIHRoaXMuY29uZmlnLmxvZygnY2FsY01zZ1Byb2Nlc3NGZWVzJywgcGFyYW1zKTtcblxuICAgICAgICBsZXQgYWNjb3VudDogUUFjY291bnQgPSB7XG4gICAgICAgICAgICBiYWxhbmNlOiB0aGlzLmJpZ0JhbGFuY2UsXG4gICAgICAgICAgICBpZDogcGFyYW1zLmFkZHJlc3MsXG4gICAgICAgICAgICBsYXN0X3BhaWQ6IE1hdGguZmxvb3IoRGF0ZS5ub3coKSAvIDEwMDApLFxuICAgICAgICB9O1xuXG4gICAgICAgIGlmICghcGFyYW1zLm5ld0FjY291bnQpIHtcbiAgICAgICAgICAgIGFjY291bnQgPSBhd2FpdCB0aGlzLmdldEFjY291bnQocGFyYW1zLmFkZHJlc3MsIGZhbHNlLCBwYXJhbXMud2FpdFBhcmFtcywgcGFyZW50U3Bhbik7XG4gICAgICAgIH1cblxuICAgICAgICBpZiAocGFyYW1zLmVtdWxhdGVCYWxhbmNlKSB7XG4gICAgICAgICAgICBhY2NvdW50LmJhbGFuY2UgPSB0aGlzLmJpZ0JhbGFuY2U7XG4gICAgICAgIH1cblxuICAgICAgICByZXR1cm4gdGhpcy5yZXF1ZXN0Q29yZSgnY29udHJhY3RzLnJ1bi5mZWUubXNnJywge1xuICAgICAgICAgICAgYWRkcmVzczogcGFyYW1zLmFkZHJlc3MsXG4gICAgICAgICAgICBhY2NvdW50LFxuICAgICAgICAgICAgbWVzc2FnZUJhc2U2NDogcGFyYW1zLm1lc3NhZ2UubWVzc2FnZUJvZHlCYXNlNjQsXG4gICAgICAgIH0pO1xuICAgIH1cblxuICAgIC8vIEFkZHJlc3MgcHJvY2Vzc2luZ1xuXG4gICAgYXN5bmMgY29udmVydEFkZHJlc3MoXG4gICAgICAgIHBhcmFtczogVE9OQ29udHJhY3RDb252ZXJ0QWRkcmVzc1BhcmFtcyxcbiAgICApOiBQcm9taXNlPFRPTkNvbnRyYWN0Q29udmVydEFkZHJlc3NSZXN1bHQ+IHtcbiAgICAgICAgcmV0dXJuIHRoaXMucmVxdWVzdENvcmUoJ2NvbnRyYWN0cy5hZGRyZXNzLmNvbnZlcnQnLCBwYXJhbXMpO1xuICAgIH1cblxuICAgIC8vIEludGVybmFsc1xuXG4gICAgYXN5bmMgaW50ZXJuYWxEZXBsb3lOYXRpdmUocGFyYW1zOiBUT05Db250cmFjdERlcGxveVBhcmFtcyk6IFByb21pc2U8VE9OQ29udHJhY3REZXBsb3lSZXN1bHQ+IHtcbiAgICAgICAgcmV0dXJuIHRoaXMucmVxdWVzdENvcmUoJ2NvbnRyYWN0cy5kZXBsb3knLCB7XG4gICAgICAgICAgICBhYmk6IHBhcmFtcy5wYWNrYWdlLmFiaSxcbiAgICAgICAgICAgIGNvbnN0cnVjdG9ySGVhZGVyOiBwYXJhbXMuY29uc3RydWN0b3JIZWFkZXIsXG4gICAgICAgICAgICBjb25zdHJ1Y3RvclBhcmFtczogcGFyYW1zLmNvbnN0cnVjdG9yUGFyYW1zLFxuICAgICAgICAgICAgaW5pdFBhcmFtczogcGFyYW1zLmluaXRQYXJhbXMsXG4gICAgICAgICAgICBpbWFnZUJhc2U2NDogcGFyYW1zLnBhY2thZ2UuaW1hZ2VCYXNlNjQsXG4gICAgICAgICAgICBrZXlQYWlyOiBwYXJhbXMua2V5UGFpcixcbiAgICAgICAgfSk7XG4gICAgfVxuXG5cbiAgICBhc3luYyBpbnRlcm5hbFJ1bk5hdGl2ZShwYXJhbXM6IFRPTkNvbnRyYWN0UnVuUGFyYW1zKTogUHJvbWlzZTxUT05Db250cmFjdFJ1blJlc3VsdD4ge1xuICAgICAgICByZXR1cm4gdGhpcy5yZXF1ZXN0Q29yZSgnY29udHJhY3RzLnJ1bicsIHtcbiAgICAgICAgICAgIGFkZHJlc3M6IHBhcmFtcy5hZGRyZXNzLFxuICAgICAgICAgICAgYWJpOiBwYXJhbXMuYWJpLFxuICAgICAgICAgICAgZnVuY3Rpb25OYW1lOiBwYXJhbXMuZnVuY3Rpb25OYW1lLFxuICAgICAgICAgICAgaGVhZGVyOiBwYXJhbXMuaGVhZGVyLFxuICAgICAgICAgICAgaW5wdXQ6IHBhcmFtcy5pbnB1dCxcbiAgICAgICAgICAgIGtleVBhaXI6IHBhcmFtcy5rZXlQYWlyLFxuICAgICAgICB9KTtcbiAgICB9XG5cblxuICAgIGFzeW5jIHJldHJ5Q2FsbChjYWxsOiAoaW5kZXg6IG51bWJlcikgPT4gUHJvbWlzZTxhbnk+KTogUHJvbWlzZTxhbnk+IHtcbiAgICAgICAgY29uc3QgcmV0cmllc0NvdW50ID0gdGhpcy5jb25maWcubWVzc2FnZVJldHJpZXNDb3VudCgpO1xuICAgICAgICBmb3IgKGxldCBpID0gMDsgaSA8PSByZXRyaWVzQ291bnQ7IGkgKz0gMSkge1xuICAgICAgICAgICAgaWYgKGkgPiAwKSB7XG4gICAgICAgICAgICAgICAgdGhpcy5jb25maWcubG9nKGBSZXRyeSAjJHtpfWApO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgdHJ5IHtcbiAgICAgICAgICAgICAgICByZXR1cm4gYXdhaXQgY2FsbChpKTtcbiAgICAgICAgICAgIH0gY2F0Y2ggKGVycm9yKSB7XG4gICAgICAgICAgICAgICAgLy8gcmV0cnkgaWYgbWVzc2FnZSBleHBpcmVkIG9yIGlmIHJlc29sdmluZyByZXR1cm5lZCB0aGF0IG1lc3NhZ2UgZXhwaXJlZC9yZXBsYXlcbiAgICAgICAgICAgICAgICAvLyBwcm90ZWN0aW9uIGVycm9yIG9yIGlmIHRyYW5zYWN0aW9uIHdpdGggbWVzc2FnZSBleHBpcmVkL3JlcGxheSBwcm90ZWN0aW9uIGVycm9yXG4gICAgICAgICAgICAgICAgLy8gcmV0dXJuZWRcbiAgICAgICAgICAgICAgICBjb25zdCB1c2VSZXRyeSA9IGVycm9yLmNvZGUgPT09IFRPTkVycm9yQ29kZS5NRVNTQUdFX0VYUElSRURcbiAgICAgICAgICAgICAgICAgICAgfHwgVE9OQ2xpZW50RXJyb3IuaXNPcmlnaW5hbENvbnRyYWN0RXJyb3IoXG4gICAgICAgICAgICAgICAgICAgICAgICBlcnJvcixcbiAgICAgICAgICAgICAgICAgICAgICAgIFRPTkNvbnRyYWN0RXhpdENvZGUuUkVQTEFZX1BST1RFQ1RJT04sXG4gICAgICAgICAgICAgICAgICAgIClcbiAgICAgICAgICAgICAgICAgICAgfHwgVE9OQ2xpZW50RXJyb3IuaXNPcmlnaW5hbENvbnRyYWN0RXJyb3IoXG4gICAgICAgICAgICAgICAgICAgICAgICBlcnJvcixcbiAgICAgICAgICAgICAgICAgICAgICAgIFRPTkNvbnRyYWN0RXhpdENvZGUuTUVTU0FHRV9FWFBJUkVELFxuICAgICAgICAgICAgICAgICAgICApXG4gICAgICAgICAgICAgICAgICAgIHx8IFRPTkNsaWVudEVycm9yLmlzUmVzb2x2ZWRDb250cmFjdEVycm9yQWZ0ZXJFeHBpcmUoXG4gICAgICAgICAgICAgICAgICAgICAgICBlcnJvcixcbiAgICAgICAgICAgICAgICAgICAgICAgIFRPTkNvbnRyYWN0RXhpdENvZGUuUkVQTEFZX1BST1RFQ1RJT04sXG4gICAgICAgICAgICAgICAgICAgIClcbiAgICAgICAgICAgICAgICAgICAgfHwgVE9OQ2xpZW50RXJyb3IuaXNSZXNvbHZlZENvbnRyYWN0RXJyb3JBZnRlckV4cGlyZShcbiAgICAgICAgICAgICAgICAgICAgICAgIGVycm9yLFxuICAgICAgICAgICAgICAgICAgICAgICAgVE9OQ29udHJhY3RFeGl0Q29kZS5NRVNTQUdFX0VYUElSRUQsXG4gICAgICAgICAgICAgICAgICAgICk7XG4gICAgICAgICAgICAgICAgaWYgKCF1c2VSZXRyeSB8fCBpID09PSByZXRyaWVzQ291bnQpIHtcbiAgICAgICAgICAgICAgICAgICAgdGhyb3cgZXJyb3I7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICAgIHRocm93IFRPTkNsaWVudEVycm9yLmludGVybmFsRXJyb3IoXG4gICAgICAgICAgICAnQWxsIHJldHJ5IGF0dGVtcHRzIGZhaWxlZCcsXG4gICAgICAgICAgICBhd2FpdCB0aGlzLmNvbXBsZXRlRXJyb3JEYXRhKCksXG4gICAgICAgICk7XG4gICAgfVxuXG5cbiAgICBhc3luYyBpbnRlcm5hbERlcGxveUpzKFxuICAgICAgICBwYXJhbXM6IFRPTkNvbnRyYWN0RGVwbG95UGFyYW1zLFxuICAgICAgICBwYXJlbnRTcGFuPzogKFNwYW4gfCBTcGFuQ29udGV4dCksXG4gICAgKTogUHJvbWlzZTxUT05Db250cmFjdERlcGxveVJlc3VsdD4ge1xuICAgICAgICB0aGlzLmNvbmZpZy5sb2coJ0RlcGxveSBzdGFydCcpO1xuICAgICAgICByZXR1cm4gdGhpcy5yZXRyeUNhbGwoYXN5bmMgKHJldHJ5SW5kZXgpID0+IHtcbiAgICAgICAgICAgIGNvbnN0IGRlcGxveU1lc3NhZ2UgPSBhd2FpdCB0aGlzLmNyZWF0ZURlcGxveU1lc3NhZ2UocGFyYW1zLCByZXRyeUluZGV4KTtcbiAgICAgICAgICAgIGlmIChhd2FpdCB0aGlzLmlzRGVwbG95ZWQoZGVwbG95TWVzc2FnZS5hZGRyZXNzLCBwYXJlbnRTcGFuKSkge1xuICAgICAgICAgICAgICAgIHJldHVybiB7XG4gICAgICAgICAgICAgICAgICAgIGFkZHJlc3M6IGRlcGxveU1lc3NhZ2UuYWRkcmVzcyxcbiAgICAgICAgICAgICAgICAgICAgYWxyZWFkeURlcGxveWVkOiB0cnVlLFxuICAgICAgICAgICAgICAgIH07XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBjb25zdCBwcm9jZXNzaW5nID0gYXdhaXQgdGhpcy5zZW5kTWVzc2FnZShkZXBsb3lNZXNzYWdlLm1lc3NhZ2UsIHBhcmVudFNwYW4pO1xuICAgICAgICAgICAgcmV0dXJuIHRoaXMud2FpdEZvckRlcGxveVRyYW5zYWN0aW9uKGRlcGxveU1lc3NhZ2UsIHByb2Nlc3NpbmcsIHBhcmVudFNwYW4pO1xuICAgICAgICB9KTtcbiAgICB9XG5cblxuICAgIGFzeW5jIGludGVybmFsUnVuSnMoXG4gICAgICAgIHBhcmFtczogVE9OQ29udHJhY3RSdW5QYXJhbXMsXG4gICAgICAgIHBhcmVudFNwYW4/OiAoU3BhbiB8IFNwYW5Db250ZXh0KSxcbiAgICApOiBQcm9taXNlPFRPTkNvbnRyYWN0UnVuUmVzdWx0PiB7XG4gICAgICAgIHRoaXMuY29uZmlnLmxvZygnUnVuIHN0YXJ0Jyk7XG4gICAgICAgIHJldHVybiB0aGlzLnJldHJ5Q2FsbChhc3luYyAocmV0cnlJbmRleCkgPT4ge1xuICAgICAgICAgICAgY29uc3QgcnVuTWVzc2FnZSA9IGF3YWl0IHRoaXMuY3JlYXRlUnVuTWVzc2FnZShwYXJhbXMsIHJldHJ5SW5kZXgpO1xuICAgICAgICAgICAgY29uc3QgcHJvY2Vzc2luZyA9IGF3YWl0IHRoaXMuc2VuZE1lc3NhZ2UocnVuTWVzc2FnZS5tZXNzYWdlLCBwYXJlbnRTcGFuKTtcbiAgICAgICAgICAgIHJldHVybiB0aGlzLndhaXRGb3JSdW5UcmFuc2FjdGlvbihydW5NZXNzYWdlLCBwcm9jZXNzaW5nLCBwYXJlbnRTcGFuKTtcbiAgICAgICAgfSk7XG4gICAgfVxuXG5cbiAgICBhc3luYyBnZXRBY2NvdW50KFxuICAgICAgICBhZGRyZXNzOiBzdHJpbmcsXG4gICAgICAgIGFjdGl2ZTogYm9vbGVhbixcbiAgICAgICAgd2FpdFBhcmFtcz86IFRPTkNvbnRyYWN0QWNjb3VudFdhaXRQYXJhbXMsXG4gICAgICAgIHBhcmVudFNwYW4/OiAoU3BhbiB8IFNwYW5Db250ZXh0KSxcbiAgICApOiBQcm9taXNlPFFBY2NvdW50PiB7XG4gICAgICAgIGNvbnN0IGZpbHRlcjogeyBbc3RyaW5nXTogYW55IH0gPSB7XG4gICAgICAgICAgICBpZDogeyBlcTogYWRkcmVzcyB9LFxuICAgICAgICB9O1xuICAgICAgICBpZiAod2FpdFBhcmFtcyAmJiB3YWl0UGFyYW1zLnRyYW5zYWN0aW9uTHQpIHtcbiAgICAgICAgICAgIGZpbHRlci5sYXN0X3RyYW5zX2x0ID0geyBnZTogd2FpdFBhcmFtcy50cmFuc2FjdGlvbkx0IH07XG4gICAgICAgIH1cbiAgICAgICAgaWYgKGFjdGl2ZSkge1xuICAgICAgICAgICAgZmlsdGVyLmFjY190eXBlID0geyBlcTogUUFjY291bnRUeXBlLmFjdGl2ZSB9O1xuICAgICAgICB9XG5cbiAgICAgICAgdGhpcy5jb25maWcubG9nKCdnZXRBY2NvdW50LiBGaWx0ZXInLCBmaWx0ZXIpO1xuICAgICAgICBjb25zdCBhY2NvdW50cyA9IGF3YWl0IHRoaXMucXVlcmllcy5hY2NvdW50cy5xdWVyeSh7XG4gICAgICAgICAgICBmaWx0ZXIsXG4gICAgICAgICAgICByZXN1bHQ6ICdpZCBhY2NfdHlwZSBib2MgY29kZV9oYXNoIGRhdGFfaGFzaCBiYWxhbmNlIGJhbGFuY2Vfb3RoZXIgeyBjdXJyZW5jeSB2YWx1ZSB9IGxhc3RfcGFpZCcsXG4gICAgICAgICAgICAuLi4od2FpdFBhcmFtcyAmJiB3YWl0UGFyYW1zLnRpbWVvdXQgPyB7IHRpbWVvdXQ6IHdhaXRQYXJhbXMudGltZW91dCB9IDoge30pLFxuICAgICAgICAgICAgcGFyZW50U3BhbixcbiAgICAgICAgfSk7XG4gICAgICAgIGlmIChhY2NvdW50cy5sZW5ndGggPT09IDApIHtcbiAgICAgICAgICAgIHRocm93IFRPTkNsaWVudEVycm9yLmFjY291bnRNaXNzaW5nKFxuICAgICAgICAgICAgICAgIGFkZHJlc3MsXG4gICAgICAgICAgICAgICAgYXdhaXQgdGhpcy5jb21wbGV0ZUVycm9yRGF0YSh7XG4gICAgICAgICAgICAgICAgICAgIGFkZHJlc3MsXG4gICAgICAgICAgICAgICAgfSksXG4gICAgICAgICAgICApO1xuICAgICAgICB9XG4gICAgICAgIGNvbnN0IGFjY291bnQgPSBhY2NvdW50c1swXTtcbiAgICAgICAgcmVtb3ZlVHlwZU5hbWUoYWNjb3VudCk7XG4gICAgICAgIHRoaXMuY29uZmlnLmxvZygnZ2V0QWNjb3VudC4gQWNjb3VudCByZWNlaXZlZCcsIGFjY291bnQpO1xuICAgICAgICByZXR1cm4gYWNjb3VudDtcbiAgICB9XG5cbiAgICBhc3luYyBpbnRlcm5hbFJ1bkxvY2FsSnMoXG4gICAgICAgIHBhcmFtczogVE9OQ29udHJhY3RSdW5Mb2NhbFBhcmFtcyxcbiAgICAgICAgcGFyZW50U3Bhbj86IChTcGFuIHwgU3BhbkNvbnRleHQpLFxuICAgICk6IFByb21pc2U8VE9OQ29udHJhY3RSdW5Mb2NhbFJlc3VsdD4ge1xuICAgICAgICBjb25zdCBhZGRyZXNzID0gcGFyYW1zLmFkZHJlc3M7XG4gICAgICAgIGlmICghYWRkcmVzcykge1xuICAgICAgICAgICAgVE9OQ2xpZW50RXJyb3IuYWRkcmVzc1JlcXVpcmVkRm9yUnVuTG9jYWwoXG4gICAgICAgICAgICAgICAgYXdhaXQgdGhpcy5jb21wbGV0ZUVycm9yRGF0YSh7XG4gICAgICAgICAgICAgICAgICAgIGFkZHJlc3MsXG4gICAgICAgICAgICAgICAgICAgIGZ1bmN0aW9uX25hbWU6IHBhcmFtcy5mdW5jdGlvbk5hbWUsXG4gICAgICAgICAgICAgICAgfSksXG4gICAgICAgICAgICApO1xuICAgICAgICB9XG4gICAgICAgIGNvbnN0IGFjY291bnQgPSBwYXJhbXMuYWNjb3VudCB8fCAoYXdhaXQgdGhpcy5nZXRBY2NvdW50KFxuICAgICAgICAgICAgYWRkcmVzcyxcbiAgICAgICAgICAgIGZhbHNlLFxuICAgICAgICAgICAgcGFyYW1zLndhaXRQYXJhbXMsXG4gICAgICAgICAgICBwYXJlbnRTcGFuLFxuICAgICAgICApKTtcbiAgICAgICAgaWYgKCFhY2NvdW50LmNvZGVfaGFzaCkge1xuICAgICAgICAgICAgdGhyb3cgVE9OQ2xpZW50RXJyb3IuYWNjb3VudENvZGVNaXNzaW5nKFxuICAgICAgICAgICAgICAgIGFkZHJlc3MsXG4gICAgICAgICAgICAgICAgKGFjY291bnQ6IGFueSkuYmFsYW5jZSxcbiAgICAgICAgICAgICAgICBhd2FpdCB0aGlzLmNvbXBsZXRlRXJyb3JEYXRhKHtcbiAgICAgICAgICAgICAgICAgICAgYWRkcmVzcyxcbiAgICAgICAgICAgICAgICAgICAgZnVuY3Rpb25fbmFtZTogcGFyYW1zLmZ1bmN0aW9uTmFtZSxcbiAgICAgICAgICAgICAgICB9KSxcbiAgICAgICAgICAgICk7XG4gICAgICAgIH1cbiAgICAgICAgcmV0dXJuIHRoaXMucmVxdWVzdENvcmUoJ2NvbnRyYWN0cy5ydW4ubG9jYWwnLCB7XG4gICAgICAgICAgICBhZGRyZXNzLFxuICAgICAgICAgICAgYWNjb3VudCxcbiAgICAgICAgICAgIGFiaTogcGFyYW1zLmFiaSxcbiAgICAgICAgICAgIGZ1bmN0aW9uTmFtZTogcGFyYW1zLmZ1bmN0aW9uTmFtZSxcbiAgICAgICAgICAgIGlucHV0OiBwYXJhbXMuaW5wdXQsXG4gICAgICAgICAgICBrZXlQYWlyOiBwYXJhbXMua2V5UGFpcixcbiAgICAgICAgICAgIGZ1bGxSdW46IHBhcmFtcy5mdWxsUnVuLFxuICAgICAgICB9KTtcbiAgICB9XG5cbiAgICBhc3luYyBpbnRlcm5hbFJ1bk1lc3NhZ2VMb2NhbEpzKFxuICAgICAgICBwYXJhbXM6IFRPTkNvbnRyYWN0UnVuTWVzc2FnZUxvY2FsUGFyYW1zLFxuICAgICAgICBwYXJlbnRTcGFuPzogKFNwYW4gfCBTcGFuQ29udGV4dCksXG4gICAgKTogUHJvbWlzZTxUT05Db250cmFjdFJ1bkxvY2FsUmVzdWx0PiB7XG4gICAgICAgIGNvbnN0IGFkZHJlc3MgPSBwYXJhbXMuYWRkcmVzcztcbiAgICAgICAgaWYgKCFhZGRyZXNzKSB7XG4gICAgICAgICAgICB0aHJvdyBUT05DbGllbnRFcnJvci5hZGRyZXNzUmVxdWlyZWRGb3JSdW5Mb2NhbChhd2FpdCB0aGlzLmNvbXBsZXRlRXJyb3JEYXRhKHtcbiAgICAgICAgICAgICAgICBhZGRyZXNzLFxuICAgICAgICAgICAgICAgIGZ1bmN0aW9uX25hbWU6IHBhcmFtcy5mdW5jdGlvbk5hbWUsXG4gICAgICAgICAgICB9KSk7XG4gICAgICAgIH1cbiAgICAgICAgY29uc3QgYWNjb3VudCA9IHBhcmFtcy5hY2NvdW50IHx8IChhd2FpdCB0aGlzLmdldEFjY291bnQoXG4gICAgICAgICAgICBhZGRyZXNzLFxuICAgICAgICAgICAgZmFsc2UsXG4gICAgICAgICAgICBwYXJhbXMud2FpdFBhcmFtcyxcbiAgICAgICAgICAgIHBhcmVudFNwYW4sXG4gICAgICAgICkpO1xuICAgICAgICBpZiAoIWFjY291bnQuY29kZV9oYXNoKSB7XG4gICAgICAgICAgICB0aHJvdyBUT05DbGllbnRFcnJvci5hY2NvdW50Q29kZU1pc3NpbmcoXG4gICAgICAgICAgICAgICAgYWRkcmVzcyxcbiAgICAgICAgICAgICAgICAoYWNjb3VudDogYW55KS5iYWxhbmNlLFxuICAgICAgICAgICAgICAgIGF3YWl0IHRoaXMuY29tcGxldGVFcnJvckRhdGEoe1xuICAgICAgICAgICAgICAgICAgICBhZGRyZXNzLFxuICAgICAgICAgICAgICAgICAgICBmdW5jdGlvbl9uYW1lOiBwYXJhbXMuZnVuY3Rpb25OYW1lLFxuICAgICAgICAgICAgICAgIH0pLFxuICAgICAgICAgICAgKTtcbiAgICAgICAgfVxuICAgICAgICByZXR1cm4gdGhpcy5yZXF1ZXN0Q29yZSgnY29udHJhY3RzLnJ1bi5sb2NhbC5tc2cnLCB7XG4gICAgICAgICAgICBhZGRyZXNzLFxuICAgICAgICAgICAgYWNjb3VudCxcbiAgICAgICAgICAgIGFiaTogcGFyYW1zLmFiaSxcbiAgICAgICAgICAgIGZ1bmN0aW9uTmFtZTogcGFyYW1zLmZ1bmN0aW9uTmFtZSxcbiAgICAgICAgICAgIG1lc3NhZ2VCYXNlNjQ6IHBhcmFtcy5tZXNzYWdlQm9keUJhc2U2NCxcbiAgICAgICAgICAgIGZ1bGxSdW46IHBhcmFtcy5mdWxsUnVuLFxuICAgICAgICB9KTtcbiAgICB9XG59XG5cblRPTkNvbnRyYWN0c01vZHVsZS5tb2R1bGVOYW1lID0gJ1RPTkNvbnRyYWN0c01vZHVsZSc7XG5cbmNvbnN0IEJMT0NLX0ZJRUxEUyA9IGBcbiAgICBpZFxuICAgIGdlbl91dGltZVxuICAgIGFmdGVyX3NwbGl0XG4gICAgd29ya2NoYWluX2lkXG4gICAgc2hhcmRcbiAgICBpbl9tc2dfZGVzY3Ige1xuICAgICAgICBtc2dfaWRcbiAgICAgICAgdHJhbnNhY3Rpb25faWRcbiAgICB9XG5gO1xuXG5jb25zdCBUUkFOU0FDVElPTl9GSUVMRFNfT1JESU5BUlkgPSBgXG4gICAgaWRcbiAgICBhYm9ydGVkXG4gICAgY29tcHV0ZSB7XG4gICAgICAgIHNraXBwZWRfcmVhc29uXG4gICAgICAgIGV4aXRfY29kZVxuICAgICAgICBzdWNjZXNzXG4gICAgICAgIGdhc19mZWVzXG4gICAgfVxuICAgIHN0b3JhZ2Uge1xuICAgICAgIHN0YXR1c19jaGFuZ2VcbiAgICAgICBzdG9yYWdlX2ZlZXNfY29sbGVjdGVkXG4gICAgfVxuICAgIGFjdGlvbiB7XG4gICAgICAgIHN1Y2Nlc3NcbiAgICAgICAgdmFsaWRcbiAgICAgICAgbm9fZnVuZHNcbiAgICAgICAgcmVzdWx0X2NvZGVcbiAgICAgICAgdG90YWxfZndkX2ZlZXNcbiAgICAgICAgdG90YWxfYWN0aW9uX2ZlZXNcbiAgICB9XG4gICAgaW5fbXNnXG4gICAgbm93XG4gICAgb3V0X21zZ3NcbiAgICBvdXRfbWVzc2FnZXMge1xuICAgICAgICBpZFxuICAgICAgICBib2R5XG4gICAgICAgIG1zZ190eXBlXG4gICAgICAgIHZhbHVlXG4gICAgfVxuICAgIHN0YXR1c1xuICAgIHRvdGFsX2ZlZXNcbmA7XG4iXX0=