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
        var coreParams, hasCode, address, account;
        return _regenerator["default"].wrap(function _callee11$(_context11) {
          while (1) {
            switch (_context11.prev = _context11.next) {
              case 0:
                coreParams = params;
                hasCode = params.bocBase64 || params.codeBase64 && params.dataBase64;

                if (hasCode) {
                  _context11.next = 14;
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
                if (account.boc) {
                  account.bocBase64 = account.boc;
                }

                delete account.boc;
                coreParams = _objectSpread(_objectSpread({}, account), params);

              case 14:
                return _context11.abrupt("return", this.requestCore('tvm.get', coreParams));

              case 15:
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy9tb2R1bGVzL1RPTkNvbnRyYWN0c01vZHVsZS5qcyJdLCJuYW1lcyI6WyJUT05BZGRyZXNzU3RyaW5nVmFyaWFudCIsIkFjY291bnRJZCIsIkhleCIsIkJhc2U2NCIsIlRPTkNsaWVudFRyYW5zYWN0aW9uUGhhc2UiLCJzdG9yYWdlIiwiY29tcHV0ZVNraXBwZWQiLCJjb21wdXRlVm0iLCJhY3Rpb24iLCJ1bmtub3duIiwiVE9OQ2xpZW50Q29tcHV0ZVNraXBwZWRTdGF0dXMiLCJub1N0YXRlIiwiYmFkU3RhdGUiLCJub0dhcyIsIlRPTkNsaWVudFN0b3JhZ2VTdGF0dXMiLCJ1bmNoYW5nZWQiLCJmcm96ZW4iLCJkZWxldGVkIiwiUUluTXNnVHlwZSIsImV4dGVybmFsIiwiaWhyIiwiaW1tZWRpYXRlbHkiLCJ0cmFuc2l0IiwiZGlzY2FyZGVkRmluYWwiLCJkaXNjYXJkZWRUcmFuc2l0IiwiUU91dE1zZ1R5cGUiLCJvdXRNc2dOZXciLCJkZXF1ZXVlSW1tZWRpYXRlbHkiLCJkZXF1ZXVlIiwidHJhbnNpdFJlcXVpcmVkIiwibm9uZSIsIlFNZXNzYWdlVHlwZSIsImludGVybmFsIiwiZXh0SW4iLCJleHRPdXQiLCJRTWVzc2FnZVByb2Nlc3NpbmdTdGF0dXMiLCJxdWV1ZWQiLCJwcm9jZXNzaW5nIiwicHJlbGltaW5hcnkiLCJwcm9wb3NlZCIsImZpbmFsaXplZCIsInJlZnVzZWQiLCJ0cmFuc2l0aW5nIiwiUUJsb2NrUHJvY2Vzc2luZ1N0YXR1cyIsIlFTcGxpdFR5cGUiLCJzcGxpdCIsIm1lcmdlIiwiUUFjY291bnRUeXBlIiwidW5pbml0IiwiYWN0aXZlIiwiUVRyYW5zYWN0aW9uVHlwZSIsIm9yZGluYXJ5IiwidGljayIsInRvY2siLCJzcGxpdFByZXBhcmUiLCJzcGxpdEluc3RhbGwiLCJtZXJnZVByZXBhcmUiLCJtZXJnZUluc3RhbGwiLCJRVHJhbnNhY3Rpb25Qcm9jZXNzaW5nU3RhdHVzIiwiUUFjY291bnRTdGF0dXMiLCJub25FeGlzdCIsIlFBY2NvdW50U3RhdHVzQ2hhbmdlIiwiUUNvbXB1dGVUeXBlIiwic2tpcHBlZCIsInZtIiwiUVNraXBSZWFzb24iLCJRQm91bmNlVHlwZSIsIm5lZ0Z1bmRzIiwibm9GdW5kcyIsIm9rIiwiTUFTVEVSQ0hBSU5fSUQiLCJFWFRSQV9UUkFOU0FDVElPTl9XQUlUSU5HX1RJTUUiLCJCTE9DS19UUkFOU0FDVElPTl9XQUlUSU5HX1RJTUUiLCJyZW1vdmVUeXBlTmFtZSIsIm9iaiIsIl9fdHlwZW5hbWUiLCJPYmplY3QiLCJ2YWx1ZXMiLCJmb3JFYWNoIiwidmFsdWUiLCJyZW1vdmVQcm9wcyIsInBhdGhzIiwicmVzdWx0IiwicGF0aCIsImRvdFBvcyIsImluZGV4T2YiLCJuYW1lIiwic3Vic3RyIiwiY2hpbGQiLCJyZWR1Y2VkQ2hpbGQiLCJzdGFydE1lc3NhZ2VUcmFjZVNwYW4iLCJ0cmFjZXIiLCJtZXNzYWdlSWQiLCJvcGVyYXRpb25OYW1lIiwidGFncyIsInRyYWNlSWQiLCJzcGFuSWQiLCJyb290Q29udGV4dCIsImV4dHJhY3QiLCJGT1JNQVRfVEVYVF9NQVAiLCJzdGFydFNwYW4iLCJjaGlsZE9mIiwidHJhY2VNZXNzYWdlIiwic3BhbiIsImZpbmlzaCIsIlRPTkNvbnRyYWN0c01vZHVsZSIsImNvbmZpZyIsImNvbnRleHQiLCJnZXRNb2R1bGUiLCJUT05Db25maWdNb2R1bGUiLCJxdWVyaWVzIiwiVE9OUXVlcmllc01vZHVsZSIsInBhcmFtcyIsInBhcmVudFNwYW4iLCJhY2NvdW50cyIsInF1ZXJ5IiwiZmlsdGVyIiwiaWQiLCJlcSIsImFkZHJlc3MiLCJsZW5ndGgiLCJiYWxhbmNlR3JhbXMiLCJiYWxhbmNlIiwidHJhY2UiLCJzZXRUYWciLCJpbnRlcm5hbERlcGxveUpzIiwiaW50ZXJuYWxSdW5KcyIsImludGVybmFsUnVuTG9jYWxKcyIsImludGVybmFsUnVuTWVzc2FnZUxvY2FsSnMiLCJjb3JlUGFyYW1zIiwiaGFzQ29kZSIsImJvY0Jhc2U2NCIsImNvZGVCYXNlNjQiLCJkYXRhQmFzZTY0IiwiVE9OQ2xpZW50RXJyb3IiLCJhZGRyZXNzUmVxdWlyZWRGb3JSdW5Mb2NhbCIsImdldEFjY291bnQiLCJ0aW1lb3V0Iiwid2FpdEZvclRpbWVvdXQiLCJhY2NvdW50IiwiY29kZV9oYXNoIiwiYWNjb3VudENvZGVNaXNzaW5nIiwiYm9jIiwicmVxdWVzdENvcmUiLCJjb25zIiwiaXRlbSIsImludmFsaWRDb25zIiwicHVzaCIsInJldHJ5SW5kZXgiLCJsb2ciLCJhYmkiLCJjb25zdHJ1Y3RvckhlYWRlciIsImNvbnN0cnVjdG9yUGFyYW1zIiwiaW5pdFBhcmFtcyIsImltYWdlQmFzZTY0Iiwia2V5UGFpciIsIndvcmtjaGFpbklkIiwibWVzc2FnZSIsImZ1bmN0aW9uTmFtZSIsImhlYWRlciIsInRyeUluZGV4IiwiaW5wdXQiLCJwdWJsaWNLZXlIZXgiLCJhZGRyZXNzSGV4Iiwic2lnblBhcmFtcyIsImVuY29kZWQiLCJjcmVhdGVTaWduZWRNZXNzYWdlIiwidW5zaWduZWRNZXNzYWdlIiwidW5zaWduZWRCeXRlc0Jhc2U2NCIsInNpZ25CeXRlc0Jhc2U2NCIsImV4cGlyZSIsImdldEJvY0hhc2giLCJtZXNzYWdlQm9keUJhc2U2NCIsImhhc2giLCJEYXRlIiwibm93Iiwic2VuZE5vZGVSZXF1ZXN0RmFpbGVkIiwiTWF0aCIsInNlcnZlclRpbWVEZWx0YSIsImFicyIsIm91dE9mU3luY1RocmVzaG9sZCIsImRyb3BTZXJ2ZXJUaW1lRGVsdGEiLCJjbG9ja091dE9mU3luYyIsImZpbmRMYXN0U2hhcmRCbG9jayIsImxhc3RCbG9ja0lkIiwiZW5zdXJlTWVzc2FnZUlkIiwiaWRCYXNlNjQiLCJCdWZmZXIiLCJmcm9tIiwidG9TdHJpbmciLCJtZXNzYWdlU3BhbiIsInN0YXJ0Um9vdFNwYW4iLCJhZGRUYWdzIiwibWVzc2FnZVNpemUiLCJjZWlsIiwicG9zdFJlcXVlc3RzIiwiYm9keSIsInNlbmRpbmdUaW1lIiwicm91bmQiLCJyZXN1bHRGaWVsZHMiLCJzZW5kTWVzc2FnZSIsIndhaXRGb3JUcmFuc2FjdGlvbiIsIm1lc3NhZ2VQcm9jZXNzaW5nU3RhdGUiLCJ0cmFuc2FjdGlvbiIsImNoYWluIiwiYWRkaXRpb25hbEZpbHRlciIsImJsb2NrcyIsIndvcmtjaGFpbl9pZCIsIm9yZGVyQnkiLCJkaXJlY3Rpb24iLCJsaW1pdCIsInNoYXJkcyIsImFkZHJlc3NQYXJ0cyIsIndvcmtjaGFpbiIsIk51bWJlciIsInBhcnNlSW50IiwiZmluZExhc3RCbG9jayIsIm1hc3RlcmNoYWluTGFzdEJsb2NrIiwibm9CbG9ja3MiLCJ3b3JrY2hhaW5MYXN0QmxvY2siLCJhZnRlcl9tZXJnZSIsInNoYXJkIiwiaW52YWxpZEJsb2NrY2hhaW4iLCJtYXN0ZXIiLCJzaGFyZF9oYXNoZXMiLCJmaW5kTWF0Y2hpbmdTaGFyZCIsInNoYXJkQmxvY2siLCJyb290X2hhc2giLCJkZXNjciIsImJsb2NrIiwiY3VycmVudCIsIndhaXRGb3IiLCJwcmV2X3JlZiIsIk9SIiwicHJldl9hbHRfcmVmIiwiQkxPQ0tfRklFTERTIiwiYWZ0ZXJfc3BsaXQiLCJjaGVja1NoYXJkTWF0Y2giLCJuZSIsInRvdGFsU3RhcnQiLCJ0aW1lUmVwb3J0Iiwic3RvcFRpbWUiLCJtZXNzYWdlUHJvY2Vzc2luZ1RpbWVvdXQiLCJpbmZpbml0ZVdhaXQiLCJhZGRUaW1lb3V0IiwibWF4Iiwic3RhcnQiLCJ3YWl0TmV4dEJsb2NrIiwiZW5kIiwiZ2VuX3V0aW1lIiwicmVzb2x2ZWRFcnJvciIsImNvZGUiLCJUT05FcnJvckNvZGUiLCJXQUlUX0ZPUl9USU1FT1VUIiwibmV0d29ya1NpbGVudCIsImJsb2NrSWQiLCJpbk1zZyIsImluX21zZ19kZXNjciIsImZpbmQiLCJ4IiwibXNnX2lkIiwidHJhbnNhY3Rpb25JZCIsInRyYW5zYWN0aW9uX2lkIiwidHJTdGFydCIsInRyYW5zYWN0aW9ucyIsIlRSQU5TQUNUSU9OX0ZJRUxEU19PUkRJTkFSWSIsIk1BWF9USU1FT1VUIiwibWVzc2FnZUV4cGlyZWQiLCJibG9ja1RpbWUiLCJ0cmFuc2FjdGlvbldhaXRUaW1lb3V0Iiwic3BsaWNlIiwiam9pbiIsIk1FU1NBR0VfRVhQSVJFRCIsIlRSQU5TQUNUSU9OX1dBSVRfVElNRU9VVCIsInJlc29sdmVEZXRhaWxlZEVycm9yIiwicHJvY2Vzc1RyYW5zYWN0aW9uIiwicHJvY2Vzc2luZ1RpbWVvdXQiLCJwcm9taXNlcyIsImdldFNlcnZlckluZm8iLCJzZXJ2ZXJJbmZvIiwib3BlcmF0aW9uSWQiLCJzdXBwb3J0c09wZXJhdGlvbklkIiwiZ2VuZXJhdGVPcGVyYXRpb25JZCIsInVuZGVmaW5lZCIsImJsb2NrVGltZW91dCIsIndhaXRFeHBpcmVkIiwibWluX3NoYXJkX2dlbl91dGltZSIsImdlIiwiaXNXYWl0Rm9yVGltZW91dCIsIm1zZyIsImludGVybmFsRXJyb3IiLCJQcm9taXNlIiwicmVzb2x2ZSIsInJlamVjdCIsImluX21zZyIsInN0YXR1cyIsInRyYW5zYWN0aW9uRGV0YWlscyIsInJhY2UiLCJmaW5pc2hPcGVyYXRpb25zIiwidHJhbnNhY3Rpb25Ob3ciLCJibG9ja19pZCIsInRvSVNPU3RyaW5nIiwiaXNNZXNzYWdlRXhwaXJlZCIsImlzQ2xpZW50RXJyb3IiLCJkZXRhaWxlZEVycm9yIiwiZGF0YSIsIm91dHB1dCIsImZlZXMiLCJhY2NvdW50TWlzc2luZyIsImVycm9yIiwibWVzc2FnZUJhc2U2NCIsInRpbWUiLCJtYWluRXJyb3IiLCJhY2NfdHlwZSIsImlzRGVwbG95ZWQiLCJhbHJlYWR5RGVwbG95ZWQiLCJ3YWl0Rm9yRGVwbG95VHJhbnNhY3Rpb24iLCJkZXBsb3lNZXNzYWdlIiwicnVuTWVzc2FnZSIsIndhaXRGb3JSdW5UcmFuc2FjdGlvbiIsIndhaXRQYXJhbXMiLCJlbXVsYXRlQmFsYW5jZSIsImJpZ0JhbGFuY2UiLCJjcmVhdGVEZXBsb3lNZXNzYWdlIiwiY2FsY01zZ1Byb2Nlc3NGZWVzIiwibmV3QWNjb3VudCIsImxhc3RfcGFpZCIsImZsb29yIiwiY2FsbCIsInJldHJpZXNDb3VudCIsIm1lc3NhZ2VSZXRyaWVzQ291bnQiLCJpIiwidXNlUmV0cnkiLCJpc09yaWdpbmFsQ29udHJhY3RFcnJvciIsIlRPTkNvbnRyYWN0RXhpdENvZGUiLCJSRVBMQVlfUFJPVEVDVElPTiIsImlzUmVzb2x2ZWRDb250cmFjdEVycm9yQWZ0ZXJFeHBpcmUiLCJyZXRyeUNhbGwiLCJjcmVhdGVSdW5NZXNzYWdlIiwidHJhbnNhY3Rpb25MdCIsImxhc3RfdHJhbnNfbHQiLCJmdWxsUnVuIiwiVE9OTW9kdWxlIiwibW9kdWxlTmFtZSJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7OztBQUtBOztBQXNEQTs7QUFDQTs7QUFDQTs7QUFDQTs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUVPLElBQU1BLHVCQUF1QixHQUFHO0FBQ25DQyxFQUFBQSxTQUFTLEVBQUUsV0FEd0I7QUFFbkNDLEVBQUFBLEdBQUcsRUFBRSxLQUY4QjtBQUduQ0MsRUFBQUEsTUFBTSxFQUFFO0FBSDJCLENBQWhDOztBQU1BLElBQU1DLHlCQUF5QixHQUFHO0FBQ3JDQyxFQUFBQSxPQUFPLEVBQUUsU0FENEI7QUFFckNDLEVBQUFBLGNBQWMsRUFBRSxnQkFGcUI7QUFHckNDLEVBQUFBLFNBQVMsRUFBRSxXQUgwQjtBQUlyQ0MsRUFBQUEsTUFBTSxFQUFFLFFBSjZCO0FBS3JDQyxFQUFBQSxPQUFPLEVBQUU7QUFMNEIsQ0FBbEM7O0FBUUEsSUFBTUMsNkJBQTZCLEdBQUc7QUFDekNDLEVBQUFBLE9BQU8sRUFBRSxDQURnQztBQUV6Q0MsRUFBQUEsUUFBUSxFQUFFLENBRitCO0FBR3pDQyxFQUFBQSxLQUFLLEVBQUU7QUFIa0MsQ0FBdEM7O0FBTUEsSUFBTUMsc0JBQXNCLEdBQUc7QUFDbENDLEVBQUFBLFNBQVMsRUFBRSxDQUR1QjtBQUVsQ0MsRUFBQUEsTUFBTSxFQUFFLENBRjBCO0FBR2xDQyxFQUFBQSxPQUFPLEVBQUU7QUFIeUIsQ0FBL0I7O0FBTUEsSUFBTUMsVUFBVSxHQUFHO0FBQ3RCQyxFQUFBQSxRQUFRLEVBQUUsQ0FEWTtBQUV0QkMsRUFB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InNvdXJjZXNDb250ZW50IjpbIi8qXG4gKiBDb3B5cmlnaHQgMjAxOC0yMDIwIFRPTiBERVYgU09MVVRJT05TIExURC5cbiAqL1xuLy8gQGZsb3dcblxuaW1wb3J0IHsgVHJhY2VyLCBGT1JNQVRfVEVYVF9NQVAsIFNwYW4sIFNwYW5Db250ZXh0IH0gZnJvbSAnb3BlbnRyYWNpbmcnO1xuaW1wb3J0IHR5cGUge1xuICAgIFFBY2NvdW50LFxuICAgIFFCbG9jayxcbiAgICBRTWVzc2FnZSxcbiAgICBRVHJhbnNhY3Rpb24sXG4gICAgVE9OQ29udHJhY3RBQkksXG4gICAgVE9OQ29udHJhY3RBY2NvdW50V2FpdFBhcmFtcyxcbiAgICBUT05Db250cmFjdENvbnZlcnRBZGRyZXNzUGFyYW1zLFxuICAgIFRPTkNvbnRyYWN0Q29udmVydEFkZHJlc3NSZXN1bHQsXG4gICAgVE9OQ29udHJhY3RDcmVhdGVSdW5Cb2R5UGFyYW1zLFxuICAgIFRPTkNvbnRyYWN0Q3JlYXRlUnVuQm9keVJlc3VsdCxcbiAgICBUT05Db250cmFjdENyZWF0ZVNpZ25lZERlcGxveU1lc3NhZ2VQYXJhbXMsXG4gICAgVE9OQ29udHJhY3RDcmVhdGVTaWduZWRNZXNzYWdlUGFyYW1zLFxuICAgIFRPTkNvbnRyYWN0Q3JlYXRlU2lnbmVkUnVuTWVzc2FnZVBhcmFtcyxcbiAgICBUT05Db250cmFjdERlY29kZU1lc3NhZ2VCb2R5UGFyYW1zLFxuICAgIFRPTkNvbnRyYWN0RGVjb2RlTWVzc2FnZUJvZHlSZXN1bHQsXG4gICAgVE9OQ29udHJhY3REZWNvZGVSdW5PdXRwdXRQYXJhbXMsXG4gICAgVE9OQ29udHJhY3REZXBsb3lNZXNzYWdlLFxuICAgIFRPTkNvbnRyYWN0RGVwbG95UGFyYW1zLFxuICAgIFRPTkNvbnRyYWN0RGVwbG95UmVzdWx0LFxuICAgIFRPTkNvbnRyYWN0Q2FsY0RlcGxveUZlZVBhcmFtcyxcbiAgICBUT05Db250cmFjdEJvYyxcbiAgICBUT05Db250cmFjdEdldEJvY0hhc2hSZXN1bHQsXG4gICAgVE9OQ29udHJhY3RHZXRDb2RlRnJvbUltYWdlUGFyYW1zLFxuICAgIFRPTkNvbnRyYWN0R2V0Q29kZUZyb21JbWFnZVJlc3VsdCxcbiAgICBUT05Db250cmFjdEdldERlcGxveURhdGFQYXJhbXMsXG4gICAgVE9OQ29udHJhY3RHZXREZXBsb3lEYXRhUmVzdWx0LFxuICAgIFRPTkNvbnRyYWN0R2V0RnVuY3Rpb25JZFBhcmFtcyxcbiAgICBUT05Db250cmFjdEdldEZ1bmN0aW9uSWRSZXN1bHQsXG4gICAgVE9OQ29udHJhY3RMb2FkUGFyYW1zLFxuICAgIFRPTkNvbnRyYWN0TG9hZFJlc3VsdCxcbiAgICBUT05Db250cmFjdENhbGNSdW5GZWVQYXJhbXMsXG4gICAgVE9OQ29udHJhY3RDYWxjRmVlUmVzdWx0LFxuICAgIFRPTkNvbnRyYWN0Q2FsY01zZ1Byb2Nlc3NpbmdGZWVzUGFyYW1zLFxuICAgIFRPTkNvbnRyYWN0TWVzc2FnZSxcbiAgICBUT05Db250cmFjdFJ1bkxvY2FsUGFyYW1zLFxuICAgIFRPTkNvbnRyYWN0UnVuTWVzc2FnZSxcbiAgICBUT05Db250cmFjdFJ1blBhcmFtcyxcbiAgICBUT05Db250cmFjdFJ1blJlc3VsdCxcbiAgICBUT05Db250cmFjdHMsXG4gICAgVE9OQ29udHJhY3RVbnNpZ25lZERlcGxveU1lc3NhZ2UsXG4gICAgVE9OQ29udHJhY3RVbnNpZ25lZE1lc3NhZ2UsXG4gICAgVE9OQ29udHJhY3RVbnNpZ25lZFJ1bk1lc3NhZ2UsXG4gICAgVE9OQ29udHJhY3RSdW5HZXRQYXJhbXMsXG4gICAgVE9OQ29udHJhY3RSdW5HZXRSZXN1bHQsXG4gICAgVE9OQ29udHJhY3RSdW5NZXNzYWdlTG9jYWxQYXJhbXMsXG4gICAgVE9OQ29udHJhY3RSdW5Mb2NhbFJlc3VsdCxcbiAgICBUT05Db250cmFjdFRyYW5zYWN0aW9uRmVlcyxcbiAgICBUT05XYWl0Rm9yVHJhbnNhY3Rpb25QYXJhbXMsXG4gICAgUVNoYXJkSGFzaCxcbiAgICBUT05NZXNzYWdlUHJvY2Vzc2luZ1N0YXRlLFxufSBmcm9tICcuLi8uLi90eXBlcyc7XG5cbmltcG9ydCB7IFRPTkNsaWVudEVycm9yLCBUT05Db250cmFjdEV4aXRDb2RlLCBUT05FcnJvckNvZGUgfSBmcm9tICcuLi9UT05DbGllbnQnO1xuaW1wb3J0IHsgVE9OTW9kdWxlIH0gZnJvbSAnLi4vVE9OTW9kdWxlJztcbmltcG9ydCBUT05Db25maWdNb2R1bGUgZnJvbSAnLi9UT05Db25maWdNb2R1bGUnO1xuaW1wb3J0IFRPTlF1ZXJpZXNNb2R1bGUsIHsgTUFYX1RJTUVPVVQgfSBmcm9tICcuL1RPTlF1ZXJpZXNNb2R1bGUnO1xuXG5leHBvcnQgY29uc3QgVE9OQWRkcmVzc1N0cmluZ1ZhcmlhbnQgPSB7XG4gICAgQWNjb3VudElkOiAnQWNjb3VudElkJyxcbiAgICBIZXg6ICdIZXgnLFxuICAgIEJhc2U2NDogJ0Jhc2U2NCcsXG59O1xuXG5leHBvcnQgY29uc3QgVE9OQ2xpZW50VHJhbnNhY3Rpb25QaGFzZSA9IHtcbiAgICBzdG9yYWdlOiAnc3RvcmFnZScsXG4gICAgY29tcHV0ZVNraXBwZWQ6ICdjb21wdXRlU2tpcHBlZCcsXG4gICAgY29tcHV0ZVZtOiAnY29tcHV0ZVZtJyxcbiAgICBhY3Rpb246ICdhY3Rpb24nLFxuICAgIHVua25vd246ICd1bmtub3duJyxcbn07XG5cbmV4cG9ydCBjb25zdCBUT05DbGllbnRDb21wdXRlU2tpcHBlZFN0YXR1cyA9IHtcbiAgICBub1N0YXRlOiAwLFxuICAgIGJhZFN0YXRlOiAxLFxuICAgIG5vR2FzOiAyLFxufTtcblxuZXhwb3J0IGNvbnN0IFRPTkNsaWVudFN0b3JhZ2VTdGF0dXMgPSB7XG4gICAgdW5jaGFuZ2VkOiAwLFxuICAgIGZyb3plbjogMSxcbiAgICBkZWxldGVkOiAyLFxufTtcblxuZXhwb3J0IGNvbnN0IFFJbk1zZ1R5cGUgPSB7XG4gICAgZXh0ZXJuYWw6IDAsXG4gICAgaWhyOiAxLFxuICAgIGltbWVkaWF0ZWx5OiAyLFxuICAgIGZpbmFsOiAzLFxuICAgIHRyYW5zaXQ6IDQsXG4gICAgZGlzY2FyZGVkRmluYWw6IDUsXG4gICAgZGlzY2FyZGVkVHJhbnNpdDogNixcbn07XG5cbmV4cG9ydCBjb25zdCBRT3V0TXNnVHlwZSA9IHtcbiAgICBleHRlcm5hbDogMCxcbiAgICBpbW1lZGlhdGVseTogMSxcbiAgICBvdXRNc2dOZXc6IDIsXG4gICAgdHJhbnNpdDogMyxcbiAgICBkZXF1ZXVlSW1tZWRpYXRlbHk6IDQsXG4gICAgZGVxdWV1ZTogNSxcbiAgICB0cmFuc2l0UmVxdWlyZWQ6IDYsXG4gICAgbm9uZTogLTEsXG59O1xuXG5leHBvcnQgY29uc3QgUU1lc3NhZ2VUeXBlID0ge1xuICAgIGludGVybmFsOiAwLFxuICAgIGV4dEluOiAxLFxuICAgIGV4dE91dDogMixcbn07XG5cbmV4cG9ydCBjb25zdCBRTWVzc2FnZVByb2Nlc3NpbmdTdGF0dXMgPSB7XG4gICAgdW5rbm93bjogMCxcbiAgICBxdWV1ZWQ6IDEsXG4gICAgcHJvY2Vzc2luZzogMixcbiAgICBwcmVsaW1pbmFyeTogMyxcbiAgICBwcm9wb3NlZDogNCxcbiAgICBmaW5hbGl6ZWQ6IDUsXG4gICAgcmVmdXNlZDogNixcbiAgICB0cmFuc2l0aW5nOiA3LFxufTtcblxuZXhwb3J0IGNvbnN0IFFCbG9ja1Byb2Nlc3NpbmdTdGF0dXMgPSB7XG4gICAgdW5rbm93bjogMCxcbiAgICBwcm9wb3NlZDogMSxcbiAgICBmaW5hbGl6ZWQ6IDIsXG4gICAgcmVmdXNlZDogMyxcbn07XG5cbmV4cG9ydCBjb25zdCBRU3BsaXRUeXBlID0ge1xuICAgIG5vbmU6IDAsXG4gICAgc3BsaXQ6IDIsXG4gICAgbWVyZ2U6IDMsXG59O1xuXG5leHBvcnQgY29uc3QgUUFjY291bnRUeXBlID0ge1xuICAgIHVuaW5pdDogMCxcbiAgICBhY3RpdmU6IDEsXG4gICAgZnJvemVuOiAyLFxufTtcblxuZXhwb3J0IGNvbnN0IFFUcmFuc2FjdGlvblR5cGUgPSB7XG4gICAgb3JkaW5hcnk6IDAsXG4gICAgc3RvcmFnZTogMSxcbiAgICB0aWNrOiAyLFxuICAgIHRvY2s6IDMsXG4gICAgc3BsaXRQcmVwYXJlOiA0LFxuICAgIHNwbGl0SW5zdGFsbDogNSxcbiAgICBtZXJnZVByZXBhcmU6IDYsXG4gICAgbWVyZ2VJbnN0YWxsOiA3LFxufTtcblxuZXhwb3J0IGNvbnN0IFFUcmFuc2FjdGlvblByb2Nlc3NpbmdTdGF0dXMgPSB7XG4gICAgdW5rbm93bjogMCxcbiAgICBwcmVsaW1pbmFyeTogMSxcbiAgICBwcm9wb3NlZDogMixcbiAgICBmaW5hbGl6ZWQ6IDMsXG4gICAgcmVmdXNlZDogNCxcbn07XG5cbmV4cG9ydCBjb25zdCBRQWNjb3VudFN0YXR1cyA9IHtcbiAgICB1bmluaXQ6IDAsXG4gICAgYWN0aXZlOiAxLFxuICAgIGZyb3plbjogMixcbiAgICBub25FeGlzdDogMyxcbn07XG5cbmV4cG9ydCBjb25zdCBRQWNjb3VudFN0YXR1c0NoYW5nZSA9IHtcbiAgICB1bmNoYW5nZWQ6IDAsXG4gICAgZnJvemVuOiAxLFxuICAgIGRlbGV0ZWQ6IDIsXG59O1xuXG5leHBvcnQgY29uc3QgUUNvbXB1dGVUeXBlID0ge1xuICAgIHNraXBwZWQ6IDAsXG4gICAgdm06IDEsXG59O1xuXG5leHBvcnQgY29uc3QgUVNraXBSZWFzb24gPSB7XG4gICAgbm9TdGF0ZTogMCxcbiAgICBiYWRTdGF0ZTogMSxcbiAgICBub0dhczogMixcbn07XG5cbmV4cG9ydCBjb25zdCBRQm91bmNlVHlwZSA9IHtcbiAgICBuZWdGdW5kczogMCxcbiAgICBub0Z1bmRzOiAxLFxuICAgIG9rOiAyLFxufTtcblxuY29uc3QgTUFTVEVSQ0hBSU5fSUQgPSAtMTtcblxuY29uc3QgRVhUUkFfVFJBTlNBQ1RJT05fV0FJVElOR19USU1FID0gMTAwMDA7XG5jb25zdCBCTE9DS19UUkFOU0FDVElPTl9XQUlUSU5HX1RJTUUgPSA1MDAwO1xuXG5mdW5jdGlvbiByZW1vdmVUeXBlTmFtZShvYmo6IGFueSkge1xuICAgIGlmIChvYmouX190eXBlbmFtZSkge1xuICAgICAgICBkZWxldGUgb2JqLl9fdHlwZW5hbWU7XG4gICAgfVxuICAgIE9iamVjdC52YWx1ZXMob2JqKVxuICAgICAgICAuZm9yRWFjaCgodmFsdWUpID0+IHtcbiAgICAgICAgICAgIGlmICghIXZhbHVlICYmIHR5cGVvZiB2YWx1ZSA9PT0gJ29iamVjdCcpIHtcbiAgICAgICAgICAgICAgICByZW1vdmVUeXBlTmFtZSh2YWx1ZSk7XG4gICAgICAgICAgICB9XG4gICAgICAgIH0pO1xufVxuXG5leHBvcnQgZnVuY3Rpb24gcmVtb3ZlUHJvcHMob2JqOiB7fSwgcGF0aHM6IHN0cmluZ1tdKToge30ge1xuICAgIGxldCByZXN1bHQgPSBvYmo7XG4gICAgcGF0aHMuZm9yRWFjaCgocGF0aCkgPT4ge1xuICAgICAgICBjb25zdCBkb3RQb3MgPSBwYXRoLmluZGV4T2YoJy4nKTtcbiAgICAgICAgaWYgKGRvdFBvcyA8IDApIHtcbiAgICAgICAgICAgIGlmIChwYXRoIGluIHJlc3VsdCkge1xuICAgICAgICAgICAgICAgIHJlc3VsdCA9IHsgLi4ucmVzdWx0IH07XG4gICAgICAgICAgICAgICAgZGVsZXRlIHJlc3VsdFtwYXRoXTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIGNvbnN0IG5hbWUgPSBwYXRoLnN1YnN0cigwLCBkb3RQb3MpO1xuICAgICAgICAgICAgY29uc3QgY2hpbGQgPSByZXN1bHRbbmFtZV07XG4gICAgICAgICAgICBpZiAoY2hpbGQpIHtcbiAgICAgICAgICAgICAgICBjb25zdCByZWR1Y2VkQ2hpbGQgPSByZW1vdmVQcm9wcyhjaGlsZCwgW3BhdGguc3Vic3RyKGRvdFBvcyArIDEpXSk7XG4gICAgICAgICAgICAgICAgaWYgKHJlZHVjZWRDaGlsZCAhPT0gY2hpbGQpIHtcbiAgICAgICAgICAgICAgICAgICAgcmVzdWx0ID0ge1xuICAgICAgICAgICAgICAgICAgICAgICAgLi4ucmVzdWx0LFxuICAgICAgICAgICAgICAgICAgICAgICAgW25hbWVdOiByZWR1Y2VkQ2hpbGQsXG4gICAgICAgICAgICAgICAgICAgIH07XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgfSk7XG4gICAgcmV0dXJuIHJlc3VsdDtcbn1cblxuZnVuY3Rpb24gc3RhcnRNZXNzYWdlVHJhY2VTcGFuKFxuICAgIHRyYWNlcjogVHJhY2VyLFxuICAgIG1lc3NhZ2VJZDogc3RyaW5nLFxuICAgIG9wZXJhdGlvbk5hbWU6IHN0cmluZyxcbiAgICB0YWdzOiB7IFtzdHJpbmddOiBhbnkgfSxcbik6ID9TcGFuIHtcbiAgICBpZiAoIW1lc3NhZ2VJZCkge1xuICAgICAgICByZXR1cm4gbnVsbDtcbiAgICB9XG4gICAgY29uc3QgdHJhY2VJZCA9IG1lc3NhZ2VJZC5zdWJzdHIoMCwgMTYpO1xuICAgIGNvbnN0IHNwYW5JZCA9IG1lc3NhZ2VJZC5zdWJzdHIoMTYsIDE2KTtcbiAgICBsZXQgcm9vdENvbnRleHQ6ID9TcGFuQ29udGV4dCA9IG51bGw7XG4gICAgdHJ5IHtcbiAgICAgICAgcm9vdENvbnRleHQgPSB0cmFjZXIuZXh0cmFjdChGT1JNQVRfVEVYVF9NQVAsIHtcbiAgICAgICAgICAgICd1YmVyLXRyYWNlLWlkJzogYCR7dHJhY2VJZH06JHtzcGFuSWR9OjA6MWAsXG4gICAgICAgIH0pO1xuICAgIH0gY2F0Y2gge1xuICAgICAgICAvLyB0cmFjZXIgY2FuJ3QgY3JlYXRlIGphZWdlciBjb21wYXRpYmxlIHNwYW4sXG4gICAgICAgIC8vIHNvIHdlIGFyZSBmYWxsYmFjayB0byByZXR1cm4gbnVsbFxuICAgIH1cbiAgICBpZiAoIXJvb3RDb250ZXh0KSB7XG4gICAgICAgIHJldHVybiBudWxsO1xuICAgIH1cbiAgICByZXR1cm4gdHJhY2VyLnN0YXJ0U3BhbihvcGVyYXRpb25OYW1lLCB7XG4gICAgICAgIGNoaWxkT2Y6IHJvb3RDb250ZXh0LFxuICAgICAgICB0YWdzLFxuICAgIH0pXG59XG5cbmZ1bmN0aW9uIHRyYWNlTWVzc2FnZShcbiAgICB0cmFjZXI6IFRyYWNlcixcbiAgICBtZXNzYWdlSWQ6IHN0cmluZyxcbiAgICBvcGVyYXRpb25OYW1lOiBzdHJpbmcsXG4gICAgdGFnczogeyBbc3RyaW5nXTogYW55IH0sXG4pIHtcbiAgICBjb25zdCBzcGFuID0gc3RhcnRNZXNzYWdlVHJhY2VTcGFuKHRyYWNlciwgbWVzc2FnZUlkLCBvcGVyYXRpb25OYW1lLCB0YWdzKTtcbiAgICBpZiAoc3Bhbikge1xuICAgICAgICBzcGFuLmZpbmlzaCgpO1xuICAgIH1cbn1cblxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgVE9OQ29udHJhY3RzTW9kdWxlIGV4dGVuZHMgVE9OTW9kdWxlIGltcGxlbWVudHMgVE9OQ29udHJhY3RzIHtcbiAgICBjb25maWc6IFRPTkNvbmZpZ01vZHVsZTtcblxuICAgIHF1ZXJpZXM6IFRPTlF1ZXJpZXNNb2R1bGU7XG5cbiAgICBhc3luYyBzZXR1cCgpOiBQcm9taXNlPCo+IHtcbiAgICAgICAgdGhpcy5jb25maWcgPSB0aGlzLmNvbnRleHQuZ2V0TW9kdWxlKFRPTkNvbmZpZ01vZHVsZSk7XG4gICAgICAgIHRoaXMucXVlcmllcyA9IHRoaXMuY29udGV4dC5nZXRNb2R1bGUoVE9OUXVlcmllc01vZHVsZSk7XG4gICAgfVxuXG4gICAgYXN5bmMgbG9hZChcbiAgICAgICAgcGFyYW1zOiBUT05Db250cmFjdExvYWRQYXJhbXMsXG4gICAgICAgIHBhcmVudFNwYW4/OiAoU3BhbiB8IFNwYW5Db250ZXh0KSxcbiAgICApOiBQcm9taXNlPFRPTkNvbnRyYWN0TG9hZFJlc3VsdD4ge1xuICAgICAgICBjb25zdCBhY2NvdW50czogUUFjY291bnRbXSA9IGF3YWl0IHRoaXMucXVlcmllcy5hY2NvdW50cy5xdWVyeSh7XG4gICAgICAgICAgICBmaWx0ZXI6IHtcbiAgICAgICAgICAgICAgICBpZDogeyBlcTogcGFyYW1zLmFkZHJlc3MgfSxcbiAgICAgICAgICAgIH0sXG4gICAgICAgICAgICByZXN1bHQ6ICdiYWxhbmNlJyxcbiAgICAgICAgICAgIHBhcmVudFNwYW4sXG4gICAgICAgIH0pO1xuICAgICAgICBpZiAoYWNjb3VudHMgJiYgYWNjb3VudHMubGVuZ3RoID4gMCkge1xuICAgICAgICAgICAgcmV0dXJuIHtcbiAgICAgICAgICAgICAgICBpZDogcGFyYW1zLmFkZHJlc3MsXG4gICAgICAgICAgICAgICAgYmFsYW5jZUdyYW1zOiBhY2NvdW50c1swXS5iYWxhbmNlLFxuICAgICAgICAgICAgfTtcbiAgICAgICAgfVxuICAgICAgICByZXR1cm4ge1xuICAgICAgICAgICAgaWQ6IG51bGwsXG4gICAgICAgICAgICBiYWxhbmNlR3JhbXM6IG51bGwsXG4gICAgICAgIH07XG4gICAgfVxuXG5cbiAgICAvLyBGYWNhZGUgZnVuY3Rpb25zXG5cbiAgICBhc3luYyBkZXBsb3koXG4gICAgICAgIHBhcmFtczogVE9OQ29udHJhY3REZXBsb3lQYXJhbXMsXG4gICAgICAgIHBhcmVudFNwYW4/OiAoU3BhbiB8IFNwYW5Db250ZXh0KSxcbiAgICApOiBQcm9taXNlPFRPTkNvbnRyYWN0RGVwbG95UmVzdWx0PiB7XG4gICAgICAgIHJldHVybiB0aGlzLmNvbnRleHQudHJhY2UoJ2NvbnRyYWN0cy5kZXBsb3knLCBhc3luYyAoc3BhbjogU3BhbikgPT4ge1xuICAgICAgICAgICAgc3Bhbi5zZXRUYWcoJ3BhcmFtcycsIHJlbW92ZVByb3BzKHBhcmFtcywgWydrZXlQYWlyLnNlY3JldCddKSk7XG4gICAgICAgICAgICByZXR1cm4gdGhpcy5pbnRlcm5hbERlcGxveUpzKHBhcmFtcywgc3Bhbik7XG4gICAgICAgIH0sIHBhcmVudFNwYW4pO1xuICAgIH1cblxuXG4gICAgYXN5bmMgcnVuKFxuICAgICAgICBwYXJhbXM6IFRPTkNvbnRyYWN0UnVuUGFyYW1zLFxuICAgICAgICBwYXJlbnRTcGFuPzogKFNwYW4gfCBTcGFuQ29udGV4dCksXG4gICAgKTogUHJvbWlzZTxUT05Db250cmFjdFJ1blJlc3VsdD4ge1xuICAgICAgICByZXR1cm4gdGhpcy5jb250ZXh0LnRyYWNlKCdjb250cmFjdHMucnVuJywgYXN5bmMgKHNwYW46IFNwYW4pID0+IHtcbiAgICAgICAgICAgIHNwYW4uc2V0VGFnKCdwYXJhbXMnLCByZW1vdmVQcm9wcyhwYXJhbXMsIFsna2V5UGFpci5zZWNyZXQnXSkpO1xuICAgICAgICAgICAgcmV0dXJuIHRoaXMuaW50ZXJuYWxSdW5KcyhwYXJhbXMsIHNwYW4pO1xuICAgICAgICB9LCBwYXJlbnRTcGFuKTtcbiAgICB9XG5cbiAgICBhc3luYyBydW5Mb2NhbChcbiAgICAgICAgcGFyYW1zOiBUT05Db250cmFjdFJ1bkxvY2FsUGFyYW1zLFxuICAgICAgICBwYXJlbnRTcGFuPzogKFNwYW4gfCBTcGFuQ29udGV4dCksXG4gICAgKTogUHJvbWlzZTxUT05Db250cmFjdFJ1bkxvY2FsUmVzdWx0PiB7XG4gICAgICAgIHJldHVybiB0aGlzLmNvbnRleHQudHJhY2UoJ2NvbnRyYWN0cy5ydW5Mb2NhbCcsIGFzeW5jIChzcGFuOiBTcGFuKSA9PiB7XG4gICAgICAgICAgICBzcGFuLnNldFRhZygncGFyYW1zJywgcmVtb3ZlUHJvcHMocGFyYW1zLCBbJ2tleVBhaXIuc2VjcmV0J10pKTtcbiAgICAgICAgICAgIHJldHVybiB0aGlzLmludGVybmFsUnVuTG9jYWxKcyhwYXJhbXMsIHNwYW4pO1xuICAgICAgICB9LCBwYXJlbnRTcGFuKTtcbiAgICB9XG5cbiAgICBhc3luYyBydW5NZXNzYWdlTG9jYWwoXG4gICAgICAgIHBhcmFtczogVE9OQ29udHJhY3RSdW5NZXNzYWdlTG9jYWxQYXJhbXMsXG4gICAgICAgIHBhcmVudFNwYW4/OiAoU3BhbiB8IFNwYW5Db250ZXh0KSxcbiAgICApOiBQcm9taXNlPFRPTkNvbnRyYWN0UnVuTG9jYWxSZXN1bHQ+IHtcbiAgICAgICAgcmV0dXJuIHRoaXMuY29udGV4dC50cmFjZSgncnVuTWVzc2FnZUxvY2FsJywgYXN5bmMgKHNwYW46IFNwYW4pID0+IHtcbiAgICAgICAgICAgIHNwYW4uc2V0VGFnKCdwYXJhbXMnLCByZW1vdmVQcm9wcyhwYXJhbXMsIFsna2V5UGFpci5zZWNyZXQnXSkpO1xuICAgICAgICAgICAgcmV0dXJuIHRoaXMuaW50ZXJuYWxSdW5NZXNzYWdlTG9jYWxKcyhwYXJhbXMsIHNwYW4pO1xuICAgICAgICB9LCBwYXJlbnRTcGFuKTtcbiAgICB9XG5cbiAgICBhc3luYyBydW5HZXQoXG4gICAgICAgIHBhcmFtczogVE9OQ29udHJhY3RSdW5HZXRQYXJhbXMsXG4gICAgKTogUHJvbWlzZTxUT05Db250cmFjdFJ1bkdldFJlc3VsdD4ge1xuICAgICAgICBsZXQgY29yZVBhcmFtczogVE9OQ29udHJhY3RSdW5HZXRQYXJhbXMgPSBwYXJhbXM7XG4gICAgICAgIGNvbnN0IGhhc0NvZGUgPSBwYXJhbXMuYm9jQmFzZTY0IHx8IChwYXJhbXMuY29kZUJhc2U2NCAmJiBwYXJhbXMuZGF0YUJhc2U2NCk7XG4gICAgICAgIGlmICghaGFzQ29kZSkge1xuICAgICAgICAgICAgY29uc3QgYWRkcmVzcyA9IHBhcmFtcy5hZGRyZXNzO1xuICAgICAgICAgICAgaWYgKCFhZGRyZXNzKSB7XG4gICAgICAgICAgICAgICAgdGhyb3cgVE9OQ2xpZW50RXJyb3IuYWRkcmVzc1JlcXVpcmVkRm9yUnVuTG9jYWwoKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGNvbnN0IGFjY291bnQ6IGFueSA9IGF3YWl0IHRoaXMuZ2V0QWNjb3VudChhZGRyZXNzLCBmYWxzZSwge1xuICAgICAgICAgICAgICAgIHRpbWVvdXQ6IHRoaXMuY29uZmlnLndhaXRGb3JUaW1lb3V0KCksXG4gICAgICAgICAgICB9KTtcbiAgICAgICAgICAgIGlmICghYWNjb3VudC5jb2RlX2hhc2gpIHtcbiAgICAgICAgICAgICAgICB0aHJvdyBUT05DbGllbnRFcnJvci5hY2NvdW50Q29kZU1pc3NpbmcoYWRkcmVzcywgYWNjb3VudC5iYWxhbmNlKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGlmIChhY2NvdW50LmJvYykge1xuICAgICAgICAgICAgICAgIGFjY291bnQuYm9jQmFzZTY0ID0gYWNjb3VudC5ib2M7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBkZWxldGUgYWNjb3VudC5ib2M7XG4gICAgICAgICAgICBjb3JlUGFyYW1zID0ge1xuICAgICAgICAgICAgICAgIC4uLmFjY291bnQsXG4gICAgICAgICAgICAgICAgLi4ucGFyYW1zLFxuICAgICAgICAgICAgfTtcbiAgICAgICAgfVxuICAgICAgICByZXR1cm4gdGhpcy5yZXF1ZXN0Q29yZSgndHZtLmdldCcsIGNvcmVQYXJhbXMpO1xuICAgIH1cblxuICAgIGFycmF5RnJvbUNPTlMoY29uczogYW55W10pOiBhbnlbXSB7XG4gICAgICAgIGNvbnN0IHJlc3VsdCA9IFtdO1xuICAgICAgICBsZXQgaXRlbSA9IGNvbnM7XG4gICAgICAgIHdoaWxlIChpdGVtKSB7XG4gICAgICAgICAgICBpZiAoIWl0ZW0ubGVuZ3RoID09PSAyKSB7XG4gICAgICAgICAgICAgICAgdGhyb3cgVE9OQ2xpZW50RXJyb3IuaW52YWxpZENvbnMoKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIHJlc3VsdC5wdXNoKGl0ZW1bMF0pO1xuICAgICAgICAgICAgaXRlbSA9IGl0ZW1bMV07XG4gICAgICAgIH1cbiAgICAgICAgcmV0dXJuIHJlc3VsdDtcbiAgICB9XG5cblxuICAgIC8vIE1lc3NhZ2UgY3JlYXRpb25cblxuICAgIGFzeW5jIGNyZWF0ZURlcGxveU1lc3NhZ2UoXG4gICAgICAgIHBhcmFtczogVE9OQ29udHJhY3REZXBsb3lQYXJhbXMsXG4gICAgICAgIHJldHJ5SW5kZXg/OiBudW1iZXIsXG4gICAgKTogUHJvbWlzZTxUT05Db250cmFjdERlcGxveU1lc3NhZ2U+IHtcbiAgICAgICAgdGhpcy5jb25maWcubG9nKCdjcmVhdGVEZXBsb3lNZXNzYWdlJywgcGFyYW1zKTtcbiAgICAgICAgY29uc3QgbWVzc2FnZTogVE9OQ29udHJhY3RNZXNzYWdlID0gYXdhaXQgdGhpcy5yZXF1ZXN0Q29yZSgnY29udHJhY3RzLmRlcGxveS5tZXNzYWdlJywge1xuICAgICAgICAgICAgYWJpOiBwYXJhbXMucGFja2FnZS5hYmksXG4gICAgICAgICAgICBjb25zdHJ1Y3RvckhlYWRlcjogcGFyYW1zLmNvbnN0cnVjdG9ySGVhZGVyLFxuICAgICAgICAgICAgY29uc3RydWN0b3JQYXJhbXM6IHBhcmFtcy5jb25zdHJ1Y3RvclBhcmFtcyxcbiAgICAgICAgICAgIGluaXRQYXJhbXM6IHBhcmFtcy5pbml0UGFyYW1zLFxuICAgICAgICAgICAgaW1hZ2VCYXNlNjQ6IHBhcmFtcy5wYWNrYWdlLmltYWdlQmFzZTY0LFxuICAgICAgICAgICAga2V5UGFpcjogcGFyYW1zLmtleVBhaXIsXG4gICAgICAgICAgICB3b3JrY2hhaW5JZDogcGFyYW1zLndvcmtjaGFpbklkLFxuICAgICAgICB9KTtcbiAgICAgICAgcmV0dXJuIHtcbiAgICAgICAgICAgIG1lc3NhZ2UsXG4gICAgICAgICAgICBhZGRyZXNzOiBtZXNzYWdlLmFkZHJlc3MsXG4gICAgICAgIH07XG4gICAgfVxuXG5cbiAgICBhc3luYyBjcmVhdGVSdW5NZXNzYWdlKFxuICAgICAgICBwYXJhbXM6IFRPTkNvbnRyYWN0UnVuUGFyYW1zLFxuICAgICAgICByZXRyeUluZGV4PzogbnVtYmVyLFxuICAgICk6IFByb21pc2U8VE9OQ29udHJhY3RSdW5NZXNzYWdlPiB7XG4gICAgICAgIHRoaXMuY29uZmlnLmxvZygnY3JlYXRlUnVuTWVzc2FnZScsIHBhcmFtcyk7XG4gICAgICAgIGNvbnN0IG1lc3NhZ2UgPSBhd2FpdCB0aGlzLnJlcXVlc3RDb3JlKCdjb250cmFjdHMucnVuLm1lc3NhZ2UnLCB7XG4gICAgICAgICAgICBhZGRyZXNzOiBwYXJhbXMuYWRkcmVzcyxcbiAgICAgICAgICAgIGFiaTogcGFyYW1zLmFiaSxcbiAgICAgICAgICAgIGZ1bmN0aW9uTmFtZTogcGFyYW1zLmZ1bmN0aW9uTmFtZSxcbiAgICAgICAgICAgIGhlYWRlcjogcGFyYW1zLmhlYWRlcixcbiAgICAgICAgICAgIHRyeUluZGV4OiByZXRyeUluZGV4LFxuICAgICAgICAgICAgaW5wdXQ6IHBhcmFtcy5pbnB1dCxcbiAgICAgICAgICAgIGtleVBhaXI6IHBhcmFtcy5rZXlQYWlyLFxuICAgICAgICB9KTtcbiAgICAgICAgcmV0dXJuIHtcbiAgICAgICAgICAgIGFkZHJlc3M6IHBhcmFtcy5hZGRyZXNzLFxuICAgICAgICAgICAgYWJpOiBwYXJhbXMuYWJpLFxuICAgICAgICAgICAgZnVuY3Rpb25OYW1lOiBwYXJhbXMuZnVuY3Rpb25OYW1lLFxuICAgICAgICAgICAgbWVzc2FnZSxcbiAgICAgICAgfTtcbiAgICB9XG5cbiAgICBhc3luYyBjcmVhdGVVbnNpZ25lZERlcGxveU1lc3NhZ2UoXG4gICAgICAgIHBhcmFtczogVE9OQ29udHJhY3REZXBsb3lQYXJhbXMsXG4gICAgICAgIHJldHJ5SW5kZXg/OiBudW1iZXIsXG4gICAgKTogUHJvbWlzZTxUT05Db250cmFjdFVuc2lnbmVkRGVwbG95TWVzc2FnZT4ge1xuICAgICAgICBjb25zdCByZXN1bHQ6IHtcbiAgICAgICAgICAgIGVuY29kZWQ6IFRPTkNvbnRyYWN0VW5zaWduZWRNZXNzYWdlLFxuICAgICAgICAgICAgYWRkcmVzc0hleDogc3RyaW5nLFxuICAgICAgICB9ID0gYXdhaXQgdGhpcy5yZXF1ZXN0Q29yZSgnY29udHJhY3RzLmRlcGxveS5lbmNvZGVfdW5zaWduZWRfbWVzc2FnZScsIHtcbiAgICAgICAgICAgIGFiaTogcGFyYW1zLnBhY2thZ2UuYWJpLFxuICAgICAgICAgICAgY29uc3RydWN0b3JIZWFkZXI6IHBhcmFtcy5jb25zdHJ1Y3RvckhlYWRlcixcbiAgICAgICAgICAgIHRyeUluZGV4OiByZXRyeUluZGV4LFxuICAgICAgICAgICAgY29uc3RydWN0b3JQYXJhbXM6IHBhcmFtcy5jb25zdHJ1Y3RvclBhcmFtcyxcbiAgICAgICAgICAgIGluaXRQYXJhbXM6IHBhcmFtcy5pbml0UGFyYW1zLFxuICAgICAgICAgICAgaW1hZ2VCYXNlNjQ6IHBhcmFtcy5wYWNrYWdlLmltYWdlQmFzZTY0LFxuICAgICAgICAgICAgcHVibGljS2V5SGV4OiBwYXJhbXMua2V5UGFpci5wdWJsaWMsXG4gICAgICAgICAgICB3b3JrY2hhaW5JZDogcGFyYW1zLndvcmtjaGFpbklkLFxuICAgICAgICB9KTtcbiAgICAgICAgcmV0dXJuIHtcbiAgICAgICAgICAgIGFkZHJlc3M6IHJlc3VsdC5hZGRyZXNzSGV4LFxuICAgICAgICAgICAgc2lnblBhcmFtczoge1xuICAgICAgICAgICAgICAgIC4uLnJlc3VsdC5lbmNvZGVkLFxuICAgICAgICAgICAgICAgIGFiaTogcGFyYW1zLnBhY2thZ2UuYWJpLFxuICAgICAgICAgICAgfSxcbiAgICAgICAgfTtcbiAgICB9XG5cblxuICAgIGFzeW5jIGNyZWF0ZVVuc2lnbmVkUnVuTWVzc2FnZShcbiAgICAgICAgcGFyYW1zOiBUT05Db250cmFjdFJ1blBhcmFtcyxcbiAgICAgICAgcmV0cnlJbmRleD86IG51bWJlcixcbiAgICApOiBQcm9taXNlPFRPTkNvbnRyYWN0VW5zaWduZWRSdW5NZXNzYWdlPiB7XG4gICAgICAgIGNvbnN0IHNpZ25QYXJhbXMgPSBhd2FpdCB0aGlzLnJlcXVlc3RDb3JlKCdjb250cmFjdHMucnVuLmVuY29kZV91bnNpZ25lZF9tZXNzYWdlJywge1xuICAgICAgICAgICAgYWRkcmVzczogcGFyYW1zLmFkZHJlc3MsXG4gICAgICAgICAgICBhYmk6IHBhcmFtcy5hYmksXG4gICAgICAgICAgICBmdW5jdGlvbk5hbWU6IHBhcmFtcy5mdW5jdGlvbk5hbWUsXG4gICAgICAgICAgICBoZWFkZXI6IHBhcmFtcy5oZWFkZXIsXG4gICAgICAgICAgICB0cnlJbmRleDogcmV0cnlJbmRleCxcbiAgICAgICAgICAgIGlucHV0OiBwYXJhbXMuaW5wdXQsXG4gICAgICAgIH0pO1xuICAgICAgICByZXR1cm4ge1xuICAgICAgICAgICAgYWRkcmVzczogcGFyYW1zLmFkZHJlc3MsXG4gICAgICAgICAgICBmdW5jdGlvbk5hbWU6IHBhcmFtcy5mdW5jdGlvbk5hbWUsXG4gICAgICAgICAgICBzaWduUGFyYW1zOiB7XG4gICAgICAgICAgICAgICAgLi4uc2lnblBhcmFtcyxcbiAgICAgICAgICAgICAgICBhYmk6IHBhcmFtcy5hYmksXG4gICAgICAgICAgICB9LFxuICAgICAgICB9O1xuICAgIH1cblxuXG4gICAgYXN5bmMgY3JlYXRlU2lnbmVkTWVzc2FnZShcbiAgICAgICAgcGFyYW1zOiBUT05Db250cmFjdENyZWF0ZVNpZ25lZE1lc3NhZ2VQYXJhbXMsXG4gICAgKTogUHJvbWlzZTxUT05Db250cmFjdE1lc3NhZ2U+IHtcbiAgICAgICAgcmV0dXJuIHRoaXMucmVxdWVzdENvcmUoJ2NvbnRyYWN0cy5lbmNvZGVfbWVzc2FnZV93aXRoX3NpZ24nLCBwYXJhbXMpO1xuICAgIH1cblxuXG4gICAgYXN5bmMgY3JlYXRlU2lnbmVkRGVwbG95TWVzc2FnZShcbiAgICAgICAgcGFyYW1zOiBUT05Db250cmFjdENyZWF0ZVNpZ25lZERlcGxveU1lc3NhZ2VQYXJhbXMsXG4gICAgKTogUHJvbWlzZTxUT05Db250cmFjdERlcGxveU1lc3NhZ2U+IHtcbiAgICAgICAgY29uc3QgbWVzc2FnZSA9IGF3YWl0IHRoaXMuY3JlYXRlU2lnbmVkTWVzc2FnZSh7XG4gICAgICAgICAgICBhYmk6IHBhcmFtcy51bnNpZ25lZE1lc3NhZ2Uuc2lnblBhcmFtcy5hYmksXG4gICAgICAgICAgICB1bnNpZ25lZEJ5dGVzQmFzZTY0OiBwYXJhbXMudW5zaWduZWRNZXNzYWdlLnNpZ25QYXJhbXMudW5zaWduZWRCeXRlc0Jhc2U2NCxcbiAgICAgICAgICAgIHNpZ25CeXRlc0Jhc2U2NDogcGFyYW1zLnNpZ25CeXRlc0Jhc2U2NCxcbiAgICAgICAgICAgIHB1YmxpY0tleUhleDogcGFyYW1zLnB1YmxpY0tleUhleCxcbiAgICAgICAgfSk7XG4gICAgICAgIG1lc3NhZ2UuZXhwaXJlID0gcGFyYW1zLnVuc2lnbmVkTWVzc2FnZS5zaWduUGFyYW1zLmV4cGlyZTtcbiAgICAgICAgcmV0dXJuIHtcbiAgICAgICAgICAgIGFkZHJlc3M6IHBhcmFtcy51bnNpZ25lZE1lc3NhZ2UuYWRkcmVzcyxcbiAgICAgICAgICAgIG1lc3NhZ2UsXG4gICAgICAgIH07XG4gICAgfVxuXG5cbiAgICBhc3luYyBjcmVhdGVTaWduZWRSdW5NZXNzYWdlKFxuICAgICAgICBwYXJhbXM6IFRPTkNvbnRyYWN0Q3JlYXRlU2lnbmVkUnVuTWVzc2FnZVBhcmFtcyxcbiAgICApOiBQcm9taXNlPFRPTkNvbnRyYWN0UnVuTWVzc2FnZT4ge1xuICAgICAgICBjb25zdCBtZXNzYWdlID0gYXdhaXQgdGhpcy5jcmVhdGVTaWduZWRNZXNzYWdlKHtcbiAgICAgICAgICAgIGFiaTogcGFyYW1zLnVuc2lnbmVkTWVzc2FnZS5zaWduUGFyYW1zLmFiaSxcbiAgICAgICAgICAgIHVuc2lnbmVkQnl0ZXNCYXNlNjQ6IHBhcmFtcy51bnNpZ25lZE1lc3NhZ2Uuc2lnblBhcmFtcy51bnNpZ25lZEJ5dGVzQmFzZTY0LFxuICAgICAgICAgICAgc2lnbkJ5dGVzQmFzZTY0OiBwYXJhbXMuc2lnbkJ5dGVzQmFzZTY0LFxuICAgICAgICAgICAgcHVibGljS2V5SGV4OiBwYXJhbXMucHVibGljS2V5SGV4LFxuICAgICAgICB9KTtcbiAgICAgICAgbWVzc2FnZS5leHBpcmUgPSBwYXJhbXMudW5zaWduZWRNZXNzYWdlLnNpZ25QYXJhbXMuZXhwaXJlO1xuICAgICAgICByZXR1cm4ge1xuICAgICAgICAgICAgYWRkcmVzczogcGFyYW1zLnVuc2lnbmVkTWVzc2FnZS5hZGRyZXNzLFxuICAgICAgICAgICAgYWJpOiBwYXJhbXMudW5zaWduZWRNZXNzYWdlLnNpZ25QYXJhbXMuYWJpLFxuICAgICAgICAgICAgZnVuY3Rpb25OYW1lOiBwYXJhbXMudW5zaWduZWRNZXNzYWdlLmZ1bmN0aW9uTmFtZSxcbiAgICAgICAgICAgIG1lc3NhZ2UsXG4gICAgICAgIH07XG4gICAgfVxuXG4gICAgYXN5bmMgZ2V0Q29kZUZyb21JbWFnZShcbiAgICAgICAgcGFyYW1zOiBUT05Db250cmFjdEdldENvZGVGcm9tSW1hZ2VQYXJhbXMsXG4gICAgKTogUHJvbWlzZTxUT05Db250cmFjdEdldENvZGVGcm9tSW1hZ2VSZXN1bHQ+IHtcbiAgICAgICAgcmV0dXJuIHRoaXMucmVxdWVzdENvcmUoJ2NvbnRyYWN0cy5pbWFnZS5jb2RlJywgcGFyYW1zKTtcbiAgICB9XG5cbiAgICBhc3luYyBnZXREZXBsb3lEYXRhKFxuICAgICAgICBwYXJhbXM6IFRPTkNvbnRyYWN0R2V0RGVwbG95RGF0YVBhcmFtcyxcbiAgICApOiBQcm9taXNlPFRPTkNvbnRyYWN0R2V0RGVwbG95RGF0YVJlc3VsdD4ge1xuICAgICAgICByZXR1cm4gdGhpcy5yZXF1ZXN0Q29yZSgnY29udHJhY3RzLmRlcGxveS5kYXRhJywgcGFyYW1zKTtcbiAgICB9XG5cbiAgICBhc3luYyBjcmVhdGVSdW5Cb2R5KFxuICAgICAgICBwYXJhbXM6IFRPTkNvbnRyYWN0Q3JlYXRlUnVuQm9keVBhcmFtcyxcbiAgICApOiBQcm9taXNlPFRPTkNvbnRyYWN0Q3JlYXRlUnVuQm9keVJlc3VsdD4ge1xuICAgICAgICByZXR1cm4gdGhpcy5yZXF1ZXN0Q29yZSgnY29udHJhY3RzLnJ1bi5ib2R5JywgcGFyYW1zKTtcbiAgICB9XG5cbiAgICBhc3luYyBnZXRGdW5jdGlvbklkKFxuICAgICAgICBwYXJhbXM6IFRPTkNvbnRyYWN0R2V0RnVuY3Rpb25JZFBhcmFtcyxcbiAgICApOiBQcm9taXNlPFRPTkNvbnRyYWN0R2V0RnVuY3Rpb25JZFJlc3VsdD4ge1xuICAgICAgICByZXR1cm4gdGhpcy5yZXF1ZXN0Q29yZSgnY29udHJhY3RzLmZ1bmN0aW9uLmlkJywgcGFyYW1zKTtcbiAgICB9XG5cbiAgICBhc3luYyBnZXRCb2NIYXNoKFxuICAgICAgICBwYXJhbXM6IFRPTkNvbnRyYWN0Qm9jLFxuICAgICk6IFByb21pc2U8VE9OQ29udHJhY3RHZXRCb2NIYXNoUmVzdWx0PiB7XG4gICAgICAgIHJldHVybiB0aGlzLnJlcXVlc3RDb3JlKCdjb250cmFjdHMuYm9jLmhhc2gnLCBwYXJhbXMpO1xuICAgIH1cblxuICAgIGFzeW5jIHBhcnNlTWVzc2FnZShcbiAgICAgICAgcGFyYW1zOiBUT05Db250cmFjdEJvYyxcbiAgICApOiBQcm9taXNlPFFNZXNzYWdlPiB7XG4gICAgICAgIHJldHVybiB0aGlzLnJlcXVlc3RDb3JlKCdjb250cmFjdHMucGFyc2UubWVzc2FnZScsIHBhcmFtcyk7XG4gICAgfVxuXG4gICAgLy8gTWVzc2FnZSBwYXJzaW5nXG5cbiAgICBhc3luYyBkZWNvZGVSdW5PdXRwdXQoXG4gICAgICAgIHBhcmFtczogVE9OQ29udHJhY3REZWNvZGVSdW5PdXRwdXRQYXJhbXMsXG4gICAgKTogUHJvbWlzZTxUT05Db250cmFjdFJ1blJlc3VsdD4ge1xuICAgICAgICByZXR1cm4gdGhpcy5yZXF1ZXN0Q29yZSgnY29udHJhY3RzLnJ1bi5vdXRwdXQnLCBwYXJhbXMpO1xuICAgIH1cblxuXG4gICAgYXN5bmMgZGVjb2RlSW5wdXRNZXNzYWdlQm9keShcbiAgICAgICAgcGFyYW1zOiBUT05Db250cmFjdERlY29kZU1lc3NhZ2VCb2R5UGFyYW1zLFxuICAgICk6IFByb21pc2U8VE9OQ29udHJhY3REZWNvZGVNZXNzYWdlQm9keVJlc3VsdD4ge1xuICAgICAgICByZXR1cm4gdGhpcy5yZXF1ZXN0Q29yZSgnY29udHJhY3RzLnJ1bi51bmtub3duLmlucHV0JywgcGFyYW1zKTtcbiAgICB9XG5cblxuICAgIGFzeW5jIGRlY29kZU91dHB1dE1lc3NhZ2VCb2R5KFxuICAgICAgICBwYXJhbXM6IFRPTkNvbnRyYWN0RGVjb2RlTWVzc2FnZUJvZHlQYXJhbXMsXG4gICAgKTogUHJvbWlzZTxUT05Db250cmFjdERlY29kZU1lc3NhZ2VCb2R5UmVzdWx0PiB7XG4gICAgICAgIHJldHVybiB0aGlzLnJlcXVlc3RDb3JlKCdjb250cmFjdHMucnVuLnVua25vd24ub3V0cHV0JywgcGFyYW1zKTtcbiAgICB9XG5cbiAgICAvLyBNZXNzYWdlIHByb2Nlc3NpbmdcblxuICAgIGFzeW5jIGVuc3VyZU1lc3NhZ2VJZChtZXNzYWdlOiBUT05Db250cmFjdE1lc3NhZ2UpOiBQcm9taXNlPHN0cmluZz4ge1xuICAgICAgICByZXR1cm4gbWVzc2FnZS5tZXNzYWdlSWQgfHwgYXdhaXQgKGFzeW5jICgpID0+IHtcbiAgICAgICAgICAgIGNvbnN0IGlkID0gKGF3YWl0IHRoaXMuZ2V0Qm9jSGFzaCh7XG4gICAgICAgICAgICAgICAgYm9jQmFzZTY0OiBtZXNzYWdlLm1lc3NhZ2VCb2R5QmFzZTY0LFxuICAgICAgICAgICAgfSkpLmhhc2g7XG4gICAgICAgICAgICBtZXNzYWdlLm1lc3NhZ2VJZCA9IGlkO1xuICAgICAgICAgICAgcmV0dXJuIGlkO1xuICAgICAgICB9KSgpO1xuICAgIH1cblxuICAgIGFzeW5jIHNlbmRNZXNzYWdlKFxuICAgICAgICBwYXJhbXM6IFRPTkNvbnRyYWN0TWVzc2FnZSxcbiAgICAgICAgcGFyZW50U3Bhbj86IChTcGFuIHwgU3BhbkNvbnRleHQpLFxuICAgICk6IFByb21pc2U8VE9OTWVzc2FnZVByb2Nlc3NpbmdTdGF0ZT4ge1xuICAgICAgICBjb25zdCBleHBpcmUgPSBwYXJhbXMuZXhwaXJlO1xuICAgICAgICBpZiAoZXhwaXJlICYmIChEYXRlLm5vdygpID4gZXhwaXJlICogMTAwMCkpIHtcbiAgICAgICAgICAgIHRocm93IFRPTkNsaWVudEVycm9yLnNlbmROb2RlUmVxdWVzdEZhaWxlZCgnTWVzc2FnZSBhbHJlYWR5IGV4cGlyZWQnKTtcbiAgICAgICAgfVxuICAgICAgICBjb25zdCBzZXJ2ZXJUaW1lRGVsdGEgPSBNYXRoLmFicyhhd2FpdCB0aGlzLnF1ZXJpZXMuc2VydmVyVGltZURlbHRhKHBhcmVudFNwYW4pKTtcbiAgICAgICAgaWYgKHNlcnZlclRpbWVEZWx0YSA+IHRoaXMuY29uZmlnLm91dE9mU3luY1RocmVzaG9sZCgpKSB7XG4gICAgICAgICAgICB0aGlzLnF1ZXJpZXMuZHJvcFNlcnZlclRpbWVEZWx0YSgpO1xuICAgICAgICAgICAgdGhyb3cgVE9OQ2xpZW50RXJyb3IuY2xvY2tPdXRPZlN5bmMoKTtcbiAgICAgICAgfVxuICAgICAgICBjb25zdCBsYXN0QmxvY2tJZCA9IGF3YWl0IHRoaXMuZmluZExhc3RTaGFyZEJsb2NrKHBhcmFtcy5hZGRyZXNzKTtcbiAgICAgICAgY29uc3QgaWQgPSBhd2FpdCB0aGlzLmVuc3VyZU1lc3NhZ2VJZChwYXJhbXMpO1xuICAgICAgICBjb25zdCBpZEJhc2U2NCA9IEJ1ZmZlci5mcm9tKGlkLCAnaGV4JykudG9TdHJpbmcoJ2Jhc2U2NCcpO1xuICAgICAgICBjb25zdCBtZXNzYWdlU3BhbiA9IHRoaXMuY29udGV4dC5zdGFydFJvb3RTcGFuKFxuICAgICAgICAgICAgaWQuc3Vic3RyKDAsIDE2KSxcbiAgICAgICAgICAgIGlkLnN1YnN0cigxNiwgMTYpLFxuICAgICAgICAgICAgJ21lc3NhZ2VQcm9jZXNzaW5nJyxcbiAgICAgICAgKTtcbiAgICAgICAgbWVzc2FnZVNwYW4uYWRkVGFncyh7XG4gICAgICAgICAgICBtZXNzYWdlSWQ6IGlkLFxuICAgICAgICAgICAgbWVzc2FnZVNpemU6IE1hdGguY2VpbChwYXJhbXMubWVzc2FnZUJvZHlCYXNlNjQubGVuZ3RoICogMyAvIDQpLFxuICAgICAgICAgICAgYWRkcmVzczogcGFyYW1zLmFkZHJlc3MsXG4gICAgICAgICAgICBleHBpcmU6IHBhcmFtcy5leHBpcmUsXG4gICAgICAgIH0pXG4gICAgICAgIGF3YWl0IHRoaXMucXVlcmllcy5wb3N0UmVxdWVzdHMoW1xuICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgIGlkOiBpZEJhc2U2NCxcbiAgICAgICAgICAgICAgICBib2R5OiBwYXJhbXMubWVzc2FnZUJvZHlCYXNlNjQsXG4gICAgICAgICAgICB9LFxuICAgICAgICBdLCBwYXJlbnRTcGFuKTtcbiAgICAgICAgbWVzc2FnZVNwYW4uZmluaXNoKCk7XG4gICAgICAgIHRoaXMuY29uZmlnLmxvZygnc2VuZE1lc3NhZ2UuIFJlcXVlc3QgcG9zdGVkJywgaWQpO1xuICAgICAgICByZXR1cm4ge1xuICAgICAgICAgICAgbGFzdEJsb2NrSWQsXG4gICAgICAgICAgICBzZW5kaW5nVGltZTogTWF0aC5yb3VuZChEYXRlLm5vdygpIC8gMTAwMCksXG4gICAgICAgIH07XG4gICAgfVxuXG4gICAgYXN5bmMgcHJvY2Vzc01lc3NhZ2UoXG4gICAgICAgIG1lc3NhZ2U6IFRPTkNvbnRyYWN0TWVzc2FnZSxcbiAgICAgICAgcmVzdWx0RmllbGRzOiBzdHJpbmcsXG4gICAgICAgIHBhcmVudFNwYW4/OiAoU3BhbiB8IFNwYW5Db250ZXh0KSxcbiAgICAgICAgcmV0cnlJbmRleD86IG51bWJlcixcbiAgICAgICAgYWRkcmVzcz86IHN0cmluZyxcbiAgICAgICAgYWJpPzogVE9OQ29udHJhY3RBQkksXG4gICAgICAgIGZ1bmN0aW9uTmFtZT86IHN0cmluZyxcbiAgICApOiBQcm9taXNlPFFUcmFuc2FjdGlvbj4ge1xuICAgICAgICBjb25zdCBwcm9jZXNzaW5nID0gYXdhaXQgdGhpcy5zZW5kTWVzc2FnZShtZXNzYWdlLCBwYXJlbnRTcGFuKTtcbiAgICAgICAgY29uc3QgeyB0cmFuc2FjdGlvbiB9ID0gYXdhaXQgdGhpcy53YWl0Rm9yVHJhbnNhY3Rpb24oe1xuICAgICAgICAgICAgbWVzc2FnZSxcbiAgICAgICAgICAgIG1lc3NhZ2VQcm9jZXNzaW5nU3RhdGU6IHByb2Nlc3NpbmcsXG4gICAgICAgICAgICBwYXJlbnRTcGFuLFxuICAgICAgICAgICAgYWJpLFxuICAgICAgICAgICAgZnVuY3Rpb25OYW1lLFxuICAgICAgICB9KTtcbiAgICAgICAgcmV0dXJuIHRyYW5zYWN0aW9uO1xuICAgIH1cblxuXG4gICAgYXN5bmMgZmluZExhc3RCbG9jayhjaGFpbjogbnVtYmVyLCByZXN1bHQ6IHN0cmluZywgYWRkaXRpb25hbEZpbHRlcj86IGFueSk6IFByb21pc2U8P2FueT4ge1xuICAgICAgICBjb25zdCBibG9ja3MgPSBhd2FpdCB0aGlzLnF1ZXJpZXMuYmxvY2tzLnF1ZXJ5KHtcbiAgICAgICAgICAgIGZpbHRlcjogeyB3b3JrY2hhaW5faWQ6IHsgZXE6IGNoYWluIH0sIC4uLihhZGRpdGlvbmFsRmlsdGVyIHx8IHt9KSB9LFxuICAgICAgICAgICAgcmVzdWx0LFxuICAgICAgICAgICAgb3JkZXJCeTogW1xuICAgICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICAgICAgcGF0aDogJ3NlcV9ubycsXG4gICAgICAgICAgICAgICAgICAgIGRpcmVjdGlvbjogJ0RFU0MnLFxuICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICBdLFxuICAgICAgICAgICAgbGltaXQ6IDEsXG4gICAgICAgIH0pO1xuICAgICAgICByZXR1cm4gYmxvY2tzLmxlbmd0aCA+IDAgPyBibG9ja3NbMF0gOiBudWxsO1xuICAgIH1cblxuICAgIGFzeW5jIGZpbmRNYXRjaGluZ1NoYXJkKHNoYXJkczogUVNoYXJkSGFzaFtdLCBhZGRyZXNzOiBzdHJpbmcpOiBQcm9taXNlPD9RU2hhcmRIYXNoPiB7XG4gICAgICAgIHJldHVybiB0aGlzLnJlcXVlc3RDb3JlKCdjb250cmFjdHMuZmluZC5zaGFyZCcsIHtcbiAgICAgICAgICAgIHNoYXJkcyxcbiAgICAgICAgICAgIGFkZHJlc3MsXG4gICAgICAgIH0pO1xuICAgIH1cblxuICAgIGFzeW5jIGZpbmRMYXN0U2hhcmRCbG9jayhhZGRyZXNzOiBzdHJpbmcpOiBQcm9taXNlPHN0cmluZz4ge1xuICAgICAgICBjb25zdCBhZGRyZXNzUGFydHMgPSBhZGRyZXNzLnNwbGl0KCc6Jyk7XG4gICAgICAgIGNvbnN0IHdvcmtjaGFpbiA9IGFkZHJlc3NQYXJ0cy5sZW5ndGggPiAxID8gTnVtYmVyLnBhcnNlSW50KGFkZHJlc3NQYXJ0c1swXSwgMTApIDogMDtcblxuXG4gICAgICAgIC8vIGlmIGFjY291bnQgcmVzaWRlcyBpbiBtYXN0ZXIgY2hhaW4gdGhlbiBzdGFydGluZyBwb2ludCBpcyBsYXN0IG1hc3RlciBjaGFpbiBibG9ja1xuICAgICAgICAvLyBnZW5lcmF0ZWQgYmVmb3JlIG1lc3NhZ2Ugd2FzIHNlbnRcbiAgICAgICAgY29uc3QgbWFzdGVyY2hhaW5MYXN0QmxvY2sgPSBhd2FpdCB0aGlzLmZpbmRMYXN0QmxvY2soXG4gICAgICAgICAgICBNQVNURVJDSEFJTl9JRCxcbiAgICAgICAgICAgICdpZCBtYXN0ZXIgeyBzaGFyZF9oYXNoZXMgeyB3b3JrY2hhaW5faWQgc2hhcmQgZGVzY3IgeyByb290X2hhc2ggfSB9IH0nLFxuICAgICAgICApO1xuXG4gICAgICAgIC8vIGlmIGFjY291bnQgcmVzaWRlcyBpbiBtYXN0ZXJjaGFpbiB0aGVuIHN0YXJ0aW5nIHBvaW50IGlzIGxhc3QgbWFzdGVyY2hhaW4gYmxvY2tcbiAgICAgICAgaWYgKHdvcmtjaGFpbiA9PT0gTUFTVEVSQ0hBSU5fSUQpIHtcbiAgICAgICAgICAgIGlmICghbWFzdGVyY2hhaW5MYXN0QmxvY2spIHtcbiAgICAgICAgICAgICAgICB0aHJvdyBUT05DbGllbnRFcnJvci5ub0Jsb2NrcyhNQVNURVJDSEFJTl9JRCk7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICByZXR1cm4gbWFzdGVyY2hhaW5MYXN0QmxvY2suaWQ7XG4gICAgICAgIH1cblxuICAgICAgICAvLyBpZiBhY2NvdW50IGlzIGZyb20gb3RoZXIgY2hhaW5zIHRoZW4gc3RhcnRpbmcgcG9pbnQgaXMgbGFzdCBhY2NvdW50J3Mgc2hhcmQgYmxvY2tcbiAgICAgICAgLy8gVG8gb2J0YWluIGl0IHdlIHRha2UgbWFzdGVyY2hhaW4gYmxvY2sgdG8gZ2V0IHNoYXJkcyBjb25maWd1cmF0aW9uIGFuZCBzZWxlY3RcbiAgICAgICAgLy8gbWF0Y2hpbmcgc2hhcmRcbiAgICAgICAgaWYgKCFtYXN0ZXJjaGFpbkxhc3RCbG9jaykge1xuICAgICAgICAgICAgLy8gTm9kZSBTRSBjYXNlIC0gbm8gbWFzdGVyY2hhaW4sIG5vIHNoYXJkaW5nLiBDaGVjayB0aGF0IG9ubHkgb25lIHNoYXJkXG4gICAgICAgICAgICBsZXQgd29ya2NoYWluTGFzdEJsb2NrID0gYXdhaXQgdGhpcy5maW5kTGFzdEJsb2NrKHdvcmtjaGFpbiwgJ2FmdGVyX21lcmdlIHNoYXJkJyk7XG4gICAgICAgICAgICBpZiAoIXdvcmtjaGFpbkxhc3RCbG9jaykge1xuICAgICAgICAgICAgICAgIHRocm93IFRPTkNsaWVudEVycm9yLm5vQmxvY2tzKHdvcmtjaGFpbik7XG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICAgIC8vIGlmIHdvcmtjaGFpbiBpcyBzaGFyZGVkIHRoZW4gaXQgaXMgbm90IE5vZGUgU0UgYW5kIG1hc3RlcmNoYWluIGJsb2NrcyBtaXNzaW5nXG4gICAgICAgICAgICAvLyBpcyBlcnJvclxuICAgICAgICAgICAgaWYgKHdvcmtjaGFpbkxhc3RCbG9jay5hZnRlcl9tZXJnZSB8fCB3b3JrY2hhaW5MYXN0QmxvY2suc2hhcmQgIT09ICc4MDAwMDAwMDAwMDAwMDAwJykge1xuICAgICAgICAgICAgICAgIHRocm93IFRPTkNsaWVudEVycm9yLm5vQmxvY2tzKE1BU1RFUkNIQUlOX0lEKTtcbiAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgLy8gVGFrZSBsYXN0IGJsb2NrIGJ5IHNlcV9ub1xuICAgICAgICAgICAgd29ya2NoYWluTGFzdEJsb2NrID0gYXdhaXQgdGhpcy5maW5kTGFzdEJsb2NrKHdvcmtjaGFpbiwgJ2lkJywge1xuICAgICAgICAgICAgICAgIHNoYXJkOiB7IGVxOiAnODAwMDAwMDAwMDAwMDAwMCcgfSxcbiAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgaWYgKCF3b3JrY2hhaW5MYXN0QmxvY2spIHtcbiAgICAgICAgICAgICAgICB0aHJvdyBUT05DbGllbnRFcnJvci5pbnZhbGlkQmxvY2tjaGFpbignTm8gc3RhcnRpbmcgTm9kZSBTRSBibG9jayBmb3VuZCcpO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgcmV0dXJuIHdvcmtjaGFpbkxhc3RCbG9jay5pZDtcbiAgICAgICAgfVxuXG4gICAgICAgIGNvbnN0IHNoYXJkczogP1FTaGFyZEhhc2hbXSA9IG1hc3RlcmNoYWluTGFzdEJsb2NrPy5tYXN0ZXI/LnNoYXJkX2hhc2hlcztcbiAgICAgICAgaWYgKCFzaGFyZHMgfHwgc2hhcmRzLmxlbmd0aCA9PT0gMCkge1xuICAgICAgICAgICAgdGhyb3cgVE9OQ2xpZW50RXJyb3IuaW52YWxpZEJsb2NrY2hhaW4oJ05vIGBzaGFyZF9oYXNoZXNgIGZpZWxkIGluIG1hc3RlcmNoYWluIGJsb2NrJyk7XG4gICAgICAgIH1cbiAgICAgICAgY29uc3Qgc2hhcmRCbG9jayA9IGF3YWl0IHRoaXMuZmluZE1hdGNoaW5nU2hhcmQoc2hhcmRzLCBhZGRyZXNzKTtcbiAgICAgICAgY29uc3Qgcm9vdF9oYXNoID0gc2hhcmRCbG9jaz8uZGVzY3I/LnJvb3RfaGFzaDtcbiAgICAgICAgaWYgKCFyb290X2hhc2gpIHtcbiAgICAgICAgICAgIHRocm93IFRPTkNsaWVudEVycm9yLmludmFsaWRCbG9ja2NoYWluKCdObyBgcm9vdF9oYXNoYCBmaWVsZCBpbiBzaGFyZCBkZXNjcicpO1xuICAgICAgICB9XG4gICAgICAgIHJldHVybiByb290X2hhc2g7XG4gICAgfVxuXG4gICAgYXN5bmMgY2hlY2tTaGFyZE1hdGNoKGJsb2NrOiBRQmxvY2ssIGFkZHJlc3M6IHN0cmluZyk6IFByb21pc2U8Ym9vbGVhbj4ge1xuICAgICAgICByZXR1cm4gISEoYXdhaXQgdGhpcy5maW5kTWF0Y2hpbmdTaGFyZChbXG4gICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgd29ya2NoYWluX2lkOiBibG9jay53b3JrY2hhaW5faWQgfHwgMCxcbiAgICAgICAgICAgICAgICBzaGFyZDogYmxvY2suc2hhcmQgfHwgJycsXG4gICAgICAgICAgICB9LFxuICAgICAgICBdLCBhZGRyZXNzKSk7XG4gICAgfVxuXG4gICAgYXN5bmMgd2FpdE5leHRCbG9jayhjdXJyZW50OiBzdHJpbmcsIGFkZHJlc3M6IHN0cmluZywgdGltZW91dD86IG51bWJlcik6IFByb21pc2U8UUJsb2NrPiB7XG4gICAgICAgIGNvbnN0IGJsb2NrID0gYXdhaXQgdGhpcy5xdWVyaWVzLmJsb2Nrcy53YWl0Rm9yKHtcbiAgICAgICAgICAgIGZpbHRlcjoge1xuICAgICAgICAgICAgICAgIHByZXZfcmVmOiB7XG4gICAgICAgICAgICAgICAgICAgIHJvb3RfaGFzaDogeyBlcTogY3VycmVudCB9LFxuICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgT1I6IHtcbiAgICAgICAgICAgICAgICAgICAgcHJldl9hbHRfcmVmOiB7XG4gICAgICAgICAgICAgICAgICAgICAgICByb290X2hhc2g6IHsgZXE6IGN1cnJlbnQgfSxcbiAgICAgICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgfSxcbiAgICAgICAgICAgIHJlc3VsdDogQkxPQ0tfRklFTERTLFxuICAgICAgICAgICAgdGltZW91dCxcbiAgICAgICAgfSk7XG5cbiAgICAgICAgaWYgKGJsb2NrPy5hZnRlcl9zcGxpdCAmJiAhKGF3YWl0IHRoaXMuY2hlY2tTaGFyZE1hdGNoKGJsb2NrLCBhZGRyZXNzKSkpIHtcbiAgICAgICAgICAgIHJldHVybiB0aGlzLnF1ZXJpZXMuYmxvY2tzLndhaXRGb3Ioe1xuICAgICAgICAgICAgICAgIGZpbHRlcjoge1xuICAgICAgICAgICAgICAgICAgICBpZDogeyBuZTogYmxvY2suaWQgfSxcbiAgICAgICAgICAgICAgICAgICAgcHJldl9yZWY6IHtcbiAgICAgICAgICAgICAgICAgICAgICAgIHJvb3RfaGFzaDogeyBlcTogY3VycmVudCB9LFxuICAgICAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgcmVzdWx0OiBCTE9DS19GSUVMRFMsXG4gICAgICAgICAgICAgICAgdGltZW91dCxcbiAgICAgICAgICAgIH0pO1xuICAgICAgICB9XG4gICAgICAgIHJldHVybiBibG9jaztcbiAgICB9XG5cbiAgICBhc3luYyB3YWl0Rm9yVHJhbnNhY3Rpb24ocGFyYW1zOiBUT05XYWl0Rm9yVHJhbnNhY3Rpb25QYXJhbXMpOiBQcm9taXNlPFRPTkNvbnRyYWN0UnVuUmVzdWx0PiB7XG4gICAgICAgIC8vIGNvbnN0IGxlZ2FjeVN0YXJ0ID0gRGF0ZS5ub3coKTtcbiAgICAgICAgLy8gY29uc3QgcmVzdWx0ID0gYXdhaXQgdGhpcy5sZWdhY3lXYWl0Rm9yVHJhbnNhY3Rpb24ocGFyYW1zKTtcbiAgICAgICAgLy8gY29uc29sZS5sb2coJz4+PicsIGBMZWdhY3kgd2FpdCBmb3IgYTogJHtEYXRlLm5vdygpIC0gbGVnYWN5U3RhcnR9IG1zYCk7XG4gICAgICAgIC8vIHJldHVybiByZXN1bHQ7XG5cbiAgICAgICAgY29uc3QgdG90YWxTdGFydCA9IERhdGUubm93KCk7XG4gICAgICAgIGNvbnN0IGV4cGlyZSA9IHBhcmFtcy5tZXNzYWdlLmV4cGlyZSB8fCAwO1xuICAgICAgICBjb25zdCBtZXNzYWdlSWQgPSBhd2FpdCB0aGlzLmVuc3VyZU1lc3NhZ2VJZChwYXJhbXMubWVzc2FnZSk7XG4gICAgICAgIGNvbnN0IGFkZHJlc3MgPSBwYXJhbXMubWVzc2FnZS5hZGRyZXNzO1xuICAgICAgICBjb25zdCBwcm9jZXNzaW5nID0geyAuLi5wYXJhbXMubWVzc2FnZVByb2Nlc3NpbmdTdGF0ZSB9O1xuICAgICAgICBsZXQgdHJhbnNhY3Rpb24gPSBudWxsO1xuICAgICAgICB0cnkge1xuICAgICAgICAgICAgY29uc3QgdGltZVJlcG9ydCA9IFtdO1xuXG4gICAgICAgICAgICBjb25zdCBzdG9wVGltZSA9IGV4cGlyZVxuICAgICAgICAgICAgICAgIHx8IE1hdGgucm91bmQoKERhdGUubm93KCkgKyB0aGlzLmNvbmZpZy5tZXNzYWdlUHJvY2Vzc2luZ1RpbWVvdXQoKSkgLyAxMDAwKTtcblxuICAgICAgICAgICAgY29uc3QgaW5maW5pdGVXYWl0ID0gcGFyYW1zLmluZmluaXRlV2FpdCAhPT0gZmFsc2U7XG4gICAgICAgICAgICBjb25zdCBhZGRUaW1lb3V0ID0gdGhpcy5jb25maWcubWVzc2FnZVByb2Nlc3NpbmdUaW1lb3V0KCk7XG4gICAgICAgICAgICB3aGlsZSAoIXRyYW5zYWN0aW9uKSB7XG4gICAgICAgICAgICAgICAgY29uc3Qgbm93ID0gRGF0ZS5ub3coKTtcbiAgICAgICAgICAgICAgICBjb25zdCB0aW1lb3V0ID0gTWF0aC5tYXgoc3RvcFRpbWUsIG5vdykgLSBub3cgKyBhZGRUaW1lb3V0O1xuICAgICAgICAgICAgICAgIGxldCBibG9jazogP1FCbG9jayA9IG51bGw7XG4gICAgICAgICAgICAgICAgdHJ5IHtcbiAgICAgICAgICAgICAgICAgICAgY29uc3Qgc3RhcnQgPSBEYXRlLm5vdygpO1xuICAgICAgICAgICAgICAgICAgICBibG9jayA9IGF3YWl0IHRoaXMud2FpdE5leHRCbG9jayhwcm9jZXNzaW5nLmxhc3RCbG9ja0lkLCBhZGRyZXNzLCB0aW1lb3V0KTtcbiAgICAgICAgICAgICAgICAgICAgY29uc3QgZW5kID0gRGF0ZS5ub3coKTtcbiAgICAgICAgICAgICAgICAgICAgdGltZVJlcG9ydC5wdXNoKGBCbG9jayBbJHtibG9jay5pZCB8fCAnJ31dIGhhcyBiZWVuIHJlY2VpdmVkOiAke2VuZCAtIHN0YXJ0fSBtcywgY2xpZW50IHRpbWU6ICR7TWF0aC5yb3VuZChlbmQgLyAxMDAwKX0sIGdlbl91dGltZTogJHtibG9jay5nZW5fdXRpbWUgfHwgMH1gKTtcbiAgICAgICAgICAgICAgICB9IGNhdGNoIChlcnJvcikge1xuICAgICAgICAgICAgICAgICAgICB0aGlzLmNvbmZpZy5sb2coJ0Jsb2NrIHdhaXRpbmcgZmFpbGVkOiAnLCBlcnJvcik7XG4gICAgICAgICAgICAgICAgICAgIGlmICghaW5maW5pdGVXYWl0KSB7XG4gICAgICAgICAgICAgICAgICAgICAgICBsZXQgcmVzb2x2ZWRFcnJvciA9IGVycm9yO1xuICAgICAgICAgICAgICAgICAgICAgICAgaWYgKGVycm9yLmNvZGUgPT09IFRPTkVycm9yQ29kZS5XQUlUX0ZPUl9USU1FT1VUKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgcmVzb2x2ZWRFcnJvciA9IFRPTkNsaWVudEVycm9yLm5ldHdvcmtTaWxlbnQoe1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBtZXNzYWdlSWQsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGJsb2NrSWQ6IHByb2Nlc3NpbmcubGFzdEJsb2NrSWQsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRpbWVvdXQsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIG1lc3NhZ2VQcm9jZXNzaW5nU3RhdGU6IHByb2Nlc3NpbmcsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGV4cGlyZSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgc2VuZGluZ1RpbWU6IHByb2Nlc3Npbmcuc2VuZGluZ1RpbWUsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICAgICB0aHJvdyByZXNvbHZlZEVycm9yO1xuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgIHRoaXMuY29uZmlnLmxvZygnUmV0cnkgd2FpdGluZy4nKTtcbiAgICAgICAgICAgICAgICB9XG5cbiAgICAgICAgICAgICAgICBpZiAoYmxvY2spIHtcbiAgICAgICAgICAgICAgICAgICAgcHJvY2Vzc2luZy5sYXN0QmxvY2tJZCA9IGJsb2NrLmlkIHx8ICcnO1xuXG4gICAgICAgICAgICAgICAgICAgIGNvbnN0IGluTXNnID0gKGJsb2NrLmluX21zZ19kZXNjciB8fCBbXSkuZmluZCh4ID0+IHgubXNnX2lkID09PSBtZXNzYWdlSWQpO1xuICAgICAgICAgICAgICAgICAgICBpZiAoaW5Nc2cpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIGNvbnN0IHRyYW5zYWN0aW9uSWQgPSBpbk1zZy50cmFuc2FjdGlvbl9pZDtcbiAgICAgICAgICAgICAgICAgICAgICAgIGlmICghdHJhbnNhY3Rpb25JZCkge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRocm93IFRPTkNsaWVudEVycm9yLmludmFsaWRCbG9ja2NoYWluKCdObyBmaWVsZCBgdHJhbnNhY3Rpb25faWRgIGluIGJsb2NrJyk7XG4gICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICAgICBjb25zdCB0clN0YXJ0ID0gRGF0ZS5ub3coKTtcbiAgICAgICAgICAgICAgICAgICAgICAgIHRyYW5zYWN0aW9uID0gYXdhaXQgdGhpcy5xdWVyaWVzLnRyYW5zYWN0aW9ucy53YWl0Rm9yKHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBmaWx0ZXI6IHsgaWQ6IHsgZXE6IHRyYW5zYWN0aW9uSWQgfSB9LFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHJlc3VsdDogVFJBTlNBQ1RJT05fRklFTERTX09SRElOQVJZLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRpbWVvdXQ6IE1BWF9USU1FT1VULFxuICAgICAgICAgICAgICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICAgICAgICAgICAgICB0cmFjZU1lc3NhZ2UodGhpcy5jb25maWcudHJhY2VyLCBtZXNzYWdlSWQsICd0cmFuc2FjdGlvblJlY2VpdmVkJywge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRyYW5zYWN0aW9uSWQsXG4gICAgICAgICAgICAgICAgICAgICAgICB9KVxuICAgICAgICAgICAgICAgICAgICAgICAgdGltZVJlcG9ydC5wdXNoKGBUcmFuc2FjdGlvbiBbJHt0cmFuc2FjdGlvbklkfV0gaGFzIGJlZW4gcmVjZWl2ZWQ6ICR7RGF0ZS5ub3coKSAtIHRyU3RhcnR9IG1zYCk7XG4gICAgICAgICAgICAgICAgICAgIH0gZWxzZSBpZiAoKGJsb2NrLmdlbl91dGltZSB8fCAwKSA+IHN0b3BUaW1lKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICBpZiAoZXhwaXJlKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgdHJhY2VNZXNzYWdlKHRoaXMuY29uZmlnLnRyYWNlciwgbWVzc2FnZUlkLCAnbWVzc2FnZUV4cGlyZWQnLCB7fSk7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgdGhyb3cgVE9OQ2xpZW50RXJyb3IubWVzc2FnZUV4cGlyZWQoe1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBtZXNzYWdlSWQsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHNlbmRpbmdUaW1lOiBwcm9jZXNzaW5nLnNlbmRpbmdUaW1lLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBleHBpcmU6IHN0b3BUaW1lLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBibG9ja1RpbWU6IGJsb2NrLmdlbl91dGltZSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgYmxvY2tJZDogcHJvY2Vzc2luZy5sYXN0QmxvY2tJZCxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB9KTtcbiAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICAgIHRocm93IFRPTkNsaWVudEVycm9yLnRyYW5zYWN0aW9uV2FpdFRpbWVvdXQoe1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIG1lc3NhZ2VJZCxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBzZW5kaW5nVGltZTogcHJvY2Vzc2luZy5zZW5kaW5nVGltZSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB0aW1lb3V0LFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIG1lc3NhZ2VQcm9jZXNzaW5nU3RhdGU6IHByb2Nlc3NpbmcsXG4gICAgICAgICAgICAgICAgICAgICAgICB9KTtcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgdGltZVJlcG9ydC5zcGxpY2UoMCwgMCwgYFRyYW5zYWN0aW9uIHdhaXRpbmcgdGltZTogJHtEYXRlLm5vdygpIC0gdG90YWxTdGFydH0gbXNgKTtcbiAgICAgICAgICAgIHRoaXMuY29uZmlnLmxvZyh0aW1lUmVwb3J0LmpvaW4oJ1xcbicpKTtcbiAgICAgICAgfSBjYXRjaCAoZXJyb3IpIHtcbiAgICAgICAgICAgIHRoaXMuY29uZmlnLmxvZygnW3dhaXRGb3JUcmFuc2FjdGlvbl0nLCAnRkFJTEVEJywgZXJyb3IpO1xuICAgICAgICAgICAgaWYgKGVycm9yLmNvZGUgPT09IFRPTkVycm9yQ29kZS5NRVNTQUdFX0VYUElSRURcbiAgICAgICAgICAgICAgICB8fCBlcnJvci5jb2RlID09PSBUT05FcnJvckNvZGUuVFJBTlNBQ1RJT05fV0FJVF9USU1FT1VUKSB7XG4gICAgICAgICAgICAgICAgdGhyb3cgYXdhaXQgdGhpcy5yZXNvbHZlRGV0YWlsZWRFcnJvcihcbiAgICAgICAgICAgICAgICAgICAgZXJyb3IsXG4gICAgICAgICAgICAgICAgICAgIHBhcmFtcy5tZXNzYWdlLm1lc3NhZ2VCb2R5QmFzZTY0LFxuICAgICAgICAgICAgICAgICAgICBwcm9jZXNzaW5nLnNlbmRpbmdUaW1lLFxuICAgICAgICAgICAgICAgICAgICBhZGRyZXNzLFxuICAgICAgICAgICAgICAgICk7XG4gICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAgIHRocm93IGVycm9yO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG5cbiAgICAgICAgcmV0dXJuIHRoaXMucHJvY2Vzc1RyYW5zYWN0aW9uKFxuICAgICAgICAgICAgYWRkcmVzcyxcbiAgICAgICAgICAgIHRyYW5zYWN0aW9uLFxuICAgICAgICAgICAgcGFyYW1zLmFiaSxcbiAgICAgICAgICAgIHBhcmFtcy5mdW5jdGlvbk5hbWUsXG4gICAgICAgICk7XG4gICAgfVxuXG4gICAgYXN5bmMgbGVnYWN5V2FpdEZvclRyYW5zYWN0aW9uKFxuICAgICAgICBwYXJhbXM6IFRPTldhaXRGb3JUcmFuc2FjdGlvblBhcmFtcyxcbiAgICApOiBQcm9taXNlPFRPTkNvbnRyYWN0UnVuUmVzdWx0PiB7XG4gICAgICAgIGNvbnN0IHtcbiAgICAgICAgICAgIG1lc3NhZ2UsXG4gICAgICAgICAgICBhYmksXG4gICAgICAgICAgICBmdW5jdGlvbk5hbWUsXG4gICAgICAgICAgICBwYXJlbnRTcGFuLFxuICAgICAgICB9ID0gcGFyYW1zO1xuICAgICAgICBjb25zdCBtZXNzYWdlSWQgPSBhd2FpdCB0aGlzLmVuc3VyZU1lc3NhZ2VJZChtZXNzYWdlKTtcbiAgICAgICAgY29uc3QgY29uZmlnID0gdGhpcy5jb25maWc7XG4gICAgICAgIGNvbmZpZy5sb2coJ1t3YWl0Rm9yVHJhbnNhY3Rpb25dJywgZnVuY3Rpb25OYW1lLCBtZXNzYWdlKTtcbiAgICAgICAgbGV0IHByb2Nlc3NpbmdUaW1lb3V0ID0gY29uZmlnLm1lc3NhZ2VQcm9jZXNzaW5nVGltZW91dCgpO1xuICAgICAgICBjb25zdCBwcm9taXNlcyA9IFtdO1xuICAgICAgICBjb25zdCBzZXJ2ZXJJbmZvID0gYXdhaXQgdGhpcy5xdWVyaWVzLmdldFNlcnZlckluZm8ocGFyZW50U3Bhbik7XG4gICAgICAgIGNvbnN0IG9wZXJhdGlvbklkID0gc2VydmVySW5mby5zdXBwb3J0c09wZXJhdGlvbklkXG4gICAgICAgICAgICA/IHRoaXMucXVlcmllcy5nZW5lcmF0ZU9wZXJhdGlvbklkKClcbiAgICAgICAgICAgIDogdW5kZWZpbmVkO1xuICAgICAgICBsZXQgdHJhbnNhY3Rpb246ID9RVHJhbnNhY3Rpb24gPSBudWxsO1xuICAgICAgICBjb25zdCBzZW5kaW5nVGltZSA9IE1hdGgucm91bmQoRGF0ZS5ub3coKSAvIDEwMDApO1xuICAgICAgICBsZXQgYmxvY2tUaW1lID0gbnVsbDtcbiAgICAgICAgdHJ5IHtcbiAgICAgICAgICAgIGNvbnN0IGV4cGlyZSA9IG1lc3NhZ2UuZXhwaXJlO1xuICAgICAgICAgICAgaWYgKGV4cGlyZSkge1xuICAgICAgICAgICAgICAgIC8vIGNhbGN1bGF0ZSB0aW1lb3V0IGFjY29yZGluZyB0byBgZXhwaXJlYCB2YWx1ZSAoaW4gc2Vjb25kcylcbiAgICAgICAgICAgICAgICAvLyBhZGQgcHJvY2Vzc2luZyB0aW1lb3V0IGFzIG1hc3RlciBibG9jayB2YWxpZGF0aW9uIHRpbWVcbiAgICAgICAgICAgICAgICBjb25zdCBibG9ja1RpbWVvdXQgPSBleHBpcmUgKiAxMDAwIC0gRGF0ZS5ub3coKSArIHByb2Nlc3NpbmdUaW1lb3V0O1xuICAgICAgICAgICAgICAgIC8vIHRyYW5zYWN0aW9uIHRpbWVvdXQgbXVzdCBiZSBncmVhdGVyIHRoZW4gYmxvY2sgdGltZW91dFxuICAgICAgICAgICAgICAgIHByb2Nlc3NpbmdUaW1lb3V0ID0gYmxvY2tUaW1lb3V0ICsgRVhUUkFfVFJBTlNBQ1RJT05fV0FJVElOR19USU1FO1xuXG5cbiAgICAgICAgICAgICAgICBjb25zdCB3YWl0RXhwaXJlZCA9IGFzeW5jICgpID0+IHtcbiAgICAgICAgICAgICAgICAgICAgLy8gd2FpdCBmb3IgYmxvY2ssIHByb2R1Y2VkIGFmdGVyIGBleHBpcmVgIHRvIGd1YXJhbnRlZSB0aGF0IG1lc3NhZ2UgaXMgcmVqZWN0ZWRcbiAgICAgICAgICAgICAgICAgICAgbGV0IGJsb2NrOiA/UUJsb2NrID0gbnVsbDtcbiAgICAgICAgICAgICAgICAgICAgdHJ5IHtcbiAgICAgICAgICAgICAgICAgICAgICAgIGJsb2NrID0gYXdhaXQgdGhpcy5xdWVyaWVzLmJsb2Nrcy53YWl0Rm9yKHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBmaWx0ZXI6IHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgbWFzdGVyOiB7IG1pbl9zaGFyZF9nZW5fdXRpbWU6IHsgZ2U6IGV4cGlyZSB9IH0sXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICByZXN1bHQ6ICdpZCBnZW5fdXRpbWUgaW5fbXNnX2Rlc2NyIHsgdHJhbnNhY3Rpb25faWQgfScsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgdGltZW91dDogYmxvY2tUaW1lb3V0LFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHBhcmVudFNwYW4sXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgb3BlcmF0aW9uSWQsXG4gICAgICAgICAgICAgICAgICAgICAgICB9KTtcbiAgICAgICAgICAgICAgICAgICAgfSBjYXRjaCAoZXJyb3IpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIGlmIChUT05DbGllbnRFcnJvci5pc1dhaXRGb3JUaW1lb3V0KGVycm9yKSkge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRocm93IFRPTkNsaWVudEVycm9yLm5ldHdvcmtTaWxlbnQoe1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBtZXNzYWdlSWQsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHNlbmRpbmdUaW1lOiBzZW5kaW5nVGltZSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgZXhwaXJlLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB0aW1lb3V0OiBibG9ja1RpbWVvdXQsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICAgICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRocm93IGVycm9yO1xuICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICB9XG5cbiAgICAgICAgICAgICAgICAgICAgaWYgKHRyYW5zYWN0aW9uKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICByZXR1cm47XG4gICAgICAgICAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgICAgICAgICBjb25zdCB0cmFuc2FjdGlvbklkID0gYmxvY2suaW5fbXNnX2Rlc2NyXG4gICAgICAgICAgICAgICAgICAgICAgICAmJiBibG9jay5pbl9tc2dfZGVzY3IuZmluZChtc2cgPT4gISFtc2cudHJhbnNhY3Rpb25faWQpPy50cmFuc2FjdGlvbl9pZDtcblxuICAgICAgICAgICAgICAgICAgICBpZiAoIXRyYW5zYWN0aW9uSWQpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIHRocm93IFRPTkNsaWVudEVycm9yLmludGVybmFsRXJyb3IoXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgJ0ludmFsaWQgYmxvY2sgcmVjZWl2ZWQ6IG5vIHRyYW5zYWN0aW9uIElEJyxcbiAgICAgICAgICAgICAgICAgICAgICAgICk7XG4gICAgICAgICAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgICAgICAgICAvLyBjaGVjayB0aGF0IHRyYW5zYWN0aW9ucyBjb2xsZWN0aW9uIGlzIHVwZGF0ZWRcbiAgICAgICAgICAgICAgICAgICAgdHJ5IHtcbiAgICAgICAgICAgICAgICAgICAgICAgIGF3YWl0IHRoaXMucXVlcmllcy50cmFuc2FjdGlvbnMud2FpdEZvcih7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgZmlsdGVyOiB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGlkOiB7IGVxOiB0cmFuc2FjdGlvbklkIH0sXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICByZXN1bHQ6ICdpZCcsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgdGltZW91dDogQkxPQ0tfVFJBTlNBQ1RJT05fV0FJVElOR19USU1FLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHBhcmVudFNwYW4sXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgb3BlcmF0aW9uSWQsXG4gICAgICAgICAgICAgICAgICAgICAgICB9KTtcbiAgICAgICAgICAgICAgICAgICAgfSBjYXRjaCAoZXJyb3IpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIGlmIChUT05DbGllbnRFcnJvci5pc1dhaXRGb3JUaW1lb3V0KGVycm9yKSkge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRocm93IFRPTkNsaWVudEVycm9yLm5ldHdvcmtTaWxlbnQoe1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBtZXNzYWdlSWQsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGJsb2NrSWQ6IGJsb2NrLmlkLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB0cmFuc2FjdGlvbklkLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB0aW1lb3V0OiBCTE9DS19UUkFOU0FDVElPTl9XQUlUSU5HX1RJTUUsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHNlbmRpbmdUaW1lOiBzZW5kaW5nVGltZSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgZXhwaXJlLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB0aHJvdyBlcnJvcjtcbiAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICBibG9ja1RpbWUgPSBibG9jay5nZW5fdXRpbWU7XG4gICAgICAgICAgICAgICAgfTtcblxuICAgICAgICAgICAgICAgIHByb21pc2VzLnB1c2god2FpdEV4cGlyZWQoKSk7XG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICAgIC8vIHdhaXQgZm9yIG1lc3NhZ2UgcHJvY2Vzc2luZyB0cmFuc2FjdGlvblxuICAgICAgICAgICAgcHJvbWlzZXMucHVzaChuZXcgUHJvbWlzZSgocmVzb2x2ZSwgcmVqZWN0KSA9PiB7XG4gICAgICAgICAgICAgICAgKGFzeW5jICgpID0+IHtcbiAgICAgICAgICAgICAgICAgICAgdHJ5IHtcbiAgICAgICAgICAgICAgICAgICAgICAgIHRyYW5zYWN0aW9uID0gYXdhaXQgdGhpcy5xdWVyaWVzLnRyYW5zYWN0aW9ucy53YWl0Rm9yKHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBmaWx0ZXI6IHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgaW5fbXNnOiB7IGVxOiBtZXNzYWdlSWQgfSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgc3RhdHVzOiB7IGVxOiBRVHJhbnNhY3Rpb25Qcm9jZXNzaW5nU3RhdHVzLmZpbmFsaXplZCB9LFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgcmVzdWx0OiB0cmFuc2FjdGlvbkRldGFpbHMsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgdGltZW91dDogcHJvY2Vzc2luZ1RpbWVvdXQsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgb3BlcmF0aW9uSWQsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgcGFyZW50U3BhbixcbiAgICAgICAgICAgICAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgICAgICAgICAgICAgcmVzb2x2ZSgpO1xuICAgICAgICAgICAgICAgICAgICB9IGNhdGNoIChlcnJvcikge1xuICAgICAgICAgICAgICAgICAgICAgICAgaWYgKFRPTkNsaWVudEVycm9yLmlzV2FpdEZvclRpbWVvdXQoZXJyb3IpKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgcmVqZWN0KFRPTkNsaWVudEVycm9yLnRyYW5zYWN0aW9uV2FpdFRpbWVvdXQoe1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBtZXNzYWdlSWQsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHNlbmRpbmdUaW1lLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB0aW1lb3V0OiBwcm9jZXNzaW5nVGltZW91dCxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB9KSk7XG4gICAgICAgICAgICAgICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHJlamVjdChlcnJvcik7XG4gICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICB9KSgpO1xuICAgICAgICAgICAgfSkpO1xuXG4gICAgICAgICAgICB0cnkge1xuICAgICAgICAgICAgICAgIGF3YWl0IFByb21pc2UucmFjZShwcm9taXNlcyk7XG4gICAgICAgICAgICB9IGZpbmFsbHkge1xuICAgICAgICAgICAgICAgIGlmIChwcm9taXNlcy5sZW5ndGggPiAxICYmIG9wZXJhdGlvbklkKSB7XG4gICAgICAgICAgICAgICAgICAgIGF3YWl0IHRoaXMucXVlcmllcy5maW5pc2hPcGVyYXRpb25zKFtvcGVyYXRpb25JZF0pO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgaWYgKCF0cmFuc2FjdGlvbikge1xuICAgICAgICAgICAgICAgIHRocm93IFRPTkNsaWVudEVycm9yLm1lc3NhZ2VFeHBpcmVkKHtcbiAgICAgICAgICAgICAgICAgICAgbWVzc2FnZUlkLFxuICAgICAgICAgICAgICAgICAgICBzZW5kaW5nVGltZTogc2VuZGluZ1RpbWUsXG4gICAgICAgICAgICAgICAgICAgIGV4cGlyZSxcbiAgICAgICAgICAgICAgICAgICAgYmxvY2tUaW1lLFxuICAgICAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgY29uc3QgdHJhbnNhY3Rpb25Ob3cgPSB0cmFuc2FjdGlvbi5ub3cgfHwgMDtcbiAgICAgICAgICAgIHRoaXMuY29uZmlnLmxvZygnW3dhaXRGb3JUcmFuc2FjdGlvbl0nLCAnVFJBTlNBQ1RJT05fUkVDRUlWRUQnLCB7XG4gICAgICAgICAgICAgICAgaWQ6IHRyYW5zYWN0aW9uLmlkLFxuICAgICAgICAgICAgICAgIGJsb2NrSWQ6IHRyYW5zYWN0aW9uLmJsb2NrX2lkLFxuICAgICAgICAgICAgICAgIG5vdzogYCR7bmV3IERhdGUodHJhbnNhY3Rpb25Ob3cgKiAxMDAwKS50b0lTT1N0cmluZygpfSAoJHt0cmFuc2FjdGlvbk5vd30pYCxcbiAgICAgICAgICAgIH0pO1xuICAgICAgICB9IGNhdGNoIChlcnJvcikge1xuICAgICAgICAgICAgdGhpcy5jb25maWcubG9nKCdbd2FpdEZvclRyYW5zYWN0aW9uXScsICdGQUlMRUQnLCBlcnJvcik7XG4gICAgICAgICAgICBpZiAoVE9OQ2xpZW50RXJyb3IuaXNNZXNzYWdlRXhwaXJlZChlcnJvcilcbiAgICAgICAgICAgICAgICB8fCBUT05DbGllbnRFcnJvci5pc0NsaWVudEVycm9yKGVycm9yLCBUT05FcnJvckNvZGUuVFJBTlNBQ1RJT05fV0FJVF9USU1FT1VUKSkge1xuICAgICAgICAgICAgICAgIGNvbnN0IGRldGFpbGVkRXJyb3I6IGFueSA9IGF3YWl0IHRoaXMucmVzb2x2ZURldGFpbGVkRXJyb3IoXG4gICAgICAgICAgICAgICAgICAgIGVycm9yLFxuICAgICAgICAgICAgICAgICAgICBtZXNzYWdlLm1lc3NhZ2VCb2R5QmFzZTY0LFxuICAgICAgICAgICAgICAgICAgICBEYXRlLm5vdygpIC8gMTAwMCxcbiAgICAgICAgICAgICAgICAgICAgbWVzc2FnZS5hZGRyZXNzLFxuICAgICAgICAgICAgICAgICk7XG4gICAgICAgICAgICAgICAgY29uc3QgbWVzc2FnZVByb2Nlc3NpbmdTdGF0ZSA9IGVycm9yLmRhdGE/Lm1lc3NhZ2VQcm9jZXNzaW5nU3RhdGU7XG4gICAgICAgICAgICAgICAgaWYgKG1lc3NhZ2VQcm9jZXNzaW5nU3RhdGUpIHtcbiAgICAgICAgICAgICAgICAgICAgaWYgKGRldGFpbGVkRXJyb3IuZGF0YSkge1xuICAgICAgICAgICAgICAgICAgICAgICAgZGV0YWlsZWRFcnJvci5kYXRhLm1lc3NhZ2VQcm9jZXNzaW5nU3RhdGUgPSBtZXNzYWdlUHJvY2Vzc2luZ1N0YXRlO1xuICAgICAgICAgICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAgICAgICAgICAgZGV0YWlsZWRFcnJvci5kYXRhID0ge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIG1lc3NhZ2VQcm9jZXNzaW5nU3RhdGUsXG4gICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgdGhyb3cgZGV0YWlsZWRFcnJvcjtcbiAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgICAgdGhyb3cgZXJyb3I7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgICAgcmVtb3ZlVHlwZU5hbWUodHJhbnNhY3Rpb24pO1xuICAgICAgICBjb25zdCB7IG91dHB1dCwgZmVlcyB9ID0gYXdhaXQgdGhpcy5wcm9jZXNzVHJhbnNhY3Rpb24oXG4gICAgICAgICAgICBtZXNzYWdlLmFkZHJlc3MsXG4gICAgICAgICAgICB0cmFuc2FjdGlvbixcbiAgICAgICAgICAgIGFiaSxcbiAgICAgICAgICAgIGZ1bmN0aW9uTmFtZSxcbiAgICAgICAgKTtcbiAgICAgICAgcmV0dXJuIHtcbiAgICAgICAgICAgIHRyYW5zYWN0aW9uLFxuICAgICAgICAgICAgb3V0cHV0LFxuICAgICAgICAgICAgZmVlcyxcbiAgICAgICAgfTtcbiAgICB9XG5cbiAgICBhc3luYyBwcm9jZXNzVHJhbnNhY3Rpb24oXG4gICAgICAgIGFkZHJlc3M6IHN0cmluZyxcbiAgICAgICAgdHJhbnNhY3Rpb246IFFUcmFuc2FjdGlvbixcbiAgICAgICAgYWJpOiA/VE9OQ29udHJhY3RBQkksXG4gICAgICAgIGZ1bmN0aW9uTmFtZTogP3N0cmluZyxcbiAgICApOiBQcm9taXNlPFRPTkNvbnRyYWN0UnVuUmVzdWx0PiB7XG4gICAgICAgIHRyeSB7XG4gICAgICAgICAgICBjb25zdCByZXN1bHQgPSBhd2FpdCB0aGlzLnJlcXVlc3RDb3JlKCdjb250cmFjdHMucHJvY2Vzcy50cmFuc2FjdGlvbicsIHtcbiAgICAgICAgICAgICAgICB0cmFuc2FjdGlvbixcbiAgICAgICAgICAgICAgICBhYmksXG4gICAgICAgICAgICAgICAgZnVuY3Rpb25OYW1lLFxuICAgICAgICAgICAgICAgIGFkZHJlc3MsXG4gICAgICAgICAgICB9KTtcbiAgICAgICAgICAgIHJldHVybiB7XG4gICAgICAgICAgICAgICAgdHJhbnNhY3Rpb24sXG4gICAgICAgICAgICAgICAgLi4ucmVzdWx0LFxuICAgICAgICAgICAgfTtcbiAgICAgICAgfSBjYXRjaCAoZXJyb3IpIHtcbiAgICAgICAgICAgIGNvbnN0IGFjY291bnRzID0gYXdhaXQgdGhpcy5xdWVyaWVzLmFjY291bnRzLnF1ZXJ5KHtcbiAgICAgICAgICAgICAgICBmaWx0ZXI6IHsgaWQ6IHsgZXE6IGFkZHJlc3MgfSB9LFxuICAgICAgICAgICAgICAgIHJlc3VsdDogJ2FjY190eXBlIGJhbGFuY2UnLFxuICAgICAgICAgICAgICAgIHRpbWVvdXQ6IDEwMDAsXG4gICAgICAgICAgICB9KTtcbiAgICAgICAgICAgIGlmIChhY2NvdW50cy5sZW5ndGggPT09IDApIHtcbiAgICAgICAgICAgICAgICB0aHJvdyBUT05DbGllbnRFcnJvci5hY2NvdW50TWlzc2luZyhhZGRyZXNzKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIHRocm93IGVycm9yO1xuICAgICAgICB9XG4gICAgfVxuXG4gICAgYXN5bmMgcmVzb2x2ZURldGFpbGVkRXJyb3IoXG4gICAgICAgIGVycm9yOiBFcnJvcixcbiAgICAgICAgbWVzc2FnZUJhc2U2NDogc3RyaW5nLFxuICAgICAgICB0aW1lOiBudW1iZXIsXG4gICAgICAgIGFkZHJlc3M6IHN0cmluZyxcbiAgICApIHtcbiAgICAgICAgY29uc3QgYWNjb3VudHMgPSBhd2FpdCB0aGlzLnF1ZXJpZXMuYWNjb3VudHMucXVlcnkoe1xuICAgICAgICAgICAgZmlsdGVyOiB7IGlkOiB7IGVxOiBhZGRyZXNzIH0gfSxcbiAgICAgICAgICAgIHJlc3VsdDogJ2lkIGFjY190eXBlIGJhbGFuY2UgYmFsYW5jZV9vdGhlciB7IGN1cnJlbmN5IHZhbHVlIH0gYm9jIGNvZGVfaGFzaCBkYXRhX2hhc2ggbGFzdF9wYWlkJyxcbiAgICAgICAgICAgIHRpbWVvdXQ6IDEwMDAsXG4gICAgICAgIH0pO1xuICAgICAgICBpZiAoYWNjb3VudHMubGVuZ3RoID09PSAwKSB7XG4gICAgICAgICAgICByZXR1cm4gVE9OQ2xpZW50RXJyb3IuYWNjb3VudE1pc3NpbmcoYWRkcmVzcyk7XG4gICAgICAgIH1cbiAgICAgICAgY29uc3QgYWNjb3VudCA9IGFjY291bnRzWzBdO1xuICAgICAgICByZW1vdmVUeXBlTmFtZShhY2NvdW50KTtcbiAgICAgICAgdHJ5IHtcbiAgICAgICAgICAgIGF3YWl0IHRoaXMucmVxdWVzdENvcmUoJ2NvbnRyYWN0cy5yZXNvbHZlLmVycm9yJywge1xuICAgICAgICAgICAgICAgIGFkZHJlc3MsXG4gICAgICAgICAgICAgICAgYWNjb3VudCxcbiAgICAgICAgICAgICAgICBtZXNzYWdlQmFzZTY0LFxuICAgICAgICAgICAgICAgIHRpbWU6IHRpbWUsXG4gICAgICAgICAgICAgICAgbWFpbkVycm9yOiBlcnJvcixcbiAgICAgICAgICAgIH0pO1xuICAgICAgICB9IGNhdGNoIChyZXNvbHZlZCkge1xuICAgICAgICAgICAgcmV0dXJuIHJlc29sdmVkO1xuICAgICAgICB9XG4gICAgICAgIHJldHVybiBlcnJvcjtcbiAgICB9XG5cbiAgICBhc3luYyBpc0RlcGxveWVkKGFkZHJlc3M6IHN0cmluZywgcGFyZW50U3Bhbj86IChTcGFuIHwgU3BhbkNvbnRleHQpKTogUHJvbWlzZTxib29sPiB7XG4gICAgICAgIGNvbnN0IGFjY291bnQgPSBhd2FpdCB0aGlzLnF1ZXJpZXMuYWNjb3VudHMucXVlcnkoe1xuICAgICAgICAgICAgZmlsdGVyOiB7XG4gICAgICAgICAgICAgICAgaWQ6IHsgZXE6IGFkZHJlc3MgfSxcbiAgICAgICAgICAgICAgICBhY2NfdHlwZTogeyBlcTogUUFjY291bnRUeXBlLmFjdGl2ZSB9LFxuICAgICAgICAgICAgfSxcbiAgICAgICAgICAgIHJlc3VsdDogJ2lkJyxcbiAgICAgICAgICAgIHBhcmVudFNwYW4sXG4gICAgICAgIH0pO1xuICAgICAgICByZXR1cm4gYWNjb3VudC5sZW5ndGggPiAwO1xuICAgIH1cblxuICAgIGFzeW5jIHByb2Nlc3NEZXBsb3lNZXNzYWdlKFxuICAgICAgICBtZXNzYWdlOiBUT05Db250cmFjdERlcGxveU1lc3NhZ2UsXG4gICAgICAgIHBhcmVudFNwYW4/OiAoU3BhbiB8IFNwYW5Db250ZXh0KSxcbiAgICAgICAgcmV0cnlJbmRleD86IG51bWJlcixcbiAgICApOiBQcm9taXNlPFRPTkNvbnRyYWN0RGVwbG95UmVzdWx0PiB7XG4gICAgICAgIHRoaXMuY29uZmlnLmxvZygncHJvY2Vzc0RlcGxveU1lc3NhZ2UnLCBtZXNzYWdlKTtcbiAgICAgICAgaWYgKGF3YWl0IHRoaXMuaXNEZXBsb3llZChtZXNzYWdlLmFkZHJlc3MsIHBhcmVudFNwYW4pKSB7XG4gICAgICAgICAgICByZXR1cm4ge1xuICAgICAgICAgICAgICAgIGFkZHJlc3M6IG1lc3NhZ2UuYWRkcmVzcyxcbiAgICAgICAgICAgICAgICBhbHJlYWR5RGVwbG95ZWQ6IHRydWUsXG4gICAgICAgICAgICB9O1xuICAgICAgICB9XG4gICAgICAgIGNvbnN0IHByb2Nlc3NpbmcgPSBhd2FpdCB0aGlzLnNlbmRNZXNzYWdlKG1lc3NhZ2UubWVzc2FnZSwgcGFyZW50U3Bhbik7XG4gICAgICAgIHJldHVybiB0aGlzLndhaXRGb3JEZXBsb3lUcmFuc2FjdGlvbihtZXNzYWdlLCBwcm9jZXNzaW5nLCBwYXJlbnRTcGFuKTtcbiAgICB9XG5cbiAgICBhc3luYyB3YWl0Rm9yRGVwbG95VHJhbnNhY3Rpb24oXG4gICAgICAgIGRlcGxveU1lc3NhZ2U6IFRPTkNvbnRyYWN0RGVwbG95TWVzc2FnZSxcbiAgICAgICAgbWVzc2FnZVByb2Nlc3NpbmdTdGF0ZTogVE9OTWVzc2FnZVByb2Nlc3NpbmdTdGF0ZSxcbiAgICAgICAgcGFyZW50U3Bhbj86IChTcGFuIHwgU3BhbkNvbnRleHQpLFxuICAgICAgICBpbmZpbml0ZVdhaXQ/OiBib29sZWFuLFxuICAgICk6IFByb21pc2U8VE9OQ29udHJhY3REZXBsb3lSZXN1bHQ+IHtcbiAgICAgICAgY29uc3QgbWVzc2FnZSA9IGRlcGxveU1lc3NhZ2UubWVzc2FnZTtcbiAgICAgICAgY29uc3QgcmVzdWx0ID0gYXdhaXQgdGhpcy53YWl0Rm9yVHJhbnNhY3Rpb24oe1xuICAgICAgICAgICAgbWVzc2FnZSxcbiAgICAgICAgICAgIG1lc3NhZ2VQcm9jZXNzaW5nU3RhdGUsXG4gICAgICAgICAgICBwYXJlbnRTcGFuLFxuICAgICAgICAgICAgaW5maW5pdGVXYWl0LFxuICAgICAgICB9KTtcbiAgICAgICAgcmV0dXJuIHtcbiAgICAgICAgICAgIC4uLnJlc3VsdCxcbiAgICAgICAgICAgIGFkZHJlc3M6IG1lc3NhZ2UuYWRkcmVzcyxcbiAgICAgICAgICAgIGFscmVhZHlEZXBsb3llZDogZmFsc2UsXG4gICAgICAgIH07XG4gICAgfVxuXG5cbiAgICBhc3luYyBwcm9jZXNzUnVuTWVzc2FnZShcbiAgICAgICAgcnVuTWVzc2FnZTogVE9OQ29udHJhY3RSdW5NZXNzYWdlLFxuICAgICAgICBwYXJlbnRTcGFuPzogKFNwYW4gfCBTcGFuQ29udGV4dCksXG4gICAgKTogUHJvbWlzZTxUT05Db250cmFjdFJ1blJlc3VsdD4ge1xuICAgICAgICB0aGlzLmNvbmZpZy5sb2coJ3Byb2Nlc3NSdW5NZXNzYWdlJywgcnVuTWVzc2FnZSk7XG4gICAgICAgIGNvbnN0IHByb2Nlc3NpbmcgPSBhd2FpdCB0aGlzLnNlbmRNZXNzYWdlKHJ1bk1lc3NhZ2UubWVzc2FnZSwgcGFyZW50U3Bhbik7XG4gICAgICAgIHJldHVybiB0aGlzLndhaXRGb3JSdW5UcmFuc2FjdGlvbihydW5NZXNzYWdlLCBwcm9jZXNzaW5nLCBwYXJlbnRTcGFuKTtcbiAgICB9XG5cbiAgICBhc3luYyB3YWl0Rm9yUnVuVHJhbnNhY3Rpb24oXG4gICAgICAgIHJ1bk1lc3NhZ2U6IFRPTkNvbnRyYWN0UnVuTWVzc2FnZSxcbiAgICAgICAgbWVzc2FnZVByb2Nlc3NpbmdTdGF0ZTogVE9OTWVzc2FnZVByb2Nlc3NpbmdTdGF0ZSxcbiAgICAgICAgcGFyZW50U3Bhbj86IChTcGFuIHwgU3BhbkNvbnRleHQpLFxuICAgICAgICBpbmZpbml0ZVdhaXQ/OiBib29sZWFuLFxuICAgICk6IFByb21pc2U8VE9OQ29udHJhY3RSdW5SZXN1bHQ+IHtcbiAgICAgICAgcmV0dXJuIHRoaXMud2FpdEZvclRyYW5zYWN0aW9uKHtcbiAgICAgICAgICAgIG1lc3NhZ2U6IHJ1bk1lc3NhZ2UubWVzc2FnZSxcbiAgICAgICAgICAgIG1lc3NhZ2VQcm9jZXNzaW5nU3RhdGUsXG4gICAgICAgICAgICBwYXJlbnRTcGFuLFxuICAgICAgICAgICAgaW5maW5pdGVXYWl0LFxuICAgICAgICAgICAgYWJpOiBydW5NZXNzYWdlLmFiaSxcbiAgICAgICAgICAgIGZ1bmN0aW9uTmFtZTogcnVuTWVzc2FnZS5mdW5jdGlvbk5hbWUsXG4gICAgICAgIH0pO1xuICAgIH1cblxuICAgIC8qKlxuICAgICAqIERlcHJlY2F0ZWQuIFVzZSBgcnVuTWVzc2FnZUxvY2FsYCBpbnN0ZWFkLlxuICAgICAqIEBwYXJhbSBwYXJhbXNcbiAgICAgKiBAcGFyYW0gd2FpdFBhcmFtc1xuICAgICAqIEBwYXJhbSBwYXJlbnRTcGFuXG4gICAgICogQHJldHVybnMge1Byb21pc2U8dW5rbm93bj59XG4gICAgICovXG4gICAgYXN5bmMgcHJvY2Vzc1J1bk1lc3NhZ2VMb2NhbChcbiAgICAgICAgcGFyYW1zOiBUT05Db250cmFjdFJ1bk1lc3NhZ2UsXG4gICAgICAgIHdhaXRQYXJhbXM/OiBUT05Db250cmFjdEFjY291bnRXYWl0UGFyYW1zLFxuICAgICAgICBwYXJlbnRTcGFuPzogKFNwYW4gfCBTcGFuQ29udGV4dCksXG4gICAgKTogUHJvbWlzZTxUT05Db250cmFjdFJ1blJlc3VsdD4ge1xuICAgICAgICB0aGlzLmNvbmZpZy5sb2coJ3Byb2Nlc3NSdW5NZXNzYWdlTG9jYWwnLCBwYXJhbXMpO1xuXG4gICAgICAgIGNvbnN0IGFjY291bnQgPSBhd2FpdCB0aGlzLmdldEFjY291bnQocGFyYW1zLmFkZHJlc3MsIHRydWUsIHdhaXRQYXJhbXMsIHBhcmVudFNwYW4pO1xuXG4gICAgICAgIHJldHVybiB0aGlzLnJlcXVlc3RDb3JlKCdjb250cmFjdHMucnVuLmxvY2FsLm1zZycsIHtcbiAgICAgICAgICAgIGFkZHJlc3M6IHBhcmFtcy5hZGRyZXNzLFxuICAgICAgICAgICAgYWNjb3VudCxcbiAgICAgICAgICAgIGFiaTogcGFyYW1zLmFiaSxcbiAgICAgICAgICAgIGZ1bmN0aW9uTmFtZTogcGFyYW1zLmZ1bmN0aW9uTmFtZSxcbiAgICAgICAgICAgIG1lc3NhZ2VCYXNlNjQ6IHBhcmFtcy5tZXNzYWdlLm1lc3NhZ2VCb2R5QmFzZTY0LFxuICAgICAgICB9KTtcbiAgICB9XG5cbiAgICAvLyBGZWUgY2FsY3VsYXRpb25cblxuICAgIGJpZ0JhbGFuY2UgPSAnMHgxMDAwMDAwMDAwMDAwMCc7XG5cbiAgICBhc3luYyBjYWxjUnVuRmVlcyhcbiAgICAgICAgcGFyYW1zOiBUT05Db250cmFjdENhbGNSdW5GZWVQYXJhbXMsXG4gICAgICAgIHBhcmVudFNwYW4/OiAoU3BhbiB8IFNwYW5Db250ZXh0KSxcbiAgICApOiBQcm9taXNlPFRPTkNvbnRyYWN0Q2FsY0ZlZVJlc3VsdD4ge1xuICAgICAgICB0aGlzLmNvbmZpZy5sb2coJ2NhbGNSdW5GZWVzJywgcGFyYW1zKTtcblxuICAgICAgICBjb25zdCBhY2NvdW50ID0gYXdhaXQgdGhpcy5nZXRBY2NvdW50KHBhcmFtcy5hZGRyZXNzLCB0cnVlLCBwYXJhbXMud2FpdFBhcmFtcywgcGFyZW50U3Bhbik7XG5cbiAgICAgICAgaWYgKHBhcmFtcy5lbXVsYXRlQmFsYW5jZSkge1xuICAgICAgICAgICAgYWNjb3VudC5iYWxhbmNlID0gdGhpcy5iaWdCYWxhbmNlO1xuICAgICAgICB9XG5cbiAgICAgICAgcmV0dXJuIHRoaXMucmVxdWVzdENvcmUoJ2NvbnRyYWN0cy5ydW4uZmVlJywge1xuICAgICAgICAgICAgYWRkcmVzczogcGFyYW1zLmFkZHJlc3MsXG4gICAgICAgICAgICBhY2NvdW50LFxuICAgICAgICAgICAgYWJpOiBwYXJhbXMuYWJpLFxuICAgICAgICAgICAgZnVuY3Rpb25OYW1lOiBwYXJhbXMuZnVuY3Rpb25OYW1lLFxuICAgICAgICAgICAgaW5wdXQ6IHBhcmFtcy5pbnB1dCxcbiAgICAgICAgICAgIGtleVBhaXI6IHBhcmFtcy5rZXlQYWlyLFxuICAgICAgICB9KTtcbiAgICB9XG5cbiAgICBhc3luYyBjYWxjRGVwbG95RmVlcyhcbiAgICAgICAgcGFyYW1zOiBUT05Db250cmFjdENhbGNEZXBsb3lGZWVQYXJhbXMsXG4gICAgICAgIHBhcmVudFNwYW4/OiAoU3BhbiB8IFNwYW5Db250ZXh0KSxcbiAgICApOiBQcm9taXNlPFRPTkNvbnRyYWN0Q2FsY0ZlZVJlc3VsdD4ge1xuICAgICAgICB0aGlzLmNvbmZpZy5sb2coJ2NhbGNEZXBsb3lGZWVzJywgcGFyYW1zKTtcblxuICAgICAgICBjb25zdCBtZXNzYWdlID0gYXdhaXQgdGhpcy5jcmVhdGVEZXBsb3lNZXNzYWdlKHBhcmFtcyk7XG5cbiAgICAgICAgcmV0dXJuIHRoaXMuY2FsY01zZ1Byb2Nlc3NGZWVzKHtcbiAgICAgICAgICAgIGFkZHJlc3M6IG1lc3NhZ2UuYWRkcmVzcyxcbiAgICAgICAgICAgIG1lc3NhZ2U6IG1lc3NhZ2UubWVzc2FnZSxcbiAgICAgICAgICAgIGVtdWxhdGVCYWxhbmNlOiBwYXJhbXMuZW11bGF0ZUJhbGFuY2UsXG4gICAgICAgICAgICBuZXdBY2NvdW50OiBwYXJhbXMubmV3QWNjb3VudCxcbiAgICAgICAgfSwgcGFyZW50U3Bhbik7XG4gICAgfVxuXG4gICAgYXN5bmMgY2FsY01zZ1Byb2Nlc3NGZWVzKFxuICAgICAgICBwYXJhbXM6IFRPTkNvbnRyYWN0Q2FsY01zZ1Byb2Nlc3NpbmdGZWVzUGFyYW1zLFxuICAgICAgICBwYXJlbnRTcGFuPzogKFNwYW4gfCBTcGFuQ29udGV4dCksXG4gICAgKTogUHJvbWlzZTxUT05Db250cmFjdENhbGNGZWVSZXN1bHQ+IHtcbiAgICAgICAgdGhpcy5jb25maWcubG9nKCdjYWxjTXNnUHJvY2Vzc0ZlZXMnLCBwYXJhbXMpO1xuXG4gICAgICAgIGxldCBhY2NvdW50OiBRQWNjb3VudCA9IHtcbiAgICAgICAgICAgIGJhbGFuY2U6IHRoaXMuYmlnQmFsYW5jZSxcbiAgICAgICAgICAgIGlkOiBwYXJhbXMuYWRkcmVzcyxcbiAgICAgICAgICAgIGxhc3RfcGFpZDogTWF0aC5mbG9vcihEYXRlLm5vdygpIC8gMTAwMCksXG4gICAgICAgIH07XG5cbiAgICAgICAgaWYgKCFwYXJhbXMubmV3QWNjb3VudCkge1xuICAgICAgICAgICAgYWNjb3VudCA9IGF3YWl0IHRoaXMuZ2V0QWNjb3VudChwYXJhbXMuYWRkcmVzcywgZmFsc2UsIHBhcmFtcy53YWl0UGFyYW1zLCBwYXJlbnRTcGFuKTtcbiAgICAgICAgfVxuXG4gICAgICAgIGlmIChwYXJhbXMuZW11bGF0ZUJhbGFuY2UpIHtcbiAgICAgICAgICAgIGFjY291bnQuYmFsYW5jZSA9IHRoaXMuYmlnQmFsYW5jZTtcbiAgICAgICAgfVxuXG4gICAgICAgIHJldHVybiB0aGlzLnJlcXVlc3RDb3JlKCdjb250cmFjdHMucnVuLmZlZS5tc2cnLCB7XG4gICAgICAgICAgICBhZGRyZXNzOiBwYXJhbXMuYWRkcmVzcyxcbiAgICAgICAgICAgIGFjY291bnQsXG4gICAgICAgICAgICBtZXNzYWdlQmFzZTY0OiBwYXJhbXMubWVzc2FnZS5tZXNzYWdlQm9keUJhc2U2NCxcbiAgICAgICAgfSk7XG4gICAgfVxuXG4gICAgLy8gQWRkcmVzcyBwcm9jZXNzaW5nXG5cbiAgICBhc3luYyBjb252ZXJ0QWRkcmVzcyhcbiAgICAgICAgcGFyYW1zOiBUT05Db250cmFjdENvbnZlcnRBZGRyZXNzUGFyYW1zLFxuICAgICk6IFByb21pc2U8VE9OQ29udHJhY3RDb252ZXJ0QWRkcmVzc1Jlc3VsdD4ge1xuICAgICAgICByZXR1cm4gdGhpcy5yZXF1ZXN0Q29yZSgnY29udHJhY3RzLmFkZHJlc3MuY29udmVydCcsIHBhcmFtcyk7XG4gICAgfVxuXG4gICAgLy8gSW50ZXJuYWxzXG5cbiAgICBhc3luYyBpbnRlcm5hbERlcGxveU5hdGl2ZShwYXJhbXM6IFRPTkNvbnRyYWN0RGVwbG95UGFyYW1zKTogUHJvbWlzZTxUT05Db250cmFjdERlcGxveVJlc3VsdD4ge1xuICAgICAgICByZXR1cm4gdGhpcy5yZXF1ZXN0Q29yZSgnY29udHJhY3RzLmRlcGxveScsIHtcbiAgICAgICAgICAgIGFiaTogcGFyYW1zLnBhY2thZ2UuYWJpLFxuICAgICAgICAgICAgY29uc3RydWN0b3JIZWFkZXI6IHBhcmFtcy5jb25zdHJ1Y3RvckhlYWRlcixcbiAgICAgICAgICAgIGNvbnN0cnVjdG9yUGFyYW1zOiBwYXJhbXMuY29uc3RydWN0b3JQYXJhbXMsXG4gICAgICAgICAgICBpbml0UGFyYW1zOiBwYXJhbXMuaW5pdFBhcmFtcyxcbiAgICAgICAgICAgIGltYWdlQmFzZTY0OiBwYXJhbXMucGFja2FnZS5pbWFnZUJhc2U2NCxcbiAgICAgICAgICAgIGtleVBhaXI6IHBhcmFtcy5rZXlQYWlyLFxuICAgICAgICB9KTtcbiAgICB9XG5cblxuICAgIGFzeW5jIGludGVybmFsUnVuTmF0aXZlKHBhcmFtczogVE9OQ29udHJhY3RSdW5QYXJhbXMpOiBQcm9taXNlPFRPTkNvbnRyYWN0UnVuUmVzdWx0PiB7XG4gICAgICAgIHJldHVybiB0aGlzLnJlcXVlc3RDb3JlKCdjb250cmFjdHMucnVuJywge1xuICAgICAgICAgICAgYWRkcmVzczogcGFyYW1zLmFkZHJlc3MsXG4gICAgICAgICAgICBhYmk6IHBhcmFtcy5hYmksXG4gICAgICAgICAgICBmdW5jdGlvbk5hbWU6IHBhcmFtcy5mdW5jdGlvbk5hbWUsXG4gICAgICAgICAgICBoZWFkZXI6IHBhcmFtcy5oZWFkZXIsXG4gICAgICAgICAgICBpbnB1dDogcGFyYW1zLmlucHV0LFxuICAgICAgICAgICAga2V5UGFpcjogcGFyYW1zLmtleVBhaXIsXG4gICAgICAgIH0pO1xuICAgIH1cblxuXG4gICAgYXN5bmMgcmV0cnlDYWxsKGNhbGw6IChpbmRleDogbnVtYmVyKSA9PiBQcm9taXNlPGFueT4pOiBQcm9taXNlPGFueT4ge1xuICAgICAgICBjb25zdCByZXRyaWVzQ291bnQgPSB0aGlzLmNvbmZpZy5tZXNzYWdlUmV0cmllc0NvdW50KCk7XG4gICAgICAgIGZvciAobGV0IGkgPSAwOyBpIDw9IHJldHJpZXNDb3VudDsgaSArPSAxKSB7XG4gICAgICAgICAgICBpZiAoaSA+IDApIHtcbiAgICAgICAgICAgICAgICB0aGlzLmNvbmZpZy5sb2coYFJldHJ5ICMke2l9YCk7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICB0cnkge1xuICAgICAgICAgICAgICAgIHJldHVybiBhd2FpdCBjYWxsKGkpO1xuICAgICAgICAgICAgfSBjYXRjaCAoZXJyb3IpIHtcbiAgICAgICAgICAgICAgICAvLyByZXRyeSBpZiBtZXNzYWdlIGV4cGlyZWQgb3IgaWYgcmVzb2x2aW5nIHJldHVybmVkIHRoYXQgbWVzc2FnZSBleHBpcmVkL3JlcGxheVxuICAgICAgICAgICAgICAgIC8vIHByb3RlY3Rpb24gZXJyb3Igb3IgaWYgdHJhbnNhY3Rpb24gd2l0aCBtZXNzYWdlIGV4cGlyZWQvcmVwbGF5IHByb3RlY3Rpb24gZXJyb3JcbiAgICAgICAgICAgICAgICAvLyByZXR1cm5lZFxuICAgICAgICAgICAgICAgIGNvbnN0IHVzZVJldHJ5ID0gZXJyb3IuY29kZSA9PT0gVE9ORXJyb3JDb2RlLk1FU1NBR0VfRVhQSVJFRFxuICAgICAgICAgICAgICAgICAgICB8fCBUT05DbGllbnRFcnJvci5pc09yaWdpbmFsQ29udHJhY3RFcnJvcihlcnJvciwgVE9OQ29udHJhY3RFeGl0Q29kZS5SRVBMQVlfUFJPVEVDVElPTilcbiAgICAgICAgICAgICAgICAgICAgfHwgVE9OQ2xpZW50RXJyb3IuaXNPcmlnaW5hbENvbnRyYWN0RXJyb3IoZXJyb3IsIFRPTkNvbnRyYWN0RXhpdENvZGUuTUVTU0FHRV9FWFBJUkVEKVxuICAgICAgICAgICAgICAgICAgICB8fCBUT05DbGllbnRFcnJvci5pc1Jlc29sdmVkQ29udHJhY3RFcnJvckFmdGVyRXhwaXJlKGVycm9yLCBUT05Db250cmFjdEV4aXRDb2RlLlJFUExBWV9QUk9URUNUSU9OKVxuICAgICAgICAgICAgICAgICAgICB8fCBUT05DbGllbnRFcnJvci5pc1Jlc29sdmVkQ29udHJhY3RFcnJvckFmdGVyRXhwaXJlKGVycm9yLCBUT05Db250cmFjdEV4aXRDb2RlLk1FU1NBR0VfRVhQSVJFRCk7XG4gICAgICAgICAgICAgICAgaWYgKCF1c2VSZXRyeSB8fCBpID09PSByZXRyaWVzQ291bnQpIHtcbiAgICAgICAgICAgICAgICAgICAgdGhyb3cgZXJyb3I7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICAgIHRocm93IFRPTkNsaWVudEVycm9yLmludGVybmFsRXJyb3IoJ0FsbCByZXRyeSBhdHRlbXB0cyBmYWlsZWQnKTtcbiAgICB9XG5cblxuICAgIGFzeW5jIGludGVybmFsRGVwbG95SnMoXG4gICAgICAgIHBhcmFtczogVE9OQ29udHJhY3REZXBsb3lQYXJhbXMsXG4gICAgICAgIHBhcmVudFNwYW4/OiAoU3BhbiB8IFNwYW5Db250ZXh0KSxcbiAgICApOiBQcm9taXNlPFRPTkNvbnRyYWN0RGVwbG95UmVzdWx0PiB7XG4gICAgICAgIHRoaXMuY29uZmlnLmxvZygnRGVwbG95IHN0YXJ0Jyk7XG4gICAgICAgIHJldHVybiB0aGlzLnJldHJ5Q2FsbChhc3luYyAocmV0cnlJbmRleCkgPT4ge1xuICAgICAgICAgICAgY29uc3QgZGVwbG95TWVzc2FnZSA9IGF3YWl0IHRoaXMuY3JlYXRlRGVwbG95TWVzc2FnZShwYXJhbXMsIHJldHJ5SW5kZXgpO1xuICAgICAgICAgICAgaWYgKGF3YWl0IHRoaXMuaXNEZXBsb3llZChkZXBsb3lNZXNzYWdlLmFkZHJlc3MsIHBhcmVudFNwYW4pKSB7XG4gICAgICAgICAgICAgICAgcmV0dXJuIHtcbiAgICAgICAgICAgICAgICAgICAgYWRkcmVzczogZGVwbG95TWVzc2FnZS5hZGRyZXNzLFxuICAgICAgICAgICAgICAgICAgICBhbHJlYWR5RGVwbG95ZWQ6IHRydWUsXG4gICAgICAgICAgICAgICAgfTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGNvbnN0IHByb2Nlc3NpbmcgPSBhd2FpdCB0aGlzLnNlbmRNZXNzYWdlKGRlcGxveU1lc3NhZ2UubWVzc2FnZSwgcGFyZW50U3Bhbik7XG4gICAgICAgICAgICByZXR1cm4gdGhpcy53YWl0Rm9yRGVwbG95VHJhbnNhY3Rpb24oZGVwbG95TWVzc2FnZSwgcHJvY2Vzc2luZywgcGFyZW50U3Bhbik7XG4gICAgICAgIH0pO1xuICAgIH1cblxuXG4gICAgYXN5bmMgaW50ZXJuYWxSdW5KcyhcbiAgICAgICAgcGFyYW1zOiBUT05Db250cmFjdFJ1blBhcmFtcyxcbiAgICAgICAgcGFyZW50U3Bhbj86IChTcGFuIHwgU3BhbkNvbnRleHQpLFxuICAgICk6IFByb21pc2U8VE9OQ29udHJhY3RSdW5SZXN1bHQ+IHtcbiAgICAgICAgdGhpcy5jb25maWcubG9nKCdSdW4gc3RhcnQnKTtcbiAgICAgICAgcmV0dXJuIHRoaXMucmV0cnlDYWxsKGFzeW5jIChyZXRyeUluZGV4KSA9PiB7XG4gICAgICAgICAgICBjb25zdCBydW5NZXNzYWdlID0gYXdhaXQgdGhpcy5jcmVhdGVSdW5NZXNzYWdlKHBhcmFtcywgcmV0cnlJbmRleCk7XG4gICAgICAgICAgICBjb25zdCBwcm9jZXNzaW5nID0gYXdhaXQgdGhpcy5zZW5kTWVzc2FnZShydW5NZXNzYWdlLm1lc3NhZ2UsIHBhcmVudFNwYW4pO1xuICAgICAgICAgICAgcmV0dXJuIHRoaXMud2FpdEZvclJ1blRyYW5zYWN0aW9uKHJ1bk1lc3NhZ2UsIHByb2Nlc3NpbmcsIHBhcmVudFNwYW4pO1xuICAgICAgICB9KTtcbiAgICB9XG5cblxuICAgIGFzeW5jIGdldEFjY291bnQoXG4gICAgICAgIGFkZHJlc3M6IHN0cmluZyxcbiAgICAgICAgYWN0aXZlOiBib29sZWFuLFxuICAgICAgICB3YWl0UGFyYW1zPzogVE9OQ29udHJhY3RBY2NvdW50V2FpdFBhcmFtcyxcbiAgICAgICAgcGFyZW50U3Bhbj86IChTcGFuIHwgU3BhbkNvbnRleHQpLFxuICAgICk6IFByb21pc2U8UUFjY291bnQ+IHtcbiAgICAgICAgY29uc3QgZmlsdGVyOiB7IFtzdHJpbmddOiBhbnkgfSA9IHtcbiAgICAgICAgICAgIGlkOiB7IGVxOiBhZGRyZXNzIH0sXG4gICAgICAgIH07XG4gICAgICAgIGlmICh3YWl0UGFyYW1zICYmIHdhaXRQYXJhbXMudHJhbnNhY3Rpb25MdCkge1xuICAgICAgICAgICAgZmlsdGVyLmxhc3RfdHJhbnNfbHQgPSB7IGdlOiB3YWl0UGFyYW1zLnRyYW5zYWN0aW9uTHQgfTtcbiAgICAgICAgfVxuICAgICAgICBpZiAoYWN0aXZlKSB7XG4gICAgICAgICAgICBmaWx0ZXIuYWNjX3R5cGUgPSB7IGVxOiBRQWNjb3VudFR5cGUuYWN0aXZlIH07XG4gICAgICAgIH1cblxuICAgICAgICB0aGlzLmNvbmZpZy5sb2coJ2dldEFjY291bnQuIEZpbHRlcicsIGZpbHRlcik7XG4gICAgICAgIGNvbnN0IGFjY291bnRzID0gYXdhaXQgdGhpcy5xdWVyaWVzLmFjY291bnRzLnF1ZXJ5KHtcbiAgICAgICAgICAgIGZpbHRlcixcbiAgICAgICAgICAgIHJlc3VsdDogJ2lkIGFjY190eXBlIGJvYyBjb2RlX2hhc2ggZGF0YV9oYXNoIGJhbGFuY2UgYmFsYW5jZV9vdGhlciB7IGN1cnJlbmN5IHZhbHVlIH0gbGFzdF9wYWlkJyxcbiAgICAgICAgICAgIC4uLih3YWl0UGFyYW1zICYmIHdhaXRQYXJhbXMudGltZW91dCA/IHsgdGltZW91dDogd2FpdFBhcmFtcy50aW1lb3V0IH0gOiB7fSksXG4gICAgICAgICAgICBwYXJlbnRTcGFuLFxuICAgICAgICB9KTtcbiAgICAgICAgaWYgKGFjY291bnRzLmxlbmd0aCA9PT0gMCkge1xuICAgICAgICAgICAgdGhyb3cgVE9OQ2xpZW50RXJyb3IuYWNjb3VudE1pc3NpbmcoYWRkcmVzcyk7XG4gICAgICAgIH1cbiAgICAgICAgY29uc3QgYWNjb3VudCA9IGFjY291bnRzWzBdO1xuICAgICAgICByZW1vdmVUeXBlTmFtZShhY2NvdW50KTtcbiAgICAgICAgdGhpcy5jb25maWcubG9nKCdnZXRBY2NvdW50LiBBY2NvdW50IHJlY2VpdmVkJywgYWNjb3VudCk7XG4gICAgICAgIHJldHVybiBhY2NvdW50O1xuICAgIH1cblxuICAgIGFzeW5jIGludGVybmFsUnVuTG9jYWxKcyhcbiAgICAgICAgcGFyYW1zOiBUT05Db250cmFjdFJ1bkxvY2FsUGFyYW1zLFxuICAgICAgICBwYXJlbnRTcGFuPzogKFNwYW4gfCBTcGFuQ29udGV4dCksXG4gICAgKTogUHJvbWlzZTxUT05Db250cmFjdFJ1bkxvY2FsUmVzdWx0PiB7XG4gICAgICAgIGNvbnN0IGFkZHJlc3MgPSBwYXJhbXMuYWRkcmVzcztcbiAgICAgICAgaWYgKCFhZGRyZXNzKSB7XG4gICAgICAgICAgICB0aHJvdyBUT05DbGllbnRFcnJvci5hZGRyZXNzUmVxdWlyZWRGb3JSdW5Mb2NhbCgpO1xuICAgICAgICB9XG4gICAgICAgIGNvbnN0IGFjY291bnQgPSBwYXJhbXMuYWNjb3VudCB8fCAoYXdhaXQgdGhpcy5nZXRBY2NvdW50KFxuICAgICAgICAgICAgYWRkcmVzcyxcbiAgICAgICAgICAgIGZhbHNlLFxuICAgICAgICAgICAgcGFyYW1zLndhaXRQYXJhbXMsXG4gICAgICAgICAgICBwYXJlbnRTcGFuLFxuICAgICAgICApKTtcbiAgICAgICAgaWYgKCFhY2NvdW50LmNvZGVfaGFzaCkge1xuICAgICAgICAgICAgdGhyb3cgVE9OQ2xpZW50RXJyb3IuYWNjb3VudENvZGVNaXNzaW5nKGFkZHJlc3MsIChhY2NvdW50OiBhbnkpLmJhbGFuY2UpO1xuICAgICAgICB9XG4gICAgICAgIHJldHVybiB0aGlzLnJlcXVlc3RDb3JlKCdjb250cmFjdHMucnVuLmxvY2FsJywge1xuICAgICAgICAgICAgYWRkcmVzcyxcbiAgICAgICAgICAgIGFjY291bnQsXG4gICAgICAgICAgICBhYmk6IHBhcmFtcy5hYmksXG4gICAgICAgICAgICBmdW5jdGlvbk5hbWU6IHBhcmFtcy5mdW5jdGlvbk5hbWUsXG4gICAgICAgICAgICBpbnB1dDogcGFyYW1zLmlucHV0LFxuICAgICAgICAgICAga2V5UGFpcjogcGFyYW1zLmtleVBhaXIsXG4gICAgICAgICAgICBmdWxsUnVuOiBwYXJhbXMuZnVsbFJ1bixcbiAgICAgICAgfSk7XG4gICAgfVxuXG4gICAgYXN5bmMgaW50ZXJuYWxSdW5NZXNzYWdlTG9jYWxKcyhcbiAgICAgICAgcGFyYW1zOiBUT05Db250cmFjdFJ1bk1lc3NhZ2VMb2NhbFBhcmFtcyxcbiAgICAgICAgcGFyZW50U3Bhbj86IChTcGFuIHwgU3BhbkNvbnRleHQpLFxuICAgICk6IFByb21pc2U8VE9OQ29udHJhY3RSdW5Mb2NhbFJlc3VsdD4ge1xuICAgICAgICBjb25zdCBhZGRyZXNzID0gcGFyYW1zLmFkZHJlc3M7XG4gICAgICAgIGlmICghYWRkcmVzcykge1xuICAgICAgICAgICAgdGhyb3cgVE9OQ2xpZW50RXJyb3IuYWRkcmVzc1JlcXVpcmVkRm9yUnVuTG9jYWwoKTtcbiAgICAgICAgfVxuICAgICAgICBjb25zdCBhY2NvdW50ID0gcGFyYW1zLmFjY291bnQgfHwgKGF3YWl0IHRoaXMuZ2V0QWNjb3VudChcbiAgICAgICAgICAgIGFkZHJlc3MsXG4gICAgICAgICAgICBmYWxzZSxcbiAgICAgICAgICAgIHBhcmFtcy53YWl0UGFyYW1zLFxuICAgICAgICAgICAgcGFyZW50U3BhbixcbiAgICAgICAgKSk7XG4gICAgICAgIGlmICghYWNjb3VudC5jb2RlX2hhc2gpIHtcbiAgICAgICAgICAgIHRocm93IFRPTkNsaWVudEVycm9yLmFjY291bnRDb2RlTWlzc2luZyhhZGRyZXNzLCAoYWNjb3VudDogYW55KS5iYWxhbmNlKTtcbiAgICAgICAgfVxuICAgICAgICByZXR1cm4gdGhpcy5yZXF1ZXN0Q29yZSgnY29udHJhY3RzLnJ1bi5sb2NhbC5tc2cnLCB7XG4gICAgICAgICAgICBhZGRyZXNzLFxuICAgICAgICAgICAgYWNjb3VudCxcbiAgICAgICAgICAgIGFiaTogcGFyYW1zLmFiaSxcbiAgICAgICAgICAgIGZ1bmN0aW9uTmFtZTogcGFyYW1zLmZ1bmN0aW9uTmFtZSxcbiAgICAgICAgICAgIG1lc3NhZ2VCYXNlNjQ6IHBhcmFtcy5tZXNzYWdlQm9keUJhc2U2NCxcbiAgICAgICAgICAgIGZ1bGxSdW46IHBhcmFtcy5mdWxsUnVuLFxuICAgICAgICB9KTtcbiAgICB9XG59XG5cblRPTkNvbnRyYWN0c01vZHVsZS5tb2R1bGVOYW1lID0gJ1RPTkNvbnRyYWN0c01vZHVsZSc7XG5cbmNvbnN0IHRyYW5zYWN0aW9uRGV0YWlscyA9IGBcbiAgICBpZFxuICAgIGluX21zZ1xuICAgIHRyX3R5cGVcbiAgICBzdGF0dXNcbiAgICBpbl9tc2dcbiAgICBvdXRfbXNnc1xuICAgIGJsb2NrX2lkXG4gICAgbm93XG4gICAgYWJvcnRlZFxuICAgIGx0XG4gICAgdG90YWxfZmVlc1xuICAgIHN0b3JhZ2Uge1xuICAgICAgICBzdGF0dXNfY2hhbmdlXG4gICAgICAgIHN0b3JhZ2VfZmVlc19jb2xsZWN0ZWRcbiAgICB9XG4gICAgY29tcHV0ZSB7XG4gICAgICAgIGNvbXB1dGVfdHlwZVxuICAgICAgICBza2lwcGVkX3JlYXNvblxuICAgICAgICBzdWNjZXNzXG4gICAgICAgIGV4aXRfY29kZVxuICAgICAgICBnYXNfZmVlc1xuICAgICAgICBnYXNfdXNlZFxuICAgIH1cbiAgICBhY3Rpb24ge1xuICAgICAgICBzdWNjZXNzXG4gICAgICAgIHZhbGlkXG4gICAgICAgIHJlc3VsdF9jb2RlXG4gICAgICAgIG5vX2Z1bmRzXG4gICAgICAgIHRvdGFsX2Z3ZF9mZWVzXG4gICAgICAgIHRvdGFsX2FjdGlvbl9mZWVzXG4gICAgfVxuICAgIG91dF9tZXNzYWdlcyB7XG4gICAgICAgIGlkXG4gICAgICAgIG1zZ190eXBlXG4gICAgICAgIGJvZHlcbiAgICAgICAgdmFsdWVcbiAgICB9XG4gICBgO1xuXG5jb25zdCBCTE9DS19GSUVMRFMgPSBgXG4gICAgaWRcbiAgICBnZW5fdXRpbWVcbiAgICBhZnRlcl9zcGxpdFxuICAgIHdvcmtjaGFpbl9pZFxuICAgIHNoYXJkXG4gICAgaW5fbXNnX2Rlc2NyIHtcbiAgICAgICAgbXNnX2lkXG4gICAgICAgIHRyYW5zYWN0aW9uX2lkXG4gICAgfVxuYDtcblxuY29uc3QgVFJBTlNBQ1RJT05fRklFTERTX09SRElOQVJZID0gYFxuICAgIGlkXG4gICAgYWJvcnRlZFxuICAgIGNvbXB1dGUge1xuICAgICAgICBza2lwcGVkX3JlYXNvblxuICAgICAgICBleGl0X2NvZGVcbiAgICAgICAgc3VjY2Vzc1xuICAgICAgICBnYXNfZmVlc1xuICAgIH1cbiAgICBzdG9yYWdlIHtcbiAgICAgICBzdGF0dXNfY2hhbmdlXG4gICAgICAgc3RvcmFnZV9mZWVzX2NvbGxlY3RlZFxuICAgIH1cbiAgICBhY3Rpb24ge1xuICAgICAgICBzdWNjZXNzXG4gICAgICAgIHZhbGlkXG4gICAgICAgIG5vX2Z1bmRzXG4gICAgICAgIHJlc3VsdF9jb2RlXG4gICAgICAgIHRvdGFsX2Z3ZF9mZWVzXG4gICAgICAgIHRvdGFsX2FjdGlvbl9mZWVzXG4gICAgfVxuICAgIGluX21zZ1xuICAgIG5vd1xuICAgIG91dF9tc2dzXG4gICAgb3V0X21lc3NhZ2VzIHtcbiAgICAgICAgaWRcbiAgICAgICAgYm9keVxuICAgICAgICBtc2dfdHlwZVxuICAgICAgICB2YWx1ZVxuICAgIH1cbiAgICBzdGF0dXNcbiAgICB0b3RhbF9mZWVzXG5gO1xuIl19