"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.removeProps = removeProps;
exports["default"] = exports.QBounceType = exports.QSkipReason = exports.QComputeType = exports.QAccountStatusChange = exports.QAccountStatus = exports.QTransactionProcessingStatus = exports.QTransactionType = exports.QAccountType = exports.QSplitType = exports.QBlockProcessingStatus = exports.QMessageProcessingStatus = exports.QMessageType = exports.QOutMsgType = exports.QInMsgType = exports.TONClientStorageStatus = exports.TONClientComputeSkippedStatus = exports.TONClientTransactionPhase = exports.TONAddressStringVariant = void 0;

var _typeof2 = _interopRequireDefault(require("@babel/runtime/helpers/typeof"));

var _regenerator = _interopRequireDefault(require("@babel/runtime/regenerator"));

var _asyncToGenerator2 = _interopRequireDefault(require("@babel/runtime/helpers/asyncToGenerator"));

var _classCallCheck2 = _interopRequireDefault(require("@babel/runtime/helpers/classCallCheck"));

var _createClass2 = _interopRequireDefault(require("@babel/runtime/helpers/createClass"));

var _assertThisInitialized2 = _interopRequireDefault(require("@babel/runtime/helpers/assertThisInitialized"));

var _inherits2 = _interopRequireDefault(require("@babel/runtime/helpers/inherits"));

var _possibleConstructorReturn2 = _interopRequireDefault(require("@babel/runtime/helpers/possibleConstructorReturn"));

var _getPrototypeOf2 = _interopRequireDefault(require("@babel/runtime/helpers/getPrototypeOf"));

var _defineProperty2 = _interopRequireDefault(require("@babel/runtime/helpers/defineProperty"));

var _opentracing = require("opentracing");

var _TONClient = require("../TONClient");

var _TONModule2 = require("../TONModule");

var _TONConfigModule = _interopRequireDefault(require("./TONConfigModule"));

var _TONQueriesModule = _interopRequireDefault(require("./TONQueriesModule"));

function _createSuper(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct(); return function () { var Super = (0, _getPrototypeOf2["default"])(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = (0, _getPrototypeOf2["default"])(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return (0, _possibleConstructorReturn2["default"])(this, result); }; }

function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Date.prototype.toString.call(Reflect.construct(Date, [], function () {})); return true; } catch (e) { return false; } }

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { (0, _defineProperty2["default"])(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

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
          result = _objectSpread(_objectSpread({}, result), {}, (0, _defineProperty2["default"])({}, name, reducedChild));
        }
      }
    }
  });
  return result;
}

