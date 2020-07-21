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
        var coreParams, address, account;
        return _regenerator["default"].wrap(function _callee11$(_context11) {
          while (1) {
            switch (_context11.prev = _context11.next) {
              case 0:
                coreParams = params;

                if (!(!params.codeBase64 || !params.dataBase64)) {
                  _context11.next = 15;
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

                if (account.code) {
                  _context11.next = 10;
                  break;
                }

                throw _TONClient.TONClientError.accountCodeMissing(address, account.balance);

              case 10:
                account.codeBase64 = account.code;
                account.dataBase64 = account.data;
                delete account.code;
                delete account.data;
                coreParams = _objectSpread(_objectSpread({}, account), params);

              case 15:
                return _context11.abrupt("return", this.requestCore('tvm.get', coreParams));

              case 16:
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
                return this.resolveDetailedError(_context40.t0, message.messageBodyBase64, Date.now(), message.address);

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
                  time: Math.round(time / 1000),
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
                useRetry = _context55.t0.code === _TONClient.TONErrorCode.MESSAGE_EXPIRED || _TONClient.TONClientError.isContractError(_context55.t0, _TONClient.TONContractExitCode.REPLAY_PROTECTION, true) || _TONClient.TONClientError.isContractError(_context55.t0, _TONClient.TONContractExitCode.MESSAGE_EXPIRED, true) || _TONClient.TONClientError.isResolvedContractErrorAfterExpire(_context55.t0, _TONClient.TONContractExitCode.REPLAY_PROTECTION) || _TONClient.TONClientError.isResolvedContractErrorAfterExpire(_context55.t0, _TONClient.TONContractExitCode.MESSAGE_EXPIRED);

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

                if (account.code) {
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

                if (account.code) {
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy9tb2R1bGVzL1RPTkNvbnRyYWN0c01vZHVsZS5qcyJdLCJuYW1lcyI6WyJUT05BZGRyZXNzU3RyaW5nVmFyaWFudCIsIkFjY291bnRJZCIsIkhleCIsIkJhc2U2NCIsIlRPTkNsaWVudFRyYW5zYWN0aW9uUGhhc2UiLCJzdG9yYWdlIiwiY29tcHV0ZVNraXBwZWQiLCJjb21wdXRlVm0iLCJhY3Rpb24iLCJ1bmtub3duIiwiVE9OQ2xpZW50Q29tcHV0ZVNraXBwZWRTdGF0dXMiLCJub1N0YXRlIiwiYmFkU3RhdGUiLCJub0dhcyIsIlRPTkNsaWVudFN0b3JhZ2VTdGF0dXMiLCJ1bmNoYW5nZWQiLCJmcm96ZW4iLCJkZWxldGVkIiwiUUluTXNnVHlwZSIsImV4dGVybmFsIiwiaWhyIiwiaW1tZWRpYXRlbHkiLCJ0cmFuc2l0IiwiZGlzY2FyZGVkRmluYWwiLCJkaXNjYXJkZWRUcmFuc2l0IiwiUU91dE1zZ1R5cGUiLCJvdXRNc2dOZXciLCJkZXF1ZXVlSW1tZWRpYXRlbHkiLCJkZXF1ZXVlIiwidHJhbnNpdFJlcXVpcmVkIiwibm9uZSIsIlFNZXNzYWdlVHlwZSIsImludGVybmFsIiwiZXh0SW4iLCJleHRPdXQiLCJRTWVzc2FnZVByb2Nlc3NpbmdTdGF0dXMiLCJxdWV1ZWQiLCJwcm9jZXNzaW5nIiwicHJlbGltaW5hcnkiLCJwcm9wb3NlZCIsImZpbmFsaXplZCIsInJlZnVzZWQiLCJ0cmFuc2l0aW5nIiwiUUJsb2NrUHJvY2Vzc2luZ1N0YXR1cyIsIlFTcGxpdFR5cGUiLCJzcGxpdCIsIm1lcmdlIiwiUUFjY291bnRUeXBlIiwidW5pbml0IiwiYWN0aXZlIiwiUVRyYW5zYWN0aW9uVHlwZSIsIm9yZGluYXJ5IiwidGljayIsInRvY2siLCJzcGxpdFByZXBhcmUiLCJzcGxpdEluc3RhbGwiLCJtZXJnZVByZXBhcmUiLCJtZXJnZUluc3RhbGwiLCJRVHJhbnNhY3Rpb25Qcm9jZXNzaW5nU3RhdHVzIiwiUUFjY291bnRTdGF0dXMiLCJub25FeGlzdCIsIlFBY2NvdW50U3RhdHVzQ2hhbmdlIiwiUUNvbXB1dGVUeXBlIiwic2tpcHBlZCIsInZtIiwiUVNraXBSZWFzb24iLCJRQm91bmNlVHlwZSIsIm5lZ0Z1bmRzIiwibm9GdW5kcyIsIm9rIiwiTUFTVEVSQ0hBSU5fSUQiLCJFWFRSQV9UUkFOU0FDVElPTl9XQUlUSU5HX1RJTUUiLCJCTE9DS19UUkFOU0FDVElPTl9XQUlUSU5HX1RJTUUiLCJyZW1vdmVUeXBlTmFtZSIsIm9iaiIsIl9fdHlwZW5hbWUiLCJPYmplY3QiLCJ2YWx1ZXMiLCJmb3JFYWNoIiwidmFsdWUiLCJyZW1vdmVQcm9wcyIsInBhdGhzIiwicmVzdWx0IiwicGF0aCIsImRvdFBvcyIsImluZGV4T2YiLCJuYW1lIiwic3Vic3RyIiwiY2hpbGQiLCJyZWR1Y2VkQ2hpbGQiLCJzdGFydE1lc3NhZ2VUcmFjZVNwYW4iLCJ0cmFjZXIiLCJtZXNzYWdlSWQiLCJvcGVyYXRpb25OYW1lIiwidGFncyIsInRyYWNlSWQiLCJzcGFuSWQiLCJyb290Q29udGV4dCIsImV4dHJhY3QiLCJGT1JNQVRfVEVYVF9NQVAiLCJzdGFydFNwYW4iLCJjaGlsZE9mIiwidHJhY2VNZXNzYWdlIiwic3BhbiIsImZpbmlzaCIsIlRPTkNvbnRyYWN0c01vZHVsZSIsImNvbmZpZyIsImNvbnRleHQiLCJnZXRNb2R1bGUiLCJUT05Db25maWdNb2R1bGUiLCJxdWVyaWVzIiwiVE9OUXVlcmllc01vZHVsZSIsInBhcmFtcyIsInBhcmVudFNwYW4iLCJhY2NvdW50cyIsInF1ZXJ5IiwiZmlsdGVyIiwiaWQiLCJlcSIsImFkZHJlc3MiLCJsZW5ndGgiLCJiYWxhbmNlR3JhbXMiLCJiYWxhbmNlIiwidHJhY2UiLCJzZXRUYWciLCJpbnRlcm5hbERlcGxveUpzIiwiaW50ZXJuYWxSdW5KcyIsImludGVybmFsUnVuTG9jYWxKcyIsImludGVybmFsUnVuTWVzc2FnZUxvY2FsSnMiLCJjb3JlUGFyYW1zIiwiY29kZUJhc2U2NCIsImRhdGFCYXNlNjQiLCJUT05DbGllbnRFcnJvciIsImFkZHJlc3NSZXF1aXJlZEZvclJ1bkxvY2FsIiwiZ2V0QWNjb3VudCIsInRpbWVvdXQiLCJ3YWl0Rm9yVGltZW91dCIsImFjY291bnQiLCJjb2RlIiwiYWNjb3VudENvZGVNaXNzaW5nIiwiZGF0YSIsInJlcXVlc3RDb3JlIiwiY29ucyIsIml0ZW0iLCJpbnZhbGlkQ29ucyIsInB1c2giLCJyZXRyeUluZGV4IiwibG9nIiwiYWJpIiwiY29uc3RydWN0b3JIZWFkZXIiLCJjb25zdHJ1Y3RvclBhcmFtcyIsImluaXRQYXJhbXMiLCJpbWFnZUJhc2U2NCIsImtleVBhaXIiLCJ3b3JrY2hhaW5JZCIsIm1lc3NhZ2UiLCJmdW5jdGlvbk5hbWUiLCJoZWFkZXIiLCJ0cnlJbmRleCIsImlucHV0IiwicHVibGljS2V5SGV4IiwiYWRkcmVzc0hleCIsInNpZ25QYXJhbXMiLCJlbmNvZGVkIiwiY3JlYXRlU2lnbmVkTWVzc2FnZSIsInVuc2lnbmVkTWVzc2FnZSIsInVuc2lnbmVkQnl0ZXNCYXNlNjQiLCJzaWduQnl0ZXNCYXNlNjQiLCJleHBpcmUiLCJnZXRCb2NIYXNoIiwiYm9jQmFzZTY0IiwibWVzc2FnZUJvZHlCYXNlNjQiLCJoYXNoIiwiRGF0ZSIsIm5vdyIsInNlbmROb2RlUmVxdWVzdEZhaWxlZCIsIk1hdGgiLCJzZXJ2ZXJUaW1lRGVsdGEiLCJhYnMiLCJvdXRPZlN5bmNUaHJlc2hvbGQiLCJkcm9wU2VydmVyVGltZURlbHRhIiwiY2xvY2tPdXRPZlN5bmMiLCJmaW5kTGFzdFNoYXJkQmxvY2siLCJsYXN0QmxvY2tJZCIsImVuc3VyZU1lc3NhZ2VJZCIsImlkQmFzZTY0IiwiQnVmZmVyIiwiZnJvbSIsInRvU3RyaW5nIiwibWVzc2FnZVNwYW4iLCJzdGFydFJvb3RTcGFuIiwiYWRkVGFncyIsIm1lc3NhZ2VTaXplIiwiY2VpbCIsInBvc3RSZXF1ZXN0cyIsImJvZHkiLCJzZW5kaW5nVGltZSIsInJvdW5kIiwicmVzdWx0RmllbGRzIiwic2VuZE1lc3NhZ2UiLCJ3YWl0Rm9yVHJhbnNhY3Rpb24iLCJtZXNzYWdlUHJvY2Vzc2luZ1N0YXRlIiwidHJhbnNhY3Rpb24iLCJjaGFpbiIsImFkZGl0aW9uYWxGaWx0ZXIiLCJibG9ja3MiLCJ3b3JrY2hhaW5faWQiLCJvcmRlckJ5IiwiZGlyZWN0aW9uIiwibGltaXQiLCJzaGFyZHMiLCJhZGRyZXNzUGFydHMiLCJ3b3JrY2hhaW4iLCJOdW1iZXIiLCJwYXJzZUludCIsImZpbmRMYXN0QmxvY2siLCJtYXN0ZXJjaGFpbkxhc3RCbG9jayIsIm5vQmxvY2tzIiwid29ya2NoYWluTGFzdEJsb2NrIiwiYWZ0ZXJfbWVyZ2UiLCJzaGFyZCIsImludmFsaWRCbG9ja2NoYWluIiwibWFzdGVyIiwic2hhcmRfaGFzaGVzIiwiZmluZE1hdGNoaW5nU2hhcmQiLCJzaGFyZEJsb2NrIiwicm9vdF9oYXNoIiwiZGVzY3IiLCJibG9jayIsImN1cnJlbnQiLCJ3YWl0Rm9yIiwicHJldl9yZWYiLCJCTE9DS19GSUVMRFMiLCJhZnRlcl9zcGxpdCIsImNoZWNrU2hhcmRNYXRjaCIsIm5lIiwidG90YWxTdGFydCIsInRpbWVSZXBvcnQiLCJzdG9wVGltZSIsIm1lc3NhZ2VQcm9jZXNzaW5nVGltZW91dCIsImluZmluaXRlV2FpdCIsImFkZFRpbWVvdXQiLCJtYXgiLCJzdGFydCIsIndhaXROZXh0QmxvY2siLCJlbmQiLCJnZW5fdXRpbWUiLCJyZXNvbHZlZEVycm9yIiwiVE9ORXJyb3JDb2RlIiwiV0FJVF9GT1JfVElNRU9VVCIsIm5ldHdvcmtTaWxlbnQiLCJibG9ja0lkIiwiaW5Nc2ciLCJpbl9tc2dfZGVzY3IiLCJmaW5kIiwieCIsIm1zZ19pZCIsInRyYW5zYWN0aW9uSWQiLCJ0cmFuc2FjdGlvbl9pZCIsInRyU3RhcnQiLCJ0cmFuc2FjdGlvbnMiLCJUUkFOU0FDVElPTl9GSUVMRFNfT1JESU5BUlkiLCJNQVhfVElNRU9VVCIsIm1lc3NhZ2VFeHBpcmVkIiwiYmxvY2tUaW1lIiwidHJhbnNhY3Rpb25XYWl0VGltZW91dCIsInNwbGljZSIsImpvaW4iLCJNRVNTQUdFX0VYUElSRUQiLCJUUkFOU0FDVElPTl9XQUlUX1RJTUVPVVQiLCJyZXNvbHZlRGV0YWlsZWRFcnJvciIsInByb2Nlc3NUcmFuc2FjdGlvbiIsInByb2Nlc3NpbmdUaW1lb3V0IiwicHJvbWlzZXMiLCJnZXRTZXJ2ZXJJbmZvIiwic2VydmVySW5mbyIsIm9wZXJhdGlvbklkIiwic3VwcG9ydHNPcGVyYXRpb25JZCIsImdlbmVyYXRlT3BlcmF0aW9uSWQiLCJ1bmRlZmluZWQiLCJibG9ja1RpbWVvdXQiLCJ3YWl0RXhwaXJlZCIsIm1pbl9zaGFyZF9nZW5fdXRpbWUiLCJnZSIsImlzV2FpdEZvclRpbWVvdXQiLCJtc2ciLCJpbnRlcm5hbEVycm9yIiwiUHJvbWlzZSIsInJlc29sdmUiLCJyZWplY3QiLCJpbl9tc2ciLCJzdGF0dXMiLCJ0cmFuc2FjdGlvbkRldGFpbHMiLCJyYWNlIiwiZmluaXNoT3BlcmF0aW9ucyIsInRyYW5zYWN0aW9uTm93IiwiYmxvY2tfaWQiLCJ0b0lTT1N0cmluZyIsImlzTWVzc2FnZUV4cGlyZWQiLCJpc0NsaWVudEVycm9yIiwiZGV0YWlsZWRFcnJvciIsIm91dHB1dCIsImZlZXMiLCJhY2NvdW50TWlzc2luZyIsImVycm9yIiwibWVzc2FnZUJhc2U2NCIsInRpbWUiLCJtYWluRXJyb3IiLCJhY2NfdHlwZSIsImlzRGVwbG95ZWQiLCJhbHJlYWR5RGVwbG95ZWQiLCJ3YWl0Rm9yRGVwbG95VHJhbnNhY3Rpb24iLCJkZXBsb3lNZXNzYWdlIiwicnVuTWVzc2FnZSIsIndhaXRGb3JSdW5UcmFuc2FjdGlvbiIsIndhaXRQYXJhbXMiLCJlbXVsYXRlQmFsYW5jZSIsImJpZ0JhbGFuY2UiLCJjcmVhdGVEZXBsb3lNZXNzYWdlIiwiY2FsY01zZ1Byb2Nlc3NGZWVzIiwibmV3QWNjb3VudCIsImxhc3RfcGFpZCIsImZsb29yIiwiY2FsbCIsInJldHJpZXNDb3VudCIsIm1lc3NhZ2VSZXRyaWVzQ291bnQiLCJpIiwidXNlUmV0cnkiLCJpc0NvbnRyYWN0RXJyb3IiLCJUT05Db250cmFjdEV4aXRDb2RlIiwiUkVQTEFZX1BST1RFQ1RJT04iLCJpc1Jlc29sdmVkQ29udHJhY3RFcnJvckFmdGVyRXhwaXJlIiwicmV0cnlDYWxsIiwiY3JlYXRlUnVuTWVzc2FnZSIsInRyYW5zYWN0aW9uTHQiLCJsYXN0X3RyYW5zX2x0IiwiZnVsbFJ1biIsIlRPTk1vZHVsZSIsIm1vZHVsZU5hbWUiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7QUFLQTs7QUFzREE7O0FBQ0E7O0FBQ0E7O0FBQ0E7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFFTyxJQUFNQSx1QkFBdUIsR0FBRztBQUNuQ0MsRUFBQUEsU0FBUyxFQUFFLFdBRHdCO0FBRW5DQyxFQUFBQSxHQUFHLEVBQUUsS0FGOEI7QUFHbkNDLEVBQUFBLE1BQU0sRUFBRTtBQUgyQixDQUFoQzs7QUFNQSxJQUFNQyx5QkFBeUIsR0FBRztBQUNyQ0MsRUFBQUEsT0FBTyxFQUFFLFNBRDRCO0FBRXJDQyxFQUFBQSxjQUFjLEVBQUUsZ0JBRnFCO0FBR3JDQyxFQUFBQSxTQUFTLEVBQUUsV0FIMEI7QUFJckNDLEVBQUFBLE1BQU0sRUFBRSxRQUo2QjtBQUtyQ0MsRUFBQUEsT0FBTyxFQUFFO0FBTDRCLENBQWxDOztBQVFBLElBQU1DLDZCQUE2QixHQUFHO0FBQ3pDQyxFQUFBQSxPQUFPLEVBQUUsQ0FEZ0M7QUFFekNDLEVBQUFBLFFBQVEsRUFBRSxDQUYrQjtBQUd6Q0MsRUFBQUEsS0FBSyxFQUFFO0FBSGtDLENBQXRDOztBQU1BLElBQU1DLHNCQUFzQixHQUFHO0FBQ2xDQyxFQUFBQSxTQUFTLEVBQUUsQ0FEdUI7QUFFbENDLEVBQUFBLE1BQU0sRUFBRSxDQUYwQjtBQUdsQ0MsRUFBQUEsT0FBTyxFQUFFO0FBSHlCLENBQS9COztBQU1BLElBQU1DLFVBQVUsR0FBRztBQUN0QkMsRUFBQUEsUUFBUSxFQUFFLENBRFk7QUFFdEJDLEVBQUFBLEdBQUcsRUFBRSxDQUZpQjtBQUd0QkMsRUFBQUEsV0FBVyxFQUFFLENBSFM7QUFJdEIsV0FB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QkFBeEMsQzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozt1SEFZUGhPLE0sRUFDQUMsVTs7Ozs7O0FBRU1NLGdCQUFBQSxPLEdBQVVQLE1BQU0sQ0FBQ08sTzs7b0JBQ2xCQSxPOzs7OztzQkFDS2EsMEJBQWVDLDBCQUFmLEU7OztnQ0FFTXJCLE1BQU0sQ0FBQ3lCLE87Ozs7Ozs7O3VCQUFrQixLQUFLSCxVQUFMLENBQ3JDZixPQURxQyxFQUVyQyxLQUZxQyxFQUdyQ1AsTUFBTSxDQUFDMk0sVUFIOEIsRUFJckMxTSxVQUpxQyxDOzs7Ozs7QUFBbkN3QixnQkFBQUEsTzs7b0JBTURBLE9BQU8sQ0FBQ0MsSTs7Ozs7c0JBQ0hOLDBCQUFlTyxrQkFBZixDQUFrQ3BCLE9BQWxDLEVBQTRDa0IsT0FBRCxDQUFlZixPQUExRCxDOzs7bURBRUgsS0FBS21CLFdBQUwsQ0FBaUIseUJBQWpCLEVBQTRDO0FBQy9DdEIsa0JBQUFBLE9BQU8sRUFBUEEsT0FEK0M7QUFFL0NrQixrQkFBQUEsT0FBTyxFQUFQQSxPQUYrQztBQUcvQ1csa0JBQUFBLEdBQUcsRUFBRXBDLE1BQU0sQ0FBQ29DLEdBSG1DO0FBSS9DUSxrQkFBQUEsWUFBWSxFQUFFNUMsTUFBTSxDQUFDNEMsWUFKMEI7QUFLL0NxSixrQkFBQUEsYUFBYSxFQUFFak0sTUFBTSxDQUFDMkQsaUJBTHlCO0FBTS9DcUssa0JBQUFBLE9BQU8sRUFBRWhPLE1BQU0sQ0FBQ2dPO0FBTitCLGlCQUE1QyxDOzs7Ozs7Ozs7Ozs7Ozs7Ozs7O0VBcHJDaUNDLHFCOzs7QUErckNoRHhPLGtCQUFrQixDQUFDeU8sVUFBbkIsR0FBZ0Msb0JBQWhDO0FBRUEsSUFBTTlDLGtCQUFrQiwya0JBQXhCO0FBd0NBLElBQU01RCxZQUFZLCtJQUFsQjtBQVlBLElBQU02QiwyQkFBMkIsK2VBQWpDIiwic291cmNlc0NvbnRlbnQiOlsiLypcbiAqIENvcHlyaWdodCAyMDE4LTIwMjAgVE9OIERFViBTT0xVVElPTlMgTFRELlxuICovXG4vLyBAZmxvd1xuXG5pbXBvcnQgeyBUcmFjZXIsIEZPUk1BVF9URVhUX01BUCwgU3BhbiwgU3BhbkNvbnRleHQgfSBmcm9tICdvcGVudHJhY2luZyc7XG5pbXBvcnQgdHlwZSB7XG4gICAgUUFjY291bnQsXG4gICAgUUJsb2NrLFxuICAgIFFNZXNzYWdlLFxuICAgIFFUcmFuc2FjdGlvbixcbiAgICBUT05Db250cmFjdEFCSSxcbiAgICBUT05Db250cmFjdEFjY291bnRXYWl0UGFyYW1zLFxuICAgIFRPTkNvbnRyYWN0Q29udmVydEFkZHJlc3NQYXJhbXMsXG4gICAgVE9OQ29udHJhY3RDb252ZXJ0QWRkcmVzc1Jlc3VsdCxcbiAgICBUT05Db250cmFjdENyZWF0ZVJ1bkJvZHlQYXJhbXMsXG4gICAgVE9OQ29udHJhY3RDcmVhdGVSdW5Cb2R5UmVzdWx0LFxuICAgIFRPTkNvbnRyYWN0Q3JlYXRlU2lnbmVkRGVwbG95TWVzc2FnZVBhcmFtcyxcbiAgICBUT05Db250cmFjdENyZWF0ZVNpZ25lZE1lc3NhZ2VQYXJhbXMsXG4gICAgVE9OQ29udHJhY3RDcmVhdGVTaWduZWRSdW5NZXNzYWdlUGFyYW1zLFxuICAgIFRPTkNvbnRyYWN0RGVjb2RlTWVzc2FnZUJvZHlQYXJhbXMsXG4gICAgVE9OQ29udHJhY3REZWNvZGVNZXNzYWdlQm9keVJlc3VsdCxcbiAgICBUT05Db250cmFjdERlY29kZVJ1bk91dHB1dFBhcmFtcyxcbiAgICBUT05Db250cmFjdERlcGxveU1lc3NhZ2UsXG4gICAgVE9OQ29udHJhY3REZXBsb3lQYXJhbXMsXG4gICAgVE9OQ29udHJhY3REZXBsb3lSZXN1bHQsXG4gICAgVE9OQ29udHJhY3RDYWxjRGVwbG95RmVlUGFyYW1zLFxuICAgIFRPTkNvbnRyYWN0Qm9jLFxuICAgIFRPTkNvbnRyYWN0R2V0Qm9jSGFzaFJlc3VsdCxcbiAgICBUT05Db250cmFjdEdldENvZGVGcm9tSW1hZ2VQYXJhbXMsXG4gICAgVE9OQ29udHJhY3RHZXRDb2RlRnJvbUltYWdlUmVzdWx0LFxuICAgIFRPTkNvbnRyYWN0R2V0RGVwbG95RGF0YVBhcmFtcyxcbiAgICBUT05Db250cmFjdEdldERlcGxveURhdGFSZXN1bHQsXG4gICAgVE9OQ29udHJhY3RHZXRGdW5jdGlvbklkUGFyYW1zLFxuICAgIFRPTkNvbnRyYWN0R2V0RnVuY3Rpb25JZFJlc3VsdCxcbiAgICBUT05Db250cmFjdExvYWRQYXJhbXMsXG4gICAgVE9OQ29udHJhY3RMb2FkUmVzdWx0LFxuICAgIFRPTkNvbnRyYWN0Q2FsY1J1bkZlZVBhcmFtcyxcbiAgICBUT05Db250cmFjdENhbGNGZWVSZXN1bHQsXG4gICAgVE9OQ29udHJhY3RDYWxjTXNnUHJvY2Vzc2luZ0ZlZXNQYXJhbXMsXG4gICAgVE9OQ29udHJhY3RNZXNzYWdlLFxuICAgIFRPTkNvbnRyYWN0UnVuTG9jYWxQYXJhbXMsXG4gICAgVE9OQ29udHJhY3RSdW5NZXNzYWdlLFxuICAgIFRPTkNvbnRyYWN0UnVuUGFyYW1zLFxuICAgIFRPTkNvbnRyYWN0UnVuUmVzdWx0LFxuICAgIFRPTkNvbnRyYWN0cyxcbiAgICBUT05Db250cmFjdFVuc2lnbmVkRGVwbG95TWVzc2FnZSxcbiAgICBUT05Db250cmFjdFVuc2lnbmVkTWVzc2FnZSxcbiAgICBUT05Db250cmFjdFVuc2lnbmVkUnVuTWVzc2FnZSxcbiAgICBUT05Db250cmFjdFJ1bkdldFBhcmFtcyxcbiAgICBUT05Db250cmFjdFJ1bkdldFJlc3VsdCxcbiAgICBUT05Db250cmFjdFJ1bk1lc3NhZ2VMb2NhbFBhcmFtcyxcbiAgICBUT05Db250cmFjdFJ1bkxvY2FsUmVzdWx0LFxuICAgIFRPTkNvbnRyYWN0VHJhbnNhY3Rpb25GZWVzLFxuICAgIFRPTldhaXRGb3JUcmFuc2FjdGlvblBhcmFtcyxcbiAgICBRU2hhcmRIYXNoLFxuICAgIFRPTk1lc3NhZ2VQcm9jZXNzaW5nU3RhdGUsXG59IGZyb20gJy4uLy4uL3R5cGVzJztcblxuaW1wb3J0IHsgVE9OQ2xpZW50RXJyb3IsIFRPTkNvbnRyYWN0RXhpdENvZGUsIFRPTkVycm9yQ29kZSB9IGZyb20gJy4uL1RPTkNsaWVudCc7XG5pbXBvcnQgeyBUT05Nb2R1bGUgfSBmcm9tICcuLi9UT05Nb2R1bGUnO1xuaW1wb3J0IFRPTkNvbmZpZ01vZHVsZSBmcm9tICcuL1RPTkNvbmZpZ01vZHVsZSc7XG5pbXBvcnQgVE9OUXVlcmllc01vZHVsZSwgeyBNQVhfVElNRU9VVCB9IGZyb20gJy4vVE9OUXVlcmllc01vZHVsZSc7XG5cbmV4cG9ydCBjb25zdCBUT05BZGRyZXNzU3RyaW5nVmFyaWFudCA9IHtcbiAgICBBY2NvdW50SWQ6ICdBY2NvdW50SWQnLFxuICAgIEhleDogJ0hleCcsXG4gICAgQmFzZTY0OiAnQmFzZTY0Jyxcbn07XG5cbmV4cG9ydCBjb25zdCBUT05DbGllbnRUcmFuc2FjdGlvblBoYXNlID0ge1xuICAgIHN0b3JhZ2U6ICdzdG9yYWdlJyxcbiAgICBjb21wdXRlU2tpcHBlZDogJ2NvbXB1dGVTa2lwcGVkJyxcbiAgICBjb21wdXRlVm06ICdjb21wdXRlVm0nLFxuICAgIGFjdGlvbjogJ2FjdGlvbicsXG4gICAgdW5rbm93bjogJ3Vua25vd24nLFxufTtcblxuZXhwb3J0IGNvbnN0IFRPTkNsaWVudENvbXB1dGVTa2lwcGVkU3RhdHVzID0ge1xuICAgIG5vU3RhdGU6IDAsXG4gICAgYmFkU3RhdGU6IDEsXG4gICAgbm9HYXM6IDIsXG59O1xuXG5leHBvcnQgY29uc3QgVE9OQ2xpZW50U3RvcmFnZVN0YXR1cyA9IHtcbiAgICB1bmNoYW5nZWQ6IDAsXG4gICAgZnJvemVuOiAxLFxuICAgIGRlbGV0ZWQ6IDIsXG59O1xuXG5leHBvcnQgY29uc3QgUUluTXNnVHlwZSA9IHtcbiAgICBleHRlcm5hbDogMCxcbiAgICBpaHI6IDEsXG4gICAgaW1tZWRpYXRlbHk6IDIsXG4gICAgZmluYWw6IDMsXG4gICAgdHJhbnNpdDogNCxcbiAgICBkaXNjYXJkZWRGaW5hbDogNSxcbiAgICBkaXNjYXJkZWRUcmFuc2l0OiA2LFxufTtcblxuZXhwb3J0IGNvbnN0IFFPdXRNc2dUeXBlID0ge1xuICAgIGV4dGVybmFsOiAwLFxuICAgIGltbWVkaWF0ZWx5OiAxLFxuICAgIG91dE1zZ05ldzogMixcbiAgICB0cmFuc2l0OiAzLFxuICAgIGRlcXVldWVJbW1lZGlhdGVseTogNCxcbiAgICBkZXF1ZXVlOiA1LFxuICAgIHRyYW5zaXRSZXF1aXJlZDogNixcbiAgICBub25lOiAtMSxcbn07XG5cbmV4cG9ydCBjb25zdCBRTWVzc2FnZVR5cGUgPSB7XG4gICAgaW50ZXJuYWw6IDAsXG4gICAgZXh0SW46IDEsXG4gICAgZXh0T3V0OiAyLFxufTtcblxuZXhwb3J0IGNvbnN0IFFNZXNzYWdlUHJvY2Vzc2luZ1N0YXR1cyA9IHtcbiAgICB1bmtub3duOiAwLFxuICAgIHF1ZXVlZDogMSxcbiAgICBwcm9jZXNzaW5nOiAyLFxuICAgIHByZWxpbWluYXJ5OiAzLFxuICAgIHByb3Bvc2VkOiA0LFxuICAgIGZpbmFsaXplZDogNSxcbiAgICByZWZ1c2VkOiA2LFxuICAgIHRyYW5zaXRpbmc6IDcsXG59O1xuXG5leHBvcnQgY29uc3QgUUJsb2NrUHJvY2Vzc2luZ1N0YXR1cyA9IHtcbiAgICB1bmtub3duOiAwLFxuICAgIHByb3Bvc2VkOiAxLFxuICAgIGZpbmFsaXplZDogMixcbiAgICByZWZ1c2VkOiAzLFxufTtcblxuZXhwb3J0IGNvbnN0IFFTcGxpdFR5cGUgPSB7XG4gICAgbm9uZTogMCxcbiAgICBzcGxpdDogMixcbiAgICBtZXJnZTogMyxcbn07XG5cbmV4cG9ydCBjb25zdCBRQWNjb3VudFR5cGUgPSB7XG4gICAgdW5pbml0OiAwLFxuICAgIGFjdGl2ZTogMSxcbiAgICBmcm96ZW46IDIsXG59O1xuXG5leHBvcnQgY29uc3QgUVRyYW5zYWN0aW9uVHlwZSA9IHtcbiAgICBvcmRpbmFyeTogMCxcbiAgICBzdG9yYWdlOiAxLFxuICAgIHRpY2s6IDIsXG4gICAgdG9jazogMyxcbiAgICBzcGxpdFByZXBhcmU6IDQsXG4gICAgc3BsaXRJbnN0YWxsOiA1LFxuICAgIG1lcmdlUHJlcGFyZTogNixcbiAgICBtZXJnZUluc3RhbGw6IDcsXG59O1xuXG5leHBvcnQgY29uc3QgUVRyYW5zYWN0aW9uUHJvY2Vzc2luZ1N0YXR1cyA9IHtcbiAgICB1bmtub3duOiAwLFxuICAgIHByZWxpbWluYXJ5OiAxLFxuICAgIHByb3Bvc2VkOiAyLFxuICAgIGZpbmFsaXplZDogMyxcbiAgICByZWZ1c2VkOiA0LFxufTtcblxuZXhwb3J0IGNvbnN0IFFBY2NvdW50U3RhdHVzID0ge1xuICAgIHVuaW5pdDogMCxcbiAgICBhY3RpdmU6IDEsXG4gICAgZnJvemVuOiAyLFxuICAgIG5vbkV4aXN0OiAzLFxufTtcblxuZXhwb3J0IGNvbnN0IFFBY2NvdW50U3RhdHVzQ2hhbmdlID0ge1xuICAgIHVuY2hhbmdlZDogMCxcbiAgICBmcm96ZW46IDEsXG4gICAgZGVsZXRlZDogMixcbn07XG5cbmV4cG9ydCBjb25zdCBRQ29tcHV0ZVR5cGUgPSB7XG4gICAgc2tpcHBlZDogMCxcbiAgICB2bTogMSxcbn07XG5cbmV4cG9ydCBjb25zdCBRU2tpcFJlYXNvbiA9IHtcbiAgICBub1N0YXRlOiAwLFxuICAgIGJhZFN0YXRlOiAxLFxuICAgIG5vR2FzOiAyLFxufTtcblxuZXhwb3J0IGNvbnN0IFFCb3VuY2VUeXBlID0ge1xuICAgIG5lZ0Z1bmRzOiAwLFxuICAgIG5vRnVuZHM6IDEsXG4gICAgb2s6IDIsXG59O1xuXG5jb25zdCBNQVNURVJDSEFJTl9JRCA9IC0xO1xuXG5jb25zdCBFWFRSQV9UUkFOU0FDVElPTl9XQUlUSU5HX1RJTUUgPSAxMDAwMDtcbmNvbnN0IEJMT0NLX1RSQU5TQUNUSU9OX1dBSVRJTkdfVElNRSA9IDUwMDA7XG5cbmZ1bmN0aW9uIHJlbW92ZVR5cGVOYW1lKG9iajogYW55KSB7XG4gICAgaWYgKG9iai5fX3R5cGVuYW1lKSB7XG4gICAgICAgIGRlbGV0ZSBvYmouX190eXBlbmFtZTtcbiAgICB9XG4gICAgT2JqZWN0LnZhbHVlcyhvYmopXG4gICAgICAgIC5mb3JFYWNoKCh2YWx1ZSkgPT4ge1xuICAgICAgICAgICAgaWYgKCEhdmFsdWUgJiYgdHlwZW9mIHZhbHVlID09PSAnb2JqZWN0Jykge1xuICAgICAgICAgICAgICAgIHJlbW92ZVR5cGVOYW1lKHZhbHVlKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfSk7XG59XG5cbmV4cG9ydCBmdW5jdGlvbiByZW1vdmVQcm9wcyhvYmo6IHt9LCBwYXRoczogc3RyaW5nW10pOiB7fSB7XG4gICAgbGV0IHJlc3VsdCA9IG9iajtcbiAgICBwYXRocy5mb3JFYWNoKChwYXRoKSA9PiB7XG4gICAgICAgIGNvbnN0IGRvdFBvcyA9IHBhdGguaW5kZXhPZignLicpO1xuICAgICAgICBpZiAoZG90UG9zIDwgMCkge1xuICAgICAgICAgICAgaWYgKHBhdGggaW4gcmVzdWx0KSB7XG4gICAgICAgICAgICAgICAgcmVzdWx0ID0geyAuLi5yZXN1bHQgfTtcbiAgICAgICAgICAgICAgICBkZWxldGUgcmVzdWx0W3BhdGhdO1xuICAgICAgICAgICAgfVxuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgY29uc3QgbmFtZSA9IHBhdGguc3Vic3RyKDAsIGRvdFBvcyk7XG4gICAgICAgICAgICBjb25zdCBjaGlsZCA9IHJlc3VsdFtuYW1lXTtcbiAgICAgICAgICAgIGlmIChjaGlsZCkge1xuICAgICAgICAgICAgICAgIGNvbnN0IHJlZHVjZWRDaGlsZCA9IHJlbW92ZVByb3BzKGNoaWxkLCBbcGF0aC5zdWJzdHIoZG90UG9zICsgMSldKTtcbiAgICAgICAgICAgICAgICBpZiAocmVkdWNlZENoaWxkICE9PSBjaGlsZCkge1xuICAgICAgICAgICAgICAgICAgICByZXN1bHQgPSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAuLi5yZXN1bHQsXG4gICAgICAgICAgICAgICAgICAgICAgICBbbmFtZV06IHJlZHVjZWRDaGlsZCxcbiAgICAgICAgICAgICAgICAgICAgfTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICB9KTtcbiAgICByZXR1cm4gcmVzdWx0O1xufVxuXG5mdW5jdGlvbiBzdGFydE1lc3NhZ2VUcmFjZVNwYW4oXG4gICAgdHJhY2VyOiBUcmFjZXIsXG4gICAgbWVzc2FnZUlkOiBzdHJpbmcsXG4gICAgb3BlcmF0aW9uTmFtZTogc3RyaW5nLFxuICAgIHRhZ3M6IHsgW3N0cmluZ106IGFueSB9LFxuKTogP1NwYW4ge1xuICAgIGlmICghbWVzc2FnZUlkKSB7XG4gICAgICAgIHJldHVybiBudWxsO1xuICAgIH1cbiAgICBjb25zdCB0cmFjZUlkID0gbWVzc2FnZUlkLnN1YnN0cigwLCAxNik7XG4gICAgY29uc3Qgc3BhbklkID0gbWVzc2FnZUlkLnN1YnN0cigxNiwgMTYpO1xuICAgIGxldCByb290Q29udGV4dDogP1NwYW5Db250ZXh0ID0gbnVsbDtcbiAgICB0cnkge1xuICAgICAgICByb290Q29udGV4dCA9IHRyYWNlci5leHRyYWN0KEZPUk1BVF9URVhUX01BUCwge1xuICAgICAgICAgICAgJ3ViZXItdHJhY2UtaWQnOiBgJHt0cmFjZUlkfToke3NwYW5JZH06MDoxYCxcbiAgICAgICAgfSk7XG4gICAgfSBjYXRjaCB7XG4gICAgICAgIC8vIHRyYWNlciBjYW4ndCBjcmVhdGUgamFlZ2VyIGNvbXBhdGlibGUgc3BhbixcbiAgICAgICAgLy8gc28gd2UgYXJlIGZhbGxiYWNrIHRvIHJldHVybiBudWxsXG4gICAgfVxuICAgIGlmICghcm9vdENvbnRleHQpIHtcbiAgICAgICAgcmV0dXJuIG51bGw7XG4gICAgfVxuICAgIHJldHVybiB0cmFjZXIuc3RhcnRTcGFuKG9wZXJhdGlvbk5hbWUsIHtcbiAgICAgICAgY2hpbGRPZjogcm9vdENvbnRleHQsXG4gICAgICAgIHRhZ3MsXG4gICAgfSlcbn1cblxuZnVuY3Rpb24gdHJhY2VNZXNzYWdlKFxuICAgIHRyYWNlcjogVHJhY2VyLFxuICAgIG1lc3NhZ2VJZDogc3RyaW5nLFxuICAgIG9wZXJhdGlvbk5hbWU6IHN0cmluZyxcbiAgICB0YWdzOiB7IFtzdHJpbmddOiBhbnkgfSxcbikge1xuICAgIGNvbnN0IHNwYW4gPSBzdGFydE1lc3NhZ2VUcmFjZVNwYW4odHJhY2VyLCBtZXNzYWdlSWQsIG9wZXJhdGlvbk5hbWUsIHRhZ3MpO1xuICAgIGlmIChzcGFuKSB7XG4gICAgICAgIHNwYW4uZmluaXNoKCk7XG4gICAgfVxufVxuXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBUT05Db250cmFjdHNNb2R1bGUgZXh0ZW5kcyBUT05Nb2R1bGUgaW1wbGVtZW50cyBUT05Db250cmFjdHMge1xuICAgIGNvbmZpZzogVE9OQ29uZmlnTW9kdWxlO1xuXG4gICAgcXVlcmllczogVE9OUXVlcmllc01vZHVsZTtcblxuICAgIGFzeW5jIHNldHVwKCk6IFByb21pc2U8Kj4ge1xuICAgICAgICB0aGlzLmNvbmZpZyA9IHRoaXMuY29udGV4dC5nZXRNb2R1bGUoVE9OQ29uZmlnTW9kdWxlKTtcbiAgICAgICAgdGhpcy5xdWVyaWVzID0gdGhpcy5jb250ZXh0LmdldE1vZHVsZShUT05RdWVyaWVzTW9kdWxlKTtcbiAgICB9XG5cbiAgICBhc3luYyBsb2FkKFxuICAgICAgICBwYXJhbXM6IFRPTkNvbnRyYWN0TG9hZFBhcmFtcyxcbiAgICAgICAgcGFyZW50U3Bhbj86IChTcGFuIHwgU3BhbkNvbnRleHQpLFxuICAgICk6IFByb21pc2U8VE9OQ29udHJhY3RMb2FkUmVzdWx0PiB7XG4gICAgICAgIGNvbnN0IGFjY291bnRzOiBRQWNjb3VudFtdID0gYXdhaXQgdGhpcy5xdWVyaWVzLmFjY291bnRzLnF1ZXJ5KHtcbiAgICAgICAgICAgIGZpbHRlcjoge1xuICAgICAgICAgICAgICAgIGlkOiB7IGVxOiBwYXJhbXMuYWRkcmVzcyB9LFxuICAgICAgICAgICAgfSxcbiAgICAgICAgICAgIHJlc3VsdDogJ2JhbGFuY2UnLFxuICAgICAgICAgICAgcGFyZW50U3BhbixcbiAgICAgICAgfSk7XG4gICAgICAgIGlmIChhY2NvdW50cyAmJiBhY2NvdW50cy5sZW5ndGggPiAwKSB7XG4gICAgICAgICAgICByZXR1cm4ge1xuICAgICAgICAgICAgICAgIGlkOiBwYXJhbXMuYWRkcmVzcyxcbiAgICAgICAgICAgICAgICBiYWxhbmNlR3JhbXM6IGFjY291bnRzWzBdLmJhbGFuY2UsXG4gICAgICAgICAgICB9O1xuICAgICAgICB9XG4gICAgICAgIHJldHVybiB7XG4gICAgICAgICAgICBpZDogbnVsbCxcbiAgICAgICAgICAgIGJhbGFuY2VHcmFtczogbnVsbCxcbiAgICAgICAgfTtcbiAgICB9XG5cblxuICAgIC8vIEZhY2FkZSBmdW5jdGlvbnNcblxuICAgIGFzeW5jIGRlcGxveShcbiAgICAgICAgcGFyYW1zOiBUT05Db250cmFjdERlcGxveVBhcmFtcyxcbiAgICAgICAgcGFyZW50U3Bhbj86IChTcGFuIHwgU3BhbkNvbnRleHQpLFxuICAgICk6IFByb21pc2U8VE9OQ29udHJhY3REZXBsb3lSZXN1bHQ+IHtcbiAgICAgICAgcmV0dXJuIHRoaXMuY29udGV4dC50cmFjZSgnY29udHJhY3RzLmRlcGxveScsIGFzeW5jIChzcGFuOiBTcGFuKSA9PiB7XG4gICAgICAgICAgICBzcGFuLnNldFRhZygncGFyYW1zJywgcmVtb3ZlUHJvcHMocGFyYW1zLCBbJ2tleVBhaXIuc2VjcmV0J10pKTtcbiAgICAgICAgICAgIHJldHVybiB0aGlzLmludGVybmFsRGVwbG95SnMocGFyYW1zLCBzcGFuKTtcbiAgICAgICAgfSwgcGFyZW50U3Bhbik7XG4gICAgfVxuXG5cbiAgICBhc3luYyBydW4oXG4gICAgICAgIHBhcmFtczogVE9OQ29udHJhY3RSdW5QYXJhbXMsXG4gICAgICAgIHBhcmVudFNwYW4/OiAoU3BhbiB8IFNwYW5Db250ZXh0KSxcbiAgICApOiBQcm9taXNlPFRPTkNvbnRyYWN0UnVuUmVzdWx0PiB7XG4gICAgICAgIHJldHVybiB0aGlzLmNvbnRleHQudHJhY2UoJ2NvbnRyYWN0cy5ydW4nLCBhc3luYyAoc3BhbjogU3BhbikgPT4ge1xuICAgICAgICAgICAgc3Bhbi5zZXRUYWcoJ3BhcmFtcycsIHJlbW92ZVByb3BzKHBhcmFtcywgWydrZXlQYWlyLnNlY3JldCddKSk7XG4gICAgICAgICAgICByZXR1cm4gdGhpcy5pbnRlcm5hbFJ1bkpzKHBhcmFtcywgc3Bhbik7XG4gICAgICAgIH0sIHBhcmVudFNwYW4pO1xuICAgIH1cblxuICAgIGFzeW5jIHJ1bkxvY2FsKFxuICAgICAgICBwYXJhbXM6IFRPTkNvbnRyYWN0UnVuTG9jYWxQYXJhbXMsXG4gICAgICAgIHBhcmVudFNwYW4/OiAoU3BhbiB8IFNwYW5Db250ZXh0KSxcbiAgICApOiBQcm9taXNlPFRPTkNvbnRyYWN0UnVuTG9jYWxSZXN1bHQ+IHtcbiAgICAgICAgcmV0dXJuIHRoaXMuY29udGV4dC50cmFjZSgnY29udHJhY3RzLnJ1bkxvY2FsJywgYXN5bmMgKHNwYW46IFNwYW4pID0+IHtcbiAgICAgICAgICAgIHNwYW4uc2V0VGFnKCdwYXJhbXMnLCByZW1vdmVQcm9wcyhwYXJhbXMsIFsna2V5UGFpci5zZWNyZXQnXSkpO1xuICAgICAgICAgICAgcmV0dXJuIHRoaXMuaW50ZXJuYWxSdW5Mb2NhbEpzKHBhcmFtcywgc3Bhbik7XG4gICAgICAgIH0sIHBhcmVudFNwYW4pO1xuICAgIH1cblxuICAgIGFzeW5jIHJ1bk1lc3NhZ2VMb2NhbChcbiAgICAgICAgcGFyYW1zOiBUT05Db250cmFjdFJ1bk1lc3NhZ2VMb2NhbFBhcmFtcyxcbiAgICAgICAgcGFyZW50U3Bhbj86IChTcGFuIHwgU3BhbkNvbnRleHQpLFxuICAgICk6IFByb21pc2U8VE9OQ29udHJhY3RSdW5Mb2NhbFJlc3VsdD4ge1xuICAgICAgICByZXR1cm4gdGhpcy5jb250ZXh0LnRyYWNlKCdydW5NZXNzYWdlTG9jYWwnLCBhc3luYyAoc3BhbjogU3BhbikgPT4ge1xuICAgICAgICAgICAgc3Bhbi5zZXRUYWcoJ3BhcmFtcycsIHJlbW92ZVByb3BzKHBhcmFtcywgWydrZXlQYWlyLnNlY3JldCddKSk7XG4gICAgICAgICAgICByZXR1cm4gdGhpcy5pbnRlcm5hbFJ1bk1lc3NhZ2VMb2NhbEpzKHBhcmFtcywgc3Bhbik7XG4gICAgICAgIH0sIHBhcmVudFNwYW4pO1xuICAgIH1cblxuICAgIGFzeW5jIHJ1bkdldChcbiAgICAgICAgcGFyYW1zOiBUT05Db250cmFjdFJ1bkdldFBhcmFtcyxcbiAgICApOiBQcm9taXNlPFRPTkNvbnRyYWN0UnVuR2V0UmVzdWx0PiB7XG4gICAgICAgIGxldCBjb3JlUGFyYW1zOiBUT05Db250cmFjdFJ1bkdldFBhcmFtcyA9IHBhcmFtcztcbiAgICAgICAgaWYgKCFwYXJhbXMuY29kZUJhc2U2NCB8fCAhcGFyYW1zLmRhdGFCYXNlNjQpIHtcbiAgICAgICAgICAgIGNvbnN0IGFkZHJlc3MgPSBwYXJhbXMuYWRkcmVzcztcbiAgICAgICAgICAgIGlmICghYWRkcmVzcykge1xuICAgICAgICAgICAgICAgIHRocm93IFRPTkNsaWVudEVycm9yLmFkZHJlc3NSZXF1aXJlZEZvclJ1bkxvY2FsKCk7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBjb25zdCBhY2NvdW50OiBhbnkgPSBhd2FpdCB0aGlzLmdldEFjY291bnQoYWRkcmVzcywgZmFsc2UsIHtcbiAgICAgICAgICAgICAgICB0aW1lb3V0OiB0aGlzLmNvbmZpZy53YWl0Rm9yVGltZW91dCgpLFxuICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICBpZiAoIWFjY291bnQuY29kZSkge1xuICAgICAgICAgICAgICAgIHRocm93IFRPTkNsaWVudEVycm9yLmFjY291bnRDb2RlTWlzc2luZyhhZGRyZXNzLCBhY2NvdW50LmJhbGFuY2UpO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgYWNjb3VudC5jb2RlQmFzZTY0ID0gYWNjb3VudC5jb2RlO1xuICAgICAgICAgICAgYWNjb3VudC5kYXRhQmFzZTY0ID0gYWNjb3VudC5kYXRhO1xuICAgICAgICAgICAgZGVsZXRlIGFjY291bnQuY29kZTtcbiAgICAgICAgICAgIGRlbGV0ZSBhY2NvdW50LmRhdGE7XG4gICAgICAgICAgICBjb3JlUGFyYW1zID0ge1xuICAgICAgICAgICAgICAgIC4uLmFjY291bnQsXG4gICAgICAgICAgICAgICAgLi4ucGFyYW1zLFxuICAgICAgICAgICAgfTtcbiAgICAgICAgfVxuICAgICAgICByZXR1cm4gdGhpcy5yZXF1ZXN0Q29yZSgndHZtLmdldCcsIGNvcmVQYXJhbXMpO1xuICAgIH1cblxuICAgIGFycmF5RnJvbUNPTlMoY29uczogYW55W10pOiBhbnlbXSB7XG4gICAgICAgIGNvbnN0IHJlc3VsdCA9IFtdO1xuICAgICAgICBsZXQgaXRlbSA9IGNvbnM7XG4gICAgICAgIHdoaWxlIChpdGVtKSB7XG4gICAgICAgICAgICBpZiAoIWl0ZW0ubGVuZ3RoID09PSAyKSB7XG4gICAgICAgICAgICAgICAgdGhyb3cgVE9OQ2xpZW50RXJyb3IuaW52YWxpZENvbnMoKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIHJlc3VsdC5wdXNoKGl0ZW1bMF0pO1xuICAgICAgICAgICAgaXRlbSA9IGl0ZW1bMV07XG4gICAgICAgIH1cbiAgICAgICAgcmV0dXJuIHJlc3VsdDtcbiAgICB9XG5cblxuICAgIC8vIE1lc3NhZ2UgY3JlYXRpb25cblxuICAgIGFzeW5jIGNyZWF0ZURlcGxveU1lc3NhZ2UoXG4gICAgICAgIHBhcmFtczogVE9OQ29udHJhY3REZXBsb3lQYXJhbXMsXG4gICAgICAgIHJldHJ5SW5kZXg/OiBudW1iZXIsXG4gICAgKTogUHJvbWlzZTxUT05Db250cmFjdERlcGxveU1lc3NhZ2U+IHtcbiAgICAgICAgdGhpcy5jb25maWcubG9nKCdjcmVhdGVEZXBsb3lNZXNzYWdlJywgcGFyYW1zKTtcbiAgICAgICAgY29uc3QgbWVzc2FnZTogVE9OQ29udHJhY3RNZXNzYWdlID0gYXdhaXQgdGhpcy5yZXF1ZXN0Q29yZSgnY29udHJhY3RzLmRlcGxveS5tZXNzYWdlJywge1xuICAgICAgICAgICAgYWJpOiBwYXJhbXMucGFja2FnZS5hYmksXG4gICAgICAgICAgICBjb25zdHJ1Y3RvckhlYWRlcjogcGFyYW1zLmNvbnN0cnVjdG9ySGVhZGVyLFxuICAgICAgICAgICAgY29uc3RydWN0b3JQYXJhbXM6IHBhcmFtcy5jb25zdHJ1Y3RvclBhcmFtcyxcbiAgICAgICAgICAgIGluaXRQYXJhbXM6IHBhcmFtcy5pbml0UGFyYW1zLFxuICAgICAgICAgICAgaW1hZ2VCYXNlNjQ6IHBhcmFtcy5wYWNrYWdlLmltYWdlQmFzZTY0LFxuICAgICAgICAgICAga2V5UGFpcjogcGFyYW1zLmtleVBhaXIsXG4gICAgICAgICAgICB3b3JrY2hhaW5JZDogcGFyYW1zLndvcmtjaGFpbklkLFxuICAgICAgICB9KTtcbiAgICAgICAgcmV0dXJuIHtcbiAgICAgICAgICAgIG1lc3NhZ2UsXG4gICAgICAgICAgICBhZGRyZXNzOiBtZXNzYWdlLmFkZHJlc3MsXG4gICAgICAgIH07XG4gICAgfVxuXG5cbiAgICBhc3luYyBjcmVhdGVSdW5NZXNzYWdlKFxuICAgICAgICBwYXJhbXM6IFRPTkNvbnRyYWN0UnVuUGFyYW1zLFxuICAgICAgICByZXRyeUluZGV4PzogbnVtYmVyLFxuICAgICk6IFByb21pc2U8VE9OQ29udHJhY3RSdW5NZXNzYWdlPiB7XG4gICAgICAgIHRoaXMuY29uZmlnLmxvZygnY3JlYXRlUnVuTWVzc2FnZScsIHBhcmFtcyk7XG4gICAgICAgIGNvbnN0IG1lc3NhZ2UgPSBhd2FpdCB0aGlzLnJlcXVlc3RDb3JlKCdjb250cmFjdHMucnVuLm1lc3NhZ2UnLCB7XG4gICAgICAgICAgICBhZGRyZXNzOiBwYXJhbXMuYWRkcmVzcyxcbiAgICAgICAgICAgIGFiaTogcGFyYW1zLmFiaSxcbiAgICAgICAgICAgIGZ1bmN0aW9uTmFtZTogcGFyYW1zLmZ1bmN0aW9uTmFtZSxcbiAgICAgICAgICAgIGhlYWRlcjogcGFyYW1zLmhlYWRlcixcbiAgICAgICAgICAgIHRyeUluZGV4OiByZXRyeUluZGV4LFxuICAgICAgICAgICAgaW5wdXQ6IHBhcmFtcy5pbnB1dCxcbiAgICAgICAgICAgIGtleVBhaXI6IHBhcmFtcy5rZXlQYWlyLFxuICAgICAgICB9KTtcbiAgICAgICAgcmV0dXJuIHtcbiAgICAgICAgICAgIGFkZHJlc3M6IHBhcmFtcy5hZGRyZXNzLFxuICAgICAgICAgICAgYWJpOiBwYXJhbXMuYWJpLFxuICAgICAgICAgICAgZnVuY3Rpb25OYW1lOiBwYXJhbXMuZnVuY3Rpb25OYW1lLFxuICAgICAgICAgICAgbWVzc2FnZSxcbiAgICAgICAgfTtcbiAgICB9XG5cbiAgICBhc3luYyBjcmVhdGVVbnNpZ25lZERlcGxveU1lc3NhZ2UoXG4gICAgICAgIHBhcmFtczogVE9OQ29udHJhY3REZXBsb3lQYXJhbXMsXG4gICAgICAgIHJldHJ5SW5kZXg/OiBudW1iZXIsXG4gICAgKTogUHJvbWlzZTxUT05Db250cmFjdFVuc2lnbmVkRGVwbG95TWVzc2FnZT4ge1xuICAgICAgICBjb25zdCByZXN1bHQ6IHtcbiAgICAgICAgICAgIGVuY29kZWQ6IFRPTkNvbnRyYWN0VW5zaWduZWRNZXNzYWdlLFxuICAgICAgICAgICAgYWRkcmVzc0hleDogc3RyaW5nLFxuICAgICAgICB9ID0gYXdhaXQgdGhpcy5yZXF1ZXN0Q29yZSgnY29udHJhY3RzLmRlcGxveS5lbmNvZGVfdW5zaWduZWRfbWVzc2FnZScsIHtcbiAgICAgICAgICAgIGFiaTogcGFyYW1zLnBhY2thZ2UuYWJpLFxuICAgICAgICAgICAgY29uc3RydWN0b3JIZWFkZXI6IHBhcmFtcy5jb25zdHJ1Y3RvckhlYWRlcixcbiAgICAgICAgICAgIHRyeUluZGV4OiByZXRyeUluZGV4LFxuICAgICAgICAgICAgY29uc3RydWN0b3JQYXJhbXM6IHBhcmFtcy5jb25zdHJ1Y3RvclBhcmFtcyxcbiAgICAgICAgICAgIGluaXRQYXJhbXM6IHBhcmFtcy5pbml0UGFyYW1zLFxuICAgICAgICAgICAgaW1hZ2VCYXNlNjQ6IHBhcmFtcy5wYWNrYWdlLmltYWdlQmFzZTY0LFxuICAgICAgICAgICAgcHVibGljS2V5SGV4OiBwYXJhbXMua2V5UGFpci5wdWJsaWMsXG4gICAgICAgICAgICB3b3JrY2hhaW5JZDogcGFyYW1zLndvcmtjaGFpbklkLFxuICAgICAgICB9KTtcbiAgICAgICAgcmV0dXJuIHtcbiAgICAgICAgICAgIGFkZHJlc3M6IHJlc3VsdC5hZGRyZXNzSGV4LFxuICAgICAgICAgICAgc2lnblBhcmFtczoge1xuICAgICAgICAgICAgICAgIC4uLnJlc3VsdC5lbmNvZGVkLFxuICAgICAgICAgICAgICAgIGFiaTogcGFyYW1zLnBhY2thZ2UuYWJpLFxuICAgICAgICAgICAgfSxcbiAgICAgICAgfTtcbiAgICB9XG5cblxuICAgIGFzeW5jIGNyZWF0ZVVuc2lnbmVkUnVuTWVzc2FnZShcbiAgICAgICAgcGFyYW1zOiBUT05Db250cmFjdFJ1blBhcmFtcyxcbiAgICAgICAgcmV0cnlJbmRleD86IG51bWJlcixcbiAgICApOiBQcm9taXNlPFRPTkNvbnRyYWN0VW5zaWduZWRSdW5NZXNzYWdlPiB7XG4gICAgICAgIGNvbnN0IHNpZ25QYXJhbXMgPSBhd2FpdCB0aGlzLnJlcXVlc3RDb3JlKCdjb250cmFjdHMucnVuLmVuY29kZV91bnNpZ25lZF9tZXNzYWdlJywge1xuICAgICAgICAgICAgYWRkcmVzczogcGFyYW1zLmFkZHJlc3MsXG4gICAgICAgICAgICBhYmk6IHBhcmFtcy5hYmksXG4gICAgICAgICAgICBmdW5jdGlvbk5hbWU6IHBhcmFtcy5mdW5jdGlvbk5hbWUsXG4gICAgICAgICAgICBoZWFkZXI6IHBhcmFtcy5oZWFkZXIsXG4gICAgICAgICAgICB0cnlJbmRleDogcmV0cnlJbmRleCxcbiAgICAgICAgICAgIGlucHV0OiBwYXJhbXMuaW5wdXQsXG4gICAgICAgIH0pO1xuICAgICAgICByZXR1cm4ge1xuICAgICAgICAgICAgYWRkcmVzczogcGFyYW1zLmFkZHJlc3MsXG4gICAgICAgICAgICBmdW5jdGlvbk5hbWU6IHBhcmFtcy5mdW5jdGlvbk5hbWUsXG4gICAgICAgICAgICBzaWduUGFyYW1zOiB7XG4gICAgICAgICAgICAgICAgLi4uc2lnblBhcmFtcyxcbiAgICAgICAgICAgICAgICBhYmk6IHBhcmFtcy5hYmksXG4gICAgICAgICAgICB9LFxuICAgICAgICB9O1xuICAgIH1cblxuXG4gICAgYXN5bmMgY3JlYXRlU2lnbmVkTWVzc2FnZShcbiAgICAgICAgcGFyYW1zOiBUT05Db250cmFjdENyZWF0ZVNpZ25lZE1lc3NhZ2VQYXJhbXMsXG4gICAgKTogUHJvbWlzZTxUT05Db250cmFjdE1lc3NhZ2U+IHtcbiAgICAgICAgcmV0dXJuIHRoaXMucmVxdWVzdENvcmUoJ2NvbnRyYWN0cy5lbmNvZGVfbWVzc2FnZV93aXRoX3NpZ24nLCBwYXJhbXMpO1xuICAgIH1cblxuXG4gICAgYXN5bmMgY3JlYXRlU2lnbmVkRGVwbG95TWVzc2FnZShcbiAgICAgICAgcGFyYW1zOiBUT05Db250cmFjdENyZWF0ZVNpZ25lZERlcGxveU1lc3NhZ2VQYXJhbXMsXG4gICAgKTogUHJvbWlzZTxUT05Db250cmFjdERlcGxveU1lc3NhZ2U+IHtcbiAgICAgICAgY29uc3QgbWVzc2FnZSA9IGF3YWl0IHRoaXMuY3JlYXRlU2lnbmVkTWVzc2FnZSh7XG4gICAgICAgICAgICBhYmk6IHBhcmFtcy51bnNpZ25lZE1lc3NhZ2Uuc2lnblBhcmFtcy5hYmksXG4gICAgICAgICAgICB1bnNpZ25lZEJ5dGVzQmFzZTY0OiBwYXJhbXMudW5zaWduZWRNZXNzYWdlLnNpZ25QYXJhbXMudW5zaWduZWRCeXRlc0Jhc2U2NCxcbiAgICAgICAgICAgIHNpZ25CeXRlc0Jhc2U2NDogcGFyYW1zLnNpZ25CeXRlc0Jhc2U2NCxcbiAgICAgICAgICAgIHB1YmxpY0tleUhleDogcGFyYW1zLnB1YmxpY0tleUhleCxcbiAgICAgICAgfSk7XG4gICAgICAgIG1lc3NhZ2UuZXhwaXJlID0gcGFyYW1zLnVuc2lnbmVkTWVzc2FnZS5zaWduUGFyYW1zLmV4cGlyZTtcbiAgICAgICAgcmV0dXJuIHtcbiAgICAgICAgICAgIGFkZHJlc3M6IHBhcmFtcy51bnNpZ25lZE1lc3NhZ2UuYWRkcmVzcyxcbiAgICAgICAgICAgIG1lc3NhZ2UsXG4gICAgICAgIH07XG4gICAgfVxuXG5cbiAgICBhc3luYyBjcmVhdGVTaWduZWRSdW5NZXNzYWdlKFxuICAgICAgICBwYXJhbXM6IFRPTkNvbnRyYWN0Q3JlYXRlU2lnbmVkUnVuTWVzc2FnZVBhcmFtcyxcbiAgICApOiBQcm9taXNlPFRPTkNvbnRyYWN0UnVuTWVzc2FnZT4ge1xuICAgICAgICBjb25zdCBtZXNzYWdlID0gYXdhaXQgdGhpcy5jcmVhdGVTaWduZWRNZXNzYWdlKHtcbiAgICAgICAgICAgIGFiaTogcGFyYW1zLnVuc2lnbmVkTWVzc2FnZS5zaWduUGFyYW1zLmFiaSxcbiAgICAgICAgICAgIHVuc2lnbmVkQnl0ZXNCYXNlNjQ6IHBhcmFtcy51bnNpZ25lZE1lc3NhZ2Uuc2lnblBhcmFtcy51bnNpZ25lZEJ5dGVzQmFzZTY0LFxuICAgICAgICAgICAgc2lnbkJ5dGVzQmFzZTY0OiBwYXJhbXMuc2lnbkJ5dGVzQmFzZTY0LFxuICAgICAgICAgICAgcHVibGljS2V5SGV4OiBwYXJhbXMucHVibGljS2V5SGV4LFxuICAgICAgICB9KTtcbiAgICAgICAgbWVzc2FnZS5leHBpcmUgPSBwYXJhbXMudW5zaWduZWRNZXNzYWdlLnNpZ25QYXJhbXMuZXhwaXJlO1xuICAgICAgICByZXR1cm4ge1xuICAgICAgICAgICAgYWRkcmVzczogcGFyYW1zLnVuc2lnbmVkTWVzc2FnZS5hZGRyZXNzLFxuICAgICAgICAgICAgYWJpOiBwYXJhbXMudW5zaWduZWRNZXNzYWdlLnNpZ25QYXJhbXMuYWJpLFxuICAgICAgICAgICAgZnVuY3Rpb25OYW1lOiBwYXJhbXMudW5zaWduZWRNZXNzYWdlLmZ1bmN0aW9uTmFtZSxcbiAgICAgICAgICAgIG1lc3NhZ2UsXG4gICAgICAgIH07XG4gICAgfVxuXG4gICAgYXN5bmMgZ2V0Q29kZUZyb21JbWFnZShcbiAgICAgICAgcGFyYW1zOiBUT05Db250cmFjdEdldENvZGVGcm9tSW1hZ2VQYXJhbXMsXG4gICAgKTogUHJvbWlzZTxUT05Db250cmFjdEdldENvZGVGcm9tSW1hZ2VSZXN1bHQ+IHtcbiAgICAgICAgcmV0dXJuIHRoaXMucmVxdWVzdENvcmUoJ2NvbnRyYWN0cy5pbWFnZS5jb2RlJywgcGFyYW1zKTtcbiAgICB9XG5cbiAgICBhc3luYyBnZXREZXBsb3lEYXRhKFxuICAgICAgICBwYXJhbXM6IFRPTkNvbnRyYWN0R2V0RGVwbG95RGF0YVBhcmFtcyxcbiAgICApOiBQcm9taXNlPFRPTkNvbnRyYWN0R2V0RGVwbG95RGF0YVJlc3VsdD4ge1xuICAgICAgICByZXR1cm4gdGhpcy5yZXF1ZXN0Q29yZSgnY29udHJhY3RzLmRlcGxveS5kYXRhJywgcGFyYW1zKTtcbiAgICB9XG5cbiAgICBhc3luYyBjcmVhdGVSdW5Cb2R5KFxuICAgICAgICBwYXJhbXM6IFRPTkNvbnRyYWN0Q3JlYXRlUnVuQm9keVBhcmFtcyxcbiAgICApOiBQcm9taXNlPFRPTkNvbnRyYWN0Q3JlYXRlUnVuQm9keVJlc3VsdD4ge1xuICAgICAgICByZXR1cm4gdGhpcy5yZXF1ZXN0Q29yZSgnY29udHJhY3RzLnJ1bi5ib2R5JywgcGFyYW1zKTtcbiAgICB9XG5cbiAgICBhc3luYyBnZXRGdW5jdGlvbklkKFxuICAgICAgICBwYXJhbXM6IFRPTkNvbnRyYWN0R2V0RnVuY3Rpb25JZFBhcmFtcyxcbiAgICApOiBQcm9taXNlPFRPTkNvbnRyYWN0R2V0RnVuY3Rpb25JZFJlc3VsdD4ge1xuICAgICAgICByZXR1cm4gdGhpcy5yZXF1ZXN0Q29yZSgnY29udHJhY3RzLmZ1bmN0aW9uLmlkJywgcGFyYW1zKTtcbiAgICB9XG5cbiAgICBhc3luYyBnZXRCb2NIYXNoKFxuICAgICAgICBwYXJhbXM6IFRPTkNvbnRyYWN0Qm9jLFxuICAgICk6IFByb21pc2U8VE9OQ29udHJhY3RHZXRCb2NIYXNoUmVzdWx0PiB7XG4gICAgICAgIHJldHVybiB0aGlzLnJlcXVlc3RDb3JlKCdjb250cmFjdHMuYm9jLmhhc2gnLCBwYXJhbXMpO1xuICAgIH1cblxuICAgIGFzeW5jIHBhcnNlTWVzc2FnZShcbiAgICAgICAgcGFyYW1zOiBUT05Db250cmFjdEJvYyxcbiAgICApOiBQcm9taXNlPFFNZXNzYWdlPiB7XG4gICAgICAgIHJldHVybiB0aGlzLnJlcXVlc3RDb3JlKCdjb250cmFjdHMucGFyc2UubWVzc2FnZScsIHBhcmFtcyk7XG4gICAgfVxuXG4gICAgLy8gTWVzc2FnZSBwYXJzaW5nXG5cbiAgICBhc3luYyBkZWNvZGVSdW5PdXRwdXQoXG4gICAgICAgIHBhcmFtczogVE9OQ29udHJhY3REZWNvZGVSdW5PdXRwdXRQYXJhbXMsXG4gICAgKTogUHJvbWlzZTxUT05Db250cmFjdFJ1blJlc3VsdD4ge1xuICAgICAgICByZXR1cm4gdGhpcy5yZXF1ZXN0Q29yZSgnY29udHJhY3RzLnJ1bi5vdXRwdXQnLCBwYXJhbXMpO1xuICAgIH1cblxuXG4gICAgYXN5bmMgZGVjb2RlSW5wdXRNZXNzYWdlQm9keShcbiAgICAgICAgcGFyYW1zOiBUT05Db250cmFjdERlY29kZU1lc3NhZ2VCb2R5UGFyYW1zLFxuICAgICk6IFByb21pc2U8VE9OQ29udHJhY3REZWNvZGVNZXNzYWdlQm9keVJlc3VsdD4ge1xuICAgICAgICByZXR1cm4gdGhpcy5yZXF1ZXN0Q29yZSgnY29udHJhY3RzLnJ1bi51bmtub3duLmlucHV0JywgcGFyYW1zKTtcbiAgICB9XG5cblxuICAgIGFzeW5jIGRlY29kZU91dHB1dE1lc3NhZ2VCb2R5KFxuICAgICAgICBwYXJhbXM6IFRPTkNvbnRyYWN0RGVjb2RlTWVzc2FnZUJvZHlQYXJhbXMsXG4gICAgKTogUHJvbWlzZTxUT05Db250cmFjdERlY29kZU1lc3NhZ2VCb2R5UmVzdWx0PiB7XG4gICAgICAgIHJldHVybiB0aGlzLnJlcXVlc3RDb3JlKCdjb250cmFjdHMucnVuLnVua25vd24ub3V0cHV0JywgcGFyYW1zKTtcbiAgICB9XG5cbiAgICAvLyBNZXNzYWdlIHByb2Nlc3NpbmdcblxuICAgIGFzeW5jIGVuc3VyZU1lc3NhZ2VJZChtZXNzYWdlOiBUT05Db250cmFjdE1lc3NhZ2UpOiBQcm9taXNlPHN0cmluZz4ge1xuICAgICAgICByZXR1cm4gbWVzc2FnZS5tZXNzYWdlSWQgfHwgYXdhaXQgKGFzeW5jICgpID0+IHtcbiAgICAgICAgICAgIGNvbnN0IGlkID0gKGF3YWl0IHRoaXMuZ2V0Qm9jSGFzaCh7XG4gICAgICAgICAgICAgICAgYm9jQmFzZTY0OiBtZXNzYWdlLm1lc3NhZ2VCb2R5QmFzZTY0LFxuICAgICAgICAgICAgfSkpLmhhc2g7XG4gICAgICAgICAgICBtZXNzYWdlLm1lc3NhZ2VJZCA9IGlkO1xuICAgICAgICAgICAgcmV0dXJuIGlkO1xuICAgICAgICB9KSgpO1xuICAgIH1cblxuICAgIGFzeW5jIHNlbmRNZXNzYWdlKFxuICAgICAgICBwYXJhbXM6IFRPTkNvbnRyYWN0TWVzc2FnZSxcbiAgICAgICAgcGFyZW50U3Bhbj86IChTcGFuIHwgU3BhbkNvbnRleHQpLFxuICAgICk6IFByb21pc2U8VE9OTWVzc2FnZVByb2Nlc3NpbmdTdGF0ZT4ge1xuICAgICAgICBjb25zdCBleHBpcmUgPSBwYXJhbXMuZXhwaXJlO1xuICAgICAgICBpZiAoZXhwaXJlICYmIChEYXRlLm5vdygpID4gZXhwaXJlICogMTAwMCkpIHtcbiAgICAgICAgICAgIHRocm93IFRPTkNsaWVudEVycm9yLnNlbmROb2RlUmVxdWVzdEZhaWxlZCgnTWVzc2FnZSBhbHJlYWR5IGV4cGlyZWQnKTtcbiAgICAgICAgfVxuICAgICAgICBjb25zdCBzZXJ2ZXJUaW1lRGVsdGEgPSBNYXRoLmFicyhhd2FpdCB0aGlzLnF1ZXJpZXMuc2VydmVyVGltZURlbHRhKHBhcmVudFNwYW4pKTtcbiAgICAgICAgaWYgKHNlcnZlclRpbWVEZWx0YSA+IHRoaXMuY29uZmlnLm91dE9mU3luY1RocmVzaG9sZCgpKSB7XG4gICAgICAgICAgICB0aGlzLnF1ZXJpZXMuZHJvcFNlcnZlclRpbWVEZWx0YSgpO1xuICAgICAgICAgICAgdGhyb3cgVE9OQ2xpZW50RXJyb3IuY2xvY2tPdXRPZlN5bmMoKTtcbiAgICAgICAgfVxuICAgICAgICBjb25zdCBsYXN0QmxvY2tJZCA9IGF3YWl0IHRoaXMuZmluZExhc3RTaGFyZEJsb2NrKHBhcmFtcy5hZGRyZXNzKTtcbiAgICAgICAgY29uc3QgaWQgPSBhd2FpdCB0aGlzLmVuc3VyZU1lc3NhZ2VJZChwYXJhbXMpO1xuICAgICAgICBjb25zdCBpZEJhc2U2NCA9IEJ1ZmZlci5mcm9tKGlkLCAnaGV4JykudG9TdHJpbmcoJ2Jhc2U2NCcpO1xuICAgICAgICBjb25zdCBtZXNzYWdlU3BhbiA9IHRoaXMuY29udGV4dC5zdGFydFJvb3RTcGFuKFxuICAgICAgICAgICAgaWQuc3Vic3RyKDAsIDE2KSxcbiAgICAgICAgICAgIGlkLnN1YnN0cigxNiwgMTYpLFxuICAgICAgICAgICAgJ21lc3NhZ2VQcm9jZXNzaW5nJyxcbiAgICAgICAgKTtcbiAgICAgICAgbWVzc2FnZVNwYW4uYWRkVGFncyh7XG4gICAgICAgICAgICBtZXNzYWdlSWQ6IGlkLFxuICAgICAgICAgICAgbWVzc2FnZVNpemU6IE1hdGguY2VpbChwYXJhbXMubWVzc2FnZUJvZHlCYXNlNjQubGVuZ3RoICogMyAvIDQpLFxuICAgICAgICAgICAgYWRkcmVzczogcGFyYW1zLmFkZHJlc3MsXG4gICAgICAgICAgICBleHBpcmU6IHBhcmFtcy5leHBpcmUsXG4gICAgICAgIH0pXG4gICAgICAgIGF3YWl0IHRoaXMucXVlcmllcy5wb3N0UmVxdWVzdHMoW1xuICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgIGlkOiBpZEJhc2U2NCxcbiAgICAgICAgICAgICAgICBib2R5OiBwYXJhbXMubWVzc2FnZUJvZHlCYXNlNjQsXG4gICAgICAgICAgICB9LFxuICAgICAgICBdLCBwYXJlbnRTcGFuKTtcbiAgICAgICAgbWVzc2FnZVNwYW4uZmluaXNoKCk7XG4gICAgICAgIHRoaXMuY29uZmlnLmxvZygnc2VuZE1lc3NhZ2UuIFJlcXVlc3QgcG9zdGVkJywgaWQpO1xuICAgICAgICByZXR1cm4ge1xuICAgICAgICAgICAgbGFzdEJsb2NrSWQsXG4gICAgICAgICAgICBzZW5kaW5nVGltZTogTWF0aC5yb3VuZChEYXRlLm5vdygpIC8gMTAwMCksXG4gICAgICAgIH07XG4gICAgfVxuXG4gICAgYXN5bmMgcHJvY2Vzc01lc3NhZ2UoXG4gICAgICAgIG1lc3NhZ2U6IFRPTkNvbnRyYWN0TWVzc2FnZSxcbiAgICAgICAgcmVzdWx0RmllbGRzOiBzdHJpbmcsXG4gICAgICAgIHBhcmVudFNwYW4/OiAoU3BhbiB8IFNwYW5Db250ZXh0KSxcbiAgICAgICAgcmV0cnlJbmRleD86IG51bWJlcixcbiAgICAgICAgYWRkcmVzcz86IHN0cmluZyxcbiAgICAgICAgYWJpPzogVE9OQ29udHJhY3RBQkksXG4gICAgICAgIGZ1bmN0aW9uTmFtZT86IHN0cmluZyxcbiAgICApOiBQcm9taXNlPFFUcmFuc2FjdGlvbj4ge1xuICAgICAgICBjb25zdCBwcm9jZXNzaW5nID0gYXdhaXQgdGhpcy5zZW5kTWVzc2FnZShtZXNzYWdlLCBwYXJlbnRTcGFuKTtcbiAgICAgICAgY29uc3QgeyB0cmFuc2FjdGlvbiB9ID0gYXdhaXQgdGhpcy53YWl0Rm9yVHJhbnNhY3Rpb24oe1xuICAgICAgICAgICAgbWVzc2FnZSxcbiAgICAgICAgICAgIG1lc3NhZ2VQcm9jZXNzaW5nU3RhdGU6IHByb2Nlc3NpbmcsXG4gICAgICAgICAgICBwYXJlbnRTcGFuLFxuICAgICAgICAgICAgYWJpLFxuICAgICAgICAgICAgZnVuY3Rpb25OYW1lLFxuICAgICAgICB9KTtcbiAgICAgICAgcmV0dXJuIHRyYW5zYWN0aW9uO1xuICAgIH1cblxuXG4gICAgYXN5bmMgZmluZExhc3RCbG9jayhjaGFpbjogbnVtYmVyLCByZXN1bHQ6IHN0cmluZywgYWRkaXRpb25hbEZpbHRlcj86IGFueSk6IFByb21pc2U8P2FueT4ge1xuICAgICAgICBjb25zdCBibG9ja3MgPSBhd2FpdCB0aGlzLnF1ZXJpZXMuYmxvY2tzLnF1ZXJ5KHtcbiAgICAgICAgICAgIGZpbHRlcjogeyB3b3JrY2hhaW5faWQ6IHsgZXE6IGNoYWluIH0sIC4uLihhZGRpdGlvbmFsRmlsdGVyIHx8IHt9KSB9LFxuICAgICAgICAgICAgcmVzdWx0LFxuICAgICAgICAgICAgb3JkZXJCeTogW1xuICAgICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICAgICAgcGF0aDogJ3NlcV9ubycsXG4gICAgICAgICAgICAgICAgICAgIGRpcmVjdGlvbjogJ0RFU0MnLFxuICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICBdLFxuICAgICAgICAgICAgbGltaXQ6IDEsXG4gICAgICAgIH0pO1xuICAgICAgICByZXR1cm4gYmxvY2tzLmxlbmd0aCA+IDAgPyBibG9ja3NbMF0gOiBudWxsO1xuICAgIH1cblxuICAgIGFzeW5jIGZpbmRNYXRjaGluZ1NoYXJkKHNoYXJkczogUVNoYXJkSGFzaFtdLCBhZGRyZXNzOiBzdHJpbmcpOiBQcm9taXNlPD9RU2hhcmRIYXNoPiB7XG4gICAgICAgIHJldHVybiB0aGlzLnJlcXVlc3RDb3JlKCdjb250cmFjdHMuZmluZC5zaGFyZCcsIHtcbiAgICAgICAgICAgIHNoYXJkcyxcbiAgICAgICAgICAgIGFkZHJlc3MsXG4gICAgICAgIH0pO1xuICAgIH1cblxuICAgIGFzeW5jIGZpbmRMYXN0U2hhcmRCbG9jayhhZGRyZXNzOiBzdHJpbmcpOiBQcm9taXNlPHN0cmluZz4ge1xuICAgICAgICBjb25zdCBhZGRyZXNzUGFydHMgPSBhZGRyZXNzLnNwbGl0KCc6Jyk7XG4gICAgICAgIGNvbnN0IHdvcmtjaGFpbiA9IGFkZHJlc3NQYXJ0cy5sZW5ndGggPiAxID8gTnVtYmVyLnBhcnNlSW50KGFkZHJlc3NQYXJ0c1swXSwgMTApIDogMDtcblxuXG4gICAgICAgIC8vIGlmIGFjY291bnQgcmVzaWRlcyBpbiBtYXN0ZXIgY2hhaW4gdGhlbiBzdGFydGluZyBwb2ludCBpcyBsYXN0IG1hc3RlciBjaGFpbiBibG9ja1xuICAgICAgICAvLyBnZW5lcmF0ZWQgYmVmb3JlIG1lc3NhZ2Ugd2FzIHNlbnRcbiAgICAgICAgY29uc3QgbWFzdGVyY2hhaW5MYXN0QmxvY2sgPSBhd2FpdCB0aGlzLmZpbmRMYXN0QmxvY2soXG4gICAgICAgICAgICBNQVNURVJDSEFJTl9JRCxcbiAgICAgICAgICAgICdpZCBtYXN0ZXIgeyBzaGFyZF9oYXNoZXMgeyB3b3JrY2hhaW5faWQgc2hhcmQgZGVzY3IgeyByb290X2hhc2ggfSB9IH0nLFxuICAgICAgICApO1xuXG4gICAgICAgIC8vIGlmIGFjY291bnQgcmVzaWRlcyBpbiBtYXN0ZXJjaGFpbiB0aGVuIHN0YXJ0aW5nIHBvaW50IGlzIGxhc3QgbWFzdGVyY2hhaW4gYmxvY2tcbiAgICAgICAgaWYgKHdvcmtjaGFpbiA9PT0gTUFTVEVSQ0hBSU5fSUQpIHtcbiAgICAgICAgICAgIGlmICghbWFzdGVyY2hhaW5MYXN0QmxvY2spIHtcbiAgICAgICAgICAgICAgICB0aHJvdyBUT05DbGllbnRFcnJvci5ub0Jsb2NrcyhNQVNURVJDSEFJTl9JRCk7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICByZXR1cm4gbWFzdGVyY2hhaW5MYXN0QmxvY2suaWQ7XG4gICAgICAgIH1cblxuICAgICAgICAvLyBpZiBhY2NvdW50IGlzIGZyb20gb3RoZXIgY2hhaW5zIHRoZW4gc3RhcnRpbmcgcG9pbnQgaXMgbGFzdCBhY2NvdW50J3Mgc2hhcmQgYmxvY2tcbiAgICAgICAgLy8gVG8gb2J0YWluIGl0IHdlIHRha2UgbWFzdGVyY2hhaW4gYmxvY2sgdG8gZ2V0IHNoYXJkcyBjb25maWd1cmF0aW9uIGFuZCBzZWxlY3RcbiAgICAgICAgLy8gbWF0Y2hpbmcgc2hhcmRcbiAgICAgICAgaWYgKCFtYXN0ZXJjaGFpbkxhc3RCbG9jaykge1xuICAgICAgICAgICAgLy8gTm9kZSBTRSBjYXNlIC0gbm8gbWFzdGVyY2hhaW4sIG5vIHNoYXJkaW5nLiBDaGVjayB0aGF0IG9ubHkgb25lIHNoYXJkXG4gICAgICAgICAgICBsZXQgd29ya2NoYWluTGFzdEJsb2NrID0gYXdhaXQgdGhpcy5maW5kTGFzdEJsb2NrKHdvcmtjaGFpbiwgJ2FmdGVyX21lcmdlIHNoYXJkJyk7XG4gICAgICAgICAgICBpZiAoIXdvcmtjaGFpbkxhc3RCbG9jaykge1xuICAgICAgICAgICAgICAgIHRocm93IFRPTkNsaWVudEVycm9yLm5vQmxvY2tzKHdvcmtjaGFpbik7XG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICAgIC8vIGlmIHdvcmtjaGFpbiBpcyBzaGFyZGVkIHRoZW4gaXQgaXMgbm90IE5vZGUgU0UgYW5kIG1hc3RlcmNoYWluIGJsb2NrcyBtaXNzaW5nXG4gICAgICAgICAgICAvLyBpcyBlcnJvclxuICAgICAgICAgICAgaWYgKHdvcmtjaGFpbkxhc3RCbG9jay5hZnRlcl9tZXJnZSB8fCB3b3JrY2hhaW5MYXN0QmxvY2suc2hhcmQgIT09ICc4MDAwMDAwMDAwMDAwMDAwJykge1xuICAgICAgICAgICAgICAgIHRocm93IFRPTkNsaWVudEVycm9yLm5vQmxvY2tzKE1BU1RFUkNIQUlOX0lEKTtcbiAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgLy8gVGFrZSBsYXN0IGJsb2NrIGJ5IHNlcV9ub1xuICAgICAgICAgICAgd29ya2NoYWluTGFzdEJsb2NrID0gYXdhaXQgdGhpcy5maW5kTGFzdEJsb2NrKHdvcmtjaGFpbiwgJ2lkJywge1xuICAgICAgICAgICAgICAgIHNoYXJkOiB7IGVxOiAnODAwMDAwMDAwMDAwMDAwMCcgfSxcbiAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgaWYgKCF3b3JrY2hhaW5MYXN0QmxvY2spIHtcbiAgICAgICAgICAgICAgICB0aHJvdyBUT05DbGllbnRFcnJvci5pbnZhbGlkQmxvY2tjaGFpbignTm8gc3RhcnRpbmcgTm9kZSBTRSBibG9jayBmb3VuZCcpO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgcmV0dXJuIHdvcmtjaGFpbkxhc3RCbG9jay5pZDtcbiAgICAgICAgfVxuXG4gICAgICAgIGNvbnN0IHNoYXJkczogP1FTaGFyZEhhc2hbXSA9IG1hc3RlcmNoYWluTGFzdEJsb2NrPy5tYXN0ZXI/LnNoYXJkX2hhc2hlcztcbiAgICAgICAgaWYgKCFzaGFyZHMgfHwgc2hhcmRzLmxlbmd0aCA9PT0gMCkge1xuICAgICAgICAgICAgdGhyb3cgVE9OQ2xpZW50RXJyb3IuaW52YWxpZEJsb2NrY2hhaW4oJ05vIGBzaGFyZF9oYXNoZXNgIGZpZWxkIGluIG1hc3RlcmNoYWluIGJsb2NrJyk7XG4gICAgICAgIH1cbiAgICAgICAgY29uc3Qgc2hhcmRCbG9jayA9IGF3YWl0IHRoaXMuZmluZE1hdGNoaW5nU2hhcmQoc2hhcmRzLCBhZGRyZXNzKTtcbiAgICAgICAgY29uc3Qgcm9vdF9oYXNoID0gc2hhcmRCbG9jaz8uZGVzY3I/LnJvb3RfaGFzaDtcbiAgICAgICAgaWYgKCFyb290X2hhc2gpIHtcbiAgICAgICAgICAgIHRocm93IFRPTkNsaWVudEVycm9yLmludmFsaWRCbG9ja2NoYWluKCdObyBgcm9vdF9oYXNoYCBmaWVsZCBpbiBzaGFyZCBkZXNjcicpO1xuICAgICAgICB9XG4gICAgICAgIHJldHVybiByb290X2hhc2g7XG4gICAgfVxuXG4gICAgYXN5bmMgY2hlY2tTaGFyZE1hdGNoKGJsb2NrOiBRQmxvY2ssIGFkZHJlc3M6IHN0cmluZyk6IFByb21pc2U8Ym9vbGVhbj4ge1xuICAgICAgICByZXR1cm4gISEoYXdhaXQgdGhpcy5maW5kTWF0Y2hpbmdTaGFyZChbXG4gICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgd29ya2NoYWluX2lkOiBibG9jay53b3JrY2hhaW5faWQgfHwgMCxcbiAgICAgICAgICAgICAgICBzaGFyZDogYmxvY2suc2hhcmQgfHwgJycsXG4gICAgICAgICAgICB9LFxuICAgICAgICBdLCBhZGRyZXNzKSk7XG4gICAgfVxuXG4gICAgYXN5bmMgd2FpdE5leHRCbG9jayhjdXJyZW50OiBzdHJpbmcsIGFkZHJlc3M6IHN0cmluZywgdGltZW91dD86IG51bWJlcik6IFByb21pc2U8UUJsb2NrPiB7XG4gICAgICAgIGNvbnN0IGJsb2NrID0gYXdhaXQgdGhpcy5xdWVyaWVzLmJsb2Nrcy53YWl0Rm9yKHtcbiAgICAgICAgICAgIGZpbHRlcjoge1xuICAgICAgICAgICAgICAgIHByZXZfcmVmOiB7XG4gICAgICAgICAgICAgICAgICAgIHJvb3RfaGFzaDogeyBlcTogY3VycmVudCB9LFxuICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICB9LFxuICAgICAgICAgICAgcmVzdWx0OiBCTE9DS19GSUVMRFMsXG4gICAgICAgICAgICB0aW1lb3V0LFxuICAgICAgICB9KTtcblxuICAgICAgICBpZiAoYmxvY2s/LmFmdGVyX3NwbGl0ICYmICEoYXdhaXQgdGhpcy5jaGVja1NoYXJkTWF0Y2goYmxvY2ssIGFkZHJlc3MpKSkge1xuICAgICAgICAgICAgcmV0dXJuIHRoaXMucXVlcmllcy5ibG9ja3Mud2FpdEZvcih7XG4gICAgICAgICAgICAgICAgZmlsdGVyOiB7XG4gICAgICAgICAgICAgICAgICAgIGlkOiB7IG5lOiBibG9jay5pZCB9LFxuICAgICAgICAgICAgICAgICAgICBwcmV2X3JlZjoge1xuICAgICAgICAgICAgICAgICAgICAgICAgcm9vdF9oYXNoOiB7IGVxOiBjdXJyZW50IH0sXG4gICAgICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICByZXN1bHQ6IEJMT0NLX0ZJRUxEUyxcbiAgICAgICAgICAgICAgICB0aW1lb3V0LFxuICAgICAgICAgICAgfSk7XG4gICAgICAgIH1cbiAgICAgICAgcmV0dXJuIGJsb2NrO1xuICAgIH1cblxuICAgIGFzeW5jIHdhaXRGb3JUcmFuc2FjdGlvbihwYXJhbXM6IFRPTldhaXRGb3JUcmFuc2FjdGlvblBhcmFtcyk6IFByb21pc2U8VE9OQ29udHJhY3RSdW5SZXN1bHQ+IHtcbiAgICAgICAgLy8gY29uc3QgbGVnYWN5U3RhcnQgPSBEYXRlLm5vdygpO1xuICAgICAgICAvLyBjb25zdCByZXN1bHQgPSBhd2FpdCB0aGlzLmxlZ2FjeVdhaXRGb3JUcmFuc2FjdGlvbihwYXJhbXMpO1xuICAgICAgICAvLyBjb25zb2xlLmxvZygnPj4+JywgYExlZ2FjeSB3YWl0IGZvciBhOiAke0RhdGUubm93KCkgLSBsZWdhY3lTdGFydH0gbXNgKTtcbiAgICAgICAgLy8gcmV0dXJuIHJlc3VsdDtcblxuICAgICAgICBjb25zdCB0b3RhbFN0YXJ0ID0gRGF0ZS5ub3coKTtcbiAgICAgICAgY29uc3QgZXhwaXJlID0gcGFyYW1zLm1lc3NhZ2UuZXhwaXJlIHx8IDA7XG4gICAgICAgIGNvbnN0IG1lc3NhZ2VJZCA9IGF3YWl0IHRoaXMuZW5zdXJlTWVzc2FnZUlkKHBhcmFtcy5tZXNzYWdlKTtcbiAgICAgICAgY29uc3QgYWRkcmVzcyA9IHBhcmFtcy5tZXNzYWdlLmFkZHJlc3M7XG4gICAgICAgIGNvbnN0IHByb2Nlc3NpbmcgPSB7IC4uLnBhcmFtcy5tZXNzYWdlUHJvY2Vzc2luZ1N0YXRlIH07XG4gICAgICAgIGxldCB0cmFuc2FjdGlvbiA9IG51bGw7XG4gICAgICAgIHRyeSB7XG4gICAgICAgICAgICBjb25zdCB0aW1lUmVwb3J0ID0gW107XG5cbiAgICAgICAgICAgIGNvbnN0IHN0b3BUaW1lID0gZXhwaXJlXG4gICAgICAgICAgICAgICAgfHwgTWF0aC5yb3VuZCgoRGF0ZS5ub3coKSArIHRoaXMuY29uZmlnLm1lc3NhZ2VQcm9jZXNzaW5nVGltZW91dCgpKSAvIDEwMDApO1xuXG4gICAgICAgICAgICBjb25zdCBpbmZpbml0ZVdhaXQgPSBwYXJhbXMuaW5maW5pdGVXYWl0ICE9PSBmYWxzZTtcbiAgICAgICAgICAgIGNvbnN0IGFkZFRpbWVvdXQgPSB0aGlzLmNvbmZpZy5tZXNzYWdlUHJvY2Vzc2luZ1RpbWVvdXQoKTtcbiAgICAgICAgICAgIHdoaWxlICghdHJhbnNhY3Rpb24pIHtcbiAgICAgICAgICAgICAgICBjb25zdCBub3cgPSBEYXRlLm5vdygpO1xuICAgICAgICAgICAgICAgIGNvbnN0IHRpbWVvdXQgPSBNYXRoLm1heChzdG9wVGltZSwgbm93KSAtIG5vdyArIGFkZFRpbWVvdXQ7XG4gICAgICAgICAgICAgICAgbGV0IGJsb2NrOiA/UUJsb2NrID0gbnVsbDtcbiAgICAgICAgICAgICAgICB0cnkge1xuICAgICAgICAgICAgICAgICAgICBjb25zdCBzdGFydCA9IERhdGUubm93KCk7XG4gICAgICAgICAgICAgICAgICAgIGJsb2NrID0gYXdhaXQgdGhpcy53YWl0TmV4dEJsb2NrKHByb2Nlc3NpbmcubGFzdEJsb2NrSWQsIGFkZHJlc3MsIHRpbWVvdXQpO1xuICAgICAgICAgICAgICAgICAgICBjb25zdCBlbmQgPSBEYXRlLm5vdygpO1xuICAgICAgICAgICAgICAgICAgICB0aW1lUmVwb3J0LnB1c2goYEJsb2NrIFske2Jsb2NrLmlkIHx8ICcnfV0gaGFzIGJlZW4gcmVjZWl2ZWQ6ICR7ZW5kIC0gc3RhcnR9IG1zLCBjbGllbnQgdGltZTogJHtNYXRoLnJvdW5kKGVuZCAvIDEwMDApfSwgZ2VuX3V0aW1lOiAke2Jsb2NrLmdlbl91dGltZSB8fCAwfWApO1xuICAgICAgICAgICAgICAgIH0gY2F0Y2ggKGVycm9yKSB7XG4gICAgICAgICAgICAgICAgICAgIHRoaXMuY29uZmlnLmxvZygnQmxvY2sgd2FpdGluZyBmYWlsZWQ6ICcsIGVycm9yKTtcbiAgICAgICAgICAgICAgICAgICAgaWYgKCFpbmZpbml0ZVdhaXQpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIGxldCByZXNvbHZlZEVycm9yID0gZXJyb3I7XG4gICAgICAgICAgICAgICAgICAgICAgICBpZiAoZXJyb3IuY29kZSA9PT0gVE9ORXJyb3JDb2RlLldBSVRfRk9SX1RJTUVPVVQpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICByZXNvbHZlZEVycm9yID0gVE9OQ2xpZW50RXJyb3IubmV0d29ya1NpbGVudCh7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIG1lc3NhZ2VJZCxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgYmxvY2tJZDogcHJvY2Vzc2luZy5sYXN0QmxvY2tJZCxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdGltZW91dCxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgbWVzc2FnZVByb2Nlc3NpbmdTdGF0ZTogcHJvY2Vzc2luZyxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgZXhwaXJlLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBzZW5kaW5nVGltZTogcHJvY2Vzc2luZy5zZW5kaW5nVGltZSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB9KTtcbiAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICAgIHRocm93IHJlc29sdmVkRXJyb3I7XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgdGhpcy5jb25maWcubG9nKCdSZXRyeSB3YWl0aW5nLicpO1xuICAgICAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgICAgIGlmIChibG9jaykge1xuICAgICAgICAgICAgICAgICAgICBwcm9jZXNzaW5nLmxhc3RCbG9ja0lkID0gYmxvY2suaWQgfHwgJyc7XG5cbiAgICAgICAgICAgICAgICAgICAgY29uc3QgaW5Nc2cgPSAoYmxvY2suaW5fbXNnX2Rlc2NyIHx8IFtdKS5maW5kKHggPT4geC5tc2dfaWQgPT09IG1lc3NhZ2VJZCk7XG4gICAgICAgICAgICAgICAgICAgIGlmIChpbk1zZykge1xuICAgICAgICAgICAgICAgICAgICAgICAgY29uc3QgdHJhbnNhY3Rpb25JZCA9IGluTXNnLnRyYW5zYWN0aW9uX2lkO1xuICAgICAgICAgICAgICAgICAgICAgICAgaWYgKCF0cmFuc2FjdGlvbklkKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgdGhyb3cgVE9OQ2xpZW50RXJyb3IuaW52YWxpZEJsb2NrY2hhaW4oJ05vIGZpZWxkIGB0cmFuc2FjdGlvbl9pZGAgaW4gYmxvY2snKTtcbiAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICAgIGNvbnN0IHRyU3RhcnQgPSBEYXRlLm5vdygpO1xuICAgICAgICAgICAgICAgICAgICAgICAgdHJhbnNhY3Rpb24gPSBhd2FpdCB0aGlzLnF1ZXJpZXMudHJhbnNhY3Rpb25zLndhaXRGb3Ioe1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGZpbHRlcjogeyBpZDogeyBlcTogdHJhbnNhY3Rpb25JZCB9IH0sXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgcmVzdWx0OiBUUkFOU0FDVElPTl9GSUVMRFNfT1JESU5BUlksXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgdGltZW91dDogTUFYX1RJTUVPVVQsXG4gICAgICAgICAgICAgICAgICAgICAgICB9KTtcbiAgICAgICAgICAgICAgICAgICAgICAgIHRyYWNlTWVzc2FnZSh0aGlzLmNvbmZpZy50cmFjZXIsIG1lc3NhZ2VJZCwgJ3RyYW5zYWN0aW9uUmVjZWl2ZWQnLCB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgdHJhbnNhY3Rpb25JZCxcbiAgICAgICAgICAgICAgICAgICAgICAgIH0pXG4gICAgICAgICAgICAgICAgICAgICAgICB0aW1lUmVwb3J0LnB1c2goYFRyYW5zYWN0aW9uIFske3RyYW5zYWN0aW9uSWR9XSBoYXMgYmVlbiByZWNlaXZlZDogJHtEYXRlLm5vdygpIC0gdHJTdGFydH0gbXNgKTtcbiAgICAgICAgICAgICAgICAgICAgfSBlbHNlIGlmICgoYmxvY2suZ2VuX3V0aW1lIHx8IDApID4gc3RvcFRpbWUpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIGlmIChleHBpcmUpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB0cmFjZU1lc3NhZ2UodGhpcy5jb25maWcudHJhY2VyLCBtZXNzYWdlSWQsICdtZXNzYWdlRXhwaXJlZCcsIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB9KTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB0aHJvdyBUT05DbGllbnRFcnJvci5tZXNzYWdlRXhwaXJlZCh7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIG1lc3NhZ2VJZCxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgc2VuZGluZ1RpbWU6IHByb2Nlc3Npbmcuc2VuZGluZ1RpbWUsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGV4cGlyZTogc3RvcFRpbWUsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGJsb2NrVGltZTogYmxvY2suZ2VuX3V0aW1lLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBibG9ja0lkOiBwcm9jZXNzaW5nLmxhc3RCbG9ja0lkLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgICAgdGhyb3cgVE9OQ2xpZW50RXJyb3IudHJhbnNhY3Rpb25XYWl0VGltZW91dCh7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgbWVzc2FnZUlkLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHNlbmRpbmdUaW1lOiBwcm9jZXNzaW5nLnNlbmRpbmdUaW1lLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRpbWVvdXQsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgbWVzc2FnZVByb2Nlc3NpbmdTdGF0ZTogcHJvY2Vzc2luZyxcbiAgICAgICAgICAgICAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICB0aW1lUmVwb3J0LnNwbGljZSgwLCAwLCBgVHJhbnNhY3Rpb24gd2FpdGluZyB0aW1lOiAke0RhdGUubm93KCkgLSB0b3RhbFN0YXJ0fSBtc2ApO1xuICAgICAgICAgICAgdGhpcy5jb25maWcubG9nKHRpbWVSZXBvcnQuam9pbignXFxuJykpO1xuICAgICAgICB9IGNhdGNoIChlcnJvcikge1xuICAgICAgICAgICAgdGhpcy5jb25maWcubG9nKCdbd2FpdEZvclRyYW5zYWN0aW9uXScsICdGQUlMRUQnLCBlcnJvcik7XG4gICAgICAgICAgICBpZiAoZXJyb3IuY29kZSA9PT0gVE9ORXJyb3JDb2RlLk1FU1NBR0VfRVhQSVJFRFxuICAgICAgICAgICAgICAgIHx8IGVycm9yLmNvZGUgPT09IFRPTkVycm9yQ29kZS5UUkFOU0FDVElPTl9XQUlUX1RJTUVPVVQpIHtcbiAgICAgICAgICAgICAgICB0aHJvdyBhd2FpdCB0aGlzLnJlc29sdmVEZXRhaWxlZEVycm9yKFxuICAgICAgICAgICAgICAgICAgICBlcnJvcixcbiAgICAgICAgICAgICAgICAgICAgcGFyYW1zLm1lc3NhZ2UubWVzc2FnZUJvZHlCYXNlNjQsXG4gICAgICAgICAgICAgICAgICAgIHByb2Nlc3Npbmcuc2VuZGluZ1RpbWUsXG4gICAgICAgICAgICAgICAgICAgIGFkZHJlc3MsXG4gICAgICAgICAgICAgICAgKTtcbiAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgICAgdGhyb3cgZXJyb3I7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cblxuICAgICAgICByZXR1cm4gdGhpcy5wcm9jZXNzVHJhbnNhY3Rpb24oXG4gICAgICAgICAgICBhZGRyZXNzLFxuICAgICAgICAgICAgdHJhbnNhY3Rpb24sXG4gICAgICAgICAgICBwYXJhbXMuYWJpLFxuICAgICAgICAgICAgcGFyYW1zLmZ1bmN0aW9uTmFtZSxcbiAgICAgICAgKTtcbiAgICB9XG5cbiAgICBhc3luYyBsZWdhY3lXYWl0Rm9yVHJhbnNhY3Rpb24oXG4gICAgICAgIHBhcmFtczogVE9OV2FpdEZvclRyYW5zYWN0aW9uUGFyYW1zLFxuICAgICk6IFByb21pc2U8VE9OQ29udHJhY3RSdW5SZXN1bHQ+IHtcbiAgICAgICAgY29uc3Qge1xuICAgICAgICAgICAgbWVzc2FnZSxcbiAgICAgICAgICAgIGFiaSxcbiAgICAgICAgICAgIGZ1bmN0aW9uTmFtZSxcbiAgICAgICAgICAgIHBhcmVudFNwYW4sXG4gICAgICAgIH0gPSBwYXJhbXM7XG4gICAgICAgIGNvbnN0IG1lc3NhZ2VJZCA9IGF3YWl0IHRoaXMuZW5zdXJlTWVzc2FnZUlkKG1lc3NhZ2UpO1xuICAgICAgICBjb25zdCBjb25maWcgPSB0aGlzLmNvbmZpZztcbiAgICAgICAgY29uZmlnLmxvZygnW3dhaXRGb3JUcmFuc2FjdGlvbl0nLCBmdW5jdGlvbk5hbWUsIG1lc3NhZ2UpO1xuICAgICAgICBsZXQgcHJvY2Vzc2luZ1RpbWVvdXQgPSBjb25maWcubWVzc2FnZVByb2Nlc3NpbmdUaW1lb3V0KCk7XG4gICAgICAgIGNvbnN0IHByb21pc2VzID0gW107XG4gICAgICAgIGNvbnN0IHNlcnZlckluZm8gPSBhd2FpdCB0aGlzLnF1ZXJpZXMuZ2V0U2VydmVySW5mbyhwYXJlbnRTcGFuKTtcbiAgICAgICAgY29uc3Qgb3BlcmF0aW9uSWQgPSBzZXJ2ZXJJbmZvLnN1cHBvcnRzT3BlcmF0aW9uSWRcbiAgICAgICAgICAgID8gdGhpcy5xdWVyaWVzLmdlbmVyYXRlT3BlcmF0aW9uSWQoKVxuICAgICAgICAgICAgOiB1bmRlZmluZWQ7XG4gICAgICAgIGxldCB0cmFuc2FjdGlvbjogP1FUcmFuc2FjdGlvbiA9IG51bGw7XG4gICAgICAgIGNvbnN0IHNlbmRpbmdUaW1lID0gTWF0aC5yb3VuZChEYXRlLm5vdygpIC8gMTAwMCk7XG4gICAgICAgIGxldCBibG9ja1RpbWUgPSBudWxsO1xuICAgICAgICB0cnkge1xuICAgICAgICAgICAgY29uc3QgZXhwaXJlID0gbWVzc2FnZS5leHBpcmU7XG4gICAgICAgICAgICBpZiAoZXhwaXJlKSB7XG4gICAgICAgICAgICAgICAgLy8gY2FsY3VsYXRlIHRpbWVvdXQgYWNjb3JkaW5nIHRvIGBleHBpcmVgIHZhbHVlIChpbiBzZWNvbmRzKVxuICAgICAgICAgICAgICAgIC8vIGFkZCBwcm9jZXNzaW5nIHRpbWVvdXQgYXMgbWFzdGVyIGJsb2NrIHZhbGlkYXRpb24gdGltZVxuICAgICAgICAgICAgICAgIGNvbnN0IGJsb2NrVGltZW91dCA9IGV4cGlyZSAqIDEwMDAgLSBEYXRlLm5vdygpICsgcHJvY2Vzc2luZ1RpbWVvdXQ7XG4gICAgICAgICAgICAgICAgLy8gdHJhbnNhY3Rpb24gdGltZW91dCBtdXN0IGJlIGdyZWF0ZXIgdGhlbiBibG9jayB0aW1lb3V0XG4gICAgICAgICAgICAgICAgcHJvY2Vzc2luZ1RpbWVvdXQgPSBibG9ja1RpbWVvdXQgKyBFWFRSQV9UUkFOU0FDVElPTl9XQUlUSU5HX1RJTUU7XG5cblxuICAgICAgICAgICAgICAgIGNvbnN0IHdhaXRFeHBpcmVkID0gYXN5bmMgKCkgPT4ge1xuICAgICAgICAgICAgICAgICAgICAvLyB3YWl0IGZvciBibG9jaywgcHJvZHVjZWQgYWZ0ZXIgYGV4cGlyZWAgdG8gZ3VhcmFudGVlIHRoYXQgbWVzc2FnZSBpcyByZWplY3RlZFxuICAgICAgICAgICAgICAgICAgICBsZXQgYmxvY2s6ID9RQmxvY2sgPSBudWxsO1xuICAgICAgICAgICAgICAgICAgICB0cnkge1xuICAgICAgICAgICAgICAgICAgICAgICAgYmxvY2sgPSBhd2FpdCB0aGlzLnF1ZXJpZXMuYmxvY2tzLndhaXRGb3Ioe1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGZpbHRlcjoge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBtYXN0ZXI6IHsgbWluX3NoYXJkX2dlbl91dGltZTogeyBnZTogZXhwaXJlIH0gfSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHJlc3VsdDogJ2lkIGdlbl91dGltZSBpbl9tc2dfZGVzY3IgeyB0cmFuc2FjdGlvbl9pZCB9JyxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB0aW1lb3V0OiBibG9ja1RpbWVvdXQsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgcGFyZW50U3BhbixcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBvcGVyYXRpb25JZCxcbiAgICAgICAgICAgICAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgICAgICAgICB9IGNhdGNoIChlcnJvcikge1xuICAgICAgICAgICAgICAgICAgICAgICAgaWYgKFRPTkNsaWVudEVycm9yLmlzV2FpdEZvclRpbWVvdXQoZXJyb3IpKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgdGhyb3cgVE9OQ2xpZW50RXJyb3IubmV0d29ya1NpbGVudCh7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIG1lc3NhZ2VJZCxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgc2VuZGluZ1RpbWU6IHNlbmRpbmdUaW1lLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBleHBpcmUsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRpbWVvdXQ6IGJsb2NrVGltZW91dCxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB9KTtcbiAgICAgICAgICAgICAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgdGhyb3cgZXJyb3I7XG4gICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgICAgICAgICBpZiAodHJhbnNhY3Rpb24pIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICAgICAgICAgIGNvbnN0IHRyYW5zYWN0aW9uSWQgPSBibG9jay5pbl9tc2dfZGVzY3JcbiAgICAgICAgICAgICAgICAgICAgICAgICYmIGJsb2NrLmluX21zZ19kZXNjci5maW5kKG1zZyA9PiAhIW1zZy50cmFuc2FjdGlvbl9pZCk/LnRyYW5zYWN0aW9uX2lkO1xuXG4gICAgICAgICAgICAgICAgICAgIGlmICghdHJhbnNhY3Rpb25JZCkge1xuICAgICAgICAgICAgICAgICAgICAgICAgdGhyb3cgVE9OQ2xpZW50RXJyb3IuaW50ZXJuYWxFcnJvcihcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAnSW52YWxpZCBibG9jayByZWNlaXZlZDogbm8gdHJhbnNhY3Rpb24gSUQnLFxuICAgICAgICAgICAgICAgICAgICAgICAgKTtcbiAgICAgICAgICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICAgICAgICAgIC8vIGNoZWNrIHRoYXQgdHJhbnNhY3Rpb25zIGNvbGxlY3Rpb24gaXMgdXBkYXRlZFxuICAgICAgICAgICAgICAgICAgICB0cnkge1xuICAgICAgICAgICAgICAgICAgICAgICAgYXdhaXQgdGhpcy5xdWVyaWVzLnRyYW5zYWN0aW9ucy53YWl0Rm9yKHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBmaWx0ZXI6IHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgaWQ6IHsgZXE6IHRyYW5zYWN0aW9uSWQgfSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHJlc3VsdDogJ2lkJyxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB0aW1lb3V0OiBCTE9DS19UUkFOU0FDVElPTl9XQUlUSU5HX1RJTUUsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgcGFyZW50U3BhbixcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBvcGVyYXRpb25JZCxcbiAgICAgICAgICAgICAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgICAgICAgICB9IGNhdGNoIChlcnJvcikge1xuICAgICAgICAgICAgICAgICAgICAgICAgaWYgKFRPTkNsaWVudEVycm9yLmlzV2FpdEZvclRpbWVvdXQoZXJyb3IpKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgdGhyb3cgVE9OQ2xpZW50RXJyb3IubmV0d29ya1NpbGVudCh7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIG1lc3NhZ2VJZCxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgYmxvY2tJZDogYmxvY2suaWQsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRyYW5zYWN0aW9uSWQsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRpbWVvdXQ6IEJMT0NLX1RSQU5TQUNUSU9OX1dBSVRJTkdfVElNRSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgc2VuZGluZ1RpbWU6IHNlbmRpbmdUaW1lLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBleHBpcmUsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICAgICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRocm93IGVycm9yO1xuICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgIGJsb2NrVGltZSA9IGJsb2NrLmdlbl91dGltZTtcbiAgICAgICAgICAgICAgICB9O1xuXG4gICAgICAgICAgICAgICAgcHJvbWlzZXMucHVzaCh3YWl0RXhwaXJlZCgpKTtcbiAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgLy8gd2FpdCBmb3IgbWVzc2FnZSBwcm9jZXNzaW5nIHRyYW5zYWN0aW9uXG4gICAgICAgICAgICBwcm9taXNlcy5wdXNoKG5ldyBQcm9taXNlKChyZXNvbHZlLCByZWplY3QpID0+IHtcbiAgICAgICAgICAgICAgICAoYXN5bmMgKCkgPT4ge1xuICAgICAgICAgICAgICAgICAgICB0cnkge1xuICAgICAgICAgICAgICAgICAgICAgICAgdHJhbnNhY3Rpb24gPSBhd2FpdCB0aGlzLnF1ZXJpZXMudHJhbnNhY3Rpb25zLndhaXRGb3Ioe1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGZpbHRlcjoge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBpbl9tc2c6IHsgZXE6IG1lc3NhZ2VJZCB9LFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBzdGF0dXM6IHsgZXE6IFFUcmFuc2FjdGlvblByb2Nlc3NpbmdTdGF0dXMuZmluYWxpemVkIH0sXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICByZXN1bHQ6IHRyYW5zYWN0aW9uRGV0YWlscyxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB0aW1lb3V0OiBwcm9jZXNzaW5nVGltZW91dCxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBvcGVyYXRpb25JZCxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBwYXJlbnRTcGFuLFxuICAgICAgICAgICAgICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICAgICAgICAgICAgICByZXNvbHZlKCk7XG4gICAgICAgICAgICAgICAgICAgIH0gY2F0Y2ggKGVycm9yKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICBpZiAoVE9OQ2xpZW50RXJyb3IuaXNXYWl0Rm9yVGltZW91dChlcnJvcikpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICByZWplY3QoVE9OQ2xpZW50RXJyb3IudHJhbnNhY3Rpb25XYWl0VGltZW91dCh7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIG1lc3NhZ2VJZCxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgc2VuZGluZ1RpbWUsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRpbWVvdXQ6IHByb2Nlc3NpbmdUaW1lb3V0LFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIH0pKTtcbiAgICAgICAgICAgICAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgcmVqZWN0KGVycm9yKTtcbiAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIH0pKCk7XG4gICAgICAgICAgICB9KSk7XG5cbiAgICAgICAgICAgIHRyeSB7XG4gICAgICAgICAgICAgICAgYXdhaXQgUHJvbWlzZS5yYWNlKHByb21pc2VzKTtcbiAgICAgICAgICAgIH0gZmluYWxseSB7XG4gICAgICAgICAgICAgICAgaWYgKHByb21pc2VzLmxlbmd0aCA+IDEgJiYgb3BlcmF0aW9uSWQpIHtcbiAgICAgICAgICAgICAgICAgICAgYXdhaXQgdGhpcy5xdWVyaWVzLmZpbmlzaE9wZXJhdGlvbnMoW29wZXJhdGlvbklkXSk7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICBpZiAoIXRyYW5zYWN0aW9uKSB7XG4gICAgICAgICAgICAgICAgdGhyb3cgVE9OQ2xpZW50RXJyb3IubWVzc2FnZUV4cGlyZWQoe1xuICAgICAgICAgICAgICAgICAgICBtZXNzYWdlSWQsXG4gICAgICAgICAgICAgICAgICAgIHNlbmRpbmdUaW1lOiBzZW5kaW5nVGltZSxcbiAgICAgICAgICAgICAgICAgICAgZXhwaXJlLFxuICAgICAgICAgICAgICAgICAgICBibG9ja1RpbWUsXG4gICAgICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBjb25zdCB0cmFuc2FjdGlvbk5vdyA9IHRyYW5zYWN0aW9uLm5vdyB8fCAwO1xuICAgICAgICAgICAgdGhpcy5jb25maWcubG9nKCdbd2FpdEZvclRyYW5zYWN0aW9uXScsICdUUkFOU0FDVElPTl9SRUNFSVZFRCcsIHtcbiAgICAgICAgICAgICAgICBpZDogdHJhbnNhY3Rpb24uaWQsXG4gICAgICAgICAgICAgICAgYmxvY2tJZDogdHJhbnNhY3Rpb24uYmxvY2tfaWQsXG4gICAgICAgICAgICAgICAgbm93OiBgJHtuZXcgRGF0ZSh0cmFuc2FjdGlvbk5vdyAqIDEwMDApLnRvSVNPU3RyaW5nKCl9ICgke3RyYW5zYWN0aW9uTm93fSlgLFxuICAgICAgICAgICAgfSk7XG4gICAgICAgIH0gY2F0Y2ggKGVycm9yKSB7XG4gICAgICAgICAgICB0aGlzLmNvbmZpZy5sb2coJ1t3YWl0Rm9yVHJhbnNhY3Rpb25dJywgJ0ZBSUxFRCcsIGVycm9yKTtcbiAgICAgICAgICAgIGlmIChUT05DbGllbnRFcnJvci5pc01lc3NhZ2VFeHBpcmVkKGVycm9yKVxuICAgICAgICAgICAgICAgIHx8IFRPTkNsaWVudEVycm9yLmlzQ2xpZW50RXJyb3IoZXJyb3IsIFRPTkVycm9yQ29kZS5UUkFOU0FDVElPTl9XQUlUX1RJTUVPVVQpKSB7XG4gICAgICAgICAgICAgICAgY29uc3QgZGV0YWlsZWRFcnJvcjogYW55ID0gYXdhaXQgdGhpcy5yZXNvbHZlRGV0YWlsZWRFcnJvcihcbiAgICAgICAgICAgICAgICAgICAgZXJyb3IsXG4gICAgICAgICAgICAgICAgICAgIG1lc3NhZ2UubWVzc2FnZUJvZHlCYXNlNjQsXG4gICAgICAgICAgICAgICAgICAgIERhdGUubm93KCksXG4gICAgICAgICAgICAgICAgICAgIG1lc3NhZ2UuYWRkcmVzcyxcbiAgICAgICAgICAgICAgICApO1xuICAgICAgICAgICAgICAgIGNvbnN0IG1lc3NhZ2VQcm9jZXNzaW5nU3RhdGUgPSBlcnJvci5kYXRhPy5tZXNzYWdlUHJvY2Vzc2luZ1N0YXRlO1xuICAgICAgICAgICAgICAgIGlmIChtZXNzYWdlUHJvY2Vzc2luZ1N0YXRlKSB7XG4gICAgICAgICAgICAgICAgICAgIGlmIChkZXRhaWxlZEVycm9yLmRhdGEpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIGRldGFpbGVkRXJyb3IuZGF0YS5tZXNzYWdlUHJvY2Vzc2luZ1N0YXRlID0gbWVzc2FnZVByb2Nlc3NpbmdTdGF0ZTtcbiAgICAgICAgICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIGRldGFpbGVkRXJyb3IuZGF0YSA9IHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBtZXNzYWdlUHJvY2Vzc2luZ1N0YXRlLFxuICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIHRocm93IGRldGFpbGVkRXJyb3I7XG4gICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAgIHRocm93IGVycm9yO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICAgIHJlbW92ZVR5cGVOYW1lKHRyYW5zYWN0aW9uKTtcbiAgICAgICAgY29uc3QgeyBvdXRwdXQsIGZlZXMgfSA9IGF3YWl0IHRoaXMucHJvY2Vzc1RyYW5zYWN0aW9uKFxuICAgICAgICAgICAgbWVzc2FnZS5hZGRyZXNzLFxuICAgICAgICAgICAgdHJhbnNhY3Rpb24sXG4gICAgICAgICAgICBhYmksXG4gICAgICAgICAgICBmdW5jdGlvbk5hbWUsXG4gICAgICAgICk7XG4gICAgICAgIHJldHVybiB7XG4gICAgICAgICAgICB0cmFuc2FjdGlvbixcbiAgICAgICAgICAgIG91dHB1dCxcbiAgICAgICAgICAgIGZlZXMsXG4gICAgICAgIH07XG4gICAgfVxuXG4gICAgYXN5bmMgcHJvY2Vzc1RyYW5zYWN0aW9uKFxuICAgICAgICBhZGRyZXNzOiBzdHJpbmcsXG4gICAgICAgIHRyYW5zYWN0aW9uOiBRVHJhbnNhY3Rpb24sXG4gICAgICAgIGFiaTogP1RPTkNvbnRyYWN0QUJJLFxuICAgICAgICBmdW5jdGlvbk5hbWU6ID9zdHJpbmcsXG4gICAgKTogUHJvbWlzZTxUT05Db250cmFjdFJ1blJlc3VsdD4ge1xuICAgICAgICB0cnkge1xuICAgICAgICAgICAgY29uc3QgcmVzdWx0ID0gYXdhaXQgdGhpcy5yZXF1ZXN0Q29yZSgnY29udHJhY3RzLnByb2Nlc3MudHJhbnNhY3Rpb24nLCB7XG4gICAgICAgICAgICAgICAgdHJhbnNhY3Rpb24sXG4gICAgICAgICAgICAgICAgYWJpLFxuICAgICAgICAgICAgICAgIGZ1bmN0aW9uTmFtZSxcbiAgICAgICAgICAgICAgICBhZGRyZXNzLFxuICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICByZXR1cm4ge1xuICAgICAgICAgICAgICAgIHRyYW5zYWN0aW9uLFxuICAgICAgICAgICAgICAgIC4uLnJlc3VsdCxcbiAgICAgICAgICAgIH07XG4gICAgICAgIH0gY2F0Y2ggKGVycm9yKSB7XG4gICAgICAgICAgICBjb25zdCBhY2NvdW50cyA9IGF3YWl0IHRoaXMucXVlcmllcy5hY2NvdW50cy5xdWVyeSh7XG4gICAgICAgICAgICAgICAgZmlsdGVyOiB7IGlkOiB7IGVxOiBhZGRyZXNzIH0gfSxcbiAgICAgICAgICAgICAgICByZXN1bHQ6ICdhY2NfdHlwZSBiYWxhbmNlJyxcbiAgICAgICAgICAgICAgICB0aW1lb3V0OiAxMDAwLFxuICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICBpZiAoYWNjb3VudHMubGVuZ3RoID09PSAwKSB7XG4gICAgICAgICAgICAgICAgdGhyb3cgVE9OQ2xpZW50RXJyb3IuYWNjb3VudE1pc3NpbmcoYWRkcmVzcyk7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICB0aHJvdyBlcnJvcjtcbiAgICAgICAgfVxuICAgIH1cblxuICAgIGFzeW5jIHJlc29sdmVEZXRhaWxlZEVycm9yKFxuICAgICAgICBlcnJvcjogRXJyb3IsXG4gICAgICAgIG1lc3NhZ2VCYXNlNjQ6IHN0cmluZyxcbiAgICAgICAgdGltZTogbnVtYmVyLFxuICAgICAgICBhZGRyZXNzOiBzdHJpbmcsXG4gICAgKSB7XG4gICAgICAgIGNvbnN0IGFjY291bnRzID0gYXdhaXQgdGhpcy5xdWVyaWVzLmFjY291bnRzLnF1ZXJ5KHtcbiAgICAgICAgICAgIGZpbHRlcjogeyBpZDogeyBlcTogYWRkcmVzcyB9IH0sXG4gICAgICAgICAgICByZXN1bHQ6ICdpZCBhY2NfdHlwZSBiYWxhbmNlIGJhbGFuY2Vfb3RoZXIgeyBjdXJyZW5jeSB2YWx1ZSB9IGNvZGUgZGF0YSBsYXN0X3BhaWQnLFxuICAgICAgICAgICAgdGltZW91dDogMTAwMCxcbiAgICAgICAgfSk7XG4gICAgICAgIGlmIChhY2NvdW50cy5sZW5ndGggPT09IDApIHtcbiAgICAgICAgICAgIHJldHVybiBUT05DbGllbnRFcnJvci5hY2NvdW50TWlzc2luZyhhZGRyZXNzKTtcbiAgICAgICAgfVxuICAgICAgICBjb25zdCBhY2NvdW50ID0gYWNjb3VudHNbMF07XG4gICAgICAgIHJlbW92ZVR5cGVOYW1lKGFjY291bnQpO1xuICAgICAgICB0cnkge1xuICAgICAgICAgICAgYXdhaXQgdGhpcy5yZXF1ZXN0Q29yZSgnY29udHJhY3RzLnJlc29sdmUuZXJyb3InLCB7XG4gICAgICAgICAgICAgICAgYWRkcmVzcyxcbiAgICAgICAgICAgICAgICBhY2NvdW50LFxuICAgICAgICAgICAgICAgIG1lc3NhZ2VCYXNlNjQsXG4gICAgICAgICAgICAgICAgdGltZTogTWF0aC5yb3VuZCh0aW1lIC8gMTAwMCksXG4gICAgICAgICAgICAgICAgbWFpbkVycm9yOiBlcnJvcixcbiAgICAgICAgICAgIH0pO1xuICAgICAgICB9IGNhdGNoIChyZXNvbHZlZCkge1xuICAgICAgICAgICAgcmV0dXJuIHJlc29sdmVkO1xuICAgICAgICB9XG4gICAgICAgIHJldHVybiBlcnJvcjtcbiAgICB9XG5cbiAgICBhc3luYyBpc0RlcGxveWVkKGFkZHJlc3M6IHN0cmluZywgcGFyZW50U3Bhbj86IChTcGFuIHwgU3BhbkNvbnRleHQpKTogUHJvbWlzZTxib29sPiB7XG4gICAgICAgIGNvbnN0IGFjY291bnQgPSBhd2FpdCB0aGlzLnF1ZXJpZXMuYWNjb3VudHMucXVlcnkoe1xuICAgICAgICAgICAgZmlsdGVyOiB7XG4gICAgICAgICAgICAgICAgaWQ6IHsgZXE6IGFkZHJlc3MgfSxcbiAgICAgICAgICAgICAgICBhY2NfdHlwZTogeyBlcTogUUFjY291bnRUeXBlLmFjdGl2ZSB9LFxuICAgICAgICAgICAgfSxcbiAgICAgICAgICAgIHJlc3VsdDogJ2lkJyxcbiAgICAgICAgICAgIHBhcmVudFNwYW4sXG4gICAgICAgIH0pO1xuICAgICAgICByZXR1cm4gYWNjb3VudC5sZW5ndGggPiAwO1xuICAgIH1cblxuICAgIGFzeW5jIHByb2Nlc3NEZXBsb3lNZXNzYWdlKFxuICAgICAgICBtZXNzYWdlOiBUT05Db250cmFjdERlcGxveU1lc3NhZ2UsXG4gICAgICAgIHBhcmVudFNwYW4/OiAoU3BhbiB8IFNwYW5Db250ZXh0KSxcbiAgICAgICAgcmV0cnlJbmRleD86IG51bWJlcixcbiAgICApOiBQcm9taXNlPFRPTkNvbnRyYWN0RGVwbG95UmVzdWx0PiB7XG4gICAgICAgIHRoaXMuY29uZmlnLmxvZygncHJvY2Vzc0RlcGxveU1lc3NhZ2UnLCBtZXNzYWdlKTtcbiAgICAgICAgaWYgKGF3YWl0IHRoaXMuaXNEZXBsb3llZChtZXNzYWdlLmFkZHJlc3MsIHBhcmVudFNwYW4pKSB7XG4gICAgICAgICAgICByZXR1cm4ge1xuICAgICAgICAgICAgICAgIGFkZHJlc3M6IG1lc3NhZ2UuYWRkcmVzcyxcbiAgICAgICAgICAgICAgICBhbHJlYWR5RGVwbG95ZWQ6IHRydWUsXG4gICAgICAgICAgICB9O1xuICAgICAgICB9XG4gICAgICAgIGNvbnN0IHByb2Nlc3NpbmcgPSBhd2FpdCB0aGlzLnNlbmRNZXNzYWdlKG1lc3NhZ2UubWVzc2FnZSwgcGFyZW50U3Bhbik7XG4gICAgICAgIHJldHVybiB0aGlzLndhaXRGb3JEZXBsb3lUcmFuc2FjdGlvbihtZXNzYWdlLCBwcm9jZXNzaW5nLCBwYXJlbnRTcGFuKTtcbiAgICB9XG5cbiAgICBhc3luYyB3YWl0Rm9yRGVwbG95VHJhbnNhY3Rpb24oXG4gICAgICAgIGRlcGxveU1lc3NhZ2U6IFRPTkNvbnRyYWN0RGVwbG95TWVzc2FnZSxcbiAgICAgICAgbWVzc2FnZVByb2Nlc3NpbmdTdGF0ZTogVE9OTWVzc2FnZVByb2Nlc3NpbmdTdGF0ZSxcbiAgICAgICAgcGFyZW50U3Bhbj86IChTcGFuIHwgU3BhbkNvbnRleHQpLFxuICAgICAgICBpbmZpbml0ZVdhaXQ/OiBib29sZWFuLFxuICAgICk6IFByb21pc2U8VE9OQ29udHJhY3REZXBsb3lSZXN1bHQ+IHtcbiAgICAgICAgY29uc3QgbWVzc2FnZSA9IGRlcGxveU1lc3NhZ2UubWVzc2FnZTtcbiAgICAgICAgY29uc3QgcmVzdWx0ID0gYXdhaXQgdGhpcy53YWl0Rm9yVHJhbnNhY3Rpb24oe1xuICAgICAgICAgICAgbWVzc2FnZSxcbiAgICAgICAgICAgIG1lc3NhZ2VQcm9jZXNzaW5nU3RhdGUsXG4gICAgICAgICAgICBwYXJlbnRTcGFuLFxuICAgICAgICAgICAgaW5maW5pdGVXYWl0LFxuICAgICAgICB9KTtcbiAgICAgICAgcmV0dXJuIHtcbiAgICAgICAgICAgIC4uLnJlc3VsdCxcbiAgICAgICAgICAgIGFkZHJlc3M6IG1lc3NhZ2UuYWRkcmVzcyxcbiAgICAgICAgICAgIGFscmVhZHlEZXBsb3llZDogZmFsc2UsXG4gICAgICAgIH07XG4gICAgfVxuXG5cbiAgICBhc3luYyBwcm9jZXNzUnVuTWVzc2FnZShcbiAgICAgICAgcnVuTWVzc2FnZTogVE9OQ29udHJhY3RSdW5NZXNzYWdlLFxuICAgICAgICBwYXJlbnRTcGFuPzogKFNwYW4gfCBTcGFuQ29udGV4dCksXG4gICAgKTogUHJvbWlzZTxUT05Db250cmFjdFJ1blJlc3VsdD4ge1xuICAgICAgICB0aGlzLmNvbmZpZy5sb2coJ3Byb2Nlc3NSdW5NZXNzYWdlJywgcnVuTWVzc2FnZSk7XG4gICAgICAgIGNvbnN0IHByb2Nlc3NpbmcgPSBhd2FpdCB0aGlzLnNlbmRNZXNzYWdlKHJ1bk1lc3NhZ2UubWVzc2FnZSwgcGFyZW50U3Bhbik7XG4gICAgICAgIHJldHVybiB0aGlzLndhaXRGb3JSdW5UcmFuc2FjdGlvbihydW5NZXNzYWdlLCBwcm9jZXNzaW5nLCBwYXJlbnRTcGFuKTtcbiAgICB9XG5cbiAgICBhc3luYyB3YWl0Rm9yUnVuVHJhbnNhY3Rpb24oXG4gICAgICAgIHJ1bk1lc3NhZ2U6IFRPTkNvbnRyYWN0UnVuTWVzc2FnZSxcbiAgICAgICAgbWVzc2FnZVByb2Nlc3NpbmdTdGF0ZTogVE9OTWVzc2FnZVByb2Nlc3NpbmdTdGF0ZSxcbiAgICAgICAgcGFyZW50U3Bhbj86IChTcGFuIHwgU3BhbkNvbnRleHQpLFxuICAgICAgICBpbmZpbml0ZVdhaXQ/OiBib29sZWFuLFxuICAgICk6IFByb21pc2U8VE9OQ29udHJhY3RSdW5SZXN1bHQ+IHtcbiAgICAgICAgcmV0dXJuIHRoaXMud2FpdEZvclRyYW5zYWN0aW9uKHtcbiAgICAgICAgICAgIG1lc3NhZ2U6IHJ1bk1lc3NhZ2UubWVzc2FnZSxcbiAgICAgICAgICAgIG1lc3NhZ2VQcm9jZXNzaW5nU3RhdGUsXG4gICAgICAgICAgICBwYXJlbnRTcGFuLFxuICAgICAgICAgICAgaW5maW5pdGVXYWl0LFxuICAgICAgICAgICAgYWJpOiBydW5NZXNzYWdlLmFiaSxcbiAgICAgICAgICAgIGZ1bmN0aW9uTmFtZTogcnVuTWVzc2FnZS5mdW5jdGlvbk5hbWUsXG4gICAgICAgIH0pO1xuICAgIH1cblxuICAgIC8qKlxuICAgICAqIERlcHJlY2F0ZWQuIFVzZSBgcnVuTWVzc2FnZUxvY2FsYCBpbnN0ZWFkLlxuICAgICAqIEBwYXJhbSBwYXJhbXNcbiAgICAgKiBAcGFyYW0gd2FpdFBhcmFtc1xuICAgICAqIEBwYXJhbSBwYXJlbnRTcGFuXG4gICAgICogQHJldHVybnMge1Byb21pc2U8dW5rbm93bj59XG4gICAgICovXG4gICAgYXN5bmMgcHJvY2Vzc1J1bk1lc3NhZ2VMb2NhbChcbiAgICAgICAgcGFyYW1zOiBUT05Db250cmFjdFJ1bk1lc3NhZ2UsXG4gICAgICAgIHdhaXRQYXJhbXM/OiBUT05Db250cmFjdEFjY291bnRXYWl0UGFyYW1zLFxuICAgICAgICBwYXJlbnRTcGFuPzogKFNwYW4gfCBTcGFuQ29udGV4dCksXG4gICAgKTogUHJvbWlzZTxUT05Db250cmFjdFJ1blJlc3VsdD4ge1xuICAgICAgICB0aGlzLmNvbmZpZy5sb2coJ3Byb2Nlc3NSdW5NZXNzYWdlTG9jYWwnLCBwYXJhbXMpO1xuXG4gICAgICAgIGNvbnN0IGFjY291bnQgPSBhd2FpdCB0aGlzLmdldEFjY291bnQocGFyYW1zLmFkZHJlc3MsIHRydWUsIHdhaXRQYXJhbXMsIHBhcmVudFNwYW4pO1xuXG4gICAgICAgIHJldHVybiB0aGlzLnJlcXVlc3RDb3JlKCdjb250cmFjdHMucnVuLmxvY2FsLm1zZycsIHtcbiAgICAgICAgICAgIGFkZHJlc3M6IHBhcmFtcy5hZGRyZXNzLFxuICAgICAgICAgICAgYWNjb3VudCxcbiAgICAgICAgICAgIGFiaTogcGFyYW1zLmFiaSxcbiAgICAgICAgICAgIGZ1bmN0aW9uTmFtZTogcGFyYW1zLmZ1bmN0aW9uTmFtZSxcbiAgICAgICAgICAgIG1lc3NhZ2VCYXNlNjQ6IHBhcmFtcy5tZXNzYWdlLm1lc3NhZ2VCb2R5QmFzZTY0LFxuICAgICAgICB9KTtcbiAgICB9XG5cbiAgICAvLyBGZWUgY2FsY3VsYXRpb25cblxuICAgIGJpZ0JhbGFuY2UgPSAnMHgxMDAwMDAwMDAwMDAwMCc7XG5cbiAgICBhc3luYyBjYWxjUnVuRmVlcyhcbiAgICAgICAgcGFyYW1zOiBUT05Db250cmFjdENhbGNSdW5GZWVQYXJhbXMsXG4gICAgICAgIHBhcmVudFNwYW4/OiAoU3BhbiB8IFNwYW5Db250ZXh0KSxcbiAgICApOiBQcm9taXNlPFRPTkNvbnRyYWN0Q2FsY0ZlZVJlc3VsdD4ge1xuICAgICAgICB0aGlzLmNvbmZpZy5sb2coJ2NhbGNSdW5GZWVzJywgcGFyYW1zKTtcblxuICAgICAgICBjb25zdCBhY2NvdW50ID0gYXdhaXQgdGhpcy5nZXRBY2NvdW50KHBhcmFtcy5hZGRyZXNzLCB0cnVlLCBwYXJhbXMud2FpdFBhcmFtcywgcGFyZW50U3Bhbik7XG5cbiAgICAgICAgaWYgKHBhcmFtcy5lbXVsYXRlQmFsYW5jZSkge1xuICAgICAgICAgICAgYWNjb3VudC5iYWxhbmNlID0gdGhpcy5iaWdCYWxhbmNlO1xuICAgICAgICB9XG5cbiAgICAgICAgcmV0dXJuIHRoaXMucmVxdWVzdENvcmUoJ2NvbnRyYWN0cy5ydW4uZmVlJywge1xuICAgICAgICAgICAgYWRkcmVzczogcGFyYW1zLmFkZHJlc3MsXG4gICAgICAgICAgICBhY2NvdW50LFxuICAgICAgICAgICAgYWJpOiBwYXJhbXMuYWJpLFxuICAgICAgICAgICAgZnVuY3Rpb25OYW1lOiBwYXJhbXMuZnVuY3Rpb25OYW1lLFxuICAgICAgICAgICAgaW5wdXQ6IHBhcmFtcy5pbnB1dCxcbiAgICAgICAgICAgIGtleVBhaXI6IHBhcmFtcy5rZXlQYWlyLFxuICAgICAgICB9KTtcbiAgICB9XG5cbiAgICBhc3luYyBjYWxjRGVwbG95RmVlcyhcbiAgICAgICAgcGFyYW1zOiBUT05Db250cmFjdENhbGNEZXBsb3lGZWVQYXJhbXMsXG4gICAgICAgIHBhcmVudFNwYW4/OiAoU3BhbiB8IFNwYW5Db250ZXh0KSxcbiAgICApOiBQcm9taXNlPFRPTkNvbnRyYWN0Q2FsY0ZlZVJlc3VsdD4ge1xuICAgICAgICB0aGlzLmNvbmZpZy5sb2coJ2NhbGNEZXBsb3lGZWVzJywgcGFyYW1zKTtcblxuICAgICAgICBjb25zdCBtZXNzYWdlID0gYXdhaXQgdGhpcy5jcmVhdGVEZXBsb3lNZXNzYWdlKHBhcmFtcyk7XG5cbiAgICAgICAgcmV0dXJuIHRoaXMuY2FsY01zZ1Byb2Nlc3NGZWVzKHtcbiAgICAgICAgICAgIGFkZHJlc3M6IG1lc3NhZ2UuYWRkcmVzcyxcbiAgICAgICAgICAgIG1lc3NhZ2U6IG1lc3NhZ2UubWVzc2FnZSxcbiAgICAgICAgICAgIGVtdWxhdGVCYWxhbmNlOiBwYXJhbXMuZW11bGF0ZUJhbGFuY2UsXG4gICAgICAgICAgICBuZXdBY2NvdW50OiBwYXJhbXMubmV3QWNjb3VudCxcbiAgICAgICAgfSwgcGFyZW50U3Bhbik7XG4gICAgfVxuXG4gICAgYXN5bmMgY2FsY01zZ1Byb2Nlc3NGZWVzKFxuICAgICAgICBwYXJhbXM6IFRPTkNvbnRyYWN0Q2FsY01zZ1Byb2Nlc3NpbmdGZWVzUGFyYW1zLFxuICAgICAgICBwYXJlbnRTcGFuPzogKFNwYW4gfCBTcGFuQ29udGV4dCksXG4gICAgKTogUHJvbWlzZTxUT05Db250cmFjdENhbGNGZWVSZXN1bHQ+IHtcbiAgICAgICAgdGhpcy5jb25maWcubG9nKCdjYWxjTXNnUHJvY2Vzc0ZlZXMnLCBwYXJhbXMpO1xuXG4gICAgICAgIGxldCBhY2NvdW50OiBRQWNjb3VudCA9IHtcbiAgICAgICAgICAgIGJhbGFuY2U6IHRoaXMuYmlnQmFsYW5jZSxcbiAgICAgICAgICAgIGlkOiBwYXJhbXMuYWRkcmVzcyxcbiAgICAgICAgICAgIGxhc3RfcGFpZDogTWF0aC5mbG9vcihEYXRlLm5vdygpIC8gMTAwMCksXG4gICAgICAgIH07XG5cbiAgICAgICAgaWYgKCFwYXJhbXMubmV3QWNjb3VudCkge1xuICAgICAgICAgICAgYWNjb3VudCA9IGF3YWl0IHRoaXMuZ2V0QWNjb3VudChwYXJhbXMuYWRkcmVzcywgZmFsc2UsIHBhcmFtcy53YWl0UGFyYW1zLCBwYXJlbnRTcGFuKTtcbiAgICAgICAgfVxuXG4gICAgICAgIGlmIChwYXJhbXMuZW11bGF0ZUJhbGFuY2UpIHtcbiAgICAgICAgICAgIGFjY291bnQuYmFsYW5jZSA9IHRoaXMuYmlnQmFsYW5jZTtcbiAgICAgICAgfVxuXG4gICAgICAgIHJldHVybiB0aGlzLnJlcXVlc3RDb3JlKCdjb250cmFjdHMucnVuLmZlZS5tc2cnLCB7XG4gICAgICAgICAgICBhZGRyZXNzOiBwYXJhbXMuYWRkcmVzcyxcbiAgICAgICAgICAgIGFjY291bnQsXG4gICAgICAgICAgICBtZXNzYWdlQmFzZTY0OiBwYXJhbXMubWVzc2FnZS5tZXNzYWdlQm9keUJhc2U2NCxcbiAgICAgICAgfSk7XG4gICAgfVxuXG4gICAgLy8gQWRkcmVzcyBwcm9jZXNzaW5nXG5cbiAgICBhc3luYyBjb252ZXJ0QWRkcmVzcyhcbiAgICAgICAgcGFyYW1zOiBUT05Db250cmFjdENvbnZlcnRBZGRyZXNzUGFyYW1zLFxuICAgICk6IFByb21pc2U8VE9OQ29udHJhY3RDb252ZXJ0QWRkcmVzc1Jlc3VsdD4ge1xuICAgICAgICByZXR1cm4gdGhpcy5yZXF1ZXN0Q29yZSgnY29udHJhY3RzLmFkZHJlc3MuY29udmVydCcsIHBhcmFtcyk7XG4gICAgfVxuXG4gICAgLy8gSW50ZXJuYWxzXG5cbiAgICBhc3luYyBpbnRlcm5hbERlcGxveU5hdGl2ZShwYXJhbXM6IFRPTkNvbnRyYWN0RGVwbG95UGFyYW1zKTogUHJvbWlzZTxUT05Db250cmFjdERlcGxveVJlc3VsdD4ge1xuICAgICAgICByZXR1cm4gdGhpcy5yZXF1ZXN0Q29yZSgnY29udHJhY3RzLmRlcGxveScsIHtcbiAgICAgICAgICAgIGFiaTogcGFyYW1zLnBhY2thZ2UuYWJpLFxuICAgICAgICAgICAgY29uc3RydWN0b3JIZWFkZXI6IHBhcmFtcy5jb25zdHJ1Y3RvckhlYWRlcixcbiAgICAgICAgICAgIGNvbnN0cnVjdG9yUGFyYW1zOiBwYXJhbXMuY29uc3RydWN0b3JQYXJhbXMsXG4gICAgICAgICAgICBpbml0UGFyYW1zOiBwYXJhbXMuaW5pdFBhcmFtcyxcbiAgICAgICAgICAgIGltYWdlQmFzZTY0OiBwYXJhbXMucGFja2FnZS5pbWFnZUJhc2U2NCxcbiAgICAgICAgICAgIGtleVBhaXI6IHBhcmFtcy5rZXlQYWlyLFxuICAgICAgICB9KTtcbiAgICB9XG5cblxuICAgIGFzeW5jIGludGVybmFsUnVuTmF0aXZlKHBhcmFtczogVE9OQ29udHJhY3RSdW5QYXJhbXMpOiBQcm9taXNlPFRPTkNvbnRyYWN0UnVuUmVzdWx0PiB7XG4gICAgICAgIHJldHVybiB0aGlzLnJlcXVlc3RDb3JlKCdjb250cmFjdHMucnVuJywge1xuICAgICAgICAgICAgYWRkcmVzczogcGFyYW1zLmFkZHJlc3MsXG4gICAgICAgICAgICBhYmk6IHBhcmFtcy5hYmksXG4gICAgICAgICAgICBmdW5jdGlvbk5hbWU6IHBhcmFtcy5mdW5jdGlvbk5hbWUsXG4gICAgICAgICAgICBoZWFkZXI6IHBhcmFtcy5oZWFkZXIsXG4gICAgICAgICAgICBpbnB1dDogcGFyYW1zLmlucHV0LFxuICAgICAgICAgICAga2V5UGFpcjogcGFyYW1zLmtleVBhaXIsXG4gICAgICAgIH0pO1xuICAgIH1cblxuXG4gICAgYXN5bmMgcmV0cnlDYWxsKGNhbGw6IChpbmRleDogbnVtYmVyKSA9PiBQcm9taXNlPGFueT4pOiBQcm9taXNlPGFueT4ge1xuICAgICAgICBjb25zdCByZXRyaWVzQ291bnQgPSB0aGlzLmNvbmZpZy5tZXNzYWdlUmV0cmllc0NvdW50KCk7XG4gICAgICAgIGZvciAobGV0IGkgPSAwOyBpIDw9IHJldHJpZXNDb3VudDsgaSArPSAxKSB7XG4gICAgICAgICAgICBpZiAoaSA+IDApIHtcbiAgICAgICAgICAgICAgICB0aGlzLmNvbmZpZy5sb2coYFJldHJ5ICMke2l9YCk7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICB0cnkge1xuICAgICAgICAgICAgICAgIHJldHVybiBhd2FpdCBjYWxsKGkpO1xuICAgICAgICAgICAgfSBjYXRjaCAoZXJyb3IpIHtcbiAgICAgICAgICAgICAgICAvLyByZXRyeSBpZiBtZXNzYWdlIGV4cGlyZWQgb3IgaWYgcmVzb2x2aW5nIHJldHVybmVkIHRoYXQgbWVzc2FnZSBleHBpcmVkL3JlcGxheSBcbiAgICAgICAgICAgICAgICAvLyBwcm90ZWN0aW9uIGVycm9yIG9yIGlmIHRyYW5zYWN0aW9uIHdpdGggbWVzc2FnZSBleHBpcmVkL3JlcGxheSBwcm90ZWN0aW9uIGVycm9yXG4gICAgICAgICAgICAgICAgLy8gcmV0dXJuZWRcbiAgICAgICAgICAgICAgICBjb25zdCB1c2VSZXRyeSA9IGVycm9yLmNvZGUgPT09IFRPTkVycm9yQ29kZS5NRVNTQUdFX0VYUElSRURcbiAgICAgICAgICAgICAgICAgICAgfHwgVE9OQ2xpZW50RXJyb3IuaXNDb250cmFjdEVycm9yKGVycm9yLCBUT05Db250cmFjdEV4aXRDb2RlLlJFUExBWV9QUk9URUNUSU9OLCB0cnVlKVxuICAgICAgICAgICAgICAgICAgICB8fCBUT05DbGllbnRFcnJvci5pc0NvbnRyYWN0RXJyb3IoZXJyb3IsIFRPTkNvbnRyYWN0RXhpdENvZGUuTUVTU0FHRV9FWFBJUkVELCB0cnVlKVxuICAgICAgICAgICAgICAgICAgICB8fCBUT05DbGllbnRFcnJvci5pc1Jlc29sdmVkQ29udHJhY3RFcnJvckFmdGVyRXhwaXJlKGVycm9yLCBUT05Db250cmFjdEV4aXRDb2RlLlJFUExBWV9QUk9URUNUSU9OKVxuICAgICAgICAgICAgICAgICAgICB8fCBUT05DbGllbnRFcnJvci5pc1Jlc29sdmVkQ29udHJhY3RFcnJvckFmdGVyRXhwaXJlKGVycm9yLCBUT05Db250cmFjdEV4aXRDb2RlLk1FU1NBR0VfRVhQSVJFRCk7XG4gICAgICAgICAgICAgICAgaWYgKCF1c2VSZXRyeSB8fCBpID09PSByZXRyaWVzQ291bnQpIHtcbiAgICAgICAgICAgICAgICAgICAgdGhyb3cgZXJyb3I7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICAgIHRocm93IFRPTkNsaWVudEVycm9yLmludGVybmFsRXJyb3IoJ0FsbCByZXRyeSBhdHRlbXB0cyBmYWlsZWQnKTtcbiAgICB9XG5cblxuICAgIGFzeW5jIGludGVybmFsRGVwbG95SnMoXG4gICAgICAgIHBhcmFtczogVE9OQ29udHJhY3REZXBsb3lQYXJhbXMsXG4gICAgICAgIHBhcmVudFNwYW4/OiAoU3BhbiB8IFNwYW5Db250ZXh0KSxcbiAgICApOiBQcm9taXNlPFRPTkNvbnRyYWN0RGVwbG95UmVzdWx0PiB7XG4gICAgICAgIHRoaXMuY29uZmlnLmxvZygnRGVwbG95IHN0YXJ0Jyk7XG4gICAgICAgIHJldHVybiB0aGlzLnJldHJ5Q2FsbChhc3luYyAocmV0cnlJbmRleCkgPT4ge1xuICAgICAgICAgICAgY29uc3QgZGVwbG95TWVzc2FnZSA9IGF3YWl0IHRoaXMuY3JlYXRlRGVwbG95TWVzc2FnZShwYXJhbXMsIHJldHJ5SW5kZXgpO1xuICAgICAgICAgICAgaWYgKGF3YWl0IHRoaXMuaXNEZXBsb3llZChkZXBsb3lNZXNzYWdlLmFkZHJlc3MsIHBhcmVudFNwYW4pKSB7XG4gICAgICAgICAgICAgICAgcmV0dXJuIHtcbiAgICAgICAgICAgICAgICAgICAgYWRkcmVzczogZGVwbG95TWVzc2FnZS5hZGRyZXNzLFxuICAgICAgICAgICAgICAgICAgICBhbHJlYWR5RGVwbG95ZWQ6IHRydWUsXG4gICAgICAgICAgICAgICAgfTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGNvbnN0IHByb2Nlc3NpbmcgPSBhd2FpdCB0aGlzLnNlbmRNZXNzYWdlKGRlcGxveU1lc3NhZ2UubWVzc2FnZSwgcGFyZW50U3Bhbik7XG4gICAgICAgICAgICByZXR1cm4gdGhpcy53YWl0Rm9yRGVwbG95VHJhbnNhY3Rpb24oZGVwbG95TWVzc2FnZSwgcHJvY2Vzc2luZywgcGFyZW50U3Bhbik7XG4gICAgICAgIH0pO1xuICAgIH1cblxuXG4gICAgYXN5bmMgaW50ZXJuYWxSdW5KcyhcbiAgICAgICAgcGFyYW1zOiBUT05Db250cmFjdFJ1blBhcmFtcyxcbiAgICAgICAgcGFyZW50U3Bhbj86IChTcGFuIHwgU3BhbkNvbnRleHQpLFxuICAgICk6IFByb21pc2U8VE9OQ29udHJhY3RSdW5SZXN1bHQ+IHtcbiAgICAgICAgdGhpcy5jb25maWcubG9nKCdSdW4gc3RhcnQnKTtcbiAgICAgICAgcmV0dXJuIHRoaXMucmV0cnlDYWxsKGFzeW5jIChyZXRyeUluZGV4KSA9PiB7XG4gICAgICAgICAgICBjb25zdCBydW5NZXNzYWdlID0gYXdhaXQgdGhpcy5jcmVhdGVSdW5NZXNzYWdlKHBhcmFtcywgcmV0cnlJbmRleCk7XG4gICAgICAgICAgICBjb25zdCBwcm9jZXNzaW5nID0gYXdhaXQgdGhpcy5zZW5kTWVzc2FnZShydW5NZXNzYWdlLm1lc3NhZ2UsIHBhcmVudFNwYW4pO1xuICAgICAgICAgICAgcmV0dXJuIHRoaXMud2FpdEZvclJ1blRyYW5zYWN0aW9uKHJ1bk1lc3NhZ2UsIHByb2Nlc3NpbmcsIHBhcmVudFNwYW4pO1xuICAgICAgICB9KTtcbiAgICB9XG5cblxuICAgIGFzeW5jIGdldEFjY291bnQoXG4gICAgICAgIGFkZHJlc3M6IHN0cmluZyxcbiAgICAgICAgYWN0aXZlOiBib29sZWFuLFxuICAgICAgICB3YWl0UGFyYW1zPzogVE9OQ29udHJhY3RBY2NvdW50V2FpdFBhcmFtcyxcbiAgICAgICAgcGFyZW50U3Bhbj86IChTcGFuIHwgU3BhbkNvbnRleHQpLFxuICAgICk6IFByb21pc2U8UUFjY291bnQ+IHtcbiAgICAgICAgY29uc3QgZmlsdGVyOiB7IFtzdHJpbmddOiBhbnkgfSA9IHtcbiAgICAgICAgICAgIGlkOiB7IGVxOiBhZGRyZXNzIH0sXG4gICAgICAgIH07XG4gICAgICAgIGlmICh3YWl0UGFyYW1zICYmIHdhaXRQYXJhbXMudHJhbnNhY3Rpb25MdCkge1xuICAgICAgICAgICAgZmlsdGVyLmxhc3RfdHJhbnNfbHQgPSB7IGdlOiB3YWl0UGFyYW1zLnRyYW5zYWN0aW9uTHQgfTtcbiAgICAgICAgfVxuICAgICAgICBpZiAoYWN0aXZlKSB7XG4gICAgICAgICAgICBmaWx0ZXIuYWNjX3R5cGUgPSB7IGVxOiBRQWNjb3VudFR5cGUuYWN0aXZlIH07XG4gICAgICAgIH1cblxuICAgICAgICB0aGlzLmNvbmZpZy5sb2coJ2dldEFjY291bnQuIEZpbHRlcicsIGZpbHRlcik7XG4gICAgICAgIGNvbnN0IGFjY291bnRzID0gYXdhaXQgdGhpcy5xdWVyaWVzLmFjY291bnRzLnF1ZXJ5KHtcbiAgICAgICAgICAgIGZpbHRlcixcbiAgICAgICAgICAgIHJlc3VsdDogJ2lkIGFjY190eXBlIGNvZGUgZGF0YSBiYWxhbmNlIGJhbGFuY2Vfb3RoZXIgeyBjdXJyZW5jeSB2YWx1ZSB9IGxhc3RfcGFpZCcsXG4gICAgICAgICAgICAuLi4od2FpdFBhcmFtcyAmJiB3YWl0UGFyYW1zLnRpbWVvdXQgPyB7IHRpbWVvdXQ6IHdhaXRQYXJhbXMudGltZW91dCB9IDoge30pLFxuICAgICAgICAgICAgcGFyZW50U3BhbixcbiAgICAgICAgfSk7XG4gICAgICAgIGlmIChhY2NvdW50cy5sZW5ndGggPT09IDApIHtcbiAgICAgICAgICAgIHRocm93IFRPTkNsaWVudEVycm9yLmFjY291bnRNaXNzaW5nKGFkZHJlc3MpO1xuICAgICAgICB9XG4gICAgICAgIGNvbnN0IGFjY291bnQgPSBhY2NvdW50c1swXTtcbiAgICAgICAgcmVtb3ZlVHlwZU5hbWUoYWNjb3VudCk7XG4gICAgICAgIHRoaXMuY29uZmlnLmxvZygnZ2V0QWNjb3VudC4gQWNjb3VudCByZWNlaXZlZCcsIGFjY291bnQpO1xuICAgICAgICByZXR1cm4gYWNjb3VudDtcbiAgICB9XG5cbiAgICBhc3luYyBpbnRlcm5hbFJ1bkxvY2FsSnMoXG4gICAgICAgIHBhcmFtczogVE9OQ29udHJhY3RSdW5Mb2NhbFBhcmFtcyxcbiAgICAgICAgcGFyZW50U3Bhbj86IChTcGFuIHwgU3BhbkNvbnRleHQpLFxuICAgICk6IFByb21pc2U8VE9OQ29udHJhY3RSdW5Mb2NhbFJlc3VsdD4ge1xuICAgICAgICBjb25zdCBhZGRyZXNzID0gcGFyYW1zLmFkZHJlc3M7XG4gICAgICAgIGlmICghYWRkcmVzcykge1xuICAgICAgICAgICAgdGhyb3cgVE9OQ2xpZW50RXJyb3IuYWRkcmVzc1JlcXVpcmVkRm9yUnVuTG9jYWwoKTtcbiAgICAgICAgfVxuICAgICAgICBjb25zdCBhY2NvdW50ID0gcGFyYW1zLmFjY291bnQgfHwgKGF3YWl0IHRoaXMuZ2V0QWNjb3VudChcbiAgICAgICAgICAgIGFkZHJlc3MsXG4gICAgICAgICAgICBmYWxzZSxcbiAgICAgICAgICAgIHBhcmFtcy53YWl0UGFyYW1zLFxuICAgICAgICAgICAgcGFyZW50U3BhbixcbiAgICAgICAgKSk7XG4gICAgICAgIGlmICghYWNjb3VudC5jb2RlKSB7XG4gICAgICAgICAgICB0aHJvdyBUT05DbGllbnRFcnJvci5hY2NvdW50Q29kZU1pc3NpbmcoYWRkcmVzcywgKGFjY291bnQ6IGFueSkuYmFsYW5jZSk7XG4gICAgICAgIH1cbiAgICAgICAgcmV0dXJuIHRoaXMucmVxdWVzdENvcmUoJ2NvbnRyYWN0cy5ydW4ubG9jYWwnLCB7XG4gICAgICAgICAgICBhZGRyZXNzLFxuICAgICAgICAgICAgYWNjb3VudCxcbiAgICAgICAgICAgIGFiaTogcGFyYW1zLmFiaSxcbiAgICAgICAgICAgIGZ1bmN0aW9uTmFtZTogcGFyYW1zLmZ1bmN0aW9uTmFtZSxcbiAgICAgICAgICAgIGlucHV0OiBwYXJhbXMuaW5wdXQsXG4gICAgICAgICAgICBrZXlQYWlyOiBwYXJhbXMua2V5UGFpcixcbiAgICAgICAgICAgIGZ1bGxSdW46IHBhcmFtcy5mdWxsUnVuLFxuICAgICAgICB9KTtcbiAgICB9XG5cbiAgICBhc3luYyBpbnRlcm5hbFJ1bk1lc3NhZ2VMb2NhbEpzKFxuICAgICAgICBwYXJhbXM6IFRPTkNvbnRyYWN0UnVuTWVzc2FnZUxvY2FsUGFyYW1zLFxuICAgICAgICBwYXJlbnRTcGFuPzogKFNwYW4gfCBTcGFuQ29udGV4dCksXG4gICAgKTogUHJvbWlzZTxUT05Db250cmFjdFJ1bkxvY2FsUmVzdWx0PiB7XG4gICAgICAgIGNvbnN0IGFkZHJlc3MgPSBwYXJhbXMuYWRkcmVzcztcbiAgICAgICAgaWYgKCFhZGRyZXNzKSB7XG4gICAgICAgICAgICB0aHJvdyBUT05DbGllbnRFcnJvci5hZGRyZXNzUmVxdWlyZWRGb3JSdW5Mb2NhbCgpO1xuICAgICAgICB9XG4gICAgICAgIGNvbnN0IGFjY291bnQgPSBwYXJhbXMuYWNjb3VudCB8fCAoYXdhaXQgdGhpcy5nZXRBY2NvdW50KFxuICAgICAgICAgICAgYWRkcmVzcyxcbiAgICAgICAgICAgIGZhbHNlLFxuICAgICAgICAgICAgcGFyYW1zLndhaXRQYXJhbXMsXG4gICAgICAgICAgICBwYXJlbnRTcGFuLFxuICAgICAgICApKTtcbiAgICAgICAgaWYgKCFhY2NvdW50LmNvZGUpIHtcbiAgICAgICAgICAgIHRocm93IFRPTkNsaWVudEVycm9yLmFjY291bnRDb2RlTWlzc2luZyhhZGRyZXNzLCAoYWNjb3VudDogYW55KS5iYWxhbmNlKTtcbiAgICAgICAgfVxuICAgICAgICByZXR1cm4gdGhpcy5yZXF1ZXN0Q29yZSgnY29udHJhY3RzLnJ1bi5sb2NhbC5tc2cnLCB7XG4gICAgICAgICAgICBhZGRyZXNzLFxuICAgICAgICAgICAgYWNjb3VudCxcbiAgICAgICAgICAgIGFiaTogcGFyYW1zLmFiaSxcbiAgICAgICAgICAgIGZ1bmN0aW9uTmFtZTogcGFyYW1zLmZ1bmN0aW9uTmFtZSxcbiAgICAgICAgICAgIG1lc3NhZ2VCYXNlNjQ6IHBhcmFtcy5tZXNzYWdlQm9keUJhc2U2NCxcbiAgICAgICAgICAgIGZ1bGxSdW46IHBhcmFtcy5mdWxsUnVuLFxuICAgICAgICB9KTtcbiAgICB9XG59XG5cblRPTkNvbnRyYWN0c01vZHVsZS5tb2R1bGVOYW1lID0gJ1RPTkNvbnRyYWN0c01vZHVsZSc7XG5cbmNvbnN0IHRyYW5zYWN0aW9uRGV0YWlscyA9IGBcbiAgICBpZFxuICAgIGluX21zZ1xuICAgIHRyX3R5cGVcbiAgICBzdGF0dXNcbiAgICBpbl9tc2dcbiAgICBvdXRfbXNnc1xuICAgIGJsb2NrX2lkXG4gICAgbm93XG4gICAgYWJvcnRlZFxuICAgIGx0XG4gICAgdG90YWxfZmVlc1xuICAgIHN0b3JhZ2Uge1xuICAgICAgICBzdGF0dXNfY2hhbmdlXG4gICAgICAgIHN0b3JhZ2VfZmVlc19jb2xsZWN0ZWRcbiAgICB9XG4gICAgY29tcHV0ZSB7XG4gICAgICAgIGNvbXB1dGVfdHlwZVxuICAgICAgICBza2lwcGVkX3JlYXNvblxuICAgICAgICBzdWNjZXNzXG4gICAgICAgIGV4aXRfY29kZVxuICAgICAgICBnYXNfZmVlc1xuICAgICAgICBnYXNfdXNlZFxuICAgIH1cbiAgICBhY3Rpb24ge1xuICAgICAgICBzdWNjZXNzXG4gICAgICAgIHZhbGlkXG4gICAgICAgIHJlc3VsdF9jb2RlXG4gICAgICAgIG5vX2Z1bmRzXG4gICAgICAgIHRvdGFsX2Z3ZF9mZWVzXG4gICAgICAgIHRvdGFsX2FjdGlvbl9mZWVzXG4gICAgfVxuICAgIG91dF9tZXNzYWdlcyB7XG4gICAgICAgIGlkXG4gICAgICAgIG1zZ190eXBlXG4gICAgICAgIGJvZHlcbiAgICAgICAgdmFsdWVcbiAgICB9XG4gICBgO1xuXG5jb25zdCBCTE9DS19GSUVMRFMgPSBgXG4gICAgaWRcbiAgICBnZW5fdXRpbWVcbiAgICBhZnRlcl9zcGxpdFxuICAgIHdvcmtjaGFpbl9pZFxuICAgIHNoYXJkXG4gICAgaW5fbXNnX2Rlc2NyIHtcbiAgICAgICAgbXNnX2lkXG4gICAgICAgIHRyYW5zYWN0aW9uX2lkXG4gICAgfVxuYDtcblxuY29uc3QgVFJBTlNBQ1RJT05fRklFTERTX09SRElOQVJZID0gYFxuICAgIGlkXG4gICAgYWJvcnRlZFxuICAgIGNvbXB1dGUge1xuICAgICAgICBza2lwcGVkX3JlYXNvblxuICAgICAgICBleGl0X2NvZGVcbiAgICAgICAgc3VjY2Vzc1xuICAgICAgICBnYXNfZmVlc1xuICAgIH1cbiAgICBzdG9yYWdlIHtcbiAgICAgICBzdGF0dXNfY2hhbmdlXG4gICAgICAgc3RvcmFnZV9mZWVzX2NvbGxlY3RlZFxuICAgIH1cbiAgICBhY3Rpb24ge1xuICAgICAgICBzdWNjZXNzXG4gICAgICAgIHZhbGlkXG4gICAgICAgIG5vX2Z1bmRzXG4gICAgICAgIHJlc3VsdF9jb2RlXG4gICAgICAgIHRvdGFsX2Z3ZF9mZWVzXG4gICAgICAgIHRvdGFsX2FjdGlvbl9mZWVzXG4gICAgfVxuICAgIGluX21zZ1xuICAgIG5vd1xuICAgIG91dF9tc2dzXG4gICAgb3V0X21lc3NhZ2VzIHtcbiAgICAgICAgaWRcbiAgICAgICAgYm9keVxuICAgICAgICBtc2dfdHlwZVxuICAgICAgICB2YWx1ZVxuICAgIH1cbiAgICBzdGF0dXNcbiAgICB0b3RhbF9mZWVzXG5gO1xuIl19