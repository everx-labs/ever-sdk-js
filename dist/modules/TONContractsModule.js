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

var _possibleConstructorReturn2 = _interopRequireDefault(require("@babel/runtime/helpers/possibleConstructorReturn"));

var _getPrototypeOf2 = _interopRequireDefault(require("@babel/runtime/helpers/getPrototypeOf"));

var _inherits2 = _interopRequireDefault(require("@babel/runtime/helpers/inherits"));

var _defineProperty2 = _interopRequireDefault(require("@babel/runtime/helpers/defineProperty"));

var _opentracing = require("opentracing");

var _TONClient = require("../TONClient");

var _TONModule2 = require("../TONModule");

var _TONConfigModule = _interopRequireDefault(require("./TONConfigModule"));

var _TONQueriesModule = _interopRequireDefault(require("./TONQueriesModule"));

function _createSuper(Derived) { return function () { var Super = (0, _getPrototypeOf2["default"])(Derived), result; if (_isNativeReflectConstruct()) { var NewTarget = (0, _getPrototypeOf2["default"])(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return (0, _possibleConstructorReturn2["default"])(this, result); }; }

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
          result = _objectSpread({}, result, (0, _defineProperty2["default"])({}, name, reducedChild));
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
    }() // Message creation

  }, {
    key: "createDeployMessage",
    value: function () {
      var _createDeployMessage = (0, _asyncToGenerator2["default"])( /*#__PURE__*/_regenerator["default"].mark(function _callee9(params, retryIndex) {
        var constructorHeader, message;
        return _regenerator["default"].wrap(function _callee9$(_context9) {
          while (1) {
            switch (_context9.prev = _context9.next) {
              case 0:
                this.config.log('createDeployMessage', params);
                constructorHeader = this.makeExpireHeader(params["package"].abi, params.constructorHeader, retryIndex);
                _context9.next = 4;
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
                message = _context9.sent;
                return _context9.abrupt("return", {
                  message: {
                    messageId: message.messageId,
                    messageBodyBase64: message.messageBodyBase64,
                    expire: constructorHeader === null || constructorHeader === void 0 ? void 0 : constructorHeader.expire
                  },
                  address: message.address
                });

              case 6:
              case "end":
                return _context9.stop();
            }
          }
        }, _callee9, this);
      }));

      function createDeployMessage(_x12, _x13) {
        return _createDeployMessage.apply(this, arguments);
      }

      return createDeployMessage;
    }()
  }, {
    key: "createRunMessage",
    value: function () {
      var _createRunMessage = (0, _asyncToGenerator2["default"])( /*#__PURE__*/_regenerator["default"].mark(function _callee10(params, retryIndex) {
        var header, message;
        return _regenerator["default"].wrap(function _callee10$(_context10) {
          while (1) {
            switch (_context10.prev = _context10.next) {
              case 0:
                this.config.log('createRunMessage', params);
                header = this.makeExpireHeader(params.abi, params.header, retryIndex);
                _context10.next = 4;
                return this.requestCore('contracts.run.message', {
                  address: params.address,
                  abi: params.abi,
                  functionName: params.functionName,
                  header: header,
                  input: params.input,
                  keyPair: params.keyPair
                });

              case 4:
                message = _context10.sent;
                message.expire = header === null || header === void 0 ? void 0 : header.expire;
                return _context10.abrupt("return", {
                  address: params.address,
                  abi: params.abi,
                  functionName: params.functionName,
                  message: message
                });

              case 7:
              case "end":
                return _context10.stop();
            }
          }
        }, _callee10, this);
      }));

      function createRunMessage(_x14, _x15) {
        return _createRunMessage.apply(this, arguments);
      }

      return createRunMessage;
    }()
  }, {
    key: "createUnsignedDeployMessage",
    value: function () {
      var _createUnsignedDeployMessage = (0, _asyncToGenerator2["default"])( /*#__PURE__*/_regenerator["default"].mark(function _callee11(params, retryIndex) {
        var constructorHeader, result;
        return _regenerator["default"].wrap(function _callee11$(_context11) {
          while (1) {
            switch (_context11.prev = _context11.next) {
              case 0:
                constructorHeader = this.makeExpireHeader(params["package"].abi, params.constructorHeader, retryIndex);
                _context11.next = 3;
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
                result = _context11.sent;
                return _context11.abrupt("return", {
                  address: result.addressHex,
                  signParams: _objectSpread({}, result.encoded, {
                    abi: params["package"].abi,
                    expire: constructorHeader === null || constructorHeader === void 0 ? void 0 : constructorHeader.expire
                  })
                });

              case 5:
              case "end":
                return _context11.stop();
            }
          }
        }, _callee11, this);
      }));

      function createUnsignedDeployMessage(_x16, _x17) {
        return _createUnsignedDeployMessage.apply(this, arguments);
      }

      return createUnsignedDeployMessage;
    }()
  }, {
    key: "createUnsignedRunMessage",
    value: function () {
      var _createUnsignedRunMessage = (0, _asyncToGenerator2["default"])( /*#__PURE__*/_regenerator["default"].mark(function _callee12(params, retryIndex) {
        var header, signParams;
        return _regenerator["default"].wrap(function _callee12$(_context12) {
          while (1) {
            switch (_context12.prev = _context12.next) {
              case 0:
                header = this.makeExpireHeader(params.abi, params.header, retryIndex);
                _context12.next = 3;
                return this.requestCore('contracts.run.encode_unsigned_message', {
                  address: params.address,
                  abi: params.abi,
                  functionName: params.functionName,
                  header: header,
                  input: params.input
                });

              case 3:
                signParams = _context12.sent;
                return _context12.abrupt("return", {
                  address: params.address,
                  functionName: params.functionName,
                  signParams: _objectSpread({}, signParams, {
                    abi: params.abi,
                    expire: header === null || header === void 0 ? void 0 : header.expire
                  })
                });

              case 5:
              case "end":
                return _context12.stop();
            }
          }
        }, _callee12, this);
      }));

      function createUnsignedRunMessage(_x18, _x19) {
        return _createUnsignedRunMessage.apply(this, arguments);
      }

      return createUnsignedRunMessage;
    }()
  }, {
    key: "createSignedMessage",
    value: function () {
      var _createSignedMessage = (0, _asyncToGenerator2["default"])( /*#__PURE__*/_regenerator["default"].mark(function _callee13(params) {
        return _regenerator["default"].wrap(function _callee13$(_context13) {
          while (1) {
            switch (_context13.prev = _context13.next) {
              case 0:
                return _context13.abrupt("return", this.requestCore('contracts.encode_message_with_sign', params));

              case 1:
              case "end":
                return _context13.stop();
            }
          }
        }, _callee13, this);
      }));

      function createSignedMessage(_x20) {
        return _createSignedMessage.apply(this, arguments);
      }

      return createSignedMessage;
    }()
  }, {
    key: "createSignedDeployMessage",
    value: function () {
      var _createSignedDeployMessage = (0, _asyncToGenerator2["default"])( /*#__PURE__*/_regenerator["default"].mark(function _callee14(params) {
        var message;
        return _regenerator["default"].wrap(function _callee14$(_context14) {
          while (1) {
            switch (_context14.prev = _context14.next) {
              case 0:
                _context14.next = 2;
                return this.createSignedMessage({
                  abi: params.unsignedMessage.signParams.abi,
                  unsignedBytesBase64: params.unsignedMessage.signParams.unsignedBytesBase64,
                  signBytesBase64: params.signBytesBase64,
                  publicKeyHex: params.publicKeyHex
                });

              case 2:
                message = _context14.sent;
                message.expire = params.unsignedMessage.signParams.expire;
                return _context14.abrupt("return", {
                  address: params.unsignedMessage.address,
                  message: message
                });

              case 5:
              case "end":
                return _context14.stop();
            }
          }
        }, _callee14, this);
      }));

      function createSignedDeployMessage(_x21) {
        return _createSignedDeployMessage.apply(this, arguments);
      }

      return createSignedDeployMessage;
    }()
  }, {
    key: "createSignedRunMessage",
    value: function () {
      var _createSignedRunMessage = (0, _asyncToGenerator2["default"])( /*#__PURE__*/_regenerator["default"].mark(function _callee15(params) {
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
                  abi: params.unsignedMessage.signParams.abi,
                  functionName: params.unsignedMessage.functionName,
                  message: message
                });

              case 5:
              case "end":
                return _context15.stop();
            }
          }
        }, _callee15, this);
      }));

      function createSignedRunMessage(_x22) {
        return _createSignedRunMessage.apply(this, arguments);
      }

      return createSignedRunMessage;
    }()
  }, {
    key: "getCodeFromImage",
    value: function () {
      var _getCodeFromImage = (0, _asyncToGenerator2["default"])( /*#__PURE__*/_regenerator["default"].mark(function _callee16(params) {
        return _regenerator["default"].wrap(function _callee16$(_context16) {
          while (1) {
            switch (_context16.prev = _context16.next) {
              case 0:
                return _context16.abrupt("return", this.requestCore('contracts.image.code', params));

              case 1:
              case "end":
                return _context16.stop();
            }
          }
        }, _callee16, this);
      }));

      function getCodeFromImage(_x23) {
        return _getCodeFromImage.apply(this, arguments);
      }

      return getCodeFromImage;
    }()
  }, {
    key: "getDeployData",
    value: function () {
      var _getDeployData = (0, _asyncToGenerator2["default"])( /*#__PURE__*/_regenerator["default"].mark(function _callee17(params) {
        return _regenerator["default"].wrap(function _callee17$(_context17) {
          while (1) {
            switch (_context17.prev = _context17.next) {
              case 0:
                return _context17.abrupt("return", this.requestCore('contracts.deploy.data', params));

              case 1:
              case "end":
                return _context17.stop();
            }
          }
        }, _callee17, this);
      }));

      function getDeployData(_x24) {
        return _getDeployData.apply(this, arguments);
      }

      return getDeployData;
    }()
  }, {
    key: "createRunBody",
    value: function () {
      var _createRunBody = (0, _asyncToGenerator2["default"])( /*#__PURE__*/_regenerator["default"].mark(function _callee18(params) {
        return _regenerator["default"].wrap(function _callee18$(_context18) {
          while (1) {
            switch (_context18.prev = _context18.next) {
              case 0:
                return _context18.abrupt("return", this.requestCore('contracts.run.body', params));

              case 1:
              case "end":
                return _context18.stop();
            }
          }
        }, _callee18, this);
      }));

      function createRunBody(_x25) {
        return _createRunBody.apply(this, arguments);
      }

      return createRunBody;
    }()
  }, {
    key: "getFunctionId",
    value: function () {
      var _getFunctionId = (0, _asyncToGenerator2["default"])( /*#__PURE__*/_regenerator["default"].mark(function _callee19(params) {
        return _regenerator["default"].wrap(function _callee19$(_context19) {
          while (1) {
            switch (_context19.prev = _context19.next) {
              case 0:
                return _context19.abrupt("return", this.requestCore('contracts.function.id', params));

              case 1:
              case "end":
                return _context19.stop();
            }
          }
        }, _callee19, this);
      }));

      function getFunctionId(_x26) {
        return _getFunctionId.apply(this, arguments);
      }

      return getFunctionId;
    }()
  }, {
    key: "getBocHash",
    value: function () {
      var _getBocHash = (0, _asyncToGenerator2["default"])( /*#__PURE__*/_regenerator["default"].mark(function _callee20(params) {
        return _regenerator["default"].wrap(function _callee20$(_context20) {
          while (1) {
            switch (_context20.prev = _context20.next) {
              case 0:
                return _context20.abrupt("return", this.requestCore('contracts.boc.hash', params));

              case 1:
              case "end":
                return _context20.stop();
            }
          }
        }, _callee20, this);
      }));

      function getBocHash(_x27) {
        return _getBocHash.apply(this, arguments);
      }

      return getBocHash;
    }()
  }, {
    key: "parseMessage",
    value: function () {
      var _parseMessage = (0, _asyncToGenerator2["default"])( /*#__PURE__*/_regenerator["default"].mark(function _callee21(params) {
        return _regenerator["default"].wrap(function _callee21$(_context21) {
          while (1) {
            switch (_context21.prev = _context21.next) {
              case 0:
                return _context21.abrupt("return", this.requestCore('contracts.parse.message', params));

              case 1:
              case "end":
                return _context21.stop();
            }
          }
        }, _callee21, this);
      }));

      function parseMessage(_x28) {
        return _parseMessage.apply(this, arguments);
      }

      return parseMessage;
    }() // Message parsing

  }, {
    key: "decodeRunOutput",
    value: function () {
      var _decodeRunOutput = (0, _asyncToGenerator2["default"])( /*#__PURE__*/_regenerator["default"].mark(function _callee22(params) {
        return _regenerator["default"].wrap(function _callee22$(_context22) {
          while (1) {
            switch (_context22.prev = _context22.next) {
              case 0:
                return _context22.abrupt("return", this.requestCore('contracts.run.output', params));

              case 1:
              case "end":
                return _context22.stop();
            }
          }
        }, _callee22, this);
      }));

      function decodeRunOutput(_x29) {
        return _decodeRunOutput.apply(this, arguments);
      }

      return decodeRunOutput;
    }()
  }, {
    key: "decodeInputMessageBody",
    value: function () {
      var _decodeInputMessageBody = (0, _asyncToGenerator2["default"])( /*#__PURE__*/_regenerator["default"].mark(function _callee23(params) {
        return _regenerator["default"].wrap(function _callee23$(_context23) {
          while (1) {
            switch (_context23.prev = _context23.next) {
              case 0:
                return _context23.abrupt("return", this.requestCore('contracts.run.unknown.input', params));

              case 1:
              case "end":
                return _context23.stop();
            }
          }
        }, _callee23, this);
      }));

      function decodeInputMessageBody(_x30) {
        return _decodeInputMessageBody.apply(this, arguments);
      }

      return decodeInputMessageBody;
    }()
  }, {
    key: "decodeOutputMessageBody",
    value: function () {
      var _decodeOutputMessageBody = (0, _asyncToGenerator2["default"])( /*#__PURE__*/_regenerator["default"].mark(function _callee24(params) {
        return _regenerator["default"].wrap(function _callee24$(_context24) {
          while (1) {
            switch (_context24.prev = _context24.next) {
              case 0:
                return _context24.abrupt("return", this.requestCore('contracts.run.unknown.output', params));

              case 1:
              case "end":
                return _context24.stop();
            }
          }
        }, _callee24, this);
      }));

      function decodeOutputMessageBody(_x31) {
        return _decodeOutputMessageBody.apply(this, arguments);
      }

      return decodeOutputMessageBody;
    }() // Message processing

  }, {
    key: "sendMessage",
    value: function () {
      var _sendMessage = (0, _asyncToGenerator2["default"])( /*#__PURE__*/_regenerator["default"].mark(function _callee25(params, parentSpan) {
        var id, idBase64;
        return _regenerator["default"].wrap(function _callee25$(_context25) {
          while (1) {
            switch (_context25.prev = _context25.next) {
              case 0:
                _context25.t0 = params.messageId;

                if (_context25.t0) {
                  _context25.next = 5;
                  break;
                }

                _context25.next = 4;
                return this.getBocHash({
                  bocBase64: params.messageBodyBase64
                });

              case 4:
                _context25.t0 = _context25.sent.hash;

              case 5:
                id = _context25.t0;
                idBase64 = Buffer.from(id, 'hex').toString('base64');
                _context25.next = 9;
                return this.queries.postRequests([{
                  id: idBase64,
                  body: params.messageBodyBase64
                }], parentSpan);

              case 9:
                this.config.log('sendMessage. Request posted');
                return _context25.abrupt("return", id);

              case 11:
              case "end":
                return _context25.stop();
            }
          }
        }, _callee25, this);
      }));

      function sendMessage(_x32, _x33) {
        return _sendMessage.apply(this, arguments);
      }

      return sendMessage;
    }()
  }, {
    key: "processMessage",
    value: function () {
      var _processMessage = (0, _asyncToGenerator2["default"])( /*#__PURE__*/_regenerator["default"].mark(function _callee28(message, resultFields, parentSpan, retryIndex) {
        var _this5 = this;

        var config, messageId, processingTimeout, promises, transactionFound, expire, waitExpired, transaction, transactionNow;
        return _regenerator["default"].wrap(function _callee28$(_context28) {
          while (1) {
            switch (_context28.prev = _context28.next) {
              case 0:
                config = this.config;
                _context28.next = 3;
                return this.sendMessage(message, parentSpan);

              case 3:
                messageId = _context28.sent;
                processingTimeout = config.messageProcessingTimeout(retryIndex);
                promises = [];
                transactionFound = false;

                if (!message.expire) {
                  _context28.next = 14;
                  break;
                }

                expire = message.expire;

                if (!(Date.now() > expire * 1000)) {
                  _context28.next = 11;
                  break;
                }

                throw _TONClient.TONClientError.sendNodeRequestFailed('Message already expired');

              case 11:
                // calculate timeout according to `expire` value (in seconds)
                // add processing timeout as master block validation time
                processingTimeout = expire * 1000 - Date.now() + processingTimeout;

                waitExpired = /*#__PURE__*/function () {
                  var _ref4 = (0, _asyncToGenerator2["default"])( /*#__PURE__*/_regenerator["default"].mark(function _callee26() {
                    var _block$in_msg_descr$f;

                    var block, transaction_id;
                    return _regenerator["default"].wrap(function _callee26$(_context26) {
                      while (1) {
                        switch (_context26.prev = _context26.next) {
                          case 0:
                            _context26.next = 2;
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
                              parentSpan: parentSpan
                            });

                          case 2:
                            block = _context26.sent;

                            if (!transactionFound) {
                              _context26.next = 5;
                              break;
                            }

                            return _context26.abrupt("return", {});

                          case 5:
                            transaction_id = block.in_msg_descr && ((_block$in_msg_descr$f = block.in_msg_descr.find(function (msg) {
                              return !!msg.transaction_id;
                            })) === null || _block$in_msg_descr$f === void 0 ? void 0 : _block$in_msg_descr$f.transaction_id);

                            if (transaction_id) {
                              _context26.next = 8;
                              break;
                            }

                            throw _TONClient.TONClientError.internalError('Invalid block received: no transaction ID');

                          case 8:
                            return _context26.abrupt("return", _this5.queries.transactions.waitFor({
                              filter: {
                                id: {
                                  eq: transaction_id
                                }
                              },
                              result: 'id',
                              timeout: processingTimeout,
                              parentSpan: parentSpan
                            }));

                          case 9:
                          case "end":
                            return _context26.stop();
                        }
                      }
                    }, _callee26);
                  }));

                  return function waitExpired() {
                    return _ref4.apply(this, arguments);
                  };
                }();

                promises.push(waitExpired());

              case 14:
                // wait for message processing transaction
                promises.push(new Promise(function (resolve, reject) {
                  (0, _asyncToGenerator2["default"])( /*#__PURE__*/_regenerator["default"].mark(function _callee27() {
                    var tr;
                    return _regenerator["default"].wrap(function _callee27$(_context27) {
                      while (1) {
                        switch (_context27.prev = _context27.next) {
                          case 0:
                            _context27.prev = 0;
                            _context27.next = 3;
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
                              parentSpan: parentSpan
                            });

                          case 3:
                            tr = _context27.sent;
                            transactionFound = true;
                            resolve(tr);
                            _context27.next = 11;
                            break;

                          case 8:
                            _context27.prev = 8;
                            _context27.t0 = _context27["catch"](0);
                            reject(_context27.t0);

                          case 11:
                          case "end":
                            return _context27.stop();
                        }
                      }
                    }, _callee27, null, [[0, 8]]);
                  }))();
                }));
                _context28.next = 17;
                return Promise.race(promises);

              case 17:
                transaction = _context28.sent;

                if (transactionFound) {
                  _context28.next = 20;
                  break;
                }

                throw _TONClient.TONClientError.messageExpired();

              case 20:
                transactionNow = transaction.now || 0;
                this.config.log('processMessage. transaction received', {
                  id: transaction.id,
                  block_id: transaction.block_id,
                  now: "".concat(new Date(transactionNow * 1000).toISOString(), " (").concat(transactionNow, ")")
                });
                return _context28.abrupt("return", transaction);

              case 23:
              case "end":
                return _context28.stop();
            }
          }
        }, _callee28, this);
      }));

      function processMessage(_x34, _x35, _x36, _x37) {
        return _processMessage.apply(this, arguments);
      }

      return processMessage;
    }()
  }, {
    key: "processDeployMessage",
    value: function () {
      var _processDeployMessage = (0, _asyncToGenerator2["default"])( /*#__PURE__*/_regenerator["default"].mark(function _callee29(params, parentSpan, retryIndex) {
        var account, transaction;
        return _regenerator["default"].wrap(function _callee29$(_context29) {
          while (1) {
            switch (_context29.prev = _context29.next) {
              case 0:
                this.config.log('processDeployMessage', params); // check that account is already deployed

                _context29.next = 3;
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
                account = _context29.sent;

                if (!(account.length > 0)) {
                  _context29.next = 6;
                  break;
                }

                return _context29.abrupt("return", {
                  address: params.address,
                  alreadyDeployed: true
                });

              case 6:
                _context29.next = 8;
                return this.processMessage(params.message, transactionDetails, parentSpan, retryIndex);

              case 8:
                transaction = _context29.sent;
                _context29.next = 11;
                return checkTransaction(transaction);

              case 11:
                this.config.log('processDeployMessage. End');
                return _context29.abrupt("return", {
                  address: params.address,
                  alreadyDeployed: false,
                  transaction: transaction
                });

              case 13:
              case "end":
                return _context29.stop();
            }
          }
        }, _callee29, this);
      }));

      function processDeployMessage(_x38, _x39, _x40) {
        return _processDeployMessage.apply(this, arguments);
      }

      return processDeployMessage;
    }()
  }, {
    key: "processRunMessage",
    value: function () {
      var _processRunMessage = (0, _asyncToGenerator2["default"])( /*#__PURE__*/_regenerator["default"].mark(function _callee30(params, parentSpan, retryIndex) {
        var _this6 = this;

        var transaction, outputMessages, externalMessages, outputs, resultOutput;
        return _regenerator["default"].wrap(function _callee30$(_context30) {
          while (1) {
            switch (_context30.prev = _context30.next) {
              case 0:
                this.config.log('processRunMessage', params);
                _context30.next = 3;
                return this.processMessage(params.message, transactionDetails, parentSpan, retryIndex);

              case 3:
                transaction = _context30.sent;
                _context30.next = 6;
                return checkTransaction(transaction);

              case 6:
                outputMessages = transaction.out_messages;

                if (!(!outputMessages || outputMessages.length === 0)) {
                  _context30.next = 9;
                  break;
                }

                return _context30.abrupt("return", {
                  output: null,
                  transaction: transaction
                });

              case 9:
                externalMessages = outputMessages.filter(function (x) {
                  return x.msg_type === QMessageType.extOut;
                });
                this.config.log('processRunMessage. Before messages parse');
                _context30.next = 13;
                return Promise.all(externalMessages.map(function (x) {
                  return _this6.decodeOutputMessageBody({
                    abi: params.abi,
                    bodyBase64: x.body || ''
                  });
                }));

              case 13:
                outputs = _context30.sent;
                resultOutput = outputs.find(function (x) {
                  return x["function"].toLowerCase() === params.functionName.toLowerCase();
                });
                this.config.log('processRunMessage. End');
                return _context30.abrupt("return", {
                  output: resultOutput ? resultOutput.output : null,
                  transaction: transaction
                });

              case 17:
              case "end":
                return _context30.stop();
            }
          }
        }, _callee30, this);
      }));

      function processRunMessage(_x41, _x42, _x43) {
        return _processRunMessage.apply(this, arguments);
      }

      return processRunMessage;
    }()
  }, {
    key: "processRunMessageLocal",
    value: function () {
      var _processRunMessageLocal = (0, _asyncToGenerator2["default"])( /*#__PURE__*/_regenerator["default"].mark(function _callee31(params, waitParams, parentSpan) {
        var account;
        return _regenerator["default"].wrap(function _callee31$(_context31) {
          while (1) {
            switch (_context31.prev = _context31.next) {
              case 0:
                this.config.log('processRunMessageLocal', params);
                _context31.next = 3;
                return this.getAccount(params.address, true, waitParams, parentSpan);

              case 3:
                account = _context31.sent;
                return _context31.abrupt("return", this.requestCore('contracts.run.local.msg', {
                  address: params.address,
                  account: account,
                  abi: params.abi,
                  functionName: params.functionName,
                  messageBase64: params.message.messageBodyBase64
                }));

              case 5:
              case "end":
                return _context31.stop();
            }
          }
        }, _callee31, this);
      }));

      function processRunMessageLocal(_x44, _x45, _x46) {
        return _processRunMessageLocal.apply(this, arguments);
      }

      return processRunMessageLocal;
    }() // Fee calculation

  }, {
    key: "calcRunFees",
    value: function () {
      var _calcRunFees = (0, _asyncToGenerator2["default"])( /*#__PURE__*/_regenerator["default"].mark(function _callee32(params, parentSpan) {
        var account;
        return _regenerator["default"].wrap(function _callee32$(_context32) {
          while (1) {
            switch (_context32.prev = _context32.next) {
              case 0:
                this.config.log('calcRunFees', params);
                _context32.next = 3;
                return this.getAccount(params.address, true, params.waitParams, parentSpan);

              case 3:
                account = _context32.sent;

                if (params.emulateBalance) {
                  account.balance = this.bigBalance;
                }

                return _context32.abrupt("return", this.requestCore('contracts.run.fee', {
                  address: params.address,
                  account: account,
                  abi: params.abi,
                  functionName: params.functionName,
                  input: params.input,
                  keyPair: params.keyPair
                }));

              case 6:
              case "end":
                return _context32.stop();
            }
          }
        }, _callee32, this);
      }));

      function calcRunFees(_x47, _x48) {
        return _calcRunFees.apply(this, arguments);
      }

      return calcRunFees;
    }()
  }, {
    key: "calcDeployFees",
    value: function () {
      var _calcDeployFees = (0, _asyncToGenerator2["default"])( /*#__PURE__*/_regenerator["default"].mark(function _callee33(params, parentSpan) {
        var message;
        return _regenerator["default"].wrap(function _callee33$(_context33) {
          while (1) {
            switch (_context33.prev = _context33.next) {
              case 0:
                this.config.log('calcDeployFees', params);
                _context33.next = 3;
                return this.createDeployMessage(params);

              case 3:
                message = _context33.sent;
                return _context33.abrupt("return", this.calcMsgProcessFees({
                  address: message.address,
                  message: message.message,
                  emulateBalance: params.emulateBalance,
                  newAccount: params.newAccount
                }, parentSpan));

              case 5:
              case "end":
                return _context33.stop();
            }
          }
        }, _callee33, this);
      }));

      function calcDeployFees(_x49, _x50) {
        return _calcDeployFees.apply(this, arguments);
      }

      return calcDeployFees;
    }()
  }, {
    key: "calcMsgProcessFees",
    value: function () {
      var _calcMsgProcessFees = (0, _asyncToGenerator2["default"])( /*#__PURE__*/_regenerator["default"].mark(function _callee34(params, parentSpan) {
        var account;
        return _regenerator["default"].wrap(function _callee34$(_context34) {
          while (1) {
            switch (_context34.prev = _context34.next) {
              case 0:
                this.config.log('calcMsgProcessFees', params);
                account = {
                  balance: this.bigBalance,
                  id: params.address,
                  last_paid: Math.floor(Date.now() / 1000)
                };

                if (params.newAccount) {
                  _context34.next = 6;
                  break;
                }

                _context34.next = 5;
                return this.getAccount(params.address, false, params.waitParams, parentSpan);

              case 5:
                account = _context34.sent;

              case 6:
                if (params.emulateBalance) {
                  account.balance = this.bigBalance;
                }

                return _context34.abrupt("return", this.requestCore('contracts.run.fee.msg', {
                  address: params.address,
                  account: account,
                  messageBase64: params.message.messageBodyBase64
                }));

              case 8:
              case "end":
                return _context34.stop();
            }
          }
        }, _callee34, this);
      }));

      function calcMsgProcessFees(_x51, _x52) {
        return _calcMsgProcessFees.apply(this, arguments);
      }

      return calcMsgProcessFees;
    }() // Address processing

  }, {
    key: "convertAddress",
    value: function () {
      var _convertAddress = (0, _asyncToGenerator2["default"])( /*#__PURE__*/_regenerator["default"].mark(function _callee35(params) {
        return _regenerator["default"].wrap(function _callee35$(_context35) {
          while (1) {
            switch (_context35.prev = _context35.next) {
              case 0:
                return _context35.abrupt("return", this.requestCore('contracts.address.convert', params));

              case 1:
              case "end":
                return _context35.stop();
            }
          }
        }, _callee35, this);
      }));

      function convertAddress(_x53) {
        return _convertAddress.apply(this, arguments);
      }

      return convertAddress;
    }() // Internals

  }, {
    key: "internalDeployNative",
    value: function () {
      var _internalDeployNative = (0, _asyncToGenerator2["default"])( /*#__PURE__*/_regenerator["default"].mark(function _callee36(params) {
        return _regenerator["default"].wrap(function _callee36$(_context36) {
          while (1) {
            switch (_context36.prev = _context36.next) {
              case 0:
                return _context36.abrupt("return", this.requestCore('contracts.deploy', {
                  abi: params["package"].abi,
                  constructorHeader: params.constructorHeader,
                  constructorParams: params.constructorParams,
                  initParams: params.initParams,
                  imageBase64: params["package"].imageBase64,
                  keyPair: params.keyPair
                }));

              case 1:
              case "end":
                return _context36.stop();
            }
          }
        }, _callee36, this);
      }));

      function internalDeployNative(_x54) {
        return _internalDeployNative.apply(this, arguments);
      }

      return internalDeployNative;
    }()
  }, {
    key: "internalRunNative",
    value: function () {
      var _internalRunNative = (0, _asyncToGenerator2["default"])( /*#__PURE__*/_regenerator["default"].mark(function _callee37(params) {
        return _regenerator["default"].wrap(function _callee37$(_context37) {
          while (1) {
            switch (_context37.prev = _context37.next) {
              case 0:
                _context37.next = 2;
                return this.requestCore('contracts.run', {
                  address: params.address,
                  abi: params.abi,
                  functionName: params.functionName,
                  header: params.header,
                  input: params.input,
                  keyPair: params.keyPair
                });

              case 2:
                return _context37.abrupt("return", _context37.sent);

              case 3:
              case "end":
                return _context37.stop();
            }
          }
        }, _callee37, this);
      }));

      function internalRunNative(_x55) {
        return _internalRunNative.apply(this, arguments);
      }

      return internalRunNative;
    }()
  }, {
    key: "makeExpireHeader",
    value: function makeExpireHeader(abi, userHeader, retryIndex) {
      var timeout = this.config.messageExpirationTimeout(retryIndex);

      if (abi.header && abi.header.includes('expire') && !(userHeader === null || userHeader === void 0 ? void 0 : userHeader.expire)) {
        return _objectSpread({}, userHeader, {
          expire: Math.floor((Date.now() + timeout) / 1000) + 1
        });
      } else {
        return userHeader;
      }
    }
  }, {
    key: "retryCall",
    value: function () {
      var _retryCall = (0, _asyncToGenerator2["default"])( /*#__PURE__*/_regenerator["default"].mark(function _callee38(call) {
        var retriesCount, i;
        return _regenerator["default"].wrap(function _callee38$(_context38) {
          while (1) {
            switch (_context38.prev = _context38.next) {
              case 0:
                retriesCount = this.config.messageRetriesCount();
                i = 0;

              case 2:
                if (!(i <= retriesCount)) {
                  _context38.next = 17;
                  break;
                }

                if (i > 0) {
                  this.config.log("Retry #".concat(i));
                }

                _context38.prev = 4;
                _context38.next = 7;
                return call(i);

              case 7:
                return _context38.abrupt("return", _context38.sent);

              case 10:
                _context38.prev = 10;
                _context38.t0 = _context38["catch"](4);

                if (_TONClient.TONClientError.isMessageExpired(_context38.t0)) {
                  _context38.next = 14;
                  break;
                }

                throw _context38.t0;

              case 14:
                i++;
                _context38.next = 2;
                break;

              case 17:
                throw _TONClient.TONClientError.messageExpired();

              case 18:
              case "end":
                return _context38.stop();
            }
          }
        }, _callee38, this, [[4, 10]]);
      }));

      function retryCall(_x56) {
        return _retryCall.apply(this, arguments);
      }

      return retryCall;
    }()
  }, {
    key: "internalDeployJs",
    value: function () {
      var _internalDeployJs = (0, _asyncToGenerator2["default"])( /*#__PURE__*/_regenerator["default"].mark(function _callee40(params, parentSpan) {
        var _this7 = this;

        return _regenerator["default"].wrap(function _callee40$(_context40) {
          while (1) {
            switch (_context40.prev = _context40.next) {
              case 0:
                this.config.log('Deploy start');
                return _context40.abrupt("return", this.retryCall( /*#__PURE__*/function () {
                  var _ref6 = (0, _asyncToGenerator2["default"])( /*#__PURE__*/_regenerator["default"].mark(function _callee39(retryIndex) {
                    var message;
                    return _regenerator["default"].wrap(function _callee39$(_context39) {
                      while (1) {
                        switch (_context39.prev = _context39.next) {
                          case 0:
                            _context39.next = 2;
                            return _this7.createDeployMessage(params, retryIndex);

                          case 2:
                            message = _context39.sent;
                            return _context39.abrupt("return", _this7.processDeployMessage(message, parentSpan, retryIndex));

                          case 4:
                          case "end":
                            return _context39.stop();
                        }
                      }
                    }, _callee39);
                  }));

                  return function (_x59) {
                    return _ref6.apply(this, arguments);
                  };
                }()));

              case 2:
              case "end":
                return _context40.stop();
            }
          }
        }, _callee40, this);
      }));

      function internalDeployJs(_x57, _x58) {
        return _internalDeployJs.apply(this, arguments);
      }

      return internalDeployJs;
    }()
  }, {
    key: "internalRunJs",
    value: function () {
      var _internalRunJs = (0, _asyncToGenerator2["default"])( /*#__PURE__*/_regenerator["default"].mark(function _callee42(params, parentSpan) {
        var _this8 = this;

        return _regenerator["default"].wrap(function _callee42$(_context42) {
          while (1) {
            switch (_context42.prev = _context42.next) {
              case 0:
                this.config.log('Run start');
                return _context42.abrupt("return", this.retryCall( /*#__PURE__*/function () {
                  var _ref7 = (0, _asyncToGenerator2["default"])( /*#__PURE__*/_regenerator["default"].mark(function _callee41(retryIndex) {
                    var message;
                    return _regenerator["default"].wrap(function _callee41$(_context41) {
                      while (1) {
                        switch (_context41.prev = _context41.next) {
                          case 0:
                            _context41.next = 2;
                            return _this8.createRunMessage(params, retryIndex);

                          case 2:
                            message = _context41.sent;
                            return _context41.abrupt("return", _this8.processRunMessage(message, parentSpan, retryIndex));

                          case 4:
                          case "end":
                            return _context41.stop();
                        }
                      }
                    }, _callee41);
                  }));

                  return function (_x62) {
                    return _ref7.apply(this, arguments);
                  };
                }()));

              case 2:
              case "end":
                return _context42.stop();
            }
          }
        }, _callee42, this);
      }));

      function internalRunJs(_x60, _x61) {
        return _internalRunJs.apply(this, arguments);
      }

      return internalRunJs;
    }()
  }, {
    key: "getAccount",
    value: function () {
      var _getAccount = (0, _asyncToGenerator2["default"])( /*#__PURE__*/_regenerator["default"].mark(function _callee43(address, active, waitParams, parentSpan) {
        var removeTypeName, filter, account;
        return _regenerator["default"].wrap(function _callee43$(_context43) {
          while (1) {
            switch (_context43.prev = _context43.next) {
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
                _context43.next = 7;
                return this.queries.accounts.waitFor(filter, 'id code data balance balance_other { currency value } last_paid', waitParams && waitParams.timeout, parentSpan);

              case 7:
                account = _context43.sent;
                removeTypeName(account);
                this.config.log('getAccount. Account recieved', account);
                return _context43.abrupt("return", account);

              case 11:
              case "end":
                return _context43.stop();
            }
          }
        }, _callee43, this);
      }));

      function getAccount(_x63, _x64, _x65, _x66) {
        return _getAccount.apply(this, arguments);
      }

      return getAccount;
    }()
  }, {
    key: "internalRunLocalJs",
    value: function () {
      var _internalRunLocalJs = (0, _asyncToGenerator2["default"])( /*#__PURE__*/_regenerator["default"].mark(function _callee44(params, parentSpan) {
        var account;
        return _regenerator["default"].wrap(function _callee44$(_context44) {
          while (1) {
            switch (_context44.prev = _context44.next) {
              case 0:
                _context44.next = 2;
                return this.getAccount(params.address, true, params.waitParams, parentSpan);

              case 2:
                account = _context44.sent;
                return _context44.abrupt("return", this.requestCore('contracts.run.local', {
                  address: params.address,
                  account: account,
                  abi: params.abi,
                  functionName: params.functionName,
                  input: params.input,
                  keyPair: params.keyPair
                }));

              case 4:
              case "end":
                return _context44.stop();
            }
          }
        }, _callee44, this);
      }));

      function internalRunLocalJs(_x67, _x68) {
        return _internalRunLocalJs.apply(this, arguments);
      }

      return internalRunLocalJs;
    }()
  }]);
  return TONContractsModule;
}(_TONModule2.TONModule);