var TONContractsModule = /*#__PURE__*/function (_TONModule) {
  (0, _inherits2["default"])(TONContractsModule, _TONModule);

  var _super = _createSuper(TONContractsModule);

  function TONContractsModule() {
    var _this;

    (0, _classCallCheck2["default"])(this, TONContractsModule);

    for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    _this = _super.call.apply(_super, [this].concat(args));
    (0, _defineProperty2["default"])((0, _assertThisInitialized2["default"])(_this), "config", void 0);
    (0, _defineProperty2["default"])((0, _assertThisInitialized2["default"])(_this), "queries", void 0);
    (0, _defineProperty2["default"])((0, _assertThisInitialized2["default"])(_this), "bigBalance", '0x10000000000000');
    return _this;
  }

  (0, _createClass2["default"])(TONContractsModule, [{
    key: "setup",
    value: function () {
      var _setup = (0, _asyncToGenerator2["default"])( /*#__PURE__*/_regenerator["default"].mark(function _callee() {
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
      var _load = (0, _asyncToGenerator2["default"])( /*#__PURE__*/_regenerator["default"].mark(function _callee2(params, parentSpan) {
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
      var _deploy = (0, _asyncToGenerator2["default"])( /*#__PURE__*/_regenerator["default"].mark(function _callee4(params, parentSpan) {
        var _this2 = this;

        return _regenerator["default"].wrap(function _callee4$(_context4) {
          while (1) {
            switch (_context4.prev = _context4.next) {
              case 0:
                return _context4.abrupt("return", this.context.trace('contracts.deploy', /*#__PURE__*/function () {
                  var _ref = (0, _asyncToGenerator2["default"])( /*#__PURE__*/_regenerator["default"].mark(function _callee3(span) {
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
      var _run = (0, _asyncToGenerator2["default"])( /*#__PURE__*/_regenerator["default"].mark(function _callee6(params, parentSpan) {
        var _this3 = this;

        return _regenerator["default"].wrap(function _callee6$(_context6) {
          while (1) {
            switch (_context6.prev = _context6.next) {
              case 0:
                return _context6.abrupt("return", this.context.trace('contracts.run', /*#__PURE__*/function () {
                  var _ref2 = (0, _asyncToGenerator2["default"])( /*#__PURE__*/_regenerator["default"].mark(function _callee5(span) {
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
      var _runLocal = (0, _asyncToGenerator2["default"])( /*#__PURE__*/_regenerator["default"].mark(function _callee8(params, parentSpan) {
        var _this4 = this;

        return _regenerator["default"].wrap(function _callee8$(_context8) {
          while (1) {
            switch (_context8.prev = _context8.next) {
              case 0:
                return _context8.abrupt("return", this.context.trace('contracts.runLocal', /*#__PURE__*/function () {
                  var _ref3 = (0, _asyncToGenerator2["default"])( /*#__PURE__*/_regenerator["default"].mark(function _callee7(span) {
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
    key: "runGet",
    value: function () {
      var _runGet = (0, _asyncToGenerator2["default"])( /*#__PURE__*/_regenerator["default"].mark(function _callee9(params) {
        var coreParams, account;
        return _regenerator["default"].wrap(function _callee9$(_context9) {
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
      var _createDeployMessage = (0, _asyncToGenerator2["default"])( /*#__PURE__*/_regenerator["default"].mark(function _callee10(params, retryIndex) {
        var constructorHeader, message;
        return _regenerator["default"].wrap(function _callee10$(_context10) {
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
      var _createRunMessage = (0, _asyncToGenerator2["default"])( /*#__PURE__*/_regenerator["default"].mark(function _callee11(params, retryIndex) {
        var header, message;
        return _regenerator["default"].wrap(function _callee11$(_context11) {
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
      var _createUnsignedDeployMessage = (0, _asyncToGenerator2["default"])( /*#__PURE__*/_regenerator["default"].mark(function _callee12(params, retryIndex) {
        var constructorHeader, result;
        return _regenerator["default"].wrap(function _callee12$(_context12) {
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
      var _createUnsignedRunMessage = (0, _asyncToGenerator2["default"])( /*#__PURE__*/_regenerator["default"].mark(function _callee13(params, retryIndex) {
        var header, signParams;
        return _regenerator["default"].wrap(function _callee13$(_context13) {
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
      var _createSignedMessage = (0, _asyncToGenerator2["default"])( /*#__PURE__*/_regenerator["default"].mark(function _callee14(params) {
        return _regenerator["default"].wrap(function _callee14$(_context14) {
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
      var _createSignedDeployMessage = (0, _asyncToGenerator2["default"])( /*#__PURE__*/_regenerator["default"].mark(function _callee15(params) {
        var message;
        return _regenerator["default"].wrap(function _callee15$(_context15) {
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
      var _createSignedRunMessage = (0, _asyncToGenerator2["default"])( /*#__PURE__*/_regenerator["default"].mark(function _callee16(params) {
        var message;
        return _regenerator["default"].wrap(function _callee16$(_context16) {
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
      var _getCodeFromImage = (0, _asyncToGenerator2["default"])( /*#__PURE__*/_regenerator["default"].mark(function _callee17(params) {
        return _regenerator["default"].wrap(function _callee17$(_context17) {
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
      var _getDeployData = (0, _asyncToGenerator2["default"])( /*#__PURE__*/_regenerator["default"].mark(function _callee18(params) {
        return _regenerator["default"].wrap(function _callee18$(_context18) {
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
      var _createRunBody = (0, _asyncToGenerator2["default"])( /*#__PURE__*/_regenerator["default"].mark(function _callee19(params) {
        return _regenerator["default"].wrap(function _callee19$(_context19) {
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
      var _getFunctionId = (0, _asyncToGenerator2["default"])( /*#__PURE__*/_regenerator["default"].mark(function _callee20(params) {
        return _regenerator["default"].wrap(function _callee20$(_context20) {
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
      var _getBocHash = (0, _asyncToGenerator2["default"])( /*#__PURE__*/_regenerator["default"].mark(function _callee21(params) {
        return _regenerator["default"].wrap(function _callee21$(_context21) {
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
      var _parseMessage = (0, _asyncToGenerator2["default"])( /*#__PURE__*/_regenerator["default"].mark(function _callee22(params) {
        return _regenerator["default"].wrap(function _callee22$(_context22) {
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
      var _decodeRunOutput = (0, _asyncToGenerator2["default"])( /*#__PURE__*/_regenerator["default"].mark(function _callee23(params) {
        return _regenerator["default"].wrap(function _callee23$(_context23) {
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
      var _decodeInputMessageBody = (0, _asyncToGenerator2["default"])( /*#__PURE__*/_regenerator["default"].mark(function _callee24(params) {
        return _regenerator["default"].wrap(function _callee24$(_context24) {
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
      var _decodeOutputMessageBody = (0, _asyncToGenerator2["default"])( /*#__PURE__*/_regenerator["default"].mark(function _callee25(params) {
        return _regenerator["default"].wrap(function _callee25$(_context25) {
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
      var _getMessageId = (0, _asyncToGenerator2["default"])( /*#__PURE__*/_regenerator["default"].mark(function _callee26(message) {
        return _regenerator["default"].wrap(function _callee26$(_context26) {
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
      var _sendMessage = (0, _asyncToGenerator2["default"])( /*#__PURE__*/_regenerator["default"].mark(function _callee27(params, parentSpan) {
        var expire, serverTimeDelta, id, idBase64;
        return _regenerator["default"].wrap(function _callee27$(_context27) {
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
      var _processMessage = (0, _asyncToGenerator2["default"])( /*#__PURE__*/_regenerator["default"].mark(function _callee28(message, resultFields, parentSpan, retryIndex) {
        return _regenerator["default"].wrap(function _callee28$(_context28) {
          while (1) {
            switch (_context28.prev = _context28.next) {
              case 0:
                _context28.next = 2;
                return this.sendMessage(message, parentSpan);

              case 2:
                return _context28.abrupt("return", this.waitForTransaction(message, resultFields, parentSpan, retryIndex));

              case 3:
              case "end":
                return _context28.stop();
            }
          }
        }, _callee28, this);
      }));

      function processMessage(_x36, _x37, _x38, _x39) {
        return _processMessage.apply(this, arguments);
      }

      return processMessage;
    }()
  }, {
    key: "waitForTransaction",
    value: function () {
      var _waitForTransaction = (0, _asyncToGenerator2["default"])( /*#__PURE__*/_regenerator["default"].mark(function _callee31(message, resultFields, parentSpan, retryIndex) {
        var _this5 = this;

        var messageId, config, processingTimeout, promises, serverInfo, operationId, transaction, expire, waitExpired, transactionNow;
        return _regenerator["default"].wrap(function _callee31$(_context31) {
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
                expire = message.expire;

                if (expire) {
                  // calculate timeout according to `expire` value (in seconds)
                  // add processing timeout as master block validation time
                  processingTimeout = expire * 1000 - Date.now() + processingTimeout;

                  waitExpired = /*#__PURE__*/function () {
                    var _ref4 = (0, _asyncToGenerator2["default"])( /*#__PURE__*/_regenerator["default"].mark(function _callee29() {
                      var _block$in_msg_descr$f;

                      var block, transaction_id;
                      return _regenerator["default"].wrap(function _callee29$(_context29) {
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
                  (0, _asyncToGenerator2["default"])( /*#__PURE__*/_regenerator["default"].mark(function _callee30() {
                    return _regenerator["default"].wrap(function _callee30$(_context30) {
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
                _context31.prev = 14;
                _context31.next = 17;
                return Promise.race(promises);

              case 17:
                _context31.prev = 17;

                if (!(promises.length > 1 && operationId)) {
                  _context31.next = 21;
                  break;
                }

                _context31.next = 21;
                return this.queries.finishOperations([operationId]);

              case 21:
                return _context31.finish(17);

              case 22:
                if (transaction) {
                  _context31.next = 24;
                  break;
                }

                throw _TONClient.TONClientError.messageExpired();

              case 24:
                transactionNow = transaction.now || 0;
                this.config.log('processMessage. transaction received', {
                  id: transaction.id,
                  block_id: transaction.block_id,
                  now: "".concat(new Date(transactionNow * 1000).toISOString(), " (").concat(transactionNow, ")")
                });
                return _context31.abrupt("return", transaction);

              case 27:
              case "end":
                return _context31.stop();
            }
          }
        }, _callee31, this, [[14,, 17, 22]]);
      }));

      function waitForTransaction(_x40, _x41, _x42, _x43) {
        return _waitForTransaction.apply(this, arguments);
      }

      return waitForTransaction;
    }()
  }, {
    key: "isDeployed",
    value: function () {
      var _isDeployed = (0, _asyncToGenerator2["default"])( /*#__PURE__*/_regenerator["default"].mark(function _callee32(address, parentSpan) {
        var account;
        return _regenerator["default"].wrap(function _callee32$(_context32) {
          while (1) {
            switch (_context32.prev = _context32.next) {
              case 0:
                _context32.next = 2;
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
                account = _context32.sent;
                return _context32.abrupt("return", account.length > 0);

              case 4:
              case "end":
                return _context32.stop();
            }
          }
        }, _callee32, this);
      }));

      function isDeployed(_x44, _x45) {
        return _isDeployed.apply(this, arguments);
      }

      return isDeployed;
    }()
  }, {
    key: "processDeployMessage",
    value: function () {
      var _processDeployMessage = (0, _asyncToGenerator2["default"])( /*#__PURE__*/_regenerator["default"].mark(function _callee33(params, parentSpan, retryIndex) {
        return _regenerator["default"].wrap(function _callee33$(_context33) {
          while (1) {
            switch (_context33.prev = _context33.next) {
              case 0:
                this.config.log('processDeployMessage', params);
                _context33.next = 3;
                return this.isDeployed(params.address, parentSpan);

              case 3:
                if (!_context33.sent) {
                  _context33.next = 5;
                  break;
                }

                return _context33.abrupt("return", {
                  address: params.address,
                  alreadyDeployed: true
                });

              case 5:
                _context33.next = 7;
                return this.sendMessage(params.message, parentSpan);

              case 7:
                return _context33.abrupt("return", this.waitForDeployTransaction(params, parentSpan, retryIndex));

              case 8:
              case "end":
                return _context33.stop();
            }
          }
        }, _callee33, this);
      }));

      function processDeployMessage(_x46, _x47, _x48) {
        return _processDeployMessage.apply(this, arguments);
      }

      return processDeployMessage;
    }()
  }, {
    key: "waitForDeployTransaction",
    value: function () {
      var _waitForDeployTransaction = (0, _asyncToGenerator2["default"])( /*#__PURE__*/_regenerator["default"].mark(function _callee34(deployMessage, parentSpan, retryIndex) {
        var transaction;
        return _regenerator["default"].wrap(function _callee34$(_context34) {
          while (1) {
            switch (_context34.prev = _context34.next) {
              case 0:
                _context34.next = 2;
                return this.waitForTransaction(deployMessage.message, transactionDetails, parentSpan, retryIndex);

              case 2:
                transaction = _context34.sent;
                _context34.next = 5;
                return checkTransaction(transaction);

              case 5:
                this.config.log('processDeployMessage. End');
                return _context34.abrupt("return", {
                  address: deployMessage.address,
                  alreadyDeployed: false,
                  transaction: transaction
                });

              case 7:
              case "end":
                return _context34.stop();
            }
          }
        }, _callee34, this);
      }));

      function waitForDeployTransaction(_x49, _x50, _x51) {
        return _waitForDeployTransaction.apply(this, arguments);
      }

      return waitForDeployTransaction;
    }()
  }, {
    key: "processRunMessage",
    value: function () {
      var _processRunMessage = (0, _asyncToGenerator2["default"])( /*#__PURE__*/_regenerator["default"].mark(function _callee35(runMessage, parentSpan, retryIndex) {
        return _regenerator["default"].wrap(function _callee35$(_context35) {
          while (1) {
            switch (_context35.prev = _context35.next) {
              case 0:
                this.config.log('processRunMessage', runMessage);
                _context35.next = 3;
                return this.sendMessage(runMessage.message, parentSpan);

              case 3:
                return _context35.abrupt("return", this.waitForRunTransaction(runMessage, parentSpan, retryIndex));

              case 4:
              case "end":
                return _context35.stop();
            }
          }
        }, _callee35, this);
      }));

      function processRunMessage(_x52, _x53, _x54) {
        return _processRunMessage.apply(this, arguments);
      }

      return processRunMessage;
    }()
  }, {
    key: "waitForRunTransaction",
    value: function () {
      var _waitForRunTransaction = (0, _asyncToGenerator2["default"])( /*#__PURE__*/_regenerator["default"].mark(function _callee36(runMessage, parentSpan, retryIndex) {
        var _this6 = this;

        var transaction, outputMessages, externalMessages, outputs, resultOutput;
        return _regenerator["default"].wrap(function _callee36$(_context36) {
          while (1) {
            switch (_context36.prev = _context36.next) {
              case 0:
                _context36.next = 2;
                return this.waitForTransaction(runMessage.message, transactionDetails, parentSpan, retryIndex);

              case 2:
                transaction = _context36.sent;
                _context36.next = 5;
                return checkTransaction(transaction);

              case 5:
                outputMessages = transaction.out_messages;

                if (!(!outputMessages || outputMessages.length === 0)) {
                  _context36.next = 8;
                  break;
                }

                return _context36.abrupt("return", {
                  output: null,
                  transaction: transaction
                });

              case 8:
                externalMessages = outputMessages.filter(function (x) {
                  return x.msg_type === QMessageType.extOut;
                });
                this.config.log('processRunMessage. Before messages parse');
                _context36.next = 12;
                return Promise.all(externalMessages.map(function (x) {
                  return _this6.decodeOutputMessageBody({
                    abi: runMessage.abi,
                    bodyBase64: x.body || ''
                  });
                }));

              case 12:
                outputs = _context36.sent;
                resultOutput = outputs.find(function (x) {
                  return x["function"].toLowerCase() === runMessage.functionName.toLowerCase();
                });
                this.config.log('processRunMessage. End');
                return _context36.abrupt("return", {
                  output: resultOutput ? resultOutput.output : null,
                  transaction: transaction
                });

              case 16:
              case "end":
                return _context36.stop();
            }
          }
        }, _callee36, this);
      }));

      function waitForRunTransaction(_x55, _x56, _x57) {
        return _waitForRunTransaction.apply(this, arguments);
      }

      return waitForRunTransaction;
    }()
  }, {
    key: "processRunMessageLocal",
    value: function () {
      var _processRunMessageLocal = (0, _asyncToGenerator2["default"])( /*#__PURE__*/_regenerator["default"].mark(function _callee37(runMessage, waitParams, parentSpan) {
        var account;
        return _regenerator["default"].wrap(function _callee37$(_context37) {
          while (1) {
            switch (_context37.prev = _context37.next) {
              case 0:
                this.config.log('processRunMessageLocal', runMessage);
                _context37.next = 3;
                return this.getAccount(runMessage.address, true, waitParams, parentSpan);

              case 3:
                account = _context37.sent;
                return _context37.abrupt("return", this.requestCore('contracts.run.local.msg', {
                  address: runMessage.address,
                  account: account,
                  abi: runMessage.abi,
                  functionName: runMessage.functionName,
                  messageBase64: runMessage.message.messageBodyBase64
                }));

              case 5:
              case "end":
                return _context37.stop();
            }
          }
        }, _callee37, this);
      }));

      function processRunMessageLocal(_x58, _x59, _x60) {
        return _processRunMessageLocal.apply(this, arguments);
      }

      return processRunMessageLocal;
    }() // Fee calculation

  }, {
    key: "calcRunFees",
    value: function () {
      var _calcRunFees = (0, _asyncToGenerator2["default"])( /*#__PURE__*/_regenerator["default"].mark(function _callee38(params, parentSpan) {
        var account;
        return _regenerator["default"].wrap(function _callee38$(_context38) {
          while (1) {
            switch (_context38.prev = _context38.next) {
              case 0:
                this.config.log('calcRunFees', params);
                _context38.next = 3;
                return this.getAccount(params.address, true, params.waitParams, parentSpan);

              case 3:
                account = _context38.sent;

                if (params.emulateBalance) {
                  account.balance = this.bigBalance;
                }

                return _context38.abrupt("return", this.requestCore('contracts.run.fee', {
                  address: params.address,
                  account: account,
                  abi: params.abi,
                  functionName: params.functionName,
                  input: params.input,
                  keyPair: params.keyPair
                }));

              case 6:
              case "end":
                return _context38.stop();
            }
          }
        }, _callee38, this);
      }));

      function calcRunFees(_x61, _x62) {
        return _calcRunFees.apply(this, arguments);
      }

      return calcRunFees;
    }()
  }, {
    key: "calcDeployFees",
    value: function () {
      var _calcDeployFees = (0, _asyncToGenerator2["default"])( /*#__PURE__*/_regenerator["default"].mark(function _callee39(params, parentSpan) {
        var message;
        return _regenerator["default"].wrap(function _callee39$(_context39) {
          while (1) {
            switch (_context39.prev = _context39.next) {
              case 0:
                this.config.log('calcDeployFees', params);
                _context39.next = 3;
                return this.createDeployMessage(params);

              case 3:
                message = _context39.sent;
                return _context39.abrupt("return", this.calcMsgProcessFees({
                  address: message.address,
                  message: message.message,
                  emulateBalance: params.emulateBalance,
                  newAccount: params.newAccount
                }, parentSpan));

              case 5:
              case "end":
                return _context39.stop();
            }
          }
        }, _callee39, this);
      }));

      function calcDeployFees(_x63, _x64) {
        return _calcDeployFees.apply(this, arguments);
      }

      return calcDeployFees;
    }()
  }, {
    key: "calcMsgProcessFees",
    value: function () {
      var _calcMsgProcessFees = (0, _asyncToGenerator2["default"])( /*#__PURE__*/_regenerator["default"].mark(function _callee40(params, parentSpan) {
        var account;
        return _regenerator["default"].wrap(function _callee40$(_context40) {
          while (1) {
            switch (_context40.prev = _context40.next) {
              case 0:
                this.config.log('calcMsgProcessFees', params);
                account = {
                  balance: this.bigBalance,
                  id: params.address,
                  last_paid: Math.floor(Date.now() / 1000)
                };

                if (params.newAccount) {
                  _context40.next = 6;
                  break;
                }

                _context40.next = 5;
                return this.getAccount(params.address, false, params.waitParams, parentSpan);

              case 5:
                account = _context40.sent;

              case 6:
                if (params.emulateBalance) {
                  account.balance = this.bigBalance;
                }

                return _context40.abrupt("return", this.requestCore('contracts.run.fee.msg', {
                  address: params.address,
                  account: account,
                  messageBase64: params.message.messageBodyBase64
                }));

              case 8:
              case "end":
                return _context40.stop();
            }
          }
        }, _callee40, this);
      }));

      function calcMsgProcessFees(_x65, _x66) {
        return _calcMsgProcessFees.apply(this, arguments);
      }

      return calcMsgProcessFees;
    }() // Address processing

  }, {
    key: "convertAddress",
    value: function () {
      var _convertAddress = (0, _asyncToGenerator2["default"])( /*#__PURE__*/_regenerator["default"].mark(function _callee41(params) {
        return _regenerator["default"].wrap(function _callee41$(_context41) {
          while (1) {
            switch (_context41.prev = _context41.next) {
              case 0:
                return _context41.abrupt("return", this.requestCore('contracts.address.convert', params));

              case 1:
              case "end":
                return _context41.stop();
            }
          }
        }, _callee41, this);
      }));

      function convertAddress(_x67) {
        return _convertAddress.apply(this, arguments);
      }

      return convertAddress;
    }() // Internals

  }, {
    key: "internalDeployNative",
    value: function () {
      var _internalDeployNative = (0, _asyncToGenerator2["default"])( /*#__PURE__*/_regenerator["default"].mark(function _callee42(params) {
        return _regenerator["default"].wrap(function _callee42$(_context42) {
          while (1) {
            switch (_context42.prev = _context42.next) {
              case 0:
                return _context42.abrupt("return", this.requestCore('contracts.deploy', {
                  abi: params["package"].abi,
                  constructorHeader: params.constructorHeader,
                  constructorParams: params.constructorParams,
                  initParams: params.initParams,
                  imageBase64: params["package"].imageBase64,
                  keyPair: params.keyPair
                }));

              case 1:
              case "end":
                return _context42.stop();
            }
          }
        }, _callee42, this);
      }));

      function internalDeployNative(_x68) {
        return _internalDeployNative.apply(this, arguments);
      }

      return internalDeployNative;
    }()
  }, {
    key: "internalRunNative",
    value: function () {
      var _internalRunNative = (0, _asyncToGenerator2["default"])( /*#__PURE__*/_regenerator["default"].mark(function _callee43(params) {
        return _regenerator["default"].wrap(function _callee43$(_context43) {
          while (1) {
            switch (_context43.prev = _context43.next) {
              case 0:
                return _context43.abrupt("return", this.requestCore('contracts.run', {
                  address: params.address,
                  abi: params.abi,
                  functionName: params.functionName,
                  header: params.header,
                  input: params.input,
                  keyPair: params.keyPair
                }));

              case 1:
              case "end":
                return _context43.stop();
            }
          }
        }, _callee43, this);
      }));

      function internalRunNative(_x69) {
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
      var _retryCall = (0, _asyncToGenerator2["default"])( /*#__PURE__*/_regenerator["default"].mark(function _callee44(call) {
        var retriesCount, i;
        return _regenerator["default"].wrap(function _callee44$(_context44) {
          while (1) {
            switch (_context44.prev = _context44.next) {
              case 0:
                retriesCount = this.config.messageRetriesCount();
                i = 0;

              case 2:
                if (!(i <= retriesCount)) {
                  _context44.next = 17;
                  break;
                }

                if (i > 0) {
                  this.config.log("Retry #".concat(i));
                }

                _context44.prev = 4;
                _context44.next = 7;
                return call(i);

              case 7:
                return _context44.abrupt("return", _context44.sent);

              case 10:
                _context44.prev = 10;
                _context44.t0 = _context44["catch"](4);

                if (_TONClient.TONClientError.isMessageExpired(_context44.t0)) {
                  _context44.next = 14;
                  break;
                }

                throw _context44.t0;

              case 14:
                i += 1;
                _context44.next = 2;
                break;

              case 17:
                throw _TONClient.TONClientError.messageExpired();

              case 18:
              case "end":
                return _context44.stop();
            }
          }
        }, _callee44, this, [[4, 10]]);
      }));

      function retryCall(_x70) {
        return _retryCall.apply(this, arguments);
      }

      return retryCall;
    }()
  }, {
    key: "internalDeployJs",
    value: function () {
      var _internalDeployJs = (0, _asyncToGenerator2["default"])( /*#__PURE__*/_regenerator["default"].mark(function _callee46(params, parentSpan) {
        var _this7 = this;

        return _regenerator["default"].wrap(function _callee46$(_context46) {
          while (1) {
            switch (_context46.prev = _context46.next) {
              case 0:
                this.config.log('Deploy start');
                return _context46.abrupt("return", this.retryCall( /*#__PURE__*/function () {
                  var _ref6 = (0, _asyncToGenerator2["default"])( /*#__PURE__*/_regenerator["default"].mark(function _callee45(retryIndex) {
                    var deployMessage;
                    return _regenerator["default"].wrap(function _callee45$(_context45) {
                      while (1) {
                        switch (_context45.prev = _context45.next) {
                          case 0:
                            _context45.next = 2;
                            return _this7.createDeployMessage(params, retryIndex);

                          case 2:
                            deployMessage = _context45.sent;
                            _context45.next = 5;
                            return _this7.isDeployed(deployMessage.address, parentSpan);

                          case 5:
                            if (!_context45.sent) {
                              _context45.next = 7;
                              break;
                            }

                            return _context45.abrupt("return", {
                              address: deployMessage.address,
                              alreadyDeployed: true
                            });

                          case 7:
                            _context45.next = 9;
                            return _this7.sendMessage(deployMessage.message, parentSpan);

                          case 9:
                            return _context45.abrupt("return", _this7.waitForDeployTransaction(deployMessage, parentSpan, retryIndex));

                          case 10:
                          case "end":
                            return _context45.stop();
                        }
                      }
                    }, _callee45);
                  }));

                  return function (_x73) {
                    return _ref6.apply(this, arguments);
                  };
                }()));

              case 2:
              case "end":
                return _context46.stop();
            }
          }
        }, _callee46, this);
      }));

      function internalDeployJs(_x71, _x72) {
        return _internalDeployJs.apply(this, arguments);
      }

      return internalDeployJs;
    }()
  }, {
    key: "internalRunJs",
    value: function () {
      var _internalRunJs = (0, _asyncToGenerator2["default"])( /*#__PURE__*/_regenerator["default"].mark(function _callee48(params, parentSpan) {
        var _this8 = this;

        return _regenerator["default"].wrap(function _callee48$(_context48) {
          while (1) {
            switch (_context48.prev = _context48.next) {
              case 0:
                this.config.log('Run start');
                return _context48.abrupt("return", this.retryCall( /*#__PURE__*/function () {
                  var _ref7 = (0, _asyncToGenerator2["default"])( /*#__PURE__*/_regenerator["default"].mark(function _callee47(retryIndex) {
                    var runMessage;
                    return _regenerator["default"].wrap(function _callee47$(_context47) {
                      while (1) {
                        switch (_context47.prev = _context47.next) {
                          case 0:
                            _context47.next = 2;
                            return _this8.createRunMessage(params, retryIndex);

                          case 2:
                            runMessage = _context47.sent;
                            _context47.next = 5;
                            return _this8.sendMessage(runMessage.message, parentSpan);

                          case 5:
                            return _context47.abrupt("return", _this8.waitForRunTransaction(runMessage, parentSpan, retryIndex));

                          case 6:
                          case "end":
                            return _context47.stop();
                        }
                      }
                    }, _callee47);
                  }));

                  return function (_x76) {
                    return _ref7.apply(this, arguments);
                  };
                }()));

              case 2:
              case "end":
                return _context48.stop();
            }
          }
        }, _callee48, this);
      }));

      function internalRunJs(_x74, _x75) {
        return _internalRunJs.apply(this, arguments);
      }

      return internalRunJs;
    }()
  }, {
    key: "getAccount",
    value: function () {
      var _getAccount = (0, _asyncToGenerator2["default"])( /*#__PURE__*/_regenerator["default"].mark(function _callee49(address, active, waitParams, parentSpan) {
        var removeTypeName, filter, account;
        return _regenerator["default"].wrap(function _callee49$(_context49) {
          while (1) {
            switch (_context49.prev = _context49.next) {
              case 0:
                removeTypeName = function _removeTypeName(obj) {
                  if (obj.__typename) {
                    delete obj.__typename;
                  }

                  Object.values(obj).forEach(function (value) {
                    if (!!value && (0, _typeof2["default"])(value) === 'object') {
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
                _context49.next = 7;
                return this.queries.accounts.waitFor(filter, 'id code data balance balance_other { currency value } last_paid', waitParams && waitParams.timeout, parentSpan);

              case 7:
                account = _context49.sent;
                removeTypeName(account);
                this.config.log('getAccount. Account received', account);
                return _context49.abrupt("return", account);

              case 11:
              case "end":
                return _context49.stop();
            }
          }
        }, _callee49, this);
      }));

      function getAccount(_x77, _x78, _x79, _x80) {
        return _getAccount.apply(this, arguments);
      }

      return getAccount;
    }()
  }, {
    key: "internalRunLocalJs",
    value: function () {
      var _internalRunLocalJs = (0, _asyncToGenerator2["default"])( /*#__PURE__*/_regenerator["default"].mark(function _callee50(params, parentSpan) {
        var account;
        return _regenerator["default"].wrap(function _callee50$(_context50) {
          while (1) {
            switch (_context50.prev = _context50.next) {
              case 0:
                _context50.next = 2;
                return this.getAccount(params.address, true, params.waitParams, parentSpan);

              case 2:
                account = _context50.sent;
                return _context50.abrupt("return", this.requestCore('contracts.run.local', {
                  address: params.address,
                  account: account,
                  abi: params.abi,
                  functionName: params.functionName,
                  input: params.input,
                  keyPair: params.keyPair
                }));

              case 4:
              case "end":
                return _context50.stop();
            }
          }
        }, _callee50, this);
      }));

      function internalRunLocalJs(_x81, _x82) {
        return _internalRunLocalJs.apply(this, arguments);
      }

      return internalRunLocalJs;
    }()
  }]);
  return TONContractsModule;
}(_TONModule2.TONModule);

exports["default"] = TONContractsModule;
TONContractsModule.moduleName = 'TONContractsModule';

function checkTransaction(_x83) {
  return _checkTransaction.apply(this, arguments);
}

function _checkTransaction() {
  _checkTransaction = (0, _asyncToGenerator2["default"])( /*#__PURE__*/_regenerator["default"].mark(function _callee51(transaction) {
    var nodeError, storage, status, compute, reason, action;
    return _regenerator["default"].wrap(function _callee51$(_context51) {
      while (1) {
        switch (_context51.prev = _context51.next) {
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
              _context51.next = 3;
              break;
            }

            return _context51.abrupt("return");

          case 3:
            storage = transaction.storage;

            if (!storage) {
              _context51.next = 10;
              break;
            }

            status = storage.status_change;

            if (!(status === QAccountStatusChange.frozen)) {
              _context51.next = 8;
              break;
            }

            throw nodeError('Account was frozen due storage phase', TONClientStorageStatus.frozen, TONClientTransactionPhase.storage);

          case 8:
            if (!(status === QAccountStatusChange.deleted)) {
              _context51.next = 10;
              break;
            }

            throw nodeError('Account was deleted due storage phase', TONClientStorageStatus.deleted, TONClientTransactionPhase.storage);

          case 10:
            compute = transaction.compute;

            if (!compute) {
              _context51.next = 24;
              break;
            }

            if (!(compute.compute_type === QComputeType.skipped)) {
              _context51.next = 21;
              break;
            }

            reason = compute.skipped_reason;

            if (!(reason === QSkipReason.noState)) {
              _context51.next = 16;
              break;
            }

            throw nodeError('Account has no code and data', TONClientComputeSkippedStatus.noState, TONClientTransactionPhase.computeSkipped);

          case 16:
            if (!(reason === QSkipReason.badState)) {
              _context51.next = 18;
              break;
            }

            throw nodeError('Account has bad state: frozen or deleted', TONClientComputeSkippedStatus.badState, TONClientTransactionPhase.computeSkipped);

          case 18:
            if (!(reason === QSkipReason.noGas)) {
              _context51.next = 20;
              break;
            }

            throw nodeError('No gas to execute VM', TONClientComputeSkippedStatus.noGas, TONClientTransactionPhase.computeSkipped);

          case 20:
            throw nodeError('Compute phase skipped by unknown reason', -1, TONClientTransactionPhase.computeSkipped);

          case 21:
            if (!(compute.compute_type === QComputeType.vm)) {
              _context51.next = 24;
              break;
            }

            if (compute.success) {
              _context51.next = 24;
              break;
            }

            throw nodeError('VM terminated with exception', compute.exit_code || 0, TONClientTransactionPhase.computeVm);

          case 24:
            action = transaction.action;

            if (!action) {
              _context51.next = 28;
              break;
            }

            if (action.success) {
              _context51.next = 28;
              break;
            }

            throw nodeError(action.no_funds ? 'Too low balance to send outbound message' : !action.valid ? 'Outbound message is invalid' : 'Action phase failed', action.result_code || 0, TONClientTransactionPhase.action);

          case 28:
            throw nodeError('Transaction aborted', -1, TONClientTransactionPhase.unknown);

          case 29:
          case "end":
            return _context51.stop();
        }
      }
    }, _callee51);
  }));
  return _checkTransaction.apply(this, arguments);
}

var transactionDetails = "\n    id\n    in_msg\n    tr_type\n    status\n    in_msg\n    out_msgs\n    block_id\n    now\n    aborted\n    lt\n    storage {\n        status_change\n    }\n    compute {\n        compute_type\n        skipped_reason\n        success\n        exit_code\n        gas_fees\n        gas_used\n    }\n    action {\n        success\n        valid\n        result_code\n        no_funds\n    }\n    out_messages {\n        id\n        msg_type\n        body\n    }\n   ";
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy9tb2R1bGVzL1RPTkNvbnRyYWN0c01vZHVsZS5qcyJdLCJuYW1lcyI6WyJUT05BZGRyZXNzU3RyaW5nVmFyaWFudCIsIkFjY291bnRJZCIsIkhleCIsIkJhc2U2NCIsIlRPTkNsaWVudFRyYW5zYWN0aW9uUGhhc2UiLCJzdG9yYWdlIiwiY29tcHV0ZVNraXBwZWQiLCJjb21wdXRlVm0iLCJhY3Rpb24iLCJ1bmtub3duIiwiVE9OQ2xpZW50Q29tcHV0ZVNraXBwZWRTdGF0dXMiLCJub1N0YXRlIiwiYmFkU3RhdGUiLCJub0dhcyIsIlRPTkNsaWVudFN0b3JhZ2VTdGF0dXMiLCJ1bmNoYW5nZWQiLCJmcm96ZW4iLCJkZWxldGVkIiwiUUluTXNnVHlwZSIsImV4dGVybmFsIiwiaWhyIiwiaW1tZWRpYXRlbHkiLCJ0cmFuc2l0IiwiZGlzY2FyZGVkRmluYWwiLCJkaXNjYXJkZWRUcmFuc2l0IiwiUU91dE1zZ1R5cGUiLCJvdXRNc2dOZXciLCJkZXF1ZXVlSW1tZWRpYXRlbHkiLCJkZXF1ZXVlIiwidHJhbnNpdFJlcXVpcmVkIiwibm9uZSIsIlFNZXNzYWdlVHlwZSIsImludGVybmFsIiwiZXh0SW4iLCJleHRPdXQiLCJRTWVzc2FnZVByb2Nlc3NpbmdTdGF0dXMiLCJxdWV1ZWQiLCJwcm9jZXNzaW5nIiwicHJlbGltaW5hcnkiLCJwcm9wb3NlZCIsImZpbmFsaXplZCIsInJlZnVzZWQiLCJ0cmFuc2l0aW5nIiwiUUJsb2NrUHJvY2Vzc2luZ1N0YXR1cyIsIlFTcGxpdFR5cGUiLCJzcGxpdCIsIm1lcmdlIiwiUUFjY291bnRUeXBlIiwidW5pbml0IiwiYWN0aXZlIiwiUVRyYW5zYWN0aW9uVHlwZSIsIm9yZGluYXJ5IiwidGljayIsInRvY2siLCJzcGxpdFByZXBhcmUiLCJzcGxpdEluc3RhbGwiLCJtZXJnZVByZXBhcmUiLCJtZXJnZUluc3RhbGwiLCJRVHJhbnNhY3Rpb25Qcm9jZXNzaW5nU3RhdHVzIiwiUUFjY291bnRTdGF0dXMiLCJub25FeGlzdCIsIlFBY2NvdW50U3RhdHVzQ2hhbmdlIiwiUUNvbXB1dGVUeXBlIiwic2tpcHBlZCIsInZtIiwiUVNraXBSZWFzb24iLCJRQm91bmNlVHlwZSIsIm5lZ0Z1bmRzIiwibm9GdW5kcyIsIm9rIiwicmVtb3ZlUHJvcHMiLCJvYmoiLCJwYXRocyIsInJlc3VsdCIsImZvckVhY2giLCJwYXRoIiwiZG90UG9zIiwiaW5kZXhPZiIsIm5hbWUiLCJzdWJzdHIiLCJjaGlsZCIsInJlZHVjZWRDaGlsZCIsIlRPTkNvbnRyYWN0c01vZHVsZSIsImNvbmZpZyIsImNvbnRleHQiLCJnZXRNb2R1bGUiLCJUT05Db25maWdNb2R1bGUiLCJxdWVyaWVzIiwiVE9OUXVlcmllc01vZHVsZSIsInBhcmFtcyIsInBhcmVudFNwYW4iLCJhY2NvdW50cyIsInF1ZXJ5IiwiaWQiLCJlcSIsImFkZHJlc3MiLCJ1bmRlZmluZWQiLCJsZW5ndGgiLCJiYWxhbmNlR3JhbXMiLCJiYWxhbmNlIiwidHJhY2UiLCJzcGFuIiwic2V0VGFnIiwiaW50ZXJuYWxEZXBsb3lKcyIsImludGVybmFsUnVuSnMiLCJpbnRlcm5hbFJ1bkxvY2FsSnMiLCJjb3JlUGFyYW1zIiwiY29kZUJhc2U2NCIsImRhdGFCYXNlNjQiLCJUT05DbGllbnRFcnJvciIsImFkZHJlc3NSZXF1aXJlZEZvclJ1bkxvY2FsIiwiZ2V0QWNjb3VudCIsImFjY291bnQiLCJjb2RlIiwiZGF0YSIsInJlcXVlc3RDb3JlIiwiY29ucyIsIml0ZW0iLCJpbnZhbGlkQ29ucyIsInB1c2giLCJyZXRyeUluZGV4IiwibG9nIiwiY29uc3RydWN0b3JIZWFkZXIiLCJtYWtlRXhwaXJlSGVhZGVyIiwiYWJpIiwiY29uc3RydWN0b3JQYXJhbXMiLCJpbml0UGFyYW1zIiwiaW1hZ2VCYXNlNjQiLCJrZXlQYWlyIiwid29ya2NoYWluSWQiLCJtZXNzYWdlIiwibWVzc2FnZUlkIiwibWVzc2FnZUJvZHlCYXNlNjQiLCJleHBpcmUiLCJoZWFkZXIiLCJmdW5jdGlvbk5hbWUiLCJpbnB1dCIsInB1YmxpY0tleUhleCIsImFkZHJlc3NIZXgiLCJzaWduUGFyYW1zIiwiZW5jb2RlZCIsImNyZWF0ZVNpZ25lZE1lc3NhZ2UiLCJ1bnNpZ25lZE1lc3NhZ2UiLCJ1bnNpZ25lZEJ5dGVzQmFzZTY0Iiwic2lnbkJ5dGVzQmFzZTY0IiwiZ2V0Qm9jSGFzaCIsImJvY0Jhc2U2NCIsImhhc2giLCJEYXRlIiwibm93Iiwic2VuZE5vZGVSZXF1ZXN0RmFpbGVkIiwiTWF0aCIsInNlcnZlclRpbWVEZWx0YSIsImFicyIsIm91dE9mU3luY1RocmVzaG9sZCIsImRyb3BTZXJ2ZXJUaW1lRGVsdGEiLCJjbG9ja091dE9mU3luYyIsImdldE1lc3NhZ2VJZCIsImlkQmFzZTY0IiwiQnVmZmVyIiwiZnJvbSIsInRvU3RyaW5nIiwicG9zdFJlcXVlc3RzIiwiYm9keSIsInJlc3VsdEZpZWxkcyIsInNlbmRNZXNzYWdlIiwid2FpdEZvclRyYW5zYWN0aW9uIiwicHJvY2Vzc2luZ1RpbWVvdXQiLCJtZXNzYWdlUHJvY2Vzc2luZ1RpbWVvdXQiLCJwcm9taXNlcyIsImdldFNlcnZlckluZm8iLCJzZXJ2ZXJJbmZvIiwib3BlcmF0aW9uSWQiLCJzdXBwb3J0c09wZXJhdGlvbklkIiwiZ2VuZXJhdGVPcGVyYXRpb25JZCIsInRyYW5zYWN0aW9uIiwid2FpdEV4cGlyZWQiLCJibG9ja3MiLCJ3YWl0Rm9yIiwiZmlsdGVyIiwibWFzdGVyIiwibWluX3NoYXJkX2dlbl91dGltZSIsImdlIiwidGltZW91dCIsImJsb2NrIiwidHJhbnNhY3Rpb25faWQiLCJpbl9tc2dfZGVzY3IiLCJmaW5kIiwibXNnIiwiaW50ZXJuYWxFcnJvciIsInRyYW5zYWN0aW9ucyIsIlByb21pc2UiLCJyZXNvbHZlIiwicmVqZWN0IiwiaW5fbXNnIiwic3RhdHVzIiwicmFjZSIsImZpbmlzaE9wZXJhdGlvbnMiLCJtZXNzYWdlRXhwaXJlZCIsInRyYW5zYWN0aW9uTm93IiwiYmxvY2tfaWQiLCJ0b0lTT1N0cmluZyIsImFjY190eXBlIiwiaXNEZXBsb3llZCIsImFscmVhZHlEZXBsb3llZCIsIndhaXRGb3JEZXBsb3lUcmFuc2FjdGlvbiIsImRlcGxveU1lc3NhZ2UiLCJ0cmFuc2FjdGlvbkRldGFpbHMiLCJjaGVja1RyYW5zYWN0aW9uIiwicnVuTWVzc2FnZSIsIndhaXRGb3JSdW5UcmFuc2FjdGlvbiIsIm91dHB1dE1lc3NhZ2VzIiwib3V0X21lc3NhZ2VzIiwib3V0cHV0IiwiZXh0ZXJuYWxNZXNzYWdlcyIsIngiLCJtc2dfdHlwZSIsImFsbCIsIm1hcCIsImRlY29kZU91dHB1dE1lc3NhZ2VCb2R5IiwiYm9keUJhc2U2NCIsIm91dHB1dHMiLCJyZXN1bHRPdXRwdXQiLCJ0b0xvd2VyQ2FzZSIsIndhaXRQYXJhbXMiLCJtZXNzYWdlQmFzZTY0IiwiZW11bGF0ZUJhbGFuY2UiLCJiaWdCYWxhbmNlIiwiY3JlYXRlRGVwbG95TWVzc2FnZSIsImNhbGNNc2dQcm9jZXNzRmVlcyIsIm5ld0FjY291bnQiLCJsYXN0X3BhaWQiLCJmbG9vciIsInVzZXJIZWFkZXIiLCJtZXNzYWdlRXhwaXJhdGlvblRpbWVvdXQiLCJpbmNsdWRlcyIsImNhbGwiLCJyZXRyaWVzQ291bnQiLCJtZXNzYWdlUmV0cmllc0NvdW50IiwiaSIsImlzTWVzc2FnZUV4cGlyZWQiLCJyZXRyeUNhbGwiLCJjcmVhdGVSdW5NZXNzYWdlIiwicmVtb3ZlVHlwZU5hbWUiLCJfX3R5cGVuYW1lIiwiT2JqZWN0IiwidmFsdWVzIiwidmFsdWUiLCJ0cmFuc2FjdGlvbkx0IiwibGFzdF90cmFuc19sdCIsIlRPTk1vZHVsZSIsIm1vZHVsZU5hbWUiLCJub2RlRXJyb3IiLCJwaGFzZSIsIlJFUExBWV9QUk9URUNUSU9OIiwiTUVTU0FHRV9FWFBJUkVEIiwiaXNOb2RlU0VNZXNzYWdlRXhwaXJlZCIsInNvdXJjZSIsIk5PREUiLCJhYm9ydGVkIiwic3RhdHVzX2NoYW5nZSIsImNvbXB1dGUiLCJjb21wdXRlX3R5cGUiLCJyZWFzb24iLCJza2lwcGVkX3JlYXNvbiIsInN1Y2Nlc3MiLCJleGl0X2NvZGUi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QUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsRzs7OztBQXdHQSxJQUFNc00sa0JBQWtCLHlkQUF4QiIsInNvdXJjZXNDb250ZW50IjpbIi8qXG4gKiBDb3B5cmlnaHQgMjAxOC0yMDIwIFRPTiBERVYgU09MVVRJT05TIExURC5cbiAqL1xuLy8gQGZsb3dcblxuaW1wb3J0IHsgU3BhbiwgU3BhbkNvbnRleHQgfSBmcm9tICdvcGVudHJhY2luZyc7XG5pbXBvcnQgdHlwZSB7XG4gICAgUUFjY291bnQsXG4gICAgUUJsb2NrLFxuICAgIFFNZXNzYWdlLFxuICAgIFFUcmFuc2FjdGlvbixcbiAgICBUT05Db250cmFjdEFCSSxcbiAgICBUT05Db250cmFjdEFjY291bnRXYWl0UGFyYW1zLFxuICAgIFRPTkNvbnRyYWN0Q29udmVydEFkZHJlc3NQYXJhbXMsXG4gICAgVE9OQ29udHJhY3RDb252ZXJ0QWRkcmVzc1Jlc3VsdCxcbiAgICBUT05Db250cmFjdENyZWF0ZVJ1bkJvZHlQYXJhbXMsXG4gICAgVE9OQ29udHJhY3RDcmVhdGVSdW5Cb2R5UmVzdWx0LFxuICAgIFRPTkNvbnRyYWN0Q3JlYXRlU2lnbmVkRGVwbG95TWVzc2FnZVBhcmFtcyxcbiAgICBUT05Db250cmFjdENyZWF0ZVNpZ25lZE1lc3NhZ2VQYXJhbXMsXG4gICAgVE9OQ29udHJhY3RDcmVhdGVTaWduZWRSdW5NZXNzYWdlUGFyYW1zLFxuICAgIFRPTkNvbnRyYWN0RGVjb2RlTWVzc2FnZUJvZHlQYXJhbXMsXG4gICAgVE9OQ29udHJhY3REZWNvZGVNZXNzYWdlQm9keVJlc3VsdCxcbiAgICBUT05Db250cmFjdERlY29kZVJ1bk91dHB1dFBhcmFtcyxcbiAgICBUT05Db250cmFjdERlcGxveU1lc3NhZ2UsXG4gICAgVE9OQ29udHJhY3REZXBsb3lQYXJhbXMsXG4gICAgVE9OQ29udHJhY3REZXBsb3lSZXN1bHQsXG4gICAgVE9OQ29udHJhY3RDYWxjRGVwbG95RmVlUGFyYW1zLFxuICAgIFRPTkNvbnRyYWN0Qm9jLFxuICAgIFRPTkNvbnRyYWN0R2V0Qm9jSGFzaFJlc3VsdCxcbiAgICBUT05Db250cmFjdEdldENvZGVGcm9tSW1hZ2VQYXJhbXMsXG4gICAgVE9OQ29udHJhY3RHZXRDb2RlRnJvbUltYWdlUmVzdWx0LFxuICAgIFRPTkNvbnRyYWN0R2V0RGVwbG95RGF0YVBhcmFtcyxcbiAgICBUT05Db250cmFjdEdldERlcGxveURhdGFSZXN1bHQsXG4gICAgVE9OQ29udHJhY3RHZXRGdW5jdGlvbklkUGFyYW1zLFxuICAgIFRPTkNvbnRyYWN0R2V0RnVuY3Rpb25JZFJlc3VsdCxcbiAgICBUT05Db250cmFjdExvYWRQYXJhbXMsXG4gICAgVE9OQ29udHJhY3RMb2FkUmVzdWx0LFxuICAgIFRPTkNvbnRyYWN0Q2FsY1J1bkZlZVBhcmFtcyxcbiAgICBUT05Db250cmFjdFRyYW5zYWN0aW9uRmVlcyxcbiAgICBUT05Db250cmFjdENhbGNGZWVSZXN1bHQsXG4gICAgVE9OQ29udHJhY3RDYWxjTXNnUHJvY2Vzc2luZ0ZlZXNQYXJhbXMsXG4gICAgVE9OQ29udHJhY3RNZXNzYWdlLFxuICAgIFRPTkNvbnRyYWN0UnVuTG9jYWxQYXJhbXMsXG4gICAgVE9OQ29udHJhY3RSdW5NZXNzYWdlLFxuICAgIFRPTkNvbnRyYWN0UnVuUGFyYW1zLFxuICAgIFRPTkNvbnRyYWN0UnVuUmVzdWx0LFxuICAgIFRPTkNvbnRyYWN0cyxcbiAgICBUT05Db250cmFjdFVuc2lnbmVkRGVwbG95TWVzc2FnZSxcbiAgICBUT05Db250cmFjdFVuc2lnbmVkTWVzc2FnZSxcbiAgICBUT05Db250cmFjdFVuc2lnbmVkUnVuTWVzc2FnZSxcbiAgICBUT05Db250cmFjdFJ1bkdldFBhcmFtcyxcbiAgICBUT05Db250cmFjdFJ1bkdldFJlc3VsdCxcbn0gZnJvbSAnLi4vLi4vdHlwZXMnO1xuaW1wb3J0IHsgVE9OQ2xpZW50RXJyb3IgfSBmcm9tICcuLi9UT05DbGllbnQnO1xuaW1wb3J0IHsgVE9OTW9kdWxlIH0gZnJvbSAnLi4vVE9OTW9kdWxlJztcbmltcG9ydCBUT05Db25maWdNb2R1bGUgZnJvbSAnLi9UT05Db25maWdNb2R1bGUnO1xuaW1wb3J0IFRPTlF1ZXJpZXNNb2R1bGUgZnJvbSAnLi9UT05RdWVyaWVzTW9kdWxlJztcblxuZXhwb3J0IGNvbnN0IFRPTkFkZHJlc3NTdHJpbmdWYXJpYW50ID0ge1xuICAgIEFjY291bnRJZDogJ0FjY291bnRJZCcsXG4gICAgSGV4OiAnSGV4JyxcbiAgICBCYXNlNjQ6ICdCYXNlNjQnLFxufTtcblxuZXhwb3J0IGNvbnN0IFRPTkNsaWVudFRyYW5zYWN0aW9uUGhhc2UgPSB7XG4gICAgc3RvcmFnZTogJ3N0b3JhZ2UnLFxuICAgIGNvbXB1dGVTa2lwcGVkOiAnY29tcHV0ZVNraXBwZWQnLFxuICAgIGNvbXB1dGVWbTogJ2NvbXB1dGVWbScsXG4gICAgYWN0aW9uOiAnYWN0aW9uJyxcbiAgICB1bmtub3duOiAndW5rbm93bicsXG59O1xuXG5leHBvcnQgY29uc3QgVE9OQ2xpZW50Q29tcHV0ZVNraXBwZWRTdGF0dXMgPSB7XG4gICAgbm9TdGF0ZTogMCxcbiAgICBiYWRTdGF0ZTogMSxcbiAgICBub0dhczogMixcbn07XG5cbmV4cG9ydCBjb25zdCBUT05DbGllbnRTdG9yYWdlU3RhdHVzID0ge1xuICAgIHVuY2hhbmdlZDogMCxcbiAgICBmcm96ZW46IDEsXG4gICAgZGVsZXRlZDogMixcbn07XG5cbmV4cG9ydCBjb25zdCBRSW5Nc2dUeXBlID0ge1xuICAgIGV4dGVybmFsOiAwLFxuICAgIGlocjogMSxcbiAgICBpbW1lZGlhdGVseTogMixcbiAgICBmaW5hbDogMyxcbiAgICB0cmFuc2l0OiA0LFxuICAgIGRpc2NhcmRlZEZpbmFsOiA1LFxuICAgIGRpc2NhcmRlZFRyYW5zaXQ6IDYsXG59O1xuXG5leHBvcnQgY29uc3QgUU91dE1zZ1R5cGUgPSB7XG4gICAgZXh0ZXJuYWw6IDAsXG4gICAgaW1tZWRpYXRlbHk6IDEsXG4gICAgb3V0TXNnTmV3OiAyLFxuICAgIHRyYW5zaXQ6IDMsXG4gICAgZGVxdWV1ZUltbWVkaWF0ZWx5OiA0LFxuICAgIGRlcXVldWU6IDUsXG4gICAgdHJhbnNpdFJlcXVpcmVkOiA2LFxuICAgIG5vbmU6IC0xLFxufTtcblxuZXhwb3J0IGNvbnN0IFFNZXNzYWdlVHlwZSA9IHtcbiAgICBpbnRlcm5hbDogMCxcbiAgICBleHRJbjogMSxcbiAgICBleHRPdXQ6IDIsXG59O1xuXG5leHBvcnQgY29uc3QgUU1lc3NhZ2VQcm9jZXNzaW5nU3RhdHVzID0ge1xuICAgIHVua25vd246IDAsXG4gICAgcXVldWVkOiAxLFxuICAgIHByb2Nlc3Npbmc6IDIsXG4gICAgcHJlbGltaW5hcnk6IDMsXG4gICAgcHJvcG9zZWQ6IDQsXG4gICAgZmluYWxpemVkOiA1LFxuICAgIHJlZnVzZWQ6IDYsXG4gICAgdHJhbnNpdGluZzogNyxcbn07XG5cbmV4cG9ydCBjb25zdCBRQmxvY2tQcm9jZXNzaW5nU3RhdHVzID0ge1xuICAgIHVua25vd246IDAsXG4gICAgcHJvcG9zZWQ6IDEsXG4gICAgZmluYWxpemVkOiAyLFxuICAgIHJlZnVzZWQ6IDMsXG59O1xuXG5leHBvcnQgY29uc3QgUVNwbGl0VHlwZSA9IHtcbiAgICBub25lOiAwLFxuICAgIHNwbGl0OiAyLFxuICAgIG1lcmdlOiAzLFxufTtcblxuZXhwb3J0IGNvbnN0IFFBY2NvdW50VHlwZSA9IHtcbiAgICB1bmluaXQ6IDAsXG4gICAgYWN0aXZlOiAxLFxuICAgIGZyb3plbjogMixcbn07XG5cbmV4cG9ydCBjb25zdCBRVHJhbnNhY3Rpb25UeXBlID0ge1xuICAgIG9yZGluYXJ5OiAwLFxuICAgIHN0b3JhZ2U6IDEsXG4gICAgdGljazogMixcbiAgICB0b2NrOiAzLFxuICAgIHNwbGl0UHJlcGFyZTogNCxcbiAgICBzcGxpdEluc3RhbGw6IDUsXG4gICAgbWVyZ2VQcmVwYXJlOiA2LFxuICAgIG1lcmdlSW5zdGFsbDogNyxcbn07XG5cbmV4cG9ydCBjb25zdCBRVHJhbnNhY3Rpb25Qcm9jZXNzaW5nU3RhdHVzID0ge1xuICAgIHVua25vd246IDAsXG4gICAgcHJlbGltaW5hcnk6IDEsXG4gICAgcHJvcG9zZWQ6IDIsXG4gICAgZmluYWxpemVkOiAzLFxuICAgIHJlZnVzZWQ6IDQsXG59O1xuXG5leHBvcnQgY29uc3QgUUFjY291bnRTdGF0dXMgPSB7XG4gICAgdW5pbml0OiAwLFxuICAgIGFjdGl2ZTogMSxcbiAgICBmcm96ZW46IDIsXG4gICAgbm9uRXhpc3Q6IDMsXG59O1xuXG5leHBvcnQgY29uc3QgUUFjY291bnRTdGF0dXNDaGFuZ2UgPSB7XG4gICAgdW5jaGFuZ2VkOiAwLFxuICAgIGZyb3plbjogMSxcbiAgICBkZWxldGVkOiAyLFxufTtcblxuZXhwb3J0IGNvbnN0IFFDb21wdXRlVHlwZSA9IHtcbiAgICBza2lwcGVkOiAwLFxuICAgIHZtOiAxLFxufTtcblxuZXhwb3J0IGNvbnN0IFFTa2lwUmVhc29uID0ge1xuICAgIG5vU3RhdGU6IDAsXG4gICAgYmFkU3RhdGU6IDEsXG4gICAgbm9HYXM6IDIsXG59O1xuXG5leHBvcnQgY29uc3QgUUJvdW5jZVR5cGUgPSB7XG4gICAgbmVnRnVuZHM6IDAsXG4gICAgbm9GdW5kczogMSxcbiAgICBvazogMixcbn07XG5cbmV4cG9ydCBmdW5jdGlvbiByZW1vdmVQcm9wcyhvYmo6IHt9LCBwYXRoczogc3RyaW5nW10pOiB7fSB7XG4gICAgbGV0IHJlc3VsdCA9IG9iajtcbiAgICBwYXRocy5mb3JFYWNoKChwYXRoKSA9PiB7XG4gICAgICAgIGNvbnN0IGRvdFBvcyA9IHBhdGguaW5kZXhPZignLicpO1xuICAgICAgICBpZiAoZG90UG9zIDwgMCkge1xuICAgICAgICAgICAgaWYgKHBhdGggaW4gcmVzdWx0KSB7XG4gICAgICAgICAgICAgICAgcmVzdWx0ID0geyAuLi5yZXN1bHQgfTtcbiAgICAgICAgICAgICAgICBkZWxldGUgcmVzdWx0W3BhdGhdO1xuICAgICAgICAgICAgfVxuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgY29uc3QgbmFtZSA9IHBhdGguc3Vic3RyKDAsIGRvdFBvcyk7XG4gICAgICAgICAgICBjb25zdCBjaGlsZCA9IHJlc3VsdFtuYW1lXTtcbiAgICAgICAgICAgIGlmIChjaGlsZCkge1xuICAgICAgICAgICAgICAgIGNvbnN0IHJlZHVjZWRDaGlsZCA9IHJlbW92ZVByb3BzKGNoaWxkLCBbcGF0aC5zdWJzdHIoZG90UG9zICsgMSldKTtcbiAgICAgICAgICAgICAgICBpZiAocmVkdWNlZENoaWxkICE9PSBjaGlsZCkge1xuICAgICAgICAgICAgICAgICAgICByZXN1bHQgPSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAuLi5yZXN1bHQsXG4gICAgICAgICAgICAgICAgICAgICAgICBbbmFtZV06IHJlZHVjZWRDaGlsZCxcbiAgICAgICAgICAgICAgICAgICAgfTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICB9KTtcbiAgICByZXR1cm4gcmVzdWx0O1xufVxuXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBUT05Db250cmFjdHNNb2R1bGUgZXh0ZW5kcyBUT05Nb2R1bGUgaW1wbGVtZW50cyBUT05Db250cmFjdHMge1xuICAgIGNvbmZpZzogVE9OQ29uZmlnTW9kdWxlO1xuXG4gICAgcXVlcmllczogVE9OUXVlcmllc01vZHVsZTtcblxuICAgIGFzeW5jIHNldHVwKCk6IFByb21pc2U8Kj4ge1xuICAgICAgICB0aGlzLmNvbmZpZyA9IHRoaXMuY29udGV4dC5nZXRNb2R1bGUoVE9OQ29uZmlnTW9kdWxlKTtcbiAgICAgICAgdGhpcy5xdWVyaWVzID0gdGhpcy5jb250ZXh0LmdldE1vZHVsZShUT05RdWVyaWVzTW9kdWxlKTtcbiAgICB9XG5cbiAgICBhc3luYyBsb2FkKFxuICAgICAgICBwYXJhbXM6IFRPTkNvbnRyYWN0TG9hZFBhcmFtcyxcbiAgICAgICAgcGFyZW50U3Bhbj86IChTcGFuIHwgU3BhbkNvbnRleHQpLFxuICAgICk6IFByb21pc2U8VE9OQ29udHJhY3RMb2FkUmVzdWx0PiB7XG4gICAgICAgIGNvbnN0IGFjY291bnRzOiBRQWNjb3VudFtdID0gYXdhaXQgdGhpcy5xdWVyaWVzLmFjY291bnRzLnF1ZXJ5KHtcbiAgICAgICAgICAgIGlkOiB7IGVxOiBwYXJhbXMuYWRkcmVzcyB9LFxuICAgICAgICB9LCAnYmFsYW5jZScsIHVuZGVmaW5lZCwgdW5kZWZpbmVkLCB1bmRlZmluZWQsIHBhcmVudFNwYW4pO1xuICAgICAgICBpZiAoYWNjb3VudHMgJiYgYWNjb3VudHMubGVuZ3RoID4gMCkge1xuICAgICAgICAgICAgcmV0dXJuIHtcbiAgICAgICAgICAgICAgICBpZDogcGFyYW1zLmFkZHJlc3MsXG4gICAgICAgICAgICAgICAgYmFsYW5jZUdyYW1zOiBhY2NvdW50c1swXS5iYWxhbmNlLFxuICAgICAgICAgICAgfTtcbiAgICAgICAgfVxuICAgICAgICByZXR1cm4ge1xuICAgICAgICAgICAgaWQ6IG51bGwsXG4gICAgICAgICAgICBiYWxhbmNlR3JhbXM6IG51bGwsXG4gICAgICAgIH07XG4gICAgfVxuXG5cbiAgICAvLyBGYWNhZGUgZnVuY3Rpb25zXG5cbiAgICBhc3luYyBkZXBsb3koXG4gICAgICAgIHBhcmFtczogVE9OQ29udHJhY3REZXBsb3lQYXJhbXMsXG4gICAgICAgIHBhcmVudFNwYW4/OiAoU3BhbiB8IFNwYW5Db250ZXh0KSxcbiAgICApOiBQcm9taXNlPFRPTkNvbnRyYWN0RGVwbG95UmVzdWx0PiB7XG4gICAgICAgIHJldHVybiB0aGlzLmNvbnRleHQudHJhY2UoJ2NvbnRyYWN0cy5kZXBsb3knLCBhc3luYyAoc3BhbjogU3BhbikgPT4ge1xuICAgICAgICAgICAgc3Bhbi5zZXRUYWcoJ3BhcmFtcycsIHJlbW92ZVByb3BzKHBhcmFtcywgWydrZXlQYWlyLnNlY3JldCddKSk7XG4gICAgICAgICAgICByZXR1cm4gdGhpcy5pbnRlcm5hbERlcGxveUpzKHBhcmFtcywgc3Bhbik7XG4gICAgICAgIH0sIHBhcmVudFNwYW4pO1xuICAgIH1cblxuXG4gICAgYXN5bmMgcnVuKFxuICAgICAgICBwYXJhbXM6IFRPTkNvbnRyYWN0UnVuUGFyYW1zLFxuICAgICAgICBwYXJlbnRTcGFuPzogKFNwYW4gfCBTcGFuQ29udGV4dCksXG4gICAgKTogUHJvbWlzZTxUT05Db250cmFjdFJ1blJlc3VsdD4ge1xuICAgICAgICByZXR1cm4gdGhpcy5jb250ZXh0LnRyYWNlKCdjb250cmFjdHMucnVuJywgYXN5bmMgKHNwYW46IFNwYW4pID0+IHtcbiAgICAgICAgICAgIHNwYW4uc2V0VGFnKCdwYXJhbXMnLCByZW1vdmVQcm9wcyhwYXJhbXMsIFsna2V5UGFpci5zZWNyZXQnXSkpO1xuICAgICAgICAgICAgcmV0dXJuIHRoaXMuaW50ZXJuYWxSdW5KcyhwYXJhbXMsIHNwYW4pO1xuICAgICAgICB9LCBwYXJlbnRTcGFuKTtcbiAgICB9XG5cbiAgICBhc3luYyBydW5Mb2NhbChcbiAgICAgICAgcGFyYW1zOiBUT05Db250cmFjdFJ1bkxvY2FsUGFyYW1zLFxuICAgICAgICBwYXJlbnRTcGFuPzogKFNwYW4gfCBTcGFuQ29udGV4dCksXG4gICAgKTogUHJvbWlzZTxUT05Db250cmFjdFJ1blJlc3VsdD4ge1xuICAgICAgICByZXR1cm4gdGhpcy5jb250ZXh0LnRyYWNlKCdjb250cmFjdHMucnVuTG9jYWwnLCBhc3luYyAoc3BhbjogU3BhbikgPT4ge1xuICAgICAgICAgICAgc3Bhbi5zZXRUYWcoJ3BhcmFtcycsIHJlbW92ZVByb3BzKHBhcmFtcywgWydrZXlQYWlyLnNlY3JldCddKSk7XG4gICAgICAgICAgICByZXR1cm4gdGhpcy5pbnRlcm5hbFJ1bkxvY2FsSnMocGFyYW1zLCBzcGFuKTtcbiAgICAgICAgfSwgcGFyZW50U3Bhbik7XG4gICAgfVxuXG4gICAgYXN5bmMgcnVuR2V0KFxuICAgICAgICBwYXJhbXM6IFRPTkNvbnRyYWN0UnVuR2V0UGFyYW1zLFxuICAgICk6IFByb21pc2U8VE9OQ29udHJhY3RSdW5HZXRSZXN1bHQ+IHtcbiAgICAgICAgbGV0IGNvcmVQYXJhbXM6IFRPTkNvbnRyYWN0UnVuR2V0UGFyYW1zID0gcGFyYW1zO1xuICAgICAgICBpZiAoIXBhcmFtcy5jb2RlQmFzZTY0IHx8ICFwYXJhbXMuZGF0YUJhc2U2NCkge1xuICAgICAgICAgICAgaWYgKCFwYXJhbXMuYWRkcmVzcykge1xuICAgICAgICAgICAgICAgIHRocm93IFRPTkNsaWVudEVycm9yLmFkZHJlc3NSZXF1aXJlZEZvclJ1bkxvY2FsKCk7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBjb25zdCBhY2NvdW50OiBhbnkgPSBhd2FpdCB0aGlzLmdldEFjY291bnQocGFyYW1zLmFkZHJlc3MsIHRydWUpO1xuICAgICAgICAgICAgYWNjb3VudC5jb2RlQmFzZTY0ID0gYWNjb3VudC5jb2RlO1xuICAgICAgICAgICAgYWNjb3VudC5kYXRhQmFzZTY0ID0gYWNjb3VudC5kYXRhO1xuICAgICAgICAgICAgZGVsZXRlIGFjY291bnQuY29kZTtcbiAgICAgICAgICAgIGRlbGV0ZSBhY2NvdW50LmRhdGE7XG4gICAgICAgICAgICBjb3JlUGFyYW1zID0ge1xuICAgICAgICAgICAgICAgIC4uLmFjY291bnQsXG4gICAgICAgICAgICAgICAgLi4ucGFyYW1zLFxuICAgICAgICAgICAgfTtcbiAgICAgICAgfVxuICAgICAgICByZXR1cm4gdGhpcy5yZXF1ZXN0Q29yZSgndHZtLmdldCcsIGNvcmVQYXJhbXMpO1xuICAgIH1cblxuICAgIGFycmF5RnJvbUNPTlMoY29uczogYW55W10pOiBhbnlbXSB7XG4gICAgICAgIGNvbnN0IHJlc3VsdCA9IFtdO1xuICAgICAgICBsZXQgaXRlbSA9IGNvbnM7XG4gICAgICAgIHdoaWxlIChpdGVtKSB7XG4gICAgICAgICAgICBpZiAoIWl0ZW0ubGVuZ3RoID09PSAyKSB7XG4gICAgICAgICAgICAgICAgdGhyb3cgVE9OQ2xpZW50RXJyb3IuaW52YWxpZENvbnMoKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIHJlc3VsdC5wdXNoKGl0ZW1bMF0pO1xuICAgICAgICAgICAgaXRlbSA9IGl0ZW1bMV07XG4gICAgICAgIH1cbiAgICAgICAgcmV0dXJuIHJlc3VsdDtcbiAgICB9XG5cblxuICAgIC8vIE1lc3NhZ2UgY3JlYXRpb25cblxuICAgIGFzeW5jIGNyZWF0ZURlcGxveU1lc3NhZ2UoXG4gICAgICAgIHBhcmFtczogVE9OQ29udHJhY3REZXBsb3lQYXJhbXMsXG4gICAgICAgIHJldHJ5SW5kZXg/OiBudW1iZXIsXG4gICAgKTogUHJvbWlzZTxUT05Db250cmFjdERlcGxveU1lc3NhZ2U+IHtcbiAgICAgICAgdGhpcy5jb25maWcubG9nKCdjcmVhdGVEZXBsb3lNZXNzYWdlJywgcGFyYW1zKTtcbiAgICAgICAgY29uc3QgY29uc3RydWN0b3JIZWFkZXIgPSB0aGlzLm1ha2VFeHBpcmVIZWFkZXIoXG4gICAgICAgICAgICBwYXJhbXMucGFja2FnZS5hYmksXG4gICAgICAgICAgICBwYXJhbXMuY29uc3RydWN0b3JIZWFkZXIsXG4gICAgICAgICAgICByZXRyeUluZGV4LFxuICAgICAgICApO1xuICAgICAgICBjb25zdCBtZXNzYWdlOiB7XG4gICAgICAgICAgICBhZGRyZXNzOiBzdHJpbmcsXG4gICAgICAgICAgICBtZXNzYWdlSWQ6IHN0cmluZyxcbiAgICAgICAgICAgIG1lc3NhZ2VCb2R5QmFzZTY0OiBzdHJpbmcsXG4gICAgICAgIH0gPSBhd2FpdCB0aGlzLnJlcXVlc3RDb3JlKCdjb250cmFjdHMuZGVwbG95Lm1lc3NhZ2UnLCB7XG4gICAgICAgICAgICBhYmk6IHBhcmFtcy5wYWNrYWdlLmFiaSxcbiAgICAgICAgICAgIGNvbnN0cnVjdG9ySGVhZGVyLFxuICAgICAgICAgICAgY29uc3RydWN0b3JQYXJhbXM6IHBhcmFtcy5jb25zdHJ1Y3RvclBhcmFtcyxcbiAgICAgICAgICAgIGluaXRQYXJhbXM6IHBhcmFtcy5pbml0UGFyYW1zLFxuICAgICAgICAgICAgaW1hZ2VCYXNlNjQ6IHBhcmFtcy5wYWNrYWdlLmltYWdlQmFzZTY0LFxuICAgICAgICAgICAga2V5UGFpcjogcGFyYW1zLmtleVBhaXIsXG4gICAgICAgICAgICB3b3JrY2hhaW5JZDogcGFyYW1zLndvcmtjaGFpbklkLFxuICAgICAgICB9KTtcbiAgICAgICAgcmV0dXJuIHtcbiAgICAgICAgICAgIG1lc3NhZ2U6IHtcbiAgICAgICAgICAgICAgICBtZXNzYWdlSWQ6IG1lc3NhZ2UubWVzc2FnZUlkLFxuICAgICAgICAgICAgICAgIG1lc3NhZ2VCb2R5QmFzZTY0OiBtZXNzYWdlLm1lc3NhZ2VCb2R5QmFzZTY0LFxuICAgICAgICAgICAgICAgIGV4cGlyZTogY29uc3RydWN0b3JIZWFkZXI/LmV4cGlyZSxcbiAgICAgICAgICAgIH0sXG4gICAgICAgICAgICBhZGRyZXNzOiBtZXNzYWdlLmFkZHJlc3MsXG4gICAgICAgIH07XG4gICAgfVxuXG5cbiAgICBhc3luYyBjcmVhdGVSdW5NZXNzYWdlKFxuICAgICAgICBwYXJhbXM6IFRPTkNvbnRyYWN0UnVuUGFyYW1zLFxuICAgICAgICByZXRyeUluZGV4PzogbnVtYmVyLFxuICAgICk6IFByb21pc2U8VE9OQ29udHJhY3RSdW5NZXNzYWdlPiB7XG4gICAgICAgIHRoaXMuY29uZmlnLmxvZygnY3JlYXRlUnVuTWVzc2FnZScsIHBhcmFtcyk7XG4gICAgICAgIGNvbnN0IGhlYWRlciA9IHRoaXMubWFrZUV4cGlyZUhlYWRlcihcbiAgICAgICAgICAgIHBhcmFtcy5hYmksXG4gICAgICAgICAgICBwYXJhbXMuaGVhZGVyLFxuICAgICAgICAgICAgcmV0cnlJbmRleCxcbiAgICAgICAgKTtcbiAgICAgICAgY29uc3QgbWVzc2FnZSA9IGF3YWl0IHRoaXMucmVxdWVzdENvcmUoJ2NvbnRyYWN0cy5ydW4ubWVzc2FnZScsIHtcbiAgICAgICAgICAgIGFkZHJlc3M6IHBhcmFtcy5hZGRyZXNzLFxuICAgICAgICAgICAgYWJpOiBwYXJhbXMuYWJpLFxuICAgICAgICAgICAgZnVuY3Rpb25OYW1lOiBwYXJhbXMuZnVuY3Rpb25OYW1lLFxuICAgICAgICAgICAgaGVhZGVyLFxuICAgICAgICAgICAgaW5wdXQ6IHBhcmFtcy5pbnB1dCxcbiAgICAgICAgICAgIGtleVBhaXI6IHBhcmFtcy5rZXlQYWlyLFxuICAgICAgICB9KTtcbiAgICAgICAgbWVzc2FnZS5leHBpcmUgPSBoZWFkZXI/LmV4cGlyZTtcbiAgICAgICAgcmV0dXJuIHtcbiAgICAgICAgICAgIGFkZHJlc3M6IHBhcmFtcy5hZGRyZXNzLFxuICAgICAgICAgICAgYWJpOiBwYXJhbXMuYWJpLFxuICAgICAgICAgICAgZnVuY3Rpb25OYW1lOiBwYXJhbXMuZnVuY3Rpb25OYW1lLFxuICAgICAgICAgICAgbWVzc2FnZSxcbiAgICAgICAgfTtcbiAgICB9XG5cbiAgICBhc3luYyBjcmVhdGVVbnNpZ25lZERlcGxveU1lc3NhZ2UoXG4gICAgICAgIHBhcmFtczogVE9OQ29udHJhY3REZXBsb3lQYXJhbXMsXG4gICAgICAgIHJldHJ5SW5kZXg/OiBudW1iZXIsXG4gICAgKTogUHJvbWlzZTxUT05Db250cmFjdFVuc2lnbmVkRGVwbG95TWVzc2FnZT4ge1xuICAgICAgICBjb25zdCBjb25zdHJ1Y3RvckhlYWRlciA9IHRoaXMubWFrZUV4cGlyZUhlYWRlcihcbiAgICAgICAgICAgIHBhcmFtcy5wYWNrYWdlLmFiaSxcbiAgICAgICAgICAgIHBhcmFtcy5jb25zdHJ1Y3RvckhlYWRlcixcbiAgICAgICAgICAgIHJldHJ5SW5kZXgsXG4gICAgICAgICk7XG4gICAgICAgIGNvbnN0IHJlc3VsdDoge1xuICAgICAgICAgICAgZW5jb2RlZDogVE9OQ29udHJhY3RVbnNpZ25lZE1lc3NhZ2UsXG4gICAgICAgICAgICBhZGRyZXNzSGV4OiBzdHJpbmcsXG4gICAgICAgIH0gPSBhd2FpdCB0aGlzLnJlcXVlc3RDb3JlKCdjb250cmFjdHMuZGVwbG95LmVuY29kZV91bnNpZ25lZF9tZXNzYWdlJywge1xuICAgICAgICAgICAgYWJpOiBwYXJhbXMucGFja2FnZS5hYmksXG4gICAgICAgICAgICBjb25zdHJ1Y3RvckhlYWRlcixcbiAgICAgICAgICAgIGNvbnN0cnVjdG9yUGFyYW1zOiBwYXJhbXMuY29uc3RydWN0b3JQYXJhbXMsXG4gICAgICAgICAgICBpbml0UGFyYW1zOiBwYXJhbXMuaW5pdFBhcmFtcyxcbiAgICAgICAgICAgIGltYWdlQmFzZTY0OiBwYXJhbXMucGFja2FnZS5pbWFnZUJhc2U2NCxcbiAgICAgICAgICAgIHB1YmxpY0tleUhleDogcGFyYW1zLmtleVBhaXIucHVibGljLFxuICAgICAgICAgICAgd29ya2NoYWluSWQ6IHBhcmFtcy53b3JrY2hhaW5JZCxcbiAgICAgICAgfSk7XG4gICAgICAgIHJldHVybiB7XG4gICAgICAgICAgICBhZGRyZXNzOiByZXN1bHQuYWRkcmVzc0hleCxcbiAgICAgICAgICAgIHNpZ25QYXJhbXM6IHtcbiAgICAgICAgICAgICAgICAuLi5yZXN1bHQuZW5jb2RlZCxcbiAgICAgICAgICAgICAgICBhYmk6IHBhcmFtcy5wYWNrYWdlLmFiaSxcbiAgICAgICAgICAgICAgICBleHBpcmU6IGNvbnN0cnVjdG9ySGVhZGVyPy5leHBpcmUsXG4gICAgICAgICAgICB9LFxuICAgICAgICB9O1xuICAgIH1cblxuXG4gICAgYXN5bmMgY3JlYXRlVW5zaWduZWRSdW5NZXNzYWdlKFxuICAgICAgICBwYXJhbXM6IFRPTkNvbnRyYWN0UnVuUGFyYW1zLFxuICAgICAgICByZXRyeUluZGV4PzogbnVtYmVyLFxuICAgICk6IFByb21pc2U8VE9OQ29udHJhY3RVbnNpZ25lZFJ1bk1lc3NhZ2U+IHtcbiAgICAgICAgY29uc3QgaGVhZGVyID0gdGhpcy5tYWtlRXhwaXJlSGVhZGVyKFxuICAgICAgICAgICAgcGFyYW1zLmFiaSxcbiAgICAgICAgICAgIHBhcmFtcy5oZWFkZXIsXG4gICAgICAgICAgICByZXRyeUluZGV4LFxuICAgICAgICApO1xuICAgICAgICBjb25zdCBzaWduUGFyYW1zID0gYXdhaXQgdGhpcy5yZXF1ZXN0Q29yZSgnY29udHJhY3RzLnJ1bi5lbmNvZGVfdW5zaWduZWRfbWVzc2FnZScsIHtcbiAgICAgICAgICAgIGFkZHJlc3M6IHBhcmFtcy5hZGRyZXNzLFxuICAgICAgICAgICAgYWJpOiBwYXJhbXMuYWJpLFxuICAgICAgICAgICAgZnVuY3Rpb25OYW1lOiBwYXJhbXMuZnVuY3Rpb25OYW1lLFxuICAgICAgICAgICAgaGVhZGVyLFxuICAgICAgICAgICAgaW5wdXQ6IHBhcmFtcy5pbnB1dCxcbiAgICAgICAgfSk7XG4gICAgICAgIHJldHVybiB7XG4gICAgICAgICAgICBhZGRyZXNzOiBwYXJhbXMuYWRkcmVzcyxcbiAgICAgICAgICAgIGZ1bmN0aW9uTmFtZTogcGFyYW1zLmZ1bmN0aW9uTmFtZSxcbiAgICAgICAgICAgIHNpZ25QYXJhbXM6IHtcbiAgICAgICAgICAgICAgICAuLi5zaWduUGFyYW1zLFxuICAgICAgICAgICAgICAgIGFiaTogcGFyYW1zLmFiaSxcbiAgICAgICAgICAgICAgICBleHBpcmU6IGhlYWRlcj8uZXhwaXJlLFxuICAgICAgICAgICAgfSxcbiAgICAgICAgfTtcbiAgICB9XG5cblxuICAgIGFzeW5jIGNyZWF0ZVNpZ25lZE1lc3NhZ2UoXG4gICAgICAgIHBhcmFtczogVE9OQ29udHJhY3RDcmVhdGVTaWduZWRNZXNzYWdlUGFyYW1zLFxuICAgICk6IFByb21pc2U8VE9OQ29udHJhY3RNZXNzYWdlPiB7XG4gICAgICAgIHJldHVybiB0aGlzLnJlcXVlc3RDb3JlKCdjb250cmFjdHMuZW5jb2RlX21lc3NhZ2Vfd2l0aF9zaWduJywgcGFyYW1zKTtcbiAgICB9XG5cblxuICAgIGFzeW5jIGNyZWF0ZVNpZ25lZERlcGxveU1lc3NhZ2UoXG4gICAgICAgIHBhcmFtczogVE9OQ29udHJhY3RDcmVhdGVTaWduZWREZXBsb3lNZXNzYWdlUGFyYW1zLFxuICAgICk6IFByb21pc2U8VE9OQ29udHJhY3REZXBsb3lNZXNzYWdlPiB7XG4gICAgICAgIGNvbnN0IG1lc3NhZ2UgPSBhd2FpdCB0aGlzLmNyZWF0ZVNpZ25lZE1lc3NhZ2Uoe1xuICAgICAgICAgICAgYWJpOiBwYXJhbXMudW5zaWduZWRNZXNzYWdlLnNpZ25QYXJhbXMuYWJpLFxuICAgICAgICAgICAgdW5zaWduZWRCeXRlc0Jhc2U2NDogcGFyYW1zLnVuc2lnbmVkTWVzc2FnZS5zaWduUGFyYW1zLnVuc2lnbmVkQnl0ZXNCYXNlNjQsXG4gICAgICAgICAgICBzaWduQnl0ZXNCYXNlNjQ6IHBhcmFtcy5zaWduQnl0ZXNCYXNlNjQsXG4gICAgICAgICAgICBwdWJsaWNLZXlIZXg6IHBhcmFtcy5wdWJsaWNLZXlIZXgsXG4gICAgICAgIH0pO1xuICAgICAgICBtZXNzYWdlLmV4cGlyZSA9IHBhcmFtcy51bnNpZ25lZE1lc3NhZ2Uuc2lnblBhcmFtcy5leHBpcmU7XG4gICAgICAgIHJldHVybiB7XG4gICAgICAgICAgICBhZGRyZXNzOiBwYXJhbXMudW5zaWduZWRNZXNzYWdlLmFkZHJlc3MsXG4gICAgICAgICAgICBtZXNzYWdlLFxuICAgICAgICB9O1xuICAgIH1cblxuXG4gICAgYXN5bmMgY3JlYXRlU2lnbmVkUnVuTWVzc2FnZShcbiAgICAgICAgcGFyYW1zOiBUT05Db250cmFjdENyZWF0ZVNpZ25lZFJ1bk1lc3NhZ2VQYXJhbXMsXG4gICAgKTogUHJvbWlzZTxUT05Db250cmFjdFJ1bk1lc3NhZ2U+IHtcbiAgICAgICAgY29uc3QgbWVzc2FnZSA9IGF3YWl0IHRoaXMuY3JlYXRlU2lnbmVkTWVzc2FnZSh7XG4gICAgICAgICAgICBhYmk6IHBhcmFtcy51bnNpZ25lZE1lc3NhZ2Uuc2lnblBhcmFtcy5hYmksXG4gICAgICAgICAgICB1bnNpZ25lZEJ5dGVzQmFzZTY0OiBwYXJhbXMudW5zaWduZWRNZXNzYWdlLnNpZ25QYXJhbXMudW5zaWduZWRCeXRlc0Jhc2U2NCxcbiAgICAgICAgICAgIHNpZ25CeXRlc0Jhc2U2NDogcGFyYW1zLnNpZ25CeXRlc0Jhc2U2NCxcbiAgICAgICAgICAgIHB1YmxpY0tleUhleDogcGFyYW1zLnB1YmxpY0tleUhleCxcbiAgICAgICAgfSk7XG4gICAgICAgIG1lc3NhZ2UuZXhwaXJlID0gcGFyYW1zLnVuc2lnbmVkTWVzc2FnZS5zaWduUGFyYW1zLmV4cGlyZTtcbiAgICAgICAgcmV0dXJuIHtcbiAgICAgICAgICAgIGFkZHJlc3M6IHBhcmFtcy51bnNpZ25lZE1lc3NhZ2UuYWRkcmVzcyxcbiAgICAgICAgICAgIGFiaTogcGFyYW1zLnVuc2lnbmVkTWVzc2FnZS5zaWduUGFyYW1zLmFiaSxcbiAgICAgICAgICAgIGZ1bmN0aW9uTmFtZTogcGFyYW1zLnVuc2lnbmVkTWVzc2FnZS5mdW5jdGlvbk5hbWUsXG4gICAgICAgICAgICBtZXNzYWdlLFxuICAgICAgICB9O1xuICAgIH1cblxuICAgIGFzeW5jIGdldENvZGVGcm9tSW1hZ2UoXG4gICAgICAgIHBhcmFtczogVE9OQ29udHJhY3RHZXRDb2RlRnJvbUltYWdlUGFyYW1zLFxuICAgICk6IFByb21pc2U8VE9OQ29udHJhY3RHZXRDb2RlRnJvbUltYWdlUmVzdWx0PiB7XG4gICAgICAgIHJldHVybiB0aGlzLnJlcXVlc3RDb3JlKCdjb250cmFjdHMuaW1hZ2UuY29kZScsIHBhcmFtcyk7XG4gICAgfVxuXG4gICAgYXN5bmMgZ2V0RGVwbG95RGF0YShcbiAgICAgICAgcGFyYW1zOiBUT05Db250cmFjdEdldERlcGxveURhdGFQYXJhbXMsXG4gICAgKTogUHJvbWlzZTxUT05Db250cmFjdEdldERlcGxveURhdGFSZXN1bHQ+IHtcbiAgICAgICAgcmV0dXJuIHRoaXMucmVxdWVzdENvcmUoJ2NvbnRyYWN0cy5kZXBsb3kuZGF0YScsIHBhcmFtcyk7XG4gICAgfVxuXG4gICAgYXN5bmMgY3JlYXRlUnVuQm9keShcbiAgICAgICAgcGFyYW1zOiBUT05Db250cmFjdENyZWF0ZVJ1bkJvZHlQYXJhbXMsXG4gICAgKTogUHJvbWlzZTxUT05Db250cmFjdENyZWF0ZVJ1bkJvZHlSZXN1bHQ+IHtcbiAgICAgICAgcmV0dXJuIHRoaXMucmVxdWVzdENvcmUoJ2NvbnRyYWN0cy5ydW4uYm9keScsIHBhcmFtcyk7XG4gICAgfVxuXG4gICAgYXN5bmMgZ2V0RnVuY3Rpb25JZChcbiAgICAgICAgcGFyYW1zOiBUT05Db250cmFjdEdldEZ1bmN0aW9uSWRQYXJhbXMsXG4gICAgKTogUHJvbWlzZTxUT05Db250cmFjdEdldEZ1bmN0aW9uSWRSZXN1bHQ+IHtcbiAgICAgICAgcmV0dXJuIHRoaXMucmVxdWVzdENvcmUoJ2NvbnRyYWN0cy5mdW5jdGlvbi5pZCcsIHBhcmFtcyk7XG4gICAgfVxuXG4gICAgYXN5bmMgZ2V0Qm9jSGFzaChcbiAgICAgICAgcGFyYW1zOiBUT05Db250cmFjdEJvYyxcbiAgICApOiBQcm9taXNlPFRPTkNvbnRyYWN0R2V0Qm9jSGFzaFJlc3VsdD4ge1xuICAgICAgICByZXR1cm4gdGhpcy5yZXF1ZXN0Q29yZSgnY29udHJhY3RzLmJvYy5oYXNoJywgcGFyYW1zKTtcbiAgICB9XG5cbiAgICBhc3luYyBwYXJzZU1lc3NhZ2UoXG4gICAgICAgIHBhcmFtczogVE9OQ29udHJhY3RCb2MsXG4gICAgKTogUHJvbWlzZTxRTWVzc2FnZT4ge1xuICAgICAgICByZXR1cm4gdGhpcy5yZXF1ZXN0Q29yZSgnY29udHJhY3RzLnBhcnNlLm1lc3NhZ2UnLCBwYXJhbXMpO1xuICAgIH1cblxuICAgIC8vIE1lc3NhZ2UgcGFyc2luZ1xuXG4gICAgYXN5bmMgZGVjb2RlUnVuT3V0cHV0KFxuICAgICAgICBwYXJhbXM6IFRPTkNvbnRyYWN0RGVjb2RlUnVuT3V0cHV0UGFyYW1zLFxuICAgICk6IFByb21pc2U8VE9OQ29udHJhY3RSdW5SZXN1bHQ+IHtcbiAgICAgICAgcmV0dXJuIHRoaXMucmVxdWVzdENvcmUoJ2NvbnRyYWN0cy5ydW4ub3V0cHV0JywgcGFyYW1zKTtcbiAgICB9XG5cblxuICAgIGFzeW5jIGRlY29kZUlucHV0TWVzc2FnZUJvZHkoXG4gICAgICAgIHBhcmFtczogVE9OQ29udHJhY3REZWNvZGVNZXNzYWdlQm9keVBhcmFtcyxcbiAgICApOiBQcm9taXNlPFRPTkNvbnRyYWN0RGVjb2RlTWVzc2FnZUJvZHlSZXN1bHQ+IHtcbiAgICAgICAgcmV0dXJuIHRoaXMucmVxdWVzdENvcmUoJ2NvbnRyYWN0cy5ydW4udW5rbm93bi5pbnB1dCcsIHBhcmFtcyk7XG4gICAgfVxuXG5cbiAgICBhc3luYyBkZWNvZGVPdXRwdXRNZXNzYWdlQm9keShcbiAgICAgICAgcGFyYW1zOiBUT05Db250cmFjdERlY29kZU1lc3NhZ2VCb2R5UGFyYW1zLFxuICAgICk6IFByb21pc2U8VE9OQ29udHJhY3REZWNvZGVNZXNzYWdlQm9keVJlc3VsdD4ge1xuICAgICAgICByZXR1cm4gdGhpcy5yZXF1ZXN0Q29yZSgnY29udHJhY3RzLnJ1bi51bmtub3duLm91dHB1dCcsIHBhcmFtcyk7XG4gICAgfVxuXG4gICAgLy8gTWVzc2FnZSBwcm9jZXNzaW5nXG5cbiAgICBhc3luYyBnZXRNZXNzYWdlSWQobWVzc2FnZTogVE9OQ29udHJhY3RNZXNzYWdlKTogUHJvbWlzZTxzdHJpbmc+IHtcbiAgICAgICAgcmV0dXJuIG1lc3NhZ2UubWVzc2FnZUlkIHx8IChhd2FpdCB0aGlzLmdldEJvY0hhc2goe1xuICAgICAgICAgICAgYm9jQmFzZTY0OiBtZXNzYWdlLm1lc3NhZ2VCb2R5QmFzZTY0LFxuICAgICAgICB9KSkuaGFzaFxuICAgIH1cblxuICAgIGFzeW5jIHNlbmRNZXNzYWdlKFxuICAgICAgICBwYXJhbXM6IFRPTkNvbnRyYWN0TWVzc2FnZSxcbiAgICAgICAgcGFyZW50U3Bhbj86IChTcGFuIHwgU3BhbkNvbnRleHQpLFxuICAgICk6IFByb21pc2U8c3RyaW5nPiB7XG4gICAgICAgIGNvbnN0IGV4cGlyZSA9IHBhcmFtcy5leHBpcmU7XG4gICAgICAgIGlmIChleHBpcmUgJiYgKERhdGUubm93KCkgPiBleHBpcmUgKiAxMDAwKSkge1xuICAgICAgICAgICAgdGhyb3cgVE9OQ2xpZW50RXJyb3Iuc2VuZE5vZGVSZXF1ZXN0RmFpbGVkKCdNZXNzYWdlIGFscmVhZHkgZXhwaXJlZCcpO1xuICAgICAgICB9XG4gICAgICAgIGNvbnN0IHNlcnZlclRpbWVEZWx0YSA9IE1hdGguYWJzKGF3YWl0IHRoaXMucXVlcmllcy5zZXJ2ZXJUaW1lRGVsdGEocGFyZW50U3BhbikpO1xuICAgICAgICBpZiAoc2VydmVyVGltZURlbHRhID4gdGhpcy5jb25maWcub3V0T2ZTeW5jVGhyZXNob2xkKCkpIHtcbiAgICAgICAgICAgIHRoaXMucXVlcmllcy5kcm9wU2VydmVyVGltZURlbHRhKCk7XG4gICAgICAgICAgICB0aHJvdyBUT05DbGllbnRFcnJvci5jbG9ja091dE9mU3luYygpO1xuICAgICAgICB9XG4gICAgICAgIGNvbnN0IGlkID0gYXdhaXQgdGhpcy5nZXRNZXNzYWdlSWQocGFyYW1zKTtcbiAgICAgICAgY29uc3QgaWRCYXNlNjQgPSBCdWZmZXIuZnJvbShpZCwgJ2hleCcpLnRvU3RyaW5nKCdiYXNlNjQnKTtcbiAgICAgICAgYXdhaXQgdGhpcy5xdWVyaWVzLnBvc3RSZXF1ZXN0cyhbXG4gICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgaWQ6IGlkQmFzZTY0LFxuICAgICAgICAgICAgICAgIGJvZHk6IHBhcmFtcy5tZXNzYWdlQm9keUJhc2U2NCxcbiAgICAgICAgICAgIH0sXG4gICAgICAgIF0sIHBhcmVudFNwYW4pO1xuICAgICAgICB0aGlzLmNvbmZpZy5sb2coJ3NlbmRNZXNzYWdlLiBSZXF1ZXN0IHBvc3RlZCcpO1xuICAgICAgICByZXR1cm4gaWQ7XG4gICAgfVxuXG4gICAgYXN5bmMgcHJvY2Vzc01lc3NhZ2UoXG4gICAgICAgIG1lc3NhZ2U6IFRPTkNvbnRyYWN0TWVzc2FnZSxcbiAgICAgICAgcmVzdWx0RmllbGRzOiBzdHJpbmcsXG4gICAgICAgIHBhcmVudFNwYW4/OiAoU3BhbiB8IFNwYW5Db250ZXh0KSxcbiAgICAgICAgcmV0cnlJbmRleD86IG51bWJlcixcbiAgICApOiBQcm9taXNlPFFUcmFuc2FjdGlvbj4ge1xuICAgICAgICBhd2FpdCB0aGlzLnNlbmRNZXNzYWdlKG1lc3NhZ2UsIHBhcmVudFNwYW4pO1xuICAgICAgICByZXR1cm4gdGhpcy53YWl0Rm9yVHJhbnNhY3Rpb24obWVzc2FnZSwgcmVzdWx0RmllbGRzLCBwYXJlbnRTcGFuLCByZXRyeUluZGV4KTtcbiAgICB9XG5cblxuICAgIGFzeW5jIHdhaXRGb3JUcmFuc2FjdGlvbihcbiAgICAgICAgbWVzc2FnZTogVE9OQ29udHJhY3RNZXNzYWdlLFxuICAgICAgICByZXN1bHRGaWVsZHM6IHN0cmluZyxcbiAgICAgICAgcGFyZW50U3Bhbj86IChTcGFuIHwgU3BhbkNvbnRleHQpLFxuICAgICAgICByZXRyeUluZGV4PzogbnVtYmVyLFxuICAgICk6IFByb21pc2U8UVRyYW5zYWN0aW9uPiB7XG4gICAgICAgIGNvbnN0IG1lc3NhZ2VJZCA9IGF3YWl0IHRoaXMuZ2V0TWVzc2FnZUlkKG1lc3NhZ2UpO1xuICAgICAgICBjb25zdCBjb25maWcgPSB0aGlzLmNvbmZpZztcbiAgICAgICAgbGV0IHByb2Nlc3NpbmdUaW1lb3V0ID0gY29uZmlnLm1lc3NhZ2VQcm9jZXNzaW5nVGltZW91dChyZXRyeUluZGV4KTtcbiAgICAgICAgY29uc3QgcHJvbWlzZXMgPSBbXTtcbiAgICAgICAgY29uc3Qgc2VydmVySW5mbyA9IGF3YWl0IHRoaXMucXVlcmllcy5nZXRTZXJ2ZXJJbmZvKHBhcmVudFNwYW4pO1xuICAgICAgICBjb25zdCBvcGVyYXRpb25JZCA9IHNlcnZlckluZm8uc3VwcG9ydHNPcGVyYXRpb25JZFxuICAgICAgICAgICAgPyB0aGlzLnF1ZXJpZXMuZ2VuZXJhdGVPcGVyYXRpb25JZCgpXG4gICAgICAgICAgICA6IHVuZGVmaW5lZDtcbiAgICAgICAgbGV0IHRyYW5zYWN0aW9uOiA/UVRyYW5zYWN0aW9uID0gbnVsbDtcbiAgICAgICAgY29uc3QgZXhwaXJlID0gbWVzc2FnZS5leHBpcmU7XG4gICAgICAgIGlmIChleHBpcmUpIHtcbiAgICAgICAgICAgIC8vIGNhbGN1bGF0ZSB0aW1lb3V0IGFjY29yZGluZyB0byBgZXhwaXJlYCB2YWx1ZSAoaW4gc2Vjb25kcylcbiAgICAgICAgICAgIC8vIGFkZCBwcm9jZXNzaW5nIHRpbWVvdXQgYXMgbWFzdGVyIGJsb2NrIHZhbGlkYXRpb24gdGltZVxuICAgICAgICAgICAgcHJvY2Vzc2luZ1RpbWVvdXQgPSBleHBpcmUgKiAxMDAwIC0gRGF0ZS5ub3coKSArIHByb2Nlc3NpbmdUaW1lb3V0O1xuXG4gICAgICAgICAgICBjb25zdCB3YWl0RXhwaXJlZCA9IGFzeW5jICgpID0+IHtcbiAgICAgICAgICAgICAgICAvLyB3YWl0IGZvciBibG9jaywgcHJvZHVjZWQgYWZ0ZXIgYGV4cGlyZWAgdG8gZ3VhcmFudGVlIHRoYXQgbWVzc2FnZSBpcyByZWplY3RlZFxuICAgICAgICAgICAgICAgIGNvbnN0IGJsb2NrOiBRQmxvY2sgPSBhd2FpdCB0aGlzLnF1ZXJpZXMuYmxvY2tzLndhaXRGb3Ioe1xuICAgICAgICAgICAgICAgICAgICBmaWx0ZXI6IHtcbiAgICAgICAgICAgICAgICAgICAgICAgIG1hc3RlcjogeyBtaW5fc2hhcmRfZ2VuX3V0aW1lOiB7IGdlOiBleHBpcmUgfSB9LFxuICAgICAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgICAgICByZXN1bHQ6ICdpbl9tc2dfZGVzY3IgeyB0cmFuc2FjdGlvbl9pZCB9JyxcbiAgICAgICAgICAgICAgICAgICAgdGltZW91dDogcHJvY2Vzc2luZ1RpbWVvdXQsXG4gICAgICAgICAgICAgICAgICAgIHBhcmVudFNwYW4sXG4gICAgICAgICAgICAgICAgICAgIG9wZXJhdGlvbklkLFxuICAgICAgICAgICAgICAgIH0pO1xuXG4gICAgICAgICAgICAgICAgaWYgKHRyYW5zYWN0aW9uKSB7XG4gICAgICAgICAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgICAgICAgICB9XG5cbiAgICAgICAgICAgICAgICBjb25zdCB0cmFuc2FjdGlvbl9pZCA9IGJsb2NrLmluX21zZ19kZXNjclxuICAgICAgICAgICAgICAgICAgICAmJiBibG9jay5pbl9tc2dfZGVzY3IuZmluZChtc2cgPT4gISFtc2cudHJhbnNhY3Rpb25faWQpPy50cmFuc2FjdGlvbl9pZDtcblxuICAgICAgICAgICAgICAgIGlmICghdHJhbnNhY3Rpb25faWQpIHtcbiAgICAgICAgICAgICAgICAgICAgdGhyb3cgVE9OQ2xpZW50RXJyb3IuaW50ZXJuYWxFcnJvcignSW52YWxpZCBibG9jayByZWNlaXZlZDogbm8gdHJhbnNhY3Rpb24gSUQnKTtcbiAgICAgICAgICAgICAgICB9XG5cbiAgICAgICAgICAgICAgICAvLyBjaGVjayB0aGF0IHRyYW5zYWN0aW9ucyBjb2xsZWN0aW9uIGlzIHVwZGF0ZWRcbiAgICAgICAgICAgICAgICBhd2FpdCB0aGlzLnF1ZXJpZXMudHJhbnNhY3Rpb25zLndhaXRGb3Ioe1xuICAgICAgICAgICAgICAgICAgICBmaWx0ZXI6IHtcbiAgICAgICAgICAgICAgICAgICAgICAgIGlkOiB7IGVxOiB0cmFuc2FjdGlvbl9pZCB9LFxuICAgICAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgICAgICByZXN1bHQ6ICdpZCcsXG4gICAgICAgICAgICAgICAgICAgIHRpbWVvdXQ6IHByb2Nlc3NpbmdUaW1lb3V0LFxuICAgICAgICAgICAgICAgICAgICBwYXJlbnRTcGFuLFxuICAgICAgICAgICAgICAgICAgICBvcGVyYXRpb25JZCxcbiAgICAgICAgICAgICAgICB9KTtcbiAgICAgICAgICAgIH07XG5cbiAgICAgICAgICAgIHByb21pc2VzLnB1c2god2FpdEV4cGlyZWQoKSk7XG4gICAgICAgIH1cblxuICAgICAgICAvLyB3YWl0IGZvciBtZXNzYWdlIHByb2Nlc3NpbmcgdHJhbnNhY3Rpb25cbiAgICAgICAgcHJvbWlzZXMucHVzaChuZXcgUHJvbWlzZSgocmVzb2x2ZSwgcmVqZWN0KSA9PiB7XG4gICAgICAgICAgICAoYXN5bmMgKCkgPT4ge1xuICAgICAgICAgICAgICAgIHRyeSB7XG4gICAgICAgICAgICAgICAgICAgIHRyYW5zYWN0aW9uID0gYXdhaXQgdGhpcy5xdWVyaWVzLnRyYW5zYWN0aW9ucy53YWl0Rm9yKHtcbiAgICAgICAgICAgICAgICAgICAgICAgIGZpbHRlcjoge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGluX21zZzogeyBlcTogbWVzc2FnZUlkIH0sXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgc3RhdHVzOiB7IGVxOiBRVHJhbnNhY3Rpb25Qcm9jZXNzaW5nU3RhdHVzLmZpbmFsaXplZCB9LFxuICAgICAgICAgICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICAgICAgICAgIHJlc3VsdDogcmVzdWx0RmllbGRzLFxuICAgICAgICAgICAgICAgICAgICAgICAgdGltZW91dDogcHJvY2Vzc2luZ1RpbWVvdXQsXG4gICAgICAgICAgICAgICAgICAgICAgICBvcGVyYXRpb25JZCxcbiAgICAgICAgICAgICAgICAgICAgICAgIHBhcmVudFNwYW4sXG4gICAgICAgICAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgICAgICAgICByZXNvbHZlKCk7XG4gICAgICAgICAgICAgICAgfSBjYXRjaCAoZXJyb3IpIHtcbiAgICAgICAgICAgICAgICAgICAgcmVqZWN0KGVycm9yKTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9KSgpO1xuICAgICAgICB9KSk7XG5cbiAgICAgICAgdHJ5IHtcbiAgICAgICAgICAgIGF3YWl0IFByb21pc2UucmFjZShwcm9taXNlcyk7XG4gICAgICAgIH0gZmluYWxseSB7XG4gICAgICAgICAgICBpZiAocHJvbWlzZXMubGVuZ3RoID4gMSAmJiBvcGVyYXRpb25JZCkge1xuICAgICAgICAgICAgICAgIGF3YWl0IHRoaXMucXVlcmllcy5maW5pc2hPcGVyYXRpb25zKFtvcGVyYXRpb25JZF0pO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG5cbiAgICAgICAgaWYgKCF0cmFuc2FjdGlvbikge1xuICAgICAgICAgICAgdGhyb3cgVE9OQ2xpZW50RXJyb3IubWVzc2FnZUV4cGlyZWQoKTtcbiAgICAgICAgfVxuICAgICAgICBjb25zdCB0cmFuc2FjdGlvbk5vdyA9IHRyYW5zYWN0aW9uLm5vdyB8fCAwO1xuICAgICAgICB0aGlzLmNvbmZpZy5sb2coJ3Byb2Nlc3NNZXNzYWdlLiB0cmFuc2FjdGlvbiByZWNlaXZlZCcsIHtcbiAgICAgICAgICAgIGlkOiB0cmFuc2FjdGlvbi5pZCxcbiAgICAgICAgICAgIGJsb2NrX2lkOiB0cmFuc2FjdGlvbi5ibG9ja19pZCxcbiAgICAgICAgICAgIG5vdzogYCR7bmV3IERhdGUodHJhbnNhY3Rpb25Ob3cgKiAxMDAwKS50b0lTT1N0cmluZygpfSAoJHt0cmFuc2FjdGlvbk5vd30pYCxcbiAgICAgICAgfSk7XG4gICAgICAgIHJldHVybiB0cmFuc2FjdGlvbjtcbiAgICB9XG5cbiAgICBhc3luYyBpc0RlcGxveWVkKGFkZHJlc3M6IHN0cmluZywgcGFyZW50U3Bhbj86IChTcGFuIHwgU3BhbkNvbnRleHQpKTogUHJvbWlzZTxib29sPiB7XG4gICAgICAgIGNvbnN0IGFjY291bnQgPSBhd2FpdCB0aGlzLnF1ZXJpZXMuYWNjb3VudHMucXVlcnkoe1xuICAgICAgICAgICAgZmlsdGVyOiB7XG4gICAgICAgICAgICAgICAgaWQ6IHsgZXE6IGFkZHJlc3MgfSxcbiAgICAgICAgICAgICAgICBhY2NfdHlwZTogeyBlcTogUUFjY291bnRUeXBlLmFjdGl2ZSB9LFxuICAgICAgICAgICAgfSxcbiAgICAgICAgICAgIHJlc3VsdDogJ2lkJyxcbiAgICAgICAgICAgIHBhcmVudFNwYW4sXG4gICAgICAgIH0pO1xuICAgICAgICByZXR1cm4gYWNjb3VudC5sZW5ndGggPiAwO1xuICAgIH1cblxuICAgIGFzeW5jIHByb2Nlc3NEZXBsb3lNZXNzYWdlKFxuICAgICAgICBwYXJhbXM6IFRPTkNvbnRyYWN0RGVwbG95TWVzc2FnZSxcbiAgICAgICAgcGFyZW50U3Bhbj86IChTcGFuIHwgU3BhbkNvbnRleHQpLFxuICAgICAgICByZXRyeUluZGV4PzogbnVtYmVyLFxuICAgICk6IFByb21pc2U8VE9OQ29udHJhY3REZXBsb3lSZXN1bHQ+IHtcbiAgICAgICAgdGhpcy5jb25maWcubG9nKCdwcm9jZXNzRGVwbG95TWVzc2FnZScsIHBhcmFtcyk7XG4gICAgICAgIGlmIChhd2FpdCB0aGlzLmlzRGVwbG95ZWQocGFyYW1zLmFkZHJlc3MsIHBhcmVudFNwYW4pKSB7XG4gICAgICAgICAgICByZXR1cm4ge1xuICAgICAgICAgICAgICAgIGFkZHJlc3M6IHBhcmFtcy5hZGRyZXNzLFxuICAgICAgICAgICAgICAgIGFscmVhZHlEZXBsb3llZDogdHJ1ZSxcbiAgICAgICAgICAgIH07XG4gICAgICAgIH1cbiAgICAgICAgYXdhaXQgdGhpcy5zZW5kTWVzc2FnZShwYXJhbXMubWVzc2FnZSwgcGFyZW50U3Bhbik7XG4gICAgICAgIHJldHVybiB0aGlzLndhaXRGb3JEZXBsb3lUcmFuc2FjdGlvbihcbiAgICAgICAgICAgIHBhcmFtcyxcbiAgICAgICAgICAgIHBhcmVudFNwYW4sXG4gICAgICAgICAgICByZXRyeUluZGV4LFxuICAgICAgICApO1xuICAgIH1cblxuICAgIGFzeW5jIHdhaXRGb3JEZXBsb3lUcmFuc2FjdGlvbihcbiAgICAgICAgZGVwbG95TWVzc2FnZTogVE9OQ29udHJhY3REZXBsb3lNZXNzYWdlLFxuICAgICAgICBwYXJlbnRTcGFuPzogKFNwYW4gfCBTcGFuQ29udGV4dCksXG4gICAgICAgIHJldHJ5SW5kZXg/OiBudW1iZXIsXG4gICAgKTogUHJvbWlzZTxUT05Db250cmFjdERlcGxveVJlc3VsdD4ge1xuICAgICAgICBjb25zdCB0cmFuc2FjdGlvbiA9IGF3YWl0IHRoaXMud2FpdEZvclRyYW5zYWN0aW9uKFxuICAgICAgICAgICAgZGVwbG95TWVzc2FnZS5tZXNzYWdlLFxuICAgICAgICAgICAgdHJhbnNhY3Rpb25EZXRhaWxzLFxuICAgICAgICAgICAgcGFyZW50U3BhbixcbiAgICAgICAgICAgIHJldHJ5SW5kZXgsXG4gICAgICAgICk7XG4gICAgICAgIGF3YWl0IGNoZWNrVHJhbnNhY3Rpb24odHJhbnNhY3Rpb24pO1xuICAgICAgICB0aGlzLmNvbmZpZy5sb2coJ3Byb2Nlc3NEZXBsb3lNZXNzYWdlLiBFbmQnKTtcbiAgICAgICAgcmV0dXJuIHtcbiAgICAgICAgICAgIGFkZHJlc3M6IGRlcGxveU1lc3NhZ2UuYWRkcmVzcyxcbiAgICAgICAgICAgIGFscmVhZHlEZXBsb3llZDogZmFsc2UsXG4gICAgICAgICAgICB0cmFuc2FjdGlvbixcbiAgICAgICAgfTtcbiAgICB9XG5cblxuICAgIGFzeW5jIHByb2Nlc3NSdW5NZXNzYWdlKFxuICAgICAgICBydW5NZXNzYWdlOiBUT05Db250cmFjdFJ1bk1lc3NhZ2UsXG4gICAgICAgIHBhcmVudFNwYW4/OiAoU3BhbiB8IFNwYW5Db250ZXh0KSxcbiAgICAgICAgcmV0cnlJbmRleD86IG51bWJlcixcbiAgICApOiBQcm9taXNlPFRPTkNvbnRyYWN0UnVuUmVzdWx0PiB7XG4gICAgICAgIHRoaXMuY29uZmlnLmxvZygncHJvY2Vzc1J1bk1lc3NhZ2UnLCBydW5NZXNzYWdlKTtcbiAgICAgICAgYXdhaXQgdGhpcy5zZW5kTWVzc2FnZShydW5NZXNzYWdlLm1lc3NhZ2UsIHBhcmVudFNwYW4pO1xuICAgICAgICByZXR1cm4gdGhpcy53YWl0Rm9yUnVuVHJhbnNhY3Rpb24ocnVuTWVzc2FnZSwgcGFyZW50U3BhbiwgcmV0cnlJbmRleCk7XG4gICAgfVxuXG4gICAgYXN5bmMgd2FpdEZvclJ1blRyYW5zYWN0aW9uKFxuICAgICAgICBydW5NZXNzYWdlOiBUT05Db250cmFjdFJ1bk1lc3NhZ2UsXG4gICAgICAgIHBhcmVudFNwYW4/OiAoU3BhbiB8IFNwYW5Db250ZXh0KSxcbiAgICAgICAgcmV0cnlJbmRleD86IG51bWJlcixcbiAgICApOiBQcm9taXNlPFRPTkNvbnRyYWN0UnVuUmVzdWx0PiB7XG4gICAgICAgIGNvbnN0IHRyYW5zYWN0aW9uID0gYXdhaXQgdGhpcy53YWl0Rm9yVHJhbnNhY3Rpb24oXG4gICAgICAgICAgICBydW5NZXNzYWdlLm1lc3NhZ2UsXG4gICAgICAgICAgICB0cmFuc2FjdGlvbkRldGFpbHMsXG4gICAgICAgICAgICBwYXJlbnRTcGFuLFxuICAgICAgICAgICAgcmV0cnlJbmRleCxcbiAgICAgICAgKTtcbiAgICAgICAgYXdhaXQgY2hlY2tUcmFuc2FjdGlvbih0cmFuc2FjdGlvbik7XG4gICAgICAgIGNvbnN0IG91dHB1dE1lc3NhZ2VzID0gdHJhbnNhY3Rpb24ub3V0X21lc3NhZ2VzO1xuICAgICAgICBpZiAoIW91dHB1dE1lc3NhZ2VzIHx8IG91dHB1dE1lc3NhZ2VzLmxlbmd0aCA9PT0gMCkge1xuICAgICAgICAgICAgcmV0dXJuIHtcbiAgICAgICAgICAgICAgICBvdXRwdXQ6IG51bGwsXG4gICAgICAgICAgICAgICAgdHJhbnNhY3Rpb24sXG4gICAgICAgICAgICB9O1xuICAgICAgICB9XG4gICAgICAgIGNvbnN0IGV4dGVybmFsTWVzc2FnZXM6IFFNZXNzYWdlW10gPSBvdXRwdXRNZXNzYWdlcy5maWx0ZXIoKHg6IFFNZXNzYWdlKSA9PiB7XG4gICAgICAgICAgICByZXR1cm4geC5tc2dfdHlwZSA9PT0gUU1lc3NhZ2VUeXBlLmV4dE91dDtcbiAgICAgICAgfSk7XG4gICAgICAgIHRoaXMuY29uZmlnLmxvZygncHJvY2Vzc1J1bk1lc3NhZ2UuIEJlZm9yZSBtZXNzYWdlcyBwYXJzZScpO1xuICAgICAgICBjb25zdCBvdXRwdXRzID0gYXdhaXQgUHJvbWlzZS5hbGwoZXh0ZXJuYWxNZXNzYWdlcy5tYXAoKHg6IFFNZXNzYWdlKSA9PiB7XG4gICAgICAgICAgICByZXR1cm4gdGhpcy5kZWNvZGVPdXRwdXRNZXNzYWdlQm9keSh7XG4gICAgICAgICAgICAgICAgYWJpOiBydW5NZXNzYWdlLmFiaSxcbiAgICAgICAgICAgICAgICBib2R5QmFzZTY0OiB4LmJvZHkgfHwgJycsXG4gICAgICAgICAgICB9KTtcbiAgICAgICAgfSkpO1xuICAgICAgICBjb25zdCByZXN1bHRPdXRwdXQgPSBvdXRwdXRzLmZpbmQoKHg6IFRPTkNvbnRyYWN0RGVjb2RlTWVzc2FnZUJvZHlSZXN1bHQpID0+IHtcbiAgICAgICAgICAgIHJldHVybiB4LmZ1bmN0aW9uLnRvTG93ZXJDYXNlKCkgPT09IHJ1bk1lc3NhZ2UuZnVuY3Rpb25OYW1lLnRvTG93ZXJDYXNlKCk7XG4gICAgICAgIH0pO1xuICAgICAgICB0aGlzLmNvbmZpZy5sb2coJ3Byb2Nlc3NSdW5NZXNzYWdlLiBFbmQnKTtcbiAgICAgICAgcmV0dXJuIHtcbiAgICAgICAgICAgIG91dHB1dDogcmVzdWx0T3V0cHV0ID8gcmVzdWx0T3V0cHV0Lm91dHB1dCA6IG51bGwsXG4gICAgICAgICAgICB0cmFuc2FjdGlvbixcbiAgICAgICAgfTtcbiAgICB9XG5cbiAgICBhc3luYyBwcm9jZXNzUnVuTWVzc2FnZUxvY2FsKFxuICAgICAgICBydW5NZXNzYWdlOiBUT05Db250cmFjdFJ1bk1lc3NhZ2UsXG4gICAgICAgIHdhaXRQYXJhbXM/OiBUT05Db250cmFjdEFjY291bnRXYWl0UGFyYW1zLFxuICAgICAgICBwYXJlbnRTcGFuPzogKFNwYW4gfCBTcGFuQ29udGV4dCksXG4gICAgKTogUHJvbWlzZTxUT05Db250cmFjdFJ1blJlc3VsdD4ge1xuICAgICAgICB0aGlzLmNvbmZpZy5sb2coJ3Byb2Nlc3NSdW5NZXNzYWdlTG9jYWwnLCBydW5NZXNzYWdlKTtcblxuICAgICAgICBjb25zdCBhY2NvdW50ID0gYXdhaXQgdGhpcy5nZXRBY2NvdW50KHJ1bk1lc3NhZ2UuYWRkcmVzcywgdHJ1ZSwgd2FpdFBhcmFtcywgcGFyZW50U3Bhbik7XG5cbiAgICAgICAgcmV0dXJuIHRoaXMucmVxdWVzdENvcmUoJ2NvbnRyYWN0cy5ydW4ubG9jYWwubXNnJywge1xuICAgICAgICAgICAgYWRkcmVzczogcnVuTWVzc2FnZS5hZGRyZXNzLFxuICAgICAgICAgICAgYWNjb3VudCxcbiAgICAgICAgICAgIGFiaTogcnVuTWVzc2FnZS5hYmksXG4gICAgICAgICAgICBmdW5jdGlvbk5hbWU6IHJ1bk1lc3NhZ2UuZnVuY3Rpb25OYW1lLFxuICAgICAgICAgICAgbWVzc2FnZUJhc2U2NDogcnVuTWVzc2FnZS5tZXNzYWdlLm1lc3NhZ2VCb2R5QmFzZTY0LFxuICAgICAgICB9KTtcbiAgICB9XG5cbiAgICAvLyBGZWUgY2FsY3VsYXRpb25cblxuICAgIGJpZ0JhbGFuY2UgPSAnMHgxMDAwMDAwMDAwMDAwMCc7XG5cbiAgICBhc3luYyBjYWxjUnVuRmVlcyhcbiAgICAgICAgcGFyYW1zOiBUT05Db250cmFjdENhbGNSdW5GZWVQYXJhbXMsXG4gICAgICAgIHBhcmVudFNwYW4/OiAoU3BhbiB8IFNwYW5Db250ZXh0KSxcbiAgICApOiBQcm9taXNlPFRPTkNvbnRyYWN0Q2FsY0ZlZVJlc3VsdD4ge1xuICAgICAgICB0aGlzLmNvbmZpZy5sb2coJ2NhbGNSdW5GZWVzJywgcGFyYW1zKTtcblxuICAgICAgICBjb25zdCBhY2NvdW50ID0gYXdhaXQgdGhpcy5nZXRBY2NvdW50KHBhcmFtcy5hZGRyZXNzLCB0cnVlLCBwYXJhbXMud2FpdFBhcmFtcywgcGFyZW50U3Bhbik7XG5cbiAgICAgICAgaWYgKHBhcmFtcy5lbXVsYXRlQmFsYW5jZSkge1xuICAgICAgICAgICAgYWNjb3VudC5iYWxhbmNlID0gdGhpcy5iaWdCYWxhbmNlO1xuICAgICAgICB9XG5cbiAgICAgICAgcmV0dXJuIHRoaXMucmVxdWVzdENvcmUoJ2NvbnRyYWN0cy5ydW4uZmVlJywge1xuICAgICAgICAgICAgYWRkcmVzczogcGFyYW1zLmFkZHJlc3MsXG4gICAgICAgICAgICBhY2NvdW50LFxuICAgICAgICAgICAgYWJpOiBwYXJhbXMuYWJpLFxuICAgICAgICAgICAgZnVuY3Rpb25OYW1lOiBwYXJhbXMuZnVuY3Rpb25OYW1lLFxuICAgICAgICAgICAgaW5wdXQ6IHBhcmFtcy5pbnB1dCxcbiAgICAgICAgICAgIGtleVBhaXI6IHBhcmFtcy5rZXlQYWlyLFxuICAgICAgICB9KTtcbiAgICB9XG5cbiAgICBhc3luYyBjYWxjRGVwbG95RmVlcyhcbiAgICAgICAgcGFyYW1zOiBUT05Db250cmFjdENhbGNEZXBsb3lGZWVQYXJhbXMsXG4gICAgICAgIHBhcmVudFNwYW4/OiAoU3BhbiB8IFNwYW5Db250ZXh0KSxcbiAgICApOiBQcm9taXNlPFRPTkNvbnRyYWN0Q2FsY0ZlZVJlc3VsdD4ge1xuICAgICAgICB0aGlzLmNvbmZpZy5sb2coJ2NhbGNEZXBsb3lGZWVzJywgcGFyYW1zKTtcblxuICAgICAgICBjb25zdCBtZXNzYWdlID0gYXdhaXQgdGhpcy5jcmVhdGVEZXBsb3lNZXNzYWdlKHBhcmFtcyk7XG5cbiAgICAgICAgcmV0dXJuIHRoaXMuY2FsY01zZ1Byb2Nlc3NGZWVzKHtcbiAgICAgICAgICAgIGFkZHJlc3M6IG1lc3NhZ2UuYWRkcmVzcyxcbiAgICAgICAgICAgIG1lc3NhZ2U6IG1lc3NhZ2UubWVzc2FnZSxcbiAgICAgICAgICAgIGVtdWxhdGVCYWxhbmNlOiBwYXJhbXMuZW11bGF0ZUJhbGFuY2UsXG4gICAgICAgICAgICBuZXdBY2NvdW50OiBwYXJhbXMubmV3QWNjb3VudCxcbiAgICAgICAgfSwgcGFyZW50U3Bhbik7XG4gICAgfVxuXG4gICAgYXN5bmMgY2FsY01zZ1Byb2Nlc3NGZWVzKFxuICAgICAgICBwYXJhbXM6IFRPTkNvbnRyYWN0Q2FsY01zZ1Byb2Nlc3NpbmdGZWVzUGFyYW1zLFxuICAgICAgICBwYXJlbnRTcGFuPzogKFNwYW4gfCBTcGFuQ29udGV4dCksXG4gICAgKTogUHJvbWlzZTxUT05Db250cmFjdENhbGNGZWVSZXN1bHQ+IHtcbiAgICAgICAgdGhpcy5jb25maWcubG9nKCdjYWxjTXNnUHJvY2Vzc0ZlZXMnLCBwYXJhbXMpO1xuXG4gICAgICAgIGxldCBhY2NvdW50OiBRQWNjb3VudCA9IHtcbiAgICAgICAgICAgIGJhbGFuY2U6IHRoaXMuYmlnQmFsYW5jZSxcbiAgICAgICAgICAgIGlkOiBwYXJhbXMuYWRkcmVzcyxcbiAgICAgICAgICAgIGxhc3RfcGFpZDogTWF0aC5mbG9vcihEYXRlLm5vdygpIC8gMTAwMCksXG4gICAgICAgIH07XG5cbiAgICAgICAgaWYgKCFwYXJhbXMubmV3QWNjb3VudCkge1xuICAgICAgICAgICAgYWNjb3VudCA9IGF3YWl0IHRoaXMuZ2V0QWNjb3VudChwYXJhbXMuYWRkcmVzcywgZmFsc2UsIHBhcmFtcy53YWl0UGFyYW1zLCBwYXJlbnRTcGFuKTtcbiAgICAgICAgfVxuXG4gICAgICAgIGlmIChwYXJhbXMuZW11bGF0ZUJhbGFuY2UpIHtcbiAgICAgICAgICAgIGFjY291bnQuYmFsYW5jZSA9IHRoaXMuYmlnQmFsYW5jZTtcbiAgICAgICAgfVxuXG4gICAgICAgIHJldHVybiB0aGlzLnJlcXVlc3RDb3JlKCdjb250cmFjdHMucnVuLmZlZS5tc2cnLCB7XG4gICAgICAgICAgICBhZGRyZXNzOiBwYXJhbXMuYWRkcmVzcyxcbiAgICAgICAgICAgIGFjY291bnQsXG4gICAgICAgICAgICBtZXNzYWdlQmFzZTY0OiBwYXJhbXMubWVzc2FnZS5tZXNzYWdlQm9keUJhc2U2NCxcbiAgICAgICAgfSk7XG4gICAgfVxuXG4gICAgLy8gQWRkcmVzcyBwcm9jZXNzaW5nXG5cbiAgICBhc3luYyBjb252ZXJ0QWRkcmVzcyhcbiAgICAgICAgcGFyYW1zOiBUT05Db250cmFjdENvbnZlcnRBZGRyZXNzUGFyYW1zLFxuICAgICk6IFByb21pc2U8VE9OQ29udHJhY3RDb252ZXJ0QWRkcmVzc1Jlc3VsdD4ge1xuICAgICAgICByZXR1cm4gdGhpcy5yZXF1ZXN0Q29yZSgnY29udHJhY3RzLmFkZHJlc3MuY29udmVydCcsIHBhcmFtcyk7XG4gICAgfVxuXG4gICAgLy8gSW50ZXJuYWxzXG5cbiAgICBhc3luYyBpbnRlcm5hbERlcGxveU5hdGl2ZShwYXJhbXM6IFRPTkNvbnRyYWN0RGVwbG95UGFyYW1zKTogUHJvbWlzZTxUT05Db250cmFjdERlcGxveVJlc3VsdD4ge1xuICAgICAgICByZXR1cm4gdGhpcy5yZXF1ZXN0Q29yZSgnY29udHJhY3RzLmRlcGxveScsIHtcbiAgICAgICAgICAgIGFiaTogcGFyYW1zLnBhY2thZ2UuYWJpLFxuICAgICAgICAgICAgY29uc3RydWN0b3JIZWFkZXI6IHBhcmFtcy5jb25zdHJ1Y3RvckhlYWRlcixcbiAgICAgICAgICAgIGNvbnN0cnVjdG9yUGFyYW1zOiBwYXJhbXMuY29uc3RydWN0b3JQYXJhbXMsXG4gICAgICAgICAgICBpbml0UGFyYW1zOiBwYXJhbXMuaW5pdFBhcmFtcyxcbiAgICAgICAgICAgIGltYWdlQmFzZTY0OiBwYXJhbXMucGFja2FnZS5pbWFnZUJhc2U2NCxcbiAgICAgICAgICAgIGtleVBhaXI6IHBhcmFtcy5rZXlQYWlyLFxuICAgICAgICB9KTtcbiAgICB9XG5cblxuICAgIGFzeW5jIGludGVybmFsUnVuTmF0aXZlKHBhcmFtczogVE9OQ29udHJhY3RSdW5QYXJhbXMpOiBQcm9taXNlPFRPTkNvbnRyYWN0UnVuUmVzdWx0PiB7XG4gICAgICAgIHJldHVybiB0aGlzLnJlcXVlc3RDb3JlKCdjb250cmFjdHMucnVuJywge1xuICAgICAgICAgICAgYWRkcmVzczogcGFyYW1zLmFkZHJlc3MsXG4gICAgICAgICAgICBhYmk6IHBhcmFtcy5hYmksXG4gICAgICAgICAgICBmdW5jdGlvbk5hbWU6IHBhcmFtcy5mdW5jdGlvbk5hbWUsXG4gICAgICAgICAgICBoZWFkZXI6IHBhcmFtcy5oZWFkZXIsXG4gICAgICAgICAgICBpbnB1dDogcGFyYW1zLmlucHV0LFxuICAgICAgICAgICAga2V5UGFpcjogcGFyYW1zLmtleVBhaXIsXG4gICAgICAgIH0pO1xuICAgIH1cblxuICAgIG1ha2VFeHBpcmVIZWFkZXIoXG4gICAgICAgIGFiaTogVE9OQ29udHJhY3RBQkksXG4gICAgICAgIHVzZXJIZWFkZXI/OiBhbnksXG4gICAgICAgIHJldHJ5SW5kZXg/OiBudW1iZXIsXG4gICAgKTogYW55IHtcbiAgICAgICAgY29uc3QgdGltZW91dCA9IHRoaXMuY29uZmlnLm1lc3NhZ2VFeHBpcmF0aW9uVGltZW91dChyZXRyeUluZGV4KTtcbiAgICAgICAgaWYgKGFiaS5oZWFkZXIgJiYgYWJpLmhlYWRlci5pbmNsdWRlcygnZXhwaXJlJykgJiYgIXVzZXJIZWFkZXI/LmV4cGlyZSkge1xuICAgICAgICAgICAgcmV0dXJuIHtcbiAgICAgICAgICAgICAgICAuLi51c2VySGVhZGVyLFxuICAgICAgICAgICAgICAgIGV4cGlyZTogTWF0aC5mbG9vcigoRGF0ZS5ub3coKSArIHRpbWVvdXQpIC8gMTAwMCkgKyAxLFxuICAgICAgICAgICAgfTtcbiAgICAgICAgfVxuICAgICAgICByZXR1cm4gdXNlckhlYWRlcjtcbiAgICB9XG5cbiAgICBhc3luYyByZXRyeUNhbGwoY2FsbDogKGluZGV4OiBudW1iZXIpID0+IFByb21pc2U8YW55Pik6IFByb21pc2U8YW55PiB7XG4gICAgICAgIGNvbnN0IHJldHJpZXNDb3VudCA9IHRoaXMuY29uZmlnLm1lc3NhZ2VSZXRyaWVzQ291bnQoKTtcbiAgICAgICAgZm9yIChsZXQgaSA9IDA7IGkgPD0gcmV0cmllc0NvdW50OyBpICs9IDEpIHtcbiAgICAgICAgICAgIGlmIChpID4gMCkge1xuICAgICAgICAgICAgICAgIHRoaXMuY29uZmlnLmxvZyhgUmV0cnkgIyR7aX1gKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIHRyeSB7XG4gICAgICAgICAgICAgICAgcmV0dXJuIGF3YWl0IGNhbGwoaSk7XG4gICAgICAgICAgICB9IGNhdGNoIChlcnJvcikge1xuICAgICAgICAgICAgICAgIGlmICghVE9OQ2xpZW50RXJyb3IuaXNNZXNzYWdlRXhwaXJlZChlcnJvcikpIHtcbiAgICAgICAgICAgICAgICAgICAgdGhyb3cgZXJyb3I7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICAgIHRocm93IFRPTkNsaWVudEVycm9yLm1lc3NhZ2VFeHBpcmVkKCk7XG4gICAgfVxuXG4gICAgYXN5bmMgaW50ZXJuYWxEZXBsb3lKcyhcbiAgICAgICAgcGFyYW1zOiBUT05Db250cmFjdERlcGxveVBhcmFtcyxcbiAgICAgICAgcGFyZW50U3Bhbj86IChTcGFuIHwgU3BhbkNvbnRleHQpLFxuICAgICk6IFByb21pc2U8VE9OQ29udHJhY3REZXBsb3lSZXN1bHQ+IHtcbiAgICAgICAgdGhpcy5jb25maWcubG9nKCdEZXBsb3kgc3RhcnQnKTtcbiAgICAgICAgcmV0dXJuIHRoaXMucmV0cnlDYWxsKGFzeW5jIChyZXRyeUluZGV4KSA9PiB7XG4gICAgICAgICAgICBjb25zdCBkZXBsb3lNZXNzYWdlID0gYXdhaXQgdGhpcy5jcmVhdGVEZXBsb3lNZXNzYWdlKHBhcmFtcywgcmV0cnlJbmRleCk7XG4gICAgICAgICAgICBpZiAoYXdhaXQgdGhpcy5pc0RlcGxveWVkKGRlcGxveU1lc3NhZ2UuYWRkcmVzcywgcGFyZW50U3BhbikpIHtcbiAgICAgICAgICAgICAgICByZXR1cm4ge1xuICAgICAgICAgICAgICAgICAgICBhZGRyZXNzOiBkZXBsb3lNZXNzYWdlLmFkZHJlc3MsXG4gICAgICAgICAgICAgICAgICAgIGFscmVhZHlEZXBsb3llZDogdHJ1ZSxcbiAgICAgICAgICAgICAgICB9O1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgYXdhaXQgdGhpcy5zZW5kTWVzc2FnZShkZXBsb3lNZXNzYWdlLm1lc3NhZ2UsIHBhcmVudFNwYW4pO1xuICAgICAgICAgICAgcmV0dXJuIHRoaXMud2FpdEZvckRlcGxveVRyYW5zYWN0aW9uKGRlcGxveU1lc3NhZ2UsIHBhcmVudFNwYW4sIHJldHJ5SW5kZXgpO1xuICAgICAgICB9KTtcbiAgICB9XG5cblxuICAgIGFzeW5jIGludGVybmFsUnVuSnMoXG4gICAgICAgIHBhcmFtczogVE9OQ29udHJhY3RSdW5QYXJhbXMsXG4gICAgICAgIHBhcmVudFNwYW4/OiAoU3BhbiB8IFNwYW5Db250ZXh0KSxcbiAgICApOiBQcm9taXNlPFRPTkNvbnRyYWN0UnVuUmVzdWx0PiB7XG4gICAgICAgIHRoaXMuY29uZmlnLmxvZygnUnVuIHN0YXJ0Jyk7XG4gICAgICAgIHJldHVybiB0aGlzLnJldHJ5Q2FsbChhc3luYyAocmV0cnlJbmRleCkgPT4ge1xuICAgICAgICAgICAgY29uc3QgcnVuTWVzc2FnZSA9IGF3YWl0IHRoaXMuY3JlYXRlUnVuTWVzc2FnZShwYXJhbXMsIHJldHJ5SW5kZXgpO1xuICAgICAgICAgICAgYXdhaXQgdGhpcy5zZW5kTWVzc2FnZShydW5NZXNzYWdlLm1lc3NhZ2UsIHBhcmVudFNwYW4pO1xuICAgICAgICAgICAgcmV0dXJuIHRoaXMud2FpdEZvclJ1blRyYW5zYWN0aW9uKHJ1bk1lc3NhZ2UsIHBhcmVudFNwYW4sIHJldHJ5SW5kZXgpO1xuICAgICAgICB9KTtcbiAgICB9XG5cbiAgICBhc3luYyBnZXRBY2NvdW50KFxuICAgICAgICBhZGRyZXNzOiBzdHJpbmcsXG4gICAgICAgIGFjdGl2ZTogYm9vbGVhbixcbiAgICAgICAgd2FpdFBhcmFtcz86IFRPTkNvbnRyYWN0QWNjb3VudFdhaXRQYXJhbXMsXG4gICAgICAgIHBhcmVudFNwYW4/OiAoU3BhbiB8IFNwYW5Db250ZXh0KSxcbiAgICApOiBQcm9taXNlPFFBY2NvdW50PiB7XG4gICAgICAgIGZ1bmN0aW9uIHJlbW92ZVR5cGVOYW1lKG9iajogYW55KSB7XG4gICAgICAgICAgICBpZiAob2JqLl9fdHlwZW5hbWUpIHtcbiAgICAgICAgICAgICAgICBkZWxldGUgb2JqLl9fdHlwZW5hbWU7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBPYmplY3QudmFsdWVzKG9iailcbiAgICAgICAgICAgICAgICAuZm9yRWFjaCgodmFsdWUpID0+IHtcbiAgICAgICAgICAgICAgICAgICAgaWYgKCEhdmFsdWUgJiYgdHlwZW9mIHZhbHVlID09PSAnb2JqZWN0Jykge1xuICAgICAgICAgICAgICAgICAgICAgICAgcmVtb3ZlVHlwZU5hbWUodmFsdWUpO1xuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgfSk7XG4gICAgICAgIH1cblxuICAgICAgICBjb25zdCBmaWx0ZXI6IHsgW3N0cmluZ106IGFueSB9ID0ge1xuICAgICAgICAgICAgaWQ6IHsgZXE6IGFkZHJlc3MgfSxcbiAgICAgICAgfTtcbiAgICAgICAgaWYgKHdhaXRQYXJhbXMgJiYgd2FpdFBhcmFtcy50cmFuc2FjdGlvbkx0KSB7XG4gICAgICAgICAgICBmaWx0ZXIubGFzdF90cmFuc19sdCA9IHsgZ2U6IHdhaXRQYXJhbXMudHJhbnNhY3Rpb25MdCB9O1xuICAgICAgICB9XG4gICAgICAgIGlmIChhY3RpdmUpIHtcbiAgICAgICAgICAgIGZpbHRlci5hY2NfdHlwZSA9IHsgZXE6IFFBY2NvdW50VHlwZS5hY3RpdmUgfTtcbiAgICAgICAgfVxuXG4gICAgICAgIHRoaXMuY29uZmlnLmxvZygnZ2V0QWNjb3VudC4gRmlsdGVyJywgZmlsdGVyKTtcbiAgICAgICAgY29uc3QgYWNjb3VudCA9IGF3YWl0IHRoaXMucXVlcmllcy5hY2NvdW50cy53YWl0Rm9yKFxuICAgICAgICAgICAgZmlsdGVyLFxuICAgICAgICAgICAgJ2lkIGNvZGUgZGF0YSBiYWxhbmNlIGJhbGFuY2Vfb3RoZXIgeyBjdXJyZW5jeSB2YWx1ZSB9IGxhc3RfcGFpZCcsXG4gICAgICAgICAgICB3YWl0UGFyYW1zICYmIHdhaXRQYXJhbXMudGltZW91dCxcbiAgICAgICAgICAgIHBhcmVudFNwYW4sXG4gICAgICAgICk7XG5cbiAgICAgICAgcmVtb3ZlVHlwZU5hbWUoYWNjb3VudCk7XG4gICAgICAgIHRoaXMuY29uZmlnLmxvZygnZ2V0QWNjb3VudC4gQWNjb3VudCByZWNlaXZlZCcsIGFjY291bnQpO1xuICAgICAgICByZXR1cm4gYWNjb3VudDtcbiAgICB9XG5cbiAgICBhc3luYyBpbnRlcm5hbFJ1bkxvY2FsSnMoXG4gICAgICAgIHBhcmFtczogVE9OQ29udHJhY3RSdW5Mb2NhbFBhcmFtcyxcbiAgICAgICAgcGFyZW50U3Bhbj86IChTcGFuIHwgU3BhbkNvbnRleHQpLFxuICAgICk6IFByb21pc2U8VE9OQ29udHJhY3RSdW5SZXN1bHQ+IHtcbiAgICAgICAgY29uc3QgYWNjb3VudCA9IGF3YWl0IHRoaXMuZ2V0QWNjb3VudChcbiAgICAgICAgICAgIHBhcmFtcy5hZGRyZXNzLFxuICAgICAgICAgICAgdHJ1ZSxcbiAgICAgICAgICAgIHBhcmFtcy53YWl0UGFyYW1zLFxuICAgICAgICAgICAgcGFyZW50U3BhbixcbiAgICAgICAgKTtcblxuICAgICAgICByZXR1cm4gdGhpcy5yZXF1ZXN0Q29yZSgnY29udHJhY3RzLnJ1bi5sb2NhbCcsIHtcbiAgICAgICAgICAgIGFkZHJlc3M6IHBhcmFtcy5hZGRyZXNzLFxuICAgICAgICAgICAgYWNjb3VudCxcbiAgICAgICAgICAgIGFiaTogcGFyYW1zLmFiaSxcbiAgICAgICAgICAgIGZ1bmN0aW9uTmFtZTogcGFyYW1zLmZ1bmN0aW9uTmFtZSxcbiAgICAgICAgICAgIGlucHV0OiBwYXJhbXMuaW5wdXQsXG4gICAgICAgICAgICBrZXlQYWlyOiBwYXJhbXMua2V5UGFpcixcbiAgICAgICAgfSk7XG4gICAgfVxufVxuXG5UT05Db250cmFjdHNNb2R1bGUubW9kdWxlTmFtZSA9ICdUT05Db250cmFjdHNNb2R1bGUnO1xuXG5hc3luYyBmdW5jdGlvbiBjaGVja1RyYW5zYWN0aW9uKHRyYW5zYWN0aW9uOiBRVHJhbnNhY3Rpb24pIHtcbiAgICBpZiAoIXRyYW5zYWN0aW9uLmFib3J0ZWQpIHtcbiAgICAgICAgcmV0dXJuO1xuICAgIH1cblxuICAgIGZ1bmN0aW9uIG5vZGVFcnJvcihtZXNzYWdlOiBzdHJpbmcsIGNvZGU6IG51bWJlciwgcGhhc2U6IHN0cmluZykge1xuICAgICAgICBjb25zdCBSRVBMQVlfUFJPVEVDVElPTiA9IDUyO1xuICAgICAgICBjb25zdCBNRVNTQUdFX0VYUElSRUQgPSA1NztcbiAgICAgICAgY29uc3QgaXNOb2RlU0VNZXNzYWdlRXhwaXJlZCA9IHBoYXNlID09PSBUT05DbGllbnRUcmFuc2FjdGlvblBoYXNlLmNvbXB1dGVWbVxuICAgICAgICAgICAgJiYgKGNvZGUgPT09IE1FU1NBR0VfRVhQSVJFRCB8fCBjb2RlID09PSBSRVBMQVlfUFJPVEVDVElPTik7XG4gICAgICAgIHJldHVybiBpc05vZGVTRU1lc3NhZ2VFeHBpcmVkXG4gICAgICAgICAgICA/IFRPTkNsaWVudEVycm9yLm1lc3NhZ2VFeHBpcmVkKClcbiAgICAgICAgICAgIDogbmV3IFRPTkNsaWVudEVycm9yKFxuICAgICAgICAgICAgICAgIGAke21lc3NhZ2V9ICgke2NvZGV9KSBhdCAke3BoYXNlfWAsXG4gICAgICAgICAgICAgICAgY29kZSxcbiAgICAgICAgICAgICAgICBUT05DbGllbnRFcnJvci5zb3VyY2UuTk9ERSxcbiAgICAgICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgICAgIHBoYXNlLFxuICAgICAgICAgICAgICAgICAgICB0cmFuc2FjdGlvbl9pZDogdHJhbnNhY3Rpb24uaWQsXG4gICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICk7XG4gICAgfVxuXG4gICAgY29uc3Qgc3RvcmFnZSA9IHRyYW5zYWN0aW9uLnN0b3JhZ2U7XG4gICAgaWYgKHN0b3JhZ2UpIHtcbiAgICAgICAgY29uc3Qgc3RhdHVzID0gc3RvcmFnZS5zdGF0dXNfY2hhbmdlO1xuICAgICAgICBpZiAoc3RhdHVzID09PSBRQWNjb3VudFN0YXR1c0NoYW5nZS5mcm96ZW4pIHtcbiAgICAgICAgICAgIHRocm93IG5vZGVFcnJvcihcbiAgICAgICAgICAgICAgICAnQWNjb3VudCB3YXMgZnJvemVuIGR1ZSBzdG9yYWdlIHBoYXNlJyxcbiAgICAgICAgICAgICAgICBUT05DbGllbnRTdG9yYWdlU3RhdHVzLmZyb3plbixcbiAgICAgICAgICAgICAgICBUT05DbGllbnRUcmFuc2FjdGlvblBoYXNlLnN0b3JhZ2UsXG4gICAgICAgICAgICApO1xuICAgICAgICB9XG4gICAgICAgIGlmIChzdGF0dXMgPT09IFFBY2NvdW50U3RhdHVzQ2hhbmdlLmRlbGV0ZWQpIHtcbiAgICAgICAgICAgIHRocm93IG5vZGVFcnJvcihcbiAgICAgICAgICAgICAgICAnQWNjb3VudCB3YXMgZGVsZXRlZCBkdWUgc3RvcmFnZSBwaGFzZScsXG4gICAgICAgICAgICAgICAgVE9OQ2xpZW50U3RvcmFnZVN0YXR1cy5kZWxldGVkLFxuICAgICAgICAgICAgICAgIFRPTkNsaWVudFRyYW5zYWN0aW9uUGhhc2Uuc3RvcmFnZSxcbiAgICAgICAgICAgICk7XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICBjb25zdCBjb21wdXRlID0gdHJhbnNhY3Rpb24uY29tcHV0ZTtcbiAgICBpZiAoY29tcHV0ZSkge1xuICAgICAgICBpZiAoY29tcHV0ZS5jb21wdXRlX3R5cGUgPT09IFFDb21wdXRlVHlwZS5za2lwcGVkKSB7XG4gICAgICAgICAgICBjb25zdCByZWFzb24gPSBjb21wdXRlLnNraXBwZWRfcmVhc29uO1xuICAgICAgICAgICAgaWYgKHJlYXNvbiA9PT0gUVNraXBSZWFzb24ubm9TdGF0ZSkge1xuICAgICAgICAgICAgICAgIHRocm93IG5vZGVFcnJvcihcbiAgICAgICAgICAgICAgICAgICAgJ0FjY291bnQgaGFzIG5vIGNvZGUgYW5kIGRhdGEnLFxuICAgICAgICAgICAgICAgICAgICBUT05DbGllbnRDb21wdXRlU2tpcHBlZFN0YXR1cy5ub1N0YXRlLFxuICAgICAgICAgICAgICAgICAgICBUT05DbGllbnRUcmFuc2FjdGlvblBoYXNlLmNvbXB1dGVTa2lwcGVkLFxuICAgICAgICAgICAgICAgICk7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBpZiAocmVhc29uID09PSBRU2tpcFJlYXNvbi5iYWRTdGF0ZSkge1xuICAgICAgICAgICAgICAgIHRocm93IG5vZGVFcnJvcihcbiAgICAgICAgICAgICAgICAgICAgJ0FjY291bnQgaGFzIGJhZCBzdGF0ZTogZnJvemVuIG9yIGRlbGV0ZWQnLFxuICAgICAgICAgICAgICAgICAgICBUT05DbGllbnRDb21wdXRlU2tpcHBlZFN0YXR1cy5iYWRTdGF0ZSxcbiAgICAgICAgICAgICAgICAgICAgVE9OQ2xpZW50VHJhbnNhY3Rpb25QaGFzZS5jb21wdXRlU2tpcHBlZCxcbiAgICAgICAgICAgICAgICApO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgaWYgKHJlYXNvbiA9PT0gUVNraXBSZWFzb24ubm9HYXMpIHtcbiAgICAgICAgICAgICAgICB0aHJvdyBub2RlRXJyb3IoXG4gICAgICAgICAgICAgICAgICAgICdObyBnYXMgdG8gZXhlY3V0ZSBWTScsXG4gICAgICAgICAgICAgICAgICAgIFRPTkNsaWVudENvbXB1dGVTa2lwcGVkU3RhdHVzLm5vR2FzLFxuICAgICAgICAgICAgICAgICAgICBUT05DbGllbnRUcmFuc2FjdGlvblBoYXNlLmNvbXB1dGVTa2lwcGVkLFxuICAgICAgICAgICAgICAgICk7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICB0aHJvdyBub2RlRXJyb3IoXG4gICAgICAgICAgICAgICAgJ0NvbXB1dGUgcGhhc2Ugc2tpcHBlZCBieSB1bmtub3duIHJlYXNvbicsXG4gICAgICAgICAgICAgICAgLTEsXG4gICAgICAgICAgICAgICAgVE9OQ2xpZW50VHJhbnNhY3Rpb25QaGFzZS5jb21wdXRlU2tpcHBlZCxcbiAgICAgICAgICAgICk7XG4gICAgICAgIH1cbiAgICAgICAgaWYgKGNvbXB1dGUuY29tcHV0ZV90eXBlID09PSBRQ29tcHV0ZVR5cGUudm0pIHtcbiAgICAgICAgICAgIGlmICghY29tcHV0ZS5zdWNjZXNzKSB7XG4gICAgICAgICAgICAgICAgdGhyb3cgbm9kZUVycm9yKFxuICAgICAgICAgICAgICAgICAgICAnVk0gdGVybWluYXRlZCB3aXRoIGV4Y2VwdGlvbicsXG4gICAgICAgICAgICAgICAgICAgIGNvbXB1dGUuZXhpdF9jb2RlIHx8IDAsXG4gICAgICAgICAgICAgICAgICAgIFRPTkNsaWVudFRyYW5zYWN0aW9uUGhhc2UuY29tcHV0ZVZtLFxuICAgICAgICAgICAgICAgICk7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICBjb25zdCBhY3Rpb24gPSB0cmFuc2FjdGlvbi5hY3Rpb247XG4gICAgaWYgKGFjdGlvbikge1xuICAgICAgICBpZiAoIWFjdGlvbi5zdWNjZXNzKSB7XG4gICAgICAgICAgICB0aHJvdyBub2RlRXJyb3IoXG4gICAgICAgICAgICAgICAgYWN0aW9uLm5vX2Z1bmRzXG4gICAgICAgICAgICAgICAgICAgID8gJ1RvbyBsb3cgYmFsYW5jZSB0byBzZW5kIG91dGJvdW5kIG1lc3NhZ2UnXG4gICAgICAgICAgICAgICAgICAgIDogKCFhY3Rpb24udmFsaWQgPyAnT3V0Ym91bmQgbWVzc2FnZSBpcyBpbnZhbGlkJyA6ICdBY3Rpb24gcGhhc2UgZmFpbGVkJyksXG4gICAgICAgICAgICAgICAgYWN0aW9uLnJlc3VsdF9jb2RlIHx8IDAsXG4gICAgICAgICAgICAgICAgVE9OQ2xpZW50VHJhbnNhY3Rpb25QaGFzZS5hY3Rpb24sXG4gICAgICAgICAgICApO1xuICAgICAgICB9XG4gICAgfVxuXG4gICAgdGhyb3cgbm9kZUVycm9yKFxuICAgICAgICAnVHJhbnNhY3Rpb24gYWJvcnRlZCcsXG4gICAgICAgIC0xLFxuICAgICAgICBUT05DbGllbnRUcmFuc2FjdGlvblBoYXNlLnVua25vd24sXG4gICAgKTtcbn1cblxuY29uc3QgdHJhbnNhY3Rpb25EZXRhaWxzID0gYFxuICAgIGlkXG4gICAgaW5fbXNnXG4gICAgdHJfdHlwZVxuICAgIHN0YXR1c1xuICAgIGluX21zZ1xuICAgIG91dF9tc2dzXG4gICAgYmxvY2tfaWRcbiAgICBub3dcbiAgICBhYm9ydGVkXG4gICAgbHRcbiAgICBzdG9yYWdlIHtcbiAgICAgICAgc3RhdHVzX2NoYW5nZVxuICAgIH1cbiAgICBjb21wdXRlIHtcbiAgICAgICAgY29tcHV0ZV90eXBlXG4gICAgICAgIHNraXBwZWRfcmVhc29uXG4gICAgICAgIHN1Y2Nlc3NcbiAgICAgICAgZXhpdF9jb2RlXG4gICAgICAgIGdhc19mZWVzXG4gICAgICAgIGdhc191c2VkXG4gICAgfVxuICAgIGFjdGlvbiB7XG4gICAgICAgIHN1Y2Nlc3NcbiAgICAgICAgdmFsaWRcbiAgICAgICAgcmVzdWx0X2NvZGVcbiAgICAgICAgbm9fZnVuZHNcbiAgICB9XG4gICAgb3V0X21lc3NhZ2VzIHtcbiAgICAgICAgaWRcbiAgICAgICAgbXNnX3R5cGVcbiAgICAgICAgYm9keVxuICAgIH1cbiAgIGA7XG4iXX0=