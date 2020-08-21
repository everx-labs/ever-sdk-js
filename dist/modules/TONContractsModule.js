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
        var retriesCount, i, isOriginalOrResolved, useRetry;
        return _regenerator["default"].wrap(function _callee52$(_context52) {
          while (1) {
            switch (_context52.prev = _context52.next) {
              case 0:
                retriesCount = this.config.messageRetriesCount();
                i = 0;

              case 2:
                if (!(i <= retriesCount)) {
                  _context52.next = 19;
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
                isOriginalOrResolved = function isOriginalOrResolved(exitCode) {
                  return _TONClientError.TONClientError.isOriginalContractError(_context52.t0, exitCode) || _TONClientError.TONClientError.isResolvedContractErrorAfterExpire(_context52.t0, exitCode);
                };

                useRetry = _context52.t0.code === _TONClientError.TONErrorCode.MESSAGE_EXPIRED || isOriginalOrResolved(_TONClientError.TONContractExitCode.REPLAY_PROTECTION) || isOriginalOrResolved(_TONClientError.TONContractExitCode.MESSAGE_EXPIRED);

                if (!(!useRetry || i === retriesCount)) {
                  _context52.next = 16;
                  break;
                }

                throw _context52.t0;

              case 16:
                i += 1;
                _context52.next = 2;
                break;

              case 19:
                _context52.t1 = _TONClientError.TONClientError;
                _context52.next = 22;
                return this.completeErrorData();

              case 22:
                _context52.t2 = _context52.sent;
                throw _context52.t1.internalError.call(_context52.t1, 'All retry attempts failed', _context52.t2);

              case 24:
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy9tb2R1bGVzL1RPTkNvbnRyYWN0c01vZHVsZS5qcyJdLCJuYW1lcyI6WyJUT05BZGRyZXNzU3RyaW5nVmFyaWFudCIsIkFjY291bnRJZCIsIkhleCIsIkJhc2U2NCIsIlRPTkNsaWVudFRyYW5zYWN0aW9uUGhhc2UiLCJzdG9yYWdlIiwiY29tcHV0ZVNraXBwZWQiLCJjb21wdXRlVm0iLCJhY3Rpb24iLCJ1bmtub3duIiwiVE9OQ2xpZW50Q29tcHV0ZVNraXBwZWRTdGF0dXMiLCJub1N0YXRlIiwiYmFkU3RhdGUiLCJub0dhcyIsIlRPTkNsaWVudFN0b3JhZ2VTdGF0dXMiLCJ1bmNoYW5nZWQiLCJmcm96ZW4iLCJkZWxldGVkIiwiUUluTXNnVHlwZSIsImV4dGVybmFsIiwiaWhyIiwiaW1tZWRpYXRlbHkiLCJ0cmFuc2l0IiwiZGlzY2FyZGVkRmluYWwiLCJkaXNjYXJkZWRUcmFuc2l0IiwiUU91dE1zZ1R5cGUiLCJvdXRNc2dOZXciLCJkZXF1ZXVlSW1tZWRpYXRlbHkiLCJkZXF1ZXVlIiwidHJhbnNpdFJlcXVpcmVkIiwibm9uZSIsIlFNZXNzYWdlVHlwZSIsImludGVybmFsIiwiZXh0SW4iLCJleHRPdXQiLCJRTWVzc2FnZVByb2Nlc3NpbmdTdGF0dXMiLCJxdWV1ZWQiLCJwcm9jZXNzaW5nIiwicHJlbGltaW5hcnkiLCJwcm9wb3NlZCIsImZpbmFsaXplZCIsInJlZnVzZWQiLCJ0cmFuc2l0aW5nIiwiUUJsb2NrUHJvY2Vzc2luZ1N0YXR1cyIsIlFTcGxpdFR5cGUiLCJzcGxpdCIsIm1lcmdlIiwiUUFjY291bnRUeXBlIiwidW5pbml0IiwiYWN0aXZlIiwiUVRyYW5zYWN0aW9uVHlwZSIsIm9yZGluYXJ5IiwidGljayIsInRvY2siLCJzcGxpdFByZXBhcmUiLCJzcGxpdEluc3RhbGwiLCJtZXJnZVByZXBhcmUiLCJtZXJnZUluc3RhbGwiLCJRVHJhbnNhY3Rpb25Qcm9jZXNzaW5nU3RhdHVzIiwiUUFjY291bnRTdGF0dXMiLCJub25FeGlzdCIsIlFBY2NvdW50U3RhdHVzQ2hhbmdlIiwiUUNvbXB1dGVUeXBlIiwic2tpcHBlZCIsInZtIiwiUVNraXBSZWFzb24iLCJRQm91bmNlVHlwZSIsIm5lZ0Z1bmRzIiwibm9GdW5kcyIsIm9rIiwiTUFTVEVSQ0hBSU5fSUQiLCJFWFRSQV9UUkFOU0FDVElPTl9XQUlUSU5HX1RJTUUiLCJCTE9DS19UUkFOU0FDVElPTl9XQUlUSU5HX1RJTUUiLCJyZW1vdmVUeXBlTmFtZSIsIm9iaiIsIl9fdHlwZW5hbWUiLCJPYmplY3QiLCJ2YWx1ZXMiLCJmb3JFYWNoIiwidmFsdWUiLCJyZW1vdmVQcm9wcyIsInBhdGhzIiwicmVzdWx0IiwicGF0aCIsImRvdFBvcyIsImluZGV4T2YiLCJuYW1lIiwic3Vic3RyIiwiY2hpbGQiLCJyZWR1Y2VkQ2hpbGQiLCJzdGFydE1lc3NhZ2VUcmFjZVNwYW4iLCJ0cmFjZXIiLCJtZXNzYWdlSWQiLCJvcGVyYXRpb25OYW1lIiwidGFncyIsInRyYWNlSWQiLCJzcGFuSWQiLCJyb290Q29udGV4dCIsImV4dHJhY3QiLCJGT1JNQVRfVEVYVF9NQVAiLCJzdGFydFNwYW4iLCJjaGlsZE9mIiwidHJhY2VNZXNzYWdlIiwic3BhbiIsImZpbmlzaCIsIlRPTkNvbnRyYWN0c01vZHVsZSIsImNvbmZpZyIsImNvbnRleHQiLCJnZXRNb2R1bGUiLCJUT05Db25maWdNb2R1bGUiLCJxdWVyaWVzIiwiVE9OUXVlcmllc01vZHVsZSIsInBhcmFtcyIsInBhcmVudFNwYW4iLCJhY2NvdW50cyIsInF1ZXJ5IiwiZmlsdGVyIiwiaWQiLCJlcSIsImFkZHJlc3MiLCJsZW5ndGgiLCJiYWxhbmNlR3JhbXMiLCJiYWxhbmNlIiwidHJhY2UiLCJzZXRUYWciLCJpbnRlcm5hbERlcGxveUpzIiwiaW50ZXJuYWxSdW5KcyIsImludGVybmFsUnVuTG9jYWxKcyIsImludGVybmFsUnVuTWVzc2FnZUxvY2FsSnMiLCJjb3JlUGFyYW1zIiwiaGFzQ29kZSIsImJvY0Jhc2U2NCIsImNvZGVCYXNlNjQiLCJkYXRhQmFzZTY0IiwiVE9OQ2xpZW50RXJyb3IiLCJjb21wbGV0ZUVycm9yRGF0YSIsImFkZHJlc3NSZXF1aXJlZEZvclJ1bkxvY2FsIiwiZ2V0QWNjb3VudCIsInRpbWVvdXQiLCJ3YWl0Rm9yVGltZW91dCIsImFjY291bnQiLCJjb2RlX2hhc2giLCJhY2NvdW50Q29kZU1pc3NpbmciLCJwYXJhbXNGcm9tQWNjb3VudCIsImJvYyIsImxhc3RfcGFpZCIsInJlcXVlc3RDb3JlIiwiY29ucyIsIml0ZW0iLCJpbnZhbGlkQ29ucyIsImVtcHR5VE9ORXJyb3JEYXRhIiwicHVzaCIsInJldHJ5SW5kZXgiLCJsb2ciLCJhYmkiLCJjb25zdHJ1Y3RvckhlYWRlciIsImNvbnN0cnVjdG9yUGFyYW1zIiwiaW5pdFBhcmFtcyIsImltYWdlQmFzZTY0Iiwia2V5UGFpciIsIndvcmtjaGFpbklkIiwibWVzc2FnZSIsImZ1bmN0aW9uTmFtZSIsImhlYWRlciIsInRyeUluZGV4IiwiaW5wdXQiLCJwdWJsaWNLZXlIZXgiLCJhZGRyZXNzSGV4Iiwic2lnblBhcmFtcyIsImVuY29kZWQiLCJjcmVhdGVTaWduZWRNZXNzYWdlIiwidW5zaWduZWRNZXNzYWdlIiwidW5zaWduZWRCeXRlc0Jhc2U2NCIsInNpZ25CeXRlc0Jhc2U2NCIsImV4cGlyZSIsImdldEJvY0hhc2giLCJtZXNzYWdlQm9keUJhc2U2NCIsImhhc2giLCJEYXRlIiwibm93IiwibWVzc2FnZV9pZCIsInNlbmROb2RlUmVxdWVzdEZhaWxlZCIsIk1hdGgiLCJzZXJ2ZXJUaW1lRGVsdGEiLCJhYnMiLCJvdXRPZlN5bmNUaHJlc2hvbGQiLCJkcm9wU2VydmVyVGltZURlbHRhIiwiY2xvY2tPdXRPZlN5bmMiLCJmaW5kTGFzdFNoYXJkQmxvY2siLCJsYXN0QmxvY2tJZCIsImVuc3VyZU1lc3NhZ2VJZCIsImlkQmFzZTY0IiwiQnVmZmVyIiwiZnJvbSIsInRvU3RyaW5nIiwibWVzc2FnZVNwYW4iLCJzdGFydFJvb3RTcGFuIiwiYWRkVGFncyIsIm1lc3NhZ2VTaXplIiwiY2VpbCIsInBvc3RSZXF1ZXN0cyIsImJvZHkiLCJzZW5kaW5nVGltZSIsInJvdW5kIiwicmVzdWx0RmllbGRzIiwic2VuZE1lc3NhZ2UiLCJ3YWl0Rm9yVHJhbnNhY3Rpb24iLCJtZXNzYWdlUHJvY2Vzc2luZ1N0YXRlIiwidHJhbnNhY3Rpb24iLCJjaGFpbiIsImFkZGl0aW9uYWxGaWx0ZXIiLCJibG9ja3MiLCJ3b3JrY2hhaW5faWQiLCJvcmRlckJ5IiwiZGlyZWN0aW9uIiwibGltaXQiLCJzaGFyZHMiLCJhZGRyZXNzUGFydHMiLCJ3b3JrY2hhaW4iLCJOdW1iZXIiLCJwYXJzZUludCIsImZpbmRMYXN0QmxvY2siLCJtYXN0ZXJjaGFpbkxhc3RCbG9jayIsIm5vQmxvY2tzIiwid29ya2NoYWluTGFzdEJsb2NrIiwiYWZ0ZXJfbWVyZ2UiLCJzaGFyZCIsImludmFsaWRCbG9ja2NoYWluIiwibWFzdGVyIiwic2hhcmRfaGFzaGVzIiwiZmluZE1hdGNoaW5nU2hhcmQiLCJzaGFyZEJsb2NrIiwicm9vdF9oYXNoIiwiZGVzY3IiLCJibG9jayIsImN1cnJlbnQiLCJ3YWl0Rm9yIiwicHJldl9yZWYiLCJPUiIsInByZXZfYWx0X3JlZiIsIkJMT0NLX0ZJRUxEUyIsImFmdGVyX3NwbGl0IiwiY2hlY2tTaGFyZE1hdGNoIiwibmUiLCJ0b3RhbFN0YXJ0IiwidGltZVJlcG9ydCIsInN0b3BUaW1lIiwibWVzc2FnZVByb2Nlc3NpbmdUaW1lb3V0IiwiaW5maW5pdGVXYWl0IiwiYWRkVGltZW91dCIsIm1heCIsInN0YXJ0Iiwid2FpdE5leHRCbG9jayIsImVuZCIsImdlbl91dGltZSIsInJlc29sdmVkRXJyb3IiLCJjb2RlIiwiVE9ORXJyb3JDb2RlIiwiV0FJVF9GT1JfVElNRU9VVCIsImJsb2NrX2lkIiwibWVzc2FnZV9wcm9jZXNzaW5nX3N0YXRlIiwic2VuZGluZ190aW1lIiwibmV0d29ya1NpbGVudCIsImluTXNnIiwiaW5fbXNnX2Rlc2NyIiwiZmluZCIsIngiLCJtc2dfaWQiLCJ0cmFuc2FjdGlvbklkIiwidHJhbnNhY3Rpb25faWQiLCJ0clN0YXJ0IiwidHJhbnNhY3Rpb25zIiwiVFJBTlNBQ1RJT05fRklFTERTX09SRElOQVJZIiwiTUFYX1RJTUVPVVQiLCJibG9ja190aW1lIiwibWVzc2FnZUV4cGlyZWQiLCJ0cmFuc2FjdGlvbldhaXRUaW1lb3V0Iiwic3BsaWNlIiwiam9pbiIsIk1FU1NBR0VfRVhQSVJFRCIsIlRSQU5TQUNUSU9OX1dBSVRfVElNRU9VVCIsInJlc29sdmVEZXRhaWxlZEVycm9yIiwicHJvY2Vzc1RyYW5zYWN0aW9uIiwib3JpZ2luYWxfZXJyb3IiLCJmdW5jdGlvbl9uYW1lIiwiYWNjb3VudE1pc3NpbmciLCJlcnJvciIsIm1lc3NhZ2VCYXNlNjQiLCJ0aW1lIiwibWFpbkVycm9yIiwiYWNjX3R5cGUiLCJpc0RlcGxveWVkIiwiYWxyZWFkeURlcGxveWVkIiwid2FpdEZvckRlcGxveVRyYW5zYWN0aW9uIiwiZGVwbG95TWVzc2FnZSIsInJ1bk1lc3NhZ2UiLCJ3YWl0Rm9yUnVuVHJhbnNhY3Rpb24iLCJ3YWl0UGFyYW1zIiwiZW11bGF0ZUJhbGFuY2UiLCJiaWdCYWxhbmNlIiwiY3JlYXRlRGVwbG95TWVzc2FnZSIsImNhbGNNc2dQcm9jZXNzRmVlcyIsIm5ld0FjY291bnQiLCJmbG9vciIsImNhbGwiLCJyZXRyaWVzQ291bnQiLCJtZXNzYWdlUmV0cmllc0NvdW50IiwiaSIsImlzT3JpZ2luYWxPclJlc29sdmVkIiwiZXhpdENvZGUiLCJpc09yaWdpbmFsQ29udHJhY3RFcnJvciIsImlzUmVzb2x2ZWRDb250cmFjdEVycm9yQWZ0ZXJFeHBpcmUiLCJ1c2VSZXRyeSIsIlRPTkNvbnRyYWN0RXhpdENvZGUiLCJSRVBMQVlfUFJPVEVDVElPTiIsImludGVybmFsRXJyb3IiLCJyZXRyeUNhbGwiLCJjcmVhdGVSdW5NZXNzYWdlIiwidHJhbnNhY3Rpb25MdCIsImxhc3RfdHJhbnNfbHQiLCJnZSIsImZ1bGxSdW4iLCJUT05Nb2R1bGUiLCJtb2R1bGVOYW1lIl0sIm1hcHBpbmdz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QUFZLCtJQUFsQjtBQVlBLElBQU1nQywyQkFBMkIsK2VBQWpDIiwic291cmNlc0NvbnRlbnQiOlsiLypcbiAqIENvcHlyaWdodCAyMDE4LTIwMjAgVE9OIERFViBTT0xVVElPTlMgTFRELlxuICovXG4vLyBAZmxvd1xuXG5pbXBvcnQge1xuICAgIFRyYWNlciwgRk9STUFUX1RFWFRfTUFQLCBTcGFuLCBTcGFuQ29udGV4dCxcbn0gZnJvbSAnb3BlbnRyYWNpbmcnO1xuaW1wb3J0IHR5cGUge1xuICAgIFFBY2NvdW50LFxuICAgIFFCbG9jayxcbiAgICBRTWVzc2FnZSxcbiAgICBRVHJhbnNhY3Rpb24sXG4gICAgVE9OQ29udHJhY3RBQkksXG4gICAgVE9OQ29udHJhY3RBY2NvdW50V2FpdFBhcmFtcyxcbiAgICBUT05Db250cmFjdENvbnZlcnRBZGRyZXNzUGFyYW1zLFxuICAgIFRPTkNvbnRyYWN0Q29udmVydEFkZHJlc3NSZXN1bHQsXG4gICAgVE9OQ29udHJhY3RDcmVhdGVSdW5Cb2R5UGFyYW1zLFxuICAgIFRPTkNvbnRyYWN0Q3JlYXRlUnVuQm9keVJlc3VsdCxcbiAgICBUT05Db250cmFjdENyZWF0ZVNpZ25lZERlcGxveU1lc3NhZ2VQYXJhbXMsXG4gICAgVE9OQ29udHJhY3RDcmVhdGVTaWduZWRNZXNzYWdlUGFyYW1zLFxuICAgIFRPTkNvbnRyYWN0Q3JlYXRlU2lnbmVkUnVuTWVzc2FnZVBhcmFtcyxcbiAgICBUT05Db250cmFjdERlY29kZU1lc3NhZ2VCb2R5UGFyYW1zLFxuICAgIFRPTkNvbnRyYWN0RGVjb2RlTWVzc2FnZUJvZHlSZXN1bHQsXG4gICAgVE9OQ29udHJhY3REZWNvZGVSdW5PdXRwdXRQYXJhbXMsXG4gICAgVE9OQ29udHJhY3REZXBsb3lNZXNzYWdlLFxuICAgIFRPTkNvbnRyYWN0RGVwbG95UGFyYW1zLFxuICAgIFRPTkNvbnRyYWN0RGVwbG95UmVzdWx0LFxuICAgIFRPTkNvbnRyYWN0Q2FsY0RlcGxveUZlZVBhcmFtcyxcbiAgICBUT05Db250cmFjdEJvYyxcbiAgICBUT05Db250cmFjdEdldEJvY0hhc2hSZXN1bHQsXG4gICAgVE9OQ29udHJhY3RHZXRDb2RlRnJvbUltYWdlUGFyYW1zLFxuICAgIFRPTkNvbnRyYWN0R2V0Q29kZUZyb21JbWFnZVJlc3VsdCxcbiAgICBUT05Db250cmFjdEdldERlcGxveURhdGFQYXJhbXMsXG4gICAgVE9OQ29udHJhY3RHZXREZXBsb3lEYXRhUmVzdWx0LFxuICAgIFRPTkNvbnRyYWN0R2V0RnVuY3Rpb25JZFBhcmFtcyxcbiAgICBUT05Db250cmFjdEdldEZ1bmN0aW9uSWRSZXN1bHQsXG4gICAgVE9OQ29udHJhY3RMb2FkUGFyYW1zLFxuICAgIFRPTkNvbnRyYWN0TG9hZFJlc3VsdCxcbiAgICBUT05Db250cmFjdENhbGNSdW5GZWVQYXJhbXMsXG4gICAgVE9OQ29udHJhY3RDYWxjRmVlUmVzdWx0LFxuICAgIFRPTkNvbnRyYWN0Q2FsY01zZ1Byb2Nlc3NpbmdGZWVzUGFyYW1zLFxuICAgIFRPTkNvbnRyYWN0TWVzc2FnZSxcbiAgICBUT05Db250cmFjdFJ1bkxvY2FsUGFyYW1zLFxuICAgIFRPTkNvbnRyYWN0UnVuTWVzc2FnZSxcbiAgICBUT05Db250cmFjdFJ1blBhcmFtcyxcbiAgICBUT05Db250cmFjdFJ1blJlc3VsdCxcbiAgICBUT05Db250cmFjdHMsXG4gICAgVE9OQ29udHJhY3RVbnNpZ25lZERlcGxveU1lc3NhZ2UsXG4gICAgVE9OQ29udHJhY3RVbnNpZ25lZE1lc3NhZ2UsXG4gICAgVE9OQ29udHJhY3RVbnNpZ25lZFJ1bk1lc3NhZ2UsXG4gICAgVE9OQ29udHJhY3RSdW5HZXRQYXJhbXMsXG4gICAgVE9OQ29udHJhY3RSdW5HZXRSZXN1bHQsXG4gICAgVE9OQ29udHJhY3RSdW5NZXNzYWdlTG9jYWxQYXJhbXMsXG4gICAgVE9OQ29udHJhY3RSdW5Mb2NhbFJlc3VsdCxcbiAgICBUT05XYWl0Rm9yVHJhbnNhY3Rpb25QYXJhbXMsXG4gICAgUVNoYXJkSGFzaCxcbiAgICBUT05NZXNzYWdlUHJvY2Vzc2luZ1N0YXRlLFxufSBmcm9tICcuLi8uLi90eXBlcyc7XG5cbmltcG9ydCB7IGVtcHR5VE9ORXJyb3JEYXRhLCBUT05DbGllbnRFcnJvciwgVE9OQ29udHJhY3RFeGl0Q29kZSwgVE9ORXJyb3JDb2RlIH0gZnJvbSAnLi4vVE9OQ2xpZW50RXJyb3InO1xuaW1wb3J0IHsgVE9OTW9kdWxlIH0gZnJvbSAnLi4vVE9OTW9kdWxlJztcbmltcG9ydCBUT05Db25maWdNb2R1bGUgZnJvbSAnLi9UT05Db25maWdNb2R1bGUnO1xuaW1wb3J0IFRPTlF1ZXJpZXNNb2R1bGUsIHsgTUFYX1RJTUVPVVQgfSBmcm9tICcuL1RPTlF1ZXJpZXNNb2R1bGUnO1xuXG5leHBvcnQgY29uc3QgVE9OQWRkcmVzc1N0cmluZ1ZhcmlhbnQgPSB7XG4gICAgQWNjb3VudElkOiAnQWNjb3VudElkJyxcbiAgICBIZXg6ICdIZXgnLFxuICAgIEJhc2U2NDogJ0Jhc2U2NCcsXG59O1xuXG5leHBvcnQgY29uc3QgVE9OQ2xpZW50VHJhbnNhY3Rpb25QaGFzZSA9IHtcbiAgICBzdG9yYWdlOiAnc3RvcmFnZScsXG4gICAgY29tcHV0ZVNraXBwZWQ6ICdjb21wdXRlU2tpcHBlZCcsXG4gICAgY29tcHV0ZVZtOiAnY29tcHV0ZVZtJyxcbiAgICBhY3Rpb246ICdhY3Rpb24nLFxuICAgIHVua25vd246ICd1bmtub3duJyxcbn07XG5cbmV4cG9ydCBjb25zdCBUT05DbGllbnRDb21wdXRlU2tpcHBlZFN0YXR1cyA9IHtcbiAgICBub1N0YXRlOiAwLFxuICAgIGJhZFN0YXRlOiAxLFxuICAgIG5vR2FzOiAyLFxufTtcblxuZXhwb3J0IGNvbnN0IFRPTkNsaWVudFN0b3JhZ2VTdGF0dXMgPSB7XG4gICAgdW5jaGFuZ2VkOiAwLFxuICAgIGZyb3plbjogMSxcbiAgICBkZWxldGVkOiAyLFxufTtcblxuZXhwb3J0IGNvbnN0IFFJbk1zZ1R5cGUgPSB7XG4gICAgZXh0ZXJuYWw6IDAsXG4gICAgaWhyOiAxLFxuICAgIGltbWVkaWF0ZWx5OiAyLFxuICAgIGZpbmFsOiAzLFxuICAgIHRyYW5zaXQ6IDQsXG4gICAgZGlzY2FyZGVkRmluYWw6IDUsXG4gICAgZGlzY2FyZGVkVHJhbnNpdDogNixcbn07XG5cbmV4cG9ydCBjb25zdCBRT3V0TXNnVHlwZSA9IHtcbiAgICBleHRlcm5hbDogMCxcbiAgICBpbW1lZGlhdGVseTogMSxcbiAgICBvdXRNc2dOZXc6IDIsXG4gICAgdHJhbnNpdDogMyxcbiAgICBkZXF1ZXVlSW1tZWRpYXRlbHk6IDQsXG4gICAgZGVxdWV1ZTogNSxcbiAgICB0cmFuc2l0UmVxdWlyZWQ6IDYsXG4gICAgbm9uZTogLTEsXG59O1xuXG5leHBvcnQgY29uc3QgUU1lc3NhZ2VUeXBlID0ge1xuICAgIGludGVybmFsOiAwLFxuICAgIGV4dEluOiAxLFxuICAgIGV4dE91dDogMixcbn07XG5cbmV4cG9ydCBjb25zdCBRTWVzc2FnZVByb2Nlc3NpbmdTdGF0dXMgPSB7XG4gICAgdW5rbm93bjogMCxcbiAgICBxdWV1ZWQ6IDEsXG4gICAgcHJvY2Vzc2luZzogMixcbiAgICBwcmVsaW1pbmFyeTogMyxcbiAgICBwcm9wb3NlZDogNCxcbiAgICBmaW5hbGl6ZWQ6IDUsXG4gICAgcmVmdXNlZDogNixcbiAgICB0cmFuc2l0aW5nOiA3LFxufTtcblxuZXhwb3J0IGNvbnN0IFFCbG9ja1Byb2Nlc3NpbmdTdGF0dXMgPSB7XG4gICAgdW5rbm93bjogMCxcbiAgICBwcm9wb3NlZDogMSxcbiAgICBmaW5hbGl6ZWQ6IDIsXG4gICAgcmVmdXNlZDogMyxcbn07XG5cbmV4cG9ydCBjb25zdCBRU3BsaXRUeXBlID0ge1xuICAgIG5vbmU6IDAsXG4gICAgc3BsaXQ6IDIsXG4gICAgbWVyZ2U6IDMsXG59O1xuXG5leHBvcnQgY29uc3QgUUFjY291bnRUeXBlID0ge1xuICAgIHVuaW5pdDogMCxcbiAgICBhY3RpdmU6IDEsXG4gICAgZnJvemVuOiAyLFxufTtcblxuZXhwb3J0IGNvbnN0IFFUcmFuc2FjdGlvblR5cGUgPSB7XG4gICAgb3JkaW5hcnk6IDAsXG4gICAgc3RvcmFnZTogMSxcbiAgICB0aWNrOiAyLFxuICAgIHRvY2s6IDMsXG4gICAgc3BsaXRQcmVwYXJlOiA0LFxuICAgIHNwbGl0SW5zdGFsbDogNSxcbiAgICBtZXJnZVByZXBhcmU6IDYsXG4gICAgbWVyZ2VJbnN0YWxsOiA3LFxufTtcblxuZXhwb3J0IGNvbnN0IFFUcmFuc2FjdGlvblByb2Nlc3NpbmdTdGF0dXMgPSB7XG4gICAgdW5rbm93bjogMCxcbiAgICBwcmVsaW1pbmFyeTogMSxcbiAgICBwcm9wb3NlZDogMixcbiAgICBmaW5hbGl6ZWQ6IDMsXG4gICAgcmVmdXNlZDogNCxcbn07XG5cbmV4cG9ydCBjb25zdCBRQWNjb3VudFN0YXR1cyA9IHtcbiAgICB1bmluaXQ6IDAsXG4gICAgYWN0aXZlOiAxLFxuICAgIGZyb3plbjogMixcbiAgICBub25FeGlzdDogMyxcbn07XG5cbmV4cG9ydCBjb25zdCBRQWNjb3VudFN0YXR1c0NoYW5nZSA9IHtcbiAgICB1bmNoYW5nZWQ6IDAsXG4gICAgZnJvemVuOiAxLFxuICAgIGRlbGV0ZWQ6IDIsXG59O1xuXG5leHBvcnQgY29uc3QgUUNvbXB1dGVUeXBlID0ge1xuICAgIHNraXBwZWQ6IDAsXG4gICAgdm06IDEsXG59O1xuXG5leHBvcnQgY29uc3QgUVNraXBSZWFzb24gPSB7XG4gICAgbm9TdGF0ZTogMCxcbiAgICBiYWRTdGF0ZTogMSxcbiAgICBub0dhczogMixcbn07XG5cbmV4cG9ydCBjb25zdCBRQm91bmNlVHlwZSA9IHtcbiAgICBuZWdGdW5kczogMCxcbiAgICBub0Z1bmRzOiAxLFxuICAgIG9rOiAyLFxufTtcblxuY29uc3QgTUFTVEVSQ0hBSU5fSUQgPSAtMTtcblxuY29uc3QgRVhUUkFfVFJBTlNBQ1RJT05fV0FJVElOR19USU1FID0gMTAwMDA7XG5jb25zdCBCTE9DS19UUkFOU0FDVElPTl9XQUlUSU5HX1RJTUUgPSA1MDAwO1xuXG5mdW5jdGlvbiByZW1vdmVUeXBlTmFtZShvYmo6IGFueSkge1xuICAgIGlmIChvYmouX190eXBlbmFtZSkge1xuICAgICAgICBkZWxldGUgb2JqLl9fdHlwZW5hbWU7XG4gICAgfVxuICAgIE9iamVjdC52YWx1ZXMob2JqKVxuICAgICAgICAuZm9yRWFjaCgodmFsdWUpID0+IHtcbiAgICAgICAgICAgIGlmICghIXZhbHVlICYmIHR5cGVvZiB2YWx1ZSA9PT0gJ29iamVjdCcpIHtcbiAgICAgICAgICAgICAgICByZW1vdmVUeXBlTmFtZSh2YWx1ZSk7XG4gICAgICAgICAgICB9XG4gICAgICAgIH0pO1xufVxuXG5leHBvcnQgZnVuY3Rpb24gcmVtb3ZlUHJvcHMob2JqOiB7fSwgcGF0aHM6IHN0cmluZ1tdKToge30ge1xuICAgIGxldCByZXN1bHQgPSBvYmo7XG4gICAgcGF0aHMuZm9yRWFjaCgocGF0aCkgPT4ge1xuICAgICAgICBjb25zdCBkb3RQb3MgPSBwYXRoLmluZGV4T2YoJy4nKTtcbiAgICAgICAgaWYgKGRvdFBvcyA8IDApIHtcbiAgICAgICAgICAgIGlmIChwYXRoIGluIHJlc3VsdCkge1xuICAgICAgICAgICAgICAgIHJlc3VsdCA9IHsgLi4ucmVzdWx0IH07XG4gICAgICAgICAgICAgICAgZGVsZXRlIHJlc3VsdFtwYXRoXTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIGNvbnN0IG5hbWUgPSBwYXRoLnN1YnN0cigwLCBkb3RQb3MpO1xuICAgICAgICAgICAgY29uc3QgY2hpbGQgPSByZXN1bHRbbmFtZV07XG4gICAgICAgICAgICBpZiAoY2hpbGQpIHtcbiAgICAgICAgICAgICAgICBjb25zdCByZWR1Y2VkQ2hpbGQgPSByZW1vdmVQcm9wcyhjaGlsZCwgW3BhdGguc3Vic3RyKGRvdFBvcyArIDEpXSk7XG4gICAgICAgICAgICAgICAgaWYgKHJlZHVjZWRDaGlsZCAhPT0gY2hpbGQpIHtcbiAgICAgICAgICAgICAgICAgICAgcmVzdWx0ID0ge1xuICAgICAgICAgICAgICAgICAgICAgICAgLi4ucmVzdWx0LFxuICAgICAgICAgICAgICAgICAgICAgICAgW25hbWVdOiByZWR1Y2VkQ2hpbGQsXG4gICAgICAgICAgICAgICAgICAgIH07XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgfSk7XG4gICAgcmV0dXJuIHJlc3VsdDtcbn1cblxuZnVuY3Rpb24gc3RhcnRNZXNzYWdlVHJhY2VTcGFuKFxuICAgIHRyYWNlcjogVHJhY2VyLFxuICAgIG1lc3NhZ2VJZDogc3RyaW5nLFxuICAgIG9wZXJhdGlvbk5hbWU6IHN0cmluZyxcbiAgICB0YWdzOiB7IFtzdHJpbmddOiBhbnkgfSxcbik6ID9TcGFuIHtcbiAgICBpZiAoIW1lc3NhZ2VJZCkge1xuICAgICAgICByZXR1cm4gbnVsbDtcbiAgICB9XG4gICAgY29uc3QgdHJhY2VJZCA9IG1lc3NhZ2VJZC5zdWJzdHIoMCwgMTYpO1xuICAgIGNvbnN0IHNwYW5JZCA9IG1lc3NhZ2VJZC5zdWJzdHIoMTYsIDE2KTtcbiAgICBsZXQgcm9vdENvbnRleHQ6ID9TcGFuQ29udGV4dCA9IG51bGw7XG4gICAgdHJ5IHtcbiAgICAgICAgcm9vdENvbnRleHQgPSB0cmFjZXIuZXh0cmFjdChGT1JNQVRfVEVYVF9NQVAsIHtcbiAgICAgICAgICAgICd1YmVyLXRyYWNlLWlkJzogYCR7dHJhY2VJZH06JHtzcGFuSWR9OjA6MWAsXG4gICAgICAgIH0pO1xuICAgIH0gY2F0Y2gge1xuICAgICAgICAvLyB0cmFjZXIgY2FuJ3QgY3JlYXRlIGphZWdlciBjb21wYXRpYmxlIHNwYW4sXG4gICAgICAgIC8vIHNvIHdlIGFyZSBmYWxsYmFjayB0byByZXR1cm4gbnVsbFxuICAgIH1cbiAgICBpZiAoIXJvb3RDb250ZXh0KSB7XG4gICAgICAgIHJldHVybiBudWxsO1xuICAgIH1cbiAgICByZXR1cm4gdHJhY2VyLnN0YXJ0U3BhbihvcGVyYXRpb25OYW1lLCB7XG4gICAgICAgIGNoaWxkT2Y6IHJvb3RDb250ZXh0LFxuICAgICAgICB0YWdzLFxuICAgIH0pO1xufVxuXG5mdW5jdGlvbiB0cmFjZU1lc3NhZ2UoXG4gICAgdHJhY2VyOiBUcmFjZXIsXG4gICAgbWVzc2FnZUlkOiBzdHJpbmcsXG4gICAgb3BlcmF0aW9uTmFtZTogc3RyaW5nLFxuICAgIHRhZ3M6IHsgW3N0cmluZ106IGFueSB9LFxuKSB7XG4gICAgY29uc3Qgc3BhbiA9IHN0YXJ0TWVzc2FnZVRyYWNlU3Bhbih0cmFjZXIsIG1lc3NhZ2VJZCwgb3BlcmF0aW9uTmFtZSwgdGFncyk7XG4gICAgaWYgKHNwYW4pIHtcbiAgICAgICAgc3Bhbi5maW5pc2goKTtcbiAgICB9XG59XG5cbmV4cG9ydCBkZWZhdWx0IGNsYXNzIFRPTkNvbnRyYWN0c01vZHVsZSBleHRlbmRzIFRPTk1vZHVsZSBpbXBsZW1lbnRzIFRPTkNvbnRyYWN0cyB7XG4gICAgY29uZmlnOiBUT05Db25maWdNb2R1bGU7XG5cbiAgICBxdWVyaWVzOiBUT05RdWVyaWVzTW9kdWxlO1xuXG4gICAgYXN5bmMgc2V0dXAoKTogUHJvbWlzZTwqPiB7XG4gICAgICAgIHRoaXMuY29uZmlnID0gdGhpcy5jb250ZXh0LmdldE1vZHVsZShUT05Db25maWdNb2R1bGUpO1xuICAgICAgICB0aGlzLnF1ZXJpZXMgPSB0aGlzLmNvbnRleHQuZ2V0TW9kdWxlKFRPTlF1ZXJpZXNNb2R1bGUpO1xuICAgIH1cblxuICAgIGFzeW5jIGxvYWQoXG4gICAgICAgIHBhcmFtczogVE9OQ29udHJhY3RMb2FkUGFyYW1zLFxuICAgICAgICBwYXJlbnRTcGFuPzogKFNwYW4gfCBTcGFuQ29udGV4dCksXG4gICAgKTogUHJvbWlzZTxUT05Db250cmFjdExvYWRSZXN1bHQ+IHtcbiAgICAgICAgY29uc3QgYWNjb3VudHM6IFFBY2NvdW50W10gPSBhd2FpdCB0aGlzLnF1ZXJpZXMuYWNjb3VudHMucXVlcnkoe1xuICAgICAgICAgICAgZmlsdGVyOiB7XG4gICAgICAgICAgICAgICAgaWQ6IHsgZXE6IHBhcmFtcy5hZGRyZXNzIH0sXG4gICAgICAgICAgICB9LFxuICAgICAgICAgICAgcmVzdWx0OiAnYmFsYW5jZScsXG4gICAgICAgICAgICBwYXJlbnRTcGFuLFxuICAgICAgICB9KTtcbiAgICAgICAgaWYgKGFjY291bnRzICYmIGFjY291bnRzLmxlbmd0aCA+IDApIHtcbiAgICAgICAgICAgIHJldHVybiB7XG4gICAgICAgICAgICAgICAgaWQ6IHBhcmFtcy5hZGRyZXNzLFxuICAgICAgICAgICAgICAgIGJhbGFuY2VHcmFtczogYWNjb3VudHNbMF0uYmFsYW5jZSxcbiAgICAgICAgICAgIH07XG4gICAgICAgIH1cbiAgICAgICAgcmV0dXJuIHtcbiAgICAgICAgICAgIGlkOiBudWxsLFxuICAgICAgICAgICAgYmFsYW5jZUdyYW1zOiBudWxsLFxuICAgICAgICB9O1xuICAgIH1cblxuXG4gICAgLy8gRmFjYWRlIGZ1bmN0aW9uc1xuXG4gICAgYXN5bmMgZGVwbG95KFxuICAgICAgICBwYXJhbXM6IFRPTkNvbnRyYWN0RGVwbG95UGFyYW1zLFxuICAgICAgICBwYXJlbnRTcGFuPzogKFNwYW4gfCBTcGFuQ29udGV4dCksXG4gICAgKTogUHJvbWlzZTxUT05Db250cmFjdERlcGxveVJlc3VsdD4ge1xuICAgICAgICByZXR1cm4gdGhpcy5jb250ZXh0LnRyYWNlKCdjb250cmFjdHMuZGVwbG95JywgYXN5bmMgKHNwYW46IFNwYW4pID0+IHtcbiAgICAgICAgICAgIHNwYW4uc2V0VGFnKCdwYXJhbXMnLCByZW1vdmVQcm9wcyhwYXJhbXMsIFsna2V5UGFpci5zZWNyZXQnXSkpO1xuICAgICAgICAgICAgcmV0dXJuIHRoaXMuaW50ZXJuYWxEZXBsb3lKcyhwYXJhbXMsIHNwYW4pO1xuICAgICAgICB9LCBwYXJlbnRTcGFuKTtcbiAgICB9XG5cblxuICAgIGFzeW5jIHJ1bihcbiAgICAgICAgcGFyYW1zOiBUT05Db250cmFjdFJ1blBhcmFtcyxcbiAgICAgICAgcGFyZW50U3Bhbj86IChTcGFuIHwgU3BhbkNvbnRleHQpLFxuICAgICk6IFByb21pc2U8VE9OQ29udHJhY3RSdW5SZXN1bHQ+IHtcbiAgICAgICAgcmV0dXJuIHRoaXMuY29udGV4dC50cmFjZSgnY29udHJhY3RzLnJ1bicsIGFzeW5jIChzcGFuOiBTcGFuKSA9PiB7XG4gICAgICAgICAgICBzcGFuLnNldFRhZygncGFyYW1zJywgcmVtb3ZlUHJvcHMocGFyYW1zLCBbJ2tleVBhaXIuc2VjcmV0J10pKTtcbiAgICAgICAgICAgIHJldHVybiB0aGlzLmludGVybmFsUnVuSnMocGFyYW1zLCBzcGFuKTtcbiAgICAgICAgfSwgcGFyZW50U3Bhbik7XG4gICAgfVxuXG4gICAgYXN5bmMgcnVuTG9jYWwoXG4gICAgICAgIHBhcmFtczogVE9OQ29udHJhY3RSdW5Mb2NhbFBhcmFtcyxcbiAgICAgICAgcGFyZW50U3Bhbj86IChTcGFuIHwgU3BhbkNvbnRleHQpLFxuICAgICk6IFByb21pc2U8VE9OQ29udHJhY3RSdW5Mb2NhbFJlc3VsdD4ge1xuICAgICAgICByZXR1cm4gdGhpcy5jb250ZXh0LnRyYWNlKCdjb250cmFjdHMucnVuTG9jYWwnLCBhc3luYyAoc3BhbjogU3BhbikgPT4ge1xuICAgICAgICAgICAgc3Bhbi5zZXRUYWcoJ3BhcmFtcycsIHJlbW92ZVByb3BzKHBhcmFtcywgWydrZXlQYWlyLnNlY3JldCddKSk7XG4gICAgICAgICAgICByZXR1cm4gdGhpcy5pbnRlcm5hbFJ1bkxvY2FsSnMocGFyYW1zLCBzcGFuKTtcbiAgICAgICAgfSwgcGFyZW50U3Bhbik7XG4gICAgfVxuXG4gICAgYXN5bmMgcnVuTWVzc2FnZUxvY2FsKFxuICAgICAgICBwYXJhbXM6IFRPTkNvbnRyYWN0UnVuTWVzc2FnZUxvY2FsUGFyYW1zLFxuICAgICAgICBwYXJlbnRTcGFuPzogKFNwYW4gfCBTcGFuQ29udGV4dCksXG4gICAgKTogUHJvbWlzZTxUT05Db250cmFjdFJ1bkxvY2FsUmVzdWx0PiB7XG4gICAgICAgIHJldHVybiB0aGlzLmNvbnRleHQudHJhY2UoJ3J1bk1lc3NhZ2VMb2NhbCcsIGFzeW5jIChzcGFuOiBTcGFuKSA9PiB7XG4gICAgICAgICAgICBzcGFuLnNldFRhZygncGFyYW1zJywgcmVtb3ZlUHJvcHMocGFyYW1zLCBbJ2tleVBhaXIuc2VjcmV0J10pKTtcbiAgICAgICAgICAgIHJldHVybiB0aGlzLmludGVybmFsUnVuTWVzc2FnZUxvY2FsSnMocGFyYW1zLCBzcGFuKTtcbiAgICAgICAgfSwgcGFyZW50U3Bhbik7XG4gICAgfVxuXG4gICAgYXN5bmMgcnVuR2V0KFxuICAgICAgICBwYXJhbXM6IFRPTkNvbnRyYWN0UnVuR2V0UGFyYW1zLFxuICAgICk6IFByb21pc2U8VE9OQ29udHJhY3RSdW5HZXRSZXN1bHQ+IHtcbiAgICAgICAgbGV0IGNvcmVQYXJhbXM6IFRPTkNvbnRyYWN0UnVuR2V0UGFyYW1zID0gcGFyYW1zO1xuICAgICAgICBjb25zdCBoYXNDb2RlID0gcGFyYW1zLmJvY0Jhc2U2NCB8fCAocGFyYW1zLmNvZGVCYXNlNjQgJiYgcGFyYW1zLmRhdGFCYXNlNjQpO1xuICAgICAgICBpZiAoIWhhc0NvZGUpIHtcbiAgICAgICAgICAgIGNvbnN0IGFkZHJlc3MgPSBwYXJhbXMuYWRkcmVzcztcbiAgICAgICAgICAgIGlmICghYWRkcmVzcykge1xuICAgICAgICAgICAgICAgIHRocm93IFRPTkNsaWVudEVycm9yLmFkZHJlc3NSZXF1aXJlZEZvclJ1bkxvY2FsKGF3YWl0IHRoaXMuY29tcGxldGVFcnJvckRhdGEoKSk7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBjb25zdCBhY2NvdW50OiBhbnkgPSBhd2FpdCB0aGlzLmdldEFjY291bnQoYWRkcmVzcywgZmFsc2UsIHtcbiAgICAgICAgICAgICAgICB0aW1lb3V0OiB0aGlzLmNvbmZpZy53YWl0Rm9yVGltZW91dCgpLFxuICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICBpZiAoIWFjY291bnQuY29kZV9oYXNoKSB7XG4gICAgICAgICAgICAgICAgdGhyb3cgVE9OQ2xpZW50RXJyb3IuYWNjb3VudENvZGVNaXNzaW5nKFxuICAgICAgICAgICAgICAgICAgICBhZGRyZXNzLFxuICAgICAgICAgICAgICAgICAgICBhY2NvdW50LmJhbGFuY2UsXG4gICAgICAgICAgICAgICAgICAgIGF3YWl0IHRoaXMuY29tcGxldGVFcnJvckRhdGEoKSxcbiAgICAgICAgICAgICAgICApO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgY29uc3QgcGFyYW1zRnJvbUFjY291bnQ6ICRTaGFwZTxUT05Db250cmFjdFJ1bkdldFBhcmFtcz4gPSB7fTtcbiAgICAgICAgICAgIGlmIChhY2NvdW50LmJvYykge1xuICAgICAgICAgICAgICAgIHBhcmFtc0Zyb21BY2NvdW50LmJvY0Jhc2U2NCA9IGFjY291bnQuYm9jO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgaWYgKGFjY291bnQubGFzdF9wYWlkKSB7XG4gICAgICAgICAgICAgICAgcGFyYW1zRnJvbUFjY291bnQubGFzdF9wYWlkID0gYWNjb3VudC5sYXN0X3BhaWQ7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBpZiAoYWNjb3VudC5iYWxhbmNlKSB7XG4gICAgICAgICAgICAgICAgcGFyYW1zRnJvbUFjY291bnQuYmFsYW5jZSA9IGFjY291bnQuYmFsYW5jZTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGNvcmVQYXJhbXMgPSB7XG4gICAgICAgICAgICAgICAgLi4ucGFyYW1zRnJvbUFjY291bnQsXG4gICAgICAgICAgICAgICAgLi4ucGFyYW1zLFxuICAgICAgICAgICAgfTtcbiAgICAgICAgfVxuICAgICAgICByZXR1cm4gdGhpcy5yZXF1ZXN0Q29yZSgndHZtLmdldCcsIGNvcmVQYXJhbXMpO1xuICAgIH1cblxuICAgIGFycmF5RnJvbUNPTlMoY29uczogYW55W10pOiBhbnlbXSB7XG4gICAgICAgIGNvbnN0IHJlc3VsdCA9IFtdO1xuICAgICAgICBsZXQgaXRlbSA9IGNvbnM7XG4gICAgICAgIHdoaWxlIChpdGVtKSB7XG4gICAgICAgICAgICBpZiAoIWl0ZW0ubGVuZ3RoID09PSAyKSB7XG4gICAgICAgICAgICAgICAgdGhyb3cgVE9OQ2xpZW50RXJyb3IuaW52YWxpZENvbnMoZW1wdHlUT05FcnJvckRhdGEpO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgcmVzdWx0LnB1c2goaXRlbVswXSk7XG4gICAgICAgICAgICBpdGVtID0gaXRlbVsxXTtcbiAgICAgICAgfVxuICAgICAgICByZXR1cm4gcmVzdWx0O1xuICAgIH1cblxuXG4gICAgLy8gTWVzc2FnZSBjcmVhdGlvblxuXG4gICAgYXN5bmMgY3JlYXRlRGVwbG95TWVzc2FnZShcbiAgICAgICAgcGFyYW1zOiBUT05Db250cmFjdERlcGxveVBhcmFtcyxcbiAgICAgICAgcmV0cnlJbmRleD86IG51bWJlcixcbiAgICApOiBQcm9taXNlPFRPTkNvbnRyYWN0RGVwbG95TWVzc2FnZT4ge1xuICAgICAgICB0aGlzLmNvbmZpZy5sb2coJ2NyZWF0ZURlcGxveU1lc3NhZ2UnLCBwYXJhbXMpO1xuICAgICAgICBjb25zdCBtZXNzYWdlOiBUT05Db250cmFjdE1lc3NhZ2UgPSBhd2FpdCB0aGlzLnJlcXVlc3RDb3JlKCdjb250cmFjdHMuZGVwbG95Lm1lc3NhZ2UnLCB7XG4gICAgICAgICAgICBhYmk6IHBhcmFtcy5wYWNrYWdlLmFiaSxcbiAgICAgICAgICAgIGNvbnN0cnVjdG9ySGVhZGVyOiBwYXJhbXMuY29uc3RydWN0b3JIZWFkZXIsXG4gICAgICAgICAgICBjb25zdHJ1Y3RvclBhcmFtczogcGFyYW1zLmNvbnN0cnVjdG9yUGFyYW1zLFxuICAgICAgICAgICAgaW5pdFBhcmFtczogcGFyYW1zLmluaXRQYXJhbXMsXG4gICAgICAgICAgICBpbWFnZUJhc2U2NDogcGFyYW1zLnBhY2thZ2UuaW1hZ2VCYXNlNjQsXG4gICAgICAgICAgICBrZXlQYWlyOiBwYXJhbXMua2V5UGFpcixcbiAgICAgICAgICAgIHdvcmtjaGFpbklkOiBwYXJhbXMud29ya2NoYWluSWQsXG4gICAgICAgIH0pO1xuICAgICAgICByZXR1cm4ge1xuICAgICAgICAgICAgbWVzc2FnZSxcbiAgICAgICAgICAgIGFkZHJlc3M6IG1lc3NhZ2UuYWRkcmVzcyxcbiAgICAgICAgfTtcbiAgICB9XG5cblxuICAgIGFzeW5jIGNyZWF0ZVJ1bk1lc3NhZ2UoXG4gICAgICAgIHBhcmFtczogVE9OQ29udHJhY3RSdW5QYXJhbXMsXG4gICAgICAgIHJldHJ5SW5kZXg/OiBudW1iZXIsXG4gICAgKTogUHJvbWlzZTxUT05Db250cmFjdFJ1bk1lc3NhZ2U+IHtcbiAgICAgICAgdGhpcy5jb25maWcubG9nKCdjcmVhdGVSdW5NZXNzYWdlJywgcGFyYW1zKTtcbiAgICAgICAgY29uc3QgbWVzc2FnZSA9IGF3YWl0IHRoaXMucmVxdWVzdENvcmUoJ2NvbnRyYWN0cy5ydW4ubWVzc2FnZScsIHtcbiAgICAgICAgICAgIGFkZHJlc3M6IHBhcmFtcy5hZGRyZXNzLFxuICAgICAgICAgICAgYWJpOiBwYXJhbXMuYWJpLFxuICAgICAgICAgICAgZnVuY3Rpb25OYW1lOiBwYXJhbXMuZnVuY3Rpb25OYW1lLFxuICAgICAgICAgICAgaGVhZGVyOiBwYXJhbXMuaGVhZGVyLFxuICAgICAgICAgICAgdHJ5SW5kZXg6IHJldHJ5SW5kZXgsXG4gICAgICAgICAgICBpbnB1dDogcGFyYW1zLmlucHV0LFxuICAgICAgICAgICAga2V5UGFpcjogcGFyYW1zLmtleVBhaXIsXG4gICAgICAgIH0pO1xuICAgICAgICByZXR1cm4ge1xuICAgICAgICAgICAgYWRkcmVzczogcGFyYW1zLmFkZHJlc3MsXG4gICAgICAgICAgICBhYmk6IHBhcmFtcy5hYmksXG4gICAgICAgICAgICBmdW5jdGlvbk5hbWU6IHBhcmFtcy5mdW5jdGlvbk5hbWUsXG4gICAgICAgICAgICBtZXNzYWdlLFxuICAgICAgICB9O1xuICAgIH1cblxuICAgIGFzeW5jIGNyZWF0ZVVuc2lnbmVkRGVwbG95TWVzc2FnZShcbiAgICAgICAgcGFyYW1zOiBUT05Db250cmFjdERlcGxveVBhcmFtcyxcbiAgICAgICAgcmV0cnlJbmRleD86IG51bWJlcixcbiAgICApOiBQcm9taXNlPFRPTkNvbnRyYWN0VW5zaWduZWREZXBsb3lNZXNzYWdlPiB7XG4gICAgICAgIGNvbnN0IHJlc3VsdDoge1xuICAgICAgICAgICAgZW5jb2RlZDogVE9OQ29udHJhY3RVbnNpZ25lZE1lc3NhZ2UsXG4gICAgICAgICAgICBhZGRyZXNzSGV4OiBzdHJpbmcsXG4gICAgICAgIH0gPSBhd2FpdCB0aGlzLnJlcXVlc3RDb3JlKCdjb250cmFjdHMuZGVwbG95LmVuY29kZV91bnNpZ25lZF9tZXNzYWdlJywge1xuICAgICAgICAgICAgYWJpOiBwYXJhbXMucGFja2FnZS5hYmksXG4gICAgICAgICAgICBjb25zdHJ1Y3RvckhlYWRlcjogcGFyYW1zLmNvbnN0cnVjdG9ySGVhZGVyLFxuICAgICAgICAgICAgdHJ5SW5kZXg6IHJldHJ5SW5kZXgsXG4gICAgICAgICAgICBjb25zdHJ1Y3RvclBhcmFtczogcGFyYW1zLmNvbnN0cnVjdG9yUGFyYW1zLFxuICAgICAgICAgICAgaW5pdFBhcmFtczogcGFyYW1zLmluaXRQYXJhbXMsXG4gICAgICAgICAgICBpbWFnZUJhc2U2NDogcGFyYW1zLnBhY2thZ2UuaW1hZ2VCYXNlNjQsXG4gICAgICAgICAgICBwdWJsaWNLZXlIZXg6IHBhcmFtcy5rZXlQYWlyLnB1YmxpYyxcbiAgICAgICAgICAgIHdvcmtjaGFpbklkOiBwYXJhbXMud29ya2NoYWluSWQsXG4gICAgICAgIH0pO1xuICAgICAgICByZXR1cm4ge1xuICAgICAgICAgICAgYWRkcmVzczogcmVzdWx0LmFkZHJlc3NIZXgsXG4gICAgICAgICAgICBzaWduUGFyYW1zOiB7XG4gICAgICAgICAgICAgICAgLi4ucmVzdWx0LmVuY29kZWQsXG4gICAgICAgICAgICAgICAgYWJpOiBwYXJhbXMucGFja2FnZS5hYmksXG4gICAgICAgICAgICB9LFxuICAgICAgICB9O1xuICAgIH1cblxuXG4gICAgYXN5bmMgY3JlYXRlVW5zaWduZWRSdW5NZXNzYWdlKFxuICAgICAgICBwYXJhbXM6IFRPTkNvbnRyYWN0UnVuUGFyYW1zLFxuICAgICAgICByZXRyeUluZGV4PzogbnVtYmVyLFxuICAgICk6IFByb21pc2U8VE9OQ29udHJhY3RVbnNpZ25lZFJ1bk1lc3NhZ2U+IHtcbiAgICAgICAgY29uc3Qgc2lnblBhcmFtcyA9IGF3YWl0IHRoaXMucmVxdWVzdENvcmUoJ2NvbnRyYWN0cy5ydW4uZW5jb2RlX3Vuc2lnbmVkX21lc3NhZ2UnLCB7XG4gICAgICAgICAgICBhZGRyZXNzOiBwYXJhbXMuYWRkcmVzcyxcbiAgICAgICAgICAgIGFiaTogcGFyYW1zLmFiaSxcbiAgICAgICAgICAgIGZ1bmN0aW9uTmFtZTogcGFyYW1zLmZ1bmN0aW9uTmFtZSxcbiAgICAgICAgICAgIGhlYWRlcjogcGFyYW1zLmhlYWRlcixcbiAgICAgICAgICAgIHRyeUluZGV4OiByZXRyeUluZGV4LFxuICAgICAgICAgICAgaW5wdXQ6IHBhcmFtcy5pbnB1dCxcbiAgICAgICAgfSk7XG4gICAgICAgIHJldHVybiB7XG4gICAgICAgICAgICBhZGRyZXNzOiBwYXJhbXMuYWRkcmVzcyxcbiAgICAgICAgICAgIGZ1bmN0aW9uTmFtZTogcGFyYW1zLmZ1bmN0aW9uTmFtZSxcbiAgICAgICAgICAgIHNpZ25QYXJhbXM6IHtcbiAgICAgICAgICAgICAgICAuLi5zaWduUGFyYW1zLFxuICAgICAgICAgICAgICAgIGFiaTogcGFyYW1zLmFiaSxcbiAgICAgICAgICAgIH0sXG4gICAgICAgIH07XG4gICAgfVxuXG5cbiAgICBhc3luYyBjcmVhdGVTaWduZWRNZXNzYWdlKFxuICAgICAgICBwYXJhbXM6IFRPTkNvbnRyYWN0Q3JlYXRlU2lnbmVkTWVzc2FnZVBhcmFtcyxcbiAgICApOiBQcm9taXNlPFRPTkNvbnRyYWN0TWVzc2FnZT4ge1xuICAgICAgICByZXR1cm4gdGhpcy5yZXF1ZXN0Q29yZSgnY29udHJhY3RzLmVuY29kZV9tZXNzYWdlX3dpdGhfc2lnbicsIHBhcmFtcyk7XG4gICAgfVxuXG5cbiAgICBhc3luYyBjcmVhdGVTaWduZWREZXBsb3lNZXNzYWdlKFxuICAgICAgICBwYXJhbXM6IFRPTkNvbnRyYWN0Q3JlYXRlU2lnbmVkRGVwbG95TWVzc2FnZVBhcmFtcyxcbiAgICApOiBQcm9taXNlPFRPTkNvbnRyYWN0RGVwbG95TWVzc2FnZT4ge1xuICAgICAgICBjb25zdCBtZXNzYWdlID0gYXdhaXQgdGhpcy5jcmVhdGVTaWduZWRNZXNzYWdlKHtcbiAgICAgICAgICAgIGFiaTogcGFyYW1zLnVuc2lnbmVkTWVzc2FnZS5zaWduUGFyYW1zLmFiaSxcbiAgICAgICAgICAgIHVuc2lnbmVkQnl0ZXNCYXNlNjQ6IHBhcmFtcy51bnNpZ25lZE1lc3NhZ2Uuc2lnblBhcmFtcy51bnNpZ25lZEJ5dGVzQmFzZTY0LFxuICAgICAgICAgICAgc2lnbkJ5dGVzQmFzZTY0OiBwYXJhbXMuc2lnbkJ5dGVzQmFzZTY0LFxuICAgICAgICAgICAgcHVibGljS2V5SGV4OiBwYXJhbXMucHVibGljS2V5SGV4LFxuICAgICAgICB9KTtcbiAgICAgICAgbWVzc2FnZS5leHBpcmUgPSBwYXJhbXMudW5zaWduZWRNZXNzYWdlLnNpZ25QYXJhbXMuZXhwaXJlO1xuICAgICAgICByZXR1cm4ge1xuICAgICAgICAgICAgYWRkcmVzczogcGFyYW1zLnVuc2lnbmVkTWVzc2FnZS5hZGRyZXNzLFxuICAgICAgICAgICAgbWVzc2FnZSxcbiAgICAgICAgfTtcbiAgICB9XG5cblxuICAgIGFzeW5jIGNyZWF0ZVNpZ25lZFJ1bk1lc3NhZ2UoXG4gICAgICAgIHBhcmFtczogVE9OQ29udHJhY3RDcmVhdGVTaWduZWRSdW5NZXNzYWdlUGFyYW1zLFxuICAgICk6IFByb21pc2U8VE9OQ29udHJhY3RSdW5NZXNzYWdlPiB7XG4gICAgICAgIGNvbnN0IG1lc3NhZ2UgPSBhd2FpdCB0aGlzLmNyZWF0ZVNpZ25lZE1lc3NhZ2Uoe1xuICAgICAgICAgICAgYWJpOiBwYXJhbXMudW5zaWduZWRNZXNzYWdlLnNpZ25QYXJhbXMuYWJpLFxuICAgICAgICAgICAgdW5zaWduZWRCeXRlc0Jhc2U2NDogcGFyYW1zLnVuc2lnbmVkTWVzc2FnZS5zaWduUGFyYW1zLnVuc2lnbmVkQnl0ZXNCYXNlNjQsXG4gICAgICAgICAgICBzaWduQnl0ZXNCYXNlNjQ6IHBhcmFtcy5zaWduQnl0ZXNCYXNlNjQsXG4gICAgICAgICAgICBwdWJsaWNLZXlIZXg6IHBhcmFtcy5wdWJsaWNLZXlIZXgsXG4gICAgICAgIH0pO1xuICAgICAgICBtZXNzYWdlLmV4cGlyZSA9IHBhcmFtcy51bnNpZ25lZE1lc3NhZ2Uuc2lnblBhcmFtcy5leHBpcmU7XG4gICAgICAgIHJldHVybiB7XG4gICAgICAgICAgICBhZGRyZXNzOiBwYXJhbXMudW5zaWduZWRNZXNzYWdlLmFkZHJlc3MsXG4gICAgICAgICAgICBhYmk6IHBhcmFtcy51bnNpZ25lZE1lc3NhZ2Uuc2lnblBhcmFtcy5hYmksXG4gICAgICAgICAgICBmdW5jdGlvbk5hbWU6IHBhcmFtcy51bnNpZ25lZE1lc3NhZ2UuZnVuY3Rpb25OYW1lLFxuICAgICAgICAgICAgbWVzc2FnZSxcbiAgICAgICAgfTtcbiAgICB9XG5cbiAgICBhc3luYyBnZXRDb2RlRnJvbUltYWdlKFxuICAgICAgICBwYXJhbXM6IFRPTkNvbnRyYWN0R2V0Q29kZUZyb21JbWFnZVBhcmFtcyxcbiAgICApOiBQcm9taXNlPFRPTkNvbnRyYWN0R2V0Q29kZUZyb21JbWFnZVJlc3VsdD4ge1xuICAgICAgICByZXR1cm4gdGhpcy5yZXF1ZXN0Q29yZSgnY29udHJhY3RzLmltYWdlLmNvZGUnLCBwYXJhbXMpO1xuICAgIH1cblxuICAgIGFzeW5jIGdldERlcGxveURhdGEoXG4gICAgICAgIHBhcmFtczogVE9OQ29udHJhY3RHZXREZXBsb3lEYXRhUGFyYW1zLFxuICAgICk6IFByb21pc2U8VE9OQ29udHJhY3RHZXREZXBsb3lEYXRhUmVzdWx0PiB7XG4gICAgICAgIHJldHVybiB0aGlzLnJlcXVlc3RDb3JlKCdjb250cmFjdHMuZGVwbG95LmRhdGEnLCBwYXJhbXMpO1xuICAgIH1cblxuICAgIGFzeW5jIGNyZWF0ZVJ1bkJvZHkoXG4gICAgICAgIHBhcmFtczogVE9OQ29udHJhY3RDcmVhdGVSdW5Cb2R5UGFyYW1zLFxuICAgICk6IFByb21pc2U8VE9OQ29udHJhY3RDcmVhdGVSdW5Cb2R5UmVzdWx0PiB7XG4gICAgICAgIHJldHVybiB0aGlzLnJlcXVlc3RDb3JlKCdjb250cmFjdHMucnVuLmJvZHknLCBwYXJhbXMpO1xuICAgIH1cblxuICAgIGFzeW5jIGdldEZ1bmN0aW9uSWQoXG4gICAgICAgIHBhcmFtczogVE9OQ29udHJhY3RHZXRGdW5jdGlvbklkUGFyYW1zLFxuICAgICk6IFByb21pc2U8VE9OQ29udHJhY3RHZXRGdW5jdGlvbklkUmVzdWx0PiB7XG4gICAgICAgIHJldHVybiB0aGlzLnJlcXVlc3RDb3JlKCdjb250cmFjdHMuZnVuY3Rpb24uaWQnLCBwYXJhbXMpO1xuICAgIH1cblxuICAgIGFzeW5jIGdldEJvY0hhc2goXG4gICAgICAgIHBhcmFtczogVE9OQ29udHJhY3RCb2MsXG4gICAgKTogUHJvbWlzZTxUT05Db250cmFjdEdldEJvY0hhc2hSZXN1bHQ+IHtcbiAgICAgICAgcmV0dXJuIHRoaXMucmVxdWVzdENvcmUoJ2NvbnRyYWN0cy5ib2MuaGFzaCcsIHBhcmFtcyk7XG4gICAgfVxuXG4gICAgYXN5bmMgcGFyc2VNZXNzYWdlKFxuICAgICAgICBwYXJhbXM6IFRPTkNvbnRyYWN0Qm9jLFxuICAgICk6IFByb21pc2U8UU1lc3NhZ2U+IHtcbiAgICAgICAgcmV0dXJuIHRoaXMucmVxdWVzdENvcmUoJ2NvbnRyYWN0cy5wYXJzZS5tZXNzYWdlJywgcGFyYW1zKTtcbiAgICB9XG5cbiAgICAvLyBNZXNzYWdlIHBhcnNpbmdcblxuICAgIGFzeW5jIGRlY29kZVJ1bk91dHB1dChcbiAgICAgICAgcGFyYW1zOiBUT05Db250cmFjdERlY29kZVJ1bk91dHB1dFBhcmFtcyxcbiAgICApOiBQcm9taXNlPFRPTkNvbnRyYWN0UnVuUmVzdWx0PiB7XG4gICAgICAgIHJldHVybiB0aGlzLnJlcXVlc3RDb3JlKCdjb250cmFjdHMucnVuLm91dHB1dCcsIHBhcmFtcyk7XG4gICAgfVxuXG5cbiAgICBhc3luYyBkZWNvZGVJbnB1dE1lc3NhZ2VCb2R5KFxuICAgICAgICBwYXJhbXM6IFRPTkNvbnRyYWN0RGVjb2RlTWVzc2FnZUJvZHlQYXJhbXMsXG4gICAgKTogUHJvbWlzZTxUT05Db250cmFjdERlY29kZU1lc3NhZ2VCb2R5UmVzdWx0PiB7XG4gICAgICAgIHJldHVybiB0aGlzLnJlcXVlc3RDb3JlKCdjb250cmFjdHMucnVuLnVua25vd24uaW5wdXQnLCBwYXJhbXMpO1xuICAgIH1cblxuXG4gICAgYXN5bmMgZGVjb2RlT3V0cHV0TWVzc2FnZUJvZHkoXG4gICAgICAgIHBhcmFtczogVE9OQ29udHJhY3REZWNvZGVNZXNzYWdlQm9keVBhcmFtcyxcbiAgICApOiBQcm9taXNlPFRPTkNvbnRyYWN0RGVjb2RlTWVzc2FnZUJvZHlSZXN1bHQ+IHtcbiAgICAgICAgcmV0dXJuIHRoaXMucmVxdWVzdENvcmUoJ2NvbnRyYWN0cy5ydW4udW5rbm93bi5vdXRwdXQnLCBwYXJhbXMpO1xuICAgIH1cblxuICAgIC8vIE1lc3NhZ2UgcHJvY2Vzc2luZ1xuXG4gICAgYXN5bmMgZW5zdXJlTWVzc2FnZUlkKG1lc3NhZ2U6IFRPTkNvbnRyYWN0TWVzc2FnZSk6IFByb21pc2U8c3RyaW5nPiB7XG4gICAgICAgIHJldHVybiBtZXNzYWdlLm1lc3NhZ2VJZCB8fCBhd2FpdCAoYXN5bmMgKCkgPT4ge1xuICAgICAgICAgICAgY29uc3QgaWQgPSAoYXdhaXQgdGhpcy5nZXRCb2NIYXNoKHtcbiAgICAgICAgICAgICAgICBib2NCYXNlNjQ6IG1lc3NhZ2UubWVzc2FnZUJvZHlCYXNlNjQsXG4gICAgICAgICAgICB9KSkuaGFzaDtcbiAgICAgICAgICAgIG1lc3NhZ2UubWVzc2FnZUlkID0gaWQ7XG4gICAgICAgICAgICByZXR1cm4gaWQ7XG4gICAgICAgIH0pKCk7XG4gICAgfVxuXG4gICAgYXN5bmMgc2VuZE1lc3NhZ2UoXG4gICAgICAgIHBhcmFtczogVE9OQ29udHJhY3RNZXNzYWdlLFxuICAgICAgICBwYXJlbnRTcGFuPzogKFNwYW4gfCBTcGFuQ29udGV4dCksXG4gICAgKTogUHJvbWlzZTxUT05NZXNzYWdlUHJvY2Vzc2luZ1N0YXRlPiB7XG4gICAgICAgIGNvbnN0IGV4cGlyZSA9IHBhcmFtcy5leHBpcmU7XG4gICAgICAgIGlmIChleHBpcmUgJiYgKERhdGUubm93KCkgPiBleHBpcmUgKiAxMDAwKSkge1xuICAgICAgICAgICAgdGhyb3cgVE9OQ2xpZW50RXJyb3Iuc2VuZE5vZGVSZXF1ZXN0RmFpbGVkKFxuICAgICAgICAgICAgICAgICdNZXNzYWdlIGFscmVhZHkgZXhwaXJlZCcsXG4gICAgICAgICAgICAgICAgYXdhaXQgdGhpcy5jb21wbGV0ZUVycm9yRGF0YSh7XG4gICAgICAgICAgICAgICAgICAgIGFkZHJlc3M6IHBhcmFtcy5hZGRyZXNzLFxuICAgICAgICAgICAgICAgICAgICBtZXNzYWdlX2lkOiBwYXJhbXMubWVzc2FnZUlkLFxuICAgICAgICAgICAgICAgIH0pLFxuICAgICAgICAgICAgKTtcbiAgICAgICAgfVxuICAgICAgICBjb25zdCBzZXJ2ZXJUaW1lRGVsdGEgPSBNYXRoLmFicyhhd2FpdCB0aGlzLnF1ZXJpZXMuc2VydmVyVGltZURlbHRhKHBhcmVudFNwYW4pKTtcbiAgICAgICAgaWYgKHNlcnZlclRpbWVEZWx0YSA+IHRoaXMuY29uZmlnLm91dE9mU3luY1RocmVzaG9sZCgpKSB7XG4gICAgICAgICAgICB0aGlzLnF1ZXJpZXMuZHJvcFNlcnZlclRpbWVEZWx0YSgpO1xuICAgICAgICAgICAgdGhyb3cgVE9OQ2xpZW50RXJyb3IuY2xvY2tPdXRPZlN5bmMoYXdhaXQgdGhpcy5jb21wbGV0ZUVycm9yRGF0YSgpKTtcbiAgICAgICAgfVxuICAgICAgICBjb25zdCBsYXN0QmxvY2tJZCA9IGF3YWl0IHRoaXMuZmluZExhc3RTaGFyZEJsb2NrKHBhcmFtcy5hZGRyZXNzKTtcbiAgICAgICAgY29uc3QgaWQgPSBhd2FpdCB0aGlzLmVuc3VyZU1lc3NhZ2VJZChwYXJhbXMpO1xuICAgICAgICBjb25zdCBpZEJhc2U2NCA9IEJ1ZmZlci5mcm9tKGlkLCAnaGV4JykudG9TdHJpbmcoJ2Jhc2U2NCcpO1xuICAgICAgICBjb25zdCBtZXNzYWdlU3BhbiA9IHRoaXMuY29udGV4dC5zdGFydFJvb3RTcGFuKFxuICAgICAgICAgICAgaWQuc3Vic3RyKDAsIDE2KSxcbiAgICAgICAgICAgIGlkLnN1YnN0cigxNiwgMTYpLFxuICAgICAgICAgICAgJ21lc3NhZ2VQcm9jZXNzaW5nJyxcbiAgICAgICAgKTtcbiAgICAgICAgbWVzc2FnZVNwYW4uYWRkVGFncyh7XG4gICAgICAgICAgICBtZXNzYWdlSWQ6IGlkLFxuICAgICAgICAgICAgbWVzc2FnZVNpemU6IE1hdGguY2VpbChwYXJhbXMubWVzc2FnZUJvZHlCYXNlNjQubGVuZ3RoICogMyAvIDQpLFxuICAgICAgICAgICAgYWRkcmVzczogcGFyYW1zLmFkZHJlc3MsXG4gICAgICAgICAgICBleHBpcmU6IHBhcmFtcy5leHBpcmUsXG4gICAgICAgIH0pO1xuICAgICAgICBhd2FpdCB0aGlzLnF1ZXJpZXMucG9zdFJlcXVlc3RzKFtcbiAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICBpZDogaWRCYXNlNjQsXG4gICAgICAgICAgICAgICAgYm9keTogcGFyYW1zLm1lc3NhZ2VCb2R5QmFzZTY0LFxuICAgICAgICAgICAgfSxcbiAgICAgICAgXSwgcGFyZW50U3Bhbik7XG4gICAgICAgIG1lc3NhZ2VTcGFuLmZpbmlzaCgpO1xuICAgICAgICB0aGlzLmNvbmZpZy5sb2coJ3NlbmRNZXNzYWdlLiBSZXF1ZXN0IHBvc3RlZCcsIGlkKTtcbiAgICAgICAgcmV0dXJuIHtcbiAgICAgICAgICAgIGxhc3RCbG9ja0lkLFxuICAgICAgICAgICAgc2VuZGluZ1RpbWU6IE1hdGgucm91bmQoRGF0ZS5ub3coKSAvIDEwMDApLFxuICAgICAgICB9O1xuICAgIH1cblxuICAgIGFzeW5jIHByb2Nlc3NNZXNzYWdlKFxuICAgICAgICBtZXNzYWdlOiBUT05Db250cmFjdE1lc3NhZ2UsXG4gICAgICAgIHJlc3VsdEZpZWxkczogc3RyaW5nLFxuICAgICAgICBwYXJlbnRTcGFuPzogKFNwYW4gfCBTcGFuQ29udGV4dCksXG4gICAgICAgIHJldHJ5SW5kZXg/OiBudW1iZXIsXG4gICAgICAgIGFkZHJlc3M/OiBzdHJpbmcsXG4gICAgICAgIGFiaT86IFRPTkNvbnRyYWN0QUJJLFxuICAgICAgICBmdW5jdGlvbk5hbWU/OiBzdHJpbmcsXG4gICAgKTogUHJvbWlzZTxRVHJhbnNhY3Rpb24+IHtcbiAgICAgICAgY29uc3QgcHJvY2Vzc2luZyA9IGF3YWl0IHRoaXMuc2VuZE1lc3NhZ2UobWVzc2FnZSwgcGFyZW50U3Bhbik7XG4gICAgICAgIGNvbnN0IHsgdHJhbnNhY3Rpb24gfSA9IGF3YWl0IHRoaXMud2FpdEZvclRyYW5zYWN0aW9uKHtcbiAgICAgICAgICAgIG1lc3NhZ2UsXG4gICAgICAgICAgICBtZXNzYWdlUHJvY2Vzc2luZ1N0YXRlOiBwcm9jZXNzaW5nLFxuICAgICAgICAgICAgcGFyZW50U3BhbixcbiAgICAgICAgICAgIGFiaSxcbiAgICAgICAgICAgIGZ1bmN0aW9uTmFtZSxcbiAgICAgICAgfSk7XG4gICAgICAgIHJldHVybiB0cmFuc2FjdGlvbjtcbiAgICB9XG5cblxuICAgIGFzeW5jIGZpbmRMYXN0QmxvY2soY2hhaW46IG51bWJlciwgcmVzdWx0OiBzdHJpbmcsIGFkZGl0aW9uYWxGaWx0ZXI/OiBhbnkpOiBQcm9taXNlPD9hbnk+IHtcbiAgICAgICAgY29uc3QgYmxvY2tzID0gYXdhaXQgdGhpcy5xdWVyaWVzLmJsb2Nrcy5xdWVyeSh7XG4gICAgICAgICAgICBmaWx0ZXI6IHsgd29ya2NoYWluX2lkOiB7IGVxOiBjaGFpbiB9LCAuLi4oYWRkaXRpb25hbEZpbHRlciB8fCB7fSkgfSxcbiAgICAgICAgICAgIHJlc3VsdCxcbiAgICAgICAgICAgIG9yZGVyQnk6IFtcbiAgICAgICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgICAgIHBhdGg6ICdzZXFfbm8nLFxuICAgICAgICAgICAgICAgICAgICBkaXJlY3Rpb246ICdERVNDJyxcbiAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgXSxcbiAgICAgICAgICAgIGxpbWl0OiAxLFxuICAgICAgICB9KTtcbiAgICAgICAgcmV0dXJuIGJsb2Nrcy5sZW5ndGggPiAwID8gYmxvY2tzWzBdIDogbnVsbDtcbiAgICB9XG5cbiAgICBhc3luYyBmaW5kTWF0Y2hpbmdTaGFyZChzaGFyZHM6IFFTaGFyZEhhc2hbXSwgYWRkcmVzczogc3RyaW5nKTogUHJvbWlzZTw/UVNoYXJkSGFzaD4ge1xuICAgICAgICByZXR1cm4gdGhpcy5yZXF1ZXN0Q29yZSgnY29udHJhY3RzLmZpbmQuc2hhcmQnLCB7XG4gICAgICAgICAgICBzaGFyZHMsXG4gICAgICAgICAgICBhZGRyZXNzLFxuICAgICAgICB9KTtcbiAgICB9XG5cbiAgICBhc3luYyBmaW5kTGFzdFNoYXJkQmxvY2soYWRkcmVzczogc3RyaW5nKTogUHJvbWlzZTxzdHJpbmc+IHtcbiAgICAgICAgY29uc3QgYWRkcmVzc1BhcnRzID0gYWRkcmVzcy5zcGxpdCgnOicpO1xuICAgICAgICBjb25zdCB3b3JrY2hhaW4gPSBhZGRyZXNzUGFydHMubGVuZ3RoID4gMSA/IE51bWJlci5wYXJzZUludChhZGRyZXNzUGFydHNbMF0sIDEwKSA6IDA7XG5cblxuICAgICAgICAvLyBpZiBhY2NvdW50IHJlc2lkZXMgaW4gbWFzdGVyIGNoYWluIHRoZW4gc3RhcnRpbmcgcG9pbnQgaXMgbGFzdCBtYXN0ZXIgY2hhaW4gYmxvY2tcbiAgICAgICAgLy8gZ2VuZXJhdGVkIGJlZm9yZSBtZXNzYWdlIHdhcyBzZW50XG4gICAgICAgIGNvbnN0IG1hc3RlcmNoYWluTGFzdEJsb2NrID0gYXdhaXQgdGhpcy5maW5kTGFzdEJsb2NrKFxuICAgICAgICAgICAgTUFTVEVSQ0hBSU5fSUQsXG4gICAgICAgICAgICAnaWQgbWFzdGVyIHsgc2hhcmRfaGFzaGVzIHsgd29ya2NoYWluX2lkIHNoYXJkIGRlc2NyIHsgcm9vdF9oYXNoIH0gfSB9JyxcbiAgICAgICAgKTtcblxuICAgICAgICAvLyBpZiBhY2NvdW50IHJlc2lkZXMgaW4gbWFzdGVyY2hhaW4gdGhlbiBzdGFydGluZyBwb2ludCBpcyBsYXN0IG1hc3RlcmNoYWluIGJsb2NrXG4gICAgICAgIGlmICh3b3JrY2hhaW4gPT09IE1BU1RFUkNIQUlOX0lEKSB7XG4gICAgICAgICAgICBpZiAoIW1hc3RlcmNoYWluTGFzdEJsb2NrKSB7XG4gICAgICAgICAgICAgICAgdGhyb3cgVE9OQ2xpZW50RXJyb3Iubm9CbG9ja3MoTUFTVEVSQ0hBSU5fSUQsIGF3YWl0IHRoaXMuY29tcGxldGVFcnJvckRhdGEoe1xuICAgICAgICAgICAgICAgICAgICBhZGRyZXNzLFxuICAgICAgICAgICAgICAgIH0pKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIHJldHVybiBtYXN0ZXJjaGFpbkxhc3RCbG9jay5pZDtcbiAgICAgICAgfVxuXG4gICAgICAgIC8vIGlmIGFjY291bnQgaXMgZnJvbSBvdGhlciBjaGFpbnMgdGhlbiBzdGFydGluZyBwb2ludCBpcyBsYXN0IGFjY291bnQncyBzaGFyZCBibG9ja1xuICAgICAgICAvLyBUbyBvYnRhaW4gaXQgd2UgdGFrZSBtYXN0ZXJjaGFpbiBibG9jayB0byBnZXQgc2hhcmRzIGNvbmZpZ3VyYXRpb24gYW5kIHNlbGVjdFxuICAgICAgICAvLyBtYXRjaGluZyBzaGFyZFxuICAgICAgICBpZiAoIW1hc3RlcmNoYWluTGFzdEJsb2NrKSB7XG4gICAgICAgICAgICAvLyBOb2RlIFNFIGNhc2UgLSBubyBtYXN0ZXJjaGFpbiwgbm8gc2hhcmRpbmcuIENoZWNrIHRoYXQgb25seSBvbmUgc2hhcmRcbiAgICAgICAgICAgIGxldCB3b3JrY2hhaW5MYXN0QmxvY2sgPSBhd2FpdCB0aGlzLmZpbmRMYXN0QmxvY2sod29ya2NoYWluLCAnYWZ0ZXJfbWVyZ2Ugc2hhcmQnKTtcbiAgICAgICAgICAgIGlmICghd29ya2NoYWluTGFzdEJsb2NrKSB7XG4gICAgICAgICAgICAgICAgdGhyb3cgVE9OQ2xpZW50RXJyb3Iubm9CbG9ja3Mod29ya2NoYWluLCBhd2FpdCB0aGlzLmNvbXBsZXRlRXJyb3JEYXRhKHtcbiAgICAgICAgICAgICAgICAgICAgYWRkcmVzcyxcbiAgICAgICAgICAgICAgICB9KSk7XG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICAgIC8vIGlmIHdvcmtjaGFpbiBpcyBzaGFyZGVkIHRoZW4gaXQgaXMgbm90IE5vZGUgU0UgYW5kIG1hc3RlcmNoYWluIGJsb2NrcyBtaXNzaW5nXG4gICAgICAgICAgICAvLyBpcyBlcnJvclxuICAgICAgICAgICAgaWYgKHdvcmtjaGFpbkxhc3RCbG9jay5hZnRlcl9tZXJnZSB8fCB3b3JrY2hhaW5MYXN0QmxvY2suc2hhcmQgIT09ICc4MDAwMDAwMDAwMDAwMDAwJykge1xuICAgICAgICAgICAgICAgIHRocm93IFRPTkNsaWVudEVycm9yLm5vQmxvY2tzKE1BU1RFUkNIQUlOX0lELCBhd2FpdCB0aGlzLmNvbXBsZXRlRXJyb3JEYXRhKHtcbiAgICAgICAgICAgICAgICAgICAgYWRkcmVzcyxcbiAgICAgICAgICAgICAgICB9KSk7XG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICAgIC8vIFRha2UgbGFzdCBibG9jayBieSBzZXFfbm9cbiAgICAgICAgICAgIHdvcmtjaGFpbkxhc3RCbG9jayA9IGF3YWl0IHRoaXMuZmluZExhc3RCbG9jayh3b3JrY2hhaW4sICdpZCcsIHtcbiAgICAgICAgICAgICAgICBzaGFyZDogeyBlcTogJzgwMDAwMDAwMDAwMDAwMDAnIH0sXG4gICAgICAgICAgICB9KTtcbiAgICAgICAgICAgIGlmICghd29ya2NoYWluTGFzdEJsb2NrKSB7XG4gICAgICAgICAgICAgICAgdGhyb3cgVE9OQ2xpZW50RXJyb3IuaW52YWxpZEJsb2NrY2hhaW4oXG4gICAgICAgICAgICAgICAgICAgICdObyBzdGFydGluZyBOb2RlIFNFIGJsb2NrIGZvdW5kJyxcbiAgICAgICAgICAgICAgICAgICAgYXdhaXQgdGhpcy5jb21wbGV0ZUVycm9yRGF0YSh7XG4gICAgICAgICAgICAgICAgICAgICAgICBhZGRyZXNzLFxuICAgICAgICAgICAgICAgICAgICB9KSxcbiAgICAgICAgICAgICAgICApO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgcmV0dXJuIHdvcmtjaGFpbkxhc3RCbG9jay5pZDtcbiAgICAgICAgfVxuXG4gICAgICAgIGNvbnN0IHNoYXJkczogP1FTaGFyZEhhc2hbXSA9IG1hc3RlcmNoYWluTGFzdEJsb2NrPy5tYXN0ZXI/LnNoYXJkX2hhc2hlcztcbiAgICAgICAgaWYgKCFzaGFyZHMgfHwgc2hhcmRzLmxlbmd0aCA9PT0gMCkge1xuICAgICAgICAgICAgdGhyb3cgVE9OQ2xpZW50RXJyb3IuaW52YWxpZEJsb2NrY2hhaW4oXG4gICAgICAgICAgICAgICAgJ05vIGBzaGFyZF9oYXNoZXNgIGZpZWxkIGluIG1hc3RlcmNoYWluIGJsb2NrJyxcbiAgICAgICAgICAgICAgICBhd2FpdCB0aGlzLmNvbXBsZXRlRXJyb3JEYXRhKHtcbiAgICAgICAgICAgICAgICAgICAgYWRkcmVzcyxcbiAgICAgICAgICAgICAgICB9KSxcbiAgICAgICAgICAgICk7XG4gICAgICAgIH1cbiAgICAgICAgY29uc3Qgc2hhcmRCbG9jayA9IGF3YWl0IHRoaXMuZmluZE1hdGNoaW5nU2hhcmQoc2hhcmRzLCBhZGRyZXNzKTtcbiAgICAgICAgY29uc3Qgcm9vdF9oYXNoID0gc2hhcmRCbG9jaz8uZGVzY3I/LnJvb3RfaGFzaDtcbiAgICAgICAgaWYgKCFyb290X2hhc2gpIHtcbiAgICAgICAgICAgIHRocm93IFRPTkNsaWVudEVycm9yLmludmFsaWRCbG9ja2NoYWluKFxuICAgICAgICAgICAgICAgICdObyBgcm9vdF9oYXNoYCBmaWVsZCBpbiBzaGFyZCBkZXNjcicsXG4gICAgICAgICAgICAgICAgYXdhaXQgdGhpcy5jb21wbGV0ZUVycm9yRGF0YSh7XG4gICAgICAgICAgICAgICAgICAgIGFkZHJlc3MsXG4gICAgICAgICAgICAgICAgfSksXG4gICAgICAgICAgICApO1xuICAgICAgICB9XG4gICAgICAgIHJldHVybiByb290X2hhc2g7XG4gICAgfVxuXG4gICAgYXN5bmMgY2hlY2tTaGFyZE1hdGNoKGJsb2NrOiBRQmxvY2ssIGFkZHJlc3M6IHN0cmluZyk6IFByb21pc2U8Ym9vbGVhbj4ge1xuICAgICAgICByZXR1cm4gISEoYXdhaXQgdGhpcy5maW5kTWF0Y2hpbmdTaGFyZChbXG4gICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgd29ya2NoYWluX2lkOiBibG9jay53b3JrY2hhaW5faWQgfHwgMCxcbiAgICAgICAgICAgICAgICBzaGFyZDogYmxvY2suc2hhcmQgfHwgJycsXG4gICAgICAgICAgICB9LFxuICAgICAgICBdLCBhZGRyZXNzKSk7XG4gICAgfVxuXG4gICAgYXN5bmMgd2FpdE5leHRCbG9jayhjdXJyZW50OiBzdHJpbmcsIGFkZHJlc3M6IHN0cmluZywgdGltZW91dD86IG51bWJlcik6IFByb21pc2U8UUJsb2NrPiB7XG4gICAgICAgIGNvbnN0IGJsb2NrID0gYXdhaXQgdGhpcy5xdWVyaWVzLmJsb2Nrcy53YWl0Rm9yKHtcbiAgICAgICAgICAgIGZpbHRlcjoge1xuICAgICAgICAgICAgICAgIHByZXZfcmVmOiB7XG4gICAgICAgICAgICAgICAgICAgIHJvb3RfaGFzaDogeyBlcTogY3VycmVudCB9LFxuICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgT1I6IHtcbiAgICAgICAgICAgICAgICAgICAgcHJldl9hbHRfcmVmOiB7XG4gICAgICAgICAgICAgICAgICAgICAgICByb290X2hhc2g6IHsgZXE6IGN1cnJlbnQgfSxcbiAgICAgICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgfSxcbiAgICAgICAgICAgIHJlc3VsdDogQkxPQ0tfRklFTERTLFxuICAgICAgICAgICAgdGltZW91dCxcbiAgICAgICAgfSk7XG5cbiAgICAgICAgaWYgKGJsb2NrPy5hZnRlcl9zcGxpdCAmJiAhKGF3YWl0IHRoaXMuY2hlY2tTaGFyZE1hdGNoKGJsb2NrLCBhZGRyZXNzKSkpIHtcbiAgICAgICAgICAgIHJldHVybiB0aGlzLnF1ZXJpZXMuYmxvY2tzLndhaXRGb3Ioe1xuICAgICAgICAgICAgICAgIGZpbHRlcjoge1xuICAgICAgICAgICAgICAgICAgICBpZDogeyBuZTogYmxvY2suaWQgfSxcbiAgICAgICAgICAgICAgICAgICAgcHJldl9yZWY6IHtcbiAgICAgICAgICAgICAgICAgICAgICAgIHJvb3RfaGFzaDogeyBlcTogY3VycmVudCB9LFxuICAgICAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgcmVzdWx0OiBCTE9DS19GSUVMRFMsXG4gICAgICAgICAgICAgICAgdGltZW91dCxcbiAgICAgICAgICAgIH0pO1xuICAgICAgICB9XG4gICAgICAgIHJldHVybiBibG9jaztcbiAgICB9XG5cbiAgICBhc3luYyB3YWl0Rm9yVHJhbnNhY3Rpb24ocGFyYW1zOiBUT05XYWl0Rm9yVHJhbnNhY3Rpb25QYXJhbXMpOiBQcm9taXNlPFRPTkNvbnRyYWN0UnVuUmVzdWx0PiB7XG4gICAgICAgIGNvbnN0IHRvdGFsU3RhcnQgPSBEYXRlLm5vdygpO1xuICAgICAgICBjb25zdCBleHBpcmUgPSBwYXJhbXMubWVzc2FnZS5leHBpcmUgfHwgMDtcbiAgICAgICAgY29uc3QgbWVzc2FnZUlkID0gYXdhaXQgdGhpcy5lbnN1cmVNZXNzYWdlSWQocGFyYW1zLm1lc3NhZ2UpO1xuICAgICAgICBjb25zdCBhZGRyZXNzID0gcGFyYW1zLm1lc3NhZ2UuYWRkcmVzcztcbiAgICAgICAgY29uc3QgcHJvY2Vzc2luZyA9IHsgLi4ucGFyYW1zLm1lc3NhZ2VQcm9jZXNzaW5nU3RhdGUgfTtcbiAgICAgICAgbGV0IHRyYW5zYWN0aW9uID0gbnVsbDtcbiAgICAgICAgdHJ5IHtcbiAgICAgICAgICAgIGNvbnN0IHRpbWVSZXBvcnQgPSBbXTtcblxuICAgICAgICAgICAgY29uc3Qgc3RvcFRpbWUgPSBleHBpcmVcbiAgICAgICAgICAgICAgICB8fCBNYXRoLnJvdW5kKChEYXRlLm5vdygpICsgdGhpcy5jb25maWcubWVzc2FnZVByb2Nlc3NpbmdUaW1lb3V0KCkpIC8gMTAwMCk7XG5cbiAgICAgICAgICAgIGNvbnN0IGluZmluaXRlV2FpdCA9IHBhcmFtcy5pbmZpbml0ZVdhaXQgIT09IGZhbHNlO1xuICAgICAgICAgICAgY29uc3QgYWRkVGltZW91dCA9IHRoaXMuY29uZmlnLm1lc3NhZ2VQcm9jZXNzaW5nVGltZW91dCgpO1xuICAgICAgICAgICAgd2hpbGUgKCF0cmFuc2FjdGlvbikge1xuICAgICAgICAgICAgICAgIGNvbnN0IG5vdyA9IERhdGUubm93KCk7XG4gICAgICAgICAgICAgICAgY29uc3QgdGltZW91dCA9IE1hdGgubWF4KHN0b3BUaW1lLCBub3cpIC0gbm93ICsgYWRkVGltZW91dDtcbiAgICAgICAgICAgICAgICBsZXQgYmxvY2s6ID9RQmxvY2sgPSBudWxsO1xuICAgICAgICAgICAgICAgIHRyeSB7XG4gICAgICAgICAgICAgICAgICAgIGNvbnN0IHN0YXJ0ID0gRGF0ZS5ub3coKTtcbiAgICAgICAgICAgICAgICAgICAgYmxvY2sgPSBhd2FpdCB0aGlzLndhaXROZXh0QmxvY2socHJvY2Vzc2luZy5sYXN0QmxvY2tJZCwgYWRkcmVzcywgdGltZW91dCk7XG4gICAgICAgICAgICAgICAgICAgIGNvbnN0IGVuZCA9IERhdGUubm93KCk7XG4gICAgICAgICAgICAgICAgICAgIHRpbWVSZXBvcnQucHVzaChcbiAgICAgICAgICAgICAgICAgICAgICAgIGBCbG9jayBbJHtibG9jay5pZCB8fCAnJ31dIGBcbiAgICAgICAgICAgICAgICAgICAgICAgICsgYGhhcyBiZWVuIHJlY2VpdmVkOiAke2VuZCAtIHN0YXJ0fSBtcywgYFxuICAgICAgICAgICAgICAgICAgICAgICAgKyBgY2xpZW50IHRpbWU6ICR7TWF0aC5yb3VuZChlbmQgLyAxMDAwKX0sIGBcbiAgICAgICAgICAgICAgICAgICAgICAgICsgYGdlbl91dGltZTogJHtibG9jay5nZW5fdXRpbWUgfHwgMH1gLFxuICAgICAgICAgICAgICAgICAgICApO1xuICAgICAgICAgICAgICAgIH0gY2F0Y2ggKGVycm9yKSB7XG4gICAgICAgICAgICAgICAgICAgIHRoaXMuY29uZmlnLmxvZygnQmxvY2sgd2FpdGluZyBmYWlsZWQ6ICcsIGVycm9yKTtcbiAgICAgICAgICAgICAgICAgICAgaWYgKCFpbmZpbml0ZVdhaXQpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIGxldCByZXNvbHZlZEVycm9yID0gZXJyb3I7XG4gICAgICAgICAgICAgICAgICAgICAgICBpZiAoZXJyb3IuY29kZSA9PT0gVE9ORXJyb3JDb2RlLldBSVRfRk9SX1RJTUVPVVQpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICByZXNvbHZlZEVycm9yID0gVE9OQ2xpZW50RXJyb3IubmV0d29ya1NpbGVudChcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgYXdhaXQgdGhpcy5jb21wbGV0ZUVycm9yRGF0YSh7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBhZGRyZXNzLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgbWVzc2FnZV9pZDogbWVzc2FnZUlkLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgYmxvY2tfaWQ6IHByb2Nlc3NpbmcubGFzdEJsb2NrSWQsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB0aW1lb3V0LFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgbWVzc2FnZV9wcm9jZXNzaW5nX3N0YXRlOiBwcm9jZXNzaW5nLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgZXhwaXJlLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgc2VuZGluZ190aW1lOiBwcm9jZXNzaW5nLnNlbmRpbmdUaW1lLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9KSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICApO1xuICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgICAgdGhyb3cgcmVzb2x2ZWRFcnJvcjtcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICB0aGlzLmNvbmZpZy5sb2coJ1JldHJ5IHdhaXRpbmcuJyk7XG4gICAgICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICAgICAgaWYgKGJsb2NrKSB7XG4gICAgICAgICAgICAgICAgICAgIHByb2Nlc3NpbmcubGFzdEJsb2NrSWQgPSBibG9jay5pZCB8fCAnJztcblxuICAgICAgICAgICAgICAgICAgICBjb25zdCBpbk1zZyA9IChibG9jay5pbl9tc2dfZGVzY3IgfHwgW10pLmZpbmQoeCA9PiB4Lm1zZ19pZCA9PT0gbWVzc2FnZUlkKTtcbiAgICAgICAgICAgICAgICAgICAgaWYgKGluTXNnKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICBjb25zdCB0cmFuc2FjdGlvbklkID0gaW5Nc2cudHJhbnNhY3Rpb25faWQ7XG4gICAgICAgICAgICAgICAgICAgICAgICBpZiAoIXRyYW5zYWN0aW9uSWQpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB0aHJvdyBUT05DbGllbnRFcnJvci5pbnZhbGlkQmxvY2tjaGFpbihcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgJ05vIGZpZWxkIGB0cmFuc2FjdGlvbl9pZGAgaW4gYmxvY2snLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBhd2FpdCB0aGlzLmNvbXBsZXRlRXJyb3JEYXRhKHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGFkZHJlc3MsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBtZXNzYWdlX2lkOiBtZXNzYWdlSWQsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH0pLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICk7XG4gICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICAgICBjb25zdCB0clN0YXJ0ID0gRGF0ZS5ub3coKTtcbiAgICAgICAgICAgICAgICAgICAgICAgIHRyYW5zYWN0aW9uID0gYXdhaXQgdGhpcy5xdWVyaWVzLnRyYW5zYWN0aW9ucy53YWl0Rm9yKHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBmaWx0ZXI6IHsgaWQ6IHsgZXE6IHRyYW5zYWN0aW9uSWQgfSB9LFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHJlc3VsdDogVFJBTlNBQ1RJT05fRklFTERTX09SRElOQVJZLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRpbWVvdXQ6IE1BWF9USU1FT1VULFxuICAgICAgICAgICAgICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICAgICAgICAgICAgICB0cmFjZU1lc3NhZ2UodGhpcy5jb25maWcudHJhY2VyLCBtZXNzYWdlSWQsICd0cmFuc2FjdGlvblJlY2VpdmVkJywge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRyYW5zYWN0aW9uSWQsXG4gICAgICAgICAgICAgICAgICAgICAgICB9KTtcbiAgICAgICAgICAgICAgICAgICAgICAgIHRpbWVSZXBvcnQucHVzaChgVHJhbnNhY3Rpb24gWyR7dHJhbnNhY3Rpb25JZH1dIGhhcyBiZWVuIHJlY2VpdmVkOiAke0RhdGUubm93KCkgLSB0clN0YXJ0fSBtc2ApO1xuICAgICAgICAgICAgICAgICAgICB9IGVsc2UgaWYgKChibG9jay5nZW5fdXRpbWUgfHwgMCkgPiBzdG9wVGltZSkge1xuICAgICAgICAgICAgICAgICAgICAgICAgaWYgKGV4cGlyZSkge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRyYWNlTWVzc2FnZSh0aGlzLmNvbmZpZy50cmFjZXIsIG1lc3NhZ2VJZCwgJ21lc3NhZ2VFeHBpcmVkJywge30pO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRocm93IFRPTkNsaWVudEVycm9yLm1lc3NhZ2VFeHBpcmVkKFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBhd2FpdCB0aGlzLmNvbXBsZXRlRXJyb3JEYXRhKHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGFkZHJlc3MsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBtZXNzYWdlX2lkOiBtZXNzYWdlSWQsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBzZW5kaW5nX3RpbWU6IHByb2Nlc3Npbmcuc2VuZGluZ1RpbWUsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBleHBpcmU6IHN0b3BUaW1lLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgYmxvY2tfdGltZTogYmxvY2suZ2VuX3V0aW1lLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgYmxvY2tfaWQ6IHByb2Nlc3NpbmcubGFzdEJsb2NrSWQsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH0pLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICk7XG4gICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICAgICB0aHJvdyBUT05DbGllbnRFcnJvci50cmFuc2FjdGlvbldhaXRUaW1lb3V0KFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGF3YWl0IHRoaXMuY29tcGxldGVFcnJvckRhdGEoe1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBhZGRyZXNzLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBtZXNzYWdlX2lkOiBtZXNzYWdlSWQsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHNlbmRpbmdfdGltZTogcHJvY2Vzc2luZy5zZW5kaW5nVGltZSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdGltZW91dCxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgbWVzc2FnZV9wcm9jZXNzaW5nX3N0YXRlOiBwcm9jZXNzaW5nLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIH0pLFxuICAgICAgICAgICAgICAgICAgICAgICAgKTtcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgdGltZVJlcG9ydC5zcGxpY2UoMCwgMCwgYFRyYW5zYWN0aW9uIHdhaXRpbmcgdGltZTogJHtEYXRlLm5vdygpIC0gdG90YWxTdGFydH0gbXNgKTtcbiAgICAgICAgICAgIHRoaXMuY29uZmlnLmxvZyh0aW1lUmVwb3J0LmpvaW4oJ1xcbicpKTtcbiAgICAgICAgfSBjYXRjaCAoZXJyb3IpIHtcbiAgICAgICAgICAgIHRoaXMuY29uZmlnLmxvZygnW3dhaXRGb3JUcmFuc2FjdGlvbl0nLCAnRkFJTEVEJywgZXJyb3IpO1xuICAgICAgICAgICAgaWYgKGVycm9yLmNvZGUgPT09IFRPTkVycm9yQ29kZS5NRVNTQUdFX0VYUElSRURcbiAgICAgICAgICAgICAgICB8fCBlcnJvci5jb2RlID09PSBUT05FcnJvckNvZGUuVFJBTlNBQ1RJT05fV0FJVF9USU1FT1VUKSB7XG4gICAgICAgICAgICAgICAgdGhyb3cgYXdhaXQgdGhpcy5yZXNvbHZlRGV0YWlsZWRFcnJvcihcbiAgICAgICAgICAgICAgICAgICAgZXJyb3IsXG4gICAgICAgICAgICAgICAgICAgIHBhcmFtcy5tZXNzYWdlLm1lc3NhZ2VCb2R5QmFzZTY0LFxuICAgICAgICAgICAgICAgICAgICBwcm9jZXNzaW5nLnNlbmRpbmdUaW1lLFxuICAgICAgICAgICAgICAgICAgICBhZGRyZXNzLFxuICAgICAgICAgICAgICAgICk7XG4gICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAgIHRocm93IGVycm9yO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG5cbiAgICAgICAgcmV0dXJuIHRoaXMucHJvY2Vzc1RyYW5zYWN0aW9uKFxuICAgICAgICAgICAgYWRkcmVzcyxcbiAgICAgICAgICAgIHRyYW5zYWN0aW9uLFxuICAgICAgICAgICAgcGFyYW1zLmFiaSxcbiAgICAgICAgICAgIHBhcmFtcy5mdW5jdGlvbk5hbWUsXG4gICAgICAgICk7XG4gICAgfVxuXG5cbiAgICBhc3luYyBwcm9jZXNzVHJhbnNhY3Rpb24oXG4gICAgICAgIGFkZHJlc3M6IHN0cmluZyxcbiAgICAgICAgdHJhbnNhY3Rpb246IFFUcmFuc2FjdGlvbixcbiAgICAgICAgYWJpOiA/VE9OQ29udHJhY3RBQkksXG4gICAgICAgIGZ1bmN0aW9uTmFtZTogP3N0cmluZyxcbiAgICApOiBQcm9taXNlPFRPTkNvbnRyYWN0UnVuUmVzdWx0PiB7XG4gICAgICAgIHRyeSB7XG4gICAgICAgICAgICBjb25zdCByZXN1bHQgPSBhd2FpdCB0aGlzLnJlcXVlc3RDb3JlKCdjb250cmFjdHMucHJvY2Vzcy50cmFuc2FjdGlvbicsIHtcbiAgICAgICAgICAgICAgICB0cmFuc2FjdGlvbixcbiAgICAgICAgICAgICAgICBhYmksXG4gICAgICAgICAgICAgICAgZnVuY3Rpb25OYW1lLFxuICAgICAgICAgICAgICAgIGFkZHJlc3MsXG4gICAgICAgICAgICB9KTtcbiAgICAgICAgICAgIHJldHVybiB7XG4gICAgICAgICAgICAgICAgdHJhbnNhY3Rpb24sXG4gICAgICAgICAgICAgICAgLi4ucmVzdWx0LFxuICAgICAgICAgICAgfTtcbiAgICAgICAgfSBjYXRjaCAoZXJyb3IpIHtcbiAgICAgICAgICAgIGNvbnN0IGFjY291bnRzID0gYXdhaXQgdGhpcy5xdWVyaWVzLmFjY291bnRzLnF1ZXJ5KHtcbiAgICAgICAgICAgICAgICBmaWx0ZXI6IHsgaWQ6IHsgZXE6IGFkZHJlc3MgfSB9LFxuICAgICAgICAgICAgICAgIHJlc3VsdDogJ2FjY190eXBlIGJhbGFuY2UnLFxuICAgICAgICAgICAgICAgIHRpbWVvdXQ6IDEwMDAsXG4gICAgICAgICAgICB9KTtcbiAgICAgICAgICAgIGlmIChhY2NvdW50cy5sZW5ndGggPT09IDApIHtcbiAgICAgICAgICAgICAgICB0aHJvdyBUT05DbGllbnRFcnJvci5hY2NvdW50TWlzc2luZyhcbiAgICAgICAgICAgICAgICAgICAgYWRkcmVzcyxcbiAgICAgICAgICAgICAgICAgICAgYXdhaXQgdGhpcy5jb21wbGV0ZUVycm9yRGF0YSh7XG4gICAgICAgICAgICAgICAgICAgICAgICBvcmlnaW5hbF9lcnJvcjogZXJyb3IsXG4gICAgICAgICAgICAgICAgICAgICAgICBhZGRyZXNzLFxuICAgICAgICAgICAgICAgICAgICAgICAgZnVuY3Rpb25fbmFtZTogZnVuY3Rpb25OYW1lLFxuICAgICAgICAgICAgICAgICAgICB9KSxcbiAgICAgICAgICAgICAgICApO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgdGhyb3cgZXJyb3I7XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICBhc3luYyByZXNvbHZlRGV0YWlsZWRFcnJvcihcbiAgICAgICAgZXJyb3I6IEVycm9yLFxuICAgICAgICBtZXNzYWdlQmFzZTY0OiBzdHJpbmcsXG4gICAgICAgIHRpbWU6IG51bWJlcixcbiAgICAgICAgYWRkcmVzczogc3RyaW5nLFxuICAgICkge1xuICAgICAgICBjb25zdCBhY2NvdW50cyA9IGF3YWl0IHRoaXMucXVlcmllcy5hY2NvdW50cy5xdWVyeSh7XG4gICAgICAgICAgICBmaWx0ZXI6IHsgaWQ6IHsgZXE6IGFkZHJlc3MgfSB9LFxuICAgICAgICAgICAgcmVzdWx0OiAnaWQgYWNjX3R5cGUgYmFsYW5jZSBiYWxhbmNlX290aGVyIHsgY3VycmVuY3kgdmFsdWUgfSBib2MgY29kZV9oYXNoIGRhdGFfaGFzaCBsYXN0X3BhaWQnLFxuICAgICAgICAgICAgdGltZW91dDogMTAwMCxcbiAgICAgICAgfSk7XG4gICAgICAgIGlmIChhY2NvdW50cy5sZW5ndGggPT09IDApIHtcbiAgICAgICAgICAgIHJldHVybiBUT05DbGllbnRFcnJvci5hY2NvdW50TWlzc2luZyhcbiAgICAgICAgICAgICAgICBhZGRyZXNzLFxuICAgICAgICAgICAgICAgIGF3YWl0IHRoaXMuY29tcGxldGVFcnJvckRhdGEoe1xuICAgICAgICAgICAgICAgICAgICBhZGRyZXNzLFxuICAgICAgICAgICAgICAgICAgICBvcmlnaW5hbF9lcnJvcjogZXJyb3IsXG4gICAgICAgICAgICAgICAgfSksXG4gICAgICAgICAgICApO1xuICAgICAgICB9XG4gICAgICAgIGNvbnN0IGFjY291bnQgPSBhY2NvdW50c1swXTtcbiAgICAgICAgcmVtb3ZlVHlwZU5hbWUoYWNjb3VudCk7XG4gICAgICAgIHRyeSB7XG4gICAgICAgICAgICBhd2FpdCB0aGlzLnJlcXVlc3RDb3JlKCdjb250cmFjdHMucmVzb2x2ZS5lcnJvcicsIHtcbiAgICAgICAgICAgICAgICBhZGRyZXNzLFxuICAgICAgICAgICAgICAgIGFjY291bnQsXG4gICAgICAgICAgICAgICAgbWVzc2FnZUJhc2U2NCxcbiAgICAgICAgICAgICAgICB0aW1lLFxuICAgICAgICAgICAgICAgIG1haW5FcnJvcjogZXJyb3IsXG4gICAgICAgICAgICB9KTtcbiAgICAgICAgfSBjYXRjaCAocmVzb2x2ZWQpIHtcbiAgICAgICAgICAgIHJldHVybiByZXNvbHZlZDtcbiAgICAgICAgfVxuICAgICAgICByZXR1cm4gZXJyb3I7XG4gICAgfVxuXG4gICAgYXN5bmMgaXNEZXBsb3llZChhZGRyZXNzOiBzdHJpbmcsIHBhcmVudFNwYW4/OiAoU3BhbiB8IFNwYW5Db250ZXh0KSk6IFByb21pc2U8Ym9vbD4ge1xuICAgICAgICBjb25zdCBhY2NvdW50ID0gYXdhaXQgdGhpcy5xdWVyaWVzLmFjY291bnRzLnF1ZXJ5KHtcbiAgICAgICAgICAgIGZpbHRlcjoge1xuICAgICAgICAgICAgICAgIGlkOiB7IGVxOiBhZGRyZXNzIH0sXG4gICAgICAgICAgICAgICAgYWNjX3R5cGU6IHsgZXE6IFFBY2NvdW50VHlwZS5hY3RpdmUgfSxcbiAgICAgICAgICAgIH0sXG4gICAgICAgICAgICByZXN1bHQ6ICdpZCcsXG4gICAgICAgICAgICBwYXJlbnRTcGFuLFxuICAgICAgICB9KTtcbiAgICAgICAgcmV0dXJuIGFjY291bnQubGVuZ3RoID4gMDtcbiAgICB9XG5cbiAgICBhc3luYyBwcm9jZXNzRGVwbG95TWVzc2FnZShcbiAgICAgICAgbWVzc2FnZTogVE9OQ29udHJhY3REZXBsb3lNZXNzYWdlLFxuICAgICAgICBwYXJlbnRTcGFuPzogKFNwYW4gfCBTcGFuQ29udGV4dCksXG4gICAgICAgIHJldHJ5SW5kZXg/OiBudW1iZXIsXG4gICAgKTogUHJvbWlzZTxUT05Db250cmFjdERlcGxveVJlc3VsdD4ge1xuICAgICAgICB0aGlzLmNvbmZpZy5sb2coJ3Byb2Nlc3NEZXBsb3lNZXNzYWdlJywgbWVzc2FnZSk7XG4gICAgICAgIGlmIChhd2FpdCB0aGlzLmlzRGVwbG95ZWQobWVzc2FnZS5hZGRyZXNzLCBwYXJlbnRTcGFuKSkge1xuICAgICAgICAgICAgcmV0dXJuIHtcbiAgICAgICAgICAgICAgICBhZGRyZXNzOiBtZXNzYWdlLmFkZHJlc3MsXG4gICAgICAgICAgICAgICAgYWxyZWFkeURlcGxveWVkOiB0cnVlLFxuICAgICAgICAgICAgfTtcbiAgICAgICAgfVxuICAgICAgICBjb25zdCBwcm9jZXNzaW5nID0gYXdhaXQgdGhpcy5zZW5kTWVzc2FnZShtZXNzYWdlLm1lc3NhZ2UsIHBhcmVudFNwYW4pO1xuICAgICAgICByZXR1cm4gdGhpcy53YWl0Rm9yRGVwbG95VHJhbnNhY3Rpb24obWVzc2FnZSwgcHJvY2Vzc2luZywgcGFyZW50U3Bhbik7XG4gICAgfVxuXG4gICAgYXN5bmMgd2FpdEZvckRlcGxveVRyYW5zYWN0aW9uKFxuICAgICAgICBkZXBsb3lNZXNzYWdlOiBUT05Db250cmFjdERlcGxveU1lc3NhZ2UsXG4gICAgICAgIG1lc3NhZ2VQcm9jZXNzaW5nU3RhdGU6IFRPTk1lc3NhZ2VQcm9jZXNzaW5nU3RhdGUsXG4gICAgICAgIHBhcmVudFNwYW4/OiAoU3BhbiB8IFNwYW5Db250ZXh0KSxcbiAgICAgICAgaW5maW5pdGVXYWl0PzogYm9vbGVhbixcbiAgICApOiBQcm9taXNlPFRPTkNvbnRyYWN0RGVwbG95UmVzdWx0PiB7XG4gICAgICAgIGNvbnN0IG1lc3NhZ2UgPSBkZXBsb3lNZXNzYWdlLm1lc3NhZ2U7XG4gICAgICAgIGNvbnN0IHJlc3VsdCA9IGF3YWl0IHRoaXMud2FpdEZvclRyYW5zYWN0aW9uKHtcbiAgICAgICAgICAgIG1lc3NhZ2UsXG4gICAgICAgICAgICBtZXNzYWdlUHJvY2Vzc2luZ1N0YXRlLFxuICAgICAgICAgICAgcGFyZW50U3BhbixcbiAgICAgICAgICAgIGluZmluaXRlV2FpdCxcbiAgICAgICAgfSk7XG4gICAgICAgIHJldHVybiB7XG4gICAgICAgICAgICAuLi5yZXN1bHQsXG4gICAgICAgICAgICBhZGRyZXNzOiBtZXNzYWdlLmFkZHJlc3MsXG4gICAgICAgICAgICBhbHJlYWR5RGVwbG95ZWQ6IGZhbHNlLFxuICAgICAgICB9O1xuICAgIH1cblxuXG4gICAgYXN5bmMgcHJvY2Vzc1J1bk1lc3NhZ2UoXG4gICAgICAgIHJ1bk1lc3NhZ2U6IFRPTkNvbnRyYWN0UnVuTWVzc2FnZSxcbiAgICAgICAgcGFyZW50U3Bhbj86IChTcGFuIHwgU3BhbkNvbnRleHQpLFxuICAgICk6IFByb21pc2U8VE9OQ29udHJhY3RSdW5SZXN1bHQ+IHtcbiAgICAgICAgdGhpcy5jb25maWcubG9nKCdwcm9jZXNzUnVuTWVzc2FnZScsIHJ1bk1lc3NhZ2UpO1xuICAgICAgICBjb25zdCBwcm9jZXNzaW5nID0gYXdhaXQgdGhpcy5zZW5kTWVzc2FnZShydW5NZXNzYWdlLm1lc3NhZ2UsIHBhcmVudFNwYW4pO1xuICAgICAgICByZXR1cm4gdGhpcy53YWl0Rm9yUnVuVHJhbnNhY3Rpb24ocnVuTWVzc2FnZSwgcHJvY2Vzc2luZywgcGFyZW50U3Bhbik7XG4gICAgfVxuXG4gICAgYXN5bmMgd2FpdEZvclJ1blRyYW5zYWN0aW9uKFxuICAgICAgICBydW5NZXNzYWdlOiBUT05Db250cmFjdFJ1bk1lc3NhZ2UsXG4gICAgICAgIG1lc3NhZ2VQcm9jZXNzaW5nU3RhdGU6IFRPTk1lc3NhZ2VQcm9jZXNzaW5nU3RhdGUsXG4gICAgICAgIHBhcmVudFNwYW4/OiAoU3BhbiB8IFNwYW5Db250ZXh0KSxcbiAgICAgICAgaW5maW5pdGVXYWl0PzogYm9vbGVhbixcbiAgICApOiBQcm9taXNlPFRPTkNvbnRyYWN0UnVuUmVzdWx0PiB7XG4gICAgICAgIHJldHVybiB0aGlzLndhaXRGb3JUcmFuc2FjdGlvbih7XG4gICAgICAgICAgICBtZXNzYWdlOiBydW5NZXNzYWdlLm1lc3NhZ2UsXG4gICAgICAgICAgICBtZXNzYWdlUHJvY2Vzc2luZ1N0YXRlLFxuICAgICAgICAgICAgcGFyZW50U3BhbixcbiAgICAgICAgICAgIGluZmluaXRlV2FpdCxcbiAgICAgICAgICAgIGFiaTogcnVuTWVzc2FnZS5hYmksXG4gICAgICAgICAgICBmdW5jdGlvbk5hbWU6IHJ1bk1lc3NhZ2UuZnVuY3Rpb25OYW1lLFxuICAgICAgICB9KTtcbiAgICB9XG5cbiAgICAvKipcbiAgICAgKiBEZXByZWNhdGVkLiBVc2UgYHJ1bk1lc3NhZ2VMb2NhbGAgaW5zdGVhZC5cbiAgICAgKiBAcGFyYW0gcGFyYW1zXG4gICAgICogQHBhcmFtIHdhaXRQYXJhbXNcbiAgICAgKiBAcGFyYW0gcGFyZW50U3BhblxuICAgICAqIEByZXR1cm5zIHtQcm9taXNlPHVua25vd24+fVxuICAgICAqL1xuICAgIGFzeW5jIHByb2Nlc3NSdW5NZXNzYWdlTG9jYWwoXG4gICAgICAgIHBhcmFtczogVE9OQ29udHJhY3RSdW5NZXNzYWdlLFxuICAgICAgICB3YWl0UGFyYW1zPzogVE9OQ29udHJhY3RBY2NvdW50V2FpdFBhcmFtcyxcbiAgICAgICAgcGFyZW50U3Bhbj86IChTcGFuIHwgU3BhbkNvbnRleHQpLFxuICAgICk6IFByb21pc2U8VE9OQ29udHJhY3RSdW5SZXN1bHQ+IHtcbiAgICAgICAgdGhpcy5jb25maWcubG9nKCdwcm9jZXNzUnVuTWVzc2FnZUxvY2FsJywgcGFyYW1zKTtcblxuICAgICAgICBjb25zdCBhY2NvdW50ID0gYXdhaXQgdGhpcy5nZXRBY2NvdW50KHBhcmFtcy5hZGRyZXNzLCB0cnVlLCB3YWl0UGFyYW1zLCBwYXJlbnRTcGFuKTtcblxuICAgICAgICByZXR1cm4gdGhpcy5yZXF1ZXN0Q29yZSgnY29udHJhY3RzLnJ1bi5sb2NhbC5tc2cnLCB7XG4gICAgICAgICAgICBhZGRyZXNzOiBwYXJhbXMuYWRkcmVzcyxcbiAgICAgICAgICAgIGFjY291bnQsXG4gICAgICAgICAgICBhYmk6IHBhcmFtcy5hYmksXG4gICAgICAgICAgICBmdW5jdGlvbk5hbWU6IHBhcmFtcy5mdW5jdGlvbk5hbWUsXG4gICAgICAgICAgICBtZXNzYWdlQmFzZTY0OiBwYXJhbXMubWVzc2FnZS5tZXNzYWdlQm9keUJhc2U2NCxcbiAgICAgICAgfSk7XG4gICAgfVxuXG4gICAgLy8gRmVlIGNhbGN1bGF0aW9uXG5cbiAgICBiaWdCYWxhbmNlID0gJzB4MTAwMDAwMDAwMDAwMDAnO1xuXG4gICAgYXN5bmMgY2FsY1J1bkZlZXMoXG4gICAgICAgIHBhcmFtczogVE9OQ29udHJhY3RDYWxjUnVuRmVlUGFyYW1zLFxuICAgICAgICBwYXJlbnRTcGFuPzogKFNwYW4gfCBTcGFuQ29udGV4dCksXG4gICAgKTogUHJvbWlzZTxUT05Db250cmFjdENhbGNGZWVSZXN1bHQ+IHtcbiAgICAgICAgdGhpcy5jb25maWcubG9nKCdjYWxjUnVuRmVlcycsIHBhcmFtcyk7XG5cbiAgICAgICAgY29uc3QgYWNjb3VudCA9IGF3YWl0IHRoaXMuZ2V0QWNjb3VudChwYXJhbXMuYWRkcmVzcywgdHJ1ZSwgcGFyYW1zLndhaXRQYXJhbXMsIHBhcmVudFNwYW4pO1xuXG4gICAgICAgIGlmIChwYXJhbXMuZW11bGF0ZUJhbGFuY2UpIHtcbiAgICAgICAgICAgIGFjY291bnQuYmFsYW5jZSA9IHRoaXMuYmlnQmFsYW5jZTtcbiAgICAgICAgfVxuXG4gICAgICAgIHJldHVybiB0aGlzLnJlcXVlc3RDb3JlKCdjb250cmFjdHMucnVuLmZlZScsIHtcbiAgICAgICAgICAgIGFkZHJlc3M6IHBhcmFtcy5hZGRyZXNzLFxuICAgICAgICAgICAgYWNjb3VudCxcbiAgICAgICAgICAgIGFiaTogcGFyYW1zLmFiaSxcbiAgICAgICAgICAgIGZ1bmN0aW9uTmFtZTogcGFyYW1zLmZ1bmN0aW9uTmFtZSxcbiAgICAgICAgICAgIGlucHV0OiBwYXJhbXMuaW5wdXQsXG4gICAgICAgICAgICBrZXlQYWlyOiBwYXJhbXMua2V5UGFpcixcbiAgICAgICAgfSk7XG4gICAgfVxuXG4gICAgYXN5bmMgY2FsY0RlcGxveUZlZXMoXG4gICAgICAgIHBhcmFtczogVE9OQ29udHJhY3RDYWxjRGVwbG95RmVlUGFyYW1zLFxuICAgICAgICBwYXJlbnRTcGFuPzogKFNwYW4gfCBTcGFuQ29udGV4dCksXG4gICAgKTogUHJvbWlzZTxUT05Db250cmFjdENhbGNGZWVSZXN1bHQ+IHtcbiAgICAgICAgdGhpcy5jb25maWcubG9nKCdjYWxjRGVwbG95RmVlcycsIHBhcmFtcyk7XG5cbiAgICAgICAgY29uc3QgbWVzc2FnZSA9IGF3YWl0IHRoaXMuY3JlYXRlRGVwbG95TWVzc2FnZShwYXJhbXMpO1xuXG4gICAgICAgIHJldHVybiB0aGlzLmNhbGNNc2dQcm9jZXNzRmVlcyh7XG4gICAgICAgICAgICBhZGRyZXNzOiBtZXNzYWdlLmFkZHJlc3MsXG4gICAgICAgICAgICBtZXNzYWdlOiBtZXNzYWdlLm1lc3NhZ2UsXG4gICAgICAgICAgICBlbXVsYXRlQmFsYW5jZTogcGFyYW1zLmVtdWxhdGVCYWxhbmNlLFxuICAgICAgICAgICAgbmV3QWNjb3VudDogcGFyYW1zLm5ld0FjY291bnQsXG4gICAgICAgIH0sIHBhcmVudFNwYW4pO1xuICAgIH1cblxuICAgIGFzeW5jIGNhbGNNc2dQcm9jZXNzRmVlcyhcbiAgICAgICAgcGFyYW1zOiBUT05Db250cmFjdENhbGNNc2dQcm9jZXNzaW5nRmVlc1BhcmFtcyxcbiAgICAgICAgcGFyZW50U3Bhbj86IChTcGFuIHwgU3BhbkNvbnRleHQpLFxuICAgICk6IFByb21pc2U8VE9OQ29udHJhY3RDYWxjRmVlUmVzdWx0PiB7XG4gICAgICAgIHRoaXMuY29uZmlnLmxvZygnY2FsY01zZ1Byb2Nlc3NGZWVzJywgcGFyYW1zKTtcblxuICAgICAgICBsZXQgYWNjb3VudDogUUFjY291bnQgPSB7XG4gICAgICAgICAgICBiYWxhbmNlOiB0aGlzLmJpZ0JhbGFuY2UsXG4gICAgICAgICAgICBpZDogcGFyYW1zLmFkZHJlc3MsXG4gICAgICAgICAgICBsYXN0X3BhaWQ6IE1hdGguZmxvb3IoRGF0ZS5ub3coKSAvIDEwMDApLFxuICAgICAgICB9O1xuXG4gICAgICAgIGlmICghcGFyYW1zLm5ld0FjY291bnQpIHtcbiAgICAgICAgICAgIGFjY291bnQgPSBhd2FpdCB0aGlzLmdldEFjY291bnQocGFyYW1zLmFkZHJlc3MsIGZhbHNlLCBwYXJhbXMud2FpdFBhcmFtcywgcGFyZW50U3Bhbik7XG4gICAgICAgIH1cblxuICAgICAgICBpZiAocGFyYW1zLmVtdWxhdGVCYWxhbmNlKSB7XG4gICAgICAgICAgICBhY2NvdW50LmJhbGFuY2UgPSB0aGlzLmJpZ0JhbGFuY2U7XG4gICAgICAgIH1cblxuICAgICAgICByZXR1cm4gdGhpcy5yZXF1ZXN0Q29yZSgnY29udHJhY3RzLnJ1bi5mZWUubXNnJywge1xuICAgICAgICAgICAgYWRkcmVzczogcGFyYW1zLmFkZHJlc3MsXG4gICAgICAgICAgICBhY2NvdW50LFxuICAgICAgICAgICAgbWVzc2FnZUJhc2U2NDogcGFyYW1zLm1lc3NhZ2UubWVzc2FnZUJvZHlCYXNlNjQsXG4gICAgICAgIH0pO1xuICAgIH1cblxuICAgIC8vIEFkZHJlc3MgcHJvY2Vzc2luZ1xuXG4gICAgYXN5bmMgY29udmVydEFkZHJlc3MoXG4gICAgICAgIHBhcmFtczogVE9OQ29udHJhY3RDb252ZXJ0QWRkcmVzc1BhcmFtcyxcbiAgICApOiBQcm9taXNlPFRPTkNvbnRyYWN0Q29udmVydEFkZHJlc3NSZXN1bHQ+IHtcbiAgICAgICAgcmV0dXJuIHRoaXMucmVxdWVzdENvcmUoJ2NvbnRyYWN0cy5hZGRyZXNzLmNvbnZlcnQnLCBwYXJhbXMpO1xuICAgIH1cblxuICAgIC8vIEludGVybmFsc1xuXG4gICAgYXN5bmMgaW50ZXJuYWxEZXBsb3lOYXRpdmUocGFyYW1zOiBUT05Db250cmFjdERlcGxveVBhcmFtcyk6IFByb21pc2U8VE9OQ29udHJhY3REZXBsb3lSZXN1bHQ+IHtcbiAgICAgICAgcmV0dXJuIHRoaXMucmVxdWVzdENvcmUoJ2NvbnRyYWN0cy5kZXBsb3knLCB7XG4gICAgICAgICAgICBhYmk6IHBhcmFtcy5wYWNrYWdlLmFiaSxcbiAgICAgICAgICAgIGNvbnN0cnVjdG9ySGVhZGVyOiBwYXJhbXMuY29uc3RydWN0b3JIZWFkZXIsXG4gICAgICAgICAgICBjb25zdHJ1Y3RvclBhcmFtczogcGFyYW1zLmNvbnN0cnVjdG9yUGFyYW1zLFxuICAgICAgICAgICAgaW5pdFBhcmFtczogcGFyYW1zLmluaXRQYXJhbXMsXG4gICAgICAgICAgICBpbWFnZUJhc2U2NDogcGFyYW1zLnBhY2thZ2UuaW1hZ2VCYXNlNjQsXG4gICAgICAgICAgICBrZXlQYWlyOiBwYXJhbXMua2V5UGFpcixcbiAgICAgICAgfSk7XG4gICAgfVxuXG5cbiAgICBhc3luYyBpbnRlcm5hbFJ1bk5hdGl2ZShwYXJhbXM6IFRPTkNvbnRyYWN0UnVuUGFyYW1zKTogUHJvbWlzZTxUT05Db250cmFjdFJ1blJlc3VsdD4ge1xuICAgICAgICByZXR1cm4gdGhpcy5yZXF1ZXN0Q29yZSgnY29udHJhY3RzLnJ1bicsIHtcbiAgICAgICAgICAgIGFkZHJlc3M6IHBhcmFtcy5hZGRyZXNzLFxuICAgICAgICAgICAgYWJpOiBwYXJhbXMuYWJpLFxuICAgICAgICAgICAgZnVuY3Rpb25OYW1lOiBwYXJhbXMuZnVuY3Rpb25OYW1lLFxuICAgICAgICAgICAgaGVhZGVyOiBwYXJhbXMuaGVhZGVyLFxuICAgICAgICAgICAgaW5wdXQ6IHBhcmFtcy5pbnB1dCxcbiAgICAgICAgICAgIGtleVBhaXI6IHBhcmFtcy5rZXlQYWlyLFxuICAgICAgICB9KTtcbiAgICB9XG5cblxuICAgIGFzeW5jIHJldHJ5Q2FsbChjYWxsOiAoaW5kZXg6IG51bWJlcikgPT4gUHJvbWlzZTxhbnk+KTogUHJvbWlzZTxhbnk+IHtcbiAgICAgICAgY29uc3QgcmV0cmllc0NvdW50ID0gdGhpcy5jb25maWcubWVzc2FnZVJldHJpZXNDb3VudCgpO1xuICAgICAgICBmb3IgKGxldCBpID0gMDsgaSA8PSByZXRyaWVzQ291bnQ7IGkgKz0gMSkge1xuICAgICAgICAgICAgaWYgKGkgPiAwKSB7XG4gICAgICAgICAgICAgICAgdGhpcy5jb25maWcubG9nKGBSZXRyeSAjJHtpfWApO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgdHJ5IHtcbiAgICAgICAgICAgICAgICByZXR1cm4gYXdhaXQgY2FsbChpKTtcbiAgICAgICAgICAgIH0gY2F0Y2ggKGVycm9yKSB7XG4gICAgICAgICAgICAgICAgLy8gcmV0cnkgaWYgbWVzc2FnZSBleHBpcmVkIG9yIGlmIHJlc29sdmluZyByZXR1cm5lZCB0aGF0IG1lc3NhZ2UgZXhwaXJlZC9yZXBsYXlcbiAgICAgICAgICAgICAgICAvLyBwcm90ZWN0aW9uIGVycm9yIG9yIGlmIHRyYW5zYWN0aW9uIHdpdGggbWVzc2FnZSBleHBpcmVkL3JlcGxheSBwcm90ZWN0aW9uIGVycm9yXG4gICAgICAgICAgICAgICAgLy8gcmV0dXJuZWRcbiAgICAgICAgICAgICAgICBjb25zdCBpc09yaWdpbmFsT3JSZXNvbHZlZCA9IGV4aXRDb2RlID0+IChcbiAgICAgICAgICAgICAgICAgICAgVE9OQ2xpZW50RXJyb3IuaXNPcmlnaW5hbENvbnRyYWN0RXJyb3IoZXJyb3IsIGV4aXRDb2RlKVxuICAgICAgICAgICAgICAgICAgICB8fCBUT05DbGllbnRFcnJvci5pc1Jlc29sdmVkQ29udHJhY3RFcnJvckFmdGVyRXhwaXJlKGVycm9yLCBleGl0Q29kZSlcbiAgICAgICAgICAgICAgICApO1xuICAgICAgICAgICAgICAgIGNvbnN0IHVzZVJldHJ5ID0gZXJyb3IuY29kZSA9PT0gVE9ORXJyb3JDb2RlLk1FU1NBR0VfRVhQSVJFRFxuICAgICAgICAgICAgICAgICAgICB8fCBpc09yaWdpbmFsT3JSZXNvbHZlZChUT05Db250cmFjdEV4aXRDb2RlLlJFUExBWV9QUk9URUNUSU9OKVxuICAgICAgICAgICAgICAgICAgICB8fCBpc09yaWdpbmFsT3JSZXNvbHZlZChUT05Db250cmFjdEV4aXRDb2RlLk1FU1NBR0VfRVhQSVJFRCk7XG4gICAgICAgICAgICAgICAgaWYgKCF1c2VSZXRyeSB8fCBpID09PSByZXRyaWVzQ291bnQpIHtcbiAgICAgICAgICAgICAgICAgICAgdGhyb3cgZXJyb3I7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICAgIHRocm93IFRPTkNsaWVudEVycm9yLmludGVybmFsRXJyb3IoXG4gICAgICAgICAgICAnQWxsIHJldHJ5IGF0dGVtcHRzIGZhaWxlZCcsXG4gICAgICAgICAgICBhd2FpdCB0aGlzLmNvbXBsZXRlRXJyb3JEYXRhKCksXG4gICAgICAgICk7XG4gICAgfVxuXG5cbiAgICBhc3luYyBpbnRlcm5hbERlcGxveUpzKFxuICAgICAgICBwYXJhbXM6IFRPTkNvbnRyYWN0RGVwbG95UGFyYW1zLFxuICAgICAgICBwYXJlbnRTcGFuPzogKFNwYW4gfCBTcGFuQ29udGV4dCksXG4gICAgKTogUHJvbWlzZTxUT05Db250cmFjdERlcGxveVJlc3VsdD4ge1xuICAgICAgICB0aGlzLmNvbmZpZy5sb2coJ0RlcGxveSBzdGFydCcpO1xuICAgICAgICByZXR1cm4gdGhpcy5yZXRyeUNhbGwoYXN5bmMgKHJldHJ5SW5kZXgpID0+IHtcbiAgICAgICAgICAgIGNvbnN0IGRlcGxveU1lc3NhZ2UgPSBhd2FpdCB0aGlzLmNyZWF0ZURlcGxveU1lc3NhZ2UocGFyYW1zLCByZXRyeUluZGV4KTtcbiAgICAgICAgICAgIGlmIChhd2FpdCB0aGlzLmlzRGVwbG95ZWQoZGVwbG95TWVzc2FnZS5hZGRyZXNzLCBwYXJlbnRTcGFuKSkge1xuICAgICAgICAgICAgICAgIHJldHVybiB7XG4gICAgICAgICAgICAgICAgICAgIGFkZHJlc3M6IGRlcGxveU1lc3NhZ2UuYWRkcmVzcyxcbiAgICAgICAgICAgICAgICAgICAgYWxyZWFkeURlcGxveWVkOiB0cnVlLFxuICAgICAgICAgICAgICAgIH07XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBjb25zdCBwcm9jZXNzaW5nID0gYXdhaXQgdGhpcy5zZW5kTWVzc2FnZShkZXBsb3lNZXNzYWdlLm1lc3NhZ2UsIHBhcmVudFNwYW4pO1xuICAgICAgICAgICAgcmV0dXJuIHRoaXMud2FpdEZvckRlcGxveVRyYW5zYWN0aW9uKGRlcGxveU1lc3NhZ2UsIHByb2Nlc3NpbmcsIHBhcmVudFNwYW4pO1xuICAgICAgICB9KTtcbiAgICB9XG5cblxuICAgIGFzeW5jIGludGVybmFsUnVuSnMoXG4gICAgICAgIHBhcmFtczogVE9OQ29udHJhY3RSdW5QYXJhbXMsXG4gICAgICAgIHBhcmVudFNwYW4/OiAoU3BhbiB8IFNwYW5Db250ZXh0KSxcbiAgICApOiBQcm9taXNlPFRPTkNvbnRyYWN0UnVuUmVzdWx0PiB7XG4gICAgICAgIHRoaXMuY29uZmlnLmxvZygnUnVuIHN0YXJ0Jyk7XG4gICAgICAgIHJldHVybiB0aGlzLnJldHJ5Q2FsbChhc3luYyAocmV0cnlJbmRleCkgPT4ge1xuICAgICAgICAgICAgY29uc3QgcnVuTWVzc2FnZSA9IGF3YWl0IHRoaXMuY3JlYXRlUnVuTWVzc2FnZShwYXJhbXMsIHJldHJ5SW5kZXgpO1xuICAgICAgICAgICAgY29uc3QgcHJvY2Vzc2luZyA9IGF3YWl0IHRoaXMuc2VuZE1lc3NhZ2UocnVuTWVzc2FnZS5tZXNzYWdlLCBwYXJlbnRTcGFuKTtcbiAgICAgICAgICAgIHJldHVybiB0aGlzLndhaXRGb3JSdW5UcmFuc2FjdGlvbihydW5NZXNzYWdlLCBwcm9jZXNzaW5nLCBwYXJlbnRTcGFuKTtcbiAgICAgICAgfSk7XG4gICAgfVxuXG5cbiAgICBhc3luYyBnZXRBY2NvdW50KFxuICAgICAgICBhZGRyZXNzOiBzdHJpbmcsXG4gICAgICAgIGFjdGl2ZTogYm9vbGVhbixcbiAgICAgICAgd2FpdFBhcmFtcz86IFRPTkNvbnRyYWN0QWNjb3VudFdhaXRQYXJhbXMsXG4gICAgICAgIHBhcmVudFNwYW4/OiAoU3BhbiB8IFNwYW5Db250ZXh0KSxcbiAgICApOiBQcm9taXNlPFFBY2NvdW50PiB7XG4gICAgICAgIGNvbnN0IGZpbHRlcjogeyBbc3RyaW5nXTogYW55IH0gPSB7XG4gICAgICAgICAgICBpZDogeyBlcTogYWRkcmVzcyB9LFxuICAgICAgICB9O1xuICAgICAgICBpZiAod2FpdFBhcmFtcyAmJiB3YWl0UGFyYW1zLnRyYW5zYWN0aW9uTHQpIHtcbiAgICAgICAgICAgIGZpbHRlci5sYXN0X3RyYW5zX2x0ID0geyBnZTogd2FpdFBhcmFtcy50cmFuc2FjdGlvbkx0IH07XG4gICAgICAgIH1cbiAgICAgICAgaWYgKGFjdGl2ZSkge1xuICAgICAgICAgICAgZmlsdGVyLmFjY190eXBlID0geyBlcTogUUFjY291bnRUeXBlLmFjdGl2ZSB9O1xuICAgICAgICB9XG5cbiAgICAgICAgdGhpcy5jb25maWcubG9nKCdnZXRBY2NvdW50LiBGaWx0ZXInLCBmaWx0ZXIpO1xuICAgICAgICBjb25zdCBhY2NvdW50cyA9IGF3YWl0IHRoaXMucXVlcmllcy5hY2NvdW50cy5xdWVyeSh7XG4gICAgICAgICAgICBmaWx0ZXIsXG4gICAgICAgICAgICByZXN1bHQ6ICdpZCBhY2NfdHlwZSBib2MgY29kZV9oYXNoIGRhdGFfaGFzaCBiYWxhbmNlIGJhbGFuY2Vfb3RoZXIgeyBjdXJyZW5jeSB2YWx1ZSB9IGxhc3RfcGFpZCcsXG4gICAgICAgICAgICAuLi4od2FpdFBhcmFtcyAmJiB3YWl0UGFyYW1zLnRpbWVvdXQgPyB7IHRpbWVvdXQ6IHdhaXRQYXJhbXMudGltZW91dCB9IDoge30pLFxuICAgICAgICAgICAgcGFyZW50U3BhbixcbiAgICAgICAgfSk7XG4gICAgICAgIGlmIChhY2NvdW50cy5sZW5ndGggPT09IDApIHtcbiAgICAgICAgICAgIHRocm93IFRPTkNsaWVudEVycm9yLmFjY291bnRNaXNzaW5nKFxuICAgICAgICAgICAgICAgIGFkZHJlc3MsXG4gICAgICAgICAgICAgICAgYXdhaXQgdGhpcy5jb21wbGV0ZUVycm9yRGF0YSh7XG4gICAgICAgICAgICAgICAgICAgIGFkZHJlc3MsXG4gICAgICAgICAgICAgICAgfSksXG4gICAgICAgICAgICApO1xuICAgICAgICB9XG4gICAgICAgIGNvbnN0IGFjY291bnQgPSBhY2NvdW50c1swXTtcbiAgICAgICAgcmVtb3ZlVHlwZU5hbWUoYWNjb3VudCk7XG4gICAgICAgIHRoaXMuY29uZmlnLmxvZygnZ2V0QWNjb3VudC4gQWNjb3VudCByZWNlaXZlZCcsIGFjY291bnQpO1xuICAgICAgICByZXR1cm4gYWNjb3VudDtcbiAgICB9XG5cbiAgICBhc3luYyBpbnRlcm5hbFJ1bkxvY2FsSnMoXG4gICAgICAgIHBhcmFtczogVE9OQ29udHJhY3RSdW5Mb2NhbFBhcmFtcyxcbiAgICAgICAgcGFyZW50U3Bhbj86IChTcGFuIHwgU3BhbkNvbnRleHQpLFxuICAgICk6IFByb21pc2U8VE9OQ29udHJhY3RSdW5Mb2NhbFJlc3VsdD4ge1xuICAgICAgICBjb25zdCBhZGRyZXNzID0gcGFyYW1zLmFkZHJlc3M7XG4gICAgICAgIGlmICghYWRkcmVzcykge1xuICAgICAgICAgICAgVE9OQ2xpZW50RXJyb3IuYWRkcmVzc1JlcXVpcmVkRm9yUnVuTG9jYWwoXG4gICAgICAgICAgICAgICAgYXdhaXQgdGhpcy5jb21wbGV0ZUVycm9yRGF0YSh7XG4gICAgICAgICAgICAgICAgICAgIGFkZHJlc3MsXG4gICAgICAgICAgICAgICAgICAgIGZ1bmN0aW9uX25hbWU6IHBhcmFtcy5mdW5jdGlvbk5hbWUsXG4gICAgICAgICAgICAgICAgfSksXG4gICAgICAgICAgICApO1xuICAgICAgICB9XG4gICAgICAgIGNvbnN0IGFjY291bnQgPSBwYXJhbXMuYWNjb3VudCB8fCAoYXdhaXQgdGhpcy5nZXRBY2NvdW50KFxuICAgICAgICAgICAgYWRkcmVzcyxcbiAgICAgICAgICAgIGZhbHNlLFxuICAgICAgICAgICAgcGFyYW1zLndhaXRQYXJhbXMsXG4gICAgICAgICAgICBwYXJlbnRTcGFuLFxuICAgICAgICApKTtcbiAgICAgICAgaWYgKCFhY2NvdW50LmNvZGVfaGFzaCkge1xuICAgICAgICAgICAgdGhyb3cgVE9OQ2xpZW50RXJyb3IuYWNjb3VudENvZGVNaXNzaW5nKFxuICAgICAgICAgICAgICAgIGFkZHJlc3MsXG4gICAgICAgICAgICAgICAgKGFjY291bnQ6IGFueSkuYmFsYW5jZSxcbiAgICAgICAgICAgICAgICBhd2FpdCB0aGlzLmNvbXBsZXRlRXJyb3JEYXRhKHtcbiAgICAgICAgICAgICAgICAgICAgYWRkcmVzcyxcbiAgICAgICAgICAgICAgICAgICAgZnVuY3Rpb25fbmFtZTogcGFyYW1zLmZ1bmN0aW9uTmFtZSxcbiAgICAgICAgICAgICAgICB9KSxcbiAgICAgICAgICAgICk7XG4gICAgICAgIH1cbiAgICAgICAgcmV0dXJuIHRoaXMucmVxdWVzdENvcmUoJ2NvbnRyYWN0cy5ydW4ubG9jYWwnLCB7XG4gICAgICAgICAgICBhZGRyZXNzLFxuICAgICAgICAgICAgYWNjb3VudCxcbiAgICAgICAgICAgIGFiaTogcGFyYW1zLmFiaSxcbiAgICAgICAgICAgIGZ1bmN0aW9uTmFtZTogcGFyYW1zLmZ1bmN0aW9uTmFtZSxcbiAgICAgICAgICAgIGlucHV0OiBwYXJhbXMuaW5wdXQsXG4gICAgICAgICAgICBrZXlQYWlyOiBwYXJhbXMua2V5UGFpcixcbiAgICAgICAgICAgIGZ1bGxSdW46IHBhcmFtcy5mdWxsUnVuLFxuICAgICAgICB9KTtcbiAgICB9XG5cbiAgICBhc3luYyBpbnRlcm5hbFJ1bk1lc3NhZ2VMb2NhbEpzKFxuICAgICAgICBwYXJhbXM6IFRPTkNvbnRyYWN0UnVuTWVzc2FnZUxvY2FsUGFyYW1zLFxuICAgICAgICBwYXJlbnRTcGFuPzogKFNwYW4gfCBTcGFuQ29udGV4dCksXG4gICAgKTogUHJvbWlzZTxUT05Db250cmFjdFJ1bkxvY2FsUmVzdWx0PiB7XG4gICAgICAgIGNvbnN0IGFkZHJlc3MgPSBwYXJhbXMuYWRkcmVzcztcbiAgICAgICAgaWYgKCFhZGRyZXNzKSB7XG4gICAgICAgICAgICB0aHJvdyBUT05DbGllbnRFcnJvci5hZGRyZXNzUmVxdWlyZWRGb3JSdW5Mb2NhbChhd2FpdCB0aGlzLmNvbXBsZXRlRXJyb3JEYXRhKHtcbiAgICAgICAgICAgICAgICBhZGRyZXNzLFxuICAgICAgICAgICAgICAgIGZ1bmN0aW9uX25hbWU6IHBhcmFtcy5mdW5jdGlvbk5hbWUsXG4gICAgICAgICAgICB9KSk7XG4gICAgICAgIH1cbiAgICAgICAgY29uc3QgYWNjb3VudCA9IHBhcmFtcy5hY2NvdW50IHx8IChhd2FpdCB0aGlzLmdldEFjY291bnQoXG4gICAgICAgICAgICBhZGRyZXNzLFxuICAgICAgICAgICAgZmFsc2UsXG4gICAgICAgICAgICBwYXJhbXMud2FpdFBhcmFtcyxcbiAgICAgICAgICAgIHBhcmVudFNwYW4sXG4gICAgICAgICkpO1xuICAgICAgICBpZiAoIWFjY291bnQuY29kZV9oYXNoKSB7XG4gICAgICAgICAgICB0aHJvdyBUT05DbGllbnRFcnJvci5hY2NvdW50Q29kZU1pc3NpbmcoXG4gICAgICAgICAgICAgICAgYWRkcmVzcyxcbiAgICAgICAgICAgICAgICAoYWNjb3VudDogYW55KS5iYWxhbmNlLFxuICAgICAgICAgICAgICAgIGF3YWl0IHRoaXMuY29tcGxldGVFcnJvckRhdGEoe1xuICAgICAgICAgICAgICAgICAgICBhZGRyZXNzLFxuICAgICAgICAgICAgICAgICAgICBmdW5jdGlvbl9uYW1lOiBwYXJhbXMuZnVuY3Rpb25OYW1lLFxuICAgICAgICAgICAgICAgIH0pLFxuICAgICAgICAgICAgKTtcbiAgICAgICAgfVxuICAgICAgICByZXR1cm4gdGhpcy5yZXF1ZXN0Q29yZSgnY29udHJhY3RzLnJ1bi5sb2NhbC5tc2cnLCB7XG4gICAgICAgICAgICBhZGRyZXNzLFxuICAgICAgICAgICAgYWNjb3VudCxcbiAgICAgICAgICAgIGFiaTogcGFyYW1zLmFiaSxcbiAgICAgICAgICAgIGZ1bmN0aW9uTmFtZTogcGFyYW1zLmZ1bmN0aW9uTmFtZSxcbiAgICAgICAgICAgIG1lc3NhZ2VCYXNlNjQ6IHBhcmFtcy5tZXNzYWdlQm9keUJhc2U2NCxcbiAgICAgICAgICAgIGZ1bGxSdW46IHBhcmFtcy5mdWxsUnVuLFxuICAgICAgICB9KTtcbiAgICB9XG59XG5cblRPTkNvbnRyYWN0c01vZHVsZS5tb2R1bGVOYW1lID0gJ1RPTkNvbnRyYWN0c01vZHVsZSc7XG5cbmNvbnN0IEJMT0NLX0ZJRUxEUyA9IGBcbiAgICBpZFxuICAgIGdlbl91dGltZVxuICAgIGFmdGVyX3NwbGl0XG4gICAgd29ya2NoYWluX2lkXG4gICAgc2hhcmRcbiAgICBpbl9tc2dfZGVzY3Ige1xuICAgICAgICBtc2dfaWRcbiAgICAgICAgdHJhbnNhY3Rpb25faWRcbiAgICB9XG5gO1xuXG5jb25zdCBUUkFOU0FDVElPTl9GSUVMRFNfT1JESU5BUlkgPSBgXG4gICAgaWRcbiAgICBhYm9ydGVkXG4gICAgY29tcHV0ZSB7XG4gICAgICAgIHNraXBwZWRfcmVhc29uXG4gICAgICAgIGV4aXRfY29kZVxuICAgICAgICBzdWNjZXNzXG4gICAgICAgIGdhc19mZWVzXG4gICAgfVxuICAgIHN0b3JhZ2Uge1xuICAgICAgIHN0YXR1c19jaGFuZ2VcbiAgICAgICBzdG9yYWdlX2ZlZXNfY29sbGVjdGVkXG4gICAgfVxuICAgIGFjdGlvbiB7XG4gICAgICAgIHN1Y2Nlc3NcbiAgICAgICAgdmFsaWRcbiAgICAgICAgbm9fZnVuZHNcbiAgICAgICAgcmVzdWx0X2NvZGVcbiAgICAgICAgdG90YWxfZndkX2ZlZXNcbiAgICAgICAgdG90YWxfYWN0aW9uX2ZlZXNcbiAgICB9XG4gICAgaW5fbXNnXG4gICAgbm93XG4gICAgb3V0X21zZ3NcbiAgICBvdXRfbWVzc2FnZXMge1xuICAgICAgICBpZFxuICAgICAgICBib2R5XG4gICAgICAgIG1zZ190eXBlXG4gICAgICAgIHZhbHVlXG4gICAgfVxuICAgIHN0YXR1c1xuICAgIHRvdGFsX2ZlZXNcbmA7XG4iXX0=