exports["default"] = TONContractsModule;
TONContractsModule.moduleName = 'TONContractsModule';

function checkTransaction(_x69) {
  return _checkTransaction.apply(this, arguments);
}

function _checkTransaction() {
  _checkTransaction = (0, _asyncToGenerator2["default"])( /*#__PURE__*/_regenerator["default"].mark(function _callee45(transaction) {
    var nodeError, storage, status, compute, reason, action;
    return _regenerator["default"].wrap(function _callee45$(_context45) {
      while (1) {
        switch (_context45.prev = _context45.next) {
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
              _context45.next = 3;
              break;
            }

            return _context45.abrupt("return");

          case 3:
            storage = transaction.storage;

            if (!storage) {
              _context45.next = 10;
              break;
            }

            status = storage.status_change;

            if (!(status === QAccountStatusChange.frozen)) {
              _context45.next = 8;
              break;
            }

            throw nodeError('Account was frozen due storage phase', TONClientStorageStatus.frozen, TONClientTransactionPhase.storage);

          case 8:
            if (!(status === QAccountStatusChange.deleted)) {
              _context45.next = 10;
              break;
            }

            throw nodeError('Account was deleted due storage phase', TONClientStorageStatus.deleted, TONClientTransactionPhase.storage);

          case 10:
            compute = transaction.compute;

            if (!compute) {
              _context45.next = 24;
              break;
            }

            if (!(compute.compute_type === QComputeType.skipped)) {
              _context45.next = 21;
              break;
            }

            reason = compute.skipped_reason;

            if (!(reason === QSkipReason.noState)) {
              _context45.next = 16;
              break;
            }

            throw nodeError('Account has no code and data', TONClientComputeSkippedStatus.noState, TONClientTransactionPhase.computeSkipped);

          case 16:
            if (!(reason === QSkipReason.badState)) {
              _context45.next = 18;
              break;
            }

            throw nodeError('Account has bad state: frozen or deleted', TONClientComputeSkippedStatus.badState, TONClientTransactionPhase.computeSkipped);

          case 18:
            if (!(reason === QSkipReason.noGas)) {
              _context45.next = 20;
              break;
            }

            throw nodeError('No gas to execute VM', TONClientComputeSkippedStatus.noGas, TONClientTransactionPhase.computeSkipped);

          case 20:
            throw nodeError('Compute phase skipped by unknown reason', -1, TONClientTransactionPhase.computeSkipped);

          case 21:
            if (!(compute.compute_type === QComputeType.vm)) {
              _context45.next = 24;
              break;
            }

            if (compute.success) {
              _context45.next = 24;
              break;
            }

            throw nodeError('VM terminated with exception', compute.exit_code || 0, TONClientTransactionPhase.computeVm);

          case 24:
            action = transaction.action;

            if (!action) {
              _context45.next = 28;
              break;
            }

            if (action.success) {
              _context45.next = 28;
              break;
            }

            throw nodeError(action.no_funds ? 'Too low balance to send outbound message' : !action.valid ? 'Outbound message is invalid' : 'Action phase failed', action.result_code || 0, TONClientTransactionPhase.action);

          case 28:
            throw nodeError('Transaction aborted', -1, TONClientTransactionPhase.unknown);

          case 29:
          case "end":
            return _context45.stop();
        }
      }
    }, _callee45);
  }));
  return _checkTransaction.apply(this, arguments);
}

