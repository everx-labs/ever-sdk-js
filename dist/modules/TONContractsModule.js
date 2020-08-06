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
                  _context11.next = 16;
                  break;
                }

                address = params.address;

                if (address) {
                  _context11.next = 6;
                  break;
                }

                throw _TONClient.TONClientError.addressRequiredForRunLocal();

              case 6:
                _context11.next = 8;
                return this.getAccount(address, false, {
                  timeout: this.config.waitForTimeout()
                });

              case 8:
                account = _context11.sent;

                if (account.code_hash) {
                  _context11.next = 11;
                  break;
                }

                throw _TONClient.TONClientError.accountCodeMissing(address, account.balance);

              case 11:
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

              case 16:
                return _context11.abrupt("return", this.requestCore('tvm.get', coreParams));

              case 17:
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
          throw _TONClient.TONClientError.invalidCons();
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
                  _context30.next = 3;
                  break;
                }

                throw _TONClient.TONClientError.sendNodeRequestFailed('Message already expired');

              case 3:
                _context30.t0 = Math;
                _context30.next = 6;
                return this.queries.serverTimeDelta(parentSpan);

              case 6:
                _context30.t1 = _context30.sent;
                serverTimeDelta = _context30.t0.abs.call(_context30.t0, _context30.t1);

                if (!(serverTimeDelta > this.config.outOfSyncThreshold())) {
                  _context30.next = 11;
                  break;
                }

                this.queries.dropServerTimeDelta();
                throw _TONClient.TONClientError.clockOutOfSync();

              case 11:
                _context30.next = 13;
                return this.findLastShardBlock(params.address);

              case 13:
                lastBlockId = _context30.sent;
                _context30.next = 16;
                return this.ensureMessageId(params);

              case 16:
                id = _context30.sent;
                idBase64 = Buffer.from(id, 'hex').toString('base64');
                messageSpan = this.context.startRootSpan(id.substr(0, 16), id.substr(16, 16), 'messageProcessing');
                messageSpan.addTags({
                  messageId: id,
                  messageSize: Math.ceil(params.messageBodyBase64.length * 3 / 4),
                  address: params.address,
                  expire: params.expire
                });
                _context30.next = 22;
                return this.queries.postRequests([{
                  id: idBase64,
                  body: params.messageBodyBase64
                }], parentSpan);

              case 22:
                messageSpan.finish();
                this.config.log('sendMessage. Request posted', id);
                return _context30.abrupt("return", {
                  lastBlockId: lastBlockId,
                  sendingTime: Math.round(Date.now() / 1000)
                });

              case 25:
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
                  _context34.next = 9;
                  break;
                }

                if (masterchainLastBlock) {
                  _context34.next = 8;
                  break;
                }

                throw _TONClient.TONClientError.noBlocks(MASTERCHAIN_ID);

              case 8:
                return _context34.abrupt("return", masterchainLastBlock.id);

              case 9:
                if (masterchainLastBlock) {
                  _context34.next = 23;
                  break;
                }

                _context34.next = 12;
                return this.findLastBlock(workchain, 'after_merge shard');

              case 12:
                workchainLastBlock = _context34.sent;

                if (workchainLastBlock) {
                  _context34.next = 15;
                  break;
                }

                throw _TONClient.TONClientError.noBlocks(workchain);

              case 15:
                if (!(workchainLastBlock.after_merge || workchainLastBlock.shard !== '8000000000000000')) {
                  _context34.next = 17;
                  break;
                }

                throw _TONClient.TONClientError.noBlocks(MASTERCHAIN_ID);

              case 17:
                _context34.next = 19;
                return this.findLastBlock(workchain, 'id', {
                  shard: {
                    eq: '8000000000000000'
                  }
                });

              case 19:
                workchainLastBlock = _context34.sent;

                if (workchainLastBlock) {
                  _context34.next = 22;
                  break;
                }

                throw _TONClient.TONClientError.invalidBlockchain('No starting Node SE block found');

              case 22:
                return _context34.abrupt("return", workchainLastBlock.id);

              case 23:
                shards = masterchainLastBlock === null || masterchainLastBlock === void 0 ? void 0 : (_masterchainLastBlock = masterchainLastBlock.master) === null || _masterchainLastBlock === void 0 ? void 0 : _masterchainLastBlock.shard_hashes;

                if (!(!shards || shards.length === 0)) {
                  _context34.next = 26;
                  break;
                }

                throw _TONClient.TONClientError.invalidBlockchain('No `shard_hashes` field in masterchain block');

              case 26:
                _context34.next = 28;
                return this.findMatchingShard(shards, address);

              case 28:
                shardBlock = _context34.sent;
                root_hash = shardBlock === null || shardBlock === void 0 ? void 0 : (_shardBlock$descr = shardBlock.descr) === null || _shardBlock$descr === void 0 ? void 0 : _shardBlock$descr.root_hash;

                if (root_hash) {
                  _context34.next = 32;
                  break;
                }

                throw _TONClient.TONClientError.invalidBlockchain('No `root_hash` field in shard descr');

              case 32:
                return _context34.abrupt("return", root_hash);

              case 33:
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
                  _context37.next = 56;
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
                _context37.next = 34;
                break;

              case 26:
                _context37.prev = 26;
                _context37.t0 = _context37["catch"](17);
                this.config.log('Block waiting failed: ', _context37.t0);

                if (infiniteWait) {
                  _context37.next = 33;
                  break;
                }

                resolvedError = _context37.t0;

                if (_context37.t0.code === _TONClient.TONErrorCode.WAIT_FOR_TIMEOUT) {
                  resolvedError = _TONClient.TONClientError.networkSilent({
                    messageId: messageId,
                    blockId: processing.lastBlockId,
                    timeout: timeout,
                    messageProcessingState: processing,
                    expire: expire,
                    sendingTime: processing.sendingTime
                  });
                }

                throw resolvedError;

              case 33:
                this.config.log('Retry waiting.');

              case 34:
                if (!block) {
                  _context37.next = 54;
                  break;
                }

                processing.lastBlockId = block.id || '';
                inMsg = (block.in_msg_descr || []).find(function (x) {
                  return x.msg_id === messageId;
                });

                if (!inMsg) {
                  _context37.next = 49;
                  break;
                }

                transactionId = inMsg.transaction_id;

                if (transactionId) {
                  _context37.next = 41;
                  break;
                }

                throw _TONClient.TONClientError.invalidBlockchain('No field `transaction_id` in block');

              case 41:
                trStart = Date.now();
                _context37.next = 44;
                return this.queries.transactions.waitFor({
                  filter: {
                    id: {
                      eq: transactionId
                    }
                  },
                  result: TRANSACTION_FIELDS_ORDINARY,
                  timeout: _TONQueriesModule.MAX_TIMEOUT
                });

              case 44:
                transaction = _context37.sent;
                traceMessage(this.config.tracer, messageId, 'transactionReceived', {
                  transactionId: transactionId
                });
                timeReport.push("Transaction [".concat(transactionId, "] has been received: ").concat(Date.now() - trStart, " ms"));
                _context37.next = 54;
                break;

              case 49:
                if (!((block.gen_utime || 0) > stopTime)) {
                  _context37.next = 54;
                  break;
                }

                if (!expire) {
                  _context37.next = 53;
                  break;
                }

                traceMessage(this.config.tracer, messageId, 'messageExpired', {});
                throw _TONClient.TONClientError.messageExpired({
                  messageId: messageId,
                  sendingTime: processing.sendingTime,
                  expire: stopTime,
                  blockTime: block.gen_utime,
                  blockId: processing.lastBlockId
                });

              case 53:
                throw _TONClient.TONClientError.transactionWaitTimeout({
                  messageId: messageId,
                  sendingTime: processing.sendingTime,
                  timeout: timeout,
                  messageProcessingState: processing
                });

              case 54:
                _context37.next = 13;
                break;

              case 56:
                timeReport.splice(0, 0, "Transaction waiting time: ".concat(Date.now() - totalStart, " ms"));
                this.config.log(timeReport.join('\n'));
                _context37.next = 70;
                break;

              case 60:
                _context37.prev = 60;
                _context37.t1 = _context37["catch"](8);
                this.config.log('[waitForTransaction]', 'FAILED', _context37.t1);

                if (!(_context37.t1.code === _TONClient.TONErrorCode.MESSAGE_EXPIRED || _context37.t1.code === _TONClient.TONErrorCode.TRANSACTION_WAIT_TIMEOUT)) {
                  _context37.next = 69;
                  break;
                }

                _context37.next = 66;
                return this.resolveDetailedError(_context37.t1, params.message.messageBodyBase64, processing.sendingTime, address);

              case 66:
                throw _context37.sent;

              case 69:
                throw _context37.t1;

              case 70:
                return _context37.abrupt("return", this.processTransaction(address, transaction, params.abi, params.functionName));

              case 71:
              case "end":
                return _context37.stop();
            }
          }
        }, _callee37, this, [[8, 60], [17, 26]]);
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
                              _context38.next = 14;
                              break;

                            case 7:
                              _context38.prev = 7;
                              _context38.t0 = _context38["catch"](1);

                              if (!_TONClient.TONClientError.isWaitForTimeout(_context38.t0)) {
                                _context38.next = 13;
                                break;
                              }

                              throw _TONClient.TONClientError.networkSilent({
                                messageId: messageId,
                                sendingTime: sendingTime,
                                expire: expire,
                                timeout: blockTimeout
                              });

                            case 13:
                              throw _context38.t0;

                            case 14:
                              if (!transaction) {
                                _context38.next = 16;
                                break;
                              }

                              return _context38.abrupt("return");

                            case 16:
                              transactionId = block.in_msg_descr && ((_block$in_msg_descr$f = block.in_msg_descr.find(function (msg) {
                                return !!msg.transaction_id;
                              })) === null || _block$in_msg_descr$f === void 0 ? void 0 : _block$in_msg_descr$f.transaction_id);

                              if (transactionId) {
                                _context38.next = 19;
                                break;
                              }

                              throw _TONClient.TONClientError.internalError('Invalid block received: no transaction ID');

                            case 19:
                              _context38.prev = 19;
                              _context38.next = 22;
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

                            case 22:
                              _context38.next = 31;
                              break;

                            case 24:
                              _context38.prev = 24;
                              _context38.t1 = _context38["catch"](19);

                              if (!_TONClient.TONClientError.isWaitForTimeout(_context38.t1)) {
                                _context38.next = 30;
                                break;
                              }

                              throw _TONClient.TONClientError.networkSilent({
                                messageId: messageId,
                                blockId: block.id,
                                transactionId: transactionId,
                                timeout: BLOCK_TRANSACTION_WAITING_TIME,
                                sendingTime: sendingTime,
                                expire: expire
                              });

                            case 30:
                              throw _context38.t1;

                            case 31:
                              blockTime = block.gen_utime;

                            case 32:
                            case "end":
                              return _context38.stop();
                          }
                        }
                      }, _callee38, null, [[1, 7], [19, 24]]);
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
                            _context39.next = 10;
                            break;

                          case 7:
                            _context39.prev = 7;
                            _context39.t0 = _context39["catch"](0);

                            if (_TONClient.TONClientError.isWaitForTimeout(_context39.t0)) {
                              reject(_TONClient.TONClientError.transactionWaitTimeout({
                                messageId: messageId,
                                sendingTime: sendingTime,
                                timeout: processingTimeout
                              }));
                            } else {
                              reject(_context39.t0);
                            }

                          case 10:
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
                  _context40.next = 29;
                  break;
                }

                throw _TONClient.TONClientError.messageExpired({
                  messageId: messageId,
                  sendingTime: sendingTime,
                  expire: expire,
                  blockTime: blockTime
                });

              case 29:
                transactionNow = transaction.now || 0;
                this.config.log('[waitForTransaction]', 'TRANSACTION_RECEIVED', {
                  id: transaction.id,
                  blockId: transaction.block_id,
                  now: "".concat(new Date(transactionNow * 1000).toISOString(), " (").concat(transactionNow, ")")
                });
                _context40.next = 46;
                break;

              case 33:
                _context40.prev = 33;
                _context40.t0 = _context40["catch"](15);
                this.config.log('[waitForTransaction]', 'FAILED', _context40.t0);

                if (!(_TONClient.TONClientError.isMessageExpired(_context40.t0) || _TONClient.TONClientError.isClientError(_context40.t0, _TONClient.TONErrorCode.TRANSACTION_WAIT_TIMEOUT))) {
                  _context40.next = 45;
                  break;
                }

                _context40.next = 39;
                return this.resolveDetailedError(_context40.t0, message.messageBodyBase64, Date.now() / 1000, message.address);

              case 39:
                detailedError = _context40.sent;
                messageProcessingState = (_error$data = _context40.t0.data) === null || _error$data === void 0 ? void 0 : _error$data.messageProcessingState;

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

              case 45:
                throw _context40.t0;

              case 46:
                removeTypeName(transaction);
                _context40.next = 49;
                return this.processTransaction(message.address, transaction, abi, functionName);

              case 49:
                _yield$this$processTr = _context40.sent;
                output = _yield$this$processTr.output;
                fees = _yield$this$processTr.fees;
                return _context40.abrupt("return", {
                  transaction: transaction,
                  output: output,
                  fees: fees
                });

              case 53:
              case "end":
                return _context40.stop();
            }
          }
        }, _callee40, this, [[15, 33], [19,, 22, 27]]);
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
                  _context41.next = 14;
                  break;
                }

                throw _TONClient.TONClientError.accountMissing(address);

              case 14:
                throw _context41.t0;

              case 15:
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
                  _context42.next = 5;
                  break;
                }

                return _context42.abrupt("return", _TONClient.TONClientError.accountMissing(address));

              case 5:
                account = accounts[0];
                removeTypeName(account);
                _context42.prev = 7;
                _context42.next = 10;
                return this.requestCore('contracts.resolve.error', {
                  address: address,
                  account: account,
                  messageBase64: messageBase64,
                  time: time,
                  mainError: error
                });

              case 10:
                _context42.next = 15;
                break;

              case 12:
                _context42.prev = 12;
                _context42.t0 = _context42["catch"](7);
                return _context42.abrupt("return", _context42.t0);

              case 15:
                return _context42.abrupt("return", error);

              case 16:
              case "end":
                return _context42.stop();
            }
          }
        }, _callee42, this, [[7, 12]]);
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
                throw _TONClient.TONClientError.internalError('All retry attempts failed');

              case 19:
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
                  _context60.next = 9;
                  break;
                }

                throw _TONClient.TONClientError.accountMissing(address);

              case 9:
                account = accounts[0];
                removeTypeName(account);
                this.config.log('getAccount. Account received', account);
                return _context60.abrupt("return", account);

              case 13:
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
                  _context61.next = 3;
                  break;
                }

                throw _TONClient.TONClientError.addressRequiredForRunLocal();

              case 3:
                _context61.t0 = params.account;

                if (_context61.t0) {
                  _context61.next = 8;
                  break;
                }

                _context61.next = 7;
                return this.getAccount(address, false, params.waitParams, parentSpan);

              case 7:
                _context61.t0 = _context61.sent;

              case 8:
                account = _context61.t0;

                if (account.code_hash) {
                  _context61.next = 11;
                  break;
                }

                throw _TONClient.TONClientError.accountCodeMissing(address, account.balance);

              case 11:
                return _context61.abrupt("return", this.requestCore('contracts.run.local', {
                  address: address,
                  account: account,
                  abi: params.abi,
                  functionName: params.functionName,
                  input: params.input,
                  keyPair: params.keyPair,
                  fullRun: params.fullRun
                }));

              case 12:
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
                  _context62.next = 3;
                  break;
                }

                throw _TONClient.TONClientError.addressRequiredForRunLocal();

              case 3:
                _context62.t0 = params.account;

                if (_context62.t0) {
                  _context62.next = 8;
                  break;
                }

                _context62.next = 7;
                return this.getAccount(address, false, params.waitParams, parentSpan);

              case 7:
                _context62.t0 = _context62.sent;

              case 8:
                account = _context62.t0;

                if (account.code_hash) {
                  _context62.next = 11;
                  break;
                }

                throw _TONClient.TONClientError.accountCodeMissing(address, account.balance);

              case 11:
                return _context62.abrupt("return", this.requestCore('contracts.run.local.msg', {
                  address: address,
                  account: account,
                  abi: params.abi,
                  functionName: params.functionName,
                  messageBase64: params.messageBodyBase64,
                  fullRun: params.fullRun
                }));

              case 12:
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy9tb2R1bGVzL1RPTkNvbnRyYWN0c01vZHVsZS5qcyJdLCJuYW1lcyI6WyJUT05BZGRyZXNzU3RyaW5nVmFyaWFudCIsIkFjY291bnRJZCIsIkhleCIsIkJhc2U2NCIsIlRPTkNsaWVudFRyYW5zYWN0aW9uUGhhc2UiLCJzdG9yYWdlIiwiY29tcHV0ZVNraXBwZWQiLCJjb21wdXRlVm0iLCJhY3Rpb24iLCJ1bmtub3duIiwiVE9OQ2xpZW50Q29tcHV0ZVNraXBwZWRTdGF0dXMiLCJub1N0YXRlIiwiYmFkU3RhdGUiLCJub0dhcyIsIlRPTkNsaWVudFN0b3JhZ2VTdGF0dXMiLCJ1bmNoYW5nZWQiLCJmcm96ZW4iLCJkZWxldGVkIiwiUUluTXNnVHlwZSIsImV4dGVybmFsIiwiaWhyIiwiaW1tZWRpYXRlbHkiLCJ0cmFuc2l0IiwiZGlzY2FyZGVkRmluYWwiLCJkaXNjYXJkZWRUcmFuc2l0IiwiUU91dE1zZ1R5cGUiLCJvdXRNc2dOZXciLCJkZXF1ZXVlSW1tZWRpYXRlbHkiLCJkZXF1ZXVlIiwidHJhbnNpdFJlcXVpcmVkIiwibm9uZSIsIlFNZXNzYWdlVHlwZSIsImludGVybmFsIiwiZXh0SW4iLCJleHRPdXQiLCJRTWVzc2FnZVByb2Nlc3NpbmdTdGF0dXMiLCJxdWV1ZWQiLCJwcm9jZXNzaW5nIiwicHJlbGltaW5hcnkiLCJwcm9wb3NlZCIsImZpbmFsaXplZCIsInJlZnVzZWQiLCJ0cmFuc2l0aW5nIiwiUUJsb2NrUHJvY2Vzc2luZ1N0YXR1cyIsIlFTcGxpdFR5cGUiLCJzcGxpdCIsIm1lcmdlIiwiUUFjY291bnRUeXBlIiwidW5pbml0IiwiYWN0aXZlIiwiUVRyYW5zYWN0aW9uVHlwZSIsIm9yZGluYXJ5IiwidGljayIsInRvY2siLCJzcGxpdFByZXBhcmUiLCJzcGxpdEluc3RhbGwiLCJtZXJnZVByZXBhcmUiLCJtZXJnZUluc3RhbGwiLCJRVHJhbnNhY3Rpb25Qcm9jZXNzaW5nU3RhdHVzIiwiUUFjY291bnRTdGF0dXMiLCJub25FeGlzdCIsIlFBY2NvdW50U3RhdHVzQ2hhbmdlIiwiUUNvbXB1dGVUeXBlIiwic2tpcHBlZCIsInZtIiwiUVNraXBSZWFzb24iLCJRQm91bmNlVHlwZSIsIm5lZ0Z1bmRzIiwibm9GdW5kcyIsIm9rIiwiTUFTVEVSQ0hBSU5fSUQiLCJFWFRSQV9UUkFOU0FDVElPTl9XQUlUSU5HX1RJTUUiLCJCTE9DS19UUkFOU0FDVElPTl9XQUlUSU5HX1RJTUUiLCJyZW1vdmVUeXBlTmFtZSIsIm9iaiIsIl9fdHlwZW5hbWUiLCJPYmplY3QiLCJ2YWx1ZXMiLCJmb3JFYWNoIiwidmFsdWUiLCJyZW1vdmVQcm9wcyIsInBhdGhzIiwicmVzdWx0IiwicGF0aCIsImRvdFBvcyIsImluZGV4T2YiLCJuYW1lIiwic3Vic3RyIiwiY2hpbGQiLCJyZWR1Y2VkQ2hpbGQiLCJzdGFydE1lc3NhZ2VUcmFjZVNwYW4iLCJ0cmFjZXIiLCJtZXNzYWdlSWQiLCJvcGVyYXRpb25OYW1lIiwidGFncyIsInRyYWNlSWQiLCJzcGFuSWQiLCJyb290Q29udGV4dCIsImV4dHJhY3QiLCJGT1JNQVRfVEVYVF9NQVAiLCJzdGFydFNwYW4iLCJjaGlsZE9mIiwidHJhY2VNZXNzYWdlIiwic3BhbiIsImZpbmlzaCIsIlRPTkNvbnRyYWN0c01vZHVsZSIsImNvbmZpZyIsImNvbnRleHQiLCJnZXRNb2R1bGUiLCJUT05Db25maWdNb2R1bGUiLCJxdWVyaWVzIiwiVE9OUXVlcmllc01vZHVsZSIsInBhcmFtcyIsInBhcmVudFNwYW4iLCJhY2NvdW50cyIsInF1ZXJ5IiwiZmlsdGVyIiwiaWQiLCJlcSIsImFkZHJlc3MiLCJsZW5ndGgiLCJiYWxhbmNlR3JhbXMiLCJiYWxhbmNlIiwidHJhY2UiLCJzZXRUYWciLCJpbnRlcm5hbERlcGxveUpzIiwiaW50ZXJuYWxSdW5KcyIsImludGVybmFsUnVuTG9jYWxKcyIsImludGVybmFsUnVuTWVzc2FnZUxvY2FsSnMiLCJjb3JlUGFyYW1zIiwiaGFzQ29kZSIsImJvY0Jhc2U2NCIsImNvZGVCYXNlNjQiLCJkYXRhQmFzZTY0IiwiVE9OQ2xpZW50RXJyb3IiLCJhZGRyZXNzUmVxdWlyZWRGb3JSdW5Mb2NhbCIsImdldEFjY291bnQiLCJ0aW1lb3V0Iiwid2FpdEZvclRpbWVvdXQiLCJhY2NvdW50IiwiY29kZV9oYXNoIiwiYWNjb3VudENvZGVNaXNzaW5nIiwicGFyYW1zRnJvbUFjY291bnQiLCJib2MiLCJsYXN0X3BhaWQiLCJyZXF1ZXN0Q29yZSIsImNvbnMiLCJpdGVtIiwiaW52YWxpZENvbnMiLCJwdXNoIiwicmV0cnlJbmRleCIsImxvZyIsImFiaSIsImNvbnN0cnVjdG9ySGVhZGVyIiwiY29uc3RydWN0b3JQYXJhbXMiLCJpbml0UGFyYW1zIiwiaW1hZ2VCYXNlNjQiLCJrZXlQYWlyIiwid29ya2NoYWluSWQiLCJtZXNzYWdlIiwiZnVuY3Rpb25OYW1lIiwiaGVhZGVyIiwidHJ5SW5kZXgiLCJpbnB1dCIsInB1YmxpY0tleUhleCIsImFkZHJlc3NIZXgiLCJzaWduUGFyYW1zIiwiZW5jb2RlZCIsImNyZWF0ZVNpZ25lZE1lc3NhZ2UiLCJ1bnNpZ25lZE1lc3NhZ2UiLCJ1bnNpZ25lZEJ5dGVzQmFzZTY0Iiwic2lnbkJ5dGVzQmFzZTY0IiwiZXhwaXJlIiwiZ2V0Qm9jSGFzaCIsIm1lc3NhZ2VCb2R5QmFzZTY0IiwiaGFzaCIsIkRhdGUiLCJub3ciLCJzZW5kTm9kZVJlcXVlc3RGYWlsZWQiLCJNYXRoIiwic2VydmVyVGltZURlbHRhIiwiYWJzIiwib3V0T2ZTeW5jVGhyZXNob2xkIiwiZHJvcFNlcnZlclRpbWVEZWx0YSIsImNsb2NrT3V0T2ZTeW5jIiwiZmluZExhc3RTaGFyZEJsb2NrIiwibGFzdEJsb2NrSWQiLCJlbnN1cmVNZXNzYWdlSWQiLCJpZEJhc2U2NCIsIkJ1ZmZlciIsImZyb20iLCJ0b1N0cmluZyIsIm1lc3NhZ2VTcGFuIiwic3RhcnRSb290U3BhbiIsImFkZFRhZ3MiLCJtZXNzYWdlU2l6ZSIsImNlaWwiLCJwb3N0UmVxdWVzdHMiLCJib2R5Iiwic2VuZGluZ1RpbWUiLCJyb3VuZCIsInJlc3VsdEZpZWxkcyIsInNlbmRNZXNzYWdlIiwid2FpdEZvclRyYW5zYWN0aW9uIiwibWVzc2FnZVByb2Nlc3NpbmdTdGF0ZSIsInRyYW5zYWN0aW9uIiwiY2hhaW4iLCJhZGRpdGlvbmFsRmlsdGVyIiwiYmxvY2tzIiwid29ya2NoYWluX2lkIiwib3JkZXJCeSIsImRpcmVjdGlvbiIsImxpbWl0Iiwic2hhcmRzIiwiYWRkcmVzc1BhcnRzIiwid29ya2NoYWluIiwiTnVtYmVyIiwicGFyc2VJbnQiLCJmaW5kTGFzdEJsb2NrIiwibWFzdGVyY2hhaW5MYXN0QmxvY2siLCJub0Jsb2NrcyIsIndvcmtjaGFpbkxhc3RCbG9jayIsImFmdGVyX21lcmdlIiwic2hhcmQiLCJpbnZhbGlkQmxvY2tjaGFpbiIsIm1hc3RlciIsInNoYXJkX2hhc2hlcyIsImZpbmRNYXRjaGluZ1NoYXJkIiwic2hhcmRCbG9jayIsInJvb3RfaGFzaCIsImRlc2NyIiwiYmxvY2siLCJjdXJyZW50Iiwid2FpdEZvciIsInByZXZfcmVmIiwiT1IiLCJwcmV2X2FsdF9yZWYiLCJCTE9DS19GSUVMRFMiLCJhZnRlcl9zcGxpdCIsImNoZWNrU2hhcmRNYXRjaCIsIm5lIiwidG90YWxTdGFydCIsInRpbWVSZXBvcnQiLCJzdG9wVGltZSIsIm1lc3NhZ2VQcm9jZXNzaW5nVGltZW91dCIsImluZmluaXRlV2FpdCIsImFkZFRpbWVvdXQiLCJtYXgiLCJzdGFydCIsIndhaXROZXh0QmxvY2siLCJlbmQiLCJnZW5fdXRpbWUiLCJyZXNvbHZlZEVycm9yIiwiY29kZSIsIlRPTkVycm9yQ29kZSIsIldBSVRfRk9SX1RJTUVPVVQiLCJuZXR3b3JrU2lsZW50IiwiYmxvY2tJZCIsImluTXNnIiwiaW5fbXNnX2Rlc2NyIiwiZmluZCIsIngiLCJtc2dfaWQiLCJ0cmFuc2FjdGlvbklkIiwidHJhbnNhY3Rpb25faWQiLCJ0clN0YXJ0IiwidHJhbnNhY3Rpb25zIiwiVFJBTlNBQ1RJT05fRklFTERTX09SRElOQVJZIiwiTUFYX1RJTUVPVVQiLCJtZXNzYWdlRXhwaXJlZCIsImJsb2NrVGltZSIsInRyYW5zYWN0aW9uV2FpdFRpbWVvdXQiLCJzcGxpY2UiLCJqb2luIiwiTUVTU0FHRV9FWFBJUkVEIiwiVFJBTlNBQ1RJT05fV0FJVF9USU1FT1VUIiwicmVzb2x2ZURldGFpbGVkRXJyb3IiLCJwcm9jZXNzVHJhbnNhY3Rpb24iLCJwcm9jZXNzaW5nVGltZW91dCIsInByb21pc2VzIiwiZ2V0U2VydmVySW5mbyIsInNlcnZlckluZm8iLCJvcGVyYXRpb25JZCIsInN1cHBvcnRzT3BlcmF0aW9uSWQiLCJnZW5lcmF0ZU9wZXJhdGlvbklkIiwidW5kZWZpbmVkIiwiYmxvY2tUaW1lb3V0Iiwid2FpdEV4cGlyZWQiLCJtaW5fc2hhcmRfZ2VuX3V0aW1lIiwiZ2UiLCJpc1dhaXRGb3JUaW1lb3V0IiwibXNnIiwiaW50ZXJuYWxFcnJvciIsIlByb21pc2UiLCJyZXNvbHZlIiwicmVqZWN0IiwiaW5fbXNnIiwic3RhdHVzIiwidHJhbnNhY3Rpb25EZXRhaWxzIiwicmFjZSIsImZpbmlzaE9wZXJhdGlvbnMiLCJ0cmFuc2FjdGlvbk5vdyIsImJsb2NrX2lkIiwidG9JU09TdHJpbmciLCJpc01lc3NhZ2VFeHBpcmVkIiwiaXNDbGllbnRFcnJvciIsImRldGFpbGVkRXJyb3IiLCJkYXRhIiwib3V0cHV0IiwiZmVlcyIsImFjY291bnRNaXNzaW5nIiwiZXJyb3IiLCJtZXNzYWdlQmFzZTY0IiwidGltZSIsIm1haW5FcnJvciIsImFjY190eXBlIiwiaXNEZXBsb3llZCIsImFscmVhZHlEZXBsb3llZCIsIndhaXRGb3JEZXBsb3lUcmFuc2FjdGlvbiIsImRlcGxveU1lc3NhZ2UiLCJydW5NZXNzYWdlIiwid2FpdEZvclJ1blRyYW5zYWN0aW9uIiwid2FpdFBhcmFtcyIsImVtdWxhdGVCYWxhbmNlIiwiYmlnQmFsYW5jZSIsImNyZWF0ZURlcGxveU1lc3NhZ2UiLCJjYWxjTXNnUHJvY2Vzc0ZlZXMiLCJuZXdBY2NvdW50IiwiZmxvb3IiLCJjYWxsIiwicmV0cmllc0NvdW50IiwibWVzc2FnZVJldHJpZXNDb3VudCIsImkiLCJ1c2VSZXRyeSIsImlzT3JpZ2luYWxDb250cmFjdEVycm9yIiwiVE9OQ29udHJhY3RFeGl0Q29kZSIsIlJFUExBWV9QUk9URUNUSU9OIiwiaXNSZXNvbHZlZENvbnRyYWN0RXJyb3JBZnRlckV4cGlyZSIsInJldHJ5Q2FsbCIsImNyZWF0ZVJ1bk1lc3NhZ2UiLCJ0cmFuc2FjdGlvbkx0IiwibGFzdF90cmFuc19sdCIsImZ1bGxSdW4iLCJUT05Nb2R1bGUiLCJtb2R1bGVOYW1lIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7O0FBS0E7O0FBc0RBOztBQUNBOztBQUNBOztBQUNBOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBRU8sSUFBTUEsdUJBQXVCLEdBQUc7QUFDbkNDLEVBQUFBLFNBQVMsRUFBRSxXQUR3QjtBQUVuQ0MsRUFBQUEsR0FBRyxFQUFFLEtBRjhCO0FBR25DQyxFQUFBQSxNQUFNLEVBQUU7QUFIMkIsQ0FBaEM7O0FBTUEsSUFBTUMseUJBQXlCLEdBQUc7QUFDckNDLEVBQUFBLE9BQU8sRUFBRSxTQUQ0QjtBQUVyQ0MsRUFBQUEsY0FBYyxFQUFFLGdCQUZxQjtBQUdyQ0MsRUFBQUEsU0FBUyxFQUFFLFdBSDBCO0FBSXJDQyxFQUFBQSxNQUFNLEVBQUUsUUFKNkI7QUFLckNDLEVBQUFBLE9BQU8sRUFBRTtBQUw0QixDQUFsQzs7QUFRQSxJQUFNQyw2QkFBNkIsR0FBRztBQUN6Q0MsRUFBQUEsT0FBTyxFQUFFLENBRGdDO0FBRXpDQyxFQUFBQSxRQUFRLEVBQUUsQ0FGK0I7QUFHekNDLEVBQUFBLEtBQUssRUFBRTtBQUhrQyxDQUF0Qzs7QUFNQSxJQUFNQyxzQkFBc0IsR0FBRztBQUNsQ0MsRUFBQUEsU0FBUyxFQUFFLENBRHVCO0FBRWxDQyxFQUFBQSxNQUFNLEVBQUUsQ0FGMEI7QUFHbENDLEVBQUFBLE9BQU8sRUFBRTtBQUh5QixDQUEvQjs7QUFNQSxJQUFNQyxVQUFVLEdBQUc7QUFDdEJDLEVBQUFBLFFBQVEs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TSxDQUFDOEQsaUJBTHlCO0FBTS9Dd0ssa0JBQUFBLE9BQU8sRUFBRXRPLE1BQU0sQ0FBQ3NPO0FBTitCLGlCQUE1QyxDOzs7Ozs7Ozs7Ozs7Ozs7Ozs7O0VBL3JDaUNDLHFCOzs7QUEwc0NoRDlPLGtCQUFrQixDQUFDK08sVUFBbkIsR0FBZ0Msb0JBQWhDO0FBRUEsSUFBTTlDLGtCQUFrQiwya0JBQXhCO0FBd0NBLElBQU03RCxZQUFZLCtJQUFsQjtBQVlBLElBQU04QiwyQkFBMkIsK2VBQWpDIiwic291cmNlc0NvbnRlbnQiOlsiLypcbiAqIENvcHlyaWdodCAyMDE4LTIwMjAgVE9OIERFViBTT0xVVElPTlMgTFRELlxuICovXG4vLyBAZmxvd1xuXG5pbXBvcnQgeyBUcmFjZXIsIEZPUk1BVF9URVhUX01BUCwgU3BhbiwgU3BhbkNvbnRleHQgfSBmcm9tICdvcGVudHJhY2luZyc7XG5pbXBvcnQgdHlwZSB7XG4gICAgUUFjY291bnQsXG4gICAgUUJsb2NrLFxuICAgIFFNZXNzYWdlLFxuICAgIFFUcmFuc2FjdGlvbixcbiAgICBUT05Db250cmFjdEFCSSxcbiAgICBUT05Db250cmFjdEFjY291bnRXYWl0UGFyYW1zLFxuICAgIFRPTkNvbnRyYWN0Q29udmVydEFkZHJlc3NQYXJhbXMsXG4gICAgVE9OQ29udHJhY3RDb252ZXJ0QWRkcmVzc1Jlc3VsdCxcbiAgICBUT05Db250cmFjdENyZWF0ZVJ1bkJvZHlQYXJhbXMsXG4gICAgVE9OQ29udHJhY3RDcmVhdGVSdW5Cb2R5UmVzdWx0LFxuICAgIFRPTkNvbnRyYWN0Q3JlYXRlU2lnbmVkRGVwbG95TWVzc2FnZVBhcmFtcyxcbiAgICBUT05Db250cmFjdENyZWF0ZVNpZ25lZE1lc3NhZ2VQYXJhbXMsXG4gICAgVE9OQ29udHJhY3RDcmVhdGVTaWduZWRSdW5NZXNzYWdlUGFyYW1zLFxuICAgIFRPTkNvbnRyYWN0RGVjb2RlTWVzc2FnZUJvZHlQYXJhbXMsXG4gICAgVE9OQ29udHJhY3REZWNvZGVNZXNzYWdlQm9keVJlc3VsdCxcbiAgICBUT05Db250cmFjdERlY29kZVJ1bk91dHB1dFBhcmFtcyxcbiAgICBUT05Db250cmFjdERlcGxveU1lc3NhZ2UsXG4gICAgVE9OQ29udHJhY3REZXBsb3lQYXJhbXMsXG4gICAgVE9OQ29udHJhY3REZXBsb3lSZXN1bHQsXG4gICAgVE9OQ29udHJhY3RDYWxjRGVwbG95RmVlUGFyYW1zLFxuICAgIFRPTkNvbnRyYWN0Qm9jLFxuICAgIFRPTkNvbnRyYWN0R2V0Qm9jSGFzaFJlc3VsdCxcbiAgICBUT05Db250cmFjdEdldENvZGVGcm9tSW1hZ2VQYXJhbXMsXG4gICAgVE9OQ29udHJhY3RHZXRDb2RlRnJvbUltYWdlUmVzdWx0LFxuICAgIFRPTkNvbnRyYWN0R2V0RGVwbG95RGF0YVBhcmFtcyxcbiAgICBUT05Db250cmFjdEdldERlcGxveURhdGFSZXN1bHQsXG4gICAgVE9OQ29udHJhY3RHZXRGdW5jdGlvbklkUGFyYW1zLFxuICAgIFRPTkNvbnRyYWN0R2V0RnVuY3Rpb25JZFJlc3VsdCxcbiAgICBUT05Db250cmFjdExvYWRQYXJhbXMsXG4gICAgVE9OQ29udHJhY3RMb2FkUmVzdWx0LFxuICAgIFRPTkNvbnRyYWN0Q2FsY1J1bkZlZVBhcmFtcyxcbiAgICBUT05Db250cmFjdENhbGNGZWVSZXN1bHQsXG4gICAgVE9OQ29udHJhY3RDYWxjTXNnUHJvY2Vzc2luZ0ZlZXNQYXJhbXMsXG4gICAgVE9OQ29udHJhY3RNZXNzYWdlLFxuICAgIFRPTkNvbnRyYWN0UnVuTG9jYWxQYXJhbXMsXG4gICAgVE9OQ29udHJhY3RSdW5NZXNzYWdlLFxuICAgIFRPTkNvbnRyYWN0UnVuUGFyYW1zLFxuICAgIFRPTkNvbnRyYWN0UnVuUmVzdWx0LFxuICAgIFRPTkNvbnRyYWN0cyxcbiAgICBUT05Db250cmFjdFVuc2lnbmVkRGVwbG95TWVzc2FnZSxcbiAgICBUT05Db250cmFjdFVuc2lnbmVkTWVzc2FnZSxcbiAgICBUT05Db250cmFjdFVuc2lnbmVkUnVuTWVzc2FnZSxcbiAgICBUT05Db250cmFjdFJ1bkdldFBhcmFtcyxcbiAgICBUT05Db250cmFjdFJ1bkdldFJlc3VsdCxcbiAgICBUT05Db250cmFjdFJ1bk1lc3NhZ2VMb2NhbFBhcmFtcyxcbiAgICBUT05Db250cmFjdFJ1bkxvY2FsUmVzdWx0LFxuICAgIFRPTkNvbnRyYWN0VHJhbnNhY3Rpb25GZWVzLFxuICAgIFRPTldhaXRGb3JUcmFuc2FjdGlvblBhcmFtcyxcbiAgICBRU2hhcmRIYXNoLFxuICAgIFRPTk1lc3NhZ2VQcm9jZXNzaW5nU3RhdGUsXG59IGZyb20gJy4uLy4uL3R5cGVzJztcblxuaW1wb3J0IHsgVE9OQ2xpZW50RXJyb3IsIFRPTkNvbnRyYWN0RXhpdENvZGUsIFRPTkVycm9yQ29kZSB9IGZyb20gJy4uL1RPTkNsaWVudCc7XG5pbXBvcnQgeyBUT05Nb2R1bGUgfSBmcm9tICcuLi9UT05Nb2R1bGUnO1xuaW1wb3J0IFRPTkNvbmZpZ01vZHVsZSBmcm9tICcuL1RPTkNvbmZpZ01vZHVsZSc7XG5pbXBvcnQgVE9OUXVlcmllc01vZHVsZSwgeyBNQVhfVElNRU9VVCB9IGZyb20gJy4vVE9OUXVlcmllc01vZHVsZSc7XG5cbmV4cG9ydCBjb25zdCBUT05BZGRyZXNzU3RyaW5nVmFyaWFudCA9IHtcbiAgICBBY2NvdW50SWQ6ICdBY2NvdW50SWQnLFxuICAgIEhleDogJ0hleCcsXG4gICAgQmFzZTY0OiAnQmFzZTY0Jyxcbn07XG5cbmV4cG9ydCBjb25zdCBUT05DbGllbnRUcmFuc2FjdGlvblBoYXNlID0ge1xuICAgIHN0b3JhZ2U6ICdzdG9yYWdlJyxcbiAgICBjb21wdXRlU2tpcHBlZDogJ2NvbXB1dGVTa2lwcGVkJyxcbiAgICBjb21wdXRlVm06ICdjb21wdXRlVm0nLFxuICAgIGFjdGlvbjogJ2FjdGlvbicsXG4gICAgdW5rbm93bjogJ3Vua25vd24nLFxufTtcblxuZXhwb3J0IGNvbnN0IFRPTkNsaWVudENvbXB1dGVTa2lwcGVkU3RhdHVzID0ge1xuICAgIG5vU3RhdGU6IDAsXG4gICAgYmFkU3RhdGU6IDEsXG4gICAgbm9HYXM6IDIsXG59O1xuXG5leHBvcnQgY29uc3QgVE9OQ2xpZW50U3RvcmFnZVN0YXR1cyA9IHtcbiAgICB1bmNoYW5nZWQ6IDAsXG4gICAgZnJvemVuOiAxLFxuICAgIGRlbGV0ZWQ6IDIsXG59O1xuXG5leHBvcnQgY29uc3QgUUluTXNnVHlwZSA9IHtcbiAgICBleHRlcm5hbDogMCxcbiAgICBpaHI6IDEsXG4gICAgaW1tZWRpYXRlbHk6IDIsXG4gICAgZmluYWw6IDMsXG4gICAgdHJhbnNpdDogNCxcbiAgICBkaXNjYXJkZWRGaW5hbDogNSxcbiAgICBkaXNjYXJkZWRUcmFuc2l0OiA2LFxufTtcblxuZXhwb3J0IGNvbnN0IFFPdXRNc2dUeXBlID0ge1xuICAgIGV4dGVybmFsOiAwLFxuICAgIGltbWVkaWF0ZWx5OiAxLFxuICAgIG91dE1zZ05ldzogMixcbiAgICB0cmFuc2l0OiAzLFxuICAgIGRlcXVldWVJbW1lZGlhdGVseTogNCxcbiAgICBkZXF1ZXVlOiA1LFxuICAgIHRyYW5zaXRSZXF1aXJlZDogNixcbiAgICBub25lOiAtMSxcbn07XG5cbmV4cG9ydCBjb25zdCBRTWVzc2FnZVR5cGUgPSB7XG4gICAgaW50ZXJuYWw6IDAsXG4gICAgZXh0SW46IDEsXG4gICAgZXh0T3V0OiAyLFxufTtcblxuZXhwb3J0IGNvbnN0IFFNZXNzYWdlUHJvY2Vzc2luZ1N0YXR1cyA9IHtcbiAgICB1bmtub3duOiAwLFxuICAgIHF1ZXVlZDogMSxcbiAgICBwcm9jZXNzaW5nOiAyLFxuICAgIHByZWxpbWluYXJ5OiAzLFxuICAgIHByb3Bvc2VkOiA0LFxuICAgIGZpbmFsaXplZDogNSxcbiAgICByZWZ1c2VkOiA2LFxuICAgIHRyYW5zaXRpbmc6IDcsXG59O1xuXG5leHBvcnQgY29uc3QgUUJsb2NrUHJvY2Vzc2luZ1N0YXR1cyA9IHtcbiAgICB1bmtub3duOiAwLFxuICAgIHByb3Bvc2VkOiAxLFxuICAgIGZpbmFsaXplZDogMixcbiAgICByZWZ1c2VkOiAzLFxufTtcblxuZXhwb3J0IGNvbnN0IFFTcGxpdFR5cGUgPSB7XG4gICAgbm9uZTogMCxcbiAgICBzcGxpdDogMixcbiAgICBtZXJnZTogMyxcbn07XG5cbmV4cG9ydCBjb25zdCBRQWNjb3VudFR5cGUgPSB7XG4gICAgdW5pbml0OiAwLFxuICAgIGFjdGl2ZTogMSxcbiAgICBmcm96ZW46IDIsXG59O1xuXG5leHBvcnQgY29uc3QgUVRyYW5zYWN0aW9uVHlwZSA9IHtcbiAgICBvcmRpbmFyeTogMCxcbiAgICBzdG9yYWdlOiAxLFxuICAgIHRpY2s6IDIsXG4gICAgdG9jazogMyxcbiAgICBzcGxpdFByZXBhcmU6IDQsXG4gICAgc3BsaXRJbnN0YWxsOiA1LFxuICAgIG1lcmdlUHJlcGFyZTogNixcbiAgICBtZXJnZUluc3RhbGw6IDcsXG59O1xuXG5leHBvcnQgY29uc3QgUVRyYW5zYWN0aW9uUHJvY2Vzc2luZ1N0YXR1cyA9IHtcbiAgICB1bmtub3duOiAwLFxuICAgIHByZWxpbWluYXJ5OiAxLFxuICAgIHByb3Bvc2VkOiAyLFxuICAgIGZpbmFsaXplZDogMyxcbiAgICByZWZ1c2VkOiA0LFxufTtcblxuZXhwb3J0IGNvbnN0IFFBY2NvdW50U3RhdHVzID0ge1xuICAgIHVuaW5pdDogMCxcbiAgICBhY3RpdmU6IDEsXG4gICAgZnJvemVuOiAyLFxuICAgIG5vbkV4aXN0OiAzLFxufTtcblxuZXhwb3J0IGNvbnN0IFFBY2NvdW50U3RhdHVzQ2hhbmdlID0ge1xuICAgIHVuY2hhbmdlZDogMCxcbiAgICBmcm96ZW46IDEsXG4gICAgZGVsZXRlZDogMixcbn07XG5cbmV4cG9ydCBjb25zdCBRQ29tcHV0ZVR5cGUgPSB7XG4gICAgc2tpcHBlZDogMCxcbiAgICB2bTogMSxcbn07XG5cbmV4cG9ydCBjb25zdCBRU2tpcFJlYXNvbiA9IHtcbiAgICBub1N0YXRlOiAwLFxuICAgIGJhZFN0YXRlOiAxLFxuICAgIG5vR2FzOiAyLFxufTtcblxuZXhwb3J0IGNvbnN0IFFCb3VuY2VUeXBlID0ge1xuICAgIG5lZ0Z1bmRzOiAwLFxuICAgIG5vRnVuZHM6IDEsXG4gICAgb2s6IDIsXG59O1xuXG5jb25zdCBNQVNURVJDSEFJTl9JRCA9IC0xO1xuXG5jb25zdCBFWFRSQV9UUkFOU0FDVElPTl9XQUlUSU5HX1RJTUUgPSAxMDAwMDtcbmNvbnN0IEJMT0NLX1RSQU5TQUNUSU9OX1dBSVRJTkdfVElNRSA9IDUwMDA7XG5cbmZ1bmN0aW9uIHJlbW92ZVR5cGVOYW1lKG9iajogYW55KSB7XG4gICAgaWYgKG9iai5fX3R5cGVuYW1lKSB7XG4gICAgICAgIGRlbGV0ZSBvYmouX190eXBlbmFtZTtcbiAgICB9XG4gICAgT2JqZWN0LnZhbHVlcyhvYmopXG4gICAgICAgIC5mb3JFYWNoKCh2YWx1ZSkgPT4ge1xuICAgICAgICAgICAgaWYgKCEhdmFsdWUgJiYgdHlwZW9mIHZhbHVlID09PSAnb2JqZWN0Jykge1xuICAgICAgICAgICAgICAgIHJlbW92ZVR5cGVOYW1lKHZhbHVlKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfSk7XG59XG5cbmV4cG9ydCBmdW5jdGlvbiByZW1vdmVQcm9wcyhvYmo6IHt9LCBwYXRoczogc3RyaW5nW10pOiB7fSB7XG4gICAgbGV0IHJlc3VsdCA9IG9iajtcbiAgICBwYXRocy5mb3JFYWNoKChwYXRoKSA9PiB7XG4gICAgICAgIGNvbnN0IGRvdFBvcyA9IHBhdGguaW5kZXhPZignLicpO1xuICAgICAgICBpZiAoZG90UG9zIDwgMCkge1xuICAgICAgICAgICAgaWYgKHBhdGggaW4gcmVzdWx0KSB7XG4gICAgICAgICAgICAgICAgcmVzdWx0ID0geyAuLi5yZXN1bHQgfTtcbiAgICAgICAgICAgICAgICBkZWxldGUgcmVzdWx0W3BhdGhdO1xuICAgICAgICAgICAgfVxuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgY29uc3QgbmFtZSA9IHBhdGguc3Vic3RyKDAsIGRvdFBvcyk7XG4gICAgICAgICAgICBjb25zdCBjaGlsZCA9IHJlc3VsdFtuYW1lXTtcbiAgICAgICAgICAgIGlmIChjaGlsZCkge1xuICAgICAgICAgICAgICAgIGNvbnN0IHJlZHVjZWRDaGlsZCA9IHJlbW92ZVByb3BzKGNoaWxkLCBbcGF0aC5zdWJzdHIoZG90UG9zICsgMSldKTtcbiAgICAgICAgICAgICAgICBpZiAocmVkdWNlZENoaWxkICE9PSBjaGlsZCkge1xuICAgICAgICAgICAgICAgICAgICByZXN1bHQgPSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAuLi5yZXN1bHQsXG4gICAgICAgICAgICAgICAgICAgICAgICBbbmFtZV06IHJlZHVjZWRDaGlsZCxcbiAgICAgICAgICAgICAgICAgICAgfTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICB9KTtcbiAgICByZXR1cm4gcmVzdWx0O1xufVxuXG5mdW5jdGlvbiBzdGFydE1lc3NhZ2VUcmFjZVNwYW4oXG4gICAgdHJhY2VyOiBUcmFjZXIsXG4gICAgbWVzc2FnZUlkOiBzdHJpbmcsXG4gICAgb3BlcmF0aW9uTmFtZTogc3RyaW5nLFxuICAgIHRhZ3M6IHsgW3N0cmluZ106IGFueSB9LFxuKTogP1NwYW4ge1xuICAgIGlmICghbWVzc2FnZUlkKSB7XG4gICAgICAgIHJldHVybiBudWxsO1xuICAgIH1cbiAgICBjb25zdCB0cmFjZUlkID0gbWVzc2FnZUlkLnN1YnN0cigwLCAxNik7XG4gICAgY29uc3Qgc3BhbklkID0gbWVzc2FnZUlkLnN1YnN0cigxNiwgMTYpO1xuICAgIGxldCByb290Q29udGV4dDogP1NwYW5Db250ZXh0ID0gbnVsbDtcbiAgICB0cnkge1xuICAgICAgICByb290Q29udGV4dCA9IHRyYWNlci5leHRyYWN0KEZPUk1BVF9URVhUX01BUCwge1xuICAgICAgICAgICAgJ3ViZXItdHJhY2UtaWQnOiBgJHt0cmFjZUlkfToke3NwYW5JZH06MDoxYCxcbiAgICAgICAgfSk7XG4gICAgfSBjYXRjaCB7XG4gICAgICAgIC8vIHRyYWNlciBjYW4ndCBjcmVhdGUgamFlZ2VyIGNvbXBhdGlibGUgc3BhbixcbiAgICAgICAgLy8gc28gd2UgYXJlIGZhbGxiYWNrIHRvIHJldHVybiBudWxsXG4gICAgfVxuICAgIGlmICghcm9vdENvbnRleHQpIHtcbiAgICAgICAgcmV0dXJuIG51bGw7XG4gICAgfVxuICAgIHJldHVybiB0cmFjZXIuc3RhcnRTcGFuKG9wZXJhdGlvbk5hbWUsIHtcbiAgICAgICAgY2hpbGRPZjogcm9vdENvbnRleHQsXG4gICAgICAgIHRhZ3MsXG4gICAgfSlcbn1cblxuZnVuY3Rpb24gdHJhY2VNZXNzYWdlKFxuICAgIHRyYWNlcjogVHJhY2VyLFxuICAgIG1lc3NhZ2VJZDogc3RyaW5nLFxuICAgIG9wZXJhdGlvbk5hbWU6IHN0cmluZyxcbiAgICB0YWdzOiB7IFtzdHJpbmddOiBhbnkgfSxcbikge1xuICAgIGNvbnN0IHNwYW4gPSBzdGFydE1lc3NhZ2VUcmFjZVNwYW4odHJhY2VyLCBtZXNzYWdlSWQsIG9wZXJhdGlvbk5hbWUsIHRhZ3MpO1xuICAgIGlmIChzcGFuKSB7XG4gICAgICAgIHNwYW4uZmluaXNoKCk7XG4gICAgfVxufVxuXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBUT05Db250cmFjdHNNb2R1bGUgZXh0ZW5kcyBUT05Nb2R1bGUgaW1wbGVtZW50cyBUT05Db250cmFjdHMge1xuICAgIGNvbmZpZzogVE9OQ29uZmlnTW9kdWxlO1xuXG4gICAgcXVlcmllczogVE9OUXVlcmllc01vZHVsZTtcblxuICAgIGFzeW5jIHNldHVwKCk6IFByb21pc2U8Kj4ge1xuICAgICAgICB0aGlzLmNvbmZpZyA9IHRoaXMuY29udGV4dC5nZXRNb2R1bGUoVE9OQ29uZmlnTW9kdWxlKTtcbiAgICAgICAgdGhpcy5xdWVyaWVzID0gdGhpcy5jb250ZXh0LmdldE1vZHVsZShUT05RdWVyaWVzTW9kdWxlKTtcbiAgICB9XG5cbiAgICBhc3luYyBsb2FkKFxuICAgICAgICBwYXJhbXM6IFRPTkNvbnRyYWN0TG9hZFBhcmFtcyxcbiAgICAgICAgcGFyZW50U3Bhbj86IChTcGFuIHwgU3BhbkNvbnRleHQpLFxuICAgICk6IFByb21pc2U8VE9OQ29udHJhY3RMb2FkUmVzdWx0PiB7XG4gICAgICAgIGNvbnN0IGFjY291bnRzOiBRQWNjb3VudFtdID0gYXdhaXQgdGhpcy5xdWVyaWVzLmFjY291bnRzLnF1ZXJ5KHtcbiAgICAgICAgICAgIGZpbHRlcjoge1xuICAgICAgICAgICAgICAgIGlkOiB7IGVxOiBwYXJhbXMuYWRkcmVzcyB9LFxuICAgICAgICAgICAgfSxcbiAgICAgICAgICAgIHJlc3VsdDogJ2JhbGFuY2UnLFxuICAgICAgICAgICAgcGFyZW50U3BhbixcbiAgICAgICAgfSk7XG4gICAgICAgIGlmIChhY2NvdW50cyAmJiBhY2NvdW50cy5sZW5ndGggPiAwKSB7XG4gICAgICAgICAgICByZXR1cm4ge1xuICAgICAgICAgICAgICAgIGlkOiBwYXJhbXMuYWRkcmVzcyxcbiAgICAgICAgICAgICAgICBiYWxhbmNlR3JhbXM6IGFjY291bnRzWzBdLmJhbGFuY2UsXG4gICAgICAgICAgICB9O1xuICAgICAgICB9XG4gICAgICAgIHJldHVybiB7XG4gICAgICAgICAgICBpZDogbnVsbCxcbiAgICAgICAgICAgIGJhbGFuY2VHcmFtczogbnVsbCxcbiAgICAgICAgfTtcbiAgICB9XG5cblxuICAgIC8vIEZhY2FkZSBmdW5jdGlvbnNcblxuICAgIGFzeW5jIGRlcGxveShcbiAgICAgICAgcGFyYW1zOiBUT05Db250cmFjdERlcGxveVBhcmFtcyxcbiAgICAgICAgcGFyZW50U3Bhbj86IChTcGFuIHwgU3BhbkNvbnRleHQpLFxuICAgICk6IFByb21pc2U8VE9OQ29udHJhY3REZXBsb3lSZXN1bHQ+IHtcbiAgICAgICAgcmV0dXJuIHRoaXMuY29udGV4dC50cmFjZSgnY29udHJhY3RzLmRlcGxveScsIGFzeW5jIChzcGFuOiBTcGFuKSA9PiB7XG4gICAgICAgICAgICBzcGFuLnNldFRhZygncGFyYW1zJywgcmVtb3ZlUHJvcHMocGFyYW1zLCBbJ2tleVBhaXIuc2VjcmV0J10pKTtcbiAgICAgICAgICAgIHJldHVybiB0aGlzLmludGVybmFsRGVwbG95SnMocGFyYW1zLCBzcGFuKTtcbiAgICAgICAgfSwgcGFyZW50U3Bhbik7XG4gICAgfVxuXG5cbiAgICBhc3luYyBydW4oXG4gICAgICAgIHBhcmFtczogVE9OQ29udHJhY3RSdW5QYXJhbXMsXG4gICAgICAgIHBhcmVudFNwYW4/OiAoU3BhbiB8IFNwYW5Db250ZXh0KSxcbiAgICApOiBQcm9taXNlPFRPTkNvbnRyYWN0UnVuUmVzdWx0PiB7XG4gICAgICAgIHJldHVybiB0aGlzLmNvbnRleHQudHJhY2UoJ2NvbnRyYWN0cy5ydW4nLCBhc3luYyAoc3BhbjogU3BhbikgPT4ge1xuICAgICAgICAgICAgc3Bhbi5zZXRUYWcoJ3BhcmFtcycsIHJlbW92ZVByb3BzKHBhcmFtcywgWydrZXlQYWlyLnNlY3JldCddKSk7XG4gICAgICAgICAgICByZXR1cm4gdGhpcy5pbnRlcm5hbFJ1bkpzKHBhcmFtcywgc3Bhbik7XG4gICAgICAgIH0sIHBhcmVudFNwYW4pO1xuICAgIH1cblxuICAgIGFzeW5jIHJ1bkxvY2FsKFxuICAgICAgICBwYXJhbXM6IFRPTkNvbnRyYWN0UnVuTG9jYWxQYXJhbXMsXG4gICAgICAgIHBhcmVudFNwYW4/OiAoU3BhbiB8IFNwYW5Db250ZXh0KSxcbiAgICApOiBQcm9taXNlPFRPTkNvbnRyYWN0UnVuTG9jYWxSZXN1bHQ+IHtcbiAgICAgICAgcmV0dXJuIHRoaXMuY29udGV4dC50cmFjZSgnY29udHJhY3RzLnJ1bkxvY2FsJywgYXN5bmMgKHNwYW46IFNwYW4pID0+IHtcbiAgICAgICAgICAgIHNwYW4uc2V0VGFnKCdwYXJhbXMnLCByZW1vdmVQcm9wcyhwYXJhbXMsIFsna2V5UGFpci5zZWNyZXQnXSkpO1xuICAgICAgICAgICAgcmV0dXJuIHRoaXMuaW50ZXJuYWxSdW5Mb2NhbEpzKHBhcmFtcywgc3Bhbik7XG4gICAgICAgIH0sIHBhcmVudFNwYW4pO1xuICAgIH1cblxuICAgIGFzeW5jIHJ1bk1lc3NhZ2VMb2NhbChcbiAgICAgICAgcGFyYW1zOiBUT05Db250cmFjdFJ1bk1lc3NhZ2VMb2NhbFBhcmFtcyxcbiAgICAgICAgcGFyZW50U3Bhbj86IChTcGFuIHwgU3BhbkNvbnRleHQpLFxuICAgICk6IFByb21pc2U8VE9OQ29udHJhY3RSdW5Mb2NhbFJlc3VsdD4ge1xuICAgICAgICByZXR1cm4gdGhpcy5jb250ZXh0LnRyYWNlKCdydW5NZXNzYWdlTG9jYWwnLCBhc3luYyAoc3BhbjogU3BhbikgPT4ge1xuICAgICAgICAgICAgc3Bhbi5zZXRUYWcoJ3BhcmFtcycsIHJlbW92ZVByb3BzKHBhcmFtcywgWydrZXlQYWlyLnNlY3JldCddKSk7XG4gICAgICAgICAgICByZXR1cm4gdGhpcy5pbnRlcm5hbFJ1bk1lc3NhZ2VMb2NhbEpzKHBhcmFtcywgc3Bhbik7XG4gICAgICAgIH0sIHBhcmVudFNwYW4pO1xuICAgIH1cblxuICAgIGFzeW5jIHJ1bkdldChcbiAgICAgICAgcGFyYW1zOiBUT05Db250cmFjdFJ1bkdldFBhcmFtcyxcbiAgICApOiBQcm9taXNlPFRPTkNvbnRyYWN0UnVuR2V0UmVzdWx0PiB7XG4gICAgICAgIGxldCBjb3JlUGFyYW1zOiBUT05Db250cmFjdFJ1bkdldFBhcmFtcyA9IHBhcmFtcztcbiAgICAgICAgY29uc3QgaGFzQ29kZSA9IHBhcmFtcy5ib2NCYXNlNjQgfHwgKHBhcmFtcy5jb2RlQmFzZTY0ICYmIHBhcmFtcy5kYXRhQmFzZTY0KTtcbiAgICAgICAgaWYgKCFoYXNDb2RlKSB7XG4gICAgICAgICAgICBjb25zdCBhZGRyZXNzID0gcGFyYW1zLmFkZHJlc3M7XG4gICAgICAgICAgICBpZiAoIWFkZHJlc3MpIHtcbiAgICAgICAgICAgICAgICB0aHJvdyBUT05DbGllbnRFcnJvci5hZGRyZXNzUmVxdWlyZWRGb3JSdW5Mb2NhbCgpO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgY29uc3QgYWNjb3VudDogYW55ID0gYXdhaXQgdGhpcy5nZXRBY2NvdW50KGFkZHJlc3MsIGZhbHNlLCB7XG4gICAgICAgICAgICAgICAgdGltZW91dDogdGhpcy5jb25maWcud2FpdEZvclRpbWVvdXQoKSxcbiAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgaWYgKCFhY2NvdW50LmNvZGVfaGFzaCkge1xuICAgICAgICAgICAgICAgIHRocm93IFRPTkNsaWVudEVycm9yLmFjY291bnRDb2RlTWlzc2luZyhhZGRyZXNzLCBhY2NvdW50LmJhbGFuY2UpO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgY29uc3QgcGFyYW1zRnJvbUFjY291bnQ6ICRTaGFwZTxUT05Db250cmFjdFJ1bkdldFBhcmFtcz4gPSB7fTtcbiAgICAgICAgICAgIGlmIChhY2NvdW50LmJvYykge1xuICAgICAgICAgICAgICAgIHBhcmFtc0Zyb21BY2NvdW50LmJvY0Jhc2U2NCA9IGFjY291bnQuYm9jO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgaWYgKGFjY291bnQubGFzdF9wYWlkKSB7XG4gICAgICAgICAgICAgICAgcGFyYW1zRnJvbUFjY291bnQubGFzdF9wYWlkID0gYWNjb3VudC5sYXN0X3BhaWQ7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBpZiAoYWNjb3VudC5iYWxhbmNlKSB7XG4gICAgICAgICAgICAgICAgcGFyYW1zRnJvbUFjY291bnQuYmFsYW5jZSA9IGFjY291bnQuYmFsYW5jZTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGNvcmVQYXJhbXMgPSB7XG4gICAgICAgICAgICAgICAgLi4ucGFyYW1zRnJvbUFjY291bnQsXG4gICAgICAgICAgICAgICAgLi4ucGFyYW1zLFxuICAgICAgICAgICAgfTtcbiAgICAgICAgfVxuICAgICAgICByZXR1cm4gdGhpcy5yZXF1ZXN0Q29yZSgndHZtLmdldCcsIGNvcmVQYXJhbXMpO1xuICAgIH1cblxuICAgIGFycmF5RnJvbUNPTlMoY29uczogYW55W10pOiBhbnlbXSB7XG4gICAgICAgIGNvbnN0IHJlc3VsdCA9IFtdO1xuICAgICAgICBsZXQgaXRlbSA9IGNvbnM7XG4gICAgICAgIHdoaWxlIChpdGVtKSB7XG4gICAgICAgICAgICBpZiAoIWl0ZW0ubGVuZ3RoID09PSAyKSB7XG4gICAgICAgICAgICAgICAgdGhyb3cgVE9OQ2xpZW50RXJyb3IuaW52YWxpZENvbnMoKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIHJlc3VsdC5wdXNoKGl0ZW1bMF0pO1xuICAgICAgICAgICAgaXRlbSA9IGl0ZW1bMV07XG4gICAgICAgIH1cbiAgICAgICAgcmV0dXJuIHJlc3VsdDtcbiAgICB9XG5cblxuICAgIC8vIE1lc3NhZ2UgY3JlYXRpb25cblxuICAgIGFzeW5jIGNyZWF0ZURlcGxveU1lc3NhZ2UoXG4gICAgICAgIHBhcmFtczogVE9OQ29udHJhY3REZXBsb3lQYXJhbXMsXG4gICAgICAgIHJldHJ5SW5kZXg/OiBudW1iZXIsXG4gICAgKTogUHJvbWlzZTxUT05Db250cmFjdERlcGxveU1lc3NhZ2U+IHtcbiAgICAgICAgdGhpcy5jb25maWcubG9nKCdjcmVhdGVEZXBsb3lNZXNzYWdlJywgcGFyYW1zKTtcbiAgICAgICAgY29uc3QgbWVzc2FnZTogVE9OQ29udHJhY3RNZXNzYWdlID0gYXdhaXQgdGhpcy5yZXF1ZXN0Q29yZSgnY29udHJhY3RzLmRlcGxveS5tZXNzYWdlJywge1xuICAgICAgICAgICAgYWJpOiBwYXJhbXMucGFja2FnZS5hYmksXG4gICAgICAgICAgICBjb25zdHJ1Y3RvckhlYWRlcjogcGFyYW1zLmNvbnN0cnVjdG9ySGVhZGVyLFxuICAgICAgICAgICAgY29uc3RydWN0b3JQYXJhbXM6IHBhcmFtcy5jb25zdHJ1Y3RvclBhcmFtcyxcbiAgICAgICAgICAgIGluaXRQYXJhbXM6IHBhcmFtcy5pbml0UGFyYW1zLFxuICAgICAgICAgICAgaW1hZ2VCYXNlNjQ6IHBhcmFtcy5wYWNrYWdlLmltYWdlQmFzZTY0LFxuICAgICAgICAgICAga2V5UGFpcjogcGFyYW1zLmtleVBhaXIsXG4gICAgICAgICAgICB3b3JrY2hhaW5JZDogcGFyYW1zLndvcmtjaGFpbklkLFxuICAgICAgICB9KTtcbiAgICAgICAgcmV0dXJuIHtcbiAgICAgICAgICAgIG1lc3NhZ2UsXG4gICAgICAgICAgICBhZGRyZXNzOiBtZXNzYWdlLmFkZHJlc3MsXG4gICAgICAgIH07XG4gICAgfVxuXG5cbiAgICBhc3luYyBjcmVhdGVSdW5NZXNzYWdlKFxuICAgICAgICBwYXJhbXM6IFRPTkNvbnRyYWN0UnVuUGFyYW1zLFxuICAgICAgICByZXRyeUluZGV4PzogbnVtYmVyLFxuICAgICk6IFByb21pc2U8VE9OQ29udHJhY3RSdW5NZXNzYWdlPiB7XG4gICAgICAgIHRoaXMuY29uZmlnLmxvZygnY3JlYXRlUnVuTWVzc2FnZScsIHBhcmFtcyk7XG4gICAgICAgIGNvbnN0IG1lc3NhZ2UgPSBhd2FpdCB0aGlzLnJlcXVlc3RDb3JlKCdjb250cmFjdHMucnVuLm1lc3NhZ2UnLCB7XG4gICAgICAgICAgICBhZGRyZXNzOiBwYXJhbXMuYWRkcmVzcyxcbiAgICAgICAgICAgIGFiaTogcGFyYW1zLmFiaSxcbiAgICAgICAgICAgIGZ1bmN0aW9uTmFtZTogcGFyYW1zLmZ1bmN0aW9uTmFtZSxcbiAgICAgICAgICAgIGhlYWRlcjogcGFyYW1zLmhlYWRlcixcbiAgICAgICAgICAgIHRyeUluZGV4OiByZXRyeUluZGV4LFxuICAgICAgICAgICAgaW5wdXQ6IHBhcmFtcy5pbnB1dCxcbiAgICAgICAgICAgIGtleVBhaXI6IHBhcmFtcy5rZXlQYWlyLFxuICAgICAgICB9KTtcbiAgICAgICAgcmV0dXJuIHtcbiAgICAgICAgICAgIGFkZHJlc3M6IHBhcmFtcy5hZGRyZXNzLFxuICAgICAgICAgICAgYWJpOiBwYXJhbXMuYWJpLFxuICAgICAgICAgICAgZnVuY3Rpb25OYW1lOiBwYXJhbXMuZnVuY3Rpb25OYW1lLFxuICAgICAgICAgICAgbWVzc2FnZSxcbiAgICAgICAgfTtcbiAgICB9XG5cbiAgICBhc3luYyBjcmVhdGVVbnNpZ25lZERlcGxveU1lc3NhZ2UoXG4gICAgICAgIHBhcmFtczogVE9OQ29udHJhY3REZXBsb3lQYXJhbXMsXG4gICAgICAgIHJldHJ5SW5kZXg/OiBudW1iZXIsXG4gICAgKTogUHJvbWlzZTxUT05Db250cmFjdFVuc2lnbmVkRGVwbG95TWVzc2FnZT4ge1xuICAgICAgICBjb25zdCByZXN1bHQ6IHtcbiAgICAgICAgICAgIGVuY29kZWQ6IFRPTkNvbnRyYWN0VW5zaWduZWRNZXNzYWdlLFxuICAgICAgICAgICAgYWRkcmVzc0hleDogc3RyaW5nLFxuICAgICAgICB9ID0gYXdhaXQgdGhpcy5yZXF1ZXN0Q29yZSgnY29udHJhY3RzLmRlcGxveS5lbmNvZGVfdW5zaWduZWRfbWVzc2FnZScsIHtcbiAgICAgICAgICAgIGFiaTogcGFyYW1zLnBhY2thZ2UuYWJpLFxuICAgICAgICAgICAgY29uc3RydWN0b3JIZWFkZXI6IHBhcmFtcy5jb25zdHJ1Y3RvckhlYWRlcixcbiAgICAgICAgICAgIHRyeUluZGV4OiByZXRyeUluZGV4LFxuICAgICAgICAgICAgY29uc3RydWN0b3JQYXJhbXM6IHBhcmFtcy5jb25zdHJ1Y3RvclBhcmFtcyxcbiAgICAgICAgICAgIGluaXRQYXJhbXM6IHBhcmFtcy5pbml0UGFyYW1zLFxuICAgICAgICAgICAgaW1hZ2VCYXNlNjQ6IHBhcmFtcy5wYWNrYWdlLmltYWdlQmFzZTY0LFxuICAgICAgICAgICAgcHVibGljS2V5SGV4OiBwYXJhbXMua2V5UGFpci5wdWJsaWMsXG4gICAgICAgICAgICB3b3JrY2hhaW5JZDogcGFyYW1zLndvcmtjaGFpbklkLFxuICAgICAgICB9KTtcbiAgICAgICAgcmV0dXJuIHtcbiAgICAgICAgICAgIGFkZHJlc3M6IHJlc3VsdC5hZGRyZXNzSGV4LFxuICAgICAgICAgICAgc2lnblBhcmFtczoge1xuICAgICAgICAgICAgICAgIC4uLnJlc3VsdC5lbmNvZGVkLFxuICAgICAgICAgICAgICAgIGFiaTogcGFyYW1zLnBhY2thZ2UuYWJpLFxuICAgICAgICAgICAgfSxcbiAgICAgICAgfTtcbiAgICB9XG5cblxuICAgIGFzeW5jIGNyZWF0ZVVuc2lnbmVkUnVuTWVzc2FnZShcbiAgICAgICAgcGFyYW1zOiBUT05Db250cmFjdFJ1blBhcmFtcyxcbiAgICAgICAgcmV0cnlJbmRleD86IG51bWJlcixcbiAgICApOiBQcm9taXNlPFRPTkNvbnRyYWN0VW5zaWduZWRSdW5NZXNzYWdlPiB7XG4gICAgICAgIGNvbnN0IHNpZ25QYXJhbXMgPSBhd2FpdCB0aGlzLnJlcXVlc3RDb3JlKCdjb250cmFjdHMucnVuLmVuY29kZV91bnNpZ25lZF9tZXNzYWdlJywge1xuICAgICAgICAgICAgYWRkcmVzczogcGFyYW1zLmFkZHJlc3MsXG4gICAgICAgICAgICBhYmk6IHBhcmFtcy5hYmksXG4gICAgICAgICAgICBmdW5jdGlvbk5hbWU6IHBhcmFtcy5mdW5jdGlvbk5hbWUsXG4gICAgICAgICAgICBoZWFkZXI6IHBhcmFtcy5oZWFkZXIsXG4gICAgICAgICAgICB0cnlJbmRleDogcmV0cnlJbmRleCxcbiAgICAgICAgICAgIGlucHV0OiBwYXJhbXMuaW5wdXQsXG4gICAgICAgIH0pO1xuICAgICAgICByZXR1cm4ge1xuICAgICAgICAgICAgYWRkcmVzczogcGFyYW1zLmFkZHJlc3MsXG4gICAgICAgICAgICBmdW5jdGlvbk5hbWU6IHBhcmFtcy5mdW5jdGlvbk5hbWUsXG4gICAgICAgICAgICBzaWduUGFyYW1zOiB7XG4gICAgICAgICAgICAgICAgLi4uc2lnblBhcmFtcyxcbiAgICAgICAgICAgICAgICBhYmk6IHBhcmFtcy5hYmksXG4gICAgICAgICAgICB9LFxuICAgICAgICB9O1xuICAgIH1cblxuXG4gICAgYXN5bmMgY3JlYXRlU2lnbmVkTWVzc2FnZShcbiAgICAgICAgcGFyYW1zOiBUT05Db250cmFjdENyZWF0ZVNpZ25lZE1lc3NhZ2VQYXJhbXMsXG4gICAgKTogUHJvbWlzZTxUT05Db250cmFjdE1lc3NhZ2U+IHtcbiAgICAgICAgcmV0dXJuIHRoaXMucmVxdWVzdENvcmUoJ2NvbnRyYWN0cy5lbmNvZGVfbWVzc2FnZV93aXRoX3NpZ24nLCBwYXJhbXMpO1xuICAgIH1cblxuXG4gICAgYXN5bmMgY3JlYXRlU2lnbmVkRGVwbG95TWVzc2FnZShcbiAgICAgICAgcGFyYW1zOiBUT05Db250cmFjdENyZWF0ZVNpZ25lZERlcGxveU1lc3NhZ2VQYXJhbXMsXG4gICAgKTogUHJvbWlzZTxUT05Db250cmFjdERlcGxveU1lc3NhZ2U+IHtcbiAgICAgICAgY29uc3QgbWVzc2FnZSA9IGF3YWl0IHRoaXMuY3JlYXRlU2lnbmVkTWVzc2FnZSh7XG4gICAgICAgICAgICBhYmk6IHBhcmFtcy51bnNpZ25lZE1lc3NhZ2Uuc2lnblBhcmFtcy5hYmksXG4gICAgICAgICAgICB1bnNpZ25lZEJ5dGVzQmFzZTY0OiBwYXJhbXMudW5zaWduZWRNZXNzYWdlLnNpZ25QYXJhbXMudW5zaWduZWRCeXRlc0Jhc2U2NCxcbiAgICAgICAgICAgIHNpZ25CeXRlc0Jhc2U2NDogcGFyYW1zLnNpZ25CeXRlc0Jhc2U2NCxcbiAgICAgICAgICAgIHB1YmxpY0tleUhleDogcGFyYW1zLnB1YmxpY0tleUhleCxcbiAgICAgICAgfSk7XG4gICAgICAgIG1lc3NhZ2UuZXhwaXJlID0gcGFyYW1zLnVuc2lnbmVkTWVzc2FnZS5zaWduUGFyYW1zLmV4cGlyZTtcbiAgICAgICAgcmV0dXJuIHtcbiAgICAgICAgICAgIGFkZHJlc3M6IHBhcmFtcy51bnNpZ25lZE1lc3NhZ2UuYWRkcmVzcyxcbiAgICAgICAgICAgIG1lc3NhZ2UsXG4gICAgICAgIH07XG4gICAgfVxuXG5cbiAgICBhc3luYyBjcmVhdGVTaWduZWRSdW5NZXNzYWdlKFxuICAgICAgICBwYXJhbXM6IFRPTkNvbnRyYWN0Q3JlYXRlU2lnbmVkUnVuTWVzc2FnZVBhcmFtcyxcbiAgICApOiBQcm9taXNlPFRPTkNvbnRyYWN0UnVuTWVzc2FnZT4ge1xuICAgICAgICBjb25zdCBtZXNzYWdlID0gYXdhaXQgdGhpcy5jcmVhdGVTaWduZWRNZXNzYWdlKHtcbiAgICAgICAgICAgIGFiaTogcGFyYW1zLnVuc2lnbmVkTWVzc2FnZS5zaWduUGFyYW1zLmFiaSxcbiAgICAgICAgICAgIHVuc2lnbmVkQnl0ZXNCYXNlNjQ6IHBhcmFtcy51bnNpZ25lZE1lc3NhZ2Uuc2lnblBhcmFtcy51bnNpZ25lZEJ5dGVzQmFzZTY0LFxuICAgICAgICAgICAgc2lnbkJ5dGVzQmFzZTY0OiBwYXJhbXMuc2lnbkJ5dGVzQmFzZTY0LFxuICAgICAgICAgICAgcHVibGljS2V5SGV4OiBwYXJhbXMucHVibGljS2V5SGV4LFxuICAgICAgICB9KTtcbiAgICAgICAgbWVzc2FnZS5leHBpcmUgPSBwYXJhbXMudW5zaWduZWRNZXNzYWdlLnNpZ25QYXJhbXMuZXhwaXJlO1xuICAgICAgICByZXR1cm4ge1xuICAgICAgICAgICAgYWRkcmVzczogcGFyYW1zLnVuc2lnbmVkTWVzc2FnZS5hZGRyZXNzLFxuICAgICAgICAgICAgYWJpOiBwYXJhbXMudW5zaWduZWRNZXNzYWdlLnNpZ25QYXJhbXMuYWJpLFxuICAgICAgICAgICAgZnVuY3Rpb25OYW1lOiBwYXJhbXMudW5zaWduZWRNZXNzYWdlLmZ1bmN0aW9uTmFtZSxcbiAgICAgICAgICAgIG1lc3NhZ2UsXG4gICAgICAgIH07XG4gICAgfVxuXG4gICAgYXN5bmMgZ2V0Q29kZUZyb21JbWFnZShcbiAgICAgICAgcGFyYW1zOiBUT05Db250cmFjdEdldENvZGVGcm9tSW1hZ2VQYXJhbXMsXG4gICAgKTogUHJvbWlzZTxUT05Db250cmFjdEdldENvZGVGcm9tSW1hZ2VSZXN1bHQ+IHtcbiAgICAgICAgcmV0dXJuIHRoaXMucmVxdWVzdENvcmUoJ2NvbnRyYWN0cy5pbWFnZS5jb2RlJywgcGFyYW1zKTtcbiAgICB9XG5cbiAgICBhc3luYyBnZXREZXBsb3lEYXRhKFxuICAgICAgICBwYXJhbXM6IFRPTkNvbnRyYWN0R2V0RGVwbG95RGF0YVBhcmFtcyxcbiAgICApOiBQcm9taXNlPFRPTkNvbnRyYWN0R2V0RGVwbG95RGF0YVJlc3VsdD4ge1xuICAgICAgICByZXR1cm4gdGhpcy5yZXF1ZXN0Q29yZSgnY29udHJhY3RzLmRlcGxveS5kYXRhJywgcGFyYW1zKTtcbiAgICB9XG5cbiAgICBhc3luYyBjcmVhdGVSdW5Cb2R5KFxuICAgICAgICBwYXJhbXM6IFRPTkNvbnRyYWN0Q3JlYXRlUnVuQm9keVBhcmFtcyxcbiAgICApOiBQcm9taXNlPFRPTkNvbnRyYWN0Q3JlYXRlUnVuQm9keVJlc3VsdD4ge1xuICAgICAgICByZXR1cm4gdGhpcy5yZXF1ZXN0Q29yZSgnY29udHJhY3RzLnJ1bi5ib2R5JywgcGFyYW1zKTtcbiAgICB9XG5cbiAgICBhc3luYyBnZXRGdW5jdGlvbklkKFxuICAgICAgICBwYXJhbXM6IFRPTkNvbnRyYWN0R2V0RnVuY3Rpb25JZFBhcmFtcyxcbiAgICApOiBQcm9taXNlPFRPTkNvbnRyYWN0R2V0RnVuY3Rpb25JZFJlc3VsdD4ge1xuICAgICAgICByZXR1cm4gdGhpcy5yZXF1ZXN0Q29yZSgnY29udHJhY3RzLmZ1bmN0aW9uLmlkJywgcGFyYW1zKTtcbiAgICB9XG5cbiAgICBhc3luYyBnZXRCb2NIYXNoKFxuICAgICAgICBwYXJhbXM6IFRPTkNvbnRyYWN0Qm9jLFxuICAgICk6IFByb21pc2U8VE9OQ29udHJhY3RHZXRCb2NIYXNoUmVzdWx0PiB7XG4gICAgICAgIHJldHVybiB0aGlzLnJlcXVlc3RDb3JlKCdjb250cmFjdHMuYm9jLmhhc2gnLCBwYXJhbXMpO1xuICAgIH1cblxuICAgIGFzeW5jIHBhcnNlTWVzc2FnZShcbiAgICAgICAgcGFyYW1zOiBUT05Db250cmFjdEJvYyxcbiAgICApOiBQcm9taXNlPFFNZXNzYWdlPiB7XG4gICAgICAgIHJldHVybiB0aGlzLnJlcXVlc3RDb3JlKCdjb250cmFjdHMucGFyc2UubWVzc2FnZScsIHBhcmFtcyk7XG4gICAgfVxuXG4gICAgLy8gTWVzc2FnZSBwYXJzaW5nXG5cbiAgICBhc3luYyBkZWNvZGVSdW5PdXRwdXQoXG4gICAgICAgIHBhcmFtczogVE9OQ29udHJhY3REZWNvZGVSdW5PdXRwdXRQYXJhbXMsXG4gICAgKTogUHJvbWlzZTxUT05Db250cmFjdFJ1blJlc3VsdD4ge1xuICAgICAgICByZXR1cm4gdGhpcy5yZXF1ZXN0Q29yZSgnY29udHJhY3RzLnJ1bi5vdXRwdXQnLCBwYXJhbXMpO1xuICAgIH1cblxuXG4gICAgYXN5bmMgZGVjb2RlSW5wdXRNZXNzYWdlQm9keShcbiAgICAgICAgcGFyYW1zOiBUT05Db250cmFjdERlY29kZU1lc3NhZ2VCb2R5UGFyYW1zLFxuICAgICk6IFByb21pc2U8VE9OQ29udHJhY3REZWNvZGVNZXNzYWdlQm9keVJlc3VsdD4ge1xuICAgICAgICByZXR1cm4gdGhpcy5yZXF1ZXN0Q29yZSgnY29udHJhY3RzLnJ1bi51bmtub3duLmlucHV0JywgcGFyYW1zKTtcbiAgICB9XG5cblxuICAgIGFzeW5jIGRlY29kZU91dHB1dE1lc3NhZ2VCb2R5KFxuICAgICAgICBwYXJhbXM6IFRPTkNvbnRyYWN0RGVjb2RlTWVzc2FnZUJvZHlQYXJhbXMsXG4gICAgKTogUHJvbWlzZTxUT05Db250cmFjdERlY29kZU1lc3NhZ2VCb2R5UmVzdWx0PiB7XG4gICAgICAgIHJldHVybiB0aGlzLnJlcXVlc3RDb3JlKCdjb250cmFjdHMucnVuLnVua25vd24ub3V0cHV0JywgcGFyYW1zKTtcbiAgICB9XG5cbiAgICAvLyBNZXNzYWdlIHByb2Nlc3NpbmdcblxuICAgIGFzeW5jIGVuc3VyZU1lc3NhZ2VJZChtZXNzYWdlOiBUT05Db250cmFjdE1lc3NhZ2UpOiBQcm9taXNlPHN0cmluZz4ge1xuICAgICAgICByZXR1cm4gbWVzc2FnZS5tZXNzYWdlSWQgfHwgYXdhaXQgKGFzeW5jICgpID0+IHtcbiAgICAgICAgICAgIGNvbnN0IGlkID0gKGF3YWl0IHRoaXMuZ2V0Qm9jSGFzaCh7XG4gICAgICAgICAgICAgICAgYm9jQmFzZTY0OiBtZXNzYWdlLm1lc3NhZ2VCb2R5QmFzZTY0LFxuICAgICAgICAgICAgfSkpLmhhc2g7XG4gICAgICAgICAgICBtZXNzYWdlLm1lc3NhZ2VJZCA9IGlkO1xuICAgICAgICAgICAgcmV0dXJuIGlkO1xuICAgICAgICB9KSgpO1xuICAgIH1cblxuICAgIGFzeW5jIHNlbmRNZXNzYWdlKFxuICAgICAgICBwYXJhbXM6IFRPTkNvbnRyYWN0TWVzc2FnZSxcbiAgICAgICAgcGFyZW50U3Bhbj86IChTcGFuIHwgU3BhbkNvbnRleHQpLFxuICAgICk6IFByb21pc2U8VE9OTWVzc2FnZVByb2Nlc3NpbmdTdGF0ZT4ge1xuICAgICAgICBjb25zdCBleHBpcmUgPSBwYXJhbXMuZXhwaXJlO1xuICAgICAgICBpZiAoZXhwaXJlICYmIChEYXRlLm5vdygpID4gZXhwaXJlICogMTAwMCkpIHtcbiAgICAgICAgICAgIHRocm93IFRPTkNsaWVudEVycm9yLnNlbmROb2RlUmVxdWVzdEZhaWxlZCgnTWVzc2FnZSBhbHJlYWR5IGV4cGlyZWQnKTtcbiAgICAgICAgfVxuICAgICAgICBjb25zdCBzZXJ2ZXJUaW1lRGVsdGEgPSBNYXRoLmFicyhhd2FpdCB0aGlzLnF1ZXJpZXMuc2VydmVyVGltZURlbHRhKHBhcmVudFNwYW4pKTtcbiAgICAgICAgaWYgKHNlcnZlclRpbWVEZWx0YSA+IHRoaXMuY29uZmlnLm91dE9mU3luY1RocmVzaG9sZCgpKSB7XG4gICAgICAgICAgICB0aGlzLnF1ZXJpZXMuZHJvcFNlcnZlclRpbWVEZWx0YSgpO1xuICAgICAgICAgICAgdGhyb3cgVE9OQ2xpZW50RXJyb3IuY2xvY2tPdXRPZlN5bmMoKTtcbiAgICAgICAgfVxuICAgICAgICBjb25zdCBsYXN0QmxvY2tJZCA9IGF3YWl0IHRoaXMuZmluZExhc3RTaGFyZEJsb2NrKHBhcmFtcy5hZGRyZXNzKTtcbiAgICAgICAgY29uc3QgaWQgPSBhd2FpdCB0aGlzLmVuc3VyZU1lc3NhZ2VJZChwYXJhbXMpO1xuICAgICAgICBjb25zdCBpZEJhc2U2NCA9IEJ1ZmZlci5mcm9tKGlkLCAnaGV4JykudG9TdHJpbmcoJ2Jhc2U2NCcpO1xuICAgICAgICBjb25zdCBtZXNzYWdlU3BhbiA9IHRoaXMuY29udGV4dC5zdGFydFJvb3RTcGFuKFxuICAgICAgICAgICAgaWQuc3Vic3RyKDAsIDE2KSxcbiAgICAgICAgICAgIGlkLnN1YnN0cigxNiwgMTYpLFxuICAgICAgICAgICAgJ21lc3NhZ2VQcm9jZXNzaW5nJyxcbiAgICAgICAgKTtcbiAgICAgICAgbWVzc2FnZVNwYW4uYWRkVGFncyh7XG4gICAgICAgICAgICBtZXNzYWdlSWQ6IGlkLFxuICAgICAgICAgICAgbWVzc2FnZVNpemU6IE1hdGguY2VpbChwYXJhbXMubWVzc2FnZUJvZHlCYXNlNjQubGVuZ3RoICogMyAvIDQpLFxuICAgICAgICAgICAgYWRkcmVzczogcGFyYW1zLmFkZHJlc3MsXG4gICAgICAgICAgICBleHBpcmU6IHBhcmFtcy5leHBpcmUsXG4gICAgICAgIH0pXG4gICAgICAgIGF3YWl0IHRoaXMucXVlcmllcy5wb3N0UmVxdWVzdHMoW1xuICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgIGlkOiBpZEJhc2U2NCxcbiAgICAgICAgICAgICAgICBib2R5OiBwYXJhbXMubWVzc2FnZUJvZHlCYXNlNjQsXG4gICAgICAgICAgICB9LFxuICAgICAgICBdLCBwYXJlbnRTcGFuKTtcbiAgICAgICAgbWVzc2FnZVNwYW4uZmluaXNoKCk7XG4gICAgICAgIHRoaXMuY29uZmlnLmxvZygnc2VuZE1lc3NhZ2UuIFJlcXVlc3QgcG9zdGVkJywgaWQpO1xuICAgICAgICByZXR1cm4ge1xuICAgICAgICAgICAgbGFzdEJsb2NrSWQsXG4gICAgICAgICAgICBzZW5kaW5nVGltZTogTWF0aC5yb3VuZChEYXRlLm5vdygpIC8gMTAwMCksXG4gICAgICAgIH07XG4gICAgfVxuXG4gICAgYXN5bmMgcHJvY2Vzc01lc3NhZ2UoXG4gICAgICAgIG1lc3NhZ2U6IFRPTkNvbnRyYWN0TWVzc2FnZSxcbiAgICAgICAgcmVzdWx0RmllbGRzOiBzdHJpbmcsXG4gICAgICAgIHBhcmVudFNwYW4/OiAoU3BhbiB8IFNwYW5Db250ZXh0KSxcbiAgICAgICAgcmV0cnlJbmRleD86IG51bWJlcixcbiAgICAgICAgYWRkcmVzcz86IHN0cmluZyxcbiAgICAgICAgYWJpPzogVE9OQ29udHJhY3RBQkksXG4gICAgICAgIGZ1bmN0aW9uTmFtZT86IHN0cmluZyxcbiAgICApOiBQcm9taXNlPFFUcmFuc2FjdGlvbj4ge1xuICAgICAgICBjb25zdCBwcm9jZXNzaW5nID0gYXdhaXQgdGhpcy5zZW5kTWVzc2FnZShtZXNzYWdlLCBwYXJlbnRTcGFuKTtcbiAgICAgICAgY29uc3QgeyB0cmFuc2FjdGlvbiB9ID0gYXdhaXQgdGhpcy53YWl0Rm9yVHJhbnNhY3Rpb24oe1xuICAgICAgICAgICAgbWVzc2FnZSxcbiAgICAgICAgICAgIG1lc3NhZ2VQcm9jZXNzaW5nU3RhdGU6IHByb2Nlc3NpbmcsXG4gICAgICAgICAgICBwYXJlbnRTcGFuLFxuICAgICAgICAgICAgYWJpLFxuICAgICAgICAgICAgZnVuY3Rpb25OYW1lLFxuICAgICAgICB9KTtcbiAgICAgICAgcmV0dXJuIHRyYW5zYWN0aW9uO1xuICAgIH1cblxuXG4gICAgYXN5bmMgZmluZExhc3RCbG9jayhjaGFpbjogbnVtYmVyLCByZXN1bHQ6IHN0cmluZywgYWRkaXRpb25hbEZpbHRlcj86IGFueSk6IFByb21pc2U8P2FueT4ge1xuICAgICAgICBjb25zdCBibG9ja3MgPSBhd2FpdCB0aGlzLnF1ZXJpZXMuYmxvY2tzLnF1ZXJ5KHtcbiAgICAgICAgICAgIGZpbHRlcjogeyB3b3JrY2hhaW5faWQ6IHsgZXE6IGNoYWluIH0sIC4uLihhZGRpdGlvbmFsRmlsdGVyIHx8IHt9KSB9LFxuICAgICAgICAgICAgcmVzdWx0LFxuICAgICAgICAgICAgb3JkZXJCeTogW1xuICAgICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICAgICAgcGF0aDogJ3NlcV9ubycsXG4gICAgICAgICAgICAgICAgICAgIGRpcmVjdGlvbjogJ0RFU0MnLFxuICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICBdLFxuICAgICAgICAgICAgbGltaXQ6IDEsXG4gICAgICAgIH0pO1xuICAgICAgICByZXR1cm4gYmxvY2tzLmxlbmd0aCA+IDAgPyBibG9ja3NbMF0gOiBudWxsO1xuICAgIH1cblxuICAgIGFzeW5jIGZpbmRNYXRjaGluZ1NoYXJkKHNoYXJkczogUVNoYXJkSGFzaFtdLCBhZGRyZXNzOiBzdHJpbmcpOiBQcm9taXNlPD9RU2hhcmRIYXNoPiB7XG4gICAgICAgIHJldHVybiB0aGlzLnJlcXVlc3RDb3JlKCdjb250cmFjdHMuZmluZC5zaGFyZCcsIHtcbiAgICAgICAgICAgIHNoYXJkcyxcbiAgICAgICAgICAgIGFkZHJlc3MsXG4gICAgICAgIH0pO1xuICAgIH1cblxuICAgIGFzeW5jIGZpbmRMYXN0U2hhcmRCbG9jayhhZGRyZXNzOiBzdHJpbmcpOiBQcm9taXNlPHN0cmluZz4ge1xuICAgICAgICBjb25zdCBhZGRyZXNzUGFydHMgPSBhZGRyZXNzLnNwbGl0KCc6Jyk7XG4gICAgICAgIGNvbnN0IHdvcmtjaGFpbiA9IGFkZHJlc3NQYXJ0cy5sZW5ndGggPiAxID8gTnVtYmVyLnBhcnNlSW50KGFkZHJlc3NQYXJ0c1swXSwgMTApIDogMDtcblxuXG4gICAgICAgIC8vIGlmIGFjY291bnQgcmVzaWRlcyBpbiBtYXN0ZXIgY2hhaW4gdGhlbiBzdGFydGluZyBwb2ludCBpcyBsYXN0IG1hc3RlciBjaGFpbiBibG9ja1xuICAgICAgICAvLyBnZW5lcmF0ZWQgYmVmb3JlIG1lc3NhZ2Ugd2FzIHNlbnRcbiAgICAgICAgY29uc3QgbWFzdGVyY2hhaW5MYXN0QmxvY2sgPSBhd2FpdCB0aGlzLmZpbmRMYXN0QmxvY2soXG4gICAgICAgICAgICBNQVNURVJDSEFJTl9JRCxcbiAgICAgICAgICAgICdpZCBtYXN0ZXIgeyBzaGFyZF9oYXNoZXMgeyB3b3JrY2hhaW5faWQgc2hhcmQgZGVzY3IgeyByb290X2hhc2ggfSB9IH0nLFxuICAgICAgICApO1xuXG4gICAgICAgIC8vIGlmIGFjY291bnQgcmVzaWRlcyBpbiBtYXN0ZXJjaGFpbiB0aGVuIHN0YXJ0aW5nIHBvaW50IGlzIGxhc3QgbWFzdGVyY2hhaW4gYmxvY2tcbiAgICAgICAgaWYgKHdvcmtjaGFpbiA9PT0gTUFTVEVSQ0hBSU5fSUQpIHtcbiAgICAgICAgICAgIGlmICghbWFzdGVyY2hhaW5MYXN0QmxvY2spIHtcbiAgICAgICAgICAgICAgICB0aHJvdyBUT05DbGllbnRFcnJvci5ub0Jsb2NrcyhNQVNURVJDSEFJTl9JRCk7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICByZXR1cm4gbWFzdGVyY2hhaW5MYXN0QmxvY2suaWQ7XG4gICAgICAgIH1cblxuICAgICAgICAvLyBpZiBhY2NvdW50IGlzIGZyb20gb3RoZXIgY2hhaW5zIHRoZW4gc3RhcnRpbmcgcG9pbnQgaXMgbGFzdCBhY2NvdW50J3Mgc2hhcmQgYmxvY2tcbiAgICAgICAgLy8gVG8gb2J0YWluIGl0IHdlIHRha2UgbWFzdGVyY2hhaW4gYmxvY2sgdG8gZ2V0IHNoYXJkcyBjb25maWd1cmF0aW9uIGFuZCBzZWxlY3RcbiAgICAgICAgLy8gbWF0Y2hpbmcgc2hhcmRcbiAgICAgICAgaWYgKCFtYXN0ZXJjaGFpbkxhc3RCbG9jaykge1xuICAgICAgICAgICAgLy8gTm9kZSBTRSBjYXNlIC0gbm8gbWFzdGVyY2hhaW4sIG5vIHNoYXJkaW5nLiBDaGVjayB0aGF0IG9ubHkgb25lIHNoYXJkXG4gICAgICAgICAgICBsZXQgd29ya2NoYWluTGFzdEJsb2NrID0gYXdhaXQgdGhpcy5maW5kTGFzdEJsb2NrKHdvcmtjaGFpbiwgJ2FmdGVyX21lcmdlIHNoYXJkJyk7XG4gICAgICAgICAgICBpZiAoIXdvcmtjaGFpbkxhc3RCbG9jaykge1xuICAgICAgICAgICAgICAgIHRocm93IFRPTkNsaWVudEVycm9yLm5vQmxvY2tzKHdvcmtjaGFpbik7XG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICAgIC8vIGlmIHdvcmtjaGFpbiBpcyBzaGFyZGVkIHRoZW4gaXQgaXMgbm90IE5vZGUgU0UgYW5kIG1hc3RlcmNoYWluIGJsb2NrcyBtaXNzaW5nXG4gICAgICAgICAgICAvLyBpcyBlcnJvclxuICAgICAgICAgICAgaWYgKHdvcmtjaGFpbkxhc3RCbG9jay5hZnRlcl9tZXJnZSB8fCB3b3JrY2hhaW5MYXN0QmxvY2suc2hhcmQgIT09ICc4MDAwMDAwMDAwMDAwMDAwJykge1xuICAgICAgICAgICAgICAgIHRocm93IFRPTkNsaWVudEVycm9yLm5vQmxvY2tzKE1BU1RFUkNIQUlOX0lEKTtcbiAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgLy8gVGFrZSBsYXN0IGJsb2NrIGJ5IHNlcV9ub1xuICAgICAgICAgICAgd29ya2NoYWluTGFzdEJsb2NrID0gYXdhaXQgdGhpcy5maW5kTGFzdEJsb2NrKHdvcmtjaGFpbiwgJ2lkJywge1xuICAgICAgICAgICAgICAgIHNoYXJkOiB7IGVxOiAnODAwMDAwMDAwMDAwMDAwMCcgfSxcbiAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgaWYgKCF3b3JrY2hhaW5MYXN0QmxvY2spIHtcbiAgICAgICAgICAgICAgICB0aHJvdyBUT05DbGllbnRFcnJvci5pbnZhbGlkQmxvY2tjaGFpbignTm8gc3RhcnRpbmcgTm9kZSBTRSBibG9jayBmb3VuZCcpO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgcmV0dXJuIHdvcmtjaGFpbkxhc3RCbG9jay5pZDtcbiAgICAgICAgfVxuXG4gICAgICAgIGNvbnN0IHNoYXJkczogP1FTaGFyZEhhc2hbXSA9IG1hc3RlcmNoYWluTGFzdEJsb2NrPy5tYXN0ZXI/LnNoYXJkX2hhc2hlcztcbiAgICAgICAgaWYgKCFzaGFyZHMgfHwgc2hhcmRzLmxlbmd0aCA9PT0gMCkge1xuICAgICAgICAgICAgdGhyb3cgVE9OQ2xpZW50RXJyb3IuaW52YWxpZEJsb2NrY2hhaW4oJ05vIGBzaGFyZF9oYXNoZXNgIGZpZWxkIGluIG1hc3RlcmNoYWluIGJsb2NrJyk7XG4gICAgICAgIH1cbiAgICAgICAgY29uc3Qgc2hhcmRCbG9jayA9IGF3YWl0IHRoaXMuZmluZE1hdGNoaW5nU2hhcmQoc2hhcmRzLCBhZGRyZXNzKTtcbiAgICAgICAgY29uc3Qgcm9vdF9oYXNoID0gc2hhcmRCbG9jaz8uZGVzY3I/LnJvb3RfaGFzaDtcbiAgICAgICAgaWYgKCFyb290X2hhc2gpIHtcbiAgICAgICAgICAgIHRocm93IFRPTkNsaWVudEVycm9yLmludmFsaWRCbG9ja2NoYWluKCdObyBgcm9vdF9oYXNoYCBmaWVsZCBpbiBzaGFyZCBkZXNjcicpO1xuICAgICAgICB9XG4gICAgICAgIHJldHVybiByb290X2hhc2g7XG4gICAgfVxuXG4gICAgYXN5bmMgY2hlY2tTaGFyZE1hdGNoKGJsb2NrOiBRQmxvY2ssIGFkZHJlc3M6IHN0cmluZyk6IFByb21pc2U8Ym9vbGVhbj4ge1xuICAgICAgICByZXR1cm4gISEoYXdhaXQgdGhpcy5maW5kTWF0Y2hpbmdTaGFyZChbXG4gICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgd29ya2NoYWluX2lkOiBibG9jay53b3JrY2hhaW5faWQgfHwgMCxcbiAgICAgICAgICAgICAgICBzaGFyZDogYmxvY2suc2hhcmQgfHwgJycsXG4gICAgICAgICAgICB9LFxuICAgICAgICBdLCBhZGRyZXNzKSk7XG4gICAgfVxuXG4gICAgYXN5bmMgd2FpdE5leHRCbG9jayhjdXJyZW50OiBzdHJpbmcsIGFkZHJlc3M6IHN0cmluZywgdGltZW91dD86IG51bWJlcik6IFByb21pc2U8UUJsb2NrPiB7XG4gICAgICAgIGNvbnN0IGJsb2NrID0gYXdhaXQgdGhpcy5xdWVyaWVzLmJsb2Nrcy53YWl0Rm9yKHtcbiAgICAgICAgICAgIGZpbHRlcjoge1xuICAgICAgICAgICAgICAgIHByZXZfcmVmOiB7XG4gICAgICAgICAgICAgICAgICAgIHJvb3RfaGFzaDogeyBlcTogY3VycmVudCB9LFxuICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgT1I6IHtcbiAgICAgICAgICAgICAgICAgICAgcHJldl9hbHRfcmVmOiB7XG4gICAgICAgICAgICAgICAgICAgICAgICByb290X2hhc2g6IHsgZXE6IGN1cnJlbnQgfSxcbiAgICAgICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgfSxcbiAgICAgICAgICAgIHJlc3VsdDogQkxPQ0tfRklFTERTLFxuICAgICAgICAgICAgdGltZW91dCxcbiAgICAgICAgfSk7XG5cbiAgICAgICAgaWYgKGJsb2NrPy5hZnRlcl9zcGxpdCAmJiAhKGF3YWl0IHRoaXMuY2hlY2tTaGFyZE1hdGNoKGJsb2NrLCBhZGRyZXNzKSkpIHtcbiAgICAgICAgICAgIHJldHVybiB0aGlzLnF1ZXJpZXMuYmxvY2tzLndhaXRGb3Ioe1xuICAgICAgICAgICAgICAgIGZpbHRlcjoge1xuICAgICAgICAgICAgICAgICAgICBpZDogeyBuZTogYmxvY2suaWQgfSxcbiAgICAgICAgICAgICAgICAgICAgcHJldl9yZWY6IHtcbiAgICAgICAgICAgICAgICAgICAgICAgIHJvb3RfaGFzaDogeyBlcTogY3VycmVudCB9LFxuICAgICAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgcmVzdWx0OiBCTE9DS19GSUVMRFMsXG4gICAgICAgICAgICAgICAgdGltZW91dCxcbiAgICAgICAgICAgIH0pO1xuICAgICAgICB9XG4gICAgICAgIHJldHVybiBibG9jaztcbiAgICB9XG5cbiAgICBhc3luYyB3YWl0Rm9yVHJhbnNhY3Rpb24ocGFyYW1zOiBUT05XYWl0Rm9yVHJhbnNhY3Rpb25QYXJhbXMpOiBQcm9taXNlPFRPTkNvbnRyYWN0UnVuUmVzdWx0PiB7XG4gICAgICAgIC8vIGNvbnN0IGxlZ2FjeVN0YXJ0ID0gRGF0ZS5ub3coKTtcbiAgICAgICAgLy8gY29uc3QgcmVzdWx0ID0gYXdhaXQgdGhpcy5sZWdhY3lXYWl0Rm9yVHJhbnNhY3Rpb24ocGFyYW1zKTtcbiAgICAgICAgLy8gY29uc29sZS5sb2coJz4+PicsIGBMZWdhY3kgd2FpdCBmb3IgYTogJHtEYXRlLm5vdygpIC0gbGVnYWN5U3RhcnR9IG1zYCk7XG4gICAgICAgIC8vIHJldHVybiByZXN1bHQ7XG5cbiAgICAgICAgY29uc3QgdG90YWxTdGFydCA9IERhdGUubm93KCk7XG4gICAgICAgIGNvbnN0IGV4cGlyZSA9IHBhcmFtcy5tZXNzYWdlLmV4cGlyZSB8fCAwO1xuICAgICAgICBjb25zdCBtZXNzYWdlSWQgPSBhd2FpdCB0aGlzLmVuc3VyZU1lc3NhZ2VJZChwYXJhbXMubWVzc2FnZSk7XG4gICAgICAgIGNvbnN0IGFkZHJlc3MgPSBwYXJhbXMubWVzc2FnZS5hZGRyZXNzO1xuICAgICAgICBjb25zdCBwcm9jZXNzaW5nID0geyAuLi5wYXJhbXMubWVzc2FnZVByb2Nlc3NpbmdTdGF0ZSB9O1xuICAgICAgICBsZXQgdHJhbnNhY3Rpb24gPSBudWxsO1xuICAgICAgICB0cnkge1xuICAgICAgICAgICAgY29uc3QgdGltZVJlcG9ydCA9IFtdO1xuXG4gICAgICAgICAgICBjb25zdCBzdG9wVGltZSA9IGV4cGlyZVxuICAgICAgICAgICAgICAgIHx8IE1hdGgucm91bmQoKERhdGUubm93KCkgKyB0aGlzLmNvbmZpZy5tZXNzYWdlUHJvY2Vzc2luZ1RpbWVvdXQoKSkgLyAxMDAwKTtcblxuICAgICAgICAgICAgY29uc3QgaW5maW5pdGVXYWl0ID0gcGFyYW1zLmluZmluaXRlV2FpdCAhPT0gZmFsc2U7XG4gICAgICAgICAgICBjb25zdCBhZGRUaW1lb3V0ID0gdGhpcy5jb25maWcubWVzc2FnZVByb2Nlc3NpbmdUaW1lb3V0KCk7XG4gICAgICAgICAgICB3aGlsZSAoIXRyYW5zYWN0aW9uKSB7XG4gICAgICAgICAgICAgICAgY29uc3Qgbm93ID0gRGF0ZS5ub3coKTtcbiAgICAgICAgICAgICAgICBjb25zdCB0aW1lb3V0ID0gTWF0aC5tYXgoc3RvcFRpbWUsIG5vdykgLSBub3cgKyBhZGRUaW1lb3V0O1xuICAgICAgICAgICAgICAgIGxldCBibG9jazogP1FCbG9jayA9IG51bGw7XG4gICAgICAgICAgICAgICAgdHJ5IHtcbiAgICAgICAgICAgICAgICAgICAgY29uc3Qgc3RhcnQgPSBEYXRlLm5vdygpO1xuICAgICAgICAgICAgICAgICAgICBibG9jayA9IGF3YWl0IHRoaXMud2FpdE5leHRCbG9jayhwcm9jZXNzaW5nLmxhc3RCbG9ja0lkLCBhZGRyZXNzLCB0aW1lb3V0KTtcbiAgICAgICAgICAgICAgICAgICAgY29uc3QgZW5kID0gRGF0ZS5ub3coKTtcbiAgICAgICAgICAgICAgICAgICAgdGltZVJlcG9ydC5wdXNoKGBCbG9jayBbJHtibG9jay5pZCB8fCAnJ31dIGhhcyBiZWVuIHJlY2VpdmVkOiAke2VuZCAtIHN0YXJ0fSBtcywgY2xpZW50IHRpbWU6ICR7TWF0aC5yb3VuZChlbmQgLyAxMDAwKX0sIGdlbl91dGltZTogJHtibG9jay5nZW5fdXRpbWUgfHwgMH1gKTtcbiAgICAgICAgICAgICAgICB9IGNhdGNoIChlcnJvcikge1xuICAgICAgICAgICAgICAgICAgICB0aGlzLmNvbmZpZy5sb2coJ0Jsb2NrIHdhaXRpbmcgZmFpbGVkOiAnLCBlcnJvcik7XG4gICAgICAgICAgICAgICAgICAgIGlmICghaW5maW5pdGVXYWl0KSB7XG4gICAgICAgICAgICAgICAgICAgICAgICBsZXQgcmVzb2x2ZWRFcnJvciA9IGVycm9yO1xuICAgICAgICAgICAgICAgICAgICAgICAgaWYgKGVycm9yLmNvZGUgPT09IFRPTkVycm9yQ29kZS5XQUlUX0ZPUl9USU1FT1VUKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgcmVzb2x2ZWRFcnJvciA9IFRPTkNsaWVudEVycm9yLm5ldHdvcmtTaWxlbnQoe1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBtZXNzYWdlSWQsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGJsb2NrSWQ6IHByb2Nlc3NpbmcubGFzdEJsb2NrSWQsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRpbWVvdXQsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIG1lc3NhZ2VQcm9jZXNzaW5nU3RhdGU6IHByb2Nlc3NpbmcsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGV4cGlyZSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgc2VuZGluZ1RpbWU6IHByb2Nlc3Npbmcuc2VuZGluZ1RpbWUsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICAgICB0aHJvdyByZXNvbHZlZEVycm9yO1xuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgIHRoaXMuY29uZmlnLmxvZygnUmV0cnkgd2FpdGluZy4nKTtcbiAgICAgICAgICAgICAgICB9XG5cbiAgICAgICAgICAgICAgICBpZiAoYmxvY2spIHtcbiAgICAgICAgICAgICAgICAgICAgcHJvY2Vzc2luZy5sYXN0QmxvY2tJZCA9IGJsb2NrLmlkIHx8ICcnO1xuXG4gICAgICAgICAgICAgICAgICAgIGNvbnN0IGluTXNnID0gKGJsb2NrLmluX21zZ19kZXNjciB8fCBbXSkuZmluZCh4ID0+IHgubXNnX2lkID09PSBtZXNzYWdlSWQpO1xuICAgICAgICAgICAgICAgICAgICBpZiAoaW5Nc2cpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIGNvbnN0IHRyYW5zYWN0aW9uSWQgPSBpbk1zZy50cmFuc2FjdGlvbl9pZDtcbiAgICAgICAgICAgICAgICAgICAgICAgIGlmICghdHJhbnNhY3Rpb25JZCkge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRocm93IFRPTkNsaWVudEVycm9yLmludmFsaWRCbG9ja2NoYWluKCdObyBmaWVsZCBgdHJhbnNhY3Rpb25faWRgIGluIGJsb2NrJyk7XG4gICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICAgICBjb25zdCB0clN0YXJ0ID0gRGF0ZS5ub3coKTtcbiAgICAgICAgICAgICAgICAgICAgICAgIHRyYW5zYWN0aW9uID0gYXdhaXQgdGhpcy5xdWVyaWVzLnRyYW5zYWN0aW9ucy53YWl0Rm9yKHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBmaWx0ZXI6IHsgaWQ6IHsgZXE6IHRyYW5zYWN0aW9uSWQgfSB9LFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHJlc3VsdDogVFJBTlNBQ1RJT05fRklFTERTX09SRElOQVJZLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRpbWVvdXQ6IE1BWF9USU1FT1VULFxuICAgICAgICAgICAgICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICAgICAgICAgICAgICB0cmFjZU1lc3NhZ2UodGhpcy5jb25maWcudHJhY2VyLCBtZXNzYWdlSWQsICd0cmFuc2FjdGlvblJlY2VpdmVkJywge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRyYW5zYWN0aW9uSWQsXG4gICAgICAgICAgICAgICAgICAgICAgICB9KVxuICAgICAgICAgICAgICAgICAgICAgICAgdGltZVJlcG9ydC5wdXNoKGBUcmFuc2FjdGlvbiBbJHt0cmFuc2FjdGlvbklkfV0gaGFzIGJlZW4gcmVjZWl2ZWQ6ICR7RGF0ZS5ub3coKSAtIHRyU3RhcnR9IG1zYCk7XG4gICAgICAgICAgICAgICAgICAgIH0gZWxzZSBpZiAoKGJsb2NrLmdlbl91dGltZSB8fCAwKSA+IHN0b3BUaW1lKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICBpZiAoZXhwaXJlKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgdHJhY2VNZXNzYWdlKHRoaXMuY29uZmlnLnRyYWNlciwgbWVzc2FnZUlkLCAnbWVzc2FnZUV4cGlyZWQnLCB7fSk7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgdGhyb3cgVE9OQ2xpZW50RXJyb3IubWVzc2FnZUV4cGlyZWQoe1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBtZXNzYWdlSWQsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHNlbmRpbmdUaW1lOiBwcm9jZXNzaW5nLnNlbmRpbmdUaW1lLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBleHBpcmU6IHN0b3BUaW1lLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBibG9ja1RpbWU6IGJsb2NrLmdlbl91dGltZSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgYmxvY2tJZDogcHJvY2Vzc2luZy5sYXN0QmxvY2tJZCxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB9KTtcbiAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICAgIHRocm93IFRPTkNsaWVudEVycm9yLnRyYW5zYWN0aW9uV2FpdFRpbWVvdXQoe1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIG1lc3NhZ2VJZCxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBzZW5kaW5nVGltZTogcHJvY2Vzc2luZy5zZW5kaW5nVGltZSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB0aW1lb3V0LFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIG1lc3NhZ2VQcm9jZXNzaW5nU3RhdGU6IHByb2Nlc3NpbmcsXG4gICAgICAgICAgICAgICAgICAgICAgICB9KTtcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgdGltZVJlcG9ydC5zcGxpY2UoMCwgMCwgYFRyYW5zYWN0aW9uIHdhaXRpbmcgdGltZTogJHtEYXRlLm5vdygpIC0gdG90YWxTdGFydH0gbXNgKTtcbiAgICAgICAgICAgIHRoaXMuY29uZmlnLmxvZyh0aW1lUmVwb3J0LmpvaW4oJ1xcbicpKTtcbiAgICAgICAgfSBjYXRjaCAoZXJyb3IpIHtcbiAgICAgICAgICAgIHRoaXMuY29uZmlnLmxvZygnW3dhaXRGb3JUcmFuc2FjdGlvbl0nLCAnRkFJTEVEJywgZXJyb3IpO1xuICAgICAgICAgICAgaWYgKGVycm9yLmNvZGUgPT09IFRPTkVycm9yQ29kZS5NRVNTQUdFX0VYUElSRURcbiAgICAgICAgICAgICAgICB8fCBlcnJvci5jb2RlID09PSBUT05FcnJvckNvZGUuVFJBTlNBQ1RJT05fV0FJVF9USU1FT1VUKSB7XG4gICAgICAgICAgICAgICAgdGhyb3cgYXdhaXQgdGhpcy5yZXNvbHZlRGV0YWlsZWRFcnJvcihcbiAgICAgICAgICAgICAgICAgICAgZXJyb3IsXG4gICAgICAgICAgICAgICAgICAgIHBhcmFtcy5tZXNzYWdlLm1lc3NhZ2VCb2R5QmFzZTY0LFxuICAgICAgICAgICAgICAgICAgICBwcm9jZXNzaW5nLnNlbmRpbmdUaW1lLFxuICAgICAgICAgICAgICAgICAgICBhZGRyZXNzLFxuICAgICAgICAgICAgICAgICk7XG4gICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAgIHRocm93IGVycm9yO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG5cbiAgICAgICAgcmV0dXJuIHRoaXMucHJvY2Vzc1RyYW5zYWN0aW9uKFxuICAgICAgICAgICAgYWRkcmVzcyxcbiAgICAgICAgICAgIHRyYW5zYWN0aW9uLFxuICAgICAgICAgICAgcGFyYW1zLmFiaSxcbiAgICAgICAgICAgIHBhcmFtcy5mdW5jdGlvbk5hbWUsXG4gICAgICAgICk7XG4gICAgfVxuXG4gICAgYXN5bmMgbGVnYWN5V2FpdEZvclRyYW5zYWN0aW9uKFxuICAgICAgICBwYXJhbXM6IFRPTldhaXRGb3JUcmFuc2FjdGlvblBhcmFtcyxcbiAgICApOiBQcm9taXNlPFRPTkNvbnRyYWN0UnVuUmVzdWx0PiB7XG4gICAgICAgIGNvbnN0IHtcbiAgICAgICAgICAgIG1lc3NhZ2UsXG4gICAgICAgICAgICBhYmksXG4gICAgICAgICAgICBmdW5jdGlvbk5hbWUsXG4gICAgICAgICAgICBwYXJlbnRTcGFuLFxuICAgICAgICB9ID0gcGFyYW1zO1xuICAgICAgICBjb25zdCBtZXNzYWdlSWQgPSBhd2FpdCB0aGlzLmVuc3VyZU1lc3NhZ2VJZChtZXNzYWdlKTtcbiAgICAgICAgY29uc3QgY29uZmlnID0gdGhpcy5jb25maWc7XG4gICAgICAgIGNvbmZpZy5sb2coJ1t3YWl0Rm9yVHJhbnNhY3Rpb25dJywgZnVuY3Rpb25OYW1lLCBtZXNzYWdlKTtcbiAgICAgICAgbGV0IHByb2Nlc3NpbmdUaW1lb3V0ID0gY29uZmlnLm1lc3NhZ2VQcm9jZXNzaW5nVGltZW91dCgpO1xuICAgICAgICBjb25zdCBwcm9taXNlcyA9IFtdO1xuICAgICAgICBjb25zdCBzZXJ2ZXJJbmZvID0gYXdhaXQgdGhpcy5xdWVyaWVzLmdldFNlcnZlckluZm8ocGFyZW50U3Bhbik7XG4gICAgICAgIGNvbnN0IG9wZXJhdGlvbklkID0gc2VydmVySW5mby5zdXBwb3J0c09wZXJhdGlvbklkXG4gICAgICAgICAgICA/IHRoaXMucXVlcmllcy5nZW5lcmF0ZU9wZXJhdGlvbklkKClcbiAgICAgICAgICAgIDogdW5kZWZpbmVkO1xuICAgICAgICBsZXQgdHJhbnNhY3Rpb246ID9RVHJhbnNhY3Rpb24gPSBudWxsO1xuICAgICAgICBjb25zdCBzZW5kaW5nVGltZSA9IE1hdGgucm91bmQoRGF0ZS5ub3coKSAvIDEwMDApO1xuICAgICAgICBsZXQgYmxvY2tUaW1lID0gbnVsbDtcbiAgICAgICAgdHJ5IHtcbiAgICAgICAgICAgIGNvbnN0IGV4cGlyZSA9IG1lc3NhZ2UuZXhwaXJlO1xuICAgICAgICAgICAgaWYgKGV4cGlyZSkge1xuICAgICAgICAgICAgICAgIC8vIGNhbGN1bGF0ZSB0aW1lb3V0IGFjY29yZGluZyB0byBgZXhwaXJlYCB2YWx1ZSAoaW4gc2Vjb25kcylcbiAgICAgICAgICAgICAgICAvLyBhZGQgcHJvY2Vzc2luZyB0aW1lb3V0IGFzIG1hc3RlciBibG9jayB2YWxpZGF0aW9uIHRpbWVcbiAgICAgICAgICAgICAgICBjb25zdCBibG9ja1RpbWVvdXQgPSBleHBpcmUgKiAxMDAwIC0gRGF0ZS5ub3coKSArIHByb2Nlc3NpbmdUaW1lb3V0O1xuICAgICAgICAgICAgICAgIC8vIHRyYW5zYWN0aW9uIHRpbWVvdXQgbXVzdCBiZSBncmVhdGVyIHRoZW4gYmxvY2sgdGltZW91dFxuICAgICAgICAgICAgICAgIHByb2Nlc3NpbmdUaW1lb3V0ID0gYmxvY2tUaW1lb3V0ICsgRVhUUkFfVFJBTlNBQ1RJT05fV0FJVElOR19USU1FO1xuXG5cbiAgICAgICAgICAgICAgICBjb25zdCB3YWl0RXhwaXJlZCA9IGFzeW5jICgpID0+IHtcbiAgICAgICAgICAgICAgICAgICAgLy8gd2FpdCBmb3IgYmxvY2ssIHByb2R1Y2VkIGFmdGVyIGBleHBpcmVgIHRvIGd1YXJhbnRlZSB0aGF0IG1lc3NhZ2UgaXMgcmVqZWN0ZWRcbiAgICAgICAgICAgICAgICAgICAgbGV0IGJsb2NrOiA/UUJsb2NrID0gbnVsbDtcbiAgICAgICAgICAgICAgICAgICAgdHJ5IHtcbiAgICAgICAgICAgICAgICAgICAgICAgIGJsb2NrID0gYXdhaXQgdGhpcy5xdWVyaWVzLmJsb2Nrcy53YWl0Rm9yKHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBmaWx0ZXI6IHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgbWFzdGVyOiB7IG1pbl9zaGFyZF9nZW5fdXRpbWU6IHsgZ2U6IGV4cGlyZSB9IH0sXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICByZXN1bHQ6ICdpZCBnZW5fdXRpbWUgaW5fbXNnX2Rlc2NyIHsgdHJhbnNhY3Rpb25faWQgfScsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgdGltZW91dDogYmxvY2tUaW1lb3V0LFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHBhcmVudFNwYW4sXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgb3BlcmF0aW9uSWQsXG4gICAgICAgICAgICAgICAgICAgICAgICB9KTtcbiAgICAgICAgICAgICAgICAgICAgfSBjYXRjaCAoZXJyb3IpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIGlmIChUT05DbGllbnRFcnJvci5pc1dhaXRGb3JUaW1lb3V0KGVycm9yKSkge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRocm93IFRPTkNsaWVudEVycm9yLm5ldHdvcmtTaWxlbnQoe1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBtZXNzYWdlSWQsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHNlbmRpbmdUaW1lOiBzZW5kaW5nVGltZSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgZXhwaXJlLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB0aW1lb3V0OiBibG9ja1RpbWVvdXQsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICAgICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRocm93IGVycm9yO1xuICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICB9XG5cbiAgICAgICAgICAgICAgICAgICAgaWYgKHRyYW5zYWN0aW9uKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICByZXR1cm47XG4gICAgICAgICAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgICAgICAgICBjb25zdCB0cmFuc2FjdGlvbklkID0gYmxvY2suaW5fbXNnX2Rlc2NyXG4gICAgICAgICAgICAgICAgICAgICAgICAmJiBibG9jay5pbl9tc2dfZGVzY3IuZmluZChtc2cgPT4gISFtc2cudHJhbnNhY3Rpb25faWQpPy50cmFuc2FjdGlvbl9pZDtcblxuICAgICAgICAgICAgICAgICAgICBpZiAoIXRyYW5zYWN0aW9uSWQpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIHRocm93IFRPTkNsaWVudEVycm9yLmludGVybmFsRXJyb3IoXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgJ0ludmFsaWQgYmxvY2sgcmVjZWl2ZWQ6IG5vIHRyYW5zYWN0aW9uIElEJyxcbiAgICAgICAgICAgICAgICAgICAgICAgICk7XG4gICAgICAgICAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgICAgICAgICAvLyBjaGVjayB0aGF0IHRyYW5zYWN0aW9ucyBjb2xsZWN0aW9uIGlzIHVwZGF0ZWRcbiAgICAgICAgICAgICAgICAgICAgdHJ5IHtcbiAgICAgICAgICAgICAgICAgICAgICAgIGF3YWl0IHRoaXMucXVlcmllcy50cmFuc2FjdGlvbnMud2FpdEZvcih7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgZmlsdGVyOiB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGlkOiB7IGVxOiB0cmFuc2FjdGlvbklkIH0sXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICByZXN1bHQ6ICdpZCcsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgdGltZW91dDogQkxPQ0tfVFJBTlNBQ1RJT05fV0FJVElOR19USU1FLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHBhcmVudFNwYW4sXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgb3BlcmF0aW9uSWQsXG4gICAgICAgICAgICAgICAgICAgICAgICB9KTtcbiAgICAgICAgICAgICAgICAgICAgfSBjYXRjaCAoZXJyb3IpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIGlmIChUT05DbGllbnRFcnJvci5pc1dhaXRGb3JUaW1lb3V0KGVycm9yKSkge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRocm93IFRPTkNsaWVudEVycm9yLm5ldHdvcmtTaWxlbnQoe1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBtZXNzYWdlSWQsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGJsb2NrSWQ6IGJsb2NrLmlkLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB0cmFuc2FjdGlvbklkLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB0aW1lb3V0OiBCTE9DS19UUkFOU0FDVElPTl9XQUlUSU5HX1RJTUUsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHNlbmRpbmdUaW1lOiBzZW5kaW5nVGltZSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgZXhwaXJlLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB0aHJvdyBlcnJvcjtcbiAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICBibG9ja1RpbWUgPSBibG9jay5nZW5fdXRpbWU7XG4gICAgICAgICAgICAgICAgfTtcblxuICAgICAgICAgICAgICAgIHByb21pc2VzLnB1c2god2FpdEV4cGlyZWQoKSk7XG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICAgIC8vIHdhaXQgZm9yIG1lc3NhZ2UgcHJvY2Vzc2luZyB0cmFuc2FjdGlvblxuICAgICAgICAgICAgcHJvbWlzZXMucHVzaChuZXcgUHJvbWlzZSgocmVzb2x2ZSwgcmVqZWN0KSA9PiB7XG4gICAgICAgICAgICAgICAgKGFzeW5jICgpID0+IHtcbiAgICAgICAgICAgICAgICAgICAgdHJ5IHtcbiAgICAgICAgICAgICAgICAgICAgICAgIHRyYW5zYWN0aW9uID0gYXdhaXQgdGhpcy5xdWVyaWVzLnRyYW5zYWN0aW9ucy53YWl0Rm9yKHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBmaWx0ZXI6IHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgaW5fbXNnOiB7IGVxOiBtZXNzYWdlSWQgfSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgc3RhdHVzOiB7IGVxOiBRVHJhbnNhY3Rpb25Qcm9jZXNzaW5nU3RhdHVzLmZpbmFsaXplZCB9LFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgcmVzdWx0OiB0cmFuc2FjdGlvbkRldGFpbHMsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgdGltZW91dDogcHJvY2Vzc2luZ1RpbWVvdXQsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgb3BlcmF0aW9uSWQsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgcGFyZW50U3BhbixcbiAgICAgICAgICAgICAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgICAgICAgICAgICAgcmVzb2x2ZSgpO1xuICAgICAgICAgICAgICAgICAgICB9IGNhdGNoIChlcnJvcikge1xuICAgICAgICAgICAgICAgICAgICAgICAgaWYgKFRPTkNsaWVudEVycm9yLmlzV2FpdEZvclRpbWVvdXQoZXJyb3IpKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgcmVqZWN0KFRPTkNsaWVudEVycm9yLnRyYW5zYWN0aW9uV2FpdFRpbWVvdXQoe1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBtZXNzYWdlSWQsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHNlbmRpbmdUaW1lLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB0aW1lb3V0OiBwcm9jZXNzaW5nVGltZW91dCxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB9KSk7XG4gICAgICAgICAgICAgICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHJlamVjdChlcnJvcik7XG4gICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICB9KSgpO1xuICAgICAgICAgICAgfSkpO1xuXG4gICAgICAgICAgICB0cnkge1xuICAgICAgICAgICAgICAgIGF3YWl0IFByb21pc2UucmFjZShwcm9taXNlcyk7XG4gICAgICAgICAgICB9IGZpbmFsbHkge1xuICAgICAgICAgICAgICAgIGlmIChwcm9taXNlcy5sZW5ndGggPiAxICYmIG9wZXJhdGlvbklkKSB7XG4gICAgICAgICAgICAgICAgICAgIGF3YWl0IHRoaXMucXVlcmllcy5maW5pc2hPcGVyYXRpb25zKFtvcGVyYXRpb25JZF0pO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgaWYgKCF0cmFuc2FjdGlvbikge1xuICAgICAgICAgICAgICAgIHRocm93IFRPTkNsaWVudEVycm9yLm1lc3NhZ2VFeHBpcmVkKHtcbiAgICAgICAgICAgICAgICAgICAgbWVzc2FnZUlkLFxuICAgICAgICAgICAgICAgICAgICBzZW5kaW5nVGltZTogc2VuZGluZ1RpbWUsXG4gICAgICAgICAgICAgICAgICAgIGV4cGlyZSxcbiAgICAgICAgICAgICAgICAgICAgYmxvY2tUaW1lLFxuICAgICAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgY29uc3QgdHJhbnNhY3Rpb25Ob3cgPSB0cmFuc2FjdGlvbi5ub3cgfHwgMDtcbiAgICAgICAgICAgIHRoaXMuY29uZmlnLmxvZygnW3dhaXRGb3JUcmFuc2FjdGlvbl0nLCAnVFJBTlNBQ1RJT05fUkVDRUlWRUQnLCB7XG4gICAgICAgICAgICAgICAgaWQ6IHRyYW5zYWN0aW9uLmlkLFxuICAgICAgICAgICAgICAgIGJsb2NrSWQ6IHRyYW5zYWN0aW9uLmJsb2NrX2lkLFxuICAgICAgICAgICAgICAgIG5vdzogYCR7bmV3IERhdGUodHJhbnNhY3Rpb25Ob3cgKiAxMDAwKS50b0lTT1N0cmluZygpfSAoJHt0cmFuc2FjdGlvbk5vd30pYCxcbiAgICAgICAgICAgIH0pO1xuICAgICAgICB9IGNhdGNoIChlcnJvcikge1xuICAgICAgICAgICAgdGhpcy5jb25maWcubG9nKCdbd2FpdEZvclRyYW5zYWN0aW9uXScsICdGQUlMRUQnLCBlcnJvcik7XG4gICAgICAgICAgICBpZiAoVE9OQ2xpZW50RXJyb3IuaXNNZXNzYWdlRXhwaXJlZChlcnJvcilcbiAgICAgICAgICAgICAgICB8fCBUT05DbGllbnRFcnJvci5pc0NsaWVudEVycm9yKGVycm9yLCBUT05FcnJvckNvZGUuVFJBTlNBQ1RJT05fV0FJVF9USU1FT1VUKSkge1xuICAgICAgICAgICAgICAgIGNvbnN0IGRldGFpbGVkRXJyb3I6IGFueSA9IGF3YWl0IHRoaXMucmVzb2x2ZURldGFpbGVkRXJyb3IoXG4gICAgICAgICAgICAgICAgICAgIGVycm9yLFxuICAgICAgICAgICAgICAgICAgICBtZXNzYWdlLm1lc3NhZ2VCb2R5QmFzZTY0LFxuICAgICAgICAgICAgICAgICAgICBEYXRlLm5vdygpIC8gMTAwMCxcbiAgICAgICAgICAgICAgICAgICAgbWVzc2FnZS5hZGRyZXNzLFxuICAgICAgICAgICAgICAgICk7XG4gICAgICAgICAgICAgICAgY29uc3QgbWVzc2FnZVByb2Nlc3NpbmdTdGF0ZSA9IGVycm9yLmRhdGE/Lm1lc3NhZ2VQcm9jZXNzaW5nU3RhdGU7XG4gICAgICAgICAgICAgICAgaWYgKG1lc3NhZ2VQcm9jZXNzaW5nU3RhdGUpIHtcbiAgICAgICAgICAgICAgICAgICAgaWYgKGRldGFpbGVkRXJyb3IuZGF0YSkge1xuICAgICAgICAgICAgICAgICAgICAgICAgZGV0YWlsZWRFcnJvci5kYXRhLm1lc3NhZ2VQcm9jZXNzaW5nU3RhdGUgPSBtZXNzYWdlUHJvY2Vzc2luZ1N0YXRlO1xuICAgICAgICAgICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAgICAgICAgICAgZGV0YWlsZWRFcnJvci5kYXRhID0ge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIG1lc3NhZ2VQcm9jZXNzaW5nU3RhdGUsXG4gICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgdGhyb3cgZGV0YWlsZWRFcnJvcjtcbiAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgICAgdGhyb3cgZXJyb3I7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgICAgcmVtb3ZlVHlwZU5hbWUodHJhbnNhY3Rpb24pO1xuICAgICAgICBjb25zdCB7IG91dHB1dCwgZmVlcyB9ID0gYXdhaXQgdGhpcy5wcm9jZXNzVHJhbnNhY3Rpb24oXG4gICAgICAgICAgICBtZXNzYWdlLmFkZHJlc3MsXG4gICAgICAgICAgICB0cmFuc2FjdGlvbixcbiAgICAgICAgICAgIGFiaSxcbiAgICAgICAgICAgIGZ1bmN0aW9uTmFtZSxcbiAgICAgICAgKTtcbiAgICAgICAgcmV0dXJuIHtcbiAgICAgICAgICAgIHRyYW5zYWN0aW9uLFxuICAgICAgICAgICAgb3V0cHV0LFxuICAgICAgICAgICAgZmVlcyxcbiAgICAgICAgfTtcbiAgICB9XG5cbiAgICBhc3luYyBwcm9jZXNzVHJhbnNhY3Rpb24oXG4gICAgICAgIGFkZHJlc3M6IHN0cmluZyxcbiAgICAgICAgdHJhbnNhY3Rpb246IFFUcmFuc2FjdGlvbixcbiAgICAgICAgYWJpOiA/VE9OQ29udHJhY3RBQkksXG4gICAgICAgIGZ1bmN0aW9uTmFtZTogP3N0cmluZyxcbiAgICApOiBQcm9taXNlPFRPTkNvbnRyYWN0UnVuUmVzdWx0PiB7XG4gICAgICAgIHRyeSB7XG4gICAgICAgICAgICBjb25zdCByZXN1bHQgPSBhd2FpdCB0aGlzLnJlcXVlc3RDb3JlKCdjb250cmFjdHMucHJvY2Vzcy50cmFuc2FjdGlvbicsIHtcbiAgICAgICAgICAgICAgICB0cmFuc2FjdGlvbixcbiAgICAgICAgICAgICAgICBhYmksXG4gICAgICAgICAgICAgICAgZnVuY3Rpb25OYW1lLFxuICAgICAgICAgICAgICAgIGFkZHJlc3MsXG4gICAgICAgICAgICB9KTtcbiAgICAgICAgICAgIHJldHVybiB7XG4gICAgICAgICAgICAgICAgdHJhbnNhY3Rpb24sXG4gICAgICAgICAgICAgICAgLi4ucmVzdWx0LFxuICAgICAgICAgICAgfTtcbiAgICAgICAgfSBjYXRjaCAoZXJyb3IpIHtcbiAgICAgICAgICAgIGNvbnN0IGFjY291bnRzID0gYXdhaXQgdGhpcy5xdWVyaWVzLmFjY291bnRzLnF1ZXJ5KHtcbiAgICAgICAgICAgICAgICBmaWx0ZXI6IHsgaWQ6IHsgZXE6IGFkZHJlc3MgfSB9LFxuICAgICAgICAgICAgICAgIHJlc3VsdDogJ2FjY190eXBlIGJhbGFuY2UnLFxuICAgICAgICAgICAgICAgIHRpbWVvdXQ6IDEwMDAsXG4gICAgICAgICAgICB9KTtcbiAgICAgICAgICAgIGlmIChhY2NvdW50cy5sZW5ndGggPT09IDApIHtcbiAgICAgICAgICAgICAgICB0aHJvdyBUT05DbGllbnRFcnJvci5hY2NvdW50TWlzc2luZyhhZGRyZXNzKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIHRocm93IGVycm9yO1xuICAgICAgICB9XG4gICAgfVxuXG4gICAgYXN5bmMgcmVzb2x2ZURldGFpbGVkRXJyb3IoXG4gICAgICAgIGVycm9yOiBFcnJvcixcbiAgICAgICAgbWVzc2FnZUJhc2U2NDogc3RyaW5nLFxuICAgICAgICB0aW1lOiBudW1iZXIsXG4gICAgICAgIGFkZHJlc3M6IHN0cmluZyxcbiAgICApIHtcbiAgICAgICAgY29uc3QgYWNjb3VudHMgPSBhd2FpdCB0aGlzLnF1ZXJpZXMuYWNjb3VudHMucXVlcnkoe1xuICAgICAgICAgICAgZmlsdGVyOiB7IGlkOiB7IGVxOiBhZGRyZXNzIH0gfSxcbiAgICAgICAgICAgIHJlc3VsdDogJ2lkIGFjY190eXBlIGJhbGFuY2UgYmFsYW5jZV9vdGhlciB7IGN1cnJlbmN5IHZhbHVlIH0gYm9jIGNvZGVfaGFzaCBkYXRhX2hhc2ggbGFzdF9wYWlkJyxcbiAgICAgICAgICAgIHRpbWVvdXQ6IDEwMDAsXG4gICAgICAgIH0pO1xuICAgICAgICBpZiAoYWNjb3VudHMubGVuZ3RoID09PSAwKSB7XG4gICAgICAgICAgICByZXR1cm4gVE9OQ2xpZW50RXJyb3IuYWNjb3VudE1pc3NpbmcoYWRkcmVzcyk7XG4gICAgICAgIH1cbiAgICAgICAgY29uc3QgYWNjb3VudCA9IGFjY291bnRzWzBdO1xuICAgICAgICByZW1vdmVUeXBlTmFtZShhY2NvdW50KTtcbiAgICAgICAgdHJ5IHtcbiAgICAgICAgICAgIGF3YWl0IHRoaXMucmVxdWVzdENvcmUoJ2NvbnRyYWN0cy5yZXNvbHZlLmVycm9yJywge1xuICAgICAgICAgICAgICAgIGFkZHJlc3MsXG4gICAgICAgICAgICAgICAgYWNjb3VudCxcbiAgICAgICAgICAgICAgICBtZXNzYWdlQmFzZTY0LFxuICAgICAgICAgICAgICAgIHRpbWU6IHRpbWUsXG4gICAgICAgICAgICAgICAgbWFpbkVycm9yOiBlcnJvcixcbiAgICAgICAgICAgIH0pO1xuICAgICAgICB9IGNhdGNoIChyZXNvbHZlZCkge1xuICAgICAgICAgICAgcmV0dXJuIHJlc29sdmVkO1xuICAgICAgICB9XG4gICAgICAgIHJldHVybiBlcnJvcjtcbiAgICB9XG5cbiAgICBhc3luYyBpc0RlcGxveWVkKGFkZHJlc3M6IHN0cmluZywgcGFyZW50U3Bhbj86IChTcGFuIHwgU3BhbkNvbnRleHQpKTogUHJvbWlzZTxib29sPiB7XG4gICAgICAgIGNvbnN0IGFjY291bnQgPSBhd2FpdCB0aGlzLnF1ZXJpZXMuYWNjb3VudHMucXVlcnkoe1xuICAgICAgICAgICAgZmlsdGVyOiB7XG4gICAgICAgICAgICAgICAgaWQ6IHsgZXE6IGFkZHJlc3MgfSxcbiAgICAgICAgICAgICAgICBhY2NfdHlwZTogeyBlcTogUUFjY291bnRUeXBlLmFjdGl2ZSB9LFxuICAgICAgICAgICAgfSxcbiAgICAgICAgICAgIHJlc3VsdDogJ2lkJyxcbiAgICAgICAgICAgIHBhcmVudFNwYW4sXG4gICAgICAgIH0pO1xuICAgICAgICByZXR1cm4gYWNjb3VudC5sZW5ndGggPiAwO1xuICAgIH1cblxuICAgIGFzeW5jIHByb2Nlc3NEZXBsb3lNZXNzYWdlKFxuICAgICAgICBtZXNzYWdlOiBUT05Db250cmFjdERlcGxveU1lc3NhZ2UsXG4gICAgICAgIHBhcmVudFNwYW4/OiAoU3BhbiB8IFNwYW5Db250ZXh0KSxcbiAgICAgICAgcmV0cnlJbmRleD86IG51bWJlcixcbiAgICApOiBQcm9taXNlPFRPTkNvbnRyYWN0RGVwbG95UmVzdWx0PiB7XG4gICAgICAgIHRoaXMuY29uZmlnLmxvZygncHJvY2Vzc0RlcGxveU1lc3NhZ2UnLCBtZXNzYWdlKTtcbiAgICAgICAgaWYgKGF3YWl0IHRoaXMuaXNEZXBsb3llZChtZXNzYWdlLmFkZHJlc3MsIHBhcmVudFNwYW4pKSB7XG4gICAgICAgICAgICByZXR1cm4ge1xuICAgICAgICAgICAgICAgIGFkZHJlc3M6IG1lc3NhZ2UuYWRkcmVzcyxcbiAgICAgICAgICAgICAgICBhbHJlYWR5RGVwbG95ZWQ6IHRydWUsXG4gICAgICAgICAgICB9O1xuICAgICAgICB9XG4gICAgICAgIGNvbnN0IHByb2Nlc3NpbmcgPSBhd2FpdCB0aGlzLnNlbmRNZXNzYWdlKG1lc3NhZ2UubWVzc2FnZSwgcGFyZW50U3Bhbik7XG4gICAgICAgIHJldHVybiB0aGlzLndhaXRGb3JEZXBsb3lUcmFuc2FjdGlvbihtZXNzYWdlLCBwcm9jZXNzaW5nLCBwYXJlbnRTcGFuKTtcbiAgICB9XG5cbiAgICBhc3luYyB3YWl0Rm9yRGVwbG95VHJhbnNhY3Rpb24oXG4gICAgICAgIGRlcGxveU1lc3NhZ2U6IFRPTkNvbnRyYWN0RGVwbG95TWVzc2FnZSxcbiAgICAgICAgbWVzc2FnZVByb2Nlc3NpbmdTdGF0ZTogVE9OTWVzc2FnZVByb2Nlc3NpbmdTdGF0ZSxcbiAgICAgICAgcGFyZW50U3Bhbj86IChTcGFuIHwgU3BhbkNvbnRleHQpLFxuICAgICAgICBpbmZpbml0ZVdhaXQ/OiBib29sZWFuLFxuICAgICk6IFByb21pc2U8VE9OQ29udHJhY3REZXBsb3lSZXN1bHQ+IHtcbiAgICAgICAgY29uc3QgbWVzc2FnZSA9IGRlcGxveU1lc3NhZ2UubWVzc2FnZTtcbiAgICAgICAgY29uc3QgcmVzdWx0ID0gYXdhaXQgdGhpcy53YWl0Rm9yVHJhbnNhY3Rpb24oe1xuICAgICAgICAgICAgbWVzc2FnZSxcbiAgICAgICAgICAgIG1lc3NhZ2VQcm9jZXNzaW5nU3RhdGUsXG4gICAgICAgICAgICBwYXJlbnRTcGFuLFxuICAgICAgICAgICAgaW5maW5pdGVXYWl0LFxuICAgICAgICB9KTtcbiAgICAgICAgcmV0dXJuIHtcbiAgICAgICAgICAgIC4uLnJlc3VsdCxcbiAgICAgICAgICAgIGFkZHJlc3M6IG1lc3NhZ2UuYWRkcmVzcyxcbiAgICAgICAgICAgIGFscmVhZHlEZXBsb3llZDogZmFsc2UsXG4gICAgICAgIH07XG4gICAgfVxuXG5cbiAgICBhc3luYyBwcm9jZXNzUnVuTWVzc2FnZShcbiAgICAgICAgcnVuTWVzc2FnZTogVE9OQ29udHJhY3RSdW5NZXNzYWdlLFxuICAgICAgICBwYXJlbnRTcGFuPzogKFNwYW4gfCBTcGFuQ29udGV4dCksXG4gICAgKTogUHJvbWlzZTxUT05Db250cmFjdFJ1blJlc3VsdD4ge1xuICAgICAgICB0aGlzLmNvbmZpZy5sb2coJ3Byb2Nlc3NSdW5NZXNzYWdlJywgcnVuTWVzc2FnZSk7XG4gICAgICAgIGNvbnN0IHByb2Nlc3NpbmcgPSBhd2FpdCB0aGlzLnNlbmRNZXNzYWdlKHJ1bk1lc3NhZ2UubWVzc2FnZSwgcGFyZW50U3Bhbik7XG4gICAgICAgIHJldHVybiB0aGlzLndhaXRGb3JSdW5UcmFuc2FjdGlvbihydW5NZXNzYWdlLCBwcm9jZXNzaW5nLCBwYXJlbnRTcGFuKTtcbiAgICB9XG5cbiAgICBhc3luYyB3YWl0Rm9yUnVuVHJhbnNhY3Rpb24oXG4gICAgICAgIHJ1bk1lc3NhZ2U6IFRPTkNvbnRyYWN0UnVuTWVzc2FnZSxcbiAgICAgICAgbWVzc2FnZVByb2Nlc3NpbmdTdGF0ZTogVE9OTWVzc2FnZVByb2Nlc3NpbmdTdGF0ZSxcbiAgICAgICAgcGFyZW50U3Bhbj86IChTcGFuIHwgU3BhbkNvbnRleHQpLFxuICAgICAgICBpbmZpbml0ZVdhaXQ/OiBib29sZWFuLFxuICAgICk6IFByb21pc2U8VE9OQ29udHJhY3RSdW5SZXN1bHQ+IHtcbiAgICAgICAgcmV0dXJuIHRoaXMud2FpdEZvclRyYW5zYWN0aW9uKHtcbiAgICAgICAgICAgIG1lc3NhZ2U6IHJ1bk1lc3NhZ2UubWVzc2FnZSxcbiAgICAgICAgICAgIG1lc3NhZ2VQcm9jZXNzaW5nU3RhdGUsXG4gICAgICAgICAgICBwYXJlbnRTcGFuLFxuICAgICAgICAgICAgaW5maW5pdGVXYWl0LFxuICAgICAgICAgICAgYWJpOiBydW5NZXNzYWdlLmFiaSxcbiAgICAgICAgICAgIGZ1bmN0aW9uTmFtZTogcnVuTWVzc2FnZS5mdW5jdGlvbk5hbWUsXG4gICAgICAgIH0pO1xuICAgIH1cblxuICAgIC8qKlxuICAgICAqIERlcHJlY2F0ZWQuIFVzZSBgcnVuTWVzc2FnZUxvY2FsYCBpbnN0ZWFkLlxuICAgICAqIEBwYXJhbSBwYXJhbXNcbiAgICAgKiBAcGFyYW0gd2FpdFBhcmFtc1xuICAgICAqIEBwYXJhbSBwYXJlbnRTcGFuXG4gICAgICogQHJldHVybnMge1Byb21pc2U8dW5rbm93bj59XG4gICAgICovXG4gICAgYXN5bmMgcHJvY2Vzc1J1bk1lc3NhZ2VMb2NhbChcbiAgICAgICAgcGFyYW1zOiBUT05Db250cmFjdFJ1bk1lc3NhZ2UsXG4gICAgICAgIHdhaXRQYXJhbXM/OiBUT05Db250cmFjdEFjY291bnRXYWl0UGFyYW1zLFxuICAgICAgICBwYXJlbnRTcGFuPzogKFNwYW4gfCBTcGFuQ29udGV4dCksXG4gICAgKTogUHJvbWlzZTxUT05Db250cmFjdFJ1blJlc3VsdD4ge1xuICAgICAgICB0aGlzLmNvbmZpZy5sb2coJ3Byb2Nlc3NSdW5NZXNzYWdlTG9jYWwnLCBwYXJhbXMpO1xuXG4gICAgICAgIGNvbnN0IGFjY291bnQgPSBhd2FpdCB0aGlzLmdldEFjY291bnQocGFyYW1zLmFkZHJlc3MsIHRydWUsIHdhaXRQYXJhbXMsIHBhcmVudFNwYW4pO1xuXG4gICAgICAgIHJldHVybiB0aGlzLnJlcXVlc3RDb3JlKCdjb250cmFjdHMucnVuLmxvY2FsLm1zZycsIHtcbiAgICAgICAgICAgIGFkZHJlc3M6IHBhcmFtcy5hZGRyZXNzLFxuICAgICAgICAgICAgYWNjb3VudCxcbiAgICAgICAgICAgIGFiaTogcGFyYW1zLmFiaSxcbiAgICAgICAgICAgIGZ1bmN0aW9uTmFtZTogcGFyYW1zLmZ1bmN0aW9uTmFtZSxcbiAgICAgICAgICAgIG1lc3NhZ2VCYXNlNjQ6IHBhcmFtcy5tZXNzYWdlLm1lc3NhZ2VCb2R5QmFzZTY0LFxuICAgICAgICB9KTtcbiAgICB9XG5cbiAgICAvLyBGZWUgY2FsY3VsYXRpb25cblxuICAgIGJpZ0JhbGFuY2UgPSAnMHgxMDAwMDAwMDAwMDAwMCc7XG5cbiAgICBhc3luYyBjYWxjUnVuRmVlcyhcbiAgICAgICAgcGFyYW1zOiBUT05Db250cmFjdENhbGNSdW5GZWVQYXJhbXMsXG4gICAgICAgIHBhcmVudFNwYW4/OiAoU3BhbiB8IFNwYW5Db250ZXh0KSxcbiAgICApOiBQcm9taXNlPFRPTkNvbnRyYWN0Q2FsY0ZlZVJlc3VsdD4ge1xuICAgICAgICB0aGlzLmNvbmZpZy5sb2coJ2NhbGNSdW5GZWVzJywgcGFyYW1zKTtcblxuICAgICAgICBjb25zdCBhY2NvdW50ID0gYXdhaXQgdGhpcy5nZXRBY2NvdW50KHBhcmFtcy5hZGRyZXNzLCB0cnVlLCBwYXJhbXMud2FpdFBhcmFtcywgcGFyZW50U3Bhbik7XG5cbiAgICAgICAgaWYgKHBhcmFtcy5lbXVsYXRlQmFsYW5jZSkge1xuICAgICAgICAgICAgYWNjb3VudC5iYWxhbmNlID0gdGhpcy5iaWdCYWxhbmNlO1xuICAgICAgICB9XG5cbiAgICAgICAgcmV0dXJuIHRoaXMucmVxdWVzdENvcmUoJ2NvbnRyYWN0cy5ydW4uZmVlJywge1xuICAgICAgICAgICAgYWRkcmVzczogcGFyYW1zLmFkZHJlc3MsXG4gICAgICAgICAgICBhY2NvdW50LFxuICAgICAgICAgICAgYWJpOiBwYXJhbXMuYWJpLFxuICAgICAgICAgICAgZnVuY3Rpb25OYW1lOiBwYXJhbXMuZnVuY3Rpb25OYW1lLFxuICAgICAgICAgICAgaW5wdXQ6IHBhcmFtcy5pbnB1dCxcbiAgICAgICAgICAgIGtleVBhaXI6IHBhcmFtcy5rZXlQYWlyLFxuICAgICAgICB9KTtcbiAgICB9XG5cbiAgICBhc3luYyBjYWxjRGVwbG95RmVlcyhcbiAgICAgICAgcGFyYW1zOiBUT05Db250cmFjdENhbGNEZXBsb3lGZWVQYXJhbXMsXG4gICAgICAgIHBhcmVudFNwYW4/OiAoU3BhbiB8IFNwYW5Db250ZXh0KSxcbiAgICApOiBQcm9taXNlPFRPTkNvbnRyYWN0Q2FsY0ZlZVJlc3VsdD4ge1xuICAgICAgICB0aGlzLmNvbmZpZy5sb2coJ2NhbGNEZXBsb3lGZWVzJywgcGFyYW1zKTtcblxuICAgICAgICBjb25zdCBtZXNzYWdlID0gYXdhaXQgdGhpcy5jcmVhdGVEZXBsb3lNZXNzYWdlKHBhcmFtcyk7XG5cbiAgICAgICAgcmV0dXJuIHRoaXMuY2FsY01zZ1Byb2Nlc3NGZWVzKHtcbiAgICAgICAgICAgIGFkZHJlc3M6IG1lc3NhZ2UuYWRkcmVzcyxcbiAgICAgICAgICAgIG1lc3NhZ2U6IG1lc3NhZ2UubWVzc2FnZSxcbiAgICAgICAgICAgIGVtdWxhdGVCYWxhbmNlOiBwYXJhbXMuZW11bGF0ZUJhbGFuY2UsXG4gICAgICAgICAgICBuZXdBY2NvdW50OiBwYXJhbXMubmV3QWNjb3VudCxcbiAgICAgICAgfSwgcGFyZW50U3Bhbik7XG4gICAgfVxuXG4gICAgYXN5bmMgY2FsY01zZ1Byb2Nlc3NGZWVzKFxuICAgICAgICBwYXJhbXM6IFRPTkNvbnRyYWN0Q2FsY01zZ1Byb2Nlc3NpbmdGZWVzUGFyYW1zLFxuICAgICAgICBwYXJlbnRTcGFuPzogKFNwYW4gfCBTcGFuQ29udGV4dCksXG4gICAgKTogUHJvbWlzZTxUT05Db250cmFjdENhbGNGZWVSZXN1bHQ+IHtcbiAgICAgICAgdGhpcy5jb25maWcubG9nKCdjYWxjTXNnUHJvY2Vzc0ZlZXMnLCBwYXJhbXMpO1xuXG4gICAgICAgIGxldCBhY2NvdW50OiBRQWNjb3VudCA9IHtcbiAgICAgICAgICAgIGJhbGFuY2U6IHRoaXMuYmlnQmFsYW5jZSxcbiAgICAgICAgICAgIGlkOiBwYXJhbXMuYWRkcmVzcyxcbiAgICAgICAgICAgIGxhc3RfcGFpZDogTWF0aC5mbG9vcihEYXRlLm5vdygpIC8gMTAwMCksXG4gICAgICAgIH07XG5cbiAgICAgICAgaWYgKCFwYXJhbXMubmV3QWNjb3VudCkge1xuICAgICAgICAgICAgYWNjb3VudCA9IGF3YWl0IHRoaXMuZ2V0QWNjb3VudChwYXJhbXMuYWRkcmVzcywgZmFsc2UsIHBhcmFtcy53YWl0UGFyYW1zLCBwYXJlbnRTcGFuKTtcbiAgICAgICAgfVxuXG4gICAgICAgIGlmIChwYXJhbXMuZW11bGF0ZUJhbGFuY2UpIHtcbiAgICAgICAgICAgIGFjY291bnQuYmFsYW5jZSA9IHRoaXMuYmlnQmFsYW5jZTtcbiAgICAgICAgfVxuXG4gICAgICAgIHJldHVybiB0aGlzLnJlcXVlc3RDb3JlKCdjb250cmFjdHMucnVuLmZlZS5tc2cnLCB7XG4gICAgICAgICAgICBhZGRyZXNzOiBwYXJhbXMuYWRkcmVzcyxcbiAgICAgICAgICAgIGFjY291bnQsXG4gICAgICAgICAgICBtZXNzYWdlQmFzZTY0OiBwYXJhbXMubWVzc2FnZS5tZXNzYWdlQm9keUJhc2U2NCxcbiAgICAgICAgfSk7XG4gICAgfVxuXG4gICAgLy8gQWRkcmVzcyBwcm9jZXNzaW5nXG5cbiAgICBhc3luYyBjb252ZXJ0QWRkcmVzcyhcbiAgICAgICAgcGFyYW1zOiBUT05Db250cmFjdENvbnZlcnRBZGRyZXNzUGFyYW1zLFxuICAgICk6IFByb21pc2U8VE9OQ29udHJhY3RDb252ZXJ0QWRkcmVzc1Jlc3VsdD4ge1xuICAgICAgICByZXR1cm4gdGhpcy5yZXF1ZXN0Q29yZSgnY29udHJhY3RzLmFkZHJlc3MuY29udmVydCcsIHBhcmFtcyk7XG4gICAgfVxuXG4gICAgLy8gSW50ZXJuYWxzXG5cbiAgICBhc3luYyBpbnRlcm5hbERlcGxveU5hdGl2ZShwYXJhbXM6IFRPTkNvbnRyYWN0RGVwbG95UGFyYW1zKTogUHJvbWlzZTxUT05Db250cmFjdERlcGxveVJlc3VsdD4ge1xuICAgICAgICByZXR1cm4gdGhpcy5yZXF1ZXN0Q29yZSgnY29udHJhY3RzLmRlcGxveScsIHtcbiAgICAgICAgICAgIGFiaTogcGFyYW1zLnBhY2thZ2UuYWJpLFxuICAgICAgICAgICAgY29uc3RydWN0b3JIZWFkZXI6IHBhcmFtcy5jb25zdHJ1Y3RvckhlYWRlcixcbiAgICAgICAgICAgIGNvbnN0cnVjdG9yUGFyYW1zOiBwYXJhbXMuY29uc3RydWN0b3JQYXJhbXMsXG4gICAgICAgICAgICBpbml0UGFyYW1zOiBwYXJhbXMuaW5pdFBhcmFtcyxcbiAgICAgICAgICAgIGltYWdlQmFzZTY0OiBwYXJhbXMucGFja2FnZS5pbWFnZUJhc2U2NCxcbiAgICAgICAgICAgIGtleVBhaXI6IHBhcmFtcy5rZXlQYWlyLFxuICAgICAgICB9KTtcbiAgICB9XG5cblxuICAgIGFzeW5jIGludGVybmFsUnVuTmF0aXZlKHBhcmFtczogVE9OQ29udHJhY3RSdW5QYXJhbXMpOiBQcm9taXNlPFRPTkNvbnRyYWN0UnVuUmVzdWx0PiB7XG4gICAgICAgIHJldHVybiB0aGlzLnJlcXVlc3RDb3JlKCdjb250cmFjdHMucnVuJywge1xuICAgICAgICAgICAgYWRkcmVzczogcGFyYW1zLmFkZHJlc3MsXG4gICAgICAgICAgICBhYmk6IHBhcmFtcy5hYmksXG4gICAgICAgICAgICBmdW5jdGlvbk5hbWU6IHBhcmFtcy5mdW5jdGlvbk5hbWUsXG4gICAgICAgICAgICBoZWFkZXI6IHBhcmFtcy5oZWFkZXIsXG4gICAgICAgICAgICBpbnB1dDogcGFyYW1zLmlucHV0LFxuICAgICAgICAgICAga2V5UGFpcjogcGFyYW1zLmtleVBhaXIsXG4gICAgICAgIH0pO1xuICAgIH1cblxuXG4gICAgYXN5bmMgcmV0cnlDYWxsKGNhbGw6IChpbmRleDogbnVtYmVyKSA9PiBQcm9taXNlPGFueT4pOiBQcm9taXNlPGFueT4ge1xuICAgICAgICBjb25zdCByZXRyaWVzQ291bnQgPSB0aGlzLmNvbmZpZy5tZXNzYWdlUmV0cmllc0NvdW50KCk7XG4gICAgICAgIGZvciAobGV0IGkgPSAwOyBpIDw9IHJldHJpZXNDb3VudDsgaSArPSAxKSB7XG4gICAgICAgICAgICBpZiAoaSA+IDApIHtcbiAgICAgICAgICAgICAgICB0aGlzLmNvbmZpZy5sb2coYFJldHJ5ICMke2l9YCk7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICB0cnkge1xuICAgICAgICAgICAgICAgIHJldHVybiBhd2FpdCBjYWxsKGkpO1xuICAgICAgICAgICAgfSBjYXRjaCAoZXJyb3IpIHtcbiAgICAgICAgICAgICAgICAvLyByZXRyeSBpZiBtZXNzYWdlIGV4cGlyZWQgb3IgaWYgcmVzb2x2aW5nIHJldHVybmVkIHRoYXQgbWVzc2FnZSBleHBpcmVkL3JlcGxheVxuICAgICAgICAgICAgICAgIC8vIHByb3RlY3Rpb24gZXJyb3Igb3IgaWYgdHJhbnNhY3Rpb24gd2l0aCBtZXNzYWdlIGV4cGlyZWQvcmVwbGF5IHByb3RlY3Rpb24gZXJyb3JcbiAgICAgICAgICAgICAgICAvLyByZXR1cm5lZFxuICAgICAgICAgICAgICAgIGNvbnN0IHVzZVJldHJ5ID0gZXJyb3IuY29kZSA9PT0gVE9ORXJyb3JDb2RlLk1FU1NBR0VfRVhQSVJFRFxuICAgICAgICAgICAgICAgICAgICB8fCBUT05DbGllbnRFcnJvci5pc09yaWdpbmFsQ29udHJhY3RFcnJvcihlcnJvciwgVE9OQ29udHJhY3RFeGl0Q29kZS5SRVBMQVlfUFJPVEVDVElPTilcbiAgICAgICAgICAgICAgICAgICAgfHwgVE9OQ2xpZW50RXJyb3IuaXNPcmlnaW5hbENvbnRyYWN0RXJyb3IoZXJyb3IsIFRPTkNvbnRyYWN0RXhpdENvZGUuTUVTU0FHRV9FWFBJUkVEKVxuICAgICAgICAgICAgICAgICAgICB8fCBUT05DbGllbnRFcnJvci5pc1Jlc29sdmVkQ29udHJhY3RFcnJvckFmdGVyRXhwaXJlKGVycm9yLCBUT05Db250cmFjdEV4aXRDb2RlLlJFUExBWV9QUk9URUNUSU9OKVxuICAgICAgICAgICAgICAgICAgICB8fCBUT05DbGllbnRFcnJvci5pc1Jlc29sdmVkQ29udHJhY3RFcnJvckFmdGVyRXhwaXJlKGVycm9yLCBUT05Db250cmFjdEV4aXRDb2RlLk1FU1NBR0VfRVhQSVJFRCk7XG4gICAgICAgICAgICAgICAgaWYgKCF1c2VSZXRyeSB8fCBpID09PSByZXRyaWVzQ291bnQpIHtcbiAgICAgICAgICAgICAgICAgICAgdGhyb3cgZXJyb3I7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICAgIHRocm93IFRPTkNsaWVudEVycm9yLmludGVybmFsRXJyb3IoJ0FsbCByZXRyeSBhdHRlbXB0cyBmYWlsZWQnKTtcbiAgICB9XG5cblxuICAgIGFzeW5jIGludGVybmFsRGVwbG95SnMoXG4gICAgICAgIHBhcmFtczogVE9OQ29udHJhY3REZXBsb3lQYXJhbXMsXG4gICAgICAgIHBhcmVudFNwYW4/OiAoU3BhbiB8IFNwYW5Db250ZXh0KSxcbiAgICApOiBQcm9taXNlPFRPTkNvbnRyYWN0RGVwbG95UmVzdWx0PiB7XG4gICAgICAgIHRoaXMuY29uZmlnLmxvZygnRGVwbG95IHN0YXJ0Jyk7XG4gICAgICAgIHJldHVybiB0aGlzLnJldHJ5Q2FsbChhc3luYyAocmV0cnlJbmRleCkgPT4ge1xuICAgICAgICAgICAgY29uc3QgZGVwbG95TWVzc2FnZSA9IGF3YWl0IHRoaXMuY3JlYXRlRGVwbG95TWVzc2FnZShwYXJhbXMsIHJldHJ5SW5kZXgpO1xuICAgICAgICAgICAgaWYgKGF3YWl0IHRoaXMuaXNEZXBsb3llZChkZXBsb3lNZXNzYWdlLmFkZHJlc3MsIHBhcmVudFNwYW4pKSB7XG4gICAgICAgICAgICAgICAgcmV0dXJuIHtcbiAgICAgICAgICAgICAgICAgICAgYWRkcmVzczogZGVwbG95TWVzc2FnZS5hZGRyZXNzLFxuICAgICAgICAgICAgICAgICAgICBhbHJlYWR5RGVwbG95ZWQ6IHRydWUsXG4gICAgICAgICAgICAgICAgfTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGNvbnN0IHByb2Nlc3NpbmcgPSBhd2FpdCB0aGlzLnNlbmRNZXNzYWdlKGRlcGxveU1lc3NhZ2UubWVzc2FnZSwgcGFyZW50U3Bhbik7XG4gICAgICAgICAgICByZXR1cm4gdGhpcy53YWl0Rm9yRGVwbG95VHJhbnNhY3Rpb24oZGVwbG95TWVzc2FnZSwgcHJvY2Vzc2luZywgcGFyZW50U3Bhbik7XG4gICAgICAgIH0pO1xuICAgIH1cblxuXG4gICAgYXN5bmMgaW50ZXJuYWxSdW5KcyhcbiAgICAgICAgcGFyYW1zOiBUT05Db250cmFjdFJ1blBhcmFtcyxcbiAgICAgICAgcGFyZW50U3Bhbj86IChTcGFuIHwgU3BhbkNvbnRleHQpLFxuICAgICk6IFByb21pc2U8VE9OQ29udHJhY3RSdW5SZXN1bHQ+IHtcbiAgICAgICAgdGhpcy5jb25maWcubG9nKCdSdW4gc3RhcnQnKTtcbiAgICAgICAgcmV0dXJuIHRoaXMucmV0cnlDYWxsKGFzeW5jIChyZXRyeUluZGV4KSA9PiB7XG4gICAgICAgICAgICBjb25zdCBydW5NZXNzYWdlID0gYXdhaXQgdGhpcy5jcmVhdGVSdW5NZXNzYWdlKHBhcmFtcywgcmV0cnlJbmRleCk7XG4gICAgICAgICAgICBjb25zdCBwcm9jZXNzaW5nID0gYXdhaXQgdGhpcy5zZW5kTWVzc2FnZShydW5NZXNzYWdlLm1lc3NhZ2UsIHBhcmVudFNwYW4pO1xuICAgICAgICAgICAgcmV0dXJuIHRoaXMud2FpdEZvclJ1blRyYW5zYWN0aW9uKHJ1bk1lc3NhZ2UsIHByb2Nlc3NpbmcsIHBhcmVudFNwYW4pO1xuICAgICAgICB9KTtcbiAgICB9XG5cblxuICAgIGFzeW5jIGdldEFjY291bnQoXG4gICAgICAgIGFkZHJlc3M6IHN0cmluZyxcbiAgICAgICAgYWN0aXZlOiBib29sZWFuLFxuICAgICAgICB3YWl0UGFyYW1zPzogVE9OQ29udHJhY3RBY2NvdW50V2FpdFBhcmFtcyxcbiAgICAgICAgcGFyZW50U3Bhbj86IChTcGFuIHwgU3BhbkNvbnRleHQpLFxuICAgICk6IFByb21pc2U8UUFjY291bnQ+IHtcbiAgICAgICAgY29uc3QgZmlsdGVyOiB7IFtzdHJpbmddOiBhbnkgfSA9IHtcbiAgICAgICAgICAgIGlkOiB7IGVxOiBhZGRyZXNzIH0sXG4gICAgICAgIH07XG4gICAgICAgIGlmICh3YWl0UGFyYW1zICYmIHdhaXRQYXJhbXMudHJhbnNhY3Rpb25MdCkge1xuICAgICAgICAgICAgZmlsdGVyLmxhc3RfdHJhbnNfbHQgPSB7IGdlOiB3YWl0UGFyYW1zLnRyYW5zYWN0aW9uTHQgfTtcbiAgICAgICAgfVxuICAgICAgICBpZiAoYWN0aXZlKSB7XG4gICAgICAgICAgICBmaWx0ZXIuYWNjX3R5cGUgPSB7IGVxOiBRQWNjb3VudFR5cGUuYWN0aXZlIH07XG4gICAgICAgIH1cblxuICAgICAgICB0aGlzLmNvbmZpZy5sb2coJ2dldEFjY291bnQuIEZpbHRlcicsIGZpbHRlcik7XG4gICAgICAgIGNvbnN0IGFjY291bnRzID0gYXdhaXQgdGhpcy5xdWVyaWVzLmFjY291bnRzLnF1ZXJ5KHtcbiAgICAgICAgICAgIGZpbHRlcixcbiAgICAgICAgICAgIHJlc3VsdDogJ2lkIGFjY190eXBlIGJvYyBjb2RlX2hhc2ggZGF0YV9oYXNoIGJhbGFuY2UgYmFsYW5jZV9vdGhlciB7IGN1cnJlbmN5IHZhbHVlIH0gbGFzdF9wYWlkJyxcbiAgICAgICAgICAgIC4uLih3YWl0UGFyYW1zICYmIHdhaXRQYXJhbXMudGltZW91dCA/IHsgdGltZW91dDogd2FpdFBhcmFtcy50aW1lb3V0IH0gOiB7fSksXG4gICAgICAgICAgICBwYXJlbnRTcGFuLFxuICAgICAgICB9KTtcbiAgICAgICAgaWYgKGFjY291bnRzLmxlbmd0aCA9PT0gMCkge1xuICAgICAgICAgICAgdGhyb3cgVE9OQ2xpZW50RXJyb3IuYWNjb3VudE1pc3NpbmcoYWRkcmVzcyk7XG4gICAgICAgIH1cbiAgICAgICAgY29uc3QgYWNjb3VudCA9IGFjY291bnRzWzBdO1xuICAgICAgICByZW1vdmVUeXBlTmFtZShhY2NvdW50KTtcbiAgICAgICAgdGhpcy5jb25maWcubG9nKCdnZXRBY2NvdW50LiBBY2NvdW50IHJlY2VpdmVkJywgYWNjb3VudCk7XG4gICAgICAgIHJldHVybiBhY2NvdW50O1xuICAgIH1cblxuICAgIGFzeW5jIGludGVybmFsUnVuTG9jYWxKcyhcbiAgICAgICAgcGFyYW1zOiBUT05Db250cmFjdFJ1bkxvY2FsUGFyYW1zLFxuICAgICAgICBwYXJlbnRTcGFuPzogKFNwYW4gfCBTcGFuQ29udGV4dCksXG4gICAgKTogUHJvbWlzZTxUT05Db250cmFjdFJ1bkxvY2FsUmVzdWx0PiB7XG4gICAgICAgIGNvbnN0IGFkZHJlc3MgPSBwYXJhbXMuYWRkcmVzcztcbiAgICAgICAgaWYgKCFhZGRyZXNzKSB7XG4gICAgICAgICAgICB0aHJvdyBUT05DbGllbnRFcnJvci5hZGRyZXNzUmVxdWlyZWRGb3JSdW5Mb2NhbCgpO1xuICAgICAgICB9XG4gICAgICAgIGNvbnN0IGFjY291bnQgPSBwYXJhbXMuYWNjb3VudCB8fCAoYXdhaXQgdGhpcy5nZXRBY2NvdW50KFxuICAgICAgICAgICAgYWRkcmVzcyxcbiAgICAgICAgICAgIGZhbHNlLFxuICAgICAgICAgICAgcGFyYW1zLndhaXRQYXJhbXMsXG4gICAgICAgICAgICBwYXJlbnRTcGFuLFxuICAgICAgICApKTtcbiAgICAgICAgaWYgKCFhY2NvdW50LmNvZGVfaGFzaCkge1xuICAgICAgICAgICAgdGhyb3cgVE9OQ2xpZW50RXJyb3IuYWNjb3VudENvZGVNaXNzaW5nKGFkZHJlc3MsIChhY2NvdW50OiBhbnkpLmJhbGFuY2UpO1xuICAgICAgICB9XG4gICAgICAgIHJldHVybiB0aGlzLnJlcXVlc3RDb3JlKCdjb250cmFjdHMucnVuLmxvY2FsJywge1xuICAgICAgICAgICAgYWRkcmVzcyxcbiAgICAgICAgICAgIGFjY291bnQsXG4gICAgICAgICAgICBhYmk6IHBhcmFtcy5hYmksXG4gICAgICAgICAgICBmdW5jdGlvbk5hbWU6IHBhcmFtcy5mdW5jdGlvbk5hbWUsXG4gICAgICAgICAgICBpbnB1dDogcGFyYW1zLmlucHV0LFxuICAgICAgICAgICAga2V5UGFpcjogcGFyYW1zLmtleVBhaXIsXG4gICAgICAgICAgICBmdWxsUnVuOiBwYXJhbXMuZnVsbFJ1bixcbiAgICAgICAgfSk7XG4gICAgfVxuXG4gICAgYXN5bmMgaW50ZXJuYWxSdW5NZXNzYWdlTG9jYWxKcyhcbiAgICAgICAgcGFyYW1zOiBUT05Db250cmFjdFJ1bk1lc3NhZ2VMb2NhbFBhcmFtcyxcbiAgICAgICAgcGFyZW50U3Bhbj86IChTcGFuIHwgU3BhbkNvbnRleHQpLFxuICAgICk6IFByb21pc2U8VE9OQ29udHJhY3RSdW5Mb2NhbFJlc3VsdD4ge1xuICAgICAgICBjb25zdCBhZGRyZXNzID0gcGFyYW1zLmFkZHJlc3M7XG4gICAgICAgIGlmICghYWRkcmVzcykge1xuICAgICAgICAgICAgdGhyb3cgVE9OQ2xpZW50RXJyb3IuYWRkcmVzc1JlcXVpcmVkRm9yUnVuTG9jYWwoKTtcbiAgICAgICAgfVxuICAgICAgICBjb25zdCBhY2NvdW50ID0gcGFyYW1zLmFjY291bnQgfHwgKGF3YWl0IHRoaXMuZ2V0QWNjb3VudChcbiAgICAgICAgICAgIGFkZHJlc3MsXG4gICAgICAgICAgICBmYWxzZSxcbiAgICAgICAgICAgIHBhcmFtcy53YWl0UGFyYW1zLFxuICAgICAgICAgICAgcGFyZW50U3BhbixcbiAgICAgICAgKSk7XG4gICAgICAgIGlmICghYWNjb3VudC5jb2RlX2hhc2gpIHtcbiAgICAgICAgICAgIHRocm93IFRPTkNsaWVudEVycm9yLmFjY291bnRDb2RlTWlzc2luZyhhZGRyZXNzLCAoYWNjb3VudDogYW55KS5iYWxhbmNlKTtcbiAgICAgICAgfVxuICAgICAgICByZXR1cm4gdGhpcy5yZXF1ZXN0Q29yZSgnY29udHJhY3RzLnJ1bi5sb2NhbC5tc2cnLCB7XG4gICAgICAgICAgICBhZGRyZXNzLFxuICAgICAgICAgICAgYWNjb3VudCxcbiAgICAgICAgICAgIGFiaTogcGFyYW1zLmFiaSxcbiAgICAgICAgICAgIGZ1bmN0aW9uTmFtZTogcGFyYW1zLmZ1bmN0aW9uTmFtZSxcbiAgICAgICAgICAgIG1lc3NhZ2VCYXNlNjQ6IHBhcmFtcy5tZXNzYWdlQm9keUJhc2U2NCxcbiAgICAgICAgICAgIGZ1bGxSdW46IHBhcmFtcy5mdWxsUnVuLFxuICAgICAgICB9KTtcbiAgICB9XG59XG5cblRPTkNvbnRyYWN0c01vZHVsZS5tb2R1bGVOYW1lID0gJ1RPTkNvbnRyYWN0c01vZHVsZSc7XG5cbmNvbnN0IHRyYW5zYWN0aW9uRGV0YWlscyA9IGBcbiAgICBpZFxuICAgIGluX21zZ1xuICAgIHRyX3R5cGVcbiAgICBzdGF0dXNcbiAgICBpbl9tc2dcbiAgICBvdXRfbXNnc1xuICAgIGJsb2NrX2lkXG4gICAgbm93XG4gICAgYWJvcnRlZFxuICAgIGx0XG4gICAgdG90YWxfZmVlc1xuICAgIHN0b3JhZ2Uge1xuICAgICAgICBzdGF0dXNfY2hhbmdlXG4gICAgICAgIHN0b3JhZ2VfZmVlc19jb2xsZWN0ZWRcbiAgICB9XG4gICAgY29tcHV0ZSB7XG4gICAgICAgIGNvbXB1dGVfdHlwZVxuICAgICAgICBza2lwcGVkX3JlYXNvblxuICAgICAgICBzdWNjZXNzXG4gICAgICAgIGV4aXRfY29kZVxuICAgICAgICBnYXNfZmVlc1xuICAgICAgICBnYXNfdXNlZFxuICAgIH1cbiAgICBhY3Rpb24ge1xuICAgICAgICBzdWNjZXNzXG4gICAgICAgIHZhbGlkXG4gICAgICAgIHJlc3VsdF9jb2RlXG4gICAgICAgIG5vX2Z1bmRzXG4gICAgICAgIHRvdGFsX2Z3ZF9mZWVzXG4gICAgICAgIHRvdGFsX2FjdGlvbl9mZWVzXG4gICAgfVxuICAgIG91dF9tZXNzYWdlcyB7XG4gICAgICAgIGlkXG4gICAgICAgIG1zZ190eXBlXG4gICAgICAgIGJvZHlcbiAgICAgICAgdmFsdWVcbiAgICB9XG4gICBgO1xuXG5jb25zdCBCTE9DS19GSUVMRFMgPSBgXG4gICAgaWRcbiAgICBnZW5fdXRpbWVcbiAgICBhZnRlcl9zcGxpdFxuICAgIHdvcmtjaGFpbl9pZFxuICAgIHNoYXJkXG4gICAgaW5fbXNnX2Rlc2NyIHtcbiAgICAgICAgbXNnX2lkXG4gICAgICAgIHRyYW5zYWN0aW9uX2lkXG4gICAgfVxuYDtcblxuY29uc3QgVFJBTlNBQ1RJT05fRklFTERTX09SRElOQVJZID0gYFxuICAgIGlkXG4gICAgYWJvcnRlZFxuICAgIGNvbXB1dGUge1xuICAgICAgICBza2lwcGVkX3JlYXNvblxuICAgICAgICBleGl0X2NvZGVcbiAgICAgICAgc3VjY2Vzc1xuICAgICAgICBnYXNfZmVlc1xuICAgIH1cbiAgICBzdG9yYWdlIHtcbiAgICAgICBzdGF0dXNfY2hhbmdlXG4gICAgICAgc3RvcmFnZV9mZWVzX2NvbGxlY3RlZFxuICAgIH1cbiAgICBhY3Rpb24ge1xuICAgICAgICBzdWNjZXNzXG4gICAgICAgIHZhbGlkXG4gICAgICAgIG5vX2Z1bmRzXG4gICAgICAgIHJlc3VsdF9jb2RlXG4gICAgICAgIHRvdGFsX2Z3ZF9mZWVzXG4gICAgICAgIHRvdGFsX2FjdGlvbl9mZWVzXG4gICAgfVxuICAgIGluX21zZ1xuICAgIG5vd1xuICAgIG91dF9tc2dzXG4gICAgb3V0X21lc3NhZ2VzIHtcbiAgICAgICAgaWRcbiAgICAgICAgYm9keVxuICAgICAgICBtc2dfdHlwZVxuICAgICAgICB2YWx1ZVxuICAgIH1cbiAgICBzdGF0dXNcbiAgICB0b3RhbF9mZWVzXG5gO1xuIl19