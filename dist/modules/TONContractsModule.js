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
                this.config.log('sendMessage. Request posted');
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

        var messageId, config, processingTimeout, promises, serverInfo, operationId, transaction, expire, waitExpired, transactionNow;
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
                _context33.prev = 11;
                expire = message.expire;

                if (expire) {
                  // calculate timeout according to `expire` value (in seconds)
                  // add processing timeout as master block validation time
                  processingTimeout = expire * 1000 - Date.now() + processingTimeout;

                  waitExpired = /*#__PURE__*/function () {
                    var _ref5 = _asyncToGenerator( /*#__PURE__*/_regenerator["default"].mark(function _callee31() {
                      var _block$in_msg_descr$f;

                      var block, transaction_id;
                      return _regenerator["default"].wrap(function _callee31$(_context31) {
                        while (1) {
                          switch (_context31.prev = _context31.next) {
                            case 0:
                              _context31.next = 2;
                              return _this6.queries.blocks.waitFor({
                                filter: {
                                  master: {
                                    min_shard_gen_utime: {
                                      ge: expire
                                    }
                                  }
                                },
                                result: 'in_msg_descr { transaction_id }',
                                timeout: processingTimeout,
                                parentSpan: parentSpan,
                                operationId: operationId
                              });

                            case 2:
                              block = _context31.sent;

                              if (!transaction) {
                                _context31.next = 5;
                                break;
                              }

                              return _context31.abrupt("return");

                            case 5:
                              transaction_id = block.in_msg_descr && ((_block$in_msg_descr$f = block.in_msg_descr.find(function (msg) {
                                return !!msg.transaction_id;
                              })) === null || _block$in_msg_descr$f === void 0 ? void 0 : _block$in_msg_descr$f.transaction_id);

                              if (transaction_id) {
                                _context31.next = 8;
                                break;
                              }

                              throw _TONClient.TONClientError.internalError('Invalid block received: no transaction ID');

                            case 8:
                              _context31.next = 10;
                              return _this6.queries.transactions.waitFor({
                                filter: {
                                  id: {
                                    eq: transaction_id
                                  }
                                },
                                result: 'id',
                                timeout: processingTimeout,
                                parentSpan: parentSpan,
                                operationId: operationId
                              });

                            case 10:
                            case "end":
                              return _context31.stop();
                          }
                        }
                      }, _callee31);
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
                            reject(_context32.t0);

                          case 10:
                          case "end":
                            return _context32.stop();
                        }
                      }
                    }, _callee32, null, [[0, 7]]);
                  }))();
                }));
                _context33.prev = 15;
                _context33.next = 18;
                return Promise.race(promises);

              case 18:
                _context33.prev = 18;

                if (!(promises.length > 1 && operationId)) {
                  _context33.next = 22;
                  break;
                }

                _context33.next = 22;
                return this.queries.finishOperations([operationId]);

              case 22:
                return _context33.finish(18);

              case 23:
                if (transaction) {
                  _context33.next = 25;
                  break;
                }

                throw _TONClient.TONClientError.messageExpired();

              case 25:
                transactionNow = transaction.now || 0;
                this.config.log('processMessage. transaction received', {
                  id: transaction.id,
                  block_id: transaction.block_id,
                  now: "".concat(new Date(transactionNow * 1000).toISOString(), " (").concat(transactionNow, ")")
                });
                _context33.next = 34;
                break;

              case 29:
                _context33.prev = 29;
                _context33.t0 = _context33["catch"](11);
                _context33.next = 33;
                return this.resolveDetailedError(_context33.t0, message.messageBodyBase64, messageCreationTime || Date.now(), address);

              case 33:
                throw _context33.sent;

              case 34:
                removeTypeName(transaction);
                _context33.next = 37;
                return this.checkTransaction(address, transaction, abi, functionName);

              case 37:
                return _context33.abrupt("return", transaction);

              case 38:
              case "end":
                return _context33.stop();
            }
          }
        }, _callee33, this, [[11, 29], [15,, 18, 23]]);
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
                useRetry = _context48.t0.code === _TONClient.TONErrorCode.MESSAGE_EXPIRED || _TONClient.TONClientError.isContractError(_context48.t0, _TONClient.TONContractExitCode.REPLAY_PROTECTION);

                if (useRetry) {
                  _context48.next = 15;
                  break;
                }

                throw _context48.t0;

              case 15:
                i += 1;
                _context48.next = 2;
                break;

              case 18:
                throw _TONClient.TONClientError.messageExpired();

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy9tb2R1bGVzL1RPTkNvbnRyYWN0c01vZHVsZS5qcyJdLCJuYW1lcyI6WyJUT05BZGRyZXNzU3RyaW5nVmFyaWFudCIsIkFjY291bnRJZCIsIkhleCIsIkJhc2U2NCIsIlRPTkNsaWVudFRyYW5zYWN0aW9uUGhhc2UiLCJzdG9yYWdlIiwiY29tcHV0ZVNraXBwZWQiLCJjb21wdXRlVm0iLCJhY3Rpb24iLCJ1bmtub3duIiwiVE9OQ2xpZW50Q29tcHV0ZVNraXBwZWRTdGF0dXMiLCJub1N0YXRlIiwiYmFkU3RhdGUiLCJub0dhcyIsIlRPTkNsaWVudFN0b3JhZ2VTdGF0dXMiLCJ1bmNoYW5nZWQiLCJmcm96ZW4iLCJkZWxldGVkIiwiUUluTXNnVHlwZSIsImV4dGVybmFsIiwiaWhyIiwiaW1tZWRpYXRlbHkiLCJ0cmFuc2l0IiwiZGlzY2FyZGVkRmluYWwiLCJkaXNjYXJkZWRUcmFuc2l0IiwiUU91dE1zZ1R5cGUiLCJvdXRNc2dOZXciLCJkZXF1ZXVlSW1tZWRpYXRlbHkiLCJkZXF1ZXVlIiwidHJhbnNpdFJlcXVpcmVkIiwibm9uZSIsIlFNZXNzYWdlVHlwZSIsImludGVybmFsIiwiZXh0SW4iLCJleHRPdXQiLCJRTWVzc2FnZVByb2Nlc3NpbmdTdGF0dXMiLCJxdWV1ZWQiLCJwcm9jZXNzaW5nIiwicHJlbGltaW5hcnkiLCJwcm9wb3NlZCIsImZpbmFsaXplZCIsInJlZnVzZWQiLCJ0cmFuc2l0aW5nIiwiUUJsb2NrUHJvY2Vzc2luZ1N0YXR1cyIsIlFTcGxpdFR5cGUiLCJzcGxpdCIsIm1lcmdlIiwiUUFjY291bnRUeXBlIiwidW5pbml0IiwiYWN0aXZlIiwiUVRyYW5zYWN0aW9uVHlwZSIsIm9yZGluYXJ5IiwidGljayIsInRvY2siLCJzcGxpdFByZXBhcmUiLCJzcGxpdEluc3RhbGwiLCJtZXJnZVByZXBhcmUiLCJtZXJnZUluc3RhbGwiLCJRVHJhbnNhY3Rpb25Qcm9jZXNzaW5nU3RhdHVzIiwiUUFjY291bnRTdGF0dXMiLCJub25FeGlzdCIsIlFBY2NvdW50U3RhdHVzQ2hhbmdlIiwiUUNvbXB1dGVUeXBlIiwic2tpcHBlZCIsInZtIiwiUVNraXBSZWFzb24iLCJRQm91bmNlVHlwZSIsIm5lZ0Z1bmRzIiwibm9GdW5kcyIsIm9rIiwicmVtb3ZlVHlwZU5hbWUiLCJvYmoiLCJfX3R5cGVuYW1lIiwiT2JqZWN0IiwidmFsdWVzIiwiZm9yRWFjaCIsInZhbHVlIiwicmVtb3ZlUHJvcHMiLCJwYXRocyIsInJlc3VsdCIsInBhdGgiLCJkb3RQb3MiLCJpbmRleE9mIiwibmFtZSIsInN1YnN0ciIsImNoaWxkIiwicmVkdWNlZENoaWxkIiwiVE9OQ29udHJhY3RzTW9kdWxlIiwiY29uZmlnIiwiY29udGV4dCIsImdldE1vZHVsZSIsIlRPTkNvbmZpZ01vZHVsZSIsInF1ZXJpZXMiLCJUT05RdWVyaWVzTW9kdWxlIiwicGFyYW1zIiwicGFyZW50U3BhbiIsImFjY291bnRzIiwicXVlcnkiLCJpZCIsImVxIiwiYWRkcmVzcyIsInVuZGVmaW5lZCIsImxlbmd0aCIsImJhbGFuY2VHcmFtcyIsImJhbGFuY2UiLCJ0cmFjZSIsInNwYW4iLCJzZXRUYWciLCJpbnRlcm5hbERlcGxveUpzIiwiaW50ZXJuYWxSdW5KcyIsImludGVybmFsUnVuTG9jYWxKcyIsImludGVybmFsUnVuTWVzc2FnZUxvY2FsSnMiLCJjb3JlUGFyYW1zIiwiY29kZUJhc2U2NCIsImRhdGFCYXNlNjQiLCJUT05DbGllbnRFcnJvciIsImFkZHJlc3NSZXF1aXJlZEZvclJ1bkxvY2FsIiwiZ2V0QWNjb3VudCIsImFjY291bnQiLCJjb2RlIiwiYWNjb3VudENvZGVNaXNzaW5nIiwiZGF0YSIsInJlcXVlc3RDb3JlIiwiY29ucyIsIml0ZW0iLCJpbnZhbGlkQ29ucyIsInB1c2giLCJyZXRyeUluZGV4IiwibG9nIiwiY29uc3RydWN0b3JIZWFkZXIiLCJtYWtlRXhwaXJlSGVhZGVyIiwiYWJpIiwiY29uc3RydWN0b3JQYXJhbXMiLCJpbml0UGFyYW1zIiwiaW1hZ2VCYXNlNjQiLCJrZXlQYWlyIiwid29ya2NoYWluSWQiLCJtZXNzYWdlIiwibWVzc2FnZUlkIiwibWVzc2FnZUJvZHlCYXNlNjQiLCJleHBpcmUiLCJjcmVhdGlvblRpbWUiLCJEYXRlIiwibm93IiwiaGVhZGVyIiwiZnVuY3Rpb25OYW1lIiwiaW5wdXQiLCJwdWJsaWNLZXlIZXgiLCJhZGRyZXNzSGV4Iiwic2lnblBhcmFtcyIsImVuY29kZWQiLCJjcmVhdGVTaWduZWRNZXNzYWdlIiwidW5zaWduZWRNZXNzYWdlIiwidW5zaWduZWRCeXRlc0Jhc2U2NCIsInNpZ25CeXRlc0Jhc2U2NCIsImdldEJvY0hhc2giLCJib2NCYXNlNjQiLCJoYXNoIiwic2VuZE5vZGVSZXF1ZXN0RmFpbGVkIiwiTWF0aCIsInNlcnZlclRpbWVEZWx0YSIsImFicyIsIm91dE9mU3luY1RocmVzaG9sZCIsImRyb3BTZXJ2ZXJUaW1lRGVsdGEiLCJjbG9ja091dE9mU3luYyIsImdldE1lc3NhZ2VJZCIsImlkQmFzZTY0IiwiQnVmZmVyIiwiZnJvbSIsInRvU3RyaW5nIiwicG9zdFJlcXVlc3RzIiwiYm9keSIsInJlc3VsdEZpZWxkcyIsIm1lc3NhZ2VDcmVhdGlvblRpbWUiLCJzZW5kTWVzc2FnZSIsIndhaXRGb3JUcmFuc2FjdGlvbiIsInByb2Nlc3NpbmdUaW1lb3V0IiwibWVzc2FnZVByb2Nlc3NpbmdUaW1lb3V0IiwicHJvbWlzZXMiLCJnZXRTZXJ2ZXJJbmZvIiwic2VydmVySW5mbyIsIm9wZXJhdGlvbklkIiwic3VwcG9ydHNPcGVyYXRpb25JZCIsImdlbmVyYXRlT3BlcmF0aW9uSWQiLCJ0cmFuc2FjdGlvbiIsIndhaXRFeHBpcmVkIiwiYmxvY2tzIiwid2FpdEZvciIsImZpbHRlciIsIm1hc3RlciIsIm1pbl9zaGFyZF9nZW5fdXRpbWUiLCJnZSIsInRpbWVvdXQiLCJibG9jayIsInRyYW5zYWN0aW9uX2lkIiwiaW5fbXNnX2Rlc2NyIiwiZmluZCIsIm1zZyIsImludGVybmFsRXJyb3IiLCJ0cmFuc2FjdGlvbnMiLCJQcm9taXNlIiwicmVzb2x2ZSIsInJlamVjdCIsImluX21zZyIsInN0YXR1cyIsInJhY2UiLCJmaW5pc2hPcGVyYXRpb25zIiwibWVzc2FnZUV4cGlyZWQiLCJ0cmFuc2FjdGlvbk5vdyIsImJsb2NrX2lkIiwidG9JU09TdHJpbmciLCJyZXNvbHZlRGV0YWlsZWRFcnJvciIsImNoZWNrVHJhbnNhY3Rpb24iLCJhY2NvdW50TWlzc2luZyIsImlzQ29udHJhY3RFcnJvciIsIlRPTkNvbnRyYWN0RXhpdENvZGUiLCJOT19HQVMiLCJhY2NvdW50QmFsYW5jZVRvb0xvdyIsImVycm9yIiwibWVzc2FnZUJhc2U2NCIsInRpbWUiLCJyb3VuZCIsIm1haW5FcnJvciIsImFjY190eXBlIiwiaXNEZXBsb3llZCIsImFscmVhZHlEZXBsb3llZCIsIndhaXRGb3JEZXBsb3lUcmFuc2FjdGlvbiIsImRlcGxveU1lc3NhZ2UiLCJ0cmFuc2FjdGlvbkRldGFpbHMiLCJydW5NZXNzYWdlIiwid2FpdEZvclJ1blRyYW5zYWN0aW9uIiwib3V0cHV0TWVzc2FnZXMiLCJvdXRfbWVzc2FnZXMiLCJvdXRwdXQiLCJleHRlcm5hbE1lc3NhZ2VzIiwieCIsIm1zZ190eXBlIiwiYWxsIiwibWFwIiwiZGVjb2RlT3V0cHV0TWVzc2FnZUJvZHkiLCJib2R5QmFzZTY0Iiwib3V0cHV0cyIsInJlc3VsdE91dHB1dCIsInRvTG93ZXJDYXNlIiwid2FpdFBhcmFtcyIsImVtdWxhdGVCYWxhbmNlIiwiYmlnQmFsYW5jZSIsImNyZWF0ZURlcGxveU1lc3NhZ2UiLCJjYWxjTXNnUHJvY2Vzc0ZlZXMiLCJuZXdBY2NvdW50IiwibGFzdF9wYWlkIiwiZmxvb3IiLCJ1c2VySGVhZGVyIiwibWVzc2FnZUV4cGlyYXRpb25UaW1lb3V0IiwiaW5jbHVkZXMiLCJjYWxsIiwicmV0cmllc0NvdW50IiwibWVzc2FnZVJldHJpZXNDb3VudCIsImkiLCJ1c2VSZXRyeSIsIlRPTkVycm9yQ29kZSIsIk1FU1NBR0VfRVhQSVJFRCIsIlJFUExBWV9QUk9URUNUSU9OIiwicmV0cnlDYWxsIiwiY3JlYXRlUnVuTWVzc2FnZSIsInRyYW5zYWN0aW9uTHQiLCJsYXN0X3RyYW5zX2x0IiwiZnVsbFJ1biIsIlRPTk1vZHVsZSIsIm1vZHVsZU5hbWUiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7QUFLQTs7QUFrREE7O0FBQ0E7O0FBQ0E7O0FBQ0E7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUVPLElBQU1BLHVCQUF1QixHQUFHO0FBQ25DQyxFQUFBQSxTQUFTLEVBQUUsV0FEd0I7QUFFbkNDLEVBQUFBLEdBQUcsRUFBRSxLQUY4QjtBQUduQ0MsRUFBQUEsTUFBTSxFQUFFO0FBSDJCLENBQWhDOztBQU1BLElBQU1DLHlCQUF5QixHQUFHO0FBQ3JDQyxFQUFBQSxPQUFPLEVBQUUsU0FENEI7QUFFckNDLEVBQUFBLGNBQWMsRUFBRSxnQkFGcUI7QUFHckNDLEVBQUFBLFNBQVMsRUFBRSxXQUgwQjtBQUlyQ0MsRUFBQUEsTUFBTSxFQUFFLFFBSjZCO0FBS3JDQyxFQUFBQSxPQUFPLEVBQUU7QUFMNEIsQ0FBbEM7O0FBUUEsSUFBTUMsNkJBQTZCLEdBQUc7QUFDekNDLEVBQUFBLE9BQU8sRUFBRSxDQURnQztBQUV6Q0MsRUFBQUEsUUFBUSxFQUFFLENBRitCO0FBR3pDQyxFQUFBQSxLQUFLLEVBQUU7QUFIa0MsQ0FBdEM7O0FBTUEsSUFBTUMsc0JBQXNCLEdBQUc7QUFDbENDLEVBQUFBLFNBQVMsRUFBRSxDQUR1QjtBQUVsQ0MsRUFBQUEsTUFBTSxFQUFFLENBRjBCO0FBR2xDQyxFQUFBQSxPQUFPLEVBQUU7QUFIeUIsQ0FBL0I7O0FBTUEsSUFBTUMsVUFBVSxHQUFHO0FBQ3RCQyxFQUFBQSxRQUFRLEVBQUUsQ0FEWTtBQUV0QkMsRUFBQUEsR0FBRyxFQUFFLENBRmlCO0FBR3RCQyxFQUFBQSxXQUFXLEVBQUUsQ0FIUztBQUl0QixXQUFPLENBSmU7QUFLdEJDLEVBQUFBLE9BQU8sRUFBRSxDQUxhO0FBTXRCQyxFQUFBQSxjQUFjLEVBQUUsQ0FOTTtBQU90QkMsRUFBQUEsZ0JB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LEtBQUtrQixXQUFMLENBQWlCLHlCQUFqQixFQUE0QztBQUMvQ3RCLGtCQUFBQSxPQUFPLEVBQVBBLE9BRCtDO0FBRS9Da0Isa0JBQUFBLE9BQU8sRUFBUEEsT0FGK0M7QUFHL0NhLGtCQUFBQSxHQUFHLEVBQUVyQyxNQUFNLENBQUNxQyxHQUhtQztBQUkvQ2Msa0JBQUFBLFlBQVksRUFBRW5ELE1BQU0sQ0FBQ21ELFlBSjBCO0FBSy9DMEUsa0JBQUFBLGFBQWEsRUFBRTdILE1BQU0sQ0FBQzZDLGlCQUx5QjtBQU0vQ2dJLGtCQUFBQSxPQUFPLEVBQUU3SyxNQUFNLENBQUM2SztBQU4rQixpQkFBNUMsQzs7Ozs7Ozs7Ozs7Ozs7Ozs7OztFQXA3QmlDQyxxQjs7O0FBKzdCaERyTCxrQkFBa0IsQ0FBQ3NMLFVBQW5CLEdBQWdDLG9CQUFoQztBQUVBLElBQU16QyxrQkFBa0IsMmtCQUF4QiIsInNvdXJjZXNDb250ZW50IjpbIi8qXG4gKiBDb3B5cmlnaHQgMjAxOC0yMDIwIFRPTiBERVYgU09MVVRJT05TIExURC5cbiAqL1xuLy8gQGZsb3dcblxuaW1wb3J0IHsgU3BhbiwgU3BhbkNvbnRleHQgfSBmcm9tICdvcGVudHJhY2luZyc7XG5pbXBvcnQgdHlwZSB7XG4gICAgUUFjY291bnQsXG4gICAgUUJsb2NrLFxuICAgIFFNZXNzYWdlLFxuICAgIFFUcmFuc2FjdGlvbixcbiAgICBUT05Db250cmFjdEFCSSxcbiAgICBUT05Db250cmFjdEFjY291bnRXYWl0UGFyYW1zLFxuICAgIFRPTkNvbnRyYWN0Q29udmVydEFkZHJlc3NQYXJhbXMsXG4gICAgVE9OQ29udHJhY3RDb252ZXJ0QWRkcmVzc1Jlc3VsdCxcbiAgICBUT05Db250cmFjdENyZWF0ZVJ1bkJvZHlQYXJhbXMsXG4gICAgVE9OQ29udHJhY3RDcmVhdGVSdW5Cb2R5UmVzdWx0LFxuICAgIFRPTkNvbnRyYWN0Q3JlYXRlU2lnbmVkRGVwbG95TWVzc2FnZVBhcmFtcyxcbiAgICBUT05Db250cmFjdENyZWF0ZVNpZ25lZE1lc3NhZ2VQYXJhbXMsXG4gICAgVE9OQ29udHJhY3RDcmVhdGVTaWduZWRSdW5NZXNzYWdlUGFyYW1zLFxuICAgIFRPTkNvbnRyYWN0RGVjb2RlTWVzc2FnZUJvZHlQYXJhbXMsXG4gICAgVE9OQ29udHJhY3REZWNvZGVNZXNzYWdlQm9keVJlc3VsdCxcbiAgICBUT05Db250cmFjdERlY29kZVJ1bk91dHB1dFBhcmFtcyxcbiAgICBUT05Db250cmFjdERlcGxveU1lc3NhZ2UsXG4gICAgVE9OQ29udHJhY3REZXBsb3lQYXJhbXMsXG4gICAgVE9OQ29udHJhY3REZXBsb3lSZXN1bHQsXG4gICAgVE9OQ29udHJhY3RDYWxjRGVwbG95RmVlUGFyYW1zLFxuICAgIFRPTkNvbnRyYWN0Qm9jLFxuICAgIFRPTkNvbnRyYWN0R2V0Qm9jSGFzaFJlc3VsdCxcbiAgICBUT05Db250cmFjdEdldENvZGVGcm9tSW1hZ2VQYXJhbXMsXG4gICAgVE9OQ29udHJhY3RHZXRDb2RlRnJvbUltYWdlUmVzdWx0LFxuICAgIFRPTkNvbnRyYWN0R2V0RGVwbG95RGF0YVBhcmFtcyxcbiAgICBUT05Db250cmFjdEdldERlcGxveURhdGFSZXN1bHQsXG4gICAgVE9OQ29udHJhY3RHZXRGdW5jdGlvbklkUGFyYW1zLFxuICAgIFRPTkNvbnRyYWN0R2V0RnVuY3Rpb25JZFJlc3VsdCxcbiAgICBUT05Db250cmFjdExvYWRQYXJhbXMsXG4gICAgVE9OQ29udHJhY3RMb2FkUmVzdWx0LFxuICAgIFRPTkNvbnRyYWN0Q2FsY1J1bkZlZVBhcmFtcyxcbiAgICBUT05Db250cmFjdENhbGNGZWVSZXN1bHQsXG4gICAgVE9OQ29udHJhY3RDYWxjTXNnUHJvY2Vzc2luZ0ZlZXNQYXJhbXMsXG4gICAgVE9OQ29udHJhY3RNZXNzYWdlLFxuICAgIFRPTkNvbnRyYWN0UnVuTG9jYWxQYXJhbXMsXG4gICAgVE9OQ29udHJhY3RSdW5NZXNzYWdlLFxuICAgIFRPTkNvbnRyYWN0UnVuUGFyYW1zLFxuICAgIFRPTkNvbnRyYWN0UnVuUmVzdWx0LFxuICAgIFRPTkNvbnRyYWN0cyxcbiAgICBUT05Db250cmFjdFVuc2lnbmVkRGVwbG95TWVzc2FnZSxcbiAgICBUT05Db250cmFjdFVuc2lnbmVkTWVzc2FnZSxcbiAgICBUT05Db250cmFjdFVuc2lnbmVkUnVuTWVzc2FnZSxcbiAgICBUT05Db250cmFjdFJ1bkdldFBhcmFtcyxcbiAgICBUT05Db250cmFjdFJ1bkdldFJlc3VsdCxcbiAgICBUT05Db250cmFjdFJ1bk1lc3NhZ2VMb2NhbFBhcmFtcyxcbiAgICBUT05Db250cmFjdFJ1bkxvY2FsUmVzdWx0LFxufSBmcm9tICcuLi8uLi90eXBlcyc7XG5cbmltcG9ydCB7IFRPTkNsaWVudEVycm9yLCBUT05Db250cmFjdEV4aXRDb2RlLCBUT05FcnJvckNvZGUgfSBmcm9tICcuLi9UT05DbGllbnQnO1xuaW1wb3J0IHsgVE9OTW9kdWxlIH0gZnJvbSAnLi4vVE9OTW9kdWxlJztcbmltcG9ydCBUT05Db25maWdNb2R1bGUgZnJvbSAnLi9UT05Db25maWdNb2R1bGUnO1xuaW1wb3J0IFRPTlF1ZXJpZXNNb2R1bGUgZnJvbSAnLi9UT05RdWVyaWVzTW9kdWxlJztcblxuZXhwb3J0IGNvbnN0IFRPTkFkZHJlc3NTdHJpbmdWYXJpYW50ID0ge1xuICAgIEFjY291bnRJZDogJ0FjY291bnRJZCcsXG4gICAgSGV4OiAnSGV4JyxcbiAgICBCYXNlNjQ6ICdCYXNlNjQnLFxufTtcblxuZXhwb3J0IGNvbnN0IFRPTkNsaWVudFRyYW5zYWN0aW9uUGhhc2UgPSB7XG4gICAgc3RvcmFnZTogJ3N0b3JhZ2UnLFxuICAgIGNvbXB1dGVTa2lwcGVkOiAnY29tcHV0ZVNraXBwZWQnLFxuICAgIGNvbXB1dGVWbTogJ2NvbXB1dGVWbScsXG4gICAgYWN0aW9uOiAnYWN0aW9uJyxcbiAgICB1bmtub3duOiAndW5rbm93bicsXG59O1xuXG5leHBvcnQgY29uc3QgVE9OQ2xpZW50Q29tcHV0ZVNraXBwZWRTdGF0dXMgPSB7XG4gICAgbm9TdGF0ZTogMCxcbiAgICBiYWRTdGF0ZTogMSxcbiAgICBub0dhczogMixcbn07XG5cbmV4cG9ydCBjb25zdCBUT05DbGllbnRTdG9yYWdlU3RhdHVzID0ge1xuICAgIHVuY2hhbmdlZDogMCxcbiAgICBmcm96ZW46IDEsXG4gICAgZGVsZXRlZDogMixcbn07XG5cbmV4cG9ydCBjb25zdCBRSW5Nc2dUeXBlID0ge1xuICAgIGV4dGVybmFsOiAwLFxuICAgIGlocjogMSxcbiAgICBpbW1lZGlhdGVseTogMixcbiAgICBmaW5hbDogMyxcbiAgICB0cmFuc2l0OiA0LFxuICAgIGRpc2NhcmRlZEZpbmFsOiA1LFxuICAgIGRpc2NhcmRlZFRyYW5zaXQ6IDYsXG59O1xuXG5leHBvcnQgY29uc3QgUU91dE1zZ1R5cGUgPSB7XG4gICAgZXh0ZXJuYWw6IDAsXG4gICAgaW1tZWRpYXRlbHk6IDEsXG4gICAgb3V0TXNnTmV3OiAyLFxuICAgIHRyYW5zaXQ6IDMsXG4gICAgZGVxdWV1ZUltbWVkaWF0ZWx5OiA0LFxuICAgIGRlcXVldWU6IDUsXG4gICAgdHJhbnNpdFJlcXVpcmVkOiA2LFxuICAgIG5vbmU6IC0xLFxufTtcblxuZXhwb3J0IGNvbnN0IFFNZXNzYWdlVHlwZSA9IHtcbiAgICBpbnRlcm5hbDogMCxcbiAgICBleHRJbjogMSxcbiAgICBleHRPdXQ6IDIsXG59O1xuXG5leHBvcnQgY29uc3QgUU1lc3NhZ2VQcm9jZXNzaW5nU3RhdHVzID0ge1xuICAgIHVua25vd246IDAsXG4gICAgcXVldWVkOiAxLFxuICAgIHByb2Nlc3Npbmc6IDIsXG4gICAgcHJlbGltaW5hcnk6IDMsXG4gICAgcHJvcG9zZWQ6IDQsXG4gICAgZmluYWxpemVkOiA1LFxuICAgIHJlZnVzZWQ6IDYsXG4gICAgdHJhbnNpdGluZzogNyxcbn07XG5cbmV4cG9ydCBjb25zdCBRQmxvY2tQcm9jZXNzaW5nU3RhdHVzID0ge1xuICAgIHVua25vd246IDAsXG4gICAgcHJvcG9zZWQ6IDEsXG4gICAgZmluYWxpemVkOiAyLFxuICAgIHJlZnVzZWQ6IDMsXG59O1xuXG5leHBvcnQgY29uc3QgUVNwbGl0VHlwZSA9IHtcbiAgICBub25lOiAwLFxuICAgIHNwbGl0OiAyLFxuICAgIG1lcmdlOiAzLFxufTtcblxuZXhwb3J0IGNvbnN0IFFBY2NvdW50VHlwZSA9IHtcbiAgICB1bmluaXQ6IDAsXG4gICAgYWN0aXZlOiAxLFxuICAgIGZyb3plbjogMixcbn07XG5cbmV4cG9ydCBjb25zdCBRVHJhbnNhY3Rpb25UeXBlID0ge1xuICAgIG9yZGluYXJ5OiAwLFxuICAgIHN0b3JhZ2U6IDEsXG4gICAgdGljazogMixcbiAgICB0b2NrOiAzLFxuICAgIHNwbGl0UHJlcGFyZTogNCxcbiAgICBzcGxpdEluc3RhbGw6IDUsXG4gICAgbWVyZ2VQcmVwYXJlOiA2LFxuICAgIG1lcmdlSW5zdGFsbDogNyxcbn07XG5cbmV4cG9ydCBjb25zdCBRVHJhbnNhY3Rpb25Qcm9jZXNzaW5nU3RhdHVzID0ge1xuICAgIHVua25vd246IDAsXG4gICAgcHJlbGltaW5hcnk6IDEsXG4gICAgcHJvcG9zZWQ6IDIsXG4gICAgZmluYWxpemVkOiAzLFxuICAgIHJlZnVzZWQ6IDQsXG59O1xuXG5leHBvcnQgY29uc3QgUUFjY291bnRTdGF0dXMgPSB7XG4gICAgdW5pbml0OiAwLFxuICAgIGFjdGl2ZTogMSxcbiAgICBmcm96ZW46IDIsXG4gICAgbm9uRXhpc3Q6IDMsXG59O1xuXG5leHBvcnQgY29uc3QgUUFjY291bnRTdGF0dXNDaGFuZ2UgPSB7XG4gICAgdW5jaGFuZ2VkOiAwLFxuICAgIGZyb3plbjogMSxcbiAgICBkZWxldGVkOiAyLFxufTtcblxuZXhwb3J0IGNvbnN0IFFDb21wdXRlVHlwZSA9IHtcbiAgICBza2lwcGVkOiAwLFxuICAgIHZtOiAxLFxufTtcblxuZXhwb3J0IGNvbnN0IFFTa2lwUmVhc29uID0ge1xuICAgIG5vU3RhdGU6IDAsXG4gICAgYmFkU3RhdGU6IDEsXG4gICAgbm9HYXM6IDIsXG59O1xuXG5leHBvcnQgY29uc3QgUUJvdW5jZVR5cGUgPSB7XG4gICAgbmVnRnVuZHM6IDAsXG4gICAgbm9GdW5kczogMSxcbiAgICBvazogMixcbn07XG5cbmZ1bmN0aW9uIHJlbW92ZVR5cGVOYW1lKG9iajogYW55KSB7XG4gICAgaWYgKG9iai5fX3R5cGVuYW1lKSB7XG4gICAgICAgIGRlbGV0ZSBvYmouX190eXBlbmFtZTtcbiAgICB9XG4gICAgT2JqZWN0LnZhbHVlcyhvYmopXG4gICAgICAgIC5mb3JFYWNoKCh2YWx1ZSkgPT4ge1xuICAgICAgICAgICAgaWYgKCEhdmFsdWUgJiYgdHlwZW9mIHZhbHVlID09PSAnb2JqZWN0Jykge1xuICAgICAgICAgICAgICAgIHJlbW92ZVR5cGVOYW1lKHZhbHVlKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfSk7XG59XG5cbmV4cG9ydCBmdW5jdGlvbiByZW1vdmVQcm9wcyhvYmo6IHt9LCBwYXRoczogc3RyaW5nW10pOiB7fSB7XG4gICAgbGV0IHJlc3VsdCA9IG9iajtcbiAgICBwYXRocy5mb3JFYWNoKChwYXRoKSA9PiB7XG4gICAgICAgIGNvbnN0IGRvdFBvcyA9IHBhdGguaW5kZXhPZignLicpO1xuICAgICAgICBpZiAoZG90UG9zIDwgMCkge1xuICAgICAgICAgICAgaWYgKHBhdGggaW4gcmVzdWx0KSB7XG4gICAgICAgICAgICAgICAgcmVzdWx0ID0geyAuLi5yZXN1bHQgfTtcbiAgICAgICAgICAgICAgICBkZWxldGUgcmVzdWx0W3BhdGhdO1xuICAgICAgICAgICAgfVxuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgY29uc3QgbmFtZSA9IHBhdGguc3Vic3RyKDAsIGRvdFBvcyk7XG4gICAgICAgICAgICBjb25zdCBjaGlsZCA9IHJlc3VsdFtuYW1lXTtcbiAgICAgICAgICAgIGlmIChjaGlsZCkge1xuICAgICAgICAgICAgICAgIGNvbnN0IHJlZHVjZWRDaGlsZCA9IHJlbW92ZVByb3BzKGNoaWxkLCBbcGF0aC5zdWJzdHIoZG90UG9zICsgMSldKTtcbiAgICAgICAgICAgICAgICBpZiAocmVkdWNlZENoaWxkICE9PSBjaGlsZCkge1xuICAgICAgICAgICAgICAgICAgICByZXN1bHQgPSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAuLi5yZXN1bHQsXG4gICAgICAgICAgICAgICAgICAgICAgICBbbmFtZV06IHJlZHVjZWRDaGlsZCxcbiAgICAgICAgICAgICAgICAgICAgfTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICB9KTtcbiAgICByZXR1cm4gcmVzdWx0O1xufVxuXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBUT05Db250cmFjdHNNb2R1bGUgZXh0ZW5kcyBUT05Nb2R1bGUgaW1wbGVtZW50cyBUT05Db250cmFjdHMge1xuICAgIGNvbmZpZzogVE9OQ29uZmlnTW9kdWxlO1xuXG4gICAgcXVlcmllczogVE9OUXVlcmllc01vZHVsZTtcblxuICAgIGFzeW5jIHNldHVwKCk6IFByb21pc2U8Kj4ge1xuICAgICAgICB0aGlzLmNvbmZpZyA9IHRoaXMuY29udGV4dC5nZXRNb2R1bGUoVE9OQ29uZmlnTW9kdWxlKTtcbiAgICAgICAgdGhpcy5xdWVyaWVzID0gdGhpcy5jb250ZXh0LmdldE1vZHVsZShUT05RdWVyaWVzTW9kdWxlKTtcbiAgICB9XG5cbiAgICBhc3luYyBsb2FkKFxuICAgICAgICBwYXJhbXM6IFRPTkNvbnRyYWN0TG9hZFBhcmFtcyxcbiAgICAgICAgcGFyZW50U3Bhbj86IChTcGFuIHwgU3BhbkNvbnRleHQpLFxuICAgICk6IFByb21pc2U8VE9OQ29udHJhY3RMb2FkUmVzdWx0PiB7XG4gICAgICAgIGNvbnN0IGFjY291bnRzOiBRQWNjb3VudFtdID0gYXdhaXQgdGhpcy5xdWVyaWVzLmFjY291bnRzLnF1ZXJ5KHtcbiAgICAgICAgICAgIGlkOiB7IGVxOiBwYXJhbXMuYWRkcmVzcyB9LFxuICAgICAgICB9LCAnYmFsYW5jZScsIHVuZGVmaW5lZCwgdW5kZWZpbmVkLCB1bmRlZmluZWQsIHBhcmVudFNwYW4pO1xuICAgICAgICBpZiAoYWNjb3VudHMgJiYgYWNjb3VudHMubGVuZ3RoID4gMCkge1xuICAgICAgICAgICAgcmV0dXJuIHtcbiAgICAgICAgICAgICAgICBpZDogcGFyYW1zLmFkZHJlc3MsXG4gICAgICAgICAgICAgICAgYmFsYW5jZUdyYW1zOiBhY2NvdW50c1swXS5iYWxhbmNlLFxuICAgICAgICAgICAgfTtcbiAgICAgICAgfVxuICAgICAgICByZXR1cm4ge1xuICAgICAgICAgICAgaWQ6IG51bGwsXG4gICAgICAgICAgICBiYWxhbmNlR3JhbXM6IG51bGwsXG4gICAgICAgIH07XG4gICAgfVxuXG5cbiAgICAvLyBGYWNhZGUgZnVuY3Rpb25zXG5cbiAgICBhc3luYyBkZXBsb3koXG4gICAgICAgIHBhcmFtczogVE9OQ29udHJhY3REZXBsb3lQYXJhbXMsXG4gICAgICAgIHBhcmVudFNwYW4/OiAoU3BhbiB8IFNwYW5Db250ZXh0KSxcbiAgICApOiBQcm9taXNlPFRPTkNvbnRyYWN0RGVwbG95UmVzdWx0PiB7XG4gICAgICAgIHJldHVybiB0aGlzLmNvbnRleHQudHJhY2UoJ2NvbnRyYWN0cy5kZXBsb3knLCBhc3luYyAoc3BhbjogU3BhbikgPT4ge1xuICAgICAgICAgICAgc3Bhbi5zZXRUYWcoJ3BhcmFtcycsIHJlbW92ZVByb3BzKHBhcmFtcywgWydrZXlQYWlyLnNlY3JldCddKSk7XG4gICAgICAgICAgICByZXR1cm4gdGhpcy5pbnRlcm5hbERlcGxveUpzKHBhcmFtcywgc3Bhbik7XG4gICAgICAgIH0sIHBhcmVudFNwYW4pO1xuICAgIH1cblxuXG4gICAgYXN5bmMgcnVuKFxuICAgICAgICBwYXJhbXM6IFRPTkNvbnRyYWN0UnVuUGFyYW1zLFxuICAgICAgICBwYXJlbnRTcGFuPzogKFNwYW4gfCBTcGFuQ29udGV4dCksXG4gICAgKTogUHJvbWlzZTxUT05Db250cmFjdFJ1blJlc3VsdD4ge1xuICAgICAgICByZXR1cm4gdGhpcy5jb250ZXh0LnRyYWNlKCdjb250cmFjdHMucnVuJywgYXN5bmMgKHNwYW46IFNwYW4pID0+IHtcbiAgICAgICAgICAgIHNwYW4uc2V0VGFnKCdwYXJhbXMnLCByZW1vdmVQcm9wcyhwYXJhbXMsIFsna2V5UGFpci5zZWNyZXQnXSkpO1xuICAgICAgICAgICAgcmV0dXJuIHRoaXMuaW50ZXJuYWxSdW5KcyhwYXJhbXMsIHNwYW4pO1xuICAgICAgICB9LCBwYXJlbnRTcGFuKTtcbiAgICB9XG5cbiAgICBhc3luYyBydW5Mb2NhbChcbiAgICAgICAgcGFyYW1zOiBUT05Db250cmFjdFJ1bkxvY2FsUGFyYW1zLFxuICAgICAgICBwYXJlbnRTcGFuPzogKFNwYW4gfCBTcGFuQ29udGV4dCksXG4gICAgKTogUHJvbWlzZTxUT05Db250cmFjdFJ1bkxvY2FsUmVzdWx0PiB7XG4gICAgICAgIHJldHVybiB0aGlzLmNvbnRleHQudHJhY2UoJ2NvbnRyYWN0cy5ydW5Mb2NhbCcsIGFzeW5jIChzcGFuOiBTcGFuKSA9PiB7XG4gICAgICAgICAgICBzcGFuLnNldFRhZygncGFyYW1zJywgcmVtb3ZlUHJvcHMocGFyYW1zLCBbJ2tleVBhaXIuc2VjcmV0J10pKTtcbiAgICAgICAgICAgIHJldHVybiB0aGlzLmludGVybmFsUnVuTG9jYWxKcyhwYXJhbXMsIHNwYW4pO1xuICAgICAgICB9LCBwYXJlbnRTcGFuKTtcbiAgICB9XG5cbiAgICBhc3luYyBydW5NZXNzYWdlTG9jYWwoXG4gICAgICAgIHBhcmFtczogVE9OQ29udHJhY3RSdW5NZXNzYWdlTG9jYWxQYXJhbXMsXG4gICAgICAgIHBhcmVudFNwYW4/OiAoU3BhbiB8IFNwYW5Db250ZXh0KSxcbiAgICApOiBQcm9taXNlPFRPTkNvbnRyYWN0UnVuTG9jYWxSZXN1bHQ+IHtcbiAgICAgICAgcmV0dXJuIHRoaXMuY29udGV4dC50cmFjZSgncnVuTWVzc2FnZUxvY2FsJywgYXN5bmMgKHNwYW46IFNwYW4pID0+IHtcbiAgICAgICAgICAgIHNwYW4uc2V0VGFnKCdwYXJhbXMnLCByZW1vdmVQcm9wcyhwYXJhbXMsIFsna2V5UGFpci5zZWNyZXQnXSkpO1xuICAgICAgICAgICAgcmV0dXJuIHRoaXMuaW50ZXJuYWxSdW5NZXNzYWdlTG9jYWxKcyhwYXJhbXMsIHNwYW4pO1xuICAgICAgICB9LCBwYXJlbnRTcGFuKTtcbiAgICB9XG5cbiAgICBhc3luYyBydW5HZXQoXG4gICAgICAgIHBhcmFtczogVE9OQ29udHJhY3RSdW5HZXRQYXJhbXMsXG4gICAgKTogUHJvbWlzZTxUT05Db250cmFjdFJ1bkdldFJlc3VsdD4ge1xuICAgICAgICBsZXQgY29yZVBhcmFtczogVE9OQ29udHJhY3RSdW5HZXRQYXJhbXMgPSBwYXJhbXM7XG4gICAgICAgIGlmICghcGFyYW1zLmNvZGVCYXNlNjQgfHwgIXBhcmFtcy5kYXRhQmFzZTY0KSB7XG4gICAgICAgICAgICBjb25zdCBhZGRyZXNzID0gcGFyYW1zLmFkZHJlc3M7XG4gICAgICAgICAgICBpZiAoIWFkZHJlc3MpIHtcbiAgICAgICAgICAgICAgICB0aHJvdyBUT05DbGllbnRFcnJvci5hZGRyZXNzUmVxdWlyZWRGb3JSdW5Mb2NhbCgpO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgY29uc3QgYWNjb3VudDogYW55ID0gYXdhaXQgdGhpcy5nZXRBY2NvdW50KGFkZHJlc3MsIGZhbHNlKTtcbiAgICAgICAgICAgIGlmICghYWNjb3VudC5jb2RlKSB7XG4gICAgICAgICAgICAgICAgdGhyb3cgVE9OQ2xpZW50RXJyb3IuYWNjb3VudENvZGVNaXNzaW5nKGFkZHJlc3MsIGFjY291bnQuYmFsYW5jZSk7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBhY2NvdW50LmNvZGVCYXNlNjQgPSBhY2NvdW50LmNvZGU7XG4gICAgICAgICAgICBhY2NvdW50LmRhdGFCYXNlNjQgPSBhY2NvdW50LmRhdGE7XG4gICAgICAgICAgICBkZWxldGUgYWNjb3VudC5jb2RlO1xuICAgICAgICAgICAgZGVsZXRlIGFjY291bnQuZGF0YTtcbiAgICAgICAgICAgIGNvcmVQYXJhbXMgPSB7XG4gICAgICAgICAgICAgICAgLi4uYWNjb3VudCxcbiAgICAgICAgICAgICAgICAuLi5wYXJhbXMsXG4gICAgICAgICAgICB9O1xuICAgICAgICB9XG4gICAgICAgIHJldHVybiB0aGlzLnJlcXVlc3RDb3JlKCd0dm0uZ2V0JywgY29yZVBhcmFtcyk7XG4gICAgfVxuXG4gICAgYXJyYXlGcm9tQ09OUyhjb25zOiBhbnlbXSk6IGFueVtdIHtcbiAgICAgICAgY29uc3QgcmVzdWx0ID0gW107XG4gICAgICAgIGxldCBpdGVtID0gY29ucztcbiAgICAgICAgd2hpbGUgKGl0ZW0pIHtcbiAgICAgICAgICAgIGlmICghaXRlbS5sZW5ndGggPT09IDIpIHtcbiAgICAgICAgICAgICAgICB0aHJvdyBUT05DbGllbnRFcnJvci5pbnZhbGlkQ29ucygpO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgcmVzdWx0LnB1c2goaXRlbVswXSk7XG4gICAgICAgICAgICBpdGVtID0gaXRlbVsxXTtcbiAgICAgICAgfVxuICAgICAgICByZXR1cm4gcmVzdWx0O1xuICAgIH1cblxuXG4gICAgLy8gTWVzc2FnZSBjcmVhdGlvblxuXG4gICAgYXN5bmMgY3JlYXRlRGVwbG95TWVzc2FnZShcbiAgICAgICAgcGFyYW1zOiBUT05Db250cmFjdERlcGxveVBhcmFtcyxcbiAgICAgICAgcmV0cnlJbmRleD86IG51bWJlcixcbiAgICApOiBQcm9taXNlPFRPTkNvbnRyYWN0RGVwbG95TWVzc2FnZT4ge1xuICAgICAgICB0aGlzLmNvbmZpZy5sb2coJ2NyZWF0ZURlcGxveU1lc3NhZ2UnLCBwYXJhbXMpO1xuICAgICAgICBjb25zdCBjb25zdHJ1Y3RvckhlYWRlciA9IHRoaXMubWFrZUV4cGlyZUhlYWRlcihcbiAgICAgICAgICAgIHBhcmFtcy5wYWNrYWdlLmFiaSxcbiAgICAgICAgICAgIHBhcmFtcy5jb25zdHJ1Y3RvckhlYWRlcixcbiAgICAgICAgICAgIHJldHJ5SW5kZXgsXG4gICAgICAgICk7XG4gICAgICAgIGNvbnN0IG1lc3NhZ2U6IHtcbiAgICAgICAgICAgIGFkZHJlc3M6IHN0cmluZyxcbiAgICAgICAgICAgIG1lc3NhZ2VJZDogc3RyaW5nLFxuICAgICAgICAgICAgbWVzc2FnZUJvZHlCYXNlNjQ6IHN0cmluZyxcbiAgICAgICAgfSA9IGF3YWl0IHRoaXMucmVxdWVzdENvcmUoJ2NvbnRyYWN0cy5kZXBsb3kubWVzc2FnZScsIHtcbiAgICAgICAgICAgIGFiaTogcGFyYW1zLnBhY2thZ2UuYWJpLFxuICAgICAgICAgICAgY29uc3RydWN0b3JIZWFkZXIsXG4gICAgICAgICAgICBjb25zdHJ1Y3RvclBhcmFtczogcGFyYW1zLmNvbnN0cnVjdG9yUGFyYW1zLFxuICAgICAgICAgICAgaW5pdFBhcmFtczogcGFyYW1zLmluaXRQYXJhbXMsXG4gICAgICAgICAgICBpbWFnZUJhc2U2NDogcGFyYW1zLnBhY2thZ2UuaW1hZ2VCYXNlNjQsXG4gICAgICAgICAgICBrZXlQYWlyOiBwYXJhbXMua2V5UGFpcixcbiAgICAgICAgICAgIHdvcmtjaGFpbklkOiBwYXJhbXMud29ya2NoYWluSWQsXG4gICAgICAgIH0pO1xuICAgICAgICByZXR1cm4ge1xuICAgICAgICAgICAgbWVzc2FnZToge1xuICAgICAgICAgICAgICAgIG1lc3NhZ2VJZDogbWVzc2FnZS5tZXNzYWdlSWQsXG4gICAgICAgICAgICAgICAgbWVzc2FnZUJvZHlCYXNlNjQ6IG1lc3NhZ2UubWVzc2FnZUJvZHlCYXNlNjQsXG4gICAgICAgICAgICAgICAgZXhwaXJlOiBjb25zdHJ1Y3RvckhlYWRlcj8uZXhwaXJlLFxuICAgICAgICAgICAgfSxcbiAgICAgICAgICAgIGFkZHJlc3M6IG1lc3NhZ2UuYWRkcmVzcyxcbiAgICAgICAgICAgIGNyZWF0aW9uVGltZTogRGF0ZS5ub3coKSxcbiAgICAgICAgfTtcbiAgICB9XG5cblxuICAgIGFzeW5jIGNyZWF0ZVJ1bk1lc3NhZ2UoXG4gICAgICAgIHBhcmFtczogVE9OQ29udHJhY3RSdW5QYXJhbXMsXG4gICAgICAgIHJldHJ5SW5kZXg/OiBudW1iZXIsXG4gICAgKTogUHJvbWlzZTxUT05Db250cmFjdFJ1bk1lc3NhZ2U+IHtcbiAgICAgICAgdGhpcy5jb25maWcubG9nKCdjcmVhdGVSdW5NZXNzYWdlJywgcGFyYW1zKTtcbiAgICAgICAgY29uc3QgaGVhZGVyID0gdGhpcy5tYWtlRXhwaXJlSGVhZGVyKFxuICAgICAgICAgICAgcGFyYW1zLmFiaSxcbiAgICAgICAgICAgIHBhcmFtcy5oZWFkZXIsXG4gICAgICAgICAgICByZXRyeUluZGV4LFxuICAgICAgICApO1xuICAgICAgICBjb25zdCBtZXNzYWdlID0gYXdhaXQgdGhpcy5yZXF1ZXN0Q29yZSgnY29udHJhY3RzLnJ1bi5tZXNzYWdlJywge1xuICAgICAgICAgICAgYWRkcmVzczogcGFyYW1zLmFkZHJlc3MsXG4gICAgICAgICAgICBhYmk6IHBhcmFtcy5hYmksXG4gICAgICAgICAgICBmdW5jdGlvbk5hbWU6IHBhcmFtcy5mdW5jdGlvbk5hbWUsXG4gICAgICAgICAgICBoZWFkZXIsXG4gICAgICAgICAgICBpbnB1dDogcGFyYW1zLmlucHV0LFxuICAgICAgICAgICAga2V5UGFpcjogcGFyYW1zLmtleVBhaXIsXG4gICAgICAgIH0pO1xuICAgICAgICBtZXNzYWdlLmV4cGlyZSA9IGhlYWRlcj8uZXhwaXJlO1xuICAgICAgICByZXR1cm4ge1xuICAgICAgICAgICAgYWRkcmVzczogcGFyYW1zLmFkZHJlc3MsXG4gICAgICAgICAgICBhYmk6IHBhcmFtcy5hYmksXG4gICAgICAgICAgICBmdW5jdGlvbk5hbWU6IHBhcmFtcy5mdW5jdGlvbk5hbWUsXG4gICAgICAgICAgICBtZXNzYWdlLFxuICAgICAgICAgICAgY3JlYXRpb25UaW1lOiBEYXRlLm5vdygpLFxuICAgICAgICB9O1xuICAgIH1cblxuICAgIGFzeW5jIGNyZWF0ZVVuc2lnbmVkRGVwbG95TWVzc2FnZShcbiAgICAgICAgcGFyYW1zOiBUT05Db250cmFjdERlcGxveVBhcmFtcyxcbiAgICAgICAgcmV0cnlJbmRleD86IG51bWJlcixcbiAgICApOiBQcm9taXNlPFRPTkNvbnRyYWN0VW5zaWduZWREZXBsb3lNZXNzYWdlPiB7XG4gICAgICAgIGNvbnN0IGNvbnN0cnVjdG9ySGVhZGVyID0gdGhpcy5tYWtlRXhwaXJlSGVhZGVyKFxuICAgICAgICAgICAgcGFyYW1zLnBhY2thZ2UuYWJpLFxuICAgICAgICAgICAgcGFyYW1zLmNvbnN0cnVjdG9ySGVhZGVyLFxuICAgICAgICAgICAgcmV0cnlJbmRleCxcbiAgICAgICAgKTtcbiAgICAgICAgY29uc3QgcmVzdWx0OiB7XG4gICAgICAgICAgICBlbmNvZGVkOiBUT05Db250cmFjdFVuc2lnbmVkTWVzc2FnZSxcbiAgICAgICAgICAgIGFkZHJlc3NIZXg6IHN0cmluZyxcbiAgICAgICAgfSA9IGF3YWl0IHRoaXMucmVxdWVzdENvcmUoJ2NvbnRyYWN0cy5kZXBsb3kuZW5jb2RlX3Vuc2lnbmVkX21lc3NhZ2UnLCB7XG4gICAgICAgICAgICBhYmk6IHBhcmFtcy5wYWNrYWdlLmFiaSxcbiAgICAgICAgICAgIGNvbnN0cnVjdG9ySGVhZGVyLFxuICAgICAgICAgICAgY29uc3RydWN0b3JQYXJhbXM6IHBhcmFtcy5jb25zdHJ1Y3RvclBhcmFtcyxcbiAgICAgICAgICAgIGluaXRQYXJhbXM6IHBhcmFtcy5pbml0UGFyYW1zLFxuICAgICAgICAgICAgaW1hZ2VCYXNlNjQ6IHBhcmFtcy5wYWNrYWdlLmltYWdlQmFzZTY0LFxuICAgICAgICAgICAgcHVibGljS2V5SGV4OiBwYXJhbXMua2V5UGFpci5wdWJsaWMsXG4gICAgICAgICAgICB3b3JrY2hhaW5JZDogcGFyYW1zLndvcmtjaGFpbklkLFxuICAgICAgICB9KTtcbiAgICAgICAgcmV0dXJuIHtcbiAgICAgICAgICAgIGFkZHJlc3M6IHJlc3VsdC5hZGRyZXNzSGV4LFxuICAgICAgICAgICAgc2lnblBhcmFtczoge1xuICAgICAgICAgICAgICAgIC4uLnJlc3VsdC5lbmNvZGVkLFxuICAgICAgICAgICAgICAgIGFiaTogcGFyYW1zLnBhY2thZ2UuYWJpLFxuICAgICAgICAgICAgICAgIGV4cGlyZTogY29uc3RydWN0b3JIZWFkZXI/LmV4cGlyZSxcbiAgICAgICAgICAgIH0sXG4gICAgICAgIH07XG4gICAgfVxuXG5cbiAgICBhc3luYyBjcmVhdGVVbnNpZ25lZFJ1bk1lc3NhZ2UoXG4gICAgICAgIHBhcmFtczogVE9OQ29udHJhY3RSdW5QYXJhbXMsXG4gICAgICAgIHJldHJ5SW5kZXg/OiBudW1iZXIsXG4gICAgKTogUHJvbWlzZTxUT05Db250cmFjdFVuc2lnbmVkUnVuTWVzc2FnZT4ge1xuICAgICAgICBjb25zdCBoZWFkZXIgPSB0aGlzLm1ha2VFeHBpcmVIZWFkZXIoXG4gICAgICAgICAgICBwYXJhbXMuYWJpLFxuICAgICAgICAgICAgcGFyYW1zLmhlYWRlcixcbiAgICAgICAgICAgIHJldHJ5SW5kZXgsXG4gICAgICAgICk7XG4gICAgICAgIGNvbnN0IHNpZ25QYXJhbXMgPSBhd2FpdCB0aGlzLnJlcXVlc3RDb3JlKCdjb250cmFjdHMucnVuLmVuY29kZV91bnNpZ25lZF9tZXNzYWdlJywge1xuICAgICAgICAgICAgYWRkcmVzczogcGFyYW1zLmFkZHJlc3MsXG4gICAgICAgICAgICBhYmk6IHBhcmFtcy5hYmksXG4gICAgICAgICAgICBmdW5jdGlvbk5hbWU6IHBhcmFtcy5mdW5jdGlvbk5hbWUsXG4gICAgICAgICAgICBoZWFkZXIsXG4gICAgICAgICAgICBpbnB1dDogcGFyYW1zLmlucHV0LFxuICAgICAgICB9KTtcbiAgICAgICAgcmV0dXJuIHtcbiAgICAgICAgICAgIGFkZHJlc3M6IHBhcmFtcy5hZGRyZXNzLFxuICAgICAgICAgICAgZnVuY3Rpb25OYW1lOiBwYXJhbXMuZnVuY3Rpb25OYW1lLFxuICAgICAgICAgICAgc2lnblBhcmFtczoge1xuICAgICAgICAgICAgICAgIC4uLnNpZ25QYXJhbXMsXG4gICAgICAgICAgICAgICAgYWJpOiBwYXJhbXMuYWJpLFxuICAgICAgICAgICAgICAgIGV4cGlyZTogaGVhZGVyPy5leHBpcmUsXG4gICAgICAgICAgICB9LFxuICAgICAgICB9O1xuICAgIH1cblxuXG4gICAgYXN5bmMgY3JlYXRlU2lnbmVkTWVzc2FnZShcbiAgICAgICAgcGFyYW1zOiBUT05Db250cmFjdENyZWF0ZVNpZ25lZE1lc3NhZ2VQYXJhbXMsXG4gICAgKTogUHJvbWlzZTxUT05Db250cmFjdE1lc3NhZ2U+IHtcbiAgICAgICAgcmV0dXJuIHRoaXMucmVxdWVzdENvcmUoJ2NvbnRyYWN0cy5lbmNvZGVfbWVzc2FnZV93aXRoX3NpZ24nLCBwYXJhbXMpO1xuICAgIH1cblxuXG4gICAgYXN5bmMgY3JlYXRlU2lnbmVkRGVwbG95TWVzc2FnZShcbiAgICAgICAgcGFyYW1zOiBUT05Db250cmFjdENyZWF0ZVNpZ25lZERlcGxveU1lc3NhZ2VQYXJhbXMsXG4gICAgKTogUHJvbWlzZTxUT05Db250cmFjdERlcGxveU1lc3NhZ2U+IHtcbiAgICAgICAgY29uc3QgbWVzc2FnZSA9IGF3YWl0IHRoaXMuY3JlYXRlU2lnbmVkTWVzc2FnZSh7XG4gICAgICAgICAgICBhYmk6IHBhcmFtcy51bnNpZ25lZE1lc3NhZ2Uuc2lnblBhcmFtcy5hYmksXG4gICAgICAgICAgICB1bnNpZ25lZEJ5dGVzQmFzZTY0OiBwYXJhbXMudW5zaWduZWRNZXNzYWdlLnNpZ25QYXJhbXMudW5zaWduZWRCeXRlc0Jhc2U2NCxcbiAgICAgICAgICAgIHNpZ25CeXRlc0Jhc2U2NDogcGFyYW1zLnNpZ25CeXRlc0Jhc2U2NCxcbiAgICAgICAgICAgIHB1YmxpY0tleUhleDogcGFyYW1zLnB1YmxpY0tleUhleCxcbiAgICAgICAgfSk7XG4gICAgICAgIG1lc3NhZ2UuZXhwaXJlID0gcGFyYW1zLnVuc2lnbmVkTWVzc2FnZS5zaWduUGFyYW1zLmV4cGlyZTtcbiAgICAgICAgcmV0dXJuIHtcbiAgICAgICAgICAgIGFkZHJlc3M6IHBhcmFtcy51bnNpZ25lZE1lc3NhZ2UuYWRkcmVzcyxcbiAgICAgICAgICAgIG1lc3NhZ2UsXG4gICAgICAgICAgICBjcmVhdGlvblRpbWU6IERhdGUubm93KCksXG4gICAgICAgIH07XG4gICAgfVxuXG5cbiAgICBhc3luYyBjcmVhdGVTaWduZWRSdW5NZXNzYWdlKFxuICAgICAgICBwYXJhbXM6IFRPTkNvbnRyYWN0Q3JlYXRlU2lnbmVkUnVuTWVzc2FnZVBhcmFtcyxcbiAgICApOiBQcm9taXNlPFRPTkNvbnRyYWN0UnVuTWVzc2FnZT4ge1xuICAgICAgICBjb25zdCBtZXNzYWdlID0gYXdhaXQgdGhpcy5jcmVhdGVTaWduZWRNZXNzYWdlKHtcbiAgICAgICAgICAgIGFiaTogcGFyYW1zLnVuc2lnbmVkTWVzc2FnZS5zaWduUGFyYW1zLmFiaSxcbiAgICAgICAgICAgIHVuc2lnbmVkQnl0ZXNCYXNlNjQ6IHBhcmFtcy51bnNpZ25lZE1lc3NhZ2Uuc2lnblBhcmFtcy51bnNpZ25lZEJ5dGVzQmFzZTY0LFxuICAgICAgICAgICAgc2lnbkJ5dGVzQmFzZTY0OiBwYXJhbXMuc2lnbkJ5dGVzQmFzZTY0LFxuICAgICAgICAgICAgcHVibGljS2V5SGV4OiBwYXJhbXMucHVibGljS2V5SGV4LFxuICAgICAgICB9KTtcbiAgICAgICAgbWVzc2FnZS5leHBpcmUgPSBwYXJhbXMudW5zaWduZWRNZXNzYWdlLnNpZ25QYXJhbXMuZXhwaXJlO1xuICAgICAgICByZXR1cm4ge1xuICAgICAgICAgICAgYWRkcmVzczogcGFyYW1zLnVuc2lnbmVkTWVzc2FnZS5hZGRyZXNzLFxuICAgICAgICAgICAgYWJpOiBwYXJhbXMudW5zaWduZWRNZXNzYWdlLnNpZ25QYXJhbXMuYWJpLFxuICAgICAgICAgICAgZnVuY3Rpb25OYW1lOiBwYXJhbXMudW5zaWduZWRNZXNzYWdlLmZ1bmN0aW9uTmFtZSxcbiAgICAgICAgICAgIG1lc3NhZ2UsXG4gICAgICAgICAgICBjcmVhdGlvblRpbWU6IERhdGUubm93KCksXG4gICAgICAgIH07XG4gICAgfVxuXG4gICAgYXN5bmMgZ2V0Q29kZUZyb21JbWFnZShcbiAgICAgICAgcGFyYW1zOiBUT05Db250cmFjdEdldENvZGVGcm9tSW1hZ2VQYXJhbXMsXG4gICAgKTogUHJvbWlzZTxUT05Db250cmFjdEdldENvZGVGcm9tSW1hZ2VSZXN1bHQ+IHtcbiAgICAgICAgcmV0dXJuIHRoaXMucmVxdWVzdENvcmUoJ2NvbnRyYWN0cy5pbWFnZS5jb2RlJywgcGFyYW1zKTtcbiAgICB9XG5cbiAgICBhc3luYyBnZXREZXBsb3lEYXRhKFxuICAgICAgICBwYXJhbXM6IFRPTkNvbnRyYWN0R2V0RGVwbG95RGF0YVBhcmFtcyxcbiAgICApOiBQcm9taXNlPFRPTkNvbnRyYWN0R2V0RGVwbG95RGF0YVJlc3VsdD4ge1xuICAgICAgICByZXR1cm4gdGhpcy5yZXF1ZXN0Q29yZSgnY29udHJhY3RzLmRlcGxveS5kYXRhJywgcGFyYW1zKTtcbiAgICB9XG5cbiAgICBhc3luYyBjcmVhdGVSdW5Cb2R5KFxuICAgICAgICBwYXJhbXM6IFRPTkNvbnRyYWN0Q3JlYXRlUnVuQm9keVBhcmFtcyxcbiAgICApOiBQcm9taXNlPFRPTkNvbnRyYWN0Q3JlYXRlUnVuQm9keVJlc3VsdD4ge1xuICAgICAgICByZXR1cm4gdGhpcy5yZXF1ZXN0Q29yZSgnY29udHJhY3RzLnJ1bi5ib2R5JywgcGFyYW1zKTtcbiAgICB9XG5cbiAgICBhc3luYyBnZXRGdW5jdGlvbklkKFxuICAgICAgICBwYXJhbXM6IFRPTkNvbnRyYWN0R2V0RnVuY3Rpb25JZFBhcmFtcyxcbiAgICApOiBQcm9taXNlPFRPTkNvbnRyYWN0R2V0RnVuY3Rpb25JZFJlc3VsdD4ge1xuICAgICAgICByZXR1cm4gdGhpcy5yZXF1ZXN0Q29yZSgnY29udHJhY3RzLmZ1bmN0aW9uLmlkJywgcGFyYW1zKTtcbiAgICB9XG5cbiAgICBhc3luYyBnZXRCb2NIYXNoKFxuICAgICAgICBwYXJhbXM6IFRPTkNvbnRyYWN0Qm9jLFxuICAgICk6IFByb21pc2U8VE9OQ29udHJhY3RHZXRCb2NIYXNoUmVzdWx0PiB7XG4gICAgICAgIHJldHVybiB0aGlzLnJlcXVlc3RDb3JlKCdjb250cmFjdHMuYm9jLmhhc2gnLCBwYXJhbXMpO1xuICAgIH1cblxuICAgIGFzeW5jIHBhcnNlTWVzc2FnZShcbiAgICAgICAgcGFyYW1zOiBUT05Db250cmFjdEJvYyxcbiAgICApOiBQcm9taXNlPFFNZXNzYWdlPiB7XG4gICAgICAgIHJldHVybiB0aGlzLnJlcXVlc3RDb3JlKCdjb250cmFjdHMucGFyc2UubWVzc2FnZScsIHBhcmFtcyk7XG4gICAgfVxuXG4gICAgLy8gTWVzc2FnZSBwYXJzaW5nXG5cbiAgICBhc3luYyBkZWNvZGVSdW5PdXRwdXQoXG4gICAgICAgIHBhcmFtczogVE9OQ29udHJhY3REZWNvZGVSdW5PdXRwdXRQYXJhbXMsXG4gICAgKTogUHJvbWlzZTxUT05Db250cmFjdFJ1blJlc3VsdD4ge1xuICAgICAgICByZXR1cm4gdGhpcy5yZXF1ZXN0Q29yZSgnY29udHJhY3RzLnJ1bi5vdXRwdXQnLCBwYXJhbXMpO1xuICAgIH1cblxuXG4gICAgYXN5bmMgZGVjb2RlSW5wdXRNZXNzYWdlQm9keShcbiAgICAgICAgcGFyYW1zOiBUT05Db250cmFjdERlY29kZU1lc3NhZ2VCb2R5UGFyYW1zLFxuICAgICk6IFByb21pc2U8VE9OQ29udHJhY3REZWNvZGVNZXNzYWdlQm9keVJlc3VsdD4ge1xuICAgICAgICByZXR1cm4gdGhpcy5yZXF1ZXN0Q29yZSgnY29udHJhY3RzLnJ1bi51bmtub3duLmlucHV0JywgcGFyYW1zKTtcbiAgICB9XG5cblxuICAgIGFzeW5jIGRlY29kZU91dHB1dE1lc3NhZ2VCb2R5KFxuICAgICAgICBwYXJhbXM6IFRPTkNvbnRyYWN0RGVjb2RlTWVzc2FnZUJvZHlQYXJhbXMsXG4gICAgKTogUHJvbWlzZTxUT05Db250cmFjdERlY29kZU1lc3NhZ2VCb2R5UmVzdWx0PiB7XG4gICAgICAgIHJldHVybiB0aGlzLnJlcXVlc3RDb3JlKCdjb250cmFjdHMucnVuLnVua25vd24ub3V0cHV0JywgcGFyYW1zKTtcbiAgICB9XG5cbiAgICAvLyBNZXNzYWdlIHByb2Nlc3NpbmdcblxuICAgIGFzeW5jIGdldE1lc3NhZ2VJZChtZXNzYWdlOiBUT05Db250cmFjdE1lc3NhZ2UpOiBQcm9taXNlPHN0cmluZz4ge1xuICAgICAgICByZXR1cm4gbWVzc2FnZS5tZXNzYWdlSWQgfHwgKGF3YWl0IHRoaXMuZ2V0Qm9jSGFzaCh7XG4gICAgICAgICAgICBib2NCYXNlNjQ6IG1lc3NhZ2UubWVzc2FnZUJvZHlCYXNlNjQsXG4gICAgICAgIH0pKS5oYXNoO1xuICAgIH1cblxuICAgIGFzeW5jIHNlbmRNZXNzYWdlKFxuICAgICAgICBwYXJhbXM6IFRPTkNvbnRyYWN0TWVzc2FnZSxcbiAgICAgICAgcGFyZW50U3Bhbj86IChTcGFuIHwgU3BhbkNvbnRleHQpLFxuICAgICk6IFByb21pc2U8c3RyaW5nPiB7XG4gICAgICAgIGNvbnN0IGV4cGlyZSA9IHBhcmFtcy5leHBpcmU7XG4gICAgICAgIGlmIChleHBpcmUgJiYgKERhdGUubm93KCkgPiBleHBpcmUgKiAxMDAwKSkge1xuICAgICAgICAgICAgdGhyb3cgVE9OQ2xpZW50RXJyb3Iuc2VuZE5vZGVSZXF1ZXN0RmFpbGVkKCdNZXNzYWdlIGFscmVhZHkgZXhwaXJlZCcpO1xuICAgICAgICB9XG4gICAgICAgIGNvbnN0IHNlcnZlclRpbWVEZWx0YSA9IE1hdGguYWJzKGF3YWl0IHRoaXMucXVlcmllcy5zZXJ2ZXJUaW1lRGVsdGEocGFyZW50U3BhbikpO1xuICAgICAgICBpZiAoc2VydmVyVGltZURlbHRhID4gdGhpcy5jb25maWcub3V0T2ZTeW5jVGhyZXNob2xkKCkpIHtcbiAgICAgICAgICAgIHRoaXMucXVlcmllcy5kcm9wU2VydmVyVGltZURlbHRhKCk7XG4gICAgICAgICAgICB0aHJvdyBUT05DbGllbnRFcnJvci5jbG9ja091dE9mU3luYygpO1xuICAgICAgICB9XG4gICAgICAgIGNvbnN0IGlkID0gYXdhaXQgdGhpcy5nZXRNZXNzYWdlSWQocGFyYW1zKTtcbiAgICAgICAgY29uc3QgaWRCYXNlNjQgPSBCdWZmZXIuZnJvbShpZCwgJ2hleCcpXG4gICAgICAgICAgICAudG9TdHJpbmcoJ2Jhc2U2NCcpO1xuICAgICAgICBhd2FpdCB0aGlzLnF1ZXJpZXMucG9zdFJlcXVlc3RzKFtcbiAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICBpZDogaWRCYXNlNjQsXG4gICAgICAgICAgICAgICAgYm9keTogcGFyYW1zLm1lc3NhZ2VCb2R5QmFzZTY0LFxuICAgICAgICAgICAgfSxcbiAgICAgICAgXSwgcGFyZW50U3Bhbik7XG4gICAgICAgIHRoaXMuY29uZmlnLmxvZygnc2VuZE1lc3NhZ2UuIFJlcXVlc3QgcG9zdGVkJyk7XG4gICAgICAgIHJldHVybiBpZDtcbiAgICB9XG5cbiAgICBhc3luYyBwcm9jZXNzTWVzc2FnZShcbiAgICAgICAgbWVzc2FnZTogVE9OQ29udHJhY3RNZXNzYWdlLFxuICAgICAgICByZXN1bHRGaWVsZHM6IHN0cmluZyxcbiAgICAgICAgcGFyZW50U3Bhbj86IChTcGFuIHwgU3BhbkNvbnRleHQpLFxuICAgICAgICByZXRyeUluZGV4PzogbnVtYmVyLFxuICAgICAgICBhZGRyZXNzPzogc3RyaW5nLFxuICAgICAgICBhYmk/OiBUT05Db250cmFjdEFCSSxcbiAgICAgICAgZnVuY3Rpb25OYW1lPzogc3RyaW5nLFxuICAgICAgICBtZXNzYWdlQ3JlYXRpb25UaW1lPzogbnVtYmVyLFxuICAgICk6IFByb21pc2U8UVRyYW5zYWN0aW9uPiB7XG4gICAgICAgIGF3YWl0IHRoaXMuc2VuZE1lc3NhZ2UobWVzc2FnZSwgcGFyZW50U3Bhbik7XG4gICAgICAgIHJldHVybiB0aGlzLndhaXRGb3JUcmFuc2FjdGlvbihcbiAgICAgICAgICAgIGFkZHJlc3MgfHwgJycsXG4gICAgICAgICAgICBtZXNzYWdlLFxuICAgICAgICAgICAgcmVzdWx0RmllbGRzLFxuICAgICAgICAgICAgcGFyZW50U3BhbixcbiAgICAgICAgICAgIHJldHJ5SW5kZXgsXG4gICAgICAgICAgICBtZXNzYWdlQ3JlYXRpb25UaW1lLFxuICAgICAgICAgICAgYWJpLFxuICAgICAgICAgICAgZnVuY3Rpb25OYW1lLFxuICAgICAgICApO1xuICAgIH1cblxuXG4gICAgYXN5bmMgd2FpdEZvclRyYW5zYWN0aW9uKFxuICAgICAgICBhZGRyZXNzOiBzdHJpbmcsXG4gICAgICAgIG1lc3NhZ2U6IFRPTkNvbnRyYWN0TWVzc2FnZSxcbiAgICAgICAgcmVzdWx0RmllbGRzOiBzdHJpbmcsXG4gICAgICAgIHBhcmVudFNwYW4/OiAoU3BhbiB8IFNwYW5Db250ZXh0KSxcbiAgICAgICAgcmV0cnlJbmRleD86IG51bWJlcixcbiAgICAgICAgbWVzc2FnZUNyZWF0aW9uVGltZT86IG51bWJlcixcbiAgICAgICAgYWJpPzogVE9OQ29udHJhY3RBQkksXG4gICAgICAgIGZ1bmN0aW9uTmFtZT86IHN0cmluZyxcbiAgICApOiBQcm9taXNlPFFUcmFuc2FjdGlvbj4ge1xuICAgICAgICBjb25zdCBtZXNzYWdlSWQgPSBhd2FpdCB0aGlzLmdldE1lc3NhZ2VJZChtZXNzYWdlKTtcbiAgICAgICAgY29uc3QgY29uZmlnID0gdGhpcy5jb25maWc7XG4gICAgICAgIGxldCBwcm9jZXNzaW5nVGltZW91dCA9IGNvbmZpZy5tZXNzYWdlUHJvY2Vzc2luZ1RpbWVvdXQocmV0cnlJbmRleCk7XG4gICAgICAgIGNvbnN0IHByb21pc2VzID0gW107XG4gICAgICAgIGNvbnN0IHNlcnZlckluZm8gPSBhd2FpdCB0aGlzLnF1ZXJpZXMuZ2V0U2VydmVySW5mbyhwYXJlbnRTcGFuKTtcbiAgICAgICAgY29uc3Qgb3BlcmF0aW9uSWQgPSBzZXJ2ZXJJbmZvLnN1cHBvcnRzT3BlcmF0aW9uSWRcbiAgICAgICAgICAgID8gdGhpcy5xdWVyaWVzLmdlbmVyYXRlT3BlcmF0aW9uSWQoKVxuICAgICAgICAgICAgOiB1bmRlZmluZWQ7XG4gICAgICAgIGxldCB0cmFuc2FjdGlvbjogP1FUcmFuc2FjdGlvbiA9IG51bGw7XG4gICAgICAgIHRyeSB7XG4gICAgICAgICAgICBjb25zdCBleHBpcmUgPSBtZXNzYWdlLmV4cGlyZTtcbiAgICAgICAgICAgIGlmIChleHBpcmUpIHtcbiAgICAgICAgICAgICAgICAvLyBjYWxjdWxhdGUgdGltZW91dCBhY2NvcmRpbmcgdG8gYGV4cGlyZWAgdmFsdWUgKGluIHNlY29uZHMpXG4gICAgICAgICAgICAgICAgLy8gYWRkIHByb2Nlc3NpbmcgdGltZW91dCBhcyBtYXN0ZXIgYmxvY2sgdmFsaWRhdGlvbiB0aW1lXG4gICAgICAgICAgICAgICAgcHJvY2Vzc2luZ1RpbWVvdXQgPSBleHBpcmUgKiAxMDAwIC0gRGF0ZS5ub3coKSArIHByb2Nlc3NpbmdUaW1lb3V0O1xuXG4gICAgICAgICAgICAgICAgY29uc3Qgd2FpdEV4cGlyZWQgPSBhc3luYyAoKSA9PiB7XG4gICAgICAgICAgICAgICAgICAgIC8vIHdhaXQgZm9yIGJsb2NrLCBwcm9kdWNlZCBhZnRlciBgZXhwaXJlYCB0byBndWFyYW50ZWUgdGhhdCBtZXNzYWdlIGlzIHJlamVjdGVkXG4gICAgICAgICAgICAgICAgICAgIGNvbnN0IGJsb2NrOiBRQmxvY2sgPSBhd2FpdCB0aGlzLnF1ZXJpZXMuYmxvY2tzLndhaXRGb3Ioe1xuICAgICAgICAgICAgICAgICAgICAgICAgZmlsdGVyOiB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgbWFzdGVyOiB7IG1pbl9zaGFyZF9nZW5fdXRpbWU6IHsgZ2U6IGV4cGlyZSB9IH0sXG4gICAgICAgICAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgICAgICAgICAgcmVzdWx0OiAnaW5fbXNnX2Rlc2NyIHsgdHJhbnNhY3Rpb25faWQgfScsXG4gICAgICAgICAgICAgICAgICAgICAgICB0aW1lb3V0OiBwcm9jZXNzaW5nVGltZW91dCxcbiAgICAgICAgICAgICAgICAgICAgICAgIHBhcmVudFNwYW4sXG4gICAgICAgICAgICAgICAgICAgICAgICBvcGVyYXRpb25JZCxcbiAgICAgICAgICAgICAgICAgICAgfSk7XG5cbiAgICAgICAgICAgICAgICAgICAgaWYgKHRyYW5zYWN0aW9uKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICByZXR1cm47XG4gICAgICAgICAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgICAgICAgICBjb25zdCB0cmFuc2FjdGlvbl9pZCA9IGJsb2NrLmluX21zZ19kZXNjclxuICAgICAgICAgICAgICAgICAgICAgICAgJiYgYmxvY2suaW5fbXNnX2Rlc2NyLmZpbmQobXNnID0+ICEhbXNnLnRyYW5zYWN0aW9uX2lkKT8udHJhbnNhY3Rpb25faWQ7XG5cbiAgICAgICAgICAgICAgICAgICAgaWYgKCF0cmFuc2FjdGlvbl9pZCkge1xuICAgICAgICAgICAgICAgICAgICAgICAgdGhyb3cgVE9OQ2xpZW50RXJyb3IuaW50ZXJuYWxFcnJvcihcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAnSW52YWxpZCBibG9jayByZWNlaXZlZDogbm8gdHJhbnNhY3Rpb24gSUQnLFxuICAgICAgICAgICAgICAgICAgICAgICAgKTtcbiAgICAgICAgICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICAgICAgICAgIC8vIGNoZWNrIHRoYXQgdHJhbnNhY3Rpb25zIGNvbGxlY3Rpb24gaXMgdXBkYXRlZFxuICAgICAgICAgICAgICAgICAgICBhd2FpdCB0aGlzLnF1ZXJpZXMudHJhbnNhY3Rpb25zLndhaXRGb3Ioe1xuICAgICAgICAgICAgICAgICAgICAgICAgZmlsdGVyOiB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgaWQ6IHsgZXE6IHRyYW5zYWN0aW9uX2lkIH0sXG4gICAgICAgICAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgICAgICAgICAgcmVzdWx0OiAnaWQnLFxuICAgICAgICAgICAgICAgICAgICAgICAgdGltZW91dDogcHJvY2Vzc2luZ1RpbWVvdXQsXG4gICAgICAgICAgICAgICAgICAgICAgICBwYXJlbnRTcGFuLFxuICAgICAgICAgICAgICAgICAgICAgICAgb3BlcmF0aW9uSWQsXG4gICAgICAgICAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgICAgIH07XG5cbiAgICAgICAgICAgICAgICBwcm9taXNlcy5wdXNoKHdhaXRFeHBpcmVkKCkpO1xuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICAvLyB3YWl0IGZvciBtZXNzYWdlIHByb2Nlc3NpbmcgdHJhbnNhY3Rpb25cbiAgICAgICAgICAgIHByb21pc2VzLnB1c2gobmV3IFByb21pc2UoKHJlc29sdmUsIHJlamVjdCkgPT4ge1xuICAgICAgICAgICAgICAgIChhc3luYyAoKSA9PiB7XG4gICAgICAgICAgICAgICAgICAgIHRyeSB7XG4gICAgICAgICAgICAgICAgICAgICAgICB0cmFuc2FjdGlvbiA9IGF3YWl0IHRoaXMucXVlcmllcy50cmFuc2FjdGlvbnMud2FpdEZvcih7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgZmlsdGVyOiB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGluX21zZzogeyBlcTogbWVzc2FnZUlkIH0sXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHN0YXR1czogeyBlcTogUVRyYW5zYWN0aW9uUHJvY2Vzc2luZ1N0YXR1cy5maW5hbGl6ZWQgfSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHJlc3VsdDogcmVzdWx0RmllbGRzLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRpbWVvdXQ6IHByb2Nlc3NpbmdUaW1lb3V0LFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIG9wZXJhdGlvbklkLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHBhcmVudFNwYW4sXG4gICAgICAgICAgICAgICAgICAgICAgICB9KTtcbiAgICAgICAgICAgICAgICAgICAgICAgIHJlc29sdmUoKTtcbiAgICAgICAgICAgICAgICAgICAgfSBjYXRjaCAoZXJyb3IpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIHJlamVjdChlcnJvcik7XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICB9KSgpO1xuICAgICAgICAgICAgfSkpO1xuXG4gICAgICAgICAgICB0cnkge1xuICAgICAgICAgICAgICAgIGF3YWl0IFByb21pc2UucmFjZShwcm9taXNlcyk7XG4gICAgICAgICAgICB9IGZpbmFsbHkge1xuICAgICAgICAgICAgICAgIGlmIChwcm9taXNlcy5sZW5ndGggPiAxICYmIG9wZXJhdGlvbklkKSB7XG4gICAgICAgICAgICAgICAgICAgIGF3YWl0IHRoaXMucXVlcmllcy5maW5pc2hPcGVyYXRpb25zKFtvcGVyYXRpb25JZF0pO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgaWYgKCF0cmFuc2FjdGlvbikge1xuICAgICAgICAgICAgICAgIHRocm93IFRPTkNsaWVudEVycm9yLm1lc3NhZ2VFeHBpcmVkKCk7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBjb25zdCB0cmFuc2FjdGlvbk5vdyA9IHRyYW5zYWN0aW9uLm5vdyB8fCAwO1xuICAgICAgICAgICAgdGhpcy5jb25maWcubG9nKCdwcm9jZXNzTWVzc2FnZS4gdHJhbnNhY3Rpb24gcmVjZWl2ZWQnLCB7XG4gICAgICAgICAgICAgICAgaWQ6IHRyYW5zYWN0aW9uLmlkLFxuICAgICAgICAgICAgICAgIGJsb2NrX2lkOiB0cmFuc2FjdGlvbi5ibG9ja19pZCxcbiAgICAgICAgICAgICAgICBub3c6IGAke25ldyBEYXRlKHRyYW5zYWN0aW9uTm93ICogMTAwMCkudG9JU09TdHJpbmcoKX0gKCR7dHJhbnNhY3Rpb25Ob3d9KWAsXG4gICAgICAgICAgICB9KTtcbiAgICAgICAgfSBjYXRjaCAoZXJyb3IpIHtcbiAgICAgICAgICAgIHRocm93IGF3YWl0IHRoaXMucmVzb2x2ZURldGFpbGVkRXJyb3IoXG4gICAgICAgICAgICAgICAgZXJyb3IsXG4gICAgICAgICAgICAgICAgbWVzc2FnZS5tZXNzYWdlQm9keUJhc2U2NCxcbiAgICAgICAgICAgICAgICBtZXNzYWdlQ3JlYXRpb25UaW1lIHx8IERhdGUubm93KCksXG4gICAgICAgICAgICAgICAgYWRkcmVzcyxcbiAgICAgICAgICAgICk7XG4gICAgICAgIH1cbiAgICAgICAgcmVtb3ZlVHlwZU5hbWUodHJhbnNhY3Rpb24pO1xuICAgICAgICBhd2FpdCB0aGlzLmNoZWNrVHJhbnNhY3Rpb24oYWRkcmVzcywgdHJhbnNhY3Rpb24sIGFiaSwgZnVuY3Rpb25OYW1lKTtcbiAgICAgICAgcmV0dXJuIHRyYW5zYWN0aW9uO1xuICAgIH1cblxuICAgIGFzeW5jIGNoZWNrVHJhbnNhY3Rpb24oXG4gICAgICAgIGFkZHJlc3M6IHN0cmluZyxcbiAgICAgICAgdHJhbnNhY3Rpb246IFFUcmFuc2FjdGlvbixcbiAgICAgICAgYWJpPzogVE9OQ29udHJhY3RBQkksXG4gICAgICAgIGZ1bmN0aW9uTmFtZT86IHN0cmluZyxcbiAgICApIHtcbiAgICAgICAgdHJ5IHtcbiAgICAgICAgICAgIGF3YWl0IHRoaXMucmVxdWVzdENvcmUoJ2NvbnRyYWN0cy5wcm9jZXNzLnRyYW5zYWN0aW9uJywge1xuICAgICAgICAgICAgICAgIHRyYW5zYWN0aW9uLFxuICAgICAgICAgICAgICAgIGFiaTogYWJpIHx8IG51bGwsXG4gICAgICAgICAgICAgICAgZnVuY3Rpb25OYW1lOiBmdW5jdGlvbk5hbWUgfHwgbnVsbCxcbiAgICAgICAgICAgICAgICBhZGRyZXNzLFxuICAgICAgICAgICAgfSk7XG4gICAgICAgIH0gY2F0Y2ggKGVycm9yKSB7XG4gICAgICAgICAgICBjb25zdCBhY2NvdW50cyA9IGF3YWl0IHRoaXMucXVlcmllcy5hY2NvdW50cy5xdWVyeSh7XG4gICAgICAgICAgICAgICAgZmlsdGVyOiB7IGlkOiB7IGVxOiBhZGRyZXNzIH0gfSxcbiAgICAgICAgICAgICAgICByZXN1bHQ6ICdhY2NfdHlwZSBiYWxhbmNlJyxcbiAgICAgICAgICAgICAgICB0aW1lb3V0OiAxMDAwLFxuICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICBpZiAoYWNjb3VudHMubGVuZ3RoID09PSAwKSB7XG4gICAgICAgICAgICAgICAgdGhyb3cgVE9OQ2xpZW50RXJyb3IuYWNjb3VudE1pc3NpbmcoYWRkcmVzcyk7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBpZiAoVE9OQ2xpZW50RXJyb3IuaXNDb250cmFjdEVycm9yKGVycm9yLCBUT05Db250cmFjdEV4aXRDb2RlLk5PX0dBUykpIHtcbiAgICAgICAgICAgICAgICB0aHJvdyBUT05DbGllbnRFcnJvci5hY2NvdW50QmFsYW5jZVRvb0xvdyhhZGRyZXNzLCBhY2NvdW50c1swXS5iYWxhbmNlKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIHRocm93IGVycm9yO1xuICAgICAgICB9XG4gICAgfVxuXG4gICAgYXN5bmMgcmVzb2x2ZURldGFpbGVkRXJyb3IoXG4gICAgICAgIGVycm9yOiBFcnJvcixcbiAgICAgICAgbWVzc2FnZUJhc2U2NDogc3RyaW5nLFxuICAgICAgICB0aW1lOiBudW1iZXIsXG4gICAgICAgIGFkZHJlc3M6IHN0cmluZyxcbiAgICApIHtcbiAgICAgICAgY29uc3QgYWNjb3VudHMgPSBhd2FpdCB0aGlzLnF1ZXJpZXMuYWNjb3VudHMucXVlcnkoe1xuICAgICAgICAgICAgZmlsdGVyOiB7IGlkOiB7IGVxOiBhZGRyZXNzIH0gfSxcbiAgICAgICAgICAgIHJlc3VsdDogJ2lkIGFjY190eXBlIGJhbGFuY2UgYmFsYW5jZV9vdGhlciB7IGN1cnJlbmN5IHZhbHVlIH0gY29kZSBkYXRhIGxhc3RfcGFpZCcsXG4gICAgICAgICAgICB0aW1lb3V0OiAxMDAwLFxuICAgICAgICB9KTtcbiAgICAgICAgaWYgKGFjY291bnRzLmxlbmd0aCA9PT0gMCkge1xuICAgICAgICAgICAgcmV0dXJuIFRPTkNsaWVudEVycm9yLmFjY291bnRNaXNzaW5nKGFkZHJlc3MpO1xuICAgICAgICB9XG4gICAgICAgIGNvbnN0IGFjY291bnQgPSBhY2NvdW50c1swXTtcbiAgICAgICAgcmVtb3ZlVHlwZU5hbWUoYWNjb3VudCk7XG4gICAgICAgIHRyeSB7XG4gICAgICAgICAgICBhd2FpdCB0aGlzLnJlcXVlc3RDb3JlKCdjb250cmFjdHMucmVzb2x2ZS5lcnJvcicsIHtcbiAgICAgICAgICAgICAgICBhZGRyZXNzLFxuICAgICAgICAgICAgICAgIGFjY291bnQsXG4gICAgICAgICAgICAgICAgbWVzc2FnZUJhc2U2NCxcbiAgICAgICAgICAgICAgICB0aW1lOiBNYXRoLnJvdW5kKHRpbWUgLyAxMDAwKSxcbiAgICAgICAgICAgICAgICBtYWluRXJyb3I6IGVycm9yLFxuICAgICAgICAgICAgfSk7XG4gICAgICAgIH0gY2F0Y2ggKHJlc29sdmVkKSB7XG4gICAgICAgICAgICByZXR1cm4gcmVzb2x2ZWQ7XG4gICAgICAgIH1cbiAgICAgICAgcmV0dXJuIGVycm9yO1xuICAgIH1cblxuICAgIGFzeW5jIGlzRGVwbG95ZWQoYWRkcmVzczogc3RyaW5nLCBwYXJlbnRTcGFuPzogKFNwYW4gfCBTcGFuQ29udGV4dCkpOiBQcm9taXNlPGJvb2w+IHtcbiAgICAgICAgY29uc3QgYWNjb3VudCA9IGF3YWl0IHRoaXMucXVlcmllcy5hY2NvdW50cy5xdWVyeSh7XG4gICAgICAgICAgICBmaWx0ZXI6IHtcbiAgICAgICAgICAgICAgICBpZDogeyBlcTogYWRkcmVzcyB9LFxuICAgICAgICAgICAgICAgIGFjY190eXBlOiB7IGVxOiBRQWNjb3VudFR5cGUuYWN0aXZlIH0sXG4gICAgICAgICAgICB9LFxuICAgICAgICAgICAgcmVzdWx0OiAnaWQnLFxuICAgICAgICAgICAgcGFyZW50U3BhbixcbiAgICAgICAgfSk7XG4gICAgICAgIHJldHVybiBhY2NvdW50Lmxlbmd0aCA+IDA7XG4gICAgfVxuXG4gICAgYXN5bmMgcHJvY2Vzc0RlcGxveU1lc3NhZ2UoXG4gICAgICAgIHBhcmFtczogVE9OQ29udHJhY3REZXBsb3lNZXNzYWdlLFxuICAgICAgICBwYXJlbnRTcGFuPzogKFNwYW4gfCBTcGFuQ29udGV4dCksXG4gICAgICAgIHJldHJ5SW5kZXg/OiBudW1iZXIsXG4gICAgKTogUHJvbWlzZTxUT05Db250cmFjdERlcGxveVJlc3VsdD4ge1xuICAgICAgICB0aGlzLmNvbmZpZy5sb2coJ3Byb2Nlc3NEZXBsb3lNZXNzYWdlJywgcGFyYW1zKTtcbiAgICAgICAgaWYgKGF3YWl0IHRoaXMuaXNEZXBsb3llZChwYXJhbXMuYWRkcmVzcywgcGFyZW50U3BhbikpIHtcbiAgICAgICAgICAgIHJldHVybiB7XG4gICAgICAgICAgICAgICAgYWRkcmVzczogcGFyYW1zLmFkZHJlc3MsXG4gICAgICAgICAgICAgICAgYWxyZWFkeURlcGxveWVkOiB0cnVlLFxuICAgICAgICAgICAgfTtcbiAgICAgICAgfVxuICAgICAgICBhd2FpdCB0aGlzLnNlbmRNZXNzYWdlKHBhcmFtcy5tZXNzYWdlLCBwYXJlbnRTcGFuKTtcbiAgICAgICAgcmV0dXJuIHRoaXMud2FpdEZvckRlcGxveVRyYW5zYWN0aW9uKFxuICAgICAgICAgICAgcGFyYW1zLFxuICAgICAgICAgICAgcGFyZW50U3BhbixcbiAgICAgICAgICAgIHJldHJ5SW5kZXgsXG4gICAgICAgICk7XG4gICAgfVxuXG4gICAgYXN5bmMgd2FpdEZvckRlcGxveVRyYW5zYWN0aW9uKFxuICAgICAgICBkZXBsb3lNZXNzYWdlOiBUT05Db250cmFjdERlcGxveU1lc3NhZ2UsXG4gICAgICAgIHBhcmVudFNwYW4/OiAoU3BhbiB8IFNwYW5Db250ZXh0KSxcbiAgICAgICAgcmV0cnlJbmRleD86IG51bWJlcixcbiAgICApOiBQcm9taXNlPFRPTkNvbnRyYWN0RGVwbG95UmVzdWx0PiB7XG4gICAgICAgIGNvbnN0IHRyYW5zYWN0aW9uID0gYXdhaXQgdGhpcy53YWl0Rm9yVHJhbnNhY3Rpb24oXG4gICAgICAgICAgICBkZXBsb3lNZXNzYWdlLmFkZHJlc3MsXG4gICAgICAgICAgICBkZXBsb3lNZXNzYWdlLm1lc3NhZ2UsXG4gICAgICAgICAgICB0cmFuc2FjdGlvbkRldGFpbHMsXG4gICAgICAgICAgICBwYXJlbnRTcGFuLFxuICAgICAgICAgICAgcmV0cnlJbmRleCxcbiAgICAgICAgICAgIGRlcGxveU1lc3NhZ2UuY3JlYXRpb25UaW1lLFxuICAgICAgICApO1xuICAgICAgICB0aGlzLmNvbmZpZy5sb2coJ3Byb2Nlc3NEZXBsb3lNZXNzYWdlLiBFbmQnKTtcbiAgICAgICAgcmV0dXJuIHtcbiAgICAgICAgICAgIGFkZHJlc3M6IGRlcGxveU1lc3NhZ2UuYWRkcmVzcyxcbiAgICAgICAgICAgIGFscmVhZHlEZXBsb3llZDogZmFsc2UsXG4gICAgICAgICAgICB0cmFuc2FjdGlvbixcbiAgICAgICAgfTtcbiAgICB9XG5cblxuICAgIGFzeW5jIHByb2Nlc3NSdW5NZXNzYWdlKFxuICAgICAgICBydW5NZXNzYWdlOiBUT05Db250cmFjdFJ1bk1lc3NhZ2UsXG4gICAgICAgIHBhcmVudFNwYW4/OiAoU3BhbiB8IFNwYW5Db250ZXh0KSxcbiAgICAgICAgcmV0cnlJbmRleD86IG51bWJlcixcbiAgICApOiBQcm9taXNlPFRPTkNvbnRyYWN0UnVuUmVzdWx0PiB7XG4gICAgICAgIHRoaXMuY29uZmlnLmxvZygncHJvY2Vzc1J1bk1lc3NhZ2UnLCBydW5NZXNzYWdlKTtcbiAgICAgICAgYXdhaXQgdGhpcy5zZW5kTWVzc2FnZShydW5NZXNzYWdlLm1lc3NhZ2UsIHBhcmVudFNwYW4pO1xuICAgICAgICByZXR1cm4gdGhpcy53YWl0Rm9yUnVuVHJhbnNhY3Rpb24ocnVuTWVzc2FnZSwgcGFyZW50U3BhbiwgcmV0cnlJbmRleCk7XG4gICAgfVxuXG4gICAgYXN5bmMgd2FpdEZvclJ1blRyYW5zYWN0aW9uKFxuICAgICAgICBydW5NZXNzYWdlOiBUT05Db250cmFjdFJ1bk1lc3NhZ2UsXG4gICAgICAgIHBhcmVudFNwYW4/OiAoU3BhbiB8IFNwYW5Db250ZXh0KSxcbiAgICAgICAgcmV0cnlJbmRleD86IG51bWJlcixcbiAgICApOiBQcm9taXNlPFRPTkNvbnRyYWN0UnVuUmVzdWx0PiB7XG4gICAgICAgIGNvbnN0IHRyYW5zYWN0aW9uID0gYXdhaXQgdGhpcy53YWl0Rm9yVHJhbnNhY3Rpb24oXG4gICAgICAgICAgICBydW5NZXNzYWdlLmFkZHJlc3MsXG4gICAgICAgICAgICBydW5NZXNzYWdlLm1lc3NhZ2UsXG4gICAgICAgICAgICB0cmFuc2FjdGlvbkRldGFpbHMsXG4gICAgICAgICAgICBwYXJlbnRTcGFuLFxuICAgICAgICAgICAgcmV0cnlJbmRleCxcbiAgICAgICAgICAgIHJ1bk1lc3NhZ2UuY3JlYXRpb25UaW1lLFxuICAgICAgICAgICAgcnVuTWVzc2FnZS5hYmksXG4gICAgICAgICAgICBydW5NZXNzYWdlLmZ1bmN0aW9uTmFtZSxcbiAgICAgICAgKTtcbiAgICAgICAgY29uc3Qgb3V0cHV0TWVzc2FnZXMgPSB0cmFuc2FjdGlvbi5vdXRfbWVzc2FnZXM7XG4gICAgICAgIGlmICghb3V0cHV0TWVzc2FnZXMgfHwgb3V0cHV0TWVzc2FnZXMubGVuZ3RoID09PSAwKSB7XG4gICAgICAgICAgICByZXR1cm4ge1xuICAgICAgICAgICAgICAgIG91dHB1dDogbnVsbCxcbiAgICAgICAgICAgICAgICB0cmFuc2FjdGlvbixcbiAgICAgICAgICAgIH07XG4gICAgICAgIH1cbiAgICAgICAgY29uc3QgZXh0ZXJuYWxNZXNzYWdlczogUU1lc3NhZ2VbXSA9IG91dHB1dE1lc3NhZ2VzLmZpbHRlcigoeDogUU1lc3NhZ2UpID0+IHtcbiAgICAgICAgICAgIHJldHVybiB4Lm1zZ190eXBlID09PSBRTWVzc2FnZVR5cGUuZXh0T3V0O1xuICAgICAgICB9KTtcbiAgICAgICAgdGhpcy5jb25maWcubG9nKCdwcm9jZXNzUnVuTWVzc2FnZS4gQmVmb3JlIG1lc3NhZ2VzIHBhcnNlJyk7XG4gICAgICAgIGNvbnN0IG91dHB1dHMgPSBhd2FpdCBQcm9taXNlLmFsbChleHRlcm5hbE1lc3NhZ2VzLm1hcCgoeDogUU1lc3NhZ2UpID0+IHtcbiAgICAgICAgICAgIHJldHVybiB0aGlzLmRlY29kZU91dHB1dE1lc3NhZ2VCb2R5KHtcbiAgICAgICAgICAgICAgICBhYmk6IHJ1bk1lc3NhZ2UuYWJpLFxuICAgICAgICAgICAgICAgIGJvZHlCYXNlNjQ6IHguYm9keSB8fCAnJyxcbiAgICAgICAgICAgIH0pO1xuICAgICAgICB9KSk7XG4gICAgICAgIGNvbnN0IHJlc3VsdE91dHB1dCA9IG91dHB1dHMuZmluZCgoeDogVE9OQ29udHJhY3REZWNvZGVNZXNzYWdlQm9keVJlc3VsdCkgPT4ge1xuICAgICAgICAgICAgcmV0dXJuIHguZnVuY3Rpb24udG9Mb3dlckNhc2UoKSA9PT0gcnVuTWVzc2FnZS5mdW5jdGlvbk5hbWUudG9Mb3dlckNhc2UoKTtcbiAgICAgICAgfSk7XG4gICAgICAgIHRoaXMuY29uZmlnLmxvZygncHJvY2Vzc1J1bk1lc3NhZ2UuIEVuZCcpO1xuICAgICAgICByZXR1cm4ge1xuICAgICAgICAgICAgb3V0cHV0OiByZXN1bHRPdXRwdXQgPyByZXN1bHRPdXRwdXQub3V0cHV0IDogbnVsbCxcbiAgICAgICAgICAgIHRyYW5zYWN0aW9uLFxuICAgICAgICB9O1xuICAgIH1cblxuICAgIC8qKlxuICAgICAqIERlcHJlY2F0ZWQuIFVzZSBgcnVuTWVzc2FnZUxvY2FsYCBpbnN0ZWFkLlxuICAgICAqIEBwYXJhbSBwYXJhbXNcbiAgICAgKiBAcGFyYW0gd2FpdFBhcmFtc1xuICAgICAqIEBwYXJhbSBwYXJlbnRTcGFuXG4gICAgICogQHJldHVybnMge1Byb21pc2U8dW5rbm93bj59XG4gICAgICovXG4gICAgYXN5bmMgcHJvY2Vzc1J1bk1lc3NhZ2VMb2NhbChcbiAgICAgICAgcGFyYW1zOiBUT05Db250cmFjdFJ1bk1lc3NhZ2UsXG4gICAgICAgIHdhaXRQYXJhbXM/OiBUT05Db250cmFjdEFjY291bnRXYWl0UGFyYW1zLFxuICAgICAgICBwYXJlbnRTcGFuPzogKFNwYW4gfCBTcGFuQ29udGV4dCksXG4gICAgKTogUHJvbWlzZTxUT05Db250cmFjdFJ1blJlc3VsdD4ge1xuICAgICAgICB0aGlzLmNvbmZpZy5sb2coJ3Byb2Nlc3NSdW5NZXNzYWdlTG9jYWwnLCBwYXJhbXMpO1xuXG4gICAgICAgIGNvbnN0IGFjY291bnQgPSBhd2FpdCB0aGlzLmdldEFjY291bnQocGFyYW1zLmFkZHJlc3MsIHRydWUsIHdhaXRQYXJhbXMsIHBhcmVudFNwYW4pO1xuXG4gICAgICAgIHJldHVybiB0aGlzLnJlcXVlc3RDb3JlKCdjb250cmFjdHMucnVuLmxvY2FsLm1zZycsIHtcbiAgICAgICAgICAgIGFkZHJlc3M6IHBhcmFtcy5hZGRyZXNzLFxuICAgICAgICAgICAgYWNjb3VudCxcbiAgICAgICAgICAgIGFiaTogcGFyYW1zLmFiaSxcbiAgICAgICAgICAgIGZ1bmN0aW9uTmFtZTogcGFyYW1zLmZ1bmN0aW9uTmFtZSxcbiAgICAgICAgICAgIG1lc3NhZ2VCYXNlNjQ6IHBhcmFtcy5tZXNzYWdlLm1lc3NhZ2VCb2R5QmFzZTY0LFxuICAgICAgICB9KTtcbiAgICB9XG5cbiAgICAvLyBGZWUgY2FsY3VsYXRpb25cblxuICAgIGJpZ0JhbGFuY2UgPSAnMHgxMDAwMDAwMDAwMDAwMCc7XG5cbiAgICBhc3luYyBjYWxjUnVuRmVlcyhcbiAgICAgICAgcGFyYW1zOiBUT05Db250cmFjdENhbGNSdW5GZWVQYXJhbXMsXG4gICAgICAgIHBhcmVudFNwYW4/OiAoU3BhbiB8IFNwYW5Db250ZXh0KSxcbiAgICApOiBQcm9taXNlPFRPTkNvbnRyYWN0Q2FsY0ZlZVJlc3VsdD4ge1xuICAgICAgICB0aGlzLmNvbmZpZy5sb2coJ2NhbGNSdW5GZWVzJywgcGFyYW1zKTtcblxuICAgICAgICBjb25zdCBhY2NvdW50ID0gYXdhaXQgdGhpcy5nZXRBY2NvdW50KHBhcmFtcy5hZGRyZXNzLCB0cnVlLCBwYXJhbXMud2FpdFBhcmFtcywgcGFyZW50U3Bhbik7XG5cbiAgICAgICAgaWYgKHBhcmFtcy5lbXVsYXRlQmFsYW5jZSkge1xuICAgICAgICAgICAgYWNjb3VudC5iYWxhbmNlID0gdGhpcy5iaWdCYWxhbmNlO1xuICAgICAgICB9XG5cbiAgICAgICAgcmV0dXJuIHRoaXMucmVxdWVzdENvcmUoJ2NvbnRyYWN0cy5ydW4uZmVlJywge1xuICAgICAgICAgICAgYWRkcmVzczogcGFyYW1zLmFkZHJlc3MsXG4gICAgICAgICAgICBhY2NvdW50LFxuICAgICAgICAgICAgYWJpOiBwYXJhbXMuYWJpLFxuICAgICAgICAgICAgZnVuY3Rpb25OYW1lOiBwYXJhbXMuZnVuY3Rpb25OYW1lLFxuICAgICAgICAgICAgaW5wdXQ6IHBhcmFtcy5pbnB1dCxcbiAgICAgICAgICAgIGtleVBhaXI6IHBhcmFtcy5rZXlQYWlyLFxuICAgICAgICB9KTtcbiAgICB9XG5cbiAgICBhc3luYyBjYWxjRGVwbG95RmVlcyhcbiAgICAgICAgcGFyYW1zOiBUT05Db250cmFjdENhbGNEZXBsb3lGZWVQYXJhbXMsXG4gICAgICAgIHBhcmVudFNwYW4/OiAoU3BhbiB8IFNwYW5Db250ZXh0KSxcbiAgICApOiBQcm9taXNlPFRPTkNvbnRyYWN0Q2FsY0ZlZVJlc3VsdD4ge1xuICAgICAgICB0aGlzLmNvbmZpZy5sb2coJ2NhbGNEZXBsb3lGZWVzJywgcGFyYW1zKTtcblxuICAgICAgICBjb25zdCBtZXNzYWdlID0gYXdhaXQgdGhpcy5jcmVhdGVEZXBsb3lNZXNzYWdlKHBhcmFtcyk7XG5cbiAgICAgICAgcmV0dXJuIHRoaXMuY2FsY01zZ1Byb2Nlc3NGZWVzKHtcbiAgICAgICAgICAgIGFkZHJlc3M6IG1lc3NhZ2UuYWRkcmVzcyxcbiAgICAgICAgICAgIG1lc3NhZ2U6IG1lc3NhZ2UubWVzc2FnZSxcbiAgICAgICAgICAgIGVtdWxhdGVCYWxhbmNlOiBwYXJhbXMuZW11bGF0ZUJhbGFuY2UsXG4gICAgICAgICAgICBuZXdBY2NvdW50OiBwYXJhbXMubmV3QWNjb3VudCxcbiAgICAgICAgfSwgcGFyZW50U3Bhbik7XG4gICAgfVxuXG4gICAgYXN5bmMgY2FsY01zZ1Byb2Nlc3NGZWVzKFxuICAgICAgICBwYXJhbXM6IFRPTkNvbnRyYWN0Q2FsY01zZ1Byb2Nlc3NpbmdGZWVzUGFyYW1zLFxuICAgICAgICBwYXJlbnRTcGFuPzogKFNwYW4gfCBTcGFuQ29udGV4dCksXG4gICAgKTogUHJvbWlzZTxUT05Db250cmFjdENhbGNGZWVSZXN1bHQ+IHtcbiAgICAgICAgdGhpcy5jb25maWcubG9nKCdjYWxjTXNnUHJvY2Vzc0ZlZXMnLCBwYXJhbXMpO1xuXG4gICAgICAgIGxldCBhY2NvdW50OiBRQWNjb3VudCA9IHtcbiAgICAgICAgICAgIGJhbGFuY2U6IHRoaXMuYmlnQmFsYW5jZSxcbiAgICAgICAgICAgIGlkOiBwYXJhbXMuYWRkcmVzcyxcbiAgICAgICAgICAgIGxhc3RfcGFpZDogTWF0aC5mbG9vcihEYXRlLm5vdygpIC8gMTAwMCksXG4gICAgICAgIH07XG5cbiAgICAgICAgaWYgKCFwYXJhbXMubmV3QWNjb3VudCkge1xuICAgICAgICAgICAgYWNjb3VudCA9IGF3YWl0IHRoaXMuZ2V0QWNjb3VudChwYXJhbXMuYWRkcmVzcywgZmFsc2UsIHBhcmFtcy53YWl0UGFyYW1zLCBwYXJlbnRTcGFuKTtcbiAgICAgICAgfVxuXG4gICAgICAgIGlmIChwYXJhbXMuZW11bGF0ZUJhbGFuY2UpIHtcbiAgICAgICAgICAgIGFjY291bnQuYmFsYW5jZSA9IHRoaXMuYmlnQmFsYW5jZTtcbiAgICAgICAgfVxuXG4gICAgICAgIHJldHVybiB0aGlzLnJlcXVlc3RDb3JlKCdjb250cmFjdHMucnVuLmZlZS5tc2cnLCB7XG4gICAgICAgICAgICBhZGRyZXNzOiBwYXJhbXMuYWRkcmVzcyxcbiAgICAgICAgICAgIGFjY291bnQsXG4gICAgICAgICAgICBtZXNzYWdlQmFzZTY0OiBwYXJhbXMubWVzc2FnZS5tZXNzYWdlQm9keUJhc2U2NCxcbiAgICAgICAgfSk7XG4gICAgfVxuXG4gICAgLy8gQWRkcmVzcyBwcm9jZXNzaW5nXG5cbiAgICBhc3luYyBjb252ZXJ0QWRkcmVzcyhcbiAgICAgICAgcGFyYW1zOiBUT05Db250cmFjdENvbnZlcnRBZGRyZXNzUGFyYW1zLFxuICAgICk6IFByb21pc2U8VE9OQ29udHJhY3RDb252ZXJ0QWRkcmVzc1Jlc3VsdD4ge1xuICAgICAgICByZXR1cm4gdGhpcy5yZXF1ZXN0Q29yZSgnY29udHJhY3RzLmFkZHJlc3MuY29udmVydCcsIHBhcmFtcyk7XG4gICAgfVxuXG4gICAgLy8gSW50ZXJuYWxzXG5cbiAgICBhc3luYyBpbnRlcm5hbERlcGxveU5hdGl2ZShwYXJhbXM6IFRPTkNvbnRyYWN0RGVwbG95UGFyYW1zKTogUHJvbWlzZTxUT05Db250cmFjdERlcGxveVJlc3VsdD4ge1xuICAgICAgICByZXR1cm4gdGhpcy5yZXF1ZXN0Q29yZSgnY29udHJhY3RzLmRlcGxveScsIHtcbiAgICAgICAgICAgIGFiaTogcGFyYW1zLnBhY2thZ2UuYWJpLFxuICAgICAgICAgICAgY29uc3RydWN0b3JIZWFkZXI6IHBhcmFtcy5jb25zdHJ1Y3RvckhlYWRlcixcbiAgICAgICAgICAgIGNvbnN0cnVjdG9yUGFyYW1zOiBwYXJhbXMuY29uc3RydWN0b3JQYXJhbXMsXG4gICAgICAgICAgICBpbml0UGFyYW1zOiBwYXJhbXMuaW5pdFBhcmFtcyxcbiAgICAgICAgICAgIGltYWdlQmFzZTY0OiBwYXJhbXMucGFja2FnZS5pbWFnZUJhc2U2NCxcbiAgICAgICAgICAgIGtleVBhaXI6IHBhcmFtcy5rZXlQYWlyLFxuICAgICAgICB9KTtcbiAgICB9XG5cblxuICAgIGFzeW5jIGludGVybmFsUnVuTmF0aXZlKHBhcmFtczogVE9OQ29udHJhY3RSdW5QYXJhbXMpOiBQcm9taXNlPFRPTkNvbnRyYWN0UnVuUmVzdWx0PiB7XG4gICAgICAgIHJldHVybiB0aGlzLnJlcXVlc3RDb3JlKCdjb250cmFjdHMucnVuJywge1xuICAgICAgICAgICAgYWRkcmVzczogcGFyYW1zLmFkZHJlc3MsXG4gICAgICAgICAgICBhYmk6IHBhcmFtcy5hYmksXG4gICAgICAgICAgICBmdW5jdGlvbk5hbWU6IHBhcmFtcy5mdW5jdGlvbk5hbWUsXG4gICAgICAgICAgICBoZWFkZXI6IHBhcmFtcy5oZWFkZXIsXG4gICAgICAgICAgICBpbnB1dDogcGFyYW1zLmlucHV0LFxuICAgICAgICAgICAga2V5UGFpcjogcGFyYW1zLmtleVBhaXIsXG4gICAgICAgIH0pO1xuICAgIH1cblxuICAgIG1ha2VFeHBpcmVIZWFkZXIoXG4gICAgICAgIGFiaTogVE9OQ29udHJhY3RBQkksXG4gICAgICAgIHVzZXJIZWFkZXI/OiBhbnksXG4gICAgICAgIHJldHJ5SW5kZXg/OiBudW1iZXIsXG4gICAgKTogYW55IHtcbiAgICAgICAgY29uc3QgdGltZW91dCA9IHRoaXMuY29uZmlnLm1lc3NhZ2VFeHBpcmF0aW9uVGltZW91dChyZXRyeUluZGV4KTtcbiAgICAgICAgaWYgKGFiaS5oZWFkZXIgJiYgYWJpLmhlYWRlci5pbmNsdWRlcygnZXhwaXJlJykgJiYgIXVzZXJIZWFkZXI/LmV4cGlyZSkge1xuICAgICAgICAgICAgcmV0dXJuIHtcbiAgICAgICAgICAgICAgICAuLi51c2VySGVhZGVyLFxuICAgICAgICAgICAgICAgIGV4cGlyZTogTWF0aC5mbG9vcigoRGF0ZS5ub3coKSArIHRpbWVvdXQpIC8gMTAwMCkgKyAxLFxuICAgICAgICAgICAgfTtcbiAgICAgICAgfVxuICAgICAgICByZXR1cm4gdXNlckhlYWRlcjtcbiAgICB9XG5cbiAgICBhc3luYyByZXRyeUNhbGwoY2FsbDogKGluZGV4OiBudW1iZXIpID0+IFByb21pc2U8YW55Pik6IFByb21pc2U8YW55PiB7XG4gICAgICAgIGNvbnN0IHJldHJpZXNDb3VudCA9IHRoaXMuY29uZmlnLm1lc3NhZ2VSZXRyaWVzQ291bnQoKTtcbiAgICAgICAgZm9yIChsZXQgaSA9IDA7IGkgPD0gcmV0cmllc0NvdW50OyBpICs9IDEpIHtcbiAgICAgICAgICAgIGlmIChpID4gMCkge1xuICAgICAgICAgICAgICAgIHRoaXMuY29uZmlnLmxvZyhgUmV0cnkgIyR7aX1gKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIHRyeSB7XG4gICAgICAgICAgICAgICAgcmV0dXJuIGF3YWl0IGNhbGwoaSk7XG4gICAgICAgICAgICB9IGNhdGNoIChlcnJvcikge1xuICAgICAgICAgICAgICAgIGNvbnN0IHVzZVJldHJ5ID0gZXJyb3IuY29kZSA9PT0gVE9ORXJyb3JDb2RlLk1FU1NBR0VfRVhQSVJFRFxuICAgICAgICAgICAgICAgICAgICB8fCBUT05DbGllbnRFcnJvci5pc0NvbnRyYWN0RXJyb3IoZXJyb3IsIFRPTkNvbnRyYWN0RXhpdENvZGUuUkVQTEFZX1BST1RFQ1RJT04pO1xuICAgICAgICAgICAgICAgIGlmICghdXNlUmV0cnkpIHtcbiAgICAgICAgICAgICAgICAgICAgdGhyb3cgZXJyb3I7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICAgIHRocm93IFRPTkNsaWVudEVycm9yLm1lc3NhZ2VFeHBpcmVkKCk7XG4gICAgfVxuXG4gICAgYXN5bmMgaW50ZXJuYWxEZXBsb3lKcyhcbiAgICAgICAgcGFyYW1zOiBUT05Db250cmFjdERlcGxveVBhcmFtcyxcbiAgICAgICAgcGFyZW50U3Bhbj86IChTcGFuIHwgU3BhbkNvbnRleHQpLFxuICAgICk6IFByb21pc2U8VE9OQ29udHJhY3REZXBsb3lSZXN1bHQ+IHtcbiAgICAgICAgdGhpcy5jb25maWcubG9nKCdEZXBsb3kgc3RhcnQnKTtcbiAgICAgICAgcmV0dXJuIHRoaXMucmV0cnlDYWxsKGFzeW5jIChyZXRyeUluZGV4KSA9PiB7XG4gICAgICAgICAgICBjb25zdCBkZXBsb3lNZXNzYWdlID0gYXdhaXQgdGhpcy5jcmVhdGVEZXBsb3lNZXNzYWdlKHBhcmFtcywgcmV0cnlJbmRleCk7XG4gICAgICAgICAgICBpZiAoYXdhaXQgdGhpcy5pc0RlcGxveWVkKGRlcGxveU1lc3NhZ2UuYWRkcmVzcywgcGFyZW50U3BhbikpIHtcbiAgICAgICAgICAgICAgICByZXR1cm4ge1xuICAgICAgICAgICAgICAgICAgICBhZGRyZXNzOiBkZXBsb3lNZXNzYWdlLmFkZHJlc3MsXG4gICAgICAgICAgICAgICAgICAgIGFscmVhZHlEZXBsb3llZDogdHJ1ZSxcbiAgICAgICAgICAgICAgICB9O1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgYXdhaXQgdGhpcy5zZW5kTWVzc2FnZShkZXBsb3lNZXNzYWdlLm1lc3NhZ2UsIHBhcmVudFNwYW4pO1xuICAgICAgICAgICAgcmV0dXJuIHRoaXMud2FpdEZvckRlcGxveVRyYW5zYWN0aW9uKGRlcGxveU1lc3NhZ2UsIHBhcmVudFNwYW4sIHJldHJ5SW5kZXgpO1xuICAgICAgICB9KTtcbiAgICB9XG5cblxuICAgIGFzeW5jIGludGVybmFsUnVuSnMoXG4gICAgICAgIHBhcmFtczogVE9OQ29udHJhY3RSdW5QYXJhbXMsXG4gICAgICAgIHBhcmVudFNwYW4/OiAoU3BhbiB8IFNwYW5Db250ZXh0KSxcbiAgICApOiBQcm9taXNlPFRPTkNvbnRyYWN0UnVuUmVzdWx0PiB7XG4gICAgICAgIHRoaXMuY29uZmlnLmxvZygnUnVuIHN0YXJ0Jyk7XG4gICAgICAgIHJldHVybiB0aGlzLnJldHJ5Q2FsbChhc3luYyAocmV0cnlJbmRleCkgPT4ge1xuICAgICAgICAgICAgY29uc3QgcnVuTWVzc2FnZSA9IGF3YWl0IHRoaXMuY3JlYXRlUnVuTWVzc2FnZShwYXJhbXMsIHJldHJ5SW5kZXgpO1xuICAgICAgICAgICAgYXdhaXQgdGhpcy5zZW5kTWVzc2FnZShydW5NZXNzYWdlLm1lc3NhZ2UsIHBhcmVudFNwYW4pO1xuICAgICAgICAgICAgcmV0dXJuIHRoaXMud2FpdEZvclJ1blRyYW5zYWN0aW9uKHJ1bk1lc3NhZ2UsIHBhcmVudFNwYW4sIHJldHJ5SW5kZXgpO1xuICAgICAgICB9KTtcbiAgICB9XG5cbiAgICBhc3luYyBnZXRBY2NvdW50KFxuICAgICAgICBhZGRyZXNzOiBzdHJpbmcsXG4gICAgICAgIGFjdGl2ZTogYm9vbGVhbixcbiAgICAgICAgd2FpdFBhcmFtcz86IFRPTkNvbnRyYWN0QWNjb3VudFdhaXRQYXJhbXMsXG4gICAgICAgIHBhcmVudFNwYW4/OiAoU3BhbiB8IFNwYW5Db250ZXh0KSxcbiAgICApOiBQcm9taXNlPFFBY2NvdW50PiB7XG4gICAgICAgIGNvbnN0IGZpbHRlcjogeyBbc3RyaW5nXTogYW55IH0gPSB7XG4gICAgICAgICAgICBpZDogeyBlcTogYWRkcmVzcyB9LFxuICAgICAgICB9O1xuICAgICAgICBpZiAod2FpdFBhcmFtcyAmJiB3YWl0UGFyYW1zLnRyYW5zYWN0aW9uTHQpIHtcbiAgICAgICAgICAgIGZpbHRlci5sYXN0X3RyYW5zX2x0ID0geyBnZTogd2FpdFBhcmFtcy50cmFuc2FjdGlvbkx0IH07XG4gICAgICAgIH1cbiAgICAgICAgaWYgKGFjdGl2ZSkge1xuICAgICAgICAgICAgZmlsdGVyLmFjY190eXBlID0geyBlcTogUUFjY291bnRUeXBlLmFjdGl2ZSB9O1xuICAgICAgICB9XG5cbiAgICAgICAgdGhpcy5jb25maWcubG9nKCdnZXRBY2NvdW50LiBGaWx0ZXInLCBmaWx0ZXIpO1xuICAgICAgICBjb25zdCBhY2NvdW50cyA9IGF3YWl0IHRoaXMucXVlcmllcy5hY2NvdW50cy5xdWVyeSh7XG4gICAgICAgICAgICBmaWx0ZXIsXG4gICAgICAgICAgICByZXN1bHQ6ICdpZCBhY2NfdHlwZSBjb2RlIGRhdGEgYmFsYW5jZSBiYWxhbmNlX290aGVyIHsgY3VycmVuY3kgdmFsdWUgfSBsYXN0X3BhaWQnLFxuICAgICAgICAgICAgLi4uKHdhaXRQYXJhbXMgJiYgd2FpdFBhcmFtcy50aW1lb3V0ID8geyB0aW1lb3V0OiB3YWl0UGFyYW1zLnRpbWVvdXQgfSA6IHt9KSxcbiAgICAgICAgICAgIHBhcmVudFNwYW4sXG4gICAgICAgIH0pO1xuICAgICAgICBpZiAoYWNjb3VudHMubGVuZ3RoID09PSAwKSB7XG4gICAgICAgICAgICB0aHJvdyBUT05DbGllbnRFcnJvci5hY2NvdW50TWlzc2luZyhhZGRyZXNzKTtcbiAgICAgICAgfVxuICAgICAgICBjb25zdCBhY2NvdW50ID0gYWNjb3VudHNbMF07XG4gICAgICAgIHJlbW92ZVR5cGVOYW1lKGFjY291bnQpO1xuICAgICAgICB0aGlzLmNvbmZpZy5sb2coJ2dldEFjY291bnQuIEFjY291bnQgcmVjZWl2ZWQnLCBhY2NvdW50KTtcbiAgICAgICAgcmV0dXJuIGFjY291bnQ7XG4gICAgfVxuXG4gICAgYXN5bmMgaW50ZXJuYWxSdW5Mb2NhbEpzKFxuICAgICAgICBwYXJhbXM6IFRPTkNvbnRyYWN0UnVuTG9jYWxQYXJhbXMsXG4gICAgICAgIHBhcmVudFNwYW4/OiAoU3BhbiB8IFNwYW5Db250ZXh0KSxcbiAgICApOiBQcm9taXNlPFRPTkNvbnRyYWN0UnVuTG9jYWxSZXN1bHQ+IHtcbiAgICAgICAgY29uc3QgYWRkcmVzcyA9IHBhcmFtcy5hZGRyZXNzO1xuICAgICAgICBpZiAoIWFkZHJlc3MpIHtcbiAgICAgICAgICAgIHRocm93IFRPTkNsaWVudEVycm9yLmFkZHJlc3NSZXF1aXJlZEZvclJ1bkxvY2FsKCk7XG4gICAgICAgIH1cbiAgICAgICAgY29uc3QgYWNjb3VudCA9IHBhcmFtcy5hY2NvdW50IHx8IChhd2FpdCB0aGlzLmdldEFjY291bnQoXG4gICAgICAgICAgICBhZGRyZXNzLFxuICAgICAgICAgICAgZmFsc2UsXG4gICAgICAgICAgICBwYXJhbXMud2FpdFBhcmFtcyxcbiAgICAgICAgICAgIHBhcmVudFNwYW4sXG4gICAgICAgICkpO1xuICAgICAgICBpZiAoIWFjY291bnQuY29kZSkge1xuICAgICAgICAgICAgdGhyb3cgVE9OQ2xpZW50RXJyb3IuYWNjb3VudENvZGVNaXNzaW5nKGFkZHJlc3MsIChhY2NvdW50OiBhbnkpLmJhbGFuY2UpO1xuICAgICAgICB9XG4gICAgICAgIHJldHVybiB0aGlzLnJlcXVlc3RDb3JlKCdjb250cmFjdHMucnVuLmxvY2FsJywge1xuICAgICAgICAgICAgYWRkcmVzcyxcbiAgICAgICAgICAgIGFjY291bnQsXG4gICAgICAgICAgICBhYmk6IHBhcmFtcy5hYmksXG4gICAgICAgICAgICBmdW5jdGlvbk5hbWU6IHBhcmFtcy5mdW5jdGlvbk5hbWUsXG4gICAgICAgICAgICBpbnB1dDogcGFyYW1zLmlucHV0LFxuICAgICAgICAgICAga2V5UGFpcjogcGFyYW1zLmtleVBhaXIsXG4gICAgICAgICAgICBmdWxsUnVuOiBwYXJhbXMuZnVsbFJ1bixcbiAgICAgICAgfSk7XG4gICAgfVxuXG4gICAgYXN5bmMgaW50ZXJuYWxSdW5NZXNzYWdlTG9jYWxKcyhcbiAgICAgICAgcGFyYW1zOiBUT05Db250cmFjdFJ1bk1lc3NhZ2VMb2NhbFBhcmFtcyxcbiAgICAgICAgcGFyZW50U3Bhbj86IChTcGFuIHwgU3BhbkNvbnRleHQpLFxuICAgICk6IFByb21pc2U8VE9OQ29udHJhY3RSdW5Mb2NhbFJlc3VsdD4ge1xuICAgICAgICBjb25zdCBhZGRyZXNzID0gcGFyYW1zLmFkZHJlc3M7XG4gICAgICAgIGlmICghYWRkcmVzcykge1xuICAgICAgICAgICAgdGhyb3cgVE9OQ2xpZW50RXJyb3IuYWRkcmVzc1JlcXVpcmVkRm9yUnVuTG9jYWwoKTtcbiAgICAgICAgfVxuICAgICAgICBjb25zdCBhY2NvdW50ID0gcGFyYW1zLmFjY291bnQgfHwgKGF3YWl0IHRoaXMuZ2V0QWNjb3VudChcbiAgICAgICAgICAgIGFkZHJlc3MsXG4gICAgICAgICAgICBmYWxzZSxcbiAgICAgICAgICAgIHBhcmFtcy53YWl0UGFyYW1zLFxuICAgICAgICAgICAgcGFyZW50U3BhbixcbiAgICAgICAgKSk7XG4gICAgICAgIGlmICghYWNjb3VudC5jb2RlKSB7XG4gICAgICAgICAgICB0aHJvdyBUT05DbGllbnRFcnJvci5hY2NvdW50Q29kZU1pc3NpbmcoYWRkcmVzcywgKGFjY291bnQ6IGFueSkuYmFsYW5jZSk7XG4gICAgICAgIH1cbiAgICAgICAgcmV0dXJuIHRoaXMucmVxdWVzdENvcmUoJ2NvbnRyYWN0cy5ydW4ubG9jYWwubXNnJywge1xuICAgICAgICAgICAgYWRkcmVzcyxcbiAgICAgICAgICAgIGFjY291bnQsXG4gICAgICAgICAgICBhYmk6IHBhcmFtcy5hYmksXG4gICAgICAgICAgICBmdW5jdGlvbk5hbWU6IHBhcmFtcy5mdW5jdGlvbk5hbWUsXG4gICAgICAgICAgICBtZXNzYWdlQmFzZTY0OiBwYXJhbXMubWVzc2FnZUJvZHlCYXNlNjQsXG4gICAgICAgICAgICBmdWxsUnVuOiBwYXJhbXMuZnVsbFJ1bixcbiAgICAgICAgfSk7XG4gICAgfVxufVxuXG5UT05Db250cmFjdHNNb2R1bGUubW9kdWxlTmFtZSA9ICdUT05Db250cmFjdHNNb2R1bGUnO1xuXG5jb25zdCB0cmFuc2FjdGlvbkRldGFpbHMgPSBgXG4gICAgaWRcbiAgICBpbl9tc2dcbiAgICB0cl90eXBlXG4gICAgc3RhdHVzXG4gICAgaW5fbXNnXG4gICAgb3V0X21zZ3NcbiAgICBibG9ja19pZFxuICAgIG5vd1xuICAgIGFib3J0ZWRcbiAgICBsdFxuICAgIHRvdGFsX2ZlZXNcbiAgICBzdG9yYWdlIHtcbiAgICAgICAgc3RhdHVzX2NoYW5nZVxuICAgICAgICBzdG9yYWdlX2ZlZXNfY29sbGVjdGVkXG4gICAgfVxuICAgIGNvbXB1dGUge1xuICAgICAgICBjb21wdXRlX3R5cGVcbiAgICAgICAgc2tpcHBlZF9yZWFzb25cbiAgICAgICAgc3VjY2Vzc1xuICAgICAgICBleGl0X2NvZGVcbiAgICAgICAgZ2FzX2ZlZXNcbiAgICAgICAgZ2FzX3VzZWRcbiAgICB9XG4gICAgYWN0aW9uIHtcbiAgICAgICAgc3VjY2Vzc1xuICAgICAgICB2YWxpZFxuICAgICAgICByZXN1bHRfY29kZVxuICAgICAgICBub19mdW5kc1xuICAgICAgICB0b3RhbF9md2RfZmVlc1xuICAgICAgICB0b3RhbF9hY3Rpb25fZmVlc1xuICAgIH1cbiAgICBvdXRfbWVzc2FnZXMge1xuICAgICAgICBpZFxuICAgICAgICBtc2dfdHlwZVxuICAgICAgICBib2R5XG4gICAgICAgIHZhbHVlXG4gICAgfVxuICAgYDtcbiJdfQ==