var transactionDetails = "\n    id\n    in_msg\n    tr_type\n    status\n    in_msg\n    out_msgs\n    block_id\n    now\n    aborted\n    lt\n    storage {\n        status_change\n    }\n    compute {\n        compute_type\n        skipped_reason\n        success\n        exit_code\n        gas_fees\n        gas_used\n    }\n    action {\n        success\n        valid\n        result_code\n        no_funds\n    }\n    out_messages {\n        id\n        msg_type\n        body\n    }\n   ";
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy9tb2R1bGVzL1RPTkNvbnRyYWN0c01vZHVsZS5qcyJdLCJuYW1lcyI6WyJUT05BZGRyZXNzU3RyaW5nVmFyaWFudCIsIkFjY291bnRJZCIsIkhleCIsIkJhc2U2NCIsIlRPTkNsaWVudFRyYW5zYWN0aW9uUGhhc2UiLCJzdG9yYWdlIiwiY29tcHV0ZVNraXBwZWQiLCJjb21wdXRlVm0iLCJhY3Rpb24iLCJ1bmtub3duIiwiVE9OQ2xpZW50Q29tcHV0ZVNraXBwZWRTdGF0dXMiLCJub1N0YXRlIiwiYmFkU3RhdGUiLCJub0dhcyIsIlRPTkNsaWVudFN0b3JhZ2VTdGF0dXMiLCJ1bmNoYW5nZWQiLCJmcm96ZW4iLCJkZWxldGVkIiwiUUluTXNnVHlwZSIsImV4dGVybmFsIiwiaWhyIiwiaW1tZWRpYXRlbHkiLCJ0cmFuc2l0IiwiZGlzY2FyZGVkRmluYWwiLCJkaXNjYXJkZWRUcmFuc2l0IiwiUU91dE1zZ1R5cGUiLCJvdXRNc2dOZXciLCJkZXF1ZXVlSW1tZWRpYXRlbHkiLCJkZXF1ZXVlIiwidHJhbnNpdFJlcXVpcmVkIiwibm9uZSIsIlFNZXNzYWdlVHlwZSIsImludGVybmFsIiwiZXh0SW4iLCJleHRPdXQiLCJRTWVzc2FnZVByb2Nlc3NpbmdTdGF0dXMiLCJxdWV1ZWQiLCJwcm9jZXNzaW5nIiwicHJlbGltaW5hcnkiLCJwcm9wb3NlZCIsImZpbmFsaXplZCIsInJlZnVzZWQiLCJ0cmFuc2l0aW5nIiwiUUJsb2NrUHJvY2Vzc2luZ1N0YXR1cyIsIlFTcGxpdFR5cGUiLCJzcGxpdCIsIm1lcmdlIiwiUUFjY291bnRUeXBlIiwidW5pbml0IiwiYWN0aXZlIiwiUVRyYW5zYWN0aW9uVHlwZSIsIm9yZGluYXJ5IiwidGljayIsInRvY2siLCJzcGxpdFByZXBhcmUiLCJzcGxpdEluc3RhbGwiLCJtZXJnZVByZXBhcmUiLCJtZXJnZUluc3RhbGwiLCJRVHJhbnNhY3Rpb25Qcm9jZXNzaW5nU3RhdHVzIiwiUUFjY291bnRTdGF0dXMiLCJub25FeGlzdCIsIlFBY2NvdW50U3RhdHVzQ2hhbmdlIiwiUUNvbXB1dGVUeXBlIiwic2tpcHBlZCIsInZtIiwiUVNraXBSZWFzb24iLCJRQm91bmNlVHlwZSIsIm5lZ0Z1bmRzIiwibm9GdW5kcyIsIm9rIiwicmVtb3ZlUHJvcHMiLCJvYmoiLCJwYXRocyIsInJlc3VsdCIsImZvckVhY2giLCJwYXRoIiwiZG90UG9zIiwiaW5kZXhPZiIsIm5hbWUiLCJzdWJzdHIiLCJjaGlsZCIsInJlZHVjZWRDaGlsZCIsIlRPTkNvbnRyYWN0c01vZHVsZSIsImNvbmZpZyIsImNvbnRleHQiLCJnZXRNb2R1bGUiLCJUT05Db25maWdNb2R1bGUiLCJxdWVyaWVzIiwiVE9OUXVlcmllc01vZHVsZSIsInBhcmFtcyIsInBhcmVudFNwYW4iLCJhY2NvdW50cyIsInF1ZXJ5IiwiaWQiLCJlcSIsImFkZHJlc3MiLCJ1bmRlZmluZWQiLCJsZW5ndGgiLCJiYWxhbmNlR3JhbXMiLCJiYWxhbmNlIiwidHJhY2UiLCJzcGFuIiwic2V0VGFnIiwiaW50ZXJuYWxEZXBsb3lKcyIsImludGVybmFsUnVuSnMiLCJpbnRlcm5hbFJ1bkxvY2FsSnMiLCJyZXRyeUluZGV4IiwibG9nIiwiY29uc3RydWN0b3JIZWFkZXIiLCJtYWtlRXhwaXJlSGVhZGVyIiwiYWJpIiwicmVxdWVzdENvcmUiLCJjb25zdHJ1Y3RvclBhcmFtcyIsImluaXRQYXJhbXMiLCJpbWFnZUJhc2U2NCIsImtleVBhaXIiLCJ3b3JrY2hhaW5JZCIsIm1lc3NhZ2UiLCJtZXNzYWdlSWQiLCJtZXNzYWdlQm9keUJhc2U2NCIsImV4cGlyZSIsImhlYWRlciIsImZ1bmN0aW9uTmFtZSIsImlucHV0IiwicHVibGljS2V5SGV4IiwiYWRkcmVzc0hleCIsInNpZ25QYXJhbXMiLCJlbmNvZGVkIiwiY3JlYXRlU2lnbmVkTWVzc2FnZSIsInVuc2lnbmVkTWVzc2FnZSIsInVuc2lnbmVkQnl0ZXNCYXNlNjQiLCJzaWduQnl0ZXNCYXNlNjQiLCJnZXRCb2NIYXNoIiwiYm9jQmFzZTY0IiwiaGFzaCIsImlkQmFzZTY0IiwiQnVmZmVyIiwiZnJvbSIsInRvU3RyaW5nIiwicG9zdFJlcXVlc3RzIiwiYm9keSIsInJlc3VsdEZpZWxkcyIsInNlbmRNZXNzYWdlIiwicHJvY2Vzc2luZ1RpbWVvdXQiLCJtZXNzYWdlUHJvY2Vzc2luZ1RpbWVvdXQiLCJwcm9taXNlcyIsInRyYW5zYWN0aW9uRm91bmQiLCJEYXRlIiwibm93IiwiVE9OQ2xpZW50RXJyb3IiLCJzZW5kTm9kZVJlcXVlc3RGYWlsZWQiLCJ3YWl0RXhwaXJlZCIsImJsb2NrcyIsIndhaXRGb3IiLCJmaWx0ZXIiLCJtYXN0ZXIiLCJtaW5fc2hhcmRfZ2VuX3V0aW1lIiwiZ2UiLCJ0aW1lb3V0IiwiYmxvY2siLCJ0cmFuc2FjdGlvbl9pZCIsImluX21zZ19kZXNjciIsImZpbmQiLCJtc2ciLCJpbnRlcm5hbEVycm9yIiwidHJhbnNhY3Rpb25zIiwicHVzaCIsIlByb21pc2UiLCJyZXNvbHZlIiwicmVqZWN0IiwiaW5fbXNnIiwic3RhdHVzIiwidHIiLCJyYWNlIiwidHJhbnNhY3Rpb24iLCJtZXNzYWdlRXhwaXJlZCIsInRyYW5zYWN0aW9uTm93IiwiYmxvY2tfaWQiLCJ0b0lTT1N0cmluZyIsImFjY190eXBlIiwiYWNjb3VudCIsImFscmVhZHlEZXBsb3llZCIsInByb2Nlc3NNZXNzYWdlIiwidHJhbnNhY3Rpb25EZXRhaWxzIiwiY2hlY2tUcmFuc2FjdGlvbiIsIm91dHB1dE1lc3NhZ2VzIiwib3V0X21lc3NhZ2VzIiwib3V0cHV0IiwiZXh0ZXJuYWxNZXNzYWdlcyIsIngiLCJtc2dfdHlwZSIsImFsbCIsIm1hcCIsImRlY29kZU91dHB1dE1lc3NhZ2VCb2R5IiwiYm9keUJhc2U2NCIsIm91dHB1dHMiLCJyZXN1bHRPdXRwdXQiLCJ0b0xvd2VyQ2FzZSIsIndhaXRQYXJhbXMiLCJnZXRBY2NvdW50IiwibWVzc2FnZUJhc2U2NCIsImVtdWxhdGVCYWxhbmNlIiwiYmlnQmFsYW5jZSIsImNyZWF0ZURlcGxveU1lc3NhZ2UiLCJjYWxjTXNnUHJvY2Vzc0ZlZXMiLCJuZXdBY2NvdW50IiwibGFzdF9wYWlkIiwiTWF0aCIsImZsb29yIiwidXNlckhlYWRlciIsIm1lc3NhZ2VFeHBpcmF0aW9uVGltZW91dCIsImluY2x1ZGVzIiwiY2FsbCIsInJldHJpZXNDb3VudCIsIm1lc3NhZ2VSZXRyaWVzQ291bnQiLCJpIiwiaXNNZXNzYWdlRXhwaXJlZCIsInJldHJ5Q2FsbCIsInByb2Nlc3NEZXBsb3lNZXNzYWdlIiwiY3JlYXRlUnVuTWVzc2FnZSIsInByb2Nlc3NSdW5NZXNzYWdlIiwicmVtb3ZlVHlwZU5hbWUiLCJfX3R5cGVuYW1lIiwiT2JqZWN0IiwidmFsdWVzIiwidmFsdWUiLCJ0cmFuc2FjdGlvbkx0IiwibGFzdF90cmFuc19sdCIsIlRPTk1vZHVsZSIsIm1vZHVsZU5hbWUiLCJub2RlRXJyb3IiLCJjb2RlIiwicGhhc2UiLCJSRVBMQVlfUFJPVEVDVElPTiIsIk1FU1NBR0VfRVhQSVJFRCIsImlzTm9kZVNFTWVzc2FnZUV4cGlyZWQiLCJzb3VyY2UiLCJOT0RFIiwiYWJvcnRlZCIsInN0YXR1c19jaGFuZ2UiLCJjb21wdXRlIiwiY29tcHV0ZV90eXBlIiwicmVhc29uIiwic2tpcHBlZF9yZWFzb24iLCJzdWNjZXNzIiwiZXhpdF9jb2RlIiwibm9fZnVuZHMiLCJ2YWxpZCIsInJlc3VsdF9jb2RlIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFpQkE7O0FBOENBOztBQUNBOztBQUNBOztBQUNBOzs7Ozs7Ozs7O0FBRU8sSUFBTUEsdUJBQXVCLEdBQUc7QUFDbkNDLEVBQUFBLFNBQVMsRUFBRSxXQUR3QjtBQUVuQ0MsRUFBQUEsR0FBRyxFQUFFLEtBRjhCO0FBR25DQyxFQUFBQSxNQUFNLEVBQUU7QUFIMkIsQ0FBaEM7O0FBTUEsSUFBTUMseUJBQXlCLEdBQUc7QUFDckNDLEVBQUFBLE9BQU8sRUFBRSxTQUQ0QjtBQUVyQ0MsRUFBQUEsY0FBYyxFQUFFLGdCQUZxQjtBQUdyQ0MsRUFBQUEsU0FBUyxFQUFFLFdBSDBCO0FBSXJDQyxFQUFBQSxNQUFNLEVBQUUsUUFKNkI7QUFLckNDLEVBQUFBLE9BQU8sRUFBRTtBQUw0QixDQUFsQzs7QUFRQSxJQUFNQyw2QkFBNkIsR0FBRztBQUN6Q0MsRUFBQUEsT0FBTyxFQUFFLENBRGdDO0FBRXpDQyxFQUFBQSxRQUFRLEVBQUUsQ0FGK0I7QUFHekNDLEVBQUFBLEtBQUssRUFBRTtBQUhrQyxDQUF0Qzs7QUFNQSxJQUFNQyxzQkFBc0IsR0FBRztBQUNsQ0MsRUFBQUEsU0FBUyxFQUFFLENBRHVCO0FBRWxDQyxFQUFBQSxNQUFNLEVBQUUsQ0FGMEI7QUFHbENDLEVBQUFBLE9BQU8sRUFBRTtBQUh5QixDQUEvQjs7QUFNQSxJQUFNQyxVQUFVLEdBQUc7QUFDdEJDLEVBQUFBLFFBQVEsRUFBRSxDQURZO0FBRXRCQyxFQUFBQSxHQUFHLEVBQUUsQ0FGaUI7QUFHdEJDLEVBQUFBLFdBQVcsRUFBRSxDQUhTO0FBSXRCLFdBQU8sQ0FKZTtBQUt0QkMsRUFBQUEsT0FBTyxFQUFFLENBTGE7QUFNdEJDLEVBQUFBLGNBQWMsRUFBRSxDQU5NO0FBT3RCQyxFQUFBQSxnQkFBZ0IsRUFBRTtBQVBJLENBQW5COztBQVVBLElBQU1DLFdBQVcsR0FBRztBQUN2Qk4sRUFBQUEsUUFBUSxFQUFFLENBRGE7QUFFdkJFLEVBQUFBLFdBQVcsRUFBRSxDQUZVO0FBR3ZCSyxFQUFBQSxTQUFTLEVBQUUsQ0FIWTtBQUl2QkosRUFBQUEsT0FBTyxFQUFFLENBSmM7QUFLdkJLLEVBQUFBLGtCQUFrQixFQUFFLENBTEc7QUFNdkJDLEVBQUFBLE9BQU8sRUFBRSxDQU5jO0FBT3ZCQyxFQUFBQSxlQUFlLEVBQUUsQ0FQTTtBQVF2QkMsRUFBQUEsSUFBSSxFQUFFLENBQUM7QUFSZ0IsQ0FBcEI7O0FBV0EsSUFBTUMsWUFBWSxHQUFHO0FBQ3hCQyxFQUFBQSxRQUFRLEVBQUUsQ0FEYztBQUV4QkMsRUFBQUEsS0FBSyxFQUFFLENBRmlCO0FBR3hCQyxFQUFBQSxNQUFNLEVBQUU7QUFIZ0IsQ0FBckI7O0FBTUEsSUFBTUMsd0JBQXdCLEdBQUc7QUFDcEMxQixFQUFBQSxPQUFPLEVBQUUsQ0FEMkI7QUFFcEMyQixFQUFBQSxNQUFNLEVBQUUsQ0FGNEI7QUFHcENDLEVBQUFBLFVBQVUsRUFBRSxDQUh3QjtBQUlwQ0MsRUFBQUEsV0FBVyxFQUFFLENBSnVCO0FBS3BDQyxFQUFBQSxRQUFRLEVBQUUsQ0FMMEI7QUFNcENDLEVBQUFBLFNBQVMsRUFBRSxDQU55QjtBQU9wQ0MsRUFBQUEsT0FBTyxFQUFFLENBUDJCO0FBUXBDQyxFQUFBQSxVQUFVLEVBQUU7QUFSd0IsQ0FBakM7O0FBV0EsSUFBTUMsc0JBQXNCLEdBQUc7QUFDbENsQyxFQUFBQSxPQUFPLEVBQUUsQ0FEeUI7QUFFbEM4QixFQUFBQSxRQUFRLEVBQUUsQ0FGd0I7QUFHbENDLEVBQUFBLFNBQVMsRUFBRSxDQUh1QjtBQUlsQ0MsRUFBQUEsT0FBTyxFQUFFO0FBSnlCLENBQS9COztBQU9BLElBQU1HLFVBQVUsR0FBRztBQUN0QmQsRUFBQUEsSUFBSSxFQUFFLENBRGdCO0FBRXRCZSxFQUFBQSxLQUFLLEVBQUUsQ0FGZTtBQUd0QkMsRUFBQUEsS0FBSyxFQUFFO0FBSGUsQ0FBbkI7O0FBTUEsSUFBTUMsWUFBWSxHQUFHO0FBQ3hCQyxFQUFBQSxNQUFNLEVBQUUsQ0FEZ0I7QUFFeEJDLEVBQUFBLE1BQU0sRUFBRSxDQUZnQjtBQUd4QmpDLEVBQUFBLE1BQU0sRUFBRTtBQUhnQixDQUFyQjs7QUFNQSxJQUFNa0MsZ0JBQWdCLEdBQUc7QUFDNUJDLEVBQUFBLFFBQVEsRUFBRSxDQURrQjtBQUU1QjlDLEVBQUFBLE9BQU8sRUFBRSxDQUZtQjtBQUc1QitDLEVBQUFBLElBQUksRUFBRSxDQUhzQjtBQUk1QkMsRUFBQUEsSUFBSSxFQUFFLENBSnNCO0FBSzVCQyxFQUFBQSxZQUFZLEVBQUUsQ0FMYztBQU01QkMsRUFBQUEsWUFBWSxFQUFFLENBTmM7QUFPNUJDLEVBQUFBLFlBQVksRUFBRSxDQVBjO0FBUTVCQyxFQUFBQSxZQUFZLEVBQUU7QUFSYyxDQUF6Qjs7QUFXQSxJQUFNQyw0QkFBNEIsR0FBRztBQUN4Q2pELEVBQUFBLE9BQU8sRUFBRSxDQUQrQjtBQUV4QzZCLEVBQUFBLFdBQVcsRUFBRSxDQUYyQjtBQUd4Q0MsRUFBQUEsUUFBUSxFQUFFLENBSDhCO0FBSXhDQyxFQUFBQSxTQUFTLEVBQUUsQ0FKNkI7QUFLeENDLEVBQUFBLE9BQU8sRUFBRTtBQUwrQixDQUFyQzs7QUFRQSxJQUFNa0IsY0FBYyxHQUFHO0FBQzFCWCxFQUFBQSxNQUFNLEVBQUUsQ0FEa0I7QUFFMUJDLEVBQUFBLE1BQU0sRUFBRSxDQUZrQjtBQUcxQmpDLEVBQUFBLE1BQU0sRUFBRSxDQUhrQjtBQUkxQjRDLEVBQUFBLFFBQVEsRUFBRTtBQUpnQixDQUF2Qjs7QUFPQSxJQUFNQyxvQkFBb0IsR0FBRztBQUNoQzlDLEVBQUFBLFNBQVMsRUFBRSxDQURxQjtBQUVoQ0MsRUFBQUEsTUFBTSxFQUFFLENBRndCO0FBR2hDQyxFQUFBQSxPQUFPLEVBQUU7QUFIdUIsQ0FBN0I7O0FBTUEsSUFBTTZDLFlBQVksR0FBRztBQUN4QkMsRUFBQUEsT0FBTyxFQUFFLENBRGU7QUFFeEJDLEVBQUFBLEVBQUUsRUFBRTtBQUZvQixDQUFyQjs7QUFLQSxJQUFNQyxXQUFXLEdBQUc7QUFDdkJ0RCxFQUFBQSxPQUFPLEVBQUUsQ0FEYztBQUV2QkMsRUFBQUEsUUFBUSxFQUFFLENBRmE7QUFHdkJDLEVBQUFBLEtBQUssRUFBRTtBQUhnQixDQUFwQjs7QUFNQSxJQUFNcUQsV0FBVyxHQUFHO0FBQ3ZCQyxFQUFBQSxRQUFRLEVBQUUsQ0FEYTtBQUV2QkMsRUFBQUEsT0FBTyxFQUFFLENBRmM7QUFHdkJDLEVBQUFBLEVBQUUsRUFBRTtBQUhtQixDQUFwQjs7O0FBTUEsU0FBU0MsV0FBVCxDQUFxQkMsR0FBckIsRUFBOEJDLEtBQTlCLEVBQW1EO0FBQ3RELE1BQUlDLE1BQU0sR0FBR0YsR0FBYjtBQUNBQyxFQUFBQSxLQUFLLENBQUNFLE9BQU4sQ0FBYyxVQUFDQyxJQUFELEVBQVU7QUFDcEIsUUFBTUMsTUFBTSxHQUFHRCxJQUFJLENBQUNFLE9BQUwsQ0FBYSxHQUFiLENBQWY7O0FBQ0EsUUFBSUQsTUFBTSxHQUFHLENBQWIsRUFBZ0I7QUFDWixVQUFJRCxJQUFJLElBQUlGLE1BQVosRUFBb0I7QUFDaEJBLFFBQUFBLE1BQU0scUJBQVFBLE1BQVIsQ0FBTjtBQUNBLGVBQU9BLE1BQU0sQ0FBQ0UsSUFBRCxDQUFiO0FBQ0g7QUFDSixLQUxELE1BS087QUFDSCxVQUFNRyxJQUFJLEdBQUdILElBQUksQ0FBQ0ksTUFBTCxDQUFZLENBQVosRUFBZUgsTUFBZixDQUFiO0FBQ0EsVUFBTUksS0FBSyxHQUFHUCxNQUFNLENBQUNLLElBQUQsQ0FBcEI7O0FBQ0EsVUFBSUUsS0FBSixFQUFXO0FBQ1AsWUFBTUMsWUFBWSxHQUFHWCxXQUFXLENBQUNVLEtBQUQsRUFBUSxDQUFDTCxJQUFJLENBQUNJLE1BQUwsQ0FBWUgsTUFBTSxHQUFHLENBQXJCLENBQUQsQ0FBUixDQUFoQzs7QUFDQSxZQUFJSyxZQUFZLEtBQUtELEtBQXJCLEVBQTRCO0FBQ3hCUCxVQUFBQSxNQUFNLHFCQUNDQSxNQURELHVDQUVESyxJQUZDLEVBRU1HLFlBRk4sRUFBTjtBQUlIO0FBQ0o7QUFDSjtBQUNKLEdBcEJEO0FBcUJBLFNBQU9SLE1BQVA7QUFDSDs7SUFFb0JTLGtCOzs7Ozs7Ozs7Ozs7Ozs7OzttR0FrZkosa0I7Ozs7Ozs7Ozs7OztBQTVlVCxxQkFBS0MsTUFBTCxHQUFjLEtBQUtDLE9BQUwsQ0FBYUMsU0FBYixDQUF1QkMsMkJBQXZCLENBQWQ7QUFDQSxxQkFBS0MsT0FBTCxHQUFlLEtBQUtILE9BQUwsQ0FBYUMsU0FBYixDQUF1QkcsNEJBQXZCLENBQWY7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7a0hBSUFDLE0sRUFDQUMsVTs7Ozs7Ozt1QkFFbUMsS0FBS0gsT0FBTCxDQUFhSSxRQUFiLENBQXNCQyxLQUF0QixDQUE0QjtBQUMzREMsa0JBQUFBLEVBQUUsRUFBRTtBQUFFQyxvQkFBQUEsRUFBRSxFQUFFTCxNQUFNLENBQUNNO0FBQWI7QUFEdUQsaUJBQTVCLEVBRWhDLFNBRmdDLEVBRXJCQyxTQUZxQixFQUVWQSxTQUZVLEVBRUNBLFNBRkQsRUFFWU4sVUFGWixDOzs7QUFBN0JDLGdCQUFBQSxROztzQkFHRkEsUUFBUSxJQUFJQSxRQUFRLENBQUNNLE1BQVQsR0FBa0IsQzs7Ozs7a0RBQ3ZCO0FBQ0hKLGtCQUFBQSxFQUFFLEVBQUVKLE1BQU0sQ0FBQ00sT0FEUjtBQUVIRyxrQkFBQUEsWUFBWSxFQUFFUCxRQUFRLENBQUMsQ0FBRCxDQUFSLENBQVlRO0FBRnZCLGlCOzs7a0RBS0o7QUFDSE4sa0JBQUFBLEVBQUUsRUFBRSxJQUREO0FBRUhLLGtCQUFBQSxZQUFZLEVBQUU7QUFGWCxpQjs7Ozs7Ozs7Ozs7Ozs7O1FBT1g7Ozs7O29IQUdJVCxNLEVBQ0FDLFU7Ozs7Ozs7a0RBRU8sS0FBS04sT0FBTCxDQUFhZ0IsS0FBYixDQUFtQixrQkFBbkI7QUFBQSwyR0FBdUMsa0JBQU9DLElBQVA7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUMxQ0EsNEJBQUFBLElBQUksQ0FBQ0MsTUFBTCxDQUFZLFFBQVosRUFBc0JoQyxXQUFXLENBQUNtQixNQUFELEVBQVMsQ0FBQyxnQkFBRCxDQUFULENBQWpDO0FBRDBDLDhEQUVuQyxNQUFJLENBQUNjLGdCQUFMLENBQXNCZCxNQUF0QixFQUE4QlksSUFBOUIsQ0FGbUM7O0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsbUJBQXZDOztBQUFBO0FBQUE7QUFBQTtBQUFBLHFCQUdKWCxVQUhJLEM7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7aUhBUVBELE0sRUFDQUMsVTs7Ozs7OztrREFFTyxLQUFLTixPQUFMLENBQWFnQixLQUFiLENBQW1CLGVBQW5CO0FBQUEsNEdBQW9DLGtCQUFPQyxJQUFQO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFDdkNBLDRCQUFBQSxJQUFJLENBQUNDLE1BQUwsQ0FBWSxRQUFaLEVBQXNCaEMsV0FBVyxDQUFDbUIsTUFBRCxFQUFTLENBQUMsZ0JBQUQsQ0FBVCxDQUFqQztBQUR1Qyw4REFFaEMsTUFBSSxDQUFDZSxhQUFMLENBQW1CZixNQUFuQixFQUEyQlksSUFBM0IsQ0FGZ0M7O0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsbUJBQXBDOztBQUFBO0FBQUE7QUFBQTtBQUFBLHFCQUdKWCxVQUhJLEM7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7c0hBT1BELE0sRUFDQUMsVTs7Ozs7OztrREFFTyxLQUFLTixPQUFMLENBQWFnQixLQUFiLENBQW1CLG9CQUFuQjtBQUFBLDRHQUF5QyxrQkFBT0MsSUFBUDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQzVDQSw0QkFBQUEsSUFBSSxDQUFDQyxNQUFMLENBQVksUUFBWixFQUFzQmhDLFdBQVcsQ0FBQ21CLE1BQUQsRUFBUyxDQUFDLGdCQUFELENBQVQsQ0FBakM7QUFENEMsOERBRXJDLE1BQUksQ0FBQ2dCLGtCQUFMLENBQXdCaEIsTUFBeEIsRUFBZ0NZLElBQWhDLENBRnFDOztBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLG1CQUF6Qzs7QUFBQTtBQUFBO0FBQUE7QUFBQSxxQkFHSlgsVUFISSxDOzs7Ozs7Ozs7Ozs7Ozs7UUFNWDs7Ozs7aUlBR0lELE0sRUFDQWlCLFU7Ozs7OztBQUVBLHFCQUFLdkIsTUFBTCxDQUFZd0IsR0FBWixDQUFnQixxQkFBaEIsRUFBdUNsQixNQUF2QztBQUNNbUIsZ0JBQUFBLGlCLEdBQW9CLEtBQUtDLGdCQUFMLENBQ3RCcEIsTUFBTSxXQUFOLENBQWVxQixHQURPLEVBRXRCckIsTUFBTSxDQUFDbUIsaUJBRmUsRUFHdEJGLFVBSHNCLEM7O3VCQVNoQixLQUFLSyxXQUFMLENBQWlCLDBCQUFqQixFQUE2QztBQUNuREQsa0JBQUFBLEdBQUcsRUFBRXJCLE1BQU0sV0FBTixDQUFlcUIsR0FEK0I7QUFFbkRGLGtCQUFBQSxpQkFBaUIsRUFBakJBLGlCQUZtRDtBQUduREksa0JBQUFBLGlCQUFpQixFQUFFdkIsTUFBTSxDQUFDdUIsaUJBSHlCO0FBSW5EQyxrQkFBQUEsVUFBVSxFQUFFeEIsTUFBTSxDQUFDd0IsVUFKZ0M7QUFLbkRDLGtCQUFBQSxXQUFXLEVBQUV6QixNQUFNLFdBQU4sQ0FBZXlCLFdBTHVCO0FBTW5EQyxrQkFBQUEsT0FBTyxFQUFFMUIsTUFBTSxDQUFDMEIsT0FObUM7QUFPbkRDLGtCQUFBQSxXQUFXLEVBQUUzQixNQUFNLENBQUMyQjtBQVArQixpQkFBN0MsQzs7O0FBSkpDLGdCQUFBQSxPO2tEQWFDO0FBQ0hBLGtCQUFBQSxPQUFPLEVBQUU7QUFDTEMsb0JBQUFBLFNBQVMsRUFBRUQsT0FBTyxDQUFDQyxTQURkO0FBRUxDLG9CQUFBQSxpQkFBaUIsRUFBRUYsT0FBTyxDQUFDRSxpQkFGdEI7QUFHTEMsb0JBQUFBLE1BQU0sRUFBRVosaUJBQUYsYUFBRUEsaUJBQUYsdUJBQUVBLGlCQUFpQixDQUFFWTtBQUh0QixtQkFETjtBQU1IekIsa0JBQUFBLE9BQU8sRUFBRXNCLE9BQU8sQ0FBQ3RCO0FBTmQsaUI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7K0hBWVBOLE0sRUFDQWlCLFU7Ozs7OztBQUVBLHFCQUFLdkIsTUFBTCxDQUFZd0IsR0FBWixDQUFnQixrQkFBaEIsRUFBb0NsQixNQUFwQztBQUNNZ0MsZ0JBQUFBLE0sR0FBUyxLQUFLWixnQkFBTCxDQUNYcEIsTUFBTSxDQUFDcUIsR0FESSxFQUVYckIsTUFBTSxDQUFDZ0MsTUFGSSxFQUdYZixVQUhXLEM7O3VCQUtPLEtBQUtLLFdBQUwsQ0FBaUIsdUJBQWpCLEVBQTBDO0FBQzVEaEIsa0JBQUFBLE9BQU8sRUFBRU4sTUFBTSxDQUFDTSxPQUQ0QztBQUU1RGUsa0JBQUFBLEdBQUcsRUFBRXJCLE1BQU0sQ0FBQ3FCLEdBRmdEO0FBRzVEWSxrQkFBQUEsWUFBWSxFQUFFakMsTUFBTSxDQUFDaUMsWUFIdUM7QUFJNURELGtCQUFBQSxNQUFNLEVBQU5BLE1BSjREO0FBSzVERSxrQkFBQUEsS0FBSyxFQUFFbEMsTUFBTSxDQUFDa0MsS0FMOEM7QUFNNURSLGtCQUFBQSxPQUFPLEVBQUUxQixNQUFNLENBQUMwQjtBQU40QyxpQkFBMUMsQzs7O0FBQWhCRSxnQkFBQUEsTztBQVFOQSxnQkFBQUEsT0FBTyxDQUFDRyxNQUFSLEdBQWlCQyxNQUFqQixhQUFpQkEsTUFBakIsdUJBQWlCQSxNQUFNLENBQUVELE1BQXpCO21EQUNPO0FBQ0h6QixrQkFBQUEsT0FBTyxFQUFFTixNQUFNLENBQUNNLE9BRGI7QUFFSGUsa0JBQUFBLEdBQUcsRUFBRXJCLE1BQU0sQ0FBQ3FCLEdBRlQ7QUFHSFksa0JBQUFBLFlBQVksRUFBRWpDLE1BQU0sQ0FBQ2lDLFlBSGxCO0FBSUhMLGtCQUFBQSxPQUFPLEVBQVBBO0FBSkcsaUI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7MElBU1A1QixNLEVBQ0FpQixVOzs7Ozs7QUFFTUUsZ0JBQUFBLGlCLEdBQW9CLEtBQUtDLGdCQUFMLENBQ3RCcEIsTUFBTSxXQUFOLENBQWVxQixHQURPLEVBRXRCckIsTUFBTSxDQUFDbUIsaUJBRmUsRUFHdEJGLFVBSHNCLEM7O3VCQVFoQixLQUFLSyxXQUFMLENBQWlCLDBDQUFqQixFQUE2RDtBQUNuRUQsa0JBQUFBLEdBQUcsRUFBRXJCLE1BQU0sV0FBTixDQUFlcUIsR0FEK0M7QUFFbkVGLGtCQUFBQSxpQkFBaUIsRUFBakJBLGlCQUZtRTtBQUduRUksa0JBQUFBLGlCQUFpQixFQUFFdkIsTUFBTSxDQUFDdUIsaUJBSHlDO0FBSW5FQyxrQkFBQUEsVUFBVSxFQUFFeEIsTUFBTSxDQUFDd0IsVUFKZ0Q7QUFLbkVDLGtCQUFBQSxXQUFXLEVBQUV6QixNQUFNLFdBQU4sQ0FBZXlCLFdBTHVDO0FBTW5FVSxrQkFBQUEsWUFBWSxFQUFFbkMsTUFBTSxDQUFDMEIsT0FBUCxVQU5xRDtBQU9uRUMsa0JBQUFBLFdBQVcsRUFBRTNCLE1BQU0sQ0FBQzJCO0FBUCtDLGlCQUE3RCxDOzs7QUFISjNDLGdCQUFBQSxNO21EQVlDO0FBQ0hzQixrQkFBQUEsT0FBTyxFQUFFdEIsTUFBTSxDQUFDb0QsVUFEYjtBQUVIQyxrQkFBQUEsVUFBVSxvQkFDSHJELE1BQU0sQ0FBQ3NELE9BREo7QUFFTmpCLG9CQUFBQSxHQUFHLEVBQUVyQixNQUFNLFdBQU4sQ0FBZXFCLEdBRmQ7QUFHTlUsb0JBQUFBLE1BQU0sRUFBRVosaUJBQUYsYUFBRUEsaUJBQUYsdUJBQUVBLGlCQUFpQixDQUFFWTtBQUhyQjtBQUZQLGlCOzs7Ozs7Ozs7Ozs7Ozs7Ozs7O3VJQVlQL0IsTSxFQUNBaUIsVTs7Ozs7O0FBRU1lLGdCQUFBQSxNLEdBQVMsS0FBS1osZ0JBQUwsQ0FDWHBCLE1BQU0sQ0FBQ3FCLEdBREksRUFFWHJCLE1BQU0sQ0FBQ2dDLE1BRkksRUFHWGYsVUFIVyxDOzt1QkFLVSxLQUFLSyxXQUFMLENBQWlCLHVDQUFqQixFQUEwRDtBQUMvRWhCLGtCQUFBQSxPQUFPLEVBQUVOLE1BQU0sQ0FBQ00sT0FEK0Q7QUFFL0VlLGtCQUFBQSxHQUFHLEVBQUVyQixNQUFNLENBQUNxQixHQUZtRTtBQUcvRVksa0JBQUFBLFlBQVksRUFBRWpDLE1BQU0sQ0FBQ2lDLFlBSDBEO0FBSS9FRCxrQkFBQUEsTUFBTSxFQUFOQSxNQUorRTtBQUsvRUUsa0JBQUFBLEtBQUssRUFBRWxDLE1BQU0sQ0FBQ2tDO0FBTGlFLGlCQUExRCxDOzs7QUFBbkJHLGdCQUFBQSxVO21EQU9DO0FBQ0gvQixrQkFBQUEsT0FBTyxFQUFFTixNQUFNLENBQUNNLE9BRGI7QUFFSDJCLGtCQUFBQSxZQUFZLEVBQUVqQyxNQUFNLENBQUNpQyxZQUZsQjtBQUdISSxrQkFBQUEsVUFBVSxvQkFDSEEsVUFERztBQUVOaEIsb0JBQUFBLEdBQUcsRUFBRXJCLE1BQU0sQ0FBQ3FCLEdBRk47QUFHTlUsb0JBQUFBLE1BQU0sRUFBRUMsTUFBRixhQUFFQSxNQUFGLHVCQUFFQSxNQUFNLENBQUVEO0FBSFY7QUFIUCxpQjs7Ozs7Ozs7Ozs7Ozs7Ozs7OztrSUFhUC9CLE07Ozs7O21EQUVPLEtBQUtzQixXQUFMLENBQWlCLG9DQUFqQixFQUF1RHRCLE1BQXZELEM7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7d0lBS1BBLE07Ozs7Ozs7dUJBRXNCLEtBQUt1QyxtQkFBTCxDQUF5QjtBQUMzQ2xCLGtCQUFBQSxHQUFHLEVBQUVyQixNQUFNLENBQUN3QyxlQUFQLENBQXVCSCxVQUF2QixDQUFrQ2hCLEdBREk7QUFFM0NvQixrQkFBQUEsbUJBQW1CLEVBQUV6QyxNQUFNLENBQUN3QyxlQUFQLENBQXVCSCxVQUF2QixDQUFrQ0ksbUJBRlo7QUFHM0NDLGtCQUFBQSxlQUFlLEVBQUUxQyxNQUFNLENBQUMwQyxlQUhtQjtBQUkzQ1Asa0JBQUFBLFlBQVksRUFBRW5DLE1BQU0sQ0FBQ21DO0FBSnNCLGlCQUF6QixDOzs7QUFBaEJQLGdCQUFBQSxPO0FBTU5BLGdCQUFBQSxPQUFPLENBQUNHLE1BQVIsR0FBaUIvQixNQUFNLENBQUN3QyxlQUFQLENBQXVCSCxVQUF2QixDQUFrQ04sTUFBbkQ7bURBQ087QUFDSHpCLGtCQUFBQSxPQUFPLEVBQUVOLE1BQU0sQ0FBQ3dDLGVBQVAsQ0FBdUJsQyxPQUQ3QjtBQUVIc0Isa0JBQUFBLE9BQU8sRUFBUEE7QUFGRyxpQjs7Ozs7Ozs7Ozs7Ozs7Ozs7OztxSUFRUDVCLE07Ozs7Ozs7dUJBRXNCLEtBQUt1QyxtQkFBTCxDQUF5QjtBQUMzQ2xCLGtCQUFBQSxHQUFHLEVBQUVyQixNQUFNLENBQUN3QyxlQUFQLENBQXVCSCxVQUF2QixDQUFrQ2hCLEdBREk7QUFFM0NvQixrQkFBQUEsbUJBQW1CLEVBQUV6QyxNQUFNLENBQUN3QyxlQUFQLENBQXVCSCxVQUF2QixDQUFrQ0ksbUJBRlo7QUFHM0NDLGtCQUFBQSxlQUFlLEVBQUUxQyxNQUFNLENBQUMwQyxlQUhtQjtBQUkzQ1Asa0JBQUFBLFlBQVksRUFBRW5DLE1BQU0sQ0FBQ21DO0FBSnNCLGlCQUF6QixDOzs7QUFBaEJQLGdCQUFBQSxPO0FBTU5BLGdCQUFBQSxPQUFPLENBQUNHLE1BQVIsR0FBaUIvQixNQUFNLENBQUN3QyxlQUFQLENBQXVCSCxVQUF2QixDQUFrQ04sTUFBbkQ7bURBQ087QUFDSHpCLGtCQUFBQSxPQUFPLEVBQUVOLE1BQU0sQ0FBQ3dDLGVBQVAsQ0FBdUJsQyxPQUQ3QjtBQUVIZSxrQkFBQUEsR0FBRyxFQUFFckIsTUFBTSxDQUFDd0MsZUFBUCxDQUF1QkgsVUFBdkIsQ0FBa0NoQixHQUZwQztBQUdIWSxrQkFBQUEsWUFBWSxFQUFFakMsTUFBTSxDQUFDd0MsZUFBUCxDQUF1QlAsWUFIbEM7QUFJSEwsa0JBQUFBLE9BQU8sRUFBUEE7QUFKRyxpQjs7Ozs7Ozs7Ozs7Ozs7Ozs7OzsrSEFTUDVCLE07Ozs7O21EQUVPLEtBQUtzQixXQUFMLENBQWlCLHNCQUFqQixFQUF5Q3RCLE1BQXpDLEM7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7NEhBSVBBLE07Ozs7O21EQUVPLEtBQUtzQixXQUFMLENBQWlCLHVCQUFqQixFQUEwQ3RCLE1BQTFDLEM7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7NEhBSVBBLE07Ozs7O21EQUVPLEtBQUtzQixXQUFMLENBQWlCLG9CQUFqQixFQUF1Q3RCLE1BQXZDLEM7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7NEhBSVBBLE07Ozs7O21EQUVPLEtBQUtzQixXQUFMLENBQWlCLHVCQUFqQixFQUEwQ3RCLE1BQTFDLEM7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7eUhBSVBBLE07Ozs7O21EQUVPLEtBQUtzQixXQUFMLENBQWlCLG9CQUFqQixFQUF1Q3RCLE1BQXZDLEM7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7MkhBSVBBLE07Ozs7O21EQUVPLEtBQUtzQixXQUFMLENBQWlCLHlCQUFqQixFQUE0Q3RCLE1BQTVDLEM7Ozs7Ozs7Ozs7Ozs7OztRQUdYOzs7Ozs4SEFHSUEsTTs7Ozs7bURBRU8sS0FBS3NCLFdBQUwsQ0FBaUIsc0JBQWpCLEVBQXlDdEIsTUFBekMsQzs7Ozs7Ozs7Ozs7Ozs7Ozs7OztxSUFLUEEsTTs7Ozs7bURBRU8sS0FBS3NCLFdBQUwsQ0FBaUIsNkJBQWpCLEVBQWdEdEIsTUFBaEQsQzs7Ozs7Ozs7Ozs7Ozs7Ozs7OztzSUFLUEEsTTs7Ozs7bURBRU8sS0FBS3NCLFdBQUwsQ0FBaUIsOEJBQWpCLEVBQWlEdEIsTUFBakQsQzs7Ozs7Ozs7Ozs7Ozs7O1FBR1g7Ozs7OzBIQUdJQSxNLEVBQ0FDLFU7Ozs7OztnQ0FFV0QsTUFBTSxDQUFDNkIsUzs7Ozs7Ozs7dUJBQ1AsS0FBS2MsVUFBTCxDQUFnQjtBQUNuQkMsa0JBQUFBLFNBQVMsRUFBRTVDLE1BQU0sQ0FBQzhCO0FBREMsaUJBQWhCLEM7OztnREFFSGUsSTs7O0FBSEZ6QyxnQkFBQUEsRTtBQUlBMEMsZ0JBQUFBLFEsR0FBV0MsTUFBTSxDQUFDQyxJQUFQLENBQVk1QyxFQUFaLEVBQWdCLEtBQWhCLEVBQ1o2QyxRQURZLENBQ0gsUUFERyxDOzt1QkFFWCxLQUFLbkQsT0FBTCxDQUFhb0QsWUFBYixDQUEwQixDQUM1QjtBQUNJOUMsa0JBQUFBLEVBQUUsRUFBRTBDLFFBRFI7QUFFSUssa0JBQUFBLElBQUksRUFBRW5ELE1BQU0sQ0FBQzhCO0FBRmpCLGlCQUQ0QixDQUExQixFQUtIN0IsVUFMRyxDOzs7QUFNTixxQkFBS1AsTUFBTCxDQUFZd0IsR0FBWixDQUFnQiw2QkFBaEI7bURBQ09kLEU7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7NkhBSVB3QixPLEVBQ0F3QixZLEVBQ0FuRCxVLEVBQ0FnQixVOzs7Ozs7OztBQUVNdkIsZ0JBQUFBLE0sR0FBUyxLQUFLQSxNOzt1QkFDSSxLQUFLMkQsV0FBTCxDQUFpQnpCLE9BQWpCLEVBQTBCM0IsVUFBMUIsQzs7O0FBQWxCNEIsZ0JBQUFBLFM7QUFDRnlCLGdCQUFBQSxpQixHQUFvQjVELE1BQU0sQ0FBQzZELHdCQUFQLENBQWdDdEMsVUFBaEMsQztBQUNwQnVDLGdCQUFBQSxRLEdBQVcsRTtBQUNYQyxnQkFBQUEsZ0IsR0FBbUIsSzs7cUJBQ25CN0IsT0FBTyxDQUFDRyxNOzs7OztBQUNGQSxnQkFBQUEsTSxHQUFTSCxPQUFPLENBQUNHLE07O3NCQUNuQjJCLElBQUksQ0FBQ0MsR0FBTCxLQUFhNUIsTUFBTSxHQUFHLEk7Ozs7O3NCQUNoQjZCLDBCQUFlQyxxQkFBZixDQUFxQyx5QkFBckMsQzs7O0FBRVY7QUFDQTtBQUNBUCxnQkFBQUEsaUJBQWlCLEdBQUd2QixNQUFNLEdBQUcsSUFBVCxHQUFnQjJCLElBQUksQ0FBQ0MsR0FBTCxFQUFoQixHQUE2QkwsaUJBQWpEOztBQUVNUSxnQkFBQUEsVzs0R0FBYztBQUFBOztBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLG1DQUVZLE1BQUksQ0FBQ2hFLE9BQUwsQ0FBYWlFLE1BQWIsQ0FBb0JDLE9BQXBCLENBQTRCO0FBQ3BEQyw4QkFBQUEsTUFBTSxFQUFFO0FBQ0pDLGdDQUFBQSxNQUFNLEVBQUU7QUFBRUMsa0NBQUFBLG1CQUFtQixFQUFFO0FBQUVDLG9DQUFBQSxFQUFFLEVBQUVyQztBQUFOO0FBQXZCO0FBREosK0JBRDRDO0FBSXBEL0MsOEJBQUFBLE1BQU0sRUFBRSxpQ0FKNEM7QUFLcERxRiw4QkFBQUEsT0FBTyxFQUFFZixpQkFMMkM7QUFNcERyRCw4QkFBQUEsVUFBVSxFQUFWQTtBQU5vRCw2QkFBNUIsQ0FGWjs7QUFBQTtBQUVWcUUsNEJBQUFBLEtBRlU7O0FBQUEsaUNBV1piLGdCQVhZO0FBQUE7QUFBQTtBQUFBOztBQUFBLCtEQVlMLEVBWks7O0FBQUE7QUFlVmMsNEJBQUFBLGNBZlUsR0FlT0QsS0FBSyxDQUFDRSxZQUFOLDhCQUNoQkYsS0FBSyxDQUFDRSxZQUFOLENBQW1CQyxJQUFuQixDQUF3QixVQUFBQyxHQUFHO0FBQUEscUNBQUksQ0FBQyxDQUFDQSxHQUFHLENBQUNILGNBQVY7QUFBQSw2QkFBM0IsQ0FEZ0IsMERBQ2hCLHNCQUFzREEsY0FEdEMsQ0FmUDs7QUFBQSxnQ0FrQlhBLGNBbEJXO0FBQUE7QUFBQTtBQUFBOztBQUFBLGtDQW1CTlgsMEJBQWVlLGFBQWYsQ0FBNkIsMkNBQTdCLENBbkJNOztBQUFBO0FBQUEsK0RBdUJULE1BQUksQ0FBQzdFLE9BQUwsQ0FBYThFLFlBQWIsQ0FBMEJaLE9BQTFCLENBQWtDO0FBQ3JDQyw4QkFBQUEsTUFBTSxFQUFFO0FBQ0o3RCxnQ0FBQUEsRUFBRSxFQUFFO0FBQUVDLGtDQUFBQSxFQUFFLEVBQUVrRTtBQUFOO0FBREEsK0JBRDZCO0FBSXJDdkYsOEJBQUFBLE1BQU0sRUFBRSxJQUo2QjtBQUtyQ3FGLDhCQUFBQSxPQUFPLEVBQUVmLGlCQUw0QjtBQU1yQ3JELDhCQUFBQSxVQUFVLEVBQVZBO0FBTnFDLDZCQUFsQyxDQXZCUzs7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxtQjs7a0NBQWQ2RCxXOzs7OztBQWlDTk4sZ0JBQUFBLFFBQVEsQ0FBQ3FCLElBQVQsQ0FBY2YsV0FBVyxFQUF6Qjs7O0FBR0o7QUFDQU4sZ0JBQUFBLFFBQVEsQ0FBQ3FCLElBQVQsQ0FBYyxJQUFJQyxPQUFKLENBQVksVUFBQ0MsT0FBRCxFQUFVQyxNQUFWLEVBQXFCO0FBQzNDLGdHQUFDO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxtQ0FFd0IsTUFBSSxDQUFDbEYsT0FBTCxDQUFhOEUsWUFBYixDQUEwQlosT0FBMUIsQ0FBa0M7QUFDL0NDLDhCQUFBQSxNQUFNLEVBQUU7QUFDSmdCLGdDQUFBQSxNQUFNLEVBQUU7QUFBRTVFLGtDQUFBQSxFQUFFLEVBQUV3QjtBQUFOLGlDQURKO0FBRUpxRCxnQ0FBQUEsTUFBTSxFQUFFO0FBQUU3RSxrQ0FBQUEsRUFBRSxFQUFFcEMsNEJBQTRCLENBQUNsQjtBQUFuQztBQUZKLCtCQUR1QztBQUsvQ2lDLDhCQUFBQSxNQUFNLEVBQUVvRSxZQUx1QztBQU0vQ2lCLDhCQUFBQSxPQUFPLEVBQUVmLGlCQU5zQztBQU8vQ3JELDhCQUFBQSxVQUFVLEVBQVZBO0FBUCtDLDZCQUFsQyxDQUZ4Qjs7QUFBQTtBQUVha0YsNEJBQUFBLEVBRmI7QUFXTzFCLDRCQUFBQSxnQkFBZ0IsR0FBRyxJQUFuQjtBQUNBc0IsNEJBQUFBLE9BQU8sQ0FBQ0ksRUFBRCxDQUFQO0FBWlA7QUFBQTs7QUFBQTtBQUFBO0FBQUE7QUFjT0gsNEJBQUFBLE1BQU0sZUFBTjs7QUFkUDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxtQkFBRDtBQWlCSCxpQkFsQmEsQ0FBZDs7dUJBb0JzQ0YsT0FBTyxDQUFDTSxJQUFSLENBQWE1QixRQUFiLEM7OztBQUFsQzZCLGdCQUFBQSxXOztvQkFFQzVCLGdCOzs7OztzQkFDS0csMEJBQWUwQixjQUFmLEU7OztBQUVKQyxnQkFBQUEsYyxHQUFpQkYsV0FBVyxDQUFDMUIsR0FBWixJQUFtQixDO0FBQzFDLHFCQUFLakUsTUFBTCxDQUFZd0IsR0FBWixDQUFnQixzQ0FBaEIsRUFBd0Q7QUFDcERkLGtCQUFBQSxFQUFFLEVBQUVpRixXQUFXLENBQUNqRixFQURvQztBQUVwRG9GLGtCQUFBQSxRQUFRLEVBQUVILFdBQVcsQ0FBQ0csUUFGOEI7QUFHcEQ3QixrQkFBQUEsR0FBRyxZQUFLLElBQUlELElBQUosQ0FBUzZCLGNBQWMsR0FBRyxJQUExQixFQUFnQ0UsV0FBaEMsRUFBTCxlQUF1REYsY0FBdkQ7QUFIaUQsaUJBQXhEO21EQUtPRixXOzs7Ozs7Ozs7Ozs7Ozs7Ozs7O21JQUtQckYsTSxFQUNBQyxVLEVBQ0FnQixVOzs7Ozs7QUFFQSxxQkFBS3ZCLE1BQUwsQ0FBWXdCLEdBQVosQ0FBZ0Isc0JBQWhCLEVBQXdDbEIsTUFBeEMsRSxDQUNBOzs7dUJBQ3NCLEtBQUtGLE9BQUwsQ0FBYUksUUFBYixDQUFzQkMsS0FBdEIsQ0FBNEI7QUFDOUM4RCxrQkFBQUEsTUFBTSxFQUFFO0FBQ0o3RCxvQkFBQUEsRUFBRSxFQUFFO0FBQUVDLHNCQUFBQSxFQUFFLEVBQUVMLE1BQU0sQ0FBQ007QUFBYixxQkFEQTtBQUVKb0Ysb0JBQUFBLFFBQVEsRUFBRTtBQUFFckYsc0JBQUFBLEVBQUUsRUFBRS9DLFlBQVksQ0FBQ0U7QUFBbkI7QUFGTixtQkFEc0M7QUFLOUN3QixrQkFBQUEsTUFBTSxFQUFFLElBTHNDO0FBTTlDaUIsa0JBQUFBLFVBQVUsRUFBVkE7QUFOOEMsaUJBQTVCLEM7OztBQUFoQjBGLGdCQUFBQSxPOztzQkFRRkEsT0FBTyxDQUFDbkYsTUFBUixHQUFpQixDOzs7OzttREFDVjtBQUNIRixrQkFBQUEsT0FBTyxFQUFFTixNQUFNLENBQUNNLE9BRGI7QUFFSHNGLGtCQUFBQSxlQUFlLEVBQUU7QUFGZCxpQjs7Ozt1QkFNZSxLQUFLQyxjQUFMLENBQ3RCN0YsTUFBTSxDQUFDNEIsT0FEZSxFQUV0QmtFLGtCQUZzQixFQUd0QjdGLFVBSHNCLEVBSXRCZ0IsVUFKc0IsQzs7O0FBQXBCb0UsZ0JBQUFBLFc7O3VCQU1BVSxnQkFBZ0IsQ0FBQ1YsV0FBRCxDOzs7QUFDdEIscUJBQUszRixNQUFMLENBQVl3QixHQUFaLENBQWdCLDJCQUFoQjttREFDTztBQUNIWixrQkFBQUEsT0FBTyxFQUFFTixNQUFNLENBQUNNLE9BRGI7QUFFSHNGLGtCQUFBQSxlQUFlLEVBQUUsS0FGZDtBQUdIUCxrQkFBQUEsV0FBVyxFQUFYQTtBQUhHLGlCOzs7Ozs7Ozs7Ozs7Ozs7Ozs7O2dJQVNQckYsTSxFQUNBQyxVLEVBQ0FnQixVOzs7Ozs7OztBQUVBLHFCQUFLdkIsTUFBTCxDQUFZd0IsR0FBWixDQUFnQixtQkFBaEIsRUFBcUNsQixNQUFyQzs7dUJBQzBCLEtBQUs2RixjQUFMLENBQ3RCN0YsTUFBTSxDQUFDNEIsT0FEZSxFQUV0QmtFLGtCQUZzQixFQUd0QjdGLFVBSHNCLEVBSXRCZ0IsVUFKc0IsQzs7O0FBQXBCb0UsZ0JBQUFBLFc7O3VCQU1BVSxnQkFBZ0IsQ0FBQ1YsV0FBRCxDOzs7QUFDaEJXLGdCQUFBQSxjLEdBQWlCWCxXQUFXLENBQUNZLFk7O3NCQUMvQixDQUFDRCxjQUFELElBQW1CQSxjQUFjLENBQUN4RixNQUFmLEtBQTBCLEM7Ozs7O21EQUN0QztBQUNIMEYsa0JBQUFBLE1BQU0sRUFBRSxJQURMO0FBRUhiLGtCQUFBQSxXQUFXLEVBQVhBO0FBRkcsaUI7OztBQUtMYyxnQkFBQUEsZ0IsR0FBK0JILGNBQWMsQ0FBQy9CLE1BQWYsQ0FBc0IsVUFBQ21DLENBQUQsRUFBaUI7QUFDeEUseUJBQU9BLENBQUMsQ0FBQ0MsUUFBRixLQUFlL0osWUFBWSxDQUFDRyxNQUFuQztBQUNILGlCQUZvQyxDO0FBR3JDLHFCQUFLaUQsTUFBTCxDQUFZd0IsR0FBWixDQUFnQiwwQ0FBaEI7O3VCQUNzQjRELE9BQU8sQ0FBQ3dCLEdBQVIsQ0FBWUgsZ0JBQWdCLENBQUNJLEdBQWpCLENBQXFCLFVBQUNILENBQUQsRUFBaUI7QUFDcEUseUJBQU8sTUFBSSxDQUFDSSx1QkFBTCxDQUE2QjtBQUNoQ25GLG9CQUFBQSxHQUFHLEVBQUVyQixNQUFNLENBQUNxQixHQURvQjtBQUVoQ29GLG9CQUFBQSxVQUFVLEVBQUVMLENBQUMsQ0FBQ2pELElBQUYsSUFBVTtBQUZVLG1CQUE3QixDQUFQO0FBSUgsaUJBTGlDLENBQVosQzs7O0FBQWhCdUQsZ0JBQUFBLE87QUFNQUMsZ0JBQUFBLFksR0FBZUQsT0FBTyxDQUFDakMsSUFBUixDQUFhLFVBQUMyQixDQUFELEVBQTJDO0FBQ3pFLHlCQUFPQSxDQUFDLFlBQUQsQ0FBV1EsV0FBWCxPQUE2QjVHLE1BQU0sQ0FBQ2lDLFlBQVAsQ0FBb0IyRSxXQUFwQixFQUFwQztBQUNILGlCQUZvQixDO0FBR3JCLHFCQUFLbEgsTUFBTCxDQUFZd0IsR0FBWixDQUFnQix3QkFBaEI7bURBQ087QUFDSGdGLGtCQUFBQSxNQUFNLEVBQUVTLFlBQVksR0FBR0EsWUFBWSxDQUFDVCxNQUFoQixHQUF5QixJQUQxQztBQUVIYixrQkFBQUEsV0FBVyxFQUFYQTtBQUZHLGlCOzs7Ozs7Ozs7Ozs7Ozs7Ozs7O3FJQU9QckYsTSxFQUNBNkcsVSxFQUNBNUcsVTs7Ozs7O0FBRUEscUJBQUtQLE1BQUwsQ0FBWXdCLEdBQVosQ0FBZ0Isd0JBQWhCLEVBQTBDbEIsTUFBMUM7O3VCQUVzQixLQUFLOEcsVUFBTCxDQUFnQjlHLE1BQU0sQ0FBQ00sT0FBdkIsRUFBZ0MsSUFBaEMsRUFBc0N1RyxVQUF0QyxFQUFrRDVHLFVBQWxELEM7OztBQUFoQjBGLGdCQUFBQSxPO21EQUVDLEtBQUtyRSxXQUFMLENBQWlCLHlCQUFqQixFQUE0QztBQUMvQ2hCLGtCQUFBQSxPQUFPLEVBQUVOLE1BQU0sQ0FBQ00sT0FEK0I7QUFFL0NxRixrQkFBQUEsT0FBTyxFQUFQQSxPQUYrQztBQUcvQ3RFLGtCQUFBQSxHQUFHLEVBQUVyQixNQUFNLENBQUNxQixHQUhtQztBQUkvQ1ksa0JBQUFBLFlBQVksRUFBRWpDLE1BQU0sQ0FBQ2lDLFlBSjBCO0FBSy9DOEUsa0JBQUFBLGFBQWEsRUFBRS9HLE1BQU0sQ0FBQzRCLE9BQVAsQ0FBZUU7QUFMaUIsaUJBQTVDLEM7Ozs7Ozs7Ozs7Ozs7OztRQVNYOzs7OzswSEFLSTlCLE0sRUFDQUMsVTs7Ozs7O0FBRUEscUJBQUtQLE1BQUwsQ0FBWXdCLEdBQVosQ0FBZ0IsYUFBaEIsRUFBK0JsQixNQUEvQjs7dUJBRXNCLEtBQUs4RyxVQUFMLENBQWdCOUcsTUFBTSxDQUFDTSxPQUF2QixFQUFnQyxJQUFoQyxFQUFzQ04sTUFBTSxDQUFDNkcsVUFBN0MsRUFBeUQ1RyxVQUF6RCxDOzs7QUFBaEIwRixnQkFBQUEsTzs7QUFFTixvQkFBSTNGLE1BQU0sQ0FBQ2dILGNBQVgsRUFBMkI7QUFDdkJyQixrQkFBQUEsT0FBTyxDQUFDakYsT0FBUixHQUFrQixLQUFLdUcsVUFBdkI7QUFDSDs7bURBRU0sS0FBSzNGLFdBQUwsQ0FBaUIsbUJBQWpCLEVBQXNDO0FBQ3pDaEIsa0JBQUFBLE9BQU8sRUFBRU4sTUFBTSxDQUFDTSxPQUR5QjtBQUV6Q3FGLGtCQUFBQSxPQUFPLEVBQVBBLE9BRnlDO0FBR3pDdEUsa0JBQUFBLEdBQUcsRUFBRXJCLE1BQU0sQ0FBQ3FCLEdBSDZCO0FBSXpDWSxrQkFBQUEsWUFBWSxFQUFFakMsTUFBTSxDQUFDaUMsWUFKb0I7QUFLekNDLGtCQUFBQSxLQUFLLEVBQUVsQyxNQUFNLENBQUNrQyxLQUwyQjtBQU16Q1Isa0JBQUFBLE9BQU8sRUFBRTFCLE1BQU0sQ0FBQzBCO0FBTnlCLGlCQUF0QyxDOzs7Ozs7Ozs7Ozs7Ozs7Ozs7OzZIQVdQMUIsTSxFQUNBQyxVOzs7Ozs7QUFFQSxxQkFBS1AsTUFBTCxDQUFZd0IsR0FBWixDQUFnQixnQkFBaEIsRUFBa0NsQixNQUFsQzs7dUJBRXNCLEtBQUtrSCxtQkFBTCxDQUF5QmxILE1BQXpCLEM7OztBQUFoQjRCLGdCQUFBQSxPO21EQUVDLEtBQUt1RixrQkFBTCxDQUF3QjtBQUMzQjdHLGtCQUFBQSxPQUFPLEVBQUVzQixPQUFPLENBQUN0QixPQURVO0FBRTNCc0Isa0JBQUFBLE9BQU8sRUFBRUEsT0FBTyxDQUFDQSxPQUZVO0FBRzNCb0Ysa0JBQUFBLGNBQWMsRUFBRWhILE1BQU0sQ0FBQ2dILGNBSEk7QUFJM0JJLGtCQUFBQSxVQUFVLEVBQUVwSCxNQUFNLENBQUNvSDtBQUpRLGlCQUF4QixFQUtKbkgsVUFMSSxDOzs7Ozs7Ozs7Ozs7Ozs7Ozs7O2lJQVNQRCxNLEVBQ0FDLFU7Ozs7OztBQUVBLHFCQUFLUCxNQUFMLENBQVl3QixHQUFaLENBQWdCLG9CQUFoQixFQUFzQ2xCLE1BQXRDO0FBRUkyRixnQkFBQUEsTyxHQUFvQjtBQUNwQmpGLGtCQUFBQSxPQUFPLEVBQUUsS0FBS3VHLFVBRE07QUFFcEI3RyxrQkFBQUEsRUFBRSxFQUFFSixNQUFNLENBQUNNLE9BRlM7QUFHcEIrRyxrQkFBQUEsU0FBUyxFQUFFQyxJQUFJLENBQUNDLEtBQUwsQ0FBVzdELElBQUksQ0FBQ0MsR0FBTCxLQUFhLElBQXhCO0FBSFMsaUI7O29CQU1uQjNELE1BQU0sQ0FBQ29ILFU7Ozs7Ozt1QkFDUSxLQUFLTixVQUFMLENBQWdCOUcsTUFBTSxDQUFDTSxPQUF2QixFQUFnQyxLQUFoQyxFQUF1Q04sTUFBTSxDQUFDNkcsVUFBOUMsRUFBMEQ1RyxVQUExRCxDOzs7QUFBaEIwRixnQkFBQUEsTzs7O0FBR0osb0JBQUkzRixNQUFNLENBQUNnSCxjQUFYLEVBQTJCO0FBQ3ZCckIsa0JBQUFBLE9BQU8sQ0FBQ2pGLE9BQVIsR0FBa0IsS0FBS3VHLFVBQXZCO0FBQ0g7O21EQUVNLEtBQUszRixXQUFMLENBQWlCLHVCQUFqQixFQUEwQztBQUM3Q2hCLGtCQUFBQSxPQUFPLEVBQUVOLE1BQU0sQ0FBQ00sT0FENkI7QUFFN0NxRixrQkFBQUEsT0FBTyxFQUFQQSxPQUY2QztBQUc3Q29CLGtCQUFBQSxhQUFhLEVBQUUvRyxNQUFNLENBQUM0QixPQUFQLENBQWVFO0FBSGUsaUJBQTFDLEM7Ozs7Ozs7Ozs7Ozs7OztRQU9YOzs7Ozs2SEFFcUI5QixNOzs7OzttREFDVixLQUFLc0IsV0FBTCxDQUFpQiwyQkFBakIsRUFBOEN0QixNQUE5QyxDOzs7Ozs7Ozs7Ozs7Ozs7UUFHWDs7Ozs7bUlBRTJCQSxNOzs7OzttREFDaEIsS0FBS3NCLFdBQUwsQ0FBaUIsa0JBQWpCLEVBQXFDO0FBQ3hDRCxrQkFBQUEsR0FBRyxFQUFFckIsTUFBTSxXQUFOLENBQWVxQixHQURvQjtBQUV4Q0Ysa0JBQUFBLGlCQUFpQixFQUFFbkIsTUFBTSxDQUFDbUIsaUJBRmM7QUFHeENJLGtCQUFBQSxpQkFBaUIsRUFBRXZCLE1BQU0sQ0FBQ3VCLGlCQUhjO0FBSXhDQyxrQkFBQUEsVUFBVSxFQUFFeEIsTUFBTSxDQUFDd0IsVUFKcUI7QUFLeENDLGtCQUFBQSxXQUFXLEVBQUV6QixNQUFNLFdBQU4sQ0FBZXlCLFdBTFk7QUFNeENDLGtCQUFBQSxPQUFPLEVBQUUxQixNQUFNLENBQUMwQjtBQU53QixpQkFBckMsQzs7Ozs7Ozs7Ozs7Ozs7Ozs7OztnSUFXYTFCLE07Ozs7Ozt1QkFDUCxLQUFLc0IsV0FBTCxDQUFpQixlQUFqQixFQUFrQztBQUMzQ2hCLGtCQUFBQSxPQUFPLEVBQUVOLE1BQU0sQ0FBQ00sT0FEMkI7QUFFM0NlLGtCQUFBQSxHQUFHLEVBQUVyQixNQUFNLENBQUNxQixHQUYrQjtBQUczQ1ksa0JBQUFBLFlBQVksRUFBRWpDLE1BQU0sQ0FBQ2lDLFlBSHNCO0FBSTNDRCxrQkFBQUEsTUFBTSxFQUFFaEMsTUFBTSxDQUFDZ0MsTUFKNEI7QUFLM0NFLGtCQUFBQSxLQUFLLEVBQUVsQyxNQUFNLENBQUNrQyxLQUw2QjtBQU0zQ1Isa0JBQUFBLE9BQU8sRUFBRTFCLE1BQU0sQ0FBQzBCO0FBTjJCLGlCQUFsQyxDOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7cUNBV2JMLEcsRUFDQW1HLFUsRUFDQXZHLFUsRUFDRztBQUNILFVBQU1vRCxPQUFPLEdBQUcsS0FBSzNFLE1BQUwsQ0FBWStILHdCQUFaLENBQXFDeEcsVUFBckMsQ0FBaEI7O0FBQ0EsVUFBSUksR0FBRyxDQUFDVyxNQUFKLElBQWNYLEdBQUcsQ0FBQ1csTUFBSixDQUFXMEYsUUFBWCxDQUFvQixRQUFwQixDQUFkLElBQStDLEVBQUNGLFVBQUQsYUFBQ0EsVUFBRCx1QkFBQ0EsVUFBVSxDQUFFekYsTUFBYixDQUFuRCxFQUF3RTtBQUNwRSxpQ0FDT3lGLFVBRFA7QUFFSXpGLFVBQUFBLE1BQU0sRUFBRXVGLElBQUksQ0FBQ0MsS0FBTCxDQUFXLENBQUM3RCxJQUFJLENBQUNDLEdBQUwsS0FBYVUsT0FBZCxJQUF5QixJQUFwQyxJQUE0QztBQUZ4RDtBQUlILE9BTEQsTUFLTztBQUNILGVBQU9tRCxVQUFQO0FBQ0g7QUFDSjs7Ozt3SEFFZUcsSTs7Ozs7O0FBQ05DLGdCQUFBQSxZLEdBQWUsS0FBS2xJLE1BQUwsQ0FBWW1JLG1CQUFaLEU7QUFDWkMsZ0JBQUFBLEMsR0FBSSxDOzs7c0JBQUdBLENBQUMsSUFBSUYsWTs7Ozs7QUFDakIsb0JBQUlFLENBQUMsR0FBRyxDQUFSLEVBQVc7QUFDUCx1QkFBS3BJLE1BQUwsQ0FBWXdCLEdBQVosa0JBQTBCNEcsQ0FBMUI7QUFDSDs7Ozt1QkFFZ0JILElBQUksQ0FBQ0csQ0FBRCxDOzs7Ozs7Ozs7b0JBRVpsRSwwQkFBZW1FLGdCQUFmLGU7Ozs7Ozs7O0FBUHNCRCxnQkFBQUEsQ0FBQyxFOzs7OztzQkFZOUJsRSwwQkFBZTBCLGNBQWYsRTs7Ozs7Ozs7Ozs7Ozs7Ozs7OzsrSEFJTnRGLE0sRUFDQUMsVTs7Ozs7OztBQUVBLHFCQUFLUCxNQUFMLENBQVl3QixHQUFaLENBQWdCLGNBQWhCO21EQUNPLEtBQUs4RyxTQUFMO0FBQUEsNEdBQWUsbUJBQU8vRyxVQUFQO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsbUNBQ0ksTUFBSSxDQUFDaUcsbUJBQUwsQ0FBeUJsSCxNQUF6QixFQUFpQ2lCLFVBQWpDLENBREo7O0FBQUE7QUFDWlcsNEJBQUFBLE9BRFk7QUFBQSwrREFFWCxNQUFJLENBQUNxRyxvQkFBTCxDQUEwQnJHLE9BQTFCLEVBQW1DM0IsVUFBbkMsRUFBK0NnQixVQUEvQyxDQUZXOztBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLG1CQUFmOztBQUFBO0FBQUE7QUFBQTtBQUFBLG9COzs7Ozs7Ozs7Ozs7Ozs7Ozs7OzRIQVFQakIsTSxFQUNBQyxVOzs7Ozs7O0FBRUEscUJBQUtQLE1BQUwsQ0FBWXdCLEdBQVosQ0FBZ0IsV0FBaEI7bURBQ08sS0FBSzhHLFNBQUw7QUFBQSw0R0FBZSxtQkFBTy9HLFVBQVA7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxtQ0FDSSxNQUFJLENBQUNpSCxnQkFBTCxDQUFzQmxJLE1BQXRCLEVBQThCaUIsVUFBOUIsQ0FESjs7QUFBQTtBQUNaVyw0QkFBQUEsT0FEWTtBQUFBLCtEQUVYLE1BQUksQ0FBQ3VHLGlCQUFMLENBQXVCdkcsT0FBdkIsRUFBZ0MzQixVQUFoQyxFQUE0Q2dCLFVBQTVDLENBRlc7O0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsbUJBQWY7O0FBQUE7QUFBQTtBQUFBO0FBQUEsb0I7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7eUhBT1BYLE8sRUFDQTlDLE0sRUFDQXFKLFUsRUFDQTVHLFU7WUFFU21JLGM7Ozs7O0FBQUFBLGdCQUFBQSxjLDRCQUFldEosRyxFQUFVO0FBQzlCLHNCQUFJQSxHQUFHLENBQUN1SixVQUFSLEVBQW9CO0FBQ2hCLDJCQUFPdkosR0FBRyxDQUFDdUosVUFBWDtBQUNIOztBQUNEQyxrQkFBQUEsTUFBTSxDQUFDQyxNQUFQLENBQWN6SixHQUFkLEVBQ0tHLE9BREwsQ0FDYSxVQUFDdUosS0FBRCxFQUFXO0FBQ2hCLHdCQUFJLENBQUMsQ0FBQ0EsS0FBRixJQUFXLHlCQUFPQSxLQUFQLE1BQWlCLFFBQWhDLEVBQTBDO0FBQ3RDSixzQkFBQUEsY0FBYyxDQUFDSSxLQUFELENBQWQ7QUFDSDtBQUNKLG1CQUxMO0FBTUgsaUI7O0FBRUt2RSxnQkFBQUEsTSxHQUE0QjtBQUM5QjdELGtCQUFBQSxFQUFFLEVBQUU7QUFBRUMsb0JBQUFBLEVBQUUsRUFBRUM7QUFBTjtBQUQwQixpQjs7QUFHbEMsb0JBQUl1RyxVQUFVLElBQUlBLFVBQVUsQ0FBQzRCLGFBQTdCLEVBQTRDO0FBQ3hDeEUsa0JBQUFBLE1BQU0sQ0FBQ3lFLGFBQVAsR0FBdUI7QUFBRXRFLG9CQUFBQSxFQUFFLEVBQUV5QyxVQUFVLENBQUM0QjtBQUFqQixtQkFBdkI7QUFDSDs7QUFDRCxvQkFBSWpMLE1BQUosRUFBWTtBQUNSeUcsa0JBQUFBLE1BQU0sQ0FBQ3lCLFFBQVAsR0FBa0I7QUFBRXJGLG9CQUFBQSxFQUFFLEVBQUUvQyxZQUFZLENBQUNFO0FBQW5CLG1CQUFsQjtBQUNIOztBQUVELHFCQUFLa0MsTUFBTCxDQUFZd0IsR0FBWixDQUFnQixvQkFBaEIsRUFBc0MrQyxNQUF0Qzs7dUJBQ3NCLEtBQUtuRSxPQUFMLENBQWFJLFFBQWIsQ0FBc0I4RCxPQUF0QixDQUNsQkMsTUFEa0IsRUFFbEIsaUVBRmtCLEVBR2xCNEMsVUFBVSxJQUFJQSxVQUFVLENBQUN4QyxPQUhQLEVBSWxCcEUsVUFKa0IsQzs7O0FBQWhCMEYsZ0JBQUFBLE87QUFPTnlDLGdCQUFBQSxjQUFjLENBQUN6QyxPQUFELENBQWQ7QUFDQSxxQkFBS2pHLE1BQUwsQ0FBWXdCLEdBQVosQ0FBZ0IsOEJBQWhCLEVBQWdEeUUsT0FBaEQ7bURBQ09BLE87Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7aUlBSVAzRixNLEVBQ0FDLFU7Ozs7Ozs7dUJBRXNCLEtBQUs2RyxVQUFMLENBQ2xCOUcsTUFBTSxDQUFDTSxPQURXLEVBRWxCLElBRmtCLEVBR2xCTixNQUFNLENBQUM2RyxVQUhXLEVBSWxCNUcsVUFKa0IsQzs7O0FBQWhCMEYsZ0JBQUFBLE87bURBT0MsS0FBS3JFLFdBQUwsQ0FBaUIscUJBQWpCLEVBQXdDO0FBQzNDaEIsa0JBQUFBLE9BQU8sRUFBRU4sTUFBTSxDQUFDTSxPQUQyQjtBQUUzQ3FGLGtCQUFBQSxPQUFPLEVBQVBBLE9BRjJDO0FBRzNDdEUsa0JBQUFBLEdBQUcsRUFBRXJCLE1BQU0sQ0FBQ3FCLEdBSCtCO0FBSTNDWSxrQkFBQUEsWUFBWSxFQUFFakMsTUFBTSxDQUFDaUMsWUFKc0I7QUFLM0NDLGtCQUFBQSxLQUFLLEVBQUVsQyxNQUFNLENBQUNrQyxLQUw2QjtBQU0zQ1Isa0JBQUFBLE9BQU8sRUFBRTFCLE1BQU0sQ0FBQzBCO0FBTjJCLGlCQUF4QyxDOzs7Ozs7Ozs7Ozs7Ozs7Ozs7RUFoc0JpQ2lILHFCOzs7QUEyc0JoRGxKLGtCQUFrQixDQUFDbUosVUFBbkIsR0FBZ0Msb0JBQWhDOztTQUVlN0MsZ0I7Ozs7O29HQUFmLG1CQUFnQ1YsV0FBaEM7QUFBQSxRQUthd0QsU0FMYjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBS2FBLFlBQUFBLFNBTGIsdUJBS3VCakgsT0FMdkIsRUFLd0NrSCxJQUx4QyxFQUtzREMsS0FMdEQsRUFLcUU7QUFDN0Qsa0JBQU1DLGlCQUFpQixHQUFHLEVBQTFCO0FBQ0Esa0JBQU1DLGVBQWUsR0FBRyxFQUF4QjtBQUNBLGtCQUFNQyxzQkFBc0IsR0FBR0gsS0FBSyxLQUFLcE8seUJBQXlCLENBQUNHLFNBQXBDLEtBQ3ZCZ08sSUFBSSxLQUFLRyxlQUFULElBQTRCSCxJQUFJLEtBQUtFLGlCQURkLENBQS9CO0FBRUEscUJBQU9FLHNCQUFzQixHQUN2QnRGLDBCQUFlMEIsY0FBZixFQUR1QixHQUV2QixJQUFJMUIseUJBQUosV0FDS2hDLE9BREwsZUFDaUJrSCxJQURqQixrQkFDNkJDLEtBRDdCLEdBRUVELElBRkYsRUFHRWxGLDBCQUFldUYsTUFBZixDQUFzQkMsSUFIeEIsRUFJRTtBQUNJTCxnQkFBQUEsS0FBSyxFQUFMQSxLQURKO0FBRUl4RSxnQkFBQUEsY0FBYyxFQUFFYyxXQUFXLENBQUNqRjtBQUZoQyxlQUpGLENBRk47QUFXSCxhQXJCTDs7QUFBQSxnQkFDU2lGLFdBQVcsQ0FBQ2dFLE9BRHJCO0FBQUE7QUFBQTtBQUFBOztBQUFBOztBQUFBO0FBdUJVek8sWUFBQUEsT0F2QlYsR0F1Qm9CeUssV0FBVyxDQUFDekssT0F2QmhDOztBQUFBLGlCQXdCUUEsT0F4QlI7QUFBQTtBQUFBO0FBQUE7O0FBeUJjc0ssWUFBQUEsTUF6QmQsR0F5QnVCdEssT0FBTyxDQUFDME8sYUF6Qi9COztBQUFBLGtCQTBCWXBFLE1BQU0sS0FBSzlHLG9CQUFvQixDQUFDN0MsTUExQjVDO0FBQUE7QUFBQTtBQUFBOztBQUFBLGtCQTJCa0JzTixTQUFTLENBQ1gsc0NBRFcsRUFFWHhOLHNCQUFzQixDQUFDRSxNQUZaLEVBR1haLHlCQUF5QixDQUFDQyxPQUhmLENBM0IzQjs7QUFBQTtBQUFBLGtCQWlDWXNLLE1BQU0sS0FBSzlHLG9CQUFvQixDQUFDNUMsT0FqQzVDO0FBQUE7QUFBQTtBQUFBOztBQUFBLGtCQWtDa0JxTixTQUFTLENBQ1gsdUNBRFcsRUFFWHhOLHNCQUFzQixDQUFDRyxPQUZaLEVBR1hiLHlCQUF5QixDQUFDQyxPQUhmLENBbEMzQjs7QUFBQTtBQTBDVTJPLFlBQUFBLE9BMUNWLEdBMENvQmxFLFdBQVcsQ0FBQ2tFLE9BMUNoQzs7QUFBQSxpQkEyQ1FBLE9BM0NSO0FBQUE7QUFBQTtBQUFBOztBQUFBLGtCQTRDWUEsT0FBTyxDQUFDQyxZQUFSLEtBQXlCbkwsWUFBWSxDQUFDQyxPQTVDbEQ7QUFBQTtBQUFBO0FBQUE7O0FBNkNrQm1MLFlBQUFBLE1BN0NsQixHQTZDMkJGLE9BQU8sQ0FBQ0csY0E3Q25DOztBQUFBLGtCQThDZ0JELE1BQU0sS0FBS2pMLFdBQVcsQ0FBQ3RELE9BOUN2QztBQUFBO0FBQUE7QUFBQTs7QUFBQSxrQkErQ3NCMk4sU0FBUyxDQUNYLDhCQURXLEVBRVg1Tiw2QkFBNkIsQ0FBQ0MsT0FGbkIsRUFHWFAseUJBQXlCLENBQUNFLGNBSGYsQ0EvQy9COztBQUFBO0FBQUEsa0JBcURnQjRPLE1BQU0sS0FBS2pMLFdBQVcsQ0FBQ3JELFFBckR2QztBQUFBO0FBQUE7QUFBQTs7QUFBQSxrQkFzRHNCME4sU0FBUyxDQUNYLDBDQURXLEVBRVg1Tiw2QkFBNkIsQ0FBQ0UsUUFGbkIsRUFHWFIseUJBQXlCLENBQUNFLGNBSGYsQ0F0RC9COztBQUFBO0FBQUEsa0JBNERnQjRPLE1BQU0sS0FBS2pMLFdBQVcsQ0FBQ3BELEtBNUR2QztBQUFBO0FBQUE7QUFBQTs7QUFBQSxrQkE2RHNCeU4sU0FBUyxDQUNYLHNCQURXLEVBRVg1Tiw2QkFBNkIsQ0FBQ0csS0FGbkIsRUFHWFQseUJBQXlCLENBQUNFLGNBSGYsQ0E3RC9COztBQUFBO0FBQUEsa0JBbUVrQmdPLFNBQVMsQ0FDWCx5Q0FEVyxFQUVYLENBQUMsQ0FGVSxFQUdYbE8seUJBQXlCLENBQUNFLGNBSGYsQ0FuRTNCOztBQUFBO0FBQUEsa0JBeUVZME8sT0FBTyxDQUFDQyxZQUFSLEtBQXlCbkwsWUFBWSxDQUFDRSxFQXpFbEQ7QUFBQTtBQUFBO0FBQUE7O0FBQUEsZ0JBMEVpQmdMLE9BQU8sQ0FBQ0ksT0ExRXpCO0FBQUE7QUFBQTtBQUFBOztBQUFBLGtCQTJFc0JkLFNBQVMsQ0FDWCw4QkFEVyxFQUVYVSxPQUFPLENBQUNLLFNBQVIsSUFBcUIsQ0FGVixFQUdYalAseUJBQXlCLENBQUNHLFNBSGYsQ0EzRS9COztBQUFBO0FBb0ZVQyxZQUFBQSxNQXBGVixHQW9GbUJzSyxXQUFXLENBQUN0SyxNQXBGL0I7O0FBQUEsaUJBcUZRQSxNQXJGUjtBQUFBO0FBQUE7QUFBQTs7QUFBQSxnQkFzRmFBLE1BQU0sQ0FBQzRPLE9BdEZwQjtBQUFBO0FBQUE7QUFBQTs7QUFBQSxrQkF1RmtCZCxTQUFTLENBQ1g5TixNQUFNLENBQUM4TyxRQUFQLEdBQ00sMENBRE4sR0FFTyxDQUFDOU8sTUFBTSxDQUFDK08sS0FBUixHQUFnQiw2QkFBaEIsR0FBZ0QscUJBSDVDLEVBSVgvTyxNQUFNLENBQUNnUCxXQUFQLElBQXNCLENBSlgsRUFLWHBQLHlCQUF5QixDQUFDSSxNQUxmLENBdkYzQjs7QUFBQTtBQUFBLGtCQWlHVThOLFNBQVMsQ0FDWCxxQkFEVyxFQUVYLENBQUMsQ0FGVSxFQUdYbE8seUJBQXlCLENBQUNLLE9BSGYsQ0FqR25COztBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLEc7Ozs7QUF3R0EsSUFBTThLLGtCQUFrQix5ZEFBeEIiLCJzb3VyY2VzQ29udGVudCI6WyIvKlxuICogQ29weXJpZ2h0IDIwMTgtMjAyMCBUT04gREVWIFNPTFVUSU9OUyBMVEQuXG4gKlxuICogTGljZW5zZWQgdW5kZXIgdGhlIFNPRlRXQVJFIEVWQUxVQVRJT04gTGljZW5zZSAodGhlIFwiTGljZW5zZVwiKTsgeW91IG1heSBub3QgdXNlXG4gKiB0aGlzIGZpbGUgZXhjZXB0IGluIGNvbXBsaWFuY2Ugd2l0aCB0aGUgTGljZW5zZS4gIFlvdSBtYXkgb2J0YWluIGEgY29weSBvZiB0aGVcbiAqIExpY2Vuc2UgYXQ6XG4gKlxuICogaHR0cDovL3d3dy50b24uZGV2L2xpY2Vuc2VzXG4gKlxuICogVW5sZXNzIHJlcXVpcmVkIGJ5IGFwcGxpY2FibGUgbGF3IG9yIGFncmVlZCB0byBpbiB3cml0aW5nLCBzb2Z0d2FyZVxuICogZGlzdHJpYnV0ZWQgdW5kZXIgdGhlIExpY2Vuc2UgaXMgZGlzdHJpYnV0ZWQgb24gYW4gXCJBUyBJU1wiIEJBU0lTLFxuICogV0lUSE9VVCBXQVJSQU5USUVTIE9SIENPTkRJVElPTlMgT0YgQU5ZIEtJTkQsIGVpdGhlciBleHByZXNzIG9yIGltcGxpZWQuXG4gKiBTZWUgdGhlIExpY2Vuc2UgZm9yIHRoZSBzcGVjaWZpYyBUT04gREVWIHNvZnR3YXJlIGdvdmVybmluZyBwZXJtaXNzaW9ucyBhbmRcbiAqIGxpbWl0YXRpb25zIHVuZGVyIHRoZSBMaWNlbnNlLlxuICovXG4vLyBAZmxvd1xuXG5pbXBvcnQgeyBTcGFuLCBTcGFuQ29udGV4dCB9IGZyb20gJ29wZW50cmFjaW5nJztcbmltcG9ydCB0eXBlIHtcbiAgICBRQWNjb3VudCxcbiAgICBRQmxvY2ssXG4gICAgUU1lc3NhZ2UsXG4gICAgUVRyYW5zYWN0aW9uLFxuICAgIFRPTkNvbnRyYWN0QUJJLFxuICAgIFRPTkNvbnRyYWN0QWNjb3VudFdhaXRQYXJhbXMsXG4gICAgVE9OQ29udHJhY3RDb252ZXJ0QWRkcmVzc1BhcmFtcyxcbiAgICBUT05Db250cmFjdENvbnZlcnRBZGRyZXNzUmVzdWx0LFxuICAgIFRPTkNvbnRyYWN0Q3JlYXRlUnVuQm9keVBhcmFtcyxcbiAgICBUT05Db250cmFjdENyZWF0ZVJ1bkJvZHlSZXN1bHQsXG4gICAgVE9OQ29udHJhY3RDcmVhdGVTaWduZWREZXBsb3lNZXNzYWdlUGFyYW1zLFxuICAgIFRPTkNvbnRyYWN0Q3JlYXRlU2lnbmVkTWVzc2FnZVBhcmFtcyxcbiAgICBUT05Db250cmFjdENyZWF0ZVNpZ25lZFJ1bk1lc3NhZ2VQYXJhbXMsXG4gICAgVE9OQ29udHJhY3REZWNvZGVNZXNzYWdlQm9keVBhcmFtcyxcbiAgICBUT05Db250cmFjdERlY29kZU1lc3NhZ2VCb2R5UmVzdWx0LFxuICAgIFRPTkNvbnRyYWN0RGVjb2RlUnVuT3V0cHV0UGFyYW1zLFxuICAgIFRPTkNvbnRyYWN0RGVwbG95TWVzc2FnZSxcbiAgICBUT05Db250cmFjdERlcGxveVBhcmFtcyxcbiAgICBUT05Db250cmFjdERlcGxveVJlc3VsdCxcbiAgICBUT05Db250cmFjdENhbGNEZXBsb3lGZWVQYXJhbXMsXG4gICAgVE9OQ29udHJhY3RCb2MsXG4gICAgVE9OQ29udHJhY3RHZXRCb2NIYXNoUmVzdWx0LFxuICAgIFRPTkNvbnRyYWN0R2V0Q29kZUZyb21JbWFnZVBhcmFtcyxcbiAgICBUT05Db250cmFjdEdldENvZGVGcm9tSW1hZ2VSZXN1bHQsXG4gICAgVE9OQ29udHJhY3RHZXREZXBsb3lEYXRhUGFyYW1zLFxuICAgIFRPTkNvbnRyYWN0R2V0RGVwbG95RGF0YVJlc3VsdCxcbiAgICBUT05Db250cmFjdEdldEZ1bmN0aW9uSWRQYXJhbXMsXG4gICAgVE9OQ29udHJhY3RHZXRGdW5jdGlvbklkUmVzdWx0LFxuICAgIFRPTkNvbnRyYWN0TG9hZFBhcmFtcyxcbiAgICBUT05Db250cmFjdExvYWRSZXN1bHQsXG4gICAgVE9OQ29udHJhY3RDYWxjUnVuRmVlUGFyYW1zLFxuICAgIFRPTkNvbnRyYWN0VHJhbnNhY3Rpb25GZWVzLFxuICAgIFRPTkNvbnRyYWN0Q2FsY0ZlZVJlc3VsdCxcbiAgICBUT05Db250cmFjdENhbGNNc2dQcm9jZXNzaW5nRmVlc1BhcmFtcyxcbiAgICBUT05Db250cmFjdE1lc3NhZ2UsXG4gICAgVE9OQ29udHJhY3RSdW5Mb2NhbFBhcmFtcyxcbiAgICBUT05Db250cmFjdFJ1bk1lc3NhZ2UsXG4gICAgVE9OQ29udHJhY3RSdW5QYXJhbXMsXG4gICAgVE9OQ29udHJhY3RSdW5SZXN1bHQsXG4gICAgVE9OQ29udHJhY3RzLFxuICAgIFRPTkNvbnRyYWN0VW5zaWduZWREZXBsb3lNZXNzYWdlLFxuICAgIFRPTkNvbnRyYWN0VW5zaWduZWRNZXNzYWdlLFxuICAgIFRPTkNvbnRyYWN0VW5zaWduZWRSdW5NZXNzYWdlLFxufSBmcm9tICcuLi8uLi90eXBlcyc7XG5pbXBvcnQgeyBUT05DbGllbnRFcnJvciB9IGZyb20gJy4uL1RPTkNsaWVudCc7XG5pbXBvcnQgeyBUT05Nb2R1bGUgfSBmcm9tICcuLi9UT05Nb2R1bGUnO1xuaW1wb3J0IFRPTkNvbmZpZ01vZHVsZSBmcm9tICcuL1RPTkNvbmZpZ01vZHVsZSc7XG5pbXBvcnQgVE9OUXVlcmllc01vZHVsZSBmcm9tICcuL1RPTlF1ZXJpZXNNb2R1bGUnO1xuXG5leHBvcnQgY29uc3QgVE9OQWRkcmVzc1N0cmluZ1ZhcmlhbnQgPSB7XG4gICAgQWNjb3VudElkOiAnQWNjb3VudElkJyxcbiAgICBIZXg6ICdIZXgnLFxuICAgIEJhc2U2NDogJ0Jhc2U2NCcsXG59O1xuXG5leHBvcnQgY29uc3QgVE9OQ2xpZW50VHJhbnNhY3Rpb25QaGFzZSA9IHtcbiAgICBzdG9yYWdlOiAnc3RvcmFnZScsXG4gICAgY29tcHV0ZVNraXBwZWQ6ICdjb21wdXRlU2tpcHBlZCcsXG4gICAgY29tcHV0ZVZtOiAnY29tcHV0ZVZtJyxcbiAgICBhY3Rpb246ICdhY3Rpb24nLFxuICAgIHVua25vd246ICd1bmtub3duJyxcbn07XG5cbmV4cG9ydCBjb25zdCBUT05DbGllbnRDb21wdXRlU2tpcHBlZFN0YXR1cyA9IHtcbiAgICBub1N0YXRlOiAwLFxuICAgIGJhZFN0YXRlOiAxLFxuICAgIG5vR2FzOiAyLFxufTtcblxuZXhwb3J0IGNvbnN0IFRPTkNsaWVudFN0b3JhZ2VTdGF0dXMgPSB7XG4gICAgdW5jaGFuZ2VkOiAwLFxuICAgIGZyb3plbjogMSxcbiAgICBkZWxldGVkOiAyLFxufTtcblxuZXhwb3J0IGNvbnN0IFFJbk1zZ1R5cGUgPSB7XG4gICAgZXh0ZXJuYWw6IDAsXG4gICAgaWhyOiAxLFxuICAgIGltbWVkaWF0ZWx5OiAyLFxuICAgIGZpbmFsOiAzLFxuICAgIHRyYW5zaXQ6IDQsXG4gICAgZGlzY2FyZGVkRmluYWw6IDUsXG4gICAgZGlzY2FyZGVkVHJhbnNpdDogNixcbn07XG5cbmV4cG9ydCBjb25zdCBRT3V0TXNnVHlwZSA9IHtcbiAgICBleHRlcm5hbDogMCxcbiAgICBpbW1lZGlhdGVseTogMSxcbiAgICBvdXRNc2dOZXc6IDIsXG4gICAgdHJhbnNpdDogMyxcbiAgICBkZXF1ZXVlSW1tZWRpYXRlbHk6IDQsXG4gICAgZGVxdWV1ZTogNSxcbiAgICB0cmFuc2l0UmVxdWlyZWQ6IDYsXG4gICAgbm9uZTogLTEsXG59O1xuXG5leHBvcnQgY29uc3QgUU1lc3NhZ2VUeXBlID0ge1xuICAgIGludGVybmFsOiAwLFxuICAgIGV4dEluOiAxLFxuICAgIGV4dE91dDogMixcbn07XG5cbmV4cG9ydCBjb25zdCBRTWVzc2FnZVByb2Nlc3NpbmdTdGF0dXMgPSB7XG4gICAgdW5rbm93bjogMCxcbiAgICBxdWV1ZWQ6IDEsXG4gICAgcHJvY2Vzc2luZzogMixcbiAgICBwcmVsaW1pbmFyeTogMyxcbiAgICBwcm9wb3NlZDogNCxcbiAgICBmaW5hbGl6ZWQ6IDUsXG4gICAgcmVmdXNlZDogNixcbiAgICB0cmFuc2l0aW5nOiA3LFxufTtcblxuZXhwb3J0IGNvbnN0IFFCbG9ja1Byb2Nlc3NpbmdTdGF0dXMgPSB7XG4gICAgdW5rbm93bjogMCxcbiAgICBwcm9wb3NlZDogMSxcbiAgICBmaW5hbGl6ZWQ6IDIsXG4gICAgcmVmdXNlZDogMyxcbn07XG5cbmV4cG9ydCBjb25zdCBRU3BsaXRUeXBlID0ge1xuICAgIG5vbmU6IDAsXG4gICAgc3BsaXQ6IDIsXG4gICAgbWVyZ2U6IDMsXG59O1xuXG5leHBvcnQgY29uc3QgUUFjY291bnRUeXBlID0ge1xuICAgIHVuaW5pdDogMCxcbiAgICBhY3RpdmU6IDEsXG4gICAgZnJvemVuOiAyLFxufTtcblxuZXhwb3J0IGNvbnN0IFFUcmFuc2FjdGlvblR5cGUgPSB7XG4gICAgb3JkaW5hcnk6IDAsXG4gICAgc3RvcmFnZTogMSxcbiAgICB0aWNrOiAyLFxuICAgIHRvY2s6IDMsXG4gICAgc3BsaXRQcmVwYXJlOiA0LFxuICAgIHNwbGl0SW5zdGFsbDogNSxcbiAgICBtZXJnZVByZXBhcmU6IDYsXG4gICAgbWVyZ2VJbnN0YWxsOiA3LFxufTtcblxuZXhwb3J0IGNvbnN0IFFUcmFuc2FjdGlvblByb2Nlc3NpbmdTdGF0dXMgPSB7XG4gICAgdW5rbm93bjogMCxcbiAgICBwcmVsaW1pbmFyeTogMSxcbiAgICBwcm9wb3NlZDogMixcbiAgICBmaW5hbGl6ZWQ6IDMsXG4gICAgcmVmdXNlZDogNCxcbn07XG5cbmV4cG9ydCBjb25zdCBRQWNjb3VudFN0YXR1cyA9IHtcbiAgICB1bmluaXQ6IDAsXG4gICAgYWN0aXZlOiAxLFxuICAgIGZyb3plbjogMixcbiAgICBub25FeGlzdDogMyxcbn07XG5cbmV4cG9ydCBjb25zdCBRQWNjb3VudFN0YXR1c0NoYW5nZSA9IHtcbiAgICB1bmNoYW5nZWQ6IDAsXG4gICAgZnJvemVuOiAxLFxuICAgIGRlbGV0ZWQ6IDIsXG59O1xuXG5leHBvcnQgY29uc3QgUUNvbXB1dGVUeXBlID0ge1xuICAgIHNraXBwZWQ6IDAsXG4gICAgdm06IDEsXG59O1xuXG5leHBvcnQgY29uc3QgUVNraXBSZWFzb24gPSB7XG4gICAgbm9TdGF0ZTogMCxcbiAgICBiYWRTdGF0ZTogMSxcbiAgICBub0dhczogMixcbn07XG5cbmV4cG9ydCBjb25zdCBRQm91bmNlVHlwZSA9IHtcbiAgICBuZWdGdW5kczogMCxcbiAgICBub0Z1bmRzOiAxLFxuICAgIG9rOiAyLFxufTtcblxuZXhwb3J0IGZ1bmN0aW9uIHJlbW92ZVByb3BzKG9iajoge30sIHBhdGhzOiBzdHJpbmdbXSk6IHt9IHtcbiAgICBsZXQgcmVzdWx0ID0gb2JqO1xuICAgIHBhdGhzLmZvckVhY2goKHBhdGgpID0+IHtcbiAgICAgICAgY29uc3QgZG90UG9zID0gcGF0aC5pbmRleE9mKCcuJyk7XG4gICAgICAgIGlmIChkb3RQb3MgPCAwKSB7XG4gICAgICAgICAgICBpZiAocGF0aCBpbiByZXN1bHQpIHtcbiAgICAgICAgICAgICAgICByZXN1bHQgPSB7IC4uLnJlc3VsdCB9O1xuICAgICAgICAgICAgICAgIGRlbGV0ZSByZXN1bHRbcGF0aF07XG4gICAgICAgICAgICB9XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICBjb25zdCBuYW1lID0gcGF0aC5zdWJzdHIoMCwgZG90UG9zKTtcbiAgICAgICAgICAgIGNvbnN0IGNoaWxkID0gcmVzdWx0W25hbWVdO1xuICAgICAgICAgICAgaWYgKGNoaWxkKSB7XG4gICAgICAgICAgICAgICAgY29uc3QgcmVkdWNlZENoaWxkID0gcmVtb3ZlUHJvcHMoY2hpbGQsIFtwYXRoLnN1YnN0cihkb3RQb3MgKyAxKV0pO1xuICAgICAgICAgICAgICAgIGlmIChyZWR1Y2VkQ2hpbGQgIT09IGNoaWxkKSB7XG4gICAgICAgICAgICAgICAgICAgIHJlc3VsdCA9IHtcbiAgICAgICAgICAgICAgICAgICAgICAgIC4uLnJlc3VsdCxcbiAgICAgICAgICAgICAgICAgICAgICAgIFtuYW1lXTogcmVkdWNlZENoaWxkLFxuICAgICAgICAgICAgICAgICAgICB9O1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgIH0pO1xuICAgIHJldHVybiByZXN1bHQ7XG59XG5cbmV4cG9ydCBkZWZhdWx0IGNsYXNzIFRPTkNvbnRyYWN0c01vZHVsZSBleHRlbmRzIFRPTk1vZHVsZSBpbXBsZW1lbnRzIFRPTkNvbnRyYWN0cyB7XG4gICAgY29uZmlnOiBUT05Db25maWdNb2R1bGU7XG5cbiAgICBxdWVyaWVzOiBUT05RdWVyaWVzTW9kdWxlO1xuXG4gICAgYXN5bmMgc2V0dXAoKTogUHJvbWlzZTwqPiB7XG4gICAgICAgIHRoaXMuY29uZmlnID0gdGhpcy5jb250ZXh0LmdldE1vZHVsZShUT05Db25maWdNb2R1bGUpO1xuICAgICAgICB0aGlzLnF1ZXJpZXMgPSB0aGlzLmNvbnRleHQuZ2V0TW9kdWxlKFRPTlF1ZXJpZXNNb2R1bGUpO1xuICAgIH1cblxuICAgIGFzeW5jIGxvYWQoXG4gICAgICAgIHBhcmFtczogVE9OQ29udHJhY3RMb2FkUGFyYW1zLFxuICAgICAgICBwYXJlbnRTcGFuPzogKFNwYW4gfCBTcGFuQ29udGV4dCksXG4gICAgKTogUHJvbWlzZTxUT05Db250cmFjdExvYWRSZXN1bHQ+IHtcbiAgICAgICAgY29uc3QgYWNjb3VudHM6IFFBY2NvdW50W10gPSBhd2FpdCB0aGlzLnF1ZXJpZXMuYWNjb3VudHMucXVlcnkoe1xuICAgICAgICAgICAgaWQ6IHsgZXE6IHBhcmFtcy5hZGRyZXNzIH0sXG4gICAgICAgIH0sICdiYWxhbmNlJywgdW5kZWZpbmVkLCB1bmRlZmluZWQsIHVuZGVmaW5lZCwgcGFyZW50U3Bhbik7XG4gICAgICAgIGlmIChhY2NvdW50cyAmJiBhY2NvdW50cy5sZW5ndGggPiAwKSB7XG4gICAgICAgICAgICByZXR1cm4ge1xuICAgICAgICAgICAgICAgIGlkOiBwYXJhbXMuYWRkcmVzcyxcbiAgICAgICAgICAgICAgICBiYWxhbmNlR3JhbXM6IGFjY291bnRzWzBdLmJhbGFuY2UsXG4gICAgICAgICAgICB9O1xuICAgICAgICB9XG4gICAgICAgIHJldHVybiB7XG4gICAgICAgICAgICBpZDogbnVsbCxcbiAgICAgICAgICAgIGJhbGFuY2VHcmFtczogbnVsbCxcbiAgICAgICAgfTtcbiAgICB9XG5cblxuICAgIC8vIEZhY2FkZSBmdW5jdGlvbnNcblxuICAgIGFzeW5jIGRlcGxveShcbiAgICAgICAgcGFyYW1zOiBUT05Db250cmFjdERlcGxveVBhcmFtcyxcbiAgICAgICAgcGFyZW50U3Bhbj86IChTcGFuIHwgU3BhbkNvbnRleHQpLFxuICAgICk6IFByb21pc2U8VE9OQ29udHJhY3REZXBsb3lSZXN1bHQ+IHtcbiAgICAgICAgcmV0dXJuIHRoaXMuY29udGV4dC50cmFjZSgnY29udHJhY3RzLmRlcGxveScsIGFzeW5jIChzcGFuOiBTcGFuKSA9PiB7XG4gICAgICAgICAgICBzcGFuLnNldFRhZygncGFyYW1zJywgcmVtb3ZlUHJvcHMocGFyYW1zLCBbJ2tleVBhaXIuc2VjcmV0J10pKTtcbiAgICAgICAgICAgIHJldHVybiB0aGlzLmludGVybmFsRGVwbG95SnMocGFyYW1zLCBzcGFuKTtcbiAgICAgICAgfSwgcGFyZW50U3Bhbik7XG4gICAgfVxuXG5cbiAgICBhc3luYyBydW4oXG4gICAgICAgIHBhcmFtczogVE9OQ29udHJhY3RSdW5QYXJhbXMsXG4gICAgICAgIHBhcmVudFNwYW4/OiAoU3BhbiB8IFNwYW5Db250ZXh0KSxcbiAgICApOiBQcm9taXNlPFRPTkNvbnRyYWN0UnVuUmVzdWx0PiB7XG4gICAgICAgIHJldHVybiB0aGlzLmNvbnRleHQudHJhY2UoJ2NvbnRyYWN0cy5ydW4nLCBhc3luYyAoc3BhbjogU3BhbikgPT4ge1xuICAgICAgICAgICAgc3Bhbi5zZXRUYWcoJ3BhcmFtcycsIHJlbW92ZVByb3BzKHBhcmFtcywgWydrZXlQYWlyLnNlY3JldCddKSk7XG4gICAgICAgICAgICByZXR1cm4gdGhpcy5pbnRlcm5hbFJ1bkpzKHBhcmFtcywgc3Bhbik7XG4gICAgICAgIH0sIHBhcmVudFNwYW4pO1xuICAgIH1cblxuICAgIGFzeW5jIHJ1bkxvY2FsKFxuICAgICAgICBwYXJhbXM6IFRPTkNvbnRyYWN0UnVuTG9jYWxQYXJhbXMsXG4gICAgICAgIHBhcmVudFNwYW4/OiAoU3BhbiB8IFNwYW5Db250ZXh0KSxcbiAgICApOiBQcm9taXNlPFRPTkNvbnRyYWN0UnVuUmVzdWx0PiB7XG4gICAgICAgIHJldHVybiB0aGlzLmNvbnRleHQudHJhY2UoJ2NvbnRyYWN0cy5ydW5Mb2NhbCcsIGFzeW5jIChzcGFuOiBTcGFuKSA9PiB7XG4gICAgICAgICAgICBzcGFuLnNldFRhZygncGFyYW1zJywgcmVtb3ZlUHJvcHMocGFyYW1zLCBbJ2tleVBhaXIuc2VjcmV0J10pKTtcbiAgICAgICAgICAgIHJldHVybiB0aGlzLmludGVybmFsUnVuTG9jYWxKcyhwYXJhbXMsIHNwYW4pO1xuICAgICAgICB9LCBwYXJlbnRTcGFuKTtcbiAgICB9XG5cbiAgICAvLyBNZXNzYWdlIGNyZWF0aW9uXG5cbiAgICBhc3luYyBjcmVhdGVEZXBsb3lNZXNzYWdlKFxuICAgICAgICBwYXJhbXM6IFRPTkNvbnRyYWN0RGVwbG95UGFyYW1zLFxuICAgICAgICByZXRyeUluZGV4PzogbnVtYmVyLFxuICAgICk6IFByb21pc2U8VE9OQ29udHJhY3REZXBsb3lNZXNzYWdlPiB7XG4gICAgICAgIHRoaXMuY29uZmlnLmxvZygnY3JlYXRlRGVwbG95TWVzc2FnZScsIHBhcmFtcyk7XG4gICAgICAgIGNvbnN0IGNvbnN0cnVjdG9ySGVhZGVyID0gdGhpcy5tYWtlRXhwaXJlSGVhZGVyKFxuICAgICAgICAgICAgcGFyYW1zLnBhY2thZ2UuYWJpLFxuICAgICAgICAgICAgcGFyYW1zLmNvbnN0cnVjdG9ySGVhZGVyLFxuICAgICAgICAgICAgcmV0cnlJbmRleCxcbiAgICAgICAgKTtcbiAgICAgICAgY29uc3QgbWVzc2FnZToge1xuICAgICAgICAgICAgYWRkcmVzczogc3RyaW5nLFxuICAgICAgICAgICAgbWVzc2FnZUlkOiBzdHJpbmcsXG4gICAgICAgICAgICBtZXNzYWdlQm9keUJhc2U2NDogc3RyaW5nLFxuICAgICAgICB9ID0gYXdhaXQgdGhpcy5yZXF1ZXN0Q29yZSgnY29udHJhY3RzLmRlcGxveS5tZXNzYWdlJywge1xuICAgICAgICAgICAgYWJpOiBwYXJhbXMucGFja2FnZS5hYmksXG4gICAgICAgICAgICBjb25zdHJ1Y3RvckhlYWRlcixcbiAgICAgICAgICAgIGNvbnN0cnVjdG9yUGFyYW1zOiBwYXJhbXMuY29uc3RydWN0b3JQYXJhbXMsXG4gICAgICAgICAgICBpbml0UGFyYW1zOiBwYXJhbXMuaW5pdFBhcmFtcyxcbiAgICAgICAgICAgIGltYWdlQmFzZTY0OiBwYXJhbXMucGFja2FnZS5pbWFnZUJhc2U2NCxcbiAgICAgICAgICAgIGtleVBhaXI6IHBhcmFtcy5rZXlQYWlyLFxuICAgICAgICAgICAgd29ya2NoYWluSWQ6IHBhcmFtcy53b3JrY2hhaW5JZCxcbiAgICAgICAgfSk7XG4gICAgICAgIHJldHVybiB7XG4gICAgICAgICAgICBtZXNzYWdlOiB7XG4gICAgICAgICAgICAgICAgbWVzc2FnZUlkOiBtZXNzYWdlLm1lc3NhZ2VJZCxcbiAgICAgICAgICAgICAgICBtZXNzYWdlQm9keUJhc2U2NDogbWVzc2FnZS5tZXNzYWdlQm9keUJhc2U2NCxcbiAgICAgICAgICAgICAgICBleHBpcmU6IGNvbnN0cnVjdG9ySGVhZGVyPy5leHBpcmUsXG4gICAgICAgICAgICB9LFxuICAgICAgICAgICAgYWRkcmVzczogbWVzc2FnZS5hZGRyZXNzLFxuICAgICAgICB9O1xuICAgIH1cblxuXG4gICAgYXN5bmMgY3JlYXRlUnVuTWVzc2FnZShcbiAgICAgICAgcGFyYW1zOiBUT05Db250cmFjdFJ1blBhcmFtcyxcbiAgICAgICAgcmV0cnlJbmRleD86IG51bWJlcixcbiAgICApOiBQcm9taXNlPFRPTkNvbnRyYWN0UnVuTWVzc2FnZT4ge1xuICAgICAgICB0aGlzLmNvbmZpZy5sb2coJ2NyZWF0ZVJ1bk1lc3NhZ2UnLCBwYXJhbXMpO1xuICAgICAgICBjb25zdCBoZWFkZXIgPSB0aGlzLm1ha2VFeHBpcmVIZWFkZXIoXG4gICAgICAgICAgICBwYXJhbXMuYWJpLFxuICAgICAgICAgICAgcGFyYW1zLmhlYWRlcixcbiAgICAgICAgICAgIHJldHJ5SW5kZXgsXG4gICAgICAgICk7XG4gICAgICAgIGNvbnN0IG1lc3NhZ2UgPSBhd2FpdCB0aGlzLnJlcXVlc3RDb3JlKCdjb250cmFjdHMucnVuLm1lc3NhZ2UnLCB7XG4gICAgICAgICAgICBhZGRyZXNzOiBwYXJhbXMuYWRkcmVzcyxcbiAgICAgICAgICAgIGFiaTogcGFyYW1zLmFiaSxcbiAgICAgICAgICAgIGZ1bmN0aW9uTmFtZTogcGFyYW1zLmZ1bmN0aW9uTmFtZSxcbiAgICAgICAgICAgIGhlYWRlcixcbiAgICAgICAgICAgIGlucHV0OiBwYXJhbXMuaW5wdXQsXG4gICAgICAgICAgICBrZXlQYWlyOiBwYXJhbXMua2V5UGFpcixcbiAgICAgICAgfSk7XG4gICAgICAgIG1lc3NhZ2UuZXhwaXJlID0gaGVhZGVyPy5leHBpcmU7XG4gICAgICAgIHJldHVybiB7XG4gICAgICAgICAgICBhZGRyZXNzOiBwYXJhbXMuYWRkcmVzcyxcbiAgICAgICAgICAgIGFiaTogcGFyYW1zLmFiaSxcbiAgICAgICAgICAgIGZ1bmN0aW9uTmFtZTogcGFyYW1zLmZ1bmN0aW9uTmFtZSxcbiAgICAgICAgICAgIG1lc3NhZ2UsXG4gICAgICAgIH07XG4gICAgfVxuXG4gICAgYXN5bmMgY3JlYXRlVW5zaWduZWREZXBsb3lNZXNzYWdlKFxuICAgICAgICBwYXJhbXM6IFRPTkNvbnRyYWN0RGVwbG95UGFyYW1zLFxuICAgICAgICByZXRyeUluZGV4PzogbnVtYmVyLFxuICAgICk6IFByb21pc2U8VE9OQ29udHJhY3RVbnNpZ25lZERlcGxveU1lc3NhZ2U+IHtcbiAgICAgICAgY29uc3QgY29uc3RydWN0b3JIZWFkZXIgPSB0aGlzLm1ha2VFeHBpcmVIZWFkZXIoXG4gICAgICAgICAgICBwYXJhbXMucGFja2FnZS5hYmksXG4gICAgICAgICAgICBwYXJhbXMuY29uc3RydWN0b3JIZWFkZXIsXG4gICAgICAgICAgICByZXRyeUluZGV4LFxuICAgICAgICApO1xuICAgICAgICBjb25zdCByZXN1bHQ6IHtcbiAgICAgICAgICAgIGVuY29kZWQ6IFRPTkNvbnRyYWN0VW5zaWduZWRNZXNzYWdlLFxuICAgICAgICAgICAgYWRkcmVzc0hleDogc3RyaW5nLFxuICAgICAgICB9ID0gYXdhaXQgdGhpcy5yZXF1ZXN0Q29yZSgnY29udHJhY3RzLmRlcGxveS5lbmNvZGVfdW5zaWduZWRfbWVzc2FnZScsIHtcbiAgICAgICAgICAgIGFiaTogcGFyYW1zLnBhY2thZ2UuYWJpLFxuICAgICAgICAgICAgY29uc3RydWN0b3JIZWFkZXIsXG4gICAgICAgICAgICBjb25zdHJ1Y3RvclBhcmFtczogcGFyYW1zLmNvbnN0cnVjdG9yUGFyYW1zLFxuICAgICAgICAgICAgaW5pdFBhcmFtczogcGFyYW1zLmluaXRQYXJhbXMsXG4gICAgICAgICAgICBpbWFnZUJhc2U2NDogcGFyYW1zLnBhY2thZ2UuaW1hZ2VCYXNlNjQsXG4gICAgICAgICAgICBwdWJsaWNLZXlIZXg6IHBhcmFtcy5rZXlQYWlyLnB1YmxpYyxcbiAgICAgICAgICAgIHdvcmtjaGFpbklkOiBwYXJhbXMud29ya2NoYWluSWQsXG4gICAgICAgIH0pO1xuICAgICAgICByZXR1cm4ge1xuICAgICAgICAgICAgYWRkcmVzczogcmVzdWx0LmFkZHJlc3NIZXgsXG4gICAgICAgICAgICBzaWduUGFyYW1zOiB7XG4gICAgICAgICAgICAgICAgLi4ucmVzdWx0LmVuY29kZWQsXG4gICAgICAgICAgICAgICAgYWJpOiBwYXJhbXMucGFja2FnZS5hYmksXG4gICAgICAgICAgICAgICAgZXhwaXJlOiBjb25zdHJ1Y3RvckhlYWRlcj8uZXhwaXJlLFxuICAgICAgICAgICAgfSxcbiAgICAgICAgfTtcbiAgICB9XG5cblxuICAgIGFzeW5jIGNyZWF0ZVVuc2lnbmVkUnVuTWVzc2FnZShcbiAgICAgICAgcGFyYW1zOiBUT05Db250cmFjdFJ1blBhcmFtcyxcbiAgICAgICAgcmV0cnlJbmRleD86IG51bWJlcixcbiAgICApOiBQcm9taXNlPFRPTkNvbnRyYWN0VW5zaWduZWRSdW5NZXNzYWdlPiB7XG4gICAgICAgIGNvbnN0IGhlYWRlciA9IHRoaXMubWFrZUV4cGlyZUhlYWRlcihcbiAgICAgICAgICAgIHBhcmFtcy5hYmksXG4gICAgICAgICAgICBwYXJhbXMuaGVhZGVyLFxuICAgICAgICAgICAgcmV0cnlJbmRleCxcbiAgICAgICAgKTtcbiAgICAgICAgY29uc3Qgc2lnblBhcmFtcyA9IGF3YWl0IHRoaXMucmVxdWVzdENvcmUoJ2NvbnRyYWN0cy5ydW4uZW5jb2RlX3Vuc2lnbmVkX21lc3NhZ2UnLCB7XG4gICAgICAgICAgICBhZGRyZXNzOiBwYXJhbXMuYWRkcmVzcyxcbiAgICAgICAgICAgIGFiaTogcGFyYW1zLmFiaSxcbiAgICAgICAgICAgIGZ1bmN0aW9uTmFtZTogcGFyYW1zLmZ1bmN0aW9uTmFtZSxcbiAgICAgICAgICAgIGhlYWRlcixcbiAgICAgICAgICAgIGlucHV0OiBwYXJhbXMuaW5wdXQsXG4gICAgICAgIH0pO1xuICAgICAgICByZXR1cm4ge1xuICAgICAgICAgICAgYWRkcmVzczogcGFyYW1zLmFkZHJlc3MsXG4gICAgICAgICAgICBmdW5jdGlvbk5hbWU6IHBhcmFtcy5mdW5jdGlvbk5hbWUsXG4gICAgICAgICAgICBzaWduUGFyYW1zOiB7XG4gICAgICAgICAgICAgICAgLi4uc2lnblBhcmFtcyxcbiAgICAgICAgICAgICAgICBhYmk6IHBhcmFtcy5hYmksXG4gICAgICAgICAgICAgICAgZXhwaXJlOiBoZWFkZXI/LmV4cGlyZSxcbiAgICAgICAgICAgIH0sXG4gICAgICAgIH07XG4gICAgfVxuXG5cbiAgICBhc3luYyBjcmVhdGVTaWduZWRNZXNzYWdlKFxuICAgICAgICBwYXJhbXM6IFRPTkNvbnRyYWN0Q3JlYXRlU2lnbmVkTWVzc2FnZVBhcmFtcyxcbiAgICApOiBQcm9taXNlPFRPTkNvbnRyYWN0TWVzc2FnZT4ge1xuICAgICAgICByZXR1cm4gdGhpcy5yZXF1ZXN0Q29yZSgnY29udHJhY3RzLmVuY29kZV9tZXNzYWdlX3dpdGhfc2lnbicsIHBhcmFtcyk7XG4gICAgfVxuXG5cbiAgICBhc3luYyBjcmVhdGVTaWduZWREZXBsb3lNZXNzYWdlKFxuICAgICAgICBwYXJhbXM6IFRPTkNvbnRyYWN0Q3JlYXRlU2lnbmVkRGVwbG95TWVzc2FnZVBhcmFtcyxcbiAgICApOiBQcm9taXNlPFRPTkNvbnRyYWN0RGVwbG95TWVzc2FnZT4ge1xuICAgICAgICBjb25zdCBtZXNzYWdlID0gYXdhaXQgdGhpcy5jcmVhdGVTaWduZWRNZXNzYWdlKHtcbiAgICAgICAgICAgIGFiaTogcGFyYW1zLnVuc2lnbmVkTWVzc2FnZS5zaWduUGFyYW1zLmFiaSxcbiAgICAgICAgICAgIHVuc2lnbmVkQnl0ZXNCYXNlNjQ6IHBhcmFtcy51bnNpZ25lZE1lc3NhZ2Uuc2lnblBhcmFtcy51bnNpZ25lZEJ5dGVzQmFzZTY0LFxuICAgICAgICAgICAgc2lnbkJ5dGVzQmFzZTY0OiBwYXJhbXMuc2lnbkJ5dGVzQmFzZTY0LFxuICAgICAgICAgICAgcHVibGljS2V5SGV4OiBwYXJhbXMucHVibGljS2V5SGV4LFxuICAgICAgICB9KTtcbiAgICAgICAgbWVzc2FnZS5leHBpcmUgPSBwYXJhbXMudW5zaWduZWRNZXNzYWdlLnNpZ25QYXJhbXMuZXhwaXJlO1xuICAgICAgICByZXR1cm4ge1xuICAgICAgICAgICAgYWRkcmVzczogcGFyYW1zLnVuc2lnbmVkTWVzc2FnZS5hZGRyZXNzLFxuICAgICAgICAgICAgbWVzc2FnZSxcbiAgICAgICAgfTtcbiAgICB9XG5cblxuICAgIGFzeW5jIGNyZWF0ZVNpZ25lZFJ1bk1lc3NhZ2UoXG4gICAgICAgIHBhcmFtczogVE9OQ29udHJhY3RDcmVhdGVTaWduZWRSdW5NZXNzYWdlUGFyYW1zLFxuICAgICk6IFByb21pc2U8VE9OQ29udHJhY3RSdW5NZXNzYWdlPiB7XG4gICAgICAgIGNvbnN0IG1lc3NhZ2UgPSBhd2FpdCB0aGlzLmNyZWF0ZVNpZ25lZE1lc3NhZ2Uoe1xuICAgICAgICAgICAgYWJpOiBwYXJhbXMudW5zaWduZWRNZXNzYWdlLnNpZ25QYXJhbXMuYWJpLFxuICAgICAgICAgICAgdW5zaWduZWRCeXRlc0Jhc2U2NDogcGFyYW1zLnVuc2lnbmVkTWVzc2FnZS5zaWduUGFyYW1zLnVuc2lnbmVkQnl0ZXNCYXNlNjQsXG4gICAgICAgICAgICBzaWduQnl0ZXNCYXNlNjQ6IHBhcmFtcy5zaWduQnl0ZXNCYXNlNjQsXG4gICAgICAgICAgICBwdWJsaWNLZXlIZXg6IHBhcmFtcy5wdWJsaWNLZXlIZXgsXG4gICAgICAgIH0pO1xuICAgICAgICBtZXNzYWdlLmV4cGlyZSA9IHBhcmFtcy51bnNpZ25lZE1lc3NhZ2Uuc2lnblBhcmFtcy5leHBpcmU7XG4gICAgICAgIHJldHVybiB7XG4gICAgICAgICAgICBhZGRyZXNzOiBwYXJhbXMudW5zaWduZWRNZXNzYWdlLmFkZHJlc3MsXG4gICAgICAgICAgICBhYmk6IHBhcmFtcy51bnNpZ25lZE1lc3NhZ2Uuc2lnblBhcmFtcy5hYmksXG4gICAgICAgICAgICBmdW5jdGlvbk5hbWU6IHBhcmFtcy51bnNpZ25lZE1lc3NhZ2UuZnVuY3Rpb25OYW1lLFxuICAgICAgICAgICAgbWVzc2FnZSxcbiAgICAgICAgfTtcbiAgICB9XG5cbiAgICBhc3luYyBnZXRDb2RlRnJvbUltYWdlKFxuICAgICAgICBwYXJhbXM6IFRPTkNvbnRyYWN0R2V0Q29kZUZyb21JbWFnZVBhcmFtcyxcbiAgICApOiBQcm9taXNlPFRPTkNvbnRyYWN0R2V0Q29kZUZyb21JbWFnZVJlc3VsdD4ge1xuICAgICAgICByZXR1cm4gdGhpcy5yZXF1ZXN0Q29yZSgnY29udHJhY3RzLmltYWdlLmNvZGUnLCBwYXJhbXMpO1xuICAgIH1cblxuICAgIGFzeW5jIGdldERlcGxveURhdGEoXG4gICAgICAgIHBhcmFtczogVE9OQ29udHJhY3RHZXREZXBsb3lEYXRhUGFyYW1zLFxuICAgICk6IFByb21pc2U8VE9OQ29udHJhY3RHZXREZXBsb3lEYXRhUmVzdWx0PiB7XG4gICAgICAgIHJldHVybiB0aGlzLnJlcXVlc3RDb3JlKCdjb250cmFjdHMuZGVwbG95LmRhdGEnLCBwYXJhbXMpO1xuICAgIH1cblxuICAgIGFzeW5jIGNyZWF0ZVJ1bkJvZHkoXG4gICAgICAgIHBhcmFtczogVE9OQ29udHJhY3RDcmVhdGVSdW5Cb2R5UGFyYW1zLFxuICAgICk6IFByb21pc2U8VE9OQ29udHJhY3RDcmVhdGVSdW5Cb2R5UmVzdWx0PiB7XG4gICAgICAgIHJldHVybiB0aGlzLnJlcXVlc3RDb3JlKCdjb250cmFjdHMucnVuLmJvZHknLCBwYXJhbXMpO1xuICAgIH1cblxuICAgIGFzeW5jIGdldEZ1bmN0aW9uSWQoXG4gICAgICAgIHBhcmFtczogVE9OQ29udHJhY3RHZXRGdW5jdGlvbklkUGFyYW1zLFxuICAgICk6IFByb21pc2U8VE9OQ29udHJhY3RHZXRGdW5jdGlvbklkUmVzdWx0PiB7XG4gICAgICAgIHJldHVybiB0aGlzLnJlcXVlc3RDb3JlKCdjb250cmFjdHMuZnVuY3Rpb24uaWQnLCBwYXJhbXMpO1xuICAgIH1cblxuICAgIGFzeW5jIGdldEJvY0hhc2goXG4gICAgICAgIHBhcmFtczogVE9OQ29udHJhY3RCb2MsXG4gICAgKTogUHJvbWlzZTxUT05Db250cmFjdEdldEJvY0hhc2hSZXN1bHQ+IHtcbiAgICAgICAgcmV0dXJuIHRoaXMucmVxdWVzdENvcmUoJ2NvbnRyYWN0cy5ib2MuaGFzaCcsIHBhcmFtcyk7XG4gICAgfVxuXG4gICAgYXN5bmMgcGFyc2VNZXNzYWdlKFxuICAgICAgICBwYXJhbXM6IFRPTkNvbnRyYWN0Qm9jLFxuICAgICk6IFByb21pc2U8UU1lc3NhZ2U+IHtcbiAgICAgICAgcmV0dXJuIHRoaXMucmVxdWVzdENvcmUoJ2NvbnRyYWN0cy5wYXJzZS5tZXNzYWdlJywgcGFyYW1zKTtcbiAgICB9XG5cbiAgICAvLyBNZXNzYWdlIHBhcnNpbmdcblxuICAgIGFzeW5jIGRlY29kZVJ1bk91dHB1dChcbiAgICAgICAgcGFyYW1zOiBUT05Db250cmFjdERlY29kZVJ1bk91dHB1dFBhcmFtcyxcbiAgICApOiBQcm9taXNlPFRPTkNvbnRyYWN0UnVuUmVzdWx0PiB7XG4gICAgICAgIHJldHVybiB0aGlzLnJlcXVlc3RDb3JlKCdjb250cmFjdHMucnVuLm91dHB1dCcsIHBhcmFtcyk7XG4gICAgfVxuXG5cbiAgICBhc3luYyBkZWNvZGVJbnB1dE1lc3NhZ2VCb2R5KFxuICAgICAgICBwYXJhbXM6IFRPTkNvbnRyYWN0RGVjb2RlTWVzc2FnZUJvZHlQYXJhbXMsXG4gICAgKTogUHJvbWlzZTxUT05Db250cmFjdERlY29kZU1lc3NhZ2VCb2R5UmVzdWx0PiB7XG4gICAgICAgIHJldHVybiB0aGlzLnJlcXVlc3RDb3JlKCdjb250cmFjdHMucnVuLnVua25vd24uaW5wdXQnLCBwYXJhbXMpO1xuICAgIH1cblxuXG4gICAgYXN5bmMgZGVjb2RlT3V0cHV0TWVzc2FnZUJvZHkoXG4gICAgICAgIHBhcmFtczogVE9OQ29udHJhY3REZWNvZGVNZXNzYWdlQm9keVBhcmFtcyxcbiAgICApOiBQcm9taXNlPFRPTkNvbnRyYWN0RGVjb2RlTWVzc2FnZUJvZHlSZXN1bHQ+IHtcbiAgICAgICAgcmV0dXJuIHRoaXMucmVxdWVzdENvcmUoJ2NvbnRyYWN0cy5ydW4udW5rbm93bi5vdXRwdXQnLCBwYXJhbXMpO1xuICAgIH1cblxuICAgIC8vIE1lc3NhZ2UgcHJvY2Vzc2luZ1xuXG4gICAgYXN5bmMgc2VuZE1lc3NhZ2UoXG4gICAgICAgIHBhcmFtczogVE9OQ29udHJhY3RNZXNzYWdlLFxuICAgICAgICBwYXJlbnRTcGFuPzogKFNwYW4gfCBTcGFuQ29udGV4dCksXG4gICAgKTogUHJvbWlzZTxzdHJpbmc+IHtcbiAgICAgICAgY29uc3QgaWQgPSBwYXJhbXMubWVzc2FnZUlkIHx8XG4gICAgICAgICAgICAoYXdhaXQgdGhpcy5nZXRCb2NIYXNoKHtcbiAgICAgICAgICAgICAgICBib2NCYXNlNjQ6IHBhcmFtcy5tZXNzYWdlQm9keUJhc2U2NCxcbiAgICAgICAgICAgIH0pKS5oYXNoO1xuICAgICAgICBjb25zdCBpZEJhc2U2NCA9IEJ1ZmZlci5mcm9tKGlkLCAnaGV4JylcbiAgICAgICAgICAgIC50b1N0cmluZygnYmFzZTY0Jyk7XG4gICAgICAgIGF3YWl0IHRoaXMucXVlcmllcy5wb3N0UmVxdWVzdHMoW1xuICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgIGlkOiBpZEJhc2U2NCxcbiAgICAgICAgICAgICAgICBib2R5OiBwYXJhbXMubWVzc2FnZUJvZHlCYXNlNjQsXG4gICAgICAgICAgICB9LFxuICAgICAgICBdLCBwYXJlbnRTcGFuKTtcbiAgICAgICAgdGhpcy5jb25maWcubG9nKCdzZW5kTWVzc2FnZS4gUmVxdWVzdCBwb3N0ZWQnKTtcbiAgICAgICAgcmV0dXJuIGlkO1xuICAgIH1cblxuICAgIGFzeW5jIHByb2Nlc3NNZXNzYWdlKFxuICAgICAgICBtZXNzYWdlOiBUT05Db250cmFjdE1lc3NhZ2UsXG4gICAgICAgIHJlc3VsdEZpZWxkczogc3RyaW5nLFxuICAgICAgICBwYXJlbnRTcGFuPzogKFNwYW4gfCBTcGFuQ29udGV4dCksXG4gICAgICAgIHJldHJ5SW5kZXg/OiBudW1iZXIsXG4gICAgKTogUHJvbWlzZTxRVHJhbnNhY3Rpb24+IHtcbiAgICAgICAgY29uc3QgY29uZmlnID0gdGhpcy5jb25maWc7XG4gICAgICAgIGNvbnN0IG1lc3NhZ2VJZCA9IGF3YWl0IHRoaXMuc2VuZE1lc3NhZ2UobWVzc2FnZSwgcGFyZW50U3Bhbik7XG4gICAgICAgIGxldCBwcm9jZXNzaW5nVGltZW91dCA9IGNvbmZpZy5tZXNzYWdlUHJvY2Vzc2luZ1RpbWVvdXQocmV0cnlJbmRleCk7XG4gICAgICAgIGxldCBwcm9taXNlcyA9IFtdO1xuICAgICAgICBsZXQgdHJhbnNhY3Rpb25Gb3VuZCA9IGZhbHNlO1xuICAgICAgICBpZiAobWVzc2FnZS5leHBpcmUpIHtcbiAgICAgICAgICAgIGNvbnN0IGV4cGlyZSA9IG1lc3NhZ2UuZXhwaXJlO1xuICAgICAgICAgICAgaWYgKERhdGUubm93KCkgPiBleHBpcmUgKiAxMDAwKSB7XG4gICAgICAgICAgICAgICAgdGhyb3cgVE9OQ2xpZW50RXJyb3Iuc2VuZE5vZGVSZXF1ZXN0RmFpbGVkKCdNZXNzYWdlIGFscmVhZHkgZXhwaXJlZCcpO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgLy8gY2FsY3VsYXRlIHRpbWVvdXQgYWNjb3JkaW5nIHRvIGBleHBpcmVgIHZhbHVlIChpbiBzZWNvbmRzKVxuICAgICAgICAgICAgLy8gYWRkIHByb2Nlc3NpbmcgdGltZW91dCBhcyBtYXN0ZXIgYmxvY2sgdmFsaWRhdGlvbiB0aW1lXG4gICAgICAgICAgICBwcm9jZXNzaW5nVGltZW91dCA9IGV4cGlyZSAqIDEwMDAgLSBEYXRlLm5vdygpICsgcHJvY2Vzc2luZ1RpbWVvdXQ7XG5cbiAgICAgICAgICAgIGNvbnN0IHdhaXRFeHBpcmVkID0gYXN5bmMgKCkgPT4ge1xuICAgICAgICAgICAgICAgIC8vIHdhaXQgZm9yIGJsb2NrLCBwcm9kdWNlZCBhZnRlciBgZXhwaXJlYCB0byBndWFyYW50ZWUgdGhhdCBtZXNzYWdlIGlzIHJlamVjdGVkXG4gICAgICAgICAgICAgICAgY29uc3QgYmxvY2s6IFFCbG9jayA9IGF3YWl0IHRoaXMucXVlcmllcy5ibG9ja3Mud2FpdEZvcih7XG4gICAgICAgICAgICAgICAgICAgIGZpbHRlcjoge1xuICAgICAgICAgICAgICAgICAgICAgICAgbWFzdGVyOiB7IG1pbl9zaGFyZF9nZW5fdXRpbWU6IHsgZ2U6IGV4cGlyZSB9IH0sXG4gICAgICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgICAgIHJlc3VsdDogJ2luX21zZ19kZXNjciB7IHRyYW5zYWN0aW9uX2lkIH0nLFxuICAgICAgICAgICAgICAgICAgICB0aW1lb3V0OiBwcm9jZXNzaW5nVGltZW91dCxcbiAgICAgICAgICAgICAgICAgICAgcGFyZW50U3BhbixcbiAgICAgICAgICAgICAgICB9KTtcblxuICAgICAgICAgICAgICAgIGlmICh0cmFuc2FjdGlvbkZvdW5kKSB7XG4gICAgICAgICAgICAgICAgICAgIHJldHVybiB7fTtcbiAgICAgICAgICAgICAgICB9XG5cbiAgICAgICAgICAgICAgICBjb25zdCB0cmFuc2FjdGlvbl9pZCA9IGJsb2NrLmluX21zZ19kZXNjclxuICAgICAgICAgICAgICAgICAgICAmJiBibG9jay5pbl9tc2dfZGVzY3IuZmluZChtc2cgPT4gISFtc2cudHJhbnNhY3Rpb25faWQpPy50cmFuc2FjdGlvbl9pZDtcblxuICAgICAgICAgICAgICAgIGlmICghdHJhbnNhY3Rpb25faWQpIHtcbiAgICAgICAgICAgICAgICAgICAgdGhyb3cgVE9OQ2xpZW50RXJyb3IuaW50ZXJuYWxFcnJvcignSW52YWxpZCBibG9jayByZWNlaXZlZDogbm8gdHJhbnNhY3Rpb24gSUQnKTtcbiAgICAgICAgICAgICAgICB9XG5cbiAgICAgICAgICAgICAgICAvLyBjaGVjayB0aGF0IHRyYW5zYWN0aW9ucyBjb2xsZWN0aW9uIGlzIHVwZGF0ZWRcbiAgICAgICAgICAgICAgICByZXR1cm4gdGhpcy5xdWVyaWVzLnRyYW5zYWN0aW9ucy53YWl0Rm9yKHtcbiAgICAgICAgICAgICAgICAgICAgZmlsdGVyOiB7XG4gICAgICAgICAgICAgICAgICAgICAgICBpZDogeyBlcTogdHJhbnNhY3Rpb25faWQgfSxcbiAgICAgICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICAgICAgcmVzdWx0OiAnaWQnLFxuICAgICAgICAgICAgICAgICAgICB0aW1lb3V0OiBwcm9jZXNzaW5nVGltZW91dCxcbiAgICAgICAgICAgICAgICAgICAgcGFyZW50U3BhbixcbiAgICAgICAgICAgICAgICB9KTtcbiAgICAgICAgICAgIH07XG5cbiAgICAgICAgICAgIHByb21pc2VzLnB1c2god2FpdEV4cGlyZWQoKSk7XG4gICAgICAgIH1cblxuICAgICAgICAvLyB3YWl0IGZvciBtZXNzYWdlIHByb2Nlc3NpbmcgdHJhbnNhY3Rpb25cbiAgICAgICAgcHJvbWlzZXMucHVzaChuZXcgUHJvbWlzZSgocmVzb2x2ZSwgcmVqZWN0KSA9PiB7XG4gICAgICAgICAgICAoYXN5bmMgKCkgPT4ge1xuICAgICAgICAgICAgICAgIHRyeSB7XG4gICAgICAgICAgICAgICAgICAgIGNvbnN0IHRyID0gYXdhaXQgdGhpcy5xdWVyaWVzLnRyYW5zYWN0aW9ucy53YWl0Rm9yKHtcbiAgICAgICAgICAgICAgICAgICAgICAgIGZpbHRlcjoge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGluX21zZzogeyBlcTogbWVzc2FnZUlkIH0sXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgc3RhdHVzOiB7IGVxOiBRVHJhbnNhY3Rpb25Qcm9jZXNzaW5nU3RhdHVzLmZpbmFsaXplZCB9LFxuICAgICAgICAgICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICAgICAgICAgIHJlc3VsdDogcmVzdWx0RmllbGRzLFxuICAgICAgICAgICAgICAgICAgICAgICAgdGltZW91dDogcHJvY2Vzc2luZ1RpbWVvdXQsXG4gICAgICAgICAgICAgICAgICAgICAgICBwYXJlbnRTcGFuLFxuICAgICAgICAgICAgICAgICAgICB9KTtcbiAgICAgICAgICAgICAgICAgICAgdHJhbnNhY3Rpb25Gb3VuZCA9IHRydWU7XG4gICAgICAgICAgICAgICAgICAgIHJlc29sdmUodHIpO1xuICAgICAgICAgICAgICAgIH0gY2F0Y2ggKGVycm9yKSB7XG4gICAgICAgICAgICAgICAgICAgIHJlamVjdChlcnJvcik7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfSkoKTtcbiAgICAgICAgfSkpO1xuXG4gICAgICAgIGxldCB0cmFuc2FjdGlvbjogUVRyYW5zYWN0aW9uID0gYXdhaXQgUHJvbWlzZS5yYWNlKHByb21pc2VzKTtcblxuICAgICAgICBpZiAoIXRyYW5zYWN0aW9uRm91bmQpIHtcbiAgICAgICAgICAgIHRocm93IFRPTkNsaWVudEVycm9yLm1lc3NhZ2VFeHBpcmVkKCk7XG4gICAgICAgIH1cbiAgICAgICAgY29uc3QgdHJhbnNhY3Rpb25Ob3cgPSB0cmFuc2FjdGlvbi5ub3cgfHwgMDtcbiAgICAgICAgdGhpcy5jb25maWcubG9nKCdwcm9jZXNzTWVzc2FnZS4gdHJhbnNhY3Rpb24gcmVjZWl2ZWQnLCB7XG4gICAgICAgICAgICBpZDogdHJhbnNhY3Rpb24uaWQsXG4gICAgICAgICAgICBibG9ja19pZDogdHJhbnNhY3Rpb24uYmxvY2tfaWQsXG4gICAgICAgICAgICBub3c6IGAke25ldyBEYXRlKHRyYW5zYWN0aW9uTm93ICogMTAwMCkudG9JU09TdHJpbmcoKX0gKCR7dHJhbnNhY3Rpb25Ob3d9KWAsXG4gICAgICAgIH0pO1xuICAgICAgICByZXR1cm4gdHJhbnNhY3Rpb247XG4gICAgfVxuXG5cbiAgICBhc3luYyBwcm9jZXNzRGVwbG95TWVzc2FnZShcbiAgICAgICAgcGFyYW1zOiBUT05Db250cmFjdERlcGxveU1lc3NhZ2UsXG4gICAgICAgIHBhcmVudFNwYW4/OiAoU3BhbiB8IFNwYW5Db250ZXh0KSxcbiAgICAgICAgcmV0cnlJbmRleD86IG51bWJlcixcbiAgICApOiBQcm9taXNlPFRPTkNvbnRyYWN0RGVwbG95UmVzdWx0PiB7XG4gICAgICAgIHRoaXMuY29uZmlnLmxvZygncHJvY2Vzc0RlcGxveU1lc3NhZ2UnLCBwYXJhbXMpO1xuICAgICAgICAvLyBjaGVjayB0aGF0IGFjY291bnQgaXMgYWxyZWFkeSBkZXBsb3llZFxuICAgICAgICBjb25zdCBhY2NvdW50ID0gYXdhaXQgdGhpcy5xdWVyaWVzLmFjY291bnRzLnF1ZXJ5KHtcbiAgICAgICAgICAgIGZpbHRlcjoge1xuICAgICAgICAgICAgICAgIGlkOiB7IGVxOiBwYXJhbXMuYWRkcmVzcyB9LFxuICAgICAgICAgICAgICAgIGFjY190eXBlOiB7IGVxOiBRQWNjb3VudFR5cGUuYWN0aXZlIH0sXG4gICAgICAgICAgICB9LFxuICAgICAgICAgICAgcmVzdWx0OiAnaWQnLFxuICAgICAgICAgICAgcGFyZW50U3BhbixcbiAgICAgICAgfSk7XG4gICAgICAgIGlmIChhY2NvdW50Lmxlbmd0aCA+IDApIHtcbiAgICAgICAgICAgIHJldHVybiB7XG4gICAgICAgICAgICAgICAgYWRkcmVzczogcGFyYW1zLmFkZHJlc3MsXG4gICAgICAgICAgICAgICAgYWxyZWFkeURlcGxveWVkOiB0cnVlLFxuICAgICAgICAgICAgfTtcbiAgICAgICAgfVxuXG4gICAgICAgIGNvbnN0IHRyYW5zYWN0aW9uID0gYXdhaXQgdGhpcy5wcm9jZXNzTWVzc2FnZShcbiAgICAgICAgICAgIHBhcmFtcy5tZXNzYWdlLFxuICAgICAgICAgICAgdHJhbnNhY3Rpb25EZXRhaWxzLFxuICAgICAgICAgICAgcGFyZW50U3BhbixcbiAgICAgICAgICAgIHJldHJ5SW5kZXgsXG4gICAgICAgICk7XG4gICAgICAgIGF3YWl0IGNoZWNrVHJhbnNhY3Rpb24odHJhbnNhY3Rpb24pO1xuICAgICAgICB0aGlzLmNvbmZpZy5sb2coJ3Byb2Nlc3NEZXBsb3lNZXNzYWdlLiBFbmQnKTtcbiAgICAgICAgcmV0dXJuIHtcbiAgICAgICAgICAgIGFkZHJlc3M6IHBhcmFtcy5hZGRyZXNzLFxuICAgICAgICAgICAgYWxyZWFkeURlcGxveWVkOiBmYWxzZSxcbiAgICAgICAgICAgIHRyYW5zYWN0aW9uLFxuICAgICAgICB9O1xuICAgIH1cblxuXG4gICAgYXN5bmMgcHJvY2Vzc1J1bk1lc3NhZ2UoXG4gICAgICAgIHBhcmFtczogVE9OQ29udHJhY3RSdW5NZXNzYWdlLFxuICAgICAgICBwYXJlbnRTcGFuPzogKFNwYW4gfCBTcGFuQ29udGV4dCksXG4gICAgICAgIHJldHJ5SW5kZXg/OiBudW1iZXIsXG4gICAgKTogUHJvbWlzZTxUT05Db250cmFjdFJ1blJlc3VsdD4ge1xuICAgICAgICB0aGlzLmNvbmZpZy5sb2coJ3Byb2Nlc3NSdW5NZXNzYWdlJywgcGFyYW1zKTtcbiAgICAgICAgY29uc3QgdHJhbnNhY3Rpb24gPSBhd2FpdCB0aGlzLnByb2Nlc3NNZXNzYWdlKFxuICAgICAgICAgICAgcGFyYW1zLm1lc3NhZ2UsXG4gICAgICAgICAgICB0cmFuc2FjdGlvbkRldGFpbHMsXG4gICAgICAgICAgICBwYXJlbnRTcGFuLFxuICAgICAgICAgICAgcmV0cnlJbmRleCxcbiAgICAgICAgKTtcbiAgICAgICAgYXdhaXQgY2hlY2tUcmFuc2FjdGlvbih0cmFuc2FjdGlvbik7XG4gICAgICAgIGNvbnN0IG91dHB1dE1lc3NhZ2VzID0gdHJhbnNhY3Rpb24ub3V0X21lc3NhZ2VzO1xuICAgICAgICBpZiAoIW91dHB1dE1lc3NhZ2VzIHx8IG91dHB1dE1lc3NhZ2VzLmxlbmd0aCA9PT0gMCkge1xuICAgICAgICAgICAgcmV0dXJuIHtcbiAgICAgICAgICAgICAgICBvdXRwdXQ6IG51bGwsXG4gICAgICAgICAgICAgICAgdHJhbnNhY3Rpb24sXG4gICAgICAgICAgICB9O1xuICAgICAgICB9XG4gICAgICAgIGNvbnN0IGV4dGVybmFsTWVzc2FnZXM6IFFNZXNzYWdlW10gPSBvdXRwdXRNZXNzYWdlcy5maWx0ZXIoKHg6IFFNZXNzYWdlKSA9PiB7XG4gICAgICAgICAgICByZXR1cm4geC5tc2dfdHlwZSA9PT0gUU1lc3NhZ2VUeXBlLmV4dE91dDtcbiAgICAgICAgfSk7XG4gICAgICAgIHRoaXMuY29uZmlnLmxvZygncHJvY2Vzc1J1bk1lc3NhZ2UuIEJlZm9yZSBtZXNzYWdlcyBwYXJzZScpO1xuICAgICAgICBjb25zdCBvdXRwdXRzID0gYXdhaXQgUHJvbWlzZS5hbGwoZXh0ZXJuYWxNZXNzYWdlcy5tYXAoKHg6IFFNZXNzYWdlKSA9PiB7XG4gICAgICAgICAgICByZXR1cm4gdGhpcy5kZWNvZGVPdXRwdXRNZXNzYWdlQm9keSh7XG4gICAgICAgICAgICAgICAgYWJpOiBwYXJhbXMuYWJpLFxuICAgICAgICAgICAgICAgIGJvZHlCYXNlNjQ6IHguYm9keSB8fCAnJyxcbiAgICAgICAgICAgIH0pO1xuICAgICAgICB9KSk7XG4gICAgICAgIGNvbnN0IHJlc3VsdE91dHB1dCA9IG91dHB1dHMuZmluZCgoeDogVE9OQ29udHJhY3REZWNvZGVNZXNzYWdlQm9keVJlc3VsdCkgPT4ge1xuICAgICAgICAgICAgcmV0dXJuIHguZnVuY3Rpb24udG9Mb3dlckNhc2UoKSA9PT0gcGFyYW1zLmZ1bmN0aW9uTmFtZS50b0xvd2VyQ2FzZSgpO1xuICAgICAgICB9KTtcbiAgICAgICAgdGhpcy5jb25maWcubG9nKCdwcm9jZXNzUnVuTWVzc2FnZS4gRW5kJyk7XG4gICAgICAgIHJldHVybiB7XG4gICAgICAgICAgICBvdXRwdXQ6IHJlc3VsdE91dHB1dCA/IHJlc3VsdE91dHB1dC5vdXRwdXQgOiBudWxsLFxuICAgICAgICAgICAgdHJhbnNhY3Rpb24sXG4gICAgICAgIH07XG4gICAgfVxuXG4gICAgYXN5bmMgcHJvY2Vzc1J1bk1lc3NhZ2VMb2NhbChcbiAgICAgICAgcGFyYW1zOiBUT05Db250cmFjdFJ1bk1lc3NhZ2UsXG4gICAgICAgIHdhaXRQYXJhbXM/OiBUT05Db250cmFjdEFjY291bnRXYWl0UGFyYW1zLFxuICAgICAgICBwYXJlbnRTcGFuPzogKFNwYW4gfCBTcGFuQ29udGV4dCksXG4gICAgKTogUHJvbWlzZTxUT05Db250cmFjdFJ1blJlc3VsdD4ge1xuICAgICAgICB0aGlzLmNvbmZpZy5sb2coJ3Byb2Nlc3NSdW5NZXNzYWdlTG9jYWwnLCBwYXJhbXMpO1xuXG4gICAgICAgIGNvbnN0IGFjY291bnQgPSBhd2FpdCB0aGlzLmdldEFjY291bnQocGFyYW1zLmFkZHJlc3MsIHRydWUsIHdhaXRQYXJhbXMsIHBhcmVudFNwYW4pO1xuXG4gICAgICAgIHJldHVybiB0aGlzLnJlcXVlc3RDb3JlKCdjb250cmFjdHMucnVuLmxvY2FsLm1zZycsIHtcbiAgICAgICAgICAgIGFkZHJlc3M6IHBhcmFtcy5hZGRyZXNzLFxuICAgICAgICAgICAgYWNjb3VudCxcbiAgICAgICAgICAgIGFiaTogcGFyYW1zLmFiaSxcbiAgICAgICAgICAgIGZ1bmN0aW9uTmFtZTogcGFyYW1zLmZ1bmN0aW9uTmFtZSxcbiAgICAgICAgICAgIG1lc3NhZ2VCYXNlNjQ6IHBhcmFtcy5tZXNzYWdlLm1lc3NhZ2VCb2R5QmFzZTY0LFxuICAgICAgICB9KTtcbiAgICB9XG5cbiAgICAvLyBGZWUgY2FsY3VsYXRpb25cblxuICAgIGJpZ0JhbGFuY2UgPSAnMHgxMDAwMDAwMDAwMDAwMCc7XG5cbiAgICBhc3luYyBjYWxjUnVuRmVlcyhcbiAgICAgICAgcGFyYW1zOiBUT05Db250cmFjdENhbGNSdW5GZWVQYXJhbXMsXG4gICAgICAgIHBhcmVudFNwYW4/OiAoU3BhbiB8IFNwYW5Db250ZXh0KSxcbiAgICApOiBQcm9taXNlPFRPTkNvbnRyYWN0Q2FsY0ZlZVJlc3VsdD4ge1xuICAgICAgICB0aGlzLmNvbmZpZy5sb2coJ2NhbGNSdW5GZWVzJywgcGFyYW1zKTtcblxuICAgICAgICBjb25zdCBhY2NvdW50ID0gYXdhaXQgdGhpcy5nZXRBY2NvdW50KHBhcmFtcy5hZGRyZXNzLCB0cnVlLCBwYXJhbXMud2FpdFBhcmFtcywgcGFyZW50U3Bhbik7XG5cbiAgICAgICAgaWYgKHBhcmFtcy5lbXVsYXRlQmFsYW5jZSkge1xuICAgICAgICAgICAgYWNjb3VudC5iYWxhbmNlID0gdGhpcy5iaWdCYWxhbmNlO1xuICAgICAgICB9XG5cbiAgICAgICAgcmV0dXJuIHRoaXMucmVxdWVzdENvcmUoJ2NvbnRyYWN0cy5ydW4uZmVlJywge1xuICAgICAgICAgICAgYWRkcmVzczogcGFyYW1zLmFkZHJlc3MsXG4gICAgICAgICAgICBhY2NvdW50LFxuICAgICAgICAgICAgYWJpOiBwYXJhbXMuYWJpLFxuICAgICAgICAgICAgZnVuY3Rpb25OYW1lOiBwYXJhbXMuZnVuY3Rpb25OYW1lLFxuICAgICAgICAgICAgaW5wdXQ6IHBhcmFtcy5pbnB1dCxcbiAgICAgICAgICAgIGtleVBhaXI6IHBhcmFtcy5rZXlQYWlyLFxuICAgICAgICB9KTtcbiAgICB9XG5cbiAgICBhc3luYyBjYWxjRGVwbG95RmVlcyhcbiAgICAgICAgcGFyYW1zOiBUT05Db250cmFjdENhbGNEZXBsb3lGZWVQYXJhbXMsXG4gICAgICAgIHBhcmVudFNwYW4/OiAoU3BhbiB8IFNwYW5Db250ZXh0KSxcbiAgICApOiBQcm9taXNlPFRPTkNvbnRyYWN0Q2FsY0ZlZVJlc3VsdD4ge1xuICAgICAgICB0aGlzLmNvbmZpZy5sb2coJ2NhbGNEZXBsb3lGZWVzJywgcGFyYW1zKTtcblxuICAgICAgICBjb25zdCBtZXNzYWdlID0gYXdhaXQgdGhpcy5jcmVhdGVEZXBsb3lNZXNzYWdlKHBhcmFtcyk7XG5cbiAgICAgICAgcmV0dXJuIHRoaXMuY2FsY01zZ1Byb2Nlc3NGZWVzKHtcbiAgICAgICAgICAgIGFkZHJlc3M6IG1lc3NhZ2UuYWRkcmVzcyxcbiAgICAgICAgICAgIG1lc3NhZ2U6IG1lc3NhZ2UubWVzc2FnZSxcbiAgICAgICAgICAgIGVtdWxhdGVCYWxhbmNlOiBwYXJhbXMuZW11bGF0ZUJhbGFuY2UsXG4gICAgICAgICAgICBuZXdBY2NvdW50OiBwYXJhbXMubmV3QWNjb3VudCxcbiAgICAgICAgfSwgcGFyZW50U3Bhbik7XG4gICAgfVxuXG4gICAgYXN5bmMgY2FsY01zZ1Byb2Nlc3NGZWVzKFxuICAgICAgICBwYXJhbXM6IFRPTkNvbnRyYWN0Q2FsY01zZ1Byb2Nlc3NpbmdGZWVzUGFyYW1zLFxuICAgICAgICBwYXJlbnRTcGFuPzogKFNwYW4gfCBTcGFuQ29udGV4dCksXG4gICAgKTogUHJvbWlzZTxUT05Db250cmFjdENhbGNGZWVSZXN1bHQ+IHtcbiAgICAgICAgdGhpcy5jb25maWcubG9nKCdjYWxjTXNnUHJvY2Vzc0ZlZXMnLCBwYXJhbXMpO1xuXG4gICAgICAgIGxldCBhY2NvdW50OiBRQWNjb3VudCA9IHtcbiAgICAgICAgICAgIGJhbGFuY2U6IHRoaXMuYmlnQmFsYW5jZSxcbiAgICAgICAgICAgIGlkOiBwYXJhbXMuYWRkcmVzcyxcbiAgICAgICAgICAgIGxhc3RfcGFpZDogTWF0aC5mbG9vcihEYXRlLm5vdygpIC8gMTAwMCksXG4gICAgICAgIH07XG5cbiAgICAgICAgaWYgKCFwYXJhbXMubmV3QWNjb3VudCkge1xuICAgICAgICAgICAgYWNjb3VudCA9IGF3YWl0IHRoaXMuZ2V0QWNjb3VudChwYXJhbXMuYWRkcmVzcywgZmFsc2UsIHBhcmFtcy53YWl0UGFyYW1zLCBwYXJlbnRTcGFuKTtcbiAgICAgICAgfVxuXG4gICAgICAgIGlmIChwYXJhbXMuZW11bGF0ZUJhbGFuY2UpIHtcbiAgICAgICAgICAgIGFjY291bnQuYmFsYW5jZSA9IHRoaXMuYmlnQmFsYW5jZTtcbiAgICAgICAgfVxuXG4gICAgICAgIHJldHVybiB0aGlzLnJlcXVlc3RDb3JlKCdjb250cmFjdHMucnVuLmZlZS5tc2cnLCB7XG4gICAgICAgICAgICBhZGRyZXNzOiBwYXJhbXMuYWRkcmVzcyxcbiAgICAgICAgICAgIGFjY291bnQsXG4gICAgICAgICAgICBtZXNzYWdlQmFzZTY0OiBwYXJhbXMubWVzc2FnZS5tZXNzYWdlQm9keUJhc2U2NCxcbiAgICAgICAgfSk7XG4gICAgfVxuXG4gICAgLy8gQWRkcmVzcyBwcm9jZXNzaW5nXG5cbiAgICBhc3luYyBjb252ZXJ0QWRkcmVzcyhwYXJhbXM6IFRPTkNvbnRyYWN0Q29udmVydEFkZHJlc3NQYXJhbXMpOiBQcm9taXNlPFRPTkNvbnRyYWN0Q29udmVydEFkZHJlc3NSZXN1bHQ+IHtcbiAgICAgICAgcmV0dXJuIHRoaXMucmVxdWVzdENvcmUoJ2NvbnRyYWN0cy5hZGRyZXNzLmNvbnZlcnQnLCBwYXJhbXMpO1xuICAgIH1cblxuICAgIC8vIEludGVybmFsc1xuXG4gICAgYXN5bmMgaW50ZXJuYWxEZXBsb3lOYXRpdmUocGFyYW1zOiBUT05Db250cmFjdERlcGxveVBhcmFtcyk6IFByb21pc2U8VE9OQ29udHJhY3REZXBsb3lSZXN1bHQ+IHtcbiAgICAgICAgcmV0dXJuIHRoaXMucmVxdWVzdENvcmUoJ2NvbnRyYWN0cy5kZXBsb3knLCB7XG4gICAgICAgICAgICBhYmk6IHBhcmFtcy5wYWNrYWdlLmFiaSxcbiAgICAgICAgICAgIGNvbnN0cnVjdG9ySGVhZGVyOiBwYXJhbXMuY29uc3RydWN0b3JIZWFkZXIsXG4gICAgICAgICAgICBjb25zdHJ1Y3RvclBhcmFtczogcGFyYW1zLmNvbnN0cnVjdG9yUGFyYW1zLFxuICAgICAgICAgICAgaW5pdFBhcmFtczogcGFyYW1zLmluaXRQYXJhbXMsXG4gICAgICAgICAgICBpbWFnZUJhc2U2NDogcGFyYW1zLnBhY2thZ2UuaW1hZ2VCYXNlNjQsXG4gICAgICAgICAgICBrZXlQYWlyOiBwYXJhbXMua2V5UGFpcixcbiAgICAgICAgfSk7XG4gICAgfVxuXG5cbiAgICBhc3luYyBpbnRlcm5hbFJ1bk5hdGl2ZShwYXJhbXM6IFRPTkNvbnRyYWN0UnVuUGFyYW1zKTogUHJvbWlzZTxUT05Db250cmFjdFJ1blJlc3VsdD4ge1xuICAgICAgICByZXR1cm4gYXdhaXQgdGhpcy5yZXF1ZXN0Q29yZSgnY29udHJhY3RzLnJ1bicsIHtcbiAgICAgICAgICAgIGFkZHJlc3M6IHBhcmFtcy5hZGRyZXNzLFxuICAgICAgICAgICAgYWJpOiBwYXJhbXMuYWJpLFxuICAgICAgICAgICAgZnVuY3Rpb25OYW1lOiBwYXJhbXMuZnVuY3Rpb25OYW1lLFxuICAgICAgICAgICAgaGVhZGVyOiBwYXJhbXMuaGVhZGVyLFxuICAgICAgICAgICAgaW5wdXQ6IHBhcmFtcy5pbnB1dCxcbiAgICAgICAgICAgIGtleVBhaXI6IHBhcmFtcy5rZXlQYWlyLFxuICAgICAgICB9KTtcbiAgICB9XG5cbiAgICBtYWtlRXhwaXJlSGVhZGVyKFxuICAgICAgICBhYmk6IFRPTkNvbnRyYWN0QUJJLFxuICAgICAgICB1c2VySGVhZGVyPzogYW55LFxuICAgICAgICByZXRyeUluZGV4PzogbnVtYmVyLFxuICAgICk6IGFueSB7XG4gICAgICAgIGNvbnN0IHRpbWVvdXQgPSB0aGlzLmNvbmZpZy5tZXNzYWdlRXhwaXJhdGlvblRpbWVvdXQocmV0cnlJbmRleCk7XG4gICAgICAgIGlmIChhYmkuaGVhZGVyICYmIGFiaS5oZWFkZXIuaW5jbHVkZXMoJ2V4cGlyZScpICYmICF1c2VySGVhZGVyPy5leHBpcmUpIHtcbiAgICAgICAgICAgIHJldHVybiB7XG4gICAgICAgICAgICAgICAgLi4udXNlckhlYWRlcixcbiAgICAgICAgICAgICAgICBleHBpcmU6IE1hdGguZmxvb3IoKERhdGUubm93KCkgKyB0aW1lb3V0KSAvIDEwMDApICsgMVxuICAgICAgICAgICAgfTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIHJldHVybiB1c2VySGVhZGVyO1xuICAgICAgICB9XG4gICAgfVxuXG4gICAgYXN5bmMgcmV0cnlDYWxsKGNhbGw6IChpbmRleDogbnVtYmVyKSA9PiBQcm9taXNlPGFueT4pOiBQcm9taXNlPGFueT4ge1xuICAgICAgICBjb25zdCByZXRyaWVzQ291bnQgPSB0aGlzLmNvbmZpZy5tZXNzYWdlUmV0cmllc0NvdW50KCk7XG4gICAgICAgIGZvciAobGV0IGkgPSAwOyBpIDw9IHJldHJpZXNDb3VudDsgaSsrKSB7XG4gICAgICAgICAgICBpZiAoaSA+IDApIHtcbiAgICAgICAgICAgICAgICB0aGlzLmNvbmZpZy5sb2coYFJldHJ5ICMke2l9YCk7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICB0cnkge1xuICAgICAgICAgICAgICAgIHJldHVybiBhd2FpdCBjYWxsKGkpO1xuICAgICAgICAgICAgfSBjYXRjaCAoZXJyb3IpIHtcbiAgICAgICAgICAgICAgICBpZiAoIVRPTkNsaWVudEVycm9yLmlzTWVzc2FnZUV4cGlyZWQoZXJyb3IpKSB7XG4gICAgICAgICAgICAgICAgICAgIHRocm93IGVycm9yO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgICB0aHJvdyBUT05DbGllbnRFcnJvci5tZXNzYWdlRXhwaXJlZCgpO1xuICAgIH1cblxuICAgIGFzeW5jIGludGVybmFsRGVwbG95SnMoXG4gICAgICAgIHBhcmFtczogVE9OQ29udHJhY3REZXBsb3lQYXJhbXMsXG4gICAgICAgIHBhcmVudFNwYW4/OiAoU3BhbiB8IFNwYW5Db250ZXh0KSxcbiAgICApOiBQcm9taXNlPFRPTkNvbnRyYWN0RGVwbG95UmVzdWx0PiB7XG4gICAgICAgIHRoaXMuY29uZmlnLmxvZygnRGVwbG95IHN0YXJ0Jyk7XG4gICAgICAgIHJldHVybiB0aGlzLnJldHJ5Q2FsbChhc3luYyAocmV0cnlJbmRleCkgPT4ge1xuICAgICAgICAgICAgY29uc3QgbWVzc2FnZSA9IGF3YWl0IHRoaXMuY3JlYXRlRGVwbG95TWVzc2FnZShwYXJhbXMsIHJldHJ5SW5kZXgpO1xuICAgICAgICAgICAgcmV0dXJuIHRoaXMucHJvY2Vzc0RlcGxveU1lc3NhZ2UobWVzc2FnZSwgcGFyZW50U3BhbiwgcmV0cnlJbmRleCk7XG4gICAgICAgIH0pO1xuICAgIH1cblxuXG4gICAgYXN5bmMgaW50ZXJuYWxSdW5KcyhcbiAgICAgICAgcGFyYW1zOiBUT05Db250cmFjdFJ1blBhcmFtcyxcbiAgICAgICAgcGFyZW50U3Bhbj86IChTcGFuIHwgU3BhbkNvbnRleHQpLFxuICAgICk6IFByb21pc2U8VE9OQ29udHJhY3RSdW5SZXN1bHQ+IHtcbiAgICAgICAgdGhpcy5jb25maWcubG9nKCdSdW4gc3RhcnQnKTtcbiAgICAgICAgcmV0dXJuIHRoaXMucmV0cnlDYWxsKGFzeW5jIChyZXRyeUluZGV4KSA9PiB7XG4gICAgICAgICAgICBjb25zdCBtZXNzYWdlID0gYXdhaXQgdGhpcy5jcmVhdGVSdW5NZXNzYWdlKHBhcmFtcywgcmV0cnlJbmRleCk7XG4gICAgICAgICAgICByZXR1cm4gdGhpcy5wcm9jZXNzUnVuTWVzc2FnZShtZXNzYWdlLCBwYXJlbnRTcGFuLCByZXRyeUluZGV4KTtcbiAgICAgICAgfSk7XG4gICAgfVxuXG4gICAgYXN5bmMgZ2V0QWNjb3VudChcbiAgICAgICAgYWRkcmVzczogc3RyaW5nLFxuICAgICAgICBhY3RpdmU6IGJvb2xlYW4sXG4gICAgICAgIHdhaXRQYXJhbXM/OiBUT05Db250cmFjdEFjY291bnRXYWl0UGFyYW1zLFxuICAgICAgICBwYXJlbnRTcGFuPzogKFNwYW4gfCBTcGFuQ29udGV4dCksXG4gICAgKTogUHJvbWlzZTxRQWNjb3VudD4ge1xuICAgICAgICBmdW5jdGlvbiByZW1vdmVUeXBlTmFtZShvYmo6IGFueSkge1xuICAgICAgICAgICAgaWYgKG9iai5fX3R5cGVuYW1lKSB7XG4gICAgICAgICAgICAgICAgZGVsZXRlIG9iai5fX3R5cGVuYW1lO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgT2JqZWN0LnZhbHVlcyhvYmopXG4gICAgICAgICAgICAgICAgLmZvckVhY2goKHZhbHVlKSA9PiB7XG4gICAgICAgICAgICAgICAgICAgIGlmICghIXZhbHVlICYmIHR5cGVvZiB2YWx1ZSA9PT0gJ29iamVjdCcpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIHJlbW92ZVR5cGVOYW1lKHZhbHVlKTtcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIH0pO1xuICAgICAgICB9XG5cbiAgICAgICAgY29uc3QgZmlsdGVyOiB7IFtzdHJpbmddOiBhbnkgfSA9IHtcbiAgICAgICAgICAgIGlkOiB7IGVxOiBhZGRyZXNzIH0sXG4gICAgICAgIH07XG4gICAgICAgIGlmICh3YWl0UGFyYW1zICYmIHdhaXRQYXJhbXMudHJhbnNhY3Rpb25MdCkge1xuICAgICAgICAgICAgZmlsdGVyLmxhc3RfdHJhbnNfbHQgPSB7IGdlOiB3YWl0UGFyYW1zLnRyYW5zYWN0aW9uTHQgfTtcbiAgICAgICAgfVxuICAgICAgICBpZiAoYWN0aXZlKSB7XG4gICAgICAgICAgICBmaWx0ZXIuYWNjX3R5cGUgPSB7IGVxOiBRQWNjb3VudFR5cGUuYWN0aXZlIH07XG4gICAgICAgIH1cblxuICAgICAgICB0aGlzLmNvbmZpZy5sb2coJ2dldEFjY291bnQuIEZpbHRlcicsIGZpbHRlcik7XG4gICAgICAgIGNvbnN0IGFjY291bnQgPSBhd2FpdCB0aGlzLnF1ZXJpZXMuYWNjb3VudHMud2FpdEZvcihcbiAgICAgICAgICAgIGZpbHRlcixcbiAgICAgICAgICAgICdpZCBjb2RlIGRhdGEgYmFsYW5jZSBiYWxhbmNlX290aGVyIHsgY3VycmVuY3kgdmFsdWUgfSBsYXN0X3BhaWQnLFxuICAgICAgICAgICAgd2FpdFBhcmFtcyAmJiB3YWl0UGFyYW1zLnRpbWVvdXQsXG4gICAgICAgICAgICBwYXJlbnRTcGFuLFxuICAgICAgICApO1xuXG4gICAgICAgIHJlbW92ZVR5cGVOYW1lKGFjY291bnQpO1xuICAgICAgICB0aGlzLmNvbmZpZy5sb2coJ2dldEFjY291bnQuIEFjY291bnQgcmVjaWV2ZWQnLCBhY2NvdW50KTtcbiAgICAgICAgcmV0dXJuIGFjY291bnQ7XG4gICAgfVxuXG4gICAgYXN5bmMgaW50ZXJuYWxSdW5Mb2NhbEpzKFxuICAgICAgICBwYXJhbXM6IFRPTkNvbnRyYWN0UnVuTG9jYWxQYXJhbXMsXG4gICAgICAgIHBhcmVudFNwYW4/OiAoU3BhbiB8IFNwYW5Db250ZXh0KSxcbiAgICApOiBQcm9taXNlPFRPTkNvbnRyYWN0UnVuUmVzdWx0PiB7XG4gICAgICAgIGNvbnN0IGFjY291bnQgPSBhd2FpdCB0aGlzLmdldEFjY291bnQoXG4gICAgICAgICAgICBwYXJhbXMuYWRkcmVzcyxcbiAgICAgICAgICAgIHRydWUsXG4gICAgICAgICAgICBwYXJhbXMud2FpdFBhcmFtcyxcbiAgICAgICAgICAgIHBhcmVudFNwYW4sXG4gICAgICAgICk7XG5cbiAgICAgICAgcmV0dXJuIHRoaXMucmVxdWVzdENvcmUoJ2NvbnRyYWN0cy5ydW4ubG9jYWwnLCB7XG4gICAgICAgICAgICBhZGRyZXNzOiBwYXJhbXMuYWRkcmVzcyxcbiAgICAgICAgICAgIGFjY291bnQsXG4gICAgICAgICAgICBhYmk6IHBhcmFtcy5hYmksXG4gICAgICAgICAgICBmdW5jdGlvbk5hbWU6IHBhcmFtcy5mdW5jdGlvbk5hbWUsXG4gICAgICAgICAgICBpbnB1dDogcGFyYW1zLmlucHV0LFxuICAgICAgICAgICAga2V5UGFpcjogcGFyYW1zLmtleVBhaXIsXG4gICAgICAgIH0pO1xuICAgIH1cbn1cblxuVE9OQ29udHJhY3RzTW9kdWxlLm1vZHVsZU5hbWUgPSAnVE9OQ29udHJhY3RzTW9kdWxlJztcblxuYXN5bmMgZnVuY3Rpb24gY2hlY2tUcmFuc2FjdGlvbih0cmFuc2FjdGlvbjogUVRyYW5zYWN0aW9uKSB7XG4gICAgaWYgKCF0cmFuc2FjdGlvbi5hYm9ydGVkKSB7XG4gICAgICAgIHJldHVybjtcbiAgICB9XG5cbiAgICBmdW5jdGlvbiBub2RlRXJyb3IobWVzc2FnZTogc3RyaW5nLCBjb2RlOiBudW1iZXIsIHBoYXNlOiBzdHJpbmcpIHtcbiAgICAgICAgY29uc3QgUkVQTEFZX1BST1RFQ1RJT04gPSA1MjtcbiAgICAgICAgY29uc3QgTUVTU0FHRV9FWFBJUkVEID0gNTc7XG4gICAgICAgIGNvbnN0IGlzTm9kZVNFTWVzc2FnZUV4cGlyZWQgPSBwaGFzZSA9PT0gVE9OQ2xpZW50VHJhbnNhY3Rpb25QaGFzZS5jb21wdXRlVm1cbiAgICAgICAgICAgICYmIChjb2RlID09PSBNRVNTQUdFX0VYUElSRUQgfHwgY29kZSA9PT0gUkVQTEFZX1BST1RFQ1RJT04pO1xuICAgICAgICByZXR1cm4gaXNOb2RlU0VNZXNzYWdlRXhwaXJlZFxuICAgICAgICAgICAgPyBUT05DbGllbnRFcnJvci5tZXNzYWdlRXhwaXJlZCgpXG4gICAgICAgICAgICA6IG5ldyBUT05DbGllbnRFcnJvcihcbiAgICAgICAgICAgICAgICBgJHttZXNzYWdlfSAoJHtjb2RlfSkgYXQgJHtwaGFzZX1gLFxuICAgICAgICAgICAgICAgIGNvZGUsXG4gICAgICAgICAgICAgICAgVE9OQ2xpZW50RXJyb3Iuc291cmNlLk5PREUsXG4gICAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgICAgICBwaGFzZSxcbiAgICAgICAgICAgICAgICAgICAgdHJhbnNhY3Rpb25faWQ6IHRyYW5zYWN0aW9uLmlkLFxuICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICApO1xuICAgIH1cblxuICAgIGNvbnN0IHN0b3JhZ2UgPSB0cmFuc2FjdGlvbi5zdG9yYWdlO1xuICAgIGlmIChzdG9yYWdlKSB7XG4gICAgICAgIGNvbnN0IHN0YXR1cyA9IHN0b3JhZ2Uuc3RhdHVzX2NoYW5nZTtcbiAgICAgICAgaWYgKHN0YXR1cyA9PT0gUUFjY291bnRTdGF0dXNDaGFuZ2UuZnJvemVuKSB7XG4gICAgICAgICAgICB0aHJvdyBub2RlRXJyb3IoXG4gICAgICAgICAgICAgICAgJ0FjY291bnQgd2FzIGZyb3plbiBkdWUgc3RvcmFnZSBwaGFzZScsXG4gICAgICAgICAgICAgICAgVE9OQ2xpZW50U3RvcmFnZVN0YXR1cy5mcm96ZW4sXG4gICAgICAgICAgICAgICAgVE9OQ2xpZW50VHJhbnNhY3Rpb25QaGFzZS5zdG9yYWdlLFxuICAgICAgICAgICAgKTtcbiAgICAgICAgfVxuICAgICAgICBpZiAoc3RhdHVzID09PSBRQWNjb3VudFN0YXR1c0NoYW5nZS5kZWxldGVkKSB7XG4gICAgICAgICAgICB0aHJvdyBub2RlRXJyb3IoXG4gICAgICAgICAgICAgICAgJ0FjY291bnQgd2FzIGRlbGV0ZWQgZHVlIHN0b3JhZ2UgcGhhc2UnLFxuICAgICAgICAgICAgICAgIFRPTkNsaWVudFN0b3JhZ2VTdGF0dXMuZGVsZXRlZCxcbiAgICAgICAgICAgICAgICBUT05DbGllbnRUcmFuc2FjdGlvblBoYXNlLnN0b3JhZ2UsXG4gICAgICAgICAgICApO1xuICAgICAgICB9XG4gICAgfVxuXG4gICAgY29uc3QgY29tcHV0ZSA9IHRyYW5zYWN0aW9uLmNvbXB1dGU7XG4gICAgaWYgKGNvbXB1dGUpIHtcbiAgICAgICAgaWYgKGNvbXB1dGUuY29tcHV0ZV90eXBlID09PSBRQ29tcHV0ZVR5cGUuc2tpcHBlZCkge1xuICAgICAgICAgICAgY29uc3QgcmVhc29uID0gY29tcHV0ZS5za2lwcGVkX3JlYXNvbjtcbiAgICAgICAgICAgIGlmIChyZWFzb24gPT09IFFTa2lwUmVhc29uLm5vU3RhdGUpIHtcbiAgICAgICAgICAgICAgICB0aHJvdyBub2RlRXJyb3IoXG4gICAgICAgICAgICAgICAgICAgICdBY2NvdW50IGhhcyBubyBjb2RlIGFuZCBkYXRhJyxcbiAgICAgICAgICAgICAgICAgICAgVE9OQ2xpZW50Q29tcHV0ZVNraXBwZWRTdGF0dXMubm9TdGF0ZSxcbiAgICAgICAgICAgICAgICAgICAgVE9OQ2xpZW50VHJhbnNhY3Rpb25QaGFzZS5jb21wdXRlU2tpcHBlZCxcbiAgICAgICAgICAgICAgICApO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgaWYgKHJlYXNvbiA9PT0gUVNraXBSZWFzb24uYmFkU3RhdGUpIHtcbiAgICAgICAgICAgICAgICB0aHJvdyBub2RlRXJyb3IoXG4gICAgICAgICAgICAgICAgICAgICdBY2NvdW50IGhhcyBiYWQgc3RhdGU6IGZyb3plbiBvciBkZWxldGVkJyxcbiAgICAgICAgICAgICAgICAgICAgVE9OQ2xpZW50Q29tcHV0ZVNraXBwZWRTdGF0dXMuYmFkU3RhdGUsXG4gICAgICAgICAgICAgICAgICAgIFRPTkNsaWVudFRyYW5zYWN0aW9uUGhhc2UuY29tcHV0ZVNraXBwZWQsXG4gICAgICAgICAgICAgICAgKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGlmIChyZWFzb24gPT09IFFTa2lwUmVhc29uLm5vR2FzKSB7XG4gICAgICAgICAgICAgICAgdGhyb3cgbm9kZUVycm9yKFxuICAgICAgICAgICAgICAgICAgICAnTm8gZ2FzIHRvIGV4ZWN1dGUgVk0nLFxuICAgICAgICAgICAgICAgICAgICBUT05DbGllbnRDb21wdXRlU2tpcHBlZFN0YXR1cy5ub0dhcyxcbiAgICAgICAgICAgICAgICAgICAgVE9OQ2xpZW50VHJhbnNhY3Rpb25QaGFzZS5jb21wdXRlU2tpcHBlZCxcbiAgICAgICAgICAgICAgICApO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgdGhyb3cgbm9kZUVycm9yKFxuICAgICAgICAgICAgICAgICdDb21wdXRlIHBoYXNlIHNraXBwZWQgYnkgdW5rbm93biByZWFzb24nLFxuICAgICAgICAgICAgICAgIC0xLFxuICAgICAgICAgICAgICAgIFRPTkNsaWVudFRyYW5zYWN0aW9uUGhhc2UuY29tcHV0ZVNraXBwZWQsXG4gICAgICAgICAgICApO1xuICAgICAgICB9XG4gICAgICAgIGlmIChjb21wdXRlLmNvbXB1dGVfdHlwZSA9PT0gUUNvbXB1dGVUeXBlLnZtKSB7XG4gICAgICAgICAgICBpZiAoIWNvbXB1dGUuc3VjY2Vzcykge1xuICAgICAgICAgICAgICAgIHRocm93IG5vZGVFcnJvcihcbiAgICAgICAgICAgICAgICAgICAgJ1ZNIHRlcm1pbmF0ZWQgd2l0aCBleGNlcHRpb24nLFxuICAgICAgICAgICAgICAgICAgICBjb21wdXRlLmV4aXRfY29kZSB8fCAwLFxuICAgICAgICAgICAgICAgICAgICBUT05DbGllbnRUcmFuc2FjdGlvblBoYXNlLmNvbXB1dGVWbSxcbiAgICAgICAgICAgICAgICApO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgfVxuXG4gICAgY29uc3QgYWN0aW9uID0gdHJhbnNhY3Rpb24uYWN0aW9uO1xuICAgIGlmIChhY3Rpb24pIHtcbiAgICAgICAgaWYgKCFhY3Rpb24uc3VjY2Vzcykge1xuICAgICAgICAgICAgdGhyb3cgbm9kZUVycm9yKFxuICAgICAgICAgICAgICAgIGFjdGlvbi5ub19mdW5kc1xuICAgICAgICAgICAgICAgICAgICA/ICdUb28gbG93IGJhbGFuY2UgdG8gc2VuZCBvdXRib3VuZCBtZXNzYWdlJ1xuICAgICAgICAgICAgICAgICAgICA6ICghYWN0aW9uLnZhbGlkID8gJ091dGJvdW5kIG1lc3NhZ2UgaXMgaW52YWxpZCcgOiAnQWN0aW9uIHBoYXNlIGZhaWxlZCcpLFxuICAgICAgICAgICAgICAgIGFjdGlvbi5yZXN1bHRfY29kZSB8fCAwLFxuICAgICAgICAgICAgICAgIFRPTkNsaWVudFRyYW5zYWN0aW9uUGhhc2UuYWN0aW9uLFxuICAgICAgICAgICAgKTtcbiAgICAgICAgfVxuICAgIH1cblxuICAgIHRocm93IG5vZGVFcnJvcihcbiAgICAgICAgJ1RyYW5zYWN0aW9uIGFib3J0ZWQnLFxuICAgICAgICAtMSxcbiAgICAgICAgVE9OQ2xpZW50VHJhbnNhY3Rpb25QaGFzZS51bmtub3duLFxuICAgICk7XG59XG5cbmNvbnN0IHRyYW5zYWN0aW9uRGV0YWlscyA9IGBcbiAgICBpZFxuICAgIGluX21zZ1xuICAgIHRyX3R5cGVcbiAgICBzdGF0dXNcbiAgICBpbl9tc2dcbiAgICBvdXRfbXNnc1xuICAgIGJsb2NrX2lkXG4gICAgbm93XG4gICAgYWJvcnRlZFxuICAgIGx0XG4gICAgc3RvcmFnZSB7XG4gICAgICAgIHN0YXR1c19jaGFuZ2VcbiAgICB9XG4gICAgY29tcHV0ZSB7XG4gICAgICAgIGNvbXB1dGVfdHlwZVxuICAgICAgICBza2lwcGVkX3JlYXNvblxuICAgICAgICBzdWNjZXNzXG4gICAgICAgIGV4aXRfY29kZVxuICAgICAgICBnYXNfZmVlc1xuICAgICAgICBnYXNfdXNlZFxuICAgIH1cbiAgICBhY3Rpb24ge1xuICAgICAgICBzdWNjZXNzXG4gICAgICAgIHZhbGlkXG4gICAgICAgIHJlc3VsdF9jb2RlXG4gICAgICAgIG5vX2Z1bmRzXG4gICAgfVxuICAgIG91dF9tZXNzYWdlcyB7XG4gICAgICAgIGlkXG4gICAgICAgIG1zZ190eXBlXG4gICAgICAgIGJvZHlcbiAgICB9XG4gICBgO1xuIl19