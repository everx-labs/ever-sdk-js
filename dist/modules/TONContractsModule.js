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
        var coreParams, address, account, hasCode;
        return _regenerator["default"].wrap(function _callee11$(_context11) {
          while (1) {
            switch (_context11.prev = _context11.next) {
              case 0:
                coreParams = params;

                if (!(!params.codeBase64 || !params.dataBase64)) {
                  _context11.next = 16;
                  break;
                }

                address = params.address;

                if (address) {
                  _context11.next = 5;
                  break;
                }

                throw _TONClient.TONClientError.addressRequiredForRunLocal();

              case 5:
                _context11.next = 7;
                return this.getAccount(address, false, {
                  timeout: this.config.waitForTimeout()
                });

              case 7:
                account = _context11.sent;
                hasCode = account.code || account.code_hash;

                if (hasCode) {
                  _context11.next = 11;
                  break;
                }

                throw _TONClient.TONClientError.accountCodeMissing(address, account.balance);

              case 11:
                account.codeBase64 = account.code;
                account.dataBase64 = account.data;
                delete account.code;
                delete account.data;
                coreParams = _objectSpread(_objectSpread({}, account), params);

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
                  result: 'id acc_type balance balance_other { currency value } code data last_paid',
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
                  result: 'id acc_type code data balance balance_other { currency value } last_paid'
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
        var address, account, hasCode;
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
                hasCode = account.code || account.code_hash;

                if (hasCode) {
                  _context61.next = 12;
                  break;
                }

                throw _TONClient.TONClientError.accountCodeMissing(address, account.balance);

              case 12:
                return _context61.abrupt("return", this.requestCore('contracts.run.local', {
                  address: address,
                  account: account,
                  abi: params.abi,
                  functionName: params.functionName,
                  input: params.input,
                  keyPair: params.keyPair,
                  fullRun: params.fullRun
                }));

              case 13:
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
        var address, account, hasCode;
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
                hasCode = account.code || account.code_hash;

                if (hasCode) {
                  _context62.next = 12;
                  break;
                }

                throw _TONClient.TONClientError.accountCodeMissing(address, account.balance);

              case 12:
                return _context62.abrupt("return", this.requestCore('contracts.run.local.msg', {
                  address: address,
                  account: account,
                  abi: params.abi,
                  functionName: params.functionName,
                  messageBase64: params.messageBodyBase64,
                  fullRun: params.fullRun
                }));

              case 13:
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy9tb2R1bGVzL1RPTkNvbnRyYWN0c01vZHVsZS5qcyJdLCJuYW1lcyI6WyJUT05BZGRyZXNzU3RyaW5nVmFyaWFudCIsIkFjY291bnRJZCIsIkhleCIsIkJhc2U2NCIsIlRPTkNsaWVudFRyYW5zYWN0aW9uUGhhc2UiLCJzdG9yYWdlIiwiY29tcHV0ZVNraXBwZWQiLCJjb21wdXRlVm0iLCJhY3Rpb24iLCJ1bmtub3duIiwiVE9OQ2xpZW50Q29tcHV0ZVNraXBwZWRTdGF0dXMiLCJub1N0YXRlIiwiYmFkU3RhdGUiLCJub0dhcyIsIlRPTkNsaWVudFN0b3JhZ2VTdGF0dXMiLCJ1bmNoYW5nZWQiLCJmcm96ZW4iLCJkZWxldGVkIiwiUUluTXNnVHlwZSIsImV4dGVybmFsIiwiaWhyIiwiaW1tZWRpYXRlbHkiLCJ0cmFuc2l0IiwiZGlzY2FyZGVkRmluYWwiLCJkaXNjYXJkZWRUcmFuc2l0IiwiUU91dE1zZ1R5cGUiLCJvdXRNc2dOZXciLCJkZXF1ZXVlSW1tZWRpYXRlbHkiLCJkZXF1ZXVlIiwidHJhbnNpdFJlcXVpcmVkIiwibm9uZSIsIlFNZXNzYWdlVHlwZSIsImludGVybmFsIiwiZXh0SW4iLCJleHRPdXQiLCJRTWVzc2FnZVByb2Nlc3NpbmdTdGF0dXMiLCJxdWV1ZWQiLCJwcm9jZXNzaW5nIiwicHJlbGltaW5hcnkiLCJwcm9wb3NlZCIsImZpbmFsaXplZCIsInJlZnVzZWQiLCJ0cmFuc2l0aW5nIiwiUUJsb2NrUHJvY2Vzc2luZ1N0YXR1cyIsIlFTcGxpdFR5cGUiLCJzcGxpdCIsIm1lcmdlIiwiUUFjY291bnRUeXBlIiwidW5pbml0IiwiYWN0aXZlIiwiUVRyYW5zYWN0aW9uVHlwZSIsIm9yZGluYXJ5IiwidGljayIsInRvY2siLCJzcGxpdFByZXBhcmUiLCJzcGxpdEluc3RhbGwiLCJtZXJnZVByZXBhcmUiLCJtZXJnZUluc3RhbGwiLCJRVHJhbnNhY3Rpb25Qcm9jZXNzaW5nU3RhdHVzIiwiUUFjY291bnRTdGF0dXMiLCJub25FeGlzdCIsIlFBY2NvdW50U3RhdHVzQ2hhbmdlIiwiUUNvbXB1dGVUeXBlIiwic2tpcHBlZCIsInZtIiwiUVNraXBSZWFzb24iLCJRQm91bmNlVHlwZSIsIm5lZ0Z1bmRzIiwibm9GdW5kcyIsIm9rIiwiTUFTVEVSQ0hBSU5fSUQiLCJFWFRSQV9UUkFOU0FDVElPTl9XQUlUSU5HX1RJTUUiLCJCTE9DS19UUkFOU0FDVElPTl9XQUlUSU5HX1RJTUUiLCJyZW1vdmVUeXBlTmFtZSIsIm9iaiIsIl9fdHlwZW5hbWUiLCJPYmplY3QiLCJ2YWx1ZXMiLCJmb3JFYWNoIiwidmFsdWUiLCJyZW1vdmVQcm9wcyIsInBhdGhzIiwicmVzdWx0IiwicGF0aCIsImRvdFBvcyIsImluZGV4T2YiLCJuYW1lIiwic3Vic3RyIiwiY2hpbGQiLCJyZWR1Y2VkQ2hpbGQiLCJzdGFydE1lc3NhZ2VUcmFjZVNwYW4iLCJ0cmFjZXIiLCJtZXNzYWdlSWQiLCJvcGVyYXRpb25OYW1lIiwidGFncyIsInRyYWNlSWQiLCJzcGFuSWQiLCJyb290Q29udGV4dCIsImV4dHJhY3QiLCJGT1JNQVRfVEVYVF9NQVAiLCJzdGFydFNwYW4iLCJjaGlsZE9mIiwidHJhY2VNZXNzYWdlIiwic3BhbiIsImZpbmlzaCIsIlRPTkNvbnRyYWN0c01vZHVsZSIsImNvbmZpZyIsImNvbnRleHQiLCJnZXRNb2R1bGUiLCJUT05Db25maWdNb2R1bGUiLCJxdWVyaWVzIiwiVE9OUXVlcmllc01vZHVsZSIsInBhcmFtcyIsInBhcmVudFNwYW4iLCJhY2NvdW50cyIsInF1ZXJ5IiwiZmlsdGVyIiwiaWQiLCJlcSIsImFkZHJlc3MiLCJsZW5ndGgiLCJiYWxhbmNlR3JhbXMiLCJiYWxhbmNlIiwidHJhY2UiLCJzZXRUYWciLCJpbnRlcm5hbERlcGxveUpzIiwiaW50ZXJuYWxSdW5KcyIsImludGVybmFsUnVuTG9jYWxKcyIsImludGVybmFsUnVuTWVzc2FnZUxvY2FsSnMiLCJjb3JlUGFyYW1zIiwiY29kZUJhc2U2NCIsImRhdGFCYXNlNjQiLCJUT05DbGllbnRFcnJvciIsImFkZHJlc3NSZXF1aXJlZEZvclJ1bkxvY2FsIiwiZ2V0QWNjb3VudCIsInRpbWVvdXQiLCJ3YWl0Rm9yVGltZW91dCIsImFjY291bnQiLCJoYXNDb2RlIiwiY29kZSIsImNvZGVfaGFzaCIsImFjY291bnRDb2RlTWlzc2luZyIsImRhdGEiLCJyZXF1ZXN0Q29yZSIsImNvbnMiLCJpdGVtIiwiaW52YWxpZENvbnMiLCJwdXNoIiwicmV0cnlJbmRleCIsImxvZyIsImFiaSIsImNvbnN0cnVjdG9ySGVhZGVyIiwiY29uc3RydWN0b3JQYXJhbXMiLCJpbml0UGFyYW1zIiwiaW1hZ2VCYXNlNjQiLCJrZXlQYWlyIiwid29ya2NoYWluSWQiLCJtZXNzYWdlIiwiZnVuY3Rpb25OYW1lIiwiaGVhZGVyIiwidHJ5SW5kZXgiLCJpbnB1dCIsInB1YmxpY0tleUhleCIsImFkZHJlc3NIZXgiLCJzaWduUGFyYW1zIiwiZW5jb2RlZCIsImNyZWF0ZVNpZ25lZE1lc3NhZ2UiLCJ1bnNpZ25lZE1lc3NhZ2UiLCJ1bnNpZ25lZEJ5dGVzQmFzZTY0Iiwic2lnbkJ5dGVzQmFzZTY0IiwiZXhwaXJlIiwiZ2V0Qm9jSGFzaCIsImJvY0Jhc2U2NCIsIm1lc3NhZ2VCb2R5QmFzZTY0IiwiaGFzaCIsIkRhdGUiLCJub3ciLCJzZW5kTm9kZVJlcXVlc3RGYWlsZWQiLCJNYXRoIiwic2VydmVyVGltZURlbHRhIiwiYWJzIiwib3V0T2ZTeW5jVGhyZXNob2xkIiwiZHJvcFNlcnZlclRpbWVEZWx0YSIsImNsb2NrT3V0T2ZTeW5jIiwiZmluZExhc3RTaGFyZEJsb2NrIiwibGFzdEJsb2NrSWQiLCJlbnN1cmVNZXNzYWdlSWQiLCJpZEJhc2U2NCIsIkJ1ZmZlciIsImZyb20iLCJ0b1N0cmluZyIsIm1lc3NhZ2VTcGFuIiwic3RhcnRSb290U3BhbiIsImFkZFRhZ3MiLCJtZXNzYWdlU2l6ZSIsImNlaWwiLCJwb3N0UmVxdWVzdHMiLCJib2R5Iiwic2VuZGluZ1RpbWUiLCJyb3VuZCIsInJlc3VsdEZpZWxkcyIsInNlbmRNZXNzYWdlIiwid2FpdEZvclRyYW5zYWN0aW9uIiwibWVzc2FnZVByb2Nlc3NpbmdTdGF0ZSIsInRyYW5zYWN0aW9uIiwiY2hhaW4iLCJhZGRpdGlvbmFsRmlsdGVyIiwiYmxvY2tzIiwid29ya2NoYWluX2lkIiwib3JkZXJCeSIsImRpcmVjdGlvbiIsImxpbWl0Iiwic2hhcmRzIiwiYWRkcmVzc1BhcnRzIiwid29ya2NoYWluIiwiTnVtYmVyIiwicGFyc2VJbnQiLCJmaW5kTGFzdEJsb2NrIiwibWFzdGVyY2hhaW5MYXN0QmxvY2siLCJub0Jsb2NrcyIsIndvcmtjaGFpbkxhc3RCbG9jayIsImFmdGVyX21lcmdlIiwic2hhcmQiLCJpbnZhbGlkQmxvY2tjaGFpbiIsIm1hc3RlciIsInNoYXJkX2hhc2hlcyIsImZpbmRNYXRjaGluZ1NoYXJkIiwic2hhcmRCbG9jayIsInJvb3RfaGFzaCIsImRlc2NyIiwiYmxvY2siLCJjdXJyZW50Iiwid2FpdEZvciIsInByZXZfcmVmIiwiQkxPQ0tfRklFTERTIiwiYWZ0ZXJfc3BsaXQiLCJjaGVja1NoYXJkTWF0Y2giLCJuZSIsInRvdGFsU3RhcnQiLCJ0aW1lUmVwb3J0Iiwic3RvcFRpbWUiLCJtZXNzYWdlUHJvY2Vzc2luZ1RpbWVvdXQiLCJpbmZpbml0ZVdhaXQiLCJhZGRUaW1lb3V0IiwibWF4Iiwic3RhcnQiLCJ3YWl0TmV4dEJsb2NrIiwiZW5kIiwiZ2VuX3V0aW1lIiwicmVzb2x2ZWRFcnJvciIsIlRPTkVycm9yQ29kZSIsIldBSVRfRk9SX1RJTUVPVVQiLCJuZXR3b3JrU2lsZW50IiwiYmxvY2tJZCIsImluTXNnIiwiaW5fbXNnX2Rlc2NyIiwiZmluZCIsIngiLCJtc2dfaWQiLCJ0cmFuc2FjdGlvbklkIiwidHJhbnNhY3Rpb25faWQiLCJ0clN0YXJ0IiwidHJhbnNhY3Rpb25zIiwiVFJBTlNBQ1RJT05fRklFTERTX09SRElOQVJZIiwiTUFYX1RJTUVPVVQiLCJtZXNzYWdlRXhwaXJlZCIsImJsb2NrVGltZSIsInRyYW5zYWN0aW9uV2FpdFRpbWVvdXQiLCJzcGxpY2UiLCJqb2luIiwiTUVTU0FHRV9FWFBJUkVEIiwiVFJBTlNBQ1RJT05fV0FJVF9USU1FT1VUIiwicmVzb2x2ZURldGFpbGVkRXJyb3IiLCJwcm9jZXNzVHJhbnNhY3Rpb24iLCJwcm9jZXNzaW5nVGltZW91dCIsInByb21pc2VzIiwiZ2V0U2VydmVySW5mbyIsInNlcnZlckluZm8iLCJvcGVyYXRpb25JZCIsInN1cHBvcnRzT3BlcmF0aW9uSWQiLCJnZW5lcmF0ZU9wZXJhdGlvbklkIiwidW5kZWZpbmVkIiwiYmxvY2tUaW1lb3V0Iiwid2FpdEV4cGlyZWQiLCJtaW5fc2hhcmRfZ2VuX3V0aW1lIiwiZ2UiLCJpc1dhaXRGb3JUaW1lb3V0IiwibXNnIiwiaW50ZXJuYWxFcnJvciIsIlByb21pc2UiLCJyZXNvbHZlIiwicmVqZWN0IiwiaW5fbXNnIiwic3RhdHVzIiwidHJhbnNhY3Rpb25EZXRhaWxzIiwicmFjZSIsImZpbmlzaE9wZXJhdGlvbnMiLCJ0cmFuc2FjdGlvbk5vdyIsImJsb2NrX2lkIiwidG9JU09TdHJpbmciLCJpc01lc3NhZ2VFeHBpcmVkIiwiaXNDbGllbnRFcnJvciIsImRldGFpbGVkRXJyb3IiLCJvdXRwdXQiLCJmZWVzIiwiYWNjb3VudE1pc3NpbmciLCJlcnJvciIsIm1lc3NhZ2VCYXNlNjQiLCJ0aW1lIiwibWFpbkVycm9yIiwiYWNjX3R5cGUiLCJpc0RlcGxveWVkIiwiYWxyZWFkeURlcGxveWVkIiwid2FpdEZvckRlcGxveVRyYW5zYWN0aW9uIiwiZGVwbG95TWVzc2FnZSIsInJ1bk1lc3NhZ2UiLCJ3YWl0Rm9yUnVuVHJhbnNhY3Rpb24iLCJ3YWl0UGFyYW1zIiwiZW11bGF0ZUJhbGFuY2UiLCJiaWdCYWxhbmNlIiwiY3JlYXRlRGVwbG95TWVzc2FnZSIsImNhbGNNc2dQcm9jZXNzRmVlcyIsIm5ld0FjY291bnQiLCJsYXN0X3BhaWQiLCJmbG9vciIsImNhbGwiLCJyZXRyaWVzQ291bnQiLCJtZXNzYWdlUmV0cmllc0NvdW50IiwiaSIsInVzZVJldHJ5IiwiaXNPcmlnaW5hbENvbnRyYWN0RXJyb3IiLCJUT05Db250cmFjdEV4aXRDb2RlIiwiUkVQTEFZX1BST1RFQ1RJT04iLCJpc1Jlc29sdmVkQ29udHJhY3RFcnJvckFmdGVyRXhwaXJlIiwicmV0cnlDYWxsIiwiY3JlYXRlUnVuTWVzc2FnZSIsInRyYW5zYWN0aW9uTHQiLCJsYXN0X3RyYW5zX2x0IiwiZnVsbFJ1biIsIlRPTk1vZHVsZSIsIm1vZHVsZU5hbWUiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7QUFLQTs7QUFzREE7O0FBQ0E7O0FBQ0E7O0FBQ0E7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFFTyxJQUFNQSx1QkFBdUIsR0FBRztBQUNuQ0MsRUFBQUEsU0FBUyxFQUFFLFdBRHdCO0FBRW5DQyxFQUFBQSxHQUFHLEVBQUUsS0FGOEI7QUFHbkNDLEVBQUFBLE1BQU0sRUFBRTtBQUgyQixDQUFoQzs7QUFNQSxJQUFNQyx5QkFBeUIsR0FBRztBQUNyQ0MsRUFBQUEsT0FBTyxFQUFFLFNBRDRCO0FBRXJDQyxFQUFBQSxjQUFjLEVBQUUsZ0JBRnFCO0FBR3JDQyxFQUFBQSxTQUFTLEVBQUUsV0FIMEI7QUFJckNDLEVBQUFBLE1BQU0sRUFBRSxRQUo2QjtBQUtyQ0MsRUFBQUEsT0FBTyxFQUFFO0FBTDRCLENBQWxDOztBQVFBLElBQU1DLDZCQUE2QixHQUFHO0FBQ3pDQyxFQUFBQSxPQUFPLEVBQUUsQ0FEZ0M7QUFFekNDLEVBQUFBLFFBQVEsRUFBRSxDQUYrQjtBQUd6Q0MsRUFBQUEsS0FBSyxFQUFFO0FBSGtDLENBQXRDOztBQU1BLElBQU1DLHNCQUFzQixHQUFHO0FBQ2xDQyxFQUFBQSxTQUFTLEVBQUUsQ0FEdUI7QUFFbENDLEVBQUFBLE1BQU0sRUFBRSxDQUYwQjtBQUdsQ0MsRUFBQUEsT0FBTyxFQUFFO0FBSHlCLENBQS9COztBQU1BLElBQU1DLFVBQVUsR0FBRztBQUN0QkMsRUFBQUEsUUFBUSxFQUFFLENBRFk7QUFFdEJDLEVBQUFBLEdBQUcsRUFBRSxDQUZpQjtBQUd0QkMs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Iiwic291cmNlc0NvbnRlbnQiOlsiLypcbiAqIENvcHlyaWdodCAyMDE4LTIwMjAgVE9OIERFViBTT0xVVElPTlMgTFRELlxuICovXG4vLyBAZmxvd1xuXG5pbXBvcnQgeyBUcmFjZXIsIEZPUk1BVF9URVhUX01BUCwgU3BhbiwgU3BhbkNvbnRleHQgfSBmcm9tICdvcGVudHJhY2luZyc7XG5pbXBvcnQgdHlwZSB7XG4gICAgUUFjY291bnQsXG4gICAgUUJsb2NrLFxuICAgIFFNZXNzYWdlLFxuICAgIFFUcmFuc2FjdGlvbixcbiAgICBUT05Db250cmFjdEFCSSxcbiAgICBUT05Db250cmFjdEFjY291bnRXYWl0UGFyYW1zLFxuICAgIFRPTkNvbnRyYWN0Q29udmVydEFkZHJlc3NQYXJhbXMsXG4gICAgVE9OQ29udHJhY3RDb252ZXJ0QWRkcmVzc1Jlc3VsdCxcbiAgICBUT05Db250cmFjdENyZWF0ZVJ1bkJvZHlQYXJhbXMsXG4gICAgVE9OQ29udHJhY3RDcmVhdGVSdW5Cb2R5UmVzdWx0LFxuICAgIFRPTkNvbnRyYWN0Q3JlYXRlU2lnbmVkRGVwbG95TWVzc2FnZVBhcmFtcyxcbiAgICBUT05Db250cmFjdENyZWF0ZVNpZ25lZE1lc3NhZ2VQYXJhbXMsXG4gICAgVE9OQ29udHJhY3RDcmVhdGVTaWduZWRSdW5NZXNzYWdlUGFyYW1zLFxuICAgIFRPTkNvbnRyYWN0RGVjb2RlTWVzc2FnZUJvZHlQYXJhbXMsXG4gICAgVE9OQ29udHJhY3REZWNvZGVNZXNzYWdlQm9keVJlc3VsdCxcbiAgICBUT05Db250cmFjdERlY29kZVJ1bk91dHB1dFBhcmFtcyxcbiAgICBUT05Db250cmFjdERlcGxveU1lc3NhZ2UsXG4gICAgVE9OQ29udHJhY3REZXBsb3lQYXJhbXMsXG4gICAgVE9OQ29udHJhY3REZXBsb3lSZXN1bHQsXG4gICAgVE9OQ29udHJhY3RDYWxjRGVwbG95RmVlUGFyYW1zLFxuICAgIFRPTkNvbnRyYWN0Qm9jLFxuICAgIFRPTkNvbnRyYWN0R2V0Qm9jSGFzaFJlc3VsdCxcbiAgICBUT05Db250cmFjdEdldENvZGVGcm9tSW1hZ2VQYXJhbXMsXG4gICAgVE9OQ29udHJhY3RHZXRDb2RlRnJvbUltYWdlUmVzdWx0LFxuICAgIFRPTkNvbnRyYWN0R2V0RGVwbG95RGF0YVBhcmFtcyxcbiAgICBUT05Db250cmFjdEdldERlcGxveURhdGFSZXN1bHQsXG4gICAgVE9OQ29udHJhY3RHZXRGdW5jdGlvbklkUGFyYW1zLFxuICAgIFRPTkNvbnRyYWN0R2V0RnVuY3Rpb25JZFJlc3VsdCxcbiAgICBUT05Db250cmFjdExvYWRQYXJhbXMsXG4gICAgVE9OQ29udHJhY3RMb2FkUmVzdWx0LFxuICAgIFRPTkNvbnRyYWN0Q2FsY1J1bkZlZVBhcmFtcyxcbiAgICBUT05Db250cmFjdENhbGNGZWVSZXN1bHQsXG4gICAgVE9OQ29udHJhY3RDYWxjTXNnUHJvY2Vzc2luZ0ZlZXNQYXJhbXMsXG4gICAgVE9OQ29udHJhY3RNZXNzYWdlLFxuICAgIFRPTkNvbnRyYWN0UnVuTG9jYWxQYXJhbXMsXG4gICAgVE9OQ29udHJhY3RSdW5NZXNzYWdlLFxuICAgIFRPTkNvbnRyYWN0UnVuUGFyYW1zLFxuICAgIFRPTkNvbnRyYWN0UnVuUmVzdWx0LFxuICAgIFRPTkNvbnRyYWN0cyxcbiAgICBUT05Db250cmFjdFVuc2lnbmVkRGVwbG95TWVzc2FnZSxcbiAgICBUT05Db250cmFjdFVuc2lnbmVkTWVzc2FnZSxcbiAgICBUT05Db250cmFjdFVuc2lnbmVkUnVuTWVzc2FnZSxcbiAgICBUT05Db250cmFjdFJ1bkdldFBhcmFtcyxcbiAgICBUT05Db250cmFjdFJ1bkdldFJlc3VsdCxcbiAgICBUT05Db250cmFjdFJ1bk1lc3NhZ2VMb2NhbFBhcmFtcyxcbiAgICBUT05Db250cmFjdFJ1bkxvY2FsUmVzdWx0LFxuICAgIFRPTkNvbnRyYWN0VHJhbnNhY3Rpb25GZWVzLFxuICAgIFRPTldhaXRGb3JUcmFuc2FjdGlvblBhcmFtcyxcbiAgICBRU2hhcmRIYXNoLFxuICAgIFRPTk1lc3NhZ2VQcm9jZXNzaW5nU3RhdGUsXG59IGZyb20gJy4uLy4uL3R5cGVzJztcblxuaW1wb3J0IHsgVE9OQ2xpZW50RXJyb3IsIFRPTkNvbnRyYWN0RXhpdENvZGUsIFRPTkVycm9yQ29kZSB9IGZyb20gJy4uL1RPTkNsaWVudCc7XG5pbXBvcnQgeyBUT05Nb2R1bGUgfSBmcm9tICcuLi9UT05Nb2R1bGUnO1xuaW1wb3J0IFRPTkNvbmZpZ01vZHVsZSBmcm9tICcuL1RPTkNvbmZpZ01vZHVsZSc7XG5pbXBvcnQgVE9OUXVlcmllc01vZHVsZSwgeyBNQVhfVElNRU9VVCB9IGZyb20gJy4vVE9OUXVlcmllc01vZHVsZSc7XG5cbmV4cG9ydCBjb25zdCBUT05BZGRyZXNzU3RyaW5nVmFyaWFudCA9IHtcbiAgICBBY2NvdW50SWQ6ICdBY2NvdW50SWQnLFxuICAgIEhleDogJ0hleCcsXG4gICAgQmFzZTY0OiAnQmFzZTY0Jyxcbn07XG5cbmV4cG9ydCBjb25zdCBUT05DbGllbnRUcmFuc2FjdGlvblBoYXNlID0ge1xuICAgIHN0b3JhZ2U6ICdzdG9yYWdlJyxcbiAgICBjb21wdXRlU2tpcHBlZDogJ2NvbXB1dGVTa2lwcGVkJyxcbiAgICBjb21wdXRlVm06ICdjb21wdXRlVm0nLFxuICAgIGFjdGlvbjogJ2FjdGlvbicsXG4gICAgdW5rbm93bjogJ3Vua25vd24nLFxufTtcblxuZXhwb3J0IGNvbnN0IFRPTkNsaWVudENvbXB1dGVTa2lwcGVkU3RhdHVzID0ge1xuICAgIG5vU3RhdGU6IDAsXG4gICAgYmFkU3RhdGU6IDEsXG4gICAgbm9HYXM6IDIsXG59O1xuXG5leHBvcnQgY29uc3QgVE9OQ2xpZW50U3RvcmFnZVN0YXR1cyA9IHtcbiAgICB1bmNoYW5nZWQ6IDAsXG4gICAgZnJvemVuOiAxLFxuICAgIGRlbGV0ZWQ6IDIsXG59O1xuXG5leHBvcnQgY29uc3QgUUluTXNnVHlwZSA9IHtcbiAgICBleHRlcm5hbDogMCxcbiAgICBpaHI6IDEsXG4gICAgaW1tZWRpYXRlbHk6IDIsXG4gICAgZmluYWw6IDMsXG4gICAgdHJhbnNpdDogNCxcbiAgICBkaXNjYXJkZWRGaW5hbDogNSxcbiAgICBkaXNjYXJkZWRUcmFuc2l0OiA2LFxufTtcblxuZXhwb3J0IGNvbnN0IFFPdXRNc2dUeXBlID0ge1xuICAgIGV4dGVybmFsOiAwLFxuICAgIGltbWVkaWF0ZWx5OiAxLFxuICAgIG91dE1zZ05ldzogMixcbiAgICB0cmFuc2l0OiAzLFxuICAgIGRlcXVldWVJbW1lZGlhdGVseTogNCxcbiAgICBkZXF1ZXVlOiA1LFxuICAgIHRyYW5zaXRSZXF1aXJlZDogNixcbiAgICBub25lOiAtMSxcbn07XG5cbmV4cG9ydCBjb25zdCBRTWVzc2FnZVR5cGUgPSB7XG4gICAgaW50ZXJuYWw6IDAsXG4gICAgZXh0SW46IDEsXG4gICAgZXh0T3V0OiAyLFxufTtcblxuZXhwb3J0IGNvbnN0IFFNZXNzYWdlUHJvY2Vzc2luZ1N0YXR1cyA9IHtcbiAgICB1bmtub3duOiAwLFxuICAgIHF1ZXVlZDogMSxcbiAgICBwcm9jZXNzaW5nOiAyLFxuICAgIHByZWxpbWluYXJ5OiAzLFxuICAgIHByb3Bvc2VkOiA0LFxuICAgIGZpbmFsaXplZDogNSxcbiAgICByZWZ1c2VkOiA2LFxuICAgIHRyYW5zaXRpbmc6IDcsXG59O1xuXG5leHBvcnQgY29uc3QgUUJsb2NrUHJvY2Vzc2luZ1N0YXR1cyA9IHtcbiAgICB1bmtub3duOiAwLFxuICAgIHByb3Bvc2VkOiAxLFxuICAgIGZpbmFsaXplZDogMixcbiAgICByZWZ1c2VkOiAzLFxufTtcblxuZXhwb3J0IGNvbnN0IFFTcGxpdFR5cGUgPSB7XG4gICAgbm9uZTogMCxcbiAgICBzcGxpdDogMixcbiAgICBtZXJnZTogMyxcbn07XG5cbmV4cG9ydCBjb25zdCBRQWNjb3VudFR5cGUgPSB7XG4gICAgdW5pbml0OiAwLFxuICAgIGFjdGl2ZTogMSxcbiAgICBmcm96ZW46IDIsXG59O1xuXG5leHBvcnQgY29uc3QgUVRyYW5zYWN0aW9uVHlwZSA9IHtcbiAgICBvcmRpbmFyeTogMCxcbiAgICBzdG9yYWdlOiAxLFxuICAgIHRpY2s6IDIsXG4gICAgdG9jazogMyxcbiAgICBzcGxpdFByZXBhcmU6IDQsXG4gICAgc3BsaXRJbnN0YWxsOiA1LFxuICAgIG1lcmdlUHJlcGFyZTogNixcbiAgICBtZXJnZUluc3RhbGw6IDcsXG59O1xuXG5leHBvcnQgY29uc3QgUVRyYW5zYWN0aW9uUHJvY2Vzc2luZ1N0YXR1cyA9IHtcbiAgICB1bmtub3duOiAwLFxuICAgIHByZWxpbWluYXJ5OiAxLFxuICAgIHByb3Bvc2VkOiAyLFxuICAgIGZpbmFsaXplZDogMyxcbiAgICByZWZ1c2VkOiA0LFxufTtcblxuZXhwb3J0IGNvbnN0IFFBY2NvdW50U3RhdHVzID0ge1xuICAgIHVuaW5pdDogMCxcbiAgICBhY3RpdmU6IDEsXG4gICAgZnJvemVuOiAyLFxuICAgIG5vbkV4aXN0OiAzLFxufTtcblxuZXhwb3J0IGNvbnN0IFFBY2NvdW50U3RhdHVzQ2hhbmdlID0ge1xuICAgIHVuY2hhbmdlZDogMCxcbiAgICBmcm96ZW46IDEsXG4gICAgZGVsZXRlZDogMixcbn07XG5cbmV4cG9ydCBjb25zdCBRQ29tcHV0ZVR5cGUgPSB7XG4gICAgc2tpcHBlZDogMCxcbiAgICB2bTogMSxcbn07XG5cbmV4cG9ydCBjb25zdCBRU2tpcFJlYXNvbiA9IHtcbiAgICBub1N0YXRlOiAwLFxuICAgIGJhZFN0YXRlOiAxLFxuICAgIG5vR2FzOiAyLFxufTtcblxuZXhwb3J0IGNvbnN0IFFCb3VuY2VUeXBlID0ge1xuICAgIG5lZ0Z1bmRzOiAwLFxuICAgIG5vRnVuZHM6IDEsXG4gICAgb2s6IDIsXG59O1xuXG5jb25zdCBNQVNURVJDSEFJTl9JRCA9IC0xO1xuXG5jb25zdCBFWFRSQV9UUkFOU0FDVElPTl9XQUlUSU5HX1RJTUUgPSAxMDAwMDtcbmNvbnN0IEJMT0NLX1RSQU5TQUNUSU9OX1dBSVRJTkdfVElNRSA9IDUwMDA7XG5cbmZ1bmN0aW9uIHJlbW92ZVR5cGVOYW1lKG9iajogYW55KSB7XG4gICAgaWYgKG9iai5fX3R5cGVuYW1lKSB7XG4gICAgICAgIGRlbGV0ZSBvYmouX190eXBlbmFtZTtcbiAgICB9XG4gICAgT2JqZWN0LnZhbHVlcyhvYmopXG4gICAgICAgIC5mb3JFYWNoKCh2YWx1ZSkgPT4ge1xuICAgICAgICAgICAgaWYgKCEhdmFsdWUgJiYgdHlwZW9mIHZhbHVlID09PSAnb2JqZWN0Jykge1xuICAgICAgICAgICAgICAgIHJlbW92ZVR5cGVOYW1lKHZhbHVlKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfSk7XG59XG5cbmV4cG9ydCBmdW5jdGlvbiByZW1vdmVQcm9wcyhvYmo6IHt9LCBwYXRoczogc3RyaW5nW10pOiB7fSB7XG4gICAgbGV0IHJlc3VsdCA9IG9iajtcbiAgICBwYXRocy5mb3JFYWNoKChwYXRoKSA9PiB7XG4gICAgICAgIGNvbnN0IGRvdFBvcyA9IHBhdGguaW5kZXhPZignLicpO1xuICAgICAgICBpZiAoZG90UG9zIDwgMCkge1xuICAgICAgICAgICAgaWYgKHBhdGggaW4gcmVzdWx0KSB7XG4gICAgICAgICAgICAgICAgcmVzdWx0ID0geyAuLi5yZXN1bHQgfTtcbiAgICAgICAgICAgICAgICBkZWxldGUgcmVzdWx0W3BhdGhdO1xuICAgICAgICAgICAgfVxuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgY29uc3QgbmFtZSA9IHBhdGguc3Vic3RyKDAsIGRvdFBvcyk7XG4gICAgICAgICAgICBjb25zdCBjaGlsZCA9IHJlc3VsdFtuYW1lXTtcbiAgICAgICAgICAgIGlmIChjaGlsZCkge1xuICAgICAgICAgICAgICAgIGNvbnN0IHJlZHVjZWRDaGlsZCA9IHJlbW92ZVByb3BzKGNoaWxkLCBbcGF0aC5zdWJzdHIoZG90UG9zICsgMSldKTtcbiAgICAgICAgICAgICAgICBpZiAocmVkdWNlZENoaWxkICE9PSBjaGlsZCkge1xuICAgICAgICAgICAgICAgICAgICByZXN1bHQgPSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAuLi5yZXN1bHQsXG4gICAgICAgICAgICAgICAgICAgICAgICBbbmFtZV06IHJlZHVjZWRDaGlsZCxcbiAgICAgICAgICAgICAgICAgICAgfTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICB9KTtcbiAgICByZXR1cm4gcmVzdWx0O1xufVxuXG5mdW5jdGlvbiBzdGFydE1lc3NhZ2VUcmFjZVNwYW4oXG4gICAgdHJhY2VyOiBUcmFjZXIsXG4gICAgbWVzc2FnZUlkOiBzdHJpbmcsXG4gICAgb3BlcmF0aW9uTmFtZTogc3RyaW5nLFxuICAgIHRhZ3M6IHsgW3N0cmluZ106IGFueSB9LFxuKTogP1NwYW4ge1xuICAgIGlmICghbWVzc2FnZUlkKSB7XG4gICAgICAgIHJldHVybiBudWxsO1xuICAgIH1cbiAgICBjb25zdCB0cmFjZUlkID0gbWVzc2FnZUlkLnN1YnN0cigwLCAxNik7XG4gICAgY29uc3Qgc3BhbklkID0gbWVzc2FnZUlkLnN1YnN0cigxNiwgMTYpO1xuICAgIGxldCByb290Q29udGV4dDogP1NwYW5Db250ZXh0ID0gbnVsbDtcbiAgICB0cnkge1xuICAgICAgICByb290Q29udGV4dCA9IHRyYWNlci5leHRyYWN0KEZPUk1BVF9URVhUX01BUCwge1xuICAgICAgICAgICAgJ3ViZXItdHJhY2UtaWQnOiBgJHt0cmFjZUlkfToke3NwYW5JZH06MDoxYCxcbiAgICAgICAgfSk7XG4gICAgfSBjYXRjaCB7XG4gICAgICAgIC8vIHRyYWNlciBjYW4ndCBjcmVhdGUgamFlZ2VyIGNvbXBhdGlibGUgc3BhbixcbiAgICAgICAgLy8gc28gd2UgYXJlIGZhbGxiYWNrIHRvIHJldHVybiBudWxsXG4gICAgfVxuICAgIGlmICghcm9vdENvbnRleHQpIHtcbiAgICAgICAgcmV0dXJuIG51bGw7XG4gICAgfVxuICAgIHJldHVybiB0cmFjZXIuc3RhcnRTcGFuKG9wZXJhdGlvbk5hbWUsIHtcbiAgICAgICAgY2hpbGRPZjogcm9vdENvbnRleHQsXG4gICAgICAgIHRhZ3MsXG4gICAgfSlcbn1cblxuZnVuY3Rpb24gdHJhY2VNZXNzYWdlKFxuICAgIHRyYWNlcjogVHJhY2VyLFxuICAgIG1lc3NhZ2VJZDogc3RyaW5nLFxuICAgIG9wZXJhdGlvbk5hbWU6IHN0cmluZyxcbiAgICB0YWdzOiB7IFtzdHJpbmddOiBhbnkgfSxcbikge1xuICAgIGNvbnN0IHNwYW4gPSBzdGFydE1lc3NhZ2VUcmFjZVNwYW4odHJhY2VyLCBtZXNzYWdlSWQsIG9wZXJhdGlvbk5hbWUsIHRhZ3MpO1xuICAgIGlmIChzcGFuKSB7XG4gICAgICAgIHNwYW4uZmluaXNoKCk7XG4gICAgfVxufVxuXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBUT05Db250cmFjdHNNb2R1bGUgZXh0ZW5kcyBUT05Nb2R1bGUgaW1wbGVtZW50cyBUT05Db250cmFjdHMge1xuICAgIGNvbmZpZzogVE9OQ29uZmlnTW9kdWxlO1xuXG4gICAgcXVlcmllczogVE9OUXVlcmllc01vZHVsZTtcblxuICAgIGFzeW5jIHNldHVwKCk6IFByb21pc2U8Kj4ge1xuICAgICAgICB0aGlzLmNvbmZpZyA9IHRoaXMuY29udGV4dC5nZXRNb2R1bGUoVE9OQ29uZmlnTW9kdWxlKTtcbiAgICAgICAgdGhpcy5xdWVyaWVzID0gdGhpcy5jb250ZXh0LmdldE1vZHVsZShUT05RdWVyaWVzTW9kdWxlKTtcbiAgICB9XG5cbiAgICBhc3luYyBsb2FkKFxuICAgICAgICBwYXJhbXM6IFRPTkNvbnRyYWN0TG9hZFBhcmFtcyxcbiAgICAgICAgcGFyZW50U3Bhbj86IChTcGFuIHwgU3BhbkNvbnRleHQpLFxuICAgICk6IFByb21pc2U8VE9OQ29udHJhY3RMb2FkUmVzdWx0PiB7XG4gICAgICAgIGNvbnN0IGFjY291bnRzOiBRQWNjb3VudFtdID0gYXdhaXQgdGhpcy5xdWVyaWVzLmFjY291bnRzLnF1ZXJ5KHtcbiAgICAgICAgICAgIGZpbHRlcjoge1xuICAgICAgICAgICAgICAgIGlkOiB7IGVxOiBwYXJhbXMuYWRkcmVzcyB9LFxuICAgICAgICAgICAgfSxcbiAgICAgICAgICAgIHJlc3VsdDogJ2JhbGFuY2UnLFxuICAgICAgICAgICAgcGFyZW50U3BhbixcbiAgICAgICAgfSk7XG4gICAgICAgIGlmIChhY2NvdW50cyAmJiBhY2NvdW50cy5sZW5ndGggPiAwKSB7XG4gICAgICAgICAgICByZXR1cm4ge1xuICAgICAgICAgICAgICAgIGlkOiBwYXJhbXMuYWRkcmVzcyxcbiAgICAgICAgICAgICAgICBiYWxhbmNlR3JhbXM6IGFjY291bnRzWzBdLmJhbGFuY2UsXG4gICAgICAgICAgICB9O1xuICAgICAgICB9XG4gICAgICAgIHJldHVybiB7XG4gICAgICAgICAgICBpZDogbnVsbCxcbiAgICAgICAgICAgIGJhbGFuY2VHcmFtczogbnVsbCxcbiAgICAgICAgfTtcbiAgICB9XG5cblxuICAgIC8vIEZhY2FkZSBmdW5jdGlvbnNcblxuICAgIGFzeW5jIGRlcGxveShcbiAgICAgICAgcGFyYW1zOiBUT05Db250cmFjdERlcGxveVBhcmFtcyxcbiAgICAgICAgcGFyZW50U3Bhbj86IChTcGFuIHwgU3BhbkNvbnRleHQpLFxuICAgICk6IFByb21pc2U8VE9OQ29udHJhY3REZXBsb3lSZXN1bHQ+IHtcbiAgICAgICAgcmV0dXJuIHRoaXMuY29udGV4dC50cmFjZSgnY29udHJhY3RzLmRlcGxveScsIGFzeW5jIChzcGFuOiBTcGFuKSA9PiB7XG4gICAgICAgICAgICBzcGFuLnNldFRhZygncGFyYW1zJywgcmVtb3ZlUHJvcHMocGFyYW1zLCBbJ2tleVBhaXIuc2VjcmV0J10pKTtcbiAgICAgICAgICAgIHJldHVybiB0aGlzLmludGVybmFsRGVwbG95SnMocGFyYW1zLCBzcGFuKTtcbiAgICAgICAgfSwgcGFyZW50U3Bhbik7XG4gICAgfVxuXG5cbiAgICBhc3luYyBydW4oXG4gICAgICAgIHBhcmFtczogVE9OQ29udHJhY3RSdW5QYXJhbXMsXG4gICAgICAgIHBhcmVudFNwYW4/OiAoU3BhbiB8IFNwYW5Db250ZXh0KSxcbiAgICApOiBQcm9taXNlPFRPTkNvbnRyYWN0UnVuUmVzdWx0PiB7XG4gICAgICAgIHJldHVybiB0aGlzLmNvbnRleHQudHJhY2UoJ2NvbnRyYWN0cy5ydW4nLCBhc3luYyAoc3BhbjogU3BhbikgPT4ge1xuICAgICAgICAgICAgc3Bhbi5zZXRUYWcoJ3BhcmFtcycsIHJlbW92ZVByb3BzKHBhcmFtcywgWydrZXlQYWlyLnNlY3JldCddKSk7XG4gICAgICAgICAgICByZXR1cm4gdGhpcy5pbnRlcm5hbFJ1bkpzKHBhcmFtcywgc3Bhbik7XG4gICAgICAgIH0sIHBhcmVudFNwYW4pO1xuICAgIH1cblxuICAgIGFzeW5jIHJ1bkxvY2FsKFxuICAgICAgICBwYXJhbXM6IFRPTkNvbnRyYWN0UnVuTG9jYWxQYXJhbXMsXG4gICAgICAgIHBhcmVudFNwYW4/OiAoU3BhbiB8IFNwYW5Db250ZXh0KSxcbiAgICApOiBQcm9taXNlPFRPTkNvbnRyYWN0UnVuTG9jYWxSZXN1bHQ+IHtcbiAgICAgICAgcmV0dXJuIHRoaXMuY29udGV4dC50cmFjZSgnY29udHJhY3RzLnJ1bkxvY2FsJywgYXN5bmMgKHNwYW46IFNwYW4pID0+IHtcbiAgICAgICAgICAgIHNwYW4uc2V0VGFnKCdwYXJhbXMnLCByZW1vdmVQcm9wcyhwYXJhbXMsIFsna2V5UGFpci5zZWNyZXQnXSkpO1xuICAgICAgICAgICAgcmV0dXJuIHRoaXMuaW50ZXJuYWxSdW5Mb2NhbEpzKHBhcmFtcywgc3Bhbik7XG4gICAgICAgIH0sIHBhcmVudFNwYW4pO1xuICAgIH1cblxuICAgIGFzeW5jIHJ1bk1lc3NhZ2VMb2NhbChcbiAgICAgICAgcGFyYW1zOiBUT05Db250cmFjdFJ1bk1lc3NhZ2VMb2NhbFBhcmFtcyxcbiAgICAgICAgcGFyZW50U3Bhbj86IChTcGFuIHwgU3BhbkNvbnRleHQpLFxuICAgICk6IFByb21pc2U8VE9OQ29udHJhY3RSdW5Mb2NhbFJlc3VsdD4ge1xuICAgICAgICByZXR1cm4gdGhpcy5jb250ZXh0LnRyYWNlKCdydW5NZXNzYWdlTG9jYWwnLCBhc3luYyAoc3BhbjogU3BhbikgPT4ge1xuICAgICAgICAgICAgc3Bhbi5zZXRUYWcoJ3BhcmFtcycsIHJlbW92ZVByb3BzKHBhcmFtcywgWydrZXlQYWlyLnNlY3JldCddKSk7XG4gICAgICAgICAgICByZXR1cm4gdGhpcy5pbnRlcm5hbFJ1bk1lc3NhZ2VMb2NhbEpzKHBhcmFtcywgc3Bhbik7XG4gICAgICAgIH0sIHBhcmVudFNwYW4pO1xuICAgIH1cblxuICAgIGFzeW5jIHJ1bkdldChcbiAgICAgICAgcGFyYW1zOiBUT05Db250cmFjdFJ1bkdldFBhcmFtcyxcbiAgICApOiBQcm9taXNlPFRPTkNvbnRyYWN0UnVuR2V0UmVzdWx0PiB7XG4gICAgICAgIGxldCBjb3JlUGFyYW1zOiBUT05Db250cmFjdFJ1bkdldFBhcmFtcyA9IHBhcmFtcztcbiAgICAgICAgaWYgKCFwYXJhbXMuY29kZUJhc2U2NCB8fCAhcGFyYW1zLmRhdGFCYXNlNjQpIHtcbiAgICAgICAgICAgIGNvbnN0IGFkZHJlc3MgPSBwYXJhbXMuYWRkcmVzcztcbiAgICAgICAgICAgIGlmICghYWRkcmVzcykge1xuICAgICAgICAgICAgICAgIHRocm93IFRPTkNsaWVudEVycm9yLmFkZHJlc3NSZXF1aXJlZEZvclJ1bkxvY2FsKCk7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBjb25zdCBhY2NvdW50OiBhbnkgPSBhd2FpdCB0aGlzLmdldEFjY291bnQoYWRkcmVzcywgZmFsc2UsIHtcbiAgICAgICAgICAgICAgICB0aW1lb3V0OiB0aGlzLmNvbmZpZy53YWl0Rm9yVGltZW91dCgpLFxuICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICBjb25zdCBoYXNDb2RlID0gYWNjb3VudC5jb2RlIHx8IGFjY291bnQuY29kZV9oYXNoO1xuICAgICAgICAgICAgaWYgKCFoYXNDb2RlKSB7XG4gICAgICAgICAgICAgICAgdGhyb3cgVE9OQ2xpZW50RXJyb3IuYWNjb3VudENvZGVNaXNzaW5nKGFkZHJlc3MsIGFjY291bnQuYmFsYW5jZSk7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBhY2NvdW50LmNvZGVCYXNlNjQgPSBhY2NvdW50LmNvZGU7XG4gICAgICAgICAgICBhY2NvdW50LmRhdGFCYXNlNjQgPSBhY2NvdW50LmRhdGE7XG4gICAgICAgICAgICBkZWxldGUgYWNjb3VudC5jb2RlO1xuICAgICAgICAgICAgZGVsZXRlIGFjY291bnQuZGF0YTtcbiAgICAgICAgICAgIGNvcmVQYXJhbXMgPSB7XG4gICAgICAgICAgICAgICAgLi4uYWNjb3VudCxcbiAgICAgICAgICAgICAgICAuLi5wYXJhbXMsXG4gICAgICAgICAgICB9O1xuICAgICAgICB9XG4gICAgICAgIHJldHVybiB0aGlzLnJlcXVlc3RDb3JlKCd0dm0uZ2V0JywgY29yZVBhcmFtcyk7XG4gICAgfVxuXG4gICAgYXJyYXlGcm9tQ09OUyhjb25zOiBhbnlbXSk6IGFueVtdIHtcbiAgICAgICAgY29uc3QgcmVzdWx0ID0gW107XG4gICAgICAgIGxldCBpdGVtID0gY29ucztcbiAgICAgICAgd2hpbGUgKGl0ZW0pIHtcbiAgICAgICAgICAgIGlmICghaXRlbS5sZW5ndGggPT09IDIpIHtcbiAgICAgICAgICAgICAgICB0aHJvdyBUT05DbGllbnRFcnJvci5pbnZhbGlkQ29ucygpO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgcmVzdWx0LnB1c2goaXRlbVswXSk7XG4gICAgICAgICAgICBpdGVtID0gaXRlbVsxXTtcbiAgICAgICAgfVxuICAgICAgICByZXR1cm4gcmVzdWx0O1xuICAgIH1cblxuXG4gICAgLy8gTWVzc2FnZSBjcmVhdGlvblxuXG4gICAgYXN5bmMgY3JlYXRlRGVwbG95TWVzc2FnZShcbiAgICAgICAgcGFyYW1zOiBUT05Db250cmFjdERlcGxveVBhcmFtcyxcbiAgICAgICAgcmV0cnlJbmRleD86IG51bWJlcixcbiAgICApOiBQcm9taXNlPFRPTkNvbnRyYWN0RGVwbG95TWVzc2FnZT4ge1xuICAgICAgICB0aGlzLmNvbmZpZy5sb2coJ2NyZWF0ZURlcGxveU1lc3NhZ2UnLCBwYXJhbXMpO1xuICAgICAgICBjb25zdCBtZXNzYWdlOiBUT05Db250cmFjdE1lc3NhZ2UgPSBhd2FpdCB0aGlzLnJlcXVlc3RDb3JlKCdjb250cmFjdHMuZGVwbG95Lm1lc3NhZ2UnLCB7XG4gICAgICAgICAgICBhYmk6IHBhcmFtcy5wYWNrYWdlLmFiaSxcbiAgICAgICAgICAgIGNvbnN0cnVjdG9ySGVhZGVyOiBwYXJhbXMuY29uc3RydWN0b3JIZWFkZXIsXG4gICAgICAgICAgICBjb25zdHJ1Y3RvclBhcmFtczogcGFyYW1zLmNvbnN0cnVjdG9yUGFyYW1zLFxuICAgICAgICAgICAgaW5pdFBhcmFtczogcGFyYW1zLmluaXRQYXJhbXMsXG4gICAgICAgICAgICBpbWFnZUJhc2U2NDogcGFyYW1zLnBhY2thZ2UuaW1hZ2VCYXNlNjQsXG4gICAgICAgICAgICBrZXlQYWlyOiBwYXJhbXMua2V5UGFpcixcbiAgICAgICAgICAgIHdvcmtjaGFpbklkOiBwYXJhbXMud29ya2NoYWluSWQsXG4gICAgICAgIH0pO1xuICAgICAgICByZXR1cm4ge1xuICAgICAgICAgICAgbWVzc2FnZSxcbiAgICAgICAgICAgIGFkZHJlc3M6IG1lc3NhZ2UuYWRkcmVzcyxcbiAgICAgICAgfTtcbiAgICB9XG5cblxuICAgIGFzeW5jIGNyZWF0ZVJ1bk1lc3NhZ2UoXG4gICAgICAgIHBhcmFtczogVE9OQ29udHJhY3RSdW5QYXJhbXMsXG4gICAgICAgIHJldHJ5SW5kZXg/OiBudW1iZXIsXG4gICAgKTogUHJvbWlzZTxUT05Db250cmFjdFJ1bk1lc3NhZ2U+IHtcbiAgICAgICAgdGhpcy5jb25maWcubG9nKCdjcmVhdGVSdW5NZXNzYWdlJywgcGFyYW1zKTtcbiAgICAgICAgY29uc3QgbWVzc2FnZSA9IGF3YWl0IHRoaXMucmVxdWVzdENvcmUoJ2NvbnRyYWN0cy5ydW4ubWVzc2FnZScsIHtcbiAgICAgICAgICAgIGFkZHJlc3M6IHBhcmFtcy5hZGRyZXNzLFxuICAgICAgICAgICAgYWJpOiBwYXJhbXMuYWJpLFxuICAgICAgICAgICAgZnVuY3Rpb25OYW1lOiBwYXJhbXMuZnVuY3Rpb25OYW1lLFxuICAgICAgICAgICAgaGVhZGVyOiBwYXJhbXMuaGVhZGVyLFxuICAgICAgICAgICAgdHJ5SW5kZXg6IHJldHJ5SW5kZXgsXG4gICAgICAgICAgICBpbnB1dDogcGFyYW1zLmlucHV0LFxuICAgICAgICAgICAga2V5UGFpcjogcGFyYW1zLmtleVBhaXIsXG4gICAgICAgIH0pO1xuICAgICAgICByZXR1cm4ge1xuICAgICAgICAgICAgYWRkcmVzczogcGFyYW1zLmFkZHJlc3MsXG4gICAgICAgICAgICBhYmk6IHBhcmFtcy5hYmksXG4gICAgICAgICAgICBmdW5jdGlvbk5hbWU6IHBhcmFtcy5mdW5jdGlvbk5hbWUsXG4gICAgICAgICAgICBtZXNzYWdlLFxuICAgICAgICB9O1xuICAgIH1cblxuICAgIGFzeW5jIGNyZWF0ZVVuc2lnbmVkRGVwbG95TWVzc2FnZShcbiAgICAgICAgcGFyYW1zOiBUT05Db250cmFjdERlcGxveVBhcmFtcyxcbiAgICAgICAgcmV0cnlJbmRleD86IG51bWJlcixcbiAgICApOiBQcm9taXNlPFRPTkNvbnRyYWN0VW5zaWduZWREZXBsb3lNZXNzYWdlPiB7XG4gICAgICAgIGNvbnN0IHJlc3VsdDoge1xuICAgICAgICAgICAgZW5jb2RlZDogVE9OQ29udHJhY3RVbnNpZ25lZE1lc3NhZ2UsXG4gICAgICAgICAgICBhZGRyZXNzSGV4OiBzdHJpbmcsXG4gICAgICAgIH0gPSBhd2FpdCB0aGlzLnJlcXVlc3RDb3JlKCdjb250cmFjdHMuZGVwbG95LmVuY29kZV91bnNpZ25lZF9tZXNzYWdlJywge1xuICAgICAgICAgICAgYWJpOiBwYXJhbXMucGFja2FnZS5hYmksXG4gICAgICAgICAgICBjb25zdHJ1Y3RvckhlYWRlcjogcGFyYW1zLmNvbnN0cnVjdG9ySGVhZGVyLFxuICAgICAgICAgICAgdHJ5SW5kZXg6IHJldHJ5SW5kZXgsXG4gICAgICAgICAgICBjb25zdHJ1Y3RvclBhcmFtczogcGFyYW1zLmNvbnN0cnVjdG9yUGFyYW1zLFxuICAgICAgICAgICAgaW5pdFBhcmFtczogcGFyYW1zLmluaXRQYXJhbXMsXG4gICAgICAgICAgICBpbWFnZUJhc2U2NDogcGFyYW1zLnBhY2thZ2UuaW1hZ2VCYXNlNjQsXG4gICAgICAgICAgICBwdWJsaWNLZXlIZXg6IHBhcmFtcy5rZXlQYWlyLnB1YmxpYyxcbiAgICAgICAgICAgIHdvcmtjaGFpbklkOiBwYXJhbXMud29ya2NoYWluSWQsXG4gICAgICAgIH0pO1xuICAgICAgICByZXR1cm4ge1xuICAgICAgICAgICAgYWRkcmVzczogcmVzdWx0LmFkZHJlc3NIZXgsXG4gICAgICAgICAgICBzaWduUGFyYW1zOiB7XG4gICAgICAgICAgICAgICAgLi4ucmVzdWx0LmVuY29kZWQsXG4gICAgICAgICAgICAgICAgYWJpOiBwYXJhbXMucGFja2FnZS5hYmksXG4gICAgICAgICAgICB9LFxuICAgICAgICB9O1xuICAgIH1cblxuXG4gICAgYXN5bmMgY3JlYXRlVW5zaWduZWRSdW5NZXNzYWdlKFxuICAgICAgICBwYXJhbXM6IFRPTkNvbnRyYWN0UnVuUGFyYW1zLFxuICAgICAgICByZXRyeUluZGV4PzogbnVtYmVyLFxuICAgICk6IFByb21pc2U8VE9OQ29udHJhY3RVbnNpZ25lZFJ1bk1lc3NhZ2U+IHtcbiAgICAgICAgY29uc3Qgc2lnblBhcmFtcyA9IGF3YWl0IHRoaXMucmVxdWVzdENvcmUoJ2NvbnRyYWN0cy5ydW4uZW5jb2RlX3Vuc2lnbmVkX21lc3NhZ2UnLCB7XG4gICAgICAgICAgICBhZGRyZXNzOiBwYXJhbXMuYWRkcmVzcyxcbiAgICAgICAgICAgIGFiaTogcGFyYW1zLmFiaSxcbiAgICAgICAgICAgIGZ1bmN0aW9uTmFtZTogcGFyYW1zLmZ1bmN0aW9uTmFtZSxcbiAgICAgICAgICAgIGhlYWRlcjogcGFyYW1zLmhlYWRlcixcbiAgICAgICAgICAgIHRyeUluZGV4OiByZXRyeUluZGV4LFxuICAgICAgICAgICAgaW5wdXQ6IHBhcmFtcy5pbnB1dCxcbiAgICAgICAgfSk7XG4gICAgICAgIHJldHVybiB7XG4gICAgICAgICAgICBhZGRyZXNzOiBwYXJhbXMuYWRkcmVzcyxcbiAgICAgICAgICAgIGZ1bmN0aW9uTmFtZTogcGFyYW1zLmZ1bmN0aW9uTmFtZSxcbiAgICAgICAgICAgIHNpZ25QYXJhbXM6IHtcbiAgICAgICAgICAgICAgICAuLi5zaWduUGFyYW1zLFxuICAgICAgICAgICAgICAgIGFiaTogcGFyYW1zLmFiaSxcbiAgICAgICAgICAgIH0sXG4gICAgICAgIH07XG4gICAgfVxuXG5cbiAgICBhc3luYyBjcmVhdGVTaWduZWRNZXNzYWdlKFxuICAgICAgICBwYXJhbXM6IFRPTkNvbnRyYWN0Q3JlYXRlU2lnbmVkTWVzc2FnZVBhcmFtcyxcbiAgICApOiBQcm9taXNlPFRPTkNvbnRyYWN0TWVzc2FnZT4ge1xuICAgICAgICByZXR1cm4gdGhpcy5yZXF1ZXN0Q29yZSgnY29udHJhY3RzLmVuY29kZV9tZXNzYWdlX3dpdGhfc2lnbicsIHBhcmFtcyk7XG4gICAgfVxuXG5cbiAgICBhc3luYyBjcmVhdGVTaWduZWREZXBsb3lNZXNzYWdlKFxuICAgICAgICBwYXJhbXM6IFRPTkNvbnRyYWN0Q3JlYXRlU2lnbmVkRGVwbG95TWVzc2FnZVBhcmFtcyxcbiAgICApOiBQcm9taXNlPFRPTkNvbnRyYWN0RGVwbG95TWVzc2FnZT4ge1xuICAgICAgICBjb25zdCBtZXNzYWdlID0gYXdhaXQgdGhpcy5jcmVhdGVTaWduZWRNZXNzYWdlKHtcbiAgICAgICAgICAgIGFiaTogcGFyYW1zLnVuc2lnbmVkTWVzc2FnZS5zaWduUGFyYW1zLmFiaSxcbiAgICAgICAgICAgIHVuc2lnbmVkQnl0ZXNCYXNlNjQ6IHBhcmFtcy51bnNpZ25lZE1lc3NhZ2Uuc2lnblBhcmFtcy51bnNpZ25lZEJ5dGVzQmFzZTY0LFxuICAgICAgICAgICAgc2lnbkJ5dGVzQmFzZTY0OiBwYXJhbXMuc2lnbkJ5dGVzQmFzZTY0LFxuICAgICAgICAgICAgcHVibGljS2V5SGV4OiBwYXJhbXMucHVibGljS2V5SGV4LFxuICAgICAgICB9KTtcbiAgICAgICAgbWVzc2FnZS5leHBpcmUgPSBwYXJhbXMudW5zaWduZWRNZXNzYWdlLnNpZ25QYXJhbXMuZXhwaXJlO1xuICAgICAgICByZXR1cm4ge1xuICAgICAgICAgICAgYWRkcmVzczogcGFyYW1zLnVuc2lnbmVkTWVzc2FnZS5hZGRyZXNzLFxuICAgICAgICAgICAgbWVzc2FnZSxcbiAgICAgICAgfTtcbiAgICB9XG5cblxuICAgIGFzeW5jIGNyZWF0ZVNpZ25lZFJ1bk1lc3NhZ2UoXG4gICAgICAgIHBhcmFtczogVE9OQ29udHJhY3RDcmVhdGVTaWduZWRSdW5NZXNzYWdlUGFyYW1zLFxuICAgICk6IFByb21pc2U8VE9OQ29udHJhY3RSdW5NZXNzYWdlPiB7XG4gICAgICAgIGNvbnN0IG1lc3NhZ2UgPSBhd2FpdCB0aGlzLmNyZWF0ZVNpZ25lZE1lc3NhZ2Uoe1xuICAgICAgICAgICAgYWJpOiBwYXJhbXMudW5zaWduZWRNZXNzYWdlLnNpZ25QYXJhbXMuYWJpLFxuICAgICAgICAgICAgdW5zaWduZWRCeXRlc0Jhc2U2NDogcGFyYW1zLnVuc2lnbmVkTWVzc2FnZS5zaWduUGFyYW1zLnVuc2lnbmVkQnl0ZXNCYXNlNjQsXG4gICAgICAgICAgICBzaWduQnl0ZXNCYXNlNjQ6IHBhcmFtcy5zaWduQnl0ZXNCYXNlNjQsXG4gICAgICAgICAgICBwdWJsaWNLZXlIZXg6IHBhcmFtcy5wdWJsaWNLZXlIZXgsXG4gICAgICAgIH0pO1xuICAgICAgICBtZXNzYWdlLmV4cGlyZSA9IHBhcmFtcy51bnNpZ25lZE1lc3NhZ2Uuc2lnblBhcmFtcy5leHBpcmU7XG4gICAgICAgIHJldHVybiB7XG4gICAgICAgICAgICBhZGRyZXNzOiBwYXJhbXMudW5zaWduZWRNZXNzYWdlLmFkZHJlc3MsXG4gICAgICAgICAgICBhYmk6IHBhcmFtcy51bnNpZ25lZE1lc3NhZ2Uuc2lnblBhcmFtcy5hYmksXG4gICAgICAgICAgICBmdW5jdGlvbk5hbWU6IHBhcmFtcy51bnNpZ25lZE1lc3NhZ2UuZnVuY3Rpb25OYW1lLFxuICAgICAgICAgICAgbWVzc2FnZSxcbiAgICAgICAgfTtcbiAgICB9XG5cbiAgICBhc3luYyBnZXRDb2RlRnJvbUltYWdlKFxuICAgICAgICBwYXJhbXM6IFRPTkNvbnRyYWN0R2V0Q29kZUZyb21JbWFnZVBhcmFtcyxcbiAgICApOiBQcm9taXNlPFRPTkNvbnRyYWN0R2V0Q29kZUZyb21JbWFnZVJlc3VsdD4ge1xuICAgICAgICByZXR1cm4gdGhpcy5yZXF1ZXN0Q29yZSgnY29udHJhY3RzLmltYWdlLmNvZGUnLCBwYXJhbXMpO1xuICAgIH1cblxuICAgIGFzeW5jIGdldERlcGxveURhdGEoXG4gICAgICAgIHBhcmFtczogVE9OQ29udHJhY3RHZXREZXBsb3lEYXRhUGFyYW1zLFxuICAgICk6IFByb21pc2U8VE9OQ29udHJhY3RHZXREZXBsb3lEYXRhUmVzdWx0PiB7XG4gICAgICAgIHJldHVybiB0aGlzLnJlcXVlc3RDb3JlKCdjb250cmFjdHMuZGVwbG95LmRhdGEnLCBwYXJhbXMpO1xuICAgIH1cblxuICAgIGFzeW5jIGNyZWF0ZVJ1bkJvZHkoXG4gICAgICAgIHBhcmFtczogVE9OQ29udHJhY3RDcmVhdGVSdW5Cb2R5UGFyYW1zLFxuICAgICk6IFByb21pc2U8VE9OQ29udHJhY3RDcmVhdGVSdW5Cb2R5UmVzdWx0PiB7XG4gICAgICAgIHJldHVybiB0aGlzLnJlcXVlc3RDb3JlKCdjb250cmFjdHMucnVuLmJvZHknLCBwYXJhbXMpO1xuICAgIH1cblxuICAgIGFzeW5jIGdldEZ1bmN0aW9uSWQoXG4gICAgICAgIHBhcmFtczogVE9OQ29udHJhY3RHZXRGdW5jdGlvbklkUGFyYW1zLFxuICAgICk6IFByb21pc2U8VE9OQ29udHJhY3RHZXRGdW5jdGlvbklkUmVzdWx0PiB7XG4gICAgICAgIHJldHVybiB0aGlzLnJlcXVlc3RDb3JlKCdjb250cmFjdHMuZnVuY3Rpb24uaWQnLCBwYXJhbXMpO1xuICAgIH1cblxuICAgIGFzeW5jIGdldEJvY0hhc2goXG4gICAgICAgIHBhcmFtczogVE9OQ29udHJhY3RCb2MsXG4gICAgKTogUHJvbWlzZTxUT05Db250cmFjdEdldEJvY0hhc2hSZXN1bHQ+IHtcbiAgICAgICAgcmV0dXJuIHRoaXMucmVxdWVzdENvcmUoJ2NvbnRyYWN0cy5ib2MuaGFzaCcsIHBhcmFtcyk7XG4gICAgfVxuXG4gICAgYXN5bmMgcGFyc2VNZXNzYWdlKFxuICAgICAgICBwYXJhbXM6IFRPTkNvbnRyYWN0Qm9jLFxuICAgICk6IFByb21pc2U8UU1lc3NhZ2U+IHtcbiAgICAgICAgcmV0dXJuIHRoaXMucmVxdWVzdENvcmUoJ2NvbnRyYWN0cy5wYXJzZS5tZXNzYWdlJywgcGFyYW1zKTtcbiAgICB9XG5cbiAgICAvLyBNZXNzYWdlIHBhcnNpbmdcblxuICAgIGFzeW5jIGRlY29kZVJ1bk91dHB1dChcbiAgICAgICAgcGFyYW1zOiBUT05Db250cmFjdERlY29kZVJ1bk91dHB1dFBhcmFtcyxcbiAgICApOiBQcm9taXNlPFRPTkNvbnRyYWN0UnVuUmVzdWx0PiB7XG4gICAgICAgIHJldHVybiB0aGlzLnJlcXVlc3RDb3JlKCdjb250cmFjdHMucnVuLm91dHB1dCcsIHBhcmFtcyk7XG4gICAgfVxuXG5cbiAgICBhc3luYyBkZWNvZGVJbnB1dE1lc3NhZ2VCb2R5KFxuICAgICAgICBwYXJhbXM6IFRPTkNvbnRyYWN0RGVjb2RlTWVzc2FnZUJvZHlQYXJhbXMsXG4gICAgKTogUHJvbWlzZTxUT05Db250cmFjdERlY29kZU1lc3NhZ2VCb2R5UmVzdWx0PiB7XG4gICAgICAgIHJldHVybiB0aGlzLnJlcXVlc3RDb3JlKCdjb250cmFjdHMucnVuLnVua25vd24uaW5wdXQnLCBwYXJhbXMpO1xuICAgIH1cblxuXG4gICAgYXN5bmMgZGVjb2RlT3V0cHV0TWVzc2FnZUJvZHkoXG4gICAgICAgIHBhcmFtczogVE9OQ29udHJhY3REZWNvZGVNZXNzYWdlQm9keVBhcmFtcyxcbiAgICApOiBQcm9taXNlPFRPTkNvbnRyYWN0RGVjb2RlTWVzc2FnZUJvZHlSZXN1bHQ+IHtcbiAgICAgICAgcmV0dXJuIHRoaXMucmVxdWVzdENvcmUoJ2NvbnRyYWN0cy5ydW4udW5rbm93bi5vdXRwdXQnLCBwYXJhbXMpO1xuICAgIH1cblxuICAgIC8vIE1lc3NhZ2UgcHJvY2Vzc2luZ1xuXG4gICAgYXN5bmMgZW5zdXJlTWVzc2FnZUlkKG1lc3NhZ2U6IFRPTkNvbnRyYWN0TWVzc2FnZSk6IFByb21pc2U8c3RyaW5nPiB7XG4gICAgICAgIHJldHVybiBtZXNzYWdlLm1lc3NhZ2VJZCB8fCBhd2FpdCAoYXN5bmMgKCkgPT4ge1xuICAgICAgICAgICAgY29uc3QgaWQgPSAoYXdhaXQgdGhpcy5nZXRCb2NIYXNoKHtcbiAgICAgICAgICAgICAgICBib2NCYXNlNjQ6IG1lc3NhZ2UubWVzc2FnZUJvZHlCYXNlNjQsXG4gICAgICAgICAgICB9KSkuaGFzaDtcbiAgICAgICAgICAgIG1lc3NhZ2UubWVzc2FnZUlkID0gaWQ7XG4gICAgICAgICAgICByZXR1cm4gaWQ7XG4gICAgICAgIH0pKCk7XG4gICAgfVxuXG4gICAgYXN5bmMgc2VuZE1lc3NhZ2UoXG4gICAgICAgIHBhcmFtczogVE9OQ29udHJhY3RNZXNzYWdlLFxuICAgICAgICBwYXJlbnRTcGFuPzogKFNwYW4gfCBTcGFuQ29udGV4dCksXG4gICAgKTogUHJvbWlzZTxUT05NZXNzYWdlUHJvY2Vzc2luZ1N0YXRlPiB7XG4gICAgICAgIGNvbnN0IGV4cGlyZSA9IHBhcmFtcy5leHBpcmU7XG4gICAgICAgIGlmIChleHBpcmUgJiYgKERhdGUubm93KCkgPiBleHBpcmUgKiAxMDAwKSkge1xuICAgICAgICAgICAgdGhyb3cgVE9OQ2xpZW50RXJyb3Iuc2VuZE5vZGVSZXF1ZXN0RmFpbGVkKCdNZXNzYWdlIGFscmVhZHkgZXhwaXJlZCcpO1xuICAgICAgICB9XG4gICAgICAgIGNvbnN0IHNlcnZlclRpbWVEZWx0YSA9IE1hdGguYWJzKGF3YWl0IHRoaXMucXVlcmllcy5zZXJ2ZXJUaW1lRGVsdGEocGFyZW50U3BhbikpO1xuICAgICAgICBpZiAoc2VydmVyVGltZURlbHRhID4gdGhpcy5jb25maWcub3V0T2ZTeW5jVGhyZXNob2xkKCkpIHtcbiAgICAgICAgICAgIHRoaXMucXVlcmllcy5kcm9wU2VydmVyVGltZURlbHRhKCk7XG4gICAgICAgICAgICB0aHJvdyBUT05DbGllbnRFcnJvci5jbG9ja091dE9mU3luYygpO1xuICAgICAgICB9XG4gICAgICAgIGNvbnN0IGxhc3RCbG9ja0lkID0gYXdhaXQgdGhpcy5maW5kTGFzdFNoYXJkQmxvY2socGFyYW1zLmFkZHJlc3MpO1xuICAgICAgICBjb25zdCBpZCA9IGF3YWl0IHRoaXMuZW5zdXJlTWVzc2FnZUlkKHBhcmFtcyk7XG4gICAgICAgIGNvbnN0IGlkQmFzZTY0ID0gQnVmZmVyLmZyb20oaWQsICdoZXgnKS50b1N0cmluZygnYmFzZTY0Jyk7XG4gICAgICAgIGNvbnN0IG1lc3NhZ2VTcGFuID0gdGhpcy5jb250ZXh0LnN0YXJ0Um9vdFNwYW4oXG4gICAgICAgICAgICBpZC5zdWJzdHIoMCwgMTYpLFxuICAgICAgICAgICAgaWQuc3Vic3RyKDE2LCAxNiksXG4gICAgICAgICAgICAnbWVzc2FnZVByb2Nlc3NpbmcnLFxuICAgICAgICApO1xuICAgICAgICBtZXNzYWdlU3Bhbi5hZGRUYWdzKHtcbiAgICAgICAgICAgIG1lc3NhZ2VJZDogaWQsXG4gICAgICAgICAgICBtZXNzYWdlU2l6ZTogTWF0aC5jZWlsKHBhcmFtcy5tZXNzYWdlQm9keUJhc2U2NC5sZW5ndGggKiAzIC8gNCksXG4gICAgICAgICAgICBhZGRyZXNzOiBwYXJhbXMuYWRkcmVzcyxcbiAgICAgICAgICAgIGV4cGlyZTogcGFyYW1zLmV4cGlyZSxcbiAgICAgICAgfSlcbiAgICAgICAgYXdhaXQgdGhpcy5xdWVyaWVzLnBvc3RSZXF1ZXN0cyhbXG4gICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgaWQ6IGlkQmFzZTY0LFxuICAgICAgICAgICAgICAgIGJvZHk6IHBhcmFtcy5tZXNzYWdlQm9keUJhc2U2NCxcbiAgICAgICAgICAgIH0sXG4gICAgICAgIF0sIHBhcmVudFNwYW4pO1xuICAgICAgICBtZXNzYWdlU3Bhbi5maW5pc2goKTtcbiAgICAgICAgdGhpcy5jb25maWcubG9nKCdzZW5kTWVzc2FnZS4gUmVxdWVzdCBwb3N0ZWQnLCBpZCk7XG4gICAgICAgIHJldHVybiB7XG4gICAgICAgICAgICBsYXN0QmxvY2tJZCxcbiAgICAgICAgICAgIHNlbmRpbmdUaW1lOiBNYXRoLnJvdW5kKERhdGUubm93KCkgLyAxMDAwKSxcbiAgICAgICAgfTtcbiAgICB9XG5cbiAgICBhc3luYyBwcm9jZXNzTWVzc2FnZShcbiAgICAgICAgbWVzc2FnZTogVE9OQ29udHJhY3RNZXNzYWdlLFxuICAgICAgICByZXN1bHRGaWVsZHM6IHN0cmluZyxcbiAgICAgICAgcGFyZW50U3Bhbj86IChTcGFuIHwgU3BhbkNvbnRleHQpLFxuICAgICAgICByZXRyeUluZGV4PzogbnVtYmVyLFxuICAgICAgICBhZGRyZXNzPzogc3RyaW5nLFxuICAgICAgICBhYmk/OiBUT05Db250cmFjdEFCSSxcbiAgICAgICAgZnVuY3Rpb25OYW1lPzogc3RyaW5nLFxuICAgICk6IFByb21pc2U8UVRyYW5zYWN0aW9uPiB7XG4gICAgICAgIGNvbnN0IHByb2Nlc3NpbmcgPSBhd2FpdCB0aGlzLnNlbmRNZXNzYWdlKG1lc3NhZ2UsIHBhcmVudFNwYW4pO1xuICAgICAgICBjb25zdCB7IHRyYW5zYWN0aW9uIH0gPSBhd2FpdCB0aGlzLndhaXRGb3JUcmFuc2FjdGlvbih7XG4gICAgICAgICAgICBtZXNzYWdlLFxuICAgICAgICAgICAgbWVzc2FnZVByb2Nlc3NpbmdTdGF0ZTogcHJvY2Vzc2luZyxcbiAgICAgICAgICAgIHBhcmVudFNwYW4sXG4gICAgICAgICAgICBhYmksXG4gICAgICAgICAgICBmdW5jdGlvbk5hbWUsXG4gICAgICAgIH0pO1xuICAgICAgICByZXR1cm4gdHJhbnNhY3Rpb247XG4gICAgfVxuXG5cbiAgICBhc3luYyBmaW5kTGFzdEJsb2NrKGNoYWluOiBudW1iZXIsIHJlc3VsdDogc3RyaW5nLCBhZGRpdGlvbmFsRmlsdGVyPzogYW55KTogUHJvbWlzZTw/YW55PiB7XG4gICAgICAgIGNvbnN0IGJsb2NrcyA9IGF3YWl0IHRoaXMucXVlcmllcy5ibG9ja3MucXVlcnkoe1xuICAgICAgICAgICAgZmlsdGVyOiB7IHdvcmtjaGFpbl9pZDogeyBlcTogY2hhaW4gfSwgLi4uKGFkZGl0aW9uYWxGaWx0ZXIgfHwge30pIH0sXG4gICAgICAgICAgICByZXN1bHQsXG4gICAgICAgICAgICBvcmRlckJ5OiBbXG4gICAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgICAgICBwYXRoOiAnc2VxX25vJyxcbiAgICAgICAgICAgICAgICAgICAgZGlyZWN0aW9uOiAnREVTQycsXG4gICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgIF0sXG4gICAgICAgICAgICBsaW1pdDogMSxcbiAgICAgICAgfSk7XG4gICAgICAgIHJldHVybiBibG9ja3MubGVuZ3RoID4gMCA/IGJsb2Nrc1swXSA6IG51bGw7XG4gICAgfVxuXG4gICAgYXN5bmMgZmluZE1hdGNoaW5nU2hhcmQoc2hhcmRzOiBRU2hhcmRIYXNoW10sIGFkZHJlc3M6IHN0cmluZyk6IFByb21pc2U8P1FTaGFyZEhhc2g+IHtcbiAgICAgICAgcmV0dXJuIHRoaXMucmVxdWVzdENvcmUoJ2NvbnRyYWN0cy5maW5kLnNoYXJkJywge1xuICAgICAgICAgICAgc2hhcmRzLFxuICAgICAgICAgICAgYWRkcmVzcyxcbiAgICAgICAgfSk7XG4gICAgfVxuXG4gICAgYXN5bmMgZmluZExhc3RTaGFyZEJsb2NrKGFkZHJlc3M6IHN0cmluZyk6IFByb21pc2U8c3RyaW5nPiB7XG4gICAgICAgIGNvbnN0IGFkZHJlc3NQYXJ0cyA9IGFkZHJlc3Muc3BsaXQoJzonKTtcbiAgICAgICAgY29uc3Qgd29ya2NoYWluID0gYWRkcmVzc1BhcnRzLmxlbmd0aCA+IDEgPyBOdW1iZXIucGFyc2VJbnQoYWRkcmVzc1BhcnRzWzBdLCAxMCkgOiAwO1xuXG5cbiAgICAgICAgLy8gaWYgYWNjb3VudCByZXNpZGVzIGluIG1hc3RlciBjaGFpbiB0aGVuIHN0YXJ0aW5nIHBvaW50IGlzIGxhc3QgbWFzdGVyIGNoYWluIGJsb2NrXG4gICAgICAgIC8vIGdlbmVyYXRlZCBiZWZvcmUgbWVzc2FnZSB3YXMgc2VudFxuICAgICAgICBjb25zdCBtYXN0ZXJjaGFpbkxhc3RCbG9jayA9IGF3YWl0IHRoaXMuZmluZExhc3RCbG9jayhcbiAgICAgICAgICAgIE1BU1RFUkNIQUlOX0lELFxuICAgICAgICAgICAgJ2lkIG1hc3RlciB7IHNoYXJkX2hhc2hlcyB7IHdvcmtjaGFpbl9pZCBzaGFyZCBkZXNjciB7IHJvb3RfaGFzaCB9IH0gfScsXG4gICAgICAgICk7XG5cbiAgICAgICAgLy8gaWYgYWNjb3VudCByZXNpZGVzIGluIG1hc3RlcmNoYWluIHRoZW4gc3RhcnRpbmcgcG9pbnQgaXMgbGFzdCBtYXN0ZXJjaGFpbiBibG9ja1xuICAgICAgICBpZiAod29ya2NoYWluID09PSBNQVNURVJDSEFJTl9JRCkge1xuICAgICAgICAgICAgaWYgKCFtYXN0ZXJjaGFpbkxhc3RCbG9jaykge1xuICAgICAgICAgICAgICAgIHRocm93IFRPTkNsaWVudEVycm9yLm5vQmxvY2tzKE1BU1RFUkNIQUlOX0lEKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIHJldHVybiBtYXN0ZXJjaGFpbkxhc3RCbG9jay5pZDtcbiAgICAgICAgfVxuXG4gICAgICAgIC8vIGlmIGFjY291bnQgaXMgZnJvbSBvdGhlciBjaGFpbnMgdGhlbiBzdGFydGluZyBwb2ludCBpcyBsYXN0IGFjY291bnQncyBzaGFyZCBibG9ja1xuICAgICAgICAvLyBUbyBvYnRhaW4gaXQgd2UgdGFrZSBtYXN0ZXJjaGFpbiBibG9jayB0byBnZXQgc2hhcmRzIGNvbmZpZ3VyYXRpb24gYW5kIHNlbGVjdFxuICAgICAgICAvLyBtYXRjaGluZyBzaGFyZFxuICAgICAgICBpZiAoIW1hc3RlcmNoYWluTGFzdEJsb2NrKSB7XG4gICAgICAgICAgICAvLyBOb2RlIFNFIGNhc2UgLSBubyBtYXN0ZXJjaGFpbiwgbm8gc2hhcmRpbmcuIENoZWNrIHRoYXQgb25seSBvbmUgc2hhcmRcbiAgICAgICAgICAgIGxldCB3b3JrY2hhaW5MYXN0QmxvY2sgPSBhd2FpdCB0aGlzLmZpbmRMYXN0QmxvY2sod29ya2NoYWluLCAnYWZ0ZXJfbWVyZ2Ugc2hhcmQnKTtcbiAgICAgICAgICAgIGlmICghd29ya2NoYWluTGFzdEJsb2NrKSB7XG4gICAgICAgICAgICAgICAgdGhyb3cgVE9OQ2xpZW50RXJyb3Iubm9CbG9ja3Mod29ya2NoYWluKTtcbiAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgLy8gaWYgd29ya2NoYWluIGlzIHNoYXJkZWQgdGhlbiBpdCBpcyBub3QgTm9kZSBTRSBhbmQgbWFzdGVyY2hhaW4gYmxvY2tzIG1pc3NpbmdcbiAgICAgICAgICAgIC8vIGlzIGVycm9yXG4gICAgICAgICAgICBpZiAod29ya2NoYWluTGFzdEJsb2NrLmFmdGVyX21lcmdlIHx8IHdvcmtjaGFpbkxhc3RCbG9jay5zaGFyZCAhPT0gJzgwMDAwMDAwMDAwMDAwMDAnKSB7XG4gICAgICAgICAgICAgICAgdGhyb3cgVE9OQ2xpZW50RXJyb3Iubm9CbG9ja3MoTUFTVEVSQ0hBSU5fSUQpO1xuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICAvLyBUYWtlIGxhc3QgYmxvY2sgYnkgc2VxX25vXG4gICAgICAgICAgICB3b3JrY2hhaW5MYXN0QmxvY2sgPSBhd2FpdCB0aGlzLmZpbmRMYXN0QmxvY2sod29ya2NoYWluLCAnaWQnLCB7XG4gICAgICAgICAgICAgICAgc2hhcmQ6IHsgZXE6ICc4MDAwMDAwMDAwMDAwMDAwJyB9LFxuICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICBpZiAoIXdvcmtjaGFpbkxhc3RCbG9jaykge1xuICAgICAgICAgICAgICAgIHRocm93IFRPTkNsaWVudEVycm9yLmludmFsaWRCbG9ja2NoYWluKCdObyBzdGFydGluZyBOb2RlIFNFIGJsb2NrIGZvdW5kJyk7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICByZXR1cm4gd29ya2NoYWluTGFzdEJsb2NrLmlkO1xuICAgICAgICB9XG5cbiAgICAgICAgY29uc3Qgc2hhcmRzOiA/UVNoYXJkSGFzaFtdID0gbWFzdGVyY2hhaW5MYXN0QmxvY2s/Lm1hc3Rlcj8uc2hhcmRfaGFzaGVzO1xuICAgICAgICBpZiAoIXNoYXJkcyB8fCBzaGFyZHMubGVuZ3RoID09PSAwKSB7XG4gICAgICAgICAgICB0aHJvdyBUT05DbGllbnRFcnJvci5pbnZhbGlkQmxvY2tjaGFpbignTm8gYHNoYXJkX2hhc2hlc2AgZmllbGQgaW4gbWFzdGVyY2hhaW4gYmxvY2snKTtcbiAgICAgICAgfVxuICAgICAgICBjb25zdCBzaGFyZEJsb2NrID0gYXdhaXQgdGhpcy5maW5kTWF0Y2hpbmdTaGFyZChzaGFyZHMsIGFkZHJlc3MpO1xuICAgICAgICBjb25zdCByb290X2hhc2ggPSBzaGFyZEJsb2NrPy5kZXNjcj8ucm9vdF9oYXNoO1xuICAgICAgICBpZiAoIXJvb3RfaGFzaCkge1xuICAgICAgICAgICAgdGhyb3cgVE9OQ2xpZW50RXJyb3IuaW52YWxpZEJsb2NrY2hhaW4oJ05vIGByb290X2hhc2hgIGZpZWxkIGluIHNoYXJkIGRlc2NyJyk7XG4gICAgICAgIH1cbiAgICAgICAgcmV0dXJuIHJvb3RfaGFzaDtcbiAgICB9XG5cbiAgICBhc3luYyBjaGVja1NoYXJkTWF0Y2goYmxvY2s6IFFCbG9jaywgYWRkcmVzczogc3RyaW5nKTogUHJvbWlzZTxib29sZWFuPiB7XG4gICAgICAgIHJldHVybiAhIShhd2FpdCB0aGlzLmZpbmRNYXRjaGluZ1NoYXJkKFtcbiAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICB3b3JrY2hhaW5faWQ6IGJsb2NrLndvcmtjaGFpbl9pZCB8fCAwLFxuICAgICAgICAgICAgICAgIHNoYXJkOiBibG9jay5zaGFyZCB8fCAnJyxcbiAgICAgICAgICAgIH0sXG4gICAgICAgIF0sIGFkZHJlc3MpKTtcbiAgICB9XG5cbiAgICBhc3luYyB3YWl0TmV4dEJsb2NrKGN1cnJlbnQ6IHN0cmluZywgYWRkcmVzczogc3RyaW5nLCB0aW1lb3V0PzogbnVtYmVyKTogUHJvbWlzZTxRQmxvY2s+IHtcbiAgICAgICAgY29uc3QgYmxvY2sgPSBhd2FpdCB0aGlzLnF1ZXJpZXMuYmxvY2tzLndhaXRGb3Ioe1xuICAgICAgICAgICAgZmlsdGVyOiB7XG4gICAgICAgICAgICAgICAgcHJldl9yZWY6IHtcbiAgICAgICAgICAgICAgICAgICAgcm9vdF9oYXNoOiB7IGVxOiBjdXJyZW50IH0sXG4gICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgIH0sXG4gICAgICAgICAgICByZXN1bHQ6IEJMT0NLX0ZJRUxEUyxcbiAgICAgICAgICAgIHRpbWVvdXQsXG4gICAgICAgIH0pO1xuXG4gICAgICAgIGlmIChibG9jaz8uYWZ0ZXJfc3BsaXQgJiYgIShhd2FpdCB0aGlzLmNoZWNrU2hhcmRNYXRjaChibG9jaywgYWRkcmVzcykpKSB7XG4gICAgICAgICAgICByZXR1cm4gdGhpcy5xdWVyaWVzLmJsb2Nrcy53YWl0Rm9yKHtcbiAgICAgICAgICAgICAgICBmaWx0ZXI6IHtcbiAgICAgICAgICAgICAgICAgICAgaWQ6IHsgbmU6IGJsb2NrLmlkIH0sXG4gICAgICAgICAgICAgICAgICAgIHByZXZfcmVmOiB7XG4gICAgICAgICAgICAgICAgICAgICAgICByb290X2hhc2g6IHsgZXE6IGN1cnJlbnQgfSxcbiAgICAgICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgIHJlc3VsdDogQkxPQ0tfRklFTERTLFxuICAgICAgICAgICAgICAgIHRpbWVvdXQsXG4gICAgICAgICAgICB9KTtcbiAgICAgICAgfVxuICAgICAgICByZXR1cm4gYmxvY2s7XG4gICAgfVxuXG4gICAgYXN5bmMgd2FpdEZvclRyYW5zYWN0aW9uKHBhcmFtczogVE9OV2FpdEZvclRyYW5zYWN0aW9uUGFyYW1zKTogUHJvbWlzZTxUT05Db250cmFjdFJ1blJlc3VsdD4ge1xuICAgICAgICAvLyBjb25zdCBsZWdhY3lTdGFydCA9IERhdGUubm93KCk7XG4gICAgICAgIC8vIGNvbnN0IHJlc3VsdCA9IGF3YWl0IHRoaXMubGVnYWN5V2FpdEZvclRyYW5zYWN0aW9uKHBhcmFtcyk7XG4gICAgICAgIC8vIGNvbnNvbGUubG9nKCc+Pj4nLCBgTGVnYWN5IHdhaXQgZm9yIGE6ICR7RGF0ZS5ub3coKSAtIGxlZ2FjeVN0YXJ0fSBtc2ApO1xuICAgICAgICAvLyByZXR1cm4gcmVzdWx0O1xuXG4gICAgICAgIGNvbnN0IHRvdGFsU3RhcnQgPSBEYXRlLm5vdygpO1xuICAgICAgICBjb25zdCBleHBpcmUgPSBwYXJhbXMubWVzc2FnZS5leHBpcmUgfHwgMDtcbiAgICAgICAgY29uc3QgbWVzc2FnZUlkID0gYXdhaXQgdGhpcy5lbnN1cmVNZXNzYWdlSWQocGFyYW1zLm1lc3NhZ2UpO1xuICAgICAgICBjb25zdCBhZGRyZXNzID0gcGFyYW1zLm1lc3NhZ2UuYWRkcmVzcztcbiAgICAgICAgY29uc3QgcHJvY2Vzc2luZyA9IHsgLi4ucGFyYW1zLm1lc3NhZ2VQcm9jZXNzaW5nU3RhdGUgfTtcbiAgICAgICAgbGV0IHRyYW5zYWN0aW9uID0gbnVsbDtcbiAgICAgICAgdHJ5IHtcbiAgICAgICAgICAgIGNvbnN0IHRpbWVSZXBvcnQgPSBbXTtcblxuICAgICAgICAgICAgY29uc3Qgc3RvcFRpbWUgPSBleHBpcmVcbiAgICAgICAgICAgICAgICB8fCBNYXRoLnJvdW5kKChEYXRlLm5vdygpICsgdGhpcy5jb25maWcubWVzc2FnZVByb2Nlc3NpbmdUaW1lb3V0KCkpIC8gMTAwMCk7XG5cbiAgICAgICAgICAgIGNvbnN0IGluZmluaXRlV2FpdCA9IHBhcmFtcy5pbmZpbml0ZVdhaXQgIT09IGZhbHNlO1xuICAgICAgICAgICAgY29uc3QgYWRkVGltZW91dCA9IHRoaXMuY29uZmlnLm1lc3NhZ2VQcm9jZXNzaW5nVGltZW91dCgpO1xuICAgICAgICAgICAgd2hpbGUgKCF0cmFuc2FjdGlvbikge1xuICAgICAgICAgICAgICAgIGNvbnN0IG5vdyA9IERhdGUubm93KCk7XG4gICAgICAgICAgICAgICAgY29uc3QgdGltZW91dCA9IE1hdGgubWF4KHN0b3BUaW1lLCBub3cpIC0gbm93ICsgYWRkVGltZW91dDtcbiAgICAgICAgICAgICAgICBsZXQgYmxvY2s6ID9RQmxvY2sgPSBudWxsO1xuICAgICAgICAgICAgICAgIHRyeSB7XG4gICAgICAgICAgICAgICAgICAgIGNvbnN0IHN0YXJ0ID0gRGF0ZS5ub3coKTtcbiAgICAgICAgICAgICAgICAgICAgYmxvY2sgPSBhd2FpdCB0aGlzLndhaXROZXh0QmxvY2socHJvY2Vzc2luZy5sYXN0QmxvY2tJZCwgYWRkcmVzcywgdGltZW91dCk7XG4gICAgICAgICAgICAgICAgICAgIGNvbnN0IGVuZCA9IERhdGUubm93KCk7XG4gICAgICAgICAgICAgICAgICAgIHRpbWVSZXBvcnQucHVzaChgQmxvY2sgWyR7YmxvY2suaWQgfHwgJyd9XSBoYXMgYmVlbiByZWNlaXZlZDogJHtlbmQgLSBzdGFydH0gbXMsIGNsaWVudCB0aW1lOiAke01hdGgucm91bmQoZW5kIC8gMTAwMCl9LCBnZW5fdXRpbWU6ICR7YmxvY2suZ2VuX3V0aW1lIHx8IDB9YCk7XG4gICAgICAgICAgICAgICAgfSBjYXRjaCAoZXJyb3IpIHtcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5jb25maWcubG9nKCdCbG9jayB3YWl0aW5nIGZhaWxlZDogJywgZXJyb3IpO1xuICAgICAgICAgICAgICAgICAgICBpZiAoIWluZmluaXRlV2FpdCkge1xuICAgICAgICAgICAgICAgICAgICAgICAgbGV0IHJlc29sdmVkRXJyb3IgPSBlcnJvcjtcbiAgICAgICAgICAgICAgICAgICAgICAgIGlmIChlcnJvci5jb2RlID09PSBUT05FcnJvckNvZGUuV0FJVF9GT1JfVElNRU9VVCkge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHJlc29sdmVkRXJyb3IgPSBUT05DbGllbnRFcnJvci5uZXR3b3JrU2lsZW50KHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgbWVzc2FnZUlkLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBibG9ja0lkOiBwcm9jZXNzaW5nLmxhc3RCbG9ja0lkLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB0aW1lb3V0LFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBtZXNzYWdlUHJvY2Vzc2luZ1N0YXRlOiBwcm9jZXNzaW5nLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBleHBpcmUsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHNlbmRpbmdUaW1lOiBwcm9jZXNzaW5nLnNlbmRpbmdUaW1lLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgICAgdGhyb3cgcmVzb2x2ZWRFcnJvcjtcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICB0aGlzLmNvbmZpZy5sb2coJ1JldHJ5IHdhaXRpbmcuJyk7XG4gICAgICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICAgICAgaWYgKGJsb2NrKSB7XG4gICAgICAgICAgICAgICAgICAgIHByb2Nlc3NpbmcubGFzdEJsb2NrSWQgPSBibG9jay5pZCB8fCAnJztcblxuICAgICAgICAgICAgICAgICAgICBjb25zdCBpbk1zZyA9IChibG9jay5pbl9tc2dfZGVzY3IgfHwgW10pLmZpbmQoeCA9PiB4Lm1zZ19pZCA9PT0gbWVzc2FnZUlkKTtcbiAgICAgICAgICAgICAgICAgICAgaWYgKGluTXNnKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICBjb25zdCB0cmFuc2FjdGlvbklkID0gaW5Nc2cudHJhbnNhY3Rpb25faWQ7XG4gICAgICAgICAgICAgICAgICAgICAgICBpZiAoIXRyYW5zYWN0aW9uSWQpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB0aHJvdyBUT05DbGllbnRFcnJvci5pbnZhbGlkQmxvY2tjaGFpbignTm8gZmllbGQgYHRyYW5zYWN0aW9uX2lkYCBpbiBibG9jaycpO1xuICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgICAgY29uc3QgdHJTdGFydCA9IERhdGUubm93KCk7XG4gICAgICAgICAgICAgICAgICAgICAgICB0cmFuc2FjdGlvbiA9IGF3YWl0IHRoaXMucXVlcmllcy50cmFuc2FjdGlvbnMud2FpdEZvcih7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgZmlsdGVyOiB7IGlkOiB7IGVxOiB0cmFuc2FjdGlvbklkIH0gfSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICByZXN1bHQ6IFRSQU5TQUNUSU9OX0ZJRUxEU19PUkRJTkFSWSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB0aW1lb3V0OiBNQVhfVElNRU9VVCxcbiAgICAgICAgICAgICAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgICAgICAgICAgICAgdHJhY2VNZXNzYWdlKHRoaXMuY29uZmlnLnRyYWNlciwgbWVzc2FnZUlkLCAndHJhbnNhY3Rpb25SZWNlaXZlZCcsIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB0cmFuc2FjdGlvbklkLFxuICAgICAgICAgICAgICAgICAgICAgICAgfSlcbiAgICAgICAgICAgICAgICAgICAgICAgIHRpbWVSZXBvcnQucHVzaChgVHJhbnNhY3Rpb24gWyR7dHJhbnNhY3Rpb25JZH1dIGhhcyBiZWVuIHJlY2VpdmVkOiAke0RhdGUubm93KCkgLSB0clN0YXJ0fSBtc2ApO1xuICAgICAgICAgICAgICAgICAgICB9IGVsc2UgaWYgKChibG9jay5nZW5fdXRpbWUgfHwgMCkgPiBzdG9wVGltZSkge1xuICAgICAgICAgICAgICAgICAgICAgICAgaWYgKGV4cGlyZSkge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRyYWNlTWVzc2FnZSh0aGlzLmNvbmZpZy50cmFjZXIsIG1lc3NhZ2VJZCwgJ21lc3NhZ2VFeHBpcmVkJywge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRocm93IFRPTkNsaWVudEVycm9yLm1lc3NhZ2VFeHBpcmVkKHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgbWVzc2FnZUlkLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBzZW5kaW5nVGltZTogcHJvY2Vzc2luZy5zZW5kaW5nVGltZSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgZXhwaXJlOiBzdG9wVGltZSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgYmxvY2tUaW1lOiBibG9jay5nZW5fdXRpbWUsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGJsb2NrSWQ6IHByb2Nlc3NpbmcubGFzdEJsb2NrSWQsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICAgICB0aHJvdyBUT05DbGllbnRFcnJvci50cmFuc2FjdGlvbldhaXRUaW1lb3V0KHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBtZXNzYWdlSWQsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgc2VuZGluZ1RpbWU6IHByb2Nlc3Npbmcuc2VuZGluZ1RpbWUsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgdGltZW91dCxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBtZXNzYWdlUHJvY2Vzc2luZ1N0YXRlOiBwcm9jZXNzaW5nLFxuICAgICAgICAgICAgICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICAgIHRpbWVSZXBvcnQuc3BsaWNlKDAsIDAsIGBUcmFuc2FjdGlvbiB3YWl0aW5nIHRpbWU6ICR7RGF0ZS5ub3coKSAtIHRvdGFsU3RhcnR9IG1zYCk7XG4gICAgICAgICAgICB0aGlzLmNvbmZpZy5sb2codGltZVJlcG9ydC5qb2luKCdcXG4nKSk7XG4gICAgICAgIH0gY2F0Y2ggKGVycm9yKSB7XG4gICAgICAgICAgICB0aGlzLmNvbmZpZy5sb2coJ1t3YWl0Rm9yVHJhbnNhY3Rpb25dJywgJ0ZBSUxFRCcsIGVycm9yKTtcbiAgICAgICAgICAgIGlmIChlcnJvci5jb2RlID09PSBUT05FcnJvckNvZGUuTUVTU0FHRV9FWFBJUkVEXG4gICAgICAgICAgICAgICAgfHwgZXJyb3IuY29kZSA9PT0gVE9ORXJyb3JDb2RlLlRSQU5TQUNUSU9OX1dBSVRfVElNRU9VVCkge1xuICAgICAgICAgICAgICAgIHRocm93IGF3YWl0IHRoaXMucmVzb2x2ZURldGFpbGVkRXJyb3IoXG4gICAgICAgICAgICAgICAgICAgIGVycm9yLFxuICAgICAgICAgICAgICAgICAgICBwYXJhbXMubWVzc2FnZS5tZXNzYWdlQm9keUJhc2U2NCxcbiAgICAgICAgICAgICAgICAgICAgcHJvY2Vzc2luZy5zZW5kaW5nVGltZSxcbiAgICAgICAgICAgICAgICAgICAgYWRkcmVzcyxcbiAgICAgICAgICAgICAgICApO1xuICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgICB0aHJvdyBlcnJvcjtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuXG4gICAgICAgIHJldHVybiB0aGlzLnByb2Nlc3NUcmFuc2FjdGlvbihcbiAgICAgICAgICAgIGFkZHJlc3MsXG4gICAgICAgICAgICB0cmFuc2FjdGlvbixcbiAgICAgICAgICAgIHBhcmFtcy5hYmksXG4gICAgICAgICAgICBwYXJhbXMuZnVuY3Rpb25OYW1lLFxuICAgICAgICApO1xuICAgIH1cblxuICAgIGFzeW5jIGxlZ2FjeVdhaXRGb3JUcmFuc2FjdGlvbihcbiAgICAgICAgcGFyYW1zOiBUT05XYWl0Rm9yVHJhbnNhY3Rpb25QYXJhbXMsXG4gICAgKTogUHJvbWlzZTxUT05Db250cmFjdFJ1blJlc3VsdD4ge1xuICAgICAgICBjb25zdCB7XG4gICAgICAgICAgICBtZXNzYWdlLFxuICAgICAgICAgICAgYWJpLFxuICAgICAgICAgICAgZnVuY3Rpb25OYW1lLFxuICAgICAgICAgICAgcGFyZW50U3BhbixcbiAgICAgICAgfSA9IHBhcmFtcztcbiAgICAgICAgY29uc3QgbWVzc2FnZUlkID0gYXdhaXQgdGhpcy5lbnN1cmVNZXNzYWdlSWQobWVzc2FnZSk7XG4gICAgICAgIGNvbnN0IGNvbmZpZyA9IHRoaXMuY29uZmlnO1xuICAgICAgICBjb25maWcubG9nKCdbd2FpdEZvclRyYW5zYWN0aW9uXScsIGZ1bmN0aW9uTmFtZSwgbWVzc2FnZSk7XG4gICAgICAgIGxldCBwcm9jZXNzaW5nVGltZW91dCA9IGNvbmZpZy5tZXNzYWdlUHJvY2Vzc2luZ1RpbWVvdXQoKTtcbiAgICAgICAgY29uc3QgcHJvbWlzZXMgPSBbXTtcbiAgICAgICAgY29uc3Qgc2VydmVySW5mbyA9IGF3YWl0IHRoaXMucXVlcmllcy5nZXRTZXJ2ZXJJbmZvKHBhcmVudFNwYW4pO1xuICAgICAgICBjb25zdCBvcGVyYXRpb25JZCA9IHNlcnZlckluZm8uc3VwcG9ydHNPcGVyYXRpb25JZFxuICAgICAgICAgICAgPyB0aGlzLnF1ZXJpZXMuZ2VuZXJhdGVPcGVyYXRpb25JZCgpXG4gICAgICAgICAgICA6IHVuZGVmaW5lZDtcbiAgICAgICAgbGV0IHRyYW5zYWN0aW9uOiA/UVRyYW5zYWN0aW9uID0gbnVsbDtcbiAgICAgICAgY29uc3Qgc2VuZGluZ1RpbWUgPSBNYXRoLnJvdW5kKERhdGUubm93KCkgLyAxMDAwKTtcbiAgICAgICAgbGV0IGJsb2NrVGltZSA9IG51bGw7XG4gICAgICAgIHRyeSB7XG4gICAgICAgICAgICBjb25zdCBleHBpcmUgPSBtZXNzYWdlLmV4cGlyZTtcbiAgICAgICAgICAgIGlmIChleHBpcmUpIHtcbiAgICAgICAgICAgICAgICAvLyBjYWxjdWxhdGUgdGltZW91dCBhY2NvcmRpbmcgdG8gYGV4cGlyZWAgdmFsdWUgKGluIHNlY29uZHMpXG4gICAgICAgICAgICAgICAgLy8gYWRkIHByb2Nlc3NpbmcgdGltZW91dCBhcyBtYXN0ZXIgYmxvY2sgdmFsaWRhdGlvbiB0aW1lXG4gICAgICAgICAgICAgICAgY29uc3QgYmxvY2tUaW1lb3V0ID0gZXhwaXJlICogMTAwMCAtIERhdGUubm93KCkgKyBwcm9jZXNzaW5nVGltZW91dDtcbiAgICAgICAgICAgICAgICAvLyB0cmFuc2FjdGlvbiB0aW1lb3V0IG11c3QgYmUgZ3JlYXRlciB0aGVuIGJsb2NrIHRpbWVvdXRcbiAgICAgICAgICAgICAgICBwcm9jZXNzaW5nVGltZW91dCA9IGJsb2NrVGltZW91dCArIEVYVFJBX1RSQU5TQUNUSU9OX1dBSVRJTkdfVElNRTtcblxuXG4gICAgICAgICAgICAgICAgY29uc3Qgd2FpdEV4cGlyZWQgPSBhc3luYyAoKSA9PiB7XG4gICAgICAgICAgICAgICAgICAgIC8vIHdhaXQgZm9yIGJsb2NrLCBwcm9kdWNlZCBhZnRlciBgZXhwaXJlYCB0byBndWFyYW50ZWUgdGhhdCBtZXNzYWdlIGlzIHJlamVjdGVkXG4gICAgICAgICAgICAgICAgICAgIGxldCBibG9jazogP1FCbG9jayA9IG51bGw7XG4gICAgICAgICAgICAgICAgICAgIHRyeSB7XG4gICAgICAgICAgICAgICAgICAgICAgICBibG9jayA9IGF3YWl0IHRoaXMucXVlcmllcy5ibG9ja3Mud2FpdEZvcih7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgZmlsdGVyOiB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIG1hc3RlcjogeyBtaW5fc2hhcmRfZ2VuX3V0aW1lOiB7IGdlOiBleHBpcmUgfSB9LFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgcmVzdWx0OiAnaWQgZ2VuX3V0aW1lIGluX21zZ19kZXNjciB7IHRyYW5zYWN0aW9uX2lkIH0nLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRpbWVvdXQ6IGJsb2NrVGltZW91dCxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBwYXJlbnRTcGFuLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIG9wZXJhdGlvbklkLFxuICAgICAgICAgICAgICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICAgICAgICAgIH0gY2F0Y2ggKGVycm9yKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICBpZiAoVE9OQ2xpZW50RXJyb3IuaXNXYWl0Rm9yVGltZW91dChlcnJvcikpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB0aHJvdyBUT05DbGllbnRFcnJvci5uZXR3b3JrU2lsZW50KHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgbWVzc2FnZUlkLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBzZW5kaW5nVGltZTogc2VuZGluZ1RpbWUsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGV4cGlyZSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdGltZW91dDogYmxvY2tUaW1lb3V0LFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB0aHJvdyBlcnJvcjtcbiAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICAgICAgICAgIGlmICh0cmFuc2FjdGlvbikge1xuICAgICAgICAgICAgICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICAgICAgICAgICAgICB9XG5cbiAgICAgICAgICAgICAgICAgICAgY29uc3QgdHJhbnNhY3Rpb25JZCA9IGJsb2NrLmluX21zZ19kZXNjclxuICAgICAgICAgICAgICAgICAgICAgICAgJiYgYmxvY2suaW5fbXNnX2Rlc2NyLmZpbmQobXNnID0+ICEhbXNnLnRyYW5zYWN0aW9uX2lkKT8udHJhbnNhY3Rpb25faWQ7XG5cbiAgICAgICAgICAgICAgICAgICAgaWYgKCF0cmFuc2FjdGlvbklkKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICB0aHJvdyBUT05DbGllbnRFcnJvci5pbnRlcm5hbEVycm9yKFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICdJbnZhbGlkIGJsb2NrIHJlY2VpdmVkOiBubyB0cmFuc2FjdGlvbiBJRCcsXG4gICAgICAgICAgICAgICAgICAgICAgICApO1xuICAgICAgICAgICAgICAgICAgICB9XG5cbiAgICAgICAgICAgICAgICAgICAgLy8gY2hlY2sgdGhhdCB0cmFuc2FjdGlvbnMgY29sbGVjdGlvbiBpcyB1cGRhdGVkXG4gICAgICAgICAgICAgICAgICAgIHRyeSB7XG4gICAgICAgICAgICAgICAgICAgICAgICBhd2FpdCB0aGlzLnF1ZXJpZXMudHJhbnNhY3Rpb25zLndhaXRGb3Ioe1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGZpbHRlcjoge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBpZDogeyBlcTogdHJhbnNhY3Rpb25JZCB9LFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgcmVzdWx0OiAnaWQnLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRpbWVvdXQ6IEJMT0NLX1RSQU5TQUNUSU9OX1dBSVRJTkdfVElNRSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBwYXJlbnRTcGFuLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIG9wZXJhdGlvbklkLFxuICAgICAgICAgICAgICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICAgICAgICAgIH0gY2F0Y2ggKGVycm9yKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICBpZiAoVE9OQ2xpZW50RXJyb3IuaXNXYWl0Rm9yVGltZW91dChlcnJvcikpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB0aHJvdyBUT05DbGllbnRFcnJvci5uZXR3b3JrU2lsZW50KHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgbWVzc2FnZUlkLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBibG9ja0lkOiBibG9jay5pZCxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdHJhbnNhY3Rpb25JZCxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdGltZW91dDogQkxPQ0tfVFJBTlNBQ1RJT05fV0FJVElOR19USU1FLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBzZW5kaW5nVGltZTogc2VuZGluZ1RpbWUsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGV4cGlyZSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB9KTtcbiAgICAgICAgICAgICAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgdGhyb3cgZXJyb3I7XG4gICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgYmxvY2tUaW1lID0gYmxvY2suZ2VuX3V0aW1lO1xuICAgICAgICAgICAgICAgIH07XG5cbiAgICAgICAgICAgICAgICBwcm9taXNlcy5wdXNoKHdhaXRFeHBpcmVkKCkpO1xuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICAvLyB3YWl0IGZvciBtZXNzYWdlIHByb2Nlc3NpbmcgdHJhbnNhY3Rpb25cbiAgICAgICAgICAgIHByb21pc2VzLnB1c2gobmV3IFByb21pc2UoKHJlc29sdmUsIHJlamVjdCkgPT4ge1xuICAgICAgICAgICAgICAgIChhc3luYyAoKSA9PiB7XG4gICAgICAgICAgICAgICAgICAgIHRyeSB7XG4gICAgICAgICAgICAgICAgICAgICAgICB0cmFuc2FjdGlvbiA9IGF3YWl0IHRoaXMucXVlcmllcy50cmFuc2FjdGlvbnMud2FpdEZvcih7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgZmlsdGVyOiB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGluX21zZzogeyBlcTogbWVzc2FnZUlkIH0sXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHN0YXR1czogeyBlcTogUVRyYW5zYWN0aW9uUHJvY2Vzc2luZ1N0YXR1cy5maW5hbGl6ZWQgfSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHJlc3VsdDogdHJhbnNhY3Rpb25EZXRhaWxzLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRpbWVvdXQ6IHByb2Nlc3NpbmdUaW1lb3V0LFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIG9wZXJhdGlvbklkLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHBhcmVudFNwYW4sXG4gICAgICAgICAgICAgICAgICAgICAgICB9KTtcbiAgICAgICAgICAgICAgICAgICAgICAgIHJlc29sdmUoKTtcbiAgICAgICAgICAgICAgICAgICAgfSBjYXRjaCAoZXJyb3IpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIGlmIChUT05DbGllbnRFcnJvci5pc1dhaXRGb3JUaW1lb3V0KGVycm9yKSkge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHJlamVjdChUT05DbGllbnRFcnJvci50cmFuc2FjdGlvbldhaXRUaW1lb3V0KHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgbWVzc2FnZUlkLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBzZW5kaW5nVGltZSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdGltZW91dDogcHJvY2Vzc2luZ1RpbWVvdXQsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgfSkpO1xuICAgICAgICAgICAgICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICByZWplY3QoZXJyb3IpO1xuICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgfSkoKTtcbiAgICAgICAgICAgIH0pKTtcblxuICAgICAgICAgICAgdHJ5IHtcbiAgICAgICAgICAgICAgICBhd2FpdCBQcm9taXNlLnJhY2UocHJvbWlzZXMpO1xuICAgICAgICAgICAgfSBmaW5hbGx5IHtcbiAgICAgICAgICAgICAgICBpZiAocHJvbWlzZXMubGVuZ3RoID4gMSAmJiBvcGVyYXRpb25JZCkge1xuICAgICAgICAgICAgICAgICAgICBhd2FpdCB0aGlzLnF1ZXJpZXMuZmluaXNoT3BlcmF0aW9ucyhbb3BlcmF0aW9uSWRdKTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICAgIGlmICghdHJhbnNhY3Rpb24pIHtcbiAgICAgICAgICAgICAgICB0aHJvdyBUT05DbGllbnRFcnJvci5tZXNzYWdlRXhwaXJlZCh7XG4gICAgICAgICAgICAgICAgICAgIG1lc3NhZ2VJZCxcbiAgICAgICAgICAgICAgICAgICAgc2VuZGluZ1RpbWU6IHNlbmRpbmdUaW1lLFxuICAgICAgICAgICAgICAgICAgICBleHBpcmUsXG4gICAgICAgICAgICAgICAgICAgIGJsb2NrVGltZSxcbiAgICAgICAgICAgICAgICB9KTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGNvbnN0IHRyYW5zYWN0aW9uTm93ID0gdHJhbnNhY3Rpb24ubm93IHx8IDA7XG4gICAgICAgICAgICB0aGlzLmNvbmZpZy5sb2coJ1t3YWl0Rm9yVHJhbnNhY3Rpb25dJywgJ1RSQU5TQUNUSU9OX1JFQ0VJVkVEJywge1xuICAgICAgICAgICAgICAgIGlkOiB0cmFuc2FjdGlvbi5pZCxcbiAgICAgICAgICAgICAgICBibG9ja0lkOiB0cmFuc2FjdGlvbi5ibG9ja19pZCxcbiAgICAgICAgICAgICAgICBub3c6IGAke25ldyBEYXRlKHRyYW5zYWN0aW9uTm93ICogMTAwMCkudG9JU09TdHJpbmcoKX0gKCR7dHJhbnNhY3Rpb25Ob3d9KWAsXG4gICAgICAgICAgICB9KTtcbiAgICAgICAgfSBjYXRjaCAoZXJyb3IpIHtcbiAgICAgICAgICAgIHRoaXMuY29uZmlnLmxvZygnW3dhaXRGb3JUcmFuc2FjdGlvbl0nLCAnRkFJTEVEJywgZXJyb3IpO1xuICAgICAgICAgICAgaWYgKFRPTkNsaWVudEVycm9yLmlzTWVzc2FnZUV4cGlyZWQoZXJyb3IpXG4gICAgICAgICAgICAgICAgfHwgVE9OQ2xpZW50RXJyb3IuaXNDbGllbnRFcnJvcihlcnJvciwgVE9ORXJyb3JDb2RlLlRSQU5TQUNUSU9OX1dBSVRfVElNRU9VVCkpIHtcbiAgICAgICAgICAgICAgICBjb25zdCBkZXRhaWxlZEVycm9yOiBhbnkgPSBhd2FpdCB0aGlzLnJlc29sdmVEZXRhaWxlZEVycm9yKFxuICAgICAgICAgICAgICAgICAgICBlcnJvcixcbiAgICAgICAgICAgICAgICAgICAgbWVzc2FnZS5tZXNzYWdlQm9keUJhc2U2NCxcbiAgICAgICAgICAgICAgICAgICAgRGF0ZS5ub3coKSAvIDEwMDAsXG4gICAgICAgICAgICAgICAgICAgIG1lc3NhZ2UuYWRkcmVzcyxcbiAgICAgICAgICAgICAgICApO1xuICAgICAgICAgICAgICAgIGNvbnN0IG1lc3NhZ2VQcm9jZXNzaW5nU3RhdGUgPSBlcnJvci5kYXRhPy5tZXNzYWdlUHJvY2Vzc2luZ1N0YXRlO1xuICAgICAgICAgICAgICAgIGlmIChtZXNzYWdlUHJvY2Vzc2luZ1N0YXRlKSB7XG4gICAgICAgICAgICAgICAgICAgIGlmIChkZXRhaWxlZEVycm9yLmRhdGEpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIGRldGFpbGVkRXJyb3IuZGF0YS5tZXNzYWdlUHJvY2Vzc2luZ1N0YXRlID0gbWVzc2FnZVByb2Nlc3NpbmdTdGF0ZTtcbiAgICAgICAgICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIGRldGFpbGVkRXJyb3IuZGF0YSA9IHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBtZXNzYWdlUHJvY2Vzc2luZ1N0YXRlLFxuICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIHRocm93IGRldGFpbGVkRXJyb3I7XG4gICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAgIHRocm93IGVycm9yO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICAgIHJlbW92ZVR5cGVOYW1lKHRyYW5zYWN0aW9uKTtcbiAgICAgICAgY29uc3QgeyBvdXRwdXQsIGZlZXMgfSA9IGF3YWl0IHRoaXMucHJvY2Vzc1RyYW5zYWN0aW9uKFxuICAgICAgICAgICAgbWVzc2FnZS5hZGRyZXNzLFxuICAgICAgICAgICAgdHJhbnNhY3Rpb24sXG4gICAgICAgICAgICBhYmksXG4gICAgICAgICAgICBmdW5jdGlvbk5hbWUsXG4gICAgICAgICk7XG4gICAgICAgIHJldHVybiB7XG4gICAgICAgICAgICB0cmFuc2FjdGlvbixcbiAgICAgICAgICAgIG91dHB1dCxcbiAgICAgICAgICAgIGZlZXMsXG4gICAgICAgIH07XG4gICAgfVxuXG4gICAgYXN5bmMgcHJvY2Vzc1RyYW5zYWN0aW9uKFxuICAgICAgICBhZGRyZXNzOiBzdHJpbmcsXG4gICAgICAgIHRyYW5zYWN0aW9uOiBRVHJhbnNhY3Rpb24sXG4gICAgICAgIGFiaTogP1RPTkNvbnRyYWN0QUJJLFxuICAgICAgICBmdW5jdGlvbk5hbWU6ID9zdHJpbmcsXG4gICAgKTogUHJvbWlzZTxUT05Db250cmFjdFJ1blJlc3VsdD4ge1xuICAgICAgICB0cnkge1xuICAgICAgICAgICAgY29uc3QgcmVzdWx0ID0gYXdhaXQgdGhpcy5yZXF1ZXN0Q29yZSgnY29udHJhY3RzLnByb2Nlc3MudHJhbnNhY3Rpb24nLCB7XG4gICAgICAgICAgICAgICAgdHJhbnNhY3Rpb24sXG4gICAgICAgICAgICAgICAgYWJpLFxuICAgICAgICAgICAgICAgIGZ1bmN0aW9uTmFtZSxcbiAgICAgICAgICAgICAgICBhZGRyZXNzLFxuICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICByZXR1cm4ge1xuICAgICAgICAgICAgICAgIHRyYW5zYWN0aW9uLFxuICAgICAgICAgICAgICAgIC4uLnJlc3VsdCxcbiAgICAgICAgICAgIH07XG4gICAgICAgIH0gY2F0Y2ggKGVycm9yKSB7XG4gICAgICAgICAgICBjb25zdCBhY2NvdW50cyA9IGF3YWl0IHRoaXMucXVlcmllcy5hY2NvdW50cy5xdWVyeSh7XG4gICAgICAgICAgICAgICAgZmlsdGVyOiB7IGlkOiB7IGVxOiBhZGRyZXNzIH0gfSxcbiAgICAgICAgICAgICAgICByZXN1bHQ6ICdhY2NfdHlwZSBiYWxhbmNlJyxcbiAgICAgICAgICAgICAgICB0aW1lb3V0OiAxMDAwLFxuICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICBpZiAoYWNjb3VudHMubGVuZ3RoID09PSAwKSB7XG4gICAgICAgICAgICAgICAgdGhyb3cgVE9OQ2xpZW50RXJyb3IuYWNjb3VudE1pc3NpbmcoYWRkcmVzcyk7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICB0aHJvdyBlcnJvcjtcbiAgICAgICAgfVxuICAgIH1cblxuICAgIGFzeW5jIHJlc29sdmVEZXRhaWxlZEVycm9yKFxuICAgICAgICBlcnJvcjogRXJyb3IsXG4gICAgICAgIG1lc3NhZ2VCYXNlNjQ6IHN0cmluZyxcbiAgICAgICAgdGltZTogbnVtYmVyLFxuICAgICAgICBhZGRyZXNzOiBzdHJpbmcsXG4gICAgKSB7XG4gICAgICAgIGNvbnN0IGFjY291bnRzID0gYXdhaXQgdGhpcy5xdWVyaWVzLmFjY291bnRzLnF1ZXJ5KHtcbiAgICAgICAgICAgIGZpbHRlcjogeyBpZDogeyBlcTogYWRkcmVzcyB9IH0sXG4gICAgICAgICAgICByZXN1bHQ6ICdpZCBhY2NfdHlwZSBiYWxhbmNlIGJhbGFuY2Vfb3RoZXIgeyBjdXJyZW5jeSB2YWx1ZSB9IGNvZGUgZGF0YSBsYXN0X3BhaWQnLFxuICAgICAgICAgICAgdGltZW91dDogMTAwMCxcbiAgICAgICAgfSk7XG4gICAgICAgIGlmIChhY2NvdW50cy5sZW5ndGggPT09IDApIHtcbiAgICAgICAgICAgIHJldHVybiBUT05DbGllbnRFcnJvci5hY2NvdW50TWlzc2luZyhhZGRyZXNzKTtcbiAgICAgICAgfVxuICAgICAgICBjb25zdCBhY2NvdW50ID0gYWNjb3VudHNbMF07XG4gICAgICAgIHJlbW92ZVR5cGVOYW1lKGFjY291bnQpO1xuICAgICAgICB0cnkge1xuICAgICAgICAgICAgYXdhaXQgdGhpcy5yZXF1ZXN0Q29yZSgnY29udHJhY3RzLnJlc29sdmUuZXJyb3InLCB7XG4gICAgICAgICAgICAgICAgYWRkcmVzcyxcbiAgICAgICAgICAgICAgICBhY2NvdW50LFxuICAgICAgICAgICAgICAgIG1lc3NhZ2VCYXNlNjQsXG4gICAgICAgICAgICAgICAgdGltZTogdGltZSxcbiAgICAgICAgICAgICAgICBtYWluRXJyb3I6IGVycm9yLFxuICAgICAgICAgICAgfSk7XG4gICAgICAgIH0gY2F0Y2ggKHJlc29sdmVkKSB7XG4gICAgICAgICAgICByZXR1cm4gcmVzb2x2ZWQ7XG4gICAgICAgIH1cbiAgICAgICAgcmV0dXJuIGVycm9yO1xuICAgIH1cblxuICAgIGFzeW5jIGlzRGVwbG95ZWQoYWRkcmVzczogc3RyaW5nLCBwYXJlbnRTcGFuPzogKFNwYW4gfCBTcGFuQ29udGV4dCkpOiBQcm9taXNlPGJvb2w+IHtcbiAgICAgICAgY29uc3QgYWNjb3VudCA9IGF3YWl0IHRoaXMucXVlcmllcy5hY2NvdW50cy5xdWVyeSh7XG4gICAgICAgICAgICBmaWx0ZXI6IHtcbiAgICAgICAgICAgICAgICBpZDogeyBlcTogYWRkcmVzcyB9LFxuICAgICAgICAgICAgICAgIGFjY190eXBlOiB7IGVxOiBRQWNjb3VudFR5cGUuYWN0aXZlIH0sXG4gICAgICAgICAgICB9LFxuICAgICAgICAgICAgcmVzdWx0OiAnaWQnLFxuICAgICAgICAgICAgcGFyZW50U3BhbixcbiAgICAgICAgfSk7XG4gICAgICAgIHJldHVybiBhY2NvdW50Lmxlbmd0aCA+IDA7XG4gICAgfVxuXG4gICAgYXN5bmMgcHJvY2Vzc0RlcGxveU1lc3NhZ2UoXG4gICAgICAgIG1lc3NhZ2U6IFRPTkNvbnRyYWN0RGVwbG95TWVzc2FnZSxcbiAgICAgICAgcGFyZW50U3Bhbj86IChTcGFuIHwgU3BhbkNvbnRleHQpLFxuICAgICAgICByZXRyeUluZGV4PzogbnVtYmVyLFxuICAgICk6IFByb21pc2U8VE9OQ29udHJhY3REZXBsb3lSZXN1bHQ+IHtcbiAgICAgICAgdGhpcy5jb25maWcubG9nKCdwcm9jZXNzRGVwbG95TWVzc2FnZScsIG1lc3NhZ2UpO1xuICAgICAgICBpZiAoYXdhaXQgdGhpcy5pc0RlcGxveWVkKG1lc3NhZ2UuYWRkcmVzcywgcGFyZW50U3BhbikpIHtcbiAgICAgICAgICAgIHJldHVybiB7XG4gICAgICAgICAgICAgICAgYWRkcmVzczogbWVzc2FnZS5hZGRyZXNzLFxuICAgICAgICAgICAgICAgIGFscmVhZHlEZXBsb3llZDogdHJ1ZSxcbiAgICAgICAgICAgIH07XG4gICAgICAgIH1cbiAgICAgICAgY29uc3QgcHJvY2Vzc2luZyA9IGF3YWl0IHRoaXMuc2VuZE1lc3NhZ2UobWVzc2FnZS5tZXNzYWdlLCBwYXJlbnRTcGFuKTtcbiAgICAgICAgcmV0dXJuIHRoaXMud2FpdEZvckRlcGxveVRyYW5zYWN0aW9uKG1lc3NhZ2UsIHByb2Nlc3NpbmcsIHBhcmVudFNwYW4pO1xuICAgIH1cblxuICAgIGFzeW5jIHdhaXRGb3JEZXBsb3lUcmFuc2FjdGlvbihcbiAgICAgICAgZGVwbG95TWVzc2FnZTogVE9OQ29udHJhY3REZXBsb3lNZXNzYWdlLFxuICAgICAgICBtZXNzYWdlUHJvY2Vzc2luZ1N0YXRlOiBUT05NZXNzYWdlUHJvY2Vzc2luZ1N0YXRlLFxuICAgICAgICBwYXJlbnRTcGFuPzogKFNwYW4gfCBTcGFuQ29udGV4dCksXG4gICAgICAgIGluZmluaXRlV2FpdD86IGJvb2xlYW4sXG4gICAgKTogUHJvbWlzZTxUT05Db250cmFjdERlcGxveVJlc3VsdD4ge1xuICAgICAgICBjb25zdCBtZXNzYWdlID0gZGVwbG95TWVzc2FnZS5tZXNzYWdlO1xuICAgICAgICBjb25zdCByZXN1bHQgPSBhd2FpdCB0aGlzLndhaXRGb3JUcmFuc2FjdGlvbih7XG4gICAgICAgICAgICBtZXNzYWdlLFxuICAgICAgICAgICAgbWVzc2FnZVByb2Nlc3NpbmdTdGF0ZSxcbiAgICAgICAgICAgIHBhcmVudFNwYW4sXG4gICAgICAgICAgICBpbmZpbml0ZVdhaXQsXG4gICAgICAgIH0pO1xuICAgICAgICByZXR1cm4ge1xuICAgICAgICAgICAgLi4ucmVzdWx0LFxuICAgICAgICAgICAgYWRkcmVzczogbWVzc2FnZS5hZGRyZXNzLFxuICAgICAgICAgICAgYWxyZWFkeURlcGxveWVkOiBmYWxzZSxcbiAgICAgICAgfTtcbiAgICB9XG5cblxuICAgIGFzeW5jIHByb2Nlc3NSdW5NZXNzYWdlKFxuICAgICAgICBydW5NZXNzYWdlOiBUT05Db250cmFjdFJ1bk1lc3NhZ2UsXG4gICAgICAgIHBhcmVudFNwYW4/OiAoU3BhbiB8IFNwYW5Db250ZXh0KSxcbiAgICApOiBQcm9taXNlPFRPTkNvbnRyYWN0UnVuUmVzdWx0PiB7XG4gICAgICAgIHRoaXMuY29uZmlnLmxvZygncHJvY2Vzc1J1bk1lc3NhZ2UnLCBydW5NZXNzYWdlKTtcbiAgICAgICAgY29uc3QgcHJvY2Vzc2luZyA9IGF3YWl0IHRoaXMuc2VuZE1lc3NhZ2UocnVuTWVzc2FnZS5tZXNzYWdlLCBwYXJlbnRTcGFuKTtcbiAgICAgICAgcmV0dXJuIHRoaXMud2FpdEZvclJ1blRyYW5zYWN0aW9uKHJ1bk1lc3NhZ2UsIHByb2Nlc3NpbmcsIHBhcmVudFNwYW4pO1xuICAgIH1cblxuICAgIGFzeW5jIHdhaXRGb3JSdW5UcmFuc2FjdGlvbihcbiAgICAgICAgcnVuTWVzc2FnZTogVE9OQ29udHJhY3RSdW5NZXNzYWdlLFxuICAgICAgICBtZXNzYWdlUHJvY2Vzc2luZ1N0YXRlOiBUT05NZXNzYWdlUHJvY2Vzc2luZ1N0YXRlLFxuICAgICAgICBwYXJlbnRTcGFuPzogKFNwYW4gfCBTcGFuQ29udGV4dCksXG4gICAgICAgIGluZmluaXRlV2FpdD86IGJvb2xlYW4sXG4gICAgKTogUHJvbWlzZTxUT05Db250cmFjdFJ1blJlc3VsdD4ge1xuICAgICAgICByZXR1cm4gdGhpcy53YWl0Rm9yVHJhbnNhY3Rpb24oe1xuICAgICAgICAgICAgbWVzc2FnZTogcnVuTWVzc2FnZS5tZXNzYWdlLFxuICAgICAgICAgICAgbWVzc2FnZVByb2Nlc3NpbmdTdGF0ZSxcbiAgICAgICAgICAgIHBhcmVudFNwYW4sXG4gICAgICAgICAgICBpbmZpbml0ZVdhaXQsXG4gICAgICAgICAgICBhYmk6IHJ1bk1lc3NhZ2UuYWJpLFxuICAgICAgICAgICAgZnVuY3Rpb25OYW1lOiBydW5NZXNzYWdlLmZ1bmN0aW9uTmFtZSxcbiAgICAgICAgfSk7XG4gICAgfVxuXG4gICAgLyoqXG4gICAgICogRGVwcmVjYXRlZC4gVXNlIGBydW5NZXNzYWdlTG9jYWxgIGluc3RlYWQuXG4gICAgICogQHBhcmFtIHBhcmFtc1xuICAgICAqIEBwYXJhbSB3YWl0UGFyYW1zXG4gICAgICogQHBhcmFtIHBhcmVudFNwYW5cbiAgICAgKiBAcmV0dXJucyB7UHJvbWlzZTx1bmtub3duPn1cbiAgICAgKi9cbiAgICBhc3luYyBwcm9jZXNzUnVuTWVzc2FnZUxvY2FsKFxuICAgICAgICBwYXJhbXM6IFRPTkNvbnRyYWN0UnVuTWVzc2FnZSxcbiAgICAgICAgd2FpdFBhcmFtcz86IFRPTkNvbnRyYWN0QWNjb3VudFdhaXRQYXJhbXMsXG4gICAgICAgIHBhcmVudFNwYW4/OiAoU3BhbiB8IFNwYW5Db250ZXh0KSxcbiAgICApOiBQcm9taXNlPFRPTkNvbnRyYWN0UnVuUmVzdWx0PiB7XG4gICAgICAgIHRoaXMuY29uZmlnLmxvZygncHJvY2Vzc1J1bk1lc3NhZ2VMb2NhbCcsIHBhcmFtcyk7XG5cbiAgICAgICAgY29uc3QgYWNjb3VudCA9IGF3YWl0IHRoaXMuZ2V0QWNjb3VudChwYXJhbXMuYWRkcmVzcywgdHJ1ZSwgd2FpdFBhcmFtcywgcGFyZW50U3Bhbik7XG5cbiAgICAgICAgcmV0dXJuIHRoaXMucmVxdWVzdENvcmUoJ2NvbnRyYWN0cy5ydW4ubG9jYWwubXNnJywge1xuICAgICAgICAgICAgYWRkcmVzczogcGFyYW1zLmFkZHJlc3MsXG4gICAgICAgICAgICBhY2NvdW50LFxuICAgICAgICAgICAgYWJpOiBwYXJhbXMuYWJpLFxuICAgICAgICAgICAgZnVuY3Rpb25OYW1lOiBwYXJhbXMuZnVuY3Rpb25OYW1lLFxuICAgICAgICAgICAgbWVzc2FnZUJhc2U2NDogcGFyYW1zLm1lc3NhZ2UubWVzc2FnZUJvZHlCYXNlNjQsXG4gICAgICAgIH0pO1xuICAgIH1cblxuICAgIC8vIEZlZSBjYWxjdWxhdGlvblxuXG4gICAgYmlnQmFsYW5jZSA9ICcweDEwMDAwMDAwMDAwMDAwJztcblxuICAgIGFzeW5jIGNhbGNSdW5GZWVzKFxuICAgICAgICBwYXJhbXM6IFRPTkNvbnRyYWN0Q2FsY1J1bkZlZVBhcmFtcyxcbiAgICAgICAgcGFyZW50U3Bhbj86IChTcGFuIHwgU3BhbkNvbnRleHQpLFxuICAgICk6IFByb21pc2U8VE9OQ29udHJhY3RDYWxjRmVlUmVzdWx0PiB7XG4gICAgICAgIHRoaXMuY29uZmlnLmxvZygnY2FsY1J1bkZlZXMnLCBwYXJhbXMpO1xuXG4gICAgICAgIGNvbnN0IGFjY291bnQgPSBhd2FpdCB0aGlzLmdldEFjY291bnQocGFyYW1zLmFkZHJlc3MsIHRydWUsIHBhcmFtcy53YWl0UGFyYW1zLCBwYXJlbnRTcGFuKTtcblxuICAgICAgICBpZiAocGFyYW1zLmVtdWxhdGVCYWxhbmNlKSB7XG4gICAgICAgICAgICBhY2NvdW50LmJhbGFuY2UgPSB0aGlzLmJpZ0JhbGFuY2U7XG4gICAgICAgIH1cblxuICAgICAgICByZXR1cm4gdGhpcy5yZXF1ZXN0Q29yZSgnY29udHJhY3RzLnJ1bi5mZWUnLCB7XG4gICAgICAgICAgICBhZGRyZXNzOiBwYXJhbXMuYWRkcmVzcyxcbiAgICAgICAgICAgIGFjY291bnQsXG4gICAgICAgICAgICBhYmk6IHBhcmFtcy5hYmksXG4gICAgICAgICAgICBmdW5jdGlvbk5hbWU6IHBhcmFtcy5mdW5jdGlvbk5hbWUsXG4gICAgICAgICAgICBpbnB1dDogcGFyYW1zLmlucHV0LFxuICAgICAgICAgICAga2V5UGFpcjogcGFyYW1zLmtleVBhaXIsXG4gICAgICAgIH0pO1xuICAgIH1cblxuICAgIGFzeW5jIGNhbGNEZXBsb3lGZWVzKFxuICAgICAgICBwYXJhbXM6IFRPTkNvbnRyYWN0Q2FsY0RlcGxveUZlZVBhcmFtcyxcbiAgICAgICAgcGFyZW50U3Bhbj86IChTcGFuIHwgU3BhbkNvbnRleHQpLFxuICAgICk6IFByb21pc2U8VE9OQ29udHJhY3RDYWxjRmVlUmVzdWx0PiB7XG4gICAgICAgIHRoaXMuY29uZmlnLmxvZygnY2FsY0RlcGxveUZlZXMnLCBwYXJhbXMpO1xuXG4gICAgICAgIGNvbnN0IG1lc3NhZ2UgPSBhd2FpdCB0aGlzLmNyZWF0ZURlcGxveU1lc3NhZ2UocGFyYW1zKTtcblxuICAgICAgICByZXR1cm4gdGhpcy5jYWxjTXNnUHJvY2Vzc0ZlZXMoe1xuICAgICAgICAgICAgYWRkcmVzczogbWVzc2FnZS5hZGRyZXNzLFxuICAgICAgICAgICAgbWVzc2FnZTogbWVzc2FnZS5tZXNzYWdlLFxuICAgICAgICAgICAgZW11bGF0ZUJhbGFuY2U6IHBhcmFtcy5lbXVsYXRlQmFsYW5jZSxcbiAgICAgICAgICAgIG5ld0FjY291bnQ6IHBhcmFtcy5uZXdBY2NvdW50LFxuICAgICAgICB9LCBwYXJlbnRTcGFuKTtcbiAgICB9XG5cbiAgICBhc3luYyBjYWxjTXNnUHJvY2Vzc0ZlZXMoXG4gICAgICAgIHBhcmFtczogVE9OQ29udHJhY3RDYWxjTXNnUHJvY2Vzc2luZ0ZlZXNQYXJhbXMsXG4gICAgICAgIHBhcmVudFNwYW4/OiAoU3BhbiB8IFNwYW5Db250ZXh0KSxcbiAgICApOiBQcm9taXNlPFRPTkNvbnRyYWN0Q2FsY0ZlZVJlc3VsdD4ge1xuICAgICAgICB0aGlzLmNvbmZpZy5sb2coJ2NhbGNNc2dQcm9jZXNzRmVlcycsIHBhcmFtcyk7XG5cbiAgICAgICAgbGV0IGFjY291bnQ6IFFBY2NvdW50ID0ge1xuICAgICAgICAgICAgYmFsYW5jZTogdGhpcy5iaWdCYWxhbmNlLFxuICAgICAgICAgICAgaWQ6IHBhcmFtcy5hZGRyZXNzLFxuICAgICAgICAgICAgbGFzdF9wYWlkOiBNYXRoLmZsb29yKERhdGUubm93KCkgLyAxMDAwKSxcbiAgICAgICAgfTtcblxuICAgICAgICBpZiAoIXBhcmFtcy5uZXdBY2NvdW50KSB7XG4gICAgICAgICAgICBhY2NvdW50ID0gYXdhaXQgdGhpcy5nZXRBY2NvdW50KHBhcmFtcy5hZGRyZXNzLCBmYWxzZSwgcGFyYW1zLndhaXRQYXJhbXMsIHBhcmVudFNwYW4pO1xuICAgICAgICB9XG5cbiAgICAgICAgaWYgKHBhcmFtcy5lbXVsYXRlQmFsYW5jZSkge1xuICAgICAgICAgICAgYWNjb3VudC5iYWxhbmNlID0gdGhpcy5iaWdCYWxhbmNlO1xuICAgICAgICB9XG5cbiAgICAgICAgcmV0dXJuIHRoaXMucmVxdWVzdENvcmUoJ2NvbnRyYWN0cy5ydW4uZmVlLm1zZycsIHtcbiAgICAgICAgICAgIGFkZHJlc3M6IHBhcmFtcy5hZGRyZXNzLFxuICAgICAgICAgICAgYWNjb3VudCxcbiAgICAgICAgICAgIG1lc3NhZ2VCYXNlNjQ6IHBhcmFtcy5tZXNzYWdlLm1lc3NhZ2VCb2R5QmFzZTY0LFxuICAgICAgICB9KTtcbiAgICB9XG5cbiAgICAvLyBBZGRyZXNzIHByb2Nlc3NpbmdcblxuICAgIGFzeW5jIGNvbnZlcnRBZGRyZXNzKFxuICAgICAgICBwYXJhbXM6IFRPTkNvbnRyYWN0Q29udmVydEFkZHJlc3NQYXJhbXMsXG4gICAgKTogUHJvbWlzZTxUT05Db250cmFjdENvbnZlcnRBZGRyZXNzUmVzdWx0PiB7XG4gICAgICAgIHJldHVybiB0aGlzLnJlcXVlc3RDb3JlKCdjb250cmFjdHMuYWRkcmVzcy5jb252ZXJ0JywgcGFyYW1zKTtcbiAgICB9XG5cbiAgICAvLyBJbnRlcm5hbHNcblxuICAgIGFzeW5jIGludGVybmFsRGVwbG95TmF0aXZlKHBhcmFtczogVE9OQ29udHJhY3REZXBsb3lQYXJhbXMpOiBQcm9taXNlPFRPTkNvbnRyYWN0RGVwbG95UmVzdWx0PiB7XG4gICAgICAgIHJldHVybiB0aGlzLnJlcXVlc3RDb3JlKCdjb250cmFjdHMuZGVwbG95Jywge1xuICAgICAgICAgICAgYWJpOiBwYXJhbXMucGFja2FnZS5hYmksXG4gICAgICAgICAgICBjb25zdHJ1Y3RvckhlYWRlcjogcGFyYW1zLmNvbnN0cnVjdG9ySGVhZGVyLFxuICAgICAgICAgICAgY29uc3RydWN0b3JQYXJhbXM6IHBhcmFtcy5jb25zdHJ1Y3RvclBhcmFtcyxcbiAgICAgICAgICAgIGluaXRQYXJhbXM6IHBhcmFtcy5pbml0UGFyYW1zLFxuICAgICAgICAgICAgaW1hZ2VCYXNlNjQ6IHBhcmFtcy5wYWNrYWdlLmltYWdlQmFzZTY0LFxuICAgICAgICAgICAga2V5UGFpcjogcGFyYW1zLmtleVBhaXIsXG4gICAgICAgIH0pO1xuICAgIH1cblxuXG4gICAgYXN5bmMgaW50ZXJuYWxSdW5OYXRpdmUocGFyYW1zOiBUT05Db250cmFjdFJ1blBhcmFtcyk6IFByb21pc2U8VE9OQ29udHJhY3RSdW5SZXN1bHQ+IHtcbiAgICAgICAgcmV0dXJuIHRoaXMucmVxdWVzdENvcmUoJ2NvbnRyYWN0cy5ydW4nLCB7XG4gICAgICAgICAgICBhZGRyZXNzOiBwYXJhbXMuYWRkcmVzcyxcbiAgICAgICAgICAgIGFiaTogcGFyYW1zLmFiaSxcbiAgICAgICAgICAgIGZ1bmN0aW9uTmFtZTogcGFyYW1zLmZ1bmN0aW9uTmFtZSxcbiAgICAgICAgICAgIGhlYWRlcjogcGFyYW1zLmhlYWRlcixcbiAgICAgICAgICAgIGlucHV0OiBwYXJhbXMuaW5wdXQsXG4gICAgICAgICAgICBrZXlQYWlyOiBwYXJhbXMua2V5UGFpcixcbiAgICAgICAgfSk7XG4gICAgfVxuXG5cbiAgICBhc3luYyByZXRyeUNhbGwoY2FsbDogKGluZGV4OiBudW1iZXIpID0+IFByb21pc2U8YW55Pik6IFByb21pc2U8YW55PiB7XG4gICAgICAgIGNvbnN0IHJldHJpZXNDb3VudCA9IHRoaXMuY29uZmlnLm1lc3NhZ2VSZXRyaWVzQ291bnQoKTtcbiAgICAgICAgZm9yIChsZXQgaSA9IDA7IGkgPD0gcmV0cmllc0NvdW50OyBpICs9IDEpIHtcbiAgICAgICAgICAgIGlmIChpID4gMCkge1xuICAgICAgICAgICAgICAgIHRoaXMuY29uZmlnLmxvZyhgUmV0cnkgIyR7aX1gKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIHRyeSB7XG4gICAgICAgICAgICAgICAgcmV0dXJuIGF3YWl0IGNhbGwoaSk7XG4gICAgICAgICAgICB9IGNhdGNoIChlcnJvcikge1xuICAgICAgICAgICAgICAgIC8vIHJldHJ5IGlmIG1lc3NhZ2UgZXhwaXJlZCBvciBpZiByZXNvbHZpbmcgcmV0dXJuZWQgdGhhdCBtZXNzYWdlIGV4cGlyZWQvcmVwbGF5XG4gICAgICAgICAgICAgICAgLy8gcHJvdGVjdGlvbiBlcnJvciBvciBpZiB0cmFuc2FjdGlvbiB3aXRoIG1lc3NhZ2UgZXhwaXJlZC9yZXBsYXkgcHJvdGVjdGlvbiBlcnJvclxuICAgICAgICAgICAgICAgIC8vIHJldHVybmVkXG4gICAgICAgICAgICAgICAgY29uc3QgdXNlUmV0cnkgPSBlcnJvci5jb2RlID09PSBUT05FcnJvckNvZGUuTUVTU0FHRV9FWFBJUkVEXG4gICAgICAgICAgICAgICAgICAgIHx8IFRPTkNsaWVudEVycm9yLmlzT3JpZ2luYWxDb250cmFjdEVycm9yKGVycm9yLCBUT05Db250cmFjdEV4aXRDb2RlLlJFUExBWV9QUk9URUNUSU9OKVxuICAgICAgICAgICAgICAgICAgICB8fCBUT05DbGllbnRFcnJvci5pc09yaWdpbmFsQ29udHJhY3RFcnJvcihlcnJvciwgVE9OQ29udHJhY3RFeGl0Q29kZS5NRVNTQUdFX0VYUElSRUQpXG4gICAgICAgICAgICAgICAgICAgIHx8IFRPTkNsaWVudEVycm9yLmlzUmVzb2x2ZWRDb250cmFjdEVycm9yQWZ0ZXJFeHBpcmUoZXJyb3IsIFRPTkNvbnRyYWN0RXhpdENvZGUuUkVQTEFZX1BST1RFQ1RJT04pXG4gICAgICAgICAgICAgICAgICAgIHx8IFRPTkNsaWVudEVycm9yLmlzUmVzb2x2ZWRDb250cmFjdEVycm9yQWZ0ZXJFeHBpcmUoZXJyb3IsIFRPTkNvbnRyYWN0RXhpdENvZGUuTUVTU0FHRV9FWFBJUkVEKTtcbiAgICAgICAgICAgICAgICBpZiAoIXVzZVJldHJ5IHx8IGkgPT09IHJldHJpZXNDb3VudCkge1xuICAgICAgICAgICAgICAgICAgICB0aHJvdyBlcnJvcjtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgICAgdGhyb3cgVE9OQ2xpZW50RXJyb3IuaW50ZXJuYWxFcnJvcignQWxsIHJldHJ5IGF0dGVtcHRzIGZhaWxlZCcpO1xuICAgIH1cblxuXG4gICAgYXN5bmMgaW50ZXJuYWxEZXBsb3lKcyhcbiAgICAgICAgcGFyYW1zOiBUT05Db250cmFjdERlcGxveVBhcmFtcyxcbiAgICAgICAgcGFyZW50U3Bhbj86IChTcGFuIHwgU3BhbkNvbnRleHQpLFxuICAgICk6IFByb21pc2U8VE9OQ29udHJhY3REZXBsb3lSZXN1bHQ+IHtcbiAgICAgICAgdGhpcy5jb25maWcubG9nKCdEZXBsb3kgc3RhcnQnKTtcbiAgICAgICAgcmV0dXJuIHRoaXMucmV0cnlDYWxsKGFzeW5jIChyZXRyeUluZGV4KSA9PiB7XG4gICAgICAgICAgICBjb25zdCBkZXBsb3lNZXNzYWdlID0gYXdhaXQgdGhpcy5jcmVhdGVEZXBsb3lNZXNzYWdlKHBhcmFtcywgcmV0cnlJbmRleCk7XG4gICAgICAgICAgICBpZiAoYXdhaXQgdGhpcy5pc0RlcGxveWVkKGRlcGxveU1lc3NhZ2UuYWRkcmVzcywgcGFyZW50U3BhbikpIHtcbiAgICAgICAgICAgICAgICByZXR1cm4ge1xuICAgICAgICAgICAgICAgICAgICBhZGRyZXNzOiBkZXBsb3lNZXNzYWdlLmFkZHJlc3MsXG4gICAgICAgICAgICAgICAgICAgIGFscmVhZHlEZXBsb3llZDogdHJ1ZSxcbiAgICAgICAgICAgICAgICB9O1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgY29uc3QgcHJvY2Vzc2luZyA9IGF3YWl0IHRoaXMuc2VuZE1lc3NhZ2UoZGVwbG95TWVzc2FnZS5tZXNzYWdlLCBwYXJlbnRTcGFuKTtcbiAgICAgICAgICAgIHJldHVybiB0aGlzLndhaXRGb3JEZXBsb3lUcmFuc2FjdGlvbihkZXBsb3lNZXNzYWdlLCBwcm9jZXNzaW5nLCBwYXJlbnRTcGFuKTtcbiAgICAgICAgfSk7XG4gICAgfVxuXG5cbiAgICBhc3luYyBpbnRlcm5hbFJ1bkpzKFxuICAgICAgICBwYXJhbXM6IFRPTkNvbnRyYWN0UnVuUGFyYW1zLFxuICAgICAgICBwYXJlbnRTcGFuPzogKFNwYW4gfCBTcGFuQ29udGV4dCksXG4gICAgKTogUHJvbWlzZTxUT05Db250cmFjdFJ1blJlc3VsdD4ge1xuICAgICAgICB0aGlzLmNvbmZpZy5sb2coJ1J1biBzdGFydCcpO1xuICAgICAgICByZXR1cm4gdGhpcy5yZXRyeUNhbGwoYXN5bmMgKHJldHJ5SW5kZXgpID0+IHtcbiAgICAgICAgICAgIGNvbnN0IHJ1bk1lc3NhZ2UgPSBhd2FpdCB0aGlzLmNyZWF0ZVJ1bk1lc3NhZ2UocGFyYW1zLCByZXRyeUluZGV4KTtcbiAgICAgICAgICAgIGNvbnN0IHByb2Nlc3NpbmcgPSBhd2FpdCB0aGlzLnNlbmRNZXNzYWdlKHJ1bk1lc3NhZ2UubWVzc2FnZSwgcGFyZW50U3Bhbik7XG4gICAgICAgICAgICByZXR1cm4gdGhpcy53YWl0Rm9yUnVuVHJhbnNhY3Rpb24ocnVuTWVzc2FnZSwgcHJvY2Vzc2luZywgcGFyZW50U3Bhbik7XG4gICAgICAgIH0pO1xuICAgIH1cblxuXG4gICAgYXN5bmMgZ2V0QWNjb3VudChcbiAgICAgICAgYWRkcmVzczogc3RyaW5nLFxuICAgICAgICBhY3RpdmU6IGJvb2xlYW4sXG4gICAgICAgIHdhaXRQYXJhbXM/OiBUT05Db250cmFjdEFjY291bnRXYWl0UGFyYW1zLFxuICAgICAgICBwYXJlbnRTcGFuPzogKFNwYW4gfCBTcGFuQ29udGV4dCksXG4gICAgKTogUHJvbWlzZTxRQWNjb3VudD4ge1xuICAgICAgICBjb25zdCBmaWx0ZXI6IHsgW3N0cmluZ106IGFueSB9ID0ge1xuICAgICAgICAgICAgaWQ6IHsgZXE6IGFkZHJlc3MgfSxcbiAgICAgICAgfTtcbiAgICAgICAgaWYgKHdhaXRQYXJhbXMgJiYgd2FpdFBhcmFtcy50cmFuc2FjdGlvbkx0KSB7XG4gICAgICAgICAgICBmaWx0ZXIubGFzdF90cmFuc19sdCA9IHsgZ2U6IHdhaXRQYXJhbXMudHJhbnNhY3Rpb25MdCB9O1xuICAgICAgICB9XG4gICAgICAgIGlmIChhY3RpdmUpIHtcbiAgICAgICAgICAgIGZpbHRlci5hY2NfdHlwZSA9IHsgZXE6IFFBY2NvdW50VHlwZS5hY3RpdmUgfTtcbiAgICAgICAgfVxuXG4gICAgICAgIHRoaXMuY29uZmlnLmxvZygnZ2V0QWNjb3VudC4gRmlsdGVyJywgZmlsdGVyKTtcbiAgICAgICAgY29uc3QgYWNjb3VudHMgPSBhd2FpdCB0aGlzLnF1ZXJpZXMuYWNjb3VudHMucXVlcnkoe1xuICAgICAgICAgICAgZmlsdGVyLFxuICAgICAgICAgICAgcmVzdWx0OiAnaWQgYWNjX3R5cGUgY29kZSBkYXRhIGJhbGFuY2UgYmFsYW5jZV9vdGhlciB7IGN1cnJlbmN5IHZhbHVlIH0gbGFzdF9wYWlkJyxcbiAgICAgICAgICAgIC4uLih3YWl0UGFyYW1zICYmIHdhaXRQYXJhbXMudGltZW91dCA/IHsgdGltZW91dDogd2FpdFBhcmFtcy50aW1lb3V0IH0gOiB7fSksXG4gICAgICAgICAgICBwYXJlbnRTcGFuLFxuICAgICAgICB9KTtcbiAgICAgICAgaWYgKGFjY291bnRzLmxlbmd0aCA9PT0gMCkge1xuICAgICAgICAgICAgdGhyb3cgVE9OQ2xpZW50RXJyb3IuYWNjb3VudE1pc3NpbmcoYWRkcmVzcyk7XG4gICAgICAgIH1cbiAgICAgICAgY29uc3QgYWNjb3VudCA9IGFjY291bnRzWzBdO1xuICAgICAgICByZW1vdmVUeXBlTmFtZShhY2NvdW50KTtcbiAgICAgICAgdGhpcy5jb25maWcubG9nKCdnZXRBY2NvdW50LiBBY2NvdW50IHJlY2VpdmVkJywgYWNjb3VudCk7XG4gICAgICAgIHJldHVybiBhY2NvdW50O1xuICAgIH1cblxuICAgIGFzeW5jIGludGVybmFsUnVuTG9jYWxKcyhcbiAgICAgICAgcGFyYW1zOiBUT05Db250cmFjdFJ1bkxvY2FsUGFyYW1zLFxuICAgICAgICBwYXJlbnRTcGFuPzogKFNwYW4gfCBTcGFuQ29udGV4dCksXG4gICAgKTogUHJvbWlzZTxUT05Db250cmFjdFJ1bkxvY2FsUmVzdWx0PiB7XG4gICAgICAgIGNvbnN0IGFkZHJlc3MgPSBwYXJhbXMuYWRkcmVzcztcbiAgICAgICAgaWYgKCFhZGRyZXNzKSB7XG4gICAgICAgICAgICB0aHJvdyBUT05DbGllbnRFcnJvci5hZGRyZXNzUmVxdWlyZWRGb3JSdW5Mb2NhbCgpO1xuICAgICAgICB9XG4gICAgICAgIGNvbnN0IGFjY291bnQgPSBwYXJhbXMuYWNjb3VudCB8fCAoYXdhaXQgdGhpcy5nZXRBY2NvdW50KFxuICAgICAgICAgICAgYWRkcmVzcyxcbiAgICAgICAgICAgIGZhbHNlLFxuICAgICAgICAgICAgcGFyYW1zLndhaXRQYXJhbXMsXG4gICAgICAgICAgICBwYXJlbnRTcGFuLFxuICAgICAgICApKTtcbiAgICAgICAgY29uc3QgaGFzQ29kZSA9IGFjY291bnQuY29kZSB8fCBhY2NvdW50LmNvZGVfaGFzaDtcbiAgICAgICAgaWYgKCFoYXNDb2RlKSB7XG4gICAgICAgICAgICB0aHJvdyBUT05DbGllbnRFcnJvci5hY2NvdW50Q29kZU1pc3NpbmcoYWRkcmVzcywgKGFjY291bnQ6IGFueSkuYmFsYW5jZSk7XG4gICAgICAgIH1cbiAgICAgICAgcmV0dXJuIHRoaXMucmVxdWVzdENvcmUoJ2NvbnRyYWN0cy5ydW4ubG9jYWwnLCB7XG4gICAgICAgICAgICBhZGRyZXNzLFxuICAgICAgICAgICAgYWNjb3VudCxcbiAgICAgICAgICAgIGFiaTogcGFyYW1zLmFiaSxcbiAgICAgICAgICAgIGZ1bmN0aW9uTmFtZTogcGFyYW1zLmZ1bmN0aW9uTmFtZSxcbiAgICAgICAgICAgIGlucHV0OiBwYXJhbXMuaW5wdXQsXG4gICAgICAgICAgICBrZXlQYWlyOiBwYXJhbXMua2V5UGFpcixcbiAgICAgICAgICAgIGZ1bGxSdW46IHBhcmFtcy5mdWxsUnVuLFxuICAgICAgICB9KTtcbiAgICB9XG5cbiAgICBhc3luYyBpbnRlcm5hbFJ1bk1lc3NhZ2VMb2NhbEpzKFxuICAgICAgICBwYXJhbXM6IFRPTkNvbnRyYWN0UnVuTWVzc2FnZUxvY2FsUGFyYW1zLFxuICAgICAgICBwYXJlbnRTcGFuPzogKFNwYW4gfCBTcGFuQ29udGV4dCksXG4gICAgKTogUHJvbWlzZTxUT05Db250cmFjdFJ1bkxvY2FsUmVzdWx0PiB7XG4gICAgICAgIGNvbnN0IGFkZHJlc3MgPSBwYXJhbXMuYWRkcmVzcztcbiAgICAgICAgaWYgKCFhZGRyZXNzKSB7XG4gICAgICAgICAgICB0aHJvdyBUT05DbGllbnRFcnJvci5hZGRyZXNzUmVxdWlyZWRGb3JSdW5Mb2NhbCgpO1xuICAgICAgICB9XG4gICAgICAgIGNvbnN0IGFjY291bnQgPSBwYXJhbXMuYWNjb3VudCB8fCAoYXdhaXQgdGhpcy5nZXRBY2NvdW50KFxuICAgICAgICAgICAgYWRkcmVzcyxcbiAgICAgICAgICAgIGZhbHNlLFxuICAgICAgICAgICAgcGFyYW1zLndhaXRQYXJhbXMsXG4gICAgICAgICAgICBwYXJlbnRTcGFuLFxuICAgICAgICApKTtcbiAgICAgICAgY29uc3QgaGFzQ29kZSA9IGFjY291bnQuY29kZSB8fCBhY2NvdW50LmNvZGVfaGFzaDtcbiAgICAgICAgaWYgKCFoYXNDb2RlKSB7XG4gICAgICAgICAgICB0aHJvdyBUT05DbGllbnRFcnJvci5hY2NvdW50Q29kZU1pc3NpbmcoYWRkcmVzcywgKGFjY291bnQ6IGFueSkuYmFsYW5jZSk7XG4gICAgICAgIH1cbiAgICAgICAgcmV0dXJuIHRoaXMucmVxdWVzdENvcmUoJ2NvbnRyYWN0cy5ydW4ubG9jYWwubXNnJywge1xuICAgICAgICAgICAgYWRkcmVzcyxcbiAgICAgICAgICAgIGFjY291bnQsXG4gICAgICAgICAgICBhYmk6IHBhcmFtcy5hYmksXG4gICAgICAgICAgICBmdW5jdGlvbk5hbWU6IHBhcmFtcy5mdW5jdGlvbk5hbWUsXG4gICAgICAgICAgICBtZXNzYWdlQmFzZTY0OiBwYXJhbXMubWVzc2FnZUJvZHlCYXNlNjQsXG4gICAgICAgICAgICBmdWxsUnVuOiBwYXJhbXMuZnVsbFJ1bixcbiAgICAgICAgfSk7XG4gICAgfVxufVxuXG5UT05Db250cmFjdHNNb2R1bGUubW9kdWxlTmFtZSA9ICdUT05Db250cmFjdHNNb2R1bGUnO1xuXG5jb25zdCB0cmFuc2FjdGlvbkRldGFpbHMgPSBgXG4gICAgaWRcbiAgICBpbl9tc2dcbiAgICB0cl90eXBlXG4gICAgc3RhdHVzXG4gICAgaW5fbXNnXG4gICAgb3V0X21zZ3NcbiAgICBibG9ja19pZFxuICAgIG5vd1xuICAgIGFib3J0ZWRcbiAgICBsdFxuICAgIHRvdGFsX2ZlZXNcbiAgICBzdG9yYWdlIHtcbiAgICAgICAgc3RhdHVzX2NoYW5nZVxuICAgICAgICBzdG9yYWdlX2ZlZXNfY29sbGVjdGVkXG4gICAgfVxuICAgIGNvbXB1dGUge1xuICAgICAgICBjb21wdXRlX3R5cGVcbiAgICAgICAgc2tpcHBlZF9yZWFzb25cbiAgICAgICAgc3VjY2Vzc1xuICAgICAgICBleGl0X2NvZGVcbiAgICAgICAgZ2FzX2ZlZXNcbiAgICAgICAgZ2FzX3VzZWRcbiAgICB9XG4gICAgYWN0aW9uIHtcbiAgICAgICAgc3VjY2Vzc1xuICAgICAgICB2YWxpZFxuICAgICAgICByZXN1bHRfY29kZVxuICAgICAgICBub19mdW5kc1xuICAgICAgICB0b3RhbF9md2RfZmVlc1xuICAgICAgICB0b3RhbF9hY3Rpb25fZmVlc1xuICAgIH1cbiAgICBvdXRfbWVzc2FnZXMge1xuICAgICAgICBpZFxuICAgICAgICBtc2dfdHlwZVxuICAgICAgICBib2R5XG4gICAgICAgIHZhbHVlXG4gICAgfVxuICAgYDtcblxuY29uc3QgQkxPQ0tfRklFTERTID0gYFxuICAgIGlkXG4gICAgZ2VuX3V0aW1lXG4gICAgYWZ0ZXJfc3BsaXRcbiAgICB3b3JrY2hhaW5faWRcbiAgICBzaGFyZFxuICAgIGluX21zZ19kZXNjciB7XG4gICAgICAgIG1zZ19pZFxuICAgICAgICB0cmFuc2FjdGlvbl9pZFxuICAgIH1cbmA7XG5cbmNvbnN0IFRSQU5TQUNUSU9OX0ZJRUxEU19PUkRJTkFSWSA9IGBcbiAgICBpZFxuICAgIGFib3J0ZWRcbiAgICBjb21wdXRlIHtcbiAgICAgICAgc2tpcHBlZF9yZWFzb25cbiAgICAgICAgZXhpdF9jb2RlXG4gICAgICAgIHN1Y2Nlc3NcbiAgICAgICAgZ2FzX2ZlZXNcbiAgICB9XG4gICAgc3RvcmFnZSB7XG4gICAgICAgc3RhdHVzX2NoYW5nZVxuICAgICAgIHN0b3JhZ2VfZmVlc19jb2xsZWN0ZWRcbiAgICB9XG4gICAgYWN0aW9uIHtcbiAgICAgICAgc3VjY2Vzc1xuICAgICAgICB2YWxpZFxuICAgICAgICBub19mdW5kc1xuICAgICAgICByZXN1bHRfY29kZVxuICAgICAgICB0b3RhbF9md2RfZmVlc1xuICAgICAgICB0b3RhbF9hY3Rpb25fZmVlc1xuICAgIH1cbiAgICBpbl9tc2dcbiAgICBub3dcbiAgICBvdXRfbXNnc1xuICAgIG91dF9tZXNzYWdlcyB7XG4gICAgICAgIGlkXG4gICAgICAgIGJvZHlcbiAgICAgICAgbXNnX3R5cGVcbiAgICAgICAgdmFsdWVcbiAgICB9XG4gICAgc3RhdHVzXG4gICAgdG90YWxfZmVlc1xuYDtcbiJdfQ==