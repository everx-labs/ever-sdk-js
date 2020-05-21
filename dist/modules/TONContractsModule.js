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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy9tb2R1bGVzL1RPTkNvbnRyYWN0c01vZHVsZS5qcyJdLCJuYW1lcyI6WyJUT05BZGRyZXNzU3RyaW5nVmFyaWFudCIsIkFjY291bnRJZCIsIkhleCIsIkJhc2U2NCIsIlRPTkNsaWVudFRyYW5zYWN0aW9uUGhhc2UiLCJzdG9yYWdlIiwiY29tcHV0ZVNraXBwZWQiLCJjb21wdXRlVm0iLCJhY3Rpb24iLCJ1bmtub3duIiwiVE9OQ2xpZW50Q29tcHV0ZVNraXBwZWRTdGF0dXMiLCJub1N0YXRlIiwiYmFkU3RhdGUiLCJub0dhcyIsIlRPTkNsaWVudFN0b3JhZ2VTdGF0dXMiLCJ1bmNoYW5nZWQiLCJmcm96ZW4iLCJkZWxldGVkIiwiUUluTXNnVHlwZSIsImV4dGVybmFsIiwiaWhyIiwiaW1tZWRpYXRlbHkiLCJ0cmFuc2l0IiwiZGlzY2FyZGVkRmluYWwiLCJkaXNjYXJkZWRUcmFuc2l0IiwiUU91dE1zZ1R5cGUiLCJvdXRNc2dOZXciLCJkZXF1ZXVlSW1tZWRpYXRlbHkiLCJkZXF1ZXVlIiwidHJhbnNpdFJlcXVpcmVkIiwibm9uZSIsIlFNZXNzYWdlVHlwZSIsImludGVybmFsIiwiZXh0SW4iLCJleHRPdXQiLCJRTWVzc2FnZVByb2Nlc3NpbmdTdGF0dXMiLCJxdWV1ZWQiLCJwcm9jZXNzaW5nIiwicHJlbGltaW5hcnkiLCJwcm9wb3NlZCIsImZpbmFsaXplZCIsInJlZnVzZWQiLCJ0cmFuc2l0aW5nIiwiUUJsb2NrUHJvY2Vzc2luZ1N0YXR1cyIsIlFTcGxpdFR5cGUiLCJzcGxpdCIsIm1lcmdlIiwiUUFjY291bnRUeXBlIiwidW5pbml0IiwiYWN0aXZlIiwiUVRyYW5zYWN0aW9uVHlwZSIsIm9yZGluYXJ5IiwidGljayIsInRvY2siLCJzcGxpdFByZXBhcmUiLCJzcGxpdEluc3RhbGwiLCJtZXJnZVByZXBhcmUiLCJtZXJnZUluc3RhbGwiLCJRVHJhbnNhY3Rpb25Qcm9jZXNzaW5nU3RhdHVzIiwiUUFjY291bnRTdGF0dXMiLCJub25FeGlzdCIsIlFBY2NvdW50U3RhdHVzQ2hhbmdlIiwiUUNvbXB1dGVUeXBlIiwic2tpcHBlZCIsInZtIiwiUVNraXBSZWFzb24iLCJRQm91bmNlVHlwZSIsIm5lZ0Z1bmRzIiwibm9GdW5kcyIsIm9rIiwicmVtb3ZlUHJvcHMiLCJvYmoiLCJwYXRocyIsInJlc3VsdCIsImZvckVhY2giLCJwYXRoIiwiZG90UG9zIiwiaW5kZXhPZiIsIm5hbWUiLCJzdWJzdHIiLCJjaGlsZCIsInJlZHVjZWRDaGlsZCIsIlRPTkNvbnRyYWN0c01vZHVsZSIsImNvbmZpZyIsImNvbnRleHQiLCJnZXRNb2R1bGUiLCJUT05Db25maWdNb2R1bGUiLCJxdWVyaWVzIiwiVE9OUXVlcmllc01vZHVsZSIsInBhcmFtcyIsInBhcmVudFNwYW4iLCJhY2NvdW50cyIsInF1ZXJ5IiwiaWQiLCJlcSIsImFkZHJlc3MiLCJ1bmRlZmluZWQiLCJsZW5ndGgiLCJiYWxhbmNlR3JhbXMiLCJiYWxhbmNlIiwidHJhY2UiLCJzcGFuIiwic2V0VGFnIiwiaW50ZXJuYWxEZXBsb3lKcyIsImludGVybmFsUnVuSnMiLCJpbnRlcm5hbFJ1bkxvY2FsSnMiLCJjb3JlUGFyYW1zIiwiY29kZUJhc2U2NCIsImRhdGFCYXNlNjQiLCJUT05DbGllbnRFcnJvciIsImFkZHJlc3NSZXF1aXJlZEZvclJ1bkxvY2FsIiwiZ2V0QWNjb3VudCIsImFjY291bnQiLCJjb2RlIiwiZGF0YSIsInJlcXVlc3RDb3JlIiwiY29ucyIsIml0ZW0iLCJpbnZhbGlkQ29ucyIsInB1c2giLCJyZXRyeUluZGV4IiwibG9nIiwiY29uc3RydWN0b3JIZWFkZXIiLCJtYWtlRXhwaXJlSGVhZGVyIiwiYWJpIiwiY29uc3RydWN0b3JQYXJhbXMiLCJpbml0UGFyYW1zIiwiaW1hZ2VCYXNlNjQiLCJrZXlQYWlyIiwid29ya2NoYWluSWQiLCJtZXNzYWdlIiwibWVzc2FnZUlkIiwibWVzc2FnZUJvZHlCYXNlNjQiLCJleHBpcmUiLCJoZWFkZXIiLCJmdW5jdGlvbk5hbWUiLCJpbnB1dCIsInB1YmxpY0tleUhleCIsImFkZHJlc3NIZXgiLCJzaWduUGFyYW1zIiwiZW5jb2RlZCIsImNyZWF0ZVNpZ25lZE1lc3NhZ2UiLCJ1bnNpZ25lZE1lc3NhZ2UiLCJ1bnNpZ25lZEJ5dGVzQmFzZTY0Iiwic2lnbkJ5dGVzQmFzZTY0IiwiZ2V0Qm9jSGFzaCIsImJvY0Jhc2U2NCIsImhhc2giLCJEYXRlIiwibm93Iiwic2VuZE5vZGVSZXF1ZXN0RmFpbGVkIiwiTWF0aCIsInNlcnZlclRpbWVEZWx0YSIsImFicyIsIm91dE9mU3luY1RocmVzaG9sZCIsImRyb3BTZXJ2ZXJUaW1lRGVsdGEiLCJjbG9ja091dE9mU3luYyIsImdldE1lc3NhZ2VJZCIsImlkQmFzZTY0IiwiQnVmZmVyIiwiZnJvbSIsInRvU3RyaW5nIiwicG9zdFJlcXVlc3RzIiwiYm9keSIsInJlc3VsdEZpZWxkcyIsInNlbmRNZXNzYWdlIiwid2FpdEZvclRyYW5zYWN0aW9uIiwicHJvY2Vzc2luZ1RpbWVvdXQiLCJtZXNzYWdlUHJvY2Vzc2luZ1RpbWVvdXQiLCJwcm9taXNlcyIsImdldFNlcnZlckluZm8iLCJzZXJ2ZXJJbmZvIiwib3BlcmF0aW9uSWQiLCJzdXBwb3J0c09wZXJhdGlvbklkIiwiZ2VuZXJhdGVPcGVyYXRpb25JZCIsInRyYW5zYWN0aW9uIiwid2FpdEV4cGlyZWQiLCJibG9ja3MiLCJ3YWl0Rm9yIiwiZmlsdGVyIiwibWFzdGVyIiwibWluX3NoYXJkX2dlbl91dGltZSIsImdlIiwidGltZW91dCIsImJsb2NrIiwidHJhbnNhY3Rpb25faWQiLCJpbl9tc2dfZGVzY3IiLCJmaW5kIiwibXNnIiwiaW50ZXJuYWxFcnJvciIsInRyYW5zYWN0aW9ucyIsIlByb21pc2UiLCJyZXNvbHZlIiwicmVqZWN0IiwiaW5fbXNnIiwic3RhdHVzIiwicmFjZSIsImZpbmlzaE9wZXJhdGlvbnMiLCJtZXNzYWdlRXhwaXJlZCIsInRyYW5zYWN0aW9uTm93IiwiYmxvY2tfaWQiLCJ0b0lTT1N0cmluZyIsImFjY190eXBlIiwiaXNEZXBsb3llZCIsImFscmVhZHlEZXBsb3llZCIsIndhaXRGb3JEZXBsb3lUcmFuc2FjdGlvbiIsImRlcGxveU1lc3NhZ2UiLCJ0cmFuc2FjdGlvbkRldGFpbHMiLCJjaGVja1RyYW5zYWN0aW9uIiwicnVuTWVzc2FnZSIsIndhaXRGb3JSdW5UcmFuc2FjdGlvbiIsIm91dHB1dE1lc3NhZ2VzIiwib3V0X21lc3NhZ2VzIiwib3V0cHV0IiwiZXh0ZXJuYWxNZXNzYWdlcyIsIngiLCJtc2dfdHlwZSIsImFsbCIsIm1hcCIsImRlY29kZU91dHB1dE1lc3NhZ2VCb2R5IiwiYm9keUJhc2U2NCIsIm91dHB1dHMiLCJyZXN1bHRPdXRwdXQiLCJ0b0xvd2VyQ2FzZSIsIndhaXRQYXJhbXMiLCJtZXNzYWdlQmFzZTY0IiwiZW11bGF0ZUJhbGFuY2UiLCJiaWdCYWxhbmNlIiwiY3JlYXRlRGVwbG95TWVzc2FnZSIsImNhbGNNc2dQcm9jZXNzRmVlcyIsIm5ld0FjY291bnQiLCJsYXN0X3BhaWQiLCJmbG9vciIsInVzZXJIZWFkZXIiLCJtZXNzYWdlRXhwaXJhdGlvblRpbWVvdXQiLCJpbmNsdWRlcyIsImNhbGwiLCJyZXRyaWVzQ291bnQiLCJtZXNzYWdlUmV0cmllc0NvdW50IiwiaSIsImlzTWVzc2FnZUV4cGlyZWQiLCJyZXRyeUNhbGwiLCJjcmVhdGVSdW5NZXNzYWdlIiwicmVtb3ZlVHlwZU5hbWUiLCJfX3R5cGVuYW1lIiwiT2JqZWN0IiwidmFsdWVzIiwidmFsdWUiLCJ0cmFuc2FjdGlvbkx0IiwibGFzdF90cmFuc19sdCIsIlRPTk1vZHVsZSIsIm1vZHVsZU5hbWUiLCJub2RlRXJyb3IiLCJwaGFzZSIsIlJFUExBWV9QUk9URUNUSU9OIiwiTUVTU0FHRV9FWFBJUkVEIiwiaXNOb2RlU0VNZXNzYWdlRXhwaXJlZCIsInNvdXJjZSIsIk5PREUiLCJhYm9ydGVkIiwic3RhdHVzX2NoYW5nZSIsImNvbXB1dGUiLCJjb21wdXRlX3R5cGUiLCJyZWFzb24iLCJza2lwcGVkX3JlYXNvbiIsInN1Y2Nlc3MiLCJleGl0X2NvZGUi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QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLEc7Ozs7QUF3R0EsSUFBTXNNLGtCQUFrQix5ZEFBeEIiLCJzb3VyY2VzQ29udGVudCI6WyIvKlxuICogQ29weXJpZ2h0IDIwMTgtMjAyMCBUT04gREVWIFNPTFVUSU9OUyBMVEQuXG4gKlxuICogTGljZW5zZWQgdW5kZXIgdGhlIFNPRlRXQVJFIEVWQUxVQVRJT04gTGljZW5zZSAodGhlIFwiTGljZW5zZVwiKTsgeW91IG1heSBub3QgdXNlXG4gKiB0aGlzIGZpbGUgZXhjZXB0IGluIGNvbXBsaWFuY2Ugd2l0aCB0aGUgTGljZW5zZS4gIFlvdSBtYXkgb2J0YWluIGEgY29weSBvZiB0aGVcbiAqIExpY2Vuc2UgYXQ6XG4gKlxuICogaHR0cDovL3d3dy50b24uZGV2L2xpY2Vuc2VzXG4gKlxuICogVW5sZXNzIHJlcXVpcmVkIGJ5IGFwcGxpY2FibGUgbGF3IG9yIGFncmVlZCB0byBpbiB3cml0aW5nLCBzb2Z0d2FyZVxuICogZGlzdHJpYnV0ZWQgdW5kZXIgdGhlIExpY2Vuc2UgaXMgZGlzdHJpYnV0ZWQgb24gYW4gXCJBUyBJU1wiIEJBU0lTLFxuICogV0lUSE9VVCBXQVJSQU5USUVTIE9SIENPTkRJVElPTlMgT0YgQU5ZIEtJTkQsIGVpdGhlciBleHByZXNzIG9yIGltcGxpZWQuXG4gKiBTZWUgdGhlIExpY2Vuc2UgZm9yIHRoZSBzcGVjaWZpYyBUT04gREVWIHNvZnR3YXJlIGdvdmVybmluZyBwZXJtaXNzaW9ucyBhbmRcbiAqIGxpbWl0YXRpb25zIHVuZGVyIHRoZSBMaWNlbnNlLlxuICovXG4vLyBAZmxvd1xuXG5pbXBvcnQgeyBTcGFuLCBTcGFuQ29udGV4dCB9IGZyb20gJ29wZW50cmFjaW5nJztcbmltcG9ydCB0eXBlIHtcbiAgICBRQWNjb3VudCxcbiAgICBRQmxvY2ssXG4gICAgUU1lc3NhZ2UsXG4gICAgUVRyYW5zYWN0aW9uLFxuICAgIFRPTkNvbnRyYWN0QUJJLFxuICAgIFRPTkNvbnRyYWN0QWNjb3VudFdhaXRQYXJhbXMsXG4gICAgVE9OQ29udHJhY3RDb252ZXJ0QWRkcmVzc1BhcmFtcyxcbiAgICBUT05Db250cmFjdENvbnZlcnRBZGRyZXNzUmVzdWx0LFxuICAgIFRPTkNvbnRyYWN0Q3JlYXRlUnVuQm9keVBhcmFtcyxcbiAgICBUT05Db250cmFjdENyZWF0ZVJ1bkJvZHlSZXN1bHQsXG4gICAgVE9OQ29udHJhY3RDcmVhdGVTaWduZWREZXBsb3lNZXNzYWdlUGFyYW1zLFxuICAgIFRPTkNvbnRyYWN0Q3JlYXRlU2lnbmVkTWVzc2FnZVBhcmFtcyxcbiAgICBUT05Db250cmFjdENyZWF0ZVNpZ25lZFJ1bk1lc3NhZ2VQYXJhbXMsXG4gICAgVE9OQ29udHJhY3REZWNvZGVNZXNzYWdlQm9keVBhcmFtcyxcbiAgICBUT05Db250cmFjdERlY29kZU1lc3NhZ2VCb2R5UmVzdWx0LFxuICAgIFRPTkNvbnRyYWN0RGVjb2RlUnVuT3V0cHV0UGFyYW1zLFxuICAgIFRPTkNvbnRyYWN0RGVwbG95TWVzc2FnZSxcbiAgICBUT05Db250cmFjdERlcGxveVBhcmFtcyxcbiAgICBUT05Db250cmFjdERlcGxveVJlc3VsdCxcbiAgICBUT05Db250cmFjdENhbGNEZXBsb3lGZWVQYXJhbXMsXG4gICAgVE9OQ29udHJhY3RCb2MsXG4gICAgVE9OQ29udHJhY3RHZXRCb2NIYXNoUmVzdWx0LFxuICAgIFRPTkNvbnRyYWN0R2V0Q29kZUZyb21JbWFnZVBhcmFtcyxcbiAgICBUT05Db250cmFjdEdldENvZGVGcm9tSW1hZ2VSZXN1bHQsXG4gICAgVE9OQ29udHJhY3RHZXREZXBsb3lEYXRhUGFyYW1zLFxuICAgIFRPTkNvbnRyYWN0R2V0RGVwbG95RGF0YVJlc3VsdCxcbiAgICBUT05Db250cmFjdEdldEZ1bmN0aW9uSWRQYXJhbXMsXG4gICAgVE9OQ29udHJhY3RHZXRGdW5jdGlvbklkUmVzdWx0LFxuICAgIFRPTkNvbnRyYWN0TG9hZFBhcmFtcyxcbiAgICBUT05Db250cmFjdExvYWRSZXN1bHQsXG4gICAgVE9OQ29udHJhY3RDYWxjUnVuRmVlUGFyYW1zLFxuICAgIFRPTkNvbnRyYWN0VHJhbnNhY3Rpb25GZWVzLFxuICAgIFRPTkNvbnRyYWN0Q2FsY0ZlZVJlc3VsdCxcbiAgICBUT05Db250cmFjdENhbGNNc2dQcm9jZXNzaW5nRmVlc1BhcmFtcyxcbiAgICBUT05Db250cmFjdE1lc3NhZ2UsXG4gICAgVE9OQ29udHJhY3RSdW5Mb2NhbFBhcmFtcyxcbiAgICBUT05Db250cmFjdFJ1bk1lc3NhZ2UsXG4gICAgVE9OQ29udHJhY3RSdW5QYXJhbXMsXG4gICAgVE9OQ29udHJhY3RSdW5SZXN1bHQsXG4gICAgVE9OQ29udHJhY3RzLFxuICAgIFRPTkNvbnRyYWN0VW5zaWduZWREZXBsb3lNZXNzYWdlLFxuICAgIFRPTkNvbnRyYWN0VW5zaWduZWRNZXNzYWdlLFxuICAgIFRPTkNvbnRyYWN0VW5zaWduZWRSdW5NZXNzYWdlLFxuICAgIFRPTkNvbnRyYWN0UnVuR2V0UGFyYW1zLFxuICAgIFRPTkNvbnRyYWN0UnVuR2V0UmVzdWx0LFxufSBmcm9tICcuLi8uLi90eXBlcyc7XG5pbXBvcnQgeyBUT05DbGllbnRFcnJvciB9IGZyb20gJy4uL1RPTkNsaWVudCc7XG5pbXBvcnQgeyBUT05Nb2R1bGUgfSBmcm9tICcuLi9UT05Nb2R1bGUnO1xuaW1wb3J0IFRPTkNvbmZpZ01vZHVsZSBmcm9tICcuL1RPTkNvbmZpZ01vZHVsZSc7XG5pbXBvcnQgVE9OUXVlcmllc01vZHVsZSBmcm9tICcuL1RPTlF1ZXJpZXNNb2R1bGUnO1xuXG5leHBvcnQgY29uc3QgVE9OQWRkcmVzc1N0cmluZ1ZhcmlhbnQgPSB7XG4gICAgQWNjb3VudElkOiAnQWNjb3VudElkJyxcbiAgICBIZXg6ICdIZXgnLFxuICAgIEJhc2U2NDogJ0Jhc2U2NCcsXG59O1xuXG5leHBvcnQgY29uc3QgVE9OQ2xpZW50VHJhbnNhY3Rpb25QaGFzZSA9IHtcbiAgICBzdG9yYWdlOiAnc3RvcmFnZScsXG4gICAgY29tcHV0ZVNraXBwZWQ6ICdjb21wdXRlU2tpcHBlZCcsXG4gICAgY29tcHV0ZVZtOiAnY29tcHV0ZVZtJyxcbiAgICBhY3Rpb246ICdhY3Rpb24nLFxuICAgIHVua25vd246ICd1bmtub3duJyxcbn07XG5cbmV4cG9ydCBjb25zdCBUT05DbGllbnRDb21wdXRlU2tpcHBlZFN0YXR1cyA9IHtcbiAgICBub1N0YXRlOiAwLFxuICAgIGJhZFN0YXRlOiAxLFxuICAgIG5vR2FzOiAyLFxufTtcblxuZXhwb3J0IGNvbnN0IFRPTkNsaWVudFN0b3JhZ2VTdGF0dXMgPSB7XG4gICAgdW5jaGFuZ2VkOiAwLFxuICAgIGZyb3plbjogMSxcbiAgICBkZWxldGVkOiAyLFxufTtcblxuZXhwb3J0IGNvbnN0IFFJbk1zZ1R5cGUgPSB7XG4gICAgZXh0ZXJuYWw6IDAsXG4gICAgaWhyOiAxLFxuICAgIGltbWVkaWF0ZWx5OiAyLFxuICAgIGZpbmFsOiAzLFxuICAgIHRyYW5zaXQ6IDQsXG4gICAgZGlzY2FyZGVkRmluYWw6IDUsXG4gICAgZGlzY2FyZGVkVHJhbnNpdDogNixcbn07XG5cbmV4cG9ydCBjb25zdCBRT3V0TXNnVHlwZSA9IHtcbiAgICBleHRlcm5hbDogMCxcbiAgICBpbW1lZGlhdGVseTogMSxcbiAgICBvdXRNc2dOZXc6IDIsXG4gICAgdHJhbnNpdDogMyxcbiAgICBkZXF1ZXVlSW1tZWRpYXRlbHk6IDQsXG4gICAgZGVxdWV1ZTogNSxcbiAgICB0cmFuc2l0UmVxdWlyZWQ6IDYsXG4gICAgbm9uZTogLTEsXG59O1xuXG5leHBvcnQgY29uc3QgUU1lc3NhZ2VUeXBlID0ge1xuICAgIGludGVybmFsOiAwLFxuICAgIGV4dEluOiAxLFxuICAgIGV4dE91dDogMixcbn07XG5cbmV4cG9ydCBjb25zdCBRTWVzc2FnZVByb2Nlc3NpbmdTdGF0dXMgPSB7XG4gICAgdW5rbm93bjogMCxcbiAgICBxdWV1ZWQ6IDEsXG4gICAgcHJvY2Vzc2luZzogMixcbiAgICBwcmVsaW1pbmFyeTogMyxcbiAgICBwcm9wb3NlZDogNCxcbiAgICBmaW5hbGl6ZWQ6IDUsXG4gICAgcmVmdXNlZDogNixcbiAgICB0cmFuc2l0aW5nOiA3LFxufTtcblxuZXhwb3J0IGNvbnN0IFFCbG9ja1Byb2Nlc3NpbmdTdGF0dXMgPSB7XG4gICAgdW5rbm93bjogMCxcbiAgICBwcm9wb3NlZDogMSxcbiAgICBmaW5hbGl6ZWQ6IDIsXG4gICAgcmVmdXNlZDogMyxcbn07XG5cbmV4cG9ydCBjb25zdCBRU3BsaXRUeXBlID0ge1xuICAgIG5vbmU6IDAsXG4gICAgc3BsaXQ6IDIsXG4gICAgbWVyZ2U6IDMsXG59O1xuXG5leHBvcnQgY29uc3QgUUFjY291bnRUeXBlID0ge1xuICAgIHVuaW5pdDogMCxcbiAgICBhY3RpdmU6IDEsXG4gICAgZnJvemVuOiAyLFxufTtcblxuZXhwb3J0IGNvbnN0IFFUcmFuc2FjdGlvblR5cGUgPSB7XG4gICAgb3JkaW5hcnk6IDAsXG4gICAgc3RvcmFnZTogMSxcbiAgICB0aWNrOiAyLFxuICAgIHRvY2s6IDMsXG4gICAgc3BsaXRQcmVwYXJlOiA0LFxuICAgIHNwbGl0SW5zdGFsbDogNSxcbiAgICBtZXJnZVByZXBhcmU6IDYsXG4gICAgbWVyZ2VJbnN0YWxsOiA3LFxufTtcblxuZXhwb3J0IGNvbnN0IFFUcmFuc2FjdGlvblByb2Nlc3NpbmdTdGF0dXMgPSB7XG4gICAgdW5rbm93bjogMCxcbiAgICBwcmVsaW1pbmFyeTogMSxcbiAgICBwcm9wb3NlZDogMixcbiAgICBmaW5hbGl6ZWQ6IDMsXG4gICAgcmVmdXNlZDogNCxcbn07XG5cbmV4cG9ydCBjb25zdCBRQWNjb3VudFN0YXR1cyA9IHtcbiAgICB1bmluaXQ6IDAsXG4gICAgYWN0aXZlOiAxLFxuICAgIGZyb3plbjogMixcbiAgICBub25FeGlzdDogMyxcbn07XG5cbmV4cG9ydCBjb25zdCBRQWNjb3VudFN0YXR1c0NoYW5nZSA9IHtcbiAgICB1bmNoYW5nZWQ6IDAsXG4gICAgZnJvemVuOiAxLFxuICAgIGRlbGV0ZWQ6IDIsXG59O1xuXG5leHBvcnQgY29uc3QgUUNvbXB1dGVUeXBlID0ge1xuICAgIHNraXBwZWQ6IDAsXG4gICAgdm06IDEsXG59O1xuXG5leHBvcnQgY29uc3QgUVNraXBSZWFzb24gPSB7XG4gICAgbm9TdGF0ZTogMCxcbiAgICBiYWRTdGF0ZTogMSxcbiAgICBub0dhczogMixcbn07XG5cbmV4cG9ydCBjb25zdCBRQm91bmNlVHlwZSA9IHtcbiAgICBuZWdGdW5kczogMCxcbiAgICBub0Z1bmRzOiAxLFxuICAgIG9rOiAyLFxufTtcblxuZXhwb3J0IGZ1bmN0aW9uIHJlbW92ZVByb3BzKG9iajoge30sIHBhdGhzOiBzdHJpbmdbXSk6IHt9IHtcbiAgICBsZXQgcmVzdWx0ID0gb2JqO1xuICAgIHBhdGhzLmZvckVhY2goKHBhdGgpID0+IHtcbiAgICAgICAgY29uc3QgZG90UG9zID0gcGF0aC5pbmRleE9mKCcuJyk7XG4gICAgICAgIGlmIChkb3RQb3MgPCAwKSB7XG4gICAgICAgICAgICBpZiAocGF0aCBpbiByZXN1bHQpIHtcbiAgICAgICAgICAgICAgICByZXN1bHQgPSB7IC4uLnJlc3VsdCB9O1xuICAgICAgICAgICAgICAgIGRlbGV0ZSByZXN1bHRbcGF0aF07XG4gICAgICAgICAgICB9XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICBjb25zdCBuYW1lID0gcGF0aC5zdWJzdHIoMCwgZG90UG9zKTtcbiAgICAgICAgICAgIGNvbnN0IGNoaWxkID0gcmVzdWx0W25hbWVdO1xuICAgICAgICAgICAgaWYgKGNoaWxkKSB7XG4gICAgICAgICAgICAgICAgY29uc3QgcmVkdWNlZENoaWxkID0gcmVtb3ZlUHJvcHMoY2hpbGQsIFtwYXRoLnN1YnN0cihkb3RQb3MgKyAxKV0pO1xuICAgICAgICAgICAgICAgIGlmIChyZWR1Y2VkQ2hpbGQgIT09IGNoaWxkKSB7XG4gICAgICAgICAgICAgICAgICAgIHJlc3VsdCA9IHtcbiAgICAgICAgICAgICAgICAgICAgICAgIC4uLnJlc3VsdCxcbiAgICAgICAgICAgICAgICAgICAgICAgIFtuYW1lXTogcmVkdWNlZENoaWxkLFxuICAgICAgICAgICAgICAgICAgICB9O1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgIH0pO1xuICAgIHJldHVybiByZXN1bHQ7XG59XG5cbmV4cG9ydCBkZWZhdWx0IGNsYXNzIFRPTkNvbnRyYWN0c01vZHVsZSBleHRlbmRzIFRPTk1vZHVsZSBpbXBsZW1lbnRzIFRPTkNvbnRyYWN0cyB7XG4gICAgY29uZmlnOiBUT05Db25maWdNb2R1bGU7XG5cbiAgICBxdWVyaWVzOiBUT05RdWVyaWVzTW9kdWxlO1xuXG4gICAgYXN5bmMgc2V0dXAoKTogUHJvbWlzZTwqPiB7XG4gICAgICAgIHRoaXMuY29uZmlnID0gdGhpcy5jb250ZXh0LmdldE1vZHVsZShUT05Db25maWdNb2R1bGUpO1xuICAgICAgICB0aGlzLnF1ZXJpZXMgPSB0aGlzLmNvbnRleHQuZ2V0TW9kdWxlKFRPTlF1ZXJpZXNNb2R1bGUpO1xuICAgIH1cblxuICAgIGFzeW5jIGxvYWQoXG4gICAgICAgIHBhcmFtczogVE9OQ29udHJhY3RMb2FkUGFyYW1zLFxuICAgICAgICBwYXJlbnRTcGFuPzogKFNwYW4gfCBTcGFuQ29udGV4dCksXG4gICAgKTogUHJvbWlzZTxUT05Db250cmFjdExvYWRSZXN1bHQ+IHtcbiAgICAgICAgY29uc3QgYWNjb3VudHM6IFFBY2NvdW50W10gPSBhd2FpdCB0aGlzLnF1ZXJpZXMuYWNjb3VudHMucXVlcnkoe1xuICAgICAgICAgICAgaWQ6IHsgZXE6IHBhcmFtcy5hZGRyZXNzIH0sXG4gICAgICAgIH0sICdiYWxhbmNlJywgdW5kZWZpbmVkLCB1bmRlZmluZWQsIHVuZGVmaW5lZCwgcGFyZW50U3Bhbik7XG4gICAgICAgIGlmIChhY2NvdW50cyAmJiBhY2NvdW50cy5sZW5ndGggPiAwKSB7XG4gICAgICAgICAgICByZXR1cm4ge1xuICAgICAgICAgICAgICAgIGlkOiBwYXJhbXMuYWRkcmVzcyxcbiAgICAgICAgICAgICAgICBiYWxhbmNlR3JhbXM6IGFjY291bnRzWzBdLmJhbGFuY2UsXG4gICAgICAgICAgICB9O1xuICAgICAgICB9XG4gICAgICAgIHJldHVybiB7XG4gICAgICAgICAgICBpZDogbnVsbCxcbiAgICAgICAgICAgIGJhbGFuY2VHcmFtczogbnVsbCxcbiAgICAgICAgfTtcbiAgICB9XG5cblxuICAgIC8vIEZhY2FkZSBmdW5jdGlvbnNcblxuICAgIGFzeW5jIGRlcGxveShcbiAgICAgICAgcGFyYW1zOiBUT05Db250cmFjdERlcGxveVBhcmFtcyxcbiAgICAgICAgcGFyZW50U3Bhbj86IChTcGFuIHwgU3BhbkNvbnRleHQpLFxuICAgICk6IFByb21pc2U8VE9OQ29udHJhY3REZXBsb3lSZXN1bHQ+IHtcbiAgICAgICAgcmV0dXJuIHRoaXMuY29udGV4dC50cmFjZSgnY29udHJhY3RzLmRlcGxveScsIGFzeW5jIChzcGFuOiBTcGFuKSA9PiB7XG4gICAgICAgICAgICBzcGFuLnNldFRhZygncGFyYW1zJywgcmVtb3ZlUHJvcHMocGFyYW1zLCBbJ2tleVBhaXIuc2VjcmV0J10pKTtcbiAgICAgICAgICAgIHJldHVybiB0aGlzLmludGVybmFsRGVwbG95SnMocGFyYW1zLCBzcGFuKTtcbiAgICAgICAgfSwgcGFyZW50U3Bhbik7XG4gICAgfVxuXG5cbiAgICBhc3luYyBydW4oXG4gICAgICAgIHBhcmFtczogVE9OQ29udHJhY3RSdW5QYXJhbXMsXG4gICAgICAgIHBhcmVudFNwYW4/OiAoU3BhbiB8IFNwYW5Db250ZXh0KSxcbiAgICApOiBQcm9taXNlPFRPTkNvbnRyYWN0UnVuUmVzdWx0PiB7XG4gICAgICAgIHJldHVybiB0aGlzLmNvbnRleHQudHJhY2UoJ2NvbnRyYWN0cy5ydW4nLCBhc3luYyAoc3BhbjogU3BhbikgPT4ge1xuICAgICAgICAgICAgc3Bhbi5zZXRUYWcoJ3BhcmFtcycsIHJlbW92ZVByb3BzKHBhcmFtcywgWydrZXlQYWlyLnNlY3JldCddKSk7XG4gICAgICAgICAgICByZXR1cm4gdGhpcy5pbnRlcm5hbFJ1bkpzKHBhcmFtcywgc3Bhbik7XG4gICAgICAgIH0sIHBhcmVudFNwYW4pO1xuICAgIH1cblxuICAgIGFzeW5jIHJ1bkxvY2FsKFxuICAgICAgICBwYXJhbXM6IFRPTkNvbnRyYWN0UnVuTG9jYWxQYXJhbXMsXG4gICAgICAgIHBhcmVudFNwYW4/OiAoU3BhbiB8IFNwYW5Db250ZXh0KSxcbiAgICApOiBQcm9taXNlPFRPTkNvbnRyYWN0UnVuUmVzdWx0PiB7XG4gICAgICAgIHJldHVybiB0aGlzLmNvbnRleHQudHJhY2UoJ2NvbnRyYWN0cy5ydW5Mb2NhbCcsIGFzeW5jIChzcGFuOiBTcGFuKSA9PiB7XG4gICAgICAgICAgICBzcGFuLnNldFRhZygncGFyYW1zJywgcmVtb3ZlUHJvcHMocGFyYW1zLCBbJ2tleVBhaXIuc2VjcmV0J10pKTtcbiAgICAgICAgICAgIHJldHVybiB0aGlzLmludGVybmFsUnVuTG9jYWxKcyhwYXJhbXMsIHNwYW4pO1xuICAgICAgICB9LCBwYXJlbnRTcGFuKTtcbiAgICB9XG5cbiAgICBhc3luYyBydW5HZXQoXG4gICAgICAgIHBhcmFtczogVE9OQ29udHJhY3RSdW5HZXRQYXJhbXMsXG4gICAgKTogUHJvbWlzZTxUT05Db250cmFjdFJ1bkdldFJlc3VsdD4ge1xuICAgICAgICBsZXQgY29yZVBhcmFtczogVE9OQ29udHJhY3RSdW5HZXRQYXJhbXMgPSBwYXJhbXM7XG4gICAgICAgIGlmICghcGFyYW1zLmNvZGVCYXNlNjQgfHwgIXBhcmFtcy5kYXRhQmFzZTY0KSB7XG4gICAgICAgICAgICBpZiAoIXBhcmFtcy5hZGRyZXNzKSB7XG4gICAgICAgICAgICAgICAgdGhyb3cgVE9OQ2xpZW50RXJyb3IuYWRkcmVzc1JlcXVpcmVkRm9yUnVuTG9jYWwoKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGNvbnN0IGFjY291bnQ6IGFueSA9IGF3YWl0IHRoaXMuZ2V0QWNjb3VudChwYXJhbXMuYWRkcmVzcywgdHJ1ZSk7XG4gICAgICAgICAgICBhY2NvdW50LmNvZGVCYXNlNjQgPSBhY2NvdW50LmNvZGU7XG4gICAgICAgICAgICBhY2NvdW50LmRhdGFCYXNlNjQgPSBhY2NvdW50LmRhdGE7XG4gICAgICAgICAgICBkZWxldGUgYWNjb3VudC5jb2RlO1xuICAgICAgICAgICAgZGVsZXRlIGFjY291bnQuZGF0YTtcbiAgICAgICAgICAgIGNvcmVQYXJhbXMgPSB7XG4gICAgICAgICAgICAgICAgLi4uYWNjb3VudCxcbiAgICAgICAgICAgICAgICAuLi5wYXJhbXMsXG4gICAgICAgICAgICB9O1xuICAgICAgICB9XG4gICAgICAgIHJldHVybiB0aGlzLnJlcXVlc3RDb3JlKCd0dm0uZ2V0JywgY29yZVBhcmFtcyk7XG4gICAgfVxuXG4gICAgYXJyYXlGcm9tQ09OUyhjb25zOiBhbnlbXSk6IGFueVtdIHtcbiAgICAgICAgY29uc3QgcmVzdWx0ID0gW107XG4gICAgICAgIGxldCBpdGVtID0gY29ucztcbiAgICAgICAgd2hpbGUgKGl0ZW0pIHtcbiAgICAgICAgICAgIGlmICghaXRlbS5sZW5ndGggPT09IDIpIHtcbiAgICAgICAgICAgICAgICB0aHJvdyBUT05DbGllbnRFcnJvci5pbnZhbGlkQ29ucygpO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgcmVzdWx0LnB1c2goaXRlbVswXSk7XG4gICAgICAgICAgICBpdGVtID0gaXRlbVsxXTtcbiAgICAgICAgfVxuICAgICAgICByZXR1cm4gcmVzdWx0O1xuICAgIH1cblxuXG4gICAgLy8gTWVzc2FnZSBjcmVhdGlvblxuXG4gICAgYXN5bmMgY3JlYXRlRGVwbG95TWVzc2FnZShcbiAgICAgICAgcGFyYW1zOiBUT05Db250cmFjdERlcGxveVBhcmFtcyxcbiAgICAgICAgcmV0cnlJbmRleD86IG51bWJlcixcbiAgICApOiBQcm9taXNlPFRPTkNvbnRyYWN0RGVwbG95TWVzc2FnZT4ge1xuICAgICAgICB0aGlzLmNvbmZpZy5sb2coJ2NyZWF0ZURlcGxveU1lc3NhZ2UnLCBwYXJhbXMpO1xuICAgICAgICBjb25zdCBjb25zdHJ1Y3RvckhlYWRlciA9IHRoaXMubWFrZUV4cGlyZUhlYWRlcihcbiAgICAgICAgICAgIHBhcmFtcy5wYWNrYWdlLmFiaSxcbiAgICAgICAgICAgIHBhcmFtcy5jb25zdHJ1Y3RvckhlYWRlcixcbiAgICAgICAgICAgIHJldHJ5SW5kZXgsXG4gICAgICAgICk7XG4gICAgICAgIGNvbnN0IG1lc3NhZ2U6IHtcbiAgICAgICAgICAgIGFkZHJlc3M6IHN0cmluZyxcbiAgICAgICAgICAgIG1lc3NhZ2VJZDogc3RyaW5nLFxuICAgICAgICAgICAgbWVzc2FnZUJvZHlCYXNlNjQ6IHN0cmluZyxcbiAgICAgICAgfSA9IGF3YWl0IHRoaXMucmVxdWVzdENvcmUoJ2NvbnRyYWN0cy5kZXBsb3kubWVzc2FnZScsIHtcbiAgICAgICAgICAgIGFiaTogcGFyYW1zLnBhY2thZ2UuYWJpLFxuICAgICAgICAgICAgY29uc3RydWN0b3JIZWFkZXIsXG4gICAgICAgICAgICBjb25zdHJ1Y3RvclBhcmFtczogcGFyYW1zLmNvbnN0cnVjdG9yUGFyYW1zLFxuICAgICAgICAgICAgaW5pdFBhcmFtczogcGFyYW1zLmluaXRQYXJhbXMsXG4gICAgICAgICAgICBpbWFnZUJhc2U2NDogcGFyYW1zLnBhY2thZ2UuaW1hZ2VCYXNlNjQsXG4gICAgICAgICAgICBrZXlQYWlyOiBwYXJhbXMua2V5UGFpcixcbiAgICAgICAgICAgIHdvcmtjaGFpbklkOiBwYXJhbXMud29ya2NoYWluSWQsXG4gICAgICAgIH0pO1xuICAgICAgICByZXR1cm4ge1xuICAgICAgICAgICAgbWVzc2FnZToge1xuICAgICAgICAgICAgICAgIG1lc3NhZ2VJZDogbWVzc2FnZS5tZXNzYWdlSWQsXG4gICAgICAgICAgICAgICAgbWVzc2FnZUJvZHlCYXNlNjQ6IG1lc3NhZ2UubWVzc2FnZUJvZHlCYXNlNjQsXG4gICAgICAgICAgICAgICAgZXhwaXJlOiBjb25zdHJ1Y3RvckhlYWRlcj8uZXhwaXJlLFxuICAgICAgICAgICAgfSxcbiAgICAgICAgICAgIGFkZHJlc3M6IG1lc3NhZ2UuYWRkcmVzcyxcbiAgICAgICAgfTtcbiAgICB9XG5cblxuICAgIGFzeW5jIGNyZWF0ZVJ1bk1lc3NhZ2UoXG4gICAgICAgIHBhcmFtczogVE9OQ29udHJhY3RSdW5QYXJhbXMsXG4gICAgICAgIHJldHJ5SW5kZXg/OiBudW1iZXIsXG4gICAgKTogUHJvbWlzZTxUT05Db250cmFjdFJ1bk1lc3NhZ2U+IHtcbiAgICAgICAgdGhpcy5jb25maWcubG9nKCdjcmVhdGVSdW5NZXNzYWdlJywgcGFyYW1zKTtcbiAgICAgICAgY29uc3QgaGVhZGVyID0gdGhpcy5tYWtlRXhwaXJlSGVhZGVyKFxuICAgICAgICAgICAgcGFyYW1zLmFiaSxcbiAgICAgICAgICAgIHBhcmFtcy5oZWFkZXIsXG4gICAgICAgICAgICByZXRyeUluZGV4LFxuICAgICAgICApO1xuICAgICAgICBjb25zdCBtZXNzYWdlID0gYXdhaXQgdGhpcy5yZXF1ZXN0Q29yZSgnY29udHJhY3RzLnJ1bi5tZXNzYWdlJywge1xuICAgICAgICAgICAgYWRkcmVzczogcGFyYW1zLmFkZHJlc3MsXG4gICAgICAgICAgICBhYmk6IHBhcmFtcy5hYmksXG4gICAgICAgICAgICBmdW5jdGlvbk5hbWU6IHBhcmFtcy5mdW5jdGlvbk5hbWUsXG4gICAgICAgICAgICBoZWFkZXIsXG4gICAgICAgICAgICBpbnB1dDogcGFyYW1zLmlucHV0LFxuICAgICAgICAgICAga2V5UGFpcjogcGFyYW1zLmtleVBhaXIsXG4gICAgICAgIH0pO1xuICAgICAgICBtZXNzYWdlLmV4cGlyZSA9IGhlYWRlcj8uZXhwaXJlO1xuICAgICAgICByZXR1cm4ge1xuICAgICAgICAgICAgYWRkcmVzczogcGFyYW1zLmFkZHJlc3MsXG4gICAgICAgICAgICBhYmk6IHBhcmFtcy5hYmksXG4gICAgICAgICAgICBmdW5jdGlvbk5hbWU6IHBhcmFtcy5mdW5jdGlvbk5hbWUsXG4gICAgICAgICAgICBtZXNzYWdlLFxuICAgICAgICB9O1xuICAgIH1cblxuICAgIGFzeW5jIGNyZWF0ZVVuc2lnbmVkRGVwbG95TWVzc2FnZShcbiAgICAgICAgcGFyYW1zOiBUT05Db250cmFjdERlcGxveVBhcmFtcyxcbiAgICAgICAgcmV0cnlJbmRleD86IG51bWJlcixcbiAgICApOiBQcm9taXNlPFRPTkNvbnRyYWN0VW5zaWduZWREZXBsb3lNZXNzYWdlPiB7XG4gICAgICAgIGNvbnN0IGNvbnN0cnVjdG9ySGVhZGVyID0gdGhpcy5tYWtlRXhwaXJlSGVhZGVyKFxuICAgICAgICAgICAgcGFyYW1zLnBhY2thZ2UuYWJpLFxuICAgICAgICAgICAgcGFyYW1zLmNvbnN0cnVjdG9ySGVhZGVyLFxuICAgICAgICAgICAgcmV0cnlJbmRleCxcbiAgICAgICAgKTtcbiAgICAgICAgY29uc3QgcmVzdWx0OiB7XG4gICAgICAgICAgICBlbmNvZGVkOiBUT05Db250cmFjdFVuc2lnbmVkTWVzc2FnZSxcbiAgICAgICAgICAgIGFkZHJlc3NIZXg6IHN0cmluZyxcbiAgICAgICAgfSA9IGF3YWl0IHRoaXMucmVxdWVzdENvcmUoJ2NvbnRyYWN0cy5kZXBsb3kuZW5jb2RlX3Vuc2lnbmVkX21lc3NhZ2UnLCB7XG4gICAgICAgICAgICBhYmk6IHBhcmFtcy5wYWNrYWdlLmFiaSxcbiAgICAgICAgICAgIGNvbnN0cnVjdG9ySGVhZGVyLFxuICAgICAgICAgICAgY29uc3RydWN0b3JQYXJhbXM6IHBhcmFtcy5jb25zdHJ1Y3RvclBhcmFtcyxcbiAgICAgICAgICAgIGluaXRQYXJhbXM6IHBhcmFtcy5pbml0UGFyYW1zLFxuICAgICAgICAgICAgaW1hZ2VCYXNlNjQ6IHBhcmFtcy5wYWNrYWdlLmltYWdlQmFzZTY0LFxuICAgICAgICAgICAgcHVibGljS2V5SGV4OiBwYXJhbXMua2V5UGFpci5wdWJsaWMsXG4gICAgICAgICAgICB3b3JrY2hhaW5JZDogcGFyYW1zLndvcmtjaGFpbklkLFxuICAgICAgICB9KTtcbiAgICAgICAgcmV0dXJuIHtcbiAgICAgICAgICAgIGFkZHJlc3M6IHJlc3VsdC5hZGRyZXNzSGV4LFxuICAgICAgICAgICAgc2lnblBhcmFtczoge1xuICAgICAgICAgICAgICAgIC4uLnJlc3VsdC5lbmNvZGVkLFxuICAgICAgICAgICAgICAgIGFiaTogcGFyYW1zLnBhY2thZ2UuYWJpLFxuICAgICAgICAgICAgICAgIGV4cGlyZTogY29uc3RydWN0b3JIZWFkZXI/LmV4cGlyZSxcbiAgICAgICAgICAgIH0sXG4gICAgICAgIH07XG4gICAgfVxuXG5cbiAgICBhc3luYyBjcmVhdGVVbnNpZ25lZFJ1bk1lc3NhZ2UoXG4gICAgICAgIHBhcmFtczogVE9OQ29udHJhY3RSdW5QYXJhbXMsXG4gICAgICAgIHJldHJ5SW5kZXg/OiBudW1iZXIsXG4gICAgKTogUHJvbWlzZTxUT05Db250cmFjdFVuc2lnbmVkUnVuTWVzc2FnZT4ge1xuICAgICAgICBjb25zdCBoZWFkZXIgPSB0aGlzLm1ha2VFeHBpcmVIZWFkZXIoXG4gICAgICAgICAgICBwYXJhbXMuYWJpLFxuICAgICAgICAgICAgcGFyYW1zLmhlYWRlcixcbiAgICAgICAgICAgIHJldHJ5SW5kZXgsXG4gICAgICAgICk7XG4gICAgICAgIGNvbnN0IHNpZ25QYXJhbXMgPSBhd2FpdCB0aGlzLnJlcXVlc3RDb3JlKCdjb250cmFjdHMucnVuLmVuY29kZV91bnNpZ25lZF9tZXNzYWdlJywge1xuICAgICAgICAgICAgYWRkcmVzczogcGFyYW1zLmFkZHJlc3MsXG4gICAgICAgICAgICBhYmk6IHBhcmFtcy5hYmksXG4gICAgICAgICAgICBmdW5jdGlvbk5hbWU6IHBhcmFtcy5mdW5jdGlvbk5hbWUsXG4gICAgICAgICAgICBoZWFkZXIsXG4gICAgICAgICAgICBpbnB1dDogcGFyYW1zLmlucHV0LFxuICAgICAgICB9KTtcbiAgICAgICAgcmV0dXJuIHtcbiAgICAgICAgICAgIGFkZHJlc3M6IHBhcmFtcy5hZGRyZXNzLFxuICAgICAgICAgICAgZnVuY3Rpb25OYW1lOiBwYXJhbXMuZnVuY3Rpb25OYW1lLFxuICAgICAgICAgICAgc2lnblBhcmFtczoge1xuICAgICAgICAgICAgICAgIC4uLnNpZ25QYXJhbXMsXG4gICAgICAgICAgICAgICAgYWJpOiBwYXJhbXMuYWJpLFxuICAgICAgICAgICAgICAgIGV4cGlyZTogaGVhZGVyPy5leHBpcmUsXG4gICAgICAgICAgICB9LFxuICAgICAgICB9O1xuICAgIH1cblxuXG4gICAgYXN5bmMgY3JlYXRlU2lnbmVkTWVzc2FnZShcbiAgICAgICAgcGFyYW1zOiBUT05Db250cmFjdENyZWF0ZVNpZ25lZE1lc3NhZ2VQYXJhbXMsXG4gICAgKTogUHJvbWlzZTxUT05Db250cmFjdE1lc3NhZ2U+IHtcbiAgICAgICAgcmV0dXJuIHRoaXMucmVxdWVzdENvcmUoJ2NvbnRyYWN0cy5lbmNvZGVfbWVzc2FnZV93aXRoX3NpZ24nLCBwYXJhbXMpO1xuICAgIH1cblxuXG4gICAgYXN5bmMgY3JlYXRlU2lnbmVkRGVwbG95TWVzc2FnZShcbiAgICAgICAgcGFyYW1zOiBUT05Db250cmFjdENyZWF0ZVNpZ25lZERlcGxveU1lc3NhZ2VQYXJhbXMsXG4gICAgKTogUHJvbWlzZTxUT05Db250cmFjdERlcGxveU1lc3NhZ2U+IHtcbiAgICAgICAgY29uc3QgbWVzc2FnZSA9IGF3YWl0IHRoaXMuY3JlYXRlU2lnbmVkTWVzc2FnZSh7XG4gICAgICAgICAgICBhYmk6IHBhcmFtcy51bnNpZ25lZE1lc3NhZ2Uuc2lnblBhcmFtcy5hYmksXG4gICAgICAgICAgICB1bnNpZ25lZEJ5dGVzQmFzZTY0OiBwYXJhbXMudW5zaWduZWRNZXNzYWdlLnNpZ25QYXJhbXMudW5zaWduZWRCeXRlc0Jhc2U2NCxcbiAgICAgICAgICAgIHNpZ25CeXRlc0Jhc2U2NDogcGFyYW1zLnNpZ25CeXRlc0Jhc2U2NCxcbiAgICAgICAgICAgIHB1YmxpY0tleUhleDogcGFyYW1zLnB1YmxpY0tleUhleCxcbiAgICAgICAgfSk7XG4gICAgICAgIG1lc3NhZ2UuZXhwaXJlID0gcGFyYW1zLnVuc2lnbmVkTWVzc2FnZS5zaWduUGFyYW1zLmV4cGlyZTtcbiAgICAgICAgcmV0dXJuIHtcbiAgICAgICAgICAgIGFkZHJlc3M6IHBhcmFtcy51bnNpZ25lZE1lc3NhZ2UuYWRkcmVzcyxcbiAgICAgICAgICAgIG1lc3NhZ2UsXG4gICAgICAgIH07XG4gICAgfVxuXG5cbiAgICBhc3luYyBjcmVhdGVTaWduZWRSdW5NZXNzYWdlKFxuICAgICAgICBwYXJhbXM6IFRPTkNvbnRyYWN0Q3JlYXRlU2lnbmVkUnVuTWVzc2FnZVBhcmFtcyxcbiAgICApOiBQcm9taXNlPFRPTkNvbnRyYWN0UnVuTWVzc2FnZT4ge1xuICAgICAgICBjb25zdCBtZXNzYWdlID0gYXdhaXQgdGhpcy5jcmVhdGVTaWduZWRNZXNzYWdlKHtcbiAgICAgICAgICAgIGFiaTogcGFyYW1zLnVuc2lnbmVkTWVzc2FnZS5zaWduUGFyYW1zLmFiaSxcbiAgICAgICAgICAgIHVuc2lnbmVkQnl0ZXNCYXNlNjQ6IHBhcmFtcy51bnNpZ25lZE1lc3NhZ2Uuc2lnblBhcmFtcy51bnNpZ25lZEJ5dGVzQmFzZTY0LFxuICAgICAgICAgICAgc2lnbkJ5dGVzQmFzZTY0OiBwYXJhbXMuc2lnbkJ5dGVzQmFzZTY0LFxuICAgICAgICAgICAgcHVibGljS2V5SGV4OiBwYXJhbXMucHVibGljS2V5SGV4LFxuICAgICAgICB9KTtcbiAgICAgICAgbWVzc2FnZS5leHBpcmUgPSBwYXJhbXMudW5zaWduZWRNZXNzYWdlLnNpZ25QYXJhbXMuZXhwaXJlO1xuICAgICAgICByZXR1cm4ge1xuICAgICAgICAgICAgYWRkcmVzczogcGFyYW1zLnVuc2lnbmVkTWVzc2FnZS5hZGRyZXNzLFxuICAgICAgICAgICAgYWJpOiBwYXJhbXMudW5zaWduZWRNZXNzYWdlLnNpZ25QYXJhbXMuYWJpLFxuICAgICAgICAgICAgZnVuY3Rpb25OYW1lOiBwYXJhbXMudW5zaWduZWRNZXNzYWdlLmZ1bmN0aW9uTmFtZSxcbiAgICAgICAgICAgIG1lc3NhZ2UsXG4gICAgICAgIH07XG4gICAgfVxuXG4gICAgYXN5bmMgZ2V0Q29kZUZyb21JbWFnZShcbiAgICAgICAgcGFyYW1zOiBUT05Db250cmFjdEdldENvZGVGcm9tSW1hZ2VQYXJhbXMsXG4gICAgKTogUHJvbWlzZTxUT05Db250cmFjdEdldENvZGVGcm9tSW1hZ2VSZXN1bHQ+IHtcbiAgICAgICAgcmV0dXJuIHRoaXMucmVxdWVzdENvcmUoJ2NvbnRyYWN0cy5pbWFnZS5jb2RlJywgcGFyYW1zKTtcbiAgICB9XG5cbiAgICBhc3luYyBnZXREZXBsb3lEYXRhKFxuICAgICAgICBwYXJhbXM6IFRPTkNvbnRyYWN0R2V0RGVwbG95RGF0YVBhcmFtcyxcbiAgICApOiBQcm9taXNlPFRPTkNvbnRyYWN0R2V0RGVwbG95RGF0YVJlc3VsdD4ge1xuICAgICAgICByZXR1cm4gdGhpcy5yZXF1ZXN0Q29yZSgnY29udHJhY3RzLmRlcGxveS5kYXRhJywgcGFyYW1zKTtcbiAgICB9XG5cbiAgICBhc3luYyBjcmVhdGVSdW5Cb2R5KFxuICAgICAgICBwYXJhbXM6IFRPTkNvbnRyYWN0Q3JlYXRlUnVuQm9keVBhcmFtcyxcbiAgICApOiBQcm9taXNlPFRPTkNvbnRyYWN0Q3JlYXRlUnVuQm9keVJlc3VsdD4ge1xuICAgICAgICByZXR1cm4gdGhpcy5yZXF1ZXN0Q29yZSgnY29udHJhY3RzLnJ1bi5ib2R5JywgcGFyYW1zKTtcbiAgICB9XG5cbiAgICBhc3luYyBnZXRGdW5jdGlvbklkKFxuICAgICAgICBwYXJhbXM6IFRPTkNvbnRyYWN0R2V0RnVuY3Rpb25JZFBhcmFtcyxcbiAgICApOiBQcm9taXNlPFRPTkNvbnRyYWN0R2V0RnVuY3Rpb25JZFJlc3VsdD4ge1xuICAgICAgICByZXR1cm4gdGhpcy5yZXF1ZXN0Q29yZSgnY29udHJhY3RzLmZ1bmN0aW9uLmlkJywgcGFyYW1zKTtcbiAgICB9XG5cbiAgICBhc3luYyBnZXRCb2NIYXNoKFxuICAgICAgICBwYXJhbXM6IFRPTkNvbnRyYWN0Qm9jLFxuICAgICk6IFByb21pc2U8VE9OQ29udHJhY3RHZXRCb2NIYXNoUmVzdWx0PiB7XG4gICAgICAgIHJldHVybiB0aGlzLnJlcXVlc3RDb3JlKCdjb250cmFjdHMuYm9jLmhhc2gnLCBwYXJhbXMpO1xuICAgIH1cblxuICAgIGFzeW5jIHBhcnNlTWVzc2FnZShcbiAgICAgICAgcGFyYW1zOiBUT05Db250cmFjdEJvYyxcbiAgICApOiBQcm9taXNlPFFNZXNzYWdlPiB7XG4gICAgICAgIHJldHVybiB0aGlzLnJlcXVlc3RDb3JlKCdjb250cmFjdHMucGFyc2UubWVzc2FnZScsIHBhcmFtcyk7XG4gICAgfVxuXG4gICAgLy8gTWVzc2FnZSBwYXJzaW5nXG5cbiAgICBhc3luYyBkZWNvZGVSdW5PdXRwdXQoXG4gICAgICAgIHBhcmFtczogVE9OQ29udHJhY3REZWNvZGVSdW5PdXRwdXRQYXJhbXMsXG4gICAgKTogUHJvbWlzZTxUT05Db250cmFjdFJ1blJlc3VsdD4ge1xuICAgICAgICByZXR1cm4gdGhpcy5yZXF1ZXN0Q29yZSgnY29udHJhY3RzLnJ1bi5vdXRwdXQnLCBwYXJhbXMpO1xuICAgIH1cblxuXG4gICAgYXN5bmMgZGVjb2RlSW5wdXRNZXNzYWdlQm9keShcbiAgICAgICAgcGFyYW1zOiBUT05Db250cmFjdERlY29kZU1lc3NhZ2VCb2R5UGFyYW1zLFxuICAgICk6IFByb21pc2U8VE9OQ29udHJhY3REZWNvZGVNZXNzYWdlQm9keVJlc3VsdD4ge1xuICAgICAgICByZXR1cm4gdGhpcy5yZXF1ZXN0Q29yZSgnY29udHJhY3RzLnJ1bi51bmtub3duLmlucHV0JywgcGFyYW1zKTtcbiAgICB9XG5cblxuICAgIGFzeW5jIGRlY29kZU91dHB1dE1lc3NhZ2VCb2R5KFxuICAgICAgICBwYXJhbXM6IFRPTkNvbnRyYWN0RGVjb2RlTWVzc2FnZUJvZHlQYXJhbXMsXG4gICAgKTogUHJvbWlzZTxUT05Db250cmFjdERlY29kZU1lc3NhZ2VCb2R5UmVzdWx0PiB7XG4gICAgICAgIHJldHVybiB0aGlzLnJlcXVlc3RDb3JlKCdjb250cmFjdHMucnVuLnVua25vd24ub3V0cHV0JywgcGFyYW1zKTtcbiAgICB9XG5cbiAgICAvLyBNZXNzYWdlIHByb2Nlc3NpbmdcblxuICAgIGFzeW5jIGdldE1lc3NhZ2VJZChtZXNzYWdlOiBUT05Db250cmFjdE1lc3NhZ2UpOiBQcm9taXNlPHN0cmluZz4ge1xuICAgICAgICByZXR1cm4gbWVzc2FnZS5tZXNzYWdlSWQgfHwgKGF3YWl0IHRoaXMuZ2V0Qm9jSGFzaCh7XG4gICAgICAgICAgICBib2NCYXNlNjQ6IG1lc3NhZ2UubWVzc2FnZUJvZHlCYXNlNjQsXG4gICAgICAgIH0pKS5oYXNoXG4gICAgfVxuXG4gICAgYXN5bmMgc2VuZE1lc3NhZ2UoXG4gICAgICAgIHBhcmFtczogVE9OQ29udHJhY3RNZXNzYWdlLFxuICAgICAgICBwYXJlbnRTcGFuPzogKFNwYW4gfCBTcGFuQ29udGV4dCksXG4gICAgKTogUHJvbWlzZTxzdHJpbmc+IHtcbiAgICAgICAgY29uc3QgZXhwaXJlID0gcGFyYW1zLmV4cGlyZTtcbiAgICAgICAgaWYgKGV4cGlyZSAmJiAoRGF0ZS5ub3coKSA+IGV4cGlyZSAqIDEwMDApKSB7XG4gICAgICAgICAgICB0aHJvdyBUT05DbGllbnRFcnJvci5zZW5kTm9kZVJlcXVlc3RGYWlsZWQoJ01lc3NhZ2UgYWxyZWFkeSBleHBpcmVkJyk7XG4gICAgICAgIH1cbiAgICAgICAgY29uc3Qgc2VydmVyVGltZURlbHRhID0gTWF0aC5hYnMoYXdhaXQgdGhpcy5xdWVyaWVzLnNlcnZlclRpbWVEZWx0YShwYXJlbnRTcGFuKSk7XG4gICAgICAgIGlmIChzZXJ2ZXJUaW1lRGVsdGEgPiB0aGlzLmNvbmZpZy5vdXRPZlN5bmNUaHJlc2hvbGQoKSkge1xuICAgICAgICAgICAgdGhpcy5xdWVyaWVzLmRyb3BTZXJ2ZXJUaW1lRGVsdGEoKTtcbiAgICAgICAgICAgIHRocm93IFRPTkNsaWVudEVycm9yLmNsb2NrT3V0T2ZTeW5jKCk7XG4gICAgICAgIH1cbiAgICAgICAgY29uc3QgaWQgPSBhd2FpdCB0aGlzLmdldE1lc3NhZ2VJZChwYXJhbXMpO1xuICAgICAgICBjb25zdCBpZEJhc2U2NCA9IEJ1ZmZlci5mcm9tKGlkLCAnaGV4JykudG9TdHJpbmcoJ2Jhc2U2NCcpO1xuICAgICAgICBhd2FpdCB0aGlzLnF1ZXJpZXMucG9zdFJlcXVlc3RzKFtcbiAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICBpZDogaWRCYXNlNjQsXG4gICAgICAgICAgICAgICAgYm9keTogcGFyYW1zLm1lc3NhZ2VCb2R5QmFzZTY0LFxuICAgICAgICAgICAgfSxcbiAgICAgICAgXSwgcGFyZW50U3Bhbik7XG4gICAgICAgIHRoaXMuY29uZmlnLmxvZygnc2VuZE1lc3NhZ2UuIFJlcXVlc3QgcG9zdGVkJyk7XG4gICAgICAgIHJldHVybiBpZDtcbiAgICB9XG5cbiAgICBhc3luYyBwcm9jZXNzTWVzc2FnZShcbiAgICAgICAgbWVzc2FnZTogVE9OQ29udHJhY3RNZXNzYWdlLFxuICAgICAgICByZXN1bHRGaWVsZHM6IHN0cmluZyxcbiAgICAgICAgcGFyZW50U3Bhbj86IChTcGFuIHwgU3BhbkNvbnRleHQpLFxuICAgICAgICByZXRyeUluZGV4PzogbnVtYmVyLFxuICAgICk6IFByb21pc2U8UVRyYW5zYWN0aW9uPiB7XG4gICAgICAgIGF3YWl0IHRoaXMuc2VuZE1lc3NhZ2UobWVzc2FnZSwgcGFyZW50U3Bhbik7XG4gICAgICAgIHJldHVybiB0aGlzLndhaXRGb3JUcmFuc2FjdGlvbihtZXNzYWdlLCByZXN1bHRGaWVsZHMsIHBhcmVudFNwYW4sIHJldHJ5SW5kZXgpO1xuICAgIH1cblxuXG4gICAgYXN5bmMgd2FpdEZvclRyYW5zYWN0aW9uKFxuICAgICAgICBtZXNzYWdlOiBUT05Db250cmFjdE1lc3NhZ2UsXG4gICAgICAgIHJlc3VsdEZpZWxkczogc3RyaW5nLFxuICAgICAgICBwYXJlbnRTcGFuPzogKFNwYW4gfCBTcGFuQ29udGV4dCksXG4gICAgICAgIHJldHJ5SW5kZXg/OiBudW1iZXIsXG4gICAgKTogUHJvbWlzZTxRVHJhbnNhY3Rpb24+IHtcbiAgICAgICAgY29uc3QgbWVzc2FnZUlkID0gYXdhaXQgdGhpcy5nZXRNZXNzYWdlSWQobWVzc2FnZSk7XG4gICAgICAgIGNvbnN0IGNvbmZpZyA9IHRoaXMuY29uZmlnO1xuICAgICAgICBsZXQgcHJvY2Vzc2luZ1RpbWVvdXQgPSBjb25maWcubWVzc2FnZVByb2Nlc3NpbmdUaW1lb3V0KHJldHJ5SW5kZXgpO1xuICAgICAgICBjb25zdCBwcm9taXNlcyA9IFtdO1xuICAgICAgICBjb25zdCBzZXJ2ZXJJbmZvID0gYXdhaXQgdGhpcy5xdWVyaWVzLmdldFNlcnZlckluZm8ocGFyZW50U3Bhbik7XG4gICAgICAgIGNvbnN0IG9wZXJhdGlvbklkID0gc2VydmVySW5mby5zdXBwb3J0c09wZXJhdGlvbklkXG4gICAgICAgICAgICA/IHRoaXMucXVlcmllcy5nZW5lcmF0ZU9wZXJhdGlvbklkKClcbiAgICAgICAgICAgIDogdW5kZWZpbmVkO1xuICAgICAgICBsZXQgdHJhbnNhY3Rpb246ID9RVHJhbnNhY3Rpb24gPSBudWxsO1xuICAgICAgICBjb25zdCBleHBpcmUgPSBtZXNzYWdlLmV4cGlyZTtcbiAgICAgICAgaWYgKGV4cGlyZSkge1xuICAgICAgICAgICAgLy8gY2FsY3VsYXRlIHRpbWVvdXQgYWNjb3JkaW5nIHRvIGBleHBpcmVgIHZhbHVlIChpbiBzZWNvbmRzKVxuICAgICAgICAgICAgLy8gYWRkIHByb2Nlc3NpbmcgdGltZW91dCBhcyBtYXN0ZXIgYmxvY2sgdmFsaWRhdGlvbiB0aW1lXG4gICAgICAgICAgICBwcm9jZXNzaW5nVGltZW91dCA9IGV4cGlyZSAqIDEwMDAgLSBEYXRlLm5vdygpICsgcHJvY2Vzc2luZ1RpbWVvdXQ7XG5cbiAgICAgICAgICAgIGNvbnN0IHdhaXRFeHBpcmVkID0gYXN5bmMgKCkgPT4ge1xuICAgICAgICAgICAgICAgIC8vIHdhaXQgZm9yIGJsb2NrLCBwcm9kdWNlZCBhZnRlciBgZXhwaXJlYCB0byBndWFyYW50ZWUgdGhhdCBtZXNzYWdlIGlzIHJlamVjdGVkXG4gICAgICAgICAgICAgICAgY29uc3QgYmxvY2s6IFFCbG9jayA9IGF3YWl0IHRoaXMucXVlcmllcy5ibG9ja3Mud2FpdEZvcih7XG4gICAgICAgICAgICAgICAgICAgIGZpbHRlcjoge1xuICAgICAgICAgICAgICAgICAgICAgICAgbWFzdGVyOiB7IG1pbl9zaGFyZF9nZW5fdXRpbWU6IHsgZ2U6IGV4cGlyZSB9IH0sXG4gICAgICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgICAgIHJlc3VsdDogJ2luX21zZ19kZXNjciB7IHRyYW5zYWN0aW9uX2lkIH0nLFxuICAgICAgICAgICAgICAgICAgICB0aW1lb3V0OiBwcm9jZXNzaW5nVGltZW91dCxcbiAgICAgICAgICAgICAgICAgICAgcGFyZW50U3BhbixcbiAgICAgICAgICAgICAgICAgICAgb3BlcmF0aW9uSWQsXG4gICAgICAgICAgICAgICAgfSk7XG5cbiAgICAgICAgICAgICAgICBpZiAodHJhbnNhY3Rpb24pIHtcbiAgICAgICAgICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgICAgIGNvbnN0IHRyYW5zYWN0aW9uX2lkID0gYmxvY2suaW5fbXNnX2Rlc2NyXG4gICAgICAgICAgICAgICAgICAgICYmIGJsb2NrLmluX21zZ19kZXNjci5maW5kKG1zZyA9PiAhIW1zZy50cmFuc2FjdGlvbl9pZCk/LnRyYW5zYWN0aW9uX2lkO1xuXG4gICAgICAgICAgICAgICAgaWYgKCF0cmFuc2FjdGlvbl9pZCkge1xuICAgICAgICAgICAgICAgICAgICB0aHJvdyBUT05DbGllbnRFcnJvci5pbnRlcm5hbEVycm9yKCdJbnZhbGlkIGJsb2NrIHJlY2VpdmVkOiBubyB0cmFuc2FjdGlvbiBJRCcpO1xuICAgICAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgICAgIC8vIGNoZWNrIHRoYXQgdHJhbnNhY3Rpb25zIGNvbGxlY3Rpb24gaXMgdXBkYXRlZFxuICAgICAgICAgICAgICAgIGF3YWl0IHRoaXMucXVlcmllcy50cmFuc2FjdGlvbnMud2FpdEZvcih7XG4gICAgICAgICAgICAgICAgICAgIGZpbHRlcjoge1xuICAgICAgICAgICAgICAgICAgICAgICAgaWQ6IHsgZXE6IHRyYW5zYWN0aW9uX2lkIH0sXG4gICAgICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgICAgIHJlc3VsdDogJ2lkJyxcbiAgICAgICAgICAgICAgICAgICAgdGltZW91dDogcHJvY2Vzc2luZ1RpbWVvdXQsXG4gICAgICAgICAgICAgICAgICAgIHBhcmVudFNwYW4sXG4gICAgICAgICAgICAgICAgICAgIG9wZXJhdGlvbklkLFxuICAgICAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgfTtcblxuICAgICAgICAgICAgcHJvbWlzZXMucHVzaCh3YWl0RXhwaXJlZCgpKTtcbiAgICAgICAgfVxuXG4gICAgICAgIC8vIHdhaXQgZm9yIG1lc3NhZ2UgcHJvY2Vzc2luZyB0cmFuc2FjdGlvblxuICAgICAgICBwcm9taXNlcy5wdXNoKG5ldyBQcm9taXNlKChyZXNvbHZlLCByZWplY3QpID0+IHtcbiAgICAgICAgICAgIChhc3luYyAoKSA9PiB7XG4gICAgICAgICAgICAgICAgdHJ5IHtcbiAgICAgICAgICAgICAgICAgICAgdHJhbnNhY3Rpb24gPSBhd2FpdCB0aGlzLnF1ZXJpZXMudHJhbnNhY3Rpb25zLndhaXRGb3Ioe1xuICAgICAgICAgICAgICAgICAgICAgICAgZmlsdGVyOiB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgaW5fbXNnOiB7IGVxOiBtZXNzYWdlSWQgfSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBzdGF0dXM6IHsgZXE6IFFUcmFuc2FjdGlvblByb2Nlc3NpbmdTdGF0dXMuZmluYWxpemVkIH0sXG4gICAgICAgICAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgICAgICAgICAgcmVzdWx0OiByZXN1bHRGaWVsZHMsXG4gICAgICAgICAgICAgICAgICAgICAgICB0aW1lb3V0OiBwcm9jZXNzaW5nVGltZW91dCxcbiAgICAgICAgICAgICAgICAgICAgICAgIG9wZXJhdGlvbklkLFxuICAgICAgICAgICAgICAgICAgICAgICAgcGFyZW50U3BhbixcbiAgICAgICAgICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICAgICAgICAgIHJlc29sdmUoKTtcbiAgICAgICAgICAgICAgICB9IGNhdGNoIChlcnJvcikge1xuICAgICAgICAgICAgICAgICAgICByZWplY3QoZXJyb3IpO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH0pKCk7XG4gICAgICAgIH0pKTtcblxuICAgICAgICB0cnkge1xuICAgICAgICAgICAgYXdhaXQgUHJvbWlzZS5yYWNlKHByb21pc2VzKTtcbiAgICAgICAgfSBmaW5hbGx5IHtcbiAgICAgICAgICAgIGlmIChwcm9taXNlcy5sZW5ndGggPiAxICYmIG9wZXJhdGlvbklkKSB7XG4gICAgICAgICAgICAgICAgYXdhaXQgdGhpcy5xdWVyaWVzLmZpbmlzaE9wZXJhdGlvbnMoW29wZXJhdGlvbklkXSk7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cblxuICAgICAgICBpZiAoIXRyYW5zYWN0aW9uKSB7XG4gICAgICAgICAgICB0aHJvdyBUT05DbGllbnRFcnJvci5tZXNzYWdlRXhwaXJlZCgpO1xuICAgICAgICB9XG4gICAgICAgIGNvbnN0IHRyYW5zYWN0aW9uTm93ID0gdHJhbnNhY3Rpb24ubm93IHx8IDA7XG4gICAgICAgIHRoaXMuY29uZmlnLmxvZygncHJvY2Vzc01lc3NhZ2UuIHRyYW5zYWN0aW9uIHJlY2VpdmVkJywge1xuICAgICAgICAgICAgaWQ6IHRyYW5zYWN0aW9uLmlkLFxuICAgICAgICAgICAgYmxvY2tfaWQ6IHRyYW5zYWN0aW9uLmJsb2NrX2lkLFxuICAgICAgICAgICAgbm93OiBgJHtuZXcgRGF0ZSh0cmFuc2FjdGlvbk5vdyAqIDEwMDApLnRvSVNPU3RyaW5nKCl9ICgke3RyYW5zYWN0aW9uTm93fSlgLFxuICAgICAgICB9KTtcbiAgICAgICAgcmV0dXJuIHRyYW5zYWN0aW9uO1xuICAgIH1cblxuICAgIGFzeW5jIGlzRGVwbG95ZWQoYWRkcmVzczogc3RyaW5nLCBwYXJlbnRTcGFuPzogKFNwYW4gfCBTcGFuQ29udGV4dCkpOiBQcm9taXNlPGJvb2w+IHtcbiAgICAgICAgY29uc3QgYWNjb3VudCA9IGF3YWl0IHRoaXMucXVlcmllcy5hY2NvdW50cy5xdWVyeSh7XG4gICAgICAgICAgICBmaWx0ZXI6IHtcbiAgICAgICAgICAgICAgICBpZDogeyBlcTogYWRkcmVzcyB9LFxuICAgICAgICAgICAgICAgIGFjY190eXBlOiB7IGVxOiBRQWNjb3VudFR5cGUuYWN0aXZlIH0sXG4gICAgICAgICAgICB9LFxuICAgICAgICAgICAgcmVzdWx0OiAnaWQnLFxuICAgICAgICAgICAgcGFyZW50U3BhbixcbiAgICAgICAgfSk7XG4gICAgICAgIHJldHVybiBhY2NvdW50Lmxlbmd0aCA+IDA7XG4gICAgfVxuXG4gICAgYXN5bmMgcHJvY2Vzc0RlcGxveU1lc3NhZ2UoXG4gICAgICAgIHBhcmFtczogVE9OQ29udHJhY3REZXBsb3lNZXNzYWdlLFxuICAgICAgICBwYXJlbnRTcGFuPzogKFNwYW4gfCBTcGFuQ29udGV4dCksXG4gICAgICAgIHJldHJ5SW5kZXg/OiBudW1iZXIsXG4gICAgKTogUHJvbWlzZTxUT05Db250cmFjdERlcGxveVJlc3VsdD4ge1xuICAgICAgICB0aGlzLmNvbmZpZy5sb2coJ3Byb2Nlc3NEZXBsb3lNZXNzYWdlJywgcGFyYW1zKTtcbiAgICAgICAgaWYgKGF3YWl0IHRoaXMuaXNEZXBsb3llZChwYXJhbXMuYWRkcmVzcywgcGFyZW50U3BhbikpIHtcbiAgICAgICAgICAgIHJldHVybiB7XG4gICAgICAgICAgICAgICAgYWRkcmVzczogcGFyYW1zLmFkZHJlc3MsXG4gICAgICAgICAgICAgICAgYWxyZWFkeURlcGxveWVkOiB0cnVlLFxuICAgICAgICAgICAgfTtcbiAgICAgICAgfVxuICAgICAgICBhd2FpdCB0aGlzLnNlbmRNZXNzYWdlKHBhcmFtcy5tZXNzYWdlLCBwYXJlbnRTcGFuKTtcbiAgICAgICAgcmV0dXJuIHRoaXMud2FpdEZvckRlcGxveVRyYW5zYWN0aW9uKFxuICAgICAgICAgICAgcGFyYW1zLFxuICAgICAgICAgICAgcGFyZW50U3BhbixcbiAgICAgICAgICAgIHJldHJ5SW5kZXgsXG4gICAgICAgICk7XG4gICAgfVxuXG4gICAgYXN5bmMgd2FpdEZvckRlcGxveVRyYW5zYWN0aW9uKFxuICAgICAgICBkZXBsb3lNZXNzYWdlOiBUT05Db250cmFjdERlcGxveU1lc3NhZ2UsXG4gICAgICAgIHBhcmVudFNwYW4/OiAoU3BhbiB8IFNwYW5Db250ZXh0KSxcbiAgICAgICAgcmV0cnlJbmRleD86IG51bWJlcixcbiAgICApOiBQcm9taXNlPFRPTkNvbnRyYWN0RGVwbG95UmVzdWx0PiB7XG4gICAgICAgIGNvbnN0IHRyYW5zYWN0aW9uID0gYXdhaXQgdGhpcy53YWl0Rm9yVHJhbnNhY3Rpb24oXG4gICAgICAgICAgICBkZXBsb3lNZXNzYWdlLm1lc3NhZ2UsXG4gICAgICAgICAgICB0cmFuc2FjdGlvbkRldGFpbHMsXG4gICAgICAgICAgICBwYXJlbnRTcGFuLFxuICAgICAgICAgICAgcmV0cnlJbmRleCxcbiAgICAgICAgKTtcbiAgICAgICAgYXdhaXQgY2hlY2tUcmFuc2FjdGlvbih0cmFuc2FjdGlvbik7XG4gICAgICAgIHRoaXMuY29uZmlnLmxvZygncHJvY2Vzc0RlcGxveU1lc3NhZ2UuIEVuZCcpO1xuICAgICAgICByZXR1cm4ge1xuICAgICAgICAgICAgYWRkcmVzczogZGVwbG95TWVzc2FnZS5hZGRyZXNzLFxuICAgICAgICAgICAgYWxyZWFkeURlcGxveWVkOiBmYWxzZSxcbiAgICAgICAgICAgIHRyYW5zYWN0aW9uLFxuICAgICAgICB9O1xuICAgIH1cblxuXG4gICAgYXN5bmMgcHJvY2Vzc1J1bk1lc3NhZ2UoXG4gICAgICAgIHJ1bk1lc3NhZ2U6IFRPTkNvbnRyYWN0UnVuTWVzc2FnZSxcbiAgICAgICAgcGFyZW50U3Bhbj86IChTcGFuIHwgU3BhbkNvbnRleHQpLFxuICAgICAgICByZXRyeUluZGV4PzogbnVtYmVyLFxuICAgICk6IFByb21pc2U8VE9OQ29udHJhY3RSdW5SZXN1bHQ+IHtcbiAgICAgICAgdGhpcy5jb25maWcubG9nKCdwcm9jZXNzUnVuTWVzc2FnZScsIHJ1bk1lc3NhZ2UpO1xuICAgICAgICBhd2FpdCB0aGlzLnNlbmRNZXNzYWdlKHJ1bk1lc3NhZ2UubWVzc2FnZSwgcGFyZW50U3Bhbik7XG4gICAgICAgIHJldHVybiB0aGlzLndhaXRGb3JSdW5UcmFuc2FjdGlvbihydW5NZXNzYWdlLCBwYXJlbnRTcGFuLCByZXRyeUluZGV4KTtcbiAgICB9XG5cbiAgICBhc3luYyB3YWl0Rm9yUnVuVHJhbnNhY3Rpb24oXG4gICAgICAgIHJ1bk1lc3NhZ2U6IFRPTkNvbnRyYWN0UnVuTWVzc2FnZSxcbiAgICAgICAgcGFyZW50U3Bhbj86IChTcGFuIHwgU3BhbkNvbnRleHQpLFxuICAgICAgICByZXRyeUluZGV4PzogbnVtYmVyLFxuICAgICk6IFByb21pc2U8VE9OQ29udHJhY3RSdW5SZXN1bHQ+IHtcbiAgICAgICAgY29uc3QgdHJhbnNhY3Rpb24gPSBhd2FpdCB0aGlzLndhaXRGb3JUcmFuc2FjdGlvbihcbiAgICAgICAgICAgIHJ1bk1lc3NhZ2UubWVzc2FnZSxcbiAgICAgICAgICAgIHRyYW5zYWN0aW9uRGV0YWlscyxcbiAgICAgICAgICAgIHBhcmVudFNwYW4sXG4gICAgICAgICAgICByZXRyeUluZGV4LFxuICAgICAgICApO1xuICAgICAgICBhd2FpdCBjaGVja1RyYW5zYWN0aW9uKHRyYW5zYWN0aW9uKTtcbiAgICAgICAgY29uc3Qgb3V0cHV0TWVzc2FnZXMgPSB0cmFuc2FjdGlvbi5vdXRfbWVzc2FnZXM7XG4gICAgICAgIGlmICghb3V0cHV0TWVzc2FnZXMgfHwgb3V0cHV0TWVzc2FnZXMubGVuZ3RoID09PSAwKSB7XG4gICAgICAgICAgICByZXR1cm4ge1xuICAgICAgICAgICAgICAgIG91dHB1dDogbnVsbCxcbiAgICAgICAgICAgICAgICB0cmFuc2FjdGlvbixcbiAgICAgICAgICAgIH07XG4gICAgICAgIH1cbiAgICAgICAgY29uc3QgZXh0ZXJuYWxNZXNzYWdlczogUU1lc3NhZ2VbXSA9IG91dHB1dE1lc3NhZ2VzLmZpbHRlcigoeDogUU1lc3NhZ2UpID0+IHtcbiAgICAgICAgICAgIHJldHVybiB4Lm1zZ190eXBlID09PSBRTWVzc2FnZVR5cGUuZXh0T3V0O1xuICAgICAgICB9KTtcbiAgICAgICAgdGhpcy5jb25maWcubG9nKCdwcm9jZXNzUnVuTWVzc2FnZS4gQmVmb3JlIG1lc3NhZ2VzIHBhcnNlJyk7XG4gICAgICAgIGNvbnN0IG91dHB1dHMgPSBhd2FpdCBQcm9taXNlLmFsbChleHRlcm5hbE1lc3NhZ2VzLm1hcCgoeDogUU1lc3NhZ2UpID0+IHtcbiAgICAgICAgICAgIHJldHVybiB0aGlzLmRlY29kZU91dHB1dE1lc3NhZ2VCb2R5KHtcbiAgICAgICAgICAgICAgICBhYmk6IHJ1bk1lc3NhZ2UuYWJpLFxuICAgICAgICAgICAgICAgIGJvZHlCYXNlNjQ6IHguYm9keSB8fCAnJyxcbiAgICAgICAgICAgIH0pO1xuICAgICAgICB9KSk7XG4gICAgICAgIGNvbnN0IHJlc3VsdE91dHB1dCA9IG91dHB1dHMuZmluZCgoeDogVE9OQ29udHJhY3REZWNvZGVNZXNzYWdlQm9keVJlc3VsdCkgPT4ge1xuICAgICAgICAgICAgcmV0dXJuIHguZnVuY3Rpb24udG9Mb3dlckNhc2UoKSA9PT0gcnVuTWVzc2FnZS5mdW5jdGlvbk5hbWUudG9Mb3dlckNhc2UoKTtcbiAgICAgICAgfSk7XG4gICAgICAgIHRoaXMuY29uZmlnLmxvZygncHJvY2Vzc1J1bk1lc3NhZ2UuIEVuZCcpO1xuICAgICAgICByZXR1cm4ge1xuICAgICAgICAgICAgb3V0cHV0OiByZXN1bHRPdXRwdXQgPyByZXN1bHRPdXRwdXQub3V0cHV0IDogbnVsbCxcbiAgICAgICAgICAgIHRyYW5zYWN0aW9uLFxuICAgICAgICB9O1xuICAgIH1cblxuICAgIGFzeW5jIHByb2Nlc3NSdW5NZXNzYWdlTG9jYWwoXG4gICAgICAgIHJ1bk1lc3NhZ2U6IFRPTkNvbnRyYWN0UnVuTWVzc2FnZSxcbiAgICAgICAgd2FpdFBhcmFtcz86IFRPTkNvbnRyYWN0QWNjb3VudFdhaXRQYXJhbXMsXG4gICAgICAgIHBhcmVudFNwYW4/OiAoU3BhbiB8IFNwYW5Db250ZXh0KSxcbiAgICApOiBQcm9taXNlPFRPTkNvbnRyYWN0UnVuUmVzdWx0PiB7XG4gICAgICAgIHRoaXMuY29uZmlnLmxvZygncHJvY2Vzc1J1bk1lc3NhZ2VMb2NhbCcsIHJ1bk1lc3NhZ2UpO1xuXG4gICAgICAgIGNvbnN0IGFjY291bnQgPSBhd2FpdCB0aGlzLmdldEFjY291bnQocnVuTWVzc2FnZS5hZGRyZXNzLCB0cnVlLCB3YWl0UGFyYW1zLCBwYXJlbnRTcGFuKTtcblxuICAgICAgICByZXR1cm4gdGhpcy5yZXF1ZXN0Q29yZSgnY29udHJhY3RzLnJ1bi5sb2NhbC5tc2cnLCB7XG4gICAgICAgICAgICBhZGRyZXNzOiBydW5NZXNzYWdlLmFkZHJlc3MsXG4gICAgICAgICAgICBhY2NvdW50LFxuICAgICAgICAgICAgYWJpOiBydW5NZXNzYWdlLmFiaSxcbiAgICAgICAgICAgIGZ1bmN0aW9uTmFtZTogcnVuTWVzc2FnZS5mdW5jdGlvbk5hbWUsXG4gICAgICAgICAgICBtZXNzYWdlQmFzZTY0OiBydW5NZXNzYWdlLm1lc3NhZ2UubWVzc2FnZUJvZHlCYXNlNjQsXG4gICAgICAgIH0pO1xuICAgIH1cblxuICAgIC8vIEZlZSBjYWxjdWxhdGlvblxuXG4gICAgYmlnQmFsYW5jZSA9ICcweDEwMDAwMDAwMDAwMDAwJztcblxuICAgIGFzeW5jIGNhbGNSdW5GZWVzKFxuICAgICAgICBwYXJhbXM6IFRPTkNvbnRyYWN0Q2FsY1J1bkZlZVBhcmFtcyxcbiAgICAgICAgcGFyZW50U3Bhbj86IChTcGFuIHwgU3BhbkNvbnRleHQpLFxuICAgICk6IFByb21pc2U8VE9OQ29udHJhY3RDYWxjRmVlUmVzdWx0PiB7XG4gICAgICAgIHRoaXMuY29uZmlnLmxvZygnY2FsY1J1bkZlZXMnLCBwYXJhbXMpO1xuXG4gICAgICAgIGNvbnN0IGFjY291bnQgPSBhd2FpdCB0aGlzLmdldEFjY291bnQocGFyYW1zLmFkZHJlc3MsIHRydWUsIHBhcmFtcy53YWl0UGFyYW1zLCBwYXJlbnRTcGFuKTtcblxuICAgICAgICBpZiAocGFyYW1zLmVtdWxhdGVCYWxhbmNlKSB7XG4gICAgICAgICAgICBhY2NvdW50LmJhbGFuY2UgPSB0aGlzLmJpZ0JhbGFuY2U7XG4gICAgICAgIH1cblxuICAgICAgICByZXR1cm4gdGhpcy5yZXF1ZXN0Q29yZSgnY29udHJhY3RzLnJ1bi5mZWUnLCB7XG4gICAgICAgICAgICBhZGRyZXNzOiBwYXJhbXMuYWRkcmVzcyxcbiAgICAgICAgICAgIGFjY291bnQsXG4gICAgICAgICAgICBhYmk6IHBhcmFtcy5hYmksXG4gICAgICAgICAgICBmdW5jdGlvbk5hbWU6IHBhcmFtcy5mdW5jdGlvbk5hbWUsXG4gICAgICAgICAgICBpbnB1dDogcGFyYW1zLmlucHV0LFxuICAgICAgICAgICAga2V5UGFpcjogcGFyYW1zLmtleVBhaXIsXG4gICAgICAgIH0pO1xuICAgIH1cblxuICAgIGFzeW5jIGNhbGNEZXBsb3lGZWVzKFxuICAgICAgICBwYXJhbXM6IFRPTkNvbnRyYWN0Q2FsY0RlcGxveUZlZVBhcmFtcyxcbiAgICAgICAgcGFyZW50U3Bhbj86IChTcGFuIHwgU3BhbkNvbnRleHQpLFxuICAgICk6IFByb21pc2U8VE9OQ29udHJhY3RDYWxjRmVlUmVzdWx0PiB7XG4gICAgICAgIHRoaXMuY29uZmlnLmxvZygnY2FsY0RlcGxveUZlZXMnLCBwYXJhbXMpO1xuXG4gICAgICAgIGNvbnN0IG1lc3NhZ2UgPSBhd2FpdCB0aGlzLmNyZWF0ZURlcGxveU1lc3NhZ2UocGFyYW1zKTtcblxuICAgICAgICByZXR1cm4gdGhpcy5jYWxjTXNnUHJvY2Vzc0ZlZXMoe1xuICAgICAgICAgICAgYWRkcmVzczogbWVzc2FnZS5hZGRyZXNzLFxuICAgICAgICAgICAgbWVzc2FnZTogbWVzc2FnZS5tZXNzYWdlLFxuICAgICAgICAgICAgZW11bGF0ZUJhbGFuY2U6IHBhcmFtcy5lbXVsYXRlQmFsYW5jZSxcbiAgICAgICAgICAgIG5ld0FjY291bnQ6IHBhcmFtcy5uZXdBY2NvdW50LFxuICAgICAgICB9LCBwYXJlbnRTcGFuKTtcbiAgICB9XG5cbiAgICBhc3luYyBjYWxjTXNnUHJvY2Vzc0ZlZXMoXG4gICAgICAgIHBhcmFtczogVE9OQ29udHJhY3RDYWxjTXNnUHJvY2Vzc2luZ0ZlZXNQYXJhbXMsXG4gICAgICAgIHBhcmVudFNwYW4/OiAoU3BhbiB8IFNwYW5Db250ZXh0KSxcbiAgICApOiBQcm9taXNlPFRPTkNvbnRyYWN0Q2FsY0ZlZVJlc3VsdD4ge1xuICAgICAgICB0aGlzLmNvbmZpZy5sb2coJ2NhbGNNc2dQcm9jZXNzRmVlcycsIHBhcmFtcyk7XG5cbiAgICAgICAgbGV0IGFjY291bnQ6IFFBY2NvdW50ID0ge1xuICAgICAgICAgICAgYmFsYW5jZTogdGhpcy5iaWdCYWxhbmNlLFxuICAgICAgICAgICAgaWQ6IHBhcmFtcy5hZGRyZXNzLFxuICAgICAgICAgICAgbGFzdF9wYWlkOiBNYXRoLmZsb29yKERhdGUubm93KCkgLyAxMDAwKSxcbiAgICAgICAgfTtcblxuICAgICAgICBpZiAoIXBhcmFtcy5uZXdBY2NvdW50KSB7XG4gICAgICAgICAgICBhY2NvdW50ID0gYXdhaXQgdGhpcy5nZXRBY2NvdW50KHBhcmFtcy5hZGRyZXNzLCBmYWxzZSwgcGFyYW1zLndhaXRQYXJhbXMsIHBhcmVudFNwYW4pO1xuICAgICAgICB9XG5cbiAgICAgICAgaWYgKHBhcmFtcy5lbXVsYXRlQmFsYW5jZSkge1xuICAgICAgICAgICAgYWNjb3VudC5iYWxhbmNlID0gdGhpcy5iaWdCYWxhbmNlO1xuICAgICAgICB9XG5cbiAgICAgICAgcmV0dXJuIHRoaXMucmVxdWVzdENvcmUoJ2NvbnRyYWN0cy5ydW4uZmVlLm1zZycsIHtcbiAgICAgICAgICAgIGFkZHJlc3M6IHBhcmFtcy5hZGRyZXNzLFxuICAgICAgICAgICAgYWNjb3VudCxcbiAgICAgICAgICAgIG1lc3NhZ2VCYXNlNjQ6IHBhcmFtcy5tZXNzYWdlLm1lc3NhZ2VCb2R5QmFzZTY0LFxuICAgICAgICB9KTtcbiAgICB9XG5cbiAgICAvLyBBZGRyZXNzIHByb2Nlc3NpbmdcblxuICAgIGFzeW5jIGNvbnZlcnRBZGRyZXNzKFxuICAgICAgICBwYXJhbXM6IFRPTkNvbnRyYWN0Q29udmVydEFkZHJlc3NQYXJhbXMsXG4gICAgKTogUHJvbWlzZTxUT05Db250cmFjdENvbnZlcnRBZGRyZXNzUmVzdWx0PiB7XG4gICAgICAgIHJldHVybiB0aGlzLnJlcXVlc3RDb3JlKCdjb250cmFjdHMuYWRkcmVzcy5jb252ZXJ0JywgcGFyYW1zKTtcbiAgICB9XG5cbiAgICAvLyBJbnRlcm5hbHNcblxuICAgIGFzeW5jIGludGVybmFsRGVwbG95TmF0aXZlKHBhcmFtczogVE9OQ29udHJhY3REZXBsb3lQYXJhbXMpOiBQcm9taXNlPFRPTkNvbnRyYWN0RGVwbG95UmVzdWx0PiB7XG4gICAgICAgIHJldHVybiB0aGlzLnJlcXVlc3RDb3JlKCdjb250cmFjdHMuZGVwbG95Jywge1xuICAgICAgICAgICAgYWJpOiBwYXJhbXMucGFja2FnZS5hYmksXG4gICAgICAgICAgICBjb25zdHJ1Y3RvckhlYWRlcjogcGFyYW1zLmNvbnN0cnVjdG9ySGVhZGVyLFxuICAgICAgICAgICAgY29uc3RydWN0b3JQYXJhbXM6IHBhcmFtcy5jb25zdHJ1Y3RvclBhcmFtcyxcbiAgICAgICAgICAgIGluaXRQYXJhbXM6IHBhcmFtcy5pbml0UGFyYW1zLFxuICAgICAgICAgICAgaW1hZ2VCYXNlNjQ6IHBhcmFtcy5wYWNrYWdlLmltYWdlQmFzZTY0LFxuICAgICAgICAgICAga2V5UGFpcjogcGFyYW1zLmtleVBhaXIsXG4gICAgICAgIH0pO1xuICAgIH1cblxuXG4gICAgYXN5bmMgaW50ZXJuYWxSdW5OYXRpdmUocGFyYW1zOiBUT05Db250cmFjdFJ1blBhcmFtcyk6IFByb21pc2U8VE9OQ29udHJhY3RSdW5SZXN1bHQ+IHtcbiAgICAgICAgcmV0dXJuIHRoaXMucmVxdWVzdENvcmUoJ2NvbnRyYWN0cy5ydW4nLCB7XG4gICAgICAgICAgICBhZGRyZXNzOiBwYXJhbXMuYWRkcmVzcyxcbiAgICAgICAgICAgIGFiaTogcGFyYW1zLmFiaSxcbiAgICAgICAgICAgIGZ1bmN0aW9uTmFtZTogcGFyYW1zLmZ1bmN0aW9uTmFtZSxcbiAgICAgICAgICAgIGhlYWRlcjogcGFyYW1zLmhlYWRlcixcbiAgICAgICAgICAgIGlucHV0OiBwYXJhbXMuaW5wdXQsXG4gICAgICAgICAgICBrZXlQYWlyOiBwYXJhbXMua2V5UGFpcixcbiAgICAgICAgfSk7XG4gICAgfVxuXG4gICAgbWFrZUV4cGlyZUhlYWRlcihcbiAgICAgICAgYWJpOiBUT05Db250cmFjdEFCSSxcbiAgICAgICAgdXNlckhlYWRlcj86IGFueSxcbiAgICAgICAgcmV0cnlJbmRleD86IG51bWJlcixcbiAgICApOiBhbnkge1xuICAgICAgICBjb25zdCB0aW1lb3V0ID0gdGhpcy5jb25maWcubWVzc2FnZUV4cGlyYXRpb25UaW1lb3V0KHJldHJ5SW5kZXgpO1xuICAgICAgICBpZiAoYWJpLmhlYWRlciAmJiBhYmkuaGVhZGVyLmluY2x1ZGVzKCdleHBpcmUnKSAmJiAhdXNlckhlYWRlcj8uZXhwaXJlKSB7XG4gICAgICAgICAgICByZXR1cm4ge1xuICAgICAgICAgICAgICAgIC4uLnVzZXJIZWFkZXIsXG4gICAgICAgICAgICAgICAgZXhwaXJlOiBNYXRoLmZsb29yKChEYXRlLm5vdygpICsgdGltZW91dCkgLyAxMDAwKSArIDEsXG4gICAgICAgICAgICB9O1xuICAgICAgICB9XG4gICAgICAgIHJldHVybiB1c2VySGVhZGVyO1xuICAgIH1cblxuICAgIGFzeW5jIHJldHJ5Q2FsbChjYWxsOiAoaW5kZXg6IG51bWJlcikgPT4gUHJvbWlzZTxhbnk+KTogUHJvbWlzZTxhbnk+IHtcbiAgICAgICAgY29uc3QgcmV0cmllc0NvdW50ID0gdGhpcy5jb25maWcubWVzc2FnZVJldHJpZXNDb3VudCgpO1xuICAgICAgICBmb3IgKGxldCBpID0gMDsgaSA8PSByZXRyaWVzQ291bnQ7IGkgKz0gMSkge1xuICAgICAgICAgICAgaWYgKGkgPiAwKSB7XG4gICAgICAgICAgICAgICAgdGhpcy5jb25maWcubG9nKGBSZXRyeSAjJHtpfWApO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgdHJ5IHtcbiAgICAgICAgICAgICAgICByZXR1cm4gYXdhaXQgY2FsbChpKTtcbiAgICAgICAgICAgIH0gY2F0Y2ggKGVycm9yKSB7XG4gICAgICAgICAgICAgICAgaWYgKCFUT05DbGllbnRFcnJvci5pc01lc3NhZ2VFeHBpcmVkKGVycm9yKSkge1xuICAgICAgICAgICAgICAgICAgICB0aHJvdyBlcnJvcjtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgICAgdGhyb3cgVE9OQ2xpZW50RXJyb3IubWVzc2FnZUV4cGlyZWQoKTtcbiAgICB9XG5cbiAgICBhc3luYyBpbnRlcm5hbERlcGxveUpzKFxuICAgICAgICBwYXJhbXM6IFRPTkNvbnRyYWN0RGVwbG95UGFyYW1zLFxuICAgICAgICBwYXJlbnRTcGFuPzogKFNwYW4gfCBTcGFuQ29udGV4dCksXG4gICAgKTogUHJvbWlzZTxUT05Db250cmFjdERlcGxveVJlc3VsdD4ge1xuICAgICAgICB0aGlzLmNvbmZpZy5sb2coJ0RlcGxveSBzdGFydCcpO1xuICAgICAgICByZXR1cm4gdGhpcy5yZXRyeUNhbGwoYXN5bmMgKHJldHJ5SW5kZXgpID0+IHtcbiAgICAgICAgICAgIGNvbnN0IGRlcGxveU1lc3NhZ2UgPSBhd2FpdCB0aGlzLmNyZWF0ZURlcGxveU1lc3NhZ2UocGFyYW1zLCByZXRyeUluZGV4KTtcbiAgICAgICAgICAgIGlmIChhd2FpdCB0aGlzLmlzRGVwbG95ZWQoZGVwbG95TWVzc2FnZS5hZGRyZXNzLCBwYXJlbnRTcGFuKSkge1xuICAgICAgICAgICAgICAgIHJldHVybiB7XG4gICAgICAgICAgICAgICAgICAgIGFkZHJlc3M6IGRlcGxveU1lc3NhZ2UuYWRkcmVzcyxcbiAgICAgICAgICAgICAgICAgICAgYWxyZWFkeURlcGxveWVkOiB0cnVlLFxuICAgICAgICAgICAgICAgIH07XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBhd2FpdCB0aGlzLnNlbmRNZXNzYWdlKGRlcGxveU1lc3NhZ2UubWVzc2FnZSwgcGFyZW50U3Bhbik7XG4gICAgICAgICAgICByZXR1cm4gdGhpcy53YWl0Rm9yRGVwbG95VHJhbnNhY3Rpb24oZGVwbG95TWVzc2FnZSwgcGFyZW50U3BhbiwgcmV0cnlJbmRleCk7XG4gICAgICAgIH0pO1xuICAgIH1cblxuXG4gICAgYXN5bmMgaW50ZXJuYWxSdW5KcyhcbiAgICAgICAgcGFyYW1zOiBUT05Db250cmFjdFJ1blBhcmFtcyxcbiAgICAgICAgcGFyZW50U3Bhbj86IChTcGFuIHwgU3BhbkNvbnRleHQpLFxuICAgICk6IFByb21pc2U8VE9OQ29udHJhY3RSdW5SZXN1bHQ+IHtcbiAgICAgICAgdGhpcy5jb25maWcubG9nKCdSdW4gc3RhcnQnKTtcbiAgICAgICAgcmV0dXJuIHRoaXMucmV0cnlDYWxsKGFzeW5jIChyZXRyeUluZGV4KSA9PiB7XG4gICAgICAgICAgICBjb25zdCBydW5NZXNzYWdlID0gYXdhaXQgdGhpcy5jcmVhdGVSdW5NZXNzYWdlKHBhcmFtcywgcmV0cnlJbmRleCk7XG4gICAgICAgICAgICBhd2FpdCB0aGlzLnNlbmRNZXNzYWdlKHJ1bk1lc3NhZ2UubWVzc2FnZSwgcGFyZW50U3Bhbik7XG4gICAgICAgICAgICByZXR1cm4gdGhpcy53YWl0Rm9yUnVuVHJhbnNhY3Rpb24ocnVuTWVzc2FnZSwgcGFyZW50U3BhbiwgcmV0cnlJbmRleCk7XG4gICAgICAgIH0pO1xuICAgIH1cblxuICAgIGFzeW5jIGdldEFjY291bnQoXG4gICAgICAgIGFkZHJlc3M6IHN0cmluZyxcbiAgICAgICAgYWN0aXZlOiBib29sZWFuLFxuICAgICAgICB3YWl0UGFyYW1zPzogVE9OQ29udHJhY3RBY2NvdW50V2FpdFBhcmFtcyxcbiAgICAgICAgcGFyZW50U3Bhbj86IChTcGFuIHwgU3BhbkNvbnRleHQpLFxuICAgICk6IFByb21pc2U8UUFjY291bnQ+IHtcbiAgICAgICAgZnVuY3Rpb24gcmVtb3ZlVHlwZU5hbWUob2JqOiBhbnkpIHtcbiAgICAgICAgICAgIGlmIChvYmouX190eXBlbmFtZSkge1xuICAgICAgICAgICAgICAgIGRlbGV0ZSBvYmouX190eXBlbmFtZTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIE9iamVjdC52YWx1ZXMob2JqKVxuICAgICAgICAgICAgICAgIC5mb3JFYWNoKCh2YWx1ZSkgPT4ge1xuICAgICAgICAgICAgICAgICAgICBpZiAoISF2YWx1ZSAmJiB0eXBlb2YgdmFsdWUgPT09ICdvYmplY3QnKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICByZW1vdmVUeXBlTmFtZSh2YWx1ZSk7XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICB9KTtcbiAgICAgICAgfVxuXG4gICAgICAgIGNvbnN0IGZpbHRlcjogeyBbc3RyaW5nXTogYW55IH0gPSB7XG4gICAgICAgICAgICBpZDogeyBlcTogYWRkcmVzcyB9LFxuICAgICAgICB9O1xuICAgICAgICBpZiAod2FpdFBhcmFtcyAmJiB3YWl0UGFyYW1zLnRyYW5zYWN0aW9uTHQpIHtcbiAgICAgICAgICAgIGZpbHRlci5sYXN0X3RyYW5zX2x0ID0geyBnZTogd2FpdFBhcmFtcy50cmFuc2FjdGlvbkx0IH07XG4gICAgICAgIH1cbiAgICAgICAgaWYgKGFjdGl2ZSkge1xuICAgICAgICAgICAgZmlsdGVyLmFjY190eXBlID0geyBlcTogUUFjY291bnRUeXBlLmFjdGl2ZSB9O1xuICAgICAgICB9XG5cbiAgICAgICAgdGhpcy5jb25maWcubG9nKCdnZXRBY2NvdW50LiBGaWx0ZXInLCBmaWx0ZXIpO1xuICAgICAgICBjb25zdCBhY2NvdW50ID0gYXdhaXQgdGhpcy5xdWVyaWVzLmFjY291bnRzLndhaXRGb3IoXG4gICAgICAgICAgICBmaWx0ZXIsXG4gICAgICAgICAgICAnaWQgY29kZSBkYXRhIGJhbGFuY2UgYmFsYW5jZV9vdGhlciB7IGN1cnJlbmN5IHZhbHVlIH0gbGFzdF9wYWlkJyxcbiAgICAgICAgICAgIHdhaXRQYXJhbXMgJiYgd2FpdFBhcmFtcy50aW1lb3V0LFxuICAgICAgICAgICAgcGFyZW50U3BhbixcbiAgICAgICAgKTtcblxuICAgICAgICByZW1vdmVUeXBlTmFtZShhY2NvdW50KTtcbiAgICAgICAgdGhpcy5jb25maWcubG9nKCdnZXRBY2NvdW50LiBBY2NvdW50IHJlY2VpdmVkJywgYWNjb3VudCk7XG4gICAgICAgIHJldHVybiBhY2NvdW50O1xuICAgIH1cblxuICAgIGFzeW5jIGludGVybmFsUnVuTG9jYWxKcyhcbiAgICAgICAgcGFyYW1zOiBUT05Db250cmFjdFJ1bkxvY2FsUGFyYW1zLFxuICAgICAgICBwYXJlbnRTcGFuPzogKFNwYW4gfCBTcGFuQ29udGV4dCksXG4gICAgKTogUHJvbWlzZTxUT05Db250cmFjdFJ1blJlc3VsdD4ge1xuICAgICAgICBjb25zdCBhY2NvdW50ID0gYXdhaXQgdGhpcy5nZXRBY2NvdW50KFxuICAgICAgICAgICAgcGFyYW1zLmFkZHJlc3MsXG4gICAgICAgICAgICB0cnVlLFxuICAgICAgICAgICAgcGFyYW1zLndhaXRQYXJhbXMsXG4gICAgICAgICAgICBwYXJlbnRTcGFuLFxuICAgICAgICApO1xuXG4gICAgICAgIHJldHVybiB0aGlzLnJlcXVlc3RDb3JlKCdjb250cmFjdHMucnVuLmxvY2FsJywge1xuICAgICAgICAgICAgYWRkcmVzczogcGFyYW1zLmFkZHJlc3MsXG4gICAgICAgICAgICBhY2NvdW50LFxuICAgICAgICAgICAgYWJpOiBwYXJhbXMuYWJpLFxuICAgICAgICAgICAgZnVuY3Rpb25OYW1lOiBwYXJhbXMuZnVuY3Rpb25OYW1lLFxuICAgICAgICAgICAgaW5wdXQ6IHBhcmFtcy5pbnB1dCxcbiAgICAgICAgICAgIGtleVBhaXI6IHBhcmFtcy5rZXlQYWlyLFxuICAgICAgICB9KTtcbiAgICB9XG59XG5cblRPTkNvbnRyYWN0c01vZHVsZS5tb2R1bGVOYW1lID0gJ1RPTkNvbnRyYWN0c01vZHVsZSc7XG5cbmFzeW5jIGZ1bmN0aW9uIGNoZWNrVHJhbnNhY3Rpb24odHJhbnNhY3Rpb246IFFUcmFuc2FjdGlvbikge1xuICAgIGlmICghdHJhbnNhY3Rpb24uYWJvcnRlZCkge1xuICAgICAgICByZXR1cm47XG4gICAgfVxuXG4gICAgZnVuY3Rpb24gbm9kZUVycm9yKG1lc3NhZ2U6IHN0cmluZywgY29kZTogbnVtYmVyLCBwaGFzZTogc3RyaW5nKSB7XG4gICAgICAgIGNvbnN0IFJFUExBWV9QUk9URUNUSU9OID0gNTI7XG4gICAgICAgIGNvbnN0IE1FU1NBR0VfRVhQSVJFRCA9IDU3O1xuICAgICAgICBjb25zdCBpc05vZGVTRU1lc3NhZ2VFeHBpcmVkID0gcGhhc2UgPT09IFRPTkNsaWVudFRyYW5zYWN0aW9uUGhhc2UuY29tcHV0ZVZtXG4gICAgICAgICAgICAmJiAoY29kZSA9PT0gTUVTU0FHRV9FWFBJUkVEIHx8IGNvZGUgPT09IFJFUExBWV9QUk9URUNUSU9OKTtcbiAgICAgICAgcmV0dXJuIGlzTm9kZVNFTWVzc2FnZUV4cGlyZWRcbiAgICAgICAgICAgID8gVE9OQ2xpZW50RXJyb3IubWVzc2FnZUV4cGlyZWQoKVxuICAgICAgICAgICAgOiBuZXcgVE9OQ2xpZW50RXJyb3IoXG4gICAgICAgICAgICAgICAgYCR7bWVzc2FnZX0gKCR7Y29kZX0pIGF0ICR7cGhhc2V9YCxcbiAgICAgICAgICAgICAgICBjb2RlLFxuICAgICAgICAgICAgICAgIFRPTkNsaWVudEVycm9yLnNvdXJjZS5OT0RFLFxuICAgICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICAgICAgcGhhc2UsXG4gICAgICAgICAgICAgICAgICAgIHRyYW5zYWN0aW9uX2lkOiB0cmFuc2FjdGlvbi5pZCxcbiAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgKTtcbiAgICB9XG5cbiAgICBjb25zdCBzdG9yYWdlID0gdHJhbnNhY3Rpb24uc3RvcmFnZTtcbiAgICBpZiAoc3RvcmFnZSkge1xuICAgICAgICBjb25zdCBzdGF0dXMgPSBzdG9yYWdlLnN0YXR1c19jaGFuZ2U7XG4gICAgICAgIGlmIChzdGF0dXMgPT09IFFBY2NvdW50U3RhdHVzQ2hhbmdlLmZyb3plbikge1xuICAgICAgICAgICAgdGhyb3cgbm9kZUVycm9yKFxuICAgICAgICAgICAgICAgICdBY2NvdW50IHdhcyBmcm96ZW4gZHVlIHN0b3JhZ2UgcGhhc2UnLFxuICAgICAgICAgICAgICAgIFRPTkNsaWVudFN0b3JhZ2VTdGF0dXMuZnJvemVuLFxuICAgICAgICAgICAgICAgIFRPTkNsaWVudFRyYW5zYWN0aW9uUGhhc2Uuc3RvcmFnZSxcbiAgICAgICAgICAgICk7XG4gICAgICAgIH1cbiAgICAgICAgaWYgKHN0YXR1cyA9PT0gUUFjY291bnRTdGF0dXNDaGFuZ2UuZGVsZXRlZCkge1xuICAgICAgICAgICAgdGhyb3cgbm9kZUVycm9yKFxuICAgICAgICAgICAgICAgICdBY2NvdW50IHdhcyBkZWxldGVkIGR1ZSBzdG9yYWdlIHBoYXNlJyxcbiAgICAgICAgICAgICAgICBUT05DbGllbnRTdG9yYWdlU3RhdHVzLmRlbGV0ZWQsXG4gICAgICAgICAgICAgICAgVE9OQ2xpZW50VHJhbnNhY3Rpb25QaGFzZS5zdG9yYWdlLFxuICAgICAgICAgICAgKTtcbiAgICAgICAgfVxuICAgIH1cblxuICAgIGNvbnN0IGNvbXB1dGUgPSB0cmFuc2FjdGlvbi5jb21wdXRlO1xuICAgIGlmIChjb21wdXRlKSB7XG4gICAgICAgIGlmIChjb21wdXRlLmNvbXB1dGVfdHlwZSA9PT0gUUNvbXB1dGVUeXBlLnNraXBwZWQpIHtcbiAgICAgICAgICAgIGNvbnN0IHJlYXNvbiA9IGNvbXB1dGUuc2tpcHBlZF9yZWFzb247XG4gICAgICAgICAgICBpZiAocmVhc29uID09PSBRU2tpcFJlYXNvbi5ub1N0YXRlKSB7XG4gICAgICAgICAgICAgICAgdGhyb3cgbm9kZUVycm9yKFxuICAgICAgICAgICAgICAgICAgICAnQWNjb3VudCBoYXMgbm8gY29kZSBhbmQgZGF0YScsXG4gICAgICAgICAgICAgICAgICAgIFRPTkNsaWVudENvbXB1dGVTa2lwcGVkU3RhdHVzLm5vU3RhdGUsXG4gICAgICAgICAgICAgICAgICAgIFRPTkNsaWVudFRyYW5zYWN0aW9uUGhhc2UuY29tcHV0ZVNraXBwZWQsXG4gICAgICAgICAgICAgICAgKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGlmIChyZWFzb24gPT09IFFTa2lwUmVhc29uLmJhZFN0YXRlKSB7XG4gICAgICAgICAgICAgICAgdGhyb3cgbm9kZUVycm9yKFxuICAgICAgICAgICAgICAgICAgICAnQWNjb3VudCBoYXMgYmFkIHN0YXRlOiBmcm96ZW4gb3IgZGVsZXRlZCcsXG4gICAgICAgICAgICAgICAgICAgIFRPTkNsaWVudENvbXB1dGVTa2lwcGVkU3RhdHVzLmJhZFN0YXRlLFxuICAgICAgICAgICAgICAgICAgICBUT05DbGllbnRUcmFuc2FjdGlvblBoYXNlLmNvbXB1dGVTa2lwcGVkLFxuICAgICAgICAgICAgICAgICk7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBpZiAocmVhc29uID09PSBRU2tpcFJlYXNvbi5ub0dhcykge1xuICAgICAgICAgICAgICAgIHRocm93IG5vZGVFcnJvcihcbiAgICAgICAgICAgICAgICAgICAgJ05vIGdhcyB0byBleGVjdXRlIFZNJyxcbiAgICAgICAgICAgICAgICAgICAgVE9OQ2xpZW50Q29tcHV0ZVNraXBwZWRTdGF0dXMubm9HYXMsXG4gICAgICAgICAgICAgICAgICAgIFRPTkNsaWVudFRyYW5zYWN0aW9uUGhhc2UuY29tcHV0ZVNraXBwZWQsXG4gICAgICAgICAgICAgICAgKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIHRocm93IG5vZGVFcnJvcihcbiAgICAgICAgICAgICAgICAnQ29tcHV0ZSBwaGFzZSBza2lwcGVkIGJ5IHVua25vd24gcmVhc29uJyxcbiAgICAgICAgICAgICAgICAtMSxcbiAgICAgICAgICAgICAgICBUT05DbGllbnRUcmFuc2FjdGlvblBoYXNlLmNvbXB1dGVTa2lwcGVkLFxuICAgICAgICAgICAgKTtcbiAgICAgICAgfVxuICAgICAgICBpZiAoY29tcHV0ZS5jb21wdXRlX3R5cGUgPT09IFFDb21wdXRlVHlwZS52bSkge1xuICAgICAgICAgICAgaWYgKCFjb21wdXRlLnN1Y2Nlc3MpIHtcbiAgICAgICAgICAgICAgICB0aHJvdyBub2RlRXJyb3IoXG4gICAgICAgICAgICAgICAgICAgICdWTSB0ZXJtaW5hdGVkIHdpdGggZXhjZXB0aW9uJyxcbiAgICAgICAgICAgICAgICAgICAgY29tcHV0ZS5leGl0X2NvZGUgfHwgMCxcbiAgICAgICAgICAgICAgICAgICAgVE9OQ2xpZW50VHJhbnNhY3Rpb25QaGFzZS5jb21wdXRlVm0sXG4gICAgICAgICAgICAgICAgKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgIH1cblxuICAgIGNvbnN0IGFjdGlvbiA9IHRyYW5zYWN0aW9uLmFjdGlvbjtcbiAgICBpZiAoYWN0aW9uKSB7XG4gICAgICAgIGlmICghYWN0aW9uLnN1Y2Nlc3MpIHtcbiAgICAgICAgICAgIHRocm93IG5vZGVFcnJvcihcbiAgICAgICAgICAgICAgICBhY3Rpb24ubm9fZnVuZHNcbiAgICAgICAgICAgICAgICAgICAgPyAnVG9vIGxvdyBiYWxhbmNlIHRvIHNlbmQgb3V0Ym91bmQgbWVzc2FnZSdcbiAgICAgICAgICAgICAgICAgICAgOiAoIWFjdGlvbi52YWxpZCA/ICdPdXRib3VuZCBtZXNzYWdlIGlzIGludmFsaWQnIDogJ0FjdGlvbiBwaGFzZSBmYWlsZWQnKSxcbiAgICAgICAgICAgICAgICBhY3Rpb24ucmVzdWx0X2NvZGUgfHwgMCxcbiAgICAgICAgICAgICAgICBUT05DbGllbnRUcmFuc2FjdGlvblBoYXNlLmFjdGlvbixcbiAgICAgICAgICAgICk7XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICB0aHJvdyBub2RlRXJyb3IoXG4gICAgICAgICdUcmFuc2FjdGlvbiBhYm9ydGVkJyxcbiAgICAgICAgLTEsXG4gICAgICAgIFRPTkNsaWVudFRyYW5zYWN0aW9uUGhhc2UudW5rbm93bixcbiAgICApO1xufVxuXG5jb25zdCB0cmFuc2FjdGlvbkRldGFpbHMgPSBgXG4gICAgaWRcbiAgICBpbl9tc2dcbiAgICB0cl90eXBlXG4gICAgc3RhdHVzXG4gICAgaW5fbXNnXG4gICAgb3V0X21zZ3NcbiAgICBibG9ja19pZFxuICAgIG5vd1xuICAgIGFib3J0ZWRcbiAgICBsdFxuICAgIHN0b3JhZ2Uge1xuICAgICAgICBzdGF0dXNfY2hhbmdlXG4gICAgfVxuICAgIGNvbXB1dGUge1xuICAgICAgICBjb21wdXRlX3R5cGVcbiAgICAgICAgc2tpcHBlZF9yZWFzb25cbiAgICAgICAgc3VjY2Vzc1xuICAgICAgICBleGl0X2NvZGVcbiAgICAgICAgZ2FzX2ZlZXNcbiAgICAgICAgZ2FzX3VzZWRcbiAgICB9XG4gICAgYWN0aW9uIHtcbiAgICAgICAgc3VjY2Vzc1xuICAgICAgICB2YWxpZFxuICAgICAgICByZXN1bHRfY29kZVxuICAgICAgICBub19mdW5kc1xuICAgIH1cbiAgICBvdXRfbWVzc2FnZXMge1xuICAgICAgICBpZFxuICAgICAgICBtc2dfdHlwZVxuICAgICAgICBib2R5XG4gICAgfVxuICAgYDtcbiJdfQ==