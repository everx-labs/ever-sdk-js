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

                            if (_TONClient.TONClientError.isWaitforTimeout(_context32.t0)) {
                              reject(_TONClient.TONClientError.transactionWaitTimeout(messageId, sendTime, processingTimeout));
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

                throw _TONClient.TONClientError.messageExpired(messageId, sendTime, expire, blockTime);

              case 27:
                transactionNow = transaction.now || 0;
                this.config.log('waitForTransaction. transaction received', {
                  id: transaction.id,
                  block_id: transaction.block_id,
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy9tb2R1bGVzL1RPTkNvbnRyYWN0c01vZHVsZS5qcyJdLCJuYW1lcyI6WyJUT05BZGRyZXNzU3RyaW5nVmFyaWFudCIsIkFjY291bnRJZCIsIkhleCIsIkJhc2U2NCIsIlRPTkNsaWVudFRyYW5zYWN0aW9uUGhhc2UiLCJzdG9yYWdlIiwiY29tcHV0ZVNraXBwZWQiLCJjb21wdXRlVm0iLCJhY3Rpb24iLCJ1bmtub3duIiwiVE9OQ2xpZW50Q29tcHV0ZVNraXBwZWRTdGF0dXMiLCJub1N0YXRlIiwiYmFkU3RhdGUiLCJub0dhcyIsIlRPTkNsaWVudFN0b3JhZ2VTdGF0dXMiLCJ1bmNoYW5nZWQiLCJmcm96ZW4iLCJkZWxldGVkIiwiUUluTXNnVHlwZSIsImV4dGVybmFsIiwiaWhyIiwiaW1tZWRpYXRlbHkiLCJ0cmFuc2l0IiwiZGlzY2FyZGVkRmluYWwiLCJkaXNjYXJkZWRUcmFuc2l0IiwiUU91dE1zZ1R5cGUiLCJvdXRNc2dOZXciLCJkZXF1ZXVlSW1tZWRpYXRlbHkiLCJkZXF1ZXVlIiwidHJhbnNpdFJlcXVpcmVkIiwibm9uZSIsIlFNZXNzYWdlVHlwZSIsImludGVybmFsIiwiZXh0SW4iLCJleHRPdXQiLCJRTWVzc2FnZVByb2Nlc3NpbmdTdGF0dXMiLCJxdWV1ZWQiLCJwcm9jZXNzaW5nIiwicHJlbGltaW5hcnkiLCJwcm9wb3NlZCIsImZpbmFsaXplZCIsInJlZnVzZWQiLCJ0cmFuc2l0aW5nIiwiUUJsb2NrUHJvY2Vzc2luZ1N0YXR1cyIsIlFTcGxpdFR5cGUiLCJzcGxpdCIsIm1lcmdlIiwiUUFjY291bnRUeXBlIiwidW5pbml0IiwiYWN0aXZlIiwiUVRyYW5zYWN0aW9uVHlwZSIsIm9yZGluYXJ5IiwidGljayIsInRvY2siLCJzcGxpdFByZXBhcmUiLCJzcGxpdEluc3RhbGwiLCJtZXJnZVByZXBhcmUiLCJtZXJnZUluc3RhbGwiLCJRVHJhbnNhY3Rpb25Qcm9jZXNzaW5nU3RhdHVzIiwiUUFjY291bnRTdGF0dXMiLCJub25FeGlzdCIsIlFBY2NvdW50U3RhdHVzQ2hhbmdlIiwiUUNvbXB1dGVUeXBlIiwic2tpcHBlZCIsInZtIiwiUVNraXBSZWFzb24iLCJRQm91bmNlVHlwZSIsIm5lZ0Z1bmRzIiwibm9GdW5kcyIsIm9rIiwicmVtb3ZlVHlwZU5hbWUiLCJvYmoiLCJfX3R5cGVuYW1lIiwiT2JqZWN0IiwidmFsdWVzIiwiZm9yRWFjaCIsInZhbHVlIiwicmVtb3ZlUHJvcHMiLCJwYXRocyIsInJlc3VsdCIsInBhdGgiLCJkb3RQb3MiLCJpbmRleE9mIiwibmFtZSIsInN1YnN0ciIsImNoaWxkIiwicmVkdWNlZENoaWxkIiwiVE9OQ29udHJhY3RzTW9kdWxlIiwiY29uZmlnIiwiY29udGV4dCIsImdldE1vZHVsZSIsIlRPTkNvbmZpZ01vZHVsZSIsInF1ZXJpZXMiLCJUT05RdWVyaWVzTW9kdWxlIiwicGFyYW1zIiwicGFyZW50U3BhbiIsImFjY291bnRzIiwicXVlcnkiLCJpZCIsImVxIiwiYWRkcmVzcyIsInVuZGVmaW5lZCIsImxlbmd0aCIsImJhbGFuY2VHcmFtcyIsImJhbGFuY2UiLCJ0cmFjZSIsInNwYW4iLCJzZXRUYWciLCJpbnRlcm5hbERlcGxveUpzIiwiaW50ZXJuYWxSdW5KcyIsImludGVybmFsUnVuTG9jYWxKcyIsImludGVybmFsUnVuTWVzc2FnZUxvY2FsSnMiLCJjb3JlUGFyYW1zIiwiY29kZUJhc2U2NCIsImRhdGFCYXNlNjQiLCJUT05DbGllbnRFcnJvciIsImFkZHJlc3NSZXF1aXJlZEZvclJ1bkxvY2FsIiwiZ2V0QWNjb3VudCIsImFjY291bnQiLCJjb2RlIiwiYWNjb3VudENvZGVNaXNzaW5nIiwiZGF0YSIsInJlcXVlc3RDb3JlIiwiY29ucyIsIml0ZW0iLCJpbnZhbGlkQ29ucyIsInB1c2giLCJyZXRyeUluZGV4IiwibG9nIiwiY29uc3RydWN0b3JIZWFkZXIiLCJtYWtlRXhwaXJlSGVhZGVyIiwiYWJpIiwiY29uc3RydWN0b3JQYXJhbXMiLCJpbml0UGFyYW1zIiwiaW1hZ2VCYXNlNjQiLCJrZXlQYWlyIiwid29ya2NoYWluSWQiLCJtZXNzYWdlIiwibWVzc2FnZUlkIiwibWVzc2FnZUJvZHlCYXNlNjQiLCJleHBpcmUiLCJjcmVhdGlvblRpbWUiLCJEYXRlIiwibm93IiwiaGVhZGVyIiwiZnVuY3Rpb25OYW1lIiwiaW5wdXQiLCJwdWJsaWNLZXlIZXgiLCJhZGRyZXNzSGV4Iiwic2lnblBhcmFtcyIsImVuY29kZWQiLCJjcmVhdGVTaWduZWRNZXNzYWdlIiwidW5zaWduZWRNZXNzYWdlIiwidW5zaWduZWRCeXRlc0Jhc2U2NCIsInNpZ25CeXRlc0Jhc2U2NCIsImdldEJvY0hhc2giLCJib2NCYXNlNjQiLCJoYXNoIiwic2VuZE5vZGVSZXF1ZXN0RmFpbGVkIiwiTWF0aCIsInNlcnZlclRpbWVEZWx0YSIsImFicyIsIm91dE9mU3luY1RocmVzaG9sZCIsImRyb3BTZXJ2ZXJUaW1lRGVsdGEiLCJjbG9ja091dE9mU3luYyIsImdldE1lc3NhZ2VJZCIsImlkQmFzZTY0IiwiQnVmZmVyIiwiZnJvbSIsInRvU3RyaW5nIiwicG9zdFJlcXVlc3RzIiwiYm9keSIsInJlc3VsdEZpZWxkcyIsIm1lc3NhZ2VDcmVhdGlvblRpbWUiLCJzZW5kTWVzc2FnZSIsIndhaXRGb3JUcmFuc2FjdGlvbiIsInByb2Nlc3NpbmdUaW1lb3V0IiwibWVzc2FnZVByb2Nlc3NpbmdUaW1lb3V0IiwicHJvbWlzZXMiLCJnZXRTZXJ2ZXJJbmZvIiwic2VydmVySW5mbyIsIm9wZXJhdGlvbklkIiwic3VwcG9ydHNPcGVyYXRpb25JZCIsImdlbmVyYXRlT3BlcmF0aW9uSWQiLCJ0cmFuc2FjdGlvbiIsInNlbmRUaW1lIiwicm91bmQiLCJibG9ja1RpbWUiLCJibG9ja1RpbWVvdXQiLCJ3YWl0RXhwaXJlZCIsImJsb2NrIiwiYmxvY2tzIiwid2FpdEZvciIsImZpbHRlciIsIm1hc3RlciIsIm1pbl9zaGFyZF9nZW5fdXRpbWUiLCJnZSIsInRpbWVvdXQiLCJpc1dhaXRmb3JUaW1lb3V0IiwibmV0d29ya1NpbGVudCIsInRyYW5zYWN0aW9uX2lkIiwiaW5fbXNnX2Rlc2NyIiwiZmluZCIsIm1zZyIsImludGVybmFsRXJyb3IiLCJ0cmFuc2FjdGlvbnMiLCJ0cmFuc2FjdGlvbkxhZyIsImdlbl91dGltZSIsIlByb21pc2UiLCJyZXNvbHZlIiwicmVqZWN0IiwiaW5fbXNnIiwic3RhdHVzIiwidHJhbnNhY3Rpb25XYWl0VGltZW91dCIsInJhY2UiLCJmaW5pc2hPcGVyYXRpb25zIiwibWVzc2FnZUV4cGlyZWQiLCJ0cmFuc2FjdGlvbk5vdyIsImJsb2NrX2lkIiwidG9JU09TdHJpbmciLCJpc01lc3NhZ2VFeHBpcmVkIiwiaXNDbGllbnRFcnJvciIsIlRSQU5TQUNUSU9OX1dBSVRfVElNRU9VVCIsInJlc29sdmVEZXRhaWxlZEVycm9yIiwiY2hlY2tUcmFuc2FjdGlvbiIsImFjY291bnRNaXNzaW5nIiwiaXNDb250cmFjdEVycm9yIiwiVE9OQ29udHJhY3RFeGl0Q29kZSIsIk5PX0dBUyIsImFjY291bnRCYWxhbmNlVG9vTG93IiwiZXJyb3IiLCJtZXNzYWdlQmFzZTY0IiwidGltZSIsIm1haW5FcnJvciIsImFjY190eXBlIiwiaXNEZXBsb3llZCIsImFscmVhZHlEZXBsb3llZCIsIndhaXRGb3JEZXBsb3lUcmFuc2FjdGlvbiIsImRlcGxveU1lc3NhZ2UiLCJ0cmFuc2FjdGlvbkRldGFpbHMiLCJydW5NZXNzYWdlIiwid2FpdEZvclJ1blRyYW5zYWN0aW9uIiwib3V0cHV0TWVzc2FnZXMiLCJvdXRfbWVzc2FnZXMiLCJvdXRwdXQiLCJleHRlcm5hbE1lc3NhZ2VzIiwieCIsIm1zZ190eXBlIiwiYWxsIiwibWFwIiwiZGVjb2RlT3V0cHV0TWVzc2FnZUJvZHkiLCJib2R5QmFzZTY0Iiwib3V0cHV0cyIsInJlc3VsdE91dHB1dCIsInRvTG93ZXJDYXNlIiwid2FpdFBhcmFtcyIsImVtdWxhdGVCYWxhbmNlIiwiYmlnQmFsYW5jZSIsImNyZWF0ZURlcGxveU1lc3NhZ2UiLCJjYWxjTXNnUHJvY2Vzc0ZlZXMiLCJuZXdBY2NvdW50IiwibGFzdF9wYWlkIiwiZmxvb3IiLCJ1c2VySGVhZGVyIiwibWVzc2FnZUV4cGlyYXRpb25UaW1lb3V0IiwiaW5jbHVkZXMiLCJjYWxsIiwicmV0cmllc0NvdW50IiwibWVzc2FnZVJldHJpZXNDb3VudCIsImkiLCJ1c2VSZXRyeSIsIlRPTkVycm9yQ29kZSIsIk1FU1NBR0VfRVhQSVJFRCIsIlJFUExBWV9QUk9URUNUSU9OIiwicmV0cnlDYWxsIiwiY3JlYXRlUnVuTWVzc2FnZSIsInRyYW5zYWN0aW9uTHQiLCJsYXN0X3RyYW5zX2x0IiwiZnVsbFJ1biIsIlRPTk1vZHVsZSIsIm1vZHVsZU5hbWUiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7QUFLQTs7QUFrREE7O0FBQ0E7O0FBQ0E7O0FBQ0E7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUVPLElBQU1BLHVCQUF1QixHQUFHO0FBQ25DQyxFQUFBQSxTQUFTLEVBQUUsV0FEd0I7QUFFbkNDLEVBQUFBLEdBQUcsRUFBRSxLQUY4QjtBQUduQ0MsRUFBQUEsTUFBTSxFQUFFO0FBSDJCLENBQWhDOztBQU1BLElBQU1DLHlCQUF5QixHQUFHO0FBQ3JDQyxFQUFBQSxPQUFPLEVBQUUsU0FENEI7QUFFckNDLEVBQUFBLGNBQWMsRUFBRSxnQkFGcUI7QUFHckNDLEVBQUFBLFNBQVMsRUFBRSxXQUgwQjtBQUlyQ0MsRUFBQUEsTUFBTSxFQUFFLFFBSjZCO0FBS3JDQyxFQUFBQSxPQUFPLEVBQUU7QUFMNEIsQ0FBbEM7O0FBUUEsSUFBTUMsNkJBQTZCLEdBQUc7QUFDekNDLEVBQUFBLE9BQU8sRUFBRSxDQURnQztBQUV6Q0MsRUFBQUEsUUFBUSxFQUFFLENBRitCO0FBR3pDQyxFQUFBQSxLQUFLLEVBQUU7QUFIa0MsQ0FBdEM7O0FBTUEsSUFBTUMsc0JBQXNCLEdBQUc7QUFDbENDLEVBQUFBLFNBQVMsRUFBRSxDQUR1QjtBQUVsQ0MsRUFBQUEsTUFBTSxFQUFFLENBRjBCO0FBR2xDQyxFQUFBQSxPQUFPLEVBQUU7QUFIeUIsQ0FBL0I7O0FBTUEs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Ozs7Ozs7Ozt1SEFZUHhMLE0sRUFDQUMsVTs7Ozs7O0FBRU1LLGdCQUFBQSxPLEdBQVVOLE1BQU0sQ0FBQ00sTzs7b0JBQ2xCQSxPOzs7OztzQkFDS2UsMEJBQWVDLDBCQUFmLEU7OztnQ0FFTXRCLE1BQU0sQ0FBQ3dCLE87Ozs7Ozs7O3VCQUFrQixLQUFLRCxVQUFMLENBQ3JDakIsT0FEcUMsRUFFckMsS0FGcUMsRUFHckNOLE1BQU0sQ0FBQ2lLLFVBSDhCLEVBSXJDaEssVUFKcUMsQzs7Ozs7O0FBQW5DdUIsZ0JBQUFBLE87O29CQU1EQSxPQUFPLENBQUNDLEk7Ozs7O3NCQUNISiwwQkFBZUssa0JBQWYsQ0FBa0NwQixPQUFsQyxFQUE0Q2tCLE9BQUQsQ0FBZWQsT0FBMUQsQzs7O21EQUVILEtBQUtrQixXQUFMLENBQWlCLHlCQUFqQixFQUE0QztBQUMvQ3RCLGtCQUFBQSxPQUFPLEVBQVBBLE9BRCtDO0FBRS9Da0Isa0JBQUFBLE9BQU8sRUFBUEEsT0FGK0M7QUFHL0NhLGtCQUFBQSxHQUFHLEVBQUVyQyxNQUFNLENBQUNxQyxHQUhtQztBQUkvQ2Msa0JBQUFBLFlBQVksRUFBRW5ELE1BQU0sQ0FBQ21ELFlBSjBCO0FBSy9Dc0Ysa0JBQUFBLGFBQWEsRUFBRXpJLE1BQU0sQ0FBQzZDLGlCQUx5QjtBQU0vQzJJLGtCQUFBQSxPQUFPLEVBQUV4TCxNQUFNLENBQUN3TDtBQU4rQixpQkFBNUMsQzs7Ozs7Ozs7Ozs7Ozs7Ozs7OztFQTU5QmlDQyxxQjs7O0FBdStCaERoTSxrQkFBa0IsQ0FBQ2lNLFVBQW5CLEdBQWdDLG9CQUFoQztBQUVBLElBQU16QyxrQkFBa0IsMmtCQUF4QiIsInNvdXJjZXNDb250ZW50IjpbIi8qXG4gKiBDb3B5cmlnaHQgMjAxOC0yMDIwIFRPTiBERVYgU09MVVRJT05TIExURC5cbiAqL1xuLy8gQGZsb3dcblxuaW1wb3J0IHsgU3BhbiwgU3BhbkNvbnRleHQgfSBmcm9tICdvcGVudHJhY2luZyc7XG5pbXBvcnQgdHlwZSB7XG4gICAgUUFjY291bnQsXG4gICAgUUJsb2NrLFxuICAgIFFNZXNzYWdlLFxuICAgIFFUcmFuc2FjdGlvbixcbiAgICBUT05Db250cmFjdEFCSSxcbiAgICBUT05Db250cmFjdEFjY291bnRXYWl0UGFyYW1zLFxuICAgIFRPTkNvbnRyYWN0Q29udmVydEFkZHJlc3NQYXJhbXMsXG4gICAgVE9OQ29udHJhY3RDb252ZXJ0QWRkcmVzc1Jlc3VsdCxcbiAgICBUT05Db250cmFjdENyZWF0ZVJ1bkJvZHlQYXJhbXMsXG4gICAgVE9OQ29udHJhY3RDcmVhdGVSdW5Cb2R5UmVzdWx0LFxuICAgIFRPTkNvbnRyYWN0Q3JlYXRlU2lnbmVkRGVwbG95TWVzc2FnZVBhcmFtcyxcbiAgICBUT05Db250cmFjdENyZWF0ZVNpZ25lZE1lc3NhZ2VQYXJhbXMsXG4gICAgVE9OQ29udHJhY3RDcmVhdGVTaWduZWRSdW5NZXNzYWdlUGFyYW1zLFxuICAgIFRPTkNvbnRyYWN0RGVjb2RlTWVzc2FnZUJvZHlQYXJhbXMsXG4gICAgVE9OQ29udHJhY3REZWNvZGVNZXNzYWdlQm9keVJlc3VsdCxcbiAgICBUT05Db250cmFjdERlY29kZVJ1bk91dHB1dFBhcmFtcyxcbiAgICBUT05Db250cmFjdERlcGxveU1lc3NhZ2UsXG4gICAgVE9OQ29udHJhY3REZXBsb3lQYXJhbXMsXG4gICAgVE9OQ29udHJhY3REZXBsb3lSZXN1bHQsXG4gICAgVE9OQ29udHJhY3RDYWxjRGVwbG95RmVlUGFyYW1zLFxuICAgIFRPTkNvbnRyYWN0Qm9jLFxuICAgIFRPTkNvbnRyYWN0R2V0Qm9jSGFzaFJlc3VsdCxcbiAgICBUT05Db250cmFjdEdldENvZGVGcm9tSW1hZ2VQYXJhbXMsXG4gICAgVE9OQ29udHJhY3RHZXRDb2RlRnJvbUltYWdlUmVzdWx0LFxuICAgIFRPTkNvbnRyYWN0R2V0RGVwbG95RGF0YVBhcmFtcyxcbiAgICBUT05Db250cmFjdEdldERlcGxveURhdGFSZXN1bHQsXG4gICAgVE9OQ29udHJhY3RHZXRGdW5jdGlvbklkUGFyYW1zLFxuICAgIFRPTkNvbnRyYWN0R2V0RnVuY3Rpb25JZFJlc3VsdCxcbiAgICBUT05Db250cmFjdExvYWRQYXJhbXMsXG4gICAgVE9OQ29udHJhY3RMb2FkUmVzdWx0LFxuICAgIFRPTkNvbnRyYWN0Q2FsY1J1bkZlZVBhcmFtcyxcbiAgICBUT05Db250cmFjdENhbGNGZWVSZXN1bHQsXG4gICAgVE9OQ29udHJhY3RDYWxjTXNnUHJvY2Vzc2luZ0ZlZXNQYXJhbXMsXG4gICAgVE9OQ29udHJhY3RNZXNzYWdlLFxuICAgIFRPTkNvbnRyYWN0UnVuTG9jYWxQYXJhbXMsXG4gICAgVE9OQ29udHJhY3RSdW5NZXNzYWdlLFxuICAgIFRPTkNvbnRyYWN0UnVuUGFyYW1zLFxuICAgIFRPTkNvbnRyYWN0UnVuUmVzdWx0LFxuICAgIFRPTkNvbnRyYWN0cyxcbiAgICBUT05Db250cmFjdFVuc2lnbmVkRGVwbG95TWVzc2FnZSxcbiAgICBUT05Db250cmFjdFVuc2lnbmVkTWVzc2FnZSxcbiAgICBUT05Db250cmFjdFVuc2lnbmVkUnVuTWVzc2FnZSxcbiAgICBUT05Db250cmFjdFJ1bkdldFBhcmFtcyxcbiAgICBUT05Db250cmFjdFJ1bkdldFJlc3VsdCxcbiAgICBUT05Db250cmFjdFJ1bk1lc3NhZ2VMb2NhbFBhcmFtcyxcbiAgICBUT05Db250cmFjdFJ1bkxvY2FsUmVzdWx0LFxufSBmcm9tICcuLi8uLi90eXBlcyc7XG5cbmltcG9ydCB7IFRPTkNsaWVudEVycm9yLCBUT05Db250cmFjdEV4aXRDb2RlLCBUT05FcnJvckNvZGUgfSBmcm9tICcuLi9UT05DbGllbnQnO1xuaW1wb3J0IHsgVE9OTW9kdWxlIH0gZnJvbSAnLi4vVE9OTW9kdWxlJztcbmltcG9ydCBUT05Db25maWdNb2R1bGUgZnJvbSAnLi9UT05Db25maWdNb2R1bGUnO1xuaW1wb3J0IFRPTlF1ZXJpZXNNb2R1bGUgZnJvbSAnLi9UT05RdWVyaWVzTW9kdWxlJztcblxuZXhwb3J0IGNvbnN0IFRPTkFkZHJlc3NTdHJpbmdWYXJpYW50ID0ge1xuICAgIEFjY291bnRJZDogJ0FjY291bnRJZCcsXG4gICAgSGV4OiAnSGV4JyxcbiAgICBCYXNlNjQ6ICdCYXNlNjQnLFxufTtcblxuZXhwb3J0IGNvbnN0IFRPTkNsaWVudFRyYW5zYWN0aW9uUGhhc2UgPSB7XG4gICAgc3RvcmFnZTogJ3N0b3JhZ2UnLFxuICAgIGNvbXB1dGVTa2lwcGVkOiAnY29tcHV0ZVNraXBwZWQnLFxuICAgIGNvbXB1dGVWbTogJ2NvbXB1dGVWbScsXG4gICAgYWN0aW9uOiAnYWN0aW9uJyxcbiAgICB1bmtub3duOiAndW5rbm93bicsXG59O1xuXG5leHBvcnQgY29uc3QgVE9OQ2xpZW50Q29tcHV0ZVNraXBwZWRTdGF0dXMgPSB7XG4gICAgbm9TdGF0ZTogMCxcbiAgICBiYWRTdGF0ZTogMSxcbiAgICBub0dhczogMixcbn07XG5cbmV4cG9ydCBjb25zdCBUT05DbGllbnRTdG9yYWdlU3RhdHVzID0ge1xuICAgIHVuY2hhbmdlZDogMCxcbiAgICBmcm96ZW46IDEsXG4gICAgZGVsZXRlZDogMixcbn07XG5cbmV4cG9ydCBjb25zdCBRSW5Nc2dUeXBlID0ge1xuICAgIGV4dGVybmFsOiAwLFxuICAgIGlocjogMSxcbiAgICBpbW1lZGlhdGVseTogMixcbiAgICBmaW5hbDogMyxcbiAgICB0cmFuc2l0OiA0LFxuICAgIGRpc2NhcmRlZEZpbmFsOiA1LFxuICAgIGRpc2NhcmRlZFRyYW5zaXQ6IDYsXG59O1xuXG5leHBvcnQgY29uc3QgUU91dE1zZ1R5cGUgPSB7XG4gICAgZXh0ZXJuYWw6IDAsXG4gICAgaW1tZWRpYXRlbHk6IDEsXG4gICAgb3V0TXNnTmV3OiAyLFxuICAgIHRyYW5zaXQ6IDMsXG4gICAgZGVxdWV1ZUltbWVkaWF0ZWx5OiA0LFxuICAgIGRlcXVldWU6IDUsXG4gICAgdHJhbnNpdFJlcXVpcmVkOiA2LFxuICAgIG5vbmU6IC0xLFxufTtcblxuZXhwb3J0IGNvbnN0IFFNZXNzYWdlVHlwZSA9IHtcbiAgICBpbnRlcm5hbDogMCxcbiAgICBleHRJbjogMSxcbiAgICBleHRPdXQ6IDIsXG59O1xuXG5leHBvcnQgY29uc3QgUU1lc3NhZ2VQcm9jZXNzaW5nU3RhdHVzID0ge1xuICAgIHVua25vd246IDAsXG4gICAgcXVldWVkOiAxLFxuICAgIHByb2Nlc3Npbmc6IDIsXG4gICAgcHJlbGltaW5hcnk6IDMsXG4gICAgcHJvcG9zZWQ6IDQsXG4gICAgZmluYWxpemVkOiA1LFxuICAgIHJlZnVzZWQ6IDYsXG4gICAgdHJhbnNpdGluZzogNyxcbn07XG5cbmV4cG9ydCBjb25zdCBRQmxvY2tQcm9jZXNzaW5nU3RhdHVzID0ge1xuICAgIHVua25vd246IDAsXG4gICAgcHJvcG9zZWQ6IDEsXG4gICAgZmluYWxpemVkOiAyLFxuICAgIHJlZnVzZWQ6IDMsXG59O1xuXG5leHBvcnQgY29uc3QgUVNwbGl0VHlwZSA9IHtcbiAgICBub25lOiAwLFxuICAgIHNwbGl0OiAyLFxuICAgIG1lcmdlOiAzLFxufTtcblxuZXhwb3J0IGNvbnN0IFFBY2NvdW50VHlwZSA9IHtcbiAgICB1bmluaXQ6IDAsXG4gICAgYWN0aXZlOiAxLFxuICAgIGZyb3plbjogMixcbn07XG5cbmV4cG9ydCBjb25zdCBRVHJhbnNhY3Rpb25UeXBlID0ge1xuICAgIG9yZGluYXJ5OiAwLFxuICAgIHN0b3JhZ2U6IDEsXG4gICAgdGljazogMixcbiAgICB0b2NrOiAzLFxuICAgIHNwbGl0UHJlcGFyZTogNCxcbiAgICBzcGxpdEluc3RhbGw6IDUsXG4gICAgbWVyZ2VQcmVwYXJlOiA2LFxuICAgIG1lcmdlSW5zdGFsbDogNyxcbn07XG5cbmV4cG9ydCBjb25zdCBRVHJhbnNhY3Rpb25Qcm9jZXNzaW5nU3RhdHVzID0ge1xuICAgIHVua25vd246IDAsXG4gICAgcHJlbGltaW5hcnk6IDEsXG4gICAgcHJvcG9zZWQ6IDIsXG4gICAgZmluYWxpemVkOiAzLFxuICAgIHJlZnVzZWQ6IDQsXG59O1xuXG5leHBvcnQgY29uc3QgUUFjY291bnRTdGF0dXMgPSB7XG4gICAgdW5pbml0OiAwLFxuICAgIGFjdGl2ZTogMSxcbiAgICBmcm96ZW46IDIsXG4gICAgbm9uRXhpc3Q6IDMsXG59O1xuXG5leHBvcnQgY29uc3QgUUFjY291bnRTdGF0dXNDaGFuZ2UgPSB7XG4gICAgdW5jaGFuZ2VkOiAwLFxuICAgIGZyb3plbjogMSxcbiAgICBkZWxldGVkOiAyLFxufTtcblxuZXhwb3J0IGNvbnN0IFFDb21wdXRlVHlwZSA9IHtcbiAgICBza2lwcGVkOiAwLFxuICAgIHZtOiAxLFxufTtcblxuZXhwb3J0IGNvbnN0IFFTa2lwUmVhc29uID0ge1xuICAgIG5vU3RhdGU6IDAsXG4gICAgYmFkU3RhdGU6IDEsXG4gICAgbm9HYXM6IDIsXG59O1xuXG5leHBvcnQgY29uc3QgUUJvdW5jZVR5cGUgPSB7XG4gICAgbmVnRnVuZHM6IDAsXG4gICAgbm9GdW5kczogMSxcbiAgICBvazogMixcbn07XG5cbmZ1bmN0aW9uIHJlbW92ZVR5cGVOYW1lKG9iajogYW55KSB7XG4gICAgaWYgKG9iai5fX3R5cGVuYW1lKSB7XG4gICAgICAgIGRlbGV0ZSBvYmouX190eXBlbmFtZTtcbiAgICB9XG4gICAgT2JqZWN0LnZhbHVlcyhvYmopXG4gICAgICAgIC5mb3JFYWNoKCh2YWx1ZSkgPT4ge1xuICAgICAgICAgICAgaWYgKCEhdmFsdWUgJiYgdHlwZW9mIHZhbHVlID09PSAnb2JqZWN0Jykge1xuICAgICAgICAgICAgICAgIHJlbW92ZVR5cGVOYW1lKHZhbHVlKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfSk7XG59XG5cbmV4cG9ydCBmdW5jdGlvbiByZW1vdmVQcm9wcyhvYmo6IHt9LCBwYXRoczogc3RyaW5nW10pOiB7fSB7XG4gICAgbGV0IHJlc3VsdCA9IG9iajtcbiAgICBwYXRocy5mb3JFYWNoKChwYXRoKSA9PiB7XG4gICAgICAgIGNvbnN0IGRvdFBvcyA9IHBhdGguaW5kZXhPZignLicpO1xuICAgICAgICBpZiAoZG90UG9zIDwgMCkge1xuICAgICAgICAgICAgaWYgKHBhdGggaW4gcmVzdWx0KSB7XG4gICAgICAgICAgICAgICAgcmVzdWx0ID0geyAuLi5yZXN1bHQgfTtcbiAgICAgICAgICAgICAgICBkZWxldGUgcmVzdWx0W3BhdGhdO1xuICAgICAgICAgICAgfVxuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgY29uc3QgbmFtZSA9IHBhdGguc3Vic3RyKDAsIGRvdFBvcyk7XG4gICAgICAgICAgICBjb25zdCBjaGlsZCA9IHJlc3VsdFtuYW1lXTtcbiAgICAgICAgICAgIGlmIChjaGlsZCkge1xuICAgICAgICAgICAgICAgIGNvbnN0IHJlZHVjZWRDaGlsZCA9IHJlbW92ZVByb3BzKGNoaWxkLCBbcGF0aC5zdWJzdHIoZG90UG9zICsgMSldKTtcbiAgICAgICAgICAgICAgICBpZiAocmVkdWNlZENoaWxkICE9PSBjaGlsZCkge1xuICAgICAgICAgICAgICAgICAgICByZXN1bHQgPSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAuLi5yZXN1bHQsXG4gICAgICAgICAgICAgICAgICAgICAgICBbbmFtZV06IHJlZHVjZWRDaGlsZCxcbiAgICAgICAgICAgICAgICAgICAgfTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICB9KTtcbiAgICByZXR1cm4gcmVzdWx0O1xufVxuXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBUT05Db250cmFjdHNNb2R1bGUgZXh0ZW5kcyBUT05Nb2R1bGUgaW1wbGVtZW50cyBUT05Db250cmFjdHMge1xuICAgIGNvbmZpZzogVE9OQ29uZmlnTW9kdWxlO1xuXG4gICAgcXVlcmllczogVE9OUXVlcmllc01vZHVsZTtcblxuICAgIGFzeW5jIHNldHVwKCk6IFByb21pc2U8Kj4ge1xuICAgICAgICB0aGlzLmNvbmZpZyA9IHRoaXMuY29udGV4dC5nZXRNb2R1bGUoVE9OQ29uZmlnTW9kdWxlKTtcbiAgICAgICAgdGhpcy5xdWVyaWVzID0gdGhpcy5jb250ZXh0LmdldE1vZHVsZShUT05RdWVyaWVzTW9kdWxlKTtcbiAgICB9XG5cbiAgICBhc3luYyBsb2FkKFxuICAgICAgICBwYXJhbXM6IFRPTkNvbnRyYWN0TG9hZFBhcmFtcyxcbiAgICAgICAgcGFyZW50U3Bhbj86IChTcGFuIHwgU3BhbkNvbnRleHQpLFxuICAgICk6IFByb21pc2U8VE9OQ29udHJhY3RMb2FkUmVzdWx0PiB7XG4gICAgICAgIGNvbnN0IGFjY291bnRzOiBRQWNjb3VudFtdID0gYXdhaXQgdGhpcy5xdWVyaWVzLmFjY291bnRzLnF1ZXJ5KHtcbiAgICAgICAgICAgIGlkOiB7IGVxOiBwYXJhbXMuYWRkcmVzcyB9LFxuICAgICAgICB9LCAnYmFsYW5jZScsIHVuZGVmaW5lZCwgdW5kZWZpbmVkLCB1bmRlZmluZWQsIHBhcmVudFNwYW4pO1xuICAgICAgICBpZiAoYWNjb3VudHMgJiYgYWNjb3VudHMubGVuZ3RoID4gMCkge1xuICAgICAgICAgICAgcmV0dXJuIHtcbiAgICAgICAgICAgICAgICBpZDogcGFyYW1zLmFkZHJlc3MsXG4gICAgICAgICAgICAgICAgYmFsYW5jZUdyYW1zOiBhY2NvdW50c1swXS5iYWxhbmNlLFxuICAgICAgICAgICAgfTtcbiAgICAgICAgfVxuICAgICAgICByZXR1cm4ge1xuICAgICAgICAgICAgaWQ6IG51bGwsXG4gICAgICAgICAgICBiYWxhbmNlR3JhbXM6IG51bGwsXG4gICAgICAgIH07XG4gICAgfVxuXG5cbiAgICAvLyBGYWNhZGUgZnVuY3Rpb25zXG5cbiAgICBhc3luYyBkZXBsb3koXG4gICAgICAgIHBhcmFtczogVE9OQ29udHJhY3REZXBsb3lQYXJhbXMsXG4gICAgICAgIHBhcmVudFNwYW4/OiAoU3BhbiB8IFNwYW5Db250ZXh0KSxcbiAgICApOiBQcm9taXNlPFRPTkNvbnRyYWN0RGVwbG95UmVzdWx0PiB7XG4gICAgICAgIHJldHVybiB0aGlzLmNvbnRleHQudHJhY2UoJ2NvbnRyYWN0cy5kZXBsb3knLCBhc3luYyAoc3BhbjogU3BhbikgPT4ge1xuICAgICAgICAgICAgc3Bhbi5zZXRUYWcoJ3BhcmFtcycsIHJlbW92ZVByb3BzKHBhcmFtcywgWydrZXlQYWlyLnNlY3JldCddKSk7XG4gICAgICAgICAgICByZXR1cm4gdGhpcy5pbnRlcm5hbERlcGxveUpzKHBhcmFtcywgc3Bhbik7XG4gICAgICAgIH0sIHBhcmVudFNwYW4pO1xuICAgIH1cblxuXG4gICAgYXN5bmMgcnVuKFxuICAgICAgICBwYXJhbXM6IFRPTkNvbnRyYWN0UnVuUGFyYW1zLFxuICAgICAgICBwYXJlbnRTcGFuPzogKFNwYW4gfCBTcGFuQ29udGV4dCksXG4gICAgKTogUHJvbWlzZTxUT05Db250cmFjdFJ1blJlc3VsdD4ge1xuICAgICAgICByZXR1cm4gdGhpcy5jb250ZXh0LnRyYWNlKCdjb250cmFjdHMucnVuJywgYXN5bmMgKHNwYW46IFNwYW4pID0+IHtcbiAgICAgICAgICAgIHNwYW4uc2V0VGFnKCdwYXJhbXMnLCByZW1vdmVQcm9wcyhwYXJhbXMsIFsna2V5UGFpci5zZWNyZXQnXSkpO1xuICAgICAgICAgICAgcmV0dXJuIHRoaXMuaW50ZXJuYWxSdW5KcyhwYXJhbXMsIHNwYW4pO1xuICAgICAgICB9LCBwYXJlbnRTcGFuKTtcbiAgICB9XG5cbiAgICBhc3luYyBydW5Mb2NhbChcbiAgICAgICAgcGFyYW1zOiBUT05Db250cmFjdFJ1bkxvY2FsUGFyYW1zLFxuICAgICAgICBwYXJlbnRTcGFuPzogKFNwYW4gfCBTcGFuQ29udGV4dCksXG4gICAgKTogUHJvbWlzZTxUT05Db250cmFjdFJ1bkxvY2FsUmVzdWx0PiB7XG4gICAgICAgIHJldHVybiB0aGlzLmNvbnRleHQudHJhY2UoJ2NvbnRyYWN0cy5ydW5Mb2NhbCcsIGFzeW5jIChzcGFuOiBTcGFuKSA9PiB7XG4gICAgICAgICAgICBzcGFuLnNldFRhZygncGFyYW1zJywgcmVtb3ZlUHJvcHMocGFyYW1zLCBbJ2tleVBhaXIuc2VjcmV0J10pKTtcbiAgICAgICAgICAgIHJldHVybiB0aGlzLmludGVybmFsUnVuTG9jYWxKcyhwYXJhbXMsIHNwYW4pO1xuICAgICAgICB9LCBwYXJlbnRTcGFuKTtcbiAgICB9XG5cbiAgICBhc3luYyBydW5NZXNzYWdlTG9jYWwoXG4gICAgICAgIHBhcmFtczogVE9OQ29udHJhY3RSdW5NZXNzYWdlTG9jYWxQYXJhbXMsXG4gICAgICAgIHBhcmVudFNwYW4/OiAoU3BhbiB8IFNwYW5Db250ZXh0KSxcbiAgICApOiBQcm9taXNlPFRPTkNvbnRyYWN0UnVuTG9jYWxSZXN1bHQ+IHtcbiAgICAgICAgcmV0dXJuIHRoaXMuY29udGV4dC50cmFjZSgncnVuTWVzc2FnZUxvY2FsJywgYXN5bmMgKHNwYW46IFNwYW4pID0+IHtcbiAgICAgICAgICAgIHNwYW4uc2V0VGFnKCdwYXJhbXMnLCByZW1vdmVQcm9wcyhwYXJhbXMsIFsna2V5UGFpci5zZWNyZXQnXSkpO1xuICAgICAgICAgICAgcmV0dXJuIHRoaXMuaW50ZXJuYWxSdW5NZXNzYWdlTG9jYWxKcyhwYXJhbXMsIHNwYW4pO1xuICAgICAgICB9LCBwYXJlbnRTcGFuKTtcbiAgICB9XG5cbiAgICBhc3luYyBydW5HZXQoXG4gICAgICAgIHBhcmFtczogVE9OQ29udHJhY3RSdW5HZXRQYXJhbXMsXG4gICAgKTogUHJvbWlzZTxUT05Db250cmFjdFJ1bkdldFJlc3VsdD4ge1xuICAgICAgICBsZXQgY29yZVBhcmFtczogVE9OQ29udHJhY3RSdW5HZXRQYXJhbXMgPSBwYXJhbXM7XG4gICAgICAgIGlmICghcGFyYW1zLmNvZGVCYXNlNjQgfHwgIXBhcmFtcy5kYXRhQmFzZTY0KSB7XG4gICAgICAgICAgICBjb25zdCBhZGRyZXNzID0gcGFyYW1zLmFkZHJlc3M7XG4gICAgICAgICAgICBpZiAoIWFkZHJlc3MpIHtcbiAgICAgICAgICAgICAgICB0aHJvdyBUT05DbGllbnRFcnJvci5hZGRyZXNzUmVxdWlyZWRGb3JSdW5Mb2NhbCgpO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgY29uc3QgYWNjb3VudDogYW55ID0gYXdhaXQgdGhpcy5nZXRBY2NvdW50KGFkZHJlc3MsIGZhbHNlKTtcbiAgICAgICAgICAgIGlmICghYWNjb3VudC5jb2RlKSB7XG4gICAgICAgICAgICAgICAgdGhyb3cgVE9OQ2xpZW50RXJyb3IuYWNjb3VudENvZGVNaXNzaW5nKGFkZHJlc3MsIGFjY291bnQuYmFsYW5jZSk7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBhY2NvdW50LmNvZGVCYXNlNjQgPSBhY2NvdW50LmNvZGU7XG4gICAgICAgICAgICBhY2NvdW50LmRhdGFCYXNlNjQgPSBhY2NvdW50LmRhdGE7XG4gICAgICAgICAgICBkZWxldGUgYWNjb3VudC5jb2RlO1xuICAgICAgICAgICAgZGVsZXRlIGFjY291bnQuZGF0YTtcbiAgICAgICAgICAgIGNvcmVQYXJhbXMgPSB7XG4gICAgICAgICAgICAgICAgLi4uYWNjb3VudCxcbiAgICAgICAgICAgICAgICAuLi5wYXJhbXMsXG4gICAgICAgICAgICB9O1xuICAgICAgICB9XG4gICAgICAgIHJldHVybiB0aGlzLnJlcXVlc3RDb3JlKCd0dm0uZ2V0JywgY29yZVBhcmFtcyk7XG4gICAgfVxuXG4gICAgYXJyYXlGcm9tQ09OUyhjb25zOiBhbnlbXSk6IGFueVtdIHtcbiAgICAgICAgY29uc3QgcmVzdWx0ID0gW107XG4gICAgICAgIGxldCBpdGVtID0gY29ucztcbiAgICAgICAgd2hpbGUgKGl0ZW0pIHtcbiAgICAgICAgICAgIGlmICghaXRlbS5sZW5ndGggPT09IDIpIHtcbiAgICAgICAgICAgICAgICB0aHJvdyBUT05DbGllbnRFcnJvci5pbnZhbGlkQ29ucygpO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgcmVzdWx0LnB1c2goaXRlbVswXSk7XG4gICAgICAgICAgICBpdGVtID0gaXRlbVsxXTtcbiAgICAgICAgfVxuICAgICAgICByZXR1cm4gcmVzdWx0O1xuICAgIH1cblxuXG4gICAgLy8gTWVzc2FnZSBjcmVhdGlvblxuXG4gICAgYXN5bmMgY3JlYXRlRGVwbG95TWVzc2FnZShcbiAgICAgICAgcGFyYW1zOiBUT05Db250cmFjdERlcGxveVBhcmFtcyxcbiAgICAgICAgcmV0cnlJbmRleD86IG51bWJlcixcbiAgICApOiBQcm9taXNlPFRPTkNvbnRyYWN0RGVwbG95TWVzc2FnZT4ge1xuICAgICAgICB0aGlzLmNvbmZpZy5sb2coJ2NyZWF0ZURlcGxveU1lc3NhZ2UnLCBwYXJhbXMpO1xuICAgICAgICBjb25zdCBjb25zdHJ1Y3RvckhlYWRlciA9IHRoaXMubWFrZUV4cGlyZUhlYWRlcihcbiAgICAgICAgICAgIHBhcmFtcy5wYWNrYWdlLmFiaSxcbiAgICAgICAgICAgIHBhcmFtcy5jb25zdHJ1Y3RvckhlYWRlcixcbiAgICAgICAgICAgIHJldHJ5SW5kZXgsXG4gICAgICAgICk7XG4gICAgICAgIGNvbnN0IG1lc3NhZ2U6IHtcbiAgICAgICAgICAgIGFkZHJlc3M6IHN0cmluZyxcbiAgICAgICAgICAgIG1lc3NhZ2VJZDogc3RyaW5nLFxuICAgICAgICAgICAgbWVzc2FnZUJvZHlCYXNlNjQ6IHN0cmluZyxcbiAgICAgICAgfSA9IGF3YWl0IHRoaXMucmVxdWVzdENvcmUoJ2NvbnRyYWN0cy5kZXBsb3kubWVzc2FnZScsIHtcbiAgICAgICAgICAgIGFiaTogcGFyYW1zLnBhY2thZ2UuYWJpLFxuICAgICAgICAgICAgY29uc3RydWN0b3JIZWFkZXIsXG4gICAgICAgICAgICBjb25zdHJ1Y3RvclBhcmFtczogcGFyYW1zLmNvbnN0cnVjdG9yUGFyYW1zLFxuICAgICAgICAgICAgaW5pdFBhcmFtczogcGFyYW1zLmluaXRQYXJhbXMsXG4gICAgICAgICAgICBpbWFnZUJhc2U2NDogcGFyYW1zLnBhY2thZ2UuaW1hZ2VCYXNlNjQsXG4gICAgICAgICAgICBrZXlQYWlyOiBwYXJhbXMua2V5UGFpcixcbiAgICAgICAgICAgIHdvcmtjaGFpbklkOiBwYXJhbXMud29ya2NoYWluSWQsXG4gICAgICAgIH0pO1xuICAgICAgICByZXR1cm4ge1xuICAgICAgICAgICAgbWVzc2FnZToge1xuICAgICAgICAgICAgICAgIG1lc3NhZ2VJZDogbWVzc2FnZS5tZXNzYWdlSWQsXG4gICAgICAgICAgICAgICAgbWVzc2FnZUJvZHlCYXNlNjQ6IG1lc3NhZ2UubWVzc2FnZUJvZHlCYXNlNjQsXG4gICAgICAgICAgICAgICAgZXhwaXJlOiBjb25zdHJ1Y3RvckhlYWRlcj8uZXhwaXJlLFxuICAgICAgICAgICAgfSxcbiAgICAgICAgICAgIGFkZHJlc3M6IG1lc3NhZ2UuYWRkcmVzcyxcbiAgICAgICAgICAgIGNyZWF0aW9uVGltZTogRGF0ZS5ub3coKSxcbiAgICAgICAgfTtcbiAgICB9XG5cblxuICAgIGFzeW5jIGNyZWF0ZVJ1bk1lc3NhZ2UoXG4gICAgICAgIHBhcmFtczogVE9OQ29udHJhY3RSdW5QYXJhbXMsXG4gICAgICAgIHJldHJ5SW5kZXg/OiBudW1iZXIsXG4gICAgKTogUHJvbWlzZTxUT05Db250cmFjdFJ1bk1lc3NhZ2U+IHtcbiAgICAgICAgdGhpcy5jb25maWcubG9nKCdjcmVhdGVSdW5NZXNzYWdlJywgcGFyYW1zKTtcbiAgICAgICAgY29uc3QgaGVhZGVyID0gdGhpcy5tYWtlRXhwaXJlSGVhZGVyKFxuICAgICAgICAgICAgcGFyYW1zLmFiaSxcbiAgICAgICAgICAgIHBhcmFtcy5oZWFkZXIsXG4gICAgICAgICAgICByZXRyeUluZGV4LFxuICAgICAgICApO1xuICAgICAgICBjb25zdCBtZXNzYWdlID0gYXdhaXQgdGhpcy5yZXF1ZXN0Q29yZSgnY29udHJhY3RzLnJ1bi5tZXNzYWdlJywge1xuICAgICAgICAgICAgYWRkcmVzczogcGFyYW1zLmFkZHJlc3MsXG4gICAgICAgICAgICBhYmk6IHBhcmFtcy5hYmksXG4gICAgICAgICAgICBmdW5jdGlvbk5hbWU6IHBhcmFtcy5mdW5jdGlvbk5hbWUsXG4gICAgICAgICAgICBoZWFkZXIsXG4gICAgICAgICAgICBpbnB1dDogcGFyYW1zLmlucHV0LFxuICAgICAgICAgICAga2V5UGFpcjogcGFyYW1zLmtleVBhaXIsXG4gICAgICAgIH0pO1xuICAgICAgICBtZXNzYWdlLmV4cGlyZSA9IGhlYWRlcj8uZXhwaXJlO1xuICAgICAgICByZXR1cm4ge1xuICAgICAgICAgICAgYWRkcmVzczogcGFyYW1zLmFkZHJlc3MsXG4gICAgICAgICAgICBhYmk6IHBhcmFtcy5hYmksXG4gICAgICAgICAgICBmdW5jdGlvbk5hbWU6IHBhcmFtcy5mdW5jdGlvbk5hbWUsXG4gICAgICAgICAgICBtZXNzYWdlLFxuICAgICAgICAgICAgY3JlYXRpb25UaW1lOiBEYXRlLm5vdygpLFxuICAgICAgICB9O1xuICAgIH1cblxuICAgIGFzeW5jIGNyZWF0ZVVuc2lnbmVkRGVwbG95TWVzc2FnZShcbiAgICAgICAgcGFyYW1zOiBUT05Db250cmFjdERlcGxveVBhcmFtcyxcbiAgICAgICAgcmV0cnlJbmRleD86IG51bWJlcixcbiAgICApOiBQcm9taXNlPFRPTkNvbnRyYWN0VW5zaWduZWREZXBsb3lNZXNzYWdlPiB7XG4gICAgICAgIGNvbnN0IGNvbnN0cnVjdG9ySGVhZGVyID0gdGhpcy5tYWtlRXhwaXJlSGVhZGVyKFxuICAgICAgICAgICAgcGFyYW1zLnBhY2thZ2UuYWJpLFxuICAgICAgICAgICAgcGFyYW1zLmNvbnN0cnVjdG9ySGVhZGVyLFxuICAgICAgICAgICAgcmV0cnlJbmRleCxcbiAgICAgICAgKTtcbiAgICAgICAgY29uc3QgcmVzdWx0OiB7XG4gICAgICAgICAgICBlbmNvZGVkOiBUT05Db250cmFjdFVuc2lnbmVkTWVzc2FnZSxcbiAgICAgICAgICAgIGFkZHJlc3NIZXg6IHN0cmluZyxcbiAgICAgICAgfSA9IGF3YWl0IHRoaXMucmVxdWVzdENvcmUoJ2NvbnRyYWN0cy5kZXBsb3kuZW5jb2RlX3Vuc2lnbmVkX21lc3NhZ2UnLCB7XG4gICAgICAgICAgICBhYmk6IHBhcmFtcy5wYWNrYWdlLmFiaSxcbiAgICAgICAgICAgIGNvbnN0cnVjdG9ySGVhZGVyLFxuICAgICAgICAgICAgY29uc3RydWN0b3JQYXJhbXM6IHBhcmFtcy5jb25zdHJ1Y3RvclBhcmFtcyxcbiAgICAgICAgICAgIGluaXRQYXJhbXM6IHBhcmFtcy5pbml0UGFyYW1zLFxuICAgICAgICAgICAgaW1hZ2VCYXNlNjQ6IHBhcmFtcy5wYWNrYWdlLmltYWdlQmFzZTY0LFxuICAgICAgICAgICAgcHVibGljS2V5SGV4OiBwYXJhbXMua2V5UGFpci5wdWJsaWMsXG4gICAgICAgICAgICB3b3JrY2hhaW5JZDogcGFyYW1zLndvcmtjaGFpbklkLFxuICAgICAgICB9KTtcbiAgICAgICAgcmV0dXJuIHtcbiAgICAgICAgICAgIGFkZHJlc3M6IHJlc3VsdC5hZGRyZXNzSGV4LFxuICAgICAgICAgICAgc2lnblBhcmFtczoge1xuICAgICAgICAgICAgICAgIC4uLnJlc3VsdC5lbmNvZGVkLFxuICAgICAgICAgICAgICAgIGFiaTogcGFyYW1zLnBhY2thZ2UuYWJpLFxuICAgICAgICAgICAgICAgIGV4cGlyZTogY29uc3RydWN0b3JIZWFkZXI/LmV4cGlyZSxcbiAgICAgICAgICAgIH0sXG4gICAgICAgIH07XG4gICAgfVxuXG5cbiAgICBhc3luYyBjcmVhdGVVbnNpZ25lZFJ1bk1lc3NhZ2UoXG4gICAgICAgIHBhcmFtczogVE9OQ29udHJhY3RSdW5QYXJhbXMsXG4gICAgICAgIHJldHJ5SW5kZXg/OiBudW1iZXIsXG4gICAgKTogUHJvbWlzZTxUT05Db250cmFjdFVuc2lnbmVkUnVuTWVzc2FnZT4ge1xuICAgICAgICBjb25zdCBoZWFkZXIgPSB0aGlzLm1ha2VFeHBpcmVIZWFkZXIoXG4gICAgICAgICAgICBwYXJhbXMuYWJpLFxuICAgICAgICAgICAgcGFyYW1zLmhlYWRlcixcbiAgICAgICAgICAgIHJldHJ5SW5kZXgsXG4gICAgICAgICk7XG4gICAgICAgIGNvbnN0IHNpZ25QYXJhbXMgPSBhd2FpdCB0aGlzLnJlcXVlc3RDb3JlKCdjb250cmFjdHMucnVuLmVuY29kZV91bnNpZ25lZF9tZXNzYWdlJywge1xuICAgICAgICAgICAgYWRkcmVzczogcGFyYW1zLmFkZHJlc3MsXG4gICAgICAgICAgICBhYmk6IHBhcmFtcy5hYmksXG4gICAgICAgICAgICBmdW5jdGlvbk5hbWU6IHBhcmFtcy5mdW5jdGlvbk5hbWUsXG4gICAgICAgICAgICBoZWFkZXIsXG4gICAgICAgICAgICBpbnB1dDogcGFyYW1zLmlucHV0LFxuICAgICAgICB9KTtcbiAgICAgICAgcmV0dXJuIHtcbiAgICAgICAgICAgIGFkZHJlc3M6IHBhcmFtcy5hZGRyZXNzLFxuICAgICAgICAgICAgZnVuY3Rpb25OYW1lOiBwYXJhbXMuZnVuY3Rpb25OYW1lLFxuICAgICAgICAgICAgc2lnblBhcmFtczoge1xuICAgICAgICAgICAgICAgIC4uLnNpZ25QYXJhbXMsXG4gICAgICAgICAgICAgICAgYWJpOiBwYXJhbXMuYWJpLFxuICAgICAgICAgICAgICAgIGV4cGlyZTogaGVhZGVyPy5leHBpcmUsXG4gICAgICAgICAgICB9LFxuICAgICAgICB9O1xuICAgIH1cblxuXG4gICAgYXN5bmMgY3JlYXRlU2lnbmVkTWVzc2FnZShcbiAgICAgICAgcGFyYW1zOiBUT05Db250cmFjdENyZWF0ZVNpZ25lZE1lc3NhZ2VQYXJhbXMsXG4gICAgKTogUHJvbWlzZTxUT05Db250cmFjdE1lc3NhZ2U+IHtcbiAgICAgICAgcmV0dXJuIHRoaXMucmVxdWVzdENvcmUoJ2NvbnRyYWN0cy5lbmNvZGVfbWVzc2FnZV93aXRoX3NpZ24nLCBwYXJhbXMpO1xuICAgIH1cblxuXG4gICAgYXN5bmMgY3JlYXRlU2lnbmVkRGVwbG95TWVzc2FnZShcbiAgICAgICAgcGFyYW1zOiBUT05Db250cmFjdENyZWF0ZVNpZ25lZERlcGxveU1lc3NhZ2VQYXJhbXMsXG4gICAgKTogUHJvbWlzZTxUT05Db250cmFjdERlcGxveU1lc3NhZ2U+IHtcbiAgICAgICAgY29uc3QgbWVzc2FnZSA9IGF3YWl0IHRoaXMuY3JlYXRlU2lnbmVkTWVzc2FnZSh7XG4gICAgICAgICAgICBhYmk6IHBhcmFtcy51bnNpZ25lZE1lc3NhZ2Uuc2lnblBhcmFtcy5hYmksXG4gICAgICAgICAgICB1bnNpZ25lZEJ5dGVzQmFzZTY0OiBwYXJhbXMudW5zaWduZWRNZXNzYWdlLnNpZ25QYXJhbXMudW5zaWduZWRCeXRlc0Jhc2U2NCxcbiAgICAgICAgICAgIHNpZ25CeXRlc0Jhc2U2NDogcGFyYW1zLnNpZ25CeXRlc0Jhc2U2NCxcbiAgICAgICAgICAgIHB1YmxpY0tleUhleDogcGFyYW1zLnB1YmxpY0tleUhleCxcbiAgICAgICAgfSk7XG4gICAgICAgIG1lc3NhZ2UuZXhwaXJlID0gcGFyYW1zLnVuc2lnbmVkTWVzc2FnZS5zaWduUGFyYW1zLmV4cGlyZTtcbiAgICAgICAgcmV0dXJuIHtcbiAgICAgICAgICAgIGFkZHJlc3M6IHBhcmFtcy51bnNpZ25lZE1lc3NhZ2UuYWRkcmVzcyxcbiAgICAgICAgICAgIG1lc3NhZ2UsXG4gICAgICAgICAgICBjcmVhdGlvblRpbWU6IERhdGUubm93KCksXG4gICAgICAgIH07XG4gICAgfVxuXG5cbiAgICBhc3luYyBjcmVhdGVTaWduZWRSdW5NZXNzYWdlKFxuICAgICAgICBwYXJhbXM6IFRPTkNvbnRyYWN0Q3JlYXRlU2lnbmVkUnVuTWVzc2FnZVBhcmFtcyxcbiAgICApOiBQcm9taXNlPFRPTkNvbnRyYWN0UnVuTWVzc2FnZT4ge1xuICAgICAgICBjb25zdCBtZXNzYWdlID0gYXdhaXQgdGhpcy5jcmVhdGVTaWduZWRNZXNzYWdlKHtcbiAgICAgICAgICAgIGFiaTogcGFyYW1zLnVuc2lnbmVkTWVzc2FnZS5zaWduUGFyYW1zLmFiaSxcbiAgICAgICAgICAgIHVuc2lnbmVkQnl0ZXNCYXNlNjQ6IHBhcmFtcy51bnNpZ25lZE1lc3NhZ2Uuc2lnblBhcmFtcy51bnNpZ25lZEJ5dGVzQmFzZTY0LFxuICAgICAgICAgICAgc2lnbkJ5dGVzQmFzZTY0OiBwYXJhbXMuc2lnbkJ5dGVzQmFzZTY0LFxuICAgICAgICAgICAgcHVibGljS2V5SGV4OiBwYXJhbXMucHVibGljS2V5SGV4LFxuICAgICAgICB9KTtcbiAgICAgICAgbWVzc2FnZS5leHBpcmUgPSBwYXJhbXMudW5zaWduZWRNZXNzYWdlLnNpZ25QYXJhbXMuZXhwaXJlO1xuICAgICAgICByZXR1cm4ge1xuICAgICAgICAgICAgYWRkcmVzczogcGFyYW1zLnVuc2lnbmVkTWVzc2FnZS5hZGRyZXNzLFxuICAgICAgICAgICAgYWJpOiBwYXJhbXMudW5zaWduZWRNZXNzYWdlLnNpZ25QYXJhbXMuYWJpLFxuICAgICAgICAgICAgZnVuY3Rpb25OYW1lOiBwYXJhbXMudW5zaWduZWRNZXNzYWdlLmZ1bmN0aW9uTmFtZSxcbiAgICAgICAgICAgIG1lc3NhZ2UsXG4gICAgICAgICAgICBjcmVhdGlvblRpbWU6IERhdGUubm93KCksXG4gICAgICAgIH07XG4gICAgfVxuXG4gICAgYXN5bmMgZ2V0Q29kZUZyb21JbWFnZShcbiAgICAgICAgcGFyYW1zOiBUT05Db250cmFjdEdldENvZGVGcm9tSW1hZ2VQYXJhbXMsXG4gICAgKTogUHJvbWlzZTxUT05Db250cmFjdEdldENvZGVGcm9tSW1hZ2VSZXN1bHQ+IHtcbiAgICAgICAgcmV0dXJuIHRoaXMucmVxdWVzdENvcmUoJ2NvbnRyYWN0cy5pbWFnZS5jb2RlJywgcGFyYW1zKTtcbiAgICB9XG5cbiAgICBhc3luYyBnZXREZXBsb3lEYXRhKFxuICAgICAgICBwYXJhbXM6IFRPTkNvbnRyYWN0R2V0RGVwbG95RGF0YVBhcmFtcyxcbiAgICApOiBQcm9taXNlPFRPTkNvbnRyYWN0R2V0RGVwbG95RGF0YVJlc3VsdD4ge1xuICAgICAgICByZXR1cm4gdGhpcy5yZXF1ZXN0Q29yZSgnY29udHJhY3RzLmRlcGxveS5kYXRhJywgcGFyYW1zKTtcbiAgICB9XG5cbiAgICBhc3luYyBjcmVhdGVSdW5Cb2R5KFxuICAgICAgICBwYXJhbXM6IFRPTkNvbnRyYWN0Q3JlYXRlUnVuQm9keVBhcmFtcyxcbiAgICApOiBQcm9taXNlPFRPTkNvbnRyYWN0Q3JlYXRlUnVuQm9keVJlc3VsdD4ge1xuICAgICAgICByZXR1cm4gdGhpcy5yZXF1ZXN0Q29yZSgnY29udHJhY3RzLnJ1bi5ib2R5JywgcGFyYW1zKTtcbiAgICB9XG5cbiAgICBhc3luYyBnZXRGdW5jdGlvbklkKFxuICAgICAgICBwYXJhbXM6IFRPTkNvbnRyYWN0R2V0RnVuY3Rpb25JZFBhcmFtcyxcbiAgICApOiBQcm9taXNlPFRPTkNvbnRyYWN0R2V0RnVuY3Rpb25JZFJlc3VsdD4ge1xuICAgICAgICByZXR1cm4gdGhpcy5yZXF1ZXN0Q29yZSgnY29udHJhY3RzLmZ1bmN0aW9uLmlkJywgcGFyYW1zKTtcbiAgICB9XG5cbiAgICBhc3luYyBnZXRCb2NIYXNoKFxuICAgICAgICBwYXJhbXM6IFRPTkNvbnRyYWN0Qm9jLFxuICAgICk6IFByb21pc2U8VE9OQ29udHJhY3RHZXRCb2NIYXNoUmVzdWx0PiB7XG4gICAgICAgIHJldHVybiB0aGlzLnJlcXVlc3RDb3JlKCdjb250cmFjdHMuYm9jLmhhc2gnLCBwYXJhbXMpO1xuICAgIH1cblxuICAgIGFzeW5jIHBhcnNlTWVzc2FnZShcbiAgICAgICAgcGFyYW1zOiBUT05Db250cmFjdEJvYyxcbiAgICApOiBQcm9taXNlPFFNZXNzYWdlPiB7XG4gICAgICAgIHJldHVybiB0aGlzLnJlcXVlc3RDb3JlKCdjb250cmFjdHMucGFyc2UubWVzc2FnZScsIHBhcmFtcyk7XG4gICAgfVxuXG4gICAgLy8gTWVzc2FnZSBwYXJzaW5nXG5cbiAgICBhc3luYyBkZWNvZGVSdW5PdXRwdXQoXG4gICAgICAgIHBhcmFtczogVE9OQ29udHJhY3REZWNvZGVSdW5PdXRwdXRQYXJhbXMsXG4gICAgKTogUHJvbWlzZTxUT05Db250cmFjdFJ1blJlc3VsdD4ge1xuICAgICAgICByZXR1cm4gdGhpcy5yZXF1ZXN0Q29yZSgnY29udHJhY3RzLnJ1bi5vdXRwdXQnLCBwYXJhbXMpO1xuICAgIH1cblxuXG4gICAgYXN5bmMgZGVjb2RlSW5wdXRNZXNzYWdlQm9keShcbiAgICAgICAgcGFyYW1zOiBUT05Db250cmFjdERlY29kZU1lc3NhZ2VCb2R5UGFyYW1zLFxuICAgICk6IFByb21pc2U8VE9OQ29udHJhY3REZWNvZGVNZXNzYWdlQm9keVJlc3VsdD4ge1xuICAgICAgICByZXR1cm4gdGhpcy5yZXF1ZXN0Q29yZSgnY29udHJhY3RzLnJ1bi51bmtub3duLmlucHV0JywgcGFyYW1zKTtcbiAgICB9XG5cblxuICAgIGFzeW5jIGRlY29kZU91dHB1dE1lc3NhZ2VCb2R5KFxuICAgICAgICBwYXJhbXM6IFRPTkNvbnRyYWN0RGVjb2RlTWVzc2FnZUJvZHlQYXJhbXMsXG4gICAgKTogUHJvbWlzZTxUT05Db250cmFjdERlY29kZU1lc3NhZ2VCb2R5UmVzdWx0PiB7XG4gICAgICAgIHJldHVybiB0aGlzLnJlcXVlc3RDb3JlKCdjb250cmFjdHMucnVuLnVua25vd24ub3V0cHV0JywgcGFyYW1zKTtcbiAgICB9XG5cbiAgICAvLyBNZXNzYWdlIHByb2Nlc3NpbmdcblxuICAgIGFzeW5jIGdldE1lc3NhZ2VJZChtZXNzYWdlOiBUT05Db250cmFjdE1lc3NhZ2UpOiBQcm9taXNlPHN0cmluZz4ge1xuICAgICAgICByZXR1cm4gbWVzc2FnZS5tZXNzYWdlSWQgfHwgKGF3YWl0IHRoaXMuZ2V0Qm9jSGFzaCh7XG4gICAgICAgICAgICBib2NCYXNlNjQ6IG1lc3NhZ2UubWVzc2FnZUJvZHlCYXNlNjQsXG4gICAgICAgIH0pKS5oYXNoO1xuICAgIH1cblxuICAgIGFzeW5jIHNlbmRNZXNzYWdlKFxuICAgICAgICBwYXJhbXM6IFRPTkNvbnRyYWN0TWVzc2FnZSxcbiAgICAgICAgcGFyZW50U3Bhbj86IChTcGFuIHwgU3BhbkNvbnRleHQpLFxuICAgICk6IFByb21pc2U8c3RyaW5nPiB7XG4gICAgICAgIGNvbnN0IGV4cGlyZSA9IHBhcmFtcy5leHBpcmU7XG4gICAgICAgIGlmIChleHBpcmUgJiYgKERhdGUubm93KCkgPiBleHBpcmUgKiAxMDAwKSkge1xuICAgICAgICAgICAgdGhyb3cgVE9OQ2xpZW50RXJyb3Iuc2VuZE5vZGVSZXF1ZXN0RmFpbGVkKCdNZXNzYWdlIGFscmVhZHkgZXhwaXJlZCcpO1xuICAgICAgICB9XG4gICAgICAgIGNvbnN0IHNlcnZlclRpbWVEZWx0YSA9IE1hdGguYWJzKGF3YWl0IHRoaXMucXVlcmllcy5zZXJ2ZXJUaW1lRGVsdGEocGFyZW50U3BhbikpO1xuICAgICAgICBpZiAoc2VydmVyVGltZURlbHRhID4gdGhpcy5jb25maWcub3V0T2ZTeW5jVGhyZXNob2xkKCkpIHtcbiAgICAgICAgICAgIHRoaXMucXVlcmllcy5kcm9wU2VydmVyVGltZURlbHRhKCk7XG4gICAgICAgICAgICB0aHJvdyBUT05DbGllbnRFcnJvci5jbG9ja091dE9mU3luYygpO1xuICAgICAgICB9XG4gICAgICAgIGNvbnN0IGlkID0gYXdhaXQgdGhpcy5nZXRNZXNzYWdlSWQocGFyYW1zKTtcbiAgICAgICAgY29uc3QgaWRCYXNlNjQgPSBCdWZmZXIuZnJvbShpZCwgJ2hleCcpXG4gICAgICAgICAgICAudG9TdHJpbmcoJ2Jhc2U2NCcpO1xuICAgICAgICBhd2FpdCB0aGlzLnF1ZXJpZXMucG9zdFJlcXVlc3RzKFtcbiAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICBpZDogaWRCYXNlNjQsXG4gICAgICAgICAgICAgICAgYm9keTogcGFyYW1zLm1lc3NhZ2VCb2R5QmFzZTY0LFxuICAgICAgICAgICAgfSxcbiAgICAgICAgXSwgcGFyZW50U3Bhbik7XG4gICAgICAgIHRoaXMuY29uZmlnLmxvZygnc2VuZE1lc3NhZ2UuIFJlcXVlc3QgcG9zdGVkJywgaWQpO1xuICAgICAgICByZXR1cm4gaWQ7XG4gICAgfVxuXG4gICAgYXN5bmMgcHJvY2Vzc01lc3NhZ2UoXG4gICAgICAgIG1lc3NhZ2U6IFRPTkNvbnRyYWN0TWVzc2FnZSxcbiAgICAgICAgcmVzdWx0RmllbGRzOiBzdHJpbmcsXG4gICAgICAgIHBhcmVudFNwYW4/OiAoU3BhbiB8IFNwYW5Db250ZXh0KSxcbiAgICAgICAgcmV0cnlJbmRleD86IG51bWJlcixcbiAgICAgICAgYWRkcmVzcz86IHN0cmluZyxcbiAgICAgICAgYWJpPzogVE9OQ29udHJhY3RBQkksXG4gICAgICAgIGZ1bmN0aW9uTmFtZT86IHN0cmluZyxcbiAgICAgICAgbWVzc2FnZUNyZWF0aW9uVGltZT86IG51bWJlcixcbiAgICApOiBQcm9taXNlPFFUcmFuc2FjdGlvbj4ge1xuICAgICAgICBhd2FpdCB0aGlzLnNlbmRNZXNzYWdlKG1lc3NhZ2UsIHBhcmVudFNwYW4pO1xuICAgICAgICByZXR1cm4gdGhpcy53YWl0Rm9yVHJhbnNhY3Rpb24oXG4gICAgICAgICAgICBhZGRyZXNzIHx8ICcnLFxuICAgICAgICAgICAgbWVzc2FnZSxcbiAgICAgICAgICAgIHJlc3VsdEZpZWxkcyxcbiAgICAgICAgICAgIHBhcmVudFNwYW4sXG4gICAgICAgICAgICByZXRyeUluZGV4LFxuICAgICAgICAgICAgbWVzc2FnZUNyZWF0aW9uVGltZSxcbiAgICAgICAgICAgIGFiaSxcbiAgICAgICAgICAgIGZ1bmN0aW9uTmFtZSxcbiAgICAgICAgKTtcbiAgICB9XG5cblxuICAgIGFzeW5jIHdhaXRGb3JUcmFuc2FjdGlvbihcbiAgICAgICAgYWRkcmVzczogc3RyaW5nLFxuICAgICAgICBtZXNzYWdlOiBUT05Db250cmFjdE1lc3NhZ2UsXG4gICAgICAgIHJlc3VsdEZpZWxkczogc3RyaW5nLFxuICAgICAgICBwYXJlbnRTcGFuPzogKFNwYW4gfCBTcGFuQ29udGV4dCksXG4gICAgICAgIHJldHJ5SW5kZXg/OiBudW1iZXIsXG4gICAgICAgIG1lc3NhZ2VDcmVhdGlvblRpbWU/OiBudW1iZXIsXG4gICAgICAgIGFiaT86IFRPTkNvbnRyYWN0QUJJLFxuICAgICAgICBmdW5jdGlvbk5hbWU/OiBzdHJpbmcsXG4gICAgKTogUHJvbWlzZTxRVHJhbnNhY3Rpb24+IHtcbiAgICAgICAgY29uc3QgbWVzc2FnZUlkID0gYXdhaXQgdGhpcy5nZXRNZXNzYWdlSWQobWVzc2FnZSk7XG4gICAgICAgIGNvbnN0IGNvbmZpZyA9IHRoaXMuY29uZmlnO1xuICAgICAgICBsZXQgcHJvY2Vzc2luZ1RpbWVvdXQgPSBjb25maWcubWVzc2FnZVByb2Nlc3NpbmdUaW1lb3V0KHJldHJ5SW5kZXgpO1xuICAgICAgICBjb25zdCBwcm9taXNlcyA9IFtdO1xuICAgICAgICBjb25zdCBzZXJ2ZXJJbmZvID0gYXdhaXQgdGhpcy5xdWVyaWVzLmdldFNlcnZlckluZm8ocGFyZW50U3Bhbik7XG4gICAgICAgIGNvbnN0IG9wZXJhdGlvbklkID0gc2VydmVySW5mby5zdXBwb3J0c09wZXJhdGlvbklkXG4gICAgICAgICAgICA/IHRoaXMucXVlcmllcy5nZW5lcmF0ZU9wZXJhdGlvbklkKClcbiAgICAgICAgICAgIDogdW5kZWZpbmVkO1xuICAgICAgICBsZXQgdHJhbnNhY3Rpb246ID9RVHJhbnNhY3Rpb24gPSBudWxsO1xuICAgICAgICBsZXQgc2VuZFRpbWUgPSBNYXRoLnJvdW5kKERhdGUubm93KCkgLyAxMDAwKTtcbiAgICAgICAgbGV0IGJsb2NrVGltZSA9IG51bGw7XG4gICAgICAgIHRyeSB7XG4gICAgICAgICAgICBjb25zdCBleHBpcmUgPSBtZXNzYWdlLmV4cGlyZTtcbiAgICAgICAgICAgIGlmIChleHBpcmUpIHtcbiAgICAgICAgICAgICAgICAvLyBjYWxjdWxhdGUgdGltZW91dCBhY2NvcmRpbmcgdG8gYGV4cGlyZWAgdmFsdWUgKGluIHNlY29uZHMpXG4gICAgICAgICAgICAgICAgLy8gYWRkIHByb2Nlc3NpbmcgdGltZW91dCBhcyBtYXN0ZXIgYmxvY2sgdmFsaWRhdGlvbiB0aW1lXG4gICAgICAgICAgICAgICAgbGV0IGJsb2NrVGltZW91dCA9IGV4cGlyZSAqIDEwMDAgLSBEYXRlLm5vdygpICsgcHJvY2Vzc2luZ1RpbWVvdXQ7XG4gICAgICAgICAgICAgICAgLy8gdHJhbnNhY3Rpb24gdGltZW91dCBtdXN0IGJlIGdyZWF0ZXIgdGhlbiBibG9jayB0aW1lb3V0XG4gICAgICAgICAgICAgICAgcHJvY2Vzc2luZ1RpbWVvdXQgPSBibG9ja1RpbWVvdXQgKyAxMDAwMDtcblxuXG4gICAgICAgICAgICAgICAgY29uc3Qgd2FpdEV4cGlyZWQgPSBhc3luYyAoKSA9PiB7XG4gICAgICAgICAgICAgICAgICAgIC8vIHdhaXQgZm9yIGJsb2NrLCBwcm9kdWNlZCBhZnRlciBgZXhwaXJlYCB0byBndWFyYW50ZWUgdGhhdCBtZXNzYWdlIGlzIHJlamVjdGVkXG4gICAgICAgICAgICAgICAgICAgIGxldCBibG9jazogP1FCbG9jayA9IG51bGw7XG4gICAgICAgICAgICAgICAgICAgIHRyeSB7XG4gICAgICAgICAgICAgICAgICAgICAgICBibG9jayA9IGF3YWl0IHRoaXMucXVlcmllcy5ibG9ja3Mud2FpdEZvcih7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgZmlsdGVyOiB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIG1hc3RlcjogeyBtaW5fc2hhcmRfZ2VuX3V0aW1lOiB7IGdlOiBleHBpcmUgfSB9LFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgcmVzdWx0OiAnaWQgZ2VuX3V0aW1lIGluX21zZ19kZXNjciB7IHRyYW5zYWN0aW9uX2lkIH0nLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRpbWVvdXQ6IGJsb2NrVGltZW91dCxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBwYXJlbnRTcGFuLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIG9wZXJhdGlvbklkLFxuICAgICAgICAgICAgICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgY2F0Y2goZXJyb3IpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIGlmKFRPTkNsaWVudEVycm9yLmlzV2FpdGZvclRpbWVvdXQoZXJyb3IpKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgdGhyb3cgVE9OQ2xpZW50RXJyb3IubmV0d29ya1NpbGVudChcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgbWVzc2FnZUlkLCBzZW5kVGltZSwgZXhwaXJlLCBibG9ja1RpbWVvdXQpO1xuICAgICAgICAgICAgICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB0aHJvdyBlcnJvcjtcbiAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICAgICAgICAgIGlmICh0cmFuc2FjdGlvbikge1xuICAgICAgICAgICAgICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICAgICAgICAgICAgICB9XG5cbiAgICAgICAgICAgICAgICAgICAgY29uc3QgdHJhbnNhY3Rpb25faWQgPSBibG9jay5pbl9tc2dfZGVzY3JcbiAgICAgICAgICAgICAgICAgICAgICAgICYmIGJsb2NrLmluX21zZ19kZXNjci5maW5kKG1zZyA9PiAhIW1zZy50cmFuc2FjdGlvbl9pZCk/LnRyYW5zYWN0aW9uX2lkO1xuXG4gICAgICAgICAgICAgICAgICAgIGlmICghdHJhbnNhY3Rpb25faWQpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIHRocm93IFRPTkNsaWVudEVycm9yLmludGVybmFsRXJyb3IoXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgJ0ludmFsaWQgYmxvY2sgcmVjZWl2ZWQ6IG5vIHRyYW5zYWN0aW9uIElEJyxcbiAgICAgICAgICAgICAgICAgICAgICAgICk7XG4gICAgICAgICAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgICAgICAgICAvLyBjaGVjayB0aGF0IHRyYW5zYWN0aW9ucyBjb2xsZWN0aW9uIGlzIHVwZGF0ZWRcbiAgICAgICAgICAgICAgICAgICAgdHJ5IHtcbiAgICAgICAgICAgICAgICAgICAgICAgYXdhaXQgdGhpcy5xdWVyaWVzLnRyYW5zYWN0aW9ucy53YWl0Rm9yKHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBmaWx0ZXI6IHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgaWQ6IHsgZXE6IHRyYW5zYWN0aW9uX2lkIH0sXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICByZXN1bHQ6ICdpZCcsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgdGltZW91dDogNTAwMCxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBwYXJlbnRTcGFuLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIG9wZXJhdGlvbklkLFxuICAgICAgICAgICAgICAgICAgICAgICAgfSk7IFxuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgIGNhdGNoKGVycm9yKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICBpZihUT05DbGllbnRFcnJvci5pc1dhaXRmb3JUaW1lb3V0KGVycm9yKSkge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRocm93IFRPTkNsaWVudEVycm9yLnRyYW5zYWN0aW9uTGFnKFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBtZXNzYWdlSWQsIGJsb2NrLmlkLCB0cmFuc2FjdGlvbl9pZCwgNTAwMCk7XG4gICAgICAgICAgICAgICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRocm93IGVycm9yO1xuICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgIGJsb2NrVGltZSA9IGJsb2NrLmdlbl91dGltZTtcbiAgICAgICAgICAgICAgICB9O1xuXG4gICAgICAgICAgICAgICAgcHJvbWlzZXMucHVzaCh3YWl0RXhwaXJlZCgpKTtcbiAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgLy8gd2FpdCBmb3IgbWVzc2FnZSBwcm9jZXNzaW5nIHRyYW5zYWN0aW9uXG4gICAgICAgICAgICBwcm9taXNlcy5wdXNoKG5ldyBQcm9taXNlKChyZXNvbHZlLCByZWplY3QpID0+IHtcbiAgICAgICAgICAgICAgICAoYXN5bmMgKCkgPT4ge1xuICAgICAgICAgICAgICAgICAgICB0cnkge1xuICAgICAgICAgICAgICAgICAgICAgICAgdHJhbnNhY3Rpb24gPSBhd2FpdCB0aGlzLnF1ZXJpZXMudHJhbnNhY3Rpb25zLndhaXRGb3Ioe1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGZpbHRlcjoge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBpbl9tc2c6IHsgZXE6IG1lc3NhZ2VJZCB9LFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBzdGF0dXM6IHsgZXE6IFFUcmFuc2FjdGlvblByb2Nlc3NpbmdTdGF0dXMuZmluYWxpemVkIH0sXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICByZXN1bHQ6IHJlc3VsdEZpZWxkcyxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB0aW1lb3V0OiBwcm9jZXNzaW5nVGltZW91dCxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBvcGVyYXRpb25JZCxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBwYXJlbnRTcGFuLFxuICAgICAgICAgICAgICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICAgICAgICAgICAgICByZXNvbHZlKCk7XG4gICAgICAgICAgICAgICAgICAgIH0gY2F0Y2ggKGVycm9yKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICBpZihUT05DbGllbnRFcnJvci5pc1dhaXRmb3JUaW1lb3V0KGVycm9yKSkge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHJlamVjdChUT05DbGllbnRFcnJvci50cmFuc2FjdGlvbldhaXRUaW1lb3V0KFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBtZXNzYWdlSWQsIHNlbmRUaW1lLCBwcm9jZXNzaW5nVGltZW91dCkpO1xuICAgICAgICAgICAgICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICByZWplY3QoZXJyb3IpO1xuICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgfSkoKTtcbiAgICAgICAgICAgIH0pKTtcblxuICAgICAgICAgICAgdHJ5IHtcbiAgICAgICAgICAgICAgICBhd2FpdCBQcm9taXNlLnJhY2UocHJvbWlzZXMpO1xuICAgICAgICAgICAgfSBmaW5hbGx5IHtcbiAgICAgICAgICAgICAgICBpZiAocHJvbWlzZXMubGVuZ3RoID4gMSAmJiBvcGVyYXRpb25JZCkge1xuICAgICAgICAgICAgICAgICAgICBhd2FpdCB0aGlzLnF1ZXJpZXMuZmluaXNoT3BlcmF0aW9ucyhbb3BlcmF0aW9uSWRdKTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICAgIGlmICghdHJhbnNhY3Rpb24pIHtcbiAgICAgICAgICAgICAgICB0aHJvdyBUT05DbGllbnRFcnJvci5tZXNzYWdlRXhwaXJlZChtZXNzYWdlSWQsIHNlbmRUaW1lLCBleHBpcmUsIGJsb2NrVGltZSk7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBjb25zdCB0cmFuc2FjdGlvbk5vdyA9IHRyYW5zYWN0aW9uLm5vdyB8fCAwO1xuICAgICAgICAgICAgdGhpcy5jb25maWcubG9nKCd3YWl0Rm9yVHJhbnNhY3Rpb24uIHRyYW5zYWN0aW9uIHJlY2VpdmVkJywge1xuICAgICAgICAgICAgICAgIGlkOiB0cmFuc2FjdGlvbi5pZCxcbiAgICAgICAgICAgICAgICBibG9ja19pZDogdHJhbnNhY3Rpb24uYmxvY2tfaWQsXG4gICAgICAgICAgICAgICAgbm93OiBgJHtuZXcgRGF0ZSh0cmFuc2FjdGlvbk5vdyAqIDEwMDApLnRvSVNPU3RyaW5nKCl9ICgke3RyYW5zYWN0aW9uTm93fSlgLFxuICAgICAgICAgICAgfSk7XG4gICAgICAgIH0gY2F0Y2ggKGVycm9yKSB7XG4gICAgICAgICAgICB0aGlzLmNvbmZpZy5sb2coJ3dhaXRGb3JUcmFuc2FjdGlvbi4gRXJyb3IgcmVjaWV2ZWQnLCBlcnJvcik7XG4gICAgICAgICAgICBpZiAoVE9OQ2xpZW50RXJyb3IuaXNNZXNzYWdlRXhwaXJlZChlcnJvcikgfHwgXG4gICAgICAgICAgICAgICAgVE9OQ2xpZW50RXJyb3IuaXNDbGllbnRFcnJvcihlcnJvciwgVE9OQ2xpZW50RXJyb3IuY29kZS5UUkFOU0FDVElPTl9XQUlUX1RJTUVPVVQpKVxuICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgIHRocm93IGF3YWl0IHRoaXMucmVzb2x2ZURldGFpbGVkRXJyb3IoXG4gICAgICAgICAgICAgICAgICAgIGVycm9yLFxuICAgICAgICAgICAgICAgICAgICBtZXNzYWdlLm1lc3NhZ2VCb2R5QmFzZTY0LFxuICAgICAgICAgICAgICAgICAgICBtZXNzYWdlQ3JlYXRpb25UaW1lIHx8IERhdGUubm93KCksXG4gICAgICAgICAgICAgICAgICAgIGFkZHJlc3MsXG4gICAgICAgICAgICAgICAgKTtcbiAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgICAgdGhyb3cgZXJyb3JcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgICByZW1vdmVUeXBlTmFtZSh0cmFuc2FjdGlvbik7XG4gICAgICAgIGF3YWl0IHRoaXMuY2hlY2tUcmFuc2FjdGlvbihhZGRyZXNzLCB0cmFuc2FjdGlvbiwgYWJpLCBmdW5jdGlvbk5hbWUpO1xuICAgICAgICByZXR1cm4gdHJhbnNhY3Rpb247XG4gICAgfVxuXG4gICAgYXN5bmMgY2hlY2tUcmFuc2FjdGlvbihcbiAgICAgICAgYWRkcmVzczogc3RyaW5nLFxuICAgICAgICB0cmFuc2FjdGlvbjogUVRyYW5zYWN0aW9uLFxuICAgICAgICBhYmk/OiBUT05Db250cmFjdEFCSSxcbiAgICAgICAgZnVuY3Rpb25OYW1lPzogc3RyaW5nLFxuICAgICkge1xuICAgICAgICB0cnkge1xuICAgICAgICAgICAgYXdhaXQgdGhpcy5yZXF1ZXN0Q29yZSgnY29udHJhY3RzLnByb2Nlc3MudHJhbnNhY3Rpb24nLCB7XG4gICAgICAgICAgICAgICAgdHJhbnNhY3Rpb24sXG4gICAgICAgICAgICAgICAgYWJpOiBhYmkgfHwgbnVsbCxcbiAgICAgICAgICAgICAgICBmdW5jdGlvbk5hbWU6IGZ1bmN0aW9uTmFtZSB8fCBudWxsLFxuICAgICAgICAgICAgICAgIGFkZHJlc3MsXG4gICAgICAgICAgICB9KTtcbiAgICAgICAgfSBjYXRjaCAoZXJyb3IpIHtcbiAgICAgICAgICAgIGNvbnN0IGFjY291bnRzID0gYXdhaXQgdGhpcy5xdWVyaWVzLmFjY291bnRzLnF1ZXJ5KHtcbiAgICAgICAgICAgICAgICBmaWx0ZXI6IHsgaWQ6IHsgZXE6IGFkZHJlc3MgfSB9LFxuICAgICAgICAgICAgICAgIHJlc3VsdDogJ2FjY190eXBlIGJhbGFuY2UnLFxuICAgICAgICAgICAgICAgIHRpbWVvdXQ6IDEwMDAsXG4gICAgICAgICAgICB9KTtcbiAgICAgICAgICAgIGlmIChhY2NvdW50cy5sZW5ndGggPT09IDApIHtcbiAgICAgICAgICAgICAgICB0aHJvdyBUT05DbGllbnRFcnJvci5hY2NvdW50TWlzc2luZyhhZGRyZXNzKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGlmIChUT05DbGllbnRFcnJvci5pc0NvbnRyYWN0RXJyb3IoZXJyb3IsIFRPTkNvbnRyYWN0RXhpdENvZGUuTk9fR0FTKSkge1xuICAgICAgICAgICAgICAgIHRocm93IFRPTkNsaWVudEVycm9yLmFjY291bnRCYWxhbmNlVG9vTG93KGFkZHJlc3MsIGFjY291bnRzWzBdLmJhbGFuY2UpO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgdGhyb3cgZXJyb3I7XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICBhc3luYyByZXNvbHZlRGV0YWlsZWRFcnJvcihcbiAgICAgICAgZXJyb3I6IEVycm9yLFxuICAgICAgICBtZXNzYWdlQmFzZTY0OiBzdHJpbmcsXG4gICAgICAgIHRpbWU6IG51bWJlcixcbiAgICAgICAgYWRkcmVzczogc3RyaW5nLFxuICAgICkge1xuICAgICAgICBjb25zdCBhY2NvdW50cyA9IGF3YWl0IHRoaXMucXVlcmllcy5hY2NvdW50cy5xdWVyeSh7XG4gICAgICAgICAgICBmaWx0ZXI6IHsgaWQ6IHsgZXE6IGFkZHJlc3MgfSB9LFxuICAgICAgICAgICAgcmVzdWx0OiAnaWQgYWNjX3R5cGUgYmFsYW5jZSBiYWxhbmNlX290aGVyIHsgY3VycmVuY3kgdmFsdWUgfSBjb2RlIGRhdGEgbGFzdF9wYWlkJyxcbiAgICAgICAgICAgIHRpbWVvdXQ6IDEwMDAsXG4gICAgICAgIH0pO1xuICAgICAgICBpZiAoYWNjb3VudHMubGVuZ3RoID09PSAwKSB7XG4gICAgICAgICAgICByZXR1cm4gVE9OQ2xpZW50RXJyb3IuYWNjb3VudE1pc3NpbmcoYWRkcmVzcyk7XG4gICAgICAgIH1cbiAgICAgICAgY29uc3QgYWNjb3VudCA9IGFjY291bnRzWzBdO1xuICAgICAgICByZW1vdmVUeXBlTmFtZShhY2NvdW50KTtcbiAgICAgICAgdHJ5IHtcbiAgICAgICAgICAgIGF3YWl0IHRoaXMucmVxdWVzdENvcmUoJ2NvbnRyYWN0cy5yZXNvbHZlLmVycm9yJywge1xuICAgICAgICAgICAgICAgIGFkZHJlc3MsXG4gICAgICAgICAgICAgICAgYWNjb3VudCxcbiAgICAgICAgICAgICAgICBtZXNzYWdlQmFzZTY0LFxuICAgICAgICAgICAgICAgIHRpbWU6IE1hdGgucm91bmQodGltZSAvIDEwMDApLFxuICAgICAgICAgICAgICAgIG1haW5FcnJvcjogZXJyb3IsXG4gICAgICAgICAgICB9KTtcbiAgICAgICAgfSBjYXRjaCAocmVzb2x2ZWQpIHtcbiAgICAgICAgICAgIHJldHVybiByZXNvbHZlZDtcbiAgICAgICAgfVxuICAgICAgICByZXR1cm4gZXJyb3I7XG4gICAgfVxuXG4gICAgYXN5bmMgaXNEZXBsb3llZChhZGRyZXNzOiBzdHJpbmcsIHBhcmVudFNwYW4/OiAoU3BhbiB8IFNwYW5Db250ZXh0KSk6IFByb21pc2U8Ym9vbD4ge1xuICAgICAgICBjb25zdCBhY2NvdW50ID0gYXdhaXQgdGhpcy5xdWVyaWVzLmFjY291bnRzLnF1ZXJ5KHtcbiAgICAgICAgICAgIGZpbHRlcjoge1xuICAgICAgICAgICAgICAgIGlkOiB7IGVxOiBhZGRyZXNzIH0sXG4gICAgICAgICAgICAgICAgYWNjX3R5cGU6IHsgZXE6IFFBY2NvdW50VHlwZS5hY3RpdmUgfSxcbiAgICAgICAgICAgIH0sXG4gICAgICAgICAgICByZXN1bHQ6ICdpZCcsXG4gICAgICAgICAgICBwYXJlbnRTcGFuLFxuICAgICAgICB9KTtcbiAgICAgICAgcmV0dXJuIGFjY291bnQubGVuZ3RoID4gMDtcbiAgICB9XG5cbiAgICBhc3luYyBwcm9jZXNzRGVwbG95TWVzc2FnZShcbiAgICAgICAgcGFyYW1zOiBUT05Db250cmFjdERlcGxveU1lc3NhZ2UsXG4gICAgICAgIHBhcmVudFNwYW4/OiAoU3BhbiB8IFNwYW5Db250ZXh0KSxcbiAgICAgICAgcmV0cnlJbmRleD86IG51bWJlcixcbiAgICApOiBQcm9taXNlPFRPTkNvbnRyYWN0RGVwbG95UmVzdWx0PiB7XG4gICAgICAgIHRoaXMuY29uZmlnLmxvZygncHJvY2Vzc0RlcGxveU1lc3NhZ2UnLCBwYXJhbXMpO1xuICAgICAgICBpZiAoYXdhaXQgdGhpcy5pc0RlcGxveWVkKHBhcmFtcy5hZGRyZXNzLCBwYXJlbnRTcGFuKSkge1xuICAgICAgICAgICAgcmV0dXJuIHtcbiAgICAgICAgICAgICAgICBhZGRyZXNzOiBwYXJhbXMuYWRkcmVzcyxcbiAgICAgICAgICAgICAgICBhbHJlYWR5RGVwbG95ZWQ6IHRydWUsXG4gICAgICAgICAgICB9O1xuICAgICAgICB9XG4gICAgICAgIGF3YWl0IHRoaXMuc2VuZE1lc3NhZ2UocGFyYW1zLm1lc3NhZ2UsIHBhcmVudFNwYW4pO1xuICAgICAgICByZXR1cm4gdGhpcy53YWl0Rm9yRGVwbG95VHJhbnNhY3Rpb24oXG4gICAgICAgICAgICBwYXJhbXMsXG4gICAgICAgICAgICBwYXJlbnRTcGFuLFxuICAgICAgICAgICAgcmV0cnlJbmRleCxcbiAgICAgICAgKTtcbiAgICB9XG5cbiAgICBhc3luYyB3YWl0Rm9yRGVwbG95VHJhbnNhY3Rpb24oXG4gICAgICAgIGRlcGxveU1lc3NhZ2U6IFRPTkNvbnRyYWN0RGVwbG95TWVzc2FnZSxcbiAgICAgICAgcGFyZW50U3Bhbj86IChTcGFuIHwgU3BhbkNvbnRleHQpLFxuICAgICAgICByZXRyeUluZGV4PzogbnVtYmVyLFxuICAgICk6IFByb21pc2U8VE9OQ29udHJhY3REZXBsb3lSZXN1bHQ+IHtcbiAgICAgICAgY29uc3QgdHJhbnNhY3Rpb24gPSBhd2FpdCB0aGlzLndhaXRGb3JUcmFuc2FjdGlvbihcbiAgICAgICAgICAgIGRlcGxveU1lc3NhZ2UuYWRkcmVzcyxcbiAgICAgICAgICAgIGRlcGxveU1lc3NhZ2UubWVzc2FnZSxcbiAgICAgICAgICAgIHRyYW5zYWN0aW9uRGV0YWlscyxcbiAgICAgICAgICAgIHBhcmVudFNwYW4sXG4gICAgICAgICAgICByZXRyeUluZGV4LFxuICAgICAgICAgICAgZGVwbG95TWVzc2FnZS5jcmVhdGlvblRpbWUsXG4gICAgICAgICk7XG4gICAgICAgIHRoaXMuY29uZmlnLmxvZygncHJvY2Vzc0RlcGxveU1lc3NhZ2UuIEVuZCcpO1xuICAgICAgICByZXR1cm4ge1xuICAgICAgICAgICAgYWRkcmVzczogZGVwbG95TWVzc2FnZS5hZGRyZXNzLFxuICAgICAgICAgICAgYWxyZWFkeURlcGxveWVkOiBmYWxzZSxcbiAgICAgICAgICAgIHRyYW5zYWN0aW9uLFxuICAgICAgICB9O1xuICAgIH1cblxuXG4gICAgYXN5bmMgcHJvY2Vzc1J1bk1lc3NhZ2UoXG4gICAgICAgIHJ1bk1lc3NhZ2U6IFRPTkNvbnRyYWN0UnVuTWVzc2FnZSxcbiAgICAgICAgcGFyZW50U3Bhbj86IChTcGFuIHwgU3BhbkNvbnRleHQpLFxuICAgICAgICByZXRyeUluZGV4PzogbnVtYmVyLFxuICAgICk6IFByb21pc2U8VE9OQ29udHJhY3RSdW5SZXN1bHQ+IHtcbiAgICAgICAgdGhpcy5jb25maWcubG9nKCdwcm9jZXNzUnVuTWVzc2FnZScsIHJ1bk1lc3NhZ2UpO1xuICAgICAgICBhd2FpdCB0aGlzLnNlbmRNZXNzYWdlKHJ1bk1lc3NhZ2UubWVzc2FnZSwgcGFyZW50U3Bhbik7XG4gICAgICAgIHJldHVybiB0aGlzLndhaXRGb3JSdW5UcmFuc2FjdGlvbihydW5NZXNzYWdlLCBwYXJlbnRTcGFuLCByZXRyeUluZGV4KTtcbiAgICB9XG5cbiAgICBhc3luYyB3YWl0Rm9yUnVuVHJhbnNhY3Rpb24oXG4gICAgICAgIHJ1bk1lc3NhZ2U6IFRPTkNvbnRyYWN0UnVuTWVzc2FnZSxcbiAgICAgICAgcGFyZW50U3Bhbj86IChTcGFuIHwgU3BhbkNvbnRleHQpLFxuICAgICAgICByZXRyeUluZGV4PzogbnVtYmVyLFxuICAgICk6IFByb21pc2U8VE9OQ29udHJhY3RSdW5SZXN1bHQ+IHtcbiAgICAgICAgY29uc3QgdHJhbnNhY3Rpb24gPSBhd2FpdCB0aGlzLndhaXRGb3JUcmFuc2FjdGlvbihcbiAgICAgICAgICAgIHJ1bk1lc3NhZ2UuYWRkcmVzcyxcbiAgICAgICAgICAgIHJ1bk1lc3NhZ2UubWVzc2FnZSxcbiAgICAgICAgICAgIHRyYW5zYWN0aW9uRGV0YWlscyxcbiAgICAgICAgICAgIHBhcmVudFNwYW4sXG4gICAgICAgICAgICByZXRyeUluZGV4LFxuICAgICAgICAgICAgcnVuTWVzc2FnZS5jcmVhdGlvblRpbWUsXG4gICAgICAgICAgICBydW5NZXNzYWdlLmFiaSxcbiAgICAgICAgICAgIHJ1bk1lc3NhZ2UuZnVuY3Rpb25OYW1lLFxuICAgICAgICApO1xuICAgICAgICBjb25zdCBvdXRwdXRNZXNzYWdlcyA9IHRyYW5zYWN0aW9uLm91dF9tZXNzYWdlcztcbiAgICAgICAgaWYgKCFvdXRwdXRNZXNzYWdlcyB8fCBvdXRwdXRNZXNzYWdlcy5sZW5ndGggPT09IDApIHtcbiAgICAgICAgICAgIHJldHVybiB7XG4gICAgICAgICAgICAgICAgb3V0cHV0OiBudWxsLFxuICAgICAgICAgICAgICAgIHRyYW5zYWN0aW9uLFxuICAgICAgICAgICAgfTtcbiAgICAgICAgfVxuICAgICAgICBjb25zdCBleHRlcm5hbE1lc3NhZ2VzOiBRTWVzc2FnZVtdID0gb3V0cHV0TWVzc2FnZXMuZmlsdGVyKCh4OiBRTWVzc2FnZSkgPT4ge1xuICAgICAgICAgICAgcmV0dXJuIHgubXNnX3R5cGUgPT09IFFNZXNzYWdlVHlwZS5leHRPdXQ7XG4gICAgICAgIH0pO1xuICAgICAgICB0aGlzLmNvbmZpZy5sb2coJ3Byb2Nlc3NSdW5NZXNzYWdlLiBCZWZvcmUgbWVzc2FnZXMgcGFyc2UnKTtcbiAgICAgICAgY29uc3Qgb3V0cHV0cyA9IGF3YWl0IFByb21pc2UuYWxsKGV4dGVybmFsTWVzc2FnZXMubWFwKCh4OiBRTWVzc2FnZSkgPT4ge1xuICAgICAgICAgICAgcmV0dXJuIHRoaXMuZGVjb2RlT3V0cHV0TWVzc2FnZUJvZHkoe1xuICAgICAgICAgICAgICAgIGFiaTogcnVuTWVzc2FnZS5hYmksXG4gICAgICAgICAgICAgICAgYm9keUJhc2U2NDogeC5ib2R5IHx8ICcnLFxuICAgICAgICAgICAgfSk7XG4gICAgICAgIH0pKTtcbiAgICAgICAgY29uc3QgcmVzdWx0T3V0cHV0ID0gb3V0cHV0cy5maW5kKCh4OiBUT05Db250cmFjdERlY29kZU1lc3NhZ2VCb2R5UmVzdWx0KSA9PiB7XG4gICAgICAgICAgICByZXR1cm4geC5mdW5jdGlvbi50b0xvd2VyQ2FzZSgpID09PSBydW5NZXNzYWdlLmZ1bmN0aW9uTmFtZS50b0xvd2VyQ2FzZSgpO1xuICAgICAgICB9KTtcbiAgICAgICAgdGhpcy5jb25maWcubG9nKCdwcm9jZXNzUnVuTWVzc2FnZS4gRW5kJyk7XG4gICAgICAgIHJldHVybiB7XG4gICAgICAgICAgICBvdXRwdXQ6IHJlc3VsdE91dHB1dCA/IHJlc3VsdE91dHB1dC5vdXRwdXQgOiBudWxsLFxuICAgICAgICAgICAgdHJhbnNhY3Rpb24sXG4gICAgICAgIH07XG4gICAgfVxuXG4gICAgLyoqXG4gICAgICogRGVwcmVjYXRlZC4gVXNlIGBydW5NZXNzYWdlTG9jYWxgIGluc3RlYWQuXG4gICAgICogQHBhcmFtIHBhcmFtc1xuICAgICAqIEBwYXJhbSB3YWl0UGFyYW1zXG4gICAgICogQHBhcmFtIHBhcmVudFNwYW5cbiAgICAgKiBAcmV0dXJucyB7UHJvbWlzZTx1bmtub3duPn1cbiAgICAgKi9cbiAgICBhc3luYyBwcm9jZXNzUnVuTWVzc2FnZUxvY2FsKFxuICAgICAgICBwYXJhbXM6IFRPTkNvbnRyYWN0UnVuTWVzc2FnZSxcbiAgICAgICAgd2FpdFBhcmFtcz86IFRPTkNvbnRyYWN0QWNjb3VudFdhaXRQYXJhbXMsXG4gICAgICAgIHBhcmVudFNwYW4/OiAoU3BhbiB8IFNwYW5Db250ZXh0KSxcbiAgICApOiBQcm9taXNlPFRPTkNvbnRyYWN0UnVuUmVzdWx0PiB7XG4gICAgICAgIHRoaXMuY29uZmlnLmxvZygncHJvY2Vzc1J1bk1lc3NhZ2VMb2NhbCcsIHBhcmFtcyk7XG5cbiAgICAgICAgY29uc3QgYWNjb3VudCA9IGF3YWl0IHRoaXMuZ2V0QWNjb3VudChwYXJhbXMuYWRkcmVzcywgdHJ1ZSwgd2FpdFBhcmFtcywgcGFyZW50U3Bhbik7XG5cbiAgICAgICAgcmV0dXJuIHRoaXMucmVxdWVzdENvcmUoJ2NvbnRyYWN0cy5ydW4ubG9jYWwubXNnJywge1xuICAgICAgICAgICAgYWRkcmVzczogcGFyYW1zLmFkZHJlc3MsXG4gICAgICAgICAgICBhY2NvdW50LFxuICAgICAgICAgICAgYWJpOiBwYXJhbXMuYWJpLFxuICAgICAgICAgICAgZnVuY3Rpb25OYW1lOiBwYXJhbXMuZnVuY3Rpb25OYW1lLFxuICAgICAgICAgICAgbWVzc2FnZUJhc2U2NDogcGFyYW1zLm1lc3NhZ2UubWVzc2FnZUJvZHlCYXNlNjQsXG4gICAgICAgIH0pO1xuICAgIH1cblxuICAgIC8vIEZlZSBjYWxjdWxhdGlvblxuXG4gICAgYmlnQmFsYW5jZSA9ICcweDEwMDAwMDAwMDAwMDAwJztcblxuICAgIGFzeW5jIGNhbGNSdW5GZWVzKFxuICAgICAgICBwYXJhbXM6IFRPTkNvbnRyYWN0Q2FsY1J1bkZlZVBhcmFtcyxcbiAgICAgICAgcGFyZW50U3Bhbj86IChTcGFuIHwgU3BhbkNvbnRleHQpLFxuICAgICk6IFByb21pc2U8VE9OQ29udHJhY3RDYWxjRmVlUmVzdWx0PiB7XG4gICAgICAgIHRoaXMuY29uZmlnLmxvZygnY2FsY1J1bkZlZXMnLCBwYXJhbXMpO1xuXG4gICAgICAgIGNvbnN0IGFjY291bnQgPSBhd2FpdCB0aGlzLmdldEFjY291bnQocGFyYW1zLmFkZHJlc3MsIHRydWUsIHBhcmFtcy53YWl0UGFyYW1zLCBwYXJlbnRTcGFuKTtcblxuICAgICAgICBpZiAocGFyYW1zLmVtdWxhdGVCYWxhbmNlKSB7XG4gICAgICAgICAgICBhY2NvdW50LmJhbGFuY2UgPSB0aGlzLmJpZ0JhbGFuY2U7XG4gICAgICAgIH1cblxuICAgICAgICByZXR1cm4gdGhpcy5yZXF1ZXN0Q29yZSgnY29udHJhY3RzLnJ1bi5mZWUnLCB7XG4gICAgICAgICAgICBhZGRyZXNzOiBwYXJhbXMuYWRkcmVzcyxcbiAgICAgICAgICAgIGFjY291bnQsXG4gICAgICAgICAgICBhYmk6IHBhcmFtcy5hYmksXG4gICAgICAgICAgICBmdW5jdGlvbk5hbWU6IHBhcmFtcy5mdW5jdGlvbk5hbWUsXG4gICAgICAgICAgICBpbnB1dDogcGFyYW1zLmlucHV0LFxuICAgICAgICAgICAga2V5UGFpcjogcGFyYW1zLmtleVBhaXIsXG4gICAgICAgIH0pO1xuICAgIH1cblxuICAgIGFzeW5jIGNhbGNEZXBsb3lGZWVzKFxuICAgICAgICBwYXJhbXM6IFRPTkNvbnRyYWN0Q2FsY0RlcGxveUZlZVBhcmFtcyxcbiAgICAgICAgcGFyZW50U3Bhbj86IChTcGFuIHwgU3BhbkNvbnRleHQpLFxuICAgICk6IFByb21pc2U8VE9OQ29udHJhY3RDYWxjRmVlUmVzdWx0PiB7XG4gICAgICAgIHRoaXMuY29uZmlnLmxvZygnY2FsY0RlcGxveUZlZXMnLCBwYXJhbXMpO1xuXG4gICAgICAgIGNvbnN0IG1lc3NhZ2UgPSBhd2FpdCB0aGlzLmNyZWF0ZURlcGxveU1lc3NhZ2UocGFyYW1zKTtcblxuICAgICAgICByZXR1cm4gdGhpcy5jYWxjTXNnUHJvY2Vzc0ZlZXMoe1xuICAgICAgICAgICAgYWRkcmVzczogbWVzc2FnZS5hZGRyZXNzLFxuICAgICAgICAgICAgbWVzc2FnZTogbWVzc2FnZS5tZXNzYWdlLFxuICAgICAgICAgICAgZW11bGF0ZUJhbGFuY2U6IHBhcmFtcy5lbXVsYXRlQmFsYW5jZSxcbiAgICAgICAgICAgIG5ld0FjY291bnQ6IHBhcmFtcy5uZXdBY2NvdW50LFxuICAgICAgICB9LCBwYXJlbnRTcGFuKTtcbiAgICB9XG5cbiAgICBhc3luYyBjYWxjTXNnUHJvY2Vzc0ZlZXMoXG4gICAgICAgIHBhcmFtczogVE9OQ29udHJhY3RDYWxjTXNnUHJvY2Vzc2luZ0ZlZXNQYXJhbXMsXG4gICAgICAgIHBhcmVudFNwYW4/OiAoU3BhbiB8IFNwYW5Db250ZXh0KSxcbiAgICApOiBQcm9taXNlPFRPTkNvbnRyYWN0Q2FsY0ZlZVJlc3VsdD4ge1xuICAgICAgICB0aGlzLmNvbmZpZy5sb2coJ2NhbGNNc2dQcm9jZXNzRmVlcycsIHBhcmFtcyk7XG5cbiAgICAgICAgbGV0IGFjY291bnQ6IFFBY2NvdW50ID0ge1xuICAgICAgICAgICAgYmFsYW5jZTogdGhpcy5iaWdCYWxhbmNlLFxuICAgICAgICAgICAgaWQ6IHBhcmFtcy5hZGRyZXNzLFxuICAgICAgICAgICAgbGFzdF9wYWlkOiBNYXRoLmZsb29yKERhdGUubm93KCkgLyAxMDAwKSxcbiAgICAgICAgfTtcblxuICAgICAgICBpZiAoIXBhcmFtcy5uZXdBY2NvdW50KSB7XG4gICAgICAgICAgICBhY2NvdW50ID0gYXdhaXQgdGhpcy5nZXRBY2NvdW50KHBhcmFtcy5hZGRyZXNzLCBmYWxzZSwgcGFyYW1zLndhaXRQYXJhbXMsIHBhcmVudFNwYW4pO1xuICAgICAgICB9XG5cbiAgICAgICAgaWYgKHBhcmFtcy5lbXVsYXRlQmFsYW5jZSkge1xuICAgICAgICAgICAgYWNjb3VudC5iYWxhbmNlID0gdGhpcy5iaWdCYWxhbmNlO1xuICAgICAgICB9XG5cbiAgICAgICAgcmV0dXJuIHRoaXMucmVxdWVzdENvcmUoJ2NvbnRyYWN0cy5ydW4uZmVlLm1zZycsIHtcbiAgICAgICAgICAgIGFkZHJlc3M6IHBhcmFtcy5hZGRyZXNzLFxuICAgICAgICAgICAgYWNjb3VudCxcbiAgICAgICAgICAgIG1lc3NhZ2VCYXNlNjQ6IHBhcmFtcy5tZXNzYWdlLm1lc3NhZ2VCb2R5QmFzZTY0LFxuICAgICAgICB9KTtcbiAgICB9XG5cbiAgICAvLyBBZGRyZXNzIHByb2Nlc3NpbmdcblxuICAgIGFzeW5jIGNvbnZlcnRBZGRyZXNzKFxuICAgICAgICBwYXJhbXM6IFRPTkNvbnRyYWN0Q29udmVydEFkZHJlc3NQYXJhbXMsXG4gICAgKTogUHJvbWlzZTxUT05Db250cmFjdENvbnZlcnRBZGRyZXNzUmVzdWx0PiB7XG4gICAgICAgIHJldHVybiB0aGlzLnJlcXVlc3RDb3JlKCdjb250cmFjdHMuYWRkcmVzcy5jb252ZXJ0JywgcGFyYW1zKTtcbiAgICB9XG5cbiAgICAvLyBJbnRlcm5hbHNcblxuICAgIGFzeW5jIGludGVybmFsRGVwbG95TmF0aXZlKHBhcmFtczogVE9OQ29udHJhY3REZXBsb3lQYXJhbXMpOiBQcm9taXNlPFRPTkNvbnRyYWN0RGVwbG95UmVzdWx0PiB7XG4gICAgICAgIHJldHVybiB0aGlzLnJlcXVlc3RDb3JlKCdjb250cmFjdHMuZGVwbG95Jywge1xuICAgICAgICAgICAgYWJpOiBwYXJhbXMucGFja2FnZS5hYmksXG4gICAgICAgICAgICBjb25zdHJ1Y3RvckhlYWRlcjogcGFyYW1zLmNvbnN0cnVjdG9ySGVhZGVyLFxuICAgICAgICAgICAgY29uc3RydWN0b3JQYXJhbXM6IHBhcmFtcy5jb25zdHJ1Y3RvclBhcmFtcyxcbiAgICAgICAgICAgIGluaXRQYXJhbXM6IHBhcmFtcy5pbml0UGFyYW1zLFxuICAgICAgICAgICAgaW1hZ2VCYXNlNjQ6IHBhcmFtcy5wYWNrYWdlLmltYWdlQmFzZTY0LFxuICAgICAgICAgICAga2V5UGFpcjogcGFyYW1zLmtleVBhaXIsXG4gICAgICAgIH0pO1xuICAgIH1cblxuXG4gICAgYXN5bmMgaW50ZXJuYWxSdW5OYXRpdmUocGFyYW1zOiBUT05Db250cmFjdFJ1blBhcmFtcyk6IFByb21pc2U8VE9OQ29udHJhY3RSdW5SZXN1bHQ+IHtcbiAgICAgICAgcmV0dXJuIHRoaXMucmVxdWVzdENvcmUoJ2NvbnRyYWN0cy5ydW4nLCB7XG4gICAgICAgICAgICBhZGRyZXNzOiBwYXJhbXMuYWRkcmVzcyxcbiAgICAgICAgICAgIGFiaTogcGFyYW1zLmFiaSxcbiAgICAgICAgICAgIGZ1bmN0aW9uTmFtZTogcGFyYW1zLmZ1bmN0aW9uTmFtZSxcbiAgICAgICAgICAgIGhlYWRlcjogcGFyYW1zLmhlYWRlcixcbiAgICAgICAgICAgIGlucHV0OiBwYXJhbXMuaW5wdXQsXG4gICAgICAgICAgICBrZXlQYWlyOiBwYXJhbXMua2V5UGFpcixcbiAgICAgICAgfSk7XG4gICAgfVxuXG4gICAgbWFrZUV4cGlyZUhlYWRlcihcbiAgICAgICAgYWJpOiBUT05Db250cmFjdEFCSSxcbiAgICAgICAgdXNlckhlYWRlcj86IGFueSxcbiAgICAgICAgcmV0cnlJbmRleD86IG51bWJlcixcbiAgICApOiBhbnkge1xuICAgICAgICBjb25zdCB0aW1lb3V0ID0gdGhpcy5jb25maWcubWVzc2FnZUV4cGlyYXRpb25UaW1lb3V0KHJldHJ5SW5kZXgpO1xuICAgICAgICBpZiAoYWJpLmhlYWRlciAmJiBhYmkuaGVhZGVyLmluY2x1ZGVzKCdleHBpcmUnKSAmJiAhdXNlckhlYWRlcj8uZXhwaXJlKSB7XG4gICAgICAgICAgICByZXR1cm4ge1xuICAgICAgICAgICAgICAgIC4uLnVzZXJIZWFkZXIsXG4gICAgICAgICAgICAgICAgZXhwaXJlOiBNYXRoLmZsb29yKChEYXRlLm5vdygpICsgdGltZW91dCkgLyAxMDAwKSArIDEsXG4gICAgICAgICAgICB9O1xuICAgICAgICB9XG4gICAgICAgIHJldHVybiB1c2VySGVhZGVyO1xuICAgIH1cblxuICAgIGFzeW5jIHJldHJ5Q2FsbChjYWxsOiAoaW5kZXg6IG51bWJlcikgPT4gUHJvbWlzZTxhbnk+KTogUHJvbWlzZTxhbnk+IHtcbiAgICAgICAgY29uc3QgcmV0cmllc0NvdW50ID0gdGhpcy5jb25maWcubWVzc2FnZVJldHJpZXNDb3VudCgpO1xuICAgICAgICBmb3IgKGxldCBpID0gMDsgaSA8PSByZXRyaWVzQ291bnQ7IGkgKz0gMSkge1xuICAgICAgICAgICAgaWYgKGkgPiAwKSB7XG4gICAgICAgICAgICAgICAgdGhpcy5jb25maWcubG9nKGBSZXRyeSAjJHtpfWApO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgdHJ5IHtcbiAgICAgICAgICAgICAgICByZXR1cm4gYXdhaXQgY2FsbChpKTtcbiAgICAgICAgICAgIH0gY2F0Y2ggKGVycm9yKSB7XG4gICAgICAgICAgICAgICAgY29uc3QgdXNlUmV0cnkgPSBlcnJvci5jb2RlID09PSBUT05FcnJvckNvZGUuTUVTU0FHRV9FWFBJUkVEXG4gICAgICAgICAgICAgICAgICAgIHx8IFRPTkNsaWVudEVycm9yLmlzQ29udHJhY3RFcnJvcihlcnJvciwgVE9OQ29udHJhY3RFeGl0Q29kZS5SRVBMQVlfUFJPVEVDVElPTilcbiAgICAgICAgICAgICAgICAgICAgfHwgVE9OQ2xpZW50RXJyb3IuaXNDb250cmFjdEVycm9yKGVycm9yLCBUT05Db250cmFjdEV4aXRDb2RlLk1FU1NBR0VfRVhQSVJFRCk7XG4gICAgICAgICAgICAgICAgaWYgKCF1c2VSZXRyeSB8fCBpID09PSByZXRyaWVzQ291bnQpIHtcbiAgICAgICAgICAgICAgICAgICAgdGhyb3cgZXJyb3I7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICAgIHRocm93IFRPTkNsaWVudEVycm9yLmludGVybmFsRXJyb3IoXCJyZXRyeUNhbGw6IHVucmVhY2hhYmxlXCIpO1xuICAgIH1cblxuICAgIGFzeW5jIGludGVybmFsRGVwbG95SnMoXG4gICAgICAgIHBhcmFtczogVE9OQ29udHJhY3REZXBsb3lQYXJhbXMsXG4gICAgICAgIHBhcmVudFNwYW4/OiAoU3BhbiB8IFNwYW5Db250ZXh0KSxcbiAgICApOiBQcm9taXNlPFRPTkNvbnRyYWN0RGVwbG95UmVzdWx0PiB7XG4gICAgICAgIHRoaXMuY29uZmlnLmxvZygnRGVwbG95IHN0YXJ0Jyk7XG4gICAgICAgIHJldHVybiB0aGlzLnJldHJ5Q2FsbChhc3luYyAocmV0cnlJbmRleCkgPT4ge1xuICAgICAgICAgICAgY29uc3QgZGVwbG95TWVzc2FnZSA9IGF3YWl0IHRoaXMuY3JlYXRlRGVwbG95TWVzc2FnZShwYXJhbXMsIHJldHJ5SW5kZXgpO1xuICAgICAgICAgICAgaWYgKGF3YWl0IHRoaXMuaXNEZXBsb3llZChkZXBsb3lNZXNzYWdlLmFkZHJlc3MsIHBhcmVudFNwYW4pKSB7XG4gICAgICAgICAgICAgICAgcmV0dXJuIHtcbiAgICAgICAgICAgICAgICAgICAgYWRkcmVzczogZGVwbG95TWVzc2FnZS5hZGRyZXNzLFxuICAgICAgICAgICAgICAgICAgICBhbHJlYWR5RGVwbG95ZWQ6IHRydWUsXG4gICAgICAgICAgICAgICAgfTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGF3YWl0IHRoaXMuc2VuZE1lc3NhZ2UoZGVwbG95TWVzc2FnZS5tZXNzYWdlLCBwYXJlbnRTcGFuKTtcbiAgICAgICAgICAgIHJldHVybiB0aGlzLndhaXRGb3JEZXBsb3lUcmFuc2FjdGlvbihkZXBsb3lNZXNzYWdlLCBwYXJlbnRTcGFuLCByZXRyeUluZGV4KTtcbiAgICAgICAgfSk7XG4gICAgfVxuXG5cbiAgICBhc3luYyBpbnRlcm5hbFJ1bkpzKFxuICAgICAgICBwYXJhbXM6IFRPTkNvbnRyYWN0UnVuUGFyYW1zLFxuICAgICAgICBwYXJlbnRTcGFuPzogKFNwYW4gfCBTcGFuQ29udGV4dCksXG4gICAgKTogUHJvbWlzZTxUT05Db250cmFjdFJ1blJlc3VsdD4ge1xuICAgICAgICB0aGlzLmNvbmZpZy5sb2coJ1J1biBzdGFydCcpO1xuICAgICAgICByZXR1cm4gdGhpcy5yZXRyeUNhbGwoYXN5bmMgKHJldHJ5SW5kZXgpID0+IHtcbiAgICAgICAgICAgIGNvbnN0IHJ1bk1lc3NhZ2UgPSBhd2FpdCB0aGlzLmNyZWF0ZVJ1bk1lc3NhZ2UocGFyYW1zLCByZXRyeUluZGV4KTtcbiAgICAgICAgICAgIGF3YWl0IHRoaXMuc2VuZE1lc3NhZ2UocnVuTWVzc2FnZS5tZXNzYWdlLCBwYXJlbnRTcGFuKTtcbiAgICAgICAgICAgIHJldHVybiB0aGlzLndhaXRGb3JSdW5UcmFuc2FjdGlvbihydW5NZXNzYWdlLCBwYXJlbnRTcGFuLCByZXRyeUluZGV4KTtcbiAgICAgICAgfSk7XG4gICAgfVxuXG4gICAgYXN5bmMgZ2V0QWNjb3VudChcbiAgICAgICAgYWRkcmVzczogc3RyaW5nLFxuICAgICAgICBhY3RpdmU6IGJvb2xlYW4sXG4gICAgICAgIHdhaXRQYXJhbXM/OiBUT05Db250cmFjdEFjY291bnRXYWl0UGFyYW1zLFxuICAgICAgICBwYXJlbnRTcGFuPzogKFNwYW4gfCBTcGFuQ29udGV4dCksXG4gICAgKTogUHJvbWlzZTxRQWNjb3VudD4ge1xuICAgICAgICBjb25zdCBmaWx0ZXI6IHsgW3N0cmluZ106IGFueSB9ID0ge1xuICAgICAgICAgICAgaWQ6IHsgZXE6IGFkZHJlc3MgfSxcbiAgICAgICAgfTtcbiAgICAgICAgaWYgKHdhaXRQYXJhbXMgJiYgd2FpdFBhcmFtcy50cmFuc2FjdGlvbkx0KSB7XG4gICAgICAgICAgICBmaWx0ZXIubGFzdF90cmFuc19sdCA9IHsgZ2U6IHdhaXRQYXJhbXMudHJhbnNhY3Rpb25MdCB9O1xuICAgICAgICB9XG4gICAgICAgIGlmIChhY3RpdmUpIHtcbiAgICAgICAgICAgIGZpbHRlci5hY2NfdHlwZSA9IHsgZXE6IFFBY2NvdW50VHlwZS5hY3RpdmUgfTtcbiAgICAgICAgfVxuXG4gICAgICAgIHRoaXMuY29uZmlnLmxvZygnZ2V0QWNjb3VudC4gRmlsdGVyJywgZmlsdGVyKTtcbiAgICAgICAgY29uc3QgYWNjb3VudHMgPSBhd2FpdCB0aGlzLnF1ZXJpZXMuYWNjb3VudHMucXVlcnkoe1xuICAgICAgICAgICAgZmlsdGVyLFxuICAgICAgICAgICAgcmVzdWx0OiAnaWQgYWNjX3R5cGUgY29kZSBkYXRhIGJhbGFuY2UgYmFsYW5jZV9vdGhlciB7IGN1cnJlbmN5IHZhbHVlIH0gbGFzdF9wYWlkJyxcbiAgICAgICAgICAgIC4uLih3YWl0UGFyYW1zICYmIHdhaXRQYXJhbXMudGltZW91dCA/IHsgdGltZW91dDogd2FpdFBhcmFtcy50aW1lb3V0IH0gOiB7fSksXG4gICAgICAgICAgICBwYXJlbnRTcGFuLFxuICAgICAgICB9KTtcbiAgICAgICAgaWYgKGFjY291bnRzLmxlbmd0aCA9PT0gMCkge1xuICAgICAgICAgICAgdGhyb3cgVE9OQ2xpZW50RXJyb3IuYWNjb3VudE1pc3NpbmcoYWRkcmVzcyk7XG4gICAgICAgIH1cbiAgICAgICAgY29uc3QgYWNjb3VudCA9IGFjY291bnRzWzBdO1xuICAgICAgICByZW1vdmVUeXBlTmFtZShhY2NvdW50KTtcbiAgICAgICAgdGhpcy5jb25maWcubG9nKCdnZXRBY2NvdW50LiBBY2NvdW50IHJlY2VpdmVkJywgYWNjb3VudCk7XG4gICAgICAgIHJldHVybiBhY2NvdW50O1xuICAgIH1cblxuICAgIGFzeW5jIGludGVybmFsUnVuTG9jYWxKcyhcbiAgICAgICAgcGFyYW1zOiBUT05Db250cmFjdFJ1bkxvY2FsUGFyYW1zLFxuICAgICAgICBwYXJlbnRTcGFuPzogKFNwYW4gfCBTcGFuQ29udGV4dCksXG4gICAgKTogUHJvbWlzZTxUT05Db250cmFjdFJ1bkxvY2FsUmVzdWx0PiB7XG4gICAgICAgIGNvbnN0IGFkZHJlc3MgPSBwYXJhbXMuYWRkcmVzcztcbiAgICAgICAgaWYgKCFhZGRyZXNzKSB7XG4gICAgICAgICAgICB0aHJvdyBUT05DbGllbnRFcnJvci5hZGRyZXNzUmVxdWlyZWRGb3JSdW5Mb2NhbCgpO1xuICAgICAgICB9XG4gICAgICAgIGNvbnN0IGFjY291bnQgPSBwYXJhbXMuYWNjb3VudCB8fCAoYXdhaXQgdGhpcy5nZXRBY2NvdW50KFxuICAgICAgICAgICAgYWRkcmVzcyxcbiAgICAgICAgICAgIGZhbHNlLFxuICAgICAgICAgICAgcGFyYW1zLndhaXRQYXJhbXMsXG4gICAgICAgICAgICBwYXJlbnRTcGFuLFxuICAgICAgICApKTtcbiAgICAgICAgaWYgKCFhY2NvdW50LmNvZGUpIHtcbiAgICAgICAgICAgIHRocm93IFRPTkNsaWVudEVycm9yLmFjY291bnRDb2RlTWlzc2luZyhhZGRyZXNzLCAoYWNjb3VudDogYW55KS5iYWxhbmNlKTtcbiAgICAgICAgfVxuICAgICAgICByZXR1cm4gdGhpcy5yZXF1ZXN0Q29yZSgnY29udHJhY3RzLnJ1bi5sb2NhbCcsIHtcbiAgICAgICAgICAgIGFkZHJlc3MsXG4gICAgICAgICAgICBhY2NvdW50LFxuICAgICAgICAgICAgYWJpOiBwYXJhbXMuYWJpLFxuICAgICAgICAgICAgZnVuY3Rpb25OYW1lOiBwYXJhbXMuZnVuY3Rpb25OYW1lLFxuICAgICAgICAgICAgaW5wdXQ6IHBhcmFtcy5pbnB1dCxcbiAgICAgICAgICAgIGtleVBhaXI6IHBhcmFtcy5rZXlQYWlyLFxuICAgICAgICAgICAgZnVsbFJ1bjogcGFyYW1zLmZ1bGxSdW4sXG4gICAgICAgIH0pO1xuICAgIH1cblxuICAgIGFzeW5jIGludGVybmFsUnVuTWVzc2FnZUxvY2FsSnMoXG4gICAgICAgIHBhcmFtczogVE9OQ29udHJhY3RSdW5NZXNzYWdlTG9jYWxQYXJhbXMsXG4gICAgICAgIHBhcmVudFNwYW4/OiAoU3BhbiB8IFNwYW5Db250ZXh0KSxcbiAgICApOiBQcm9taXNlPFRPTkNvbnRyYWN0UnVuTG9jYWxSZXN1bHQ+IHtcbiAgICAgICAgY29uc3QgYWRkcmVzcyA9IHBhcmFtcy5hZGRyZXNzO1xuICAgICAgICBpZiAoIWFkZHJlc3MpIHtcbiAgICAgICAgICAgIHRocm93IFRPTkNsaWVudEVycm9yLmFkZHJlc3NSZXF1aXJlZEZvclJ1bkxvY2FsKCk7XG4gICAgICAgIH1cbiAgICAgICAgY29uc3QgYWNjb3VudCA9IHBhcmFtcy5hY2NvdW50IHx8IChhd2FpdCB0aGlzLmdldEFjY291bnQoXG4gICAgICAgICAgICBhZGRyZXNzLFxuICAgICAgICAgICAgZmFsc2UsXG4gICAgICAgICAgICBwYXJhbXMud2FpdFBhcmFtcyxcbiAgICAgICAgICAgIHBhcmVudFNwYW4sXG4gICAgICAgICkpO1xuICAgICAgICBpZiAoIWFjY291bnQuY29kZSkge1xuICAgICAgICAgICAgdGhyb3cgVE9OQ2xpZW50RXJyb3IuYWNjb3VudENvZGVNaXNzaW5nKGFkZHJlc3MsIChhY2NvdW50OiBhbnkpLmJhbGFuY2UpO1xuICAgICAgICB9XG4gICAgICAgIHJldHVybiB0aGlzLnJlcXVlc3RDb3JlKCdjb250cmFjdHMucnVuLmxvY2FsLm1zZycsIHtcbiAgICAgICAgICAgIGFkZHJlc3MsXG4gICAgICAgICAgICBhY2NvdW50LFxuICAgICAgICAgICAgYWJpOiBwYXJhbXMuYWJpLFxuICAgICAgICAgICAgZnVuY3Rpb25OYW1lOiBwYXJhbXMuZnVuY3Rpb25OYW1lLFxuICAgICAgICAgICAgbWVzc2FnZUJhc2U2NDogcGFyYW1zLm1lc3NhZ2VCb2R5QmFzZTY0LFxuICAgICAgICAgICAgZnVsbFJ1bjogcGFyYW1zLmZ1bGxSdW4sXG4gICAgICAgIH0pO1xuICAgIH1cbn1cblxuVE9OQ29udHJhY3RzTW9kdWxlLm1vZHVsZU5hbWUgPSAnVE9OQ29udHJhY3RzTW9kdWxlJztcblxuY29uc3QgdHJhbnNhY3Rpb25EZXRhaWxzID0gYFxuICAgIGlkXG4gICAgaW5fbXNnXG4gICAgdHJfdHlwZVxuICAgIHN0YXR1c1xuICAgIGluX21zZ1xuICAgIG91dF9tc2dzXG4gICAgYmxvY2tfaWRcbiAgICBub3dcbiAgICBhYm9ydGVkXG4gICAgbHRcbiAgICB0b3RhbF9mZWVzXG4gICAgc3RvcmFnZSB7XG4gICAgICAgIHN0YXR1c19jaGFuZ2VcbiAgICAgICAgc3RvcmFnZV9mZWVzX2NvbGxlY3RlZFxuICAgIH1cbiAgICBjb21wdXRlIHtcbiAgICAgICAgY29tcHV0ZV90eXBlXG4gICAgICAgIHNraXBwZWRfcmVhc29uXG4gICAgICAgIHN1Y2Nlc3NcbiAgICAgICAgZXhpdF9jb2RlXG4gICAgICAgIGdhc19mZWVzXG4gICAgICAgIGdhc191c2VkXG4gICAgfVxuICAgIGFjdGlvbiB7XG4gICAgICAgIHN1Y2Nlc3NcbiAgICAgICAgdmFsaWRcbiAgICAgICAgcmVzdWx0X2NvZGVcbiAgICAgICAgbm9fZnVuZHNcbiAgICAgICAgdG90YWxfZndkX2ZlZXNcbiAgICAgICAgdG90YWxfYWN0aW9uX2ZlZXNcbiAgICB9XG4gICAgb3V0X21lc3NhZ2VzIHtcbiAgICAgICAgaWRcbiAgICAgICAgbXNnX3R5cGVcbiAgICAgICAgYm9keVxuICAgICAgICB2YWx1ZVxuICAgIH1cbiAgIGA7XG4iXX0=