"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.removeProps = removeProps;
exports["default"] = exports.QBounceType = exports.QSkipReason = exports.QComputeType = exports.QAccountStatusChange = exports.QAccountStatus = exports.QTransactionProcessingStatus = exports.QTransactionType = exports.QAccountType = exports.QSplitType = exports.QBlockProcessingStatus = exports.QMessageProcessingStatus = exports.QMessageType = exports.QOutMsgType = exports.QInMsgType = exports.TONClientStorageStatus = exports.TONClientComputeSkippedStatus = exports.TONClientTransactionPhase = exports.TONAddressStringVariant = void 0;

var _opentracing = require("opentracing");

var _TONClient = require("../TONClient");

var _TONModule2 = require("../TONModule");

var _TONConfigModule = _interopRequireDefault(require("./TONConfigModule"));

var _TONQueriesModule = _interopRequireDefault(require("./TONQueriesModule"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _typeof(obj) { "@babel/helpers - typeof"; if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

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
      var _setup = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee() {
        return regeneratorRuntime.wrap(function _callee$(_context) {
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
      var _load = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee2(params, parentSpan) {
        var accounts;
        return regeneratorRuntime.wrap(function _callee2$(_context2) {
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
      var _deploy = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee4(params, parentSpan) {
        var _this2 = this;

        return regeneratorRuntime.wrap(function _callee4$(_context4) {
          while (1) {
            switch (_context4.prev = _context4.next) {
              case 0:
                return _context4.abrupt("return", this.context.trace('contracts.deploy', /*#__PURE__*/function () {
                  var _ref = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee3(span) {
                    return regeneratorRuntime.wrap(function _callee3$(_context3) {
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
      var _run = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee6(params, parentSpan) {
        var _this3 = this;

        return regeneratorRuntime.wrap(function _callee6$(_context6) {
          while (1) {
            switch (_context6.prev = _context6.next) {
              case 0:
                return _context6.abrupt("return", this.context.trace('contracts.run', /*#__PURE__*/function () {
                  var _ref2 = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee5(span) {
                    return regeneratorRuntime.wrap(function _callee5$(_context5) {
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
      var _runLocal = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee8(params, parentSpan) {
        var _this4 = this;

        return regeneratorRuntime.wrap(function _callee8$(_context8) {
          while (1) {
            switch (_context8.prev = _context8.next) {
              case 0:
                return _context8.abrupt("return", this.context.trace('contracts.runLocal', /*#__PURE__*/function () {
                  var _ref3 = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee7(span) {
                    return regeneratorRuntime.wrap(function _callee7$(_context7) {
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
    key: "runGet",
    value: function () {
      var _runGet = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee9(params) {
        var coreParams, account;
        return regeneratorRuntime.wrap(function _callee9$(_context9) {
          while (1) {
            switch (_context9.prev = _context9.next) {
              case 0:
                coreParams = params;

                if (!(!params.codeBase64 || !params.dataBase64)) {
                  _context9.next = 12;
                  break;
                }

                if (params.address) {
                  _context9.next = 4;
                  break;
                }

                throw _TONClient.TONClientError.addressRequiredForRunLocal();

              case 4:
                _context9.next = 6;
                return this.getAccount(params.address, true);

              case 6:
                account = _context9.sent;
                account.codeBase64 = account.code;
                account.dataBase64 = account.data;
                delete account.code;
                delete account.data;
                coreParams = _objectSpread(_objectSpread({}, account), params);

              case 12:
                return _context9.abrupt("return", this.requestCore('tvm.get', coreParams));

              case 13:
              case "end":
                return _context9.stop();
            }
          }
        }, _callee9, this);
      }));

      function runGet(_x12) {
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
      var _createDeployMessage = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee10(params, retryIndex) {
        var constructorHeader, message;
        return regeneratorRuntime.wrap(function _callee10$(_context10) {
          while (1) {
            switch (_context10.prev = _context10.next) {
              case 0:
                this.config.log('createDeployMessage', params);
                constructorHeader = this.makeExpireHeader(params["package"].abi, params.constructorHeader, retryIndex);
                _context10.next = 4;
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
                message = _context10.sent;
                return _context10.abrupt("return", {
                  message: {
                    messageId: message.messageId,
                    messageBodyBase64: message.messageBodyBase64,
                    expire: constructorHeader === null || constructorHeader === void 0 ? void 0 : constructorHeader.expire
                  },
                  address: message.address
                });

              case 6:
              case "end":
                return _context10.stop();
            }
          }
        }, _callee10, this);
      }));

      function createDeployMessage(_x13, _x14) {
        return _createDeployMessage.apply(this, arguments);
      }

      return createDeployMessage;
    }()
  }, {
    key: "createRunMessage",
    value: function () {
      var _createRunMessage = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee11(params, retryIndex) {
        var header, message;
        return regeneratorRuntime.wrap(function _callee11$(_context11) {
          while (1) {
            switch (_context11.prev = _context11.next) {
              case 0:
                this.config.log('createRunMessage', params);
                header = this.makeExpireHeader(params.abi, params.header, retryIndex);
                _context11.next = 4;
                return this.requestCore('contracts.run.message', {
                  address: params.address,
                  abi: params.abi,
                  functionName: params.functionName,
                  header: header,
                  input: params.input,
                  keyPair: params.keyPair
                });

              case 4:
                message = _context11.sent;
                message.expire = header === null || header === void 0 ? void 0 : header.expire;
                return _context11.abrupt("return", {
                  address: params.address,
                  abi: params.abi,
                  functionName: params.functionName,
                  message: message
                });

              case 7:
              case "end":
                return _context11.stop();
            }
          }
        }, _callee11, this);
      }));

      function createRunMessage(_x15, _x16) {
        return _createRunMessage.apply(this, arguments);
      }

      return createRunMessage;
    }()
  }, {
    key: "createUnsignedDeployMessage",
    value: function () {
      var _createUnsignedDeployMessage = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee12(params, retryIndex) {
        var constructorHeader, result;
        return regeneratorRuntime.wrap(function _callee12$(_context12) {
          while (1) {
            switch (_context12.prev = _context12.next) {
              case 0:
                constructorHeader = this.makeExpireHeader(params["package"].abi, params.constructorHeader, retryIndex);
                _context12.next = 3;
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
                result = _context12.sent;
                return _context12.abrupt("return", {
                  address: result.addressHex,
                  signParams: _objectSpread(_objectSpread({}, result.encoded), {}, {
                    abi: params["package"].abi,
                    expire: constructorHeader === null || constructorHeader === void 0 ? void 0 : constructorHeader.expire
                  })
                });

              case 5:
              case "end":
                return _context12.stop();
            }
          }
        }, _callee12, this);
      }));

      function createUnsignedDeployMessage(_x17, _x18) {
        return _createUnsignedDeployMessage.apply(this, arguments);
      }

      return createUnsignedDeployMessage;
    }()
  }, {
    key: "createUnsignedRunMessage",
    value: function () {
      var _createUnsignedRunMessage = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee13(params, retryIndex) {
        var header, signParams;
        return regeneratorRuntime.wrap(function _callee13$(_context13) {
          while (1) {
            switch (_context13.prev = _context13.next) {
              case 0:
                header = this.makeExpireHeader(params.abi, params.header, retryIndex);
                _context13.next = 3;
                return this.requestCore('contracts.run.encode_unsigned_message', {
                  address: params.address,
                  abi: params.abi,
                  functionName: params.functionName,
                  header: header,
                  input: params.input
                });

              case 3:
                signParams = _context13.sent;
                return _context13.abrupt("return", {
                  address: params.address,
                  functionName: params.functionName,
                  signParams: _objectSpread(_objectSpread({}, signParams), {}, {
                    abi: params.abi,
                    expire: header === null || header === void 0 ? void 0 : header.expire
                  })
                });

              case 5:
              case "end":
                return _context13.stop();
            }
          }
        }, _callee13, this);
      }));

      function createUnsignedRunMessage(_x19, _x20) {
        return _createUnsignedRunMessage.apply(this, arguments);
      }

      return createUnsignedRunMessage;
    }()
  }, {
    key: "createSignedMessage",
    value: function () {
      var _createSignedMessage = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee14(params) {
        return regeneratorRuntime.wrap(function _callee14$(_context14) {
          while (1) {
            switch (_context14.prev = _context14.next) {
              case 0:
                return _context14.abrupt("return", this.requestCore('contracts.encode_message_with_sign', params));

              case 1:
              case "end":
                return _context14.stop();
            }
          }
        }, _callee14, this);
      }));

      function createSignedMessage(_x21) {
        return _createSignedMessage.apply(this, arguments);
      }

      return createSignedMessage;
    }()
  }, {
    key: "createSignedDeployMessage",
    value: function () {
      var _createSignedDeployMessage = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee15(params) {
        var message;
        return regeneratorRuntime.wrap(function _callee15$(_context15) {
          while (1) {
            switch (_context15.prev = _context15.next) {
              case 0:
                _context15.next = 2;
                return this.createSignedMessage({
                  abi: params.unsignedMessage.signParams.abi,
                  unsignedBytesBase64: params.unsignedMessage.signParams.unsignedBytesBase64,
                  signBytesBase64: params.signBytesBase64,
                  publicKeyHex: params.publicKeyHex
                });

              case 2:
                message = _context15.sent;
                message.expire = params.unsignedMessage.signParams.expire;
                return _context15.abrupt("return", {
                  address: params.unsignedMessage.address,
                  message: message
                });

              case 5:
              case "end":
                return _context15.stop();
            }
          }
        }, _callee15, this);
      }));

      function createSignedDeployMessage(_x22) {
        return _createSignedDeployMessage.apply(this, arguments);
      }

      return createSignedDeployMessage;
    }()
  }, {
    key: "createSignedRunMessage",
    value: function () {
      var _createSignedRunMessage = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee16(params) {
        var message;
        return regeneratorRuntime.wrap(function _callee16$(_context16) {
          while (1) {
            switch (_context16.prev = _context16.next) {
              case 0:
                _context16.next = 2;
                return this.createSignedMessage({
                  abi: params.unsignedMessage.signParams.abi,
                  unsignedBytesBase64: params.unsignedMessage.signParams.unsignedBytesBase64,
                  signBytesBase64: params.signBytesBase64,
                  publicKeyHex: params.publicKeyHex
                });

              case 2:
                message = _context16.sent;
                message.expire = params.unsignedMessage.signParams.expire;
                return _context16.abrupt("return", {
                  address: params.unsignedMessage.address,
                  abi: params.unsignedMessage.signParams.abi,
                  functionName: params.unsignedMessage.functionName,
                  message: message
                });

              case 5:
              case "end":
                return _context16.stop();
            }
          }
        }, _callee16, this);
      }));

      function createSignedRunMessage(_x23) {
        return _createSignedRunMessage.apply(this, arguments);
      }

      return createSignedRunMessage;
    }()
  }, {
    key: "getCodeFromImage",
    value: function () {
      var _getCodeFromImage = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee17(params) {
        return regeneratorRuntime.wrap(function _callee17$(_context17) {
          while (1) {
            switch (_context17.prev = _context17.next) {
              case 0:
                return _context17.abrupt("return", this.requestCore('contracts.image.code', params));

              case 1:
              case "end":
                return _context17.stop();
            }
          }
        }, _callee17, this);
      }));

      function getCodeFromImage(_x24) {
        return _getCodeFromImage.apply(this, arguments);
      }

      return getCodeFromImage;
    }()
  }, {
    key: "getDeployData",
    value: function () {
      var _getDeployData = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee18(params) {
        return regeneratorRuntime.wrap(function _callee18$(_context18) {
          while (1) {
            switch (_context18.prev = _context18.next) {
              case 0:
                return _context18.abrupt("return", this.requestCore('contracts.deploy.data', params));

              case 1:
              case "end":
                return _context18.stop();
            }
          }
        }, _callee18, this);
      }));

      function getDeployData(_x25) {
        return _getDeployData.apply(this, arguments);
      }

      return getDeployData;
    }()
  }, {
    key: "createRunBody",
    value: function () {
      var _createRunBody = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee19(params) {
        return regeneratorRuntime.wrap(function _callee19$(_context19) {
          while (1) {
            switch (_context19.prev = _context19.next) {
              case 0:
                return _context19.abrupt("return", this.requestCore('contracts.run.body', params));

              case 1:
              case "end":
                return _context19.stop();
            }
          }
        }, _callee19, this);
      }));

      function createRunBody(_x26) {
        return _createRunBody.apply(this, arguments);
      }

      return createRunBody;
    }()
  }, {
    key: "getFunctionId",
    value: function () {
      var _getFunctionId = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee20(params) {
        return regeneratorRuntime.wrap(function _callee20$(_context20) {
          while (1) {
            switch (_context20.prev = _context20.next) {
              case 0:
                return _context20.abrupt("return", this.requestCore('contracts.function.id', params));

              case 1:
              case "end":
                return _context20.stop();
            }
          }
        }, _callee20, this);
      }));

      function getFunctionId(_x27) {
        return _getFunctionId.apply(this, arguments);
      }

      return getFunctionId;
    }()
  }, {
    key: "getBocHash",
    value: function () {
      var _getBocHash = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee21(params) {
        return regeneratorRuntime.wrap(function _callee21$(_context21) {
          while (1) {
            switch (_context21.prev = _context21.next) {
              case 0:
                return _context21.abrupt("return", this.requestCore('contracts.boc.hash', params));

              case 1:
              case "end":
                return _context21.stop();
            }
          }
        }, _callee21, this);
      }));

      function getBocHash(_x28) {
        return _getBocHash.apply(this, arguments);
      }

      return getBocHash;
    }()
  }, {
    key: "parseMessage",
    value: function () {
      var _parseMessage = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee22(params) {
        return regeneratorRuntime.wrap(function _callee22$(_context22) {
          while (1) {
            switch (_context22.prev = _context22.next) {
              case 0:
                return _context22.abrupt("return", this.requestCore('contracts.parse.message', params));

              case 1:
              case "end":
                return _context22.stop();
            }
          }
        }, _callee22, this);
      }));

      function parseMessage(_x29) {
        return _parseMessage.apply(this, arguments);
      }

      return parseMessage;
    }() // Message parsing

  }, {
    key: "decodeRunOutput",
    value: function () {
      var _decodeRunOutput = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee23(params) {
        return regeneratorRuntime.wrap(function _callee23$(_context23) {
          while (1) {
            switch (_context23.prev = _context23.next) {
              case 0:
                return _context23.abrupt("return", this.requestCore('contracts.run.output', params));

              case 1:
              case "end":
                return _context23.stop();
            }
          }
        }, _callee23, this);
      }));

      function decodeRunOutput(_x30) {
        return _decodeRunOutput.apply(this, arguments);
      }

      return decodeRunOutput;
    }()
  }, {
    key: "decodeInputMessageBody",
    value: function () {
      var _decodeInputMessageBody = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee24(params) {
        return regeneratorRuntime.wrap(function _callee24$(_context24) {
          while (1) {
            switch (_context24.prev = _context24.next) {
              case 0:
                return _context24.abrupt("return", this.requestCore('contracts.run.unknown.input', params));

              case 1:
              case "end":
                return _context24.stop();
            }
          }
        }, _callee24, this);
      }));

      function decodeInputMessageBody(_x31) {
        return _decodeInputMessageBody.apply(this, arguments);
      }

      return decodeInputMessageBody;
    }()
  }, {
    key: "decodeOutputMessageBody",
    value: function () {
      var _decodeOutputMessageBody = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee25(params) {
        return regeneratorRuntime.wrap(function _callee25$(_context25) {
          while (1) {
            switch (_context25.prev = _context25.next) {
              case 0:
                return _context25.abrupt("return", this.requestCore('contracts.run.unknown.output', params));

              case 1:
              case "end":
                return _context25.stop();
            }
          }
        }, _callee25, this);
      }));

      function decodeOutputMessageBody(_x32) {
        return _decodeOutputMessageBody.apply(this, arguments);
      }

      return decodeOutputMessageBody;
    }() // Message processing

  }, {
    key: "getMessageId",
    value: function () {
      var _getMessageId = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee26(message) {
        return regeneratorRuntime.wrap(function _callee26$(_context26) {
          while (1) {
            switch (_context26.prev = _context26.next) {
              case 0:
                _context26.t0 = message.messageId;

                if (_context26.t0) {
                  _context26.next = 5;
                  break;
                }

                _context26.next = 4;
                return this.getBocHash({
                  bocBase64: message.messageBodyBase64
                });

              case 4:
                _context26.t0 = _context26.sent.hash;

              case 5:
                return _context26.abrupt("return", _context26.t0);

              case 6:
              case "end":
                return _context26.stop();
            }
          }
        }, _callee26, this);
      }));

      function getMessageId(_x33) {
        return _getMessageId.apply(this, arguments);
      }

      return getMessageId;
    }()
  }, {
    key: "sendMessage",
    value: function () {
      var _sendMessage = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee27(params, parentSpan) {
        var expire, serverTimeDelta, id, idBase64;
        return regeneratorRuntime.wrap(function _callee27$(_context27) {
          while (1) {
            switch (_context27.prev = _context27.next) {
              case 0:
                expire = params.expire;

                if (!(expire && Date.now() > expire * 1000)) {
                  _context27.next = 3;
                  break;
                }

                throw _TONClient.TONClientError.sendNodeRequestFailed('Message already expired');

              case 3:
                _context27.t0 = Math;
                _context27.next = 6;
                return this.queries.serverTimeDelta(parentSpan);

              case 6:
                _context27.t1 = _context27.sent;
                serverTimeDelta = _context27.t0.abs.call(_context27.t0, _context27.t1);

                if (!(serverTimeDelta > this.config.outOfSyncThreshold())) {
                  _context27.next = 11;
                  break;
                }

                this.queries.dropServerTimeDelta();
                throw _TONClient.TONClientError.clockOutOfSync();

              case 11:
                _context27.next = 13;
                return this.getMessageId(params);

              case 13:
                id = _context27.sent;
                idBase64 = Buffer.from(id, 'hex').toString('base64');
                _context27.next = 17;
                return this.queries.postRequests([{
                  id: idBase64,
                  body: params.messageBodyBase64
                }], parentSpan);

              case 17:
                this.config.log('sendMessage. Request posted');
                return _context27.abrupt("return", id);

              case 19:
              case "end":
                return _context27.stop();
            }
          }
        }, _callee27, this);
      }));

      function sendMessage(_x34, _x35) {
        return _sendMessage.apply(this, arguments);
      }

      return sendMessage;
    }()
  }, {
    key: "processMessage",
    value: function () {
      var _processMessage = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee28(message, resultFields, parentSpan, retryIndex, address, method) {
        return regeneratorRuntime.wrap(function _callee28$(_context28) {
          while (1) {
            switch (_context28.prev = _context28.next) {
              case 0:
                _context28.next = 2;
                return this.sendMessage(message, parentSpan);

              case 2:
                return _context28.abrupt("return", this.waitForTransaction(message, resultFields, parentSpan, retryIndex, address, method));

              case 3:
              case "end":
                return _context28.stop();
            }
          }
        }, _callee28, this);
      }));

      function processMessage(_x36, _x37, _x38, _x39, _x40, _x41) {
        return _processMessage.apply(this, arguments);
      }

      return processMessage;
    }()
  }, {
    key: "waitForTransaction",
    value: function () {
      var _waitForTransaction = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee31(message, resultFields, parentSpan, retryIndex, address, method) {
        var _this5 = this;

        var messageId, config, processingTimeout, promises, serverInfo, operationId, transaction, expire, waitExpired, transactionNow;
        return regeneratorRuntime.wrap(function _callee31$(_context31) {
          while (1) {
            switch (_context31.prev = _context31.next) {
              case 0:
                _context31.next = 2;
                return this.getMessageId(message);

              case 2:
                messageId = _context31.sent;
                config = this.config;
                processingTimeout = config.messageProcessingTimeout(retryIndex);
                promises = [];
                _context31.next = 8;
                return this.queries.getServerInfo(parentSpan);

              case 8:
                serverInfo = _context31.sent;
                operationId = serverInfo.supportsOperationId ? this.queries.generateOperationId() : undefined;
                transaction = null;
                _context31.prev = 11;
                expire = message.expire;

                if (expire) {
                  // calculate timeout according to `expire` value (in seconds)
                  // add processing timeout as master block validation time
                  processingTimeout = expire * 1000 - Date.now() + processingTimeout;

                  waitExpired = /*#__PURE__*/function () {
                    var _ref4 = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee29() {
                      var _block$in_msg_descr$f;

                      var block, transaction_id;
                      return regeneratorRuntime.wrap(function _callee29$(_context29) {
                        while (1) {
                          switch (_context29.prev = _context29.next) {
                            case 0:
                              _context29.next = 2;
                              return _this5.queries.blocks.waitFor({
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
                              block = _context29.sent;

                              if (!transaction) {
                                _context29.next = 5;
                                break;
                              }

                              return _context29.abrupt("return");

                            case 5:
                              transaction_id = block.in_msg_descr && ((_block$in_msg_descr$f = block.in_msg_descr.find(function (msg) {
                                return !!msg.transaction_id;
                              })) === null || _block$in_msg_descr$f === void 0 ? void 0 : _block$in_msg_descr$f.transaction_id);

                              if (transaction_id) {
                                _context29.next = 8;
                                break;
                              }

                              throw _TONClient.TONClientError.internalError('Invalid block received: no transaction ID');

                            case 8:
                              _context29.next = 10;
                              return _this5.queries.transactions.waitFor({
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
                              return _context29.stop();
                          }
                        }
                      }, _callee29);
                    }));

                    return function waitExpired() {
                      return _ref4.apply(this, arguments);
                    };
                  }();

                  promises.push(waitExpired());
                } // wait for message processing transaction


                promises.push(new Promise(function (resolve, reject) {
                  _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee30() {
                    return regeneratorRuntime.wrap(function _callee30$(_context30) {
                      while (1) {
                        switch (_context30.prev = _context30.next) {
                          case 0:
                            _context30.prev = 0;
                            _context30.next = 3;
                            return _this5.queries.transactions.waitFor({
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
                            transaction = _context30.sent;
                            resolve();
                            _context30.next = 10;
                            break;

                          case 7:
                            _context30.prev = 7;
                            _context30.t0 = _context30["catch"](0);
                            reject(_context30.t0);

                          case 10:
                          case "end":
                            return _context30.stop();
                        }
                      }
                    }, _callee30, null, [[0, 7]]);
                  }))();
                }));
                _context31.prev = 15;
                _context31.next = 18;
                return Promise.race(promises);

              case 18:
                _context31.prev = 18;

                if (!(promises.length > 1 && operationId)) {
                  _context31.next = 22;
                  break;
                }

                _context31.next = 22;
                return this.queries.finishOperations([operationId]);

              case 22:
                return _context31.finish(18);

              case 23:
                if (transaction) {
                  _context31.next = 25;
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
                _context31.next = 29;
                return checkTransaction(transaction);

              case 29:
                return _context31.abrupt("return", transaction);

              case 32:
                _context31.prev = 32;
                _context31.t0 = _context31["catch"](11);
                _context31.next = 36;
                return this.resolveDetailedError(_context31.t0, address, method);

              case 36:
                throw _context31.sent;

              case 37:
              case "end":
                return _context31.stop();
            }
          }
        }, _callee31, this, [[11, 32], [15,, 18, 23]]);
      }));

      function waitForTransaction(_x42, _x43, _x44, _x45, _x46, _x47) {
        return _waitForTransaction.apply(this, arguments);
      }

      return waitForTransaction;
    }()
  }, {
    key: "resolveDetailedError",
    value: function () {
      var _resolveDetailedError = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee32(error, address, method) {
        var isAccountCheckingRequired, accounts, account, balance;
        return regeneratorRuntime.wrap(function _callee32$(_context32) {
          while (1) {
            switch (_context32.prev = _context32.next) {
              case 0:
                isAccountCheckingRequired = error.code === _TONClient.TONClientError.code.ACCOUNT_CODE_MISSING || _TONClient.TONClientError.isClientError(error, _TONClient.TONClientError.code.WAIT_FOR_TIMEOUT) || _TONClient.TONClientError.isClientError(error, _TONClient.TONClientError.code.MESSAGE_EXPIRED);

                if (!(isAccountCheckingRequired && address)) {
                  _context32.next = 17;
                  break;
                }

                _context32.next = 4;
                return this.queries.accounts.query({
                  filter: {
                    id: {
                      eq: address
                    }
                  },
                  result: 'balance code_hash',
                  timeout: 1000
                });

              case 4:
                accounts = _context32.sent;

                if (!(accounts.length > 0)) {
                  _context32.next = 14;
                  break;
                }

                account = accounts[0];

                if (!(method === 'run' && !account.code_hash)) {
                  _context32.next = 9;
                  break;
                }

                return _context32.abrupt("return", _TONClient.TONClientError.accountCodeMissing(address, account.balance));

              case 9:
                //$FlowFixMe
                balance = BigInt(account.balance); //$FlowFixMe

                if (!(balance < 1000n)) {
                  _context32.next = 12;
                  break;
                }

                return _context32.abrupt("return", _TONClient.TONClientError.accountBalanceTooLow(address, account.balance));

              case 12:
                _context32.next = 15;
                break;

              case 14:
                return _context32.abrupt("return", _TONClient.TONClientError.accountMissing(address));

              case 15:
                _context32.next = 19;
                break;

              case 17:
                if (!_TONClient.TONClientError.isNodeError(error, 13)) {
                  _context32.next = 19;
                  break;
                }

                return _context32.abrupt("return", _TONClient.TONClientError.accountBalanceTooLow(address || '', '0'));

              case 19:
                return _context32.abrupt("return", error);

              case 20:
              case "end":
                return _context32.stop();
            }
          }
        }, _callee32, this);
      }));

      function resolveDetailedError(_x48, _x49, _x50) {
        return _resolveDetailedError.apply(this, arguments);
      }

      return resolveDetailedError;
    }()
  }, {
    key: "isDeployed",
    value: function () {
      var _isDeployed = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee33(address, parentSpan) {
        var account;
        return regeneratorRuntime.wrap(function _callee33$(_context33) {
          while (1) {
            switch (_context33.prev = _context33.next) {
              case 0:
                _context33.next = 2;
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
                account = _context33.sent;
                return _context33.abrupt("return", account.length > 0);

              case 4:
              case "end":
                return _context33.stop();
            }
          }
        }, _callee33, this);
      }));

      function isDeployed(_x51, _x52) {
        return _isDeployed.apply(this, arguments);
      }

      return isDeployed;
    }()
  }, {
    key: "processDeployMessage",
    value: function () {
      var _processDeployMessage = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee34(params, parentSpan, retryIndex) {
        return regeneratorRuntime.wrap(function _callee34$(_context34) {
          while (1) {
            switch (_context34.prev = _context34.next) {
              case 0:
                this.config.log('processDeployMessage', params);
                _context34.next = 3;
                return this.isDeployed(params.address, parentSpan);

              case 3:
                if (!_context34.sent) {
                  _context34.next = 5;
                  break;
                }

                return _context34.abrupt("return", {
                  address: params.address,
                  alreadyDeployed: true
                });

              case 5:
                _context34.next = 7;
                return this.sendMessage(params.message, parentSpan);

              case 7:
                return _context34.abrupt("return", this.waitForDeployTransaction(params, parentSpan, retryIndex));

              case 8:
              case "end":
                return _context34.stop();
            }
          }
        }, _callee34, this);
      }));

      function processDeployMessage(_x53, _x54, _x55) {
        return _processDeployMessage.apply(this, arguments);
      }

      return processDeployMessage;
    }()
  }, {
    key: "waitForDeployTransaction",
    value: function () {
      var _waitForDeployTransaction = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee35(deployMessage, parentSpan, retryIndex) {
        var transaction;
        return regeneratorRuntime.wrap(function _callee35$(_context35) {
          while (1) {
            switch (_context35.prev = _context35.next) {
              case 0:
                _context35.next = 2;
                return this.waitForTransaction(deployMessage.message, transactionDetails, parentSpan, retryIndex, deployMessage.address, 'deploy');

              case 2:
                transaction = _context35.sent;
                this.config.log('processDeployMessage. End');
                return _context35.abrupt("return", {
                  address: deployMessage.address,
                  alreadyDeployed: false,
                  transaction: transaction
                });

              case 5:
              case "end":
                return _context35.stop();
            }
          }
        }, _callee35, this);
      }));

      function waitForDeployTransaction(_x56, _x57, _x58) {
        return _waitForDeployTransaction.apply(this, arguments);
      }

      return waitForDeployTransaction;
    }()
  }, {
    key: "processRunMessage",
    value: function () {
      var _processRunMessage = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee36(runMessage, parentSpan, retryIndex) {
        return regeneratorRuntime.wrap(function _callee36$(_context36) {
          while (1) {
            switch (_context36.prev = _context36.next) {
              case 0:
                this.config.log('processRunMessage', runMessage);
                _context36.next = 3;
                return this.sendMessage(runMessage.message, parentSpan);

              case 3:
                return _context36.abrupt("return", this.waitForRunTransaction(runMessage, parentSpan, retryIndex));

              case 4:
              case "end":
                return _context36.stop();
            }
          }
        }, _callee36, this);
      }));

      function processRunMessage(_x59, _x60, _x61) {
        return _processRunMessage.apply(this, arguments);
      }

      return processRunMessage;
    }()
  }, {
    key: "waitForRunTransaction",
    value: function () {
      var _waitForRunTransaction = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee37(runMessage, parentSpan, retryIndex) {
        var _this6 = this;

        var transaction, outputMessages, externalMessages, outputs, resultOutput;
        return regeneratorRuntime.wrap(function _callee37$(_context37) {
          while (1) {
            switch (_context37.prev = _context37.next) {
              case 0:
                _context37.next = 2;
                return this.waitForTransaction(runMessage.message, transactionDetails, parentSpan, retryIndex, runMessage.address, 'run');

              case 2:
                transaction = _context37.sent;
                outputMessages = transaction.out_messages;

                if (!(!outputMessages || outputMessages.length === 0)) {
                  _context37.next = 6;
                  break;
                }

                return _context37.abrupt("return", {
                  output: null,
                  transaction: transaction
                });

              case 6:
                externalMessages = outputMessages.filter(function (x) {
                  return x.msg_type === QMessageType.extOut;
                });
                this.config.log('processRunMessage. Before messages parse');
                _context37.next = 10;
                return Promise.all(externalMessages.map(function (x) {
                  return _this6.decodeOutputMessageBody({
                    abi: runMessage.abi,
                    bodyBase64: x.body || ''
                  });
                }));

              case 10:
                outputs = _context37.sent;
                resultOutput = outputs.find(function (x) {
                  return x["function"].toLowerCase() === runMessage.functionName.toLowerCase();
                });
                this.config.log('processRunMessage. End');
                return _context37.abrupt("return", {
                  output: resultOutput ? resultOutput.output : null,
                  transaction: transaction
                });

              case 14:
              case "end":
                return _context37.stop();
            }
          }
        }, _callee37, this);
      }));

      function waitForRunTransaction(_x62, _x63, _x64) {
        return _waitForRunTransaction.apply(this, arguments);
      }

      return waitForRunTransaction;
    }()
  }, {
    key: "processRunMessageLocal",
    value: function () {
      var _processRunMessageLocal = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee38(runMessage, waitParams, parentSpan) {
        var account;
        return regeneratorRuntime.wrap(function _callee38$(_context38) {
          while (1) {
            switch (_context38.prev = _context38.next) {
              case 0:
                this.config.log('processRunMessageLocal', runMessage);
                _context38.next = 3;
                return this.getAccount(runMessage.address, true, waitParams, parentSpan);

              case 3:
                account = _context38.sent;
                return _context38.abrupt("return", this.requestCore('contracts.run.local.msg', {
                  address: runMessage.address,
                  account: account,
                  abi: runMessage.abi,
                  functionName: runMessage.functionName,
                  messageBase64: runMessage.message.messageBodyBase64
                }));

              case 5:
              case "end":
                return _context38.stop();
            }
          }
        }, _callee38, this);
      }));

      function processRunMessageLocal(_x65, _x66, _x67) {
        return _processRunMessageLocal.apply(this, arguments);
      }

      return processRunMessageLocal;
    }() // Fee calculation

  }, {
    key: "calcRunFees",
    value: function () {
      var _calcRunFees = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee39(params, parentSpan) {
        var account;
        return regeneratorRuntime.wrap(function _callee39$(_context39) {
          while (1) {
            switch (_context39.prev = _context39.next) {
              case 0:
                this.config.log('calcRunFees', params);
                _context39.next = 3;
                return this.getAccount(params.address, true, params.waitParams, parentSpan);

              case 3:
                account = _context39.sent;

                if (params.emulateBalance) {
                  account.balance = this.bigBalance;
                }

                return _context39.abrupt("return", this.requestCore('contracts.run.fee', {
                  address: params.address,
                  account: account,
                  abi: params.abi,
                  functionName: params.functionName,
                  input: params.input,
                  keyPair: params.keyPair
                }));

              case 6:
              case "end":
                return _context39.stop();
            }
          }
        }, _callee39, this);
      }));

      function calcRunFees(_x68, _x69) {
        return _calcRunFees.apply(this, arguments);
      }

      return calcRunFees;
    }()
  }, {
    key: "calcDeployFees",
    value: function () {
      var _calcDeployFees = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee40(params, parentSpan) {
        var message;
        return regeneratorRuntime.wrap(function _callee40$(_context40) {
          while (1) {
            switch (_context40.prev = _context40.next) {
              case 0:
                this.config.log('calcDeployFees', params);
                _context40.next = 3;
                return this.createDeployMessage(params);

              case 3:
                message = _context40.sent;
                return _context40.abrupt("return", this.calcMsgProcessFees({
                  address: message.address,
                  message: message.message,
                  emulateBalance: params.emulateBalance,
                  newAccount: params.newAccount
                }, parentSpan));

              case 5:
              case "end":
                return _context40.stop();
            }
          }
        }, _callee40, this);
      }));

      function calcDeployFees(_x70, _x71) {
        return _calcDeployFees.apply(this, arguments);
      }

      return calcDeployFees;
    }()
  }, {
    key: "calcMsgProcessFees",
    value: function () {
      var _calcMsgProcessFees = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee41(params, parentSpan) {
        var account;
        return regeneratorRuntime.wrap(function _callee41$(_context41) {
          while (1) {
            switch (_context41.prev = _context41.next) {
              case 0:
                this.config.log('calcMsgProcessFees', params);
                account = {
                  balance: this.bigBalance,
                  id: params.address,
                  last_paid: Math.floor(Date.now() / 1000)
                };

                if (params.newAccount) {
                  _context41.next = 6;
                  break;
                }

                _context41.next = 5;
                return this.getAccount(params.address, false, params.waitParams, parentSpan);

              case 5:
                account = _context41.sent;

              case 6:
                if (params.emulateBalance) {
                  account.balance = this.bigBalance;
                }

                return _context41.abrupt("return", this.requestCore('contracts.run.fee.msg', {
                  address: params.address,
                  account: account,
                  messageBase64: params.message.messageBodyBase64
                }));

              case 8:
              case "end":
                return _context41.stop();
            }
          }
        }, _callee41, this);
      }));

      function calcMsgProcessFees(_x72, _x73) {
        return _calcMsgProcessFees.apply(this, arguments);
      }

      return calcMsgProcessFees;
    }() // Address processing

  }, {
    key: "convertAddress",
    value: function () {
      var _convertAddress = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee42(params) {
        return regeneratorRuntime.wrap(function _callee42$(_context42) {
          while (1) {
            switch (_context42.prev = _context42.next) {
              case 0:
                return _context42.abrupt("return", this.requestCore('contracts.address.convert', params));

              case 1:
              case "end":
                return _context42.stop();
            }
          }
        }, _callee42, this);
      }));

      function convertAddress(_x74) {
        return _convertAddress.apply(this, arguments);
      }

      return convertAddress;
    }() // Internals

  }, {
    key: "internalDeployNative",
    value: function () {
      var _internalDeployNative = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee43(params) {
        return regeneratorRuntime.wrap(function _callee43$(_context43) {
          while (1) {
            switch (_context43.prev = _context43.next) {
              case 0:
                return _context43.abrupt("return", this.requestCore('contracts.deploy', {
                  abi: params["package"].abi,
                  constructorHeader: params.constructorHeader,
                  constructorParams: params.constructorParams,
                  initParams: params.initParams,
                  imageBase64: params["package"].imageBase64,
                  keyPair: params.keyPair
                }));

              case 1:
              case "end":
                return _context43.stop();
            }
          }
        }, _callee43, this);
      }));

      function internalDeployNative(_x75) {
        return _internalDeployNative.apply(this, arguments);
      }

      return internalDeployNative;
    }()
  }, {
    key: "internalRunNative",
    value: function () {
      var _internalRunNative = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee44(params) {
        return regeneratorRuntime.wrap(function _callee44$(_context44) {
          while (1) {
            switch (_context44.prev = _context44.next) {
              case 0:
                return _context44.abrupt("return", this.requestCore('contracts.run', {
                  address: params.address,
                  abi: params.abi,
                  functionName: params.functionName,
                  header: params.header,
                  input: params.input,
                  keyPair: params.keyPair
                }));

              case 1:
              case "end":
                return _context44.stop();
            }
          }
        }, _callee44, this);
      }));

      function internalRunNative(_x76) {
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
      var _retryCall = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee45(call) {
        var retriesCount, i;
        return regeneratorRuntime.wrap(function _callee45$(_context45) {
          while (1) {
            switch (_context45.prev = _context45.next) {
              case 0:
                retriesCount = this.config.messageRetriesCount();
                i = 0;

              case 2:
                if (!(i <= retriesCount)) {
                  _context45.next = 17;
                  break;
                }

                if (i > 0) {
                  this.config.log("Retry #".concat(i));
                }

                _context45.prev = 4;
                _context45.next = 7;
                return call(i);

              case 7:
                return _context45.abrupt("return", _context45.sent);

              case 10:
                _context45.prev = 10;
                _context45.t0 = _context45["catch"](4);

                if (_TONClient.TONClientError.isMessageExpired(_context45.t0)) {
                  _context45.next = 14;
                  break;
                }

                throw _context45.t0;

              case 14:
                i += 1;
                _context45.next = 2;
                break;

              case 17:
                throw _TONClient.TONClientError.messageExpired();

              case 18:
              case "end":
                return _context45.stop();
            }
          }
        }, _callee45, this, [[4, 10]]);
      }));

      function retryCall(_x77) {
        return _retryCall.apply(this, arguments);
      }

      return retryCall;
    }()
  }, {
    key: "internalDeployJs",
    value: function () {
      var _internalDeployJs = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee47(params, parentSpan) {
        var _this7 = this;

        return regeneratorRuntime.wrap(function _callee47$(_context47) {
          while (1) {
            switch (_context47.prev = _context47.next) {
              case 0:
                this.config.log('Deploy start');
                return _context47.abrupt("return", this.retryCall( /*#__PURE__*/function () {
                  var _ref6 = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee46(retryIndex) {
                    var deployMessage;
                    return regeneratorRuntime.wrap(function _callee46$(_context46) {
                      while (1) {
                        switch (_context46.prev = _context46.next) {
                          case 0:
                            _context46.next = 2;
                            return _this7.createDeployMessage(params, retryIndex);

                          case 2:
                            deployMessage = _context46.sent;
                            _context46.next = 5;
                            return _this7.isDeployed(deployMessage.address, parentSpan);

                          case 5:
                            if (!_context46.sent) {
                              _context46.next = 7;
                              break;
                            }

                            return _context46.abrupt("return", {
                              address: deployMessage.address,
                              alreadyDeployed: true
                            });

                          case 7:
                            _context46.next = 9;
                            return _this7.sendMessage(deployMessage.message, parentSpan);

                          case 9:
                            return _context46.abrupt("return", _this7.waitForDeployTransaction(deployMessage, parentSpan, retryIndex));

                          case 10:
                          case "end":
                            return _context46.stop();
                        }
                      }
                    }, _callee46);
                  }));

                  return function (_x80) {
                    return _ref6.apply(this, arguments);
                  };
                }()));

              case 2:
              case "end":
                return _context47.stop();
            }
          }
        }, _callee47, this);
      }));

      function internalDeployJs(_x78, _x79) {
        return _internalDeployJs.apply(this, arguments);
      }

      return internalDeployJs;
    }()
  }, {
    key: "internalRunJs",
    value: function () {
      var _internalRunJs = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee49(params, parentSpan) {
        var _this8 = this;

        return regeneratorRuntime.wrap(function _callee49$(_context49) {
          while (1) {
            switch (_context49.prev = _context49.next) {
              case 0:
                this.config.log('Run start');
                return _context49.abrupt("return", this.retryCall( /*#__PURE__*/function () {
                  var _ref7 = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee48(retryIndex) {
                    var runMessage;
                    return regeneratorRuntime.wrap(function _callee48$(_context48) {
                      while (1) {
                        switch (_context48.prev = _context48.next) {
                          case 0:
                            _context48.next = 2;
                            return _this8.createRunMessage(params, retryIndex);

                          case 2:
                            runMessage = _context48.sent;
                            _context48.next = 5;
                            return _this8.sendMessage(runMessage.message, parentSpan);

                          case 5:
                            return _context48.abrupt("return", _this8.waitForRunTransaction(runMessage, parentSpan, retryIndex));

                          case 6:
                          case "end":
                            return _context48.stop();
                        }
                      }
                    }, _callee48);
                  }));

                  return function (_x83) {
                    return _ref7.apply(this, arguments);
                  };
                }()));

              case 2:
              case "end":
                return _context49.stop();
            }
          }
        }, _callee49, this);
      }));

      function internalRunJs(_x81, _x82) {
        return _internalRunJs.apply(this, arguments);
      }

      return internalRunJs;
    }()
  }, {
    key: "getAccount",
    value: function () {
      var _getAccount = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee50(address, active, waitParams, parentSpan) {
        var removeTypeName, filter, account;
        return regeneratorRuntime.wrap(function _callee50$(_context50) {
          while (1) {
            switch (_context50.prev = _context50.next) {
              case 0:
                removeTypeName = function _removeTypeName(obj) {
                  if (obj.__typename) {
                    delete obj.__typename;
                  }

                  Object.values(obj).forEach(function (value) {
                    if (!!value && _typeof(value) === 'object') {
                      removeTypeName(value);
                    }
                  });
                };

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
                _context50.next = 7;
                return this.queries.accounts.waitFor(filter, 'id acc_type code data balance balance_other { currency value } last_paid', waitParams && waitParams.timeout, parentSpan);

              case 7:
                account = _context50.sent;
                removeTypeName(account);
                this.config.log('getAccount. Account received', account);
                return _context50.abrupt("return", account);

              case 11:
              case "end":
                return _context50.stop();
            }
          }
        }, _callee50, this);
      }));

      function getAccount(_x84, _x85, _x86, _x87) {
        return _getAccount.apply(this, arguments);
      }

      return getAccount;
    }()
  }, {
    key: "internalRunLocalJs",
    value: function () {
      var _internalRunLocalJs = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee51(params, parentSpan) {
        var account;
        return regeneratorRuntime.wrap(function _callee51$(_context51) {
          while (1) {
            switch (_context51.prev = _context51.next) {
              case 0:
                _context51.next = 2;
                return this.getAccount(params.address, true, params.waitParams, parentSpan);

              case 2:
                account = _context51.sent;
                return _context51.abrupt("return", this.requestCore('contracts.run.local', {
                  address: params.address,
                  account: account,
                  abi: params.abi,
                  functionName: params.functionName,
                  input: params.input,
                  keyPair: params.keyPair
                }));

              case 4:
              case "end":
                return _context51.stop();
            }
          }
        }, _callee51, this);
      }));

      function internalRunLocalJs(_x88, _x89) {
        return _internalRunLocalJs.apply(this, arguments);
      }

      return internalRunLocalJs;
    }()
  }]);

  return TONContractsModule;
}(_TONModule2.TONModule);

