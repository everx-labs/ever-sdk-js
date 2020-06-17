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

var _TONQueriesModule = _interopRequireDefault(require("./TONQueriesModule"));

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
                  id: {
                    eq: params.address
                  }
                }, 'balance', undefined, undefined, undefined, parentSpan);

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
                return this.getAccount(address, false);

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
        var constructorHeader, message;
        return _regenerator["default"].wrap(function _callee12$(_context12) {
          while (1) {
            switch (_context12.prev = _context12.next) {
              case 0:
                this.config.log('createDeployMessage', params);
                constructorHeader = this.makeExpireHeader(params["package"].abi, params.constructorHeader, retryIndex);
                _context12.next = 4;
                return this.requestCore('contracts.deploy.message', {
                  abi: params["package"].abi,
                  constructorHeader: constructorHeader,
                  constructorParams: params.constructorParams,
                  initParams: params.initParams,
                  imageBase64: params["package"].imageBase64,
                  keyPair: params.keyPair,
                  workchainId: params.workchainId
                });

              case 4:
                message = _context12.sent;
                return _context12.abrupt("return", {
                  message: {
                    messageId: message.messageId,
                    messageBodyBase64: message.messageBodyBase64,
                    expire: constructorHeader === null || constructorHeader === void 0 ? void 0 : constructorHeader.expire
                  },
                  address: message.address,
                  creationTime: Date.now()
                });

              case 6:
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
        var header, message;
        return _regenerator["default"].wrap(function _callee13$(_context13) {
          while (1) {
            switch (_context13.prev = _context13.next) {
              case 0:
                this.config.log('createRunMessage', params);
                header = this.makeExpireHeader(params.abi, params.header, retryIndex);
                _context13.next = 4;
                return this.requestCore('contracts.run.message', {
                  address: params.address,
                  abi: params.abi,
                  functionName: params.functionName,
                  header: header,
                  input: params.input,
                  keyPair: params.keyPair
                });

              case 4:
                message = _context13.sent;
                message.expire = header === null || header === void 0 ? void 0 : header.expire;
                return _context13.abrupt("return", {
                  address: params.address,
                  abi: params.abi,
                  functionName: params.functionName,
                  message: message,
                  creationTime: Date.now()
                });

              case 7:
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
        var constructorHeader, result;
        return _regenerator["default"].wrap(function _callee14$(_context14) {
          while (1) {
            switch (_context14.prev = _context14.next) {
              case 0:
                constructorHeader = this.makeExpireHeader(params["package"].abi, params.constructorHeader, retryIndex);
                _context14.next = 3;
                return this.requestCore('contracts.deploy.encode_unsigned_message', {
                  abi: params["package"].abi,
                  constructorHeader: constructorHeader,
                  constructorParams: params.constructorParams,
                  initParams: params.initParams,
                  imageBase64: params["package"].imageBase64,
                  publicKeyHex: params.keyPair["public"],
                  workchainId: params.workchainId
                });

              case 3:
                result = _context14.sent;
                return _context14.abrupt("return", {
                  address: result.addressHex,
                  signParams: _objectSpread(_objectSpread({}, result.encoded), {}, {
                    abi: params["package"].abi,
                    expire: constructorHeader === null || constructorHeader === void 0 ? void 0 : constructorHeader.expire
                  })
                });

              case 5:
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
        var header, signParams;
        return _regenerator["default"].wrap(function _callee15$(_context15) {
          while (1) {
            switch (_context15.prev = _context15.next) {
              case 0:
                header = this.makeExpireHeader(params.abi, params.header, retryIndex);
                _context15.next = 3;
                return this.requestCore('contracts.run.encode_unsigned_message', {
                  address: params.address,
                  abi: params.abi,
                  functionName: params.functionName,
                  header: header,
                  input: params.input
                });

              case 3:
                signParams = _context15.sent;
                return _context15.abrupt("return", {
                  address: params.address,
                  functionName: params.functionName,
                  signParams: _objectSpread(_objectSpread({}, signParams), {}, {
                    abi: params.abi,
                    expire: header === null || header === void 0 ? void 0 : header.expire
                  })
                });

              case 5:
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
                  message: message,
                  creationTime: Date.now()
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
                  message: message,
                  creationTime: Date.now()
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
    key: "getMessageId",
    value: function () {
      var _getMessageId = _asyncToGenerator( /*#__PURE__*/_regenerator["default"].mark(function _callee28(message) {
        return _regenerator["default"].wrap(function _callee28$(_context28) {
          while (1) {
            switch (_context28.prev = _context28.next) {
              case 0:
                _context28.t0 = message.messageId;

                if (_context28.t0) {
                  _context28.next = 5;
                  break;
                }

                _context28.next = 4;
                return this.getBocHash({
                  bocBase64: message.messageBodyBase64
                });

              case 4:
                _context28.t0 = _context28.sent.hash;

              case 5:
                return _context28.abrupt("return", _context28.t0);

              case 6:
              case "end":
                return _context28.stop();
            }
          }
        }, _callee28, this);
      }));

      function getMessageId(_x36) {
        return _getMessageId.apply(this, arguments);
      }

      return getMessageId;
    }()
  }, {
    key: "sendMessage",
    value: function () {
      var _sendMessage = _asyncToGenerator( /*#__PURE__*/_regenerator["default"].mark(function _callee29(params, parentSpan) {
        var expire, serverTimeDelta, id, idBase64;
        return _regenerator["default"].wrap(function _callee29$(_context29) {
          while (1) {
            switch (_context29.prev = _context29.next) {
              case 0:
                expire = params.expire;

                if (!(expire && Date.now() > expire * 1000)) {
                  _context29.next = 3;
                  break;
                }

                throw _TONClient.TONClientError.sendNodeRequestFailed('Message already expired');

              case 3:
                _context29.t0 = Math;
                _context29.next = 6;
                return this.queries.serverTimeDelta(parentSpan);

              case 6:
                _context29.t1 = _context29.sent;
                serverTimeDelta = _context29.t0.abs.call(_context29.t0, _context29.t1);

                if (!(serverTimeDelta > this.config.outOfSyncThreshold())) {
                  _context29.next = 11;
                  break;
                }

                this.queries.dropServerTimeDelta();
                throw _TONClient.TONClientError.clockOutOfSync();

              case 11:
                _context29.next = 13;
                return this.getMessageId(params);

              case 13:
                id = _context29.sent;
                idBase64 = Buffer.from(id, 'hex').toString('base64');
                _context29.next = 17;
                return this.queries.postRequests([{
                  id: idBase64,
                  body: params.messageBodyBase64
                }], parentSpan);

              case 17:
                this.config.log('sendMessage. Request posted', id);
                return _context29.abrupt("return", id);

              case 19:
              case "end":
                return _context29.stop();
            }
          }
        }, _callee29, this);
      }));

      function sendMessage(_x37, _x38) {
        return _sendMessage.apply(this, arguments);
      }

      return sendMessage;
    }()
  }, {
    key: "processMessage",
    value: function () {
      var _processMessage = _asyncToGenerator( /*#__PURE__*/_regenerator["default"].mark(function _callee30(message, resultFields, parentSpan, retryIndex, address, abi, functionName, messageCreationTime) {
        return _regenerator["default"].wrap(function _callee30$(_context30) {
          while (1) {
            switch (_context30.prev = _context30.next) {
              case 0:
                _context30.next = 2;
                return this.sendMessage(message, parentSpan);

              case 2:
                return _context30.abrupt("return", this.waitForTransaction(address || '', message, resultFields, parentSpan, retryIndex, messageCreationTime, abi, functionName));

              case 3:
              case "end":
                return _context30.stop();
            }
          }
        }, _callee30, this);
      }));

      function processMessage(_x39, _x40, _x41, _x42, _x43, _x44, _x45, _x46) {
        return _processMessage.apply(this, arguments);
      }

      return processMessage;
    }()
  }, {
    key: "waitForTransaction",
    value: function () {
      var _waitForTransaction = _asyncToGenerator( /*#__PURE__*/_regenerator["default"].mark(function _callee33(address, message, resultFields, parentSpan, retryIndex, messageCreationTime, abi, functionName) {
        var _this6 = this;

        var messageId, config, processingTimeout, promises, serverInfo, operationId, transaction, sendTime, blockTime, expire, blockTimeout, waitExpired, transactionNow;
        return _regenerator["default"].wrap(function _callee33$(_context33) {
          while (1) {
            switch (_context33.prev = _context33.next) {
              case 0:
                _context33.next = 2;
                return this.getMessageId(message);

              case 2:
                messageId = _context33.sent;
                config = this.config;
                processingTimeout = config.messageProcessingTimeout(retryIndex);
                promises = [];
                _context33.next = 8;
                return this.queries.getServerInfo(parentSpan);

              case 8:
                serverInfo = _context33.sent;
                operationId = serverInfo.supportsOperationId ? this.queries.generateOperationId() : undefined;
                transaction = null;
                sendTime = Math.round(Date.now() / 1000);
                blockTime = null;
                _context33.prev = 13;
                expire = message.expire;

                if (expire) {
                  // calculate timeout according to `expire` value (in seconds)
                  // add processing timeout as master block validation time
                  blockTimeout = expire * 1000 - Date.now() + processingTimeout; // transaction timeout must be greater then block timeout

                  processingTimeout = blockTimeout + EXTRA_TRANSACTION_WAITING_TIME;

                  waitExpired = /*#__PURE__*/function () {
                    var _ref5 = _asyncToGenerator( /*#__PURE__*/_regenerator["default"].mark(function _callee31() {
                      var _block$in_msg_descr$f;

                      var block, transactionId;
                      return _regenerator["default"].wrap(function _callee31$(_context31) {
                        while (1) {
                          switch (_context31.prev = _context31.next) {
                            case 0:
                              // wait for block, produced after `expire` to guarantee that message is rejected
                              block = null;
                              _context31.prev = 1;
                              _context31.next = 4;
                              return _this6.queries.blocks.waitFor({
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
                              block = _context31.sent;
                              _context31.next = 14;
                              break;

                            case 7:
                              _context31.prev = 7;
                              _context31.t0 = _context31["catch"](1);

                              if (!_TONClient.TONClientError.isWaitForTimeout(_context31.t0)) {
                                _context31.next = 13;
                                break;
                              }

                              throw _TONClient.TONClientError.networkSilent({
                                msgId: messageId,
                                sendTime: sendTime,
                                expire: expire,
                                timeout: blockTimeout
                              });

                            case 13:
                              throw _context31.t0;

                            case 14:
                              if (!transaction) {
                                _context31.next = 16;
                                break;
                              }

                              return _context31.abrupt("return");

                            case 16:
                              transactionId = block.in_msg_descr && ((_block$in_msg_descr$f = block.in_msg_descr.find(function (msg) {
                                return !!msg.transaction_id;
                              })) === null || _block$in_msg_descr$f === void 0 ? void 0 : _block$in_msg_descr$f.transaction_id);

                              if (transactionId) {
                                _context31.next = 19;
                                break;
                              }

                              throw _TONClient.TONClientError.internalError('Invalid block received: no transaction ID');

                            case 19:
                              _context31.prev = 19;
                              _context31.next = 22;
                              return _this6.queries.transactions.waitFor({
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
                              _context31.next = 31;
                              break;

                            case 24:
                              _context31.prev = 24;
                              _context31.t1 = _context31["catch"](19);

                              if (!_TONClient.TONClientError.isWaitForTimeout(_context31.t1)) {
                                _context31.next = 30;
                                break;
                              }

                              throw _TONClient.TONClientError.transactionLag({
                                msgId: messageId,
                                blockId: block.id,
                                transactionId: transactionId,
                                timeout: BLOCK_TRANSACTION_WAITING_TIME
                              });

                            case 30:
                              throw _context31.t1;

                            case 31:
                              blockTime = block.gen_utime;

                            case 32:
                            case "end":
                              return _context31.stop();
                          }
                        }
                      }, _callee31, null, [[1, 7], [19, 24]]);
                    }));

                    return function waitExpired() {
                      return _ref5.apply(this, arguments);
                    };
                  }();

                  promises.push(waitExpired());
                } // wait for message processing transaction


                promises.push(new Promise(function (resolve, reject) {
                  _asyncToGenerator( /*#__PURE__*/_regenerator["default"].mark(function _callee32() {
                    return _regenerator["default"].wrap(function _callee32$(_context32) {
                      while (1) {
                        switch (_context32.prev = _context32.next) {
                          case 0:
                            _context32.prev = 0;
                            _context32.next = 3;
                            return _this6.queries.transactions.waitFor({
                              filter: {
                                in_msg: {
                                  eq: messageId
                                },
                                status: {
                                  eq: QTransactionProcessingStatus.finalized
                                }
                              },
                              result: resultFields,
                              timeout: processingTimeout,
                              operationId: operationId,
                              parentSpan: parentSpan
                            });

                          case 3:
                            transaction = _context32.sent;
                            resolve();
                            _context32.next = 10;
                            break;

                          case 7:
                            _context32.prev = 7;
                            _context32.t0 = _context32["catch"](0);

                            if (_TONClient.TONClientError.isWaitForTimeout(_context32.t0)) {
                              reject(_TONClient.TONClientError.transactionWaitTimeout({
                                msgId: messageId,
                                sendTime: sendTime,
                                timeout: processingTimeout
                              }));
                            } else {
                              reject(_context32.t0);
                            }

                          case 10:
                          case "end":
                            return _context32.stop();
                        }
                      }
                    }, _callee32, null, [[0, 7]]);
                  }))();
                }));
                _context33.prev = 17;
                _context33.next = 20;
                return Promise.race(promises);

              case 20:
                _context33.prev = 20;

                if (!(promises.length > 1 && operationId)) {
                  _context33.next = 24;
                  break;
                }

                _context33.next = 24;
                return this.queries.finishOperations([operationId]);

              case 24:
                return _context33.finish(20);

              case 25:
                if (transaction) {
                  _context33.next = 27;
                  break;
                }

                throw _TONClient.TONClientError.messageExpired({
                  msgId: messageId,
                  sendTime: sendTime,
                  expire: expire,
                  blockTime: blockTime
                });

              case 27:
                transactionNow = transaction.now || 0;
                this.config.log('waitForTransaction. transaction received', {
                  id: transaction.id,
                  blockId: transaction.block_id,
                  now: "".concat(new Date(transactionNow * 1000).toISOString(), " (").concat(transactionNow, ")")
                });
                _context33.next = 41;
                break;

              case 31:
                _context33.prev = 31;
                _context33.t0 = _context33["catch"](13);
                this.config.log('waitForTransaction. Error recieved', _context33.t0);

                if (!(_TONClient.TONClientError.isMessageExpired(_context33.t0) || _TONClient.TONClientError.isClientError(_context33.t0, _TONClient.TONClientError.code.TRANSACTION_WAIT_TIMEOUT))) {
                  _context33.next = 40;
                  break;
                }

                _context33.next = 37;
                return this.resolveDetailedError(_context33.t0, message.messageBodyBase64, messageCreationTime || Date.now(), address);

              case 37:
                throw _context33.sent;

              case 40:
                throw _context33.t0;

              case 41:
                removeTypeName(transaction);
                _context33.next = 44;
                return this.checkTransaction(address, transaction, abi, functionName);

              case 44:
                return _context33.abrupt("return", transaction);

              case 45:
              case "end":
                return _context33.stop();
            }
          }
        }, _callee33, this, [[13, 31], [17,, 20, 25]]);
      }));

      function waitForTransaction(_x47, _x48, _x49, _x50, _x51, _x52, _x53, _x54) {
        return _waitForTransaction.apply(this, arguments);
      }

      return waitForTransaction;
    }()
  }, {
    key: "checkTransaction",
    value: function () {
      var _checkTransaction = _asyncToGenerator( /*#__PURE__*/_regenerator["default"].mark(function _callee34(address, transaction, abi, functionName) {
        var accounts;
        return _regenerator["default"].wrap(function _callee34$(_context34) {
          while (1) {
            switch (_context34.prev = _context34.next) {
              case 0:
                _context34.prev = 0;
                _context34.next = 3;
                return this.requestCore('contracts.process.transaction', {
                  transaction: transaction,
                  abi: abi || null,
                  functionName: functionName || null,
                  address: address
                });

              case 3:
                _context34.next = 15;
                break;

              case 5:
                _context34.prev = 5;
                _context34.t0 = _context34["catch"](0);
                _context34.next = 9;
                return this.queries.accounts.query({
                  filter: {
                    id: {
                      eq: address
                    }
                  },
                  result: 'acc_type balance',
                  timeout: 1000
                });

              case 9:
                accounts = _context34.sent;

                if (!(accounts.length === 0)) {
                  _context34.next = 12;
                  break;
                }

                throw _TONClient.TONClientError.accountMissing(address);

              case 12:
                if (!_TONClient.TONClientError.isContractError(_context34.t0, _TONClient.TONContractExitCode.NO_GAS)) {
                  _context34.next = 14;
                  break;
                }

                throw _TONClient.TONClientError.accountBalanceTooLow(address, accounts[0].balance);

              case 14:
                throw _context34.t0;

              case 15:
              case "end":
                return _context34.stop();
            }
          }
        }, _callee34, this, [[0, 5]]);
      }));

      function checkTransaction(_x55, _x56, _x57, _x58) {
        return _checkTransaction.apply(this, arguments);
      }

      return checkTransaction;
    }()
  }, {
    key: "resolveDetailedError",
    value: function () {
      var _resolveDetailedError = _asyncToGenerator( /*#__PURE__*/_regenerator["default"].mark(function _callee35(error, messageBase64, time, address) {
        var accounts, account;
        return _regenerator["default"].wrap(function _callee35$(_context35) {
          while (1) {
            switch (_context35.prev = _context35.next) {
              case 0:
                _context35.next = 2;
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
                accounts = _context35.sent;

                if (!(accounts.length === 0)) {
                  _context35.next = 5;
                  break;
                }

                return _context35.abrupt("return", _TONClient.TONClientError.accountMissing(address));

              case 5:
                account = accounts[0];
                removeTypeName(account);
                _context35.prev = 7;
                _context35.next = 10;
                return this.requestCore('contracts.resolve.error', {
                  address: address,
                  account: account,
                  messageBase64: messageBase64,
                  time: Math.round(time / 1000),
                  mainError: error
                });

              case 10:
                _context35.next = 15;
                break;

              case 12:
                _context35.prev = 12;
                _context35.t0 = _context35["catch"](7);
                return _context35.abrupt("return", _context35.t0);

              case 15:
                return _context35.abrupt("return", error);

              case 16:
              case "end":
                return _context35.stop();
            }
          }
        }, _callee35, this, [[7, 12]]);
      }));

      function resolveDetailedError(_x59, _x60, _x61, _x62) {
        return _resolveDetailedError.apply(this, arguments);
      }

      return resolveDetailedError;
    }()
  }, {
    key: "isDeployed",
    value: function () {
      var _isDeployed = _asyncToGenerator( /*#__PURE__*/_regenerator["default"].mark(function _callee36(address, parentSpan) {
        var account;
        return _regenerator["default"].wrap(function _callee36$(_context36) {
          while (1) {
            switch (_context36.prev = _context36.next) {
              case 0:
                _context36.next = 2;
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
                account = _context36.sent;
                return _context36.abrupt("return", account.length > 0);

              case 4:
              case "end":
                return _context36.stop();
            }
          }
        }, _callee36, this);
      }));

      function isDeployed(_x63, _x64) {
        return _isDeployed.apply(this, arguments);
      }

      return isDeployed;
    }()
  }, {
    key: "processDeployMessage",
    value: function () {
      var _processDeployMessage = _asyncToGenerator( /*#__PURE__*/_regenerator["default"].mark(function _callee37(params, parentSpan, retryIndex) {
        return _regenerator["default"].wrap(function _callee37$(_context37) {
          while (1) {
            switch (_context37.prev = _context37.next) {
              case 0:
                this.config.log('processDeployMessage', params);
                _context37.next = 3;
                return this.isDeployed(params.address, parentSpan);

              case 3:
                if (!_context37.sent) {
                  _context37.next = 5;
                  break;
                }

                return _context37.abrupt("return", {
                  address: params.address,
                  alreadyDeployed: true
                });

              case 5:
                _context37.next = 7;
                return this.sendMessage(params.message, parentSpan);

              case 7:
                return _context37.abrupt("return", this.waitForDeployTransaction(params, parentSpan, retryIndex));

              case 8:
              case "end":
                return _context37.stop();
            }
          }
        }, _callee37, this);
      }));

      function processDeployMessage(_x65, _x66, _x67) {
        return _processDeployMessage.apply(this, arguments);
      }

      return processDeployMessage;
    }()
  }, {
    key: "waitForDeployTransaction",
    value: function () {
      var _waitForDeployTransaction = _asyncToGenerator( /*#__PURE__*/_regenerator["default"].mark(function _callee38(deployMessage, parentSpan, retryIndex) {
        var transaction;
        return _regenerator["default"].wrap(function _callee38$(_context38) {
          while (1) {
            switch (_context38.prev = _context38.next) {
              case 0:
                _context38.next = 2;
                return this.waitForTransaction(deployMessage.address, deployMessage.message, transactionDetails, parentSpan, retryIndex, deployMessage.creationTime);

              case 2:
                transaction = _context38.sent;
                this.config.log('processDeployMessage. End');
                return _context38.abrupt("return", {
                  address: deployMessage.address,
                  alreadyDeployed: false,
                  transaction: transaction
                });

              case 5:
              case "end":
                return _context38.stop();
            }
          }
        }, _callee38, this);
      }));

      function waitForDeployTransaction(_x68, _x69, _x70) {
        return _waitForDeployTransaction.apply(this, arguments);
      }

      return waitForDeployTransaction;
    }()
  }, {
    key: "processRunMessage",
    value: function () {
      var _processRunMessage = _asyncToGenerator( /*#__PURE__*/_regenerator["default"].mark(function _callee39(runMessage, parentSpan, retryIndex) {
        return _regenerator["default"].wrap(function _callee39$(_context39) {
          while (1) {
            switch (_context39.prev = _context39.next) {
              case 0:
                this.config.log('processRunMessage', runMessage);
                _context39.next = 3;
                return this.sendMessage(runMessage.message, parentSpan);

              case 3:
                return _context39.abrupt("return", this.waitForRunTransaction(runMessage, parentSpan, retryIndex));

              case 4:
              case "end":
                return _context39.stop();
            }
          }
        }, _callee39, this);
      }));

      function processRunMessage(_x71, _x72, _x73) {
        return _processRunMessage.apply(this, arguments);
      }

      return processRunMessage;
    }()
  }, {
    key: "waitForRunTransaction",
    value: function () {
      var _waitForRunTransaction = _asyncToGenerator( /*#__PURE__*/_regenerator["default"].mark(function _callee40(runMessage, parentSpan, retryIndex) {
        var _this7 = this;

        var transaction, outputMessages, externalMessages, outputs, resultOutput;
        return _regenerator["default"].wrap(function _callee40$(_context40) {
          while (1) {
            switch (_context40.prev = _context40.next) {
              case 0:
                _context40.next = 2;
                return this.waitForTransaction(runMessage.address, runMessage.message, transactionDetails, parentSpan, retryIndex, runMessage.creationTime, runMessage.abi, runMessage.functionName);

              case 2:
                transaction = _context40.sent;
                outputMessages = transaction.out_messages;

                if (!(!outputMessages || outputMessages.length === 0)) {
                  _context40.next = 6;
                  break;
                }

                return _context40.abrupt("return", {
                  output: null,
                  transaction: transaction
                });

              case 6:
                externalMessages = outputMessages.filter(function (x) {
                  return x.msg_type === QMessageType.extOut;
                });
                this.config.log('processRunMessage. Before messages parse');
                _context40.next = 10;
                return Promise.all(externalMessages.map(function (x) {
                  return _this7.decodeOutputMessageBody({
                    abi: runMessage.abi,
                    bodyBase64: x.body || ''
                  });
                }));

              case 10:
                outputs = _context40.sent;
                resultOutput = outputs.find(function (x) {
                  return x["function"].toLowerCase() === runMessage.functionName.toLowerCase();
                });
                this.config.log('processRunMessage. End');
                return _context40.abrupt("return", {
                  output: resultOutput ? resultOutput.output : null,
                  transaction: transaction
                });

              case 14:
              case "end":
                return _context40.stop();
            }
          }
        }, _callee40, this);
      }));

      function waitForRunTransaction(_x74, _x75, _x76) {
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
      var _processRunMessageLocal = _asyncToGenerator( /*#__PURE__*/_regenerator["default"].mark(function _callee41(params, waitParams, parentSpan) {
        var account;
        return _regenerator["default"].wrap(function _callee41$(_context41) {
          while (1) {
            switch (_context41.prev = _context41.next) {
              case 0:
                this.config.log('processRunMessageLocal', params);
                _context41.next = 3;
                return this.getAccount(params.address, true, waitParams, parentSpan);

              case 3:
                account = _context41.sent;
                return _context41.abrupt("return", this.requestCore('contracts.run.local.msg', {
                  address: params.address,
                  account: account,
                  abi: params.abi,
                  functionName: params.functionName,
                  messageBase64: params.message.messageBodyBase64
                }));

              case 5:
              case "end":
                return _context41.stop();
            }
          }
        }, _callee41, this);
      }));

      function processRunMessageLocal(_x77, _x78, _x79) {
        return _processRunMessageLocal.apply(this, arguments);
      }

      return processRunMessageLocal;
    }() // Fee calculation

  }, {
    key: "calcRunFees",
    value: function () {
      var _calcRunFees = _asyncToGenerator( /*#__PURE__*/_regenerator["default"].mark(function _callee42(params, parentSpan) {
        var account;
        return _regenerator["default"].wrap(function _callee42$(_context42) {
          while (1) {
            switch (_context42.prev = _context42.next) {
              case 0:
                this.config.log('calcRunFees', params);
                _context42.next = 3;
                return this.getAccount(params.address, true, params.waitParams, parentSpan);

              case 3:
                account = _context42.sent;

                if (params.emulateBalance) {
                  account.balance = this.bigBalance;
                }

                return _context42.abrupt("return", this.requestCore('contracts.run.fee', {
                  address: params.address,
                  account: account,
                  abi: params.abi,
                  functionName: params.functionName,
                  input: params.input,
                  keyPair: params.keyPair
                }));

              case 6:
              case "end":
                return _context42.stop();
            }
          }
        }, _callee42, this);
      }));

      function calcRunFees(_x80, _x81) {
        return _calcRunFees.apply(this, arguments);
      }

      return calcRunFees;
    }()
  }, {
    key: "calcDeployFees",
    value: function () {
      var _calcDeployFees = _asyncToGenerator( /*#__PURE__*/_regenerator["default"].mark(function _callee43(params, parentSpan) {
        var message;
        return _regenerator["default"].wrap(function _callee43$(_context43) {
          while (1) {
            switch (_context43.prev = _context43.next) {
              case 0:
                this.config.log('calcDeployFees', params);
                _context43.next = 3;
                return this.createDeployMessage(params);

              case 3:
                message = _context43.sent;
                return _context43.abrupt("return", this.calcMsgProcessFees({
                  address: message.address,
                  message: message.message,
                  emulateBalance: params.emulateBalance,
                  newAccount: params.newAccount
                }, parentSpan));

              case 5:
              case "end":
                return _context43.stop();
            }
          }
        }, _callee43, this);
      }));

      function calcDeployFees(_x82, _x83) {
        return _calcDeployFees.apply(this, arguments);
      }

      return calcDeployFees;
    }()
  }, {
    key: "calcMsgProcessFees",
    value: function () {
      var _calcMsgProcessFees = _asyncToGenerator( /*#__PURE__*/_regenerator["default"].mark(function _callee44(params, parentSpan) {
        var account;
        return _regenerator["default"].wrap(function _callee44$(_context44) {
          while (1) {
            switch (_context44.prev = _context44.next) {
              case 0:
                this.config.log('calcMsgProcessFees', params);
                account = {
                  balance: this.bigBalance,
                  id: params.address,
                  last_paid: Math.floor(Date.now() / 1000)
                };

                if (params.newAccount) {
                  _context44.next = 6;
                  break;
                }

                _context44.next = 5;
                return this.getAccount(params.address, false, params.waitParams, parentSpan);

              case 5:
                account = _context44.sent;

              case 6:
                if (params.emulateBalance) {
                  account.balance = this.bigBalance;
                }

                return _context44.abrupt("return", this.requestCore('contracts.run.fee.msg', {
                  address: params.address,
                  account: account,
                  messageBase64: params.message.messageBodyBase64
                }));

              case 8:
              case "end":
                return _context44.stop();
            }
          }
        }, _callee44, this);
      }));

      function calcMsgProcessFees(_x84, _x85) {
        return _calcMsgProcessFees.apply(this, arguments);
      }

      return calcMsgProcessFees;
    }() // Address processing

  }, {
    key: "convertAddress",
    value: function () {
      var _convertAddress = _asyncToGenerator( /*#__PURE__*/_regenerator["default"].mark(function _callee45(params) {
        return _regenerator["default"].wrap(function _callee45$(_context45) {
          while (1) {
            switch (_context45.prev = _context45.next) {
              case 0:
                return _context45.abrupt("return", this.requestCore('contracts.address.convert', params));

              case 1:
              case "end":
                return _context45.stop();
            }
          }
        }, _callee45, this);
      }));

      function convertAddress(_x86) {
        return _convertAddress.apply(this, arguments);
      }

      return convertAddress;
    }() // Internals

  }, {
    key: "internalDeployNative",
    value: function () {
      var _internalDeployNative = _asyncToGenerator( /*#__PURE__*/_regenerator["default"].mark(function _callee46(params) {
        return _regenerator["default"].wrap(function _callee46$(_context46) {
          while (1) {
            switch (_context46.prev = _context46.next) {
              case 0:
                return _context46.abrupt("return", this.requestCore('contracts.deploy', {
                  abi: params["package"].abi,
                  constructorHeader: params.constructorHeader,
                  constructorParams: params.constructorParams,
                  initParams: params.initParams,
                  imageBase64: params["package"].imageBase64,
                  keyPair: params.keyPair
                }));

              case 1:
              case "end":
                return _context46.stop();
            }
          }
        }, _callee46, this);
      }));

      function internalDeployNative(_x87) {
        return _internalDeployNative.apply(this, arguments);
      }

      return internalDeployNative;
    }()
  }, {
    key: "internalRunNative",
    value: function () {
      var _internalRunNative = _asyncToGenerator( /*#__PURE__*/_regenerator["default"].mark(function _callee47(params) {
        return _regenerator["default"].wrap(function _callee47$(_context47) {
          while (1) {
            switch (_context47.prev = _context47.next) {
              case 0:
                return _context47.abrupt("return", this.requestCore('contracts.run', {
                  address: params.address,
                  abi: params.abi,
                  functionName: params.functionName,
                  header: params.header,
                  input: params.input,
                  keyPair: params.keyPair
                }));

              case 1:
              case "end":
                return _context47.stop();
            }
          }
        }, _callee47, this);
      }));

      function internalRunNative(_x88) {
        return _internalRunNative.apply(this, arguments);
      }

      return internalRunNative;
    }()
  }, {
    key: "makeExpireHeader",
    value: function makeExpireHeader(abi, userHeader, retryIndex) {
      var timeout = this.config.messageExpirationTimeout(retryIndex);

      if (abi.header && abi.header.includes('expire') && !(userHeader === null || userHeader === void 0 ? void 0 : userHeader.expire)) {
        return _objectSpread(_objectSpread({}, userHeader), {}, {
          expire: Math.floor((Date.now() + timeout) / 1000) + 1
        });
      }

      return userHeader;
    }
  }, {
    key: "retryCall",
    value: function () {
      var _retryCall = _asyncToGenerator( /*#__PURE__*/_regenerator["default"].mark(function _callee48(call) {
        var retriesCount, i, useRetry;
        return _regenerator["default"].wrap(function _callee48$(_context48) {
          while (1) {
            switch (_context48.prev = _context48.next) {
              case 0:
                retriesCount = this.config.messageRetriesCount();
                i = 0;

              case 2:
                if (!(i <= retriesCount)) {
                  _context48.next = 18;
                  break;
                }

                if (i > 0) {
                  this.config.log("Retry #".concat(i));
                }

                _context48.prev = 4;
                _context48.next = 7;
                return call(i);

              case 7:
                return _context48.abrupt("return", _context48.sent);

              case 10:
                _context48.prev = 10;
                _context48.t0 = _context48["catch"](4);
                useRetry = _context48.t0.code === _TONClient.TONErrorCode.MESSAGE_EXPIRED || _TONClient.TONClientError.isContractError(_context48.t0, _TONClient.TONContractExitCode.REPLAY_PROTECTION) || _TONClient.TONClientError.isContractError(_context48.t0, _TONClient.TONContractExitCode.MESSAGE_EXPIRED);

                if (!(!useRetry || i === retriesCount)) {
                  _context48.next = 15;
                  break;
                }

                throw _context48.t0;

              case 15:
                i += 1;
                _context48.next = 2;
                break;

              case 18:
                throw _TONClient.TONClientError.internalError("retryCall: unreachable");

              case 19:
              case "end":
                return _context48.stop();
            }
          }
        }, _callee48, this, [[4, 10]]);
      }));

      function retryCall(_x89) {
        return _retryCall.apply(this, arguments);
      }

      return retryCall;
    }()
  }, {
    key: "internalDeployJs",
    value: function () {
      var _internalDeployJs = _asyncToGenerator( /*#__PURE__*/_regenerator["default"].mark(function _callee50(params, parentSpan) {
        var _this8 = this;

        return _regenerator["default"].wrap(function _callee50$(_context50) {
          while (1) {
            switch (_context50.prev = _context50.next) {
              case 0:
                this.config.log('Deploy start');
                return _context50.abrupt("return", this.retryCall( /*#__PURE__*/function () {
                  var _ref7 = _asyncToGenerator( /*#__PURE__*/_regenerator["default"].mark(function _callee49(retryIndex) {
                    var deployMessage;
                    return _regenerator["default"].wrap(function _callee49$(_context49) {
                      while (1) {
                        switch (_context49.prev = _context49.next) {
                          case 0:
                            _context49.next = 2;
                            return _this8.createDeployMessage(params, retryIndex);

                          case 2:
                            deployMessage = _context49.sent;
                            _context49.next = 5;
                            return _this8.isDeployed(deployMessage.address, parentSpan);

                          case 5:
                            if (!_context49.sent) {
                              _context49.next = 7;
                              break;
                            }

                            return _context49.abrupt("return", {
                              address: deployMessage.address,
                              alreadyDeployed: true
                            });

                          case 7:
                            _context49.next = 9;
                            return _this8.sendMessage(deployMessage.message, parentSpan);

                          case 9:
                            return _context49.abrupt("return", _this8.waitForDeployTransaction(deployMessage, parentSpan, retryIndex));

                          case 10:
                          case "end":
                            return _context49.stop();
                        }
                      }
                    }, _callee49);
                  }));

                  return function (_x92) {
                    return _ref7.apply(this, arguments);
                  };
                }()));

              case 2:
              case "end":
                return _context50.stop();
            }
          }
        }, _callee50, this);
      }));

      function internalDeployJs(_x90, _x91) {
        return _internalDeployJs.apply(this, arguments);
      }

      return internalDeployJs;
    }()
  }, {
    key: "internalRunJs",
    value: function () {
      var _internalRunJs = _asyncToGenerator( /*#__PURE__*/_regenerator["default"].mark(function _callee52(params, parentSpan) {
        var _this9 = this;

        return _regenerator["default"].wrap(function _callee52$(_context52) {
          while (1) {
            switch (_context52.prev = _context52.next) {
              case 0:
                this.config.log('Run start');
                return _context52.abrupt("return", this.retryCall( /*#__PURE__*/function () {
                  var _ref8 = _asyncToGenerator( /*#__PURE__*/_regenerator["default"].mark(function _callee51(retryIndex) {
                    var runMessage;
                    return _regenerator["default"].wrap(function _callee51$(_context51) {
                      while (1) {
                        switch (_context51.prev = _context51.next) {
                          case 0:
                            _context51.next = 2;
                            return _this9.createRunMessage(params, retryIndex);

                          case 2:
                            runMessage = _context51.sent;
                            _context51.next = 5;
                            return _this9.sendMessage(runMessage.message, parentSpan);

                          case 5:
                            return _context51.abrupt("return", _this9.waitForRunTransaction(runMessage, parentSpan, retryIndex));

                          case 6:
                          case "end":
                            return _context51.stop();
                        }
                      }
                    }, _callee51);
                  }));

                  return function (_x95) {
                    return _ref8.apply(this, arguments);
                  };
                }()));

              case 2:
              case "end":
                return _context52.stop();
            }
          }
        }, _callee52, this);
      }));

      function internalRunJs(_x93, _x94) {
        return _internalRunJs.apply(this, arguments);
      }

      return internalRunJs;
    }()
  }, {
    key: "getAccount",
    value: function () {
      var _getAccount = _asyncToGenerator( /*#__PURE__*/_regenerator["default"].mark(function _callee53(address, active, waitParams, parentSpan) {
        var filter, accounts, account;
        return _regenerator["default"].wrap(function _callee53$(_context53) {
          while (1) {
            switch (_context53.prev = _context53.next) {
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
                _context53.next = 6;
                return this.queries.accounts.query(_objectSpread(_objectSpread({
                  filter: filter,
                  result: 'id acc_type code data balance balance_other { currency value } last_paid'
                }, waitParams && waitParams.timeout ? {
                  timeout: waitParams.timeout
                } : {}), {}, {
                  parentSpan: parentSpan
                }));

              case 6:
                accounts = _context53.sent;

                if (!(accounts.length === 0)) {
                  _context53.next = 9;
                  break;
                }

                throw _TONClient.TONClientError.accountMissing(address);

              case 9:
                account = accounts[0];
                removeTypeName(account);
                this.config.log('getAccount. Account received', account);
                return _context53.abrupt("return", account);

              case 13:
              case "end":
                return _context53.stop();
            }
          }
        }, _callee53, this);
      }));

      function getAccount(_x96, _x97, _x98, _x99) {
        return _getAccount.apply(this, arguments);
      }

      return getAccount;
    }()
  }, {
    key: "internalRunLocalJs",
    value: function () {
      var _internalRunLocalJs = _asyncToGenerator( /*#__PURE__*/_regenerator["default"].mark(function _callee54(params, parentSpan) {
        var address, account;
        return _regenerator["default"].wrap(function _callee54$(_context54) {
          while (1) {
            switch (_context54.prev = _context54.next) {
              case 0:
                address = params.address;

                if (address) {
                  _context54.next = 3;
                  break;
                }

                throw _TONClient.TONClientError.addressRequiredForRunLocal();

              case 3:
                _context54.t0 = params.account;

                if (_context54.t0) {
                  _context54.next = 8;
                  break;
                }

                _context54.next = 7;
                return this.getAccount(address, false, params.waitParams, parentSpan);

              case 7:
                _context54.t0 = _context54.sent;

              case 8:
                account = _context54.t0;

                if (account.code) {
                  _context54.next = 11;
                  break;
                }

                throw _TONClient.TONClientError.accountCodeMissing(address, account.balance);

              case 11:
                return _context54.abrupt("return", this.requestCore('contracts.run.local', {
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
                return _context54.stop();
            }
          }
        }, _callee54, this);
      }));

      function internalRunLocalJs(_x100, _x101) {
        return _internalRunLocalJs.apply(this, arguments);
      }

      return internalRunLocalJs;
    }()
  }, {
    key: "internalRunMessageLocalJs",
    value: function () {
      var _internalRunMessageLocalJs = _asyncToGenerator( /*#__PURE__*/_regenerator["default"].mark(function _callee55(params, parentSpan) {
        var address, account;
        return _regenerator["default"].wrap(function _callee55$(_context55) {
          while (1) {
            switch (_context55.prev = _context55.next) {
              case 0:
                address = params.address;

                if (address) {
                  _context55.next = 3;
                  break;
                }

                throw _TONClient.TONClientError.addressRequiredForRunLocal();

              case 3:
                _context55.t0 = params.account;

                if (_context55.t0) {
                  _context55.next = 8;
                  break;
                }

                _context55.next = 7;
                return this.getAccount(address, false, params.waitParams, parentSpan);

              case 7:
                _context55.t0 = _context55.sent;

              case 8:
                account = _context55.t0;

                if (account.code) {
                  _context55.next = 11;
                  break;
                }

                throw _TONClient.TONClientError.accountCodeMissing(address, account.balance);

              case 11:
                return _context55.abrupt("return", this.requestCore('contracts.run.local.msg', {
                  address: address,
                  account: account,
                  abi: params.abi,
                  functionName: params.functionName,
                  messageBase64: params.messageBodyBase64,
                  fullRun: params.fullRun
                }));

              case 12:
              case "end":
                return _context55.stop();
            }
          }
        }, _callee55, this);
      }));

      function internalRunMessageLocalJs(_x102, _x103) {
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy9tb2R1bGVzL1RPTkNvbnRyYWN0c01vZHVsZS5qcyJdLCJuYW1lcyI6WyJUT05BZGRyZXNzU3RyaW5nVmFyaWFudCIsIkFjY291bnRJZCIsIkhleCIsIkJhc2U2NCIsIlRPTkNsaWVudFRyYW5zYWN0aW9uUGhhc2UiLCJzdG9yYWdlIiwiY29tcHV0ZVNraXBwZWQiLCJjb21wdXRlVm0iLCJhY3Rpb24iLCJ1bmtub3duIiwiVE9OQ2xpZW50Q29tcHV0ZVNraXBwZWRTdGF0dXMiLCJub1N0YXRlIiwiYmFkU3RhdGUiLCJub0dhcyIsIlRPTkNsaWVudFN0b3JhZ2VTdGF0dXMiLCJ1bmNoYW5nZWQiLCJmcm96ZW4iLCJkZWxldGVkIiwiUUluTXNnVHlwZSIsImV4dGVybmFsIiwiaWhyIiwiaW1tZWRpYXRlbHkiLCJ0cmFuc2l0IiwiZGlzY2FyZGVkRmluYWwiLCJkaXNjYXJkZWRUcmFuc2l0IiwiUU91dE1zZ1R5cGUiLCJvdXRNc2dOZXciLCJkZXF1ZXVlSW1tZWRpYXRlbHkiLCJkZXF1ZXVlIiwidHJhbnNpdFJlcXVpcmVkIiwibm9uZSIsIlFNZXNzYWdlVHlwZSIsImludGVybmFsIiwiZXh0SW4iLCJleHRPdXQiLCJRTWVzc2FnZVByb2Nlc3NpbmdTdGF0dXMiLCJxdWV1ZWQiLCJwcm9jZXNzaW5nIiwicHJlbGltaW5hcnkiLCJwcm9wb3NlZCIsImZpbmFsaXplZCIsInJlZnVzZWQiLCJ0cmFuc2l0aW5nIiwiUUJsb2NrUHJvY2Vzc2luZ1N0YXR1cyIsIlFTcGxpdFR5cGUiLCJzcGxpdCIsIm1lcmdlIiwiUUFjY291bnRUeXBlIiwidW5pbml0IiwiYWN0aXZlIiwiUVRyYW5zYWN0aW9uVHlwZSIsIm9yZGluYXJ5IiwidGljayIsInRvY2siLCJzcGxpdFByZXBhcmUiLCJzcGxpdEluc3RhbGwiLCJtZXJnZVByZXBhcmUiLCJtZXJnZUluc3RhbGwiLCJRVHJhbnNhY3Rpb25Qcm9jZXNzaW5nU3RhdHVzIiwiUUFjY291bnRTdGF0dXMiLCJub25FeGlzdCIsIlFBY2NvdW50U3RhdHVzQ2hhbmdlIiwiUUNvbXB1dGVUeXBlIiwic2tpcHBlZCIsInZtIiwiUVNraXBSZWFzb24iLCJRQm91bmNlVHlwZSIsIm5lZ0Z1bmRzIiwibm9GdW5kcyIsIm9rIiwiRVhUUkFfVFJBTlNBQ1RJT05fV0FJVElOR19USU1FIiwiQkxPQ0tfVFJBTlNBQ1RJT05fV0FJVElOR19USU1FIiwicmVtb3ZlVHlwZU5hbWUiLCJvYmoiLCJfX3R5cGVuYW1lIiwiT2JqZWN0IiwidmFsdWVzIiwiZm9yRWFjaCIsInZhbHVlIiwicmVtb3ZlUHJvcHMiLCJwYXRocyIsInJlc3VsdCIsInBhdGgiLCJkb3RQb3MiLCJpbmRleE9mIiwibmFtZSIsInN1YnN0ciIsImNoaWxkIiwicmVkdWNlZENoaWxkIiwiVE9OQ29udHJhY3RzTW9kdWxlIiwiY29uZmlnIiwiY29udGV4dCIsImdldE1vZHVsZSIsIlRPTkNvbmZpZ01vZHVsZSIsInF1ZXJpZXMiLCJUT05RdWVyaWVzTW9kdWxlIiwicGFyYW1zIiwicGFyZW50U3BhbiIsImFjY291bnRzIiwicXVlcnkiLCJpZCIsImVxIiwiYWRkcmVzcyIsInVuZGVmaW5lZCIsImxlbmd0aCIsImJhbGFuY2VHcmFtcyIsImJhbGFuY2UiLCJ0cmFjZSIsInNwYW4iLCJzZXRUYWciLCJpbnRlcm5hbERlcGxveUpzIiwiaW50ZXJuYWxSdW5KcyIsImludGVybmFsUnVuTG9jYWxKcyIsImludGVybmFsUnVuTWVzc2FnZUxvY2FsSnMiLCJjb3JlUGFyYW1zIiwiY29kZUJhc2U2NCIsImRhdGFCYXNlNjQiLCJUT05DbGllbnRFcnJvciIsImFkZHJlc3NSZXF1aXJlZEZvclJ1bkxvY2FsIiwiZ2V0QWNjb3VudCIsImFjY291bnQiLCJjb2RlIiwiYWNjb3VudENvZGVNaXNzaW5nIiwiZGF0YSIsInJlcXVlc3RDb3JlIiwiY29ucyIsIml0ZW0iLCJpbnZhbGlkQ29ucyIsInB1c2giLCJyZXRyeUluZGV4IiwibG9nIiwiY29uc3RydWN0b3JIZWFkZXIiLCJtYWtlRXhwaXJlSGVhZGVyIiwiYWJpIiwiY29uc3RydWN0b3JQYXJhbXMiLCJpbml0UGFyYW1zIiwiaW1hZ2VCYXNlNjQiLCJrZXlQYWlyIiwid29ya2NoYWluSWQiLCJtZXNzYWdlIiwibWVzc2FnZUlkIiwibWVzc2FnZUJvZHlCYXNlNjQiLCJleHBpcmUiLCJjcmVhdGlvblRpbWUiLCJEYXRlIiwibm93IiwiaGVhZGVyIiwiZnVuY3Rpb25OYW1lIiwiaW5wdXQiLCJwdWJsaWNLZXlIZXgiLCJhZGRyZXNzSGV4Iiwic2lnblBhcmFtcyIsImVuY29kZWQiLCJjcmVhdGVTaWduZWRNZXNzYWdlIiwidW5zaWduZWRNZXNzYWdlIiwidW5zaWduZWRCeXRlc0Jhc2U2NCIsInNpZ25CeXRlc0Jhc2U2NCIsImdldEJvY0hhc2giLCJib2NCYXNlNjQiLCJoYXNoIiwic2VuZE5vZGVSZXF1ZXN0RmFpbGVkIiwiTWF0aCIsInNlcnZlclRpbWVEZWx0YSIsImFicyIsIm91dE9mU3luY1RocmVzaG9sZCIsImRyb3BTZXJ2ZXJUaW1lRGVsdGEiLCJjbG9ja091dE9mU3luYyIsImdldE1lc3NhZ2VJZCIsImlkQmFzZTY0IiwiQnVmZmVyIiwiZnJvbSIsInRvU3RyaW5nIiwicG9zdFJlcXVlc3RzIiwiYm9keSIsInJlc3VsdEZpZWxkcyIsIm1lc3NhZ2VDcmVhdGlvblRpbWUiLCJzZW5kTWVzc2FnZSIsIndhaXRGb3JUcmFuc2FjdGlvbiIsInByb2Nlc3NpbmdUaW1lb3V0IiwibWVzc2FnZVByb2Nlc3NpbmdUaW1lb3V0IiwicHJvbWlzZXMiLCJnZXRTZXJ2ZXJJbmZvIiwic2VydmVySW5mbyIsIm9wZXJhdGlvbklkIiwic3VwcG9ydHNPcGVyYXRpb25JZCIsImdlbmVyYXRlT3BlcmF0aW9uSWQiLCJ0cmFuc2FjdGlvbiIsInNlbmRUaW1lIiwicm91bmQiLCJibG9ja1RpbWUiLCJibG9ja1RpbWVvdXQiLCJ3YWl0RXhwaXJlZCIsImJsb2NrIiwiYmxvY2tzIiwid2FpdEZvciIsImZpbHRlciIsIm1hc3RlciIsIm1pbl9zaGFyZF9nZW5fdXRpbWUiLCJnZSIsInRpbWVvdXQiLCJpc1dhaXRGb3JUaW1lb3V0IiwibmV0d29ya1NpbGVudCIsIm1zZ0lkIiwidHJhbnNhY3Rpb25JZCIsImluX21zZ19kZXNjciIsImZpbmQiLCJtc2ciLCJ0cmFuc2FjdGlvbl9pZCIsImludGVybmFsRXJyb3IiLCJ0cmFuc2FjdGlvbnMiLCJ0cmFuc2FjdGlvbkxhZyIsImJsb2NrSWQiLCJnZW5fdXRpbWUiLCJQcm9taXNlIiwicmVzb2x2ZSIsInJlamVjdCIsImluX21zZyIsInN0YXR1cyIsInRyYW5zYWN0aW9uV2FpdFRpbWVvdXQiLCJyYWNlIiwiZmluaXNoT3BlcmF0aW9ucyIsIm1lc3NhZ2VFeHBpcmVkIiwidHJhbnNhY3Rpb25Ob3ciLCJibG9ja19pZCIsInRvSVNPU3RyaW5nIiwiaXNNZXNzYWdlRXhwaXJlZCIsImlzQ2xpZW50RXJyb3IiLCJUUkFOU0FDVElPTl9XQUlUX1RJTUVPVVQiLCJyZXNvbHZlRGV0YWlsZWRFcnJvciIsImNoZWNrVHJhbnNhY3Rpb24iLCJhY2NvdW50TWlzc2luZyIsImlzQ29udHJhY3RFcnJvciIsIlRPTkNvbnRyYWN0RXhpdENvZGUiLCJOT19HQVMiLCJhY2NvdW50QmFsYW5jZVRvb0xvdyIsImVycm9yIiwibWVzc2FnZUJhc2U2NCIsInRpbWUiLCJtYWluRXJyb3IiLCJhY2NfdHlwZSIsImlzRGVwbG95ZWQiLCJhbHJlYWR5RGVwbG95ZWQiLCJ3YWl0Rm9yRGVwbG95VHJhbnNhY3Rpb24iLCJkZXBsb3lNZXNzYWdlIiwidHJhbnNhY3Rpb25EZXRhaWxzIiwicnVuTWVzc2FnZSIsIndhaXRGb3JSdW5UcmFuc2FjdGlvbiIsIm91dHB1dE1lc3NhZ2VzIiwib3V0X21lc3NhZ2VzIiwib3V0cHV0IiwiZXh0ZXJuYWxNZXNzYWdlcyIsIngiLCJtc2dfdHlwZSIsImFsbCIsIm1hcCIsImRlY29kZU91dHB1dE1lc3NhZ2VCb2R5IiwiYm9keUJhc2U2NCIsIm91dHB1dHMiLCJyZXN1bHRPdXRwdXQiLCJ0b0xvd2VyQ2FzZSIsIndhaXRQYXJhbXMiLCJlbXVsYXRlQmFsYW5jZSIsImJpZ0JhbGFuY2UiLCJjcmVhdGVEZXBsb3lNZXNzYWdlIiwiY2FsY01zZ1Byb2Nlc3NGZWVzIiwibmV3QWNjb3VudCIsImxhc3RfcGFpZCIsImZsb29yIiwidXNlckhlYWRlciIsIm1lc3NhZ2VFeHBpcmF0aW9uVGltZW91dCIsImluY2x1ZGVzIiwiY2FsbCIsInJldHJpZXNDb3VudCIsIm1lc3NhZ2VSZXRyaWVzQ291bnQiLCJpIiwidXNlUmV0cnkiLCJUT05FcnJvckNvZGUiLCJNRVNTQUdFX0VYUElSRUQiLCJSRVBMQVlfUFJPVEVDVElPTiIsInJldHJ5Q2FsbCIsImNyZWF0ZVJ1bk1lc3NhZ2UiLCJ0cmFuc2FjdGlvbkx0IiwibGFzdF90cmFuc19sdCIsImZ1bGxSdW4iLCJUT05Nb2R1bGUiLCJtb2R1bGVOYW1lIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7O0FBS0E7O0FBa0RBOztBQUNBOztBQUNBOztBQUNBOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFFTyxJQUFNQSx1QkFBdUIsR0FBRztBQUNuQ0MsRUFBQUEsU0FBUyxFQUFFLFdBRHdCO0FBRW5DQyxFQUFBQSxHQUFHLEVBQUUsS0FGOEI7QUFHbkNDLEVBQUFBLE1BQU0sRUFBRTtBQUgyQixDQUFoQzs7QUFNQSxJQUFNQyx5QkFBeUIsR0FBRztBQUNyQ0MsRUFBQUEsT0FBTyxFQUFFLFNBRDRCO0FBRXJDQyxFQUFBQSxjQUFjLEVBQUUsZ0JBRnFCO0FBR3JDQyxFQUFBQSxTQUFTLEVBQUUsV0FIMEI7QUFJckNDLEVBQUFBLE1BQU0sRUFBRSxRQUo2QjtBQUtyQ0MsRUFBQUEsT0FBTyxFQUFFO0FBTDRCLENBQWxDOztBQVFBLElBQU1DLDZCQUE2QixHQUFHO0FBQ3pDQyxFQUFBQSxPQUFPLEVBQUUsQ0FEZ0M7QUFFekNDLEVBQUFBLFFBQVEsRUFBRSxDQUYrQjtBQUd6Q0MsRUFBQUEsS0FBSyxFQUFFO0FBSGtDLENBQXRDOztBQU1BLElBQU1DLHNCQUFzQixHQUFH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QUUvQ2tCLGtCQUFBQSxPQUFPLEVBQVBBLE9BRitDO0FBRy9DYSxrQkFBQUEsR0FBRyxFQUFFckMsTUFBTSxDQUFDcUMsR0FIbUM7QUFJL0NjLGtCQUFBQSxZQUFZLEVBQUVuRCxNQUFNLENBQUNtRCxZQUowQjtBQUsvQ3lGLGtCQUFBQSxhQUFhLEVBQUU1SSxNQUFNLENBQUM2QyxpQkFMeUI7QUFNL0M4SSxrQkFBQUEsT0FBTyxFQUFFM0wsTUFBTSxDQUFDMkw7QUFOK0IsaUJBQTVDLEM7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7RUEzK0JpQ0MscUI7OztBQXMvQmhEbk0sa0JBQWtCLENBQUNvTSxVQUFuQixHQUFnQyxvQkFBaEM7QUFFQSxJQUFNekMsa0JBQWtCLDJrQkFBeEIiLCJzb3VyY2VzQ29udGVudCI6WyIvKlxuICogQ29weXJpZ2h0IDIwMTgtMjAyMCBUT04gREVWIFNPTFVUSU9OUyBMVEQuXG4gKi9cbi8vIEBmbG93XG5cbmltcG9ydCB7IFNwYW4sIFNwYW5Db250ZXh0IH0gZnJvbSAnb3BlbnRyYWNpbmcnO1xuaW1wb3J0IHR5cGUge1xuICAgIFFBY2NvdW50LFxuICAgIFFCbG9jayxcbiAgICBRTWVzc2FnZSxcbiAgICBRVHJhbnNhY3Rpb24sXG4gICAgVE9OQ29udHJhY3RBQkksXG4gICAgVE9OQ29udHJhY3RBY2NvdW50V2FpdFBhcmFtcyxcbiAgICBUT05Db250cmFjdENvbnZlcnRBZGRyZXNzUGFyYW1zLFxuICAgIFRPTkNvbnRyYWN0Q29udmVydEFkZHJlc3NSZXN1bHQsXG4gICAgVE9OQ29udHJhY3RDcmVhdGVSdW5Cb2R5UGFyYW1zLFxuICAgIFRPTkNvbnRyYWN0Q3JlYXRlUnVuQm9keVJlc3VsdCxcbiAgICBUT05Db250cmFjdENyZWF0ZVNpZ25lZERlcGxveU1lc3NhZ2VQYXJhbXMsXG4gICAgVE9OQ29udHJhY3RDcmVhdGVTaWduZWRNZXNzYWdlUGFyYW1zLFxuICAgIFRPTkNvbnRyYWN0Q3JlYXRlU2lnbmVkUnVuTWVzc2FnZVBhcmFtcyxcbiAgICBUT05Db250cmFjdERlY29kZU1lc3NhZ2VCb2R5UGFyYW1zLFxuICAgIFRPTkNvbnRyYWN0RGVjb2RlTWVzc2FnZUJvZHlSZXN1bHQsXG4gICAgVE9OQ29udHJhY3REZWNvZGVSdW5PdXRwdXRQYXJhbXMsXG4gICAgVE9OQ29udHJhY3REZXBsb3lNZXNzYWdlLFxuICAgIFRPTkNvbnRyYWN0RGVwbG95UGFyYW1zLFxuICAgIFRPTkNvbnRyYWN0RGVwbG95UmVzdWx0LFxuICAgIFRPTkNvbnRyYWN0Q2FsY0RlcGxveUZlZVBhcmFtcyxcbiAgICBUT05Db250cmFjdEJvYyxcbiAgICBUT05Db250cmFjdEdldEJvY0hhc2hSZXN1bHQsXG4gICAgVE9OQ29udHJhY3RHZXRDb2RlRnJvbUltYWdlUGFyYW1zLFxuICAgIFRPTkNvbnRyYWN0R2V0Q29kZUZyb21JbWFnZVJlc3VsdCxcbiAgICBUT05Db250cmFjdEdldERlcGxveURhdGFQYXJhbXMsXG4gICAgVE9OQ29udHJhY3RHZXREZXBsb3lEYXRhUmVzdWx0LFxuICAgIFRPTkNvbnRyYWN0R2V0RnVuY3Rpb25JZFBhcmFtcyxcbiAgICBUT05Db250cmFjdEdldEZ1bmN0aW9uSWRSZXN1bHQsXG4gICAgVE9OQ29udHJhY3RMb2FkUGFyYW1zLFxuICAgIFRPTkNvbnRyYWN0TG9hZFJlc3VsdCxcbiAgICBUT05Db250cmFjdENhbGNSdW5GZWVQYXJhbXMsXG4gICAgVE9OQ29udHJhY3RDYWxjRmVlUmVzdWx0LFxuICAgIFRPTkNvbnRyYWN0Q2FsY01zZ1Byb2Nlc3NpbmdGZWVzUGFyYW1zLFxuICAgIFRPTkNvbnRyYWN0TWVzc2FnZSxcbiAgICBUT05Db250cmFjdFJ1bkxvY2FsUGFyYW1zLFxuICAgIFRPTkNvbnRyYWN0UnVuTWVzc2FnZSxcbiAgICBUT05Db250cmFjdFJ1blBhcmFtcyxcbiAgICBUT05Db250cmFjdFJ1blJlc3VsdCxcbiAgICBUT05Db250cmFjdHMsXG4gICAgVE9OQ29udHJhY3RVbnNpZ25lZERlcGxveU1lc3NhZ2UsXG4gICAgVE9OQ29udHJhY3RVbnNpZ25lZE1lc3NhZ2UsXG4gICAgVE9OQ29udHJhY3RVbnNpZ25lZFJ1bk1lc3NhZ2UsXG4gICAgVE9OQ29udHJhY3RSdW5HZXRQYXJhbXMsXG4gICAgVE9OQ29udHJhY3RSdW5HZXRSZXN1bHQsXG4gICAgVE9OQ29udHJhY3RSdW5NZXNzYWdlTG9jYWxQYXJhbXMsXG4gICAgVE9OQ29udHJhY3RSdW5Mb2NhbFJlc3VsdCxcbn0gZnJvbSAnLi4vLi4vdHlwZXMnO1xuXG5pbXBvcnQgeyBUT05DbGllbnRFcnJvciwgVE9OQ29udHJhY3RFeGl0Q29kZSwgVE9ORXJyb3JDb2RlIH0gZnJvbSAnLi4vVE9OQ2xpZW50JztcbmltcG9ydCB7IFRPTk1vZHVsZSB9IGZyb20gJy4uL1RPTk1vZHVsZSc7XG5pbXBvcnQgVE9OQ29uZmlnTW9kdWxlIGZyb20gJy4vVE9OQ29uZmlnTW9kdWxlJztcbmltcG9ydCBUT05RdWVyaWVzTW9kdWxlIGZyb20gJy4vVE9OUXVlcmllc01vZHVsZSc7XG5cbmV4cG9ydCBjb25zdCBUT05BZGRyZXNzU3RyaW5nVmFyaWFudCA9IHtcbiAgICBBY2NvdW50SWQ6ICdBY2NvdW50SWQnLFxuICAgIEhleDogJ0hleCcsXG4gICAgQmFzZTY0OiAnQmFzZTY0Jyxcbn07XG5cbmV4cG9ydCBjb25zdCBUT05DbGllbnRUcmFuc2FjdGlvblBoYXNlID0ge1xuICAgIHN0b3JhZ2U6ICdzdG9yYWdlJyxcbiAgICBjb21wdXRlU2tpcHBlZDogJ2NvbXB1dGVTa2lwcGVkJyxcbiAgICBjb21wdXRlVm06ICdjb21wdXRlVm0nLFxuICAgIGFjdGlvbjogJ2FjdGlvbicsXG4gICAgdW5rbm93bjogJ3Vua25vd24nLFxufTtcblxuZXhwb3J0IGNvbnN0IFRPTkNsaWVudENvbXB1dGVTa2lwcGVkU3RhdHVzID0ge1xuICAgIG5vU3RhdGU6IDAsXG4gICAgYmFkU3RhdGU6IDEsXG4gICAgbm9HYXM6IDIsXG59O1xuXG5leHBvcnQgY29uc3QgVE9OQ2xpZW50U3RvcmFnZVN0YXR1cyA9IHtcbiAgICB1bmNoYW5nZWQ6IDAsXG4gICAgZnJvemVuOiAxLFxuICAgIGRlbGV0ZWQ6IDIsXG59O1xuXG5leHBvcnQgY29uc3QgUUluTXNnVHlwZSA9IHtcbiAgICBleHRlcm5hbDogMCxcbiAgICBpaHI6IDEsXG4gICAgaW1tZWRpYXRlbHk6IDIsXG4gICAgZmluYWw6IDMsXG4gICAgdHJhbnNpdDogNCxcbiAgICBkaXNjYXJkZWRGaW5hbDogNSxcbiAgICBkaXNjYXJkZWRUcmFuc2l0OiA2LFxufTtcblxuZXhwb3J0IGNvbnN0IFFPdXRNc2dUeXBlID0ge1xuICAgIGV4dGVybmFsOiAwLFxuICAgIGltbWVkaWF0ZWx5OiAxLFxuICAgIG91dE1zZ05ldzogMixcbiAgICB0cmFuc2l0OiAzLFxuICAgIGRlcXVldWVJbW1lZGlhdGVseTogNCxcbiAgICBkZXF1ZXVlOiA1LFxuICAgIHRyYW5zaXRSZXF1aXJlZDogNixcbiAgICBub25lOiAtMSxcbn07XG5cbmV4cG9ydCBjb25zdCBRTWVzc2FnZVR5cGUgPSB7XG4gICAgaW50ZXJuYWw6IDAsXG4gICAgZXh0SW46IDEsXG4gICAgZXh0T3V0OiAyLFxufTtcblxuZXhwb3J0IGNvbnN0IFFNZXNzYWdlUHJvY2Vzc2luZ1N0YXR1cyA9IHtcbiAgICB1bmtub3duOiAwLFxuICAgIHF1ZXVlZDogMSxcbiAgICBwcm9jZXNzaW5nOiAyLFxuICAgIHByZWxpbWluYXJ5OiAzLFxuICAgIHByb3Bvc2VkOiA0LFxuICAgIGZpbmFsaXplZDogNSxcbiAgICByZWZ1c2VkOiA2LFxuICAgIHRyYW5zaXRpbmc6IDcsXG59O1xuXG5leHBvcnQgY29uc3QgUUJsb2NrUHJvY2Vzc2luZ1N0YXR1cyA9IHtcbiAgICB1bmtub3duOiAwLFxuICAgIHByb3Bvc2VkOiAxLFxuICAgIGZpbmFsaXplZDogMixcbiAgICByZWZ1c2VkOiAzLFxufTtcblxuZXhwb3J0IGNvbnN0IFFTcGxpdFR5cGUgPSB7XG4gICAgbm9uZTogMCxcbiAgICBzcGxpdDogMixcbiAgICBtZXJnZTogMyxcbn07XG5cbmV4cG9ydCBjb25zdCBRQWNjb3VudFR5cGUgPSB7XG4gICAgdW5pbml0OiAwLFxuICAgIGFjdGl2ZTogMSxcbiAgICBmcm96ZW46IDIsXG59O1xuXG5leHBvcnQgY29uc3QgUVRyYW5zYWN0aW9uVHlwZSA9IHtcbiAgICBvcmRpbmFyeTogMCxcbiAgICBzdG9yYWdlOiAxLFxuICAgIHRpY2s6IDIsXG4gICAgdG9jazogMyxcbiAgICBzcGxpdFByZXBhcmU6IDQsXG4gICAgc3BsaXRJbnN0YWxsOiA1LFxuICAgIG1lcmdlUHJlcGFyZTogNixcbiAgICBtZXJnZUluc3RhbGw6IDcsXG59O1xuXG5leHBvcnQgY29uc3QgUVRyYW5zYWN0aW9uUHJvY2Vzc2luZ1N0YXR1cyA9IHtcbiAgICB1bmtub3duOiAwLFxuICAgIHByZWxpbWluYXJ5OiAxLFxuICAgIHByb3Bvc2VkOiAyLFxuICAgIGZpbmFsaXplZDogMyxcbiAgICByZWZ1c2VkOiA0LFxufTtcblxuZXhwb3J0IGNvbnN0IFFBY2NvdW50U3RhdHVzID0ge1xuICAgIHVuaW5pdDogMCxcbiAgICBhY3RpdmU6IDEsXG4gICAgZnJvemVuOiAyLFxuICAgIG5vbkV4aXN0OiAzLFxufTtcblxuZXhwb3J0IGNvbnN0IFFBY2NvdW50U3RhdHVzQ2hhbmdlID0ge1xuICAgIHVuY2hhbmdlZDogMCxcbiAgICBmcm96ZW46IDEsXG4gICAgZGVsZXRlZDogMixcbn07XG5cbmV4cG9ydCBjb25zdCBRQ29tcHV0ZVR5cGUgPSB7XG4gICAgc2tpcHBlZDogMCxcbiAgICB2bTogMSxcbn07XG5cbmV4cG9ydCBjb25zdCBRU2tpcFJlYXNvbiA9IHtcbiAgICBub1N0YXRlOiAwLFxuICAgIGJhZFN0YXRlOiAxLFxuICAgIG5vR2FzOiAyLFxufTtcblxuZXhwb3J0IGNvbnN0IFFCb3VuY2VUeXBlID0ge1xuICAgIG5lZ0Z1bmRzOiAwLFxuICAgIG5vRnVuZHM6IDEsXG4gICAgb2s6IDIsXG59O1xuXG5jb25zdCBFWFRSQV9UUkFOU0FDVElPTl9XQUlUSU5HX1RJTUUgPSAxMDAwMDtcbmNvbnN0IEJMT0NLX1RSQU5TQUNUSU9OX1dBSVRJTkdfVElNRSA9IDUwMDA7XG5cbmZ1bmN0aW9uIHJlbW92ZVR5cGVOYW1lKG9iajogYW55KSB7XG4gICAgaWYgKG9iai5fX3R5cGVuYW1lKSB7XG4gICAgICAgIGRlbGV0ZSBvYmouX190eXBlbmFtZTtcbiAgICB9XG4gICAgT2JqZWN0LnZhbHVlcyhvYmopXG4gICAgICAgIC5mb3JFYWNoKCh2YWx1ZSkgPT4ge1xuICAgICAgICAgICAgaWYgKCEhdmFsdWUgJiYgdHlwZW9mIHZhbHVlID09PSAnb2JqZWN0Jykge1xuICAgICAgICAgICAgICAgIHJlbW92ZVR5cGVOYW1lKHZhbHVlKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfSk7XG59XG5cbmV4cG9ydCBmdW5jdGlvbiByZW1vdmVQcm9wcyhvYmo6IHt9LCBwYXRoczogc3RyaW5nW10pOiB7fSB7XG4gICAgbGV0IHJlc3VsdCA9IG9iajtcbiAgICBwYXRocy5mb3JFYWNoKChwYXRoKSA9PiB7XG4gICAgICAgIGNvbnN0IGRvdFBvcyA9IHBhdGguaW5kZXhPZignLicpO1xuICAgICAgICBpZiAoZG90UG9zIDwgMCkge1xuICAgICAgICAgICAgaWYgKHBhdGggaW4gcmVzdWx0KSB7XG4gICAgICAgICAgICAgICAgcmVzdWx0ID0geyAuLi5yZXN1bHQgfTtcbiAgICAgICAgICAgICAgICBkZWxldGUgcmVzdWx0W3BhdGhdO1xuICAgICAgICAgICAgfVxuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgY29uc3QgbmFtZSA9IHBhdGguc3Vic3RyKDAsIGRvdFBvcyk7XG4gICAgICAgICAgICBjb25zdCBjaGlsZCA9IHJlc3VsdFtuYW1lXTtcbiAgICAgICAgICAgIGlmIChjaGlsZCkge1xuICAgICAgICAgICAgICAgIGNvbnN0IHJlZHVjZWRDaGlsZCA9IHJlbW92ZVByb3BzKGNoaWxkLCBbcGF0aC5zdWJzdHIoZG90UG9zICsgMSldKTtcbiAgICAgICAgICAgICAgICBpZiAocmVkdWNlZENoaWxkICE9PSBjaGlsZCkge1xuICAgICAgICAgICAgICAgICAgICByZXN1bHQgPSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAuLi5yZXN1bHQsXG4gICAgICAgICAgICAgICAgICAgICAgICBbbmFtZV06IHJlZHVjZWRDaGlsZCxcbiAgICAgICAgICAgICAgICAgICAgfTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICB9KTtcbiAgICByZXR1cm4gcmVzdWx0O1xufVxuXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBUT05Db250cmFjdHNNb2R1bGUgZXh0ZW5kcyBUT05Nb2R1bGUgaW1wbGVtZW50cyBUT05Db250cmFjdHMge1xuICAgIGNvbmZpZzogVE9OQ29uZmlnTW9kdWxlO1xuXG4gICAgcXVlcmllczogVE9OUXVlcmllc01vZHVsZTtcblxuICAgIGFzeW5jIHNldHVwKCk6IFByb21pc2U8Kj4ge1xuICAgICAgICB0aGlzLmNvbmZpZyA9IHRoaXMuY29udGV4dC5nZXRNb2R1bGUoVE9OQ29uZmlnTW9kdWxlKTtcbiAgICAgICAgdGhpcy5xdWVyaWVzID0gdGhpcy5jb250ZXh0LmdldE1vZHVsZShUT05RdWVyaWVzTW9kdWxlKTtcbiAgICB9XG5cbiAgICBhc3luYyBsb2FkKFxuICAgICAgICBwYXJhbXM6IFRPTkNvbnRyYWN0TG9hZFBhcmFtcyxcbiAgICAgICAgcGFyZW50U3Bhbj86IChTcGFuIHwgU3BhbkNvbnRleHQpLFxuICAgICk6IFByb21pc2U8VE9OQ29udHJhY3RMb2FkUmVzdWx0PiB7XG4gICAgICAgIGNvbnN0IGFjY291bnRzOiBRQWNjb3VudFtdID0gYXdhaXQgdGhpcy5xdWVyaWVzLmFjY291bnRzLnF1ZXJ5KHtcbiAgICAgICAgICAgIGlkOiB7IGVxOiBwYXJhbXMuYWRkcmVzcyB9LFxuICAgICAgICB9LCAnYmFsYW5jZScsIHVuZGVmaW5lZCwgdW5kZWZpbmVkLCB1bmRlZmluZWQsIHBhcmVudFNwYW4pO1xuICAgICAgICBpZiAoYWNjb3VudHMgJiYgYWNjb3VudHMubGVuZ3RoID4gMCkge1xuICAgICAgICAgICAgcmV0dXJuIHtcbiAgICAgICAgICAgICAgICBpZDogcGFyYW1zLmFkZHJlc3MsXG4gICAgICAgICAgICAgICAgYmFsYW5jZUdyYW1zOiBhY2NvdW50c1swXS5iYWxhbmNlLFxuICAgICAgICAgICAgfTtcbiAgICAgICAgfVxuICAgICAgICByZXR1cm4ge1xuICAgICAgICAgICAgaWQ6IG51bGwsXG4gICAgICAgICAgICBiYWxhbmNlR3JhbXM6IG51bGwsXG4gICAgICAgIH07XG4gICAgfVxuXG5cbiAgICAvLyBGYWNhZGUgZnVuY3Rpb25zXG5cbiAgICBhc3luYyBkZXBsb3koXG4gICAgICAgIHBhcmFtczogVE9OQ29udHJhY3REZXBsb3lQYXJhbXMsXG4gICAgICAgIHBhcmVudFNwYW4/OiAoU3BhbiB8IFNwYW5Db250ZXh0KSxcbiAgICApOiBQcm9taXNlPFRPTkNvbnRyYWN0RGVwbG95UmVzdWx0PiB7XG4gICAgICAgIHJldHVybiB0aGlzLmNvbnRleHQudHJhY2UoJ2NvbnRyYWN0cy5kZXBsb3knLCBhc3luYyAoc3BhbjogU3BhbikgPT4ge1xuICAgICAgICAgICAgc3Bhbi5zZXRUYWcoJ3BhcmFtcycsIHJlbW92ZVByb3BzKHBhcmFtcywgWydrZXlQYWlyLnNlY3JldCddKSk7XG4gICAgICAgICAgICByZXR1cm4gdGhpcy5pbnRlcm5hbERlcGxveUpzKHBhcmFtcywgc3Bhbik7XG4gICAgICAgIH0sIHBhcmVudFNwYW4pO1xuICAgIH1cblxuXG4gICAgYXN5bmMgcnVuKFxuICAgICAgICBwYXJhbXM6IFRPTkNvbnRyYWN0UnVuUGFyYW1zLFxuICAgICAgICBwYXJlbnRTcGFuPzogKFNwYW4gfCBTcGFuQ29udGV4dCksXG4gICAgKTogUHJvbWlzZTxUT05Db250cmFjdFJ1blJlc3VsdD4ge1xuICAgICAgICByZXR1cm4gdGhpcy5jb250ZXh0LnRyYWNlKCdjb250cmFjdHMucnVuJywgYXN5bmMgKHNwYW46IFNwYW4pID0+IHtcbiAgICAgICAgICAgIHNwYW4uc2V0VGFnKCdwYXJhbXMnLCByZW1vdmVQcm9wcyhwYXJhbXMsIFsna2V5UGFpci5zZWNyZXQnXSkpO1xuICAgICAgICAgICAgcmV0dXJuIHRoaXMuaW50ZXJuYWxSdW5KcyhwYXJhbXMsIHNwYW4pO1xuICAgICAgICB9LCBwYXJlbnRTcGFuKTtcbiAgICB9XG5cbiAgICBhc3luYyBydW5Mb2NhbChcbiAgICAgICAgcGFyYW1zOiBUT05Db250cmFjdFJ1bkxvY2FsUGFyYW1zLFxuICAgICAgICBwYXJlbnRTcGFuPzogKFNwYW4gfCBTcGFuQ29udGV4dCksXG4gICAgKTogUHJvbWlzZTxUT05Db250cmFjdFJ1bkxvY2FsUmVzdWx0PiB7XG4gICAgICAgIHJldHVybiB0aGlzLmNvbnRleHQudHJhY2UoJ2NvbnRyYWN0cy5ydW5Mb2NhbCcsIGFzeW5jIChzcGFuOiBTcGFuKSA9PiB7XG4gICAgICAgICAgICBzcGFuLnNldFRhZygncGFyYW1zJywgcmVtb3ZlUHJvcHMocGFyYW1zLCBbJ2tleVBhaXIuc2VjcmV0J10pKTtcbiAgICAgICAgICAgIHJldHVybiB0aGlzLmludGVybmFsUnVuTG9jYWxKcyhwYXJhbXMsIHNwYW4pO1xuICAgICAgICB9LCBwYXJlbnRTcGFuKTtcbiAgICB9XG5cbiAgICBhc3luYyBydW5NZXNzYWdlTG9jYWwoXG4gICAgICAgIHBhcmFtczogVE9OQ29udHJhY3RSdW5NZXNzYWdlTG9jYWxQYXJhbXMsXG4gICAgICAgIHBhcmVudFNwYW4/OiAoU3BhbiB8IFNwYW5Db250ZXh0KSxcbiAgICApOiBQcm9taXNlPFRPTkNvbnRyYWN0UnVuTG9jYWxSZXN1bHQ+IHtcbiAgICAgICAgcmV0dXJuIHRoaXMuY29udGV4dC50cmFjZSgncnVuTWVzc2FnZUxvY2FsJywgYXN5bmMgKHNwYW46IFNwYW4pID0+IHtcbiAgICAgICAgICAgIHNwYW4uc2V0VGFnKCdwYXJhbXMnLCByZW1vdmVQcm9wcyhwYXJhbXMsIFsna2V5UGFpci5zZWNyZXQnXSkpO1xuICAgICAgICAgICAgcmV0dXJuIHRoaXMuaW50ZXJuYWxSdW5NZXNzYWdlTG9jYWxKcyhwYXJhbXMsIHNwYW4pO1xuICAgICAgICB9LCBwYXJlbnRTcGFuKTtcbiAgICB9XG5cbiAgICBhc3luYyBydW5HZXQoXG4gICAgICAgIHBhcmFtczogVE9OQ29udHJhY3RSdW5HZXRQYXJhbXMsXG4gICAgKTogUHJvbWlzZTxUT05Db250cmFjdFJ1bkdldFJlc3VsdD4ge1xuICAgICAgICBsZXQgY29yZVBhcmFtczogVE9OQ29udHJhY3RSdW5HZXRQYXJhbXMgPSBwYXJhbXM7XG4gICAgICAgIGlmICghcGFyYW1zLmNvZGVCYXNlNjQgfHwgIXBhcmFtcy5kYXRhQmFzZTY0KSB7XG4gICAgICAgICAgICBjb25zdCBhZGRyZXNzID0gcGFyYW1zLmFkZHJlc3M7XG4gICAgICAgICAgICBpZiAoIWFkZHJlc3MpIHtcbiAgICAgICAgICAgICAgICB0aHJvdyBUT05DbGllbnRFcnJvci5hZGRyZXNzUmVxdWlyZWRGb3JSdW5Mb2NhbCgpO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgY29uc3QgYWNjb3VudDogYW55ID0gYXdhaXQgdGhpcy5nZXRBY2NvdW50KGFkZHJlc3MsIGZhbHNlKTtcbiAgICAgICAgICAgIGlmICghYWNjb3VudC5jb2RlKSB7XG4gICAgICAgICAgICAgICAgdGhyb3cgVE9OQ2xpZW50RXJyb3IuYWNjb3VudENvZGVNaXNzaW5nKGFkZHJlc3MsIGFjY291bnQuYmFsYW5jZSk7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBhY2NvdW50LmNvZGVCYXNlNjQgPSBhY2NvdW50LmNvZGU7XG4gICAgICAgICAgICBhY2NvdW50LmRhdGFCYXNlNjQgPSBhY2NvdW50LmRhdGE7XG4gICAgICAgICAgICBkZWxldGUgYWNjb3VudC5jb2RlO1xuICAgICAgICAgICAgZGVsZXRlIGFjY291bnQuZGF0YTtcbiAgICAgICAgICAgIGNvcmVQYXJhbXMgPSB7XG4gICAgICAgICAgICAgICAgLi4uYWNjb3VudCxcbiAgICAgICAgICAgICAgICAuLi5wYXJhbXMsXG4gICAgICAgICAgICB9O1xuICAgICAgICB9XG4gICAgICAgIHJldHVybiB0aGlzLnJlcXVlc3RDb3JlKCd0dm0uZ2V0JywgY29yZVBhcmFtcyk7XG4gICAgfVxuXG4gICAgYXJyYXlGcm9tQ09OUyhjb25zOiBhbnlbXSk6IGFueVtdIHtcbiAgICAgICAgY29uc3QgcmVzdWx0ID0gW107XG4gICAgICAgIGxldCBpdGVtID0gY29ucztcbiAgICAgICAgd2hpbGUgKGl0ZW0pIHtcbiAgICAgICAgICAgIGlmICghaXRlbS5sZW5ndGggPT09IDIpIHtcbiAgICAgICAgICAgICAgICB0aHJvdyBUT05DbGllbnRFcnJvci5pbnZhbGlkQ29ucygpO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgcmVzdWx0LnB1c2goaXRlbVswXSk7XG4gICAgICAgICAgICBpdGVtID0gaXRlbVsxXTtcbiAgICAgICAgfVxuICAgICAgICByZXR1cm4gcmVzdWx0O1xuICAgIH1cblxuXG4gICAgLy8gTWVzc2FnZSBjcmVhdGlvblxuXG4gICAgYXN5bmMgY3JlYXRlRGVwbG95TWVzc2FnZShcbiAgICAgICAgcGFyYW1zOiBUT05Db250cmFjdERlcGxveVBhcmFtcyxcbiAgICAgICAgcmV0cnlJbmRleD86IG51bWJlcixcbiAgICApOiBQcm9taXNlPFRPTkNvbnRyYWN0RGVwbG95TWVzc2FnZT4ge1xuICAgICAgICB0aGlzLmNvbmZpZy5sb2coJ2NyZWF0ZURlcGxveU1lc3NhZ2UnLCBwYXJhbXMpO1xuICAgICAgICBjb25zdCBjb25zdHJ1Y3RvckhlYWRlciA9IHRoaXMubWFrZUV4cGlyZUhlYWRlcihcbiAgICAgICAgICAgIHBhcmFtcy5wYWNrYWdlLmFiaSxcbiAgICAgICAgICAgIHBhcmFtcy5jb25zdHJ1Y3RvckhlYWRlcixcbiAgICAgICAgICAgIHJldHJ5SW5kZXgsXG4gICAgICAgICk7XG4gICAgICAgIGNvbnN0IG1lc3NhZ2U6IHtcbiAgICAgICAgICAgIGFkZHJlc3M6IHN0cmluZyxcbiAgICAgICAgICAgIG1lc3NhZ2VJZDogc3RyaW5nLFxuICAgICAgICAgICAgbWVzc2FnZUJvZHlCYXNlNjQ6IHN0cmluZyxcbiAgICAgICAgfSA9IGF3YWl0IHRoaXMucmVxdWVzdENvcmUoJ2NvbnRyYWN0cy5kZXBsb3kubWVzc2FnZScsIHtcbiAgICAgICAgICAgIGFiaTogcGFyYW1zLnBhY2thZ2UuYWJpLFxuICAgICAgICAgICAgY29uc3RydWN0b3JIZWFkZXIsXG4gICAgICAgICAgICBjb25zdHJ1Y3RvclBhcmFtczogcGFyYW1zLmNvbnN0cnVjdG9yUGFyYW1zLFxuICAgICAgICAgICAgaW5pdFBhcmFtczogcGFyYW1zLmluaXRQYXJhbXMsXG4gICAgICAgICAgICBpbWFnZUJhc2U2NDogcGFyYW1zLnBhY2thZ2UuaW1hZ2VCYXNlNjQsXG4gICAgICAgICAgICBrZXlQYWlyOiBwYXJhbXMua2V5UGFpcixcbiAgICAgICAgICAgIHdvcmtjaGFpbklkOiBwYXJhbXMud29ya2NoYWluSWQsXG4gICAgICAgIH0pO1xuICAgICAgICByZXR1cm4ge1xuICAgICAgICAgICAgbWVzc2FnZToge1xuICAgICAgICAgICAgICAgIG1lc3NhZ2VJZDogbWVzc2FnZS5tZXNzYWdlSWQsXG4gICAgICAgICAgICAgICAgbWVzc2FnZUJvZHlCYXNlNjQ6IG1lc3NhZ2UubWVzc2FnZUJvZHlCYXNlNjQsXG4gICAgICAgICAgICAgICAgZXhwaXJlOiBjb25zdHJ1Y3RvckhlYWRlcj8uZXhwaXJlLFxuICAgICAgICAgICAgfSxcbiAgICAgICAgICAgIGFkZHJlc3M6IG1lc3NhZ2UuYWRkcmVzcyxcbiAgICAgICAgICAgIGNyZWF0aW9uVGltZTogRGF0ZS5ub3coKSxcbiAgICAgICAgfTtcbiAgICB9XG5cblxuICAgIGFzeW5jIGNyZWF0ZVJ1bk1lc3NhZ2UoXG4gICAgICAgIHBhcmFtczogVE9OQ29udHJhY3RSdW5QYXJhbXMsXG4gICAgICAgIHJldHJ5SW5kZXg/OiBudW1iZXIsXG4gICAgKTogUHJvbWlzZTxUT05Db250cmFjdFJ1bk1lc3NhZ2U+IHtcbiAgICAgICAgdGhpcy5jb25maWcubG9nKCdjcmVhdGVSdW5NZXNzYWdlJywgcGFyYW1zKTtcbiAgICAgICAgY29uc3QgaGVhZGVyID0gdGhpcy5tYWtlRXhwaXJlSGVhZGVyKFxuICAgICAgICAgICAgcGFyYW1zLmFiaSxcbiAgICAgICAgICAgIHBhcmFtcy5oZWFkZXIsXG4gICAgICAgICAgICByZXRyeUluZGV4LFxuICAgICAgICApO1xuICAgICAgICBjb25zdCBtZXNzYWdlID0gYXdhaXQgdGhpcy5yZXF1ZXN0Q29yZSgnY29udHJhY3RzLnJ1bi5tZXNzYWdlJywge1xuICAgICAgICAgICAgYWRkcmVzczogcGFyYW1zLmFkZHJlc3MsXG4gICAgICAgICAgICBhYmk6IHBhcmFtcy5hYmksXG4gICAgICAgICAgICBmdW5jdGlvbk5hbWU6IHBhcmFtcy5mdW5jdGlvbk5hbWUsXG4gICAgICAgICAgICBoZWFkZXIsXG4gICAgICAgICAgICBpbnB1dDogcGFyYW1zLmlucHV0LFxuICAgICAgICAgICAga2V5UGFpcjogcGFyYW1zLmtleVBhaXIsXG4gICAgICAgIH0pO1xuICAgICAgICBtZXNzYWdlLmV4cGlyZSA9IGhlYWRlcj8uZXhwaXJlO1xuICAgICAgICByZXR1cm4ge1xuICAgICAgICAgICAgYWRkcmVzczogcGFyYW1zLmFkZHJlc3MsXG4gICAgICAgICAgICBhYmk6IHBhcmFtcy5hYmksXG4gICAgICAgICAgICBmdW5jdGlvbk5hbWU6IHBhcmFtcy5mdW5jdGlvbk5hbWUsXG4gICAgICAgICAgICBtZXNzYWdlLFxuICAgICAgICAgICAgY3JlYXRpb25UaW1lOiBEYXRlLm5vdygpLFxuICAgICAgICB9O1xuICAgIH1cblxuICAgIGFzeW5jIGNyZWF0ZVVuc2lnbmVkRGVwbG95TWVzc2FnZShcbiAgICAgICAgcGFyYW1zOiBUT05Db250cmFjdERlcGxveVBhcmFtcyxcbiAgICAgICAgcmV0cnlJbmRleD86IG51bWJlcixcbiAgICApOiBQcm9taXNlPFRPTkNvbnRyYWN0VW5zaWduZWREZXBsb3lNZXNzYWdlPiB7XG4gICAgICAgIGNvbnN0IGNvbnN0cnVjdG9ySGVhZGVyID0gdGhpcy5tYWtlRXhwaXJlSGVhZGVyKFxuICAgICAgICAgICAgcGFyYW1zLnBhY2thZ2UuYWJpLFxuICAgICAgICAgICAgcGFyYW1zLmNvbnN0cnVjdG9ySGVhZGVyLFxuICAgICAgICAgICAgcmV0cnlJbmRleCxcbiAgICAgICAgKTtcbiAgICAgICAgY29uc3QgcmVzdWx0OiB7XG4gICAgICAgICAgICBlbmNvZGVkOiBUT05Db250cmFjdFVuc2lnbmVkTWVzc2FnZSxcbiAgICAgICAgICAgIGFkZHJlc3NIZXg6IHN0cmluZyxcbiAgICAgICAgfSA9IGF3YWl0IHRoaXMucmVxdWVzdENvcmUoJ2NvbnRyYWN0cy5kZXBsb3kuZW5jb2RlX3Vuc2lnbmVkX21lc3NhZ2UnLCB7XG4gICAgICAgICAgICBhYmk6IHBhcmFtcy5wYWNrYWdlLmFiaSxcbiAgICAgICAgICAgIGNvbnN0cnVjdG9ySGVhZGVyLFxuICAgICAgICAgICAgY29uc3RydWN0b3JQYXJhbXM6IHBhcmFtcy5jb25zdHJ1Y3RvclBhcmFtcyxcbiAgICAgICAgICAgIGluaXRQYXJhbXM6IHBhcmFtcy5pbml0UGFyYW1zLFxuICAgICAgICAgICAgaW1hZ2VCYXNlNjQ6IHBhcmFtcy5wYWNrYWdlLmltYWdlQmFzZTY0LFxuICAgICAgICAgICAgcHVibGljS2V5SGV4OiBwYXJhbXMua2V5UGFpci5wdWJsaWMsXG4gICAgICAgICAgICB3b3JrY2hhaW5JZDogcGFyYW1zLndvcmtjaGFpbklkLFxuICAgICAgICB9KTtcbiAgICAgICAgcmV0dXJuIHtcbiAgICAgICAgICAgIGFkZHJlc3M6IHJlc3VsdC5hZGRyZXNzSGV4LFxuICAgICAgICAgICAgc2lnblBhcmFtczoge1xuICAgICAgICAgICAgICAgIC4uLnJlc3VsdC5lbmNvZGVkLFxuICAgICAgICAgICAgICAgIGFiaTogcGFyYW1zLnBhY2thZ2UuYWJpLFxuICAgICAgICAgICAgICAgIGV4cGlyZTogY29uc3RydWN0b3JIZWFkZXI/LmV4cGlyZSxcbiAgICAgICAgICAgIH0sXG4gICAgICAgIH07XG4gICAgfVxuXG5cbiAgICBhc3luYyBjcmVhdGVVbnNpZ25lZFJ1bk1lc3NhZ2UoXG4gICAgICAgIHBhcmFtczogVE9OQ29udHJhY3RSdW5QYXJhbXMsXG4gICAgICAgIHJldHJ5SW5kZXg/OiBudW1iZXIsXG4gICAgKTogUHJvbWlzZTxUT05Db250cmFjdFVuc2lnbmVkUnVuTWVzc2FnZT4ge1xuICAgICAgICBjb25zdCBoZWFkZXIgPSB0aGlzLm1ha2VFeHBpcmVIZWFkZXIoXG4gICAgICAgICAgICBwYXJhbXMuYWJpLFxuICAgICAgICAgICAgcGFyYW1zLmhlYWRlcixcbiAgICAgICAgICAgIHJldHJ5SW5kZXgsXG4gICAgICAgICk7XG4gICAgICAgIGNvbnN0IHNpZ25QYXJhbXMgPSBhd2FpdCB0aGlzLnJlcXVlc3RDb3JlKCdjb250cmFjdHMucnVuLmVuY29kZV91bnNpZ25lZF9tZXNzYWdlJywge1xuICAgICAgICAgICAgYWRkcmVzczogcGFyYW1zLmFkZHJlc3MsXG4gICAgICAgICAgICBhYmk6IHBhcmFtcy5hYmksXG4gICAgICAgICAgICBmdW5jdGlvbk5hbWU6IHBhcmFtcy5mdW5jdGlvbk5hbWUsXG4gICAgICAgICAgICBoZWFkZXIsXG4gICAgICAgICAgICBpbnB1dDogcGFyYW1zLmlucHV0LFxuICAgICAgICB9KTtcbiAgICAgICAgcmV0dXJuIHtcbiAgICAgICAgICAgIGFkZHJlc3M6IHBhcmFtcy5hZGRyZXNzLFxuICAgICAgICAgICAgZnVuY3Rpb25OYW1lOiBwYXJhbXMuZnVuY3Rpb25OYW1lLFxuICAgICAgICAgICAgc2lnblBhcmFtczoge1xuICAgICAgICAgICAgICAgIC4uLnNpZ25QYXJhbXMsXG4gICAgICAgICAgICAgICAgYWJpOiBwYXJhbXMuYWJpLFxuICAgICAgICAgICAgICAgIGV4cGlyZTogaGVhZGVyPy5leHBpcmUsXG4gICAgICAgICAgICB9LFxuICAgICAgICB9O1xuICAgIH1cblxuXG4gICAgYXN5bmMgY3JlYXRlU2lnbmVkTWVzc2FnZShcbiAgICAgICAgcGFyYW1zOiBUT05Db250cmFjdENyZWF0ZVNpZ25lZE1lc3NhZ2VQYXJhbXMsXG4gICAgKTogUHJvbWlzZTxUT05Db250cmFjdE1lc3NhZ2U+IHtcbiAgICAgICAgcmV0dXJuIHRoaXMucmVxdWVzdENvcmUoJ2NvbnRyYWN0cy5lbmNvZGVfbWVzc2FnZV93aXRoX3NpZ24nLCBwYXJhbXMpO1xuICAgIH1cblxuXG4gICAgYXN5bmMgY3JlYXRlU2lnbmVkRGVwbG95TWVzc2FnZShcbiAgICAgICAgcGFyYW1zOiBUT05Db250cmFjdENyZWF0ZVNpZ25lZERlcGxveU1lc3NhZ2VQYXJhbXMsXG4gICAgKTogUHJvbWlzZTxUT05Db250cmFjdERlcGxveU1lc3NhZ2U+IHtcbiAgICAgICAgY29uc3QgbWVzc2FnZSA9IGF3YWl0IHRoaXMuY3JlYXRlU2lnbmVkTWVzc2FnZSh7XG4gICAgICAgICAgICBhYmk6IHBhcmFtcy51bnNpZ25lZE1lc3NhZ2Uuc2lnblBhcmFtcy5hYmksXG4gICAgICAgICAgICB1bnNpZ25lZEJ5dGVzQmFzZTY0OiBwYXJhbXMudW5zaWduZWRNZXNzYWdlLnNpZ25QYXJhbXMudW5zaWduZWRCeXRlc0Jhc2U2NCxcbiAgICAgICAgICAgIHNpZ25CeXRlc0Jhc2U2NDogcGFyYW1zLnNpZ25CeXRlc0Jhc2U2NCxcbiAgICAgICAgICAgIHB1YmxpY0tleUhleDogcGFyYW1zLnB1YmxpY0tleUhleCxcbiAgICAgICAgfSk7XG4gICAgICAgIG1lc3NhZ2UuZXhwaXJlID0gcGFyYW1zLnVuc2lnbmVkTWVzc2FnZS5zaWduUGFyYW1zLmV4cGlyZTtcbiAgICAgICAgcmV0dXJuIHtcbiAgICAgICAgICAgIGFkZHJlc3M6IHBhcmFtcy51bnNpZ25lZE1lc3NhZ2UuYWRkcmVzcyxcbiAgICAgICAgICAgIG1lc3NhZ2UsXG4gICAgICAgICAgICBjcmVhdGlvblRpbWU6IERhdGUubm93KCksXG4gICAgICAgIH07XG4gICAgfVxuXG5cbiAgICBhc3luYyBjcmVhdGVTaWduZWRSdW5NZXNzYWdlKFxuICAgICAgICBwYXJhbXM6IFRPTkNvbnRyYWN0Q3JlYXRlU2lnbmVkUnVuTWVzc2FnZVBhcmFtcyxcbiAgICApOiBQcm9taXNlPFRPTkNvbnRyYWN0UnVuTWVzc2FnZT4ge1xuICAgICAgICBjb25zdCBtZXNzYWdlID0gYXdhaXQgdGhpcy5jcmVhdGVTaWduZWRNZXNzYWdlKHtcbiAgICAgICAgICAgIGFiaTogcGFyYW1zLnVuc2lnbmVkTWVzc2FnZS5zaWduUGFyYW1zLmFiaSxcbiAgICAgICAgICAgIHVuc2lnbmVkQnl0ZXNCYXNlNjQ6IHBhcmFtcy51bnNpZ25lZE1lc3NhZ2Uuc2lnblBhcmFtcy51bnNpZ25lZEJ5dGVzQmFzZTY0LFxuICAgICAgICAgICAgc2lnbkJ5dGVzQmFzZTY0OiBwYXJhbXMuc2lnbkJ5dGVzQmFzZTY0LFxuICAgICAgICAgICAgcHVibGljS2V5SGV4OiBwYXJhbXMucHVibGljS2V5SGV4LFxuICAgICAgICB9KTtcbiAgICAgICAgbWVzc2FnZS5leHBpcmUgPSBwYXJhbXMudW5zaWduZWRNZXNzYWdlLnNpZ25QYXJhbXMuZXhwaXJlO1xuICAgICAgICByZXR1cm4ge1xuICAgICAgICAgICAgYWRkcmVzczogcGFyYW1zLnVuc2lnbmVkTWVzc2FnZS5hZGRyZXNzLFxuICAgICAgICAgICAgYWJpOiBwYXJhbXMudW5zaWduZWRNZXNzYWdlLnNpZ25QYXJhbXMuYWJpLFxuICAgICAgICAgICAgZnVuY3Rpb25OYW1lOiBwYXJhbXMudW5zaWduZWRNZXNzYWdlLmZ1bmN0aW9uTmFtZSxcbiAgICAgICAgICAgIG1lc3NhZ2UsXG4gICAgICAgICAgICBjcmVhdGlvblRpbWU6IERhdGUubm93KCksXG4gICAgICAgIH07XG4gICAgfVxuXG4gICAgYXN5bmMgZ2V0Q29kZUZyb21JbWFnZShcbiAgICAgICAgcGFyYW1zOiBUT05Db250cmFjdEdldENvZGVGcm9tSW1hZ2VQYXJhbXMsXG4gICAgKTogUHJvbWlzZTxUT05Db250cmFjdEdldENvZGVGcm9tSW1hZ2VSZXN1bHQ+IHtcbiAgICAgICAgcmV0dXJuIHRoaXMucmVxdWVzdENvcmUoJ2NvbnRyYWN0cy5pbWFnZS5jb2RlJywgcGFyYW1zKTtcbiAgICB9XG5cbiAgICBhc3luYyBnZXREZXBsb3lEYXRhKFxuICAgICAgICBwYXJhbXM6IFRPTkNvbnRyYWN0R2V0RGVwbG95RGF0YVBhcmFtcyxcbiAgICApOiBQcm9taXNlPFRPTkNvbnRyYWN0R2V0RGVwbG95RGF0YVJlc3VsdD4ge1xuICAgICAgICByZXR1cm4gdGhpcy5yZXF1ZXN0Q29yZSgnY29udHJhY3RzLmRlcGxveS5kYXRhJywgcGFyYW1zKTtcbiAgICB9XG5cbiAgICBhc3luYyBjcmVhdGVSdW5Cb2R5KFxuICAgICAgICBwYXJhbXM6IFRPTkNvbnRyYWN0Q3JlYXRlUnVuQm9keVBhcmFtcyxcbiAgICApOiBQcm9taXNlPFRPTkNvbnRyYWN0Q3JlYXRlUnVuQm9keVJlc3VsdD4ge1xuICAgICAgICByZXR1cm4gdGhpcy5yZXF1ZXN0Q29yZSgnY29udHJhY3RzLnJ1bi5ib2R5JywgcGFyYW1zKTtcbiAgICB9XG5cbiAgICBhc3luYyBnZXRGdW5jdGlvbklkKFxuICAgICAgICBwYXJhbXM6IFRPTkNvbnRyYWN0R2V0RnVuY3Rpb25JZFBhcmFtcyxcbiAgICApOiBQcm9taXNlPFRPTkNvbnRyYWN0R2V0RnVuY3Rpb25JZFJlc3VsdD4ge1xuICAgICAgICByZXR1cm4gdGhpcy5yZXF1ZXN0Q29yZSgnY29udHJhY3RzLmZ1bmN0aW9uLmlkJywgcGFyYW1zKTtcbiAgICB9XG5cbiAgICBhc3luYyBnZXRCb2NIYXNoKFxuICAgICAgICBwYXJhbXM6IFRPTkNvbnRyYWN0Qm9jLFxuICAgICk6IFByb21pc2U8VE9OQ29udHJhY3RHZXRCb2NIYXNoUmVzdWx0PiB7XG4gICAgICAgIHJldHVybiB0aGlzLnJlcXVlc3RDb3JlKCdjb250cmFjdHMuYm9jLmhhc2gnLCBwYXJhbXMpO1xuICAgIH1cblxuICAgIGFzeW5jIHBhcnNlTWVzc2FnZShcbiAgICAgICAgcGFyYW1zOiBUT05Db250cmFjdEJvYyxcbiAgICApOiBQcm9taXNlPFFNZXNzYWdlPiB7XG4gICAgICAgIHJldHVybiB0aGlzLnJlcXVlc3RDb3JlKCdjb250cmFjdHMucGFyc2UubWVzc2FnZScsIHBhcmFtcyk7XG4gICAgfVxuXG4gICAgLy8gTWVzc2FnZSBwYXJzaW5nXG5cbiAgICBhc3luYyBkZWNvZGVSdW5PdXRwdXQoXG4gICAgICAgIHBhcmFtczogVE9OQ29udHJhY3REZWNvZGVSdW5PdXRwdXRQYXJhbXMsXG4gICAgKTogUHJvbWlzZTxUT05Db250cmFjdFJ1blJlc3VsdD4ge1xuICAgICAgICByZXR1cm4gdGhpcy5yZXF1ZXN0Q29yZSgnY29udHJhY3RzLnJ1bi5vdXRwdXQnLCBwYXJhbXMpO1xuICAgIH1cblxuXG4gICAgYXN5bmMgZGVjb2RlSW5wdXRNZXNzYWdlQm9keShcbiAgICAgICAgcGFyYW1zOiBUT05Db250cmFjdERlY29kZU1lc3NhZ2VCb2R5UGFyYW1zLFxuICAgICk6IFByb21pc2U8VE9OQ29udHJhY3REZWNvZGVNZXNzYWdlQm9keVJlc3VsdD4ge1xuICAgICAgICByZXR1cm4gdGhpcy5yZXF1ZXN0Q29yZSgnY29udHJhY3RzLnJ1bi51bmtub3duLmlucHV0JywgcGFyYW1zKTtcbiAgICB9XG5cblxuICAgIGFzeW5jIGRlY29kZU91dHB1dE1lc3NhZ2VCb2R5KFxuICAgICAgICBwYXJhbXM6IFRPTkNvbnRyYWN0RGVjb2RlTWVzc2FnZUJvZHlQYXJhbXMsXG4gICAgKTogUHJvbWlzZTxUT05Db250cmFjdERlY29kZU1lc3NhZ2VCb2R5UmVzdWx0PiB7XG4gICAgICAgIHJldHVybiB0aGlzLnJlcXVlc3RDb3JlKCdjb250cmFjdHMucnVuLnVua25vd24ub3V0cHV0JywgcGFyYW1zKTtcbiAgICB9XG5cbiAgICAvLyBNZXNzYWdlIHByb2Nlc3NpbmdcblxuICAgIGFzeW5jIGdldE1lc3NhZ2VJZChtZXNzYWdlOiBUT05Db250cmFjdE1lc3NhZ2UpOiBQcm9taXNlPHN0cmluZz4ge1xuICAgICAgICByZXR1cm4gbWVzc2FnZS5tZXNzYWdlSWQgfHwgKGF3YWl0IHRoaXMuZ2V0Qm9jSGFzaCh7XG4gICAgICAgICAgICBib2NCYXNlNjQ6IG1lc3NhZ2UubWVzc2FnZUJvZHlCYXNlNjQsXG4gICAgICAgIH0pKS5oYXNoO1xuICAgIH1cblxuICAgIGFzeW5jIHNlbmRNZXNzYWdlKFxuICAgICAgICBwYXJhbXM6IFRPTkNvbnRyYWN0TWVzc2FnZSxcbiAgICAgICAgcGFyZW50U3Bhbj86IChTcGFuIHwgU3BhbkNvbnRleHQpLFxuICAgICk6IFByb21pc2U8c3RyaW5nPiB7XG4gICAgICAgIGNvbnN0IGV4cGlyZSA9IHBhcmFtcy5leHBpcmU7XG4gICAgICAgIGlmIChleHBpcmUgJiYgKERhdGUubm93KCkgPiBleHBpcmUgKiAxMDAwKSkge1xuICAgICAgICAgICAgdGhyb3cgVE9OQ2xpZW50RXJyb3Iuc2VuZE5vZGVSZXF1ZXN0RmFpbGVkKCdNZXNzYWdlIGFscmVhZHkgZXhwaXJlZCcpO1xuICAgICAgICB9XG4gICAgICAgIGNvbnN0IHNlcnZlclRpbWVEZWx0YSA9IE1hdGguYWJzKGF3YWl0IHRoaXMucXVlcmllcy5zZXJ2ZXJUaW1lRGVsdGEocGFyZW50U3BhbikpO1xuICAgICAgICBpZiAoc2VydmVyVGltZURlbHRhID4gdGhpcy5jb25maWcub3V0T2ZTeW5jVGhyZXNob2xkKCkpIHtcbiAgICAgICAgICAgIHRoaXMucXVlcmllcy5kcm9wU2VydmVyVGltZURlbHRhKCk7XG4gICAgICAgICAgICB0aHJvdyBUT05DbGllbnRFcnJvci5jbG9ja091dE9mU3luYygpO1xuICAgICAgICB9XG4gICAgICAgIGNvbnN0IGlkID0gYXdhaXQgdGhpcy5nZXRNZXNzYWdlSWQocGFyYW1zKTtcbiAgICAgICAgY29uc3QgaWRCYXNlNjQgPSBCdWZmZXIuZnJvbShpZCwgJ2hleCcpXG4gICAgICAgICAgICAudG9TdHJpbmcoJ2Jhc2U2NCcpO1xuICAgICAgICBhd2FpdCB0aGlzLnF1ZXJpZXMucG9zdFJlcXVlc3RzKFtcbiAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICBpZDogaWRCYXNlNjQsXG4gICAgICAgICAgICAgICAgYm9keTogcGFyYW1zLm1lc3NhZ2VCb2R5QmFzZTY0LFxuICAgICAgICAgICAgfSxcbiAgICAgICAgXSwgcGFyZW50U3Bhbik7XG4gICAgICAgIHRoaXMuY29uZmlnLmxvZygnc2VuZE1lc3NhZ2UuIFJlcXVlc3QgcG9zdGVkJywgaWQpO1xuICAgICAgICByZXR1cm4gaWQ7XG4gICAgfVxuXG4gICAgYXN5bmMgcHJvY2Vzc01lc3NhZ2UoXG4gICAgICAgIG1lc3NhZ2U6IFRPTkNvbnRyYWN0TWVzc2FnZSxcbiAgICAgICAgcmVzdWx0RmllbGRzOiBzdHJpbmcsXG4gICAgICAgIHBhcmVudFNwYW4/OiAoU3BhbiB8IFNwYW5Db250ZXh0KSxcbiAgICAgICAgcmV0cnlJbmRleD86IG51bWJlcixcbiAgICAgICAgYWRkcmVzcz86IHN0cmluZyxcbiAgICAgICAgYWJpPzogVE9OQ29udHJhY3RBQkksXG4gICAgICAgIGZ1bmN0aW9uTmFtZT86IHN0cmluZyxcbiAgICAgICAgbWVzc2FnZUNyZWF0aW9uVGltZT86IG51bWJlcixcbiAgICApOiBQcm9taXNlPFFUcmFuc2FjdGlvbj4ge1xuICAgICAgICBhd2FpdCB0aGlzLnNlbmRNZXNzYWdlKG1lc3NhZ2UsIHBhcmVudFNwYW4pO1xuICAgICAgICByZXR1cm4gdGhpcy53YWl0Rm9yVHJhbnNhY3Rpb24oXG4gICAgICAgICAgICBhZGRyZXNzIHx8ICcnLFxuICAgICAgICAgICAgbWVzc2FnZSxcbiAgICAgICAgICAgIHJlc3VsdEZpZWxkcyxcbiAgICAgICAgICAgIHBhcmVudFNwYW4sXG4gICAgICAgICAgICByZXRyeUluZGV4LFxuICAgICAgICAgICAgbWVzc2FnZUNyZWF0aW9uVGltZSxcbiAgICAgICAgICAgIGFiaSxcbiAgICAgICAgICAgIGZ1bmN0aW9uTmFtZSxcbiAgICAgICAgKTtcbiAgICB9XG5cbiAgICBhc3luYyB3YWl0Rm9yVHJhbnNhY3Rpb24oXG4gICAgICAgIGFkZHJlc3M6IHN0cmluZyxcbiAgICAgICAgbWVzc2FnZTogVE9OQ29udHJhY3RNZXNzYWdlLFxuICAgICAgICByZXN1bHRGaWVsZHM6IHN0cmluZyxcbiAgICAgICAgcGFyZW50U3Bhbj86IChTcGFuIHwgU3BhbkNvbnRleHQpLFxuICAgICAgICByZXRyeUluZGV4PzogbnVtYmVyLFxuICAgICAgICBtZXNzYWdlQ3JlYXRpb25UaW1lPzogbnVtYmVyLFxuICAgICAgICBhYmk/OiBUT05Db250cmFjdEFCSSxcbiAgICAgICAgZnVuY3Rpb25OYW1lPzogc3RyaW5nLFxuICAgICk6IFByb21pc2U8UVRyYW5zYWN0aW9uPiB7XG4gICAgICAgIGNvbnN0IG1lc3NhZ2VJZCA9IGF3YWl0IHRoaXMuZ2V0TWVzc2FnZUlkKG1lc3NhZ2UpO1xuICAgICAgICBjb25zdCBjb25maWcgPSB0aGlzLmNvbmZpZztcbiAgICAgICAgbGV0IHByb2Nlc3NpbmdUaW1lb3V0ID0gY29uZmlnLm1lc3NhZ2VQcm9jZXNzaW5nVGltZW91dChyZXRyeUluZGV4KTtcbiAgICAgICAgY29uc3QgcHJvbWlzZXMgPSBbXTtcbiAgICAgICAgY29uc3Qgc2VydmVySW5mbyA9IGF3YWl0IHRoaXMucXVlcmllcy5nZXRTZXJ2ZXJJbmZvKHBhcmVudFNwYW4pO1xuICAgICAgICBjb25zdCBvcGVyYXRpb25JZCA9IHNlcnZlckluZm8uc3VwcG9ydHNPcGVyYXRpb25JZFxuICAgICAgICAgICAgPyB0aGlzLnF1ZXJpZXMuZ2VuZXJhdGVPcGVyYXRpb25JZCgpXG4gICAgICAgICAgICA6IHVuZGVmaW5lZDtcbiAgICAgICAgbGV0IHRyYW5zYWN0aW9uOiA/UVRyYW5zYWN0aW9uID0gbnVsbDtcbiAgICAgICAgbGV0IHNlbmRUaW1lID0gTWF0aC5yb3VuZChEYXRlLm5vdygpIC8gMTAwMCk7XG4gICAgICAgIGxldCBibG9ja1RpbWUgPSBudWxsO1xuICAgICAgICB0cnkge1xuICAgICAgICAgICAgY29uc3QgZXhwaXJlID0gbWVzc2FnZS5leHBpcmU7XG4gICAgICAgICAgICBpZiAoZXhwaXJlKSB7XG4gICAgICAgICAgICAgICAgLy8gY2FsY3VsYXRlIHRpbWVvdXQgYWNjb3JkaW5nIHRvIGBleHBpcmVgIHZhbHVlIChpbiBzZWNvbmRzKVxuICAgICAgICAgICAgICAgIC8vIGFkZCBwcm9jZXNzaW5nIHRpbWVvdXQgYXMgbWFzdGVyIGJsb2NrIHZhbGlkYXRpb24gdGltZVxuICAgICAgICAgICAgICAgIGxldCBibG9ja1RpbWVvdXQgPSBleHBpcmUgKiAxMDAwIC0gRGF0ZS5ub3coKSArIHByb2Nlc3NpbmdUaW1lb3V0O1xuICAgICAgICAgICAgICAgIC8vIHRyYW5zYWN0aW9uIHRpbWVvdXQgbXVzdCBiZSBncmVhdGVyIHRoZW4gYmxvY2sgdGltZW91dFxuICAgICAgICAgICAgICAgIHByb2Nlc3NpbmdUaW1lb3V0ID0gYmxvY2tUaW1lb3V0ICsgRVhUUkFfVFJBTlNBQ1RJT05fV0FJVElOR19USU1FO1xuXG5cbiAgICAgICAgICAgICAgICBjb25zdCB3YWl0RXhwaXJlZCA9IGFzeW5jICgpID0+IHtcbiAgICAgICAgICAgICAgICAgICAgLy8gd2FpdCBmb3IgYmxvY2ssIHByb2R1Y2VkIGFmdGVyIGBleHBpcmVgIHRvIGd1YXJhbnRlZSB0aGF0IG1lc3NhZ2UgaXMgcmVqZWN0ZWRcbiAgICAgICAgICAgICAgICAgICAgbGV0IGJsb2NrOiA/UUJsb2NrID0gbnVsbDtcbiAgICAgICAgICAgICAgICAgICAgdHJ5IHtcbiAgICAgICAgICAgICAgICAgICAgICAgIGJsb2NrID0gYXdhaXQgdGhpcy5xdWVyaWVzLmJsb2Nrcy53YWl0Rm9yKHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBmaWx0ZXI6IHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgbWFzdGVyOiB7IG1pbl9zaGFyZF9nZW5fdXRpbWU6IHsgZ2U6IGV4cGlyZSB9IH0sXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICByZXN1bHQ6ICdpZCBnZW5fdXRpbWUgaW5fbXNnX2Rlc2NyIHsgdHJhbnNhY3Rpb25faWQgfScsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgdGltZW91dDogYmxvY2tUaW1lb3V0LFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHBhcmVudFNwYW4sXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgb3BlcmF0aW9uSWQsXG4gICAgICAgICAgICAgICAgICAgICAgICB9KTtcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICBjYXRjaChlcnJvcikge1xuICAgICAgICAgICAgICAgICAgICAgICAgaWYoVE9OQ2xpZW50RXJyb3IuaXNXYWl0Rm9yVGltZW91dChlcnJvcikpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB0aHJvdyBUT05DbGllbnRFcnJvci5uZXR3b3JrU2lsZW50KHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgbXNnSWQ6IG1lc3NhZ2VJZCxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgc2VuZFRpbWUsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGV4cGlyZSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdGltZW91dDogYmxvY2tUaW1lb3V0XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICAgICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRocm93IGVycm9yO1xuICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICB9XG5cbiAgICAgICAgICAgICAgICAgICAgaWYgKHRyYW5zYWN0aW9uKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICByZXR1cm47XG4gICAgICAgICAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgICAgICAgICBjb25zdCB0cmFuc2FjdGlvbklkID0gYmxvY2suaW5fbXNnX2Rlc2NyXG4gICAgICAgICAgICAgICAgICAgICAgICAmJiBibG9jay5pbl9tc2dfZGVzY3IuZmluZChtc2cgPT4gISFtc2cudHJhbnNhY3Rpb25faWQpPy50cmFuc2FjdGlvbl9pZDtcblxuICAgICAgICAgICAgICAgICAgICBpZiAoIXRyYW5zYWN0aW9uSWQpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIHRocm93IFRPTkNsaWVudEVycm9yLmludGVybmFsRXJyb3IoXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgJ0ludmFsaWQgYmxvY2sgcmVjZWl2ZWQ6IG5vIHRyYW5zYWN0aW9uIElEJyxcbiAgICAgICAgICAgICAgICAgICAgICAgICk7XG4gICAgICAgICAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgICAgICAgICAvLyBjaGVjayB0aGF0IHRyYW5zYWN0aW9ucyBjb2xsZWN0aW9uIGlzIHVwZGF0ZWRcbiAgICAgICAgICAgICAgICAgICAgdHJ5IHtcbiAgICAgICAgICAgICAgICAgICAgICAgYXdhaXQgdGhpcy5xdWVyaWVzLnRyYW5zYWN0aW9ucy53YWl0Rm9yKHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBmaWx0ZXI6IHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgaWQ6IHsgZXE6IHRyYW5zYWN0aW9uSWQgfSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHJlc3VsdDogJ2lkJyxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB0aW1lb3V0OiBCTE9DS19UUkFOU0FDVElPTl9XQUlUSU5HX1RJTUUsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgcGFyZW50U3BhbixcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBvcGVyYXRpb25JZCxcbiAgICAgICAgICAgICAgICAgICAgICAgIH0pOyBcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICBjYXRjaChlcnJvcikge1xuICAgICAgICAgICAgICAgICAgICAgICAgaWYoVE9OQ2xpZW50RXJyb3IuaXNXYWl0Rm9yVGltZW91dChlcnJvcikpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB0aHJvdyBUT05DbGllbnRFcnJvci50cmFuc2FjdGlvbkxhZyh7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIG1zZ0lkOiBtZXNzYWdlSWQsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGJsb2NrSWQ6IGJsb2NrLmlkLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB0cmFuc2FjdGlvbklkLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB0aW1lb3V0OiBCTE9DS19UUkFOU0FDVElPTl9XQUlUSU5HX1RJTUVcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB9KTtcbiAgICAgICAgICAgICAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgdGhyb3cgZXJyb3I7XG4gICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgYmxvY2tUaW1lID0gYmxvY2suZ2VuX3V0aW1lO1xuICAgICAgICAgICAgICAgIH07XG5cbiAgICAgICAgICAgICAgICBwcm9taXNlcy5wdXNoKHdhaXRFeHBpcmVkKCkpO1xuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICAvLyB3YWl0IGZvciBtZXNzYWdlIHByb2Nlc3NpbmcgdHJhbnNhY3Rpb25cbiAgICAgICAgICAgIHByb21pc2VzLnB1c2gobmV3IFByb21pc2UoKHJlc29sdmUsIHJlamVjdCkgPT4ge1xuICAgICAgICAgICAgICAgIChhc3luYyAoKSA9PiB7XG4gICAgICAgICAgICAgICAgICAgIHRyeSB7XG4gICAgICAgICAgICAgICAgICAgICAgICB0cmFuc2FjdGlvbiA9IGF3YWl0IHRoaXMucXVlcmllcy50cmFuc2FjdGlvbnMud2FpdEZvcih7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgZmlsdGVyOiB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGluX21zZzogeyBlcTogbWVzc2FnZUlkIH0sXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHN0YXR1czogeyBlcTogUVRyYW5zYWN0aW9uUHJvY2Vzc2luZ1N0YXR1cy5maW5hbGl6ZWQgfSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHJlc3VsdDogcmVzdWx0RmllbGRzLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRpbWVvdXQ6IHByb2Nlc3NpbmdUaW1lb3V0LFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIG9wZXJhdGlvbklkLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHBhcmVudFNwYW4sXG4gICAgICAgICAgICAgICAgICAgICAgICB9KTtcbiAgICAgICAgICAgICAgICAgICAgICAgIHJlc29sdmUoKTtcbiAgICAgICAgICAgICAgICAgICAgfSBjYXRjaCAoZXJyb3IpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIGlmKFRPTkNsaWVudEVycm9yLmlzV2FpdEZvclRpbWVvdXQoZXJyb3IpKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgcmVqZWN0KFRPTkNsaWVudEVycm9yLnRyYW5zYWN0aW9uV2FpdFRpbWVvdXQoe1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBtc2dJZDogbWVzc2FnZUlkLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBzZW5kVGltZSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdGltZW91dDogcHJvY2Vzc2luZ1RpbWVvdXRcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB9KSk7XG4gICAgICAgICAgICAgICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHJlamVjdChlcnJvcik7XG4gICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICB9KSgpO1xuICAgICAgICAgICAgfSkpO1xuXG4gICAgICAgICAgICB0cnkge1xuICAgICAgICAgICAgICAgIGF3YWl0IFByb21pc2UucmFjZShwcm9taXNlcyk7XG4gICAgICAgICAgICB9IGZpbmFsbHkge1xuICAgICAgICAgICAgICAgIGlmIChwcm9taXNlcy5sZW5ndGggPiAxICYmIG9wZXJhdGlvbklkKSB7XG4gICAgICAgICAgICAgICAgICAgIGF3YWl0IHRoaXMucXVlcmllcy5maW5pc2hPcGVyYXRpb25zKFtvcGVyYXRpb25JZF0pO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgaWYgKCF0cmFuc2FjdGlvbikge1xuICAgICAgICAgICAgICAgIHRocm93IFRPTkNsaWVudEVycm9yLm1lc3NhZ2VFeHBpcmVkKHtcbiAgICAgICAgICAgICAgICAgICAgbXNnSWQ6IG1lc3NhZ2VJZCxcbiAgICAgICAgICAgICAgICAgICAgc2VuZFRpbWUsXG4gICAgICAgICAgICAgICAgICAgIGV4cGlyZSxcbiAgICAgICAgICAgICAgICAgICAgYmxvY2tUaW1lXG4gICAgICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBjb25zdCB0cmFuc2FjdGlvbk5vdyA9IHRyYW5zYWN0aW9uLm5vdyB8fCAwO1xuICAgICAgICAgICAgdGhpcy5jb25maWcubG9nKCd3YWl0Rm9yVHJhbnNhY3Rpb24uIHRyYW5zYWN0aW9uIHJlY2VpdmVkJywge1xuICAgICAgICAgICAgICAgIGlkOiB0cmFuc2FjdGlvbi5pZCxcbiAgICAgICAgICAgICAgICBibG9ja0lkOiB0cmFuc2FjdGlvbi5ibG9ja19pZCxcbiAgICAgICAgICAgICAgICBub3c6IGAke25ldyBEYXRlKHRyYW5zYWN0aW9uTm93ICogMTAwMCkudG9JU09TdHJpbmcoKX0gKCR7dHJhbnNhY3Rpb25Ob3d9KWAsXG4gICAgICAgICAgICB9KTtcbiAgICAgICAgfSBjYXRjaCAoZXJyb3IpIHtcbiAgICAgICAgICAgIHRoaXMuY29uZmlnLmxvZygnd2FpdEZvclRyYW5zYWN0aW9uLiBFcnJvciByZWNpZXZlZCcsIGVycm9yKTtcbiAgICAgICAgICAgIGlmIChUT05DbGllbnRFcnJvci5pc01lc3NhZ2VFeHBpcmVkKGVycm9yKSB8fCBcbiAgICAgICAgICAgICAgICBUT05DbGllbnRFcnJvci5pc0NsaWVudEVycm9yKGVycm9yLCBUT05DbGllbnRFcnJvci5jb2RlLlRSQU5TQUNUSU9OX1dBSVRfVElNRU9VVCkpXG4gICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgdGhyb3cgYXdhaXQgdGhpcy5yZXNvbHZlRGV0YWlsZWRFcnJvcihcbiAgICAgICAgICAgICAgICAgICAgZXJyb3IsXG4gICAgICAgICAgICAgICAgICAgIG1lc3NhZ2UubWVzc2FnZUJvZHlCYXNlNjQsXG4gICAgICAgICAgICAgICAgICAgIG1lc3NhZ2VDcmVhdGlvblRpbWUgfHwgRGF0ZS5ub3coKSxcbiAgICAgICAgICAgICAgICAgICAgYWRkcmVzcyxcbiAgICAgICAgICAgICAgICApO1xuICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgICB0aHJvdyBlcnJvclxuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICAgIHJlbW92ZVR5cGVOYW1lKHRyYW5zYWN0aW9uKTtcbiAgICAgICAgYXdhaXQgdGhpcy5jaGVja1RyYW5zYWN0aW9uKGFkZHJlc3MsIHRyYW5zYWN0aW9uLCBhYmksIGZ1bmN0aW9uTmFtZSk7XG4gICAgICAgIHJldHVybiB0cmFuc2FjdGlvbjtcbiAgICB9XG5cbiAgICBhc3luYyBjaGVja1RyYW5zYWN0aW9uKFxuICAgICAgICBhZGRyZXNzOiBzdHJpbmcsXG4gICAgICAgIHRyYW5zYWN0aW9uOiBRVHJhbnNhY3Rpb24sXG4gICAgICAgIGFiaT86IFRPTkNvbnRyYWN0QUJJLFxuICAgICAgICBmdW5jdGlvbk5hbWU/OiBzdHJpbmcsXG4gICAgKSB7XG4gICAgICAgIHRyeSB7XG4gICAgICAgICAgICBhd2FpdCB0aGlzLnJlcXVlc3RDb3JlKCdjb250cmFjdHMucHJvY2Vzcy50cmFuc2FjdGlvbicsIHtcbiAgICAgICAgICAgICAgICB0cmFuc2FjdGlvbixcbiAgICAgICAgICAgICAgICBhYmk6IGFiaSB8fCBudWxsLFxuICAgICAgICAgICAgICAgIGZ1bmN0aW9uTmFtZTogZnVuY3Rpb25OYW1lIHx8IG51bGwsXG4gICAgICAgICAgICAgICAgYWRkcmVzcyxcbiAgICAgICAgICAgIH0pO1xuICAgICAgICB9IGNhdGNoIChlcnJvcikge1xuICAgICAgICAgICAgY29uc3QgYWNjb3VudHMgPSBhd2FpdCB0aGlzLnF1ZXJpZXMuYWNjb3VudHMucXVlcnkoe1xuICAgICAgICAgICAgICAgIGZpbHRlcjogeyBpZDogeyBlcTogYWRkcmVzcyB9IH0sXG4gICAgICAgICAgICAgICAgcmVzdWx0OiAnYWNjX3R5cGUgYmFsYW5jZScsXG4gICAgICAgICAgICAgICAgdGltZW91dDogMTAwMCxcbiAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgaWYgKGFjY291bnRzLmxlbmd0aCA9PT0gMCkge1xuICAgICAgICAgICAgICAgIHRocm93IFRPTkNsaWVudEVycm9yLmFjY291bnRNaXNzaW5nKGFkZHJlc3MpO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgaWYgKFRPTkNsaWVudEVycm9yLmlzQ29udHJhY3RFcnJvcihlcnJvciwgVE9OQ29udHJhY3RFeGl0Q29kZS5OT19HQVMpKSB7XG4gICAgICAgICAgICAgICAgdGhyb3cgVE9OQ2xpZW50RXJyb3IuYWNjb3VudEJhbGFuY2VUb29Mb3coYWRkcmVzcywgYWNjb3VudHNbMF0uYmFsYW5jZSk7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICB0aHJvdyBlcnJvcjtcbiAgICAgICAgfVxuICAgIH1cblxuICAgIGFzeW5jIHJlc29sdmVEZXRhaWxlZEVycm9yKFxuICAgICAgICBlcnJvcjogRXJyb3IsXG4gICAgICAgIG1lc3NhZ2VCYXNlNjQ6IHN0cmluZyxcbiAgICAgICAgdGltZTogbnVtYmVyLFxuICAgICAgICBhZGRyZXNzOiBzdHJpbmcsXG4gICAgKSB7XG4gICAgICAgIGNvbnN0IGFjY291bnRzID0gYXdhaXQgdGhpcy5xdWVyaWVzLmFjY291bnRzLnF1ZXJ5KHtcbiAgICAgICAgICAgIGZpbHRlcjogeyBpZDogeyBlcTogYWRkcmVzcyB9IH0sXG4gICAgICAgICAgICByZXN1bHQ6ICdpZCBhY2NfdHlwZSBiYWxhbmNlIGJhbGFuY2Vfb3RoZXIgeyBjdXJyZW5jeSB2YWx1ZSB9IGNvZGUgZGF0YSBsYXN0X3BhaWQnLFxuICAgICAgICAgICAgdGltZW91dDogMTAwMCxcbiAgICAgICAgfSk7XG4gICAgICAgIGlmIChhY2NvdW50cy5sZW5ndGggPT09IDApIHtcbiAgICAgICAgICAgIHJldHVybiBUT05DbGllbnRFcnJvci5hY2NvdW50TWlzc2luZyhhZGRyZXNzKTtcbiAgICAgICAgfVxuICAgICAgICBjb25zdCBhY2NvdW50ID0gYWNjb3VudHNbMF07XG4gICAgICAgIHJlbW92ZVR5cGVOYW1lKGFjY291bnQpO1xuICAgICAgICB0cnkge1xuICAgICAgICAgICAgYXdhaXQgdGhpcy5yZXF1ZXN0Q29yZSgnY29udHJhY3RzLnJlc29sdmUuZXJyb3InLCB7XG4gICAgICAgICAgICAgICAgYWRkcmVzcyxcbiAgICAgICAgICAgICAgICBhY2NvdW50LFxuICAgICAgICAgICAgICAgIG1lc3NhZ2VCYXNlNjQsXG4gICAgICAgICAgICAgICAgdGltZTogTWF0aC5yb3VuZCh0aW1lIC8gMTAwMCksXG4gICAgICAgICAgICAgICAgbWFpbkVycm9yOiBlcnJvcixcbiAgICAgICAgICAgIH0pO1xuICAgICAgICB9IGNhdGNoIChyZXNvbHZlZCkge1xuICAgICAgICAgICAgcmV0dXJuIHJlc29sdmVkO1xuICAgICAgICB9XG4gICAgICAgIHJldHVybiBlcnJvcjtcbiAgICB9XG5cbiAgICBhc3luYyBpc0RlcGxveWVkKGFkZHJlc3M6IHN0cmluZywgcGFyZW50U3Bhbj86IChTcGFuIHwgU3BhbkNvbnRleHQpKTogUHJvbWlzZTxib29sPiB7XG4gICAgICAgIGNvbnN0IGFjY291bnQgPSBhd2FpdCB0aGlzLnF1ZXJpZXMuYWNjb3VudHMucXVlcnkoe1xuICAgICAgICAgICAgZmlsdGVyOiB7XG4gICAgICAgICAgICAgICAgaWQ6IHsgZXE6IGFkZHJlc3MgfSxcbiAgICAgICAgICAgICAgICBhY2NfdHlwZTogeyBlcTogUUFjY291bnRUeXBlLmFjdGl2ZSB9LFxuICAgICAgICAgICAgfSxcbiAgICAgICAgICAgIHJlc3VsdDogJ2lkJyxcbiAgICAgICAgICAgIHBhcmVudFNwYW4sXG4gICAgICAgIH0pO1xuICAgICAgICByZXR1cm4gYWNjb3VudC5sZW5ndGggPiAwO1xuICAgIH1cblxuICAgIGFzeW5jIHByb2Nlc3NEZXBsb3lNZXNzYWdlKFxuICAgICAgICBwYXJhbXM6IFRPTkNvbnRyYWN0RGVwbG95TWVzc2FnZSxcbiAgICAgICAgcGFyZW50U3Bhbj86IChTcGFuIHwgU3BhbkNvbnRleHQpLFxuICAgICAgICByZXRyeUluZGV4PzogbnVtYmVyLFxuICAgICk6IFByb21pc2U8VE9OQ29udHJhY3REZXBsb3lSZXN1bHQ+IHtcbiAgICAgICAgdGhpcy5jb25maWcubG9nKCdwcm9jZXNzRGVwbG95TWVzc2FnZScsIHBhcmFtcyk7XG4gICAgICAgIGlmIChhd2FpdCB0aGlzLmlzRGVwbG95ZWQocGFyYW1zLmFkZHJlc3MsIHBhcmVudFNwYW4pKSB7XG4gICAgICAgICAgICByZXR1cm4ge1xuICAgICAgICAgICAgICAgIGFkZHJlc3M6IHBhcmFtcy5hZGRyZXNzLFxuICAgICAgICAgICAgICAgIGFscmVhZHlEZXBsb3llZDogdHJ1ZSxcbiAgICAgICAgICAgIH07XG4gICAgICAgIH1cbiAgICAgICAgYXdhaXQgdGhpcy5zZW5kTWVzc2FnZShwYXJhbXMubWVzc2FnZSwgcGFyZW50U3Bhbik7XG4gICAgICAgIHJldHVybiB0aGlzLndhaXRGb3JEZXBsb3lUcmFuc2FjdGlvbihcbiAgICAgICAgICAgIHBhcmFtcyxcbiAgICAgICAgICAgIHBhcmVudFNwYW4sXG4gICAgICAgICAgICByZXRyeUluZGV4LFxuICAgICAgICApO1xuICAgIH1cblxuICAgIGFzeW5jIHdhaXRGb3JEZXBsb3lUcmFuc2FjdGlvbihcbiAgICAgICAgZGVwbG95TWVzc2FnZTogVE9OQ29udHJhY3REZXBsb3lNZXNzYWdlLFxuICAgICAgICBwYXJlbnRTcGFuPzogKFNwYW4gfCBTcGFuQ29udGV4dCksXG4gICAgICAgIHJldHJ5SW5kZXg/OiBudW1iZXIsXG4gICAgKTogUHJvbWlzZTxUT05Db250cmFjdERlcGxveVJlc3VsdD4ge1xuICAgICAgICBjb25zdCB0cmFuc2FjdGlvbiA9IGF3YWl0IHRoaXMud2FpdEZvclRyYW5zYWN0aW9uKFxuICAgICAgICAgICAgZGVwbG95TWVzc2FnZS5hZGRyZXNzLFxuICAgICAgICAgICAgZGVwbG95TWVzc2FnZS5tZXNzYWdlLFxuICAgICAgICAgICAgdHJhbnNhY3Rpb25EZXRhaWxzLFxuICAgICAgICAgICAgcGFyZW50U3BhbixcbiAgICAgICAgICAgIHJldHJ5SW5kZXgsXG4gICAgICAgICAgICBkZXBsb3lNZXNzYWdlLmNyZWF0aW9uVGltZSxcbiAgICAgICAgKTtcbiAgICAgICAgdGhpcy5jb25maWcubG9nKCdwcm9jZXNzRGVwbG95TWVzc2FnZS4gRW5kJyk7XG4gICAgICAgIHJldHVybiB7XG4gICAgICAgICAgICBhZGRyZXNzOiBkZXBsb3lNZXNzYWdlLmFkZHJlc3MsXG4gICAgICAgICAgICBhbHJlYWR5RGVwbG95ZWQ6IGZhbHNlLFxuICAgICAgICAgICAgdHJhbnNhY3Rpb24sXG4gICAgICAgIH07XG4gICAgfVxuXG5cbiAgICBhc3luYyBwcm9jZXNzUnVuTWVzc2FnZShcbiAgICAgICAgcnVuTWVzc2FnZTogVE9OQ29udHJhY3RSdW5NZXNzYWdlLFxuICAgICAgICBwYXJlbnRTcGFuPzogKFNwYW4gfCBTcGFuQ29udGV4dCksXG4gICAgICAgIHJldHJ5SW5kZXg/OiBudW1iZXIsXG4gICAgKTogUHJvbWlzZTxUT05Db250cmFjdFJ1blJlc3VsdD4ge1xuICAgICAgICB0aGlzLmNvbmZpZy5sb2coJ3Byb2Nlc3NSdW5NZXNzYWdlJywgcnVuTWVzc2FnZSk7XG4gICAgICAgIGF3YWl0IHRoaXMuc2VuZE1lc3NhZ2UocnVuTWVzc2FnZS5tZXNzYWdlLCBwYXJlbnRTcGFuKTtcbiAgICAgICAgcmV0dXJuIHRoaXMud2FpdEZvclJ1blRyYW5zYWN0aW9uKHJ1bk1lc3NhZ2UsIHBhcmVudFNwYW4sIHJldHJ5SW5kZXgpO1xuICAgIH1cblxuICAgIGFzeW5jIHdhaXRGb3JSdW5UcmFuc2FjdGlvbihcbiAgICAgICAgcnVuTWVzc2FnZTogVE9OQ29udHJhY3RSdW5NZXNzYWdlLFxuICAgICAgICBwYXJlbnRTcGFuPzogKFNwYW4gfCBTcGFuQ29udGV4dCksXG4gICAgICAgIHJldHJ5SW5kZXg/OiBudW1iZXIsXG4gICAgKTogUHJvbWlzZTxUT05Db250cmFjdFJ1blJlc3VsdD4ge1xuICAgICAgICBjb25zdCB0cmFuc2FjdGlvbiA9IGF3YWl0IHRoaXMud2FpdEZvclRyYW5zYWN0aW9uKFxuICAgICAgICAgICAgcnVuTWVzc2FnZS5hZGRyZXNzLFxuICAgICAgICAgICAgcnVuTWVzc2FnZS5tZXNzYWdlLFxuICAgICAgICAgICAgdHJhbnNhY3Rpb25EZXRhaWxzLFxuICAgICAgICAgICAgcGFyZW50U3BhbixcbiAgICAgICAgICAgIHJldHJ5SW5kZXgsXG4gICAgICAgICAgICBydW5NZXNzYWdlLmNyZWF0aW9uVGltZSxcbiAgICAgICAgICAgIHJ1bk1lc3NhZ2UuYWJpLFxuICAgICAgICAgICAgcnVuTWVzc2FnZS5mdW5jdGlvbk5hbWUsXG4gICAgICAgICk7XG4gICAgICAgIGNvbnN0IG91dHB1dE1lc3NhZ2VzID0gdHJhbnNhY3Rpb24ub3V0X21lc3NhZ2VzO1xuICAgICAgICBpZiAoIW91dHB1dE1lc3NhZ2VzIHx8IG91dHB1dE1lc3NhZ2VzLmxlbmd0aCA9PT0gMCkge1xuICAgICAgICAgICAgcmV0dXJuIHtcbiAgICAgICAgICAgICAgICBvdXRwdXQ6IG51bGwsXG4gICAgICAgICAgICAgICAgdHJhbnNhY3Rpb24sXG4gICAgICAgICAgICB9O1xuICAgICAgICB9XG4gICAgICAgIGNvbnN0IGV4dGVybmFsTWVzc2FnZXM6IFFNZXNzYWdlW10gPSBvdXRwdXRNZXNzYWdlcy5maWx0ZXIoKHg6IFFNZXNzYWdlKSA9PiB7XG4gICAgICAgICAgICByZXR1cm4geC5tc2dfdHlwZSA9PT0gUU1lc3NhZ2VUeXBlLmV4dE91dDtcbiAgICAgICAgfSk7XG4gICAgICAgIHRoaXMuY29uZmlnLmxvZygncHJvY2Vzc1J1bk1lc3NhZ2UuIEJlZm9yZSBtZXNzYWdlcyBwYXJzZScpO1xuICAgICAgICBjb25zdCBvdXRwdXRzID0gYXdhaXQgUHJvbWlzZS5hbGwoZXh0ZXJuYWxNZXNzYWdlcy5tYXAoKHg6IFFNZXNzYWdlKSA9PiB7XG4gICAgICAgICAgICByZXR1cm4gdGhpcy5kZWNvZGVPdXRwdXRNZXNzYWdlQm9keSh7XG4gICAgICAgICAgICAgICAgYWJpOiBydW5NZXNzYWdlLmFiaSxcbiAgICAgICAgICAgICAgICBib2R5QmFzZTY0OiB4LmJvZHkgfHwgJycsXG4gICAgICAgICAgICB9KTtcbiAgICAgICAgfSkpO1xuICAgICAgICBjb25zdCByZXN1bHRPdXRwdXQgPSBvdXRwdXRzLmZpbmQoKHg6IFRPTkNvbnRyYWN0RGVjb2RlTWVzc2FnZUJvZHlSZXN1bHQpID0+IHtcbiAgICAgICAgICAgIHJldHVybiB4LmZ1bmN0aW9uLnRvTG93ZXJDYXNlKCkgPT09IHJ1bk1lc3NhZ2UuZnVuY3Rpb25OYW1lLnRvTG93ZXJDYXNlKCk7XG4gICAgICAgIH0pO1xuICAgICAgICB0aGlzLmNvbmZpZy5sb2coJ3Byb2Nlc3NSdW5NZXNzYWdlLiBFbmQnKTtcbiAgICAgICAgcmV0dXJuIHtcbiAgICAgICAgICAgIG91dHB1dDogcmVzdWx0T3V0cHV0ID8gcmVzdWx0T3V0cHV0Lm91dHB1dCA6IG51bGwsXG4gICAgICAgICAgICB0cmFuc2FjdGlvbixcbiAgICAgICAgfTtcbiAgICB9XG5cbiAgICAvKipcbiAgICAgKiBEZXByZWNhdGVkLiBVc2UgYHJ1bk1lc3NhZ2VMb2NhbGAgaW5zdGVhZC5cbiAgICAgKiBAcGFyYW0gcGFyYW1zXG4gICAgICogQHBhcmFtIHdhaXRQYXJhbXNcbiAgICAgKiBAcGFyYW0gcGFyZW50U3BhblxuICAgICAqIEByZXR1cm5zIHtQcm9taXNlPHVua25vd24+fVxuICAgICAqL1xuICAgIGFzeW5jIHByb2Nlc3NSdW5NZXNzYWdlTG9jYWwoXG4gICAgICAgIHBhcmFtczogVE9OQ29udHJhY3RSdW5NZXNzYWdlLFxuICAgICAgICB3YWl0UGFyYW1zPzogVE9OQ29udHJhY3RBY2NvdW50V2FpdFBhcmFtcyxcbiAgICAgICAgcGFyZW50U3Bhbj86IChTcGFuIHwgU3BhbkNvbnRleHQpLFxuICAgICk6IFByb21pc2U8VE9OQ29udHJhY3RSdW5SZXN1bHQ+IHtcbiAgICAgICAgdGhpcy5jb25maWcubG9nKCdwcm9jZXNzUnVuTWVzc2FnZUxvY2FsJywgcGFyYW1zKTtcblxuICAgICAgICBjb25zdCBhY2NvdW50ID0gYXdhaXQgdGhpcy5nZXRBY2NvdW50KHBhcmFtcy5hZGRyZXNzLCB0cnVlLCB3YWl0UGFyYW1zLCBwYXJlbnRTcGFuKTtcblxuICAgICAgICByZXR1cm4gdGhpcy5yZXF1ZXN0Q29yZSgnY29udHJhY3RzLnJ1bi5sb2NhbC5tc2cnLCB7XG4gICAgICAgICAgICBhZGRyZXNzOiBwYXJhbXMuYWRkcmVzcyxcbiAgICAgICAgICAgIGFjY291bnQsXG4gICAgICAgICAgICBhYmk6IHBhcmFtcy5hYmksXG4gICAgICAgICAgICBmdW5jdGlvbk5hbWU6IHBhcmFtcy5mdW5jdGlvbk5hbWUsXG4gICAgICAgICAgICBtZXNzYWdlQmFzZTY0OiBwYXJhbXMubWVzc2FnZS5tZXNzYWdlQm9keUJhc2U2NCxcbiAgICAgICAgfSk7XG4gICAgfVxuXG4gICAgLy8gRmVlIGNhbGN1bGF0aW9uXG5cbiAgICBiaWdCYWxhbmNlID0gJzB4MTAwMDAwMDAwMDAwMDAnO1xuXG4gICAgYXN5bmMgY2FsY1J1bkZlZXMoXG4gICAgICAgIHBhcmFtczogVE9OQ29udHJhY3RDYWxjUnVuRmVlUGFyYW1zLFxuICAgICAgICBwYXJlbnRTcGFuPzogKFNwYW4gfCBTcGFuQ29udGV4dCksXG4gICAgKTogUHJvbWlzZTxUT05Db250cmFjdENhbGNGZWVSZXN1bHQ+IHtcbiAgICAgICAgdGhpcy5jb25maWcubG9nKCdjYWxjUnVuRmVlcycsIHBhcmFtcyk7XG5cbiAgICAgICAgY29uc3QgYWNjb3VudCA9IGF3YWl0IHRoaXMuZ2V0QWNjb3VudChwYXJhbXMuYWRkcmVzcywgdHJ1ZSwgcGFyYW1zLndhaXRQYXJhbXMsIHBhcmVudFNwYW4pO1xuXG4gICAgICAgIGlmIChwYXJhbXMuZW11bGF0ZUJhbGFuY2UpIHtcbiAgICAgICAgICAgIGFjY291bnQuYmFsYW5jZSA9IHRoaXMuYmlnQmFsYW5jZTtcbiAgICAgICAgfVxuXG4gICAgICAgIHJldHVybiB0aGlzLnJlcXVlc3RDb3JlKCdjb250cmFjdHMucnVuLmZlZScsIHtcbiAgICAgICAgICAgIGFkZHJlc3M6IHBhcmFtcy5hZGRyZXNzLFxuICAgICAgICAgICAgYWNjb3VudCxcbiAgICAgICAgICAgIGFiaTogcGFyYW1zLmFiaSxcbiAgICAgICAgICAgIGZ1bmN0aW9uTmFtZTogcGFyYW1zLmZ1bmN0aW9uTmFtZSxcbiAgICAgICAgICAgIGlucHV0OiBwYXJhbXMuaW5wdXQsXG4gICAgICAgICAgICBrZXlQYWlyOiBwYXJhbXMua2V5UGFpcixcbiAgICAgICAgfSk7XG4gICAgfVxuXG4gICAgYXN5bmMgY2FsY0RlcGxveUZlZXMoXG4gICAgICAgIHBhcmFtczogVE9OQ29udHJhY3RDYWxjRGVwbG95RmVlUGFyYW1zLFxuICAgICAgICBwYXJlbnRTcGFuPzogKFNwYW4gfCBTcGFuQ29udGV4dCksXG4gICAgKTogUHJvbWlzZTxUT05Db250cmFjdENhbGNGZWVSZXN1bHQ+IHtcbiAgICAgICAgdGhpcy5jb25maWcubG9nKCdjYWxjRGVwbG95RmVlcycsIHBhcmFtcyk7XG5cbiAgICAgICAgY29uc3QgbWVzc2FnZSA9IGF3YWl0IHRoaXMuY3JlYXRlRGVwbG95TWVzc2FnZShwYXJhbXMpO1xuXG4gICAgICAgIHJldHVybiB0aGlzLmNhbGNNc2dQcm9jZXNzRmVlcyh7XG4gICAgICAgICAgICBhZGRyZXNzOiBtZXNzYWdlLmFkZHJlc3MsXG4gICAgICAgICAgICBtZXNzYWdlOiBtZXNzYWdlLm1lc3NhZ2UsXG4gICAgICAgICAgICBlbXVsYXRlQmFsYW5jZTogcGFyYW1zLmVtdWxhdGVCYWxhbmNlLFxuICAgICAgICAgICAgbmV3QWNjb3VudDogcGFyYW1zLm5ld0FjY291bnQsXG4gICAgICAgIH0sIHBhcmVudFNwYW4pO1xuICAgIH1cblxuICAgIGFzeW5jIGNhbGNNc2dQcm9jZXNzRmVlcyhcbiAgICAgICAgcGFyYW1zOiBUT05Db250cmFjdENhbGNNc2dQcm9jZXNzaW5nRmVlc1BhcmFtcyxcbiAgICAgICAgcGFyZW50U3Bhbj86IChTcGFuIHwgU3BhbkNvbnRleHQpLFxuICAgICk6IFByb21pc2U8VE9OQ29udHJhY3RDYWxjRmVlUmVzdWx0PiB7XG4gICAgICAgIHRoaXMuY29uZmlnLmxvZygnY2FsY01zZ1Byb2Nlc3NGZWVzJywgcGFyYW1zKTtcblxuICAgICAgICBsZXQgYWNjb3VudDogUUFjY291bnQgPSB7XG4gICAgICAgICAgICBiYWxhbmNlOiB0aGlzLmJpZ0JhbGFuY2UsXG4gICAgICAgICAgICBpZDogcGFyYW1zLmFkZHJlc3MsXG4gICAgICAgICAgICBsYXN0X3BhaWQ6IE1hdGguZmxvb3IoRGF0ZS5ub3coKSAvIDEwMDApLFxuICAgICAgICB9O1xuXG4gICAgICAgIGlmICghcGFyYW1zLm5ld0FjY291bnQpIHtcbiAgICAgICAgICAgIGFjY291bnQgPSBhd2FpdCB0aGlzLmdldEFjY291bnQocGFyYW1zLmFkZHJlc3MsIGZhbHNlLCBwYXJhbXMud2FpdFBhcmFtcywgcGFyZW50U3Bhbik7XG4gICAgICAgIH1cblxuICAgICAgICBpZiAocGFyYW1zLmVtdWxhdGVCYWxhbmNlKSB7XG4gICAgICAgICAgICBhY2NvdW50LmJhbGFuY2UgPSB0aGlzLmJpZ0JhbGFuY2U7XG4gICAgICAgIH1cblxuICAgICAgICByZXR1cm4gdGhpcy5yZXF1ZXN0Q29yZSgnY29udHJhY3RzLnJ1bi5mZWUubXNnJywge1xuICAgICAgICAgICAgYWRkcmVzczogcGFyYW1zLmFkZHJlc3MsXG4gICAgICAgICAgICBhY2NvdW50LFxuICAgICAgICAgICAgbWVzc2FnZUJhc2U2NDogcGFyYW1zLm1lc3NhZ2UubWVzc2FnZUJvZHlCYXNlNjQsXG4gICAgICAgIH0pO1xuICAgIH1cblxuICAgIC8vIEFkZHJlc3MgcHJvY2Vzc2luZ1xuXG4gICAgYXN5bmMgY29udmVydEFkZHJlc3MoXG4gICAgICAgIHBhcmFtczogVE9OQ29udHJhY3RDb252ZXJ0QWRkcmVzc1BhcmFtcyxcbiAgICApOiBQcm9taXNlPFRPTkNvbnRyYWN0Q29udmVydEFkZHJlc3NSZXN1bHQ+IHtcbiAgICAgICAgcmV0dXJuIHRoaXMucmVxdWVzdENvcmUoJ2NvbnRyYWN0cy5hZGRyZXNzLmNvbnZlcnQnLCBwYXJhbXMpO1xuICAgIH1cblxuICAgIC8vIEludGVybmFsc1xuXG4gICAgYXN5bmMgaW50ZXJuYWxEZXBsb3lOYXRpdmUocGFyYW1zOiBUT05Db250cmFjdERlcGxveVBhcmFtcyk6IFByb21pc2U8VE9OQ29udHJhY3REZXBsb3lSZXN1bHQ+IHtcbiAgICAgICAgcmV0dXJuIHRoaXMucmVxdWVzdENvcmUoJ2NvbnRyYWN0cy5kZXBsb3knLCB7XG4gICAgICAgICAgICBhYmk6IHBhcmFtcy5wYWNrYWdlLmFiaSxcbiAgICAgICAgICAgIGNvbnN0cnVjdG9ySGVhZGVyOiBwYXJhbXMuY29uc3RydWN0b3JIZWFkZXIsXG4gICAgICAgICAgICBjb25zdHJ1Y3RvclBhcmFtczogcGFyYW1zLmNvbnN0cnVjdG9yUGFyYW1zLFxuICAgICAgICAgICAgaW5pdFBhcmFtczogcGFyYW1zLmluaXRQYXJhbXMsXG4gICAgICAgICAgICBpbWFnZUJhc2U2NDogcGFyYW1zLnBhY2thZ2UuaW1hZ2VCYXNlNjQsXG4gICAgICAgICAgICBrZXlQYWlyOiBwYXJhbXMua2V5UGFpcixcbiAgICAgICAgfSk7XG4gICAgfVxuXG5cbiAgICBhc3luYyBpbnRlcm5hbFJ1bk5hdGl2ZShwYXJhbXM6IFRPTkNvbnRyYWN0UnVuUGFyYW1zKTogUHJvbWlzZTxUT05Db250cmFjdFJ1blJlc3VsdD4ge1xuICAgICAgICByZXR1cm4gdGhpcy5yZXF1ZXN0Q29yZSgnY29udHJhY3RzLnJ1bicsIHtcbiAgICAgICAgICAgIGFkZHJlc3M6IHBhcmFtcy5hZGRyZXNzLFxuICAgICAgICAgICAgYWJpOiBwYXJhbXMuYWJpLFxuICAgICAgICAgICAgZnVuY3Rpb25OYW1lOiBwYXJhbXMuZnVuY3Rpb25OYW1lLFxuICAgICAgICAgICAgaGVhZGVyOiBwYXJhbXMuaGVhZGVyLFxuICAgICAgICAgICAgaW5wdXQ6IHBhcmFtcy5pbnB1dCxcbiAgICAgICAgICAgIGtleVBhaXI6IHBhcmFtcy5rZXlQYWlyLFxuICAgICAgICB9KTtcbiAgICB9XG5cbiAgICBtYWtlRXhwaXJlSGVhZGVyKFxuICAgICAgICBhYmk6IFRPTkNvbnRyYWN0QUJJLFxuICAgICAgICB1c2VySGVhZGVyPzogYW55LFxuICAgICAgICByZXRyeUluZGV4PzogbnVtYmVyLFxuICAgICk6IGFueSB7XG4gICAgICAgIGNvbnN0IHRpbWVvdXQgPSB0aGlzLmNvbmZpZy5tZXNzYWdlRXhwaXJhdGlvblRpbWVvdXQocmV0cnlJbmRleCk7XG4gICAgICAgIGlmIChhYmkuaGVhZGVyICYmIGFiaS5oZWFkZXIuaW5jbHVkZXMoJ2V4cGlyZScpICYmICF1c2VySGVhZGVyPy5leHBpcmUpIHtcbiAgICAgICAgICAgIHJldHVybiB7XG4gICAgICAgICAgICAgICAgLi4udXNlckhlYWRlcixcbiAgICAgICAgICAgICAgICBleHBpcmU6IE1hdGguZmxvb3IoKERhdGUubm93KCkgKyB0aW1lb3V0KSAvIDEwMDApICsgMSxcbiAgICAgICAgICAgIH07XG4gICAgICAgIH1cbiAgICAgICAgcmV0dXJuIHVzZXJIZWFkZXI7XG4gICAgfVxuXG4gICAgYXN5bmMgcmV0cnlDYWxsKGNhbGw6IChpbmRleDogbnVtYmVyKSA9PiBQcm9taXNlPGFueT4pOiBQcm9taXNlPGFueT4ge1xuICAgICAgICBjb25zdCByZXRyaWVzQ291bnQgPSB0aGlzLmNvbmZpZy5tZXNzYWdlUmV0cmllc0NvdW50KCk7XG4gICAgICAgIGZvciAobGV0IGkgPSAwOyBpIDw9IHJldHJpZXNDb3VudDsgaSArPSAxKSB7XG4gICAgICAgICAgICBpZiAoaSA+IDApIHtcbiAgICAgICAgICAgICAgICB0aGlzLmNvbmZpZy5sb2coYFJldHJ5ICMke2l9YCk7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICB0cnkge1xuICAgICAgICAgICAgICAgIHJldHVybiBhd2FpdCBjYWxsKGkpO1xuICAgICAgICAgICAgfSBjYXRjaCAoZXJyb3IpIHtcbiAgICAgICAgICAgICAgICBjb25zdCB1c2VSZXRyeSA9IGVycm9yLmNvZGUgPT09IFRPTkVycm9yQ29kZS5NRVNTQUdFX0VYUElSRURcbiAgICAgICAgICAgICAgICAgICAgfHwgVE9OQ2xpZW50RXJyb3IuaXNDb250cmFjdEVycm9yKGVycm9yLCBUT05Db250cmFjdEV4aXRDb2RlLlJFUExBWV9QUk9URUNUSU9OKVxuICAgICAgICAgICAgICAgICAgICB8fCBUT05DbGllbnRFcnJvci5pc0NvbnRyYWN0RXJyb3IoZXJyb3IsIFRPTkNvbnRyYWN0RXhpdENvZGUuTUVTU0FHRV9FWFBJUkVEKTtcbiAgICAgICAgICAgICAgICBpZiAoIXVzZVJldHJ5IHx8IGkgPT09IHJldHJpZXNDb3VudCkge1xuICAgICAgICAgICAgICAgICAgICB0aHJvdyBlcnJvcjtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgICAgdGhyb3cgVE9OQ2xpZW50RXJyb3IuaW50ZXJuYWxFcnJvcihcInJldHJ5Q2FsbDogdW5yZWFjaGFibGVcIik7XG4gICAgfVxuXG4gICAgYXN5bmMgaW50ZXJuYWxEZXBsb3lKcyhcbiAgICAgICAgcGFyYW1zOiBUT05Db250cmFjdERlcGxveVBhcmFtcyxcbiAgICAgICAgcGFyZW50U3Bhbj86IChTcGFuIHwgU3BhbkNvbnRleHQpLFxuICAgICk6IFByb21pc2U8VE9OQ29udHJhY3REZXBsb3lSZXN1bHQ+IHtcbiAgICAgICAgdGhpcy5jb25maWcubG9nKCdEZXBsb3kgc3RhcnQnKTtcbiAgICAgICAgcmV0dXJuIHRoaXMucmV0cnlDYWxsKGFzeW5jIChyZXRyeUluZGV4KSA9PiB7XG4gICAgICAgICAgICBjb25zdCBkZXBsb3lNZXNzYWdlID0gYXdhaXQgdGhpcy5jcmVhdGVEZXBsb3lNZXNzYWdlKHBhcmFtcywgcmV0cnlJbmRleCk7XG4gICAgICAgICAgICBpZiAoYXdhaXQgdGhpcy5pc0RlcGxveWVkKGRlcGxveU1lc3NhZ2UuYWRkcmVzcywgcGFyZW50U3BhbikpIHtcbiAgICAgICAgICAgICAgICByZXR1cm4ge1xuICAgICAgICAgICAgICAgICAgICBhZGRyZXNzOiBkZXBsb3lNZXNzYWdlLmFkZHJlc3MsXG4gICAgICAgICAgICAgICAgICAgIGFscmVhZHlEZXBsb3llZDogdHJ1ZSxcbiAgICAgICAgICAgICAgICB9O1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgYXdhaXQgdGhpcy5zZW5kTWVzc2FnZShkZXBsb3lNZXNzYWdlLm1lc3NhZ2UsIHBhcmVudFNwYW4pO1xuICAgICAgICAgICAgcmV0dXJuIHRoaXMud2FpdEZvckRlcGxveVRyYW5zYWN0aW9uKGRlcGxveU1lc3NhZ2UsIHBhcmVudFNwYW4sIHJldHJ5SW5kZXgpO1xuICAgICAgICB9KTtcbiAgICB9XG5cblxuICAgIGFzeW5jIGludGVybmFsUnVuSnMoXG4gICAgICAgIHBhcmFtczogVE9OQ29udHJhY3RSdW5QYXJhbXMsXG4gICAgICAgIHBhcmVudFNwYW4/OiAoU3BhbiB8IFNwYW5Db250ZXh0KSxcbiAgICApOiBQcm9taXNlPFRPTkNvbnRyYWN0UnVuUmVzdWx0PiB7XG4gICAgICAgIHRoaXMuY29uZmlnLmxvZygnUnVuIHN0YXJ0Jyk7XG4gICAgICAgIHJldHVybiB0aGlzLnJldHJ5Q2FsbChhc3luYyAocmV0cnlJbmRleCkgPT4ge1xuICAgICAgICAgICAgY29uc3QgcnVuTWVzc2FnZSA9IGF3YWl0IHRoaXMuY3JlYXRlUnVuTWVzc2FnZShwYXJhbXMsIHJldHJ5SW5kZXgpO1xuICAgICAgICAgICAgYXdhaXQgdGhpcy5zZW5kTWVzc2FnZShydW5NZXNzYWdlLm1lc3NhZ2UsIHBhcmVudFNwYW4pO1xuICAgICAgICAgICAgcmV0dXJuIHRoaXMud2FpdEZvclJ1blRyYW5zYWN0aW9uKHJ1bk1lc3NhZ2UsIHBhcmVudFNwYW4sIHJldHJ5SW5kZXgpO1xuICAgICAgICB9KTtcbiAgICB9XG5cbiAgICBhc3luYyBnZXRBY2NvdW50KFxuICAgICAgICBhZGRyZXNzOiBzdHJpbmcsXG4gICAgICAgIGFjdGl2ZTogYm9vbGVhbixcbiAgICAgICAgd2FpdFBhcmFtcz86IFRPTkNvbnRyYWN0QWNjb3VudFdhaXRQYXJhbXMsXG4gICAgICAgIHBhcmVudFNwYW4/OiAoU3BhbiB8IFNwYW5Db250ZXh0KSxcbiAgICApOiBQcm9taXNlPFFBY2NvdW50PiB7XG4gICAgICAgIGNvbnN0IGZpbHRlcjogeyBbc3RyaW5nXTogYW55IH0gPSB7XG4gICAgICAgICAgICBpZDogeyBlcTogYWRkcmVzcyB9LFxuICAgICAgICB9O1xuICAgICAgICBpZiAod2FpdFBhcmFtcyAmJiB3YWl0UGFyYW1zLnRyYW5zYWN0aW9uTHQpIHtcbiAgICAgICAgICAgIGZpbHRlci5sYXN0X3RyYW5zX2x0ID0geyBnZTogd2FpdFBhcmFtcy50cmFuc2FjdGlvbkx0IH07XG4gICAgICAgIH1cbiAgICAgICAgaWYgKGFjdGl2ZSkge1xuICAgICAgICAgICAgZmlsdGVyLmFjY190eXBlID0geyBlcTogUUFjY291bnRUeXBlLmFjdGl2ZSB9O1xuICAgICAgICB9XG5cbiAgICAgICAgdGhpcy5jb25maWcubG9nKCdnZXRBY2NvdW50LiBGaWx0ZXInLCBmaWx0ZXIpO1xuICAgICAgICBjb25zdCBhY2NvdW50cyA9IGF3YWl0IHRoaXMucXVlcmllcy5hY2NvdW50cy5xdWVyeSh7XG4gICAgICAgICAgICBmaWx0ZXIsXG4gICAgICAgICAgICByZXN1bHQ6ICdpZCBhY2NfdHlwZSBjb2RlIGRhdGEgYmFsYW5jZSBiYWxhbmNlX290aGVyIHsgY3VycmVuY3kgdmFsdWUgfSBsYXN0X3BhaWQnLFxuICAgICAgICAgICAgLi4uKHdhaXRQYXJhbXMgJiYgd2FpdFBhcmFtcy50aW1lb3V0ID8geyB0aW1lb3V0OiB3YWl0UGFyYW1zLnRpbWVvdXQgfSA6IHt9KSxcbiAgICAgICAgICAgIHBhcmVudFNwYW4sXG4gICAgICAgIH0pO1xuICAgICAgICBpZiAoYWNjb3VudHMubGVuZ3RoID09PSAwKSB7XG4gICAgICAgICAgICB0aHJvdyBUT05DbGllbnRFcnJvci5hY2NvdW50TWlzc2luZyhhZGRyZXNzKTtcbiAgICAgICAgfVxuICAgICAgICBjb25zdCBhY2NvdW50ID0gYWNjb3VudHNbMF07XG4gICAgICAgIHJlbW92ZVR5cGVOYW1lKGFjY291bnQpO1xuICAgICAgICB0aGlzLmNvbmZpZy5sb2coJ2dldEFjY291bnQuIEFjY291bnQgcmVjZWl2ZWQnLCBhY2NvdW50KTtcbiAgICAgICAgcmV0dXJuIGFjY291bnQ7XG4gICAgfVxuXG4gICAgYXN5bmMgaW50ZXJuYWxSdW5Mb2NhbEpzKFxuICAgICAgICBwYXJhbXM6IFRPTkNvbnRyYWN0UnVuTG9jYWxQYXJhbXMsXG4gICAgICAgIHBhcmVudFNwYW4/OiAoU3BhbiB8IFNwYW5Db250ZXh0KSxcbiAgICApOiBQcm9taXNlPFRPTkNvbnRyYWN0UnVuTG9jYWxSZXN1bHQ+IHtcbiAgICAgICAgY29uc3QgYWRkcmVzcyA9IHBhcmFtcy5hZGRyZXNzO1xuICAgICAgICBpZiAoIWFkZHJlc3MpIHtcbiAgICAgICAgICAgIHRocm93IFRPTkNsaWVudEVycm9yLmFkZHJlc3NSZXF1aXJlZEZvclJ1bkxvY2FsKCk7XG4gICAgICAgIH1cbiAgICAgICAgY29uc3QgYWNjb3VudCA9IHBhcmFtcy5hY2NvdW50IHx8IChhd2FpdCB0aGlzLmdldEFjY291bnQoXG4gICAgICAgICAgICBhZGRyZXNzLFxuICAgICAgICAgICAgZmFsc2UsXG4gICAgICAgICAgICBwYXJhbXMud2FpdFBhcmFtcyxcbiAgICAgICAgICAgIHBhcmVudFNwYW4sXG4gICAgICAgICkpO1xuICAgICAgICBpZiAoIWFjY291bnQuY29kZSkge1xuICAgICAgICAgICAgdGhyb3cgVE9OQ2xpZW50RXJyb3IuYWNjb3VudENvZGVNaXNzaW5nKGFkZHJlc3MsIChhY2NvdW50OiBhbnkpLmJhbGFuY2UpO1xuICAgICAgICB9XG4gICAgICAgIHJldHVybiB0aGlzLnJlcXVlc3RDb3JlKCdjb250cmFjdHMucnVuLmxvY2FsJywge1xuICAgICAgICAgICAgYWRkcmVzcyxcbiAgICAgICAgICAgIGFjY291bnQsXG4gICAgICAgICAgICBhYmk6IHBhcmFtcy5hYmksXG4gICAgICAgICAgICBmdW5jdGlvbk5hbWU6IHBhcmFtcy5mdW5jdGlvbk5hbWUsXG4gICAgICAgICAgICBpbnB1dDogcGFyYW1zLmlucHV0LFxuICAgICAgICAgICAga2V5UGFpcjogcGFyYW1zLmtleVBhaXIsXG4gICAgICAgICAgICBmdWxsUnVuOiBwYXJhbXMuZnVsbFJ1bixcbiAgICAgICAgfSk7XG4gICAgfVxuXG4gICAgYXN5bmMgaW50ZXJuYWxSdW5NZXNzYWdlTG9jYWxKcyhcbiAgICAgICAgcGFyYW1zOiBUT05Db250cmFjdFJ1bk1lc3NhZ2VMb2NhbFBhcmFtcyxcbiAgICAgICAgcGFyZW50U3Bhbj86IChTcGFuIHwgU3BhbkNvbnRleHQpLFxuICAgICk6IFByb21pc2U8VE9OQ29udHJhY3RSdW5Mb2NhbFJlc3VsdD4ge1xuICAgICAgICBjb25zdCBhZGRyZXNzID0gcGFyYW1zLmFkZHJlc3M7XG4gICAgICAgIGlmICghYWRkcmVzcykge1xuICAgICAgICAgICAgdGhyb3cgVE9OQ2xpZW50RXJyb3IuYWRkcmVzc1JlcXVpcmVkRm9yUnVuTG9jYWwoKTtcbiAgICAgICAgfVxuICAgICAgICBjb25zdCBhY2NvdW50ID0gcGFyYW1zLmFjY291bnQgfHwgKGF3YWl0IHRoaXMuZ2V0QWNjb3VudChcbiAgICAgICAgICAgIGFkZHJlc3MsXG4gICAgICAgICAgICBmYWxzZSxcbiAgICAgICAgICAgIHBhcmFtcy53YWl0UGFyYW1zLFxuICAgICAgICAgICAgcGFyZW50U3BhbixcbiAgICAgICAgKSk7XG4gICAgICAgIGlmICghYWNjb3VudC5jb2RlKSB7XG4gICAgICAgICAgICB0aHJvdyBUT05DbGllbnRFcnJvci5hY2NvdW50Q29kZU1pc3NpbmcoYWRkcmVzcywgKGFjY291bnQ6IGFueSkuYmFsYW5jZSk7XG4gICAgICAgIH1cbiAgICAgICAgcmV0dXJuIHRoaXMucmVxdWVzdENvcmUoJ2NvbnRyYWN0cy5ydW4ubG9jYWwubXNnJywge1xuICAgICAgICAgICAgYWRkcmVzcyxcbiAgICAgICAgICAgIGFjY291bnQsXG4gICAgICAgICAgICBhYmk6IHBhcmFtcy5hYmksXG4gICAgICAgICAgICBmdW5jdGlvbk5hbWU6IHBhcmFtcy5mdW5jdGlvbk5hbWUsXG4gICAgICAgICAgICBtZXNzYWdlQmFzZTY0OiBwYXJhbXMubWVzc2FnZUJvZHlCYXNlNjQsXG4gICAgICAgICAgICBmdWxsUnVuOiBwYXJhbXMuZnVsbFJ1bixcbiAgICAgICAgfSk7XG4gICAgfVxufVxuXG5UT05Db250cmFjdHNNb2R1bGUubW9kdWxlTmFtZSA9ICdUT05Db250cmFjdHNNb2R1bGUnO1xuXG5jb25zdCB0cmFuc2FjdGlvbkRldGFpbHMgPSBgXG4gICAgaWRcbiAgICBpbl9tc2dcbiAgICB0cl90eXBlXG4gICAgc3RhdHVzXG4gICAgaW5fbXNnXG4gICAgb3V0X21zZ3NcbiAgICBibG9ja19pZFxuICAgIG5vd1xuICAgIGFib3J0ZWRcbiAgICBsdFxuICAgIHRvdGFsX2ZlZXNcbiAgICBzdG9yYWdlIHtcbiAgICAgICAgc3RhdHVzX2NoYW5nZVxuICAgICAgICBzdG9yYWdlX2ZlZXNfY29sbGVjdGVkXG4gICAgfVxuICAgIGNvbXB1dGUge1xuICAgICAgICBjb21wdXRlX3R5cGVcbiAgICAgICAgc2tpcHBlZF9yZWFzb25cbiAgICAgICAgc3VjY2Vzc1xuICAgICAgICBleGl0X2NvZGVcbiAgICAgICAgZ2FzX2ZlZXNcbiAgICAgICAgZ2FzX3VzZWRcbiAgICB9XG4gICAgYWN0aW9uIHtcbiAgICAgICAgc3VjY2Vzc1xuICAgICAgICB2YWxpZFxuICAgICAgICByZXN1bHRfY29kZVxuICAgICAgICBub19mdW5kc1xuICAgICAgICB0b3RhbF9md2RfZmVlc1xuICAgICAgICB0b3RhbF9hY3Rpb25fZmVlc1xuICAgIH1cbiAgICBvdXRfbWVzc2FnZXMge1xuICAgICAgICBpZFxuICAgICAgICBtc2dfdHlwZVxuICAgICAgICBib2R5XG4gICAgICAgIHZhbHVlXG4gICAgfVxuICAgYDtcbiJdfQ==