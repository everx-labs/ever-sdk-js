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

        var messageId, config, processingTimeout, promises, serverInfo, operationId, transaction, sendTime, expire, blockTimeout, waitExpired, transactionNow;
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
                sendTime = Date.now() / 1000;
                _context33.prev = 12;
                expire = message.expire;

                if (expire) {
                  // calculate timeout according to `expire` value (in seconds)
                  // add processing timeout as master block validation time
                  blockTimeout = expire * 1000 - Date.now() + processingTimeout; // transaction timeout must be greater then block timeout

                  processingTimeout = blockTimeout + 10000;

                  waitExpired = /*#__PURE__*/function () {
                    var _ref5 = _asyncToGenerator( /*#__PURE__*/_regenerator["default"].mark(function _callee31() {
                      var _block$in_msg_descr$f;

                      var block, transaction_id;
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
                                result: 'id in_msg_descr { transaction_id }',
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

                              if (!_TONClient.TONClientError.isWaitforTimeout(_context31.t0)) {
                                _context31.next = 13;
                                break;
                              }

                              throw _TONClient.TONClientError.networkSilent(messageId, sendTime, expire, blockTimeout);

                            case 13:
                              throw _context31.t0;

                            case 14:
                              if (!transaction) {
                                _context31.next = 16;
                                break;
                              }

                              return _context31.abrupt("return");

                            case 16:
                              transaction_id = block.in_msg_descr && ((_block$in_msg_descr$f = block.in_msg_descr.find(function (msg) {
                                return !!msg.transaction_id;
                              })) === null || _block$in_msg_descr$f === void 0 ? void 0 : _block$in_msg_descr$f.transaction_id);

                              if (transaction_id) {
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
                                    eq: transaction_id
                                  }
                                },
                                result: 'id',
                                timeout: 5000,
                                parentSpan: parentSpan,
                                operationId: operationId
                              });

                            case 22:
                              _context31.next = 31;
                              break;

                            case 24:
                              _context31.prev = 24;
                              _context31.t1 = _context31["catch"](19);

                              if (!_TONClient.TONClientError.isWaitforTimeout(_context31.t1)) {
                                _context31.next = 30;
                                break;
                              }

                              throw _TONClient.TONClientError.transactionLag(messageId, block.id, transaction_id, 5000);

                            case 30:
                              throw _context31.t1;

                            case 31:
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
                            reject(_context32.t0);

                          case 10:
                          case "end":
                            return _context32.stop();
                        }
                      }
                    }, _callee32, null, [[0, 7]]);
                  }))();
                }));
                _context33.prev = 16;
                _context33.next = 19;
                return Promise.race(promises);

              case 19:
                _context33.prev = 19;

                if (!(promises.length > 1 && operationId)) {
                  _context33.next = 23;
                  break;
                }

                _context33.next = 23;
                return this.queries.finishOperations([operationId]);

              case 23:
                return _context33.finish(19);

              case 24:
                if (transaction) {
                  _context33.next = 26;
                  break;
                }

                throw _TONClient.TONClientError.messageExpired();

              case 26:
                transactionNow = transaction.now || 0;
                this.config.log('waitForTransaction. transaction received', {
                  id: transaction.id,
                  block_id: transaction.block_id,
                  now: "".concat(new Date(transactionNow * 1000).toISOString(), " (").concat(transactionNow, ")")
                });
                _context33.next = 36;
                break;

              case 30:
                _context33.prev = 30;
                _context33.t0 = _context33["catch"](12);
                this.config.log('waitForTransaction. Error recieved', _context33.t0, '\n Resoving');
                _context33.next = 35;
                return this.resolveDetailedError(_context33.t0, message.messageBodyBase64, messageCreationTime || Date.now(), address);

              case 35:
                throw _context33.sent;

              case 36:
                removeTypeName(transaction);
                _context33.next = 39;
                return this.checkTransaction(address, transaction, abi, functionName);

              case 39:
                return _context33.abrupt("return", transaction);

              case 40:
              case "end":
                return _context33.stop();
            }
          }
        }, _callee33, this, [[12, 30], [16,, 19, 24]]);
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy9tb2R1bGVzL1RPTkNvbnRyYWN0c01vZHVsZS5qcyJdLCJuYW1lcyI6WyJUT05BZGRyZXNzU3RyaW5nVmFyaWFudCIsIkFjY291bnRJZCIsIkhleCIsIkJhc2U2NCIsIlRPTkNsaWVudFRyYW5zYWN0aW9uUGhhc2UiLCJzdG9yYWdlIiwiY29tcHV0ZVNraXBwZWQiLCJjb21wdXRlVm0iLCJhY3Rpb24iLCJ1bmtub3duIiwiVE9OQ2xpZW50Q29tcHV0ZVNraXBwZWRTdGF0dXMiLCJub1N0YXRlIiwiYmFkU3RhdGUiLCJub0dhcyIsIlRPTkNsaWVudFN0b3JhZ2VTdGF0dXMiLCJ1bmNoYW5nZWQiLCJmcm96ZW4iLCJkZWxldGVkIiwiUUluTXNnVHlwZSIsImV4dGVybmFsIiwiaWhyIiwiaW1tZWRpYXRlbHkiLCJ0cmFuc2l0IiwiZGlzY2FyZGVkRmluYWwiLCJkaXNjYXJkZWRUcmFuc2l0IiwiUU91dE1zZ1R5cGUiLCJvdXRNc2dOZXciLCJkZXF1ZXVlSW1tZWRpYXRlbHkiLCJkZXF1ZXVlIiwidHJhbnNpdFJlcXVpcmVkIiwibm9uZSIsIlFNZXNzYWdlVHlwZSIsImludGVybmFsIiwiZXh0SW4iLCJleHRPdXQiLCJRTWVzc2FnZVByb2Nlc3NpbmdTdGF0dXMiLCJxdWV1ZWQiLCJwcm9jZXNzaW5nIiwicHJlbGltaW5hcnkiLCJwcm9wb3NlZCIsImZpbmFsaXplZCIsInJlZnVzZWQiLCJ0cmFuc2l0aW5nIiwiUUJsb2NrUHJvY2Vzc2luZ1N0YXR1cyIsIlFTcGxpdFR5cGUiLCJzcGxpdCIsIm1lcmdlIiwiUUFjY291bnRUeXBlIiwidW5pbml0IiwiYWN0aXZlIiwiUVRyYW5zYWN0aW9uVHlwZSIsIm9yZGluYXJ5IiwidGljayIsInRvY2siLCJzcGxpdFByZXBhcmUiLCJzcGxpdEluc3RhbGwiLCJtZXJnZVByZXBhcmUiLCJtZXJnZUluc3RhbGwiLCJRVHJhbnNhY3Rpb25Qcm9jZXNzaW5nU3RhdHVzIiwiUUFjY291bnRTdGF0dXMiLCJub25FeGlzdCIsIlFBY2NvdW50U3RhdHVzQ2hhbmdlIiwiUUNvbXB1dGVUeXBlIiwic2tpcHBlZCIsInZtIiwiUVNraXBSZWFzb24iLCJRQm91bmNlVHlwZSIsIm5lZ0Z1bmRzIiwibm9GdW5kcyIsIm9rIiwicmVtb3ZlVHlwZU5hbWUiLCJvYmoiLCJfX3R5cGVuYW1lIiwiT2JqZWN0IiwidmFsdWVzIiwiZm9yRWFjaCIsInZhbHVlIiwicmVtb3ZlUHJvcHMiLCJwYXRocyIsInJlc3VsdCIsInBhdGgiLCJkb3RQb3MiLCJpbmRleE9mIiwibmFtZSIsInN1YnN0ciIsImNoaWxkIiwicmVkdWNlZENoaWxkIiwiVE9OQ29udHJhY3RzTW9kdWxlIiwiY29uZmlnIiwiY29udGV4dCIsImdldE1vZHVsZSIsIlRPTkNvbmZpZ01vZHVsZSIsInF1ZXJpZXMiLCJUT05RdWVyaWVzTW9kdWxlIiwicGFyYW1zIiwicGFyZW50U3BhbiIsImFjY291bnRzIiwicXVlcnkiLCJpZCIsImVxIiwiYWRkcmVzcyIsInVuZGVmaW5lZCIsImxlbmd0aCIsImJhbGFuY2VHcmFtcyIsImJhbGFuY2UiLCJ0cmFjZSIsInNwYW4iLCJzZXRUYWciLCJpbnRlcm5hbERlcGxveUpzIiwiaW50ZXJuYWxSdW5KcyIsImludGVybmFsUnVuTG9jYWxKcyIsImludGVybmFsUnVuTWVzc2FnZUxvY2FsSnMiLCJjb3JlUGFyYW1zIiwiY29kZUJhc2U2NCIsImRhdGFCYXNlNjQiLCJUT05DbGllbnRFcnJvciIsImFkZHJlc3NSZXF1aXJlZEZvclJ1bkxvY2FsIiwiZ2V0QWNjb3VudCIsImFjY291bnQiLCJjb2RlIiwiYWNjb3VudENvZGVNaXNzaW5nIiwiZGF0YSIsInJlcXVlc3RDb3JlIiwiY29ucyIsIml0ZW0iLCJpbnZhbGlkQ29ucyIsInB1c2giLCJyZXRyeUluZGV4IiwibG9nIiwiY29uc3RydWN0b3JIZWFkZXIiLCJtYWtlRXhwaXJlSGVhZGVyIiwiYWJpIiwiY29uc3RydWN0b3JQYXJhbXMiLCJpbml0UGFyYW1zIiwiaW1hZ2VCYXNlNjQiLCJrZXlQYWlyIiwid29ya2NoYWluSWQiLCJtZXNzYWdlIiwibWVzc2FnZUlkIiwibWVzc2FnZUJvZHlCYXNlNjQiLCJleHBpcmUiLCJjcmVhdGlvblRpbWUiLCJEYXRlIiwibm93IiwiaGVhZGVyIiwiZnVuY3Rpb25OYW1lIiwiaW5wdXQiLCJwdWJsaWNLZXlIZXgiLCJhZGRyZXNzSGV4Iiwic2lnblBhcmFtcyIsImVuY29kZWQiLCJjcmVhdGVTaWduZWRNZXNzYWdlIiwidW5zaWduZWRNZXNzYWdlIiwidW5zaWduZWRCeXRlc0Jhc2U2NCIsInNpZ25CeXRlc0Jhc2U2NCIsImdldEJvY0hhc2giLCJib2NCYXNlNjQiLCJoYXNoIiwic2VuZE5vZGVSZXF1ZXN0RmFpbGVkIiwiTWF0aCIsInNlcnZlclRpbWVEZWx0YSIsImFicyIsIm91dE9mU3luY1RocmVzaG9sZCIsImRyb3BTZXJ2ZXJUaW1lRGVsdGEiLCJjbG9ja091dE9mU3luYyIsImdldE1lc3NhZ2VJZCIsImlkQmFzZTY0IiwiQnVmZmVyIiwiZnJvbSIsInRvU3RyaW5nIiwicG9zdFJlcXVlc3RzIiwiYm9keSIsInJlc3VsdEZpZWxkcyIsIm1lc3NhZ2VDcmVhdGlvblRpbWUiLCJzZW5kTWVzc2FnZSIsIndhaXRGb3JUcmFuc2FjdGlvbiIsInByb2Nlc3NpbmdUaW1lb3V0IiwibWVzc2FnZVByb2Nlc3NpbmdUaW1lb3V0IiwicHJvbWlzZXMiLCJnZXRTZXJ2ZXJJbmZvIiwic2VydmVySW5mbyIsIm9wZXJhdGlvbklkIiwic3VwcG9ydHNPcGVyYXRpb25JZCIsImdlbmVyYXRlT3BlcmF0aW9uSWQiLCJ0cmFuc2FjdGlvbiIsInNlbmRUaW1lIiwiYmxvY2tUaW1lb3V0Iiwid2FpdEV4cGlyZWQiLCJibG9jayIsImJsb2NrcyIsIndhaXRGb3IiLCJmaWx0ZXIiLCJtYXN0ZXIiLCJtaW5fc2hhcmRfZ2VuX3V0aW1lIiwiZ2UiLCJ0aW1lb3V0IiwiaXNXYWl0Zm9yVGltZW91dCIsIm5ldHdvcmtTaWxlbnQiLCJ0cmFuc2FjdGlvbl9pZCIsImluX21zZ19kZXNjciIsImZpbmQiLCJtc2ciLCJpbnRlcm5hbEVycm9yIiwidHJhbnNhY3Rpb25zIiwidHJhbnNhY3Rpb25MYWciLCJQcm9taXNlIiwicmVzb2x2ZSIsInJlamVjdCIsImluX21zZyIsInN0YXR1cyIsInJhY2UiLCJmaW5pc2hPcGVyYXRpb25zIiwibWVzc2FnZUV4cGlyZWQiLCJ0cmFuc2FjdGlvbk5vdyIsImJsb2NrX2lkIiwidG9JU09TdHJpbmciLCJyZXNvbHZlRGV0YWlsZWRFcnJvciIsImNoZWNrVHJhbnNhY3Rpb24iLCJhY2NvdW50TWlzc2luZyIsImlzQ29udHJhY3RFcnJvciIsIlRPTkNvbnRyYWN0RXhpdENvZGUiLCJOT19HQVMiLCJhY2NvdW50QmFsYW5jZVRvb0xvdyIsImVycm9yIiwibWVzc2FnZUJhc2U2NCIsInRpbWUiLCJyb3VuZCIsIm1haW5FcnJvciIsImFjY190eXBlIiwiaXNEZXBsb3llZCIsImFscmVhZHlEZXBsb3llZCIsIndhaXRGb3JEZXBsb3lUcmFuc2FjdGlvbiIsImRlcGxveU1lc3NhZ2UiLCJ0cmFuc2FjdGlvbkRldGFpbHMiLCJydW5NZXNzYWdlIiwid2FpdEZvclJ1blRyYW5zYWN0aW9uIiwib3V0cHV0TWVzc2FnZXMiLCJvdXRfbWVzc2FnZXMiLCJvdXRwdXQiLCJleHRlcm5hbE1lc3NhZ2VzIiwieCIsIm1zZ190eXBlIiwiYWxsIiwibWFwIiwiZGVjb2RlT3V0cHV0TWVzc2FnZUJvZHkiLCJib2R5QmFzZTY0Iiwib3V0cHV0cyIsInJlc3VsdE91dHB1dCIsInRvTG93ZXJDYXNlIiwid2FpdFBhcmFtcyIsImVtdWxhdGVCYWxhbmNlIiwiYmlnQmFsYW5jZSIsImNyZWF0ZURlcGxveU1lc3NhZ2UiLCJjYWxjTXNnUHJvY2Vzc0ZlZXMiLCJuZXdBY2NvdW50IiwibGFzdF9wYWlkIiwiZmxvb3IiLCJ1c2VySGVhZGVyIiwibWVzc2FnZUV4cGlyYXRpb25UaW1lb3V0IiwiaW5jbHVkZXMiLCJjYWxsIiwicmV0cmllc0NvdW50IiwibWVzc2FnZVJldHJpZXNDb3VudCIsImkiLCJ1c2VSZXRyeSIsIlRPTkVycm9yQ29kZSIsIk1FU1NBR0VfRVhQSVJFRCIsIlJFUExBWV9QUk9URUNUSU9OIiwicmV0cnlDYWxsIiwiY3JlYXRlUnVuTWVzc2FnZSIsInRyYW5zYWN0aW9uTHQiLCJsYXN0X3RyYW5zX2x0IiwiZnVsbFJ1biIsIlRPTk1vZHVsZSIsIm1vZHVsZU5hbWUiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7QUFLQTs7QUFrREE7O0FBQ0E7O0FBQ0E7O0FBQ0E7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUVPLElBQU1BLHVCQUF1QixHQUFHO0FBQ25DQyxFQUFBQSxTQUFTLEVBQUUsV0FEd0I7QUFFbkNDLEVBQUFBLEdBQUcsRUFBRSxLQUY4QjtBQUduQ0MsRUFBQUEsTUFBTSxFQUFFO0FBSDJCLENBQWhDOztBQU1BLElBQU1DLHlCQUF5QixHQUFHO0FBQ3JDQyxFQUFBQSxPQUFPLEVBQUUsU0FENEI7QUFFckNDLEVBQUFBLGNBQWMsRUFBRSxnQkFGcUI7QUFHckNDLEVBQUFBLFNBQVMsRUFBRSxXQUgwQjtBQUlyQ0MsRUFBQUEsTUFBTSxFQUFFLFFBSjZCO0FBS3JDQyxFQUFBQSxPQUFPLEVBQUU7QUFMNEIsQ0FBbEM7O0FBUUEsSUFBTUMsNkJBQTZCLEdBQUc7QUFDekNDLEVBQUFBLE9BQU8sRUFBRSxDQURnQztBQUV6Q0MsRUFBQUEsUUFBUSxFQUFFLENBRitCO0FBR3pDQyxFQUFBQSxLQUFLLEVBQUU7QUFIa0MsQ0FBdEM7O0FBTUEsSUFBTUMsc0JBQXNCLEdBQUc7QUFDbENDLEVBQUFBLFNBQVMsRUFBRSxDQUR1QjtBQUVsQ0MsRUFBQUEsTUFBTSxFQUFFLENBRjBCO0FBR2xDQyxFQUFBQSxPQUFPLEVBQUU7QUFIeUIsQ0FBL0I7O0FBTUEsSUFBTUMsVUFBVSxHQUFHO0FBQ3RCQyxFQUFBQSxRQUFRLEVBQUUsQ0FEWTtBQUV0QkMsRUFBQUEsR0FBRyxFQUFFLENBRmlCO0FBR3RCQyxFQUFBQSxXQUFXLEVBQUUsQ0FIUztBQUl0QixXQUFPLENBSmU7QUFLdEJDLEVBQUFBLE9BQU8sRUFBRSxDQUxhO0FBTXRCQyxFQUFBQSxjQUFjLEVBQUUsQ0FOTTtBQU90QkMsRUFBQUEsZ0JBQWdCLEVBQUU7QUFQSSxDQUFuQjs7QUFVQSxJQUFNQyxXQUFXLEdBQUc7QUFDdkJOLEVBQUFBLFFBQVEsRUFBRSxDQURhO0FBRXZCRSxFQUFBQSxXQUFXLEVBQUUsQ0FGVTtBQUd2QkssRUFBQUEsU0FBUyxFQUFFLENBSFk7QUFJdkJKLEVBQUFBLE9BQU8sRUFBRSxDQUpjO0FBS3ZCSyxFQUFBQSxrQkFBa0IsRUFBRSxDQUxHO0FBTXZCQyxFQUFBQSxPQUFPLEVBQUUsQ0FOYztBQU92QkMsRUFBQUEsZUFBZSxFQUFFLENBUE07QUFRdkJDLEVBQUFBLElBQUksRUFBRSxDQUFDO0FBUmdCLENBQXBCOztBQVdBLElBQU1DLFlBQVksR0FBRztBQUN4QkMsRUFBQUEsUUFBUSxFQUFFLENBRGM7QUFFeEJDLEVBQUFBLEtBQUssRUFBRSxDQUZpQjtBQUd4QkMsRUFBQUEsTUFBTSxFQUFFO0FBSGdCLENBQXJCOztBQU1BLElBQU1DLHdCQUF3QixHQUFHO0FBQ3BDMUIsRUFBQUEsT0FBTyxFQUFFLENBRDJCO0FBRXBDMkIsRUFBQUEsTUFBTSxFQUFFLENBRjRCO0FBR3BDQyxFQUFBQSxVQUFVLEVBQUUsQ0FId0I7QUFJcENDLEVBQUFBLFdBQVcsRUFBRSxDQUp1QjtBQUtwQ0MsRUFBQUEsUUFBUSxFQUFFLENBTDBCO0FBTXBDQyxFQUFBQSxTQUFTLEVBQUUsQ0FOeUI7QUFPcENDLEVBQUFBLE9BQU8sRUFBRSxDQVAyQjtBQVFwQ0MsRUFBQUEsVUFBVSxFQUFFO0FBUndCLENBQWpDOztBQVdBLElBQU1DLHNCQUFzQixHQUFHO0FBQ2xDbEMsRUFBQUEsT0FBTyxFQUFFLENBRHlCO0FBRWxDOEIsRUFBQUEsUUFBUSxFQUFFLENBRndCO0FBR2xDQyxFQUFBQSxTQUFTLEVBQUUsQ0FIdUI7QUFJbENDLEVBQUFBLE9BQU8sRUFBRTtBQUp5QixDQUEvQjs7QUFPQSxJQUFNRyxVQUFVLEdBQUc7QUFDdEJkLEVBQUFBLElBQUksRUFBRSxDQURnQjtBQUV0QmUsRUFBQUEsS0FBSyxFQUFFLENBRmU7QUFHdEJDLEVBQUFBLEtBQUssRUFBRTtBQUhlLENBQW5COztBQU1BLElBQU1DLFlBQVksR0FBRztBQUN4QkMsRUFBQUEsTUFBTSxFQUFFLENBRGdCO0FBRXhCQyxFQUFBQSxNQUFNLEVBQUUsQ0FGZ0I7QUFHeEJqQyxFQUFBQSxNQUFNLEVBQUU7QUFIZ0IsQ0FBckI7O0FBTUEsSUFBTWtDLGdCQUFnQixHQUFHO0FBQzVCQyxFQUFBQSxRQUFRLEVBQUUsQ0FEa0I7QUFFNUI5QyxFQUFBQSxPQUFPLEVBQUUsQ0FGbUI7QUFHNUIrQyxFQUFBQSxJQUFJLEVBQUUsQ0FIc0I7QUFJNUJDLEVBQUFBLElBQUksRUFBRSxDQUpzQjtBQUs1QkMsRUFBQUEsWUFBWSxFQUFFLENBTGM7QUFNNUJDLEVBQUFBLFlBQVksRUFBRSxDQU5jO0FBTzVCQyxFQUFBQSxZQUFZLEVBQUUsQ0FQYztBQVE1QkMsRUFBQUEsWUFBWSxFQUFFO0FBUmMsQ0FBekI7O0FBV0EsSUFBTUMsNEJBQTRCLEdBQUc7QUFDeENqRCxFQUFBQSxPQUFPLEVBQUUsQ0FEK0I7QUFFeEM2QixFQUFBQSxXQUFXLEVBQUUsQ0FGMkI7QUFHeENDLEVBQUFBLFFBQVEsRUFBRSxDQUg4QjtBQUl4Q0MsRUFBQUEsU0FBUyxFQUFFLENBSjZCO0FBS3hDQyxFQUFBQSxPQUFPLEVBQUU7QUFMK0IsQ0FBckM7O0FBUUEsSUFBTWtCLGNBQWMsR0FBRztBQUMxQlgsRUFBQUEsTUFBTSxFQUFFLENBRGtCO0FBRTFCQyxFQUFBQSxNQUFNLEVBQUUsQ0FGa0I7QUFHMUJqQyxFQUFBQSxNQUFNLEVBQUUsQ0FIa0I7QUFJMUI0QyxFQUFBQSxRQUFRLEVBQUU7QUFKZ0IsQ0FBdkI7O0FBT0EsSUFBTUMsb0JBQW9CLEdBQUc7QUFDaEM5QyxFQUFBQSxTQUFTLEVBQUUsQ0FEcUI7QUFFaENDLEVBQUFBLE1BQU0sRUFBRSxDQUZ3QjtBQUdoQ0MsRUFBQUEsT0FBTyxFQUFFO0FBSHVCLENBQTdCOztBQU1BLElBQU02QyxZQUFZLEdBQUc7QUFDeEJDLEVBQUFBLE9BQU8sRUFBRSxDQURlO0FBRXhCQyxFQUFBQSxFQUFFLEVBQUU7QUFGb0IsQ0FBckI7O0FBS0EsSUFBTUMsV0FBVyxHQUFHO0FBQ3ZCdEQsRUFBQUEsT0FBTyxFQUFFLENBRGM7QUFFdkJDLEVBQUFBLFFBQVEsRUFBRSxDQUZhO0FBR3ZCQyxFQUFBQSxLQUFLLEVBQUU7QUFIZ0IsQ0FBcEI7O0FBTUEsSUFBTXFELFdBQVcsR0FBRztBQUN2QkMsRUFBQUEsUUFBUSxFQUFFLENBRGE7QUFFdkJDLEVBQUFBLE9BQU8sRUFBRSxDQUZjO0FBR3ZCQyxFQUFBQSxFQUFFLEVBQUU7QUFIbUIsQ0FBcEI7OztBQU1QLFNBQVNDLGNBQVQsQ0FBd0JDLEdBQXhCLEVBQWtDO0FBQzlCLE1BQUlBLEdBQUcsQ0FBQ0MsVUFBUixFQUFvQjtBQUNoQixXQUFPRCxHQUFHLENBQUNDLFVBQVg7QUFDSDs7QUFDREMsRUFBQUEsTUFBTSxDQUFDQyxNQUFQLENBQWNILEdBQWQsRUFDS0ksT0FETCxDQUNhLFVBQUNDLEtBQUQsRUFBVztBQUNoQixRQUFJLENBQUMsQ0FBQ0EsS0FBRixJQUFXLFFBQU9BLEtBQVAsTUFBaUIsUUFBaEMsRUFBMEM7QUFDdENOLE1BQUFBLGNBQWMsQ0FBQ00sS0FBRCxDQUFkO0FBQ0g7QUFDSixHQUxMO0FBTUg7O0FBRU0sU0FBU0MsV0FBVCxDQUFxQk4sR0FBckIsRUFBOEJPLEtBQTlCLEVBQW1EO0FBQ3RELE1BQUlDLE1BQU0sR0FBR1IsR0FBYjtBQUNBTyxFQUFBQSxLQUFLLENBQUNILE9BQU4sQ0FBYyxVQUFDSyxJQUFELEVBQVU7QUFDcEIsUUFBTUMsTUFBTSxHQUFHRCxJQUFJLENBQUNFLE9BQUwsQ0FBYSxHQUFiLENBQWY7O0FBQ0EsUUFBSUQsTUFBTSxHQUFHLENBQWIsRUFBZ0I7QUFDWixVQUFJRCxJQUFJLElBQUlELE1BQVosRUFBb0I7QUFDaEJBLFFBQUFBLE1BQU0scUJBQVFBLE1BQVIsQ0FBTjtBQUNBLGVBQU9BLE1BQU0sQ0FBQ0MsSUFBRCxDQUFiO0FBQ0g7QUFDSixLQUxELE1BS087QUFDSCxVQUFNRyxJQUFJLEdBQUdILElBQUksQ0FBQ0ksTUFBTCxDQUFZLENBQVosRUFBZUgsTUFBZixDQUFiO0FBQ0EsVUFBTUksS0FBSyxHQUFHTixNQUFNLENBQUNJLElBQUQsQ0FBcEI7O0FBQ0EsVUFBSUUsS0FBSixFQUFXO0FBQ1AsWUFBTUMsWUFBWSxHQUFHVCxXQUFXLENBQUNRLEtBQUQsRUFBUSxDQUFDTCxJQUFJLENBQUNJLE1BQUwsQ0FBWUgsTUFBTSxHQUFHLENBQXJCLENBQUQsQ0FBUixDQUFoQzs7QUFDQSxZQUFJSyxZQUFZLEtBQUtELEtBQXJCLEVBQTRCO0FBQ3hCTixVQUFBQSxNQUFNLG1DQUNDQSxNQURELDJCQUVESSxJQUZDLEVBRU1HLFlBRk4sRUFBTjtBQUlIO0FBQ0o7QUFDSjtBQUNKLEdBcEJEO0FBcUJBLFNBQU9QLE1BQVA7QUFDSDs7SUFFb0JRLGtCOzs7Ozs7Ozs7Ozs7Ozs7Ozs7OztpRUE2dEJKLGtCOzs7Ozs7Ozs7Ozs7O0FBdnRCVCxxQkFBS0MsTUFBTCxHQUFjLEtBQUtDLE9BQUwsQ0FBYUMsU0FBYixDQUF1QkMsMkJBQXZCLENBQWQ7QUFDQSxxQkFBS0MsT0FBTCxHQUFlLEtBQUtILE9BQUwsQ0FBYUMsU0FBYixDQUF1QkcsNEJBQXZCLENBQWY7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7aUdBSUFDLE0sRUFDQUMsVTs7Ozs7Ozt1QkFFbUMsS0FBS0gsT0FBTCxDQUFhSSxRQUFiLENBQXNCQyxLQUF0QixDQUE0QjtBQUMzREMsa0JBQUFBLEVBQUUsRUFBRTtBQUFFQyxvQkFBQUEsRUFBRSxFQUFFTCxNQUFNLENBQUNNO0FBQWI7QUFEdUQsaUJBQTVCLEVBRWhDLFNBRmdDLEVBRXJCQyxTQUZxQixFQUVWQSxTQUZVLEVBRUNBLFNBRkQsRUFFWU4sVUFGWixDOzs7QUFBN0JDLGdCQUFBQSxROztzQkFHRkEsUUFBUSxJQUFJQSxRQUFRLENBQUNNLE1BQVQsR0FBa0IsQzs7Ozs7a0RBQ3ZCO0FBQ0hKLGtCQUFBQSxFQUFFLEVBQUVKLE1BQU0sQ0FBQ00sT0FEUjtBQUVIRyxrQkFBQUEsWUFBWSxFQUFFUCxRQUFRLENBQUMsQ0FBRCxDQUFSLENBQVlRO0FBRnZCLGlCOzs7a0RBS0o7QUFDSE4sa0JBQUFBLEVBQUUsRUFBRSxJQUREO0FBRUhLLGtCQUFBQSxZQUFZLEVBQUU7QUFGWCxpQjs7Ozs7Ozs7Ozs7Ozs7O1FBT1g7Ozs7O21HQUdJVCxNLEVBQ0FDLFU7Ozs7Ozs7a0RBRU8sS0FBS04sT0FBTCxDQUFhZ0IsS0FBYixDQUFtQixrQkFBbkI7QUFBQSwwRkFBdUMsa0JBQU9DLElBQVA7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUMxQ0EsNEJBQUFBLElBQUksQ0FBQ0MsTUFBTCxDQUFZLFFBQVosRUFBc0I5QixXQUFXLENBQUNpQixNQUFELEVBQVMsQ0FBQyxnQkFBRCxDQUFULENBQWpDO0FBRDBDLDhEQUVuQyxNQUFJLENBQUNjLGdCQUFMLENBQXNCZCxNQUF0QixFQUE4QlksSUFBOUIsQ0FGbUM7O0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsbUJBQXZDOztBQUFBO0FBQUE7QUFBQTtBQUFBLHFCQUdKWCxVQUhJLEM7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Z0dBUVBELE0sRUFDQUMsVTs7Ozs7OztrREFFTyxLQUFLTixPQUFMLENBQWFnQixLQUFiLENBQW1CLGVBQW5CO0FBQUEsMkZBQW9DLGtCQUFPQyxJQUFQO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFDdkNBLDRCQUFBQSxJQUFJLENBQUNDLE1BQUwsQ0FBWSxRQUFaLEVBQXNCOUIsV0FBVyxDQUFDaUIsTUFBRCxFQUFTLENBQUMsZ0JBQUQsQ0FBVCxDQUFqQztBQUR1Qyw4REFFaEMsTUFBSSxDQUFDZSxhQUFMLENBQW1CZixNQUFuQixFQUEyQlksSUFBM0IsQ0FGZ0M7O0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsbUJBQXBDOztBQUFBO0FBQUE7QUFBQTtBQUFBLHFCQUdKWCxVQUhJLEM7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7cUdBT1BELE0sRUFDQUMsVTs7Ozs7OztrREFFTyxLQUFLTixPQUFMLENBQWFnQixLQUFiLENBQW1CLG9CQUFuQjtBQUFBLDJGQUF5QyxrQkFBT0MsSUFBUDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQzVDQSw0QkFBQUEsSUFBSSxDQUFDQyxNQUFMLENBQVksUUFBWixFQUFzQjlCLFdBQVcsQ0FBQ2lCLE1BQUQsRUFBUyxDQUFDLGdCQUFELENBQVQsQ0FBakM7QUFENEMsOERBRXJDLE1BQUksQ0FBQ2dCLGtCQUFMLENBQXdCaEIsTUFBeEIsRUFBZ0NZLElBQWhDLENBRnFDOztBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLG1CQUF6Qzs7QUFBQTtBQUFBO0FBQUE7QUFBQSxxQkFHSlgsVUFISSxDOzs7Ozs7Ozs7Ozs7Ozs7Ozs7OzZHQU9QRCxNLEVBQ0FDLFU7Ozs7Ozs7bURBRU8sS0FBS04sT0FBTCxDQUFhZ0IsS0FBYixDQUFtQixpQkFBbkI7QUFBQSwyRkFBc0Msa0JBQU9DLElBQVA7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUN6Q0EsNEJBQUFBLElBQUksQ0FBQ0MsTUFBTCxDQUFZLFFBQVosRUFBc0I5QixXQUFXLENBQUNpQixNQUFELEVBQVMsQ0FBQyxnQkFBRCxDQUFULENBQWpDO0FBRHlDLDhEQUVsQyxNQUFJLENBQUNpQix5QkFBTCxDQUErQmpCLE1BQS9CLEVBQXVDWSxJQUF2QyxDQUZrQzs7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxtQkFBdEM7O0FBQUE7QUFBQTtBQUFBO0FBQUEscUJBR0pYLFVBSEksQzs7Ozs7Ozs7Ozs7Ozs7Ozs7OztvR0FPUEQsTTs7Ozs7O0FBRUlrQixnQkFBQUEsVSxHQUFzQ2xCLE07O3NCQUN0QyxDQUFDQSxNQUFNLENBQUNtQixVQUFSLElBQXNCLENBQUNuQixNQUFNLENBQUNvQixVOzs7OztBQUN4QmQsZ0JBQUFBLE8sR0FBVU4sTUFBTSxDQUFDTSxPOztvQkFDbEJBLE87Ozs7O3NCQUNLZSwwQkFBZUMsMEJBQWYsRTs7Ozt1QkFFaUIsS0FBS0MsVUFBTCxDQUFnQmpCLE9BQWhCLEVBQXlCLEtBQXpCLEM7OztBQUFyQmtCLGdCQUFBQSxPOztvQkFDREEsT0FBTyxDQUFDQyxJOzs7OztzQkFDSEosMEJBQWVLLGtCQUFmLENBQWtDcEIsT0FBbEMsRUFBMkNrQixPQUFPLENBQUNkLE9BQW5ELEM7OztBQUVWYyxnQkFBQUEsT0FBTyxDQUFDTCxVQUFSLEdBQXFCSyxPQUFPLENBQUNDLElBQTdCO0FBQ0FELGdCQUFBQSxPQUFPLENBQUNKLFVBQVIsR0FBcUJJLE9BQU8sQ0FBQ0csSUFBN0I7QUFDQSx1QkFBT0gsT0FBTyxDQUFDQyxJQUFmO0FBQ0EsdUJBQU9ELE9BQU8sQ0FBQ0csSUFBZjtBQUNBVCxnQkFBQUEsVUFBVSxtQ0FDSE0sT0FERyxHQUVIeEIsTUFGRyxDQUFWOzs7bURBS0csS0FBSzRCLFdBQUwsQ0FBaUIsU0FBakIsRUFBNEJWLFVBQTVCLEM7Ozs7Ozs7Ozs7Ozs7Ozs7OztrQ0FHR1csSSxFQUFvQjtBQUM5QixVQUFNNUMsTUFBTSxHQUFHLEVBQWY7QUFDQSxVQUFJNkMsSUFBSSxHQUFHRCxJQUFYOztBQUNBLGFBQU9DLElBQVAsRUFBYTtBQUNULFlBQUksQ0FBQ0EsSUFBSSxDQUFDdEIsTUFBTixLQUFpQixDQUFyQixFQUF3QjtBQUNwQixnQkFBTWEsMEJBQWVVLFdBQWYsRUFBTjtBQUNIOztBQUNEOUMsUUFBQUEsTUFBTSxDQUFDK0MsSUFBUCxDQUFZRixJQUFJLENBQUMsQ0FBRCxDQUFoQjtBQUNBQSxRQUFBQSxJQUFJLEdBQUdBLElBQUksQ0FBQyxDQUFELENBQVg7QUFDSDs7QUFDRCxhQUFPN0MsTUFBUDtBQUNILEssQ0FHRDs7Ozs7aUhBR0llLE0sRUFDQWlDLFU7Ozs7OztBQUVBLHFCQUFLdkMsTUFBTCxDQUFZd0MsR0FBWixDQUFnQixxQkFBaEIsRUFBdUNsQyxNQUF2QztBQUNNbUMsZ0JBQUFBLGlCLEdBQW9CLEtBQUtDLGdCQUFMLENBQ3RCcEMsTUFBTSxXQUFOLENBQWVxQyxHQURPLEVBRXRCckMsTUFBTSxDQUFDbUMsaUJBRmUsRUFHdEJGLFVBSHNCLEM7O3VCQVNoQixLQUFLTCxXQUFMLENBQWlCLDBCQUFqQixFQUE2QztBQUNuRFMsa0JBQUFBLEdBQUcsRUFBRXJDLE1BQU0sV0FBTixDQUFlcUMsR0FEK0I7QUFFbkRGLGtCQUFBQSxpQkFBaUIsRUFBakJBLGlCQUZtRDtBQUduREcsa0JBQUFBLGlCQUFpQixFQUFFdEMsTUFBTSxDQUFDc0MsaUJBSHlCO0FBSW5EQyxrQkFBQUEsVUFBVSxFQUFFdkMsTUFBTSxDQUFDdUMsVUFKZ0M7QUFLbkRDLGtCQUFBQSxXQUFXLEVBQUV4QyxNQUFNLFdBQU4sQ0FBZXdDLFdBTHVCO0FBTW5EQyxrQkFBQUEsT0FBTyxFQUFFekMsTUFBTSxDQUFDeUMsT0FObUM7QUFPbkRDLGtCQUFBQSxXQUFXLEVBQUUxQyxNQUFNLENBQUMwQztBQVArQixpQkFBN0MsQzs7O0FBSkpDLGdCQUFBQSxPO21EQWFDO0FBQ0hBLGtCQUFBQSxPQUFPLEVBQUU7QUFDTEMsb0JBQUFBLFNBQVMsRUFBRUQsT0FBTyxDQUFDQyxTQURkO0FBRUxDLG9CQUFBQSxpQkFBaUIsRUFBRUYsT0FBTyxDQUFDRSxpQkFGdEI7QUFHTEMsb0JBQUFBLE1BQU0sRUFBRVgsaUJBQUYsYUFBRUEsaUJBQUYsdUJBQUVBLGlCQUFpQixDQUFFVztBQUh0QixtQkFETjtBQU1IeEMsa0JBQUFBLE9BQU8sRUFBRXFDLE9BQU8sQ0FBQ3JDLE9BTmQ7QUFPSHlDLGtCQUFBQSxZQUFZLEVBQUVDLElBQUksQ0FBQ0MsR0FBTDtBQVBYLGlCOzs7Ozs7Ozs7Ozs7Ozs7Ozs7OzhHQWFQakQsTSxFQUNBaUMsVTs7Ozs7O0FBRUEscUJBQUt2QyxNQUFMLENBQVl3QyxHQUFaLENBQWdCLGtCQUFoQixFQUFvQ2xDLE1BQXBDO0FBQ01rRCxnQkFBQUEsTSxHQUFTLEtBQUtkLGdCQUFMLENBQ1hwQyxNQUFNLENBQUNxQyxHQURJLEVBRVhyQyxNQUFNLENBQUNrRCxNQUZJLEVBR1hqQixVQUhXLEM7O3VCQUtPLEtBQUtMLFdBQUwsQ0FBaUIsdUJBQWpCLEVBQTBDO0FBQzVEdEIsa0JBQUFBLE9BQU8sRUFBRU4sTUFBTSxDQUFDTSxPQUQ0QztBQUU1RCtCLGtCQUFBQSxHQUFHLEVBQUVyQyxNQUFNLENBQUNxQyxHQUZnRDtBQUc1RGMsa0JBQUFBLFlBQVksRUFBRW5ELE1BQU0sQ0FBQ21ELFlBSHVDO0FBSTVERCxrQkFBQUEsTUFBTSxFQUFOQSxNQUo0RDtBQUs1REUsa0JBQUFBLEtBQUssRUFBRXBELE1BQU0sQ0FBQ29ELEtBTDhDO0FBTTVEWCxrQkFBQUEsT0FBTyxFQUFFekMsTUFBTSxDQUFDeUM7QUFONEMsaUJBQTFDLEM7OztBQUFoQkUsZ0JBQUFBLE87QUFRTkEsZ0JBQUFBLE9BQU8sQ0FBQ0csTUFBUixHQUFpQkksTUFBakIsYUFBaUJBLE1BQWpCLHVCQUFpQkEsTUFBTSxDQUFFSixNQUF6QjttREFDTztBQUNIeEMsa0JBQUFBLE9BQU8sRUFBRU4sTUFBTSxDQUFDTSxPQURiO0FBRUgrQixrQkFBQUEsR0FBRyxFQUFFckMsTUFBTSxDQUFDcUMsR0FGVDtBQUdIYyxrQkFBQUEsWUFBWSxFQUFFbkQsTUFBTSxDQUFDbUQsWUFIbEI7QUFJSFIsa0JBQUFBLE9BQU8sRUFBUEEsT0FKRztBQUtISSxrQkFBQUEsWUFBWSxFQUFFQyxJQUFJLENBQUNDLEdBQUw7QUFMWCxpQjs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozt5SEFVUGpELE0sRUFDQWlDLFU7Ozs7OztBQUVNRSxnQkFBQUEsaUIsR0FBb0IsS0FBS0MsZ0JBQUwsQ0FDdEJwQyxNQUFNLFdBQU4sQ0FBZXFDLEdBRE8sRUFFdEJyQyxNQUFNLENBQUNtQyxpQkFGZSxFQUd0QkYsVUFIc0IsQzs7dUJBUWhCLEtBQUtMLFdBQUwsQ0FBaUIsMENBQWpCLEVBQTZEO0FBQ25FUyxrQkFBQUEsR0FBRyxFQUFFckMsTUFBTSxXQUFOLENBQWVxQyxHQUQrQztBQUVuRUYsa0JBQUFBLGlCQUFpQixFQUFqQkEsaUJBRm1FO0FBR25FRyxrQkFBQUEsaUJBQWlCLEVBQUV0QyxNQUFNLENBQUNzQyxpQkFIeUM7QUFJbkVDLGtCQUFBQSxVQUFVLEVBQUV2QyxNQUFNLENBQUN1QyxVQUpnRDtBQUtuRUMsa0JBQUFBLFdBQVcsRUFBRXhDLE1BQU0sV0FBTixDQUFld0MsV0FMdUM7QUFNbkVhLGtCQUFBQSxZQUFZLEVBQUVyRCxNQUFNLENBQUN5QyxPQUFQLFVBTnFEO0FBT25FQyxrQkFBQUEsV0FBVyxFQUFFMUMsTUFBTSxDQUFDMEM7QUFQK0MsaUJBQTdELEM7OztBQUhKekQsZ0JBQUFBLE07bURBWUM7QUFDSHFCLGtCQUFBQSxPQUFPLEVBQUVyQixNQUFNLENBQUNxRSxVQURiO0FBRUhDLGtCQUFBQSxVQUFVLGtDQUNIdEUsTUFBTSxDQUFDdUUsT0FESjtBQUVObkIsb0JBQUFBLEdBQUcsRUFBRXJDLE1BQU0sV0FBTixDQUFlcUMsR0FGZDtBQUdOUyxvQkFBQUEsTUFBTSxFQUFFWCxpQkFBRixhQUFFQSxpQkFBRix1QkFBRUEsaUJBQWlCLENBQUVXO0FBSHJCO0FBRlAsaUI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7c0hBWVA5QyxNLEVBQ0FpQyxVOzs7Ozs7QUFFTWlCLGdCQUFBQSxNLEdBQVMsS0FBS2QsZ0JBQUwsQ0FDWHBDLE1BQU0sQ0FBQ3FDLEdBREksRUFFWHJDLE1BQU0sQ0FBQ2tELE1BRkksRUFHWGpCLFVBSFcsQzs7dUJBS1UsS0FBS0wsV0FBTCxDQUFpQix1Q0FBakIsRUFBMEQ7QUFDL0V0QixrQkFBQUEsT0FBTyxFQUFFTixNQUFNLENBQUNNLE9BRCtEO0FBRS9FK0Isa0JBQUFBLEdBQUcsRUFBRXJDLE1BQU0sQ0FBQ3FDLEdBRm1FO0FBRy9FYyxrQkFBQUEsWUFBWSxFQUFFbkQsTUFBTSxDQUFDbUQsWUFIMEQ7QUFJL0VELGtCQUFBQSxNQUFNLEVBQU5BLE1BSitFO0FBSy9FRSxrQkFBQUEsS0FBSyxFQUFFcEQsTUFBTSxDQUFDb0Q7QUFMaUUsaUJBQTFELEM7OztBQUFuQkcsZ0JBQUFBLFU7bURBT0M7QUFDSGpELGtCQUFBQSxPQUFPLEVBQUVOLE1BQU0sQ0FBQ00sT0FEYjtBQUVINkMsa0JBQUFBLFlBQVksRUFBRW5ELE1BQU0sQ0FBQ21ELFlBRmxCO0FBR0hJLGtCQUFBQSxVQUFVLGtDQUNIQSxVQURHO0FBRU5sQixvQkFBQUEsR0FBRyxFQUFFckMsTUFBTSxDQUFDcUMsR0FGTjtBQUdOUyxvQkFBQUEsTUFBTSxFQUFFSSxNQUFGLGFBQUVBLE1BQUYsdUJBQUVBLE1BQU0sQ0FBRUo7QUFIVjtBQUhQLGlCOzs7Ozs7Ozs7Ozs7Ozs7Ozs7O2lIQWFQOUMsTTs7Ozs7bURBRU8sS0FBSzRCLFdBQUwsQ0FBaUIsb0NBQWpCLEVBQXVENUIsTUFBdkQsQzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozt1SEFLUEEsTTs7Ozs7Ozt1QkFFc0IsS0FBS3lELG1CQUFMLENBQXlCO0FBQzNDcEIsa0JBQUFBLEdBQUcsRUFBRXJDLE1BQU0sQ0FBQzBELGVBQVAsQ0FBdUJILFVBQXZCLENBQWtDbEIsR0FESTtBQUUzQ3NCLGtCQUFBQSxtQkFBbUIsRUFBRTNELE1BQU0sQ0FBQzBELGVBQVAsQ0FBdUJILFVBQXZCLENBQWtDSSxtQkFGWjtBQUczQ0Msa0JBQUFBLGVBQWUsRUFBRTVELE1BQU0sQ0FBQzRELGVBSG1CO0FBSTNDUCxrQkFBQUEsWUFBWSxFQUFFckQsTUFBTSxDQUFDcUQ7QUFKc0IsaUJBQXpCLEM7OztBQUFoQlYsZ0JBQUFBLE87QUFNTkEsZ0JBQUFBLE9BQU8sQ0FBQ0csTUFBUixHQUFpQjlDLE1BQU0sQ0FBQzBELGVBQVAsQ0FBdUJILFVBQXZCLENBQWtDVCxNQUFuRDttREFDTztBQUNIeEMsa0JBQUFBLE9BQU8sRUFBRU4sTUFBTSxDQUFDMEQsZUFBUCxDQUF1QnBELE9BRDdCO0FBRUhxQyxrQkFBQUEsT0FBTyxFQUFQQSxPQUZHO0FBR0hJLGtCQUFBQSxZQUFZLEVBQUVDLElBQUksQ0FBQ0MsR0FBTDtBQUhYLGlCOzs7Ozs7Ozs7Ozs7Ozs7Ozs7O29IQVNQakQsTTs7Ozs7Ozt1QkFFc0IsS0FBS3lELG1CQUFMLENBQXlCO0FBQzNDcEIsa0JBQUFBLEdBQUcsRUFBRXJDLE1BQU0sQ0FBQzBELGVBQVAsQ0FBdUJILFVBQXZCLENBQWtDbEIsR0FESTtBQUUzQ3NCLGtCQUFBQSxtQkFBbUIsRUFBRTNELE1BQU0sQ0FBQzBELGVBQVAsQ0FBdUJILFVBQXZCLENBQWtDSSxtQkFGWjtBQUczQ0Msa0JBQUFBLGVBQWUsRUFBRTVELE1BQU0sQ0FBQzRELGVBSG1CO0FBSTNDUCxrQkFBQUEsWUFBWSxFQUFFckQsTUFBTSxDQUFDcUQ7QUFKc0IsaUJBQXpCLEM7OztBQUFoQlYsZ0JBQUFBLE87QUFNTkEsZ0JBQUFBLE9BQU8sQ0FBQ0csTUFBUixHQUFpQjlDLE1BQU0sQ0FBQzBELGVBQVAsQ0FBdUJILFVBQXZCLENBQWtDVCxNQUFuRDttREFDTztBQUNIeEMsa0JBQUFBLE9BQU8sRUFBRU4sTUFBTSxDQUFDMEQsZUFBUCxDQUF1QnBELE9BRDdCO0FBRUgrQixrQkFBQUEsR0FBRyxFQUFFckMsTUFBTSxDQUFDMEQsZUFBUCxDQUF1QkgsVUFBdkIsQ0FBa0NsQixHQUZwQztBQUdIYyxrQkFBQUEsWUFBWSxFQUFFbkQsTUFBTSxDQUFDMEQsZUFBUCxDQUF1QlAsWUFIbEM7QUFJSFIsa0JBQUFBLE9BQU8sRUFBUEEsT0FKRztBQUtISSxrQkFBQUEsWUFBWSxFQUFFQyxJQUFJLENBQUNDLEdBQUw7QUFMWCxpQjs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs4R0FVUGpELE07Ozs7O21EQUVPLEtBQUs0QixXQUFMLENBQWlCLHNCQUFqQixFQUF5QzVCLE1BQXpDLEM7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7MkdBSVBBLE07Ozs7O21EQUVPLEtBQUs0QixXQUFMLENBQWlCLHVCQUFqQixFQUEwQzVCLE1BQTFDLEM7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7MkdBSVBBLE07Ozs7O21EQUVPLEtBQUs0QixXQUFMLENBQWlCLG9CQUFqQixFQUF1QzVCLE1BQXZDLEM7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7MkdBSVBBLE07Ozs7O21EQUVPLEtBQUs0QixXQUFMLENBQWlCLHVCQUFqQixFQUEwQzVCLE1BQTFDLEM7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7d0dBSVBBLE07Ozs7O21EQUVPLEtBQUs0QixXQUFMLENBQWlCLG9CQUFqQixFQUF1QzVCLE1BQXZDLEM7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7MEdBSVBBLE07Ozs7O21EQUVPLEtBQUs0QixXQUFMLENBQWlCLHlCQUFqQixFQUE0QzVCLE1BQTVDLEM7Ozs7Ozs7Ozs7Ozs7OztRQUdYOzs7Ozs2R0FHSUEsTTs7Ozs7bURBRU8sS0FBSzRCLFdBQUwsQ0FBaUIsc0JBQWpCLEVBQXlDNUIsTUFBekMsQzs7Ozs7Ozs7Ozs7Ozs7Ozs7OztvSEFLUEEsTTs7Ozs7bURBRU8sS0FBSzRCLFdBQUwsQ0FBaUIsNkJBQWpCLEVBQWdENUIsTUFBaEQsQzs7Ozs7Ozs7Ozs7Ozs7Ozs7OztxSEFLUEEsTTs7Ozs7bURBRU8sS0FBSzRCLFdBQUwsQ0FBaUIsOEJBQWpCLEVBQWlENUIsTUFBakQsQzs7Ozs7Ozs7Ozs7Ozs7O1FBR1g7Ozs7OzBHQUVtQjJDLE87Ozs7O2dDQUNSQSxPQUFPLENBQUNDLFM7Ozs7Ozs7O3VCQUFvQixLQUFLaUIsVUFBTCxDQUFnQjtBQUMvQ0Msa0JBQUFBLFNBQVMsRUFBRW5CLE9BQU8sQ0FBQ0U7QUFENEIsaUJBQWhCLEM7OztnREFFL0JrQixJOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O3lHQUlKL0QsTSxFQUNBQyxVOzs7Ozs7QUFFTTZDLGdCQUFBQSxNLEdBQVM5QyxNQUFNLENBQUM4QyxNOztzQkFDbEJBLE1BQU0sSUFBS0UsSUFBSSxDQUFDQyxHQUFMLEtBQWFILE1BQU0sR0FBRyxJOzs7OztzQkFDM0J6QiwwQkFBZTJDLHFCQUFmLENBQXFDLHlCQUFyQyxDOzs7Z0NBRWNDLEk7O3VCQUFlLEtBQUtuRSxPQUFMLENBQWFvRSxlQUFiLENBQTZCakUsVUFBN0IsQzs7OztBQUFqQ2lFLGdCQUFBQSxlLGlCQUF1QkMsRzs7c0JBQ3pCRCxlQUFlLEdBQUcsS0FBS3hFLE1BQUwsQ0FBWTBFLGtCQUFaLEU7Ozs7O0FBQ2xCLHFCQUFLdEUsT0FBTCxDQUFhdUUsbUJBQWI7c0JBQ01oRCwwQkFBZWlELGNBQWYsRTs7Ozt1QkFFTyxLQUFLQyxZQUFMLENBQWtCdkUsTUFBbEIsQzs7O0FBQVhJLGdCQUFBQSxFO0FBQ0FvRSxnQkFBQUEsUSxHQUFXQyxNQUFNLENBQUNDLElBQVAsQ0FBWXRFLEVBQVosRUFBZ0IsS0FBaEIsRUFDWnVFLFFBRFksQ0FDSCxRQURHLEM7O3VCQUVYLEtBQUs3RSxPQUFMLENBQWE4RSxZQUFiLENBQTBCLENBQzVCO0FBQ0l4RSxrQkFBQUEsRUFBRSxFQUFFb0UsUUFEUjtBQUVJSyxrQkFBQUEsSUFBSSxFQUFFN0UsTUFBTSxDQUFDNkM7QUFGakIsaUJBRDRCLENBQTFCLEVBS0g1QyxVQUxHLEM7OztBQU1OLHFCQUFLUCxNQUFMLENBQVl3QyxHQUFaLENBQWdCLDZCQUFoQixFQUErQzlCLEVBQS9DO21EQUNPQSxFOzs7Ozs7Ozs7Ozs7Ozs7Ozs7OzRHQUlQdUMsTyxFQUNBbUMsWSxFQUNBN0UsVSxFQUNBZ0MsVSxFQUNBM0IsTyxFQUNBK0IsRyxFQUNBYyxZLEVBQ0E0QixtQjs7Ozs7O3VCQUVNLEtBQUtDLFdBQUwsQ0FBaUJyQyxPQUFqQixFQUEwQjFDLFVBQTFCLEM7OzttREFDQyxLQUFLZ0Ysa0JBQUwsQ0FDSDNFLE9BQU8sSUFBSSxFQURSLEVBRUhxQyxPQUZHLEVBR0htQyxZQUhHLEVBSUg3RSxVQUpHLEVBS0hnQyxVQUxHLEVBTUg4QyxtQkFORyxFQU9IMUMsR0FQRyxFQVFIYyxZQVJHLEM7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Z0hBY1A3QyxPLEVBQ0FxQyxPLEVBQ0FtQyxZLEVBQ0E3RSxVLEVBQ0FnQyxVLEVBQ0E4QyxtQixFQUNBMUMsRyxFQUNBYyxZOzs7Ozs7Ozs7dUJBRXdCLEtBQUtvQixZQUFMLENBQWtCNUIsT0FBbEIsQzs7O0FBQWxCQyxnQkFBQUEsUztBQUNBbEQsZ0JBQUFBLE0sR0FBUyxLQUFLQSxNO0FBQ2hCd0YsZ0JBQUFBLGlCLEdBQW9CeEYsTUFBTSxDQUFDeUYsd0JBQVAsQ0FBZ0NsRCxVQUFoQyxDO0FBQ2xCbUQsZ0JBQUFBLFEsR0FBVyxFOzt1QkFDUSxLQUFLdEYsT0FBTCxDQUFhdUYsYUFBYixDQUEyQnBGLFVBQTNCLEM7OztBQUFuQnFGLGdCQUFBQSxVO0FBQ0FDLGdCQUFBQSxXLEdBQWNELFVBQVUsQ0FBQ0UsbUJBQVgsR0FDZCxLQUFLMUYsT0FBTCxDQUFhMkYsbUJBQWIsRUFEYyxHQUVkbEYsUztBQUNGbUYsZ0JBQUFBLFcsR0FBNkIsSTtBQUM3QkMsZ0JBQUFBLFEsR0FBVzNDLElBQUksQ0FBQ0MsR0FBTCxLQUFhLEk7O0FBRWxCSCxnQkFBQUEsTSxHQUFTSCxPQUFPLENBQUNHLE07O0FBQ3ZCLG9CQUFJQSxNQUFKLEVBQVk7QUFDUjtBQUNBO0FBQ0k4QyxrQkFBQUEsWUFISSxHQUdXOUMsTUFBTSxHQUFHLElBQVQsR0FBZ0JFLElBQUksQ0FBQ0MsR0FBTCxFQUFoQixHQUE2QmlDLGlCQUh4QyxFQUlSOztBQUNBQSxrQkFBQUEsaUJBQWlCLEdBQUdVLFlBQVksR0FBRyxLQUFuQzs7QUFHTUMsa0JBQUFBLFdBUkU7QUFBQSw2RkFRWTtBQUFBOztBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFDaEI7QUFDSUMsOEJBQUFBLEtBRlksR0FFSyxJQUZMO0FBQUE7QUFBQTtBQUFBLHFDQUlFLE1BQUksQ0FBQ2hHLE9BQUwsQ0FBYWlHLE1BQWIsQ0FBb0JDLE9BQXBCLENBQTRCO0FBQ3RDQyxnQ0FBQUEsTUFBTSxFQUFFO0FBQ0pDLGtDQUFBQSxNQUFNLEVBQUU7QUFBRUMsb0NBQUFBLG1CQUFtQixFQUFFO0FBQUVDLHNDQUFBQSxFQUFFLEVBQUV0RDtBQUFOO0FBQXZCO0FBREosaUNBRDhCO0FBSXRDN0QsZ0NBQUFBLE1BQU0sRUFBRSxvQ0FKOEI7QUFLdENvSCxnQ0FBQUEsT0FBTyxFQUFFVCxZQUw2QjtBQU10QzNGLGdDQUFBQSxVQUFVLEVBQVZBLFVBTnNDO0FBT3RDc0YsZ0NBQUFBLFdBQVcsRUFBWEE7QUFQc0MsK0JBQTVCLENBSkY7O0FBQUE7QUFJWk8sOEJBQUFBLEtBSlk7QUFBQTtBQUFBOztBQUFBO0FBQUE7QUFBQTs7QUFBQSxtQ0FlVHpFLDBCQUFlaUYsZ0JBQWYsZUFmUztBQUFBO0FBQUE7QUFBQTs7QUFBQSxvQ0FnQkZqRiwwQkFBZWtGLGFBQWYsQ0FDRjNELFNBREUsRUFDUytDLFFBRFQsRUFDbUI3QyxNQURuQixFQUMyQjhDLFlBRDNCLENBaEJFOztBQUFBO0FBQUE7O0FBQUE7QUFBQSxtQ0F1QlpGLFdBdkJZO0FBQUE7QUFBQTtBQUFBOztBQUFBOztBQUFBO0FBMkJWYyw4QkFBQUEsY0EzQlUsR0EyQk9WLEtBQUssQ0FBQ1csWUFBTiw4QkFDaEJYLEtBQUssQ0FBQ1csWUFBTixDQUFtQkMsSUFBbkIsQ0FBd0IsVUFBQUMsR0FBRztBQUFBLHVDQUFJLENBQUMsQ0FBQ0EsR0FBRyxDQUFDSCxjQUFWO0FBQUEsK0JBQTNCLENBRGdCLDBEQUNoQixzQkFBc0RBLGNBRHRDLENBM0JQOztBQUFBLGtDQThCWEEsY0E5Qlc7QUFBQTtBQUFBO0FBQUE7O0FBQUEsb0NBK0JObkYsMEJBQWV1RixhQUFmLENBQ0YsMkNBREUsQ0EvQk07O0FBQUE7QUFBQTtBQUFBO0FBQUEscUNBc0NQLE1BQUksQ0FBQzlHLE9BQUwsQ0FBYStHLFlBQWIsQ0FBMEJiLE9BQTFCLENBQWtDO0FBQ25DQyxnQ0FBQUEsTUFBTSxFQUFFO0FBQ0o3RixrQ0FBQUEsRUFBRSxFQUFFO0FBQUVDLG9DQUFBQSxFQUFFLEVBQUVtRztBQUFOO0FBREEsaUNBRDJCO0FBSW5DdkgsZ0NBQUFBLE1BQU0sRUFBRSxJQUoyQjtBQUtuQ29ILGdDQUFBQSxPQUFPLEVBQUUsSUFMMEI7QUFNbkNwRyxnQ0FBQUEsVUFBVSxFQUFWQSxVQU5tQztBQU9uQ3NGLGdDQUFBQSxXQUFXLEVBQVhBO0FBUG1DLCtCQUFsQyxDQXRDTzs7QUFBQTtBQUFBO0FBQUE7O0FBQUE7QUFBQTtBQUFBOztBQUFBLG1DQWlEVGxFLDBCQUFlaUYsZ0JBQWYsZUFqRFM7QUFBQTtBQUFBO0FBQUE7O0FBQUEsb0NBa0RGakYsMEJBQWV5RixjQUFmLENBQ0ZsRSxTQURFLEVBQ1NrRCxLQUFLLENBQUMxRixFQURmLEVBQ21Cb0csY0FEbkIsRUFDbUMsSUFEbkMsQ0FsREU7O0FBQUE7QUFBQTs7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxxQkFSWjs7QUFBQSxvQ0FRRlgsV0FSRTtBQUFBO0FBQUE7QUFBQTs7QUFtRVJULGtCQUFBQSxRQUFRLENBQUNwRCxJQUFULENBQWM2RCxXQUFXLEVBQXpCO0FBQ0gsaUIsQ0FFRDs7O0FBQ0FULGdCQUFBQSxRQUFRLENBQUNwRCxJQUFULENBQWMsSUFBSStFLE9BQUosQ0FBWSxVQUFDQyxPQUFELEVBQVVDLE1BQVYsRUFBcUI7QUFDM0MsK0VBQUM7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxtQ0FFMkIsTUFBSSxDQUFDbkgsT0FBTCxDQUFhK0csWUFBYixDQUEwQmIsT0FBMUIsQ0FBa0M7QUFDbERDLDhCQUFBQSxNQUFNLEVBQUU7QUFDSmlCLGdDQUFBQSxNQUFNLEVBQUU7QUFBRTdHLGtDQUFBQSxFQUFFLEVBQUV1QztBQUFOLGlDQURKO0FBRUp1RSxnQ0FBQUEsTUFBTSxFQUFFO0FBQUU5RyxrQ0FBQUEsRUFBRSxFQUFFekMsNEJBQTRCLENBQUNsQjtBQUFuQztBQUZKLCtCQUQwQztBQUtsRHVDLDhCQUFBQSxNQUFNLEVBQUU2RixZQUwwQztBQU1sRHVCLDhCQUFBQSxPQUFPLEVBQUVuQixpQkFOeUM7QUFPbERLLDhCQUFBQSxXQUFXLEVBQVhBLFdBUGtEO0FBUWxEdEYsOEJBQUFBLFVBQVUsRUFBVkE7QUFSa0QsNkJBQWxDLENBRjNCOztBQUFBO0FBRU95Riw0QkFBQUEsV0FGUDtBQVlPc0IsNEJBQUFBLE9BQU87QUFaZDtBQUFBOztBQUFBO0FBQUE7QUFBQTtBQWNPQyw0QkFBQUEsTUFBTSxlQUFOOztBQWRQO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLG1CQUFEO0FBaUJILGlCQWxCYSxDQUFkOzs7dUJBcUJVRixPQUFPLENBQUNLLElBQVIsQ0FBYWhDLFFBQWIsQzs7Ozs7c0JBRUZBLFFBQVEsQ0FBQzVFLE1BQVQsR0FBa0IsQ0FBbEIsSUFBdUIrRSxXOzs7Ozs7dUJBQ2pCLEtBQUt6RixPQUFMLENBQWF1SCxnQkFBYixDQUE4QixDQUFDOUIsV0FBRCxDQUE5QixDOzs7Ozs7b0JBSVRHLFc7Ozs7O3NCQUNLckUsMEJBQWVpRyxjQUFmLEU7OztBQUVKQyxnQkFBQUEsYyxHQUFpQjdCLFdBQVcsQ0FBQ3pDLEdBQVosSUFBbUIsQztBQUMxQyxxQkFBS3ZELE1BQUwsQ0FBWXdDLEdBQVosQ0FBZ0IsMENBQWhCLEVBQTREO0FBQ3hEOUIsa0JBQUFBLEVBQUUsRUFBRXNGLFdBQVcsQ0FBQ3RGLEVBRHdDO0FBRXhEb0gsa0JBQUFBLFFBQVEsRUFBRTlCLFdBQVcsQ0FBQzhCLFFBRmtDO0FBR3hEdkUsa0JBQUFBLEdBQUcsWUFBSyxJQUFJRCxJQUFKLENBQVN1RSxjQUFjLEdBQUcsSUFBMUIsRUFBZ0NFLFdBQWhDLEVBQUwsZUFBdURGLGNBQXZEO0FBSHFELGlCQUE1RDs7Ozs7OztBQU1BLHFCQUFLN0gsTUFBTCxDQUFZd0MsR0FBWixDQUFnQixvQ0FBaEIsaUJBQTZELGFBQTdEOzt1QkFDWSxLQUFLd0Ysb0JBQUwsZ0JBRVIvRSxPQUFPLENBQUNFLGlCQUZBLEVBR1JrQyxtQkFBbUIsSUFBSS9CLElBQUksQ0FBQ0MsR0FBTCxFQUhmLEVBSVIzQyxPQUpRLEM7Ozs7OztBQU9oQjlCLGdCQUFBQSxjQUFjLENBQUNrSCxXQUFELENBQWQ7O3VCQUNNLEtBQUtpQyxnQkFBTCxDQUFzQnJILE9BQXRCLEVBQStCb0YsV0FBL0IsRUFBNENyRCxHQUE1QyxFQUFpRGMsWUFBakQsQzs7O21EQUNDdUMsVzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs4R0FJUHBGLE8sRUFDQW9GLFcsRUFDQXJELEcsRUFDQWMsWTs7Ozs7Ozs7dUJBR1UsS0FBS3ZCLFdBQUwsQ0FBaUIsK0JBQWpCLEVBQWtEO0FBQ3BEOEQsa0JBQUFBLFdBQVcsRUFBWEEsV0FEb0Q7QUFFcERyRCxrQkFBQUEsR0FBRyxFQUFFQSxHQUFHLElBQUksSUFGd0M7QUFHcERjLGtCQUFBQSxZQUFZLEVBQUVBLFlBQVksSUFBSSxJQUhzQjtBQUlwRDdDLGtCQUFBQSxPQUFPLEVBQVBBO0FBSm9ELGlCQUFsRCxDOzs7Ozs7Ozs7O3VCQU9pQixLQUFLUixPQUFMLENBQWFJLFFBQWIsQ0FBc0JDLEtBQXRCLENBQTRCO0FBQy9DOEYsa0JBQUFBLE1BQU0sRUFBRTtBQUFFN0Ysb0JBQUFBLEVBQUUsRUFBRTtBQUFFQyxzQkFBQUEsRUFBRSxFQUFFQztBQUFOO0FBQU4sbUJBRHVDO0FBRS9DckIsa0JBQUFBLE1BQU0sRUFBRSxrQkFGdUM7QUFHL0NvSCxrQkFBQUEsT0FBTyxFQUFFO0FBSHNDLGlCQUE1QixDOzs7QUFBakJuRyxnQkFBQUEsUTs7c0JBS0ZBLFFBQVEsQ0FBQ00sTUFBVCxLQUFvQixDOzs7OztzQkFDZGEsMEJBQWV1RyxjQUFmLENBQThCdEgsT0FBOUIsQzs7O3FCQUVOZSwwQkFBZXdHLGVBQWYsZ0JBQXNDQywrQkFBb0JDLE1BQTFELEM7Ozs7O3NCQUNNMUcsMEJBQWUyRyxvQkFBZixDQUFvQzFILE9BQXBDLEVBQTZDSixRQUFRLENBQUMsQ0FBRCxDQUFSLENBQVlRLE9BQXpELEM7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7a0hBT2R1SCxLLEVBQ0FDLGEsRUFDQUMsSSxFQUNBN0gsTzs7Ozs7Ozt1QkFFdUIsS0FBS1IsT0FBTCxDQUFhSSxRQUFiLENBQXNCQyxLQUF0QixDQUE0QjtBQUMvQzhGLGtCQUFBQSxNQUFNLEVBQUU7QUFBRTdGLG9CQUFBQSxFQUFFLEVBQUU7QUFBRUMsc0JBQUFBLEVBQUUsRUFBRUM7QUFBTjtBQUFOLG1CQUR1QztBQUUvQ3JCLGtCQUFBQSxNQUFNLEVBQUUsMEVBRnVDO0FBRy9Db0gsa0JBQUFBLE9BQU8sRUFBRTtBQUhzQyxpQkFBNUIsQzs7O0FBQWpCbkcsZ0JBQUFBLFE7O3NCQUtGQSxRQUFRLENBQUNNLE1BQVQsS0FBb0IsQzs7Ozs7bURBQ2JhLDBCQUFldUcsY0FBZixDQUE4QnRILE9BQTlCLEM7OztBQUVMa0IsZ0JBQUFBLE8sR0FBVXRCLFFBQVEsQ0FBQyxDQUFELEM7QUFDeEIxQixnQkFBQUEsY0FBYyxDQUFDZ0QsT0FBRCxDQUFkOzs7dUJBRVUsS0FBS0ksV0FBTCxDQUFpQix5QkFBakIsRUFBNEM7QUFDOUN0QixrQkFBQUEsT0FBTyxFQUFQQSxPQUQ4QztBQUU5Q2tCLGtCQUFBQSxPQUFPLEVBQVBBLE9BRjhDO0FBRzlDMEcsa0JBQUFBLGFBQWEsRUFBYkEsYUFIOEM7QUFJOUNDLGtCQUFBQSxJQUFJLEVBQUVsRSxJQUFJLENBQUNtRSxLQUFMLENBQVdELElBQUksR0FBRyxJQUFsQixDQUp3QztBQUs5Q0Usa0JBQUFBLFNBQVMsRUFBRUo7QUFMbUMsaUJBQTVDLEM7Ozs7Ozs7Ozs7OzttREFVSEEsSzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozt3R0FHTTNILE8sRUFBaUJMLFU7Ozs7Ozs7dUJBQ1IsS0FBS0gsT0FBTCxDQUFhSSxRQUFiLENBQXNCQyxLQUF0QixDQUE0QjtBQUM5QzhGLGtCQUFBQSxNQUFNLEVBQUU7QUFDSjdGLG9CQUFBQSxFQUFFLEVBQUU7QUFBRUMsc0JBQUFBLEVBQUUsRUFBRUM7QUFBTixxQkFEQTtBQUVKZ0ksb0JBQUFBLFFBQVEsRUFBRTtBQUFFakksc0JBQUFBLEVBQUUsRUFBRXBELFlBQVksQ0FBQ0U7QUFBbkI7QUFGTixtQkFEc0M7QUFLOUM4QixrQkFBQUEsTUFBTSxFQUFFLElBTHNDO0FBTTlDZ0Isa0JBQUFBLFVBQVUsRUFBVkE7QUFOOEMsaUJBQTVCLEM7OztBQUFoQnVCLGdCQUFBQSxPO21EQVFDQSxPQUFPLENBQUNoQixNQUFSLEdBQWlCLEM7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7a0hBSXhCUixNLEVBQ0FDLFUsRUFDQWdDLFU7Ozs7O0FBRUEscUJBQUt2QyxNQUFMLENBQVl3QyxHQUFaLENBQWdCLHNCQUFoQixFQUF3Q2xDLE1BQXhDOzt1QkFDVSxLQUFLdUksVUFBTCxDQUFnQnZJLE1BQU0sQ0FBQ00sT0FBdkIsRUFBZ0NMLFVBQWhDLEM7Ozs7Ozs7O21EQUNDO0FBQ0hLLGtCQUFBQSxPQUFPLEVBQUVOLE1BQU0sQ0FBQ00sT0FEYjtBQUVIa0ksa0JBQUFBLGVBQWUsRUFBRTtBQUZkLGlCOzs7O3VCQUtMLEtBQUt4RCxXQUFMLENBQWlCaEYsTUFBTSxDQUFDMkMsT0FBeEIsRUFBaUMxQyxVQUFqQyxDOzs7bURBQ0MsS0FBS3dJLHdCQUFMLENBQ0h6SSxNQURHLEVBRUhDLFVBRkcsRUFHSGdDLFVBSEcsQzs7Ozs7Ozs7Ozs7Ozs7Ozs7OztzSEFRUHlHLGEsRUFDQXpJLFUsRUFDQWdDLFU7Ozs7Ozs7dUJBRTBCLEtBQUtnRCxrQkFBTCxDQUN0QnlELGFBQWEsQ0FBQ3BJLE9BRFEsRUFFdEJvSSxhQUFhLENBQUMvRixPQUZRLEVBR3RCZ0csa0JBSHNCLEVBSXRCMUksVUFKc0IsRUFLdEJnQyxVQUxzQixFQU10QnlHLGFBQWEsQ0FBQzNGLFlBTlEsQzs7O0FBQXBCMkMsZ0JBQUFBLFc7QUFRTixxQkFBS2hHLE1BQUwsQ0FBWXdDLEdBQVosQ0FBZ0IsMkJBQWhCO21EQUNPO0FBQ0g1QixrQkFBQUEsT0FBTyxFQUFFb0ksYUFBYSxDQUFDcEksT0FEcEI7QUFFSGtJLGtCQUFBQSxlQUFlLEVBQUUsS0FGZDtBQUdIOUMsa0JBQUFBLFdBQVcsRUFBWEE7QUFIRyxpQjs7Ozs7Ozs7Ozs7Ozs7Ozs7OzsrR0FTUGtELFUsRUFDQTNJLFUsRUFDQWdDLFU7Ozs7O0FBRUEscUJBQUt2QyxNQUFMLENBQVl3QyxHQUFaLENBQWdCLG1CQUFoQixFQUFxQzBHLFVBQXJDOzt1QkFDTSxLQUFLNUQsV0FBTCxDQUFpQjRELFVBQVUsQ0FBQ2pHLE9BQTVCLEVBQXFDMUMsVUFBckMsQzs7O21EQUNDLEtBQUs0SSxxQkFBTCxDQUEyQkQsVUFBM0IsRUFBdUMzSSxVQUF2QyxFQUFtRGdDLFVBQW5ELEM7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7bUhBSVAyRyxVLEVBQ0EzSSxVLEVBQ0FnQyxVOzs7Ozs7Ozs7dUJBRTBCLEtBQUtnRCxrQkFBTCxDQUN0QjJELFVBQVUsQ0FBQ3RJLE9BRFcsRUFFdEJzSSxVQUFVLENBQUNqRyxPQUZXLEVBR3RCZ0csa0JBSHNCLEVBSXRCMUksVUFKc0IsRUFLdEJnQyxVQUxzQixFQU10QjJHLFVBQVUsQ0FBQzdGLFlBTlcsRUFPdEI2RixVQUFVLENBQUN2RyxHQVBXLEVBUXRCdUcsVUFBVSxDQUFDekYsWUFSVyxDOzs7QUFBcEJ1QyxnQkFBQUEsVztBQVVBb0QsZ0JBQUFBLGMsR0FBaUJwRCxXQUFXLENBQUNxRCxZOztzQkFDL0IsQ0FBQ0QsY0FBRCxJQUFtQkEsY0FBYyxDQUFDdEksTUFBZixLQUEwQixDOzs7OzttREFDdEM7QUFDSHdJLGtCQUFBQSxNQUFNLEVBQUUsSUFETDtBQUVIdEQsa0JBQUFBLFdBQVcsRUFBWEE7QUFGRyxpQjs7O0FBS0x1RCxnQkFBQUEsZ0IsR0FBK0JILGNBQWMsQ0FBQzdDLE1BQWYsQ0FBc0IsVUFBQ2lELENBQUQsRUFBaUI7QUFDeEUseUJBQU9BLENBQUMsQ0FBQ0MsUUFBRixLQUFlbE4sWUFBWSxDQUFDRyxNQUFuQztBQUNILGlCQUZvQyxDO0FBR3JDLHFCQUFLc0QsTUFBTCxDQUFZd0MsR0FBWixDQUFnQiwwQ0FBaEI7O3VCQUNzQjZFLE9BQU8sQ0FBQ3FDLEdBQVIsQ0FBWUgsZ0JBQWdCLENBQUNJLEdBQWpCLENBQXFCLFVBQUNILENBQUQsRUFBaUI7QUFDcEUseUJBQU8sTUFBSSxDQUFDSSx1QkFBTCxDQUE2QjtBQUNoQ2pILG9CQUFBQSxHQUFHLEVBQUV1RyxVQUFVLENBQUN2RyxHQURnQjtBQUVoQ2tILG9CQUFBQSxVQUFVLEVBQUVMLENBQUMsQ0FBQ3JFLElBQUYsSUFBVTtBQUZVLG1CQUE3QixDQUFQO0FBSUgsaUJBTGlDLENBQVosQzs7O0FBQWhCMkUsZ0JBQUFBLE87QUFNQUMsZ0JBQUFBLFksR0FBZUQsT0FBTyxDQUFDOUMsSUFBUixDQUFhLFVBQUN3QyxDQUFELEVBQTJDO0FBQ3pFLHlCQUFPQSxDQUFDLFlBQUQsQ0FBV1EsV0FBWCxPQUE2QmQsVUFBVSxDQUFDekYsWUFBWCxDQUF3QnVHLFdBQXhCLEVBQXBDO0FBQ0gsaUJBRm9CLEM7QUFHckIscUJBQUtoSyxNQUFMLENBQVl3QyxHQUFaLENBQWdCLHdCQUFoQjttREFDTztBQUNIOEcsa0JBQUFBLE1BQU0sRUFBRVMsWUFBWSxHQUFHQSxZQUFZLENBQUNULE1BQWhCLEdBQXlCLElBRDFDO0FBRUh0RCxrQkFBQUEsV0FBVyxFQUFYQTtBQUZHLGlCOzs7Ozs7Ozs7Ozs7Ozs7O0FBTVg7Ozs7Ozs7Ozs7O29IQVFJMUYsTSxFQUNBMkosVSxFQUNBMUosVTs7Ozs7O0FBRUEscUJBQUtQLE1BQUwsQ0FBWXdDLEdBQVosQ0FBZ0Isd0JBQWhCLEVBQTBDbEMsTUFBMUM7O3VCQUVzQixLQUFLdUIsVUFBTCxDQUFnQnZCLE1BQU0sQ0FBQ00sT0FBdkIsRUFBZ0MsSUFBaEMsRUFBc0NxSixVQUF0QyxFQUFrRDFKLFVBQWxELEM7OztBQUFoQnVCLGdCQUFBQSxPO21EQUVDLEtBQUtJLFdBQUwsQ0FBaUIseUJBQWpCLEVBQTRDO0FBQy9DdEIsa0JBQUFBLE9BQU8sRUFBRU4sTUFBTSxDQUFDTSxPQUQrQjtBQUUvQ2tCLGtCQUFBQSxPQUFPLEVBQVBBLE9BRitDO0FBRy9DYSxrQkFBQUEsR0FBRyxFQUFFckMsTUFBTSxDQUFDcUMsR0FIbUM7QUFJL0NjLGtCQUFBQSxZQUFZLEVBQUVuRCxNQUFNLENBQUNtRCxZQUowQjtBQUsvQytFLGtCQUFBQSxhQUFhLEVBQUVsSSxNQUFNLENBQUMyQyxPQUFQLENBQWVFO0FBTGlCLGlCQUE1QyxDOzs7Ozs7Ozs7Ozs7Ozs7UUFTWDs7Ozs7eUdBS0k3QyxNLEVBQ0FDLFU7Ozs7OztBQUVBLHFCQUFLUCxNQUFMLENBQVl3QyxHQUFaLENBQWdCLGFBQWhCLEVBQStCbEMsTUFBL0I7O3VCQUVzQixLQUFLdUIsVUFBTCxDQUFnQnZCLE1BQU0sQ0FBQ00sT0FBdkIsRUFBZ0MsSUFBaEMsRUFBc0NOLE1BQU0sQ0FBQzJKLFVBQTdDLEVBQXlEMUosVUFBekQsQzs7O0FBQWhCdUIsZ0JBQUFBLE87O0FBRU4sb0JBQUl4QixNQUFNLENBQUM0SixjQUFYLEVBQTJCO0FBQ3ZCcEksa0JBQUFBLE9BQU8sQ0FBQ2QsT0FBUixHQUFrQixLQUFLbUosVUFBdkI7QUFDSDs7bURBRU0sS0FBS2pJLFdBQUwsQ0FBaUIsbUJBQWpCLEVBQXNDO0FBQ3pDdEIsa0JBQUFBLE9BQU8sRUFBRU4sTUFBTSxDQUFDTSxPQUR5QjtBQUV6Q2tCLGtCQUFBQSxPQUFPLEVBQVBBLE9BRnlDO0FBR3pDYSxrQkFBQUEsR0FBRyxFQUFFckMsTUFBTSxDQUFDcUMsR0FINkI7QUFJekNjLGtCQUFBQSxZQUFZLEVBQUVuRCxNQUFNLENBQUNtRCxZQUpvQjtBQUt6Q0Msa0JBQUFBLEtBQUssRUFBRXBELE1BQU0sQ0FBQ29ELEtBTDJCO0FBTXpDWCxrQkFBQUEsT0FBTyxFQUFFekMsTUFBTSxDQUFDeUM7QUFOeUIsaUJBQXRDLEM7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7NEdBV1B6QyxNLEVBQ0FDLFU7Ozs7OztBQUVBLHFCQUFLUCxNQUFMLENBQVl3QyxHQUFaLENBQWdCLGdCQUFoQixFQUFrQ2xDLE1BQWxDOzt1QkFFc0IsS0FBSzhKLG1CQUFMLENBQXlCOUosTUFBekIsQzs7O0FBQWhCMkMsZ0JBQUFBLE87bURBRUMsS0FBS29ILGtCQUFMLENBQXdCO0FBQzNCekosa0JBQUFBLE9BQU8sRUFBRXFDLE9BQU8sQ0FBQ3JDLE9BRFU7QUFFM0JxQyxrQkFBQUEsT0FBTyxFQUFFQSxPQUFPLENBQUNBLE9BRlU7QUFHM0JpSCxrQkFBQUEsY0FBYyxFQUFFNUosTUFBTSxDQUFDNEosY0FISTtBQUkzQkksa0JBQUFBLFVBQVUsRUFBRWhLLE1BQU0sQ0FBQ2dLO0FBSlEsaUJBQXhCLEVBS0ovSixVQUxJLEM7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Z0hBU1BELE0sRUFDQUMsVTs7Ozs7O0FBRUEscUJBQUtQLE1BQUwsQ0FBWXdDLEdBQVosQ0FBZ0Isb0JBQWhCLEVBQXNDbEMsTUFBdEM7QUFFSXdCLGdCQUFBQSxPLEdBQW9CO0FBQ3BCZCxrQkFBQUEsT0FBTyxFQUFFLEtBQUttSixVQURNO0FBRXBCekosa0JBQUFBLEVBQUUsRUFBRUosTUFBTSxDQUFDTSxPQUZTO0FBR3BCMkosa0JBQUFBLFNBQVMsRUFBRWhHLElBQUksQ0FBQ2lHLEtBQUwsQ0FBV2xILElBQUksQ0FBQ0MsR0FBTCxLQUFhLElBQXhCO0FBSFMsaUI7O29CQU1uQmpELE1BQU0sQ0FBQ2dLLFU7Ozs7Ozt1QkFDUSxLQUFLekksVUFBTCxDQUFnQnZCLE1BQU0sQ0FBQ00sT0FBdkIsRUFBZ0MsS0FBaEMsRUFBdUNOLE1BQU0sQ0FBQzJKLFVBQTlDLEVBQTBEMUosVUFBMUQsQzs7O0FBQWhCdUIsZ0JBQUFBLE87OztBQUdKLG9CQUFJeEIsTUFBTSxDQUFDNEosY0FBWCxFQUEyQjtBQUN2QnBJLGtCQUFBQSxPQUFPLENBQUNkLE9BQVIsR0FBa0IsS0FBS21KLFVBQXZCO0FBQ0g7O21EQUVNLEtBQUtqSSxXQUFMLENBQWlCLHVCQUFqQixFQUEwQztBQUM3Q3RCLGtCQUFBQSxPQUFPLEVBQUVOLE1BQU0sQ0FBQ00sT0FENkI7QUFFN0NrQixrQkFBQUEsT0FBTyxFQUFQQSxPQUY2QztBQUc3QzBHLGtCQUFBQSxhQUFhLEVBQUVsSSxNQUFNLENBQUMyQyxPQUFQLENBQWVFO0FBSGUsaUJBQTFDLEM7Ozs7Ozs7Ozs7Ozs7OztRQU9YOzs7Ozs0R0FHSTdDLE07Ozs7O21EQUVPLEtBQUs0QixXQUFMLENBQWlCLDJCQUFqQixFQUE4QzVCLE1BQTlDLEM7Ozs7Ozs7Ozs7Ozs7OztRQUdYOzs7OztrSEFFMkJBLE07Ozs7O21EQUNoQixLQUFLNEIsV0FBTCxDQUFpQixrQkFBakIsRUFBcUM7QUFDeENTLGtCQUFBQSxHQUFHLEVBQUVyQyxNQUFNLFdBQU4sQ0FBZXFDLEdBRG9CO0FBRXhDRixrQkFBQUEsaUJBQWlCLEVBQUVuQyxNQUFNLENBQUNtQyxpQkFGYztBQUd4Q0csa0JBQUFBLGlCQUFpQixFQUFFdEMsTUFBTSxDQUFDc0MsaUJBSGM7QUFJeENDLGtCQUFBQSxVQUFVLEVBQUV2QyxNQUFNLENBQUN1QyxVQUpxQjtBQUt4Q0Msa0JBQUFBLFdBQVcsRUFBRXhDLE1BQU0sV0FBTixDQUFld0MsV0FMWTtBQU14Q0Msa0JBQUFBLE9BQU8sRUFBRXpDLE1BQU0sQ0FBQ3lDO0FBTndCLGlCQUFyQyxDOzs7Ozs7Ozs7Ozs7Ozs7Ozs7OytHQVdhekMsTTs7Ozs7bURBQ2IsS0FBSzRCLFdBQUwsQ0FBaUIsZUFBakIsRUFBa0M7QUFDckN0QixrQkFBQUEsT0FBTyxFQUFFTixNQUFNLENBQUNNLE9BRHFCO0FBRXJDK0Isa0JBQUFBLEdBQUcsRUFBRXJDLE1BQU0sQ0FBQ3FDLEdBRnlCO0FBR3JDYyxrQkFBQUEsWUFBWSxFQUFFbkQsTUFBTSxDQUFDbUQsWUFIZ0I7QUFJckNELGtCQUFBQSxNQUFNLEVBQUVsRCxNQUFNLENBQUNrRCxNQUpzQjtBQUtyQ0Usa0JBQUFBLEtBQUssRUFBRXBELE1BQU0sQ0FBQ29ELEtBTHVCO0FBTXJDWCxrQkFBQUEsT0FBTyxFQUFFekMsTUFBTSxDQUFDeUM7QUFOcUIsaUJBQWxDLEM7Ozs7Ozs7Ozs7Ozs7Ozs7OztxQ0FXUEosRyxFQUNBOEgsVSxFQUNBbEksVSxFQUNHO0FBQ0gsVUFBTW9FLE9BQU8sR0FBRyxLQUFLM0csTUFBTCxDQUFZMEssd0JBQVosQ0FBcUNuSSxVQUFyQyxDQUFoQjs7QUFDQSxVQUFJSSxHQUFHLENBQUNhLE1BQUosSUFBY2IsR0FBRyxDQUFDYSxNQUFKLENBQVdtSCxRQUFYLENBQW9CLFFBQXBCLENBQWQsSUFBK0MsRUFBQ0YsVUFBRCxhQUFDQSxVQUFELHVCQUFDQSxVQUFVLENBQUVySCxNQUFiLENBQW5ELEVBQXdFO0FBQ3BFLCtDQUNPcUgsVUFEUDtBQUVJckgsVUFBQUEsTUFBTSxFQUFFbUIsSUFBSSxDQUFDaUcsS0FBTCxDQUFXLENBQUNsSCxJQUFJLENBQUNDLEdBQUwsS0FBYW9ELE9BQWQsSUFBeUIsSUFBcEMsSUFBNEM7QUFGeEQ7QUFJSDs7QUFDRCxhQUFPOEQsVUFBUDtBQUNIOzs7O3VHQUVlRyxJOzs7Ozs7QUFDTkMsZ0JBQUFBLFksR0FBZSxLQUFLN0ssTUFBTCxDQUFZOEssbUJBQVosRTtBQUNaQyxnQkFBQUEsQyxHQUFJLEM7OztzQkFBR0EsQ0FBQyxJQUFJRixZOzs7OztBQUNqQixvQkFBSUUsQ0FBQyxHQUFHLENBQVIsRUFBVztBQUNQLHVCQUFLL0ssTUFBTCxDQUFZd0MsR0FBWixrQkFBMEJ1SSxDQUExQjtBQUNIOzs7O3VCQUVnQkgsSUFBSSxDQUFDRyxDQUFELEM7Ozs7Ozs7O0FBRVhDLGdCQUFBQSxRLEdBQVcsY0FBTWpKLElBQU4sS0FBZWtKLHdCQUFhQyxlQUE1QixJQUNWdkosMEJBQWV3RyxlQUFmLGdCQUFzQ0MsK0JBQW9CK0MsaUJBQTFELEM7O29CQUNGSCxROzs7Ozs7OztBQVRzQkQsZ0JBQUFBLENBQUMsSUFBSSxDOzs7OztzQkFjbENwSiwwQkFBZWlHLGNBQWYsRTs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs4R0FJTnRILE0sRUFDQUMsVTs7Ozs7OztBQUVBLHFCQUFLUCxNQUFMLENBQVl3QyxHQUFaLENBQWdCLGNBQWhCO21EQUNPLEtBQUs0SSxTQUFMO0FBQUEsMkZBQWUsbUJBQU83SSxVQUFQO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsbUNBQ1UsTUFBSSxDQUFDNkgsbUJBQUwsQ0FBeUI5SixNQUF6QixFQUFpQ2lDLFVBQWpDLENBRFY7O0FBQUE7QUFDWnlHLDRCQUFBQSxhQURZO0FBQUE7QUFBQSxtQ0FFUixNQUFJLENBQUNILFVBQUwsQ0FBZ0JHLGFBQWEsQ0FBQ3BJLE9BQTlCLEVBQXVDTCxVQUF2QyxDQUZROztBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7O0FBQUEsK0RBR1A7QUFDSEssOEJBQUFBLE9BQU8sRUFBRW9JLGFBQWEsQ0FBQ3BJLE9BRHBCO0FBRUhrSSw4QkFBQUEsZUFBZSxFQUFFO0FBRmQsNkJBSE87O0FBQUE7QUFBQTtBQUFBLG1DQVFaLE1BQUksQ0FBQ3hELFdBQUwsQ0FBaUIwRCxhQUFhLENBQUMvRixPQUEvQixFQUF3QzFDLFVBQXhDLENBUlk7O0FBQUE7QUFBQSwrREFTWCxNQUFJLENBQUN3SSx3QkFBTCxDQUE4QkMsYUFBOUIsRUFBNkN6SSxVQUE3QyxFQUF5RGdDLFVBQXpELENBVFc7O0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsbUJBQWY7O0FBQUE7QUFBQTtBQUFBO0FBQUEsb0I7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7MkdBZVBqQyxNLEVBQ0FDLFU7Ozs7Ozs7QUFFQSxxQkFBS1AsTUFBTCxDQUFZd0MsR0FBWixDQUFnQixXQUFoQjttREFDTyxLQUFLNEksU0FBTDtBQUFBLDJGQUFlLG1CQUFPN0ksVUFBUDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLG1DQUNPLE1BQUksQ0FBQzhJLGdCQUFMLENBQXNCL0ssTUFBdEIsRUFBOEJpQyxVQUE5QixDQURQOztBQUFBO0FBQ1oyRyw0QkFBQUEsVUFEWTtBQUFBO0FBQUEsbUNBRVosTUFBSSxDQUFDNUQsV0FBTCxDQUFpQjRELFVBQVUsQ0FBQ2pHLE9BQTVCLEVBQXFDMUMsVUFBckMsQ0FGWTs7QUFBQTtBQUFBLCtEQUdYLE1BQUksQ0FBQzRJLHFCQUFMLENBQTJCRCxVQUEzQixFQUF1QzNJLFVBQXZDLEVBQW1EZ0MsVUFBbkQsQ0FIVzs7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxtQkFBZjs7QUFBQTtBQUFBO0FBQUE7QUFBQSxvQjs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozt3R0FRUDNCLE8sRUFDQW5ELE0sRUFDQXdNLFUsRUFDQTFKLFU7Ozs7OztBQUVNZ0csZ0JBQUFBLE0sR0FBNEI7QUFDOUI3RixrQkFBQUEsRUFBRSxFQUFFO0FBQUVDLG9CQUFBQSxFQUFFLEVBQUVDO0FBQU47QUFEMEIsaUI7O0FBR2xDLG9CQUFJcUosVUFBVSxJQUFJQSxVQUFVLENBQUNxQixhQUE3QixFQUE0QztBQUN4Qy9FLGtCQUFBQSxNQUFNLENBQUNnRixhQUFQLEdBQXVCO0FBQUU3RSxvQkFBQUEsRUFBRSxFQUFFdUQsVUFBVSxDQUFDcUI7QUFBakIsbUJBQXZCO0FBQ0g7O0FBQ0Qsb0JBQUk3TixNQUFKLEVBQVk7QUFDUjhJLGtCQUFBQSxNQUFNLENBQUNxQyxRQUFQLEdBQWtCO0FBQUVqSSxvQkFBQUEsRUFBRSxFQUFFcEQsWUFBWSxDQUFDRTtBQUFuQixtQkFBbEI7QUFDSDs7QUFFRCxxQkFBS3VDLE1BQUwsQ0FBWXdDLEdBQVosQ0FBZ0Isb0JBQWhCLEVBQXNDK0QsTUFBdEM7O3VCQUN1QixLQUFLbkcsT0FBTCxDQUFhSSxRQUFiLENBQXNCQyxLQUF0QjtBQUNuQjhGLGtCQUFBQSxNQUFNLEVBQU5BLE1BRG1CO0FBRW5CaEgsa0JBQUFBLE1BQU0sRUFBRTtBQUZXLG1CQUdmMEssVUFBVSxJQUFJQSxVQUFVLENBQUN0RCxPQUF6QixHQUFtQztBQUFFQSxrQkFBQUEsT0FBTyxFQUFFc0QsVUFBVSxDQUFDdEQ7QUFBdEIsaUJBQW5DLEdBQXFFLEVBSHREO0FBSW5CcEcsa0JBQUFBLFVBQVUsRUFBVkE7QUFKbUIsbUI7OztBQUFqQkMsZ0JBQUFBLFE7O3NCQU1GQSxRQUFRLENBQUNNLE1BQVQsS0FBb0IsQzs7Ozs7c0JBQ2RhLDBCQUFldUcsY0FBZixDQUE4QnRILE9BQTlCLEM7OztBQUVKa0IsZ0JBQUFBLE8sR0FBVXRCLFFBQVEsQ0FBQyxDQUFELEM7QUFDeEIxQixnQkFBQUEsY0FBYyxDQUFDZ0QsT0FBRCxDQUFkO0FBQ0EscUJBQUs5QixNQUFMLENBQVl3QyxHQUFaLENBQWdCLDhCQUFoQixFQUFnRFYsT0FBaEQ7bURBQ09BLE87Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Z0hBSVB4QixNLEVBQ0FDLFU7Ozs7OztBQUVNSyxnQkFBQUEsTyxHQUFVTixNQUFNLENBQUNNLE87O29CQUNsQkEsTzs7Ozs7c0JBQ0tlLDBCQUFlQywwQkFBZixFOzs7Z0NBRU10QixNQUFNLENBQUN3QixPOzs7Ozs7Ozt1QkFBa0IsS0FBS0QsVUFBTCxDQUNyQ2pCLE9BRHFDLEVBRXJDLEtBRnFDLEVBR3JDTixNQUFNLENBQUMySixVQUg4QixFQUlyQzFKLFVBSnFDLEM7Ozs7OztBQUFuQ3VCLGdCQUFBQSxPOztvQkFNREEsT0FBTyxDQUFDQyxJOzs7OztzQkFDSEosMEJBQWVLLGtCQUFmLENBQWtDcEIsT0FBbEMsRUFBNENrQixPQUFELENBQWVkLE9BQTFELEM7OzttREFFSCxLQUFLa0IsV0FBTCxDQUFpQixxQkFBakIsRUFBd0M7QUFDM0N0QixrQkFBQUEsT0FBTyxFQUFQQSxPQUQyQztBQUUzQ2tCLGtCQUFBQSxPQUFPLEVBQVBBLE9BRjJDO0FBRzNDYSxrQkFBQUEsR0FBRyxFQUFFckMsTUFBTSxDQUFDcUMsR0FIK0I7QUFJM0NjLGtCQUFBQSxZQUFZLEVBQUVuRCxNQUFNLENBQUNtRCxZQUpzQjtBQUszQ0Msa0JBQUFBLEtBQUssRUFBRXBELE1BQU0sQ0FBQ29ELEtBTDZCO0FBTTNDWCxrQkFBQUEsT0FBTyxFQUFFekMsTUFBTSxDQUFDeUMsT0FOMkI7QUFPM0N5SSxrQkFBQUEsT0FBTyxFQUFFbEwsTUFBTSxDQUFDa0w7QUFQMkIsaUJBQXhDLEM7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7dUhBWVBsTCxNLEVBQ0FDLFU7Ozs7OztBQUVNSyxnQkFBQUEsTyxHQUFVTixNQUFNLENBQUNNLE87O29CQUNsQkEsTzs7Ozs7c0JBQ0tlLDBCQUFlQywwQkFBZixFOzs7Z0NBRU10QixNQUFNLENBQUN3QixPOzs7Ozs7Ozt1QkFBa0IsS0FBS0QsVUFBTCxDQUNyQ2pCLE9BRHFDLEVBRXJDLEtBRnFDLEVBR3JDTixNQUFNLENBQUMySixVQUg4QixFQUlyQzFKLFVBSnFDLEM7Ozs7OztBQUFuQ3VCLGdCQUFBQSxPOztvQkFNREEsT0FBTyxDQUFDQyxJOzs7OztzQkFDSEosMEJBQWVLLGtCQUFmLENBQWtDcEIsT0FBbEMsRUFBNENrQixPQUFELENBQWVkLE9BQTFELEM7OzttREFFSCxLQUFLa0IsV0FBTCxDQUFpQix5QkFBakIsRUFBNEM7QUFDL0N0QixrQkFBQUEsT0FBTyxFQUFQQSxPQUQrQztBQUUvQ2tCLGtCQUFBQSxPQUFPLEVBQVBBLE9BRitDO0FBRy9DYSxrQkFBQUEsR0FBRyxFQUFFckMsTUFBTSxDQUFDcUMsR0FIbUM7QUFJL0NjLGtCQUFBQSxZQUFZLEVBQUVuRCxNQUFNLENBQUNtRCxZQUowQjtBQUsvQytFLGtCQUFBQSxhQUFhLEVBQUVsSSxNQUFNLENBQUM2QyxpQkFMeUI7QUFNL0NxSSxrQkFBQUEsT0FBTyxFQUFFbEwsTUFBTSxDQUFDa0w7QUFOK0IsaUJBQTVDLEM7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7RUEvOEJpQ0MscUI7OztBQTA5QmhEMUwsa0JBQWtCLENBQUMyTCxVQUFuQixHQUFnQyxvQkFBaEM7QUFFQSxJQUFNekMsa0JBQWtCLDJrQkFBeEIiLCJzb3VyY2VzQ29udGVudCI6WyIvKlxuICogQ29weXJpZ2h0IDIwMTgtMjAyMCBUT04gREVWIFNPTFVUSU9OUyBMVEQuXG4gKi9cbi8vIEBmbG93XG5cbmltcG9ydCB7IFNwYW4sIFNwYW5Db250ZXh0IH0gZnJvbSAnb3BlbnRyYWNpbmcnO1xuaW1wb3J0IHR5cGUge1xuICAgIFFBY2NvdW50LFxuICAgIFFCbG9jayxcbiAgICBRTWVzc2FnZSxcbiAgICBRVHJhbnNhY3Rpb24sXG4gICAgVE9OQ29udHJhY3RBQkksXG4gICAgVE9OQ29udHJhY3RBY2NvdW50V2FpdFBhcmFtcyxcbiAgICBUT05Db250cmFjdENvbnZlcnRBZGRyZXNzUGFyYW1zLFxuICAgIFRPTkNvbnRyYWN0Q29udmVydEFkZHJlc3NSZXN1bHQsXG4gICAgVE9OQ29udHJhY3RDcmVhdGVSdW5Cb2R5UGFyYW1zLFxuICAgIFRPTkNvbnRyYWN0Q3JlYXRlUnVuQm9keVJlc3VsdCxcbiAgICBUT05Db250cmFjdENyZWF0ZVNpZ25lZERlcGxveU1lc3NhZ2VQYXJhbXMsXG4gICAgVE9OQ29udHJhY3RDcmVhdGVTaWduZWRNZXNzYWdlUGFyYW1zLFxuICAgIFRPTkNvbnRyYWN0Q3JlYXRlU2lnbmVkUnVuTWVzc2FnZVBhcmFtcyxcbiAgICBUT05Db250cmFjdERlY29kZU1lc3NhZ2VCb2R5UGFyYW1zLFxuICAgIFRPTkNvbnRyYWN0RGVjb2RlTWVzc2FnZUJvZHlSZXN1bHQsXG4gICAgVE9OQ29udHJhY3REZWNvZGVSdW5PdXRwdXRQYXJhbXMsXG4gICAgVE9OQ29udHJhY3REZXBsb3lNZXNzYWdlLFxuICAgIFRPTkNvbnRyYWN0RGVwbG95UGFyYW1zLFxuICAgIFRPTkNvbnRyYWN0RGVwbG95UmVzdWx0LFxuICAgIFRPTkNvbnRyYWN0Q2FsY0RlcGxveUZlZVBhcmFtcyxcbiAgICBUT05Db250cmFjdEJvYyxcbiAgICBUT05Db250cmFjdEdldEJvY0hhc2hSZXN1bHQsXG4gICAgVE9OQ29udHJhY3RHZXRDb2RlRnJvbUltYWdlUGFyYW1zLFxuICAgIFRPTkNvbnRyYWN0R2V0Q29kZUZyb21JbWFnZVJlc3VsdCxcbiAgICBUT05Db250cmFjdEdldERlcGxveURhdGFQYXJhbXMsXG4gICAgVE9OQ29udHJhY3RHZXREZXBsb3lEYXRhUmVzdWx0LFxuICAgIFRPTkNvbnRyYWN0R2V0RnVuY3Rpb25JZFBhcmFtcyxcbiAgICBUT05Db250cmFjdEdldEZ1bmN0aW9uSWRSZXN1bHQsXG4gICAgVE9OQ29udHJhY3RMb2FkUGFyYW1zLFxuICAgIFRPTkNvbnRyYWN0TG9hZFJlc3VsdCxcbiAgICBUT05Db250cmFjdENhbGNSdW5GZWVQYXJhbXMsXG4gICAgVE9OQ29udHJhY3RDYWxjRmVlUmVzdWx0LFxuICAgIFRPTkNvbnRyYWN0Q2FsY01zZ1Byb2Nlc3NpbmdGZWVzUGFyYW1zLFxuICAgIFRPTkNvbnRyYWN0TWVzc2FnZSxcbiAgICBUT05Db250cmFjdFJ1bkxvY2FsUGFyYW1zLFxuICAgIFRPTkNvbnRyYWN0UnVuTWVzc2FnZSxcbiAgICBUT05Db250cmFjdFJ1blBhcmFtcyxcbiAgICBUT05Db250cmFjdFJ1blJlc3VsdCxcbiAgICBUT05Db250cmFjdHMsXG4gICAgVE9OQ29udHJhY3RVbnNpZ25lZERlcGxveU1lc3NhZ2UsXG4gICAgVE9OQ29udHJhY3RVbnNpZ25lZE1lc3NhZ2UsXG4gICAgVE9OQ29udHJhY3RVbnNpZ25lZFJ1bk1lc3NhZ2UsXG4gICAgVE9OQ29udHJhY3RSdW5HZXRQYXJhbXMsXG4gICAgVE9OQ29udHJhY3RSdW5HZXRSZXN1bHQsXG4gICAgVE9OQ29udHJhY3RSdW5NZXNzYWdlTG9jYWxQYXJhbXMsXG4gICAgVE9OQ29udHJhY3RSdW5Mb2NhbFJlc3VsdCxcbn0gZnJvbSAnLi4vLi4vdHlwZXMnO1xuXG5pbXBvcnQgeyBUT05DbGllbnRFcnJvciwgVE9OQ29udHJhY3RFeGl0Q29kZSwgVE9ORXJyb3JDb2RlIH0gZnJvbSAnLi4vVE9OQ2xpZW50JztcbmltcG9ydCB7IFRPTk1vZHVsZSB9IGZyb20gJy4uL1RPTk1vZHVsZSc7XG5pbXBvcnQgVE9OQ29uZmlnTW9kdWxlIGZyb20gJy4vVE9OQ29uZmlnTW9kdWxlJztcbmltcG9ydCBUT05RdWVyaWVzTW9kdWxlIGZyb20gJy4vVE9OUXVlcmllc01vZHVsZSc7XG5cbmV4cG9ydCBjb25zdCBUT05BZGRyZXNzU3RyaW5nVmFyaWFudCA9IHtcbiAgICBBY2NvdW50SWQ6ICdBY2NvdW50SWQnLFxuICAgIEhleDogJ0hleCcsXG4gICAgQmFzZTY0OiAnQmFzZTY0Jyxcbn07XG5cbmV4cG9ydCBjb25zdCBUT05DbGllbnRUcmFuc2FjdGlvblBoYXNlID0ge1xuICAgIHN0b3JhZ2U6ICdzdG9yYWdlJyxcbiAgICBjb21wdXRlU2tpcHBlZDogJ2NvbXB1dGVTa2lwcGVkJyxcbiAgICBjb21wdXRlVm06ICdjb21wdXRlVm0nLFxuICAgIGFjdGlvbjogJ2FjdGlvbicsXG4gICAgdW5rbm93bjogJ3Vua25vd24nLFxufTtcblxuZXhwb3J0IGNvbnN0IFRPTkNsaWVudENvbXB1dGVTa2lwcGVkU3RhdHVzID0ge1xuICAgIG5vU3RhdGU6IDAsXG4gICAgYmFkU3RhdGU6IDEsXG4gICAgbm9HYXM6IDIsXG59O1xuXG5leHBvcnQgY29uc3QgVE9OQ2xpZW50U3RvcmFnZVN0YXR1cyA9IHtcbiAgICB1bmNoYW5nZWQ6IDAsXG4gICAgZnJvemVuOiAxLFxuICAgIGRlbGV0ZWQ6IDIsXG59O1xuXG5leHBvcnQgY29uc3QgUUluTXNnVHlwZSA9IHtcbiAgICBleHRlcm5hbDogMCxcbiAgICBpaHI6IDEsXG4gICAgaW1tZWRpYXRlbHk6IDIsXG4gICAgZmluYWw6IDMsXG4gICAgdHJhbnNpdDogNCxcbiAgICBkaXNjYXJkZWRGaW5hbDogNSxcbiAgICBkaXNjYXJkZWRUcmFuc2l0OiA2LFxufTtcblxuZXhwb3J0IGNvbnN0IFFPdXRNc2dUeXBlID0ge1xuICAgIGV4dGVybmFsOiAwLFxuICAgIGltbWVkaWF0ZWx5OiAxLFxuICAgIG91dE1zZ05ldzogMixcbiAgICB0cmFuc2l0OiAzLFxuICAgIGRlcXVldWVJbW1lZGlhdGVseTogNCxcbiAgICBkZXF1ZXVlOiA1LFxuICAgIHRyYW5zaXRSZXF1aXJlZDogNixcbiAgICBub25lOiAtMSxcbn07XG5cbmV4cG9ydCBjb25zdCBRTWVzc2FnZVR5cGUgPSB7XG4gICAgaW50ZXJuYWw6IDAsXG4gICAgZXh0SW46IDEsXG4gICAgZXh0T3V0OiAyLFxufTtcblxuZXhwb3J0IGNvbnN0IFFNZXNzYWdlUHJvY2Vzc2luZ1N0YXR1cyA9IHtcbiAgICB1bmtub3duOiAwLFxuICAgIHF1ZXVlZDogMSxcbiAgICBwcm9jZXNzaW5nOiAyLFxuICAgIHByZWxpbWluYXJ5OiAzLFxuICAgIHByb3Bvc2VkOiA0LFxuICAgIGZpbmFsaXplZDogNSxcbiAgICByZWZ1c2VkOiA2LFxuICAgIHRyYW5zaXRpbmc6IDcsXG59O1xuXG5leHBvcnQgY29uc3QgUUJsb2NrUHJvY2Vzc2luZ1N0YXR1cyA9IHtcbiAgICB1bmtub3duOiAwLFxuICAgIHByb3Bvc2VkOiAxLFxuICAgIGZpbmFsaXplZDogMixcbiAgICByZWZ1c2VkOiAzLFxufTtcblxuZXhwb3J0IGNvbnN0IFFTcGxpdFR5cGUgPSB7XG4gICAgbm9uZTogMCxcbiAgICBzcGxpdDogMixcbiAgICBtZXJnZTogMyxcbn07XG5cbmV4cG9ydCBjb25zdCBRQWNjb3VudFR5cGUgPSB7XG4gICAgdW5pbml0OiAwLFxuICAgIGFjdGl2ZTogMSxcbiAgICBmcm96ZW46IDIsXG59O1xuXG5leHBvcnQgY29uc3QgUVRyYW5zYWN0aW9uVHlwZSA9IHtcbiAgICBvcmRpbmFyeTogMCxcbiAgICBzdG9yYWdlOiAxLFxuICAgIHRpY2s6IDIsXG4gICAgdG9jazogMyxcbiAgICBzcGxpdFByZXBhcmU6IDQsXG4gICAgc3BsaXRJbnN0YWxsOiA1LFxuICAgIG1lcmdlUHJlcGFyZTogNixcbiAgICBtZXJnZUluc3RhbGw6IDcsXG59O1xuXG5leHBvcnQgY29uc3QgUVRyYW5zYWN0aW9uUHJvY2Vzc2luZ1N0YXR1cyA9IHtcbiAgICB1bmtub3duOiAwLFxuICAgIHByZWxpbWluYXJ5OiAxLFxuICAgIHByb3Bvc2VkOiAyLFxuICAgIGZpbmFsaXplZDogMyxcbiAgICByZWZ1c2VkOiA0LFxufTtcblxuZXhwb3J0IGNvbnN0IFFBY2NvdW50U3RhdHVzID0ge1xuICAgIHVuaW5pdDogMCxcbiAgICBhY3RpdmU6IDEsXG4gICAgZnJvemVuOiAyLFxuICAgIG5vbkV4aXN0OiAzLFxufTtcblxuZXhwb3J0IGNvbnN0IFFBY2NvdW50U3RhdHVzQ2hhbmdlID0ge1xuICAgIHVuY2hhbmdlZDogMCxcbiAgICBmcm96ZW46IDEsXG4gICAgZGVsZXRlZDogMixcbn07XG5cbmV4cG9ydCBjb25zdCBRQ29tcHV0ZVR5cGUgPSB7XG4gICAgc2tpcHBlZDogMCxcbiAgICB2bTogMSxcbn07XG5cbmV4cG9ydCBjb25zdCBRU2tpcFJlYXNvbiA9IHtcbiAgICBub1N0YXRlOiAwLFxuICAgIGJhZFN0YXRlOiAxLFxuICAgIG5vR2FzOiAyLFxufTtcblxuZXhwb3J0IGNvbnN0IFFCb3VuY2VUeXBlID0ge1xuICAgIG5lZ0Z1bmRzOiAwLFxuICAgIG5vRnVuZHM6IDEsXG4gICAgb2s6IDIsXG59O1xuXG5mdW5jdGlvbiByZW1vdmVUeXBlTmFtZShvYmo6IGFueSkge1xuICAgIGlmIChvYmouX190eXBlbmFtZSkge1xuICAgICAgICBkZWxldGUgb2JqLl9fdHlwZW5hbWU7XG4gICAgfVxuICAgIE9iamVjdC52YWx1ZXMob2JqKVxuICAgICAgICAuZm9yRWFjaCgodmFsdWUpID0+IHtcbiAgICAgICAgICAgIGlmICghIXZhbHVlICYmIHR5cGVvZiB2YWx1ZSA9PT0gJ29iamVjdCcpIHtcbiAgICAgICAgICAgICAgICByZW1vdmVUeXBlTmFtZSh2YWx1ZSk7XG4gICAgICAgICAgICB9XG4gICAgICAgIH0pO1xufVxuXG5leHBvcnQgZnVuY3Rpb24gcmVtb3ZlUHJvcHMob2JqOiB7fSwgcGF0aHM6IHN0cmluZ1tdKToge30ge1xuICAgIGxldCByZXN1bHQgPSBvYmo7XG4gICAgcGF0aHMuZm9yRWFjaCgocGF0aCkgPT4ge1xuICAgICAgICBjb25zdCBkb3RQb3MgPSBwYXRoLmluZGV4T2YoJy4nKTtcbiAgICAgICAgaWYgKGRvdFBvcyA8IDApIHtcbiAgICAgICAgICAgIGlmIChwYXRoIGluIHJlc3VsdCkge1xuICAgICAgICAgICAgICAgIHJlc3VsdCA9IHsgLi4ucmVzdWx0IH07XG4gICAgICAgICAgICAgICAgZGVsZXRlIHJlc3VsdFtwYXRoXTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIGNvbnN0IG5hbWUgPSBwYXRoLnN1YnN0cigwLCBkb3RQb3MpO1xuICAgICAgICAgICAgY29uc3QgY2hpbGQgPSByZXN1bHRbbmFtZV07XG4gICAgICAgICAgICBpZiAoY2hpbGQpIHtcbiAgICAgICAgICAgICAgICBjb25zdCByZWR1Y2VkQ2hpbGQgPSByZW1vdmVQcm9wcyhjaGlsZCwgW3BhdGguc3Vic3RyKGRvdFBvcyArIDEpXSk7XG4gICAgICAgICAgICAgICAgaWYgKHJlZHVjZWRDaGlsZCAhPT0gY2hpbGQpIHtcbiAgICAgICAgICAgICAgICAgICAgcmVzdWx0ID0ge1xuICAgICAgICAgICAgICAgICAgICAgICAgLi4ucmVzdWx0LFxuICAgICAgICAgICAgICAgICAgICAgICAgW25hbWVdOiByZWR1Y2VkQ2hpbGQsXG4gICAgICAgICAgICAgICAgICAgIH07XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgfSk7XG4gICAgcmV0dXJuIHJlc3VsdDtcbn1cblxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgVE9OQ29udHJhY3RzTW9kdWxlIGV4dGVuZHMgVE9OTW9kdWxlIGltcGxlbWVudHMgVE9OQ29udHJhY3RzIHtcbiAgICBjb25maWc6IFRPTkNvbmZpZ01vZHVsZTtcblxuICAgIHF1ZXJpZXM6IFRPTlF1ZXJpZXNNb2R1bGU7XG5cbiAgICBhc3luYyBzZXR1cCgpOiBQcm9taXNlPCo+IHtcbiAgICAgICAgdGhpcy5jb25maWcgPSB0aGlzLmNvbnRleHQuZ2V0TW9kdWxlKFRPTkNvbmZpZ01vZHVsZSk7XG4gICAgICAgIHRoaXMucXVlcmllcyA9IHRoaXMuY29udGV4dC5nZXRNb2R1bGUoVE9OUXVlcmllc01vZHVsZSk7XG4gICAgfVxuXG4gICAgYXN5bmMgbG9hZChcbiAgICAgICAgcGFyYW1zOiBUT05Db250cmFjdExvYWRQYXJhbXMsXG4gICAgICAgIHBhcmVudFNwYW4/OiAoU3BhbiB8IFNwYW5Db250ZXh0KSxcbiAgICApOiBQcm9taXNlPFRPTkNvbnRyYWN0TG9hZFJlc3VsdD4ge1xuICAgICAgICBjb25zdCBhY2NvdW50czogUUFjY291bnRbXSA9IGF3YWl0IHRoaXMucXVlcmllcy5hY2NvdW50cy5xdWVyeSh7XG4gICAgICAgICAgICBpZDogeyBlcTogcGFyYW1zLmFkZHJlc3MgfSxcbiAgICAgICAgfSwgJ2JhbGFuY2UnLCB1bmRlZmluZWQsIHVuZGVmaW5lZCwgdW5kZWZpbmVkLCBwYXJlbnRTcGFuKTtcbiAgICAgICAgaWYgKGFjY291bnRzICYmIGFjY291bnRzLmxlbmd0aCA+IDApIHtcbiAgICAgICAgICAgIHJldHVybiB7XG4gICAgICAgICAgICAgICAgaWQ6IHBhcmFtcy5hZGRyZXNzLFxuICAgICAgICAgICAgICAgIGJhbGFuY2VHcmFtczogYWNjb3VudHNbMF0uYmFsYW5jZSxcbiAgICAgICAgICAgIH07XG4gICAgICAgIH1cbiAgICAgICAgcmV0dXJuIHtcbiAgICAgICAgICAgIGlkOiBudWxsLFxuICAgICAgICAgICAgYmFsYW5jZUdyYW1zOiBudWxsLFxuICAgICAgICB9O1xuICAgIH1cblxuXG4gICAgLy8gRmFjYWRlIGZ1bmN0aW9uc1xuXG4gICAgYXN5bmMgZGVwbG95KFxuICAgICAgICBwYXJhbXM6IFRPTkNvbnRyYWN0RGVwbG95UGFyYW1zLFxuICAgICAgICBwYXJlbnRTcGFuPzogKFNwYW4gfCBTcGFuQ29udGV4dCksXG4gICAgKTogUHJvbWlzZTxUT05Db250cmFjdERlcGxveVJlc3VsdD4ge1xuICAgICAgICByZXR1cm4gdGhpcy5jb250ZXh0LnRyYWNlKCdjb250cmFjdHMuZGVwbG95JywgYXN5bmMgKHNwYW46IFNwYW4pID0+IHtcbiAgICAgICAgICAgIHNwYW4uc2V0VGFnKCdwYXJhbXMnLCByZW1vdmVQcm9wcyhwYXJhbXMsIFsna2V5UGFpci5zZWNyZXQnXSkpO1xuICAgICAgICAgICAgcmV0dXJuIHRoaXMuaW50ZXJuYWxEZXBsb3lKcyhwYXJhbXMsIHNwYW4pO1xuICAgICAgICB9LCBwYXJlbnRTcGFuKTtcbiAgICB9XG5cblxuICAgIGFzeW5jIHJ1bihcbiAgICAgICAgcGFyYW1zOiBUT05Db250cmFjdFJ1blBhcmFtcyxcbiAgICAgICAgcGFyZW50U3Bhbj86IChTcGFuIHwgU3BhbkNvbnRleHQpLFxuICAgICk6IFByb21pc2U8VE9OQ29udHJhY3RSdW5SZXN1bHQ+IHtcbiAgICAgICAgcmV0dXJuIHRoaXMuY29udGV4dC50cmFjZSgnY29udHJhY3RzLnJ1bicsIGFzeW5jIChzcGFuOiBTcGFuKSA9PiB7XG4gICAgICAgICAgICBzcGFuLnNldFRhZygncGFyYW1zJywgcmVtb3ZlUHJvcHMocGFyYW1zLCBbJ2tleVBhaXIuc2VjcmV0J10pKTtcbiAgICAgICAgICAgIHJldHVybiB0aGlzLmludGVybmFsUnVuSnMocGFyYW1zLCBzcGFuKTtcbiAgICAgICAgfSwgcGFyZW50U3Bhbik7XG4gICAgfVxuXG4gICAgYXN5bmMgcnVuTG9jYWwoXG4gICAgICAgIHBhcmFtczogVE9OQ29udHJhY3RSdW5Mb2NhbFBhcmFtcyxcbiAgICAgICAgcGFyZW50U3Bhbj86IChTcGFuIHwgU3BhbkNvbnRleHQpLFxuICAgICk6IFByb21pc2U8VE9OQ29udHJhY3RSdW5Mb2NhbFJlc3VsdD4ge1xuICAgICAgICByZXR1cm4gdGhpcy5jb250ZXh0LnRyYWNlKCdjb250cmFjdHMucnVuTG9jYWwnLCBhc3luYyAoc3BhbjogU3BhbikgPT4ge1xuICAgICAgICAgICAgc3Bhbi5zZXRUYWcoJ3BhcmFtcycsIHJlbW92ZVByb3BzKHBhcmFtcywgWydrZXlQYWlyLnNlY3JldCddKSk7XG4gICAgICAgICAgICByZXR1cm4gdGhpcy5pbnRlcm5hbFJ1bkxvY2FsSnMocGFyYW1zLCBzcGFuKTtcbiAgICAgICAgfSwgcGFyZW50U3Bhbik7XG4gICAgfVxuXG4gICAgYXN5bmMgcnVuTWVzc2FnZUxvY2FsKFxuICAgICAgICBwYXJhbXM6IFRPTkNvbnRyYWN0UnVuTWVzc2FnZUxvY2FsUGFyYW1zLFxuICAgICAgICBwYXJlbnRTcGFuPzogKFNwYW4gfCBTcGFuQ29udGV4dCksXG4gICAgKTogUHJvbWlzZTxUT05Db250cmFjdFJ1bkxvY2FsUmVzdWx0PiB7XG4gICAgICAgIHJldHVybiB0aGlzLmNvbnRleHQudHJhY2UoJ3J1bk1lc3NhZ2VMb2NhbCcsIGFzeW5jIChzcGFuOiBTcGFuKSA9PiB7XG4gICAgICAgICAgICBzcGFuLnNldFRhZygncGFyYW1zJywgcmVtb3ZlUHJvcHMocGFyYW1zLCBbJ2tleVBhaXIuc2VjcmV0J10pKTtcbiAgICAgICAgICAgIHJldHVybiB0aGlzLmludGVybmFsUnVuTWVzc2FnZUxvY2FsSnMocGFyYW1zLCBzcGFuKTtcbiAgICAgICAgfSwgcGFyZW50U3Bhbik7XG4gICAgfVxuXG4gICAgYXN5bmMgcnVuR2V0KFxuICAgICAgICBwYXJhbXM6IFRPTkNvbnRyYWN0UnVuR2V0UGFyYW1zLFxuICAgICk6IFByb21pc2U8VE9OQ29udHJhY3RSdW5HZXRSZXN1bHQ+IHtcbiAgICAgICAgbGV0IGNvcmVQYXJhbXM6IFRPTkNvbnRyYWN0UnVuR2V0UGFyYW1zID0gcGFyYW1zO1xuICAgICAgICBpZiAoIXBhcmFtcy5jb2RlQmFzZTY0IHx8ICFwYXJhbXMuZGF0YUJhc2U2NCkge1xuICAgICAgICAgICAgY29uc3QgYWRkcmVzcyA9IHBhcmFtcy5hZGRyZXNzO1xuICAgICAgICAgICAgaWYgKCFhZGRyZXNzKSB7XG4gICAgICAgICAgICAgICAgdGhyb3cgVE9OQ2xpZW50RXJyb3IuYWRkcmVzc1JlcXVpcmVkRm9yUnVuTG9jYWwoKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGNvbnN0IGFjY291bnQ6IGFueSA9IGF3YWl0IHRoaXMuZ2V0QWNjb3VudChhZGRyZXNzLCBmYWxzZSk7XG4gICAgICAgICAgICBpZiAoIWFjY291bnQuY29kZSkge1xuICAgICAgICAgICAgICAgIHRocm93IFRPTkNsaWVudEVycm9yLmFjY291bnRDb2RlTWlzc2luZyhhZGRyZXNzLCBhY2NvdW50LmJhbGFuY2UpO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgYWNjb3VudC5jb2RlQmFzZTY0ID0gYWNjb3VudC5jb2RlO1xuICAgICAgICAgICAgYWNjb3VudC5kYXRhQmFzZTY0ID0gYWNjb3VudC5kYXRhO1xuICAgICAgICAgICAgZGVsZXRlIGFjY291bnQuY29kZTtcbiAgICAgICAgICAgIGRlbGV0ZSBhY2NvdW50LmRhdGE7XG4gICAgICAgICAgICBjb3JlUGFyYW1zID0ge1xuICAgICAgICAgICAgICAgIC4uLmFjY291bnQsXG4gICAgICAgICAgICAgICAgLi4ucGFyYW1zLFxuICAgICAgICAgICAgfTtcbiAgICAgICAgfVxuICAgICAgICByZXR1cm4gdGhpcy5yZXF1ZXN0Q29yZSgndHZtLmdldCcsIGNvcmVQYXJhbXMpO1xuICAgIH1cblxuICAgIGFycmF5RnJvbUNPTlMoY29uczogYW55W10pOiBhbnlbXSB7XG4gICAgICAgIGNvbnN0IHJlc3VsdCA9IFtdO1xuICAgICAgICBsZXQgaXRlbSA9IGNvbnM7XG4gICAgICAgIHdoaWxlIChpdGVtKSB7XG4gICAgICAgICAgICBpZiAoIWl0ZW0ubGVuZ3RoID09PSAyKSB7XG4gICAgICAgICAgICAgICAgdGhyb3cgVE9OQ2xpZW50RXJyb3IuaW52YWxpZENvbnMoKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIHJlc3VsdC5wdXNoKGl0ZW1bMF0pO1xuICAgICAgICAgICAgaXRlbSA9IGl0ZW1bMV07XG4gICAgICAgIH1cbiAgICAgICAgcmV0dXJuIHJlc3VsdDtcbiAgICB9XG5cblxuICAgIC8vIE1lc3NhZ2UgY3JlYXRpb25cblxuICAgIGFzeW5jIGNyZWF0ZURlcGxveU1lc3NhZ2UoXG4gICAgICAgIHBhcmFtczogVE9OQ29udHJhY3REZXBsb3lQYXJhbXMsXG4gICAgICAgIHJldHJ5SW5kZXg/OiBudW1iZXIsXG4gICAgKTogUHJvbWlzZTxUT05Db250cmFjdERlcGxveU1lc3NhZ2U+IHtcbiAgICAgICAgdGhpcy5jb25maWcubG9nKCdjcmVhdGVEZXBsb3lNZXNzYWdlJywgcGFyYW1zKTtcbiAgICAgICAgY29uc3QgY29uc3RydWN0b3JIZWFkZXIgPSB0aGlzLm1ha2VFeHBpcmVIZWFkZXIoXG4gICAgICAgICAgICBwYXJhbXMucGFja2FnZS5hYmksXG4gICAgICAgICAgICBwYXJhbXMuY29uc3RydWN0b3JIZWFkZXIsXG4gICAgICAgICAgICByZXRyeUluZGV4LFxuICAgICAgICApO1xuICAgICAgICBjb25zdCBtZXNzYWdlOiB7XG4gICAgICAgICAgICBhZGRyZXNzOiBzdHJpbmcsXG4gICAgICAgICAgICBtZXNzYWdlSWQ6IHN0cmluZyxcbiAgICAgICAgICAgIG1lc3NhZ2VCb2R5QmFzZTY0OiBzdHJpbmcsXG4gICAgICAgIH0gPSBhd2FpdCB0aGlzLnJlcXVlc3RDb3JlKCdjb250cmFjdHMuZGVwbG95Lm1lc3NhZ2UnLCB7XG4gICAgICAgICAgICBhYmk6IHBhcmFtcy5wYWNrYWdlLmFiaSxcbiAgICAgICAgICAgIGNvbnN0cnVjdG9ySGVhZGVyLFxuICAgICAgICAgICAgY29uc3RydWN0b3JQYXJhbXM6IHBhcmFtcy5jb25zdHJ1Y3RvclBhcmFtcyxcbiAgICAgICAgICAgIGluaXRQYXJhbXM6IHBhcmFtcy5pbml0UGFyYW1zLFxuICAgICAgICAgICAgaW1hZ2VCYXNlNjQ6IHBhcmFtcy5wYWNrYWdlLmltYWdlQmFzZTY0LFxuICAgICAgICAgICAga2V5UGFpcjogcGFyYW1zLmtleVBhaXIsXG4gICAgICAgICAgICB3b3JrY2hhaW5JZDogcGFyYW1zLndvcmtjaGFpbklkLFxuICAgICAgICB9KTtcbiAgICAgICAgcmV0dXJuIHtcbiAgICAgICAgICAgIG1lc3NhZ2U6IHtcbiAgICAgICAgICAgICAgICBtZXNzYWdlSWQ6IG1lc3NhZ2UubWVzc2FnZUlkLFxuICAgICAgICAgICAgICAgIG1lc3NhZ2VCb2R5QmFzZTY0OiBtZXNzYWdlLm1lc3NhZ2VCb2R5QmFzZTY0LFxuICAgICAgICAgICAgICAgIGV4cGlyZTogY29uc3RydWN0b3JIZWFkZXI/LmV4cGlyZSxcbiAgICAgICAgICAgIH0sXG4gICAgICAgICAgICBhZGRyZXNzOiBtZXNzYWdlLmFkZHJlc3MsXG4gICAgICAgICAgICBjcmVhdGlvblRpbWU6IERhdGUubm93KCksXG4gICAgICAgIH07XG4gICAgfVxuXG5cbiAgICBhc3luYyBjcmVhdGVSdW5NZXNzYWdlKFxuICAgICAgICBwYXJhbXM6IFRPTkNvbnRyYWN0UnVuUGFyYW1zLFxuICAgICAgICByZXRyeUluZGV4PzogbnVtYmVyLFxuICAgICk6IFByb21pc2U8VE9OQ29udHJhY3RSdW5NZXNzYWdlPiB7XG4gICAgICAgIHRoaXMuY29uZmlnLmxvZygnY3JlYXRlUnVuTWVzc2FnZScsIHBhcmFtcyk7XG4gICAgICAgIGNvbnN0IGhlYWRlciA9IHRoaXMubWFrZUV4cGlyZUhlYWRlcihcbiAgICAgICAgICAgIHBhcmFtcy5hYmksXG4gICAgICAgICAgICBwYXJhbXMuaGVhZGVyLFxuICAgICAgICAgICAgcmV0cnlJbmRleCxcbiAgICAgICAgKTtcbiAgICAgICAgY29uc3QgbWVzc2FnZSA9IGF3YWl0IHRoaXMucmVxdWVzdENvcmUoJ2NvbnRyYWN0cy5ydW4ubWVzc2FnZScsIHtcbiAgICAgICAgICAgIGFkZHJlc3M6IHBhcmFtcy5hZGRyZXNzLFxuICAgICAgICAgICAgYWJpOiBwYXJhbXMuYWJpLFxuICAgICAgICAgICAgZnVuY3Rpb25OYW1lOiBwYXJhbXMuZnVuY3Rpb25OYW1lLFxuICAgICAgICAgICAgaGVhZGVyLFxuICAgICAgICAgICAgaW5wdXQ6IHBhcmFtcy5pbnB1dCxcbiAgICAgICAgICAgIGtleVBhaXI6IHBhcmFtcy5rZXlQYWlyLFxuICAgICAgICB9KTtcbiAgICAgICAgbWVzc2FnZS5leHBpcmUgPSBoZWFkZXI/LmV4cGlyZTtcbiAgICAgICAgcmV0dXJuIHtcbiAgICAgICAgICAgIGFkZHJlc3M6IHBhcmFtcy5hZGRyZXNzLFxuICAgICAgICAgICAgYWJpOiBwYXJhbXMuYWJpLFxuICAgICAgICAgICAgZnVuY3Rpb25OYW1lOiBwYXJhbXMuZnVuY3Rpb25OYW1lLFxuICAgICAgICAgICAgbWVzc2FnZSxcbiAgICAgICAgICAgIGNyZWF0aW9uVGltZTogRGF0ZS5ub3coKSxcbiAgICAgICAgfTtcbiAgICB9XG5cbiAgICBhc3luYyBjcmVhdGVVbnNpZ25lZERlcGxveU1lc3NhZ2UoXG4gICAgICAgIHBhcmFtczogVE9OQ29udHJhY3REZXBsb3lQYXJhbXMsXG4gICAgICAgIHJldHJ5SW5kZXg/OiBudW1iZXIsXG4gICAgKTogUHJvbWlzZTxUT05Db250cmFjdFVuc2lnbmVkRGVwbG95TWVzc2FnZT4ge1xuICAgICAgICBjb25zdCBjb25zdHJ1Y3RvckhlYWRlciA9IHRoaXMubWFrZUV4cGlyZUhlYWRlcihcbiAgICAgICAgICAgIHBhcmFtcy5wYWNrYWdlLmFiaSxcbiAgICAgICAgICAgIHBhcmFtcy5jb25zdHJ1Y3RvckhlYWRlcixcbiAgICAgICAgICAgIHJldHJ5SW5kZXgsXG4gICAgICAgICk7XG4gICAgICAgIGNvbnN0IHJlc3VsdDoge1xuICAgICAgICAgICAgZW5jb2RlZDogVE9OQ29udHJhY3RVbnNpZ25lZE1lc3NhZ2UsXG4gICAgICAgICAgICBhZGRyZXNzSGV4OiBzdHJpbmcsXG4gICAgICAgIH0gPSBhd2FpdCB0aGlzLnJlcXVlc3RDb3JlKCdjb250cmFjdHMuZGVwbG95LmVuY29kZV91bnNpZ25lZF9tZXNzYWdlJywge1xuICAgICAgICAgICAgYWJpOiBwYXJhbXMucGFja2FnZS5hYmksXG4gICAgICAgICAgICBjb25zdHJ1Y3RvckhlYWRlcixcbiAgICAgICAgICAgIGNvbnN0cnVjdG9yUGFyYW1zOiBwYXJhbXMuY29uc3RydWN0b3JQYXJhbXMsXG4gICAgICAgICAgICBpbml0UGFyYW1zOiBwYXJhbXMuaW5pdFBhcmFtcyxcbiAgICAgICAgICAgIGltYWdlQmFzZTY0OiBwYXJhbXMucGFja2FnZS5pbWFnZUJhc2U2NCxcbiAgICAgICAgICAgIHB1YmxpY0tleUhleDogcGFyYW1zLmtleVBhaXIucHVibGljLFxuICAgICAgICAgICAgd29ya2NoYWluSWQ6IHBhcmFtcy53b3JrY2hhaW5JZCxcbiAgICAgICAgfSk7XG4gICAgICAgIHJldHVybiB7XG4gICAgICAgICAgICBhZGRyZXNzOiByZXN1bHQuYWRkcmVzc0hleCxcbiAgICAgICAgICAgIHNpZ25QYXJhbXM6IHtcbiAgICAgICAgICAgICAgICAuLi5yZXN1bHQuZW5jb2RlZCxcbiAgICAgICAgICAgICAgICBhYmk6IHBhcmFtcy5wYWNrYWdlLmFiaSxcbiAgICAgICAgICAgICAgICBleHBpcmU6IGNvbnN0cnVjdG9ySGVhZGVyPy5leHBpcmUsXG4gICAgICAgICAgICB9LFxuICAgICAgICB9O1xuICAgIH1cblxuXG4gICAgYXN5bmMgY3JlYXRlVW5zaWduZWRSdW5NZXNzYWdlKFxuICAgICAgICBwYXJhbXM6IFRPTkNvbnRyYWN0UnVuUGFyYW1zLFxuICAgICAgICByZXRyeUluZGV4PzogbnVtYmVyLFxuICAgICk6IFByb21pc2U8VE9OQ29udHJhY3RVbnNpZ25lZFJ1bk1lc3NhZ2U+IHtcbiAgICAgICAgY29uc3QgaGVhZGVyID0gdGhpcy5tYWtlRXhwaXJlSGVhZGVyKFxuICAgICAgICAgICAgcGFyYW1zLmFiaSxcbiAgICAgICAgICAgIHBhcmFtcy5oZWFkZXIsXG4gICAgICAgICAgICByZXRyeUluZGV4LFxuICAgICAgICApO1xuICAgICAgICBjb25zdCBzaWduUGFyYW1zID0gYXdhaXQgdGhpcy5yZXF1ZXN0Q29yZSgnY29udHJhY3RzLnJ1bi5lbmNvZGVfdW5zaWduZWRfbWVzc2FnZScsIHtcbiAgICAgICAgICAgIGFkZHJlc3M6IHBhcmFtcy5hZGRyZXNzLFxuICAgICAgICAgICAgYWJpOiBwYXJhbXMuYWJpLFxuICAgICAgICAgICAgZnVuY3Rpb25OYW1lOiBwYXJhbXMuZnVuY3Rpb25OYW1lLFxuICAgICAgICAgICAgaGVhZGVyLFxuICAgICAgICAgICAgaW5wdXQ6IHBhcmFtcy5pbnB1dCxcbiAgICAgICAgfSk7XG4gICAgICAgIHJldHVybiB7XG4gICAgICAgICAgICBhZGRyZXNzOiBwYXJhbXMuYWRkcmVzcyxcbiAgICAgICAgICAgIGZ1bmN0aW9uTmFtZTogcGFyYW1zLmZ1bmN0aW9uTmFtZSxcbiAgICAgICAgICAgIHNpZ25QYXJhbXM6IHtcbiAgICAgICAgICAgICAgICAuLi5zaWduUGFyYW1zLFxuICAgICAgICAgICAgICAgIGFiaTogcGFyYW1zLmFiaSxcbiAgICAgICAgICAgICAgICBleHBpcmU6IGhlYWRlcj8uZXhwaXJlLFxuICAgICAgICAgICAgfSxcbiAgICAgICAgfTtcbiAgICB9XG5cblxuICAgIGFzeW5jIGNyZWF0ZVNpZ25lZE1lc3NhZ2UoXG4gICAgICAgIHBhcmFtczogVE9OQ29udHJhY3RDcmVhdGVTaWduZWRNZXNzYWdlUGFyYW1zLFxuICAgICk6IFByb21pc2U8VE9OQ29udHJhY3RNZXNzYWdlPiB7XG4gICAgICAgIHJldHVybiB0aGlzLnJlcXVlc3RDb3JlKCdjb250cmFjdHMuZW5jb2RlX21lc3NhZ2Vfd2l0aF9zaWduJywgcGFyYW1zKTtcbiAgICB9XG5cblxuICAgIGFzeW5jIGNyZWF0ZVNpZ25lZERlcGxveU1lc3NhZ2UoXG4gICAgICAgIHBhcmFtczogVE9OQ29udHJhY3RDcmVhdGVTaWduZWREZXBsb3lNZXNzYWdlUGFyYW1zLFxuICAgICk6IFByb21pc2U8VE9OQ29udHJhY3REZXBsb3lNZXNzYWdlPiB7XG4gICAgICAgIGNvbnN0IG1lc3NhZ2UgPSBhd2FpdCB0aGlzLmNyZWF0ZVNpZ25lZE1lc3NhZ2Uoe1xuICAgICAgICAgICAgYWJpOiBwYXJhbXMudW5zaWduZWRNZXNzYWdlLnNpZ25QYXJhbXMuYWJpLFxuICAgICAgICAgICAgdW5zaWduZWRCeXRlc0Jhc2U2NDogcGFyYW1zLnVuc2lnbmVkTWVzc2FnZS5zaWduUGFyYW1zLnVuc2lnbmVkQnl0ZXNCYXNlNjQsXG4gICAgICAgICAgICBzaWduQnl0ZXNCYXNlNjQ6IHBhcmFtcy5zaWduQnl0ZXNCYXNlNjQsXG4gICAgICAgICAgICBwdWJsaWNLZXlIZXg6IHBhcmFtcy5wdWJsaWNLZXlIZXgsXG4gICAgICAgIH0pO1xuICAgICAgICBtZXNzYWdlLmV4cGlyZSA9IHBhcmFtcy51bnNpZ25lZE1lc3NhZ2Uuc2lnblBhcmFtcy5leHBpcmU7XG4gICAgICAgIHJldHVybiB7XG4gICAgICAgICAgICBhZGRyZXNzOiBwYXJhbXMudW5zaWduZWRNZXNzYWdlLmFkZHJlc3MsXG4gICAgICAgICAgICBtZXNzYWdlLFxuICAgICAgICAgICAgY3JlYXRpb25UaW1lOiBEYXRlLm5vdygpLFxuICAgICAgICB9O1xuICAgIH1cblxuXG4gICAgYXN5bmMgY3JlYXRlU2lnbmVkUnVuTWVzc2FnZShcbiAgICAgICAgcGFyYW1zOiBUT05Db250cmFjdENyZWF0ZVNpZ25lZFJ1bk1lc3NhZ2VQYXJhbXMsXG4gICAgKTogUHJvbWlzZTxUT05Db250cmFjdFJ1bk1lc3NhZ2U+IHtcbiAgICAgICAgY29uc3QgbWVzc2FnZSA9IGF3YWl0IHRoaXMuY3JlYXRlU2lnbmVkTWVzc2FnZSh7XG4gICAgICAgICAgICBhYmk6IHBhcmFtcy51bnNpZ25lZE1lc3NhZ2Uuc2lnblBhcmFtcy5hYmksXG4gICAgICAgICAgICB1bnNpZ25lZEJ5dGVzQmFzZTY0OiBwYXJhbXMudW5zaWduZWRNZXNzYWdlLnNpZ25QYXJhbXMudW5zaWduZWRCeXRlc0Jhc2U2NCxcbiAgICAgICAgICAgIHNpZ25CeXRlc0Jhc2U2NDogcGFyYW1zLnNpZ25CeXRlc0Jhc2U2NCxcbiAgICAgICAgICAgIHB1YmxpY0tleUhleDogcGFyYW1zLnB1YmxpY0tleUhleCxcbiAgICAgICAgfSk7XG4gICAgICAgIG1lc3NhZ2UuZXhwaXJlID0gcGFyYW1zLnVuc2lnbmVkTWVzc2FnZS5zaWduUGFyYW1zLmV4cGlyZTtcbiAgICAgICAgcmV0dXJuIHtcbiAgICAgICAgICAgIGFkZHJlc3M6IHBhcmFtcy51bnNpZ25lZE1lc3NhZ2UuYWRkcmVzcyxcbiAgICAgICAgICAgIGFiaTogcGFyYW1zLnVuc2lnbmVkTWVzc2FnZS5zaWduUGFyYW1zLmFiaSxcbiAgICAgICAgICAgIGZ1bmN0aW9uTmFtZTogcGFyYW1zLnVuc2lnbmVkTWVzc2FnZS5mdW5jdGlvbk5hbWUsXG4gICAgICAgICAgICBtZXNzYWdlLFxuICAgICAgICAgICAgY3JlYXRpb25UaW1lOiBEYXRlLm5vdygpLFxuICAgICAgICB9O1xuICAgIH1cblxuICAgIGFzeW5jIGdldENvZGVGcm9tSW1hZ2UoXG4gICAgICAgIHBhcmFtczogVE9OQ29udHJhY3RHZXRDb2RlRnJvbUltYWdlUGFyYW1zLFxuICAgICk6IFByb21pc2U8VE9OQ29udHJhY3RHZXRDb2RlRnJvbUltYWdlUmVzdWx0PiB7XG4gICAgICAgIHJldHVybiB0aGlzLnJlcXVlc3RDb3JlKCdjb250cmFjdHMuaW1hZ2UuY29kZScsIHBhcmFtcyk7XG4gICAgfVxuXG4gICAgYXN5bmMgZ2V0RGVwbG95RGF0YShcbiAgICAgICAgcGFyYW1zOiBUT05Db250cmFjdEdldERlcGxveURhdGFQYXJhbXMsXG4gICAgKTogUHJvbWlzZTxUT05Db250cmFjdEdldERlcGxveURhdGFSZXN1bHQ+IHtcbiAgICAgICAgcmV0dXJuIHRoaXMucmVxdWVzdENvcmUoJ2NvbnRyYWN0cy5kZXBsb3kuZGF0YScsIHBhcmFtcyk7XG4gICAgfVxuXG4gICAgYXN5bmMgY3JlYXRlUnVuQm9keShcbiAgICAgICAgcGFyYW1zOiBUT05Db250cmFjdENyZWF0ZVJ1bkJvZHlQYXJhbXMsXG4gICAgKTogUHJvbWlzZTxUT05Db250cmFjdENyZWF0ZVJ1bkJvZHlSZXN1bHQ+IHtcbiAgICAgICAgcmV0dXJuIHRoaXMucmVxdWVzdENvcmUoJ2NvbnRyYWN0cy5ydW4uYm9keScsIHBhcmFtcyk7XG4gICAgfVxuXG4gICAgYXN5bmMgZ2V0RnVuY3Rpb25JZChcbiAgICAgICAgcGFyYW1zOiBUT05Db250cmFjdEdldEZ1bmN0aW9uSWRQYXJhbXMsXG4gICAgKTogUHJvbWlzZTxUT05Db250cmFjdEdldEZ1bmN0aW9uSWRSZXN1bHQ+IHtcbiAgICAgICAgcmV0dXJuIHRoaXMucmVxdWVzdENvcmUoJ2NvbnRyYWN0cy5mdW5jdGlvbi5pZCcsIHBhcmFtcyk7XG4gICAgfVxuXG4gICAgYXN5bmMgZ2V0Qm9jSGFzaChcbiAgICAgICAgcGFyYW1zOiBUT05Db250cmFjdEJvYyxcbiAgICApOiBQcm9taXNlPFRPTkNvbnRyYWN0R2V0Qm9jSGFzaFJlc3VsdD4ge1xuICAgICAgICByZXR1cm4gdGhpcy5yZXF1ZXN0Q29yZSgnY29udHJhY3RzLmJvYy5oYXNoJywgcGFyYW1zKTtcbiAgICB9XG5cbiAgICBhc3luYyBwYXJzZU1lc3NhZ2UoXG4gICAgICAgIHBhcmFtczogVE9OQ29udHJhY3RCb2MsXG4gICAgKTogUHJvbWlzZTxRTWVzc2FnZT4ge1xuICAgICAgICByZXR1cm4gdGhpcy5yZXF1ZXN0Q29yZSgnY29udHJhY3RzLnBhcnNlLm1lc3NhZ2UnLCBwYXJhbXMpO1xuICAgIH1cblxuICAgIC8vIE1lc3NhZ2UgcGFyc2luZ1xuXG4gICAgYXN5bmMgZGVjb2RlUnVuT3V0cHV0KFxuICAgICAgICBwYXJhbXM6IFRPTkNvbnRyYWN0RGVjb2RlUnVuT3V0cHV0UGFyYW1zLFxuICAgICk6IFByb21pc2U8VE9OQ29udHJhY3RSdW5SZXN1bHQ+IHtcbiAgICAgICAgcmV0dXJuIHRoaXMucmVxdWVzdENvcmUoJ2NvbnRyYWN0cy5ydW4ub3V0cHV0JywgcGFyYW1zKTtcbiAgICB9XG5cblxuICAgIGFzeW5jIGRlY29kZUlucHV0TWVzc2FnZUJvZHkoXG4gICAgICAgIHBhcmFtczogVE9OQ29udHJhY3REZWNvZGVNZXNzYWdlQm9keVBhcmFtcyxcbiAgICApOiBQcm9taXNlPFRPTkNvbnRyYWN0RGVjb2RlTWVzc2FnZUJvZHlSZXN1bHQ+IHtcbiAgICAgICAgcmV0dXJuIHRoaXMucmVxdWVzdENvcmUoJ2NvbnRyYWN0cy5ydW4udW5rbm93bi5pbnB1dCcsIHBhcmFtcyk7XG4gICAgfVxuXG5cbiAgICBhc3luYyBkZWNvZGVPdXRwdXRNZXNzYWdlQm9keShcbiAgICAgICAgcGFyYW1zOiBUT05Db250cmFjdERlY29kZU1lc3NhZ2VCb2R5UGFyYW1zLFxuICAgICk6IFByb21pc2U8VE9OQ29udHJhY3REZWNvZGVNZXNzYWdlQm9keVJlc3VsdD4ge1xuICAgICAgICByZXR1cm4gdGhpcy5yZXF1ZXN0Q29yZSgnY29udHJhY3RzLnJ1bi51bmtub3duLm91dHB1dCcsIHBhcmFtcyk7XG4gICAgfVxuXG4gICAgLy8gTWVzc2FnZSBwcm9jZXNzaW5nXG5cbiAgICBhc3luYyBnZXRNZXNzYWdlSWQobWVzc2FnZTogVE9OQ29udHJhY3RNZXNzYWdlKTogUHJvbWlzZTxzdHJpbmc+IHtcbiAgICAgICAgcmV0dXJuIG1lc3NhZ2UubWVzc2FnZUlkIHx8IChhd2FpdCB0aGlzLmdldEJvY0hhc2goe1xuICAgICAgICAgICAgYm9jQmFzZTY0OiBtZXNzYWdlLm1lc3NhZ2VCb2R5QmFzZTY0LFxuICAgICAgICB9KSkuaGFzaDtcbiAgICB9XG5cbiAgICBhc3luYyBzZW5kTWVzc2FnZShcbiAgICAgICAgcGFyYW1zOiBUT05Db250cmFjdE1lc3NhZ2UsXG4gICAgICAgIHBhcmVudFNwYW4/OiAoU3BhbiB8IFNwYW5Db250ZXh0KSxcbiAgICApOiBQcm9taXNlPHN0cmluZz4ge1xuICAgICAgICBjb25zdCBleHBpcmUgPSBwYXJhbXMuZXhwaXJlO1xuICAgICAgICBpZiAoZXhwaXJlICYmIChEYXRlLm5vdygpID4gZXhwaXJlICogMTAwMCkpIHtcbiAgICAgICAgICAgIHRocm93IFRPTkNsaWVudEVycm9yLnNlbmROb2RlUmVxdWVzdEZhaWxlZCgnTWVzc2FnZSBhbHJlYWR5IGV4cGlyZWQnKTtcbiAgICAgICAgfVxuICAgICAgICBjb25zdCBzZXJ2ZXJUaW1lRGVsdGEgPSBNYXRoLmFicyhhd2FpdCB0aGlzLnF1ZXJpZXMuc2VydmVyVGltZURlbHRhKHBhcmVudFNwYW4pKTtcbiAgICAgICAgaWYgKHNlcnZlclRpbWVEZWx0YSA+IHRoaXMuY29uZmlnLm91dE9mU3luY1RocmVzaG9sZCgpKSB7XG4gICAgICAgICAgICB0aGlzLnF1ZXJpZXMuZHJvcFNlcnZlclRpbWVEZWx0YSgpO1xuICAgICAgICAgICAgdGhyb3cgVE9OQ2xpZW50RXJyb3IuY2xvY2tPdXRPZlN5bmMoKTtcbiAgICAgICAgfVxuICAgICAgICBjb25zdCBpZCA9IGF3YWl0IHRoaXMuZ2V0TWVzc2FnZUlkKHBhcmFtcyk7XG4gICAgICAgIGNvbnN0IGlkQmFzZTY0ID0gQnVmZmVyLmZyb20oaWQsICdoZXgnKVxuICAgICAgICAgICAgLnRvU3RyaW5nKCdiYXNlNjQnKTtcbiAgICAgICAgYXdhaXQgdGhpcy5xdWVyaWVzLnBvc3RSZXF1ZXN0cyhbXG4gICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgaWQ6IGlkQmFzZTY0LFxuICAgICAgICAgICAgICAgIGJvZHk6IHBhcmFtcy5tZXNzYWdlQm9keUJhc2U2NCxcbiAgICAgICAgICAgIH0sXG4gICAgICAgIF0sIHBhcmVudFNwYW4pO1xuICAgICAgICB0aGlzLmNvbmZpZy5sb2coJ3NlbmRNZXNzYWdlLiBSZXF1ZXN0IHBvc3RlZCcsIGlkKTtcbiAgICAgICAgcmV0dXJuIGlkO1xuICAgIH1cblxuICAgIGFzeW5jIHByb2Nlc3NNZXNzYWdlKFxuICAgICAgICBtZXNzYWdlOiBUT05Db250cmFjdE1lc3NhZ2UsXG4gICAgICAgIHJlc3VsdEZpZWxkczogc3RyaW5nLFxuICAgICAgICBwYXJlbnRTcGFuPzogKFNwYW4gfCBTcGFuQ29udGV4dCksXG4gICAgICAgIHJldHJ5SW5kZXg/OiBudW1iZXIsXG4gICAgICAgIGFkZHJlc3M/OiBzdHJpbmcsXG4gICAgICAgIGFiaT86IFRPTkNvbnRyYWN0QUJJLFxuICAgICAgICBmdW5jdGlvbk5hbWU/OiBzdHJpbmcsXG4gICAgICAgIG1lc3NhZ2VDcmVhdGlvblRpbWU/OiBudW1iZXIsXG4gICAgKTogUHJvbWlzZTxRVHJhbnNhY3Rpb24+IHtcbiAgICAgICAgYXdhaXQgdGhpcy5zZW5kTWVzc2FnZShtZXNzYWdlLCBwYXJlbnRTcGFuKTtcbiAgICAgICAgcmV0dXJuIHRoaXMud2FpdEZvclRyYW5zYWN0aW9uKFxuICAgICAgICAgICAgYWRkcmVzcyB8fCAnJyxcbiAgICAgICAgICAgIG1lc3NhZ2UsXG4gICAgICAgICAgICByZXN1bHRGaWVsZHMsXG4gICAgICAgICAgICBwYXJlbnRTcGFuLFxuICAgICAgICAgICAgcmV0cnlJbmRleCxcbiAgICAgICAgICAgIG1lc3NhZ2VDcmVhdGlvblRpbWUsXG4gICAgICAgICAgICBhYmksXG4gICAgICAgICAgICBmdW5jdGlvbk5hbWUsXG4gICAgICAgICk7XG4gICAgfVxuXG5cbiAgICBhc3luYyB3YWl0Rm9yVHJhbnNhY3Rpb24oXG4gICAgICAgIGFkZHJlc3M6IHN0cmluZyxcbiAgICAgICAgbWVzc2FnZTogVE9OQ29udHJhY3RNZXNzYWdlLFxuICAgICAgICByZXN1bHRGaWVsZHM6IHN0cmluZyxcbiAgICAgICAgcGFyZW50U3Bhbj86IChTcGFuIHwgU3BhbkNvbnRleHQpLFxuICAgICAgICByZXRyeUluZGV4PzogbnVtYmVyLFxuICAgICAgICBtZXNzYWdlQ3JlYXRpb25UaW1lPzogbnVtYmVyLFxuICAgICAgICBhYmk/OiBUT05Db250cmFjdEFCSSxcbiAgICAgICAgZnVuY3Rpb25OYW1lPzogc3RyaW5nLFxuICAgICk6IFByb21pc2U8UVRyYW5zYWN0aW9uPiB7XG4gICAgICAgIGNvbnN0IG1lc3NhZ2VJZCA9IGF3YWl0IHRoaXMuZ2V0TWVzc2FnZUlkKG1lc3NhZ2UpO1xuICAgICAgICBjb25zdCBjb25maWcgPSB0aGlzLmNvbmZpZztcbiAgICAgICAgbGV0IHByb2Nlc3NpbmdUaW1lb3V0ID0gY29uZmlnLm1lc3NhZ2VQcm9jZXNzaW5nVGltZW91dChyZXRyeUluZGV4KTtcbiAgICAgICAgY29uc3QgcHJvbWlzZXMgPSBbXTtcbiAgICAgICAgY29uc3Qgc2VydmVySW5mbyA9IGF3YWl0IHRoaXMucXVlcmllcy5nZXRTZXJ2ZXJJbmZvKHBhcmVudFNwYW4pO1xuICAgICAgICBjb25zdCBvcGVyYXRpb25JZCA9IHNlcnZlckluZm8uc3VwcG9ydHNPcGVyYXRpb25JZFxuICAgICAgICAgICAgPyB0aGlzLnF1ZXJpZXMuZ2VuZXJhdGVPcGVyYXRpb25JZCgpXG4gICAgICAgICAgICA6IHVuZGVmaW5lZDtcbiAgICAgICAgbGV0IHRyYW5zYWN0aW9uOiA/UVRyYW5zYWN0aW9uID0gbnVsbDtcbiAgICAgICAgbGV0IHNlbmRUaW1lID0gRGF0ZS5ub3coKSAvIDEwMDA7XG4gICAgICAgIHRyeSB7XG4gICAgICAgICAgICBjb25zdCBleHBpcmUgPSBtZXNzYWdlLmV4cGlyZTtcbiAgICAgICAgICAgIGlmIChleHBpcmUpIHtcbiAgICAgICAgICAgICAgICAvLyBjYWxjdWxhdGUgdGltZW91dCBhY2NvcmRpbmcgdG8gYGV4cGlyZWAgdmFsdWUgKGluIHNlY29uZHMpXG4gICAgICAgICAgICAgICAgLy8gYWRkIHByb2Nlc3NpbmcgdGltZW91dCBhcyBtYXN0ZXIgYmxvY2sgdmFsaWRhdGlvbiB0aW1lXG4gICAgICAgICAgICAgICAgbGV0IGJsb2NrVGltZW91dCA9IGV4cGlyZSAqIDEwMDAgLSBEYXRlLm5vdygpICsgcHJvY2Vzc2luZ1RpbWVvdXQ7XG4gICAgICAgICAgICAgICAgLy8gdHJhbnNhY3Rpb24gdGltZW91dCBtdXN0IGJlIGdyZWF0ZXIgdGhlbiBibG9jayB0aW1lb3V0XG4gICAgICAgICAgICAgICAgcHJvY2Vzc2luZ1RpbWVvdXQgPSBibG9ja1RpbWVvdXQgKyAxMDAwMDtcblxuXG4gICAgICAgICAgICAgICAgY29uc3Qgd2FpdEV4cGlyZWQgPSBhc3luYyAoKSA9PiB7XG4gICAgICAgICAgICAgICAgICAgIC8vIHdhaXQgZm9yIGJsb2NrLCBwcm9kdWNlZCBhZnRlciBgZXhwaXJlYCB0byBndWFyYW50ZWUgdGhhdCBtZXNzYWdlIGlzIHJlamVjdGVkXG4gICAgICAgICAgICAgICAgICAgIGxldCBibG9jazogP1FCbG9jayA9IG51bGw7XG4gICAgICAgICAgICAgICAgICAgIHRyeSB7XG4gICAgICAgICAgICAgICAgICAgICAgICBibG9jayA9IGF3YWl0IHRoaXMucXVlcmllcy5ibG9ja3Mud2FpdEZvcih7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgZmlsdGVyOiB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIG1hc3RlcjogeyBtaW5fc2hhcmRfZ2VuX3V0aW1lOiB7IGdlOiBleHBpcmUgfSB9LFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgcmVzdWx0OiAnaWQgaW5fbXNnX2Rlc2NyIHsgdHJhbnNhY3Rpb25faWQgfScsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgdGltZW91dDogYmxvY2tUaW1lb3V0LFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHBhcmVudFNwYW4sXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgb3BlcmF0aW9uSWQsXG4gICAgICAgICAgICAgICAgICAgICAgICB9KTtcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICBjYXRjaChlcnJvcikge1xuICAgICAgICAgICAgICAgICAgICAgICAgaWYoVE9OQ2xpZW50RXJyb3IuaXNXYWl0Zm9yVGltZW91dChlcnJvcikpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB0aHJvdyBUT05DbGllbnRFcnJvci5uZXR3b3JrU2lsZW50KFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBtZXNzYWdlSWQsIHNlbmRUaW1lLCBleHBpcmUsIGJsb2NrVGltZW91dCk7XG4gICAgICAgICAgICAgICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRocm93IGVycm9yO1xuICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICB9XG5cbiAgICAgICAgICAgICAgICAgICAgaWYgKHRyYW5zYWN0aW9uKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICByZXR1cm47XG4gICAgICAgICAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgICAgICAgICBjb25zdCB0cmFuc2FjdGlvbl9pZCA9IGJsb2NrLmluX21zZ19kZXNjclxuICAgICAgICAgICAgICAgICAgICAgICAgJiYgYmxvY2suaW5fbXNnX2Rlc2NyLmZpbmQobXNnID0+ICEhbXNnLnRyYW5zYWN0aW9uX2lkKT8udHJhbnNhY3Rpb25faWQ7XG5cbiAgICAgICAgICAgICAgICAgICAgaWYgKCF0cmFuc2FjdGlvbl9pZCkge1xuICAgICAgICAgICAgICAgICAgICAgICAgdGhyb3cgVE9OQ2xpZW50RXJyb3IuaW50ZXJuYWxFcnJvcihcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAnSW52YWxpZCBibG9jayByZWNlaXZlZDogbm8gdHJhbnNhY3Rpb24gSUQnLFxuICAgICAgICAgICAgICAgICAgICAgICAgKTtcbiAgICAgICAgICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICAgICAgICAgIC8vIGNoZWNrIHRoYXQgdHJhbnNhY3Rpb25zIGNvbGxlY3Rpb24gaXMgdXBkYXRlZFxuICAgICAgICAgICAgICAgICAgICB0cnkge1xuICAgICAgICAgICAgICAgICAgICAgICBhd2FpdCB0aGlzLnF1ZXJpZXMudHJhbnNhY3Rpb25zLndhaXRGb3Ioe1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGZpbHRlcjoge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBpZDogeyBlcTogdHJhbnNhY3Rpb25faWQgfSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHJlc3VsdDogJ2lkJyxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB0aW1lb3V0OiA1MDAwLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHBhcmVudFNwYW4sXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgb3BlcmF0aW9uSWQsXG4gICAgICAgICAgICAgICAgICAgICAgICB9KTsgXG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgY2F0Y2goZXJyb3IpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIGlmKFRPTkNsaWVudEVycm9yLmlzV2FpdGZvclRpbWVvdXQoZXJyb3IpKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgdGhyb3cgVE9OQ2xpZW50RXJyb3IudHJhbnNhY3Rpb25MYWcoXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIG1lc3NhZ2VJZCwgYmxvY2suaWQsIHRyYW5zYWN0aW9uX2lkLCA1MDAwKTtcbiAgICAgICAgICAgICAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgdGhyb3cgZXJyb3I7XG4gICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgXG4gICAgICAgICAgICAgICAgfTtcblxuICAgICAgICAgICAgICAgIHByb21pc2VzLnB1c2god2FpdEV4cGlyZWQoKSk7XG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICAgIC8vIHdhaXQgZm9yIG1lc3NhZ2UgcHJvY2Vzc2luZyB0cmFuc2FjdGlvblxuICAgICAgICAgICAgcHJvbWlzZXMucHVzaChuZXcgUHJvbWlzZSgocmVzb2x2ZSwgcmVqZWN0KSA9PiB7XG4gICAgICAgICAgICAgICAgKGFzeW5jICgpID0+IHtcbiAgICAgICAgICAgICAgICAgICAgdHJ5IHtcbiAgICAgICAgICAgICAgICAgICAgICAgIHRyYW5zYWN0aW9uID0gYXdhaXQgdGhpcy5xdWVyaWVzLnRyYW5zYWN0aW9ucy53YWl0Rm9yKHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBmaWx0ZXI6IHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgaW5fbXNnOiB7IGVxOiBtZXNzYWdlSWQgfSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgc3RhdHVzOiB7IGVxOiBRVHJhbnNhY3Rpb25Qcm9jZXNzaW5nU3RhdHVzLmZpbmFsaXplZCB9LFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgcmVzdWx0OiByZXN1bHRGaWVsZHMsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgdGltZW91dDogcHJvY2Vzc2luZ1RpbWVvdXQsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgb3BlcmF0aW9uSWQsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgcGFyZW50U3BhbixcbiAgICAgICAgICAgICAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgICAgICAgICAgICAgcmVzb2x2ZSgpO1xuICAgICAgICAgICAgICAgICAgICB9IGNhdGNoIChlcnJvcikge1xuICAgICAgICAgICAgICAgICAgICAgICAgcmVqZWN0KGVycm9yKTtcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIH0pKCk7XG4gICAgICAgICAgICB9KSk7XG5cbiAgICAgICAgICAgIHRyeSB7XG4gICAgICAgICAgICAgICAgYXdhaXQgUHJvbWlzZS5yYWNlKHByb21pc2VzKTtcbiAgICAgICAgICAgIH0gZmluYWxseSB7XG4gICAgICAgICAgICAgICAgaWYgKHByb21pc2VzLmxlbmd0aCA+IDEgJiYgb3BlcmF0aW9uSWQpIHtcbiAgICAgICAgICAgICAgICAgICAgYXdhaXQgdGhpcy5xdWVyaWVzLmZpbmlzaE9wZXJhdGlvbnMoW29wZXJhdGlvbklkXSk7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICBpZiAoIXRyYW5zYWN0aW9uKSB7XG4gICAgICAgICAgICAgICAgdGhyb3cgVE9OQ2xpZW50RXJyb3IubWVzc2FnZUV4cGlyZWQoKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGNvbnN0IHRyYW5zYWN0aW9uTm93ID0gdHJhbnNhY3Rpb24ubm93IHx8IDA7XG4gICAgICAgICAgICB0aGlzLmNvbmZpZy5sb2coJ3dhaXRGb3JUcmFuc2FjdGlvbi4gdHJhbnNhY3Rpb24gcmVjZWl2ZWQnLCB7XG4gICAgICAgICAgICAgICAgaWQ6IHRyYW5zYWN0aW9uLmlkLFxuICAgICAgICAgICAgICAgIGJsb2NrX2lkOiB0cmFuc2FjdGlvbi5ibG9ja19pZCxcbiAgICAgICAgICAgICAgICBub3c6IGAke25ldyBEYXRlKHRyYW5zYWN0aW9uTm93ICogMTAwMCkudG9JU09TdHJpbmcoKX0gKCR7dHJhbnNhY3Rpb25Ob3d9KWAsXG4gICAgICAgICAgICB9KTtcbiAgICAgICAgfSBjYXRjaCAoZXJyb3IpIHtcbiAgICAgICAgICAgIHRoaXMuY29uZmlnLmxvZygnd2FpdEZvclRyYW5zYWN0aW9uLiBFcnJvciByZWNpZXZlZCcsIGVycm9yLCAnXFxuIFJlc292aW5nJyk7XG4gICAgICAgICAgICB0aHJvdyBhd2FpdCB0aGlzLnJlc29sdmVEZXRhaWxlZEVycm9yKFxuICAgICAgICAgICAgICAgIGVycm9yLFxuICAgICAgICAgICAgICAgIG1lc3NhZ2UubWVzc2FnZUJvZHlCYXNlNjQsXG4gICAgICAgICAgICAgICAgbWVzc2FnZUNyZWF0aW9uVGltZSB8fCBEYXRlLm5vdygpLFxuICAgICAgICAgICAgICAgIGFkZHJlc3MsXG4gICAgICAgICAgICApO1xuICAgICAgICB9XG4gICAgICAgIHJlbW92ZVR5cGVOYW1lKHRyYW5zYWN0aW9uKTtcbiAgICAgICAgYXdhaXQgdGhpcy5jaGVja1RyYW5zYWN0aW9uKGFkZHJlc3MsIHRyYW5zYWN0aW9uLCBhYmksIGZ1bmN0aW9uTmFtZSk7XG4gICAgICAgIHJldHVybiB0cmFuc2FjdGlvbjtcbiAgICB9XG5cbiAgICBhc3luYyBjaGVja1RyYW5zYWN0aW9uKFxuICAgICAgICBhZGRyZXNzOiBzdHJpbmcsXG4gICAgICAgIHRyYW5zYWN0aW9uOiBRVHJhbnNhY3Rpb24sXG4gICAgICAgIGFiaT86IFRPTkNvbnRyYWN0QUJJLFxuICAgICAgICBmdW5jdGlvbk5hbWU/OiBzdHJpbmcsXG4gICAgKSB7XG4gICAgICAgIHRyeSB7XG4gICAgICAgICAgICBhd2FpdCB0aGlzLnJlcXVlc3RDb3JlKCdjb250cmFjdHMucHJvY2Vzcy50cmFuc2FjdGlvbicsIHtcbiAgICAgICAgICAgICAgICB0cmFuc2FjdGlvbixcbiAgICAgICAgICAgICAgICBhYmk6IGFiaSB8fCBudWxsLFxuICAgICAgICAgICAgICAgIGZ1bmN0aW9uTmFtZTogZnVuY3Rpb25OYW1lIHx8IG51bGwsXG4gICAgICAgICAgICAgICAgYWRkcmVzcyxcbiAgICAgICAgICAgIH0pO1xuICAgICAgICB9IGNhdGNoIChlcnJvcikge1xuICAgICAgICAgICAgY29uc3QgYWNjb3VudHMgPSBhd2FpdCB0aGlzLnF1ZXJpZXMuYWNjb3VudHMucXVlcnkoe1xuICAgICAgICAgICAgICAgIGZpbHRlcjogeyBpZDogeyBlcTogYWRkcmVzcyB9IH0sXG4gICAgICAgICAgICAgICAgcmVzdWx0OiAnYWNjX3R5cGUgYmFsYW5jZScsXG4gICAgICAgICAgICAgICAgdGltZW91dDogMTAwMCxcbiAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgaWYgKGFjY291bnRzLmxlbmd0aCA9PT0gMCkge1xuICAgICAgICAgICAgICAgIHRocm93IFRPTkNsaWVudEVycm9yLmFjY291bnRNaXNzaW5nKGFkZHJlc3MpO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgaWYgKFRPTkNsaWVudEVycm9yLmlzQ29udHJhY3RFcnJvcihlcnJvciwgVE9OQ29udHJhY3RFeGl0Q29kZS5OT19HQVMpKSB7XG4gICAgICAgICAgICAgICAgdGhyb3cgVE9OQ2xpZW50RXJyb3IuYWNjb3VudEJhbGFuY2VUb29Mb3coYWRkcmVzcywgYWNjb3VudHNbMF0uYmFsYW5jZSk7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICB0aHJvdyBlcnJvcjtcbiAgICAgICAgfVxuICAgIH1cblxuICAgIGFzeW5jIHJlc29sdmVEZXRhaWxlZEVycm9yKFxuICAgICAgICBlcnJvcjogRXJyb3IsXG4gICAgICAgIG1lc3NhZ2VCYXNlNjQ6IHN0cmluZyxcbiAgICAgICAgdGltZTogbnVtYmVyLFxuICAgICAgICBhZGRyZXNzOiBzdHJpbmcsXG4gICAgKSB7XG4gICAgICAgIGNvbnN0IGFjY291bnRzID0gYXdhaXQgdGhpcy5xdWVyaWVzLmFjY291bnRzLnF1ZXJ5KHtcbiAgICAgICAgICAgIGZpbHRlcjogeyBpZDogeyBlcTogYWRkcmVzcyB9IH0sXG4gICAgICAgICAgICByZXN1bHQ6ICdpZCBhY2NfdHlwZSBiYWxhbmNlIGJhbGFuY2Vfb3RoZXIgeyBjdXJyZW5jeSB2YWx1ZSB9IGNvZGUgZGF0YSBsYXN0X3BhaWQnLFxuICAgICAgICAgICAgdGltZW91dDogMTAwMCxcbiAgICAgICAgfSk7XG4gICAgICAgIGlmIChhY2NvdW50cy5sZW5ndGggPT09IDApIHtcbiAgICAgICAgICAgIHJldHVybiBUT05DbGllbnRFcnJvci5hY2NvdW50TWlzc2luZyhhZGRyZXNzKTtcbiAgICAgICAgfVxuICAgICAgICBjb25zdCBhY2NvdW50ID0gYWNjb3VudHNbMF07XG4gICAgICAgIHJlbW92ZVR5cGVOYW1lKGFjY291bnQpO1xuICAgICAgICB0cnkge1xuICAgICAgICAgICAgYXdhaXQgdGhpcy5yZXF1ZXN0Q29yZSgnY29udHJhY3RzLnJlc29sdmUuZXJyb3InLCB7XG4gICAgICAgICAgICAgICAgYWRkcmVzcyxcbiAgICAgICAgICAgICAgICBhY2NvdW50LFxuICAgICAgICAgICAgICAgIG1lc3NhZ2VCYXNlNjQsXG4gICAgICAgICAgICAgICAgdGltZTogTWF0aC5yb3VuZCh0aW1lIC8gMTAwMCksXG4gICAgICAgICAgICAgICAgbWFpbkVycm9yOiBlcnJvcixcbiAgICAgICAgICAgIH0pO1xuICAgICAgICB9IGNhdGNoIChyZXNvbHZlZCkge1xuICAgICAgICAgICAgcmV0dXJuIHJlc29sdmVkO1xuICAgICAgICB9XG4gICAgICAgIHJldHVybiBlcnJvcjtcbiAgICB9XG5cbiAgICBhc3luYyBpc0RlcGxveWVkKGFkZHJlc3M6IHN0cmluZywgcGFyZW50U3Bhbj86IChTcGFuIHwgU3BhbkNvbnRleHQpKTogUHJvbWlzZTxib29sPiB7XG4gICAgICAgIGNvbnN0IGFjY291bnQgPSBhd2FpdCB0aGlzLnF1ZXJpZXMuYWNjb3VudHMucXVlcnkoe1xuICAgICAgICAgICAgZmlsdGVyOiB7XG4gICAgICAgICAgICAgICAgaWQ6IHsgZXE6IGFkZHJlc3MgfSxcbiAgICAgICAgICAgICAgICBhY2NfdHlwZTogeyBlcTogUUFjY291bnRUeXBlLmFjdGl2ZSB9LFxuICAgICAgICAgICAgfSxcbiAgICAgICAgICAgIHJlc3VsdDogJ2lkJyxcbiAgICAgICAgICAgIHBhcmVudFNwYW4sXG4gICAgICAgIH0pO1xuICAgICAgICByZXR1cm4gYWNjb3VudC5sZW5ndGggPiAwO1xuICAgIH1cblxuICAgIGFzeW5jIHByb2Nlc3NEZXBsb3lNZXNzYWdlKFxuICAgICAgICBwYXJhbXM6IFRPTkNvbnRyYWN0RGVwbG95TWVzc2FnZSxcbiAgICAgICAgcGFyZW50U3Bhbj86IChTcGFuIHwgU3BhbkNvbnRleHQpLFxuICAgICAgICByZXRyeUluZGV4PzogbnVtYmVyLFxuICAgICk6IFByb21pc2U8VE9OQ29udHJhY3REZXBsb3lSZXN1bHQ+IHtcbiAgICAgICAgdGhpcy5jb25maWcubG9nKCdwcm9jZXNzRGVwbG95TWVzc2FnZScsIHBhcmFtcyk7XG4gICAgICAgIGlmIChhd2FpdCB0aGlzLmlzRGVwbG95ZWQocGFyYW1zLmFkZHJlc3MsIHBhcmVudFNwYW4pKSB7XG4gICAgICAgICAgICByZXR1cm4ge1xuICAgICAgICAgICAgICAgIGFkZHJlc3M6IHBhcmFtcy5hZGRyZXNzLFxuICAgICAgICAgICAgICAgIGFscmVhZHlEZXBsb3llZDogdHJ1ZSxcbiAgICAgICAgICAgIH07XG4gICAgICAgIH1cbiAgICAgICAgYXdhaXQgdGhpcy5zZW5kTWVzc2FnZShwYXJhbXMubWVzc2FnZSwgcGFyZW50U3Bhbik7XG4gICAgICAgIHJldHVybiB0aGlzLndhaXRGb3JEZXBsb3lUcmFuc2FjdGlvbihcbiAgICAgICAgICAgIHBhcmFtcyxcbiAgICAgICAgICAgIHBhcmVudFNwYW4sXG4gICAgICAgICAgICByZXRyeUluZGV4LFxuICAgICAgICApO1xuICAgIH1cblxuICAgIGFzeW5jIHdhaXRGb3JEZXBsb3lUcmFuc2FjdGlvbihcbiAgICAgICAgZGVwbG95TWVzc2FnZTogVE9OQ29udHJhY3REZXBsb3lNZXNzYWdlLFxuICAgICAgICBwYXJlbnRTcGFuPzogKFNwYW4gfCBTcGFuQ29udGV4dCksXG4gICAgICAgIHJldHJ5SW5kZXg/OiBudW1iZXIsXG4gICAgKTogUHJvbWlzZTxUT05Db250cmFjdERlcGxveVJlc3VsdD4ge1xuICAgICAgICBjb25zdCB0cmFuc2FjdGlvbiA9IGF3YWl0IHRoaXMud2FpdEZvclRyYW5zYWN0aW9uKFxuICAgICAgICAgICAgZGVwbG95TWVzc2FnZS5hZGRyZXNzLFxuICAgICAgICAgICAgZGVwbG95TWVzc2FnZS5tZXNzYWdlLFxuICAgICAgICAgICAgdHJhbnNhY3Rpb25EZXRhaWxzLFxuICAgICAgICAgICAgcGFyZW50U3BhbixcbiAgICAgICAgICAgIHJldHJ5SW5kZXgsXG4gICAgICAgICAgICBkZXBsb3lNZXNzYWdlLmNyZWF0aW9uVGltZSxcbiAgICAgICAgKTtcbiAgICAgICAgdGhpcy5jb25maWcubG9nKCdwcm9jZXNzRGVwbG95TWVzc2FnZS4gRW5kJyk7XG4gICAgICAgIHJldHVybiB7XG4gICAgICAgICAgICBhZGRyZXNzOiBkZXBsb3lNZXNzYWdlLmFkZHJlc3MsXG4gICAgICAgICAgICBhbHJlYWR5RGVwbG95ZWQ6IGZhbHNlLFxuICAgICAgICAgICAgdHJhbnNhY3Rpb24sXG4gICAgICAgIH07XG4gICAgfVxuXG5cbiAgICBhc3luYyBwcm9jZXNzUnVuTWVzc2FnZShcbiAgICAgICAgcnVuTWVzc2FnZTogVE9OQ29udHJhY3RSdW5NZXNzYWdlLFxuICAgICAgICBwYXJlbnRTcGFuPzogKFNwYW4gfCBTcGFuQ29udGV4dCksXG4gICAgICAgIHJldHJ5SW5kZXg/OiBudW1iZXIsXG4gICAgKTogUHJvbWlzZTxUT05Db250cmFjdFJ1blJlc3VsdD4ge1xuICAgICAgICB0aGlzLmNvbmZpZy5sb2coJ3Byb2Nlc3NSdW5NZXNzYWdlJywgcnVuTWVzc2FnZSk7XG4gICAgICAgIGF3YWl0IHRoaXMuc2VuZE1lc3NhZ2UocnVuTWVzc2FnZS5tZXNzYWdlLCBwYXJlbnRTcGFuKTtcbiAgICAgICAgcmV0dXJuIHRoaXMud2FpdEZvclJ1blRyYW5zYWN0aW9uKHJ1bk1lc3NhZ2UsIHBhcmVudFNwYW4sIHJldHJ5SW5kZXgpO1xuICAgIH1cblxuICAgIGFzeW5jIHdhaXRGb3JSdW5UcmFuc2FjdGlvbihcbiAgICAgICAgcnVuTWVzc2FnZTogVE9OQ29udHJhY3RSdW5NZXNzYWdlLFxuICAgICAgICBwYXJlbnRTcGFuPzogKFNwYW4gfCBTcGFuQ29udGV4dCksXG4gICAgICAgIHJldHJ5SW5kZXg/OiBudW1iZXIsXG4gICAgKTogUHJvbWlzZTxUT05Db250cmFjdFJ1blJlc3VsdD4ge1xuICAgICAgICBjb25zdCB0cmFuc2FjdGlvbiA9IGF3YWl0IHRoaXMud2FpdEZvclRyYW5zYWN0aW9uKFxuICAgICAgICAgICAgcnVuTWVzc2FnZS5hZGRyZXNzLFxuICAgICAgICAgICAgcnVuTWVzc2FnZS5tZXNzYWdlLFxuICAgICAgICAgICAgdHJhbnNhY3Rpb25EZXRhaWxzLFxuICAgICAgICAgICAgcGFyZW50U3BhbixcbiAgICAgICAgICAgIHJldHJ5SW5kZXgsXG4gICAgICAgICAgICBydW5NZXNzYWdlLmNyZWF0aW9uVGltZSxcbiAgICAgICAgICAgIHJ1bk1lc3NhZ2UuYWJpLFxuICAgICAgICAgICAgcnVuTWVzc2FnZS5mdW5jdGlvbk5hbWUsXG4gICAgICAgICk7XG4gICAgICAgIGNvbnN0IG91dHB1dE1lc3NhZ2VzID0gdHJhbnNhY3Rpb24ub3V0X21lc3NhZ2VzO1xuICAgICAgICBpZiAoIW91dHB1dE1lc3NhZ2VzIHx8IG91dHB1dE1lc3NhZ2VzLmxlbmd0aCA9PT0gMCkge1xuICAgICAgICAgICAgcmV0dXJuIHtcbiAgICAgICAgICAgICAgICBvdXRwdXQ6IG51bGwsXG4gICAgICAgICAgICAgICAgdHJhbnNhY3Rpb24sXG4gICAgICAgICAgICB9O1xuICAgICAgICB9XG4gICAgICAgIGNvbnN0IGV4dGVybmFsTWVzc2FnZXM6IFFNZXNzYWdlW10gPSBvdXRwdXRNZXNzYWdlcy5maWx0ZXIoKHg6IFFNZXNzYWdlKSA9PiB7XG4gICAgICAgICAgICByZXR1cm4geC5tc2dfdHlwZSA9PT0gUU1lc3NhZ2VUeXBlLmV4dE91dDtcbiAgICAgICAgfSk7XG4gICAgICAgIHRoaXMuY29uZmlnLmxvZygncHJvY2Vzc1J1bk1lc3NhZ2UuIEJlZm9yZSBtZXNzYWdlcyBwYXJzZScpO1xuICAgICAgICBjb25zdCBvdXRwdXRzID0gYXdhaXQgUHJvbWlzZS5hbGwoZXh0ZXJuYWxNZXNzYWdlcy5tYXAoKHg6IFFNZXNzYWdlKSA9PiB7XG4gICAgICAgICAgICByZXR1cm4gdGhpcy5kZWNvZGVPdXRwdXRNZXNzYWdlQm9keSh7XG4gICAgICAgICAgICAgICAgYWJpOiBydW5NZXNzYWdlLmFiaSxcbiAgICAgICAgICAgICAgICBib2R5QmFzZTY0OiB4LmJvZHkgfHwgJycsXG4gICAgICAgICAgICB9KTtcbiAgICAgICAgfSkpO1xuICAgICAgICBjb25zdCByZXN1bHRPdXRwdXQgPSBvdXRwdXRzLmZpbmQoKHg6IFRPTkNvbnRyYWN0RGVjb2RlTWVzc2FnZUJvZHlSZXN1bHQpID0+IHtcbiAgICAgICAgICAgIHJldHVybiB4LmZ1bmN0aW9uLnRvTG93ZXJDYXNlKCkgPT09IHJ1bk1lc3NhZ2UuZnVuY3Rpb25OYW1lLnRvTG93ZXJDYXNlKCk7XG4gICAgICAgIH0pO1xuICAgICAgICB0aGlzLmNvbmZpZy5sb2coJ3Byb2Nlc3NSdW5NZXNzYWdlLiBFbmQnKTtcbiAgICAgICAgcmV0dXJuIHtcbiAgICAgICAgICAgIG91dHB1dDogcmVzdWx0T3V0cHV0ID8gcmVzdWx0T3V0cHV0Lm91dHB1dCA6IG51bGwsXG4gICAgICAgICAgICB0cmFuc2FjdGlvbixcbiAgICAgICAgfTtcbiAgICB9XG5cbiAgICAvKipcbiAgICAgKiBEZXByZWNhdGVkLiBVc2UgYHJ1bk1lc3NhZ2VMb2NhbGAgaW5zdGVhZC5cbiAgICAgKiBAcGFyYW0gcGFyYW1zXG4gICAgICogQHBhcmFtIHdhaXRQYXJhbXNcbiAgICAgKiBAcGFyYW0gcGFyZW50U3BhblxuICAgICAqIEByZXR1cm5zIHtQcm9taXNlPHVua25vd24+fVxuICAgICAqL1xuICAgIGFzeW5jIHByb2Nlc3NSdW5NZXNzYWdlTG9jYWwoXG4gICAgICAgIHBhcmFtczogVE9OQ29udHJhY3RSdW5NZXNzYWdlLFxuICAgICAgICB3YWl0UGFyYW1zPzogVE9OQ29udHJhY3RBY2NvdW50V2FpdFBhcmFtcyxcbiAgICAgICAgcGFyZW50U3Bhbj86IChTcGFuIHwgU3BhbkNvbnRleHQpLFxuICAgICk6IFByb21pc2U8VE9OQ29udHJhY3RSdW5SZXN1bHQ+IHtcbiAgICAgICAgdGhpcy5jb25maWcubG9nKCdwcm9jZXNzUnVuTWVzc2FnZUxvY2FsJywgcGFyYW1zKTtcblxuICAgICAgICBjb25zdCBhY2NvdW50ID0gYXdhaXQgdGhpcy5nZXRBY2NvdW50KHBhcmFtcy5hZGRyZXNzLCB0cnVlLCB3YWl0UGFyYW1zLCBwYXJlbnRTcGFuKTtcblxuICAgICAgICByZXR1cm4gdGhpcy5yZXF1ZXN0Q29yZSgnY29udHJhY3RzLnJ1bi5sb2NhbC5tc2cnLCB7XG4gICAgICAgICAgICBhZGRyZXNzOiBwYXJhbXMuYWRkcmVzcyxcbiAgICAgICAgICAgIGFjY291bnQsXG4gICAgICAgICAgICBhYmk6IHBhcmFtcy5hYmksXG4gICAgICAgICAgICBmdW5jdGlvbk5hbWU6IHBhcmFtcy5mdW5jdGlvbk5hbWUsXG4gICAgICAgICAgICBtZXNzYWdlQmFzZTY0OiBwYXJhbXMubWVzc2FnZS5tZXNzYWdlQm9keUJhc2U2NCxcbiAgICAgICAgfSk7XG4gICAgfVxuXG4gICAgLy8gRmVlIGNhbGN1bGF0aW9uXG5cbiAgICBiaWdCYWxhbmNlID0gJzB4MTAwMDAwMDAwMDAwMDAnO1xuXG4gICAgYXN5bmMgY2FsY1J1bkZlZXMoXG4gICAgICAgIHBhcmFtczogVE9OQ29udHJhY3RDYWxjUnVuRmVlUGFyYW1zLFxuICAgICAgICBwYXJlbnRTcGFuPzogKFNwYW4gfCBTcGFuQ29udGV4dCksXG4gICAgKTogUHJvbWlzZTxUT05Db250cmFjdENhbGNGZWVSZXN1bHQ+IHtcbiAgICAgICAgdGhpcy5jb25maWcubG9nKCdjYWxjUnVuRmVlcycsIHBhcmFtcyk7XG5cbiAgICAgICAgY29uc3QgYWNjb3VudCA9IGF3YWl0IHRoaXMuZ2V0QWNjb3VudChwYXJhbXMuYWRkcmVzcywgdHJ1ZSwgcGFyYW1zLndhaXRQYXJhbXMsIHBhcmVudFNwYW4pO1xuXG4gICAgICAgIGlmIChwYXJhbXMuZW11bGF0ZUJhbGFuY2UpIHtcbiAgICAgICAgICAgIGFjY291bnQuYmFsYW5jZSA9IHRoaXMuYmlnQmFsYW5jZTtcbiAgICAgICAgfVxuXG4gICAgICAgIHJldHVybiB0aGlzLnJlcXVlc3RDb3JlKCdjb250cmFjdHMucnVuLmZlZScsIHtcbiAgICAgICAgICAgIGFkZHJlc3M6IHBhcmFtcy5hZGRyZXNzLFxuICAgICAgICAgICAgYWNjb3VudCxcbiAgICAgICAgICAgIGFiaTogcGFyYW1zLmFiaSxcbiAgICAgICAgICAgIGZ1bmN0aW9uTmFtZTogcGFyYW1zLmZ1bmN0aW9uTmFtZSxcbiAgICAgICAgICAgIGlucHV0OiBwYXJhbXMuaW5wdXQsXG4gICAgICAgICAgICBrZXlQYWlyOiBwYXJhbXMua2V5UGFpcixcbiAgICAgICAgfSk7XG4gICAgfVxuXG4gICAgYXN5bmMgY2FsY0RlcGxveUZlZXMoXG4gICAgICAgIHBhcmFtczogVE9OQ29udHJhY3RDYWxjRGVwbG95RmVlUGFyYW1zLFxuICAgICAgICBwYXJlbnRTcGFuPzogKFNwYW4gfCBTcGFuQ29udGV4dCksXG4gICAgKTogUHJvbWlzZTxUT05Db250cmFjdENhbGNGZWVSZXN1bHQ+IHtcbiAgICAgICAgdGhpcy5jb25maWcubG9nKCdjYWxjRGVwbG95RmVlcycsIHBhcmFtcyk7XG5cbiAgICAgICAgY29uc3QgbWVzc2FnZSA9IGF3YWl0IHRoaXMuY3JlYXRlRGVwbG95TWVzc2FnZShwYXJhbXMpO1xuXG4gICAgICAgIHJldHVybiB0aGlzLmNhbGNNc2dQcm9jZXNzRmVlcyh7XG4gICAgICAgICAgICBhZGRyZXNzOiBtZXNzYWdlLmFkZHJlc3MsXG4gICAgICAgICAgICBtZXNzYWdlOiBtZXNzYWdlLm1lc3NhZ2UsXG4gICAgICAgICAgICBlbXVsYXRlQmFsYW5jZTogcGFyYW1zLmVtdWxhdGVCYWxhbmNlLFxuICAgICAgICAgICAgbmV3QWNjb3VudDogcGFyYW1zLm5ld0FjY291bnQsXG4gICAgICAgIH0sIHBhcmVudFNwYW4pO1xuICAgIH1cblxuICAgIGFzeW5jIGNhbGNNc2dQcm9jZXNzRmVlcyhcbiAgICAgICAgcGFyYW1zOiBUT05Db250cmFjdENhbGNNc2dQcm9jZXNzaW5nRmVlc1BhcmFtcyxcbiAgICAgICAgcGFyZW50U3Bhbj86IChTcGFuIHwgU3BhbkNvbnRleHQpLFxuICAgICk6IFByb21pc2U8VE9OQ29udHJhY3RDYWxjRmVlUmVzdWx0PiB7XG4gICAgICAgIHRoaXMuY29uZmlnLmxvZygnY2FsY01zZ1Byb2Nlc3NGZWVzJywgcGFyYW1zKTtcblxuICAgICAgICBsZXQgYWNjb3VudDogUUFjY291bnQgPSB7XG4gICAgICAgICAgICBiYWxhbmNlOiB0aGlzLmJpZ0JhbGFuY2UsXG4gICAgICAgICAgICBpZDogcGFyYW1zLmFkZHJlc3MsXG4gICAgICAgICAgICBsYXN0X3BhaWQ6IE1hdGguZmxvb3IoRGF0ZS5ub3coKSAvIDEwMDApLFxuICAgICAgICB9O1xuXG4gICAgICAgIGlmICghcGFyYW1zLm5ld0FjY291bnQpIHtcbiAgICAgICAgICAgIGFjY291bnQgPSBhd2FpdCB0aGlzLmdldEFjY291bnQocGFyYW1zLmFkZHJlc3MsIGZhbHNlLCBwYXJhbXMud2FpdFBhcmFtcywgcGFyZW50U3Bhbik7XG4gICAgICAgIH1cblxuICAgICAgICBpZiAocGFyYW1zLmVtdWxhdGVCYWxhbmNlKSB7XG4gICAgICAgICAgICBhY2NvdW50LmJhbGFuY2UgPSB0aGlzLmJpZ0JhbGFuY2U7XG4gICAgICAgIH1cblxuICAgICAgICByZXR1cm4gdGhpcy5yZXF1ZXN0Q29yZSgnY29udHJhY3RzLnJ1bi5mZWUubXNnJywge1xuICAgICAgICAgICAgYWRkcmVzczogcGFyYW1zLmFkZHJlc3MsXG4gICAgICAgICAgICBhY2NvdW50LFxuICAgICAgICAgICAgbWVzc2FnZUJhc2U2NDogcGFyYW1zLm1lc3NhZ2UubWVzc2FnZUJvZHlCYXNlNjQsXG4gICAgICAgIH0pO1xuICAgIH1cblxuICAgIC8vIEFkZHJlc3MgcHJvY2Vzc2luZ1xuXG4gICAgYXN5bmMgY29udmVydEFkZHJlc3MoXG4gICAgICAgIHBhcmFtczogVE9OQ29udHJhY3RDb252ZXJ0QWRkcmVzc1BhcmFtcyxcbiAgICApOiBQcm9taXNlPFRPTkNvbnRyYWN0Q29udmVydEFkZHJlc3NSZXN1bHQ+IHtcbiAgICAgICAgcmV0dXJuIHRoaXMucmVxdWVzdENvcmUoJ2NvbnRyYWN0cy5hZGRyZXNzLmNvbnZlcnQnLCBwYXJhbXMpO1xuICAgIH1cblxuICAgIC8vIEludGVybmFsc1xuXG4gICAgYXN5bmMgaW50ZXJuYWxEZXBsb3lOYXRpdmUocGFyYW1zOiBUT05Db250cmFjdERlcGxveVBhcmFtcyk6IFByb21pc2U8VE9OQ29udHJhY3REZXBsb3lSZXN1bHQ+IHtcbiAgICAgICAgcmV0dXJuIHRoaXMucmVxdWVzdENvcmUoJ2NvbnRyYWN0cy5kZXBsb3knLCB7XG4gICAgICAgICAgICBhYmk6IHBhcmFtcy5wYWNrYWdlLmFiaSxcbiAgICAgICAgICAgIGNvbnN0cnVjdG9ySGVhZGVyOiBwYXJhbXMuY29uc3RydWN0b3JIZWFkZXIsXG4gICAgICAgICAgICBjb25zdHJ1Y3RvclBhcmFtczogcGFyYW1zLmNvbnN0cnVjdG9yUGFyYW1zLFxuICAgICAgICAgICAgaW5pdFBhcmFtczogcGFyYW1zLmluaXRQYXJhbXMsXG4gICAgICAgICAgICBpbWFnZUJhc2U2NDogcGFyYW1zLnBhY2thZ2UuaW1hZ2VCYXNlNjQsXG4gICAgICAgICAgICBrZXlQYWlyOiBwYXJhbXMua2V5UGFpcixcbiAgICAgICAgfSk7XG4gICAgfVxuXG5cbiAgICBhc3luYyBpbnRlcm5hbFJ1bk5hdGl2ZShwYXJhbXM6IFRPTkNvbnRyYWN0UnVuUGFyYW1zKTogUHJvbWlzZTxUT05Db250cmFjdFJ1blJlc3VsdD4ge1xuICAgICAgICByZXR1cm4gdGhpcy5yZXF1ZXN0Q29yZSgnY29udHJhY3RzLnJ1bicsIHtcbiAgICAgICAgICAgIGFkZHJlc3M6IHBhcmFtcy5hZGRyZXNzLFxuICAgICAgICAgICAgYWJpOiBwYXJhbXMuYWJpLFxuICAgICAgICAgICAgZnVuY3Rpb25OYW1lOiBwYXJhbXMuZnVuY3Rpb25OYW1lLFxuICAgICAgICAgICAgaGVhZGVyOiBwYXJhbXMuaGVhZGVyLFxuICAgICAgICAgICAgaW5wdXQ6IHBhcmFtcy5pbnB1dCxcbiAgICAgICAgICAgIGtleVBhaXI6IHBhcmFtcy5rZXlQYWlyLFxuICAgICAgICB9KTtcbiAgICB9XG5cbiAgICBtYWtlRXhwaXJlSGVhZGVyKFxuICAgICAgICBhYmk6IFRPTkNvbnRyYWN0QUJJLFxuICAgICAgICB1c2VySGVhZGVyPzogYW55LFxuICAgICAgICByZXRyeUluZGV4PzogbnVtYmVyLFxuICAgICk6IGFueSB7XG4gICAgICAgIGNvbnN0IHRpbWVvdXQgPSB0aGlzLmNvbmZpZy5tZXNzYWdlRXhwaXJhdGlvblRpbWVvdXQocmV0cnlJbmRleCk7XG4gICAgICAgIGlmIChhYmkuaGVhZGVyICYmIGFiaS5oZWFkZXIuaW5jbHVkZXMoJ2V4cGlyZScpICYmICF1c2VySGVhZGVyPy5leHBpcmUpIHtcbiAgICAgICAgICAgIHJldHVybiB7XG4gICAgICAgICAgICAgICAgLi4udXNlckhlYWRlcixcbiAgICAgICAgICAgICAgICBleHBpcmU6IE1hdGguZmxvb3IoKERhdGUubm93KCkgKyB0aW1lb3V0KSAvIDEwMDApICsgMSxcbiAgICAgICAgICAgIH07XG4gICAgICAgIH1cbiAgICAgICAgcmV0dXJuIHVzZXJIZWFkZXI7XG4gICAgfVxuXG4gICAgYXN5bmMgcmV0cnlDYWxsKGNhbGw6IChpbmRleDogbnVtYmVyKSA9PiBQcm9taXNlPGFueT4pOiBQcm9taXNlPGFueT4ge1xuICAgICAgICBjb25zdCByZXRyaWVzQ291bnQgPSB0aGlzLmNvbmZpZy5tZXNzYWdlUmV0cmllc0NvdW50KCk7XG4gICAgICAgIGZvciAobGV0IGkgPSAwOyBpIDw9IHJldHJpZXNDb3VudDsgaSArPSAxKSB7XG4gICAgICAgICAgICBpZiAoaSA+IDApIHtcbiAgICAgICAgICAgICAgICB0aGlzLmNvbmZpZy5sb2coYFJldHJ5ICMke2l9YCk7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICB0cnkge1xuICAgICAgICAgICAgICAgIHJldHVybiBhd2FpdCBjYWxsKGkpO1xuICAgICAgICAgICAgfSBjYXRjaCAoZXJyb3IpIHtcbiAgICAgICAgICAgICAgICBjb25zdCB1c2VSZXRyeSA9IGVycm9yLmNvZGUgPT09IFRPTkVycm9yQ29kZS5NRVNTQUdFX0VYUElSRURcbiAgICAgICAgICAgICAgICAgICAgfHwgVE9OQ2xpZW50RXJyb3IuaXNDb250cmFjdEVycm9yKGVycm9yLCBUT05Db250cmFjdEV4aXRDb2RlLlJFUExBWV9QUk9URUNUSU9OKTtcbiAgICAgICAgICAgICAgICBpZiAoIXVzZVJldHJ5KSB7XG4gICAgICAgICAgICAgICAgICAgIHRocm93IGVycm9yO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgICB0aHJvdyBUT05DbGllbnRFcnJvci5tZXNzYWdlRXhwaXJlZCgpO1xuICAgIH1cblxuICAgIGFzeW5jIGludGVybmFsRGVwbG95SnMoXG4gICAgICAgIHBhcmFtczogVE9OQ29udHJhY3REZXBsb3lQYXJhbXMsXG4gICAgICAgIHBhcmVudFNwYW4/OiAoU3BhbiB8IFNwYW5Db250ZXh0KSxcbiAgICApOiBQcm9taXNlPFRPTkNvbnRyYWN0RGVwbG95UmVzdWx0PiB7XG4gICAgICAgIHRoaXMuY29uZmlnLmxvZygnRGVwbG95IHN0YXJ0Jyk7XG4gICAgICAgIHJldHVybiB0aGlzLnJldHJ5Q2FsbChhc3luYyAocmV0cnlJbmRleCkgPT4ge1xuICAgICAgICAgICAgY29uc3QgZGVwbG95TWVzc2FnZSA9IGF3YWl0IHRoaXMuY3JlYXRlRGVwbG95TWVzc2FnZShwYXJhbXMsIHJldHJ5SW5kZXgpO1xuICAgICAgICAgICAgaWYgKGF3YWl0IHRoaXMuaXNEZXBsb3llZChkZXBsb3lNZXNzYWdlLmFkZHJlc3MsIHBhcmVudFNwYW4pKSB7XG4gICAgICAgICAgICAgICAgcmV0dXJuIHtcbiAgICAgICAgICAgICAgICAgICAgYWRkcmVzczogZGVwbG95TWVzc2FnZS5hZGRyZXNzLFxuICAgICAgICAgICAgICAgICAgICBhbHJlYWR5RGVwbG95ZWQ6IHRydWUsXG4gICAgICAgICAgICAgICAgfTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGF3YWl0IHRoaXMuc2VuZE1lc3NhZ2UoZGVwbG95TWVzc2FnZS5tZXNzYWdlLCBwYXJlbnRTcGFuKTtcbiAgICAgICAgICAgIHJldHVybiB0aGlzLndhaXRGb3JEZXBsb3lUcmFuc2FjdGlvbihkZXBsb3lNZXNzYWdlLCBwYXJlbnRTcGFuLCByZXRyeUluZGV4KTtcbiAgICAgICAgfSk7XG4gICAgfVxuXG5cbiAgICBhc3luYyBpbnRlcm5hbFJ1bkpzKFxuICAgICAgICBwYXJhbXM6IFRPTkNvbnRyYWN0UnVuUGFyYW1zLFxuICAgICAgICBwYXJlbnRTcGFuPzogKFNwYW4gfCBTcGFuQ29udGV4dCksXG4gICAgKTogUHJvbWlzZTxUT05Db250cmFjdFJ1blJlc3VsdD4ge1xuICAgICAgICB0aGlzLmNvbmZpZy5sb2coJ1J1biBzdGFydCcpO1xuICAgICAgICByZXR1cm4gdGhpcy5yZXRyeUNhbGwoYXN5bmMgKHJldHJ5SW5kZXgpID0+IHtcbiAgICAgICAgICAgIGNvbnN0IHJ1bk1lc3NhZ2UgPSBhd2FpdCB0aGlzLmNyZWF0ZVJ1bk1lc3NhZ2UocGFyYW1zLCByZXRyeUluZGV4KTtcbiAgICAgICAgICAgIGF3YWl0IHRoaXMuc2VuZE1lc3NhZ2UocnVuTWVzc2FnZS5tZXNzYWdlLCBwYXJlbnRTcGFuKTtcbiAgICAgICAgICAgIHJldHVybiB0aGlzLndhaXRGb3JSdW5UcmFuc2FjdGlvbihydW5NZXNzYWdlLCBwYXJlbnRTcGFuLCByZXRyeUluZGV4KTtcbiAgICAgICAgfSk7XG4gICAgfVxuXG4gICAgYXN5bmMgZ2V0QWNjb3VudChcbiAgICAgICAgYWRkcmVzczogc3RyaW5nLFxuICAgICAgICBhY3RpdmU6IGJvb2xlYW4sXG4gICAgICAgIHdhaXRQYXJhbXM/OiBUT05Db250cmFjdEFjY291bnRXYWl0UGFyYW1zLFxuICAgICAgICBwYXJlbnRTcGFuPzogKFNwYW4gfCBTcGFuQ29udGV4dCksXG4gICAgKTogUHJvbWlzZTxRQWNjb3VudD4ge1xuICAgICAgICBjb25zdCBmaWx0ZXI6IHsgW3N0cmluZ106IGFueSB9ID0ge1xuICAgICAgICAgICAgaWQ6IHsgZXE6IGFkZHJlc3MgfSxcbiAgICAgICAgfTtcbiAgICAgICAgaWYgKHdhaXRQYXJhbXMgJiYgd2FpdFBhcmFtcy50cmFuc2FjdGlvbkx0KSB7XG4gICAgICAgICAgICBmaWx0ZXIubGFzdF90cmFuc19sdCA9IHsgZ2U6IHdhaXRQYXJhbXMudHJhbnNhY3Rpb25MdCB9O1xuICAgICAgICB9XG4gICAgICAgIGlmIChhY3RpdmUpIHtcbiAgICAgICAgICAgIGZpbHRlci5hY2NfdHlwZSA9IHsgZXE6IFFBY2NvdW50VHlwZS5hY3RpdmUgfTtcbiAgICAgICAgfVxuXG4gICAgICAgIHRoaXMuY29uZmlnLmxvZygnZ2V0QWNjb3VudC4gRmlsdGVyJywgZmlsdGVyKTtcbiAgICAgICAgY29uc3QgYWNjb3VudHMgPSBhd2FpdCB0aGlzLnF1ZXJpZXMuYWNjb3VudHMucXVlcnkoe1xuICAgICAgICAgICAgZmlsdGVyLFxuICAgICAgICAgICAgcmVzdWx0OiAnaWQgYWNjX3R5cGUgY29kZSBkYXRhIGJhbGFuY2UgYmFsYW5jZV9vdGhlciB7IGN1cnJlbmN5IHZhbHVlIH0gbGFzdF9wYWlkJyxcbiAgICAgICAgICAgIC4uLih3YWl0UGFyYW1zICYmIHdhaXRQYXJhbXMudGltZW91dCA/IHsgdGltZW91dDogd2FpdFBhcmFtcy50aW1lb3V0IH0gOiB7fSksXG4gICAgICAgICAgICBwYXJlbnRTcGFuLFxuICAgICAgICB9KTtcbiAgICAgICAgaWYgKGFjY291bnRzLmxlbmd0aCA9PT0gMCkge1xuICAgICAgICAgICAgdGhyb3cgVE9OQ2xpZW50RXJyb3IuYWNjb3VudE1pc3NpbmcoYWRkcmVzcyk7XG4gICAgICAgIH1cbiAgICAgICAgY29uc3QgYWNjb3VudCA9IGFjY291bnRzWzBdO1xuICAgICAgICByZW1vdmVUeXBlTmFtZShhY2NvdW50KTtcbiAgICAgICAgdGhpcy5jb25maWcubG9nKCdnZXRBY2NvdW50LiBBY2NvdW50IHJlY2VpdmVkJywgYWNjb3VudCk7XG4gICAgICAgIHJldHVybiBhY2NvdW50O1xuICAgIH1cblxuICAgIGFzeW5jIGludGVybmFsUnVuTG9jYWxKcyhcbiAgICAgICAgcGFyYW1zOiBUT05Db250cmFjdFJ1bkxvY2FsUGFyYW1zLFxuICAgICAgICBwYXJlbnRTcGFuPzogKFNwYW4gfCBTcGFuQ29udGV4dCksXG4gICAgKTogUHJvbWlzZTxUT05Db250cmFjdFJ1bkxvY2FsUmVzdWx0PiB7XG4gICAgICAgIGNvbnN0IGFkZHJlc3MgPSBwYXJhbXMuYWRkcmVzcztcbiAgICAgICAgaWYgKCFhZGRyZXNzKSB7XG4gICAgICAgICAgICB0aHJvdyBUT05DbGllbnRFcnJvci5hZGRyZXNzUmVxdWlyZWRGb3JSdW5Mb2NhbCgpO1xuICAgICAgICB9XG4gICAgICAgIGNvbnN0IGFjY291bnQgPSBwYXJhbXMuYWNjb3VudCB8fCAoYXdhaXQgdGhpcy5nZXRBY2NvdW50KFxuICAgICAgICAgICAgYWRkcmVzcyxcbiAgICAgICAgICAgIGZhbHNlLFxuICAgICAgICAgICAgcGFyYW1zLndhaXRQYXJhbXMsXG4gICAgICAgICAgICBwYXJlbnRTcGFuLFxuICAgICAgICApKTtcbiAgICAgICAgaWYgKCFhY2NvdW50LmNvZGUpIHtcbiAgICAgICAgICAgIHRocm93IFRPTkNsaWVudEVycm9yLmFjY291bnRDb2RlTWlzc2luZyhhZGRyZXNzLCAoYWNjb3VudDogYW55KS5iYWxhbmNlKTtcbiAgICAgICAgfVxuICAgICAgICByZXR1cm4gdGhpcy5yZXF1ZXN0Q29yZSgnY29udHJhY3RzLnJ1bi5sb2NhbCcsIHtcbiAgICAgICAgICAgIGFkZHJlc3MsXG4gICAgICAgICAgICBhY2NvdW50LFxuICAgICAgICAgICAgYWJpOiBwYXJhbXMuYWJpLFxuICAgICAgICAgICAgZnVuY3Rpb25OYW1lOiBwYXJhbXMuZnVuY3Rpb25OYW1lLFxuICAgICAgICAgICAgaW5wdXQ6IHBhcmFtcy5pbnB1dCxcbiAgICAgICAgICAgIGtleVBhaXI6IHBhcmFtcy5rZXlQYWlyLFxuICAgICAgICAgICAgZnVsbFJ1bjogcGFyYW1zLmZ1bGxSdW4sXG4gICAgICAgIH0pO1xuICAgIH1cblxuICAgIGFzeW5jIGludGVybmFsUnVuTWVzc2FnZUxvY2FsSnMoXG4gICAgICAgIHBhcmFtczogVE9OQ29udHJhY3RSdW5NZXNzYWdlTG9jYWxQYXJhbXMsXG4gICAgICAgIHBhcmVudFNwYW4/OiAoU3BhbiB8IFNwYW5Db250ZXh0KSxcbiAgICApOiBQcm9taXNlPFRPTkNvbnRyYWN0UnVuTG9jYWxSZXN1bHQ+IHtcbiAgICAgICAgY29uc3QgYWRkcmVzcyA9IHBhcmFtcy5hZGRyZXNzO1xuICAgICAgICBpZiAoIWFkZHJlc3MpIHtcbiAgICAgICAgICAgIHRocm93IFRPTkNsaWVudEVycm9yLmFkZHJlc3NSZXF1aXJlZEZvclJ1bkxvY2FsKCk7XG4gICAgICAgIH1cbiAgICAgICAgY29uc3QgYWNjb3VudCA9IHBhcmFtcy5hY2NvdW50IHx8IChhd2FpdCB0aGlzLmdldEFjY291bnQoXG4gICAgICAgICAgICBhZGRyZXNzLFxuICAgICAgICAgICAgZmFsc2UsXG4gICAgICAgICAgICBwYXJhbXMud2FpdFBhcmFtcyxcbiAgICAgICAgICAgIHBhcmVudFNwYW4sXG4gICAgICAgICkpO1xuICAgICAgICBpZiAoIWFjY291bnQuY29kZSkge1xuICAgICAgICAgICAgdGhyb3cgVE9OQ2xpZW50RXJyb3IuYWNjb3VudENvZGVNaXNzaW5nKGFkZHJlc3MsIChhY2NvdW50OiBhbnkpLmJhbGFuY2UpO1xuICAgICAgICB9XG4gICAgICAgIHJldHVybiB0aGlzLnJlcXVlc3RDb3JlKCdjb250cmFjdHMucnVuLmxvY2FsLm1zZycsIHtcbiAgICAgICAgICAgIGFkZHJlc3MsXG4gICAgICAgICAgICBhY2NvdW50LFxuICAgICAgICAgICAgYWJpOiBwYXJhbXMuYWJpLFxuICAgICAgICAgICAgZnVuY3Rpb25OYW1lOiBwYXJhbXMuZnVuY3Rpb25OYW1lLFxuICAgICAgICAgICAgbWVzc2FnZUJhc2U2NDogcGFyYW1zLm1lc3NhZ2VCb2R5QmFzZTY0LFxuICAgICAgICAgICAgZnVsbFJ1bjogcGFyYW1zLmZ1bGxSdW4sXG4gICAgICAgIH0pO1xuICAgIH1cbn1cblxuVE9OQ29udHJhY3RzTW9kdWxlLm1vZHVsZU5hbWUgPSAnVE9OQ29udHJhY3RzTW9kdWxlJztcblxuY29uc3QgdHJhbnNhY3Rpb25EZXRhaWxzID0gYFxuICAgIGlkXG4gICAgaW5fbXNnXG4gICAgdHJfdHlwZVxuICAgIHN0YXR1c1xuICAgIGluX21zZ1xuICAgIG91dF9tc2dzXG4gICAgYmxvY2tfaWRcbiAgICBub3dcbiAgICBhYm9ydGVkXG4gICAgbHRcbiAgICB0b3RhbF9mZWVzXG4gICAgc3RvcmFnZSB7XG4gICAgICAgIHN0YXR1c19jaGFuZ2VcbiAgICAgICAgc3RvcmFnZV9mZWVzX2NvbGxlY3RlZFxuICAgIH1cbiAgICBjb21wdXRlIHtcbiAgICAgICAgY29tcHV0ZV90eXBlXG4gICAgICAgIHNraXBwZWRfcmVhc29uXG4gICAgICAgIHN1Y2Nlc3NcbiAgICAgICAgZXhpdF9jb2RlXG4gICAgICAgIGdhc19mZWVzXG4gICAgICAgIGdhc191c2VkXG4gICAgfVxuICAgIGFjdGlvbiB7XG4gICAgICAgIHN1Y2Nlc3NcbiAgICAgICAgdmFsaWRcbiAgICAgICAgcmVzdWx0X2NvZGVcbiAgICAgICAgbm9fZnVuZHNcbiAgICAgICAgdG90YWxfZndkX2ZlZXNcbiAgICAgICAgdG90YWxfYWN0aW9uX2ZlZXNcbiAgICB9XG4gICAgb3V0X21lc3NhZ2VzIHtcbiAgICAgICAgaWRcbiAgICAgICAgbXNnX3R5cGVcbiAgICAgICAgYm9keVxuICAgICAgICB2YWx1ZVxuICAgIH1cbiAgIGA7XG4iXX0=