exports["default"] = TONContractsModule;
TONContractsModule.moduleName = 'TONContractsModule';

function checkTransaction(_x90) {
  return _checkTransaction.apply(this, arguments);
}

function _checkTransaction() {
  _checkTransaction = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee52(transaction) {
    var nodeError, storage, status, compute, reason, action;
    return regeneratorRuntime.wrap(function _callee52$(_context52) {
      while (1) {
        switch (_context52.prev = _context52.next) {
          case 0:
            nodeError = function _nodeError(message, code, phase) {
              var REPLAY_PROTECTION = 52;
              var MESSAGE_EXPIRED = 57;
              var isNodeSEMessageExpired = phase === TONClientTransactionPhase.computeVm && (code === MESSAGE_EXPIRED || code === REPLAY_PROTECTION);
              return isNodeSEMessageExpired ? _TONClient.TONClientError.messageExpired() : new _TONClient.TONClientError("".concat(message, " (").concat(code, ") at ").concat(phase), code, _TONClient.TONClientError.source.NODE, {
                phase: phase,
                transaction_id: transaction.id
              });
            };

            if (transaction.aborted) {
              _context52.next = 3;
              break;
            }

            return _context52.abrupt("return");

          case 3:
            storage = transaction.storage;

            if (!storage) {
              _context52.next = 10;
              break;
            }

            status = storage.status_change;

            if (!(status === QAccountStatusChange.frozen)) {
              _context52.next = 8;
              break;
            }

            throw nodeError('Account was frozen due storage phase', _TONClient.TONClientError.code.ACCOUNT_FROZEN_OR_DELETED, TONClientTransactionPhase.storage);

          case 8:
            if (!(status === QAccountStatusChange.deleted)) {
              _context52.next = 10;
              break;
            }

            throw nodeError('Account was deleted due storage phase', _TONClient.TONClientError.code.ACCOUNT_FROZEN_OR_DELETED, TONClientTransactionPhase.storage);

          case 10:
            compute = transaction.compute;

            if (!compute) {
              _context52.next = 24;
              break;
            }

            if (!(compute.compute_type === QComputeType.skipped)) {
              _context52.next = 21;
              break;
            }

            reason = compute.skipped_reason;

            if (!(reason === QSkipReason.noState)) {
              _context52.next = 16;
              break;
            }

            throw nodeError('Account has no code and data', _TONClient.TONClientError.code.ACCOUNT_CODE_MISSING, TONClientTransactionPhase.computeSkipped);

          case 16:
            if (!(reason === QSkipReason.badState)) {
              _context52.next = 18;
              break;
            }

            throw nodeError('Account has bad state: frozen or deleted', _TONClient.TONClientError.code.ACCOUNT_FROZEN_OR_DELETED, TONClientTransactionPhase.computeSkipped);

          case 18:
            if (!(reason === QSkipReason.noGas)) {
              _context52.next = 20;
              break;
            }

            throw nodeError('No gas to execute VM', _TONClient.TONClientError.code.ACCOUNT_BALANCE_TOO_LOW, TONClientTransactionPhase.computeSkipped);

          case 20:
            throw nodeError('Compute phase skipped by unknown reason', -1, TONClientTransactionPhase.computeSkipped);

          case 21:
            if (!(compute.compute_type === QComputeType.vm)) {
              _context52.next = 24;
              break;
            }

            if (compute.success) {
              _context52.next = 24;
              break;
            }

            throw nodeError('VM terminated with exception', compute.exit_code || 0, TONClientTransactionPhase.computeVm);

          case 24:
            action = transaction.action;

            if (!action) {
              _context52.next = 28;
              break;
            }

            if (action.success) {
              _context52.next = 28;
              break;
            }

            throw nodeError(action.no_funds ? 'Too low balance to send outbound message' : !action.valid ? 'Outbound message is invalid' : 'Action phase failed', action.result_code || 0, TONClientTransactionPhase.action);

          case 28:
            throw nodeError('Transaction aborted', -1, TONClientTransactionPhase.unknown);

          case 29:
          case "end":
            return _context52.stop();
        }
      }
    }, _callee52);
  }));
  return _checkTransaction.apply(this, arguments);
}

