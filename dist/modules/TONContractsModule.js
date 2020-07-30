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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy9tb2R1bGVzL1RPTkNvbnRyYWN0c01vZHVsZS5qcyJdLCJuYW1lcyI6WyJUT05BZGRyZXNzU3RyaW5nVmFyaWFudCIsIkFjY291bnRJZCIsIkhleCIsIkJhc2U2NCIsIlRPTkNsaWVudFRyYW5zYWN0aW9uUGhhc2UiLCJzdG9yYWdlIiwiY29tcHV0ZVNraXBwZWQiLCJjb21wdXRlVm0iLCJhY3Rpb24iLCJ1bmtub3duIiwiVE9OQ2xpZW50Q29tcHV0ZVNraXBwZWRTdGF0dXMiLCJub1N0YXRlIiwiYmFkU3RhdGUiLCJub0dhcyIsIlRPTkNsaWVudFN0b3JhZ2VTdGF0dXMiLCJ1bmNoYW5nZWQiLCJmcm96ZW4iLCJkZWxldGVkIiwiUUluTXNnVHlwZSIsImV4dGVybmFsIiwiaWhyIiwiaW1tZWRpYXRlbHkiLCJ0cmFuc2l0IiwiZGlzY2FyZGVkRmluYWwiLCJkaXNjYXJkZWRUcmFuc2l0IiwiUU91dE1zZ1R5cGUiLCJvdXRNc2dOZXciLCJkZXF1ZXVlSW1tZWRpYXRlbHkiLCJkZXF1ZXVlIiwidHJhbnNpdFJlcXVpcmVkIiwibm9uZSIsIlFNZXNzYWdlVHlwZSIsImludGVybmFsIiwiZXh0SW4iLCJleHRPdXQiLCJRTWVzc2FnZVByb2Nlc3NpbmdTdGF0dXMiLCJxdWV1ZWQiLCJwcm9jZXNzaW5nIiwicHJlbGltaW5hcnkiLCJwcm9wb3NlZCIsImZpbmFsaXplZCIsInJlZnVzZWQiLCJ0cmFuc2l0aW5nIiwiUUJsb2NrUHJvY2Vzc2luZ1N0YXR1cyIsIlFTcGxpdFR5cGUiLCJzcGxpdCIsIm1lcmdlIiwiUUFjY291bnRUeXBlIiwidW5pbml0IiwiYWN0aXZlIiwiUVRyYW5zYWN0aW9uVHlwZSIsIm9yZGluYXJ5IiwidGljayIsInRvY2siLCJzcGxpdFByZXBhcmUiLCJzcGxpdEluc3RhbGwiLCJtZXJnZVByZXBhcmUiLCJtZXJnZUluc3RhbGwiLCJRVHJhbnNhY3Rpb25Qcm9jZXNzaW5nU3RhdHVzIiwiUUFjY291bnRTdGF0dXMiLCJub25FeGlzdCIsIlFBY2NvdW50U3RhdHVzQ2hhbmdlIiwiUUNvbXB1dGVUeXBlIiwic2tpcHBlZCIsInZtIiwiUVNraXBSZWFzb24iLCJRQm91bmNlVHlwZSIsIm5lZ0Z1bmRzIiwibm9GdW5kcyIsIm9rIiwiTUFTVEVSQ0hBSU5fSUQiLCJFWFRSQV9UUkFOU0FDVElPTl9XQUlUSU5HX1RJTUUiLCJCTE9DS19UUkFOU0FDVElPTl9XQUlUSU5HX1RJTUUiLCJyZW1vdmVUeXBlTmFtZSIsIm9iaiIsIl9fdHlwZW5hbWUiLCJPYmplY3QiLCJ2YWx1ZXMiLCJmb3JFYWNoIiwidmFsdWUiLCJyZW1vdmVQcm9wcyIsInBhdGhzIiwicmVzdWx0IiwicGF0aCIsImRvdFBvcyIsImluZGV4T2YiLCJuYW1lIiwic3Vic3RyIiwiY2hpbGQiLCJyZWR1Y2VkQ2hpbGQiLCJzdGFydE1lc3NhZ2VUcmFjZVNwYW4iLCJ0cmFjZXIiLCJtZXNzYWdlSWQiLCJvcGVyYXRpb25OYW1lIiwidGFncyIsInRyYWNlSWQiLCJzcGFuSWQiLCJyb290Q29udGV4dCIsImV4dHJhY3QiLCJGT1JNQVRfVEVYVF9NQVAiLCJzdGFydFNwYW4iLCJjaGlsZE9mIiwidHJhY2VNZXNzYWdlIiwic3BhbiIsImZpbmlzaCIsIlRPTkNvbnRyYWN0c01vZHVsZSIsImNvbmZpZyIsImNvbnRleHQiLCJnZXRNb2R1bGUiLCJUT05Db25maWdNb2R1bGUiLCJxdWVyaWVzIiwiVE9OUXVlcmllc01vZHVsZSIsInBhcmFtcyIsInBhcmVudFNwYW4iLCJhY2NvdW50cyIsInF1ZXJ5IiwiZmlsdGVyIiwiaWQiLCJlcSIsImFkZHJlc3MiLCJsZW5ndGgiLCJiYWxhbmNlR3JhbXMiLCJiYWxhbmNlIiwidHJhY2UiLCJzZXRUYWciLCJpbnRlcm5hbERlcGxveUpzIiwiaW50ZXJuYWxSdW5KcyIsImludGVybmFsUnVuTG9jYWxKcyIsImludGVybmFsUnVuTWVzc2FnZUxvY2FsSnMiLCJjb3JlUGFyYW1zIiwiaGFzQ29kZSIsImJvY0Jhc2U2NCIsImNvZGVCYXNlNjQiLCJkYXRhQmFzZTY0IiwiVE9OQ2xpZW50RXJyb3IiLCJhZGRyZXNzUmVxdWlyZWRGb3JSdW5Mb2NhbCIsImdldEFjY291bnQiLCJ0aW1lb3V0Iiwid2FpdEZvclRpbWVvdXQiLCJhY2NvdW50IiwiY29kZV9oYXNoIiwiYWNjb3VudENvZGVNaXNzaW5nIiwiYm9jIiwicmVxdWVzdENvcmUiLCJjb25zIiwiaXRlbSIsImludmFsaWRDb25zIiwicHVzaCIsInJldHJ5SW5kZXgiLCJsb2ciLCJhYmkiLCJjb25zdHJ1Y3RvckhlYWRlciIsImNvbnN0cnVjdG9yUGFyYW1zIiwiaW5pdFBhcmFtcyIsImltYWdlQmFzZTY0Iiwia2V5UGFpciIsIndvcmtjaGFpbklkIiwibWVzc2FnZSIsImZ1bmN0aW9uTmFtZSIsImhlYWRlciIsInRyeUluZGV4IiwiaW5wdXQiLCJwdWJsaWNLZXlIZXgiLCJhZGRyZXNzSGV4Iiwic2lnblBhcmFtcyIsImVuY29kZWQiLCJjcmVhdGVTaWduZWRNZXNzYWdlIiwidW5zaWduZWRNZXNzYWdlIiwidW5zaWduZWRCeXRlc0Jhc2U2NCIsInNpZ25CeXRlc0Jhc2U2NCIsImV4cGlyZSIsImdldEJvY0hhc2giLCJtZXNzYWdlQm9keUJhc2U2NCIsImhhc2giLCJEYXRlIiwibm93Iiwic2VuZE5vZGVSZXF1ZXN0RmFpbGVkIiwiTWF0aCIsInNlcnZlclRpbWVEZWx0YSIsImFicyIsIm91dE9mU3luY1RocmVzaG9sZCIsImRyb3BTZXJ2ZXJUaW1lRGVsdGEiLCJjbG9ja091dE9mU3luYyIsImZpbmRMYXN0U2hhcmRCbG9jayIsImxhc3RCbG9ja0lkIiwiZW5zdXJlTWVzc2FnZUlkIiwiaWRCYXNlNjQiLCJCdWZmZXIiLCJmcm9tIiwidG9TdHJpbmciLCJtZXNzYWdlU3BhbiIsInN0YXJ0Um9vdFNwYW4iLCJhZGRUYWdzIiwibWVzc2FnZVNpemUiLCJjZWlsIiwicG9zdFJlcXVlc3RzIiwiYm9keSIsInNlbmRpbmdUaW1lIiwicm91bmQiLCJyZXN1bHRGaWVsZHMiLCJzZW5kTWVzc2FnZSIsIndhaXRGb3JUcmFuc2FjdGlvbiIsIm1lc3NhZ2VQcm9jZXNzaW5nU3RhdGUiLCJ0cmFuc2FjdGlvbiIsImNoYWluIiwiYWRkaXRpb25hbEZpbHRlciIsImJsb2NrcyIsIndvcmtjaGFpbl9pZCIsIm9yZGVyQnkiLCJkaXJlY3Rpb24iLCJsaW1pdCIsInNoYXJkcyIsImFkZHJlc3NQYXJ0cyIsIndvcmtjaGFpbiIsIk51bWJlciIsInBhcnNlSW50IiwiZmluZExhc3RCbG9jayIsIm1hc3RlcmNoYWluTGFzdEJsb2NrIiwibm9CbG9ja3MiLCJ3b3JrY2hhaW5MYXN0QmxvY2siLCJhZnRlcl9tZXJnZSIsInNoYXJkIiwiaW52YWxpZEJsb2NrY2hhaW4iLCJtYXN0ZXIiLCJzaGFyZF9oYXNoZXMiLCJmaW5kTWF0Y2hpbmdTaGFyZCIsInNoYXJkQmxvY2siLCJyb290X2hhc2giLCJkZXNjciIsImJsb2NrIiwiY3VycmVudCIsIndhaXRGb3IiLCJwcmV2X3JlZiIsIkJMT0NLX0ZJRUxEUyIsImFmdGVyX3NwbGl0IiwiY2hlY2tTaGFyZE1hdGNoIiwibmUiLCJ0b3RhbFN0YXJ0IiwidGltZVJlcG9ydCIsInN0b3BUaW1lIiwibWVzc2FnZVByb2Nlc3NpbmdUaW1lb3V0IiwiaW5maW5pdGVXYWl0IiwiYWRkVGltZW91dCIsIm1heCIsInN0YXJ0Iiwid2FpdE5leHRCbG9jayIsImVuZCIsImdlbl91dGltZSIsInJlc29sdmVkRXJyb3IiLCJjb2RlIiwiVE9ORXJyb3JDb2RlIiwiV0FJVF9GT1JfVElNRU9VVCIsIm5ldHdvcmtTaWxlbnQiLCJibG9ja0lkIiwiaW5Nc2ciLCJpbl9tc2dfZGVzY3IiLCJmaW5kIiwieCIsIm1zZ19pZCIsInRyYW5zYWN0aW9uSWQiLCJ0cmFuc2FjdGlvbl9pZCIsInRyU3RhcnQiLCJ0cmFuc2FjdGlvbnMiLCJUUkFOU0FDVElPTl9GSUVMRFNfT1JESU5BUlkiLCJNQVhfVElNRU9VVCIsIm1lc3NhZ2VFeHBpcmVkIiwiYmxvY2tUaW1lIiwidHJhbnNhY3Rpb25XYWl0VGltZW91dCIsInNwbGljZSIsImpvaW4iLCJNRVNTQUdFX0VYUElSRUQiLCJUUkFOU0FDVElPTl9XQUlUX1RJTUVPVVQiLCJyZXNvbHZlRGV0YWlsZWRFcnJvciIsInByb2Nlc3NUcmFuc2FjdGlvbiIsInByb2Nlc3NpbmdUaW1lb3V0IiwicHJvbWlzZXMiLCJnZXRTZXJ2ZXJJbmZvIiwic2VydmVySW5mbyIsIm9wZXJhdGlvbklkIiwic3VwcG9ydHNPcGVyYXRpb25JZCIsImdlbmVyYXRlT3BlcmF0aW9uSWQiLCJ1bmRlZmluZWQiLCJibG9ja1RpbWVvdXQiLCJ3YWl0RXhwaXJlZCIsIm1pbl9zaGFyZF9nZW5fdXRpbWUiLCJnZSIsImlzV2FpdEZvclRpbWVvdXQiLCJtc2ciLCJpbnRlcm5hbEVycm9yIiwiUHJvbWlzZSIsInJlc29sdmUiLCJyZWplY3QiLCJpbl9tc2ciLCJzdGF0dXMiLCJ0cmFuc2FjdGlvbkRldGFpbHMiLCJyYWNlIiwiZmluaXNoT3BlcmF0aW9ucyIsInRyYW5zYWN0aW9uTm93IiwiYmxvY2tfaWQiLCJ0b0lTT1N0cmluZyIsImlzTWVzc2FnZUV4cGlyZWQiLCJpc0NsaWVudEVycm9yIiwiZGV0YWlsZWRFcnJvciIsImRhdGEiLCJvdXRwdXQiLCJmZWVzIiwiYWNjb3VudE1pc3NpbmciLCJlcnJvciIsIm1lc3NhZ2VCYXNlNjQiLCJ0aW1lIiwibWFpbkVycm9yIiwiYWNjX3R5cGUiLCJpc0RlcGxveWVkIiwiYWxyZWFkeURlcGxveWVkIiwid2FpdEZvckRlcGxveVRyYW5zYWN0aW9uIiwiZGVwbG95TWVzc2FnZSIsInJ1bk1lc3NhZ2UiLCJ3YWl0Rm9yUnVuVHJhbnNhY3Rpb24iLCJ3YWl0UGFyYW1zIiwiZW11bGF0ZUJhbGFuY2UiLCJiaWdCYWxhbmNlIiwiY3JlYXRlRGVwbG95TWVzc2FnZSIsImNhbGNNc2dQcm9jZXNzRmVlcyIsIm5ld0FjY291bnQiLCJsYXN0X3BhaWQiLCJmbG9vciIsImNhbGwiLCJyZXRyaWVzQ291bnQiLCJtZXNzYWdlUmV0cmllc0NvdW50IiwiaSIsInVzZVJldHJ5IiwiaXNPcmlnaW5hbENvbnRyYWN0RXJyb3IiLCJUT05Db250cmFjdEV4aXRDb2RlIiwiUkVQTEFZX1BST1RFQ1RJT04iLCJpc1Jlc29sdmVkQ29udHJhY3RFcnJvckFmdGVyRXhwaXJlIiwicmV0cnlDYWxsIiwiY3JlYXRlUnVuTWVzc2FnZSIsInRyYW5zYWN0aW9uTHQiLCJsYXN0X3RyYW5zX2x0IiwiZnVsbFJ1biIsIlRPTk1vZHVsZSIsIm1vZHVsZU5hbWUiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7QUFLQTs7QUFzREE7O0FBQ0E7O0FBQ0E7O0FBQ0E7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFFTyxJQUFNQSx1QkFBdUIsR0FBRztBQUNuQ0MsRUFBQUEsU0FBUyxFQUFFLFdBRHdCO0FBRW5DQyxFQUFBQSxHQUFHLEVBQUUsS0FGOEI7QUFHbkNDLEVBQUFBLE1BQU0sRUFBRTtBQUgyQixDQUFoQzs7QUFNQSxJQUFNQyx5QkFBeUIsR0FBRztBQUNyQ0MsRUFBQUEsT0FBTyxFQUFFLFNBRDRCO0FBRXJDQyxFQUFBQSxjQUFjLEVBQUUsZ0JBRnFCO0FBR3JDQyxFQUFBQSxTQUFTLEVBQUUsV0FIMEI7QUFJckNDLEVBQUFBLE1BQU0sRUFBRSxRQUo2QjtBQUtyQ0MsRUFBQUEsT0FBTyxFQUFFO0FBTDRCLENBQWxDOztBQVFBLElBQU1DLDZCQUE2QixHQUFHO0FBQ3pDQyxFQUFBQSxPQUFPLEVBQUUsQ0FEZ0M7QUFFekNDLEVBQUFBLFFBQVEsRUFBRSxDQUYrQjtBQUd6Q0MsRUFBQUEsS0FBSyxFQUFFO0FBSGtDLENBQXRDOztBQU1BLElBQU1DLHNCQUFzQixHQUFHO0FBQ2xDQyxFQUFBQSxTQUFTLEVBQUUsQ0FEdUI7QUFFbENDLEVBQUFBLE1BQU0sRUFBRSxDQUYwQjtBQUdsQ0MsRUFBQUEsT0FBTyxFQUFFO0FBSHlCLENBQS9COztBQU1BLElBQU1DLFVBQVUsR0FBRztBQUN0QkMsRUFBQUEsUUFBUSxFQUFFLENBRFk7QUFFdEJDLEVBQUFBLEdBQUcsRUFBRSxDQUZpQjtB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SEFZUG5PLE0sRUFDQUMsVTs7Ozs7O0FBRU1NLGdCQUFBQSxPLEdBQVVQLE1BQU0sQ0FBQ08sTzs7b0JBQ2xCQSxPOzs7OztzQkFDS2UsMEJBQWVDLDBCQUFmLEU7OztnQ0FFTXZCLE1BQU0sQ0FBQzJCLE87Ozs7Ozs7O3VCQUFrQixLQUFLSCxVQUFMLENBQ3JDakIsT0FEcUMsRUFFckMsS0FGcUMsRUFHckNQLE1BQU0sQ0FBQzhNLFVBSDhCLEVBSXJDN00sVUFKcUMsQzs7Ozs7O0FBQW5DMEIsZ0JBQUFBLE87O29CQU1EQSxPQUFPLENBQUNDLFM7Ozs7O3NCQUNITiwwQkFBZU8sa0JBQWYsQ0FBa0N0QixPQUFsQyxFQUE0Q29CLE9BQUQsQ0FBZWpCLE9BQTFELEM7OzttREFFSCxLQUFLcUIsV0FBTCxDQUFpQix5QkFBakIsRUFBNEM7QUFDL0N4QixrQkFBQUEsT0FBTyxFQUFQQSxPQUQrQztBQUUvQ29CLGtCQUFBQSxPQUFPLEVBQVBBLE9BRitDO0FBRy9DVyxrQkFBQUEsR0FBRyxFQUFFdEMsTUFBTSxDQUFDc0MsR0FIbUM7QUFJL0NRLGtCQUFBQSxZQUFZLEVBQUU5QyxNQUFNLENBQUM4QyxZQUowQjtBQUsvQ3NKLGtCQUFBQSxhQUFhLEVBQUVwTSxNQUFNLENBQUM0RCxpQkFMeUI7QUFNL0N1SyxrQkFBQUEsT0FBTyxFQUFFbk8sTUFBTSxDQUFDbU87QUFOK0IsaUJBQTVDLEM7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7RUFyckNpQ0MscUI7OztBQWdzQ2hEM08sa0JBQWtCLENBQUM0TyxVQUFuQixHQUFnQyxvQkFBaEM7QUFFQSxJQUFNL0Msa0JBQWtCLDJrQkFBeEI7QUF3Q0EsSUFBTTdELFlBQVksK0lBQWxCO0FBWUEsSUFBTThCLDJCQUEyQiwrZUFBakMiLCJzb3VyY2VzQ29udGVudCI6WyIvKlxuICogQ29weXJpZ2h0IDIwMTgtMjAyMCBUT04gREVWIFNPTFVUSU9OUyBMVEQuXG4gKi9cbi8vIEBmbG93XG5cbmltcG9ydCB7IFRyYWNlciwgRk9STUFUX1RFWFRfTUFQLCBTcGFuLCBTcGFuQ29udGV4dCB9IGZyb20gJ29wZW50cmFjaW5nJztcbmltcG9ydCB0eXBlIHtcbiAgICBRQWNjb3VudCxcbiAgICBRQmxvY2ssXG4gICAgUU1lc3NhZ2UsXG4gICAgUVRyYW5zYWN0aW9uLFxuICAgIFRPTkNvbnRyYWN0QUJJLFxuICAgIFRPTkNvbnRyYWN0QWNjb3VudFdhaXRQYXJhbXMsXG4gICAgVE9OQ29udHJhY3RDb252ZXJ0QWRkcmVzc1BhcmFtcyxcbiAgICBUT05Db250cmFjdENvbnZlcnRBZGRyZXNzUmVzdWx0LFxuICAgIFRPTkNvbnRyYWN0Q3JlYXRlUnVuQm9keVBhcmFtcyxcbiAgICBUT05Db250cmFjdENyZWF0ZVJ1bkJvZHlSZXN1bHQsXG4gICAgVE9OQ29udHJhY3RDcmVhdGVTaWduZWREZXBsb3lNZXNzYWdlUGFyYW1zLFxuICAgIFRPTkNvbnRyYWN0Q3JlYXRlU2lnbmVkTWVzc2FnZVBhcmFtcyxcbiAgICBUT05Db250cmFjdENyZWF0ZVNpZ25lZFJ1bk1lc3NhZ2VQYXJhbXMsXG4gICAgVE9OQ29udHJhY3REZWNvZGVNZXNzYWdlQm9keVBhcmFtcyxcbiAgICBUT05Db250cmFjdERlY29kZU1lc3NhZ2VCb2R5UmVzdWx0LFxuICAgIFRPTkNvbnRyYWN0RGVjb2RlUnVuT3V0cHV0UGFyYW1zLFxuICAgIFRPTkNvbnRyYWN0RGVwbG95TWVzc2FnZSxcbiAgICBUT05Db250cmFjdERlcGxveVBhcmFtcyxcbiAgICBUT05Db250cmFjdERlcGxveVJlc3VsdCxcbiAgICBUT05Db250cmFjdENhbGNEZXBsb3lGZWVQYXJhbXMsXG4gICAgVE9OQ29udHJhY3RCb2MsXG4gICAgVE9OQ29udHJhY3RHZXRCb2NIYXNoUmVzdWx0LFxuICAgIFRPTkNvbnRyYWN0R2V0Q29kZUZyb21JbWFnZVBhcmFtcyxcbiAgICBUT05Db250cmFjdEdldENvZGVGcm9tSW1hZ2VSZXN1bHQsXG4gICAgVE9OQ29udHJhY3RHZXREZXBsb3lEYXRhUGFyYW1zLFxuICAgIFRPTkNvbnRyYWN0R2V0RGVwbG95RGF0YVJlc3VsdCxcbiAgICBUT05Db250cmFjdEdldEZ1bmN0aW9uSWRQYXJhbXMsXG4gICAgVE9OQ29udHJhY3RHZXRGdW5jdGlvbklkUmVzdWx0LFxuICAgIFRPTkNvbnRyYWN0TG9hZFBhcmFtcyxcbiAgICBUT05Db250cmFjdExvYWRSZXN1bHQsXG4gICAgVE9OQ29udHJhY3RDYWxjUnVuRmVlUGFyYW1zLFxuICAgIFRPTkNvbnRyYWN0Q2FsY0ZlZVJlc3VsdCxcbiAgICBUT05Db250cmFjdENhbGNNc2dQcm9jZXNzaW5nRmVlc1BhcmFtcyxcbiAgICBUT05Db250cmFjdE1lc3NhZ2UsXG4gICAgVE9OQ29udHJhY3RSdW5Mb2NhbFBhcmFtcyxcbiAgICBUT05Db250cmFjdFJ1bk1lc3NhZ2UsXG4gICAgVE9OQ29udHJhY3RSdW5QYXJhbXMsXG4gICAgVE9OQ29udHJhY3RSdW5SZXN1bHQsXG4gICAgVE9OQ29udHJhY3RzLFxuICAgIFRPTkNvbnRyYWN0VW5zaWduZWREZXBsb3lNZXNzYWdlLFxuICAgIFRPTkNvbnRyYWN0VW5zaWduZWRNZXNzYWdlLFxuICAgIFRPTkNvbnRyYWN0VW5zaWduZWRSdW5NZXNzYWdlLFxuICAgIFRPTkNvbnRyYWN0UnVuR2V0UGFyYW1zLFxuICAgIFRPTkNvbnRyYWN0UnVuR2V0UmVzdWx0LFxuICAgIFRPTkNvbnRyYWN0UnVuTWVzc2FnZUxvY2FsUGFyYW1zLFxuICAgIFRPTkNvbnRyYWN0UnVuTG9jYWxSZXN1bHQsXG4gICAgVE9OQ29udHJhY3RUcmFuc2FjdGlvbkZlZXMsXG4gICAgVE9OV2FpdEZvclRyYW5zYWN0aW9uUGFyYW1zLFxuICAgIFFTaGFyZEhhc2gsXG4gICAgVE9OTWVzc2FnZVByb2Nlc3NpbmdTdGF0ZSxcbn0gZnJvbSAnLi4vLi4vdHlwZXMnO1xuXG5pbXBvcnQgeyBUT05DbGllbnRFcnJvciwgVE9OQ29udHJhY3RFeGl0Q29kZSwgVE9ORXJyb3JDb2RlIH0gZnJvbSAnLi4vVE9OQ2xpZW50JztcbmltcG9ydCB7IFRPTk1vZHVsZSB9IGZyb20gJy4uL1RPTk1vZHVsZSc7XG5pbXBvcnQgVE9OQ29uZmlnTW9kdWxlIGZyb20gJy4vVE9OQ29uZmlnTW9kdWxlJztcbmltcG9ydCBUT05RdWVyaWVzTW9kdWxlLCB7IE1BWF9USU1FT1VUIH0gZnJvbSAnLi9UT05RdWVyaWVzTW9kdWxlJztcblxuZXhwb3J0IGNvbnN0IFRPTkFkZHJlc3NTdHJpbmdWYXJpYW50ID0ge1xuICAgIEFjY291bnRJZDogJ0FjY291bnRJZCcsXG4gICAgSGV4OiAnSGV4JyxcbiAgICBCYXNlNjQ6ICdCYXNlNjQnLFxufTtcblxuZXhwb3J0IGNvbnN0IFRPTkNsaWVudFRyYW5zYWN0aW9uUGhhc2UgPSB7XG4gICAgc3RvcmFnZTogJ3N0b3JhZ2UnLFxuICAgIGNvbXB1dGVTa2lwcGVkOiAnY29tcHV0ZVNraXBwZWQnLFxuICAgIGNvbXB1dGVWbTogJ2NvbXB1dGVWbScsXG4gICAgYWN0aW9uOiAnYWN0aW9uJyxcbiAgICB1bmtub3duOiAndW5rbm93bicsXG59O1xuXG5leHBvcnQgY29uc3QgVE9OQ2xpZW50Q29tcHV0ZVNraXBwZWRTdGF0dXMgPSB7XG4gICAgbm9TdGF0ZTogMCxcbiAgICBiYWRTdGF0ZTogMSxcbiAgICBub0dhczogMixcbn07XG5cbmV4cG9ydCBjb25zdCBUT05DbGllbnRTdG9yYWdlU3RhdHVzID0ge1xuICAgIHVuY2hhbmdlZDogMCxcbiAgICBmcm96ZW46IDEsXG4gICAgZGVsZXRlZDogMixcbn07XG5cbmV4cG9ydCBjb25zdCBRSW5Nc2dUeXBlID0ge1xuICAgIGV4dGVybmFsOiAwLFxuICAgIGlocjogMSxcbiAgICBpbW1lZGlhdGVseTogMixcbiAgICBmaW5hbDogMyxcbiAgICB0cmFuc2l0OiA0LFxuICAgIGRpc2NhcmRlZEZpbmFsOiA1LFxuICAgIGRpc2NhcmRlZFRyYW5zaXQ6IDYsXG59O1xuXG5leHBvcnQgY29uc3QgUU91dE1zZ1R5cGUgPSB7XG4gICAgZXh0ZXJuYWw6IDAsXG4gICAgaW1tZWRpYXRlbHk6IDEsXG4gICAgb3V0TXNnTmV3OiAyLFxuICAgIHRyYW5zaXQ6IDMsXG4gICAgZGVxdWV1ZUltbWVkaWF0ZWx5OiA0LFxuICAgIGRlcXVldWU6IDUsXG4gICAgdHJhbnNpdFJlcXVpcmVkOiA2LFxuICAgIG5vbmU6IC0xLFxufTtcblxuZXhwb3J0IGNvbnN0IFFNZXNzYWdlVHlwZSA9IHtcbiAgICBpbnRlcm5hbDogMCxcbiAgICBleHRJbjogMSxcbiAgICBleHRPdXQ6IDIsXG59O1xuXG5leHBvcnQgY29uc3QgUU1lc3NhZ2VQcm9jZXNzaW5nU3RhdHVzID0ge1xuICAgIHVua25vd246IDAsXG4gICAgcXVldWVkOiAxLFxuICAgIHByb2Nlc3Npbmc6IDIsXG4gICAgcHJlbGltaW5hcnk6IDMsXG4gICAgcHJvcG9zZWQ6IDQsXG4gICAgZmluYWxpemVkOiA1LFxuICAgIHJlZnVzZWQ6IDYsXG4gICAgdHJhbnNpdGluZzogNyxcbn07XG5cbmV4cG9ydCBjb25zdCBRQmxvY2tQcm9jZXNzaW5nU3RhdHVzID0ge1xuICAgIHVua25vd246IDAsXG4gICAgcHJvcG9zZWQ6IDEsXG4gICAgZmluYWxpemVkOiAyLFxuICAgIHJlZnVzZWQ6IDMsXG59O1xuXG5leHBvcnQgY29uc3QgUVNwbGl0VHlwZSA9IHtcbiAgICBub25lOiAwLFxuICAgIHNwbGl0OiAyLFxuICAgIG1lcmdlOiAzLFxufTtcblxuZXhwb3J0IGNvbnN0IFFBY2NvdW50VHlwZSA9IHtcbiAgICB1bmluaXQ6IDAsXG4gICAgYWN0aXZlOiAxLFxuICAgIGZyb3plbjogMixcbn07XG5cbmV4cG9ydCBjb25zdCBRVHJhbnNhY3Rpb25UeXBlID0ge1xuICAgIG9yZGluYXJ5OiAwLFxuICAgIHN0b3JhZ2U6IDEsXG4gICAgdGljazogMixcbiAgICB0b2NrOiAzLFxuICAgIHNwbGl0UHJlcGFyZTogNCxcbiAgICBzcGxpdEluc3RhbGw6IDUsXG4gICAgbWVyZ2VQcmVwYXJlOiA2LFxuICAgIG1lcmdlSW5zdGFsbDogNyxcbn07XG5cbmV4cG9ydCBjb25zdCBRVHJhbnNhY3Rpb25Qcm9jZXNzaW5nU3RhdHVzID0ge1xuICAgIHVua25vd246IDAsXG4gICAgcHJlbGltaW5hcnk6IDEsXG4gICAgcHJvcG9zZWQ6IDIsXG4gICAgZmluYWxpemVkOiAzLFxuICAgIHJlZnVzZWQ6IDQsXG59O1xuXG5leHBvcnQgY29uc3QgUUFjY291bnRTdGF0dXMgPSB7XG4gICAgdW5pbml0OiAwLFxuICAgIGFjdGl2ZTogMSxcbiAgICBmcm96ZW46IDIsXG4gICAgbm9uRXhpc3Q6IDMsXG59O1xuXG5leHBvcnQgY29uc3QgUUFjY291bnRTdGF0dXNDaGFuZ2UgPSB7XG4gICAgdW5jaGFuZ2VkOiAwLFxuICAgIGZyb3plbjogMSxcbiAgICBkZWxldGVkOiAyLFxufTtcblxuZXhwb3J0IGNvbnN0IFFDb21wdXRlVHlwZSA9IHtcbiAgICBza2lwcGVkOiAwLFxuICAgIHZtOiAxLFxufTtcblxuZXhwb3J0IGNvbnN0IFFTa2lwUmVhc29uID0ge1xuICAgIG5vU3RhdGU6IDAsXG4gICAgYmFkU3RhdGU6IDEsXG4gICAgbm9HYXM6IDIsXG59O1xuXG5leHBvcnQgY29uc3QgUUJvdW5jZVR5cGUgPSB7XG4gICAgbmVnRnVuZHM6IDAsXG4gICAgbm9GdW5kczogMSxcbiAgICBvazogMixcbn07XG5cbmNvbnN0IE1BU1RFUkNIQUlOX0lEID0gLTE7XG5cbmNvbnN0IEVYVFJBX1RSQU5TQUNUSU9OX1dBSVRJTkdfVElNRSA9IDEwMDAwO1xuY29uc3QgQkxPQ0tfVFJBTlNBQ1RJT05fV0FJVElOR19USU1FID0gNTAwMDtcblxuZnVuY3Rpb24gcmVtb3ZlVHlwZU5hbWUob2JqOiBhbnkpIHtcbiAgICBpZiAob2JqLl9fdHlwZW5hbWUpIHtcbiAgICAgICAgZGVsZXRlIG9iai5fX3R5cGVuYW1lO1xuICAgIH1cbiAgICBPYmplY3QudmFsdWVzKG9iailcbiAgICAgICAgLmZvckVhY2goKHZhbHVlKSA9PiB7XG4gICAgICAgICAgICBpZiAoISF2YWx1ZSAmJiB0eXBlb2YgdmFsdWUgPT09ICdvYmplY3QnKSB7XG4gICAgICAgICAgICAgICAgcmVtb3ZlVHlwZU5hbWUodmFsdWUpO1xuICAgICAgICAgICAgfVxuICAgICAgICB9KTtcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIHJlbW92ZVByb3BzKG9iajoge30sIHBhdGhzOiBzdHJpbmdbXSk6IHt9IHtcbiAgICBsZXQgcmVzdWx0ID0gb2JqO1xuICAgIHBhdGhzLmZvckVhY2goKHBhdGgpID0+IHtcbiAgICAgICAgY29uc3QgZG90UG9zID0gcGF0aC5pbmRleE9mKCcuJyk7XG4gICAgICAgIGlmIChkb3RQb3MgPCAwKSB7XG4gICAgICAgICAgICBpZiAocGF0aCBpbiByZXN1bHQpIHtcbiAgICAgICAgICAgICAgICByZXN1bHQgPSB7IC4uLnJlc3VsdCB9O1xuICAgICAgICAgICAgICAgIGRlbGV0ZSByZXN1bHRbcGF0aF07XG4gICAgICAgICAgICB9XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICBjb25zdCBuYW1lID0gcGF0aC5zdWJzdHIoMCwgZG90UG9zKTtcbiAgICAgICAgICAgIGNvbnN0IGNoaWxkID0gcmVzdWx0W25hbWVdO1xuICAgICAgICAgICAgaWYgKGNoaWxkKSB7XG4gICAgICAgICAgICAgICAgY29uc3QgcmVkdWNlZENoaWxkID0gcmVtb3ZlUHJvcHMoY2hpbGQsIFtwYXRoLnN1YnN0cihkb3RQb3MgKyAxKV0pO1xuICAgICAgICAgICAgICAgIGlmIChyZWR1Y2VkQ2hpbGQgIT09IGNoaWxkKSB7XG4gICAgICAgICAgICAgICAgICAgIHJlc3VsdCA9IHtcbiAgICAgICAgICAgICAgICAgICAgICAgIC4uLnJlc3VsdCxcbiAgICAgICAgICAgICAgICAgICAgICAgIFtuYW1lXTogcmVkdWNlZENoaWxkLFxuICAgICAgICAgICAgICAgICAgICB9O1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgIH0pO1xuICAgIHJldHVybiByZXN1bHQ7XG59XG5cbmZ1bmN0aW9uIHN0YXJ0TWVzc2FnZVRyYWNlU3BhbihcbiAgICB0cmFjZXI6IFRyYWNlcixcbiAgICBtZXNzYWdlSWQ6IHN0cmluZyxcbiAgICBvcGVyYXRpb25OYW1lOiBzdHJpbmcsXG4gICAgdGFnczogeyBbc3RyaW5nXTogYW55IH0sXG4pOiA/U3BhbiB7XG4gICAgaWYgKCFtZXNzYWdlSWQpIHtcbiAgICAgICAgcmV0dXJuIG51bGw7XG4gICAgfVxuICAgIGNvbnN0IHRyYWNlSWQgPSBtZXNzYWdlSWQuc3Vic3RyKDAsIDE2KTtcbiAgICBjb25zdCBzcGFuSWQgPSBtZXNzYWdlSWQuc3Vic3RyKDE2LCAxNik7XG4gICAgbGV0IHJvb3RDb250ZXh0OiA/U3BhbkNvbnRleHQgPSBudWxsO1xuICAgIHRyeSB7XG4gICAgICAgIHJvb3RDb250ZXh0ID0gdHJhY2VyLmV4dHJhY3QoRk9STUFUX1RFWFRfTUFQLCB7XG4gICAgICAgICAgICAndWJlci10cmFjZS1pZCc6IGAke3RyYWNlSWR9OiR7c3BhbklkfTowOjFgLFxuICAgICAgICB9KTtcbiAgICB9IGNhdGNoIHtcbiAgICAgICAgLy8gdHJhY2VyIGNhbid0IGNyZWF0ZSBqYWVnZXIgY29tcGF0aWJsZSBzcGFuLFxuICAgICAgICAvLyBzbyB3ZSBhcmUgZmFsbGJhY2sgdG8gcmV0dXJuIG51bGxcbiAgICB9XG4gICAgaWYgKCFyb290Q29udGV4dCkge1xuICAgICAgICByZXR1cm4gbnVsbDtcbiAgICB9XG4gICAgcmV0dXJuIHRyYWNlci5zdGFydFNwYW4ob3BlcmF0aW9uTmFtZSwge1xuICAgICAgICBjaGlsZE9mOiByb290Q29udGV4dCxcbiAgICAgICAgdGFncyxcbiAgICB9KVxufVxuXG5mdW5jdGlvbiB0cmFjZU1lc3NhZ2UoXG4gICAgdHJhY2VyOiBUcmFjZXIsXG4gICAgbWVzc2FnZUlkOiBzdHJpbmcsXG4gICAgb3BlcmF0aW9uTmFtZTogc3RyaW5nLFxuICAgIHRhZ3M6IHsgW3N0cmluZ106IGFueSB9LFxuKSB7XG4gICAgY29uc3Qgc3BhbiA9IHN0YXJ0TWVzc2FnZVRyYWNlU3Bhbih0cmFjZXIsIG1lc3NhZ2VJZCwgb3BlcmF0aW9uTmFtZSwgdGFncyk7XG4gICAgaWYgKHNwYW4pIHtcbiAgICAgICAgc3Bhbi5maW5pc2goKTtcbiAgICB9XG59XG5cbmV4cG9ydCBkZWZhdWx0IGNsYXNzIFRPTkNvbnRyYWN0c01vZHVsZSBleHRlbmRzIFRPTk1vZHVsZSBpbXBsZW1lbnRzIFRPTkNvbnRyYWN0cyB7XG4gICAgY29uZmlnOiBUT05Db25maWdNb2R1bGU7XG5cbiAgICBxdWVyaWVzOiBUT05RdWVyaWVzTW9kdWxlO1xuXG4gICAgYXN5bmMgc2V0dXAoKTogUHJvbWlzZTwqPiB7XG4gICAgICAgIHRoaXMuY29uZmlnID0gdGhpcy5jb250ZXh0LmdldE1vZHVsZShUT05Db25maWdNb2R1bGUpO1xuICAgICAgICB0aGlzLnF1ZXJpZXMgPSB0aGlzLmNvbnRleHQuZ2V0TW9kdWxlKFRPTlF1ZXJpZXNNb2R1bGUpO1xuICAgIH1cblxuICAgIGFzeW5jIGxvYWQoXG4gICAgICAgIHBhcmFtczogVE9OQ29udHJhY3RMb2FkUGFyYW1zLFxuICAgICAgICBwYXJlbnRTcGFuPzogKFNwYW4gfCBTcGFuQ29udGV4dCksXG4gICAgKTogUHJvbWlzZTxUT05Db250cmFjdExvYWRSZXN1bHQ+IHtcbiAgICAgICAgY29uc3QgYWNjb3VudHM6IFFBY2NvdW50W10gPSBhd2FpdCB0aGlzLnF1ZXJpZXMuYWNjb3VudHMucXVlcnkoe1xuICAgICAgICAgICAgZmlsdGVyOiB7XG4gICAgICAgICAgICAgICAgaWQ6IHsgZXE6IHBhcmFtcy5hZGRyZXNzIH0sXG4gICAgICAgICAgICB9LFxuICAgICAgICAgICAgcmVzdWx0OiAnYmFsYW5jZScsXG4gICAgICAgICAgICBwYXJlbnRTcGFuLFxuICAgICAgICB9KTtcbiAgICAgICAgaWYgKGFjY291bnRzICYmIGFjY291bnRzLmxlbmd0aCA+IDApIHtcbiAgICAgICAgICAgIHJldHVybiB7XG4gICAgICAgICAgICAgICAgaWQ6IHBhcmFtcy5hZGRyZXNzLFxuICAgICAgICAgICAgICAgIGJhbGFuY2VHcmFtczogYWNjb3VudHNbMF0uYmFsYW5jZSxcbiAgICAgICAgICAgIH07XG4gICAgICAgIH1cbiAgICAgICAgcmV0dXJuIHtcbiAgICAgICAgICAgIGlkOiBudWxsLFxuICAgICAgICAgICAgYmFsYW5jZUdyYW1zOiBudWxsLFxuICAgICAgICB9O1xuICAgIH1cblxuXG4gICAgLy8gRmFjYWRlIGZ1bmN0aW9uc1xuXG4gICAgYXN5bmMgZGVwbG95KFxuICAgICAgICBwYXJhbXM6IFRPTkNvbnRyYWN0RGVwbG95UGFyYW1zLFxuICAgICAgICBwYXJlbnRTcGFuPzogKFNwYW4gfCBTcGFuQ29udGV4dCksXG4gICAgKTogUHJvbWlzZTxUT05Db250cmFjdERlcGxveVJlc3VsdD4ge1xuICAgICAgICByZXR1cm4gdGhpcy5jb250ZXh0LnRyYWNlKCdjb250cmFjdHMuZGVwbG95JywgYXN5bmMgKHNwYW46IFNwYW4pID0+IHtcbiAgICAgICAgICAgIHNwYW4uc2V0VGFnKCdwYXJhbXMnLCByZW1vdmVQcm9wcyhwYXJhbXMsIFsna2V5UGFpci5zZWNyZXQnXSkpO1xuICAgICAgICAgICAgcmV0dXJuIHRoaXMuaW50ZXJuYWxEZXBsb3lKcyhwYXJhbXMsIHNwYW4pO1xuICAgICAgICB9LCBwYXJlbnRTcGFuKTtcbiAgICB9XG5cblxuICAgIGFzeW5jIHJ1bihcbiAgICAgICAgcGFyYW1zOiBUT05Db250cmFjdFJ1blBhcmFtcyxcbiAgICAgICAgcGFyZW50U3Bhbj86IChTcGFuIHwgU3BhbkNvbnRleHQpLFxuICAgICk6IFByb21pc2U8VE9OQ29udHJhY3RSdW5SZXN1bHQ+IHtcbiAgICAgICAgcmV0dXJuIHRoaXMuY29udGV4dC50cmFjZSgnY29udHJhY3RzLnJ1bicsIGFzeW5jIChzcGFuOiBTcGFuKSA9PiB7XG4gICAgICAgICAgICBzcGFuLnNldFRhZygncGFyYW1zJywgcmVtb3ZlUHJvcHMocGFyYW1zLCBbJ2tleVBhaXIuc2VjcmV0J10pKTtcbiAgICAgICAgICAgIHJldHVybiB0aGlzLmludGVybmFsUnVuSnMocGFyYW1zLCBzcGFuKTtcbiAgICAgICAgfSwgcGFyZW50U3Bhbik7XG4gICAgfVxuXG4gICAgYXN5bmMgcnVuTG9jYWwoXG4gICAgICAgIHBhcmFtczogVE9OQ29udHJhY3RSdW5Mb2NhbFBhcmFtcyxcbiAgICAgICAgcGFyZW50U3Bhbj86IChTcGFuIHwgU3BhbkNvbnRleHQpLFxuICAgICk6IFByb21pc2U8VE9OQ29udHJhY3RSdW5Mb2NhbFJlc3VsdD4ge1xuICAgICAgICByZXR1cm4gdGhpcy5jb250ZXh0LnRyYWNlKCdjb250cmFjdHMucnVuTG9jYWwnLCBhc3luYyAoc3BhbjogU3BhbikgPT4ge1xuICAgICAgICAgICAgc3Bhbi5zZXRUYWcoJ3BhcmFtcycsIHJlbW92ZVByb3BzKHBhcmFtcywgWydrZXlQYWlyLnNlY3JldCddKSk7XG4gICAgICAgICAgICByZXR1cm4gdGhpcy5pbnRlcm5hbFJ1bkxvY2FsSnMocGFyYW1zLCBzcGFuKTtcbiAgICAgICAgfSwgcGFyZW50U3Bhbik7XG4gICAgfVxuXG4gICAgYXN5bmMgcnVuTWVzc2FnZUxvY2FsKFxuICAgICAgICBwYXJhbXM6IFRPTkNvbnRyYWN0UnVuTWVzc2FnZUxvY2FsUGFyYW1zLFxuICAgICAgICBwYXJlbnRTcGFuPzogKFNwYW4gfCBTcGFuQ29udGV4dCksXG4gICAgKTogUHJvbWlzZTxUT05Db250cmFjdFJ1bkxvY2FsUmVzdWx0PiB7XG4gICAgICAgIHJldHVybiB0aGlzLmNvbnRleHQudHJhY2UoJ3J1bk1lc3NhZ2VMb2NhbCcsIGFzeW5jIChzcGFuOiBTcGFuKSA9PiB7XG4gICAgICAgICAgICBzcGFuLnNldFRhZygncGFyYW1zJywgcmVtb3ZlUHJvcHMocGFyYW1zLCBbJ2tleVBhaXIuc2VjcmV0J10pKTtcbiAgICAgICAgICAgIHJldHVybiB0aGlzLmludGVybmFsUnVuTWVzc2FnZUxvY2FsSnMocGFyYW1zLCBzcGFuKTtcbiAgICAgICAgfSwgcGFyZW50U3Bhbik7XG4gICAgfVxuXG4gICAgYXN5bmMgcnVuR2V0KFxuICAgICAgICBwYXJhbXM6IFRPTkNvbnRyYWN0UnVuR2V0UGFyYW1zLFxuICAgICk6IFByb21pc2U8VE9OQ29udHJhY3RSdW5HZXRSZXN1bHQ+IHtcbiAgICAgICAgbGV0IGNvcmVQYXJhbXM6IFRPTkNvbnRyYWN0UnVuR2V0UGFyYW1zID0gcGFyYW1zO1xuICAgICAgICBjb25zdCBoYXNDb2RlID0gcGFyYW1zLmJvY0Jhc2U2NCB8fCAocGFyYW1zLmNvZGVCYXNlNjQgJiYgcGFyYW1zLmRhdGFCYXNlNjQpO1xuICAgICAgICBpZiAoIWhhc0NvZGUpIHtcbiAgICAgICAgICAgIGNvbnN0IGFkZHJlc3MgPSBwYXJhbXMuYWRkcmVzcztcbiAgICAgICAgICAgIGlmICghYWRkcmVzcykge1xuICAgICAgICAgICAgICAgIHRocm93IFRPTkNsaWVudEVycm9yLmFkZHJlc3NSZXF1aXJlZEZvclJ1bkxvY2FsKCk7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBjb25zdCBhY2NvdW50OiBhbnkgPSBhd2FpdCB0aGlzLmdldEFjY291bnQoYWRkcmVzcywgZmFsc2UsIHtcbiAgICAgICAgICAgICAgICB0aW1lb3V0OiB0aGlzLmNvbmZpZy53YWl0Rm9yVGltZW91dCgpLFxuICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICBpZiAoIWFjY291bnQuY29kZV9oYXNoKSB7XG4gICAgICAgICAgICAgICAgdGhyb3cgVE9OQ2xpZW50RXJyb3IuYWNjb3VudENvZGVNaXNzaW5nKGFkZHJlc3MsIGFjY291bnQuYmFsYW5jZSk7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBpZiAoYWNjb3VudC5ib2MpIHtcbiAgICAgICAgICAgICAgICBhY2NvdW50LmJvY0Jhc2U2NCA9IGFjY291bnQuYm9jO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgZGVsZXRlIGFjY291bnQuYm9jO1xuICAgICAgICAgICAgY29yZVBhcmFtcyA9IHtcbiAgICAgICAgICAgICAgICAuLi5hY2NvdW50LFxuICAgICAgICAgICAgICAgIC4uLnBhcmFtcyxcbiAgICAgICAgICAgIH07XG4gICAgICAgIH1cbiAgICAgICAgcmV0dXJuIHRoaXMucmVxdWVzdENvcmUoJ3R2bS5nZXQnLCBjb3JlUGFyYW1zKTtcbiAgICB9XG5cbiAgICBhcnJheUZyb21DT05TKGNvbnM6IGFueVtdKTogYW55W10ge1xuICAgICAgICBjb25zdCByZXN1bHQgPSBbXTtcbiAgICAgICAgbGV0IGl0ZW0gPSBjb25zO1xuICAgICAgICB3aGlsZSAoaXRlbSkge1xuICAgICAgICAgICAgaWYgKCFpdGVtLmxlbmd0aCA9PT0gMikge1xuICAgICAgICAgICAgICAgIHRocm93IFRPTkNsaWVudEVycm9yLmludmFsaWRDb25zKCk7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICByZXN1bHQucHVzaChpdGVtWzBdKTtcbiAgICAgICAgICAgIGl0ZW0gPSBpdGVtWzFdO1xuICAgICAgICB9XG4gICAgICAgIHJldHVybiByZXN1bHQ7XG4gICAgfVxuXG5cbiAgICAvLyBNZXNzYWdlIGNyZWF0aW9uXG5cbiAgICBhc3luYyBjcmVhdGVEZXBsb3lNZXNzYWdlKFxuICAgICAgICBwYXJhbXM6IFRPTkNvbnRyYWN0RGVwbG95UGFyYW1zLFxuICAgICAgICByZXRyeUluZGV4PzogbnVtYmVyLFxuICAgICk6IFByb21pc2U8VE9OQ29udHJhY3REZXBsb3lNZXNzYWdlPiB7XG4gICAgICAgIHRoaXMuY29uZmlnLmxvZygnY3JlYXRlRGVwbG95TWVzc2FnZScsIHBhcmFtcyk7XG4gICAgICAgIGNvbnN0IG1lc3NhZ2U6IFRPTkNvbnRyYWN0TWVzc2FnZSA9IGF3YWl0IHRoaXMucmVxdWVzdENvcmUoJ2NvbnRyYWN0cy5kZXBsb3kubWVzc2FnZScsIHtcbiAgICAgICAgICAgIGFiaTogcGFyYW1zLnBhY2thZ2UuYWJpLFxuICAgICAgICAgICAgY29uc3RydWN0b3JIZWFkZXI6IHBhcmFtcy5jb25zdHJ1Y3RvckhlYWRlcixcbiAgICAgICAgICAgIGNvbnN0cnVjdG9yUGFyYW1zOiBwYXJhbXMuY29uc3RydWN0b3JQYXJhbXMsXG4gICAgICAgICAgICBpbml0UGFyYW1zOiBwYXJhbXMuaW5pdFBhcmFtcyxcbiAgICAgICAgICAgIGltYWdlQmFzZTY0OiBwYXJhbXMucGFja2FnZS5pbWFnZUJhc2U2NCxcbiAgICAgICAgICAgIGtleVBhaXI6IHBhcmFtcy5rZXlQYWlyLFxuICAgICAgICAgICAgd29ya2NoYWluSWQ6IHBhcmFtcy53b3JrY2hhaW5JZCxcbiAgICAgICAgfSk7XG4gICAgICAgIHJldHVybiB7XG4gICAgICAgICAgICBtZXNzYWdlLFxuICAgICAgICAgICAgYWRkcmVzczogbWVzc2FnZS5hZGRyZXNzLFxuICAgICAgICB9O1xuICAgIH1cblxuXG4gICAgYXN5bmMgY3JlYXRlUnVuTWVzc2FnZShcbiAgICAgICAgcGFyYW1zOiBUT05Db250cmFjdFJ1blBhcmFtcyxcbiAgICAgICAgcmV0cnlJbmRleD86IG51bWJlcixcbiAgICApOiBQcm9taXNlPFRPTkNvbnRyYWN0UnVuTWVzc2FnZT4ge1xuICAgICAgICB0aGlzLmNvbmZpZy5sb2coJ2NyZWF0ZVJ1bk1lc3NhZ2UnLCBwYXJhbXMpO1xuICAgICAgICBjb25zdCBtZXNzYWdlID0gYXdhaXQgdGhpcy5yZXF1ZXN0Q29yZSgnY29udHJhY3RzLnJ1bi5tZXNzYWdlJywge1xuICAgICAgICAgICAgYWRkcmVzczogcGFyYW1zLmFkZHJlc3MsXG4gICAgICAgICAgICBhYmk6IHBhcmFtcy5hYmksXG4gICAgICAgICAgICBmdW5jdGlvbk5hbWU6IHBhcmFtcy5mdW5jdGlvbk5hbWUsXG4gICAgICAgICAgICBoZWFkZXI6IHBhcmFtcy5oZWFkZXIsXG4gICAgICAgICAgICB0cnlJbmRleDogcmV0cnlJbmRleCxcbiAgICAgICAgICAgIGlucHV0OiBwYXJhbXMuaW5wdXQsXG4gICAgICAgICAgICBrZXlQYWlyOiBwYXJhbXMua2V5UGFpcixcbiAgICAgICAgfSk7XG4gICAgICAgIHJldHVybiB7XG4gICAgICAgICAgICBhZGRyZXNzOiBwYXJhbXMuYWRkcmVzcyxcbiAgICAgICAgICAgIGFiaTogcGFyYW1zLmFiaSxcbiAgICAgICAgICAgIGZ1bmN0aW9uTmFtZTogcGFyYW1zLmZ1bmN0aW9uTmFtZSxcbiAgICAgICAgICAgIG1lc3NhZ2UsXG4gICAgICAgIH07XG4gICAgfVxuXG4gICAgYXN5bmMgY3JlYXRlVW5zaWduZWREZXBsb3lNZXNzYWdlKFxuICAgICAgICBwYXJhbXM6IFRPTkNvbnRyYWN0RGVwbG95UGFyYW1zLFxuICAgICAgICByZXRyeUluZGV4PzogbnVtYmVyLFxuICAgICk6IFByb21pc2U8VE9OQ29udHJhY3RVbnNpZ25lZERlcGxveU1lc3NhZ2U+IHtcbiAgICAgICAgY29uc3QgcmVzdWx0OiB7XG4gICAgICAgICAgICBlbmNvZGVkOiBUT05Db250cmFjdFVuc2lnbmVkTWVzc2FnZSxcbiAgICAgICAgICAgIGFkZHJlc3NIZXg6IHN0cmluZyxcbiAgICAgICAgfSA9IGF3YWl0IHRoaXMucmVxdWVzdENvcmUoJ2NvbnRyYWN0cy5kZXBsb3kuZW5jb2RlX3Vuc2lnbmVkX21lc3NhZ2UnLCB7XG4gICAgICAgICAgICBhYmk6IHBhcmFtcy5wYWNrYWdlLmFiaSxcbiAgICAgICAgICAgIGNvbnN0cnVjdG9ySGVhZGVyOiBwYXJhbXMuY29uc3RydWN0b3JIZWFkZXIsXG4gICAgICAgICAgICB0cnlJbmRleDogcmV0cnlJbmRleCxcbiAgICAgICAgICAgIGNvbnN0cnVjdG9yUGFyYW1zOiBwYXJhbXMuY29uc3RydWN0b3JQYXJhbXMsXG4gICAgICAgICAgICBpbml0UGFyYW1zOiBwYXJhbXMuaW5pdFBhcmFtcyxcbiAgICAgICAgICAgIGltYWdlQmFzZTY0OiBwYXJhbXMucGFja2FnZS5pbWFnZUJhc2U2NCxcbiAgICAgICAgICAgIHB1YmxpY0tleUhleDogcGFyYW1zLmtleVBhaXIucHVibGljLFxuICAgICAgICAgICAgd29ya2NoYWluSWQ6IHBhcmFtcy53b3JrY2hhaW5JZCxcbiAgICAgICAgfSk7XG4gICAgICAgIHJldHVybiB7XG4gICAgICAgICAgICBhZGRyZXNzOiByZXN1bHQuYWRkcmVzc0hleCxcbiAgICAgICAgICAgIHNpZ25QYXJhbXM6IHtcbiAgICAgICAgICAgICAgICAuLi5yZXN1bHQuZW5jb2RlZCxcbiAgICAgICAgICAgICAgICBhYmk6IHBhcmFtcy5wYWNrYWdlLmFiaSxcbiAgICAgICAgICAgIH0sXG4gICAgICAgIH07XG4gICAgfVxuXG5cbiAgICBhc3luYyBjcmVhdGVVbnNpZ25lZFJ1bk1lc3NhZ2UoXG4gICAgICAgIHBhcmFtczogVE9OQ29udHJhY3RSdW5QYXJhbXMsXG4gICAgICAgIHJldHJ5SW5kZXg/OiBudW1iZXIsXG4gICAgKTogUHJvbWlzZTxUT05Db250cmFjdFVuc2lnbmVkUnVuTWVzc2FnZT4ge1xuICAgICAgICBjb25zdCBzaWduUGFyYW1zID0gYXdhaXQgdGhpcy5yZXF1ZXN0Q29yZSgnY29udHJhY3RzLnJ1bi5lbmNvZGVfdW5zaWduZWRfbWVzc2FnZScsIHtcbiAgICAgICAgICAgIGFkZHJlc3M6IHBhcmFtcy5hZGRyZXNzLFxuICAgICAgICAgICAgYWJpOiBwYXJhbXMuYWJpLFxuICAgICAgICAgICAgZnVuY3Rpb25OYW1lOiBwYXJhbXMuZnVuY3Rpb25OYW1lLFxuICAgICAgICAgICAgaGVhZGVyOiBwYXJhbXMuaGVhZGVyLFxuICAgICAgICAgICAgdHJ5SW5kZXg6IHJldHJ5SW5kZXgsXG4gICAgICAgICAgICBpbnB1dDogcGFyYW1zLmlucHV0LFxuICAgICAgICB9KTtcbiAgICAgICAgcmV0dXJuIHtcbiAgICAgICAgICAgIGFkZHJlc3M6IHBhcmFtcy5hZGRyZXNzLFxuICAgICAgICAgICAgZnVuY3Rpb25OYW1lOiBwYXJhbXMuZnVuY3Rpb25OYW1lLFxuICAgICAgICAgICAgc2lnblBhcmFtczoge1xuICAgICAgICAgICAgICAgIC4uLnNpZ25QYXJhbXMsXG4gICAgICAgICAgICAgICAgYWJpOiBwYXJhbXMuYWJpLFxuICAgICAgICAgICAgfSxcbiAgICAgICAgfTtcbiAgICB9XG5cblxuICAgIGFzeW5jIGNyZWF0ZVNpZ25lZE1lc3NhZ2UoXG4gICAgICAgIHBhcmFtczogVE9OQ29udHJhY3RDcmVhdGVTaWduZWRNZXNzYWdlUGFyYW1zLFxuICAgICk6IFByb21pc2U8VE9OQ29udHJhY3RNZXNzYWdlPiB7XG4gICAgICAgIHJldHVybiB0aGlzLnJlcXVlc3RDb3JlKCdjb250cmFjdHMuZW5jb2RlX21lc3NhZ2Vfd2l0aF9zaWduJywgcGFyYW1zKTtcbiAgICB9XG5cblxuICAgIGFzeW5jIGNyZWF0ZVNpZ25lZERlcGxveU1lc3NhZ2UoXG4gICAgICAgIHBhcmFtczogVE9OQ29udHJhY3RDcmVhdGVTaWduZWREZXBsb3lNZXNzYWdlUGFyYW1zLFxuICAgICk6IFByb21pc2U8VE9OQ29udHJhY3REZXBsb3lNZXNzYWdlPiB7XG4gICAgICAgIGNvbnN0IG1lc3NhZ2UgPSBhd2FpdCB0aGlzLmNyZWF0ZVNpZ25lZE1lc3NhZ2Uoe1xuICAgICAgICAgICAgYWJpOiBwYXJhbXMudW5zaWduZWRNZXNzYWdlLnNpZ25QYXJhbXMuYWJpLFxuICAgICAgICAgICAgdW5zaWduZWRCeXRlc0Jhc2U2NDogcGFyYW1zLnVuc2lnbmVkTWVzc2FnZS5zaWduUGFyYW1zLnVuc2lnbmVkQnl0ZXNCYXNlNjQsXG4gICAgICAgICAgICBzaWduQnl0ZXNCYXNlNjQ6IHBhcmFtcy5zaWduQnl0ZXNCYXNlNjQsXG4gICAgICAgICAgICBwdWJsaWNLZXlIZXg6IHBhcmFtcy5wdWJsaWNLZXlIZXgsXG4gICAgICAgIH0pO1xuICAgICAgICBtZXNzYWdlLmV4cGlyZSA9IHBhcmFtcy51bnNpZ25lZE1lc3NhZ2Uuc2lnblBhcmFtcy5leHBpcmU7XG4gICAgICAgIHJldHVybiB7XG4gICAgICAgICAgICBhZGRyZXNzOiBwYXJhbXMudW5zaWduZWRNZXNzYWdlLmFkZHJlc3MsXG4gICAgICAgICAgICBtZXNzYWdlLFxuICAgICAgICB9O1xuICAgIH1cblxuXG4gICAgYXN5bmMgY3JlYXRlU2lnbmVkUnVuTWVzc2FnZShcbiAgICAgICAgcGFyYW1zOiBUT05Db250cmFjdENyZWF0ZVNpZ25lZFJ1bk1lc3NhZ2VQYXJhbXMsXG4gICAgKTogUHJvbWlzZTxUT05Db250cmFjdFJ1bk1lc3NhZ2U+IHtcbiAgICAgICAgY29uc3QgbWVzc2FnZSA9IGF3YWl0IHRoaXMuY3JlYXRlU2lnbmVkTWVzc2FnZSh7XG4gICAgICAgICAgICBhYmk6IHBhcmFtcy51bnNpZ25lZE1lc3NhZ2Uuc2lnblBhcmFtcy5hYmksXG4gICAgICAgICAgICB1bnNpZ25lZEJ5dGVzQmFzZTY0OiBwYXJhbXMudW5zaWduZWRNZXNzYWdlLnNpZ25QYXJhbXMudW5zaWduZWRCeXRlc0Jhc2U2NCxcbiAgICAgICAgICAgIHNpZ25CeXRlc0Jhc2U2NDogcGFyYW1zLnNpZ25CeXRlc0Jhc2U2NCxcbiAgICAgICAgICAgIHB1YmxpY0tleUhleDogcGFyYW1zLnB1YmxpY0tleUhleCxcbiAgICAgICAgfSk7XG4gICAgICAgIG1lc3NhZ2UuZXhwaXJlID0gcGFyYW1zLnVuc2lnbmVkTWVzc2FnZS5zaWduUGFyYW1zLmV4cGlyZTtcbiAgICAgICAgcmV0dXJuIHtcbiAgICAgICAgICAgIGFkZHJlc3M6IHBhcmFtcy51bnNpZ25lZE1lc3NhZ2UuYWRkcmVzcyxcbiAgICAgICAgICAgIGFiaTogcGFyYW1zLnVuc2lnbmVkTWVzc2FnZS5zaWduUGFyYW1zLmFiaSxcbiAgICAgICAgICAgIGZ1bmN0aW9uTmFtZTogcGFyYW1zLnVuc2lnbmVkTWVzc2FnZS5mdW5jdGlvbk5hbWUsXG4gICAgICAgICAgICBtZXNzYWdlLFxuICAgICAgICB9O1xuICAgIH1cblxuICAgIGFzeW5jIGdldENvZGVGcm9tSW1hZ2UoXG4gICAgICAgIHBhcmFtczogVE9OQ29udHJhY3RHZXRDb2RlRnJvbUltYWdlUGFyYW1zLFxuICAgICk6IFByb21pc2U8VE9OQ29udHJhY3RHZXRDb2RlRnJvbUltYWdlUmVzdWx0PiB7XG4gICAgICAgIHJldHVybiB0aGlzLnJlcXVlc3RDb3JlKCdjb250cmFjdHMuaW1hZ2UuY29kZScsIHBhcmFtcyk7XG4gICAgfVxuXG4gICAgYXN5bmMgZ2V0RGVwbG95RGF0YShcbiAgICAgICAgcGFyYW1zOiBUT05Db250cmFjdEdldERlcGxveURhdGFQYXJhbXMsXG4gICAgKTogUHJvbWlzZTxUT05Db250cmFjdEdldERlcGxveURhdGFSZXN1bHQ+IHtcbiAgICAgICAgcmV0dXJuIHRoaXMucmVxdWVzdENvcmUoJ2NvbnRyYWN0cy5kZXBsb3kuZGF0YScsIHBhcmFtcyk7XG4gICAgfVxuXG4gICAgYXN5bmMgY3JlYXRlUnVuQm9keShcbiAgICAgICAgcGFyYW1zOiBUT05Db250cmFjdENyZWF0ZVJ1bkJvZHlQYXJhbXMsXG4gICAgKTogUHJvbWlzZTxUT05Db250cmFjdENyZWF0ZVJ1bkJvZHlSZXN1bHQ+IHtcbiAgICAgICAgcmV0dXJuIHRoaXMucmVxdWVzdENvcmUoJ2NvbnRyYWN0cy5ydW4uYm9keScsIHBhcmFtcyk7XG4gICAgfVxuXG4gICAgYXN5bmMgZ2V0RnVuY3Rpb25JZChcbiAgICAgICAgcGFyYW1zOiBUT05Db250cmFjdEdldEZ1bmN0aW9uSWRQYXJhbXMsXG4gICAgKTogUHJvbWlzZTxUT05Db250cmFjdEdldEZ1bmN0aW9uSWRSZXN1bHQ+IHtcbiAgICAgICAgcmV0dXJuIHRoaXMucmVxdWVzdENvcmUoJ2NvbnRyYWN0cy5mdW5jdGlvbi5pZCcsIHBhcmFtcyk7XG4gICAgfVxuXG4gICAgYXN5bmMgZ2V0Qm9jSGFzaChcbiAgICAgICAgcGFyYW1zOiBUT05Db250cmFjdEJvYyxcbiAgICApOiBQcm9taXNlPFRPTkNvbnRyYWN0R2V0Qm9jSGFzaFJlc3VsdD4ge1xuICAgICAgICByZXR1cm4gdGhpcy5yZXF1ZXN0Q29yZSgnY29udHJhY3RzLmJvYy5oYXNoJywgcGFyYW1zKTtcbiAgICB9XG5cbiAgICBhc3luYyBwYXJzZU1lc3NhZ2UoXG4gICAgICAgIHBhcmFtczogVE9OQ29udHJhY3RCb2MsXG4gICAgKTogUHJvbWlzZTxRTWVzc2FnZT4ge1xuICAgICAgICByZXR1cm4gdGhpcy5yZXF1ZXN0Q29yZSgnY29udHJhY3RzLnBhcnNlLm1lc3NhZ2UnLCBwYXJhbXMpO1xuICAgIH1cblxuICAgIC8vIE1lc3NhZ2UgcGFyc2luZ1xuXG4gICAgYXN5bmMgZGVjb2RlUnVuT3V0cHV0KFxuICAgICAgICBwYXJhbXM6IFRPTkNvbnRyYWN0RGVjb2RlUnVuT3V0cHV0UGFyYW1zLFxuICAgICk6IFByb21pc2U8VE9OQ29udHJhY3RSdW5SZXN1bHQ+IHtcbiAgICAgICAgcmV0dXJuIHRoaXMucmVxdWVzdENvcmUoJ2NvbnRyYWN0cy5ydW4ub3V0cHV0JywgcGFyYW1zKTtcbiAgICB9XG5cblxuICAgIGFzeW5jIGRlY29kZUlucHV0TWVzc2FnZUJvZHkoXG4gICAgICAgIHBhcmFtczogVE9OQ29udHJhY3REZWNvZGVNZXNzYWdlQm9keVBhcmFtcyxcbiAgICApOiBQcm9taXNlPFRPTkNvbnRyYWN0RGVjb2RlTWVzc2FnZUJvZHlSZXN1bHQ+IHtcbiAgICAgICAgcmV0dXJuIHRoaXMucmVxdWVzdENvcmUoJ2NvbnRyYWN0cy5ydW4udW5rbm93bi5pbnB1dCcsIHBhcmFtcyk7XG4gICAgfVxuXG5cbiAgICBhc3luYyBkZWNvZGVPdXRwdXRNZXNzYWdlQm9keShcbiAgICAgICAgcGFyYW1zOiBUT05Db250cmFjdERlY29kZU1lc3NhZ2VCb2R5UGFyYW1zLFxuICAgICk6IFByb21pc2U8VE9OQ29udHJhY3REZWNvZGVNZXNzYWdlQm9keVJlc3VsdD4ge1xuICAgICAgICByZXR1cm4gdGhpcy5yZXF1ZXN0Q29yZSgnY29udHJhY3RzLnJ1bi51bmtub3duLm91dHB1dCcsIHBhcmFtcyk7XG4gICAgfVxuXG4gICAgLy8gTWVzc2FnZSBwcm9jZXNzaW5nXG5cbiAgICBhc3luYyBlbnN1cmVNZXNzYWdlSWQobWVzc2FnZTogVE9OQ29udHJhY3RNZXNzYWdlKTogUHJvbWlzZTxzdHJpbmc+IHtcbiAgICAgICAgcmV0dXJuIG1lc3NhZ2UubWVzc2FnZUlkIHx8IGF3YWl0IChhc3luYyAoKSA9PiB7XG4gICAgICAgICAgICBjb25zdCBpZCA9IChhd2FpdCB0aGlzLmdldEJvY0hhc2goe1xuICAgICAgICAgICAgICAgIGJvY0Jhc2U2NDogbWVzc2FnZS5tZXNzYWdlQm9keUJhc2U2NCxcbiAgICAgICAgICAgIH0pKS5oYXNoO1xuICAgICAgICAgICAgbWVzc2FnZS5tZXNzYWdlSWQgPSBpZDtcbiAgICAgICAgICAgIHJldHVybiBpZDtcbiAgICAgICAgfSkoKTtcbiAgICB9XG5cbiAgICBhc3luYyBzZW5kTWVzc2FnZShcbiAgICAgICAgcGFyYW1zOiBUT05Db250cmFjdE1lc3NhZ2UsXG4gICAgICAgIHBhcmVudFNwYW4/OiAoU3BhbiB8IFNwYW5Db250ZXh0KSxcbiAgICApOiBQcm9taXNlPFRPTk1lc3NhZ2VQcm9jZXNzaW5nU3RhdGU+IHtcbiAgICAgICAgY29uc3QgZXhwaXJlID0gcGFyYW1zLmV4cGlyZTtcbiAgICAgICAgaWYgKGV4cGlyZSAmJiAoRGF0ZS5ub3coKSA+IGV4cGlyZSAqIDEwMDApKSB7XG4gICAgICAgICAgICB0aHJvdyBUT05DbGllbnRFcnJvci5zZW5kTm9kZVJlcXVlc3RGYWlsZWQoJ01lc3NhZ2UgYWxyZWFkeSBleHBpcmVkJyk7XG4gICAgICAgIH1cbiAgICAgICAgY29uc3Qgc2VydmVyVGltZURlbHRhID0gTWF0aC5hYnMoYXdhaXQgdGhpcy5xdWVyaWVzLnNlcnZlclRpbWVEZWx0YShwYXJlbnRTcGFuKSk7XG4gICAgICAgIGlmIChzZXJ2ZXJUaW1lRGVsdGEgPiB0aGlzLmNvbmZpZy5vdXRPZlN5bmNUaHJlc2hvbGQoKSkge1xuICAgICAgICAgICAgdGhpcy5xdWVyaWVzLmRyb3BTZXJ2ZXJUaW1lRGVsdGEoKTtcbiAgICAgICAgICAgIHRocm93IFRPTkNsaWVudEVycm9yLmNsb2NrT3V0T2ZTeW5jKCk7XG4gICAgICAgIH1cbiAgICAgICAgY29uc3QgbGFzdEJsb2NrSWQgPSBhd2FpdCB0aGlzLmZpbmRMYXN0U2hhcmRCbG9jayhwYXJhbXMuYWRkcmVzcyk7XG4gICAgICAgIGNvbnN0IGlkID0gYXdhaXQgdGhpcy5lbnN1cmVNZXNzYWdlSWQocGFyYW1zKTtcbiAgICAgICAgY29uc3QgaWRCYXNlNjQgPSBCdWZmZXIuZnJvbShpZCwgJ2hleCcpLnRvU3RyaW5nKCdiYXNlNjQnKTtcbiAgICAgICAgY29uc3QgbWVzc2FnZVNwYW4gPSB0aGlzLmNvbnRleHQuc3RhcnRSb290U3BhbihcbiAgICAgICAgICAgIGlkLnN1YnN0cigwLCAxNiksXG4gICAgICAgICAgICBpZC5zdWJzdHIoMTYsIDE2KSxcbiAgICAgICAgICAgICdtZXNzYWdlUHJvY2Vzc2luZycsXG4gICAgICAgICk7XG4gICAgICAgIG1lc3NhZ2VTcGFuLmFkZFRhZ3Moe1xuICAgICAgICAgICAgbWVzc2FnZUlkOiBpZCxcbiAgICAgICAgICAgIG1lc3NhZ2VTaXplOiBNYXRoLmNlaWwocGFyYW1zLm1lc3NhZ2VCb2R5QmFzZTY0Lmxlbmd0aCAqIDMgLyA0KSxcbiAgICAgICAgICAgIGFkZHJlc3M6IHBhcmFtcy5hZGRyZXNzLFxuICAgICAgICAgICAgZXhwaXJlOiBwYXJhbXMuZXhwaXJlLFxuICAgICAgICB9KVxuICAgICAgICBhd2FpdCB0aGlzLnF1ZXJpZXMucG9zdFJlcXVlc3RzKFtcbiAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICBpZDogaWRCYXNlNjQsXG4gICAgICAgICAgICAgICAgYm9keTogcGFyYW1zLm1lc3NhZ2VCb2R5QmFzZTY0LFxuICAgICAgICAgICAgfSxcbiAgICAgICAgXSwgcGFyZW50U3Bhbik7XG4gICAgICAgIG1lc3NhZ2VTcGFuLmZpbmlzaCgpO1xuICAgICAgICB0aGlzLmNvbmZpZy5sb2coJ3NlbmRNZXNzYWdlLiBSZXF1ZXN0IHBvc3RlZCcsIGlkKTtcbiAgICAgICAgcmV0dXJuIHtcbiAgICAgICAgICAgIGxhc3RCbG9ja0lkLFxuICAgICAgICAgICAgc2VuZGluZ1RpbWU6IE1hdGgucm91bmQoRGF0ZS5ub3coKSAvIDEwMDApLFxuICAgICAgICB9O1xuICAgIH1cblxuICAgIGFzeW5jIHByb2Nlc3NNZXNzYWdlKFxuICAgICAgICBtZXNzYWdlOiBUT05Db250cmFjdE1lc3NhZ2UsXG4gICAgICAgIHJlc3VsdEZpZWxkczogc3RyaW5nLFxuICAgICAgICBwYXJlbnRTcGFuPzogKFNwYW4gfCBTcGFuQ29udGV4dCksXG4gICAgICAgIHJldHJ5SW5kZXg/OiBudW1iZXIsXG4gICAgICAgIGFkZHJlc3M/OiBzdHJpbmcsXG4gICAgICAgIGFiaT86IFRPTkNvbnRyYWN0QUJJLFxuICAgICAgICBmdW5jdGlvbk5hbWU/OiBzdHJpbmcsXG4gICAgKTogUHJvbWlzZTxRVHJhbnNhY3Rpb24+IHtcbiAgICAgICAgY29uc3QgcHJvY2Vzc2luZyA9IGF3YWl0IHRoaXMuc2VuZE1lc3NhZ2UobWVzc2FnZSwgcGFyZW50U3Bhbik7XG4gICAgICAgIGNvbnN0IHsgdHJhbnNhY3Rpb24gfSA9IGF3YWl0IHRoaXMud2FpdEZvclRyYW5zYWN0aW9uKHtcbiAgICAgICAgICAgIG1lc3NhZ2UsXG4gICAgICAgICAgICBtZXNzYWdlUHJvY2Vzc2luZ1N0YXRlOiBwcm9jZXNzaW5nLFxuICAgICAgICAgICAgcGFyZW50U3BhbixcbiAgICAgICAgICAgIGFiaSxcbiAgICAgICAgICAgIGZ1bmN0aW9uTmFtZSxcbiAgICAgICAgfSk7XG4gICAgICAgIHJldHVybiB0cmFuc2FjdGlvbjtcbiAgICB9XG5cblxuICAgIGFzeW5jIGZpbmRMYXN0QmxvY2soY2hhaW46IG51bWJlciwgcmVzdWx0OiBzdHJpbmcsIGFkZGl0aW9uYWxGaWx0ZXI/OiBhbnkpOiBQcm9taXNlPD9hbnk+IHtcbiAgICAgICAgY29uc3QgYmxvY2tzID0gYXdhaXQgdGhpcy5xdWVyaWVzLmJsb2Nrcy5xdWVyeSh7XG4gICAgICAgICAgICBmaWx0ZXI6IHsgd29ya2NoYWluX2lkOiB7IGVxOiBjaGFpbiB9LCAuLi4oYWRkaXRpb25hbEZpbHRlciB8fCB7fSkgfSxcbiAgICAgICAgICAgIHJlc3VsdCxcbiAgICAgICAgICAgIG9yZGVyQnk6IFtcbiAgICAgICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgICAgIHBhdGg6ICdzZXFfbm8nLFxuICAgICAgICAgICAgICAgICAgICBkaXJlY3Rpb246ICdERVNDJyxcbiAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgXSxcbiAgICAgICAgICAgIGxpbWl0OiAxLFxuICAgICAgICB9KTtcbiAgICAgICAgcmV0dXJuIGJsb2Nrcy5sZW5ndGggPiAwID8gYmxvY2tzWzBdIDogbnVsbDtcbiAgICB9XG5cbiAgICBhc3luYyBmaW5kTWF0Y2hpbmdTaGFyZChzaGFyZHM6IFFTaGFyZEhhc2hbXSwgYWRkcmVzczogc3RyaW5nKTogUHJvbWlzZTw/UVNoYXJkSGFzaD4ge1xuICAgICAgICByZXR1cm4gdGhpcy5yZXF1ZXN0Q29yZSgnY29udHJhY3RzLmZpbmQuc2hhcmQnLCB7XG4gICAgICAgICAgICBzaGFyZHMsXG4gICAgICAgICAgICBhZGRyZXNzLFxuICAgICAgICB9KTtcbiAgICB9XG5cbiAgICBhc3luYyBmaW5kTGFzdFNoYXJkQmxvY2soYWRkcmVzczogc3RyaW5nKTogUHJvbWlzZTxzdHJpbmc+IHtcbiAgICAgICAgY29uc3QgYWRkcmVzc1BhcnRzID0gYWRkcmVzcy5zcGxpdCgnOicpO1xuICAgICAgICBjb25zdCB3b3JrY2hhaW4gPSBhZGRyZXNzUGFydHMubGVuZ3RoID4gMSA/IE51bWJlci5wYXJzZUludChhZGRyZXNzUGFydHNbMF0sIDEwKSA6IDA7XG5cblxuICAgICAgICAvLyBpZiBhY2NvdW50IHJlc2lkZXMgaW4gbWFzdGVyIGNoYWluIHRoZW4gc3RhcnRpbmcgcG9pbnQgaXMgbGFzdCBtYXN0ZXIgY2hhaW4gYmxvY2tcbiAgICAgICAgLy8gZ2VuZXJhdGVkIGJlZm9yZSBtZXNzYWdlIHdhcyBzZW50XG4gICAgICAgIGNvbnN0IG1hc3RlcmNoYWluTGFzdEJsb2NrID0gYXdhaXQgdGhpcy5maW5kTGFzdEJsb2NrKFxuICAgICAgICAgICAgTUFTVEVSQ0hBSU5fSUQsXG4gICAgICAgICAgICAnaWQgbWFzdGVyIHsgc2hhcmRfaGFzaGVzIHsgd29ya2NoYWluX2lkIHNoYXJkIGRlc2NyIHsgcm9vdF9oYXNoIH0gfSB9JyxcbiAgICAgICAgKTtcblxuICAgICAgICAvLyBpZiBhY2NvdW50IHJlc2lkZXMgaW4gbWFzdGVyY2hhaW4gdGhlbiBzdGFydGluZyBwb2ludCBpcyBsYXN0IG1hc3RlcmNoYWluIGJsb2NrXG4gICAgICAgIGlmICh3b3JrY2hhaW4gPT09IE1BU1RFUkNIQUlOX0lEKSB7XG4gICAgICAgICAgICBpZiAoIW1hc3RlcmNoYWluTGFzdEJsb2NrKSB7XG4gICAgICAgICAgICAgICAgdGhyb3cgVE9OQ2xpZW50RXJyb3Iubm9CbG9ja3MoTUFTVEVSQ0hBSU5fSUQpO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgcmV0dXJuIG1hc3RlcmNoYWluTGFzdEJsb2NrLmlkO1xuICAgICAgICB9XG5cbiAgICAgICAgLy8gaWYgYWNjb3VudCBpcyBmcm9tIG90aGVyIGNoYWlucyB0aGVuIHN0YXJ0aW5nIHBvaW50IGlzIGxhc3QgYWNjb3VudCdzIHNoYXJkIGJsb2NrXG4gICAgICAgIC8vIFRvIG9idGFpbiBpdCB3ZSB0YWtlIG1hc3RlcmNoYWluIGJsb2NrIHRvIGdldCBzaGFyZHMgY29uZmlndXJhdGlvbiBhbmQgc2VsZWN0XG4gICAgICAgIC8vIG1hdGNoaW5nIHNoYXJkXG4gICAgICAgIGlmICghbWFzdGVyY2hhaW5MYXN0QmxvY2spIHtcbiAgICAgICAgICAgIC8vIE5vZGUgU0UgY2FzZSAtIG5vIG1hc3RlcmNoYWluLCBubyBzaGFyZGluZy4gQ2hlY2sgdGhhdCBvbmx5IG9uZSBzaGFyZFxuICAgICAgICAgICAgbGV0IHdvcmtjaGFpbkxhc3RCbG9jayA9IGF3YWl0IHRoaXMuZmluZExhc3RCbG9jayh3b3JrY2hhaW4sICdhZnRlcl9tZXJnZSBzaGFyZCcpO1xuICAgICAgICAgICAgaWYgKCF3b3JrY2hhaW5MYXN0QmxvY2spIHtcbiAgICAgICAgICAgICAgICB0aHJvdyBUT05DbGllbnRFcnJvci5ub0Jsb2Nrcyh3b3JrY2hhaW4pO1xuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICAvLyBpZiB3b3JrY2hhaW4gaXMgc2hhcmRlZCB0aGVuIGl0IGlzIG5vdCBOb2RlIFNFIGFuZCBtYXN0ZXJjaGFpbiBibG9ja3MgbWlzc2luZ1xuICAgICAgICAgICAgLy8gaXMgZXJyb3JcbiAgICAgICAgICAgIGlmICh3b3JrY2hhaW5MYXN0QmxvY2suYWZ0ZXJfbWVyZ2UgfHwgd29ya2NoYWluTGFzdEJsb2NrLnNoYXJkICE9PSAnODAwMDAwMDAwMDAwMDAwMCcpIHtcbiAgICAgICAgICAgICAgICB0aHJvdyBUT05DbGllbnRFcnJvci5ub0Jsb2NrcyhNQVNURVJDSEFJTl9JRCk7XG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICAgIC8vIFRha2UgbGFzdCBibG9jayBieSBzZXFfbm9cbiAgICAgICAgICAgIHdvcmtjaGFpbkxhc3RCbG9jayA9IGF3YWl0IHRoaXMuZmluZExhc3RCbG9jayh3b3JrY2hhaW4sICdpZCcsIHtcbiAgICAgICAgICAgICAgICBzaGFyZDogeyBlcTogJzgwMDAwMDAwMDAwMDAwMDAnIH0sXG4gICAgICAgICAgICB9KTtcbiAgICAgICAgICAgIGlmICghd29ya2NoYWluTGFzdEJsb2NrKSB7XG4gICAgICAgICAgICAgICAgdGhyb3cgVE9OQ2xpZW50RXJyb3IuaW52YWxpZEJsb2NrY2hhaW4oJ05vIHN0YXJ0aW5nIE5vZGUgU0UgYmxvY2sgZm91bmQnKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIHJldHVybiB3b3JrY2hhaW5MYXN0QmxvY2suaWQ7XG4gICAgICAgIH1cblxuICAgICAgICBjb25zdCBzaGFyZHM6ID9RU2hhcmRIYXNoW10gPSBtYXN0ZXJjaGFpbkxhc3RCbG9jaz8ubWFzdGVyPy5zaGFyZF9oYXNoZXM7XG4gICAgICAgIGlmICghc2hhcmRzIHx8IHNoYXJkcy5sZW5ndGggPT09IDApIHtcbiAgICAgICAgICAgIHRocm93IFRPTkNsaWVudEVycm9yLmludmFsaWRCbG9ja2NoYWluKCdObyBgc2hhcmRfaGFzaGVzYCBmaWVsZCBpbiBtYXN0ZXJjaGFpbiBibG9jaycpO1xuICAgICAgICB9XG4gICAgICAgIGNvbnN0IHNoYXJkQmxvY2sgPSBhd2FpdCB0aGlzLmZpbmRNYXRjaGluZ1NoYXJkKHNoYXJkcywgYWRkcmVzcyk7XG4gICAgICAgIGNvbnN0IHJvb3RfaGFzaCA9IHNoYXJkQmxvY2s/LmRlc2NyPy5yb290X2hhc2g7XG4gICAgICAgIGlmICghcm9vdF9oYXNoKSB7XG4gICAgICAgICAgICB0aHJvdyBUT05DbGllbnRFcnJvci5pbnZhbGlkQmxvY2tjaGFpbignTm8gYHJvb3RfaGFzaGAgZmllbGQgaW4gc2hhcmQgZGVzY3InKTtcbiAgICAgICAgfVxuICAgICAgICByZXR1cm4gcm9vdF9oYXNoO1xuICAgIH1cblxuICAgIGFzeW5jIGNoZWNrU2hhcmRNYXRjaChibG9jazogUUJsb2NrLCBhZGRyZXNzOiBzdHJpbmcpOiBQcm9taXNlPGJvb2xlYW4+IHtcbiAgICAgICAgcmV0dXJuICEhKGF3YWl0IHRoaXMuZmluZE1hdGNoaW5nU2hhcmQoW1xuICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgIHdvcmtjaGFpbl9pZDogYmxvY2sud29ya2NoYWluX2lkIHx8IDAsXG4gICAgICAgICAgICAgICAgc2hhcmQ6IGJsb2NrLnNoYXJkIHx8ICcnLFxuICAgICAgICAgICAgfSxcbiAgICAgICAgXSwgYWRkcmVzcykpO1xuICAgIH1cblxuICAgIGFzeW5jIHdhaXROZXh0QmxvY2soY3VycmVudDogc3RyaW5nLCBhZGRyZXNzOiBzdHJpbmcsIHRpbWVvdXQ/OiBudW1iZXIpOiBQcm9taXNlPFFCbG9jaz4ge1xuICAgICAgICBjb25zdCBibG9jayA9IGF3YWl0IHRoaXMucXVlcmllcy5ibG9ja3Mud2FpdEZvcih7XG4gICAgICAgICAgICBmaWx0ZXI6IHtcbiAgICAgICAgICAgICAgICBwcmV2X3JlZjoge1xuICAgICAgICAgICAgICAgICAgICByb290X2hhc2g6IHsgZXE6IGN1cnJlbnQgfSxcbiAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgfSxcbiAgICAgICAgICAgIHJlc3VsdDogQkxPQ0tfRklFTERTLFxuICAgICAgICAgICAgdGltZW91dCxcbiAgICAgICAgfSk7XG5cbiAgICAgICAgaWYgKGJsb2NrPy5hZnRlcl9zcGxpdCAmJiAhKGF3YWl0IHRoaXMuY2hlY2tTaGFyZE1hdGNoKGJsb2NrLCBhZGRyZXNzKSkpIHtcbiAgICAgICAgICAgIHJldHVybiB0aGlzLnF1ZXJpZXMuYmxvY2tzLndhaXRGb3Ioe1xuICAgICAgICAgICAgICAgIGZpbHRlcjoge1xuICAgICAgICAgICAgICAgICAgICBpZDogeyBuZTogYmxvY2suaWQgfSxcbiAgICAgICAgICAgICAgICAgICAgcHJldl9yZWY6IHtcbiAgICAgICAgICAgICAgICAgICAgICAgIHJvb3RfaGFzaDogeyBlcTogY3VycmVudCB9LFxuICAgICAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgcmVzdWx0OiBCTE9DS19GSUVMRFMsXG4gICAgICAgICAgICAgICAgdGltZW91dCxcbiAgICAgICAgICAgIH0pO1xuICAgICAgICB9XG4gICAgICAgIHJldHVybiBibG9jaztcbiAgICB9XG5cbiAgICBhc3luYyB3YWl0Rm9yVHJhbnNhY3Rpb24ocGFyYW1zOiBUT05XYWl0Rm9yVHJhbnNhY3Rpb25QYXJhbXMpOiBQcm9taXNlPFRPTkNvbnRyYWN0UnVuUmVzdWx0PiB7XG4gICAgICAgIC8vIGNvbnN0IGxlZ2FjeVN0YXJ0ID0gRGF0ZS5ub3coKTtcbiAgICAgICAgLy8gY29uc3QgcmVzdWx0ID0gYXdhaXQgdGhpcy5sZWdhY3lXYWl0Rm9yVHJhbnNhY3Rpb24ocGFyYW1zKTtcbiAgICAgICAgLy8gY29uc29sZS5sb2coJz4+PicsIGBMZWdhY3kgd2FpdCBmb3IgYTogJHtEYXRlLm5vdygpIC0gbGVnYWN5U3RhcnR9IG1zYCk7XG4gICAgICAgIC8vIHJldHVybiByZXN1bHQ7XG5cbiAgICAgICAgY29uc3QgdG90YWxTdGFydCA9IERhdGUubm93KCk7XG4gICAgICAgIGNvbnN0IGV4cGlyZSA9IHBhcmFtcy5tZXNzYWdlLmV4cGlyZSB8fCAwO1xuICAgICAgICBjb25zdCBtZXNzYWdlSWQgPSBhd2FpdCB0aGlzLmVuc3VyZU1lc3NhZ2VJZChwYXJhbXMubWVzc2FnZSk7XG4gICAgICAgIGNvbnN0IGFkZHJlc3MgPSBwYXJhbXMubWVzc2FnZS5hZGRyZXNzO1xuICAgICAgICBjb25zdCBwcm9jZXNzaW5nID0geyAuLi5wYXJhbXMubWVzc2FnZVByb2Nlc3NpbmdTdGF0ZSB9O1xuICAgICAgICBsZXQgdHJhbnNhY3Rpb24gPSBudWxsO1xuICAgICAgICB0cnkge1xuICAgICAgICAgICAgY29uc3QgdGltZVJlcG9ydCA9IFtdO1xuXG4gICAgICAgICAgICBjb25zdCBzdG9wVGltZSA9IGV4cGlyZVxuICAgICAgICAgICAgICAgIHx8IE1hdGgucm91bmQoKERhdGUubm93KCkgKyB0aGlzLmNvbmZpZy5tZXNzYWdlUHJvY2Vzc2luZ1RpbWVvdXQoKSkgLyAxMDAwKTtcblxuICAgICAgICAgICAgY29uc3QgaW5maW5pdGVXYWl0ID0gcGFyYW1zLmluZmluaXRlV2FpdCAhPT0gZmFsc2U7XG4gICAgICAgICAgICBjb25zdCBhZGRUaW1lb3V0ID0gdGhpcy5jb25maWcubWVzc2FnZVByb2Nlc3NpbmdUaW1lb3V0KCk7XG4gICAgICAgICAgICB3aGlsZSAoIXRyYW5zYWN0aW9uKSB7XG4gICAgICAgICAgICAgICAgY29uc3Qgbm93ID0gRGF0ZS5ub3coKTtcbiAgICAgICAgICAgICAgICBjb25zdCB0aW1lb3V0ID0gTWF0aC5tYXgoc3RvcFRpbWUsIG5vdykgLSBub3cgKyBhZGRUaW1lb3V0O1xuICAgICAgICAgICAgICAgIGxldCBibG9jazogP1FCbG9jayA9IG51bGw7XG4gICAgICAgICAgICAgICAgdHJ5IHtcbiAgICAgICAgICAgICAgICAgICAgY29uc3Qgc3RhcnQgPSBEYXRlLm5vdygpO1xuICAgICAgICAgICAgICAgICAgICBibG9jayA9IGF3YWl0IHRoaXMud2FpdE5leHRCbG9jayhwcm9jZXNzaW5nLmxhc3RCbG9ja0lkLCBhZGRyZXNzLCB0aW1lb3V0KTtcbiAgICAgICAgICAgICAgICAgICAgY29uc3QgZW5kID0gRGF0ZS5ub3coKTtcbiAgICAgICAgICAgICAgICAgICAgdGltZVJlcG9ydC5wdXNoKGBCbG9jayBbJHtibG9jay5pZCB8fCAnJ31dIGhhcyBiZWVuIHJlY2VpdmVkOiAke2VuZCAtIHN0YXJ0fSBtcywgY2xpZW50IHRpbWU6ICR7TWF0aC5yb3VuZChlbmQgLyAxMDAwKX0sIGdlbl91dGltZTogJHtibG9jay5nZW5fdXRpbWUgfHwgMH1gKTtcbiAgICAgICAgICAgICAgICB9IGNhdGNoIChlcnJvcikge1xuICAgICAgICAgICAgICAgICAgICB0aGlzLmNvbmZpZy5sb2coJ0Jsb2NrIHdhaXRpbmcgZmFpbGVkOiAnLCBlcnJvcik7XG4gICAgICAgICAgICAgICAgICAgIGlmICghaW5maW5pdGVXYWl0KSB7XG4gICAgICAgICAgICAgICAgICAgICAgICBsZXQgcmVzb2x2ZWRFcnJvciA9IGVycm9yO1xuICAgICAgICAgICAgICAgICAgICAgICAgaWYgKGVycm9yLmNvZGUgPT09IFRPTkVycm9yQ29kZS5XQUlUX0ZPUl9USU1FT1VUKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgcmVzb2x2ZWRFcnJvciA9IFRPTkNsaWVudEVycm9yLm5ldHdvcmtTaWxlbnQoe1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBtZXNzYWdlSWQsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGJsb2NrSWQ6IHByb2Nlc3NpbmcubGFzdEJsb2NrSWQsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRpbWVvdXQsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIG1lc3NhZ2VQcm9jZXNzaW5nU3RhdGU6IHByb2Nlc3NpbmcsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGV4cGlyZSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgc2VuZGluZ1RpbWU6IHByb2Nlc3Npbmcuc2VuZGluZ1RpbWUsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICAgICB0aHJvdyByZXNvbHZlZEVycm9yO1xuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgIHRoaXMuY29uZmlnLmxvZygnUmV0cnkgd2FpdGluZy4nKTtcbiAgICAgICAgICAgICAgICB9XG5cbiAgICAgICAgICAgICAgICBpZiAoYmxvY2spIHtcbiAgICAgICAgICAgICAgICAgICAgcHJvY2Vzc2luZy5sYXN0QmxvY2tJZCA9IGJsb2NrLmlkIHx8ICcnO1xuXG4gICAgICAgICAgICAgICAgICAgIGNvbnN0IGluTXNnID0gKGJsb2NrLmluX21zZ19kZXNjciB8fCBbXSkuZmluZCh4ID0+IHgubXNnX2lkID09PSBtZXNzYWdlSWQpO1xuICAgICAgICAgICAgICAgICAgICBpZiAoaW5Nc2cpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIGNvbnN0IHRyYW5zYWN0aW9uSWQgPSBpbk1zZy50cmFuc2FjdGlvbl9pZDtcbiAgICAgICAgICAgICAgICAgICAgICAgIGlmICghdHJhbnNhY3Rpb25JZCkge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRocm93IFRPTkNsaWVudEVycm9yLmludmFsaWRCbG9ja2NoYWluKCdObyBmaWVsZCBgdHJhbnNhY3Rpb25faWRgIGluIGJsb2NrJyk7XG4gICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICAgICBjb25zdCB0clN0YXJ0ID0gRGF0ZS5ub3coKTtcbiAgICAgICAgICAgICAgICAgICAgICAgIHRyYW5zYWN0aW9uID0gYXdhaXQgdGhpcy5xdWVyaWVzLnRyYW5zYWN0aW9ucy53YWl0Rm9yKHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBmaWx0ZXI6IHsgaWQ6IHsgZXE6IHRyYW5zYWN0aW9uSWQgfSB9LFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHJlc3VsdDogVFJBTlNBQ1RJT05fRklFTERTX09SRElOQVJZLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRpbWVvdXQ6IE1BWF9USU1FT1VULFxuICAgICAgICAgICAgICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICAgICAgICAgICAgICB0cmFjZU1lc3NhZ2UodGhpcy5jb25maWcudHJhY2VyLCBtZXNzYWdlSWQsICd0cmFuc2FjdGlvblJlY2VpdmVkJywge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRyYW5zYWN0aW9uSWQsXG4gICAgICAgICAgICAgICAgICAgICAgICB9KVxuICAgICAgICAgICAgICAgICAgICAgICAgdGltZVJlcG9ydC5wdXNoKGBUcmFuc2FjdGlvbiBbJHt0cmFuc2FjdGlvbklkfV0gaGFzIGJlZW4gcmVjZWl2ZWQ6ICR7RGF0ZS5ub3coKSAtIHRyU3RhcnR9IG1zYCk7XG4gICAgICAgICAgICAgICAgICAgIH0gZWxzZSBpZiAoKGJsb2NrLmdlbl91dGltZSB8fCAwKSA+IHN0b3BUaW1lKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICBpZiAoZXhwaXJlKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgdHJhY2VNZXNzYWdlKHRoaXMuY29uZmlnLnRyYWNlciwgbWVzc2FnZUlkLCAnbWVzc2FnZUV4cGlyZWQnLCB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgdGhyb3cgVE9OQ2xpZW50RXJyb3IubWVzc2FnZUV4cGlyZWQoe1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBtZXNzYWdlSWQsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHNlbmRpbmdUaW1lOiBwcm9jZXNzaW5nLnNlbmRpbmdUaW1lLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBleHBpcmU6IHN0b3BUaW1lLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBibG9ja1RpbWU6IGJsb2NrLmdlbl91dGltZSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgYmxvY2tJZDogcHJvY2Vzc2luZy5sYXN0QmxvY2tJZCxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB9KTtcbiAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICAgIHRocm93IFRPTkNsaWVudEVycm9yLnRyYW5zYWN0aW9uV2FpdFRpbWVvdXQoe1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIG1lc3NhZ2VJZCxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBzZW5kaW5nVGltZTogcHJvY2Vzc2luZy5zZW5kaW5nVGltZSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB0aW1lb3V0LFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIG1lc3NhZ2VQcm9jZXNzaW5nU3RhdGU6IHByb2Nlc3NpbmcsXG4gICAgICAgICAgICAgICAgICAgICAgICB9KTtcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgdGltZVJlcG9ydC5zcGxpY2UoMCwgMCwgYFRyYW5zYWN0aW9uIHdhaXRpbmcgdGltZTogJHtEYXRlLm5vdygpIC0gdG90YWxTdGFydH0gbXNgKTtcbiAgICAgICAgICAgIHRoaXMuY29uZmlnLmxvZyh0aW1lUmVwb3J0LmpvaW4oJ1xcbicpKTtcbiAgICAgICAgfSBjYXRjaCAoZXJyb3IpIHtcbiAgICAgICAgICAgIHRoaXMuY29uZmlnLmxvZygnW3dhaXRGb3JUcmFuc2FjdGlvbl0nLCAnRkFJTEVEJywgZXJyb3IpO1xuICAgICAgICAgICAgaWYgKGVycm9yLmNvZGUgPT09IFRPTkVycm9yQ29kZS5NRVNTQUdFX0VYUElSRURcbiAgICAgICAgICAgICAgICB8fCBlcnJvci5jb2RlID09PSBUT05FcnJvckNvZGUuVFJBTlNBQ1RJT05fV0FJVF9USU1FT1VUKSB7XG4gICAgICAgICAgICAgICAgdGhyb3cgYXdhaXQgdGhpcy5yZXNvbHZlRGV0YWlsZWRFcnJvcihcbiAgICAgICAgICAgICAgICAgICAgZXJyb3IsXG4gICAgICAgICAgICAgICAgICAgIHBhcmFtcy5tZXNzYWdlLm1lc3NhZ2VCb2R5QmFzZTY0LFxuICAgICAgICAgICAgICAgICAgICBwcm9jZXNzaW5nLnNlbmRpbmdUaW1lLFxuICAgICAgICAgICAgICAgICAgICBhZGRyZXNzLFxuICAgICAgICAgICAgICAgICk7XG4gICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAgIHRocm93IGVycm9yO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG5cbiAgICAgICAgcmV0dXJuIHRoaXMucHJvY2Vzc1RyYW5zYWN0aW9uKFxuICAgICAgICAgICAgYWRkcmVzcyxcbiAgICAgICAgICAgIHRyYW5zYWN0aW9uLFxuICAgICAgICAgICAgcGFyYW1zLmFiaSxcbiAgICAgICAgICAgIHBhcmFtcy5mdW5jdGlvbk5hbWUsXG4gICAgICAgICk7XG4gICAgfVxuXG4gICAgYXN5bmMgbGVnYWN5V2FpdEZvclRyYW5zYWN0aW9uKFxuICAgICAgICBwYXJhbXM6IFRPTldhaXRGb3JUcmFuc2FjdGlvblBhcmFtcyxcbiAgICApOiBQcm9taXNlPFRPTkNvbnRyYWN0UnVuUmVzdWx0PiB7XG4gICAgICAgIGNvbnN0IHtcbiAgICAgICAgICAgIG1lc3NhZ2UsXG4gICAgICAgICAgICBhYmksXG4gICAgICAgICAgICBmdW5jdGlvbk5hbWUsXG4gICAgICAgICAgICBwYXJlbnRTcGFuLFxuICAgICAgICB9ID0gcGFyYW1zO1xuICAgICAgICBjb25zdCBtZXNzYWdlSWQgPSBhd2FpdCB0aGlzLmVuc3VyZU1lc3NhZ2VJZChtZXNzYWdlKTtcbiAgICAgICAgY29uc3QgY29uZmlnID0gdGhpcy5jb25maWc7XG4gICAgICAgIGNvbmZpZy5sb2coJ1t3YWl0Rm9yVHJhbnNhY3Rpb25dJywgZnVuY3Rpb25OYW1lLCBtZXNzYWdlKTtcbiAgICAgICAgbGV0IHByb2Nlc3NpbmdUaW1lb3V0ID0gY29uZmlnLm1lc3NhZ2VQcm9jZXNzaW5nVGltZW91dCgpO1xuICAgICAgICBjb25zdCBwcm9taXNlcyA9IFtdO1xuICAgICAgICBjb25zdCBzZXJ2ZXJJbmZvID0gYXdhaXQgdGhpcy5xdWVyaWVzLmdldFNlcnZlckluZm8ocGFyZW50U3Bhbik7XG4gICAgICAgIGNvbnN0IG9wZXJhdGlvbklkID0gc2VydmVySW5mby5zdXBwb3J0c09wZXJhdGlvbklkXG4gICAgICAgICAgICA/IHRoaXMucXVlcmllcy5nZW5lcmF0ZU9wZXJhdGlvbklkKClcbiAgICAgICAgICAgIDogdW5kZWZpbmVkO1xuICAgICAgICBsZXQgdHJhbnNhY3Rpb246ID9RVHJhbnNhY3Rpb24gPSBudWxsO1xuICAgICAgICBjb25zdCBzZW5kaW5nVGltZSA9IE1hdGgucm91bmQoRGF0ZS5ub3coKSAvIDEwMDApO1xuICAgICAgICBsZXQgYmxvY2tUaW1lID0gbnVsbDtcbiAgICAgICAgdHJ5IHtcbiAgICAgICAgICAgIGNvbnN0IGV4cGlyZSA9IG1lc3NhZ2UuZXhwaXJlO1xuICAgICAgICAgICAgaWYgKGV4cGlyZSkge1xuICAgICAgICAgICAgICAgIC8vIGNhbGN1bGF0ZSB0aW1lb3V0IGFjY29yZGluZyB0byBgZXhwaXJlYCB2YWx1ZSAoaW4gc2Vjb25kcylcbiAgICAgICAgICAgICAgICAvLyBhZGQgcHJvY2Vzc2luZyB0aW1lb3V0IGFzIG1hc3RlciBibG9jayB2YWxpZGF0aW9uIHRpbWVcbiAgICAgICAgICAgICAgICBjb25zdCBibG9ja1RpbWVvdXQgPSBleHBpcmUgKiAxMDAwIC0gRGF0ZS5ub3coKSArIHByb2Nlc3NpbmdUaW1lb3V0O1xuICAgICAgICAgICAgICAgIC8vIHRyYW5zYWN0aW9uIHRpbWVvdXQgbXVzdCBiZSBncmVhdGVyIHRoZW4gYmxvY2sgdGltZW91dFxuICAgICAgICAgICAgICAgIHByb2Nlc3NpbmdUaW1lb3V0ID0gYmxvY2tUaW1lb3V0ICsgRVhUUkFfVFJBTlNBQ1RJT05fV0FJVElOR19USU1FO1xuXG5cbiAgICAgICAgICAgICAgICBjb25zdCB3YWl0RXhwaXJlZCA9IGFzeW5jICgpID0+IHtcbiAgICAgICAgICAgICAgICAgICAgLy8gd2FpdCBmb3IgYmxvY2ssIHByb2R1Y2VkIGFmdGVyIGBleHBpcmVgIHRvIGd1YXJhbnRlZSB0aGF0IG1lc3NhZ2UgaXMgcmVqZWN0ZWRcbiAgICAgICAgICAgICAgICAgICAgbGV0IGJsb2NrOiA/UUJsb2NrID0gbnVsbDtcbiAgICAgICAgICAgICAgICAgICAgdHJ5IHtcbiAgICAgICAgICAgICAgICAgICAgICAgIGJsb2NrID0gYXdhaXQgdGhpcy5xdWVyaWVzLmJsb2Nrcy53YWl0Rm9yKHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBmaWx0ZXI6IHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgbWFzdGVyOiB7IG1pbl9zaGFyZF9nZW5fdXRpbWU6IHsgZ2U6IGV4cGlyZSB9IH0sXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICByZXN1bHQ6ICdpZCBnZW5fdXRpbWUgaW5fbXNnX2Rlc2NyIHsgdHJhbnNhY3Rpb25faWQgfScsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgdGltZW91dDogYmxvY2tUaW1lb3V0LFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHBhcmVudFNwYW4sXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgb3BlcmF0aW9uSWQsXG4gICAgICAgICAgICAgICAgICAgICAgICB9KTtcbiAgICAgICAgICAgICAgICAgICAgfSBjYXRjaCAoZXJyb3IpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIGlmIChUT05DbGllbnRFcnJvci5pc1dhaXRGb3JUaW1lb3V0KGVycm9yKSkge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRocm93IFRPTkNsaWVudEVycm9yLm5ldHdvcmtTaWxlbnQoe1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBtZXNzYWdlSWQsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHNlbmRpbmdUaW1lOiBzZW5kaW5nVGltZSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgZXhwaXJlLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB0aW1lb3V0OiBibG9ja1RpbWVvdXQsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICAgICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRocm93IGVycm9yO1xuICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICB9XG5cbiAgICAgICAgICAgICAgICAgICAgaWYgKHRyYW5zYWN0aW9uKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICByZXR1cm47XG4gICAgICAgICAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgICAgICAgICBjb25zdCB0cmFuc2FjdGlvbklkID0gYmxvY2suaW5fbXNnX2Rlc2NyXG4gICAgICAgICAgICAgICAgICAgICAgICAmJiBibG9jay5pbl9tc2dfZGVzY3IuZmluZChtc2cgPT4gISFtc2cudHJhbnNhY3Rpb25faWQpPy50cmFuc2FjdGlvbl9pZDtcblxuICAgICAgICAgICAgICAgICAgICBpZiAoIXRyYW5zYWN0aW9uSWQpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIHRocm93IFRPTkNsaWVudEVycm9yLmludGVybmFsRXJyb3IoXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgJ0ludmFsaWQgYmxvY2sgcmVjZWl2ZWQ6IG5vIHRyYW5zYWN0aW9uIElEJyxcbiAgICAgICAgICAgICAgICAgICAgICAgICk7XG4gICAgICAgICAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgICAgICAgICAvLyBjaGVjayB0aGF0IHRyYW5zYWN0aW9ucyBjb2xsZWN0aW9uIGlzIHVwZGF0ZWRcbiAgICAgICAgICAgICAgICAgICAgdHJ5IHtcbiAgICAgICAgICAgICAgICAgICAgICAgIGF3YWl0IHRoaXMucXVlcmllcy50cmFuc2FjdGlvbnMud2FpdEZvcih7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgZmlsdGVyOiB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGlkOiB7IGVxOiB0cmFuc2FjdGlvbklkIH0sXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICByZXN1bHQ6ICdpZCcsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgdGltZW91dDogQkxPQ0tfVFJBTlNBQ1RJT05fV0FJVElOR19USU1FLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHBhcmVudFNwYW4sXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgb3BlcmF0aW9uSWQsXG4gICAgICAgICAgICAgICAgICAgICAgICB9KTtcbiAgICAgICAgICAgICAgICAgICAgfSBjYXRjaCAoZXJyb3IpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIGlmIChUT05DbGllbnRFcnJvci5pc1dhaXRGb3JUaW1lb3V0KGVycm9yKSkge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRocm93IFRPTkNsaWVudEVycm9yLm5ldHdvcmtTaWxlbnQoe1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBtZXNzYWdlSWQsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGJsb2NrSWQ6IGJsb2NrLmlkLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB0cmFuc2FjdGlvbklkLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB0aW1lb3V0OiBCTE9DS19UUkFOU0FDVElPTl9XQUlUSU5HX1RJTUUsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHNlbmRpbmdUaW1lOiBzZW5kaW5nVGltZSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgZXhwaXJlLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB0aHJvdyBlcnJvcjtcbiAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICBibG9ja1RpbWUgPSBibG9jay5nZW5fdXRpbWU7XG4gICAgICAgICAgICAgICAgfTtcblxuICAgICAgICAgICAgICAgIHByb21pc2VzLnB1c2god2FpdEV4cGlyZWQoKSk7XG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICAgIC8vIHdhaXQgZm9yIG1lc3NhZ2UgcHJvY2Vzc2luZyB0cmFuc2FjdGlvblxuICAgICAgICAgICAgcHJvbWlzZXMucHVzaChuZXcgUHJvbWlzZSgocmVzb2x2ZSwgcmVqZWN0KSA9PiB7XG4gICAgICAgICAgICAgICAgKGFzeW5jICgpID0+IHtcbiAgICAgICAgICAgICAgICAgICAgdHJ5IHtcbiAgICAgICAgICAgICAgICAgICAgICAgIHRyYW5zYWN0aW9uID0gYXdhaXQgdGhpcy5xdWVyaWVzLnRyYW5zYWN0aW9ucy53YWl0Rm9yKHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBmaWx0ZXI6IHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgaW5fbXNnOiB7IGVxOiBtZXNzYWdlSWQgfSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgc3RhdHVzOiB7IGVxOiBRVHJhbnNhY3Rpb25Qcm9jZXNzaW5nU3RhdHVzLmZpbmFsaXplZCB9LFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgcmVzdWx0OiB0cmFuc2FjdGlvbkRldGFpbHMsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgdGltZW91dDogcHJvY2Vzc2luZ1RpbWVvdXQsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgb3BlcmF0aW9uSWQsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgcGFyZW50U3BhbixcbiAgICAgICAgICAgICAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgICAgICAgICAgICAgcmVzb2x2ZSgpO1xuICAgICAgICAgICAgICAgICAgICB9IGNhdGNoIChlcnJvcikge1xuICAgICAgICAgICAgICAgICAgICAgICAgaWYgKFRPTkNsaWVudEVycm9yLmlzV2FpdEZvclRpbWVvdXQoZXJyb3IpKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgcmVqZWN0KFRPTkNsaWVudEVycm9yLnRyYW5zYWN0aW9uV2FpdFRpbWVvdXQoe1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBtZXNzYWdlSWQsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHNlbmRpbmdUaW1lLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB0aW1lb3V0OiBwcm9jZXNzaW5nVGltZW91dCxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB9KSk7XG4gICAgICAgICAgICAgICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHJlamVjdChlcnJvcik7XG4gICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICB9KSgpO1xuICAgICAgICAgICAgfSkpO1xuXG4gICAgICAgICAgICB0cnkge1xuICAgICAgICAgICAgICAgIGF3YWl0IFByb21pc2UucmFjZShwcm9taXNlcyk7XG4gICAgICAgICAgICB9IGZpbmFsbHkge1xuICAgICAgICAgICAgICAgIGlmIChwcm9taXNlcy5sZW5ndGggPiAxICYmIG9wZXJhdGlvbklkKSB7XG4gICAgICAgICAgICAgICAgICAgIGF3YWl0IHRoaXMucXVlcmllcy5maW5pc2hPcGVyYXRpb25zKFtvcGVyYXRpb25JZF0pO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgaWYgKCF0cmFuc2FjdGlvbikge1xuICAgICAgICAgICAgICAgIHRocm93IFRPTkNsaWVudEVycm9yLm1lc3NhZ2VFeHBpcmVkKHtcbiAgICAgICAgICAgICAgICAgICAgbWVzc2FnZUlkLFxuICAgICAgICAgICAgICAgICAgICBzZW5kaW5nVGltZTogc2VuZGluZ1RpbWUsXG4gICAgICAgICAgICAgICAgICAgIGV4cGlyZSxcbiAgICAgICAgICAgICAgICAgICAgYmxvY2tUaW1lLFxuICAgICAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgY29uc3QgdHJhbnNhY3Rpb25Ob3cgPSB0cmFuc2FjdGlvbi5ub3cgfHwgMDtcbiAgICAgICAgICAgIHRoaXMuY29uZmlnLmxvZygnW3dhaXRGb3JUcmFuc2FjdGlvbl0nLCAnVFJBTlNBQ1RJT05fUkVDRUlWRUQnLCB7XG4gICAgICAgICAgICAgICAgaWQ6IHRyYW5zYWN0aW9uLmlkLFxuICAgICAgICAgICAgICAgIGJsb2NrSWQ6IHRyYW5zYWN0aW9uLmJsb2NrX2lkLFxuICAgICAgICAgICAgICAgIG5vdzogYCR7bmV3IERhdGUodHJhbnNhY3Rpb25Ob3cgKiAxMDAwKS50b0lTT1N0cmluZygpfSAoJHt0cmFuc2FjdGlvbk5vd30pYCxcbiAgICAgICAgICAgIH0pO1xuICAgICAgICB9IGNhdGNoIChlcnJvcikge1xuICAgICAgICAgICAgdGhpcy5jb25maWcubG9nKCdbd2FpdEZvclRyYW5zYWN0aW9uXScsICdGQUlMRUQnLCBlcnJvcik7XG4gICAgICAgICAgICBpZiAoVE9OQ2xpZW50RXJyb3IuaXNNZXNzYWdlRXhwaXJlZChlcnJvcilcbiAgICAgICAgICAgICAgICB8fCBUT05DbGllbnRFcnJvci5pc0NsaWVudEVycm9yKGVycm9yLCBUT05FcnJvckNvZGUuVFJBTlNBQ1RJT05fV0FJVF9USU1FT1VUKSkge1xuICAgICAgICAgICAgICAgIGNvbnN0IGRldGFpbGVkRXJyb3I6IGFueSA9IGF3YWl0IHRoaXMucmVzb2x2ZURldGFpbGVkRXJyb3IoXG4gICAgICAgICAgICAgICAgICAgIGVycm9yLFxuICAgICAgICAgICAgICAgICAgICBtZXNzYWdlLm1lc3NhZ2VCb2R5QmFzZTY0LFxuICAgICAgICAgICAgICAgICAgICBEYXRlLm5vdygpIC8gMTAwMCxcbiAgICAgICAgICAgICAgICAgICAgbWVzc2FnZS5hZGRyZXNzLFxuICAgICAgICAgICAgICAgICk7XG4gICAgICAgICAgICAgICAgY29uc3QgbWVzc2FnZVByb2Nlc3NpbmdTdGF0ZSA9IGVycm9yLmRhdGE/Lm1lc3NhZ2VQcm9jZXNzaW5nU3RhdGU7XG4gICAgICAgICAgICAgICAgaWYgKG1lc3NhZ2VQcm9jZXNzaW5nU3RhdGUpIHtcbiAgICAgICAgICAgICAgICAgICAgaWYgKGRldGFpbGVkRXJyb3IuZGF0YSkge1xuICAgICAgICAgICAgICAgICAgICAgICAgZGV0YWlsZWRFcnJvci5kYXRhLm1lc3NhZ2VQcm9jZXNzaW5nU3RhdGUgPSBtZXNzYWdlUHJvY2Vzc2luZ1N0YXRlO1xuICAgICAgICAgICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAgICAgICAgICAgZGV0YWlsZWRFcnJvci5kYXRhID0ge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIG1lc3NhZ2VQcm9jZXNzaW5nU3RhdGUsXG4gICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgdGhyb3cgZGV0YWlsZWRFcnJvcjtcbiAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgICAgdGhyb3cgZXJyb3I7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgICAgcmVtb3ZlVHlwZU5hbWUodHJhbnNhY3Rpb24pO1xuICAgICAgICBjb25zdCB7IG91dHB1dCwgZmVlcyB9ID0gYXdhaXQgdGhpcy5wcm9jZXNzVHJhbnNhY3Rpb24oXG4gICAgICAgICAgICBtZXNzYWdlLmFkZHJlc3MsXG4gICAgICAgICAgICB0cmFuc2FjdGlvbixcbiAgICAgICAgICAgIGFiaSxcbiAgICAgICAgICAgIGZ1bmN0aW9uTmFtZSxcbiAgICAgICAgKTtcbiAgICAgICAgcmV0dXJuIHtcbiAgICAgICAgICAgIHRyYW5zYWN0aW9uLFxuICAgICAgICAgICAgb3V0cHV0LFxuICAgICAgICAgICAgZmVlcyxcbiAgICAgICAgfTtcbiAgICB9XG5cbiAgICBhc3luYyBwcm9jZXNzVHJhbnNhY3Rpb24oXG4gICAgICAgIGFkZHJlc3M6IHN0cmluZyxcbiAgICAgICAgdHJhbnNhY3Rpb246IFFUcmFuc2FjdGlvbixcbiAgICAgICAgYWJpOiA/VE9OQ29udHJhY3RBQkksXG4gICAgICAgIGZ1bmN0aW9uTmFtZTogP3N0cmluZyxcbiAgICApOiBQcm9taXNlPFRPTkNvbnRyYWN0UnVuUmVzdWx0PiB7XG4gICAgICAgIHRyeSB7XG4gICAgICAgICAgICBjb25zdCByZXN1bHQgPSBhd2FpdCB0aGlzLnJlcXVlc3RDb3JlKCdjb250cmFjdHMucHJvY2Vzcy50cmFuc2FjdGlvbicsIHtcbiAgICAgICAgICAgICAgICB0cmFuc2FjdGlvbixcbiAgICAgICAgICAgICAgICBhYmksXG4gICAgICAgICAgICAgICAgZnVuY3Rpb25OYW1lLFxuICAgICAgICAgICAgICAgIGFkZHJlc3MsXG4gICAgICAgICAgICB9KTtcbiAgICAgICAgICAgIHJldHVybiB7XG4gICAgICAgICAgICAgICAgdHJhbnNhY3Rpb24sXG4gICAgICAgICAgICAgICAgLi4ucmVzdWx0LFxuICAgICAgICAgICAgfTtcbiAgICAgICAgfSBjYXRjaCAoZXJyb3IpIHtcbiAgICAgICAgICAgIGNvbnN0IGFjY291bnRzID0gYXdhaXQgdGhpcy5xdWVyaWVzLmFjY291bnRzLnF1ZXJ5KHtcbiAgICAgICAgICAgICAgICBmaWx0ZXI6IHsgaWQ6IHsgZXE6IGFkZHJlc3MgfSB9LFxuICAgICAgICAgICAgICAgIHJlc3VsdDogJ2FjY190eXBlIGJhbGFuY2UnLFxuICAgICAgICAgICAgICAgIHRpbWVvdXQ6IDEwMDAsXG4gICAgICAgICAgICB9KTtcbiAgICAgICAgICAgIGlmIChhY2NvdW50cy5sZW5ndGggPT09IDApIHtcbiAgICAgICAgICAgICAgICB0aHJvdyBUT05DbGllbnRFcnJvci5hY2NvdW50TWlzc2luZyhhZGRyZXNzKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIHRocm93IGVycm9yO1xuICAgICAgICB9XG4gICAgfVxuXG4gICAgYXN5bmMgcmVzb2x2ZURldGFpbGVkRXJyb3IoXG4gICAgICAgIGVycm9yOiBFcnJvcixcbiAgICAgICAgbWVzc2FnZUJhc2U2NDogc3RyaW5nLFxuICAgICAgICB0aW1lOiBudW1iZXIsXG4gICAgICAgIGFkZHJlc3M6IHN0cmluZyxcbiAgICApIHtcbiAgICAgICAgY29uc3QgYWNjb3VudHMgPSBhd2FpdCB0aGlzLnF1ZXJpZXMuYWNjb3VudHMucXVlcnkoe1xuICAgICAgICAgICAgZmlsdGVyOiB7IGlkOiB7IGVxOiBhZGRyZXNzIH0gfSxcbiAgICAgICAgICAgIHJlc3VsdDogJ2lkIGFjY190eXBlIGJhbGFuY2UgYmFsYW5jZV9vdGhlciB7IGN1cnJlbmN5IHZhbHVlIH0gYm9jIGNvZGVfaGFzaCBkYXRhX2hhc2ggbGFzdF9wYWlkJyxcbiAgICAgICAgICAgIHRpbWVvdXQ6IDEwMDAsXG4gICAgICAgIH0pO1xuICAgICAgICBpZiAoYWNjb3VudHMubGVuZ3RoID09PSAwKSB7XG4gICAgICAgICAgICByZXR1cm4gVE9OQ2xpZW50RXJyb3IuYWNjb3VudE1pc3NpbmcoYWRkcmVzcyk7XG4gICAgICAgIH1cbiAgICAgICAgY29uc3QgYWNjb3VudCA9IGFjY291bnRzWzBdO1xuICAgICAgICByZW1vdmVUeXBlTmFtZShhY2NvdW50KTtcbiAgICAgICAgdHJ5IHtcbiAgICAgICAgICAgIGF3YWl0IHRoaXMucmVxdWVzdENvcmUoJ2NvbnRyYWN0cy5yZXNvbHZlLmVycm9yJywge1xuICAgICAgICAgICAgICAgIGFkZHJlc3MsXG4gICAgICAgICAgICAgICAgYWNjb3VudCxcbiAgICAgICAgICAgICAgICBtZXNzYWdlQmFzZTY0LFxuICAgICAgICAgICAgICAgIHRpbWU6IHRpbWUsXG4gICAgICAgICAgICAgICAgbWFpbkVycm9yOiBlcnJvcixcbiAgICAgICAgICAgIH0pO1xuICAgICAgICB9IGNhdGNoIChyZXNvbHZlZCkge1xuICAgICAgICAgICAgcmV0dXJuIHJlc29sdmVkO1xuICAgICAgICB9XG4gICAgICAgIHJldHVybiBlcnJvcjtcbiAgICB9XG5cbiAgICBhc3luYyBpc0RlcGxveWVkKGFkZHJlc3M6IHN0cmluZywgcGFyZW50U3Bhbj86IChTcGFuIHwgU3BhbkNvbnRleHQpKTogUHJvbWlzZTxib29sPiB7XG4gICAgICAgIGNvbnN0IGFjY291bnQgPSBhd2FpdCB0aGlzLnF1ZXJpZXMuYWNjb3VudHMucXVlcnkoe1xuICAgICAgICAgICAgZmlsdGVyOiB7XG4gICAgICAgICAgICAgICAgaWQ6IHsgZXE6IGFkZHJlc3MgfSxcbiAgICAgICAgICAgICAgICBhY2NfdHlwZTogeyBlcTogUUFjY291bnRUeXBlLmFjdGl2ZSB9LFxuICAgICAgICAgICAgfSxcbiAgICAgICAgICAgIHJlc3VsdDogJ2lkJyxcbiAgICAgICAgICAgIHBhcmVudFNwYW4sXG4gICAgICAgIH0pO1xuICAgICAgICByZXR1cm4gYWNjb3VudC5sZW5ndGggPiAwO1xuICAgIH1cblxuICAgIGFzeW5jIHByb2Nlc3NEZXBsb3lNZXNzYWdlKFxuICAgICAgICBtZXNzYWdlOiBUT05Db250cmFjdERlcGxveU1lc3NhZ2UsXG4gICAgICAgIHBhcmVudFNwYW4/OiAoU3BhbiB8IFNwYW5Db250ZXh0KSxcbiAgICAgICAgcmV0cnlJbmRleD86IG51bWJlcixcbiAgICApOiBQcm9taXNlPFRPTkNvbnRyYWN0RGVwbG95UmVzdWx0PiB7XG4gICAgICAgIHRoaXMuY29uZmlnLmxvZygncHJvY2Vzc0RlcGxveU1lc3NhZ2UnLCBtZXNzYWdlKTtcbiAgICAgICAgaWYgKGF3YWl0IHRoaXMuaXNEZXBsb3llZChtZXNzYWdlLmFkZHJlc3MsIHBhcmVudFNwYW4pKSB7XG4gICAgICAgICAgICByZXR1cm4ge1xuICAgICAgICAgICAgICAgIGFkZHJlc3M6IG1lc3NhZ2UuYWRkcmVzcyxcbiAgICAgICAgICAgICAgICBhbHJlYWR5RGVwbG95ZWQ6IHRydWUsXG4gICAgICAgICAgICB9O1xuICAgICAgICB9XG4gICAgICAgIGNvbnN0IHByb2Nlc3NpbmcgPSBhd2FpdCB0aGlzLnNlbmRNZXNzYWdlKG1lc3NhZ2UubWVzc2FnZSwgcGFyZW50U3Bhbik7XG4gICAgICAgIHJldHVybiB0aGlzLndhaXRGb3JEZXBsb3lUcmFuc2FjdGlvbihtZXNzYWdlLCBwcm9jZXNzaW5nLCBwYXJlbnRTcGFuKTtcbiAgICB9XG5cbiAgICBhc3luYyB3YWl0Rm9yRGVwbG95VHJhbnNhY3Rpb24oXG4gICAgICAgIGRlcGxveU1lc3NhZ2U6IFRPTkNvbnRyYWN0RGVwbG95TWVzc2FnZSxcbiAgICAgICAgbWVzc2FnZVByb2Nlc3NpbmdTdGF0ZTogVE9OTWVzc2FnZVByb2Nlc3NpbmdTdGF0ZSxcbiAgICAgICAgcGFyZW50U3Bhbj86IChTcGFuIHwgU3BhbkNvbnRleHQpLFxuICAgICAgICBpbmZpbml0ZVdhaXQ/OiBib29sZWFuLFxuICAgICk6IFByb21pc2U8VE9OQ29udHJhY3REZXBsb3lSZXN1bHQ+IHtcbiAgICAgICAgY29uc3QgbWVzc2FnZSA9IGRlcGxveU1lc3NhZ2UubWVzc2FnZTtcbiAgICAgICAgY29uc3QgcmVzdWx0ID0gYXdhaXQgdGhpcy53YWl0Rm9yVHJhbnNhY3Rpb24oe1xuICAgICAgICAgICAgbWVzc2FnZSxcbiAgICAgICAgICAgIG1lc3NhZ2VQcm9jZXNzaW5nU3RhdGUsXG4gICAgICAgICAgICBwYXJlbnRTcGFuLFxuICAgICAgICAgICAgaW5maW5pdGVXYWl0LFxuICAgICAgICB9KTtcbiAgICAgICAgcmV0dXJuIHtcbiAgICAgICAgICAgIC4uLnJlc3VsdCxcbiAgICAgICAgICAgIGFkZHJlc3M6IG1lc3NhZ2UuYWRkcmVzcyxcbiAgICAgICAgICAgIGFscmVhZHlEZXBsb3llZDogZmFsc2UsXG4gICAgICAgIH07XG4gICAgfVxuXG5cbiAgICBhc3luYyBwcm9jZXNzUnVuTWVzc2FnZShcbiAgICAgICAgcnVuTWVzc2FnZTogVE9OQ29udHJhY3RSdW5NZXNzYWdlLFxuICAgICAgICBwYXJlbnRTcGFuPzogKFNwYW4gfCBTcGFuQ29udGV4dCksXG4gICAgKTogUHJvbWlzZTxUT05Db250cmFjdFJ1blJlc3VsdD4ge1xuICAgICAgICB0aGlzLmNvbmZpZy5sb2coJ3Byb2Nlc3NSdW5NZXNzYWdlJywgcnVuTWVzc2FnZSk7XG4gICAgICAgIGNvbnN0IHByb2Nlc3NpbmcgPSBhd2FpdCB0aGlzLnNlbmRNZXNzYWdlKHJ1bk1lc3NhZ2UubWVzc2FnZSwgcGFyZW50U3Bhbik7XG4gICAgICAgIHJldHVybiB0aGlzLndhaXRGb3JSdW5UcmFuc2FjdGlvbihydW5NZXNzYWdlLCBwcm9jZXNzaW5nLCBwYXJlbnRTcGFuKTtcbiAgICB9XG5cbiAgICBhc3luYyB3YWl0Rm9yUnVuVHJhbnNhY3Rpb24oXG4gICAgICAgIHJ1bk1lc3NhZ2U6IFRPTkNvbnRyYWN0UnVuTWVzc2FnZSxcbiAgICAgICAgbWVzc2FnZVByb2Nlc3NpbmdTdGF0ZTogVE9OTWVzc2FnZVByb2Nlc3NpbmdTdGF0ZSxcbiAgICAgICAgcGFyZW50U3Bhbj86IChTcGFuIHwgU3BhbkNvbnRleHQpLFxuICAgICAgICBpbmZpbml0ZVdhaXQ/OiBib29sZWFuLFxuICAgICk6IFByb21pc2U8VE9OQ29udHJhY3RSdW5SZXN1bHQ+IHtcbiAgICAgICAgcmV0dXJuIHRoaXMud2FpdEZvclRyYW5zYWN0aW9uKHtcbiAgICAgICAgICAgIG1lc3NhZ2U6IHJ1bk1lc3NhZ2UubWVzc2FnZSxcbiAgICAgICAgICAgIG1lc3NhZ2VQcm9jZXNzaW5nU3RhdGUsXG4gICAgICAgICAgICBwYXJlbnRTcGFuLFxuICAgICAgICAgICAgaW5maW5pdGVXYWl0LFxuICAgICAgICAgICAgYWJpOiBydW5NZXNzYWdlLmFiaSxcbiAgICAgICAgICAgIGZ1bmN0aW9uTmFtZTogcnVuTWVzc2FnZS5mdW5jdGlvbk5hbWUsXG4gICAgICAgIH0pO1xuICAgIH1cblxuICAgIC8qKlxuICAgICAqIERlcHJlY2F0ZWQuIFVzZSBgcnVuTWVzc2FnZUxvY2FsYCBpbnN0ZWFkLlxuICAgICAqIEBwYXJhbSBwYXJhbXNcbiAgICAgKiBAcGFyYW0gd2FpdFBhcmFtc1xuICAgICAqIEBwYXJhbSBwYXJlbnRTcGFuXG4gICAgICogQHJldHVybnMge1Byb21pc2U8dW5rbm93bj59XG4gICAgICovXG4gICAgYXN5bmMgcHJvY2Vzc1J1bk1lc3NhZ2VMb2NhbChcbiAgICAgICAgcGFyYW1zOiBUT05Db250cmFjdFJ1bk1lc3NhZ2UsXG4gICAgICAgIHdhaXRQYXJhbXM/OiBUT05Db250cmFjdEFjY291bnRXYWl0UGFyYW1zLFxuICAgICAgICBwYXJlbnRTcGFuPzogKFNwYW4gfCBTcGFuQ29udGV4dCksXG4gICAgKTogUHJvbWlzZTxUT05Db250cmFjdFJ1blJlc3VsdD4ge1xuICAgICAgICB0aGlzLmNvbmZpZy5sb2coJ3Byb2Nlc3NSdW5NZXNzYWdlTG9jYWwnLCBwYXJhbXMpO1xuXG4gICAgICAgIGNvbnN0IGFjY291bnQgPSBhd2FpdCB0aGlzLmdldEFjY291bnQocGFyYW1zLmFkZHJlc3MsIHRydWUsIHdhaXRQYXJhbXMsIHBhcmVudFNwYW4pO1xuXG4gICAgICAgIHJldHVybiB0aGlzLnJlcXVlc3RDb3JlKCdjb250cmFjdHMucnVuLmxvY2FsLm1zZycsIHtcbiAgICAgICAgICAgIGFkZHJlc3M6IHBhcmFtcy5hZGRyZXNzLFxuICAgICAgICAgICAgYWNjb3VudCxcbiAgICAgICAgICAgIGFiaTogcGFyYW1zLmFiaSxcbiAgICAgICAgICAgIGZ1bmN0aW9uTmFtZTogcGFyYW1zLmZ1bmN0aW9uTmFtZSxcbiAgICAgICAgICAgIG1lc3NhZ2VCYXNlNjQ6IHBhcmFtcy5tZXNzYWdlLm1lc3NhZ2VCb2R5QmFzZTY0LFxuICAgICAgICB9KTtcbiAgICB9XG5cbiAgICAvLyBGZWUgY2FsY3VsYXRpb25cblxuICAgIGJpZ0JhbGFuY2UgPSAnMHgxMDAwMDAwMDAwMDAwMCc7XG5cbiAgICBhc3luYyBjYWxjUnVuRmVlcyhcbiAgICAgICAgcGFyYW1zOiBUT05Db250cmFjdENhbGNSdW5GZWVQYXJhbXMsXG4gICAgICAgIHBhcmVudFNwYW4/OiAoU3BhbiB8IFNwYW5Db250ZXh0KSxcbiAgICApOiBQcm9taXNlPFRPTkNvbnRyYWN0Q2FsY0ZlZVJlc3VsdD4ge1xuICAgICAgICB0aGlzLmNvbmZpZy5sb2coJ2NhbGNSdW5GZWVzJywgcGFyYW1zKTtcblxuICAgICAgICBjb25zdCBhY2NvdW50ID0gYXdhaXQgdGhpcy5nZXRBY2NvdW50KHBhcmFtcy5hZGRyZXNzLCB0cnVlLCBwYXJhbXMud2FpdFBhcmFtcywgcGFyZW50U3Bhbik7XG5cbiAgICAgICAgaWYgKHBhcmFtcy5lbXVsYXRlQmFsYW5jZSkge1xuICAgICAgICAgICAgYWNjb3VudC5iYWxhbmNlID0gdGhpcy5iaWdCYWxhbmNlO1xuICAgICAgICB9XG5cbiAgICAgICAgcmV0dXJuIHRoaXMucmVxdWVzdENvcmUoJ2NvbnRyYWN0cy5ydW4uZmVlJywge1xuICAgICAgICAgICAgYWRkcmVzczogcGFyYW1zLmFkZHJlc3MsXG4gICAgICAgICAgICBhY2NvdW50LFxuICAgICAgICAgICAgYWJpOiBwYXJhbXMuYWJpLFxuICAgICAgICAgICAgZnVuY3Rpb25OYW1lOiBwYXJhbXMuZnVuY3Rpb25OYW1lLFxuICAgICAgICAgICAgaW5wdXQ6IHBhcmFtcy5pbnB1dCxcbiAgICAgICAgICAgIGtleVBhaXI6IHBhcmFtcy5rZXlQYWlyLFxuICAgICAgICB9KTtcbiAgICB9XG5cbiAgICBhc3luYyBjYWxjRGVwbG95RmVlcyhcbiAgICAgICAgcGFyYW1zOiBUT05Db250cmFjdENhbGNEZXBsb3lGZWVQYXJhbXMsXG4gICAgICAgIHBhcmVudFNwYW4/OiAoU3BhbiB8IFNwYW5Db250ZXh0KSxcbiAgICApOiBQcm9taXNlPFRPTkNvbnRyYWN0Q2FsY0ZlZVJlc3VsdD4ge1xuICAgICAgICB0aGlzLmNvbmZpZy5sb2coJ2NhbGNEZXBsb3lGZWVzJywgcGFyYW1zKTtcblxuICAgICAgICBjb25zdCBtZXNzYWdlID0gYXdhaXQgdGhpcy5jcmVhdGVEZXBsb3lNZXNzYWdlKHBhcmFtcyk7XG5cbiAgICAgICAgcmV0dXJuIHRoaXMuY2FsY01zZ1Byb2Nlc3NGZWVzKHtcbiAgICAgICAgICAgIGFkZHJlc3M6IG1lc3NhZ2UuYWRkcmVzcyxcbiAgICAgICAgICAgIG1lc3NhZ2U6IG1lc3NhZ2UubWVzc2FnZSxcbiAgICAgICAgICAgIGVtdWxhdGVCYWxhbmNlOiBwYXJhbXMuZW11bGF0ZUJhbGFuY2UsXG4gICAgICAgICAgICBuZXdBY2NvdW50OiBwYXJhbXMubmV3QWNjb3VudCxcbiAgICAgICAgfSwgcGFyZW50U3Bhbik7XG4gICAgfVxuXG4gICAgYXN5bmMgY2FsY01zZ1Byb2Nlc3NGZWVzKFxuICAgICAgICBwYXJhbXM6IFRPTkNvbnRyYWN0Q2FsY01zZ1Byb2Nlc3NpbmdGZWVzUGFyYW1zLFxuICAgICAgICBwYXJlbnRTcGFuPzogKFNwYW4gfCBTcGFuQ29udGV4dCksXG4gICAgKTogUHJvbWlzZTxUT05Db250cmFjdENhbGNGZWVSZXN1bHQ+IHtcbiAgICAgICAgdGhpcy5jb25maWcubG9nKCdjYWxjTXNnUHJvY2Vzc0ZlZXMnLCBwYXJhbXMpO1xuXG4gICAgICAgIGxldCBhY2NvdW50OiBRQWNjb3VudCA9IHtcbiAgICAgICAgICAgIGJhbGFuY2U6IHRoaXMuYmlnQmFsYW5jZSxcbiAgICAgICAgICAgIGlkOiBwYXJhbXMuYWRkcmVzcyxcbiAgICAgICAgICAgIGxhc3RfcGFpZDogTWF0aC5mbG9vcihEYXRlLm5vdygpIC8gMTAwMCksXG4gICAgICAgIH07XG5cbiAgICAgICAgaWYgKCFwYXJhbXMubmV3QWNjb3VudCkge1xuICAgICAgICAgICAgYWNjb3VudCA9IGF3YWl0IHRoaXMuZ2V0QWNjb3VudChwYXJhbXMuYWRkcmVzcywgZmFsc2UsIHBhcmFtcy53YWl0UGFyYW1zLCBwYXJlbnRTcGFuKTtcbiAgICAgICAgfVxuXG4gICAgICAgIGlmIChwYXJhbXMuZW11bGF0ZUJhbGFuY2UpIHtcbiAgICAgICAgICAgIGFjY291bnQuYmFsYW5jZSA9IHRoaXMuYmlnQmFsYW5jZTtcbiAgICAgICAgfVxuXG4gICAgICAgIHJldHVybiB0aGlzLnJlcXVlc3RDb3JlKCdjb250cmFjdHMucnVuLmZlZS5tc2cnLCB7XG4gICAgICAgICAgICBhZGRyZXNzOiBwYXJhbXMuYWRkcmVzcyxcbiAgICAgICAgICAgIGFjY291bnQsXG4gICAgICAgICAgICBtZXNzYWdlQmFzZTY0OiBwYXJhbXMubWVzc2FnZS5tZXNzYWdlQm9keUJhc2U2NCxcbiAgICAgICAgfSk7XG4gICAgfVxuXG4gICAgLy8gQWRkcmVzcyBwcm9jZXNzaW5nXG5cbiAgICBhc3luYyBjb252ZXJ0QWRkcmVzcyhcbiAgICAgICAgcGFyYW1zOiBUT05Db250cmFjdENvbnZlcnRBZGRyZXNzUGFyYW1zLFxuICAgICk6IFByb21pc2U8VE9OQ29udHJhY3RDb252ZXJ0QWRkcmVzc1Jlc3VsdD4ge1xuICAgICAgICByZXR1cm4gdGhpcy5yZXF1ZXN0Q29yZSgnY29udHJhY3RzLmFkZHJlc3MuY29udmVydCcsIHBhcmFtcyk7XG4gICAgfVxuXG4gICAgLy8gSW50ZXJuYWxzXG5cbiAgICBhc3luYyBpbnRlcm5hbERlcGxveU5hdGl2ZShwYXJhbXM6IFRPTkNvbnRyYWN0RGVwbG95UGFyYW1zKTogUHJvbWlzZTxUT05Db250cmFjdERlcGxveVJlc3VsdD4ge1xuICAgICAgICByZXR1cm4gdGhpcy5yZXF1ZXN0Q29yZSgnY29udHJhY3RzLmRlcGxveScsIHtcbiAgICAgICAgICAgIGFiaTogcGFyYW1zLnBhY2thZ2UuYWJpLFxuICAgICAgICAgICAgY29uc3RydWN0b3JIZWFkZXI6IHBhcmFtcy5jb25zdHJ1Y3RvckhlYWRlcixcbiAgICAgICAgICAgIGNvbnN0cnVjdG9yUGFyYW1zOiBwYXJhbXMuY29uc3RydWN0b3JQYXJhbXMsXG4gICAgICAgICAgICBpbml0UGFyYW1zOiBwYXJhbXMuaW5pdFBhcmFtcyxcbiAgICAgICAgICAgIGltYWdlQmFzZTY0OiBwYXJhbXMucGFja2FnZS5pbWFnZUJhc2U2NCxcbiAgICAgICAgICAgIGtleVBhaXI6IHBhcmFtcy5rZXlQYWlyLFxuICAgICAgICB9KTtcbiAgICB9XG5cblxuICAgIGFzeW5jIGludGVybmFsUnVuTmF0aXZlKHBhcmFtczogVE9OQ29udHJhY3RSdW5QYXJhbXMpOiBQcm9taXNlPFRPTkNvbnRyYWN0UnVuUmVzdWx0PiB7XG4gICAgICAgIHJldHVybiB0aGlzLnJlcXVlc3RDb3JlKCdjb250cmFjdHMucnVuJywge1xuICAgICAgICAgICAgYWRkcmVzczogcGFyYW1zLmFkZHJlc3MsXG4gICAgICAgICAgICBhYmk6IHBhcmFtcy5hYmksXG4gICAgICAgICAgICBmdW5jdGlvbk5hbWU6IHBhcmFtcy5mdW5jdGlvbk5hbWUsXG4gICAgICAgICAgICBoZWFkZXI6IHBhcmFtcy5oZWFkZXIsXG4gICAgICAgICAgICBpbnB1dDogcGFyYW1zLmlucHV0LFxuICAgICAgICAgICAga2V5UGFpcjogcGFyYW1zLmtleVBhaXIsXG4gICAgICAgIH0pO1xuICAgIH1cblxuXG4gICAgYXN5bmMgcmV0cnlDYWxsKGNhbGw6IChpbmRleDogbnVtYmVyKSA9PiBQcm9taXNlPGFueT4pOiBQcm9taXNlPGFueT4ge1xuICAgICAgICBjb25zdCByZXRyaWVzQ291bnQgPSB0aGlzLmNvbmZpZy5tZXNzYWdlUmV0cmllc0NvdW50KCk7XG4gICAgICAgIGZvciAobGV0IGkgPSAwOyBpIDw9IHJldHJpZXNDb3VudDsgaSArPSAxKSB7XG4gICAgICAgICAgICBpZiAoaSA+IDApIHtcbiAgICAgICAgICAgICAgICB0aGlzLmNvbmZpZy5sb2coYFJldHJ5ICMke2l9YCk7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICB0cnkge1xuICAgICAgICAgICAgICAgIHJldHVybiBhd2FpdCBjYWxsKGkpO1xuICAgICAgICAgICAgfSBjYXRjaCAoZXJyb3IpIHtcbiAgICAgICAgICAgICAgICAvLyByZXRyeSBpZiBtZXNzYWdlIGV4cGlyZWQgb3IgaWYgcmVzb2x2aW5nIHJldHVybmVkIHRoYXQgbWVzc2FnZSBleHBpcmVkL3JlcGxheVxuICAgICAgICAgICAgICAgIC8vIHByb3RlY3Rpb24gZXJyb3Igb3IgaWYgdHJhbnNhY3Rpb24gd2l0aCBtZXNzYWdlIGV4cGlyZWQvcmVwbGF5IHByb3RlY3Rpb24gZXJyb3JcbiAgICAgICAgICAgICAgICAvLyByZXR1cm5lZFxuICAgICAgICAgICAgICAgIGNvbnN0IHVzZVJldHJ5ID0gZXJyb3IuY29kZSA9PT0gVE9ORXJyb3JDb2RlLk1FU1NBR0VfRVhQSVJFRFxuICAgICAgICAgICAgICAgICAgICB8fCBUT05DbGllbnRFcnJvci5pc09yaWdpbmFsQ29udHJhY3RFcnJvcihlcnJvciwgVE9OQ29udHJhY3RFeGl0Q29kZS5SRVBMQVlfUFJPVEVDVElPTilcbiAgICAgICAgICAgICAgICAgICAgfHwgVE9OQ2xpZW50RXJyb3IuaXNPcmlnaW5hbENvbnRyYWN0RXJyb3IoZXJyb3IsIFRPTkNvbnRyYWN0RXhpdENvZGUuTUVTU0FHRV9FWFBJUkVEKVxuICAgICAgICAgICAgICAgICAgICB8fCBUT05DbGllbnRFcnJvci5pc1Jlc29sdmVkQ29udHJhY3RFcnJvckFmdGVyRXhwaXJlKGVycm9yLCBUT05Db250cmFjdEV4aXRDb2RlLlJFUExBWV9QUk9URUNUSU9OKVxuICAgICAgICAgICAgICAgICAgICB8fCBUT05DbGllbnRFcnJvci5pc1Jlc29sdmVkQ29udHJhY3RFcnJvckFmdGVyRXhwaXJlKGVycm9yLCBUT05Db250cmFjdEV4aXRDb2RlLk1FU1NBR0VfRVhQSVJFRCk7XG4gICAgICAgICAgICAgICAgaWYgKCF1c2VSZXRyeSB8fCBpID09PSByZXRyaWVzQ291bnQpIHtcbiAgICAgICAgICAgICAgICAgICAgdGhyb3cgZXJyb3I7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICAgIHRocm93IFRPTkNsaWVudEVycm9yLmludGVybmFsRXJyb3IoJ0FsbCByZXRyeSBhdHRlbXB0cyBmYWlsZWQnKTtcbiAgICB9XG5cblxuICAgIGFzeW5jIGludGVybmFsRGVwbG95SnMoXG4gICAgICAgIHBhcmFtczogVE9OQ29udHJhY3REZXBsb3lQYXJhbXMsXG4gICAgICAgIHBhcmVudFNwYW4/OiAoU3BhbiB8IFNwYW5Db250ZXh0KSxcbiAgICApOiBQcm9taXNlPFRPTkNvbnRyYWN0RGVwbG95UmVzdWx0PiB7XG4gICAgICAgIHRoaXMuY29uZmlnLmxvZygnRGVwbG95IHN0YXJ0Jyk7XG4gICAgICAgIHJldHVybiB0aGlzLnJldHJ5Q2FsbChhc3luYyAocmV0cnlJbmRleCkgPT4ge1xuICAgICAgICAgICAgY29uc3QgZGVwbG95TWVzc2FnZSA9IGF3YWl0IHRoaXMuY3JlYXRlRGVwbG95TWVzc2FnZShwYXJhbXMsIHJldHJ5SW5kZXgpO1xuICAgICAgICAgICAgaWYgKGF3YWl0IHRoaXMuaXNEZXBsb3llZChkZXBsb3lNZXNzYWdlLmFkZHJlc3MsIHBhcmVudFNwYW4pKSB7XG4gICAgICAgICAgICAgICAgcmV0dXJuIHtcbiAgICAgICAgICAgICAgICAgICAgYWRkcmVzczogZGVwbG95TWVzc2FnZS5hZGRyZXNzLFxuICAgICAgICAgICAgICAgICAgICBhbHJlYWR5RGVwbG95ZWQ6IHRydWUsXG4gICAgICAgICAgICAgICAgfTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGNvbnN0IHByb2Nlc3NpbmcgPSBhd2FpdCB0aGlzLnNlbmRNZXNzYWdlKGRlcGxveU1lc3NhZ2UubWVzc2FnZSwgcGFyZW50U3Bhbik7XG4gICAgICAgICAgICByZXR1cm4gdGhpcy53YWl0Rm9yRGVwbG95VHJhbnNhY3Rpb24oZGVwbG95TWVzc2FnZSwgcHJvY2Vzc2luZywgcGFyZW50U3Bhbik7XG4gICAgICAgIH0pO1xuICAgIH1cblxuXG4gICAgYXN5bmMgaW50ZXJuYWxSdW5KcyhcbiAgICAgICAgcGFyYW1zOiBUT05Db250cmFjdFJ1blBhcmFtcyxcbiAgICAgICAgcGFyZW50U3Bhbj86IChTcGFuIHwgU3BhbkNvbnRleHQpLFxuICAgICk6IFByb21pc2U8VE9OQ29udHJhY3RSdW5SZXN1bHQ+IHtcbiAgICAgICAgdGhpcy5jb25maWcubG9nKCdSdW4gc3RhcnQnKTtcbiAgICAgICAgcmV0dXJuIHRoaXMucmV0cnlDYWxsKGFzeW5jIChyZXRyeUluZGV4KSA9PiB7XG4gICAgICAgICAgICBjb25zdCBydW5NZXNzYWdlID0gYXdhaXQgdGhpcy5jcmVhdGVSdW5NZXNzYWdlKHBhcmFtcywgcmV0cnlJbmRleCk7XG4gICAgICAgICAgICBjb25zdCBwcm9jZXNzaW5nID0gYXdhaXQgdGhpcy5zZW5kTWVzc2FnZShydW5NZXNzYWdlLm1lc3NhZ2UsIHBhcmVudFNwYW4pO1xuICAgICAgICAgICAgcmV0dXJuIHRoaXMud2FpdEZvclJ1blRyYW5zYWN0aW9uKHJ1bk1lc3NhZ2UsIHByb2Nlc3NpbmcsIHBhcmVudFNwYW4pO1xuICAgICAgICB9KTtcbiAgICB9XG5cblxuICAgIGFzeW5jIGdldEFjY291bnQoXG4gICAgICAgIGFkZHJlc3M6IHN0cmluZyxcbiAgICAgICAgYWN0aXZlOiBib29sZWFuLFxuICAgICAgICB3YWl0UGFyYW1zPzogVE9OQ29udHJhY3RBY2NvdW50V2FpdFBhcmFtcyxcbiAgICAgICAgcGFyZW50U3Bhbj86IChTcGFuIHwgU3BhbkNvbnRleHQpLFxuICAgICk6IFByb21pc2U8UUFjY291bnQ+IHtcbiAgICAgICAgY29uc3QgZmlsdGVyOiB7IFtzdHJpbmddOiBhbnkgfSA9IHtcbiAgICAgICAgICAgIGlkOiB7IGVxOiBhZGRyZXNzIH0sXG4gICAgICAgIH07XG4gICAgICAgIGlmICh3YWl0UGFyYW1zICYmIHdhaXRQYXJhbXMudHJhbnNhY3Rpb25MdCkge1xuICAgICAgICAgICAgZmlsdGVyLmxhc3RfdHJhbnNfbHQgPSB7IGdlOiB3YWl0UGFyYW1zLnRyYW5zYWN0aW9uTHQgfTtcbiAgICAgICAgfVxuICAgICAgICBpZiAoYWN0aXZlKSB7XG4gICAgICAgICAgICBmaWx0ZXIuYWNjX3R5cGUgPSB7IGVxOiBRQWNjb3VudFR5cGUuYWN0aXZlIH07XG4gICAgICAgIH1cblxuICAgICAgICB0aGlzLmNvbmZpZy5sb2coJ2dldEFjY291bnQuIEZpbHRlcicsIGZpbHRlcik7XG4gICAgICAgIGNvbnN0IGFjY291bnRzID0gYXdhaXQgdGhpcy5xdWVyaWVzLmFjY291bnRzLnF1ZXJ5KHtcbiAgICAgICAgICAgIGZpbHRlcixcbiAgICAgICAgICAgIHJlc3VsdDogJ2lkIGFjY190eXBlIGJvYyBjb2RlX2hhc2ggZGF0YV9oYXNoIGJhbGFuY2UgYmFsYW5jZV9vdGhlciB7IGN1cnJlbmN5IHZhbHVlIH0gbGFzdF9wYWlkJyxcbiAgICAgICAgICAgIC4uLih3YWl0UGFyYW1zICYmIHdhaXRQYXJhbXMudGltZW91dCA/IHsgdGltZW91dDogd2FpdFBhcmFtcy50aW1lb3V0IH0gOiB7fSksXG4gICAgICAgICAgICBwYXJlbnRTcGFuLFxuICAgICAgICB9KTtcbiAgICAgICAgaWYgKGFjY291bnRzLmxlbmd0aCA9PT0gMCkge1xuICAgICAgICAgICAgdGhyb3cgVE9OQ2xpZW50RXJyb3IuYWNjb3VudE1pc3NpbmcoYWRkcmVzcyk7XG4gICAgICAgIH1cbiAgICAgICAgY29uc3QgYWNjb3VudCA9IGFjY291bnRzWzBdO1xuICAgICAgICByZW1vdmVUeXBlTmFtZShhY2NvdW50KTtcbiAgICAgICAgdGhpcy5jb25maWcubG9nKCdnZXRBY2NvdW50LiBBY2NvdW50IHJlY2VpdmVkJywgYWNjb3VudCk7XG4gICAgICAgIHJldHVybiBhY2NvdW50O1xuICAgIH1cblxuICAgIGFzeW5jIGludGVybmFsUnVuTG9jYWxKcyhcbiAgICAgICAgcGFyYW1zOiBUT05Db250cmFjdFJ1bkxvY2FsUGFyYW1zLFxuICAgICAgICBwYXJlbnRTcGFuPzogKFNwYW4gfCBTcGFuQ29udGV4dCksXG4gICAgKTogUHJvbWlzZTxUT05Db250cmFjdFJ1bkxvY2FsUmVzdWx0PiB7XG4gICAgICAgIGNvbnN0IGFkZHJlc3MgPSBwYXJhbXMuYWRkcmVzcztcbiAgICAgICAgaWYgKCFhZGRyZXNzKSB7XG4gICAgICAgICAgICB0aHJvdyBUT05DbGllbnRFcnJvci5hZGRyZXNzUmVxdWlyZWRGb3JSdW5Mb2NhbCgpO1xuICAgICAgICB9XG4gICAgICAgIGNvbnN0IGFjY291bnQgPSBwYXJhbXMuYWNjb3VudCB8fCAoYXdhaXQgdGhpcy5nZXRBY2NvdW50KFxuICAgICAgICAgICAgYWRkcmVzcyxcbiAgICAgICAgICAgIGZhbHNlLFxuICAgICAgICAgICAgcGFyYW1zLndhaXRQYXJhbXMsXG4gICAgICAgICAgICBwYXJlbnRTcGFuLFxuICAgICAgICApKTtcbiAgICAgICAgaWYgKCFhY2NvdW50LmNvZGVfaGFzaCkge1xuICAgICAgICAgICAgdGhyb3cgVE9OQ2xpZW50RXJyb3IuYWNjb3VudENvZGVNaXNzaW5nKGFkZHJlc3MsIChhY2NvdW50OiBhbnkpLmJhbGFuY2UpO1xuICAgICAgICB9XG4gICAgICAgIHJldHVybiB0aGlzLnJlcXVlc3RDb3JlKCdjb250cmFjdHMucnVuLmxvY2FsJywge1xuICAgICAgICAgICAgYWRkcmVzcyxcbiAgICAgICAgICAgIGFjY291bnQsXG4gICAgICAgICAgICBhYmk6IHBhcmFtcy5hYmksXG4gICAgICAgICAgICBmdW5jdGlvbk5hbWU6IHBhcmFtcy5mdW5jdGlvbk5hbWUsXG4gICAgICAgICAgICBpbnB1dDogcGFyYW1zLmlucHV0LFxuICAgICAgICAgICAga2V5UGFpcjogcGFyYW1zLmtleVBhaXIsXG4gICAgICAgICAgICBmdWxsUnVuOiBwYXJhbXMuZnVsbFJ1bixcbiAgICAgICAgfSk7XG4gICAgfVxuXG4gICAgYXN5bmMgaW50ZXJuYWxSdW5NZXNzYWdlTG9jYWxKcyhcbiAgICAgICAgcGFyYW1zOiBUT05Db250cmFjdFJ1bk1lc3NhZ2VMb2NhbFBhcmFtcyxcbiAgICAgICAgcGFyZW50U3Bhbj86IChTcGFuIHwgU3BhbkNvbnRleHQpLFxuICAgICk6IFByb21pc2U8VE9OQ29udHJhY3RSdW5Mb2NhbFJlc3VsdD4ge1xuICAgICAgICBjb25zdCBhZGRyZXNzID0gcGFyYW1zLmFkZHJlc3M7XG4gICAgICAgIGlmICghYWRkcmVzcykge1xuICAgICAgICAgICAgdGhyb3cgVE9OQ2xpZW50RXJyb3IuYWRkcmVzc1JlcXVpcmVkRm9yUnVuTG9jYWwoKTtcbiAgICAgICAgfVxuICAgICAgICBjb25zdCBhY2NvdW50ID0gcGFyYW1zLmFjY291bnQgfHwgKGF3YWl0IHRoaXMuZ2V0QWNjb3VudChcbiAgICAgICAgICAgIGFkZHJlc3MsXG4gICAgICAgICAgICBmYWxzZSxcbiAgICAgICAgICAgIHBhcmFtcy53YWl0UGFyYW1zLFxuICAgICAgICAgICAgcGFyZW50U3BhbixcbiAgICAgICAgKSk7XG4gICAgICAgIGlmICghYWNjb3VudC5jb2RlX2hhc2gpIHtcbiAgICAgICAgICAgIHRocm93IFRPTkNsaWVudEVycm9yLmFjY291bnRDb2RlTWlzc2luZyhhZGRyZXNzLCAoYWNjb3VudDogYW55KS5iYWxhbmNlKTtcbiAgICAgICAgfVxuICAgICAgICByZXR1cm4gdGhpcy5yZXF1ZXN0Q29yZSgnY29udHJhY3RzLnJ1bi5sb2NhbC5tc2cnLCB7XG4gICAgICAgICAgICBhZGRyZXNzLFxuICAgICAgICAgICAgYWNjb3VudCxcbiAgICAgICAgICAgIGFiaTogcGFyYW1zLmFiaSxcbiAgICAgICAgICAgIGZ1bmN0aW9uTmFtZTogcGFyYW1zLmZ1bmN0aW9uTmFtZSxcbiAgICAgICAgICAgIG1lc3NhZ2VCYXNlNjQ6IHBhcmFtcy5tZXNzYWdlQm9keUJhc2U2NCxcbiAgICAgICAgICAgIGZ1bGxSdW46IHBhcmFtcy5mdWxsUnVuLFxuICAgICAgICB9KTtcbiAgICB9XG59XG5cblRPTkNvbnRyYWN0c01vZHVsZS5tb2R1bGVOYW1lID0gJ1RPTkNvbnRyYWN0c01vZHVsZSc7XG5cbmNvbnN0IHRyYW5zYWN0aW9uRGV0YWlscyA9IGBcbiAgICBpZFxuICAgIGluX21zZ1xuICAgIHRyX3R5cGVcbiAgICBzdGF0dXNcbiAgICBpbl9tc2dcbiAgICBvdXRfbXNnc1xuICAgIGJsb2NrX2lkXG4gICAgbm93XG4gICAgYWJvcnRlZFxuICAgIGx0XG4gICAgdG90YWxfZmVlc1xuICAgIHN0b3JhZ2Uge1xuICAgICAgICBzdGF0dXNfY2hhbmdlXG4gICAgICAgIHN0b3JhZ2VfZmVlc19jb2xsZWN0ZWRcbiAgICB9XG4gICAgY29tcHV0ZSB7XG4gICAgICAgIGNvbXB1dGVfdHlwZVxuICAgICAgICBza2lwcGVkX3JlYXNvblxuICAgICAgICBzdWNjZXNzXG4gICAgICAgIGV4aXRfY29kZVxuICAgICAgICBnYXNfZmVlc1xuICAgICAgICBnYXNfdXNlZFxuICAgIH1cbiAgICBhY3Rpb24ge1xuICAgICAgICBzdWNjZXNzXG4gICAgICAgIHZhbGlkXG4gICAgICAgIHJlc3VsdF9jb2RlXG4gICAgICAgIG5vX2Z1bmRzXG4gICAgICAgIHRvdGFsX2Z3ZF9mZWVzXG4gICAgICAgIHRvdGFsX2FjdGlvbl9mZWVzXG4gICAgfVxuICAgIG91dF9tZXNzYWdlcyB7XG4gICAgICAgIGlkXG4gICAgICAgIG1zZ190eXBlXG4gICAgICAgIGJvZHlcbiAgICAgICAgdmFsdWVcbiAgICB9XG4gICBgO1xuXG5jb25zdCBCTE9DS19GSUVMRFMgPSBgXG4gICAgaWRcbiAgICBnZW5fdXRpbWVcbiAgICBhZnRlcl9zcGxpdFxuICAgIHdvcmtjaGFpbl9pZFxuICAgIHNoYXJkXG4gICAgaW5fbXNnX2Rlc2NyIHtcbiAgICAgICAgbXNnX2lkXG4gICAgICAgIHRyYW5zYWN0aW9uX2lkXG4gICAgfVxuYDtcblxuY29uc3QgVFJBTlNBQ1RJT05fRklFTERTX09SRElOQVJZID0gYFxuICAgIGlkXG4gICAgYWJvcnRlZFxuICAgIGNvbXB1dGUge1xuICAgICAgICBza2lwcGVkX3JlYXNvblxuICAgICAgICBleGl0X2NvZGVcbiAgICAgICAgc3VjY2Vzc1xuICAgICAgICBnYXNfZmVlc1xuICAgIH1cbiAgICBzdG9yYWdlIHtcbiAgICAgICBzdGF0dXNfY2hhbmdlXG4gICAgICAgc3RvcmFnZV9mZWVzX2NvbGxlY3RlZFxuICAgIH1cbiAgICBhY3Rpb24ge1xuICAgICAgICBzdWNjZXNzXG4gICAgICAgIHZhbGlkXG4gICAgICAgIG5vX2Z1bmRzXG4gICAgICAgIHJlc3VsdF9jb2RlXG4gICAgICAgIHRvdGFsX2Z3ZF9mZWVzXG4gICAgICAgIHRvdGFsX2FjdGlvbl9mZWVzXG4gICAgfVxuICAgIGluX21zZ1xuICAgIG5vd1xuICAgIG91dF9tc2dzXG4gICAgb3V0X21lc3NhZ2VzIHtcbiAgICAgICAgaWRcbiAgICAgICAgYm9keVxuICAgICAgICBtc2dfdHlwZVxuICAgICAgICB2YWx1ZVxuICAgIH1cbiAgICBzdGF0dXNcbiAgICB0b3RhbF9mZWVzXG5gO1xuIl19