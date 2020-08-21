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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy9tb2R1bGVzL1RPTkNvbnRyYWN0c01vZHVsZS5qcyJdLCJuYW1lcyI6WyJUT05BZGRyZXNzU3RyaW5nVmFyaWFudCIsIkFjY291bnRJZCIsIkhleCIsIkJhc2U2NCIsIlRPTkNsaWVudFRyYW5zYWN0aW9uUGhhc2UiLCJzdG9yYWdlIiwiY29tcHV0ZVNraXBwZWQiLCJjb21wdXRlVm0iLCJhY3Rpb24iLCJ1bmtub3duIiwiVE9OQ2xpZW50Q29tcHV0ZVNraXBwZWRTdGF0dXMiLCJub1N0YXRlIiwiYmFkU3RhdGUiLCJub0dhcyIsIlRPTkNsaWVudFN0b3JhZ2VTdGF0dXMiLCJ1bmNoYW5nZWQiLCJmcm96ZW4iLCJkZWxldGVkIiwiUUluTXNnVHlwZSIsImV4dGVybmFsIiwiaWhyIiwiaW1tZWRpYXRlbHkiLCJ0cmFuc2l0IiwiZGlzY2FyZGVkRmluYWwiLCJkaXNjYXJkZWRUcmFuc2l0IiwiUU91dE1zZ1R5cGUiLCJvdXRNc2dOZXciLCJkZXF1ZXVlSW1tZWRpYXRlbHkiLCJkZXF1ZXVlIiwidHJhbnNpdFJlcXVpcmVkIiwibm9uZSIsIlFNZXNzYWdlVHlwZSIsImludGVybmFsIiwiZXh0SW4iLCJleHRPdXQiLCJRTWVzc2FnZVByb2Nlc3NpbmdTdGF0dXMiLCJxdWV1ZWQiLCJwcm9jZXNzaW5nIiwicHJlbGltaW5hcnkiLCJwcm9wb3NlZCIsImZpbmFsaXplZCIsInJlZnVzZWQiLCJ0cmFuc2l0aW5nIiwiUUJsb2NrUHJvY2Vzc2luZ1N0YXR1cyIsIlFTcGxpdFR5cGUiLCJzcGxpdCIsIm1lcmdlIiwiUUFjY291bnRUeXBlIiwidW5pbml0IiwiYWN0aXZlIiwiUVRyYW5zYWN0aW9uVHlwZSIsIm9yZGluYXJ5IiwidGljayIsInRvY2siLCJzcGxpdFByZXBhcmUiLCJzcGxpdEluc3RhbGwiLCJtZXJnZVByZXBhcmUiLCJtZXJnZUluc3RhbGwiLCJRVHJhbnNhY3Rpb25Qcm9jZXNzaW5nU3RhdHVzIiwiUUFjY291bnRTdGF0dXMiLCJub25FeGlzdCIsIlFBY2NvdW50U3RhdHVzQ2hhbmdlIiwiUUNvbXB1dGVUeXBlIiwic2tpcHBlZCIsInZtIiwiUVNraXBSZWFzb24iLCJRQm91bmNlVHlwZSIsIm5lZ0Z1bmRzIiwibm9GdW5kcyIsIm9rIiwiTUFTVEVSQ0hBSU5fSUQiLCJyZW1vdmVUeXBlTmFtZSIsIm9iaiIsIl9fdHlwZW5hbWUiLCJPYmplY3QiLCJ2YWx1ZXMiLCJmb3JFYWNoIiwidmFsdWUiLCJyZW1vdmVQcm9wcyIsInBhdGhzIiwicmVzdWx0IiwicGF0aCIsImRvdFBvcyIsImluZGV4T2YiLCJuYW1lIiwic3Vic3RyIiwiY2hpbGQiLCJyZWR1Y2VkQ2hpbGQiLCJzdGFydE1lc3NhZ2VUcmFjZVNwYW4iLCJ0cmFjZXIiLCJtZXNzYWdlSWQiLCJvcGVyYXRpb25OYW1lIiwidGFncyIsInRyYWNlSWQiLCJzcGFuSWQiLCJyb290Q29udGV4dCIsImV4dHJhY3QiLCJGT1JNQVRfVEVYVF9NQVAiLCJzdGFydFNwYW4iLCJjaGlsZE9mIiwidHJhY2VNZXNzYWdlIiwic3BhbiIsImZpbmlzaCIsImdldFNpZ25pbmdTb3VyY2UiLCJib3giLCJrZXlzIiwiZ2V0UHVibGljS2V5Iiwic2VjcmV0IiwiVE9OQ29udHJhY3RzTW9kdWxlIiwiY29uZmlnIiwiY29udGV4dCIsImdldE1vZHVsZSIsIlRPTkNvbmZpZ01vZHVsZSIsInF1ZXJpZXMiLCJUT05RdWVyaWVzTW9kdWxlIiwiY3J5cHRvIiwiVE9OQ3J5cHRvTW9kdWxlIiwicGFyYW1zIiwicGFyZW50U3BhbiIsImFjY291bnRzIiwicXVlcnkiLCJmaWx0ZXIiLCJpZCIsImVxIiwiYWRkcmVzcyIsImxlbmd0aCIsImJhbGFuY2VHcmFtcyIsImJhbGFuY2UiLCJ0cmFjZSIsInNldFRhZyIsImludGVybmFsRGVwbG95SnMiLCJpbnRlcm5hbFJ1bkpzIiwiaW50ZXJuYWxSdW5Mb2NhbEpzIiwiaW50ZXJuYWxSdW5NZXNzYWdlTG9jYWxKcyIsImNvcmVQYXJhbXMiLCJoYXNDb2RlIiwiYm9jQmFzZTY0IiwiY29kZUJhc2U2NCIsImRhdGFCYXNlNjQiLCJUT05DbGllbnRFcnJvciIsImNvbXBsZXRlRXJyb3JEYXRhIiwiYWRkcmVzc1JlcXVpcmVkRm9yUnVuTG9jYWwiLCJnZXRBY2NvdW50IiwidGltZW91dCIsIndhaXRGb3JUaW1lb3V0IiwiYWNjb3VudCIsImNvZGVfaGFzaCIsImFjY291bnRDb2RlTWlzc2luZyIsInBhcmFtc0Zyb21BY2NvdW50IiwiYm9jIiwibGFzdF9wYWlkIiwicmVxdWVzdENvcmUiLCJjb25zIiwiaXRlbSIsImludmFsaWRDb25zIiwiZW1wdHlUT05FcnJvckRhdGEiLCJwdXNoIiwicmV0cnlJbmRleCIsImxvZyIsInNpZ25pbmdCb3giLCJrZXlQYWlyIiwic291cmNlIiwiY3JlYXRlVW5zaWduZWREZXBsb3lNZXNzYWdlIiwidW5zaWduZWRNZXNzYWdlIiwiaW50ZXJuYWxTaWduIiwic2lnblBhcmFtcyIsImNyZWF0ZVNpZ25lZERlcGxveU1lc3NhZ2UiLCJhYmkiLCJjb25zdHJ1Y3RvckhlYWRlciIsImNvbnN0cnVjdG9yUGFyYW1zIiwiaW5pdFBhcmFtcyIsImltYWdlQmFzZTY0Iiwid29ya2NoYWluSWQiLCJtZXNzYWdlIiwiY3JlYXRlVW5zaWduZWRSdW5NZXNzYWdlIiwiY3JlYXRlU2lnbmVkUnVuTWVzc2FnZSIsImZ1bmN0aW9uTmFtZSIsImhlYWRlciIsInRyeUluZGV4IiwiaW5wdXQiLCJwdWJsaWNLZXlIZXgiLCJhZGRyZXNzSGV4IiwiZW5jb2RlZCIsImNyZWF0ZVNpZ25lZE1lc3NhZ2UiLCJ1bnNpZ25lZEJ5dGVzQmFzZTY0Iiwic2lnbkJ5dGVzQmFzZTY0IiwiZXhwaXJlIiwiZ2V0Qm9jSGFzaCIsIm1lc3NhZ2VCb2R5QmFzZTY0IiwiaGFzaCIsIkRhdGUiLCJub3ciLCJtZXNzYWdlX2lkIiwic2VuZE5vZGVSZXF1ZXN0RmFpbGVkIiwiTWF0aCIsInNlcnZlclRpbWVEZWx0YSIsImFicyIsIm91dE9mU3luY1RocmVzaG9sZCIsImRyb3BTZXJ2ZXJUaW1lRGVsdGEiLCJjbG9ja091dE9mU3luYyIsImZpbmRMYXN0U2hhcmRCbG9jayIsImxhc3RCbG9ja0lkIiwiZW5zdXJlTWVzc2FnZUlkIiwiaWRCYXNlNjQiLCJCdWZmZXIiLCJmcm9tIiwidG9TdHJpbmciLCJtZXNzYWdlU3BhbiIsInN0YXJ0Um9vdFNwYW4iLCJhZGRUYWdzIiwibWVzc2FnZVNpemUiLCJjZWlsIiwicG9zdFJlcXVlc3RzIiwiYm9keSIsInNlbmRpbmdUaW1lIiwicm91bmQiLCJyZXN1bHRGaWVsZHMiLCJzZW5kTWVzc2FnZSIsIndhaXRGb3JUcmFuc2FjdGlvbiIsIm1lc3NhZ2VQcm9jZXNzaW5nU3RhdGUiLCJ0cmFuc2FjdGlvbiIsImNoYWluIiwiYWRkaXRpb25hbEZpbHRlciIsImJsb2NrcyIsIndvcmtjaGFpbl9pZCIsIm9yZGVyQnkiLCJkaXJlY3Rpb24iLCJsaW1pdCIsInNoYXJkcyIsImFkZHJlc3NQYXJ0cyIsIndvcmtjaGFpbiIsIk51bWJlciIsInBhcnNlSW50IiwiZmluZExhc3RCbG9jayIsIm1hc3RlcmNoYWluTGFzdEJsb2NrIiwibm9CbG9ja3MiLCJ3b3JrY2hhaW5MYXN0QmxvY2siLCJhZnRlcl9tZXJnZSIsInNoYXJkIiwiaW52YWxpZEJsb2NrY2hhaW4iLCJtYXN0ZXIiLCJzaGFyZF9oYXNoZXMiLCJmaW5kTWF0Y2hpbmdTaGFyZCIsInNoYXJkQmxvY2siLCJyb290X2hhc2giLCJkZXNjciIsImJsb2NrIiwiY3VycmVudCIsIndhaXRGb3IiLCJwcmV2X3JlZiIsIk9SIiwicHJldl9hbHRfcmVmIiwiQkxPQ0tfRklFTERTIiwiYWZ0ZXJfc3BsaXQiLCJjaGVja1NoYXJkTWF0Y2giLCJuZSIsInRvdGFsU3RhcnQiLCJ0aW1lUmVwb3J0Iiwic3RvcFRpbWUiLCJtZXNzYWdlUHJvY2Vzc2luZ1RpbWVvdXQiLCJpbmZpbml0ZVdhaXQiLCJhZGRUaW1lb3V0IiwibWF4Iiwic3RhcnQiLCJ3YWl0TmV4dEJsb2NrIiwiZW5kIiwiZ2VuX3V0aW1lIiwicmVzb2x2ZWRFcnJvciIsImNvZGUiLCJUT05FcnJvckNvZGUiLCJXQUlUX0ZPUl9USU1FT1VUIiwiYmxvY2tfaWQiLCJtZXNzYWdlX3Byb2Nlc3Npbmdfc3RhdGUiLCJzZW5kaW5nX3RpbWUiLCJuZXR3b3JrU2lsZW50IiwiaW5Nc2ciLCJpbl9tc2dfZGVzY3IiLCJmaW5kIiwieCIsIm1zZ19pZCIsInRyYW5zYWN0aW9uSWQiLCJ0cmFuc2FjdGlvbl9pZCIsInRyU3RhcnQiLCJ0cmFuc2FjdGlvbnMiLCJUUkFOU0FDVElPTl9GSUVMRFNfT1JESU5BUlkiLCJNQVhfVElNRU9VVCIsImJsb2NrX3RpbWUiLCJtZXNzYWdlRXhwaXJlZCIsInRyYW5zYWN0aW9uV2FpdFRpbWVvdXQiLCJzcGxpY2UiLCJqb2luIiwiTUVTU0FHRV9FWFBJUkVEIiwiVFJBTlNBQ1RJT05fV0FJVF9USU1FT1VUIiwicmVzb2x2ZURldGFpbGVkRXJyb3IiLCJwcm9jZXNzVHJhbnNhY3Rpb24iLCJvcmlnaW5hbF9lcnJvciIsImZ1bmN0aW9uX25hbWUiLCJhY2NvdW50TWlzc2luZyIsImVycm9yIiwibWVzc2FnZUJhc2U2NCIsInRpbWUiLCJtYWluRXJyb3IiLCJhY2NfdHlwZSIsImlzRGVwbG95ZWQiLCJhbHJlYWR5RGVwbG95ZWQiLCJ3YWl0Rm9yRGVwbG95VHJhbnNhY3Rpb24iLCJkZXBsb3lNZXNzYWdlIiwicnVuTWVzc2FnZSIsIndhaXRGb3JSdW5UcmFuc2FjdGlvbiIsIndhaXRQYXJhbXMiLCJlbXVsYXRlQmFsYW5jZSIsImJpZ0JhbGFuY2UiLCJjcmVhdGVEZXBsb3lNZXNzYWdlIiwiY2FsY01zZ1Byb2Nlc3NGZWVzIiwibmV3QWNjb3VudCIsImZsb29yIiwiY2FsbCIsInJldHJpZXNDb3VudCIsIm1lc3NhZ2VSZXRyaWVzQ291bnQiLCJpIiwiaXNPcmlnaW5hbE9yUmVzb2x2ZWQiLCJleGl0Q29kZSIsImlzT3JpZ2luYWxDb250cmFjdEVycm9yIiwiaXNSZXNvbHZlZENvbnRyYWN0RXJyb3JBZnRlckV4cGlyZSIsInVzZVJldHJ5IiwiVE9OQ29udHJhY3RFeGl0Q29kZSIsIlJFUExBWV9QUk9URUNUSU9OIiwiaW50ZXJuYWxFcnJvciIsInJldHJ5Q2FsbCIsImNyZWF0ZVJ1bk1lc3NhZ2UiLCJ0cmFuc2FjdGlvbkx0IiwibGFzdF90cmFuc19sdCIsImdlIiwiZnVsbFJ1biIsInVuc2lnbmVkIiwiYmFzZTY0IiwiYnl0ZXNUb1NpZ25CYXNlNjQiLCJzaWduIiwiVE9OT3V0cHV0RW5jb2RpbmciLCJuYWNsU2lnbktleXBhaXJGcm9tU2VjcmV0S2V5Iiwic2lnbktleXMiLCJuYWNsU2lnbkRldGFjaGVkIiwic2lnbmluZ1NvdXJjZUlzTm90U3BlY2lmaWVkIiwiVE9OTW9kdWxlIiwibW9kdWxlTmFtZSJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7OztBQUtBOztBQXlEQTs7QUFDQTs7QUFDQTs7QUFDQTs7QUFDQTs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUVPLElBQU1BLHVCQUF1QixHQUFHO0FBQ25DQyxFQUFBQSxTQUFTLEVBQUUsV0FEd0I7QUFFbkNDLEVBQUFBLEdBQUcsRUFBRSxLQUY4QjtBQUduQ0MsRUFBQUEsTUFBTSxFQUFFO0FBSDJCLENBQWhDOztBQU1BLElBQU1DLHlCQUF5QixHQUFHO0FBQ3JDQyxFQUFBQSxPQUFPLEVBQUUsU0FENEI7QUFFckNDLEVBQUFBLGNBQWMsRUFBRSxnQkFGcUI7QUFHckNDLEVBQUFBLFNBQVMsRUFBRSxXQUgwQjtBQUlyQ0MsRUFBQUEsTUFBTSxFQUFFLFFBSjZCO0FBS3JDQyxFQUFBQSxPQUFPLEVBQUU7QUFMNEIsQ0FBbEM7O0FBUUEsSUFBTUMsNkJBQTZCLEdBQUc7QUFDekNDLEVBQUFBLE9BQU8sRUFBRSxDQURnQztBQUV6Q0MsRUFBQUEsUUFBUSxFQUFFLENBRitCO0FBR3pDQyxFQUFBQSxLQUFLLEVBQUU7QUFIa0MsQ0FBdEM7O0FBTUEsSUFBTUMsc0JBQXNCLEdBQUc7QUFDbENDLEVBQUFBLFNBQVMsRUFBRSxDQUR1QjtBQUVsQ0MsRUFBQUEsTUFBTSxFQUFFLENBRjBC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bkJ1TyxtQ0FBa0IvVSxNQUhDLEM7Ozs7Z0NBS1RpVixRQUFRLFU7O0FBTHRCM0osa0JBQUFBLGU7QUFLQUwsa0JBQUFBLFk7Ozs7c0JBR0Z6QywrQkFBZTJNLDJCQUFmLEU7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7RUFwcENrQ0MscUI7OztBQXdwQ2hEM08sa0JBQWtCLENBQUM0TyxVQUFuQixHQUFnQyxvQkFBaEM7QUFFQSxJQUFNNUYsWUFBWSwrSUFBbEI7QUFZQSxJQUFNZ0MsMkJBQTJCLCtlQUFqQyIsInNvdXJjZXNDb250ZW50IjpbIi8qXG4gKiBDb3B5cmlnaHQgMjAxOC0yMDIwIFRPTiBERVYgU09MVVRJT05TIExURC5cbiAqL1xuLy8gQGZsb3dcblxuaW1wb3J0IHtcbiAgICBUcmFjZXIsIEZPUk1BVF9URVhUX01BUCwgU3BhbiwgU3BhbkNvbnRleHQsXG59IGZyb20gJ29wZW50cmFjaW5nJztcbmltcG9ydCB0eXBlIHtcbiAgICBRQWNjb3VudCxcbiAgICBRQmxvY2ssXG4gICAgUU1lc3NhZ2UsXG4gICAgUVRyYW5zYWN0aW9uLFxuICAgIFRPTkNvbnRyYWN0QUJJLFxuICAgIFRPTkNvbnRyYWN0QWNjb3VudFdhaXRQYXJhbXMsXG4gICAgVE9OQ29udHJhY3RDb252ZXJ0QWRkcmVzc1BhcmFtcyxcbiAgICBUT05Db250cmFjdENvbnZlcnRBZGRyZXNzUmVzdWx0LFxuICAgIFRPTkNvbnRyYWN0Q3JlYXRlUnVuQm9keVBhcmFtcyxcbiAgICBUT05Db250cmFjdENyZWF0ZVJ1bkJvZHlSZXN1bHQsXG4gICAgVE9OQ29udHJhY3RDcmVhdGVTaWduZWREZXBsb3lNZXNzYWdlUGFyYW1zLFxuICAgIFRPTkNvbnRyYWN0Q3JlYXRlU2lnbmVkTWVzc2FnZVBhcmFtcyxcbiAgICBUT05Db250cmFjdENyZWF0ZVNpZ25lZFJ1bk1lc3NhZ2VQYXJhbXMsXG4gICAgVE9OQ29udHJhY3REZWNvZGVNZXNzYWdlQm9keVBhcmFtcyxcbiAgICBUT05Db250cmFjdERlY29kZU1lc3NhZ2VCb2R5UmVzdWx0LFxuICAgIFRPTkNvbnRyYWN0RGVjb2RlUnVuT3V0cHV0UGFyYW1zLFxuICAgIFRPTkNvbnRyYWN0RGVwbG95TWVzc2FnZSxcbiAgICBUT05Db250cmFjdERlcGxveVBhcmFtcyxcbiAgICBUT05Db250cmFjdERlcGxveVJlc3VsdCxcbiAgICBUT05Db250cmFjdENhbGNEZXBsb3lGZWVQYXJhbXMsXG4gICAgVE9OQ29udHJhY3RCb2MsXG4gICAgVE9OQ29udHJhY3RHZXRCb2NIYXNoUmVzdWx0LFxuICAgIFRPTkNvbnRyYWN0R2V0Q29kZUZyb21JbWFnZVBhcmFtcyxcbiAgICBUT05Db250cmFjdEdldENvZGVGcm9tSW1hZ2VSZXN1bHQsXG4gICAgVE9OQ29udHJhY3RHZXREZXBsb3lEYXRhUGFyYW1zLFxuICAgIFRPTkNvbnRyYWN0R2V0RGVwbG95RGF0YVJlc3VsdCxcbiAgICBUT05Db250cmFjdEdldEZ1bmN0aW9uSWRQYXJhbXMsXG4gICAgVE9OQ29udHJhY3RHZXRGdW5jdGlvbklkUmVzdWx0LFxuICAgIFRPTkNvbnRyYWN0TG9hZFBhcmFtcyxcbiAgICBUT05Db250cmFjdExvYWRSZXN1bHQsXG4gICAgVE9OQ29udHJhY3RDYWxjUnVuRmVlUGFyYW1zLFxuICAgIFRPTkNvbnRyYWN0Q2FsY0ZlZVJlc3VsdCxcbiAgICBUT05Db250cmFjdENhbGNNc2dQcm9jZXNzaW5nRmVlc1BhcmFtcyxcbiAgICBUT05Db250cmFjdE1lc3NhZ2UsXG4gICAgVE9OQ29udHJhY3RSdW5Mb2NhbFBhcmFtcyxcbiAgICBUT05Db250cmFjdFJ1bk1lc3NhZ2UsXG4gICAgVE9OQ29udHJhY3RSdW5QYXJhbXMsXG4gICAgVE9OQ29udHJhY3RSdW5SZXN1bHQsXG4gICAgVE9OQ29udHJhY3RzLFxuICAgIFRPTkNvbnRyYWN0VW5zaWduZWREZXBsb3lNZXNzYWdlLFxuICAgIFRPTkNvbnRyYWN0VW5zaWduZWRNZXNzYWdlLFxuICAgIFRPTkNvbnRyYWN0VW5zaWduZWRSdW5NZXNzYWdlLFxuICAgIFRPTkNvbnRyYWN0UnVuR2V0UGFyYW1zLFxuICAgIFRPTkNvbnRyYWN0UnVuR2V0UmVzdWx0LFxuICAgIFRPTkNvbnRyYWN0UnVuTWVzc2FnZUxvY2FsUGFyYW1zLFxuICAgIFRPTkNvbnRyYWN0UnVuTG9jYWxSZXN1bHQsXG4gICAgVE9OV2FpdEZvclRyYW5zYWN0aW9uUGFyYW1zLFxuICAgIFFTaGFyZEhhc2gsXG4gICAgVE9OTWVzc2FnZVByb2Nlc3NpbmdTdGF0ZSxcbiAgICBUT05TaWduaW5nQm94LFxuICAgIFRPTktleVBhaXJEYXRhLFxufSBmcm9tICcuLi8uLi90eXBlcyc7XG5cbmltcG9ydCB7IGVtcHR5VE9ORXJyb3JEYXRhLCBUT05DbGllbnRFcnJvciwgVE9OQ29udHJhY3RFeGl0Q29kZSwgVE9ORXJyb3JDb2RlIH0gZnJvbSAnLi4vVE9OQ2xpZW50RXJyb3InO1xuaW1wb3J0IHsgVE9OTW9kdWxlIH0gZnJvbSAnLi4vVE9OTW9kdWxlJztcbmltcG9ydCBUT05Db25maWdNb2R1bGUgZnJvbSAnLi9UT05Db25maWdNb2R1bGUnO1xuaW1wb3J0IFRPTkNyeXB0b01vZHVsZSwgeyBUT05PdXRwdXRFbmNvZGluZyB9IGZyb20gJy4vVE9OQ3J5cHRvTW9kdWxlJztcbmltcG9ydCBUT05RdWVyaWVzTW9kdWxlLCB7IE1BWF9USU1FT1VUIH0gZnJvbSAnLi9UT05RdWVyaWVzTW9kdWxlJztcblxuZXhwb3J0IGNvbnN0IFRPTkFkZHJlc3NTdHJpbmdWYXJpYW50ID0ge1xuICAgIEFjY291bnRJZDogJ0FjY291bnRJZCcsXG4gICAgSGV4OiAnSGV4JyxcbiAgICBCYXNlNjQ6ICdCYXNlNjQnLFxufTtcblxuZXhwb3J0IGNvbnN0IFRPTkNsaWVudFRyYW5zYWN0aW9uUGhhc2UgPSB7XG4gICAgc3RvcmFnZTogJ3N0b3JhZ2UnLFxuICAgIGNvbXB1dGVTa2lwcGVkOiAnY29tcHV0ZVNraXBwZWQnLFxuICAgIGNvbXB1dGVWbTogJ2NvbXB1dGVWbScsXG4gICAgYWN0aW9uOiAnYWN0aW9uJyxcbiAgICB1bmtub3duOiAndW5rbm93bicsXG59O1xuXG5leHBvcnQgY29uc3QgVE9OQ2xpZW50Q29tcHV0ZVNraXBwZWRTdGF0dXMgPSB7XG4gICAgbm9TdGF0ZTogMCxcbiAgICBiYWRTdGF0ZTogMSxcbiAgICBub0dhczogMixcbn07XG5cbmV4cG9ydCBjb25zdCBUT05DbGllbnRTdG9yYWdlU3RhdHVzID0ge1xuICAgIHVuY2hhbmdlZDogMCxcbiAgICBmcm96ZW46IDEsXG4gICAgZGVsZXRlZDogMixcbn07XG5cbmV4cG9ydCBjb25zdCBRSW5Nc2dUeXBlID0ge1xuICAgIGV4dGVybmFsOiAwLFxuICAgIGlocjogMSxcbiAgICBpbW1lZGlhdGVseTogMixcbiAgICBmaW5hbDogMyxcbiAgICB0cmFuc2l0OiA0LFxuICAgIGRpc2NhcmRlZEZpbmFsOiA1LFxuICAgIGRpc2NhcmRlZFRyYW5zaXQ6IDYsXG59O1xuXG5leHBvcnQgY29uc3QgUU91dE1zZ1R5cGUgPSB7XG4gICAgZXh0ZXJuYWw6IDAsXG4gICAgaW1tZWRpYXRlbHk6IDEsXG4gICAgb3V0TXNnTmV3OiAyLFxuICAgIHRyYW5zaXQ6IDMsXG4gICAgZGVxdWV1ZUltbWVkaWF0ZWx5OiA0LFxuICAgIGRlcXVldWU6IDUsXG4gICAgdHJhbnNpdFJlcXVpcmVkOiA2LFxuICAgIG5vbmU6IC0xLFxufTtcblxuZXhwb3J0IGNvbnN0IFFNZXNzYWdlVHlwZSA9IHtcbiAgICBpbnRlcm5hbDogMCxcbiAgICBleHRJbjogMSxcbiAgICBleHRPdXQ6IDIsXG59O1xuXG5leHBvcnQgY29uc3QgUU1lc3NhZ2VQcm9jZXNzaW5nU3RhdHVzID0ge1xuICAgIHVua25vd246IDAsXG4gICAgcXVldWVkOiAxLFxuICAgIHByb2Nlc3Npbmc6IDIsXG4gICAgcHJlbGltaW5hcnk6IDMsXG4gICAgcHJvcG9zZWQ6IDQsXG4gICAgZmluYWxpemVkOiA1LFxuICAgIHJlZnVzZWQ6IDYsXG4gICAgdHJhbnNpdGluZzogNyxcbn07XG5cbmV4cG9ydCBjb25zdCBRQmxvY2tQcm9jZXNzaW5nU3RhdHVzID0ge1xuICAgIHVua25vd246IDAsXG4gICAgcHJvcG9zZWQ6IDEsXG4gICAgZmluYWxpemVkOiAyLFxuICAgIHJlZnVzZWQ6IDMsXG59O1xuXG5leHBvcnQgY29uc3QgUVNwbGl0VHlwZSA9IHtcbiAgICBub25lOiAwLFxuICAgIHNwbGl0OiAyLFxuICAgIG1lcmdlOiAzLFxufTtcblxuZXhwb3J0IGNvbnN0IFFBY2NvdW50VHlwZSA9IHtcbiAgICB1bmluaXQ6IDAsXG4gICAgYWN0aXZlOiAxLFxuICAgIGZyb3plbjogMixcbn07XG5cbmV4cG9ydCBjb25zdCBRVHJhbnNhY3Rpb25UeXBlID0ge1xuICAgIG9yZGluYXJ5OiAwLFxuICAgIHN0b3JhZ2U6IDEsXG4gICAgdGljazogMixcbiAgICB0b2NrOiAzLFxuICAgIHNwbGl0UHJlcGFyZTogNCxcbiAgICBzcGxpdEluc3RhbGw6IDUsXG4gICAgbWVyZ2VQcmVwYXJlOiA2LFxuICAgIG1lcmdlSW5zdGFsbDogNyxcbn07XG5cbmV4cG9ydCBjb25zdCBRVHJhbnNhY3Rpb25Qcm9jZXNzaW5nU3RhdHVzID0ge1xuICAgIHVua25vd246IDAsXG4gICAgcHJlbGltaW5hcnk6IDEsXG4gICAgcHJvcG9zZWQ6IDIsXG4gICAgZmluYWxpemVkOiAzLFxuICAgIHJlZnVzZWQ6IDQsXG59O1xuXG5leHBvcnQgY29uc3QgUUFjY291bnRTdGF0dXMgPSB7XG4gICAgdW5pbml0OiAwLFxuICAgIGFjdGl2ZTogMSxcbiAgICBmcm96ZW46IDIsXG4gICAgbm9uRXhpc3Q6IDMsXG59O1xuXG5leHBvcnQgY29uc3QgUUFjY291bnRTdGF0dXNDaGFuZ2UgPSB7XG4gICAgdW5jaGFuZ2VkOiAwLFxuICAgIGZyb3plbjogMSxcbiAgICBkZWxldGVkOiAyLFxufTtcblxuZXhwb3J0IGNvbnN0IFFDb21wdXRlVHlwZSA9IHtcbiAgICBza2lwcGVkOiAwLFxuICAgIHZtOiAxLFxufTtcblxuZXhwb3J0IGNvbnN0IFFTa2lwUmVhc29uID0ge1xuICAgIG5vU3RhdGU6IDAsXG4gICAgYmFkU3RhdGU6IDEsXG4gICAgbm9HYXM6IDIsXG59O1xuXG5leHBvcnQgY29uc3QgUUJvdW5jZVR5cGUgPSB7XG4gICAgbmVnRnVuZHM6IDAsXG4gICAgbm9GdW5kczogMSxcbiAgICBvazogMixcbn07XG5cbmNvbnN0IE1BU1RFUkNIQUlOX0lEID0gLTE7XG5cbmZ1bmN0aW9uIHJlbW92ZVR5cGVOYW1lKG9iajogYW55KSB7XG4gICAgaWYgKG9iai5fX3R5cGVuYW1lKSB7XG4gICAgICAgIGRlbGV0ZSBvYmouX190eXBlbmFtZTtcbiAgICB9XG4gICAgT2JqZWN0LnZhbHVlcyhvYmopXG4gICAgICAgIC5mb3JFYWNoKCh2YWx1ZSkgPT4ge1xuICAgICAgICAgICAgaWYgKCEhdmFsdWUgJiYgdHlwZW9mIHZhbHVlID09PSAnb2JqZWN0Jykge1xuICAgICAgICAgICAgICAgIHJlbW92ZVR5cGVOYW1lKHZhbHVlKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfSk7XG59XG5cbmV4cG9ydCBmdW5jdGlvbiByZW1vdmVQcm9wcyhvYmo6IHt9LCBwYXRoczogc3RyaW5nW10pOiB7fSB7XG4gICAgbGV0IHJlc3VsdCA9IG9iajtcbiAgICBwYXRocy5mb3JFYWNoKChwYXRoKSA9PiB7XG4gICAgICAgIGNvbnN0IGRvdFBvcyA9IHBhdGguaW5kZXhPZignLicpO1xuICAgICAgICBpZiAoZG90UG9zIDwgMCkge1xuICAgICAgICAgICAgaWYgKHBhdGggaW4gcmVzdWx0KSB7XG4gICAgICAgICAgICAgICAgcmVzdWx0ID0geyAuLi5yZXN1bHQgfTtcbiAgICAgICAgICAgICAgICBkZWxldGUgcmVzdWx0W3BhdGhdO1xuICAgICAgICAgICAgfVxuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgY29uc3QgbmFtZSA9IHBhdGguc3Vic3RyKDAsIGRvdFBvcyk7XG4gICAgICAgICAgICBjb25zdCBjaGlsZCA9IHJlc3VsdFtuYW1lXTtcbiAgICAgICAgICAgIGlmIChjaGlsZCkge1xuICAgICAgICAgICAgICAgIGNvbnN0IHJlZHVjZWRDaGlsZCA9IHJlbW92ZVByb3BzKGNoaWxkLCBbcGF0aC5zdWJzdHIoZG90UG9zICsgMSldKTtcbiAgICAgICAgICAgICAgICBpZiAocmVkdWNlZENoaWxkICE9PSBjaGlsZCkge1xuICAgICAgICAgICAgICAgICAgICByZXN1bHQgPSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAuLi5yZXN1bHQsXG4gICAgICAgICAgICAgICAgICAgICAgICBbbmFtZV06IHJlZHVjZWRDaGlsZCxcbiAgICAgICAgICAgICAgICAgICAgfTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICB9KTtcbiAgICByZXR1cm4gcmVzdWx0O1xufVxuXG5mdW5jdGlvbiBzdGFydE1lc3NhZ2VUcmFjZVNwYW4oXG4gICAgdHJhY2VyOiBUcmFjZXIsXG4gICAgbWVzc2FnZUlkOiBzdHJpbmcsXG4gICAgb3BlcmF0aW9uTmFtZTogc3RyaW5nLFxuICAgIHRhZ3M6IHsgW3N0cmluZ106IGFueSB9LFxuKTogP1NwYW4ge1xuICAgIGlmICghbWVzc2FnZUlkKSB7XG4gICAgICAgIHJldHVybiBudWxsO1xuICAgIH1cbiAgICBjb25zdCB0cmFjZUlkID0gbWVzc2FnZUlkLnN1YnN0cigwLCAxNik7XG4gICAgY29uc3Qgc3BhbklkID0gbWVzc2FnZUlkLnN1YnN0cigxNiwgMTYpO1xuICAgIGxldCByb290Q29udGV4dDogP1NwYW5Db250ZXh0ID0gbnVsbDtcbiAgICB0cnkge1xuICAgICAgICByb290Q29udGV4dCA9IHRyYWNlci5leHRyYWN0KEZPUk1BVF9URVhUX01BUCwge1xuICAgICAgICAgICAgJ3ViZXItdHJhY2UtaWQnOiBgJHt0cmFjZUlkfToke3NwYW5JZH06MDoxYCxcbiAgICAgICAgfSk7XG4gICAgfSBjYXRjaCB7XG4gICAgICAgIC8vIHRyYWNlciBjYW4ndCBjcmVhdGUgamFlZ2VyIGNvbXBhdGlibGUgc3BhbixcbiAgICAgICAgLy8gc28gd2UgYXJlIGZhbGxiYWNrIHRvIHJldHVybiBudWxsXG4gICAgfVxuICAgIGlmICghcm9vdENvbnRleHQpIHtcbiAgICAgICAgcmV0dXJuIG51bGw7XG4gICAgfVxuICAgIHJldHVybiB0cmFjZXIuc3RhcnRTcGFuKG9wZXJhdGlvbk5hbWUsIHtcbiAgICAgICAgY2hpbGRPZjogcm9vdENvbnRleHQsXG4gICAgICAgIHRhZ3MsXG4gICAgfSk7XG59XG5cbmZ1bmN0aW9uIHRyYWNlTWVzc2FnZShcbiAgICB0cmFjZXI6IFRyYWNlcixcbiAgICBtZXNzYWdlSWQ6IHN0cmluZyxcbiAgICBvcGVyYXRpb25OYW1lOiBzdHJpbmcsXG4gICAgdGFnczogeyBbc3RyaW5nXTogYW55IH0sXG4pIHtcbiAgICBjb25zdCBzcGFuID0gc3RhcnRNZXNzYWdlVHJhY2VTcGFuKHRyYWNlciwgbWVzc2FnZUlkLCBvcGVyYXRpb25OYW1lLCB0YWdzKTtcbiAgICBpZiAoc3Bhbikge1xuICAgICAgICBzcGFuLmZpbmlzaCgpO1xuICAgIH1cbn1cblxudHlwZSBTaWduUmVzdWx0ID0ge1xuICAgIHNpZ25CeXRlc0Jhc2U2NDogc3RyaW5nLFxuICAgIHB1YmxpY0tleUhleDogc3RyaW5nLFxufTtcblxudHlwZSBTaWduaW5nU291cmNlID0ge1xuICAgIGJveDogP1RPTlNpZ25pbmdCb3gsXG4gICAga2V5czogVE9OS2V5UGFpckRhdGEsXG59XG5cbmFzeW5jIGZ1bmN0aW9uIGdldFNpZ25pbmdTb3VyY2UoXG4gICAgYm94PzogVE9OU2lnbmluZ0JveCxcbiAgICBrZXlzPzogVE9OS2V5UGFpckRhdGEsXG4pOiBQcm9taXNlPD9TaWduaW5nU291cmNlPiB7XG4gICAgaWYgKGJveCkge1xuICAgICAgICByZXR1cm4ge1xuICAgICAgICAgICAgYm94LFxuICAgICAgICAgICAga2V5czoge1xuICAgICAgICAgICAgICAgIHNlY3JldDogJycsXG4gICAgICAgICAgICAgICAgcHVibGljOiBhd2FpdCBib3guZ2V0UHVibGljS2V5KCksXG4gICAgICAgICAgICB9LFxuICAgICAgICB9O1xuICAgIH1cbiAgICBpZiAoa2V5cyAmJiBrZXlzLnNlY3JldCkge1xuICAgICAgICByZXR1cm4ge1xuICAgICAgICAgICAgYm94OiBudWxsLFxuICAgICAgICAgICAga2V5cyxcbiAgICAgICAgfTtcbiAgICB9XG4gICAgcmV0dXJuIG51bGw7XG59XG5cblxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgVE9OQ29udHJhY3RzTW9kdWxlIGV4dGVuZHMgVE9OTW9kdWxlIGltcGxlbWVudHMgVE9OQ29udHJhY3RzIHtcbiAgICBjb25maWc6IFRPTkNvbmZpZ01vZHVsZTtcbiAgICBjcnlwdG86IFRPTkNyeXB0b01vZHVsZTtcbiAgICBxdWVyaWVzOiBUT05RdWVyaWVzTW9kdWxlO1xuXG4gICAgYXN5bmMgc2V0dXAoKTogUHJvbWlzZTwqPiB7XG4gICAgICAgIHRoaXMuY29uZmlnID0gdGhpcy5jb250ZXh0LmdldE1vZHVsZShUT05Db25maWdNb2R1bGUpO1xuICAgICAgICB0aGlzLnF1ZXJpZXMgPSB0aGlzLmNvbnRleHQuZ2V0TW9kdWxlKFRPTlF1ZXJpZXNNb2R1bGUpO1xuICAgICAgICB0aGlzLmNyeXB0byA9IHRoaXMuY29udGV4dC5nZXRNb2R1bGUoVE9OQ3J5cHRvTW9kdWxlKTtcbiAgICB9XG5cbiAgICBhc3luYyBsb2FkKFxuICAgICAgICBwYXJhbXM6IFRPTkNvbnRyYWN0TG9hZFBhcmFtcyxcbiAgICAgICAgcGFyZW50U3Bhbj86IChTcGFuIHwgU3BhbkNvbnRleHQpLFxuICAgICk6IFByb21pc2U8VE9OQ29udHJhY3RMb2FkUmVzdWx0PiB7XG4gICAgICAgIGNvbnN0IGFjY291bnRzOiBRQWNjb3VudFtdID0gYXdhaXQgdGhpcy5xdWVyaWVzLmFjY291bnRzLnF1ZXJ5KHtcbiAgICAgICAgICAgIGZpbHRlcjoge1xuICAgICAgICAgICAgICAgIGlkOiB7IGVxOiBwYXJhbXMuYWRkcmVzcyB9LFxuICAgICAgICAgICAgfSxcbiAgICAgICAgICAgIHJlc3VsdDogJ2JhbGFuY2UnLFxuICAgICAgICAgICAgcGFyZW50U3BhbixcbiAgICAgICAgfSk7XG4gICAgICAgIGlmIChhY2NvdW50cyAmJiBhY2NvdW50cy5sZW5ndGggPiAwKSB7XG4gICAgICAgICAgICByZXR1cm4ge1xuICAgICAgICAgICAgICAgIGlkOiBwYXJhbXMuYWRkcmVzcyxcbiAgICAgICAgICAgICAgICBiYWxhbmNlR3JhbXM6IGFjY291bnRzWzBdLmJhbGFuY2UsXG4gICAgICAgICAgICB9O1xuICAgICAgICB9XG4gICAgICAgIHJldHVybiB7XG4gICAgICAgICAgICBpZDogbnVsbCxcbiAgICAgICAgICAgIGJhbGFuY2VHcmFtczogbnVsbCxcbiAgICAgICAgfTtcbiAgICB9XG5cblxuICAgIC8vIEZhY2FkZSBmdW5jdGlvbnNcblxuICAgIGFzeW5jIGRlcGxveShcbiAgICAgICAgcGFyYW1zOiBUT05Db250cmFjdERlcGxveVBhcmFtcyxcbiAgICAgICAgcGFyZW50U3Bhbj86IChTcGFuIHwgU3BhbkNvbnRleHQpLFxuICAgICk6IFByb21pc2U8VE9OQ29udHJhY3REZXBsb3lSZXN1bHQ+IHtcbiAgICAgICAgcmV0dXJuIHRoaXMuY29udGV4dC50cmFjZSgnY29udHJhY3RzLmRlcGxveScsIGFzeW5jIChzcGFuOiBTcGFuKSA9PiB7XG4gICAgICAgICAgICBzcGFuLnNldFRhZygncGFyYW1zJywgcmVtb3ZlUHJvcHMocGFyYW1zLCBbJ2tleVBhaXIuc2VjcmV0J10pKTtcbiAgICAgICAgICAgIHJldHVybiB0aGlzLmludGVybmFsRGVwbG95SnMocGFyYW1zLCBzcGFuKTtcbiAgICAgICAgfSwgcGFyZW50U3Bhbik7XG4gICAgfVxuXG5cbiAgICBhc3luYyBydW4oXG4gICAgICAgIHBhcmFtczogVE9OQ29udHJhY3RSdW5QYXJhbXMsXG4gICAgICAgIHBhcmVudFNwYW4/OiAoU3BhbiB8IFNwYW5Db250ZXh0KSxcbiAgICApOiBQcm9taXNlPFRPTkNvbnRyYWN0UnVuUmVzdWx0PiB7XG4gICAgICAgIHJldHVybiB0aGlzLmNvbnRleHQudHJhY2UoJ2NvbnRyYWN0cy5ydW4nLCBhc3luYyAoc3BhbjogU3BhbikgPT4ge1xuICAgICAgICAgICAgc3Bhbi5zZXRUYWcoJ3BhcmFtcycsIHJlbW92ZVByb3BzKHBhcmFtcywgWydrZXlQYWlyLnNlY3JldCddKSk7XG4gICAgICAgICAgICByZXR1cm4gdGhpcy5pbnRlcm5hbFJ1bkpzKHBhcmFtcywgc3Bhbik7XG4gICAgICAgIH0sIHBhcmVudFNwYW4pO1xuICAgIH1cblxuICAgIGFzeW5jIHJ1bkxvY2FsKFxuICAgICAgICBwYXJhbXM6IFRPTkNvbnRyYWN0UnVuTG9jYWxQYXJhbXMsXG4gICAgICAgIHBhcmVudFNwYW4/OiAoU3BhbiB8IFNwYW5Db250ZXh0KSxcbiAgICApOiBQcm9taXNlPFRPTkNvbnRyYWN0UnVuTG9jYWxSZXN1bHQ+IHtcbiAgICAgICAgcmV0dXJuIHRoaXMuY29udGV4dC50cmFjZSgnY29udHJhY3RzLnJ1bkxvY2FsJywgYXN5bmMgKHNwYW46IFNwYW4pID0+IHtcbiAgICAgICAgICAgIHNwYW4uc2V0VGFnKCdwYXJhbXMnLCByZW1vdmVQcm9wcyhwYXJhbXMsIFsna2V5UGFpci5zZWNyZXQnXSkpO1xuICAgICAgICAgICAgcmV0dXJuIHRoaXMuaW50ZXJuYWxSdW5Mb2NhbEpzKHBhcmFtcywgc3Bhbik7XG4gICAgICAgIH0sIHBhcmVudFNwYW4pO1xuICAgIH1cblxuICAgIGFzeW5jIHJ1bk1lc3NhZ2VMb2NhbChcbiAgICAgICAgcGFyYW1zOiBUT05Db250cmFjdFJ1bk1lc3NhZ2VMb2NhbFBhcmFtcyxcbiAgICAgICAgcGFyZW50U3Bhbj86IChTcGFuIHwgU3BhbkNvbnRleHQpLFxuICAgICk6IFByb21pc2U8VE9OQ29udHJhY3RSdW5Mb2NhbFJlc3VsdD4ge1xuICAgICAgICByZXR1cm4gdGhpcy5jb250ZXh0LnRyYWNlKCdydW5NZXNzYWdlTG9jYWwnLCBhc3luYyAoc3BhbjogU3BhbikgPT4ge1xuICAgICAgICAgICAgc3Bhbi5zZXRUYWcoJ3BhcmFtcycsIHJlbW92ZVByb3BzKHBhcmFtcywgWydrZXlQYWlyLnNlY3JldCddKSk7XG4gICAgICAgICAgICByZXR1cm4gdGhpcy5pbnRlcm5hbFJ1bk1lc3NhZ2VMb2NhbEpzKHBhcmFtcywgc3Bhbik7XG4gICAgICAgIH0sIHBhcmVudFNwYW4pO1xuICAgIH1cblxuICAgIGFzeW5jIHJ1bkdldChcbiAgICAgICAgcGFyYW1zOiBUT05Db250cmFjdFJ1bkdldFBhcmFtcyxcbiAgICApOiBQcm9taXNlPFRPTkNvbnRyYWN0UnVuR2V0UmVzdWx0PiB7XG4gICAgICAgIGxldCBjb3JlUGFyYW1zOiBUT05Db250cmFjdFJ1bkdldFBhcmFtcyA9IHBhcmFtcztcbiAgICAgICAgY29uc3QgaGFzQ29kZSA9IHBhcmFtcy5ib2NCYXNlNjQgfHwgKHBhcmFtcy5jb2RlQmFzZTY0ICYmIHBhcmFtcy5kYXRhQmFzZTY0KTtcbiAgICAgICAgaWYgKCFoYXNDb2RlKSB7XG4gICAgICAgICAgICBjb25zdCBhZGRyZXNzID0gcGFyYW1zLmFkZHJlc3M7XG4gICAgICAgICAgICBpZiAoIWFkZHJlc3MpIHtcbiAgICAgICAgICAgICAgICB0aHJvdyBUT05DbGllbnRFcnJvci5hZGRyZXNzUmVxdWlyZWRGb3JSdW5Mb2NhbChhd2FpdCB0aGlzLmNvbXBsZXRlRXJyb3JEYXRhKCkpO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgY29uc3QgYWNjb3VudDogYW55ID0gYXdhaXQgdGhpcy5nZXRBY2NvdW50KGFkZHJlc3MsIGZhbHNlLCB7XG4gICAgICAgICAgICAgICAgdGltZW91dDogdGhpcy5jb25maWcud2FpdEZvclRpbWVvdXQoKSxcbiAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgaWYgKCFhY2NvdW50LmNvZGVfaGFzaCkge1xuICAgICAgICAgICAgICAgIHRocm93IFRPTkNsaWVudEVycm9yLmFjY291bnRDb2RlTWlzc2luZyhcbiAgICAgICAgICAgICAgICAgICAgYWRkcmVzcyxcbiAgICAgICAgICAgICAgICAgICAgYWNjb3VudC5iYWxhbmNlLFxuICAgICAgICAgICAgICAgICAgICBhd2FpdCB0aGlzLmNvbXBsZXRlRXJyb3JEYXRhKCksXG4gICAgICAgICAgICAgICAgKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGNvbnN0IHBhcmFtc0Zyb21BY2NvdW50OiAkU2hhcGU8VE9OQ29udHJhY3RSdW5HZXRQYXJhbXM+ID0ge307XG4gICAgICAgICAgICBpZiAoYWNjb3VudC5ib2MpIHtcbiAgICAgICAgICAgICAgICBwYXJhbXNGcm9tQWNjb3VudC5ib2NCYXNlNjQgPSBhY2NvdW50LmJvYztcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGlmIChhY2NvdW50Lmxhc3RfcGFpZCkge1xuICAgICAgICAgICAgICAgIHBhcmFtc0Zyb21BY2NvdW50Lmxhc3RfcGFpZCA9IGFjY291bnQubGFzdF9wYWlkO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgaWYgKGFjY291bnQuYmFsYW5jZSkge1xuICAgICAgICAgICAgICAgIHBhcmFtc0Zyb21BY2NvdW50LmJhbGFuY2UgPSBhY2NvdW50LmJhbGFuY2U7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBjb3JlUGFyYW1zID0ge1xuICAgICAgICAgICAgICAgIC4uLnBhcmFtc0Zyb21BY2NvdW50LFxuICAgICAgICAgICAgICAgIC4uLnBhcmFtcyxcbiAgICAgICAgICAgIH07XG4gICAgICAgIH1cbiAgICAgICAgcmV0dXJuIHRoaXMucmVxdWVzdENvcmUoJ3R2bS5nZXQnLCBjb3JlUGFyYW1zKTtcbiAgICB9XG5cbiAgICBhcnJheUZyb21DT05TKGNvbnM6IGFueVtdKTogYW55W10ge1xuICAgICAgICBjb25zdCByZXN1bHQgPSBbXTtcbiAgICAgICAgbGV0IGl0ZW0gPSBjb25zO1xuICAgICAgICB3aGlsZSAoaXRlbSkge1xuICAgICAgICAgICAgaWYgKCFpdGVtLmxlbmd0aCA9PT0gMikge1xuICAgICAgICAgICAgICAgIHRocm93IFRPTkNsaWVudEVycm9yLmludmFsaWRDb25zKGVtcHR5VE9ORXJyb3JEYXRhKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIHJlc3VsdC5wdXNoKGl0ZW1bMF0pO1xuICAgICAgICAgICAgaXRlbSA9IGl0ZW1bMV07XG4gICAgICAgIH1cbiAgICAgICAgcmV0dXJuIHJlc3VsdDtcbiAgICB9XG5cblxuICAgIC8vIE1lc3NhZ2UgY3JlYXRpb25cblxuICAgIGFzeW5jIGNyZWF0ZURlcGxveU1lc3NhZ2UoXG4gICAgICAgIHBhcmFtczogVE9OQ29udHJhY3REZXBsb3lQYXJhbXMsXG4gICAgICAgIHJldHJ5SW5kZXg/OiBudW1iZXIsXG4gICAgKTogUHJvbWlzZTxUT05Db250cmFjdERlcGxveU1lc3NhZ2U+IHtcbiAgICAgICAgdGhpcy5jb25maWcubG9nKCdjcmVhdGVEZXBsb3lNZXNzYWdlJywgcGFyYW1zKTtcbiAgICAgICAgY29uc3Qgc291cmNlID0gYXdhaXQgZ2V0U2lnbmluZ1NvdXJjZShwYXJhbXMuc2lnbmluZ0JveCwgcGFyYW1zLmtleVBhaXIpO1xuICAgICAgICBpZiAoc291cmNlKSB7XG4gICAgICAgICAgICBjb25zdCB1bnNpZ25lZE1lc3NhZ2UgPSBhd2FpdCB0aGlzLmNyZWF0ZVVuc2lnbmVkRGVwbG95TWVzc2FnZSh7XG4gICAgICAgICAgICAgICAgLi4ucGFyYW1zLFxuICAgICAgICAgICAgICAgIGtleVBhaXI6IHNvdXJjZS5rZXlzLFxuICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICByZXR1cm4gdGhpcy5jcmVhdGVTaWduZWREZXBsb3lNZXNzYWdlKHtcbiAgICAgICAgICAgICAgICAuLi4oYXdhaXQgdGhpcy5pbnRlcm5hbFNpZ24odW5zaWduZWRNZXNzYWdlLnNpZ25QYXJhbXMsIHNvdXJjZSkpLFxuICAgICAgICAgICAgICAgIHVuc2lnbmVkTWVzc2FnZSxcbiAgICAgICAgICAgIH0pO1xuICAgICAgICB9XG4gICAgICAgIGNvbnN0IG1lc3NhZ2U6IFRPTkNvbnRyYWN0TWVzc2FnZSA9IGF3YWl0IHRoaXMucmVxdWVzdENvcmUoJ2NvbnRyYWN0cy5kZXBsb3kubWVzc2FnZScsIHtcbiAgICAgICAgICAgIGFiaTogcGFyYW1zLnBhY2thZ2UuYWJpLFxuICAgICAgICAgICAgY29uc3RydWN0b3JIZWFkZXI6IHBhcmFtcy5jb25zdHJ1Y3RvckhlYWRlcixcbiAgICAgICAgICAgIGNvbnN0cnVjdG9yUGFyYW1zOiBwYXJhbXMuY29uc3RydWN0b3JQYXJhbXMsXG4gICAgICAgICAgICBpbml0UGFyYW1zOiBwYXJhbXMuaW5pdFBhcmFtcyxcbiAgICAgICAgICAgIGltYWdlQmFzZTY0OiBwYXJhbXMucGFja2FnZS5pbWFnZUJhc2U2NCxcbiAgICAgICAgICAgIGtleVBhaXI6IHBhcmFtcy5rZXlQYWlyLFxuICAgICAgICAgICAgd29ya2NoYWluSWQ6IHBhcmFtcy53b3JrY2hhaW5JZCxcbiAgICAgICAgfSk7XG4gICAgICAgIHJldHVybiB7XG4gICAgICAgICAgICBhZGRyZXNzOiBtZXNzYWdlLmFkZHJlc3MsXG4gICAgICAgICAgICBtZXNzYWdlLFxuICAgICAgICB9O1xuICAgIH1cblxuXG4gICAgYXN5bmMgY3JlYXRlUnVuTWVzc2FnZShcbiAgICAgICAgcGFyYW1zOiBUT05Db250cmFjdFJ1blBhcmFtcyxcbiAgICAgICAgcmV0cnlJbmRleD86IG51bWJlcixcbiAgICApOiBQcm9taXNlPFRPTkNvbnRyYWN0UnVuTWVzc2FnZT4ge1xuICAgICAgICB0aGlzLmNvbmZpZy5sb2coJ2NyZWF0ZVJ1bk1lc3NhZ2UnLCBwYXJhbXMpO1xuICAgICAgICBjb25zdCBzb3VyY2UgPSBhd2FpdCBnZXRTaWduaW5nU291cmNlKHBhcmFtcy5zaWduaW5nQm94LCBwYXJhbXMua2V5UGFpcik7XG4gICAgICAgIGlmIChzb3VyY2UpIHtcbiAgICAgICAgICAgIGNvbnN0IHVuc2lnbmVkTWVzc2FnZSA9IGF3YWl0IHRoaXMuY3JlYXRlVW5zaWduZWRSdW5NZXNzYWdlKHBhcmFtcyk7XG4gICAgICAgICAgICByZXR1cm4gdGhpcy5jcmVhdGVTaWduZWRSdW5NZXNzYWdlKHtcbiAgICAgICAgICAgICAgICAuLi4oYXdhaXQgdGhpcy5pbnRlcm5hbFNpZ24odW5zaWduZWRNZXNzYWdlLnNpZ25QYXJhbXMsIHNvdXJjZSkpLFxuICAgICAgICAgICAgICAgIHVuc2lnbmVkTWVzc2FnZSxcbiAgICAgICAgICAgIH0pO1xuICAgICAgICB9XG4gICAgICAgIGNvbnN0IG1lc3NhZ2UgPSBhd2FpdCB0aGlzLnJlcXVlc3RDb3JlKCdjb250cmFjdHMucnVuLm1lc3NhZ2UnLCB7XG4gICAgICAgICAgICBhZGRyZXNzOiBwYXJhbXMuYWRkcmVzcyxcbiAgICAgICAgICAgIGFiaTogcGFyYW1zLmFiaSxcbiAgICAgICAgICAgIGZ1bmN0aW9uTmFtZTogcGFyYW1zLmZ1bmN0aW9uTmFtZSxcbiAgICAgICAgICAgIGhlYWRlcjogcGFyYW1zLmhlYWRlcixcbiAgICAgICAgICAgIHRyeUluZGV4OiByZXRyeUluZGV4LFxuICAgICAgICAgICAgaW5wdXQ6IHBhcmFtcy5pbnB1dCxcbiAgICAgICAgICAgIGtleVBhaXI6IHBhcmFtcy5rZXlQYWlyLFxuICAgICAgICB9KTtcbiAgICAgICAgcmV0dXJuIHtcbiAgICAgICAgICAgIGFkZHJlc3M6IHBhcmFtcy5hZGRyZXNzLFxuICAgICAgICAgICAgYWJpOiBwYXJhbXMuYWJpLFxuICAgICAgICAgICAgZnVuY3Rpb25OYW1lOiBwYXJhbXMuZnVuY3Rpb25OYW1lLFxuICAgICAgICAgICAgbWVzc2FnZSxcbiAgICAgICAgfTtcbiAgICB9XG5cbiAgICBhc3luYyBjcmVhdGVVbnNpZ25lZERlcGxveU1lc3NhZ2UoXG4gICAgICAgIHBhcmFtczogVE9OQ29udHJhY3REZXBsb3lQYXJhbXMsXG4gICAgICAgIHJldHJ5SW5kZXg/OiBudW1iZXIsXG4gICAgKTogUHJvbWlzZTxUT05Db250cmFjdFVuc2lnbmVkRGVwbG95TWVzc2FnZT4ge1xuICAgICAgICBjb25zdCByZXN1bHQ6IHtcbiAgICAgICAgICAgIGVuY29kZWQ6IFRPTkNvbnRyYWN0VW5zaWduZWRNZXNzYWdlLFxuICAgICAgICAgICAgYWRkcmVzc0hleDogc3RyaW5nLFxuICAgICAgICB9ID0gYXdhaXQgdGhpcy5yZXF1ZXN0Q29yZSgnY29udHJhY3RzLmRlcGxveS5lbmNvZGVfdW5zaWduZWRfbWVzc2FnZScsIHtcbiAgICAgICAgICAgIGFiaTogcGFyYW1zLnBhY2thZ2UuYWJpLFxuICAgICAgICAgICAgY29uc3RydWN0b3JIZWFkZXI6IHBhcmFtcy5jb25zdHJ1Y3RvckhlYWRlcixcbiAgICAgICAgICAgIHRyeUluZGV4OiByZXRyeUluZGV4LFxuICAgICAgICAgICAgY29uc3RydWN0b3JQYXJhbXM6IHBhcmFtcy5jb25zdHJ1Y3RvclBhcmFtcyxcbiAgICAgICAgICAgIGluaXRQYXJhbXM6IHBhcmFtcy5pbml0UGFyYW1zLFxuICAgICAgICAgICAgaW1hZ2VCYXNlNjQ6IHBhcmFtcy5wYWNrYWdlLmltYWdlQmFzZTY0LFxuICAgICAgICAgICAgcHVibGljS2V5SGV4OiBwYXJhbXMua2V5UGFpci5wdWJsaWMsXG4gICAgICAgICAgICB3b3JrY2hhaW5JZDogcGFyYW1zLndvcmtjaGFpbklkLFxuICAgICAgICB9KTtcbiAgICAgICAgcmV0dXJuIHtcbiAgICAgICAgICAgIGFkZHJlc3M6IHJlc3VsdC5hZGRyZXNzSGV4LFxuICAgICAgICAgICAgc2lnblBhcmFtczoge1xuICAgICAgICAgICAgICAgIC4uLnJlc3VsdC5lbmNvZGVkLFxuICAgICAgICAgICAgICAgIGFiaTogcGFyYW1zLnBhY2thZ2UuYWJpLFxuICAgICAgICAgICAgfSxcbiAgICAgICAgfTtcbiAgICB9XG5cblxuICAgIGFzeW5jIGNyZWF0ZVVuc2lnbmVkUnVuTWVzc2FnZShcbiAgICAgICAgcGFyYW1zOiBUT05Db250cmFjdFJ1blBhcmFtcyxcbiAgICAgICAgcmV0cnlJbmRleD86IG51bWJlcixcbiAgICApOiBQcm9taXNlPFRPTkNvbnRyYWN0VW5zaWduZWRSdW5NZXNzYWdlPiB7XG4gICAgICAgIGNvbnN0IHNpZ25QYXJhbXMgPSBhd2FpdCB0aGlzLnJlcXVlc3RDb3JlKCdjb250cmFjdHMucnVuLmVuY29kZV91bnNpZ25lZF9tZXNzYWdlJywge1xuICAgICAgICAgICAgYWRkcmVzczogcGFyYW1zLmFkZHJlc3MsXG4gICAgICAgICAgICBhYmk6IHBhcmFtcy5hYmksXG4gICAgICAgICAgICBmdW5jdGlvbk5hbWU6IHBhcmFtcy5mdW5jdGlvbk5hbWUsXG4gICAgICAgICAgICBoZWFkZXI6IHBhcmFtcy5oZWFkZXIsXG4gICAgICAgICAgICB0cnlJbmRleDogcmV0cnlJbmRleCxcbiAgICAgICAgICAgIGlucHV0OiBwYXJhbXMuaW5wdXQsXG4gICAgICAgIH0pO1xuICAgICAgICByZXR1cm4ge1xuICAgICAgICAgICAgYWRkcmVzczogcGFyYW1zLmFkZHJlc3MsXG4gICAgICAgICAgICBmdW5jdGlvbk5hbWU6IHBhcmFtcy5mdW5jdGlvbk5hbWUsXG4gICAgICAgICAgICBzaWduUGFyYW1zOiB7XG4gICAgICAgICAgICAgICAgLi4uc2lnblBhcmFtcyxcbiAgICAgICAgICAgICAgICBhYmk6IHBhcmFtcy5hYmksXG4gICAgICAgICAgICB9LFxuICAgICAgICB9O1xuICAgIH1cblxuXG4gICAgYXN5bmMgY3JlYXRlU2lnbmVkTWVzc2FnZShcbiAgICAgICAgcGFyYW1zOiBUT05Db250cmFjdENyZWF0ZVNpZ25lZE1lc3NhZ2VQYXJhbXMsXG4gICAgKTogUHJvbWlzZTxUT05Db250cmFjdE1lc3NhZ2U+IHtcbiAgICAgICAgcmV0dXJuIHRoaXMucmVxdWVzdENvcmUoJ2NvbnRyYWN0cy5lbmNvZGVfbWVzc2FnZV93aXRoX3NpZ24nLCBwYXJhbXMpO1xuICAgIH1cblxuXG4gICAgYXN5bmMgY3JlYXRlU2lnbmVkRGVwbG95TWVzc2FnZShcbiAgICAgICAgcGFyYW1zOiBUT05Db250cmFjdENyZWF0ZVNpZ25lZERlcGxveU1lc3NhZ2VQYXJhbXMsXG4gICAgKTogUHJvbWlzZTxUT05Db250cmFjdERlcGxveU1lc3NhZ2U+IHtcbiAgICAgICAgY29uc3QgbWVzc2FnZSA9IGF3YWl0IHRoaXMuY3JlYXRlU2lnbmVkTWVzc2FnZSh7XG4gICAgICAgICAgICBhYmk6IHBhcmFtcy51bnNpZ25lZE1lc3NhZ2Uuc2lnblBhcmFtcy5hYmksXG4gICAgICAgICAgICB1bnNpZ25lZEJ5dGVzQmFzZTY0OiBwYXJhbXMudW5zaWduZWRNZXNzYWdlLnNpZ25QYXJhbXMudW5zaWduZWRCeXRlc0Jhc2U2NCxcbiAgICAgICAgICAgIHNpZ25CeXRlc0Jhc2U2NDogcGFyYW1zLnNpZ25CeXRlc0Jhc2U2NCxcbiAgICAgICAgICAgIHB1YmxpY0tleUhleDogcGFyYW1zLnB1YmxpY0tleUhleCxcbiAgICAgICAgfSk7XG4gICAgICAgIG1lc3NhZ2UuZXhwaXJlID0gcGFyYW1zLnVuc2lnbmVkTWVzc2FnZS5zaWduUGFyYW1zLmV4cGlyZTtcbiAgICAgICAgcmV0dXJuIHtcbiAgICAgICAgICAgIGFkZHJlc3M6IHBhcmFtcy51bnNpZ25lZE1lc3NhZ2UuYWRkcmVzcyxcbiAgICAgICAgICAgIG1lc3NhZ2UsXG4gICAgICAgIH07XG4gICAgfVxuXG5cbiAgICBhc3luYyBjcmVhdGVTaWduZWRSdW5NZXNzYWdlKFxuICAgICAgICBwYXJhbXM6IFRPTkNvbnRyYWN0Q3JlYXRlU2lnbmVkUnVuTWVzc2FnZVBhcmFtcyxcbiAgICApOiBQcm9taXNlPFRPTkNvbnRyYWN0UnVuTWVzc2FnZT4ge1xuICAgICAgICBjb25zdCBtZXNzYWdlID0gYXdhaXQgdGhpcy5jcmVhdGVTaWduZWRNZXNzYWdlKHtcbiAgICAgICAgICAgIGFiaTogcGFyYW1zLnVuc2lnbmVkTWVzc2FnZS5zaWduUGFyYW1zLmFiaSxcbiAgICAgICAgICAgIHVuc2lnbmVkQnl0ZXNCYXNlNjQ6IHBhcmFtcy51bnNpZ25lZE1lc3NhZ2Uuc2lnblBhcmFtcy51bnNpZ25lZEJ5dGVzQmFzZTY0LFxuICAgICAgICAgICAgc2lnbkJ5dGVzQmFzZTY0OiBwYXJhbXMuc2lnbkJ5dGVzQmFzZTY0LFxuICAgICAgICAgICAgcHVibGljS2V5SGV4OiBwYXJhbXMucHVibGljS2V5SGV4LFxuICAgICAgICB9KTtcbiAgICAgICAgbWVzc2FnZS5leHBpcmUgPSBwYXJhbXMudW5zaWduZWRNZXNzYWdlLnNpZ25QYXJhbXMuZXhwaXJlO1xuICAgICAgICByZXR1cm4ge1xuICAgICAgICAgICAgYWRkcmVzczogcGFyYW1zLnVuc2lnbmVkTWVzc2FnZS5hZGRyZXNzLFxuICAgICAgICAgICAgYWJpOiBwYXJhbXMudW5zaWduZWRNZXNzYWdlLnNpZ25QYXJhbXMuYWJpLFxuICAgICAgICAgICAgZnVuY3Rpb25OYW1lOiBwYXJhbXMudW5zaWduZWRNZXNzYWdlLmZ1bmN0aW9uTmFtZSxcbiAgICAgICAgICAgIG1lc3NhZ2UsXG4gICAgICAgIH07XG4gICAgfVxuXG4gICAgYXN5bmMgZ2V0Q29kZUZyb21JbWFnZShcbiAgICAgICAgcGFyYW1zOiBUT05Db250cmFjdEdldENvZGVGcm9tSW1hZ2VQYXJhbXMsXG4gICAgKTogUHJvbWlzZTxUT05Db250cmFjdEdldENvZGVGcm9tSW1hZ2VSZXN1bHQ+IHtcbiAgICAgICAgcmV0dXJuIHRoaXMucmVxdWVzdENvcmUoJ2NvbnRyYWN0cy5pbWFnZS5jb2RlJywgcGFyYW1zKTtcbiAgICB9XG5cbiAgICBhc3luYyBnZXREZXBsb3lEYXRhKFxuICAgICAgICBwYXJhbXM6IFRPTkNvbnRyYWN0R2V0RGVwbG95RGF0YVBhcmFtcyxcbiAgICApOiBQcm9taXNlPFRPTkNvbnRyYWN0R2V0RGVwbG95RGF0YVJlc3VsdD4ge1xuICAgICAgICByZXR1cm4gdGhpcy5yZXF1ZXN0Q29yZSgnY29udHJhY3RzLmRlcGxveS5kYXRhJywgcGFyYW1zKTtcbiAgICB9XG5cbiAgICBhc3luYyBjcmVhdGVSdW5Cb2R5KFxuICAgICAgICBwYXJhbXM6IFRPTkNvbnRyYWN0Q3JlYXRlUnVuQm9keVBhcmFtcyxcbiAgICApOiBQcm9taXNlPFRPTkNvbnRyYWN0Q3JlYXRlUnVuQm9keVJlc3VsdD4ge1xuICAgICAgICByZXR1cm4gdGhpcy5yZXF1ZXN0Q29yZSgnY29udHJhY3RzLnJ1bi5ib2R5JywgcGFyYW1zKTtcbiAgICB9XG5cbiAgICBhc3luYyBnZXRGdW5jdGlvbklkKFxuICAgICAgICBwYXJhbXM6IFRPTkNvbnRyYWN0R2V0RnVuY3Rpb25JZFBhcmFtcyxcbiAgICApOiBQcm9taXNlPFRPTkNvbnRyYWN0R2V0RnVuY3Rpb25JZFJlc3VsdD4ge1xuICAgICAgICByZXR1cm4gdGhpcy5yZXF1ZXN0Q29yZSgnY29udHJhY3RzLmZ1bmN0aW9uLmlkJywgcGFyYW1zKTtcbiAgICB9XG5cbiAgICBhc3luYyBnZXRCb2NIYXNoKFxuICAgICAgICBwYXJhbXM6IFRPTkNvbnRyYWN0Qm9jLFxuICAgICk6IFByb21pc2U8VE9OQ29udHJhY3RHZXRCb2NIYXNoUmVzdWx0PiB7XG4gICAgICAgIHJldHVybiB0aGlzLnJlcXVlc3RDb3JlKCdjb250cmFjdHMuYm9jLmhhc2gnLCBwYXJhbXMpO1xuICAgIH1cblxuICAgIGFzeW5jIHBhcnNlTWVzc2FnZShcbiAgICAgICAgcGFyYW1zOiBUT05Db250cmFjdEJvYyxcbiAgICApOiBQcm9taXNlPFFNZXNzYWdlPiB7XG4gICAgICAgIHJldHVybiB0aGlzLnJlcXVlc3RDb3JlKCdjb250cmFjdHMucGFyc2UubWVzc2FnZScsIHBhcmFtcyk7XG4gICAgfVxuXG4gICAgLy8gTWVzc2FnZSBwYXJzaW5nXG5cbiAgICBhc3luYyBkZWNvZGVSdW5PdXRwdXQoXG4gICAgICAgIHBhcmFtczogVE9OQ29udHJhY3REZWNvZGVSdW5PdXRwdXRQYXJhbXMsXG4gICAgKTogUHJvbWlzZTxUT05Db250cmFjdFJ1blJlc3VsdD4ge1xuICAgICAgICByZXR1cm4gdGhpcy5yZXF1ZXN0Q29yZSgnY29udHJhY3RzLnJ1bi5vdXRwdXQnLCBwYXJhbXMpO1xuICAgIH1cblxuXG4gICAgYXN5bmMgZGVjb2RlSW5wdXRNZXNzYWdlQm9keShcbiAgICAgICAgcGFyYW1zOiBUT05Db250cmFjdERlY29kZU1lc3NhZ2VCb2R5UGFyYW1zLFxuICAgICk6IFByb21pc2U8VE9OQ29udHJhY3REZWNvZGVNZXNzYWdlQm9keVJlc3VsdD4ge1xuICAgICAgICByZXR1cm4gdGhpcy5yZXF1ZXN0Q29yZSgnY29udHJhY3RzLnJ1bi51bmtub3duLmlucHV0JywgcGFyYW1zKTtcbiAgICB9XG5cblxuICAgIGFzeW5jIGRlY29kZU91dHB1dE1lc3NhZ2VCb2R5KFxuICAgICAgICBwYXJhbXM6IFRPTkNvbnRyYWN0RGVjb2RlTWVzc2FnZUJvZHlQYXJhbXMsXG4gICAgKTogUHJvbWlzZTxUT05Db250cmFjdERlY29kZU1lc3NhZ2VCb2R5UmVzdWx0PiB7XG4gICAgICAgIHJldHVybiB0aGlzLnJlcXVlc3RDb3JlKCdjb250cmFjdHMucnVuLnVua25vd24ub3V0cHV0JywgcGFyYW1zKTtcbiAgICB9XG5cbiAgICAvLyBNZXNzYWdlIHByb2Nlc3NpbmdcblxuICAgIGFzeW5jIGVuc3VyZU1lc3NhZ2VJZChtZXNzYWdlOiBUT05Db250cmFjdE1lc3NhZ2UpOiBQcm9taXNlPHN0cmluZz4ge1xuICAgICAgICByZXR1cm4gbWVzc2FnZS5tZXNzYWdlSWQgfHwgYXdhaXQgKGFzeW5jICgpID0+IHtcbiAgICAgICAgICAgIGNvbnN0IGlkID0gKGF3YWl0IHRoaXMuZ2V0Qm9jSGFzaCh7XG4gICAgICAgICAgICAgICAgYm9jQmFzZTY0OiBtZXNzYWdlLm1lc3NhZ2VCb2R5QmFzZTY0LFxuICAgICAgICAgICAgfSkpLmhhc2g7XG4gICAgICAgICAgICBtZXNzYWdlLm1lc3NhZ2VJZCA9IGlkO1xuICAgICAgICAgICAgcmV0dXJuIGlkO1xuICAgICAgICB9KSgpO1xuICAgIH1cblxuICAgIGFzeW5jIHNlbmRNZXNzYWdlKFxuICAgICAgICBwYXJhbXM6IFRPTkNvbnRyYWN0TWVzc2FnZSxcbiAgICAgICAgcGFyZW50U3Bhbj86IChTcGFuIHwgU3BhbkNvbnRleHQpLFxuICAgICk6IFByb21pc2U8VE9OTWVzc2FnZVByb2Nlc3NpbmdTdGF0ZT4ge1xuICAgICAgICBjb25zdCBleHBpcmUgPSBwYXJhbXMuZXhwaXJlO1xuICAgICAgICBpZiAoZXhwaXJlICYmIChEYXRlLm5vdygpID4gZXhwaXJlICogMTAwMCkpIHtcbiAgICAgICAgICAgIHRocm93IFRPTkNsaWVudEVycm9yLnNlbmROb2RlUmVxdWVzdEZhaWxlZChcbiAgICAgICAgICAgICAgICAnTWVzc2FnZSBhbHJlYWR5IGV4cGlyZWQnLFxuICAgICAgICAgICAgICAgIGF3YWl0IHRoaXMuY29tcGxldGVFcnJvckRhdGEoe1xuICAgICAgICAgICAgICAgICAgICBhZGRyZXNzOiBwYXJhbXMuYWRkcmVzcyxcbiAgICAgICAgICAgICAgICAgICAgbWVzc2FnZV9pZDogcGFyYW1zLm1lc3NhZ2VJZCxcbiAgICAgICAgICAgICAgICB9KSxcbiAgICAgICAgICAgICk7XG4gICAgICAgIH1cbiAgICAgICAgY29uc3Qgc2VydmVyVGltZURlbHRhID0gTWF0aC5hYnMoYXdhaXQgdGhpcy5xdWVyaWVzLnNlcnZlclRpbWVEZWx0YShwYXJlbnRTcGFuKSk7XG4gICAgICAgIGlmIChzZXJ2ZXJUaW1lRGVsdGEgPiB0aGlzLmNvbmZpZy5vdXRPZlN5bmNUaHJlc2hvbGQoKSkge1xuICAgICAgICAgICAgdGhpcy5xdWVyaWVzLmRyb3BTZXJ2ZXJUaW1lRGVsdGEoKTtcbiAgICAgICAgICAgIHRocm93IFRPTkNsaWVudEVycm9yLmNsb2NrT3V0T2ZTeW5jKGF3YWl0IHRoaXMuY29tcGxldGVFcnJvckRhdGEoKSk7XG4gICAgICAgIH1cbiAgICAgICAgY29uc3QgbGFzdEJsb2NrSWQgPSBhd2FpdCB0aGlzLmZpbmRMYXN0U2hhcmRCbG9jayhwYXJhbXMuYWRkcmVzcyk7XG4gICAgICAgIGNvbnN0IGlkID0gYXdhaXQgdGhpcy5lbnN1cmVNZXNzYWdlSWQocGFyYW1zKTtcbiAgICAgICAgY29uc3QgaWRCYXNlNjQgPSBCdWZmZXIuZnJvbShpZCwgJ2hleCcpLnRvU3RyaW5nKCdiYXNlNjQnKTtcbiAgICAgICAgY29uc3QgbWVzc2FnZVNwYW4gPSB0aGlzLmNvbnRleHQuc3RhcnRSb290U3BhbihcbiAgICAgICAgICAgIGlkLnN1YnN0cigwLCAxNiksXG4gICAgICAgICAgICBpZC5zdWJzdHIoMTYsIDE2KSxcbiAgICAgICAgICAgICdtZXNzYWdlUHJvY2Vzc2luZycsXG4gICAgICAgICk7XG4gICAgICAgIG1lc3NhZ2VTcGFuLmFkZFRhZ3Moe1xuICAgICAgICAgICAgbWVzc2FnZUlkOiBpZCxcbiAgICAgICAgICAgIG1lc3NhZ2VTaXplOiBNYXRoLmNlaWwocGFyYW1zLm1lc3NhZ2VCb2R5QmFzZTY0Lmxlbmd0aCAqIDMgLyA0KSxcbiAgICAgICAgICAgIGFkZHJlc3M6IHBhcmFtcy5hZGRyZXNzLFxuICAgICAgICAgICAgZXhwaXJlOiBwYXJhbXMuZXhwaXJlLFxuICAgICAgICB9KTtcbiAgICAgICAgYXdhaXQgdGhpcy5xdWVyaWVzLnBvc3RSZXF1ZXN0cyhbXG4gICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgaWQ6IGlkQmFzZTY0LFxuICAgICAgICAgICAgICAgIGJvZHk6IHBhcmFtcy5tZXNzYWdlQm9keUJhc2U2NCxcbiAgICAgICAgICAgIH0sXG4gICAgICAgIF0sIHBhcmVudFNwYW4pO1xuICAgICAgICBtZXNzYWdlU3Bhbi5maW5pc2goKTtcbiAgICAgICAgdGhpcy5jb25maWcubG9nKCdzZW5kTWVzc2FnZS4gUmVxdWVzdCBwb3N0ZWQnLCBpZCk7XG4gICAgICAgIHJldHVybiB7XG4gICAgICAgICAgICBsYXN0QmxvY2tJZCxcbiAgICAgICAgICAgIHNlbmRpbmdUaW1lOiBNYXRoLnJvdW5kKERhdGUubm93KCkgLyAxMDAwKSxcbiAgICAgICAgfTtcbiAgICB9XG5cbiAgICBhc3luYyBwcm9jZXNzTWVzc2FnZShcbiAgICAgICAgbWVzc2FnZTogVE9OQ29udHJhY3RNZXNzYWdlLFxuICAgICAgICByZXN1bHRGaWVsZHM6IHN0cmluZyxcbiAgICAgICAgcGFyZW50U3Bhbj86IChTcGFuIHwgU3BhbkNvbnRleHQpLFxuICAgICAgICByZXRyeUluZGV4PzogbnVtYmVyLFxuICAgICAgICBhZGRyZXNzPzogc3RyaW5nLFxuICAgICAgICBhYmk/OiBUT05Db250cmFjdEFCSSxcbiAgICAgICAgZnVuY3Rpb25OYW1lPzogc3RyaW5nLFxuICAgICk6IFByb21pc2U8UVRyYW5zYWN0aW9uPiB7XG4gICAgICAgIGNvbnN0IHByb2Nlc3NpbmcgPSBhd2FpdCB0aGlzLnNlbmRNZXNzYWdlKG1lc3NhZ2UsIHBhcmVudFNwYW4pO1xuICAgICAgICBjb25zdCB7IHRyYW5zYWN0aW9uIH0gPSBhd2FpdCB0aGlzLndhaXRGb3JUcmFuc2FjdGlvbih7XG4gICAgICAgICAgICBtZXNzYWdlLFxuICAgICAgICAgICAgbWVzc2FnZVByb2Nlc3NpbmdTdGF0ZTogcHJvY2Vzc2luZyxcbiAgICAgICAgICAgIHBhcmVudFNwYW4sXG4gICAgICAgICAgICBhYmksXG4gICAgICAgICAgICBmdW5jdGlvbk5hbWUsXG4gICAgICAgIH0pO1xuICAgICAgICByZXR1cm4gdHJhbnNhY3Rpb247XG4gICAgfVxuXG5cbiAgICBhc3luYyBmaW5kTGFzdEJsb2NrKGNoYWluOiBudW1iZXIsIHJlc3VsdDogc3RyaW5nLCBhZGRpdGlvbmFsRmlsdGVyPzogYW55KTogUHJvbWlzZTw/YW55PiB7XG4gICAgICAgIGNvbnN0IGJsb2NrcyA9IGF3YWl0IHRoaXMucXVlcmllcy5ibG9ja3MucXVlcnkoe1xuICAgICAgICAgICAgZmlsdGVyOiB7IHdvcmtjaGFpbl9pZDogeyBlcTogY2hhaW4gfSwgLi4uKGFkZGl0aW9uYWxGaWx0ZXIgfHwge30pIH0sXG4gICAgICAgICAgICByZXN1bHQsXG4gICAgICAgICAgICBvcmRlckJ5OiBbXG4gICAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgICAgICBwYXRoOiAnc2VxX25vJyxcbiAgICAgICAgICAgICAgICAgICAgZGlyZWN0aW9uOiAnREVTQycsXG4gICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgIF0sXG4gICAgICAgICAgICBsaW1pdDogMSxcbiAgICAgICAgfSk7XG4gICAgICAgIHJldHVybiBibG9ja3MubGVuZ3RoID4gMCA/IGJsb2Nrc1swXSA6IG51bGw7XG4gICAgfVxuXG4gICAgYXN5bmMgZmluZE1hdGNoaW5nU2hhcmQoc2hhcmRzOiBRU2hhcmRIYXNoW10sIGFkZHJlc3M6IHN0cmluZyk6IFByb21pc2U8P1FTaGFyZEhhc2g+IHtcbiAgICAgICAgcmV0dXJuIHRoaXMucmVxdWVzdENvcmUoJ2NvbnRyYWN0cy5maW5kLnNoYXJkJywge1xuICAgICAgICAgICAgc2hhcmRzLFxuICAgICAgICAgICAgYWRkcmVzcyxcbiAgICAgICAgfSk7XG4gICAgfVxuXG4gICAgYXN5bmMgZmluZExhc3RTaGFyZEJsb2NrKGFkZHJlc3M6IHN0cmluZyk6IFByb21pc2U8c3RyaW5nPiB7XG4gICAgICAgIGNvbnN0IGFkZHJlc3NQYXJ0cyA9IGFkZHJlc3Muc3BsaXQoJzonKTtcbiAgICAgICAgY29uc3Qgd29ya2NoYWluID0gYWRkcmVzc1BhcnRzLmxlbmd0aCA+IDEgPyBOdW1iZXIucGFyc2VJbnQoYWRkcmVzc1BhcnRzWzBdLCAxMCkgOiAwO1xuXG5cbiAgICAgICAgLy8gaWYgYWNjb3VudCByZXNpZGVzIGluIG1hc3RlciBjaGFpbiB0aGVuIHN0YXJ0aW5nIHBvaW50IGlzIGxhc3QgbWFzdGVyIGNoYWluIGJsb2NrXG4gICAgICAgIC8vIGdlbmVyYXRlZCBiZWZvcmUgbWVzc2FnZSB3YXMgc2VudFxuICAgICAgICBjb25zdCBtYXN0ZXJjaGFpbkxhc3RCbG9jayA9IGF3YWl0IHRoaXMuZmluZExhc3RCbG9jayhcbiAgICAgICAgICAgIE1BU1RFUkNIQUlOX0lELFxuICAgICAgICAgICAgJ2lkIG1hc3RlciB7IHNoYXJkX2hhc2hlcyB7IHdvcmtjaGFpbl9pZCBzaGFyZCBkZXNjciB7IHJvb3RfaGFzaCB9IH0gfScsXG4gICAgICAgICk7XG5cbiAgICAgICAgLy8gaWYgYWNjb3VudCByZXNpZGVzIGluIG1hc3RlcmNoYWluIHRoZW4gc3RhcnRpbmcgcG9pbnQgaXMgbGFzdCBtYXN0ZXJjaGFpbiBibG9ja1xuICAgICAgICBpZiAod29ya2NoYWluID09PSBNQVNURVJDSEFJTl9JRCkge1xuICAgICAgICAgICAgaWYgKCFtYXN0ZXJjaGFpbkxhc3RCbG9jaykge1xuICAgICAgICAgICAgICAgIHRocm93IFRPTkNsaWVudEVycm9yLm5vQmxvY2tzKE1BU1RFUkNIQUlOX0lELCBhd2FpdCB0aGlzLmNvbXBsZXRlRXJyb3JEYXRhKHtcbiAgICAgICAgICAgICAgICAgICAgYWRkcmVzcyxcbiAgICAgICAgICAgICAgICB9KSk7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICByZXR1cm4gbWFzdGVyY2hhaW5MYXN0QmxvY2suaWQ7XG4gICAgICAgIH1cblxuICAgICAgICAvLyBpZiBhY2NvdW50IGlzIGZyb20gb3RoZXIgY2hhaW5zIHRoZW4gc3RhcnRpbmcgcG9pbnQgaXMgbGFzdCBhY2NvdW50J3Mgc2hhcmQgYmxvY2tcbiAgICAgICAgLy8gVG8gb2J0YWluIGl0IHdlIHRha2UgbWFzdGVyY2hhaW4gYmxvY2sgdG8gZ2V0IHNoYXJkcyBjb25maWd1cmF0aW9uIGFuZCBzZWxlY3RcbiAgICAgICAgLy8gbWF0Y2hpbmcgc2hhcmRcbiAgICAgICAgaWYgKCFtYXN0ZXJjaGFpbkxhc3RCbG9jaykge1xuICAgICAgICAgICAgLy8gTm9kZSBTRSBjYXNlIC0gbm8gbWFzdGVyY2hhaW4sIG5vIHNoYXJkaW5nLiBDaGVjayB0aGF0IG9ubHkgb25lIHNoYXJkXG4gICAgICAgICAgICBsZXQgd29ya2NoYWluTGFzdEJsb2NrID0gYXdhaXQgdGhpcy5maW5kTGFzdEJsb2NrKHdvcmtjaGFpbiwgJ2FmdGVyX21lcmdlIHNoYXJkJyk7XG4gICAgICAgICAgICBpZiAoIXdvcmtjaGFpbkxhc3RCbG9jaykge1xuICAgICAgICAgICAgICAgIHRocm93IFRPTkNsaWVudEVycm9yLm5vQmxvY2tzKHdvcmtjaGFpbiwgYXdhaXQgdGhpcy5jb21wbGV0ZUVycm9yRGF0YSh7XG4gICAgICAgICAgICAgICAgICAgIGFkZHJlc3MsXG4gICAgICAgICAgICAgICAgfSkpO1xuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICAvLyBpZiB3b3JrY2hhaW4gaXMgc2hhcmRlZCB0aGVuIGl0IGlzIG5vdCBOb2RlIFNFIGFuZCBtYXN0ZXJjaGFpbiBibG9ja3MgbWlzc2luZ1xuICAgICAgICAgICAgLy8gaXMgZXJyb3JcbiAgICAgICAgICAgIGlmICh3b3JrY2hhaW5MYXN0QmxvY2suYWZ0ZXJfbWVyZ2UgfHwgd29ya2NoYWluTGFzdEJsb2NrLnNoYXJkICE9PSAnODAwMDAwMDAwMDAwMDAwMCcpIHtcbiAgICAgICAgICAgICAgICB0aHJvdyBUT05DbGllbnRFcnJvci5ub0Jsb2NrcyhNQVNURVJDSEFJTl9JRCwgYXdhaXQgdGhpcy5jb21wbGV0ZUVycm9yRGF0YSh7XG4gICAgICAgICAgICAgICAgICAgIGFkZHJlc3MsXG4gICAgICAgICAgICAgICAgfSkpO1xuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICAvLyBUYWtlIGxhc3QgYmxvY2sgYnkgc2VxX25vXG4gICAgICAgICAgICB3b3JrY2hhaW5MYXN0QmxvY2sgPSBhd2FpdCB0aGlzLmZpbmRMYXN0QmxvY2sod29ya2NoYWluLCAnaWQnLCB7XG4gICAgICAgICAgICAgICAgc2hhcmQ6IHsgZXE6ICc4MDAwMDAwMDAwMDAwMDAwJyB9LFxuICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICBpZiAoIXdvcmtjaGFpbkxhc3RCbG9jaykge1xuICAgICAgICAgICAgICAgIHRocm93IFRPTkNsaWVudEVycm9yLmludmFsaWRCbG9ja2NoYWluKFxuICAgICAgICAgICAgICAgICAgICAnTm8gc3RhcnRpbmcgTm9kZSBTRSBibG9jayBmb3VuZCcsXG4gICAgICAgICAgICAgICAgICAgIGF3YWl0IHRoaXMuY29tcGxldGVFcnJvckRhdGEoe1xuICAgICAgICAgICAgICAgICAgICAgICAgYWRkcmVzcyxcbiAgICAgICAgICAgICAgICAgICAgfSksXG4gICAgICAgICAgICAgICAgKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIHJldHVybiB3b3JrY2hhaW5MYXN0QmxvY2suaWQ7XG4gICAgICAgIH1cblxuICAgICAgICBjb25zdCBzaGFyZHM6ID9RU2hhcmRIYXNoW10gPSBtYXN0ZXJjaGFpbkxhc3RCbG9jaz8ubWFzdGVyPy5zaGFyZF9oYXNoZXM7XG4gICAgICAgIGlmICghc2hhcmRzIHx8IHNoYXJkcy5sZW5ndGggPT09IDApIHtcbiAgICAgICAgICAgIHRocm93IFRPTkNsaWVudEVycm9yLmludmFsaWRCbG9ja2NoYWluKFxuICAgICAgICAgICAgICAgICdObyBgc2hhcmRfaGFzaGVzYCBmaWVsZCBpbiBtYXN0ZXJjaGFpbiBibG9jaycsXG4gICAgICAgICAgICAgICAgYXdhaXQgdGhpcy5jb21wbGV0ZUVycm9yRGF0YSh7XG4gICAgICAgICAgICAgICAgICAgIGFkZHJlc3MsXG4gICAgICAgICAgICAgICAgfSksXG4gICAgICAgICAgICApO1xuICAgICAgICB9XG4gICAgICAgIGNvbnN0IHNoYXJkQmxvY2sgPSBhd2FpdCB0aGlzLmZpbmRNYXRjaGluZ1NoYXJkKHNoYXJkcywgYWRkcmVzcyk7XG4gICAgICAgIGNvbnN0IHJvb3RfaGFzaCA9IHNoYXJkQmxvY2s/LmRlc2NyPy5yb290X2hhc2g7XG4gICAgICAgIGlmICghcm9vdF9oYXNoKSB7XG4gICAgICAgICAgICB0aHJvdyBUT05DbGllbnRFcnJvci5pbnZhbGlkQmxvY2tjaGFpbihcbiAgICAgICAgICAgICAgICAnTm8gYHJvb3RfaGFzaGAgZmllbGQgaW4gc2hhcmQgZGVzY3InLFxuICAgICAgICAgICAgICAgIGF3YWl0IHRoaXMuY29tcGxldGVFcnJvckRhdGEoe1xuICAgICAgICAgICAgICAgICAgICBhZGRyZXNzLFxuICAgICAgICAgICAgICAgIH0pLFxuICAgICAgICAgICAgKTtcbiAgICAgICAgfVxuICAgICAgICByZXR1cm4gcm9vdF9oYXNoO1xuICAgIH1cblxuICAgIGFzeW5jIGNoZWNrU2hhcmRNYXRjaChibG9jazogUUJsb2NrLCBhZGRyZXNzOiBzdHJpbmcpOiBQcm9taXNlPGJvb2xlYW4+IHtcbiAgICAgICAgcmV0dXJuICEhKGF3YWl0IHRoaXMuZmluZE1hdGNoaW5nU2hhcmQoW1xuICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgIHdvcmtjaGFpbl9pZDogYmxvY2sud29ya2NoYWluX2lkIHx8IDAsXG4gICAgICAgICAgICAgICAgc2hhcmQ6IGJsb2NrLnNoYXJkIHx8ICcnLFxuICAgICAgICAgICAgfSxcbiAgICAgICAgXSwgYWRkcmVzcykpO1xuICAgIH1cblxuICAgIGFzeW5jIHdhaXROZXh0QmxvY2soY3VycmVudDogc3RyaW5nLCBhZGRyZXNzOiBzdHJpbmcsIHRpbWVvdXQ/OiBudW1iZXIpOiBQcm9taXNlPFFCbG9jaz4ge1xuICAgICAgICBjb25zdCBibG9jayA9IGF3YWl0IHRoaXMucXVlcmllcy5ibG9ja3Mud2FpdEZvcih7XG4gICAgICAgICAgICBmaWx0ZXI6IHtcbiAgICAgICAgICAgICAgICBwcmV2X3JlZjoge1xuICAgICAgICAgICAgICAgICAgICByb290X2hhc2g6IHsgZXE6IGN1cnJlbnQgfSxcbiAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgIE9SOiB7XG4gICAgICAgICAgICAgICAgICAgIHByZXZfYWx0X3JlZjoge1xuICAgICAgICAgICAgICAgICAgICAgICAgcm9vdF9oYXNoOiB7IGVxOiBjdXJyZW50IH0sXG4gICAgICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgIH0sXG4gICAgICAgICAgICByZXN1bHQ6IEJMT0NLX0ZJRUxEUyxcbiAgICAgICAgICAgIHRpbWVvdXQsXG4gICAgICAgIH0pO1xuXG4gICAgICAgIGlmIChibG9jaz8uYWZ0ZXJfc3BsaXQgJiYgIShhd2FpdCB0aGlzLmNoZWNrU2hhcmRNYXRjaChibG9jaywgYWRkcmVzcykpKSB7XG4gICAgICAgICAgICByZXR1cm4gdGhpcy5xdWVyaWVzLmJsb2Nrcy53YWl0Rm9yKHtcbiAgICAgICAgICAgICAgICBmaWx0ZXI6IHtcbiAgICAgICAgICAgICAgICAgICAgaWQ6IHsgbmU6IGJsb2NrLmlkIH0sXG4gICAgICAgICAgICAgICAgICAgIHByZXZfcmVmOiB7XG4gICAgICAgICAgICAgICAgICAgICAgICByb290X2hhc2g6IHsgZXE6IGN1cnJlbnQgfSxcbiAgICAgICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgIHJlc3VsdDogQkxPQ0tfRklFTERTLFxuICAgICAgICAgICAgICAgIHRpbWVvdXQsXG4gICAgICAgICAgICB9KTtcbiAgICAgICAgfVxuICAgICAgICByZXR1cm4gYmxvY2s7XG4gICAgfVxuXG4gICAgYXN5bmMgd2FpdEZvclRyYW5zYWN0aW9uKHBhcmFtczogVE9OV2FpdEZvclRyYW5zYWN0aW9uUGFyYW1zKTogUHJvbWlzZTxUT05Db250cmFjdFJ1blJlc3VsdD4ge1xuICAgICAgICBjb25zdCB0b3RhbFN0YXJ0ID0gRGF0ZS5ub3coKTtcbiAgICAgICAgY29uc3QgZXhwaXJlID0gcGFyYW1zLm1lc3NhZ2UuZXhwaXJlIHx8IDA7XG4gICAgICAgIGNvbnN0IG1lc3NhZ2VJZCA9IGF3YWl0IHRoaXMuZW5zdXJlTWVzc2FnZUlkKHBhcmFtcy5tZXNzYWdlKTtcbiAgICAgICAgY29uc3QgYWRkcmVzcyA9IHBhcmFtcy5tZXNzYWdlLmFkZHJlc3M7XG4gICAgICAgIGNvbnN0IHByb2Nlc3NpbmcgPSB7IC4uLnBhcmFtcy5tZXNzYWdlUHJvY2Vzc2luZ1N0YXRlIH07XG4gICAgICAgIGxldCB0cmFuc2FjdGlvbiA9IG51bGw7XG4gICAgICAgIHRyeSB7XG4gICAgICAgICAgICBjb25zdCB0aW1lUmVwb3J0ID0gW107XG5cbiAgICAgICAgICAgIGNvbnN0IHN0b3BUaW1lID0gZXhwaXJlXG4gICAgICAgICAgICAgICAgfHwgTWF0aC5yb3VuZCgoRGF0ZS5ub3coKSArIHRoaXMuY29uZmlnLm1lc3NhZ2VQcm9jZXNzaW5nVGltZW91dCgpKSAvIDEwMDApO1xuXG4gICAgICAgICAgICBjb25zdCBpbmZpbml0ZVdhaXQgPSBwYXJhbXMuaW5maW5pdGVXYWl0ICE9PSBmYWxzZTtcbiAgICAgICAgICAgIGNvbnN0IGFkZFRpbWVvdXQgPSB0aGlzLmNvbmZpZy5tZXNzYWdlUHJvY2Vzc2luZ1RpbWVvdXQoKTtcbiAgICAgICAgICAgIHdoaWxlICghdHJhbnNhY3Rpb24pIHtcbiAgICAgICAgICAgICAgICBjb25zdCBub3cgPSBEYXRlLm5vdygpO1xuICAgICAgICAgICAgICAgIGNvbnN0IHRpbWVvdXQgPSBNYXRoLm1heChzdG9wVGltZSwgbm93KSAtIG5vdyArIGFkZFRpbWVvdXQ7XG4gICAgICAgICAgICAgICAgbGV0IGJsb2NrOiA/UUJsb2NrID0gbnVsbDtcbiAgICAgICAgICAgICAgICB0cnkge1xuICAgICAgICAgICAgICAgICAgICBjb25zdCBzdGFydCA9IERhdGUubm93KCk7XG4gICAgICAgICAgICAgICAgICAgIGJsb2NrID0gYXdhaXQgdGhpcy53YWl0TmV4dEJsb2NrKHByb2Nlc3NpbmcubGFzdEJsb2NrSWQsIGFkZHJlc3MsIHRpbWVvdXQpO1xuICAgICAgICAgICAgICAgICAgICBjb25zdCBlbmQgPSBEYXRlLm5vdygpO1xuICAgICAgICAgICAgICAgICAgICB0aW1lUmVwb3J0LnB1c2goXG4gICAgICAgICAgICAgICAgICAgICAgICBgQmxvY2sgWyR7YmxvY2suaWQgfHwgJyd9XSBgXG4gICAgICAgICAgICAgICAgICAgICAgICArIGBoYXMgYmVlbiByZWNlaXZlZDogJHtlbmQgLSBzdGFydH0gbXMsIGBcbiAgICAgICAgICAgICAgICAgICAgICAgICsgYGNsaWVudCB0aW1lOiAke01hdGgucm91bmQoZW5kIC8gMTAwMCl9LCBgXG4gICAgICAgICAgICAgICAgICAgICAgICArIGBnZW5fdXRpbWU6ICR7YmxvY2suZ2VuX3V0aW1lIHx8IDB9YCxcbiAgICAgICAgICAgICAgICAgICAgKTtcbiAgICAgICAgICAgICAgICB9IGNhdGNoIChlcnJvcikge1xuICAgICAgICAgICAgICAgICAgICB0aGlzLmNvbmZpZy5sb2coJ0Jsb2NrIHdhaXRpbmcgZmFpbGVkOiAnLCBlcnJvcik7XG4gICAgICAgICAgICAgICAgICAgIGlmICghaW5maW5pdGVXYWl0KSB7XG4gICAgICAgICAgICAgICAgICAgICAgICBsZXQgcmVzb2x2ZWRFcnJvciA9IGVycm9yO1xuICAgICAgICAgICAgICAgICAgICAgICAgaWYgKGVycm9yLmNvZGUgPT09IFRPTkVycm9yQ29kZS5XQUlUX0ZPUl9USU1FT1VUKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgcmVzb2x2ZWRFcnJvciA9IFRPTkNsaWVudEVycm9yLm5ldHdvcmtTaWxlbnQoXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGF3YWl0IHRoaXMuY29tcGxldGVFcnJvckRhdGEoe1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgYWRkcmVzcyxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIG1lc3NhZ2VfaWQ6IG1lc3NhZ2VJZCxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGJsb2NrX2lkOiBwcm9jZXNzaW5nLmxhc3RCbG9ja0lkLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdGltZW91dCxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIG1lc3NhZ2VfcHJvY2Vzc2luZ19zdGF0ZTogcHJvY2Vzc2luZyxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGV4cGlyZSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHNlbmRpbmdfdGltZTogcHJvY2Vzc2luZy5zZW5kaW5nVGltZSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfSksXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgKTtcbiAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICAgIHRocm93IHJlc29sdmVkRXJyb3I7XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgdGhpcy5jb25maWcubG9nKCdSZXRyeSB3YWl0aW5nLicpO1xuICAgICAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgICAgIGlmIChibG9jaykge1xuICAgICAgICAgICAgICAgICAgICBwcm9jZXNzaW5nLmxhc3RCbG9ja0lkID0gYmxvY2suaWQgfHwgJyc7XG5cbiAgICAgICAgICAgICAgICAgICAgY29uc3QgaW5Nc2cgPSAoYmxvY2suaW5fbXNnX2Rlc2NyIHx8IFtdKS5maW5kKHggPT4geC5tc2dfaWQgPT09IG1lc3NhZ2VJZCk7XG4gICAgICAgICAgICAgICAgICAgIGlmIChpbk1zZykge1xuICAgICAgICAgICAgICAgICAgICAgICAgY29uc3QgdHJhbnNhY3Rpb25JZCA9IGluTXNnLnRyYW5zYWN0aW9uX2lkO1xuICAgICAgICAgICAgICAgICAgICAgICAgaWYgKCF0cmFuc2FjdGlvbklkKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgdGhyb3cgVE9OQ2xpZW50RXJyb3IuaW52YWxpZEJsb2NrY2hhaW4oXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICdObyBmaWVsZCBgdHJhbnNhY3Rpb25faWRgIGluIGJsb2NrJyxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgYXdhaXQgdGhpcy5jb21wbGV0ZUVycm9yRGF0YSh7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBhZGRyZXNzLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgbWVzc2FnZV9pZDogbWVzc2FnZUlkLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9KSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICApO1xuICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgICAgY29uc3QgdHJTdGFydCA9IERhdGUubm93KCk7XG4gICAgICAgICAgICAgICAgICAgICAgICB0cmFuc2FjdGlvbiA9IGF3YWl0IHRoaXMucXVlcmllcy50cmFuc2FjdGlvbnMud2FpdEZvcih7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgZmlsdGVyOiB7IGlkOiB7IGVxOiB0cmFuc2FjdGlvbklkIH0gfSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICByZXN1bHQ6IFRSQU5TQUNUSU9OX0ZJRUxEU19PUkRJTkFSWSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB0aW1lb3V0OiBNQVhfVElNRU9VVCxcbiAgICAgICAgICAgICAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgICAgICAgICAgICAgdHJhY2VNZXNzYWdlKHRoaXMuY29uZmlnLnRyYWNlciwgbWVzc2FnZUlkLCAndHJhbnNhY3Rpb25SZWNlaXZlZCcsIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB0cmFuc2FjdGlvbklkLFxuICAgICAgICAgICAgICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICAgICAgICAgICAgICB0aW1lUmVwb3J0LnB1c2goYFRyYW5zYWN0aW9uIFske3RyYW5zYWN0aW9uSWR9XSBoYXMgYmVlbiByZWNlaXZlZDogJHtEYXRlLm5vdygpIC0gdHJTdGFydH0gbXNgKTtcbiAgICAgICAgICAgICAgICAgICAgfSBlbHNlIGlmICgoYmxvY2suZ2VuX3V0aW1lIHx8IDApID4gc3RvcFRpbWUpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIGlmIChleHBpcmUpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB0cmFjZU1lc3NhZ2UodGhpcy5jb25maWcudHJhY2VyLCBtZXNzYWdlSWQsICdtZXNzYWdlRXhwaXJlZCcsIHt9KTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB0aHJvdyBUT05DbGllbnRFcnJvci5tZXNzYWdlRXhwaXJlZChcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgYXdhaXQgdGhpcy5jb21wbGV0ZUVycm9yRGF0YSh7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBhZGRyZXNzLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgbWVzc2FnZV9pZDogbWVzc2FnZUlkLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgc2VuZGluZ190aW1lOiBwcm9jZXNzaW5nLnNlbmRpbmdUaW1lLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgZXhwaXJlOiBzdG9wVGltZSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGJsb2NrX3RpbWU6IGJsb2NrLmdlbl91dGltZSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGJsb2NrX2lkOiBwcm9jZXNzaW5nLmxhc3RCbG9ja0lkLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9KSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICApO1xuICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgICAgdGhyb3cgVE9OQ2xpZW50RXJyb3IudHJhbnNhY3Rpb25XYWl0VGltZW91dChcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBhd2FpdCB0aGlzLmNvbXBsZXRlRXJyb3JEYXRhKHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgYWRkcmVzcyxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgbWVzc2FnZV9pZDogbWVzc2FnZUlkLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBzZW5kaW5nX3RpbWU6IHByb2Nlc3Npbmcuc2VuZGluZ1RpbWUsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRpbWVvdXQsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIG1lc3NhZ2VfcHJvY2Vzc2luZ19zdGF0ZTogcHJvY2Vzc2luZyxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB9KSxcbiAgICAgICAgICAgICAgICAgICAgICAgICk7XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICAgIHRpbWVSZXBvcnQuc3BsaWNlKDAsIDAsIGBUcmFuc2FjdGlvbiB3YWl0aW5nIHRpbWU6ICR7RGF0ZS5ub3coKSAtIHRvdGFsU3RhcnR9IG1zYCk7XG4gICAgICAgICAgICB0aGlzLmNvbmZpZy5sb2codGltZVJlcG9ydC5qb2luKCdcXG4nKSk7XG4gICAgICAgIH0gY2F0Y2ggKGVycm9yKSB7XG4gICAgICAgICAgICB0aGlzLmNvbmZpZy5sb2coJ1t3YWl0Rm9yVHJhbnNhY3Rpb25dJywgJ0ZBSUxFRCcsIGVycm9yKTtcbiAgICAgICAgICAgIGlmIChlcnJvci5jb2RlID09PSBUT05FcnJvckNvZGUuTUVTU0FHRV9FWFBJUkVEXG4gICAgICAgICAgICAgICAgfHwgZXJyb3IuY29kZSA9PT0gVE9ORXJyb3JDb2RlLlRSQU5TQUNUSU9OX1dBSVRfVElNRU9VVCkge1xuICAgICAgICAgICAgICAgIHRocm93IGF3YWl0IHRoaXMucmVzb2x2ZURldGFpbGVkRXJyb3IoXG4gICAgICAgICAgICAgICAgICAgIGVycm9yLFxuICAgICAgICAgICAgICAgICAgICBwYXJhbXMubWVzc2FnZS5tZXNzYWdlQm9keUJhc2U2NCxcbiAgICAgICAgICAgICAgICAgICAgcHJvY2Vzc2luZy5zZW5kaW5nVGltZSxcbiAgICAgICAgICAgICAgICAgICAgYWRkcmVzcyxcbiAgICAgICAgICAgICAgICApO1xuICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgICB0aHJvdyBlcnJvcjtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuXG4gICAgICAgIHJldHVybiB0aGlzLnByb2Nlc3NUcmFuc2FjdGlvbihcbiAgICAgICAgICAgIGFkZHJlc3MsXG4gICAgICAgICAgICB0cmFuc2FjdGlvbixcbiAgICAgICAgICAgIHBhcmFtcy5hYmksXG4gICAgICAgICAgICBwYXJhbXMuZnVuY3Rpb25OYW1lLFxuICAgICAgICApO1xuICAgIH1cblxuXG4gICAgYXN5bmMgcHJvY2Vzc1RyYW5zYWN0aW9uKFxuICAgICAgICBhZGRyZXNzOiBzdHJpbmcsXG4gICAgICAgIHRyYW5zYWN0aW9uOiBRVHJhbnNhY3Rpb24sXG4gICAgICAgIGFiaTogP1RPTkNvbnRyYWN0QUJJLFxuICAgICAgICBmdW5jdGlvbk5hbWU6ID9zdHJpbmcsXG4gICAgKTogUHJvbWlzZTxUT05Db250cmFjdFJ1blJlc3VsdD4ge1xuICAgICAgICB0cnkge1xuICAgICAgICAgICAgY29uc3QgcmVzdWx0ID0gYXdhaXQgdGhpcy5yZXF1ZXN0Q29yZSgnY29udHJhY3RzLnByb2Nlc3MudHJhbnNhY3Rpb24nLCB7XG4gICAgICAgICAgICAgICAgdHJhbnNhY3Rpb24sXG4gICAgICAgICAgICAgICAgYWJpLFxuICAgICAgICAgICAgICAgIGZ1bmN0aW9uTmFtZSxcbiAgICAgICAgICAgICAgICBhZGRyZXNzLFxuICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICByZXR1cm4ge1xuICAgICAgICAgICAgICAgIHRyYW5zYWN0aW9uLFxuICAgICAgICAgICAgICAgIC4uLnJlc3VsdCxcbiAgICAgICAgICAgIH07XG4gICAgICAgIH0gY2F0Y2ggKGVycm9yKSB7XG4gICAgICAgICAgICBjb25zdCBhY2NvdW50cyA9IGF3YWl0IHRoaXMucXVlcmllcy5hY2NvdW50cy5xdWVyeSh7XG4gICAgICAgICAgICAgICAgZmlsdGVyOiB7IGlkOiB7IGVxOiBhZGRyZXNzIH0gfSxcbiAgICAgICAgICAgICAgICByZXN1bHQ6ICdhY2NfdHlwZSBiYWxhbmNlJyxcbiAgICAgICAgICAgICAgICB0aW1lb3V0OiAxMDAwLFxuICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICBpZiAoYWNjb3VudHMubGVuZ3RoID09PSAwKSB7XG4gICAgICAgICAgICAgICAgdGhyb3cgVE9OQ2xpZW50RXJyb3IuYWNjb3VudE1pc3NpbmcoXG4gICAgICAgICAgICAgICAgICAgIGFkZHJlc3MsXG4gICAgICAgICAgICAgICAgICAgIGF3YWl0IHRoaXMuY29tcGxldGVFcnJvckRhdGEoe1xuICAgICAgICAgICAgICAgICAgICAgICAgb3JpZ2luYWxfZXJyb3I6IGVycm9yLFxuICAgICAgICAgICAgICAgICAgICAgICAgYWRkcmVzcyxcbiAgICAgICAgICAgICAgICAgICAgICAgIGZ1bmN0aW9uX25hbWU6IGZ1bmN0aW9uTmFtZSxcbiAgICAgICAgICAgICAgICAgICAgfSksXG4gICAgICAgICAgICAgICAgKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIHRocm93IGVycm9yO1xuICAgICAgICB9XG4gICAgfVxuXG4gICAgYXN5bmMgcmVzb2x2ZURldGFpbGVkRXJyb3IoXG4gICAgICAgIGVycm9yOiBFcnJvcixcbiAgICAgICAgbWVzc2FnZUJhc2U2NDogc3RyaW5nLFxuICAgICAgICB0aW1lOiBudW1iZXIsXG4gICAgICAgIGFkZHJlc3M6IHN0cmluZyxcbiAgICApIHtcbiAgICAgICAgY29uc3QgYWNjb3VudHMgPSBhd2FpdCB0aGlzLnF1ZXJpZXMuYWNjb3VudHMucXVlcnkoe1xuICAgICAgICAgICAgZmlsdGVyOiB7IGlkOiB7IGVxOiBhZGRyZXNzIH0gfSxcbiAgICAgICAgICAgIHJlc3VsdDogJ2lkIGFjY190eXBlIGJhbGFuY2UgYmFsYW5jZV9vdGhlciB7IGN1cnJlbmN5IHZhbHVlIH0gYm9jIGNvZGVfaGFzaCBkYXRhX2hhc2ggbGFzdF9wYWlkJyxcbiAgICAgICAgICAgIHRpbWVvdXQ6IDEwMDAsXG4gICAgICAgIH0pO1xuICAgICAgICBpZiAoYWNjb3VudHMubGVuZ3RoID09PSAwKSB7XG4gICAgICAgICAgICByZXR1cm4gVE9OQ2xpZW50RXJyb3IuYWNjb3VudE1pc3NpbmcoXG4gICAgICAgICAgICAgICAgYWRkcmVzcyxcbiAgICAgICAgICAgICAgICBhd2FpdCB0aGlzLmNvbXBsZXRlRXJyb3JEYXRhKHtcbiAgICAgICAgICAgICAgICAgICAgYWRkcmVzcyxcbiAgICAgICAgICAgICAgICAgICAgb3JpZ2luYWxfZXJyb3I6IGVycm9yLFxuICAgICAgICAgICAgICAgIH0pLFxuICAgICAgICAgICAgKTtcbiAgICAgICAgfVxuICAgICAgICBjb25zdCBhY2NvdW50ID0gYWNjb3VudHNbMF07XG4gICAgICAgIHJlbW92ZVR5cGVOYW1lKGFjY291bnQpO1xuICAgICAgICB0cnkge1xuICAgICAgICAgICAgYXdhaXQgdGhpcy5yZXF1ZXN0Q29yZSgnY29udHJhY3RzLnJlc29sdmUuZXJyb3InLCB7XG4gICAgICAgICAgICAgICAgYWRkcmVzcyxcbiAgICAgICAgICAgICAgICBhY2NvdW50LFxuICAgICAgICAgICAgICAgIG1lc3NhZ2VCYXNlNjQsXG4gICAgICAgICAgICAgICAgdGltZSxcbiAgICAgICAgICAgICAgICBtYWluRXJyb3I6IGVycm9yLFxuICAgICAgICAgICAgfSk7XG4gICAgICAgIH0gY2F0Y2ggKHJlc29sdmVkKSB7XG4gICAgICAgICAgICByZXR1cm4gcmVzb2x2ZWQ7XG4gICAgICAgIH1cbiAgICAgICAgcmV0dXJuIGVycm9yO1xuICAgIH1cblxuICAgIGFzeW5jIGlzRGVwbG95ZWQoYWRkcmVzczogc3RyaW5nLCBwYXJlbnRTcGFuPzogKFNwYW4gfCBTcGFuQ29udGV4dCkpOiBQcm9taXNlPGJvb2w+IHtcbiAgICAgICAgY29uc3QgYWNjb3VudCA9IGF3YWl0IHRoaXMucXVlcmllcy5hY2NvdW50cy5xdWVyeSh7XG4gICAgICAgICAgICBmaWx0ZXI6IHtcbiAgICAgICAgICAgICAgICBpZDogeyBlcTogYWRkcmVzcyB9LFxuICAgICAgICAgICAgICAgIGFjY190eXBlOiB7IGVxOiBRQWNjb3VudFR5cGUuYWN0aXZlIH0sXG4gICAgICAgICAgICB9LFxuICAgICAgICAgICAgcmVzdWx0OiAnaWQnLFxuICAgICAgICAgICAgcGFyZW50U3BhbixcbiAgICAgICAgfSk7XG4gICAgICAgIHJldHVybiBhY2NvdW50Lmxlbmd0aCA+IDA7XG4gICAgfVxuXG4gICAgYXN5bmMgcHJvY2Vzc0RlcGxveU1lc3NhZ2UoXG4gICAgICAgIG1lc3NhZ2U6IFRPTkNvbnRyYWN0RGVwbG95TWVzc2FnZSxcbiAgICAgICAgcGFyZW50U3Bhbj86IChTcGFuIHwgU3BhbkNvbnRleHQpLFxuICAgICAgICByZXRyeUluZGV4PzogbnVtYmVyLFxuICAgICk6IFByb21pc2U8VE9OQ29udHJhY3REZXBsb3lSZXN1bHQ+IHtcbiAgICAgICAgdGhpcy5jb25maWcubG9nKCdwcm9jZXNzRGVwbG95TWVzc2FnZScsIG1lc3NhZ2UpO1xuICAgICAgICBpZiAoYXdhaXQgdGhpcy5pc0RlcGxveWVkKG1lc3NhZ2UuYWRkcmVzcywgcGFyZW50U3BhbikpIHtcbiAgICAgICAgICAgIHJldHVybiB7XG4gICAgICAgICAgICAgICAgYWRkcmVzczogbWVzc2FnZS5hZGRyZXNzLFxuICAgICAgICAgICAgICAgIGFscmVhZHlEZXBsb3llZDogdHJ1ZSxcbiAgICAgICAgICAgIH07XG4gICAgICAgIH1cbiAgICAgICAgY29uc3QgcHJvY2Vzc2luZyA9IGF3YWl0IHRoaXMuc2VuZE1lc3NhZ2UobWVzc2FnZS5tZXNzYWdlLCBwYXJlbnRTcGFuKTtcbiAgICAgICAgcmV0dXJuIHRoaXMud2FpdEZvckRlcGxveVRyYW5zYWN0aW9uKG1lc3NhZ2UsIHByb2Nlc3NpbmcsIHBhcmVudFNwYW4pO1xuICAgIH1cblxuICAgIGFzeW5jIHdhaXRGb3JEZXBsb3lUcmFuc2FjdGlvbihcbiAgICAgICAgZGVwbG95TWVzc2FnZTogVE9OQ29udHJhY3REZXBsb3lNZXNzYWdlLFxuICAgICAgICBtZXNzYWdlUHJvY2Vzc2luZ1N0YXRlOiBUT05NZXNzYWdlUHJvY2Vzc2luZ1N0YXRlLFxuICAgICAgICBwYXJlbnRTcGFuPzogKFNwYW4gfCBTcGFuQ29udGV4dCksXG4gICAgICAgIGluZmluaXRlV2FpdD86IGJvb2xlYW4sXG4gICAgKTogUHJvbWlzZTxUT05Db250cmFjdERlcGxveVJlc3VsdD4ge1xuICAgICAgICBjb25zdCBtZXNzYWdlID0gZGVwbG95TWVzc2FnZS5tZXNzYWdlO1xuICAgICAgICBjb25zdCByZXN1bHQgPSBhd2FpdCB0aGlzLndhaXRGb3JUcmFuc2FjdGlvbih7XG4gICAgICAgICAgICBtZXNzYWdlLFxuICAgICAgICAgICAgbWVzc2FnZVByb2Nlc3NpbmdTdGF0ZSxcbiAgICAgICAgICAgIHBhcmVudFNwYW4sXG4gICAgICAgICAgICBpbmZpbml0ZVdhaXQsXG4gICAgICAgIH0pO1xuICAgICAgICByZXR1cm4ge1xuICAgICAgICAgICAgLi4ucmVzdWx0LFxuICAgICAgICAgICAgYWRkcmVzczogbWVzc2FnZS5hZGRyZXNzLFxuICAgICAgICAgICAgYWxyZWFkeURlcGxveWVkOiBmYWxzZSxcbiAgICAgICAgfTtcbiAgICB9XG5cblxuICAgIGFzeW5jIHByb2Nlc3NSdW5NZXNzYWdlKFxuICAgICAgICBydW5NZXNzYWdlOiBUT05Db250cmFjdFJ1bk1lc3NhZ2UsXG4gICAgICAgIHBhcmVudFNwYW4/OiAoU3BhbiB8IFNwYW5Db250ZXh0KSxcbiAgICApOiBQcm9taXNlPFRPTkNvbnRyYWN0UnVuUmVzdWx0PiB7XG4gICAgICAgIHRoaXMuY29uZmlnLmxvZygncHJvY2Vzc1J1bk1lc3NhZ2UnLCBydW5NZXNzYWdlKTtcbiAgICAgICAgY29uc3QgcHJvY2Vzc2luZyA9IGF3YWl0IHRoaXMuc2VuZE1lc3NhZ2UocnVuTWVzc2FnZS5tZXNzYWdlLCBwYXJlbnRTcGFuKTtcbiAgICAgICAgcmV0dXJuIHRoaXMud2FpdEZvclJ1blRyYW5zYWN0aW9uKHJ1bk1lc3NhZ2UsIHByb2Nlc3NpbmcsIHBhcmVudFNwYW4pO1xuICAgIH1cblxuICAgIGFzeW5jIHdhaXRGb3JSdW5UcmFuc2FjdGlvbihcbiAgICAgICAgcnVuTWVzc2FnZTogVE9OQ29udHJhY3RSdW5NZXNzYWdlLFxuICAgICAgICBtZXNzYWdlUHJvY2Vzc2luZ1N0YXRlOiBUT05NZXNzYWdlUHJvY2Vzc2luZ1N0YXRlLFxuICAgICAgICBwYXJlbnRTcGFuPzogKFNwYW4gfCBTcGFuQ29udGV4dCksXG4gICAgICAgIGluZmluaXRlV2FpdD86IGJvb2xlYW4sXG4gICAgKTogUHJvbWlzZTxUT05Db250cmFjdFJ1blJlc3VsdD4ge1xuICAgICAgICByZXR1cm4gdGhpcy53YWl0Rm9yVHJhbnNhY3Rpb24oe1xuICAgICAgICAgICAgbWVzc2FnZTogcnVuTWVzc2FnZS5tZXNzYWdlLFxuICAgICAgICAgICAgbWVzc2FnZVByb2Nlc3NpbmdTdGF0ZSxcbiAgICAgICAgICAgIHBhcmVudFNwYW4sXG4gICAgICAgICAgICBpbmZpbml0ZVdhaXQsXG4gICAgICAgICAgICBhYmk6IHJ1bk1lc3NhZ2UuYWJpLFxuICAgICAgICAgICAgZnVuY3Rpb25OYW1lOiBydW5NZXNzYWdlLmZ1bmN0aW9uTmFtZSxcbiAgICAgICAgfSk7XG4gICAgfVxuXG4gICAgLyoqXG4gICAgICogRGVwcmVjYXRlZC4gVXNlIGBydW5NZXNzYWdlTG9jYWxgIGluc3RlYWQuXG4gICAgICogQHBhcmFtIHBhcmFtc1xuICAgICAqIEBwYXJhbSB3YWl0UGFyYW1zXG4gICAgICogQHBhcmFtIHBhcmVudFNwYW5cbiAgICAgKiBAcmV0dXJucyB7UHJvbWlzZTx1bmtub3duPn1cbiAgICAgKi9cbiAgICBhc3luYyBwcm9jZXNzUnVuTWVzc2FnZUxvY2FsKFxuICAgICAgICBwYXJhbXM6IFRPTkNvbnRyYWN0UnVuTWVzc2FnZSxcbiAgICAgICAgd2FpdFBhcmFtcz86IFRPTkNvbnRyYWN0QWNjb3VudFdhaXRQYXJhbXMsXG4gICAgICAgIHBhcmVudFNwYW4/OiAoU3BhbiB8IFNwYW5Db250ZXh0KSxcbiAgICApOiBQcm9taXNlPFRPTkNvbnRyYWN0UnVuUmVzdWx0PiB7XG4gICAgICAgIHRoaXMuY29uZmlnLmxvZygncHJvY2Vzc1J1bk1lc3NhZ2VMb2NhbCcsIHBhcmFtcyk7XG5cbiAgICAgICAgY29uc3QgYWNjb3VudCA9IGF3YWl0IHRoaXMuZ2V0QWNjb3VudChwYXJhbXMuYWRkcmVzcywgdHJ1ZSwgd2FpdFBhcmFtcywgcGFyZW50U3Bhbik7XG5cbiAgICAgICAgcmV0dXJuIHRoaXMucmVxdWVzdENvcmUoJ2NvbnRyYWN0cy5ydW4ubG9jYWwubXNnJywge1xuICAgICAgICAgICAgYWRkcmVzczogcGFyYW1zLmFkZHJlc3MsXG4gICAgICAgICAgICBhY2NvdW50LFxuICAgICAgICAgICAgYWJpOiBwYXJhbXMuYWJpLFxuICAgICAgICAgICAgZnVuY3Rpb25OYW1lOiBwYXJhbXMuZnVuY3Rpb25OYW1lLFxuICAgICAgICAgICAgbWVzc2FnZUJhc2U2NDogcGFyYW1zLm1lc3NhZ2UubWVzc2FnZUJvZHlCYXNlNjQsXG4gICAgICAgIH0pO1xuICAgIH1cblxuICAgIC8vIEZlZSBjYWxjdWxhdGlvblxuXG4gICAgYmlnQmFsYW5jZSA9ICcweDEwMDAwMDAwMDAwMDAwJztcblxuICAgIGFzeW5jIGNhbGNSdW5GZWVzKFxuICAgICAgICBwYXJhbXM6IFRPTkNvbnRyYWN0Q2FsY1J1bkZlZVBhcmFtcyxcbiAgICAgICAgcGFyZW50U3Bhbj86IChTcGFuIHwgU3BhbkNvbnRleHQpLFxuICAgICk6IFByb21pc2U8VE9OQ29udHJhY3RDYWxjRmVlUmVzdWx0PiB7XG4gICAgICAgIHRoaXMuY29uZmlnLmxvZygnY2FsY1J1bkZlZXMnLCBwYXJhbXMpO1xuXG4gICAgICAgIGNvbnN0IGFjY291bnQgPSBhd2FpdCB0aGlzLmdldEFjY291bnQocGFyYW1zLmFkZHJlc3MsIHRydWUsIHBhcmFtcy53YWl0UGFyYW1zLCBwYXJlbnRTcGFuKTtcblxuICAgICAgICBpZiAocGFyYW1zLmVtdWxhdGVCYWxhbmNlKSB7XG4gICAgICAgICAgICBhY2NvdW50LmJhbGFuY2UgPSB0aGlzLmJpZ0JhbGFuY2U7XG4gICAgICAgIH1cblxuICAgICAgICByZXR1cm4gdGhpcy5yZXF1ZXN0Q29yZSgnY29udHJhY3RzLnJ1bi5mZWUnLCB7XG4gICAgICAgICAgICBhZGRyZXNzOiBwYXJhbXMuYWRkcmVzcyxcbiAgICAgICAgICAgIGFjY291bnQsXG4gICAgICAgICAgICBhYmk6IHBhcmFtcy5hYmksXG4gICAgICAgICAgICBmdW5jdGlvbk5hbWU6IHBhcmFtcy5mdW5jdGlvbk5hbWUsXG4gICAgICAgICAgICBpbnB1dDogcGFyYW1zLmlucHV0LFxuICAgICAgICAgICAga2V5UGFpcjogcGFyYW1zLmtleVBhaXIsXG4gICAgICAgIH0pO1xuICAgIH1cblxuICAgIGFzeW5jIGNhbGNEZXBsb3lGZWVzKFxuICAgICAgICBwYXJhbXM6IFRPTkNvbnRyYWN0Q2FsY0RlcGxveUZlZVBhcmFtcyxcbiAgICAgICAgcGFyZW50U3Bhbj86IChTcGFuIHwgU3BhbkNvbnRleHQpLFxuICAgICk6IFByb21pc2U8VE9OQ29udHJhY3RDYWxjRmVlUmVzdWx0PiB7XG4gICAgICAgIHRoaXMuY29uZmlnLmxvZygnY2FsY0RlcGxveUZlZXMnLCBwYXJhbXMpO1xuXG4gICAgICAgIGNvbnN0IG1lc3NhZ2UgPSBhd2FpdCB0aGlzLmNyZWF0ZURlcGxveU1lc3NhZ2UocGFyYW1zKTtcblxuICAgICAgICByZXR1cm4gdGhpcy5jYWxjTXNnUHJvY2Vzc0ZlZXMoe1xuICAgICAgICAgICAgYWRkcmVzczogbWVzc2FnZS5hZGRyZXNzLFxuICAgICAgICAgICAgbWVzc2FnZTogbWVzc2FnZS5tZXNzYWdlLFxuICAgICAgICAgICAgZW11bGF0ZUJhbGFuY2U6IHBhcmFtcy5lbXVsYXRlQmFsYW5jZSxcbiAgICAgICAgICAgIG5ld0FjY291bnQ6IHBhcmFtcy5uZXdBY2NvdW50LFxuICAgICAgICB9LCBwYXJlbnRTcGFuKTtcbiAgICB9XG5cbiAgICBhc3luYyBjYWxjTXNnUHJvY2Vzc0ZlZXMoXG4gICAgICAgIHBhcmFtczogVE9OQ29udHJhY3RDYWxjTXNnUHJvY2Vzc2luZ0ZlZXNQYXJhbXMsXG4gICAgICAgIHBhcmVudFNwYW4/OiAoU3BhbiB8IFNwYW5Db250ZXh0KSxcbiAgICApOiBQcm9taXNlPFRPTkNvbnRyYWN0Q2FsY0ZlZVJlc3VsdD4ge1xuICAgICAgICB0aGlzLmNvbmZpZy5sb2coJ2NhbGNNc2dQcm9jZXNzRmVlcycsIHBhcmFtcyk7XG5cbiAgICAgICAgbGV0IGFjY291bnQ6IFFBY2NvdW50ID0ge1xuICAgICAgICAgICAgYmFsYW5jZTogdGhpcy5iaWdCYWxhbmNlLFxuICAgICAgICAgICAgaWQ6IHBhcmFtcy5hZGRyZXNzLFxuICAgICAgICAgICAgbGFzdF9wYWlkOiBNYXRoLmZsb29yKERhdGUubm93KCkgLyAxMDAwKSxcbiAgICAgICAgfTtcblxuICAgICAgICBpZiAoIXBhcmFtcy5uZXdBY2NvdW50KSB7XG4gICAgICAgICAgICBhY2NvdW50ID0gYXdhaXQgdGhpcy5nZXRBY2NvdW50KHBhcmFtcy5hZGRyZXNzLCBmYWxzZSwgcGFyYW1zLndhaXRQYXJhbXMsIHBhcmVudFNwYW4pO1xuICAgICAgICB9XG5cbiAgICAgICAgaWYgKHBhcmFtcy5lbXVsYXRlQmFsYW5jZSkge1xuICAgICAgICAgICAgYWNjb3VudC5iYWxhbmNlID0gdGhpcy5iaWdCYWxhbmNlO1xuICAgICAgICB9XG5cbiAgICAgICAgcmV0dXJuIHRoaXMucmVxdWVzdENvcmUoJ2NvbnRyYWN0cy5ydW4uZmVlLm1zZycsIHtcbiAgICAgICAgICAgIGFkZHJlc3M6IHBhcmFtcy5hZGRyZXNzLFxuICAgICAgICAgICAgYWNjb3VudCxcbiAgICAgICAgICAgIG1lc3NhZ2VCYXNlNjQ6IHBhcmFtcy5tZXNzYWdlLm1lc3NhZ2VCb2R5QmFzZTY0LFxuICAgICAgICB9KTtcbiAgICB9XG5cbiAgICAvLyBBZGRyZXNzIHByb2Nlc3NpbmdcblxuICAgIGFzeW5jIGNvbnZlcnRBZGRyZXNzKFxuICAgICAgICBwYXJhbXM6IFRPTkNvbnRyYWN0Q29udmVydEFkZHJlc3NQYXJhbXMsXG4gICAgKTogUHJvbWlzZTxUT05Db250cmFjdENvbnZlcnRBZGRyZXNzUmVzdWx0PiB7XG4gICAgICAgIHJldHVybiB0aGlzLnJlcXVlc3RDb3JlKCdjb250cmFjdHMuYWRkcmVzcy5jb252ZXJ0JywgcGFyYW1zKTtcbiAgICB9XG5cbiAgICAvLyBJbnRlcm5hbHNcblxuICAgIGFzeW5jIGludGVybmFsRGVwbG95TmF0aXZlKHBhcmFtczogVE9OQ29udHJhY3REZXBsb3lQYXJhbXMpOiBQcm9taXNlPFRPTkNvbnRyYWN0RGVwbG95UmVzdWx0PiB7XG4gICAgICAgIHJldHVybiB0aGlzLnJlcXVlc3RDb3JlKCdjb250cmFjdHMuZGVwbG95Jywge1xuICAgICAgICAgICAgYWJpOiBwYXJhbXMucGFja2FnZS5hYmksXG4gICAgICAgICAgICBjb25zdHJ1Y3RvckhlYWRlcjogcGFyYW1zLmNvbnN0cnVjdG9ySGVhZGVyLFxuICAgICAgICAgICAgY29uc3RydWN0b3JQYXJhbXM6IHBhcmFtcy5jb25zdHJ1Y3RvclBhcmFtcyxcbiAgICAgICAgICAgIGluaXRQYXJhbXM6IHBhcmFtcy5pbml0UGFyYW1zLFxuICAgICAgICAgICAgaW1hZ2VCYXNlNjQ6IHBhcmFtcy5wYWNrYWdlLmltYWdlQmFzZTY0LFxuICAgICAgICAgICAga2V5UGFpcjogcGFyYW1zLmtleVBhaXIsXG4gICAgICAgIH0pO1xuICAgIH1cblxuXG4gICAgYXN5bmMgaW50ZXJuYWxSdW5OYXRpdmUocGFyYW1zOiBUT05Db250cmFjdFJ1blBhcmFtcyk6IFByb21pc2U8VE9OQ29udHJhY3RSdW5SZXN1bHQ+IHtcbiAgICAgICAgcmV0dXJuIHRoaXMucmVxdWVzdENvcmUoJ2NvbnRyYWN0cy5ydW4nLCB7XG4gICAgICAgICAgICBhZGRyZXNzOiBwYXJhbXMuYWRkcmVzcyxcbiAgICAgICAgICAgIGFiaTogcGFyYW1zLmFiaSxcbiAgICAgICAgICAgIGZ1bmN0aW9uTmFtZTogcGFyYW1zLmZ1bmN0aW9uTmFtZSxcbiAgICAgICAgICAgIGhlYWRlcjogcGFyYW1zLmhlYWRlcixcbiAgICAgICAgICAgIGlucHV0OiBwYXJhbXMuaW5wdXQsXG4gICAgICAgICAgICBrZXlQYWlyOiBwYXJhbXMua2V5UGFpcixcbiAgICAgICAgfSk7XG4gICAgfVxuXG5cbiAgICBhc3luYyByZXRyeUNhbGwoY2FsbDogKGluZGV4OiBudW1iZXIpID0+IFByb21pc2U8YW55Pik6IFByb21pc2U8YW55PiB7XG4gICAgICAgIGNvbnN0IHJldHJpZXNDb3VudCA9IHRoaXMuY29uZmlnLm1lc3NhZ2VSZXRyaWVzQ291bnQoKTtcbiAgICAgICAgZm9yIChsZXQgaSA9IDA7IGkgPD0gcmV0cmllc0NvdW50OyBpICs9IDEpIHtcbiAgICAgICAgICAgIGlmIChpID4gMCkge1xuICAgICAgICAgICAgICAgIHRoaXMuY29uZmlnLmxvZyhgUmV0cnkgIyR7aX1gKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIHRyeSB7XG4gICAgICAgICAgICAgICAgcmV0dXJuIGF3YWl0IGNhbGwoaSk7XG4gICAgICAgICAgICB9IGNhdGNoIChlcnJvcikge1xuICAgICAgICAgICAgICAgIC8vIHJldHJ5IGlmIG1lc3NhZ2UgZXhwaXJlZCBvciBpZiByZXNvbHZpbmcgcmV0dXJuZWQgdGhhdCBtZXNzYWdlIGV4cGlyZWQvcmVwbGF5XG4gICAgICAgICAgICAgICAgLy8gcHJvdGVjdGlvbiBlcnJvciBvciBpZiB0cmFuc2FjdGlvbiB3aXRoIG1lc3NhZ2UgZXhwaXJlZC9yZXBsYXkgcHJvdGVjdGlvbiBlcnJvclxuICAgICAgICAgICAgICAgIC8vIHJldHVybmVkXG4gICAgICAgICAgICAgICAgY29uc3QgaXNPcmlnaW5hbE9yUmVzb2x2ZWQgPSBleGl0Q29kZSA9PiAoXG4gICAgICAgICAgICAgICAgICAgIFRPTkNsaWVudEVycm9yLmlzT3JpZ2luYWxDb250cmFjdEVycm9yKGVycm9yLCBleGl0Q29kZSlcbiAgICAgICAgICAgICAgICAgICAgfHwgVE9OQ2xpZW50RXJyb3IuaXNSZXNvbHZlZENvbnRyYWN0RXJyb3JBZnRlckV4cGlyZShlcnJvciwgZXhpdENvZGUpXG4gICAgICAgICAgICAgICAgKTtcbiAgICAgICAgICAgICAgICBjb25zdCB1c2VSZXRyeSA9IGVycm9yLmNvZGUgPT09IFRPTkVycm9yQ29kZS5NRVNTQUdFX0VYUElSRURcbiAgICAgICAgICAgICAgICAgICAgfHwgaXNPcmlnaW5hbE9yUmVzb2x2ZWQoVE9OQ29udHJhY3RFeGl0Q29kZS5SRVBMQVlfUFJPVEVDVElPTilcbiAgICAgICAgICAgICAgICAgICAgfHwgaXNPcmlnaW5hbE9yUmVzb2x2ZWQoVE9OQ29udHJhY3RFeGl0Q29kZS5NRVNTQUdFX0VYUElSRUQpO1xuICAgICAgICAgICAgICAgIGlmICghdXNlUmV0cnkgfHwgaSA9PT0gcmV0cmllc0NvdW50KSB7XG4gICAgICAgICAgICAgICAgICAgIHRocm93IGVycm9yO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgICB0aHJvdyBUT05DbGllbnRFcnJvci5pbnRlcm5hbEVycm9yKFxuICAgICAgICAgICAgJ0FsbCByZXRyeSBhdHRlbXB0cyBmYWlsZWQnLFxuICAgICAgICAgICAgYXdhaXQgdGhpcy5jb21wbGV0ZUVycm9yRGF0YSgpLFxuICAgICAgICApO1xuICAgIH1cblxuXG4gICAgYXN5bmMgaW50ZXJuYWxEZXBsb3lKcyhcbiAgICAgICAgcGFyYW1zOiBUT05Db250cmFjdERlcGxveVBhcmFtcyxcbiAgICAgICAgcGFyZW50U3Bhbj86IChTcGFuIHwgU3BhbkNvbnRleHQpLFxuICAgICk6IFByb21pc2U8VE9OQ29udHJhY3REZXBsb3lSZXN1bHQ+IHtcbiAgICAgICAgdGhpcy5jb25maWcubG9nKCdEZXBsb3kgc3RhcnQnKTtcbiAgICAgICAgcmV0dXJuIHRoaXMucmV0cnlDYWxsKGFzeW5jIChyZXRyeUluZGV4KSA9PiB7XG4gICAgICAgICAgICBjb25zdCBkZXBsb3lNZXNzYWdlID0gYXdhaXQgdGhpcy5jcmVhdGVEZXBsb3lNZXNzYWdlKHBhcmFtcywgcmV0cnlJbmRleCk7XG4gICAgICAgICAgICBpZiAoYXdhaXQgdGhpcy5pc0RlcGxveWVkKGRlcGxveU1lc3NhZ2UuYWRkcmVzcywgcGFyZW50U3BhbikpIHtcbiAgICAgICAgICAgICAgICByZXR1cm4ge1xuICAgICAgICAgICAgICAgICAgICBhZGRyZXNzOiBkZXBsb3lNZXNzYWdlLmFkZHJlc3MsXG4gICAgICAgICAgICAgICAgICAgIGFscmVhZHlEZXBsb3llZDogdHJ1ZSxcbiAgICAgICAgICAgICAgICB9O1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgY29uc3QgcHJvY2Vzc2luZyA9IGF3YWl0IHRoaXMuc2VuZE1lc3NhZ2UoZGVwbG95TWVzc2FnZS5tZXNzYWdlLCBwYXJlbnRTcGFuKTtcbiAgICAgICAgICAgIHJldHVybiB0aGlzLndhaXRGb3JEZXBsb3lUcmFuc2FjdGlvbihkZXBsb3lNZXNzYWdlLCBwcm9jZXNzaW5nLCBwYXJlbnRTcGFuKTtcbiAgICAgICAgfSk7XG4gICAgfVxuXG5cbiAgICBhc3luYyBpbnRlcm5hbFJ1bkpzKFxuICAgICAgICBwYXJhbXM6IFRPTkNvbnRyYWN0UnVuUGFyYW1zLFxuICAgICAgICBwYXJlbnRTcGFuPzogKFNwYW4gfCBTcGFuQ29udGV4dCksXG4gICAgKTogUHJvbWlzZTxUT05Db250cmFjdFJ1blJlc3VsdD4ge1xuICAgICAgICB0aGlzLmNvbmZpZy5sb2coJ1J1biBzdGFydCcpO1xuICAgICAgICByZXR1cm4gdGhpcy5yZXRyeUNhbGwoYXN5bmMgKHJldHJ5SW5kZXgpID0+IHtcbiAgICAgICAgICAgIGNvbnN0IHJ1bk1lc3NhZ2UgPSBhd2FpdCB0aGlzLmNyZWF0ZVJ1bk1lc3NhZ2UocGFyYW1zLCByZXRyeUluZGV4KTtcbiAgICAgICAgICAgIGNvbnN0IHByb2Nlc3NpbmcgPSBhd2FpdCB0aGlzLnNlbmRNZXNzYWdlKHJ1bk1lc3NhZ2UubWVzc2FnZSwgcGFyZW50U3Bhbik7XG4gICAgICAgICAgICByZXR1cm4gdGhpcy53YWl0Rm9yUnVuVHJhbnNhY3Rpb24ocnVuTWVzc2FnZSwgcHJvY2Vzc2luZywgcGFyZW50U3Bhbik7XG4gICAgICAgIH0pO1xuICAgIH1cblxuXG4gICAgYXN5bmMgZ2V0QWNjb3VudChcbiAgICAgICAgYWRkcmVzczogc3RyaW5nLFxuICAgICAgICBhY3RpdmU6IGJvb2xlYW4sXG4gICAgICAgIHdhaXRQYXJhbXM/OiBUT05Db250cmFjdEFjY291bnRXYWl0UGFyYW1zLFxuICAgICAgICBwYXJlbnRTcGFuPzogKFNwYW4gfCBTcGFuQ29udGV4dCksXG4gICAgKTogUHJvbWlzZTxRQWNjb3VudD4ge1xuICAgICAgICBjb25zdCBmaWx0ZXI6IHsgW3N0cmluZ106IGFueSB9ID0ge1xuICAgICAgICAgICAgaWQ6IHsgZXE6IGFkZHJlc3MgfSxcbiAgICAgICAgfTtcbiAgICAgICAgaWYgKHdhaXRQYXJhbXMgJiYgd2FpdFBhcmFtcy50cmFuc2FjdGlvbkx0KSB7XG4gICAgICAgICAgICBmaWx0ZXIubGFzdF90cmFuc19sdCA9IHsgZ2U6IHdhaXRQYXJhbXMudHJhbnNhY3Rpb25MdCB9O1xuICAgICAgICB9XG4gICAgICAgIGlmIChhY3RpdmUpIHtcbiAgICAgICAgICAgIGZpbHRlci5hY2NfdHlwZSA9IHsgZXE6IFFBY2NvdW50VHlwZS5hY3RpdmUgfTtcbiAgICAgICAgfVxuXG4gICAgICAgIHRoaXMuY29uZmlnLmxvZygnZ2V0QWNjb3VudC4gRmlsdGVyJywgZmlsdGVyKTtcbiAgICAgICAgY29uc3QgYWNjb3VudHMgPSBhd2FpdCB0aGlzLnF1ZXJpZXMuYWNjb3VudHMucXVlcnkoe1xuICAgICAgICAgICAgZmlsdGVyLFxuICAgICAgICAgICAgcmVzdWx0OiAnaWQgYWNjX3R5cGUgYm9jIGNvZGVfaGFzaCBkYXRhX2hhc2ggYmFsYW5jZSBiYWxhbmNlX290aGVyIHsgY3VycmVuY3kgdmFsdWUgfSBsYXN0X3BhaWQnLFxuICAgICAgICAgICAgLi4uKHdhaXRQYXJhbXMgJiYgd2FpdFBhcmFtcy50aW1lb3V0ID8geyB0aW1lb3V0OiB3YWl0UGFyYW1zLnRpbWVvdXQgfSA6IHt9KSxcbiAgICAgICAgICAgIHBhcmVudFNwYW4sXG4gICAgICAgIH0pO1xuICAgICAgICBpZiAoYWNjb3VudHMubGVuZ3RoID09PSAwKSB7XG4gICAgICAgICAgICB0aHJvdyBUT05DbGllbnRFcnJvci5hY2NvdW50TWlzc2luZyhcbiAgICAgICAgICAgICAgICBhZGRyZXNzLFxuICAgICAgICAgICAgICAgIGF3YWl0IHRoaXMuY29tcGxldGVFcnJvckRhdGEoe1xuICAgICAgICAgICAgICAgICAgICBhZGRyZXNzLFxuICAgICAgICAgICAgICAgIH0pLFxuICAgICAgICAgICAgKTtcbiAgICAgICAgfVxuICAgICAgICBjb25zdCBhY2NvdW50ID0gYWNjb3VudHNbMF07XG4gICAgICAgIHJlbW92ZVR5cGVOYW1lKGFjY291bnQpO1xuICAgICAgICB0aGlzLmNvbmZpZy5sb2coJ2dldEFjY291bnQuIEFjY291bnQgcmVjZWl2ZWQnLCBhY2NvdW50KTtcbiAgICAgICAgcmV0dXJuIGFjY291bnQ7XG4gICAgfVxuXG4gICAgYXN5bmMgaW50ZXJuYWxSdW5Mb2NhbEpzKFxuICAgICAgICBwYXJhbXM6IFRPTkNvbnRyYWN0UnVuTG9jYWxQYXJhbXMsXG4gICAgICAgIHBhcmVudFNwYW4/OiAoU3BhbiB8IFNwYW5Db250ZXh0KSxcbiAgICApOiBQcm9taXNlPFRPTkNvbnRyYWN0UnVuTG9jYWxSZXN1bHQ+IHtcbiAgICAgICAgY29uc3QgYWRkcmVzcyA9IHBhcmFtcy5hZGRyZXNzO1xuICAgICAgICBpZiAoIWFkZHJlc3MpIHtcbiAgICAgICAgICAgIFRPTkNsaWVudEVycm9yLmFkZHJlc3NSZXF1aXJlZEZvclJ1bkxvY2FsKFxuICAgICAgICAgICAgICAgIGF3YWl0IHRoaXMuY29tcGxldGVFcnJvckRhdGEoe1xuICAgICAgICAgICAgICAgICAgICBhZGRyZXNzLFxuICAgICAgICAgICAgICAgICAgICBmdW5jdGlvbl9uYW1lOiBwYXJhbXMuZnVuY3Rpb25OYW1lLFxuICAgICAgICAgICAgICAgIH0pLFxuICAgICAgICAgICAgKTtcbiAgICAgICAgfVxuICAgICAgICBjb25zdCBhY2NvdW50ID0gcGFyYW1zLmFjY291bnQgfHwgKGF3YWl0IHRoaXMuZ2V0QWNjb3VudChcbiAgICAgICAgICAgIGFkZHJlc3MsXG4gICAgICAgICAgICBmYWxzZSxcbiAgICAgICAgICAgIHBhcmFtcy53YWl0UGFyYW1zLFxuICAgICAgICAgICAgcGFyZW50U3BhbixcbiAgICAgICAgKSk7XG4gICAgICAgIGlmICghYWNjb3VudC5jb2RlX2hhc2gpIHtcbiAgICAgICAgICAgIHRocm93IFRPTkNsaWVudEVycm9yLmFjY291bnRDb2RlTWlzc2luZyhcbiAgICAgICAgICAgICAgICBhZGRyZXNzLFxuICAgICAgICAgICAgICAgIChhY2NvdW50OiBhbnkpLmJhbGFuY2UsXG4gICAgICAgICAgICAgICAgYXdhaXQgdGhpcy5jb21wbGV0ZUVycm9yRGF0YSh7XG4gICAgICAgICAgICAgICAgICAgIGFkZHJlc3MsXG4gICAgICAgICAgICAgICAgICAgIGZ1bmN0aW9uX25hbWU6IHBhcmFtcy5mdW5jdGlvbk5hbWUsXG4gICAgICAgICAgICAgICAgfSksXG4gICAgICAgICAgICApO1xuICAgICAgICB9XG4gICAgICAgIHJldHVybiB0aGlzLnJlcXVlc3RDb3JlKCdjb250cmFjdHMucnVuLmxvY2FsJywge1xuICAgICAgICAgICAgYWRkcmVzcyxcbiAgICAgICAgICAgIGFjY291bnQsXG4gICAgICAgICAgICBhYmk6IHBhcmFtcy5hYmksXG4gICAgICAgICAgICBmdW5jdGlvbk5hbWU6IHBhcmFtcy5mdW5jdGlvbk5hbWUsXG4gICAgICAgICAgICBpbnB1dDogcGFyYW1zLmlucHV0LFxuICAgICAgICAgICAga2V5UGFpcjogcGFyYW1zLmtleVBhaXIsXG4gICAgICAgICAgICBmdWxsUnVuOiBwYXJhbXMuZnVsbFJ1bixcbiAgICAgICAgfSk7XG4gICAgfVxuXG4gICAgYXN5bmMgaW50ZXJuYWxSdW5NZXNzYWdlTG9jYWxKcyhcbiAgICAgICAgcGFyYW1zOiBUT05Db250cmFjdFJ1bk1lc3NhZ2VMb2NhbFBhcmFtcyxcbiAgICAgICAgcGFyZW50U3Bhbj86IChTcGFuIHwgU3BhbkNvbnRleHQpLFxuICAgICk6IFByb21pc2U8VE9OQ29udHJhY3RSdW5Mb2NhbFJlc3VsdD4ge1xuICAgICAgICBjb25zdCBhZGRyZXNzID0gcGFyYW1zLmFkZHJlc3M7XG4gICAgICAgIGlmICghYWRkcmVzcykge1xuICAgICAgICAgICAgdGhyb3cgVE9OQ2xpZW50RXJyb3IuYWRkcmVzc1JlcXVpcmVkRm9yUnVuTG9jYWwoYXdhaXQgdGhpcy5jb21wbGV0ZUVycm9yRGF0YSh7XG4gICAgICAgICAgICAgICAgYWRkcmVzcyxcbiAgICAgICAgICAgICAgICBmdW5jdGlvbl9uYW1lOiBwYXJhbXMuZnVuY3Rpb25OYW1lLFxuICAgICAgICAgICAgfSkpO1xuICAgICAgICB9XG4gICAgICAgIGNvbnN0IGFjY291bnQgPSBwYXJhbXMuYWNjb3VudCB8fCAoYXdhaXQgdGhpcy5nZXRBY2NvdW50KFxuICAgICAgICAgICAgYWRkcmVzcyxcbiAgICAgICAgICAgIGZhbHNlLFxuICAgICAgICAgICAgcGFyYW1zLndhaXRQYXJhbXMsXG4gICAgICAgICAgICBwYXJlbnRTcGFuLFxuICAgICAgICApKTtcbiAgICAgICAgaWYgKCFhY2NvdW50LmNvZGVfaGFzaCkge1xuICAgICAgICAgICAgdGhyb3cgVE9OQ2xpZW50RXJyb3IuYWNjb3VudENvZGVNaXNzaW5nKFxuICAgICAgICAgICAgICAgIGFkZHJlc3MsXG4gICAgICAgICAgICAgICAgKGFjY291bnQ6IGFueSkuYmFsYW5jZSxcbiAgICAgICAgICAgICAgICBhd2FpdCB0aGlzLmNvbXBsZXRlRXJyb3JEYXRhKHtcbiAgICAgICAgICAgICAgICAgICAgYWRkcmVzcyxcbiAgICAgICAgICAgICAgICAgICAgZnVuY3Rpb25fbmFtZTogcGFyYW1zLmZ1bmN0aW9uTmFtZSxcbiAgICAgICAgICAgICAgICB9KSxcbiAgICAgICAgICAgICk7XG4gICAgICAgIH1cbiAgICAgICAgcmV0dXJuIHRoaXMucmVxdWVzdENvcmUoJ2NvbnRyYWN0cy5ydW4ubG9jYWwubXNnJywge1xuICAgICAgICAgICAgYWRkcmVzcyxcbiAgICAgICAgICAgIGFjY291bnQsXG4gICAgICAgICAgICBhYmk6IHBhcmFtcy5hYmksXG4gICAgICAgICAgICBmdW5jdGlvbk5hbWU6IHBhcmFtcy5mdW5jdGlvbk5hbWUsXG4gICAgICAgICAgICBtZXNzYWdlQmFzZTY0OiBwYXJhbXMubWVzc2FnZUJvZHlCYXNlNjQsXG4gICAgICAgICAgICBmdWxsUnVuOiBwYXJhbXMuZnVsbFJ1bixcbiAgICAgICAgfSk7XG4gICAgfVxuXG4gICAgYXN5bmMgaW50ZXJuYWxTaWduKFxuICAgICAgICB1bnNpZ25lZDogVE9OQ29udHJhY3RVbnNpZ25lZE1lc3NhZ2UsXG4gICAgICAgIHNvdXJjZTogU2lnbmluZ1NvdXJjZSxcbiAgICApOiBQcm9taXNlPFNpZ25SZXN1bHQ+IHtcbiAgICAgICAgY29uc3QgbWVzc2FnZSA9IHtcbiAgICAgICAgICAgIGJhc2U2NDogdW5zaWduZWQuYnl0ZXNUb1NpZ25CYXNlNjQsXG4gICAgICAgIH07XG4gICAgICAgIGNvbnN0IGJveCA9IHNvdXJjZS5ib3g7XG4gICAgICAgIGlmIChib3gpIHtcbiAgICAgICAgICAgIHJldHVybiB7XG4gICAgICAgICAgICAgICAgc2lnbkJ5dGVzQmFzZTY0OiBhd2FpdCBib3guc2lnbihtZXNzYWdlLCBUT05PdXRwdXRFbmNvZGluZy5CYXNlNjQpLFxuICAgICAgICAgICAgICAgIHB1YmxpY0tleUhleDogYXdhaXQgYm94LmdldFB1YmxpY0tleSgpLFxuICAgICAgICAgICAgfTtcbiAgICAgICAgfVxuICAgICAgICBjb25zdCBrZXlzID0gc291cmNlLmtleXM7XG4gICAgICAgIGlmIChrZXlzKSB7XG4gICAgICAgICAgICBjb25zdCBzaWduS2V5cyA9IGF3YWl0IHRoaXMuY3J5cHRvLm5hY2xTaWduS2V5cGFpckZyb21TZWNyZXRLZXkoa2V5cy5zZWNyZXQpO1xuICAgICAgICAgICAgcmV0dXJuIHtcbiAgICAgICAgICAgICAgICBzaWduQnl0ZXNCYXNlNjQ6IGF3YWl0IHRoaXMuY3J5cHRvLm5hY2xTaWduRGV0YWNoZWQoXG4gICAgICAgICAgICAgICAgICAgIG1lc3NhZ2UsXG4gICAgICAgICAgICAgICAgICAgIHNpZ25LZXlzLnNlY3JldCxcbiAgICAgICAgICAgICAgICAgICAgVE9OT3V0cHV0RW5jb2RpbmcuQmFzZTY0LFxuICAgICAgICAgICAgICAgICksXG4gICAgICAgICAgICAgICAgcHVibGljS2V5SGV4OiBzaWduS2V5cy5wdWJsaWMsXG4gICAgICAgICAgICB9O1xuICAgICAgICB9XG4gICAgICAgIHRocm93IFRPTkNsaWVudEVycm9yLnNpZ25pbmdTb3VyY2VJc05vdFNwZWNpZmllZCgpO1xuICAgIH1cbn1cblxuVE9OQ29udHJhY3RzTW9kdWxlLm1vZHVsZU5hbWUgPSAnVE9OQ29udHJhY3RzTW9kdWxlJztcblxuY29uc3QgQkxPQ0tfRklFTERTID0gYFxuICAgIGlkXG4gICAgZ2VuX3V0aW1lXG4gICAgYWZ0ZXJfc3BsaXRcbiAgICB3b3JrY2hhaW5faWRcbiAgICBzaGFyZFxuICAgIGluX21zZ19kZXNjciB7XG4gICAgICAgIG1zZ19pZFxuICAgICAgICB0cmFuc2FjdGlvbl9pZFxuICAgIH1cbmA7XG5cbmNvbnN0IFRSQU5TQUNUSU9OX0ZJRUxEU19PUkRJTkFSWSA9IGBcbiAgICBpZFxuICAgIGFib3J0ZWRcbiAgICBjb21wdXRlIHtcbiAgICAgICAgc2tpcHBlZF9yZWFzb25cbiAgICAgICAgZXhpdF9jb2RlXG4gICAgICAgIHN1Y2Nlc3NcbiAgICAgICAgZ2FzX2ZlZXNcbiAgICB9XG4gICAgc3RvcmFnZSB7XG4gICAgICAgc3RhdHVzX2NoYW5nZVxuICAgICAgIHN0b3JhZ2VfZmVlc19jb2xsZWN0ZWRcbiAgICB9XG4gICAgYWN0aW9uIHtcbiAgICAgICAgc3VjY2Vzc1xuICAgICAgICB2YWxpZFxuICAgICAgICBub19mdW5kc1xuICAgICAgICByZXN1bHRfY29kZVxuICAgICAgICB0b3RhbF9md2RfZmVlc1xuICAgICAgICB0b3RhbF9hY3Rpb25fZmVlc1xuICAgIH1cbiAgICBpbl9tc2dcbiAgICBub3dcbiAgICBvdXRfbXNnc1xuICAgIG91dF9tZXNzYWdlcyB7XG4gICAgICAgIGlkXG4gICAgICAgIGJvZHlcbiAgICAgICAgbXNnX3R5cGVcbiAgICAgICAgdmFsdWVcbiAgICB9XG4gICAgc3RhdHVzXG4gICAgdG90YWxfZmVlc1xuYDtcbiJdfQ==