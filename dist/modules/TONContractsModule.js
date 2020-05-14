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
    key: "sendMessage",
    value: function () {
      var _sendMessage = (0, _asyncToGenerator2["default"])( /*#__PURE__*/_regenerator["default"].mark(function _callee26(params, parentSpan) {
        var id, idBase64;
        return _regenerator["default"].wrap(function _callee26$(_context26) {
          while (1) {
            switch (_context26.prev = _context26.next) {
              case 0:
                _context26.t0 = params.messageId;

                if (_context26.t0) {
                  _context26.next = 5;
                  break;
                }

                _context26.next = 4;
                return this.getBocHash({
                  bocBase64: params.messageBodyBase64
                });

              case 4:
                _context26.t0 = _context26.sent.hash;

              case 5:
                id = _context26.t0;
                idBase64 = Buffer.from(id, 'hex').toString('base64');
                _context26.next = 9;
                return this.queries.postRequests([{
                  id: idBase64,
                  body: params.messageBodyBase64
                }], parentSpan);

              case 9:
                this.config.log('sendMessage. Request posted');
                return _context26.abrupt("return", id);

              case 11:
              case "end":
                return _context26.stop();
            }
          }
        }, _callee26, this);
      }));

      function sendMessage(_x33, _x34) {
        return _sendMessage.apply(this, arguments);
      }

      return sendMessage;
    }()
  }, {
    key: "processMessage",
    value: function () {
      var _processMessage = (0, _asyncToGenerator2["default"])( /*#__PURE__*/_regenerator["default"].mark(function _callee29(message, resultFields, parentSpan, retryIndex) {
        var _this5 = this;

        var expire, config, messageId, processingTimeout, promises, serverInfo, operationId, transaction, waitExpired, transactionNow;
        return _regenerator["default"].wrap(function _callee29$(_context29) {
          while (1) {
            switch (_context29.prev = _context29.next) {
              case 0:
                expire = message.expire;

                if (!(expire && Date.now() > expire * 1000)) {
                  _context29.next = 3;
                  break;
                }

                throw _TONClient.TONClientError.sendNodeRequestFailed('Message already expired');

              case 3:
                config = this.config;
                _context29.next = 6;
                return this.sendMessage(message, parentSpan);

              case 6:
                messageId = _context29.sent;
                processingTimeout = config.messageProcessingTimeout(retryIndex);
                promises = [];
                _context29.next = 11;
                return this.queries.getServerInfo(parentSpan);

              case 11:
                serverInfo = _context29.sent;
                operationId = serverInfo.supportsOperationId ? this.queries.generateOperationId() : undefined;
                transaction = null;

                if (expire) {
                  // calculate timeout according to `expire` value (in seconds)
                  // add processing timeout as master block validation time
                  processingTimeout = expire * 1000 - Date.now() + processingTimeout;

                  waitExpired = /*#__PURE__*/function () {
                    var _ref4 = (0, _asyncToGenerator2["default"])( /*#__PURE__*/_regenerator["default"].mark(function _callee27() {
                      var _block$in_msg_descr$f;

                      var block, transaction_id;
                      return _regenerator["default"].wrap(function _callee27$(_context27) {
                        while (1) {
                          switch (_context27.prev = _context27.next) {
                            case 0:
                              _context27.next = 2;
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
                              block = _context27.sent;

                              if (!transaction) {
                                _context27.next = 5;
                                break;
                              }

                              return _context27.abrupt("return");

                            case 5:
                              transaction_id = block.in_msg_descr && ((_block$in_msg_descr$f = block.in_msg_descr.find(function (msg) {
                                return !!msg.transaction_id;
                              })) === null || _block$in_msg_descr$f === void 0 ? void 0 : _block$in_msg_descr$f.transaction_id);

                              if (transaction_id) {
                                _context27.next = 8;
                                break;
                              }

                              throw _TONClient.TONClientError.internalError('Invalid block received: no transaction ID');

                            case 8:
                              _context27.next = 10;
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
                              return _context27.stop();
                          }
                        }
                      }, _callee27);
                    }));

                    return function waitExpired() {
                      return _ref4.apply(this, arguments);
                    };
                  }();

                  promises.push(waitExpired());
                } // wait for message processing transaction


                promises.push(new Promise(function (resolve, reject) {
                  (0, _asyncToGenerator2["default"])( /*#__PURE__*/_regenerator["default"].mark(function _callee28() {
                    return _regenerator["default"].wrap(function _callee28$(_context28) {
                      while (1) {
                        switch (_context28.prev = _context28.next) {
                          case 0:
                            _context28.prev = 0;
                            _context28.next = 3;
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
                            transaction = _context28.sent;
                            resolve();
                            _context28.next = 10;
                            break;

                          case 7:
                            _context28.prev = 7;
                            _context28.t0 = _context28["catch"](0);
                            reject(_context28.t0);

                          case 10:
                          case "end":
                            return _context28.stop();
                        }
                      }
                    }, _callee28, null, [[0, 7]]);
                  }))();
                }));
                _context29.prev = 16;
                _context29.next = 19;
                return Promise.race(promises);

              case 19:
                _context29.prev = 19;

                if (!(promises.length > 1 && operationId)) {
                  _context29.next = 23;
                  break;
                }

                _context29.next = 23;
                return this.queries.finishOperations([operationId]);

              case 23:
                return _context29.finish(19);

              case 24:
                if (transaction) {
                  _context29.next = 26;
                  break;
                }

                throw _TONClient.TONClientError.messageExpired();

              case 26:
                transactionNow = transaction.now || 0;
                this.config.log('processMessage. transaction received', {
                  id: transaction.id,
                  block_id: transaction.block_id,
                  now: "".concat(new Date(transactionNow * 1000).toISOString(), " (").concat(transactionNow, ")")
                });
                return _context29.abrupt("return", transaction);

              case 29:
              case "end":
                return _context29.stop();
            }
          }
        }, _callee29, this, [[16,, 19, 24]]);
      }));

      function processMessage(_x35, _x36, _x37, _x38) {
        return _processMessage.apply(this, arguments);
      }

      return processMessage;
    }()
  }, {
    key: "processDeployMessage",
    value: function () {
      var _processDeployMessage = (0, _asyncToGenerator2["default"])( /*#__PURE__*/_regenerator["default"].mark(function _callee30(params, parentSpan, retryIndex) {
        var account, transaction;
        return _regenerator["default"].wrap(function _callee30$(_context30) {
          while (1) {
            switch (_context30.prev = _context30.next) {
              case 0:
                this.config.log('processDeployMessage', params); // check that account is already deployed

                _context30.next = 3;
                return this.queries.accounts.query({
                  filter: {
                    id: {
                      eq: params.address
                    },
                    acc_type: {
                      eq: QAccountType.active
                    }
                  },
                  result: 'id',
                  parentSpan: parentSpan
                });

              case 3:
                account = _context30.sent;

                if (!(account.length > 0)) {
                  _context30.next = 6;
                  break;
                }

                return _context30.abrupt("return", {
                  address: params.address,
                  alreadyDeployed: true
                });

              case 6:
                _context30.next = 8;
                return this.processMessage(params.message, transactionDetails, parentSpan, retryIndex);

              case 8:
                transaction = _context30.sent;
                _context30.next = 11;
                return checkTransaction(transaction);

              case 11:
                this.config.log('processDeployMessage. End');
                return _context30.abrupt("return", {
                  address: params.address,
                  alreadyDeployed: false,
                  transaction: transaction
                });

              case 13:
              case "end":
                return _context30.stop();
            }
          }
        }, _callee30, this);
      }));

      function processDeployMessage(_x39, _x40, _x41) {
        return _processDeployMessage.apply(this, arguments);
      }

      return processDeployMessage;
    }()
  }, {
    key: "processRunMessage",
    value: function () {
      var _processRunMessage = (0, _asyncToGenerator2["default"])( /*#__PURE__*/_regenerator["default"].mark(function _callee31(params, parentSpan, retryIndex) {
        var _this6 = this;

        var transaction, outputMessages, externalMessages, outputs, resultOutput;
        return _regenerator["default"].wrap(function _callee31$(_context31) {
          while (1) {
            switch (_context31.prev = _context31.next) {
              case 0:
                this.config.log('processRunMessage', params);
                _context31.next = 3;
                return this.processMessage(params.message, transactionDetails, parentSpan, retryIndex);

              case 3:
                transaction = _context31.sent;
                _context31.next = 6;
                return checkTransaction(transaction);

              case 6:
                outputMessages = transaction.out_messages;

                if (!(!outputMessages || outputMessages.length === 0)) {
                  _context31.next = 9;
                  break;
                }

                return _context31.abrupt("return", {
                  output: null,
                  transaction: transaction
                });

              case 9:
                externalMessages = outputMessages.filter(function (x) {
                  return x.msg_type === QMessageType.extOut;
                });
                this.config.log('processRunMessage. Before messages parse');
                _context31.next = 13;
                return Promise.all(externalMessages.map(function (x) {
                  return _this6.decodeOutputMessageBody({
                    abi: params.abi,
                    bodyBase64: x.body || ''
                  });
                }));

              case 13:
                outputs = _context31.sent;
                resultOutput = outputs.find(function (x) {
                  return x["function"].toLowerCase() === params.functionName.toLowerCase();
                });
                this.config.log('processRunMessage. End');
                return _context31.abrupt("return", {
                  output: resultOutput ? resultOutput.output : null,
                  transaction: transaction
                });

              case 17:
              case "end":
                return _context31.stop();
            }
          }
        }, _callee31, this);
      }));

      function processRunMessage(_x42, _x43, _x44) {
        return _processRunMessage.apply(this, arguments);
      }

      return processRunMessage;
    }()
  }, {
    key: "processRunMessageLocal",
    value: function () {
      var _processRunMessageLocal = (0, _asyncToGenerator2["default"])( /*#__PURE__*/_regenerator["default"].mark(function _callee32(params, waitParams, parentSpan) {
        var account;
        return _regenerator["default"].wrap(function _callee32$(_context32) {
          while (1) {
            switch (_context32.prev = _context32.next) {
              case 0:
                this.config.log('processRunMessageLocal', params);
                _context32.next = 3;
                return this.getAccount(params.address, true, waitParams, parentSpan);

              case 3:
                account = _context32.sent;
                return _context32.abrupt("return", this.requestCore('contracts.run.local.msg', {
                  address: params.address,
                  account: account,
                  abi: params.abi,
                  functionName: params.functionName,
                  messageBase64: params.message.messageBodyBase64
                }));

              case 5:
              case "end":
                return _context32.stop();
            }
          }
        }, _callee32, this);
      }));

      function processRunMessageLocal(_x45, _x46, _x47) {
        return _processRunMessageLocal.apply(this, arguments);
      }

      return processRunMessageLocal;
    }() // Fee calculation

  }, {
    key: "calcRunFees",
    value: function () {
      var _calcRunFees = (0, _asyncToGenerator2["default"])( /*#__PURE__*/_regenerator["default"].mark(function _callee33(params, parentSpan) {
        var account;
        return _regenerator["default"].wrap(function _callee33$(_context33) {
          while (1) {
            switch (_context33.prev = _context33.next) {
              case 0:
                this.config.log('calcRunFees', params);
                _context33.next = 3;
                return this.getAccount(params.address, true, params.waitParams, parentSpan);

              case 3:
                account = _context33.sent;

                if (params.emulateBalance) {
                  account.balance = this.bigBalance;
                }

                return _context33.abrupt("return", this.requestCore('contracts.run.fee', {
                  address: params.address,
                  account: account,
                  abi: params.abi,
                  functionName: params.functionName,
                  input: params.input,
                  keyPair: params.keyPair
                }));

              case 6:
              case "end":
                return _context33.stop();
            }
          }
        }, _callee33, this);
      }));

      function calcRunFees(_x48, _x49) {
        return _calcRunFees.apply(this, arguments);
      }

      return calcRunFees;
    }()
  }, {
    key: "calcDeployFees",
    value: function () {
      var _calcDeployFees = (0, _asyncToGenerator2["default"])( /*#__PURE__*/_regenerator["default"].mark(function _callee34(params, parentSpan) {
        var message;
        return _regenerator["default"].wrap(function _callee34$(_context34) {
          while (1) {
            switch (_context34.prev = _context34.next) {
              case 0:
                this.config.log('calcDeployFees', params);
                _context34.next = 3;
                return this.createDeployMessage(params);

              case 3:
                message = _context34.sent;
                return _context34.abrupt("return", this.calcMsgProcessFees({
                  address: message.address,
                  message: message.message,
                  emulateBalance: params.emulateBalance,
                  newAccount: params.newAccount
                }, parentSpan));

              case 5:
              case "end":
                return _context34.stop();
            }
          }
        }, _callee34, this);
      }));

      function calcDeployFees(_x50, _x51) {
        return _calcDeployFees.apply(this, arguments);
      }

      return calcDeployFees;
    }()
  }, {
    key: "calcMsgProcessFees",
    value: function () {
      var _calcMsgProcessFees = (0, _asyncToGenerator2["default"])( /*#__PURE__*/_regenerator["default"].mark(function _callee35(params, parentSpan) {
        var account;
        return _regenerator["default"].wrap(function _callee35$(_context35) {
          while (1) {
            switch (_context35.prev = _context35.next) {
              case 0:
                this.config.log('calcMsgProcessFees', params);
                account = {
                  balance: this.bigBalance,
                  id: params.address,
                  last_paid: Math.floor(Date.now() / 1000)
                };

                if (params.newAccount) {
                  _context35.next = 6;
                  break;
                }

                _context35.next = 5;
                return this.getAccount(params.address, false, params.waitParams, parentSpan);

              case 5:
                account = _context35.sent;

              case 6:
                if (params.emulateBalance) {
                  account.balance = this.bigBalance;
                }

                return _context35.abrupt("return", this.requestCore('contracts.run.fee.msg', {
                  address: params.address,
                  account: account,
                  messageBase64: params.message.messageBodyBase64
                }));

              case 8:
              case "end":
                return _context35.stop();
            }
          }
        }, _callee35, this);
      }));

      function calcMsgProcessFees(_x52, _x53) {
        return _calcMsgProcessFees.apply(this, arguments);
      }

      return calcMsgProcessFees;
    }() // Address processing

  }, {
    key: "convertAddress",
    value: function () {
      var _convertAddress = (0, _asyncToGenerator2["default"])( /*#__PURE__*/_regenerator["default"].mark(function _callee36(params) {
        return _regenerator["default"].wrap(function _callee36$(_context36) {
          while (1) {
            switch (_context36.prev = _context36.next) {
              case 0:
                return _context36.abrupt("return", this.requestCore('contracts.address.convert', params));

              case 1:
              case "end":
                return _context36.stop();
            }
          }
        }, _callee36, this);
      }));

      function convertAddress(_x54) {
        return _convertAddress.apply(this, arguments);
      }

      return convertAddress;
    }() // Internals

  }, {
    key: "internalDeployNative",
    value: function () {
      var _internalDeployNative = (0, _asyncToGenerator2["default"])( /*#__PURE__*/_regenerator["default"].mark(function _callee37(params) {
        return _regenerator["default"].wrap(function _callee37$(_context37) {
          while (1) {
            switch (_context37.prev = _context37.next) {
              case 0:
                return _context37.abrupt("return", this.requestCore('contracts.deploy', {
                  abi: params["package"].abi,
                  constructorHeader: params.constructorHeader,
                  constructorParams: params.constructorParams,
                  initParams: params.initParams,
                  imageBase64: params["package"].imageBase64,
                  keyPair: params.keyPair
                }));

              case 1:
              case "end":
                return _context37.stop();
            }
          }
        }, _callee37, this);
      }));

      function internalDeployNative(_x55) {
        return _internalDeployNative.apply(this, arguments);
      }

      return internalDeployNative;
    }()
  }, {
    key: "internalRunNative",
    value: function () {
      var _internalRunNative = (0, _asyncToGenerator2["default"])( /*#__PURE__*/_regenerator["default"].mark(function _callee38(params) {
        return _regenerator["default"].wrap(function _callee38$(_context38) {
          while (1) {
            switch (_context38.prev = _context38.next) {
              case 0:
                return _context38.abrupt("return", this.requestCore('contracts.run', {
                  address: params.address,
                  abi: params.abi,
                  functionName: params.functionName,
                  header: params.header,
                  input: params.input,
                  keyPair: params.keyPair
                }));

              case 1:
              case "end":
                return _context38.stop();
            }
          }
        }, _callee38, this);
      }));

      function internalRunNative(_x56) {
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
      var _retryCall = (0, _asyncToGenerator2["default"])( /*#__PURE__*/_regenerator["default"].mark(function _callee39(call) {
        var retriesCount, i;
        return _regenerator["default"].wrap(function _callee39$(_context39) {
          while (1) {
            switch (_context39.prev = _context39.next) {
              case 0:
                retriesCount = this.config.messageRetriesCount();
                i = 0;

              case 2:
                if (!(i <= retriesCount)) {
                  _context39.next = 17;
                  break;
                }

                if (i > 0) {
                  this.config.log("Retry #".concat(i));
                }

                _context39.prev = 4;
                _context39.next = 7;
                return call(i);

              case 7:
                return _context39.abrupt("return", _context39.sent);

              case 10:
                _context39.prev = 10;
                _context39.t0 = _context39["catch"](4);

                if (_TONClient.TONClientError.isMessageExpired(_context39.t0)) {
                  _context39.next = 14;
                  break;
                }

                throw _context39.t0;

              case 14:
                i += 1;
                _context39.next = 2;
                break;

              case 17:
                throw _TONClient.TONClientError.messageExpired();

              case 18:
              case "end":
                return _context39.stop();
            }
          }
        }, _callee39, this, [[4, 10]]);
      }));

      function retryCall(_x57) {
        return _retryCall.apply(this, arguments);
      }

      return retryCall;
    }()
  }, {
    key: "internalDeployJs",
    value: function () {
      var _internalDeployJs = (0, _asyncToGenerator2["default"])( /*#__PURE__*/_regenerator["default"].mark(function _callee41(params, parentSpan) {
        var _this7 = this;

        return _regenerator["default"].wrap(function _callee41$(_context41) {
          while (1) {
            switch (_context41.prev = _context41.next) {
              case 0:
                this.config.log('Deploy start');
                return _context41.abrupt("return", this.retryCall( /*#__PURE__*/function () {
                  var _ref6 = (0, _asyncToGenerator2["default"])( /*#__PURE__*/_regenerator["default"].mark(function _callee40(retryIndex) {
                    var message;
                    return _regenerator["default"].wrap(function _callee40$(_context40) {
                      while (1) {
                        switch (_context40.prev = _context40.next) {
                          case 0:
                            _context40.next = 2;
                            return _this7.createDeployMessage(params, retryIndex);

                          case 2:
                            message = _context40.sent;
                            return _context40.abrupt("return", _this7.processDeployMessage(message, parentSpan, retryIndex));

                          case 4:
                          case "end":
                            return _context40.stop();
                        }
                      }
                    }, _callee40);
                  }));

                  return function (_x60) {
                    return _ref6.apply(this, arguments);
                  };
                }()));

              case 2:
              case "end":
                return _context41.stop();
            }
          }
        }, _callee41, this);
      }));

      function internalDeployJs(_x58, _x59) {
        return _internalDeployJs.apply(this, arguments);
      }

      return internalDeployJs;
    }()
  }, {
    key: "internalRunJs",
    value: function () {
      var _internalRunJs = (0, _asyncToGenerator2["default"])( /*#__PURE__*/_regenerator["default"].mark(function _callee43(params, parentSpan) {
        var _this8 = this;

        return _regenerator["default"].wrap(function _callee43$(_context43) {
          while (1) {
            switch (_context43.prev = _context43.next) {
              case 0:
                this.config.log('Run start');
                return _context43.abrupt("return", this.retryCall( /*#__PURE__*/function () {
                  var _ref7 = (0, _asyncToGenerator2["default"])( /*#__PURE__*/_regenerator["default"].mark(function _callee42(retryIndex) {
                    var message;
                    return _regenerator["default"].wrap(function _callee42$(_context42) {
                      while (1) {
                        switch (_context42.prev = _context42.next) {
                          case 0:
                            _context42.next = 2;
                            return _this8.createRunMessage(params, retryIndex);

                          case 2:
                            message = _context42.sent;
                            return _context42.abrupt("return", _this8.processRunMessage(message, parentSpan, retryIndex));

                          case 4:
                          case "end":
                            return _context42.stop();
                        }
                      }
                    }, _callee42);
                  }));

                  return function (_x63) {
                    return _ref7.apply(this, arguments);
                  };
                }()));

              case 2:
              case "end":
                return _context43.stop();
            }
          }
        }, _callee43, this);
      }));

      function internalRunJs(_x61, _x62) {
        return _internalRunJs.apply(this, arguments);
      }

      return internalRunJs;
    }()
  }, {
    key: "getAccount",
    value: function () {
      var _getAccount = (0, _asyncToGenerator2["default"])( /*#__PURE__*/_regenerator["default"].mark(function _callee44(address, active, waitParams, parentSpan) {
        var removeTypeName, filter, account;
        return _regenerator["default"].wrap(function _callee44$(_context44) {
          while (1) {
            switch (_context44.prev = _context44.next) {
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
                _context44.next = 7;
                return this.queries.accounts.waitFor(filter, 'id code data balance balance_other { currency value } last_paid', waitParams && waitParams.timeout, parentSpan);

              case 7:
                account = _context44.sent;
                removeTypeName(account);
                this.config.log('getAccount. Account received', account);
                return _context44.abrupt("return", account);

              case 11:
              case "end":
                return _context44.stop();
            }
          }
        }, _callee44, this);
      }));

      function getAccount(_x64, _x65, _x66, _x67) {
        return _getAccount.apply(this, arguments);
      }

      return getAccount;
    }()
  }, {
    key: "internalRunLocalJs",
    value: function () {
      var _internalRunLocalJs = (0, _asyncToGenerator2["default"])( /*#__PURE__*/_regenerator["default"].mark(function _callee45(params, parentSpan) {
        var account;
        return _regenerator["default"].wrap(function _callee45$(_context45) {
          while (1) {
            switch (_context45.prev = _context45.next) {
              case 0:
                _context45.next = 2;
                return this.getAccount(params.address, true, params.waitParams, parentSpan);

              case 2:
                account = _context45.sent;
                return _context45.abrupt("return", this.requestCore('contracts.run.local', {
                  address: params.address,
                  account: account,
                  abi: params.abi,
                  functionName: params.functionName,
                  input: params.input,
                  keyPair: params.keyPair
                }));

              case 4:
              case "end":
                return _context45.stop();
            }
          }
        }, _callee45, this);
      }));

      function internalRunLocalJs(_x68, _x69) {
        return _internalRunLocalJs.apply(this, arguments);
      }

      return internalRunLocalJs;
    }()
  }]);
  return TONContractsModule;
}(_TONModule2.TONModule);