var transactionDetails = "\n    id\n    in_msg\n    tr_type\n    status\n    in_msg\n    out_msgs\n    block_id\n    now\n    aborted\n    lt\n    storage {\n        status_change\n    }\n    compute {\n        compute_type\n        skipped_reason\n        success\n        exit_code\n        gas_fees\n        gas_used\n    }\n    action {\n        success\n        valid\n        result_code\n        no_funds\n    }\n    out_messages {\n        id\n        msg_type\n        body\n    }\n   ";
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy9tb2R1bGVzL1RPTkNvbnRyYWN0c01vZHVsZS5qcyJdLCJuYW1lcyI6WyJUT05BZGRyZXNzU3RyaW5nVmFyaWFudCIsIkFjY291bnRJZCIsIkhleCIsIkJhc2U2NCIsIlRPTkNsaWVudFRyYW5zYWN0aW9uUGhhc2UiLCJzdG9yYWdlIiwiY29tcHV0ZVNraXBwZWQiLCJjb21wdXRlVm0iLCJhY3Rpb24iLCJ1bmtub3duIiwiVE9OQ2xpZW50Q29tcHV0ZVNraXBwZWRTdGF0dXMiLCJub1N0YXRlIiwiYmFkU3RhdGUiLCJub0dhcyIsIlRPTkNsaWVudFN0b3JhZ2VTdGF0dXMiLCJ1bmNoYW5nZWQiLCJmcm96ZW4iLCJkZWxldGVkIiwiUUluTXNnVHlwZSIsImV4dGVybmFsIiwiaWhyIiwiaW1tZWRpYXRlbHkiLCJ0cmFuc2l0IiwiZGlzY2FyZGVkRmluYWwiLCJkaXNjYXJkZWRUcmFuc2l0IiwiUU91dE1zZ1R5cGUiLCJvdXRNc2dOZXciLCJkZXF1ZXVlSW1tZWRpYXRlbHkiLCJkZXF1ZXVlIiwidHJhbnNpdFJlcXVpcmVkIiwibm9uZSIsIlFNZXNzYWdlVHlwZSIsImludGVybmFsIiwiZXh0SW4iLCJleHRPdXQiLCJRTWVzc2FnZVByb2Nlc3NpbmdTdGF0dXMiLCJxdWV1ZWQiLCJwcm9jZXNzaW5nIiwicHJlbGltaW5hcnkiLCJwcm9wb3NlZCIsImZpbmFsaXplZCIsInJlZnVzZWQiLCJ0cmFuc2l0aW5nIiwiUUJsb2NrUHJvY2Vzc2luZ1N0YXR1cyIsIlFTcGxpdFR5cGUiLCJzcGxpdCIsIm1lcmdlIiwiUUFjY291bnRUeXBlIiwidW5pbml0IiwiYWN0aXZlIiwiUVRyYW5zYWN0aW9uVHlwZSIsIm9yZGluYXJ5IiwidGljayIsInRvY2siLCJzcGxpdFByZXBhcmUiLCJzcGxpdEluc3RhbGwiLCJtZXJnZVByZXBhcmUiLCJtZXJnZUluc3RhbGwiLCJRVHJhbnNhY3Rpb25Qcm9jZXNzaW5nU3RhdHVzIiwiUUFjY291bnRTdGF0dXMiLCJub25FeGlzdCIsIlFBY2NvdW50U3RhdHVzQ2hhbmdlIiwiUUNvbXB1dGVUeXBlIiwic2tpcHBlZCIsInZtIiwiUVNraXBSZWFzb24iLCJRQm91bmNlVHlwZSIsIm5lZ0Z1bmRzIiwibm9GdW5kcyIsIm9rIiwicmVtb3ZlUHJvcHMiLCJvYmoiLCJwYXRocyIsInJlc3VsdCIsImZvckVhY2giLCJwYXRoIiwiZG90UG9zIiwiaW5kZXhPZiIsIm5hbWUiLCJzdWJzdHIiLCJjaGlsZCIsInJlZHVjZWRDaGlsZCIsIlRPTkNvbnRyYWN0c01vZHVsZSIsImNvbmZpZyIsImNvbnRleHQiLCJnZXRNb2R1bGUiLCJUT05Db25maWdNb2R1bGUiLCJxdWVyaWVzIiwiVE9OUXVlcmllc01vZHVsZSIsInBhcmFtcyIsInBhcmVudFNwYW4iLCJhY2NvdW50cyIsInF1ZXJ5IiwiaWQiLCJlcSIsImFkZHJlc3MiLCJ1bmRlZmluZWQiLCJsZW5ndGgiLCJiYWxhbmNlR3JhbXMiLCJiYWxhbmNlIiwidHJhY2UiLCJzcGFuIiwic2V0VGFnIiwiaW50ZXJuYWxEZXBsb3lKcyIsImludGVybmFsUnVuSnMiLCJpbnRlcm5hbFJ1bkxvY2FsSnMiLCJjb3JlUGFyYW1zIiwiY29kZUJhc2U2NCIsImRhdGFCYXNlNjQiLCJUT05DbGllbnRFcnJvciIsImFkZHJlc3NSZXF1aXJlZEZvclJ1bkxvY2FsIiwiZ2V0QWNjb3VudCIsImFjY291bnQiLCJjb2RlIiwiZGF0YSIsInJlcXVlc3RDb3JlIiwiY29ucyIsIml0ZW0iLCJpbnZhbGlkQ29ucyIsInB1c2giLCJyZXRyeUluZGV4IiwibG9nIiwiY29uc3RydWN0b3JIZWFkZXIiLCJtYWtlRXhwaXJlSGVhZGVyIiwiYWJpIiwiY29uc3RydWN0b3JQYXJhbXMiLCJpbml0UGFyYW1zIiwiaW1hZ2VCYXNlNjQiLCJrZXlQYWlyIiwid29ya2NoYWluSWQiLCJtZXNzYWdlIiwibWVzc2FnZUlkIiwibWVzc2FnZUJvZHlCYXNlNjQiLCJleHBpcmUiLCJoZWFkZXIiLCJmdW5jdGlvbk5hbWUiLCJpbnB1dCIsInB1YmxpY0tleUhleCIsImFkZHJlc3NIZXgiLCJzaWduUGFyYW1zIiwiZW5jb2RlZCIsImNyZWF0ZVNpZ25lZE1lc3NhZ2UiLCJ1bnNpZ25lZE1lc3NhZ2UiLCJ1bnNpZ25lZEJ5dGVzQmFzZTY0Iiwic2lnbkJ5dGVzQmFzZTY0IiwiZ2V0Qm9jSGFzaCIsImJvY0Jhc2U2NCIsImhhc2giLCJEYXRlIiwibm93Iiwic2VuZE5vZGVSZXF1ZXN0RmFpbGVkIiwiTWF0aCIsInNlcnZlclRpbWVEZWx0YSIsImFicyIsIm91dE9mU3luY1RocmVzaG9sZCIsImRyb3BTZXJ2ZXJUaW1lRGVsdGEiLCJjbG9ja091dE9mU3luYyIsImdldE1lc3NhZ2VJZCIsImlkQmFzZTY0IiwiQnVmZmVyIiwiZnJvbSIsInRvU3RyaW5nIiwicG9zdFJlcXVlc3RzIiwiYm9keSIsInJlc3VsdEZpZWxkcyIsIm1ldGhvZCIsInNlbmRNZXNzYWdlIiwid2FpdEZvclRyYW5zYWN0aW9uIiwicHJvY2Vzc2luZ1RpbWVvdXQiLCJtZXNzYWdlUHJvY2Vzc2luZ1RpbWVvdXQiLCJwcm9taXNlcyIsImdldFNlcnZlckluZm8iLCJzZXJ2ZXJJbmZvIiwib3BlcmF0aW9uSWQiLCJzdXBwb3J0c09wZXJhdGlvbklkIiwiZ2VuZXJhdGVPcGVyYXRpb25JZCIsInRyYW5zYWN0aW9uIiwid2FpdEV4cGlyZWQiLCJibG9ja3MiLCJ3YWl0Rm9yIiwiZmlsdGVyIiwibWFzdGVyIiwibWluX3NoYXJkX2dlbl91dGltZSIsImdlIiwidGltZW91dCIsImJsb2NrIiwidHJhbnNhY3Rpb25faWQiLCJpbl9tc2dfZGVzY3IiLCJmaW5kIiwibXNnIiwiaW50ZXJuYWxFcnJvciIsInRyYW5zYWN0aW9ucyIsIlByb21pc2UiLCJyZXNvbHZlIiwicmVqZWN0IiwiaW5fbXNnIiwic3RhdHVzIiwicmFjZSIsImZpbmlzaE9wZXJhdGlvbnMiLCJtZXNzYWdlRXhwaXJlZCIsInRyYW5zYWN0aW9uTm93IiwiYmxvY2tfaWQiLCJ0b0lTT1N0cmluZyIsImNoZWNrVHJhbnNhY3Rpb24iLCJyZXNvbHZlRGV0YWlsZWRFcnJvciIsImVycm9yIiwiaXNBY2NvdW50Q2hlY2tpbmdSZXF1aXJlZCIsIkFDQ09VTlRfQ09ERV9NSVNTSU5HIiwiaXNDbGllbnRFcnJvciIsIldBSVRfRk9SX1RJTUVPVVQiLCJNRVNTQUdFX0VYUElSRUQiLCJjb2RlX2hhc2giLCJhY2NvdW50Q29kZU1pc3NpbmciLCJCaWdJbnQiLCJhY2NvdW50QmFsYW5jZVRvb0xvdyIsImFjY291bnRNaXNzaW5nIiwiaXNOb2RlRXJyb3IiLCJhY2NfdHlwZSIsImlzRGVwbG95ZWQiLCJhbHJlYWR5RGVwbG95ZWQiLCJ3YWl0Rm9yRGVwbG95VHJhbnNhY3Rpb24iLCJkZXBsb3lNZXNzYWdlIiwidHJhbnNhY3Rpb25EZXRhaWxzIiwicnVuTWVzc2FnZSIsIndhaXRGb3JSdW5UcmFuc2FjdGlvbiIsIm91dHB1dE1lc3NhZ2VzIiwib3V0X21lc3NhZ2VzIiwib3V0cHV0IiwiZXh0ZXJuYWxNZXNzYWdlcyIsIngiLCJtc2dfdHlwZSIsImFsbCIsIm1hcCIsImRlY29kZU91dHB1dE1lc3NhZ2VCb2R5IiwiYm9keUJhc2U2NCIsIm91dHB1dHMiLCJyZXN1bHRPdXRwdXQiLCJ0b0xvd2VyQ2FzZSIsIndhaXRQYXJhbXMiLCJtZXNzYWdlQmFzZTY0IiwiZW11bGF0ZUJhbGFuY2UiLCJiaWdCYWxhbmNlIiwiY3JlYXRlRGVwbG95TWVzc2FnZSIsImNhbGNNc2dQcm9jZXNzRmVlcyIsIm5ld0FjY291bnQiLCJsYXN0X3BhaWQiLCJmbG9vciIsInVzZXJIZWFkZXIiLCJtZXNzYWdlRXhwaXJhdGlvblRpbWVvdXQiLCJpbmNsdWRlcyIsImNhbGwiLCJyZXRyaWVzQ291bnQiLCJtZXNzYWdlUmV0cmllc0NvdW50IiwiaSIsImlzTWVzc2FnZUV4cGlyZWQiLCJyZXRyeUNhbGwiLCJjcmVhdGVSdW5NZXNzYWdlIiwicmVtb3ZlVHlwZU5hbWUiLCJfX3R5cGVuYW1lIiwiT2JqZWN0IiwidmFsdWVzIiwidmFsdWUiLCJ0cmFuc2FjdGlvbkx0IiwibGFzdF90cmFuc19sdCIsIlRPTk1vZHVsZSIsIm1vZHVsZU5hbWUiLCJub2RlRXJyb3IiLCJwaGFzZSIsIlJFUExBWV9QUk9URUNUSU9OIiwiaXNOb2RlU0VNZXNzYWdlRXhwaXJlZCIsInNvdXJjZSIsIk5PREUiLCJhYm9ydGVkIiwic3RhdHVzX2NoYW5nZSIsIkFDQ09VTlRfRlJPWkVOX09SX0RFTEVURUQiLCJjb21wdXRlIiwiY29tcHV0ZV90eXBlIiwicmVhc29uIiwic2tpcHBlZF9yZWFzb24iLCJBQ0NPVU5UX0JBTEFOQ0VfVE9PX0xPVyIsInN1Y2Nlc3MiLCJleGl0X2NvZGUiLCJub19mdW5kcyIsInZhbGlkIiwicmVzdWx0X2NvZGUiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7O0FBS0E7O0FBZ0RBOztBQUNBOztBQUNBOztBQUNBOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFFTyxJQUFNQSx1QkFBdUIsR0FBRztBQUNuQ0MsRUFBQUEsU0FBUyxFQUFFLFdBRHdCO0FBRW5DQyxFQUFBQSxHQUFHLEVBQUUsS0FGOEI7QUFHbkNDLEVBQUFBLE1BQU0sRUFBRTtBQUgyQixDQUFoQzs7QUFNQSxJQUFNQyx5QkFBeUIsR0FBRztBQUNyQ0MsRUFBQUEsT0FBTyxFQUFFLFNBRDRCO0FBRXJDQyxFQUFBQSxjQUFjLEVBQUUsZ0JBRnFCO0FBR3JDQyxFQUFBQSxTQUFTLEVBQUUsV0FIMEI7QUFJckNDLEVBQUFBLE1BQU0sRUFBRSxRQUo2QjtBQUtyQ0MsRUFBQUEsT0FBTyxFQUFFO0FBTDRCLENBQWxDOztBQVFBLElBQU1DLDZCQUE2QixHQUFHO0FBQ3pDQyxFQUFBQSxPQUFPLEVBQUUsQ0FEZ0M7QUFFekNDLEVBQUFBLFFBQVEsRUFBRSxDQUYrQjtBQUd6Q0MsRUFBQUEsS0FBSyxFQUFFO0FBSGtDLENBQXRDOztBQU1BLElBQU1DLHNCQUFzQixHQUFHO0FBQ2xDQyxFQUFBQSxTQUFTLEVBQUUsQ0FEdUI7QUFFbENDLEVBQUFBLE1BQU0sRUFBRSxDQUYwQjtBQUdsQ0MsRUFBQUEs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O0FBQUE7QUFBQSxrQkF5RVk2USxPQUFPLENBQUNDLFlBQVIsS0FBeUJ0TixZQUFZLENBQUNFLEVBekVsRDtBQUFBO0FBQUE7QUFBQTs7QUFBQSxnQkEwRWlCbU4sT0FBTyxDQUFDSyxPQTFFekI7QUFBQTtBQUFBO0FBQUE7O0FBQUEsa0JBMkVzQmQsU0FBUyxDQUNYLDhCQURXLEVBRVhTLE9BQU8sQ0FBQ00sU0FBUixJQUFxQixDQUZWLEVBR1hyUix5QkFBeUIsQ0FBQ0csU0FIZixDQTNFL0I7O0FBQUE7QUFvRlVDLFlBQUFBLE1BcEZWLEdBb0ZtQndLLFdBQVcsQ0FBQ3hLLE1BcEYvQjs7QUFBQSxpQkFxRlFBLE1BckZSO0FBQUE7QUFBQTtBQUFBOztBQUFBLGdCQXNGYUEsTUFBTSxDQUFDZ1IsT0F0RnBCO0FBQUE7QUFBQTtBQUFBOztBQUFBLGtCQXVGa0JkLFNBQVMsQ0FDWGxRLE1BQU0sQ0FBQ2tSLFFBQVAsR0FDTSwwQ0FETixHQUVPLENBQUNsUixNQUFNLENBQUNtUixLQUFSLEdBQWdCLDZCQUFoQixHQUFnRCxxQkFINUMsRUFJWG5SLE1BQU0sQ0FBQ29SLFdBQVAsSUFBc0IsQ0FKWCxFQUtYeFIseUJBQXlCLENBQUNJLE1BTGYsQ0F2RjNCOztBQUFBO0FBQUEsa0JBaUdVa1EsU0FBUyxDQUNYLHFCQURXLEVBRVgsQ0FBQyxDQUZVLEVBR1h0USx5QkFBeUIsQ0FBQ0ssT0FIZixDQWpHbkI7O0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsRzs7OztBQXdHQSxJQUFNcU4sa0JBQWtCLHlkQUF4QiIsInNvdXJjZXNDb250ZW50IjpbIi8qXG4gKiBDb3B5cmlnaHQgMjAxOC0yMDIwIFRPTiBERVYgU09MVVRJT05TIExURC5cbiAqL1xuLy8gQGZsb3dcblxuaW1wb3J0IHtTcGFuLCBTcGFuQ29udGV4dH0gZnJvbSAnb3BlbnRyYWNpbmcnO1xuaW1wb3J0IHR5cGUge1xuICAgIFFBY2NvdW50LFxuICAgIFFCbG9jayxcbiAgICBRTWVzc2FnZSxcbiAgICBRVHJhbnNhY3Rpb24sXG4gICAgVE9OQ29udHJhY3RBQkksXG4gICAgVE9OQ29udHJhY3RBY2NvdW50V2FpdFBhcmFtcyxcbiAgICBUT05Db250cmFjdENvbnZlcnRBZGRyZXNzUGFyYW1zLFxuICAgIFRPTkNvbnRyYWN0Q29udmVydEFkZHJlc3NSZXN1bHQsXG4gICAgVE9OQ29udHJhY3RDcmVhdGVSdW5Cb2R5UGFyYW1zLFxuICAgIFRPTkNvbnRyYWN0Q3JlYXRlUnVuQm9keVJlc3VsdCxcbiAgICBUT05Db250cmFjdENyZWF0ZVNpZ25lZERlcGxveU1lc3NhZ2VQYXJhbXMsXG4gICAgVE9OQ29udHJhY3RDcmVhdGVTaWduZWRNZXNzYWdlUGFyYW1zLFxuICAgIFRPTkNvbnRyYWN0Q3JlYXRlU2lnbmVkUnVuTWVzc2FnZVBhcmFtcyxcbiAgICBUT05Db250cmFjdERlY29kZU1lc3NhZ2VCb2R5UGFyYW1zLFxuICAgIFRPTkNvbnRyYWN0RGVjb2RlTWVzc2FnZUJvZHlSZXN1bHQsXG4gICAgVE9OQ29udHJhY3REZWNvZGVSdW5PdXRwdXRQYXJhbXMsXG4gICAgVE9OQ29udHJhY3REZXBsb3lNZXNzYWdlLFxuICAgIFRPTkNvbnRyYWN0RGVwbG95UGFyYW1zLFxuICAgIFRPTkNvbnRyYWN0RGVwbG95UmVzdWx0LFxuICAgIFRPTkNvbnRyYWN0Q2FsY0RlcGxveUZlZVBhcmFtcyxcbiAgICBUT05Db250cmFjdEJvYyxcbiAgICBUT05Db250cmFjdEdldEJvY0hhc2hSZXN1bHQsXG4gICAgVE9OQ29udHJhY3RHZXRDb2RlRnJvbUltYWdlUGFyYW1zLFxuICAgIFRPTkNvbnRyYWN0R2V0Q29kZUZyb21JbWFnZVJlc3VsdCxcbiAgICBUT05Db250cmFjdEdldERlcGxveURhdGFQYXJhbXMsXG4gICAgVE9OQ29udHJhY3RHZXREZXBsb3lEYXRhUmVzdWx0LFxuICAgIFRPTkNvbnRyYWN0R2V0RnVuY3Rpb25JZFBhcmFtcyxcbiAgICBUT05Db250cmFjdEdldEZ1bmN0aW9uSWRSZXN1bHQsXG4gICAgVE9OQ29udHJhY3RMb2FkUGFyYW1zLFxuICAgIFRPTkNvbnRyYWN0TG9hZFJlc3VsdCxcbiAgICBUT05Db250cmFjdENhbGNSdW5GZWVQYXJhbXMsXG4gICAgVE9OQ29udHJhY3RUcmFuc2FjdGlvbkZlZXMsXG4gICAgVE9OQ29udHJhY3RDYWxjRmVlUmVzdWx0LFxuICAgIFRPTkNvbnRyYWN0Q2FsY01zZ1Byb2Nlc3NpbmdGZWVzUGFyYW1zLFxuICAgIFRPTkNvbnRyYWN0TWVzc2FnZSxcbiAgICBUT05Db250cmFjdFJ1bkxvY2FsUGFyYW1zLFxuICAgIFRPTkNvbnRyYWN0UnVuTWVzc2FnZSxcbiAgICBUT05Db250cmFjdFJ1blBhcmFtcyxcbiAgICBUT05Db250cmFjdFJ1blJlc3VsdCxcbiAgICBUT05Db250cmFjdHMsXG4gICAgVE9OQ29udHJhY3RVbnNpZ25lZERlcGxveU1lc3NhZ2UsXG4gICAgVE9OQ29udHJhY3RVbnNpZ25lZE1lc3NhZ2UsXG4gICAgVE9OQ29udHJhY3RVbnNpZ25lZFJ1bk1lc3NhZ2UsXG4gICAgVE9OQ29udHJhY3RSdW5HZXRQYXJhbXMsXG4gICAgVE9OQ29udHJhY3RSdW5HZXRSZXN1bHQsXG59IGZyb20gJy4uLy4uL3R5cGVzJztcbmltcG9ydCB7VE9OQ2xpZW50RXJyb3J9IGZyb20gJy4uL1RPTkNsaWVudCc7XG5pbXBvcnQge1RPTk1vZHVsZX0gZnJvbSAnLi4vVE9OTW9kdWxlJztcbmltcG9ydCBUT05Db25maWdNb2R1bGUgZnJvbSAnLi9UT05Db25maWdNb2R1bGUnO1xuaW1wb3J0IFRPTlF1ZXJpZXNNb2R1bGUgZnJvbSAnLi9UT05RdWVyaWVzTW9kdWxlJztcblxuZXhwb3J0IGNvbnN0IFRPTkFkZHJlc3NTdHJpbmdWYXJpYW50ID0ge1xuICAgIEFjY291bnRJZDogJ0FjY291bnRJZCcsXG4gICAgSGV4OiAnSGV4JyxcbiAgICBCYXNlNjQ6ICdCYXNlNjQnLFxufTtcblxuZXhwb3J0IGNvbnN0IFRPTkNsaWVudFRyYW5zYWN0aW9uUGhhc2UgPSB7XG4gICAgc3RvcmFnZTogJ3N0b3JhZ2UnLFxuICAgIGNvbXB1dGVTa2lwcGVkOiAnY29tcHV0ZVNraXBwZWQnLFxuICAgIGNvbXB1dGVWbTogJ2NvbXB1dGVWbScsXG4gICAgYWN0aW9uOiAnYWN0aW9uJyxcbiAgICB1bmtub3duOiAndW5rbm93bicsXG59O1xuXG5leHBvcnQgY29uc3QgVE9OQ2xpZW50Q29tcHV0ZVNraXBwZWRTdGF0dXMgPSB7XG4gICAgbm9TdGF0ZTogMCxcbiAgICBiYWRTdGF0ZTogMSxcbiAgICBub0dhczogMixcbn07XG5cbmV4cG9ydCBjb25zdCBUT05DbGllbnRTdG9yYWdlU3RhdHVzID0ge1xuICAgIHVuY2hhbmdlZDogMCxcbiAgICBmcm96ZW46IDEsXG4gICAgZGVsZXRlZDogMixcbn07XG5cbmV4cG9ydCBjb25zdCBRSW5Nc2dUeXBlID0ge1xuICAgIGV4dGVybmFsOiAwLFxuICAgIGlocjogMSxcbiAgICBpbW1lZGlhdGVseTogMixcbiAgICBmaW5hbDogMyxcbiAgICB0cmFuc2l0OiA0LFxuICAgIGRpc2NhcmRlZEZpbmFsOiA1LFxuICAgIGRpc2NhcmRlZFRyYW5zaXQ6IDYsXG59O1xuXG5leHBvcnQgY29uc3QgUU91dE1zZ1R5cGUgPSB7XG4gICAgZXh0ZXJuYWw6IDAsXG4gICAgaW1tZWRpYXRlbHk6IDEsXG4gICAgb3V0TXNnTmV3OiAyLFxuICAgIHRyYW5zaXQ6IDMsXG4gICAgZGVxdWV1ZUltbWVkaWF0ZWx5OiA0LFxuICAgIGRlcXVldWU6IDUsXG4gICAgdHJhbnNpdFJlcXVpcmVkOiA2LFxuICAgIG5vbmU6IC0xLFxufTtcblxuZXhwb3J0IGNvbnN0IFFNZXNzYWdlVHlwZSA9IHtcbiAgICBpbnRlcm5hbDogMCxcbiAgICBleHRJbjogMSxcbiAgICBleHRPdXQ6IDIsXG59O1xuXG5leHBvcnQgY29uc3QgUU1lc3NhZ2VQcm9jZXNzaW5nU3RhdHVzID0ge1xuICAgIHVua25vd246IDAsXG4gICAgcXVldWVkOiAxLFxuICAgIHByb2Nlc3Npbmc6IDIsXG4gICAgcHJlbGltaW5hcnk6IDMsXG4gICAgcHJvcG9zZWQ6IDQsXG4gICAgZmluYWxpemVkOiA1LFxuICAgIHJlZnVzZWQ6IDYsXG4gICAgdHJhbnNpdGluZzogNyxcbn07XG5cbmV4cG9ydCBjb25zdCBRQmxvY2tQcm9jZXNzaW5nU3RhdHVzID0ge1xuICAgIHVua25vd246IDAsXG4gICAgcHJvcG9zZWQ6IDEsXG4gICAgZmluYWxpemVkOiAyLFxuICAgIHJlZnVzZWQ6IDMsXG59O1xuXG5leHBvcnQgY29uc3QgUVNwbGl0VHlwZSA9IHtcbiAgICBub25lOiAwLFxuICAgIHNwbGl0OiAyLFxuICAgIG1lcmdlOiAzLFxufTtcblxuZXhwb3J0IGNvbnN0IFFBY2NvdW50VHlwZSA9IHtcbiAgICB1bmluaXQ6IDAsXG4gICAgYWN0aXZlOiAxLFxuICAgIGZyb3plbjogMixcbn07XG5cbmV4cG9ydCBjb25zdCBRVHJhbnNhY3Rpb25UeXBlID0ge1xuICAgIG9yZGluYXJ5OiAwLFxuICAgIHN0b3JhZ2U6IDEsXG4gICAgdGljazogMixcbiAgICB0b2NrOiAzLFxuICAgIHNwbGl0UHJlcGFyZTogNCxcbiAgICBzcGxpdEluc3RhbGw6IDUsXG4gICAgbWVyZ2VQcmVwYXJlOiA2LFxuICAgIG1lcmdlSW5zdGFsbDogNyxcbn07XG5cbmV4cG9ydCBjb25zdCBRVHJhbnNhY3Rpb25Qcm9jZXNzaW5nU3RhdHVzID0ge1xuICAgIHVua25vd246IDAsXG4gICAgcHJlbGltaW5hcnk6IDEsXG4gICAgcHJvcG9zZWQ6IDIsXG4gICAgZmluYWxpemVkOiAzLFxuICAgIHJlZnVzZWQ6IDQsXG59O1xuXG5leHBvcnQgY29uc3QgUUFjY291bnRTdGF0dXMgPSB7XG4gICAgdW5pbml0OiAwLFxuICAgIGFjdGl2ZTogMSxcbiAgICBmcm96ZW46IDIsXG4gICAgbm9uRXhpc3Q6IDMsXG59O1xuXG5leHBvcnQgY29uc3QgUUFjY291bnRTdGF0dXNDaGFuZ2UgPSB7XG4gICAgdW5jaGFuZ2VkOiAwLFxuICAgIGZyb3plbjogMSxcbiAgICBkZWxldGVkOiAyLFxufTtcblxuZXhwb3J0IGNvbnN0IFFDb21wdXRlVHlwZSA9IHtcbiAgICBza2lwcGVkOiAwLFxuICAgIHZtOiAxLFxufTtcblxuZXhwb3J0IGNvbnN0IFFTa2lwUmVhc29uID0ge1xuICAgIG5vU3RhdGU6IDAsXG4gICAgYmFkU3RhdGU6IDEsXG4gICAgbm9HYXM6IDIsXG59O1xuXG5leHBvcnQgY29uc3QgUUJvdW5jZVR5cGUgPSB7XG4gICAgbmVnRnVuZHM6IDAsXG4gICAgbm9GdW5kczogMSxcbiAgICBvazogMixcbn07XG5cbmV4cG9ydCBmdW5jdGlvbiByZW1vdmVQcm9wcyhvYmo6IHt9LCBwYXRoczogc3RyaW5nW10pOiB7fSB7XG4gICAgbGV0IHJlc3VsdCA9IG9iajtcbiAgICBwYXRocy5mb3JFYWNoKChwYXRoKSA9PiB7XG4gICAgICAgIGNvbnN0IGRvdFBvcyA9IHBhdGguaW5kZXhPZignLicpO1xuICAgICAgICBpZiAoZG90UG9zIDwgMCkge1xuICAgICAgICAgICAgaWYgKHBhdGggaW4gcmVzdWx0KSB7XG4gICAgICAgICAgICAgICAgcmVzdWx0ID0geyAuLi5yZXN1bHQgfTtcbiAgICAgICAgICAgICAgICBkZWxldGUgcmVzdWx0W3BhdGhdO1xuICAgICAgICAgICAgfVxuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgY29uc3QgbmFtZSA9IHBhdGguc3Vic3RyKDAsIGRvdFBvcyk7XG4gICAgICAgICAgICBjb25zdCBjaGlsZCA9IHJlc3VsdFtuYW1lXTtcbiAgICAgICAgICAgIGlmIChjaGlsZCkge1xuICAgICAgICAgICAgICAgIGNvbnN0IHJlZHVjZWRDaGlsZCA9IHJlbW92ZVByb3BzKGNoaWxkLCBbcGF0aC5zdWJzdHIoZG90UG9zICsgMSldKTtcbiAgICAgICAgICAgICAgICBpZiAocmVkdWNlZENoaWxkICE9PSBjaGlsZCkge1xuICAgICAgICAgICAgICAgICAgICByZXN1bHQgPSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAuLi5yZXN1bHQsXG4gICAgICAgICAgICAgICAgICAgICAgICBbbmFtZV06IHJlZHVjZWRDaGlsZCxcbiAgICAgICAgICAgICAgICAgICAgfTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICB9KTtcbiAgICByZXR1cm4gcmVzdWx0O1xufVxuXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBUT05Db250cmFjdHNNb2R1bGUgZXh0ZW5kcyBUT05Nb2R1bGUgaW1wbGVtZW50cyBUT05Db250cmFjdHMge1xuICAgIGNvbmZpZzogVE9OQ29uZmlnTW9kdWxlO1xuXG4gICAgcXVlcmllczogVE9OUXVlcmllc01vZHVsZTtcblxuICAgIGFzeW5jIHNldHVwKCk6IFByb21pc2U8Kj4ge1xuICAgICAgICB0aGlzLmNvbmZpZyA9IHRoaXMuY29udGV4dC5nZXRNb2R1bGUoVE9OQ29uZmlnTW9kdWxlKTtcbiAgICAgICAgdGhpcy5xdWVyaWVzID0gdGhpcy5jb250ZXh0LmdldE1vZHVsZShUT05RdWVyaWVzTW9kdWxlKTtcbiAgICB9XG5cbiAgICBhc3luYyBsb2FkKFxuICAgICAgICBwYXJhbXM6IFRPTkNvbnRyYWN0TG9hZFBhcmFtcyxcbiAgICAgICAgcGFyZW50U3Bhbj86IChTcGFuIHwgU3BhbkNvbnRleHQpLFxuICAgICk6IFByb21pc2U8VE9OQ29udHJhY3RMb2FkUmVzdWx0PiB7XG4gICAgICAgIGNvbnN0IGFjY291bnRzOiBRQWNjb3VudFtdID0gYXdhaXQgdGhpcy5xdWVyaWVzLmFjY291bnRzLnF1ZXJ5KHtcbiAgICAgICAgICAgIGlkOiB7IGVxOiBwYXJhbXMuYWRkcmVzcyB9LFxuICAgICAgICB9LCAnYmFsYW5jZScsIHVuZGVmaW5lZCwgdW5kZWZpbmVkLCB1bmRlZmluZWQsIHBhcmVudFNwYW4pO1xuICAgICAgICBpZiAoYWNjb3VudHMgJiYgYWNjb3VudHMubGVuZ3RoID4gMCkge1xuICAgICAgICAgICAgcmV0dXJuIHtcbiAgICAgICAgICAgICAgICBpZDogcGFyYW1zLmFkZHJlc3MsXG4gICAgICAgICAgICAgICAgYmFsYW5jZUdyYW1zOiBhY2NvdW50c1swXS5iYWxhbmNlLFxuICAgICAgICAgICAgfTtcbiAgICAgICAgfVxuICAgICAgICByZXR1cm4ge1xuICAgICAgICAgICAgaWQ6IG51bGwsXG4gICAgICAgICAgICBiYWxhbmNlR3JhbXM6IG51bGwsXG4gICAgICAgIH07XG4gICAgfVxuXG5cbiAgICAvLyBGYWNhZGUgZnVuY3Rpb25zXG5cbiAgICBhc3luYyBkZXBsb3koXG4gICAgICAgIHBhcmFtczogVE9OQ29udHJhY3REZXBsb3lQYXJhbXMsXG4gICAgICAgIHBhcmVudFNwYW4/OiAoU3BhbiB8IFNwYW5Db250ZXh0KSxcbiAgICApOiBQcm9taXNlPFRPTkNvbnRyYWN0RGVwbG95UmVzdWx0PiB7XG4gICAgICAgIHJldHVybiB0aGlzLmNvbnRleHQudHJhY2UoJ2NvbnRyYWN0cy5kZXBsb3knLCBhc3luYyAoc3BhbjogU3BhbikgPT4ge1xuICAgICAgICAgICAgc3Bhbi5zZXRUYWcoJ3BhcmFtcycsIHJlbW92ZVByb3BzKHBhcmFtcywgWydrZXlQYWlyLnNlY3JldCddKSk7XG4gICAgICAgICAgICByZXR1cm4gdGhpcy5pbnRlcm5hbERlcGxveUpzKHBhcmFtcywgc3Bhbik7XG4gICAgICAgIH0sIHBhcmVudFNwYW4pO1xuICAgIH1cblxuXG4gICAgYXN5bmMgcnVuKFxuICAgICAgICBwYXJhbXM6IFRPTkNvbnRyYWN0UnVuUGFyYW1zLFxuICAgICAgICBwYXJlbnRTcGFuPzogKFNwYW4gfCBTcGFuQ29udGV4dCksXG4gICAgKTogUHJvbWlzZTxUT05Db250cmFjdFJ1blJlc3VsdD4ge1xuICAgICAgICByZXR1cm4gdGhpcy5jb250ZXh0LnRyYWNlKCdjb250cmFjdHMucnVuJywgYXN5bmMgKHNwYW46IFNwYW4pID0+IHtcbiAgICAgICAgICAgIHNwYW4uc2V0VGFnKCdwYXJhbXMnLCByZW1vdmVQcm9wcyhwYXJhbXMsIFsna2V5UGFpci5zZWNyZXQnXSkpO1xuICAgICAgICAgICAgcmV0dXJuIHRoaXMuaW50ZXJuYWxSdW5KcyhwYXJhbXMsIHNwYW4pO1xuICAgICAgICB9LCBwYXJlbnRTcGFuKTtcbiAgICB9XG5cbiAgICBhc3luYyBydW5Mb2NhbChcbiAgICAgICAgcGFyYW1zOiBUT05Db250cmFjdFJ1bkxvY2FsUGFyYW1zLFxuICAgICAgICBwYXJlbnRTcGFuPzogKFNwYW4gfCBTcGFuQ29udGV4dCksXG4gICAgKTogUHJvbWlzZTxUT05Db250cmFjdFJ1blJlc3VsdD4ge1xuICAgICAgICByZXR1cm4gdGhpcy5jb250ZXh0LnRyYWNlKCdjb250cmFjdHMucnVuTG9jYWwnLCBhc3luYyAoc3BhbjogU3BhbikgPT4ge1xuICAgICAgICAgICAgc3Bhbi5zZXRUYWcoJ3BhcmFtcycsIHJlbW92ZVByb3BzKHBhcmFtcywgWydrZXlQYWlyLnNlY3JldCddKSk7XG4gICAgICAgICAgICByZXR1cm4gdGhpcy5pbnRlcm5hbFJ1bkxvY2FsSnMocGFyYW1zLCBzcGFuKTtcbiAgICAgICAgfSwgcGFyZW50U3Bhbik7XG4gICAgfVxuXG4gICAgYXN5bmMgcnVuR2V0KFxuICAgICAgICBwYXJhbXM6IFRPTkNvbnRyYWN0UnVuR2V0UGFyYW1zLFxuICAgICk6IFByb21pc2U8VE9OQ29udHJhY3RSdW5HZXRSZXN1bHQ+IHtcbiAgICAgICAgbGV0IGNvcmVQYXJhbXM6IFRPTkNvbnRyYWN0UnVuR2V0UGFyYW1zID0gcGFyYW1zO1xuICAgICAgICBpZiAoIXBhcmFtcy5jb2RlQmFzZTY0IHx8ICFwYXJhbXMuZGF0YUJhc2U2NCkge1xuICAgICAgICAgICAgaWYgKCFwYXJhbXMuYWRkcmVzcykge1xuICAgICAgICAgICAgICAgIHRocm93IFRPTkNsaWVudEVycm9yLmFkZHJlc3NSZXF1aXJlZEZvclJ1bkxvY2FsKCk7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBjb25zdCBhY2NvdW50OiBhbnkgPSBhd2FpdCB0aGlzLmdldEFjY291bnQocGFyYW1zLmFkZHJlc3MsIHRydWUpO1xuICAgICAgICAgICAgYWNjb3VudC5jb2RlQmFzZTY0ID0gYWNjb3VudC5jb2RlO1xuICAgICAgICAgICAgYWNjb3VudC5kYXRhQmFzZTY0ID0gYWNjb3VudC5kYXRhO1xuICAgICAgICAgICAgZGVsZXRlIGFjY291bnQuY29kZTtcbiAgICAgICAgICAgIGRlbGV0ZSBhY2NvdW50LmRhdGE7XG4gICAgICAgICAgICBjb3JlUGFyYW1zID0ge1xuICAgICAgICAgICAgICAgIC4uLmFjY291bnQsXG4gICAgICAgICAgICAgICAgLi4ucGFyYW1zLFxuICAgICAgICAgICAgfTtcbiAgICAgICAgfVxuICAgICAgICByZXR1cm4gdGhpcy5yZXF1ZXN0Q29yZSgndHZtLmdldCcsIGNvcmVQYXJhbXMpO1xuICAgIH1cblxuICAgIGFycmF5RnJvbUNPTlMoY29uczogYW55W10pOiBhbnlbXSB7XG4gICAgICAgIGNvbnN0IHJlc3VsdCA9IFtdO1xuICAgICAgICBsZXQgaXRlbSA9IGNvbnM7XG4gICAgICAgIHdoaWxlIChpdGVtKSB7XG4gICAgICAgICAgICBpZiAoIWl0ZW0ubGVuZ3RoID09PSAyKSB7XG4gICAgICAgICAgICAgICAgdGhyb3cgVE9OQ2xpZW50RXJyb3IuaW52YWxpZENvbnMoKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIHJlc3VsdC5wdXNoKGl0ZW1bMF0pO1xuICAgICAgICAgICAgaXRlbSA9IGl0ZW1bMV07XG4gICAgICAgIH1cbiAgICAgICAgcmV0dXJuIHJlc3VsdDtcbiAgICB9XG5cblxuICAgIC8vIE1lc3NhZ2UgY3JlYXRpb25cblxuICAgIGFzeW5jIGNyZWF0ZURlcGxveU1lc3NhZ2UoXG4gICAgICAgIHBhcmFtczogVE9OQ29udHJhY3REZXBsb3lQYXJhbXMsXG4gICAgICAgIHJldHJ5SW5kZXg/OiBudW1iZXIsXG4gICAgKTogUHJvbWlzZTxUT05Db250cmFjdERlcGxveU1lc3NhZ2U+IHtcbiAgICAgICAgdGhpcy5jb25maWcubG9nKCdjcmVhdGVEZXBsb3lNZXNzYWdlJywgcGFyYW1zKTtcbiAgICAgICAgY29uc3QgY29uc3RydWN0b3JIZWFkZXIgPSB0aGlzLm1ha2VFeHBpcmVIZWFkZXIoXG4gICAgICAgICAgICBwYXJhbXMucGFja2FnZS5hYmksXG4gICAgICAgICAgICBwYXJhbXMuY29uc3RydWN0b3JIZWFkZXIsXG4gICAgICAgICAgICByZXRyeUluZGV4LFxuICAgICAgICApO1xuICAgICAgICBjb25zdCBtZXNzYWdlOiB7XG4gICAgICAgICAgICBhZGRyZXNzOiBzdHJpbmcsXG4gICAgICAgICAgICBtZXNzYWdlSWQ6IHN0cmluZyxcbiAgICAgICAgICAgIG1lc3NhZ2VCb2R5QmFzZTY0OiBzdHJpbmcsXG4gICAgICAgIH0gPSBhd2FpdCB0aGlzLnJlcXVlc3RDb3JlKCdjb250cmFjdHMuZGVwbG95Lm1lc3NhZ2UnLCB7XG4gICAgICAgICAgICBhYmk6IHBhcmFtcy5wYWNrYWdlLmFiaSxcbiAgICAgICAgICAgIGNvbnN0cnVjdG9ySGVhZGVyLFxuICAgICAgICAgICAgY29uc3RydWN0b3JQYXJhbXM6IHBhcmFtcy5jb25zdHJ1Y3RvclBhcmFtcyxcbiAgICAgICAgICAgIGluaXRQYXJhbXM6IHBhcmFtcy5pbml0UGFyYW1zLFxuICAgICAgICAgICAgaW1hZ2VCYXNlNjQ6IHBhcmFtcy5wYWNrYWdlLmltYWdlQmFzZTY0LFxuICAgICAgICAgICAga2V5UGFpcjogcGFyYW1zLmtleVBhaXIsXG4gICAgICAgICAgICB3b3JrY2hhaW5JZDogcGFyYW1zLndvcmtjaGFpbklkLFxuICAgICAgICB9KTtcbiAgICAgICAgcmV0dXJuIHtcbiAgICAgICAgICAgIG1lc3NhZ2U6IHtcbiAgICAgICAgICAgICAgICBtZXNzYWdlSWQ6IG1lc3NhZ2UubWVzc2FnZUlkLFxuICAgICAgICAgICAgICAgIG1lc3NhZ2VCb2R5QmFzZTY0OiBtZXNzYWdlLm1lc3NhZ2VCb2R5QmFzZTY0LFxuICAgICAgICAgICAgICAgIGV4cGlyZTogY29uc3RydWN0b3JIZWFkZXI/LmV4cGlyZSxcbiAgICAgICAgICAgIH0sXG4gICAgICAgICAgICBhZGRyZXNzOiBtZXNzYWdlLmFkZHJlc3MsXG4gICAgICAgIH07XG4gICAgfVxuXG5cbiAgICBhc3luYyBjcmVhdGVSdW5NZXNzYWdlKFxuICAgICAgICBwYXJhbXM6IFRPTkNvbnRyYWN0UnVuUGFyYW1zLFxuICAgICAgICByZXRyeUluZGV4PzogbnVtYmVyLFxuICAgICk6IFByb21pc2U8VE9OQ29udHJhY3RSdW5NZXNzYWdlPiB7XG4gICAgICAgIHRoaXMuY29uZmlnLmxvZygnY3JlYXRlUnVuTWVzc2FnZScsIHBhcmFtcyk7XG4gICAgICAgIGNvbnN0IGhlYWRlciA9IHRoaXMubWFrZUV4cGlyZUhlYWRlcihcbiAgICAgICAgICAgIHBhcmFtcy5hYmksXG4gICAgICAgICAgICBwYXJhbXMuaGVhZGVyLFxuICAgICAgICAgICAgcmV0cnlJbmRleCxcbiAgICAgICAgKTtcbiAgICAgICAgY29uc3QgbWVzc2FnZSA9IGF3YWl0IHRoaXMucmVxdWVzdENvcmUoJ2NvbnRyYWN0cy5ydW4ubWVzc2FnZScsIHtcbiAgICAgICAgICAgIGFkZHJlc3M6IHBhcmFtcy5hZGRyZXNzLFxuICAgICAgICAgICAgYWJpOiBwYXJhbXMuYWJpLFxuICAgICAgICAgICAgZnVuY3Rpb25OYW1lOiBwYXJhbXMuZnVuY3Rpb25OYW1lLFxuICAgICAgICAgICAgaGVhZGVyLFxuICAgICAgICAgICAgaW5wdXQ6IHBhcmFtcy5pbnB1dCxcbiAgICAgICAgICAgIGtleVBhaXI6IHBhcmFtcy5rZXlQYWlyLFxuICAgICAgICB9KTtcbiAgICAgICAgbWVzc2FnZS5leHBpcmUgPSBoZWFkZXI/LmV4cGlyZTtcbiAgICAgICAgcmV0dXJuIHtcbiAgICAgICAgICAgIGFkZHJlc3M6IHBhcmFtcy5hZGRyZXNzLFxuICAgICAgICAgICAgYWJpOiBwYXJhbXMuYWJpLFxuICAgICAgICAgICAgZnVuY3Rpb25OYW1lOiBwYXJhbXMuZnVuY3Rpb25OYW1lLFxuICAgICAgICAgICAgbWVzc2FnZSxcbiAgICAgICAgfTtcbiAgICB9XG5cbiAgICBhc3luYyBjcmVhdGVVbnNpZ25lZERlcGxveU1lc3NhZ2UoXG4gICAgICAgIHBhcmFtczogVE9OQ29udHJhY3REZXBsb3lQYXJhbXMsXG4gICAgICAgIHJldHJ5SW5kZXg/OiBudW1iZXIsXG4gICAgKTogUHJvbWlzZTxUT05Db250cmFjdFVuc2lnbmVkRGVwbG95TWVzc2FnZT4ge1xuICAgICAgICBjb25zdCBjb25zdHJ1Y3RvckhlYWRlciA9IHRoaXMubWFrZUV4cGlyZUhlYWRlcihcbiAgICAgICAgICAgIHBhcmFtcy5wYWNrYWdlLmFiaSxcbiAgICAgICAgICAgIHBhcmFtcy5jb25zdHJ1Y3RvckhlYWRlcixcbiAgICAgICAgICAgIHJldHJ5SW5kZXgsXG4gICAgICAgICk7XG4gICAgICAgIGNvbnN0IHJlc3VsdDoge1xuICAgICAgICAgICAgZW5jb2RlZDogVE9OQ29udHJhY3RVbnNpZ25lZE1lc3NhZ2UsXG4gICAgICAgICAgICBhZGRyZXNzSGV4OiBzdHJpbmcsXG4gICAgICAgIH0gPSBhd2FpdCB0aGlzLnJlcXVlc3RDb3JlKCdjb250cmFjdHMuZGVwbG95LmVuY29kZV91bnNpZ25lZF9tZXNzYWdlJywge1xuICAgICAgICAgICAgYWJpOiBwYXJhbXMucGFja2FnZS5hYmksXG4gICAgICAgICAgICBjb25zdHJ1Y3RvckhlYWRlcixcbiAgICAgICAgICAgIGNvbnN0cnVjdG9yUGFyYW1zOiBwYXJhbXMuY29uc3RydWN0b3JQYXJhbXMsXG4gICAgICAgICAgICBpbml0UGFyYW1zOiBwYXJhbXMuaW5pdFBhcmFtcyxcbiAgICAgICAgICAgIGltYWdlQmFzZTY0OiBwYXJhbXMucGFja2FnZS5pbWFnZUJhc2U2NCxcbiAgICAgICAgICAgIHB1YmxpY0tleUhleDogcGFyYW1zLmtleVBhaXIucHVibGljLFxuICAgICAgICAgICAgd29ya2NoYWluSWQ6IHBhcmFtcy53b3JrY2hhaW5JZCxcbiAgICAgICAgfSk7XG4gICAgICAgIHJldHVybiB7XG4gICAgICAgICAgICBhZGRyZXNzOiByZXN1bHQuYWRkcmVzc0hleCxcbiAgICAgICAgICAgIHNpZ25QYXJhbXM6IHtcbiAgICAgICAgICAgICAgICAuLi5yZXN1bHQuZW5jb2RlZCxcbiAgICAgICAgICAgICAgICBhYmk6IHBhcmFtcy5wYWNrYWdlLmFiaSxcbiAgICAgICAgICAgICAgICBleHBpcmU6IGNvbnN0cnVjdG9ySGVhZGVyPy5leHBpcmUsXG4gICAgICAgICAgICB9LFxuICAgICAgICB9O1xuICAgIH1cblxuXG4gICAgYXN5bmMgY3JlYXRlVW5zaWduZWRSdW5NZXNzYWdlKFxuICAgICAgICBwYXJhbXM6IFRPTkNvbnRyYWN0UnVuUGFyYW1zLFxuICAgICAgICByZXRyeUluZGV4PzogbnVtYmVyLFxuICAgICk6IFByb21pc2U8VE9OQ29udHJhY3RVbnNpZ25lZFJ1bk1lc3NhZ2U+IHtcbiAgICAgICAgY29uc3QgaGVhZGVyID0gdGhpcy5tYWtlRXhwaXJlSGVhZGVyKFxuICAgICAgICAgICAgcGFyYW1zLmFiaSxcbiAgICAgICAgICAgIHBhcmFtcy5oZWFkZXIsXG4gICAgICAgICAgICByZXRyeUluZGV4LFxuICAgICAgICApO1xuICAgICAgICBjb25zdCBzaWduUGFyYW1zID0gYXdhaXQgdGhpcy5yZXF1ZXN0Q29yZSgnY29udHJhY3RzLnJ1bi5lbmNvZGVfdW5zaWduZWRfbWVzc2FnZScsIHtcbiAgICAgICAgICAgIGFkZHJlc3M6IHBhcmFtcy5hZGRyZXNzLFxuICAgICAgICAgICAgYWJpOiBwYXJhbXMuYWJpLFxuICAgICAgICAgICAgZnVuY3Rpb25OYW1lOiBwYXJhbXMuZnVuY3Rpb25OYW1lLFxuICAgICAgICAgICAgaGVhZGVyLFxuICAgICAgICAgICAgaW5wdXQ6IHBhcmFtcy5pbnB1dCxcbiAgICAgICAgfSk7XG4gICAgICAgIHJldHVybiB7XG4gICAgICAgICAgICBhZGRyZXNzOiBwYXJhbXMuYWRkcmVzcyxcbiAgICAgICAgICAgIGZ1bmN0aW9uTmFtZTogcGFyYW1zLmZ1bmN0aW9uTmFtZSxcbiAgICAgICAgICAgIHNpZ25QYXJhbXM6IHtcbiAgICAgICAgICAgICAgICAuLi5zaWduUGFyYW1zLFxuICAgICAgICAgICAgICAgIGFiaTogcGFyYW1zLmFiaSxcbiAgICAgICAgICAgICAgICBleHBpcmU6IGhlYWRlcj8uZXhwaXJlLFxuICAgICAgICAgICAgfSxcbiAgICAgICAgfTtcbiAgICB9XG5cblxuICAgIGFzeW5jIGNyZWF0ZVNpZ25lZE1lc3NhZ2UoXG4gICAgICAgIHBhcmFtczogVE9OQ29udHJhY3RDcmVhdGVTaWduZWRNZXNzYWdlUGFyYW1zLFxuICAgICk6IFByb21pc2U8VE9OQ29udHJhY3RNZXNzYWdlPiB7XG4gICAgICAgIHJldHVybiB0aGlzLnJlcXVlc3RDb3JlKCdjb250cmFjdHMuZW5jb2RlX21lc3NhZ2Vfd2l0aF9zaWduJywgcGFyYW1zKTtcbiAgICB9XG5cblxuICAgIGFzeW5jIGNyZWF0ZVNpZ25lZERlcGxveU1lc3NhZ2UoXG4gICAgICAgIHBhcmFtczogVE9OQ29udHJhY3RDcmVhdGVTaWduZWREZXBsb3lNZXNzYWdlUGFyYW1zLFxuICAgICk6IFByb21pc2U8VE9OQ29udHJhY3REZXBsb3lNZXNzYWdlPiB7XG4gICAgICAgIGNvbnN0IG1lc3NhZ2UgPSBhd2FpdCB0aGlzLmNyZWF0ZVNpZ25lZE1lc3NhZ2Uoe1xuICAgICAgICAgICAgYWJpOiBwYXJhbXMudW5zaWduZWRNZXNzYWdlLnNpZ25QYXJhbXMuYWJpLFxuICAgICAgICAgICAgdW5zaWduZWRCeXRlc0Jhc2U2NDogcGFyYW1zLnVuc2lnbmVkTWVzc2FnZS5zaWduUGFyYW1zLnVuc2lnbmVkQnl0ZXNCYXNlNjQsXG4gICAgICAgICAgICBzaWduQnl0ZXNCYXNlNjQ6IHBhcmFtcy5zaWduQnl0ZXNCYXNlNjQsXG4gICAgICAgICAgICBwdWJsaWNLZXlIZXg6IHBhcmFtcy5wdWJsaWNLZXlIZXgsXG4gICAgICAgIH0pO1xuICAgICAgICBtZXNzYWdlLmV4cGlyZSA9IHBhcmFtcy51bnNpZ25lZE1lc3NhZ2Uuc2lnblBhcmFtcy5leHBpcmU7XG4gICAgICAgIHJldHVybiB7XG4gICAgICAgICAgICBhZGRyZXNzOiBwYXJhbXMudW5zaWduZWRNZXNzYWdlLmFkZHJlc3MsXG4gICAgICAgICAgICBtZXNzYWdlLFxuICAgICAgICB9O1xuICAgIH1cblxuXG4gICAgYXN5bmMgY3JlYXRlU2lnbmVkUnVuTWVzc2FnZShcbiAgICAgICAgcGFyYW1zOiBUT05Db250cmFjdENyZWF0ZVNpZ25lZFJ1bk1lc3NhZ2VQYXJhbXMsXG4gICAgKTogUHJvbWlzZTxUT05Db250cmFjdFJ1bk1lc3NhZ2U+IHtcbiAgICAgICAgY29uc3QgbWVzc2FnZSA9IGF3YWl0IHRoaXMuY3JlYXRlU2lnbmVkTWVzc2FnZSh7XG4gICAgICAgICAgICBhYmk6IHBhcmFtcy51bnNpZ25lZE1lc3NhZ2Uuc2lnblBhcmFtcy5hYmksXG4gICAgICAgICAgICB1bnNpZ25lZEJ5dGVzQmFzZTY0OiBwYXJhbXMudW5zaWduZWRNZXNzYWdlLnNpZ25QYXJhbXMudW5zaWduZWRCeXRlc0Jhc2U2NCxcbiAgICAgICAgICAgIHNpZ25CeXRlc0Jhc2U2NDogcGFyYW1zLnNpZ25CeXRlc0Jhc2U2NCxcbiAgICAgICAgICAgIHB1YmxpY0tleUhleDogcGFyYW1zLnB1YmxpY0tleUhleCxcbiAgICAgICAgfSk7XG4gICAgICAgIG1lc3NhZ2UuZXhwaXJlID0gcGFyYW1zLnVuc2lnbmVkTWVzc2FnZS5zaWduUGFyYW1zLmV4cGlyZTtcbiAgICAgICAgcmV0dXJuIHtcbiAgICAgICAgICAgIGFkZHJlc3M6IHBhcmFtcy51bnNpZ25lZE1lc3NhZ2UuYWRkcmVzcyxcbiAgICAgICAgICAgIGFiaTogcGFyYW1zLnVuc2lnbmVkTWVzc2FnZS5zaWduUGFyYW1zLmFiaSxcbiAgICAgICAgICAgIGZ1bmN0aW9uTmFtZTogcGFyYW1zLnVuc2lnbmVkTWVzc2FnZS5mdW5jdGlvbk5hbWUsXG4gICAgICAgICAgICBtZXNzYWdlLFxuICAgICAgICB9O1xuICAgIH1cblxuICAgIGFzeW5jIGdldENvZGVGcm9tSW1hZ2UoXG4gICAgICAgIHBhcmFtczogVE9OQ29udHJhY3RHZXRDb2RlRnJvbUltYWdlUGFyYW1zLFxuICAgICk6IFByb21pc2U8VE9OQ29udHJhY3RHZXRDb2RlRnJvbUltYWdlUmVzdWx0PiB7XG4gICAgICAgIHJldHVybiB0aGlzLnJlcXVlc3RDb3JlKCdjb250cmFjdHMuaW1hZ2UuY29kZScsIHBhcmFtcyk7XG4gICAgfVxuXG4gICAgYXN5bmMgZ2V0RGVwbG95RGF0YShcbiAgICAgICAgcGFyYW1zOiBUT05Db250cmFjdEdldERlcGxveURhdGFQYXJhbXMsXG4gICAgKTogUHJvbWlzZTxUT05Db250cmFjdEdldERlcGxveURhdGFSZXN1bHQ+IHtcbiAgICAgICAgcmV0dXJuIHRoaXMucmVxdWVzdENvcmUoJ2NvbnRyYWN0cy5kZXBsb3kuZGF0YScsIHBhcmFtcyk7XG4gICAgfVxuXG4gICAgYXN5bmMgY3JlYXRlUnVuQm9keShcbiAgICAgICAgcGFyYW1zOiBUT05Db250cmFjdENyZWF0ZVJ1bkJvZHlQYXJhbXMsXG4gICAgKTogUHJvbWlzZTxUT05Db250cmFjdENyZWF0ZVJ1bkJvZHlSZXN1bHQ+IHtcbiAgICAgICAgcmV0dXJuIHRoaXMucmVxdWVzdENvcmUoJ2NvbnRyYWN0cy5ydW4uYm9keScsIHBhcmFtcyk7XG4gICAgfVxuXG4gICAgYXN5bmMgZ2V0RnVuY3Rpb25JZChcbiAgICAgICAgcGFyYW1zOiBUT05Db250cmFjdEdldEZ1bmN0aW9uSWRQYXJhbXMsXG4gICAgKTogUHJvbWlzZTxUT05Db250cmFjdEdldEZ1bmN0aW9uSWRSZXN1bHQ+IHtcbiAgICAgICAgcmV0dXJuIHRoaXMucmVxdWVzdENvcmUoJ2NvbnRyYWN0cy5mdW5jdGlvbi5pZCcsIHBhcmFtcyk7XG4gICAgfVxuXG4gICAgYXN5bmMgZ2V0Qm9jSGFzaChcbiAgICAgICAgcGFyYW1zOiBUT05Db250cmFjdEJvYyxcbiAgICApOiBQcm9taXNlPFRPTkNvbnRyYWN0R2V0Qm9jSGFzaFJlc3VsdD4ge1xuICAgICAgICByZXR1cm4gdGhpcy5yZXF1ZXN0Q29yZSgnY29udHJhY3RzLmJvYy5oYXNoJywgcGFyYW1zKTtcbiAgICB9XG5cbiAgICBhc3luYyBwYXJzZU1lc3NhZ2UoXG4gICAgICAgIHBhcmFtczogVE9OQ29udHJhY3RCb2MsXG4gICAgKTogUHJvbWlzZTxRTWVzc2FnZT4ge1xuICAgICAgICByZXR1cm4gdGhpcy5yZXF1ZXN0Q29yZSgnY29udHJhY3RzLnBhcnNlLm1lc3NhZ2UnLCBwYXJhbXMpO1xuICAgIH1cblxuICAgIC8vIE1lc3NhZ2UgcGFyc2luZ1xuXG4gICAgYXN5bmMgZGVjb2RlUnVuT3V0cHV0KFxuICAgICAgICBwYXJhbXM6IFRPTkNvbnRyYWN0RGVjb2RlUnVuT3V0cHV0UGFyYW1zLFxuICAgICk6IFByb21pc2U8VE9OQ29udHJhY3RSdW5SZXN1bHQ+IHtcbiAgICAgICAgcmV0dXJuIHRoaXMucmVxdWVzdENvcmUoJ2NvbnRyYWN0cy5ydW4ub3V0cHV0JywgcGFyYW1zKTtcbiAgICB9XG5cblxuICAgIGFzeW5jIGRlY29kZUlucHV0TWVzc2FnZUJvZHkoXG4gICAgICAgIHBhcmFtczogVE9OQ29udHJhY3REZWNvZGVNZXNzYWdlQm9keVBhcmFtcyxcbiAgICApOiBQcm9taXNlPFRPTkNvbnRyYWN0RGVjb2RlTWVzc2FnZUJvZHlSZXN1bHQ+IHtcbiAgICAgICAgcmV0dXJuIHRoaXMucmVxdWVzdENvcmUoJ2NvbnRyYWN0cy5ydW4udW5rbm93bi5pbnB1dCcsIHBhcmFtcyk7XG4gICAgfVxuXG5cbiAgICBhc3luYyBkZWNvZGVPdXRwdXRNZXNzYWdlQm9keShcbiAgICAgICAgcGFyYW1zOiBUT05Db250cmFjdERlY29kZU1lc3NhZ2VCb2R5UGFyYW1zLFxuICAgICk6IFByb21pc2U8VE9OQ29udHJhY3REZWNvZGVNZXNzYWdlQm9keVJlc3VsdD4ge1xuICAgICAgICByZXR1cm4gdGhpcy5yZXF1ZXN0Q29yZSgnY29udHJhY3RzLnJ1bi51bmtub3duLm91dHB1dCcsIHBhcmFtcyk7XG4gICAgfVxuXG4gICAgLy8gTWVzc2FnZSBwcm9jZXNzaW5nXG5cbiAgICBhc3luYyBnZXRNZXNzYWdlSWQobWVzc2FnZTogVE9OQ29udHJhY3RNZXNzYWdlKTogUHJvbWlzZTxzdHJpbmc+IHtcbiAgICAgICAgcmV0dXJuIG1lc3NhZ2UubWVzc2FnZUlkIHx8IChhd2FpdCB0aGlzLmdldEJvY0hhc2goe1xuICAgICAgICAgICAgYm9jQmFzZTY0OiBtZXNzYWdlLm1lc3NhZ2VCb2R5QmFzZTY0LFxuICAgICAgICB9KSkuaGFzaFxuICAgIH1cblxuICAgIGFzeW5jIHNlbmRNZXNzYWdlKFxuICAgICAgICBwYXJhbXM6IFRPTkNvbnRyYWN0TWVzc2FnZSxcbiAgICAgICAgcGFyZW50U3Bhbj86IChTcGFuIHwgU3BhbkNvbnRleHQpLFxuICAgICk6IFByb21pc2U8c3RyaW5nPiB7XG4gICAgICAgIGNvbnN0IGV4cGlyZSA9IHBhcmFtcy5leHBpcmU7XG4gICAgICAgIGlmIChleHBpcmUgJiYgKERhdGUubm93KCkgPiBleHBpcmUgKiAxMDAwKSkge1xuICAgICAgICAgICAgdGhyb3cgVE9OQ2xpZW50RXJyb3Iuc2VuZE5vZGVSZXF1ZXN0RmFpbGVkKCdNZXNzYWdlIGFscmVhZHkgZXhwaXJlZCcpO1xuICAgICAgICB9XG4gICAgICAgIGNvbnN0IHNlcnZlclRpbWVEZWx0YSA9IE1hdGguYWJzKGF3YWl0IHRoaXMucXVlcmllcy5zZXJ2ZXJUaW1lRGVsdGEocGFyZW50U3BhbikpO1xuICAgICAgICBpZiAoc2VydmVyVGltZURlbHRhID4gdGhpcy5jb25maWcub3V0T2ZTeW5jVGhyZXNob2xkKCkpIHtcbiAgICAgICAgICAgIHRoaXMucXVlcmllcy5kcm9wU2VydmVyVGltZURlbHRhKCk7XG4gICAgICAgICAgICB0aHJvdyBUT05DbGllbnRFcnJvci5jbG9ja091dE9mU3luYygpO1xuICAgICAgICB9XG4gICAgICAgIGNvbnN0IGlkID0gYXdhaXQgdGhpcy5nZXRNZXNzYWdlSWQocGFyYW1zKTtcbiAgICAgICAgY29uc3QgaWRCYXNlNjQgPSBCdWZmZXIuZnJvbShpZCwgJ2hleCcpLnRvU3RyaW5nKCdiYXNlNjQnKTtcbiAgICAgICAgYXdhaXQgdGhpcy5xdWVyaWVzLnBvc3RSZXF1ZXN0cyhbXG4gICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgaWQ6IGlkQmFzZTY0LFxuICAgICAgICAgICAgICAgIGJvZHk6IHBhcmFtcy5tZXNzYWdlQm9keUJhc2U2NCxcbiAgICAgICAgICAgIH0sXG4gICAgICAgIF0sIHBhcmVudFNwYW4pO1xuICAgICAgICB0aGlzLmNvbmZpZy5sb2coJ3NlbmRNZXNzYWdlLiBSZXF1ZXN0IHBvc3RlZCcpO1xuICAgICAgICByZXR1cm4gaWQ7XG4gICAgfVxuXG4gICAgYXN5bmMgcHJvY2Vzc01lc3NhZ2UoXG4gICAgICAgIG1lc3NhZ2U6IFRPTkNvbnRyYWN0TWVzc2FnZSxcbiAgICAgICAgcmVzdWx0RmllbGRzOiBzdHJpbmcsXG4gICAgICAgIHBhcmVudFNwYW4/OiAoU3BhbiB8IFNwYW5Db250ZXh0KSxcbiAgICAgICAgcmV0cnlJbmRleD86IG51bWJlcixcbiAgICAgICAgYWRkcmVzcz86IHN0cmluZyxcbiAgICAgICAgbWV0aG9kPzogJ3J1bicgfCAnZGVwbG95JyxcbiAgICApOiBQcm9taXNlPFFUcmFuc2FjdGlvbj4ge1xuICAgICAgICBhd2FpdCB0aGlzLnNlbmRNZXNzYWdlKG1lc3NhZ2UsIHBhcmVudFNwYW4pO1xuICAgICAgICByZXR1cm4gdGhpcy53YWl0Rm9yVHJhbnNhY3Rpb24obWVzc2FnZSwgcmVzdWx0RmllbGRzLCBwYXJlbnRTcGFuLCByZXRyeUluZGV4LCBhZGRyZXNzLCBtZXRob2QpO1xuICAgIH1cblxuXG4gICAgYXN5bmMgd2FpdEZvclRyYW5zYWN0aW9uKFxuICAgICAgICBtZXNzYWdlOiBUT05Db250cmFjdE1lc3NhZ2UsXG4gICAgICAgIHJlc3VsdEZpZWxkczogc3RyaW5nLFxuICAgICAgICBwYXJlbnRTcGFuPzogKFNwYW4gfCBTcGFuQ29udGV4dCksXG4gICAgICAgIHJldHJ5SW5kZXg/OiBudW1iZXIsXG4gICAgICAgIGFkZHJlc3M/OiBzdHJpbmcsXG4gICAgICAgIG1ldGhvZD86ICdydW4nIHwgJ2RlcGxveScsXG4gICAgKTogUHJvbWlzZTxRVHJhbnNhY3Rpb24+IHtcbiAgICAgICAgY29uc3QgbWVzc2FnZUlkID0gYXdhaXQgdGhpcy5nZXRNZXNzYWdlSWQobWVzc2FnZSk7XG4gICAgICAgIGNvbnN0IGNvbmZpZyA9IHRoaXMuY29uZmlnO1xuICAgICAgICBsZXQgcHJvY2Vzc2luZ1RpbWVvdXQgPSBjb25maWcubWVzc2FnZVByb2Nlc3NpbmdUaW1lb3V0KHJldHJ5SW5kZXgpO1xuICAgICAgICBjb25zdCBwcm9taXNlcyA9IFtdO1xuICAgICAgICBjb25zdCBzZXJ2ZXJJbmZvID0gYXdhaXQgdGhpcy5xdWVyaWVzLmdldFNlcnZlckluZm8ocGFyZW50U3Bhbik7XG4gICAgICAgIGNvbnN0IG9wZXJhdGlvbklkID0gc2VydmVySW5mby5zdXBwb3J0c09wZXJhdGlvbklkXG4gICAgICAgICAgICA/IHRoaXMucXVlcmllcy5nZW5lcmF0ZU9wZXJhdGlvbklkKClcbiAgICAgICAgICAgIDogdW5kZWZpbmVkO1xuICAgICAgICBsZXQgdHJhbnNhY3Rpb246ID9RVHJhbnNhY3Rpb24gPSBudWxsO1xuICAgICAgICB0cnkge1xuICAgICAgICAgICAgY29uc3QgZXhwaXJlID0gbWVzc2FnZS5leHBpcmU7XG4gICAgICAgICAgICBpZiAoZXhwaXJlKSB7XG4gICAgICAgICAgICAgICAgLy8gY2FsY3VsYXRlIHRpbWVvdXQgYWNjb3JkaW5nIHRvIGBleHBpcmVgIHZhbHVlIChpbiBzZWNvbmRzKVxuICAgICAgICAgICAgICAgIC8vIGFkZCBwcm9jZXNzaW5nIHRpbWVvdXQgYXMgbWFzdGVyIGJsb2NrIHZhbGlkYXRpb24gdGltZVxuICAgICAgICAgICAgICAgIHByb2Nlc3NpbmdUaW1lb3V0ID0gZXhwaXJlICogMTAwMCAtIERhdGUubm93KCkgKyBwcm9jZXNzaW5nVGltZW91dDtcblxuICAgICAgICAgICAgICAgIGNvbnN0IHdhaXRFeHBpcmVkID0gYXN5bmMgKCkgPT4ge1xuICAgICAgICAgICAgICAgICAgICAvLyB3YWl0IGZvciBibG9jaywgcHJvZHVjZWQgYWZ0ZXIgYGV4cGlyZWAgdG8gZ3VhcmFudGVlIHRoYXQgbWVzc2FnZSBpcyByZWplY3RlZFxuICAgICAgICAgICAgICAgICAgICBjb25zdCBibG9jazogUUJsb2NrID0gYXdhaXQgdGhpcy5xdWVyaWVzLmJsb2Nrcy53YWl0Rm9yKHtcbiAgICAgICAgICAgICAgICAgICAgICAgIGZpbHRlcjoge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIG1hc3RlcjogeyBtaW5fc2hhcmRfZ2VuX3V0aW1lOiB7IGdlOiBleHBpcmUgfSB9LFxuICAgICAgICAgICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICAgICAgICAgIHJlc3VsdDogJ2luX21zZ19kZXNjciB7IHRyYW5zYWN0aW9uX2lkIH0nLFxuICAgICAgICAgICAgICAgICAgICAgICAgdGltZW91dDogcHJvY2Vzc2luZ1RpbWVvdXQsXG4gICAgICAgICAgICAgICAgICAgICAgICBwYXJlbnRTcGFuLFxuICAgICAgICAgICAgICAgICAgICAgICAgb3BlcmF0aW9uSWQsXG4gICAgICAgICAgICAgICAgICAgIH0pO1xuXG4gICAgICAgICAgICAgICAgICAgIGlmICh0cmFuc2FjdGlvbikge1xuICAgICAgICAgICAgICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICAgICAgICAgICAgICB9XG5cbiAgICAgICAgICAgICAgICAgICAgY29uc3QgdHJhbnNhY3Rpb25faWQgPSBibG9jay5pbl9tc2dfZGVzY3JcbiAgICAgICAgICAgICAgICAgICAgICAgICYmIGJsb2NrLmluX21zZ19kZXNjci5maW5kKG1zZyA9PiAhIW1zZy50cmFuc2FjdGlvbl9pZCk/LnRyYW5zYWN0aW9uX2lkO1xuXG4gICAgICAgICAgICAgICAgICAgIGlmICghdHJhbnNhY3Rpb25faWQpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIHRocm93IFRPTkNsaWVudEVycm9yLmludGVybmFsRXJyb3IoJ0ludmFsaWQgYmxvY2sgcmVjZWl2ZWQ6IG5vIHRyYW5zYWN0aW9uIElEJyk7XG4gICAgICAgICAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgICAgICAgICAvLyBjaGVjayB0aGF0IHRyYW5zYWN0aW9ucyBjb2xsZWN0aW9uIGlzIHVwZGF0ZWRcbiAgICAgICAgICAgICAgICAgICAgYXdhaXQgdGhpcy5xdWVyaWVzLnRyYW5zYWN0aW9ucy53YWl0Rm9yKHtcbiAgICAgICAgICAgICAgICAgICAgICAgIGZpbHRlcjoge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGlkOiB7IGVxOiB0cmFuc2FjdGlvbl9pZCB9LFxuICAgICAgICAgICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICAgICAgICAgIHJlc3VsdDogJ2lkJyxcbiAgICAgICAgICAgICAgICAgICAgICAgIHRpbWVvdXQ6IHByb2Nlc3NpbmdUaW1lb3V0LFxuICAgICAgICAgICAgICAgICAgICAgICAgcGFyZW50U3BhbixcbiAgICAgICAgICAgICAgICAgICAgICAgIG9wZXJhdGlvbklkLFxuICAgICAgICAgICAgICAgICAgICB9KTtcbiAgICAgICAgICAgICAgICB9O1xuXG4gICAgICAgICAgICAgICAgcHJvbWlzZXMucHVzaCh3YWl0RXhwaXJlZCgpKTtcbiAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgLy8gd2FpdCBmb3IgbWVzc2FnZSBwcm9jZXNzaW5nIHRyYW5zYWN0aW9uXG4gICAgICAgICAgICBwcm9taXNlcy5wdXNoKG5ldyBQcm9taXNlKChyZXNvbHZlLCByZWplY3QpID0+IHtcbiAgICAgICAgICAgICAgICAoYXN5bmMgKCkgPT4ge1xuICAgICAgICAgICAgICAgICAgICB0cnkge1xuICAgICAgICAgICAgICAgICAgICAgICAgdHJhbnNhY3Rpb24gPSBhd2FpdCB0aGlzLnF1ZXJpZXMudHJhbnNhY3Rpb25zLndhaXRGb3Ioe1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGZpbHRlcjoge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBpbl9tc2c6IHsgZXE6IG1lc3NhZ2VJZCB9LFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBzdGF0dXM6IHsgZXE6IFFUcmFuc2FjdGlvblByb2Nlc3NpbmdTdGF0dXMuZmluYWxpemVkIH0sXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICByZXN1bHQ6IHJlc3VsdEZpZWxkcyxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB0aW1lb3V0OiBwcm9jZXNzaW5nVGltZW91dCxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBvcGVyYXRpb25JZCxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBwYXJlbnRTcGFuLFxuICAgICAgICAgICAgICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICAgICAgICAgICAgICByZXNvbHZlKCk7XG4gICAgICAgICAgICAgICAgICAgIH0gY2F0Y2ggKGVycm9yKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICByZWplY3QoZXJyb3IpO1xuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgfSkoKTtcbiAgICAgICAgICAgIH0pKTtcblxuICAgICAgICAgICAgdHJ5IHtcbiAgICAgICAgICAgICAgICBhd2FpdCBQcm9taXNlLnJhY2UocHJvbWlzZXMpO1xuICAgICAgICAgICAgfSBmaW5hbGx5IHtcbiAgICAgICAgICAgICAgICBpZiAocHJvbWlzZXMubGVuZ3RoID4gMSAmJiBvcGVyYXRpb25JZCkge1xuICAgICAgICAgICAgICAgICAgICBhd2FpdCB0aGlzLnF1ZXJpZXMuZmluaXNoT3BlcmF0aW9ucyhbb3BlcmF0aW9uSWRdKTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICAgIGlmICghdHJhbnNhY3Rpb24pIHtcbiAgICAgICAgICAgICAgICB0aHJvdyBUT05DbGllbnRFcnJvci5tZXNzYWdlRXhwaXJlZCgpO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgY29uc3QgdHJhbnNhY3Rpb25Ob3cgPSB0cmFuc2FjdGlvbi5ub3cgfHwgMDtcbiAgICAgICAgICAgIHRoaXMuY29uZmlnLmxvZygncHJvY2Vzc01lc3NhZ2UuIHRyYW5zYWN0aW9uIHJlY2VpdmVkJywge1xuICAgICAgICAgICAgICAgIGlkOiB0cmFuc2FjdGlvbi5pZCxcbiAgICAgICAgICAgICAgICBibG9ja19pZDogdHJhbnNhY3Rpb24uYmxvY2tfaWQsXG4gICAgICAgICAgICAgICAgbm93OiBgJHtuZXcgRGF0ZSh0cmFuc2FjdGlvbk5vdyAqIDEwMDApLnRvSVNPU3RyaW5nKCl9ICgke3RyYW5zYWN0aW9uTm93fSlgLFxuICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICBhd2FpdCBjaGVja1RyYW5zYWN0aW9uKHRyYW5zYWN0aW9uKTtcbiAgICAgICAgICAgIHJldHVybiB0cmFuc2FjdGlvbjtcbiAgICAgICAgfSBjYXRjaCAoZXJyb3IpIHtcbiAgICAgICAgICAgIHRocm93IGF3YWl0IHRoaXMucmVzb2x2ZURldGFpbGVkRXJyb3IoZXJyb3IsIGFkZHJlc3MsIG1ldGhvZCk7XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICBhc3luYyByZXNvbHZlRGV0YWlsZWRFcnJvcihcbiAgICAgICAgZXJyb3I6IEVycm9yLFxuICAgICAgICBhZGRyZXNzPzogc3RyaW5nLFxuICAgICAgICBtZXRob2Q/OiAncnVuJyB8ICdkZXBsb3knLFxuICAgICkge1xuICAgICAgICBjb25zdCBpc0FjY291bnRDaGVja2luZ1JlcXVpcmVkID1cbiAgICAgICAgICAgIChlcnJvcjogYW55KS5jb2RlID09PSBUT05DbGllbnRFcnJvci5jb2RlLkFDQ09VTlRfQ09ERV9NSVNTSU5HXG4gICAgICAgICAgICB8fCBUT05DbGllbnRFcnJvci5pc0NsaWVudEVycm9yKGVycm9yLCBUT05DbGllbnRFcnJvci5jb2RlLldBSVRfRk9SX1RJTUVPVVQpXG4gICAgICAgICAgICB8fCBUT05DbGllbnRFcnJvci5pc0NsaWVudEVycm9yKGVycm9yLCBUT05DbGllbnRFcnJvci5jb2RlLk1FU1NBR0VfRVhQSVJFRCk7XG4gICAgICAgIGlmIChpc0FjY291bnRDaGVja2luZ1JlcXVpcmVkICYmIGFkZHJlc3MpIHtcbiAgICAgICAgICAgIGNvbnN0IGFjY291bnRzID0gYXdhaXQgdGhpcy5xdWVyaWVzLmFjY291bnRzLnF1ZXJ5KHtcbiAgICAgICAgICAgICAgICBmaWx0ZXI6IHsgaWQ6IHsgZXE6IGFkZHJlc3MgfSB9LFxuICAgICAgICAgICAgICAgIHJlc3VsdDogJ2JhbGFuY2UgY29kZV9oYXNoJyxcbiAgICAgICAgICAgICAgICB0aW1lb3V0OiAxMDAwLFxuICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICBpZiAoYWNjb3VudHMubGVuZ3RoID4gMCkge1xuICAgICAgICAgICAgICAgIGNvbnN0IGFjY291bnQgPSBhY2NvdW50c1swXTtcbiAgICAgICAgICAgICAgICBpZiAobWV0aG9kID09PSAncnVuJyAmJiAhYWNjb3VudC5jb2RlX2hhc2gpIHtcbiAgICAgICAgICAgICAgICAgICAgcmV0dXJuIFRPTkNsaWVudEVycm9yLmFjY291bnRDb2RlTWlzc2luZyhhZGRyZXNzLCBhY2NvdW50LmJhbGFuY2UpO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAvLyRGbG93Rml4TWVcbiAgICAgICAgICAgICAgICBjb25zdCBiYWxhbmNlID0gQmlnSW50KGFjY291bnQuYmFsYW5jZSk7XG4gICAgICAgICAgICAgICAgLy8kRmxvd0ZpeE1lXG4gICAgICAgICAgICAgICAgaWYgKGJhbGFuY2UgPCAxMDAwbikge1xuICAgICAgICAgICAgICAgICAgICByZXR1cm4gVE9OQ2xpZW50RXJyb3IuYWNjb3VudEJhbGFuY2VUb29Mb3coYWRkcmVzcywgYWNjb3VudC5iYWxhbmNlKVxuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgICAgcmV0dXJuIFRPTkNsaWVudEVycm9yLmFjY291bnRNaXNzaW5nKGFkZHJlc3MpXG4gICAgICAgICAgICB9XG4gICAgICAgIH0gZWxzZSBpZiAoVE9OQ2xpZW50RXJyb3IuaXNOb2RlRXJyb3IoZXJyb3IsIDEzKSkge1xuICAgICAgICAgICAgcmV0dXJuIFRPTkNsaWVudEVycm9yLmFjY291bnRCYWxhbmNlVG9vTG93KGFkZHJlc3MgfHwgJycsICcwJyk7XG4gICAgICAgIH1cbiAgICAgICAgcmV0dXJuIGVycm9yO1xuXG4gICAgfVxuXG4gICAgYXN5bmMgaXNEZXBsb3llZChhZGRyZXNzOiBzdHJpbmcsIHBhcmVudFNwYW4/OiAoU3BhbiB8IFNwYW5Db250ZXh0KSk6IFByb21pc2U8Ym9vbD4ge1xuICAgICAgICBjb25zdCBhY2NvdW50ID0gYXdhaXQgdGhpcy5xdWVyaWVzLmFjY291bnRzLnF1ZXJ5KHtcbiAgICAgICAgICAgIGZpbHRlcjoge1xuICAgICAgICAgICAgICAgIGlkOiB7IGVxOiBhZGRyZXNzIH0sXG4gICAgICAgICAgICAgICAgYWNjX3R5cGU6IHsgZXE6IFFBY2NvdW50VHlwZS5hY3RpdmUgfSxcbiAgICAgICAgICAgIH0sXG4gICAgICAgICAgICByZXN1bHQ6ICdpZCcsXG4gICAgICAgICAgICBwYXJlbnRTcGFuLFxuICAgICAgICB9KTtcbiAgICAgICAgcmV0dXJuIGFjY291bnQubGVuZ3RoID4gMDtcbiAgICB9XG5cbiAgICBhc3luYyBwcm9jZXNzRGVwbG95TWVzc2FnZShcbiAgICAgICAgcGFyYW1zOiBUT05Db250cmFjdERlcGxveU1lc3NhZ2UsXG4gICAgICAgIHBhcmVudFNwYW4/OiAoU3BhbiB8IFNwYW5Db250ZXh0KSxcbiAgICAgICAgcmV0cnlJbmRleD86IG51bWJlcixcbiAgICApOiBQcm9taXNlPFRPTkNvbnRyYWN0RGVwbG95UmVzdWx0PiB7XG4gICAgICAgIHRoaXMuY29uZmlnLmxvZygncHJvY2Vzc0RlcGxveU1lc3NhZ2UnLCBwYXJhbXMpO1xuICAgICAgICBpZiAoYXdhaXQgdGhpcy5pc0RlcGxveWVkKHBhcmFtcy5hZGRyZXNzLCBwYXJlbnRTcGFuKSkge1xuICAgICAgICAgICAgcmV0dXJuIHtcbiAgICAgICAgICAgICAgICBhZGRyZXNzOiBwYXJhbXMuYWRkcmVzcyxcbiAgICAgICAgICAgICAgICBhbHJlYWR5RGVwbG95ZWQ6IHRydWUsXG4gICAgICAgICAgICB9O1xuICAgICAgICB9XG4gICAgICAgIGF3YWl0IHRoaXMuc2VuZE1lc3NhZ2UocGFyYW1zLm1lc3NhZ2UsIHBhcmVudFNwYW4pO1xuICAgICAgICByZXR1cm4gdGhpcy53YWl0Rm9yRGVwbG95VHJhbnNhY3Rpb24oXG4gICAgICAgICAgICBwYXJhbXMsXG4gICAgICAgICAgICBwYXJlbnRTcGFuLFxuICAgICAgICAgICAgcmV0cnlJbmRleCxcbiAgICAgICAgKTtcbiAgICB9XG5cbiAgICBhc3luYyB3YWl0Rm9yRGVwbG95VHJhbnNhY3Rpb24oXG4gICAgICAgIGRlcGxveU1lc3NhZ2U6IFRPTkNvbnRyYWN0RGVwbG95TWVzc2FnZSxcbiAgICAgICAgcGFyZW50U3Bhbj86IChTcGFuIHwgU3BhbkNvbnRleHQpLFxuICAgICAgICByZXRyeUluZGV4PzogbnVtYmVyLFxuICAgICk6IFByb21pc2U8VE9OQ29udHJhY3REZXBsb3lSZXN1bHQ+IHtcbiAgICAgICAgY29uc3QgdHJhbnNhY3Rpb24gPSBhd2FpdCB0aGlzLndhaXRGb3JUcmFuc2FjdGlvbihcbiAgICAgICAgICAgIGRlcGxveU1lc3NhZ2UubWVzc2FnZSxcbiAgICAgICAgICAgIHRyYW5zYWN0aW9uRGV0YWlscyxcbiAgICAgICAgICAgIHBhcmVudFNwYW4sXG4gICAgICAgICAgICByZXRyeUluZGV4LFxuICAgICAgICAgICAgZGVwbG95TWVzc2FnZS5hZGRyZXNzLFxuICAgICAgICAgICAgJ2RlcGxveSdcbiAgICAgICAgKTtcbiAgICAgICAgdGhpcy5jb25maWcubG9nKCdwcm9jZXNzRGVwbG95TWVzc2FnZS4gRW5kJyk7XG4gICAgICAgIHJldHVybiB7XG4gICAgICAgICAgICBhZGRyZXNzOiBkZXBsb3lNZXNzYWdlLmFkZHJlc3MsXG4gICAgICAgICAgICBhbHJlYWR5RGVwbG95ZWQ6IGZhbHNlLFxuICAgICAgICAgICAgdHJhbnNhY3Rpb24sXG4gICAgICAgIH07XG4gICAgfVxuXG5cbiAgICBhc3luYyBwcm9jZXNzUnVuTWVzc2FnZShcbiAgICAgICAgcnVuTWVzc2FnZTogVE9OQ29udHJhY3RSdW5NZXNzYWdlLFxuICAgICAgICBwYXJlbnRTcGFuPzogKFNwYW4gfCBTcGFuQ29udGV4dCksXG4gICAgICAgIHJldHJ5SW5kZXg/OiBudW1iZXIsXG4gICAgKTogUHJvbWlzZTxUT05Db250cmFjdFJ1blJlc3VsdD4ge1xuICAgICAgICB0aGlzLmNvbmZpZy5sb2coJ3Byb2Nlc3NSdW5NZXNzYWdlJywgcnVuTWVzc2FnZSk7XG4gICAgICAgIGF3YWl0IHRoaXMuc2VuZE1lc3NhZ2UocnVuTWVzc2FnZS5tZXNzYWdlLCBwYXJlbnRTcGFuKTtcbiAgICAgICAgcmV0dXJuIHRoaXMud2FpdEZvclJ1blRyYW5zYWN0aW9uKHJ1bk1lc3NhZ2UsIHBhcmVudFNwYW4sIHJldHJ5SW5kZXgpO1xuICAgIH1cblxuICAgIGFzeW5jIHdhaXRGb3JSdW5UcmFuc2FjdGlvbihcbiAgICAgICAgcnVuTWVzc2FnZTogVE9OQ29udHJhY3RSdW5NZXNzYWdlLFxuICAgICAgICBwYXJlbnRTcGFuPzogKFNwYW4gfCBTcGFuQ29udGV4dCksXG4gICAgICAgIHJldHJ5SW5kZXg/OiBudW1iZXIsXG4gICAgKTogUHJvbWlzZTxUT05Db250cmFjdFJ1blJlc3VsdD4ge1xuICAgICAgICBjb25zdCB0cmFuc2FjdGlvbiA9IGF3YWl0IHRoaXMud2FpdEZvclRyYW5zYWN0aW9uKFxuICAgICAgICAgICAgcnVuTWVzc2FnZS5tZXNzYWdlLFxuICAgICAgICAgICAgdHJhbnNhY3Rpb25EZXRhaWxzLFxuICAgICAgICAgICAgcGFyZW50U3BhbixcbiAgICAgICAgICAgIHJldHJ5SW5kZXgsXG4gICAgICAgICAgICBydW5NZXNzYWdlLmFkZHJlc3MsXG4gICAgICAgICAgICAncnVuJ1xuICAgICAgICApO1xuICAgICAgICBjb25zdCBvdXRwdXRNZXNzYWdlcyA9IHRyYW5zYWN0aW9uLm91dF9tZXNzYWdlcztcbiAgICAgICAgaWYgKCFvdXRwdXRNZXNzYWdlcyB8fCBvdXRwdXRNZXNzYWdlcy5sZW5ndGggPT09IDApIHtcbiAgICAgICAgICAgIHJldHVybiB7XG4gICAgICAgICAgICAgICAgb3V0cHV0OiBudWxsLFxuICAgICAgICAgICAgICAgIHRyYW5zYWN0aW9uLFxuICAgICAgICAgICAgfTtcbiAgICAgICAgfVxuICAgICAgICBjb25zdCBleHRlcm5hbE1lc3NhZ2VzOiBRTWVzc2FnZVtdID0gb3V0cHV0TWVzc2FnZXMuZmlsdGVyKCh4OiBRTWVzc2FnZSkgPT4ge1xuICAgICAgICAgICAgcmV0dXJuIHgubXNnX3R5cGUgPT09IFFNZXNzYWdlVHlwZS5leHRPdXQ7XG4gICAgICAgIH0pO1xuICAgICAgICB0aGlzLmNvbmZpZy5sb2coJ3Byb2Nlc3NSdW5NZXNzYWdlLiBCZWZvcmUgbWVzc2FnZXMgcGFyc2UnKTtcbiAgICAgICAgY29uc3Qgb3V0cHV0cyA9IGF3YWl0IFByb21pc2UuYWxsKGV4dGVybmFsTWVzc2FnZXMubWFwKCh4OiBRTWVzc2FnZSkgPT4ge1xuICAgICAgICAgICAgcmV0dXJuIHRoaXMuZGVjb2RlT3V0cHV0TWVzc2FnZUJvZHkoe1xuICAgICAgICAgICAgICAgIGFiaTogcnVuTWVzc2FnZS5hYmksXG4gICAgICAgICAgICAgICAgYm9keUJhc2U2NDogeC5ib2R5IHx8ICcnLFxuICAgICAgICAgICAgfSk7XG4gICAgICAgIH0pKTtcbiAgICAgICAgY29uc3QgcmVzdWx0T3V0cHV0ID0gb3V0cHV0cy5maW5kKCh4OiBUT05Db250cmFjdERlY29kZU1lc3NhZ2VCb2R5UmVzdWx0KSA9PiB7XG4gICAgICAgICAgICByZXR1cm4geC5mdW5jdGlvbi50b0xvd2VyQ2FzZSgpID09PSBydW5NZXNzYWdlLmZ1bmN0aW9uTmFtZS50b0xvd2VyQ2FzZSgpO1xuICAgICAgICB9KTtcbiAgICAgICAgdGhpcy5jb25maWcubG9nKCdwcm9jZXNzUnVuTWVzc2FnZS4gRW5kJyk7XG4gICAgICAgIHJldHVybiB7XG4gICAgICAgICAgICBvdXRwdXQ6IHJlc3VsdE91dHB1dCA/IHJlc3VsdE91dHB1dC5vdXRwdXQgOiBudWxsLFxuICAgICAgICAgICAgdHJhbnNhY3Rpb24sXG4gICAgICAgIH07XG4gICAgfVxuXG4gICAgYXN5bmMgcHJvY2Vzc1J1bk1lc3NhZ2VMb2NhbChcbiAgICAgICAgcnVuTWVzc2FnZTogVE9OQ29udHJhY3RSdW5NZXNzYWdlLFxuICAgICAgICB3YWl0UGFyYW1zPzogVE9OQ29udHJhY3RBY2NvdW50V2FpdFBhcmFtcyxcbiAgICAgICAgcGFyZW50U3Bhbj86IChTcGFuIHwgU3BhbkNvbnRleHQpLFxuICAgICk6IFByb21pc2U8VE9OQ29udHJhY3RSdW5SZXN1bHQ+IHtcbiAgICAgICAgdGhpcy5jb25maWcubG9nKCdwcm9jZXNzUnVuTWVzc2FnZUxvY2FsJywgcnVuTWVzc2FnZSk7XG5cbiAgICAgICAgY29uc3QgYWNjb3VudCA9IGF3YWl0IHRoaXMuZ2V0QWNjb3VudChydW5NZXNzYWdlLmFkZHJlc3MsIHRydWUsIHdhaXRQYXJhbXMsIHBhcmVudFNwYW4pO1xuXG4gICAgICAgIHJldHVybiB0aGlzLnJlcXVlc3RDb3JlKCdjb250cmFjdHMucnVuLmxvY2FsLm1zZycsIHtcbiAgICAgICAgICAgIGFkZHJlc3M6IHJ1bk1lc3NhZ2UuYWRkcmVzcyxcbiAgICAgICAgICAgIGFjY291bnQsXG4gICAgICAgICAgICBhYmk6IHJ1bk1lc3NhZ2UuYWJpLFxuICAgICAgICAgICAgZnVuY3Rpb25OYW1lOiBydW5NZXNzYWdlLmZ1bmN0aW9uTmFtZSxcbiAgICAgICAgICAgIG1lc3NhZ2VCYXNlNjQ6IHJ1bk1lc3NhZ2UubWVzc2FnZS5tZXNzYWdlQm9keUJhc2U2NCxcbiAgICAgICAgfSk7XG4gICAgfVxuXG4gICAgLy8gRmVlIGNhbGN1bGF0aW9uXG5cbiAgICBiaWdCYWxhbmNlID0gJzB4MTAwMDAwMDAwMDAwMDAnO1xuXG4gICAgYXN5bmMgY2FsY1J1bkZlZXMoXG4gICAgICAgIHBhcmFtczogVE9OQ29udHJhY3RDYWxjUnVuRmVlUGFyYW1zLFxuICAgICAgICBwYXJlbnRTcGFuPzogKFNwYW4gfCBTcGFuQ29udGV4dCksXG4gICAgKTogUHJvbWlzZTxUT05Db250cmFjdENhbGNGZWVSZXN1bHQ+IHtcbiAgICAgICAgdGhpcy5jb25maWcubG9nKCdjYWxjUnVuRmVlcycsIHBhcmFtcyk7XG5cbiAgICAgICAgY29uc3QgYWNjb3VudCA9IGF3YWl0IHRoaXMuZ2V0QWNjb3VudChwYXJhbXMuYWRkcmVzcywgdHJ1ZSwgcGFyYW1zLndhaXRQYXJhbXMsIHBhcmVudFNwYW4pO1xuXG4gICAgICAgIGlmIChwYXJhbXMuZW11bGF0ZUJhbGFuY2UpIHtcbiAgICAgICAgICAgIGFjY291bnQuYmFsYW5jZSA9IHRoaXMuYmlnQmFsYW5jZTtcbiAgICAgICAgfVxuXG4gICAgICAgIHJldHVybiB0aGlzLnJlcXVlc3RDb3JlKCdjb250cmFjdHMucnVuLmZlZScsIHtcbiAgICAgICAgICAgIGFkZHJlc3M6IHBhcmFtcy5hZGRyZXNzLFxuICAgICAgICAgICAgYWNjb3VudCxcbiAgICAgICAgICAgIGFiaTogcGFyYW1zLmFiaSxcbiAgICAgICAgICAgIGZ1bmN0aW9uTmFtZTogcGFyYW1zLmZ1bmN0aW9uTmFtZSxcbiAgICAgICAgICAgIGlucHV0OiBwYXJhbXMuaW5wdXQsXG4gICAgICAgICAgICBrZXlQYWlyOiBwYXJhbXMua2V5UGFpcixcbiAgICAgICAgfSk7XG4gICAgfVxuXG4gICAgYXN5bmMgY2FsY0RlcGxveUZlZXMoXG4gICAgICAgIHBhcmFtczogVE9OQ29udHJhY3RDYWxjRGVwbG95RmVlUGFyYW1zLFxuICAgICAgICBwYXJlbnRTcGFuPzogKFNwYW4gfCBTcGFuQ29udGV4dCksXG4gICAgKTogUHJvbWlzZTxUT05Db250cmFjdENhbGNGZWVSZXN1bHQ+IHtcbiAgICAgICAgdGhpcy5jb25maWcubG9nKCdjYWxjRGVwbG95RmVlcycsIHBhcmFtcyk7XG5cbiAgICAgICAgY29uc3QgbWVzc2FnZSA9IGF3YWl0IHRoaXMuY3JlYXRlRGVwbG95TWVzc2FnZShwYXJhbXMpO1xuXG4gICAgICAgIHJldHVybiB0aGlzLmNhbGNNc2dQcm9jZXNzRmVlcyh7XG4gICAgICAgICAgICBhZGRyZXNzOiBtZXNzYWdlLmFkZHJlc3MsXG4gICAgICAgICAgICBtZXNzYWdlOiBtZXNzYWdlLm1lc3NhZ2UsXG4gICAgICAgICAgICBlbXVsYXRlQmFsYW5jZTogcGFyYW1zLmVtdWxhdGVCYWxhbmNlLFxuICAgICAgICAgICAgbmV3QWNjb3VudDogcGFyYW1zLm5ld0FjY291bnQsXG4gICAgICAgIH0sIHBhcmVudFNwYW4pO1xuICAgIH1cblxuICAgIGFzeW5jIGNhbGNNc2dQcm9jZXNzRmVlcyhcbiAgICAgICAgcGFyYW1zOiBUT05Db250cmFjdENhbGNNc2dQcm9jZXNzaW5nRmVlc1BhcmFtcyxcbiAgICAgICAgcGFyZW50U3Bhbj86IChTcGFuIHwgU3BhbkNvbnRleHQpLFxuICAgICk6IFByb21pc2U8VE9OQ29udHJhY3RDYWxjRmVlUmVzdWx0PiB7XG4gICAgICAgIHRoaXMuY29uZmlnLmxvZygnY2FsY01zZ1Byb2Nlc3NGZWVzJywgcGFyYW1zKTtcblxuICAgICAgICBsZXQgYWNjb3VudDogUUFjY291bnQgPSB7XG4gICAgICAgICAgICBiYWxhbmNlOiB0aGlzLmJpZ0JhbGFuY2UsXG4gICAgICAgICAgICBpZDogcGFyYW1zLmFkZHJlc3MsXG4gICAgICAgICAgICBsYXN0X3BhaWQ6IE1hdGguZmxvb3IoRGF0ZS5ub3coKSAvIDEwMDApLFxuICAgICAgICB9O1xuXG4gICAgICAgIGlmICghcGFyYW1zLm5ld0FjY291bnQpIHtcbiAgICAgICAgICAgIGFjY291bnQgPSBhd2FpdCB0aGlzLmdldEFjY291bnQocGFyYW1zLmFkZHJlc3MsIGZhbHNlLCBwYXJhbXMud2FpdFBhcmFtcywgcGFyZW50U3Bhbik7XG4gICAgICAgIH1cblxuICAgICAgICBpZiAocGFyYW1zLmVtdWxhdGVCYWxhbmNlKSB7XG4gICAgICAgICAgICBhY2NvdW50LmJhbGFuY2UgPSB0aGlzLmJpZ0JhbGFuY2U7XG4gICAgICAgIH1cblxuICAgICAgICByZXR1cm4gdGhpcy5yZXF1ZXN0Q29yZSgnY29udHJhY3RzLnJ1bi5mZWUubXNnJywge1xuICAgICAgICAgICAgYWRkcmVzczogcGFyYW1zLmFkZHJlc3MsXG4gICAgICAgICAgICBhY2NvdW50LFxuICAgICAgICAgICAgbWVzc2FnZUJhc2U2NDogcGFyYW1zLm1lc3NhZ2UubWVzc2FnZUJvZHlCYXNlNjQsXG4gICAgICAgIH0pO1xuICAgIH1cblxuICAgIC8vIEFkZHJlc3MgcHJvY2Vzc2luZ1xuXG4gICAgYXN5bmMgY29udmVydEFkZHJlc3MoXG4gICAgICAgIHBhcmFtczogVE9OQ29udHJhY3RDb252ZXJ0QWRkcmVzc1BhcmFtcyxcbiAgICApOiBQcm9taXNlPFRPTkNvbnRyYWN0Q29udmVydEFkZHJlc3NSZXN1bHQ+IHtcbiAgICAgICAgcmV0dXJuIHRoaXMucmVxdWVzdENvcmUoJ2NvbnRyYWN0cy5hZGRyZXNzLmNvbnZlcnQnLCBwYXJhbXMpO1xuICAgIH1cblxuICAgIC8vIEludGVybmFsc1xuXG4gICAgYXN5bmMgaW50ZXJuYWxEZXBsb3lOYXRpdmUocGFyYW1zOiBUT05Db250cmFjdERlcGxveVBhcmFtcyk6IFByb21pc2U8VE9OQ29udHJhY3REZXBsb3lSZXN1bHQ+IHtcbiAgICAgICAgcmV0dXJuIHRoaXMucmVxdWVzdENvcmUoJ2NvbnRyYWN0cy5kZXBsb3knLCB7XG4gICAgICAgICAgICBhYmk6IHBhcmFtcy5wYWNrYWdlLmFiaSxcbiAgICAgICAgICAgIGNvbnN0cnVjdG9ySGVhZGVyOiBwYXJhbXMuY29uc3RydWN0b3JIZWFkZXIsXG4gICAgICAgICAgICBjb25zdHJ1Y3RvclBhcmFtczogcGFyYW1zLmNvbnN0cnVjdG9yUGFyYW1zLFxuICAgICAgICAgICAgaW5pdFBhcmFtczogcGFyYW1zLmluaXRQYXJhbXMsXG4gICAgICAgICAgICBpbWFnZUJhc2U2NDogcGFyYW1zLnBhY2thZ2UuaW1hZ2VCYXNlNjQsXG4gICAgICAgICAgICBrZXlQYWlyOiBwYXJhbXMua2V5UGFpcixcbiAgICAgICAgfSk7XG4gICAgfVxuXG5cbiAgICBhc3luYyBpbnRlcm5hbFJ1bk5hdGl2ZShwYXJhbXM6IFRPTkNvbnRyYWN0UnVuUGFyYW1zKTogUHJvbWlzZTxUT05Db250cmFjdFJ1blJlc3VsdD4ge1xuICAgICAgICByZXR1cm4gdGhpcy5yZXF1ZXN0Q29yZSgnY29udHJhY3RzLnJ1bicsIHtcbiAgICAgICAgICAgIGFkZHJlc3M6IHBhcmFtcy5hZGRyZXNzLFxuICAgICAgICAgICAgYWJpOiBwYXJhbXMuYWJpLFxuICAgICAgICAgICAgZnVuY3Rpb25OYW1lOiBwYXJhbXMuZnVuY3Rpb25OYW1lLFxuICAgICAgICAgICAgaGVhZGVyOiBwYXJhbXMuaGVhZGVyLFxuICAgICAgICAgICAgaW5wdXQ6IHBhcmFtcy5pbnB1dCxcbiAgICAgICAgICAgIGtleVBhaXI6IHBhcmFtcy5rZXlQYWlyLFxuICAgICAgICB9KTtcbiAgICB9XG5cbiAgICBtYWtlRXhwaXJlSGVhZGVyKFxuICAgICAgICBhYmk6IFRPTkNvbnRyYWN0QUJJLFxuICAgICAgICB1c2VySGVhZGVyPzogYW55LFxuICAgICAgICByZXRyeUluZGV4PzogbnVtYmVyLFxuICAgICk6IGFueSB7XG4gICAgICAgIGNvbnN0IHRpbWVvdXQgPSB0aGlzLmNvbmZpZy5tZXNzYWdlRXhwaXJhdGlvblRpbWVvdXQocmV0cnlJbmRleCk7XG4gICAgICAgIGlmIChhYmkuaGVhZGVyICYmIGFiaS5oZWFkZXIuaW5jbHVkZXMoJ2V4cGlyZScpICYmICF1c2VySGVhZGVyPy5leHBpcmUpIHtcbiAgICAgICAgICAgIHJldHVybiB7XG4gICAgICAgICAgICAgICAgLi4udXNlckhlYWRlcixcbiAgICAgICAgICAgICAgICBleHBpcmU6IE1hdGguZmxvb3IoKERhdGUubm93KCkgKyB0aW1lb3V0KSAvIDEwMDApICsgMSxcbiAgICAgICAgICAgIH07XG4gICAgICAgIH1cbiAgICAgICAgcmV0dXJuIHVzZXJIZWFkZXI7XG4gICAgfVxuXG4gICAgYXN5bmMgcmV0cnlDYWxsKGNhbGw6IChpbmRleDogbnVtYmVyKSA9PiBQcm9taXNlPGFueT4pOiBQcm9taXNlPGFueT4ge1xuICAgICAgICBjb25zdCByZXRyaWVzQ291bnQgPSB0aGlzLmNvbmZpZy5tZXNzYWdlUmV0cmllc0NvdW50KCk7XG4gICAgICAgIGZvciAobGV0IGkgPSAwOyBpIDw9IHJldHJpZXNDb3VudDsgaSArPSAxKSB7XG4gICAgICAgICAgICBpZiAoaSA+IDApIHtcbiAgICAgICAgICAgICAgICB0aGlzLmNvbmZpZy5sb2coYFJldHJ5ICMke2l9YCk7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICB0cnkge1xuICAgICAgICAgICAgICAgIHJldHVybiBhd2FpdCBjYWxsKGkpO1xuICAgICAgICAgICAgfSBjYXRjaCAoZXJyb3IpIHtcbiAgICAgICAgICAgICAgICBpZiAoIVRPTkNsaWVudEVycm9yLmlzTWVzc2FnZUV4cGlyZWQoZXJyb3IpKSB7XG4gICAgICAgICAgICAgICAgICAgIHRocm93IGVycm9yO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgICB0aHJvdyBUT05DbGllbnRFcnJvci5tZXNzYWdlRXhwaXJlZCgpO1xuICAgIH1cblxuICAgIGFzeW5jIGludGVybmFsRGVwbG95SnMoXG4gICAgICAgIHBhcmFtczogVE9OQ29udHJhY3REZXBsb3lQYXJhbXMsXG4gICAgICAgIHBhcmVudFNwYW4/OiAoU3BhbiB8IFNwYW5Db250ZXh0KSxcbiAgICApOiBQcm9taXNlPFRPTkNvbnRyYWN0RGVwbG95UmVzdWx0PiB7XG4gICAgICAgIHRoaXMuY29uZmlnLmxvZygnRGVwbG95IHN0YXJ0Jyk7XG4gICAgICAgIHJldHVybiB0aGlzLnJldHJ5Q2FsbChhc3luYyAocmV0cnlJbmRleCkgPT4ge1xuICAgICAgICAgICAgY29uc3QgZGVwbG95TWVzc2FnZSA9IGF3YWl0IHRoaXMuY3JlYXRlRGVwbG95TWVzc2FnZShwYXJhbXMsIHJldHJ5SW5kZXgpO1xuICAgICAgICAgICAgaWYgKGF3YWl0IHRoaXMuaXNEZXBsb3llZChkZXBsb3lNZXNzYWdlLmFkZHJlc3MsIHBhcmVudFNwYW4pKSB7XG4gICAgICAgICAgICAgICAgcmV0dXJuIHtcbiAgICAgICAgICAgICAgICAgICAgYWRkcmVzczogZGVwbG95TWVzc2FnZS5hZGRyZXNzLFxuICAgICAgICAgICAgICAgICAgICBhbHJlYWR5RGVwbG95ZWQ6IHRydWUsXG4gICAgICAgICAgICAgICAgfTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGF3YWl0IHRoaXMuc2VuZE1lc3NhZ2UoZGVwbG95TWVzc2FnZS5tZXNzYWdlLCBwYXJlbnRTcGFuKTtcbiAgICAgICAgICAgIHJldHVybiB0aGlzLndhaXRGb3JEZXBsb3lUcmFuc2FjdGlvbihkZXBsb3lNZXNzYWdlLCBwYXJlbnRTcGFuLCByZXRyeUluZGV4KTtcbiAgICAgICAgfSk7XG4gICAgfVxuXG5cbiAgICBhc3luYyBpbnRlcm5hbFJ1bkpzKFxuICAgICAgICBwYXJhbXM6IFRPTkNvbnRyYWN0UnVuUGFyYW1zLFxuICAgICAgICBwYXJlbnRTcGFuPzogKFNwYW4gfCBTcGFuQ29udGV4dCksXG4gICAgKTogUHJvbWlzZTxUT05Db250cmFjdFJ1blJlc3VsdD4ge1xuICAgICAgICB0aGlzLmNvbmZpZy5sb2coJ1J1biBzdGFydCcpO1xuICAgICAgICByZXR1cm4gdGhpcy5yZXRyeUNhbGwoYXN5bmMgKHJldHJ5SW5kZXgpID0+IHtcbiAgICAgICAgICAgIGNvbnN0IHJ1bk1lc3NhZ2UgPSBhd2FpdCB0aGlzLmNyZWF0ZVJ1bk1lc3NhZ2UocGFyYW1zLCByZXRyeUluZGV4KTtcbiAgICAgICAgICAgIGF3YWl0IHRoaXMuc2VuZE1lc3NhZ2UocnVuTWVzc2FnZS5tZXNzYWdlLCBwYXJlbnRTcGFuKTtcbiAgICAgICAgICAgIHJldHVybiB0aGlzLndhaXRGb3JSdW5UcmFuc2FjdGlvbihydW5NZXNzYWdlLCBwYXJlbnRTcGFuLCByZXRyeUluZGV4KTtcbiAgICAgICAgfSk7XG4gICAgfVxuXG4gICAgYXN5bmMgZ2V0QWNjb3VudChcbiAgICAgICAgYWRkcmVzczogc3RyaW5nLFxuICAgICAgICBhY3RpdmU6IGJvb2xlYW4sXG4gICAgICAgIHdhaXRQYXJhbXM/OiBUT05Db250cmFjdEFjY291bnRXYWl0UGFyYW1zLFxuICAgICAgICBwYXJlbnRTcGFuPzogKFNwYW4gfCBTcGFuQ29udGV4dCksXG4gICAgKTogUHJvbWlzZTxRQWNjb3VudD4ge1xuICAgICAgICBmdW5jdGlvbiByZW1vdmVUeXBlTmFtZShvYmo6IGFueSkge1xuICAgICAgICAgICAgaWYgKG9iai5fX3R5cGVuYW1lKSB7XG4gICAgICAgICAgICAgICAgZGVsZXRlIG9iai5fX3R5cGVuYW1lO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgT2JqZWN0LnZhbHVlcyhvYmopXG4gICAgICAgICAgICAgICAgLmZvckVhY2goKHZhbHVlKSA9PiB7XG4gICAgICAgICAgICAgICAgICAgIGlmICghIXZhbHVlICYmIHR5cGVvZiB2YWx1ZSA9PT0gJ29iamVjdCcpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIHJlbW92ZVR5cGVOYW1lKHZhbHVlKTtcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIH0pO1xuICAgICAgICB9XG5cbiAgICAgICAgY29uc3QgZmlsdGVyOiB7IFtzdHJpbmddOiBhbnkgfSA9IHtcbiAgICAgICAgICAgIGlkOiB7IGVxOiBhZGRyZXNzIH0sXG4gICAgICAgIH07XG4gICAgICAgIGlmICh3YWl0UGFyYW1zICYmIHdhaXRQYXJhbXMudHJhbnNhY3Rpb25MdCkge1xuICAgICAgICAgICAgZmlsdGVyLmxhc3RfdHJhbnNfbHQgPSB7IGdlOiB3YWl0UGFyYW1zLnRyYW5zYWN0aW9uTHQgfTtcbiAgICAgICAgfVxuICAgICAgICBpZiAoYWN0aXZlKSB7XG4gICAgICAgICAgICBmaWx0ZXIuYWNjX3R5cGUgPSB7IGVxOiBRQWNjb3VudFR5cGUuYWN0aXZlIH07XG4gICAgICAgIH1cblxuICAgICAgICB0aGlzLmNvbmZpZy5sb2coJ2dldEFjY291bnQuIEZpbHRlcicsIGZpbHRlcik7XG4gICAgICAgIGNvbnN0IGFjY291bnQgPSBhd2FpdCB0aGlzLnF1ZXJpZXMuYWNjb3VudHMud2FpdEZvcihcbiAgICAgICAgICAgIGZpbHRlcixcbiAgICAgICAgICAgICdpZCBhY2NfdHlwZSBjb2RlIGRhdGEgYmFsYW5jZSBiYWxhbmNlX290aGVyIHsgY3VycmVuY3kgdmFsdWUgfSBsYXN0X3BhaWQnLFxuICAgICAgICAgICAgd2FpdFBhcmFtcyAmJiB3YWl0UGFyYW1zLnRpbWVvdXQsXG4gICAgICAgICAgICBwYXJlbnRTcGFuLFxuICAgICAgICApO1xuXG4gICAgICAgIHJlbW92ZVR5cGVOYW1lKGFjY291bnQpO1xuICAgICAgICB0aGlzLmNvbmZpZy5sb2coJ2dldEFjY291bnQuIEFjY291bnQgcmVjZWl2ZWQnLCBhY2NvdW50KTtcbiAgICAgICAgcmV0dXJuIGFjY291bnQ7XG4gICAgfVxuXG4gICAgYXN5bmMgaW50ZXJuYWxSdW5Mb2NhbEpzKFxuICAgICAgICBwYXJhbXM6IFRPTkNvbnRyYWN0UnVuTG9jYWxQYXJhbXMsXG4gICAgICAgIHBhcmVudFNwYW4/OiAoU3BhbiB8IFNwYW5Db250ZXh0KSxcbiAgICApOiBQcm9taXNlPFRPTkNvbnRyYWN0UnVuUmVzdWx0PiB7XG4gICAgICAgIGNvbnN0IGFjY291bnQgPSBhd2FpdCB0aGlzLmdldEFjY291bnQoXG4gICAgICAgICAgICBwYXJhbXMuYWRkcmVzcyxcbiAgICAgICAgICAgIHRydWUsXG4gICAgICAgICAgICBwYXJhbXMud2FpdFBhcmFtcyxcbiAgICAgICAgICAgIHBhcmVudFNwYW4sXG4gICAgICAgICk7XG5cbiAgICAgICAgcmV0dXJuIHRoaXMucmVxdWVzdENvcmUoJ2NvbnRyYWN0cy5ydW4ubG9jYWwnLCB7XG4gICAgICAgICAgICBhZGRyZXNzOiBwYXJhbXMuYWRkcmVzcyxcbiAgICAgICAgICAgIGFjY291bnQsXG4gICAgICAgICAgICBhYmk6IHBhcmFtcy5hYmksXG4gICAgICAgICAgICBmdW5jdGlvbk5hbWU6IHBhcmFtcy5mdW5jdGlvbk5hbWUsXG4gICAgICAgICAgICBpbnB1dDogcGFyYW1zLmlucHV0LFxuICAgICAgICAgICAga2V5UGFpcjogcGFyYW1zLmtleVBhaXIsXG4gICAgICAgIH0pO1xuICAgIH1cbn1cblxuVE9OQ29udHJhY3RzTW9kdWxlLm1vZHVsZU5hbWUgPSAnVE9OQ29udHJhY3RzTW9kdWxlJztcblxuYXN5bmMgZnVuY3Rpb24gY2hlY2tUcmFuc2FjdGlvbih0cmFuc2FjdGlvbjogUVRyYW5zYWN0aW9uKSB7XG4gICAgaWYgKCF0cmFuc2FjdGlvbi5hYm9ydGVkKSB7XG4gICAgICAgIHJldHVybjtcbiAgICB9XG5cbiAgICBmdW5jdGlvbiBub2RlRXJyb3IobWVzc2FnZTogc3RyaW5nLCBjb2RlOiBudW1iZXIsIHBoYXNlOiBzdHJpbmcpIHtcbiAgICAgICAgY29uc3QgUkVQTEFZX1BST1RFQ1RJT04gPSA1MjtcbiAgICAgICAgY29uc3QgTUVTU0FHRV9FWFBJUkVEID0gNTc7XG4gICAgICAgIGNvbnN0IGlzTm9kZVNFTWVzc2FnZUV4cGlyZWQgPSBwaGFzZSA9PT0gVE9OQ2xpZW50VHJhbnNhY3Rpb25QaGFzZS5jb21wdXRlVm1cbiAgICAgICAgICAgICYmIChjb2RlID09PSBNRVNTQUdFX0VYUElSRUQgfHwgY29kZSA9PT0gUkVQTEFZX1BST1RFQ1RJT04pO1xuICAgICAgICByZXR1cm4gaXNOb2RlU0VNZXNzYWdlRXhwaXJlZFxuICAgICAgICAgICAgPyBUT05DbGllbnRFcnJvci5tZXNzYWdlRXhwaXJlZCgpXG4gICAgICAgICAgICA6IG5ldyBUT05DbGllbnRFcnJvcihcbiAgICAgICAgICAgICAgICBgJHttZXNzYWdlfSAoJHtjb2RlfSkgYXQgJHtwaGFzZX1gLFxuICAgICAgICAgICAgICAgIGNvZGUsXG4gICAgICAgICAgICAgICAgVE9OQ2xpZW50RXJyb3Iuc291cmNlLk5PREUsXG4gICAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgICAgICBwaGFzZSxcbiAgICAgICAgICAgICAgICAgICAgdHJhbnNhY3Rpb25faWQ6IHRyYW5zYWN0aW9uLmlkLFxuICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICApO1xuICAgIH1cblxuICAgIGNvbnN0IHN0b3JhZ2UgPSB0cmFuc2FjdGlvbi5zdG9yYWdlO1xuICAgIGlmIChzdG9yYWdlKSB7XG4gICAgICAgIGNvbnN0IHN0YXR1cyA9IHN0b3JhZ2Uuc3RhdHVzX2NoYW5nZTtcbiAgICAgICAgaWYgKHN0YXR1cyA9PT0gUUFjY291bnRTdGF0dXNDaGFuZ2UuZnJvemVuKSB7XG4gICAgICAgICAgICB0aHJvdyBub2RlRXJyb3IoXG4gICAgICAgICAgICAgICAgJ0FjY291bnQgd2FzIGZyb3plbiBkdWUgc3RvcmFnZSBwaGFzZScsXG4gICAgICAgICAgICAgICAgVE9OQ2xpZW50RXJyb3IuY29kZS5BQ0NPVU5UX0ZST1pFTl9PUl9ERUxFVEVELFxuICAgICAgICAgICAgICAgIFRPTkNsaWVudFRyYW5zYWN0aW9uUGhhc2Uuc3RvcmFnZSxcbiAgICAgICAgICAgICk7XG4gICAgICAgIH1cbiAgICAgICAgaWYgKHN0YXR1cyA9PT0gUUFjY291bnRTdGF0dXNDaGFuZ2UuZGVsZXRlZCkge1xuICAgICAgICAgICAgdGhyb3cgbm9kZUVycm9yKFxuICAgICAgICAgICAgICAgICdBY2NvdW50IHdhcyBkZWxldGVkIGR1ZSBzdG9yYWdlIHBoYXNlJyxcbiAgICAgICAgICAgICAgICBUT05DbGllbnRFcnJvci5jb2RlLkFDQ09VTlRfRlJPWkVOX09SX0RFTEVURUQsXG4gICAgICAgICAgICAgICAgVE9OQ2xpZW50VHJhbnNhY3Rpb25QaGFzZS5zdG9yYWdlLFxuICAgICAgICAgICAgKTtcbiAgICAgICAgfVxuICAgIH1cblxuICAgIGNvbnN0IGNvbXB1dGUgPSB0cmFuc2FjdGlvbi5jb21wdXRlO1xuICAgIGlmIChjb21wdXRlKSB7XG4gICAgICAgIGlmIChjb21wdXRlLmNvbXB1dGVfdHlwZSA9PT0gUUNvbXB1dGVUeXBlLnNraXBwZWQpIHtcbiAgICAgICAgICAgIGNvbnN0IHJlYXNvbiA9IGNvbXB1dGUuc2tpcHBlZF9yZWFzb247XG4gICAgICAgICAgICBpZiAocmVhc29uID09PSBRU2tpcFJlYXNvbi5ub1N0YXRlKSB7XG4gICAgICAgICAgICAgICAgdGhyb3cgbm9kZUVycm9yKFxuICAgICAgICAgICAgICAgICAgICAnQWNjb3VudCBoYXMgbm8gY29kZSBhbmQgZGF0YScsXG4gICAgICAgICAgICAgICAgICAgIFRPTkNsaWVudEVycm9yLmNvZGUuQUNDT1VOVF9DT0RFX01JU1NJTkcsXG4gICAgICAgICAgICAgICAgICAgIFRPTkNsaWVudFRyYW5zYWN0aW9uUGhhc2UuY29tcHV0ZVNraXBwZWQsXG4gICAgICAgICAgICAgICAgKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGlmIChyZWFzb24gPT09IFFTa2lwUmVhc29uLmJhZFN0YXRlKSB7XG4gICAgICAgICAgICAgICAgdGhyb3cgbm9kZUVycm9yKFxuICAgICAgICAgICAgICAgICAgICAnQWNjb3VudCBoYXMgYmFkIHN0YXRlOiBmcm96ZW4gb3IgZGVsZXRlZCcsXG4gICAgICAgICAgICAgICAgICAgIFRPTkNsaWVudEVycm9yLmNvZGUuQUNDT1VOVF9GUk9aRU5fT1JfREVMRVRFRCxcbiAgICAgICAgICAgICAgICAgICAgVE9OQ2xpZW50VHJhbnNhY3Rpb25QaGFzZS5jb21wdXRlU2tpcHBlZCxcbiAgICAgICAgICAgICAgICApO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgaWYgKHJlYXNvbiA9PT0gUVNraXBSZWFzb24ubm9HYXMpIHtcbiAgICAgICAgICAgICAgICB0aHJvdyBub2RlRXJyb3IoXG4gICAgICAgICAgICAgICAgICAgICdObyBnYXMgdG8gZXhlY3V0ZSBWTScsXG4gICAgICAgICAgICAgICAgICAgIFRPTkNsaWVudEVycm9yLmNvZGUuQUNDT1VOVF9CQUxBTkNFX1RPT19MT1csXG4gICAgICAgICAgICAgICAgICAgIFRPTkNsaWVudFRyYW5zYWN0aW9uUGhhc2UuY29tcHV0ZVNraXBwZWQsXG4gICAgICAgICAgICAgICAgKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIHRocm93IG5vZGVFcnJvcihcbiAgICAgICAgICAgICAgICAnQ29tcHV0ZSBwaGFzZSBza2lwcGVkIGJ5IHVua25vd24gcmVhc29uJyxcbiAgICAgICAgICAgICAgICAtMSxcbiAgICAgICAgICAgICAgICBUT05DbGllbnRUcmFuc2FjdGlvblBoYXNlLmNvbXB1dGVTa2lwcGVkLFxuICAgICAgICAgICAgKTtcbiAgICAgICAgfVxuICAgICAgICBpZiAoY29tcHV0ZS5jb21wdXRlX3R5cGUgPT09IFFDb21wdXRlVHlwZS52bSkge1xuICAgICAgICAgICAgaWYgKCFjb21wdXRlLnN1Y2Nlc3MpIHtcbiAgICAgICAgICAgICAgICB0aHJvdyBub2RlRXJyb3IoXG4gICAgICAgICAgICAgICAgICAgICdWTSB0ZXJtaW5hdGVkIHdpdGggZXhjZXB0aW9uJyxcbiAgICAgICAgICAgICAgICAgICAgY29tcHV0ZS5leGl0X2NvZGUgfHwgMCxcbiAgICAgICAgICAgICAgICAgICAgVE9OQ2xpZW50VHJhbnNhY3Rpb25QaGFzZS5jb21wdXRlVm0sXG4gICAgICAgICAgICAgICAgKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgIH1cblxuICAgIGNvbnN0IGFjdGlvbiA9IHRyYW5zYWN0aW9uLmFjdGlvbjtcbiAgICBpZiAoYWN0aW9uKSB7XG4gICAgICAgIGlmICghYWN0aW9uLnN1Y2Nlc3MpIHtcbiAgICAgICAgICAgIHRocm93IG5vZGVFcnJvcihcbiAgICAgICAgICAgICAgICBhY3Rpb24ubm9fZnVuZHNcbiAgICAgICAgICAgICAgICAgICAgPyAnVG9vIGxvdyBiYWxhbmNlIHRvIHNlbmQgb3V0Ym91bmQgbWVzc2FnZSdcbiAgICAgICAgICAgICAgICAgICAgOiAoIWFjdGlvbi52YWxpZCA/ICdPdXRib3VuZCBtZXNzYWdlIGlzIGludmFsaWQnIDogJ0FjdGlvbiBwaGFzZSBmYWlsZWQnKSxcbiAgICAgICAgICAgICAgICBhY3Rpb24ucmVzdWx0X2NvZGUgfHwgMCxcbiAgICAgICAgICAgICAgICBUT05DbGllbnRUcmFuc2FjdGlvblBoYXNlLmFjdGlvbixcbiAgICAgICAgICAgICk7XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICB0aHJvdyBub2RlRXJyb3IoXG4gICAgICAgICdUcmFuc2FjdGlvbiBhYm9ydGVkJyxcbiAgICAgICAgLTEsXG4gICAgICAgIFRPTkNsaWVudFRyYW5zYWN0aW9uUGhhc2UudW5rbm93bixcbiAgICApO1xufVxuXG5jb25zdCB0cmFuc2FjdGlvbkRldGFpbHMgPSBgXG4gICAgaWRcbiAgICBpbl9tc2dcbiAgICB0cl90eXBlXG4gICAgc3RhdHVzXG4gICAgaW5fbXNnXG4gICAgb3V0X21zZ3NcbiAgICBibG9ja19pZFxuICAgIG5vd1xuICAgIGFib3J0ZWRcbiAgICBsdFxuICAgIHN0b3JhZ2Uge1xuICAgICAgICBzdGF0dXNfY2hhbmdlXG4gICAgfVxuICAgIGNvbXB1dGUge1xuICAgICAgICBjb21wdXRlX3R5cGVcbiAgICAgICAgc2tpcHBlZF9yZWFzb25cbiAgICAgICAgc3VjY2Vzc1xuICAgICAgICBleGl0X2NvZGVcbiAgICAgICAgZ2FzX2ZlZXNcbiAgICAgICAgZ2FzX3VzZWRcbiAgICB9XG4gICAgYWN0aW9uIHtcbiAgICAgICAgc3VjY2Vzc1xuICAgICAgICB2YWxpZFxuICAgICAgICByZXN1bHRfY29kZVxuICAgICAgICBub19mdW5kc1xuICAgIH1cbiAgICBvdXRfbWVzc2FnZXMge1xuICAgICAgICBpZFxuICAgICAgICBtc2dfdHlwZVxuICAgICAgICBib2R5XG4gICAgfVxuICAgYDtcbiJdfQ==