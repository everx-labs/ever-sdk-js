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

var _TONCryptoModule = _interopRequireWildcard(require("./TONCryptoModule"));

var _TONQueriesModule = _interopRequireWildcard(require("./TONQueriesModule"));

function _getRequireWildcardCache() { if (typeof WeakMap !== "function") return null; var cache = new WeakMap(); _getRequireWildcardCache = function _getRequireWildcardCache() { return cache; }; return cache; }

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } if (obj === null || _typeof(obj) !== "object" && typeof obj !== "function") { return { "default": obj }; } var cache = _getRequireWildcardCache(); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj["default"] = obj; if (cache) { cache.set(obj, newObj); } return newObj; }

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

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

function asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { Promise.resolve(value).then(_next, _throw); } }

function _asyncToGenerator(fn) { return function () { var self = this, args = arguments; return new Promise(function (resolve, reject) { var gen = fn.apply(self, args); function _next(value) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "next", value); } function _throw(err) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "throw", err); } _next(undefined); }); }; }

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

function getSigningSource(_x, _x2) {
  return _getSigningSource.apply(this, arguments);
}

function _getSigningSource() {
  _getSigningSource = _asyncToGenerator( /*#__PURE__*/_regenerator["default"].mark(function _callee61(box, keys) {
    return _regenerator["default"].wrap(function _callee61$(_context61) {
      while (1) {
        switch (_context61.prev = _context61.next) {
          case 0:
            if (!box) {
              _context61.next = 7;
              break;
            }

            _context61.t0 = box;
            _context61.next = 4;
            return box.getPublicKey();

          case 4:
            _context61.t1 = _context61.sent;
            _context61.t2 = {
              secret: '',
              "public": _context61.t1
            };
            return _context61.abrupt("return", {
              box: _context61.t0,
              keys: _context61.t2
            });

          case 7:
            if (!(keys && keys.secret)) {
              _context61.next = 9;
              break;
            }

            return _context61.abrupt("return", {
              box: null,
              keys: keys
            });

          case 9:
            return _context61.abrupt("return", null);

          case 10:
          case "end":
            return _context61.stop();
        }
      }
    }, _callee61);
  }));
  return _getSigningSource.apply(this, arguments);
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

    _defineProperty(_assertThisInitialized(_this), "crypto", void 0);

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
                this.crypto = this.context.getModule(_TONCryptoModule["default"]);

              case 3:
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

      function load(_x3, _x4) {
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

                  return function (_x7) {
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

      function deploy(_x5, _x6) {
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

                  return function (_x10) {
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

      function run(_x8, _x9) {
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

                  return function (_x13) {
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

      function runLocal(_x11, _x12) {
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

                  return function (_x16) {
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

      function runMessageLocal(_x14, _x15) {
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

      function runGet(_x17) {
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
        var source, unsignedMessage, message;
        return _regenerator["default"].wrap(function _callee12$(_context12) {
          while (1) {
            switch (_context12.prev = _context12.next) {
              case 0:
                this.config.log('createDeployMessage', params);
                _context12.next = 3;
                return getSigningSource(params.signingBox, params.keyPair);

              case 3:
                source = _context12.sent;

                if (!source) {
                  _context12.next = 20;
                  break;
                }

                _context12.next = 7;
                return this.createUnsignedDeployMessage(_objectSpread(_objectSpread({}, params), {}, {
                  keyPair: source.keys
                }));

              case 7:
                unsignedMessage = _context12.sent;
                _context12.t0 = this;
                _context12.t1 = _objectSpread;
                _context12.t2 = _objectSpread;
                _context12.t3 = {};
                _context12.next = 14;
                return this.internalSign(unsignedMessage.signParams, source);

              case 14:
                _context12.t4 = _context12.sent;
                _context12.t5 = (0, _context12.t2)(_context12.t3, _context12.t4);
                _context12.t6 = {};
                _context12.t7 = {
                  unsignedMessage: unsignedMessage
                };
                _context12.t8 = (0, _context12.t1)(_context12.t5, _context12.t6, _context12.t7);
                return _context12.abrupt("return", _context12.t0.createSignedDeployMessage.call(_context12.t0, _context12.t8));

              case 20:
                _context12.next = 22;
                return this.requestCore('contracts.deploy.message', {
                  abi: params["package"].abi,
                  constructorHeader: params.constructorHeader,
                  constructorParams: params.constructorParams,
                  initParams: params.initParams,
                  imageBase64: params["package"].imageBase64,
                  keyPair: params.keyPair,
                  workchainId: params.workchainId
                });

              case 22:
                message = _context12.sent;
                return _context12.abrupt("return", {
                  address: message.address,
                  message: message
                });

              case 24:
              case "end":
                return _context12.stop();
            }
          }
        }, _callee12, this);
      }));

      function createDeployMessage(_x18, _x19) {
        return _createDeployMessage.apply(this, arguments);
      }

      return createDeployMessage;
    }()
  }, {
    key: "createRunMessage",
    value: function () {
      var _createRunMessage = _asyncToGenerator( /*#__PURE__*/_regenerator["default"].mark(function _callee13(params, retryIndex) {
        var source, unsignedMessage, message;
        return _regenerator["default"].wrap(function _callee13$(_context13) {
          while (1) {
            switch (_context13.prev = _context13.next) {
              case 0:
                this.config.log('createRunMessage', params);
                _context13.next = 3;
                return getSigningSource(params.signingBox, params.keyPair);

              case 3:
                source = _context13.sent;

                if (!source) {
                  _context13.next = 20;
                  break;
                }

                _context13.next = 7;
                return this.createUnsignedRunMessage(params);

              case 7:
                unsignedMessage = _context13.sent;
                _context13.t0 = this;
                _context13.t1 = _objectSpread;
                _context13.t2 = _objectSpread;
                _context13.t3 = {};
                _context13.next = 14;
                return this.internalSign(unsignedMessage.signParams, source);

              case 14:
                _context13.t4 = _context13.sent;
                _context13.t5 = (0, _context13.t2)(_context13.t3, _context13.t4);
                _context13.t6 = {};
                _context13.t7 = {
                  unsignedMessage: unsignedMessage
                };
                _context13.t8 = (0, _context13.t1)(_context13.t5, _context13.t6, _context13.t7);
                return _context13.abrupt("return", _context13.t0.createSignedRunMessage.call(_context13.t0, _context13.t8));

              case 20:
                _context13.next = 22;
                return this.requestCore('contracts.run.message', {
                  address: params.address,
                  abi: params.abi,
                  functionName: params.functionName,
                  header: params.header,
                  tryIndex: retryIndex,
                  input: params.input,
                  keyPair: params.keyPair
                });

              case 22:
                message = _context13.sent;
                return _context13.abrupt("return", {
                  address: params.address,
                  abi: params.abi,
                  functionName: params.functionName,
                  message: message
                });

              case 24:
              case "end":
                return _context13.stop();
            }
          }
        }, _callee13, this);
      }));

      function createRunMessage(_x20, _x21) {
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

      function createUnsignedDeployMessage(_x22, _x23) {
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

      function createUnsignedRunMessage(_x24, _x25) {
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

      function createSignedMessage(_x26) {
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

      function createSignedDeployMessage(_x27) {
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

      function createSignedRunMessage(_x28) {
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

      function getCodeFromImage(_x29) {
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

      function getDeployData(_x30) {
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

      function createRunBody(_x31) {
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

      function getFunctionId(_x32) {
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

      function getBocHash(_x33) {
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

      function parseMessage(_x34) {
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

      function decodeRunOutput(_x35) {
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

      function decodeInputMessageBody(_x36) {
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

      function decodeOutputMessageBody(_x37) {
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

      function ensureMessageId(_x38) {
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

      function sendMessage(_x39, _x40) {
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

      function processMessage(_x41, _x42, _x43, _x44, _x45, _x46, _x47) {
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

      function findLastBlock(_x48, _x49, _x50) {
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

      function findMatchingShard(_x51, _x52) {
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

      function findLastShardBlock(_x53) {
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

      function checkShardMatch(_x54, _x55) {
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

      function waitNextBlock(_x56, _x57, _x58) {
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

      function waitForTransaction(_x59) {
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

      function processTransaction(_x60, _x61, _x62, _x63) {
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

      function resolveDetailedError(_x64, _x65, _x66, _x67) {
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

      function isDeployed(_x68, _x69) {
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

      function processDeployMessage(_x70, _x71, _x72) {
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

      function waitForDeployTransaction(_x73, _x74, _x75, _x76) {
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

      function processRunMessage(_x77, _x78) {
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

      function waitForRunTransaction(_x79, _x80, _x81, _x82) {
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

      function processRunMessageLocal(_x83, _x84, _x85) {
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

      function calcRunFees(_x86, _x87) {
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

      function calcDeployFees(_x88, _x89) {
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

      function calcMsgProcessFees(_x90, _x91) {
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

      function convertAddress(_x92) {
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

      function internalDeployNative(_x93) {
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

      function internalRunNative(_x94) {
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

      function retryCall(_x95) {
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

                  return function (_x98) {
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

      function internalDeployJs(_x96, _x97) {
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

                  return function (_x101) {
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

      function internalRunJs(_x99, _x100) {
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

      function getAccount(_x102, _x103, _x104, _x105) {
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

      function internalRunLocalJs(_x106, _x107) {
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

      function internalRunMessageLocalJs(_x108, _x109) {
        return _internalRunMessageLocalJs.apply(this, arguments);
      }

      return internalRunMessageLocalJs;
    }()
  }, {
    key: "internalSign",
    value: function () {
      var _internalSign = _asyncToGenerator( /*#__PURE__*/_regenerator["default"].mark(function _callee60(unsigned, source) {
        var message, box, keys, signKeys;
        return _regenerator["default"].wrap(function _callee60$(_context60) {
          while (1) {
            switch (_context60.prev = _context60.next) {
              case 0:
                message = {
                  base64: unsigned.bytesToSignBase64
                };
                box = source.box;

                if (!box) {
                  _context60.next = 10;
                  break;
                }

                _context60.next = 5;
                return box.sign(message, _TONCryptoModule.TONOutputEncoding.Base64);

              case 5:
                _context60.t0 = _context60.sent;
                _context60.next = 8;
                return box.getPublicKey();

              case 8:
                _context60.t1 = _context60.sent;
                return _context60.abrupt("return", {
                  signBytesBase64: _context60.t0,
                  publicKeyHex: _context60.t1
                });

              case 10:
                keys = source.keys;

                if (!keys) {
                  _context60.next = 20;
                  break;
                }

                _context60.next = 14;
                return this.crypto.naclSignKeypairFromSecretKey(keys.secret);

              case 14:
                signKeys = _context60.sent;
                _context60.next = 17;
                return this.crypto.naclSignDetached(message, signKeys.secret, _TONCryptoModule.TONOutputEncoding.Base64);

              case 17:
                _context60.t2 = _context60.sent;
                _context60.t3 = signKeys["public"];
                return _context60.abrupt("return", {
                  signBytesBase64: _context60.t2,
                  publicKeyHex: _context60.t3
                });

              case 20:
                throw _TONClientError.TONClientError.signingSourceIsNotSpecified();

              case 21:
              case "end":
                return _context60.stop();
            }
          }
        }, _callee60, this);
      }));

      function internalSign(_x110, _x111) {
        return _internalSign.apply(this, arguments);
      }

      return internalSign;
    }()
  }]);

  return TONContractsModule;
}(_TONModule2.TONModule);

exports["default"] = TONContractsModule;
TONContractsModule.moduleName = 'TONContractsModule';
var BLOCK_FIELDS = "\n    id\n    gen_utime\n    after_split\n    workchain_id\n    shard\n    in_msg_descr {\n        msg_id\n        transaction_id\n    }\n";
var TRANSACTION_FIELDS_ORDINARY = "\n    id\n    aborted\n    compute {\n        skipped_reason\n        exit_code\n        success\n        gas_fees\n    }\n    storage {\n       status_change\n       storage_fees_collected\n    }\n    action {\n        success\n        valid\n        no_funds\n        result_code\n        total_fwd_fees\n        total_action_fees\n    }\n    in_msg\n    now\n    out_msgs\n    out_messages {\n        id\n        body\n        msg_type\n        value\n    }\n    status\n    total_fees\n";
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy9tb2R1bGVzL1RPTkNvbnRyYWN0c01vZHVsZS5qcyJdLCJuYW1lcyI6WyJUT05BZGRyZXNzU3RyaW5nVmFyaWFudCIsIkFjY291bnRJZCIsIkhleCIsIkJhc2U2NCIsIlRPTkNsaWVudFRyYW5zYWN0aW9uUGhhc2UiLCJzdG9yYWdlIiwiY29tcHV0ZVNraXBwZWQiLCJjb21wdXRlVm0iLCJhY3Rpb24iLCJ1bmtub3duIiwiVE9OQ2xpZW50Q29tcHV0ZVNraXBwZWRTdGF0dXMiLCJub1N0YXRlIiwiYmFkU3RhdGUiLCJub0dhcyIsIlRPTkNsaWVudFN0b3JhZ2VTdGF0dXMiLCJ1bmNoYW5nZWQiLCJmcm96ZW4iLCJkZWxldGVkIiwiUUluTXNnVHlwZSIsImV4dGVybmFsIiwiaWhyIiwiaW1tZWRpYXRlbHkiLCJ0cmFuc2l0IiwiZGlzY2FyZGVkRmluYWwiLCJkaXNjYXJkZWRUcmFuc2l0IiwiUU91dE1zZ1R5cGUiLCJvdXRNc2dOZXciLCJkZXF1ZXVlSW1tZWRpYXRlbHkiLCJkZXF1ZXVlIiwidHJhbnNpdFJlcXVpcmVkIiwibm9uZSIsIlFNZXNzYWdlVHlwZSIsImludGVybmFsIiwiZXh0SW4iLCJleHRPdXQiLCJRTWVzc2FnZVByb2Nlc3NpbmdTdGF0dXMiLCJxdWV1ZWQiLCJwcm9jZXNzaW5nIiwicHJlbGltaW5hcnkiLCJwcm9wb3NlZCIsImZpbmFsaXplZCIsInJlZnVzZWQiLCJ0cmFuc2l0aW5nIiwiUUJsb2NrUHJvY2Vzc2luZ1N0YXR1cyIsIlFTcGxpdFR5cGUiLCJzcGxpdCIsIm1lcmdlIiwiUUFjY291bnRUeXBlIiwidW5pbml0IiwiYWN0aXZlIiwiUVRyYW5zYWN0aW9uVHlwZSIsIm9yZGluYXJ5IiwidGljayIsInRvY2siLCJzcGxpdFByZXBhcmUiLCJzcGxpdEluc3RhbGwiLCJtZXJnZVByZXBhcmUiLCJtZXJnZUluc3RhbGwiLCJRVHJhbnNhY3Rpb25Qcm9jZXNzaW5nU3RhdHVzIiwiUUFjY291bnRTdGF0dXMiLCJub25FeGlzdCIsIlFBY2NvdW50U3RhdHVzQ2hhbmdlIiwiUUNvbXB1dGVUeXBlIiwic2tpcHBlZCIsInZtIiwiUVNraXBSZWFzb24iLCJRQm91bmNlVHlwZSIsIm5lZ0Z1bmRzIiwibm9GdW5kcyIsIm9rIiwiTUFTVEVSQ0hBSU5fSUQiLCJFWFRSQV9UUkFOU0FDVElPTl9XQUlUSU5HX1RJTUUiLCJCTE9DS19UUkFOU0FDVElPTl9XQUlUSU5HX1RJTUUiLCJyZW1vdmVUeXBlTmFtZSIsIm9iaiIsIl9fdHlwZW5hbWUiLCJPYmplY3QiLCJ2YWx1ZXMiLCJmb3JFYWNoIiwidmFsdWUiLCJyZW1vdmVQcm9wcyIsInBhdGhzIiwicmVzdWx0IiwicGF0aCIsImRvdFBvcyIsImluZGV4T2YiLCJuYW1lIiwic3Vic3RyIiwiY2hpbGQiLCJyZWR1Y2VkQ2hpbGQiLCJzdGFydE1lc3NhZ2VUcmFjZVNwYW4iLCJ0cmFjZXIiLCJtZXNzYWdlSWQiLCJvcGVyYXRpb25OYW1lIiwidGFncyIsInRyYWNlSWQiLCJzcGFuSWQiLCJyb290Q29udGV4dCIsImV4dHJhY3QiLCJGT1JNQVRfVEVYVF9NQVAiLCJzdGFydFNwYW4iLCJjaGlsZE9mIiwidHJhY2VNZXNzYWdlIiwic3BhbiIsImZpbmlzaCIsImdldFNpZ25pbmdTb3VyY2UiLCJib3giLCJrZXlzIiwiZ2V0UHVibGljS2V5Iiwic2VjcmV0IiwiVE9OQ29udHJhY3RzTW9kdWxlIiwiY29uZmlnIiwiY29udGV4dCIsImdldE1vZHVsZSIsIlRPTkNvbmZpZ01vZHVsZSIsInF1ZXJpZXMiLCJUT05RdWVyaWVzTW9kdWxlIiwiY3J5cHRvIiwiVE9OQ3J5cHRvTW9kdWxlIiwicGFyYW1zIiwicGFyZW50U3BhbiIsImFjY291bnRzIiwicXVlcnkiLCJmaWx0ZXIiLCJpZCIsImVxIiwiYWRkcmVzcyIsImxlbmd0aCIsImJhbGFuY2VHcmFtcyIsImJhbGFuY2UiLCJ0cmFjZSIsInNldFRhZyIsImludGVybmFsRGVwbG95SnMiLCJpbnRlcm5hbFJ1bkpzIiwiaW50ZXJuYWxSdW5Mb2NhbEpzIiwiaW50ZXJuYWxSdW5NZXNzYWdlTG9jYWxKcyIsImNvcmVQYXJhbXMiLCJoYXNDb2RlIiwiYm9jQmFzZTY0IiwiY29kZUJhc2U2NCIsImRhdGFCYXNlNjQiLCJUT05DbGllbnRFcnJvciIsImNvbXBsZXRlRXJyb3JEYXRhIiwiYWRkcmVzc1JlcXVpcmVkRm9yUnVuTG9jYWwiLCJnZXRBY2NvdW50IiwidGltZW91dCIsIndhaXRGb3JUaW1lb3V0IiwiYWNjb3VudCIsImNvZGVfaGFzaCIsImFjY291bnRDb2RlTWlzc2luZyIsInBhcmFtc0Zyb21BY2NvdW50IiwiYm9jIiwibGFzdF9wYWlkIiwicmVxdWVzdENvcmUiLCJjb25zIiwiaXRlbSIsImludmFsaWRDb25zIiwiZW1wdHlUT05FcnJvckRhdGEiLCJwdXNoIiwicmV0cnlJbmRleCIsImxvZyIsInNpZ25pbmdCb3giLCJrZXlQYWlyIiwic291cmNlIiwiY3JlYXRlVW5zaWduZWREZXBsb3lNZXNzYWdlIiwidW5zaWduZWRNZXNzYWdlIiwiaW50ZXJuYWxTaWduIiwic2lnblBhcmFtcyIsImNyZWF0ZVNpZ25lZERlcGxveU1lc3NhZ2UiLCJhYmkiLCJjb25zdHJ1Y3RvckhlYWRlciIsImNvbnN0cnVjdG9yUGFyYW1zIiwiaW5pdFBhcmFtcyIsImltYWdlQmFzZTY0Iiwid29ya2NoYWluSWQiLCJtZXNzYWdlIiwiY3JlYXRlVW5zaWduZWRSdW5NZXNzYWdlIiwiY3JlYXRlU2lnbmVkUnVuTWVzc2FnZSIsImZ1bmN0aW9uTmFtZSIsImhlYWRlciIsInRyeUluZGV4IiwiaW5wdXQiLCJwdWJsaWNLZXlIZXgiLCJhZGRyZXNzSGV4IiwiZW5jb2RlZCIsImNyZWF0ZVNpZ25lZE1lc3NhZ2UiLCJ1bnNpZ25lZEJ5dGVzQmFzZTY0Iiwic2lnbkJ5dGVzQmFzZTY0IiwiZXhwaXJlIiwiZ2V0Qm9jSGFzaCIsIm1lc3NhZ2VCb2R5QmFzZTY0IiwiaGFzaCIsIkRhdGUiLCJub3ciLCJtZXNzYWdlX2lkIiwic2VuZE5vZGVSZXF1ZXN0RmFpbGVkIiwiTWF0aCIsInNlcnZlclRpbWVEZWx0YSIsImFicyIsIm91dE9mU3luY1RocmVzaG9sZCIsImRyb3BTZXJ2ZXJUaW1lRGVsdGEiLCJjbG9ja091dE9mU3luYyIsImZpbmRMYXN0U2hhcmRCbG9jayIsImxhc3RCbG9ja0lkIiwiZW5zdXJlTWVzc2FnZUlkIiwiaWRCYXNlNjQiLCJCdWZmZXIiLCJmcm9tIiwidG9TdHJpbmciLCJtZXNzYWdlU3BhbiIsInN0YXJ0Um9vdFNwYW4iLCJhZGRUYWdzIiwibWVzc2FnZVNpemUiLCJjZWlsIiwicG9zdFJlcXVlc3RzIiwiYm9keSIsInNlbmRpbmdUaW1lIiwicm91bmQiLCJyZXN1bHRGaWVsZHMiLCJzZW5kTWVzc2FnZSIsIndhaXRGb3JUcmFuc2FjdGlvbiIsIm1lc3NhZ2VQcm9jZXNzaW5nU3RhdGUiLCJ0cmFuc2FjdGlvbiIsImNoYWluIiwiYWRkaXRpb25hbEZpbHRlciIsImJsb2NrcyIsIndvcmtjaGFpbl9pZCIsIm9yZGVyQnkiLCJkaXJlY3Rpb24iLCJsaW1pdCIsInNoYXJkcyIsImFkZHJlc3NQYXJ0cyIsIndvcmtjaGFpbiIsIk51bWJlciIsInBhcnNlSW50IiwiZmluZExhc3RCbG9jayIsIm1hc3RlcmNoYWluTGFzdEJsb2NrIiwibm9CbG9ja3MiLCJ3b3JrY2hhaW5MYXN0QmxvY2siLCJhZnRlcl9tZXJnZSIsInNoYXJkIiwiaW52YWxpZEJsb2NrY2hhaW4iLCJtYXN0ZXIiLCJzaGFyZF9oYXNoZXMiLCJmaW5kTWF0Y2hpbmdTaGFyZCIsInNoYXJkQmxvY2siLCJyb290X2hhc2giLCJkZXNjciIsImJsb2NrIiwiY3VycmVudCIsIndhaXRGb3IiLCJwcmV2X3JlZiIsIk9SIiwicHJldl9hbHRfcmVmIiwiQkxPQ0tfRklFTERTIiwiYWZ0ZXJfc3BsaXQiLCJjaGVja1NoYXJkTWF0Y2giLCJuZSIsInRvdGFsU3RhcnQiLCJ0aW1lUmVwb3J0Iiwic3RvcFRpbWUiLCJtZXNzYWdlUHJvY2Vzc2luZ1RpbWVvdXQiLCJpbmZpbml0ZVdhaXQiLCJhZGRUaW1lb3V0IiwibWF4Iiwic3RhcnQiLCJ3YWl0TmV4dEJsb2NrIiwiZW5kIiwiZ2VuX3V0aW1lIiwicmVzb2x2ZWRFcnJvciIsImNvZGUiLCJUT05FcnJvckNvZGUiLCJXQUlUX0ZPUl9USU1FT1VUIiwiYmxvY2tfaWQiLCJtZXNzYWdlX3Byb2Nlc3Npbmdfc3RhdGUiLCJzZW5kaW5nX3RpbWUiLCJuZXR3b3JrU2lsZW50IiwiaW5Nc2ciLCJpbl9tc2dfZGVzY3IiLCJmaW5kIiwieCIsIm1zZ19pZCIsInRyYW5zYWN0aW9uSWQiLCJ0cmFuc2FjdGlvbl9pZCIsInRyU3RhcnQiLCJ0cmFuc2FjdGlvbnMiLCJUUkFOU0FDVElPTl9GSUVMRFNfT1JESU5BUlkiLCJNQVhfVElNRU9VVCIsImJsb2NrX3RpbWUiLCJtZXNzYWdlRXhwaXJlZCIsInRyYW5zYWN0aW9uV2FpdFRpbWVvdXQiLCJzcGxpY2UiLCJqb2luIiwiTUVTU0FHRV9FWFBJUkVEIiwiVFJBTlNBQ1RJT05fV0FJVF9USU1FT1VUIiwicmVzb2x2ZURldGFpbGVkRXJyb3IiLCJwcm9jZXNzVHJhbnNhY3Rpb24iLCJvcmlnaW5hbF9lcnJvciIsImZ1bmN0aW9uX25hbWUiLCJhY2NvdW50TWlzc2luZyIsImVycm9yIiwibWVzc2FnZUJhc2U2NCIsInRpbWUiLCJtYWluRXJyb3IiLCJhY2NfdHlwZSIsImlzRGVwbG95ZWQiLCJhbHJlYWR5RGVwbG95ZWQiLCJ3YWl0Rm9yRGVwbG95VHJhbnNhY3Rpb24iLCJkZXBsb3lNZXNzYWdlIiwicnVuTWVzc2FnZSIsIndhaXRGb3JSdW5UcmFuc2FjdGlvbiIsIndhaXRQYXJhbXMiLCJlbXVsYXRlQmFsYW5jZSIsImJpZ0JhbGFuY2UiLCJjcmVhdGVEZXBsb3lNZXNzYWdlIiwiY2FsY01zZ1Byb2Nlc3NGZWVzIiwibmV3QWNjb3VudCIsImZsb29yIiwiY2FsbCIsInJldHJpZXNDb3VudCIsIm1lc3NhZ2VSZXRyaWVzQ291bnQiLCJpIiwiaXNPcmlnaW5hbE9yUmVzb2x2ZWQiLCJleGl0Q29kZSIsImlzT3JpZ2luYWxDb250cmFjdEVycm9yIiwiaXNSZXNvbHZlZENvbnRyYWN0RXJyb3JBZnRlckV4cGlyZSIsInVzZVJldHJ5IiwiVE9OQ29udHJhY3RFeGl0Q29kZSIsIlJFUExBWV9QUk9URUNUSU9OIiwiaW50ZXJuYWxFcnJvciIsInJldHJ5Q2FsbCIsImNyZWF0ZVJ1bk1lc3NhZ2UiLCJ0cmFuc2FjdGlvbkx0IiwibGFzdF90cmFuc19sdCIsImdlIiwiZnVsbFJ1biIsInVuc2lnbmVkIiwiYmFzZTY0IiwiYnl0ZXNUb1NpZ25CYXNlNjQiLCJzaWduIiwiVE9OT3V0cHV0RW5jb2RpbmciLCJuYWNsU2lnbktleXBhaXJGcm9tU2VjcmV0S2V5Iiwic2lnbktleXMiLCJuYWNsU2lnbkRldGFjaGVkIiwic2lnbmluZ1NvdXJjZUlzTm90U3BlY2lmaWVkIiwiVE9OTW9kdWxlIiwibW9kdWxlTmFtZSJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7OztBQUtBOztBQXlEQTs7QUFDQTs7QUFDQTs7QUFDQTs7QUFDQTs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUVPLElBQU1BLHVCQUF1QixHQUFHO0FBQ25DQyxFQUFBQSxTQUFTLEVBQUUsV0FEd0I7QUFFbkNDLEVBQUFBLEdBQUcsRUFBRSxLQUY4QjtBQUduQ0MsRUFBQUEsTUFBTSxFQUFFO0FBSDJCLENBQWhDOztBQU1BLElBQU1DLHlCQUF5QixHQUFHO0FBQ3JDQyxFQUFBQSxPQUFPLEVBQUUsU0FENEI7QUFFckNDLEVBQUFBLGNBQWMsRUFBRSxnQkFGcUI7QUFHckNDLEVBQUFBLFNBQVMsRUFBRSxXQUgwQjtBQUlyQ0MsRUFBQUEsTUFBTSxFQUFFLFFBSjZCO0FBS3JDQyxFQUFBQSxPQUFPLEVBQUU7QUFMNEIsQ0FBbEM7O0FBUUEsSUFBTUMsNkJBQTZCLEdBQUc7QUFDekNDLEVBQUFBLE9BQU8sRUFBRSxDQURnQztBQUV6Q0MsRUFBQUEsUUFBUSxFQUFFLENBRitCO0FBR3pDQyxFQUFBQSxLQUFLLEVBQUU7QUFIa0MsQ0FBdEM7O0FBTUEsSUFBTUMsc0JB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QVosQ0FBeUMxTyxJQUFJLENBQUNFLE1BQTlDLEM7OztBQUFqQnlPLGdCQUFBQSxROzt1QkFFcUIsS0FBS2pPLE1BQUwsQ0FBWWtPLGdCQUFaLENBQ25CeEssT0FEbUIsRUFFbkJ1SyxRQUFRLENBQUN6TyxNQUZVLEVBR25CdU8sbUNBQWtCalYsTUFIQyxDOzs7O2dDQUtUbVYsUUFBUSxVOztBQUx0QjNKLGtCQUFBQSxlO0FBS0FMLGtCQUFBQSxZOzs7O3NCQUdGekMsK0JBQWUyTSwyQkFBZixFOzs7Ozs7Ozs7Ozs7Ozs7Ozs7O0VBcHBDa0NDLHFCOzs7QUF3cENoRDNPLGtCQUFrQixDQUFDNE8sVUFBbkIsR0FBZ0Msb0JBQWhDO0FBRUEsSUFBTTVGLFlBQVksK0lBQWxCO0FBWUEsSUFBTWdDLDJCQUEyQiwrZUFBakMiLCJzb3VyY2VzQ29udGVudCI6WyIvKlxuICogQ29weXJpZ2h0IDIwMTgtMjAyMCBUT04gREVWIFNPTFVUSU9OUyBMVEQuXG4gKi9cbi8vIEBmbG93XG5cbmltcG9ydCB7XG4gICAgVHJhY2VyLCBGT1JNQVRfVEVYVF9NQVAsIFNwYW4sIFNwYW5Db250ZXh0LFxufSBmcm9tICdvcGVudHJhY2luZyc7XG5pbXBvcnQgdHlwZSB7XG4gICAgUUFjY291bnQsXG4gICAgUUJsb2NrLFxuICAgIFFNZXNzYWdlLFxuICAgIFFUcmFuc2FjdGlvbixcbiAgICBUT05Db250cmFjdEFCSSxcbiAgICBUT05Db250cmFjdEFjY291bnRXYWl0UGFyYW1zLFxuICAgIFRPTkNvbnRyYWN0Q29udmVydEFkZHJlc3NQYXJhbXMsXG4gICAgVE9OQ29udHJhY3RDb252ZXJ0QWRkcmVzc1Jlc3VsdCxcbiAgICBUT05Db250cmFjdENyZWF0ZVJ1bkJvZHlQYXJhbXMsXG4gICAgVE9OQ29udHJhY3RDcmVhdGVSdW5Cb2R5UmVzdWx0LFxuICAgIFRPTkNvbnRyYWN0Q3JlYXRlU2lnbmVkRGVwbG95TWVzc2FnZVBhcmFtcyxcbiAgICBUT05Db250cmFjdENyZWF0ZVNpZ25lZE1lc3NhZ2VQYXJhbXMsXG4gICAgVE9OQ29udHJhY3RDcmVhdGVTaWduZWRSdW5NZXNzYWdlUGFyYW1zLFxuICAgIFRPTkNvbnRyYWN0RGVjb2RlTWVzc2FnZUJvZHlQYXJhbXMsXG4gICAgVE9OQ29udHJhY3REZWNvZGVNZXNzYWdlQm9keVJlc3VsdCxcbiAgICBUT05Db250cmFjdERlY29kZVJ1bk91dHB1dFBhcmFtcyxcbiAgICBUT05Db250cmFjdERlcGxveU1lc3NhZ2UsXG4gICAgVE9OQ29udHJhY3REZXBsb3lQYXJhbXMsXG4gICAgVE9OQ29udHJhY3REZXBsb3lSZXN1bHQsXG4gICAgVE9OQ29udHJhY3RDYWxjRGVwbG95RmVlUGFyYW1zLFxuICAgIFRPTkNvbnRyYWN0Qm9jLFxuICAgIFRPTkNvbnRyYWN0R2V0Qm9jSGFzaFJlc3VsdCxcbiAgICBUT05Db250cmFjdEdldENvZGVGcm9tSW1hZ2VQYXJhbXMsXG4gICAgVE9OQ29udHJhY3RHZXRDb2RlRnJvbUltYWdlUmVzdWx0LFxuICAgIFRPTkNvbnRyYWN0R2V0RGVwbG95RGF0YVBhcmFtcyxcbiAgICBUT05Db250cmFjdEdldERlcGxveURhdGFSZXN1bHQsXG4gICAgVE9OQ29udHJhY3RHZXRGdW5jdGlvbklkUGFyYW1zLFxuICAgIFRPTkNvbnRyYWN0R2V0RnVuY3Rpb25JZFJlc3VsdCxcbiAgICBUT05Db250cmFjdExvYWRQYXJhbXMsXG4gICAgVE9OQ29udHJhY3RMb2FkUmVzdWx0LFxuICAgIFRPTkNvbnRyYWN0Q2FsY1J1bkZlZVBhcmFtcyxcbiAgICBUT05Db250cmFjdENhbGNGZWVSZXN1bHQsXG4gICAgVE9OQ29udHJhY3RDYWxjTXNnUHJvY2Vzc2luZ0ZlZXNQYXJhbXMsXG4gICAgVE9OQ29udHJhY3RNZXNzYWdlLFxuICAgIFRPTkNvbnRyYWN0UnVuTG9jYWxQYXJhbXMsXG4gICAgVE9OQ29udHJhY3RSdW5NZXNzYWdlLFxuICAgIFRPTkNvbnRyYWN0UnVuUGFyYW1zLFxuICAgIFRPTkNvbnRyYWN0UnVuUmVzdWx0LFxuICAgIFRPTkNvbnRyYWN0cyxcbiAgICBUT05Db250cmFjdFVuc2lnbmVkRGVwbG95TWVzc2FnZSxcbiAgICBUT05Db250cmFjdFVuc2lnbmVkTWVzc2FnZSxcbiAgICBUT05Db250cmFjdFVuc2lnbmVkUnVuTWVzc2FnZSxcbiAgICBUT05Db250cmFjdFJ1bkdldFBhcmFtcyxcbiAgICBUT05Db250cmFjdFJ1bkdldFJlc3VsdCxcbiAgICBUT05Db250cmFjdFJ1bk1lc3NhZ2VMb2NhbFBhcmFtcyxcbiAgICBUT05Db250cmFjdFJ1bkxvY2FsUmVzdWx0LFxuICAgIFRPTldhaXRGb3JUcmFuc2FjdGlvblBhcmFtcyxcbiAgICBRU2hhcmRIYXNoLFxuICAgIFRPTk1lc3NhZ2VQcm9jZXNzaW5nU3RhdGUsXG4gICAgVE9OU2lnbmluZ0JveCxcbiAgICBUT05LZXlQYWlyRGF0YSxcbn0gZnJvbSAnLi4vLi4vdHlwZXMnO1xuXG5pbXBvcnQgeyBlbXB0eVRPTkVycm9yRGF0YSwgVE9OQ2xpZW50RXJyb3IsIFRPTkNvbnRyYWN0RXhpdENvZGUsIFRPTkVycm9yQ29kZSB9IGZyb20gJy4uL1RPTkNsaWVudEVycm9yJztcbmltcG9ydCB7IFRPTk1vZHVsZSB9IGZyb20gJy4uL1RPTk1vZHVsZSc7XG5pbXBvcnQgVE9OQ29uZmlnTW9kdWxlIGZyb20gJy4vVE9OQ29uZmlnTW9kdWxlJztcbmltcG9ydCBUT05DcnlwdG9Nb2R1bGUsIHsgVE9OT3V0cHV0RW5jb2RpbmcgfSBmcm9tICcuL1RPTkNyeXB0b01vZHVsZSc7XG5pbXBvcnQgVE9OUXVlcmllc01vZHVsZSwgeyBNQVhfVElNRU9VVCB9IGZyb20gJy4vVE9OUXVlcmllc01vZHVsZSc7XG5cbmV4cG9ydCBjb25zdCBUT05BZGRyZXNzU3RyaW5nVmFyaWFudCA9IHtcbiAgICBBY2NvdW50SWQ6ICdBY2NvdW50SWQnLFxuICAgIEhleDogJ0hleCcsXG4gICAgQmFzZTY0OiAnQmFzZTY0Jyxcbn07XG5cbmV4cG9ydCBjb25zdCBUT05DbGllbnRUcmFuc2FjdGlvblBoYXNlID0ge1xuICAgIHN0b3JhZ2U6ICdzdG9yYWdlJyxcbiAgICBjb21wdXRlU2tpcHBlZDogJ2NvbXB1dGVTa2lwcGVkJyxcbiAgICBjb21wdXRlVm06ICdjb21wdXRlVm0nLFxuICAgIGFjdGlvbjogJ2FjdGlvbicsXG4gICAgdW5rbm93bjogJ3Vua25vd24nLFxufTtcblxuZXhwb3J0IGNvbnN0IFRPTkNsaWVudENvbXB1dGVTa2lwcGVkU3RhdHVzID0ge1xuICAgIG5vU3RhdGU6IDAsXG4gICAgYmFkU3RhdGU6IDEsXG4gICAgbm9HYXM6IDIsXG59O1xuXG5leHBvcnQgY29uc3QgVE9OQ2xpZW50U3RvcmFnZVN0YXR1cyA9IHtcbiAgICB1bmNoYW5nZWQ6IDAsXG4gICAgZnJvemVuOiAxLFxuICAgIGRlbGV0ZWQ6IDIsXG59O1xuXG5leHBvcnQgY29uc3QgUUluTXNnVHlwZSA9IHtcbiAgICBleHRlcm5hbDogMCxcbiAgICBpaHI6IDEsXG4gICAgaW1tZWRpYXRlbHk6IDIsXG4gICAgZmluYWw6IDMsXG4gICAgdHJhbnNpdDogNCxcbiAgICBkaXNjYXJkZWRGaW5hbDogNSxcbiAgICBkaXNjYXJkZWRUcmFuc2l0OiA2LFxufTtcblxuZXhwb3J0IGNvbnN0IFFPdXRNc2dUeXBlID0ge1xuICAgIGV4dGVybmFsOiAwLFxuICAgIGltbWVkaWF0ZWx5OiAxLFxuICAgIG91dE1zZ05ldzogMixcbiAgICB0cmFuc2l0OiAzLFxuICAgIGRlcXVldWVJbW1lZGlhdGVseTogNCxcbiAgICBkZXF1ZXVlOiA1LFxuICAgIHRyYW5zaXRSZXF1aXJlZDogNixcbiAgICBub25lOiAtMSxcbn07XG5cbmV4cG9ydCBjb25zdCBRTWVzc2FnZVR5cGUgPSB7XG4gICAgaW50ZXJuYWw6IDAsXG4gICAgZXh0SW46IDEsXG4gICAgZXh0T3V0OiAyLFxufTtcblxuZXhwb3J0IGNvbnN0IFFNZXNzYWdlUHJvY2Vzc2luZ1N0YXR1cyA9IHtcbiAgICB1bmtub3duOiAwLFxuICAgIHF1ZXVlZDogMSxcbiAgICBwcm9jZXNzaW5nOiAyLFxuICAgIHByZWxpbWluYXJ5OiAzLFxuICAgIHByb3Bvc2VkOiA0LFxuICAgIGZpbmFsaXplZDogNSxcbiAgICByZWZ1c2VkOiA2LFxuICAgIHRyYW5zaXRpbmc6IDcsXG59O1xuXG5leHBvcnQgY29uc3QgUUJsb2NrUHJvY2Vzc2luZ1N0YXR1cyA9IHtcbiAgICB1bmtub3duOiAwLFxuICAgIHByb3Bvc2VkOiAxLFxuICAgIGZpbmFsaXplZDogMixcbiAgICByZWZ1c2VkOiAzLFxufTtcblxuZXhwb3J0IGNvbnN0IFFTcGxpdFR5cGUgPSB7XG4gICAgbm9uZTogMCxcbiAgICBzcGxpdDogMixcbiAgICBtZXJnZTogMyxcbn07XG5cbmV4cG9ydCBjb25zdCBRQWNjb3VudFR5cGUgPSB7XG4gICAgdW5pbml0OiAwLFxuICAgIGFjdGl2ZTogMSxcbiAgICBmcm96ZW46IDIsXG59O1xuXG5leHBvcnQgY29uc3QgUVRyYW5zYWN0aW9uVHlwZSA9IHtcbiAgICBvcmRpbmFyeTogMCxcbiAgICBzdG9yYWdlOiAxLFxuICAgIHRpY2s6IDIsXG4gICAgdG9jazogMyxcbiAgICBzcGxpdFByZXBhcmU6IDQsXG4gICAgc3BsaXRJbnN0YWxsOiA1LFxuICAgIG1lcmdlUHJlcGFyZTogNixcbiAgICBtZXJnZUluc3RhbGw6IDcsXG59O1xuXG5leHBvcnQgY29uc3QgUVRyYW5zYWN0aW9uUHJvY2Vzc2luZ1N0YXR1cyA9IHtcbiAgICB1bmtub3duOiAwLFxuICAgIHByZWxpbWluYXJ5OiAxLFxuICAgIHByb3Bvc2VkOiAyLFxuICAgIGZpbmFsaXplZDogMyxcbiAgICByZWZ1c2VkOiA0LFxufTtcblxuZXhwb3J0IGNvbnN0IFFBY2NvdW50U3RhdHVzID0ge1xuICAgIHVuaW5pdDogMCxcbiAgICBhY3RpdmU6IDEsXG4gICAgZnJvemVuOiAyLFxuICAgIG5vbkV4aXN0OiAzLFxufTtcblxuZXhwb3J0IGNvbnN0IFFBY2NvdW50U3RhdHVzQ2hhbmdlID0ge1xuICAgIHVuY2hhbmdlZDogMCxcbiAgICBmcm96ZW46IDEsXG4gICAgZGVsZXRlZDogMixcbn07XG5cbmV4cG9ydCBjb25zdCBRQ29tcHV0ZVR5cGUgPSB7XG4gICAgc2tpcHBlZDogMCxcbiAgICB2bTogMSxcbn07XG5cbmV4cG9ydCBjb25zdCBRU2tpcFJlYXNvbiA9IHtcbiAgICBub1N0YXRlOiAwLFxuICAgIGJhZFN0YXRlOiAxLFxuICAgIG5vR2FzOiAyLFxufTtcblxuZXhwb3J0IGNvbnN0IFFCb3VuY2VUeXBlID0ge1xuICAgIG5lZ0Z1bmRzOiAwLFxuICAgIG5vRnVuZHM6IDEsXG4gICAgb2s6IDIsXG59O1xuXG5jb25zdCBNQVNURVJDSEFJTl9JRCA9IC0xO1xuXG5jb25zdCBFWFRSQV9UUkFOU0FDVElPTl9XQUlUSU5HX1RJTUUgPSAxMDAwMDtcbmNvbnN0IEJMT0NLX1RSQU5TQUNUSU9OX1dBSVRJTkdfVElNRSA9IDUwMDA7XG5cbmZ1bmN0aW9uIHJlbW92ZVR5cGVOYW1lKG9iajogYW55KSB7XG4gICAgaWYgKG9iai5fX3R5cGVuYW1lKSB7XG4gICAgICAgIGRlbGV0ZSBvYmouX190eXBlbmFtZTtcbiAgICB9XG4gICAgT2JqZWN0LnZhbHVlcyhvYmopXG4gICAgICAgIC5mb3JFYWNoKCh2YWx1ZSkgPT4ge1xuICAgICAgICAgICAgaWYgKCEhdmFsdWUgJiYgdHlwZW9mIHZhbHVlID09PSAnb2JqZWN0Jykge1xuICAgICAgICAgICAgICAgIHJlbW92ZVR5cGVOYW1lKHZhbHVlKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfSk7XG59XG5cbmV4cG9ydCBmdW5jdGlvbiByZW1vdmVQcm9wcyhvYmo6IHt9LCBwYXRoczogc3RyaW5nW10pOiB7fSB7XG4gICAgbGV0IHJlc3VsdCA9IG9iajtcbiAgICBwYXRocy5mb3JFYWNoKChwYXRoKSA9PiB7XG4gICAgICAgIGNvbnN0IGRvdFBvcyA9IHBhdGguaW5kZXhPZignLicpO1xuICAgICAgICBpZiAoZG90UG9zIDwgMCkge1xuICAgICAgICAgICAgaWYgKHBhdGggaW4gcmVzdWx0KSB7XG4gICAgICAgICAgICAgICAgcmVzdWx0ID0geyAuLi5yZXN1bHQgfTtcbiAgICAgICAgICAgICAgICBkZWxldGUgcmVzdWx0W3BhdGhdO1xuICAgICAgICAgICAgfVxuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgY29uc3QgbmFtZSA9IHBhdGguc3Vic3RyKDAsIGRvdFBvcyk7XG4gICAgICAgICAgICBjb25zdCBjaGlsZCA9IHJlc3VsdFtuYW1lXTtcbiAgICAgICAgICAgIGlmIChjaGlsZCkge1xuICAgICAgICAgICAgICAgIGNvbnN0IHJlZHVjZWRDaGlsZCA9IHJlbW92ZVByb3BzKGNoaWxkLCBbcGF0aC5zdWJzdHIoZG90UG9zICsgMSldKTtcbiAgICAgICAgICAgICAgICBpZiAocmVkdWNlZENoaWxkICE9PSBjaGlsZCkge1xuICAgICAgICAgICAgICAgICAgICByZXN1bHQgPSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAuLi5yZXN1bHQsXG4gICAgICAgICAgICAgICAgICAgICAgICBbbmFtZV06IHJlZHVjZWRDaGlsZCxcbiAgICAgICAgICAgICAgICAgICAgfTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICB9KTtcbiAgICByZXR1cm4gcmVzdWx0O1xufVxuXG5mdW5jdGlvbiBzdGFydE1lc3NhZ2VUcmFjZVNwYW4oXG4gICAgdHJhY2VyOiBUcmFjZXIsXG4gICAgbWVzc2FnZUlkOiBzdHJpbmcsXG4gICAgb3BlcmF0aW9uTmFtZTogc3RyaW5nLFxuICAgIHRhZ3M6IHsgW3N0cmluZ106IGFueSB9LFxuKTogP1NwYW4ge1xuICAgIGlmICghbWVzc2FnZUlkKSB7XG4gICAgICAgIHJldHVybiBudWxsO1xuICAgIH1cbiAgICBjb25zdCB0cmFjZUlkID0gbWVzc2FnZUlkLnN1YnN0cigwLCAxNik7XG4gICAgY29uc3Qgc3BhbklkID0gbWVzc2FnZUlkLnN1YnN0cigxNiwgMTYpO1xuICAgIGxldCByb290Q29udGV4dDogP1NwYW5Db250ZXh0ID0gbnVsbDtcbiAgICB0cnkge1xuICAgICAgICByb290Q29udGV4dCA9IHRyYWNlci5leHRyYWN0KEZPUk1BVF9URVhUX01BUCwge1xuICAgICAgICAgICAgJ3ViZXItdHJhY2UtaWQnOiBgJHt0cmFjZUlkfToke3NwYW5JZH06MDoxYCxcbiAgICAgICAgfSk7XG4gICAgfSBjYXRjaCB7XG4gICAgICAgIC8vIHRyYWNlciBjYW4ndCBjcmVhdGUgamFlZ2VyIGNvbXBhdGlibGUgc3BhbixcbiAgICAgICAgLy8gc28gd2UgYXJlIGZhbGxiYWNrIHRvIHJldHVybiBudWxsXG4gICAgfVxuICAgIGlmICghcm9vdENvbnRleHQpIHtcbiAgICAgICAgcmV0dXJuIG51bGw7XG4gICAgfVxuICAgIHJldHVybiB0cmFjZXIuc3RhcnRTcGFuKG9wZXJhdGlvbk5hbWUsIHtcbiAgICAgICAgY2hpbGRPZjogcm9vdENvbnRleHQsXG4gICAgICAgIHRhZ3MsXG4gICAgfSk7XG59XG5cbmZ1bmN0aW9uIHRyYWNlTWVzc2FnZShcbiAgICB0cmFjZXI6IFRyYWNlcixcbiAgICBtZXNzYWdlSWQ6IHN0cmluZyxcbiAgICBvcGVyYXRpb25OYW1lOiBzdHJpbmcsXG4gICAgdGFnczogeyBbc3RyaW5nXTogYW55IH0sXG4pIHtcbiAgICBjb25zdCBzcGFuID0gc3RhcnRNZXNzYWdlVHJhY2VTcGFuKHRyYWNlciwgbWVzc2FnZUlkLCBvcGVyYXRpb25OYW1lLCB0YWdzKTtcbiAgICBpZiAoc3Bhbikge1xuICAgICAgICBzcGFuLmZpbmlzaCgpO1xuICAgIH1cbn1cblxudHlwZSBTaWduUmVzdWx0ID0ge1xuICAgIHNpZ25CeXRlc0Jhc2U2NDogc3RyaW5nLFxuICAgIHB1YmxpY0tleUhleDogc3RyaW5nLFxufTtcblxudHlwZSBTaWduaW5nU291cmNlID0ge1xuICAgIGJveDogP1RPTlNpZ25pbmdCb3gsXG4gICAga2V5czogVE9OS2V5UGFpckRhdGEsXG59XG5cbmFzeW5jIGZ1bmN0aW9uIGdldFNpZ25pbmdTb3VyY2UoXG4gICAgYm94PzogVE9OU2lnbmluZ0JveCxcbiAgICBrZXlzPzogVE9OS2V5UGFpckRhdGEsXG4pOiBQcm9taXNlPD9TaWduaW5nU291cmNlPiB7XG4gICAgaWYgKGJveCkge1xuICAgICAgICByZXR1cm4ge1xuICAgICAgICAgICAgYm94LFxuICAgICAgICAgICAga2V5czoge1xuICAgICAgICAgICAgICAgIHNlY3JldDogJycsXG4gICAgICAgICAgICAgICAgcHVibGljOiBhd2FpdCBib3guZ2V0UHVibGljS2V5KCksXG4gICAgICAgICAgICB9LFxuICAgICAgICB9O1xuICAgIH1cbiAgICBpZiAoa2V5cyAmJiBrZXlzLnNlY3JldCkge1xuICAgICAgICByZXR1cm4ge1xuICAgICAgICAgICAgYm94OiBudWxsLFxuICAgICAgICAgICAga2V5cyxcbiAgICAgICAgfTtcbiAgICB9XG4gICAgcmV0dXJuIG51bGw7XG59XG5cblxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgVE9OQ29udHJhY3RzTW9kdWxlIGV4dGVuZHMgVE9OTW9kdWxlIGltcGxlbWVudHMgVE9OQ29udHJhY3RzIHtcbiAgICBjb25maWc6IFRPTkNvbmZpZ01vZHVsZTtcbiAgICBjcnlwdG86IFRPTkNyeXB0b01vZHVsZTtcbiAgICBxdWVyaWVzOiBUT05RdWVyaWVzTW9kdWxlO1xuXG4gICAgYXN5bmMgc2V0dXAoKTogUHJvbWlzZTwqPiB7XG4gICAgICAgIHRoaXMuY29uZmlnID0gdGhpcy5jb250ZXh0LmdldE1vZHVsZShUT05Db25maWdNb2R1bGUpO1xuICAgICAgICB0aGlzLnF1ZXJpZXMgPSB0aGlzLmNvbnRleHQuZ2V0TW9kdWxlKFRPTlF1ZXJpZXNNb2R1bGUpO1xuICAgICAgICB0aGlzLmNyeXB0byA9IHRoaXMuY29udGV4dC5nZXRNb2R1bGUoVE9OQ3J5cHRvTW9kdWxlKTtcbiAgICB9XG5cbiAgICBhc3luYyBsb2FkKFxuICAgICAgICBwYXJhbXM6IFRPTkNvbnRyYWN0TG9hZFBhcmFtcyxcbiAgICAgICAgcGFyZW50U3Bhbj86IChTcGFuIHwgU3BhbkNvbnRleHQpLFxuICAgICk6IFByb21pc2U8VE9OQ29udHJhY3RMb2FkUmVzdWx0PiB7XG4gICAgICAgIGNvbnN0IGFjY291bnRzOiBRQWNjb3VudFtdID0gYXdhaXQgdGhpcy5xdWVyaWVzLmFjY291bnRzLnF1ZXJ5KHtcbiAgICAgICAgICAgIGZpbHRlcjoge1xuICAgICAgICAgICAgICAgIGlkOiB7IGVxOiBwYXJhbXMuYWRkcmVzcyB9LFxuICAgICAgICAgICAgfSxcbiAgICAgICAgICAgIHJlc3VsdDogJ2JhbGFuY2UnLFxuICAgICAgICAgICAgcGFyZW50U3BhbixcbiAgICAgICAgfSk7XG4gICAgICAgIGlmIChhY2NvdW50cyAmJiBhY2NvdW50cy5sZW5ndGggPiAwKSB7XG4gICAgICAgICAgICByZXR1cm4ge1xuICAgICAgICAgICAgICAgIGlkOiBwYXJhbXMuYWRkcmVzcyxcbiAgICAgICAgICAgICAgICBiYWxhbmNlR3JhbXM6IGFjY291bnRzWzBdLmJhbGFuY2UsXG4gICAgICAgICAgICB9O1xuICAgICAgICB9XG4gICAgICAgIHJldHVybiB7XG4gICAgICAgICAgICBpZDogbnVsbCxcbiAgICAgICAgICAgIGJhbGFuY2VHcmFtczogbnVsbCxcbiAgICAgICAgfTtcbiAgICB9XG5cblxuICAgIC8vIEZhY2FkZSBmdW5jdGlvbnNcblxuICAgIGFzeW5jIGRlcGxveShcbiAgICAgICAgcGFyYW1zOiBUT05Db250cmFjdERlcGxveVBhcmFtcyxcbiAgICAgICAgcGFyZW50U3Bhbj86IChTcGFuIHwgU3BhbkNvbnRleHQpLFxuICAgICk6IFByb21pc2U8VE9OQ29udHJhY3REZXBsb3lSZXN1bHQ+IHtcbiAgICAgICAgcmV0dXJuIHRoaXMuY29udGV4dC50cmFjZSgnY29udHJhY3RzLmRlcGxveScsIGFzeW5jIChzcGFuOiBTcGFuKSA9PiB7XG4gICAgICAgICAgICBzcGFuLnNldFRhZygncGFyYW1zJywgcmVtb3ZlUHJvcHMocGFyYW1zLCBbJ2tleVBhaXIuc2VjcmV0J10pKTtcbiAgICAgICAgICAgIHJldHVybiB0aGlzLmludGVybmFsRGVwbG95SnMocGFyYW1zLCBzcGFuKTtcbiAgICAgICAgfSwgcGFyZW50U3Bhbik7XG4gICAgfVxuXG5cbiAgICBhc3luYyBydW4oXG4gICAgICAgIHBhcmFtczogVE9OQ29udHJhY3RSdW5QYXJhbXMsXG4gICAgICAgIHBhcmVudFNwYW4/OiAoU3BhbiB8IFNwYW5Db250ZXh0KSxcbiAgICApOiBQcm9taXNlPFRPTkNvbnRyYWN0UnVuUmVzdWx0PiB7XG4gICAgICAgIHJldHVybiB0aGlzLmNvbnRleHQudHJhY2UoJ2NvbnRyYWN0cy5ydW4nLCBhc3luYyAoc3BhbjogU3BhbikgPT4ge1xuICAgICAgICAgICAgc3Bhbi5zZXRUYWcoJ3BhcmFtcycsIHJlbW92ZVByb3BzKHBhcmFtcywgWydrZXlQYWlyLnNlY3JldCddKSk7XG4gICAgICAgICAgICByZXR1cm4gdGhpcy5pbnRlcm5hbFJ1bkpzKHBhcmFtcywgc3Bhbik7XG4gICAgICAgIH0sIHBhcmVudFNwYW4pO1xuICAgIH1cblxuICAgIGFzeW5jIHJ1bkxvY2FsKFxuICAgICAgICBwYXJhbXM6IFRPTkNvbnRyYWN0UnVuTG9jYWxQYXJhbXMsXG4gICAgICAgIHBhcmVudFNwYW4/OiAoU3BhbiB8IFNwYW5Db250ZXh0KSxcbiAgICApOiBQcm9taXNlPFRPTkNvbnRyYWN0UnVuTG9jYWxSZXN1bHQ+IHtcbiAgICAgICAgcmV0dXJuIHRoaXMuY29udGV4dC50cmFjZSgnY29udHJhY3RzLnJ1bkxvY2FsJywgYXN5bmMgKHNwYW46IFNwYW4pID0+IHtcbiAgICAgICAgICAgIHNwYW4uc2V0VGFnKCdwYXJhbXMnLCByZW1vdmVQcm9wcyhwYXJhbXMsIFsna2V5UGFpci5zZWNyZXQnXSkpO1xuICAgICAgICAgICAgcmV0dXJuIHRoaXMuaW50ZXJuYWxSdW5Mb2NhbEpzKHBhcmFtcywgc3Bhbik7XG4gICAgICAgIH0sIHBhcmVudFNwYW4pO1xuICAgIH1cblxuICAgIGFzeW5jIHJ1bk1lc3NhZ2VMb2NhbChcbiAgICAgICAgcGFyYW1zOiBUT05Db250cmFjdFJ1bk1lc3NhZ2VMb2NhbFBhcmFtcyxcbiAgICAgICAgcGFyZW50U3Bhbj86IChTcGFuIHwgU3BhbkNvbnRleHQpLFxuICAgICk6IFByb21pc2U8VE9OQ29udHJhY3RSdW5Mb2NhbFJlc3VsdD4ge1xuICAgICAgICByZXR1cm4gdGhpcy5jb250ZXh0LnRyYWNlKCdydW5NZXNzYWdlTG9jYWwnLCBhc3luYyAoc3BhbjogU3BhbikgPT4ge1xuICAgICAgICAgICAgc3Bhbi5zZXRUYWcoJ3BhcmFtcycsIHJlbW92ZVByb3BzKHBhcmFtcywgWydrZXlQYWlyLnNlY3JldCddKSk7XG4gICAgICAgICAgICByZXR1cm4gdGhpcy5pbnRlcm5hbFJ1bk1lc3NhZ2VMb2NhbEpzKHBhcmFtcywgc3Bhbik7XG4gICAgICAgIH0sIHBhcmVudFNwYW4pO1xuICAgIH1cblxuICAgIGFzeW5jIHJ1bkdldChcbiAgICAgICAgcGFyYW1zOiBUT05Db250cmFjdFJ1bkdldFBhcmFtcyxcbiAgICApOiBQcm9taXNlPFRPTkNvbnRyYWN0UnVuR2V0UmVzdWx0PiB7XG4gICAgICAgIGxldCBjb3JlUGFyYW1zOiBUT05Db250cmFjdFJ1bkdldFBhcmFtcyA9IHBhcmFtcztcbiAgICAgICAgY29uc3QgaGFzQ29kZSA9IHBhcmFtcy5ib2NCYXNlNjQgfHwgKHBhcmFtcy5jb2RlQmFzZTY0ICYmIHBhcmFtcy5kYXRhQmFzZTY0KTtcbiAgICAgICAgaWYgKCFoYXNDb2RlKSB7XG4gICAgICAgICAgICBjb25zdCBhZGRyZXNzID0gcGFyYW1zLmFkZHJlc3M7XG4gICAgICAgICAgICBpZiAoIWFkZHJlc3MpIHtcbiAgICAgICAgICAgICAgICB0aHJvdyBUT05DbGllbnRFcnJvci5hZGRyZXNzUmVxdWlyZWRGb3JSdW5Mb2NhbChhd2FpdCB0aGlzLmNvbXBsZXRlRXJyb3JEYXRhKCkpO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgY29uc3QgYWNjb3VudDogYW55ID0gYXdhaXQgdGhpcy5nZXRBY2NvdW50KGFkZHJlc3MsIGZhbHNlLCB7XG4gICAgICAgICAgICAgICAgdGltZW91dDogdGhpcy5jb25maWcud2FpdEZvclRpbWVvdXQoKSxcbiAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgaWYgKCFhY2NvdW50LmNvZGVfaGFzaCkge1xuICAgICAgICAgICAgICAgIHRocm93IFRPTkNsaWVudEVycm9yLmFjY291bnRDb2RlTWlzc2luZyhcbiAgICAgICAgICAgICAgICAgICAgYWRkcmVzcyxcbiAgICAgICAgICAgICAgICAgICAgYWNjb3VudC5iYWxhbmNlLFxuICAgICAgICAgICAgICAgICAgICBhd2FpdCB0aGlzLmNvbXBsZXRlRXJyb3JEYXRhKCksXG4gICAgICAgICAgICAgICAgKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGNvbnN0IHBhcmFtc0Zyb21BY2NvdW50OiAkU2hhcGU8VE9OQ29udHJhY3RSdW5HZXRQYXJhbXM+ID0ge307XG4gICAgICAgICAgICBpZiAoYWNjb3VudC5ib2MpIHtcbiAgICAgICAgICAgICAgICBwYXJhbXNGcm9tQWNjb3VudC5ib2NCYXNlNjQgPSBhY2NvdW50LmJvYztcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGlmIChhY2NvdW50Lmxhc3RfcGFpZCkge1xuICAgICAgICAgICAgICAgIHBhcmFtc0Zyb21BY2NvdW50Lmxhc3RfcGFpZCA9IGFjY291bnQubGFzdF9wYWlkO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgaWYgKGFjY291bnQuYmFsYW5jZSkge1xuICAgICAgICAgICAgICAgIHBhcmFtc0Zyb21BY2NvdW50LmJhbGFuY2UgPSBhY2NvdW50LmJhbGFuY2U7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBjb3JlUGFyYW1zID0ge1xuICAgICAgICAgICAgICAgIC4uLnBhcmFtc0Zyb21BY2NvdW50LFxuICAgICAgICAgICAgICAgIC4uLnBhcmFtcyxcbiAgICAgICAgICAgIH07XG4gICAgICAgIH1cbiAgICAgICAgcmV0dXJuIHRoaXMucmVxdWVzdENvcmUoJ3R2bS5nZXQnLCBjb3JlUGFyYW1zKTtcbiAgICB9XG5cbiAgICBhcnJheUZyb21DT05TKGNvbnM6IGFueVtdKTogYW55W10ge1xuICAgICAgICBjb25zdCByZXN1bHQgPSBbXTtcbiAgICAgICAgbGV0IGl0ZW0gPSBjb25zO1xuICAgICAgICB3aGlsZSAoaXRlbSkge1xuICAgICAgICAgICAgaWYgKCFpdGVtLmxlbmd0aCA9PT0gMikge1xuICAgICAgICAgICAgICAgIHRocm93IFRPTkNsaWVudEVycm9yLmludmFsaWRDb25zKGVtcHR5VE9ORXJyb3JEYXRhKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIHJlc3VsdC5wdXNoKGl0ZW1bMF0pO1xuICAgICAgICAgICAgaXRlbSA9IGl0ZW1bMV07XG4gICAgICAgIH1cbiAgICAgICAgcmV0dXJuIHJlc3VsdDtcbiAgICB9XG5cblxuICAgIC8vIE1lc3NhZ2UgY3JlYXRpb25cblxuICAgIGFzeW5jIGNyZWF0ZURlcGxveU1lc3NhZ2UoXG4gICAgICAgIHBhcmFtczogVE9OQ29udHJhY3REZXBsb3lQYXJhbXMsXG4gICAgICAgIHJldHJ5SW5kZXg/OiBudW1iZXIsXG4gICAgKTogUHJvbWlzZTxUT05Db250cmFjdERlcGxveU1lc3NhZ2U+IHtcbiAgICAgICAgdGhpcy5jb25maWcubG9nKCdjcmVhdGVEZXBsb3lNZXNzYWdlJywgcGFyYW1zKTtcbiAgICAgICAgY29uc3Qgc291cmNlID0gYXdhaXQgZ2V0U2lnbmluZ1NvdXJjZShwYXJhbXMuc2lnbmluZ0JveCwgcGFyYW1zLmtleVBhaXIpO1xuICAgICAgICBpZiAoc291cmNlKSB7XG4gICAgICAgICAgICBjb25zdCB1bnNpZ25lZE1lc3NhZ2UgPSBhd2FpdCB0aGlzLmNyZWF0ZVVuc2lnbmVkRGVwbG95TWVzc2FnZSh7XG4gICAgICAgICAgICAgICAgLi4ucGFyYW1zLFxuICAgICAgICAgICAgICAgIGtleVBhaXI6IHNvdXJjZS5rZXlzLFxuICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICByZXR1cm4gdGhpcy5jcmVhdGVTaWduZWREZXBsb3lNZXNzYWdlKHtcbiAgICAgICAgICAgICAgICAuLi4oYXdhaXQgdGhpcy5pbnRlcm5hbFNpZ24odW5zaWduZWRNZXNzYWdlLnNpZ25QYXJhbXMsIHNvdXJjZSkpLFxuICAgICAgICAgICAgICAgIHVuc2lnbmVkTWVzc2FnZSxcbiAgICAgICAgICAgIH0pO1xuICAgICAgICB9XG4gICAgICAgIGNvbnN0IG1lc3NhZ2U6IFRPTkNvbnRyYWN0TWVzc2FnZSA9IGF3YWl0IHRoaXMucmVxdWVzdENvcmUoJ2NvbnRyYWN0cy5kZXBsb3kubWVzc2FnZScsIHtcbiAgICAgICAgICAgIGFiaTogcGFyYW1zLnBhY2thZ2UuYWJpLFxuICAgICAgICAgICAgY29uc3RydWN0b3JIZWFkZXI6IHBhcmFtcy5jb25zdHJ1Y3RvckhlYWRlcixcbiAgICAgICAgICAgIGNvbnN0cnVjdG9yUGFyYW1zOiBwYXJhbXMuY29uc3RydWN0b3JQYXJhbXMsXG4gICAgICAgICAgICBpbml0UGFyYW1zOiBwYXJhbXMuaW5pdFBhcmFtcyxcbiAgICAgICAgICAgIGltYWdlQmFzZTY0OiBwYXJhbXMucGFja2FnZS5pbWFnZUJhc2U2NCxcbiAgICAgICAgICAgIGtleVBhaXI6IHBhcmFtcy5rZXlQYWlyLFxuICAgICAgICAgICAgd29ya2NoYWluSWQ6IHBhcmFtcy53b3JrY2hhaW5JZCxcbiAgICAgICAgfSk7XG4gICAgICAgIHJldHVybiB7XG4gICAgICAgICAgICBhZGRyZXNzOiBtZXNzYWdlLmFkZHJlc3MsXG4gICAgICAgICAgICBtZXNzYWdlLFxuICAgICAgICB9O1xuICAgIH1cblxuXG4gICAgYXN5bmMgY3JlYXRlUnVuTWVzc2FnZShcbiAgICAgICAgcGFyYW1zOiBUT05Db250cmFjdFJ1blBhcmFtcyxcbiAgICAgICAgcmV0cnlJbmRleD86IG51bWJlcixcbiAgICApOiBQcm9taXNlPFRPTkNvbnRyYWN0UnVuTWVzc2FnZT4ge1xuICAgICAgICB0aGlzLmNvbmZpZy5sb2coJ2NyZWF0ZVJ1bk1lc3NhZ2UnLCBwYXJhbXMpO1xuICAgICAgICBjb25zdCBzb3VyY2UgPSBhd2FpdCBnZXRTaWduaW5nU291cmNlKHBhcmFtcy5zaWduaW5nQm94LCBwYXJhbXMua2V5UGFpcik7XG4gICAgICAgIGlmIChzb3VyY2UpIHtcbiAgICAgICAgICAgIGNvbnN0IHVuc2lnbmVkTWVzc2FnZSA9IGF3YWl0IHRoaXMuY3JlYXRlVW5zaWduZWRSdW5NZXNzYWdlKHBhcmFtcyk7XG4gICAgICAgICAgICByZXR1cm4gdGhpcy5jcmVhdGVTaWduZWRSdW5NZXNzYWdlKHtcbiAgICAgICAgICAgICAgICAuLi4oYXdhaXQgdGhpcy5pbnRlcm5hbFNpZ24odW5zaWduZWRNZXNzYWdlLnNpZ25QYXJhbXMsIHNvdXJjZSkpLFxuICAgICAgICAgICAgICAgIHVuc2lnbmVkTWVzc2FnZSxcbiAgICAgICAgICAgIH0pO1xuICAgICAgICB9XG4gICAgICAgIGNvbnN0IG1lc3NhZ2UgPSBhd2FpdCB0aGlzLnJlcXVlc3RDb3JlKCdjb250cmFjdHMucnVuLm1lc3NhZ2UnLCB7XG4gICAgICAgICAgICBhZGRyZXNzOiBwYXJhbXMuYWRkcmVzcyxcbiAgICAgICAgICAgIGFiaTogcGFyYW1zLmFiaSxcbiAgICAgICAgICAgIGZ1bmN0aW9uTmFtZTogcGFyYW1zLmZ1bmN0aW9uTmFtZSxcbiAgICAgICAgICAgIGhlYWRlcjogcGFyYW1zLmhlYWRlcixcbiAgICAgICAgICAgIHRyeUluZGV4OiByZXRyeUluZGV4LFxuICAgICAgICAgICAgaW5wdXQ6IHBhcmFtcy5pbnB1dCxcbiAgICAgICAgICAgIGtleVBhaXI6IHBhcmFtcy5rZXlQYWlyLFxuICAgICAgICB9KTtcbiAgICAgICAgcmV0dXJuIHtcbiAgICAgICAgICAgIGFkZHJlc3M6IHBhcmFtcy5hZGRyZXNzLFxuICAgICAgICAgICAgYWJpOiBwYXJhbXMuYWJpLFxuICAgICAgICAgICAgZnVuY3Rpb25OYW1lOiBwYXJhbXMuZnVuY3Rpb25OYW1lLFxuICAgICAgICAgICAgbWVzc2FnZSxcbiAgICAgICAgfTtcbiAgICB9XG5cbiAgICBhc3luYyBjcmVhdGVVbnNpZ25lZERlcGxveU1lc3NhZ2UoXG4gICAgICAgIHBhcmFtczogVE9OQ29udHJhY3REZXBsb3lQYXJhbXMsXG4gICAgICAgIHJldHJ5SW5kZXg/OiBudW1iZXIsXG4gICAgKTogUHJvbWlzZTxUT05Db250cmFjdFVuc2lnbmVkRGVwbG95TWVzc2FnZT4ge1xuICAgICAgICBjb25zdCByZXN1bHQ6IHtcbiAgICAgICAgICAgIGVuY29kZWQ6IFRPTkNvbnRyYWN0VW5zaWduZWRNZXNzYWdlLFxuICAgICAgICAgICAgYWRkcmVzc0hleDogc3RyaW5nLFxuICAgICAgICB9ID0gYXdhaXQgdGhpcy5yZXF1ZXN0Q29yZSgnY29udHJhY3RzLmRlcGxveS5lbmNvZGVfdW5zaWduZWRfbWVzc2FnZScsIHtcbiAgICAgICAgICAgIGFiaTogcGFyYW1zLnBhY2thZ2UuYWJpLFxuICAgICAgICAgICAgY29uc3RydWN0b3JIZWFkZXI6IHBhcmFtcy5jb25zdHJ1Y3RvckhlYWRlcixcbiAgICAgICAgICAgIHRyeUluZGV4OiByZXRyeUluZGV4LFxuICAgICAgICAgICAgY29uc3RydWN0b3JQYXJhbXM6IHBhcmFtcy5jb25zdHJ1Y3RvclBhcmFtcyxcbiAgICAgICAgICAgIGluaXRQYXJhbXM6IHBhcmFtcy5pbml0UGFyYW1zLFxuICAgICAgICAgICAgaW1hZ2VCYXNlNjQ6IHBhcmFtcy5wYWNrYWdlLmltYWdlQmFzZTY0LFxuICAgICAgICAgICAgcHVibGljS2V5SGV4OiBwYXJhbXMua2V5UGFpci5wdWJsaWMsXG4gICAgICAgICAgICB3b3JrY2hhaW5JZDogcGFyYW1zLndvcmtjaGFpbklkLFxuICAgICAgICB9KTtcbiAgICAgICAgcmV0dXJuIHtcbiAgICAgICAgICAgIGFkZHJlc3M6IHJlc3VsdC5hZGRyZXNzSGV4LFxuICAgICAgICAgICAgc2lnblBhcmFtczoge1xuICAgICAgICAgICAgICAgIC4uLnJlc3VsdC5lbmNvZGVkLFxuICAgICAgICAgICAgICAgIGFiaTogcGFyYW1zLnBhY2thZ2UuYWJpLFxuICAgICAgICAgICAgfSxcbiAgICAgICAgfTtcbiAgICB9XG5cblxuICAgIGFzeW5jIGNyZWF0ZVVuc2lnbmVkUnVuTWVzc2FnZShcbiAgICAgICAgcGFyYW1zOiBUT05Db250cmFjdFJ1blBhcmFtcyxcbiAgICAgICAgcmV0cnlJbmRleD86IG51bWJlcixcbiAgICApOiBQcm9taXNlPFRPTkNvbnRyYWN0VW5zaWduZWRSdW5NZXNzYWdlPiB7XG4gICAgICAgIGNvbnN0IHNpZ25QYXJhbXMgPSBhd2FpdCB0aGlzLnJlcXVlc3RDb3JlKCdjb250cmFjdHMucnVuLmVuY29kZV91bnNpZ25lZF9tZXNzYWdlJywge1xuICAgICAgICAgICAgYWRkcmVzczogcGFyYW1zLmFkZHJlc3MsXG4gICAgICAgICAgICBhYmk6IHBhcmFtcy5hYmksXG4gICAgICAgICAgICBmdW5jdGlvbk5hbWU6IHBhcmFtcy5mdW5jdGlvbk5hbWUsXG4gICAgICAgICAgICBoZWFkZXI6IHBhcmFtcy5oZWFkZXIsXG4gICAgICAgICAgICB0cnlJbmRleDogcmV0cnlJbmRleCxcbiAgICAgICAgICAgIGlucHV0OiBwYXJhbXMuaW5wdXQsXG4gICAgICAgIH0pO1xuICAgICAgICByZXR1cm4ge1xuICAgICAgICAgICAgYWRkcmVzczogcGFyYW1zLmFkZHJlc3MsXG4gICAgICAgICAgICBmdW5jdGlvbk5hbWU6IHBhcmFtcy5mdW5jdGlvbk5hbWUsXG4gICAgICAgICAgICBzaWduUGFyYW1zOiB7XG4gICAgICAgICAgICAgICAgLi4uc2lnblBhcmFtcyxcbiAgICAgICAgICAgICAgICBhYmk6IHBhcmFtcy5hYmksXG4gICAgICAgICAgICB9LFxuICAgICAgICB9O1xuICAgIH1cblxuXG4gICAgYXN5bmMgY3JlYXRlU2lnbmVkTWVzc2FnZShcbiAgICAgICAgcGFyYW1zOiBUT05Db250cmFjdENyZWF0ZVNpZ25lZE1lc3NhZ2VQYXJhbXMsXG4gICAgKTogUHJvbWlzZTxUT05Db250cmFjdE1lc3NhZ2U+IHtcbiAgICAgICAgcmV0dXJuIHRoaXMucmVxdWVzdENvcmUoJ2NvbnRyYWN0cy5lbmNvZGVfbWVzc2FnZV93aXRoX3NpZ24nLCBwYXJhbXMpO1xuICAgIH1cblxuXG4gICAgYXN5bmMgY3JlYXRlU2lnbmVkRGVwbG95TWVzc2FnZShcbiAgICAgICAgcGFyYW1zOiBUT05Db250cmFjdENyZWF0ZVNpZ25lZERlcGxveU1lc3NhZ2VQYXJhbXMsXG4gICAgKTogUHJvbWlzZTxUT05Db250cmFjdERlcGxveU1lc3NhZ2U+IHtcbiAgICAgICAgY29uc3QgbWVzc2FnZSA9IGF3YWl0IHRoaXMuY3JlYXRlU2lnbmVkTWVzc2FnZSh7XG4gICAgICAgICAgICBhYmk6IHBhcmFtcy51bnNpZ25lZE1lc3NhZ2Uuc2lnblBhcmFtcy5hYmksXG4gICAgICAgICAgICB1bnNpZ25lZEJ5dGVzQmFzZTY0OiBwYXJhbXMudW5zaWduZWRNZXNzYWdlLnNpZ25QYXJhbXMudW5zaWduZWRCeXRlc0Jhc2U2NCxcbiAgICAgICAgICAgIHNpZ25CeXRlc0Jhc2U2NDogcGFyYW1zLnNpZ25CeXRlc0Jhc2U2NCxcbiAgICAgICAgICAgIHB1YmxpY0tleUhleDogcGFyYW1zLnB1YmxpY0tleUhleCxcbiAgICAgICAgfSk7XG4gICAgICAgIG1lc3NhZ2UuZXhwaXJlID0gcGFyYW1zLnVuc2lnbmVkTWVzc2FnZS5zaWduUGFyYW1zLmV4cGlyZTtcbiAgICAgICAgcmV0dXJuIHtcbiAgICAgICAgICAgIGFkZHJlc3M6IHBhcmFtcy51bnNpZ25lZE1lc3NhZ2UuYWRkcmVzcyxcbiAgICAgICAgICAgIG1lc3NhZ2UsXG4gICAgICAgIH07XG4gICAgfVxuXG5cbiAgICBhc3luYyBjcmVhdGVTaWduZWRSdW5NZXNzYWdlKFxuICAgICAgICBwYXJhbXM6IFRPTkNvbnRyYWN0Q3JlYXRlU2lnbmVkUnVuTWVzc2FnZVBhcmFtcyxcbiAgICApOiBQcm9taXNlPFRPTkNvbnRyYWN0UnVuTWVzc2FnZT4ge1xuICAgICAgICBjb25zdCBtZXNzYWdlID0gYXdhaXQgdGhpcy5jcmVhdGVTaWduZWRNZXNzYWdlKHtcbiAgICAgICAgICAgIGFiaTogcGFyYW1zLnVuc2lnbmVkTWVzc2FnZS5zaWduUGFyYW1zLmFiaSxcbiAgICAgICAgICAgIHVuc2lnbmVkQnl0ZXNCYXNlNjQ6IHBhcmFtcy51bnNpZ25lZE1lc3NhZ2Uuc2lnblBhcmFtcy51bnNpZ25lZEJ5dGVzQmFzZTY0LFxuICAgICAgICAgICAgc2lnbkJ5dGVzQmFzZTY0OiBwYXJhbXMuc2lnbkJ5dGVzQmFzZTY0LFxuICAgICAgICAgICAgcHVibGljS2V5SGV4OiBwYXJhbXMucHVibGljS2V5SGV4LFxuICAgICAgICB9KTtcbiAgICAgICAgbWVzc2FnZS5leHBpcmUgPSBwYXJhbXMudW5zaWduZWRNZXNzYWdlLnNpZ25QYXJhbXMuZXhwaXJlO1xuICAgICAgICByZXR1cm4ge1xuICAgICAgICAgICAgYWRkcmVzczogcGFyYW1zLnVuc2lnbmVkTWVzc2FnZS5hZGRyZXNzLFxuICAgICAgICAgICAgYWJpOiBwYXJhbXMudW5zaWduZWRNZXNzYWdlLnNpZ25QYXJhbXMuYWJpLFxuICAgICAgICAgICAgZnVuY3Rpb25OYW1lOiBwYXJhbXMudW5zaWduZWRNZXNzYWdlLmZ1bmN0aW9uTmFtZSxcbiAgICAgICAgICAgIG1lc3NhZ2UsXG4gICAgICAgIH07XG4gICAgfVxuXG4gICAgYXN5bmMgZ2V0Q29kZUZyb21JbWFnZShcbiAgICAgICAgcGFyYW1zOiBUT05Db250cmFjdEdldENvZGVGcm9tSW1hZ2VQYXJhbXMsXG4gICAgKTogUHJvbWlzZTxUT05Db250cmFjdEdldENvZGVGcm9tSW1hZ2VSZXN1bHQ+IHtcbiAgICAgICAgcmV0dXJuIHRoaXMucmVxdWVzdENvcmUoJ2NvbnRyYWN0cy5pbWFnZS5jb2RlJywgcGFyYW1zKTtcbiAgICB9XG5cbiAgICBhc3luYyBnZXREZXBsb3lEYXRhKFxuICAgICAgICBwYXJhbXM6IFRPTkNvbnRyYWN0R2V0RGVwbG95RGF0YVBhcmFtcyxcbiAgICApOiBQcm9taXNlPFRPTkNvbnRyYWN0R2V0RGVwbG95RGF0YVJlc3VsdD4ge1xuICAgICAgICByZXR1cm4gdGhpcy5yZXF1ZXN0Q29yZSgnY29udHJhY3RzLmRlcGxveS5kYXRhJywgcGFyYW1zKTtcbiAgICB9XG5cbiAgICBhc3luYyBjcmVhdGVSdW5Cb2R5KFxuICAgICAgICBwYXJhbXM6IFRPTkNvbnRyYWN0Q3JlYXRlUnVuQm9keVBhcmFtcyxcbiAgICApOiBQcm9taXNlPFRPTkNvbnRyYWN0Q3JlYXRlUnVuQm9keVJlc3VsdD4ge1xuICAgICAgICByZXR1cm4gdGhpcy5yZXF1ZXN0Q29yZSgnY29udHJhY3RzLnJ1bi5ib2R5JywgcGFyYW1zKTtcbiAgICB9XG5cbiAgICBhc3luYyBnZXRGdW5jdGlvbklkKFxuICAgICAgICBwYXJhbXM6IFRPTkNvbnRyYWN0R2V0RnVuY3Rpb25JZFBhcmFtcyxcbiAgICApOiBQcm9taXNlPFRPTkNvbnRyYWN0R2V0RnVuY3Rpb25JZFJlc3VsdD4ge1xuICAgICAgICByZXR1cm4gdGhpcy5yZXF1ZXN0Q29yZSgnY29udHJhY3RzLmZ1bmN0aW9uLmlkJywgcGFyYW1zKTtcbiAgICB9XG5cbiAgICBhc3luYyBnZXRCb2NIYXNoKFxuICAgICAgICBwYXJhbXM6IFRPTkNvbnRyYWN0Qm9jLFxuICAgICk6IFByb21pc2U8VE9OQ29udHJhY3RHZXRCb2NIYXNoUmVzdWx0PiB7XG4gICAgICAgIHJldHVybiB0aGlzLnJlcXVlc3RDb3JlKCdjb250cmFjdHMuYm9jLmhhc2gnLCBwYXJhbXMpO1xuICAgIH1cblxuICAgIGFzeW5jIHBhcnNlTWVzc2FnZShcbiAgICAgICAgcGFyYW1zOiBUT05Db250cmFjdEJvYyxcbiAgICApOiBQcm9taXNlPFFNZXNzYWdlPiB7XG4gICAgICAgIHJldHVybiB0aGlzLnJlcXVlc3RDb3JlKCdjb250cmFjdHMucGFyc2UubWVzc2FnZScsIHBhcmFtcyk7XG4gICAgfVxuXG4gICAgLy8gTWVzc2FnZSBwYXJzaW5nXG5cbiAgICBhc3luYyBkZWNvZGVSdW5PdXRwdXQoXG4gICAgICAgIHBhcmFtczogVE9OQ29udHJhY3REZWNvZGVSdW5PdXRwdXRQYXJhbXMsXG4gICAgKTogUHJvbWlzZTxUT05Db250cmFjdFJ1blJlc3VsdD4ge1xuICAgICAgICByZXR1cm4gdGhpcy5yZXF1ZXN0Q29yZSgnY29udHJhY3RzLnJ1bi5vdXRwdXQnLCBwYXJhbXMpO1xuICAgIH1cblxuXG4gICAgYXN5bmMgZGVjb2RlSW5wdXRNZXNzYWdlQm9keShcbiAgICAgICAgcGFyYW1zOiBUT05Db250cmFjdERlY29kZU1lc3NhZ2VCb2R5UGFyYW1zLFxuICAgICk6IFByb21pc2U8VE9OQ29udHJhY3REZWNvZGVNZXNzYWdlQm9keVJlc3VsdD4ge1xuICAgICAgICByZXR1cm4gdGhpcy5yZXF1ZXN0Q29yZSgnY29udHJhY3RzLnJ1bi51bmtub3duLmlucHV0JywgcGFyYW1zKTtcbiAgICB9XG5cblxuICAgIGFzeW5jIGRlY29kZU91dHB1dE1lc3NhZ2VCb2R5KFxuICAgICAgICBwYXJhbXM6IFRPTkNvbnRyYWN0RGVjb2RlTWVzc2FnZUJvZHlQYXJhbXMsXG4gICAgKTogUHJvbWlzZTxUT05Db250cmFjdERlY29kZU1lc3NhZ2VCb2R5UmVzdWx0PiB7XG4gICAgICAgIHJldHVybiB0aGlzLnJlcXVlc3RDb3JlKCdjb250cmFjdHMucnVuLnVua25vd24ub3V0cHV0JywgcGFyYW1zKTtcbiAgICB9XG5cbiAgICAvLyBNZXNzYWdlIHByb2Nlc3NpbmdcblxuICAgIGFzeW5jIGVuc3VyZU1lc3NhZ2VJZChtZXNzYWdlOiBUT05Db250cmFjdE1lc3NhZ2UpOiBQcm9taXNlPHN0cmluZz4ge1xuICAgICAgICByZXR1cm4gbWVzc2FnZS5tZXNzYWdlSWQgfHwgYXdhaXQgKGFzeW5jICgpID0+IHtcbiAgICAgICAgICAgIGNvbnN0IGlkID0gKGF3YWl0IHRoaXMuZ2V0Qm9jSGFzaCh7XG4gICAgICAgICAgICAgICAgYm9jQmFzZTY0OiBtZXNzYWdlLm1lc3NhZ2VCb2R5QmFzZTY0LFxuICAgICAgICAgICAgfSkpLmhhc2g7XG4gICAgICAgICAgICBtZXNzYWdlLm1lc3NhZ2VJZCA9IGlkO1xuICAgICAgICAgICAgcmV0dXJuIGlkO1xuICAgICAgICB9KSgpO1xuICAgIH1cblxuICAgIGFzeW5jIHNlbmRNZXNzYWdlKFxuICAgICAgICBwYXJhbXM6IFRPTkNvbnRyYWN0TWVzc2FnZSxcbiAgICAgICAgcGFyZW50U3Bhbj86IChTcGFuIHwgU3BhbkNvbnRleHQpLFxuICAgICk6IFByb21pc2U8VE9OTWVzc2FnZVByb2Nlc3NpbmdTdGF0ZT4ge1xuICAgICAgICBjb25zdCBleHBpcmUgPSBwYXJhbXMuZXhwaXJlO1xuICAgICAgICBpZiAoZXhwaXJlICYmIChEYXRlLm5vdygpID4gZXhwaXJlICogMTAwMCkpIHtcbiAgICAgICAgICAgIHRocm93IFRPTkNsaWVudEVycm9yLnNlbmROb2RlUmVxdWVzdEZhaWxlZChcbiAgICAgICAgICAgICAgICAnTWVzc2FnZSBhbHJlYWR5IGV4cGlyZWQnLFxuICAgICAgICAgICAgICAgIGF3YWl0IHRoaXMuY29tcGxldGVFcnJvckRhdGEoe1xuICAgICAgICAgICAgICAgICAgICBhZGRyZXNzOiBwYXJhbXMuYWRkcmVzcyxcbiAgICAgICAgICAgICAgICAgICAgbWVzc2FnZV9pZDogcGFyYW1zLm1lc3NhZ2VJZCxcbiAgICAgICAgICAgICAgICB9KSxcbiAgICAgICAgICAgICk7XG4gICAgICAgIH1cbiAgICAgICAgY29uc3Qgc2VydmVyVGltZURlbHRhID0gTWF0aC5hYnMoYXdhaXQgdGhpcy5xdWVyaWVzLnNlcnZlclRpbWVEZWx0YShwYXJlbnRTcGFuKSk7XG4gICAgICAgIGlmIChzZXJ2ZXJUaW1lRGVsdGEgPiB0aGlzLmNvbmZpZy5vdXRPZlN5bmNUaHJlc2hvbGQoKSkge1xuICAgICAgICAgICAgdGhpcy5xdWVyaWVzLmRyb3BTZXJ2ZXJUaW1lRGVsdGEoKTtcbiAgICAgICAgICAgIHRocm93IFRPTkNsaWVudEVycm9yLmNsb2NrT3V0T2ZTeW5jKGF3YWl0IHRoaXMuY29tcGxldGVFcnJvckRhdGEoKSk7XG4gICAgICAgIH1cbiAgICAgICAgY29uc3QgbGFzdEJsb2NrSWQgPSBhd2FpdCB0aGlzLmZpbmRMYXN0U2hhcmRCbG9jayhwYXJhbXMuYWRkcmVzcyk7XG4gICAgICAgIGNvbnN0IGlkID0gYXdhaXQgdGhpcy5lbnN1cmVNZXNzYWdlSWQocGFyYW1zKTtcbiAgICAgICAgY29uc3QgaWRCYXNlNjQgPSBCdWZmZXIuZnJvbShpZCwgJ2hleCcpLnRvU3RyaW5nKCdiYXNlNjQnKTtcbiAgICAgICAgY29uc3QgbWVzc2FnZVNwYW4gPSB0aGlzLmNvbnRleHQuc3RhcnRSb290U3BhbihcbiAgICAgICAgICAgIGlkLnN1YnN0cigwLCAxNiksXG4gICAgICAgICAgICBpZC5zdWJzdHIoMTYsIDE2KSxcbiAgICAgICAgICAgICdtZXNzYWdlUHJvY2Vzc2luZycsXG4gICAgICAgICk7XG4gICAgICAgIG1lc3NhZ2VTcGFuLmFkZFRhZ3Moe1xuICAgICAgICAgICAgbWVzc2FnZUlkOiBpZCxcbiAgICAgICAgICAgIG1lc3NhZ2VTaXplOiBNYXRoLmNlaWwocGFyYW1zLm1lc3NhZ2VCb2R5QmFzZTY0Lmxlbmd0aCAqIDMgLyA0KSxcbiAgICAgICAgICAgIGFkZHJlc3M6IHBhcmFtcy5hZGRyZXNzLFxuICAgICAgICAgICAgZXhwaXJlOiBwYXJhbXMuZXhwaXJlLFxuICAgICAgICB9KTtcbiAgICAgICAgYXdhaXQgdGhpcy5xdWVyaWVzLnBvc3RSZXF1ZXN0cyhbXG4gICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgaWQ6IGlkQmFzZTY0LFxuICAgICAgICAgICAgICAgIGJvZHk6IHBhcmFtcy5tZXNzYWdlQm9keUJhc2U2NCxcbiAgICAgICAgICAgIH0sXG4gICAgICAgIF0sIHBhcmVudFNwYW4pO1xuICAgICAgICBtZXNzYWdlU3Bhbi5maW5pc2goKTtcbiAgICAgICAgdGhpcy5jb25maWcubG9nKCdzZW5kTWVzc2FnZS4gUmVxdWVzdCBwb3N0ZWQnLCBpZCk7XG4gICAgICAgIHJldHVybiB7XG4gICAgICAgICAgICBsYXN0QmxvY2tJZCxcbiAgICAgICAgICAgIHNlbmRpbmdUaW1lOiBNYXRoLnJvdW5kKERhdGUubm93KCkgLyAxMDAwKSxcbiAgICAgICAgfTtcbiAgICB9XG5cbiAgICBhc3luYyBwcm9jZXNzTWVzc2FnZShcbiAgICAgICAgbWVzc2FnZTogVE9OQ29udHJhY3RNZXNzYWdlLFxuICAgICAgICByZXN1bHRGaWVsZHM6IHN0cmluZyxcbiAgICAgICAgcGFyZW50U3Bhbj86IChTcGFuIHwgU3BhbkNvbnRleHQpLFxuICAgICAgICByZXRyeUluZGV4PzogbnVtYmVyLFxuICAgICAgICBhZGRyZXNzPzogc3RyaW5nLFxuICAgICAgICBhYmk/OiBUT05Db250cmFjdEFCSSxcbiAgICAgICAgZnVuY3Rpb25OYW1lPzogc3RyaW5nLFxuICAgICk6IFByb21pc2U8UVRyYW5zYWN0aW9uPiB7XG4gICAgICAgIGNvbnN0IHByb2Nlc3NpbmcgPSBhd2FpdCB0aGlzLnNlbmRNZXNzYWdlKG1lc3NhZ2UsIHBhcmVudFNwYW4pO1xuICAgICAgICBjb25zdCB7IHRyYW5zYWN0aW9uIH0gPSBhd2FpdCB0aGlzLndhaXRGb3JUcmFuc2FjdGlvbih7XG4gICAgICAgICAgICBtZXNzYWdlLFxuICAgICAgICAgICAgbWVzc2FnZVByb2Nlc3NpbmdTdGF0ZTogcHJvY2Vzc2luZyxcbiAgICAgICAgICAgIHBhcmVudFNwYW4sXG4gICAgICAgICAgICBhYmksXG4gICAgICAgICAgICBmdW5jdGlvbk5hbWUsXG4gICAgICAgIH0pO1xuICAgICAgICByZXR1cm4gdHJhbnNhY3Rpb247XG4gICAgfVxuXG5cbiAgICBhc3luYyBmaW5kTGFzdEJsb2NrKGNoYWluOiBudW1iZXIsIHJlc3VsdDogc3RyaW5nLCBhZGRpdGlvbmFsRmlsdGVyPzogYW55KTogUHJvbWlzZTw/YW55PiB7XG4gICAgICAgIGNvbnN0IGJsb2NrcyA9IGF3YWl0IHRoaXMucXVlcmllcy5ibG9ja3MucXVlcnkoe1xuICAgICAgICAgICAgZmlsdGVyOiB7IHdvcmtjaGFpbl9pZDogeyBlcTogY2hhaW4gfSwgLi4uKGFkZGl0aW9uYWxGaWx0ZXIgfHwge30pIH0sXG4gICAgICAgICAgICByZXN1bHQsXG4gICAgICAgICAgICBvcmRlckJ5OiBbXG4gICAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgICAgICBwYXRoOiAnc2VxX25vJyxcbiAgICAgICAgICAgICAgICAgICAgZGlyZWN0aW9uOiAnREVTQycsXG4gICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgIF0sXG4gICAgICAgICAgICBsaW1pdDogMSxcbiAgICAgICAgfSk7XG4gICAgICAgIHJldHVybiBibG9ja3MubGVuZ3RoID4gMCA/IGJsb2Nrc1swXSA6IG51bGw7XG4gICAgfVxuXG4gICAgYXN5bmMgZmluZE1hdGNoaW5nU2hhcmQoc2hhcmRzOiBRU2hhcmRIYXNoW10sIGFkZHJlc3M6IHN0cmluZyk6IFByb21pc2U8P1FTaGFyZEhhc2g+IHtcbiAgICAgICAgcmV0dXJuIHRoaXMucmVxdWVzdENvcmUoJ2NvbnRyYWN0cy5maW5kLnNoYXJkJywge1xuICAgICAgICAgICAgc2hhcmRzLFxuICAgICAgICAgICAgYWRkcmVzcyxcbiAgICAgICAgfSk7XG4gICAgfVxuXG4gICAgYXN5bmMgZmluZExhc3RTaGFyZEJsb2NrKGFkZHJlc3M6IHN0cmluZyk6IFByb21pc2U8c3RyaW5nPiB7XG4gICAgICAgIGNvbnN0IGFkZHJlc3NQYXJ0cyA9IGFkZHJlc3Muc3BsaXQoJzonKTtcbiAgICAgICAgY29uc3Qgd29ya2NoYWluID0gYWRkcmVzc1BhcnRzLmxlbmd0aCA+IDEgPyBOdW1iZXIucGFyc2VJbnQoYWRkcmVzc1BhcnRzWzBdLCAxMCkgOiAwO1xuXG5cbiAgICAgICAgLy8gaWYgYWNjb3VudCByZXNpZGVzIGluIG1hc3RlciBjaGFpbiB0aGVuIHN0YXJ0aW5nIHBvaW50IGlzIGxhc3QgbWFzdGVyIGNoYWluIGJsb2NrXG4gICAgICAgIC8vIGdlbmVyYXRlZCBiZWZvcmUgbWVzc2FnZSB3YXMgc2VudFxuICAgICAgICBjb25zdCBtYXN0ZXJjaGFpbkxhc3RCbG9jayA9IGF3YWl0IHRoaXMuZmluZExhc3RCbG9jayhcbiAgICAgICAgICAgIE1BU1RFUkNIQUlOX0lELFxuICAgICAgICAgICAgJ2lkIG1hc3RlciB7IHNoYXJkX2hhc2hlcyB7IHdvcmtjaGFpbl9pZCBzaGFyZCBkZXNjciB7IHJvb3RfaGFzaCB9IH0gfScsXG4gICAgICAgICk7XG5cbiAgICAgICAgLy8gaWYgYWNjb3VudCByZXNpZGVzIGluIG1hc3RlcmNoYWluIHRoZW4gc3RhcnRpbmcgcG9pbnQgaXMgbGFzdCBtYXN0ZXJjaGFpbiBibG9ja1xuICAgICAgICBpZiAod29ya2NoYWluID09PSBNQVNURVJDSEFJTl9JRCkge1xuICAgICAgICAgICAgaWYgKCFtYXN0ZXJjaGFpbkxhc3RCbG9jaykge1xuICAgICAgICAgICAgICAgIHRocm93IFRPTkNsaWVudEVycm9yLm5vQmxvY2tzKE1BU1RFUkNIQUlOX0lELCBhd2FpdCB0aGlzLmNvbXBsZXRlRXJyb3JEYXRhKHtcbiAgICAgICAgICAgICAgICAgICAgYWRkcmVzcyxcbiAgICAgICAgICAgICAgICB9KSk7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICByZXR1cm4gbWFzdGVyY2hhaW5MYXN0QmxvY2suaWQ7XG4gICAgICAgIH1cblxuICAgICAgICAvLyBpZiBhY2NvdW50IGlzIGZyb20gb3RoZXIgY2hhaW5zIHRoZW4gc3RhcnRpbmcgcG9pbnQgaXMgbGFzdCBhY2NvdW50J3Mgc2hhcmQgYmxvY2tcbiAgICAgICAgLy8gVG8gb2J0YWluIGl0IHdlIHRha2UgbWFzdGVyY2hhaW4gYmxvY2sgdG8gZ2V0IHNoYXJkcyBjb25maWd1cmF0aW9uIGFuZCBzZWxlY3RcbiAgICAgICAgLy8gbWF0Y2hpbmcgc2hhcmRcbiAgICAgICAgaWYgKCFtYXN0ZXJjaGFpbkxhc3RCbG9jaykge1xuICAgICAgICAgICAgLy8gTm9kZSBTRSBjYXNlIC0gbm8gbWFzdGVyY2hhaW4sIG5vIHNoYXJkaW5nLiBDaGVjayB0aGF0IG9ubHkgb25lIHNoYXJkXG4gICAgICAgICAgICBsZXQgd29ya2NoYWluTGFzdEJsb2NrID0gYXdhaXQgdGhpcy5maW5kTGFzdEJsb2NrKHdvcmtjaGFpbiwgJ2FmdGVyX21lcmdlIHNoYXJkJyk7XG4gICAgICAgICAgICBpZiAoIXdvcmtjaGFpbkxhc3RCbG9jaykge1xuICAgICAgICAgICAgICAgIHRocm93IFRPTkNsaWVudEVycm9yLm5vQmxvY2tzKHdvcmtjaGFpbiwgYXdhaXQgdGhpcy5jb21wbGV0ZUVycm9yRGF0YSh7XG4gICAgICAgICAgICAgICAgICAgIGFkZHJlc3MsXG4gICAgICAgICAgICAgICAgfSkpO1xuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICAvLyBpZiB3b3JrY2hhaW4gaXMgc2hhcmRlZCB0aGVuIGl0IGlzIG5vdCBOb2RlIFNFIGFuZCBtYXN0ZXJjaGFpbiBibG9ja3MgbWlzc2luZ1xuICAgICAgICAgICAgLy8gaXMgZXJyb3JcbiAgICAgICAgICAgIGlmICh3b3JrY2hhaW5MYXN0QmxvY2suYWZ0ZXJfbWVyZ2UgfHwgd29ya2NoYWluTGFzdEJsb2NrLnNoYXJkICE9PSAnODAwMDAwMDAwMDAwMDAwMCcpIHtcbiAgICAgICAgICAgICAgICB0aHJvdyBUT05DbGllbnRFcnJvci5ub0Jsb2NrcyhNQVNURVJDSEFJTl9JRCwgYXdhaXQgdGhpcy5jb21wbGV0ZUVycm9yRGF0YSh7XG4gICAgICAgICAgICAgICAgICAgIGFkZHJlc3MsXG4gICAgICAgICAgICAgICAgfSkpO1xuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICAvLyBUYWtlIGxhc3QgYmxvY2sgYnkgc2VxX25vXG4gICAgICAgICAgICB3b3JrY2hhaW5MYXN0QmxvY2sgPSBhd2FpdCB0aGlzLmZpbmRMYXN0QmxvY2sod29ya2NoYWluLCAnaWQnLCB7XG4gICAgICAgICAgICAgICAgc2hhcmQ6IHsgZXE6ICc4MDAwMDAwMDAwMDAwMDAwJyB9LFxuICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICBpZiAoIXdvcmtjaGFpbkxhc3RCbG9jaykge1xuICAgICAgICAgICAgICAgIHRocm93IFRPTkNsaWVudEVycm9yLmludmFsaWRCbG9ja2NoYWluKFxuICAgICAgICAgICAgICAgICAgICAnTm8gc3RhcnRpbmcgTm9kZSBTRSBibG9jayBmb3VuZCcsXG4gICAgICAgICAgICAgICAgICAgIGF3YWl0IHRoaXMuY29tcGxldGVFcnJvckRhdGEoe1xuICAgICAgICAgICAgICAgICAgICAgICAgYWRkcmVzcyxcbiAgICAgICAgICAgICAgICAgICAgfSksXG4gICAgICAgICAgICAgICAgKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIHJldHVybiB3b3JrY2hhaW5MYXN0QmxvY2suaWQ7XG4gICAgICAgIH1cblxuICAgICAgICBjb25zdCBzaGFyZHM6ID9RU2hhcmRIYXNoW10gPSBtYXN0ZXJjaGFpbkxhc3RCbG9jaz8ubWFzdGVyPy5zaGFyZF9oYXNoZXM7XG4gICAgICAgIGlmICghc2hhcmRzIHx8IHNoYXJkcy5sZW5ndGggPT09IDApIHtcbiAgICAgICAgICAgIHRocm93IFRPTkNsaWVudEVycm9yLmludmFsaWRCbG9ja2NoYWluKFxuICAgICAgICAgICAgICAgICdObyBgc2hhcmRfaGFzaGVzYCBmaWVsZCBpbiBtYXN0ZXJjaGFpbiBibG9jaycsXG4gICAgICAgICAgICAgICAgYXdhaXQgdGhpcy5jb21wbGV0ZUVycm9yRGF0YSh7XG4gICAgICAgICAgICAgICAgICAgIGFkZHJlc3MsXG4gICAgICAgICAgICAgICAgfSksXG4gICAgICAgICAgICApO1xuICAgICAgICB9XG4gICAgICAgIGNvbnN0IHNoYXJkQmxvY2sgPSBhd2FpdCB0aGlzLmZpbmRNYXRjaGluZ1NoYXJkKHNoYXJkcywgYWRkcmVzcyk7XG4gICAgICAgIGNvbnN0IHJvb3RfaGFzaCA9IHNoYXJkQmxvY2s/LmRlc2NyPy5yb290X2hhc2g7XG4gICAgICAgIGlmICghcm9vdF9oYXNoKSB7XG4gICAgICAgICAgICB0aHJvdyBUT05DbGllbnRFcnJvci5pbnZhbGlkQmxvY2tjaGFpbihcbiAgICAgICAgICAgICAgICAnTm8gYHJvb3RfaGFzaGAgZmllbGQgaW4gc2hhcmQgZGVzY3InLFxuICAgICAgICAgICAgICAgIGF3YWl0IHRoaXMuY29tcGxldGVFcnJvckRhdGEoe1xuICAgICAgICAgICAgICAgICAgICBhZGRyZXNzLFxuICAgICAgICAgICAgICAgIH0pLFxuICAgICAgICAgICAgKTtcbiAgICAgICAgfVxuICAgICAgICByZXR1cm4gcm9vdF9oYXNoO1xuICAgIH1cblxuICAgIGFzeW5jIGNoZWNrU2hhcmRNYXRjaChibG9jazogUUJsb2NrLCBhZGRyZXNzOiBzdHJpbmcpOiBQcm9taXNlPGJvb2xlYW4+IHtcbiAgICAgICAgcmV0dXJuICEhKGF3YWl0IHRoaXMuZmluZE1hdGNoaW5nU2hhcmQoW1xuICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgIHdvcmtjaGFpbl9pZDogYmxvY2sud29ya2NoYWluX2lkIHx8IDAsXG4gICAgICAgICAgICAgICAgc2hhcmQ6IGJsb2NrLnNoYXJkIHx8ICcnLFxuICAgICAgICAgICAgfSxcbiAgICAgICAgXSwgYWRkcmVzcykpO1xuICAgIH1cblxuICAgIGFzeW5jIHdhaXROZXh0QmxvY2soY3VycmVudDogc3RyaW5nLCBhZGRyZXNzOiBzdHJpbmcsIHRpbWVvdXQ/OiBudW1iZXIpOiBQcm9taXNlPFFCbG9jaz4ge1xuICAgICAgICBjb25zdCBibG9jayA9IGF3YWl0IHRoaXMucXVlcmllcy5ibG9ja3Mud2FpdEZvcih7XG4gICAgICAgICAgICBmaWx0ZXI6IHtcbiAgICAgICAgICAgICAgICBwcmV2X3JlZjoge1xuICAgICAgICAgICAgICAgICAgICByb290X2hhc2g6IHsgZXE6IGN1cnJlbnQgfSxcbiAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgIE9SOiB7XG4gICAgICAgICAgICAgICAgICAgIHByZXZfYWx0X3JlZjoge1xuICAgICAgICAgICAgICAgICAgICAgICAgcm9vdF9oYXNoOiB7IGVxOiBjdXJyZW50IH0sXG4gICAgICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgIH0sXG4gICAgICAgICAgICByZXN1bHQ6IEJMT0NLX0ZJRUxEUyxcbiAgICAgICAgICAgIHRpbWVvdXQsXG4gICAgICAgIH0pO1xuXG4gICAgICAgIGlmIChibG9jaz8uYWZ0ZXJfc3BsaXQgJiYgIShhd2FpdCB0aGlzLmNoZWNrU2hhcmRNYXRjaChibG9jaywgYWRkcmVzcykpKSB7XG4gICAgICAgICAgICByZXR1cm4gdGhpcy5xdWVyaWVzLmJsb2Nrcy53YWl0Rm9yKHtcbiAgICAgICAgICAgICAgICBmaWx0ZXI6IHtcbiAgICAgICAgICAgICAgICAgICAgaWQ6IHsgbmU6IGJsb2NrLmlkIH0sXG4gICAgICAgICAgICAgICAgICAgIHByZXZfcmVmOiB7XG4gICAgICAgICAgICAgICAgICAgICAgICByb290X2hhc2g6IHsgZXE6IGN1cnJlbnQgfSxcbiAgICAgICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgIHJlc3VsdDogQkxPQ0tfRklFTERTLFxuICAgICAgICAgICAgICAgIHRpbWVvdXQsXG4gICAgICAgICAgICB9KTtcbiAgICAgICAgfVxuICAgICAgICByZXR1cm4gYmxvY2s7XG4gICAgfVxuXG4gICAgYXN5bmMgd2FpdEZvclRyYW5zYWN0aW9uKHBhcmFtczogVE9OV2FpdEZvclRyYW5zYWN0aW9uUGFyYW1zKTogUHJvbWlzZTxUT05Db250cmFjdFJ1blJlc3VsdD4ge1xuICAgICAgICBjb25zdCB0b3RhbFN0YXJ0ID0gRGF0ZS5ub3coKTtcbiAgICAgICAgY29uc3QgZXhwaXJlID0gcGFyYW1zLm1lc3NhZ2UuZXhwaXJlIHx8IDA7XG4gICAgICAgIGNvbnN0IG1lc3NhZ2VJZCA9IGF3YWl0IHRoaXMuZW5zdXJlTWVzc2FnZUlkKHBhcmFtcy5tZXNzYWdlKTtcbiAgICAgICAgY29uc3QgYWRkcmVzcyA9IHBhcmFtcy5tZXNzYWdlLmFkZHJlc3M7XG4gICAgICAgIGNvbnN0IHByb2Nlc3NpbmcgPSB7IC4uLnBhcmFtcy5tZXNzYWdlUHJvY2Vzc2luZ1N0YXRlIH07XG4gICAgICAgIGxldCB0cmFuc2FjdGlvbiA9IG51bGw7XG4gICAgICAgIHRyeSB7XG4gICAgICAgICAgICBjb25zdCB0aW1lUmVwb3J0ID0gW107XG5cbiAgICAgICAgICAgIGNvbnN0IHN0b3BUaW1lID0gZXhwaXJlXG4gICAgICAgICAgICAgICAgfHwgTWF0aC5yb3VuZCgoRGF0ZS5ub3coKSArIHRoaXMuY29uZmlnLm1lc3NhZ2VQcm9jZXNzaW5nVGltZW91dCgpKSAvIDEwMDApO1xuXG4gICAgICAgICAgICBjb25zdCBpbmZpbml0ZVdhaXQgPSBwYXJhbXMuaW5maW5pdGVXYWl0ICE9PSBmYWxzZTtcbiAgICAgICAgICAgIGNvbnN0IGFkZFRpbWVvdXQgPSB0aGlzLmNvbmZpZy5tZXNzYWdlUHJvY2Vzc2luZ1RpbWVvdXQoKTtcbiAgICAgICAgICAgIHdoaWxlICghdHJhbnNhY3Rpb24pIHtcbiAgICAgICAgICAgICAgICBjb25zdCBub3cgPSBEYXRlLm5vdygpO1xuICAgICAgICAgICAgICAgIGNvbnN0IHRpbWVvdXQgPSBNYXRoLm1heChzdG9wVGltZSwgbm93KSAtIG5vdyArIGFkZFRpbWVvdXQ7XG4gICAgICAgICAgICAgICAgbGV0IGJsb2NrOiA/UUJsb2NrID0gbnVsbDtcbiAgICAgICAgICAgICAgICB0cnkge1xuICAgICAgICAgICAgICAgICAgICBjb25zdCBzdGFydCA9IERhdGUubm93KCk7XG4gICAgICAgICAgICAgICAgICAgIGJsb2NrID0gYXdhaXQgdGhpcy53YWl0TmV4dEJsb2NrKHByb2Nlc3NpbmcubGFzdEJsb2NrSWQsIGFkZHJlc3MsIHRpbWVvdXQpO1xuICAgICAgICAgICAgICAgICAgICBjb25zdCBlbmQgPSBEYXRlLm5vdygpO1xuICAgICAgICAgICAgICAgICAgICB0aW1lUmVwb3J0LnB1c2goXG4gICAgICAgICAgICAgICAgICAgICAgICBgQmxvY2sgWyR7YmxvY2suaWQgfHwgJyd9XSBgXG4gICAgICAgICAgICAgICAgICAgICAgICArIGBoYXMgYmVlbiByZWNlaXZlZDogJHtlbmQgLSBzdGFydH0gbXMsIGBcbiAgICAgICAgICAgICAgICAgICAgICAgICsgYGNsaWVudCB0aW1lOiAke01hdGgucm91bmQoZW5kIC8gMTAwMCl9LCBgXG4gICAgICAgICAgICAgICAgICAgICAgICArIGBnZW5fdXRpbWU6ICR7YmxvY2suZ2VuX3V0aW1lIHx8IDB9YCxcbiAgICAgICAgICAgICAgICAgICAgKTtcbiAgICAgICAgICAgICAgICB9IGNhdGNoIChlcnJvcikge1xuICAgICAgICAgICAgICAgICAgICB0aGlzLmNvbmZpZy5sb2coJ0Jsb2NrIHdhaXRpbmcgZmFpbGVkOiAnLCBlcnJvcik7XG4gICAgICAgICAgICAgICAgICAgIGlmICghaW5maW5pdGVXYWl0KSB7XG4gICAgICAgICAgICAgICAgICAgICAgICBsZXQgcmVzb2x2ZWRFcnJvciA9IGVycm9yO1xuICAgICAgICAgICAgICAgICAgICAgICAgaWYgKGVycm9yLmNvZGUgPT09IFRPTkVycm9yQ29kZS5XQUlUX0ZPUl9USU1FT1VUKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgcmVzb2x2ZWRFcnJvciA9IFRPTkNsaWVudEVycm9yLm5ldHdvcmtTaWxlbnQoXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGF3YWl0IHRoaXMuY29tcGxldGVFcnJvckRhdGEoe1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgYWRkcmVzcyxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIG1lc3NhZ2VfaWQ6IG1lc3NhZ2VJZCxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGJsb2NrX2lkOiBwcm9jZXNzaW5nLmxhc3RCbG9ja0lkLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdGltZW91dCxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIG1lc3NhZ2VfcHJvY2Vzc2luZ19zdGF0ZTogcHJvY2Vzc2luZyxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGV4cGlyZSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHNlbmRpbmdfdGltZTogcHJvY2Vzc2luZy5zZW5kaW5nVGltZSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfSksXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgKTtcbiAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICAgIHRocm93IHJlc29sdmVkRXJyb3I7XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgdGhpcy5jb25maWcubG9nKCdSZXRyeSB3YWl0aW5nLicpO1xuICAgICAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgICAgIGlmIChibG9jaykge1xuICAgICAgICAgICAgICAgICAgICBwcm9jZXNzaW5nLmxhc3RCbG9ja0lkID0gYmxvY2suaWQgfHwgJyc7XG5cbiAgICAgICAgICAgICAgICAgICAgY29uc3QgaW5Nc2cgPSAoYmxvY2suaW5fbXNnX2Rlc2NyIHx8IFtdKS5maW5kKHggPT4geC5tc2dfaWQgPT09IG1lc3NhZ2VJZCk7XG4gICAgICAgICAgICAgICAgICAgIGlmIChpbk1zZykge1xuICAgICAgICAgICAgICAgICAgICAgICAgY29uc3QgdHJhbnNhY3Rpb25JZCA9IGluTXNnLnRyYW5zYWN0aW9uX2lkO1xuICAgICAgICAgICAgICAgICAgICAgICAgaWYgKCF0cmFuc2FjdGlvbklkKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgdGhyb3cgVE9OQ2xpZW50RXJyb3IuaW52YWxpZEJsb2NrY2hhaW4oXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICdObyBmaWVsZCBgdHJhbnNhY3Rpb25faWRgIGluIGJsb2NrJyxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgYXdhaXQgdGhpcy5jb21wbGV0ZUVycm9yRGF0YSh7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBhZGRyZXNzLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgbWVzc2FnZV9pZDogbWVzc2FnZUlkLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9KSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICApO1xuICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgICAgY29uc3QgdHJTdGFydCA9IERhdGUubm93KCk7XG4gICAgICAgICAgICAgICAgICAgICAgICB0cmFuc2FjdGlvbiA9IGF3YWl0IHRoaXMucXVlcmllcy50cmFuc2FjdGlvbnMud2FpdEZvcih7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgZmlsdGVyOiB7IGlkOiB7IGVxOiB0cmFuc2FjdGlvbklkIH0gfSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICByZXN1bHQ6IFRSQU5TQUNUSU9OX0ZJRUxEU19PUkRJTkFSWSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB0aW1lb3V0OiBNQVhfVElNRU9VVCxcbiAgICAgICAgICAgICAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgICAgICAgICAgICAgdHJhY2VNZXNzYWdlKHRoaXMuY29uZmlnLnRyYWNlciwgbWVzc2FnZUlkLCAndHJhbnNhY3Rpb25SZWNlaXZlZCcsIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB0cmFuc2FjdGlvbklkLFxuICAgICAgICAgICAgICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICAgICAgICAgICAgICB0aW1lUmVwb3J0LnB1c2goYFRyYW5zYWN0aW9uIFske3RyYW5zYWN0aW9uSWR9XSBoYXMgYmVlbiByZWNlaXZlZDogJHtEYXRlLm5vdygpIC0gdHJTdGFydH0gbXNgKTtcbiAgICAgICAgICAgICAgICAgICAgfSBlbHNlIGlmICgoYmxvY2suZ2VuX3V0aW1lIHx8IDApID4gc3RvcFRpbWUpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIGlmIChleHBpcmUpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB0cmFjZU1lc3NhZ2UodGhpcy5jb25maWcudHJhY2VyLCBtZXNzYWdlSWQsICdtZXNzYWdlRXhwaXJlZCcsIHt9KTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB0aHJvdyBUT05DbGllbnRFcnJvci5tZXNzYWdlRXhwaXJlZChcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgYXdhaXQgdGhpcy5jb21wbGV0ZUVycm9yRGF0YSh7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBhZGRyZXNzLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgbWVzc2FnZV9pZDogbWVzc2FnZUlkLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgc2VuZGluZ190aW1lOiBwcm9jZXNzaW5nLnNlbmRpbmdUaW1lLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgZXhwaXJlOiBzdG9wVGltZSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGJsb2NrX3RpbWU6IGJsb2NrLmdlbl91dGltZSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGJsb2NrX2lkOiBwcm9jZXNzaW5nLmxhc3RCbG9ja0lkLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9KSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICApO1xuICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgICAgdGhyb3cgVE9OQ2xpZW50RXJyb3IudHJhbnNhY3Rpb25XYWl0VGltZW91dChcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBhd2FpdCB0aGlzLmNvbXBsZXRlRXJyb3JEYXRhKHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgYWRkcmVzcyxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgbWVzc2FnZV9pZDogbWVzc2FnZUlkLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBzZW5kaW5nX3RpbWU6IHByb2Nlc3Npbmcuc2VuZGluZ1RpbWUsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRpbWVvdXQsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIG1lc3NhZ2VfcHJvY2Vzc2luZ19zdGF0ZTogcHJvY2Vzc2luZyxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB9KSxcbiAgICAgICAgICAgICAgICAgICAgICAgICk7XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICAgIHRpbWVSZXBvcnQuc3BsaWNlKDAsIDAsIGBUcmFuc2FjdGlvbiB3YWl0aW5nIHRpbWU6ICR7RGF0ZS5ub3coKSAtIHRvdGFsU3RhcnR9IG1zYCk7XG4gICAgICAgICAgICB0aGlzLmNvbmZpZy5sb2codGltZVJlcG9ydC5qb2luKCdcXG4nKSk7XG4gICAgICAgIH0gY2F0Y2ggKGVycm9yKSB7XG4gICAgICAgICAgICB0aGlzLmNvbmZpZy5sb2coJ1t3YWl0Rm9yVHJhbnNhY3Rpb25dJywgJ0ZBSUxFRCcsIGVycm9yKTtcbiAgICAgICAgICAgIGlmIChlcnJvci5jb2RlID09PSBUT05FcnJvckNvZGUuTUVTU0FHRV9FWFBJUkVEXG4gICAgICAgICAgICAgICAgfHwgZXJyb3IuY29kZSA9PT0gVE9ORXJyb3JDb2RlLlRSQU5TQUNUSU9OX1dBSVRfVElNRU9VVCkge1xuICAgICAgICAgICAgICAgIHRocm93IGF3YWl0IHRoaXMucmVzb2x2ZURldGFpbGVkRXJyb3IoXG4gICAgICAgICAgICAgICAgICAgIGVycm9yLFxuICAgICAgICAgICAgICAgICAgICBwYXJhbXMubWVzc2FnZS5tZXNzYWdlQm9keUJhc2U2NCxcbiAgICAgICAgICAgICAgICAgICAgcHJvY2Vzc2luZy5zZW5kaW5nVGltZSxcbiAgICAgICAgICAgICAgICAgICAgYWRkcmVzcyxcbiAgICAgICAgICAgICAgICApO1xuICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgICB0aHJvdyBlcnJvcjtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuXG4gICAgICAgIHJldHVybiB0aGlzLnByb2Nlc3NUcmFuc2FjdGlvbihcbiAgICAgICAgICAgIGFkZHJlc3MsXG4gICAgICAgICAgICB0cmFuc2FjdGlvbixcbiAgICAgICAgICAgIHBhcmFtcy5hYmksXG4gICAgICAgICAgICBwYXJhbXMuZnVuY3Rpb25OYW1lLFxuICAgICAgICApO1xuICAgIH1cblxuXG4gICAgYXN5bmMgcHJvY2Vzc1RyYW5zYWN0aW9uKFxuICAgICAgICBhZGRyZXNzOiBzdHJpbmcsXG4gICAgICAgIHRyYW5zYWN0aW9uOiBRVHJhbnNhY3Rpb24sXG4gICAgICAgIGFiaTogP1RPTkNvbnRyYWN0QUJJLFxuICAgICAgICBmdW5jdGlvbk5hbWU6ID9zdHJpbmcsXG4gICAgKTogUHJvbWlzZTxUT05Db250cmFjdFJ1blJlc3VsdD4ge1xuICAgICAgICB0cnkge1xuICAgICAgICAgICAgY29uc3QgcmVzdWx0ID0gYXdhaXQgdGhpcy5yZXF1ZXN0Q29yZSgnY29udHJhY3RzLnByb2Nlc3MudHJhbnNhY3Rpb24nLCB7XG4gICAgICAgICAgICAgICAgdHJhbnNhY3Rpb24sXG4gICAgICAgICAgICAgICAgYWJpLFxuICAgICAgICAgICAgICAgIGZ1bmN0aW9uTmFtZSxcbiAgICAgICAgICAgICAgICBhZGRyZXNzLFxuICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICByZXR1cm4ge1xuICAgICAgICAgICAgICAgIHRyYW5zYWN0aW9uLFxuICAgICAgICAgICAgICAgIC4uLnJlc3VsdCxcbiAgICAgICAgICAgIH07XG4gICAgICAgIH0gY2F0Y2ggKGVycm9yKSB7XG4gICAgICAgICAgICBjb25zdCBhY2NvdW50cyA9IGF3YWl0IHRoaXMucXVlcmllcy5hY2NvdW50cy5xdWVyeSh7XG4gICAgICAgICAgICAgICAgZmlsdGVyOiB7IGlkOiB7IGVxOiBhZGRyZXNzIH0gfSxcbiAgICAgICAgICAgICAgICByZXN1bHQ6ICdhY2NfdHlwZSBiYWxhbmNlJyxcbiAgICAgICAgICAgICAgICB0aW1lb3V0OiAxMDAwLFxuICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICBpZiAoYWNjb3VudHMubGVuZ3RoID09PSAwKSB7XG4gICAgICAgICAgICAgICAgdGhyb3cgVE9OQ2xpZW50RXJyb3IuYWNjb3VudE1pc3NpbmcoXG4gICAgICAgICAgICAgICAgICAgIGFkZHJlc3MsXG4gICAgICAgICAgICAgICAgICAgIGF3YWl0IHRoaXMuY29tcGxldGVFcnJvckRhdGEoe1xuICAgICAgICAgICAgICAgICAgICAgICAgb3JpZ2luYWxfZXJyb3I6IGVycm9yLFxuICAgICAgICAgICAgICAgICAgICAgICAgYWRkcmVzcyxcbiAgICAgICAgICAgICAgICAgICAgICAgIGZ1bmN0aW9uX25hbWU6IGZ1bmN0aW9uTmFtZSxcbiAgICAgICAgICAgICAgICAgICAgfSksXG4gICAgICAgICAgICAgICAgKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIHRocm93IGVycm9yO1xuICAgICAgICB9XG4gICAgfVxuXG4gICAgYXN5bmMgcmVzb2x2ZURldGFpbGVkRXJyb3IoXG4gICAgICAgIGVycm9yOiBFcnJvcixcbiAgICAgICAgbWVzc2FnZUJhc2U2NDogc3RyaW5nLFxuICAgICAgICB0aW1lOiBudW1iZXIsXG4gICAgICAgIGFkZHJlc3M6IHN0cmluZyxcbiAgICApIHtcbiAgICAgICAgY29uc3QgYWNjb3VudHMgPSBhd2FpdCB0aGlzLnF1ZXJpZXMuYWNjb3VudHMucXVlcnkoe1xuICAgICAgICAgICAgZmlsdGVyOiB7IGlkOiB7IGVxOiBhZGRyZXNzIH0gfSxcbiAgICAgICAgICAgIHJlc3VsdDogJ2lkIGFjY190eXBlIGJhbGFuY2UgYmFsYW5jZV9vdGhlciB7IGN1cnJlbmN5IHZhbHVlIH0gYm9jIGNvZGVfaGFzaCBkYXRhX2hhc2ggbGFzdF9wYWlkJyxcbiAgICAgICAgICAgIHRpbWVvdXQ6IDEwMDAsXG4gICAgICAgIH0pO1xuICAgICAgICBpZiAoYWNjb3VudHMubGVuZ3RoID09PSAwKSB7XG4gICAgICAgICAgICByZXR1cm4gVE9OQ2xpZW50RXJyb3IuYWNjb3VudE1pc3NpbmcoXG4gICAgICAgICAgICAgICAgYWRkcmVzcyxcbiAgICAgICAgICAgICAgICBhd2FpdCB0aGlzLmNvbXBsZXRlRXJyb3JEYXRhKHtcbiAgICAgICAgICAgICAgICAgICAgYWRkcmVzcyxcbiAgICAgICAgICAgICAgICAgICAgb3JpZ2luYWxfZXJyb3I6IGVycm9yLFxuICAgICAgICAgICAgICAgIH0pLFxuICAgICAgICAgICAgKTtcbiAgICAgICAgfVxuICAgICAgICBjb25zdCBhY2NvdW50ID0gYWNjb3VudHNbMF07XG4gICAgICAgIHJlbW92ZVR5cGVOYW1lKGFjY291bnQpO1xuICAgICAgICB0cnkge1xuICAgICAgICAgICAgYXdhaXQgdGhpcy5yZXF1ZXN0Q29yZSgnY29udHJhY3RzLnJlc29sdmUuZXJyb3InLCB7XG4gICAgICAgICAgICAgICAgYWRkcmVzcyxcbiAgICAgICAgICAgICAgICBhY2NvdW50LFxuICAgICAgICAgICAgICAgIG1lc3NhZ2VCYXNlNjQsXG4gICAgICAgICAgICAgICAgdGltZSxcbiAgICAgICAgICAgICAgICBtYWluRXJyb3I6IGVycm9yLFxuICAgICAgICAgICAgfSk7XG4gICAgICAgIH0gY2F0Y2ggKHJlc29sdmVkKSB7XG4gICAgICAgICAgICByZXR1cm4gcmVzb2x2ZWQ7XG4gICAgICAgIH1cbiAgICAgICAgcmV0dXJuIGVycm9yO1xuICAgIH1cblxuICAgIGFzeW5jIGlzRGVwbG95ZWQoYWRkcmVzczogc3RyaW5nLCBwYXJlbnRTcGFuPzogKFNwYW4gfCBTcGFuQ29udGV4dCkpOiBQcm9taXNlPGJvb2w+IHtcbiAgICAgICAgY29uc3QgYWNjb3VudCA9IGF3YWl0IHRoaXMucXVlcmllcy5hY2NvdW50cy5xdWVyeSh7XG4gICAgICAgICAgICBmaWx0ZXI6IHtcbiAgICAgICAgICAgICAgICBpZDogeyBlcTogYWRkcmVzcyB9LFxuICAgICAgICAgICAgICAgIGFjY190eXBlOiB7IGVxOiBRQWNjb3VudFR5cGUuYWN0aXZlIH0sXG4gICAgICAgICAgICB9LFxuICAgICAgICAgICAgcmVzdWx0OiAnaWQnLFxuICAgICAgICAgICAgcGFyZW50U3BhbixcbiAgICAgICAgfSk7XG4gICAgICAgIHJldHVybiBhY2NvdW50Lmxlbmd0aCA+IDA7XG4gICAgfVxuXG4gICAgYXN5bmMgcHJvY2Vzc0RlcGxveU1lc3NhZ2UoXG4gICAgICAgIG1lc3NhZ2U6IFRPTkNvbnRyYWN0RGVwbG95TWVzc2FnZSxcbiAgICAgICAgcGFyZW50U3Bhbj86IChTcGFuIHwgU3BhbkNvbnRleHQpLFxuICAgICAgICByZXRyeUluZGV4PzogbnVtYmVyLFxuICAgICk6IFByb21pc2U8VE9OQ29udHJhY3REZXBsb3lSZXN1bHQ+IHtcbiAgICAgICAgdGhpcy5jb25maWcubG9nKCdwcm9jZXNzRGVwbG95TWVzc2FnZScsIG1lc3NhZ2UpO1xuICAgICAgICBpZiAoYXdhaXQgdGhpcy5pc0RlcGxveWVkKG1lc3NhZ2UuYWRkcmVzcywgcGFyZW50U3BhbikpIHtcbiAgICAgICAgICAgIHJldHVybiB7XG4gICAgICAgICAgICAgICAgYWRkcmVzczogbWVzc2FnZS5hZGRyZXNzLFxuICAgICAgICAgICAgICAgIGFscmVhZHlEZXBsb3llZDogdHJ1ZSxcbiAgICAgICAgICAgIH07XG4gICAgICAgIH1cbiAgICAgICAgY29uc3QgcHJvY2Vzc2luZyA9IGF3YWl0IHRoaXMuc2VuZE1lc3NhZ2UobWVzc2FnZS5tZXNzYWdlLCBwYXJlbnRTcGFuKTtcbiAgICAgICAgcmV0dXJuIHRoaXMud2FpdEZvckRlcGxveVRyYW5zYWN0aW9uKG1lc3NhZ2UsIHByb2Nlc3NpbmcsIHBhcmVudFNwYW4pO1xuICAgIH1cblxuICAgIGFzeW5jIHdhaXRGb3JEZXBsb3lUcmFuc2FjdGlvbihcbiAgICAgICAgZGVwbG95TWVzc2FnZTogVE9OQ29udHJhY3REZXBsb3lNZXNzYWdlLFxuICAgICAgICBtZXNzYWdlUHJvY2Vzc2luZ1N0YXRlOiBUT05NZXNzYWdlUHJvY2Vzc2luZ1N0YXRlLFxuICAgICAgICBwYXJlbnRTcGFuPzogKFNwYW4gfCBTcGFuQ29udGV4dCksXG4gICAgICAgIGluZmluaXRlV2FpdD86IGJvb2xlYW4sXG4gICAgKTogUHJvbWlzZTxUT05Db250cmFjdERlcGxveVJlc3VsdD4ge1xuICAgICAgICBjb25zdCBtZXNzYWdlID0gZGVwbG95TWVzc2FnZS5tZXNzYWdlO1xuICAgICAgICBjb25zdCByZXN1bHQgPSBhd2FpdCB0aGlzLndhaXRGb3JUcmFuc2FjdGlvbih7XG4gICAgICAgICAgICBtZXNzYWdlLFxuICAgICAgICAgICAgbWVzc2FnZVByb2Nlc3NpbmdTdGF0ZSxcbiAgICAgICAgICAgIHBhcmVudFNwYW4sXG4gICAgICAgICAgICBpbmZpbml0ZVdhaXQsXG4gICAgICAgIH0pO1xuICAgICAgICByZXR1cm4ge1xuICAgICAgICAgICAgLi4ucmVzdWx0LFxuICAgICAgICAgICAgYWRkcmVzczogbWVzc2FnZS5hZGRyZXNzLFxuICAgICAgICAgICAgYWxyZWFkeURlcGxveWVkOiBmYWxzZSxcbiAgICAgICAgfTtcbiAgICB9XG5cblxuICAgIGFzeW5jIHByb2Nlc3NSdW5NZXNzYWdlKFxuICAgICAgICBydW5NZXNzYWdlOiBUT05Db250cmFjdFJ1bk1lc3NhZ2UsXG4gICAgICAgIHBhcmVudFNwYW4/OiAoU3BhbiB8IFNwYW5Db250ZXh0KSxcbiAgICApOiBQcm9taXNlPFRPTkNvbnRyYWN0UnVuUmVzdWx0PiB7XG4gICAgICAgIHRoaXMuY29uZmlnLmxvZygncHJvY2Vzc1J1bk1lc3NhZ2UnLCBydW5NZXNzYWdlKTtcbiAgICAgICAgY29uc3QgcHJvY2Vzc2luZyA9IGF3YWl0IHRoaXMuc2VuZE1lc3NhZ2UocnVuTWVzc2FnZS5tZXNzYWdlLCBwYXJlbnRTcGFuKTtcbiAgICAgICAgcmV0dXJuIHRoaXMud2FpdEZvclJ1blRyYW5zYWN0aW9uKHJ1bk1lc3NhZ2UsIHByb2Nlc3NpbmcsIHBhcmVudFNwYW4pO1xuICAgIH1cblxuICAgIGFzeW5jIHdhaXRGb3JSdW5UcmFuc2FjdGlvbihcbiAgICAgICAgcnVuTWVzc2FnZTogVE9OQ29udHJhY3RSdW5NZXNzYWdlLFxuICAgICAgICBtZXNzYWdlUHJvY2Vzc2luZ1N0YXRlOiBUT05NZXNzYWdlUHJvY2Vzc2luZ1N0YXRlLFxuICAgICAgICBwYXJlbnRTcGFuPzogKFNwYW4gfCBTcGFuQ29udGV4dCksXG4gICAgICAgIGluZmluaXRlV2FpdD86IGJvb2xlYW4sXG4gICAgKTogUHJvbWlzZTxUT05Db250cmFjdFJ1blJlc3VsdD4ge1xuICAgICAgICByZXR1cm4gdGhpcy53YWl0Rm9yVHJhbnNhY3Rpb24oe1xuICAgICAgICAgICAgbWVzc2FnZTogcnVuTWVzc2FnZS5tZXNzYWdlLFxuICAgICAgICAgICAgbWVzc2FnZVByb2Nlc3NpbmdTdGF0ZSxcbiAgICAgICAgICAgIHBhcmVudFNwYW4sXG4gICAgICAgICAgICBpbmZpbml0ZVdhaXQsXG4gICAgICAgICAgICBhYmk6IHJ1bk1lc3NhZ2UuYWJpLFxuICAgICAgICAgICAgZnVuY3Rpb25OYW1lOiBydW5NZXNzYWdlLmZ1bmN0aW9uTmFtZSxcbiAgICAgICAgfSk7XG4gICAgfVxuXG4gICAgLyoqXG4gICAgICogRGVwcmVjYXRlZC4gVXNlIGBydW5NZXNzYWdlTG9jYWxgIGluc3RlYWQuXG4gICAgICogQHBhcmFtIHBhcmFtc1xuICAgICAqIEBwYXJhbSB3YWl0UGFyYW1zXG4gICAgICogQHBhcmFtIHBhcmVudFNwYW5cbiAgICAgKiBAcmV0dXJucyB7UHJvbWlzZTx1bmtub3duPn1cbiAgICAgKi9cbiAgICBhc3luYyBwcm9jZXNzUnVuTWVzc2FnZUxvY2FsKFxuICAgICAgICBwYXJhbXM6IFRPTkNvbnRyYWN0UnVuTWVzc2FnZSxcbiAgICAgICAgd2FpdFBhcmFtcz86IFRPTkNvbnRyYWN0QWNjb3VudFdhaXRQYXJhbXMsXG4gICAgICAgIHBhcmVudFNwYW4/OiAoU3BhbiB8IFNwYW5Db250ZXh0KSxcbiAgICApOiBQcm9taXNlPFRPTkNvbnRyYWN0UnVuUmVzdWx0PiB7XG4gICAgICAgIHRoaXMuY29uZmlnLmxvZygncHJvY2Vzc1J1bk1lc3NhZ2VMb2NhbCcsIHBhcmFtcyk7XG5cbiAgICAgICAgY29uc3QgYWNjb3VudCA9IGF3YWl0IHRoaXMuZ2V0QWNjb3VudChwYXJhbXMuYWRkcmVzcywgdHJ1ZSwgd2FpdFBhcmFtcywgcGFyZW50U3Bhbik7XG5cbiAgICAgICAgcmV0dXJuIHRoaXMucmVxdWVzdENvcmUoJ2NvbnRyYWN0cy5ydW4ubG9jYWwubXNnJywge1xuICAgICAgICAgICAgYWRkcmVzczogcGFyYW1zLmFkZHJlc3MsXG4gICAgICAgICAgICBhY2NvdW50LFxuICAgICAgICAgICAgYWJpOiBwYXJhbXMuYWJpLFxuICAgICAgICAgICAgZnVuY3Rpb25OYW1lOiBwYXJhbXMuZnVuY3Rpb25OYW1lLFxuICAgICAgICAgICAgbWVzc2FnZUJhc2U2NDogcGFyYW1zLm1lc3NhZ2UubWVzc2FnZUJvZHlCYXNlNjQsXG4gICAgICAgIH0pO1xuICAgIH1cblxuICAgIC8vIEZlZSBjYWxjdWxhdGlvblxuXG4gICAgYmlnQmFsYW5jZSA9ICcweDEwMDAwMDAwMDAwMDAwJztcblxuICAgIGFzeW5jIGNhbGNSdW5GZWVzKFxuICAgICAgICBwYXJhbXM6IFRPTkNvbnRyYWN0Q2FsY1J1bkZlZVBhcmFtcyxcbiAgICAgICAgcGFyZW50U3Bhbj86IChTcGFuIHwgU3BhbkNvbnRleHQpLFxuICAgICk6IFByb21pc2U8VE9OQ29udHJhY3RDYWxjRmVlUmVzdWx0PiB7XG4gICAgICAgIHRoaXMuY29uZmlnLmxvZygnY2FsY1J1bkZlZXMnLCBwYXJhbXMpO1xuXG4gICAgICAgIGNvbnN0IGFjY291bnQgPSBhd2FpdCB0aGlzLmdldEFjY291bnQocGFyYW1zLmFkZHJlc3MsIHRydWUsIHBhcmFtcy53YWl0UGFyYW1zLCBwYXJlbnRTcGFuKTtcblxuICAgICAgICBpZiAocGFyYW1zLmVtdWxhdGVCYWxhbmNlKSB7XG4gICAgICAgICAgICBhY2NvdW50LmJhbGFuY2UgPSB0aGlzLmJpZ0JhbGFuY2U7XG4gICAgICAgIH1cblxuICAgICAgICByZXR1cm4gdGhpcy5yZXF1ZXN0Q29yZSgnY29udHJhY3RzLnJ1bi5mZWUnLCB7XG4gICAgICAgICAgICBhZGRyZXNzOiBwYXJhbXMuYWRkcmVzcyxcbiAgICAgICAgICAgIGFjY291bnQsXG4gICAgICAgICAgICBhYmk6IHBhcmFtcy5hYmksXG4gICAgICAgICAgICBmdW5jdGlvbk5hbWU6IHBhcmFtcy5mdW5jdGlvbk5hbWUsXG4gICAgICAgICAgICBpbnB1dDogcGFyYW1zLmlucHV0LFxuICAgICAgICAgICAga2V5UGFpcjogcGFyYW1zLmtleVBhaXIsXG4gICAgICAgIH0pO1xuICAgIH1cblxuICAgIGFzeW5jIGNhbGNEZXBsb3lGZWVzKFxuICAgICAgICBwYXJhbXM6IFRPTkNvbnRyYWN0Q2FsY0RlcGxveUZlZVBhcmFtcyxcbiAgICAgICAgcGFyZW50U3Bhbj86IChTcGFuIHwgU3BhbkNvbnRleHQpLFxuICAgICk6IFByb21pc2U8VE9OQ29udHJhY3RDYWxjRmVlUmVzdWx0PiB7XG4gICAgICAgIHRoaXMuY29uZmlnLmxvZygnY2FsY0RlcGxveUZlZXMnLCBwYXJhbXMpO1xuXG4gICAgICAgIGNvbnN0IG1lc3NhZ2UgPSBhd2FpdCB0aGlzLmNyZWF0ZURlcGxveU1lc3NhZ2UocGFyYW1zKTtcblxuICAgICAgICByZXR1cm4gdGhpcy5jYWxjTXNnUHJvY2Vzc0ZlZXMoe1xuICAgICAgICAgICAgYWRkcmVzczogbWVzc2FnZS5hZGRyZXNzLFxuICAgICAgICAgICAgbWVzc2FnZTogbWVzc2FnZS5tZXNzYWdlLFxuICAgICAgICAgICAgZW11bGF0ZUJhbGFuY2U6IHBhcmFtcy5lbXVsYXRlQmFsYW5jZSxcbiAgICAgICAgICAgIG5ld0FjY291bnQ6IHBhcmFtcy5uZXdBY2NvdW50LFxuICAgICAgICB9LCBwYXJlbnRTcGFuKTtcbiAgICB9XG5cbiAgICBhc3luYyBjYWxjTXNnUHJvY2Vzc0ZlZXMoXG4gICAgICAgIHBhcmFtczogVE9OQ29udHJhY3RDYWxjTXNnUHJvY2Vzc2luZ0ZlZXNQYXJhbXMsXG4gICAgICAgIHBhcmVudFNwYW4/OiAoU3BhbiB8IFNwYW5Db250ZXh0KSxcbiAgICApOiBQcm9taXNlPFRPTkNvbnRyYWN0Q2FsY0ZlZVJlc3VsdD4ge1xuICAgICAgICB0aGlzLmNvbmZpZy5sb2coJ2NhbGNNc2dQcm9jZXNzRmVlcycsIHBhcmFtcyk7XG5cbiAgICAgICAgbGV0IGFjY291bnQ6IFFBY2NvdW50ID0ge1xuICAgICAgICAgICAgYmFsYW5jZTogdGhpcy5iaWdCYWxhbmNlLFxuICAgICAgICAgICAgaWQ6IHBhcmFtcy5hZGRyZXNzLFxuICAgICAgICAgICAgbGFzdF9wYWlkOiBNYXRoLmZsb29yKERhdGUubm93KCkgLyAxMDAwKSxcbiAgICAgICAgfTtcblxuICAgICAgICBpZiAoIXBhcmFtcy5uZXdBY2NvdW50KSB7XG4gICAgICAgICAgICBhY2NvdW50ID0gYXdhaXQgdGhpcy5nZXRBY2NvdW50KHBhcmFtcy5hZGRyZXNzLCBmYWxzZSwgcGFyYW1zLndhaXRQYXJhbXMsIHBhcmVudFNwYW4pO1xuICAgICAgICB9XG5cbiAgICAgICAgaWYgKHBhcmFtcy5lbXVsYXRlQmFsYW5jZSkge1xuICAgICAgICAgICAgYWNjb3VudC5iYWxhbmNlID0gdGhpcy5iaWdCYWxhbmNlO1xuICAgICAgICB9XG5cbiAgICAgICAgcmV0dXJuIHRoaXMucmVxdWVzdENvcmUoJ2NvbnRyYWN0cy5ydW4uZmVlLm1zZycsIHtcbiAgICAgICAgICAgIGFkZHJlc3M6IHBhcmFtcy5hZGRyZXNzLFxuICAgICAgICAgICAgYWNjb3VudCxcbiAgICAgICAgICAgIG1lc3NhZ2VCYXNlNjQ6IHBhcmFtcy5tZXNzYWdlLm1lc3NhZ2VCb2R5QmFzZTY0LFxuICAgICAgICB9KTtcbiAgICB9XG5cbiAgICAvLyBBZGRyZXNzIHByb2Nlc3NpbmdcblxuICAgIGFzeW5jIGNvbnZlcnRBZGRyZXNzKFxuICAgICAgICBwYXJhbXM6IFRPTkNvbnRyYWN0Q29udmVydEFkZHJlc3NQYXJhbXMsXG4gICAgKTogUHJvbWlzZTxUT05Db250cmFjdENvbnZlcnRBZGRyZXNzUmVzdWx0PiB7XG4gICAgICAgIHJldHVybiB0aGlzLnJlcXVlc3RDb3JlKCdjb250cmFjdHMuYWRkcmVzcy5jb252ZXJ0JywgcGFyYW1zKTtcbiAgICB9XG5cbiAgICAvLyBJbnRlcm5hbHNcblxuICAgIGFzeW5jIGludGVybmFsRGVwbG95TmF0aXZlKHBhcmFtczogVE9OQ29udHJhY3REZXBsb3lQYXJhbXMpOiBQcm9taXNlPFRPTkNvbnRyYWN0RGVwbG95UmVzdWx0PiB7XG4gICAgICAgIHJldHVybiB0aGlzLnJlcXVlc3RDb3JlKCdjb250cmFjdHMuZGVwbG95Jywge1xuICAgICAgICAgICAgYWJpOiBwYXJhbXMucGFja2FnZS5hYmksXG4gICAgICAgICAgICBjb25zdHJ1Y3RvckhlYWRlcjogcGFyYW1zLmNvbnN0cnVjdG9ySGVhZGVyLFxuICAgICAgICAgICAgY29uc3RydWN0b3JQYXJhbXM6IHBhcmFtcy5jb25zdHJ1Y3RvclBhcmFtcyxcbiAgICAgICAgICAgIGluaXRQYXJhbXM6IHBhcmFtcy5pbml0UGFyYW1zLFxuICAgICAgICAgICAgaW1hZ2VCYXNlNjQ6IHBhcmFtcy5wYWNrYWdlLmltYWdlQmFzZTY0LFxuICAgICAgICAgICAga2V5UGFpcjogcGFyYW1zLmtleVBhaXIsXG4gICAgICAgIH0pO1xuICAgIH1cblxuXG4gICAgYXN5bmMgaW50ZXJuYWxSdW5OYXRpdmUocGFyYW1zOiBUT05Db250cmFjdFJ1blBhcmFtcyk6IFByb21pc2U8VE9OQ29udHJhY3RSdW5SZXN1bHQ+IHtcbiAgICAgICAgcmV0dXJuIHRoaXMucmVxdWVzdENvcmUoJ2NvbnRyYWN0cy5ydW4nLCB7XG4gICAgICAgICAgICBhZGRyZXNzOiBwYXJhbXMuYWRkcmVzcyxcbiAgICAgICAgICAgIGFiaTogcGFyYW1zLmFiaSxcbiAgICAgICAgICAgIGZ1bmN0aW9uTmFtZTogcGFyYW1zLmZ1bmN0aW9uTmFtZSxcbiAgICAgICAgICAgIGhlYWRlcjogcGFyYW1zLmhlYWRlcixcbiAgICAgICAgICAgIGlucHV0OiBwYXJhbXMuaW5wdXQsXG4gICAgICAgICAgICBrZXlQYWlyOiBwYXJhbXMua2V5UGFpcixcbiAgICAgICAgfSk7XG4gICAgfVxuXG5cbiAgICBhc3luYyByZXRyeUNhbGwoY2FsbDogKGluZGV4OiBudW1iZXIpID0+IFByb21pc2U8YW55Pik6IFByb21pc2U8YW55PiB7XG4gICAgICAgIGNvbnN0IHJldHJpZXNDb3VudCA9IHRoaXMuY29uZmlnLm1lc3NhZ2VSZXRyaWVzQ291bnQoKTtcbiAgICAgICAgZm9yIChsZXQgaSA9IDA7IGkgPD0gcmV0cmllc0NvdW50OyBpICs9IDEpIHtcbiAgICAgICAgICAgIGlmIChpID4gMCkge1xuICAgICAgICAgICAgICAgIHRoaXMuY29uZmlnLmxvZyhgUmV0cnkgIyR7aX1gKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIHRyeSB7XG4gICAgICAgICAgICAgICAgcmV0dXJuIGF3YWl0IGNhbGwoaSk7XG4gICAgICAgICAgICB9IGNhdGNoIChlcnJvcikge1xuICAgICAgICAgICAgICAgIC8vIHJldHJ5IGlmIG1lc3NhZ2UgZXhwaXJlZCBvciBpZiByZXNvbHZpbmcgcmV0dXJuZWQgdGhhdCBtZXNzYWdlIGV4cGlyZWQvcmVwbGF5XG4gICAgICAgICAgICAgICAgLy8gcHJvdGVjdGlvbiBlcnJvciBvciBpZiB0cmFuc2FjdGlvbiB3aXRoIG1lc3NhZ2UgZXhwaXJlZC9yZXBsYXkgcHJvdGVjdGlvbiBlcnJvclxuICAgICAgICAgICAgICAgIC8vIHJldHVybmVkXG4gICAgICAgICAgICAgICAgY29uc3QgaXNPcmlnaW5hbE9yUmVzb2x2ZWQgPSBleGl0Q29kZSA9PiAoXG4gICAgICAgICAgICAgICAgICAgIFRPTkNsaWVudEVycm9yLmlzT3JpZ2luYWxDb250cmFjdEVycm9yKGVycm9yLCBleGl0Q29kZSlcbiAgICAgICAgICAgICAgICAgICAgfHwgVE9OQ2xpZW50RXJyb3IuaXNSZXNvbHZlZENvbnRyYWN0RXJyb3JBZnRlckV4cGlyZShlcnJvciwgZXhpdENvZGUpXG4gICAgICAgICAgICAgICAgKTtcbiAgICAgICAgICAgICAgICBjb25zdCB1c2VSZXRyeSA9IGVycm9yLmNvZGUgPT09IFRPTkVycm9yQ29kZS5NRVNTQUdFX0VYUElSRURcbiAgICAgICAgICAgICAgICAgICAgfHwgaXNPcmlnaW5hbE9yUmVzb2x2ZWQoVE9OQ29udHJhY3RFeGl0Q29kZS5SRVBMQVlfUFJPVEVDVElPTilcbiAgICAgICAgICAgICAgICAgICAgfHwgaXNPcmlnaW5hbE9yUmVzb2x2ZWQoVE9OQ29udHJhY3RFeGl0Q29kZS5NRVNTQUdFX0VYUElSRUQpO1xuICAgICAgICAgICAgICAgIGlmICghdXNlUmV0cnkgfHwgaSA9PT0gcmV0cmllc0NvdW50KSB7XG4gICAgICAgICAgICAgICAgICAgIHRocm93IGVycm9yO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgICB0aHJvdyBUT05DbGllbnRFcnJvci5pbnRlcm5hbEVycm9yKFxuICAgICAgICAgICAgJ0FsbCByZXRyeSBhdHRlbXB0cyBmYWlsZWQnLFxuICAgICAgICAgICAgYXdhaXQgdGhpcy5jb21wbGV0ZUVycm9yRGF0YSgpLFxuICAgICAgICApO1xuICAgIH1cblxuXG4gICAgYXN5bmMgaW50ZXJuYWxEZXBsb3lKcyhcbiAgICAgICAgcGFyYW1zOiBUT05Db250cmFjdERlcGxveVBhcmFtcyxcbiAgICAgICAgcGFyZW50U3Bhbj86IChTcGFuIHwgU3BhbkNvbnRleHQpLFxuICAgICk6IFByb21pc2U8VE9OQ29udHJhY3REZXBsb3lSZXN1bHQ+IHtcbiAgICAgICAgdGhpcy5jb25maWcubG9nKCdEZXBsb3kgc3RhcnQnKTtcbiAgICAgICAgcmV0dXJuIHRoaXMucmV0cnlDYWxsKGFzeW5jIChyZXRyeUluZGV4KSA9PiB7XG4gICAgICAgICAgICBjb25zdCBkZXBsb3lNZXNzYWdlID0gYXdhaXQgdGhpcy5jcmVhdGVEZXBsb3lNZXNzYWdlKHBhcmFtcywgcmV0cnlJbmRleCk7XG4gICAgICAgICAgICBpZiAoYXdhaXQgdGhpcy5pc0RlcGxveWVkKGRlcGxveU1lc3NhZ2UuYWRkcmVzcywgcGFyZW50U3BhbikpIHtcbiAgICAgICAgICAgICAgICByZXR1cm4ge1xuICAgICAgICAgICAgICAgICAgICBhZGRyZXNzOiBkZXBsb3lNZXNzYWdlLmFkZHJlc3MsXG4gICAgICAgICAgICAgICAgICAgIGFscmVhZHlEZXBsb3llZDogdHJ1ZSxcbiAgICAgICAgICAgICAgICB9O1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgY29uc3QgcHJvY2Vzc2luZyA9IGF3YWl0IHRoaXMuc2VuZE1lc3NhZ2UoZGVwbG95TWVzc2FnZS5tZXNzYWdlLCBwYXJlbnRTcGFuKTtcbiAgICAgICAgICAgIHJldHVybiB0aGlzLndhaXRGb3JEZXBsb3lUcmFuc2FjdGlvbihkZXBsb3lNZXNzYWdlLCBwcm9jZXNzaW5nLCBwYXJlbnRTcGFuKTtcbiAgICAgICAgfSk7XG4gICAgfVxuXG5cbiAgICBhc3luYyBpbnRlcm5hbFJ1bkpzKFxuICAgICAgICBwYXJhbXM6IFRPTkNvbnRyYWN0UnVuUGFyYW1zLFxuICAgICAgICBwYXJlbnRTcGFuPzogKFNwYW4gfCBTcGFuQ29udGV4dCksXG4gICAgKTogUHJvbWlzZTxUT05Db250cmFjdFJ1blJlc3VsdD4ge1xuICAgICAgICB0aGlzLmNvbmZpZy5sb2coJ1J1biBzdGFydCcpO1xuICAgICAgICByZXR1cm4gdGhpcy5yZXRyeUNhbGwoYXN5bmMgKHJldHJ5SW5kZXgpID0+IHtcbiAgICAgICAgICAgIGNvbnN0IHJ1bk1lc3NhZ2UgPSBhd2FpdCB0aGlzLmNyZWF0ZVJ1bk1lc3NhZ2UocGFyYW1zLCByZXRyeUluZGV4KTtcbiAgICAgICAgICAgIGNvbnN0IHByb2Nlc3NpbmcgPSBhd2FpdCB0aGlzLnNlbmRNZXNzYWdlKHJ1bk1lc3NhZ2UubWVzc2FnZSwgcGFyZW50U3Bhbik7XG4gICAgICAgICAgICByZXR1cm4gdGhpcy53YWl0Rm9yUnVuVHJhbnNhY3Rpb24ocnVuTWVzc2FnZSwgcHJvY2Vzc2luZywgcGFyZW50U3Bhbik7XG4gICAgICAgIH0pO1xuICAgIH1cblxuXG4gICAgYXN5bmMgZ2V0QWNjb3VudChcbiAgICAgICAgYWRkcmVzczogc3RyaW5nLFxuICAgICAgICBhY3RpdmU6IGJvb2xlYW4sXG4gICAgICAgIHdhaXRQYXJhbXM/OiBUT05Db250cmFjdEFjY291bnRXYWl0UGFyYW1zLFxuICAgICAgICBwYXJlbnRTcGFuPzogKFNwYW4gfCBTcGFuQ29udGV4dCksXG4gICAgKTogUHJvbWlzZTxRQWNjb3VudD4ge1xuICAgICAgICBjb25zdCBmaWx0ZXI6IHsgW3N0cmluZ106IGFueSB9ID0ge1xuICAgICAgICAgICAgaWQ6IHsgZXE6IGFkZHJlc3MgfSxcbiAgICAgICAgfTtcbiAgICAgICAgaWYgKHdhaXRQYXJhbXMgJiYgd2FpdFBhcmFtcy50cmFuc2FjdGlvbkx0KSB7XG4gICAgICAgICAgICBmaWx0ZXIubGFzdF90cmFuc19sdCA9IHsgZ2U6IHdhaXRQYXJhbXMudHJhbnNhY3Rpb25MdCB9O1xuICAgICAgICB9XG4gICAgICAgIGlmIChhY3RpdmUpIHtcbiAgICAgICAgICAgIGZpbHRlci5hY2NfdHlwZSA9IHsgZXE6IFFBY2NvdW50VHlwZS5hY3RpdmUgfTtcbiAgICAgICAgfVxuXG4gICAgICAgIHRoaXMuY29uZmlnLmxvZygnZ2V0QWNjb3VudC4gRmlsdGVyJywgZmlsdGVyKTtcbiAgICAgICAgY29uc3QgYWNjb3VudHMgPSBhd2FpdCB0aGlzLnF1ZXJpZXMuYWNjb3VudHMucXVlcnkoe1xuICAgICAgICAgICAgZmlsdGVyLFxuICAgICAgICAgICAgcmVzdWx0OiAnaWQgYWNjX3R5cGUgYm9jIGNvZGVfaGFzaCBkYXRhX2hhc2ggYmFsYW5jZSBiYWxhbmNlX290aGVyIHsgY3VycmVuY3kgdmFsdWUgfSBsYXN0X3BhaWQnLFxuICAgICAgICAgICAgLi4uKHdhaXRQYXJhbXMgJiYgd2FpdFBhcmFtcy50aW1lb3V0ID8geyB0aW1lb3V0OiB3YWl0UGFyYW1zLnRpbWVvdXQgfSA6IHt9KSxcbiAgICAgICAgICAgIHBhcmVudFNwYW4sXG4gICAgICAgIH0pO1xuICAgICAgICBpZiAoYWNjb3VudHMubGVuZ3RoID09PSAwKSB7XG4gICAgICAgICAgICB0aHJvdyBUT05DbGllbnRFcnJvci5hY2NvdW50TWlzc2luZyhcbiAgICAgICAgICAgICAgICBhZGRyZXNzLFxuICAgICAgICAgICAgICAgIGF3YWl0IHRoaXMuY29tcGxldGVFcnJvckRhdGEoe1xuICAgICAgICAgICAgICAgICAgICBhZGRyZXNzLFxuICAgICAgICAgICAgICAgIH0pLFxuICAgICAgICAgICAgKTtcbiAgICAgICAgfVxuICAgICAgICBjb25zdCBhY2NvdW50ID0gYWNjb3VudHNbMF07XG4gICAgICAgIHJlbW92ZVR5cGVOYW1lKGFjY291bnQpO1xuICAgICAgICB0aGlzLmNvbmZpZy5sb2coJ2dldEFjY291bnQuIEFjY291bnQgcmVjZWl2ZWQnLCBhY2NvdW50KTtcbiAgICAgICAgcmV0dXJuIGFjY291bnQ7XG4gICAgfVxuXG4gICAgYXN5bmMgaW50ZXJuYWxSdW5Mb2NhbEpzKFxuICAgICAgICBwYXJhbXM6IFRPTkNvbnRyYWN0UnVuTG9jYWxQYXJhbXMsXG4gICAgICAgIHBhcmVudFNwYW4/OiAoU3BhbiB8IFNwYW5Db250ZXh0KSxcbiAgICApOiBQcm9taXNlPFRPTkNvbnRyYWN0UnVuTG9jYWxSZXN1bHQ+IHtcbiAgICAgICAgY29uc3QgYWRkcmVzcyA9IHBhcmFtcy5hZGRyZXNzO1xuICAgICAgICBpZiAoIWFkZHJlc3MpIHtcbiAgICAgICAgICAgIFRPTkNsaWVudEVycm9yLmFkZHJlc3NSZXF1aXJlZEZvclJ1bkxvY2FsKFxuICAgICAgICAgICAgICAgIGF3YWl0IHRoaXMuY29tcGxldGVFcnJvckRhdGEoe1xuICAgICAgICAgICAgICAgICAgICBhZGRyZXNzLFxuICAgICAgICAgICAgICAgICAgICBmdW5jdGlvbl9uYW1lOiBwYXJhbXMuZnVuY3Rpb25OYW1lLFxuICAgICAgICAgICAgICAgIH0pLFxuICAgICAgICAgICAgKTtcbiAgICAgICAgfVxuICAgICAgICBjb25zdCBhY2NvdW50ID0gcGFyYW1zLmFjY291bnQgfHwgKGF3YWl0IHRoaXMuZ2V0QWNjb3VudChcbiAgICAgICAgICAgIGFkZHJlc3MsXG4gICAgICAgICAgICBmYWxzZSxcbiAgICAgICAgICAgIHBhcmFtcy53YWl0UGFyYW1zLFxuICAgICAgICAgICAgcGFyZW50U3BhbixcbiAgICAgICAgKSk7XG4gICAgICAgIGlmICghYWNjb3VudC5jb2RlX2hhc2gpIHtcbiAgICAgICAgICAgIHRocm93IFRPTkNsaWVudEVycm9yLmFjY291bnRDb2RlTWlzc2luZyhcbiAgICAgICAgICAgICAgICBhZGRyZXNzLFxuICAgICAgICAgICAgICAgIChhY2NvdW50OiBhbnkpLmJhbGFuY2UsXG4gICAgICAgICAgICAgICAgYXdhaXQgdGhpcy5jb21wbGV0ZUVycm9yRGF0YSh7XG4gICAgICAgICAgICAgICAgICAgIGFkZHJlc3MsXG4gICAgICAgICAgICAgICAgICAgIGZ1bmN0aW9uX25hbWU6IHBhcmFtcy5mdW5jdGlvbk5hbWUsXG4gICAgICAgICAgICAgICAgfSksXG4gICAgICAgICAgICApO1xuICAgICAgICB9XG4gICAgICAgIHJldHVybiB0aGlzLnJlcXVlc3RDb3JlKCdjb250cmFjdHMucnVuLmxvY2FsJywge1xuICAgICAgICAgICAgYWRkcmVzcyxcbiAgICAgICAgICAgIGFjY291bnQsXG4gICAgICAgICAgICBhYmk6IHBhcmFtcy5hYmksXG4gICAgICAgICAgICBmdW5jdGlvbk5hbWU6IHBhcmFtcy5mdW5jdGlvbk5hbWUsXG4gICAgICAgICAgICBpbnB1dDogcGFyYW1zLmlucHV0LFxuICAgICAgICAgICAga2V5UGFpcjogcGFyYW1zLmtleVBhaXIsXG4gICAgICAgICAgICBmdWxsUnVuOiBwYXJhbXMuZnVsbFJ1bixcbiAgICAgICAgfSk7XG4gICAgfVxuXG4gICAgYXN5bmMgaW50ZXJuYWxSdW5NZXNzYWdlTG9jYWxKcyhcbiAgICAgICAgcGFyYW1zOiBUT05Db250cmFjdFJ1bk1lc3NhZ2VMb2NhbFBhcmFtcyxcbiAgICAgICAgcGFyZW50U3Bhbj86IChTcGFuIHwgU3BhbkNvbnRleHQpLFxuICAgICk6IFByb21pc2U8VE9OQ29udHJhY3RSdW5Mb2NhbFJlc3VsdD4ge1xuICAgICAgICBjb25zdCBhZGRyZXNzID0gcGFyYW1zLmFkZHJlc3M7XG4gICAgICAgIGlmICghYWRkcmVzcykge1xuICAgICAgICAgICAgdGhyb3cgVE9OQ2xpZW50RXJyb3IuYWRkcmVzc1JlcXVpcmVkRm9yUnVuTG9jYWwoYXdhaXQgdGhpcy5jb21wbGV0ZUVycm9yRGF0YSh7XG4gICAgICAgICAgICAgICAgYWRkcmVzcyxcbiAgICAgICAgICAgICAgICBmdW5jdGlvbl9uYW1lOiBwYXJhbXMuZnVuY3Rpb25OYW1lLFxuICAgICAgICAgICAgfSkpO1xuICAgICAgICB9XG4gICAgICAgIGNvbnN0IGFjY291bnQgPSBwYXJhbXMuYWNjb3VudCB8fCAoYXdhaXQgdGhpcy5nZXRBY2NvdW50KFxuICAgICAgICAgICAgYWRkcmVzcyxcbiAgICAgICAgICAgIGZhbHNlLFxuICAgICAgICAgICAgcGFyYW1zLndhaXRQYXJhbXMsXG4gICAgICAgICAgICBwYXJlbnRTcGFuLFxuICAgICAgICApKTtcbiAgICAgICAgaWYgKCFhY2NvdW50LmNvZGVfaGFzaCkge1xuICAgICAgICAgICAgdGhyb3cgVE9OQ2xpZW50RXJyb3IuYWNjb3VudENvZGVNaXNzaW5nKFxuICAgICAgICAgICAgICAgIGFkZHJlc3MsXG4gICAgICAgICAgICAgICAgKGFjY291bnQ6IGFueSkuYmFsYW5jZSxcbiAgICAgICAgICAgICAgICBhd2FpdCB0aGlzLmNvbXBsZXRlRXJyb3JEYXRhKHtcbiAgICAgICAgICAgICAgICAgICAgYWRkcmVzcyxcbiAgICAgICAgICAgICAgICAgICAgZnVuY3Rpb25fbmFtZTogcGFyYW1zLmZ1bmN0aW9uTmFtZSxcbiAgICAgICAgICAgICAgICB9KSxcbiAgICAgICAgICAgICk7XG4gICAgICAgIH1cbiAgICAgICAgcmV0dXJuIHRoaXMucmVxdWVzdENvcmUoJ2NvbnRyYWN0cy5ydW4ubG9jYWwubXNnJywge1xuICAgICAgICAgICAgYWRkcmVzcyxcbiAgICAgICAgICAgIGFjY291bnQsXG4gICAgICAgICAgICBhYmk6IHBhcmFtcy5hYmksXG4gICAgICAgICAgICBmdW5jdGlvbk5hbWU6IHBhcmFtcy5mdW5jdGlvbk5hbWUsXG4gICAgICAgICAgICBtZXNzYWdlQmFzZTY0OiBwYXJhbXMubWVzc2FnZUJvZHlCYXNlNjQsXG4gICAgICAgICAgICBmdWxsUnVuOiBwYXJhbXMuZnVsbFJ1bixcbiAgICAgICAgfSk7XG4gICAgfVxuXG4gICAgYXN5bmMgaW50ZXJuYWxTaWduKFxuICAgICAgICB1bnNpZ25lZDogVE9OQ29udHJhY3RVbnNpZ25lZE1lc3NhZ2UsXG4gICAgICAgIHNvdXJjZTogU2lnbmluZ1NvdXJjZSxcbiAgICApOiBQcm9taXNlPFNpZ25SZXN1bHQ+IHtcbiAgICAgICAgY29uc3QgbWVzc2FnZSA9IHtcbiAgICAgICAgICAgIGJhc2U2NDogdW5zaWduZWQuYnl0ZXNUb1NpZ25CYXNlNjQsXG4gICAgICAgIH07XG4gICAgICAgIGNvbnN0IGJveCA9IHNvdXJjZS5ib3g7XG4gICAgICAgIGlmIChib3gpIHtcbiAgICAgICAgICAgIHJldHVybiB7XG4gICAgICAgICAgICAgICAgc2lnbkJ5dGVzQmFzZTY0OiBhd2FpdCBib3guc2lnbihtZXNzYWdlLCBUT05PdXRwdXRFbmNvZGluZy5CYXNlNjQpLFxuICAgICAgICAgICAgICAgIHB1YmxpY0tleUhleDogYXdhaXQgYm94LmdldFB1YmxpY0tleSgpLFxuICAgICAgICAgICAgfTtcbiAgICAgICAgfVxuICAgICAgICBjb25zdCBrZXlzID0gc291cmNlLmtleXM7XG4gICAgICAgIGlmIChrZXlzKSB7XG4gICAgICAgICAgICBjb25zdCBzaWduS2V5cyA9IGF3YWl0IHRoaXMuY3J5cHRvLm5hY2xTaWduS2V5cGFpckZyb21TZWNyZXRLZXkoa2V5cy5zZWNyZXQpO1xuICAgICAgICAgICAgcmV0dXJuIHtcbiAgICAgICAgICAgICAgICBzaWduQnl0ZXNCYXNlNjQ6IGF3YWl0IHRoaXMuY3J5cHRvLm5hY2xTaWduRGV0YWNoZWQoXG4gICAgICAgICAgICAgICAgICAgIG1lc3NhZ2UsXG4gICAgICAgICAgICAgICAgICAgIHNpZ25LZXlzLnNlY3JldCxcbiAgICAgICAgICAgICAgICAgICAgVE9OT3V0cHV0RW5jb2RpbmcuQmFzZTY0LFxuICAgICAgICAgICAgICAgICksXG4gICAgICAgICAgICAgICAgcHVibGljS2V5SGV4OiBzaWduS2V5cy5wdWJsaWMsXG4gICAgICAgICAgICB9O1xuICAgICAgICB9XG4gICAgICAgIHRocm93IFRPTkNsaWVudEVycm9yLnNpZ25pbmdTb3VyY2VJc05vdFNwZWNpZmllZCgpO1xuICAgIH1cbn1cblxuVE9OQ29udHJhY3RzTW9kdWxlLm1vZHVsZU5hbWUgPSAnVE9OQ29udHJhY3RzTW9kdWxlJztcblxuY29uc3QgQkxPQ0tfRklFTERTID0gYFxuICAgIGlkXG4gICAgZ2VuX3V0aW1lXG4gICAgYWZ0ZXJfc3BsaXRcbiAgICB3b3JrY2hhaW5faWRcbiAgICBzaGFyZFxuICAgIGluX21zZ19kZXNjciB7XG4gICAgICAgIG1zZ19pZFxuICAgICAgICB0cmFuc2FjdGlvbl9pZFxuICAgIH1cbmA7XG5cbmNvbnN0IFRSQU5TQUNUSU9OX0ZJRUxEU19PUkRJTkFSWSA9IGBcbiAgICBpZFxuICAgIGFib3J0ZWRcbiAgICBjb21wdXRlIHtcbiAgICAgICAgc2tpcHBlZF9yZWFzb25cbiAgICAgICAgZXhpdF9jb2RlXG4gICAgICAgIHN1Y2Nlc3NcbiAgICAgICAgZ2FzX2ZlZXNcbiAgICB9XG4gICAgc3RvcmFnZSB7XG4gICAgICAgc3RhdHVzX2NoYW5nZVxuICAgICAgIHN0b3JhZ2VfZmVlc19jb2xsZWN0ZWRcbiAgICB9XG4gICAgYWN0aW9uIHtcbiAgICAgICAgc3VjY2Vzc1xuICAgICAgICB2YWxpZFxuICAgICAgICBub19mdW5kc1xuICAgICAgICByZXN1bHRfY29kZVxuICAgICAgICB0b3RhbF9md2RfZmVlc1xuICAgICAgICB0b3RhbF9hY3Rpb25fZmVlc1xuICAgIH1cbiAgICBpbl9tc2dcbiAgICBub3dcbiAgICBvdXRfbXNnc1xuICAgIG91dF9tZXNzYWdlcyB7XG4gICAgICAgIGlkXG4gICAgICAgIGJvZHlcbiAgICAgICAgbXNnX3R5cGVcbiAgICAgICAgdmFsdWVcbiAgICB9XG4gICAgc3RhdHVzXG4gICAgdG90YWxfZmVlc1xuYDtcbiJdfQ==