exports["default"] = TONContractsModule;
TONContractsModule.moduleName = 'TONContractsModule';

function checkTransaction(_x70) {
  return _checkTransaction.apply(this, arguments);
}

function _checkTransaction() {
  _checkTransaction = (0, _asyncToGenerator2["default"])( /*#__PURE__*/_regenerator["default"].mark(function _callee46(transaction) {
    var nodeError, storage, status, compute, reason, action;
    return _regenerator["default"].wrap(function _callee46$(_context46) {
      while (1) {
        switch (_context46.prev = _context46.next) {
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
              _context46.next = 3;
              break;
            }

            return _context46.abrupt("return");

          case 3:
            storage = transaction.storage;

            if (!storage) {
              _context46.next = 10;
              break;
            }

            status = storage.status_change;

            if (!(status === QAccountStatusChange.frozen)) {
              _context46.next = 8;
              break;
            }

            throw nodeError('Account was frozen due storage phase', TONClientStorageStatus.frozen, TONClientTransactionPhase.storage);

          case 8:
            if (!(status === QAccountStatusChange.deleted)) {
              _context46.next = 10;
              break;
            }

            throw nodeError('Account was deleted due storage phase', TONClientStorageStatus.deleted, TONClientTransactionPhase.storage);

          case 10:
            compute = transaction.compute;

            if (!compute) {
              _context46.next = 24;
              break;
            }

            if (!(compute.compute_type === QComputeType.skipped)) {
              _context46.next = 21;
              break;
            }

            reason = compute.skipped_reason;

            if (!(reason === QSkipReason.noState)) {
              _context46.next = 16;
              break;
            }

            throw nodeError('Account has no code and data', TONClientComputeSkippedStatus.noState, TONClientTransactionPhase.computeSkipped);

          case 16:
            if (!(reason === QSkipReason.badState)) {
              _context46.next = 18;
              break;
            }

            throw nodeError('Account has bad state: frozen or deleted', TONClientComputeSkippedStatus.badState, TONClientTransactionPhase.computeSkipped);

          case 18:
            if (!(reason === QSkipReason.noGas)) {
              _context46.next = 20;
              break;
            }

            throw nodeError('No gas to execute VM', TONClientComputeSkippedStatus.noGas, TONClientTransactionPhase.computeSkipped);

          case 20:
            throw nodeError('Compute phase skipped by unknown reason', -1, TONClientTransactionPhase.computeSkipped);

          case 21:
            if (!(compute.compute_type === QComputeType.vm)) {
              _context46.next = 24;
              break;
            }

            if (compute.success) {
              _context46.next = 24;
              break;
            }

            throw nodeError('VM terminated with exception', compute.exit_code || 0, TONClientTransactionPhase.computeVm);

          case 24:
            action = transaction.action;

            if (!action) {
              _context46.next = 28;
              break;
            }

            if (action.success) {
              _context46.next = 28;
              break;
            }

            throw nodeError(action.no_funds ? 'Too low balance to send outbound message' : !action.valid ? 'Outbound message is invalid' : 'Action phase failed', action.result_code || 0, TONClientTransactionPhase.action);

          case 28:
            throw nodeError('Transaction aborted', -1, TONClientTransactionPhase.unknown);

          case 29:
          case "end":
            return _context46.stop();
        }
      }
    }, _callee46);
  }));
  return _checkTransaction.apply(this, arguments);
}

var transactionDetails = "\n    id\n    in_msg\n    tr_type\n    status\n    in_msg\n    out_msgs\n    block_id\n    now\n    aborted\n    lt\n    storage {\n        status_change\n    }\n    compute {\n        compute_type\n        skipped_reason\n        success\n        exit_code\n        gas_fees\n        gas_used\n    }\n    action {\n        success\n        valid\n        result_code\n        no_funds\n    }\n    out_messages {\n        id\n        msg_type\n        body\n    }\n   ";
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy9tb2R1bGVzL1RPTkNvbnRyYWN0c01vZHVsZS5qcyJdLCJuYW1lcyI6WyJUT05BZGRyZXNzU3RyaW5nVmFyaWFudCIsIkFjY291bnRJZCIsIkhleCIsIkJhc2U2NCIsIlRPTkNsaWVudFRyYW5zYWN0aW9uUGhhc2UiLCJzdG9yYWdlIiwiY29tcHV0ZVNraXBwZWQiLCJjb21wdXRlVm0iLCJhY3Rpb24iLCJ1bmtub3duIiwiVE9OQ2xpZW50Q29tcHV0ZVNraXBwZWRTdGF0dXMiLCJub1N0YXRlIiwiYmFkU3RhdGUiLCJub0dhcyIsIlRPTkNsaWVudFN0b3JhZ2VTdGF0dXMiLCJ1bmNoYW5nZWQiLCJmcm96ZW4iLCJkZWxldGVkIiwiUUluTXNnVHlwZSIsImV4dGVybmFsIiwiaWhyIiwiaW1tZWRpYXRlbHkiLCJ0cmFuc2l0IiwiZGlzY2FyZGVkRmluYWwiLCJkaXNjYXJkZWRUcmFuc2l0IiwiUU91dE1zZ1R5cGUiLCJvdXRNc2dOZXciLCJkZXF1ZXVlSW1tZWRpYXRlbHkiLCJkZXF1ZXVlIiwidHJhbnNpdFJlcXVpcmVkIiwibm9uZSIsIlFNZXNzYWdlVHlwZSIsImludGVybmFsIiwiZXh0SW4iLCJleHRPdXQiLCJRTWVzc2FnZVByb2Nlc3NpbmdTdGF0dXMiLCJxdWV1ZWQiLCJwcm9jZXNzaW5nIiwicHJlbGltaW5hcnkiLCJwcm9wb3NlZCIsImZpbmFsaXplZCIsInJlZnVzZWQiLCJ0cmFuc2l0aW5nIiwiUUJsb2NrUHJvY2Vzc2luZ1N0YXR1cyIsIlFTcGxpdFR5cGUiLCJzcGxpdCIsIm1lcmdlIiwiUUFjY291bnRUeXBlIiwidW5pbml0IiwiYWN0aXZlIiwiUVRyYW5zYWN0aW9uVHlwZSIsIm9yZGluYXJ5IiwidGljayIsInRvY2siLCJzcGxpdFByZXBhcmUiLCJzcGxpdEluc3RhbGwiLCJtZXJnZVByZXBhcmUiLCJtZXJnZUluc3RhbGwiLCJRVHJhbnNhY3Rpb25Qcm9jZXNzaW5nU3RhdHVzIiwiUUFjY291bnRTdGF0dXMiLCJub25FeGlzdCIsIlFBY2NvdW50U3RhdHVzQ2hhbmdlIiwiUUNvbXB1dGVUeXBlIiwic2tpcHBlZCIsInZtIiwiUVNraXBSZWFzb24iLCJRQm91bmNlVHlwZSIsIm5lZ0Z1bmRzIiwibm9GdW5kcyIsIm9rIiwicmVtb3ZlUHJvcHMiLCJvYmoiLCJwYXRocyIsInJlc3VsdCIsImZvckVhY2giLCJwYXRoIiwiZG90UG9zIiwiaW5kZXhPZiIsIm5hbWUiLCJzdWJzdHIiLCJjaGlsZCIsInJlZHVjZWRDaGlsZCIsIlRPTkNvbnRyYWN0c01vZHVsZSIsImNvbmZpZyIsImNvbnRleHQiLCJnZXRNb2R1bGUiLCJUT05Db25maWdNb2R1bGUiLCJxdWVyaWVzIiwiVE9OUXVlcmllc01vZHVsZSIsInBhcmFtcyIsInBhcmVudFNwYW4iLCJhY2NvdW50cyIsInF1ZXJ5IiwiaWQiLCJlcSIsImFkZHJlc3MiLCJ1bmRlZmluZWQiLCJsZW5ndGgiLCJiYWxhbmNlR3JhbXMiLCJiYWxhbmNlIiwidHJhY2UiLCJzcGFuIiwic2V0VGFnIiwiaW50ZXJuYWxEZXBsb3lKcyIsImludGVybmFsUnVuSnMiLCJpbnRlcm5hbFJ1bkxvY2FsSnMiLCJjb3JlUGFyYW1zIiwiY29kZUJhc2U2NCIsImRhdGFCYXNlNjQiLCJUT05DbGllbnRFcnJvciIsImFkZHJlc3NSZXF1aXJlZEZvclJ1bkxvY2FsIiwiZ2V0QWNjb3VudCIsImFjY291bnQiLCJjb2RlIiwiZGF0YSIsInJlcXVlc3RDb3JlIiwiY29ucyIsIml0ZW0iLCJpbnZhbGlkQ29ucyIsInB1c2giLCJyZXRyeUluZGV4IiwibG9nIiwiY29uc3RydWN0b3JIZWFkZXIiLCJtYWtlRXhwaXJlSGVhZGVyIiwiYWJpIiwiY29uc3RydWN0b3JQYXJhbXMiLCJpbml0UGFyYW1zIiwiaW1hZ2VCYXNlNjQiLCJrZXlQYWlyIiwid29ya2NoYWluSWQiLCJtZXNzYWdlIiwibWVzc2FnZUlkIiwibWVzc2FnZUJvZHlCYXNlNjQiLCJleHBpcmUiLCJoZWFkZXIiLCJmdW5jdGlvbk5hbWUiLCJpbnB1dCIsInB1YmxpY0tleUhleCIsImFkZHJlc3NIZXgiLCJzaWduUGFyYW1zIiwiZW5jb2RlZCIsImNyZWF0ZVNpZ25lZE1lc3NhZ2UiLCJ1bnNpZ25lZE1lc3NhZ2UiLCJ1bnNpZ25lZEJ5dGVzQmFzZTY0Iiwic2lnbkJ5dGVzQmFzZTY0IiwiZ2V0Qm9jSGFzaCIsImJvY0Jhc2U2NCIsImhhc2giLCJpZEJhc2U2NCIsIkJ1ZmZlciIsImZyb20iLCJ0b1N0cmluZyIsInBvc3RSZXF1ZXN0cyIsImJvZHkiLCJyZXN1bHRGaWVsZHMiLCJEYXRlIiwibm93Iiwic2VuZE5vZGVSZXF1ZXN0RmFpbGVkIiwic2VuZE1lc3NhZ2UiLCJwcm9jZXNzaW5nVGltZW91dCIsIm1lc3NhZ2VQcm9jZXNzaW5nVGltZW91dCIsInByb21pc2VzIiwiZ2V0U2VydmVySW5mbyIsInNlcnZlckluZm8iLCJvcGVyYXRpb25JZCIsInN1cHBvcnRzT3BlcmF0aW9uSWQiLCJnZW5lcmF0ZU9wZXJhdGlvbklkIiwidHJhbnNhY3Rpb24iLCJ3YWl0RXhwaXJlZCIsImJsb2NrcyIsIndhaXRGb3IiLCJmaWx0ZXIiLCJtYXN0ZXIiLCJtaW5fc2hhcmRfZ2VuX3V0aW1lIiwiZ2UiLCJ0aW1lb3V0IiwiYmxvY2siLCJ0cmFuc2FjdGlvbl9pZCIsImluX21zZ19kZXNjciIsImZpbmQiLCJtc2ciLCJpbnRlcm5hbEVycm9yIiwidHJhbnNhY3Rpb25zIiwiUHJvbWlzZSIsInJlc29sdmUiLCJyZWplY3QiLCJpbl9tc2ciLCJzdGF0dXMiLCJyYWNlIiwiZmluaXNoT3BlcmF0aW9ucyIsIm1lc3NhZ2VFeHBpcmVkIiwidHJhbnNhY3Rpb25Ob3ciLCJibG9ja19pZCIsInRvSVNPU3RyaW5nIiwiYWNjX3R5cGUiLCJhbHJlYWR5RGVwbG95ZWQiLCJwcm9jZXNzTWVzc2FnZSIsInRyYW5zYWN0aW9uRGV0YWlscyIsImNoZWNrVHJhbnNhY3Rpb24iLCJvdXRwdXRNZXNzYWdlcyIsIm91dF9tZXNzYWdlcyIsIm91dHB1dCIsImV4dGVybmFsTWVzc2FnZXMiLCJ4IiwibXNnX3R5cGUiLCJhbGwiLCJtYXAiLCJkZWNvZGVPdXRwdXRNZXNzYWdlQm9keSIsImJvZHlCYXNlNjQiLCJvdXRwdXRzIiwicmVzdWx0T3V0cHV0IiwidG9Mb3dlckNhc2UiLCJ3YWl0UGFyYW1zIiwibWVzc2FnZUJhc2U2NCIsImVtdWxhdGVCYWxhbmNlIiwiYmlnQmFsYW5jZSIsImNyZWF0ZURlcGxveU1lc3NhZ2UiLCJjYWxjTXNnUHJvY2Vzc0ZlZXMiLCJuZXdBY2NvdW50IiwibGFzdF9wYWlkIiwiTWF0aCIsImZsb29yIiwidXNlckhlYWRlciIsIm1lc3NhZ2VFeHBpcmF0aW9uVGltZW91dCIsImluY2x1ZGVzIiwiY2FsbCIsInJldHJpZXNDb3VudCIsIm1lc3NhZ2VSZXRyaWVzQ291bnQiLCJpIiwiaXNNZXNzYWdlRXhwaXJlZCIsInJldHJ5Q2FsbCIsInByb2Nlc3NEZXBsb3lNZXNzYWdlIiwiY3JlYXRlUnVuTWVzc2FnZSIsInByb2Nlc3NSdW5NZXNzYWdlIiwicmVtb3ZlVHlwZU5hbWUiLCJfX3R5cGVuYW1lIiwiT2JqZWN0IiwidmFsdWVzIiwidmFsdWUiLCJ0cmFuc2FjdGlvbkx0IiwibGFzdF90cmFuc19sdCIsIlRPTk1vZHVsZSIsIm1vZHVsZU5hbWUiLCJub2RlRXJyb3IiLCJwaGFzZSIsIlJFUExBWV9QUk9URUNUSU9OIiwiTUVTU0FHRV9FWFBJUkVEIiwiaXNOb2RlU0VNZXNzYWdlRXhwaXJlZCIsInNvdXJjZSIsIk5PREUiLCJhYm9ydGVkIiwic3RhdHVzX2NoYW5nZSIsImNvbXB1dGUiLCJjb21wdXRlX3R5cGUiLCJyZWFzb24iLCJza2lwcGVkX3JlYXNvbiIsInN1Y2Nlc3MiLCJleGl0X2NvZGUiLCJub19mdW5kcyIsInZhbGlkIiwicmVzdWx0X2NvZGUiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQWlCQTs7QUFnREE7O0FBQ0E7O0FBQ0E7O0FBQ0E7Ozs7Ozs7Ozs7QUFFTyxJQUFNQSx1QkFBdUIsR0FBRztBQUNuQ0MsRUFBQUEs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L0osTUFwRi9COztBQUFBLGlCQXFGUUEsTUFyRlI7QUFBQTtBQUFBO0FBQUE7O0FBQUEsZ0JBc0ZhQSxNQUFNLENBQUN3UCxPQXRGcEI7QUFBQTtBQUFBO0FBQUE7O0FBQUEsa0JBdUZrQmIsU0FBUyxDQUNYM08sTUFBTSxDQUFDMFAsUUFBUCxHQUNNLDBDQUROLEdBRU8sQ0FBQzFQLE1BQU0sQ0FBQzJQLEtBQVIsR0FBZ0IsNkJBQWhCLEdBQWdELHFCQUg1QyxFQUlYM1AsTUFBTSxDQUFDNFAsV0FBUCxJQUFzQixDQUpYLEVBS1hoUSx5QkFBeUIsQ0FBQ0ksTUFMZixDQXZGM0I7O0FBQUE7QUFBQSxrQkFpR1UyTyxTQUFTLENBQ1gscUJBRFcsRUFFWCxDQUFDLENBRlUsRUFHWC9PLHlCQUF5QixDQUFDSyxPQUhmLENBakduQjs7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxHOzs7O0FBd0dBLElBQU00TCxrQkFBa0IseWRBQXhCIiwic291cmNlc0NvbnRlbnQiOlsiLypcbiAqIENvcHlyaWdodCAyMDE4LTIwMjAgVE9OIERFViBTT0xVVElPTlMgTFRELlxuICpcbiAqIExpY2Vuc2VkIHVuZGVyIHRoZSBTT0ZUV0FSRSBFVkFMVUFUSU9OIExpY2Vuc2UgKHRoZSBcIkxpY2Vuc2VcIik7IHlvdSBtYXkgbm90IHVzZVxuICogdGhpcyBmaWxlIGV4Y2VwdCBpbiBjb21wbGlhbmNlIHdpdGggdGhlIExpY2Vuc2UuICBZb3UgbWF5IG9idGFpbiBhIGNvcHkgb2YgdGhlXG4gKiBMaWNlbnNlIGF0OlxuICpcbiAqIGh0dHA6Ly93d3cudG9uLmRldi9saWNlbnNlc1xuICpcbiAqIFVubGVzcyByZXF1aXJlZCBieSBhcHBsaWNhYmxlIGxhdyBvciBhZ3JlZWQgdG8gaW4gd3JpdGluZywgc29mdHdhcmVcbiAqIGRpc3RyaWJ1dGVkIHVuZGVyIHRoZSBMaWNlbnNlIGlzIGRpc3RyaWJ1dGVkIG9uIGFuIFwiQVMgSVNcIiBCQVNJUyxcbiAqIFdJVEhPVVQgV0FSUkFOVElFUyBPUiBDT05ESVRJT05TIE9GIEFOWSBLSU5ELCBlaXRoZXIgZXhwcmVzcyBvciBpbXBsaWVkLlxuICogU2VlIHRoZSBMaWNlbnNlIGZvciB0aGUgc3BlY2lmaWMgVE9OIERFViBzb2Z0d2FyZSBnb3Zlcm5pbmcgcGVybWlzc2lvbnMgYW5kXG4gKiBsaW1pdGF0aW9ucyB1bmRlciB0aGUgTGljZW5zZS5cbiAqL1xuLy8gQGZsb3dcblxuaW1wb3J0IHsgU3BhbiwgU3BhbkNvbnRleHQgfSBmcm9tICdvcGVudHJhY2luZyc7XG5pbXBvcnQgdHlwZSB7XG4gICAgUUFjY291bnQsXG4gICAgUUJsb2NrLFxuICAgIFFNZXNzYWdlLFxuICAgIFFUcmFuc2FjdGlvbixcbiAgICBUT05Db250cmFjdEFCSSxcbiAgICBUT05Db250cmFjdEFjY291bnRXYWl0UGFyYW1zLFxuICAgIFRPTkNvbnRyYWN0Q29udmVydEFkZHJlc3NQYXJhbXMsXG4gICAgVE9OQ29udHJhY3RDb252ZXJ0QWRkcmVzc1Jlc3VsdCxcbiAgICBUT05Db250cmFjdENyZWF0ZVJ1bkJvZHlQYXJhbXMsXG4gICAgVE9OQ29udHJhY3RDcmVhdGVSdW5Cb2R5UmVzdWx0LFxuICAgIFRPTkNvbnRyYWN0Q3JlYXRlU2lnbmVkRGVwbG95TWVzc2FnZVBhcmFtcyxcbiAgICBUT05Db250cmFjdENyZWF0ZVNpZ25lZE1lc3NhZ2VQYXJhbXMsXG4gICAgVE9OQ29udHJhY3RDcmVhdGVTaWduZWRSdW5NZXNzYWdlUGFyYW1zLFxuICAgIFRPTkNvbnRyYWN0RGVjb2RlTWVzc2FnZUJvZHlQYXJhbXMsXG4gICAgVE9OQ29udHJhY3REZWNvZGVNZXNzYWdlQm9keVJlc3VsdCxcbiAgICBUT05Db250cmFjdERlY29kZVJ1bk91dHB1dFBhcmFtcyxcbiAgICBUT05Db250cmFjdERlcGxveU1lc3NhZ2UsXG4gICAgVE9OQ29udHJhY3REZXBsb3lQYXJhbXMsXG4gICAgVE9OQ29udHJhY3REZXBsb3lSZXN1bHQsXG4gICAgVE9OQ29udHJhY3RDYWxjRGVwbG95RmVlUGFyYW1zLFxuICAgIFRPTkNvbnRyYWN0Qm9jLFxuICAgIFRPTkNvbnRyYWN0R2V0Qm9jSGFzaFJlc3VsdCxcbiAgICBUT05Db250cmFjdEdldENvZGVGcm9tSW1hZ2VQYXJhbXMsXG4gICAgVE9OQ29udHJhY3RHZXRDb2RlRnJvbUltYWdlUmVzdWx0LFxuICAgIFRPTkNvbnRyYWN0R2V0RGVwbG95RGF0YVBhcmFtcyxcbiAgICBUT05Db250cmFjdEdldERlcGxveURhdGFSZXN1bHQsXG4gICAgVE9OQ29udHJhY3RHZXRGdW5jdGlvbklkUGFyYW1zLFxuICAgIFRPTkNvbnRyYWN0R2V0RnVuY3Rpb25JZFJlc3VsdCxcbiAgICBUT05Db250cmFjdExvYWRQYXJhbXMsXG4gICAgVE9OQ29udHJhY3RMb2FkUmVzdWx0LFxuICAgIFRPTkNvbnRyYWN0Q2FsY1J1bkZlZVBhcmFtcyxcbiAgICBUT05Db250cmFjdFRyYW5zYWN0aW9uRmVlcyxcbiAgICBUT05Db250cmFjdENhbGNGZWVSZXN1bHQsXG4gICAgVE9OQ29udHJhY3RDYWxjTXNnUHJvY2Vzc2luZ0ZlZXNQYXJhbXMsXG4gICAgVE9OQ29udHJhY3RNZXNzYWdlLFxuICAgIFRPTkNvbnRyYWN0UnVuTG9jYWxQYXJhbXMsXG4gICAgVE9OQ29udHJhY3RSdW5NZXNzYWdlLFxuICAgIFRPTkNvbnRyYWN0UnVuUGFyYW1zLFxuICAgIFRPTkNvbnRyYWN0UnVuUmVzdWx0LFxuICAgIFRPTkNvbnRyYWN0cyxcbiAgICBUT05Db250cmFjdFVuc2lnbmVkRGVwbG95TWVzc2FnZSxcbiAgICBUT05Db250cmFjdFVuc2lnbmVkTWVzc2FnZSxcbiAgICBUT05Db250cmFjdFVuc2lnbmVkUnVuTWVzc2FnZSxcbiAgICBUT05Db250cmFjdFJ1bkdldFBhcmFtcyxcbiAgICBUT05Db250cmFjdFJ1bkdldFJlc3VsdCxcbn0gZnJvbSAnLi4vLi4vdHlwZXMnO1xuaW1wb3J0IHsgVE9OQ2xpZW50RXJyb3IgfSBmcm9tICcuLi9UT05DbGllbnQnO1xuaW1wb3J0IHsgVE9OTW9kdWxlIH0gZnJvbSAnLi4vVE9OTW9kdWxlJztcbmltcG9ydCBUT05Db25maWdNb2R1bGUgZnJvbSAnLi9UT05Db25maWdNb2R1bGUnO1xuaW1wb3J0IFRPTlF1ZXJpZXNNb2R1bGUgZnJvbSAnLi9UT05RdWVyaWVzTW9kdWxlJztcblxuZXhwb3J0IGNvbnN0IFRPTkFkZHJlc3NTdHJpbmdWYXJpYW50ID0ge1xuICAgIEFjY291bnRJZDogJ0FjY291bnRJZCcsXG4gICAgSGV4OiAnSGV4JyxcbiAgICBCYXNlNjQ6ICdCYXNlNjQnLFxufTtcblxuZXhwb3J0IGNvbnN0IFRPTkNsaWVudFRyYW5zYWN0aW9uUGhhc2UgPSB7XG4gICAgc3RvcmFnZTogJ3N0b3JhZ2UnLFxuICAgIGNvbXB1dGVTa2lwcGVkOiAnY29tcHV0ZVNraXBwZWQnLFxuICAgIGNvbXB1dGVWbTogJ2NvbXB1dGVWbScsXG4gICAgYWN0aW9uOiAnYWN0aW9uJyxcbiAgICB1bmtub3duOiAndW5rbm93bicsXG59O1xuXG5leHBvcnQgY29uc3QgVE9OQ2xpZW50Q29tcHV0ZVNraXBwZWRTdGF0dXMgPSB7XG4gICAgbm9TdGF0ZTogMCxcbiAgICBiYWRTdGF0ZTogMSxcbiAgICBub0dhczogMixcbn07XG5cbmV4cG9ydCBjb25zdCBUT05DbGllbnRTdG9yYWdlU3RhdHVzID0ge1xuICAgIHVuY2hhbmdlZDogMCxcbiAgICBmcm96ZW46IDEsXG4gICAgZGVsZXRlZDogMixcbn07XG5cbmV4cG9ydCBjb25zdCBRSW5Nc2dUeXBlID0ge1xuICAgIGV4dGVybmFsOiAwLFxuICAgIGlocjogMSxcbiAgICBpbW1lZGlhdGVseTogMixcbiAgICBmaW5hbDogMyxcbiAgICB0cmFuc2l0OiA0LFxuICAgIGRpc2NhcmRlZEZpbmFsOiA1LFxuICAgIGRpc2NhcmRlZFRyYW5zaXQ6IDYsXG59O1xuXG5leHBvcnQgY29uc3QgUU91dE1zZ1R5cGUgPSB7XG4gICAgZXh0ZXJuYWw6IDAsXG4gICAgaW1tZWRpYXRlbHk6IDEsXG4gICAgb3V0TXNnTmV3OiAyLFxuICAgIHRyYW5zaXQ6IDMsXG4gICAgZGVxdWV1ZUltbWVkaWF0ZWx5OiA0LFxuICAgIGRlcXVldWU6IDUsXG4gICAgdHJhbnNpdFJlcXVpcmVkOiA2LFxuICAgIG5vbmU6IC0xLFxufTtcblxuZXhwb3J0IGNvbnN0IFFNZXNzYWdlVHlwZSA9IHtcbiAgICBpbnRlcm5hbDogMCxcbiAgICBleHRJbjogMSxcbiAgICBleHRPdXQ6IDIsXG59O1xuXG5leHBvcnQgY29uc3QgUU1lc3NhZ2VQcm9jZXNzaW5nU3RhdHVzID0ge1xuICAgIHVua25vd246IDAsXG4gICAgcXVldWVkOiAxLFxuICAgIHByb2Nlc3Npbmc6IDIsXG4gICAgcHJlbGltaW5hcnk6IDMsXG4gICAgcHJvcG9zZWQ6IDQsXG4gICAgZmluYWxpemVkOiA1LFxuICAgIHJlZnVzZWQ6IDYsXG4gICAgdHJhbnNpdGluZzogNyxcbn07XG5cbmV4cG9ydCBjb25zdCBRQmxvY2tQcm9jZXNzaW5nU3RhdHVzID0ge1xuICAgIHVua25vd246IDAsXG4gICAgcHJvcG9zZWQ6IDEsXG4gICAgZmluYWxpemVkOiAyLFxuICAgIHJlZnVzZWQ6IDMsXG59O1xuXG5leHBvcnQgY29uc3QgUVNwbGl0VHlwZSA9IHtcbiAgICBub25lOiAwLFxuICAgIHNwbGl0OiAyLFxuICAgIG1lcmdlOiAzLFxufTtcblxuZXhwb3J0IGNvbnN0IFFBY2NvdW50VHlwZSA9IHtcbiAgICB1bmluaXQ6IDAsXG4gICAgYWN0aXZlOiAxLFxuICAgIGZyb3plbjogMixcbn07XG5cbmV4cG9ydCBjb25zdCBRVHJhbnNhY3Rpb25UeXBlID0ge1xuICAgIG9yZGluYXJ5OiAwLFxuICAgIHN0b3JhZ2U6IDEsXG4gICAgdGljazogMixcbiAgICB0b2NrOiAzLFxuICAgIHNwbGl0UHJlcGFyZTogNCxcbiAgICBzcGxpdEluc3RhbGw6IDUsXG4gICAgbWVyZ2VQcmVwYXJlOiA2LFxuICAgIG1lcmdlSW5zdGFsbDogNyxcbn07XG5cbmV4cG9ydCBjb25zdCBRVHJhbnNhY3Rpb25Qcm9jZXNzaW5nU3RhdHVzID0ge1xuICAgIHVua25vd246IDAsXG4gICAgcHJlbGltaW5hcnk6IDEsXG4gICAgcHJvcG9zZWQ6IDIsXG4gICAgZmluYWxpemVkOiAzLFxuICAgIHJlZnVzZWQ6IDQsXG59O1xuXG5leHBvcnQgY29uc3QgUUFjY291bnRTdGF0dXMgPSB7XG4gICAgdW5pbml0OiAwLFxuICAgIGFjdGl2ZTogMSxcbiAgICBmcm96ZW46IDIsXG4gICAgbm9uRXhpc3Q6IDMsXG59O1xuXG5leHBvcnQgY29uc3QgUUFjY291bnRTdGF0dXNDaGFuZ2UgPSB7XG4gICAgdW5jaGFuZ2VkOiAwLFxuICAgIGZyb3plbjogMSxcbiAgICBkZWxldGVkOiAyLFxufTtcblxuZXhwb3J0IGNvbnN0IFFDb21wdXRlVHlwZSA9IHtcbiAgICBza2lwcGVkOiAwLFxuICAgIHZtOiAxLFxufTtcblxuZXhwb3J0IGNvbnN0IFFTa2lwUmVhc29uID0ge1xuICAgIG5vU3RhdGU6IDAsXG4gICAgYmFkU3RhdGU6IDEsXG4gICAgbm9HYXM6IDIsXG59O1xuXG5leHBvcnQgY29uc3QgUUJvdW5jZVR5cGUgPSB7XG4gICAgbmVnRnVuZHM6IDAsXG4gICAgbm9GdW5kczogMSxcbiAgICBvazogMixcbn07XG5cbmV4cG9ydCBmdW5jdGlvbiByZW1vdmVQcm9wcyhvYmo6IHt9LCBwYXRoczogc3RyaW5nW10pOiB7fSB7XG4gICAgbGV0IHJlc3VsdCA9IG9iajtcbiAgICBwYXRocy5mb3JFYWNoKChwYXRoKSA9PiB7XG4gICAgICAgIGNvbnN0IGRvdFBvcyA9IHBhdGguaW5kZXhPZignLicpO1xuICAgICAgICBpZiAoZG90UG9zIDwgMCkge1xuICAgICAgICAgICAgaWYgKHBhdGggaW4gcmVzdWx0KSB7XG4gICAgICAgICAgICAgICAgcmVzdWx0ID0geyAuLi5yZXN1bHQgfTtcbiAgICAgICAgICAgICAgICBkZWxldGUgcmVzdWx0W3BhdGhdO1xuICAgICAgICAgICAgfVxuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgY29uc3QgbmFtZSA9IHBhdGguc3Vic3RyKDAsIGRvdFBvcyk7XG4gICAgICAgICAgICBjb25zdCBjaGlsZCA9IHJlc3VsdFtuYW1lXTtcbiAgICAgICAgICAgIGlmIChjaGlsZCkge1xuICAgICAgICAgICAgICAgIGNvbnN0IHJlZHVjZWRDaGlsZCA9IHJlbW92ZVByb3BzKGNoaWxkLCBbcGF0aC5zdWJzdHIoZG90UG9zICsgMSldKTtcbiAgICAgICAgICAgICAgICBpZiAocmVkdWNlZENoaWxkICE9PSBjaGlsZCkge1xuICAgICAgICAgICAgICAgICAgICByZXN1bHQgPSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAuLi5yZXN1bHQsXG4gICAgICAgICAgICAgICAgICAgICAgICBbbmFtZV06IHJlZHVjZWRDaGlsZCxcbiAgICAgICAgICAgICAgICAgICAgfTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICB9KTtcbiAgICByZXR1cm4gcmVzdWx0O1xufVxuXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBUT05Db250cmFjdHNNb2R1bGUgZXh0ZW5kcyBUT05Nb2R1bGUgaW1wbGVtZW50cyBUT05Db250cmFjdHMge1xuICAgIGNvbmZpZzogVE9OQ29uZmlnTW9kdWxlO1xuXG4gICAgcXVlcmllczogVE9OUXVlcmllc01vZHVsZTtcblxuICAgIGFzeW5jIHNldHVwKCk6IFByb21pc2U8Kj4ge1xuICAgICAgICB0aGlzLmNvbmZpZyA9IHRoaXMuY29udGV4dC5nZXRNb2R1bGUoVE9OQ29uZmlnTW9kdWxlKTtcbiAgICAgICAgdGhpcy5xdWVyaWVzID0gdGhpcy5jb250ZXh0LmdldE1vZHVsZShUT05RdWVyaWVzTW9kdWxlKTtcbiAgICB9XG5cbiAgICBhc3luYyBsb2FkKFxuICAgICAgICBwYXJhbXM6IFRPTkNvbnRyYWN0TG9hZFBhcmFtcyxcbiAgICAgICAgcGFyZW50U3Bhbj86IChTcGFuIHwgU3BhbkNvbnRleHQpLFxuICAgICk6IFByb21pc2U8VE9OQ29udHJhY3RMb2FkUmVzdWx0PiB7XG4gICAgICAgIGNvbnN0IGFjY291bnRzOiBRQWNjb3VudFtdID0gYXdhaXQgdGhpcy5xdWVyaWVzLmFjY291bnRzLnF1ZXJ5KHtcbiAgICAgICAgICAgIGlkOiB7IGVxOiBwYXJhbXMuYWRkcmVzcyB9LFxuICAgICAgICB9LCAnYmFsYW5jZScsIHVuZGVmaW5lZCwgdW5kZWZpbmVkLCB1bmRlZmluZWQsIHBhcmVudFNwYW4pO1xuICAgICAgICBpZiAoYWNjb3VudHMgJiYgYWNjb3VudHMubGVuZ3RoID4gMCkge1xuICAgICAgICAgICAgcmV0dXJuIHtcbiAgICAgICAgICAgICAgICBpZDogcGFyYW1zLmFkZHJlc3MsXG4gICAgICAgICAgICAgICAgYmFsYW5jZUdyYW1zOiBhY2NvdW50c1swXS5iYWxhbmNlLFxuICAgICAgICAgICAgfTtcbiAgICAgICAgfVxuICAgICAgICByZXR1cm4ge1xuICAgICAgICAgICAgaWQ6IG51bGwsXG4gICAgICAgICAgICBiYWxhbmNlR3JhbXM6IG51bGwsXG4gICAgICAgIH07XG4gICAgfVxuXG5cbiAgICAvLyBGYWNhZGUgZnVuY3Rpb25zXG5cbiAgICBhc3luYyBkZXBsb3koXG4gICAgICAgIHBhcmFtczogVE9OQ29udHJhY3REZXBsb3lQYXJhbXMsXG4gICAgICAgIHBhcmVudFNwYW4/OiAoU3BhbiB8IFNwYW5Db250ZXh0KSxcbiAgICApOiBQcm9taXNlPFRPTkNvbnRyYWN0RGVwbG95UmVzdWx0PiB7XG4gICAgICAgIHJldHVybiB0aGlzLmNvbnRleHQudHJhY2UoJ2NvbnRyYWN0cy5kZXBsb3knLCBhc3luYyAoc3BhbjogU3BhbikgPT4ge1xuICAgICAgICAgICAgc3Bhbi5zZXRUYWcoJ3BhcmFtcycsIHJlbW92ZVByb3BzKHBhcmFtcywgWydrZXlQYWlyLnNlY3JldCddKSk7XG4gICAgICAgICAgICByZXR1cm4gdGhpcy5pbnRlcm5hbERlcGxveUpzKHBhcmFtcywgc3Bhbik7XG4gICAgICAgIH0sIHBhcmVudFNwYW4pO1xuICAgIH1cblxuXG4gICAgYXN5bmMgcnVuKFxuICAgICAgICBwYXJhbXM6IFRPTkNvbnRyYWN0UnVuUGFyYW1zLFxuICAgICAgICBwYXJlbnRTcGFuPzogKFNwYW4gfCBTcGFuQ29udGV4dCksXG4gICAgKTogUHJvbWlzZTxUT05Db250cmFjdFJ1blJlc3VsdD4ge1xuICAgICAgICByZXR1cm4gdGhpcy5jb250ZXh0LnRyYWNlKCdjb250cmFjdHMucnVuJywgYXN5bmMgKHNwYW46IFNwYW4pID0+IHtcbiAgICAgICAgICAgIHNwYW4uc2V0VGFnKCdwYXJhbXMnLCByZW1vdmVQcm9wcyhwYXJhbXMsIFsna2V5UGFpci5zZWNyZXQnXSkpO1xuICAgICAgICAgICAgcmV0dXJuIHRoaXMuaW50ZXJuYWxSdW5KcyhwYXJhbXMsIHNwYW4pO1xuICAgICAgICB9LCBwYXJlbnRTcGFuKTtcbiAgICB9XG5cbiAgICBhc3luYyBydW5Mb2NhbChcbiAgICAgICAgcGFyYW1zOiBUT05Db250cmFjdFJ1bkxvY2FsUGFyYW1zLFxuICAgICAgICBwYXJlbnRTcGFuPzogKFNwYW4gfCBTcGFuQ29udGV4dCksXG4gICAgKTogUHJvbWlzZTxUT05Db250cmFjdFJ1blJlc3VsdD4ge1xuICAgICAgICByZXR1cm4gdGhpcy5jb250ZXh0LnRyYWNlKCdjb250cmFjdHMucnVuTG9jYWwnLCBhc3luYyAoc3BhbjogU3BhbikgPT4ge1xuICAgICAgICAgICAgc3Bhbi5zZXRUYWcoJ3BhcmFtcycsIHJlbW92ZVByb3BzKHBhcmFtcywgWydrZXlQYWlyLnNlY3JldCddKSk7XG4gICAgICAgICAgICByZXR1cm4gdGhpcy5pbnRlcm5hbFJ1bkxvY2FsSnMocGFyYW1zLCBzcGFuKTtcbiAgICAgICAgfSwgcGFyZW50U3Bhbik7XG4gICAgfVxuXG4gICAgYXN5bmMgcnVuR2V0KFxuICAgICAgICBwYXJhbXM6IFRPTkNvbnRyYWN0UnVuR2V0UGFyYW1zLFxuICAgICk6IFByb21pc2U8VE9OQ29udHJhY3RSdW5HZXRSZXN1bHQ+IHtcbiAgICAgICAgbGV0IGNvcmVQYXJhbXM6IFRPTkNvbnRyYWN0UnVuR2V0UGFyYW1zID0gcGFyYW1zO1xuICAgICAgICBpZiAoIXBhcmFtcy5jb2RlQmFzZTY0IHx8ICFwYXJhbXMuZGF0YUJhc2U2NCkge1xuICAgICAgICAgICAgaWYgKCFwYXJhbXMuYWRkcmVzcykge1xuICAgICAgICAgICAgICAgIHRocm93IFRPTkNsaWVudEVycm9yLmFkZHJlc3NSZXF1aXJlZEZvclJ1bkxvY2FsKCk7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBjb25zdCBhY2NvdW50OiBhbnkgPSBhd2FpdCB0aGlzLmdldEFjY291bnQocGFyYW1zLmFkZHJlc3MsIHRydWUpO1xuICAgICAgICAgICAgYWNjb3VudC5jb2RlQmFzZTY0ID0gYWNjb3VudC5jb2RlO1xuICAgICAgICAgICAgYWNjb3VudC5kYXRhQmFzZTY0ID0gYWNjb3VudC5kYXRhO1xuICAgICAgICAgICAgZGVsZXRlIGFjY291bnQuY29kZTtcbiAgICAgICAgICAgIGRlbGV0ZSBhY2NvdW50LmRhdGE7XG4gICAgICAgICAgICBjb3JlUGFyYW1zID0ge1xuICAgICAgICAgICAgICAgIC4uLmFjY291bnQsXG4gICAgICAgICAgICAgICAgLi4ucGFyYW1zLFxuICAgICAgICAgICAgfTtcbiAgICAgICAgfVxuICAgICAgICByZXR1cm4gdGhpcy5yZXF1ZXN0Q29yZSgndHZtLmdldCcsIGNvcmVQYXJhbXMpO1xuICAgIH1cblxuICAgIGFycmF5RnJvbUNPTlMoY29uczogYW55W10pOiBhbnlbXSB7XG4gICAgICAgIGNvbnN0IHJlc3VsdCA9IFtdO1xuICAgICAgICBsZXQgaXRlbSA9IGNvbnM7XG4gICAgICAgIHdoaWxlIChpdGVtKSB7XG4gICAgICAgICAgICBpZiAoIWl0ZW0ubGVuZ3RoID09PSAyKSB7XG4gICAgICAgICAgICAgICAgdGhyb3cgVE9OQ2xpZW50RXJyb3IuaW52YWxpZENvbnMoKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIHJlc3VsdC5wdXNoKGl0ZW1bMF0pO1xuICAgICAgICAgICAgaXRlbSA9IGl0ZW1bMV07XG4gICAgICAgIH1cbiAgICAgICAgcmV0dXJuIHJlc3VsdDtcbiAgICB9XG5cblxuICAgIC8vIE1lc3NhZ2UgY3JlYXRpb25cblxuICAgIGFzeW5jIGNyZWF0ZURlcGxveU1lc3NhZ2UoXG4gICAgICAgIHBhcmFtczogVE9OQ29udHJhY3REZXBsb3lQYXJhbXMsXG4gICAgICAgIHJldHJ5SW5kZXg/OiBudW1iZXIsXG4gICAgKTogUHJvbWlzZTxUT05Db250cmFjdERlcGxveU1lc3NhZ2U+IHtcbiAgICAgICAgdGhpcy5jb25maWcubG9nKCdjcmVhdGVEZXBsb3lNZXNzYWdlJywgcGFyYW1zKTtcbiAgICAgICAgY29uc3QgY29uc3RydWN0b3JIZWFkZXIgPSB0aGlzLm1ha2VFeHBpcmVIZWFkZXIoXG4gICAgICAgICAgICBwYXJhbXMucGFja2FnZS5hYmksXG4gICAgICAgICAgICBwYXJhbXMuY29uc3RydWN0b3JIZWFkZXIsXG4gICAgICAgICAgICByZXRyeUluZGV4LFxuICAgICAgICApO1xuICAgICAgICBjb25zdCBtZXNzYWdlOiB7XG4gICAgICAgICAgICBhZGRyZXNzOiBzdHJpbmcsXG4gICAgICAgICAgICBtZXNzYWdlSWQ6IHN0cmluZyxcbiAgICAgICAgICAgIG1lc3NhZ2VCb2R5QmFzZTY0OiBzdHJpbmcsXG4gICAgICAgIH0gPSBhd2FpdCB0aGlzLnJlcXVlc3RDb3JlKCdjb250cmFjdHMuZGVwbG95Lm1lc3NhZ2UnLCB7XG4gICAgICAgICAgICBhYmk6IHBhcmFtcy5wYWNrYWdlLmFiaSxcbiAgICAgICAgICAgIGNvbnN0cnVjdG9ySGVhZGVyLFxuICAgICAgICAgICAgY29uc3RydWN0b3JQYXJhbXM6IHBhcmFtcy5jb25zdHJ1Y3RvclBhcmFtcyxcbiAgICAgICAgICAgIGluaXRQYXJhbXM6IHBhcmFtcy5pbml0UGFyYW1zLFxuICAgICAgICAgICAgaW1hZ2VCYXNlNjQ6IHBhcmFtcy5wYWNrYWdlLmltYWdlQmFzZTY0LFxuICAgICAgICAgICAga2V5UGFpcjogcGFyYW1zLmtleVBhaXIsXG4gICAgICAgICAgICB3b3JrY2hhaW5JZDogcGFyYW1zLndvcmtjaGFpbklkLFxuICAgICAgICB9KTtcbiAgICAgICAgcmV0dXJuIHtcbiAgICAgICAgICAgIG1lc3NhZ2U6IHtcbiAgICAgICAgICAgICAgICBtZXNzYWdlSWQ6IG1lc3NhZ2UubWVzc2FnZUlkLFxuICAgICAgICAgICAgICAgIG1lc3NhZ2VCb2R5QmFzZTY0OiBtZXNzYWdlLm1lc3NhZ2VCb2R5QmFzZTY0LFxuICAgICAgICAgICAgICAgIGV4cGlyZTogY29uc3RydWN0b3JIZWFkZXI/LmV4cGlyZSxcbiAgICAgICAgICAgIH0sXG4gICAgICAgICAgICBhZGRyZXNzOiBtZXNzYWdlLmFkZHJlc3MsXG4gICAgICAgIH07XG4gICAgfVxuXG5cbiAgICBhc3luYyBjcmVhdGVSdW5NZXNzYWdlKFxuICAgICAgICBwYXJhbXM6IFRPTkNvbnRyYWN0UnVuUGFyYW1zLFxuICAgICAgICByZXRyeUluZGV4PzogbnVtYmVyLFxuICAgICk6IFByb21pc2U8VE9OQ29udHJhY3RSdW5NZXNzYWdlPiB7XG4gICAgICAgIHRoaXMuY29uZmlnLmxvZygnY3JlYXRlUnVuTWVzc2FnZScsIHBhcmFtcyk7XG4gICAgICAgIGNvbnN0IGhlYWRlciA9IHRoaXMubWFrZUV4cGlyZUhlYWRlcihcbiAgICAgICAgICAgIHBhcmFtcy5hYmksXG4gICAgICAgICAgICBwYXJhbXMuaGVhZGVyLFxuICAgICAgICAgICAgcmV0cnlJbmRleCxcbiAgICAgICAgKTtcbiAgICAgICAgY29uc3QgbWVzc2FnZSA9IGF3YWl0IHRoaXMucmVxdWVzdENvcmUoJ2NvbnRyYWN0cy5ydW4ubWVzc2FnZScsIHtcbiAgICAgICAgICAgIGFkZHJlc3M6IHBhcmFtcy5hZGRyZXNzLFxuICAgICAgICAgICAgYWJpOiBwYXJhbXMuYWJpLFxuICAgICAgICAgICAgZnVuY3Rpb25OYW1lOiBwYXJhbXMuZnVuY3Rpb25OYW1lLFxuICAgICAgICAgICAgaGVhZGVyLFxuICAgICAgICAgICAgaW5wdXQ6IHBhcmFtcy5pbnB1dCxcbiAgICAgICAgICAgIGtleVBhaXI6IHBhcmFtcy5rZXlQYWlyLFxuICAgICAgICB9KTtcbiAgICAgICAgbWVzc2FnZS5leHBpcmUgPSBoZWFkZXI/LmV4cGlyZTtcbiAgICAgICAgcmV0dXJuIHtcbiAgICAgICAgICAgIGFkZHJlc3M6IHBhcmFtcy5hZGRyZXNzLFxuICAgICAgICAgICAgYWJpOiBwYXJhbXMuYWJpLFxuICAgICAgICAgICAgZnVuY3Rpb25OYW1lOiBwYXJhbXMuZnVuY3Rpb25OYW1lLFxuICAgICAgICAgICAgbWVzc2FnZSxcbiAgICAgICAgfTtcbiAgICB9XG5cbiAgICBhc3luYyBjcmVhdGVVbnNpZ25lZERlcGxveU1lc3NhZ2UoXG4gICAgICAgIHBhcmFtczogVE9OQ29udHJhY3REZXBsb3lQYXJhbXMsXG4gICAgICAgIHJldHJ5SW5kZXg/OiBudW1iZXIsXG4gICAgKTogUHJvbWlzZTxUT05Db250cmFjdFVuc2lnbmVkRGVwbG95TWVzc2FnZT4ge1xuICAgICAgICBjb25zdCBjb25zdHJ1Y3RvckhlYWRlciA9IHRoaXMubWFrZUV4cGlyZUhlYWRlcihcbiAgICAgICAgICAgIHBhcmFtcy5wYWNrYWdlLmFiaSxcbiAgICAgICAgICAgIHBhcmFtcy5jb25zdHJ1Y3RvckhlYWRlcixcbiAgICAgICAgICAgIHJldHJ5SW5kZXgsXG4gICAgICAgICk7XG4gICAgICAgIGNvbnN0IHJlc3VsdDoge1xuICAgICAgICAgICAgZW5jb2RlZDogVE9OQ29udHJhY3RVbnNpZ25lZE1lc3NhZ2UsXG4gICAgICAgICAgICBhZGRyZXNzSGV4OiBzdHJpbmcsXG4gICAgICAgIH0gPSBhd2FpdCB0aGlzLnJlcXVlc3RDb3JlKCdjb250cmFjdHMuZGVwbG95LmVuY29kZV91bnNpZ25lZF9tZXNzYWdlJywge1xuICAgICAgICAgICAgYWJpOiBwYXJhbXMucGFja2FnZS5hYmksXG4gICAgICAgICAgICBjb25zdHJ1Y3RvckhlYWRlcixcbiAgICAgICAgICAgIGNvbnN0cnVjdG9yUGFyYW1zOiBwYXJhbXMuY29uc3RydWN0b3JQYXJhbXMsXG4gICAgICAgICAgICBpbml0UGFyYW1zOiBwYXJhbXMuaW5pdFBhcmFtcyxcbiAgICAgICAgICAgIGltYWdlQmFzZTY0OiBwYXJhbXMucGFja2FnZS5pbWFnZUJhc2U2NCxcbiAgICAgICAgICAgIHB1YmxpY0tleUhleDogcGFyYW1zLmtleVBhaXIucHVibGljLFxuICAgICAgICAgICAgd29ya2NoYWluSWQ6IHBhcmFtcy53b3JrY2hhaW5JZCxcbiAgICAgICAgfSk7XG4gICAgICAgIHJldHVybiB7XG4gICAgICAgICAgICBhZGRyZXNzOiByZXN1bHQuYWRkcmVzc0hleCxcbiAgICAgICAgICAgIHNpZ25QYXJhbXM6IHtcbiAgICAgICAgICAgICAgICAuLi5yZXN1bHQuZW5jb2RlZCxcbiAgICAgICAgICAgICAgICBhYmk6IHBhcmFtcy5wYWNrYWdlLmFiaSxcbiAgICAgICAgICAgICAgICBleHBpcmU6IGNvbnN0cnVjdG9ySGVhZGVyPy5leHBpcmUsXG4gICAgICAgICAgICB9LFxuICAgICAgICB9O1xuICAgIH1cblxuXG4gICAgYXN5bmMgY3JlYXRlVW5zaWduZWRSdW5NZXNzYWdlKFxuICAgICAgICBwYXJhbXM6IFRPTkNvbnRyYWN0UnVuUGFyYW1zLFxuICAgICAgICByZXRyeUluZGV4PzogbnVtYmVyLFxuICAgICk6IFByb21pc2U8VE9OQ29udHJhY3RVbnNpZ25lZFJ1bk1lc3NhZ2U+IHtcbiAgICAgICAgY29uc3QgaGVhZGVyID0gdGhpcy5tYWtlRXhwaXJlSGVhZGVyKFxuICAgICAgICAgICAgcGFyYW1zLmFiaSxcbiAgICAgICAgICAgIHBhcmFtcy5oZWFkZXIsXG4gICAgICAgICAgICByZXRyeUluZGV4LFxuICAgICAgICApO1xuICAgICAgICBjb25zdCBzaWduUGFyYW1zID0gYXdhaXQgdGhpcy5yZXF1ZXN0Q29yZSgnY29udHJhY3RzLnJ1bi5lbmNvZGVfdW5zaWduZWRfbWVzc2FnZScsIHtcbiAgICAgICAgICAgIGFkZHJlc3M6IHBhcmFtcy5hZGRyZXNzLFxuICAgICAgICAgICAgYWJpOiBwYXJhbXMuYWJpLFxuICAgICAgICAgICAgZnVuY3Rpb25OYW1lOiBwYXJhbXMuZnVuY3Rpb25OYW1lLFxuICAgICAgICAgICAgaGVhZGVyLFxuICAgICAgICAgICAgaW5wdXQ6IHBhcmFtcy5pbnB1dCxcbiAgICAgICAgfSk7XG4gICAgICAgIHJldHVybiB7XG4gICAgICAgICAgICBhZGRyZXNzOiBwYXJhbXMuYWRkcmVzcyxcbiAgICAgICAgICAgIGZ1bmN0aW9uTmFtZTogcGFyYW1zLmZ1bmN0aW9uTmFtZSxcbiAgICAgICAgICAgIHNpZ25QYXJhbXM6IHtcbiAgICAgICAgICAgICAgICAuLi5zaWduUGFyYW1zLFxuICAgICAgICAgICAgICAgIGFiaTogcGFyYW1zLmFiaSxcbiAgICAgICAgICAgICAgICBleHBpcmU6IGhlYWRlcj8uZXhwaXJlLFxuICAgICAgICAgICAgfSxcbiAgICAgICAgfTtcbiAgICB9XG5cblxuICAgIGFzeW5jIGNyZWF0ZVNpZ25lZE1lc3NhZ2UoXG4gICAgICAgIHBhcmFtczogVE9OQ29udHJhY3RDcmVhdGVTaWduZWRNZXNzYWdlUGFyYW1zLFxuICAgICk6IFByb21pc2U8VE9OQ29udHJhY3RNZXNzYWdlPiB7XG4gICAgICAgIHJldHVybiB0aGlzLnJlcXVlc3RDb3JlKCdjb250cmFjdHMuZW5jb2RlX21lc3NhZ2Vfd2l0aF9zaWduJywgcGFyYW1zKTtcbiAgICB9XG5cblxuICAgIGFzeW5jIGNyZWF0ZVNpZ25lZERlcGxveU1lc3NhZ2UoXG4gICAgICAgIHBhcmFtczogVE9OQ29udHJhY3RDcmVhdGVTaWduZWREZXBsb3lNZXNzYWdlUGFyYW1zLFxuICAgICk6IFByb21pc2U8VE9OQ29udHJhY3REZXBsb3lNZXNzYWdlPiB7XG4gICAgICAgIGNvbnN0IG1lc3NhZ2UgPSBhd2FpdCB0aGlzLmNyZWF0ZVNpZ25lZE1lc3NhZ2Uoe1xuICAgICAgICAgICAgYWJpOiBwYXJhbXMudW5zaWduZWRNZXNzYWdlLnNpZ25QYXJhbXMuYWJpLFxuICAgICAgICAgICAgdW5zaWduZWRCeXRlc0Jhc2U2NDogcGFyYW1zLnVuc2lnbmVkTWVzc2FnZS5zaWduUGFyYW1zLnVuc2lnbmVkQnl0ZXNCYXNlNjQsXG4gICAgICAgICAgICBzaWduQnl0ZXNCYXNlNjQ6IHBhcmFtcy5zaWduQnl0ZXNCYXNlNjQsXG4gICAgICAgICAgICBwdWJsaWNLZXlIZXg6IHBhcmFtcy5wdWJsaWNLZXlIZXgsXG4gICAgICAgIH0pO1xuICAgICAgICBtZXNzYWdlLmV4cGlyZSA9IHBhcmFtcy51bnNpZ25lZE1lc3NhZ2Uuc2lnblBhcmFtcy5leHBpcmU7XG4gICAgICAgIHJldHVybiB7XG4gICAgICAgICAgICBhZGRyZXNzOiBwYXJhbXMudW5zaWduZWRNZXNzYWdlLmFkZHJlc3MsXG4gICAgICAgICAgICBtZXNzYWdlLFxuICAgICAgICB9O1xuICAgIH1cblxuXG4gICAgYXN5bmMgY3JlYXRlU2lnbmVkUnVuTWVzc2FnZShcbiAgICAgICAgcGFyYW1zOiBUT05Db250cmFjdENyZWF0ZVNpZ25lZFJ1bk1lc3NhZ2VQYXJhbXMsXG4gICAgKTogUHJvbWlzZTxUT05Db250cmFjdFJ1bk1lc3NhZ2U+IHtcbiAgICAgICAgY29uc3QgbWVzc2FnZSA9IGF3YWl0IHRoaXMuY3JlYXRlU2lnbmVkTWVzc2FnZSh7XG4gICAgICAgICAgICBhYmk6IHBhcmFtcy51bnNpZ25lZE1lc3NhZ2Uuc2lnblBhcmFtcy5hYmksXG4gICAgICAgICAgICB1bnNpZ25lZEJ5dGVzQmFzZTY0OiBwYXJhbXMudW5zaWduZWRNZXNzYWdlLnNpZ25QYXJhbXMudW5zaWduZWRCeXRlc0Jhc2U2NCxcbiAgICAgICAgICAgIHNpZ25CeXRlc0Jhc2U2NDogcGFyYW1zLnNpZ25CeXRlc0Jhc2U2NCxcbiAgICAgICAgICAgIHB1YmxpY0tleUhleDogcGFyYW1zLnB1YmxpY0tleUhleCxcbiAgICAgICAgfSk7XG4gICAgICAgIG1lc3NhZ2UuZXhwaXJlID0gcGFyYW1zLnVuc2lnbmVkTWVzc2FnZS5zaWduUGFyYW1zLmV4cGlyZTtcbiAgICAgICAgcmV0dXJuIHtcbiAgICAgICAgICAgIGFkZHJlc3M6IHBhcmFtcy51bnNpZ25lZE1lc3NhZ2UuYWRkcmVzcyxcbiAgICAgICAgICAgIGFiaTogcGFyYW1zLnVuc2lnbmVkTWVzc2FnZS5zaWduUGFyYW1zLmFiaSxcbiAgICAgICAgICAgIGZ1bmN0aW9uTmFtZTogcGFyYW1zLnVuc2lnbmVkTWVzc2FnZS5mdW5jdGlvbk5hbWUsXG4gICAgICAgICAgICBtZXNzYWdlLFxuICAgICAgICB9O1xuICAgIH1cblxuICAgIGFzeW5jIGdldENvZGVGcm9tSW1hZ2UoXG4gICAgICAgIHBhcmFtczogVE9OQ29udHJhY3RHZXRDb2RlRnJvbUltYWdlUGFyYW1zLFxuICAgICk6IFByb21pc2U8VE9OQ29udHJhY3RHZXRDb2RlRnJvbUltYWdlUmVzdWx0PiB7XG4gICAgICAgIHJldHVybiB0aGlzLnJlcXVlc3RDb3JlKCdjb250cmFjdHMuaW1hZ2UuY29kZScsIHBhcmFtcyk7XG4gICAgfVxuXG4gICAgYXN5bmMgZ2V0RGVwbG95RGF0YShcbiAgICAgICAgcGFyYW1zOiBUT05Db250cmFjdEdldERlcGxveURhdGFQYXJhbXMsXG4gICAgKTogUHJvbWlzZTxUT05Db250cmFjdEdldERlcGxveURhdGFSZXN1bHQ+IHtcbiAgICAgICAgcmV0dXJuIHRoaXMucmVxdWVzdENvcmUoJ2NvbnRyYWN0cy5kZXBsb3kuZGF0YScsIHBhcmFtcyk7XG4gICAgfVxuXG4gICAgYXN5bmMgY3JlYXRlUnVuQm9keShcbiAgICAgICAgcGFyYW1zOiBUT05Db250cmFjdENyZWF0ZVJ1bkJvZHlQYXJhbXMsXG4gICAgKTogUHJvbWlzZTxUT05Db250cmFjdENyZWF0ZVJ1bkJvZHlSZXN1bHQ+IHtcbiAgICAgICAgcmV0dXJuIHRoaXMucmVxdWVzdENvcmUoJ2NvbnRyYWN0cy5ydW4uYm9keScsIHBhcmFtcyk7XG4gICAgfVxuXG4gICAgYXN5bmMgZ2V0RnVuY3Rpb25JZChcbiAgICAgICAgcGFyYW1zOiBUT05Db250cmFjdEdldEZ1bmN0aW9uSWRQYXJhbXMsXG4gICAgKTogUHJvbWlzZTxUT05Db250cmFjdEdldEZ1bmN0aW9uSWRSZXN1bHQ+IHtcbiAgICAgICAgcmV0dXJuIHRoaXMucmVxdWVzdENvcmUoJ2NvbnRyYWN0cy5mdW5jdGlvbi5pZCcsIHBhcmFtcyk7XG4gICAgfVxuXG4gICAgYXN5bmMgZ2V0Qm9jSGFzaChcbiAgICAgICAgcGFyYW1zOiBUT05Db250cmFjdEJvYyxcbiAgICApOiBQcm9taXNlPFRPTkNvbnRyYWN0R2V0Qm9jSGFzaFJlc3VsdD4ge1xuICAgICAgICByZXR1cm4gdGhpcy5yZXF1ZXN0Q29yZSgnY29udHJhY3RzLmJvYy5oYXNoJywgcGFyYW1zKTtcbiAgICB9XG5cbiAgICBhc3luYyBwYXJzZU1lc3NhZ2UoXG4gICAgICAgIHBhcmFtczogVE9OQ29udHJhY3RCb2MsXG4gICAgKTogUHJvbWlzZTxRTWVzc2FnZT4ge1xuICAgICAgICByZXR1cm4gdGhpcy5yZXF1ZXN0Q29yZSgnY29udHJhY3RzLnBhcnNlLm1lc3NhZ2UnLCBwYXJhbXMpO1xuICAgIH1cblxuICAgIC8vIE1lc3NhZ2UgcGFyc2luZ1xuXG4gICAgYXN5bmMgZGVjb2RlUnVuT3V0cHV0KFxuICAgICAgICBwYXJhbXM6IFRPTkNvbnRyYWN0RGVjb2RlUnVuT3V0cHV0UGFyYW1zLFxuICAgICk6IFByb21pc2U8VE9OQ29udHJhY3RSdW5SZXN1bHQ+IHtcbiAgICAgICAgcmV0dXJuIHRoaXMucmVxdWVzdENvcmUoJ2NvbnRyYWN0cy5ydW4ub3V0cHV0JywgcGFyYW1zKTtcbiAgICB9XG5cblxuICAgIGFzeW5jIGRlY29kZUlucHV0TWVzc2FnZUJvZHkoXG4gICAgICAgIHBhcmFtczogVE9OQ29udHJhY3REZWNvZGVNZXNzYWdlQm9keVBhcmFtcyxcbiAgICApOiBQcm9taXNlPFRPTkNvbnRyYWN0RGVjb2RlTWVzc2FnZUJvZHlSZXN1bHQ+IHtcbiAgICAgICAgcmV0dXJuIHRoaXMucmVxdWVzdENvcmUoJ2NvbnRyYWN0cy5ydW4udW5rbm93bi5pbnB1dCcsIHBhcmFtcyk7XG4gICAgfVxuXG5cbiAgICBhc3luYyBkZWNvZGVPdXRwdXRNZXNzYWdlQm9keShcbiAgICAgICAgcGFyYW1zOiBUT05Db250cmFjdERlY29kZU1lc3NhZ2VCb2R5UGFyYW1zLFxuICAgICk6IFByb21pc2U8VE9OQ29udHJhY3REZWNvZGVNZXNzYWdlQm9keVJlc3VsdD4ge1xuICAgICAgICByZXR1cm4gdGhpcy5yZXF1ZXN0Q29yZSgnY29udHJhY3RzLnJ1bi51bmtub3duLm91dHB1dCcsIHBhcmFtcyk7XG4gICAgfVxuXG4gICAgLy8gTWVzc2FnZSBwcm9jZXNzaW5nXG5cbiAgICBhc3luYyBzZW5kTWVzc2FnZShcbiAgICAgICAgcGFyYW1zOiBUT05Db250cmFjdE1lc3NhZ2UsXG4gICAgICAgIHBhcmVudFNwYW4/OiAoU3BhbiB8IFNwYW5Db250ZXh0KSxcbiAgICApOiBQcm9taXNlPHN0cmluZz4ge1xuICAgICAgICBjb25zdCBpZCA9IHBhcmFtcy5tZXNzYWdlSWRcbiAgICAgICAgICAgIHx8IChhd2FpdCB0aGlzLmdldEJvY0hhc2goe1xuICAgICAgICAgICAgICAgIGJvY0Jhc2U2NDogcGFyYW1zLm1lc3NhZ2VCb2R5QmFzZTY0LFxuICAgICAgICAgICAgfSkpLmhhc2g7XG4gICAgICAgIGNvbnN0IGlkQmFzZTY0ID0gQnVmZmVyLmZyb20oaWQsICdoZXgnKVxuICAgICAgICAgICAgLnRvU3RyaW5nKCdiYXNlNjQnKTtcbiAgICAgICAgYXdhaXQgdGhpcy5xdWVyaWVzLnBvc3RSZXF1ZXN0cyhbXG4gICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgaWQ6IGlkQmFzZTY0LFxuICAgICAgICAgICAgICAgIGJvZHk6IHBhcmFtcy5tZXNzYWdlQm9keUJhc2U2NCxcbiAgICAgICAgICAgIH0sXG4gICAgICAgIF0sIHBhcmVudFNwYW4pO1xuICAgICAgICB0aGlzLmNvbmZpZy5sb2coJ3NlbmRNZXNzYWdlLiBSZXF1ZXN0IHBvc3RlZCcpO1xuICAgICAgICByZXR1cm4gaWQ7XG4gICAgfVxuXG4gICAgYXN5bmMgcHJvY2Vzc01lc3NhZ2UoXG4gICAgICAgIG1lc3NhZ2U6IFRPTkNvbnRyYWN0TWVzc2FnZSxcbiAgICAgICAgcmVzdWx0RmllbGRzOiBzdHJpbmcsXG4gICAgICAgIHBhcmVudFNwYW4/OiAoU3BhbiB8IFNwYW5Db250ZXh0KSxcbiAgICAgICAgcmV0cnlJbmRleD86IG51bWJlcixcbiAgICApOiBQcm9taXNlPFFUcmFuc2FjdGlvbj4ge1xuICAgICAgICBjb25zdCBleHBpcmUgPSBtZXNzYWdlLmV4cGlyZTtcbiAgICAgICAgaWYgKGV4cGlyZSAmJiAoRGF0ZS5ub3coKSA+IGV4cGlyZSAqIDEwMDApKSB7XG4gICAgICAgICAgICB0aHJvdyBUT05DbGllbnRFcnJvci5zZW5kTm9kZVJlcXVlc3RGYWlsZWQoJ01lc3NhZ2UgYWxyZWFkeSBleHBpcmVkJyk7XG4gICAgICAgIH1cbiAgICAgICAgY29uc3QgY29uZmlnID0gdGhpcy5jb25maWc7XG4gICAgICAgIGNvbnN0IG1lc3NhZ2VJZCA9IGF3YWl0IHRoaXMuc2VuZE1lc3NhZ2UobWVzc2FnZSwgcGFyZW50U3Bhbik7XG4gICAgICAgIGxldCBwcm9jZXNzaW5nVGltZW91dCA9IGNvbmZpZy5tZXNzYWdlUHJvY2Vzc2luZ1RpbWVvdXQocmV0cnlJbmRleCk7XG4gICAgICAgIGNvbnN0IHByb21pc2VzID0gW107XG4gICAgICAgIGNvbnN0IHNlcnZlckluZm8gPSBhd2FpdCB0aGlzLnF1ZXJpZXMuZ2V0U2VydmVySW5mbyhwYXJlbnRTcGFuKTtcbiAgICAgICAgY29uc3Qgb3BlcmF0aW9uSWQgPSBzZXJ2ZXJJbmZvLnN1cHBvcnRzT3BlcmF0aW9uSWRcbiAgICAgICAgICAgID8gdGhpcy5xdWVyaWVzLmdlbmVyYXRlT3BlcmF0aW9uSWQoKVxuICAgICAgICAgICAgOiB1bmRlZmluZWQ7XG4gICAgICAgIGxldCB0cmFuc2FjdGlvbjogP1FUcmFuc2FjdGlvbiA9IG51bGw7XG4gICAgICAgIGlmIChleHBpcmUpIHtcbiAgICAgICAgICAgIC8vIGNhbGN1bGF0ZSB0aW1lb3V0IGFjY29yZGluZyB0byBgZXhwaXJlYCB2YWx1ZSAoaW4gc2Vjb25kcylcbiAgICAgICAgICAgIC8vIGFkZCBwcm9jZXNzaW5nIHRpbWVvdXQgYXMgbWFzdGVyIGJsb2NrIHZhbGlkYXRpb24gdGltZVxuICAgICAgICAgICAgcHJvY2Vzc2luZ1RpbWVvdXQgPSBleHBpcmUgKiAxMDAwIC0gRGF0ZS5ub3coKSArIHByb2Nlc3NpbmdUaW1lb3V0O1xuXG4gICAgICAgICAgICBjb25zdCB3YWl0RXhwaXJlZCA9IGFzeW5jICgpID0+IHtcbiAgICAgICAgICAgICAgICAvLyB3YWl0IGZvciBibG9jaywgcHJvZHVjZWQgYWZ0ZXIgYGV4cGlyZWAgdG8gZ3VhcmFudGVlIHRoYXQgbWVzc2FnZSBpcyByZWplY3RlZFxuICAgICAgICAgICAgICAgIGNvbnN0IGJsb2NrOiBRQmxvY2sgPSBhd2FpdCB0aGlzLnF1ZXJpZXMuYmxvY2tzLndhaXRGb3Ioe1xuICAgICAgICAgICAgICAgICAgICBmaWx0ZXI6IHtcbiAgICAgICAgICAgICAgICAgICAgICAgIG1hc3RlcjogeyBtaW5fc2hhcmRfZ2VuX3V0aW1lOiB7IGdlOiBleHBpcmUgfSB9LFxuICAgICAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgICAgICByZXN1bHQ6ICdpbl9tc2dfZGVzY3IgeyB0cmFuc2FjdGlvbl9pZCB9JyxcbiAgICAgICAgICAgICAgICAgICAgdGltZW91dDogcHJvY2Vzc2luZ1RpbWVvdXQsXG4gICAgICAgICAgICAgICAgICAgIHBhcmVudFNwYW4sXG4gICAgICAgICAgICAgICAgICAgIG9wZXJhdGlvbklkLFxuICAgICAgICAgICAgICAgIH0pO1xuXG4gICAgICAgICAgICAgICAgaWYgKHRyYW5zYWN0aW9uKSB7XG4gICAgICAgICAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgICAgICAgICB9XG5cbiAgICAgICAgICAgICAgICBjb25zdCB0cmFuc2FjdGlvbl9pZCA9IGJsb2NrLmluX21zZ19kZXNjclxuICAgICAgICAgICAgICAgICAgICAmJiBibG9jay5pbl9tc2dfZGVzY3IuZmluZChtc2cgPT4gISFtc2cudHJhbnNhY3Rpb25faWQpPy50cmFuc2FjdGlvbl9pZDtcblxuICAgICAgICAgICAgICAgIGlmICghdHJhbnNhY3Rpb25faWQpIHtcbiAgICAgICAgICAgICAgICAgICAgdGhyb3cgVE9OQ2xpZW50RXJyb3IuaW50ZXJuYWxFcnJvcignSW52YWxpZCBibG9jayByZWNlaXZlZDogbm8gdHJhbnNhY3Rpb24gSUQnKTtcbiAgICAgICAgICAgICAgICB9XG5cbiAgICAgICAgICAgICAgICAvLyBjaGVjayB0aGF0IHRyYW5zYWN0aW9ucyBjb2xsZWN0aW9uIGlzIHVwZGF0ZWRcbiAgICAgICAgICAgICAgICBhd2FpdCB0aGlzLnF1ZXJpZXMudHJhbnNhY3Rpb25zLndhaXRGb3Ioe1xuICAgICAgICAgICAgICAgICAgICBmaWx0ZXI6IHtcbiAgICAgICAgICAgICAgICAgICAgICAgIGlkOiB7IGVxOiB0cmFuc2FjdGlvbl9pZCB9LFxuICAgICAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgICAgICByZXN1bHQ6ICdpZCcsXG4gICAgICAgICAgICAgICAgICAgIHRpbWVvdXQ6IHByb2Nlc3NpbmdUaW1lb3V0LFxuICAgICAgICAgICAgICAgICAgICBwYXJlbnRTcGFuLFxuICAgICAgICAgICAgICAgICAgICBvcGVyYXRpb25JZCxcbiAgICAgICAgICAgICAgICB9KTtcbiAgICAgICAgICAgIH07XG5cbiAgICAgICAgICAgIHByb21pc2VzLnB1c2god2FpdEV4cGlyZWQoKSk7XG4gICAgICAgIH1cblxuICAgICAgICAvLyB3YWl0IGZvciBtZXNzYWdlIHByb2Nlc3NpbmcgdHJhbnNhY3Rpb25cbiAgICAgICAgcHJvbWlzZXMucHVzaChuZXcgUHJvbWlzZSgocmVzb2x2ZSwgcmVqZWN0KSA9PiB7XG4gICAgICAgICAgICAoYXN5bmMgKCkgPT4ge1xuICAgICAgICAgICAgICAgIHRyeSB7XG4gICAgICAgICAgICAgICAgICAgIHRyYW5zYWN0aW9uID0gYXdhaXQgdGhpcy5xdWVyaWVzLnRyYW5zYWN0aW9ucy53YWl0Rm9yKHtcbiAgICAgICAgICAgICAgICAgICAgICAgIGZpbHRlcjoge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGluX21zZzogeyBlcTogbWVzc2FnZUlkIH0sXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgc3RhdHVzOiB7IGVxOiBRVHJhbnNhY3Rpb25Qcm9jZXNzaW5nU3RhdHVzLmZpbmFsaXplZCB9LFxuICAgICAgICAgICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICAgICAgICAgIHJlc3VsdDogcmVzdWx0RmllbGRzLFxuICAgICAgICAgICAgICAgICAgICAgICAgdGltZW91dDogcHJvY2Vzc2luZ1RpbWVvdXQsXG4gICAgICAgICAgICAgICAgICAgICAgICBvcGVyYXRpb25JZCxcbiAgICAgICAgICAgICAgICAgICAgICAgIHBhcmVudFNwYW4sXG4gICAgICAgICAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgICAgICAgICByZXNvbHZlKCk7XG4gICAgICAgICAgICAgICAgfSBjYXRjaCAoZXJyb3IpIHtcbiAgICAgICAgICAgICAgICAgICAgcmVqZWN0KGVycm9yKTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9KSgpO1xuICAgICAgICB9KSk7XG5cbiAgICAgICAgdHJ5IHtcbiAgICAgICAgICAgIGF3YWl0IFByb21pc2UucmFjZShwcm9taXNlcyk7XG4gICAgICAgIH0gZmluYWxseSB7XG4gICAgICAgICAgICBpZiAocHJvbWlzZXMubGVuZ3RoID4gMSAmJiBvcGVyYXRpb25JZCkge1xuICAgICAgICAgICAgICAgIGF3YWl0IHRoaXMucXVlcmllcy5maW5pc2hPcGVyYXRpb25zKFtvcGVyYXRpb25JZF0pO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG5cbiAgICAgICAgaWYgKCF0cmFuc2FjdGlvbikge1xuICAgICAgICAgICAgdGhyb3cgVE9OQ2xpZW50RXJyb3IubWVzc2FnZUV4cGlyZWQoKTtcbiAgICAgICAgfVxuICAgICAgICBjb25zdCB0cmFuc2FjdGlvbk5vdyA9IHRyYW5zYWN0aW9uLm5vdyB8fCAwO1xuICAgICAgICB0aGlzLmNvbmZpZy5sb2coJ3Byb2Nlc3NNZXNzYWdlLiB0cmFuc2FjdGlvbiByZWNlaXZlZCcsIHtcbiAgICAgICAgICAgIGlkOiB0cmFuc2FjdGlvbi5pZCxcbiAgICAgICAgICAgIGJsb2NrX2lkOiB0cmFuc2FjdGlvbi5ibG9ja19pZCxcbiAgICAgICAgICAgIG5vdzogYCR7bmV3IERhdGUodHJhbnNhY3Rpb25Ob3cgKiAxMDAwKS50b0lTT1N0cmluZygpfSAoJHt0cmFuc2FjdGlvbk5vd30pYCxcbiAgICAgICAgfSk7XG4gICAgICAgIHJldHVybiB0cmFuc2FjdGlvbjtcbiAgICB9XG5cblxuICAgIGFzeW5jIHByb2Nlc3NEZXBsb3lNZXNzYWdlKFxuICAgICAgICBwYXJhbXM6IFRPTkNvbnRyYWN0RGVwbG95TWVzc2FnZSxcbiAgICAgICAgcGFyZW50U3Bhbj86IChTcGFuIHwgU3BhbkNvbnRleHQpLFxuICAgICAgICByZXRyeUluZGV4PzogbnVtYmVyLFxuICAgICk6IFByb21pc2U8VE9OQ29udHJhY3REZXBsb3lSZXN1bHQ+IHtcbiAgICAgICAgdGhpcy5jb25maWcubG9nKCdwcm9jZXNzRGVwbG95TWVzc2FnZScsIHBhcmFtcyk7XG4gICAgICAgIC8vIGNoZWNrIHRoYXQgYWNjb3VudCBpcyBhbHJlYWR5IGRlcGxveWVkXG4gICAgICAgIGNvbnN0IGFjY291bnQgPSBhd2FpdCB0aGlzLnF1ZXJpZXMuYWNjb3VudHMucXVlcnkoe1xuICAgICAgICAgICAgZmlsdGVyOiB7XG4gICAgICAgICAgICAgICAgaWQ6IHsgZXE6IHBhcmFtcy5hZGRyZXNzIH0sXG4gICAgICAgICAgICAgICAgYWNjX3R5cGU6IHsgZXE6IFFBY2NvdW50VHlwZS5hY3RpdmUgfSxcbiAgICAgICAgICAgIH0sXG4gICAgICAgICAgICByZXN1bHQ6ICdpZCcsXG4gICAgICAgICAgICBwYXJlbnRTcGFuLFxuICAgICAgICB9KTtcbiAgICAgICAgaWYgKGFjY291bnQubGVuZ3RoID4gMCkge1xuICAgICAgICAgICAgcmV0dXJuIHtcbiAgICAgICAgICAgICAgICBhZGRyZXNzOiBwYXJhbXMuYWRkcmVzcyxcbiAgICAgICAgICAgICAgICBhbHJlYWR5RGVwbG95ZWQ6IHRydWUsXG4gICAgICAgICAgICB9O1xuICAgICAgICB9XG5cbiAgICAgICAgY29uc3QgdHJhbnNhY3Rpb24gPSBhd2FpdCB0aGlzLnByb2Nlc3NNZXNzYWdlKFxuICAgICAgICAgICAgcGFyYW1zLm1lc3NhZ2UsXG4gICAgICAgICAgICB0cmFuc2FjdGlvbkRldGFpbHMsXG4gICAgICAgICAgICBwYXJlbnRTcGFuLFxuICAgICAgICAgICAgcmV0cnlJbmRleCxcbiAgICAgICAgKTtcbiAgICAgICAgYXdhaXQgY2hlY2tUcmFuc2FjdGlvbih0cmFuc2FjdGlvbik7XG4gICAgICAgIHRoaXMuY29uZmlnLmxvZygncHJvY2Vzc0RlcGxveU1lc3NhZ2UuIEVuZCcpO1xuICAgICAgICByZXR1cm4ge1xuICAgICAgICAgICAgYWRkcmVzczogcGFyYW1zLmFkZHJlc3MsXG4gICAgICAgICAgICBhbHJlYWR5RGVwbG95ZWQ6IGZhbHNlLFxuICAgICAgICAgICAgdHJhbnNhY3Rpb24sXG4gICAgICAgIH07XG4gICAgfVxuXG5cbiAgICBhc3luYyBwcm9jZXNzUnVuTWVzc2FnZShcbiAgICAgICAgcGFyYW1zOiBUT05Db250cmFjdFJ1bk1lc3NhZ2UsXG4gICAgICAgIHBhcmVudFNwYW4/OiAoU3BhbiB8IFNwYW5Db250ZXh0KSxcbiAgICAgICAgcmV0cnlJbmRleD86IG51bWJlcixcbiAgICApOiBQcm9taXNlPFRPTkNvbnRyYWN0UnVuUmVzdWx0PiB7XG4gICAgICAgIHRoaXMuY29uZmlnLmxvZygncHJvY2Vzc1J1bk1lc3NhZ2UnLCBwYXJhbXMpO1xuICAgICAgICBjb25zdCB0cmFuc2FjdGlvbiA9IGF3YWl0IHRoaXMucHJvY2Vzc01lc3NhZ2UoXG4gICAgICAgICAgICBwYXJhbXMubWVzc2FnZSxcbiAgICAgICAgICAgIHRyYW5zYWN0aW9uRGV0YWlscyxcbiAgICAgICAgICAgIHBhcmVudFNwYW4sXG4gICAgICAgICAgICByZXRyeUluZGV4LFxuICAgICAgICApO1xuICAgICAgICBhd2FpdCBjaGVja1RyYW5zYWN0aW9uKHRyYW5zYWN0aW9uKTtcbiAgICAgICAgY29uc3Qgb3V0cHV0TWVzc2FnZXMgPSB0cmFuc2FjdGlvbi5vdXRfbWVzc2FnZXM7XG4gICAgICAgIGlmICghb3V0cHV0TWVzc2FnZXMgfHwgb3V0cHV0TWVzc2FnZXMubGVuZ3RoID09PSAwKSB7XG4gICAgICAgICAgICByZXR1cm4ge1xuICAgICAgICAgICAgICAgIG91dHB1dDogbnVsbCxcbiAgICAgICAgICAgICAgICB0cmFuc2FjdGlvbixcbiAgICAgICAgICAgIH07XG4gICAgICAgIH1cbiAgICAgICAgY29uc3QgZXh0ZXJuYWxNZXNzYWdlczogUU1lc3NhZ2VbXSA9IG91dHB1dE1lc3NhZ2VzLmZpbHRlcigoeDogUU1lc3NhZ2UpID0+IHtcbiAgICAgICAgICAgIHJldHVybiB4Lm1zZ190eXBlID09PSBRTWVzc2FnZVR5cGUuZXh0T3V0O1xuICAgICAgICB9KTtcbiAgICAgICAgdGhpcy5jb25maWcubG9nKCdwcm9jZXNzUnVuTWVzc2FnZS4gQmVmb3JlIG1lc3NhZ2VzIHBhcnNlJyk7XG4gICAgICAgIGNvbnN0IG91dHB1dHMgPSBhd2FpdCBQcm9taXNlLmFsbChleHRlcm5hbE1lc3NhZ2VzLm1hcCgoeDogUU1lc3NhZ2UpID0+IHtcbiAgICAgICAgICAgIHJldHVybiB0aGlzLmRlY29kZU91dHB1dE1lc3NhZ2VCb2R5KHtcbiAgICAgICAgICAgICAgICBhYmk6IHBhcmFtcy5hYmksXG4gICAgICAgICAgICAgICAgYm9keUJhc2U2NDogeC5ib2R5IHx8ICcnLFxuICAgICAgICAgICAgfSk7XG4gICAgICAgIH0pKTtcbiAgICAgICAgY29uc3QgcmVzdWx0T3V0cHV0ID0gb3V0cHV0cy5maW5kKCh4OiBUT05Db250cmFjdERlY29kZU1lc3NhZ2VCb2R5UmVzdWx0KSA9PiB7XG4gICAgICAgICAgICByZXR1cm4geC5mdW5jdGlvbi50b0xvd2VyQ2FzZSgpID09PSBwYXJhbXMuZnVuY3Rpb25OYW1lLnRvTG93ZXJDYXNlKCk7XG4gICAgICAgIH0pO1xuICAgICAgICB0aGlzLmNvbmZpZy5sb2coJ3Byb2Nlc3NSdW5NZXNzYWdlLiBFbmQnKTtcbiAgICAgICAgcmV0dXJuIHtcbiAgICAgICAgICAgIG91dHB1dDogcmVzdWx0T3V0cHV0ID8gcmVzdWx0T3V0cHV0Lm91dHB1dCA6IG51bGwsXG4gICAgICAgICAgICB0cmFuc2FjdGlvbixcbiAgICAgICAgfTtcbiAgICB9XG5cbiAgICBhc3luYyBwcm9jZXNzUnVuTWVzc2FnZUxvY2FsKFxuICAgICAgICBwYXJhbXM6IFRPTkNvbnRyYWN0UnVuTWVzc2FnZSxcbiAgICAgICAgd2FpdFBhcmFtcz86IFRPTkNvbnRyYWN0QWNjb3VudFdhaXRQYXJhbXMsXG4gICAgICAgIHBhcmVudFNwYW4/OiAoU3BhbiB8IFNwYW5Db250ZXh0KSxcbiAgICApOiBQcm9taXNlPFRPTkNvbnRyYWN0UnVuUmVzdWx0PiB7XG4gICAgICAgIHRoaXMuY29uZmlnLmxvZygncHJvY2Vzc1J1bk1lc3NhZ2VMb2NhbCcsIHBhcmFtcyk7XG5cbiAgICAgICAgY29uc3QgYWNjb3VudCA9IGF3YWl0IHRoaXMuZ2V0QWNjb3VudChwYXJhbXMuYWRkcmVzcywgdHJ1ZSwgd2FpdFBhcmFtcywgcGFyZW50U3Bhbik7XG5cbiAgICAgICAgcmV0dXJuIHRoaXMucmVxdWVzdENvcmUoJ2NvbnRyYWN0cy5ydW4ubG9jYWwubXNnJywge1xuICAgICAgICAgICAgYWRkcmVzczogcGFyYW1zLmFkZHJlc3MsXG4gICAgICAgICAgICBhY2NvdW50LFxuICAgICAgICAgICAgYWJpOiBwYXJhbXMuYWJpLFxuICAgICAgICAgICAgZnVuY3Rpb25OYW1lOiBwYXJhbXMuZnVuY3Rpb25OYW1lLFxuICAgICAgICAgICAgbWVzc2FnZUJhc2U2NDogcGFyYW1zLm1lc3NhZ2UubWVzc2FnZUJvZHlCYXNlNjQsXG4gICAgICAgIH0pO1xuICAgIH1cblxuICAgIC8vIEZlZSBjYWxjdWxhdGlvblxuXG4gICAgYmlnQmFsYW5jZSA9ICcweDEwMDAwMDAwMDAwMDAwJztcblxuICAgIGFzeW5jIGNhbGNSdW5GZWVzKFxuICAgICAgICBwYXJhbXM6IFRPTkNvbnRyYWN0Q2FsY1J1bkZlZVBhcmFtcyxcbiAgICAgICAgcGFyZW50U3Bhbj86IChTcGFuIHwgU3BhbkNvbnRleHQpLFxuICAgICk6IFByb21pc2U8VE9OQ29udHJhY3RDYWxjRmVlUmVzdWx0PiB7XG4gICAgICAgIHRoaXMuY29uZmlnLmxvZygnY2FsY1J1bkZlZXMnLCBwYXJhbXMpO1xuXG4gICAgICAgIGNvbnN0IGFjY291bnQgPSBhd2FpdCB0aGlzLmdldEFjY291bnQocGFyYW1zLmFkZHJlc3MsIHRydWUsIHBhcmFtcy53YWl0UGFyYW1zLCBwYXJlbnRTcGFuKTtcblxuICAgICAgICBpZiAocGFyYW1zLmVtdWxhdGVCYWxhbmNlKSB7XG4gICAgICAgICAgICBhY2NvdW50LmJhbGFuY2UgPSB0aGlzLmJpZ0JhbGFuY2U7XG4gICAgICAgIH1cblxuICAgICAgICByZXR1cm4gdGhpcy5yZXF1ZXN0Q29yZSgnY29udHJhY3RzLnJ1bi5mZWUnLCB7XG4gICAgICAgICAgICBhZGRyZXNzOiBwYXJhbXMuYWRkcmVzcyxcbiAgICAgICAgICAgIGFjY291bnQsXG4gICAgICAgICAgICBhYmk6IHBhcmFtcy5hYmksXG4gICAgICAgICAgICBmdW5jdGlvbk5hbWU6IHBhcmFtcy5mdW5jdGlvbk5hbWUsXG4gICAgICAgICAgICBpbnB1dDogcGFyYW1zLmlucHV0LFxuICAgICAgICAgICAga2V5UGFpcjogcGFyYW1zLmtleVBhaXIsXG4gICAgICAgIH0pO1xuICAgIH1cblxuICAgIGFzeW5jIGNhbGNEZXBsb3lGZWVzKFxuICAgICAgICBwYXJhbXM6IFRPTkNvbnRyYWN0Q2FsY0RlcGxveUZlZVBhcmFtcyxcbiAgICAgICAgcGFyZW50U3Bhbj86IChTcGFuIHwgU3BhbkNvbnRleHQpLFxuICAgICk6IFByb21pc2U8VE9OQ29udHJhY3RDYWxjRmVlUmVzdWx0PiB7XG4gICAgICAgIHRoaXMuY29uZmlnLmxvZygnY2FsY0RlcGxveUZlZXMnLCBwYXJhbXMpO1xuXG4gICAgICAgIGNvbnN0IG1lc3NhZ2UgPSBhd2FpdCB0aGlzLmNyZWF0ZURlcGxveU1lc3NhZ2UocGFyYW1zKTtcblxuICAgICAgICByZXR1cm4gdGhpcy5jYWxjTXNnUHJvY2Vzc0ZlZXMoe1xuICAgICAgICAgICAgYWRkcmVzczogbWVzc2FnZS5hZGRyZXNzLFxuICAgICAgICAgICAgbWVzc2FnZTogbWVzc2FnZS5tZXNzYWdlLFxuICAgICAgICAgICAgZW11bGF0ZUJhbGFuY2U6IHBhcmFtcy5lbXVsYXRlQmFsYW5jZSxcbiAgICAgICAgICAgIG5ld0FjY291bnQ6IHBhcmFtcy5uZXdBY2NvdW50LFxuICAgICAgICB9LCBwYXJlbnRTcGFuKTtcbiAgICB9XG5cbiAgICBhc3luYyBjYWxjTXNnUHJvY2Vzc0ZlZXMoXG4gICAgICAgIHBhcmFtczogVE9OQ29udHJhY3RDYWxjTXNnUHJvY2Vzc2luZ0ZlZXNQYXJhbXMsXG4gICAgICAgIHBhcmVudFNwYW4/OiAoU3BhbiB8IFNwYW5Db250ZXh0KSxcbiAgICApOiBQcm9taXNlPFRPTkNvbnRyYWN0Q2FsY0ZlZVJlc3VsdD4ge1xuICAgICAgICB0aGlzLmNvbmZpZy5sb2coJ2NhbGNNc2dQcm9jZXNzRmVlcycsIHBhcmFtcyk7XG5cbiAgICAgICAgbGV0IGFjY291bnQ6IFFBY2NvdW50ID0ge1xuICAgICAgICAgICAgYmFsYW5jZTogdGhpcy5iaWdCYWxhbmNlLFxuICAgICAgICAgICAgaWQ6IHBhcmFtcy5hZGRyZXNzLFxuICAgICAgICAgICAgbGFzdF9wYWlkOiBNYXRoLmZsb29yKERhdGUubm93KCkgLyAxMDAwKSxcbiAgICAgICAgfTtcblxuICAgICAgICBpZiAoIXBhcmFtcy5uZXdBY2NvdW50KSB7XG4gICAgICAgICAgICBhY2NvdW50ID0gYXdhaXQgdGhpcy5nZXRBY2NvdW50KHBhcmFtcy5hZGRyZXNzLCBmYWxzZSwgcGFyYW1zLndhaXRQYXJhbXMsIHBhcmVudFNwYW4pO1xuICAgICAgICB9XG5cbiAgICAgICAgaWYgKHBhcmFtcy5lbXVsYXRlQmFsYW5jZSkge1xuICAgICAgICAgICAgYWNjb3VudC5iYWxhbmNlID0gdGhpcy5iaWdCYWxhbmNlO1xuICAgICAgICB9XG5cbiAgICAgICAgcmV0dXJuIHRoaXMucmVxdWVzdENvcmUoJ2NvbnRyYWN0cy5ydW4uZmVlLm1zZycsIHtcbiAgICAgICAgICAgIGFkZHJlc3M6IHBhcmFtcy5hZGRyZXNzLFxuICAgICAgICAgICAgYWNjb3VudCxcbiAgICAgICAgICAgIG1lc3NhZ2VCYXNlNjQ6IHBhcmFtcy5tZXNzYWdlLm1lc3NhZ2VCb2R5QmFzZTY0LFxuICAgICAgICB9KTtcbiAgICB9XG5cbiAgICAvLyBBZGRyZXNzIHByb2Nlc3NpbmdcblxuICAgIGFzeW5jIGNvbnZlcnRBZGRyZXNzKFxuICAgICAgICBwYXJhbXM6IFRPTkNvbnRyYWN0Q29udmVydEFkZHJlc3NQYXJhbXMsXG4gICAgKTogUHJvbWlzZTxUT05Db250cmFjdENvbnZlcnRBZGRyZXNzUmVzdWx0PiB7XG4gICAgICAgIHJldHVybiB0aGlzLnJlcXVlc3RDb3JlKCdjb250cmFjdHMuYWRkcmVzcy5jb252ZXJ0JywgcGFyYW1zKTtcbiAgICB9XG5cbiAgICAvLyBJbnRlcm5hbHNcblxuICAgIGFzeW5jIGludGVybmFsRGVwbG95TmF0aXZlKHBhcmFtczogVE9OQ29udHJhY3REZXBsb3lQYXJhbXMpOiBQcm9taXNlPFRPTkNvbnRyYWN0RGVwbG95UmVzdWx0PiB7XG4gICAgICAgIHJldHVybiB0aGlzLnJlcXVlc3RDb3JlKCdjb250cmFjdHMuZGVwbG95Jywge1xuICAgICAgICAgICAgYWJpOiBwYXJhbXMucGFja2FnZS5hYmksXG4gICAgICAgICAgICBjb25zdHJ1Y3RvckhlYWRlcjogcGFyYW1zLmNvbnN0cnVjdG9ySGVhZGVyLFxuICAgICAgICAgICAgY29uc3RydWN0b3JQYXJhbXM6IHBhcmFtcy5jb25zdHJ1Y3RvclBhcmFtcyxcbiAgICAgICAgICAgIGluaXRQYXJhbXM6IHBhcmFtcy5pbml0UGFyYW1zLFxuICAgICAgICAgICAgaW1hZ2VCYXNlNjQ6IHBhcmFtcy5wYWNrYWdlLmltYWdlQmFzZTY0LFxuICAgICAgICAgICAga2V5UGFpcjogcGFyYW1zLmtleVBhaXIsXG4gICAgICAgIH0pO1xuICAgIH1cblxuXG4gICAgYXN5bmMgaW50ZXJuYWxSdW5OYXRpdmUocGFyYW1zOiBUT05Db250cmFjdFJ1blBhcmFtcyk6IFByb21pc2U8VE9OQ29udHJhY3RSdW5SZXN1bHQ+IHtcbiAgICAgICAgcmV0dXJuIHRoaXMucmVxdWVzdENvcmUoJ2NvbnRyYWN0cy5ydW4nLCB7XG4gICAgICAgICAgICBhZGRyZXNzOiBwYXJhbXMuYWRkcmVzcyxcbiAgICAgICAgICAgIGFiaTogcGFyYW1zLmFiaSxcbiAgICAgICAgICAgIGZ1bmN0aW9uTmFtZTogcGFyYW1zLmZ1bmN0aW9uTmFtZSxcbiAgICAgICAgICAgIGhlYWRlcjogcGFyYW1zLmhlYWRlcixcbiAgICAgICAgICAgIGlucHV0OiBwYXJhbXMuaW5wdXQsXG4gICAgICAgICAgICBrZXlQYWlyOiBwYXJhbXMua2V5UGFpcixcbiAgICAgICAgfSk7XG4gICAgfVxuXG4gICAgbWFrZUV4cGlyZUhlYWRlcihcbiAgICAgICAgYWJpOiBUT05Db250cmFjdEFCSSxcbiAgICAgICAgdXNlckhlYWRlcj86IGFueSxcbiAgICAgICAgcmV0cnlJbmRleD86IG51bWJlcixcbiAgICApOiBhbnkge1xuICAgICAgICBjb25zdCB0aW1lb3V0ID0gdGhpcy5jb25maWcubWVzc2FnZUV4cGlyYXRpb25UaW1lb3V0KHJldHJ5SW5kZXgpO1xuICAgICAgICBpZiAoYWJpLmhlYWRlciAmJiBhYmkuaGVhZGVyLmluY2x1ZGVzKCdleHBpcmUnKSAmJiAhdXNlckhlYWRlcj8uZXhwaXJlKSB7XG4gICAgICAgICAgICByZXR1cm4ge1xuICAgICAgICAgICAgICAgIC4uLnVzZXJIZWFkZXIsXG4gICAgICAgICAgICAgICAgZXhwaXJlOiBNYXRoLmZsb29yKChEYXRlLm5vdygpICsgdGltZW91dCkgLyAxMDAwKSArIDEsXG4gICAgICAgICAgICB9O1xuICAgICAgICB9XG4gICAgICAgIHJldHVybiB1c2VySGVhZGVyO1xuICAgIH1cblxuICAgIGFzeW5jIHJldHJ5Q2FsbChjYWxsOiAoaW5kZXg6IG51bWJlcikgPT4gUHJvbWlzZTxhbnk+KTogUHJvbWlzZTxhbnk+IHtcbiAgICAgICAgY29uc3QgcmV0cmllc0NvdW50ID0gdGhpcy5jb25maWcubWVzc2FnZVJldHJpZXNDb3VudCgpO1xuICAgICAgICBmb3IgKGxldCBpID0gMDsgaSA8PSByZXRyaWVzQ291bnQ7IGkgKz0gMSkge1xuICAgICAgICAgICAgaWYgKGkgPiAwKSB7XG4gICAgICAgICAgICAgICAgdGhpcy5jb25maWcubG9nKGBSZXRyeSAjJHtpfWApO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgdHJ5IHtcbiAgICAgICAgICAgICAgICByZXR1cm4gYXdhaXQgY2FsbChpKTtcbiAgICAgICAgICAgIH0gY2F0Y2ggKGVycm9yKSB7XG4gICAgICAgICAgICAgICAgaWYgKCFUT05DbGllbnRFcnJvci5pc01lc3NhZ2VFeHBpcmVkKGVycm9yKSkge1xuICAgICAgICAgICAgICAgICAgICB0aHJvdyBlcnJvcjtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgICAgdGhyb3cgVE9OQ2xpZW50RXJyb3IubWVzc2FnZUV4cGlyZWQoKTtcbiAgICB9XG5cbiAgICBhc3luYyBpbnRlcm5hbERlcGxveUpzKFxuICAgICAgICBwYXJhbXM6IFRPTkNvbnRyYWN0RGVwbG95UGFyYW1zLFxuICAgICAgICBwYXJlbnRTcGFuPzogKFNwYW4gfCBTcGFuQ29udGV4dCksXG4gICAgKTogUHJvbWlzZTxUT05Db250cmFjdERlcGxveVJlc3VsdD4ge1xuICAgICAgICB0aGlzLmNvbmZpZy5sb2coJ0RlcGxveSBzdGFydCcpO1xuICAgICAgICByZXR1cm4gdGhpcy5yZXRyeUNhbGwoYXN5bmMgKHJldHJ5SW5kZXgpID0+IHtcbiAgICAgICAgICAgIGNvbnN0IG1lc3NhZ2UgPSBhd2FpdCB0aGlzLmNyZWF0ZURlcGxveU1lc3NhZ2UocGFyYW1zLCByZXRyeUluZGV4KTtcbiAgICAgICAgICAgIHJldHVybiB0aGlzLnByb2Nlc3NEZXBsb3lNZXNzYWdlKG1lc3NhZ2UsIHBhcmVudFNwYW4sIHJldHJ5SW5kZXgpO1xuICAgICAgICB9KTtcbiAgICB9XG5cblxuICAgIGFzeW5jIGludGVybmFsUnVuSnMoXG4gICAgICAgIHBhcmFtczogVE9OQ29udHJhY3RSdW5QYXJhbXMsXG4gICAgICAgIHBhcmVudFNwYW4/OiAoU3BhbiB8IFNwYW5Db250ZXh0KSxcbiAgICApOiBQcm9taXNlPFRPTkNvbnRyYWN0UnVuUmVzdWx0PiB7XG4gICAgICAgIHRoaXMuY29uZmlnLmxvZygnUnVuIHN0YXJ0Jyk7XG4gICAgICAgIHJldHVybiB0aGlzLnJldHJ5Q2FsbChhc3luYyAocmV0cnlJbmRleCkgPT4ge1xuICAgICAgICAgICAgY29uc3QgbWVzc2FnZSA9IGF3YWl0IHRoaXMuY3JlYXRlUnVuTWVzc2FnZShwYXJhbXMsIHJldHJ5SW5kZXgpO1xuICAgICAgICAgICAgcmV0dXJuIHRoaXMucHJvY2Vzc1J1bk1lc3NhZ2UobWVzc2FnZSwgcGFyZW50U3BhbiwgcmV0cnlJbmRleCk7XG4gICAgICAgIH0pO1xuICAgIH1cblxuICAgIGFzeW5jIGdldEFjY291bnQoXG4gICAgICAgIGFkZHJlc3M6IHN0cmluZyxcbiAgICAgICAgYWN0aXZlOiBib29sZWFuLFxuICAgICAgICB3YWl0UGFyYW1zPzogVE9OQ29udHJhY3RBY2NvdW50V2FpdFBhcmFtcyxcbiAgICAgICAgcGFyZW50U3Bhbj86IChTcGFuIHwgU3BhbkNvbnRleHQpLFxuICAgICk6IFByb21pc2U8UUFjY291bnQ+IHtcbiAgICAgICAgZnVuY3Rpb24gcmVtb3ZlVHlwZU5hbWUob2JqOiBhbnkpIHtcbiAgICAgICAgICAgIGlmIChvYmouX190eXBlbmFtZSkge1xuICAgICAgICAgICAgICAgIGRlbGV0ZSBvYmouX190eXBlbmFtZTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIE9iamVjdC52YWx1ZXMob2JqKVxuICAgICAgICAgICAgICAgIC5mb3JFYWNoKCh2YWx1ZSkgPT4ge1xuICAgICAgICAgICAgICAgICAgICBpZiAoISF2YWx1ZSAmJiB0eXBlb2YgdmFsdWUgPT09ICdvYmplY3QnKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICByZW1vdmVUeXBlTmFtZSh2YWx1ZSk7XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICB9KTtcbiAgICAgICAgfVxuXG4gICAgICAgIGNvbnN0IGZpbHRlcjogeyBbc3RyaW5nXTogYW55IH0gPSB7XG4gICAgICAgICAgICBpZDogeyBlcTogYWRkcmVzcyB9LFxuICAgICAgICB9O1xuICAgICAgICBpZiAod2FpdFBhcmFtcyAmJiB3YWl0UGFyYW1zLnRyYW5zYWN0aW9uTHQpIHtcbiAgICAgICAgICAgIGZpbHRlci5sYXN0X3RyYW5zX2x0ID0geyBnZTogd2FpdFBhcmFtcy50cmFuc2FjdGlvbkx0IH07XG4gICAgICAgIH1cbiAgICAgICAgaWYgKGFjdGl2ZSkge1xuICAgICAgICAgICAgZmlsdGVyLmFjY190eXBlID0geyBlcTogUUFjY291bnRUeXBlLmFjdGl2ZSB9O1xuICAgICAgICB9XG5cbiAgICAgICAgdGhpcy5jb25maWcubG9nKCdnZXRBY2NvdW50LiBGaWx0ZXInLCBmaWx0ZXIpO1xuICAgICAgICBjb25zdCBhY2NvdW50ID0gYXdhaXQgdGhpcy5xdWVyaWVzLmFjY291bnRzLndhaXRGb3IoXG4gICAgICAgICAgICBmaWx0ZXIsXG4gICAgICAgICAgICAnaWQgY29kZSBkYXRhIGJhbGFuY2UgYmFsYW5jZV9vdGhlciB7IGN1cnJlbmN5IHZhbHVlIH0gbGFzdF9wYWlkJyxcbiAgICAgICAgICAgIHdhaXRQYXJhbXMgJiYgd2FpdFBhcmFtcy50aW1lb3V0LFxuICAgICAgICAgICAgcGFyZW50U3BhbixcbiAgICAgICAgKTtcblxuICAgICAgICByZW1vdmVUeXBlTmFtZShhY2NvdW50KTtcbiAgICAgICAgdGhpcy5jb25maWcubG9nKCdnZXRBY2NvdW50LiBBY2NvdW50IHJlY2VpdmVkJywgYWNjb3VudCk7XG4gICAgICAgIHJldHVybiBhY2NvdW50O1xuICAgIH1cblxuICAgIGFzeW5jIGludGVybmFsUnVuTG9jYWxKcyhcbiAgICAgICAgcGFyYW1zOiBUT05Db250cmFjdFJ1bkxvY2FsUGFyYW1zLFxuICAgICAgICBwYXJlbnRTcGFuPzogKFNwYW4gfCBTcGFuQ29udGV4dCksXG4gICAgKTogUHJvbWlzZTxUT05Db250cmFjdFJ1blJlc3VsdD4ge1xuICAgICAgICBjb25zdCBhY2NvdW50ID0gYXdhaXQgdGhpcy5nZXRBY2NvdW50KFxuICAgICAgICAgICAgcGFyYW1zLmFkZHJlc3MsXG4gICAgICAgICAgICB0cnVlLFxuICAgICAgICAgICAgcGFyYW1zLndhaXRQYXJhbXMsXG4gICAgICAgICAgICBwYXJlbnRTcGFuLFxuICAgICAgICApO1xuXG4gICAgICAgIHJldHVybiB0aGlzLnJlcXVlc3RDb3JlKCdjb250cmFjdHMucnVuLmxvY2FsJywge1xuICAgICAgICAgICAgYWRkcmVzczogcGFyYW1zLmFkZHJlc3MsXG4gICAgICAgICAgICBhY2NvdW50LFxuICAgICAgICAgICAgYWJpOiBwYXJhbXMuYWJpLFxuICAgICAgICAgICAgZnVuY3Rpb25OYW1lOiBwYXJhbXMuZnVuY3Rpb25OYW1lLFxuICAgICAgICAgICAgaW5wdXQ6IHBhcmFtcy5pbnB1dCxcbiAgICAgICAgICAgIGtleVBhaXI6IHBhcmFtcy5rZXlQYWlyLFxuICAgICAgICB9KTtcbiAgICB9XG59XG5cblRPTkNvbnRyYWN0c01vZHVsZS5tb2R1bGVOYW1lID0gJ1RPTkNvbnRyYWN0c01vZHVsZSc7XG5cbmFzeW5jIGZ1bmN0aW9uIGNoZWNrVHJhbnNhY3Rpb24odHJhbnNhY3Rpb246IFFUcmFuc2FjdGlvbikge1xuICAgIGlmICghdHJhbnNhY3Rpb24uYWJvcnRlZCkge1xuICAgICAgICByZXR1cm47XG4gICAgfVxuXG4gICAgZnVuY3Rpb24gbm9kZUVycm9yKG1lc3NhZ2U6IHN0cmluZywgY29kZTogbnVtYmVyLCBwaGFzZTogc3RyaW5nKSB7XG4gICAgICAgIGNvbnN0IFJFUExBWV9QUk9URUNUSU9OID0gNTI7XG4gICAgICAgIGNvbnN0IE1FU1NBR0VfRVhQSVJFRCA9IDU3O1xuICAgICAgICBjb25zdCBpc05vZGVTRU1lc3NhZ2VFeHBpcmVkID0gcGhhc2UgPT09IFRPTkNsaWVudFRyYW5zYWN0aW9uUGhhc2UuY29tcHV0ZVZtXG4gICAgICAgICAgICAmJiAoY29kZSA9PT0gTUVTU0FHRV9FWFBJUkVEIHx8IGNvZGUgPT09IFJFUExBWV9QUk9URUNUSU9OKTtcbiAgICAgICAgcmV0dXJuIGlzTm9kZVNFTWVzc2FnZUV4cGlyZWRcbiAgICAgICAgICAgID8gVE9OQ2xpZW50RXJyb3IubWVzc2FnZUV4cGlyZWQoKVxuICAgICAgICAgICAgOiBuZXcgVE9OQ2xpZW50RXJyb3IoXG4gICAgICAgICAgICAgICAgYCR7bWVzc2FnZX0gKCR7Y29kZX0pIGF0ICR7cGhhc2V9YCxcbiAgICAgICAgICAgICAgICBjb2RlLFxuICAgICAgICAgICAgICAgIFRPTkNsaWVudEVycm9yLnNvdXJjZS5OT0RFLFxuICAgICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICAgICAgcGhhc2UsXG4gICAgICAgICAgICAgICAgICAgIHRyYW5zYWN0aW9uX2lkOiB0cmFuc2FjdGlvbi5pZCxcbiAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgKTtcbiAgICB9XG5cbiAgICBjb25zdCBzdG9yYWdlID0gdHJhbnNhY3Rpb24uc3RvcmFnZTtcbiAgICBpZiAoc3RvcmFnZSkge1xuICAgICAgICBjb25zdCBzdGF0dXMgPSBzdG9yYWdlLnN0YXR1c19jaGFuZ2U7XG4gICAgICAgIGlmIChzdGF0dXMgPT09IFFBY2NvdW50U3RhdHVzQ2hhbmdlLmZyb3plbikge1xuICAgICAgICAgICAgdGhyb3cgbm9kZUVycm9yKFxuICAgICAgICAgICAgICAgICdBY2NvdW50IHdhcyBmcm96ZW4gZHVlIHN0b3JhZ2UgcGhhc2UnLFxuICAgICAgICAgICAgICAgIFRPTkNsaWVudFN0b3JhZ2VTdGF0dXMuZnJvemVuLFxuICAgICAgICAgICAgICAgIFRPTkNsaWVudFRyYW5zYWN0aW9uUGhhc2Uuc3RvcmFnZSxcbiAgICAgICAgICAgICk7XG4gICAgICAgIH1cbiAgICAgICAgaWYgKHN0YXR1cyA9PT0gUUFjY291bnRTdGF0dXNDaGFuZ2UuZGVsZXRlZCkge1xuICAgICAgICAgICAgdGhyb3cgbm9kZUVycm9yKFxuICAgICAgICAgICAgICAgICdBY2NvdW50IHdhcyBkZWxldGVkIGR1ZSBzdG9yYWdlIHBoYXNlJyxcbiAgICAgICAgICAgICAgICBUT05DbGllbnRTdG9yYWdlU3RhdHVzLmRlbGV0ZWQsXG4gICAgICAgICAgICAgICAgVE9OQ2xpZW50VHJhbnNhY3Rpb25QaGFzZS5zdG9yYWdlLFxuICAgICAgICAgICAgKTtcbiAgICAgICAgfVxuICAgIH1cblxuICAgIGNvbnN0IGNvbXB1dGUgPSB0cmFuc2FjdGlvbi5jb21wdXRlO1xuICAgIGlmIChjb21wdXRlKSB7XG4gICAgICAgIGlmIChjb21wdXRlLmNvbXB1dGVfdHlwZSA9PT0gUUNvbXB1dGVUeXBlLnNraXBwZWQpIHtcbiAgICAgICAgICAgIGNvbnN0IHJlYXNvbiA9IGNvbXB1dGUuc2tpcHBlZF9yZWFzb247XG4gICAgICAgICAgICBpZiAocmVhc29uID09PSBRU2tpcFJlYXNvbi5ub1N0YXRlKSB7XG4gICAgICAgICAgICAgICAgdGhyb3cgbm9kZUVycm9yKFxuICAgICAgICAgICAgICAgICAgICAnQWNjb3VudCBoYXMgbm8gY29kZSBhbmQgZGF0YScsXG4gICAgICAgICAgICAgICAgICAgIFRPTkNsaWVudENvbXB1dGVTa2lwcGVkU3RhdHVzLm5vU3RhdGUsXG4gICAgICAgICAgICAgICAgICAgIFRPTkNsaWVudFRyYW5zYWN0aW9uUGhhc2UuY29tcHV0ZVNraXBwZWQsXG4gICAgICAgICAgICAgICAgKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGlmIChyZWFzb24gPT09IFFTa2lwUmVhc29uLmJhZFN0YXRlKSB7XG4gICAgICAgICAgICAgICAgdGhyb3cgbm9kZUVycm9yKFxuICAgICAgICAgICAgICAgICAgICAnQWNjb3VudCBoYXMgYmFkIHN0YXRlOiBmcm96ZW4gb3IgZGVsZXRlZCcsXG4gICAgICAgICAgICAgICAgICAgIFRPTkNsaWVudENvbXB1dGVTa2lwcGVkU3RhdHVzLmJhZFN0YXRlLFxuICAgICAgICAgICAgICAgICAgICBUT05DbGllbnRUcmFuc2FjdGlvblBoYXNlLmNvbXB1dGVTa2lwcGVkLFxuICAgICAgICAgICAgICAgICk7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBpZiAocmVhc29uID09PSBRU2tpcFJlYXNvbi5ub0dhcykge1xuICAgICAgICAgICAgICAgIHRocm93IG5vZGVFcnJvcihcbiAgICAgICAgICAgICAgICAgICAgJ05vIGdhcyB0byBleGVjdXRlIFZNJyxcbiAgICAgICAgICAgICAgICAgICAgVE9OQ2xpZW50Q29tcHV0ZVNraXBwZWRTdGF0dXMubm9HYXMsXG4gICAgICAgICAgICAgICAgICAgIFRPTkNsaWVudFRyYW5zYWN0aW9uUGhhc2UuY29tcHV0ZVNraXBwZWQsXG4gICAgICAgICAgICAgICAgKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIHRocm93IG5vZGVFcnJvcihcbiAgICAgICAgICAgICAgICAnQ29tcHV0ZSBwaGFzZSBza2lwcGVkIGJ5IHVua25vd24gcmVhc29uJyxcbiAgICAgICAgICAgICAgICAtMSxcbiAgICAgICAgICAgICAgICBUT05DbGllbnRUcmFuc2FjdGlvblBoYXNlLmNvbXB1dGVTa2lwcGVkLFxuICAgICAgICAgICAgKTtcbiAgICAgICAgfVxuICAgICAgICBpZiAoY29tcHV0ZS5jb21wdXRlX3R5cGUgPT09IFFDb21wdXRlVHlwZS52bSkge1xuICAgICAgICAgICAgaWYgKCFjb21wdXRlLnN1Y2Nlc3MpIHtcbiAgICAgICAgICAgICAgICB0aHJvdyBub2RlRXJyb3IoXG4gICAgICAgICAgICAgICAgICAgICdWTSB0ZXJtaW5hdGVkIHdpdGggZXhjZXB0aW9uJyxcbiAgICAgICAgICAgICAgICAgICAgY29tcHV0ZS5leGl0X2NvZGUgfHwgMCxcbiAgICAgICAgICAgICAgICAgICAgVE9OQ2xpZW50VHJhbnNhY3Rpb25QaGFzZS5jb21wdXRlVm0sXG4gICAgICAgICAgICAgICAgKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgIH1cblxuICAgIGNvbnN0IGFjdGlvbiA9IHRyYW5zYWN0aW9uLmFjdGlvbjtcbiAgICBpZiAoYWN0aW9uKSB7XG4gICAgICAgIGlmICghYWN0aW9uLnN1Y2Nlc3MpIHtcbiAgICAgICAgICAgIHRocm93IG5vZGVFcnJvcihcbiAgICAgICAgICAgICAgICBhY3Rpb24ubm9fZnVuZHNcbiAgICAgICAgICAgICAgICAgICAgPyAnVG9vIGxvdyBiYWxhbmNlIHRvIHNlbmQgb3V0Ym91bmQgbWVzc2FnZSdcbiAgICAgICAgICAgICAgICAgICAgOiAoIWFjdGlvbi52YWxpZCA/ICdPdXRib3VuZCBtZXNzYWdlIGlzIGludmFsaWQnIDogJ0FjdGlvbiBwaGFzZSBmYWlsZWQnKSxcbiAgICAgICAgICAgICAgICBhY3Rpb24ucmVzdWx0X2NvZGUgfHwgMCxcbiAgICAgICAgICAgICAgICBUT05DbGllbnRUcmFuc2FjdGlvblBoYXNlLmFjdGlvbixcbiAgICAgICAgICAgICk7XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICB0aHJvdyBub2RlRXJyb3IoXG4gICAgICAgICdUcmFuc2FjdGlvbiBhYm9ydGVkJyxcbiAgICAgICAgLTEsXG4gICAgICAgIFRPTkNsaWVudFRyYW5zYWN0aW9uUGhhc2UudW5rbm93bixcbiAgICApO1xufVxuXG5jb25zdCB0cmFuc2FjdGlvbkRldGFpbHMgPSBgXG4gICAgaWRcbiAgICBpbl9tc2dcbiAgICB0cl90eXBlXG4gICAgc3RhdHVzXG4gICAgaW5fbXNnXG4gICAgb3V0X21zZ3NcbiAgICBibG9ja19pZFxuICAgIG5vd1xuICAgIGFib3J0ZWRcbiAgICBsdFxuICAgIHN0b3JhZ2Uge1xuICAgICAgICBzdGF0dXNfY2hhbmdlXG4gICAgfVxuICAgIGNvbXB1dGUge1xuICAgICAgICBjb21wdXRlX3R5cGVcbiAgICAgICAgc2tpcHBlZF9yZWFzb25cbiAgICAgICAgc3VjY2Vzc1xuICAgICAgICBleGl0X2NvZGVcbiAgICAgICAgZ2FzX2ZlZXNcbiAgICAgICAgZ2FzX3VzZWRcbiAgICB9XG4gICAgYWN0aW9uIHtcbiAgICAgICAgc3VjY2Vzc1xuICAgICAgICB2YWxpZFxuICAgICAgICByZXN1bHRfY29kZVxuICAgICAgICBub19mdW5kc1xuICAgIH1cbiAgICBvdXRfbWVzc2FnZXMge1xuICAgICAgICBpZFxuICAgICAgICBtc2dfdHlwZVxuICAgICAgICBib2R5XG4gICAgfVxuICAgYDtcbiJdfQ==